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

iexRequest.test.symbols = function () { return axios.get(iexRequest.parseTestUrl("ref-data/symbols")); }
iexRequest.prod.symbols = function () { return axioçs.get(iexRequest.parseProdUrl("ref-data/symbols")); }

module.exports = { iexRequest };

