const express = require('express');
const app = express();
const path    = require("path");
var bodyParser = require('body-parser');

app.use(express.static('client'));
app.use(bodyParser.json());
app.get('/',function(req,res) {
console.log('-----------' + req)
//console.log('--------------' + JSON.stringify(req.body));
res.send(req.body)
//res.send(req.data);
});

app.post('/', function (req, res) {
  ////console.log('--------------' + JSON.stringify(res));
 // res.send('POST')
 console.log(req.body)
  res.send(req.body);
});
app.listen(3000,()=> console.log('hello'));


