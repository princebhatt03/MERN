const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/MYDB')
  .then(() => {
    console.log('Database Connect');
  })
  .catch(err => {
    console.log('Not Connected', err);
  });

module.exports = mongoose;
