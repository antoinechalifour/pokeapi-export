const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokemon-shape"),
  buildOutFile: (id, shape) => `${id}-${shape.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokemon-shape/${id}`
});
