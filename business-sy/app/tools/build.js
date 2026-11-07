/* build.js — generate every lesson page from the book structure.
   28 hand-written HTML files would drift; one template cannot. */
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'assets/course.js'));
require(path.join(ROOT, 'assets/spec.js'));
require(path.join(ROOT, 'assets/book.js'));
const C = window.COURSE;

/* The skill mix on the book index is derived from the item budget rather
   than typed, so it cannot say one thing while assets/book.js says
   another. It was typed before, and it was wrong: this course's index
   claimed "Reading 18 / Listening 17 / Writing 12 / Speaking 6" while its
   own BUDGET2 adds up to something else entirely. Review items are left
   out because they are not scored. An unmapped task name throws rather
   than being dropped silently, because a figure with a task missing from
   it is worse than no figure. */
const SKILL_ORDER = ['Reading', 'Listening', 'Writing', 'Speaking',
                     'Pronunciation', 'Sentence building', 'Vocabulary'];
function skillOf(task) {
  if (task === 'review') return null;                       /* not scored */
  if (task === 'listen-and-repeat' || /^pronounce/.test(task)) return 'Pronunciation';
  if (/^read/.test(task))      return 'Reading';
  if (/^listen/.test(task))    return 'Listening';
  if (/^write/.test(task))     return 'Writing';
  if (/^speak|interview/.test(task)) return 'Speaking';
  if (/sentence|build-a-sentence/.test(task)) return 'Sentence building';
  if (/^complete-the-words/.test(task)) return 'Vocabulary';
  throw new Error('build.js: no skill for task "' + task + '" \u2014 add it to skillOf()');
}
const skillMix = (() => {
  const t = {};
  const table = window.BOOK.BUDGET2 || window.BOOK.BUDGET;
  Object.keys(table).forEach(b => Object.keys(table[b]).forEach(task => {
    const name = skillOf(task);
    if (name) t[name] = (t[name] || 0) + table[b][task];
  }));
  return SKILL_ORDER.filter(n => t[n]).map(n => n + ' ' + t[n]).join(' \u00b7 ');
})();
const B = window.BOOK;

const SCRIPTS = ['course','spec','features','book','progress','speech','explain','icons','motion','diagrams','rl','ws','gram','learn','ar','deck','cast','drag','scenes','items','items2','items3','items4','items5','items6','audio','charts','docs','write','speak'];

