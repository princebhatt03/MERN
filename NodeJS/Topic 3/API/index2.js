const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/api', (req, res) => {
  fs.readFile('api.json', 'utf-8', (err, data) => {
    // console.log(data);
    res.send(data);
  });
});

app.listen(3000);
