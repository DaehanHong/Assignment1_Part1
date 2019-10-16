//FileName: about.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to Get about me page
var express = require('express');
var router = express.Router();

/*GET about me page*/
router.get('/', function (req, res, next) {
    res.render('about', { title: 'About Me' });
});

module.exports = router;
