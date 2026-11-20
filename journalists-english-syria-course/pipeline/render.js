// Shared renderer for all three courses.
const fs = require('fs'), path = require('path'), dx = require('docx');
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, C } = L;

const SPINE = { 1: C.teal, 2: C.navy, 3: C.orange };
const LFILL = { 1: C.lteal, 2: C.lblue, 3: C.lorange };
const fig = (n, w, h) => new dx.Paragraph({ spacing: { before: 100, after: 140 }, children: [
  new dx.ImageRun({ data: fs.readFileSync(path.join(__dirname, '../figures', n + '.png')), transformation: { width: w, height: h }, type: 'png' }) ] });

const letters = 'abcdefgh';
let Q = 0;                                   // running question number within a session
const resetQ = () => { Q = 0; };
const qn = () => ++Q;

// shuffle with a fixed seed so the printed order is stable but not the key order
function shuffled(arr, seed) {
  const a = arr.slice(); let s = seed;
  for (let i = a.length - 1; i > 0; i--) { s = (s * 1103515245 + 12345) & 0x7fffffff; const j = s % (i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}

const DOC = (title, lines) => box(title, lines, 'FFFFFF', C.navy);          // reading = document facsimile
const AUDIO = (title, turns) => L.dlg(title, turns);                        // listening
const LANG = (title, items) => box(title, items, C.lblue, C.navy);          // language box
const ROLE = (title, items) => box(title, items, C.lorange, C.orange);      // role-play card
const MODEL = (title, items) => box(title, items, C.lyellow, C.orange);     // writing model
const CASE = (title, items) => box(title, items, C.lyellow, C.orange);
const ELICIT = items => box('Your turn — this part is about YOUR work, not the text', items, C.grey, C.navy);
const CONTEST = items => box('Decide together — two people could answer each of these differently', items, C.grey, C.navy);

function taskHead(t) { return p('**' + t + '**', { color: C.navy, after: 60 }); }

function renderMatch(m, seed, answers, tag) {
  const right = shuffled(m.pairs.map(x => x[1]).concat(m.extra ? [m.extra] : []), seed);
  const rows = m.pairs.map((pr, i) => [ '**' + qn() + '**', pr[0], '____' ]);
  answers.push(...m.pairs.map((pr, i) => ({ q: Q - m.pairs.length + 1 + i, a: letters[right.indexOf(pr[1])].toUpperCase(), tag })));
  const out = [ taskHead(m.stem) ];
  out.push(table(['', 'In the text', 'Letter'], rows, [0.5, 5, 0.9]));
  out.push(p('_Choose from:_  ' + right.map((r, i) => '**' + letters[i].toUpperCase() + '** ' + r).join('   ·   '), { after: 140 }));
  return out;
}
function renderTF(list, stem, answers, tag, three) {
  const out = [ taskHead(stem) ];
  out.push(table(['', 'Statement', three ? 'T / F / NG' : 'T / F'],
    list.map(x => { const n = qn(); answers.push({ q: n, a: x.a, tag }); return ['**' + n + '**', x.s, '____']; }),
    [0.5, 5.4, 1]));
  out.push(sp(60));
  return out;
}
function renderGap(g, answers, tag) {
  const out = [ taskHead(g.stem) ];
  const re = /\{(\d+)\}/g;
  const txt = (Array.isArray(g.text) ? g.text : [g.text]).map(line =>
    line.replace(re, () => '(' + qn() + ') ______'));
  g.answers.forEach((a, i) => answers.push({ q: Q - g.answers.length + 1 + i, a, tag }));
  out.push(box(null, txt, 'FFFFFF', C.teal));
  if (g.bank && g.bank.length) out.push(p('_Word bank:_  ' + shuffled(g.bank, 7).map(b => '**' + b + '**').join(' · '), { after: 140 }));
  return out;
}
function renderGapRows(g, answers, tag) {
  const out = [ taskHead(g.stem) ];
  out.push(table(['', 'Complete', ''], g.rows.map(r => { const n = qn(); answers.push({ q: n, a: r[1], tag }); return ['**' + n + '**', r[0], '______________']; }), [0.5, 3.2, 3.2]));
  out.push(sp(60));
  return out;
}

function renderCycle(cy, lvl, answers) {
  const o = [];
  o.push(h2(cy.code + '  ' + cy.title));
  // READING
  o.push(h3('Read'));
  o.push(DOC(cy.reading.title, cy.reading.lines));
  o.push(...renderMatch(cy.rMatch, cy.seed || 11, answers, 'R-structure'));
  o.push(...renderTF(cy.rTF, cy.rTFstem || 'True or False?', answers, 'R-detail', lvl > 1));
  o.push(...renderGap(cy.rGap, answers, 'R-whole'));
  // LISTENING
  o.push(h3('Listen'));
  o.push(p('_Your teacher will read this three times. **Do one task after each reading.**_', { color: '595959' }));
  o.push(AUDIO(cy.listen.track, cy.listen.turns));
  o.push(...renderMatch(cy.lMatch, (cy.seed || 11) + 3, answers, 'L-structure'));
  o.push(...renderTF(cy.lTF, cy.lTFstem || 'True or False?', answers, 'L-detail', lvl > 1));
  o.push(...renderGapRows(cy.lGap, answers, 'L-whole'));
  // ELICIT — moved here, between the input and the practice, where it has time and a job
  o.push(h3('Your turn'));
  o.push(ELICIT(cy.elicit.flatMap((e, i) => [
    '**' + (i + 1) + '  ' + e.ask + '**',
    '_In pairs:_ ' + e.pair,
    '_Then:_ ' + e.out ])));
  // LANGUAGE
  o.push(LANG(cy.lang.title, cy.lang.items));
  // ROLE PLAY
  o.push(h3('Say it'));
  o.push(ROLE('Role play · ' + cy.role.setting, [
    '**Student A.** ' + cy.role.cardA,
    '**Student B.** ' + cy.role.cardB,
    // the scaffold strips back as the courses rise: Course 1 is given the words and the order,
    // Course 2 the points but not the order or the wording, Course 3 only the ground to cover.
    ['', '**Use these, in this order:**',
         '**Cover all of these. You choose the order and your own words:**',
         '**Cover this ground. No phrases are given — find your own:**'][lvl],
    ...cy.role.strip.map(x => '☐ ' + x),
    '⚠ **Now swap roles and do it again.** ' + cy.role.swap,
  ]));
  // WRITING
  o.push(h3('Write it'));
  o.push(MODEL('A model · ' + cy.wModel.title, cy.wModel.lines));
  o.push(...renderMatch(cy.wMatch, (cy.seed || 11) + 6, answers, 'W-structure'));
  o.push(...renderTF(cy.wTF, cy.wTFstem || 'True or False, about this kind of writing?', answers, 'W-rules', lvl > 1));
  o.push(MODEL('Now complete it', cy.wGapped.lines.map(l => l.replace(/\{(\d+)\}/g, () => '(' + qn() + ') ______'))));
  cy.wGapped.answers.forEach((a, i) => answers.push({ q: Q - cy.wGapped.answers.length + 1 + i, a, tag: 'W-whole' }));
  if (cy.wGapped.bank) o.push(p('_Word bank:_  ' + shuffled(cy.wGapped.bank, 9).map(b => '**' + b + '**').join(' · '), { after: 140 }));
  o.push(box('The frame', cy.wSkel, C.grey, C.navy));
  // keep the prompt with its ruled lines, or the lines move to the next page alone
  o.push(p('**Now write your own.** ' + cy.wTask.brief + '  _(' + cy.wTask.words + ')_', { keep: true }));
  o.push(...L.lines(lvl === 1 ? 5 : lvl === 2 ? 7 : 9));
  return o;
}

function renderSession(s, lvl, answers) {
  const o = [];
  resetQ();
  o.push(h1('Session ' + s.n + '  ' + s.title, { brk: true }));
  o.push(fig('cycle', 620, 87));
  o.push(box('In this session', [
    '**What it is for.** ' + s.aim,
    '**' + s.cycles[0].code + '**  ' + s.cycles[0].title,
    '**' + s.cycles[1].code + '**  ' + s.cycles[1].title,
    '**' + s.cycles[2].code + '**  ' + s.cycles[2].title,
    '**Case study.** ' + s.caseStudy.sector,
  ], LFILL[lvl], SPINE[lvl]));
  o.push(box('Words for this session', [s.vocab.map(v => '**' + v + '**').join(' · ')], C.grey, C.navy));
  s.cycles.forEach(cy => o.push(...renderCycle(cy, lvl, answers)));
  // CASE STUDY
  o.push(h2('Case study · ' + s.caseStudy.sector, { brk: true }));
  o.push(p('_Work in fours. You have three documents. Read them, decide, and write._', { color: '595959' }));
  o.push(CASE('The situation', [s.caseStudy.situation]));
  s.caseStudy.docs.forEach(d => o.push(DOC(d.title, d.lines)));
  o.push(...renderTF(s.caseStudy.tf, 'True or False, from the three documents?', answers, 'C-detail', lvl > 1));
  o.push(...renderMatch(s.caseStudy.match, 31, answers, 'C-structure'));
  o.push(...renderGap(s.caseStudy.gapOut, answers, 'C-whole'));
  o.push(CONTEST(s.caseStudy.contest.flatMap(c => [
    '**' + c.ask + '**',
    '_One view:_ ' + c.a,
    '_The other:_ ' + c.b,
    '⚠ _Your group must give **one** answer, and say what it costs you._ ' + c.out ])));
  o.push(box('Can you do these now?', s.canDo.map(c => '☐ ' + c), LFILL[lvl], SPINE[lvl]));
  o.push(box('Homework', [s.homework], C.grey, C.navy));
  return { children: o, count: Q };
}
module.exports = { renderSession, fig, SPINE, LFILL, DOC, AUDIO, LANG, ROLE, MODEL, CASE, ELICIT, CONTEST, shuffled };
