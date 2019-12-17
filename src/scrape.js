const path = require("path");
const { ensureDirSync, writeJSON } = require("fs-extra");
const axios = require("axios");

module.exports.scrape = async function scrap({
  outdir,
  from = 1,
  buildUrl,
  buildOutFile
}) {
  ensureDirSync(outdir);
  let isDone = false;
  let id = from;

  do {
    try {
      console.log(`Fetching entity #${id}...`);
      const { data } = await axios.get(buildUrl(id));
      const outFile = path.join(outdir, buildOutFile(id, data));

      await writeJSON(outFile, data, { spaces: 2 });
      id += 1;
    } catch (err) {
      console.error(err);
      isDone = true;
    }
  } while (!isDone);
};
