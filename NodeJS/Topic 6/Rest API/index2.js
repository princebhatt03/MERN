// Dynamic Routing...

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});
app.get('/profile/:name', (req, res) => {
  var name = req.params.name;
  res.send('Hello' + name);
});

app.listen(3000);
