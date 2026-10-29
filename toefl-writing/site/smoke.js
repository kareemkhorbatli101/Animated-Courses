/* Open every page in the package, exercise its buttons, and fail on the
 * first console error, unrendered page, or dead control.
 *
 * Run from the site/ directory:  node smoke.js [--serve]
 * By default it uses file:// URLs, which is how the package is meant to
 * be opened; --serve checks it over http as well.
 */
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const OUT = path.resolve(__dirname, '..', 'site_out');
const base = process.argv.includes('--serve')
  ? 'http://127.0.0.1:8787/'
  : 'file://' + OUT + '/';

function listPages() {
  const items = fs.readdirSync(path.join(OUT, 'items'))
    .filter(f => f.endsWith('.html')).sort();
  return ['index.html'].concat(items.map(f => 'items/' + f));
}

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  const problems = [];
  let current = '';
  page.on('console', m => {
    if (m.type() === 'error') problems.push(`${current}: console: ${m.text()}`);
  });
  page.on('pageerror', e => problems.push(`${current}: pageerror: ${e.message}`));

  const all = listPages();
  let checked = 0, tiers = { bas: 0, q: 0, comp: 0, fault: 0, fam: 0 };

  for (const rel of all) {
    current = rel;
    await page.goto(base + rel, { waitUntil: 'load' });
    await page.waitForFunction(
      () => document.querySelector('#page') &&
            document.querySelector('#page').children.length > 0,
      null, { timeout: 8000 }
    ).catch(() => problems.push(`${rel}: #page never rendered`));

    if (rel === 'index.html') {
      const cards = await page.locator('.card').count();
      if (cards !== 300) problems.push(`index: ${cards} cards, expected 300`);
      await page.fill('input[type=search]', 'subjunctive');
      await page.waitForTimeout(260);
      const narrowed = await page.locator('.card').count();
      if (narrowed === 0 || narrowed >= 300) {
        problems.push(`index: search returned ${narrowed}`);
      }
      checked++;
      continue;
    }

    const kind = await page.evaluate(
      () => [window.ITEM.kind, window.ITEM.task]);

    if (kind[0] === 'family') {
      const links = await page.locator('.sentlist a').count();
      if (links < 8 || links > 10) {
        problems.push(`${rel}: family lists ${links} sentences`);
      }
      const q = page.locator('button:has-text("Check answer")').first();
      await q.click();
      if (!(await page.locator('.box.key').first().isVisible())) {
        problems.push(`${rel}: key did not appear`);
      }
      tiers.fam++; checked++; continue;
    }

    if (kind[1] === 'bas') {
      if (await page.locator('#verdict').isVisible().catch(() => false)) {
        problems.push(`${rel}: verdict visible before checking`);
      }
      if (await page.locator('#note').isVisible().catch(() => false)) {
        problems.push(`${rel}: explanation visible before checking`);
      }
      // place every tile in the order given, then check: must be marked.
      const n = await page.locator('#tiles .tile').count();
      for (let i = 0; i < n; i++) await page.locator('#tiles .tile').nth(i).click();
      await page.locator('button:has-text("Check answer")').click();
      const v = page.locator('#verdict');
      if (!(await v.isVisible())) problems.push(`${rel}: no verdict`);
      const txt = (await v.innerText()).trim();
      if (!/^(Correct\.|Not yet\.)/.test(txt)) {
        problems.push(`${rel}: unexpected verdict ${JSON.stringify(txt)}`);
      }
      // the answer must be reachable
      await page.locator('button:has-text("Retry")').click();
      await page.locator('button:has-text("Show answer")').click();
      if (!(await page.locator('#note').isVisible())) {
        problems.push(`${rel}: explanation never shown`);
      }
      tiers.bas++; checked++; continue;
    }

    // email / discussion
    // nothing may be revealed before the student has checked: a CSS rule
    // that sets `display` will quietly defeat the hidden attribute.
    for (const sel of ['.box.prev .box.key', '.box.prev .selfmark',
                       '.checks', 'section:has(.box.degr) .verdict']) {
      if (await page.locator(sel).first().isVisible().catch(() => false)) {
        problems.push(`${rel}: ${sel} is visible before anything was checked`);
      }
    }
    await page.locator('.box.prev button:has-text("Check answer")').first().click();
    if (!(await page.locator('.box.prev .box.key').first().isVisible())) {
      problems.push(`${rel}: preview key did not appear`);
    }
    await page.locator('.selfmark button:has-text("Got it")').first().click();
    tiers.q++;

    const ta = page.locator('textarea[aria-label="Your response"]');
    await ta.fill('Dear Dr Smith,\n\nOne two three four five.\n\nYours sincerely,\nA');
    await page.locator('button:has-text("Check what can be checked")').click();
    const checks = page.locator('.checks');
    if (!(await checks.isVisible())) problems.push(`${rel}: mechanical checks did not run`);
    const marks = await checks.locator('li').count();
    if (marks < 4) problems.push(`${rel}: only ${marks} mechanical checks`);
    tiers.comp++;

    const faultBtn = page.locator('section:has(.box.degr) button:has-text("Check answer")');
    const boxes = page.locator('section:has(.box.degr) .opt input');
    const nb = await boxes.count();
    if (nb !== 6) problems.push(`${rel}: ${nb} fault options, expected 6`);
    // tick the three correct ones, straight from the page's own data
    const right = await page.evaluate(() =>
      window.ITEM.faultset.options.map((o, i) => o.correct ? i : -1).filter(i => i >= 0));
    for (const i of right) await boxes.nth(i).check();
    await faultBtn.click();
    const fv = page.locator('section:has(.box.degr) .verdict');
    const ftxt = (await fv.innerText()).trim();
    if (!/All three/.test(ftxt)) {
      problems.push(`${rel}: ticking the correct faults gave ${JSON.stringify(ftxt)}`);
    }
    tiers.fault++;
    checked++;
  }

  await browser.close();
  console.log(`smoke: ${checked} pages opened`);
  console.log(`       ${tiers.bas} tile exercises marked, ${tiers.q} keys revealed, ` +
              `${tiers.comp} drafts checked, ${tiers.fault} fault sets marked, ` +
              `${tiers.fam} family pages`);
  if (problems.length) {
    console.error(`\n${problems.length} problem(s):`);
    problems.slice(0, 25).forEach(p => console.error('  ' + p));
    process.exit(1);
  }
  console.log('       no console errors, no dead controls');
})();
