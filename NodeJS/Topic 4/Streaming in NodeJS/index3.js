const express = require('express');
const fs = require('fs');

const app = express();

app.get('/', (req, res) => {
  const stream = fs.createReadStream('demo.txt');
  fs.readFile('demo.txt', 'utf-8', (err, data) => {
    res.send(data);
  });
});

app.listen(3000);
