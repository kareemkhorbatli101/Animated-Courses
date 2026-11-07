/* autopsy.js — for each wrong option, what in the passage it misreads (F11).

   The rationales already explain why each wrong option is wrong. What they
   cannot do is point: a learner reading "the date is a detail, not the
   point" still has to find the date. This marks the word or phrase in the
   passage that the wrong option latched onto, so the highlight can appear
   there on review.

   Two kinds of wrong answer, and they need opposite treatment:

   - It misreads something that IS in the passage. The rationale usually
     quotes or names that word, and the passage contains it, so it can be
     found and checked.
   - It asserts something the passage never says. There is nothing to
     highlight, and saying so IS the autopsy: the giveaway is that you
     cannot find it.

   Anything neither rule settles is left alone rather than guessed at.

   Usage: node tools/autopsy.js [--apply] */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}
const plain = t => String(t == null ? '' : t).replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* the passage this scene shows, whether it owns it or carries it */
function passageOf(scene, page) {
  if (scene.text) return scene.text;
  if (scene.carry) {
    const src = (page.scenes || []).filter(x => x.id === scene.carry)[0];
    if (src && src.text) return src.text;
  }
  return null;
}
function passageText(t) {
  if (!t) return '';
  return (t.blocks || []).map(b => (b.lines || [String(b.text)]).map(plain).join(' ')).join(' ');
}

