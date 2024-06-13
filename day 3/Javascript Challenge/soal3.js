const balanced = (string) => {
  const arr = string.split("");
  const a = [];
  const b = [];
  if (arr.length % 2 == 0) {
    for (i = 0; i < arr.length / 2; i++) {
      a.push(arr[i]);
    }
    for (i = arr.length / 2; i < arr.length; i++) {
      b.push(arr[i]);
    }
  } else {
    for (i = 0; i < Math.ceil(arr.length / 2 - 1); i++) {
      a.push(arr[i]);
    }
    for (i = Math.ceil(arr.length / 2); i < arr.length; i++) {
      b.push(arr[i]);
    }
  }
  return count(a, b);
};

const count = (a, b) => {
  let sumA = 0;
  let sumB = 0;
  a.map((i) => {
    sumA += i.toLowerCase().charCodeAt(0) - 97 + 1;
  });
  b.map((i) => {
    sumB += i.toLowerCase().charCodeAt(0) - 97 + 1;
  });
  return sumA === sumB;
};

// Example
console.log(balanced("zips")); // expected true, "zips" = "zi|ps" = 26+9|16+19 = 35|35 = true
console.log(balanced("brake")); // expected false, "brake" = "br|ke" = 2+18|11+5 = 20|16 = false
console.log(balanced("at")); // expected false
console.log(balanced("forgetful")); // expected false
console.log(balanced("vegetation")); // expected true
console.log(balanced("disillusioned")); // expected false
console.log(balanced("abstract")); // expected true
console.log(balanced("clever")); // expected false
console.log(balanced("conditionalities")); // expected true
console.log(balanced("seasoning")); // expected true
console.log(balanced("uptight")); // expected false
console.log(balanced("ticket")); // expected false
console.log(balanced("calculate")); // expected false
console.log(balanced("measure")); // expected false
console.log(balanced("join")); // expected false
console.log(balanced("anesthesiologies")); // expected true
console.log(balanced("command")); // expected false
console.log(balanced("graphite")); // expected true
console.log(balanced("quadratically")); // expected true
console.log(balanced("right")); // expected false
console.log(balanced("fossil")); // expected true
console.log(balanced("sparkling")); // expected false
console.log(balanced("dolphin")); // expected true
console.log(balanced("baseball")); // expected true
console.log(balanced("immense")); // expected false
console.log(balanced("pattern")); // expected true
console.log(balanced("hand")); // expected false
console.log(balanced("radar")); // expected true
console.log(balanced("oven")); // expected false
console.log(balanced("immutability")); // expected true
console.log(balanced("kayak")); // expected true
console.log(balanced("bartender")); // expected true
console.log(balanced("weight")); // expected false
console.log(balanced("lightbulbs")); // expected true
console.log(balanced("tail")); // expected true
