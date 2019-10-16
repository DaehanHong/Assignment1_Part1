//FileName: app.js
//Author's Name: Daehan Hong
//Website Name: Portfolio
//File description: to allow all files to run or operate
'use strict';
var debug = require('debug');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require('nodemailer'); //nodemailer
var xoauth2 = require('xoauth2'); // xoauth2

var routes = require('./routes/index');
var users = require('./routes/users');
var about = require('./routes/about');
var projects = require('./routes/projects');
var services = require('./routes/services');
var contact = require('./routes/contact');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/about', about);
app.use('/projects', projects);
app.use('/services', services);
app.use('/contact', contact);

app.post('/contact', function (req, res) {
    var mailOpts, smtpTrans;
    //Setup Nodemailer transport, I chose gmail.
    smtpTrans = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            xoauth2: xoauth2.createXOAuth2Generator({
                user: "i89397047@gmail.com",
                clientId: '-',
                clientSecret: '-',
                refreshToken: '-'
            })          
        }
    });
    //Mail options
    mailOpts = {
        from: req.body.name + req.body.email,
        to: 'i89397047@gmail.com',
        subject: req.body.email + ' --Msg  from Msg from contact-form',
        text: "Name: " + req.body.name + "Email: " + req.body.email +
            "Contact No: " + req.body.contactNo + "QUERY: " + + req.body.message
    };
    smtpTrans.sendMail(mailOpts, function (error, response) {
        //Alert on event of message sent succeeds or fail.
        if (error) {
            res.render('contact', { msg: 'Error occured, message not sent.', err: true });
        }
        else {
            res.render('contact', { msg: 'Message sent! Thank you.', err: false });
        }
        //smtpTrans.close();
    });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    debug('Express server listening on port ' + server.address().port);
});

module.exports = app;
