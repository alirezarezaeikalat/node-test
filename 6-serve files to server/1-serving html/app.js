const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request' , (req , res) => {
  res.writeHead(200 , {'content-Type': 'text/html'});
  var myReadStream = fs.createReadStream(__dirname + '/../../index.html');
  myReadStream.pipe(res);
});



server.listen(3000 , () => {
  console.log('sever is now running on port 3000');
});