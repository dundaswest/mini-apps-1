var express = require('express');
var app =  express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/', function(req,res){
  res.send(req.body);
  console.log(req.body)
  console.log('from server');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'))

