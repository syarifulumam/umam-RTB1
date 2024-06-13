const isSpecialArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0 && arr[i] % 2 !== 0) {
      return false;
    }
    if (i % 2 !== 0 && arr[i] % 2 === 0) {
      return false;
    }
  }
  return true;
};

// Example

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // Expected true, Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // Expected false, Index 2 has an odd number 9.
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // Expected false, Index 3 has an even number 8.
console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); // Expected true
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); // Expected false
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); // Expected false
console.log(isSpecialArray([1, 1, 1, 2])); // Expected false
console.log(isSpecialArray([2, 2, 2, 2])); // Expected false
console.log(isSpecialArray([2, 1, 2, 1])); // Expected true
console.log(isSpecialArray([4, 5, 6, 7])); // Expected true
console.log(isSpecialArray([4, 5, 6, 7, 0, 5])); // Expected true
