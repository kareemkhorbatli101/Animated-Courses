// Ten-programme package · READ-ME index (domain-neutral; renders with the shared pipeline library)
const L = require('./hospitality-english-syria-course/pipeline/lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const TITLE = 'English for Specific Purposes · Syria — Ten Programmes';

out.push(h1('English for Specific Purposes · Syria'));
out.push(p('**Ten programmes · thirty courses · 360 two-hour sessions · 720 teaching hours**', { color: C.teal }));
out.push(p('_What is in this package, and how to read it_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('The package in one paragraph', [
  'Ten complete programmes, each of **three courses of twelve two-hour sessions**, written to one architecture and set in Syria. **Every session is the same shape** — an opening, three teaching cycles of reading, listening, speaking and writing, a case study worked in fours, and a close — and every course book carries **eight appendices**: answer key, sample answers, audio scripts, a vocabulary list with a column for the learner’s own language, role-play cards, case-study packs, teacher’s notes and a progress record.',
  '**Totals: 360 sessions · 720 teaching hours · 1,440 teaching blocks · 360 case studies · 4,320 vocabulary items · 8,509 pages.**',
], C.lblue, C.navy));

out.push(h2('1 · The ten programmes'));
out.push(table(['Programme', 'For', 'The case studies are set in', 'Pages'], [
  ['**1 · Workplace English**', 'Young adults entering any Syrian workplace', 'Eight occupational fields — offices, logistics, quality, NGOs, tourism and more', '**837**'],
  ['**2 · Banking English**', 'Bank staff from counter to unit head', 'Twelve areas of banking — retail counter, SME lending, microfinance, trade finance, compliance, cards and more', '**886**'],
  ['**3 · Foreign Ministry English**', 'Ministry and mission staff', 'Twelve areas of diplomatic work — consular, protocol, political reporting, treaties, press and more', '**846**'],
  ['**4 · Business Managers English**', 'Supervisors and managers in Syrian companies', 'Twelve sectors — manufacturing, trade, food, energy, pharmaceutical, transport, textiles, construction, IT and more', '**850**'],
  ['**5 · Hospitality English**', 'Hotel, restaurant and guesthouse staff', 'Twelve hospitality contexts — front desk, housekeeping, night duty, reservations, kitchen, banqueting, excursions, guesthouses and more', '**848**'],
  ['**6 · Telecommunications English**', 'Staff of operators, ISPs and network contractors', 'Twelve telecoms contexts — the shop and the subscriber, the network operations centre, field build, interconnect, roaming, regulation, vendors and more', '**856**'],
  ['**7 · Journalists’ English**', 'Reporters, editors and fixers working with foreign media', 'Twelve journalism contexts — the news desk, verification, interviews, courts and documents, agencies and syndication, safety, corrections and more', '**828**'],
  ['**8 · Accounting English**', 'Accountants and finance staff from ledger clerk to manager', 'Twelve areas of accounting — the ledger, payables and receivables, payroll, tax, audit, consolidation, costing, treasury and more', '**873**'],
  ['**9 · Import/Export English**', 'Customs brokers, forwarders and trade departments', 'Twelve trade contexts — the bill of lading, customs clearance, letters of credit, forwarders and hauliers, insurance claims, licences, agency and more', '**856**'],
  ['**10 · Software Engineering English**', 'Developers, testers and support staff in software houses', 'Twelve software contexts — requirements, estimates, code review, testing, releases, incidents, support tickets, migrations, security, vendors and more', '**829**'],
], [2.2, 2.4, 4.4, 0.8]));
out.push(p('Each programme is independent: a centre can run one of them, or all ten, without changing the timetable, the class size or the teacher’s routine.'));

out.push(h2('2 · What each programme folder contains'));
out.push(table(['File', 'What it is', 'Pages'], [
  ['**00_Design-Plan_All-Three-Courses**', 'The approval document: the task architecture, the session clock, the level progression, the colour system and the sixteen quality passes', '10'],
  ['**01_Programme-Overview_for-the-Centre**', 'For the head of centre: who it benefits, the level bands, the context map, the posts each course supports', '9–10'],
  ['**02_Full-Scheme-of-Work**', 'All 36 sessions as a scheme: aim, three cycles, case study and portfolio piece for each', '20–22'],
  ['**SPECIMEN_Course-1_Session-1**', 'One complete session with its appendices, for a sample lesson or an inspection visit', '23–24'],
  ['**Course-1_Pre-Intermediate** (CEFR A2)', 'Sessions 1–12 with all eight appendices', '219–238'],
  ['**Course-2_Intermediate** (CEFR B1)', 'Sessions 13–24 with all eight appendices', '258–272'],
  ['**Course-3_Upper-Intermediate** (CEFR B2)', 'Sessions 25–36 with all eight appendices', '275–318'],
], [3.2, 5.2, 1.2]));
out.push(p('**Every document is supplied twice — .docx for editing and .pdf for printing.** The .docx files are the source of the .pdf files and nothing else is needed to use them.'));

