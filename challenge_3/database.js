var mongoose = require('mongoose');
var goToDatabase = require('./server');
mongoose.connect('mongodb://localhost/checkout');
var db = mongoose.connection;
/*
var line1 = goToDatabase.userInput[0].split(',');
var line2 = goToDatabase.userInput[1].split(',');
var line3 = goToDatabase.userInput[2].split(',');
*/
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log('monogogogogogo');
});
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

var User = mongoose.model('User', userSchema);
/*
var myUser = new User(
  {name:line1[0],email:line1[1],password:line1[2],
  line1:line2[0],line2:line2[1],city:line2[2],state:line2[3],zip:line2[4],phoneNumber:line2[5],
  creditCard:line3[0],expirydate:line3[1], billingZipCode:line3[2]
  }
);
myUser.save(function (err, myUser) {
  if (err) return console.error(err);
});*/
//insert 
module.exports = db;
