angular.module('form.controller', [])

     .directive('charecterPreview',function(){
            return{
             	restrict: 'EA',
	          
                 templateUrl: '/views/charecter.preview.html'

                      }

                     })




	.controller('FormController', function ($scope, FormResource) {

		$scope.callRouter = function () {
			FormResource.get({
				type: 'shows',
				q: $scope.searchWord,
				
			}, function (response) {
				$scope.fact = JSON.parse(response.text);
			});	
		};

		// TODO Implement getTrivia and getDate

});