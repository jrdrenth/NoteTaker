const router = require('express').Router();
const NotesDB = require('../db/notesDB');

const notesDB = new NotesDB();

// ROUTING
// find all notes
router.get('/notes/', async (req, res) => {
  try {
    const notes = await notesDB.getAllNotes();
    res.status(200).json(notes);

  } catch (err) {
    res.status(500).json(err);
  }
});


// create a new note
router.post('/notes', async (req, res) => {
  try {
    const note = null;
    res.status(200).json(note);
  
  } catch (err) {
    res.status(400).json(err);
  }
});


// delete a note by its `id` value
router.delete('/notes:id', async (req, res) => {
  try {
    const result = null;

    if (result != 0) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ message: `No note found with id: ${req.params.id}` });
    }

  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
