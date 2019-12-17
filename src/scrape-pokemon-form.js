const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/pokemon-form"),
  buildOutFile: (id, form) => `${id}-${form.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/pokemon-form/${id}`
});
