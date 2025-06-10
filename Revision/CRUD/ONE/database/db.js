const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost/MYDB2')
  .then(() => {
    console.log('Database Connected');
  })
  .catch(err => {
    console.log('Not Connected', err);
  });

module.exports = mongoose;
