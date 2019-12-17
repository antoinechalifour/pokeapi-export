const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/ability"),
  buildOutFile: (id, ability) => `${id}-${ability.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/ability/${id}`
});
