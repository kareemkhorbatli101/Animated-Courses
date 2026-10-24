// Proactive Business English B1 — structural QA over the unit and key scripts.
// Copied from the B1 Business harness and extended for B2: two cross-level lexis sets,
// 32 items a unit, a declared collocation set, the band-4 peer slip, and the five-part
// B2 Business Vantage Reading rotation.
// Originally from the A2 Business harness, which was already book-aware, and extended
// with the four B1 checks the plan specifies at Part Nine.
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
              'Clinic', 'Receptionist', 'Pharmacist', 'Teacher', 'Hotel', 'Station',
              'Technician',   // A2 Unit 20, the repairs unit — an institutional voice
              'Visitor',      // A2 Unit 23, the city unit — an institutional voice
              'Agent',        // declared at B1 Unit 1, the freight agent on the other end
                              // of the first call — refused on first use, as intended
              'Lina',         // Lina Barakat, trainee administrator — joins at Book 2 Unit 13
              'Buyer',        // Book 2 Unit 16, the export enquiry — a buyer on the other end
                              // of a line, before Ms Tannous is named. Refused on first use
              'Officer',      // B1 Book 2 Unit 20, the customs officer — named by his office
              // ⚠ Nothing below is pre-declared for B2 either. These four are the voices the
              // B2 plan expects; each is commented with its unit the first time it is used,
              // and until it is written here the harness refuses it.
              'Dallal',       // B2 Book 1 Unit 1 — Mr Rafiq Dallal's office before he is named
              'Committee',    // B2 Book 1 Unit 8 — the bank's credit committee, which never speaks to you
              'Arbitrator',   // B2 Book 2 Unit 19
              'Registrar'];   // B2 Book 2 Unit 23
// ⚠ Nothing is pre-declared for B1. The institutional voices the plan EXPECTS —
// Auditor, Officer, Agent, Buyer — are deliberately absent, so that the first use of
// each is refused and the decision to add it gets written down with its unit number.
// A named person of the form "Mr X" / "Ms X" passes without declaration, as at A2.

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
// ⚠ MEASURED at Unit 1, not inherited. A2 Business runs 7 in a Book 1 unit and 8 in
// a Book 2 unit, the extra break being the unit check on a fresh page. B1 Book 1
// measures **8**: its cycles are long enough that the unit check needs its own page
// from the start, which at A2 only became true in Book 2. Book 2's figure is left at
// 8 until Unit 13 is measured.
const UNIT_BREAKS = n => (BOOK_OF(n) === 2 ? 8 : 8);
// How many items a declared LEXIS line carries, and the second line B1 adds.
const LEXIS_N = 32;
// ⚠ New at B2: 8 collocations a unit, in const COLLOC. B2 Business Vantage Reading
// Part 4 is a multiple-choice cloze testing collocation, and the examination has no
// word-formation part — so this strand declares collocations where the general B2
// course declares word-formation pairs. 8 x 24 = 192 across the level.
const COLLOC_N = 8;

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

// ---- what A2 already taught ------------------------------------------------
// B1 reuses A2's company and A2's people, so it reuses A2's words unless something
// stops it. a2-lexis.json is harvested from the delivered A2 tree (24 units, 624
// items) and kept here so this tree is self-contained; re-harvest it only if A2 is
// edited. Nothing in B1 may repeat an A2 item EXCEPT on the BACK_AT_B1 line.
const A2 = JSON.parse(fs.readFileSync(path.join(__dirname, 'a2-lexis.json'), 'utf8'));
const A2_ITEMS = new Set();
Object.entries(A2).forEach(([u, ws]) => ws.forEach(w => A2_ITEMS.add(w)));
const A2_UNIT_OF = {};
Object.entries(A2).forEach(([u, ws]) => ws.forEach(w => (A2_UNIT_OF[w] = u)));
// ⚠ And what B1 already taught. Without this file the whole 720-item B1 set is
// invisible to every check in this harness, which is the one new fault B2 could have
// that no earlier level could. Harvested from the delivered B1 tree.
const B1 = JSON.parse(fs.readFileSync(path.join(__dirname, 'b1-lexis.json'), 'utf8'));
const B1_ITEMS = new Set();
Object.entries(B1).forEach(([u, ws]) => ws.forEach(w => B1_ITEMS.add(w)));
const B1_UNIT_OF = {};
Object.entries(B1).forEach(([u, ws]) => ws.forEach(w => (B1_UNIT_OF[w] = u)));
const EARLIER_ITEMS = new Set([...A2_ITEMS, ...B1_ITEMS]);
const EARLIER_WHERE = w => (A2_ITEMS.has(w) ? `A2 unit ${A2_UNIT_OF[w]}` : `B1 unit ${B1_UNIT_OF[w]}`);

