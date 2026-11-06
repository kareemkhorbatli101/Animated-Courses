/* coverage.js — the 754 x 52 matrix.

   For every scene in the book and every fix F1..F52 in PLAN-INTERACTIVE.md,
   this answers two questions: does the fix APPLY to this scene, and is it
   DONE? It is the progress report and the definition of done in one file.

   Each entry's `met` is a contract: it names the exact field the
   implementation must set. Nothing here is satisfied by intention, by a
   comment, or by a renderer that merely could do the thing. If a predicate
   is loose, the fix will be reported done while the learner still cannot
   use it, so the predicates are deliberately strict and each one says what
   it looks for.

   Usage:  node tools/coverage.js            summary, one line per fix
           node tools/coverage.js --unmet    the unmet cells, scene by scene
           node tools/coverage.js --unit=u01 one unit
           node tools/coverage.js --fix=F9   one fix, every unmet scene
           node tools/coverage.js --json     machine-readable */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');

/* ---------------------------------------------------------------- load --- */
function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}
const asset = f => fs.readFileSync(path.join(ROOT, 'assets', f), 'utf8');

/* kinds whose sayable() is implemented, read from the source so the matrix
   cannot drift from the table it describes */
const SAYABLE = new Set();
{
  const src = asset('explain.js');
  const tbl = src.slice(src.indexOf('var SAY'), src.indexOf('function sayable'));
  for (const m of tbl.matchAll(/^\s{4}([a-z0-9-]+|"[a-z0-9-]+"):/gm))
    SAYABLE.add(m[1].replace(/"/g, ''));
}
/* kinds whose KIND table entry carries what/how/why, so generate() can
   produce all four panels. The fourth, `page`, is assembled from the scene. */
const EXPLAINED = new Set();
{
  const src = asset('explain.js');
  const tbl = src.slice(src.indexOf('var KIND'), src.indexOf('var SAY'));
  for (const m of tbl.matchAll(/^\s{4}"?([a-z0-9-]+)"?:\s*\{/gm)) EXPLAINED.add(m[1]);
}
/* what the engine declares it implements (assets/features.js). An engine-level
   fix is done on a scene when the engine provides the behaviour AND the scene
   carries the inputs it needs — not when 754 scene objects repeat a flag. */
const FEATURES = new Set();
{
  const src = asset('features.js');
  const list = src.slice(src.indexOf('root.FEATURES'), src.indexOf('root.hasFeature'));
  for (const m of list.matchAll(/"([a-zA-Z0-9]+)"/g)) FEATURES.add(m[1]);
}
const eng = n => FEATURES.has(n);

/* a11y.js writes this when every scene passes keyboard and name checks */
let A11Y = null;
try { A11Y = JSON.parse(fs.readFileSync(path.join(__dirname, '.a11y.json'), 'utf8')); } catch (e) {}

const ICON_CONCEPTS = new Set();
{
  const src = asset('icons.js');
  for (const m of src.matchAll(/^\s{4}"?([a-z0-9-]+)"?:\s*(?:\[|")/gm)) ICON_CONCEPTS.add(m[1]);
}

const pages = [];
for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  if (!fs.existsSync(dd)) continue;
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f)).sort()) {
    let P; try { P = load(path.join(dd, f)); } catch (e) { continue; }
    if (P && P.scenes) pages.push({ unit: u, block: f.replace(/\.js$/, ''), page: P });
  }
}

/* ------------------------------------------------------------ helpers --- */
const READONLY = new Set(['read-only']);
const has = (s, ...f) => f.some(k => s[k] != null && (!Array.isArray(s[k]) || s[k].length));
const txt = s => JSON.stringify(s);
/* a scene that points at something it must therefore carry */
const REFERS = /\bthe (article|passage|reading|chart|graph|table|talk|lecture|conversation|discussion|announcement|text|card|notice|poster|leaflet|flyer|email|message|advert|advertisement|sign|schedule|timetable|form|receipt|label|post|model|email|post)\b|\bin \d[A-E]\b|\blook back\b|\bthe first (talk|speaker)\b|\bfrom Lesson \d\b/i;
/* A scene satisfies F2 by carrying the stimulus itself, or by naming the
   scene on its page that owns it (`carry`), which the deck carries in at
   render time. The gate separately proves every `carry` resolves and that
   cited line numbers exist in the source. */
const STIMULUS = s => has(s, 'text', 'audio', 'chart', 'scene', 'recall', 'carry', 'model', 'posts', 'lines', 'rows');
/* every item of a scene, whatever the kind calls them */
const items = s => [].concat(s.items || [], s.gaps || [], s.pairs || [], s.steps || [],
                             s.cards || [], s.phrases || [], s.sentences || [], s.takeaways || []);
const everyItem = (s, fn) => { const a = items(s); return a.length > 0 && a.every(fn); };
const lessonNo = b => (/^l(\d)$/.exec(b) || [])[1];
const withOptions = s => items(s).some(i => (i.options || i.opts || []).length);
const hasLines = s => !!(s.audio && Array.isArray(s.audio.lines) && s.audio.lines.length);
/* `respond` and `minimal-pairs` put the audio on each item instead of on the
   scene: 36 more listening scenes than a scan for scene-level audio finds. */
const itemSay = s => (s.items || []).some(i => i && i.say);
const listens = s => hasLines(s) || itemSay(s);
/* tools/audio-manifest.js writes this */
let MANIFEST = null;
try { MANIFEST = JSON.parse(fs.readFileSync(path.join(__dirname, '.audio-manifest.json'), 'utf8')); } catch (e) {}

/* ---------------------------------------------------------------- fixes --- */
/* scope: does this fix apply here?   met: is it done here?
   level 'scene' (default), 'unit' or 'book'. */
const FIXES = [
/* id, title, scope(scene,page), met(scene,page,where), level, expect
   `met` names the exact thing the implementation must provide. For an
   engine-level fix that is eng('name') from assets/features.js plus the
   inputs the behaviour needs; for a content-level fix it is the field the
   author must write. Nothing here is satisfied by intention. */

/* ---- the five you named ------------------------------------------------ */
["F1","No exercise is read-only",
  s=>true,                                   s=>!READONLY.has(s.kind)&&s.kind!=='chartread', 'scene', 754],
["F2","Question on the page with its stimulus",
  s=>REFERS.test((String(s.prompt||'')+txt(items(s))).replace(/<[^>]+>/g,' ')), s=>STIMULUS(s), 'scene', 204],
["F3","Explain popup, four parts",
  s=>true,                                   s=>eng('explainPopup')&&(s.explain?['what','how','why','page'].every(k=>s.explain[k]):EXPLAINED.has(s.kind)), 'scene', 754],
["F4","Play button says this kind aloud",
  s=>true,                                   s=>eng('speech')&&eng('sayable')&&SAYABLE.has(s.kind), 'scene', 754],
["F5","A load-bearing visual on every exercise",
  s=>true,                                   s=>has(s,'scene','chart','cards','figure','visual','pins','tree','matrix','family'), 'scene', 754],

/* ---- reading ----------------------------------------------------------- */
["F6","Clickable line citation",
  s=>s.kind==='tfni'||s.kind==='selectintext', s=>eng('lineCite')&&STIMULUS(s), 'scene', 36],
["F7","Tappable glossary rail",
  s=>s.kind==='read',                        s=>eng('glossaryRail')&&has(s,'glossary'), 'scene', 48],
["F8","Reading pace band",
  s=>s.kind==='read',                        s=>eng('paceBand'), 'scene', 48],
["F9","Evidence before verdict",
  s=>s.kind==='tfni',                        s=>eng('evidenceFirst')&&STIMULUS(s), 'scene', 24],
["F10","Paragraph spine",
  s=>s.kind==='read'&&items(s).length>0,     s=>eng('paraSpine')&&everyItem(s,i=>i.para!=null), 'scene', 48],
["F11","Distractor autopsy",
  s=>withOptions(s),                         s=>eng('autopsy')&&everyItem(s,i=>!(i.options||i.opts||[]).length||i.misreads!=null), 'scene', 204],

/* ---- listening --------------------------------------------------------- */
["F12","Transcript after, never before",
  /* the transcript is built from audio.lines, which all 84 listening scenes
     carry. spec.transcript is prose instructions on several scenes and is
     deliberately NOT the source. */
  s=>listens(s),                             s=>eng('transcriptAfter')&&listens(s), 'scene', 120],
["F13","Slow replay, earned",
  s=>listens(s),                             s=>eng('slowReplay'), 'scene', 120],
["F14","Who is speaking",
  s=>hasLines(s)&&has(s,'speaker'),          s=>eng('portraits'), 'scene', 72],
["F15","Notepad everywhere",
  s=>hasLines(s)||s.kind==='respond',        s=>eng('notepad'), 'scene', 108],
["F16","Shadowing mode",
  s=>s.kind==='repeat'||s.kind==='phrases',  s=>eng('shadow'), 'scene', 36],
["F17","Dictation diff",
  s=>s.kind==='dictation',                   s=>eng('dictationDiff'), 'scene', 12],

/* ---- vocabulary -------------------------------------------------------- */
["F18","Every taught term carries Arabic",
  s=>has(s,'cards','glossary','terms'),      s=>everyItem(s,i=>!i.term||i.ar!=null), 'scene', 24],
["F19","Word family tree",
  s=>s.kind==='build',                       s=>has(s,'family'), 'scene', 24],
["F20","Collocation chips",
  s=>s.kind==='cards',                       s=>everyItem(s,i=>!i.term||i.with!=null), 'scene', 24],
["F21","Stress made visible",
  s=>s.kind==='minimal-pairs',               s=>eng('stressMarks')&&s.stress!=null, 'scene', 12],
["F22","Known/unknown sorting",
  s=>s.kind==='cards',                       s=>eng('triage'), 'scene', 12],

/* ---- grammar ----------------------------------------------------------- */
["F23","Function colouring",
  s=>s.kind==='order'||s.kind==='orderset',  s=>eng('functionColour')&&everyItem(s,i=>i.jobs!=null), 'scene', 48],
["F24","The rule fills itself in",
  s=>s.kind==='cloze',                       s=>eng('ruleBuilds')&&has(s,'note'), 'scene', 27],
["F25","The correction animates",
  s=>s.kind==='errorfix',                    s=>eng('animateFix'), 'scene', 24],
["F26","Verb-pattern matrix",
  s=>has(s,'matrix')||s.wantsMatrix===true,  s=>has(s,'matrix'), 'scene', 24],
["F27","Why this tile is wrong",
  s=>has(s,'extra')||items(s).some(i=>i.extra), s=>eng('tileWhy')&&(everyItem(s,i=>!i.extra||i.extraWhy!=null)||s.extraWhy!=null), 'scene', 60],

/* ---- writing ----------------------------------------------------------- */
["F28","Model and draft side by side",
  s=>has(s,'model')&&has(s,'minWords'),      s=>eng('sideBySide')&&has(s,'modelJobs'), 'scene', 48],
["F29","Checklist that points",
  s=>has(s,'checklist'),                     s=>eng('checklistPoints'), 'scene', 48],
["F30","Word-count ring",
  s=>has(s,'minWords'),                      s=>eng('wordRing'), 'scene', 48],
["F31","Sentence-shape hints",
  s=>has(s,'minWords'),                      s=>eng('frames')&&has(s,'frames'), 'scene', 48],

/* ---- speaking ---------------------------------------------------------- */
["F32","Countdown ring with band descriptors",
  s=>has(s,'seconds'),                       s=>eng('bandRing')&&s.task!=null, 'scene', 48],
["F33","Model answers played",
  s=>has(s,'model')&&has(s,'seconds'),       s=>eng('speech')&&eng('modelAudio'), 'scene', 48],
["F34","Length against the model",
  s=>has(s,'model')&&has(s,'seconds'),       s=>eng('lengthCheck'), 'scene', 48],

/* ---- cross-cutting ----------------------------------------------------- */
["F35","Progressive hints, three levels",
  s=>items(s).length>0,                      s=>eng('hints')&&everyItem(s,i=>i.why!=null||i.rationale!=null), 'scene', 519],
["F36","Arabic interface toggle",
  s=>true,                                   s=>eng('arabicUI'), 'book', 1],
["F37","Mistake log",
  s=>true,                                   s=>eng('mistakeLog'), 'unit', 12],
["F38","Reduced motion and screen-reader parity",
  s=>true,                                   (s,p,w)=>eng('motion')&&!!(A11Y&&A11Y.passed&&A11Y.passed.includes(w)), 'scene', 754],
["F39","Audio pack manifest",
  s=>true,                                   (s,p,w)=>!!(MANIFEST&&MANIFEST.units&&MANIFEST.units.includes(w)), 'unit', 12],
["F40","Worked first item",
  s=>items(s).length>0,                      s=>eng('worked')&&everyItem(s,i=>i.why!=null||i.rationale!=null), 'scene', 519],
["F41","Retrieval before presentation",
  s=>s.kind==='cards',                       s=>eng('interactive6')&&s.retrievalFirst!==false, 'scene', 12],
["F42","Predict, then check",
  s=>items(s).length>0,                      s=>eng('predict'), 'scene', 519],
["F43","Faded worked examples",
  s=>items(s).length>0,                      (s,p)=>eng('fade')&&eng('worked')&&lessonNo(p.block||'')!=null, 'scene', 519],
["F44","Self-explanation after a miss",
  s=>items(s).length>0,                      s=>eng('selfExplain'), 'scene', 519],
["F45","Elaborative interrogation on distractors",
  s=>withOptions(s),                         s=>eng('askWhy')&&everyItem(s,i=>!(i.options||i.opts||[]).length||i.why!=null||(i.options||i.opts||[]).every(o=>typeof o!=='object'||o.why!=null)), 'scene', 204],
["F46","Interleave within the lesson",
  s=>s.kind==='letterbox'&&items(s).length>=8, s=>s.interleaved===true, 'scene', 84],
["F47","Signal after, not before",
  s=>s.kind==='read'||has(s,'chart'),        s=>eng('signalOnReview'), 'scene', 60],
["F48","Transfer in the recap",
  s=>s.kind==='recap',                       s=>everyItem(s,i=>!i.caseId||i.transfer!==false), 'scene', 24],
["F49","Segmented audio",
  s=>hasLines(s),                            s=>has(s,'segments'), 'scene', 84],
["F50","One concept, one icon, twelve units",
  s=>true,                                   s=>eng('icons')&&(s.concepts||[]).length>0&&(s.concepts||[]).every(c=>ICON_CONCEPTS.has(c)), 'scene', 754],
["F51","The mistake log resurfaces the item",
  s=>true,                                   s=>eng('mistakeLog')&&eng('resurfaceItem'), 'unit', 12],
["F52","Calibration report per unit",
  s=>true,                                   s=>eng('predict')&&eng('calibration'), 'unit', 12],
];

/* ----------------------------------------------------------------- run --- */
const argv = process.argv.slice(2);
const arg = n => (argv.find(a => a.startsWith('--' + n + '=')) || '').split('=')[1];
const onlyUnit = arg('unit'), onlyFix = arg('fix');
const rows = FIXES.map(([id, title, scope, met, level, expect]) => ({
  id, title, scope, met, level: level || 'scene', expect: expect || 0,
  applies: 0, done: 0, unmet: []
}));

for (const { unit, block, page } of pages) {
  if (onlyUnit && unit !== onlyUnit) continue;
  for (const s of page.scenes) {
    const where = `${unit}/${block}/${s.id}`;
    for (const r of rows) {
      if (r.level !== 'scene') continue;
      let applies, done;
      try { applies = !!r.scope(s, page); } catch (e) { applies = false; }
      if (!applies) continue;
      r.applies++;
      try { done = !!r.met(s, page, where); } catch (e) { done = false; }
      if (done) r.done++; else r.unmet.push(`${where} (${s.kind})`);
    }
  }
}
/* unit- and book-level fixes count once per unit / once */
const units = [...new Set(pages.map(p => p.unit))].filter(u => !onlyUnit || u === onlyUnit);
for (const r of rows) {
  if (r.level === 'scene') continue;
  const scopeList = r.level === 'unit' ? units : ['book'];
  for (const u of scopeList) {
    r.applies++;
    let done = false;
    /* unit- and book-level predicates are asked about the unit, not a scene */
    try { done = !!r.met({}, {}, u); } catch (e) { done = false; }
    if (done) r.done++; else r.unmet.push(u);
  }
}

if (argv.includes('--json')) {
  console.log(JSON.stringify(rows.map(r => ({
    id: r.id, title: r.title, level: r.level, applies: r.applies, done: r.done, unmet: r.unmet
  })), null, 2));
  process.exit(0);
}

const bar = (d, a) => {
  const w = 18, f = a ? Math.round(d / a * w) : 0;
  return '[' + '#'.repeat(f) + '.'.repeat(w - f) + ']';
};
let totA = 0, totD = 0;
const drift = [], pending = [];
console.log(`\n${pages.length} pages, ${pages.reduce((n, p) => n + p.page.scenes.length, 0)} scenes, ${FIXES.length} fixes`);
console.log(`\n  fix  progress              done/scope  plan   title`);
for (const r of rows) {
  if (onlyFix && r.id !== onlyFix) continue;
  /* A fix with no scenes in scope is NOT complete: it means the content that
     should carry it does not exist yet. Score it against the plan's own
     estimate so an empty scope reads as 0%, never as 100%. */
  const denom = Math.max(r.applies, r.expect);
  totA += denom; totD += r.done;
  const pct = denom ? Math.round(r.done / denom * 100) : 100;
  /* the plan's estimate and the measured scope disagreeing is information:
     either the estimate was loose or my scope predicate is wrong */
  let flag = ' ';
  if (r.expect && !r.applies) { flag = '~'; pending.push(r); }
  else if (r.expect && r.applies) {
    const ratio = r.applies / r.expect;
    if (ratio < 0.6 || ratio > 1.6) { flag = '!'; drift.push(r); }
  }
  console.log(`  ${r.id.padEnd(4)} ${bar(r.done, denom)} ${String(r.done).padStart(4)}/${String(r.applies).padEnd(4)} ${String(r.expect || '-').padStart(4)}${flag} ${String(pct).padStart(3)}%  ${r.title}`);
}
console.log(`\n  ${String(totD).padStart(5)}/${totA} cells met  (${Math.round(totD / totA * 100)}%)`);
if (pending.length) {
  console.log(`\n  ${pending.length} fixes awaiting content (~): the scenes that will carry them do not exist yet.`);
  for (const r of pending)
    console.log(`    ${r.id.padEnd(4)} plan expects ${String(r.expect).padStart(4)} scenes, the book has none yet   ${r.title}`);
}
if (drift.length) {
  console.log(`\n  ${drift.length} fixes where measured scope and the plan's estimate disagree (!):`);
  for (const r of drift)
    console.log(`    ${r.id.padEnd(4)} plan ${String(r.expect).padStart(4)}   measured ${String(r.applies).padStart(4)}   ${r.title}`);
  console.log(`  Either the estimate was loose, or the scope predicate in this file is wrong.`);
}
console.log('');

if (argv.includes('--unmet') || onlyFix) {
  for (const r of rows) {
    if (onlyFix && r.id !== onlyFix) continue;
    if (!r.unmet.length) continue;
    console.log(`${r.id} ${r.title} — ${r.unmet.length} unmet`);
    const show = onlyFix ? r.unmet : r.unmet.slice(0, 8);
    show.forEach(u => console.log('    ' + u));
    if (!onlyFix && r.unmet.length > 8) console.log(`    … ${r.unmet.length - 8} more`);
  }
}
