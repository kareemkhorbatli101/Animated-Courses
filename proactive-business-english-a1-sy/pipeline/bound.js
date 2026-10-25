// Bound volume builder: node bound.js sb|ak <out.docx>
//
// ⚠ A1 is the first level in this strand with SIX-unit books, so the ranges are not the
// series' 1–12 / 13–24. Book 1 is Units 1–6 and ends with its own 60-mark test; Book 2 is
// Units 7–12 and ends with the 100-mark end-of-course test. There is no mid-book test in
// either volume: at six units the test at the end of the book IS the mid-point of the course.
const fs = require('fs');
const path = require('path');
const L = require('./lib');
const { p, h1, pb, box, C } = L;
const mode = process.argv[2];
const prefix = mode === 'ak' ? 'ak' : 'unit';
const all = fs.readdirSync(__dirname).filter(f => new RegExp('^' + prefix + '\\d\\d\\.js$').test(f)).sort();
const allNums = all.map(f => parseInt(f.match(/\d\d/)[0]));
const LEVEL = process.env.PE_LEVEL || 'A1';
const BOOK = parseInt(process.env.PE_BOOK || '1', 10);
const LO = BOOK === 2 ? 7 : 1;
const HI = BOOK === 2 ? 12 : 6;
const LAST_UNIT = HI;
const units = all.filter((f, i) => allNums[i] >= LO && allNums[i] <= HI);
const nums = units.map(f => parseInt(f.match(/\d\d/)[0]));
// Book 1's closing test lives in midtest/midkey, Book 2's in endtest/endkey — the series'
// file names, kept so the harness and the build script need no special case.
const testFile = (mode === 'ak' ? (BOOK === 2 ? 'endkey' : 'midkey') : (BOOK === 2 ? 'endtest' : 'midtest')) + '.js';
const has = f => fs.existsSync(path.join(__dirname, f));
const files = [...units];
if (has(testFile) && nums.includes(LAST_UNIT)) files.push(testFile);
const title = mode === 'ak' ? 'Answer Key' : 'Student\'s Book';
const testName = BOOK === 2 ? 'End-of-Course Test' : 'Book 1 Test';
const out = [];
out.push(p(''), p(''), p(''));
out.push(p('**PROACTIVE BUSINESS ENGLISH**', { size: 48, color: C.navy, align: 'center' }));
out.push(p(`${LEVEL} · Book ${BOOK} · Syria Edition`, { size: 32, color: C.teal, align: 'center' }));
out.push(p(title, { size: 32, color: C.orange, align: 'center' }));
out.push(p(''));
out.push(p(`Units ${nums.join(', ')}${files.includes(testFile) ? ' · ' + testName : ''}`, { align: 'center', color: '595959' }));
out.push(p('Author: Mo (Mohamad Khorbatli)', { align: 'center', color: '595959' }));
files.forEach(f => { out.push(pb()); out.push(...require(path.join(__dirname, f))); });
L.build(out, process.argv[3], `Proactive Business English ${LEVEL} · Book ${BOOK} · Syria Edition · ${title} (bound)`);
