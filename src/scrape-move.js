const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move"),
  buildOutFile: (id, move) => `${id}-${move.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move/${id}`
});
