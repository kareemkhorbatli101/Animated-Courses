// Proactive Business English B1 · Syria Edition · Book 1 · END-OF-BOOK TEST (Units 1–12) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 1–12'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (45 min) · **Writing** (45 min) · **Listening** (about 30 min) · **Speaking** (in pairs, about twelve minutes with your teacher).',
  'Total: **100 marks**, divided equally — Reading, Writing, Listening and Speaking are worth twenty-five marks each. ⚠ This is the weighting of **B1 Business Preliminary**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones.',
  'Everything in this test happens at work. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Three things are marked here that no single unit marked**, and all three are declared so that none is a surprise. In Writing Part 1, ⚠ **what would change your mind** — Unit 9 taught it and this paper pays for it. In Writing Part 2, ⚠ **the strongest point against your own recommendation**, which Unit 12 taught once. And across both tasks, ⚠ **a figure where a figure belongs**, which Units 4, 6, 7 and 8 each marked separately.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early: check that every claim in your writing has a number or a name, and that every deduction carries the mark it rests on.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (45 minutes · 25 marks)'));
out.push(part('Part 1  ·  Notices and short messages  (5 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _GATE: the sheet must not be signed before the load has been counted. If you cannot do both marked steps, stop the load and tell the coordinator._']));
out.push(q('**A** The sheet is signed first and the count follows.   **B** A load that cannot be counted properly is held, and somebody is told.   **C** Only the coordinator may sign the sheet.'));
out.push(model(['**2**  _Credit notes: below 250,000 a single signature. At 250,000 and above, two._']));
out.push(q('**A** A credit note for 250,000 needs one signature.   **B** Two signatures are always required.   **C** A credit note for 250,000 needs two signatures.'));
out.push(model(['**3**  _We will replace any item which is faulty on delivery, free of charge within fourteen days._']));
out.push(q('**A** Only the faulty items are replaced.   **B** Every item in the order is replaced.   **C** Nothing is replaced after fourteen days under any circumstances.'));
out.push(model(['**4**  _"Written quotation" means a quotation issued on our quotation form and signed by an authorised signatory._']));
out.push(q('**A** Any price we write down is a quotation.   **B** A price on an order pad is not a quotation under these terms.   **C** A quotation must be signed by the customer.'));
out.push(model(['**5**  _Possibly by the year end — and what I have not checked is whether the shelves can be reconciled to the August count at all._']));
out.push(q('**A** The writer has checked and does not know the answer.   **B** The writer is confident about the year end.   **C** The writer has named exactly what remains unchecked.'));
out.push(pb());
out.push(part('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)', 'Read the report extract. Choose **A** if the statement is right, **B** if it is wrong, or **C** if the text does not say.'));
out.push(model([
  '**WRITE-OFF OF NINE CARTONS — extract. 14 November.**',
  'The pallet can only have been lifted by a narrow-tine machine from one side; ours are 90 cm apart and the marks are 40. It must have been lifted after wrapping, because the wrap is torn at the tine marks and nowhere else. It was not lifted on our vehicle: the straps were fitted when it came back and both were intact.',
  'We cannot say whose machine it was. Narrow-tine forklifts are common and I have not been to look at anybody\'s machine. The immediate cause of the damage was rain; the late departure led to the load standing out; the absence of cover on the north side, noted since 2019, contributed. The packaging was not a factor.',
  'Two cartons of forty-eight are crushed, at 23,000 each. The credit is being raised today without waiting for the cause.',
]));
out.push(q('**6**  The writer is certain what kind of machine lifted the pallet.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**7**  The writer has examined the forklifts nearby.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**8**  The rain is described as a contributory factor.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**9**  The customer has complained in writing.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**10**  The credit waits until the cause is established.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(pb());
out.push(part('Part 3  ·  Which document decides it?  (5 marks)', 'Five questions have arisen. Read the three documents **A**, **B** and **C** and choose the one that decides each question.'));
out.push(model([
  '**A — the authority matrix.** _Credit note: Nour, Nadia, Hala to 250,000; above, Mr Ayoub. Purchase order: Nour, Nadia to 500,000; Abu Yasser to 150,000. Payment out: Nadia to 500,000; above, two signatures._',
  '**B — the definitions page.** _"Written quotation" means a quotation on our form signed by an authorised signatory. "Working day" means a day on which our office is open. "Delivery" means delivery to the customer\'s registered trading address._',
  '**C — the goods-out procedure, version 5.** _The load is counted against the order, by hand, by one person. The gate sheet must not be signed before the count. The load is not released until any difference has been seen by the coordinator. The invoice is raised from the order._',
]));
out.push(q('**11**  A claim was made on a Saturday. Was it in time?   **A** · **B** · **C**'));
out.push(q('**12**  Hala wants to sign a credit note for 300,000.   **A** · **B** · **C**'));
out.push(q('**13**  A difference was found at the gate. May the load go out?   **A** · **B** · **C**'));
out.push(q('**14**  A customer brings back a price written on an order pad.   **A** · **B** · **C**'));
out.push(q('**15**  Abu Yasser wants to order 200,000 of packaging.   **A** · **B** · **C**'));
out.push(pb());
out.push(part('Part 4  ·  A longer text  (5 marks)', 'Read the paper and choose the best answer **A**, **B** or **C**.'));
out.push(model([
  '**THE SECOND VAN — a recommendation with the case against it first. 8 December.**',
  'The three strongest arguments against repairing it, before mine. One: it is nine years old and this may not be the last repair; nobody can promise otherwise. Two: 1.9 million is six weeks of counter takings and it goes out in one payment. Three: we have never had the engine apart and the quote is for what the garage can see.',
  'My recommendation: repair it, in January.',
  'The case rests on one piece of arithmetic. The hire is 600,000 a month; the repair is 1.9 million once. If the repair lasts eight months it costs 240,000 a month, which is less than half the hire — and eight months is the worst figure anybody at the garage would put on it. On the worst case the repair wins.',
  'What would change the answer: if the engine comes apart and the quote doubles. I have asked for the quote to be split — strip and inspect at 240,000, then a decision.',
  'What I cannot cost, and it is the real risk: two customers have been at half their orders since August. If they leave in January the 400,000 becomes permanent. The only person who might price that is Fadi, who sees them weekly, and I have not asked him.',
]));
out.push(q('**16**  Why are the arguments against placed first?   **A** They are the weakest.   **B** Because the writer agrees with them.   **C** So that the argument reads as a response to them.'));
out.push(q('**17**  What does the arithmetic show?   **A** The hire is cheaper over three months.   **B** The repair wins even on its worst case.   **C** The two cost the same.'));
out.push(q('**18**  Why has the quote been split?   **A** So that the large sum is decided twice.   **B** To reduce the total.   **C** Because the garage asked.'));
out.push(q('**19**  What is the risk the writer cannot price?   **A** the engine   **B** the garage\'s figure   **C** two customers leaving'));
out.push(q('**20**  What has the writer not done?   **A** split the quote   **B** asked the driver   **C** costed the worst case'));
out.push(pb());
out.push(part('Part 5  ·  Multiple-choice cloze  (5 marks)', 'Choose **A**, **B** or **C** for each gap.'));
out.push(model([
  '**Extract from a position paper.**',
  '**(21) ______** the one hand, the Saturday road closure is permanent and cannot be changed by anybody here. **(22) ______** the other hand, Friday is the wrap morning. **(23) ______** balance, the change should go ahead: the Saturday objections are permanent and the Friday ones are movable. **(24) ______** it is true that the Harasta drops remain unsolved, and I **(25) ______** going to pretend the wrap move solves them.',
]));
out.push(q('**21**   **A** In   **B** On   **C** At'));
out.push(q('**22**   **A** In   **B** At   **C** On'));
out.push(q('**23**   **A** In   **B** On   **C** At'));
out.push(q('**24**   **A** Admittedly   **B** Admitted   **C** Admitting'));
out.push(q('**25**   **A** not   **B** do not   **C** am not'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (45 minutes · 25 marks)'));
out.push(part('Part 1  ·  A diagnosis a colleague must act on  (10 marks)', 'Write **35 to 45 words**. Count them and write the number at the end.'));
out.push(p('Something at your work has gone wrong and a colleague must act on your diagnosis. Write them a note. Say **what you can say, with the evidence in a clause**, ⚠ **what you cannot say**, and ⚠ **what would change your mind**.'));
out.push(...lines(5));
out.push(p('_Words: _______', { color: '595959' }));
out.push(sp());
out.push(part('Part 2  ·  A recommendation  (15 marks)', 'Write **60 to 80 words**. Count them and write the number at the end.'));
out.push(p('A decision at your work has to be taken. Write to the person who decides. Give ⚠ **the strongest point against your own recommendation, first**, then **your recommendation with one reason and a figure**, and ⚠ **what you are not asking for** or **what would change the answer**.'));
out.push(...lines(9));
out.push(p('_Words: _______', { color: '595959' }));
out.push(box('⚠ Before you hand this paper in', [
  'Part 1: is there a clause beginning **because** after what you can say? And have you written ⚠ **what would change your mind**?',
  'Part 2: is the point **against** you in the first sentence, and is there a **figure** in your reason?',
  '⚠ A diagnosis with no overturning condition will be acted on as though it were settled. A recommendation with nothing against it tells the reader only that you wanted it. **Both are marked here, and both were taught — in Unit 9 and in Unit 12.**',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 30 minutes · 25 marks)'));
out.push(part('Part 1  ·  Completing a note  (10 marks)', 'Listen to the three short exchanges. Write **one, two or three words or a number** in each gap. You will hear each twice.'));
out.push(p('**A · The pallet**'));
out.push(p('Tine marks apart:  (26) ______________        Our own tines apart:  (27) ______________'));
out.push(p('Lifted before or after wrapping:  (28) ______________        What the speaker will not say:  (29) ______________'));
out.push(p('**B · The credit ceiling**'));
out.push(p('Credit notes raised this year:  (30) ______________        How many above the ceiling:  (31) ______________'));
out.push(p('The figure asked for:  (32) ______________        What is not being asked for:  (33) ______________'));
out.push(p('**C · The decision**'));
out.push(p('The part never settled:  (34) ______________        Who objected:  (35) ______________'));
out.push(sp());
out.push(dlg('Track ET-1  ·  Teacher\'s script (read each exchange twice)', [
  ['A · Nour', 'It was lifted by a machine with tines about forty centimetres apart, and ours are ninety. It was lifted after it was wrapped, because the wrap is torn at the tine marks and nowhere else. Whose machine it was, I cannot say and I am not going to.'],
  ['B · Nour', 'Sixty-one credit notes this year and forty-three of them above the ceiling, so it has stopped meaning anything. I am asking for the ceiling to go to 250,000. I am not asking for a payment-out authority, and the countersignature above the ceiling stays as it is.'],
  ['C · Nour', 'The part we had not settled is what happens to orders taken before a price change. Nadia objected to the version I read back first, in which Hala kept the old list, because two lists would exist again. She was right.'],
]));
out.push(pb());
out.push(part('Part 2  ·  Five short exchanges  (15 marks)', 'For each question, choose **A**, **B** or **C**. You will hear each exchange twice.'));
out.push(q('**36**  What does the auditor ask for?   **A** the steps without the names   **B** the names   **C** the figures'));
out.push(q('**37**  Why?   **A** he cannot pronounce them   **B** he will meet them later   **C** names say who does it today, not what the company requires'));
out.push(q('**38**  Whose fault does Nour say the six weeks were?   **A** her own   **B** Hala\'s   **C** nobody\'s'));
out.push(q('**39**  What should she have said?   **A** nothing   **B** both halves, with the figure   **C** that Hala must never sign'));
out.push(q('**40**  What does Mr Ayoub ask for that is not in the paper?   **A** more figures   **B** a decision   **C** the third option'));
out.push(q('**41**  What is its cost?   **A** 400,000 once, flat since September   **B** 400,000 a month, growing   **C** nothing'));
out.push(q('**42**  What does that do to the hire option?   **A** strengthens it   **B** makes it fail   **C** no effect'));
out.push(q('**43**  What does Nour tell the supplier about the thirty-day terms?   **A** that she agrees   **B** that they are the law   **C** that she thinks they are wrong and said so in writing'));
out.push(q('**44**  What does she offer that is her own to give?   **A** sixty days   **B** payment in the first run of the month   **C** a higher price'));
out.push(q('**45**  What will she not do?   **A** tell the supplier the truth   **B** say she agrees with the terms   **C** send the invoice'));
out.push(q('**46**  What does Fadi point out about the report?   **A** the figure is wrong   **B** he telephoned a different number with no log   **C** the date is wrong'));
out.push(q('**47**  Why could only he find it?   **A** it is the number on his van   **B** he wrote the report   **C** he saw the cartons'));
out.push(q('**48**  What does Abu Yasser add about Thursday?   **A** nothing   **B** the wrap arrives   **C** the Mezzeh counter does its own order'));
out.push(q('**49**  How long has that gone unwritten?   **A** two years   **B** eleven years   **C** since September'));
out.push(q('**50**  What does Nour concede before stating her position?   **A** his objection, completely   **B** nothing   **C** that she is wrong'));
out.push(sp());
out.push(dlg('Track ET-2  ·  Teacher\'s script (read each exchange twice)', [
  ['1 · Mr Attar', 'Walk me through an order. Take the names out and tell me again.'],
  ['Nour', 'Why? You will meet all three of them this week.'],
  ['Mr Attar', 'I will, and in April one of them will be somewhere else and the procedure will still have to work. Names tell me who is doing it today. Steps tell me what the company requires.'],
  ['2 · Hala', 'You told me I did not have to get the second signature.'],
  ['Nour', 'Under 100,000. And what I said was half an instruction, so the six weeks since are mine and not yours. What I should have said is: below 100,000 you do not have to; at 100,000 and above you must not sign alone.'],
  ['3 · Mr Ayoub', 'Where is the third one? There are always three, and the third is do nothing.'],
  ['Nour', 'Doing nothing cost about 400,000, once, in August, and it has been flat since September — which makes the hire worse, because 600,000 a month to recover 400,000 is not a saving.'],
  ['4 · Ms Shamsi', 'And you think thirty days is right?'],
  ['Nour', 'No. I think it is wrong in your case and I said so in writing on 24 August, before the terms went out. And it is still thirty days. What I can do is put your October invoice in the first payment run of the month rather than the last, and that one is mine to decide. What I will not do is tell you I agree with it.'],
  ['5 · Fadi', 'It says I telephoned and the log says I did not. I telephoned the counter, not the office — a different number, and the counter has never had a log. I only asked because you said "after wrapping".'],
  ['Nour', 'And the number is painted on the side of your van, which is why nobody else could have found it.'],
  ['6 · Nour', 'I will start with the strongest thing against my position, which is yours. Friday is wrap morning and you cannot be at the gate and on the forklift. That is true and I agree with it completely. I am still recommending Friday.'],
  ['Abu Yasser', 'Then one thing. Thursday is the day the Mezzeh counter does its own order, so Thursday has the wrap, the counter order and the Friday load in four hours. Nobody has written it down in eleven years.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about twelve minutes · 25 marks)'));
out.push(part('Part 1  ·  Your job, your authority and your evidence  (about four minutes)', 'Your teacher asks you questions. Answer with a figure or a name wherever one belongs.'));
out.push(table(['Questions for candidate A', 'Questions for candidate B'], [[
  'What are you authorised to sign, and up to what figure?  ·  Describe one of your processes as passive steps, and say what each is done from.  ·  Name one thing you have done this year, with a number on it.  ·  Name one figure you work to that nobody has written down.',
  'Describe something damaged and say what mark your deduction rests on.  ·  What would change your mind about it?  ·  Give one cause three ways: for us, for the file, for the customer.  ·  Name one rule you enforce and did not write.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 2  ·  A conversation  (about four minutes)', 'Work with your partner. One of you has written a report or a position; the other is named in it or disagrees with it. Then swap.'));
out.push(table(['Role card — the writer', 'Role card — the other'], [[
  'Read them the lines that are about them, not a summary. Say which sentence their name is **not** in. ⚠ Concede the strongest thing against you, completely. Then ask what you have got wrong — **and stop talking.**',
  'Listen, and then supply something only you could know: a document that does not exist, a number nobody has, or a thing you have done for years that nobody has written down. ⚠ Say **how long**.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  A position  (about four minutes)', 'Put a position to your teacher on a real question at your work.'));
out.push(p('You must include: **both hands** · ⚠ **an *on balance* with something that was in neither hand** · **the strongest point against you** · ⚠ **where you would be if your third thing fell through**.'));
out.push(box('How the Speaking paper is marked (25 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Part 1**', '8', 'A figure or a name wherever one belongs (3) · a deduction with its mark attached (2) · ⚠ *what would change my mind* (2) · accuracy (1). **_Small amounts_ and _it depends_ earn nothing.**'],
    ['**Part 2**', '9', 'Lines read, not summarised (2) · which sentence their name is not in (1) · ⚠ the concession, complete (2) · the question, then silence (2) · ⚠ what the other supplies, with **how long** (2).'],
    ['**Part 3**', '8', 'Both hands (2) · ⚠ a third thing in neither hand (3) · the strongest point against (2) · ⚠ where they would be if it fell through (1).'],
  ], [1, 0.7, 4.3]),
  '⚠ **The three marks for the third thing in Part 3 are the single largest item in this paper**, and they cannot be earned by a candidate who has learned the phrases. An *on balance* containing no noun that was not already in one of the hands scores nothing: **that is counting, not weighing.**',
  '⚠ **And the two marks in Part 2 for the question followed by silence** are worth saying out loud before the test. A candidate who asks *is there anything I have got wrong?* and then keeps talking has asked nothing.',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 25', '    / 25', '    / 25', '    / 25', '    %']], [1, 1, 1, 1, 1]),
  '⚠ Your result is the **average of the four**, as in B1 Business Preliminary — not the total. ⚠ And compare it with your Mid-Book figures paper by paper rather than overall: **the paper that has moved least is next term\'s work**, and the total will hide it.',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · End-of-Book Test');
