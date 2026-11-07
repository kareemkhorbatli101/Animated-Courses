/* solve.js — open every block of every built unit, solve every exercise through
   its own click path, and report. An item nobody can answer by operating the
   interface is a broken item however good its data looks.
   With --lab it also walks dev/lab.html, the bench for new exercise kinds. */
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const { solveScene } = require('./solver');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'assets/spec.js'));
require(path.join(ROOT, 'assets/book.js'));
const B = window.BOOK;
const LAB = process.argv.includes('--lab');
const ONLY = (process.argv.find(a => a.startsWith('--unit=')) || '').split('=')[1];

function pageList() {
  const out = [];
  if (LAB)
    for (const f of fs.readdirSync(path.join(ROOT, 'dev')).filter(f => /^lab\d*\.html$/.test(f)).sort())
      out.push({ label: 'dev/' + f.replace(/\.html$/, ''), file: path.join(ROOT, 'dev', f) });
  for (const u of B.UNITS) {
    if (ONLY && u.id !== ONLY) continue;
    const dir = path.join(ROOT, u.id);
    if (!fs.existsSync(dir)) continue;
    for (const b of B.BLOCKS) {
      if (fs.existsSync(path.join(dir, 'data', b.id + '.js')))
        out.push({ label: u.id + '/' + b.id, file: path.join(dir, b.id + '.html') });
    }
  }
  return out;
}

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  let scenes = 0, okCount = 0;
  const failures = [], errors = [], noBranch = new Set();
  const pages = pageList();
  let lastUnit = '';

  /* Which scenes draw a figure that teaches, recorded rather than asserted.
     coverage.js F5c reads this: a diagram derived from scene data cannot be
     tested by looking at a spec field, because no field says "has a
     diagram" — the renderer decides from the data it already has. A second
     copy of each derivation rule in coverage.js would be a copy that drifts.
     This is the measurement instead: what the browser actually rendered. */
  const figures = {};
  /* Every diagram wrapper is <figure class="dg dg-KIND">. Matching the inner
     parts instead would read className off an SVG element, where it is an
     SVGAnimatedString and not a string at all. */
  const FIGSEL = 'figure.dg';
  const sampleFigs = () => Array.from(
    document.querySelectorAll('.stage ' + window.__FIGSEL))
    .map(e => (e.getAttribute('class') || '').split(/\s+/)
      .find(c => c.indexOf('dg-') === 0 && c !== 'dg-cap'))
    .filter(Boolean);

  for (const p of pages) {
    const pg = await browser.newPage({ viewport: { width: 1020, height: 900 } });
    await pg.addInitScript(sel => { window.__FIGSEL = sel; }, FIGSEL);
    pg.on('pageerror', e => errors.push(`${p.label}: ${e.message}`));
    pg.on('console', m => { if (m.type() === 'error') errors.push(`${p.label} console: ${m.text()}`); });
    await pg.goto('file://' + p.file + '?seed=5');
    await pg.waitForTimeout(220);
    const n = await pg.evaluate(() => window.PAGE.scenes.length);

    for (let i = 0; i < n; i++) {
      const meta = await pg.evaluate(() => {
        const idx = [...document.querySelectorAll('.dot')].findIndex(d => d.classList.contains('now'));
        const s = window.PAGE.scenes[idx];
        return { id: s.id, kind: s.kind };
      });
      const figStart = await pg.evaluate(sampleFigs);
      await pg.evaluate(solveScene);
      const probe = await pg.evaluate(() => {
        const r = { pf: window.__pickFail || 0, nb: window.__noBranch || [] };
        window.__pickFail = 0; window.__noBranch = [];
        return r;
      });
      if (probe.pf) failures.push(`${p.label}/${meta.id}: solver could not operate ${probe.pf} control(s)`);
      probe.nb.forEach(k => noBranch.add(k));
      await pg.click('.btn-check'); await pg.waitForTimeout(90);
      const figEnd = await pg.evaluate(sampleFigs);
      const fkey = `${p.label}/${meta.id}`;
      const fset = [...new Set([...figStart, ...figEnd])];
      if (fset.length) figures[fkey] = fset;
      const v = await pg.textContent('.verdict');
      const cls = await pg.getAttribute('.verdict', 'class');
      scenes++;
      if (cls.includes('ok')) okCount++;
      else failures.push(`${p.label}/${meta.id} (${meta.kind}) -> "${v}"`);
      if (i < n - 1) { await pg.click('.step-btn.next'); await pg.waitForTimeout(170); }
    }
    const over = await pg.evaluate(() => document.documentElement.scrollWidth > window.innerWidth + 1);
    if (over) failures.push(`${p.label}: horizontal overflow`);
    await pg.close();
    const u = p.label.split('/')[0];
    if (u !== lastUnit) { lastUnit = u; process.stdout.write(`  ${u} `); }
    process.stdout.write('.');
  }
  await browser.close();
  /* A partial run would write a manifest that says the unvisited scenes have
     no figure, and coverage.js would believe it. Only a full sweep writes. */
  if (!ONLY) fs.writeFileSync(path.join(__dirname, '.figures.json'),
    JSON.stringify({ scenes, figures }, null, 1));
  console.log(`\n\n${okCount}/${scenes} scenes solved through their own click path`);
  if (noBranch.size) { console.log('\nNO SOLVER BRANCH (unverifiable kinds)'); [...noBranch].forEach(k => console.log('  ✗ ' + k)); }
  if (failures.length) { console.log('\nUNSOLVED'); failures.forEach(f => console.log('  ✗ ' + f)); }
  if (errors.length) { console.log('\nJS ERRORS'); [...new Set(errors)].forEach(e => console.log('  ✗ ' + e)); }
  if (failures.length || errors.length || noBranch.size) process.exit(1);
})();
