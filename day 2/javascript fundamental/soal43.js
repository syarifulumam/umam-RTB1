function myFunction(a, b) {
  return console.log({ [a]: b });
}

// Test Case
myFunction("a", "b"); // Expected {a:'b'}
myFunction("z", "x"); // Expected {z:'x'}
myFunction("b", "w"); // Expected {b:'w'}
