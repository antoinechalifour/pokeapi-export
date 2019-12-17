const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/location"),
  buildOutFile: (id, location) => `${id}-${location.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/location/${id}`
});
