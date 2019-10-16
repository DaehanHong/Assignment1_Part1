//FileName: index.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to get Home page
'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
