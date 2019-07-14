
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("welcome");
    });
    app.get("/home", (req, res) => {
        res.render("home")
    });

    app.get("/stock/:ticker", (req, res) => {
        let ticker = req.params.ticker;

        res.render("home", { ticker });
    });


    app.get("/template", function (req, res) {
        res.render("template");

    });

}
