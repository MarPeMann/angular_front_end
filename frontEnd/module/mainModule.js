// params: ('module_name', ['dependency'])
var main_module = angular.module('main_module', ['ngRoute', 'ngResource']);

// Basic configuration and the router for the app
main_module.config(function($routeProvider){
   
    $routeProvider.when('/',{
        templateUrl:'partial_login.html',
        controller:'controllerLogin'
    })
    .when('/people',{
    	templateUrl:'persons_partial.html',
    	controller:'personController'
    })
    .when('/profile',{
    	templateUrl:'partial_profileview.html'
    })
    .when('/insert',{
        templateUrl:'partial_insert.html',
        controller: 'insertController'
    })
    .when('/delete',{
        templateUrl:'partial_delete.html',
        controller: 'deleteController'
    })
    .when('/edit',{
        templateUrl:'partial_edit.html',
        controller: 'editController'
    });

});