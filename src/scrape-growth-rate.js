const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/growth-rate"),
  buildOutFile: (id, rate) => `${id}-${rate.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/growth-rate/${id}`
});
