var userTurn = 'A';
var currentBoard = [];
var arr = document.getElementsByClassName("squre");
//make empty board
console.log(arr)
function myBoard() {
  var board = [];
  for(var i = 0; i < arr.length;i++) {
      var count = 0;
      board.push(arr[i].innerHTML.trim());
  }
  currentBoard.push(board.slice(0,3));
  currentBoard.push(board.slice(3,6));
  currentBoard.push(board.slice(6,9));
}
  
myBoard();
console.log(currentBoard)

function clickEvent(){
  if(userTurn === 'A') {
    console.log(this)
    console.log('innerText!!' + this.textContent)
   this.innerHTML = 'X';
  } else {
  this.innerHTML = 'O';
  }
 // myBoard();
  horizontally();
  vertically()
}

function clickEventB(){
  this.innerHTML = 'O';
}

function switchUser(){
  userTurn === 'A' ? userTurn = 'B' : userTurn = 'A';
  //console.log(userTurn);
}

//todo implement board

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
isItEmpty();
function horizontally(){
  if(currentBoard.some(e => e.join('') === 'XXX' || e.join('') === 'OOO')) {
    alert('hiiiiiii')
  }
}
function vertically() {
  for(var  i = 0; i < currentBoard.length;i++) {
    for(var j = 0; j < currentBoard.length;j++) {
      let arr = [];
      arr.push([currentBoard[i][j]]);
    }
   
  }
  let first = currentBoard.filter((e) => e[i][0] === 0);

  console.log('vertical ' + first)
}
console.log('hi');
console.log(currentBoard)
//.addEventListener("click", clickEvent);