/* Check passes A-F and I for journalists-intl/b1.

   Loads the real engine, then the unit's real data, and asserts the
   specification in PLAN.md against what the screens actually declare.
   Every failure names the file, the card and the criterion. */
const fs = require('fs'), path = require('path');
const BOOK = process.argv[2] || 'journalists-intl/b1';
const UNIT = process.argv[3] || 'unit1';
const N = Number(UNIT.replace('unit', ''));

global.window = global;
global.document = {
  createElement: () => ({ style: {}, dataset: {}, children: [], appendChild() {}, setAttribute() {},
    classList: { add() {}, remove() {}, toggle() {} }, addEventListener() {} }),
  addEventListener() {}, querySelector: () => null, querySelectorAll: () => [],
  body: { appendChild() {}, setAttribute() {}, classList: { add() {}, remove() {} } },
  documentElement: { style: {}, dataset: {}, setAttribute() {}, getAttribute: () => null,
    classList: { add() {}, remove() {}, toggle() {} }, appendChild() {} },
  head: { appendChild() {} },
  getElementById: () => null, readyState: 'complete'
};
global.localStorage = { getItem: () => null, setItem() {}, removeItem() {} };
global.navigator = { userAgent: 'node', language: 'en' };
global.location = { href: 'file:///', search: '', pathname: '/' };
global.matchMedia = () => ({ matches: false, addEventListener() {} });
global.speechSynthesis = { getVoices: () => [], speak() {}, cancel() {} };
global.requestAnimationFrame = fn => setTimeout(fn, 0);
global.addEventListener = () => {};
global.removeEventListener = () => {};
global.CustomEvent = function () {};
global.dispatchEvent = () => {};
global.fetch = () => Promise.reject(new Error('no network in the checker'));

const load = f => {
  const p = path.join(BOOK, 'assets/js', f);
  try { (new Function(fs.readFileSync(p, 'utf8')))(); }
  catch (e) { console.log('ENGINE LOAD FAIL', f, e.message); process.exit(2); }
};
['art.js', 'art-journalism.js', 'core.js', 'components.js', 'scene.js', 'tutor.js'].forEach(load);
const J = global.JRN;

/* capture what the data files declare */
const pages = {}, maps = {};
J.page = (id, def) => { pages[id] = def; };
J.unitMap = (u, rows) => { maps[u] = rows; };
J.glossary = g => { global.__gloss = g; };

const D = path.join(BOOK, 'assets/data', UNIT);
['meta.js', 'glossary.js', 'map.js'].forEach(f => {
  (new Function(fs.readFileSync(path.join(D, f), 'utf8')))();
});
const index = JSON.parse(fs.readFileSync(path.join(D, 'index.json'), 'utf8'));
index.forEach(r => (new Function(fs.readFileSync(path.join(D, r.sid + '.js'), 'utf8')))());

const fails = [];
const F = (crit, where, msg) => fails.push({ crit, where, msg });
const A = global.JRN.art;
const EX = J.ex || {};
const meta = J.unitMeta[UNIT];

/* ---------- house strings ---------- */
const LABELS = new Set(['In-class starter · speak before you read', 'Pre-class input',
  'Pre-class input · scripts printed below', 'In-class output',
  'In-class / homework output',
  'Practitioner track (optional for beginners) · experienced staff',
  'Practitioner track · read then discuss', 'Practitioner track · read then decide',
  'International edition · compare with where you work', 'Homework / self-study']);
const FURNITURE = {
  dragmatch: 'Click a meaning, then click the item it belongs to.',
  dragWhy: 'What each one means', clozeWhy: 'How each gap is decided',
  discussOk: 'Your answers are saved — this one is a discussion, so the book prints no single answer.',
  script: 'Listen to each line, or read the script. Every word is the book’s own.'
};

