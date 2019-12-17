const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/gender"),
  buildOutFile: (id, gender) => `${id}-${gender.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/gender/${id}`
});
