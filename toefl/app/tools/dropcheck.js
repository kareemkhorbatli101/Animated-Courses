/* dropcheck.js — validate errorfix `drop` items in one data file, before the
   gate runs. The two failures I keep making are the same two every time: the
   dropped word occurs twice, or removing it alone does not produce `fixed`.
   Both are cheap to test and expensive to discover one at a time.

   Usage: node tools/dropcheck.js u11/data/l3.js */
'use strict';
const fs = require('fs');
const p = process.argv[2];
const w = {};
new Function('window', fs.readFileSync(p, 'utf8') + '\n;return window.PAGE;')(w);
let bad = 0;
(w.PAGE.scenes || []).forEach(s => {
  if (s.kind !== 'errorfix') return;
  (s.items || []).forEach((it, i) => {
    const where = `${s.id} item ${i + 1}`;
    if (!it.drop) {
      if (!it.right) { console.log(`✗ ${where}: substitution with no right`); bad++; }
      return;
    }
    if (it.right) { console.log(`✗ ${where}: drop item also has right`); bad++; }
    const esc = it.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const all = new RegExp('(^|\\s)' + esc + '(?=$|[\\s.,!?;:])', 'g');
    const hits = (String(it.text).match(all) || []).length;
    if (hits !== 1) { console.log(`✗ ${where}: "${it.wrong}" occurs ${hits} times`); bad++; }
    const re = new RegExp('(^|\\s)' + esc + '($|[\\s.,!?;:])');
    const got = String(it.text)
      .replace(re, (m, a, c) => (a && c && !/^\s*$/.test(c) ? c : (a || c)))
      .replace(/\s+/g, ' ').trim();
    if (got !== it.fixed) {
      console.log(`✗ ${where}: removing "${it.wrong}" gives\n    ${got}\n  not\n    ${it.fixed}`);
      bad++;
    }
  });
});
console.log(bad ? `${bad} problem(s)` : 'all drop items are clean');
process.exit(bad ? 1 : 0);
