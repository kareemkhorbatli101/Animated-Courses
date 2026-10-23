// Proactive Business English B1 · Syria Edition · Book 2 · MID-BOOK TEST (Units 13–18) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 13–18'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (35 min) · **Writing** (35 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about ten minutes with your teacher).',
  'Total: **60 marks**, divided equally — Reading, Writing, Listening and Speaking are worth fifteen marks each. ⚠ This is the weighting of **B1 Business Preliminary**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones, and that is deliberate.',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit marked.** In Writing, **the strength of a verb**: whether what you have written commits you to what you mean it to. And in Writing Part 2, ⚠ **a date on which the reader will hear from you again** — not a date for the thing, a date for the next contact. Units 13, 14 and 18 each put marks on a date; this paper puts marks on the one that cannot fail.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early: check that every date in your writing is a **cut-off** and not a headline, and that every promise carries ⚠ **either a figure or the words *I am not agreeing to***.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (35 minutes · 15 marks)'));
out.push(part('Part 1  ·  Notices and short messages  (5 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _VESSEL 14th, 06.40. Documents and delivery close **18.00 on the 13th**. Next sailing the 21st._']));
out.push(q('**A** The load must be at the port by 06.40 on the 14th.   **B** The working deadline is the evening of the 13th, and missing it costs a week.   **C** There is a sailing every day.'));
out.push(model(['**2**  _Programme line 3: marking, 9th, one to four. How you will know: the stencils **carry the code on the order**._']));
out.push(q('**A** You check that the stencils are on the bench.   **B** You check that the stencils are the right ones.   **C** Somebody else checks the stencils.'));
out.push(model(['**3**  _February board. Four lines. The line that can move the month is the second: 8 or 16, depending on one order, which I put at **six in ten**._']));
out.push(q('**A** The writer expects the order.   **B** The writer has given a number instead of a word, so a reader can decide what to buy.   **C** The second line is the largest in the forecast.'));
out.push(model(['**4**  _I will look at the labels this week. **I am not agreeing to a date until I have.**_']));
out.push(q('**A** The labels will be ready this week.   **B** The writer has said what the offer does not include.   **C** The writer refuses to look at the labels.'));
out.push(model(['**5**  _Change Note 2. Effective 1 March. **No parallel run.** Why those days: nobody knows for certain._']));
out.push(q('**A** Both the old and the new days will be served for a time.   **B** The old arrangement will stop on the 1st, and its reason is not known.   **C** The change has not yet been decided.'));
out.push(pb());
out.push(part('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)', 'Read the post-mortem. For each question choose **A** if it is right, **B** if it is wrong, or **C** if the text does not say.'));
out.push(model([
  '**POST-MORTEM — THE NINE CARTONS. 18 January. N. Mansour.**',
  '**What happened.** Twenty-four cartons were marked for export on 9 January from the stencil set held at the second store. Nine were marked before the set was changed. That set carried the consignee code withdrawn in November. Nobody here noticed. The customer\'s agent found it at the port on the 13th and re-marked the nine. Her customer received them on the 17th instead of the 15th.',
  '**What it cost.** Hers: two days to her customer, and the agent\'s re-marking charge of about 140,000. Ours: about four hours of my time and three of Abu Yasser\'s. Against about two hours in November, which is what the list would have taken.',
  '**Why.** The programme line read *how you will know: the stencils are on the bench.* They were on the bench. The control tested presence and not correctness, and three other lines on the same page have the same fault. The contributing decision was mine. ⚠ A note of 14 November, initialled by me, says which set is at the second store — so this was not a failure of information.',
  '**Who owns each change.** (a) N. Mansour, 18 January — done. (b) N. Mansour, 20 January. (c) L. Barakat, 24 January. (d) K. Ayoub to decide, 24 January.',
]));
out.push(q('**6**  Nobody at the company noticed the wrong code.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**7**  The information about the stencil set had never been communicated.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**8**  The customer asked for a discount.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**9**  One of the four changes was already complete when the report was written.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**10**  Preventing this would have cost more than it cost to put right.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(pb());
out.push(part('Part 3  ·  A longer text  (5 marks)', 'Read the page and choose the best answer **A**, **B** or **C** for each question.'));
out.push(model([
  '**CARTONS — TWO QUOTATIONS, AND WHAT WAS NOT IN EITHER.**',
  'Our supplier\'s price is 1,000 per hundred, delivered, on sixty days. The alternative is 890 per hundred, ex-works, minimum five hundred, on thirty days, from a supplier with no history with us. The headline is eleven per cent cheaper.',
  'Carriage from the second supplier is about 180 a hundred, so the price before anything else is about 1,070. The minimum is five hundred against a usage of four hundred, so one hundred are financed every month. Thirty days instead of sixty is thirty days of our money, every month. The all-in figure is about 1,040 against 1,000 — four per cent dearer.',
  'The goods are identical. On how they behave: our supplier has been late twice in eleven years and telephones the day before; the other delivered a sample in one day, which is faster. She has had two marked cartons in eleven years; four of his sample of fifty were marked. And when asked whether he could deliver five hundred by a Thursday that was three days away on a four-day road, he said there would be no problem.',
  'Two of the six comparisons favour him and both are on this page, because anybody who telephones him will be told them in a minute. The weighting is reliability, because we plan a fortnight ahead and cannot absorb a surprise.',
  '⚠ Then the warehouse supervisor was shown the comparison, which had not happened before. He asked two questions in about two minutes. His cartons arrive flat, which is about forty minutes a day for one man; and his pallet is a different size, so the store holds about eleven per cent less of his. Neither is in any quotation and neither was in any column.',
]));
out.push(q('**11**  Why is the cheaper quotation dearer?   **A** The price was wrong.   **B** Carriage, a minimum above usage and shorter terms, added together.   **C** The goods are of lower quality.'));
out.push(q('**12**  Why are the two comparisons that favour the other supplier printed?   **A** To be fair to him.   **B** Because anybody who telephones him will find them anyway.   **C** Because they decide the question.'));
out.push(q('**13**  What does the *no problem* answer tell the writer?   **A** that the man is dishonest   **B** that his delivery dates cannot be used in a plan   **C** that he wants the order badly'));
out.push(q('**14**  What is the weighting, and what is it about?   **A** price, and about the market   **B** reliability, and about how the company itself plans   **C** speed, and about the road'));
out.push(q('**15**  Why were the supervisor\'s two points not in any column?   **A** He had not been asked before.   **B** They are not important.   **C** They were in the quotation and were missed.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (35 minutes · 15 marks)'));
out.push(part('Part 1  ·  An internal note  (6 marks)', 'Write **35 to 45 words**. Count them and write the number at the end.'));
out.push(p('You are away on Thursday and a colleague is running something of yours. Write them a note. Give **the line to watch and why**, ⚠ **the line that would be worst if it went wrong, if it is a different line**, and **what to do, with an hour and a name**.'));
out.push(...lines(5));
out.push(p('_Words: _______', { color: '595959' }));
out.push(sp());
out.push(part('Part 2  ·  A reply that has been delayed  (9 marks)', 'Write **60 to 80 words**. Count them and write the number at the end.'));
out.push(p('A question from a customer or supplier has been unanswered for over a week. Write the reply. Give ⚠ **the answer in the first line, even if it is incomplete**, **an apology for the delay in one clause and with no reason**, and ⚠ **a date on which they will hear from you again, whatever happens**.'));
out.push(...lines(9));
out.push(p('_Words: _______', { color: '595959' }));
out.push(box('⚠ Before you hand this paper in', [
  'Part 1: are the line to watch and the line to fear **named separately**, and is there an **hour** as well as a name?',
  'Part 2: is there an **answer** in your first line, and a date for **the next contact** rather than for the thing itself?',
  '⚠ A reply that explains the delay has spent its words on the writer\'s week, and a reply with no next-contact date gives the reader nothing they can rely on. Both are marked here.',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 20 minutes · 15 marks)'));
out.push(part('Part 1  ·  Completing a note  (7 marks)', 'Listen to a handover. Write **one, two or three words or a number** in each gap. You will hear it twice.'));
out.push(p('**HANDOVER — THE CONSIGNMENT PROGRAMME**'));
out.push(p('Line most likely to go wrong:  (16) ______________'));
out.push(p('Why:  (17) ______________'));
out.push(p('Line that would be worst:  (18) ______________'));
out.push(p('Cost of missing it:  (19) ______________'));
out.push(p('Looks wrong and is normal:  (20) ______________'));
out.push(p('Looks normal and is wrong:  (21) ______________'));
out.push(p('The one line that is not yours:  (22) ______________'));
out.push(sp());
out.push(dlg('Track MT2-1  ·  Teacher\'s script (read twice, at normal speed)', [
  ['Lina', 'Which line is most likely to go wrong?'],
  ['Nour', 'Line three, the marking. The stencils are at the other site and the press runs on the generator, which runs from one until four.'],
  ['Lina', 'And which would be worst?'],
  ['Nour', 'Line eight. Missing six in the evening on the 13th costs seven days, because the next sailing is the 21st. Everything else on the page costs hours.'],
  ['Lina', 'What will look wrong to me and be normal?'],
  ['Nour', 'The yard empty at half past eight on a Saturday. Fadi loads at eight and goes.'],
  ['Lina', 'And what will look normal and is wrong?'],
  ['Nour', 'The gate sheet already signed when you arrive. If it is already signed, nobody counted.'],
  ['Lina', 'Is any of it not mine?'],
  ['Nour', 'Line eight. Telephoning the customer is mine and nobody else\'s, whatever happens.'],
]));
out.push(pb());
out.push(part('Part 2  ·  Four short conversations  (8 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. You will hear each conversation twice.'));
out.push(q('**23**  What does Nadia object to in the sentence?   **A** the figure   **B** that *we intend to* will be read as a promise   **C** the date'));
out.push(q('**24**  What does she say about the hedge?   **A** that it is modest   **B** that it is where the risk is kept   **C** that it should be left out'));
out.push(q('**25**  What did each of them mean by *probably*?   **A** six in ten and nine in ten   **B** both nine in ten   **C** both five in ten'));
out.push(q('**26**  What does Bassel say the number is?   **A** a courtesy   **B** the quantity   **C** a forecast'));
out.push(q('**27**  What is the disagreement about the labels?   **A** the price   **B** which verb was used   **C** the colour'));
out.push(q('**28**  What does Mr Ayoub say decides it?   **A** who wrote it down first   **B** who the customer is relying on   **C** who is senior'));
out.push(q('**29**  Why does Abu Yasser say his two points were never raised?   **A** nobody asked him   **B** he had forgotten them   **C** they are not important'));
out.push(q('**30**  How long does he say it would have taken to tell them in January?   **A** two minutes   **B** two hours   **C** two days'));
out.push(sp());
out.push(dlg('Track MT2-2  ·  Teacher\'s script (read each exchange twice)', [
  ['1 · Nadia', 'Your note says *we intend to ship on the 11th and to have the documents with you on the 13th*.'],
  ['Nour', 'Which is true. I do intend to.'],
  ['Nadia', 'And she will read it as a promise, because nobody outside this office knows the difference between what you have arranged and what you have decided on your own. The hedge is where the risk is kept: put it in the sentence and it stays in the sentence, and leave it out and it moves to the relationship.'],
  ['2 · Bassel', 'You wrote that Beirut would probably order again in February. I have bought twenty-four cartons against it.'],
  ['Nour', 'I meant six in ten. Perhaps seven.'],
  ['Bassel', 'I read *probably* as nine in ten. That is what I mean by it when I write it. At six in ten I buy twelve cartons and at nine I buy twenty-four — the number is not decoration, it is the quantity.'],
  ['3 · Bassel', 'The Beirut labels. You agreed to have them designed by the 10th.'],
  ['Nour', 'I did not agree to it. I offered to look at whether we could.'],
  ['Mr Ayoub', 'Then which of you is Ms Tannous relying on? Bassel told her the 10th, so it is his line. A commitment belongs to whoever somebody outside this building is relying on.'],
  ['4 · Abu Yasser', 'Two things, and neither is a criticism. His cartons come flat and hers come made up, which is about forty minutes a day for one man. And his pallet is a different size, so the fourth store holds about eleven per cent less of his.'],
  ['Nour', 'Why has nobody ever told me either of those?'],
  ['Abu Yasser', 'Because nobody has ever shown me a comparison before. Two minutes, any day since January, and I would have asked you two questions: made up or flat, and what size is the pallet.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about ten minutes · 15 marks)'));
out.push(part('Part 1  ·  Your week, and what you have committed to  (about three minutes)', 'Your teacher asks you questions. Answer with a date, a figure or a verb wherever one belongs.'));
out.push(table(['Questions for candidate A', 'Questions for candidate B'], [[
  'What is arranged at your work this week, and what is the evidence?  ·  What have you agreed to, and what have you only offered to look at?  ·  What are you putting off, and what is the sentence inside it?  ·  Name one fixed point at your work that nobody arranged.',
  'What do you forecast for next month, with a number on each line?  ·  Which line can move the month, and what does it rest on?  ·  What are you used to that could be otherwise?  ·  Name one thing you are willing to do that is not your job, and since when.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 2  ·  A conversation  (about four minutes)', 'Work with your partner. One of you is handing over a programme and one is receiving it. Then swap.'));
out.push(table(['Role card — handing over', 'Role card — receiving'], [[
  'Hand over something you run, in about ninety seconds, with the page in your partner\'s hand. Give **the line to watch**, **the line to fear**, **what looks wrong and is normal** and ⚠ **what looks normal and is wrong.** Say which line is **not** theirs.',
  'Ask the four questions. ⚠ **Refuse the first answer to the fourth one** if it is something already printed on the page, and ask again. If your partner says they cannot see it, ask what they no longer look at.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  Grading a promise  (about three minutes)', 'Your teacher asks you for something you cannot commit to today.'));
out.push(p('You must include: ⚠ **the verb you mean** · ⚠ **the sentence saying what you are not agreeing to** · **a date on which you will know more** · and **one thing you can promise whatever happens**.'));
out.push(box('How the Speaking paper is marked (15 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Part 1**', '5', 'A date, a figure or a graded verb wherever one belongs (3) · accurate future and present perfect forms (2). ⚠ *Soon* and *probably* earn nothing.'],
    ['**Part 2**', '6', 'The line to watch (1) · the line to fear, named separately (1) · what looks wrong and is normal (1) · ⚠ **what looks normal and is wrong** (2) · the line that is not theirs (1).'],
    ['**Part 3**', '4', 'The graded verb (1) · ⚠ **what you are not agreeing to** (1) · a date for knowing more (1) · the thing you can promise whatever happens (1).'],
  ], [1, 0.7, 4.3]),
  '⚠ **The two marks for *what looks normal and is wrong* are the paper.** They cannot be earned by a candidate who has learned the question, because the answer is something the speaker has stopped seeing — ⚠ **and a candidate who honestly says *I cannot see it any more* and then asks what they no longer look at earns both.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 15', '    / 15', '    / 15', '    / 15', '    %']], [1, 1, 1, 1, 1]),
  '⚠ Your result is the **average of the four**, as in B1 Business Preliminary — not the total. A paper at 6 pulls the average down whatever the others do, which is what the examination does and what work does.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Mid-Book Test');
