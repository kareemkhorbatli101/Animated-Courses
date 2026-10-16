// Proactive English — B1 Syria Edition — PRODUCTION PLAN AND CURRICULUM BLUEPRINT
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const N = (t) => box('Note', [t], C.lyellow, C.orange);
const D = (t) => box('Decision for the author', [t], C.lorange, C.orange);
const fn = (rows) => table(['Cycle', 'Function', 'Language'], rows, [0.8, 3.2, 3.4]);

out.push(h1('Proactive English · B1 · Syria Edition'));
out.push(h2('Production plan and curriculum blueprint'));
out.push(p('_Version 1.0 · 16 October 2026 · Author: Mo (Mohamad Khorbatli) · prepared against Series Bible v1.0 and the finished A2 Books 1–2_', { color: '7F7F7F' }));
out.push(box('What this document is', [
  'The Series Bible puts B1 in **Round 3** — "B1 → B2 → C1 → C2, Syria then International, per level". This is the plan for the B1 Syria Edition: how many books, how many units, what is in each unit, what changes from A2 and what does not, and how it gets built.',
  'Everything here is derived from two sources and nothing else: the **Series Bible v1.0** (what is locked) and the **finished A2 Books 1 and 2** (what the locked decisions actually measure out to in pages, tracks and minutes). Where a number had to be chosen rather than inherited, it says so and gives the arithmetic.',
  'Six questions are genuinely the author\'s to answer. They are collected in §15 and each is marked in place.',
], C.lblue, C.navy));

// ===================================================================
out.push(h2('1 · What is locked, and carries into B1 unchanged'));
out.push(p('From Series Bible §2, and from the A2 build that implemented it. None of this is re-opened at B1.'));
[
  '**The cycle.** 7 cycles to a unit; cycle x.7 is always Review & Mediate. 13 stages, 90 minutes, Lesson A Speaking (45) + Lesson B Writing (45): 1 Get ready · 2 Listen and read (+ Language box) · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read (+ Writer\'s box) · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · Homework.',
  '**The exact minute profile**, as built at A2 and to be matched at B1: cycles x.1–x.6 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 3 · 12 · 5 · 4 = 90. Cycle x.7 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 10 · 15 = 91, eleven stages. The 91 is the author\'s own arithmetic and is reproduced deliberately.',
  '**Components.** A Student\'s Book with every audio script printed **at the point of use** — never an appendix — and an Answer Key as a separate book. No teacher\'s notes.',
  '**The Answer Key rule.** Every task gets an answer or a **full sample**: brainstorms, personalised speaking, reports, peer-review slips, feedback slips, free writing and homework included.',
  '**Style.** British English. SYP, "pounds" in speech. Times 5.30 pm in text, "half past five" in speech. Dates 3 May. Syrian names and real Syrian places. No alcohol, dating or party-drinking. Same-gender pairing always available; a privacy option on every personal task.',
  '**The toolchain.** Node + docx-js, one script per artefact, one shared `lib.js`. `lib.js` is **frozen**: the B1 tree holds a byte-for-byte copy and does not edit it.',
  '**Delivery.** .docx per unit, bound volumes per book, and a bundle zip each turn carrying the bound book so far, the combined key, every unit\'s files, the handover and the pipeline.',
].forEach(t => out.push(bullet(t)));

