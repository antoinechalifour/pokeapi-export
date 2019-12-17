const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/evolution-trigger"),
  buildOutFile: (id, trigger) => `${id}-${trigger.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/evolution-trigger/${id}`
});
