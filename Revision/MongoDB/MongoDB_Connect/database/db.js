const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/demoDB')
  .then(() => {
    console.log('Database Connected');
  })
  .catch(error => {
    console.log('Database not Connected', error);
  });

module.exports = mongoose;
