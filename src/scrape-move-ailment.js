const path = require("path");
const { scrape } = require("./scrape");

scrape({
  from: 1,
  outdir: path.join(__dirname, "../data/move-ailment"),
  buildOutFile: (id, ailment) => `${id}-${ailment.name}.json`,
  buildUrl: id => `https://pokeapi.co/api/v2/move-ailment/${id}`
});
