var express = require('express');

var statRouter = express.Router();

statRouter.route('/')
    .get(function(req, res) {
        res.send('stat');
    });

statRouter.route('/single')
    .get(function(req, res) {
        res.send('Yey, single stat page, with route from different page!');
    });

module.exports = statRouter;