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

function oneDayFn(myLabel) {
    const btnElem = document.getElementById("OneDayID");
    var param3 = "/intraday-prices";
    const requestURL = testUrl + param1 + param2 + symbol + param3 + "?token=" + testApiToken;
    $.ajax({
        url: requestURL,
        type: 'GET',
        success: function (res) {
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                const dataObj = res[i];
                const volData = dataObj.average;
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

function oneMonthFn(myLabel) {
    const btnElem = document.getElementById("OneMonthID");
    var param3 = "/intraday-prices";
    var param3 = "/chart/";
    var timeRange = "1m";
    const requestURL = testUrl + param1 + param2 + symbol + param3 + timeRange + "?token=" + testApiToken;
    $.ajax({
        url: requestURL,
        type: 'GET',
        success: function (res) {
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                const dataObj = res[i];
                const volData = dataObj.close;
                const labelValue = dataObj.label;
                if (!dataSetsLabel.includes(labelValue)) {
                    dataSetsLabel.push(labelValue);
                }
                const volNum = parseInt(volData);
                console.log("volData:[" + i + "]: " + volNum);
                if (!isNaN(volNum)) {
                    dataSets.push(volNum);
                }
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

function threeMonthFn(myLabel) {
    const btnElem = document.getElementById("ThreeMonthID");
    var param3 = "/intraday-prices";
    var param3 = "/chart/";
    var timeRange = "3m";
    const requestURL = testUrl + param1 + param2 + symbol + param3 + timeRange + "?token=" + testApiToken;
    $.ajax({
        url: requestURL,
        type: 'GET',
        success: function (res) {
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                const dataObj = res[i];
                const volData = dataObj.close;
                const labelValue = dataObj.label;
                if (!dataSetsLabel.includes(labelValue)) {
                    dataSetsLabel.push(labelValue);
                }
                const volNum = parseInt(volData);
                console.log("volData:[" + i + "]: " + volNum);
                if (!isNaN(volNum)) {
                    dataSets.push(volNum);
                }
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

function oneYearFn(myLabel) {
    const btnElem = document.getElementById("OneYearID");
    var param3 = "/intraday-prices";
    var param3 = "/chart/";
    var timeRange = "1y";
    const requestURL = testUrl + param1 + param2 + symbol + param3 + timeRange + "?token=" + testApiToken;
    $.ajax({
        url: requestURL,
        type: 'GET',
        success: function (res) {
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                const dataObj = res[i];
                const volData = dataObj.close;
                const labelValue = dataObj.label;
                if (!dataSetsLabel.includes(labelValue)) {
                    dataSetsLabel.push(labelValue);
                }
                const volNum = parseInt(volData);
                console.log("volData:[" + i + "]: " + volNum);
                if (!isNaN(volNum)) {
                    dataSets.push(volNum);
                }
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

function allIdFn(myLabel) {
    const btnElem = document.getElementById("AllID");
    var param3 = "/intraday-prices";
    var param3 = "/chart/";
    var timeRange = "max";
    const requestURL = testUrl + param1 + param2 + symbol + param3 + timeRange + "?token=" + testApiToken;
    $.ajax({
        url: requestURL,
        type: 'GET',
        success: function (res) {
            //console.log(res);
            for (var i = 0; i < res.length; i++) {
                const dataObj = res[i];
                const volData = dataObj.close;
                const labelValue = dataObj.label;
                if (!dataSetsLabel.includes(labelValue)) {
                    dataSetsLabel.push(labelValue);
                }
                const volNum = parseInt(volData);
                console.log("volData:[" + i + "]: " + volNum);
                if (!isNaN(volNum)) {
                    dataSets.push(volNum);
                }
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