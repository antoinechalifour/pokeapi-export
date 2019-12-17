const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-category"),
  buildOutFile: (id, category) => `${id}-${category.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-category/${id}`
});
