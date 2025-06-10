const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/Profile/:username', (req, res) => {
  res.send(`Hello From ${req.params.username}`);
});
app.listen(3000);
