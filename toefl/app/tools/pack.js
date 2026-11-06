/* pack.js — build the release package.
 *
 * One zip that opens index.html and needs no server. Everything is a
 * relative path, every script is a classic script, and the data files are
 * plain JavaScript, so the whole thing works from file:// on a stick.
 *
 * Usage: node tools/pack.js [outfile.zip]
 */
const fs = require('fs'), path = require('path'), cp = require('child_process');
const ROOT = path.join(__dirname, '..');
const OUT = path.resolve(process.argv[2] || path.join(ROOT, '../toefl-2026-complete.zip'));
global.window = {};
require(path.join(ROOT, 'assets/spec.js'));
require(path.join(ROOT, 'assets/book.js'));
const B = window.BOOK;

const STAGE = fs.mkdtempSync('/tmp/toefl-pack-');
const APP = path.join(STAGE, 'toefl-2026');
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

/* a README that says what this is and what it needs */
const perUnit = B.unitTotal(B.UNITS[0].id);
fs.writeFileSync(path.join(APP, 'README.txt'),
`TOEFL iBT 2026 — a twelve-unit course
=====================================

Open index.html in any modern browser. No server, no install, no network.
Everything works from this folder, including from a USB stick.

What is here
  12 units, each with seven blocks:
    Lesson 1  Vocabulary
    Lesson 2  Writing
    Lesson 3  Grammar
    Lesson 4  Everyday Conversation
    Lesson 5  Reading
    On Campus
    Teamwork and Language Review

  ${perUnit} scored items per unit (${perUnit - 12} against the ETS task budget,
  plus 12 mixed review), so ${perUnit * 12} across the book.

Audio
  Every listening exercise falls back to your browser's own speech
  synthesis if no recording is present, so the book is complete without
  any audio files. On Windows the voices are installed with the system;
  on macOS and Linux the browser supplies them.

Microphone
  The speaking exercises try to record you and will quietly fall back to
  self-assessment if they cannot. Recording does not work from file://,
  because the page has no origin the browser will trust. If you want it,
  serve the folder over http://localhost — any static server will do.

Progress
  Progress is stored in your browser, per browser and per machine. It is
  not sent anywhere and it does not follow you to another computer.
  Clearing site data clears it.

Keyboard
  Everything is reachable by keyboard. In the drag exercises: Tab to a
  card, Enter to pick it up, Tab to a target, Enter to drop. Escape puts
  it back.
`);

cp.execFileSync('zip', ['-q', '-r', OUT, 'toefl-2026'], { cwd: STAGE });
const size = (fs.statSync(OUT).size / 1048576).toFixed(1);
console.log(`${OUT}\n  ${pages} lesson pages, ${data} data files, ${size} MB`);
fs.rmSync(STAGE, { recursive: true, force: true });
