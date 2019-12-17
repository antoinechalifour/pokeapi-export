const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokedex"),
  buildOutFile: (id, pokedex) => `${id}-${pokedex.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokedex/${id}`
});
