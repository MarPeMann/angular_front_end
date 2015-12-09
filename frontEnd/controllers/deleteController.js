main_module.controller('deleteController', function($scope, friendDataFactory){



		//$scope.friendData = friendDataFactory.friendsArray;


	
		$scope.deleteFriend = function(){



		var temp = {

			name: $scope.person.name,
			address: $scope.person.address,
			age: $scope.person.age
		};

		var response = friendDataFactory.deleteData(temp);

		response.then(function(data){
			console.log("Deleted...")

		}, function error(data){
			console.log("An error occured");

		});


	}








});