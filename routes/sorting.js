var express = require('express');
var router = express.Router();

/* GET sorting project page */
router.get('/', function(req, res, next) {
    res.render('sorting', { title : 'Sorting '});
});

module.exports = router;