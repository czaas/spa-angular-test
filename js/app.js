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

app.controller('notepadController', function($scope){
	$scope.list = [
		{ todo: 'This List', done: false },
		{ todo: 'Two!!', done: false },
		{ todo: 'Three', done: false }
	];
	
	$scope.addItem = function(){
		var obj = { todo: $scope.newItem, done: false };
		$scope.list.push(obj);
		$scope.newItem = '';
	}
	
	$scope.removeItems = function(){
		var oldTodos = $scope.list;
		$scope.list = [];
		
		angular.forEach(oldTodos, function(item){
			if(!item.done){ $scope.list.push(item); }
		});
	}
	
	
	
	
});