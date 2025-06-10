const express = require('express');
const app = express();
const sendMail = require('./index2');

app.get('/', (req, res) => {
  res.send('Hello');
});
app.get('/mail', sendMail);

app.listen(3000);
