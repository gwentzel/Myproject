'use strict';

function ShowCtrl ($scope, dataService) {

  $scope.deleteShow = function(show, index) {
    dataService.deleteShow(show).then(function() {
      $scope.shows.splice(index, 1);
    });
  };

  $scope.saveShows = function() {
    var filteredShows = $scope.shows.filter(function(show){
      if(show.edited) {
        return show
      };
    })
    dataService.saveShows(filteredShows)
      .finally($scope.resetShowState());
  };

  $scope.resetShowState = function() {
      $scope.shows.forEach(function(show) {
         show.edited = false;
      });
  }
}

module.exports = ShowCtrl;
