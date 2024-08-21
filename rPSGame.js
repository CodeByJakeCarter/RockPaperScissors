function getComputerChoice() {
  let choice = Math.random();
  if (0 <= choice < 1 / 3) {
    console.log("Rock!");
  } else if (1 / 3 <= choice < 2 / 3) {
    console.log("Paper!");
  } else if (2 / 3 <= choice <= 1) {
    console.log("Scissors!");
  }
}