// ===================================================================
out.push(pb());
out.push(h2('2 · Level architecture'));
out.push(p('**Recommendation: B1 is two books of twelve units, exactly as A2 is.** 24 units × 7 cycles = **168 cycles = 252 contact hours**, the same shape, the same tests, the same bindery.'));
out.push(table(['', 'A2 (built)', 'B1 (planned)'], [
  ['Books', '2', '2'],
  ['Units', '24 (12 + 12)', '24 (12 + 12)'],
  ['Cycles', '168', '168'],
  ['Contact hours', '252', '252'],
  ['Tests', '4 (mid + end per book)', '4 (mid + end per book)'],
  ['Mid-Book Test sits after', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18'],
  ['End-of-Book Test sits after', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24'],
  ['Exam anchor', 'Cambridge A2 Key', 'Cambridge B1 Preliminary'],
], [2.2, 2.4, 2.4], { headFill: C.navy }));
out.push(p('**Why two and not three.** Three reasons, in order of weight. The A2 precedent is two books and the whole apparatus — `bound.js`, the mid-test-after-unit-6 rule, the file naming, the peer-review bands of six units — is built for two. 252 hours puts a learner at roughly **504 cumulative hours** by the end of B1, which sits inside the 350–500 band usually quoted for B1 with room for a learner who started below A2. And twelve units is the unit of work that has been proved twice: a book is finishable, and a 12-unit book binds to something a class can hold.'));
out.push(p('**The three-book case, and what it would cost.** If B1 is to be sold as B1.1 / B1.2 / B1.3, the same 24 units rebind as **3 × 8** with no content change: the mid-test moves to after unit 4 of each book and each book takes its own end test, which means **6 tests instead of 4** and two more test-and-key pairs to write. That is the only real cost. It is a binding decision and it can be taken late — but not after the tests are written, so it is wanted before Phase 1.'));
out.push(D('**Decision 1.** Two books of twelve (recommended), or three of eight for a B1.1/B1.2/B1.3 sale. Needed before the first Mid-Book Test is written, which is the end of Phase 1.'));

out.push(h3('Hours, at the class\'s own rhythm'));
out.push(p('Class 4B meets four hours a week over about thirty-one weeks in a teaching year — the figure the A2 Book 2 class states about itself. One book of twelve units is **126 hours**, so one book is one academic year, September to June. Two books is two years, which is what the A2 cast is told in Unit 24 and what §10 builds the timeline on.'));

// ===================================================================
out.push(pb());
out.push(h2('3 · The four tests'));
out.push(p('The mark architecture is the author\'s own, carried over from A2 without change. Only the paper shapes move up to Preliminary.'));
out.push(table(['Test', 'Where', 'Marks', 'Split', 'Pages'], [
  ['Mid-Book Test', 'after Unit 6', '60', 'Reading 20 · Writing 15 · Listening 15 · Speaking 10', '8–9 + key 6–7'],
  ['End-of-Book Test', 'after Unit 12', '100', 'Reading 30 · Writing 30 · Listening 20 · Speaking 20', '10–11 + key 9–10'],
  ['Mid-Book Test', 'after Unit 18', '60', 'as above', '8–9 + key 6–7'],
  ['End-of-Book Test', 'after Unit 24', '100', 'as above', '10–11 + key 9–10'],
], [1.6, 1.3, 0.7, 3.4, 1.6], { headFill: C.navy }));
out.push(N('The B1 end tests run one page longer than A2\'s nine, because Preliminary\'s Reading has **six** parts where Key has five. Every other page figure is A2\'s, held.'));

// ===================================================================
out.push(pb());
out.push(h2('4 · Exam anchor: Cambridge B1 Preliminary'));
out.push(p('A2 anchored on A2 Key and practised it inside cycle x.7 and the unit check. B1 anchors on **B1 Preliminary** the same way. The paper, and where each part is met:'));
out.push(table(['Paper', 'Part', 'Where it is practised'], [
  ['Reading', '1 · signs and short messages (5)', 'unit check, Units 1–6'],
  ['', '2 · matching people to texts (5)', 'x.7 Stage 5, Units 2, 8, 14, 20'],
  ['', '3 · long text, 4-option multiple choice (5)', 'x.7 Stage 5, Units 4, 10, 16, 22'],
  ['', '4 · gapped text, sentence insertion (5)', 'x.7 Stage 5, Units 6, 12, 18, 24'],
  ['', '5 · multiple-choice cloze (6)', 'x.7 Stage 5, Units 1, 7, 13, 19'],
  ['', '6 · open cloze (6)', 'x.7 Stage 5, Units 3, 9, 15, 21'],
  ['Writing', '1 · email, ~100 words, compulsory', 'x.7 Stage 6, odd-numbered units'],
  ['', '2 · article or story, ~100 words', 'x.7 Stage 7, even-numbered units'],
  ['Listening', '1 · 7 three-option, pictures', 'unit check, Units 1, 5, 9, 13, 17, 21'],
  ['', '2 · 6 matching', 'unit check, Units 2, 6, 10, 14, 18, 22'],
  ['', '3 · 6 note completion', 'unit check, Units 3, 7, 11, 15, 19, 23'],
  ['', '4 · 6 three-option, long interview', 'unit check, Units 4, 8, 12, 16, 20, 24'],
  ['Speaking', '1 · interview (2 min)', 'every x.1 Stage 1'],
  ['', '2 · long turn from a photograph (2–3 min)', 'taught in Unit 9; practised in Stage 4R from Unit 9 on'],
  ['', '3 · collaborative task (2–3 min)', 'taught in Unit 12; practised in x.7 Stage 3 from Unit 12 on'],
  ['', '4 · discussion (3 min)', 'x.7 Stage 4R, the mediation stage, every unit'],
], [1.1, 3.4, 3.6], { headFill: C.navy }));
out.push(p('The rotation puts every reading part in front of a class **four** times across the level and every listening part **six** times, and it means no unit check repeats the previous unit\'s listening shape. At A2 the unit check standardised on one matching format; at B1 it rotates, because Preliminary tests four distinct listening skills and a class that only ever meets one of them is not prepared.'));
out.push(N('**Speaking Part 2 needs a photograph and this pipeline draws none.** A2 solved the same problem in the End-of-Book Test\'s Writing Part 7 by **describing** the pictures in words inside a bordered box, and that solution carries: every Part 2 prompt is a described photograph. If the author wants real images later, they drop into the same box with no other change.'));
out.push(D('**Decision 3.** B1 Preliminary as the anchor, practised as above — or exam-light, with the x.7 cycle kept as pure mediation and the test papers generic. A2 chose the exam; this plan assumes B1 does too.'));

// ===================================================================
out.push(pb());
out.push(h2('5 · Word counts, text lengths and the page budget'));
out.push(p('Series Bible §4 fixes word counts per book and steps them up between Book 1 and Book 2. B1 continues that step. The last two columns are the proposal; the first two are measured from the built books.'));
out.push(table(['', 'A2 Book 1', 'A2 Book 2', 'B1 Book 1', 'B1 Book 2'], [
  ['Guided writing (Stage 6)', '≥25', '≥35', '**≥50**', '**≥60**'],
  ['Free writing (Stage 7)', '35–60', '60–100', '**100–140**', '**140–180**'],
  ['Model text (Stage 5)', '45–100', '100–180', '**180–260**', '**250–350**'],
  ['Main dialogue, turns', '10–12', '10–14', '**12–16**', '**14–18**'],
  ['Tracks per unit', '15', '14', '**15**', '**15**'],
  ['SB pages per unit', '31', '31–33', '**34–36**', '**35–37**'],
  ['AK pages per unit', '17–18', '18–22', '**24–26**', '**25–28**'],
  ['Bound SB', '~380', '394', '**~440**', '**~455**'],
  ['Bound AK', '~215', '270', '**~330**', '**~345**'],
], [2.4, 1.3, 1.3, 1.4, 1.4], { headFill: C.navy }));
out.push(p('The free-writing band is set by the exam and not invented: Preliminary Writing asks for about 100 words in each of its two parts, so B1 Book 1 trains to 100–140 and Book 2 to 140–180, which leaves a margin above the exam rather than exactly at it.'));
out.push(N('**The page count follows from the word count, not from more stages.** The cycle is locked at 13 stages and 90 minutes, so a B1 unit is longer than an A2 unit only because its texts are longer. Two levers, both learned the hard way on A2 and recorded in its handover: an SB cycle must fit its page budget or the whole unit drifts — measure per page and look for a page under twenty lines, which means an unsplittable box has jumped — and an Answer Key\'s length tracks the **number of Note boxes** it carries. A2\'s keys run seven to ten per unit; one draft that ran twenty-two was two pages over. B1 keeps the same seven-to-ten rule.'));

// ===================================================================
out.push(pb());
out.push(h2('6 · Peer-review checklists — the B1 progression'));
out.push(p('Series Bible §5 fixes a four-band progression across A2\'s 24 units. This extends it across B1\'s 24, in the same shape.'));
out.push(table(['B1 Units 1–6', 'B1 Units 7–12', 'B1 Units 13–18', 'B1 Units 19–24'], [
  ['One idea per paragraph · a topic sentence · the past perfect where the order needs it · 100 words',
   '+ linkers of contrast and result · consistent register throughout · every content point of the question answered · no word used three times',
   '+ a range of tenses, not one · relative clauses used to combine · an opening move and a closing move · 140 words',
   '+ hedging and stance · cohesion across paragraphs, not only inside them · the writer\'s own three commonest errors self-corrected before handing over'],
  ['Feedback: English only, stems given', 'English, stems withdrawn', 'English, free', 'English, and the reviewer names the criterion they are marking against'],
], [1, 1, 1, 1]));
out.push(p('A2 ended with "English, free" at Units 19–24. B1 therefore starts where A2 ended and spends the level moving the student from giving feedback to **naming the standard** they are giving it against — which is the behaviour Preliminary Speaking Part 3 rewards.'));

// ===================================================================
out.push(pb());
out.push(h2('7 · Book 1 — Units 1–12'));
out.push(p('Each unit\'s grammar home is the thing it owns; the exam column names the Preliminary part its x.7 cycle practises. The last column is what the unit takes from A2 and raises.'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from A2'], [
  ['1', 'First Impressions', 'present simple and continuous contrasted · state verbs', 'R5 · W1', 'A2 U1 Meeting People'],
  ['2', 'Telling a Story', 'past simple vs past continuous · narrative linkers', 'R2 · W2', 'A2 U8 The Past'],
  ['3', 'Looking Back Further', 'the past perfect', 'R6 · W1', 'new — A2 ships at zero on purpose'],
  ['4', 'Experience and Evidence', 'present perfect simple vs continuous · for / since', 'R3 · W2', 'A2 U13 Experiences'],
  ['5', 'Describing Processes', 'the passive, present and past', 'R5 · W1', 'new'],
  ['6', 'Rules, Rights and Obligations', 'must / have to / be allowed to / supposed to', 'R4 · W2', 'A2 U9 Work and Study'],
  ['—', '**MID-BOOK TEST · Units 1–6 · 60 marks**', '', '', ''],
  ['7', 'Cause, Effect and Consequence', 'reason and result linkers · so / such … that', 'R5 · W1', 'A2 U15 Problems and Solutions'],
  ['8', 'Advice and Hypotheses', 'the second conditional · unless / as long as', 'R2 · W2', 'A2 U15 first conditional'],
  ['9', 'Deduction and Doubt', 'must / might / can\'t for deduction', 'R6 · W1', 'new — and it opens Speaking Part 2'],
  ['10', 'Reporting What People Said', 'reported speech with backshift · reporting verbs', 'R3 · W2', 'A2 U22 Messages and Requests'],
  ['11', 'Defining and Adding', 'defining and non-defining relative clauses', 'R5 · W1', 'A2 U19 People and Places'],
  ['12', 'Opinions and Agreement', 'conceding · although / even though · stance', 'R4 · W2', 'A2 U21 Quality and Complaints'],
  ['—', '**END-OF-BOOK TEST · Units 1–12 · 100 marks**', '', '', ''],
], [0.7, 2.4, 3.1, 0.9, 2.4], { headFill: C.navy }));

out.push(pb());
out.push(h2('8 · Book 2 — Units 13–24'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from A2'], [
  ['13', 'Plans, Intentions and Arrangements', 'the three futures + future continuous', 'R5 · W1', 'A2 U24 Looking Forward'],
  ['14', 'Predictions and Probability', 'will / may / might / be likely to · adverb position', 'R2 · W2', 'A2 U14 Plans and Predictions'],
  ['15', 'Regret and Alternative Pasts', 'the third conditional · should have done · wish', 'R6 · W1', 'new'],
  ['16', 'Comparing and Evaluating', 'comparatives extended · the more … the more', 'R3 · W2', 'A2 U21 so / such / too / enough'],
  ['17', 'Habits Past and Present', 'used to · would · be used to · get used to', 'R5 · W1', 'A2 U16 Then and Now'],
  ['18', 'Verb Patterns', 'gerunds and infinitives · verb + object + to', 'R4 · W2', 'A2 U17 Learning and Training'],
  ['—', '**MID-BOOK TEST · Units 13–18 · 60 marks**', '', '', ''],
  ['19', 'Complaints and Resolutions', 'the passive for distance · have / get something done', 'R5 · W1', 'A2 U20 and U21'],
  ['20', 'Instructions, Manuals and How-To', 'passive instructions · defining for a non-specialist', 'R2 · W2', 'A2 U18 Technology'],
  ['21', 'Negotiating and Compromise', 'conditional offers · although / despite + -ing', 'R6 · W1', 'A2 U22 formal requests'],
  ['22', 'Interviews and Self-Presentation', 'present perfect for achievement · question forms', 'R3 · W2', 'A2 U13.7 the CV cycle'],
  ['23', 'The Wider News', 'reporting verbs · it is reported that · allegedly', 'R5 · W1', 'A2 U23 News and Our City'],
  ['24', 'Looking Ahead to B2', 'the tense system reviewed · future perfect, lightly', 'R4 · W2', 'A2 U24, one level up'],
  ['—', '**END-OF-BOOK TEST · Units 13–24 · 100 marks**', '', '', ''],
], [0.7, 2.4, 3.1, 0.9, 2.4], { headFill: C.navy }));

