var express = require('express');
var app = express();

// Mongo and Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback() {
  console.log('test db opened');
});
var transSchema = mongoose.Schema({
  name: String,
  date: Date
});
var Trans = mongoose.model('Translation', transSchema);
var startup = new Trans({ name: 'Startup', date: Date.now() });
console.log(startup.name);
startup.save();

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('*', function(req, res) {
  var log = new Trans({ name: 'LogCall', date: Date.now() });
  console.log(log.name);
  log.save();
  console.log('Save done');
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');