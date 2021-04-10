const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. Used in the listener.
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// LISTENER
// Start the app
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
