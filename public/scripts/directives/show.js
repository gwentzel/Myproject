'use strict';

function ShowDirective () {
  return {
    templateUrl: 'templates/show.html',
    replace: true,
    controller: 'showCtrl'
  }
} ;

/*angular.module('showListApp')
.directive('show', function(){
  return {
    templateUrl: '../../templates/show.html',
    replace: true,
    controller: 'showCtrl'
  }
}); */

 /* module.exports = ShowDirective;  */ 
