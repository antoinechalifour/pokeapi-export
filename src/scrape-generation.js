const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/generation"),
  buildOutFile: (id, generation) => `${id}-${generation.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/generation/${id}`
});
