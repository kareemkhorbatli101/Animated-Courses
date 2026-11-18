/* Pass J — render every screen in a real browser and assert it came up.
   Catches anything the static checker cannot: a card type whose data shape the
   engine rejects, a visual that throws, a page that loads the wrong data. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');

(async () => {
  const BOOK = process.argv[2] || 'journalists-intl/b1';
  const UNIT = process.argv[3] || 'unit1';
  const idx = JSON.parse(fs.readFileSync(
    path.join(BOOK, 'assets/data', UNIT, 'index.json'), 'utf8'));
  const browser = await chromium.launch();
  const page = await browser.newPage();
  let bad = 0;
  const rows = [];
  for (const r of idx) {
    const errs = [];
    page.removeAllListeners('console');
    page.removeAllListeners('pageerror');
    page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text()); });
    page.on('pageerror', e => errs.push('pageerror: ' + e.message));
    const file = 'file://' + path.resolve(BOOK, UNIT, r.sid + '.html');
    await page.goto(file, { waitUntil: 'load' });
    await page.waitForTimeout(260);
    const got = await page.evaluate(() => ({
      cards: document.querySelectorAll('.card').length,
      svgs: document.querySelectorAll('svg').length,
      title: (document.querySelector('h1,h2,.scr-title,.card-title') || {}).textContent || '',
      body: document.body.innerText.length,
      /* the engine's own art placeholder, not the English word "missing" */
      missing: (window.JRN && JRN.art && JRN.art.missingArt || []).slice(),
      noDrawing: /no drawing for/.test(document.body.innerHTML)
    }));
    const probs = [...errs];
    if (got.cards < r.n) probs.push(`${got.cards} .card elements rendered, index says ${r.n}`);
    if (got.body < 200) probs.push(`page text is only ${got.body} chars`);
    if (got.svgs === 0) probs.push('no svg rendered (the visual is missing)');
    if (got.missing.length) probs.push('unregistered art: ' + got.missing.slice(0, 3).join(' / '));
    if (got.noDrawing) probs.push('a "no drawing for" placeholder rendered');
    rows.push({ sid: r.sid, cards: got.cards, want: r.n, svgs: got.svgs, probs });
    if (probs.length) bad++;
  }
  await browser.close();
  console.log(`\n== Pass J: render, ${BOOK} ${UNIT} ==`);
  rows.forEach(x => {
    const flag = x.probs.length ? 'FAIL' : ' ok ';
    console.log(`[${flag}] ${x.sid.padEnd(22)} cards ${String(x.cards).padStart(2)}/${x.want}  svg ${String(x.svgs).padStart(2)}`
      + (x.probs.length ? '\n         ' + x.probs.join('\n         ') : ''));
  });
  console.log(bad ? `\n${bad} screen(s) FAILED to render cleanly` : '\nALL 20 SCREENS RENDER CLEANLY');
  process.exit(bad ? 1 : 0);
})();
