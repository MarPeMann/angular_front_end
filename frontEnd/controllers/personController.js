main_module.controller('personController', function($scope, $http){

	$http.get('http://localhost:3000/persons')
	.success(function(persons){
		$scope.persons = persons;
	});


});