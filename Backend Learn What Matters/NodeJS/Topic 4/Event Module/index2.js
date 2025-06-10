const EventEmitter = require('events');
const events = new EventEmitter();

events.on('myFunc', (status, Message) => {
  console.log(`Status Code is ${status} and ${Message}`);
});

events.emit('myFunc', 200, 'Page Loaded');
