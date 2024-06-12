function myFunction(a, b) {
  // cara ke 1
  a = a.split("");
  const arr = [];
  for (i = 0; i < a.length - 3; i++) {
    arr.push(a[i]);
  }
  return console.log(arr.join(""));
  // cara ke 2
  // return console.log(a.slice(0, -3));
}

// Test Case
myFunction("abcdefg"); // Expected 'abcd'
myFunction("1234"); // Expected '1'
myFunction("fgedcba"); // Expected 'fged'
