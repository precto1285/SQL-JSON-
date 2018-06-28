// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

//Express App Setup
var app = express();
var PORT = process.env.PORT || 8080;

//Parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Static Directory
app.use(express.static("app/public"));

//Routes
require("./app/routes/api-routes.js")(app);
require(".app/routes/html-routes.js")(app);

//Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});