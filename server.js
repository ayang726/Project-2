<<<<<<< HEAD
var express = require("express");
var app = express();
var path = require("path");
var mysql = require("mysql");

var PORT = process.env.PORT || 1000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.get("/template", function (req, res) {
    res.render("template");

});

app.get("/", function (req, res) {

    res.render("index", {
        //user chooses template they would like to use
        //the chosen object is sent to this file and used to
        //create a template on the home page
        selectedTemplate
    })
});

app.listen(PORT, function () {
    console.log("listening");
=======
require("dotenv").config();
// const keys = require("./app/config/keys");
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 7000;
const app = express();


//Serve static public folder
app.use(express.static("./public"));

//Handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routing:
// require("./app/routes/userRoutes")(app);
<<<<<<< HEAD
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);
=======
require("./app/routes/htmlRoutes")(app);

>>>>>>> master

const db = require("./models");

//Listening
// This needs to be updated to console log a different URL!!!
db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, () => {
        console.log("Server listening on http://localhost:" + PORT)
    });
>>>>>>> master
});