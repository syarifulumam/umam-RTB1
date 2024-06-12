function myFunction(x, y) {
  x = Object.entries(x);
  y = Object.entries(y);

  const xObject = Object.fromEntries(x);

  y.forEach(([key, value]) => {
    if (xObject.hasOwnProperty(key)) {
      x.push(["d", value]);
    } else {
      x.push([key, value]);
    }
  });
  const result = Object.fromEntries(x);

  return result;
}

// Test Cases
console.log(myFunction({ a: 1, b: 2 }, { c: 3, b: 4, e: 5 })); // Expected { a: 1, b: 2, c: 3, e: 5 }
console.log(myFunction({ a: 5, b: 4 }, { c: 3, b: 1, e: 2 })); // Expected { a: 5, b: 4, c: 3, e: 2 }
