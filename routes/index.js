var express = require('express');
var Show    = require('../src/models/show');
var shows   = require('../mock/shows.json');
var router  = express.Router();

router.get('/', function(res, res) {
  res.render('index')
})

router.get('/admin', function(res, res) {
  res.render('admin/admin-index')
})

/* GET home page. */
router.get('/shows', function(req, res) {
/*  res.render('index', { title: shows[0].play}); */
  // console.log('hello ', req.url)
  Show.find({})
  .sort({play:1})
  .exec(function (err, shows) {
    if (err) {
      return res.status(500).json({message: err.message});
    }
    res.json({shows: shows}); /*tested*/
  }); // Show.find
}); // router.get(/shows)
/* todo: add post to create new shows */

router.post('/shows', function (req,res){
var show = req.body;
Show.create(show, function(err,show){
  if(err) {
    return res.status(500).json({err:err.message});
  }
  res.json({'show': show,message: 'Show created'});
})


});
/*todo add put route to update existing shows */
router.put('/shows/:id', function (req,res){
var id = req.params.id;

var show = req.body;
if (show && show._id !== id){
return res.status(500).json({err: "Ids don't match!"})
}
Show.findByIdAndUpdate(id,show,{new: true}, function(err,show){
  if(err) {
    return res.status(500).json({err:err.message});
  }
  res.json({'show': show,message: 'Show updated'});
})

});

//todo add delete to remove a show

 /* handler fired in seat context(this)
click : function(){
  if (this.status() =="available'"){
    var price = this.data().price,
    category = this.data().category;
    this.node().css({
      'font-size': '25px'
    });
    return 'selected';
  }
}
*/
module.exports = router;
