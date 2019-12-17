const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokemon-species"),
  buildOutFile: (id, species) => `${id}-${species.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokemon-species/${id}`
});
