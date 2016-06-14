angular.module('show.service', [])
	.factory('ShowResource', function ($resource) {
		return $resource('/api/:type/:id');
	});




