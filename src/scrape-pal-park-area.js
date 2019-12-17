const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pal-park-area"),
  buildOutFile: (id, area) => `${id}-${area.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pal-park-area/${id}`
});
