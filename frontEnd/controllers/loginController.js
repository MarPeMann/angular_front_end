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
            
            console.log(data.secret);
            sessionStorage['token'] = data.secret;
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

        var response = loginFactory.startRegister(temp);

        response.then(success, error)
    }
});

function success(data){
 
    alert("user registered");
}

function error(data){
    
    alert("Username already in use");

}


