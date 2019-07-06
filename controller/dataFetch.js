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
    let iexResponse = await iexRequest.test.symbols()
    // massaging data
    const symbols = iexResponse.data.filter(ticker => ticker.region === "US");
    // Storing data to database

    let bulkDataArray = symbols.map(symbol => { return { symbol: symbol.symbol, tickername: symbol.name } });
    // returning data
    db.Ticker.bulkCreate(bulkDataArray).then(bulkCreateResponse => { });
    return bulkDataArray;

}

dataFetchManager.getMetric = function (category, metric, symbol) {
    console.log(`fetching for metrics: ${category}: ${metric}, for ${symbol}`);
}

dataFetchManager.getQuotes = function (period, symbol) {
    console.log(`fetching quotes: ${period} for ${symbol}`);
}

dataFetchManager.getNews = function (symbol) {
    console.log(`fetching news for ${symbol}`);
}


module.exports = { dataFetchManager };