document.addEventListener('DOMContentLoaded', init)

function init () {
  var currentPlayer = 1

  var boxes = document.querySelectorAll('.box')

  var box1 = document.querySelector('#one');
  var box2 = document.querySelector('#two');
  var box3 = document.querySelector('#three');
  var box4 = document.querySelector('#four');
  var box5 = document.querySelector('#five');
  var box6 = document.querySelector('#six');
  var box7 = document.querySelector('#seven');
  var box8 = document.querySelector('#eight');
  var box9 = document.querySelector('#nine');

  var restartBtn = document.querySelector('.restartBtn');
  restartBtn.addEventListener('click', restartGame);

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClick)
  }
  // this example uses innerHTML, however using it poses security risk, so avoid using it (refer to git book DOM manipulation, the case agains innerHTML), you can use classes to toggle x/o OR use textContent

  //Note: there are a lot of repeated codes here, such as checkWin(), checkDraw() and restartGame() this isin't good practice should refactor this to stick to principles of DRY
  function boxClick () {
    if (currentPlayer === 1) {
      this.innerHTML = "X";
      // this.classList.add('clickx')
      //check for winner and alert winner
      if(checkWin("X")){
        alert("X wins");
        restartGame();
      }
    } else {
      this.innerHTML = "O";
      // this.classList.add('clicko')
      //check for winner and alert winner
      if(checkWin("O")){
        alert("O wins");
        restartGame();
      }
    }
    //check if the game is a tie
    if(checkDraw()){
      alert("Draw");
      restartGame();
    }
    switchPlayer();
  }

  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }
  //a function which returns whether or not there's a winner, true if yes, false if no
  function checkWin (playerPiece) {
    //by default assume that at the start of the game, there's no winner
    var winner = false;
    //hardcoded method (this method is very inefficient, so find a way to use loops and if else to improve this)
    //also shouldn't be putting so many conditions inside one if statement, you can replace this with else if
    if(
        //horizontal checking
        box1.innerHTML === playerPiece && box2.innerHTML === playerPiece && box3.innerHTML === playerPiece ||
        box4.innerHTML === playerPiece && box5.innerHTML === playerPiece && box6.innerHTML === playerPiece ||
        box7.innerHTML === playerPiece && box8.innerHTML === playerPiece && box9.innerHTML === playerPiece ||
        //vertical checking
        box1.innerHTML === playerPiece && box4.innerHTML === playerPiece && box7.innerHTML === playerPiece ||
        box2.innerHTML === playerPiece && box5.innerHTML === playerPiece && box8.innerHTML === playerPiece ||
        box3.innerHTML === playerPiece && box6.innerHTML === playerPiece && box9.innerHTML === playerPiece ||
        //diagonal checking
        box1.innerHTML === playerPiece && box5.innerHTML === playerPiece && box9.innerHTML === playerPiece ||
        box3.innerHTML === playerPiece && box5.innerHTML === playerPiece && box7.innerHTML === playerPiece
      )
    {
      winner = true;
    }
    return winner;
  }
  // clear the whole board
  function restartGame(){
    location.reload();
  }
  //check draw based on number of empty spaces remaining
  function checkDraw(){
    //convert the box node list to an array
    var arrBoxes = Array.from(boxes);
    //get all empty boxes, if there are empty boxes, cannot be a draw
    var emptyBoxes = arrBoxes.filter(
      function(box){
        return box.innerHTML === "";
      }
    )
    if(emptyBoxes.length === 0){
      return true;
    }else{
      return false;
    }
  }
}
