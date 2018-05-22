const express = require('express');
const app = express();
//app.get('/',(req,res) => res.send('HELLO WORLD'));
app.use(express.static('client'));
app.get('/',(req,res) => res.send('HELLO WORLD'));
app.post('/', function (req, res) {
  console.log(res);
  res.send(res)
})
app.listen(3000,()=> console.log('hello'));
