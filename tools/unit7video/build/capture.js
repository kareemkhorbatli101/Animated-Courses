#!/usr/bin/env node
/* Render a timeline to a numbered JPEG sequence with Chromium.

   node capture.js <outdir> [--workers N] [--from A --to B]
   node capture.js <outdir> --shots 3,41.5,120   (PNG stills for review)     */
const { chromium } = require('playwright');
const { fork } = require('child_process');
const fs = require('fs');
const path = require('path');

const LIB = path.resolve(__dirname, '..', 'lib');

function arg(name, dflt) {
  const i = process.argv.indexOf('--' + name);
  return i > 0 ? process.argv[i + 1] : dflt;
}
function has(name) { return process.argv.indexOf('--' + name) > 0; }

async function openPage(timeline) {
  const browser = await chromium.launch({
    args: ['--no-sandbox', '--disable-lcd-text', '--force-color-profile=srgb',
           '--font-render-hinting=none', '--disable-gpu-vsync']
  });
  const page = await browser.newPage({
    viewport: { width: timeline.w, height: timeline.h },
    deviceScaleFactor: 1
  });
  page.on('pageerror', e => console.error('  [page error]', e.message));
  await page.goto('file://' + path.join(LIB, 'scene.html'));
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(tl => window.__init(tl), timeline);
  await page.evaluate(() => document.fonts.ready);
  return { browser, page };
}

async function runRange(outdir, timeline, from, to, tag) {
  const { browser, page } = await openPage(timeline);
  const dir = path.join(outdir, 'frames');
  const fps = timeline.fps;
  const t0 = Date.now();
  for (let f = from; f < to; f++) {
    await page.evaluate(t => window.__seek(t), f / fps);
    await page.screenshot({
      path: path.join(dir, 'f' + String(f).padStart(6, '0') + '.jpg'),
      type: 'jpeg', quality: 92
    });
    if (tag !== undefined && (f - from) % 250 === 0 && f > from) {
      const done = f - from, left = to - f;
      const rate = done / ((Date.now() - t0) / 1000);
      process.send && process.send({ tag, done, left, eta: Math.round(left / rate) });
    }
  }
  await browser.close();
}

async function shots(outdir, timeline, list) {
  const { browser, page } = await openPage(timeline);
  const dir = path.join(outdir, 'shots');
  fs.mkdirSync(dir, { recursive: true });
  for (const t of list) {
    await page.evaluate(x => window.__seek(x), t);
    const name = 's' + String(t).replace('.', '_') + '.png';
    await page.screenshot({ path: path.join(dir, name) });
    console.log('  shot', name);
  }
  await browser.close();
}

(async () => {
  const outdir = path.resolve(process.argv[2]);
  const timeline = JSON.parse(fs.readFileSync(path.join(outdir, 'timeline.json'), 'utf8'));

  if (has('shots')) {
    await shots(outdir, timeline, arg('shots').split(',').map(Number));
    return;
  }

  const total = timeline.frames;
  const from = Number(arg('from', 0)), to = Number(arg('to', total));

  if (has('child')) {                       // worker process
    await runRange(outdir, timeline, from, to, arg('child'));
    process.send && process.send({ done: true, tag: arg('child') });
    return;
  }

  const N = Number(arg('workers', 4));
  fs.mkdirSync(path.join(outdir, 'frames'), { recursive: true });
  console.log(`[capture] ${timeline.id}: ${total} frames, ${N} workers`);
  const per = Math.ceil(total / N);
  const t0 = Date.now();

  await Promise.all(Array.from({ length: N }, (_, i) => new Promise((res, rej) => {
    const a = i * per, b = Math.min(total, a + per);
    if (a >= b) return res();
    const c = fork(__filename, [outdir, '--child', String(i),
                                '--from', String(a), '--to', String(b)]);
    c.on('message', m => {
      if (m.done) return;
      process.stdout.write(`  w${m.tag}: ${m.done} done, ${m.left} left (~${m.eta}s)\n`);
    });
    c.on('exit', code => code === 0 ? res() : rej(new Error('worker ' + i + ' exit ' + code)));
  })));

  const secs = ((Date.now() - t0) / 1000).toFixed(0);
  const n = fs.readdirSync(path.join(outdir, 'frames')).length;
  console.log(`[capture] ${n}/${total} frames in ${secs}s`);
  if (n !== total) { console.error('[capture] FRAME COUNT MISMATCH'); process.exit(1); }
})();
