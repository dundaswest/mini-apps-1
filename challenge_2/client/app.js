//import { IncomingMessage } from "http";


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
        console.log(data)
        //callback?
        //append parsed data to results p
        console.log('here is data', data);
    },
    err: function(err){
      console.log(err);
    }
  });
});
});

