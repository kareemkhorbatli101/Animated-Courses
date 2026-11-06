/* shots.js — photograph every scene of a page in both themes and at phone
   width. The solver proves an exercise can be answered; only a picture proves
   it can be read. Usage: node tools/shots.js <page.html> <outdir> [--mobile] */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const file = path.resolve(process.argv[2]);
const out = path.resolve(process.argv[3] || '/tmp/shots');
const mobile = process.argv.includes('--mobile');
fs.mkdirSync(out, { recursive: true });

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const vp = mobile ? { width: 390, height: 844 } : { width: 1100, height: 1000 };
  const problems = [];
  for (const theme of ['light', 'dark']) {
    const pg = await browser.newPage({ viewport: vp, deviceScaleFactor: 2 });
    pg.on('pageerror', e => problems.push(`${theme}: ${e.message}`));
    await pg.goto('file://' + file + '?seed=5');
    await pg.waitForTimeout(250);
    if (theme === 'dark') {
      await pg.evaluate(() => document.documentElement.setAttribute('data-theme', 'dark'));
      await pg.waitForTimeout(120);
    }
    const n = await pg.evaluate(() => window.PAGE.scenes.length);
    for (let i = 0; i < n; i++) {
      const id = await pg.evaluate(() => {
        const idx = [...document.querySelectorAll('.dot')].findIndex(d => d.classList.contains('now'));
        return window.PAGE.scenes[idx].id;
      });
      const over = await pg.evaluate(() => {
        const r = [];
        if (document.documentElement.scrollWidth > window.innerWidth + 1) r.push('page overflows horizontally');
        document.querySelectorAll('#stage *').forEach(el => {
          if (el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflowX === 'visible'
              && el.clientWidth > 0) r.push('clipped: ' + (el.className || el.tagName));
        });
        return [...new Set(r)];
      });
      over.forEach(o => problems.push(`${theme}/${id}: ${o}`));
      await pg.screenshot({ path: path.join(out, `${String(i).padStart(2,'0')}-${id}-${theme}${mobile?'-m':''}.png`), fullPage: true });
      if (i < n - 1) { await pg.click('.step-btn.next'); await pg.waitForTimeout(170); }
    }
    await pg.close();
  }
  await browser.close();
  console.log(`shots written to ${out}`);
  if (problems.length) { console.log('\nLAYOUT PROBLEMS'); [...new Set(problems)].forEach(p => console.log('  ✗ ' + p)); process.exit(1); }
  else console.log('no layout problems detected');
})();
