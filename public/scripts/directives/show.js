'use strict';

angular.module('showListApp')
.directive('shows', function(){
  return {
    templateUrl: 'templates/shows.html',
    replace: true,
    controller: 'showCtrl'
  }
})
