var app = angular.module('my.app', [
	'ngRoute',
	'ngAnimate',
	'landing'
]);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/landing.html',
        controller: 'LandingCtrl'
      })
  }]);