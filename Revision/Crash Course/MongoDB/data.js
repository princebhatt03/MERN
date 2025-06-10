const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/MYDB2')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Connection error:', err));

module.exports = mongoose;
