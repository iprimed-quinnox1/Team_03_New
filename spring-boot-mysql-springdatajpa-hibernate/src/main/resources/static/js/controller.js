/**
 * 
 */

var app = angular.module('idApplication', []);



app.controller('idController', function($scope,$http) {


$scope.fetchTheId = function(x){

//var id = document.getElementById("myId");
	//var id = $scope.x;
	//var jsonId = [JSON.parse(x)];
	$scope.y = parseInt($scope.x);
	$http.get("http://localhost:8080//getbyid/1" ).then(function(response) {

		$scope.userData = response.data;
		 console.log(response.data);

	});
	

};

});

//app.service('httpRequest',function($scope,$http) {
//	
//	$http.post("http://localhost:8080//getbyid/1",).then(function(response) {
//
//		//$scope.cart = response.data;
//		// console.log('cart data',response.data);
//
//	});
//	
//	
//});
