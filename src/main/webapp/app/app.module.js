(function(){
    "use strict";
    var requiredModules = ['gridshore.c3js.chart','ui.router'];
	angular.module('app',requiredModules);
	angular.module('app').controller('HelloWorldController', function($scope) {
		$scope.greeting = "Hello World!!!";
		var chart = c3.generate({
			bindto: '#chart2',
			data: {
				columns: [
					['data1', 30, 200, 100, 400, 150, 250],
					['data2', 50, 20, 10, 40, 15, 25]
				]
			}
		});
	});
	angular.module('app').controller('AboutController', ['$scope','$location',function($scope,$location) {
		$scope.qs = $location.search();
	}]);

})();