// const axios = require("axios");
// const Chart = require("chart.js");

const TestToken = "Tpk_95839b7496334aa5a6cb0cb8dbdc1a93";
const TestSecret = "Tsk_d99e9b6d17c84918b48a86a267fdfe58";
const ProdToken = "pk_fb4ee7dc55bc42fe92fc228c775ff20b";
const ProdSecret = "sk_87f97b0d8af2499fb0c28e2b15b8f743";


const baseUrl = "https://cloud.iexapis.com/stable";
const baseSanboxUrl = "https://sandbox.iexapis.com/stable";
const version = "stable";

// Time Series
const timeSeriesUrl = `${baseUrl}/time-series/?token=${ProdToken}`;
const timeSeriesTestUrl = `${baseSanboxUrl}/time-series/?token=${TestToken}`;

// console.log(timeSeriesUrl);

// let url = parseTestUrl("time-series/REPORTED_FINANCIALS/AAPL");
// let url = parseProdUrl("time-series/REPORTED_FINANCIALS/AAPL");

// let url = parseProdUrl("data-points/aapl")

// let url = parseTestUrl("stock/aapl/stats/peRatio")
function parseProdUrl(q) {
    return `${baseUrl}/${q}/?token=${ProdToken}`;
}
function parseTestUrl(q) {
    return `${baseSanboxUrl}/${q}/?token=${TestToken}`;
}

let url = parseTestUrl("stock/aapl/intraday-prices")

// console.log(url);
// console.log('-----------------------------------------');

var ctx = document.getElementById('chart').getContext('2d');


$.get(url).then(data => {
    let parsedData = [];
    let minute = 0;
    let max = 0;
    let min = 99999;
    data.forEach((e, i) => {
        if (e.average > max && e.average != null) max = e.average;
        if (e.average < min && e.average != null) {
            min = e.average;
        }

        if (i % 1 === 0) {
            parsedData.push({
                x: minute,
                y: e.average
            });
        }
        minute++
    });
    // myChart.data.datasets.data = parsedData;
    // console.log(parsedData);
    // console.log(`min = ${min}`);
    // console.log(`max = ${max}`);

    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: new Array(390 / 1),
            datasets: [{
                data: parsedData,
                label: "Apple Inc."
                // pointBackgroundColor: "rgb(255, 0, 0)"
            }],
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        min: min,
                        max: max
                    }
                }],
                xAxes: [{
                    ticks: {
                        min: 0,
                        max: 390,
                        stepSize: 1
                    }
                }]
            }
        }
    });
});

// axios.get(url).then(data => {
//     // console.log(data.data);



// });

