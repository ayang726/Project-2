const db = require("../models");

module.exports = function (app) {

    app.get("/api/templateuser/:currentUser", function (req, res) {
        db.TemplateUser.findAll({
            where: { UserUid: req.params.currentUser }
        }).then(function (dbTemplateUsers) {
            res.json(dbTemplateUsers);
        });
    });


    app.get("/api/templatemetric/:TemplateUserId", function (req, res) {
        db.sequelize.query('SELECT * FROM templateusers tu JOIN templatemetrics tm ON tm.TemplateUserId = tu.id WHERE TemplateUserId = ?',
            {
                replacements: [req.params.TemplateUserId], type: db.sequelize.QueryTypes.SELECT

            }).then(function (result) {
                console.log(req.params.TemplateUserId)
                var ID = result[0].TemplateUserId;
                console.log(result);
                return res.json(result);
            });
    });
}