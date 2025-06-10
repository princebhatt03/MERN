// Express Server

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('This is Home Page');
});

app.listen(3000);
