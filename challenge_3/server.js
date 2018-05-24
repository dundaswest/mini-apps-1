var express = require('express');
var bodyParser = require('body-parser');
var User = require('./database.js');
var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/checkout');



var app =  express();

app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/', function(req,res){
  console.log('app.post');
  console.log(req.body);
 // res.send(req.body);
  //how to send req.body to database????
  User.create(req.body, (err, user) => {
    if (err) return err;

    console.log(user);
  })

});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
// exports.module = goToDatabase;

//insert(data,callbakc){
  //cllbakc(send)
//}