// ===================================================================
out.push(pb());
out.push(h2('9 · The 168 functions'));
out.push(p('Seven per unit, one per cycle. x.7 is Review & Mediate in every unit and is written in full. This is the list the units are written from; nothing outside it is taught, and nothing in it is taught twice.'));

out.push(h3('Book 1'));
out.push(p('**Unit 1 · First Impressions**', { bold: true, color: C.navy }));
out.push(fn([
  ['1.1', 'introduce yourself at B1 length', 'present simple for what is permanent'],
  ['1.2', 'say what you are doing now against generally', 'continuous against simple; state verbs'],
  ['1.3', 'ask the questions that open a conversation', 'question forms and follow-up questions'],
  ['1.4', 'describe what somebody is like', 'character adjectives; seems / comes across as'],
  ['1.5', 'say what you think of somebody without judging', 'hedging: tends to, I\'d say, a bit'],
  ['1.6', 'keep a conversation going', 'echo questions, showing interest, handing back'],
  ['1.7', 'Review & Mediate: explain a class list to a new student', 'recycling Unit 1'],
]));
out.push(p('**Unit 2 · Telling a Story**', { bold: true, color: C.navy }));
out.push(fn([
  ['2.1', 'set the scene', 'past continuous for background'],
  ['2.2', 'tell what happened', 'past simple chain; first, then, after that'],
  ['2.3', 'interrupt one action with another', 'when / while / as'],
  ['2.4', 'say what used to happen', 'used to for repeated past'],
  ['2.5', 'react inside somebody else\'s story', 'the listener\'s moves; question tags'],
  ['2.6', 'end a story', 'in the end, and that was that; the point of it'],
  ['2.7', 'Review & Mediate: retell somebody else\'s story accurately', 'recycling Units 1–2'],
]));
out.push(p('**Unit 3 · Looking Back Further**', { bold: true, color: C.navy }));
out.push(fn([
  ['3.1', 'say what had happened before the story started', 'the past perfect, introduced'],
  ['3.2', 'explain why something went wrong', 'because + past perfect'],
  ['3.3', 'say what had and had not happened by a point', 'by the time · already · never before'],
  ['3.4', 'correct somebody\'s version of events', 'no, he had already left'],
  ['3.5', 'give a chronology from notes', 'ordering two past times in one sentence'],
  ['3.6', 'say what you had never done before that day', 'experience framing in the past'],
  ['3.7', 'Review & Mediate: explain a timeline to somebody', 'recycling Units 1–3'],
]));
out.push(p('**Unit 4 · Experience and Evidence**', { bold: true, color: C.navy }));
out.push(fn([
  ['4.1', 'say what you have done', 'present perfect simple, for the result'],
  ['4.2', 'say how long you have been doing it', 'present perfect continuous'],
  ['4.3', 'say how long with a number or a point', 'for · since · all day · lately'],
  ['4.4', 'draw a conclusion from evidence', 'you\'ve been running; it\'s been raining'],
  ['4.5', 'describe a skill you are building', 'still · yet · so far · up to now'],
  ['4.6', 'ask about somebody\'s experience at interview length', 'how long / how many / have you ever'],
  ['4.7', 'Review & Mediate: explain a CV at B1', 'recycling Units 1–4; raises A2 13.7'],
]));
out.push(p('**Unit 5 · Describing Processes**', { bold: true, color: C.navy }));
out.push(fn([
  ['5.1', 'say how something is made', 'the present passive'],
  ['5.2', 'say how something was built', 'the past passive'],
  ['5.3', 'say who does it and what with', 'by + agent · with + instrument'],
  ['5.4', 'describe a process in order', 'sequencers with the passive'],
  ['5.5', 'say why the passive is the right choice', 'agent unknown, obvious or irrelevant'],
  ['5.6', 'describe a change that has been made', 'has been + past participle'],
  ['5.7', 'Review & Mediate: explain a notice written in the passive', 'recycling Units 1–5'],
]));
out.push(p('**Unit 6 · Rules, Rights and Obligations**', { bold: true, color: C.navy }));
out.push(fn([
  ['6.1', 'say what you must do', 'must against have to; who is obliging whom'],
  ['6.2', 'say what you do not have to do', 'don\'t have to against mustn\'t'],
  ['6.3', 'say what you are allowed to do', 'be allowed to · let · permitted'],
  ['6.4', 'say what you are supposed to do', 'supposed to · expected to · meant to'],
  ['6.5', 'ask for permission, formally and informally', 'would it be all right if · can I'],
  ['6.6', 'pass a rule on to somebody', 'the passive plus obligation'],
  ['6.7', 'Review & Mediate: explain a set of workplace rules', 'recycling Units 1–6'],
]));
out.push(p('**Unit 7 · Cause, Effect and Consequence**', { bold: true, color: C.navy }));
out.push(fn([
  ['7.1', 'give a reason', 'because · since · as · due to · owing to'],
  ['7.2', 'give a result', 'so · therefore · as a result · which meant that'],
  ['7.3', 'say how extreme the cause was', 'so … that · such … that'],
  ['7.4', 'describe a chain of events', 'which led to · and that in turn'],
  ['7.5', 'say what caused what, and how sure you are', 'cause · lead to · contribute to'],
  ['7.6', 'argue from evidence in writing', 'the evidence paragraph'],
  ['7.7', 'Review & Mediate: explain a report that gives reasons', 'recycling Units 1–7'],
]));
out.push(p('**Unit 8 · Advice and Hypotheses**', { bold: true, color: C.navy }));
out.push(fn([
  ['8.1', 'give advice', 'if I were you, I\'d'],
  ['8.2', 'imagine a different situation', 'the second conditional'],
  ['8.3', 'say what would happen if', 'would · might · could in the result clause'],
  ['8.4', 'set a condition', 'unless · as long as · provided that'],
  ['8.5', 'soften advice to somebody senior', 'you might want to · it might be worth'],
  ['8.6', 'write advice to somebody you do not know', 'register in advice'],
  ['8.7', 'Review & Mediate: explain two options and advise', 'recycling Units 1–8'],
]));
out.push(p('**Unit 9 · Deduction and Doubt**', { bold: true, color: C.navy }));
out.push(fn([
  ['9.1', 'say what must be true', 'must be · must have been'],
  ['9.2', 'say what might be true', 'might · may · could be'],
  ['9.3', 'say what cannot be true', 'can\'t be · couldn\'t have been'],
  ['9.4', 'describe a photograph and speculate about it', 'Speaking Part 2, taught here'],
  ['9.5', 'say how certain you are', 'definitely · probably · possibly · I doubt it'],
  ['9.6', 'write a description of a scene', 'the long-turn description on paper'],
  ['9.7', 'Review & Mediate: say what you think is happening, with evidence', 'recycling Units 1–9'],
]));
out.push(p('**Unit 10 · Reporting What People Said**', { bold: true, color: C.navy }));
out.push(fn([
  ['10.1', 'report a statement', 'backshift, the full version'],
  ['10.2', 'report a question', 'reported questions, no inversion'],
  ['10.3', 'report a request or an instruction', 'raises A2 22: ask / tell somebody to'],
  ['10.4', 'choose the reporting verb', 'say · tell · ask · explain · add · point out'],
  ['10.5', 'report accurately from notes', 'what was said against what was meant'],
  ['10.6', 'write up what was said at a meeting', 'minutes'],
  ['10.7', 'Review & Mediate: report a conversation to somebody who missed it', 'recycling Units 1–10'],
]));
out.push(p('**Unit 11 · Defining and Adding**', { bold: true, color: C.navy }));
out.push(fn([
  ['11.1', 'define which one you mean', 'defining relative clauses'],
  ['11.2', 'add information about somebody', 'non-defining clauses, and the commas'],
  ['11.3', 'say whose, where and when', 'whose · where · when'],
  ['11.4', 'combine two sentences into one', 'subordination against two main clauses'],
  ['11.5', 'leave the pronoun out', 'the man I met · the book I read'],
  ['11.6', 'write a description that defines and adds', 'the two clause types side by side'],
  ['11.7', 'Review & Mediate: explain a page of definitions', 'recycling Units 1–11'],
]));
out.push(p('**Unit 12 · Opinions and Agreement**', { bold: true, color: C.navy }));
out.push(fn([
  ['12.1', 'give an opinion and support it', 'I think · I\'d say · in my view, because'],
  ['12.2', 'agree and disagree politely', 'I see what you mean, but · up to a point'],
  ['12.3', 'concede a point', 'although · even though · mind you · admittedly'],
  ['12.4', 'ask for somebody\'s view and build on it', 'what do you think · building moves'],
  ['12.5', 'reach a decision together', 'Speaking Part 3, taught here'],
  ['12.6', 'write a balanced paragraph', 'on the one hand · on the other · on balance'],
  ['12.7', 'Review & Mediate: explain both sides and say where you stand', 'recycling Units 1–12'],
]));

