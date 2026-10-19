// Proactive English · C1 · Syria Edition — production plan and curriculum blueprint
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, table, bullet, C } = L;
const out = [];
const N = (t) => box('Note', [t], C.lyellow, C.orange);
const D = (t) => box('Decision for the author', [t], C.lorange, C.orange);
const T = (t) => box('Decision taken', [t], C.lteal, C.teal);
const fn = (rows) => table(['Cycle', 'Function', 'Language'], rows, [0.8, 3.2, 3.4]);

out.push(h1('Proactive English · C1 · Syria Edition'));
out.push(h2('Production plan and curriculum blueprint'));
out.push(p('_Version 1.0 · 19 October 2026 · Author: Mo (Mohamad Khorbatli) · prepared against Series Bible v1.2 and the finished A2, B1 and B2 books — six volumes, ninety-six units, six hundred and seventy-two cycles, twelve tests_', { color: '7F7F7F' }));
out.push(p('_Every decision in §15 is **taken**. Two of them were delegated by the author in one sentence — the cross-level lexis rule and the composition of the class — and both were decided on pedagogical grounds, which are set out against each._', { color: '7F7F7F' }));
out.push(box('What this document is', [
  'A2, B1 and B2 Syria are finished: **six bound volumes, ninety-six units, six hundred and seventy-two cycles, twelve tests, about four thousand seven hundred pages.** This is the plan for the level that completes the Syria Edition.',
  '**C1 is different from every earlier level in one respect that governs the whole plan: nothing in print promises it.** B2\'s shape was fixed before a word of it was written, by a certificate printed inside B1 Unit 24.7 — _the B2 course runs over two academic years: 252 hours_ — and by the entry assumption printed beside it. **There is no equivalent line for C1.** The B2 Book 2 handover records the position exactly: _C1 is not planned and nothing in the delivered books promises it._ **So the frame of this level is genuinely open, and this plan sets it rather than reporting it.**',
  '**But three documents in print hand over into C1, and they are unusually concrete.** The **sealed letters of B2 24.6**, each with a date on the envelope set by its writer and a keeper who is not a friend. The **_cannot yet_ lists of B2 24.3**, which the B2 key instructs the teacher to collect and hand to the next teacher on the first morning. And the **readiness pages of B2 24.4**, which name, per student, the two or three B2 moves that are automatic and therefore ready to be built on. ⚠ **These are the real inputs to Unit 1, and §10 is built on them.**',
  '⚠ **And B2 24.4 states the shape of the step, in a student\'s words, in a delivered Student\'s Book: _it is not from simple to complicated, it is from visible to invisible._** Everything in ninety-six units was taught in a form where the reader can see the method working — which is why it could be learned, and why it is not the finished article. **This plan starts from that sentence and not from a syllabus**, and §11 turns it into a rule that can be checked on a page.',
], C.lblue, C.navy));

// ===================================================================
out.push(pb());
out.push(h2('1 · What is locked, and carries into C1 unchanged'));
out.push(p('From Series Bible §2, and from three levels that have now implemented it. None of this is re-opened at C1.'));
[
  '**The cycle.** 7 cycles to a unit; cycle x.7 is always Review & Mediate. 13 stages, 90 minutes, Lesson A Speaking (45) + Lesson B Writing (45): 1 Get ready · 2 Listen and read (+ Language box) · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read (+ Writer\'s box) · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · Homework.',
  '**The exact minute profile.** Cycles x.1–x.6 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 3 · 12 · 5 · 4 = 90. Cycle x.7 = 6 · 12 · 7 · 5 · 9 · 6 · 7 · 9 · 5 · 10 · 15 = **91**, eleven stages, no 6R. The 91 is the author\'s own arithmetic, reproduced deliberately at every level, and it is reproduced here.',
  '**Components.** A Student\'s Book with every audio script printed **at the point of use** — never an appendix — and an Answer Key as a separate book. No teacher\'s notes. No appendices.',
  '**The Answer Key rule.** Every task gets an answer or a **full sample** — brainstorms, personalised speaking, reports, peer-review slips, free writing and homework included. The series has one deliberate exception, made at B1 24.6 and repeated at B2 24.6: a sealed letter the key refuses to sample, because the cycle exists to be unread. **C1 adds no exception and inherits none, because C1 does not ask for a sealed letter** — see §15, decision 4.',
  '**Style.** British English. SYP, "pounds" in speech. 5.30 pm in text, "half past five" in speech. Dates 3 May. Syrian names and real Syrian places. No alcohol, no party-drinking, no real living public figures in dialogue. Same-gender pairing always available; a privacy option on every personal task. ⚠ The policy sweep has word boundaries and flags **_dating_**, so a clause is *given a date* and never *dated*.',
  '**The toolchain.** Node + docx-js, one script per artefact, one shared `lib.js`. `lib.js` is **frozen**: the C1 tree holds a byte-for-byte copy of the A2 original, verified by checksum against all three earlier trees — `60c3ce12e272976ad6229b9350653b6e` in four places.',
  '**Delivery.** .docx per unit, bound volumes per book, and a bundle zip each turn carrying the bound book so far, the combined key, every unit\'s files, the handover and the pipeline.',
  '**Six `**Practise:**` lines per unit**, one in the Language box of each of x.1 to x.6 and none in x.7.',
  '**Ten Note boxes per Answer Key**, counted in the source and not in the PDF.',
  '**The declared sets, printed in the unit\'s own closing box.** A phrasal-verb set and a word-formation set per unit, declared on the page and checked for repeats. ⚠ **C1 adds a third declared line and changes the repeat rule** — see §15, decision 1.',
].forEach(t => out.push(bullet(t)));
out.push(N('**One thing that is locked and is about to be tested harder than it has ever been: the 90-minute cycle.** At A2 a cycle held a dialogue of a dozen turns and a model of eighty words. At C1 it has to hold a dialogue of twenty-odd turns and a model of five to six hundred words inside the same seven minutes of Stage 5. ⚠ **That is the single arithmetic risk in this plan**, and it is why Phase 0 is one complete unit and not one cycle: **if the reading load does not fit seven minutes, the fix is a shorter model and not a longer stage**, because the minute profile is the one thing in the series that has never moved.'));

