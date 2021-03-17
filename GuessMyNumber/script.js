"use strict";

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const setScore = function (score) {
  document.querySelector(".score").textContent = score;
};

const setSecretNumber = function (number) {
  document.querySelector(".number").textContent = number;
};

checkBtn.addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);

  // When there is no input
  if (!guess) {
    displayMessage("No Number!");

    // When the player wins
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high" : "Too low");
      score--;
      setScore(score);
    } else {
      displayMessage("You lost the game!");
      setScore(0);
    }
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    setSecretNumber(secretNumber);

    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
});

againBtn.addEventListener("click", () => {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage("Start guessing...");
  setScore(score);
  setSecretNumber("?");

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";

  document.querySelector(".number").style.width = "15rem";
});
