const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/characteristic"),
  buildOutFile: id => `${id}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/characteristic/${id}`
});
