var mysql = require("mysql");
const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/template/", (req, res) => {
        console.log(req.body);
        db.TemplateUser.create({
            UserId: req.body.UserId,
            templatename: req.body.templatename,
            uid: req.body.uid,
        }).then(response => {
            console.log(response);

            // connection.query("SELECT LAST_INSERT_ID()", function (err, result) {
            //     if (err) {
            //         throw err;
            //     }
            //how do I pass in the template id? it has not been created
            var templateId = response.dataValues.id;
            db.TemplateMetric.create({
                templateid: templateId,
                MetricId: req.body.MetricId
            }).then(response => {
                console.log(response);
            })


        });

    });
    // })
};
