function myFunction(arr) {
  return console.log(arr.sort((a, b) => a.b - b.b));
}

// Test Case
myFunction([
  { a: 1, b: 2 },
  { a: 5, b: 4 },
]); // Expected [{a:1,b:2},{a:5,b:4}]
myFunction([
  { a: 2, b: 10 },
  { a: 5, b: 4 },
]); // Expected [{a:5,b:4},{a:2,b:10}]
myFunction([
  { a: 1, b: 7 },
  { a: 2, b: 1 },
]); // Expected [{a:2,b:1},{a:1,b:7}]
