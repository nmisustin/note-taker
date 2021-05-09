const fs = require('fs');
const path = require('path');

function createNewNote(body, db){
    const note = body;
    console.log(note);
    console.log(db);
    db.push(note);
    fs.writeFileSync(
        path.join(__dirname, "../db/db.json"),
        JSON.stringify({db: db}, null, 2)
    );
    return note;
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
module.exports = {createNewNote, validateNote};