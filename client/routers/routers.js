// script.js
//http://localhost

//http://localhost:3000/#/display

//localhost

// create the module and name it myApp
// also include ngRoute for all our routing needs
var myApp = angular.module('myApp', [ 'ngRoute' ]);

// configure our routes
myApp.config(function($routeProvider) {
	$routeProvider

	// route for the home page
	.when('/', {
		templateUrl : 'pages/featured.html',
		controller : 'main'
	}).when('/home', {
		templateUrl : 'pages/featured.html',
		controller : 'mainController'
	})

	// route for the about page
	.when('/featured', {
		templateUrl : 'pages/featured.html',
		controller : 'aboutController'
	})

	// route for go's bars
	.when('/listView', {
		templateUrl : 'pages/listView.html',
		controller : 'display'
	})

	.when('/tents', {
		templateUrl : 'pages/tents.html',
		controller : 'aboutController'
	}).when('/blockView', {
		templateUrl : 'pages/blockView.html',
		controller : 'aboutController'
	}).when('/bag_details', {
		templateUrl : 'pages/bag_details.html',
		controller : 'aboutController'
	})

	.when('/myCarousel', {
		templateUrl : 'pages/bag1.html',
		controller : 'aboutController'
	}).when('/login', {
		templateUrl : 'pages/login.html',
		controller : 'loginCtrl'
	}).when('/register', {
		templateUrl : 'pages/register.html',
		controller : 'myCntr'
	})

	.when('/cart', {
		templateUrl : 'pages/cart.html',
		controller : 'cart'
	})

	.when('/admin', {
		templateUrl : 'pages/admin.html',
		controller : 'cart'
	})

	.when('/display', {
		templateUrl : 'pages/display.html',
		controller : 'main'
	}).when('/product_details', {
		templateUrl : 'pages/product_details.html',
		controller : ''
	})

	.when('/mycart', {
		templateUrl : 'pages/mycart.html',
		controller : 'mycart'
	})
	
	.when('/myadd', {
		templateUrl : 'pages/myadd.html',
		controller : 'myadd'
	})
	
	.when('/myorders', {
		templateUrl : 'pages/myorders.html',
		controller : 'myorders'
	})
	
	.when('/finalorder', {
		templateUrl : 'pages/finalorder.html',
		controller : 'finalOrder'
	})
	.when('/track', {
		templateUrl : 'pages/finalorder.html',
		controller : 'finalOrder'
	})
	// route for the contact page myorders

});


