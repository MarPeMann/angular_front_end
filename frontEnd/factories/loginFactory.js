main_module.factory('loginFactory', function($resource){
    var factory = {};
    
    //can be called from any controller
    factory.startLogin = function(data){
        
        console.log(data);
        var req = $resource('/friends/login',{},{'post':{method:'POST'}}); //using friends/login context
        return req.post(data).$promise; //Post method to send username and password to context
    
    }

    factory.startRegister = function(data){
    	console.log(data);
    	var req = $resource('/friends/register',{},{'post':{method:'POST'}});
    	return req.post(data).$promise;
    }
    return factory;
    
});