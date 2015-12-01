// The $scope object is the glue between the view and the controller and the means to pass data between //them
main_module.controller('controllerLogin',function($scope, loginFactory){
    
    //var user = $scope.user;
    //$scope.pass = "joo";
    
    $scope.loginClicked = function(){
        console.log("Login...");
        
        var temp = {
            username:$scope.user,
            password:$scope.pass
        }
        
        loginFactory.startLogin(temp);
    }
    
    $scope.registerClicked = function(){
        console.log("Register...");
    }
});