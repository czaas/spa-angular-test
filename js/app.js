var app = angular.module('ngTest', ['ngRoute']);

app.controller('homeController', function($scope){
	$scope.name = 'Cameron';
	$scope.h2 = 'Developer';

});

app.controller('aboutController', function($scope){
	$scope.h1 = 'What is this about?';
	$scope.h2 = 'I was interested in playing with Angular JS.';
});

app.controller('contactController', function($scope){
	$scope.h1 = 'Contact Me';
});

app.controller('errorController', function($scope){
	
});