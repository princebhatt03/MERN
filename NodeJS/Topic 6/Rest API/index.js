// Rest API...

const express = require('express');
const users = require('./user_data.json');
const fs = require('fs');

const app = express();
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home Page');
});
app.get('/users', (req, res) => {
  return res.json(users);
});
app.get('/api/users', (req, res) => {
  return res.json(users);
});
app.get('/users/:id', (req, res) => {
  const id = Number(req.params.id);
  const user = users.find(user => user.id === id);
  return res.json(user);
});
app.post('/api/users', (req, res) => {
  const body = req.body;
  users.push(...body, id.users.length + 1);
  fs.writeFile('./user_data.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'pending' });
  });
});
app.patch('/api/users/:id', (req, res) => {
  return res.json({ status: 'pending' });
});
app.delete('/api/users/:id', (req, res) => {
  return res.json({ status: 'pending' });
});

app.listen(3000);
