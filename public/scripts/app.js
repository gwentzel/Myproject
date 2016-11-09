'use strict'
var angular = require('angular');
/* bind index.html in public vendor to ng-app(showListApp) */

angular.module('showListApp', []);

require('./scripts/controllers/main.js');
require('../vendor/angular.js');
