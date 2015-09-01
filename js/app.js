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
	$scope.allLists = [
		{
			listName: 'Second List',
			listItems: ['One', 'two']
		},{
			listName: 'First List',
			listItems: ['Check one!', 'chek two!']
		},{
			listName: 'Third List',
			listItems: ['Ch one!', 'chek!']
		}
	];
	
	$scope.editCurrentList = function(){
		var i = this.$index;
		var arr = $scope.allLists[i].listItems;
		// goal:
		// on edit set all listItems to input fields and be able to save them when finished. 
		
	}
	
	
});