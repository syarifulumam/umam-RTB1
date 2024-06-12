function myFunction(arr) {
  return console.log(arr.every((v) => v === arr[0]));
}

// Test Case
myFunction([true, true, true, true]); // Expected true
myFunction(["test", "test", "test"]); // Expected true
myFunction([1, 1, 1, 2]); // Expected false
myFunction(["10", 10, 10, 10]); // Expected false
