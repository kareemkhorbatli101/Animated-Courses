/* pack.js — build the release package.
 *
 * Course-aware: the folder inside the zip, the default file name and the
 * README all come from assets/course.js and assets/book.js, so this file
 * is identical in both courses and neither one has the other's name
 * hard-coded in it.
 *
 * One zip that opens index.html and needs no server. Everything is a
 * relative path, every script is a classic script, and the data files are
 * plain JavaScript, so the whole thing works from file:// on a stick.
 *
 * Usage: node tools/pack.js [outfile.zip]
 */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.join(__dirname, '..');
global.window = {};
require(path.join(ROOT, 'assets/course.js'));
require(path.join(ROOT, 'assets/spec.js'));
require(path.join(ROOT, 'assets/book.js'));
const B = window.BOOK, C = window.COURSE;
const SLUG = C.slug;
const OUT = path.resolve(process.argv[2] || path.join(ROOT, '..', '..', SLUG + '.zip'));

const STAGE = fs.mkdtempSync('/tmp/' + C.id + '-pack-');
const APP = path.join(STAGE, SLUG);
fs.mkdirSync(APP, { recursive: true });

function copy(rel) {
  const from = path.join(ROOT, rel), to = path.join(APP, rel);
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.copyFileSync(from, to);
}

/* assets, the book index, and every unit */
fs.readdirSync(path.join(ROOT, 'assets')).forEach(f => copy(path.join('assets', f)));
copy('index.html');
let pages = 0, data = 0;
for (const u of B.UNITS) {
  if (!fs.existsSync(path.join(ROOT, u.id))) continue;
  copy(path.join(u.id, 'index.html'));
  for (const b of B.BLOCKS) {
    const d = path.join(u.id, 'data', b.id + '.js');
    if (!fs.existsSync(path.join(ROOT, d))) continue;
    copy(path.join(u.id, b.id + '.html')); pages++;
    copy(d); data++;
  }
}

/* the two generated documents, which belong with the course and not only
   in the repository: the Arabic glossary a teacher checks, and the unit map
   a teacher plans from. Both are produced by tools/glossary.js and
   tools/unitmap.js and both are held to the data files by tools/check.js. */
let docs = 0;
['GLOSSARY-AR.md', 'UNIT-MAP.md'].forEach(f => {
  const from = path.join(ROOT, '..', f);
  if (!fs.existsSync(from)) return;
  fs.copyFileSync(from, path.join(APP, f));
  docs++;
});

/* the recording manifest, so human audio can be dropped in later */
let audioFiles = 0;
if (fs.existsSync(path.join(ROOT, 'audio'))) {
  for (const f of fs.readdirSync(path.join(ROOT, 'audio'))) {
    copy(path.join('audio', f));
    audioFiles++;
  }
}

/* a README that says what this is and what it needs */
const perUnit = B.unitTotal(B.UNITS[0].id);
const blockLines = B.BLOCKS.map(b =>
  '    ' + (b.n ? 'Lesson ' + b.n : '        ').padEnd(10) + b.name).join('\n');
fs.writeFileSync(path.join(APP, 'README.txt'),
`${C.title} — a ${B.UNITS.length}-unit course
${'='.repeat(C.title.length + 20)}

Open index.html in any modern browser. No server, no install, no network.
Everything works from this folder, including from a USB stick.

What is here
  ${B.UNITS.length} units, each with ${B.BLOCKS.length} pages:
${blockLines}

  ${perUnit} scored items per unit against the published task budget, plus
  12 mixed review items, so ${perUnit * B.UNITS.length} scored across the book.

  Level: CEFR ${C.cefr.join(' to ')}.

Where the measurements come from
  The task types, the reading lengths, the audio durations and the word
  counts for writing come from the Cambridge Business English handbooks
  (B1 Business Preliminary and B2 Business Vantage). assets/spec.js marks
  every figure as either published or this course's own, and never
  invents one: a figure Cambridge does not publish is null there, and
  tools/check.js then falls back to a consistency rule across the book
  instead of pretending to a band.

  Those exams were withdrawn after 2024. They are used here as a
  structural and pedagogical reference, which is what they are good for,
  and not as an exam this course prepares you to sit. See
  research/baseline.md for the figures as published.

Audio
  Every listening exercise falls back to your browser's own speech
  synthesis if no recording is present, so the book is complete without
  any audio files. On Windows the voices are installed with the system;
  on macOS and Linux the browser supplies them.

  audio/record-list.csv lists every spoken line in the book with the
  voice it belongs to, and audio/manifest.json gives each one the file
  name the player looks for. Drop recordings into audio/ under those
  names and they are used instead of the speech engine; the name comes
  from the line itself, so a recording can only ever play against the
  words it was made for. Recording part of the book works: what exists
  is played and the rest is spoken.

  The cast in assets/cast.js are invented people, and the voice each one
  is given is whatever the browser has. It is not a claim about how a
  Syrian colleague sounds.

Arabic
  The interface can be switched to Arabic with the button beside the
  theme switch, and every exercise has an Explain overlay in Arabic.
  Only the controls, the labels and the explanations change. Not one
  word of the English being taught is translated, because translating a
  passage or an option would remove the exercise.

  GLOSSARY-AR.md holds every Arabic gloss in the course, by unit and
  alphabetically. It is generated from the lessons themselves, so it
  cannot drift from them. It has not been checked by a native-speaker
  translator: treat it as a working draft.

  UNIT-MAP.md says what each unit teaches and which published task sits
  on which page.

Help while you work
  Every exercise offers three hints, graded from a nudge to the method,
  and none of them is the answer. Most offer a worked first item, which
  fades as the unit goes on. Before checking you can say how many you
  expect to get right, and the book keeps the gap between that and your
  score, per unit.

Microphone
  The speaking exercises try to record you and will quietly fall back to
  self-assessment if they cannot. Recording does not work from file://,
  because the page has no origin the browser will trust. If you want it,
  serve the folder over http://localhost — any static server will do.

Progress
  Progress is stored in your browser, per browser and per machine. It is
  not sent anywhere and it does not follow you to another computer.
  Clearing site data clears it. This course stores under its own key
  prefix, so running it beside the TOEFL course does not mix the two.

Keyboard
  Everything is reachable by keyboard. In the drag exercises: Tab to a
  card, Enter to pick it up, Tab to a target, Enter to drop. Escape puts
  it back.
`);

/* research/ travels with the package, because the README points at it */
if (fs.existsSync(path.join(ROOT, '..', 'research'))) {
  fs.mkdirSync(path.join(APP, 'research'), { recursive: true });
  for (const f of fs.readdirSync(path.join(ROOT, '..', 'research')))
    fs.copyFileSync(path.join(ROOT, '..', 'research', f), path.join(APP, 'research', f));
}

cp.execFileSync('zip', ['-q', '-r', OUT, SLUG], { cwd: STAGE });
const size = (fs.statSync(OUT).size / 1048576).toFixed(1);
console.log(`${OUT}\n  ${pages} lesson pages, ${data} data files, ` +
            `${docs} generated documents, ${audioFiles} audio manifest files, ${size} MB`);
fs.rmSync(STAGE, { recursive: true, force: true });
