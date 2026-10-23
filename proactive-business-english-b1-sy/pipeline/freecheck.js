// Clears a candidate lexis list against A2's 624 and every B1 item already declared.
// Usage: node freecheck.js 07 "item · item · item"
const fs = require('fs'), path = require('path');
const dir = __dirname;
const A2 = JSON.parse(fs.readFileSync(path.join(dir, 'a2-lexis.json'), 'utf8'));
const a2 = new Map();
Object.entries(A2).forEach(([u, items]) =>
  (Array.isArray(items) ? items : String(items).split('·')).forEach(i => a2.set(i.trim(), u)));
const b1 = new Map();
fs.readdirSync(dir).filter(f => /^unit\d\d\.js$/.test(f)).forEach(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  const m = s.match(/^const LEXIS = '([^']*)'/m);
  if (m) m[1].split('·').forEach(i => b1.set(i.trim(), f.match(/\d\d/)[0]));
});
const me = process.argv[2];
const cand = process.argv[3].split('·').map(s => s.trim()).filter(Boolean);
let bad = 0;
cand.forEach(c => {
  if (a2.has(c)) { console.log(`  ✗ "${c}" — A2 unit ${a2.get(c)}`); bad++; }
  else if (b1.has(c) && b1.get(c) !== me) { console.log(`  ✗ "${c}" — B1 unit ${b1.get(c)}`); bad++; }
});
const dup = cand.filter((c, i) => cand.indexOf(c) !== i);
if (dup.length) { console.log(`  ✗ repeated inside the list: ${dup.join(', ')}`); bad += dup.length; }
console.log(`${cand.length} candidate(s), ${bad} collision(s)`);
