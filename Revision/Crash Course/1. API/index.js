// What is API?
// API is a set of rules that allows different software applications to communicate with each other.
// // It defines the methods and data formats that applications can use to request and exchange information.
// What is Rest API?
// REST API is an architectural style for designing networked applications.
// It relies on a stateless, client-server communication model and uses standard HTTP methods.

const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/api', (req, res) => {
  res.sendFile(__dirname + '/api.json');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
