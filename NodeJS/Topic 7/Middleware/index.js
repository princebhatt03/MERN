const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Hello from Middleware 1');
  next();
});

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.listen(3000);
