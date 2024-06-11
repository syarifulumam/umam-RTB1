const data = require("./response.json");

data.hero.map((hero) => {
  console.log(hero.hero_name);
});
