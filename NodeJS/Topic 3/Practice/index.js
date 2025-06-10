const http = require('http');
const fs = require('fs');

const bioData = {
  name: 'Prince',
  age: 21,
  email: 'prince@gmail.com',
};

const jsonData = JSON.stringify(bioData);

// fs.writeFile('api.json', jsonData, err => {
//   console.log(err);
// });

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Home Page');
  } else if (req.url == '/about') {
    res.end('About Page');
  } else if (req.url == '/api') {
    res.end(jsonData);
  } else {
    res.end('Error Page');
  }
});

server.listen(3000);
