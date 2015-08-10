/*
 *	Angular App Declaration
 */

var albertApp = angular.module('albertApp', [
							'ui.router',
							'ui.utils',
							'ui.sortable',
							'ngSanitize',
							'homeControllers',
							'homeServices',
							'homeFactories'
							]);

/*
 *	App Configuration
 */

albertApp.config(function ($stateProvider, $urlRouterProvider){

	$urlRouterProvider.otherwise("/");

	$stateProvider
		.state('home', {
			url: "/",
			views: {
				"viewMaster": { templateUrl: "app/partials/home.html", controller: "homeCtrl" }
			}
		})
})

.config(['$httpProvider',
	function($httpProvider){

    var interceptor = function($rootScope, $location, $q, flashFactory)
    {
        var success = function(response)
        {
            return response;
        }

        var error = function(response)
        {
            if(response.status == 401)
            {
                delete sessionStorage.authenticated;
                $location.path('/');
                flashFactory.show(response.data.flash);
            }
            else if(response.status == 403)
            {
            	$location.path('/error');
            	flashFactory.show(response.data.flash);
            }
            else if(response.status == 409 || response.status == 400)
            {
            	flashFactory.show(response.data.flash);
            }
            else if(response.status == 500)
            {
                $location.path('/error');
                flashFactory.show("Internal Server Error.");
            }
            return $q.reject(response);

        }
        return function(promise)
        {
            return promise.then(success, error);
        }
    }
    $httpProvider.responseInterceptors.push(interceptor)
}]);

