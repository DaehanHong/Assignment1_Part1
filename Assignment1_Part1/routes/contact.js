//FileName: contact.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to Get contact page
var express = require('express');
var router = express.Router();

/*GET contact me page*/
router.get('/', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});

module.exports = router;
