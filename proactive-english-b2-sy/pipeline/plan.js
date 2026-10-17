// Proactive English · B2 · Syria Edition — production plan and curriculum blueprint
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const N = (t) => box('Note', [t], C.lyellow, C.orange);
const D = (t) => box('Decision for the author', [t], C.lorange, C.orange);
const fn = (rows) => table(['Cycle', 'Function', 'Language'], rows, [0.8, 3.2, 3.4]);

out.push(h1('Proactive English · B2 · Syria Edition'));
out.push(h2('Production plan and curriculum blueprint'));
out.push(p('_Version 1.0 · 17 October 2026 · Author: Mo (Mohamad Khorbatli) · prepared against Series Bible v2.0, the finished A2 Books 1–2 and the finished B1 Books 1–2_', { color: '7F7F7F' }));
out.push(box('What this document is', [
  'The Series Bible puts B2 in **Round 3** — "B1 → B2 → C1 → C2, Syria then International, per level". B1 Syria is finished: twenty-four units, a hundred and sixty-eight cycles, four tests, four bound volumes. This is the plan for the level that follows it.',
  'Everything here comes from three sources: the **Series Bible**, the **finished A2 books** and the **finished B1 books** — the last of which matters most, because B1 is the first level in the series that was measured rather than estimated. Where a figure in the B1 plan turned out wrong against the delivered book, this plan uses the delivered figure and says so.',
  '**One thing is no longer a decision.** Line 6 of the certificate printed in B1 Unit 24.7 reads: _The B2 course (Proactive English B2) runs over two academic years: 252 hours._ Line 7 reads: _B2 assumes that the student can follow a conversation between two other speakers and can write a report of about 250 words._ Both are in a delivered Student\'s Book and in the End-of-Book Test. The shape of this level and its entry assumption were fixed the day Book 2 was bound.',
  'Seven questions are genuinely the author\'s to answer. They are collected in §15 and each is marked in place.',
], C.lblue, C.navy));

// ===================================================================
out.push(pb());
out.push(h2('1 · What is locked, and carries into B2 unchanged'));
out.push(p('From Series Bible §2, and from two levels that have now implemented it. None of this is re-opened at B2.'));
[
  '**The cycle.** 7 cycles to a unit; cycle x.7 is always Review & Mediate. 13 stages, 90 minutes, Lesson A Speaking (45) + Lesson B Writing (45): 1 Get ready · 2 Listen and read (+ Language box) · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read (+ Writer\'s box) · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · Homework.',
  '**The exact minute profile.** Cycles x.1–x.6 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 3 · 12 · 5 · 4 = 90. Cycle x.7 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 10 · 15 = **91**, eleven stages, no 6R. The 91 is the author\'s own arithmetic, reproduced deliberately at every level.',
  '**Components.** A Student\'s Book with every audio script printed **at the point of use** — never an appendix — and an Answer Key as a separate book. No teacher\'s notes. No appendices.',
  '**The Answer Key rule.** Every task gets an answer or a **full sample** — brainstorms, personalised speaking, reports, peer-review slips, free writing and homework included. B1 added the series\' only deliberate exception: the sealed letter of 24.6, which the key refuses to sample because the cycle exists to be unread. B2 keeps that exception in 24.6 and adds none.',
  '**Style.** British English. SYP, "pounds" in speech. 5.30 pm in text, "half past five" in speech. Dates 3 May. Syrian names and real Syrian places. No alcohol, dating or party-drinking. Same-gender pairing always available; a privacy option on every personal task.',
  '**The toolchain.** Node + docx-js, one script per artefact, one shared `lib.js`. `lib.js` is **frozen**: the B2 tree holds a byte-for-byte copy of the A2 original, verified by checksum against both earlier trees.',
  '**Delivery.** .docx per unit, bound volumes per book, and a bundle zip each turn carrying the bound book so far, the combined key, every unit\'s files, the handover and the pipeline.',
  '**Six `**Practise:**` lines per unit**, one in the Language box of each of x.1 to x.6 and none in x.7 — a house norm that was never written down until a B1 draft shipped with two of six, and is now a QA check.',
  '**Ten Note boxes per Answer Key.** The range is seven to ten; every B1 Book 2 key was built at exactly ten, and that is what B2 holds to.',
].forEach(t => out.push(bullet(t)));

