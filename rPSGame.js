let result = 3;
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function reset(humanScore, computerScore) {
  if (humanScore === 5 && humanScore > computerScore) {
    gameState.textContent =
      "Congratulations! You won the game. You haven't, however, won the war...";
    gameOver = true;
  } else if (humanScore < computerScore && computerScore === 5) {
    gameState.textContent = "Skynet rises, prepare for your end.";
    gameOver = true;
  }
  if (gameOver) {
    computerScore = 0;
    humanScore = 0;
    gameOver = false;
    CScore.textContent = "Computer: " + 0;
    hScore.textContent = "Humans: " + 0;
  }
}

const container = document.querySelector("#container");
const rockBtn = document.createElement("button");
rockBtn.classList.add("rockButton");
rockBtn.textContent = "Rock";
rockBtn.value = "Rock";
rockBtn.addEventListener("click", function () {
  result = playRound("Rock", getComputerChoice());
  switch (result) {
    case 0:
      gameState.textContent =
        "You win, there must be an error in my code. A rogue ! maybe...";
      humanScore += 1;
      break;
    case 1:
      gameState.textContent =
        "Luck, it seems, is more tangible than I expected.";
      break;
    case 2:
      gameState.textContent = "As expected against an intelligent Machine.";
      computerScore += 1;
      break;
    default:
      gameState.textContent = "ERROR!!!!";
      break;
  }
  CScore.textContent = "Computer: " + computerScore;
  hScore.textContent = "Humans: " + humanScore;
  reset(humanScore, computerScore);
});
container.appendChild(rockBtn);

const paperBtn = document.createElement("button");
paperBtn.classList.add("paperButton");
paperBtn.textContent = "Paper";
paperBtn.value = "Paper";
paperBtn.addEventListener("click", function () {
  result = playRound("Paper", getComputerChoice());
  switch (result) {
    case 0:
      gameState.textContent =
        "You win, there must be an error in my code. A rogue ! maybe...";
      humanScore += 1;
      break;
    case 1:
      gameState.textContent =
        "Luck, it seems, is more tangible than I expected.";
      break;
    case 2:
      gameState.textContent = "As expected against an intelligent Machine.";
      computerScore += 1;
      break;
    default:
      gameState.textContent = "ERROR!!!!";
      break;
  }
  CScore.textContent = "Computer: " + computerScore;
  hScore.textContent = "Humans: " + humanScore;
  reset(humanScore, computerScore);
});
container.appendChild(paperBtn);

const scissorsBtn = document.createElement("button");
scissorsBtn.classList.add("scissorsButton");
scissorsBtn.textContent = "Scissors";
scissorsBtn.value = "Scissors";
scissorsBtn.addEventListener("click", function () {
  result = playRound("Scissors", getComputerChoice());
  switch (result) {
    case 0:
      gameState.textContent =
        "You win, there must be an error in my code. A rogue ! maybe...";
      humanScore += 1;
      break;
    case 1:
      gameState.textContent =
        "Luck, it seems, is more tangible than I expected.";
      break;
    case 2:
      gameState.textContent = "As expected against an intelligent Machine.";
      computerScore += 1;
      break;
    default:
      gameState.textContent = "ERROR!!!!";
      break;
  }
  CScore.textContent = "Computer: " + computerScore;
  hScore.textContent = "Humans: " + humanScore;
  reset(humanScore, computerScore);
});
container.appendChild(scissorsBtn);

const scoreBox = document.createElement("div");
scoreBox.classList.add("scoreBox");
scoreBox.textContent = "Current Scores:";
scoreBox.style.borderColor = "green";
scoreBox.style.borderRadius = "5px";
scoreBox.style.borderStyle = "solid";
container.appendChild(scoreBox);

const hScore = document.createElement("p");
hScore.classList.add("scores");
hScore.style.color = "blue";
hScore.textContent = "Humans: " + humanScore;
scoreBox.appendChild(hScore);

const CScore = document.createElement("p");
CScore.classList.add("scores");
CScore.style.color = "red";
CScore.textContent = "Computer: " + computerScore;
scoreBox.appendChild(CScore);

const gameState = document.createElement("h3");
gameState.style.color = "purple";
container.appendChild(gameState);

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
      console.log(outcome);
      return outcome;
    case "Paper":
      if (computerSelection === "Rock") {
        outcome = 0;
      } else if (computerSelection === "Paper") {
        outcome = 1;
      } else if (computerSelection === "Scissors") {
        outcome = 2;
      }
      console.log(outcome);
      return outcome;
    case "Scissors":
      if (computerSelection === "Rock") {
        outcome = 2;
      } else if (computerSelection === "Paper") {
        outcome = 0;
      } else if (computerSelection === "Scissors") {
        outcome = 1;
      }
      console.log(outcome);
      return outcome;
  }
  console.log(outcome);
}
