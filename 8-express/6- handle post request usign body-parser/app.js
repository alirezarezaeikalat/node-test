const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine' , 'ejs');
app.use('/public' , express.static('public'));

app.get('/' , (req , res) => {
  res.render('index.ejs');
});

app.get('/contacts' , (req , res) => {
  res.render('contacts.ejs');
});

app.post('/contacts', urlencodedParser , (req, res) => {
  console.log(req.body);
  res.render('contacts.ejs');
});

app.listen(3000 , () => {
  console.log('The server is now running on port 3000');
})