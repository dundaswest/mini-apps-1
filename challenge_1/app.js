function clickEvent(){
this.innerHTML=  'X';
}
var arr = document.getElementsByClassName("squre");
for(var i = 0; i < arr.length;i++) {
  arr[i].addEventListener("click", clickEvent);
}
console.log('hi')
//.addEventListener("click", clickEvent);