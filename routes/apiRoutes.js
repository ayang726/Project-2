const dataFetchManager = require("../controller/dataFetch").dataFetchManager;
const db = require("../models");

module.exports = function (app) {

    // IEX API Calls
    app.get("/api/symbols", async (req, res) => {
        let result = await dataFetchManager.getSymbols();
        res.json({ data: result });
    });

    // Database API calls
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

    app.post("/api/recentSearches", (req, res) => {
        db.RecentSearch.create({
            symbol: req.body.symbol,
            name: req.body.name,
            uid: req.body.uid
        }).then(response => {
            res.json(response);
        });
    });
    app.get("/api/recentSearches/:uid", (req, res) => {
        db.RecentSearch.findAll({ where: { uid: req.params.uid } }).
            then(response => {
                res.json(response);
            });
    });

    app.get("/api/watchlist/:uid", (req, res) => {
        db.WatchList.findAll({ where: { uid: req.params.uid } })
            .then(response => {
                res.json(response);
            });
    });
    app.get("/api/templates/:uid", (req, res) => {
        db.UserTemplates.findAll({ where: { uid: req.params.uid } })
            .then(response => {
                res.json(response);
            });
    });

    app.get("/api/template/:templateID", (req, res) => {
        db.TemplateMetrics.findAll({ where: { templateID: req.params.templateID } })
            // this query needs to join the metrics table to also return metrics period
            .then(response => {
                res.json(response);
            });
    });

    app.get("/api/tickerMetric/:metricId/:ticker", (req, res) => {
        // call dataFetch object's functiosn
        db.Metrics.findOne(({ where: { metricId: req.params.metricId } }))
            .then(response => {
                const metricCategory = response.category;
                const metricName = response.name;
                res.json(dataFetchManager
                    .getMetric(metricCategory, metricName, req.params.ticker));
            });
    });

    app.get("/api/chart/:period/:ticker", (req, res) => {
        res.json(dataFetchManager.getQuotes(req.params.period, req.params.ticker));
    });

    app.get("/api/news/:ticker", (req, res) => {
        res.json(dataFetchManager.getNews(ticker));
    });
};