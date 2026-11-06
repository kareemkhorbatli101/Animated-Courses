/* jobs.js — colour the words that hold a sentence together (F23).

   The point of colouring by job is that an order becomes a pattern that
   transfers rather than a sequence to memorise. What makes the pattern
   visible is the structural words: the linker, the verb group, the
   subject pronoun, the thing that opens an adverbial.

   This tags ONLY those, and only from closed classes, where the label
   cannot be wrong. The content words — nouns, main verbs, adjectives —
   are left uncoloured, because deciding whether "explaining" is a subject
   or a complement in "What I find most useful is having to explain an
   idea" needs a parser, and a confidently wrong colour would teach a
   learner the wrong grammar. Showing the joints and leaving the content
   plain is the honest version, and it is the version that helps: a
   learner who can see the linker and the verb group can see the shape.

   Usage: node tools/jobs.js [--apply] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}

/* every one of these is a closed class: the list is the whole membership */
/* `that` can be a determiner ("that book") and `what` can head a cleft or
   a question; neither is reliably a linker, so neither is here. */
const LINKER = new Set(('although though but and or so because since when while if unless ' +
  'whereas however therefore than whether after before until once nor')
  .split(' '));
const VERB = new Set(('is are am was were be been being has have had do does did will would ' +
  'can could shall should may might must not nt cannot don doesn didn won wouldn couldn ' +
  'shouldn isn aren wasn weren hasn haven hadn')
  .split(' '));
/* Subject-only forms. `it` and `you` are the same word as subject and as
   object, and labelling "explain it" a subject would teach the opposite of
   the truth, so they are left plain. */
const SUBJECT = new Set('i he she we they there who'.split(' '));
const ADVERBIAL = new Set(('usually always often sometimes never rarely still already yet ' +
  'again twice once here there now then today yesterday tomorrow aloud quietly first ' +
  'later earlier afterwards meanwhile')
  .split(' '));
/* `to` is left out: before a bare verb it marks an infinitive rather than
   a direction, and telling the two apart needs to know what follows. */
const PREP = new Set(('in on at for with from of by about into over under through during ' +
  'between within without across against among')
  .split(' '));

const bare = w => String(w).toLowerCase().replace(/[^a-z']/g, '').replace(/'/g, '');

function jobsFor(target) {
  const out = {};
  String(target).trim().split(/\s+/).forEach(w => {
    const k = bare(w);
    if (!k) return;
    if (LINKER.has(k)) out[w] = 'linker';
    else if (VERB.has(k)) out[w] = 'verb';
    else if (SUBJECT.has(k)) out[w] = 'subject';
    else if (ADVERBIAL.has(k)) out[w] = 'adverbial';
    else if (PREP.has(k)) out[w] = 'adverbial';
  });
  return out;
}

let scenes = 0, items = 0, tagged = 0, words = 0, marked = 0;
const edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      if (s.kind !== 'orderset' && s.kind !== 'order') continue;
      scenes++;
      (s.items || [s]).forEach((it, j) => {
        if (!it.target || it.jobs) return;
        items++;
        const jobs = jobsFor(it.target);
        const n = Object.keys(jobs).length;
        /* A sentence of nothing but content words is a real case, not a
           gap: "Bring one set of notes and one past paper" has no linker,
           no auxiliary and no subject pronoun. Writing an empty map says
           this was examined and there is nothing to colour, which is
           different from not having looked. */
        if (n) tagged++;
        words += it.target.trim().split(/\s+/).length;
        marked += n;
        (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, j, jobs, target: it.target });
      });
    }
  }
}

console.log(`${scenes} ordering scenes, ${items} sentences, ${tagged} with structural words`);
console.log(`  ${marked} of ${words} words coloured (${Math.round(marked / words * 100)}%) — the rest are content`);
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

let written = 0, skipped = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  /* anchor on each item's own target string, which is unique in a file */
  for (const e of edits[file].slice().reverse()) {
    const needle = 'target: "' + e.target.replace(/"/g, '\\"') + '"';
    const at = src.indexOf(needle);
    if (at < 0) { skipped++; continue; }
    if (src.indexOf(needle, at + 1) >= 0) { skipped++; continue; }   /* not unique: skip */
    const ins = at + needle.length;
    const pairs = Object.keys(e.jobs)
      .map(w => `"${w.replace(/"/g, '\\"')}": "${e.jobs[w]}"`).join(', ');
    src = src.slice(0, ins) + ', jobs: { ' + pairs + ' }' + src.slice(ins);
    written++;
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote jobs on ${written} sentences` + (skipped ? `, ${skipped} skipped as ambiguous` : ''));
