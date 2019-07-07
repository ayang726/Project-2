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

// dataFetchManager.getMetric("keyStats", "avg10Volume", "AAPL")

dataFetchManager.getQuotes = function (period, symbol) {
    console.log(`fetching quotes: ${period} for ${symbol}`);
}

dataFetchManager.getNews = function (symbol) {
    console.log(`fetching news for ${symbol}`);
}


module.exports = { dataFetchManager };