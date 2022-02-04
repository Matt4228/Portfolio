var express = require('express');
var router = express.Router();

/* GET updates page. */
router.get('/', function(req, res, next) {
  res.render('updates', { title: 'Updates' });
});

module.exports = router;