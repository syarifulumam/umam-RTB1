const data = require("./response.json");

const name = data.hero.filter(function (e) {
  return e.hero_specially.split(",").includes("Crowd Control");
});

console.log(name.map((hero) => hero.hero_name).join("\n"));
