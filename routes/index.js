var express = require('express');
var shows = require('../mock/shows.json');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: shows[0].play});
  /*res.json({shows: shows});tested*/

});

/* todo: add post to create new shows
router.post('/Myproject', function (req,res){
var show = req.body;
Show.create(show, function(err,show){
  if(err) {
    return res.status(500).json({err.message});
  }
  res.json({'show': show,message: 'Show created'})
})


});   */
/*todo add put route to update existing shows
router.put('/Myproject/:id', function (req,res){
var id = req.parama.id;
var show = req.body;
if (show && show._id !== id){
return res.status(500).json({err: "Ids don't match!"}
}
Show.findByIdAndUpdate(id,show,{new: true}, function(err,show){
  if(err) {
    return res.status(500).json({err:err.message});
  }
  res.json({'show': show,message: 'Show updated'});
})

});   */









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