/* "the article never says", "is not mentioned", "does not discuss" */
const ABSENT = /\bnever (discussed|mentioned|the [a-z]+'s)\b|\b(never (says|discusses|mentions|claims|argues|disputes)|does not (say|discuss|mention|claim|argue)|is not mentioned|are not mentioned|not in the (passage|article|text)|nothing in the (passage|article|text)|no such \w+ is (described|mentioned|made)|nowhere (says|states|in the)|does not say|do not say|is not criticised|are not criticised|not described anywhere|nowhere)\b/i;

/* a word the rationale leans on that the passage actually contains */
/* Words that describe WHERE something is, or what the rationale is doing,
   rather than what the wrong option misread. Leaving the ordinals in made
   "The second paragraph argues the reverse" highlight the word "second"
   wherever it happened to appear in the passage. */
const STOP = new Set(('the a an and or but to of in on at for with is are was were be been it its ' +
  'this that these those article passage text author writer says said which what when where ' +
  'not never does do did than then from about into over under more most very only just ' +
  'point detail opposite sentence sentences paragraph paragraphs line lines word words thing things ' +
  'first second third fourth fifth last final next previous above below here there ' +
  'reverse reversed instead rather holds argues argue claim claims subject pronoun clause ' +
  'have has had been being having will would could should must might shall ' +
  'taken given made used seen known found called itself themselves whole such ' +
  'answer answers option options correct wrong right true false').split(' '));

function misreadWord(why, passage) {
  const w = plain(why);
  /* a quoted phrase is the strongest signal */
  const q = /[“"]([^”"]{3,40})[”"]|<i>([^<]{3,40})<\/i>/.exec(String(why));
  if (q) {
    const needle = plain(q[1] || q[2]);
    if (needle && passage.toLowerCase().indexOf(needle.toLowerCase()) >= 0) return needle;
  }
  /* otherwise a distinctive word the rationale and the passage share */
  /* A four-letter function word that happens to appear in the passage is
     not what the option misread: "they have not yet been taken" would
     highlight "have". Single words must be distinctive; a quoted phrase
     has already been accepted above and is held to no such bar. */
  const cands = w.toLowerCase().split(/[^a-z0-9'-]+/)
    .filter(x => x.length > 4 && !STOP.has(x));
  const low = passage.toLowerCase();
  for (const c of cands) {
    const re = new RegExp('\\b' + c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (re.test(low)) {
      const m = re.exec(passage);
      if (m) return m[0];
    }
  }
  return null;
}

let scenes = 0, opts = 0, found = 0, absent = 0, left = 0;
const edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      const t = passageOf(s, P);
      const passage = passageText(t);
      const perItem = (s.items || []).some(i => i && i.source);
      if (!passage && !perItem) continue;
      const withOpts = (s.items || []).filter(i => i && (i.options || i.opts || []).length);
      if (!withOpts.length) continue;
      scenes++;
      withOpts.forEach((it, j) => {
        /* A paraphrase item carries its own source sentence. That sentence
           is the passage for its options, and it is the right one to
           search: the chart this scene carries has no words to misread. */
        const local = it.source ? plain(it.source) : passage;
        (it.options || it.opts).forEach((o, k) => {
          if (!o || o.correct || o.misreads) return;
          opts++;
          if (ABSENT.test(plain(o.why))) {
            absent++;
            (edits[path.join(dd, f)] = edits[path.join(dd, f)] || [])
              .push({ id: s.id, text: o.text, value: 'absent' });
            return;
          }
          const word = misreadWord(o.why, local);
          if (!word) {
            /* No single word to point at. That is itself a kind of wrong
               answer and worth naming: the option takes something that IS
               in the passage and reads more into it than it says. The
               rationale already explains which; this says what sort of
               mistake it was, so the learner can recognise the shape of it
               next time rather than only this instance. */
            left++;
            (edits[path.join(dd, f)] = edits[path.join(dd, f)] || [])
              .push({ id: s.id, text: o.text, value: 'overread' });
            return;
          }
          found++;
          (edits[path.join(dd, f)] = edits[path.join(dd, f)] || [])
            .push({ id: s.id, text: o.text, value: word });
        });
      });
    }
  }
}

console.log(`${scenes} scenes with a passage and options, ${opts} wrong options`);
console.log(`  ${found} point at a word the passage contains`);
console.log(`  ${absent} assert something the passage never says`);
console.log(`  ${left} read more into the passage than it says`);
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

/* Write inside the scene the option belongs to, walking forward through
   its option literals. `src.indexOf(optionText)` finds the FIRST match in
   the whole file, which lands on a different scene whenever two options
   share wording — and silently, because a missed write looks the same as
   a skipped one. */
let written = 0, misplaced = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  const byScene = {};
  edits[file].forEach(e => { (byScene[e.id] = byScene[e.id] || []).push(e); });

  for (const sid of Object.keys(byScene)) {
    /* the span of this scene's object literal */
    const anchor = src.indexOf('{ id: "' + sid + '"');
    if (anchor < 0) { misplaced += byScene[sid].length; continue; }
    let depth = 0, j = anchor, end = -1;
    while (j < src.length) {
      const c = src[j];
      if (c === '"') { j++; while (j < src.length && src[j] !== '"') j += src[j] === '\\' ? 2 : 1; }
      else if (c === '{') depth++;
      else if (c === '}') { depth--; if (depth === 0) { end = j + 1; break; } }
      j++;
    }
    if (end < 0) { misplaced += byScene[sid].length; continue; }

    /* collect this scene's option literals, in order */
    const body = src.slice(anchor, end);
    const spots = [];
    const re = /\{ text: "((?:[^"\\]|\\.)*)"/g;
    let m;
    while ((m = re.exec(body))) spots.push({ at: anchor + m.index + m[0].length, text: m[1] });

    for (const e of byScene[sid].slice().reverse()) {
      const want = e.text.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const hit = spots.filter(x => x.text === want && !x.used)[0];
      if (!hit) { misplaced++; continue; }
      hit.used = true;
      hit.insert = ', misreads: "' + e.value.replace(/"/g, '\\"') + '"';
    }
    /* apply this scene's insertions back to front */
    spots.filter(x => x.insert).sort((a, b) => b.at - a.at).forEach(x => {
      src = src.slice(0, x.at) + x.insert + src.slice(x.at);
      written++;
    });
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote misreads on ${written} options` +
            (misplaced ? `, ${misplaced} could not be placed and were skipped` : ''));
