'use strict';
let rand = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function setMessage(msg) {
  document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener('click', checkNumber);
document
  .querySelector('.guess')
  .addEventListener('keypress', e => e.keyCode === 13 && checkNumber());
function checkNumber() {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setMessage('No number');
  } else if (guess === rand) {
    setMessage('Correct Number');
    document.querySelector('.number').textContent = rand;
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== rand) {
    if (score > 1) {
      setMessage(guess > rand ? 'Too high...' : 'Too low...');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('You Lost');
      document.querySelector('.score').textContent = 0;
    }
  }
}

document.querySelector('.again').addEventListener('click', handleAgainClick);
function handleAgainClick() {
  score = 20;
  rand = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.body.style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
}
