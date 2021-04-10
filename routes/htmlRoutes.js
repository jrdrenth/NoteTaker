const path = require('path');
const router = require('express').Router();


// ROUTING
// => HTML GET Requests
// Below code handles when users visit a page
// In each of the below cases the user is shown an HTML page of content


// sends user to notes.html page
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
});


// If no matching route is found, default to index.html
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

  
module.exports = router;