out.push(pb());
out.push(h2('3 · The architecture all ten share'));
out.push(p('**One battery in three parts.** In every cycle, for every skill, three task forms appear with non-overlapping remits, so no fact is ever tested twice:'));
out.push(table(['Form', 'Its remit', 'The operation it forces'], [
  ['**Matching**', '**Structure** — what each part of the text is for', 'Skimming: seeing the shape of a document before its contents'],
  ['**True / False**', '**Detail** — dates, names, figures, and what is *not* said', 'Scanning: locating and verifying one claim'],
  ['**Gap-fill**', '**The whole** — the message reconstructed as a summary', 'Intensive reading: holding the whole text at once'],
], [1.1, 3, 2.9]));
out.push(sp());
out.push(table(['', 'Course 1 · A2', 'Course 2 · B1', 'Course 3 · B2'], [
  ['**Reading**', '120–190 words', '190–290 words', '270–360 words'],
  ['**Conversation**', '10–11 turns', '12–13 turns', '14–17 turns'],
  ['**What learners write**', '30–75 words', '80–165 words', '140–250 words'],
  ['**Scaffolding**', 'Word banks given; model answers supplied', '**No word banks**; function prompts only', 'No banks; gaps fall on the judgement words'],
  ['**Case-study pack**', '3 documents that agree', '3 documents, one incomplete', '3 documents, at least one contradicting another'],
], [1.6, 1.8, 1.8, 2.3]));
out.push(p('⚠ **The progression is enforced in code, not by intention.** A Course 2 gap-fill with a word bank, a Course 3 role play with the words written in, a reading outside its band, a repeated vocabulary item or a True/False battery with no "Not given" item all fail the build.'));

out.push(h2('4 · How a session runs'));
out.push(table(['Part', 'Min', 'What happens'], [
  ['**Opening**', '3', 'Homework collected · today’s aim read aloud from the page'],
  ['**Cycle 1**', '31', 'Reading + 3 tasks · listening + 3 tasks · elicitation · language box · role play · writing'],
  ['**Cycle 2**', '31', 'The same shape, a second angle on the session aim'],
  ['**Cycle 3**', '31', 'The same shape again — **this cycle’s writing is the portfolio piece**'],
  ['**Case study**', '22', 'A document pack worked in fours, ending in a decision and a document'],
  ['**Close**', '2', 'The can-do checklist · homework: finish cycle 3’s writing'],
], [1.1, 0.5, 5.4]));
out.push(p('**3 × 31 + 22 + 3 + 2 = 120 minutes.** Class size 10, which gives five pairs; the case study works in fours and the teacher joins the odd pair.'));

out.push(pb());
out.push(h2('5 · The numbers, and they are exact'));
out.push(table(['', 'Per programme', 'All ten'], [
  ['**Courses**', '3', '**30**'],
  ['**Sessions**', '36', '**360**'],
  ['**Teaching hours**', '72', '**720**'],
  ['**Teaching blocks** (cycles)', '144', '**1,440**'],
  ['**Case studies**', '36', '**360**'],
  ['**Distinct vocabulary items**', '432, none repeated within the programme', '**4,320**'],
  ['**Pages of course book**', '764–823', '**7,869**'],
  ['**Pages of planning document**', '62–66', '**640**'],
  ['**Pages in all**', '828–886', '**8,509**'],
], [3.4, 3.6, 1.6]));

out.push(h2('6 · Using the package'));
[ '**To teach from it:** the Course 1–3 books are the whole of what a teacher needs. The appendices carry the answer key, the audio scripts and the teacher’s notes for each session.',
  '**To get a programme approved:** the Design Plan (00) and the Programme Overview (01) are written for that purpose, and the Specimen session (SPECIMEN) lets a committee read one session in full without opening a 230-page book.',
  '**To timetable it:** the Scheme of Work (02) lists all 36 sessions with their aims, so a centre can map the programme onto its own terms and holidays.',
  '**To adapt it:** every document is supplied as .docx. Rates, names, departments and figures can be changed to a centre’s own without touching the structure.',
  '⚠ **The last column of the vocabulary appendix is deliberately empty.** It is headed "In your language" and is filled in by the learner or the centre; no translation is printed anywhere in the books, which keeps every task monolingual.',
].forEach(t => out.push(bullet(t)));
out.push(sp());
out.push(box('Folder layout', [
  '**1_Workplace-English/** · **2_Banking-English/** · **3_Foreign-Ministry-English/** · **4_Business-Managers-English/** · **5_Hospitality-English/**',
  '**6_Telecommunications-English/** · **7_Journalists-English/** · **8_Accounting-English/** · **9_Import-Export-English/** · **10_Software-Engineering-English/**',
  'Each folder holds the same seven documents, in .docx and .pdf. This READ-ME sits beside them.',
], C.grey, C.navy));

L.build(out, process.argv[2], TITLE, 'English for Specific Purposes · Syria');
