// HTTP Server...

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Home Page');
  } else if (req.url == '/about') {
    res.end('About Page');
  }
});

server.listen(3000, () => {
  console.log('HTTP Server is Running');
});
