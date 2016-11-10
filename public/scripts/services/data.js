angular.module("showListApp", [])

.controller('mainCtrl', function($scope, dataService){
    $scope.learningNgChange = function(){
        console.log("An input changed!");
    };

    $scope.helloWorld = dataService.helloWorld;

    dataService.getShows(function(response){
        console.log(response.data);
        $scope.shows = response.data;
    });

})
.service('dataService', function($http){
        this.helloWorld = function(){
        console.log("This is the data service's method!!");
    };

    this.getShows = function(callback){
     $http.get('../mock/shows.json')
      .then(callback)
    }
});