// ===================================================================
out.push(h2('2 · Level architecture'));
out.push(p('**C1 is two books of twelve units**, as every level in the series is — and at C1, for the first time, the arithmetic argues for it rather than merely permitting it. 24 units × 7 cycles = **168 cycles = 252 contact hours**.'));
out.push(table(['', 'A2 (built)', 'B1 (built)', 'B2 (built)', 'C1 (planned)'], [
  ['Books', '2', '2', '2', '2'],
  ['Units', '24 (12 + 12)', '24 (12 + 12)', '24 (12 + 12)', '24 (12 + 12)'],
  ['Cycles', '168', '168', '168', '168'],
  ['Contact hours', '252', '252', '252', '252'],
  ['Cumulative hours at the end', '252', '504', '756', '**1,008**'],
  ['Tests', '4', '4', '4', '4'],
  ['Mid-Book Test sits after', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18', 'Unit 6 · Unit 18'],
  ['End-of-Book Test sits after', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24', 'Unit 12 · Unit 24'],
  ['Exam anchor', 'A2 Key', 'B1 Preliminary', 'B2 First', '**C1 Advanced**'],
  ['Reading parts in the anchor', '5', '6', '7', '**8**'],
], [2.2, 1.4, 1.5, 1.4, 1.5], { headFill: C.navy }));
out.push(p('**And here is the arithmetic that settles the two-books question for good.** C1 Advanced\'s Reading and Use of English paper has **eight** parts. Twenty-four units divide by eight **exactly three times**, so the rotation puts every part of the largest paper in front of a class three times with nothing left over and nothing doubled. ⚠ **At B2 the seven-part paper forced an uneven rotation** — three parts got four passes and four got three — **and the unevenness had to be justified. At C1 it does not arise.** A three-books-of-eight rebinding would give each part one pass per book and break that, and it is therefore refused on a pedagogical ground for the first time in the series rather than on an administrative one.'));
out.push(N('**1,008 cumulative hours is above the band usually quoted for C1, and the plan says so rather than rounding it down.** The figure usually given for C1 is 700–800 guided hours from zero. A learner who finishes this level by this method will have had about **a thousand**, and the reason is in the method and not in the level: these books spend hours on evidence, on rewriting and on reading one\'s own old work, and they do not spend them on coverage. ⚠ **The dividend is a narrower productive range used with more control, which is exactly what C1 Advanced rewards and exactly what a coverage-driven course arrives at C1 without.**'));

out.push(h3('Hours, and the calendar'));
out.push(p('Four hours a week over about thirty-one teaching weeks. One book of twelve units is **126 hours** — one academic year. So **C1 Book 1 runs September to June and C1 Book 2 the September after.** ⚠ **One printed date falls inside those two years and the plan has to land it**: the sealed letters of B2 24.6 carry dates set by their own writers, and the sample printed in the delivered book says _to be opened on 1 December in two years_. **That lands in the December of C1 Book 2** — see §10 and Unit 15.'));

// ===================================================================
out.push(pb());
out.push(h2('3 · The four tests'));
out.push(p('The mark architecture is the author\'s own and the totals are carried over from three levels without change: 60 marks at the Mid-Book Test, 100 at the End-of-Book. ⚠ **The split inside the 100 changes, and it changes because the examination\'s own weighting changes — not because anybody preferred it.**'));
out.push(table(['Test', 'Where', 'Marks', 'Split', 'Pages (projected)'], [
  ['Mid-Book Test', 'after Unit 6', '60', 'Reading and Use of English 24 · Writing 12 · Listening 12 · **Speaking 12**', '11–12 + key 9–10'],
  ['End-of-Book Test', 'after Unit 12', '100', 'Reading and Use of English **40** · Writing **20** · Listening **20** · Speaking **20**', '16–17 + key 12–13'],
  ['Mid-Book Test', 'after Unit 18', '60', 'as above', '11–12 + key 9–10'],
  ['End-of-Book Test', 'after Unit 24', '100', 'as Book 1', '16–17 + key 12–13'],
], [1.5, 1.2, 0.7, 3.6, 1.6], { headFill: C.navy }));
out.push(N('⚠ **The weighting was read before it was written, which is the standing instruction in the Series Bible and the one the B2 plan got wrong once.** Cambridge marks C1 Advanced by averaging **five** equally weighted components — Reading, Writing, Listening, Speaking and Use of English — and Reading and Use of English are taken as one paper. **That is 40 · 20 · 20 · 20**, not B2 First\'s 40 · 25 · 25 · 10. **So the single largest architectural change this level makes is that Speaking doubles, from 10 marks to 20**, and it is forced rather than chosen. The Mid-Book Test keeps the same proportions at 60: **24 · 12 · 12 · 12.**'));
[
  '**Speaking at 20 marks changes what a test looks like on the page**, and this is the one place where a mark change costs production rather than arithmetic. A Speaking paper worth a fifth of the whole cannot be four prompts and a rubric: it needs **four parts with their own materials** — an interview frame, **three described photographs per candidate** of which the candidate chooses two, a written prompt sheet with five options for the collaborative task, and five discussion questions with the examiner\'s follow-ups printed. That is why the End-of-Book Test is projected at 16–17 pages where B2\'s measured 14.',
  '**The Reading paper grows by one part and gains a new kind of item.** C1 Advanced\'s eight parts are multiple-choice cloze (8) · open cloze (8) · word formation (8) · key word transformations (6) · multiple choice (6) · **cross-text multiple matching (4)** · gapped text (6) · multiple matching (10). ⚠ **Part 6 is the genuinely new one: four short texts by four writers, and the question is where they agree and disagree.** Nothing in A2, B1 or B2 asks a candidate to compare opinions **across** texts, and it gets a teaching unit of its own — Unit 8 — as well as its three rotation passes.',
  '**The Writing paper\'s timing and its genres both move.** C1 Advanced allows **90 minutes** for two tasks of **220–260 words**, where B2 First allowed 80 for two of 140–190. So the C1 papers allow **70 minutes** in the Mid-Book Test and **90 minutes** in the End-of-Book Test. ⚠ **And the second task\'s menu changes: the article goes and the proposal arrives.** Part 2 at C1 is a letter or email, a **proposal**, a report or a review. **The proposal is a genre this series has never taught**, and it is not a report with a recommendation on the end: it is written to somebody who has not yet agreed that there is a problem.',
  '**Listening is unchanged in shape and changes in difficulty only**: four parts, thirty questions, each recording played twice. Part 1 is **three** short extracts with two questions each (6), Part 2 is sentence completion (8), Part 3 is a long interview (6), Part 4 is multiple matching over five monologues with **two tasks of five** (10). ⚠ **Part 4\'s double task is the item type most C1 candidates lose marks on and it is not a listening problem — it is a bookkeeping problem**, and the unit check teaches the bookkeeping.',
].forEach(t => out.push(bullet(t)));
out.push(N('**The page figures above are projections and the series\' record with projections is poor, in one direction.** B1 projected end tests at 10–11 pages and built 12. B2 projected 14–15 and built 14 and 15. ⚠ **The reason is always the same: a test page carries more boxed material and less prose than a unit page, so it holds more per page than a projection based on unit density expects.** **The first C1 test built settles the band and this table is then amended to the measured figure** — which is what happened at B2, in §16 of its plan, and is recorded there rather than quietly corrected.'));

// ===================================================================
out.push(pb());
out.push(h2('4 · Exam anchor: Cambridge C1 Advanced'));
out.push(p('A2 anchored on A2 Key, B1 on B1 Preliminary, B2 on B2 First, each practised inside cycle x.7 and the unit check. C1 anchors on **C1 Advanced**. The rotation below is the whole paper, and it is **exactly even for the first time in the series**: eight reading parts, twenty-four units, three passes each.'));
out.push(table(['Paper', 'Part', 'Where it is practised'], [
  ['Reading and Use of English', '1 · multiple-choice cloze (8)', 'x.7 Stage 5, Units 3, 10, 17'],
  ['', '2 · open cloze (8)', 'x.7 Stage 5, Units 4, 13, 24'],
  ['', '3 · word formation (8)', 'x.7 Stage 5, Units 1, 9, 18'],
  ['', '4 · key word transformations (6 × 2 marks)', 'x.7 Stage 5, Units 2, 11, 19'],
  ['', '5 · long text, 4-option multiple choice (6 × 2)', 'x.7 Stage 5, Units 5, 12, 20'],
  ['', '6 · **cross-text multiple matching, four texts (4 × 2)**', '**taught in Unit 8**; x.7 Stage 5, Units 8, 14, 21'],
  ['', '7 · gapped text, paragraph insertion (6 × 2)', 'x.7 Stage 5, Units 6, 15, 22'],
  ['', '8 · multiple matching (10)', 'x.7 Stage 5, Units 7, 16, 23'],
  ['Writing', '1 · the essay from a reading input, **two of three points**, 220–260 words, compulsory', 'x.7 Stage 7, **every odd-numbered unit**'],
  ['', '2 · letter or email', 'x.7 Stage 7, Units 2, 10, 18'],
  ['', '2 · **proposal**', 'x.7 Stage 7, Units 4, 12, 20'],
  ['', '2 · report', 'x.7 Stage 7, Units 6, 14, 22'],
  ['', '2 · review', 'x.7 Stage 7, Units 8, 16, 24'],
  ['Listening', '1 · three extracts, two questions each (6)', 'unit check, Units 1, 5, 9, 13, 17, 21'],
  ['', '2 · sentence completion (8)', 'unit check, Units 2, 6, 10, 14, 18, 22'],
  ['', '3 · long interview, multiple choice (6)', 'unit check, Units 3, 7, 11, 15, 19, 23'],
  ['', '4 · multiple matching, **two tasks of five** (10)', 'unit check, Units 4, 8, 12, 16, 20, 24'],
  ['Speaking', '1 · interview (2 min)', 'every x.1 Stage 1'],
  ['', '2 · the long turn — **three photographs, of which the candidate chooses two**, one minute, then 30 seconds on the partner\'s', '**taught in Unit 3**; practised in Stage 4R from Unit 3 on'],
  ['', '3 · collaborative task — a written prompt, five options, two minutes, **then a separate one-minute decision**', '**taught in Unit 4**; practised in x.7 Stage 3 from Unit 4 on'],
  ['', '4 · discussion (**5 min**, up from four at B2)', 'x.7 Stage 4R, the mediation stage, every unit'],
], [1.5, 3.3, 3.2], { headFill: C.navy }));
out.push(p('**The essay is practised twelve times** — once in every odd-numbered unit — and each of the four Part 2 genres three times. **That is unchanged from B2 in its shape and changed in two of its four genres: the article is gone and the proposal has arrived.**'));
out.push(N('⚠ **The C1 essay is not the B2 essay made longer, and this is the commonest way a good B2 writer fails C1 Writing Part 1.** At B2 the task gave three notes and said _use all the notes_. **At C1 the task gives a short input text, three bullet points, and says to discuss _two_ of the three.** So the first decision a C1 candidate makes is **which point to leave out**, and the mark is partly for that choice. **A candidate who covers all three has not followed the instruction and loses on content**; a candidate who covers two without saying why those two has left the examiner to guess. **Unit 3 is where the choosing is taught** — it is also where Speaking Part 2 asks the candidate to choose two photographs from three, **and the two tasks are the same skill, which is why they are in the same unit.**'));
out.push(N('**Speaking Part 2 needs three described photographs per candidate and this pipeline draws none.** Three levels have solved it the same way — the images are **described** in words inside a bordered box — and the solution carries unchanged, at three per set instead of two. If the author wants real images later they drop into the same box with no other change.'));
out.push(T('**Decision 2 · taken: C1 Advanced**, on the rotation above. **IELTS at band 7.0–8.0 was the real alternative and it was refused as the anchor and admitted as a transfer.** The anchor stays Cambridge for the same reason it has stayed Cambridge at three levels: the series\' x.7 cycle and unit check have been built against a Cambridge paper for ninety-six units, and an anchor change at the last level would make the first ninety-six look arbitrary. ⚠ **But a real C1 class in Damascus contains somebody whose deadline is an IELTS score for a registration file, and pretending otherwise is a worse fault than a mixed anchor.** **So Book 2 carries one declared cycle — 21.5 — that maps the four C1 Advanced skills onto the IELTS task types**, and it is a cycle and not a unit, because the English is the same English and only the bookkeeping differs. **Nisrine Ajouz is the student whose deadline it is** (§10), and she is in the room so that the cycle has somebody to be for.'));

// ===================================================================
out.push(pb());
out.push(h2('5 · Word counts, text lengths and the page budget'));
out.push(p('Series Bible §4 fixes word counts per book and steps them up between books. ⚠ **This table is built by the rule the B2 build produced and the B2 plan recorded: step up only the figures the examination does not fix, and establish which those are before projecting any of them.** The column headed _fixed by the exam?_ is therefore the first column to read.'));
out.push(table(['', 'B2 Bk1', 'B2 Bk2', 'Fixed by the exam?', 'C1 Book 1', 'C1 Book 2'], [
  ['Guided writing (Stage 6)', '≥80', '≥100', 'no', '**≥120**', '**≥140**'],
  ['Free writing (Stage 7)', '180–220', '180–220', '**yes — 220–260**', '**260–300**', '**260–300**'],
  ['Model text (Stage 5)', '350–480', '350–480', 'no', '**480–620**', '**projected 480–620**'],
  ['Main dialogue, turns', '16–20', '16–20', 'no', '**18–22**', '**projected 18–22**'],
  ['Tracks per unit', '15', '15', 'locked', '**15**', '**15**'],
  ['SB pages per unit', '46–48', '45–47', 'no', '**45–50 (measured, Units 1–9)**', '**projected 45–49**'],
  ['AK pages per unit', '29–34', '29–34', 'no', '**33–37 (measured)**', '**projected 33–37**'],
], [2.0, 0.8, 0.8, 1.3, 1.1, 1.1], { headFill: C.navy }));
out.push(N('**Exactly one row in that table is settled by the examination, and it is the row that matters most.** C1 Advanced asks for **220–260 words** in each of its two writing parts, so Book 1 trains to **260–300** — a margin above the paper rather than a seat on it, which is the discipline that set B1\'s band against Preliminary\'s 100 and B2\'s against First\'s 140–190. ⚠ **And because the exam fixes it at 220–260 in both years, Book 2 does not step it up.** **That is the B2 lesson applied in advance instead of discovered afterwards**: at B2, four of six bands were projected as a step up and all four came back identical, because the paper does not ask for more in the second year of a course. **Here, only the free-writing row is exam-fixed, and it is the only row this plan refuses to move between books.**'));
out.push(N('⚠ **Amended at Unit 1, and the projection was wrong in the direction this series is always wrong in.** **The Student\'s Book was projected at 50–54 pages and came in at 47; the Answer Key was projected at 32–37 and came in at 35.** **The Answer Key projection held and the Student\'s Book projection did not, and the reason is now understood.** **A C1 model is longer in words and is not longer on the page**, because a `box()` of prose flows across a page break and a `dlg()` of short turns does not. **Four of the six models in Unit 1 run between 488 and 519 words against B2\'s 350–480, and the unit came out one page shorter than its B2 equivalent.** ⚠ **The rule to carry into Book 2 and to any level after this one: page count follows the number of unsplittable blocks and not the number of words.** **The bands are now SB 46–49 and AK 33–37, measured.**'));
out.push(N('⚠ **The model-text row was the riskiest number in this plan and Phase 0 has tested it.** **It held: 488, 497, 519, 491, 499 and 492 words, every one inside 480–620.** Stage 5 is **seven minutes** and the minute profile does not move. A 480–620-word model with three comprehension questions is about 70–90 words a minute of reading-with-purpose, which is C1-plausible and is at the top of what seven minutes will carry. **If Unit 1 shows it does not fit, the model shortens — the stage does not lengthen.** The same applies to the dialogue: **`dlg()` rows are `cantSplit`, so an oversized exchange jumps a whole page**, and at B2 one added exchange cost about two and a half pages. **At C1 the turns are longer, so the per-exchange cost is higher and the 18–22 band is a ceiling and not a target.**'));
out.push(N('⚠ **Amended a third time at Unit 9, and this is the last amendment the band will need.** **Measured: SB 47, 45, 45, 46, 46, 45, 45, 49, 50 and AK 35, 33, 35, 34, 33, 33, 33, 33.** **The Student\'s Book band is therefore 45–50.** ⚠ **The reason the last two units sit at the top is structural and not editorial**, and it was found by trying to trim Unit 9 three times and failing. **Units 8 and 9 carry the two longest examination parts in the paper** — **Reading Part 6, which prints four texts, and Reading Part 3, which prints a text of its own alongside a three-extract listening** — **and the unit\'s closing _Vocabulary of this unit_ box is `cantSplit`, so on a 49-page unit it takes a fiftieth page whatever is cut above it.** **Removing a whole block from a cycle would buy the page and would cost the cycle something real**, so the band has been widened instead. **Every figure that drives length — dialogue turns, model words, 4R reports, writer\'s boxes — is inside its own band in both units.**'));
out.push(N('⚠ **Amended again at Unit 4, and the Unit 1 band was set on one unit, which is not a band.** **Measured: SB 47, 45, 45, 46 and AK 35, 33, 35, 34.** **The Student\'s Book band is therefore 45–49 and not 46–49**, and the table and the QA list have been corrected rather than the units padded. ⚠ **And one projection in the note above is now known to be wrong.** **It said that a C1 dialogue exchange would cost more than B2\'s two and a half pages because the turns are longer.** **Measured across Units 2 and 4 it costs about **0.15** of a page**: a long turn still fits within one page, so the `cantSplit` jump that made the B2 figure does not fire. **The dialogue is therefore not the page-growth lever at this level; Language-box bullets are, and they buy about one page and then stop mattering.** **The 18–22 turn band stands on its own grounds and not on a page cost it does not have.**'));
out.push(N('**One rendering fault found at Unit 4 and worth recording, because it will recur.** ⚠ **A `lines(7)` writing block that spills a single rule onto the next page produces a page containing one grey line and nothing else**, which the thin-page sweep flags and which is a real defect. **Trimming the box above it does not fix it** — **the box is `cantSplit`, so shortening it moves the rules up a line at a time and the seventh still falls off.** **The fix is to lengthen the box past the point where it fits**, so that the whole block moves to the next page and the rules go with it. **Unit 4\'s Writing Part 2 box gained one bullet for that reason and the unit gained a page.**'));
out.push(p('**The three page-count levers, learned across three levels and all three still true.** A unit short of its band grows fastest through its **dialogues** — inside the declared turn band — because `dlg` rows cannot split. A unit over its band trims fastest through its **Language-box bullets**, which are not band-enforced and can be removed without touching a word-count figure. And a thin page must be **read before it is trimmed**: a page with two to five counted lines is **either** a genuinely blank page **or** a correct ruled `lines(N)` writing block, which renders as one rule and is invisible to any text sweep.'));

out.push(h3('What C1 amounts to when it is finished'));
out.push(table(['', 'Count'], [
  ['Units', '24'],
  ['Cycles / language functions', '168'],
  ['Audio scripts', '360 (15 per unit)'],
  ['Unit artefacts', '48 (24 Student\'s Book + 24 Answer Key)'],
  ['Test artefacts', '8 (4 papers + 4 keys)'],
  ['Bound volumes', '4 (2 Student\'s Books + 2 Answer Keys)'],
  ['Plus', 'Series Bible v1.3, this plan, a handover per book'],
  ['**Total pages, approximately**', '**2,100**'],
], [3.2, 2.4], { headFill: C.navy }));
out.push(p('For comparison: B2 as built is about **1,990** pages, B1 about **1,560** and A2 about **1,260**. ⚠ **The Syria Edition at the end of C1 is about 6,900 pages across four levels, sixteen bound volumes and sixteen tests** — and it is the first complete A2-to-C1 course in the series.'));

// ===================================================================
out.push(pb());
out.push(h2('6 · Peer-review checklists — the C1 progression'));
out.push(p('Series Bible §5 fixes a four-band progression across each level\'s 24 units. A2 ended at _English, free_. B1 ended at _the reviewer names the criterion_. B2 ended at _reviewer and writer agree a single criterion in advance and the slip carries a mark out of five against it_ — which is what an examiner does. **C1 starts from there and goes somewhere an examiner cannot.**'));
out.push(table(['C1 Units 1–6', 'C1 Units 7–12', 'C1 Units 13–18', 'C1 Units 19–24'], [
  ['The reviewer **declares which reader they are being** — the insurer, the referee, the parent, the desk editor — and marks only what that reader would notice, and nothing else',
   '+ the reviewer names **what is absent**: the thing a reader of that kind would have expected and did not find. Not an error — an omission',
   '+ the slip is **unsigned**, and the writer answers it in one line that must either concede or refuse **with a reason**. The exchange is the task, not the verdict',
   '+ the reviewer **writes the one sentence they would put in the writer\'s place**, and the writer says whether it is theirs'],
  ['Feedback: English, free, one declared reader', 'English, one declared reader, the absence named', 'English, unsigned, and answered in one line', 'English, and one supplied sentence the writer accepts or rejects'],
], [1, 1, 1, 1]));
out.push(p('**The arc of the level is from awarding a mark to supplying a sentence.** B2 ended with the student applying a descriptor, which is what an examiner does. ⚠ **C1 ends with the student writing the line they would have written and the writer deciding whether it is theirs** — which is what a colleague, a sub-editor and a co-author do, and which no examiner ever does. **It is also the only peer-review band in the series that can be refused**, and the refusal is the point: a writer who cannot tell a supplied sentence from their own has no voice to protect, and a writer who refuses every supplied sentence is not reading them.'));
out.push(N('**Band 1 is the one that changes the level, and it is deliberately the first.** _Declare which reader you are being._ ⚠ **Ninety-six units of this series have reviewed writing as a classmate.** At C1 the question is never _is this good English_ — it is **_does this work on this reader_** — and a reviewer who has not said which reader they are cannot answer it. Expect the first two units to produce slips that declare a reader and then review as a classmate anyway; **that gap is the teaching, and the Answer Key names it in 1.7 and again in 2.7.**'));
out.push(N('**Band 3 removes the signature, and the reason is not anonymity.** It is that an unsigned slip **cannot be discounted by who wrote it** — and in a class of ten where two people have been in the room for four years, the temptation to weight a slip by its author is overwhelming. ⚠ **The one-line answer is the real work**: _conceded, and the sentence is now third_ or _refused: the reader I wrote for already knows the figure._ **A one-line answer that neither concedes nor refuses is the commonest fault and the key marks it as a fault.**'));

// ===================================================================
out.push(pb());
out.push(h2('7 · Book 1 — Units 1–12'));
out.push(p('Each unit\'s grammar home is the thing it owns; the exam column names the C1 Advanced parts its x.7 cycle practises. The last column is the B2 unit it raises — and **every unit has one**, because for the first time in the series the level beneath is finished, measured and in the same house style.'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from B2'], [
  ['1', 'The Sentence Nobody Notices', 'the reason inside the news sentence · the absolute construction · participle clauses that carry a claim', 'R3 · W1 · L1', '**B2 U20 and U24.4 — the printed C1 pair, now taught**'],
  ['2', 'One Claim, Three Readers, One Draft', 'the hedge that survives a change of reader · _it_-extraposition · nominal _that_- and _wh_-clauses', 'R4 · W2 letter · L2', 'B2 U11 — three drafts become one'],
  ['3', 'Choosing What Not to Say', 'the comparison whose criterion is not stated · **Speaking Part 2 at C1** · the stated omission', 'R1 · W1 · L3', 'B2 U4 — two photographs become three, of which you take two'],
  ['4', 'Deciding Out Loud, Then Deciding', 'obligation against recommendation · _would be minded to_ · **Speaking Part 3 at C1**', 'R2 · W2 proposal · L4', 'B2 U6 and U21'],
  ['5', 'Where the Emphasis Has to Live', 'four marked orders and the one decision between them · end-weight at paragraph scale', 'R5 · W1 · L1', 'B2 U5 — the four clefts, now a choice'],
  ['6', 'Two Hundred Words That Cannot Be Cut', 'ellipsis and substitution across sentences · premodification against postmodification', 'R7 · W2 report · L2', 'B2 U18 — summary becomes compression'],
  ['—', '**MID-BOOK TEST · Units 1–6 · 60 marks · all four Speaking parts**', '', '', ''],
  ['7', 'The Opinion That Has to Survive a Hostile Reader', 'the concession that forecloses · _even allowing for_ · _it does not follow that_', 'R8 · W1 · L3', 'B2 U9 — concession becomes defence'],
  ['8', 'Four People Who Disagree', 'attribution at paragraph scale · where writers differ against where they appear to · **Reading Part 6**', 'R6 · W2 review · L4', 'B2 U17 and U23'],
  ['9', 'The Claim You Can Defend to a Referee', 'hedging as calibration · _consistent with_ · _we are unable to exclude_', 'R3 · W1 · L1', 'B2 U4 — nine degrees, now written'],
  ['10', 'The Sentence That Cannot Be Rewritten', 'the verb that fixes the register · lexical choice as structure', 'R1 · W2 letter · L2', 'B2 U2 — nominalisation, now reversible at will'],
  ['11', 'Saying the Same Thing in Another Language\'s Shape', 'the untranslatable hedge · calque against equivalent · mediation proper', 'R4 · W1 · L3', 'B2 U11 and every x.7 mediation'],
  ['12', 'What the Year Made Automatic', 'the whole of Book 1 on one page · testing your own invisibility', 'R5 · W2 proposal · L4', '**B2 U24.3 — the _cannot yet_ lists are re-read**'],
  ['—', '**END-OF-BOOK TEST · Units 1–12 · 100 marks · all eight Reading parts**', '', '', ''],
], [0.6, 2.4, 3.0, 1.0, 2.3], { headFill: C.navy }));
out.push(N('**Units 1 and 12 are a pair and they are the level\'s frame.** 1.2 reads the eleven _cannot yet_ lists that B2 24.3 told the teacher to collect — **nine of them written by people who are not in the room** — and the class writes its own. **12.2 reads them again, nine months later, and crosses off what has gone.** ⚠ **That is the only way a course can show a student their own invisible learning**, and it is the thing B2 24.6 said nobody can feel from the inside. **Neither unit can be moved**, and the lists have to be collected in September or Unit 12 has nothing to read.'));

out.push(pb());
out.push(h2('8 · Book 2 — Units 13–24'));
out.push(table(['Unit', 'Topic', 'Grammar home', 'Exam', 'Raises from B2'], [
  ['13', 'The Panel That Has Read Your Writing', 'answering about a document you wrote months ago · the defensible concession under questioning', 'R2 · W1 · L1', 'B2 U13 — four sentences, now cross-examined'],
  ['14', 'Negotiating When Both Sides Are Right', 'the trade stated as a principle · _in return for which_ · the alternative that is not a threat', 'R6 · W2 report · L2', 'B2 U14'],
  ['15', 'The Letter Whose Date Has Come', 'reading your own old prose as evidence · _I wrote ___ and I no longer ____', 'R7 · W1 · L3', '**B2 U24.6 — the envelopes whose dates fall now**'],
  ['16', 'Judging Work You Could Not Do Yourself', 'the verdict with its competence declared · _within the limits of what I can assess_', 'R8 · W2 review · L4', 'B2 U16 — criteria, now with the judge\'s own limit named'],
  ['17', 'Chairing People Who Outrank You', 'the chair\'s imperative without the chair\'s authority · _I shall take that as agreed unless_', 'R1 · W1 · L1', 'B2 U19'],
  ['18', 'Writing to a System You Do Not Belong To', 'the register of an institution read from outside · the request that fits a form with no field for it', 'R3 · W2 letter · L2', 'B2 U21 and U22'],
  ['—', '**MID-BOOK TEST · Units 13–18 · 60 marks**', '', '', ''],
  ['19', 'The Document That Will Be Read in Court', 'the sentence that cannot be read two ways · the definition that closes · dates and limits', 'R4 · W1 · L3', 'B2 U21 — specification, now adversarial'],
  ['20', 'Refusing Without Giving Grounds for Appeal', 'the refusal whose reason is also its limit · _we are not able to_ against _we are not willing to_', 'R5 · W2 proposal · L4', 'B2 U20'],
  ['21', 'The Same English, Another Examination', 'the transfer: C1 Advanced tasks against IELTS task types · **21.5 is the mapping cycle**', 'R6 · W1 · L1', 'new — and §4 says why'],
  ['22', 'The Proposal Nobody Asked For', 'writing to a reader who has not agreed there is a problem · the cost of doing nothing, costed', 'R7 · W2 report · L2', 'B2 U22 — the proposal, now unsolicited'],
  ['23', 'Five Thousand Words', 'architecture at length · the turn that is not announced · cohesion across twelve paragraphs', 'R8 · W1 · L3', 'B2 U23 — five hundred become five thousand'],
  ['24', 'Handing It On', 'teaching the method to somebody who has not had it · the whole system, named by its owner', 'R2 · W2 review · L4', '**B2 U24.5 — six words of topics become a course**'],
  ['—', '**END-OF-BOOK TEST · Units 13–24 · 100 marks**', '', '', ''],
], [0.6, 2.4, 3.0, 1.0, 2.3], { headFill: C.navy }));
out.push(N('⚠ **Unit 15 is where a printed date lands, and it is the only printed date C1 inherits.** The B2 sealed letters of 24.6 carry **dates set by their own writers**, not by the course; the sample printed in the delivered Student\'s Book says _to be opened on 1 December in two years_, and the keeper is somebody who is not a friend. **So 15.x cannot open everybody\'s letter and must not pretend to**: the cycle is written for the students **whose date has come**, with a declared task for those whose has not and those who have none. ⚠ **That is the honest shape and it is also the better lesson** — B2 24.7 ended on the finding that a sealed letter is written for a reader who has to be invented, and a room in which only some of the letters are openable proves it harder than a room in which all of them are.'));
out.push(N('**Unit 24 closes the series and it does not close it with a letter.** See §15, decision 4. **The last unit asks each student to teach one move of the method to somebody who has never had it, and to report what the person did not understand** — because the only proof that a method has become invisible is that its owner can make it visible again on purpose.'));

// ===================================================================
out.push(pb());
out.push(h2('9 · The 168 functions'));
out.push(p('Seven per unit, one per cycle. x.7 is Review & Mediate in every unit and is written in full. This is the list the units are written from; nothing outside it is taught, and nothing in it is taught twice. A reference in brackets names the B2 cycle the function raises, so that a writer can read the earlier cycle before writing the later one.'));

out.push(h3('Book 1'));
out.push(p('**Unit 1 · The Sentence Nobody Notices**', { bold: true, color: C.navy }));
out.push(fn([
  ['1.1', 'say what a year of work changed, in sentences whose reason is inside them', 'the B2 pair joined _(20.1 and 24.4)_: _we cannot print by 2 April, the roller having been out since the sixth of March_'],
  ['1.2', 'read somebody else\'s _cannot yet_ list and say what it tells you about the writer', 'the nine lists from B2 24.3 · reading a limitation as data and not as a confession'],
  ['1.3', 'put a reason inside a news sentence in a form that cannot be argued with', 'the absolute construction · a fact with a date beats a reason with a feeling'],
  ['1.4', 'hang a claim on a participle clause and keep the main clause for the news', '_having been refused twice, we_ … · and the three places the participle must not go'],
  ['1.5', 'say which of your own B2 habits is automatic, and what the evidence is', 'the readiness-page question asked aloud _(24.4)_: _is the B2 version automatic for me?_'],
  ['1.6', 'write the half-page whose method cannot be seen', 'stripping the metatext: every sentence about the writing comes out'],
  ['1.7', '**Review & Mediate:** tell a B2 student why a correct sentence of theirs is still visible', 'recycling Unit 1 · Reading Part 3 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 2 · One Claim, Three Readers, One Draft**', { bold: true, color: C.navy }));
out.push(fn([
  ['2.1', 'state one claim and name the three readers it has to survive', 'the claim written once _(raises 11.1, where it was written three times)_'],
  ['2.2', 'find the hedge that holds for all three readers, and the one that holds for one', '_appears to_ · _is likely to_ · _we have not established that_ — and which travels'],
  ['2.3', 'move the weight of a sentence so that the claim arrives last', '_it_-extraposition: _it is not yet clear whether_ … · end-focus as a decision'],
  ['2.4', 'put a whole clause where a noun would go', 'nominal _that_- and _wh_-clauses: _what the committee agreed was that_ …'],
  ['2.5', 'say what one draft costs that three drafts did not, and decide to pay it', 'the price of a single draft, named in the draft'],
  ['2.6', 'write the single letter three readers will all act on', 'one document · three actions · no addressee named twice'],
  ['2.7', '**Review & Mediate:** a letter and the reader who was copied in, not written to', 'Reading Part 4 · Writing Part 2 (letter or email) · Listening Part 2'],
]));
out.push(p('**Unit 3 · Choosing What Not to Say**', { bold: true, color: C.navy }));
out.push(fn([
  ['3.1', 'choose two of three things to speak about, and say nothing about the third', 'the declared omission against the silent one'],
  ['3.2', 'compare two things on a criterion you never state', 'the comparison whose ground the listener has to supply — and does'],
  ['3.3', 'take the long turn: three photographs, two chosen, one minute', '**Speaking Part 2 at C1** _(raises 4.3, where there were two and both were used)_'],
  ['3.4', 'answer in thirty seconds about your partner\'s pair, without summarising it', 'the one-sentence answer that adds a reason the partner did not give'],
  ['3.5', 'choose two of three bullet points, and justify the choice in paragraph one', '**the C1 essay\'s first decision** · _of the three, the first and the third are the ones that_ …'],
  ['3.6', 'write the essay that leaves a point out and says so once', '220–260 words · two points discussed · the omission stated and not apologised for'],
  ['3.7', '**Review & Mediate:** a reader who wants the point you left out', 'Reading Part 1 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 4 · Deciding Out Loud, Then Deciding**', { bold: true, color: C.navy }));
out.push(fn([
  ['4.1', 'discuss five options for two minutes without deciding anything', '**Speaking Part 3 at C1**, first half · keeping a discussion open on purpose'],
  ['4.2', 'decide in one minute, and name what you discarded and why', '**Speaking Part 3 at C1**, second half _(raises 6.x)_'],
  ['4.3', 'tell an obligation from a recommendation in somebody else\'s prose', '_shall · must · should · is to · would be minded to_ — four levels and the test'],
  ['4.4', 'write a recommendation that cannot be read as an instruction', 'and the opposite: an instruction nobody can read as advice'],
  ['4.5', 'write an opinion a third party may rely on, with its limit inside it', '_on the information available on 3 May_ · the limit as part of the claim'],
  ['4.6', 'write a proposal to a reader who has not agreed there is a problem', '**the proposal, new at C1** · the problem established before the remedy is named'],
  ['4.7', '**Review & Mediate:** the engineer\'s opinion and the insurer who reads it', 'Reading Part 2 · Writing Part 2 (proposal) · Listening Part 4'],
]));
out.push(p('**Unit 5 · Where the Emphasis Has to Live**', { bold: true, color: C.navy }));
out.push(fn([
  ['5.1', 'say one fact four ways and name what each version makes important', 'the four marked orders side by side _(raises 5.x, where there were four clefts and no choice)_'],
  ['5.2', 'front what the sentence is about and leave the new thing at the end', 'fronted objects and complements · end-weight'],
  ['5.3', 'hold a long subject back until the reader is ready for it', 'extraposition · the subject that is four lines long and must not be'],
  ['5.4', 'choose between a cleft and an inversion for the same emphasis, and say why', 'the decision, not the inventory'],
  ['5.5', 'keep emphasis across three sentences without using the device twice', 'emphasis as a paragraph property'],
  ['5.6', 'write the paragraph whose emphasis survives being read aloud by an opponent', 'the test: hand it to somebody who disagrees and listen'],
  ['5.7', '**Review & Mediate:** a paragraph whose emphasis was lost in somebody\'s summary', 'Reading Part 5 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 6 · Two Hundred Words That Cannot Be Cut**', { bold: true, color: C.navy }));
out.push(fn([
  ['6.1', 'cut a page by half without losing a figure', 'the cut that removes words and not facts'],
  ['6.2', 'leave out and substitute across sentences', '_the latter · such · did so · the same · one_ — and the ambiguity each one risks'],
  ['6.3', 'pack information in front of the noun, and know when to put it behind', 'premodification against postmodification · the three-adjective limit and why'],
  ['6.4', 'say in one line what a cut removed, to the person who asked for it', 'the cut declared · _the costings are out; the two figures that matter are in paragraph 2_'],
  ['6.5', 'compress four paragraphs into one without flattening the claim strengths', '**claim strength preserved under compression** _(raises 18.3)_'],
  ['6.6', 'write the report that is already at its minimum length', 'and the sentence at the top that says so, checkably'],
  ['6.7', '**Review & Mediate:** the author of a long report and the reader who has eleven of them', 'Reading Part 7 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 7 · The Opinion That Has to Survive a Hostile Reader**', { bold: true, color: C.navy }));
out.push(fn([
  ['7.1', 'read your own paragraph as somebody looking for the gap in it', 'the adversarial read, done on yourself and in writing'],
  ['7.2', 'concede the strongest objection in a form that closes it', '_even allowing for_ … · the concession that does not reopen _(raises 9.x)_'],
  ['7.3', 'mark the step your own argument does not take', '_it does not follow that_ · _nothing in this establishes_'],
  ['7.4', 'state the limit of your evidence before anybody asks for it', 'the pre-emptive limit · and why it is not a weakness'],
  ['7.5', 'answer an objection you have not yet been given, without inventing one', 'the real objection against the straw one — and the four-second test'],
  ['7.6', 'write the page whose first hostile reader finds nothing to take', '260–300 words · every claim with its limit in the same paragraph'],
  ['7.7', '**Review & Mediate:** the author and somebody who disagrees in good faith', 'Reading Part 8 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 8 · Four People Who Disagree**', { bold: true, color: C.navy }));
out.push(fn([
  ['8.1', 'read four short texts and say which two are actually in dispute', '**Reading Part 6 at C1** · the dispute against the difference of subject'],
  ['8.2', 'tell a difference of claim from a difference of ground', 'two writers who agree on the finding and disagree about what it shows'],
  ['8.3', 'attribute a position across a paragraph without a reporting verb in every sentence', '_on this view_ · _the same objection_ · attribution carried by one verb and three pronouns'],
  ['8.4', 'say where a writer\'s reason, rather than their conclusion, differs from another\'s', 'the harder comparison, and the one Part 6 asks for'],
  ['8.5', 'write the sentence that holds two writers\' positions in one place', '_whereas X treats it as a question of cost, for Y the cost is not in dispute_'],
  ['8.6', 'write the review that places a work among three others', '**Writing Part 2 (review)** · the verdict with its field named'],
  ['8.7', '**Review & Mediate:** four writers and a reader who wants to know who is right', 'Reading Part 6 · Writing Part 2 (review) · Listening Part 4'],
]));
out.push(p('**Unit 9 · The Claim You Can Defend to a Referee**', { bold: true, color: C.navy }));
out.push(fn([
  ['9.1', 'put a number on how sure you are, in writing, in nine steps', 'the nine degrees, written rather than spoken _(raises 4.1)_'],
  ['9.2', 'say what your evidence is consistent with, and what it excludes', '_consistent with_ · _we are unable to exclude_ · _does not support_'],
  ['9.3', 'write the limitation that strengthens the claim it limits', 'the limitation paragraph, and where it goes'],
  ['9.4', 'answer an objection without conceding the finding', 'the response letter: concede the method, hold the result'],
  ['9.5', 'rewrite your own overclaim, and say what it cost you to see it', 'the overclaim found by reading your own abstract last'],
  ['9.6', 'write the response-to-referees letter', '260–300 words · point by point · one concession and one refusal, both reasoned'],
  ['9.7', '**Review & Mediate:** the author, the referee and the editor who has to decide', 'Reading Part 3 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 10 · The Sentence That Cannot Be Rewritten**', { bold: true, color: C.navy }));
out.push(fn([
  ['10.1', 'find the verb that fixes a sentence\'s register, and change only it', '_said · stated · claimed · conceded · maintained_ — one word, three registers'],
  ['10.2', 'say which of two words a desk editor will change, and write the one they will not', 'the predictable edit, predicted'],
  ['10.3', 'nominalise and un-nominalise at will, and choose on the reader', '**the B2 signature, now reversible** _(raises 2.1 and 2.6)_'],
  ['10.4', 'write a sentence that cannot be shortened without losing a fact', 'the un-cuttable sentence, and how to prove it'],
  ['10.5', 'read your own sentence as a translator, and find the part that will not go', 'the untranslatable, located before it is needed'],
  ['10.6', 'write the eighty words that survive a desk', 'the wire paragraph: forty minutes, eighty words, one editor'],
  ['10.7', '**Review & Mediate:** the writer and the sub-editor who rewrote them', 'Reading Part 1 · Writing Part 2 (letter or email) · Listening Part 2'],
]));
out.push(p('**Unit 11 · Saying the Same Thing in Another Language\'s Shape**', { bold: true, color: C.navy }));
out.push(fn([
  ['11.1', 'render a document for a reader in another system, and name what has no equivalent', 'mediation proper, and the first thing it produces is a list of absences'],
  ['11.2', 'tell a calque from an equivalent in your own writing', 'the phrase that is English word by word and English nowhere else'],
  ['11.3', 'carry a hedge across a language, and say when you cannot', '**the untranslatable hedge** · and the covering line that replaces it'],
  ['11.4', 'say what a translation added that the original did not have', 'the addition nobody intended: certainty, warmth, or a threat'],
  ['11.5', 'mediate a document whose form, not whose content, is the problem', 'the form with no field for the thing being asked'],
  ['11.6', 'write the covering note that makes an untranslatable document usable', '260–300 words · three absences named · one instruction to the reader'],
  ['11.7', '**Review & Mediate:** a document, its translation, and the reader who has only the translation', 'Reading Part 4 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 12 · What the Year Made Automatic**', { bold: true, color: C.navy }));
out.push(fn([
  ['12.1', 'say which Book 1 move you now make without noticing, and give the evidence', 'the evidence is always an occasion with a date, never a feeling'],
  ['12.2', 'read your own _cannot yet_ list from Unit 1 and cross off what has gone', '**the Unit 1 lists, nine months on** _(pays off 1.2)_'],
  ['12.3', 'name the item that has not moved, and say whether it is about English at all', 'the half of every list that belongs to an organisation and not to a language'],
  ['12.4', 'test your own invisibility: give a page to a reader who does not know the method', 'the only available test, and what counts as passing it'],
  ['12.5', 'write the readiness page for the second book', 'three C1 moves, each with its harder version, and the automatic question against each'],
  ['12.6', 'write the proposal for the thing you will do with this English', '**Writing Part 2 (proposal)** · to a reader who has not agreed you should'],
  ['12.7', '**Review & Mediate:** the student in September and the student in June', 'Reading Part 5 · Writing Part 2 (proposal) · Listening Part 4'],
]));

out.push(pb());
out.push(h3('Book 2'));
out.push(p('**Unit 13 · The Panel That Has Read Your Writing**', { bold: true, color: C.navy }));
out.push(fn([
  ['13.1', 'answer a question about a document you wrote eight months ago', 'the honest _I would not write that now_, and the two things that must follow it'],
  ['13.2', 'hold a concession under questioning without the concession growing', 'the limit on a concession, stated once and then held'],
  ['13.3', 'say what you would not have written, and what you would still write', 'the two lists, out loud, in the same forty seconds'],
  ['13.4', 'answer a question whose premise is wrong, without correcting it rudely', '_if the question is whether_ … _then_ · the reframe that does not sound like a dodge'],
  ['13.5', 'be asked about a figure you cannot remember, and say so usefully', '_I can get it to you by Thursday; what I remember is the order of magnitude_'],
  ['13.6', 'write the two-page note a panel will have read before you arrive', '260–300 words · written for a reader who will quote it back at you'],
  ['13.7', '**Review & Mediate:** a candidate\'s own note and the panel\'s reading of it', 'Reading Part 2 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 14 · Negotiating When Both Sides Are Right**', { bold: true, color: C.navy }));
out.push(fn([
  ['14.1', 'tell a difference of interest from a difference of fact', 'only one of the two is negotiable, and saying which is half the work'],
  ['14.2', 'state a trade as a principle rather than as a price', '_in return for which_ · the principle both sides can apply next time'],
  ['14.3', 'name your alternative without it sounding like a threat', 'the alternative in the subordinate clause, and never in the main one'],
  ['14.4', 'concede the thing the other side cannot move, before they defend it', 'the pre-emptive concession and what it buys'],
  ['14.5', 'say what you will not trade, and why it is not negotiable', 'the limit declared in advance, which is the only honest form of it'],
  ['14.6', 'write the report of a negotiation in which both parties were reasonable', '**Writing Part 2 (report)** · neither side made the villain'],
  ['14.7', '**Review & Mediate:** two reasonable accounts of the same meeting', 'Reading Part 6 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 15 · The Letter Whose Date Has Come**', { bold: true, color: C.navy }));
out.push(fn([
  ['15.1', 'read your own prose from two years ago as evidence rather than as embarrassment', '**the B2 envelopes whose dates fall now** _(pays off B2 24.6)_'],
  ['15.2', 'say what you wrote and what you no longer believe, in one sentence each', '_I wrote ___ and I no longer ___ , because ____'],
  ['15.3', 'read a document of your own whose date has not come, and leave it sealed', 'the declared task for a student whose envelope is not due — and the harder one'],
  ['15.4', 'date your own change: when did it happen, and what is the evidence', 'the change with an occasion attached, not a feeling'],
  ['15.5', 'write to the person who kept the letter and tell them what was in it', 'the note to the keeper, who has carried something unread for two years'],
  ['15.6', 'write the page that will be evidence to you in five years', '260–300 words · and no instruction to the future reader anywhere in it'],
  ['15.7', '**Review & Mediate:** the person who sealed it, the keeper, and the person who opened it', 'Reading Part 7 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 16 · Judging Work You Could Not Do Yourself**', { bold: true, color: C.navy }));
out.push(fn([
  ['16.1', 'declare the limit of your own competence inside a verdict', '_within the limits of what I am able to assess_ — and where that clause goes'],
  ['16.2', 'judge against criteria you did not write, and say which one you distrust', 'the criterion marked as doubted, and still applied'],
  ['16.3', 'separate what you cannot judge from what nobody could', 'two different sentences, and only one of them is about you'],
  ['16.4', 'give a verdict that can be appealed, and say on what ground', 'the appealable verdict _(raises 16.x)_ · the ground named in advance'],
  ['16.5', 'say what would change your verdict, specifically', '_this would be a different assessment if_ … · one testable condition'],
  ['16.6', 'write the review of work in a field that is not yours', '**Writing Part 2 (review)** · the field named and the limit declared'],
  ['16.7', '**Review & Mediate:** a judge, the judged, and a reader who shares neither field', 'Reading Part 8 · Writing Part 2 (review) · Listening Part 4'],
]));
out.push(p('**Unit 17 · Chairing People Who Outrank You**', { bold: true, color: C.navy }));
out.push(fn([
  ['17.1', 'open a meeting you do not have the authority to open', 'the chair\'s sentence without the chair\'s rank behind it'],
  ['17.2', 'stop somebody senior without stopping them', '_may I hold that until item four_ · the deferral that is kept'],
  ['17.3', 'take agreement that nobody quite gave', '_I shall take that as agreed unless somebody tells me otherwise_'],
  ['17.4', 'minute a disagreement so that both parties recognise themselves', 'the minute\'s tense conventions, and the two-sentence form'],
  ['17.5', 'put an action against a name in the room, out loud', 'the action column, spoken before it is written'],
  ['17.6', 'write the minute that is circulated an hour later', '260–300 words · decisions, actions, and nothing that was only said'],
  ['17.7', '**Review & Mediate:** a minute and the person who says they did not agree to it', 'Reading Part 1 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 18 · Writing to a System You Do Not Belong To**', { bold: true, color: C.navy }));
out.push(fn([
  ['18.1', 'read an institution\'s register from outside it and name three of its habits', 'reading a system\'s prose as a system and not as bad writing'],
  ['18.2', 'write the request that fits a form with no field for it', 'the covering line that does the work the form will not'],
  ['18.3', 'say what a rule is for, in order to ask for an exception to it', 'the exception argued from the rule\'s own purpose'],
  ['18.4', 'write to the person who has to apply a rule they did not make', 'the ally inside the system, addressed as one'],
  ['18.5', 'put your own case in the system\'s words without adopting its claims', 'borrowing a register while refusing a premise'],
  ['18.6', 'write the letter into an institution that has no category for you', '**Writing Part 2 (letter or email)** · 260–300 words'],
  ['18.7', '**Review & Mediate:** the applicant, the clerk, and the rule', 'Reading Part 3 · Writing Part 2 (letter or email) · Listening Part 2'],
]));
out.push(p('**Unit 19 · The Document That Will Be Read in Court**', { bold: true, color: C.navy }));
out.push(fn([
  ['19.1', 'write a sentence that cannot be read two ways, and prove it', 'the four-reading test applied to your own clause'],
  ['19.2', 'define a term so that the definition closes', 'the definition with no _etc._ and no _such as_'],
  ['19.3', 'put the date, the limit and the source into one sentence without a list', 'three facts, one sentence, no comma splice'],
  ['19.4', 'say what you did not examine, in the document itself', 'the scope paragraph, and why it protects the finding'],
  ['19.5', 'write what you observed separately from what you concluded', 'two sections, and the sentence that joins them'],
  ['19.6', 'write the statement that will be read by somebody paid to find its gap', '260–300 words · observation, scope, conclusion, limit'],
  ['19.7', '**Review & Mediate:** a statement, the party it helps, and the party it does not', 'Reading Part 4 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 20 · Refusing Without Giving Grounds for Appeal**', { bold: true, color: C.navy }));
out.push(fn([
  ['20.1', 'tell _we are not able to_ from _we are not willing to_, and choose', 'the two refusals and the different arguments each one invites'],
  ['20.2', 'give a reason that is also a limit', 'the reason that cannot be met by a better application'],
  ['20.3', 'refuse once and not twice', 'the second reason that weakens the first _(raises 20.x)_'],
  ['20.4', 'offer the alternative you can actually deliver, and price it', 'the alternative with a date and a figure, or no alternative at all'],
  ['20.5', 'say what would make the answer different, without inviting a reapplication', 'the condition stated as a fact about the world'],
  ['20.6', 'write the proposal that is a refusal of its reader\'s proposal', '**Writing Part 2 (proposal)** · and the first paragraph does not say no'],
  ['20.7', '**Review & Mediate:** a refusal, its reader, and the person who has to defend it', 'Reading Part 5 · Writing Part 2 (proposal) · Listening Part 4'],
]));
out.push(p('**Unit 21 · The Same English, Another Examination**', { bold: true, color: C.navy }));
out.push(fn([
  ['21.1', 'say what an examination is measuring, as distinct from what it asks', 'the construct against the task · and why a score is not a skill'],
  ['21.2', 'answer the same question for two different mark schemes', 'one answer, two rubrics, and the one place they genuinely differ'],
  ['21.3', 'read a band descriptor and say which sentence of yours earns it', 'the descriptor applied to evidence, not to an impression'],
  ['21.4', 'say what your English is, without naming a level', 'the description that survives having no certificate attached'],
  ['21.5', '**map the four C1 Advanced skills onto the IELTS task types**', '**the transfer cycle** · what moves, what does not, and the two habits that cost marks'],
  ['21.6', 'write the page that explains your own English to an admissions reader', '260–300 words · and no level named until the last line'],
  ['21.7', '**Review & Mediate:** a score, a document, and a reader who trusts the wrong one', 'Reading Part 6 · Writing Part 1 · Listening Part 1'],
]));
out.push(p('**Unit 22 · The Proposal Nobody Asked For**', { bold: true, color: C.navy }));
out.push(fn([
  ['22.1', 'establish that there is a problem, to somebody who has not noticed one', 'the first paragraph of an unsolicited proposal, which is not about the remedy'],
  ['22.2', 'cost the thing that is already happening', 'the cost of doing nothing, with its arithmetic shown'],
  ['22.3', 'name what you are asking for in one sentence, early', 'the ask, before the reader has to look for it'],
  ['22.4', 'say what you are not asking for, and mean it', 'the declared exclusion that makes the ask credible'],
  ['22.5', 'answer the question _why you_, without a claim about yourself', 'the answer made of occasions and figures'],
  ['22.6', 'write the unsolicited proposal', '**Writing Part 2 (report)** in the exam sense · the proposal in the real one'],
  ['22.7', '**Review & Mediate:** a proposal, the budget holder, and the person whose work it changes', 'Reading Part 7 · Writing Part 2 (report) · Listening Part 2'],
]));
out.push(p('**Unit 23 · Five Thousand Words**', { bold: true, color: C.navy }));
out.push(fn([
  ['23.1', 'plan twelve paragraphs on one line each, and find the two that do the same job', 'the plan that is readable as a plan'],
  ['23.2', 'make a turn in an argument without announcing it', 'the unannounced turn _(raises 23.x, where it was announced)_'],
  ['23.3', 'carry one thread across eight paragraphs without repeating its name', 'cohesion by substitution at length'],
  ['23.4', 'write the paragraph that only exists to let the next one work', 'the load-bearing paragraph that says nothing new'],
  ['23.5', 'cut a thousand words and name what the reader loses', 'the cut that is declared, and the one that is not noticed'],
  ['23.6', 'write the long piece\'s first and last paragraphs, and nothing between', '260–300 words across the two · and the piece has to be derivable from them'],
  ['23.7', '**Review & Mediate:** a long piece, a reader with twenty minutes, and a reader with two', 'Reading Part 8 · Writing Part 1 · Listening Part 3'],
]));
out.push(p('**Unit 24 · Handing It On**', { bold: true, color: C.navy }));
out.push(fn([
  ['24.1', 'teach one move of this method to somebody who has never had it', 'making an invisible habit visible again, on purpose'],
  ['24.2', 'report what the person you taught did not understand', 'the misunderstanding as the measure of the explanation'],
  ['24.3', 'say what four years of this changed that is not about English', 'the finding that does not belong to a language teacher'],
  ['24.4', 'name the one thing you would take out of this course', 'the criticism made specific, with a replacement attached'],
  ['24.5', 'say what you cannot yet do, for the last time, in testable terms', 'the _cannot yet_ list with no next teacher to hand it to'],
  ['24.6', 'write the page that goes to whoever teaches this next', '260–300 words · to a teacher, about a method, from a student'],
  ['24.7', '**Review & Mediate:** the student who arrived at A2 and the one who leaves at C1', 'Reading Part 2 · Writing Part 2 (review) · Listening Part 4'],
]));
out.push(N('**Nothing in the 168 is a sealed letter, and that is deliberate.** See §15, decision 4. ⚠ **24.6 writes a page to the next teacher instead** — which is the one document in the series that has a real reader, a real date and no need for a keeper.'));

// ===================================================================
out.push(pb());
out.push(h2('10 · Continuity from B2 — what is inherited, who is in the room, and who is not'));
out.push(p('**C1 inherits less than B2 did and what it inherits is sharper.** B2 came in with eight of twelve students, a dozen dated promises and a certificate that fixed its shape. ⚠ **C1 comes in with two students, three documents and one date.** That is a harder start and it is also the honest one, because B2 printed the reason in its own Answer Key.'));
out.push(h3('The hard constraint, and it is printed'));
out.push(box('What a delivered book already says about this level', [
  '⚠ **B2 `ak24`, the "After Unit 24" box: _two of these twelve will take a C1 course and the rest will not._** **That sentence is in a bound Answer Key. C1 cannot reuse the B2 class and this plan does not try.**',
  '**B2 24.7, in the mediation report: _there will be no course next time and no teacher to say now write the next one._** ⚠ **So C1 may not be announced retrospectively as the thing B2 was pointing at** — and the first cycle of Unit 1 has to deal with the fact that most of the room was told there would be nothing after B2 and believed it.',
  '**B2 24.3, in the Answer Key: the teacher collects the eleven _cannot yet_ lists and hands them to the next teacher on the first morning.** ⚠ **Ms Huda is the next teacher**, so she arrives at C1 Unit 1 holding eleven lists of which **nine belong to people who are not in the room.** **That is the material of 1.2 and it is the best thing C1 inherits.**',
  '**B2 24.4, in the Student\'s Book: Dima Khoury\'s readiness page, dated 8 November**, naming the Unit 20 and Unit 23 moves as automatic and the Unit 14 move as not. ⚠ **She therefore arrives at C1 with a written statement of what she is ready for, and it is accurate, and the plan may not contradict it.**',
  '**B2 24.6: twelve sealed letters, each with a date set by its writer and a keeper who is not a friend.** The printed sample says _to be opened on 1 December in two years_. ⚠ **C1 may not open them in Book 1 and must not promise to**; Unit 15 is written for the students whose date has come.',
], C.lorange, C.orange));

out.push(h3('Who carries on — and the pedagogical case for these two'));
out.push(table(['Carries on (2)', 'What is in print about them', 'Why these two'], [
  ['**Dima Khoury**, 30 · sub-editor on a pharmacists\' trade bulletin, Damascus',
   'The strongest analyst in the B2 room. Hers is the four-second adverb test (B2 2.1) and the remark that pricing an explanation is the only argument that works on a committee. **Her readiness page is printed in 24.4**: the Unit 20 and Unit 23 moves automatic, the Unit 14 move not. She once chose the word _claimed_ about a group of employees and cannot remember choosing it.',
   '**Her trade is invisibility.** A sub-editor\'s work is right exactly when nobody can see it, which is this level\'s thesis as a job description. **And she has already done the C1 reasoning in print** — she is the only person in the series who asked _is the B2 version automatic for me?_ of every model and answered it honestly, including the three _noes_.'],
  ['**Jad Attar**, 22 · computer engineering graduate; answers on a technical forum under his own name',
   'In the room since **B1**, a returner in all twelve units of both B2 books. About 900 words a week on the forum. **In B2 24.4 he asked the last question of the course — _is there anything to do now?_ — and was told to keep the list.**',
   '⚠ **He did not keep it, and that is why he is here.** The student who asked whether there was anything to do now is the student who did not do it, which is true of almost everybody who has ever asked that question, and **C1 1.1 opens on exactly that** with Jad saying it himself. **He is also the pole opposite Dima**: for her the method has gone invisible, for him it is still visible and effortful, and a level about invisibility needs both poles in the room or it has no argument.'],
], [1.6, 3.0, 2.4], { headFill: C.navy }));
out.push(T('**Decision 3 · taken on pedagogical grounds, as the author asked.** The question was which two of the twelve carry forward, and the answer is **Dima Khoury and Jad Attar**. ⚠ **Four other students had a stronger claim on narrative grounds and were refused**, and the refusals are the argument: **Adnan Barghouti** is the better character and his arc finished — a man who learned to put a person back into his own prose has got what he came for, and dragging him to C1 would spoil it. **Rim Shaaban** is the better professional and her material belongs to B2\'s units 16, 20, 21 and 22, which have been written. **Nour Sabbagh** is the most changed and her change is the one B2 24.6 is about, so it is already paid. **Hiba Nasser** is the only one assessed against published criteria, which is exactly why she is not here: she is a qualified teacher now, and a qualified teacher sitting a C1 course would own the room. **Dima and Jad are chosen because between them they are the level\'s thesis**, not because their stories are unfinished.'));

out.push(h3('Who arrives, and why eight rather than ten'));
out.push(p('**The class is ten: two who carry on and eight who arrive.** ⚠ **Ten rather than twelve, and the reason is arithmetic rather than sentiment.** A C1 cycle\'s turns are long — one minute for the Speaking Part 2 long turn plus thirty seconds on the partner\'s, and a five-minute Part 4 discussion — and the level\'s own mediation task is a pair reading one document as two different readers, which wants an even number with no spare. **Ten also gives every student 2.4 cycles of their own material per book instead of 2**, which matters at a level where one student\'s working life has to carry a six-hundred-word model.'));
out.push(p('**And the eight are chosen on one principle: at C1 your English is read by people who do not know it is your second language, and the cost of being noticed is professional.** Every one of them is somebody for whom a visible method is a visible failure.'));
out.push(table(['Arrives (8)', 'age', 'who they are, and what the level needs them for'], [
  ['**Dr Hazem Qabbani**', '38', 'physician at a teaching hospital in Damascus; writing up a retrospective case series. **Two papers returned with _language_ given as the reason, and he suspects it was not the language.** Units 7, 9 and 11 — the hedge as a calibration instrument, the limitation that strengthens, and the response-to-referees letter'],
  ['**Mayada Oueidat**', '34', 'court-appointed translator and interpreter, Arabic and English. ⚠ **The only person in the room whose work has failed the moment anybody notices it.** Units 2, 10 and 11 — the hedge that survives a change of language, and the covering note for what has no equivalent'],
  ['**Firas Zahreddine**', '46', 'structural engineer; signs technical opinions that go to insurers and occasionally to a court. **Has twice written an opinion with no limit in it and twice been asked a question he could not refuse.** Units 4, 7 and 19 — obligation against recommendation, the scope paragraph, and the appealable verdict'],
  ['**Ruba Tarabishi**', '29', 'doctoral candidate in agricultural economics; writing a literature review across four authors who disagree. ⚠ **Reading Part 6 is literally her working week**, which is why Unit 8 is hers. Units 6, 8 and 23'],
  ['**Mouaffak Tayara**', '52', 'headmaster of a private school in Mezzeh; writes to parents, to the ministry and to his own staff, **and has to say one thing three ways without any of the three being a different claim.** Units 2, 5 and 12'],
  ['**Hanadi Rizk**', '41', 'grants office of a regional NGO; writes proposals to donors who read two hundred of them. **The cost of doing nothing is a line on her form and she has never once filled it in honestly.** Units 4, 6, 12 and Book 2\'s Unit 22'],
  ['**Tamim Shihabi**', '26', 'files in English for a regional wire service. **Eighty words, forty minutes, and a desk editor in another country who rewrites him without explaining.** Units 1, 6 and 10 — compression, and the sentence that cannot be rewritten'],
  ['**Nisrine Ajouz**', '36', 'pharmacist. ⚠ **Took her B2 at a different school and holds the certificate**, so she is the one person who can say what this method is **not** — and she needs C1 for a registration file **with a deadline**, which makes her the only student in four levels who is here for a document. Units 3, 9, 21'],
], [1.5, 0.5, 5.0], { headFill: C.navy }));
out.push(N('**Nisrine Ajouz is the most important of the eight and the least comfortable.** ⚠ **Half of any real C1 class is there for a piece of paper, and three levels of this series have quietly pretended otherwise.** She is in the room so that the level has to answer the question honestly: her deadline is real, her B2 came from somewhere else and was taught differently, and **she is entitled to ask in 1.1 why a course that says it is about evidence spends a cycle a week on somebody\'s depot gate.** **The Answer Key gives Ms Huda no good answer to that in Unit 1, and a better one in Unit 21.**'));

out.push(h3('The teacher, and the one structural change she makes'));
out.push(T('**Decision 5 · taken: Ms Huda Saleh teaches C1, and she stops stating the finding.** ⚠ **This is the level\'s chief structural change and it is the thesis applied to the book\'s own pages.** For ninety-six units the pattern has been that a student asks and Ms Huda answers with the sentence the Language box then quotes — _which is the finding of this cycle_. **That is the visible method.** At C1 the finding is **spoken by a student in every cycle of x.1 to x.6**, and Ms Huda\'s work is to refuse: _that is a question for the room, Mr Attar._ **She says so in 1.1 — _I shall be saying less this year, and you will mind it_ — and the Answer Key tells the teacher why.** It is checkable, it is check 12 in §13, and **it is the only way a book whose subject is invisible competence can avoid being the one place the method stays visible.** ⚠ Her year is still unprinted in any delivered Student\'s Book, so **C1 may state it: this is her fifteenth year**, and Book 2 her sixteenth.'));

out.push(h3('The three documents, and where each one lands'));
out.push(table(['What B2 left in print', 'What it is', 'Where C1 uses it'], [
  ['**The eleven _cannot yet_ lists**', 'collected by the teacher under B2 24.3\'s instruction; nine belong to people who are not in the room', '**1.2 — read as data.** ⚠ The nine are the level\'s best teaching material: the newcomers find their own sentences in lists written by strangers'],
  ['**Dima Khoury\'s readiness page**', 'printed in B2 24.4, dated 8 November; two moves automatic, one not', '**1.5 — the question asked aloud of everybody.** The plan may not contradict what it says'],
  ['**The twelve sealed letters**', 'dates set by their writers; keepers who are not friends; one printed sample dated _1 December in two years_', '**15.1–15.3 — opened by those whose date has come, and only those.** Book 1 does not touch them'],
  ['**The three worked B2→C1 pairs**', 'printed in B2 24.4: the Unit 20 news-and-reason, the Unit 14 which-governs, the Unit 23 contradiction', '**1.1, 1.3 and 1.4 — taught.** They are the only C1 functions the series has already published, and Unit 1 is built from them'],
  ['**Six words of topics**', 'B2 24.5 — what Bassel told his nephew the course was', '**24.1–24.2 — the whole of the last unit.** The student teaches one move and reports what was not understood'],
], [1.9, 2.8, 2.3], { headFill: C.navy }));
out.push(N('⚠ **One housekeeping item carried from the B2 handover: `Mr Deeb` is used twice in B2 Book 2** — as a supplier in 21.7 and as the registry clerk in 24.6. **C1 does not reuse either figure in Book 1.** If Book 2\'s Unit 15 needs a keeper by name, it uses **Mr Deeb in the registry role only**, which is the role 24.6 printed, and no supplier of that name appears anywhere in this level. **Every new name in this level is grepped against all four trees before use** — the rule that caught `Mr Nasr` against `Sister Nasr` at B2 and `Sister Mardini`, `uncle Ghassan`, `Umm Nahla` and a `Wael` in B1 Unit 14 while this plan was being written.'));

// ===================================================================
out.push(pb());
out.push(h2('11 · What changes inside the writing at C1'));
out.push(p('**One sentence governs this whole section and it was written by a student in a delivered book:** _it is not from simple to complicated, it is from visible to invisible._ Everything below is that sentence made operational.'));
[
  '**The metatext goes, and it is the level\'s signature.** Open any B2 model and count the sentences about the writing: _why I am writing these down_ · _what I would change_ · _the thing all four have in common, which I did not see until they were on one sheet._ ⚠ **Those sentences are the method made visible, they are why B2 could be learned, and at C1 they come out.** A C1 model does the same work and says nothing about doing it. **This is check 11 in §13 and it is the hardest rule in the series to hold**, because the metatext is also what makes a model teachable — which is why **one cycle per book is exempt and declared**: 1.6 in Book 1, 24.1 in Book 2.',
  '**Two things in one sentence, where B2 kept them in two.** The three pairs are already printed in B2 24.4 and Unit 1 teaches all three: the **news with its reason inside it** (_we cannot print the order by 2 April, the roller having been out since the sixth of March_); **which account governs, said while reporting both**; and **the contradiction with the governing sentence first and the other inside it as a subordinate clause.** ⚠ **The grammar that does this is subordination, the absolute construction and the participle clause** — and the reason it works is not grammatical: it is that **a fact with a date cannot be argued with and a reason with a feeling can.**',
  '**Claim strength becomes an instrument rather than a manner.** B1 taught attribution; B2 taught claim strength as a paragraph property and preserving a hedge through a summary. ⚠ **C1 asks the writer to choose a point on a nine-step scale and to defend the choice** — _consistent with_ · _we are unable to exclude_ · _does not support_ — **and to write the limitation that makes the claim stronger rather than weaker.** Unit 9 owns it and a physician in the room needs it on Thursday.',
  '**Marked word order becomes a choice between four devices rather than the acquisition of one.** B2 Unit 5 taught the four clefts and fronting. ⚠ **C1 Unit 5 puts fronting, extraposition, the cleft and end-weight side by side on one fact and asks which** — and then asks the harder thing: **keep the emphasis across three sentences without using any device twice.**',
  '**Compression arrives, and it is new.** Nothing in three levels asks a student to cut a page by half and keep every figure. ⚠ **At C1 it is a genuine skill with its own grammar** — ellipsis and substitution across sentence boundaries, premodification against postmodification, and the three-adjective limit — **and Unit 6 ends on a report that is already at its minimum length with a checkable sentence at the top saying so.**',
  '**The essay changes its instruction, which is the commonest way a good B2 writer fails C1.** B2: three notes, _use all the notes_. ⚠ **C1: a short input text, three bullet points, _discuss two of the three._** **The first decision is which to leave out and the mark is partly for that choice.** Unit 3 teaches the choosing — in the same unit as Speaking Part 2, where the candidate chooses two photographs from three, **because it is the same skill and the series has never taught it.**',
  '**The proposal arrives and the article goes.** ⚠ **A proposal is not a report with a recommendation on the end: it is written to a reader who has not yet agreed that there is a problem**, so its first paragraph establishes the problem and not the remedy, and its arithmetic has to include the cost of doing nothing. Units 4, 12, 20 and 22, and an NGO grants officer in the room who has never filled that line in honestly.',
  '**Mediation stops being a stage and becomes a unit.** x.7 has been Review & Mediate at three levels. ⚠ **C1 Unit 11 does mediation proper — a document rendered for a reader in another system, with the absences named** — and the court interpreter in the room is the person for whom that is not an exercise.',
  '**Lexis becomes a question of restraint rather than range.** 10–12 phrasal verbs and 8–10 word-formation items per unit, declared, as at B2 — **plus a third declared line that is new at C1 and is explained in §15, decision 1.** ⚠ **And one negative rule: no low-frequency item may appear in a model where a commoner word would do the same work.** At C1 the failure is no longer a gap in the vocabulary; it is reaching, and a reached-for word is visible.',
  '**What does not change:** British spelling, SYP, Damascus, no alcohol, no real living public figures in dialogue, same-gender pairing available, the privacy option on every personal task, contractions in dialogue and full forms in grammar tables, ⚠ and the ban on _dating_ as a verb, because the policy sweep has word boundaries and will flag it.',
].forEach(t => out.push(bullet(t)));
out.push(N('**Two register rules retire and three arrive.** ⚠ **Retired: the recoverable-agent rule** — B2\'s first register rule, which required every nominalised sentence to have its agent named in the same paragraph. At C1 it is ordinary, and a check that cannot fail hides the ones that can. **Retired: the inversion check**, ordinary since B2 Unit 5. **Arrived: the invisible-method rule** (no sentence about the writing inside a model, outside the two declared cycles); **the subordination rule** (every model carries at least two sentences whose main clause holds the claim and whose subordinate clause holds the reason or the concession, and **no sentence over forty-five words**, because length is the commonest thing mistaken for range); and **the two-of-three rule** (every Writing Part 1 sample discusses **two** of the three points and says in its first paragraph which two).'));

// ===================================================================
out.push(h2('12 · Toolchain, file naming and tracks'));
[
  '**A new tree, `proactive-english-c1-sy/`**, with its own `pipeline/` and `out/`. `lib.js` is copied **byte-for-byte** and verified by checksum against the A2, B1 and B2 copies — all four are `60c3ce12e272976ad6229b9350653b6e` — so a C1 page renders identically to an A2 page.',
  '**`bound.js` needs no change at all.** It reads `PE_LEVEL` for the title page and `PE_BOOK` for which units to bind, where the Mid-Book Test goes and what the unit list says. ⚠ **The B2 copy drops into the C1 tree and binds all four C1 volumes unmodified** — the fourth level to use one file, which is what decision 7 of the B2 plan was for.',
  '**`build.sh` is forked with three substitutions** — the tree path, the scratchpad path and `PE_LEVEL=C1` — and nothing else. ⚠ **`build.sh bound` writes .docx only**; the PDF is produced by hand with `soffice.py --headless --convert-to pdf`.',
  '**File naming.** `PE-C1-BK1-SY_UnitNN_StudentsBook.docx` and `PE-C1-BK1-SY_UnitNN_AnswerKey.docx`, with `_MidBookTest`, `_EndOfBookTest`, their `_Key` partners, `_StudentsBook_BOUND` and `_AnswerKey_COMBINED`. ⚠ **This is the standard the whole series was normalised to after B2 Book 2 shipped with two names for the same file**, and C1 starts on it.',
  '**Tracks: fifteen per unit**, numbered `N.1` to `N.15`, every one with its script printed at the point of use. Track `N.15` is the unit check\'s listening paper.',
  '**The declared-lexis extraction**, corrected after it silently dropped the last item of every list at B2 and let one clash through: `grep -ho "phrasal verbs\\*\\* _(declared[^\']*" pipeline/unit*.js | sed "s/.*another unit)_: //;s/_//g;s/\\\\\\\\//g" | tr \'·\' \'\\n\' | sed \'s/^ *//;s/ *$//;s/\\.$//\' | grep -v \'^$\' | sort | uniq -d`. ⚠ **Run it before writing a unit, not after building it.**',
  '**The page-growth lever, measured at B2 and still true.** Language-box bullets can be added or removed with **no** page-count change; a dialogue exchange costs about **two and a half pages**, because `dlg` rows are `cantSplit` and an oversized row jumps whole. **Grow a thin unit through its dialogues and trim a fat one through its Language boxes.** ⚠ At C1 the turns are longer, so measure the per-exchange cost again at Unit 1 rather than assuming 2.5.',
  '⚠ **`qa.sh` parses `(\\d+) min` out of the source**, so a literal _40 min_ written inside a model corrupts the minute profile. **Write _forty minutes_.** This has cost a rebuild at two levels.',
].forEach(t => out.push(bullet(t)));

// ===================================================================
out.push(pb());
out.push(h2('13 · QA — what is checked on every C1 unit'));
out.push(p('The B2 eighteen-point list with two retirements and five additions, and the retirements are as important as the additions.'));
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
  ['10', 'Continuity grepped against the cast table; any **new** name grepped against **all four trees** before it is used'],
  ['**11**', '**The invisible-method rule:** no sentence about the writing inside a Stage 5 model — except in the two declared cycles, 1.6 and 24.1'],
  ['**12**', '**The teacher does not state the finding:** in every cycle x.1–x.6, the sentence the Language box quotes as the finding is in a **student\'s** turn of the dialogue'],
  ['**13**', '**The subordination rule:** every model carries at least two claim-in-main-clause sentences, and **no sentence exceeds forty-five words**'],
  ['**14**', '**The two-of-three rule:** every Writing Part 1 sample discusses two of the three points and names which two in its first paragraph'],
  ['**15**', '**Claim strength preserved** in every summary and every compression task — the hedge in the source is in the output'],
  ['**16**', '**The three declared lexis lines:** phrasal verbs 10–12, word-formation 8–10, **_back at C1_ 2–3** — with the repeat rules of §15, decision 1 enforced in both directions'],
  ['**17**', 'Every C1 Advanced part met: each of the eight Reading parts three times, each Writing genre three times, the essay twelve times, each Listening part six times'],
  ['**18**', 'Page budget: SB **45–50**, AK **33–37**, widened at Unit 4 and again at Unit 9 from the measured record; measured per page, with the blank-page-versus-ruled-block distinction applied'],
  ['~~—~~', '_Retired: the recoverable-agent rule (ordinary from B2 U2) · the inversion-after-negative-adverbial check (ordinary from B2 U5)_'],
], [0.7, 7], { headFill: C.navy }));
out.push(N('⚠ **Check 12 is the one that will fail most often and it is worth saying why.** Writing a dialogue in which a **student** produces the finding is harder than writing one in which the teacher does, because the finding has to be arrived at rather than delivered — the student needs a reason to say it, and the reason has to be in the preceding turns. **A cycle that fails check 12 is almost never fixed by moving a sentence from Ms Huda to a student**; it is fixed by giving the student the observation two turns earlier. **The Answer Key then has somewhere to put its hardest Note.**'));

// ===================================================================
out.push(h2('14 · Production phases'));
out.push(table(['Phase', 'What is delivered', 'Turns'], [
  ['0', 'The tree and pipeline fork; this plan; **Unit 1 Student\'s Book and Answer Key in full**, settling the page budget, the model length against seven minutes, and the two new rules that cannot be proved on paper — check 11 and check 12', '1–2'],
  ['1', 'Book 1 Units 2–6 — which includes both early Speaking cycles — then the **Mid-Book Test** and its key', '2'],
  ['2', 'Book 1 Units 7–12, the **End-of-Book Test** and key, both bound volumes, the handover, the delivery bundle, Series Bible v1.3', '2'],
  ['3', 'Book 2 Units 13–18, then the **Mid-Book Test** and key', '2'],
  ['4', 'Book 2 Units 19–24, the **End-of-Book Test** and key, both bound volumes', '2'],
  ['5', 'Level QA pass across all 24 units; the one-click page for the complete A2-to-C1 Syria Edition', '1'],
], [0.7, 6.4, 0.9], { headFill: C.navy }));
out.push(p('**The per-unit loop is the one proved over seventy-two units at three levels and it does not change:** write the unit to the Unit 1 skeleton → `node -e "require(…)"` → build → convert → QA sweep → fix every out-of-band figure **by adding or trimming real content, never by waving a figure through** → read the per-page spread and distinguish a blank page from a ruled block → hand-check every exam item for a single valid answer, audio support and answer-letter spread → write the key to the house section order with exactly ten Notes → sweep → cast and continuity grep → commit the pair and push.'));
out.push(N('**Phase 0 exists to settle four things this plan asserts and cannot prove.** ⚠ **The page budget** (projected 50–54, and the series has been wrong about this at every level). ⚠ **The model against the clock** — 480–620 words inside a seven-minute Stage 5, which is the one number that could force a change to the word-count table. ⚠ **Check 11**, the invisible-method rule: a model with no sentence about its own method may turn out to be unteachable, in which case the exemption widens from two cycles to one per unit and the plan says so. ⚠ **And check 12**, the teacher\'s silence: if a student-produced finding reads as contrived in Unit 1, it will read as contrived in twenty-four. **One unit settles all four, and that is exactly how B2 Unit 1 earned its place in the schedule.**'));

// ===================================================================
out.push(pb());
out.push(h2('15 · The decisions, and how they were taken'));
out.push(p('**Two were delegated by the author with one instruction — _decide on pedagogical value_ — and both are taken below with the pedagogy spelled out. The rest follow from the examination, from print, or from three levels of measurement.**'));
out.push(table(['#', 'The question', 'Taken as', 'What it cost to decide it this way'], [
  ['**1**', '**Must C1 avoid the A2 and B1 lexis sets, or only its own?**', '**Neither, in full: a third rule** — see the box below', 'one more declared line per unit and one more QA check, in both directions'],
  ['2', 'C1 Advanced, IELTS, or exam-light', '**C1 Advanced** as the anchor, **IELTS as one declared transfer cycle** (21.5)', 'a mixed message, accepted — because a real C1 class contains an IELTS deadline and three levels have pretended otherwise'],
  ['**3**', '**Which two of the twelve carry forward**', '**Dima Khoury and Jad Attar**, with eight arriving and a class of ten', 'four better characters refused, and the refusals are in §10'],
  ['4', 'A fourth sealed letter, or retire the device', '**Retired.** 24.6 writes a page to the next teacher instead', 'the series\' best device, given up — and the box below says why it had to be'],
  ['5', 'Does Ms Huda teach C1, and unchanged?', '**She teaches it, and she stops stating the finding**', 'every dialogue in the level becomes harder to write. It is the thesis applied to the book itself'],
  ['6', 'Two books of twelve, or three of eight', '**Two of twelve** — and at C1 the arithmetic argues for it', 'nothing: eight reading parts into twenty-four units is three passes each, and three-of-eight would break that'],
  ['7', 'The page and word bands', '**Projected, flagged as projections, and amended from Unit 1**', 'nothing, and it is the only method that has ever worked in this series'],
], [0.4, 2.3, 2.2, 3.1], { headFill: C.navy }));

out.push(T('**Decision 1 · taken: the repeat rule is split in three, because the two obvious answers are both pedagogically wrong.** ⚠ **Forbidding every A2 and B1 item** would make C1 avoid _put off_, _look after_, _bring up_ and _take on_ — the highest-frequency phrasal verbs in the language — and push the level towards the rare and the ornamental **at exactly the moment its thesis is that a reached-for word is a visible word.** **Permitting repeats freely** would let a C1 unit recycle a B2 list and call it revision. **So:** ⚠ **(a) No repeat inside C1\'s own 24 units** — the declaration stays honest and the existing check stays live. ⚠ **(b) No repeat against B2** — the level immediately beneath is last year, and a repeat there is recycling. ⚠ **(c) A2 and B1 items are permitted, and only inside a third declared line of two or three items called _Back at C1_ — each one an item the class met at A2 or B1 and which is taught here for a sense or a register it did not then have.** _Look after_ → _look after somebody\'s interests_. _Put off_ → _put off a decision_ against _put somebody off_. _Pick up_ → _pick up a point_ against _pick somebody up_. **The check runs in both directions: an item on the _Back at C1_ line must be found in the delivered A2 or B1 Student\'s Books, and must not repeat across C1 units.** ⚠ **One correction, made while this plan was being written and recorded rather than tidied away: the rule first said _found in an A2 or B1 declared set_, and there are none.** **The declared lexis set is a B2 innovation** — a `grep` of the two earlier trees returns twenty-four declared sets at B2 and **zero** at A2 and B1. **So the test is occurrence in the earlier books\' running text, which is where the class actually met these words, and the check greps the two trees for the item itself.** **The pedagogical case is the whole of the decision: a constraint has been turned into the level\'s most characteristic habit — noticing that a word you have used for four years has a sense you have never used.**'));
out.push(T('**Decision 4 · taken: the sealed letter is retired, and print required it.** ⚠ **B2 24.7 says, in a delivered Student\'s Book, _there will be no course next time and no teacher to say now write the next one._** **A fourth letter prompted by a teacher would make that sentence false retrospectively**, and it would make a device that has run for six years into a classroom routine. **There is also a better reason.** B2 24.6 established that the letters have **dates set by their writers and keepers who are not friends** — so some of them come due inside C1 and some do not, and **Unit 15 is written for exactly that: a room in which only some of the envelopes can be opened.** ⚠ **That proves the unit\'s own finding — a sealed letter is written for a reader who has to be invented — harder than a room in which everybody opens one.** **And the C1 equivalent is not a letter at all: it is that Jad Attar was told to keep a list and did not, and Dima Khoury was told nothing and did.** **1.1 opens on that difference and it is worth more than a fourth envelope.**'));
// ===================================================================
out.push(pb());
out.push(h2('16 · Book 1 as built — the measured record'));
out.push(p('**Written after Book 1 was delivered, so that Book 2 is planned against measurements and not against the projections in §5.** ⚠ **Every figure below was taken off a built PDF.** **Where a projection was wrong, it is named as wrong and the reason is given, because the reason is the useful part.**'));
out.push(table(['', 'Projected in §5', 'Measured, Units 1–12', 'Verdict'], [
  ['**Student\'s Book, per unit**', '45–49 pp', '**47 · 45 · 45 · 46 · 46 · 45 · 45 · 49 · 50 · 49 · 49 · 50**', '⚠ **Band widened twice** — at Unit 4 and again at Unit 9'],
  ['**Answer Key, per unit**', '33–37 pp', '**35 · 33 · 35 · 34 · 33 · 33 · 33 · 33 · 33 · 34 · 34 · 36**', '**Held, every unit, no amendment**'],
  ['**Mid-Book Test + key**', '11–12 + 9–10 pp', '**11 + 10**', '**Held**'],
  ['**End-of-Book Test + key**', '16–17 + 12–13 pp', '**15 + 12**', '⚠ **Test one page under**; key in band'],
  ['**Student\'s Book, bound**', '—', '**593 pp**', '566 unit pages + 26 test pages + title'],
  ['**Answer Key, bound**', '—', '**429 pp**', '406 unit pages + 22 key pages + title'],
], [1.6, 1.3, 3.2, 2.1], { headFill: C.navy }));
out.push(N('⚠ **Why the Student\'s Book band moved and the Answer Key\'s did not, which is the one structural finding of Book 1 and governs Book 2\'s planning.** **At C1 the page count follows the number of unsplittable blocks and not the word count.** **Prose barely moves a page**: about 250 words came out of Unit 9\'s audio script and the unit did not lose a page. **A `box()` or `table()` that will not fit jumps whole**, and the closing _Vocabulary of this unit_ box is `cantSplit` and takes a page of its own on any unit that has reached 49. ⚠ **Unit 9 was trimmed three times before the band was widened** — the nine-degrees table was regrouped into a box, then folded into the language box, then the vocabulary box was shortened — **and it measured 50 after all three.** **The Answer Key has no such closing block and its content is paragraphs, so it sat inside a four-page band for twelve units without one amendment.** **The lesson for Book 2: plan the Student\'s Book at 45–50 from Unit 13 and do not trim prose to save a page, because prose is not what is costing it.**'));
out.push(N('**The End-of-Book Test came in at 15 against a projection of 16–17, and the projection was right about the reason and wrong about the arithmetic.** ⚠ **§2 predicted the Speaking paper would cost pages because it doubles to 20 marks and cannot be four prompts and a rubric** — **and it does cost them: four parts with their own materials, six described photographs, a five-option prompt sheet, an interview frame and five discussion questions, each with the examiner\'s follow-up printed.** **What the projection did not allow for is that Reading and Use of English at 40 marks fits eight parts in fewer pages than six parts at 24 did, because the per-part rubric is the fixed cost and the texts are shared.** **One page, and it is recorded rather than corrected.**'));
out.push(h3('The examination rotation as built'));
out.push(p('⚠ **All eight Reading and Use of English parts were covered, each either once or twice, and all four Listening parts three times each.** **The rotation below is the one the End-of-Book Test is built from and the one Book 2 has to complete** — **every part three times across the twenty-four units.**'));
out.push(table(['Unit', 'Reading and Use of English', 'Writing', 'Listening'], [
  ['**1 · 2 · 3 · 4**', 'Part 3 · Part 4 · Part 1 · Part 2', 'essay · letter · essay · proposal', 'L1 · L2 · L3 · L4'],
  ['**5 · 6 · 7 · 8**', 'Part 5 · Part 7 · Part 8 · Part 6', 'essay · report · essay · review', 'L1 · L2 · L3 · L4'],
  ['**9 · 10 · 11 · 12**', 'Part 3 · Part 1 · Part 4 · Part 5', 'essay · letter · essay · proposal', 'L1 · L2 · L3 · L4'],
  ['**Totals, Book 1**', '**Parts 1, 3, 4, 5 twice; 2, 6, 7, 8 once**', '**6 essays · 6 Part 2 tasks**', '**Each part three times**'],
  ['⚠ **What Book 2 owes**', '⚠ **Parts 2, 6, 7 and 8 twice more; 1, 3, 4, 5 once more**', 'six more of each', 'three more of each'],
], [1.4, 3.2, 2.2, 1.6], { headFill: C.navy }));
out.push(h3('The lexis as built'));
out.push(table(['Line', 'Per unit', 'Book 1 total', 'Checked against'], [
  ['**Phrasal verbs**', '10–12', '**144**', 'the other eleven C1 units · all 24 B2 units'],
  ['**Word-formation sets**', '8–10', '**108**', 'the other eleven C1 units · all 24 B2 units'],
  ['**Back at C1**', '2–3', '**36**', '⚠ **occurrence in the delivered A2 and B1 books, in both directions**'],
], [1.6, 1, 1.2, 3.6], { headFill: C.navy }));
out.push(N('⚠ **Decision 1\'s third rule survived twelve units and cost more than it looked.** **Every _Back at C1_ item has to be found in the running text of the delivered A2 or B1 Student\'s Books and must not repeat across C1 units, and the check runs both ways** — **which rejected items in four of the twelve units.** **Unit 9 is the record: _hold up_ was planned, is not in A2 or B1 at all, and was replaced with _stand up_, which then clashed with Unit 4\'s set, so the unit shipped with _give up_** — **A2\'s sense being giving up a habit and C1\'s being giving up a finding.** **The rule is worth its cost and `lexcheck` should be run before a cycle is written and not after.**'));
out.push(N('**Four things were measured that §5 did not think to project, and Book 2 should be planned with all four.** ⚠ **One: exactly 8 `dlg()` per unit** — seven cycle dialogues and one audio script — **which is what holds the unit at seven cycles without an eighth creeping in.** **Two: exactly 10 NOTE boxes per Answer Key.** **Eleven was written four times, in Units 8, 9, 10 and 11, and the repair each time was to turn the examination-mechanics note into a paragraph inside the Stage 5 or check block, which is where a teacher looks for it anyway.** **Three: exactly six `pb()` per unit, before x.1 to x.5 and before the unit check, and none before x.6 or x.7.** **A seventh was written once, in Unit 8.** ⚠ **Four: every unit and key script must end with `module.exports = out;` and the `require.main` build line.** **Unit 8 shipped without the second and `build.sh` wrote no file and exited silently** — **which cost an hour and is the only toolchain fault in the whole of Book 1.**'));
out.push(h3('Hand-marking: what the QA harness cannot see'));
out.push(p('⚠ **Every examination item in Book 1 was marked by hand against its own text and audio, and fifteen were rewritten because a second answer worked.** **No automated check can find these and the list is the argument for the pass.**'));
out.push(table(['Unit', 'What was wrong', 'What it cost'], [
  ['**8**', 'check item 3 (_for_ also worked) · item 4 (_Although_ also worked) · Listening Q4 stem asked what the candidate decided where the script has the supervisor deciding', 'three rewrites'],
  ['**9**', 'check item 6 (_on page 14_ and _at page 14_ both acceptable) · Listening Q4 stem', 'two rewrites'],
  ['**10**', '⚠ **Reading Part 1 items 1, 3 and 8** — _taken away_, _scale back_ and _set out_ each fitted as well as the key', 'three sets of options replaced'],
  ['**11**', 'Listening Q5 option C — _usually added by translators_ was also supported by the recording', 'one option rewritten'],
  ['**12**', '⚠ **two Reading Part 5 distractors that were true statements in the wrong place, and four check items with a second valid answer** — _had deleted_, _which I enjoyed_, _is costing_, _to report_', 'six rewrites, and the answer letters respread'],
  ['**End-of-Book**', 'answer letters piled on one option in two parts; Part 6 answers piled on one extract', 'four option orders and two extracts rewritten'],
], [1.1, 5.2, 1.5], { headFill: C.navy }));
out.push(N('⚠ **The pattern in all fifteen is the same and it is worth stating as a rule for Book 2: at C1 a distractor written to be plausible is frequently also correct.** **The three shapes are a preposition or conjunction that happens to fit the frame, a continuous or perfect form that is grammatical in a different reading, and a true statement about the text that answers a question nobody asked.** **The method that found all fifteen is to answer every item oneself, from the text alone, before looking at the key** — **and to do it after the build, on the printed page, because an option that reads as obviously wrong in the source reads as plausible in a column.**'));
out.push(sp());
out.push(box('What happens next', [
  'Phase 0 begins with **Unit 1 in full** — Student\'s Book and Answer Key — for the four reasons in §14, of which two are numbers and two are rules that have never been tried.',
  'Unit 1 can be written today, because the thing that would have blocked it is settled: **the room has Dima Khoury and Jad Attar in it and eight people who have never met this method** — a physician whose papers come back marked _language_, a court interpreter whose work fails the moment it is noticed, an engineer who has twice written an opinion with no limit in it, a doctoral candidate reading four authors who disagree, a headmaster who says one thing three ways, a grants officer who has never honestly costed doing nothing, a wire journalist with eighty words and a desk editor who rewrites him, and a pharmacist with a registration deadline and a B2 certificate from somewhere else.',
  '**And Ms Huda arrives holding eleven _cannot yet_ lists of which nine belong to people who are not in the room.** ⚠ **That folder is the first thing in the book.** 1.2 reads the nine, and the eight newcomers find their own sentences in lists written by strangers — which is the only introduction this class could have been given that does not begin with everybody saying their name and their job.',
  '⚠ **One sentence is already written and waiting, and it is the whole level in eleven words.** _It is not from simple to complicated, it is from visible to invisible._ **A student wrote it in a delivered book. The job of these twenty-four units is to earn it.**',
], C.lorange, C.orange));

L.build(out, process.argv[2], 'Proactive English · C1 · Syria Edition · Production plan and curriculum blueprint');
