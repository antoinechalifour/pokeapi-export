const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-damage-class"),
  buildOutFile: (id, classs) => `${id}-${classs.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-damage-class/${id}`
});
