/* check.js — the quality gate.
 *   spec lock        every item declares a real task and a CEFR inside its range
 *   budget lock      a block's items match the published budget
 *   difficulty lock  passages inside ETS's own word and Flesch-Kincaid bands
 *   item lock        one correct option, >= 3 options, a rationale on every one
 *   key lock         T/F cite a line, NI cites none, letterbox `given` in range
 *   shape lock       every exercise kind's own structural rules (below)
 *   count lock       a scene's declared `n` equals the items it really contains
 *   solver lock      every kind used in the book has a branch in solver.js
 *   echo lock        no stem is copied verbatim into another unit
 */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT,'assets/spec.js'));
require(path.join(ROOT,'assets/book.js'));
require(path.join(ROOT,'assets/scenes.js'));
const SOLVER = fs.readFileSync(path.join(__dirname,'solver.js'),'utf8');
const SOLVED = new Set([...SOLVER.matchAll(/case '([a-z-]+)'/g)].map(m=>m[1]));
const kindsUsed = new Map();   /* kind -> first place it appears */
const stems = new Map();       /* normalised stem -> first place it appears */
const SPEC = window.SPEC, B = window.BOOK;

let pass = 0, fail = 0;
const problems = [];
function ok(m){ pass++; }
function bad(where, m){ fail++; problems.push(`${where}: ${m}`); }

function loadPage(file){
  delete window.PAGE;
  const src = fs.readFileSync(file,'utf8');
  new Function('window', src + '\n;return window.PAGE;')(window);
  return window.PAGE;
}

function words(s){ return String(s).replace(/<[^>]+>/g,' ').split(/\s+/).filter(x=>/[a-z]/i.test(x)).length; }
function plain(s){ return String(s).replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim(); }

function checkOptions(where, opts, min){
  min = min || 3;
  if (!Array.isArray(opts) || opts.length < min) return bad(where,`needs >= ${min} options, has ${opts?opts.length:0}`);
  const right = opts.filter(o=>o.correct);
  if (right.length !== 1) return bad(where,`needs exactly 1 correct option, has ${right.length}`);
  opts.forEach((o,i)=>{ if (!o.why) bad(where,`option ${i+1} ("${plain(o.text).slice(0,30)}...") has no rationale`); });
  ok();
}

/* The scored items a scene really contains. The budget is built on `n`, so a
   scene that declares the wrong `n` corrupts the whole unit's accounting. */
function trueCount(s){
  switch (s.kind){
    case 'read-only': return 0;
    case 'paragraph': case 'write-email': case 'discussion':
    case 'repeat': case 'interview': return s.n;        /* self-assessed */
    case 'choice': case 'register-dial': return 1;
    case 'match': return (s.pairs || []).length;
    case 'sort': return (s.items || []).length;
    case 'wordbank': return (s.items || []).length;
    case 'sequence': return (s.steps || []).length;
    case 'table': case 'notes': return (s.gaps || []).length;
    case 'order': return 1;
    case 'orderset': return (s.items || []).length;
    case 'cloze': return (s.gaps || []).length;
    default: return s.items ? s.items.length : s.n;
  }
}

