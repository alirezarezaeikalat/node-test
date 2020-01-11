const fs = require('fs');

fs.mkdir('stuff' , () => {
  console.log('the dir has been created');
});
