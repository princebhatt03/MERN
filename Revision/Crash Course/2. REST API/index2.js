const express = require('express');
const app = express();

app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the REST API');
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
