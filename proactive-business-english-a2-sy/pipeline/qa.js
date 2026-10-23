// Proactive Business English — structural QA over the unit and key scripts.
//   node qa.js            check every unitNN.js / akNN.js present
//   node qa.js 01 02      check only those units
//
// The three content checks here are the three faults the Series Bible records as the
// ones that ship: a house count that passes because the list is empty, a mediation
// ordinal that drifts, and a dialogue in which one speaker asks and answers himself.
const fs = require('fs');
const path = require('path');

// The named cast, the generic speakers a skeleton uses, and the voices that are a
// place rather than a person. Fadi joined in Unit 6 as the company's driver and was
// speaking by Unit 10 without ever being written down — which is what this list is for.
const CAST = ['Nour', 'Mr Ayoub', 'Nadia', 'Bassel', 'Abu Yasser', 'Hala', 'Fadi',
              'Mr Tarabishi', 'Ms Shamsi', 'A', 'B', 'Man', 'Woman', 'Caller',
              'Customer', 'Supplier', 'Driver', 'Engineer', 'Voice', 'C',
              'Clinic', 'Receptionist', 'Pharmacist', 'Teacher', 'Hotel', 'Station'];

// per-unit house figures — asserted as COUNTS before anything measures contents.
// ⚠ pb() is the one figure that differs between the books: a Book 2 unit opens its
// unit check on a fresh page as well, so 8 against Book 1's 7, and a Book 2 key does
// the same, so 7 against Book 1's 6. Both measured in the series' own unit13/ak13.
const HOUSE = {
  "stage(": 89, "lesson(": 14, "dlg(": 14,
  "box('Language box": 7, "box('Writer\\'s box": 7, "box('Homework": 7,
  "'Write with help": 7, "'Write freely": 7,
};
const BOOK_OF = n => (n >= 13 ? 2 : 1);
const UNIT_BREAKS = n => (BOOK_OF(n) === 2 ? 8 : 7);

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
  const wantBreaks = UNIT_BREAKS(n);
  const gotBreaks = countOccurrences(s, 'pb()');
  if (gotBreaks !== wantBreaks) {
    fail(`${file}: pb() = ${gotBreaks}, house figure for a Book ${BOOK_OF(n)} unit is ${wantBreaks}`);
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
  // ⚠ take the row from AFTER the unit-check heading. A key can carry an earlier
  // ['Answer', …] row — the exam practice in cycle 7 — and the first match in the
  // file is then the wrong table, which reads as "0 answers" or, worse, as 6 right ones.
  const atCheck = keySrc.search(/stage\('✓'/);
  const tail = atCheck === -1 ? keySrc : keySrc.slice(atCheck);
  const row = tail.match(/\[\['Answer', (.*?)\]\]/);
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
  const n = parseInt(file.match(/\d\d/)[0], 10);
  const wantBreaks = nCyc - 1 + (BOOK_OF(n) === 2 ? 1 : 0);
  const breaks = countOccurrences(s, 'pb()');
  if (breaks !== wantBreaks) {
    fail(`${file}: pb() = ${breaks}; a Book ${BOOK_OF(n)} key starts each cycle after the first on a new page${BOOK_OF(n) === 2 ? ', and the unit check too' : ''}, so ${wantBreaks}`);
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
  // a unit counts its place in ITS OWN book: unit 13 is the first unit of Book 2
  seen.forEach(([n, o]) => {
    const want = ORD[(n - 1) % 12];
    if (o === null) {
      fail(`unit ${String(n).padStart(2,'0')}: cycle 7 declares no ordinal — the drift begins at the cycle that OMITS the claim, not at the one that gets it wrong`);
    } else if (want !== o) {
      fail(`unit ${String(n).padStart(2,'0')}: cycle 7 says "${o}" but is the ${want} unit of Book ${BOOK_OF(n)}`);
    }
  });
}

// ---- cast surnames ---------------------------------------------------------
// A first name with the wrong surname reads perfectly and is invisible to every other
// check. It has shipped before — nine 'F. Haddad' bylines at B1 — so the pairs are
// asserted. A first name followed by any other capitalised word is reported, and across
// this whole book that regex produced one hit: the fault it was written to find.
const SURNAME = { Nour: 'Mansour', Nadia: 'Sayegh', Bassel: 'Nassif', Hala: 'Mourad',
                  Fadi: 'Saeed', Khaled: 'Ayoub', Fouad: 'Tarabishi', Dima: 'Shamsi',
                  Yasser: 'Khalil' };
function checkNames(file, s) {
  const re = new RegExp(`\\b(${Object.keys(SURNAME).join('|')}) ([A-Z][a-z]+)`, 'g');
  [...s.matchAll(re)].forEach(m => {
    if (m[2] !== SURNAME[m[1]]) {
      fail(`${file}: "${m[1]} ${m[2]}" — ${m[1]}'s surname is ${SURNAME[m[1]]}`);
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

// ---- test papers ----------------------------------------------------------
// A test is the one artefact where arithmetic can be wrong without looking wrong:
// the marks in the part headings have to add up to the paper, the papers to the
// total, and every numbered question needs exactly one answer in the key.
function checkTest(paperFile, keyFile, spec) {
  const t = fs.readFileSync(path.join(dir, paperFile), 'utf8');
  const k = fs.readFileSync(path.join(dir, keyFile), 'utf8');
  checkChars(paperFile, t);
  checkChars(keyFile, k);

  // PAPER n · NAME  (minutes · N marks)
  const papers = [...t.matchAll(/h2\('PAPER \d+\s+·\s+([A-Z]+)[^']*?·\s*(\d+) marks\)/g)]
                   .map(m => ({ name: m[1], marks: +m[2] }));
  if (papers.length !== 4) fail(`${paperFile}: ${papers.length} papers, expected 4`);
  const total = papers.reduce((a, p) => a + p.marks, 0);
  if (total !== spec.total) {
    fail(`${paperFile}: the four papers total ${total} marks, not ${spec.total}`);
  }

  // the A2 Key weighting this book's plan commits to, scaled to this paper's total
  const want = spec.want;
  papers.forEach(p => {
    if (want[p.name] !== undefined && want[p.name] !== p.marks) {
      fail(`${paperFile}: ${p.name} is ${p.marks} marks; the 30·30·20·20 split gives it ${want[p.name]}`);
    }
  });

  // part headings carry their own marks; they must add up to their paper
  const chunks = t.split(/h2\('PAPER /).slice(1);
  chunks.forEach((chunk, i) => {
    const partMarks = [...chunk.matchAll(/part\('Part \d+[^']*?\((\d+) marks\)'/g)].map(m => +m[1]);
    if (!partMarks.length) return;            // Speaking states its marks in boxes
    const sum = partMarks.reduce((a, b) => a + b, 0);
    if (sum !== papers[i].marks) {
      fail(`${paperFile}: ${papers[i].name} parts add to ${sum}, but the paper is ${papers[i].marks}`);
    }
  });

  // every answer row in the key must have one letter per question heading
  const rows = [...k.matchAll(/table\(\['Q',\s*((?:'\d+'\s*,?\s*)+)\]\s*,\s*\[\['Answer',\s*((?:'[ABC]'\s*,?\s*)+)\]\]/g)];
  if (!rows.length) fail(`${keyFile}: no answer rows found — the key states its answers in Q/Answer tables`);
  rows.forEach(m => {
    const qs = m[1].match(/\d+/g) || [];
    const as = m[2].match(/[ABC]/g) || [];
    if (qs.length !== as.length) {
      fail(`${keyFile}: answer row for Q${qs[0]}–${qs[qs.length - 1]} has ${as.length} answer(s) for ${qs.length} question(s)`);
    }
  });

  // and the numbering must run 1..N with no gap and no repeat
  // questions are numbered **7** in a stem, **23** in a notes table, and (16) in a cloze
  const nums = [...t.matchAll(/\*\*(\d+)\*\*|\((\d+)\)\s*_{3,}/g)]
                 .map(m => +(m[1] || m[2]))
                 .filter(n => n <= spec.maxQ).sort((a, b) => a - b);
  const seen = [...new Set(nums)];
  for (let i = 0; i < seen.length; i++) {
    if (seen[i] !== i + 1) {
      fail(`${paperFile}: question numbering jumps from ${seen[i - 1]} to ${seen[i]}`);
      break;
    }
  }
  // a dropped last question leaves the numbering contiguous and still wrong
  if (seen.length !== spec.maxQ) {
    fail(`${paperFile}: ${seen.length} numbered question(s), expected ${spec.maxQ}`);
  }

  // and every numbered question must be answered somewhere in the key.
  // the key states answers two ways: a Q/Answer row for multiple choice, and a
  // table whose headings are the gap numbers for anything written into a gap.
  const answered = new Set();
  [...k.matchAll(/table\(\['Q',\s*((?:'\d+'\s*,?\s*)+)\]/g)].forEach(m => {
    (m[1].match(/\d+/g) || []).forEach(n => answered.add(+n));
  });
  [...k.matchAll(/table\(\[((?:'\d+'\s*,\s*)*'\d+')\]/g)].forEach(m => {
    (m[1].match(/\d+/g) || []).forEach(n => answered.add(+n));
  });
  const missing = seen.filter(n => !answered.has(n));
  if (missing.length) {
    fail(`${keyFile}: no answer for question(s) ${missing.join(', ')}`);
  }
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
    let msg = e.message.split('\n')[0];
    // docx's own message for this one is unreadable, and it is always the same cause
    if (/reading 'slice'/.test(msg)) {
      msg = 'a table\'s widths array is shorter than its headings — count both';
    }
    fail(`${file}: does not load — ${msg}`);
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
// the test papers are loaded too: a table whose widths array is one short of its
// headings renders nothing and throws inside docx, and a text-only read cannot see it
const papers = ['midtest.js', 'midkey.js', 'endtest.js', 'endkey.js',
                'midtest2.js', 'midkey2.js', 'endtest2.js', 'endkey2.js']
  .filter(f => fs.existsSync(path.join(dir, f)));
[...units, ...keys, ...papers].forEach(checkLoads);
[...units, ...keys, ...papers].forEach(f => checkNames(f, fs.readFileSync(path.join(dir, f), 'utf8')));
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
[['midtest.js', 'midkey.js', { total: 60, maxQ: 30,
   want: { READING: 18, WRITING: 18, LISTENING: 12, SPEAKING: 12 } }],
 ['endtest.js', 'endkey.js', { total: 100, maxQ: 50,
   want: { READING: 30, WRITING: 30, LISTENING: 20, SPEAKING: 20 } }],
 ['midtest2.js', 'midkey2.js', { total: 60, maxQ: 30,
   want: { READING: 18, WRITING: 18, LISTENING: 12, SPEAKING: 12 } }],
 ['endtest2.js', 'endkey2.js', { total: 100, maxQ: 50,
   want: { READING: 30, WRITING: 30, LISTENING: 20, SPEAKING: 20 } }],
].forEach(([t, k, spec]) => {
  if (fs.existsSync(path.join(dir, t)) && fs.existsSync(path.join(dir, k))) checkTest(t, k, spec);
});
const nLex = checkLexis(lexis);
console.log(`-- ${nLex} lexis item(s) declared; ${faults} fault(s)`);
process.exit(faults ? 1 : 0);
