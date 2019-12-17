const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/region"),
  buildOutFile: (id, region) => `${id}-${region.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/region/${id}`
});
