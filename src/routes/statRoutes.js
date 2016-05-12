var express = require('express');

var statRouter = express.Router();

statRouter.route('/')
    .get(function(req, res) {
        res.send('stat');
    });

// e.g: http://localhost:4500/stat/21
statRouter.route('/:id')
    .get(function(req, res) {
        res.send('Yey, single stat page, with route from different page! id:' + req.params.id);
    });

module.exports = statRouter;