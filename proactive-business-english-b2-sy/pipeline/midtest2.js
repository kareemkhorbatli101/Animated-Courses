// Proactive Business English B2 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 13–18'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (40 min) · **Writing** (40 min) · **Listening** (about 25 min) · **Speaking** (in pairs, about twelve minutes with your teacher).',
  'Total: **60 marks**, divided equally — Reading, Writing, Listening and Speaking are worth fifteen marks each. ⚠ This is the weighting of **B2 Business Vantage**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones, and that is deliberate.',
  '⚠ **The Reading paper practises three of the examination\'s five parts, and they are the three Book 1\'s Mid-Book Test did not** — sentence insertion, multiple-choice cloze and matching. **The other two, multiple choice and error correction, are in the End-of-Book Test.** In the real paper there are five parts and forty-five questions in one hour.',
  '⚠ **The Writing paper uses the examination\'s own lengths**: Part 1 is **40 to 50 words** and Part 2 is **120 to 140 words**. **These are not the course\'s lengths** — Units 13 to 18 asked for 80 words or more and 200 to 240 — **and the difference is the examination\'s, not a mistake.**',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit put marks on.** In Writing Part 1, ⚠ **whether you say whose the absence is** (Unit 17.4) — *there is no record of X* scores; *there is no record of X, and the absence is ours* scores more, and a candidate who names a gap without owning it has done half the task. And in Writing Part 2, ⚠ **whether your recommendation is an act with an owner and a date** (Unit 13.3) — *we should record reasons* is not a recommendation, because nobody does it and nothing happens on any particular day.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  '⚠ **If you finish early:** read your Writing Part 2 recommendations aloud and ask of each one **who does it and when.** A recommendation with no answer to either is a sentence, not a recommendation, and the fault is invisible on a desk.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (40 minutes · 15 marks)'));
