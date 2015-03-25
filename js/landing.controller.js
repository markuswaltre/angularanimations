'use strict';

var landing = angular.module('landing', []);

landing.controller('LandingCtrl', ['$scope', function($scope) {
	$scope.lol = 'hey';

	$scope.items = ["Hello"];

	$scope.error = {
		show: false,
		message: 'Oh no!'
	}

	$scope.newItem = function(text) {
		console.log(text);
		$scope.items.push(text);
		$scope.newItemText = '';
	}

	$scope.deleteItem = function(item) {
		var index = $scope.items.indexOf(item);
		if(index > -1) {
			$scope.items.splice(index, 1);
		}
	}
}]);