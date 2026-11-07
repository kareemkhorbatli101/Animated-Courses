/* extras.js — explain each spare tile in an ordering exercise (F27).

   632 spare words across 48 scenes, 273 of them distinct. Writing 632
   bespoke notes invites 632 chances to say something inaccurate about a
   sentence, so this classifies instead, and only claims what it can check:

   1. The spare is a form of a word already in the target. The sentence
      uses one form and not the other, and the note says which.
   2. The spare is a function word with a known job. The note says what
      that job is and that this sentence has no work for it.
   3. Neither. The note says only that nothing here needs the word, which
      is true of every spare tile by definition.

   Anything an author writes by hand on an item wins over all three.

   Usage: node tools/extras.js          report
          node tools/extras.js --apply  write them */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}

/* what a function word does, said once and reused */
const JOB = {
  will: 'marks the future', would: 'marks a hypothetical or a polite request',
  can: 'marks ability or permission', could: 'marks possibility or a polite request',
  was: 'is a past form of <i>be</i>', were: 'is a past form of <i>be</i>',
  is: 'is a present form of <i>be</i>', are: 'is a present form of <i>be</i>',
  am: 'is a present form of <i>be</i>', been: 'is the participle of <i>be</i>',
  being: 'is the <i>-ing</i> form of <i>be</i>',
  has: 'builds the present perfect', have: 'builds the present perfect',
  did: 'builds a past question or negative', do: 'builds a question or negative',
  does: 'builds a question or negative', not: 'negates',
  because: 'introduces a reason clause', so: 'introduces a result',
  since: 'marks a starting point in time, or a reason',
  although: 'concedes before the main clause', though: 'concedes',
  however: 'contrasts with what came before', therefore: 'marks a conclusion',
  whereas: 'sets two things against each other', despite: 'concedes a noun, not a clause',
  unless: 'states the one condition that would prevent it',
  which: 'opens a relative clause', who: 'opens a relative clause about a person',
  that: 'opens a relative or reported clause', when: 'opens a time clause',
  before: 'opens a time clause', after: 'opens a time clause', until: 'marks a boundary in time',
  while: 'marks something going on at the same time', if: 'opens a condition',
  and: 'joins two things of the same kind', but: 'joins two things that conflict',
  very: 'intensifies an adjective or adverb', more: 'builds a comparative of a long adjective',
  most: 'builds a superlative of a long adjective', than: 'follows a comparative',
  as: 'makes a comparison of equals, or means <i>because</i>',
  too: 'adds to a positive statement', either: 'adds to a negative statement',
  neither: 'negates both of two things', also: 'adds',
  yet: 'marks <i>up to now</i>, in questions and negatives',
  ever: 'marks <i>at any time</i>, in questions', already: 'marks <i>sooner than expected</i>',
  never: 'means <i>not at any time</i>', for: 'measures a length of time, or marks a purpose',
  to: 'marks an infinitive or a direction', by: 'marks an agent or a deadline',
  with: 'marks accompaniment or an instrument', from: 'marks an origin',
  over: 'marks movement across or a period', down: 'is a particle', up: 'is a particle',
  then: 'marks the next step', firstly: 'opens a sequence', we: 'is a subject pronoun',
  our: 'is a possessive determiner', used: 'builds <i>used to</i> for a past habit'
};

