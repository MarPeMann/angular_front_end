main_module.factory('loginFactory', function(){
    var factory = {};
    
    //can be called from any controller
    factory.startLogin = function(data){
        
        console.log(data);
    
    }
    return factory;
    
});