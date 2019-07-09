
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
    }
}, 2000);

// updating the watchlist
function updatingWatchlist() {
    $.get("/api/watchlist/" + currentUser, response => {
        let watchList = $(".watchList ul")[0];
        $(watchList).html = "";
        response.forEach(ticker => {
            console.log(ticker);

            const html = `
        <li class="text-center">
            <hr>
            <a href="/stock/${ticker.Ticker.symbol}">
            <h6>${ticker.Ticker.symbol}</h6>
            </a>
            <h6 class="updated-quote live-data" ticker="${ticker.Ticker.symbol}">-</h6>
        </li>
        `
            $(watchList).append(html);
        });
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
                    <p class="metricsName">${metric.description}</p>
                    <p class="metricsValue" data-id="${metric.id}"></p>
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
            if (response[metricId])
                $(metric).text(response[metricId]);
            else
                $(metric).text("-");
        });
    });
}
//updating the Price Chart 
function updatingChart(period) {
    //console.log("updatingChart period========>" + period + "<========== ticker======>" + ticker);
    $.get("/api/chart/" + period + "/" + ticker, response => {
        var dataSetsLabel = [];
        var dataSets = [];
        for (var i = 0; i < response.length; i++) {
            const dataObj = response[i];
            var volData = dataObj.close;
            const labelValue = dataObj.label;
            if (!dataSetsLabel.includes(labelValue)) {
                dataSetsLabel.push(labelValue);
            }
            const volNum = parseInt(volData);
            dataSets.push(volNum);
            console.log("volData:[" + i + "]: " + volNum);
        }
        //calling the plotChart function from the priceChart.js using the response above
        plotChart(dataSets, dataSetsLabel);
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
                        <div class="card-text articleSummary">${response[i].summary}</div>
                    </div>
                </div>
            </div>
            `
            newsArticles.append(html);
        }
    });
}