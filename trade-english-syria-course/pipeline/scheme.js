// English for Import/Export Agents · Syria — FULL SCHEME OF WORK
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const S = require('./scheme-data');
const out = [];
const TITLE = 'English for Import/Export Agents · Syria — Scheme of Work';

out.push(h1('English for Import/Export Agents · Syria'));
out.push(p('**The full scheme of work · 36 sessions · 144 teaching blocks**', { color: C.teal }));
out.push(p('_Pre-Intermediate, Intermediate and Upper-Intermediate · 72 teaching hours · classes of 10_', { color: '7F7F7F' }));
out.push(sp());
out.push(box('How to use this document', [
  'Each session is on one block of this document and carries everything needed to plan it: the **aim**, the **three cycles** with their reading, conversation and writing, the **case study** with its sector and its output, and the **portfolio piece** to collect.',
  '**What this document does not contain is the texts themselves.** It specifies them — type, length and purpose — so that they can be written or sourced consistently. Section 9 says which of them can be lifted from existing material.',
  '⚠ **The shape never varies.** Three cycles then a case study, every session, all 36. That is deliberate: by the third session learners need no instructions, and the two hours go into language instead of logistics.',
], C.lblue, C.navy));

// 1 ---------------------------------------------------------------
out.push(h2('1 · The session shape'));
out.push(table(['Block', 'Min', 'What happens'], [
  ['**Cycle 1**', '26', 'One sub-skill of the session aim, through a reading, a conversation and a short piece of writing'],
  ['**Cycle 2**', '26', 'The same skill from a second angle'],
  ['**Cycle 3**', '26', 'A third angle. **This cycle\'s writing is the portfolio piece.**'],
  ['**Case study**', '35', 'One scenario in a named sector, worked in fours, ending in a decision and a document'],
  ['Transitions', '7', 'Settling, regrouping into fours, collecting written work'],
  ['**Total**', '**120**', ''],
], [1.1, 0.5, 5.4]));
out.push(sp());
out.push(h3('The five phases inside every cycle'));
out.push(table(['', 'Phase', 'What the teacher does', 'Who is talking', 'Min'], [
  ['1', '**Preview**', 'Sets the situation and asks the question the text answers', 'teacher', '4'],
  ['2', '**Read or listen, then discuss**', 'Runs the text; takes two or three opinions, does not explain it', 'whole class', '7'],
  ['3', '**Elicit**', 'Asks each learner for the same thing from their own work, study or intended work', 'learners', '5'],
  ['4', '**Pair work**', 'Sets the role-play or task; listens in; notes two errors for later', 'all ten at once', '6'],
  ['5', '**Report**', 'Times each pair at about 90 seconds; gives the two errors at the end', 'learners', '4'],
], [0.35, 1.5, 3, 1.1, 0.5]));
out.push(sp());
out.push(box('Mechanics that matter', [
  '**Ten learners means five pairs.** Pairs, never threes — a three always has a silent member.',
  '**The case study uses fours**, because its scenarios hold more than two positions. Five pairs become two fours and one pair; the teacher takes the odd pair.',
  '**Re-pair every session**, and at least once within a session, so that nobody practises only with one partner.',
  '**Phase 3 is the one that must not be cut.** It is where the lesson stops being about the book and starts being about the learner\'s own job. If time is short, shorten phase 2.',
  '⚠ **Every cycle ends in writing, even the speaking-heavy ones.** A cycle that produces no written line has not finished.',
], C.lteal, C.teal));

// 2 ---------------------------------------------------------------
out.push(pb());
out.push(h2('2 · Materials specification'));
out.push(p('Each cycle needs three short texts. **These lengths are the specification** — writing to them keeps the timings honest.'));
out.push(table(['', 'Course 1 · A2', 'Course 2 · B1', 'Course 3 · B2'], [
  ['**Reading**', '134–182 words', '191–244 words', '289–359 words'],
  ['**Conversation**', '9–11 turns', '11–13 turns', '15–16 turns'],
  ['**Writing model**', '52–75 words', '92–124 words', '145–194 words'],
  ['**What learners write**', '52–75 words', '92–124 words', '145–194 words'],
  ['**Case-study pack**', '3 short documents', '3 documents, one incomplete', '3 documents, at least one of them contradicting another'],
], [1.5, 1.8, 1.8, 2.4]));
out.push(sp());
out.push(p('⚠ **A reading longer than its band will eat the pair work.** The whole design depends on the text being short enough to discuss in seven minutes and still leave six for pairs.'));

