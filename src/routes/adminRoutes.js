var express = require('express');
var adminRouter = express.Router();

adminRouter.route('/addResource')
    .get(function(req, res) {
        res.send('Adds resource');
    });

module.exports = adminRouter;