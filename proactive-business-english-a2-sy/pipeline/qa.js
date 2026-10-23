// Proactive Business English — structural QA over the unit and key scripts.
//   node qa.js            check every unitNN.js / akNN.js present
//   node qa.js 01 02      check only those units
//
// The three content checks here are the three faults the Series Bible records as the
// ones that ship: a house count that passes because the list is empty, a mediation
// ordinal that drifts, and a dialogue in which one speaker asks and answers himself.
const fs = require('fs');
const path = require('path');

const CAST = ['Nour', 'Mr Ayoub', 'Nadia', 'Bassel', 'Abu Yasser', 'Hala',
              'Mr Tarabishi', 'Ms Shamsi', 'A', 'B', 'Man', 'Woman', 'Caller',
              'Customer', 'Supplier', 'Driver', 'Engineer', 'Voice', 'C'];

// per-unit house figures — asserted as COUNTS before anything measures contents
const HOUSE = {
  "stage(": 89, "lesson(": 14, "dlg(": 14, "pb()": 7,
  "box('Language box": 7, "box('Writer\\'s box": 7, "box('Homework": 7,
  "'Write with help": 7, "'Write freely": 7,
};

// Characters a British-English A2 book may contain. Anything else in a content file
// is a stray from an editor, a paste or a keyboard layout, and it reaches the printed
// page silently — the Cyrillic word that got into one table cell looked like a dash.
const ALLOWED = new Set([
  0x2013, 0x2014,                   // – —
  0x2018, 0x2019, 0x201C, 0x201D,   // ' ' " "
  0x2026, 0x00B7, 0x2022,           // … · •
  0x2192, 0x2194, 0x2197, 0x2198,   // → ↔ ↗ ↘ (intonation arrows)
  0x2713, 0x2717, 0x2610, 0x2605,   // ✓ ✗ ☐ ★
  0x26A0, 0x2248, 0x00B0, 0x00A3,   // ⚠ ≈ ° £
  0x20AC, 0x2016,                   // € ‖
  0x1F50A, 0x1F600, 0x1F642, 0x1F610, // 🔊 😀 🙂 😐
  0x2260, 0x00D7,                   // ≠ × (Language boxes; 30×20 cm, 2 ctn × 12)
  0x00E9,                           // é — café, and only that
  // IPA letters this book transcribes with that sit OUTSIDE the IPA block
  0x00E6, 0x00F0, 0x014B, 0x03B8,   // æ ð ŋ θ
]);
// The IPA Extensions block, plus the length mark and the two stress marks.
const inIPA = cp => (cp >= 0x250 && cp <= 0x2AF) || cp === 0x2C8 || cp === 0x2CC || cp === 0x2D0;

function checkChars(file, s) {
  const bad = new Map();
  for (const ch of s) {
    const cp = ch.codePointAt(0);
    if (cp < 128 || ALLOWED.has(cp) || inIPA(cp)) continue;
    bad.set(ch, (bad.get(ch) || 0) + 1);
  }
  bad.forEach((n, ch) => {
    const hex = ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
    fail(`${file}: ${n} occurrence(s) of U+${hex} "${ch}" — not a character this book uses`);
  });
}

let faults = 0;
const fail = m => { console.log('  ✗ ' + m); faults++; };

function countOccurrences(s, needle) {
  return s.split(needle).length - 1;
}

function checkUnit(file, s, n) {
  checkChars(file, s);
  for (const [needle, want] of Object.entries(HOUSE)) {
    const got = countOccurrences(s, needle.replace('\\\\', '\\'));
    if (got !== want) fail(`${file}: ${needle} = ${got}, house figure is ${want}`);
  }
  if (!/module\.exports = out;/.test(s)) fail(`${file}: no module.exports`);
  if (!/require\.main === module/.test(s)) fail(`${file}: no require.main build line — the build would write no file and exit silently`);

  // dialogue integrity: consecutive identical speakers, and speakers off the cast list
  const dlgs = s.match(/dlg\((?:[^()]|\([^()]*\))*\)/gs) || [];
  dlgs.forEach((d, di) => {
    const speakers = [...d.matchAll(/\[\s*'((?:[^'\\]|\\.)*)'\s*,/g)].map(m => m[1].replace(/\\'/g, "'"));
    speakers.forEach((sp, i) => {
      if (i && sp === speakers[i - 1]) {
        console.log(`  ? ${file}: dlg #${di + 1} has two turns in a row for "${sp}" — read it; an ask-and-self-answer pair is always a fault`);
      }
      if (!CAST.includes(sp) && !/^(Ms|Mr) /.test(sp)) {
        fail(`${file}: dlg #${di + 1} speaker "${sp}" is not in the cast`);
      }
    });
  });
  const lx = s.match(/const LEXIS = '((?:[^'\\]|\\.)*)'/);
  if (!lx) fail(`${file}: no LEXIS line — the cross-unit collision check cannot run without it`);
  return lx ? lx[1] : '';
}

