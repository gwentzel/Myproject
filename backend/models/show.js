'use strict';
/* use mongoose to define Mongo data schema   */
var mongoose = require('mongoose');

/* define data types for show.name and show.completed  */

var showSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Show', showSchema);

module.exports = model;
