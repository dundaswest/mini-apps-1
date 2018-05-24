var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database.js');

var app =  express();

app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/', function(req,res){
  res.send(req.body);
  //how to send req.body to database????

  console.log(req.body)
  console.log('from server');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))

