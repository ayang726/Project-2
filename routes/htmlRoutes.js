
module.exports = function (app) {
    app.get("/", (req, res) => {
        let jsFiles = [{ js: "./js/userAuth.js" }];

        res.render("welcome", { jsFiles });
    });
    app.get("/home", (req, res) => {
        let jsFiles = [];
        jsFiles.push({ js: "/js/userAuth.js" });
        jsFiles.push({ js: "/js/symbolSearch.js" });
        res.render("home", { jsFiles });
    });

    app.get("/stock/:symbol", (req, res) => {
        let jsFiles = [];
        jsFiles.push({ js: "/js/userAuth.js" });
        jsFiles.push({ js: "/js/symbolSearch.js" });

        let symbol = req.params.symbol;
        res.render("home", { jsFiles, symbol });
    });
}