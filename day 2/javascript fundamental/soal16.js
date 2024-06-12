function myFunction(a) {
  // cara ke 1
  return console.log(Number.isInteger(a));
  // cara ke 2
  // a = a.toString().includes('.')
  // return console.log(!a);
}

// Test Case
myFunction(4); // Expected true
myFunction(1.123); // Expected false
myFunction(1048); // Expected true
myFunction(10.48); // Expected false
