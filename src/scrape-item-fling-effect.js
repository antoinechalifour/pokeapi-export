const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/item-fling-effect"),
  buildOutFile: (id, effect) => `${id}-${effect.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/item-fling-effect/${id}`
});