// ---- word bands ------------------------------------------------------------
// The one fault the plan predicts for Phase 1: a B1 unit carrying A2's figures.
// Book 1 is guided >=50 and free 100-140; Book 2 >=60 and 140-180. The rubric has to
// say so on the page, because the learner cannot see this file.
function checkWordBands(file, s, n) {
  // ⚠ B2 Business Vantage fixes the examination lengths at 40–50 (Part 1) and 120–140
  // (Part 2), which is double B1 Preliminary's Part 2. The course bands move with it:
  // guided >=80 and free 200–240, identical in both books, because the examination
  // fixes them and does not ask for more in the second year. Only the page band and
  // the test length should be expected to move between Book 1 and Book 2.
  const guided = '80 words or more';
  const free = '200 to 240 words';
  const nGuided = countOccurrences(s, guided);
  const nFree = countOccurrences(s, free);
  if (nGuided < 6) fail(`${file}: "${guided}" appears ${nGuided} time(s); each of the 6 guided tasks in cycles 1–6 states it`);
  if (nFree < 7) fail(`${file}: "${free}" appears ${nFree} time(s); all 7 free-writing tasks state it`);
  if (!/40 to 50 words|120 to 140 words/.test(s)) {
    fail(`${file}: cycle 7's exam task states no examination length — B2 Business Vantage asks for 40–50 (Part 1) or 120–140 (Part 2), not the course figure`);
  }
  // Every earlier band in the series. None is legitimate in a B2 unit, and a copied
  // cycle is the only way one gets in.
  [['25 words or more', 'A2'], ['35 words or more', 'A2'], ['35 to 60 words', 'A2'],
   ['60 to 100 words', 'A2'], ['50 words or more', 'B1'], ['60 words or more', 'B1'],
   ['100 to 140 words', 'B1'], ['140 to 180 words', 'B1'],
   ['35 to 45 words', 'B1 exam'], ['60 to 80 words', 'B1 exam']].forEach(([bad, lvl]) => {
    const k = countOccurrences(s, bad);
    if (k) fail(`${file}: "${bad}" appears ${k} time(s) — that is a ${lvl} word band in a B2 unit`);
  });
}

// ---- canon ----------------------------------------------------------------
// Facts A2 printed and B1 may not contradict. Each is checked only where the unit
// raises the subject at all: a unit that never mentions Baghdad Street is not asked
// to date it, but a unit that does must date it the same way A2 did.
const CANON = [
  [/Baghdad Street/, /8 June|eighth of June/, 'Baghdad Street opened on 8 June'],
  [/Homs store|store in Homs/, /2019/, 'the Homs store opened in 2019 and closed in 2021'],
  [/Saturday trial/, /nineteen|19 orders/, 'the Saturday trial got nineteen orders against the thirty needed'],
  [/generator/, /one until four|1 until 4/, 'the generator runs from one until four'],
  [/founded/, /1998/, 'Sham Trading was founded in 1998'],
  // ⚠ New at B2: what B1 printed and B2 may not contradict. The Ghouta entry is the
  // interesting one — B1 Unit 17 MOVED an A2 fact by dated change note, so a B2 unit
  // that mentions the run must carry the new days, not A2's.
  [/Ghouta run|Ghouta day/, /Monday|Wednesday/, 'the Ghouta run moved to Mondays and Wednesdays on 1 March (B1 Unit 17)'],
  [/Tannous/, /28 April|twelve months|1 May/, 'the Tannous agreed terms of 28 April run twelve months from 1 May'],
  [/bench page/, /revision 2|1 April/, 'the bench page is at revision 2 of 1 April, issued by the administration office'],
  [/scrap cartons|nine cartons/, /January|fourth store/, 'the nine scrap cartons of January are in the fourth store'],
];
function checkCanon(file, s) {
  CANON.forEach(([subject, fact, what]) => {
    if (subject.test(s) && !fact.test(s)) {
      console.log(`  ? ${file}: mentions ${subject.source} without the A2 fact — ${what}. Read it.`);
    }
  });
}

