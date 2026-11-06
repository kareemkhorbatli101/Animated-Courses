/* a11y.js — keyboard and screen-reader checks on every scene (F38).

   The solver proves an exercise can be answered with a mouse. This proves
   it can be answered without one, and that everything a sighted learner
   sees has something for a screen reader to say.

   It writes tools/.a11y.json listing the scenes that passed, which
   tools/coverage.js reads: F38 is the one fix that cannot be satisfied by
   an engine flag, because it is a property of the rendered page.

   Usage: node tools/a11y.js              whole book
          node tools/a11y.js --unit=u01   one unit
          node tools/a11y.js --lab        the benches too */
'use strict';
const { chromium } = require('playwright');
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const argv = process.argv.slice(2);
const only = (argv.find(a => a.startsWith('--unit=')) || '').split('=')[1];
const LAB = argv.includes('--lab');

const pages = [];
if (LAB) for (const f of fs.readdirSync(path.join(ROOT, 'dev')).filter(f => /^lab\d*\.html$/.test(f)).sort())
  pages.push({ label: 'dev/' + f.replace(/\.html$/, ''), file: path.join(ROOT, 'dev', f) });
for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  if (only && u !== only) continue;
  for (const f of fs.readdirSync(path.join(ROOT, u)).filter(f => /^(l\d|oc|tw)\.html$/.test(f)).sort())
    pages.push({ label: u + '/' + f.replace(/\.html$/, ''), file: path.join(ROOT, u, f) });
}

/* Runs inside the page. Returns the problems with the scene on screen. */
function audit() {
  const out = [];
  const stage = document.querySelector('.stage') || document.body;

  /* 1. everything you can operate must have something to announce */
  const FOCUSABLE = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  [...stage.querySelectorAll(FOCUSABLE)].forEach(el => {
    if (el.disabled) return;
    if (el.closest('[aria-hidden="true"]')) return;
    const name = (el.getAttribute('aria-label') || el.getAttribute('title') ||
                  el.textContent || el.value || el.getAttribute('placeholder') || '').trim();
    if (!name) out.push(`unnamed ${el.tagName.toLowerCase()}.${el.className || '-'}`);
  });

  /* 2. a positive tabindex reorders the page for keyboard users only, which
        is how a page becomes navigable in an order nobody can see */
  [...document.querySelectorAll('[tabindex]')].forEach(el => {
    const t = Number(el.getAttribute('tabindex'));
    if (t > 0) out.push(`positive tabindex=${t} on .${el.className || el.tagName}`);
  });

  /* 3. anything you can operate must be reachable by keyboard: a div with a
        click handler and no tabindex is invisible to a keyboard */
  /* `.ln` is a line of a passage: plain text, and interactive only in the
     citation exercise, where it already carries role=button and a tabindex.
     Demanding a tabindex on every line of every reading would make a
     passage 9 tab stops long for no gain. */
  [...stage.querySelectorAll('[role="button"], .zone, .tok, .tile, .chip, .opt')]
    .forEach(el => {
      if (el.matches(FOCUSABLE)) return;
      if (el.closest('[aria-hidden="true"]')) return;
      if (el.tagName === 'BUTTON' || el.tagName === 'A') return;
      out.push(`not keyboard reachable: ${el.tagName.toLowerCase()}.${el.className || '-'}`);
    });

  /* 4. graphics carry meaning here; a bare <svg> says nothing */
  [...stage.querySelectorAll('svg')].forEach(el => {
    if (el.getAttribute('aria-hidden') === 'true') return;
    if (el.getAttribute('role') === 'img' &&
        (el.getAttribute('aria-label') || el.querySelector('title'))) return;
    if (el.closest('[aria-hidden="true"]') || el.closest('button, [aria-label]')) return;
    out.push(`svg with no label and no aria-hidden (.${el.parentNode.className || '-'})`);
  });

  /* 5. the verdict must be announced, not only coloured */
  const live = document.querySelector('[aria-live]');
  if (!live) out.push('no aria-live region on the page');

  return out;
}

(async () => {
  const browser = await chromium.launch({ args: ['--no-sandbox'] });
  const problems = [];
  const passed = [];
  let scenes = 0;

  for (const motion of ['no-preference', 'reduce']) {
    for (const p of pages) {
      const pg = await browser.newPage({ viewport: { width: 1100, height: 1000 } });
      await pg.emulateMedia({ reducedMotion: motion });
      const errs = [];
      pg.on('pageerror', e => errs.push(e.message));
      await pg.goto('file://' + p.file);
      await pg.waitForTimeout(160);
      const n = await pg.evaluate(() => document.querySelectorAll('.dot').length);
      for (let i = 0; i < n; i++) {
        await pg.evaluate(i => document.querySelectorAll('.dot')[i].click(), i);
        await pg.waitForTimeout(70);
        const meta = await pg.evaluate(() => {
          const d = [...document.querySelectorAll('.dot')];
          let x = d.findIndex(e => e.classList.contains('now'));
          if (x < 0) x = 0;
          return { id: (window.PAGE.scenes[x] || {}).id, kind: (window.PAGE.scenes[x] || {}).kind };
        });
        const found = await pg.evaluate(audit);
        const where = `${p.label}/${meta.id}`;
        if (motion === 'no-preference') scenes++;
        if (found.length) found.forEach(f => problems.push(`${where} (${meta.kind}) [${motion}]: ${f}`));
        else if (motion === 'reduce' && !problems.some(x => x.startsWith(where + ' '))) passed.push(where);
      }
      if (errs.length) errs.slice(0, 2).forEach(e => problems.push(`${p.label} [${motion}] page error: ${e}`));
      await pg.close();
    }
    process.stdout.write(`  ${motion} done\n`);
  }
  await browser.close();

  /* dedupe: a problem that appears in both motion modes is one problem */
  const seen = new Set(), uniq = [];
  for (const x of problems) {
    const k = x.replace(/ \[(no-preference|reduce)\]/, '');
    if (seen.has(k)) continue;
    seen.add(k); uniq.push(x);
  }

  fs.writeFileSync(path.join(__dirname, '.a11y.json'),
    JSON.stringify({ at: new Date().toISOString(), scenes, passed: [...new Set(passed)] }, null, 1));

  console.log(`\n${scenes} scenes audited in both motion modes, ${new Set(passed).size} clean`);
  if (uniq.length) {
    console.log(`\n${uniq.length} problems:\n`);
    const byKind = {};
    uniq.forEach(x => {
      const k = x.replace(/^.*?: /, '').replace(/\.[-\w]*$/, '');
      byKind[k] = (byKind[k] || 0) + 1;
    });
    Object.entries(byKind).sort((a, b) => b[1] - a[1])
      .forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  ${k}`));
    console.log('\nfirst 12:');
    uniq.slice(0, 12).forEach(x => console.log('  ' + x));
    process.exitCode = 1;
  } else console.log('no keyboard or screen-reader problems found');
})();
