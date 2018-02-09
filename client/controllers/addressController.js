// my address controller...................................................
myApp.controller('myadd', function($scope, $http) {

	$scope.myadd = function() {
		
		var ob = {
			email : 'sharathau8@gmail.com'
		};
		

		//alert("my addres!!!");
		$http.post("http://192.168.10.55:3000/myadd",ob).then(function(response) {

			$scope.cart = response.data;
			// console.log('cart data',response.data);

		});

	}
	
	//default address change function
	$scope.default1 = function(d) {
		
		var ob2= {
			default1 : d
			};
		
		alert('default address change'+ob2.default1);
		
		$http.post("http://192.168.10.55:3000/default",ob2).then(function(response) {

			$scope.address = response.data;
		
		});
		
		//cart default
		
		alert('default address change cart'+ob2.default1);
		$http.post("http://192.168.10.55:3000/defaultCart1",ob2).then(function(response) {

			$scope.addressCart = response.data;
			
			alert('orders',addressCart.deafault);

		});
		
	}
	//ng showHelp $scope.IsVisible = false;
    $scope.ShowHide = function () {
        //If DIV is visible it will be hidden and vice versa.
        $scope.IsVisible = $scope.IsVisible ? false : true;
    }
	
	//add new address
	
	
	$scope.addnew = function() {
		alert('add new');
						if ($scope.name == null || $scope.email == null|| $scope.phnum == null|| $scope.address == null) {
							alert("Are you mad");
						}
						var temp = {
							name : $scope.name,
							email : $scope.email,
							phone : $scope.phnum,
							address : $scope.address
						};

						$http.post("http://192.168.10.55:3000/regi", temp).then(
										function(response) {

											if (response.data == 'true') {
												alert("successfully added new address!!!");
												window.location = "http://192.168.10.55:3000/#/myadd";
											}
											if (response.data == 'false') {
												alert("invalid user..please enter correct credentials!!");
											}
										});

					}
	
	//add new address end
	//delete address
	$scope.deleteadd = function(p) {
		alert('comming hey buddy'+ p);
		var ob = {
			pid : p
		};

		$http.post("http://192.168.10.55:3000/deleteadd", ob).then(
				function(response) {
					alert("successfully deleted address!!!");
					alert("successfully deleted address!!!");
					// window.location="http://192.168.10.55:3000/#/mycart";

				});
		$scope.cart();

	}
	
	
	//delete adrdess end
	
	

});