const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  fs.readFile('demo.txt', 'utf-8', (err, data) => {
    res.end(data);
  });
});

server.listen(3000);
