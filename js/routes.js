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
	.when('/contact', {
		templateUrl: 'partials/contact.html',
		controller: 'contactController'
	})
	.when('/page-not-found', {
		templateUrl: '/partials/404.html',
		controller: 'errorController'
	})
	.otherwise({
		redirectTo: '/page-not-found'
	});
});