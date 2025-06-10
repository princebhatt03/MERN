const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Hello From Middleware');
  next();
});

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.listen(3000);
