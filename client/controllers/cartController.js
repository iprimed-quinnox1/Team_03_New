// all controllers logic starts from here

myApp.controller('mainController', function($scope) {

	$scope.message = 'Everyone come and see how good I look!';

});
// display controller...................................................
myApp.controller('main', function($scope, $http, $rootScope) {

	$scope.x = 'name';
	$scope.cart = function(name) {
		$scope.x = name;
		var myOb = {
			name : $scope.x
		};
		$http.post("http://192.168.10.55:3000/displaycat1", myOb).then(
				function(response) {
					$scope.cart1 = response.data;
					window.location = "http://192.168.10.55:3000/#/display";
				});

	}

	// display rootscope controller
	$rootScope.cart2 = {};
	$scope.pid = 'p11';
	$scope.PD = function(id) {
		$scope.pid = id;
		console.log('cart root data', $scope.pid);
		var pid = {
			pid : $scope.pid
		};
		$http.post("http://192.168.10.55:3000/PD", pid).then(function(response) {

			$rootScope.cart2 = response.data;
			// alert(JSON.stringify($rootScope.cart2));

			console.log('cart root data', $rootScope.cart2);
			window.location = "http://192.168.10.55:3000/#/product_details";
		});

	}

	// add to cart.............
	$scope.cid = 'p11';
	$scope.addtocart = function(id) {
		$scope.cid = id;
		console.log('cart dta', $scope.cid);
		// creating the object for cart
		// userid productid img pname qty price
		var obj = {
			email : "sharathau8@gmail.com",
			pid : $scope.cid.pid,
			img : $scope.cid.pimage,
			name : $scope.cid.pname,
			price : $scope.cid.pprice,
			address:"mysore"
		};

		$http.post("http://192.168.10.55:3000/addtocart", obj).then(
				function(response) {

					if (response.data == 'true') {
						alert("successfully added to cart! Go to MyCart!!!");
						// window.location="http://192.168.10.55:3000/#/login";
					}

				});

	}
	// .....................................

});



// cart controller...................................................
myApp.controller('cart', function($scope, $http) {

	$scope.cart = function() {

		alert("successfully cart!!!");
		$http.get("http://192.168.10.55:3000/cart").then(function(response) {

			$scope.cart = response.data;
			// console.log('cart data',response.data);

		});

	}

});


// my cart controller...................................................
myApp.controller('mycart', function($scope, $http) {

	$scope.cart = function() {
		
		var ob = {
			email : 'sharathau8@gmail.com'
		};

		$http.post("http://192.168.10.55:3000/mycart",ob).then(function(response) {

			$scope.cart = response.data;

		});

	}
	

	// delete item.......

	$scope.deleteitem = function(p) {
		var ob = {
			pid : p
		};

		$http.post("http://192.168.10.55:3000/deleteitem", ob).then(
				function(response) {
					alert("successfully deleted!!!");
					// window.location="http://192.168.10.55:3000/#/mycart";

				});
		$scope.cart();

	}

});
//my oreders page_________________ 

