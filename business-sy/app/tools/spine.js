/* spine.js — work out which paragraph each reading item draws from (F10).

   The marker is only useful if it is right, so this computes `para` from
   the evidence each item already carries and refuses to guess:

   1. The rationale names a paragraph ("Paragraph 2 says...").
   2. The item cites a line number, which belongs to exactly one paragraph.
   3. The rationale quotes the passage, and one paragraph contains the quote.
   4. Distinctive word overlap, and only when one paragraph clearly wins.

   An item none of these settles is left without a paragraph, and the spine
   simply shows a gap there. A wrong marker would send a learner to the
   wrong part of the text, which is worse than no marker at all.

   Usage: node tools/spine.js [--apply] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}
const plain = t => String(t == null ? '' : t).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* paragraphs, and which reader-visible line numbers each one spans */
function paragraphs(text) {
  const out = [];
  let line = 0;
  (text.blocks || []).forEach(b => {
    const units = b.lines || String(b.text).split(/(?<=\.)\s+/);
    const from = line + 1;
    units.forEach(() => line++);
    out.push({ h: b.h || '', text: units.map(plain).join(' '), from, to: line });
  });
  return out;
}

const words = t => plain(t).toLowerCase().split(/[^a-z'-]+/).filter(w => w.length > 4);

function decide(item, paras) {
  const right = (item.options || item.opts || []).filter(o => o && o.correct)[0] || {};
  const why = plain(item.why || right.why || '');
  /* the correct option usually paraphrases the paragraph it came from, so
     it is evidence too \u2014 and often the strongest available */
  const blob = why + ' ' + plain(item.q || item.stem || '') + ' ' + plain(right.text || '');

  /* 0. A whole-passage question does not draw on one paragraph, and
        assigning it one would send the learner to the wrong place. `0`
        means the whole passage, which the spine shows as a full bar. */
  if (/\bmain idea\b|\bmainly about\b|\bbest title\b|\boverall\b|\bas a whole\b|\bprimary purpose\b|\bthe (whole|entire) (passage|article|text)\b/i
        .test(plain(item.q || item.stem || '')))
    return { para: 0, how: 'whole passage' };

  /* 1. the rationale names one */
  const named = /\bparagraphs?\s+(\d+)\b/i.exec(why);
  if (named && !/paragraphs?\s+\d+\s+and\s+\d+/i.test(why)) {
    const n = Number(named[1]);
    if (n >= 1 && n <= paras.length) return { para: n, how: 'named' };
  }
  /* 2. a cited line sits in exactly one paragraph */
  const lineNo = item.line != null ? item.line : (/\bline\s+(\d+)\b/i.exec(blob) || [])[1];
  if (lineNo != null) {
    const n = Number(lineNo);
    for (let i = 0; i < paras.length; i++)
      if (n >= paras[i].from && n <= paras[i].to) return { para: i + 1, how: 'line' };
  }
  /* 3. the rationale quotes the passage */
  const q = /[“"]([^”"]{12,})[”"]/.exec(why);
  if (q) {
    const needle = plain(q[1]).toLowerCase().slice(0, 40);
    for (let i = 0; i < paras.length; i++)
      if (paras[i].text.toLowerCase().indexOf(needle) >= 0) return { para: i + 1, how: 'quote' };
  }
  /* 4. distinctive overlap, and only with a clear winner */
  const want = words(blob);
  const scores = paras.map(p => {
    const set = new Set(words(p.text));
    return want.filter(w => set.has(w)).length;
  });
  const best = Math.max(...scores);
  const second = scores.slice().sort((a, b) => b - a)[1] || 0;
  if (best >= 2 && scores.filter(s => s === best).length === 1 && best >= second + 2)
    return { para: scores.indexOf(best) + 1, how: 'overlap' };
  return null;
}

let scenes = 0, items = 0, decided = 0;
const how = {};
const edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      if (s.kind !== 'read' || !s.text || !(s.items || []).length) continue;
      scenes++;
      const paras = paragraphs(s.text);
      /* a one-paragraph card: every item draws on all of it, trivially */
      if (paras.length < 2) {
        s.items.forEach((it, j) => {
          items++;
          if (it.para != null) { decided++; return; }
          decided++; how['one paragraph'] = (how['one paragraph'] || 0) + 1;
          (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, j, para: 0, how: 'one paragraph' });
        });
        continue;
      }
      s.items.forEach((it, j) => {
        items++;
        if (it.para != null) { decided++; return; }
        const r = decide(it, paras);
        if (!r) return;
        decided++;
        how[r.how] = (how[r.how] || 0) + 1;
        (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, j, para: r.para, how: r.how });
      });
    }
  }
}

console.log(`${scenes} reading scenes, ${items} items, ${decided} with a paragraph (${items - decided} left blank)`);
Object.entries(how).forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  by ${k}`));
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

let written = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  /* insert `para: n,` after each item's `q:` line, matched by scene and index */
  const byScene = {};
  edits[file].forEach(e => { (byScene[e.id] = byScene[e.id] || []).push(e); });
  for (const sid of Object.keys(byScene)) {
    const anchor = src.indexOf('id: "' + sid + '"');
    const itemsAt = src.indexOf('items: [', anchor);
    if (itemsAt < 0) continue;
    const qs = [];
    const re = /\n(\s*)\{ q: /g;
    re.lastIndex = itemsAt;
    let m, guard = 0;
    while ((m = re.exec(src)) && guard++ < 40) {
      if (m.index > src.indexOf('\n      { id: "', itemsAt + 8) && src.indexOf('\n      { id: "', itemsAt + 8) > 0) break;
      qs.push({ at: m.index + m[0].length - 3, indent: m.group ? '' : m[1] });
    }
    for (let i = byScene[sid].length - 1; i >= 0; i--) {
      const e = byScene[sid][i];
      if (!qs[e.j]) continue;
      src = src.slice(0, qs[e.j].at) + `para: ${e.para}, ` + src.slice(qs[e.j].at);
      written++;
    }
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote para on ${written} items.`);
