const db = require("../models");



//SELECT * FROM templateusers tu JOIN templatemetrics tm ON tm.TemplateUserId = tu.id WHERE TemplateUserId = ?;


module.exports = function (app) {

    app.get("/api/templateuser", function (req, res) {
        db.TemplateUser.findAll({}).then(function (dbTemplateUsers) {
            res.json(dbTemplateUsers);
        });
    });


    app.get("/api/templatemetric/:TemplateUserId", function (req, res) {
        db.sequelize.query('SELECT * FROM templateusers tu JOIN templatemetrics tm ON tm.TemplateUserId = tu.id WHERE TemplateUserId = ?',
            {
                replacements: [req.params.TemplateUserId], type: db.sequelize.QueryTypes.SELECT

                // db.TemplateMetric.findAll({
                //     where: {
                //         TemplateUserId: req.params.TemplateUserId
                //     }
                // include: [
                //     {
                //         model: db.TemplateUser
                //     }
                // ]

            }).then(function (result) {
                console.log(req.params.TemplateUserId)
                var ID = result[0].TemplateUserId;
                console.log(result);
                // return res.json(result);
                return res.json(result);

                // db.TemplateUser.findOne({
                //     where: {
                //         id: ID
                //     }
                // }).then(function (result) {
                //     console.log(result);
                //     return res.json(result);
                // });
            });
    });
}