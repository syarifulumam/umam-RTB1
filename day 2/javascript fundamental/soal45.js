function myFunction(a) {
  return console.log(Object.keys(a));
}

// Test Case
myFunction({ a: 1, b: 2, c: 3 }); // Expected ['a','b','c']
myFunction({ j: 9, i: 2, x: 3, z: 4 }); // Expected ['j','i','x','z']
myFunction({ w: 15, x: 22, y: 13 }); // Expected ['w','x','y']
