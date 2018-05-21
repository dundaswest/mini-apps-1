var userTurn = 'A';

function clickEvent(){
if(userTurn === 'A') {
  this.innerHTML=  'X';
} else {
  this.innerHTML=  'O';
}

}
function clickEventB(){
  this.innerHTML = 'O';
  }
function switchUser(){
  userTurn === 'A' ? userTurn = 'B' : userTurn = 'A';
  console.log(userTurn)
}
var arr = document.getElementsByClassName("squre");

function isItEmpty(){
  for(var i = 0; i < arr.length;i++) {
    if(arr[i].innerHTML === 'X' || arr[i].innerHTML === 'O'){
      alert('err')
    } 
  }
  alert('start')
}
for(var i = 0; i < arr.length;i++) {
    arr[i].addEventListener("click", clickEvent);
    arr[i].addEventListener("click", switchUser);
}
isItEmpty()
console.log('hi')
//.addEventListener("click", clickEvent);