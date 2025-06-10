const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('This is Home Page');
});
app.get('/about', function (req, res) {
  res.send('This is About Page');
});
app.get('/contact', function (req, res) {
  res.send('This is contact Page');
});

app.listen(3000);
