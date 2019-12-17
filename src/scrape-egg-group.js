const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/egg-group"),
  buildOutFile: (id, group) => `${id}-${group.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/egg-group/${id}`
});