// 3 ---------------------------------------------------------------
out.push(h2('3 · The sector rotation'));
out.push(p('Twelve sectors carry the 36 case studies. **Each sector appears exactly once per course**, so every learner meets their own field three times across the series, at rising responsibility.'));
const bySec = {};
S.forEach(s => { (bySec[s.cs.sec] = bySec[s.cs.sec] || []).push(s.n); });
out.push(table(['Sector', 'Course 1', 'Course 2', 'Course 3'],
  Object.entries(bySec).sort((a, b) => a[1][0] - b[1][0])
    .map(([k, v]) => [k, 'Session ' + v[0], 'Session ' + v[1], 'Session ' + v[2]]),
  [3, 1.2, 1.2, 1.2]));

// 4 ---------------------------------------------------------------
out.push(h2('4 · The three threads'));
out.push(p('Three habits are taught once and then deliberately revisited twice more, each time with more at stake. **Name them to learners when they recur** — the recognition is half the teaching.'));
out.push(table(['Thread', 'Course 1', 'Course 2', 'Course 3'], [
  ['**Being honest about what you did not do, and cannot evidence**', 'S9.3 — the "I did not … because …" line', 'S16.3 — what you saw, were told, and infer', 'S28.2 — refusing a number you cannot support'],
  ['**A number with its unit, basis and source**', 'S4.2 — a record line with its unit and date', 'S20.3 — printing your assumptions', 'S27.1 — period, basis, source'],
  ['**Writing so that the reader can act**', 'S12.1 — the four-line handover', 'S19.1 — a problem someone can act on', 'S25.1 — the first four lines'],
], [2.1, 2, 2, 2]));

// 5 ---------------------------------------------------------------
out.push(h2('5 · Portfolio and progress'));
[
 '**One portfolio piece per session**, named in each session block below and always taken from cycle 3. **12 per course, 36 across the series.**',
 '**One case-study document per session**, produced in fours. Keep one copy per group.',
 '**A letter to the next self** at the end of each course (S12.3, S24.3 and S36.3), opened in the first session of the following course.',
 '**Error feedback is given at the end of phase 5**, not during pair work: two errors, named once, from what the teacher heard while listening in.',
 '⚠ **No external examination is part of this programme.** The courses are written to the ground covered by CEFR A2, B1 and B2; entering learners for a public examination is a separate decision for the centre.',
].forEach(t => out.push(bullet(t)));

// ---- the sessions ----
const COURSES = [
  { from: 1, to: 12, h: 'COURSE 1 · Pre-Intermediate', sub: 'From your first day at the freight desk to a clerk the office can rely on',
    arc: 'The learner arrives in a brokerage office unable to operate, and leaves able to be relied on: to take an instruction accurately, keep a file and a register a second person can trust, answer for the office on the telephone, be trusted with documents and a counter, hold a rule under pressure when a client is shouting, account for a consignment and hand it on.',
    role: 'Customs clerk · documentation assistant · delivery order clerk · shipping clerk · yard and warehouse clerk · haulage coordinator · agency trainee taking calls and messages' },
  { from: 13, to: 24, h: 'COURSE 2 · Intermediate', sub: 'From dependable pair of hands to owning a consignment, a document and a deadline',
    arc: 'The learner is given something of their own — a consignment, a credit, a customs file, a claim — and learns the language that ownership requires: explaining an error so that a reader who was not there can follow it, training somebody on a live file, explaining why a charge moved, pressing a claim on a carrier, recommending with a reservation, and reporting upward including what did not happen.',
    role: 'Senior customs clerk · documentation supervisor · operations clerk · claims assistant · letter of credit clerk · port office assistant · agency account handler' },
  { from: 25, to: 36, h: 'COURSE 3 · Upper-Intermediate', sub: 'From owning a consignment to running an office and speaking for it to lines, customs and foreign principals',
    arc: 'The learner becomes answerable for other people\'s work and for the office\'s word. Three sessions are given to supervision itself — delegating, appraising and chairing — and the course runs on through writing the standard an office follows, naming risk before it lands, negotiating with lines, forwarders and insurers, answering a chamber of commerce, and arguing for the learner\'s own next post.',
    role: 'Operations manager · documentation manager · branch or port office manager · claims manager · customs manager · agency manager · deputy principal' },
];

