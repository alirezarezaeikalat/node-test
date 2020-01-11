const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request' , (req , res) => {

  res.writeHead(200 , {'Content-Type': 'text/plain'});
  var myReadStream = fs.createReadStream(__dirname + '/readMe.txt' , 'utf8');
  myReadStream.pipe(res);
});

server.listen(3000 , () => {
  console.log('server is now running on port 3000');
});