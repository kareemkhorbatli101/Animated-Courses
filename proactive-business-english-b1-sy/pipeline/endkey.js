// Proactive Business English B1 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Answer Key
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('END-OF-BOOK TEST  ·  Answer Key and Marking'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition · Units 1–12_', { color: '7F7F7F' }));
out.push(box('How this test is marked', [
  '**100 marks: Reading 25 · Writing 25 · Listening 25 · Speaking 25.** ⚠ The candidate\'s result is the **average of the four percentages**, not the total — as in B1 Business Preliminary. **Write the four separate scores on the paper and the average beside them.**',
  '⚠ **And compare each paper with the same paper in the Mid-Book Test rather than comparing totals.** A learner who has gone 13/15 → 22/25 on Reading and 10/15 → 11/25 on Writing has improved on the total and collapsed on Writing, and the total will hide it. **The paper that has moved least is next term\'s work.**',
  '⚠ **Three things are marked here that no single unit marked**, all three declared on the candidate\'s paper. **What would change your mind** (Unit 9, Writing Part 1). **The strongest point against your own recommendation** (Unit 12, Writing Part 2). And **a figure where a figure belongs** (Units 4, 6, 7 and 8, both tasks).',
  '**Timing.** Reading 45 min · Writing 45 min · Listening about 30 min · Speaking about twelve minutes in pairs. The Listening scripts are in the test paper and are read **twice** by the teacher.',
], C.grey, C.navy));

// ===================== READING =====================
out.push(h2('PAPER 1  ·  READING    (25 marks)'));
out.push(h3('Part 1  ·  Notices and short messages  (5 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'C', 'A', 'B', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q2 is the Unit 6 boundary item and will be the most-missed in Part 1, exactly as it was in the Mid-Book Test. *At 250,000 and above, two* means a credit note **for exactly 250,000** needs two signatures. A learner who answers A read *below 250,000* and stopped.'));
out.push(note('⚠ Q3 is the Unit 11 comma item with the comma **correctly absent**: *any item which is faulty* promises the faulty ones. ⚠ A learner who answers B has over-corrected — the trap the key warned about three times in Unit 11 — and should be shown that the notice is right as it stands.'));
out.push(note('⚠ Q5 rewards reading the whole sentence. **A is wrong because the writer has not checked** — *what I have not checked is whether…* — and C is right because the hedge names its own unchecked thing, which is Unit 9.5\'s repair clause.'));
out.push(h3('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'A', 'B', 'B', 'C', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q7 is **Wrong** and not *doesn\'t say*: the text states *I have not been to look at anybody\'s machine*. ⚠ An explicit statement that something was **not** done makes the opposite claim wrong. This is the third time this item type has appeared (Mid-Book Q7, Unit 9.7 Q2) and a class that still answers C has a reading habit rather than a comprehension gap.'));
out.push(note('⚠ Q8 is **Wrong** and is the Unit 7 item: the rain is named as the **immediate cause**, and the contributory factor is the absence of cover. ⚠ A learner who answers A has the categories and not the text.'));
out.push(h3('Part 3  ·  Which document decides it?  (5 marks)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'A', 'C', 'B', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q11 is the Unit 11.7 item: whether a Saturday claim was in time is decided by the **definition of a working day**, not by any claims clause. ⚠ Learners look for a claims document and there is none, which is the whole point — *every condition is made of the words on that page*.'));
out.push(note('⚠ Q15 is the discriminating item: Abu Yasser\'s purchase-order authority is **to 150,000**, so 200,000 is above it and the matrix decides. ⚠ A learner who answers C has gone to the procedure because the question mentions packaging; the question is about **authority** and not about goods.'));
out.push(h3('Part 4  ·  A longer text  (5 marks)'));
out.push(table(['Q', '16', '17', '18', '19', '20'], [['Answer', 'C', 'B', 'A', 'C', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q16 and Q18 both test moves rather than content. **Q16:** the objections go first so that the argument reads as a response to them — Unit 12.3. **Q18:** the quote is split so that 1.9 million is decided **twice** — Unit 12.3 again, and the commonest wrong answer is *to reduce the total*, which the text does not claim.'));
out.push(h3('Part 5  ·  Multiple-choice cloze  (5 marks)'));
out.push(table(['Q', '21', '22', '23', '24', '25'], [['Answer', 'B', 'C', 'B', 'A', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q21, Q22 and Q23 are one item in three costumes — all three take **on** — and should be marked as a group. A learner who gets two of three has guessed, and the drill is the three phrases together, because the preposition is fixed and there is nothing to work out.'));
out.push(sp());
out.push(box('Reading — band table (25 marks)', [
  table(['Marks', 'What it means', 'What to do next term'], [
    ['**22–25**', 'reads for the move as well as the content', 'Book 2 Part 5 and Part 7 items from Unit 13'],
    ['**18–21**', 'secure, loses the *wrong* / *doesn\'t say* distinction', 'drill Q7-type items only: an admitted omission is a fact'],
    ['**13–17**', 'reads the sentence, not the document', 'Part 3 practice: which document decides it?'],
    ['**0–12**', 'running out of time rather than failing to understand', 'timed Part 1 only, five notices in four minutes, twice a week'],
  ], [0.8, 2.4, 3]),
], C.lblue, C.navy));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (25 marks)'));
out.push(h3('Part 1  ·  A diagnosis a colleague must act on  (10 marks)'));
out.push(sample('Sample answer (41 words)', [
  'Hala — on the two torn rolls: I can say both are batch 8814, because the two sound ones are 8790 and 8803. I cannot say it is the batch. What would change my mind is another 8814 failing — if one does, stop using them and tell me.',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['**What you can say**', '3', 'the finding (1) · ⚠ **the evidence in a *because* clause** (2)'],
  ['**What you cannot say**', '2', 'the limit of the finding, stated as a limit and not as a hedge'],
  ['⚠ **What would change your mind**', '3', 'an overturning condition (2) · and what to do if it happens (1)'],
  ['**Length and accuracy**', '2', '35 to 45 words (1) · accurate enough to act on (1)'],
], [1.6, 0.7, 3.7]));
out.push(note('⚠ **The three marks for the overturning condition are this paper\'s version of the series\' running demand.** A diagnosis with no *what would change my mind* scores at most 7 of 10, however well written — ⚠ **because a diagnosis without one will be acted on as though it were settled**, which is exactly what Unit 9 was for and what is printed on the candidate\'s own paper.'));
out.push(note('⚠ **Distinguish a limit from a hedge for the second two marks.** *I cannot say it is the batch* states the limit of the finding and scores; *it may or may not be the batch* states nothing and scores 0. ⚠ In forty words the two look alike, and only one of them tells the reader what to do.'));
out.push(note('⚠ **Length.** 35 to 45. Deduct nothing for 46 to 50 but write the count on the script; below 30 or above 55, deduct the length mark. ⚠ Most candidates will write 55 and cut, and the sentence they cut should be the evidence they already share with the reader — not the overturning condition.'));
out.push(h3('Part 2  ·  A recommendation  (15 marks)'));
out.push(sample('Sample answer (78 words)', [
  'Mr Nassif — the strongest thing against my recommendation is that the van is nine years old and this may not be the last repair. I am still recommending the repair at 1.9 million, because the hire is 600,000 a month and even eight months of repair is 240,000 a month. I am not asking for a decision this month: the quote holds sixty days. What would change the answer is the engine coming apart.',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['⚠ **The point against, first**', '4', 'a point against (2) · ⚠ **the strongest one, and placed first** (2)'],
  ['**The recommendation**', '3', 'stated without a hedge (2) · ⚠ no escape clause (1)'],
  ['**One reason, with a figure**', '4', 'a reason (2) · **a figure** (2)'],
  ['⚠ **Not asking for / what would change it**', '2', 'either one; both is not worth more'],
  ['**Language and length**', '2', 'accuracy (1) · 60 to 80 words (1)'],
], [1.9, 0.7, 3.4]));
out.push(note('⚠ **The two marks for placing the point against *first* are separate from the two for having one**, and that is deliberate. A candidate who buries it under *risks* at the end has produced a hedge: ⚠ *a reader who meets the objections first reads the argument as a response to them, and one who meets them afterwards reads them as a hedge.* **Mark the position, not just the presence.**'));
out.push(note('⚠ **A recommendation with no figure scores 0 of the four reason marks**, however fluent. This is the fourth time in Book 1 that figures have carried marks — Units 4, 6, 7 and 8 — and it is printed on the candidate\'s paper. ⚠ Say it again before they write: the point is not to catch them.'));
out.push(note('⚠ **Deduct the escape-clause mark for *if we can afford it*, *if you agree* and *if possible*.** Unit 12.1\'s finding is that these do not prevent a no and make the view not worth having, and in several cases the hedge **contradicts the candidate\'s own figures** — which is worth a sentence of feedback rather than silence.'));
out.push(sp());
out.push(box('Writing — band table (25 marks)', [
  table(['Marks', 'What it means', 'What to do next term'], [
    ['**22–25**', 'writes with figures, concedes first, states what would overturn', 'Book 2 from Unit 13; start marking the export reader'],
    ['**17–21**', 'has the figures, loses the position of the concession', 're-read 12.3 stage 5 and write the top paragraph only, five times'],
    ['**11–16**', 'fluent and unnumbered — adjectives where figures belong', '⚠ the hard band: 4.1, 6.3 and 8.3 again, marking nothing but numbers'],
    ['**0–10**', 'cannot yet hold the format', 'Part 1 only for a month: finding, limit, overturning condition'],
  ], [0.8, 2.6, 2.8]),
  '⚠ **The 11–16 band will be the largest and it contains the most fluent writers in the room.** Fluency is what has let them avoid committing to a number for years. ⚠ Do not praise the English and then mention the figures: **mark the figures first and let the English look after itself.**',
], C.lblue, C.navy));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (25 marks)'));
out.push(h3('Part 1  ·  Completing a note  (10 marks — one per gap)'));
out.push(table(['26', '27', '28', '29', '30'], [[
  'about 40 cm (forty centimetres)', 'ninety (90 cm)', 'after (wrapping)', 'whose machine it was', 'sixty-one (61)',
]], [1.6, 1, 1, 1.6, 1]));
out.push(table(['31', '32', '33', '34', '35'], [[
  'forty-three (43)', '250,000', 'a payment-out authority', 'what happens to orders taken before a price change', 'Nadia',
]], [1, 1, 1.5, 2.4, 0.8]));
out.push(note('⚠ Gap 28 scores only for **after**. A learner who writes *before* has reversed the inference that the whole of Unit 9.1 rests on — *the wrap is torn at the tine marks and nowhere else* — and this is worth replaying rather than simply marking.'));
out.push(note('⚠ Gap 29 scores for **whose machine** in any wording. ⚠ Do **not** accept *the forklift owner\'s name* alone if it implies the speaker knows it; the point is the refusal, not the gap in knowledge.'));
out.push(note('⚠ Gap 33: accept *a payment-out authority*, *payment out*, or *the countersignature changing*. ⚠ A learner who writes *nothing* has heard that she is not asking for much and missed the Unit 6.5 move, which is a named exclusion.'));
out.push(h3('Part 2  ·  Five short exchanges  (15 marks)'));
out.push(table(['Q', '36', '37', '38', '39', '40', '41', '42', '43'], [['Answer', 'A', 'C', 'A', 'B', 'C', 'A', 'B', 'C']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(table(['Q', '44', '45', '46', '47', '48', '49', '50'], [['Answer', 'B', 'B', 'B', 'A', 'C', 'B', 'A']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Q38 is the item that separates the class, as it did in the Mid-Book Test. *What I said was half an instruction, so the six weeks since are mine and not yours* — the fault is **her own**. ⚠ A learner who answers B has heard who did the thing rather than who is responsible for it, which is the Unit 3, 5 and 6 distinction arriving in a listening paper.'));
out.push(note('⚠ Q41 needs both halves of the exchange: **400,000, once, flat since September.** A learner who hears only *400,000* will answer B, which is the figure the original paper implied and the whole point of the correction.'));
out.push(note('⚠ Q49 is **eleven years**, and it is not decoration. Abu Yasser says *put it in with the eleven years as well* in Unit 12.7 — ⚠ **the number of years is part of the finding**, because it tells a meeting how long it has been deciding without that fact.'));
out.push(sp());
out.push(box('Listening — band table (25 marks)', [
  table(['Marks', 'What it means', 'What to do next term'], [
    ['**22–25**', 'hears the correction inside the sentence', 'nothing; give them the Part 2 role in pair work'],
    ['**18–21**', 'hears content, misses *not … but*', 'drill the corrective pattern: *against the order, not the list*'],
    ['**13–17**', 'hears the first half of long sentences', 'the gap-fill scripts at half speed, then at speed'],
    ['**0–12**', 'translating rather than listening', '🔊 the weak-form drills from Tracks 5.2, 6.4 and 10.2, daily'],
  ], [0.8, 2.4, 3]),
], C.lblue, C.navy));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (25 marks)'));
out.push(p('**Part 1 · Your job, your authority and your evidence (8 marks)**'));
out.push(sample('What an 8-mark Part 1 sounds like', [
  '"I am authorised to sign credit notes up to 250,000 and purchase orders up to 500,000, subject to a countersignature above either. The order is taken at the counter; a picking list is typed **from the order**; the goods are picked **against the list**; the load is counted **against the order**. This year I have written nine one-page procedures, all nine corrected by somebody who had never done the job. And the figure nobody has written down is the counter discount, where I work to about ten per cent."',
]));
out.push(note('⚠ **Three of the eight marks are for a figure or a name wherever one belongs, and they are the easy three to withhold.** *Small amounts* and *it depends* earn nothing at all. ⚠ A candidate who says either twice should be told so between Part 1 and Part 2 — that is not coaching, it is the same information their paper gives them in writing.'));
out.push(note('⚠ **The two marks for *what would change my mind* are not a repeat of Writing Part 1.** Here they are spoken, under question, about the candidate\'s own deduction — and that is harder, because the obvious move under pressure is to defend. **Award them for any real overturning condition, including a trivial one.**'));
out.push(p('**Part 2 · A conversation (9 marks)**'));
out.push(table(['The move', 'Marks', 'What counts'], [
  ['Lines read, not summarised', '2', 'the actual sentences; ⚠ a paraphrase scores 0 — the thing the named person fears is the wording'],
  ['Which sentence their name is not in', '1', '*your name is not in that sentence and the printer is*'],
  ['⚠ **The concession, complete**', '2', '*that is true and I agree with it completely* — ⚠ **a *but* after it scores 1**'],
  ['⚠ **The question, then silence**', '2', 'asks what they have got wrong (1) · ⚠ **and stops talking** (1)'],
  ['⚠ **What the other supplies, with how long**', '2', 'the undocumented fact (1) · **and the number of years** (1)'],
], [2.2, 0.6, 4.2]));
out.push(note('⚠ **The *but* deduction is deliberate and should be explained when the mark is given.** *That is true and I agree with it completely, **but*** undoes the concession in one word: the house form is *and I am still recommending*. ⚠ It is the single commonest fault in this part and it is invisible to the candidate.'));
out.push(note('⚠ **The silence mark is real and is worth protecting.** A candidate who asks *is there anything I have got wrong?* and then keeps talking has asked nothing, and the examiner should wait rather than rescue them. ⚠ This is also the mark that produces the whole of the last row: **nothing is supplied if nobody stops.**'));
out.push(p('**Part 3 · A position (8 marks)**'));
out.push(table(['The move', 'Marks', 'What counts'], [
  ['Both hands', '2', 'each characterised, not merely listed'],
  ['⚠ **A third thing, in neither hand**', '3', '⚠ **the single largest item in this paper**; an *on balance* with no new noun scores 0 — **that is counting**'],
  ['The strongest point against', '2', 'conceded, not dismissed'],
  ['⚠ **Where they would be if it fell through**', '1', '*if she changes her mind my recommendation changes with it*'],
], [2.2, 0.6, 4.2]));
out.push(note('⚠ **The test for the third thing takes four seconds and it is the same shape as Unit 11\'s comma test:** does the *on balance* contain a noun that was not already in one of the hands? ⚠ If not, the candidate counted, and the three marks are not available however fluent the paragraph.'));
out.push(note('⚠ **Accept the honest undecided for the full three** where the candidate names what would settle the question **and** who could find out. *I am undecided, and the thing that would settle it is whether Fadi can do the Harasta drops before eleven* is a position about what the question is, and it is better than a forced *on balance*. ⚠ This is stated in the Unit 12 key and should not be a surprise to anybody marking.'));
out.push(sp());
out.push(box('⚠ Four things to say when you hand this paper back', [
  '**1 · Give them the four scores, the average, and the Mid-Book four beside them.** ⚠ Paper by paper, not totals. A learner who has improved on the total and collapsed on Writing needs to see that, and the total is designed to hide it.',
  '**2 · Name the three test-only emphases out loud.** The overturning condition, the point against placed first, and figures. ⚠ All three were printed on their paper, all three were taught, and **all three will be marked again in Book 2** — where the reader cannot telephone the warehouse and every one of them matters more.',
  '**3 · Say which questions the class as a whole failed**, and put the number on the board. ⚠ If Q7 and Q38 both went badly, the gap is not reading or listening: it is the distinction between **who did it** and **who is responsible**, which Units 3, 5, 6 and 10 all taught. **That is one lesson next week, not four.**',
  '**4 · And one thing that is not a mark.** ⚠ Ask them which of the ten documents listed at the end of Unit 12 their own workplace now has that it did not have in September. **In most classes the answer is one or two**, and those are worth more than any figure on this paper.',
], C.lorange, C.orange));
out.push(sp());
out.push(pb());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 25', '    / 25', '    / 25', '    / 25', '    %']], [1, 1, 1, 1, 1]),
  '⚠ The **average**, not the total — as B1 Business Preliminary would report it.',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The whole-book band table, for a report to an employer', [
  table(['Average', 'What this learner can now do at work', 'What they cannot yet do'], [
    ['**85–100**', 'Writes the ten documents of Book 1 unaided, with figures, sources and overturning conditions. Can chair a decision, close it in four elements and circulate it the same hour. Asks the person who does the work.', 'The export reader: a document written for somebody who cannot telephone the warehouse. **That is Book 2.**'],
    ['**70–84**', 'Writes most of the ten with a model beside them. Reliable on figures and sources; loses the overturning condition and the conceded objection under time pressure.', 'Writing to a reader who will not ask a clarifying question. ⚠ **Ready for Book 2 with the Unit 9 and 12 keys to hand.**'],
    ['**55–69**', 'Can produce a procedure page, a note of a call and minutes. Understands the moves and reaches for them after the event rather than during it.', 'Working at speed. ⚠ **Repeat Units 4, 6, 8 and 12 before Book 2** — they are the four that carry figures.'],
    ['**0–54**', 'Can read and follow the documents in this book and act on them correctly, which is not nothing and should be said.', 'Producing them. ⚠ **Book 1 again, Lesson B only**, with the same workplace documents each time.'],
  ], [0.9, 3.2, 2.6]),
  '⚠ **This table is for an employer and it is written to be shown to one.** Nothing in it says *good* or *weak*: it says what the person can do at a desk on Monday and what they cannot. ⚠ **A learner in the 0–54 band who can read and act on a procedure page correctly has gained something real**, and an employer told only a percentage will not know that.',
], C.lyellow, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · End-of-Book Test · Answer Key');
