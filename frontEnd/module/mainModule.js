// params: ('module_name', ['dependency'])
var main_module = angular.module('main_module', ['ngRoute', 'ngResource']);


function loginRequired($q, $resource, $location){

    var deferred = $q.defer();
    $resource('/isLogged').query().$promise.then(function success(){

        deferred.resolve();
        return deferred;

    }, function fail(){

        deferred.reject();
        $location.path('/');
        return deferred;

    });
}


// Basic configuration and the router for the app
main_module.config(function($routeProvider){
   
    $routeProvider.when('/',{
        templateUrl:'partial_login.html',
        controller:'controllerLogin'
    })
    .when('/people',{
    	templateUrl:'persons_partial.html',
    	controller:'personController',
        resolve: {loginRequired:loginRequired}
    })
    .when('/profile',{
    	templateUrl:'partial_profileview.html',
        resolve: {loginRequired:loginRequired}
    })
    .when('/insert',{
        templateUrl:'partial_insert.html',
        controller: 'insertController',
        resolve: {loginRequired:loginRequired}
    })
    .when('/delete',{
        templateUrl:'partial_delete.html',
        controller: 'deleteController',
        resolve: {loginRequired:loginRequired}
    })
    .when('/edit',{
        templateUrl:'partial_edit.html',
        controller: 'editController',
        resolve: {loginRequired:loginRequired}
    });

});