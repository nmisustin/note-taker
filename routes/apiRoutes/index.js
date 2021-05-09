const{createNewNote, validateNote, findById, writeToFile} = require("../../lib/notes");
const db = require("../../db/db.json");
const router = require('express').Router();
router.get("/notes", (req, res) => {
    let results = db;
    res.json(results)
})
router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, db.db);
    if(result){
        res.json(result);
    }
    else{
        res.send(404);
    }
});
router.delete('/notes/:id', (req, res) => {
    const result = findById(req.params.id, db.db);
    if(result){
        db.db.splice(req.params.id, 1);
        writeToFile(db.db);
        res.json(result);
    }
    else{
        res.send(404);
    }
});
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