
const { chromium } = require('playwright');
const fs = require('fs');
const dir = process.argv[2], scale = Number(process.argv[3]||2);
(async () => {
  const man = JSON.parse(fs.readFileSync(dir+'/_manifest.json','utf8'));
  const b = await chromium.launch();
  const ctx = await b.newContext({ deviceScaleFactor: scale });
  const p = await ctx.newPage();
  let n=0;
  for (const it of man) {
    await p.setViewportSize({ width: it.w, height: it.h });
    await p.goto('file://'+it.path, { waitUntil:'load' });
    await p.evaluate(() => document.fonts ? document.fonts.ready : null);
    await p.waitForTimeout(90);
    await p.locator('#c').screenshot({ path: dir+'/'+it.name+'.png' });
    n++;
  }
  console.log('rendered '+n);
  await b.close();
})();
