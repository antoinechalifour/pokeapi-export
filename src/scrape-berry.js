const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/berry"),
  buildOutFile: (id, berry) => `${id}-${berry.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/berry/${id}`
});