out.push(pb());
out.push(h3('Book 2'));
out.push(p('**Unit 13 · Plans, Intentions and Arrangements**', { bold: true, color: C.navy }));
out.push(fn([
  ['13.1', 'say what is arranged', 'present continuous for arrangements'],
  ['13.2', 'say what you intend', 'going to for intention'],
  ['13.3', 'say what you will be doing at a given time', 'the future continuous'],
  ['13.4', 'choose between the three futures', 'the contrast, head to head'],
  ['13.5', 'talk about a timetable', 'present simple for schedules'],
  ['13.6', 'write an itinerary', 'a plan somebody else can follow'],
  ['13.7', 'Review & Mediate: explain a programme to somebody', 'recycling Units 1–13'],
]));
out.push(p('**Unit 14 · Predictions and Probability**', { bold: true, color: C.navy }));
out.push(fn([
  ['14.1', 'predict', 'will · won\'t'],
  ['14.2', 'hedge a prediction', 'may · might · could'],
  ['14.3', 'say how likely something is', 'be likely to · there\'s a chance that'],
  ['14.4', 'put the adverb in the right place', 'probably · definitely · certainly'],
  ['14.5', 'say what you expect by a point in time', 'by then · by the end of'],
  ['14.6', 'write a forecast', 'a projection with its assumptions stated'],
  ['14.7', 'Review & Mediate: explain a forecast and say how far to trust it', 'recycling Units 1–14'],
]));
out.push(p('**Unit 15 · Regret and Alternative Pasts**', { bold: true, color: C.navy }));
out.push(fn([
  ['15.1', 'say what you should have done', 'should / shouldn\'t have done'],
  ['15.2', 'say what would have happened', 'the third conditional'],
  ['15.3', 'say how a past choice still affects now', 'mixed conditional, lightly'],
  ['15.4', 'apologise properly for something you did', 'the apology that names the thing'],
  ['15.5', 'say what you wish', 'wish + past · if only'],
  ['15.6', 'write an account that admits a mistake', 'the honest report'],
  ['15.7', 'Review & Mediate: explain what went wrong and what you would do differently', 'recycling Units 1–15'],
]));
out.push(p('**Unit 16 · Comparing and Evaluating**', { bold: true, color: C.navy }));
out.push(fn([
  ['16.1', 'compare two things precisely', 'not as … as · far more · slightly less'],
  ['16.2', 'use a superlative with a qualification', 'one of the best · by far the'],
  ['16.3', 'say how two things move together', 'the more … the more'],
  ['16.4', 'compare how things are done', 'comparative adverbs'],
  ['16.5', 'evaluate against stated criteria', 'in terms of · as far as … is concerned'],
  ['16.6', 'write a comparison that reaches a verdict', 'the recommendation paragraph'],
  ['16.7', 'Review & Mediate: explain a comparison table', 'recycling Units 1–16'],
]));
out.push(p('**Unit 17 · Habits Past and Present**', { bold: true, color: C.navy }));
out.push(fn([
  ['17.1', 'say what you used to do', 'used to'],
  ['17.2', 'say what repeatedly happened', 'would for past habit'],
  ['17.3', 'say what you are accustomed to', 'be used to + -ing'],
  ['17.4', 'say what you are becoming accustomed to', 'get used to + -ing'],
  ['17.5', 'describe how a habit changed and why', 'the three forms in one account'],
  ['17.6', 'write about a change in your own life', 'then, now, and the turn between'],
  ['17.7', 'Review & Mediate: explain how something used to be done here', 'recycling Units 1–17'],
]));
out.push(p('**Unit 18 · Verb Patterns**', { bold: true, color: C.navy }));
out.push(fn([
  ['18.1', 'verbs followed by -ing', 'enjoy · avoid · mind · keep'],
  ['18.2', 'verbs followed by to', 'decide · manage · offer · refuse'],
  ['18.3', 'verbs that take both, with a change of meaning', 'remember · stop · try · go on'],
  ['18.4', 'adjective + to, and preposition + -ing', 'glad to · good at · instead of'],
  ['18.5', 'verb + object + to', 'persuade · remind · allow · encourage'],
  ['18.6', 'write about what you are trying to do', 'the pattern-dense paragraph'],
  ['18.7', 'Review & Mediate: explain an instruction sheet full of verb patterns', 'recycling Units 1–18'],
]));
out.push(p('**Unit 19 · Complaints and Resolutions**', { bold: true, color: C.navy }));
out.push(fn([
  ['19.1', 'state a problem as a fact', 'the factual opening, no feeling-words'],
  ['19.2', 'use the passive to take the person out', 'the order was sent late'],
  ['19.3', 'say you arranged for it to be done', 'have / get something done'],
  ['19.4', 'escalate politely', 'I\'d be grateful if · failing that'],
  ['19.5', 'accept or refuse responsibility', 'that was our mistake · that is not ours'],
  ['19.6', 'write a formal complaint at B1 length', 'facts, request, deadline, alternative'],
  ['19.7', 'Review & Mediate: explain a complaints procedure', 'recycling Units 1–19'],
]));
out.push(p('**Unit 20 · Instructions, Manuals and How-To**', { bold: true, color: C.navy }));
out.push(fn([
  ['20.1', 'give a sequence of instructions', 'imperatives plus sequencers'],
  ['20.2', 'warn and caution', 'be careful not to · make sure you'],
  ['20.3', 'give instructions impersonally', 'the filter should be cleaned'],
  ['20.4', 'define a technical term for a non-specialist', 'that is, which means, in other words'],
  ['20.5', 'troubleshoot', 'if it doesn\'t …, try …'],
  ['20.6', 'write a how-to with a troubleshooting section', 'steps, warnings, what to do if'],
  ['20.7', 'Review & Mediate: explain a manual to somebody who cannot read it', 'recycling Units 1–20'],
]));
out.push(p('**Unit 21 · Negotiating and Compromise**', { bold: true, color: C.navy }));
out.push(fn([
  ['21.1', 'make a conditional offer', 'if you could …, I\'d'],
  ['21.2', 'ask for a concession', 'would you be able to · is there any way'],
  ['21.3', 'concede and still hold your position', 'although · even though · despite + -ing'],
  ['21.4', 'propose a compromise', 'how about if we · would it help if'],
  ['21.5', 'close and confirm what was agreed', 'so, to confirm'],
  ['21.6', 'write a proposal with terms', 'the numbered terms letter'],
  ['21.7', 'Review & Mediate: explain terms and recommend a position', 'recycling Units 1–21'],
]));
out.push(p('**Unit 22 · Interviews and Self-Presentation**', { bold: true, color: C.navy }));
out.push(fn([
  ['22.1', 'answer "tell me about yourself" at B1 length', 'the ninety-second answer'],
  ['22.2', 'give evidence for a claim about yourself', 'present perfect for achievement'],
  ['22.3', 'answer the difficult question', 'the honest answer with a next step'],
  ['22.4', 'ask the interviewer questions', 'question forms, indirect questions'],
  ['22.5', 'follow up after an interview', 'the one-question follow-up'],
  ['22.6', 'write a covering letter', 'the four-paragraph letter'],
  ['22.7', 'Review & Mediate: explain an advertisement and match somebody to it', 'recycling Units 1–22'],
]));
out.push(p('**Unit 23 · The Wider News**', { bold: true, color: C.navy }));
out.push(fn([
  ['23.1', 'report news with the right verb', 'claim · deny · admit · announce · confirm'],
  ['23.2', 'report impersonally', 'it is reported that · is thought to be'],
  ['23.3', 'attribute and keep your distance', 'according to · allegedly · reportedly'],
  ['23.4', 'summarise a news item in three sentences', 'what, who says so, what is not known'],
  ['23.5', 'say what has and has not been confirmed', 'the confirmed / unconfirmed split'],
  ['23.6', 'write a short news report', 'the inverted pyramid at B1'],
  ['23.7', 'Review & Mediate: explain a news story and separate fact from claim', 'recycling Units 1–23'],
]));
out.push(p('**Unit 24 · Looking Ahead to B2**', { bold: true, color: C.navy }));
out.push(fn([
  ['24.1', 'use the tense system as one map', 'the whole system on one page'],
  ['24.2', 'form a question in any tense', 'question formation reviewed'],
  ['24.3', 'say what will be finished by a time', 'the future perfect, lightly'],
  ['24.4', 'say what you can and cannot yet do in English', 'the honest self-assessment'],
  ['24.5', 'set the next twelve months', 'going to · intend to · aim to'],
  ['24.6', 'write the letter to your B2 self', 'the sealed letter, opened at B2'],
  ['24.7', 'Review & Mediate: explain the certificate and what comes next', 'recycling Units 1–24'],
]));

