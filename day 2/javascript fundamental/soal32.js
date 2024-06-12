function myFunction(arr) {
  return console.log(arr.reduce((a, b) => (a.length > b.length ? a : b)));
}

// Test Case
myFunction(["help", "me"]); // Expected 'help'
myFunction(["I", "need", "candy"]); // Expected 'candy'
