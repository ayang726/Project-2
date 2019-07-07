
// populate chart
// populate news
let ticker;
// updating the watchlist
function updatingWatchlist() {
    $.get("/api/watchlist/" + currentUser, response => {
        let watchList = $(".watchList ul")[0];
        watchList.empty();
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
        let templateDropdown = $("#templateList");
        templateDropdown.empty();
        response.forEach(template => {
            const html = `<button class="dropdown-item" onclick="changeTemplate(${template.templateID})">${template.name}</button>`;
            templateDropdown.append(html);
        });
        changeTemplate(response[0].templateID, currentUser);
    });
}
// change template function used on initial load and on template change
function changeTemplate(templateID) {
    $.get("/api/template/" + templateID, response => {
        let metrics = $("#metrics .row");
        metrics.empty();
        response.forEach(metric => {
            const html = `
            <div class="col-lg-6 metricsCell">
                <p>
                    <span class="metricsName">${metric.description}</span>
                    <span class="metricsValue" data-id="${metric.id}" data-period="${metrics.period}"></span>
                </p>
            </div>
            `;
            metrics.append(html);
        });

        updateMetrics();
    });
}

// update metrics list according to the template selected
function updateMetrics() {
    let metricsValueDisplay = $(".metricsValue");
    metricsValueDisplay.forEach(metric => {
        const id = $(metric).attr("data-id");
        const period = $(metric).attr("data-period");
        $(metric).text(updateValue(id, period));
    });
}

// updating the values of a metric
async function updateValue(metricId) {
    return await $.get("/api/tickerMetric/" + metricId + "/" + ticker);
}

//updating the Price Chart display
function updatingChart(period) {
    $.get("/api/chart/" + period + "/" + ticker, response => {
        //calling the update Chart function from the priceChart.js using the response
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

function updatingLatestPrice() {
    let latestPrice = $("#latestPriceDisplay");
    latestPrice.empty
    $.get("/api/latestPrice/" + ticker, response => {
        latestPrice.append(response);
    });
}