angular.module('app', 
	['ngRoute', 'ngResource','form.controller','form.service'])
	
	.filter('trustHTML', function($sce){
return function(text){

  return $sce.trustAsHtml(text);


};

})


	.config(['$routeProvider', '$locationProvider', 
		function ($routeProvider, $locationProvider) {

			$routeProvider
				.when('/', {
					templateUrl: 'views/form1.html',
					controller:'FormController'
				})
				.when('/file', {
					templateUrl: 'views/file1.html',
					controller:'FileController'
					
					
				})
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	