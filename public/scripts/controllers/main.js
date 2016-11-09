'use strict';

angular.module('showListApp')
.controller('mainCtrl', function($scope, dataService){
console.log("main controller code reached");
dataService.getShows(function(res){
var shows = res.data;
$scope.shows = shows;
});

$scope.addShow = function() {
var show = {play: "This is a new show"};
  $scope.shows.push(show);
};

<body ng-app="showListApp">

  <h3 Our Shows ></h3>
  <div class="list" ng-controller="mainCtrl">
    <div class="add">
      <a href="#" ng-click="addShow()">
        + Add a New Show  </a>
    </div>

  <show></show>
  </div>

/*  <script src="/vendor/angular.js"></script> */
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
  <script src="/scripts/app.js"></script>
  <script src="/scripts/controllers/main.js"></script>
  <script src="/scripts/controllers/show.js"></script>
  <script src="/scripts/services/data.js"></script>
  <script src="/scripts/directives/show.js"></script>

</body>
</html>
