// const path = require("path");
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("welcome", {});
    });
    app.get("/home", (req, res) => {
        res.render("home", {});
    });
}