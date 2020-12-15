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
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  console.log(secretNumber);

  // when there's no input
  if (!guess) {
    displayMessage('⛔️ Not a valid Number!');
    // when the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '32rem';

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector('.highscore').textContent = highScore;
    }
    // when the guess is wrong:
  } else if (guess !== secretNumber) {
    if (gameScore > 1) {
      displayMessage(secretNumber < guess ? '📈 Too High!' : '📉 Too Low!');
      gameScore--;
      document.querySelector('.score').textContent = gameScore;
    } else {
      displayMessage('Game over! You Lost😭');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//   // when the guess is too low
// } else if (guess < secretNumber) {
//   if (gameScore > 1) {
//     displayMessage('📉 Too low!');
//     gameScore--;
//     document.querySelector('.score').textContent = gameScore;
//   } else {
//     displayMessage()'Game over! You Lost😭';
//     document.querySelector('.score').textContent = 0;
//   }
//   // when the guess is too high
// } else if (guess > secretNumber) {
//   if (gameScore > 1) {
//     displayMessage('📈 Too high!');
//     gameScore--;
//     document.querySelector('.score').textContent = gameScore;
//   } else {
//     displayMessage()'Game over! You Lost😭';
//     document.querySelector('.score').textContent = 0;
//   }
// }
// });

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  gameScore = 20;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = '20';
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = 'rgb(23, 122, 214)';
  document.querySelector('.number').style.width = '18rem';
  document.querySelector('.guess').value = '';
});
