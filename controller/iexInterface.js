const axios = require("axios");
const iexKeys = require("../config/keys").iex;

const TestToken = iexKeys.test.api;
const TestSecret = iexKeys.test.secret;
const ProdToken = iexKeys.prod.api;
const ProdSecret = iexKeys.prod.secret;

const version = "stable";
const baseUrl = "https://cloud.iexapis.com/stable";
const baseSanboxUrl = "https://sandbox.iexapis.com/stable";

let iexRequest = { test: {}, prod: {} };

if (process.env.ENABLE_PRODUCTION) {
    iexRequest.parseProdUrl = function (q) {
        return `${baseUrl}/${q}/?token=${ProdToken}`;
    }
}
iexRequest.parseTestUrl = function (q) {
    console.log("IEX test query alled");

    return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
}

//timer to automatically refresh the intra-day price chart every 5 seconds
const filter = require("rxjs/operators");
const timer = require("rxjs/observable/timer");
//schedule this to run every 1 to 5 seconds
const source = timer(1000, 5000);
const intradaySched = source.pipe(filter(() => true));
intradaySched.subscribe(() => { return axios.get(iexRequest.parseTestUrl("stock/aapl/intraday-prices")); });
//end of timer

iexRequest.test.symbols = () => { return axios.get(iexRequest.parseTestUrl("ref-data/symbols")); }
iexRequest.prod.symbols = () => { return axios.get(iexRequest.parseProdUrl("ref-data/symbols")); }

iexRequest.test.advancedStats = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/advanced-stats")); }
iexRequest.test.priceTarget = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/price-target")); }
iexRequest.test.balanceSheet = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/balance-sheet")); }
iexRequest.test.keyStats = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/stats")); }
iexRequest.test.cashFlow = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/cash-flow")); }
iexRequest.test.estimates = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/estimates")); }
iexRequest.test.income = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/income")); }
iexRequest.test.financials = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/financials")); }

//iexRequest.test.intraday = () => { return axios.get(iexRequest.parseTestUrl("stock/aapl/intraday-prices")); }
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