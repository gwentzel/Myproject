'use strict';

var angular = require('angular');
/* Point Angular Dataservices to data.js  */ 
angular.module('showListApp').service('dataService', require('./data'));
