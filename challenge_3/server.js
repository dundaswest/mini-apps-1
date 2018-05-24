var express = require('express');
var bodyParser = require('body-parser');
var db = require('./database.js');
var mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/checkout');

var userSchema = new mongoose.Schema({
  name: String,
  email:String,
  password:String,
  line1:String,
  line2:String,
  city:String,
  zip:Number,
  phoneNumber:Number,
  creditCard:Number,
  expirydate:Number,
  CVV:Number,
  billingZipCode:Number,
});

var app =  express();
var goToDatabase = '';
app.use(bodyParser.json());
app.use(express.static('public'));
app.post('/', function(req,res){
 // res.send(req.body);
  //how to send req.body to database????
  var myData = new User(req.body);
 // goToDatabase = req.body;
 myData.save().then(item => {
  res.send("Name saved to database");
})
.catch(err => {
  res.status(400).send("Unable to save to database");
});
  console.log(req.body)
  console.log('from server');
});
app.listen(3000, () => console.log('Example app listening on port 3000!'));
exports.module = goToDatabase;

//insert(data,callbakc){
  //cllbakc(send)
//}