// ===================================================================
out.push(pb());
out.push(h2('10 · Continuity from A2 — the cast, and the calendar'));
out.push(p('B1 does not start a new world. A2 Book 2 ends by naming who goes on to B1, and B1 Unit 1 is **the first Thursday of that class**. This is the strongest asset the level has and it is already canon.'));
out.push(table(['Who', 'Where A2 leaves them', 'In B1'], [
  ['Ms Huda Saleh', 'takes the B1 group in September, whoever is in it — her tenth year', 'teaches the whole level'],
  ['Omar Darwish', 'paid the first part; meeting a newspaper on the ninth; photographs', 'Book 1 from Unit 1'],
  ['Lina Haddad', 'going on, her company paying half; has taken over Rana\'s job', 'Book 1 from Unit 1'],
  ['Hiba Nasser', 'on the teacher-training course, four days a week, from 14 September', 'in and out — she is the one who left for something else'],
  ['Nour Sabbagh', 'stopped for one year; gave a date: the first week of September next year', '**arrives at the start of Book 2**'],
  ['Maysoun Sabbagh', 'reopened the Mezzeh library; children\'s room due', 'a recurring outside figure'],
  ['Mr Fouad · Mr Khaled · Rana · Mrs Mona · Lama', 'workplaces, and Rana in Aleppo', 'workplace strands, as at A2'],
], [1.7, 3.6, 2.4], { headFill: C.navy }));
out.push(p('**The calendar works out exactly.** A2 Book 2 ran January to June. One B1 book is one academic year at four hours a week. So Book 1 runs September to June and Book 2 runs the September after — which is precisely when Nour said she would come back: *"the first week of September next year, and you are allowed to ask me in August."* Her return is **Unit 13**, the first unit of Book 2, and Omar has had "ask about B1" written next to her number since A2 Unit 24.'));
out.push(p('**New cast.** Nine finished A2 Book 2 and three of the named four go on, so a B1 class of eleven or twelve needs **seven or eight new students**. That is not a problem to hide — it is Unit 1\'s subject. First Impressions is the unit where a class that has been together for two years meets people who were not there, and the grammar home (present simple against continuous, describing what somebody is like, hedging) is the language for exactly that.'));
out.push(D('**Decision 4.** The sealed-letter device. A2 sealed predictions in Book 2 Unit 13 and opened them in Unit 24 — one book, six months. B1 Unit 24.6 above proposes sealing a letter to the student\'s **B2** self, which is a two-year arc and a bigger promise. Reuse it at that scale, or retire it so it does not become a formula?'));

