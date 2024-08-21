let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "Rock!";
      break;
    case 1:
      return "Paper!";
      break;
    case 2:
      return "Scissors!";
      break;
  }
}

function getHumanChoice() {
  let choice = prompt("Please type one of these: Rock, Paper or Scissors.");
  let lower = choice.toLowerCase();
  let capChoice = lower.charAt(0).toUpperCase() + lower.slice(1);
  switch (capChoice) {
    case "Rock":
      return "Rock";
      break;
    case "Paper":
      return "Paper";
      break;
    case "Scissors":
      return "Scissors";
      break;
  }
}

function playRound() {}
