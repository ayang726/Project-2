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
});