/* ---------- PASS A: schema ---------- */
if (index.length !== 20) F(3, UNIT, `20 screens expected, found ${index.length}`);
const PARTS = ['0','1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8','9','11','10'];
index.forEach((r, i) => {
  if (String(r.part) !== PARTS[i]) F(20, r.sid, `part ${r.part}, expected ${PARTS[i]}`);
  if (!LABELS.has(r.label)) F(63, r.sid, `label not in house set: "${r.label}"`);
});
let nCards = 0, nVis = 0, types = {}, refs = [];
const screens = index.map(r => {
  const id = `u${N}-s${String(r.ord).padStart(2, '0')}`;
  const p = pages[id];
  if (!p) { F(1, r.sid, `page ${id} did not register`); return null; }
  if (!p.objective) F(19, r.sid, 'no objective');
  (p.cards || []).forEach((c, ci) => {
    const w = `${r.sid}#${c.id || 'c?' }`;
    nCards++;
    ['id', 'ref', 'bookRef', 'type', 'title'].forEach(k => { if (!c[k]) F(23, w, `missing ${k}`); });
    if (!EX[c.type]) F(23, w, `type "${c.type}" is not in the engine EX registry`);
    types[c.type] = (types[c.type] || 0) + 1;
    refs.push(c.ref);
    if (c.visual) {
      nVis++;
      if (ci !== 0) F(59, w, 'visual not on card 1');
      if (c.visual.spot && !A.hasSpot(c.visual.spot)) F(60, w, `spot "${c.visual.spot}" not registered`);
    }
  });
  if ((p.cards || []).length !== r.n) F(4, r.sid, `index says ${r.n} cards, screen has ${(p.cards||[]).length}`);
  if (!(p.cards || []).some(c => c.visual)) F(59, r.sid, 'screen has no visual');
  return { r, p };
}).filter(Boolean);

