const dataFetchManager = require("../controller/dataFetch").dataFetchManager;
const db = require("../models");

module.exports = function (app) {


    //========================================//
    // Database API calls //
    //========================================//
    app.post("/api/users/create", (req, res) => {
        db.User.create({
            uid: req.body.uid,
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }).then(response => {
            // console.log(response);
        })
    });

    // storing user recentsearches
    app.post("/api/recentSearches", (req, res) => {
        db.RecentSearch.create({
            symbol: req.body.symbol,
            name: req.body.name,
            uid: req.body.uid
        }).then(response => {
            res.json(response);
        });
    });

    // Getting user recent searches
    app.get("/api/recentSearches/:uid", (req, res) => {
        db.RecentSearch.findAll({ where: { uid: req.params.uid } }).
            then(response => {
                res.json(response);
            });
    });

    // getthing the different symbols a user has in the watchlist
    app.get("/api/watchlist/:uid", (req, res) => {
        db.WatchList.findAll({ where: { uid: req.params.uid } })
            .then(response => {
                res.json(response);
            });
    });

    // Getthing different templates a particular user has
    app.get("/api/templates/:uid", (req, res) => {
        db.UserTemplates.findAll({ where: { uid: req.params.uid } })
            .then(response => {
                res.json(response);
            });
    });

    // Getting template of a user to generate different metrics table
    app.get("/api/template/:templateID", (req, res) => {
        db.TemplateMetrics.findAll({ where: { templateID: req.params.templateID } })
            // this query needs to join the metrics table to also return metrics period
            .then(response => {
                res.json(response);
            });
    });
    //========================================//
    // IEX API Calls //
    //========================================//
    app.get("/api/symbols", async (req, res) => {
        let result = await dataFetchManager.getSymbols();
        res.json({ data: result });
    });

    // getthing the metric value for a symbol
    // this needs to be changed to one request pulling all metrics data 
    app.get("/api/tickerMetric/:metricId/:ticker", (req, res) => {
        db.Metrics.findOne(({ where: { metricId: req.params.metricId } }))
            .then(response => {
                const metricCategory = response.category;
                const metricName = response.name;
                // call dataFetch object's functiosn
                res.json(dataFetchManager
                    .getMetric(metricCategory, metricName, req.params.ticker));
            });
    });

    // getting the chart data for the period requested for a symbol
    app.get("/api/chart/:period/:ticker", (req, res) => {
        res.json(dataFetchManager.getQuotes(req.params.period, req.params.ticker));
    });

    // Getting the news for a ticker symbol
    app.get("/api/news/:ticker", (req, res) => {
        res.json(dataFetchManager.getNews(ticker));
    });

    // Getting the latest quote price for a ticker symbol
    app.get("/api/latestPrice/:ticker", (req, res) => {
        res.json(dataFetchManager.getLatestPrice(ticker));
    });

};