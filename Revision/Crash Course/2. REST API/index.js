// Designing a REST API

const express = require('express');
const app = express();
const fs = require('fs');
const users = require('./MOCK_DATA.json');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes

app.get('/', (req, res) => {
  res.send('Welcome to the REST API');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users.find(user => user.id === parseInt(id));
  if (user) {
    return res.json(user);
  } else {
    res.send('User not found');
  }
});

app.post('/users', (req, res, next) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./MOCK_DATA.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'success', id: users.length });
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
