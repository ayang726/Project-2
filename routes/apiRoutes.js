const dataFetchManager = require("../controller/dataFetch").dataFetchManager;
const db = require("../models");

module.exports = function (app) {
    // THIS IS TEMPORARY
    // TEST CODE



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
            res.sendStatus(200);
        })
    });

    // storing user recentsearches
    app.post("/api/recentSearches", (req, res) => {
        db.Ticker.findOne({ where: { symbol: req.body.symbol } }).then(response => {
            const TickerId = response.id;
            const UserUid = req.body.uid;
            db.RecentSearch.create({ TickerId, UserUid }).then(response => {
                res.sendStatus(200);
            });
        });
    });

    // Getting user recent searches
    app.get("/api/recentSearches/:uid", (req, res) => {
        db.RecentSearch.findAll({
            where: { UserUid: req.params.uid },
            include: [{
                model: db.Ticker,
            }]
        }).
            then(response => {
                res.json(response);
            });
    });

    // getthing the different symbols a user has in the watchlist
    app.get("/api/watchlist/:uid", (req, res) => {
        db.UserTicker.findAll({
            where: { UserUid: req.params.uid },
            include: [{ model: db.Ticker }]
        })
            .then(response => {
                res.json(response);
            });
    });

    app.post("/api/watchlist/:ticker/:uid", (req, res) => {
        db.Ticker.findOne({ where: { symbol: req.params.ticker } }).then(tickerResponse => {
            const tickerId = tickerResponse.dataValues.id;
            db.UserTicker.create({
                UserUid: req.params.uid,
                TickerId: tickerId
            }).then(response => { res.sendStatus(200) });
        });

    });

    // Getthing different templates a particular user has
    app.get("/api/templates/:uid", (req, res) => {
        db.TemplateUser.findAll({ where: { UserUid: req.params.uid } })
            .then(response => {
                res.json(response);
            });
    });

    // Getting template of a user to generate different metrics table
    app.get("/api/template/:templateUserId", (req, res) => {
        let responseObj = [];
        db.TemplateMetric.findAll({
            where: { TemplateUserId: req.params.templateUserId },
            include: [{
                model: db.Metric,
            }]
        })
            .then(response => {
                // a list of metricsids
                response.forEach(templateMetric => {
                    let id = templateMetric.dataValues.MetricId;
                    let description = templateMetric.dataValues.Metric.metricDescription;
                    let period = templateMetric.dataValues.Metric.period;
                    let category = templateMetric.dataValues.Metric.category;
                    let name = templateMetric.dataValues.Metric.name;
                    responseObj.push({ id, description, period, category, name });
                });

                res.json(responseObj);
            });
    });
    //========================================//
    // IEX API Calls //
    //========================================//
    app.get("/api/symbols", async (req, res) => {
        let result = await dataFetchManager.getSymbols();
        // console.log("results from apiRoutes" + result[0]);
        res.json({ data: result });
    });

    app.post("/api/getMetricValues", async (req, res) => {
        const metricIds = req.body.metricIds;
        const ticker = req.body.ticker;
        let response = await dataFetchManager.getMetrics(metricIds, ticker);
        res.json(response.data);
    });

    // getting the chart data for the period requested for a symbol
    app.get("/api/chart/:period/:ticker", async (req, res) => {
        //console.log("APIROUTES req.params.period=====>" + req.params.period + "<======= req.params.ticker=======>" + req.params.ticker + "<=======")
        const jsonRespObj = await dataFetchManager.getQuotes(req.params.period, req.params.ticker);
        //console.log("jsonRespObj stringify=====>" + Object.getOwnPropertyNames(jsonRespObj[0]) + "<=======");
        return res.json(jsonRespObj);
    });

    // Getting the news for a ticker symbol
    app.get("/api/news/:ticker", async (req, res) => {
        let result = await dataFetchManager.getNews(req.params.ticker);
        res.json(result);
    });
};