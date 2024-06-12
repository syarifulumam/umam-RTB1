function myFunction(...arrays) {
  return console.log(arrays.flat());
}

// Test Case
myFunction([1, 2, 3], [4, 5, 6]); // Expected [1, 2, 3, 4, 5, 6]
myFunction(["a", "b", "c"], [4, 5, 6]); // Expected ['a', 'b', 'c', 4, 5, 6]
myFunction([true, true], [1, 2], ["a", "b"]); // Expected [true, true, 1, 2, 'a', 'b']
