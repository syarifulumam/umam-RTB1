const awardPrizes = (object) => {
  const entries = Object.entries(object);
  entries.sort((a, b) => b[1] - a[1]);
  const result = {};
  result[entries[0][0]] = "Gold";
  result[entries[1][0]] = "Silver";
  result[entries[2][0]] = "Bronze";

  for (let i = 3; i < entries.length; i++) {
    result[entries[i][0]] = "Participation";
  }

  return result;
};

// Example
console.log(
  awardPrizes({
    Joshua: 45,
    Alex: 39,
    Eric: 43,
  })
);
/* Expected {
    "Joshua" : "Gold",
    "Alex" : "Bronze",
    "Eric" : "Silver"
  } */

console.log(
  awardPrizes({
    "Person A": 1,
    "Person B": 2,
    "Person C": 3,
    "Person D": 4,
    "Person E": 102,
  })
);
/* Expected {
    "Person A" : "Participation",
    "Person B" : "Participation",
    "Person C" : "Bronze",
    "Person D" : "Silver",
    "Person E" : "Gold"
  } */

console.log(
  awardPrizes({
    Mario: 99,
    Luigi: 100,
    Yoshi: 299,
    Toad: 2,
  })
);
/* Expected {
    "Mario" : "Bronze",
    "Luigi" : "Silver",
    "Yoshi" : "Gold",
    "Toad" : "Participation"
  } */

console.log(
  awardPrizes({
    Joshua: 45,
    Alex: 39,
    Eric: 43,
  })
);
/* Expected {
      'Joshua' : 'Gold',
      'Alex' : 'Bronze',
      'Eric' : 'Silver'
  } */

console.log(
  awardPrizes({
    "Person A": 1,
    "Person B": 2,
    "Person C": 3,
    "Person D": 4,
    "Person E": 102,
  })
);
/* Expected {
      'Person A' : 'Participation',
      'Person B' : 'Participation',
      'Person C' : 'Bronze',
      'Person D' : 'Silver',
      'Person E' : 'Gold'
  } */

console.log(
  awardPrizes({
    Mario: 99,
    Luigi: 100,
    Yoshi: 299,
    Toad: 2,
  })
);
/* Expected {
      'Mario' : 'Bronze',
      'Luigi' : 'Silver',
      'Yoshi' : 'Gold',
      'Toad' : 'Participation'
  } */
