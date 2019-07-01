module.exports = function (app) {

    app.get("/api/metric", function (req, res) {
        // Add sequelize code to find all posts, and return them to the user with res.json
        db.Metric.findAll({}).then(function (dbMetric) {
            res.json(dbMetric);
        });
    });
}
