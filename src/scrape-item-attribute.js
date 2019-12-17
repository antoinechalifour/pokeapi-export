const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/item-attribute"),
  buildOutFile: (id, attribute) => `${id}-${attribute.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/item-attribute/${id}`
});
