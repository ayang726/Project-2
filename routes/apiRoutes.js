const dataFetchManager = require("../controller/dataFetch").dataFetchManager;
const db = require("../models");

module.exports = function (app) {

    // IEX API Calls
    app.get("/api/symbols", async (req, res) => {
        let result = await dataFetchManager.symbols();
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
    app.get("/api/users/:uid/recentSearches", (req, res) => {
        db.RecentSearch.findAll({ where: { uid: req.params.uid } }).
            then(response => {
                res.json(response);
            });
    });
};