/*
 * @author Rukmal Weerawarana
 *
 * @description Node server information.
 */

 // mongoose setup

var express = require('express');
var http = require('http');
var path = require('path');
var routes = require('./routes/main')
var mongoose = require('mongoose');
var dbURL = 'mongodb://localhost/gpamanager';

mongoose.connect(dbURL);

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
    app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/signup', routes.signup);
app.get('/signup_confirm', routes.signup_confirm);
app.get('/bad_username', routes.bad_username);

app.post('/new-user', routes.new_user);

//Starting the server
http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});
