var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/signin', function (req, res, next) {
    res.render('users/signin');
});

router.get('/signup', function (req, res, next) {
    res.render('users/signup');
});

module.exports = router;