// ⚠ Strip // comments before counting. A comment that mentions a construct
// — "the end-of-book block runs on with no extra pb()" — is not an occurrence
// of it, and Unit 12 failed its page-break count because of one such line.
// Caught at B1 Book 1 Unit 12; applies to every HOUSE figure, not just pb().
function stripComments(s) {
  return s.split('\n').map(line => {
    // only strip a // that starts the line or follows whitespace, so that
    // a // inside a string (a URL, say) is left alone
    const m = line.match(/^(\s*)\/\//);
    return m ? '' : line;
  }).join('\n');
}

function countOccurrences(s, needle) {
  return stripComments(s).split(needle).length - 1;
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
  else {
    const items = lx[1].split('·').map(x => x.trim()).filter(Boolean);
    if (items.length !== LEXIS_N) fail(`${file}: LEXIS declares ${items.length} item(s), the house figure is ${LEXIS_N}`);
  }
  // the second declared line: two or three earlier items, each taught for a new sense
  const back = s.match(/const BACK_AT_B2 = '((?:[^'\\]|\\.)*)'/);
  if (!back) fail(`${file}: no BACK_AT_B2 line — every B2 unit declares the A2 or B1 items it re-teaches`);
  else {
    const items = back[1].split('·').map(x => x.trim().toLowerCase()).filter(Boolean);
    if (items.length < 2 || items.length > 3) {
      fail(`${file}: BACK_AT_B2 has ${items.length} item(s); the rule is two or three`);
    }
    items.forEach(w => {
      if (!EARLIER_ITEMS.has(w)) {
        fail(`${file}: BACK_AT_B2 "${w}" was never declared at A2 or B1 — that line is only for items being re-taught`);
      }
    });
  }
  // ⚠ New at B2: the declared collocation set. 8 a unit, and the harness collects them
  // across the level the same way it collects LEXIS, so a repeat is a fault.
  const cl = s.match(/const COLLOC = '((?:[^'\\]|\\.)*)'/);
  if (!cl) fail(`${file}: no COLLOC line — B2 declares 8 collocations a unit because Vantage Reading Part 4 tests exactly that`);
  else {
    const items = cl[1].split('·').map(x => x.trim()).filter(Boolean);
    if (items.length !== COLLOC_N) fail(`${file}: COLLOC declares ${items.length} item(s), the house figure is ${COLLOC_N}`);
  }
  // ⚠ New at B2: the peer-review band. Band 3 slips copied from B1 would otherwise pass
  // every other check in this file. Band 4 requires the reviewer to COPY the line.
  if (!/copy the line/i.test(s)) {
    fail(`${file}: no band-4 peer slip — a B2 unit must instruct the reviewer to copy the line being marked, not summarise it`);
  }
  // ⚠ Book 2 adds ONE move to band 4: the reviewer prices their own suggestion. Part
  // Seven calls it this strand's own discipline arriving in the review slip —
  // everything else in four levels has had to be priced, and a suggestion is the last
  // thing that never was. A Book 1 slip pasted forward passes every check above.
  if (BOOK_OF(n) === 2 && !/would cost the writer/i.test(s)) {
    fail(`${file}: band-4 slip has no cost clause — a Book 2 reviewer says what the correction would cost the writer (time, a figure, or a relationship)`);
  }
  checkWordBands(file, s, n);
  checkCanon(file, s);
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
  // ⚠ Matches SOURCE text, so it must accept both quoting styles. A long note in
  // single quotes needs every apostrophe escaped (see ak14); one in double quotes does
  // not, renders identically, and was read here as no note at all.
  if (!/Teacher\\?'s note/.test(keySrc)) fail(`${file}: no teacher's note`);
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
  // ⚠ MEASURED at ak01, not inherited. At A2 a Book 1 key took cycles-1 breaks and a
  // Book 2 key one more, for the unit check. A B1 key runs 23 pages, so the unit
  // check needs its own page from Book 1 onwards: cycles-1 + 1, in both books.
  const wantBreaks = nCyc - 1 + 1;
  const breaks = countOccurrences(s, 'pb()');
  if (breaks !== wantBreaks) {
    fail(`${file}: pb() = ${breaks}; a B1 key starts each cycle after the first on a new page, and the unit check too, so ${wantBreaks}`);
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
    // ⚠ search cycle 7 only. An ordinal + "unit" can occur innocently earlier in a
    // unit — "that rule has done real work in three different units" — and the first
    // match in the file is then the wrong one.
    const seven = s.indexOf(`CYCLE ${n}.7`) !== -1 ? s.slice(s.indexOf(`CYCLE ${n}.7`)) : s;
    const plain = seven.replace(/[*_]/g, '');   // markdown must not hide the ordinal
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
                  Yasser: 'Khalil',
                  // new at B1, and carried from A2 Book 2's pages
                  Ziad: 'Attar', Lina: 'Barakat', Maysa: 'Tannous',
                  Samir: 'Haddad', Rana: 'Dagher' };
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
  // and the harder half: nothing may repeat an item A2 or B1 declared, except on
  // BACK_AT_B2. ⚠ 1,344 earlier items, and at B2 this is the check that does the work.
  all.forEach(([w, u]) => {
    if (EARLIER_ITEMS.has(w)) {
      fail(`lexis "${w}" (B2 unit ${u}) was declared at ${EARLIER_WHERE(w)} — put it on the BACK_AT_B2 line with a new sense, or choose another item`);
    }
  });
  return all.length;
}

// ---- collocations across the level -----------------------------------------
// ⚠ New at B2. The declared collocation sets are a level-wide constraint exactly as
// LEXIS is, and for the same reason: two units written months apart cannot see each
// other. They are NOT checked against A2 or B1, which declared no collocations.
function checkColloc(sets) {
  const all = [];
  Object.entries(sets).forEach(([u, line]) => {
    line.split('·').map(x => x.trim().toLowerCase()).filter(Boolean)
        .forEach(w => all.push([w, u]));
  });
  const byWord = {};
  all.forEach(([w, u]) => (byWord[w] = byWord[w] || []).push(u));
  Object.entries(byWord).filter(([, us]) => us.length > 1)
    .forEach(([w, us]) => fail(`collocation "${w}" appears in units ${us.join(', ')}`));
  return all.length;
}

// ---- the exam-practice rotation -------------------------------------------
// ⚠ New at B2, and it exists because B1's rotation was correct by hand and never
// asserted. B2 Business Vantage Reading has FIVE parts, not Preliminary's seven, and
// Part 5 (error correction / proofreading) is placed in the five units whose subject
// is somebody else's prose: 2, 9, 15, 20 and 22.
const READING_PART = {
  1: 1, 2: 5, 3: 3, 4: 4, 5: 2, 6: 1, 7: 3, 8: 4, 9: 5, 10: 2, 11: 1, 12: 3,
  13: 4, 14: 2, 15: 5, 16: 1, 17: 2, 18: 3, 19: 4, 20: 5, 21: 1, 22: 5, 23: 2, 24: 4,
};
// Writing alternates Part 1 / Part 2 from Unit 1 — odd Part 1, even Part 2 — with ONE
// declared exchange: Units 20 and 21 swap, because Unit 21 is the proposal unit and a
// proposal is a Part 2 task. Without the exchange the proposal unit would practise the
// 40–50-word internal communication, which is the one genre a proposal cannot be.
const WRITING_PART = n => (n === 20 ? 1 : n === 21 ? 2 : (n % 2 === 1 ? 1 : 2));
function checkRotation(file, s, n) {
  const wantR = READING_PART[n];
  const r = s.match(/exam practice \(B2 Business Vantage Reading Part (\d)\)/);
  if (!r) fail(`${file}: cycle 7 stage 5 does not name a B2 Business Vantage Reading part`);
  else if (+r[1] !== wantR) {
    fail(`${file}: cycle 7 practises Reading Part ${r[1]}; the rotation gives unit ${n} Part ${wantR}`);
  }
  const wantW = WRITING_PART(n);
  const w = s.match(/Writing Part (\d) —/);
  if (!w) fail(`${file}: cycle 7's Writer's box does not name a B2 Business Vantage Writing part`);
  else if (+w[1] !== wantW) {
    const why = (n === 20 || n === 21) ? ' (Units 20 and 21 are the declared exchange)' : '';
    fail(`${file}: cycle 7 practises Writing Part ${w[1]}; the rotation gives unit ${n} Part ${wantW}${why}`);
  }
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
      fail(`${paperFile}: ${p.name} is ${p.marks} marks; the ${spec.split} split gives it ${want[p.name]}`);
    }
  });

  // part headings carry their own marks; they must add up to their paper
  const chunks = t.split(/h2\('PAPER /).slice(1);
  chunks.forEach((chunk, i) => {
    // ⚠ [^']*? stops dead at an escaped apostrophe, so a part titled
    // "Right, wrong or doesn\'t say" was invisible and Reading added to 10 of 15.
    // Allow escapes inside the title: (?:[^'\\]|\\.)*?
    const partMarks = [...chunk.matchAll(/part\('Part \d+(?:[^'\\]|\\.)*?\((\d+) marks\)'/g)].map(m => +m[1]);
    if (!partMarks.length) return;            // Speaking states its marks in boxes
    const sum = partMarks.reduce((a, b) => a + b, 0);
    if (sum !== papers[i].marks) {
      fail(`${paperFile}: ${papers[i].name} parts add to ${sum}, but the paper is ${papers[i].marks}`);
    }
  });

  // every answer row in the key must have one letter per question heading
  // ⚠ WIDENED at B2 Phase 2. The pattern allowed only 'A'|'B'|'C', which is the
  // B1 Preliminary option set. B2 Business Vantage Reading Part 3 has FOUR options
  // and Parts 1 and 2 match against up to six, so a three-letter pattern silently
  // forced the test paper below the examination it is preparing candidates for.
  // A harness must constrain the book to the examination, never below it.
  const rows = [...k.matchAll(/table\(\['Q',\s*((?:'\d+'\s*,?\s*)+)\]\s*,\s*\[\['Answer',\s*((?:'[A-F]'\s*,?\s*)+)\]\]/g)];
  if (!rows.length) fail(`${keyFile}: no answer rows found — the key states its answers in Q/Answer tables`);
  rows.forEach(m => {
    const qs = m[1].match(/\d+/g) || [];
    const as = m[2].match(/[A-F]/g) || [];
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
    // ⚠ Four occurrences in Book 2 of the same slip: the warning glyph typed BEFORE the
    // opening quote instead of after it, so it sits in the code and not in the string.
    // The parser's own message for it is "Invalid or unexpected token", which says nothing.
    if (/Invalid or unexpected token|Unexpected token/.test(msg)) {
      const src = fs.readFileSync(path.join(dir, file), 'utf8');
      const stray = src.split('\n').findIndex(l => /[,([]\s+⚠\s+['"]/.test(l));
      if (stray !== -1) {
        msg = `line ${stray + 1}: a ⚠ outside a string — it belongs after the opening quote, not before it`;
      }
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
const colloc = {};
units.forEach(f => {
  const s = fs.readFileSync(path.join(dir, f), 'utf8');
  const n = parseInt(f.match(/\d\d/)[0], 10);
  const lx = checkUnit(f, s, n);
  if (lx) lexis[f.match(/\d\d/)[0]] = lx;
  const cl = s.match(/const COLLOC = '((?:[^'\\]|\\.)*)'/);
  if (cl) colloc[f.match(/\d\d/)[0]] = cl[1];
  checkRotation(f, s, n);
});
keys.forEach(f => {
  const n = f.match(/\d\d/)[0];
  const up = path.join(dir, `unit${n}.js`);
  checkKey(f, fs.readFileSync(path.join(dir, f), 'utf8'),
           fs.existsSync(up) ? fs.readFileSync(up, 'utf8') : null);
});
if (units.length) checkOrdinals(units.map(f => path.join(dir, f)));
// B2 Business Vantage scores the four skills separately and averages them, so
// Reading 25 · Writing 25 · Listening 25 · Speaking 25 — the same arithmetic as B1
// Preliminary, looked up again in this level's own Phase 0 and not carried over on
// trust. ⚠ What DID change is the Writing lengths: 40–50 and 120–140.
const SPLIT_60 = { split: '15·15·15·15', want: { READING: 15, WRITING: 15, LISTENING: 15, SPEAKING: 15 } };
const SPLIT_100 = { split: '25·25·25·25', want: { READING: 25, WRITING: 25, LISTENING: 25, SPEAKING: 25 } };
[['midtest.js', 'midkey.js', { total: 60, maxQ: 30, ...SPLIT_60 }],
 ['endtest.js', 'endkey.js', { total: 100, maxQ: 50, ...SPLIT_100 }],
 ['midtest2.js', 'midkey2.js', { total: 60, maxQ: 30, ...SPLIT_60 }],
 ['endtest2.js', 'endkey2.js', { total: 100, maxQ: 50, ...SPLIT_100 }],
].forEach(([t, k, spec]) => {
  if (fs.existsSync(path.join(dir, t)) && fs.existsSync(path.join(dir, k))) checkTest(t, k, spec);
});
const nLex = checkLexis(lexis);
const nCol = checkColloc(colloc);
console.log(`-- ${nLex} lexis item(s) and ${nCol} collocation(s) declared; ${faults} fault(s)`);
process.exit(faults ? 1 : 0);
