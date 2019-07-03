module.exports = function (app) {
    app.post("/api/ticker", (req, res) => {
        db.User.create({
            symbol: req.body.symbol,
            tickername: req.body.tickername
        }).then(response => {
            // console.log(response);
        })
    });

}

