var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var app = express();
var user = require('./modules/user');
var mysql_module = require('./modules/mysql_module');

// For creating a secret key value for session cookie
var uuid = require('uuid');
// For creating a session object for client
var session = require('express-session');

// ====== Middlewares =======
//bodyparser middleware parses json object from http post request
app.use(session({
    secret:uuid.v1(),
    cookie:{maxAge:600000}
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); 
app.use(function(req,res,next){
    
    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    console.log(req.session);
    console.log(database.Person);
    //send request forward to stack
    next();
});

// Middleware for static folders loaded by browser in index.html file
app.use('/', express.static(path.join(__dirname, '../frontEnd/views')));
app.use('/frontEnd/css', express.static(path.join(__dirname, '../frontEnd/css')));
app.use('/frontEnd/lib', express.static(path.join(__dirname, '../frontEnd/lib')));
app.use('/frontEnd/module', express.static(path.join(__dirname, '../frontEnd/module')));
app.use('/frontEnd/controllers', express.static(path.join(__dirname, '../frontEnd/controllers')));
// Tähän factoryn lataus
app.use('/frontEnd/factories', express.static(path.join(__dirname, '../frontEnd/factories')));

// Rest API middleware
app.use('/persons', person);
app.use('/friends', user);

// ====== Routers ===========
/*
app.get('/', function(req, res){
    //res.send("hello world");
    res.sendfile("views/index.html");
});
*/

app.get('/logout',function(req, res){
    req.session.destroy();
    res.redirect('/');
})


app.get('/persons', function(req, res){
    //res.send("hello persons there");
    queries.getAllPersons(req,res);
});

app.listen(3000);