/* is the spare a form of a word already in the target? */
function variantOf(extra, target) {
  const e = String(extra).toLowerCase().replace(/[^a-z']/g, '');
  if (e.length < 4) return null;
  for (const w of String(target).toLowerCase().split(/[^a-z']+/)) {
    if (w.length < 4 || w === e) continue;
    const n = Math.min(w.length, e.length);
    let i = 0;
    while (i < n && w[i] === e[i]) i++;
    /* four shared letters and a difference only at the end: study/studying */
    if (i >= 4 && i >= Math.min(w.length, e.length) - 4) return w;
  }
  return null;
}

/* a crude syllable count, enough to tell a short adjective from a long one */
const syllables = w => (String(w).toLowerCase().match(/[aeiouy]+/g) || []).length;

function explain(extra, target) {
  const e = String(extra);
  const v = variantOf(e, target);

  /* "difficulter" is not another form of difficult; it is not a word. Saying
     so is Unit 3's rule, and calling it a form would teach the opposite. */
  if (v && /(er|est)$/.test(e.toLowerCase()) && syllables(v) >= 3)
    return '<i>' + e + '</i> is not a word. A long adjective like <b>' + v +
      '</b> takes <i>more</i> or <i>most</i> in front of it, never an ending.';

  /* the possessive pronouns are the one place an apostrophe never goes */
  if (/[a-z]s['\u2019]$|^(their|our|your|her|its)['\u2019]s$/i.test(e))
    return '<i>' + e + '</i> has an apostrophe it should not. The possessive pronouns \u2014 ' +
      '<b>ours, yours, theirs, hers, its</b> \u2014 never take one.';

  if (v) return 'The sentence uses <b>' + v + '</b>. <i>' + e +
    '</i> is the same word in another form, and only one of them fits this slot.';
  const key = String(extra).toLowerCase().replace(/[^a-z']/g, '');
  if (JOB[key]) return '<i>' + extra + '</i> ' + JOB[key] +
    ' — and nothing in this sentence needs that done.';
  return 'Nothing in this sentence needs <i>' + extra + '</i>. A word you cannot name a job for is the spare one.';
}

let scenes = 0, written = 0, byKind = { variant: 0, job: 0, generic: 0 };
const edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      if (s.kind !== 'orderset') continue;
      scenes++;
      (s.items || []).forEach((it, j) => {
        if (!it.extra || !it.extra.length || it.extraWhy) return;
        const map = {};
        it.extra.forEach(x => {
          const text = explain(x, it.target || '');
          map[x] = text;
          if (/same word in another form/.test(text)) byKind.variant++;
          else if (/nothing in this sentence needs that done/.test(text)) byKind.job++;
          else byKind.generic++;
        });
        (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, j, map });
        written++;
      });
    }
  }
}

console.log(`${scenes} ordering scenes, ${written} items would gain an explanation for every spare tile`);
console.log(`  ${byKind.variant} explained as another form of a word in the sentence`);
console.log(`  ${byKind.job} explained by what the function word does`);
console.log(`  ${byKind.generic} with no job that can be named`);
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

/* Write them by position, not by pattern. The edits for a file are
   collected in document order and `extra:` appears exactly once per item,
   so the nth list gets the nth map. A regex that rewrote "the first extra
   without an extraWhy" would attach every map to the same item. */
let applied = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  const spots = [];
  const re = /extra: \[[^\]]*\],/g;
  let m;
  while ((m = re.exec(src))) spots.push({ at: m.index + m[0].length, text: m[0] });

  /* A file can hold `extra:` on a scene this tool does not touch, so the
     nth list is not reliably the nth map. Walk forward and take the next
     spot whose words are exactly this map's words. */
  const list = edits[file];
  const chosen = [];
  let cursor = 0;
  for (const e of list) {
    const keys = Object.keys(e.map);
    let found = -1;
    for (let i = cursor; i < spots.length; i++) {
      const words = (spots[i].text.match(/"((?:[^"\\]|\\.)*)"/g) || [])
        .map(x => x.slice(1, -1).replace(/\\"/g, '"'));
      if (words.length === keys.length && keys.every(k => words.indexOf(k) >= 0)) { found = i; break; }
    }
    if (found < 0) { console.log(`  ! ${path.basename(file)}: no list matches ${JSON.stringify(keys)}`); continue; }
    chosen.push({ at: spots[found].at, map: e.map });
    cursor = found + 1;
  }

  /* back to front, so earlier offsets stay valid */
  for (let i = chosen.length - 1; i >= 0; i--) {
    const keys = Object.keys(chosen[i].map);
    const lines = keys.map(k =>
      `"${k.replace(/"/g, '\\"')}": "${chosen[i].map[k].replace(/"/g, '\\"')}"`).join(', ');
    src = src.slice(0, chosen[i].at) + ' extraWhy: { ' + lines + ' },' + src.slice(chosen[i].at);
    applied++;
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote extraWhy on ${applied} items.`);
