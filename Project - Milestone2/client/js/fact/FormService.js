angular.module('form.service', [])
	.factory('FormResource', function ($resource) {
		return $resource('/api/:type');
	});