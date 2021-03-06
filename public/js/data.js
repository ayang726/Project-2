
// populate chart
// populate news
let routeArr = location.href.split("/");
let route = routeArr[routeArr.length - 2];
let ticker = routeArr[routeArr.length - 1];

// updatingWatchlist();
setTimeout(() => {
    if (route === "stock") {
        updatingTemplates();
        updatingWatchlist();
        updatingNews();
        updatingChart('1d')
    }
}, 500);

// updating the watchlist
function updatingWatchlist() {
    $.get("/api/watchlist/" + currentUser, response => {
        let watchList = $(".watchList ul")[0];
        $(watchList).html = "";
        response.forEach(ticker => {
            const html = `
        <li class="text-center">
            <hr>
            <a href="/stock/${ticker.Ticker.symbol}">
            <h6>${ticker.Ticker.symbol}</h6>
            </a>
            <h6 class="updated-quote" ticker="${ticker.Ticker.symbol}">-</h6>
        </li>
        `
            $(watchList).append(html);
        });
        updateLiveQuote();
        setInterval(function () {
            updateLiveQuote();
        }, 1000 * 60 * 5)
    });
}

function updateLiveQuote() {
    let liveQuotes = $(".updated-quote");
    let symbols = [];
    liveQuotes.each((i, quote) => {
        let symbol = $(quote).attr("ticker");
        symbols.push(symbol);
        $.get(`/api/price/${symbol}`, response => {
            $(quote).text("$" + response);
        })
    });
}


// Update the list of templates
function updatingTemplates() {
    $.get("/api/templates/" + currentUser, response => {
        if (response.length === 0) {
            let metrics = $("#metrics .row")[0];
            $(metrics).html("");
            const html = `<h5>Please go to the Templates Page to create a template</h5>`;
            $(metrics).append(html);
            return;
        }
        let templateDropdown = $("#templateList");
        templateDropdown.empty();
        response.forEach(template => {
            const html = `<button class="dropdown-item" onclick="changeTemplate(${template.id})">${template.templatename}</button>`;
            templateDropdown.append(html);
        });

        changeTemplate(response[0].id);
    });
}
// change template function used on initial load and on template change
function changeTemplate(templateID) {
    let metrics = $("#metrics .row")[0];
    $(metrics).empty();
    $.get("/api/template/" + templateID, response => {
        // console.log(response);
        response.forEach(metric => {
            const html = `
            <div class="col-lg-6 metricsCell">

                    <p class="metricsName text-center"><strong>${metric.description}</strong></p>
                    <p class="metricsValue text-center" data-id="${metric.id}" data-name="${metric.name}"></p>

            </div>
            `;
            $(metrics).append(html);
        });

        updateMetrics();
    });
}

// update metrics list according to the template selected
// this should be changed to update all metrics value simultanuously
function updateMetrics() {
    let metricsValueDisplay = $(".metricsValue");
    let metricIds = [];
    $(metricsValueDisplay).each((index, metric) => {
        const metricId = $(metric).attr("data-id");
        metricIds.push(metricId)
        // $(metric).text(updateValue(id, ticker));
    });
    if (metricIds.length === 0) return;
    $.post("/api/getMetricValues", { metricIds, ticker }, response => {
        $(metricsValueDisplay).each((index, metric) => {
            const metricId = $(metric).attr("data-id");
            const metricName = $(metric).attr("data-name");
            const metricValue = response[metricId]
            if (metricValue)
                $(metric).text(metricFormatter(metricValue, metricName));
            else
                $(metric).text("-");
        });
    });
}


//updating the Price Chart 
let updateChartTimer1D;
function updatingChart(period) {
    // console.log("I'm called msg202")
    if (updateChartTimer1D) clearTimeout(updateChartTimer1D)
    $.get("/api/chart/" + period + "/" + ticker, response => {
        var dataSetsLabel = [];
        var dataSets = [];
        // plotChart(dataSets, dataSetsLabel); //to clear the graph
        for (var i = 0; i < response.length; i++) {
            const dataObj = response[i];

            var volData = dataObj.close;
            const labelValue = dataObj.label;
            if (!dataSetsLabel.includes(labelValue)) {
                dataSetsLabel.push(labelValue);
            }
            const volNum = parseFloat(volData);
            dataSets.push(volNum);
        }
        //calling the plotChart function from the priceChart.js using the response above
        plotChart(dataSets, dataSetsLabel); //plot new graph
    });
    if (period === "1d") {
        updateChartTimer1D = setTimeout(() => {
            updatingChart(period)
        }, 60 * 5 * 1000);
    }
    // updatingPriceDisplay();
    updatingOpenPriceDisplay();
    updatingClosingPriceDisplay();
}

//Displaying the latest Stock Price 
// function updatingPriceDisplay() {
//     $.get("/api/price/" + ticker, response => {
//         let priceDisplay = $("#priceDisplay");

//         priceDisplay.html("$" + response);
//         if ($(".d-inline-block").text() === $(".updated-quote").attr("ticker")) {
//             $(".updated-quote").text("$" + response);
//         }

//         priceDisplay.html("Today: $" + response);
//     });
// }

function updatingOpenPriceDisplay() {
    $.get("/api/price-open/" + ticker, response => {
        let priceDisplayOpen = $("#openPriceDisplay");
        priceDisplayOpen.html("Opening: $" + response);
    });
}

function updatingClosingPriceDisplay() {
    $.get("/api/price-close/" + ticker, response => {
        let priceDisplayClose = $("#closingPriceDisplay");
        priceDisplayClose.html("Closing: $" + response);

    });
}

function updatingNews() {
    let newsArticles = $("#newsArticles");
    newsArticles.html("");
    $.get("/api/news/" + ticker, response => {
        for (let i = 0; i < response.length < 4 ? response.length : 4; i++) {
            const html = `
            <div class="col-lg-3">
                <div class="card newsArticle">
                    <div class="card-body">
                        <a class="articleUrl" href="${response[i].url}">
                            <h5 class="card-title articleTitle">${response[i].headline}</h5>
                        </a>
                    </div>
                </div>
            </div>
            `
            newsArticles.append(html);
        }
    });
}