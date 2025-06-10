const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Prince');
});
const PORT = 3000;

server.listen(3000, () => {
  console.log(`Server Listening on ${PORT}`);
});
