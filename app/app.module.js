angular.module('myApp', [])
	.controller('customersCtrl', function($scope, $http) {

	$http.get("includes/data.php").then(function(response) {
		$scope.myData = response.data.records;
	});
	
	$scope.reverse = false;
	$scope.x = 'ID';
	
	$scope.sort = function(x) {
		 $scope.reverse = ($scope.x === x) ? !$scope.reverse : true;
		 $scope.x = x;
	}  

	$scope.addPlayer = function() {
		 var length = $scope.myData.length;
		 var lastID = $scope.myData[length-1].ID;
		 var FirstName = $scope.FirstName;
		 var Surname = $scope.Surname;
		 var Sex = $scope.Sex;
		 var Tier = $scope.Tier;
		 var Email = $scope.Email;
		 var error = false;
		 
		 if(FirstName == undefined) error = true;
		 if(Surname == undefined) error = true;
		 if(Sex == undefined || (Sex != 'male' && Sex != 'female')) error = true;
		 if(Tier == undefined || (Tier !== 'bronze' && Tier !== 'silver' && Tier !== 'gold')) error = true;
		 if(Email == undefined) error = true;
		
		 if(error == false){
			 $scope.myData.push({
					ID: Number(lastID) + 1,
					FirstName: FirstName, 
					Surname: Surname, 
					Sex: Sex,
					Tier: Tier,
					Email: Email
			 });
		 }
		 
	 }
	
	$scope.setSex = function(sex){
		$scope.Sex = sex;
	}
	
	$scope.setTier = function(tier){
		$scope.Tier = tier;
	}
    
});