var dataSets = [];
dataSets = [];
dataSetsLabel = [];
const testUrl = "https://sandbox.iexapis.com";
const testApiToken = "Tpk_d1e0d015368c4061af98937e274f629b";
var param1 = "/stable";
var param2 = "/stock/";
var symbol = "AAPL";

const backgroundColorSet = [
'rgba(255, 99, 132, 0.2)',
'rgba(54, 162, 235, 0.2)',
'rgba(255, 206, 86, 0.2)',
'rgba(75, 192, 192, 0.2)',
'rgba(153, 102, 255, 0.2)',
'rgba(255, 159, 64, 0.2)'
];
const borderColorSet = [
'rgba(255, 99, 132, 1)',
'rgba(54, 162, 235, 1)',
'rgba(255, 206, 86, 1)',
'rgba(75, 192, 192, 1)',
'rgba(153, 102, 255, 1)',
'rgba(255, 159, 64, 1)'
];
const borderWidthSet = 1;

const prodUrl = "https://cloud.iexapis.com";
const prodApiToken = "pk_e2c875b16a704e47a1e278ec4974db36";


var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
type: 'line',
data: {
labels: [],
datasets: [{
label: 'Average Price',
data: [],
backgroundColor: backgroundColorSet,
borderColor: borderColorSet,
borderWidth: borderWidthSet
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});


function processRequest(timeRange, param3, btnElemID) {
dataSetsLabel = [];
const btnElem = document.getElementById(btnElemID);
//var param3 = "/intraday-prices";
var requestURL = testUrl + param1 + param2 + symbol + param3 + "?token=" + testApiToken;
if (timeRange !== undefined && timeRange.length > 0) {
requestURL = testUrl + param1 + param2 + symbol + param3 + timeRange + "?token=" + testApiToken;
}
//https://sandbox.iexapis.com/stable/stock/AAPL/chart/1y?token=Tpk_d1e0d015368c4061af98937e274f629b
//https://sandbox.iexapis.com/stable/stock/AAPL/chart/1y?token=Tpk_d1e0d015368c4061af98937e274f629b
console.log("requestURL:"+requestURL);
$.ajax({
url: requestURL,
type: 'GET',
success: function (res) {
//console.log(res);
for (var i = 0; i < res.length; i++) {
const dataObj = res[i];
var volData = dataObj.average;
if (timeRange !== '') {
volData = dataObj.close;
}
const labelValue = dataObj.label;
if (!dataSetsLabel.includes(labelValue)) {
dataSetsLabel.push(labelValue);
}
const volNum = parseInt(volData);
console.log("volData:[" + i + "]: " + volNum);
if (!isNaN(volNum)) {
dataSets.push(volNum);
//myChart.data.datasets[0].data.push(volNum);
}
//dataSets.push(dataObj.volume);
//console.log("dataObj[" + i + "] Volume:" + dataObj.volume);
}
ctx = document.getElementById('myChart').getContext('2d');
myChart = new Chart(ctx, {
type: 'line',
data: {
labels: dataSetsLabel,
datasets: [{
label: 'Average Price',
data: dataSets,
backgroundColor: backgroundColorSet,
borderColor: borderColorSet,
borderWidth: borderWidthSet
}]
},
options: {
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
}
});

};

