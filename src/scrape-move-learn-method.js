const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-learn-method"),
  buildOutFile: (id, method) => `${id}-${method.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-learn-method/${id}`
});
