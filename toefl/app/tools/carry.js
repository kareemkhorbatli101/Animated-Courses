/* carry.js — propose (and with --apply, write) the `from` reference that
   makes F2 true: a scene may not ask about a stimulus it does not carry.

   The passage, chart or talk keeps its single home. A scene that asks about
   it names that scene in `from`, and the deck carries it in at render time.
   Copying the text into both scenes would be the other way to do this, and
   it would mean two copies free to drift apart.

   Usage: node tools/carry.js            report
          node tools/carry.js --apply    write the `from` fields */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');
const APPLY = process.argv.includes('--apply');

function load(p) { const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w); return w.PAGE; }

const REFERS = /\b(the|that) (article|passage|reading|chart|graph|table|talk|lecture|conversation|discussion|announcement|text|card|notice|poster|leaflet|flyer|email|message|advert|advertisement|sign|schedule|timetable|form|receipt|label|post)\b|\bin \d[A-E]\b|\blook back\b|\bthe first (talk|speaker)\b/i;
const wantsChart = t => /\b(chart|graph|figure)\b/i.test(t);
const wantsAudio = t => /\b(talk|lecture|conversation|discussion|announcement|speaker|hear)\b/i.test(t);
const hasText  = s => !!s.text;
const hasChart = s => !!s.chart;
const hasAudio = s => !!(s.audio && s.audio.lines);
const carries  = s => hasText(s) || hasChart(s) || hasAudio(s);
/* the same split the reader uses, so a line number here means the line the
   learner will see numbered on screen */
function textLines(s) {
  if (!s.text) return [];
  const out = [];
  (s.text.blocks || []).forEach(b => {
    const units = b.lines || String(b.text).split(/(?<=\.)\s+/);
    units.forEach(t => out.push(String(t)));
  });
  return out;
}

