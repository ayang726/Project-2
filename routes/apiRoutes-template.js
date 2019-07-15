
const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/template/", (req, res) => {

        db.TemplateUser.create({
            templatename: req.body[0].templatename,
            UserUid: req.body[0].UserUid,
        }).then(response => {
            // console.log(response);

            //retrieving the templateUserId from the response
            var templateId = response.dataValues.id;
            var bulkCreateArray = [];
            var bodyArray = Object.values(req.body)
            // console.log(bodyArray)

            //creating an array with the MetricId's from the req.body plus the TemplateUserId 
            for (var i = 0; i < bodyArray.length; i++) {
                bulkCreateArray.push({ TemplateUserId: templateId, MetricId: bodyArray[i].MetricId });
            }
            db.TemplateMetric.bulkCreate(bulkCreateArray
            ).then(response => {
                // console.log(response);
            })
        });
    });

    app.post("/api/template/:templatename", (req, res) => {
        db.sequelize.query(`DELETE templatemetrics, templateusers FROM templatemetrics
            join templateusers on templatemetrics.TemplateUserId = templateusers.id 
            WHERE  templateusers.templatename = ?`,
            {
                replacements: [req.params.templatename], type: db.sequelize.QueryTypes.DELETE
            })
        db.TemplateUser.create({
            templatename: req.body[0].templatename,
            UserUid: req.body[0].UserUid
        }).then(response => {
            // console.log(response);

            //retrieving the templateUserId from the response
            var templateId = response.dataValues.id;
            var bulkCreateArray = [];
            var bodyArray = Object.values(req.body)

            //creating an array with the MetricId's from the req.body plus the TemplateUserId 
            for (var i = 0; i < bodyArray.length; i++) {
                bulkCreateArray.push({ TemplateUserId: templateId, MetricId: bodyArray[i].MetricId });
            }
            db.TemplateMetric.bulkCreate(bulkCreateArray
            ).then(response => {
                // console.log(response);
            })
        });
    });

    app.post("/api/template/delete/:templatename", function (req, res) {
        db.TemplateUser.destroy({
            where: {
                templatename: req.params.templatename
            }
        }
        ).then(function (dbTemplateUsers) {
            res.json(dbTemplateUsers);
        });
    });
};
