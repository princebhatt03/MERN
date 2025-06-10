const os = require('os');

console.log(os.arch());
console.log(`${os.totalmem / 1024 / 1024 / 1024}`);
console.log(`${os.freemem / 1024 / 1024 / 1024}`);
console.log(os.hostname());
console.log(os.platform());
console.log(os.type());
