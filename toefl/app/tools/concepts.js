/* concepts.js — give every scene the ideas it is actually about (F50).

   The deck already badges each scene with an icon inferred from its KIND,
   so every `read` scene wears the same icon whatever it is about. That
   makes the icon a label for the exercise type, which the learner can see
   anyway from the exercise.

   F50 wants the opposite: the same IDEA wearing the same icon across
   twelve units of different subject matter, so the icon becomes a
   retrieval cue. Measurement, comparison, evidence, inference and claim
   recur in every unit of this book; a scene about a denominator in Unit 2
   and one about a sample in Unit 9 are the same move, and should look it.

   So each scene gets: the skill it practises (read, listen, write...) and,
   where the text supports it, the intellectual move it is making. A scene
   whose text supports neither gets only the skill, because inventing a
   concept to fill a slot is the drift this is meant to prevent.

   Usage: node tools/concepts.js            report
          node tools/concepts.js --apply    write them */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}

/* the icons that exist, read from the source so this cannot name one that does not */
const HAVE = new Set();
{
  const src = fs.readFileSync(path.join(ROOT, 'assets/icons.js'), 'utf8');
  const tbl = src.slice(src.indexOf('var P = {'), src.indexOf('var ALIAS'));
  for (const m of tbl.matchAll(/^\s{4}"?([a-z-]+)"?:/gm)) HAVE.add(m[1]);
}

/* what the exercise practises */
const SKILL = {
  read: 'read', 'read-only': 'read', tfni: 'read', selectintext: 'read',
  paraphrase: 'read', chartread: 'measurement',
  listen: 'listen', talk: 'listen', respond: 'listen', dictation: 'listen',
  'minimal-pairs': 'sound', repeat: 'speak', interview: 'speak', phrases: 'speak',
  'write-email': 'write', discussion: 'write', paragraph: 'write', 'register-dial': 'write',
  letterbox: 'word', wordbank: 'word', oddone: 'word', match: 'word', cards: 'word',
  build: 'word', cloze: 'word', errorfix: 'correct', order: 'word', orderset: 'word',
  sort: 'comparison', sequence: 'sequence', table: 'measurement', notes: 'listen',
  quiz: 'recall', compare: 'comparison', recap: 'inference', annotate: 'claim'
};

/* the recurring intellectual moves, and the words this book uses for them */
/* The recurring intellectual moves, and the words this book uses for them.

   These patterns were tightened once already. A first version matched bare
   "than", "both" and "either" for comparison and tagged 392 of 754 scenes
   with it — which would make the icon meaningless, since an icon on half
   the book is wallpaper. The words here are ones that only appear when the
   scene really is making the move. */
const MOVE = [
  ['measurement', /\b(per cent|percent|percentage|\d+%|rate of|average|mean of|median|the figure|how many|how much|measur\w+|statistic\w*)\b/i],
  ['comparison',  /\b(compared? (with|to)|comparison|in contrast|whereas|outperform\w*|more \w+ than|less \w+ than|fewer \w+ than|the difference between|which is (bigger|smaller|better|worse|faster|slower))\b/i],
  ['evidence',    /\b(evidence|the study|studies|experiments?|research\w*|found that|shows? that|line \d|according to|cite[ds]?|which line)\b/i],
  ['inference',   /\b(therefore|it follows|implies|infer\w*|explains? why|why does|the reason (is|for)|which suggests)\b/i],
  ['claim',       /\b(argue[ds]?|argument|a claim|the claim|claims that|opinion|your position|agree or disagree|concede[ds]?)\b/i],
  ['cause',       /\b(causes?|caused by|the effect of|leads? to|results? in|brings? about|knock-on)\b/i],
  ['sample',      /\b(the sample|a sample|population|participants|students who|out of \d+|denominator)\b/i],
  ['time',        /\b(deadline|timetable|the schedule|opening hours|o'clock|by (monday|tuesday|wednesday|thursday|friday))\b/i],
  ['money',       /\b(the cost|costs? \$|the price|a fee|the fee|budget|afford|refund)\b/i],
  ['place',       /\b(the library|which room|the building|on the \w+ floor|where is|is located|the campus)\b/i]
];

const plain = o => JSON.stringify(o || '').replace(/<[^>]+>/g, ' ').replace(/\\"/g, ' ');

/* what the items ASK, with the rationales left out */
function asked(s) {
  return [].concat(s.items || [], s.gaps || [], s.steps || [])
    .map(i => i && (i.q || i.stem || i.prompt || i.cue || i.text || i.say || i.group || ''))
    .join(' ');
}

let scenes = 0, got2 = 0, got1 = 0, none = 0;
const tally = {}, edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      scenes++;
      if (s.concepts) continue;
      const out = [];
      /* `choice` is the one kind with no skill of its own: it asks about a
         reading, a talk or an argument depending on what it is attached to.
         Read it from what the scene carries. */
      let skill = SKILL[s.kind];
      if (!skill && s.kind === 'choice') {
        const src = s.carry ? P.scenes.filter(x => x.id === s.carry)[0] : null;
        const host = src || s;
        skill = (host.audio && host.audio.lines) ? 'listen'
              : host.text ? 'read'
              : host.chart ? 'measurement'
              : 'claim';
      }
      if (skill && HAVE.has(skill)) out.push(skill);

      /* The move is read from what the scene SAYS, not from its kind — and
         not from the rationales either. A `why` explains the answer, so it
         is full of "because", "shows that" and "argues", and including it
         tagged a Complete the Words exercise with `claim`. What the scene
         is about is in its prompt, its passage and what it asks; why an
         answer is right is a different thing. */
      const blob = plain(s.prompt) + ' ' + plain(s.objective) + ' ' + plain(s.sectionTitle) +
                   ' ' + plain(s.text) + ' ' + plain(s.note) + ' ' + plain(s.question) +
                   ' ' + plain(asked(s));
      const moves = [];
      for (const [name, re] of MOVE) {
        if (moves.length >= 2) break;
        if (!HAVE.has(name)) continue;
        if (out.indexOf(name) >= 0) continue;
        const hits = (blob.match(re) || []).length;
        if (hits >= 2) moves.push([name, hits]);
      }
      moves.sort((a, b) => b[1] - a[1]);
      moves.slice(0, 2).forEach(m => out.push(m[0]));

      if (out.length >= 2) got2++; else if (out.length === 1) got1++; else none++;
      out.forEach(c => { tally[c] = (tally[c] || 0) + 1; });
      if (out.length)
        (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, concepts: out });
    }
  }
}

console.log(`${scenes} scenes · ${got2} with a skill and a move · ${got1} with a skill only · ${none} with neither\n`);
Object.entries(tally).sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  ${k}`));

if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

let written = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  for (const e of edits[file]) {
    const re = new RegExp('(\\{\\s*id:\\s*"' + e.id + '"[\\s\\S]{0,400}?)(\\n(\\s*)kind:)');
    const before = src;
    src = src.replace(re, (m, head, kindPart, indent) =>
      `${head}\n${indent}concepts: [${e.concepts.map(c => '"' + c + '"').join(', ')}],${kindPart}`);
    if (src !== before) written++;
    else console.log(`  ! could not place concepts on ${path.basename(file)}/${e.id}`);
  }
  fs.writeFileSync(file, src);
}
console.log(`\nwrote concepts on ${written} scenes.`);
