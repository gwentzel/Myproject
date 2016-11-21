'use strict';

/* set up Express and point to the show Schema for Mongo  */
var express = require('express');
var Show = require('../models/show');

var router = express.Router();
/* define the Get route to the database, retreiving the shows  */
router.get('/shows', function(req, res) {
  Show.find({}, function(err, shows) {
    if (err) {
      return res.status(500).json({ message: err.message });
    }
    res.json({ shows: shows });
  });
});
/* define the post/create/add route to add shows to the database*/
router.post('/shows', function(req, res) {
  var show = req.body;
  Show.create(show, function(err, show) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ 'show': show, message: 'Show Created' });
  });
});
/* define the put/update route to find and rename shows in the database*/
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
/* define the delete route to find and remove shows from the database*/
router.delete('/shows/:id', function(req, res) {
  var id = req.params.id;
  Show.findByIdAndRemove(id, function(err, result) {
    if (err) {
      return res.status(500).json({ err: err.message });
    }
    res.json({ message: 'Show Deleted' });
  });
});
/* Make this express router available to other portions of the app */
module.exports = router;
