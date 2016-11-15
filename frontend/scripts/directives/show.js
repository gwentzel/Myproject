'use strict';

function ToDoDirective () {
  return {
    templateUrl: 'templates/show.html',
    replace: true,
    controller: 'showCtrl'
  }
}

module.exports = ToDoDirective;
