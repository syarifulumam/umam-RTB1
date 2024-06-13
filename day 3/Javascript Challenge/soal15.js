const calculateScore = (arr) => {
  let abigail = 0;
  let benson = 0;

  for (i = 0; i < arr.length; i++) {
    if (arr[i][0] === arr[i][1]) {
      ("it's a draw!");
    } else if (arr[i][0] === "R" && arr[i][1] === "S") {
      abigail++;
    } else if (arr[i][0] === "R" && arr[i][1] === "P") {
      benson++;
    } else if (arr[i][0] === "P" && arr[i][1] === "R") {
      abigail++;
    } else if (arr[i][0] === "P" && arr[i][1] === "S") {
      benson++;
    } else if (arr[i][0] === "S" && arr[i][1] === "P") {
      abigail++;
    } else if (arr[i][0] === "S" && arr[i][1] === "R") {
      benson++;
    }
  }

  if (abigail > benson) return "Abigail";
  if (benson > abigail) return "Benson";
  return "Tie";
};

// Example
console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
); // Expected "Abigail"

// Benson wins the first game (Paper beats Rock).
// Abigail wins the second game (Rock beats Scissors).
// Abigail wins the third game (Scissors beats Paper).
// Abigail wins 2/3.

console.log(
  calculateScore([
    ["R", "R"],
    ["S", "S"],
  ])
); // Expected "Tie"
console.log(
  calculateScore([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScore([
    ["R", "P"],
    ["R", "S"],
    ["S", "P"],
  ])
); // Expected  "Abigail"
console.log(
  calculateScore([
    ["R", "R"],
    ["S", "S"],
  ])
); // Expected "Tie"
console.log(
  calculateScore([
    ["S", "R"],
    ["R", "S"],
    ["R", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScore([
    ["S", "R"],
    ["P", "R"],
  ])
); // Expected "Tie"
console.log(
  calculateScore([
    ["S", "S"],
    ["S", "P"],
    ["R", "S"],
    ["S", "R"],
    ["R", "R"],
  ])
); // Expected "Abigail"
console.log(
  calculateScore([
    ["S", "R"],
    ["S", "R"],
    ["S", "R"],
    ["R", "S"],
    ["R", "S"],
  ])
); // Expected "Benson"
