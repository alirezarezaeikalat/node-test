const events = require('events');

var myEventEmitter = new events.EventEmitter();

myEventEmitter.on('test' , (data) => {
  console.log(data);
});

myEventEmitter.emit('test' , 'this is the data');