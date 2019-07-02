const db = require("../models");

module.exports = function (app) {

    app.get("/api/metric", function (req, res) {
        db.Metric.findAll({}).then(function (dbMetrics) {
            res.json(dbMetrics);
        });
    });
}
