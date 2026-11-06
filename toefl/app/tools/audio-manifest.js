/* audio-manifest.js — every line in the book that needs recording (F39).

   The book speaks through the browser's speech engine, which is available
   everywhere and good nowhere. Recorded human audio should be able to drop
   in later without anyone editing the lesson data, so every spoken line
   gets a stable filename now, derived from where it sits.

   The player already prefers a file and falls back to speech when the file
   is missing, so dropping the recordings into assets/audio/ is the whole
   installation step.

   Writes:
     audio/manifest.json   what the player looks up
     audio/record-list.csv a voice artist can read, one row per line
     tools/.audio-manifest.json  what tools/coverage.js reads for F39

   Usage: node tools/audio-manifest.js */
'use strict';
const fs = require('fs'), path = require('path');
const ROOT = path.join(__dirname, '..');

function load(p) {
  const src = fs.readFileSync(p, 'utf8'), w = {};
  new Function('window', src + '\n;return window.PAGE;')(w);
  return w.PAGE;
}

/* cast accents, read from the source so they cannot drift */
const VOICE = {};
{
  const src = fs.readFileSync(path.join(ROOT, 'assets/cast.js'), 'utf8');
  for (const m of src.matchAll(/^\s{4}(\w+):\s*\{\s*name:\s*"([^"]+)"[^}]*accent:\s*"([^"]+)"/gm))
    VOICE[m[1]] = { name: m[2], accent: m[3] };
}

const plain = s => String(s == null ? '' : s)
  .replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

/* The file name is derived from the LINE, not from its position. A name
   built from "this is the third player on the scene" goes wrong the first
   time a renderer adds a player or reorders one, and goes wrong silently:
   the learner hears the wrong recording. Keyed on the text, a recording
   can only ever play against the words it was made for.

   FNV-1a, 32-bit. The same four lines live in assets/audio.js; they must
   agree, and they are short enough to check by eye. */
function hash(str) {
  var h = 0x811c9dc5;
  for (var i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
  }
  return ('0000000' + h.toString(16)).slice(-8);
}

const rows = [];
const units = new Set();
function add(unit, block, scene, n, who, text, why) {
  text = plain(text);
  if (!text) return;
  const v = VOICE[who] || { name: who || 'narrator', accent: 'en-US' };
  rows.push({
    file: `${unit}-${block}-${scene}-${hash(text)}.mp3`,
    unit, block, scene, who: who || '', speaker: v.name, accent: v.accent,
    words: text.split(/\s+/).length, role: why, text
  });
}

for (const u of fs.readdirSync(ROOT).filter(d => /^u\d\d$/.test(d)).sort()) {
  const dd = path.join(ROOT, u, 'data');
  if (!fs.existsSync(dd)) continue;
  units.add(u);
  for (const f of fs.readdirSync(dd).filter(f => /\.js$/.test(f)).sort()) {
    const block = f.replace(/\.js$/, '');
    let P; try { P = load(path.join(dd, f)); } catch (e) { continue; }
    for (const s of (P.scenes || [])) {
      let n = 0;
      /* a talk or conversation: one file per line, so a segment can be
         replayed on its own (F49) */
      if (s.audio && Array.isArray(s.audio.lines))
        s.audio.lines.forEach(l => add(u, block, s.id, ++n, l.who || s.speaker, l.text, 'dialogue'));
      /* items that carry their own short line */
      (s.items || []).forEach(it => {
        if (it && it.say) add(u, block, s.id, ++n, it.who || s.speaker, it.say, 'item prompt');
        if (it && s.kind === 'dictation' && it.answer)
          add(u, block, s.id, ++n, s.speaker, it.answer, 'dictation line');
      });
      /* sentences to repeat and phrases to shadow */
      (s.lines || []).forEach(l => { if (l && l.text) add(u, block, s.id, ++n, s.speaker, l.text, 'repeat'); });
      (s.phrases || []).forEach(ph => { if (ph) add(u, block, s.id, ++n, s.speaker, ph.say || ph.text, 'phrase'); });
      /* the question in a speaking task, and its model answer (F33) */
      if (s.question) add(u, block, s.id, ++n, s.speaker, s.question, 'question');
      if (s.model && s.seconds) add(u, block, s.id, ++n, 'you', s.model, 'model answer');
    }
  }
}

const byUnit = {};
rows.forEach(r => { (byUnit[r.unit] = byUnit[r.unit] || []).push(r); });

const outDir = path.join(ROOT, 'audio');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify({
  note: 'Drop recordings into this folder under the file names below. ' +
        'The player prefers a file and falls back to the speech engine when it is missing, ' +
        'so partial recording works: record what you can, in any order.',
  generated: new Date().toISOString(),
  lines: rows.length,
  files: rows.map(r => ({ file: r.file, accent: r.accent, speaker: r.speaker, text: r.text }))
}, null, 1));

const csv = ['file,unit,block,scene,speaker,accent,words,role,text']
  .concat(rows.map(r => [r.file, r.unit, r.block, r.scene, r.speaker, r.accent, r.words, r.role,
    '"' + r.text.replace(/"/g, '""') + '"'].join(',')));
fs.writeFileSync(path.join(outDir, 'record-list.csv'), csv.join('\n') + '\n');

fs.writeFileSync(path.join(__dirname, '.audio-manifest.json'),
  JSON.stringify({ at: new Date().toISOString(), lines: rows.length,
                   units: Object.keys(byUnit).sort() }, null, 1));

const words = rows.reduce((a, r) => a + r.words, 0);
console.log(`${rows.length} lines to record, ${words} words, ~${Math.round(words / 150)} minutes of speech`);
console.log(`across ${Object.keys(byUnit).length} units\n`);
const byRole = {};
rows.forEach(r => { byRole[r.role] = (byRole[r.role] || 0) + 1; });
Object.entries(byRole).sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  ${k}`));
const byVoice = {};
rows.forEach(r => { byVoice[r.speaker + ' (' + r.accent + ')'] = (byVoice[r.speaker + ' (' + r.accent + ')'] || 0) + 1; });
console.log('\nby voice:');
Object.entries(byVoice).sort((a, b) => b[1] - a[1])
  .forEach(([k, v]) => console.log(`  ${String(v).padStart(4)}  ${k}`));
console.log(`\naudio/manifest.json and audio/record-list.csv written`);
