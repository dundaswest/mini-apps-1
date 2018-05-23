$(document).ready(function(){
  $('submit').on('click',function(){
    $.ajax({
      method: "POST",
      url: "http://localhost:3000",
      data: { name: "John", location: "Boston" }
    })
      .done(function( msg ) {
        alert( "Data Saved: " + msg );
      });
  })
})
