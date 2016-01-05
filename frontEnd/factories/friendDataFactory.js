main_module.factory('friendDataFactory', function($resource, $http){
    
    var factory = {};
    
    // Cache friends information into an array
    factory.friendsArray = [];
    
    factory.getFriendData = function(){
            $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
            var resource = $resource('/friends',{},{'get':{method:'GET'}});
            return resource.query().$promise;
    }

    factory.insertData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
            var resource = $resource('/persons',{},{'post':{method:'POST'}});
            return resource.post(data).$promise;
    }

    factory.deleteData = function(data){
        $http.defaults.headers.common['x-access-token'] = sessionStorage['token'];
            var resource = $resource('/persons',{},{'delete':{method:'DELETE'}});
            return resource.delete(data).$promise;
    }
                    
    //return the cache                
    return factory;                
});