const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-target"),
  buildOutFile: (id, target) => `${id}-${target.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-target/${id}`
});
