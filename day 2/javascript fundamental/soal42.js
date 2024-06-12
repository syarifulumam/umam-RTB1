function myFunction(a) {
  return console.log({ key: a });
}

// Test Case
myFunction("a"); // Expected {key:'a'}
myFunction("z"); // Expected {key:'z'}
myFunction("b"); // Expected {key:'b'}
