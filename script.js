'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🎉 Correct Number!';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(secretNumber);

  // when there's no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔️ Not a valid Number!';
    // when the player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // when the guess is too low
  } else if (guess < secretNumber && guess > 0) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.message').textContent = 'Game over! You Lost😭';
      document.querySelector('.score').textContent = 0;
    }
    // when the guess is too high
  } else if (guess > secretNumber && guess > 0) {
    if (gameScore > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      document.querySelector('.message').textContent = 'Game over! You Lost😭';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameScore = 20;
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
