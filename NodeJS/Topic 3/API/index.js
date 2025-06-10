const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('Hello from the Home Page');
  } else if (req.url == '/api') {
    fs.readFile('api.json', 'utf-8', (err, data) => {
      //   console.log(data);
      res.end(data);
    });
  }
});

server.listen(3000);
