const number_pairs = (string) => {
  const arr = string.split(" ").map(Number);
  arr.shift();

  const count = {};

  arr.forEach((num) => {
    count[num] = count[num] ? count[num] + 1 : 1;
  });

  let total = 0;

  for (const key in count) {
    total += Math.floor(count[key] / 2);
  }

  return total;
};
// Example
console.log(number_pairs("7 1 2 1 2 1 3 2")); // Expected 2 -> (1, 1), (2, 2)
console.log(number_pairs("9 10 20 20 10 10 30 50 10 20")); // Expected 3 -> (10, 10), (20, 20), (10, 10)
console.log(number_pairs("4 2 3 4 1")); // Expected 0 -> Although two 4's are present, the first one is discounted.
