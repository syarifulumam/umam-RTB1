function myFunction(a, b) {
  // cara ke 1
  b = b.split("");
  const result = [];
  b.map((i) => {
    i === a && result.push(i);
  });
  return console.log(result.length);
  // cara ke 2
  // return console.log(b.split("").filter((v) => v === a).length);
}

// Test Case
myFunction("m", "how many times does the character occur in this sentence?"); // Expected 2
myFunction("h", "how many times does the character occur in this sentence?"); // Expected 4
myFunction("?", "how many times does the character occur in this sentence?"); // Expected 1
myFunction("z", "how many times does the character occur in this sentence?"); // Expected 0
