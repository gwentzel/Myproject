'use strict';
/* Define show directive employing show.html template   */
function ToDoDirective () {
  return {
    templateUrl: 'templates/show.html',
    replace: true,
    controller: 'showCtrl'
  }
}

module.exports = ToDoDirective;
