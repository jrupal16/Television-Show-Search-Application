angular.module('app', 
	['ngRoute', 'ngResource','form.controller','form.service','show.service','show.controller'])
	
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
				.when('/shows/:id', {
                    templateUrl: 'views/show.html',
                    controller: 'ShowController',
                    resolve:{
						show: function($route,ShowResource){
                       	return ShowResource.get({type:'shows',id:$route.current.params.id});
   }


          }
      })
				.otherwise({
					redirectTo: '/'
				});

			$locationProvider.html5Mode(true);
	}]);

	