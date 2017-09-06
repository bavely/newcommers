var path = require("path");
var db = require("../models");
var crypto = require("crypto");
var Passsalthash = require("./passsalthash.js");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(__dirname + "/public/index.html");
    });


};