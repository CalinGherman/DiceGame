'use strict';
//  Name the elements
let score0EL = document.querySelector('#score--0');
let score1EL = document.getElementById('score--1');

const player0EL = document.querySelector('.player--0');
const player1EL = document.querySelector('.player--1');

let current0EL = document.getElementById('current--0');
let current1EL = document.getElementById('current--1');

let diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;
const scores = [0, 0];
let activePlayer = 0;
// when turn this to false the game is finished
let playing = true;

//Starting conditions
diceEL.classList.add('hidden');
score0EL.textContent = 0;
score1EL.textContent = 0;

const swichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer == 0 ? 1 : 0;
  currentScore = 0;
  player0EL.classList.toggle('player--active');
  player1EL.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Generate Random number
    let dice = Math.trunc(Math.random() * 6) + 1;

    //2. Display dice
    diceEL.classList.remove('hidden');
    diceEL.src = `dice-${dice}.png`;

    //3. check for roll 1: if true, switch to next player
    if (dice != 1) {
      //currentScore = currentScore + dice ,  is the same as down
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Swich to the next player
      swichPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1. add current score to active player
    scores[activePlayer] += currentScore;

    // Display the score for current player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('active--player');
        diceEL.classList.add('hidden');

    } else {
      // Swiching the player
      swichPlayer();
    }
  }
});

btnNew.addEventListener('click', function(){
    playing = true;
    document
    .querySelector(`.player--${activePlayer}`)
    .classList.remove('player--winner');
    
    activePlayer = 0;
    diceEL.classList.remove('hidden');

  player0EL.classList.add('player--active');
  player1EL.classList.remove('player--active');
    currentScore = 0;
    scores[0] = 0;
    scores[1] = 0;
    current0EL.textContent = 0;
    current1EL.textContent = 0;
    score0EL.textContent = 0;
    score1EL.textContent = 0;
    

})

// let score = document.querySelectorAll('.score');
// const btnNew = document.querySelector('.btn--new');
// console.log(score);

// btnNew.addEventListener('click', function(){
//     for(let i = 0; i < score.length; i++){
//         score[i].textContent = Number('0');
//     }
// })
