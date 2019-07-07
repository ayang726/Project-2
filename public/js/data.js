
// populate chart
// populate news
let routeArr = location.href.split("/");
let ticker = routeArr[routeArr.length - 1];
// updatingWatchlist();
setTimeout(() => {
    updatingTemplates();
}, 2000);
// updating the watchlist
function updatingWatchlist() {
    $.get("/api/watchlist/" + currentUser, response => {
        let watchList = $(".watchList ul")[0];
        watchList.html = "";
        response.forEach(ticker => {
            const html = `
        <li class="text-center">
            <hr>
            <a href="/stock/${ticker.symbol}">
            <h6>${ticker.symbol}</h6>
            </a>
            <h6 class="updated-quote live-data" ticker="${ticker.symbol}">-</h6>
        </li>
        `
            watchList.append(html);
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
                <p>
                    <span class="metricsName">${metric.description}</span>
                    <span class="metricsValue" data-id="${metric.id}" data-name="${metric.name}" data-category="${metric.category}" data-period="${metrics.period}"></span>
                </p>
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
    let reqObject = [];
    $(metricsValueDisplay).each((index, metric) => {
        const metricId = $(metric).attr("data-id");
        const period = $(metric).attr("data-period");
        const metricCategory = $(metric).attr("data-category");
        const metricName = $(metric).attr("data-name");
        reqObject.push({ metricId, period, metricCategory, metricName })
        // $(metric).text(updateValue(id, ticker));
    });
    $.post("/api/getMetricValues", { reqObject, ticker }, response => {

    });
}

// updating the values of a metric
// function updateValue(metricId, ticker) {
//     $.get("/api/tickerMetric/" + metricId + "/" + ticker, response => {
//         return response;
//     });
// }

function updatingChart(period) {
    $.get("/api/chart/" + period + "/" + ticker, response => {
        //call the update Chart function from the priceChart.js using the response
        plotChart(response);
    });
}

function updatingNews() {
    let newsArticles = $("#newsArticles");
    newsArticles.empty
    $.get("/api/news/" + ticker, response => {
        for (let i = 0; i < response.length < 4 ? response.length : 4; i++) {
            const html = `
            <div class="col-lg-3">
                <div class="card newsArticle">
                    <div class="card-body">
                        <a class="articleUrl" href="#">
                            <h5 class="card-title articleTitle">${response[i].title}</h5>
                        </a>
                        <p class="card-text articleSummary">${response[i].summary}</p>
                    </div>
                </div>
            </div>
            `
            newsArticles.append(html);
        }

    });
}