// per-cycle stage codes, keyed by the "===== 1.3 =====" banner each file carries
function cycles(s) {
  const out = {};
  const parts = s.split(/\/\/ =+ ?(?:CYCLE )?(\d+\.\d+) ?=+/);
  for (let i = 1; i < parts.length; i += 2) {
    const codes = [...parts[i + 1].matchAll(/stage\('([^']+)'/g)].map(m => m[1]);
    out[parts[i]] = codes;
  }
  return out;
}

// The unit check is the one place where a Student's Book question and an Answer Key
// letter have to agree, and nothing else in the book cross-references like that.
function checkUnitCheck(file, keySrc, unitSrc) {
  const qs = [...unitSrc.matchAll(/'(\d)  (.*?)   a\) (.*?)   b\) (.*?)   c\) (.*?)',/g)];
  const row = keySrc.match(/\[\['Answer', (.*?)\]\]/);
  const ans = row ? [...row[1].matchAll(/'([abc])'/g)].map(m => m[1]) : [];

  if (qs.length !== 8) fail(`${file}: the unit check has ${qs.length} language questions, not 8`);
  if (!row) return fail(`${file}: no answer row — every key states its answers in one table`);
  if (ans.length !== qs.length) {
    fail(`${file}: ${ans.length} answer(s) for ${qs.length} question(s)`);
  }

  qs.forEach((q, i) => {
    const [, n, stem, a, b, c] = q;
    const opts = { a, b, c };
    if (i < ans.length && !opts[ans[i]]) fail(`${file}: Q${n} answers "${ans[i]}" but there is no such option`);
    // A blank immediately followed by a word that is also an option: choosing that
    // option writes the word twice. The question reads fine in the file and is
    // unanswerable on the page.
    const after = (stem.match(/_{2,}\s+(\S+)/) || [])[1];
    if (after) {
      const bare = after.replace(/[^A-Za-z']/g, '').toLowerCase();
      Object.entries(opts).forEach(([letter, text]) => {
        if (bare && text.trim().toLowerCase() === bare) {
          fail(`${file}: Q${n} — option ${letter}) "${text.trim()}" repeats the word after the blank ("${after}")`);
        }
      });
    }
  });

  // a key that answers without saying how to mark is half a key
  if (!/box\('Marking the/.test(keySrc)) fail(`${file}: no "Marking the…" box in the unit check`);
  if (!/Teacher\\'s note/.test(keySrc)) fail(`${file}: no teacher's note`);
}

function checkKey(file, s, unitSrc) {
  checkChars(file, s);
  if (!/module\.exports = out;/.test(s)) fail(`${file}: no module.exports`);
  if (!/require\.main === module/.test(s)) fail(`${file}: no require.main build line`);

  // house convention: every cycle after the first opens on a fresh page in the key
  const cyc = cycles(s);
  const nCyc = Object.keys(cyc).length;
  if (nCyc !== 7) fail(`${file}: ${nCyc} cycle banner(s), the unit has 7`);
  const breaks = countOccurrences(s, 'pb()');
  if (breaks !== nCyc - 1) {
    fail(`${file}: pb() = ${breaks}; the key starts each cycle after the first on a new page, so ${nCyc - 1}`);
  }

  // coverage: a key that omits a stage is the fault a stage count alone never catches
  if (unitSrc) {
    checkUnitCheck(file, s, unitSrc);
    const ucyc = cycles(unitSrc);
    Object.entries(ucyc).forEach(([n, codes]) => {
      const have = new Set(cyc[n] || []);
      const missing = [...new Set(codes)].filter(c => !have.has(c));
      if (missing.length) fail(`${file}: cycle ${n} has no key entry for stage ${missing.join(', ')}`);
    });
  }
}

// ---- ordinal continuity across cycle 7 -------------------------------------
function checkOrdinals(files) {
  const ORD = ['first','second','third','fourth','fifth','sixth','seventh','eighth',
               'ninth','tenth','eleventh','twelfth'];
  const seen = [];
  files.forEach(f => {
    const s = fs.readFileSync(f, 'utf8');
    const n = parseInt(path.basename(f).match(/\d\d/)[0], 10);
    const plain = s.replace(/[*_]/g, '');   // markdown must not hide the ordinal
    const m = plain.match(new RegExp('(' + ORD.join('|') + ')\\s+(?:unit|of (?:this|the) book)', 'i'));
    seen.push([n, m ? m[1].toLowerCase() : null]);
  });
  seen.forEach(([n, o]) => {
    if (o === null) {
      fail(`unit ${String(n).padStart(2,'0')}: cycle 7 declares no ordinal — the drift begins at the cycle that OMITS the claim, not at the one that gets it wrong`);
    } else if (ORD[n - 1] !== o) {
      fail(`unit ${String(n).padStart(2,'0')}: cycle 7 says "${o}" but is unit ${n} (${ORD[n-1]})`);
    }
  });
}

// ---- lexis collisions across the book --------------------------------------
function checkLexis(sets) {
  const all = [];
  Object.entries(sets).forEach(([u, line]) => {
    // split on the middle dot; never on an underscore, which truncates the last item
    line.split('·').map(x => x.trim().toLowerCase()).filter(Boolean)
        .forEach(w => all.push([w, u]));
  });
  const byWord = {};
  all.forEach(([w, u]) => (byWord[w] = byWord[w] || []).push(u));
  Object.entries(byWord).filter(([, us]) => us.length > 1)
    .forEach(([w, us]) => fail(`lexis "${w}" appears in units ${us.join(', ')}`));
  return all.length;
}

const dir = __dirname;
const want = process.argv.slice(2);
const units = fs.readdirSync(dir).filter(f => /^unit\d\d\.js$/.test(f))
  .filter(f => !want.length || want.includes(f.match(/\d\d/)[0])).sort();
const keys = fs.readdirSync(dir).filter(f => /^ak\d\d\.js$/.test(f))
  .filter(f => !want.length || want.includes(f.match(/\d\d/)[0])).sort();

console.log(`checking ${units.length} unit(s) and ${keys.length} key(s)`);

// A text-only harness reads a file that node cannot even parse and reports it clean.
// Load every script and look at what it exports before any other check runs.
function checkLoads(file) {
  let mod;
  try {
    mod = require(path.join(dir, file));
  } catch (e) {
    fail(`${file}: does not load — ${e.message.split('\n')[0]}`);
    return;
  }
  if (!Array.isArray(mod)) return fail(`${file}: exports ${typeof mod}, not an array of elements`);
  if (!mod.length) return fail(`${file}: exports an empty array — the built file would have no content`);
  mod.forEach((el, i) => {
    if (el === undefined || el === null) {
      fail(`${file}: element ${i + 1} is ${el} — a spread of lines() or a missing return`);
    }
  });
}
[...units, ...keys].forEach(checkLoads);
const lexis = {};
units.forEach(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  const lx = checkUnit(f, s, parseInt(f.match(/\d\d/)[0], 10));
  if (lx) lexis[f.match(/\d\d/)[0]] = lx;
});
keys.forEach(f => {
  const n = f.match(/\d\d/)[0];
  const up = path.join(dir, `unit${n}.js`);
  checkKey(f, fs.readFileSync(path.join(dir, f), 'utf8'),
           fs.existsSync(up) ? fs.readFileSync(up, 'utf8') : null);
});
if (units.length) checkOrdinals(units.map(f => path.join(dir, f)));
const nLex = checkLexis(lexis);
console.log(`-- ${nLex} lexis item(s) declared; ${faults} fault(s)`);
process.exit(faults ? 1 : 0);
