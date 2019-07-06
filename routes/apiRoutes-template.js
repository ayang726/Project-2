
const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/template/", (req, res) => {

        var numberOfMetrics = req.body.length;
        console.log(req.body[0]);
        db.TemplateUser.create({
            UserId: req.body[0].UserId,
            templatename: req.body[0].templatename,
            uid: req.body[0].uid,
        }).then(response => {
            console.log(response);

            //retrieving the templateUserId from the response
            var templateId = response.dataValues.id;
            var bulkCreateArray = [];

            console.log("HERE");
            console.log(req.body);

            // console.log(templateId);
            console.log("LOOKHERE");
            // console.log(Object.values(req.body));
            var bodyArray = Object.values(req.body)
            console.log(bodyArray)

            //creating an array with the MetricId's from the req.body plus the TemplateUserId 
            for (var i = 0; i < bodyArray.length; i++) {
                bulkCreateArray.push({ TemplateUserId: templateId, MetricId: bodyArray[i].MetricId });
            }
            console.log("overHere");
            console.log(bulkCreateArray);
            db.TemplateMetric.bulkCreate(bulkCreateArray
                // {
                // TemplateUserId: templateId,
                // MetricId: req.body.MetricId
                // }
            ).then(response => {
                console.log(response);
            })


        });

    });
    // })


    //TemplateUserId: templateId
    // db.TemplateMetric.update({
    //     TemplateUserId: req.body[0].UserId,
    //     uid: req.body[0].uid
    //   }, {
    //     where: {
    //       id: req.body.id
    //     }

    app.post("/api/template/:templatename", (req, res) => {
        var templatename = req.params.templatename;
        db.sequelize.query(`DELETE templatemetrics, templateusers FROM templatemetrics
            join templateusers on templatemetrics.TemplateUserId = templateusers.id 
            WHERE  templateusers.templatename = ?`,
            {
                replacements: [req.params.templatename], type: db.sequelize.QueryTypes.DELETE
            })
        console.log(req.body[0]);
        db.TemplateUser.create({
            UserId: req.body[0].UserId,
            templatename: req.body[0].templatename,
            uid: req.body[0].uid
        }).then(response => {
            console.log(response);

            //retrieving the templateUserId from the response
            var templateId = response.dataValues.id;
            var bulkCreateArray = [];

            console.log("HERE");
            console.log(req.body);

            // console.log(templateId);
            console.log("LOOKHERE");
            // console.log(Object.values(req.body));
            var bodyArray = Object.values(req.body)
            console.log(bodyArray)

            //creating an array with the MetricId's from the req.body plus the TemplateUserId 
            for (var i = 0; i < bodyArray.length; i++) {
                bulkCreateArray.push({ TemplateUserId: templateId, MetricId: bodyArray[i].MetricId });
            }
            console.log("overHere");
            console.log(bulkCreateArray);
            db.TemplateMetric.bulkCreate(bulkCreateArray
                // {
                // TemplateUserId: templateId,
                // MetricId: req.body.MetricId
                // }
            ).then(response => {
                console.log(response);
            })


        });

    });
    // })

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
