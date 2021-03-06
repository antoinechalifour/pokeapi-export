const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/contest-type"),
  buildOutFile: (id, type) => `${id}-${type.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/contest-type/${id}`
});
