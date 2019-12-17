const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/berry-flavor"),
  buildOutFile: (id, flavor) => `${id}-${flavor.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/berry-flavor/${id}`
});
