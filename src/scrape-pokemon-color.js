const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokemon-color"),
  buildOutFile: (id, color) => `${id}-${color.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokemon-color/${id}`
});
