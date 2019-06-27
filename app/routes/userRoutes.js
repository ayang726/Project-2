const firebase = require("firebase");


module.exports = function (app) {
    app.post("/login", (req, res) => {
        const promise = firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
        promise.catch(error => {
            console.log(error);
            res.json(error);
        });
    });
    app.post("/signup", (req, res) => {
        console.log("Ran here!!=========================================");
        const promise = firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        console.log("Ran here!!=========================================again");

        promise.catch(error => {
            console.log("error: ==================================================");
            // res.json(error);
        });
        // promise.then(response => {
        //     console.log("response: " + response);
        // });
    });
}