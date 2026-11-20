// Vocabulary across the WHOLE series, not just one course.
// qa-course.js only sees the files passed to it, so it cannot catch a Course 2 word that
// repeats a Course 1 one — and it is the same learners in the same room, so that is a repeat.
// Run this over every session file before any build.
const fs = require('fs');
const files = fs.readdirSync(__dirname).filter(f => /^s\d-s\d\d\.js$/.test(f)).sort();
const seen = new Map();
let faults = 0;
files.forEach(f => {
  const s = require('./' + f.replace(/\.js$/, ''));
  s.vocab.forEach(v => {
    if (seen.has(v)) { console.log(`  ✗ "${v}" in S${s.n} already used in S${seen.get(v)}`); faults++; }
    else seen.set(v, s.n);
  });
});
console.log(`-- ${files.length} session file(s) · ${seen.size} distinct vocabulary items · ${faults} repeat(s)`);
process.exit(faults ? 1 : 0);
