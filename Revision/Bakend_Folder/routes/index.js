var express = require('express');
var router = express.Router();
const userModel = require('./users');

router.get('/', function (req, res, next) {
  res.cookie('age', 22);
  console.log(req.cookies);
  res.send('Hello');
  // res.render('index');
});

router.get('/create', async function (req, res, next) {
  const userCreated = await userModel.create({
    name: 'Prince Bhatt',
    email: 'princebhatt@gmail.com',
    age: 22,
  });
  res.send(userCreated);
});

// router.get('/checkban', function (req, res) {
//   if (req.session.ban === true) {
//     res.send('You are Banned');
//   } else {
//     res.send('Not Banned');
//   }
// });

// router.get('/removeban', (req, res) => {
//   req.session.destroy(err => {
//     if (err) throw err;
//     res.send('Ban Removed');
//   });
// });

module.exports = router;
