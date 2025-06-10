var express = require('express');
var router = express.Router();

router.use((req, res, next) => {
  console.log('This is Middleware');
  next();
});

router.get('/', function (req, res, next) {
  res.render('index');
});
router.get('/about', function (req, res, next) {
  res.render('about');
});
router.get('/contact', function (req, res, next) {
  res.render('contact');
});
router.get('/help/:name', function (req, res, next) {
  res.render('help', { title: req.params.name });
});

module.exports = router;
