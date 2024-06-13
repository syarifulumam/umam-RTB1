const removeDups = (arr) => {
  const seen = new Set();
  return arr.filter((item) => {
    if (seen.has(item)) {
      return false;
    } else {
      seen.add(item);
      return true;
    }
  });
};

// Example
console.log(removeDups([1, 0, 1, 0])); // Expected [1, 0]
console.log(removeDups(["The", "big", "cat"])); // Expected ["The", "big", "cat"]
console.log(removeDups(["John", "Taylor", "John"])); // Expected ["John", "Taylor"]
console.log(removeDups(["John", "Taylor", "John", "john"])); // Expected ['John', 'Taylor', 'john']
console.log(
  removeDups([
    "javascript",
    "python",
    "python",
    "ruby",
    "javascript",
    "c",
    "ruby",
  ])
); // Expected ['javascript', 'python', 'ruby', 'c']
console.log(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5])); // Expected [1, 2, 3, 5, 6, 7]
console.log(removeDups(["#", "#", "%", "&", "#", "$", "&"])); // Expected ['#', '%', '&', '$']
console.log(removeDups([3, "Apple", 3, "Orange", "Apple"])); // Expected [3, 'Apple', 'Orange']