// ===================================================================
out.push(pb());
out.push(h2('11 · What changes inside the writing at B1'));
[
  '**The past perfect is finally taught, in Unit 3.** A2 ships at **zero** occurrences in both Student\'s Books and both Answer Keys — a rule enforced by a grep on every file, because Book 1 used it once in twelve units and Book 1\'s key never. That was not squeamishness; it was reserving it. From B1 Unit 3 the QA sweep **inverts**: the script stops checking that it is absent and starts checking that it is present and correctly formed in the units that own it.',
  '**Reported speech gets its backshift.** A2 Book 2 Unit 22 taught reporting with no tense change and said so in the key: *at A2 we do not backshift.* B1 Unit 10 teaches the full system and names the A2 rule it is replacing, so a student who did A2 here is told why the thing they were taught has changed.',
  '**Hedging and stance arrive** — _seems · appears · tends to · I\'d say · up to a point · admittedly_. Preliminary Speaking Parts 3 and 4 reward it and A2 has none of it. It is introduced in Unit 1.5 and used in every opinion stage after Unit 12.',
  '**Phrasal verbs become a declared set.** Eight to ten per unit, listed in the unit\'s lexis and never repeated across units. A2 avoided them; at B1 Preliminary they are unavoidable, and the discipline is that each one is taught in a context, not in a list.',
  '**Discourse markers in speech** — _mind you · having said that · the thing is · anyway_. In dialogue only; the Series Bible\'s rule that phrases ahead of the grammar are flagged as fixed chunks still applies.',
  '**What does not change:** British spelling, SYP, Damascus, no alcohol or dating, no real living public figures in dialogue, same-gender pairing available, the privacy option on every personal task, contractions in dialogue and full forms in grammar tables.',
].forEach(t => out.push(bullet(t)));

