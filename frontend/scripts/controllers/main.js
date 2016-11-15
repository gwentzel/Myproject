'use strict';

function MainCtrl ($scope, dataService) {

  dataService.getShows(function(response){
    var shows = response.data.shows;
    $scope.shows =  shows;
  });

  $scope.addShow = function() {
    $scope.shows.unshift({name: "This is a new show.",
                      completed: false});
  };

}

module.exports = MainCtrl;
