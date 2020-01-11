const express = require('express');
const app = express();


app.get('/' , (req , res) => {
  res.send('this is the first one');
});

app.get('/contacts' , (req , res) => {
  res.send('this is the contact page');
})
app.listen(3000 , () => {
  console.log('server is now running on port 3000');
});