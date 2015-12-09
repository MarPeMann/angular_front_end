main_module.controller('personController', function($scope, friendDataFactory){
    
    console.log("person controller");

   if(friendDataFactory.friendsArray.length === 0){

   var response = friendDataFactory.getFriendData();
    response.then(function(data){

    	friendDataFactory.friendsArray = data;
    	$scope.friendData = data;
    });
   }else{
   		$scope.friendData = friendDataFactory.friendsArray;
   }

/*	$http.get('http://localhost:3000/persons')
	.success(function(persons){
		$scope.persons = persons;
	});

	$scope.addPerson = function(){
		var temp = $scope.person;
			$http.post('http://localhost:3000/persons', temp);
	}*/
/*    $scope.rowClicked = function(id){
      console.log(id);
    }*/

    $scope.rowClicked = function(id){
      console.log("Deletessä ollaan");

      console.log(id);

    var temp = id;

    var response = friendDataFactory.deleteData(temp);

    response.then(function(data){
      console.log("deleting...")

    }, function error(data){
      console.log("An error occured");

    });

  }


});