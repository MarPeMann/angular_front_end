// The $scope object is the glue between the view and the controller and the means to pass data between //them
main_module.controller('controllerLogin',function($scope, loginFactory, $location){
    
    //var user = $scope.user;
    //$scope.pass = "joo";
    
    $scope.loginClicked = function(){
        console.log("Login...");
        
        var temp = {
            username:$scope.user,
            password:$scope.pass
        }
        
        var waitPromise = loginFactory.startLogin(temp);
        
        // wait response from server
        waitPromise.then(function(data){
            // called when success response from server is received
            console.log('success');
            $location.path('/people'); //redirect to...
            
        }, function error(data){
            $('.error').text("Wrong username or password");
            $scope.isLoginError = true;
                         
        });
    }
    
    $scope.registerClicked = function(){
        
        // Onko flash viestiä mahdollista tehdä, jos reg ei onnisu
        console.log("Register...");
        var temp = {
            username:$scope.user,
            password:$scope.pass
        }

        var waitPromise = loginFactory.startRegister(temp);

        waitPromise.then(function(data){
            console.log('Registered successfully');
            $location.path('/profile');

        }, function error(data){
            $('.error').text("Username is already in use");

        });
    }
});


