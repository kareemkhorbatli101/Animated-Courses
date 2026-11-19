// The 16 check passes. Usage: node qa-course.js <level> <session-file>...
const fs = require('fs');
let faults = 0, warns = 0;
const fail = (w, m) => { console.log('  ✗ ' + w + ': ' + m); faults++; };
const warn = (w, m) => { console.log('  – ' + w + ': ' + m); warns++; };
const BAND = { 1: { read: [110, 190], write: [30, 60], turns: [8, 11] },
               2: { read: [190, 290], write: [80, 150], turns: [10, 13] },
               3: { read: [270, 360], write: [150, 250], turns: [12, 17] } };
const wc = a => (Array.isArray(a) ? a.join(' ') : String(a)).replace(/\*\*|_|⚠/g, '').split(/\s+/).filter(Boolean).length;
const gapCount = a => ((Array.isArray(a) ? a.join(' ') : String(a)).match(/\{\d+\}/g) || []).length;

// Stray characters. A single Chinese character once reached a can-do statement in a finished
// session file and passed every structural check, because nothing here reads the prose as text.
// Everything these books print is Latin script plus a short list of typographic marks.
// Typographic marks and technical notation these books legitimately print. Superscripts and
// the arrow were added when the water-engineering session needed m\u00b3 and a 'fell to' arrow;
// anything outside this list is an accident, which is what the check is for.
const ALLOWED_NON_ASCII = new Set([...'·—–⚠☐°\u2019\u201c\u201d\u2018…\u00a0\u00b2\u00b3\u2192\u00b1\u00d7', '\u{1F50A}']);
function scanText(where, v) {
  if (typeof v === 'string') {
    const bad = [...v].filter(ch => ch.charCodeAt(0) > 127 && !ALLOWED_NON_ASCII.has(ch));
    if (bad.length) fail(where, `stray character(s) ${[...new Set(bad)].join(' ')} in "${v.slice(0, 60)}"`);
  } else if (Array.isArray(v)) v.forEach(x => scanText(where, x));
  else if (v && typeof v === 'object') Object.values(v).forEach(x => scanText(where, x));
}

