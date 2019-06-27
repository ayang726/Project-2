const firebase = require("firebase");
const firebaseConfig = require("../config/firebaseConfig");
firebase.initializeApp(firebaseConfig);

module.exports = function (app) {
    app.post("/login", (req, res) => {
        const promise = firebase.auth().signInWithEmailAndPassword(req.body.email, req.body.password);
        loginResponse(promise, res);
    });
    app.post("/signup", (req, res) => {
        // handle repeat account creations!!
        const promise = firebase.auth().createUserWithEmailAndPassword(req.body.email, req.body.password);
        loginResponse(promise, res);
    });

    firebase.auth().onAuthStateChanged(user => { if (user) console.log(user.uid) });

    function loginResponse(promise, res) {
        promise.catch(error => {
            res.json(error);
        }).then(response => {
            if (response) {
                const uid = response.user.uid;
                console.log(uid + " just logged in");
                res.json({ uid });
            }
        });
    }
}