function computerPlay() {
  const ranNumber = Math.ceil(Math.random() * 3);

  if (ranNumber === 3) {
    return 'rock';
  } else if (ranNumber === 2) {
    return 'paper';
  } else if (ranNumber === 1) {
    return 'scissors';
  } else {
    return 'Nope, not working'
  }
}

let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll('#btns');
  buttons.forEach((button) => {
  button.addEventListener('click', playRound)
});

const roundResults = document.querySelector('#results');
const p = document.createElement('p');
p.classList.add('result');
roundResults.appendChild(p);
const scores = document.createElement('p');
scores.classList.add('tally');
roundResults.appendChild(scores);

function playRound(e) {
  const playerSelection = e.target.id;
  const computerSelection = computerPlay();

   if (playerSelection === 'rock' && computerSelection === 'rock') {
      p.textContent = 'Draw!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
      p.textContent = 'Loss';
      computerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
      p.textContent = 'WIN!!';
      playerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
      p.textContent = 'Draw!';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      p.textContent = 'WIN!!';
      playerScore++;  
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore); 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
      p.textContent = 'Loss';
      computerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
      p.textContent = 'Draw!';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
      p.textContent = 'Loss';
      computerScore++;
      scores.innerText = ('You ' + playerScore + ' Computer ' + computerScore);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      p.textContent = 'WIN!!';
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