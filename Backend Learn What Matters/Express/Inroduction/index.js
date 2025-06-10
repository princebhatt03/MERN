const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello From Home');
});
app.get('/profile', (req, res) => {
  res.send('Hello From Profile');
});
app.get('/contact', (req, res) => {
  res.send('Hello From Contact');
});

app.listen(3000);
