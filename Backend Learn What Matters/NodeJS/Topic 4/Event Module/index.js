// Event Module

const EventEmitter = require('events');
const events = new EventEmitter();

events.on('name', () => {
  console.log('Hello Prince');
});

events.emit('name');
