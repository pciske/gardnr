'use strict';

var gardnrApp = angular.module('gardnrApp', [
	'ngRoute',
	'gardnrControllers',
	'ui.bootstrap'
]);

gardnrApp.config(['$routeProvider', 
	function ( $routeProvider ) {
		$routeProvider.
			when('/dashboard', {
				templateUrl: 'dashboard/default.html',
				controller: 'DashboardController'
			}).
			when('/garden', {
				templateUrl: 'garden/default.html',
				controller: 'GardenController'
			}).
			when('/garden/:gardenID/:mode?', {
				templateUrl: 'garden/garden-detail.html',
				controller: 'GardenController'
			}).
			when('/settings', {
				templateUrl: 'settings/default.html',
				controller: 'SettingsController'
			}).
			when('/help', {
				templateUrl: 'help/default.html',
				controller: 'HelpController'
			}).
			otherwise({
				redirectTo: '/dashboard'
			})
	}]);

var gardnrControllers = angular.module('gardnrControllers', []);