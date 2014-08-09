/**
 * EXAMPLE SERVER
 *
 * You can run this server using `node server`
 * (be sure you run `npm install` first to install dependencies)
 */

var express = require('express');
var app = module.exports = express();

// Basic configuration
var PORT = process.env.PORT || process.argv[2] || 3333;

// Serve a hello world.
app.get('/', function(req, res) {
  res.send('hello world');
});


app.listen(PORT);
console.log("Express server listening on port %d in %s mode", PORT, app.settings.env);
