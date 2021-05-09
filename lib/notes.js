const fs = require('fs');
const path = require('path');

function createNewNote(body, db){
    const note = body;
    console.log(note);
    console.log(db);
    db.push(note);
    writeToFile(db);
    return note;
}
function writeToFile(db){
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({db: db}, null, 2)
    );
}
function validateNote(note){
    if (!note.title || typeof note.title !== "string"){
        return false;
    }
    if(!note.text || typeof note.text !== "string"){
        return false;
    }
    if(!note.id || typeof note.id != "string"){
        return false;
    }
    return true;
}
function findById(id, db){
    const result = db.filter(note => note.id === id);
    return result;
}
module.exports = {createNewNote, validateNote, findById, writeToFile};