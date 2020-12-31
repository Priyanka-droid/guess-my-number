'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Winning Number';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 30;
// document.querySelector('.guess').value = 14;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let high = Number(document.querySelector('.highscore').textContent);
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '❌  No Numberz';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '💥 Win win !';
    if (high < score) {
      high = score;
      document.querySelector('.highscore').textContent = high;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = number;
    document.querySelector('.number').style.width = '30rem';
  } else if (guess < number) {
    document.querySelector('.message').textContent = '😭 Low Number !';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    document.querySelector('.message').textContent = '😭 High Number !';
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  if (score == 0) {
    document.querySelector('.message').textContent = 'You lose';
    document.querySelector('body').style.backgroundColor = 'rgb(100,0,0)';
    document.querySelector('.number').textContent = '☹';
    document.getElementById('num').style.borderRadius = '50%';
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';

  document.querySelector('.highscore').textContent = '0';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = high;
  document.getElementById('num').style.borderRadius = '0px';
});
