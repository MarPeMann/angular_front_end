var query = require('./queries');
var mysql = require('./mysql_module');

/* Router for User resource defined in database.js

*/

var express = require("express");
//var db = require("./queries");


var router = express.Router();


router.get('/',function(req,res){
    
    query.getFriendsByUsername(req,res);
});

//Handles the request to url localhost:3000/friends/login
router.post('/login', function(req,res){
    //query.loginFriend(req,res);
    mysql.loginMysqlProc(req,res);
    
});

//Handles the request to url localhost:3000/friends/register
router.post('/register', function(req,res){
    query.registerFriend(req,res);
    
});

module.exports = router;

