'use strict';

var circuitApp= angular.module('circuitApp', ['ngRoute']).
	config(function($routeProvider){
		$routeProvider.
		when('/signUp', {
			templateUrl: 'page/signUp.html'			 
		}).
		when('/home', {
			templateUrl: 'page/home.html'			 
		}).
		otherwise({
			redirectTo: '/home'			
		});		
	});
