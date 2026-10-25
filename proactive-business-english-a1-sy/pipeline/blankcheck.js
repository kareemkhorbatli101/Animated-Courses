// Proactive Business English A1 — finds blank pages in a BOUND volume.
// Usage: node blankcheck.js <bound.pdf>
//
// ⚠ THIS SCRIPT EXISTS BECAUSE THE RULE IT ENFORCES COULD NOT FIRE.
//
// Part Eleven of the plan amended the bound-arithmetic rule and gave it a check: scan the bound
// PDF for pages with no content, allow ONE blank between two units, and treat two in a row — or a
// blank inside a unit — as a fault. That check was recorded and never seen to fire.
//
// It cannot fire as it was written. The naive form is "a page whose extracted text is empty", and
// in a bound volume NO page's text is ever empty: every page carries the running header (the
// document title) and the footer (`Proactive English · N`). Run that check on the Book 1
// Student's Book, whose page 48 is the blank the amendment was written FROM, and it reports none.
//
// A page is blank when nothing remains after the header and the footer are removed. The furniture
// is what hid the fault, which is the second time in this level that a check has been defeated by
// something the renderer adds rather than by the content. ⚠ A rule nobody has seen fire is not a
// rule, and this one had been written down twice.
const { execFileSync } = require('child_process');

const pdf = process.argv[2];
if (!pdf) { console.error('usage: node blankcheck.js <bound.pdf>'); process.exit(2); }

const pages = +execFileSync('pdfinfo', [pdf], { encoding: 'utf8' })
                 .match(/^Pages:\s*(\d+)/m)[1];

// the two pieces of furniture every page carries
const FOOTER = /^Proactive English\s*·?\s*\d+$/;
const header = execFileSync('pdftotext', ['-f', '1', '-l', String(pages), pdf, '-'],
                            { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
                 .split('\f')
                 .map(pg => pg.split('\n').map(l => l.trim()).filter(Boolean)[0])
                 .filter(Boolean)
                 .sort((a, b) => 0)[0] || '';

const blanks = [];
for (let i = 1; i <= pages; i++) {
  const body = execFileSync('pdftotext', ['-f', String(i), '-l', String(i), pdf, '-'],
                            { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
                 .split('\n').map(l => l.trim())
                 .filter(l => l && l !== header && !FOOTER.test(l));
  if (!body.length) blanks.push(i);
}

// ⚠ where a DELIBERATE PAGE BREAK lands — and the first version of this got the category wrong.
//
// The amended bound-arithmetic rule allowed "one blank between two units" and called anything else
// a fault. That assumed the only deliberate page breaks in a bound volume are between units. They
// are not: this book starts every CYCLE on a fresh page and every TEST PAPER on a fresh page, so a
// flush-ending cycle produces exactly the same harmless artefact one page lower down.
//
// Run the unit-boundary version on the Book 2 Student's Book and it reports two faults, at 44 and
// 189. Page 44 sits between cycle 8.3's Writer's box and the 8.4 heading; page 189 sits between the
// Writing and Listening papers. ⚠ Both standalone documents — unit08 at 30 pages and endtest at 12
// — contain NO blank page at all, so the content has none and the BINDING OFFSET makes them. The
// reader turns one blank leaf and lands on a clean opening, which is what the rule already allows.
//
// So the test is not "is this between units" but "does the next page open something". A blank that
// is not at a deliberate break, and any two in a row, are still faults — the broken fixture in the
// scratchpad proves both branches still fire after this change.
const opens = [];
for (let i = 1; i <= pages; i++) {
  const first = execFileSync('pdftotext', ['-f', String(i), '-l', String(i), pdf, '-'],
                             { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })
                  .split('\n').map(l => l.trim())
                  .filter(l => l && l !== header && !FOOTER.test(l))[0] || '';
  if (/^(Answer Key · )?Unit \d+/.test(first)     // a unit
      || /^\d+\.\d+(\s|$)/.test(first)              // a cycle, e.g. `8.4 Sorry, we have not got any`
      || /^PAPER \d+/.test(first)                    // a paper of a test
      || /^(END-OF-COURSE|BOOK 1) TEST/.test(first)) // a test itself
    opens.push(i);
}

let faults = 0;
console.log(`${pdf}: ${pages} pages, ${blanks.length} blank — ${blanks.length ? blanks.join(', ') : 'none'}`);
blanks.forEach((b, i) => {
  if (i && blanks[i - 1] === b - 1) {
    console.log(`  ✗ pages ${b - 1} and ${b} are BOTH blank — two in a row is a fault, not a boundary`);
    faults++;
  } else if (!opens.includes(b + 1)) {
    console.log(`  ✗ page ${b} is blank and page ${b + 1} opens nothing — a blank that is NOT at a page break`);
    faults++;
  } else {
    console.log(`  – page ${b} is the single blank before the opening on ${b + 1} — the binding artefact, allowed`);
  }
});
console.log(`${faults} fault(s)`);
process.exit(faults ? 1 : 0);
