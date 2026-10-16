// Bound volume builder: node bound.js sb|ak <out.docx>
// Concatenates all unit scripts present (unitNN.js / akNN.js) with page breaks and a title page.
const fs = require('fs');
const path = require('path');
const L = require('./lib');
const { p, h1, pb, box, C } = L;
const mode = process.argv[2];
const prefix = mode === 'ak' ? 'ak' : 'unit';
const units = fs.readdirSync(__dirname).filter(f => new RegExp('^' + prefix + '\\d\\d\\.js$').test(f)).sort();
// insert the tests in teaching order: after unit 06 (mid-book) and at the end (end-of-book)
const midFile = mode === 'ak' ? 'midkey.js' : 'midtest.js';
const endFile = mode === 'ak' ? 'endkey.js' : 'endtest.js';
const has = f => fs.existsSync(path.join(__dirname, f));
const files = [];
units.forEach(f => {
  files.push(f);
  if (parseInt(f.match(/\d\d/)[0]) === 6 && has(midFile)) files.push(midFile);
});
if (has(endFile) && units.some(f => parseInt(f.match(/\d\d/)[0]) === 12)) files.push(endFile);
const title = mode === 'ak' ? 'Answer Key' : 'Student\'s Book';
const out = [];
out.push(p(''), p(''), p(''));
out.push(p('**PROACTIVE ENGLISH**', { size: 56, color: C.navy, align: 'center' }));
out.push(p('A2 · Book 1 · Syria Edition', { size: 32, color: C.teal, align: 'center' }));
out.push(p(title, { size: 32, color: C.orange, align: 'center' }));
out.push(p(''));
out.push(p(`Units ${units.map(f => parseInt(f.match(/\d\d/)[0])).join(', ')}${files.includes(midFile) ? ' · Mid-Book Test' : ''}${files.includes(endFile) ? ' · End-of-Book Test' : ''}`, { align: 'center', color: '595959' }));
out.push(p('Author: Mo (Mohamad Khorbatli)', { align: 'center', color: '595959' }));
files.forEach(f => { out.push(pb()); out.push(...require(path.join(__dirname, f))); });
L.build(out, process.argv[3], `Proactive English A2 · Book 1 · Syria Edition · ${title} (bound)`);