function page(unit, block, prevHref, nextHref) {
  const b = B.block(block);
  const title = `Unit ${unit.n} ${b.n ? 'Lesson ' + b.n : ''} · ${b.name}`.replace(/\s+/g,' ');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<link rel="stylesheet" href="../assets/ui.css"></head><body>
${SCRIPTS.map(s=>`<script src="../assets/${s}.js"></script>`).join('\n')}
<script src="data/${block}.js"></script>
<script>Deck.start();</script>
</body></html>
`;
}

function unitIndex(unit, built) {
  const rows = B.BLOCKS.filter(b=>built.includes(b.id)).map(b=>{
    const n = B.budgetTotal(b.id, unit.id);
    return `      <a class="blk" href="${b.id}.html">
        <span class="bn">${b.n ? 'Lesson ' + b.n : '&nbsp;'}</span>
        <b>${b.name}</b>
        <span class="bi">${n} item${n===1?'':'s'}</span>
      </a>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Unit ${unit.n} · ${unit.title}</title>
<link rel="stylesheet" href="../assets/ui.css">
<style>
.hero{padding:26px 0 8px}
.hero .kick{font:700 11.5px var(--ui);letter-spacing:.14em;text-transform:uppercase;color:var(--orange)}
.hero h1{font-size:clamp(26px,4.2vw,38px);margin:6px 0 8px;letter-spacing:-.02em;font-weight:650}
.hero p{color:var(--ink-2);margin:0;max-width:62ch}
.look{background:var(--cream);border:1.5px solid var(--orange);border-radius:6px;padding:13px 16px;margin:18px 0 0;max-width:460px}
.look h3{margin:0 0 6px;font:800 11.5px var(--ui);letter-spacing:.08em;text-transform:uppercase;color:var(--orange)}
.look ul{margin:0;padding-left:18px;font-size:14px}.look li{margin-bottom:4px}
.blocks{display:grid;gap:10px;margin:26px 0 40px}
@media(min-width:620px){.blocks{grid-template-columns:1fr 1fr}}
.blk{display:flex;align-items:center;gap:12px;padding:14px 16px;border:1px solid var(--rule);
 border-radius:10px;background:var(--card);text-decoration:none;color:var(--ink)}
.blk:hover{border-color:var(--maroon)}
.blk .bn{flex:0 0 68px;font:700 11px var(--ui);letter-spacing:.07em;text-transform:uppercase;color:var(--maroon)}
.blk b{flex:1;font-weight:600;font-size:15.5px}
.blk .bi{font-size:12.5px;color:var(--ink-3)}
</style></head><body>
<div class="topbar"><a class="home" href="../index.html">${C.title}</a>
<div class="where">Unit ${unit.n}</div></div>
<div class="motif"></div>
<div class="wrap">
  <div class="hero">
    <div class="kick">Unit ${unit.n}</div>
    <h1>${unit.title}</h1>
    <p>${unit.field.charAt(0).toUpperCase()+unit.field.slice(1)}.</p>
    <div class="look"><h3>A look at</h3><ul>
      <li>${unit.grammar.join(' · ')}</li>
      <li>${unit.affix ? (/-/.test(unit.affix)
          ? 'The affix <b>' + unit.affix + '</b>'
          : '<b>' + unit.affix.charAt(0).toUpperCase() + unit.affix.slice(1) + '</b>')
        : 'Phrasal verbs'}</li>
      <li>Pronunciation: ${unit.pron}</li>
    </ul></div>
  </div>
  <div class="blocks">
${rows}
  </div>
</div>
<div class="objbar"><span>${unit.strategy.reading}</span><span>Unit ${unit.n}</span></div>
</body></html>
`;
}

function bookIndex(unitsBuilt) {
  const rows = B.UNITS.map(u=>{
    const live = unitsBuilt.includes(u.id);
    return `    <a class="u${live?'':' soon'}" ${live?`href="${u.id}/index.html"`:''}>
      <span class="n">${u.n}</span>
      <span class="t"><b>${u.title}</b><em>${u.field}</em></span>
      <span class="s">${live?'ready':'to come'}</span>
    </a>`;
  }).join('\n');
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${C.title}</title>
<link rel="stylesheet" href="assets/ui.css">
<style>
.hero{padding:40px 0 10px;max-width:64ch}
.hero h1{font-size:clamp(30px,5vw,44px);margin:0 0 10px;letter-spacing:-.025em;font-weight:640}
.hero p{color:var(--ink-2);font-size:17px;margin:0 0 8px}
.units{display:grid;gap:9px;margin:28px 0 44px}
@media(min-width:680px){.units{grid-template-columns:1fr 1fr}}
.u{display:flex;align-items:center;gap:13px;padding:13px 15px;border:1px solid var(--rule);
 border-radius:10px;background:var(--card);text-decoration:none;color:var(--ink)}
.u:hover{border-color:var(--maroon)}
.u.soon{opacity:.5}
.u .n{flex:0 0 28px;height:28px;border-radius:6px;background:var(--maroon);color:#fff;
 display:grid;place-items:center;font:700 14px var(--ui)}
.u.soon .n{background:var(--rule-2);color:var(--ink-3)}
.u .t{flex:1;min-width:0}
.u .t b{display:block;font-size:15px;font-weight:600}
.u .t em{display:block;font-size:12px;color:var(--ink-3);font-style:normal}
.u .s{font-size:11.5px;color:var(--ink-3)}
</style></head><body>
<div class="topbar"><span class="home">${C.title}</span><div class="where">Contents</div></div>
<div class="motif"></div>
<div class="wrap">
  <div class="hero">
    <h1>${C.title}</h1>
    <p>${C.blurb}</p>
    <p style="font-size:14.5px">${skillMix} per unit.
    Every exercise has <b>Check Answers</b> and <b>Try Again</b>. Nothing loads from the network.</p>
  </div>
  <div class="units">
${rows}
  </div>
</div>
<div class="objbar"><span>Open any unit to begin</span><span>${unitsBuilt.length} of 12 ready</span></div>
</body></html>
`;
}

/* ---- run ---- */
const unitsBuilt = [];
B.UNITS.forEach(u=>{
  const dir = path.join(ROOT, u.id);
  if (!fs.existsSync(path.join(dir,'data'))) return;
  const built = B.BLOCKS.map(b=>b.id).filter(id=>fs.existsSync(path.join(dir,'data',id+'.js')));
  if (!built.length) return;
  built.forEach((id,i)=>{
    const next = built[i+1] ? built[i+1]+'.html' : 'index.html';
    fs.writeFileSync(path.join(dir, id+'.html'), page(u, id, null, next));
  });
  fs.writeFileSync(path.join(dir,'index.html'), unitIndex(u, built));
  unitsBuilt.push(u.id);
  console.log(`  ${u.id}  ${built.length} block(s): ${built.join(' ')}`);
});
fs.writeFileSync(path.join(ROOT,'index.html'), bookIndex(unitsBuilt));
console.log(`built ${unitsBuilt.length} unit(s) + book index`);
