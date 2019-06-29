const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/tickermetric", (req, res) => {
        db.User.create({
            tickerid: req.body.tickerid,
            metricid: req.body.metricid,
            value: req.body.value
        }).then(response => {
            // console.log(response);
        })
    });

}

