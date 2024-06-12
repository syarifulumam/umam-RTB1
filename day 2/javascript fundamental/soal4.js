function myFunction(a, n) {
  // cara ke 1
  return console.log(a.charAt(n - 1));
  // cara ke 2
  // return console.log(a[n-1]);
  // cara ke 3
  // return console.log(a.split('')[n-1]);
}

// Test Case
myFunction("abcd", 1); // Expected 'a'
myFunction("zyxbwpl", 5); // Expected 'w'
myFunction("gfedcba", 3); // Expected 'e'
