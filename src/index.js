'use strict';
/* added this to link showListApp*/
//var angular = require('angular');
//angular.module('showListApp').controller('showCtrl' ,require('angular-route'));
//angular.module('showListApp').controller('mainCtrl', require('./main'));
//angular.module('showListApp').controller('showCtrl', require('./models/show'));

/* original file */

var express = require('express');
var Show = require('./models/show');

var router = express.Router();

router.get('/shows', function(req, res) {
  Show.find({}, function(err, shows) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ shows: shows });
  });
});

router.post('/shows', function(req, res) {
  var show = req.body;
  Show.create(show, function(err, show) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'show': show, message: 'Show Created' });
  });
});

router.put('/shows/:id', function(req, res) {
  var id = req.params.id;
  var show = req.body;
  if (show && show._id !== id) {
    return res.status(500).json({ err: "Ids don't match!" });
  }
  Show.findByIdAndUpdate(id, show, {new: true}, function(err, show) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'show': show, message: 'Show Updated' });
  });
});

router.delete('/shows/:id', function(req, res) {
  var id = req.params.id;
  Show.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Show Deleted' });
  });
});

module.exports = router;
