//import { IncomingMessage } from "http";
//var modify = require('./modifyData');
function bye(obj) {
  var result = [];
  var id = 0;
  result.push(Object.keys(obj).filter((e => e !== 'children')).join(', '));
  
  function hi(obj) {
    var temp = [];
    var targetArr = Object.keys(obj);
    for(var i = 0; i < targetArr.length;i++) {
      if(targetArr[i] !== "children") {
        temp.push(obj[targetArr[i]]);
      }
    }
 
  id++;
  result.push(`${temp.join(',')} ${id}`);

      if(obj.children.length) {

        for(let i = 0; i < obj.children.length;i++) {
          hi(obj.children[i]);
        }
      }
  }
  hi(obj);
  
  return result.join('\n');
}

$(document).ready(function(){
var handleSubmitBtn = $("button").on('click',function(e){
  e.preventDefault();
  var inputVal = $("#input").val();
  var message = JSON.stringify({inputVal})

  $.ajax({
    url:"http://localhost:3000",
    type: 'POST',
    data: message,
    contentType: "application/json",
    success: function(data) {
        console.log('success');
        //callback?
        //append parsed data to results p
        console.log('here is data', data);
        data = JSON.parse(data);
        console.log('result ' + bye(data));
        bye(data);
        //$(results).append(bye(data));
    },
    err: function(err){
      console.log(err);
    }
  });
});
});





