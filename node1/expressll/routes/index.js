var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MM' });
});

router.get("/reg",function(req, res, next){
  res.render("reg.ejs");

});

module.exports = router;
