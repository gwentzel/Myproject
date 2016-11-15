'use strict';

angular.module('showListApp')
.controller('mainCtrl', function($scope, dataService){

    dataService.getShows(function(res){
      var shows = res.data;
        $scope.shows = shows  ;
      });


      $scope.addShow = function() {
        $scope.shows.unshift({play: "This is a new show",
                        completed: false});

/*console.log("main controller code reached");*/
    /*console.log(res.data); */
};
});

/*<body ng-app="showListApp">

  <h3 Our Shows ></h3>
  <div class="list" ng-controller="mainCtrl">
    <div class="add">
      <a href="#" ng-click="addShow()">
        + Add a New Show  </a>
    </div>

  <show></show>
  </div>

/*  <script src="/vendor/angular.js"></script> */
/*
  <script src="/scripts/app.js"></script>
  <script src="/scripts/controllers/main.js"></script>
  <script src="/scripts/controllers/show.js"></script>
  <script src="/scripts/services/data.js"></script>
  <script src="/scripts/directives/show.js"></script>

</body>
</html> */
