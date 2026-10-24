// Clears a candidate lexis list against A2's 624 and every B1 item already declared.
// Usage: node freecheck.js 07 "item · item · item"
const fs = require('fs'), path = require('path');
const dir = __dirname;
const A2 = JSON.parse(fs.readFileSync(path.join(dir, 'a2-lexis.json'), 'utf8'));
const a2 = new Map();
Object.entries(A2).forEach(([u, items]) =>
  (Array.isArray(items) ? items : String(items).split('·')).forEach(i => a2.set(i.trim(), 'A2 unit ' + u)));
// ⚠ New at B2: B1's 720 items as well. Without this file a candidate list is cleared
// against 624 items when 1,344 exist, which is the one new way a B2 list can be wrong.
const B1J = JSON.parse(fs.readFileSync(path.join(dir, 'b1-lexis.json'), 'utf8'));
Object.entries(B1J).forEach(([u, items]) =>
  (Array.isArray(items) ? items : String(items).split('·')).forEach(i => a2.set(i.trim(), 'B1 unit ' + u)));
const b1 = new Map();
fs.readdirSync(dir).filter(f => /^unit\d\d\.js$/.test(f)).forEach(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  // ⚠ The regex must survive an escaped apostrophe inside the list. With [^']* a list
  // containing \' is truncated at that item, SILENTLY, and every later unit is then
  // cleared against a pool smaller than the book. qa.js has always used this form; this
  // tool did not, and seven B2 units lost items from the pool before it was found.
  const m = s.match(/const LEXIS = '((?:[^'\\]|\\.)*)'/);
  if (!m) { console.error(`⚠ ${f}: no LEXIS line found — it is NOT in the pool`); return; }
  const items = m[1].replace(/\\'/g, "'").split('·').map(i => i.trim()).filter(Boolean);
  // ⚠ The named check: a unit that does not yield 32 is a unit this tool has misread.
  if (items.length !== 32) {
    console.error(`⚠ ${f}: LEXIS read as ${items.length} item(s), not 32 — this tool has misread the list and the pool is incomplete`);
  }
  items.forEach(i => b1.set(i, f.match(/\d\d/)[0]));
});
const me = process.argv[2];
const cand = process.argv[3].split('·').map(s => s.trim()).filter(Boolean);
let bad = 0;
cand.forEach(c => {
  if (a2.has(c)) { console.log(`  ✗ "${c}" — ${a2.get(c)}`); bad++; }
  else if (b1.has(c) && b1.get(c) !== me) { console.log(`  ✗ "${c}" — B2 unit ${b1.get(c)}`); bad++; }
});
const dup = cand.filter((c, i) => cand.indexOf(c) !== i);
if (dup.length) { console.log(`  ✗ repeated inside the list: ${dup.join(', ')}`); bad += dup.length; }
// ⚠ The skim the matcher cannot do for itself. The comparison is exact-string, so an
// item differing from an earlier one only by an article clears — *a trainee* against
// *trainee*. Three of these got through at B1 Unit 22 and were found by hand. This
// does not fail the list; it prints the pairs so a human looks at them.
const strip = w => w.replace(/^(a|an|the|to) /, '');
cand.forEach(c => {
  const bare = strip(c);
  if (bare === c) return;
  if (a2.has(bare)) console.log(`  ? "${c}" — bare form "${bare}" is ${a2.get(bare)}. Read it: this is the collision the matcher cannot see.`);
});
console.log(`${cand.length} candidate(s), ${bad} collision(s)`);
