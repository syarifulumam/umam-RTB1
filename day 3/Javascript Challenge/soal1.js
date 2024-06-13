const operation = (a, b, operation) => {
  a = Number(a);
  b = Number(b);
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      return a / b === Infinity ? "undefined" : a / b;
    case "multiply":
      return a * b;
    default:
      return "undefined";
  }
};

// Example
console.log(operation("1", "2", "add")); // expected 3
console.log(operation("4", "5", "subtract")); // expected -1
console.log(operation("6", "3", "divide")); // expected 2
console.log(operation("2", "7", "multiply")); // expected 14
console.log(operation("6", "0", "divide")); // expected ‘undefined’
