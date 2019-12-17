const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/encounter-method"),
  buildOutFile: (id, encounter) => `${id}-${encounter.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/encounter-method/${id}`
});
