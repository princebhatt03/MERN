const fs = require('fs');

// fs.writeFile('read.txt', 'hello', err => {
//   console.log('Done');
// });

// fs.appendFile('read.txt', ' Prince', err => {
//   console.log('Done Again');
// });

// fs.readFile('read.txt', (err, data) => {
//   console.log(data.toString());
// });

fs.readFile('read.txt', 'utf-8', (err, data) => {
  console.log(data);
});
