/* interleave.js — mix the unit review so no method is applied twice running (F46).

   Blocking is right on first encounter: a learner meeting a form for the
   first time needs several of it together. Interleaving is for review,
   where the skill being practised is choosing the method rather than
   applying the one just demonstrated. The review quiz is therefore the
   place this rule belongs, and it is already mixed in nine of twelve
   units; this fixes the other three without changing any item.

   Usage: node tools/interleave.js [--apply] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}
const src = i => String(i.from || '').split(/[·(]/)[0].trim();
const longestRun = list => {
  let run = 1, worst = 1;
  for (let i = 1; i < list.length; i++) {
    run = src(list[i]) === src(list[i - 1]) ? run + 1 : 1;
    if (run > worst) worst = run;
  }
  return worst;
};

/* Reorder by repeatedly taking the item whose source differs from the last
   one placed, preferring whichever source has most left. Deterministic, and
   it moves as few items as it can. */
function mix(items) {
  const left = items.slice(), out = [];
  while (left.length) {
    const last = out.length ? src(out[out.length - 1]) : null;
    const counts = {};
    left.forEach(i => { counts[src(i)] = (counts[src(i)] || 0) + 1; });
    let pick = -1, best = -1;
    for (let i = 0; i < left.length; i++) {
      if (src(left[i]) === last) continue;
      if (counts[src(left[i])] > best) { best = counts[src(left[i])]; pick = i; }
    }
    if (pick < 0) pick = 0;              /* only one source left: unavoidable */
    out.push(left.splice(pick, 1)[0]);
  }
  return out;
}

let fixed = 0, already = 0;
for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const file = path.join(ROOT, u, 'data', 'tw.js');
  if (!fs.existsSync(file)) continue;
  const P = load(file);
  for (const s of (P.scenes || [])) {
    if (!(s.items || []).some(i => i.from)) continue;
    const before = longestRun(s.items);
    if (before <= 2) { already++; continue; }
    const order = mix(s.items).map(i => s.items.indexOf(i));
    const after = longestRun(order.map(j => s.items[j]));
    console.log(`  ${u}/${s.id}: longest run ${before} -> ${after}`);
    if (!APPLY) continue;

    /* reorder the source text, not a parsed copy: find the item literals
       between `items: [` and its closing bracket and reassemble them */
    let text = fs.readFileSync(file, 'utf8');
    const anchor = text.indexOf('id: "' + s.id + '"');
    const itemsAt = text.indexOf('items: [', anchor);
    let i = text.indexOf('[', itemsAt), depth = 0, j = i;
    while (j < text.length) {
      const c = text[j];
      if (c === '"') { j++; while (j < text.length && text[j] !== '"') j += text[j] === '\\' ? 2 : 1; }
      else if (c === '[' || c === '{') depth++;
      else if (c === ']' || c === '}') { depth--; if (depth === 0) break; }
      j++;
    }
    const inner = text.slice(i + 1, j);
    /* split the top-level `{ ... }` literals */
    const parts = [];
    let d = 0, start = -1;
    for (let k = 0; k < inner.length; k++) {
      const c = inner[k];
      if (c === '"') { k++; while (k < inner.length && inner[k] !== '"') k += inner[k] === '\\' ? 2 : 1; continue; }
      if (c === '{') { if (d === 0) start = k; d++; }
      else if (c === '}') { d--; if (d === 0) parts.push(inner.slice(start, k + 1)); }
    }
    if (parts.length !== s.items.length) {
      console.log(`    ! ${parts.length} literals but ${s.items.length} items — skipped`);
      continue;
    }
    const rebuilt = '\n          ' + order.map(n => parts[n]).join(',\n          ') + '\n        ';
    text = text.slice(0, i + 1) + rebuilt + text.slice(j);
    fs.writeFileSync(file, text);
    fixed++;
  }
}
console.log(`\n${already} reviews already interleaved, ${fixed} reordered`);
if (!APPLY) console.log('Run with --apply to write.');
