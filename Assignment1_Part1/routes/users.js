//FileName: users.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to get users listing

'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;
