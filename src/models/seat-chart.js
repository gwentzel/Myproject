'use strict';

var mongoose = require('mongoose');

//seat-chart.show
//seat-chart.date
//set-chart.map

var seat-chartSchema = new mongoose.Schema({
show: String,
date: Date,
map: String

});

var model = mongoose.model('Seat-chart',seat-chartSchema);

module.exports = model;
