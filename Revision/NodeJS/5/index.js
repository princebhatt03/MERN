// Route Parameter
// Dynamic Routing

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/about', (req, res) => {
  res.send('About');
});
app.get('/profile/:username', (req, res) => {
  res.send(`Hello ${req.params.username}`);
});

app.listen(3000);
