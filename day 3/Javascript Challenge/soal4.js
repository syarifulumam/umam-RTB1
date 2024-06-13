function leftSlide(arr) {
  let compressed = arr.filter((num) => num !== 0);

  let merged = [];
  let skip = false;
  for (let i = 0; i < compressed.length; i++) {
    if (skip) {
      skip = false;
      continue;
    }
    if (i + 1 < compressed.length && compressed[i] === compressed[i + 1]) {
      merged.push(compressed[i] * 2);
      skip = true;
    } else {
      merged.push(compressed[i]);
    }
  }

  while (merged.length < arr.length) {
    merged.push(0);
  }

  return merged;
}

// Example
console.log(leftSlide([2, 2, 2, 0])); // expected [4, 2, 0, 0] Merge left-most tiles first.
console.log(leftSlide([2, 2, 4, 4, 8, 8])); // expected [4, 8, 16, 0, 0, 0] Only merge once.
console.log(leftSlide([0, 2, 0, 2, 4])); // expected [4, 4, 0, 0, 0]
console.log(leftSlide([0, 2, 2, 8, 8, 8])); // expected [4, 16, 8, 0, 0, 0]
console.log(leftSlide([2, 2, 2, 0])); // expected [4, 2, 0, 0]
console.log(leftSlide([2, 2, 4, 4, 8, 8])); // expected [4, 8, 16, 0, 0, 0]
console.log(leftSlide([0, 2, 0, 2, 4])); // expected [4, 4, 0, 0, 0]
console.log(leftSlide([0, 2, 2, 8, 8, 8])); // expected [4, 16, 8, 0, 0, 0]
console.log(leftSlide([0, 0, 0, 0])); // expected [0, 0, 0, 0]
console.log(leftSlide([0, 0, 0, 2])); // expected [2, 0, 0, 0]
console.log(leftSlide([2, 0, 0, 0])); // expected [2, 0, 0, 0]
console.log(leftSlide([8, 2, 2, 4])); // expected [8, 4, 4, 0]
console.log(
  leftSlide([1024, 1024, 1024, 512, 512, 256, 256, 128, 128, 64, 32, 32])
); // expected [2048, 1024, 1024, 512, 256, 64, 64, 0, 0, 0, 0, 0]
