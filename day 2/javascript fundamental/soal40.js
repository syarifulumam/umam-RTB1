function myFunction(a, b) {
  return console.log(Object.keys(a).includes(b));
}

// Test Case
myFunction({ a: 1, b: 2, c: 3 }, "b"); // Expected true
myFunction({ x: "a", y: "b", z: "c" }, "a"); // Expected false
myFunction({ x: "a", y: "b", z: undefined }, "z"); // Expected true
