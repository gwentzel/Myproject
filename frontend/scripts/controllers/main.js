'use strict';
/* Define main controller functions to retreive(Get) shows and add shows in the front-end */
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
