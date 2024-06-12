function myFunction(a, b) {
  return console.log(
    Object.fromEntries(
      Object.entries(a).map(([key, value]) => [key, value * b])
    )
  );
}

// Test Case
myFunction({ a: 1, b: 2, c: 3 }, 3); // Expected {a:3,b:6,c:9}
myFunction({ j: 9, i: 2, x: 3, z: 4 }, 10); // Expected {j:90,i:20,x:30,z:40}
myFunction({ w: 15, x: 22, y: 13 }, 6); // Expected {w:90,x:132,y:78}
