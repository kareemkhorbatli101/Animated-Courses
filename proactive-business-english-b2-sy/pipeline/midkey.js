// Proactive Business English B2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Answer key and mark scheme
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('MID-BOOK TEST  ·  Units 1–6  ·  Answer key and mark scheme'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you mark', [
  '**Sixty marks, divided equally: Reading 15 · Writing 15 · Listening 15 · Speaking 15.** ⚠ **Record four separate marks and give the candidate the average, not the total.** **This is how B2 Business Vantage reports, and one weak paper cannot be hidden behind three strong ones.**',
  '⚠ **A pass at this point in the course is 36 of 60 — but a candidate with 48 and a Writing paper of 6 has not passed anything useful**, **and the four marks are what you discuss with them.**',
  '⚠ **The two declared emphases are both in Writing and they are both pass-or-fail, not partial.** ⚠ **A concession that cost the candidate nothing scores nought for that content point, however well written.** ⚠ **A load-bearing sentence that is similar in the two tasks rather than identical scores nought for that point, however small the difference.** **Both were announced on the candidate\'s own paper.**',
  '**Everything in Reading and Listening is right or wrong and worth one mark.** **No half marks anywhere in this paper.**',
], C.grey, C.navy));

// ================= READING =================
out.push(h2('PAPER 1  ·  READING    (15 marks)'));
out.push(p('**Part 1 · Matching  (5 marks)**'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'A', 'C', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Why, and note that B and C are each used twice.**  **1 B** — *you should stop at paragraph 4.*  **2 A** — *as I have told the customer.*  **3 C** — *this takes effect from 1 April.*  **4 B** — *you will find it in four minutes.*  **5 C** — *only Mr Ayoub may authorise a departure*; **A names a customer and a place but no person, and B names nobody.**'));
out.push(p('⚠ **The distractor is question 4 against question 1.** **Both are about text B.** **A candidate reading for subject matter will see that B is the only text about checking and put both against it** — **which is right for 4 and right for 1 as well, and the pair is deliberate: Part 1 texts are similar and a statement is answered by the clause only one text has.**'));
out.push(sp());
out.push(p('**Part 2 · Multiple choice  (5 marks)**'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'C', 'D', 'B', 'A', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**Where each answer is.**  **6 C** — *what decides how each is written is not who is reading it but what that reader will be doing on the following Tuesday morning* (para 1). ⚠ **A is the distractor and the text denies it in the same sentence.**  **7 D** — *a document which serves all three serves none of them well* (para 2).  **8 B** — *which are one day, five days and a different month* (para 3).  **9 A** — *a man who learns there that you also wrote to the buyer feels managed, and a man who already knew feels informed* (para 4).  **10 C** — *it survived them because it had been written for an action and for a comparison rather than for a person* (para 5).'));
out.push(sp());
out.push(p('**Part 3 · Error correction  (5 marks)**'));
out.push(table(['11', '12', '13', '14', '15'], [['BEEN', 'CORRECT', 'IT', 'CORRECT', 'FOR']], [1, 1, 1, 1, 1]));
out.push(p('⚠ **Three errors and two correct lines.**  **11 BEEN** — *I have been taken out eleven* cannot be a passive with an object.  **13 IT** — *cost us it anything* has two objects.  **15 FOR** — *asking you for read* puts a preposition before a bare infinitive.'));
out.push(p('⚠ **The two marks most often lost here are on lines 12 and 14, and both are lost in the same way.** **A candidate deletes *ever* from line 12 or *this week* from line 14, because the prose survives without them.** ⚠ **Both are grammatical, so neither is the answer** — **and the instruction on the candidate\'s paper says so in bold.** ⚠ **Give no mark for a blank on a correct line: CORRECT must be written.** **A candidate who leaves both blank and has the three errors right scores 3 of 5 on a paper they understood, and they need to be told exactly that.**'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (15 marks)'));
out.push(p('**Part 1 · An internal communication  (5 marks)**'));
out.push(sample('Sample answer (46 words)', [
  'Two weeks late. The supplier failed and the 320 cartons now reach the customer on 2 May instead of 18 April. Whether we pay overtime to make it up is not decided — Mr Ayoub decides on Thursday. Until then, work to the current schedule and send questions to me.',
]));
out.push(table(['Mark', 'For'], [
  ['**1**', 'what has happened, as a figure **and** a date'],
  ['**1**', 'what is not yet decided'],
  ['**1**', '⚠ **who will decide it, by name or role** — *the management* and *it is being looked at* score nought'],
  ['**1**', 'what to do in the meantime'],
  ['**1**', '40 to 50 words, and the count written at the end'],
], [1, 5]));
out.push(p('⚠ **Two faults to look for.** **A message that gives the delay and not the decision** — **the reader at the bench needs to know that nothing is settled, or they will hear about the overtime from somebody else.** ⚠ **And a word count written at the end that is wrong by more than two.** **Give the mark for the count only if it is within two of the real figure**; **a candidate who writes *48* over a 61-word message has not counted, and counting is a marked skill because the examination makes it one.**'));
out.push(sp());
out.push(p('**Part 2 · A report  (10 marks)**'));
out.push(sample('Sample answer (133 words)', [
  '**REPORT: THE BEIRUT CONTRACT. 2 May.**',
  '⚠ **The revenue case is better than anything we have been offered in ten years: eleven hundred cartons a month against our four hundred, for three years, at his own stated price. I have nothing to set against it.**',
  '⚠ **I may be wrong about the sixty-one per cent. If I am, nothing else here matters.** It is the share of our total turnover for the twelve months to 31 December that would come from one buyer, with his stated volume at his stated price and nothing else changed. The working is one page.',
  '⚠ **I am not asking you to refuse it.** I am asking you to cap the first year at six hundred cartons a month, which brings the share to about thirty-five per cent, and to ask the mill what board costs at that volume before the second year is agreed.',
]));
out.push(table(['Marks', 'For'], [
  ['**2**', '⚠ **a concession that cost the candidate something** — **the best thing about the offer, in its own terms, with a figure of theirs in it**'],
  ['**1**', '⚠ **and nothing after it that argues** — **a *but*, a *however*, or a counter-figure in the next sentence scores nought for this mark**'],
  ['**2**', 'the one thing they may be wrong about, **with a consequence attached**'],
  ['**2**', 'one figure **with its base** — per cent of what, whose, over what period, and *nothing else changed*'],
  ['**1**', 'what they are **not** asking for'],
  ['**1**', 'the smaller thing they **are** asking for, grantable this week'],
  ['**1**', '120 to 140 words, and the count written at the end'],
], [1, 5]));
out.push(p('⚠ **And the second declared emphasis, marked across the two tasks and not inside either.** ⚠ **The sentence carrying the figure and the date must be identical in Part 1 and Part 2, word for word.** ⚠ **Where it is identical, add nothing** — **it is already paid for inside the content marks above.** ⚠ **Where it is similar but not identical, deduct one mark from Part 2 and write the two versions out side by side on the script.** **Nothing else in the mark scheme is a deduction, and this one is, because that is the only way a candidate sees the two versions together.**'));
out.push(p('⚠ **The commonest failure in Part 2, and it is not a language failure.** **A candidate writes a concession and then, in the next sentence, begins *however* or produces a counter-figure** — **which is the free concession of Unit 3.1 with the *but* deleted.** ⚠ **It costs three marks of ten** (the concession and the no-argument mark) **and it will be the single largest cause of a low Writing score on this paper.** **Say so when you hand the papers back.**'));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (15 marks)'));
out.push(p('**Part 1 · Note completion  (5 marks)**'));
out.push(table(['16', '17', '18', '19', '20'], [['three', 'the water', 'five years', 'about forty minutes', 'nobody\'s']], [1, 1, 1, 1.1, 1]));
out.push(p('⚠ **Accept** *3* **for 16,** *water* **or** *the water pressure* **for 17,** *5 years* **and** *five* **for 18,** *40 minutes* **and** *forty minutes* **for 19.**  ⚠ **For 20, accept only *nobody\'s* or *nobody* or *no one\'s*.** **_The warehouse_ and _Abu Yasser_ are both wrong and both will be written**, **and the whole of Unit 4.7 turns on the exposure having no owner** — **so the mark is worth defending.**'));
out.push(sp());
out.push(p('**Part 2 · Multiple choice  (5 marks)**'));
out.push(table(['Q', '21', '22', '23', '24', '25'], [['Answer', 'C', 'B', 'C', 'B', 'A']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**21 C** — *the bottom row is the one I had wrong* and the bottom row is hedging.  **22 B** — *the yard is the only one I would have to look in the face.*  **23 C** — *the yard gets the most and the bank gets the least.*  **24 B** — *detail is set by what the reader does, not by how senior they are.*  **25 A** — *if it were not true, should would go to all three, including the bank.*'));
out.push(p('⚠ **Question 22 is the one candidates get wrong, and they choose A.** *The yard could do something about it* **is true, is sensible, and is not what the speaker says** — **she says it is the reader she would have to face.** ⚠ **A is the answer a thoughtful candidate constructs; B is the answer the speaker gives.** **That distinction is what the Listening paper is for.**'));
out.push(sp());
out.push(p('**Part 3 · Multiple choice  (5 marks)**'));
out.push(table(['Q', '26', '27', '28', '29', '30'], [['Answer', 'B', 'A', 'B', 'C', 'A']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('**26 B** — *not releasing to people who owe.*  **27 A** — *three weeks. Four times.*  **28 B** — *on the ledger.*  **29 C** — *three things, and none of them is the rule.*  **30 A** — *nobody would have known until November.*'));
out.push(p('⚠ **Question 29 is the paper\'s best single question and about half the class will answer A.** **The speaker says *three things, and none of them is the rule*** — ⚠ **so the answer to *how many of the things the page changes are the rule itself* is none.** **A candidate who answers *all three* has heard *three things* and stopped listening**, **which is exactly the error the question was built to catch.**'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (15 marks)'));
out.push(table(['Part', 'Marks', 'What earns them'], [
  ['**1**  Your own work', '**4**', '⚠ **a figure, a date or a name wherever one belongs** — **1 mark for each of the four questions answered with one, and nought for an answer that would fit any company**'],
  ['**2**  The collaborative task', '**6**', '**2 — conceding the partner\'s strongest point first, in its own terms** · ⚠ **2 — not saying *but* after it** · **2 — reaching a position with a number in it rather than an adjective**'],
  ['**3**  Putting a case', '**5**', '**1 concession · 1 figure with its base · 1 the thing they may be wrong about with a consequence · 1 what they are not asking for** · ⚠ **1 — a fact that helps the other side**'],
], [1.4, 0.8, 4.4]));
out.push(p('⚠ **And the deduction declared on the candidate\'s paper: one mark, once, across all three parts, for *probably* or *should* with no condition named.** **Units 4 and 6 both marked the condition and this paper marks its absence.** ⚠ **Take it once and no more, whatever they do** — **and write on the script which utterance it was taken for.**'));
out.push(box('⚠ The diagnostic, and what to do with it', [
  '⚠ **The last mark in Part 3 — a fact that helps the other side — is the paper\'s diagnostic and most candidates will not score it.** **That is expected and it is not a failure of teaching.** ⚠ **Unit 3.3 asked them to write the other side\'s case better than its owner put it, and doing that under pressure, out loud, to an examiner, is the hardest thing in Book 1.**',
  '⚠ **Do not prompt for it.** **A prompted fact is not a volunteered one and the whole value of the mark is that it was volunteered.**',
  '⚠ **What to do with the result:** **a candidate who scores it is ready for Units 7 to 12 and should be told so.** **A candidate who does not is not behind** — **they should be sent back to 3.3 with one instruction: spend an hour writing the best version of something they disagree with, and bring the one line that says what happened to their own case.**',
], C.lyellow, C.orange));

// ================= DIAGNOSIS =================
out.push(pb());
out.push(h2('Reading the four marks'));
out.push(table(['The pattern', 'What it means', 'What to do'], [
  ['⚠ **high R and L, low W**', '⚠ **the commonest pattern on this paper by a long way.** **The candidate can recognise every move and cannot yet perform one under a word limit.**', '**Units 7–12 as written.** ⚠ **The word limits are the problem, not the moves** — **set two timed 130-word tasks a week and nothing else changes.**'],
  ['**high W, low R**', 'a candidate who writes well and reads for subject matter rather than for the clause', '⚠ **Part 1 and Part 3 technique: read the statement then hunt; and the extra word must be ungrammatical.** **Thirty minutes fixes most of it.**'],
  ['⚠ **low on the two declared emphases, good elsewhere**', '⚠ **the candidate has learned the shapes and not the costs.** **A free concession and a paraphrased sentence are both *better writing* by instinct.**', '⚠ **3.1 and 6.4 again, in that order** — **and the instruction is the same for both: the version that reads better is the one to distrust.**'],
  ['**even and low across all four**', 'the course is going too fast for this candidate', '**Units 1–3 again before Unit 7.** ⚠ **Do not continue and hope** — **Units 7 to 12 assume all six.**'],
  ['⚠ **high everywhere and no Part 3 diagnostic mark**', '⚠ **the normal profile of a strong candidate at the half-way point.** **Not a weakness.**', '**Continue.** **The mark is a predictor, not a requirement.**'],
], [1.7, 2.4, 2.5]));
out.push(sp());
out.push(note('Teacher\'s note. Three things about this paper. First, the two declared emphases are deliberately harsh and deliberately announced. A concession that cost nothing and a load-bearing sentence that was improved in the second copy are the two faults Units 3 and 6 exist to prevent, and both of them feel like good writing while you commit them — which is why they cannot be marked gently. Every candidate was told, on their own paper, in bold, that these two things were being marked, and the fairness is in the announcement and not in the leniency. Second, the Writing paper will produce the lowest of the four marks for most of the class, and that is a property of the paper and not of the teaching: the examination\'s lengths are 40–50 and 120–140, and the course has been asking for 80-plus and 200–240 for six units. A candidate who writes a good 190-word report has done the course\'s task under the examination\'s rubric and must lose the length mark; say so plainly, and set timed 130-word tasks from now until Unit 12. Third, the Speaking paper\'s last mark — a fact that helps the other side — is the only thing in sixty marks that predicts anything. Candidates who volunteer one, unprompted, to an examiner, in the fifth minute of a speaking test, are candidates who will write papers that get acted on. Most will not score it at the half-way point. Record who did, and look again at the End-of-Book Test, where the same mark appears and where the proportion should have doubled. If it has not, the fault is in how 3.3 was taught and not in the candidates.'));
out.push(sp());
out.push(p('_Units 7–12 continue from Unit 6, and the Beirut question is answered in Unit 12._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Mid-Book Test · Answer Key');
module.exports = out;
