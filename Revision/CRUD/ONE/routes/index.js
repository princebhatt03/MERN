var express = require('express');
var router = express.Router();
const mongo = require('./users');

router.get('/', function (req, res, next) {
  res.render('index');
});

// Create
router.get('/create', async function (req, res, next) {
  const userCreated = await mongo.create({
    name: 'Prince Bhatt',
    email: 'princebhatt@gmail.com',
    age: 22,
  });
  res.send(userCreated);
  console.log(userCreated);
});

// Find
router.get('/find', async (req, res) => {
  const allUsers = await mongo.find();
  res.send(allUsers);
  console.log(allUsers);
});

// Find One
router.get('/findOne', async (req, res) => {
  const allUsers = await mongo.findOne({ name: 'Vanshika' });
  res.send(allUsers);
  console.log(allUsers);
});

// Delete

router.get('/delete', async (req, res) => {
  const deleteUser = await mongo.findOneAndDelete({
    name: 'Prince Bhatt',
  });
  res.send(deleteUser);
  console.log(deleteUser);
});

module.exports = router;
