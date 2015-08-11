'use strict';

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider) {

  	$routeProvider
		.when('/', {
			templateUrl: './views/home.html',
		  	controller: 'mainCtrl',  
		})
	    .when('/me', {
	  		templateUrl: './views/numbers.html',
	  		controller: 'supportCtrl',
	  	})
	  	.otherwise({
	    	redirectTo: '/'
	});

});