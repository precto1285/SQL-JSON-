//Dependencies
var path = require("path");

//Routes
module.exports = function(app) {

    //index route loads view.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });

    //add route loads the add.html page
    app.get("/add", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/add.html"));
    });

    //all route loads the all.html page
    app.get("/all", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

    //short route loads the short.html page
    app.get("/short", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/short.html"));
    });

    //long route loads the long.html page
    app.get("/long", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/long.html"));
    });

};