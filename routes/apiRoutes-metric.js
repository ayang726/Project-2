module.exports = function (app) {
    app.post("/api/metric", (req, res) => {
        db.User.create({
            metric: req.body.metric,
            period: req.body.period,
            value: req.body.value
        }).then(response => {
            // console.log(response);
        })
    });

}
