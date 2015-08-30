var app = angular.module('ngTest', ['ngRoute', 'ngCookies']);

app.controller('homeController', function($scope){
	$scope.name = 'Cameron';
	$scope.h2 = 'Developer';
});

app.controller('aboutController', function($scope){
	$scope.h1 = 'What is this about?';
	$scope.h2 = 'I was interested in playing with Angular JS.';
});

app.controller('settingsController', ['$scope', '$cookies', function($scope, $cookies){
	
	$scope.h1 = 'Contact Me';
	
	$scope.theme = {
		current: $cookies.get('themeMode') || 'light'
	};
	
	$scope.saveSettings = function(){
		$scope.theme.current = $scope.theme.mode;
		$cookies.put('themeMode', $scope.theme.mode);
		window.location.reload();
	};
}]);

app.controller('errorController', function($scope){
	
});

app.controller('themeController', [ '$scope', '$cookies', function($scope, $cookies){
	
	var themeSettings = $cookies.get('themeMode') || 'light';
	
	$scope.bodyClass = themeSettings;
}]);