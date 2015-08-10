/*
 *	Home Factories
 */

var homeFactories = angular.module('homeFactories', ['ngResource']);

homeFactories.factory('homeFactory', ['$resource',
	function($resource) {
		return $resource("api/home");
}])

.factory('flashFactory', ['$rootScope', 
	function($rootScope){
	return {
		show: function(message){
            $rootScope.flash = message;
        },
        clear: function(){
            $rootScope.flash = "";
        }
	}
}]);