// ===================================================================
out.push(h2('12 · Toolchain, file naming and tracks'));
[
  '**A new tree, `proactive-english-b1-sy/`**, with its own `pipeline/` and `out/`. `lib.js` is copied **byte-for-byte** from the A2 tree and not edited — the renderer, the palette, the box and table helpers, the markup parser and all nine formatting traps come across untouched, so a B1 page renders identically to an A2 page.',
  '**`bound.js` gains a level dimension.** At A2 it already reads `PE_BOOK` to decide which units to bind, where the mid-test goes and what the title page says. B1 adds `PE_LEVEL`, so one script binds any of the four volumes. The A2 parameterisation is still awaiting the author\'s sign-off (it is §8 of the A2 handover) and this extends the same change rather than making a second one.',
  '**File naming needs a ruling.** Series Bible §4 reads `PE-A2-B1-SY_Unit01_StudentsBook.docx`, where `B1` means **Book 1**. At CEFR B1 that collides head-on: `PE-B1-B1-SY_` is unreadable. Proposal: **`PE-B1-BK1-SY_Unit01_StudentsBook.docx`**, with `BK` for the book, and Bible §4 amended to match. The A2 files already shipped and are not renamed.',
  '**Tracks: fifteen per unit, `NN.1`–`NN.15`.** A2 Book 1 used fifteen and Book 2 fourteen, so the count already varies. B1 needs fifteen because the unit check carries **two** listening tasks, not one: Preliminary tests four distinct listening skills and the rotation in §4 needs the room.',
  '**The QA scripts carry over**, extended: the per-cycle stage and minute profile checked against the locked arrays, track numbering unique and sequential with every referenced track having a printed script, the policy sweep (no Americanisms, no alcohol or dating, SYP only), and the register sweep with the past-perfect rule inverted from Unit 3. The two page-count levers from the A2 handover apply unchanged.',
  '**No appendices and no teacher\'s notes**, as at A2. Nothing is added to the component list that the author did not specify.',
].forEach(t => out.push(bullet(t)));
out.push(D('**Decision 2.** The naming convention `PE-B1-BK1-SY_…` and the amendment to Series Bible §4.'));

