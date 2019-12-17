const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/item"),
  buildOutFile: (id, item) => `${id}-${item.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/item/${id}`
});
