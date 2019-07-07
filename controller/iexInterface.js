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

if (configKeys.enableProd == false) {
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
    console.log('============================');
    console.log("IEX test query called");
    return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
}
iexRequest.parseProdUrl = function (q) {
    console.log('============================');
    console.log("IEX production query called");
    return `${baseUrl}/${q}/?token=${ProdToken}`;
}




iexRequest['symbols'] = () => { return axios.get(iexRequest.parseUrl("ref-data/symbols")); }
iexRequest['advanced-stats'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/advanced-stats`)); }
iexRequest['price-target'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/price-target`)); }
iexRequest['balance-sheet'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/balance-sheet`)); }
iexRequest['stats'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/stats`)); }
iexRequest['cash-flow'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/cash-flow`)); }
iexRequest['estimates'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/estimates`)); }
iexRequest['income'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/income`)); }
iexRequest['financials'] = (symbol) => { return axios.get(iexRequest.parseUrl(`stock/${symbol}/financials`)); }

iexRequest.test.intraday = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/intraday-prices")); }
iexRequest.test.historicalPrices = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/chart/1m")); }

module.exports = { iexRequest };

//Advanced Stats        
//Price Target
//Balance SHeet        
//Keystats
//Cash FLow Statement
//Estimates
//Income Statement
//Financials