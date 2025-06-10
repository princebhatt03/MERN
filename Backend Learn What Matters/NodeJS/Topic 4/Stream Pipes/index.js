// Pipe Stream...

const fs = require('fs');
const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  const stream = fs.createReadStream('demo.txt');
  stream.pipe(res);
});

server.listen(3000);
