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

function playRound(humanChoice, computerChoice) {
  switch (humanChoice) {
    case "Rock":
      if (computerChoice === "Rock") {
        outcome = 1;
      } else if (computerChoice === "Paper") {
        outcome = 2;
      } else if (computerChoice === "Scissors") {
        outcome = 0;
      }
      break;
    case "Paper":
      if (computerChoice === "Rock") {
        outcome = 0;
      } else if (computerChoice === "Paper") {
        outcome = 1;
      } else if (computerChoice === "Scissors") {
        outcome = 2;
      }
      break;
    case "Scissors":
      if (computerChoice === "Rock") {
        outcome = 2;
      } else if (computerChoice === "Paper") {
        outcome = 0;
      } else if (computerChoice === "Scissors") {
        outcome = 1;
      }
      break;
  }
  switch (outcome) {
    case 0:
      console.log("You win! You won't next time...");
      humanScore += 1;
      break;
    case 1:
      console.log(
        "You are my equal this time, there must have been an error..."
      );
      break;
    case 2:
      console.log("You lose! As expected against an intelligent machine.");
      computerScore += 1;
      break;
  }
}

let humanChoice = getHumanChoice();
let computerChoie = getComputerChoice();
let outcome = 3;

playRound(humanChoice, computerChoie);
