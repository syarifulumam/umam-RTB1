function myFunction(a) {
  // cara ke 1
  const arr = [];
  for (i = 3; i < a.length; i++) {
    arr.push(a[i]);
  }
  return console.log(arr);
  // cara ke 2
  // return console.log(a.splice(3));
}

// Test Case
myFunction([1, 2, 3, 4]); // Expected [4]
myFunction([5, 4, 3, 2, 1, 0]); // Expected [2,1,0]
myFunction([99, 1, 1]); // Expected []
