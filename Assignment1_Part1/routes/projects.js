//FileName: project.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to get projects page

var express = require('express');
var router = express.Router();

/*GET projects page*/
router.get('/', function (req, res, next) {
    res.render('projects', { title: 'Projects' });
});

module.exports = router;
