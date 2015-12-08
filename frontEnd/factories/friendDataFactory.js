main_module.factory('friendDataFactory', function($resource){
    
    var factory = {};
    
    // Cache friends information into an array
    factory.friendsArray = [];
    
    factory.getFriendData = function(){
            
            var resource = $resource('/friends',{},{'get':{method:'GET'}});
            return resource.query().$promise;
    }
                    
    //return the cache                
    return factory;                
});