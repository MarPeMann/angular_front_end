var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var database = require('./modules/database');
var queries = require('./modules/queries');
var person = require('./modules/person');
var app = express();
var user = require('./modules/user');
var jwt = require('jsonwebtoken');

// for https server
var https = require('https');
var fs = require('fs');

var options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt'),
    requestCert: false,
    rejectUnauthorized: false
};

// For creating a secret key value for session cookie
var uuid = require('uuid');

var secret = uuid.v1();

exports.secret = secret;

// For creating a session object for client
var session = require('express-session');

// ====== Middlewares =======
//bodyparser middleware parses json object from http post request
app.use(session({
    secret:uuid.v1(),
    cookie:{maxAge:600000}
}));

// Middleware for static folders loaded by browser in index.html file
app.use('/', express.static(path.join(__dirname, '../frontEnd/views')));
app.use('/frontEnd/css', express.static(path.join(__dirname, '../frontEnd/css')));
app.use('/frontEnd/lib', express.static(path.join(__dirname, '../frontEnd/lib')));
app.use('/frontEnd/module', express.static(path.join(__dirname, '../frontEnd/module')));
app.use('/frontEnd/controllers', express.static(path.join(__dirname, '../frontEnd/controllers')));
// Tähän factoryn lataus
app.use('/frontEnd/factories', express.static(path.join(__dirname, '../frontEnd/factories')));

app.use('/friends', user);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded()); 
app.use(function(req,res,next){

    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if(token){
        jwt.verify(token, secret, function(err, decoded){
            if(err){
                return res.send(401);
            }else{
                req.decoded = decoded;
                console.log(req.decoded);
                next();
            }
        });
    }else{
        res.send(403);
    }
    
/*    console.log(req.method);
    console.log(req.path);
    console.log(__dirname);
    console.log(req.body);
    console.log(req.session);
    console.log(database.Person);
    //send request forward to stack
    next();*/
});



// Rest API middleware
app.use('/persons', person);


// ====== Routers ===========

app.get('/logout',function(req, res){
    req.session.destroy();
    res.redirect('/');
});

app.get('/isLogged', function(req,res){
    if(req.session.kayttaja){
        res.status(200).send([{status:'ok'}]);
    }else{

        res.status(401).send([{status:'Unauthorized'}]);

    }
});

https.createServer(options, app).listen(3000, function(){
    console.log("https serveri portissa 3003");
});

app.get('/', function(req, res){
    //res.send("hello world");
    res.send("HTTPS");
});

app.get('/persons', function(req, res){
    //res.send("hello persons there");
    queries.getAllPersons(req,res);
});

//app.listen(3000);


