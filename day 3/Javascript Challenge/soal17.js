// Example
console.log(finalCountdown([4, 8, 3, 2, 1, 2])); // Expected [1, [[3, 2, 1]]]
// 1 countdown sequence: 3, 2, 1

console.log(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1])); // Expected [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
// 2 countdown sequences:
// 5, 4, 3, 2, 1 and 3, 2, 1

console.log(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1])); // Expected [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
// 3 countdown sequences:
// 4, 3, 2, 1 ; 3, 2, 1 and 1
console.log(finalCountdown([1, 1, 2, 1])); // Expected [3, [[1], [1], [2, 1]]]
console.log(finalCountdown([])); // Expected  [0, []]
console.log(finalCountdown([5, 4, 3, 2, 1])); // Expected [1, [[5, 4, 3, 2, 1]]]
console.log(finalCountdown([2, 5, 4, 3, 2, 1, 2])); // Expected [1, [[5, 4, 3, 2, 1]]]
console.log(finalCountdown([2, 3, 2, 1, 4, 3, 2, 1])); // Expected [2, [[3, 2, 1], [4, 3, 2, 1]]]
console.log(finalCountdown([4, 3, 2, 5, 4, 3])); // Expected [0, []]
console.log(finalCountdown([4, 3, 2, 5, 4, 3, 1])); // Expected [1, [[1]]]
console.log(finalCountdown([3, 2, 1, 5, 5, 3, 2, 1, 5, 5])); // Expected [2, [[3, 2, 1], [3, 2, 1]]]
console.log(finalCountdown([4, 8, 3, 2, 1, 2])); // Expected [1, [[3, 2, 1]]]
console.log(finalCountdown([4, 4, 5, 4, 3, 2, 1, 8, 3, 2, 1])); // Expected [2, [[5, 4, 3, 2, 1], [3, 2, 1]]]
console.log(finalCountdown([4, 3, 2, 1, 3, 2, 1, 1])); // Expected [3, [[4, 3, 2, 1], [3, 2, 1], [1]]]
console.log(finalCountdown([1, 2, 1, 1])); // Expected [3, [[1], [2, 1], [1]]]
console.log(finalCountdown([1, 2, 3, 4, 3, 2, 1])); // Expected [2, [[1], [4, 3, 2, 1]]]
console.log(finalCountdown([])); // Expected [0, []]
console.log(finalCountdown([2, 1, 2, 1])); // Expected [2, [[2, 1], [2, 1]]]
