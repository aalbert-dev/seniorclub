var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('forms', { title: 'Forms' });
});

router.post('/', function(req, res, next) {
  const movietitle = req.body.movietitle;
  res.render('forms', { title: 'Forms', movietitle:movietitle });
});

module.exports = router;