/* ---------- PASS B+C: type contracts and answer integrity ---------- */
screens.forEach(({ r, p }) => p.cards.forEach(c => {
  const w = `${r.sid}#${c.id}`;
  if (c.type === 'cloze') {
    if (!c.answers) return F(25, w, 'cloze with no answers');
    if (!c.why) F(25, w, 'cloze with no why');
    const gaps = [...new Set([...(c.text || '').matchAll(/\[\[(\d+)\]\]/g)].map(m => m[1]))];
    gaps.forEach(g => {
      if (!(g in c.answers)) F(25, w, `gap ${g} has no answer entry`);
      if (!c.why || !c.why[g]) F(52, w, `gap ${g} has no why`);
    });
    Object.keys(c.answers).forEach(g => {
      if (!gaps.includes(g)) F(25, w, `answer ${g} has no gap in the text`);
    });
    const open = Object.values(c.answers).every(v => Array.isArray(v) && v.length === 0);
    if (!open) {
      if (!c.bank) F(25, w, 'closed cloze with no word bank');
      else Object.entries(c.answers).forEach(([g, v]) => {
        (v || []).forEach(a => {
          if (!c.bank.includes(a)) F(25, w, `answer "${a}" (gap ${g}) is not in the word bank`);
        });
      });
    }
    if (c.whyTitle && c.whyTitle !== FURNITURE.clozeWhy) F(64, w, `cloze whyTitle: "${c.whyTitle}"`);
  }
  if (c.type === 'dragmatch') {
    const ids = new Set((c.chips || []).map(x => x.id));
    const used = new Set();
    (c.targets || []).forEach(t => {
      if (!t.accept) return F(27, w, `target ${t.id} has no accept`);
      if (!ids.has(t.accept)) F(27, w, `target ${t.id} accepts "${t.accept}", which is not a chip`);
      if (used.has(t.accept)) F(27, w, `chip "${t.accept}" is accepted by two targets`);
      used.add(t.accept);
      if (!t.why) F(52, w, `target ${t.id} has no why`);
    });
    const extras = (c.chips || []).filter(x => /\(extra\)/.test(x.label));
    if (extras.length !== 1) F(26, w, `${extras.length} chips marked (extra), expected exactly 1`);
    const unused = (c.chips || []).filter(x => !used.has(x.id));
    if (unused.length !== 1) F(26, w, `${unused.length} chips unmatched, expected exactly 1`);
    else if (!/\(extra\)/.test(unused[0].label)) F(26, w, `the unmatched chip is not the one marked (extra)`);
    if (!c.after) F(3.1, w, 'dragmatch with an extra chip but no "after" explaining it');
    if (c.poolLabel !== FURNITURE.dragmatch) F(64, w, `poolLabel: "${c.poolLabel}"`);
    if (c.whyTitle !== FURNITURE.dragWhy) F(64, w, `whyTitle: "${c.whyTitle}"`);
  }
  if (c.type === 'quizset') {
    (c.items || []).forEach((it, k) => {
      const ok = (it.options || []).filter(o => o.ok);
      if (ok.length !== 1) F(28, w, `item ${k + 1} has ${ok.length} correct options, expected 1`);
      const tags = (it.options || []).map(o => o.t).join('/');
      if (tags !== 'True/False/Not Given') F(28, w, `item ${k + 1} options are "${tags}"`);
      const whys = new Set((it.options || []).map(o => o.why));
      if (whys.size !== 1) F(29, w, `item ${k + 1} options carry ${whys.size} different whys, expected 1`);
      (it.options || []).forEach(o => { if (!o.why) F(52, w, `item ${k + 1} option "${o.t}" has no why`); });
    });
  }
  if (c.type === 'editor') {
    (c.items || []).forEach((it, k) => {
      if (!it.wrong) F(30, w, `item ${k + 1} has no wrong sentence`);
      if (!Array.isArray(it.accept) || !it.accept.length) F(30, w, `item ${k + 1} has no accept array`);
      if (!it.why) F(30, w, `item ${k + 1} has no why`);
      (it.accept || []).forEach(a => { if (a === it.wrong) F(30, w, `item ${k + 1} accepts the wrong sentence`); });
    });
  }
  if (c.type === 'writer') {
    if (!c.minWords) F(31, w, 'writer with no minWords');
    if (!c.paras || !c.paras.length) F(31, w, 'writer with no paras');
    const purpose = (c.paras && c.paras[0] && c.paras[0].purpose) || '';
    const m = purpose.match(/(\d+)–(\d+)/);
    if (!m) F(31, w, `paras purpose does not state a word range: "${purpose}"`);
    else {
      if (Number(m[1]) !== c.minWords) F(31, w, `minWords ${c.minWords} but range says ${m[1]}–${m[2]}`);
      if (c.model && c.model.length) {
        const words = c.model.join(' ').split(/\s+/).filter(x => /[a-zÀ-ɏ]/i.test(x)).length;
        const lo = Number(m[1]), hi = Number(m[2]);
        if (words < lo || words > hi + 6)
          F(46, w, `model is ${words} words, outside the stated ${lo}–${hi}`);
      }
    }
    if (/☐/.test(c.instruction || '') && !c.coach) F(31, w, 'writer with a checklist but no coach');
  }
  if (c.type === 'report') {
    if (!c.minWords) F(31, w, 'report with no minWords');
    if (!c.stems || !c.stems.length) F(58, w, 'report with no stems');
  }
  if (c.type === 'discuss') {
    const q = (c.questions || []).length;
    if (q < 2 || q > 4) F(38, w, `${q} discussion questions, expected 2–4`);
    (c.questions || []).forEach((x, k) => {
      if (x.minWords !== 6) F(38, w, `question ${k + 1} minWords ${x.minWords}, expected 6`);
      if (x.rows !== 2) F(38, w, `question ${k + 1} rows ${x.rows}, expected 2`);
    });
    if (c.okMsg !== FURNITURE.discussOk) F(64, w, 'discuss okMsg is not the house string');
  }
  if (c.type === 'study' && c.playable) {
    if (c.instruction !== FURNITURE.script) F(64, w, 'script card instruction is not the house string');
    if (c.doneLabel !== 'I have listened') F(64, w, `script doneLabel: "${c.doneLabel}"`);
    (c.playable || []).forEach((line, k) => {
      const n = line.split(/\s+/).length;
      if (n < 3 || n > 28) F(43, w, `script line ${k + 1} is ${n} words, expected 3–28 (baseline 3–22)`);
    });
  }
}));

/* ---------- PASS D: counts ---------- */
const gapCount = screens.reduce((a, { p }) => a + p.cards.reduce((b, c) =>
  b + (c.type === 'cloze' ? new Set([...(c.text || '').matchAll(/\[\[(\d+)\]\]/g)].map(m => m[1])).size : 0), 0), 0);
