import { input, print } from './bitcamp/lib.js';


function getRandomInt(n) {
  return Math.floor(Math.random() * n) + 1;
}

function inputForLevel() {
  let level;
  while (true) {
    level = input("Enter a positive integer for the game level:");
    level = Number(level);
    if (Number.isInteger(level) && level > 0) {
      return level;
    } else {
      console.log("Invalid input. Please enter a positive integer.");
    }
  }
}

function inputForGuess() {
  let guess;
  while (true) {
    guess = input("Guess the number:");
    guess = Number(guess);
    if (Number.isInteger(guess) && guess > 0) {
      return guess;
    } else {
      console.log("Invalid input. Please enter a positive integer.");
    }
  }
}

function guessingGame() {
  let level = inputForLevel();
  let targetNumber = getRandomInt(level);

  while (true) {
    let guess = inputForGuess();

    if (guess < targetNumber) {
      console.log("Too small!");
    } else if (guess > targetNumber) {
      console.log("Too large!");
    } else {
      console.log("Just right!");
      break;
    }
  }
}

guessingGame();
