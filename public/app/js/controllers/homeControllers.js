/*
 *	Home Controllers
 */

var homeControllers = angular.module('homeControllers', [])

homeControllers.controller('homeCtrl', ['$scope', 'homeFactory', 'flashFactory', 'fillListService', 'sortableBlockService',
	function($scope, homeFactory, flashFactory, fillListService, sortableBlockService){
	    flashFactory.clear();
	    $scope.blockList = [];

	    var data = homeFactory.get({}, 
	    	function(response){
				$scope.availableBlocks = response.availableBlocks;
				fillListService.fillList($scope.blockList, response.availableBlocks);
		});

		$scope.addBlock = function(availableBlocks, blockList, blockIndex)
		{
			sortableBlockService.addBlock(availableBlocks, blockList, blockIndex);
		}

		$scope.removeBlock = function(blockList, blockIndex)
		{
			sortableBlockService.removeBlock(blockList, blockIndex);
		}

	}]);