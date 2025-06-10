const express = require('express');
const mongoose = require('./data');
const { time } = require('console');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Schema and Model

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  createdAt: {
    type: date,
    default: Date.now,
  },
});

const User = mongoose.model('User', userSchema);

app.post('/api/users', async (req, res) => {
  const body = req.body;
  if (!body || !body.name || !body.email || !body.age) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  const result = await User.create({
    name: body.name,
    email: body.email,
    age: body.age,
  });

  console.log('User created:', result);

  return res.status(201).json({
    msg: 'User created successfully',
  });
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
