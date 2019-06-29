const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/templatemetric", (req, res) => {
        db.User.create({
            templateid: req.body.templateid,
            metricid: req.body.metricid,
        }).then(response => {
            // console.log(response);
        })
    });

}
