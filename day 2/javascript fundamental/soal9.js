function myFunction(a) {
  // cara ke 1
  a = a.split("");
  const arr = [];
  for (i = 0; i < a.length / 2; i++) {
    arr.push(a[i]);
  }
  return console.log(arr.join(""));
  // cara ke 2
  // return console.log(a.slice(0, a.length / 2));
}

// Test Case
myFunction("abcdefgh"); // Expected 'abcd'
myFunction("1234"); // Expected '12'
myFunction("gedcba"); // Expected 'ged'
