const {createNewNote, validateNote} = require("../lib/notes")
const fs = require("fs");
const db = require('../db/db.json')

jest.mock('fs');

test("test new note creation", () => {
    const note = createNewNote(
        {title: "test note", text: "this is the text"},
        db
    );
    expect(note.title).toBe("test note");
    expect(note.text).toBe("this is the text");
})
test("validate note", () => {
    const note = {title: "test", text: "this is a string", id: "1"}
    const invalidNote = {title: 2, text: "invalid", id: 3}

    const test = validateNote(note);
    const test2 = validateNote(invalidNote);

    expect(test).toEqual(true);
    expect(test2).toEqual(false);
})