require("dotenv").config();
// const keys = require("./app/config/keys");
const express = require("express");
const exphbs = require("express-handlebars");

const PORT = process.env.PORT || 8080;
const app = express();


//Serve static public folder
app.use(express.static("./app/public"));

//Handlebars config
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Rounting:
require("./app/routes/userRoutes")(app);
require("./app/routes/htmlRoutes")(app);



//Listening
// This needs to be updated to console log a different URL!!!
app.listen(PORT, () => { console.log("Server listening on http://localhost:" + PORT) })