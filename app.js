var express = require('express');
var app = express();

app.use(express.static('public'));
app.use(express.static('src/views'));

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

var TranslationDocument = mongoose.model('Document', transSchema);

// Sample call: http://localhost:3000/?lat=59.2&lon=17.4&date=2016-01-14
app.get('/document', function (req, res) {
    var doc = Document.findOne({_id: req.query.lang});
    //console.log(doc.);
    // res.send(JSON.stringify(doc));
});

// Create a brand new document or preplace existing
app.post('/document', function (req, res) {
    var doc = new TranslationDocument({
            _id: req.query.lang,
            date: Date.now(),
            data: [
                {
                    key: 'myKey-1',
                    value: 'myValue-1',
                    comment: 'myComment-1'
                },
                {
                    key: 'myKey-2',
                    value: 'myValue-2',
                    comment: 'myComment-2'
                }
            ]
        }
    );

    console.log('id: ' + doc._id);
    doc.save();
});

var port = 3000;
app.listen(port);
console.log('Listen on port: ' + port + '...');