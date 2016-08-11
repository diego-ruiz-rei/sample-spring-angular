(function(){
    "use strict";
	angular.module('app', []).controller('HelloWorldController', function($scope) {
       $scope.greeting = "Hello World grr";
	});
})();