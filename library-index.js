// Complete-library READ-ME · indexes every book and course in English-for-Syria_COMPLETE-LIBRARY
const L = require('./hospitality-english-syria-course/pipeline/lib');
const { p, h1, h2, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'The Complete Library — every book, in one archive';

out.push(h1('The Complete Library'));
out.push(p('**73 books and course books · 439 units · 360 two-hour sessions · 27,152 measured pages**', { color: C.teal }));
out.push(p('_Author: Mo (Mohamad Khorbatli). Everything in one archive, and nothing left outside it._', { color: '7F7F7F' }));
out.push(sp());
out.push(box('What this archive is', [
  'Three bodies of work, built to three different design systems and gathered here without being changed. **A graded series of sixteen books** from A1 to C1, in two parallel strands, general and business. **Twenty-seven professional books**, each for one trade, most of them in two editions. **Ten English for Specific Purposes programmes set in Syria**, each of three course books of twelve two-hour sessions.',
  '**Every page figure in this document was measured from the built file.** Nothing is estimated. Where a book lacks something a teacher would expect, it is said so in plain words, both here and in the catalogue beside this file.',
], C.lblue, C.navy));

out.push(h2('What is in each of the three folders'));
out.push(table(['Folder', 'What it holds', 'Books', 'Units or sessions', 'Pages'], [
  ['**01_Graded-Series_16-Books**', 'Proactive English (general, A2–C1) and Proactive Business English (A1–B2): a Student’s Book and a separate Answer Key for every book, with mid-book and end-of-book tests and their keys', '**16**', '180 units', '**12,362**'],
  ['**02_Professional-Books_27-Books**', 'Sixteen packages, one per trade or series: the finished Student’s Books, the adaptation plan for each, and a source zip holding unit text, build scripts and the QA harness', '**27**', '259 units', '**6,281**'],
  ['**03_ESP-Programmes_Syria_10**', 'Ten programmes of three course books each, with a design plan, a programme overview, a scheme of work and a specimen session for every programme', '**30**', '360 sessions', '**8,509**'],
], [2.6, 4.1, 0.7, 1.2, 0.8]));
out.push(p('**Totals: 73 books and course books · 27,152 pages.** The three folders do not overlap: no book appears in more than one of them.'));

out.push(h2('1 · The graded series — sixteen books, A1 to C1'));
out.push(p('Two strands on one spine. **Proactive English (general)** runs A2 → C1; **Proactive Business English** runs A1 → B2. Each level is two books of twelve units, except business A1, which is two books of six.'));
out.push(table(['Strand', 'Levels', 'Books', 'Units', 'Student’s Books', 'Answer Keys', 'Pages'], [
  ['**Proactive English · general**', 'A2 · B1 · B2 · C1', '8', '96', '4,097', '2,823', '**6,920**'],
  ['**Proactive Business English**', 'A1 · A2 · B1 · B2', '8', '84', '3,331', '2,111', '**5,442**'],
], [3.1, 2.1, 0.7, 0.7, 1.4, 1.2, 1.0]));
out.push(p('**The business arc:** A1 opens with a storeman who can say his name and almost nothing else; B2 closes with someone arguing a contract clause in front of a credit committee.'));
out.push(p('⚠ **General A2 Book 1 is the one book of the sixteen not built in this repository.** It came in as a production handover, so its folder holds two bound volumes and a note rather than the usual six files: both its tests are bound inside the Student’s Book. The book itself is complete — twelve units, both tests, every answer.'));

out.push(pb());
out.push(h2('2 · The professional books — twenty-seven books in sixteen packages'));
out.push(p('**Eight books in two editions each.** Structural twins, built from one source: the same book unit for unit and exercise for exercise, with only the setting changed. Syria runs in Damascus, Aleppo and Homs; International moves through ten non-English-speaking countries, one per unit. **The matched page counts are the proof, and they were measured.**'));
out.push(table(['Package', 'Level', 'Units', 'Both editions', 'Each'], [
  ['English for Architects', 'A2', '20', '502', '251'],
  ['English for Business Managers', 'A2', '20', '504', '252'],
  ['English for Content Creators', 'A2', '20', '504', '252'],
  ['English for Logistics Management', 'A2', '20', '504', '252'],
  ['English for Office Managers', 'A2', '20', '504', '252'],
  ['English for Quality Assurance', 'A2', '20', '504', '252'],
  ['English for Tour Guides', 'A2', '20', '502', '251'],
  ['English for Tourism Police', 'A2', '20', '502', '251'],
], [4.2, 1.0, 1.0, 1.6, 1.0]));
out.push(p('All sixteen carry **Appendix A** (audio scripts) and **Appendix B** (a full answer key) bound in.'));
out.push(sp());
out.push(p('**Three multi-book series.**'));
out.push(table(['Package', 'What it is', 'Books', 'Units', 'Pages'], [
  ['English for International Journalists', 'Book 1 (226 pp) then Book 2 (323 pp), one newsroom and one cast across both', '2', '20', '549'],
  ['English for Foreign Ministry Staff', 'the A2 book (133 pp, 4 units) then B1.1 (200 pp, 5 units)', '2', '9', '333'],
  ['English for Cybersecurity · Syria', 'the A2 text (251 pp) and an illustrated A2→B1 book (142 pp)', '2', '20', '393'],
], [3.4, 4.0, 0.7, 0.7, 0.8]));
out.push(p('The Journalists books print their answers **inside each unit** rather than in an appendix.'));
out.push(sp());
out.push(p('**Four standalone books.**'));
out.push(table(['Package', 'Level', 'Units', 'Pages', 'Answer key'], [
  ['English for NGOs and International Organizations', 'A2', '10', '257', 'Appendix A + B'],
  ['English for Accountants · International', 'B1', '10', '247', 'Appendix A + B + C'],
  ['English for Business · International', 'B1', '10', '190', '⚠ none'],
  ['English for Media and Communications 2 · International', 'B1', '10', '152', '⚠ none'],
  ['English for Banking and Finance · International', 'B1', '10', '134', '⚠ none'],
], [4.6, 0.9, 0.9, 0.9, 1.9]));
out.push(p('⚠ **English for Business · International is misleadingly named, and it is not the business course.** Every one of its ten units is set in a group accounts office. It is a finance book under a general title. The general business English course is folder 01 of this archive. Rename this one before selling it beside the others.'));
out.push(p('⚠ **The NGO book is the parent of the twin-edition family above:** its measured design system is what those sixteen books are laid out on, though it ships alone.'));

out.push(pb());
out.push(h2('3 · The ten Syria programmes — thirty course books'));
out.push(p('Ten English for Specific Purposes programmes, each of **three courses of twelve two-hour sessions**, written to one architecture and set in Syria. The last five are written for work with foreign counterparties.'));
out.push(table(['Programme', 'For', 'Pages'], [
  ['**1 · Workplace English**', 'Young adults entering any Syrian workplace — eight occupational fields', '**837**'],
  ['**2 · Banking English**', 'Bank staff from counter to unit head — twelve areas of banking', '**886**'],
  ['**3 · Foreign Ministry English**', 'Ministry and mission staff — consular, protocol, reporting, treaties, press', '**846**'],
  ['**4 · Business Managers English**', 'Supervisors and managers — twelve sectors of Syrian industry and trade', '**850**'],
  ['**5 · Hospitality English**', 'Hotel, restaurant and guesthouse staff — twelve hospitality contexts', '**848**'],
  ['**6 · Telecommunications English**', 'Operators, ISPs and network contractors — the shop, the operations centre, field build, interconnect, roaming, regulation, vendors', '**856**'],
  ['**7 · Journalists’ English**', 'Reporters, editors and fixers working with foreign media — the news desk, verification, courts, agencies, safety, corrections', '**828**'],
  ['**8 · Accounting English**', 'Accountants and finance staff — the ledger, payables, payroll, tax, audit, consolidation, costing, treasury', '**873**'],
  ['**9 · Import/Export English**', 'Customs brokers, forwarders and trade departments — the bill of lading, clearance, letters of credit, claims, licences, agency', '**856**'],
  ['**10 · Software Engineering English**', 'Developers, testers and support staff — requirements, code review, testing, releases, incidents, migrations, security, vendors', '**829**'],
], [2.8, 5.8, 0.8]));
out.push(p('Each programme folder holds the same seven documents, each supplied twice, **.docx for editing and .pdf for printing**: three course books (Pre-Intermediate, Intermediate, Upper-Intermediate), a design plan, a programme overview for the centre, a full scheme of work and a specimen session.'));
out.push(sp());
out.push(table(['', 'Per programme', 'All ten'], [
  ['**Courses**', '3', '**30**'],
  ['**Sessions of two hours**', '36', '**360**'],
  ['**Teaching hours**', '72', '**720**'],
  ['**Teaching blocks** (cycles)', '144', '**1,440**'],
  ['**Case studies**', '36', '**360**'],
  ['**Distinct vocabulary items**', '432, none repeated within the programme', '**4,320**'],
  ['**Pages of course book**', '764–823', '**7,869**'],
  ['**Pages of planning document**', '62–66', '**640**'],
  ['**Pages in all**', '828–886', '**8,509**'],
], [3.4, 3.6, 1.6]));

out.push(pb());
out.push(h2('4 · How to use the archive'));
[ '**To teach from it:** the Student’s Books in folders 01 and 02, and the Course 1–3 books in folder 03, are the whole of what a teacher needs. Answer keys are either separate volumes (folder 01), bound appendices (folder 02) or appendices inside each course book (folder 03).',
  '**To get something approved:** every programme in folder 03 carries a design plan and a programme overview written for that purpose, with a specimen session so that a committee can read one session in full without opening a 230-page book. Every package in folder 02 carries its adaptation plan.',
  '**To adapt it:** everything is supplied as **.docx**. Names, rates, departments and figures can be changed to a centre’s own without touching the structure. Folder 02 also ships the unit source and build scripts for each book.',
  '**To check a figure:** `00_CATALOGUE.md` beside this file is the measured inventory of the forty-three books, with the arithmetic shown. `00_FULL-SYLLABUS_Proactive-Business-English.md` lists all eighty-four units of the business strand, unit by unit.',
  '⚠ **The last column of each vocabulary appendix is deliberately empty.** It is headed "In your language" and is filled in by the learner or the centre; no translation is printed anywhere, which keeps every task monolingual.',
].forEach(t => out.push(bullet(t)));
out.push(sp());
out.push(box('What is not in this archive', [
  'Four books have **no answer key**: English for Business · International (190 pp), English for Media and Communications 2 · International (152 pp), English for Cybersecurity · Illustrated (142 pp) and English for Banking and Finance · International (134 pp). Their units carry model answers and self-check boxes where a task has one right answer, but there is no appendix and no separate key. A teacher can teach from any of them as it stands; a learner working alone cannot mark their own work. The key can be written from that package’s own `03_Source/` — the other thirty-nine books show the form it should take.',
  'Nothing else. Every finished book and course book is in one of the three folders above.',
], C.lorange, C.navy));

out.push(h2('5 · The folder tree, in full'));
out.push(box('English-for-Syria_COMPLETE-LIBRARY/', [
  '**00_READ-ME_Complete-Library.docx / .pdf** — this document',
  '**00_CATALOGUE.md** — the measured inventory of the forty-three books',
  '**00_FULL-SYLLABUS_Proactive-Business-English.md** — all eighty-four units of the business strand',
  '**01_Graded-Series_16-Books/** — `01_Proactive-English_General/` and `02_Proactive-Business-English/`, one folder per book',
  '**02_Professional-Books_27-Books/** — sixteen folders, one per package, each with `00_START-HERE.md`, `01_Student-Books/`, `02_Plans/`, `03_Source/`',
  '**03_ESP-Programmes_Syria_10/** — `1_Workplace-English/` … `10_Software-Engineering-English/`, seven documents each in .docx and .pdf',
], C.grey, C.navy));

L.build(out, process.argv[2], TITLE, 'The Complete Library · Mo Khorbatli');
