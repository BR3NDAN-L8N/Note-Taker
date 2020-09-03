var fs = require("fs");

// 
// LOAD DATA
// 
// linking routes to "data" sources
const db = require('../db/db.json');
const uuid = require('uuid');

// 
// ROUTING
// 
module.exports = function (app) {
    //  read db.json and returns contents as json
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    //  saves user req to db.json
    app.post("/api/notes", function (req, res) {
        console.log("post")
        //  Create object for new note giving random ID
        const newNote = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text
        }

        db.push(newNote);

        fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {

            if (err) {
                return console.log(err);
            }
            console.log("Success!");
        });
        res.json(db);
    });

    //   DELETE a note of a specific ID
    app.delete("/api/notes/:id", function (req, res) {
        const id = req.params.id;
        db.forEach(function (note, index) {
            note.id === id ? db.splice(index, 1) : '';
            fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log("Success!");
            });
        });
        res.json(db)
    });
};