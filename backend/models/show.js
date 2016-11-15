'use strict';

var mongoose = require('mongoose');

// show.name
// show.completed

var showSchema = new mongoose.Schema({
	name: String,
	completed: Boolean
});

var model = mongoose.model('Show', showSchema);

module.exports = model;
