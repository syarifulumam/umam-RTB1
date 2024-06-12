function myFunction(a, b) {
  // cara ke 1
  const arr = [];
  a.map((i) => {
    i !== b && arr.push(i);
  });
  return console.log(arr);
  // cara ke 2
  // return console.log(a.filter((i) => i !== b));
}

// Test Case
myFunction([1, 2, 3], 2); // Expected [1, 3]
myFunction([1, 2, "2"], "2"); // Expected [1, 2]
myFunction([false, "2", 1], false); // Expected ['2', 1]
myFunction([1, 2, "2", 1], 1); // Expected [2, '2']
