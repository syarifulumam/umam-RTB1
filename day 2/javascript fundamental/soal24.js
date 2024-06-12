function myFunction(a, n) {
  // cara ke 1
  const arr = [];
  for (i = n > a.length ? 0 : a.length - n; i < a.length; i++) {
    arr.push(a[i]);
  }
  return console.log(arr);
  // cara ke 2
  // return console.log(a.slice(-n));
}

// Test Case
myFunction([1, 2, 3, 4, 5], 2); // Expected [ 4, 5 ]
myFunction([1, 2, 3], 6); // Expected [ 1, 2, 3 ]
myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3); // Expected [ 6, 7, 8 ]
