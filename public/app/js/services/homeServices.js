/*
 *	Home Services
 */

var homeServices = angular.module('homeServices', []);

homeServices.service('fillListService',
	function(){
		return {
			fillList: function(list, contentArray){
				for(i = 0, length = contentArray.length; i < length; i++)
				{
					list.push(contentArray[i]);
				}
				return list;
			}
		}
});

homeServices.service('sortableBlockService',
	function(){
		return {
			removeBlock: function(blockList, blockIndex){
				return blockList.splice(blockIndex, 1);
			},
			addBlock: function(availableBlocks, blockList, blockIndex){
				return blockList.unshift(availableBlocks[blockIndex]);
			}
		}
});