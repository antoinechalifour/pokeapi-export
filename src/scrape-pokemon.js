const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokemon"),
  buildOutFile: (id, pokemon) => `${id}-${pokemon.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokemon/${id}`
});
