const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/template", (req, res) => {
        //how do I pass in the template id? it has not been created yet..
        db.TemplateMetric.create({
            templateid: req.body.templateid,
            metricid: req.body.metricid
        }).then(response => {
            // console.log(response);
        })

        db.TemplateUser.create({
            uid: req.body.uid,
            templatename: req.body.templatename
        }).then(response => {
            // console.log(response);
        })
    });

}
