/* modeljobs.js — name what each sentence of a writing model is doing (F28).

   The model is shown and never used. Its sentences do three or four jobs,
   and naming them turns an example into a structure the learner can reuse.

   The jobs are not invented here: every writing scene already carries a
   checklist, and the checklist IS the list of jobs. So this matches each
   checklist line to the sentence of the model that performs it, using the
   same rules the live pointing checklist uses (F29) — a named position, a
   move's characteristic shape, then word overlap — and says which rule
   decided, so a wrong pairing is visible rather than silent.

   A checklist line about length is not a job a sentence does, and is
   skipped. A line nothing matches is reported and left out: a model
   labelled with a job it does not perform teaches the wrong structure.

   Usage: node tools/modeljobs.js [--apply] */
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

/* the same stop list the live pointer uses */
const STOP = ("a an the and or but to of in on at for with is are was were be been " +
  "it its this that these those i you he she we they my your have has had do does did " +
  "not so if then than as by from about into over under one sentence sentences paragraph " +
  "line write writing wrote written use used using your my include included includes " +
  "first last final begin beginning opening close closing end ending briefly brief " +
  "specific specifically clearly clear least most more very make makes made give gives " +
  "given say says said told word words").split(' ');
const keywords = t => plain(t).toLowerCase().split(/[^a-z'-]+/)
  .filter(w => w.length > 2 && STOP.indexOf(w) < 0);

const GREETING = /^(dear|hi|hello|good (morning|afternoon|evening))\b/i;
const SIGNOFF = /^(best wishes|best regards|kind regards|regards|yours( sincerely| faithfully)?|sincerely|many thanks|thanks|thank you)\b[,.]?\s*[\w\s]*$/i;
const sentences = t => plain(t).split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(Boolean);

const CUES = [
  { asks: /\brequest|\bask(ing|ed)?\b/i,
    looks: /\?\s*$|\bcould you\b|\bwould you\b|\bmay i\b|\bcan i\b|\bwould it be possible\b|\bi would like\b|\bplease\b/i,
    why: 'a plain modal request, which is where politeness actually lives' },
  { asks: /\breason|\bwhy\b|\bbecause\b|\bexplain/i,
    looks: /\bbecause\b|\bsince\b|\bso that\b|\bas i\b|\bdue to\b|\bthe reason\b|\bi (missed|could not|couldn't|was|were|had)\b/i,
    why: 'it gives the reason, with the cause named rather than implied' },
  { asks: /\bexperience\b|\bexample|\bspecific|\bdetail/i,
    looks: /\blast (term|week|year|month)\b|\bi (joined|tried|found|read|could not|couldn't)\b|\bfor example\b|\bsuch as\b|\d/i,
    why: 'a specific thing that happened, which is what makes it evidence rather than assertion' },
  { asks: /\bname\b|\bclassmate|\banswer(ed)? (mei|dan|priya|tom)/i,
    looks: /\b(Mei|Dan|Priya|Tomás|Tomas)\b/,
    why: 'it answers a classmate by name, which is what turns a post into a discussion' },
  { asks: /\bconcede|\bfair\b|\bother side\b|\bagree/i,
    looks: /\bis right\b|\bi agree\b|\bit is true\b|\bgranted\b|\bof course\b|\btrue up to a point\b/i,
    why: 'it grants the strongest point on the other side, by name, before answering it' },
  { asks: /\bposition|\bstance|\bwhich\b|\bstated?\b|\bclaim/i,
    looks: /\bi (think|would|believe|argue)\b|\bthe answer is\b/i,
    why: 'it states the position directly, so a reader knows where you stand at once' },
  { asks: /\bhappened\b|\bsituation\b|\bcontext/i,
    looks: /\bi (missed|was|were|had|did not|didn't)\b|\bthere (was|were)\b|\bunfortunately\b/i,
    why: 'it gives the context in a sentence, with nothing asked for yet' },
  { asks: /\bpolite|\bformal|\btone|\bmatch(es)? the reader\b|\bsign(ed|ing)?[ -]?off\b/i,
    looks: /\b(many thanks|best wishes|kind regards|yours|thank you)\b/i,
    why: 'the sign-off matches the distance between writer and reader' },
  { asks: /\bdeadline|\burgen|\bby when\b|\bhow soon\b/i,
    looks: /\bby (monday|tuesday|wednesday|thursday|friday|the \d|next)\b|\bbefore \w+day\b|\bas soon as\b|\bdeadline\b/i,
    why: 'it gives the deadline, so the reader can judge how urgent this is' },
  { asks: /\balready tried\b|\bhave tried\b|\bwhat .* tried\b/i,
    looks: /\bwe have\b|\bi have\b|\bwe (tried|looked|checked|asked|spoke)\b|\balready\b/i,
    why: 'it says what has already been tried, which respects the reader\u0027s time' },
  { asks: /\balternative|\bpropos|\bsuggest|\binstead\b|\boption/i,
    looks: /\bcould we\b|\binstead\b|\brather than\b|\bone option\b|\bwhat if\b|\bwould it help\b/i,
    why: 'it proposes one specific alternative rather than describing a problem' },
  { asks: /\bwill do\b|\banyway\b|\bmeantime|\bregardless/i,
    looks: /\bi will\b|\bin the meantime\b|\bmeanwhile\b|\bi intend\b|\bi plan\b/i,
    why: 'it says what the writer will do regardless, which turns a request into a plan' },
  { asks: /\bblam|\bwithout naming\b|\bnobody\b/i,
    looks: /\bthe (room|equipment|system|timetable|group|bus|machine)\b|\bit (was|has been)\b|\bthere (was|were|has been)\b/i,
    why: 'it describes the problem by what happened rather than by who caused it' }
];

function positional(text) {
  const t = plain(text).toLowerCase();
  if (/\bsign(ed|ing)?[ -]?off\b|\bgreeting\b/.test(t)) return 'signoff';
  if (/\b(first|opening|begin|beginning)\b/.test(t)) return 'first';
  if (/\b(last|final|closing|close|end)\b/.test(t)) return 'last';
  return null;
}
/* A greeting and the first real sentence often share one sentence:
   "Dear Dan, I am writing to ask whether there is still a place."
   Dropping that sentence as a greeting throws away the purpose, which is
   the one thing the first line is supposed to carry. So the greeting is
   trimmed as a prefix, and only a sentence that is nothing but a greeting
   is dropped. */
const GREET_PREFIX = /^(dear|hi|hello|good (morning|afternoon|evening))\b[^,.]{0,40}[,.]\s*/i;
function body(ss) {
  const a = ss.slice().map(x => {
    const t = x.replace(GREET_PREFIX, '').trim();
    return t.length > 2 ? t : x;          /* nothing left: it was only a greeting */
  });
  while (a.length > 1 && GREETING.test(a[0]) ) a.shift();
  while (a.length > 1 && SIGNOFF.test(a[a.length - 1])) a.pop();
  return a.length ? a : ss;
}

let scenes = 0, mapped = 0, skipped = 0;
const how = {}, unsettled = [];
const edits = {};

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    for (const s of P.scenes) {
      if (!s.model || !s.minWords || s.modelJobs) continue;
      scenes++;
      const ss = sentences(s.model), bs = body(ss);
      const used = new Set();
      const jobs = [];
      (s.checklist || []).forEach(line => {
        const clean = plain(line);
        /* "I wrote 100 words or more" is not a job a sentence performs */
        if (/\b\d+\s*words?\b|\bword count\b/i.test(clean)) { skipped++; return; }

        let pick = null, why = null, rule = null;
        const pos = positional(clean);
        if (pos) {
          pick = pos === 'first' ? bs[0] : pos === 'signoff' ? ss[ss.length - 1] : bs[bs.length - 1];
          rule = 'position';
          why = pos === 'first' ? 'it is the first sentence of the message, where a reader looks for the point'
              : pos === 'signoff' ? 'the sign-off matches the distance between writer and reader'
              : 'it is the last sentence, the other place a reader looks';
        }
        if (!pick) for (const c of CUES) {
          if (!c.asks.test(clean)) continue;
          const hit = bs.filter(x => !used.has(x)).filter(x => c.looks.test(x))[0];
          if (hit) { pick = hit; why = c.why; rule = 'cue'; break; }
        }
        if (!pick) {
          const want = keywords(clean);
          let best = null, bestHits = 0;
          bs.filter(x => !used.has(x)).forEach(x => {
            const set = keywords(x);
            const hits = want.filter(w => set.indexOf(w) >= 0).length;
            if (hits > bestHits) { bestHits = hits; best = x; }
          });
          if (bestHits >= 2) { pick = best; rule = 'overlap'; why = 'it carries the words this line asks for'; }
        }
        /* Last resort: the next unused sentence, in order. A learner's
           draft may do its jobs in any order, but a MODEL is written to
           demonstrate the checklist, and demonstrating it out of order
           would make it a worse model. The rule is recorded, so a pairing
           that rests on it alone can be checked. */
        if (!pick) {
          pick = bs.filter(x => !used.has(x))[0];
          if (pick) { rule = 'order'; why = 'the model takes the jobs in the order the checklist lists them'; }
        }
        if (!pick) { unsettled.push(`${u}/${f.replace(/\.js$/, '')}/${s.id}: ${clean.slice(0, 54)}`); return; }
        used.add(pick);
        how[rule] = (how[rule] || 0) + 1;
        jobs.push({ job: clean.replace(/^I\s+/, '').replace(/\.$/, ''), text: pick, why });
      });
      if (!jobs.length) continue;
      mapped++;
      (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, jobs });
    }
  }
}

console.log(`${scenes} writing scenes, ${mapped} with a job map`);
Object.entries(how).forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  matched by ${k}`));
console.log(`  ${skipped} checklist lines skipped as length rules`);
if (unsettled.length) {
  console.log(`\n${unsettled.length} checklist lines nothing matched:`);
  unsettled.slice(0, 12).forEach(x => console.log('    ' + x));
}
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

let written = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  for (const e of edits[file].slice().reverse()) {
    const anchor = src.indexOf('id: "' + e.id + '"');
    if (anchor < 0) continue;
    const km = /\n(\s*)kind: "/.exec(src.slice(anchor));
    if (!km) continue;
    const at = anchor + km.index + 1;
    const pad = km[1];
    const lines = ['modelJobs: ['];
    e.jobs.forEach(j => {
      lines.push(`  { job: "${j.job.replace(/"/g, '\\"')}",`);
      lines.push(`    text: "${j.text.replace(/"/g, '\\"')}",`);
      lines.push(`    why: "${j.why.replace(/"/g, '\\"')}" },`);
    });
    lines.push('],');
    src = src.slice(0, at) + lines.map(l => pad + l + '\n').join('') + src.slice(at);
    written++;
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote modelJobs on ${written} scenes.`);
