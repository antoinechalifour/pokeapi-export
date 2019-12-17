const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-battle-style"),
  buildOutFile: (id, style) => `${id}-${style.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-battle-style/${id}`
});
