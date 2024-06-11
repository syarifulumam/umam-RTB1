const data = require("./response.json");

const name = data.hero.map((hero) => {
  return hero.hero_name;
});

console.log(name.sort().join("\n"));
