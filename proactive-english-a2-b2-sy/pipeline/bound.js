// Bound volume builder: node bound.js sb|ak <out.docx>
// Concatenates all unit scripts present (unitNN.js / akNN.js) with page breaks and a title page.
const fs = require('fs');
const path = require('path');
const L = require('./lib');
const { p, h1, pb, box, C } = L;
const mode = process.argv[2];
const prefix = mode === 'ak' ? 'ak' : 'unit';
const all = fs.readdirSync(__dirname).filter(f => new RegExp('^' + prefix + '\\d\\d\\.js$').test(f)).sort();
const allNums = all.map(f => parseInt(f.match(/\d\d/)[0]));
// Which book is this? PE_BOOK wins; otherwise infer from the unit numbers present.
// With no units, or with units 01-12 on disk, this is 1 — so Book 1 behaviour is unchanged.
const BOOK = parseInt(process.env.PE_BOOK || (allNums.length && Math.min(...allNums) > 12 ? '2' : '1'), 10);
const LO = BOOK === 2 ? 13 : 1;          // a Book 2 build binds units 13-24 only, even when
const HI = BOOK === 2 ? 24 : 12;         // Book 1's unit scripts are sitting in the same folder
const MID_AFTER = BOOK === 2 ? 18 : 6;   // Book 1: mid-book test after unit 06; Book 2: after unit 18
const LAST_UNIT = HI;                    // the end-of-book test only goes in once the last unit is there
const units = all.filter((f, i) => allNums[i] >= LO && allNums[i] <= HI);
const nums = units.map(f => parseInt(f.match(/\d\d/)[0]));
// insert the tests in teaching order: after the mid-book unit and at the end (end-of-book)
// Book 2 keeps its own test files alongside Book 1's, so one pipeline can build either.
const sfx = BOOK === 2 ? '2' : '';
const midFile = (mode === 'ak' ? 'midkey' : 'midtest') + sfx + '.js';
const endFile = (mode === 'ak' ? 'endkey' : 'endtest') + sfx + '.js';
const has = f => fs.existsSync(path.join(__dirname, f));
const files = [];
units.forEach(f => {
  files.push(f);
  if (parseInt(f.match(/\d\d/)[0]) === MID_AFTER && has(midFile)) files.push(midFile);
});
if (has(endFile) && nums.includes(LAST_UNIT)) files.push(endFile);
const title = mode === 'ak' ? 'Answer Key' : 'Student\'s Book';
const out = [];
out.push(p(''), p(''), p(''));
out.push(p('**PROACTIVE ENGLISH**', { size: 56, color: C.navy, align: 'center' }));
out.push(p(`A2 · Book ${BOOK} · Syria Edition`, { size: 32, color: C.teal, align: 'center' }));
out.push(p(title, { size: 32, color: C.orange, align: 'center' }));
out.push(p(''));
out.push(p(`Units ${nums.join(', ')}${files.includes(midFile) ? ' · Mid-Book Test' : ''}${files.includes(endFile) ? ' · End-of-Book Test' : ''}`, { align: 'center', color: '595959' }));
out.push(p('Author: Mo (Mohamad Khorbatli)', { align: 'center', color: '595959' }));
files.forEach(f => { out.push(pb()); out.push(...require(path.join(__dirname, f))); });
L.build(out, process.argv[3], `Proactive English A2 · Book ${BOOK} · Syria Edition · ${title} (bound)`);
