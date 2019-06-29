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
require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);

const db = require("./models");

//Listening
// This needs to be updated to console log a different URL!!!
db.sequelize.sync({ force: true }).then(function () {
    app.listen(PORT, () => {
        console.log("Server listening on http://localhost:" + PORT)
    });
});