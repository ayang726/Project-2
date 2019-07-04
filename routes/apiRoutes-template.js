
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
};
