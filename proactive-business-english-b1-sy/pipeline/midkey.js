// Proactive Business English B1 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Answer Key
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('MID-BOOK TEST  ·  Answer Key and Marking'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition · Units 1–6_', { color: '7F7F7F' }));
out.push(box('How this test is marked', [
  '**60 marks: Reading 15 · Writing 15 · Listening 15 · Speaking 15.** ⚠ The candidate\'s result is the **average of the four percentages**, not the total — as in B1 Business Preliminary, where the four skills are scored separately and averaged. **Write the four separate scores on the paper and the average beside them.** A learner at 13/15/14/4 has 73 per cent on the total and 60 on the average, and the average is the true figure.',
  '⚠ **This paper marks two things no single unit marked**, and both are declared on the candidate\'s paper so that neither is a surprise. **The first is a figure where a figure belongs** — Units 4, 5 and 6 each put marks on a number, and this paper puts marks on its absence. **The second is _what you are not asking for_**, which appeared once, in 6.5, and is worth two of the nine marks in Writing Part 2.',
  '**Timing.** Reading 35 min · Writing 35 min · Listening about 20 min · Speaking about ten minutes in pairs. The Listening scripts are in the test paper and are read **twice**, at normal speed, by the teacher.',
  '⚠ **Mark Reading and Listening first, before you read anybody\'s writing.** They are objective, they take four minutes for a class of twelve, and they tell you whether a weak Writing paper is a writing problem or a comprehension problem — which is a different lesson next week.',
], C.grey, C.navy));

// ===================== READING =====================
out.push(h2('PAPER 1  ·  READING    (15 marks)'));
out.push(h3('Part 1  ·  Notices and short messages  (5 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'C', 'B', 'C']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q1 tests *against* — the preposition from 5.1 and 5.3 that carries the whole of the gate control. A learner who chooses B has read the notice backwards, which is the error the real procedure exists to prevent, and it is worth saying so when you hand the paper back.'));
out.push(note('⚠ Q3 is the 6.2 item. *At 250,000 and above, two* means a credit note **for exactly 250,000 needs two signatures**, and B is the answer a learner gives who read *below 250,000* and stopped. ⚠ Expect this to be the most-missed question in Part 1, and expect the learners who miss it to be certain they are right — the boundary, not the modal, is where the real-world confusion lives.'));
out.push(h3('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'A', 'B', 'B', 'C', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q7 is the discriminating item of the whole Reading paper. The text says *I cannot show that nobody telephoned him either* — so the statement that the writer **can** prove it is **wrong**, not *doesn\'t say*. A learner who answers C has treated an explicit admission of an evidence gap as an absence of information, which is precisely the distinction Unit 3 was written to teach.'));
out.push(note('⚠ Q9 is the only *doesn\'t say* on the paper. The text gives the eight days and the dates; it says nothing about what Mr Haffar **asked for**. ⚠ Learners who answer A have inferred a reasonable demand from a plausible situation, which is the Part 4 trap in the examination and is worth naming by its examination name.'));
out.push(note('Q10 rewards reading the last sentence: *the list of the 5th was the current list on the 5th*. The company says its own new control would not have prevented its own incident — which is rarer in real documents than in course books, and is the sort of sentence this course is training learners to write.'));
out.push(h3('Part 3  ·  A longer text  (5 marks)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'A', 'C', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q14 is the hardest question on the paper and the one most worth discussing afterwards. The page undercuts its own flattering conclusion, and the answer is that the flattering explanation may simply not be the true one. ⚠ Learners frequently choose *to avoid naming anybody*, because they have learned from Unit 5 that documents remove people — the point here is the opposite, and the two must not be confused.'));
out.push(sp());
out.push(box('Reading — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'reads for the gap as well as the content', 'give them the longer Part 5 texts from Unit 10 onwards'],
    ['**10–12**', 'secure on content, loses the evidence questions', 'drill Q7-type items: an admitted gap is a fact, not a silence'],
    ['**7–9**', 'reads the sentence, not the paragraph', 'go back to 3.2 and 5.5 and read the two-column page aloud'],
    ['**0–6**', 'is reading every word and running out of time', 'timed practice on Part 1 only, five notices in four minutes'],
  ], [0.8, 2.2, 3]),
], C.lblue, C.navy));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (15 marks)'));
out.push(h3('Part 1  ·  An internal note  (6 marks)'));
out.push(sample('Sample answer (42 words)', [
  'Abu Yasser — step 4 requires the load to be counted against the order and the sheet signed by whoever counted. It does not say what to do when there is nobody to count. Until it does: stop the load and telephone me. That is mine, not the procedure\'s.',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['**Content**', '3', 'what the step requires (1) · the case it does not cover (1) · **who to tell** (1)'],
  ['**Ownership**', '1', '⚠ the interim instruction marked as the writer\'s own, not as a rule'],
  ['**Language**', '2', 'present passive or *must / must not* used correctly (1) · accurate enough to act on (1)'],
], [1.1, 0.7, 4.2]));
out.push(note('⚠ The ownership mark is the one that makes this task B1 rather than A2, and it is the one most often lost. A note that invents a rule — *the procedure says you should telephone me* — loses it; a note that says *that is mine, not the procedure\'s* earns it. ⚠ The difference is not politeness; it is that the second can be corrected by whoever owns the procedure and the first cannot, because it will have become the procedure by Thursday.'));
out.push(note('**Length.** 35 to 45 words. Deduct nothing for 46 to 50 but write the count on the script; below 30 or above 55, deduct one content mark, because the task is partly the length. ⚠ Most learners will write 60 and cut. Praise the cutting — the sentence they delete is almost always the one the reader already knew.'));
out.push(h3('Part 2  ·  A request for authorisation  (9 marks)'));
out.push(sample('Sample answer (76 words)', [
  'Mr Nassif — would it be all right if the yard purchase-order ceiling were written at 60,000? Ninety-one yard orders in nine months: sixty-four under 40,000 and twenty-seven between 40,000 and 60,000. Every one of the twenty-seven came to me, every one was signed the same day and not one was refused. The largest of the year was 71,000, which is the one I would still want to see. I am not asking for a payment authority or a second card on the account.',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['**The figure**', '2', '⚠ a figure in the ask itself (1) · the figure **derived** from the case rather than chosen (1)'],
  ['**The counted case**', '3', 'two numbers (2) · three or more, or a number that is a ratio (3)'],
  ['**Not asking for**', '2', '⚠ one thing excluded (1) · two or more, or *and nothing else changed* (2)'],
  ['**Language**', '2', '*Would it be all right if* + past, or *I should like to propose* (1) · accuracy (1)'],
], [1.4, 0.7, 3.9]));
out.push(note('⚠ **A request with no figure in it scores 0 of the first 2 and cannot pass this task**, however fluent. This is the paper\'s declared position and it is printed on the candidate\'s own paper. ⚠ Say it again before they write: *I would like a higher limit* is correct English and is not a request.'));
out.push(note('⚠ **The second figure mark is for derivation.** *60,000, because the largest of the year was 71,000 and that is the one I would want to see* earns it; *60,000* with three numbers elsewhere does not. A derived figure gets agreed and a round number gets negotiated, and that is the whole of 6.5.'));
out.push(note('**The two marks for _what I am not asking for_** are the second declared test-only emphasis. ⚠ It is taught once, in 6.5, and it is worth two of nine here because it is the move that gets requests granted: a reader of any request is looking for what else is in the envelope, and two lines stop them looking. ⚠ Accept *and nothing else changed* on its own for both marks.'));
out.push(note('**The awkward reason is NOT marked here**, and that is deliberate. 6.5 teaches it and the Speaking paper marks it, because in a sixty-to-eighty-word written request it does not reliably fit, and marking a move the format cannot hold teaches learners to pad.'));
out.push(sp());
out.push(box('Writing — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'writes with figures and bounds the ask', 'Unit 7 onwards; start marking the evidence paragraph'],
    ['**10–12**', 'has the figures, loses the exclusions', 're-read 6.5\'s stage 5 and write the last paragraph only, five times'],
    ['**6–9**', 'fluent and vague — adjectives where numbers belong', '⚠ the hard case: 4.1 and 6.3 again, and mark nothing but numbers'],
    ['**0–5**', 'cannot yet hold the format', 'Part 1 only for a fortnight, 40 words, three content points'],
  ], [0.8, 2.3, 2.9]),
  '⚠ **The 6–9 band is the one to watch and it will be the largest.** These are often the most fluent writers in the room, and fluency is what has let them avoid committing to a number for years. ⚠ Do not praise the English and then mention the figures; mark the figures first and let the English look after itself.',
], C.lblue, C.navy));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (15 marks)'));
out.push(h3('Part 1  ·  Completing a note  (7 marks — one per gap)'));
out.push(table(['16', '17', '18', '19', '20', '21', '22'], [[
  'six', 'three', 'the order', 'whoever counted (by name)', 'the signature', 'stop the load', 'tell the coordinator',
]], [0.7, 0.7, 1, 1.5, 1, 1.1, 1.4]));
out.push(note('⚠ Gap 18 scores only for **the order**. *The picking list* is the distractor the script explicitly corrects — *against the order, not the picking list* — and a learner who writes it has heard the first half of the sentence. ⚠ This is the same fault as Reading Q1 and the two should be marked together: a learner who missed both has a listening-and-reading problem with *against*, which is a ten-minute fix, not a skills problem.'));
out.push(note('Gap 19: accept *whoever counted it*, *the person who counted*, *the counter, by name*. ⚠ Do **not** accept *Abu Yasser* — the script says *whoever counted it*, and a name is the error Unit 5 spends six cycles on. Mark it wrong and explain why in one line.'));
out.push(note('Gap 22: accept *tell the coordinator*, *tell Nour*, *tell whoever is on the counter*. ⚠ The gap exists because Abu Yasser asked for it in 5.7, and it is worth telling the class that the clause they are being tested on was written by the person it falls on.'));
out.push(h3('Part 2  ·  Four short conversations  (8 marks)'));
out.push(table(['Q', '23', '24', '25', '26', '27', '28', '29', '30'], [['Answer', 'A', 'C', 'B', 'A', 'C', 'B', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q26 is the item that separates the class. Nour says *what I said was half an instruction, so the six weeks since are mine and not yours* — the fault is **her own**. Learners who answer B have heard who did the thing rather than who is responsible for it, which is the 3.2 and 6.2 distinction arriving in a listening paper. ⚠ Play that exchange a third time after marking.'));
out.push(note('Q28: the reason is that *the next person who asked would get it too* — not the law and not a doubt about Mr Ayoub. ⚠ The distractor A is attractive because learners expect a rule to be legal; 6.1 is what prevents it, and a wrong answer here is a Unit 6 gap rather than a listening gap.'));
out.push(sp());
out.push(box('Listening — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'hears the correction inside the sentence', 'nothing; give them the Part 2 role in pair work'],
    ['**10–12**', 'hears content, misses *not … but*', 'drill the corrective pattern: *against the order, not the list*'],
    ['**7–9**', 'hears the first half of long sentences', 'the gap-fill scripts read once at half speed, then at speed'],
    ['**0–6**', 'is translating rather than listening', '🔊 the Track 5.2 and 6.4 weak-form drills daily, two minutes'],
  ], [0.8, 2.2, 3]),
], C.lblue, C.navy));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (15 marks)'));
out.push(p('**Part 1 · Your job and your authority (5 marks)**'));
out.push(sample('What a 5-mark Part 1 sounds like', [
  '"I am the administration coordinator for both sites and I report to Mr Ayoub. I am authorised to sign credit notes up to 250,000 and purchase orders up to 500,000, subject to a countersignature above either. I may not sign a payment out at all, because I raise the paperwork — Nadia signs those. And the figure nobody has written down is the counter discount, where I work to about ten per cent and nobody has ever said ten."',
]));
out.push(note('⚠ **Three of the five marks are for figures and names, and they are the easy three to withhold.** *It depends on the amount* and *small things* earn nothing at all, and a candidate who says them twice should be told so between Part 1 and Part 2 rather than at the end. ⚠ That is not coaching mid-examination; it is the same information the paper gives them in writing.'));
out.push(p('**Part 2 · A conversation (6 marks)**'));
out.push(table(['The move', 'Mark', 'What counts'], [
  ['The owner and the date', '1', '*Mr Ayoub set it in September* — a name and a month'],
  ['The candidate\'s own view', '1', '*I think it is wrong* or *I think it is right* — either earns it'],
  ['⚠ **And that they said so**', '1', '*I said so in writing on 24 August* — and nothing else does'],
  ['The rule still stands', '1', '*And it is still thirty days* — stated, not implied'],
  ['The route upwards', '1', '*Write to him, and I will send you what I sent him*'],
  ['Something that is theirs', '1', 'any real thing within their own authority'],
], [2.2, 0.6, 3.2]));
out.push(note('⚠ **The third mark is the paper\'s own test and it is not a matter of wording.** A candidate who has learned the phrases but not the idea will produce five of the six moves fluently and skip that one, because it is the only move that commits them to something. ⚠ Nothing substitutes for it: sympathy does not, and *I understand how you feel* actively does not.'));
out.push(note('⚠ **The second mark is earned by agreeing as well as disagreeing.** A candidate who says *I think it is right, and here is why* has done the harder version of 6.6 and should get full credit. Examiners who have taught the unit tend to expect dissent, and the unit does not require it.'));
out.push(p('**Part 3 · Asking upwards (4 marks)**'));
out.push(table(['The move', 'Mark', 'What counts'], [
  ['The figure', '1', 'a number in the ask itself'],
  ['Two counted reasons', '1', 'two, with numbers; one earns nothing'],
  ['⚠ **The reason that does not help them**', '1', 'a real cost to themselves, stated unprompted'],
  ['What they are **not** asking for', '1', 'one exclusion, or *and nothing else changed*'],
], [2.6, 0.6, 2.8]));
out.push(note('⚠ The unhelpful reason is marked here and **not** in Writing Part 2, which is the one asymmetry in this paper and is deliberate: eighty written words cannot reliably hold it, and three spoken minutes can. ⚠ Tell the class that, because a learner who notices the asymmetry and is not told will conclude the mark scheme is careless.'));
out.push(sp());
out.push(box('⚠ Three things to say when you hand this paper back', [
  '**1 · Give them the four scores and the average, in that order.** The average is the number that means something and the four are the diagnosis. ⚠ A class shown only a total will optimise the total, which is exactly the habit the four-skill average exists to break.',
  '**2 · Name the two test-only emphases out loud.** The figures and *what I am not asking for*. Both were printed on their paper, both were taught in Units 4 to 6, and both will be marked again in the End-of-Book Test. ⚠ A learner who discovers a mark scheme after the fact learns to distrust it; a learner who was told twice learns the thing itself.',
  '**3 · Say which questions the class as a whole failed**, and put the number on the board. If Q7 and Q26 both went badly, the gap is not reading or listening — it is the distinction between *who did it* and *who is responsible*, and Units 3, 5 and 6 all taught it. ⚠ That is one lesson next week, not three.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 15', '    / 15', '    / 15', '    / 15', '    %']], [1, 1, 1, 1, 1]),
  '⚠ The **average**, not the total. 13 · 15 · 14 · 4 is 73 per cent of the total and 60 per cent averaged, and the second figure is the one to write on the paper and the one B1 Business Preliminary would report.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Mid-Book Test · Answer Key');
