//FileName: services.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to get services page

var express = require('express');
var router = express.Router();

/*GET serices page*/
router.get('/', function (req, res, next) {
    res.render('services', { title: 'Services' });
});

module.exports = router;
