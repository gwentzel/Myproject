'use strict';

var Show = require('./models/show');

var shows = [
	'Seed Play 1',
	'Seed Play 2',
	'Seed Play 3'
];

shows.forEach(function (show, index) {
  Show.find({ 'name': show }, function(err, shows) {
  	if (!err && !shows.length) {
      Show.create({ completed: false, name: show });
  	}
  });
});