// ===================================================================
out.push(h2('2 · Level architecture'));
out.push(p('**B2 is two books of twelve units, exactly as A2 and B1 are** — and at B2 this is not a recommendation but a printed commitment. 24 units × 7 cycles = **168 cycles = 252 contact hours**.'));
out.push(table(['', 'A2 (built)', 'B1 (built)', 'B2 (planned)'], [
  ['Books', '2', '2', '2'],
  ['Units', '24 (12 + 12)', '24 (12 + 12)', '24 (12 + 12)'],
  ['Cycles', '168', '168', '168'],
  ['Contact hours', '252', '252', '252'],
  ['Cumulative hours at the end', '252', '504', '**756**'],
  ['Tests', '4', '4', '4'],
  ['Mid-Book Test sits after', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18'],
  ['End-of-Book Test sits after', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24'],
  ['Exam anchor', 'Cambridge A2 Key', 'Cambridge B1 Preliminary', '**Cambridge B2 First**'],
], [2.2, 1.7, 1.8, 1.8], { headFill: C.navy }));
out.push(p('**756 cumulative hours** sits inside the 600–800 band usually quoted for B2 and towards its upper end, which is the right place for a learner who began below A2 and has been taught by this method — the method spends hours on evidence and on rewriting rather than on coverage, and the dividend is in what the student can produce rather than in how much they have met.'));
out.push(N('**The three-book question does not reopen at B2.** At B1 it was live until the first Mid-Book Test was written. Here it is closed by print: the certificate in B1 24.7 says 252 hours over two academic years, the enrolment line says the spring intake, and the End-of-Book Test repeats both. A 3 × 8 rebinding is still mechanically possible — the units do not change — but it now costs an erratum in a delivered book as well as two extra test-and-key pairs.'));

out.push(h3('Hours, and the calendar'));
out.push(p('Four hours a week over about thirty-one teaching weeks. One book of twelve units is **126 hours** — one academic year. So **B2 Book 1 runs September to June and B2 Book 2 runs the September after**, which matters more at this level than at any other, because two dated promises made in B1 fall inside those two years and the plan has to land them on the right page. See §10.'));

// ===================================================================
out.push(h2('3 · The four tests'));
out.push(p('The mark architecture is the author\'s own and is carried over from A2 and B1 without change. Two things move, and both are forced by the exam rather than chosen.'));
out.push(table(['Test', 'Where', 'Marks', 'Split', 'Pages (projected)'], [
  ['Mid-Book Test', 'after Unit 6', '60', 'Reading 20 · Writing 15 · Listening 15 · Speaking 10', '10–11 + key 8–9'],
  ['End-of-Book Test', 'after Unit 12', '100', 'Reading 30 · Writing 30 · Listening 20 · Speaking 20', '14–15 + key 11–12'],
  ['Mid-Book Test', 'after Unit 18', '60', 'as above', '10–11 + key 8–9'],
  ['End-of-Book Test', 'after Unit 24', '100', 'as above', '14–15 + key 11–12'],
], [1.6, 1.3, 0.7, 3.4, 1.6], { headFill: C.navy }));
[
  '**The Reading paper grows, because B2 First\'s Reading and Use of English has seven parts** where Preliminary has six and Key has five. The marks stay at 20 and 30; the page count rises.',
  '**The Writing paper\'s time changes.** B1 allowed 45 minutes for two tasks of about 100 words. B2 First allows 80 minutes for two tasks of 140–190. So the B2 papers allow **60 minutes** in the Mid-Book Test and **80 minutes** in the End-of-Book Test. This is the only timing change the level makes and it is arithmetic, not a judgement.',
].forEach(t => out.push(bullet(t)));
out.push(N('**The page figures above are projections and the B1 plan\'s equivalents were wrong.** B1\'s plan said its end tests would be 10–11 pages; both came out at **12**, with keys of 8 and 9 against a predicted 9–10. The lesson is recorded in the B1 handover and applied here: the first B2 test built settles the band, and this table is amended to the measured figure rather than the other way round.'));

// ===================================================================
out.push(pb());
out.push(h2('4 · Exam anchor: Cambridge B2 First'));
out.push(p('A2 anchored on A2 Key, B1 on B1 Preliminary, each practised inside cycle x.7 and the unit check. B2 anchors on **B2 First**. The paper is larger than Preliminary\'s in every dimension, and the rotation has to carry seven reading parts instead of six and five writing genres instead of two.'));
out.push(table(['Paper', 'Part', 'Where it is practised'], [
  ['Reading and Use of English', '1 · multiple-choice cloze (8)', 'x.7 Stage 5, Units 3, 10, 17, 24'],
  ['', '2 · open cloze (8)', 'x.7 Stage 5, Units 4, 11, 18'],
  ['', '3 · word formation (8)', 'x.7 Stage 5, Units 1, 8, 15, 22'],
  ['', '4 · key word transformations (6)', 'x.7 Stage 5, Units 2, 9, 16, 23'],
  ['', '5 · long text, 4-option multiple choice (6)', 'x.7 Stage 5, Units 5, 12, 19'],
  ['', '6 · gapped text, paragraph insertion (6)', 'x.7 Stage 5, Units 6, 13, 20'],
  ['', '7 · multiple matching (10)', 'x.7 Stage 5, Units 7, 14, 21'],
  ['Writing', '1 · the essay, 140–190 words, compulsory', 'x.7 Stage 7, **every odd-numbered unit**'],
  ['', '2 · article', 'x.7 Stage 7, Units 2, 10, 18'],
  ['', '2 · letter or email', 'x.7 Stage 7, Units 4, 12, 20'],
  ['', '2 · report', 'x.7 Stage 7, Units 6, 14, 22'],
  ['', '2 · review', 'x.7 Stage 7, Units 8, 16, 24'],
  ['Listening', '1 · eight short extracts, 3-option (8)', 'unit check, Units 1, 5, 9, 13, 17, 21'],
  ['', '2 · sentence completion (10)', 'unit check, Units 2, 6, 10, 14, 18, 22'],
  ['', '3 · multiple matching (5)', 'unit check, Units 3, 7, 11, 15, 19, 23'],
  ['', '4 · interview, 7 three-option (7)', 'unit check, Units 4, 8, 12, 16, 20, 24'],
  ['Speaking', '1 · interview (2 min)', 'every x.1 Stage 1'],
  ['', '2 · the long turn — **a pair of photographs**, and 30 seconds on your partner\'s', '**taught in Unit 4**; practised in Stage 4R from Unit 4 on'],
  ['', '3 · collaborative task — a written prompt, five options, **then a separate one-minute decision**', '**taught in Unit 6**; practised in x.7 Stage 3 from Unit 6 on'],
  ['', '4 · discussion (4 min)', 'x.7 Stage 4R, the mediation stage, every unit'],
], [1.6, 3.2, 3.3], { headFill: C.navy }));
out.push(p('The rotation puts Reading Parts 1, 3 and 4 in front of a class **four** times and Parts 2, 5, 6 and 7 **three** times — 4 + 4 + 4 + 3 + 3 + 3 + 3 = 24, one part per unit with nothing left over. Parts 1, 3 and 4 get the extra pass because they are the lexico-grammatical ones: multiple-choice cloze, word formation and key word transformations are the three parts that cannot be done by reading well, and they are where a class taught by this method is weakest.'));
out.push(p('**The essay is practised twelve times** — once in every odd-numbered unit — because it is the one task in the paper nobody can avoid. Each of the four Part 2 genres is practised three times. At B1 the rotation was simply W1 odd and W2 even; at B2 it has to name the genre, because an article, a letter, a report and a review are four different pieces of writing and a student who has written nine articles and no report is not prepared.'));
out.push(N('**Speaking Parts 2 and 3 come early at B2, and that is the chief structural change of the level.** At B1 they were taught in Units 9 and 12, so the Book 1 Mid-Book Test could only use Parts 1 and 4. At B2 the class can already do both parts in their Preliminary shape; what is new is a difference in each — **a pair** of photographs plus a thirty-second response to the partner\'s pair, and a collaborative task whose **decision is a separate one-minute task**. A difference can be taught in one cycle, so Part 2 goes in Unit 4 and Part 3 in Unit 6 — which means **all four B2 tests use all four Speaking parts**, and the first Mid-Book Test is a full paper rather than a half one.'));
out.push(N('**Speaking Part 2 needs two photographs and this pipeline draws none.** A2 and B1 both solved it by **describing** the images in words inside a bordered box, and the solution carries unchanged: every Part 2 prompt is a described pair. If the author wants real images later they drop into the same box with no other change.'));
out.push(D('**Decision 2.** B2 First as the anchor, on the rotation above — or B2 Business Vantage, which would suit the cast\'s working lives better and is a different paper, or exam-light with x.7 kept as pure mediation. A2 and B1 both chose the general exam; this plan assumes B2 does too.'));

// ===================================================================
out.push(h2('5 · Word counts, text lengths and the page budget'));
out.push(p('Series Bible §4 fixes word counts per book and steps them up between books. The first four columns are **measured from the built books**; the last two are the proposal.'));
out.push(table(['', 'A2 B1', 'A2 B2', 'B1 B1', 'B1 B2', 'B2 Book 1', 'B2 Book 2'], [
  ['Guided writing (Stage 6)', '≥25', '≥35', '≥50', '≥60', '**≥80**', '**≥100**'],
  ['Free writing (Stage 7)', '35–60', '60–100', '100–140', '140–180', '**180–220**', '**200–260**'],
  ['Model text (Stage 5)', '45–100', '100–180', '180–260', '250–350', '**350–480**', '**420–560**'],
  ['Main dialogue, turns', '10–12', '10–14', '12–16', '14–18', '**16–20**', '**16–22**'],
  ['Tracks per unit', '15', '14', '15', '15', '**15**', '**15**'],
  ['SB pages per unit', '31', '31–33', '35–38', '38–40', '**41–43**', '**42–45**'],
  ['AK pages per unit', '17–18', '18–22', '22–30', '29–31', '**32–34**', '**33–36**'],
], [2.0, 0.9, 0.9, 0.9, 0.9, 1.2, 1.2], { headFill: C.navy }));
out.push(p('The free-writing band is set by the exam and not invented: B2 First asks for **140–190 words** in each of its two parts, so Book 1 trains to 180–220 and Book 2 to 200–260, which leaves a margin above the exam rather than sitting exactly on it. The same discipline set B1\'s band against Preliminary\'s 100.'));
out.push(N('**The page count follows the word count, not more stages.** The cycle is locked at 13 stages and 90 minutes, so a B2 unit is longer than a B1 unit only because its texts are longer and because x.7 carries a seven-part reading rotation instead of a six-part one. The two page-count levers are now three, and the third was learned on B1: an SB cycle must fit its budget — measure per page with `pdftotext -f N -l N | grep -c "[A-Za-z]"` — and then read the spread. A page under about twenty counted lines usually means an unsplittable box has **jumped**; a page with only two to five counted lines is **either** a genuinely blank page, where a cycle ended exactly at a page boundary and the next page break pushed past it, **or** a correct ruled writing block, which the line counter cannot see. Always read the preceding page before trimming. Trimming early in a cycle does not collapse its tail: take 12–15 counted lines out of the cycle whose tail page is smallest, and expect a second, deeper pass where a page is genuinely blank.'));

out.push(h3('What B2 amounts to when it is finished'));
out.push(table(['', 'Count'], [
  ['Units', '24'],
  ['Cycles / language functions', '168'],
  ['Audio scripts', '360 (15 per unit)'],
  ['Unit artefacts', '48 (24 Student\'s Book + 24 Answer Key)'],
  ['Test artefacts', '8 (4 papers + 4 keys)'],
  ['Bound volumes', '4 (2 Student\'s Books + 2 Answer Keys)'],
  ['Plus', 'Series Bible v3, this plan, a handover per book'],
  ['**Total pages, approximately**', '**1,930**'],
], [3.2, 2.4], { headFill: C.navy }));
out.push(p('For comparison, B1 as built is about **1,560** pages and A2 about **1,260**. The series at the end of B2 is roughly **4,750** pages across three levels, twelve bound volumes and twelve tests.'));

// ===================================================================
out.push(pb());
out.push(h2('6 · Peer-review checklists — the B2 progression'));
out.push(p('Series Bible §5 fixes a four-band progression across each level\'s 24 units. A2 ended at _English, free_. B1 ended at _the reviewer names the criterion they are marking against_ — introduced in 19.1 and printed per cycle at the end of every 7P stage. B2 starts there.'));
out.push(table(['B2 Units 1–6', 'B2 Units 7–12', 'B2 Units 13–18', 'B2 Units 19–24'], [
  ['The criterion named **and the evidence quoted** — the reviewer copies the line they are marking, not a summary of it',
   '+ **one thing to keep**, with why it works, as well as one to change · and the slip ranked: which of the three matters most',
   '+ the writer **predicts the slip before reading it**, in one line, and the gap between the prediction and the slip is the lesson',
   '+ reviewer and writer **agree a single criterion in advance** and the slip is written against that one only — which is what an examiner does, and what a colleague never does'],
  ['Feedback: English, free, criterion named', 'English, criterion named and ranked', 'English, with the writer\'s prediction attached', 'English, one agreed criterion, and a mark out of five against it'],
], [1, 1, 1, 1]));
out.push(p('The arc of the level is from **giving judgement** to **agreeing the standard in advance** — and the last band is the only one in the series in which the student awards a mark. That is deliberate: B2 First Speaking Part 3 and Writing Part 1 are both assessed against published descriptors, and a student who has never applied a descriptor to anybody has only ever been on the receiving end of one.'));
out.push(N('**The slip is also where the level\'s hardest habit is built.** Band 3 asks the writer to predict their own slip before reading it. Expect the prediction to be wrong about **what** and right about **where** — students know which paragraph is weak and misdiagnose why — and expect that to be the most useful two minutes in the cycle.'));

// ===================================================================
out.push(pb());
out.push(h2('7 · Book 1 — Units 1–12'));
out.push(p('Each unit\'s grammar home is the thing it owns; the exam column names the B2 First parts its x.7 cycle practises. The last column is what the unit takes from B1 and raises — and at B2 almost every unit has one, because this is the first level in the series that inherits a finished level beneath it.'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from B1'], [
  ['1', 'What We No Longer Have to Explain', 'the tense system as a resource, at speed · stance adverbs · ellipsis on shared ground', 'R3 · W1 · L1', 'B1 U24.1 — the map, now productive'],
  ['2', 'Taking the Person Out', 'nominalisation both ways · the recoverable agent', 'R4 · W2 article · L2', 'B1 U19.1 and U23.3, inverted'],
  ['3', 'The Essay', 'the thesis sentence · _while / whereas_ · _it could be argued that_', 'R1 · W1 · L3', 'new — the compulsory paper'],
  ['4', 'Speculating at Range', 'nine degrees of certainty · perfect modals · **Speaking Part 2**', 'R2 · W2 letter · L4', 'B1 U9 and U23.5'],
  ['5', 'Not Only, But', 'fronting · negative inversion · end-weight · the four cleft shapes', 'R5 · W1 · L1', 'B1 U22.2 — one cleft, now four'],
  ['6', 'Deciding, and Saying So', 'narrowing and discard · the decision sentence · **Speaking Part 3**', 'R6 · W2 report · L2', 'B1 U12.5 and U21.6'],
  ['—', '**MID-BOOK TEST · Units 1–6 · 60 marks · all four Speaking parts**', '', '', ''],
  ['7', 'Cause at a Distance', '_which in turn_ · _thereby_ · _attributable to_ · _accounts for_', 'R7 · W1 · L3', 'B1 U15 and U8.3'],
  ['8', 'Reviews', 'evaluative range · _for all its_ · the verdict with its reader', 'R3 · W2 review · L4', 'new genre'],
  ['9', 'Concession That Costs Something', '_granted that_ · _for all_ · _much as_ · _the fact remains_', 'R4 · W1 · L1', 'B1 U12.3 and U21.3'],
  ['10', 'Numbers in Prose', 'quantity comparison · _by a factor of_ · _no more than_ · honest rounding', 'R1 · W2 article · L2', 'B1 U22.3, at paragraph scale'],
  ['11', 'Three Readers, One Fact', 'register as three dials · the verb that sets it', 'R2 · W1 · L3', 'B1 U18.4 and U22.6, now one task'],
  ['12', 'What the Year Showed', 'the whole of Book 1 on one page · reporting your own old claim', 'R5 · W2 letter · L4', '**B1 U24.5 — the 1 June sheet is read**'],
  ['—', '**END-OF-BOOK TEST · Units 1–12 · 100 marks**', '', '', ''],
], [0.6, 2.3, 3.0, 1.1, 2.3], { headFill: C.navy }));

out.push(pb());
out.push(h2('8 · Book 2 — Units 13–24'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from B1'], [
  ['13', 'Interviews at B2', 'the four-sentence competency answer · narrative tenses under pressure', 'R6 · W1 · L1', 'B1 U22 and U13'],
  ['14', 'Negotiating a Difference of Interest', '_in return for_ · _were we to_ · _subject to_ · the alternative in writing', 'R7 · W2 report · L2', 'B1 U21 — compromise becomes trade'],
  ['15', 'Writing to Somebody Who Has Already Said No', '_I appreciate that … nonetheless_ · reopening without reproach', 'R3 · W1 · L3', 'B1 U19.4 and U21.7'],
  ['16', 'Judging Against Criteria', 'criteria that can be failed · weighting · the appealable verdict', 'R4 · W2 review · L4', 'B1 U22.7, from the other side of the desk'],
  ['17', 'The Argument You Do Not Hold', '_on this view_ · reporting an opposing case without giveaways', 'R1 · W1 · L1', 'B1 U23.2 — the verb, turned on yourself'],
  ['18', 'Summarising at Length', 'substitution and ellipsis · _the latter_ · _such_ · claim strength held', 'R2 · W2 article · L2', 'B1 U23.4 — three sentences become two hundred words'],
  ['—', '**MID-BOOK TEST · Units 13–18 · 60 marks**', '', '', ''],
  ['19', 'Chairing and Minuting', 'the minute\'s tense conventions · _it was agreed that_ · the action column', 'R5 · W1 · L3', 'B1 U16 and U19.7'],
  ['20', 'Giving Bad News in Writing', 'distance where it is kind · _we are not in a position to_ · the unhedged sentence', 'R6 · W2 letter · L4', 'B1 U19 and U20'],
  ['21', 'Specifications and Acceptance Criteria', '_shall / must / should / may_ as requirement levels · the measurable criterion', 'R7 · W1 · L1', 'B1 U20 and U22.7'],
  ['22', 'Proposals', 'cost and benefit · _on the assumption that_ · the cost of doing nothing', 'R3 · W2 report · L2', 'B1 U19.4 — one request becomes one proposal'],
  ['23', 'The Long Read', 'paragraph architecture · the turn · cohesion across five paragraphs', 'R4 · W1 · L3', 'B1 U23.6 — 120 words become 500'],
  ['24', 'Opening the Letters', 'the whole system · **the B1 letter opened and the C1 letter written**', 'R1 · W2 review · L4', '**B1 U24.6 paid off**'],
  ['—', '**END-OF-BOOK TEST · Units 13–24 · 100 marks**', '', '', ''],
], [0.6, 2.3, 3.0, 1.1, 2.3], { headFill: C.navy }));
out.push(N('**Two units in this level exist because of a date printed in another book.** Unit 12 is where the 1 June prediction sheet of B1 24.5 is read, because Book 1 of B2 runs September to June and 12.7 is the June lesson. Unit 24.6 is where the sealed letters of B1 24.6 are opened, because they were sealed "to be opened at the end of your B2 course". Neither unit can be moved without breaking a promise that is already in print.'));

