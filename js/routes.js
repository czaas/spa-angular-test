app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/index.html',
		controller: 'homeController'
	})
	.when('/about', {
		templateUrl: 'partials/about.html',
		controller: 'aboutController'
	})
	.when('/settings', {
		templateUrl: 'partials/settings.html',
		controller: 'settingsController'
	})
	.when('/page-not-found', {
		templateUrl: '/partials/404.html',
		controller: 'errorController'
	})
	.when('/note-pad', {
		templateUrl: '/partials/note-pad.html',
		controller: 'notepadController'
	})
	.otherwise({
		redirectTo: '/page-not-found'
	});
});