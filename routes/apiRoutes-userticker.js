const db = require("../models");

//user selects metrics for template
//post to Template User API/table and Template Metric API/table
module.exports = function (app) {
    app.post("/api/userticker", (req, res) => {
        db.User.create({
            uid: req.body.uid,
            tickerid: req.body.tickerid,
            active: req.body.active
        }).then(response => {
            // console.log(response);
        })
    });

}