out.push(part('Part 1  ·  Sentence insertion  (5 marks)', 'Read the text. Six sentences have been removed. Choose from **A–F** the sentence which fits each gap **1–5**. There is **one extra sentence** you do not need. ⚠ Read the sentence **after** each gap as well as the one before it.'));
out.push(model([
  '**WRITING FOR THE PERSON WHO HAS NOT ARRIVED — guidance to members, Chamber of Commerce.**',
  'An office changes hands a great deal more often than its files do. **1** ______ A successor inherits the documents and none of the knowledge that made them usable, and the gap is not usually noticed until a decision has to be taken.',
  'The first thing to record is not what was decided but why that course was taken instead of the obvious alternative. **2** ______ Where they could not, the decision reads to a stranger as the only one that had been available, which is almost never true.',
  'Figures need the same treatment and are given it even less often. **3** ______ Without that, a reader five years later cannot tell whether a sum was large, and will guess, and the guess runs in both directions.',
  'People should be recorded by office rather than by name, with the dates between which each office was held. **4** ______ A name on its own is of no use at all to somebody who did not work there, and of diminishing use to those who did.',
  'Finally, and most members find this the hardest, a file should state what it cannot answer. **5** ______ Members report that this one page saves more of a successor\'s time than any other part of the exercise, because it is the only part that tells them where to stop looking.',
]));
out.push(q('**A**  A list of the questions the file does not answer, with the person or the department that might, costs a single page.'));
out.push(q('**B**  An office can be looked up, and the dates of its holders allow any signature on any document to be placed.'));
out.push(q('**C**  Most organisations keep their files for considerably longer than the law obliges them to.'));
out.push(q('**D**  In a firm of twenty people a post will change holder three or four times in a decade, while the file it generates is never rewritten.'));
out.push(q('**E**  Ask whether a reader could name the rejected alternative from the document alone.'));
out.push(q('**F**  A sum should be set beside something it was comparable to at the date it was written.'));
out.push(sp());
out.push(part('Part 2  ·  Multiple-choice cloze  (5 marks)', 'Read the note and choose the best word for each gap **6–10**. Choose **A**, **B**, **C** or **D**.'));
out.push(model([
  '**To:** all department heads   **From:** Administration   **Subject:** the decision sheet',
  'From the first of next month the decision sheet carries two further fields, and this note says why.',
  'At present our minutes record every decision taken, with its date and the person taking it. The alternatives **6** ______ are not recorded at all, and neither is the ground on which any of them was set aside.',
  'The first new field is the alternative not taken. The second is the condition **7** ______ which that alternative would be worth looking at again — and where the condition has since been met, please say so in capitals in the field itself.',
  'Two smaller requests. Please record the office and the person then **8** ______ it, with the dates, rather than a first name. And where a figure appears, give it beside something it was comparable **9** ______ at the time.',
  'Nobody **10** ______ asked for any of this before, in this company, in sixteen years. That is the whole reason none of it exists, and it is nobody\'s fault in particular.',
]));
out.push(q('**6**   **A** rejecting   **B** rejected   **C** to reject   **D** reject'));
out.push(q('**7**   **A** under   **B** on   **C** in   **D** at'));
out.push(q('**8**   **A** on   **B** at   **C** in   **D** for'));
out.push(q('**9**   **A** to   **B** with   **C** for   **D** as'));
out.push(q('**10**  **A** have   **B** has   **C** had   **D** having'));
out.push(sp());
out.push(part('Part 3  ·  Matching  (5 marks)', 'Read the three handover notes **A–C**. For each statement **11–15**, decide which note it refers to. A note may be used **more than once**. Circle **A**, **B** or **C**.'));
out.push(model([
  '**A  Warehouse.** Deliveries go out on Monday and Wednesday. Stock is ordered against booked orders and the counter lines are reordered when the shelf looks low. We do not take instructions from the branch, only from head office. The gate sheet records what left the yard. Nothing here is written down anywhere else and it has all been like this for as long as I have been here.',
  '**B  Accounts.** Debtor days stood at forty-nine in October against fifty-eight a year earlier, which at that date was slightly better than the two suppliers whose terms we match. The credit committee declined eight million of the forty we asked for, and the reason is at page three of my file. One thing my file cannot tell you is who set the two-hundred-thousand quoting threshold, or on what basis. Three of us remember it differently. The previous office manager set it and left in 2024; the job-margin workings for that year may still be in the archive.',
  '**C  Sales.** Talk to Abu Yasser about the Ghouta customers and to the Doctor about anything to do with the lease. Samer has the keys. I am also leaving a paper proposing a van route out of Mezzeh instead of a northern store, which I think is the obvious answer and which nobody here has looked at properly.',
]));
out.push(q('**11**  This writer records a question their own file cannot answer, and names where an answer might still be found.'));
out.push(q('**12**  This writer identifies people in a way that a successor could not trace.'));
out.push(q('**13**  This writer describes a practice without saying when or why it began.'));
out.push(q('**14**  This writer puts forward a proposal that has been put forward before.'));
out.push(q('**15**  This writer gives a figure together with what it was comparable to at the time.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (40 minutes · 15 marks)'));
out.push(part('Part 1  ·  An internal communication  (5 marks)', 'Write **40 to 50 words**. Three content points, all three present. ⚠ Count your words and write the number at the end.'));
out.push(box(null, [
  '⚠ **A decision was taken at your company and the reason for it was never written down.** **Somebody has now asked why it was taken.**',
  '**Write a message to your manager:**',
  '**·  saying what was decided and what the alternative was**',
  '**·  saying that the reason is not recorded** — ⚠ **and whose absence that is**',
  '**·  saying what you want your manager to do about it, and by when**',
  '**Write 40 to 50 words.**',
], C.lorange, C.orange));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________'));
out.push(...lines(6));
out.push(p('**Words: ______**'));
out.push(sp());
out.push(part('Part 2  ·  A report  (10 marks)', 'Write **120 to 140 words**. ⚠ Count your words and write the number at the end.'));
out.push(box(null, [
  '⚠ **Your company has twice taken the same kind of decision without recording a reason either time.** **Your manager has asked you to report on it.**',
  '**Write a report for your manager:**',
  '**·  saying what is recorded at present and what is not**',
  '**·  giving one cost the company has already paid for this** — ⚠ **a specific one: weeks, a figure, or a named role**',
  '**·  recommending two changes** — ⚠ **each one an act, with somebody who does it and a date on which it starts**',
  '**Write 120 to 140 words.**',
], C.lorange, C.orange));
out.push(...lines(14));
out.push(p('**Words: ______**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 25 minutes · 15 marks)'));
out.push(p('⚠ You will hear each recording **twice**.'));
out.push(part('Part 1  ·  Note completion  (5 marks)', 'Listen to Nour and Mr Sayegh and complete the note. Write **one to four words or a number** in each gap.'));
out.push(table(['THE HOMS FILE — note for the handover', ''], [
  ['the file was finished on', '**16** ______________'],
  ['names in it that cannot be traced', '**17** ______________'],
  ['the status of the 2021 reason', '**18** ______________'],
  ['the office manager hands over in', '**19** ______________'],
  ['what the file cannot answer at all', '**20** ______________'],
], [4.6, 4.4]));
out.push(sp());
out.push(part('Part 2  ·  Multiple choice  (5 marks)', 'Listen to Bassel and Nadia and choose **A**, **B** or **C** for questions **21–25**.'));
out.push(q('**21**  Bassel discovered that the van route   **A** had never been considered.   **B** had been considered in 2019 and rejected.   **C** had been approved and forgotten.'));
out.push(q('**22**  The reason it was rejected was that   **A** one van could not hold stock for three sites.   **B** the board preferred a store.   **C** it cost too much.'));
out.push(q('**23**  Nadia says the condition changed in   **A** 2022.   **B** 2025.   **C** 2024.'));
out.push(q('**24**  What does Bassel say he would do differently?   **A** nothing   **B** begin the paper by saying it was rejected in 2019 and why that reason has gone   **C** not propose it at all'));
out.push(q('**25**  Nadia says the larger cost is that   **A** the board could not weigh it against what it was weighed against in 2019.   **B** he lost three weeks.   **C** the paper was badly written.'));
out.push(sp());
out.push(part('Part 3  ·  Multiple choice  (5 marks)', 'Listen to Lina and Hala and choose **A**, **B** or **C** for questions **26–30**.'));
out.push(q('**26**  Hala began keeping a tally because   **A** she was asked to.   **B** she wanted to know, and nobody stopped her.   **C** it was company policy.'));
out.push(q('**27**  The tally has existed since   **A** 2024.   **B** 2023.   **C** 2026.'));
out.push(q('**28**  Lina says the problem with the tally is that   **A** nobody reads it.   **B** the figures are wrong.   **C** it is not written down anywhere as a practice.'));
out.push(q('**29**  What does Hala say would happen if she left?   **A** it would stop, and nobody would know it had ever been done   **B** somebody else would do it   **C** the figures would be kept'));
out.push(q('**30**  What do they agree to write down?   **A** the figures   **B** the practice, with the date it started and who started it   **C** a complaint'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about twelve minutes · 15 marks)'));
out.push(box('How the fifteen marks are awarded', [
  '**Part 1 — 4 marks.** Answering about your own work, with a figure, a date or an office wherever one belongs.',
  '**Part 2 — 6 marks.** A collaborative task with your partner: agreeing what a successor would not know, and what they would assume instead.',
  '**Part 3 — 5 marks.** Putting a case to your teacher about a decision at your work, ⚠ **with the alternative you did not take named in it.**',
  '⚠ **Across all three parts, a candidate who gives a situation where a reason was asked for loses one mark, once.** *It was losing money* **describes a situation.** **Units 18.4 drilled the difference; this paper marks it.**',
], C.lteal, C.teal));
out.push(p('**Part 1 · About you  (about three minutes)**'));
out.push(q('·  How long has your office existed, and who held it before you?'));
out.push(q('·  Tell me about one thing at your work that everybody knows and nobody has written down.'));
out.push(q('·  Has your company ever decided the same thing twice? What happened?'));
out.push(p('**Part 2 · With your partner  (about five minutes)**'));
out.push(box(null, [
  '⚠ **One of you is leaving your job in two months. The other takes it over.**',
  '**Together, agree and write down:**',
  '**·  three things the successor will not know** — ⚠ **and only one of them may be a person**',
  '**·  what the successor will assume instead, in each case**',
  '**·  which one of the three would have been fixed by forty words, and who should have written them**',
  '⚠ **You must agree. If you cannot, say which of you is giving way and why.**',
], C.lyellow, C.orange));
out.push(p('**Part 3 · With your teacher  (about four minutes)**'));
out.push(q('·  Tell me about a decision taken at your work in the last two years. ⚠ **What was it taken instead of?**'));
out.push(q('·  Is the reason written down anywhere? If not, who knows it, and how long will they be there?'));
out.push(q('·  What would it cost your company if that person left tomorrow? ⚠ **Give me weeks, a figure or a named role.**'));
out.push(sp());
out.push(box('⚠ A note to the teacher on this paper', [
  '⚠ **Part 2 carries the most marks and the instruction that does the work is *only one of them may be a person*.** **Without it every pair produces three people, because the people are the easy half and everybody in the room can see the rest.** ⚠ **With it, pairs are forced to the pattern and the absence, which is the whole of Unit 18.1** — **and it is the single most reliable discriminator in this test.**',
  '⚠ **Part 3\'s marks are in the first question and candidates will answer the second.** **Asked what a decision was taken instead of, most will describe the circumstances that made it necessary** — **true, relevant, and already known to everybody.** **Accept it once, name it as the situation, and ask again.** ⚠ **A candidate who produces a real alternative on the second ask has done the thing this half-book teaches; one who produces the figures three times has not, however fluent.**',
  '⚠ **And the condition penalty in the box is deliberately *once*, not per instance.** **It marks a habit rather than punishing a slip**, **which is the same decision Book 1\'s Mid-Book Test took about *probably* and *should*.**',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Mid-Book Test');
module.exports = out;
