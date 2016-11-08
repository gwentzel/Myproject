'use strict';

angular.module('showListApp')
.directive('show', function)(){
  return {
    templateUrl: 'templates/show.html',
    replace: true,
    controller: 'showCtrl'
  }
});
