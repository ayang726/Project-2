
module.exports = function (app) {
    app.get("/", (req, res) => {
        let jsFiles = [{ js: "./js/userAuth.js" }];

        res.render("welcome", { jsFiles });
    });
    app.get("/home", (req, res) => {
        res.render("home");
    });

    app.get("/stock/:symbol", (req, res) => {
        let symbol = req.params.symbol;
        res.render("home", { symbol });
    });

    app.get("/template", function (req, res) {
        res.render("template");

    });
}