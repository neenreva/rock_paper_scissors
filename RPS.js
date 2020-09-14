document.addEventListener('DOMContentLoaded', game)

function computerPlay() {
  let ranNumber = Math.ceil(Math.random() * 3);

  if (ranNumber == 3) {
    return 'rock';
  } else if (ranNumber == 2) {
    return 'paper';
  } else if (ranNumber == 1) {
    return 'scissors';
  } else {
    return 'Nope, not working'
  }
}

function playRound() {
  let playerSelection = document.querySelectorAll('button');
    playerSelection.forEach((button) => {
      button.addEventListener('click', () => {
        console.log(button.id);
        return button.id;
      })
    });
  
  let computerSelection = computerPlay()

   if (playerSelection == 'rock' && computerSelection == 'rock') {
     return 'draw';
   } else if (playerSelection == 'rock' && computerSelection == 'paper') {
     return 'lose'
   } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
     return 'win'
   } else if (playerSelection == 'paper' && computerSelection == 'paper') {
     return 'draw'
   } else if (playerSelection == 'paper' && computerSelection == 'rock') {
     return 'win'
   } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
     return 'lose'
   } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
     return 'draw'
   } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
     return 'lose'
   } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
     return 'win'
   }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let outcome = playRound()
    if (outcome == "win") {
      playerScore++;
      console.log("You win this round!");
    } else if (outcome == "lose") {
      computerScore++;
      console.log("You lose this round!")
    } else
      console.log("It's a draw!");
  }
  for (let j=0; j < 5; j++) {
    if (j <4) continue;

    if (playerScore > computerScore) {
    console.log("GAME! You won! " + playerScore + " to " + computerScore);
  } else if (playerScore < computerScore) {
    console.log("GAME! You lost! " + playerScore + " to " + computerScore);
  } else
    console.log("GAME! It's a draw! " + playerScore + " to " + computerScore);
    console.log("Please refresh page!");
  }
}
let playerScore = 0;
let computerScore = 0;