const tfng = screens.reduce((a, { p }) => a + p.cards.reduce((b, c) =>
  b + (c.type === 'quizset' ? (c.items || []).length : 0), 0), 0);
const discussQ = screens.reduce((a, { p }) => a + p.cards.reduce((b, c) =>
  b + (c.type === 'discuss' ? (c.questions || []).length : 0), 0), 0);
const prod = (types.writer || 0) + (types.report || 0);
if (nVis !== 20) F(59, UNIT, `${nVis} visuals, expected 20`);
if (gapCount < 42 || gapCount > 48) F(33, UNIT, `${gapCount} gap items, expected 42–48 (baseline 45)`);
if (tfng < 10 || tfng > 12) F(28, UNIT, `${tfng} True/False/Not Given items, expected 10–12`);
if (discussQ < 20 || discussQ > 26) F(38, UNIT, `${discussQ} discussion questions, expected 20–26 (baseline 22)`);
if (prod !== 15) F(31, UNIT, `${prod} productive tasks, expected 15`);
if ((types.editor || 0) !== 1) F(36, UNIT, `${types.editor || 0} editor cards, expected 1`);
if ((types.checklist || 0) !== 1) F(56, UNIT, `${types.checklist || 0} checklist cards, expected 1`);

/* ---------- PASS I: pedagogy ---------- */
if ((meta.canDoOperator || []).length !== 8) F(13, UNIT, `${(meta.canDoOperator||[]).length} operator Can-Dos, expected 8`);
if ((meta.canDoPractitioner || []).length !== 5) F(13, UNIT, `${(meta.canDoPractitioner||[]).length} practitioner Can-Dos, expected 5`);
[...(meta.canDoOperator||[]), ...(meta.canDoPractitioner||[])].forEach((s, k) => {
  if (!/^I can /.test(s)) F(14, UNIT, `Can-Do ${k + 1} does not begin "I can"`);
});
const gl = Object.keys(global.__gloss || {});
if (gl.length !== 12) F(16, UNIT, `${gl.length} glossary terms, expected 12`);
Object.entries(global.__gloss || {}).forEach(([k, v]) => {
  if (!v || !v.mean) F(16, UNIT, `glossary "${k}" has no definition`);
});
/* every glossary term must be taught somewhere before the Review */
const before = screens.filter(s => s.r.ord < 20).map(s => JSON.stringify(s.p)).join(' ').toLowerCase();
gl.forEach(term => { if (!before.includes(term.toLowerCase())) F(18, UNIT, `glossary term "${term}" never appears before the Review`); });
/* objectives repeated per Part */
const byPart = {};
screens.forEach(({ r, p }) => { (byPart[r.part] = byPart[r.part] || []).push({ sid: r.sid, o: p.objective }); });
Object.entries(byPart).forEach(([part, rows]) => {
  const set = new Set(rows.map(x => x.o));
  if (set.size !== 1) F(19, `part ${part}`, `${set.size} different objectives across ${rows.length} screens`);
});
/* refs follow the house scheme */
refs.forEach(ref => {
  if (!/^(W-[A-Z]|S-[A-Z]|\d{1,2}[A-Z])$/.test(ref)) F(10, UNIT, `ref "${ref}" is not in the house scheme`);
});

/* ---------- report ---------- */
console.log(`\n== journalists-intl/b1 ${UNIT} ==`);
console.log(`screens ${index.length} | cards ${nCards} | visuals ${nVis} | gaps ${gapCount} | T/F/NG ${tfng} | discussQ ${discussQ} | productive ${prod}`);
console.log('card types:', Object.entries(types).sort((a,b)=>b[1]-a[1]).map(([k,v])=>`${k} ${v}`).join(', '));
console.log('distinct spots used:', new Set(screens.flatMap(s=>s.p.cards.filter(c=>c.visual).map(c=>c.visual.spot))).size);
if (!fails.length) { console.log('\nALL CHECKS PASSED'); process.exit(0); }
console.log(`\n${fails.length} FAILURE(S):`);
fails.forEach(f => console.log(`  [crit ${f.crit}] ${f.where}: ${f.msg}`));
process.exit(1);
