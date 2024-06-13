const whoWon = (arr) => {
  // check upper row
  if (arr[0][1] == arr[0][0] && arr[0][1] == arr[0][2]) {
    return arr[0][1];
  }
  // check lower row
  if (arr[2][1] == arr[2][0] && arr[2][1] == arr[2][2]) {
    return arr[2][1];
  }
  // check left column
  if (arr[1][0] == arr[0][0] && arr[1][0] == arr[2][0]) {
    return arr[1][0];
  }
  // check right column
  if (arr[1][2] == arr[0][2] && arr[1][2] == arr[2][2]) {
    return arr[1][2];
  }
  // check center row, column, and diagonals
  if (
    (arr[1][1] == arr[1][0] && arr[1][1] == arr[1][2]) ||
    (arr[1][1] == arr[0][1] && arr[1][1] == arr[2][1]) ||
    (arr[1][1] == arr[0][0] && arr[1][1] == arr[2][2]) ||
    (arr[1][1] == arr[2][0] && arr[1][1] == arr[0][2])
  ) {
    return arr[1][1];
  }

  return "Tie";
};

Example: console.log(
  whoWon([
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "X", "X"],
  ])
); // Expected "X"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["X", "O", "X"],
    ["O", "X", "O"],
  ])
); // Expected "O"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["X", "X", "O"],
    ["O", "X", "O"],
  ])
); // Expected "Tie"

console.log(
  whoWon([
    ["X", "O", "X"],
    ["X", "O", "O"],
    ["X", "X", "O"],
  ])
); // Expected "X"

console.log(
  whoWon([
    ["O", "X", "O"],
    ["X", "X", "O"],
    ["O", "X", "X"],
  ])
); // Expected "X"

console.log(
  whoWon([
    ["X", "X", "O"],
    ["O", "X", "O"],
    ["X", "O", "O"],
  ])
); // Expected "O"

console.log(
  whoWon([
    ["X", "X", "X"],
    ["O", "X", "O"],
    ["X", "O", "O"],
  ])
); // Expected "X"

console.log(
  whoWon([
    ["X", "O", "X"],
    ["O", "O", "O"],
    ["X", "X", "O"],
  ])
); // Expected "O"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["X", "O", "X"],
    ["O", "X", "O"],
  ])
); // Expected "O"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["O", "X", "X"],
    ["X", "X", "O"],
  ])
); // Expected "X"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["X", "X", "X"],
    ["O", "O", "O"],
  ])
); // Expected "Tie"

console.log(
  whoWon([
    ["O", "O", "X"],
    ["X", "X", "O"],
    ["O", "X", "O"],
  ])
); // Expected "Tie"