myApp.controller('myorders', function($scope, $http) {
	
	//ng showHelp $scope.IsVisible = false;
            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }
$scope.cart = function() {
		//alert('my oredrs');
		
		var ob = {
			email : 'sharathau8@gmail.com'
		};

		$http.post("http://192.168.10.55:3000/mycart",ob).then(function(response) {

			$scope.cart = response.data;
		//this has all the cart items  of sharathau8@gmail

		});
		$http.post("http://192.168.10.55:3000/myadd",ob).then(function(response) {

			$scope.address = response.data;
			//this has all the addresss of sharathau8@gmail
			//alert('orders',address.deafault);

		});
		
		

	}
	
	// update addres in orders 
	
	$scope.update = function (add,itemId) {
		//alert('hai'+add);
       console.log(add +" "+ itemId);
        var obj = { address: add, 
            pid:itemId };
        //alert(JSON.stringify(obj));
        $http.post("http://192.168.10.55:3000/oredersUpdate", obj).then(function (response) {
          
        });

    } 
	
	$scope.oneTime = function (itemId,add) {
		alert('hai one time');
       console.log(add +" "+ itemId);
        var obj = { address: add, 
            pid:itemId };
        //alert(JSON.stringify(obj));
        $http.post("http://192.168.10.55:3000/oredersUpdateOne", obj).then(function (response) {
          
        });

    }
	
	$scope.permanentAdd = function (itemId,add,email) {
		alert('hai perm time');
       console.log(add +" "+ itemId+" "+email);
        var obj = { address: add, 
            pid:itemId ,
			email:email};
        
		$http.post("http://192.168.10.55:3000/oredersUpdatePer", obj).then(function (response) {
          
        });

    }
//

$scope.cid = 'p11';
	$scope.placeOrder = function(id) {
		alert('order placed successfully!!!!!!!!!!!');
		$scope.cid = id;
		console.log('cart dta', $scope.cid);
		// creating the object for cart
		// userid productid img pname qty price
		var obj = {
			email : "sharathau8@gmail.com",
			pid : $scope.cid.pid,
			img : $scope.cid.img,
			name : $scope.cid.name,
			price : $scope.cid.price,
			address:$scope.cid.address,
			status:"order placed",
			gift:"false"
			
		};

		$http.post("http://192.168.10.55:3000/f2", obj).then(
				function(response) {

					if (response.data == 'true') {
						//alert("successfully added to orders! Go to MyCart!!!");
						// window.location="http://192.168.10.55:3000/#/login";
					}

				});

	}
	// .....................................
	$scope.giftWrap = function(r) {
		
		alert("successfully Giftwrapped!!! " + r);

		var giftwraped = { pid : r , gift : true};

		$http.post("http://192.168.10.55:3000/giftWrap", giftwraped).then(function(response) {
					alert(" Giftwrapped!!!");
					//window.location="http://192.168.10.55:3000/#/mycart";

				});
		//$scope.cart();

	}
//
	
	
	
});
// final orders
myApp.controller('finalOrder', function($scope, $http) {
	

            $scope.ShowHide = function () {
                //If DIV is visible it will be hidden and vice versa.
                $scope.IsVisible = $scope.IsVisible ? false : true;
            }

	$scope.cart = function() {
		//alert('my oredrs');
		
		var ob = {
			email : 'sharathau8@gmail.com'
		};

			$http.post("http://192.168.10.55:3000/finalorder",ob).then(function(response) {

			$scope.orders = response.data;
			console.log('data in orders is...',$scope.orders);
		

		});
		
		

	}
	
	//edit product and edit address
	$scope.editproduct = function (p) {
			alert('status is...'+ p)

        if(p=="delivered"){
            alert("Cannot be changed. Item is delivered");
        }
        else if(p=="shipped"){
            alert("Cannot be changed. Item is shipped");
        }
        else if (p=="packed"){
            alert("Cannot be changed. Item is packed");
        }
        else {
            window.open('https://www.google.co.in/');
        }
       
    }



$scope.editaddress = function (p) {
alert("address staus is..."+p);
    if(p=="delivered"){
        alert("Cannot be changed. Item is delivered");
    }
   
    else {
        window.open('https://www.google.co.in/');
    }


}

});




// admin controller

myApp.controller("admin", function($scope, $http) {

	$scope.sendData = function() {
		var myOb = {
			pname : $scope.pname,
			pimg : $scope.pimg,
			pcategory : $scope.pcategory,
			pprice : $scope.pprice
		};
		$http.post("http://192.168.10.55:3000/admin", myOb).then(
				function(response) {

					if (response.data == 'true') {
						alert("successfully inserted in admin db!!!");
						// window.location="http://192.168.10.55:3000/#/display";
					}

				});
	}

});