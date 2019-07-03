const iexRequest = require("./iexInterface").iexRequest;

let dataObject = { daily: {} };
let dataFetchManager = {};

dataFetchManager.getSymbols = async function () {
    // Get data from on the server storage
    if (dataObject.daily.symbols !== undefined) return dataObject.daily.symbols;
    // get data from iex server
    let response = await iexRequest.test.symbols()
    // massaging data
    dataObject.daily.symbols = response.data.filter(ticker => ticker.region === "US");
    // returning data
    return dataObject.daily.symbols;
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