// ===================================================================
out.push(pb());
out.push(h2('13 · QA — what is checked on every B1 unit'));
out.push(p('The A2 ten-point list, plus six items that only exist at B1.'));
out.push(table(['#', 'Check'], [
  ['1', 'Per-cycle stage and minute profile identical to the locked arrays; x.7 at 91'],
  ['2', 'Fifteen tracks, numbered uniquely; every referenced track has a printed script at its point of use'],
  ['3', 'Matching tasks: both sides counted, every answer present exactly once, the extras wrong for a reason'],
  ['4', 'Multiple choice: every distractor wrong for a traceable reason; the key findable in the text or script'],
  ['5', 'Three-person reading tasks tested against all three people'],
  ['6', 'Numbers reconcile across cycles and into the key — prices, times, dates, durations'],
  ['7', 'Continuity checked against the cast table and the invented-facts list before anything new is invented'],
  ['8', 'Word counts achievable, and the sample in the key actually hits the count'],
  ['9', 'Policy sweep: no Americanisms, no alcohol or dating, SYP only, no real living public figures in dialogue'],
  ['10', 'Board clinics driven by the Arabic-L1 error profile: omitted copula, missing auxiliary do, articles, perfect aspect, /p/–/b/, /v/–/f/, final clusters'],
  ['**11**', '**Past perfect present and correctly formed** from Unit 3 — the A2 rule inverted'],
  ['**12**', '**Backshift correct** in every reported clause from Unit 10'],
  ['**13**', '**Relative clause commas** correct: defining without, non-defining with, from Unit 11'],
  ['**14**', '**Conditional type consistent** within each task from Unit 8'],
  ['**15**', '**The phrasal-verb set declared** for the unit, eight to ten, and not repeated from an earlier unit'],
  ['**16**', '**Every Preliminary part met** at least four times across the level, per the §4 rotation'],
], [0.7, 7], { headFill: C.navy }));

// ===================================================================
out.push(h2('14 · Production phases'));
out.push(table(['Phase', 'What is delivered', 'Turns'], [
  ['0', 'Series Bible v2.0 (B1 added); this plan; the tree and pipeline fork; **Unit 1 Student\'s Book and Answer Key in full**, proving the page budget and the register', '1–2'],
  ['1', 'Book 1 Units 2–6, then the **Mid-Book Test** and its key', '2'],
  ['2', 'Book 1 Units 7–12, the **End-of-Book Test** and key, both bound volumes', '2'],
  ['3', 'Book 2 Units 13–18, then the **Mid-Book Test** and key', '2'],
  ['4', 'Book 2 Units 19–24, the **End-of-Book Test** and key, both bound volumes', '2'],
  ['5', 'Level QA pass across all 24 units, Series Bible v2.1, the one-click page for the level', '1'],
], [0.7, 6.4, 0.9], { headFill: C.navy }));
out.push(p('**The per-unit loop is the one proved over twenty-four A2 units** and it does not change: write the unit to the Unit 1 skeleton → build → QA sweep → fix → write the key → build → sweep → commit the pair and push. One unit is one block of work.'));
out.push(h3('What B1 amounts to when it is finished'));
out.push(table(['', 'Count'], [
  ['Units', '24'],
  ['Cycles / language functions', '168'],
  ['Audio scripts', '360 (15 per unit)'],
  ['Unit artefacts', '48 (24 Student\'s Book + 24 Answer Key)'],
  ['Test artefacts', '8 (4 papers + 4 keys)'],
  ['Bound volumes', '4 (2 Student\'s Books + 2 Answer Keys)'],
  ['Plus', 'Series Bible v2, this plan, a handover per book'],
  ['**Total pages, approximately**', '**1,560**'],
], [3.2, 2.4], { headFill: C.navy }));

// ===================================================================
out.push(h2('15 · The six decisions that are the author\'s'));
out.push(table(['#', 'Decision', 'Recommendation', 'Needed by'], [
  ['1', 'Two books of twelve units, or three of eight for a B1.1/B1.2/B1.3 sale', '**Two of twelve** — the A2 precedent, the toolchain, four tests not six', 'end of Phase 1'],
  ['2', 'File naming, now that CEFR B1 collides with the Bible\'s "B1 = Book 1"', '**`PE-B1-BK1-SY_…`**, and amend Series Bible §4', 'start of Phase 0'],
  ['3', 'Cambridge B1 Preliminary as the anchor, on the §4 rotation', '**Yes** — A2 anchored on A2 Key and x.7 is built for it', 'start of Phase 0'],
  ['4', 'The sealed letter: reuse it across two years, or retire the device', '**Reuse, once** — Unit 24.6, a letter to the B2 self', 'Phase 4'],
  ['5', 'Order of play: B1 Syria now, or the A2 International Edition first', '**B1 Syria now** — the cast and the calendar are live; International is a derivation and keeps', 'now'],
  ['6', '`bound.js` parameterisation — carried from A2, still unsigned', '**Sign it off**, extended with `PE_LEVEL`, so one script binds all four', 'Phase 0'],
], [0.5, 3.1, 3.3, 1.1], { headFill: C.navy }));
out.push(sp());
out.push(box('What happens next, on a yes', [
  'Phase 0 begins with **Unit 1 in full** — Student\'s Book and Answer Key — because the two things this plan asserts and cannot prove on paper are the page budget (34–36 pages at the new word counts) and the register (B1 prose with the past perfect in it, still readable by a class that has just finished A2). One unit settles both, and if either is wrong it is one unit\'s worth of rework rather than six.',
  'The Series Bible is updated first, in the same turn, so that the locked decisions for B1 are written down before any unit is written against them.',
], C.lorange, C.orange));

L.build(out, process.argv[2], 'Proactive English · B1 · Syria Edition · Production plan and curriculum blueprint');
