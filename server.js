const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

//Serve static public folder
app.use(express.static("./app/public"));

//Setting up middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendfile(path.join(__dirname, "home.html"))
});

//Listening
// This needs to be updated to console log a different URL!!!
app.listen(PORT, () => { console.log("Server listening on http://localhost:" + PORT) })