// Proactive Business English B1 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18) — Answer Key
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('MID-BOOK TEST  ·  Answer Key and Marking'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition · Units 13–18_', { color: '7F7F7F' }));
out.push(box('How this test is marked', [
  '**60 marks: Reading 15 · Writing 15 · Listening 15 · Speaking 15.** ⚠ The candidate\'s result is the **average of the four percentages**, not the total — as in B1 Business Preliminary, where the four skills are scored separately and averaged. **Write the four separate scores on the paper and the average beside them.**',
  '⚠ **This paper marks two things no single unit marked**, and both are declared on the candidate\'s paper. **The first is the strength of a verb** — whether what the candidate has written commits them to what they mean it to, which Units 13, 14 and 18 approached from three directions and none of them marked directly. **The second is a date for the next contact**, as against a date for the thing: ⚠ **the one promise in any letter that cannot fail**, and it is worth two of the nine marks in Writing Part 2.',
  '**Timing.** Reading 35 min · Writing 35 min · Listening about 20 min · Speaking about ten minutes in pairs. The Listening scripts are in the test paper and are read **twice**, at normal speed, by the teacher.',
  '⚠ **Mark Reading and Listening first, before you read anybody\'s writing.** They are objective, they take four minutes for a class of twelve, and they tell you whether a weak Writing paper is a writing problem or a comprehension problem.',
], C.grey, C.navy));

// ===================== READING =====================
out.push(h2('PAPER 1  ·  READING    (15 marks)'));
out.push(h3('Part 1  ·  Notices and short messages  (5 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'B', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ **Every answer in Part 1 is B and the class should be told so after they have finished.** It makes marking a four-second job and it makes a point worth making once: a learner who changed a correct answer because *they cannot all be B* has learned something about tests and nothing about reading. ⚠ **Expect one or two to have done it.**'));
out.push(note('⚠ Q1 is the cut-off item from 13.5 and it is the most-missed of the five. *Documents and delivery close 18.00 on the 13th* is the working deadline and **06.40 on the 14th is the headline**; a learner who answers A has read the big figure. ⚠ Q2 is the presence-against-correctness distinction that Unit 15 was built on — *carry the code on the order* tests whether the stencils are **right**, not whether they are **there**.'));
out.push(h3('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)'));
out.push(table(['Q', '6', '7', '8', '9', '10'], [['Answer', 'A', 'B', 'C', 'A', 'B']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q7 is the discriminating item of the Reading paper. The post-mortem says ⚠ *a note of 14 November, initialled by me, says which set is at the second store — so this was not a failure of information*, which makes the statement that the information had never been communicated **wrong** and not *doesn\'t say*. ⚠ A learner who answers C has treated an explicit statement as an absence.'));
out.push(note('⚠ Q8 is the only *doesn\'t say* and it is the Part 4 trap by its examination name: the text says what the error cost the customer and says **nothing about what she asked for.** ⚠ Learners who answer B have remembered Unit 15, where she refused a discount — **that is in a different document and it is not in this text.** Mark it hard and explain it, because inferring from the course rather than from the page is the commonest Part 4 error at B1.'));
out.push(note('Q10 is arithmetic in prose: about two hours in November against about seven hours plus 140,000 and two days of a customer\'s time. ⚠ **Preventing it would have cost less**, so the statement is **wrong**.'));
out.push(h3('Part 3  ·  A longer text  (5 marks)'));
out.push(table(['Q', '11', '12', '13', '14', '15'], [['Answer', 'B', 'B', 'B', 'B', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q13 is the one worth discussing when the papers go back. *He said there would be no problem* about something physically impossible ⚠ **does not make him dishonest; it makes his dates unusable in a plan** — and A is the answer a learner gives who has read a character judgement into a statement about usability. **The distinction is 16.5\'s and it is the difference between a libel and a finding.**'));
out.push(note('⚠ Q15 is **A** and it is the whole of 16.7: the supervisor had never been shown a comparison. ⚠ Learners choose C because the question says *not in any column* and C mentions the quotation — **but the text says *neither is in any quotation and neither was in any column***, which rules C out in six words.'));
out.push(sp());
out.push(box('Reading — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'distinguishes a headline from a cut-off and a judgement from a finding', 'give them Part 5 and Part 7 from Units 18 and 14'],
    ['**10–12**', 'secure on content, loses the *doesn\'t say* items', '⚠ drill Q8-type items: what the course said is not what this page says'],
    ['**7–9**', 'reads the big figure and the strong word', 'go back to 13.5 and 16.5 and read the small print aloud'],
    ['**0–6**', 'reading every word and running out of time', 'timed practice on Part 1 only, five notices in four minutes'],
  ], [0.8, 2.2, 3]),
], C.lblue, C.navy));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (15 marks)'));
out.push(h3('Part 1  ·  An internal note  (6 marks)'));
out.push(sample('Sample answer (42 words)', [
  'Lina — on Thursday watch line three, the marking: the stencils come from the other site and the press runs on the generator. The one that would be worst is line eight, the port. If the stencils are not on the bench by two, telephone Hala — not the customer.',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['the line to watch, with why', '2', 'a line **and** a reason; a line alone earns 1'],
  ['⚠ **the line to fear, named separately**', '2', '⚠ **a different line, or an explicit statement that it is the same line this week**'],
  ['an hour and a name', '1', '*by two, telephone Hala* — ⚠ *tell somebody* earns nothing'],
  ['35 to 45 words, counted', '1', 'the count written at the end and correct within two'],
], [2.2, 0.6, 3.2]));
out.push(note('⚠ **The two marks for the line to fear are the Part.** A note that names one line has answered half the task, however well written, ⚠ **because the whole of 13.7 is that the line you watch and the line you fear are different lines and a page cannot rank its own.** ⚠ **Give both marks to a candidate who writes *the one to watch and the one to fear are the same line this week*** — that is the harder observation and it is almost always false, so it has been thought about.'));
out.push(h3('Part 2  ·  A reply that has been delayed  (9 marks)'));
out.push(sample('Sample answer (78 words)', [
  'Dear Ms Tannous, yes — we can supply a hundred cartons. I am sorry to have taken nine days to reply. The lead time is four weeks from order, and the price depends on our supplier\'s break at five hundred, which I will confirm on Friday the 14th. If you need them sooner we can send two hundred from stock first. ⚠ **I will telephone on Friday whether or not I have the price.**',
]));
out.push(table(['', 'Marks', 'What earns them'], [
  ['⚠ **the answer in the first line**', '3', '⚠ **an answer, even an incomplete one** — *yes, and the lead time is four weeks*. A first line that explains the delay earns 0 of the 3'],
  ['the apology, one clause, no reason', '2', '*I am sorry to have taken nine days* — ⚠ **a sentence of reasons loses both**'],
  ['⚠ **a date for the next contact**', '2', '⚠ ***I will telephone on Friday whether or not I have the price*** — a date for the **thing** earns 0 of these 2'],
  ['something the reader can act on', '1', 'an interim: two hundred from stock, a range, a condition'],
  ['60 to 80 words, counted', '1', 'the count written at the end and correct within two'],
], [2.2, 0.6, 3.2]));
out.push(note('⚠ **The two marks for the next-contact date are what this paper exists for.** A date for the thing can fail; ⚠ **a date for a telephone call cannot**, and it is the only undertaking in a delayed reply that the writer fully controls. ⚠ Mark it strictly: *I will confirm the price on Friday* is a date for the **thing** and earns nothing here, and *I will telephone on Friday whether or not I have the price* earns both.'));
out.push(note('⚠ **And deduct the three first-line marks without hesitation from any reply that opens with the delay.** *I must apologise for the delay in replying, which was caused by…* is the opening of nine letters in ten and it spends the reader\'s attention on the writer\'s week. ⚠ **The reader wrote to ask a question; the first line is for the answer.**'));
out.push(sp());
out.push(box('Writing — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'answers first, grades the promise, and dates the next contact', 'Units 19 and 21: the claim and the negotiation'],
    ['**10–12**', 'writes well and dates the thing rather than the contact', '⚠ one exercise: rewrite five closings as *I will telephone on ___ whether or not*'],
    ['**7–9**', 'opens with the delay and explains it', 'rewrite the same letter with the first sentence deleted'],
    ['**0–6**', 'no figure, no date, no graded verb', 'back to 13.1 and 18.2, with the ladder on the wall'],
  ], [0.8, 2.4, 2.8]),
], C.lblue, C.navy));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (15 marks)'));
out.push(h3('Part 1  ·  Completing a note  (7 marks)'));
out.push(table(['16', '17', '18', '19', '20', '21', '22'], [[
  'line three, the marking', '⚠ **the stencils are at the other site and the press runs on the generator**', 'line eight', '⚠ **seven days (the next sailing is the 21st)**', 'the yard empty at 08.30', '⚠ **the gate sheet already signed**', '⚠ **line eight — telephoning the customer**',
]], [1.2, 1.9, 0.9, 1.5, 1.2, 1.4, 1.5]));
out.push(note('⚠ Gap 19 needs the **figure** — *seven days* — and not *a long delay*; the number comes from the next sailing being the 21st, which is 13.5\'s rule that the cost of missing a fixed point is the gap to the next one. ⚠ Gap 21 needs the word ⚠ ***already***: *the gate sheet is signed* is the normal case and *already signed when you arrive* is the finding.'));
out.push(note('⚠ Gap 17 may be given with either half — the other site **or** the generator — and both halves earn the one mark; ⚠ **a candidate who gives both has understood that the line has two independent dependencies**, which is worth saying when the papers go back even though it earns no more.'));
out.push(h3('Part 2  ·  Four short conversations  (8 marks)'));
out.push(table(['Q', '23', '24', '25', '26', '27', '28', '29', '30'], [['Answer', 'B', 'B', 'A', 'B', 'B', 'B', 'A', 'A']], [1, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ Q24 is the item that separates the class. *The hedge is where the risk is kept* is the opposite of the common belief that a hedge is modesty, ⚠ **and a candidate who answers C (*that it should be left out*) has heard the conversation as a criticism of hedging when it is a defence of it.**'));
out.push(note('⚠ Q28 is 18.7\'s ownership rule and the answer is **who the customer is relying on** — not who wrote it down first and not who is senior. ⚠ Both wrong answers are reasonable rules that companies actually use, which is why the item is worth a mark: **the rule in this course is about the person waiting outside the building.**'));
out.push(sp());
out.push(box('Listening — band table (15 marks)', [
  table(['Marks', 'What it means', 'What to do next week'], [
    ['**13–15**', 'hears the figure and the qualifying word', 'longer Part 1 gap-fills, read once only'],
    ['**10–12**', 'hears the content and loses *already*, *seven days*, *six in ten*', '⚠ dictation of ten sentences containing a number or a hedge'],
    ['**7–9**', 'hears the subject and not the position', 'the four-question handover of 13.7, in pairs, twice'],
    ['**0–6**', 'cannot follow two speakers at speed', 'the same scripts read three times, with the text'],
  ], [0.8, 2.4, 2.8]),
], C.lblue, C.navy));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (15 marks)'));
out.push(h3('Part 1  ·  Your week, and what you have committed to  (5 marks)'));
out.push(table(['The move', 'Mark', 'What counts'], [
  ['a date, a figure or a graded verb where one belongs', '3', '⚠ *soon*, *probably* and *quite a lot* earn nothing — and say so before the paper starts'],
  ['accurate future and present perfect forms', '2', '*we are collecting on the 8th* · *I have been putting it off since the 25th*'],
], [2.6, 0.6, 3.2]));
out.push(note('⚠ The question that produces the best three minutes is ⚠ ***what are you putting off, and what is the sentence inside it?*** A candidate who can name the sentence has 18.1 entire, and a candidate who says *I must telephone somebody* has the vocabulary and not the method.'));
out.push(h3('Part 2  ·  A conversation  (6 marks)'));
out.push(table(['The move', 'Mark', 'What counts'], [
  ['the line to watch', '1', 'a line and a reason'],
  ['the line to fear, named separately', '1', 'a different line, or the explicit observation that it is the same'],
  ['what looks wrong and is normal', '1', 'something visible to a newcomer'],
  ['⚠ **what looks normal and is wrong**', '2', '⚠ **anything the speaker has stopped seeing — or the honest *I cannot see it any more*, followed by *what do I no longer look at?***'],
  ['the line that is not theirs', '1', 'usually the customer contact'],
], [2.4, 0.6, 3.4]));
out.push(note('⚠ **The two marks for the fourth answer are the paper and they cannot be rehearsed.** The answer is something the speaker has stopped seeing, ⚠ **so a candidate who says *I cannot see it any more* and then asks what they no longer look at earns both marks** — that is the method and not a failure. ⚠ **A manufactured fourth answer that is really a complaint about a colleague earns nothing.**'));
out.push(h3('Part 3  ·  Grading a promise  (4 marks)'));
out.push(table(['The move', 'Mark', 'What counts'], [
  ['the graded verb', '1', '*I offer to look · I am willing to · I undertake to* — chosen, not drifted into'],
  ['⚠ **what you are not agreeing to**', '1', '⚠ ***I am not agreeing to a date until I have looked*** — the sentence from 18.2'],
  ['a date for knowing more', '1', 'a day, not *soon*'],
  ['the thing you can promise whatever happens', '1', '⚠ **a telephone call, a warning, a range — something entirely within the speaker\'s control**'],
], [2.4, 0.6, 3.4]));
out.push(note('⚠ The fourth mark here and the third mark in Writing Part 2 are the same idea in two skills, and a candidate who earns one usually earns the other. ⚠ **It is the most transferable thing in Book 2 so far: when you cannot promise the outcome, promise the contact.**'));
out.push(sp());
out.push(box('Marking the paper as a whole', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 15', '    / 15', '    / 15', '    / 15', '    %']], [1, 1, 1, 1, 1]),
  '⚠ Write the four scores **and** the average. A learner at 14/8/13/12 has 78 per cent on the total and 78 on the average, and a learner at 15/15/14/4 has 80 on the total and **80 on the average too** — ⚠ **which is why the average is only informative when one paper is far below the others, and that is exactly the case the examination is built to catch.**',
  '⚠ **The one pattern to act on.** Writing far below the other three means the candidate can read, hear and say the thing and cannot commit it to paper under time — ⚠ **and the repair is not more grammar but the two frames from 18.2 and 13.2**, written on a card: *I am not agreeing to ___ until ___* and *I will telephone on ___ whether or not ___*.',
], C.lblue, C.navy));
out.push(p('**Teacher\'s note — what this test is really measuring**'));
out.push(p('⚠ **Units 13 to 18 are six documents and one idea.** The programme, the forecast board, the post-mortem, the landed-cost comparison, the change note and the commitments register all exist because **somebody outside the room is going to act on a sentence**, and all six units mark the same thing in different clothes: ⚠ **whether the writer has said how much weight their sentence will bear.** A date that is a cut-off and not a headline; a number instead of *probably*; a verb chosen from a ladder; an assumption with a name against it; an old reason written down so a rule can die; a register column for what the other person heard.'));
out.push(p('⚠ **So a candidate who scores well on Reading and badly on Writing has usually understood all of it and is still writing the way they wrote in Unit 12** — confident, complete-sounding, and silent about strength. ⚠ **The fastest repair is the Part 2 closing sentence**, because it is one sentence, it applies to every letter they will ever write, and it is the only promise in any document that the writer can keep whatever happens: ⚠ ***I will telephone on Friday whether or not I have the price.***'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Mid-Book Test · Answer Key');
