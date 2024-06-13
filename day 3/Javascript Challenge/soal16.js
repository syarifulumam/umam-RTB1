const spiralOrder = (matrix) => {
  const rowsLength = matrix.length;
  const colsLength = matrix[0].length;
  const length = rowsLength * colsLength;

  let rowsStart = 0;
  let rowsEnd = rowsLength - 1;
  let rowsIndex = 0;

  let colsStart = 0;
  let colsEnd = colsLength - 1;
  let colsIndex = 0;

  const result = [];

  for (let i = 0; i < length; i++) {
    const currentNumber = matrix[rowsIndex][colsIndex];
    result.push(currentNumber);

    if (rowsIndex === rowsStart && colsIndex < colsEnd) {
      colsIndex++;
      continue;
    }

    if (
      colsIndex === colsEnd &&
      (rowsIndex === rowsStart || rowsIndex < rowsEnd)
    ) {
      rowsIndex++;
      continue;
    }

    if (
      rowsIndex === rowsEnd &&
      (colsIndex === colsEnd || colsIndex > colsStart)
    ) {
      if (
        colsIndex === colsEnd &&
        rowsIndex === rowsEnd &&
        colsEnd < colsLength - 1 &&
        rowsEnd < rowsLength - 1
      ) {
        colsStart++;
      }

      colsIndex--;
      continue;
    }

    if (rowsIndex === rowsEnd && colsIndex === colsStart) {
      rowsStart++;
      rowsIndex--;
      continue;
    }

    if (colsIndex === colsStart && rowsIndex >= rowsStart) {
      rowsIndex--;

      if (rowsIndex === rowsStart) {
        colsEnd--;
        rowsEnd--;
      }
      continue;
    }
  }

  return result;
};

// Example
console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected [1, 2, 3, 6, 9, 8, 7, 4, 5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // Expected [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // Expected [1,2,3,6,9,8,7,4,5]

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); // Expected [1,2,3,4,8,12,11,10,9,5,6,7]

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
  ])
); // Expected [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

console.log(
  spiralOrder([
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18],
  ])
); // Expected [1, 2, 3, 4, 5, 6, 12, 18, 17, 16, 15, 14, 13, 7, 8, 9, 10, 11]

console.log(
  spiralOrder([
    [13, 14, 15, 16, 17, 18],
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ])
); // Expected [13, 14, 15, 16, 17, 18, 6, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5]

console.log(
  spiralOrder([
    [13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    [7, 8, 9, 10, 11, 12, 23, 24, 25, 26],
  ])
); // Expected [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 10, 26, 25, 24, 23, 12, 11, 10, 9, 8, 7, 1, 2, 3, 4, 5, 6, 7, 8, 9]
