// SVG -> PNG at 2x, via the pre-installed Chromium. Usage: node mkfig.js <name> <w> <h>
const { chromium } = require('playwright');
const path = require('path'), fs = require('fs');
(async () => {
  const [name, w, h] = process.argv.slice(2);
  const svg = path.resolve(__dirname, '../figures', name + '.svg');
  const png = path.resolve(__dirname, '../figures', name + '.png');
  if (!fs.existsSync(svg)) { console.error('missing ' + svg); process.exit(1); }
  const b = await chromium.launch();
  const pg = await b.newPage({ viewport: { width: +w, height: +h }, deviceScaleFactor: 2 });
  await pg.goto('file://' + svg);
  await pg.screenshot({ path: png });
  await b.close();
  console.log('  ' + name + '.png');
})();
