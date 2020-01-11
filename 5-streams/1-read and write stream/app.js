const http = require('http');
const fs = require('fs');

var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');
var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
myReadStream.on('data' , chunk => {
  console.log('new chunk received');
  myWriteStream.write(chunk);
});