// ===================================================================
out.push(pb());
out.push(h2('9 · The 168 functions'));
out.push(p('Seven per unit, one per cycle. x.7 is Review & Mediate in every unit and is written in full. This is the list the units are written from; nothing outside it is taught, and nothing in it is taught twice. A reference in brackets names the B1 cycle the function raises, so that a writer can read the earlier cycle before writing the later one.'));

out.push(h3('Book 1'));
out.push(p('**Unit 1 · What We No Longer Have to Explain**', { bold: true, color: C.navy }));
out.push(fn([
  ['1.1', 'say what you no longer have to explain about your own work', 'ellipsis on shared ground · _as you know_ · and when not to say _obviously_'],
  ['1.2', 'choose a register on purpose and say which one you chose', 'the three dials: the verb, the sentence length, the hedge'],
  ['1.3', 'place a stance adverb where it does the work', '_frankly · admittedly · arguably · to be fair_ — initial, medial, final'],
  ['1.4', 'use the whole tense system at speed without naming it', 'the twelve forms as answers to three questions _(24.1, now productive)_'],
  ['1.5', 'answer a question you have been asked before, differently', 'paraphrase at sentence level · getting out of your own formula'],
  ['1.6', 'write the half-page that assumes a reader who knows the work', 'what to leave out — and the one line that says you have left it out'],
  ['1.7', '**Review & Mediate:** explain to a newcomer what this room already takes for granted', 'recycling Unit 1 · Reading Part 3 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 2 · Taking the Person Out**', { bold: true, color: C.navy }));
out.push(fn([
  ['2.1', 'turn a clause into a noun phrase, and back again', '_we suspended deliveries_ ↔ _the suspension of deliveries_'],
  ['2.2', 'say what a nominalisation hides, and decide whether that is wanted', 'the agent test _(19.1 and 23.3, now inverted)_'],
  ['2.3', 'keep the agent recoverable in the paragraph when the sentence drops it', '_the decision, taken by the works office on 2 March, to…_'],
  ['2.4', 'compress three sentences into one without losing the figures', 'postmodification · _of_-chains and the point at which they break'],
  ['2.5', 'write a sentence a committee will not argue with — and know what it cost', 'abstraction and its price'],
  ['2.6', 'write an opening paragraph in which no person appears, and a second in which they all do', 'the pair, side by side, as one page'],
  ['2.7', '**Review & Mediate:** rewrite an unreadable official paragraph for the person it is about', 'Reading Part 4 · Writing Part 2 (article) · Listening Part 2'],
]));
out.push(p('**Unit 3 · The Essay**', { bold: true, color: C.navy }));
out.push(fn([
  ['3.1', 'state a position in one sentence that can be disagreed with', 'the thesis sentence · _X, rather than Y, is what…_'],
  ['3.2', 'take the two points you are given and say which you will concede', 'the four-paragraph shape · planning in four lines'],
  ['3.3', 'add the third point, which is your own, and say why it is not obvious', '_a third consideration, which is rarely raised, is…_'],
  ['3.4', 'support a point with one example and no more', '_take the case of_ · _one instance is enough to show that_'],
  ['3.5', 'write a conclusion that follows from the paragraphs and adds one thing', '_on balance_ · _the question is therefore not whether … but_'],
  ['3.6', 'write the full essay to the exam shape, in forty minutes', '180–220 words · four paragraphs · one conceded point'],
  ['3.7', '**Review & Mediate:** mark somebody else\'s essay against the four band descriptors', 'Reading Part 1 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 4 · Speculating at Range**', { bold: true, color: C.navy }));
out.push(fn([
  ['4.1', 'say how sure you are in nine steps instead of three', '_must · may well · could conceivably · is unlikely to · cannot_'],
  ['4.2', 'speculate about a past event and mark the evidence you are using', '_must have · may have · needn\'t have · cannot have_'],
  ['4.3', 'describe two things and say what they have in common that neither shows', '**Speaking Part 2 at B2** — the pair of photographs'],
  ['4.4', 'respond in thirty seconds to somebody else\'s pair without summarising it', 'the one-sentence answer with a reason attached'],
  ['4.5', 'withdraw a speculation in public without losing the point', '_I may be wrong about the cause; I am not wrong about the figure_'],
  ['4.6', 'write the page that separates what you know from what you infer', 'three columns at paragraph scale _(23.5, raised)_'],
  ['4.7', '**Review & Mediate:** explain a photograph to somebody who cannot see it, then mediate two readings of it', 'Reading Part 2 · Writing Part 2 (letter/email) · Listening Part 4'],
]));
out.push(p('**Unit 5 · Not Only, But**', { bold: true, color: C.navy }));
out.push(fn([
  ['5.1', 'front the part of the sentence you want read first', 'fronting · _of the eleven, nine_ · _what matters here is_'],
  ['5.2', 'invert after a negative adverbial', '_not only … but also_ · _at no point_ · _rarely_ · _under no circumstances_'],
  ['5.3', 'delay the main point to the end of the sentence on purpose', '_it was not until … that_ · end-weight'],
  ['5.4', 'use a cleft when the emphasis has to survive a summary', '_(22.2, now with the other three shapes)_ _what … is_ · _all … is_ · _the reason … is_'],
  ['5.5', 'say the same thing three ways and choose by what the reader will quote', 'the summary test, applied to your own sentence'],
  ['5.6', 'write the paragraph whose first six words carry the argument', 'the loaded opening, and the sentence that pays for it'],
  ['5.7', '**Review & Mediate:** explain why one version of a sentence was quoted and the other was not', 'Reading Part 5 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 6 · Deciding, and Saying So**', { bold: true, color: C.navy }));
out.push(fn([
  ['6.1', 'narrow five options to two, out loud, with a reason for each discard', '_that rules out_ · _which leaves us with_ · _I\'d drop that first_'],
  ['6.2', 'disagree with your partner and keep the task moving', '_I\'d push back on that_ · _say more about_ · _can we park that?_'],
  ['6.3', 'make the joint decision in one minute and say what you are giving up', '**Speaking Part 3 at B2** — the discussion, then the separate decision'],
  ['6.4', 'record a decision somebody who was not there can act on', 'the decision sentence: who · what · by when'],
  ['6.5', 'say what the decision does not cover', 'scope, and the first question it will be asked'],
  ['6.6', 'write the one-page record of a decision with the discarded options in it', 'the record that survives the meeting'],
  ['6.7', '**Review & Mediate:** mediate between a decision and the people it lands on', 'Reading Part 6 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 7 · Cause at a Distance**', { bold: true, color: C.navy }));
out.push(fn([
  ['7.1', 'trace a consequence three steps from its cause', '_which in turn_ · _with the result that_ · _and so_'],
  ['7.2', 'say how much of an effect you are attributing to a cause', '_largely · in part · attributable to · accounts for about_'],
  ['7.3', 'name the thing that would show you were wrong about the cause', 'falsification _(8.3, raised to argument scale)_'],
  ['7.4', 'distinguish a cause from a condition and from a trigger', 'the three words, and the test for each'],
  ['7.5', 'describe a mechanism in six sentences so that somebody can predict it', 'the mechanism paragraph, and what makes one checkable'],
  ['7.6', 'write the page that explains a recurring fault by its mechanism, not its symptom', '_(22.1 and 23.6, raised)_'],
  ['7.7', '**Review & Mediate:** explain to two parties why their shared problem has one cause and two symptoms', 'Reading Part 7 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 8 · Reviews**', { bold: true, color: C.navy }));
out.push(fn([
  ['8.1', 'give a verdict in one sentence and say who it is for', '_for anybody who …, this is …; for anybody who …, it is not_'],
  ['8.2', 'support a verdict with the one detail that changed your mind', 'the decisive detail, and why one is enough'],
  ['8.3', 'write about what is wrong with something you recommend', 'the two-sided review · _its weakness is real and I would still_'],
  ['8.4', 'compare without ranking', '_where X is …, Y is …_ · _the difference is not better and worse but_'],
  ['8.5', 'end a review with the sentence a reader will act on', 'the actionable last line'],
  ['8.6', 'write the review to the exam shape', '180–220 words · a verdict, a reader, a weakness, a last line'],
  ['8.7', '**Review & Mediate:** mediate between two reviews of the same thing that disagree', 'Reading Part 3 · Writing Part 2 (review) · Listening Part 4'],
]));
out.push(p('**Unit 9 · Concession That Costs Something**', { bold: true, color: C.navy }));
out.push(fn([
  ['9.1', 'concede the strongest point against you, in its strongest form', '_granted that_ · _there is no answer to_ · _that is simply true_'],
  ['9.2', 'say what the concession does not concede', '_that does not touch_ · _the fact remains that_'],
  ['9.3', 'concede and name the exchange in the same sentence', '_(21.3, at argument scale)_ _in return for_ · _if that is accepted, then_'],
  ['9.4', 'concede inside a single clause', '_for all_ · _much as_ · _whatever else is true_'],
  ['9.5', 'tell a real concession from a rhetorical one in somebody else\'s writing', 'the test: what did it cost the writer?'],
  ['9.6', 'write the paragraph that gives away the best objection in its first line', '_(12.3 and 22.6, raised)_'],
  ['9.7', '**Review & Mediate:** explain a dispute in which both sides have conceded and neither has noticed', 'Reading Part 4 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 10 · Numbers in Prose**', { bold: true, color: C.navy }));
out.push(fn([
  ['10.1', 'put a figure in a sentence so that it can be argued with', '_(22.3, raised)_ _of the …, …_ · _one in eight_'],
  ['10.2', 'compare two quantities without a table', '_by a factor of_ · _half as many again_ · _no more than_'],
  ['10.3', 'say what a figure is not evidence of', 'the negative claim, stated before anybody asks'],
  ['10.4', 'describe a trend and its exceptions in three sentences', '_broadly_ · _with two exceptions_ · _against the trend_'],
  ['10.5', 'round a number honestly and say that you have', '_about_ and the sentence that follows it'],
  ['10.6', 'write the half-page that carries six figures and reads as prose', 'figures inside sentences, not in a list'],
  ['10.7', '**Review & Mediate:** mediate between a figure and the person it is about', 'Reading Part 1 · Writing Part 2 (article) · Listening Part 2'],
]));
out.push(p('**Unit 11 · Three Readers, One Fact**', { bold: true, color: C.navy }));
out.push(fn([
  ['11.1', 'write the same fact for a colleague, a stranger and a committee', 'the three versions side by side _(18.4 and 22.6, now one task)_'],
  ['11.2', 'choose the verb that sets the register', '_told · informed · advised · notified · wrote to_'],
  ['11.3', 'move a sentence up and down the formality scale without changing its content', 'the three dials, applied in both directions'],
  ['11.4', 'say which version you would send, and what sending it costs', 'the choice, and the thing you lose by making it'],
  ['11.5', 'read a document and name the reader it was written for', 'reader-reconstruction from the lexis'],
  ['11.6', 'write the three versions and the one-line note saying which to send', 'the covering line as part of the task'],
  ['11.7', '**Review & Mediate:** explain a document to the reader it was not written for', 'Reading Part 2 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 12 · What the Year Showed**', { bold: true, color: C.navy }));
out.push(fn([
  ['12.1', 'say what you can do now that you could not do in September, in figures', '_(24.4, at B2 scale)_ — a figure and a source on every item'],
  ['12.2', 'read the prediction sheet of 1 June and report your own line with the right verb', '**the B1 24.5 sheet, paid off** · _(23.2 and 23.5)_'],
  ['12.3', 'name the one thing you were wrong about in a way that is useful', 'the diagnosis, not the apology'],
  ['12.4', 'say what the year cost, in hours, and whether you would spend them again', 'cost in a sentence a stranger could check'],
  ['12.5', 'write the page for the person who will take your place', 'handover as a genre'],
  ['12.6', 'write the half-year letter to yourself — dated, and not sealed this time', 'the open letter, which is a different task from 24.6'],
  ['12.7', '**Review & Mediate:** explain a year\'s evidence to somebody deciding whether to spend it', 'Reading Part 5 · Writing Part 2 (letter/email) · Listening Part 4'],
]));

out.push(h3('Book 2'));
out.push(p('**Unit 13 · Interviews at B2**', { bold: true, color: C.navy }));
out.push(fn([
  ['13.1', 'answer a competency question in four sentences', 'situation · action · result · and what you would change'],
  ['13.2', 'keep the narrative tenses straight under pressure', 'the past perfect inside a past narrative, at speaking speed'],
  ['13.3', 'answer a question you were not asked, and say that you are doing so', '_if what you are asking is whether …, then_'],
  ['13.4', 'ask the panel a question that changes their mind about you', '_(22.5, raised)_ — the mechanism question, asked upwards'],
  ['13.5', 'handle the question about money in one sentence', 'the figure, the reason, and no third sentence'],
  ['13.6', 'write the four competency answers out, eighty words each', 'the written answer as rehearsal, not as a script'],
  ['13.7', '**Review & Mediate:** explain a job description to somebody who is not sure they can do it', 'Reading Part 6 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 14 · Negotiating a Difference of Interest**', { bold: true, color: C.navy }));
out.push(fn([
  ['14.1', 'tell a difference of interest from a misunderstanding', 'the two diagnoses, and why only one of them is negotiable'],
  ['14.2', 'state what you want, what you will trade, and what you will not', '_in return for_ · _I am not able to trade_'],
  ['14.3', 'make a conditional offer at range', '_were we to_ · _subject to_ · _provided that_ _(21.2, raised)_'],
  ['14.4', 'write down your own best alternative, for yourself, before the meeting', 'the alternative as a figure, not as a feeling'],
  ['14.5', 'close — or say plainly that you are not closing today', '_I\'d rather not settle this now, and here is why_'],
  ['14.6', 'write the two-page note: interests, trades, limits, alternative', 'the negotiator\'s own page'],
  ['14.7', '**Review & Mediate:** mediate a negotiation in which both sides are right', 'Reading Part 7 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 15 · Writing to Somebody Who Has Already Said No**', { bold: true, color: C.navy }));
out.push(fn([
  ['15.1', 'say what has changed since the refusal, in one sentence', 'the new fact, and nothing about the old answer'],
  ['15.2', 'reopen without reproach', '_I appreciate that … nonetheless_ · no reference to the refusal\'s tone'],
  ['15.3', 'ask for less than you asked for the first time, and say so', 'the reduced ask, named as reduced'],
  ['15.4', 'give the reader a way to say yes without reversing themselves', '_if the position has not changed, …; if it has, …_'],
  ['15.5', 'set the date on which you will stop asking', 'the self-imposed limit, in writing'],
  ['15.6', 'write the second letter', '180–220 words · the new fact, the smaller ask, the exit'],
  ['15.7', '**Review & Mediate:** explain a refusal to the person who received it', 'Reading Part 3 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 16 · Judging Against Criteria**', { bold: true, color: C.navy }));
out.push(fn([
  ['16.1', 'write three criteria that can each be failed', '_(22.7, from the other side of the desk)_'],
  ['16.2', 'weight the criteria in public, before you assess anything', 'the weighting sentence, published first'],
  ['16.3', 'assess one thing against the criteria and show the working', 'the working as part of the verdict'],
  ['16.4', 'write a verdict that can be appealed, and say how', 'the appeal route, in the verdict itself'],
  ['16.5', 'say which criterion you would drop, and why', 'self-critique of your own instrument'],
  ['16.6', 'write the assessment: criteria, weights, working, verdict, appeal', 'the five-part assessment'],
  ['16.7', '**Review & Mediate:** mediate between an assessor and the person assessed', 'Reading Part 4 · Writing Part 2 (review) · Listening Part 4'],
]));
out.push(p('**Unit 17 · The Argument You Do Not Hold**', { bold: true, color: C.navy }));
out.push(fn([
  ['17.1', 'state the strongest version of the case against your own', 'the steelman, in its own words'],
  ['17.2', 'report an opposing view without the words that give you away', '_on this view_ · _the objection is that_ _(23.2, turned on yourself)_'],
  ['17.3', 'say which part of the opposing case you cannot answer', 'the unanswered part, named'],
  ['17.4', 'distinguish the case from the people who make it', '_the argument does not depend on who is making it_'],
  ['17.5', 'answer the strong version and leave the weak one alone', 'the discipline of not winning cheaply'],
  ['17.6', 'write the two-paragraph steelman and the one-paragraph answer', 'the three paragraphs, in that order'],
  ['17.7', '**Review & Mediate:** present both sides of a dispute to somebody who has to choose', 'Reading Part 1 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 18 · Summarising at Length**', { bold: true, color: C.navy }));
out.push(fn([
  ['18.1', 'reduce two thousand words to two hundred without a list', '_(23.4 — three sentences become two hundred words)_'],
  ['18.2', 'substitute and omit rather than repeat', '_the latter_ · _such_ · _did so_ · ellipsis across sentences'],
  ['18.3', 'keep the author\'s claim strength — not stronger, not weaker', 'the hedge preserved, and why losing it is a mistranslation'],
  ['18.4', 'say what you have left out, and why', 'the omission note, as part of the summary'],
  ['18.5', 'summarise an argument you disagree with, fairly', 'the fair summary, checked by its author'],
  ['18.6', 'write the 200-word summary and the one-line note on what was cut', 'the pair as one deliverable'],
  ['18.7', '**Review & Mediate:** explain a long document to somebody who will not read it', 'Reading Part 2 · Writing Part 2 (article) · Listening Part 2'],
]));
out.push(p('**Unit 19 · Chairing and Minuting**', { bold: true, color: C.navy }));
out.push(fn([
  ['19.1', 'open a meeting by saying what it is for and what it will not decide', 'the scope sentence, said first'],
  ['19.2', 'bring a discussion back without silencing anybody', '_let me take that in a moment_ · _hold that_'],
  ['19.3', 'state a decision out loud so that the minute writes itself', 'the spoken decision sentence'],
  ['19.4', 'write a minute: decision, who, by when — and what was not decided', 'the four columns _(16.7 and 19.7, raised)_'],
  ['19.5', 'record a dissent fairly, and name it', '_X did not agree, on the grounds that_'],
  ['19.6', 'write the minute of a meeting you ran', 'one page, with the action column'],
  ['19.7', '**Review & Mediate:** mediate between a minute and somebody who says it is wrong', 'Reading Part 5 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 20 · Giving Bad News in Writing**', { bold: true, color: C.navy }));
out.push(fn([
  ['20.1', 'put the decision in the first two sentences', 'no approach paragraph, and why it is kinder without one'],
  ['20.2', 'give the reason once, and not three times', 'the single reason, and the three that weaken it'],
  ['20.3', 'say what is not open to appeal, and what is', 'the two sentences that stop a correspondence'],
  ['20.4', 'use distance where it is kind and not where it is cowardly', 'the passive, revisited _(19.1, with a judgement attached)_'],
  ['20.5', 'write the one sentence in the letter that is not hedged', 'the unhedged line, placed on purpose'],
  ['20.6', 'write the letter of refusal', '180–220 words · decision, reason, appeal, the plain sentence'],
  ['20.7', '**Review & Mediate:** explain a refusal letter to the person who has to send it', 'Reading Part 6 · Writing Part 2 (letter/email) · Listening Part 4'],
]));
out.push(p('**Unit 21 · Specifications and Acceptance Criteria**', { bold: true, color: C.navy }));
out.push(fn([
  ['21.1', 'write a requirement that can be tested', 'the testable requirement, and the untestable one beside it'],
  ['21.2', 'use the requirement levels and mean them', '_shall · must · should · may_ — four words, four obligations'],
  ['21.3', 'write an acceptance criterion with a number and a method in it', '_measured by_ · _to within_ · _on three consecutive_'],
  ['21.4', 'say what is out of scope, inside the specification', 'the exclusion clause, written by the author and not the lawyer'],
  ['21.5', 'find the requirement in somebody else\'s specification that cannot be failed', '_(22.7, raised)_ — three lines in eight, every time'],
  ['21.6', 'write the one-page specification with its acceptance criteria', 'requirements, levels, criteria, exclusions'],
  ['21.7', '**Review & Mediate:** mediate between a specification and the person who has to build to it', 'Reading Part 7 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 22 · Proposals**', { bold: true, color: C.navy }));
out.push(fn([
  ['22.1', 'state the problem in figures before you propose anything', '_(22.3 and 10.1, now as the opening move)_'],
  ['22.2', 'propose one option and name the two you rejected', 'the rejected options, with the reason for each'],
  ['22.3', 'cost it — including the cost of doing nothing', 'the counterfactual cost, which nobody writes'],
  ['22.4', 'say what would make the proposal fail', '_(7.3, applied to your own proposal)_'],
  ['22.5', 'ask for a decision by a date, from a named person', '_(19.4, raised from a request to a proposal)_'],
  ['22.6', 'write the one-page proposal', 'problem, option, rejected options, cost, failure mode, the ask'],
  ['22.7', '**Review & Mediate:** mediate between a proposal and a committee that will not read it', 'Reading Part 3 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 23 · The Long Read**', { bold: true, color: C.navy }));
out.push(fn([
  ['23.1', 'write a first paragraph that makes the second one necessary', 'the opening that creates an obligation'],
  ['23.2', 'build a paragraph that turns in its middle', 'the turn, and the sentence that carries it'],
  ['23.3', 'keep cohesion across five paragraphs, not inside them', 'reference chains · _this_ · _such_ · the repeated noun'],
  ['23.4', 'place the one figure the piece is really about', 'position as emphasis _(5.1 and 5.3)_'],
  ['23.5', 'write a last line that was earned', 'the earned ending, and the four that are not'],
  ['23.6', 'write the 500-word piece', 'five paragraphs · one turn · one figure · an earned last line'],
  ['23.7', '**Review & Mediate:** explain to a writer why a reader stopped on page one', 'Reading Part 4 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 24 · Opening the Letters**', { bold: true, color: C.navy }));
out.push(fn([
  ['24.1', 'read the letter you sealed two years ago and report it with the right verb', '**the B1 24.6 letter, opened** · _(23.2 and 23.5)_'],
  ['24.2', 'say what you had forgotten, and what the forgetting cost', 'the one line the letter was written to carry'],
  ['24.3', 'write the _cannot yet_ list at B2', '_(24.4, raised)_ — a date and a place on every item'],
  ['24.4', 'set the next twelve months', '_going to · intend to · aim to_ _(24.5, at B2 stakes)_'],
  ['24.5', 'write the last prediction of the level', 'a date · a reason with a count · the half you will not know'],
  ['24.6', '**write the letter to your C1 self, and seal it**', 'no promises · no advice · today\'s figures · the forgetting'],
  ['24.7', '**Review & Mediate:** explain this level to somebody about to begin it', 'Reading Part 1 · Writing Part 2 (review) · Listening Part 4'],
]));

// ===================================================================
out.push(pb());
out.push(h2('10 · Continuity from B1 — the cast, the calendar and the open dates'));
out.push(p('B2 inherits more than any level in the series so far, because B1 was written to hand things over. Four devices and about a dozen dated promises come across, and §8 is built round two of them.'));
out.push(h3('The cast, as B1 leaves them'));
out.push(table(['Who', 'Where B1 leaves them', 'In B2'], [
  ['**Ms Huda Saleh**', 'eleventh and twelfth years; her 1 June prediction unconfirmed and the evidence against it; says 24.6 is the one page she cannot help with', 'teaches the whole level'],
  ['**Omar Darwish**', 'eleven sites, about ninety faults a month; asked a site manager the gap question in January; the maintenance contract goes to tender **in the spring**', 'Book 1 from Unit 1'],
  ['**Nour Sabbagh**', 'nineteen of twenty-two escalation calls; wrote to the department head on 19 December; has found she uses no continuous form at all', 'Book 1 from Unit 1'],
  ['**Tareq Ayoub**', 'the 06.20 that the timetable calls 06.40; eleven mornings counted; the unsigned notice and the depot clerk who would sign it', 'Book 1 from Unit 1'],
  ['**Rasha Barakat**', 'the night practice lead post discussed **by 20 January**; the record at a hundred and eighteen shifts; Wafa\'a booked for the first Thursday in February', 'Book 1 from Unit 1'],
  ['**Jad Attar**', '19 → 20; the forum answers carry names **from January**; cannot yet follow two people talking to each other', 'Book 1 from Unit 1'],
  ['**Yara Mansour**', 'the laboratory application of 22 December; the interview she is frightened of; the week-one note of 14 January, used three times', 'Book 1 from Unit 1'],
  ['**Mazen Hariri**', 'the distributor meeting on **20 January**; nine drafts of one answer; the specification still never sent', 'Book 1 from Unit 1 — 13.1 and 14.x are his'],
  ['**Umm Kinan (Siham Dibo)**', 'twenty-fifth and twenty-sixth years; forty minutes for two colleagues, in the diary for January', 'in and out — the outside-the-room teacher'],
  ['**Bassel Tahhan** · **Fares Kayyali** · **Lubna Sweidan**', 'the ministry order\'s January proof date; two days a month in writing until September; the Jalaa survey and Mr Rifai', 'workplace strands — **and this is where the new intake comes from**'],
], [1.7, 4.0, 2.0], { headFill: C.navy }));
out.push(p('**New cast.** Twelve finished B1 and a B2 class of eleven or twelve cannot be all twelve of them: some of these people got the post, moved city, or had the thing they were working towards decided. **The proposal is eight of the twelve going on and four new students** — and, as at B1 Unit 1, that is not a problem to hide but Unit 1\'s subject. _What We No Longer Have to Explain_ is the unit in which a class that has been together for two years meets four people who were not there, and the grammar home — ellipsis on shared ground, register as a choice, the stance adverb — is exactly the language of that room.'));
out.push(D('**Decision 3.** Which eight go on, and which four leave and why. This is the one decision in the plan that is purely the author\'s, because it is about his own people. The plan needs it before Unit 1 is written, and it is worth noting that the most useful version is the one in which **the person who leaves is the one whose thread was going best** — Rasha getting the post, or Yara getting the laboratory job — because the class then has to describe a success in somebody\'s absence.'));

out.push(h3('The open dates B1 hands to B2 — and where each one lands'));
out.push(p('This is the single most useful page in the plan. Every date below is printed in a delivered B1 book and every one of them falls inside B2\'s two years.'));
out.push(table(['Date, as printed in B1', 'What it is', 'Where it pays off in B2'], [
  ['**20 January**', 'Mazen\'s meeting with the distributor, and nine drafts of a two-sentence answer', '**13.1–13.3** — the competency answer is the same discipline at interview length'],
  ['**20 January**', 'Rasha and the ward manager on the night practice lead post', '**12.1** or wherever her thread resolves — and §10\'s decision 3 depends on it'],
  ['**January**', 'the forum answers begin to carry names; Jad\'s one-line rule', '**16.x** — criteria that can be failed, from the drafter\'s side'],
  ['**2–16 January**', 'Bassel\'s counter cover note, and the ministry proof date', '**19.x** — chairing and minuting a works meeting'],
  ['**January**', 'Umm Kinan\'s forty minutes for two colleagues, in the diary', '**1.6** — the half-page for a reader who knows the work'],
  ['**28 February**', 'the B2 enrolment deadline, printed on the certificate', 'the real-world date the class meets this plan on'],
  ['**the spring**', 'the maintenance contract for the eleven sites goes to tender', '**22.x** — Omar\'s proposal, and the eight words he asked for in writing'],
  ['**31 May**', 'Rasha\'s twelve months of the night record completed', '**10.x** — six figures in half a page'],
  ['**1 June**', 'the prediction sheet of 24.5, on the wall of Room 14', '**12.2 — read in the June lesson of Book 1.** This is why Unit 12 is where it is'],
  ['**September**', 'Fares\'s two days a month in writing, one year completed', '**14.x** — the renegotiation, which is a trade and not a compromise'],
  ['**the end of the B2 course**', 'the sealed letters of 24.6', '**24.1–24.2 — opened.** This is why Unit 24 is where it is'],
], [1.5, 3.3, 3.0], { headFill: C.navy }));
out.push(N('**Two of these are load-bearing and the rest are furniture.** The 1 June sheet and the sealed letters are promises printed in a Student\'s Book and in an End-of-Book Test; they fix Units 12 and 24 and cannot be moved. Everything else on the list is an opportunity, and a unit that cannot use its date gracefully should drop it rather than bend round it — B1 learned that the hard way with a prediction board that had to be read three times and earned its keep only because every reading did something different.'));
out.push(D('**Decision 4.** The sealed letter, a third time. B1\'s decision 4 reused the A2 envelope device once, at two-year scale, and it worked: 24.6 is the best cycle in B1 Book 2. 24.6 above proposes **opening the B1 letter and sealing a C1 one in the same cycle**, which is either the natural completion of the device or the point at which it becomes a formula. The plan\'s recommendation is to do it once more and then retire it, and to say so in the book — the C1 letter is the last one, and the cycle says so on the page.'));

// ===================================================================
out.push(pb());
out.push(h2('11 · What changes inside the writing at B2'));
[
  '**Nominalisation, and it is the level\'s signature.** B1 spent two units teaching the class to **put a person into every sentence** — 19.1 on the agentless complaint and 23.3 on the impersonal report, with the test _put a person in front of it_. B2 teaches the opposite skill and the judgement that chooses between them: when to take the person out, what that costs, and how to keep the agent **recoverable in the paragraph** when it has left the sentence. This is the single thing that makes B2 prose read as B2, and it is dangerous: taught badly it produces the committee English the B1 books spent a year dismantling. Unit 2 owns it, 2.2 names the risk, and the QA sweep in §13 checks it.',
  '**Inversion and fronting.** _Not only … but also_ · _at no point_ · _rarely_ · _it was not until … that_ · fronted objects and complements. The ancestor is B1 22.2, which taught exactly one structure — the cleft — for exactly one reason: that emphasis in the structure survives being summarised. B2 adds the other four and the same reason governs all of them.',
  '**The essay is new and it is the biggest single addition.** Nothing in A2 or B1 asks a student to state a position, take two given points, add one of their own and conclude. It is the compulsory half of the Writing paper, it is a genre and not a grammar point, and it gets Unit 3 and twelve of the twenty-four Stage 7s.',
  '**Claim strength becomes a paragraph property, not a sentence property.** B1 23.1–23.5 taught attribution, the reporting verb, the impersonal report and the three columns, all at sentence scale. At B2 a whole paragraph has to say how much it is claiming, and a summary has to **preserve** the strength of the claim it summarises (18.3) — losing a hedge in a summary is a mistranslation, not a style choice.',
  '**Register becomes a skill with three settings rather than a rule with two.** B1 wrote the nine lines for a colleague (18.4) and the page for a stranger (22.6) in different units, four units apart. B2 Unit 11 does all three readers in one cycle and asks which to send.',
  '**Phrasal verbs and collocation become productive**: 10–12 per unit, declared, never repeated — and from this level they are **tested**, because Reading Part 1 is a multiple-choice cloze in which the right answer is usually a collocation.',
  '**A word-formation set per unit, which is new.** Reading Part 3 is pure affixation and nothing in A2 or B1 teaches it. Eight to ten items per unit, declared alongside the phrasal verbs, built from the unit\'s own lexis: _recoverable · attributable · unfollowable · inadmissible · specification · acceptance_.',
  '**Discourse markers in speech widen** — _mind you · having said that · the thing is · to be fair · granted · that said_. In dialogue only, as at B1.',
  '**What does not change:** British spelling, SYP, Damascus, no alcohol or dating, no real living public figures in dialogue, same-gender pairing available, the privacy option on every personal task, contractions in dialogue and full forms in grammar tables.',
].forEach(t => out.push(bullet(t)));
out.push(N('**One register rule retires and one arrives.** The past-perfect rule retires: it was at zero through A2, owned by B1 Unit 3, and at B2 it is ordinary. The backshift rule retires too — B1 Unit 10 taught the system and B1 Unit 23 taught the choice of verb on top of it. What arrives in their place is the **recoverable-agent rule**, and it is the first B2 register rule: in any cycle that teaches nominalisation, every nominalised sentence must have its agent named somewhere in the same paragraph. It is checkable, it is the difference between B2 prose and committee prose, and it is check 11 in §13.'));

// ===================================================================
out.push(h2('12 · Toolchain, file naming and tracks'));
[
  '**A new tree, `proactive-english-b2-sy/`**, with its own `pipeline/` and `out/`. `lib.js` is copied **byte-for-byte** and verified by checksum against both the A2 and the B1 copies — all three are `60c3ce12…` — so a B2 page renders identically to an A2 page.',
  '**`bound.js` needs no change at all.** It already reads `PE_LEVEL` for the title page and `PE_BOOK` for which units to bind, where the mid-test goes and what the unit list says. The B1 copy drops into the B2 tree and binds all four B2 volumes unmodified, which is the first evidence that the B1 extension was the right shape.',
  '**File naming follows B1\'s ruling:** `PE-B2-BK1-SY_Unit01_StudentsBook.docx`, with `BK` for the book. The collision the B1 plan had to solve — Series Bible §4\'s `B1` meaning Book 1 — does not recur, because `BK` is now the convention.',
  '**Tracks: fifteen per unit, `NN.1`–`NN.15`**, exactly as B1 — twelve for cycles x.1 to x.6 (a dialogue and a pronunciation track each), `NN.13` the x.7 dialogue, `NN.14` the x.7 pronunciation track and `NN.15` the unit-check listening. The count holds even though B2 First\'s Listening paper has thirty items against Preliminary\'s twenty-four, because the extra items are inside one task and not inside another track.',
  '**`build.sh` is the B1 script with four path substitutions and `PE_LEVEL=B2`.** One known gap carries over and is worth fixing in Phase 0: `build.sh bound` writes **docx only** and does not convert the bound volumes to PDF, so the two bound files have to be converted by hand before they can be checked.',
  '**The QA scripts carry over** with the register sweep amended: the past-perfect check is retired, the recoverable-agent check is added, and the policy and Americanism sweeps keep the `\\b` word boundaries that B1 had to add after _accommodating_ was flagged for _dating_ and _forgotten_ for _gotten_.',
  '**No appendices and no teacher\'s notes**, as at A2 and B1.',
].forEach(t => out.push(bullet(t)));

// ===================================================================
out.push(h2('13 · QA — what is checked on every B2 unit'));
out.push(p('The B1 sixteen-point list, with four retirements and six additions. The retirements matter as much as the additions: a check that cannot fail any more is a check that hides the ones that can.'));
out.push(table(['#', 'Check'], [
  ['1', 'Per-cycle stage and minute profile identical to the locked arrays; x.7 at 91'],
  ['2', 'Fifteen tracks, numbered uniquely; every referenced track has a printed script at its point of use'],
  ['3', 'Exactly six `**Practise:**` lines per unit, one per Language box in x.1–x.6, none in x.7'],
  ['4', 'Exactly ten Note boxes in the Answer Key, counted **in the source** and not in the PDF'],
  ['5', 'Matching tasks: both sides counted, every answer present exactly once, the extras wrong for a reason'],
  ['6', 'Multiple choice: every distractor wrong for a traceable reason, and **no half-correct distractor**'],
  ['7', 'Answer letters spread: never three of one letter in five, never two adjacent identical answers in a cloze'],
  ['8', 'Unit-check listening items answerable from their own script, read alone with the rest of the page covered'],
  ['9', 'Numbers reconcile across cycles and into the key — prices, times, dates, durations, counts'],
  ['10', 'Continuity grepped against the cast table: surnames, ages, jobs, premises, vehicles — and any **new** name grepped against the whole tree before it is used'],
  ['**11**', '**The recoverable-agent rule:** in any cycle teaching nominalisation, every nominalised sentence has its agent named somewhere in the same paragraph'],
  ['**12**', '**Inversion correct after a negative adverbial**, and only there — from Unit 5'],
  ['**13**', '**Claim strength preserved** in every summary task — the hedge in the source is in the summary'],
  ['**14**', '**The essay\'s four parts present** in every Writing Part 1 sample: position, conceded point, own point, conclusion'],
  ['**15**', '**The word-formation set declared** for the unit, eight to ten, built from the unit\'s own lexis and not repeated'],
  ['**16**', '**The phrasal-verb set declared**, ten to twelve, not repeated from an earlier unit or an earlier level'],
  ['**17**', 'Every B2 First part met: Reading 1, 3 and 4 four times each, Reading 2, 5, 6 and 7 three times, each Writing genre three times, each Listening part six times'],
  ['**18**', 'Page budget: SB 41–43 (Book 1) / 42–45 (Book 2), AK 32–34 / 33–36 — measured per page, with the blank-page-versus-ruled-block distinction applied'],
  ['~~—~~', '_Retired: the past-perfect sweep (ordinary from B1 U3) · the backshift check (ordinary from B1 U10) · the relative-clause comma check (ordinary from B1 U11) · the conditional-consistency check (ordinary from B1 U8)_'],
], [0.7, 7], { headFill: C.navy }));

// ===================================================================
out.push(h2('14 · Production phases'));
out.push(table(['Phase', 'What is delivered', 'Turns'], [
  ['0', 'Series Bible v3.0 (B2 added); this plan; the tree and pipeline fork; **Unit 1 Student\'s Book and Answer Key in full**, proving the page budget and the register', '1–2'],
  ['1', 'Book 1 Units 2–6 — which includes the two early Speaking cycles — then the **Mid-Book Test** and its key', '2'],
  ['2', 'Book 1 Units 7–12, the **End-of-Book Test** and key, both bound volumes', '2'],
  ['3', 'Book 2 Units 13–18, then the **Mid-Book Test** and key', '2'],
  ['4', 'Book 2 Units 19–24, the **End-of-Book Test** and key, both bound volumes', '2'],
  ['5', 'Level QA pass across all 24 units, Series Bible v3.1, the one-click page for the level', '1'],
], [0.7, 6.4, 0.9], { headFill: C.navy }));
out.push(p('**The per-unit loop is the one proved over forty-eight units at two levels** and it does not change: write the unit to the Unit 1 skeleton → build → QA sweep → fix → read the per-page spread and trim to the band → write the key → build → sweep → cast and continuity grep → commit the pair and push. One unit is one block of work, and the thing that makes it one block rather than two is that the key is written from the finished Student\'s Book and never in parallel with it.'));
out.push(N('**Phase 0 exists to settle two numbers this plan asserts and cannot prove.** The page budget — 41–43 pages at the new word counts, where B1 ran 38–40 at its own — and the register, which is the real risk: B2 prose with nominalisation and inversion in it, still readable by a class that finished B1 in June. One unit settles both. If either is wrong it is one unit\'s rework rather than six, and that is exactly how B1 Unit 1 earned its place in the schedule.'));

// ===================================================================
out.push(h2('15 · The seven decisions that are the author\'s'));
out.push(table(['#', 'Decision', 'Recommendation', 'Needed by'], [
  ['1', 'Two books of twelve — now constrained by the certificate printed in B1 24.7', '**Two of twelve.** A 3 × 8 rebinding costs an erratum in a delivered book as well as two extra tests', 'start of Phase 0'],
  ['2', 'Cambridge B2 First as the anchor, or Business Vantage, or exam-light', '**B2 First** — the cast is working people but the series has anchored on the general exam twice', 'start of Phase 0'],
  ['3', 'Which eight of the twelve go on, and which four leave', '**Eight on, four new** — and the most useful version is the one where the person who leaves is the one whose thread was going best', 'before Unit 1'],
  ['4', 'The sealed letter, a third time: open the B1 letter and seal a C1 one, or retire the device', '**Once more, and say on the page that it is the last one**', 'Phase 4 — but 24.6\'s shape depends on it'],
  ['5', 'Where the essay goes: early (Unit 3) or after the register work (Unit 11)', '**Unit 3.** It is the compulsory paper; everything else can be practised while it is being drilled', 'start of Phase 0'],
  ['6', 'A declared **word-formation set** per unit, as the phrasal verbs are, or lexis in passing', '**Declared** — Reading Part 3 is pure affixation and nothing below B2 teaches it', 'start of Phase 0'],
  ['7', '`bound.js` — the B1 parameterisation, still unsigned after two levels', '**Sign it off.** A third level drops into it unmodified, which is the case made', 'Phase 0'],
], [0.5, 3.1, 3.3, 1.1], { headFill: C.navy }));
out.push(sp());
out.push(box('What happens next, on a yes', [
  'Phase 0 begins with **Unit 1 in full** — Student\'s Book and Answer Key — for the two reasons in §14: the page budget and the register. Unit 1 is also the unit that has to carry Decision 3, because _What We No Longer Have to Explain_ is a lesson about who is in the room, and it cannot be written until the author has said who that is.',
  'The Series Bible is updated first, in the same turn, so that the locked decisions for B2 are written down before any unit is written against them — and so that the two corrections the B1 build made to the B1 plan (the end tests are 12 pages, not 10–11; the page bands are SB 35–38 and 38–40, AK 22–30 and 29–31) are carried into the Bible rather than left in a handover.',
  '**And one thing is already written and waiting.** Twelve sealed letters, dated January, with their writers\' names on the outside and the number of pages inside — to be opened at the end of this course, in 24.1, by people who will not believe what they wrote.',
], C.lorange, C.orange));

L.build(out, process.argv[2], 'Proactive English · B2 · Syria Edition · Production plan and curriculum blueprint');
