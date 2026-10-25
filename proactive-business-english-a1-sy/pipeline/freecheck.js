// Proactive Business English A1 — clears a candidate lexis list before a unit is written.
// Usage: node freecheck.js 07 "item · item · item"
//
// ⚠ A1 CHANGE 1 of 4, and it is a change to a rule that has held across four levels.
//
// Everywhere else in this strand the rule is: no repeat inside the level, and NO REPEAT
// AGAINST ANY LEVEL BELOW. It works because the levels were written bottom-up — A2, then
// B1 cleared against A2, then B2 cleared against both.
//
// A1 is the first level written DOWNWARDS, and the rule would do exactly the wrong thing.
// A2 Business has already declared *box*, *invoice*, *driver*, *shelf*, *delivery* and
// about six hundred other items. A rule that forbids A1 from declaring them forbids A1
// from teaching the words it exists to teach.
//
// So the cross-level pool is REPORT-ONLY here. A collision with A2, B1 or B2 is not a
// fault: it is a finding, printed as `→`, and it is what writes the unit's closing
// "Ahead at A2 — three things you will meet again" box. A harness output becomes a page
// of the book.
//
// WITHIN A1 the old rule still holds absolutely: a repeat inside this level is a fault.
const fs = require('fs'), path = require('path');
const dir = __dirname;
const LEXIS_N = 22;

// ---- the three levels ABOVE this one: report-only -------------------------------
const ABOVE = JSON.parse(fs.readFileSync(path.join(dir, 'above-lexis.json'), 'utf8'));
const above = new Map();
let aboveCount = 0;
Object.entries(ABOVE).forEach(([where, items]) => {
  items.forEach(i => { const k = i.trim(); if (k && !above.has(k)) above.set(k, where); aboveCount++; });
});
// ⚠ a named count, so a truncated or renamed pool file cannot pass as an empty one
if (aboveCount !== 2112) {
  console.error(`⚠ above-lexis.json holds ${aboveCount} items, not the 2,112 declared at A2, B1 and B2 — the pool is wrong`);
}

// ---- this level: a collision here IS a fault ------------------------------------
const mine = new Map();
fs.readdirSync(dir).filter(f => /^unit\d\d\.js$/.test(f)).forEach(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  // ⚠ the regex must survive an escaped apostrophe. With [^']* a list containing \'
  // is truncated at that item, SILENTLY, and every later unit is cleared against a
  // pool smaller than the book. Seven B2 units lost items this way before it was found.
  const m = s.match(/const LEXIS = '((?:[^'\\]|\\.)*)'/);
  if (!m) { console.error(`⚠ ${f}: no LEXIS line found — it is NOT in the pool`); return; }
  const items = m[1].replace(/\\'/g, "'").split('·').map(i => i.trim()).filter(Boolean);
  if (items.length !== LEXIS_N) {
    console.error(`⚠ ${f}: LEXIS read as ${items.length} item(s), not ${LEXIS_N} — this tool has misread the list and the pool is incomplete`);
  }
  // ⚠ FIRST writer wins. With set() a later unit overwrites an earlier one, and
  // re-checking an already-written unit then compares its own list against itself.
  items.forEach(i => { if (!mine.has(i)) mine.set(i, f.match(/\d\d/)[0]); });
});

// ⚠ --batch: several candidate lists at once, cross-checked AGAINST EACH OTHER as well.
//
// This was added after a real miss. All six Book 2 lists were cleared in one go, each against
// the units already on disk — and because none of the six was WRITTEN yet, none of them was
// checked against the other five. "light" went into unit 07 (not heavy) and unit 10 (a lamp)
// and only qa.js caught it, after both units were built.
//
// A batch clearance that does not cross-check the batch is not a clearance.
// Usage: node freecheck.js --batch 07 "a · b" 09 "c · d" ...
if (process.argv[2] === '--batch') {
  const rest = process.argv.slice(3);
  const lists = [];
  for (let i = 0; i + 1 < rest.length; i += 2) {
    lists.push([rest[i], rest[i + 1].split('·').map(s => s.trim()).filter(Boolean)]);
  }
  let bad = 0;
  lists.forEach(([n, items]) => {
    if (items.length !== LEXIS_N) { console.log(`  ✗ unit ${n}: ${items.length} item(s), not ${LEXIS_N}`); bad++; }
    items.forEach(c => {
      if (mine.has(c) && mine.get(c) !== n) { console.log(`  ✗ unit ${n}: "${c}" — already in A1 unit ${mine.get(c)}`); bad++; }
    });
  });
  // the cross-check the single-list mode cannot do
  for (let a = 0; a < lists.length; a++) {
    for (let b = a + 1; b < lists.length; b++) {
      lists[a][1].filter(x => lists[b][1].includes(x)).forEach(x => {
        console.log(`  ✗ "${x}" is in BOTH candidate unit ${lists[a][0]} and candidate unit ${lists[b][0]}`);
        bad++;
      });
    }
  }
  lists.forEach(([n, items]) => {
    const ahead = items.filter(c => above.has(c));
    if (ahead.length < 3) console.log(`  ✗ unit ${n}: ${ahead.length} forward reference(s) — the closing box needs 3`);
  });
  console.log(`\n${lists.length} list(s) cross-checked; ${bad} fault(s)`);
  process.exit(bad ? 1 : 0);
}

const me = process.argv[2];
const cand = (process.argv[3] || '').split('·').map(s => s.trim()).filter(Boolean);
let bad = 0, ahead = [];
cand.forEach(c => {
  if (mine.has(c) && mine.get(c) !== me) { console.log(`  ✗ "${c}" — A1 unit ${mine.get(c)}`); bad++; }
  else if (above.has(c)) { ahead.push([c, above.get(c)]); }
});
const dup = cand.filter((c, i) => cand.indexOf(c) !== i);
if (dup.length) { console.log(`  ✗ repeated inside the list: ${dup.join(', ')}`); bad += dup.length; }
if (cand.length && cand.length !== LEXIS_N && process.argv[4] !== '--partial') {
  console.log(`  ✗ ${cand.length} candidate(s), and a unit declares ${LEXIS_N}`);
  bad++;
}
if (ahead.length) {
  console.log(`\n  → ${ahead.length} item(s) are declared again higher up. This is NOT a fault:`);
  ahead.forEach(([c, w]) => console.log(`    → "${c}" — again at ${w}`));
  console.log(`  → three of these go in this unit's "Ahead at A2" box.`);
}
console.log(`\n${cand.length} candidate(s), ${bad} fault(s), ${ahead.length} forward reference(s)`);
process.exit(bad ? 1 : 0);
