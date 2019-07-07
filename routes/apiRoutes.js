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
        db.UserTicker.findAll({ where: { UserUid: req.params.uid } })
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
                    let description = templateMetric.dataValues.Metric.description;
                    let period = templateMetric.dataValues.Metric.period;
                    let category = templateMetric.dataValues.Metric.category;
                    let name = templateMetric.dataValues.Metric.metric;
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

    // getthing the metric value for a symbol
    // this needs to be changed to one request pulling all metrics data 
    // app.get("/api/tickerMetric/:metricId/:ticker", (req, res) => {
    //     db.Metric.findOne(({ where: { id: req.params.metricId } }))
    //         .then(response => {
    //             const metricCategory = response.category;
    //             const metricName = response.metric;
    //             // call dataFetch object's functiosn
    //             res.json(dataFetchManager.getMetric(metricCategory, metricName, req.params.ticker));
    //         });
    // });

    app.post("/api/getMetricValues", (req, res) => {
        const reqObject = req.body.reqObject;
        const ticker = req.body.ticker;
        dataFetchManager.getMetrics(reqObject, ticker);
    });

    // getting the chart data for the period requested for a symbol
    app.get("/api/chart/:period/:ticker", (req, res) => {
        res.json(dataFetchManager.getQuotes(req.params.period, req.params.ticker));
    });

    // Getting the news for a ticker symbol
    app.get("/api/news/:ticker", (req, res) => {
        res.json(dataFetchManager.getNews(ticker));
    });
};