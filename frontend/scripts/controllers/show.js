'use strict';
/* define Front-end controller functions for angla  */
function ShowCtrl ($scope, dataService) {
/* The delete show method */
  $scope.deleteShow = function(show, index) {
    dataService.deleteShow(show).then(function() {
      $scope.shows.splice(index, 1);
    });
  };
/* The method to save a show in the front-end*/
  $scope.saveShows = function() {
    var filteredShows = $scope.shows.filter(function(show){
      if(show.edited) {
        return show
      };
    })
    dataService.saveShows(filteredShows)
      .finally($scope.resetShowState());
  };
/* If show has not been saved, then reset to original show */
  $scope.resetShowState = function() {
      $scope.shows.forEach(function(show) {
         show.edited = false;
      });
  }
}
/* Make this controller function available to the rest of the app */
module.exports = ShowCtrl;
