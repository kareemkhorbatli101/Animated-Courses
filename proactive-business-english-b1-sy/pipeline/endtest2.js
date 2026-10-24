// Proactive Business English B1 · Syria Edition · Book 2 · END-OF-BOOK TEST (Units 13–24) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const part = (title, info) => box(title, [info], C.lteal, C.teal);

out.push(h1('END-OF-BOOK TEST  ·  Units 13–24'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for candidates', [
  'There are **four** papers: **Reading** (45 min) · **Writing** (45 min) · **Listening** (about 30 min) · **Speaking** (in pairs, about twelve minutes with your teacher).',
  'Total: **100 marks**, divided equally — Reading, Writing, Listening and Speaking are worth twenty-five marks each. ⚠ This is the weighting of **B1 Business Preliminary**, where the four skills are scored separately and your overall result is their **average**. One weak paper cannot be hidden behind three strong ones.',
  'Everything in this test happens at work, and most of it happens for a reader who is not in the building. Where a task asks about **your** company, use your real job or invent one — you are marked on the English, not on the company.',
  '⚠ **Three things are marked here that no single unit marked**, and all three are declared so that none is a surprise. In Writing Part 1, ⚠ **what is not known**, which Units 14, 20, 22 and 23 each marked separately. In Writing Part 2, ⚠ **the exception written inside your own claim**, which Unit 22 taught once. And across both tasks, ⚠ **one ask, one date** — Unit 19 taught it of a claim and Unit 24 of a hope.',
  'Write your answers on this paper, clearly, in pen. You **cannot** use a dictionary or your telephone.',
  'If you finish early: check that every number in your writing has a reason beside it, and that every claim says where a stranger could check it.',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (45 minutes · 25 marks)'));
out.push(part('Part 1  ·  Notices and short messages  (5 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _WARNING. Do not lower the platen with the guard raised._ (above step 7, unnumbered)']));
out.push(q('**A** The warning is step 7.   **B** The warning is read before the step it conditions.   **C** The warning applies to the whole page.'));
out.push(model(['**2**  _Apply the stencil, unless the stencil for that code is not in the press room, in which case stop, leave the cartons flat and write the number on the handover note._']));
out.push(q('**A** The reader must use another stencil.   **B** The reader may use judgement.   **C** The reader stops, and leaves a record for the next shift.'));
out.push(model(['**3**  _The gate sheet is signed by name on every delivery since 8 March. Two are unsigned and both are 9 March._']));
out.push(q('**A** The writer has made a mistake in the claim.   **B** The writer has given the exception before anybody could find it.   **C** The records are unreliable.'));
out.push(model(['**4**  _It is understood that the mill at Hama has suspended deliveries, with a resumption expected in about three weeks._']));
out.push(q('**A** The mill has closed.   **B** Deliveries have stopped for now, and no source is given.   **C** A named source says the mill will close.'));
out.push(model(['**5**  _Hold the platen four seconds, so that the ink penetrates the board; a shorter hold rubs off in transit._']));
out.push(q('**A** The number carries its reason, so it is harder to round down.   **B** Four seconds is a minimum only.   **C** The reader should be careful.'));
out.push(pb());
out.push(part('Part 2  ·  Right, wrong or doesn\'t say  (5 marks)', 'Read the extract. Choose **A** if the statement is right, **B** if it is wrong, or **C** if the text does not say.'));
out.push(model([
  '**FIRST-OFF REPORT — THE TANNOUS EXPORT CARTON. 27 March. L. Barakat, in her twelfth week.**',
  'One carton made exactly as the instruction is written, looked at before any more are made. I was told to follow the page even where it looked wrong, and I did, and three things came out wrong.',
  'Step 4 says apply the seal to the face carrying the consignee code; I did exactly that, and the seal is on the base, because the code is on the base until the carton is made up. Step 6 says mark the weight in the lower right corner; the weight is upside down for the same reason. Step 9 came out correct.',
  'Two of the three faults are the same fault: whoever wrote those steps was holding a finished carton and I was holding a flat sheet. The third is in no step at all — the carton weighs about twenty-three kilos full and nothing on the page says it is a two-person lift.',
  'I have not made the other ninety-nine, and I have kept the first-off carton exactly as it is.',
]));
out.push(q('**6**  The writer followed the instruction even where it looked wrong.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**7**  Two of the three faults have the same cause.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**8**  The instruction has already been rewritten.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**9**  The remaining ninety-nine cartons have been made.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(q('**10**  The third fault appears in one of the numbered steps.   **A** Right   **B** Wrong   **C** Doesn\'t say'));
out.push(pb());
out.push(part('Part 3  ·  Which rule decides it?  (5 marks)', 'Five questions have arisen. Read the four rule sheets **A**, **B**, **C** and **D** and choose the one that decides each question.'));
out.push(model([
  '**A — the grading rule.** _Confirmed, claimed or not known. Confirmed requires a document, or two people who have not read each other. No paragraph carries two grades._',
  '**B — the bench-page rule.** _Warnings and cautions are unnumbered and stand above the step they condition. A step that cannot be undone is marked, with the evidence; no more than two such steps on a page._',
  '**C — the concession rule.** _No concession is offered without an ask in the same sentence. One non-negotiable only, stated once, with its reason, and a walk-away that is survivable._',
  '**D — the claim rule.** _The undisputed item is accepted in the first line, in full, with its figure. One request, by one date. A repair after our own fault is not a concession and is never traded._',
]));
out.push(q('**11**  Two merchants both read the same trade sheet. How is it graded?   **A** · **B** · **C** · **D**'));
out.push(q('**12**  A customer is owed four replacement cartons after a fault of ours.   **A** · **B** · **C** · **D**'));
out.push(q('**13**  Somebody wants four steps of thirteen marked as critical.   **A** · **B** · **C** · **D**'));
out.push(q('**14**  A buyer asks for three per cent off.   **A** · **B** · **C** · **D**'));
out.push(q('**15**  A claim has five requests in it and no dates.   **A** · **B** · **C** · **D**'));
out.push(pb());
out.push(part('Part 4  ·  A longer text  (5 marks)', 'Read the page and choose the best answer **A**, **B** or **C**.'));
out.push(model([
  '**THE TANNOUS ARRANGEMENT — AGREED TERMS, with a covering note. 28 April.**',
  'Five lines were agreed: the price held twelve months provided each quarter is confirmed in writing four weeks ahead; four per cent on the first quarter only if it comes in one consignment; sixty days to pay; whatever else we agree, the first consignment of each quarter paid before it leaves the yard; and the consignee code sent with each order.',
  'The fourth was said once, before she asked, with its reason, which is that the generator fuel is bought for cash each week and the men are paid on Thursdays. She never came back to it.',
  'What actually ended the argument was the list of dates for three months ahead, sent on the 22nd. It costs us nothing and it is in none of the five lines, so I am adding it as a sixth with no price against it.',
  'Both of us believe we gave more than we got, and both of us are right, because each gave up the thing the other did not want: she did not want seven per cent, she wanted to be right in front of her own customer.',
  'Her alternative was two makers in Beirut. The lead time is still unknown and so is whether her customer would accept a Lebanese carton.',
]));
out.push(q('**16**  Why is the date list being added as a sixth line?   **A** because she asked for it   **B** because it cost nothing and is therefore recorded nowhere   **C** because it is the most expensive item'));
out.push(q('**17**  Why did the non-negotiable survive?   **A** it was stated once, early, with its reason   **B** it was repeated firmly   **C** it was a figure'));
out.push(q('**18**  Why do both sides feel they gave more?   **A** both are mistaken   **B** each gave up what the other did not want   **C** the terms are unequal'));
out.push(q('**19**  What is still unknown about her alternative?   **A** its price   **B** nothing   **C** the lead time, and whether her customer would accept it'));
out.push(q('**20**  What makes the four per cent conditional?   **A** the quarter in one consignment   **B** the sixty days   **C** the code'));
out.push(pb());
out.push(part('Part 5  ·  Multiple-choice cloze  (5 marks)', 'Choose **A**, **B** or **C** for each gap.'));
out.push(model([
  '**Extract from a market note.**',
  'The plater has given notice of twelve per cent **(21) ______** 1 March; his circular of 22 January is in the file. The Hama suspension is **(22) ______** two grades and not **(23) ______**. Board prices are expected to rise in the autumn, **(24) ______** two of three contacts had read that in the same sheet, so it is one source. **(25) ______** is not known whether a heavy brown shortage will pull our grade forward.',
]));
out.push(q('**21**   **A** from   **B** since   **C** by'));
out.push(q('**22**   **A** in   **B** on   **C** at'));
out.push(q('**23**   **A** our   **B** ours   **C** us'));
out.push(q('**24**   **A** because   **B** although   **C** so'));
out.push(q('**25**   **A** There   **B** That   **C** It'));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (45 minutes · 25 marks)'));
out.push(part('Part 1  ·  A note for somebody who cannot ask you  (10 marks)', 'Write **35 to 45 words**. Count them and write the number at the end.'));
out.push(p('Something at your work has to be done by somebody who is alone and cannot ask anybody. Write them a note. Say **what to do, with the reason inside the step**, ⚠ **what is not known or not covered**, and ⚠ **what to do instead, with a place and a record**.'));
out.push(...lines(5));
out.push(p('_Words: _______', { color: '595959' }));
out.push(sp());
out.push(part('Part 2  ·  A claim about your own work that a stranger could check  (15 marks)', 'Write **60 to 80 words**. Count them and write the number at the end.'));
out.push(p('Write three claims about your own work for somebody who does not know you. Give **each claim with a number, a date or a place to look**, ⚠ **the exception inside one of the good claims**, and ⚠ **one claim against yourself with its repair**.'));
out.push(...lines(9));
out.push(p('_Words: _______', { color: '595959' }));
out.push(box('⚠ Before you hand this paper in', [
  'Part 1: is there a **so that** or a **because** inside a step? And have you written ⚠ **what is not known**, with a place and a record for what to do instead?',
  'Part 2: is there an ⚠ **exception inside a claim in your own favour** — *two are unsigned and both are 9 March* — and is there ⚠ **one claim against you with a repair beside it in the present simple**?',
  '⚠ A page with no *what is not known* is read as a page where everything is known, and the reader telephones nobody. A page of six good things is read as advertising. **Both are marked here, and both were taught — in Units 20 and 23, and in Unit 22.**',
], C.lyellow, C.orange));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 30 minutes · 25 marks)'));
out.push(part('Part 1  ·  Completing a note  (10 marks)', 'Listen to the three short exchanges. Write **one, two or three words or a number** in each gap. You will hear each twice.'));
out.push(p('**A · The nine cartons**'));
out.push(p('Number marked by hand:  (26) ______________        Why the stencil was not used:  (27) ______________'));
out.push(p('What the hand marking is worth:  (28) ______________        What the page did not say:  (29) ______________'));
out.push(p('**B · The Hama report**'));
out.push(p('What the line actually said:  (30) ______________        Who the source was:  (31) ______________'));
out.push(p('What he volunteered:  (32) ______________        What he would not give:  (33) ______________'));
out.push(p('**C · The arrangement**'));
out.push(p('What settled it:  (34) ______________        Where it is written:  (35) ______________'));
out.push(sp());
out.push(dlg('Track E2-1  ·  Teacher\'s script (read each exchange twice)', [
  ['A · Abu Yasser', 'Nine of the second night\'s cartons are marked by hand, in marker pen, neatly. The stencil for the second code had been taken to Baghdad Street — the second store, which opened on 8 June — and he could not find it. They are beautiful and they are useless, because a hand-written code is not a code for a customs purpose. The page says apply the stencil, and it says nothing at all about what happens when there is no stencil.'],
  ['B · Nour', 'The line said that it is understood that the mill has suspended deliveries, with a resumption expected in about three weeks. I telephoned Hama and spoke to a man in the sales office. The suspension is on two grades and not on ours, and he said about a fortnight without being asked. He would not give his name.'],
  ['C · Lina', 'There are five lines in the agreed terms and the thing that settled it is not one of them. It was the date list for three months ahead. It is in a letter in a file and in no line of the document, because it cost nothing, so nobody wrote it down.'],
]));
out.push(pb());
out.push(part('Part 2  ·  Five short exchanges  (15 marks)', 'For each question, choose **A**, **B** or **C**. You will hear each exchange twice.'));
out.push(q('**36**  What does Mr Ayoub ask Nour before she replies to the buyer?   **A** what the price is   **B** which of the two things the buyer cares about   **C** who the buyer is'));
out.push(q('**37**  How does Nour find out?   **A** she asks what the buyer will tell her own customer   **B** she asks for a discount   **C** she waits'));
out.push(q('**38**  What is the evidence?   **A** four minutes on the dates and nine words on the price   **B** a letter   **C** the order book'));
out.push(q('**39**  Why did the night man shorten the four-second hold?   **A** he was lazy   **B** one second is enough for everything he has ever pressed   **C** the page said one second'));
out.push(q('**40**  What does Abu Yasser say every number on a page is?   **A** a specification   **B** a step somebody will round down   **C** a target'));
out.push(q('**41**  What must be added to the step?   **A** a warning   **B** the purpose and the consequence   **C** a signature'));
out.push(q('**42**  Who does Lina say is the claimant nobody has written to?   **A** Ms Tannous   **B** her agent   **C** Abu Yasser'));
out.push(q('**43**  Why has nobody written to him?   **A** he works there and cannot send an invoice   **B** he has not complained   **C** he is not in the documents'));
out.push(q('**44**  What is owed to him?   **A** money   **B** one sentence, and the document he is in   **C** nothing'));
out.push(q('**45**  What did four readers believe about revision 1 of the bench page?   **A** that it was wrong   **B** that it came from Beirut   **C** that nobody had read it'));
out.push(q('**46**  Why did Abu Yasser not stop at the missing stencil?   **A** he thought the line could not be argued with   **B** he was told not to   **C** he did not read it'));
out.push(q('**47**  What goes at the top of the page now?   **A** the customer\'s name   **B** the office, the person, the date, and *tell me what is wrong with it*   **C** a warning'));
out.push(q('**48**  What did Lina find about the eleven who took the A2 course?   **A** three still write, and not the best three   **B** all eleven still write   **C** none of them writes'));
out.push(q('**49**  What do the three have in common?   **A** the best marks   **B** somebody is waiting for a document from each of them   **C** they had more lessons'));
out.push(q('**50**  What does Nour say a certificate is a statement about?   **A** a person   **B** a day   **C** a company'));
out.push(sp());
out.push(dlg('Track E2-2  ·  Teacher\'s script (read each exchange twice)', [
  ['1 · Mr Ayoub', 'Seven per cent and ninety days. Which one does she care about?'],
  ['Nour', 'I do not know. She asked for both in the same sentence.'],
  ['Mr Ayoub', 'Then ask her what she will tell her own customer. Not what she wants from us.'],
  ['Nour', 'I telephoned her. She said she needs to be able to tell him a date in the month and be right. She spent four minutes on the dates and nine words on the price.'],
  ['2 · Abu Yasser', 'The second night, the marks were faint on about twenty cartons. Step seven says hold the platen for four seconds; he held it for about one. He read it and he thought four seconds was somebody being cautious, and he has pressed things all his life and one second is enough for everything he has ever pressed. Every number on a page is a step somebody will round down. The step should say: hold for four seconds, so that the ink penetrates the board; a shorter hold gives a mark that rubs off in transit.'],
  ['3 · Lina', 'Count the people who lost something. Ms Tannous, her own customer, her agent — and Abu Yasser, who marked nine cartons correctly from the wrong stencils. Of the four, we have written to one, and she is the only one who can send us an invoice. Abu Yasser works here, so he cannot bill us, and nobody has written him one sentence. What is owed to him is one sentence and the post-mortem his name is in twice.'],
  ['4 · Lina', 'I asked four people who wrote revision 1 and all four said it came from Beirut — that it was Ms Tannous\'s specification, translated. You wrote it, in an afternoon. And when I asked Abu Yasser why he did not stop at the missing stencil, he said: it is the customer\'s page. He did not think the line could be wrong; he thought it could not be argued with.'],
  ['Nour', 'And now the top of the page says: issued by the administration office, N. Mansour, 1 April, revision 2, written from the customer\'s specification and from the first-off report — tell me what is wrong with it.'],
  ['5 · Lina', 'Eleven people here did the A2 course two years ago and three of them still write anything in English, and they are not the three with the best marks. What the three have in common is that somebody is waiting for a document from each of them every week and would notice within a week if it did not come.'],
  ['Nour', 'And the certificate says nothing about that. An employer reads it as a statement about a person; it is a statement about a day.'],
]));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about twelve minutes · 25 marks)'));
out.push(part('Part 1  ·  Your work for a reader who is not there  (about four minutes)', 'Your teacher asks you questions. Answer with a number, a date or a place to look wherever one belongs.'));
out.push(table(['Questions for candidate A', 'Questions for candidate B'], [[
  'Describe one job of yours as steps, with the reason inside one step.  ·  Which step cannot be undone, and what is the evidence?  ·  Name a figure at your work and say how you know it.  ·  What is not known about something you are responsible for?',
  'What does somebody ask you for that is not what they need?  ·  Say yes to it with a condition they could meet this afternoon.  ·  Name one thing you will not trade, with the arithmetic behind it.  ·  Name one claim about your own work a stranger could check, and say where.',
]], [1, 1]));
out.push(sp());
out.push(part('Part 2  ·  A conversation  (about four minutes)', 'Work with your partner. One of you has written a page that the other has to work from, alone and at night. Then swap.'));
out.push(table(['Role card — the writer', 'Role card — the reader'], [[
  'Read them the page, step by step. ⚠ Name the office that wrote it and ask to be told what is wrong with it. Then ask which step they could not do alone — **and stop talking.**',
  'Be alone, at two in the morning, doing it for the first time, with nobody to telephone. ⚠ Say what will be missing, and ask what you should do instead. ⚠ Then name one thing on the page that is **not a step at all.**',
]], [1, 1]));
out.push(sp());
out.push(part('Part 3  ·  What is known, and the next fortnight  (about four minutes)', 'Tell your teacher what is actually known about something in your trade, and then what you will write next.'));
out.push(p('You must include: ⚠ **one confirmed item with its document** · **one claimed item with its source and date** · ⚠ **one *not known*, marked as the costly one** · and ⚠ **your document, your reader and your date in the next fortnight**.'));
out.push(box('How the Speaking paper is marked (25 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**Part 1**', '8', 'A number, a date or a place to look wherever one belongs (3) · ⚠ the reason inside a step (2) · ⚠ *what is not known* (2) · accuracy (1). **_Carefully_ and _as soon as possible_ earn nothing.**'],
    ['**Part 2**', '9', 'The page read as steps, not summarised (2) · ⚠ the office named and correction invited (2) · the question, then silence (2) · ⚠ what will be missing, with a place and a record (2) · ⚠ the thing that is not a step (1).'],
    ['**Part 3**', '8', 'A confirmed item with a document (2) · a claimed item with source and date (2) · ⚠ the costly *not known* (2) · ⚠ document, reader and date inside a fortnight (2).'],
  ], [1, 0.7, 4.3]),
  '⚠ **The two marks in Part 3 for the document, the reader and the date are the only marks in either test for something that happens after the test.** A candidate who names a reader who would be *pleased* rather than one who would *notice* scores one of the two: **the test is whether anybody telephones if it does not come.**',
  '⚠ **And the two marks in Part 2 for the question followed by silence** are worth saying out loud beforehand. A candidate who asks *which step could you not do alone?* and then keeps talking has asked nothing — ⚠ **and the reader\'s best answer in this paper is always the thing that is not a step at all.**',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('Your result', [
  table(['Reading', 'Writing', 'Listening', 'Speaking', 'Average'], [['    / 25', '    / 25', '    / 25', '    / 25', '    %']], [1, 1, 1, 1, 1]),
  '⚠ Your result is the **average of the four**, as in B1 Business Preliminary — not the total. ⚠ Compare it with your Mid-Book figures paper by paper rather than overall: **the paper that has moved least is next term\'s work**, and the total will hide it.',
  '⚠ **And one thing that is not on this paper at all.** Unit 24.7: ⚠ **one document, one reader, one date in the next fortnight.** **Three of eleven people here kept their English after the A2 course, and the three were the ones whose work already had a reader waiting.** **Arrange yours before you leave the room.**',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · End-of-Book Test');
