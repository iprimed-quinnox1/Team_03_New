// register controller
myApp.controller("myCntr", function($scope, $http) {

	var add1 = new Array;
	$scope.sendData = function() {
		var myOb = {
			gender : $scope.gender,
			name : $scope.name,
			lname : $scope.lname,
			email : $scope.email,
			pass : $scope.pass,
			cpass : $scope.cpass,
			date : $scope.date,
			comp : $scope.comp,
			address : $scope.add1,
			deafault : $scope.add2,
			phone : $scope.phone,
			
			
		};
		            
		$http.post("http://192.168.10.55:3000/regi", myOb).then(function(response) {

			if (response.data == 'true') {
				alert("successfully registerd!!!");
				window.location = "http://192.168.10.55:3000/#/login";
			}

		});
	}

});
