const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/evolution-chain"),
  buildOutFile: id => `${id}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/evolution-chain/${id}`
});
