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