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
    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link
    // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
    // ---------------------------------------------------------------------------
    //  read db.json and returns contents as json
    app.get("/api/notes", function (req, res) {
        res.json(db);
    });

    //   app.get("/api/waitlist", function(req, res) {
    //     res.json(waitListData);
    //   });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server.
    // In each of the below cases, when a user submits form data (a JSON object)
    // ...the JSON is pushed to the appropriate JavaScript array
    // (ex. User fills out a reservation request... this data is then sent to the server...
    // Then the server saves the data to the tableData array)
    // ---------------------------------------------------------------------------
    //  saves user req to db.json
    app.post("/api/notes", function (req, res) {
        //  Create object for new note giving random ID
        const newNote = {
            id: uuid.v4(),
            title: req.body.title,
            text: req.body.text
        }
        //  IF user didn't enter a title or text then let them know
        if (!newNote.title || !newNote.text) {
            return res.status(400).json({
                msg: 'You forgot to enter a title or message'
            });
        }
        db.push(newNote);
        res.json(db);
    });

    //   DELETE a note of a specific ID
    app.delete("/api/notes:id", function (req, res) {
        const id = req.params.id;
        db.forEach(function(note) {
            note.id === id ? delete note: '';
        });
        res.json(db);
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    //   app.post("/api/clear", function(req, res) {
    //     // Empty out the arrays of data
    //     tableData.length = 0;
    //     waitListData.length = 0;

    //     res.json({ ok: true });
    //   });
};