const http = require('http');
const fs = require('fs');
const server = http.createServer();

server.on('request' , (req , res) => {
  res.writeHead(200 , {'Content-Type': 'application.json'});
  var myObj = {
    name: 'alireza',
    job: 'developer'
  };
  res.end(JSON.stringify(myObj));
});

server.listen(3000 , () => {
  console.log('server is now running on port 3000');
});