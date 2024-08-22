let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "Rock!";
    case 1:
      return "Paper!";
    case 2:
      return "Scissors!";
  }
}

function getHumanChoice() {
  let choice = prompt("Please type one of these: Rock, Paper or Scissors.");
  let lower = choice.toLowerCase();
  let capChoice = lower.charAt(0).toUpperCase() + lower.slice(1);
  return capChoice;
}

function playRound(humanSelection, computerSelection) {
  let outcome;
  switch (humanSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        outcome = 1;
      } else if (computerSelection === "Paper") {
        outcome = 2;
      } else if (computerSelection === "Scissors") {
        outcome = 0;
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        outcome = 0;
      } else if (computerSelection === "Paper") {
        outcome = 1;
      } else if (computerSelection === "Scissors") {
        outcome = 2;
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        outcome = 2;
      } else if (computerSelection === "Paper") {
        outcome = 0;
      } else if (computerSelection === "Scissors") {
        outcome = 1;
      }
      break;
  }
  switch (outcome) {
    case 0:
      console.log("You win! You won't next time...");
      humanScore += 1;
      return;
    case 1:
      console.log(
        "You are my equal this time, there must have been an error..."
      );
      return;
    case 2:
      computerScore += 1;
      console.log("You lose! As expected against an intelligent machine.");
      return;
  }
}

function playGame() {
  for (let index = 0; index < 5; index++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = toString(playRound(humanChoice, computerChoice));
    console.log(result);
  }
  console.log(
    "Final scores, Human: " + humanScore + ", Computer: " + computerScore
  );
}

playGame();
