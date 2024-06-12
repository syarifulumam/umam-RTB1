function myFunction(a) {
  // cara ke 1
  a = a.split("");
  const arr = [];
  for (i = 0; i < 3; i++) {
    arr.push(a[i]);
  }
  return console.log(arr.join(""));
  // cara ke 2
  // return console.log(a.slice(0, 3));
}

// Test Case
myFunction("abcdefg"); // Expected 'abc'
myFunction("1234"); // Expected '123'
myFunction("fgedcba"); // Expected 'fge'
