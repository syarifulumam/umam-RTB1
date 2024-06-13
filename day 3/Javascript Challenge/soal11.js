const reverseWords = (string) => {
  const arr = string.split(" ").reverse();
  const result = [];
  arr.map((i) => {
    i !== "" && result.push(i);
  });
  return result.join(" ");
};

// Example
console.log(reverseWords(" the sky is blue")); // Expected "blue is sky the"
console.log(reverseWords("hello   world!  ")); // Expected "world! hello"
console.log(reverseWords("a good example")); // Expected "example good a"
console.log(reverseWords("hello world!")); // Expected "world! hello")
console.log(reverseWords("blue is sky the")); // Expected "the sky is blue")
console.log(reverseWords("a good example")); // Expected "example good a")
console.log(reverseWords("fraud! of example another is this")); // Expected "this is another example of fraud!")
console.log(reverseWords("man! the are You")); // Expected "You are the man!")
