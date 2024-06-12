function myFunction(a, b) {
  // cara ke 1
  return a.includes(b) ? console.log(b + a) : console.log(a + b);

  // cara ke 2
  // return a.search(b) !== -1 ? console.log(b + a) : console.log(a + b);
}

// Test Case
myFunction("cheese", "cake"); // Expected 'cheesecake'
myFunction("lips", "s"); // Expected 'slips'
myFunction("Java", "script"); // Expected 'Javascript'
myFunction(" think, therefore I am", "I"); // Expected 'I think, therefore I am'
