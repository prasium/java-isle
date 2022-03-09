'use strict';

let score = 20;
let highscore = 0;

// generates random number
const generateNumber = function (range) {
  return Math.trunc(Math.random() * range) + 1;
};

// Number between 1 to 20
let hiddenNumber = generateNumber(20);

// set message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

// set score
const displayScore = function (val) {
  document.querySelector('.score').textContent = val;
};

// set number
const displayNumber = function (val) {
  document.querySelector('.number').textContent = val;
};

// adding click event
document.querySelector('.check').addEventListener('click', function () {
  const guessNumber = Number(document.querySelector('.guess').value);

  // When no input
  if (!guessNumber) {
    displayMessage('No Number entered! ⛔');
    // When player wins
  } else if (guessNumber === hiddenNumber) {
    displayMessage('Correct Number ✅');
    displayNumber(hiddenNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guessNumber !== hiddenNumber) {
    if (score > 1) {
      displayMessage(guessNumber > hiddenNumber ? 'Too High 📈' : 'Too Low 📉');

      score -= 1;
      displayScore(score);
    } else {
      displayMessage('Game Over, You lost 💥');
      displayScore(0);
    }
  }
});

// Reset functionality
document.querySelector('.again').addEventListener('click', function () {
  score = 20;

  // Number between 1 to 20
  hiddenNumber = generateNumber(20);
  displayNumber('?');
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
