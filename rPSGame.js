function getComputerChoice() {
  let randomInt = Math.floor(Math.random() * 3);
  switch (randomInt) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("Please type one of these: Rock, Paper or Scissors.");
  let lower = choice.toLowerCase();
  let capChoice = lower.charAt(0).toUpperCase() + lower.slice(1);
  return capChoice;
}

function playRound(humanSelection, computerSelection) {
  let outcome = 3;
  switch (humanSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        outcome = 1;
      } else if (computerSelection === "Paper") {
        outcome = 2;
      } else if (computerSelection === "Scissors") {
        outcome = 0;
      }
      return outcome;
    case "Paper":
      if (computerSelection === "Rock") {
        outcome = 0;
      } else if (computerSelection === "Paper") {
        outcome = 1;
      } else if (computerSelection === "Scissors") {
        outcome = 2;
      }
      return outcome;
    case "Scissors":
      if (computerSelection === "Rock") {
        outcome = 2;
      } else if (computerSelection === "Paper") {
        outcome = 0;
      } else if (computerSelection === "Scissors") {
        outcome = 1;
      }
      return outcome;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  for (let index = 0; index < 5; index++) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result);
    switch (result) {
      case 0:
        console.log(
          "You win, there must be an error in my code. A rogue ! maybe..."
        );
        humanScore = humanScore += 1;
        break;
      case 1:
        console.log("Luck, it seems, is more tangible than I expected.");
        break;
      case 2:
        console.log("As expected against an intelligent Machine.");
        computerScore = computerScore += 1;
        break;
      default:
        console.log("ERROR!!!!");
        break;
    }
    console.log(
      "Final scores, Human: " + humanScore + ", Computer: " + computerScore
    );
  }
}

playGame();
