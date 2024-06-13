const inBox = (arr) => {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i].indexOf("*") > 0 && arr[i].indexOf("*") < arr[i].length - 1) {
      return true;
    }
  }
  return false;
};

console.log(inBox(["###", "#*#", "###"])); // Expected true

console.log(inBox(["####", "#* #", "#  #", "####"])); // Expected true

console.log(inBox(["*####", "# #", "#  #*", "####"])); // Expected false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // Expected false

console.log(inBox(["###", "# #", "###"])); // Expected false

console.log(inBox(["####", "#  #", "#  #", "####"])); // Expected false

console.log(inBox(["#####", "#   #", "#   #", "#   #", "#####"])); // Expected false

console.log(inBox(["###", "#*#", "###"])); // Expected true

console.log(inBox(["####", "# *#", "#  #", "####"])); // Expected true

console.log(inBox(["#####", "#  *#", "#   #", "#   #", "#####"])); // Expected true

console.log(inBox(["#####", "#   #", "# * #", "#   #", "#####"])); // Expected true

console.log(inBox(["#####", "#   #", "#   #", "# * #", "#####"])); // Expected true

console.log(inBox(["#####", "#*  #", "#   #", "#   #", "#####"])); // Expected true
