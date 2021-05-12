const buttons = document.querySelectorAll('#btns');
  buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const ranNumber = Math.ceil(Math.random() * 3);
  return ranNumber == 3 ? 'rock': ranNumber == 2 ? 'paper' : 'scissors';
}

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

   if (playerSelection == computerSelection) {
      paraText.textContent = 'Draw!';
    } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
      (playerSelection === 'paper' && computerSelection === 'scissors') ||
      (playerSelection === 'scissors' && computerSelection === 'rock')) {
      paraText.textContent = 'Loss';
      computerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')) {
      paraText.textContent = 'WIN!!';
      playerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    };

  if (playerScore >= 5) {
    alert('YOU WON!!!, click ok to play again!');
    window.location.reload();
  } else if (computerScore >= 5) {
    alert('Sorry, you lose but you can click ok to play again...')
    window.location.reload();
  };
}

const roundResults = document.querySelector('#results');
const paraText = document.createElement('p');
paraText.classList.add('result');
roundResults.appendChild(paraText);
const scores = document.createElement('p');
scores.classList.add('tally');
roundResults.appendChild(scores);