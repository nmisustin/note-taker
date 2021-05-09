const{createNewNote, validateNote} = require("../../lib/notes");
const db = require("../../db/db.json");
const router = require('express').Router();
router.get("/notes", (req, res) => {
    let results = db;
    res.json(results)
})
router.post("/notes", (req, res) => {
    req.body.id = db.length.toString();
    if(!validateNote(req.body)){
        res.status(400).send("The note is not formatted properly.")
    }
    else{
        const note = createNewNote(req.body, db);
        res.json(note)
    }
});
module.exports = router;