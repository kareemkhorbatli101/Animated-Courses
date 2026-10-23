// Proactive Business English B1 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('MID-BOOK TEST  ·  Units 1–6'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (35 min) · **Writing** (35 min) · **Listening** (about 20 min) · **Speaking** (in pairs, about ten minutes with your teacher).',
  'Total: **60 marks**, divided equally — Reading, Writing, Listening and Speaking are worth fifteen marks each. ⚠ This is the weighting of **B1 Business Preliminary**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones, and that is deliberate.',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Two things are marked here that no single unit marked.** In Writing, a **figure** where a figure belongs: a limit, a ceiling, a date, a count. And in Writing Part 2, **what you are not asking for**. Units 4, 5 and 6 each put marks on numbers; this paper puts marks on the absence of one.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early: check that every obligation in your writing says **where it comes from**, and that every authority has a **figure and a thing**.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (35 minutes · 15 marks)'));
out.push(part('Part 1  ·  Notices and short messages  (5 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _GATE: count the load **against the order**, not against the picking list. Sign by name._']));
out.push(q('**A** The count is compared with the order, and the counter writes their own name.   **B** The picking list is the document to count against.   **C** Only the gate man may sign the order.'));
out.push(model(['**2**  _Nour — Ms Shamsi rang. She will not hold the Aleppo price past Thursday. She has not been paid for September. — N.S._']));
out.push(q('**A** Ms Shamsi has raised her price since September.   **B** Two separate things need doing: the price decision and an unpaid invoice.   **C** Ms Shamsi will telephone again on Thursday.'));
out.push(model(['**3**  _Credit notes: below 250,000 a single signature. At 250,000 and above, two._']));
out.push(q('**A** You may never sign a credit note alone.   **B** A credit note for 250,000 needs one signature.   **C** A credit note for 250,000 needs two signatures.'));
out.push(model(['**4**  _Invoices are kept for ten years. We are required to; it is not our rule and it is not negotiable._']));
out.push(q('**A** The company has decided to keep invoices for ten years.   **B** The obligation comes from outside the company.   **C** The ten years may be discussed with a customer.'));
out.push(model(['**5**  _Procedure v5, effective 1 November. Two steps are marked. If you cannot do both marked steps, stop the load and tell the coordinator._']));
out.push(q('**A** All the steps in the procedure are essential.   **B** When the two marked steps are impossible, the load goes out with a note.   **C** The procedure says what to do when it cannot be followed.'));
out.push(pb());
out.push(part('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)', 'Read the report. For each question choose **A** if it is right, **B** if it is wrong, or **C** if the text does not say.'));
out.push(model([
  '**WHAT HAPPENED TO ORDER 0914 — written for Mr Attar, 20 October.**',
  'On 14 October Hala priced order 0914 at the counter from the credit list dated the 5th. The list had been superseded on the 8th, when the trade band was raised, and the counter copy had not been replaced. ⚠ She told me on the Friday, before the customer had telephoned and before anybody asked her.',
  'Nobody wrote to Mr Haffar between the 11th and the 13th about the rise. I cannot show that nobody telephoned him either, because we keep no record of calls out — so I am not going to claim that the omission was only in writing.',
  'The invoice was raised at list price on the 16th, from the order, by accounts, because the order form carried no quotation reference. The credit of 46,000 was paid on the 22nd, eight days after Mr Haffar first telephoned.',
  'One price list is now printed on Fridays, dated and initialled. That was introduced on 22 October. It would not have prevented this: the list of the 5th was the current list on the 5th.',
]));
out.push(q('**6**  Hala reported the error before the customer complained.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**7**  The writer can prove that nobody telephoned Mr Haffar.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**8**  The invoice was raised from the quotation.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**9**  Mr Haffar asked for the credit to be paid within eight days.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**10**  The new Friday list would have stopped this happening.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(pb());
out.push(part('Part 3  ·  A longer text  (5 marks)', 'Read the page and choose the best answer **A**, **B** or **C** for each question.'));
out.push(model([
  '**CONTROLS — when each was introduced, and what prompted it.**',
  'The gate count against the order was introduced in September 2024, after two consignments had been signed for in error following a change of driver. Neither cost us money and both were returned within a week.',
  'The fourteen-day written price came in April 2025, after about two months in which wrap was sold at or below cost because the list had moved twice before March.',
  'One dated price list, printed on Fridays, came in October 2025, after two undated lists were found in use in one building and a credit of 46,000 had been paid.',
  'The two-signature rule above 500,000 cannot be dated and nobody can say what prompted it. Abu Yasser believes it was Mr Ayoub\'s father\'s rule and that the figure was once 50,000. We have not changed it and we cannot justify it: 500,000 is now about a fortnight of counter takings rather than a serious sum.',
  '⚠ Two of our five controls came from a loss, two from a near miss, and one has no history at all. The two near misses were both in the last fourteen months and the two losses were both before that. We would like to claim that as a change in the way we work. It may equally be that we have simply been writing things down since the second site opened, and that near misses before that were not recorded rather than not noticed.',
]));
out.push(q('**11**  Why does the page say the gate count is the strongest item in the table?   **A** It was the most recent.   **B** The two consignments cost the company nothing.   **C** It was prompted by a change of driver.'));
out.push(q('**12**  What is wrong with the two-signature rule?   **A** The figure is too low to mean anything and cannot be justified.   **B** It was set by somebody who no longer works there.   **C** Nobody obeys it.'));
out.push(q('**13**  What pattern does the company point out?   **A** That all its controls came from losses.   **B** That it has introduced five controls in one year.   **C** That the near misses are recent and the losses older.'));
out.push(q('**14**  Why does the page offer a second explanation of the pattern?   **A** Because the flattering explanation may not be the true one.   **B** To avoid naming anybody.   **C** Because the auditor asked for two explanations.'));
out.push(q('**15**  What does the page suggest about near misses before the second site opened?   **A** That there were none.   **B** That they may have happened and not been written down.   **C** That they were all losses.'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (35 minutes · 15 marks)'));
out.push(part('Part 1  ·  An internal note  (6 marks)', 'Write **35 to 45 words**. Count them and write the number at the end.'));
out.push(p('A step in a procedure at your workplace falls on a colleague, and the procedure does not say what to do when they cannot follow it. Write them a note. Say **what the step requires**, **what to do in the case the procedure does not cover**, and **who to tell**.'));
out.push(...lines(5));
out.push(p('_Words: _______', { color: '595959' }));
out.push(sp());
out.push(part('Part 2  ·  A request for authorisation  (9 marks)', 'Write **60 to 80 words**. Count them and write the number at the end.'));
out.push(p('A limit at your workplace is too low and has been for some time. Write to the person who can change it. Say **what you are asking for, with the figure**, **the counted case** — numbers, not adjectives — and ⚠ **what you are not asking for**.'));
out.push(...lines(9));
out.push(p('_Words: _______', { color: '595959' }));
out.push(box('⚠ Before you hand this paper in', [
  'Part 1: does your note say what to do in the case the procedure does **not** cover, with **your own name** on that instruction?',
  'Part 2: is there a **figure** in your first sentence, and at least **two numbers** in your case? And have you said what you are **not** asking for?',
  '⚠ A request with no figure in it cannot be granted, and a request with no *and nothing else changed* will be read twice by somebody looking for what else is in the envelope. Both are marked here.',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 20 minutes · 15 marks)'));
out.push(part('Part 1  ·  Completing a note  (7 marks)', 'Listen to Nour explaining a procedure to Abu Yasser. Write **one, two or three words or a number** in each gap. You will hear it twice.'));
out.push(p('**GOODS OUT — which steps are mine**'));
out.push(p('Steps on the page altogether:  (16) ______________'));
out.push(p('Steps that are mine:  (17) ______________'));
out.push(p('The count is made against:  (18) ______________'));
out.push(p('The sheet is signed by:  (19) ______________'));
out.push(p('The step that cannot be bent:  (20) ______________'));
out.push(p('If I cannot do both marked steps:  (21) ______________'));
out.push(p('And I must also:  (22) ______________'));
out.push(sp());
out.push(dlg('Track MT-1  ·  Teacher\'s script (read twice, at normal speed)', [
  ['Nour', 'Abu Yasser — the new page has six steps and three of them are yours.'],
  ['Abu Yasser', 'Which three?'],
  ['Nour', 'Picking against the list, counting at the gate, and signing the sheet. Ignore one, two and six — they happen in the office.'],
  ['Abu Yasser', 'And the count is against the list?'],
  ['Nour', 'Against the order. Not the picking list — that is the whole point of the change. And the sheet is signed by whoever counted it, by name.'],
  ['Abu Yasser', 'Which of the three cannot be bent?'],
  ['Nour', 'The signature. The sheet must not be signed before the count, because otherwise the signature certifies a count that did not happen.'],
  ['Abu Yasser', 'And on a Thursday, two lorries, one of me?'],
  ['Nour', 'Then you stop the load. And you tell the coordinator, or whoever is on the counter if I am not here — that second half is new, and it is there because you asked.'],
]));
out.push(pb());
out.push(part('Part 2  ·  Four short conversations  (8 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. You will hear each conversation twice.'));
out.push(q('**23**  What does the auditor want?   **A** the steps without the names   **B** the names of the people   **C** the figures for the year'));
out.push(q('**24**  Why does he not want the names?   **A** He will meet them later anyway.   **B** He cannot pronounce them.   **C** Names say who does it today, not what the company requires.'));
out.push(q('**25**  What had Hala been told?   **A** that she must not sign credit notes   **B** that she did not have to get a second signature   **C** that she had to get a second signature on everything'));
out.push(q('**26**  Whose fault does Nour say the six weeks were?   **A** her own   **B** Hala\'s   **C** nobody\'s'));
out.push(q('**27**  What does Nour refuse to do for the customer?   **A** put his case to Mr Ayoub   **B** give him five per cent today   **C** agree eight per cent and sort it out afterwards'));
out.push(q('**28**  Why does she refuse?   **A** It is against the law.   **B** The next person who asked would get it too.   **C** Mr Ayoub would not honour it.'));
out.push(q('**29**  What does Nour tell the supplier about the thirty-day terms?   **A** that she thinks they are wrong and said so in writing   **B** that she agrees with them   **C** that they are required by law'));
out.push(q('**30**  What does she offer the supplier that is her own to give?   **A** sixty-day terms   **B** a payment in the first run of the month instead of the last   **C** a higher price'));
out.push(sp());
out.push(dlg('Track MT-2  ·  Teacher\'s script (read each exchange twice)', [
  ['1 · Mr Attar', 'Walk me through an order. Take the names out and tell me again.'],
  ['Nour', 'Why? You will meet all three of them this week.'],
  ['Mr Attar', 'I will, and in April one of them will be somewhere else and the procedure will still have to work. Names tell me who is doing it today. Steps tell me what the company requires.'],
  ['2 · Hala', 'You told me I did not have to get the second signature on the credit notes.'],
  ['Nour', 'Under 100,000. And what I said was half an instruction, so the six weeks since are mine and not yours.'],
  ['3 · Mr Tarabishi', 'You could just give me the eight and sort it out afterwards.'],
  ['Nour', 'I could, and he would honour it, and that is exactly why I am not going to. The next person who asked me for eight would get it too, and then five would not mean anything.'],
  ['4 · Ms Shamsi', 'And you think thirty days is right?'],
  ['Nour', 'No. I think it is wrong in your case and I said so in writing on 24 August, before the terms went out. And it is still thirty days. What I can do is put your October invoice in the first payment run of the month rather than the last, which is six working days earlier, and that one is mine to decide.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about ten minutes · 15 marks)'));
out.push(part('Part 1  ·  Your job and your authority  (about three minutes)', 'Your teacher asks you questions. Answer with a figure or a name wherever one belongs.'));
out.push(table(['Questions for candidate A', 'Questions for candidate B'], [[
  'What are you responsible for, and who do you report to?  ·  What are you authorised to sign, and up to what figure?  ·  What may you not decide alone, and who must be asked?  ·  Name one figure you work to that nobody has written down.',
  'Describe one process at your work as steps, without naming anybody.  ·  What is each step done from?  ·  Which rule at your work is the company\'s and which is the law\'s?  ·  Name one rule you enforce and did not write.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 2  ·  A conversation  (about four minutes)', 'Work with your partner. One of you is the coordinator and one is the colleague. Then swap.'));
out.push(table(['Role card — the coordinator', 'Role card — the colleague'], [[
  'A rule has been changed and you did not write it. Carry it properly: name **who** set it and **when**, say **what you think** of it, say **whether you said so**, and make clear that it **still stands**. Then offer the route upwards, and give your colleague one thing that is yours to give.',
  'The rule falls on you and you think it is unreasonable. Ask who set it. Ask whether the coordinator agrees with it. Ask **what you are supposed to do** in the one case the rule does not cover — you know that case and they do not.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  Asking upwards  (about three minutes)', 'Ask your teacher, as the person who decides, for a limit to be changed.'));
out.push(p('You must include: **the figure**, **two counted reasons**, ⚠ **one reason that does not help you**, and **what you are not asking for**.'));
out.push(box('How the Speaking paper is marked (15 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Part 1**', '5', 'A figure or a name wherever one belongs (3) · accurate present and past forms (2). ⚠ *Small amounts* and *it depends* earn nothing.'],
    ['**Part 2**', '6', 'The owner and the date (1) · the candidate\'s own view (1) · **and that they said so** (1) · the rule still stands (1) · the route upwards (1) · something given that is theirs (1).'],
    ['**Part 3**', '4', 'The figure (1) · two counted reasons (1) · ⚠ the unhelpful reason (1) · what is not being asked for (1).'],
  ], [1, 0.7, 4.3]),
  '⚠ **The third mark in Part 2 and the third in Part 3 are the two this paper exists for.** *And I said so* and *the reason that does not help me* both cost the speaker something, and neither can be produced by a candidate who has learned the phrases without the idea.',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 15', '    / 15', '    / 15', '    / 15', '    %']], [1, 1, 1, 1, 1]),
  '⚠ Your result is the **average of the four**, as in B1 Business Preliminary — not the total. A paper at 6 pulls the average down whatever the others do, which is what the examination does and what work does.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Mid-Book Test');