COURSES.forEach(co => {
  out.push(pb());
  out.push(h1(co.h));
  out.push(p('**' + co.sub + '**', { color: C.teal }));
  out.push(sp());
  out.push(box('The arc of this course', [
    co.arc,
    '**Posts this level supports:** ' + co.role + '.',
    '_These describe the posts the language level supports, not an employment outcome._',
  ], C.lorange, C.orange));
  S.filter(s => s.n >= co.from && s.n <= co.to).forEach(s => {
    out.push(h2('Session ' + s.n + ' · ' + s.t));
    out.push(p('**Aim.** ' + s.aim));
    out.push(table(['', 'Cycle focus', 'Reading', 'Conversation', 'Writing'],
      s.c.map((c, i) => [String(i + 1), '**' + c.t + '**', c.r, c.v, c.w]),
      [0.3, 2.1, 1.9, 1.8, 1.8]));
    out.push(sp(40));
    out.push(box('Case study · ' + s.cs.sec + '  (35 min, in fours)', [
      '**The situation.** ' + s.cs.sit,
      '**They produce.** ' + s.cs.out,
    ], C.lyellow, C.orange));
    out.push(p('**Portfolio piece:** ' + s.pf + '  _(from cycle 3)_', { color: '595959' }));
    out.push(sp());
  });
});

// 9 ---------------------------------------------------------------
out.push(pb());
out.push(h2('9 · Sourcing the texts'));
out.push(p('The 144 teaching blocks need 108 readings, 108 conversations, 108 writing models and 36 case-study packs. **A large share can be adapted from existing published material by the same author** rather than written from nothing:'));
out.push(table(['For', 'Draw on'], [
  ['**Course 1**', 'Proactive Business English A2 Book 1; A1 Book 2 for weaker entrants'],
  ['**Course 2**', 'Proactive Business English B1 Books 1 and 2'],
  ['**Course 3**', 'Proactive Business English B2 Books 1 and 2'],
  ['**Sector colour for case studies**', 'The shipping line and the bill of lading · Customs and clearance · Letters of credit and the bank · The freight forwarder and the haulier · Suppliers abroad and purchase orders · Buyers abroad and sales contracts · Certificates of origin and the chamber of commerce · Insurance and claims for damage · Port, warehouse and storage · Inspection, quality and pre-shipment · Licences, sanctions and restricted goods · Agency agreements and commission'],
], [1.4, 5]));
out.push(sp());
out.push(h3('The supervision sessions, checked line by line'));
out.push(p('Sessions 30, 31 and 32 are the ones that make the Course 3 claim true, so their sourcing was checked against the library rather than assumed. **Six of their nine cycles have a direct source; three do not.**'));
out.push(table(['Cycle', 'Source', 'Status'], [
  ['**30.1** Delegating so it comes back right', '—', '⚠ **New.** Delegation appears in the library only as vocabulary (_delegated authority_), never as a taught skill'],
  ['**30.2** Inducting someone in their first week', '—', '⚠ **New.** _Induction_ appears only in a word list'],
  ['**30.3** Improving a draft without flattening its author', 'PBE B2 Unit 9, _Somebody Else\'s Draft_', 'Direct source; maps cycle for cycle'],
  ['**31.1** Praise specific enough to repeat', 'PBE B2 Unit 22.3', 'Direct source'],
  ['**31.2** One criticism, with a date and a remedy', 'PBE B2 Unit 22.2 and 22.4', 'Direct source'],
  ['**31.3** Supervising a better specialist', 'PBE B2 Unit 22.6', 'Direct source'],
  ['**32.1** What the meeting is for', 'PBE B2 Unit 10.1', 'Direct source'],
  ['**32.2** Chairing: bringing in the quiet person, closing the item', '—', '⚠ **New.** Chairing is named in the library as a hard skill but never taught'],
  ['**32.3** Stopping a decision on the wrong basis', 'PBE B2 Unit 10.4', 'Direct source'],
], [2.2, 2.2, 3.2]));
out.push(sp());
out.push(box('What must be written new', [
  '**Three cycles**, listed above: delegating, inducting and chairing.',
  '**The 36 case-study packs**, in every case, because no existing book uses this format.',
  '**Arabic is not present in any of the source material.** If translation work is wanted, it is new authoring.',
  '⚠ **An earlier draft of this document said all nine supervision cycles were unsourced. That was wrong** — six of them map directly onto existing units, and the authoring estimate is correspondingly smaller.',
], C.grey, C.navy));
out.push(sp());
out.push(p('_Prepared by Mo (Mohamad Khorbatli)._', { color: '7F7F7F' }));

L.build(out, process.argv[2], TITLE, 'English for Import/Export Agents · Syria');
