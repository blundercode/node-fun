'use strict';

app.service('dataService', ['$q', '$http', function($q, $http) {

	//#####################################################
	//GET name:
	//#####################################################
	this.getName = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:3000/api/name'
		}).then(function(response) {
			console.log(response);
			dfd.resolve(response.data);
	  	}, function(error) {
			console.log('Error: ' + error);
	  	});
  		return dfd.promise;
	};

	//#####################################################
	//GET location:
	//#####################################################
	this.getLocation = function() {
		var dfd = $q.defer();
		$http({
			method: 'GET',
			url: 'http://localhost:3000/api/location'
		}).then(function(response) {
			console.log(response);
			dfd.resolve(response.data);
	  	}, function(error) {
			console.log('Error: ' + error);
	  	});
  		return dfd.promise;
	};

}]);