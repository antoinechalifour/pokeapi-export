const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/nature"),
  buildOutFile: (id, nature) => `${id}-${nature.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/nature/${id}`
});
