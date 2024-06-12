function myFunction(a) {
  // cara ke 1
  a = a.split("");
  const arr = [];
  for (i = a.length - 3; i < a.length; i++) {
    arr.push(a[i]);
  }
  return console.log(arr.join(""));
  // cara ke 2
  // return console.log(a.slice(-3));
}

// Test Case
myFunction("abcdefg"); // Expected 'efg'
myFunction("1234"); // Expected '234'
myFunction("fgedcba"); // Expected 'cba'
