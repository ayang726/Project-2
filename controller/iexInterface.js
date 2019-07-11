const axios = require("axios");
const iexKeys = require("../config/keys").iex;
const configKeys = require("../config/keys").config;

const TestToken = iexKeys.test.api;
const TestSecret = iexKeys.test.secret;
const ProdToken = iexKeys.prod.api;
const ProdSecret = iexKeys.prod.secret;

const version = "stable";
const baseUrl = "https://cloud.iexapis.com/stable";
const baseSanboxUrl = "https://sandbox.iexapis.com/stable";

let iexRequest = { test: {}, prod: {} };

console.log("production key loaded = " + configKeys.enableProd);

if (configKeys.enableProd == "Enable Production") {
    console.log('============================');
    console.log("Warning, Production API Key Loaded");
    console.log('============================');
    iexRequest.parseUrl = function (q) {
        console.log('============================');
        console.log("IEX production query called");
        // return `${baseUrl}/${q}/?token=${ProdToken}`;
        return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
    }
} else {
    iexRequest.parseUrl = function (q) {
        console.log('============================');
        console.log("IEX test query called");
        return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
    }
}

iexRequest.parseTestUrl = function (q) {
    console.log('parseTestUrl q============================>' + q);
    console.log("IEX test query called");
    return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
}
iexRequest.parseProdUrl = function (q) {
    console.log('============================');
    console.log("IEX production query called");
    return `${baseUrl}/${q}/?token=${ProdToken}`;
}


iexRequest['symbols'] = () => { return axios.get(iexRequest.parseUrl("ref-data/symbols")); }
iexRequest['news'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/news/last/4`)); }
iexRequest['price'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/quote/latestPrice`)); }
iexRequest['price-open'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/quote/open`)); }
iexRequest['price-close'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/quote/close`)); }
// iexRequest['news']("AAPL").then(response => {
//     console.log(response.data);

// })
// Metrics requests
iexRequest['advanced-stats'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/advanced-stats`)); }
iexRequest['price-target'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/price-target`)); }
iexRequest['balance-sheet'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/balance-sheet/last`)); }
iexRequest['stats'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/stats`)); }
iexRequest['cash-flow'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/cash-flow/last`)); }
iexRequest['estimates'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/estimates`)); }
iexRequest['income'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/income/last`)); }
iexRequest['financials'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/financials/last`)); }

// Chart quote request
iexRequest.test.historicalPrices = async (timeRange, symbol) => {
    const historicalPriceResponse = await axios.get(iexRequest.parseTestUrl(`stock/${symbol}/chart/${timeRange}`));
    return historicalPriceResponse.data;
}

module.exports = { iexRequest };

//Advanced Stats        
//Price Target
//Balance SHeet        
//Keystats
//Cash FLow Statement
//Estimates
//Income Statement
//Financials