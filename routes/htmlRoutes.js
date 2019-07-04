
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.render("welcome");
    });
    app.get("/home", (req, res) => {
        // let watchList = fetchWatchList(req.params.uid);
        // let templates = fetchTemplateList(req.params.uid);
        res.render("home")
    });

    app.get("/stock/:ticker", (req, res) => {
        let ticker = req.params.ticker;
        // let watchList = fetchWatchList(req.params.uid);
        // let templates = fetchTemplateList(req.params.uid);

        // TEST CODE
        // watchList = [{ ticker: "AAPL" }, { ticker: "MSFT" }, { ticker: "MDB" }];
        // templates = [{ name: "template 1" }, { name: "mytemplate" }];
        res.render("home", { ticker });
    });


    app.get("/template", function (req, res) {
        res.render("template");

    });

}

// These functions should be in a controller js
function fetchWatchList(uid) {
    // TODO fetch watch list data from database given uid
    console.log("fetchWatchList to be implemented " + uid);
}

function fetchTemplateList(uid) {
    console.log("fetchTemplates to be implemented " + uid);
}