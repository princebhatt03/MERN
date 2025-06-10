const express = require('express');
const router = express.Router();
const User = require('./users');
const passport = require('passport');

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.post(
  '/login',
  passport.authenticate('local', {
    successRedirect: '/profile',
    failureRedirect: '/login',
  })
);

module.exports = router;
