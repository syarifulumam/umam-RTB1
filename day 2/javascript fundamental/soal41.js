function myFunction(a, b) {
  const filteredObject = Object.fromEntries(
    Object.entries(a).filter(([key, value]) => value && value !== null)
  );
  return console.log(Object.keys(filteredObject).includes(b));
}

// Test Case
myFunction({ a: 1, b: 2, c: 3 }, "b"); // Expected true
myFunction({ x: "a", y: null, z: "c" }, "y"); // Expected false
myFunction({ x: "a", b: "b", z: undefined }, "z"); // Expected false
