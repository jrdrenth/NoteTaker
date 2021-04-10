const fs = require('fs');
const util = require('util');

// From 09-NodeJS - Activity 28
const writeFileAsync = util.promisify(fs.writeFile);
const readFileAsync = util.promisify(fs.readFile);

class NotesDB {

  async getAllNotes() {
    const dbFile = 'db/db.json';
    let notes = [];

    try {
      // Returns the contents of the file as a string in the variable notes
      // 'utf8' encodes the raw buffer data in human-readable format
      const fileContents = await readFileAsync(dbFile, 'utf8');
      
      // parses the JSON into objects
      notes = JSON.parse(fileContents);

    } catch (err) {
      console.log(err);
    }

    return notes;
  }

  async createNote() {
    //await writeFileAsync(path, data);
  }

  async deleteNote(id) {

  }

}


module.exports = NotesDB;
