const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/berry-firmness"),
  buildOutFile: (id, firmness) => `${id}-${firmness.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/berry-firmness/${id}`
});
