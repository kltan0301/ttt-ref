document.addEventListener('DOMContentLoaded', init)

function init () {
  // var numPlayer = 2
  // var clickCount = 0
  // var winningCombi = [[][][]]
  var currentPlayer = 1

  var boxes = document.querySelectorAll('.box')

  for (var i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('click', boxClick)
  }

  function boxClick () {
    if (currentPlayer === 1) {
      this.classList.add('clickx')
    } else {
      this.classList.add('clicko')
    }

    switchPlayer()
  }

  function switchPlayer () {
    if (currentPlayer === 1) {
      currentPlayer = 2
    } else {
      currentPlayer = 1
    }
  }
}
