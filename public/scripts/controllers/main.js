'use strict';

angular.module('showListApp')
.controller('mainCtrl', function($scope, dataService){

dataService.getShows(function(res){
var shows = res.data;
$scope.shows = shows;
});

$scope.addShow = function() {
  $scope.shows({play:"This is a new play.",
                    completed: false});
};
})