function checkScene(where, s, unit){
  /* `n` is not "how many questions". It is "how many count against an ETS
     task budget", and a scene may name its task for CEFR banding while
     contributing nothing to the budget (extra practice beyond the published
     count). So the only thing provable here is: a non-zero `n` must equal the
     items the scene really holds. A wrong zero is invisible to this check and
     is caught instead by the per-unit budget lock at the bottom of the file. */
  const real = trueCount(s);
  if (s.n && real !== s.n)
    bad(where, `declares n=${s.n} but contains ${real} gradable items`);
  else if (!s.n && real === 0 && s.kind !== 'read-only')
    bad(where, 'teaches nothing gradable and is not a read-only panel');
  else ok();

  if (s.task && !SPEC.TASKS[s.task]) return bad(where,`unknown task id "${s.task}"`);
  if (s.task && s.cefr && !SPEC.bandOk(s.task, s.cefr)) {
    const t = SPEC.TASKS[s.task];
    return bad(where,`CEFR ${s.cefr} outside ${t.name}'s published range ${t.cefr[0]}-${t.cefr[1]}`);
  }
  if (s.options) checkOptions(where, s.options);
  (s.items||[]).forEach((it,i)=>{
    /* minimal-pairs is a two-way contrast by definition; its own rule below
       checks it with a minimum of two. */
    if (it.options && s.kind !== 'minimal-pairs') checkOptions(`${where} item ${i+1}`, it.options);
    if (s.kind === 'tfni'){
      if (!['T','F','NI'].includes(it.answer)) bad(where,`item ${i+1} answer must be T, F or NI`);
      else if (it.answer === 'NI' && it.line !== null) bad(where,`item ${i+1} is NI so line must be null`);
      else if (it.answer !== 'NI' && !(it.line > 0)) bad(where,`item ${i+1} is ${it.answer} so it must cite a line`);
      else ok();
      if (!it.why) bad(where,`item ${i+1} has no rationale`);
    }
    if (s.kind === 'letterbox'){
      if (!it.answer) return bad(where,`item ${i+1} has no answer`);
      if (String(it.text).indexOf('___') < 0) bad(where,`item ${i+1} stem has no ___ slot`);
      (it.given||[]).forEach(g=>{ if (g < 0 || g >= it.answer.length)
        bad(where,`item ${i+1} given index ${g} outside "${it.answer}"`); });
      if ((it.given||[]).length >= it.answer.length) bad(where,`item ${i+1} gives every letter`);
      /* The stem shows the first letters before the gap ("A c___ judges...").
         If it does, they must match the answer - otherwise a stem and its
         answer can silently disagree, which no structural check would catch. */
      const cue = String(it.text).match(/(?:^|\s)([A-Za-z]{1,4})_{2,}/);
      if (cue && !it.answer.toLowerCase().startsWith(cue[1].toLowerCase()))
        bad(where,`item ${i+1} stem shows "${cue[1]}" but the answer is "${it.answer}"`);
      else ok();
    }
  });
  if (s.kind === 'order'){
    if (!s.target) bad(where,'order scene has no target');
    if (!s.extra || !s.extra.length) bad(where,'order scene has no distractor tiles — the last tile would be free');
    else ok();
  }

  /* ------------------------------------------------- shape lock ------- */
  const need = (c, m) => { if (!c) bad(where, m); else ok(); };
  const uniq = (arr, what) => {
    const seen = new Set();
    arr.forEach(x => { if (seen.has(x)) bad(where, `${what} "${String(x).slice(0,40)}" appears twice`); seen.add(x); });
  };
  const whys = (arr, what) => arr.forEach((x, i) =>
    { if (!x.why) bad(where, `${what} ${i + 1} has no rationale`); });

  if (s.kind === 'match'){
    const pairs = s.pairs || [];
    need(pairs.length >= 3, 'a matching exercise needs at least 3 pairs');
    uniq(pairs.map(p => p.word), 'word');
    uniq(pairs.map(p => p.pin || p.word), 'target');
    whys(pairs, 'pair');
    if (s.scene){
      const pins = s.pins || [];
      need(pins.length === pairs.length, `${pins.length} pins for ${pairs.length} pairs`);
      const ids = new Set(pins.map(p => p.id));
      pairs.forEach((p, i) => { if (!ids.has(p.pin)) bad(where, `pair ${i + 1} points at pin "${p.pin}", which does not exist`); });
      pins.forEach((p, i) => {
        if (!(p.x >= 0 && p.x <= 100 && p.y >= 0 && p.y <= 100))
          bad(where, `pin ${i + 1} at ${p.x},${p.y} is off the picture`);
        if (p.tx === undefined) bad(where, `pin ${i + 1} has no leader target, so its label will sit on top of what it names`);
      });
      /* Two labels that overlap make the exercise unanswerable. A label is
         `w` px wide on a 1000px picture and about 34px tall on 560. */
      for (let i = 0; i < pins.length; i++) for (let j = i + 1; j < pins.length; j++){
        const a = pins[i], b2 = pins[j];
        const wa = (a.w || 150) / 20, wb = (b2.w || 150) / 20;   /* half-width, in % */
        if (Math.abs(a.x - b2.x) < wa + wb && Math.abs(a.y - b2.y) < 6.5)
          bad(where, `labels ${i + 1} and ${j + 1} overlap`);
      }
      const names = (window.SCENES && window.SCENES.parts) || null;
      if (names) (s.scene.parts || []).forEach(q => {
        if (!names[q.p]) bad(where, `scene uses unknown part "${q.p}"`);
      });
    } else {
      pairs.forEach((p, i) => { if (!p.label && !p.clue) bad(where, `pair ${i + 1} has no meaning to match against`); });
    }
  }

  if (s.kind === 'sort'){
    const bins = s.bins || [], items = s.items || [];
    need(bins.length >= 2, 'a sort needs at least 2 columns');
    need(items.length >= bins.length * 2, `${items.length} cards for ${bins.length} columns is too thin`);
    uniq(items.map(i => i.text), 'card');
    whys(items, 'card');
    const ids = new Set(bins.map(b => b.id));
    items.forEach((it, i) => { if (!ids.has(it.bin)) bad(where, `card ${i + 1} goes to "${it.bin}", which is not a column`); });
    bins.forEach(b => { if (!items.some(i => i.bin === b.id)) bad(where, `column "${b.label}" gets no cards`); });
  }

  if (s.kind === 'wordbank'){
    const items = s.items || [], extra = s.extra || [];
    need(extra.length >= 1, 'a word bank with no spare words leaves the last gap free');
    uniq(items.map(i => i.answer).concat(extra), 'bank word');
    whys(items, 'gap');
    items.forEach((it, i) => {
      const n2 = String(it.text).split('___').length - 1;
      if (n2 !== 1) bad(where, `item ${i + 1} has ${n2} gaps; it must have exactly one`);
    });
  }

  if (s.kind === 'sequence'){
    const steps = s.steps || [];
    need(steps.length >= 4, 'a sequence shorter than 4 steps is not a process');
    uniq(steps.map(x => x.text), 'step');
    whys(steps, 'step');
    const got = steps.map(x => x.pos).sort((a, b) => a - b).join(',');
    const want = steps.map((_, i) => i + 1).join(',');
    need(got === want, `positions are ${got}; they must be ${want}`);
  }

  if (s.kind === 'errorfix'){
    (s.items || []).forEach((it, i) => {
      if (!it.wrong || !it.right) return bad(where, `item ${i + 1} needs both wrong and right`);
      if (it.wrong === it.right) bad(where, `item ${i + 1}: the correction is the same word`);
      /* The grader normalises punctuation and case away before comparing, so a
         correction that only changes those cannot be marked at all. */
      const flat = t => String(t).toLowerCase().replace(/[^a-z0-9' ]+/g, '').replace(/\s+/g, ' ').trim();
      if (flat(it.wrong) === flat(it.right))
        bad(where, `item ${i + 1}: "${it.wrong}" to "${it.right}" differs only in punctuation or case, which the grader cannot see`);
      else ok();
      const re = new RegExp('(^|\\s)' + it.wrong.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '($|[\\s.,!?;:])');
      if (!re.test(String(it.text))) bad(where, `item ${i + 1}: "${it.wrong}" is not a whole word in the sentence`);
      else ok();
      /* An exercise is only honest if swapping that one word really does repair
         the sentence. Eight items failed this and nothing caught them, because
         the renderer and the grader both only compare the clicked word. The
         author must now write out the corrected sentence, and it must be what
         the substitution actually produces. */
      if (!it.fixed) bad(where, `item ${i + 1} does not give the corrected sentence`);
      else {
        const got = String(it.text).replace(re, (m, a, c) => a + it.right + c);
        if (got !== it.fixed)
          bad(where, `item ${i + 1}: replacing "${it.wrong}" with "${it.right}" gives "${got}", not the stated "${it.fixed}"`);
        else if (got === String(it.text))
          bad(where, `item ${i + 1}: the correction changes nothing`);
        else ok();
      }
      if (!it.why) bad(where, `item ${i + 1} has no rationale`);
    });
  }

  if (s.kind === 'selectintext'){
    (s.items || []).forEach((it, i) => {
      const sents = (String(it.text).match(/[^.!?]+[.!?]+/g) || []).map(x => x.trim());
      if (sents.length < 3) bad(where, `item ${i + 1} has only ${sents.length} sentences to choose between`);
      const hit = sents.some(x => x.replace(/\s+/g, ' ') === String(it.answer).replace(/\s+/g, ' ').trim());
      if (!hit) bad(where, `item ${i + 1}: the answer is not one of the sentences in the paragraph`);
      else ok();
      if (!it.why) bad(where, `item ${i + 1} has no rationale`);
      if (!it.prompt) bad(where, `item ${i + 1} has no question`);
    });
  }

  if (s.kind === 'table' || s.kind === 'notes'){
    const body = s.kind === 'table'
      ? (s.rows || []).map(r => r.join(' ')).join(' ')
      : (s.lines || []).join(' ');
    const slots = body.split('___').length - 1;
    const gaps = s.gaps || [];
    need(slots === gaps.length, `${slots} gaps in the text but ${gaps.length} answers`);
    whys(gaps, 'gap');
    gaps.forEach((g, i) => { if (!g.answer) bad(where, `gap ${i + 1} has no answer`); });
    if (s.kind === 'table'){
      const w2 = (s.head || []).length;
      (s.rows || []).forEach((r, i) => { if (r.length !== w2) bad(where, `row ${i + 1} has ${r.length} cells, the head has ${w2}`); });
    }
  }

  if (s.kind === 'dictation'){
    (s.items || []).forEach((it, i) => {
      if (!it.answer) return bad(where, `line ${i + 1} has no text`);
      const n2 = words(it.answer);
      if (n2 < 5 || n2 > 14) bad(where, `line ${i + 1} is ${n2} words; dictation holds between 5 and 14`);
      else ok();
      if (/[;:]/.test(it.answer)) bad(where, `line ${i + 1} uses punctuation the listener cannot hear`);
      if (!it.why) bad(where, `line ${i + 1} has no rationale`);
    });
  }

  if (s.kind === 'minimal-pairs'){
    need(!!s.focus, 'a minimal-pairs exercise must name the contrast it drills');
    (s.items || []).forEach((it, i) => {
      checkOptions(`${where} line ${i + 1}`, it.options, 2);
      if (!it.say) bad(where, `line ${i + 1} has nothing to say`);
      else if (!(it.options || []).some(o => o.correct && o.text === it.say))
        bad(where, `line ${i + 1} plays "${it.say}" but that is not the correct option`);
      else ok();
    });
  }

  if (s.kind === 'paraphrase'){
    (s.items || []).forEach((it, i) => {
      if (!it.source) bad(where, `item ${i + 1} has no source sentence`);
      else if (words(it.source) < 8) bad(where, `item ${i + 1}: a source of ${words(it.source)} words is too short to paraphrase`);
      else ok();
    });
  }

  if (s.kind === 'oddone'){
    (s.items || []).forEach((it, i) => {
      if ((it.options || []).length !== 4) bad(where, `row ${i + 1} has ${(it.options || []).length} words; the form is four`);
      else ok();
      if (!it.group) bad(where, `row ${i + 1} does not say what the other three share`);
    });
  }

  if (s.kind === 'paragraph'){
    need(!!s.model, 'a writing task without a model is not this book');
    need(!!s.task, 'no task');
    need((s.must || []).length >= 3, 'the checklist needs at least 3 lines');
    need((s.min || 0) >= 60, 'a paragraph under 60 words is a sentence');
  }

  /* difficulty lock */
  if (s.text && s.text.blocks){
    const all = s.text.blocks.map(b=>(b.lines||[b.text]).join(' ')).join(' ');
    const n = words(all), r = SPEC.readability(plain(all));
    if (s.task === 'read-academic-passage'){
      if (n > SPEC.LIMITS.readingWordsComplex[1]) bad(where,`passage ${n} words, ceiling ${SPEC.LIMITS.readingWordsComplex[1]}`);
      else if (r && (r.fk < SPEC.LIMITS.fkHigh[0] || r.fk > SPEC.LIMITS.fkHigh[1]))
        bad(where,`passage FK ${r.fk.toFixed(2)} outside ETS's high band ${SPEC.LIMITS.fkHigh.join('-')}`);
      else ok();
    }
    if (s.task === 'read-daily-life'){
      const lo = SPEC.LIMITS.readingWordsEasy[0], hi = SPEC.LIMITS.readingWordsEasy[1];
      if (n < lo || n > hi) bad(where,`everyday text ${n} words, ETS band ${lo}-${hi}`);
      else ok();
    }
  }
  /* audio length lock */
  if (s.audio && (s.audio.text || s.audio.lines)){
    const t = s.audio.lines ? s.audio.lines.map(l=>l.text).join(' ') : s.audio.text;
    const n = words(t);
    if (s.task === 'listen-academic-talk' && n > SPEC.LIMITS.audioExtendedMax)
      bad(where,`talk ${n} words, ceiling ${SPEC.LIMITS.audioExtendedMax}`);
    else if ((s.task==='listen-conversation'||s.task==='listen-announcement') &&
             (n < SPEC.LIMITS.audioIntermediate[0] || n > SPEC.LIMITS.audioIntermediate[1]))
      bad(where,`audio ${n} words, ETS intermediate band ${SPEC.LIMITS.audioIntermediate.join('-')}`);
    else ok();
  }
}

/* Every piece of text a learner is asked to answer, for the echo lock. */
function collectStems(s){
  const out = [];
  (s.items||[]).forEach(it=>{
    ['text','prompt','source','say','answer','stem'].forEach(k=>{ if (typeof it[k]==='string') out.push(plain(it[k])); });
  });
  (s.pairs||[]).forEach(p=>{ if (p.label) out.push(plain(p.label)); });
  (s.steps||[]).forEach(p=>{ if (p.text) out.push(plain(p.text)); });
  (s.gaps||[]).forEach(g=>{ if (g.why) out.push(plain(g.why)); });
  return out;
}

const ids = new Set();
B.UNITS.forEach(u=>{
  const dir = path.join(ROOT,u.id,'data');
  if (!fs.existsSync(dir)) return;
  const tally = {};
  B.BLOCKS.forEach(b=>{
    const f = path.join(dir, b.id + '.js');
    if (!fs.existsSync(f)) return;
    let P; try { P = loadPage(f); } catch(e){ return bad(`${u.id}/${b.id}`,'failed to load: '+e.message); }
    if (!P) return bad(`${u.id}/${b.id}`,'no window.PAGE');
    if (P.unit !== u.id) bad(`${u.id}/${b.id}`,`declares unit "${P.unit}"`);
    if (P.block !== b.id) bad(`${u.id}/${b.id}`,`declares block "${P.block}"`);
    P.scenes.forEach(s=>{
      const where = `${u.id}/${b.id}/${s.id}`;
      if (ids.has(where)) bad(where,'duplicate scene id');
      ids.add(where);
      if (!s.kind) bad(where,'no kind');
      else if (!kindsUsed.has(s.kind)) kindsUsed.set(s.kind, where);
      /* echo lock: the same sentence taught twice as new in different units */
      collectStems(s).forEach(t=>{
        const k = t.toLowerCase().replace(/[^a-z0-9 ]+/g,' ').replace(/\s+/g,' ').trim();
        if (k.length < 35) return;
        const first = stems.get(k);
        if (first && first.split('/')[0] !== u.id) bad(where,`repeats a stem first used at ${first}: "${t.slice(0,54)}..."`);
        else if (!first) stems.set(k, where);
      });
      checkScene(where, s, u);
      if (s.task) tally[s.task] = (tally[s.task]||0) + (s.n||0);
    });
    /* budget lock */
    const want = B.budgetFor(u.id)[b.id];
    Object.keys(want).forEach(t=>{
      if (t === 'review') return;
      const got = tally[t] || 0;
      // tally is cumulative across blocks; compare per-block below instead
    });
  });
  /* per-unit totals */
  const unitWant = {};
  const table = B.budgetFor(u.id);
  B.BLOCKS.forEach(b=>Object.keys(table[b.id]).forEach(t=>{
    if (t!=='review') unitWant[t] = (unitWant[t]||0) + table[b.id][t];
  }));
  const built = B.BLOCKS.filter(b=>fs.existsSync(path.join(dir,b.id+'.js'))).map(b=>b.id);
  const complete = built.length === B.BLOCKS.length;
  if (complete){
    Object.keys(unitWant).forEach(t=>{
      const got = tally[t]||0;
      if (got !== unitWant[t]) bad(u.id,`${SPEC.TASKS[t].name}: ${got} items, budget ${unitWant[t]}`);
      else ok();
    });
    const total = Object.values(tally).reduce((a,b)=>a+b,0);
    console.log(`  ${u.id}  complete · ${total} scored items across ${built.length} blocks${u.doubled?'  [doubled]':''}`);
  } else {
    const total = Object.values(tally).reduce((a,b)=>a+b,0);
    console.log(`  ${u.id}  ${built.length}/${B.BLOCKS.length} blocks · ${total} items so far`);
  }
});

/* solver lock */
kindsUsed.forEach((where, kind)=>{
  if (!SOLVED.has(kind)) bad(where, `kind "${kind}" has no branch in tools/solver.js, so nothing verifies it can be answered`);
  else ok();
});

console.log(`\n${pass} checks passed, ${fail} failed`);
if (problems.length){ console.log('\nPROBLEMS'); problems.forEach(p=>console.log('  ✗ '+p)); process.exit(1); }
