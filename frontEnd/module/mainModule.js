// params: ('module_name', ['dependency'])
var main_module = angular.module('main_module', ['ngRoute']);

// Basic configuration and the router for the app
main_module.config(function($routeProvider){
   
    $routeProvider.when('/',{
        templateUrl:'partial_login.html',
        controller:'controllerLogin'
    })
    .when('/people',{
    	templateUrl:'persons_partial.html',
    	controller:'personController'
    });
});