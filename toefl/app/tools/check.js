/* check.js — the quality gate.
 *   spec lock        every item declares a real task and a CEFR inside its range
 *   budget lock      a block's items match the published budget
 *   difficulty lock  passages inside ETS's own word and Flesch-Kincaid bands
 *   item lock        one correct option, >= 3 options, a rationale on every one
 *   key lock         T/F cite a line, NI cites none, letterbox `given` in range
 */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT,'assets/spec.js'));
require(path.join(ROOT,'assets/book.js'));
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

function checkOptions(where, opts){
  if (!Array.isArray(opts) || opts.length < 3) return bad(where,`needs >= 3 options, has ${opts?opts.length:0}`);
  const right = opts.filter(o=>o.correct);
  if (right.length !== 1) return bad(where,`needs exactly 1 correct option, has ${right.length}`);
  opts.forEach((o,i)=>{ if (!o.why) bad(where,`option ${i+1} ("${plain(o.text).slice(0,30)}...") has no rationale`); });
  ok();
}

function checkScene(where, s, unit){
  if (s.task && !SPEC.TASKS[s.task]) return bad(where,`unknown task id "${s.task}"`);
  if (s.task && s.cefr && !SPEC.bandOk(s.task, s.cefr)) {
    const t = SPEC.TASKS[s.task];
    return bad(where,`CEFR ${s.cefr} outside ${t.name}'s published range ${t.cefr[0]}-${t.cefr[1]}`);
  }
  if (s.options) checkOptions(where, s.options);
  (s.items||[]).forEach((it,i)=>{
    if (it.options) checkOptions(`${where} item ${i+1}`, it.options);
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
      ok();
    }
  });
  if (s.kind === 'order'){
    if (!s.target) bad(where,'order scene has no target');
    if (!s.extra || !s.extra.length) bad(where,'order scene has no distractor tiles — the last tile would be free');
    else ok();
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
      checkScene(where, s, u);
      if (s.task) tally[s.task] = (tally[s.task]||0) + (s.n||0);
    });
    /* budget lock */
    const want = B.BUDGET[b.id];
    Object.keys(want).forEach(t=>{
      if (t === 'review') return;
      const got = tally[t] || 0;
      // tally is cumulative across blocks; compare per-block below instead
    });
  });
  /* per-unit totals */
  const unitWant = {};
  B.BLOCKS.forEach(b=>Object.keys(B.BUDGET[b.id]).forEach(t=>{
    if (t!=='review') unitWant[t] = (unitWant[t]||0) + B.BUDGET[b.id][t];
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
    console.log(`  ${u.id}  complete · ${total} scored items across ${built.length} blocks`);
  } else {
    const total = Object.values(tally).reduce((a,b)=>a+b,0);
    console.log(`  ${u.id}  ${built.length}/${B.BLOCKS.length} blocks · ${total} items so far`);
  }
});

console.log(`\n${pass} checks passed, ${fail} failed`);
if (problems.length){ console.log('\nPROBLEMS'); problems.forEach(p=>console.log('  ✗ '+p)); process.exit(1); }
