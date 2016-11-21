'use strict';
/* define and pull in angular module */
var angular = require('angular');
/* Point the angular directive to show.js code */
angular.module('showListApp').directive('show', require('./show'));
