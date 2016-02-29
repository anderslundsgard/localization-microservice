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
  _id: String,
  languagename: String,
  data: [{
    key: String,
    value: String,
    comment: String
  }],
  date: Date
});

var Document = mongoose.model('Document', transSchema);

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('/document', function(req, res) {

});

// Create a brand new document or preplace existing
app.post('/document', function(req, res) {
  var doc = new Document({ _id: req.query.lang, date: Date.now() });
  console.log('id: ' + doc._id);
  doc.save();
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');