const emotify = (string) => {
  const emoticon = {
    smile: ":D",
    grin: ":)",
    sad: ":(",
    mad: ":p",
  };
  return `Make me ${emoticon[string.split(" ").pop()]}`;
};
// Example
console.log(emotify("Make me smile")); // expected "Make me :D"
console.log(emotify("Make me grin")); // expected "Make me :)"
console.log(emotify("Make me sad")); // expected "Make me :("
console.log(emotify("Make me smile")); // expected "Make me :D"
console.log(emotify("Make me grin")); // expected "Make me :)"
console.log(emotify("Make me sad")); // expected "Make me :("
console.log(emotify("Make me mad")); // expected "Make me :P"
