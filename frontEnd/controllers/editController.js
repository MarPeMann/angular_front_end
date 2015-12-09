main_module.controller('editController', function($scope, friendDataFactory){



		$scope.editFriend = function(){

		var temp = {

			name: $scope.person.name,
			address: $scope.person.address,
			age: $scope.person.age
		};

		var response = friendDataFactory.editData(temp);

		response.then(function(data){
			console.log("Edited...")

		}, function error(data){
			console.log("An error occured");

		});


	}








});