// ===============================================================================
// 
// DEPENDENCIES
//
var path = require("path");
const { Router } = require("express");
// var Router =require("express").Router();

// Router.get("/notes", function (req, res){
//     res.sendFile(path.join(__dirname, "../public/notes.html"));
// })

// module.exports = router;
//
// ROUTING
//
module.exports = function (app) {
    // HTML GET Requests directing users to a specific page
    // directs to notes.html
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // default to index.html
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};