'use strict';
/* Define and pull in angular module/object */
var angular = require('angular');
/* Point to angular front-end controller js code sections  */

angular.module('showListApp').controller('mainCtrl', require('./main'));
angular.module('showListApp').controller('showCtrl', require('./show'));
