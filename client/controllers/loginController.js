
// login controller
myApp.controller('loginCtrl', function($scope, $http) {

	$scope.login = function() {
		if ($scope.username == null
				|| $scope.userpassword == null) {
			alert("Are you mad");
		}
	var temp = {
		userName : $scope.username,
		pass : $scope.userpassword
	};

		sessionStorage.loginDetails="null"; 
		sessionStorage.loginDetails= JSON.stringify(temp); 
		$scope.user = JSON.parse(sessionStorage.loginDetails); 
      	// $rootscope.user=$scope.user; 
        alert($scope.user.userName);  





		$http.post("http://192.168.10.55:3000/login", temp).then(
						function(response) {

							if (response.data == 'true') {
								alert("successfully logged in ..WELCOME!!!");
								window.location = "http://192.168.10.55:3000/#/home";
							}
							if (response.data == 'false') {
								alert("invalid user..please enter correct credentials!!");
							}
						});

	}

});