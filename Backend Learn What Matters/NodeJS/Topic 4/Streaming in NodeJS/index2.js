const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const stream = fs.createReadStream('demo.txt');
  stream.on('data', data => {
    res.end(data);
  });
  stream.on('end', () => {
    res.end();
  });
  stream.on('error', err => {
    console.log(err);
    res.end();
  });
});

server.listen(4000);
