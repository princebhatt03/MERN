const express = require('express');
const app = express();
const users = require('./user_data.json');
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home Page');
});
app.get('/api', (req, res) => {
  res.send(users);
});
app.post('/api', (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./user_data.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'success', id: users.length });
  });
});
app.patch('/api', (req, res) => {
  return res.json({ status: 'pending' });
});
app.delete('/api', (req, res) => {
  const body = req.body;
  users.pop({ ...body, id: users.length });
  fs.unlink('./user_data.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'success', id: users.length });
  });
});

app.listen(3000);