function check(lvl, S) {
  const B = BAND[lvl];
  const allVocab = [];
  const sectors = [];
  S.forEach(s => {
    const w = 'S' + s.n;
    scanText(w, s);
    // 1 · structure
    if (s.cycles.length !== 3) fail(w, `${s.cycles.length} cycles, expected 3`);
    if (!s.caseStudy) fail(w, 'no case study');
    if (!s.aim) fail(w, 'no aim');
    if (!s.homework) fail(w, 'no homework');
    if (s.canDo.length !== 3) fail(w, `${s.canDo.length} can-do statements, expected 3`);
    // 9 · vocabulary
    if (s.vocab.length !== 12) fail(w, `${s.vocab.length} vocabulary items, expected 12`);
    s.vocab.forEach(v => { if (allVocab.includes(v)) fail(w, `vocabulary "${v}" already used`); allVocab.push(v); });
    sectors.push(s.caseStudy.sector);

    s.cycles.forEach(cy => {
      const c = w + ' ' + cy.code;
      // 3 · all three forms, every skill, every cycle
      [['rMatch','reading structure'],['rTF','reading detail'],['rGap','reading whole'],
       ['lMatch','listening structure'],['lTF','listening detail'],['lGap','listening whole'],
       ['wMatch','writing structure'],['wTF','writing rules'],['wGapped','writing whole']]
        .forEach(([k, label]) => { if (!cy[k]) fail(c, 'missing ' + label + ' task (' + k + ')'); });
      // 12 · the elicit block: two questions, each with a pairing AND an output
      if (!cy.elicit || cy.elicit.length !== 2) fail(c, 'needs exactly 2 elicit questions');
      else cy.elicit.forEach((e, i) => ['ask','pair','out'].forEach(k => {
        if (!e[k] || e[k].length < 8) fail(c, `elicit ${i + 1} has no ${k === 'ask' ? 'question' : k === 'pair' ? 'pairing instruction' : 'output'}`); }));
      // 5 · writing scaffold complete
      ['wModel','wGapped','wSkel','wTask'].forEach(k => { if (!cy[k]) fail(c, 'writing scaffold missing ' + k); });
      if (!cy.wTask.sample || !cy.wTask.sample.length) fail(c, 'writing task has no sample answer');
      if (cy.wSkel.length < 3) fail(c, 'frame has fewer than 3 labelled parts');
      // 6 · role play scaffold, four parts
      if (!cy.role) fail(c, 'no role play');
      else ['cardA','cardB','strip','swap'].forEach(k => { if (!cy.role[k] || !cy.role[k].length) fail(c, 'role play missing ' + k); });
      // the renderer already prints 'Now swap roles and do it again.' before cy.role.swap.
      // 35 of 36 cycles opened the field with 'Swap.' as well, so the printed page read
      // 'Now swap roles and do it again. Swap. The second time...'. Caught by eye, not by a check.
      if (cy.role && /^\s*swap\b/i.test(cy.role.swap || '')) fail(c, 'role.swap repeats the word the renderer already prints');
      // the scaffold must strip back: Course 1 hands over the words, Courses 2 and 3 do not.
      if (lvl > 1 && (cy.role.strip || []).some(x => /_{3,}/.test(x)))
        fail(c, `Course ${lvl} role-play prompts must not hand over the wording (found a blank to fill)`);
      // 10 · lengths within band
      const rw = wc(cy.reading.lines);
      if (rw < B.read[0] || rw > B.read[1]) fail(c, `reading ${rw} words, band ${B.read[0]}–${B.read[1]}`);
      if (cy.reading.words && Math.abs(cy.reading.words - rw) > 25) warn(c, `declared ${cy.reading.words} words, measured ${rw}`);
      const t = cy.listen.turns.length;
      if (t < B.turns[0] || t > B.turns[1]) fail(c, `${t} turns, band ${B.turns[0]}–${B.turns[1]}`);
      // 15 · coverage and non-overlap of the reading battery
      const lines = cy.reading.lines.length;
      const tested = cy.rTF.map(x => x.line).filter(Boolean);
      if (tested.length !== cy.rTF.length) fail(c, 'every reading True/False item must name the line it tests');
      const dup = tested.filter((x, i) => tested.indexOf(x) !== i);
      if (new Set(tested).size < Math.min(3, lines)) warn(c, 'reading True/False items concentrate on too few lines');
      // Every reading battery must test what the text does NOT say — but the two levels express
      // that differently, and the Course 1 form of this check fired on correct Course 2 work.
      // Course 1 has no "Not given", so it asks a False question about an absent fact.
      // Course 2 and 3 have NG, which is the better instrument; require that instead.
      if (lvl === 1) {
        const notSaid = cy.rTF.filter(x => x.a === 'F' && /does not say|say(s)? (what|how|who|when)/i.test(x.s)).length;
        if (notSaid < 1) warn(c, 'reading True/False should include an item about what the text does NOT say');
      } else if (!cy.rTF.some(x => x.a === 'NG')) {
        warn(c, 'reading True/False should include at least one "Not given" item at this level');
      }
      // gap integrity
      [['rGap', cy.rGap], ['wGapped', cy.wGapped]].forEach(([k, g]) => {
        const n = gapCount(g.text || g.lines), a = (g.answers || []).length;
        if (n !== a) fail(c, `${k}: ${n} gaps but ${a} answers`);
        if (g.bank && g.bank.length && g.bank.length < a) fail(c, `${k}: word bank smaller than the number of gaps`);
        if (lvl === 1 && k === 'rGap' && (!g.bank || !g.bank.length)) fail(c, 'Course 1 gap-fills must give a word bank');
        if (lvl > 1 && g.bank && g.bank.length) fail(c, `${k}: Course ${lvl} gap-fills must NOT give a word bank`);
      });
      // match integrity
      [['rMatch', cy.rMatch], ['lMatch', cy.lMatch], ['wMatch', cy.wMatch]].forEach(([k, m]) => {
        if (!m.extra) fail(c, k + ': a matching task needs at least one distractor');
        if (m.pairs.length < 3) fail(c, k + ': fewer than 3 pairs');
        const rights = m.pairs.map(x => x[1]);
        if (new Set(rights).size !== rights.length) fail(c, k + ': two pairs share an answer');
        if (rights.includes(m.extra)) fail(c, k + ': the distractor is also a correct answer');
      });
      // listening items must name the turn they test
      // Two consecutive turns by the same speaker print as two rows with one name repeated,
      // which reads as a broken table. Found by eye in 16.3 after the harness passed it.
      cy.listen.turns.forEach((t, i) => { if (i && t[0] === cy.listen.turns[i - 1][0])
        fail(c, `turns ${i} and ${i + 1} are both spoken by ${t[0]}`); });
      if (cy.lTF.some(x => !x.turn)) fail(c, 'every listening True/False item must name the turn it tests');
      if (cy.lTF.some(x => x.turn > cy.listen.turns.length)) fail(c, 'a listening item names a turn that does not exist');
      // T/F answer legality
      cy.rTF.concat(cy.lTF, cy.wTF).forEach(x => {
        const ok = lvl > 1 ? ['T','F','NG'] : ['T','F'];
        if (!ok.includes(x.a)) fail(c, `True/False answer "${x.a}" is not one of ${ok.join('/')}`);
      });
      // 16 · item budget — the clock, not taste, sets this
      const items = cy.rMatch.pairs.length + cy.rTF.length + (cy.rGap.answers||[]).length
                  + cy.lMatch.pairs.length + cy.lTF.length + cy.lGap.rows.length
                  + cy.wMatch.pairs.length + cy.wTF.length + (cy.wGapped.answers||[]).length;
      if (items > 38) fail(c, `${items} closed items in one cycle; the 31-minute clock allows 38 (about 23 seconds each)`);
      if (items < 30) warn(c, `${items} closed items — the cycle is under-used`);
      // writing length
      const sw = wc(cy.wTask.sample);
      if (sw < B.write[0] - 5 || sw > B.write[1] + 15) fail(c, `sample answer ${sw} words, band ${B.write[0]}–${B.write[1]}`);
    });
    // case study
    const cs = s.caseStudy;
    if (cs.docs.length !== (lvl === 1 ? 2 : 3) && cs.docs.length !== 3) fail(w, `case study has ${cs.docs.length} documents`);
    ['tf','match','gapOut','contest','sample'].forEach(k => { if (!cs[k]) fail(w, 'case study missing ' + k); });
    if (!cs.contest || cs.contest.length !== 3) fail(w, 'case study needs exactly 3 contested questions');
    else cs.contest.forEach((q, i) => ['ask','a','b','out'].forEach(k => {
      if (!q[k] || q[k].length < 8) fail(w, `contested question ${i + 1} has no ${k === 'ask' ? 'question' : k === 'out' ? 'output' : 'side ' + k}`); }));
    const cg = gapCount(cs.gapOut.text), ca = cs.gapOut.answers.length;
    if (cg !== ca) fail(w, `case output: ${cg} gaps but ${ca} answers`);
    if (!cs.sample.length) fail(w, 'case study has no sample output');
  });
  // 8 · sector rotation
  const dupSec = sectors.filter((x, i) => sectors.indexOf(x) !== i);
  if (dupSec.length) fail('course', 'sector used twice: ' + [...new Set(dupSec)].join(', '));
  if (S.length === 12 && new Set(sectors).size !== 12) fail('course', `${new Set(sectors).size} distinct sectors, expected 12`);
  console.log(`-- ${S.length} session(s) · ${allVocab.length} vocabulary items · ${faults} fault(s) · ${warns} warning(s)`);
  return faults;
}
module.exports = { check };
if (require.main === module) {
  const lvl = +process.argv[2];
  const files = process.argv.slice(3);
  const S = files.map(f => require('./' + f.replace(/\.js$/, '')));
  process.exit(check(lvl, S) ? 1 : 0);
}
