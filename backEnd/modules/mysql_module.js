var mysql = require('mysql');
var jwt = require('jsonwebtoken');
var server = require('../index');

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'root',
	database:'friendschema'
});

connection.connect(function(err){

	if(err){
		console.log("Could not connect to db" + err.message);

	}else{
		console.log("Connected to mysql server");
	}
});

exports.loginMysql = function(req,res){
	connection.query('SELECT * from user Where username=? and pass=?',[req.body.username, req.body.password], function(error, result, fields){
		console.log(error);
		console.log(result);
		console.log(fields);
	});
}

exports.loginMysqlProc = function(req,res){
	connection.query('CALL getLoginInfo(?,?)',[req.body.username, req.body.password],function(error,results,fields){

		 if(error){
            
            res.send(502,{status:error.message});
            
        }else{
  
           var test = results[0];

            if(test.length > 0){
            	
                req.session.kayttaja = test[0].username;
                var token = jwt.sign(results,server.secret, {expiresIn:'2h'});
                res.send(200,{status:"Ok",secret:token});
            }
            else{
                res.send(401,{status:"Wrong username or password"});
            }
            
        }
    });


}