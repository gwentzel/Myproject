'use strict';

var mongoose = require('mongoose');
/* Connect to mongo database */
mongoose.connect('mongodb://localhost/mean-show', function(err) {
  if (err) {
    console.log('Failed connecting to MongoDB!');
  } else {
    console.log('Successfully connected to MongoDB!');
  }
});
