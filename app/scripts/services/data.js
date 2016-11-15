'use strict';

function DataService ($http, $q) {

  this.getShows = function(cb) {
    $http.get('/api/shows').then(cb);
  };

  this.deleteShow = function(show) {
    if (!show._id) {
      return $q.resolve();
    }
    return $http.delete('/api/shows/' + show._id).then(function() {
      console.log("I deleted the " + show.name + " show!");
    });
  };

  this.saveShows = function(shows) {
    var queue = [];
    shows.forEach(function(show) {
      var request;
      if(!show._id) {
        request = $http.post('/api/shows', show);
      } else {
        request = $http.put('/api/shows/' + show._id, show).then(function(result) {
          show = result.data.show;
          return show;
        });
      }
      queue.push(request);
    });
    return $q.all(queue).then(function(results) {
      console.log("I saved " + shows.length + " shows!");
    });
  };

}

module.exports = DataService;