let proposed = 0, unresolved = [], edits = {};
for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f))) {
    const P = load(path.join(dd, f));
    if (!P || !P.scenes) continue;
    P.scenes.forEach((s, i) => {
      if (carries(s) || s.from) return;
      /* strip tags first: the prompts write "the line of the <b>card</b>",
         and a regex looking for "the card" never sees it through the markup */
      const blob = (String(s.prompt || '') + ' ' + JSON.stringify(s.items || ''))
        .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
      if (!REFERS.test(blob)) return;
      /* What kind of thing is it pointing at, and which scene really has it?

         Nearest-preceding is the obvious heuristic and it is wrong. In
         u01/l5 it hands the T/F/NI exercise a four-line workshop poster
         when the statements cite line 5 of a nine-line article two scenes
         earlier. A wrong source here is worse than none: it teaches the
         learner to cite confidently from the wrong text.

         So candidates are scored on evidence. A scene that cites line N
         must have a line N, and the words the rationale quotes should be
         in it. */
      const want = wantsChart(blob) ? hasChart : wantsAudio(blob) ? hasAudio : hasText;
      const cand = P.scenes.filter((c, j) => j !== i && want(c));
      const cited = (s.items || []).map(it => it && it.line).filter(n => n != null);
      const words = t => String(t).toLowerCase().replace(/<[^>]+>/g, ' ')
        .split(/[^a-z']+/).filter(w => w.length > 4);
      const quoted = words(JSON.stringify(s.items || []) + ' ' + (s.prompt || ''));

      /* A preview task deliberately does not quote the passage — that is
         what previewing is — so lexical overlap cannot find its source.
         What it needs is the article itself: the scene with the masthead
         and the headings, which is what the learner previews. */
      const isPreview = /\bpreview\b|before you read|look at the title/i.test(blob);
      let src = null, bestScore = -1, tied = false;
      if (isPreview) {
        const art = cand.filter(c => c.text && (c.text.masthead ||
          (c.text.blocks || []).some(b => b.h)));
        if (art.length) { src = art[0]; bestScore = 100; }
      }
      /* Scoring, in priority order:

         1. cited-line evidence — does the line this item cites actually
            contain the words its rationale uses? This is the only hard
            evidence available and it outranks everything.
         2. proximity — on a tie, the nearer preceding scene. u09/l5/5b
            cites "every ten minutes from November" and its rationale also
            mentions "the earlier card said every fifteen"; both cards score
            the same on evidence, and the one being asked about is the one
            just shown, not the one it contrasts with.
         3. loose word overlap, which only breaks remaining ties. */
      let best = null;
      for (const c of (src ? [] : cand)) {
        const ls = textLines(c);
        /* hard requirement: every cited line must exist in this candidate */
        if (cited.length && ls.length && cited.some(n => n > ls.length)) continue;

        let citeHits = 0;
        for (const it of (s.items || [])) {
          if (it && it.line != null && ls[it.line - 1]) {
            const lw = new Set(words(ls[it.line - 1]));
            if (words(it.why || it.stem || '').filter(w => lw.has(w)).length >= 2) citeHits++;
          }
        }
        const cw = new Set(words(ls.join(' ') || JSON.stringify(c.chart || c.audio || '')));
        let overlap = 0;
        for (const w of quoted) if (cw.has(w)) overlap += 1;

        const at = P.scenes.indexOf(c);
        /* nearer preceding beats further; anything after the scene is last */
        const prox = at < i ? i - at : 1000 + at;
        const cand2 = { c, citeHits, prox, overlap };
        if (!best) { best = cand2; continue; }
        if (citeHits !== best.citeHits) { if (citeHits > best.citeHits) best = cand2; continue; }
        if (prox !== best.prox) { if (prox < best.prox) best = cand2; continue; }
        if (overlap > best.overlap) best = cand2;
      }
      if (best && !src) {
        /* a candidate with neither evidence nor overlap is a guess */
        if (best.citeHits > 0 || best.overlap > 0) { src = best.c; bestScore = best.citeHits * 100 + best.overlap; }
      }

      /* an unscored guess is a guess; say so instead of writing it */
      if (src && bestScore <= 0) src = null;

      const where = `${u}/${f.replace(/\.js$/, '')}/${s.id}`;
      if (!src) {
        unresolved.push(`${where} (${s.kind}) — ${cand.length ? 'no candidate on this page matches the evidence' : 'nothing on this page carries it'}`);
        return;
      }
      proposed++;
      (edits[path.join(dd, f)] = edits[path.join(dd, f)] || []).push({ id: s.id, from: src.id });
      if (!APPLY && proposed <= 18)
        console.log(`  ${where.padEnd(20)} ${s.kind.padEnd(12)} <- ${src.id}  (${src.text ? 'text' : src.chart ? 'chart' : 'audio'}, score ${bestScore})`);
    });
  }
}
console.log(`\n${proposed} scenes would carry their stimulus by reference.`);
if (unresolved.length) {
  console.log(`\n${unresolved.length} refer to something no scene on their page carries:`);
  unresolved.forEach(u => console.log('  ' + u));
}
if (!APPLY) { console.log('\nRun with --apply to write them.'); process.exit(0); }

let written = 0;
for (const file of Object.keys(edits)) {
  let src = fs.readFileSync(file, 'utf8');
  for (const e of edits[file]) {
    /* anchor on this scene's own id, then its kind line, and insert before it */
    const re = new RegExp('(\\{\\s*id:\\s*"' + e.id + '"[\\s\\S]{0,400}?)(\\n(\\s*)kind:)');
    const before = src;
    src = src.replace(re, (m, head, kindPart, indent) => `${head}\n${indent}from: "${e.from}",${kindPart}`);
    if (src === before) { console.log(`  ! could not place from on ${path.basename(file)}/${e.id}`); continue; }
    written++;
  }
  fs.writeFileSync(file, src);
}
console.log(`wrote ${written} \`from\` fields.`);
