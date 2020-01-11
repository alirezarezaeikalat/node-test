const events = require('events');
const util = require('util');

var Person = function(name) {
  this.name = name;
}

util.inherits(Person , events);

var p1 = new Person('alireza');

p1.on('test' , data => {
  console.log(data);
});

p1.emit('test' , p1.name);
