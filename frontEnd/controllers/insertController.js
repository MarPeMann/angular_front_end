main_module.controller('insertController',function($scope, friendDataFactory){


	console.log("insert CTRL");


	$scope.addFriend = function(){

		var temp = {

			name: $scope.person.name,
			address: $scope.person.address,
			age: $scope.person.age
		};

		var response = friendDataFactory.insertData(temp);

		response.then(function(data){
			console.log("Added...")

		}, function error(data){
			console.log("An error occured");

		});


	}
	










});