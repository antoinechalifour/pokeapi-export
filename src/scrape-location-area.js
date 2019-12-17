const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/location-area"),
  buildOutFile: (id, area) => `${id}-${area.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/location-area/${id}`
});
