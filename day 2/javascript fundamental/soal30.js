function myFunction(arr) {
  // cara ke 1
  let result = 0;
  arr.map((i) => (result += i));
  return console.log(result);
  // cara ke 2
  // return console.log(arr.reduce((a, b) => a + b, 0));
}

// Test Case
myFunction([10, 100, 40]); // Expected 150
myFunction([10, 100, 1000, 1]); // Expected 1111
myFunction([-50, 0, 50, 200]); // Expected 200
