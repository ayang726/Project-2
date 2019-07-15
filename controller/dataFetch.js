const iexRequest = require("./iexInterface").iexRequest;
const db = require("../models");

let dataFetchManager = {};

resetDatabaseAt(7, 0);

function resetDatabaseAt(hour, minute = 0) {
    var now = new Date();
    var millisTill10 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minute, 0, 0) - now;
    if (millisTill10 < 0) {
        millisTill10 += 86400000; // it's after 10am, try 10am tomorrow.
    }
    setTimeout(function () {
        resetDatabaseAt(7)
        clearTickerMetricsDatabase()
    }, millisTill10);
}
function clearTickerMetricsDatabase() {
    console.log("=========== Resetting TickerMetrics Table ===========");

    db.TickerMetric.destroy({
        where: {},
        truncate: true
    }).then(response => {
        console.log("=========== TickerMetrics Table has been reset===========");
    })


}

dataFetchManager.getSymbols = async function () {
    // Get data from on the server storage
    let databaseResponse = await db.Ticker.findAll({});
    if (databaseResponse.length !== 0) {
        return databaseResponse
    };
    // get data from iex server
    let iexResponse = await iexRequest.symbols()
    // massaging data
    const symbols = iexResponse.data.filter(ticker => ticker.region === "US");
    // Storing data to database

    let bulkDataArray = symbols.map(symbol => { return { symbol: symbol.symbol, tickername: symbol.name } });
    // returning data
    db.Ticker.bulkCreate(bulkDataArray).then(bulkCreateResponse => { });
    return bulkDataArray;

}

dataFetchManager.getMetrics = async function (metricIds, ticker) {
    let responseObject = {};
    if (!metricIds) return
    for (let i = 0; i < metricIds.length; i++) {
        const id = metricIds[i];

        let dbResponse = await db.TickerMetric.findOne({
            include: [
                { model: db.Metric, where: { id } },
                { model: db.Ticker, where: { symbol: ticker } }
            ]
        });
        if (dbResponse) {
            responseObject[id] = dbResponse.value;
        } else {
            // use IEX to query data then store them into database
            let metric = await db.Metric.findOne({ where: { id } })
            let iexResponse = await iexRequest[metric.category](ticker);
            let data = iexResponse.data;


            // console.log('===========================');
            // console.log(metric.category);
            // console.log(data);
            switch (metric.category) {
                case "advanced-stats":
                case "price-target":
                case "stats":
                case "estimates":
                    data = data;
                    break;
                case "balance-sheet":
                    data = data.balancesheet[0];
                    break;
                case "cash-flow":
                    data = data.cashflow[0];
                    break;
                case "income":
                    data = data.income[0];
                    break;
                case "financials":
                    data = data.financials[0];
                    break;
            }
            // store data in database
            db.Metric.findAll({ where: { category: metric.category } }).then(metricsResponse => {
                db.Ticker.findOne({ where: { symbol: ticker } }).then(tickerFound => {
                    let bulkInsertion = [];
                    metricsResponse.forEach(metric => {
                        if (Object.keys(data).includes(metric.name)) {
                            let value;
                            if (data[metric.name])
                                value = data[metric.name].toString();
                            else
                                value = null;
                            // console.log('msg 103');
                            // console.log(metric.name);
                            // console.log(value);
                            bulkInsertion.push({ value, MetricId: metric.id, TickerId: tickerFound.id })
                        }
                    });

                    db.TickerMetric.bulkCreate(bulkInsertion);
                })
            });

            responseObject[id] = data[metric.name];
            // console.log('===========================');
        }

    };

    // console.log('msg - 102');

    // console.log(responseObject);
    return { data: responseObject };

}

dataFetchManager.getQuotes = async function (timeRange, symbol) {
    // get data from iex server
    if (timeRange !== undefined) {
        let response;

        if (timeRange === "1d") { response = await iexRequest["intradayPrices"](symbol); }
        else { response = await iexRequest["historicalPrices"](symbol, timeRange); }
        return response.data;
    }
}

dataFetchManager.getLatestPrice = async function (symbol) {
    let response = await iexRequest['price'](symbol);
    let result = JSON.stringify(response.data);
    return result;
}

dataFetchManager.getLatestPriceOpen = async function (symbol) {
    let response = await iexRequest['price-open'](symbol);
    let result = JSON.stringify(response.data);
    return result;
}

dataFetchManager.getLatestPriceClose = async function (symbol) {
    let response = await iexRequest['price-close'](symbol);
    let result = JSON.stringify(response.data);
    return result;
}

dataFetchManager.getNews = async function (symbol) {
    let results = await iexRequest['news'](symbol);
    // console.log(result.data);
    results = results.data;
    let responseObject = [];
    results.forEach(news => {
        responseObject.push({
            headline: news.headline,
            url: news.url,
            summary: news.summary
        })
    });
    return responseObject;
}

module.exports = { dataFetchManager };