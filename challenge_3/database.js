var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');
var db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log('monogogogogogo');
});
var userSchema = mongoose.Schema({
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



module.exports = db;
