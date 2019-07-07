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
    metricIds.forEach(async id => {
        let dbResponse = await db.TickerMetric.findOne({
            include: [
                { model: db.Metric, where: { id } },
                { model: db.Ticker, where: { symbol: ticker } }
            ]
        });
        if (dbResponse) return dbResponse.value;
        // use IEX to query data then store them into database
        let metric = await db.Metric.findOne({ where: { id } })
        console.log(metric.category);
        let iexResponse = await iexRequest[metric.category](ticker);
        let data = iexResponse.data;
        console.log('===========================');
        console.log(data);
        console.log('===========================');
    });
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