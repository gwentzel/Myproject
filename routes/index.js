var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express theatre' });
});

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
