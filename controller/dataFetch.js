const iexRequest = require("./iexInterface").iexRequest;
const db = require("../models");

let dataFetchManager = {};


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

dataFetchManager.getQuotes = async function (timeRange, ticker) {
    // get data from iex server
    if (timeRange !== undefined && timeRange.length > 0) {
        let response = await iexRequest.test.historicalPrices()
        dataObject.daily.historicalPrices = response.data;
        return dataObject.daily.historicalPrices;
    }
    else {
        let response = await iexRequest.test.intraday()
        dataObject.daily.intraday = response.data;
        // returning data
        return dataObject.daily.intraday;
    }
}

dataFetchManager.getNews = function (symbol) {
    console.log(`fetching news for ${symbol}`);
}

module.exports = { dataFetchManager };