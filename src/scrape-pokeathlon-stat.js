const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokeathlon-stat"),
  buildOutFile: (id, stat) => `${id}-${stat.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokeathlon-stat/${id}`
});
