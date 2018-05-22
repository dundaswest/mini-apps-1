var userTurn = 'A';
var winner = {'X':'A',
              'O':'B'
              }
var currentBoard = [];
var arr = document.getElementsByClassName("squre");
var restBtn = document.getElementById("btn");

restBtn.addEventListener("click", emptyB);

function emptyB() {
  for(var i = 0; i < arr.length;i++) {
   arr[i].innerHTML = 0;
  }  
  //var fullNode = document.getElementById("full");
  //fullNode.parentNode.removeChild(fullNode);
  
}

function checkIfFull() {
  var count = 0;
  for(var i = 0; i < arr.length;i++) {
    if(arr[i].innerHTML !== '0') {
      count++;
    }
   } 
   if(count === arr.length) {
     //alert('full!');
    // var node = document.createElement("P");
     //var text = document.createTextNode("FULL");
     //node.appendChild(text);
     //document.getElementById("full").appendChild(node);
    
     emptyB();
   }
}
function myBoard() {
  var board = [];
  for(var i = 0; i < arr.length;i++) {
      var count = 0;
      board.push(arr[i].innerHTML.trim());
  }
  currentBoard[0] = board.slice(0,3);
  currentBoard[1] = board.slice(3,6);
  currentBoard[2] = board.slice(6,9);
}
  
myBoard();


function clickEvent(){
  if(userTurn === 'A') {
   this.innerHTML = 'X';
   myBoard();
  } else {
    this.innerHTML = 'O';
    myBoard();
  }
  myBoard();
  horizontally();
  vertically()
  diagonally();
  checkIfFull();
  console.log(currentBoard)
}

function clickEventB(){
  this.innerHTML = 'O';
}

function switchUser(){
  userTurn === 'A' ? userTurn = 'B' : userTurn = 'A';
}

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
    alert('win')
  }
}
function vertically() {
  for(var i = 0; i < currentBoard.length;i++) {
    let col = [];
    for(var j = 0; j < currentBoard.length;j++) {
      col.push(currentBoard[j][i]);
    }
    if(col.join('').includes('XXX') || col.join('').includes('OOO')) {
      alert('win')
    }
  }
}
function diagonally() {
  var topToBottom = [currentBoard[0][0],currentBoard[1][1],currentBoard[2][2]];
  var BottomToTOP = [currentBoard[0][2],currentBoard[1][1],currentBoard[2][0]];
  console.log(topToBottom);
  if(topToBottom.join('') === 'XXX' || BottomToTOP.join('') === 'XXX') {
    alert('win')
  }
  if(topToBottom.join('') === 'OOO' || BottomToTOP.join('') === 'OOO') {
    alert('win')
  }
}
console.log('hi');
