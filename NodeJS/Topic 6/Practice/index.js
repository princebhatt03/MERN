const express = require('express');
const app = express();
const users = require('./user_data.json');
const fs = require('fs');

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Home');
});
app.get('/api', (req, res) => {
  res.send(users);
});
app.post('/api', (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });
  fs.writeFile('./user_data.json', JSON.stringify(users), (err, data) => {
    return res.json({ status: 'Success' });
  });
});
app.delete('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    fs.writeFile('./user_data.json', JSON.stringify(users), err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to delete user' });
      }
      return res.json({
        status: 'Success',
        message: 'User deleted successfully',
      });
    });
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});
app.patch('/api/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedFields = req.body;
  const index = users.findIndex(user => user.id === id);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedFields };
    fs.writeFile('./user_data.json', JSON.stringify(users), err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Failed to update user' });
      }
      return res.json({
        status: 'Success',
        message: 'User updated successfully',
      });
    });
  } else {
    return res.status(404).json({ error: 'User not found' });
  }
});

app.listen(3000);
