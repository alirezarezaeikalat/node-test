const fs = require('fs');

fs.readFile('./readMe.txt' , 'utf8' ,(err , data) => {
  if(err) {
    console.log('there is a Error');
  } else {
    fs.writeFile('./writeMe.txt' , data , () => {});
    console.log('prior');
  }
});

console.log('test');
fs.unlink(writeMe.txt);