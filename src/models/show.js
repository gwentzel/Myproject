'use strict';

var mongoose = require('mongoose');

//seat-chart.play
//seat-chart.date
//set-chart.map

var showSchema = new mongoose.Schema({
play: String,
date: Date,
map: String

});

var model = mongoose.model('Show',showSchema);

module.exports = model;
