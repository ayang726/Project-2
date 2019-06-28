const iexRequest = require("./iexInterface").iexRequest;

let dataObject = { daily: {} };
let dataFetchManager = {};

dataFetchManager.symbols = async function () {
    if (dataObject.daily.symbols !== undefined) return dataObject.daily.symbols;
    let promise = await iexRequest.test.symbols()
    dataObject.daily.symbols = promise.data.filter(ticker => ticker.region === "US");
    return dataObject.daily.symbols
}

module.exports = { dataFetchManager };