const fs = require('fs');
const util = require('util');

// From 09-NodeJS - Activity 28
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);
const dbFile = 'db/db.json';

class NotesDB {

  async getAllNotes() {
    // Returns the contents of the file as a string in the variable notes
    // 'utf8' encodes the raw buffer data in human-readable format
    const fileContents = await readFileAsync(dbFile, 'utf8');
    
    // parses the JSON into an array
    const notes = JSON.parse(fileContents) ?? [];

    return notes;
  }

  async createNote(note) {
    if (!note.title || !note.text) {
      throw new Error('Neither the title nor the text can be blank');
    }

    const prevNotes = await this.getAllNotes();
    const newNotes = [...prevNotes, note];
    await writeFileAsync(dbFile, newNotes);

    return note;
  }

  async deleteNote(id) {
    const prevNotes = await this.getAllNotes();
    const newNotes = prevNotes.filter((note) => note.id !== id);
    await writeFileAsync(dbFile, newNotes);
  }

}


module.exports = NotesDB;
