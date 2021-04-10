const fs = require('fs');
const util = require('util');

// From 09-NodeJS - Activity 28
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class NotesDB {

  async getAllNotes() {

    // Return the contents of 'data.csv' as a string in the variable "data"
    // "utf8" encodes the raw buffer data in human-readable format
    const dbFile = 'db/db.json';
    const notes = await readFileAsync(dbFile, "utf8");

  }

  async createNote() {
    writeFileAsync(path, data);
  }

  async deleteNote(id) {

  }

}


module.exports = NotesDB;
