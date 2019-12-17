const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/encounter-condition-value"),
  buildOutFile: (id, value) => `${id}-${value.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/encounter-condition-value/${id}`
});
