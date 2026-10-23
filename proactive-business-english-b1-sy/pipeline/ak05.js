// Proactive Business English B1 · Syria Edition · Book 1 · Unit 5 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 5  How It Is Done Here'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This is the unit most likely to be taught backwards.** The passive is easy to form and easy to drill, and a class can leave Unit 5 able to produce *the order is taken at the counter* on demand and completely unable to decide **when not to**. The grammar is the first half of the unit. **5.5 is the unit**, and if you are short of time, cut a cycle from the first half rather than touching it.',
  '⚠ **The method in 5.1 works on the first try and you should let it.** Ask a learner to describe their own process with names, then make them say it again without names. In about a third of classes somebody finds a real gap in their own workplace inside four minutes — a document copied from the wrong document — and the rest of the unit then teaches itself. Do not preview the trick; the surprise is the pedagogy.',
  '⚠ **The new reader.** **Mr Ziad Attar**, the external auditor, joins the cast here. He has been Sham Trading\'s auditor since 2019 and at A2 he was only ever *the auditor who is here on the 13th*. He is **not** an antagonist and should not be played as one: he is the first reader in the course who is paid to find the gap, and every one of his questions in this unit is a question a learner can use on their own writing.',
], C.grey, C.navy));

// ===================== 5.1 =====================
out.push(h2('5.1  How an order is handled'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Count the steps on the board; most learners name three or four and the class finds six or seven between them, which is the first useful fact of the unit.'));
out.push(p('**b**  *The order is taken at the counter* belongs in a procedure: it has a role in it and it is true next April. *Hala takes the order* dates the page to this month\'s staff list. ⚠ *Somebody takes the order* is the worst of the three — it looks like a procedure and requires nobody.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because names tell him who is doing it today, and in April one of them will be somewhere else and the procedure will still have to work.  2 Nothing — he does not say. He says the names are *what hide it*: as long as a trusted person is in the sentence, the sentence feels reliable because they are.'));
out.push(note('⚠ Learners often answer **2** with *he will check it*. Point out that he says no such thing: the only use he makes of the list is to notice that step 6 copies from the wrong document, and he does that while Nour is still talking.'));
out.push(p('**Language box – Practise (samples):**  1 _The order is taken at the counter. A list is typed **from the order**. The goods are picked **against the list**. The load is counted **against the order**. The invoice is raised **from the order**._  2 _Cash is taken at the counter. The day book is written **from the till roll**. The bag is counted **against the day book**. The ledger is written **from the paying-in book** — ⚠ which is the gap._  3 _A complaint is taken by telephone. A note is written **on the pad**. A credit note is raised **from the note**. The complaints book is written up **from memory at the month end** — the gap._  4 _The load is checked **against the delivery note** on arrival; the note is signed **by name**; the stock entry is made **from the note**._  5 _A supplier is proposed; two prices are taken **in writing**; the account is opened **from the written prices**._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Walk me through a payment in. From the counter to the ledger.'],
  ['A', 'Hala takes the cash, then she writes the day book, then Nadia—'],
  ['B', 'Stop. Take the names out and tell me again.'],
  ['A', 'The cash is taken at the counter. The day book is written from the till roll. The bag is counted against the day book. The paying-in slip is written from the bag. The ledger is written from the paying-in book.'],
  ['B', 'Now say the last step again. The ledger is written from what?'],
  ['A', '…From the paying-in book. Which means that if a payment was taken and not banked, the ledger does not know about it.'],
  ['B', 'That is the first thing you have told me that you did not know when you started.'],
]));
out.push(note('The gap in role card 1 is genuine and common in cash businesses, and learners who work in one will recognise it immediately. ⚠ The repair is not an extra control but a different source: the ledger written from the **day book** and reconciled against the paying-in book.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the chain and ring the step copied from the wrong document. **Typical errors:** _the order is take at the counter_ (no third form) · _the goods picks against the list_ (active ending on a passive) · _a list is typed by the order_ (*by* for a source — this is 5.3 arriving early and is worth marking now) · and the content fault, which is a chain with no *from* in it at all.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Step (passive)', 'Done from what', 'Right source?'], [
  ['The order is taken at the counter.', 'the customer', '✓'],
  ['A picking list is typed.', 'the order', '✓'],
  ['The goods are picked.', 'the picking list', '✓'],
  ['The load is counted at the gate.', 'the order', '✓ — and this is the one we changed'],
  ['The gate sheet is signed.', 'the count, by name', '✓'],
  ['The invoice is raised.', 'the order', '✗ **not** the gate sheet'],
], [2, 1.4, 0.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Six steps, no names. The source that looked wrong when I wrote it down was the last one: the invoice is raised from the order, so a difference found at the gate never reaches it. Nobody has ever said that out loud here and the gate count has been running for a year."', '⚠ Count the processes in the room with at least one wrong source. It is most of them, and the right response in the classroom is not triumph but the observation that none of these companies is badly run — a wrong source is invisible precisely because every individual step is correct.']));
out.push(stage('5', 'Read'));
out.push(p('1 Step 4 — the gate sheet is signed, by name, by whoever counted it — and the page says it is the only step where a person is named and that the naming is **deliberate**.  2 Step 6 raises the invoice from the order, so a difference recorded at step 5 is not picked up; somebody has to carry it across by hand and nothing says who. It happened once, in March, and **the customer found it**.  3 It refuses to invent a fix: *we do not have a fix yet and we are not going to invent one for this page*.'));
out.push(note('⚠ Question 3 is the one worth five minutes. Ask the class what would have happened if the page had invented a control — and lead them to the answer that the invented control would then have been audited, found not to exist, and would have cost more than the gap.'));
out.push(stage('6', 'Write with help – sample (134 words)'));
out.push(sample(null, [
  '**CASH AT THE COUNTER — the procedure as it is, October. Version 2. Effective 1 October.**',
  '**1.** Cash **is taken** at the counter and a receipt **is written** from the numbered book.',
  '**2.** The day book **is written from the till roll** at the close of trading, by whoever closes.',
  '**3.** The bag **is counted against the day book**, by hand, by one person, and the bag slip **is signed, by name, by that person.** This is the only step where a person is named and it is named deliberately.',
  '**4.** The paying-in slip **is written from the bag**, and the bag **is not sealed until** the slip and the day book agree.',
  '**5.** The ledger **is written from the paying-in book** once the bank has stamped it.',
  '⚠ **Known gap, stated by us before you ask.** Step 5 copies from the paying-in book, so cash taken and not banked is invisible until the month end. **This has happened once, in June, and it was found by the month-end reconciliation and not by us.** We do not have a fix yet.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Six steps or fewer, all passive, all present', '✓ five'],
  ['Each step says what it is done **from**', '✓'],
  ['One named step, with the naming explained', '✓ step 3'],
  ['A known gap with its date, and no invented fix', '✓ June, found by the reconciliation'],
], [5, 1]));
out.push(note('⚠ The commonest ✗ at this stage is the third line: learners name a person in two or three steps because it feels more rigorous. It is the opposite — each extra name is a step that expires when somebody leaves.'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three gaps read out. **The classroom question that works:** which of these gaps would be found by the customer, and which by you? A gap the customer finds first is the expensive kind, and it is usually the last step of a chain.'));
out.push(stage('7', 'Write freely – sample (128 words)'));
out.push(sample(null, [
  'Nobody has ever written down how a returned item is handled, and I have now done it. The goods are brought back to the counter and a note is written on the pad. The item is put on the shelf behind the counter. A credit note is raised from the pad note. The credit note is entered in the ledger from the credit book.',
  'What I found when I wrote it as steps is that nothing in the chain is written **from the original invoice**, so nobody checks that we are crediting the price we charged. Twice this year we have credited the current price for something sold at the old one. With names in it the process looked fine, because the person who does step three has been doing it for eleven years and has never made a mistake. ⚠ The process is still wrong.',
]));
out.push(note('⚠ The last two sentences of that sample are the mark scheme for cycle 1 in one phrase: a reliable person and an unreliable process are not the same thing, and the passive is what makes the difference visible.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the step that surprised them_ — "nothing is checked against the original invoice"   ✓ _present passive throughout?_ — yes, except *I have now done it*, which is correctly active because it is not a process   ? _which document is copied from the wrong one?_ — "the credit note, from the pad note rather than the invoice"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Of three texts, usually two show the writer something they did not know. **If a class reports three out of three, check that they have actually described a process and not a list of duties** — the commonest evasion in cycle 7 is a job description in the passive voice.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Six steps, no names, and I showed it to Abu Yasser, who does step three. He said two things. The first was that step three is not done against the list on a Thursday, it is done from memory and checked later. The second was that nobody had asked him before. ⚠ Both of those belong on the page.']));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  How it came to be done that way'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect *it has always been done that way* from at least one learner, and do not correct it yet — 5.2 is about to make the point better than you can.'));
out.push(p('**b**  The second. A date and a prompt turn a habit into a decision, and a reader who has both can take the control on trust instead of testing it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 Because he cannot tell whether an undated control is a decision or a habit, so he has to test it rather than take it — *an undated control costs me an afternoon and costs you my afternoon*.  2 That a control introduced after a **near miss** says something rarer than one introduced after a loss: most of what he sees was introduced after a loss, which tells him a company reacts.'));
out.push(p('**Language box – Practise (samples):**  1 _The gate count was introduced in September 2024, after two consignments had been signed for in error. **Near miss** — neither cost money._  2 _The fourteen-day written price was introduced in April 2025, after wrap had been sold at or below cost for about two months. **A loss.**_  3 _The two-signature rule cannot be dated. **Nobody can now say what prompted it.**_  4 _The store room was locked in 2023 after stock had gone missing twice. **A loss.**_  5 _Nobody can now say what prompted the Friday printing; it predates the second site._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'The two-signature rule on anything over 500,000. When was it introduced and what prompted it?'],
  ['A', 'It has always been done that way.'],
  ['B', 'That is not an answer I can work with. Try again.'],
  ['A', 'Nobody can now say. Abu Yasser thinks it was Mr Ayoub\'s father and that the figure was once 50,000.'],
  ['B', 'That is an answer, and a better one than you think. What does it tell me?'],
  ['A', 'That the figure has not been reviewed since the currency changed.'],
  ['B', 'So the control is obeyed and cannot be justified, which is more dangerous than no control at all.'],
]));
out.push(note('⚠ Role card 2 is the one to perform in front of the class. *It has always been done that way* is the sentence every learner has used and the exchange gives them a replacement for it that is honest and costs them nothing.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners mark each prompt **L** or **N** and count. **Typical errors:** _it was introduce in 2024_ · _after two consignments were been signed_ (*were been* for *had been*) · _it was introduced for two consignments_ (*for* instead of *after*) · and the content fault, which is a date with no prompt — *September 2024* on its own tells a reader nothing they can use.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The control', 'Introduced', 'Prompted by', 'Loss or near miss?'], [
  ['Gate count against the order, signed by name', 'Sept 2024', 'two consignments signed for in error after a change of driver; neither cost money', '**N**'],
  ['Price held 14 days in writing', 'Apr 2025', 'wrap sold at or below cost for about two months', '**L**'],
  ['One price list, printed Fridays', 'Oct 2025', 'two undated lists in one building; a credit of 46,000', '**L**'],
  ['Two signatures over 500,000', 'unknown', '**nobody can now say**', '—'],
], [1.3, 0.9, 1.6, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The gate count was introduced in September 2024, after two consignments had been signed for in error. Neither cost money, so it was a near miss. The two-signature rule is undated and nobody can say what prompted it."', '⚠ Count the losses against the near misses in the room. A ratio of four losses to one near miss is normal and is not a criticism of anybody — but it is worth naming, because a company whose every control came from a loss has never yet acted on a warning, and that is a fact about the company rather than about any person in it.']));
out.push(stage('5', 'Read'));
out.push(p('1 That the two near misses were both in the last fourteen months and the two losses were both before that — which looks like a change in the way the company works.  2 That the company may simply have been **writing things down** since the second site opened, so that near misses before that were not recorded rather than not noticed.  3 That 500,000 is now about a fortnight of counter takings rather than a serious sum, that the figure was once 50,000, and that the company **cannot justify** it.'));
out.push(note('⚠ Question 2 is the single most advanced move in Book 1 and it is worth naming as such: the page draws the conclusion that flatters it and then supplies the alternative explanation itself. Learners find this counter-intuitive — *why help him disbelieve you?* — and the answer is in the dialogue: the auditor would have reached the alternative anyway, and the page that got there first is believed about everything else on it.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**CONTROLS — when each was introduced, and what prompted it.**',
  'Gate count against the delivery note | 2019 | a short delivery of eleven boxes paid in full | **L**',
  'Two prices in writing before any account is opened | 2022 | a supplier who raised a quoted price after the first order | **L**',
  'Keys to the finished-goods store held by two people | 2024 | a Saturday when the only keyholder was in Homs; nothing was lost | **N**',
  'Stock counted monthly rather than quarterly | unknown | **nobody can now say** | —',
  '**What this table says about us.** Two of our four came from a loss and one from a near miss. We would like to say we have started acting earlier. ⚠ It may equally be that the near miss was recent enough for somebody to remember it, and that older near misses were never written down.',
  '**The one with no history.** Nobody can date the monthly count. We cannot justify monthly rather than quarterly and have never tested whether it finds anything.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A date and a prompt for every control', '✓ — three dated, one honest *unknown*'],
  ['Losses and near misses marked and counted', '✓ two and one'],
  ['The flattering conclusion undercut', '✓'],
  ['The undatable control, and what is wrong with it', '✓ never tested'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The undercutting sentences read out. **Ask which writer the class would trust with a figure** — and then make the point explicitly: the writer who undercut themselves is trusted *more*, and that is not a trick of style but a real inference, because the undercutting cost them something.'));
out.push(stage('7', 'Write freely – sample (131 words)'));
out.push(sample(null, [
  'Nothing over 500,000 can be paid on one signature. The rule came from Mr Ayoub\'s father and Abu Yasser says the figure was once 50,000, which in 1998 was a serious sum and is now about a fortnight of counter takings.',
  'So the rule is obeyed and means nothing. Nadia and I sign four or five of these a week and neither of us reads them, because the figure is low enough that everything reaches it. The rule that was meant to make us look at large payments has trained us not to look at any.',
  'To change the figure, Mr Ayoub would have to agree, and he will say that his father set it. ⚠ What I would put to him is not that the rule is wrong but that at 50,000 it worked and at 500,000 it has quietly stopped working while nobody did anything.',
]));
out.push(note('⚠ That sample contains the most useful observation in 5.2 and learners reach it on their own surprisingly often: a good rule with a fixed figure in it becomes a bad rule by doing nothing at all. Write it on the board when somebody produces it.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what the rule once meant_ — "50,000 in 1998 was a serious sum"   ✓ _past passive with a date and a prompt?_ — partly; the rule itself has no date, which is correctly stated   ? _who would have to agree to change it?_ — "Mr Ayoub, and he will say it was his father\'s"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Nearly all of these rules were sensible when they were made. **The uncomfortable point is worth landing:** nobody made a bad rule, and the rule became bad anyway — which means the fault is the absence of a review date, not anybody\'s judgement.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['I asked Abu Yasser, who has been here since 1998. The gate sheet was introduced in 2005, after a driver had taken a pallet that belonged to another customer. It was a loss — about 30,000 — and he remembers the amount. ⚠ Nobody had written the prompt down in twenty years.']));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  By hand, with a pen'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect *by hand* and *with a pen* to be confused in both directions; the fix is in the box and not in the explanation.'));
out.push(p('**b**  ✓ _It is signed by hand._ (manner)  ✗ _It is signed with hand._ (*with* needs a tool — *with a pen*)  ✗ _It is counted by the gate sheet._ (a document cannot count)  ✓ _It is counted against the gate sheet._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *By* is the person; *with*, *on* and *against* are the thing — *recorded by the person who counted, on the gate sheet*.  2 Because the sentence as written requires nothing: there is no person in it, so there is nobody who has failed if it is not done.'));
out.push(p('**Language box – Practise (samples):**  1 _The gate sheet is signed **by** whoever counted, **with** a pen, **at** the gate._  2 _The count is made **by hand**, **by** one person, **against** the order._  3 _The invoice is raised **by** accounts, **on** the office machine, **from** the order._  4 _The order is written **by** whoever takes it, **on** a numbered form._  5 _The stock entry is made **by** whoever is entering, **on** the system, **from** the count sheets, **by hand**._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Step four. "The stock is updated by the system."'],
  ['A', 'It is.'],
  ['B', 'Is it? A system cannot update anything. It is a machine with nobody at it.'],
  ['A', 'It is updated **on** the system. By whoever is entering. From the count sheets.'],
  ['B', 'And how?'],
  ['A', 'By hand. One line at a time.'],
  ['B', 'Then that is four facts and your sentence had none of them. ⚠ *By* is the person; *on* is the machine.'],
  ['A', 'Does it matter? Everybody knows what it means.'],
  ['B', 'Look at what the sentence requires: nothing. There is no person in it, so nobody has failed when the stock is three weeks behind.'],
]));
out.push(note('⚠ *Updated by the system* is the commonest real-world example of this fault and learners meet it constantly. It is worth saying plainly that the sentence usually appears **because** nobody wants to name who does the entering.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners count the facts in the repaired sentence; four where there was one is normal. **Typical errors:** _signed with hand_ · _counted by the order_ · _recorded in the gate sheet_ (*in* for *on* — acceptable in speech, wrong on a form) · and _signed by pen_, which puts a tool after *by*.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The step as written', 'Repaired: by whom · with what · on what · against what'], [
  ['The difference is recorded by the gate sheet.', 'recorded **by** the person who counted, **on** the gate sheet, **with** a pen'],
  ['The stock is updated by the system.', 'updated **by** whoever is entering, **on** the system, **from** the count sheets, **by hand**'],
  ['The account is reconciled by the statement.', 'reconciled **by** accounts, **against** the statement, **with** a printed ledger, monthly'],
  ['The order is confirmed by email.', '✓ correct — *by email* is a manner, not a doer'],
  ['The goods are checked by the delivery note.', 'checked **by** whoever receives them, **against** the delivery note'],
], [1.6, 2.4]));
out.push(note('⚠ Row 4 matters: *by email*, *by telephone*, *by hand* and *by post* are manners and are correct after *by*. Learners who have just learned the rule will over-apply it and "correct" them.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It said the stock is updated by the system. It is actually done by whoever is entering, on the system, from the count sheets, by hand, one line at a time. Four facts in place of none — and the fourth room has not been entered since August, which the old sentence could not have told anybody."']));
out.push(stage('5', 'Read'));
out.push(p('1 Nothing — *nothing about what we do*. Four steps said what happened without saying who by or against what, and now they do.  2 By **reading the page aloud to somebody who does not work there**.  3 That a procedure **is** a set of places where a person could fail: *there are now four places where a person could have failed to do something, and before there were none. That is not a cost of the rewrite. That is what a procedure is.*'));
out.push(note('⚠ Question 3 is the sentence to put on the board for the whole unit. A learner who understands it will never again write a procedure with nobody in it, and will also stop apologising for pages that make demands.'));
out.push(stage('6', 'Write with help – sample (136 words)'));
out.push(sample(null, [
  '**GOODS IN — version 3. Effective 1 November. Changed after reading version 2 aloud to a customer.**',
  '**What has changed.** Nothing about the work. Three steps said what happened and did not say who by or against what. ⚠ We found this by reading the page aloud to somebody who does not work here, who asked *who* four times in two minutes.',
  '1 | The delivery is checked on arrival. | The delivery is checked **against the delivery note**, **by hand**, **by** whoever receives it.',
  '2 | The note is signed. | The note is signed **by that same person, by name**, and **not** by anybody who did not count.',
  '3 | The stock is updated by the system. | The stock is updated **on** the system **by** whoever is entering, **from** the signed note.',
  '**One thing we have learned.** All three sentences were true before and required nobody. The page is now harder: there are three places where a person could fail and before there were none.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Old and new side by side, with the additions visible', '✓'],
  ['A statement that the work itself has not changed', '✓'],
  ['The method named', '✓ read aloud to a customer'],
  ['The count of places a person could now fail', '✓ three'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The counts read out. **Ask whether a page with more such places is a better page.** The answer is yes and the reason is worth saying: a place where somebody could fail is also the only place where anybody can be supported, trained or defended.'));
out.push(stage('7', 'Write freely – sample (126 words)'));
out.push(sample(null, [
  'There is a notice in our yard that says *all spillages must be cleaned up immediately*. It has been there for six years, laminated, and the frame has been replaced once.',
  'It requires nobody. There is no spillage officer, no cleaning store named and nobody on duty after six, which is when the spillages happen. When there was oil on the ramp in July, three people stepped over it and the fourth cleaned it up, and the fourth was the one who had nothing else to do.',
  'To require somebody it would have to say that a spillage is cleaned up by whoever finds it, or by the gate man if it is after six, and that the materials are in the cupboard by the weighbridge. ⚠ Forty words instead of nine, and one of them a person.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the sentence that requires nobody_ — "all spillages must be cleaned up immediately"   ✓ _by, with, on, against used correctly?_ — yes, and *by whoever finds it* is the right form   ? _who should it name?_ — "a role, not a person: whoever finds it, or the gate man after six"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most of these sentences are on a wall, framed or laminated. **The observation to draw out:** the grander the presentation, the more often nobody is required — because a notice that names a role has to be reprinted when the roles change, and a notice that names nobody never has to be touched again.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I read our returns procedure aloud to my brother, who sells vegetables. He stopped me three times: *who writes the note*, *who decides the price*, and *where does the item go*. Three steps and he could not follow any of them. ⚠ He has never seen our shop and that is exactly why he found them.']));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  First, then, and only after that'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners will say every step is fixed; let them, and let 5.4 disprove it.'));
out.push(p('**b**  The second. *Then the load is released* is a step; *the load is not released until the difference has been seen* is a condition, and only a condition can be broken.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 What breaks if it is done out of order — if nothing breaks, the step is habit and not a rule.  2 Because a procedure where every step is marked essential is abandoned the first busy Thursday: nobody can hold six rigid steps under pressure, so they keep none. **Mark two and people keep two.**'));
out.push(p('**Language box – Practise (samples):**  1 **Goods out:** _the gate sheet is not signed until the load has been counted_ · _the load is not released until any difference has been seen_.  2 **A payment in:** _the day book is written before the bag leaves the counter_ · _the ledger is not written until the bank has stamped the slip_.  3 **A credit note:** _the top copy is not sent until it has been approved_ · _nothing is sent until the second copy is in the book_.  4 **A stock count:** _the sheet is not altered after it has been signed_ · _the system is not updated until the count has been checked by a second person_.  5 **Taking somebody on:** _nobody starts until a reference has been taken_ · _no pay is set until it has been approved_.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Six steps. Which have to be in that order?'],
  ['A', 'All of them, surely.'],
  ['B', 'Try it. Could the bag be counted before the day book is written?'],
  ['A', 'It could. People do it when it is busy.'],
  ['B', 'So that one is not fixed. Could the ledger be written before the bank stamps the slip?'],
  ['A', 'No. Then we would be recording money we had not banked.'],
  ['B', 'So that one is. Keep going — and you will find two.'],
  ['A', 'Two out of six. That feels like permission to be sloppy about four.'],
  ['B', 'It is permission to be flexible about four, so that the two survive. ⚠ A control that cannot bend anywhere breaks everywhere.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two fixed steps and what breaks. **Typical errors:** _it is not released until the difference has not been seen_ (the double negative — very common and worth drilling) · _only after the count the sheet is signed_ (no inversion; *only after the count **is** the sheet signed*) · _it must not be signed until before the count_ · and the content fault, which is four or five steps marked as fixed.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Step', 'Fixed?', 'What breaks if it is out of order'], [
  ['The order is written on a numbered form.', 'no', 'nothing — it is habit, and a good one'],
  ['A picking list is typed from the order.', 'no', 'nothing; it has been done from memory on a Thursday'],
  ['The goods are picked against the list.', 'no', 'nothing, if the count still happens'],
  ['The load is counted against the order.', '**yes**', 'the signature would certify a count that did not happen'],
  ['Any difference is seen before release.', '**yes**', 'a difference becomes a dispute instead of a decision'],
  ['The invoice is raised from the order.', 'no', 'nothing — it is sometimes raised first'],
], [1.8, 0.7, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of six steps, two are fixed. The first is the count before the signature, because otherwise the signature certifies a count that did not happen and the signature is the only evidence we have. The second is the difference before the release, because otherwise we lose the choice about what to do."', '⚠ Count the procedures in the room with more than two fixed steps, then ask whether those procedures are actually followed on a Thursday. The honest answer is usually no, and that is the argument for marking two.']));
out.push(stage('5', 'Read'));
out.push(p('1 Everything downstream — the signature certifies a count that did not happen, and **every claim the company has ever settled rested on a gate sheet**.  2 **Stop the load.** *A load standing in the yard has never cost us what a wrong gate sheet has.*  3 Continuous improvement: *four of those versions changed the words and one changed the work. We are not going to describe that as continuous improvement.*'));
out.push(stage('6', 'Write with help – sample (138 words)'));
out.push(sample(null, [
  '**CASH AT THE COUNTER — version 3. Effective 1 November. Two steps are marked and three are not.**',
  '**The ordinary steps.** First, cash is taken and a receipt is written from the numbered book. Then the day book is written from the till roll. After that the bag is counted and the paying-in slip is written from it.',
  '**The ones that are fixed, and why.**',
  '⚠ **1 · The bag must not be sealed before the slip and the day book agree.** If it is, a difference is discovered at the bank, where it is somebody else\'s word against ours. **What breaks:** the only chance to find it ourselves.',
  '⚠ **2 · The ledger is not written until the bank has stamped the slip.** **What breaks:** the ledger would record money we had not banked, which is the one error an auditor assumes is deliberate.',
  '**What this means on a busy day.** ⚠ **If you cannot do both, put the bag in the safe unsealed and leave the day book open.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No more than two steps marked as fixed', '✓'],
  ['A "what breaks" on each fixed step', '✓'],
  ['An instruction for when it cannot be done', '✓ safe unsealed, day book open'],
  ['One honest paragraph about the page itself', '✗ **missing** — this is version 3 and the page does not say what the first two changed'],
], [5, 1]));
out.push(note('⚠ Leave that ✗ in the sample. The missing paragraph is the commonest omission in cycle 6 of this unit and learners mark it in each other\'s work far more readily than in their own.'));
out.push(stage('6R', 'Share'));
out.push(p('The "what breaks" lines read out. **The test question:** would this stop you cutting the corner at four o\'clock? A *what breaks* that names a consequence to the company stops people; one that names a rule does not.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'In August I released a load without the gate sheet signed. One lorry, a driver who had waited two hours, and Abu Yasser at the dentist. The rule says the sheet is signed by whoever counted, and I had not counted it, so by the page I could not sign and could not release.',
  'I counted it myself, signed it in my own name, and wrote underneath that I had counted it and that Abu Yasser had not been there. It saved a day\'s delay and a customer who had already telephoned twice.',
  '⚠ What the rule should have said is what I did: that in the absence of the usual person, the count is made and signed by whoever makes it, with a note. Instead the page left me choosing between breaking it and stopping a lorry, and nobody should be in that position with a driver watching.',
]));
out.push(note('⚠ That sample does the thing 5.4 is for: the learner did not break the control, they performed it and documented the substitution. ⚠ Distinguish that in marking from a text where somebody skipped a step and called it judgement.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the good reason_ — "a driver who had waited two hours"   ✓ _not … until / only after?_ — yes, quoted from the page   ? _should the rule have covered it?_ — "yes: who signs when the usual person is not here"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In nearly every text the rule should have said what to do. **The useful conclusion for a class to carry out of the room:** a rule that has no clause for its own impossibility will be broken by the most conscientious person in the building, and they will then feel bad about it.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Our returns procedure has six steps. Only one is genuinely fixed: the item must not go back on the shelf until the credit has been raised, because otherwise it is sold twice and credited once. ⚠ That has happened. The other five can be done in any order and I have marked them as ordinary.']));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Why there is nobody in this sentence'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Every workplace has one. Notices, not procedures, are the richest source.'));
out.push(p('**b**  May have nobody: _the stock is counted quarterly_ (a company duty; a **role** is better still) and _the goods are checked on arrival_ (same). May **not**: _an error was made in the invoice_ and _the customer was not informed_ — both are single events, and both have a person in them who has been removed.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **Who would have failed, if it had not been done?** For the stock count the answer is *anybody — it is the company\'s job*, so the passive is right; for the customer the answer is a person.  2 That every word of it is true, and that this is the problem: it is the only kind of dishonesty that survives an audit, because there is nothing in it to find.'));
out.push(p('**Language box – Practise (samples):**  1 _May have nobody — a procedure; better as **by whoever counts**._  2 _May not — an incident. Whoever made it. ⚠ *An error was made* is true, grammatical and worth nothing._  3 _May have nobody — a procedure; **by whoever receives them** is better._  4 _May not — an incident. Whoever priced the order._  5 _May not — and this one is the worst of the five, because a **decision** always has a decider: that was Mr Ayoub, twice, in 2019 and 2021._'));
out.push(note('⚠ Item 5 is the one to spend time on. *A decision was taken not to replace him* is the sentence form in which responsibility most often disappears, and learners recognise it from documents they have received rather than written.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'The notice says *all spillages must be cleaned up immediately.* Who would have failed, if it had not been done?'],
  ['A', 'Whoever saw it.'],
  ['B', 'Is anybody required to look?'],
  ['A', 'No.'],
  ['B', 'Is anybody on duty after six?'],
  ['A', 'No. And that is when they happen.'],
  ['B', 'So the notice requires nobody, and it has been on the wall for six years being obeyed by nobody and broken by nobody.'],
  ['A', 'It is still true.'],
  ['B', 'Every word of it. ⚠ That is the problem.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners sort the sentences into procedures and incidents and name who should be in each incident. **Typical errors:** _an error was made by a mistake_ (a cause after *by*, where a person belongs) · _the customer was not informed by Hala_, which is grammatical and wrong in **register** — an incident file wants the plain active *Hala did not write to him, because…* · and the sorting fault, which is calling an incident a procedure because it is written like one.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence, as written', 'Procedure or incident?', 'Who should be in it'], [
  ['All spillages must be cleaned up immediately.', 'procedure', '**a role** — whoever finds it; the gate man after six'],
  ['An error was made in the pricing of order 0914.', 'incident', 'Hala, with the reason — the counter list was eight days old'],
  ['The stock is counted quarterly.', 'procedure', 'a role — whoever is counting, with a second checker'],
  ['The customer was not informed of the rise.', 'incident', 'whoever priced it; and an honest *nobody wrote* for the calls'],
  ['It was decided not to replace the driver.', 'incident', '**Mr Ayoub** — a decision always has a decider'],
], [2, 1.1, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It says *it was decided not to replace the driver*. If it had not been decided, nobody would have failed — because nobody is in the sentence. So it is an incident wearing a procedure\'s clothes, and it should say that Mr Ayoub decided it, in September, and why."', '⚠ Collect the sentences that require nobody at all. Those are the ones on walls, and the pattern is worth naming: the sentences with nobody in them are the ones nobody has had to revise.']));
out.push(stage('5', 'Read'));
out.push(p('1 Three people are named on the left — Hala, Mr Haffar and *me* — against **no names at all** on the right.  2 **Five roles**: whoever prints the list, whoever prices the order, accounts, the coordinator, whoever takes the order.  3 Because two of the three people on the left may be somewhere else in April, and the procedure still has to be true then.'));
out.push(note('⚠ The sentence to land from this page is the last one: *neither is a softened version of the other*. Learners arrive at 5.5 assuming the passive is the polite register and the active the blunt one. The two columns are not degrees of politeness; they are two different jobs, and using one voice for both jobs is the fault the whole unit has been building towards.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**THE SAME FACTS, WRITTEN TWICE.**',
  '**Incident.** On 3 September Nadia paid an invoice of 180,000 twice. The first payment had been made from the delivery note and the second from the supplier\'s statement, and the statement had not been marked when the first was paid.',
  '**Procedure.** A supplier invoice **is paid from the invoice only**, **by** accounts, and **is marked paid, by hand, with the date,** at the time of payment.',
  '**Incident.** Nobody noticed for five weeks. The statement for September was not reconciled because Nadia was in Homs and nobody else does it.',
  '**Procedure.** The supplier statement **is reconciled monthly by accounts, and by whoever is covering accounts** if accounts is away. Cover **is named** on the holiday sheet before anybody leaves.',
  '⚠ **Why the two look different.** The left has one person and three dates; the right has no names and three roles — and the right column names the cover, which is the part that failed.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Names and dates on the left, roles on the right', '✓'],
  ['The incident written first', '✓'],
  ['The counts stated', '✓ one person, three dates, three roles'],
  ['Nothing in the right column that expires with a person', '✓ — *whoever is covering* rather than a name'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Right columns read out alone. **Ask whether each would still be true if everybody left.** A right column that survives that question is a procedure; one that does not is a staff list in the passive voice.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'The letter said *a decision has been taken to discontinue the Homs branch*. Four of us read it and three asked the same question in the yard, which was who.',
  'It was Mr Ayoub. Everybody knew it was Mr Ayoub, and the letter still said it that way, and the effect was not that nobody blamed him — it was that nobody could ask him anything. A sentence with nobody in it cannot be questioned, because there is no one in it to answer.',
  '⚠ The vagueness did protect something, and it is worth being honest about that: it protected a man who had made the same decision in 2019 and had to make it again, and who did not want to be asked about it in the yard. ⚠ But it cost the four of us the only conversation that would have told us why.',
]));
out.push(note('⚠ Sample 7 is the strongest text in the unit and it does the harder thing: it concedes that the agentless sentence worked. Mark that concession up. A learner who writes *vagueness is always dishonest* has learned a slogan; a learner who can say what it bought and what it cost has learned 5.5.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the sentence with nobody in it_ — "a decision has been taken to discontinue the Homs branch"   ✓ _procedure voice and incident voice kept apart?_ — yes, and the point is that the letter did not keep them apart   ? _did the vagueness protect anybody, or only delay something?_ — "it protected him, and it cost the conversation"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sometimes the vagueness genuinely protects somebody. **Say so.** A unit that teaches learners the passive is a moral failing has taught them something false and they will discover it the first time they have to write about a colleague; a unit that teaches them to know what it costs has given them a decision they can make.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The sign in our stairwell says *this door is to be kept closed at all times*. Who would have failed? Nobody — the door has no keeper. Rewritten: *this door is closed by whoever uses it last, and is checked by the gate man at six.* ⚠ Now two people can fail and the door will be shut.']));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  What has been changed'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Collect them on the board without sorting; the sorting is 5.6.'));
out.push(p('**b**  ✓ _Two procedures have been rewritten._  ✗ _are been rewritten_  ✗ _have rewritten_ (missing *been* — the commonest error of the cycle)  ✓ _The list has been printed on Fridays since October._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 Between what has been **changed** — the work is different — and what has only been **written down**, where the work is the same.  2 That it is a writing-down too: the second rewrite added *who by* and *against what* and altered nothing about what happens. Out of five items there are **two changes and three documents**.'));
out.push(p('**Language box – Practise (samples):**  1 **changed** — two copies to one is a different practice.  2 **written down** — the procedures describe what was already done.  3 **written down** — a date box is a form, not a practice, unless somebody now has to fill it.  4 **written down** — by definition: *no change of practice*.  5 **changed** — a new limit alters who may sign what.'));
out.push(note('⚠ Item 3 is deliberately on the edge, and the discussion is the point: a date box that nobody is required to complete is a document; a date box that a named role must complete is a change. Push the class to resolve it by asking **who now has to do something they did not do before** — which is the same test as 5.5\'s.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'What has been changed since last year. Six things.'],
  ['B', 'Read them.'],
  ['A', 'Three procedures have been written. A form has been reprinted. A notice has been laminated. And the till has been reconciled daily instead of weekly.'],
  ['B', 'Now sort them: changed, or written down?'],
  ['A', 'The till is a change. The rest are documents.'],
  ['B', 'And the laminated notice — was anything done differently once it was laminated?'],
  ['A', 'No. It is the same notice in plastic.'],
  ['B', '⚠ Then out of six items you have one change and five documents, and the one change is the till.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two counts. **Typical errors:** _two procedures are been rewritten_ · _the list has printed on Fridays_ (active for passive) · _nine procedures have been wrote_ · and the content fault, which is putting a document in the changes list because it took a month of work. ⚠ Effort is not change, and saying so kindly is part of teaching this cycle.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What has been…', 'Changed, or written down?', 'What is different about what people do'], [
  ['The gate count moved to the order', '**changed**', 'the counter compares against a different document'],
  ['The credit list reduced to one copy', '**changed**', 'nobody may price from an old copy'],
  ['Nine procedures written', 'written down', 'nothing — they describe what was already done'],
  ['The picking list reprinted', 'written down', 'nothing, though it is easier to trace'],
  ['A date box added to the gate sheet', 'written down', 'nothing — nobody is required to fill it'],
  ['The goods-out page rewritten twice', 'written down', 'nothing; it added *who by* and *against what*'],
], [1.8, 1.1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Out of six items, two are changes and four are documents. The one real change is the gate count moving from the picking list to the order, and it was prompted by an order that went short in October."', '⚠ Collect the room\'s totals. About three documents to one change is normal and is not a criticism — writing down what you already do is most of what a small company needs. **The fault is only ever in the claiming.**']));
out.push(stage('5', 'Read'));
out.push(p('1 The gate count moving from the picking list to the **order**, since 1 November, prompted by an order that went short in October.  2 Three store rooms of four are on the system and the fourth and largest has not been entered since August, whereas a year ago all four were counted on paper and the paper was **current** — so the company is worse off on stock than before it started.  3 The two-signature limit of 500,000, which nobody can date or justify.'));
out.push(note('⚠ The "worst of both" paragraph is the hardest thing in Book 1 to get learners to write about their own workplace, and the reason is not shyness: a half-finished improvement is nearly always somebody\'s current project, and naming it as *worse than before* feels like an attack on them. ⚠ The sentence that unlocks it is the one on the page — *and we will be better off than ever when the fourth room is done* — because it makes the paragraph a progress report rather than a verdict.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**SINCE LAST OCTOBER — one change, four documents, and one thing that has got worse.**',
  '**One thing has been changed.** The till **has been reconciled** daily rather than weekly since March — this is the only change this year that alters what anybody does, and it was prompted by a week in February when a shortage of 14,000 could not be traced to a day.',
  '**Four things have been written down, and nothing about them has changed.** Three procedures **have been written**. A notice **has been laminated**. The holiday sheet **has been reprinted** to show cover. None of these altered any practice.',
  '⚠ **And one thing has got worse.** The customer records **have not been** finished: about two thirds are on the new system and the card index **has not been** kept up since June. A year ago the cards were complete. **We are in the worst of both and will be better off than ever when the rest is entered.**',
  '**What has not been done at all.** Nothing has been done about who covers accounts in August. It was on last year\'s list too.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the title', '✓ one, four and one'],
  ['Changes separated from documents, with *nothing has changed* said', '✓'],
  ['Something that has got worse, with its mechanism', '✓ cards stopped, system unfinished'],
  ['Something not done, and whether it was on the last list', '✓ August cover, second year'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The "got worse" paragraphs read out. **Ask which writer the class would believe about their improvements** — and make the inference explicit, because it is the whole argument of the cycle: the page that reports something worse is the only page whose good news can be taken at face value.'));
out.push(stage('7', 'Write freely – sample (137 words)'));
out.push(sample(null, [
  'We began putting the customer records on the computer in January and about two thirds are on. The card index was meant to be replaced by it.',
  'What has happened instead is that the cards have not been written up since June and the system has not been finished, so there is no complete record of anything. If a customer telephones about an order from last year, we look in two places and find it in neither about once a week. Before January we looked in one place and found it.',
  '⚠ So we are worse off than when we started, and the reason is not the computer: it is that nobody was told to keep the cards going until the system was complete, and everybody reasonably assumed that writing cards for a system we were abandoning was waste. What would finish it is three days of entering, and Mr Ayoub decides.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the "worst of both" state_ — "we look in two places and find it in neither"   ✓ _present perfect passive, with been?_ — yes throughout   ? _what would finish it, and who decides?_ — "three days of entering; Mr Ayoub"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts the old system is still running alongside the new one. ⚠ **The state nobody reports** is this one, and the reason is structural: the person who could report it is the person doing the project, and a progress report that says *worse than before* reads as a confession. **Naming that mechanism to a class is more useful than any encouragement to be honest.**'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Four changes and eleven documents. The four: the till daily, the gate count against the order, two keyholders, the written price. The eleven are procedures, forms and notices. ⚠ Eleven to four looks bad until you remember that none of the four could have been introduced without somebody first writing down what we actually do.']));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: what does this require of me?'));
out.push(stage('1', 'Get ready – Unit 5 quiz'));
out.push(p('**1** Because names tell a reader who is doing it today, and the procedure has to be true in April — and because taking the names out is what makes the gaps appear.  **2** *By* is the person (or a manner: *by hand*, *by email*); *with* is the tool. ⚠ And *on* is where it is written and *against* is what it is checked against.  **3** What breaks if it is done out of order? If nothing breaks, it is habit.  **4** *Who would have failed, if it had not been done?* It is the test for whether a sentence may have nobody in it: if the answer is a person, you have removed them.  **5** What has been **changed**, and what has only been **written down** — with both counts.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Steps one, two and six — they happen in the office.  2 That the page says *stop the load* and does not say **who he tells**, so a stopped load with nobody told is worse than one gone out: at least the gone one is somebody\'s problem.'));
out.push(note('⚠ The last four lines of Track 5.13 are the point of the unit and should be read aloud twice. Abu Yasser says the clause is missing because whoever wrote the page has never had to stop a load; Nour says *I wrote the page*; he says *I know*. ⚠ He is not scoring a point — he knew she wrote it before he said it, and he said it anyway because the fault is in the method and not in her. Learners who have been managed badly will hear it as an attack; ask them what he would have gained by saying nothing.'));
out.push(p('**Language box – Practise (sample):**  _Of the six steps on the new page, two are yours: pick against the list and count against the order. Ignore one, two and six — they happen in the office. The one that cannot be bent is the signature, because it must not be signed before the count. And when you cannot?_ — ⚠ and whatever the learner\'s partner answers is the missing clause.'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'The bag goes to the bank daily. That is the procedure.'],
  ['B', 'On Saturdays I am on my own. I cannot leave the counter.'],
  ['A', 'Then… you go at closing.'],
  ['B', 'The bank shuts at one. I close at six.'],
  ['A', 'So Saturday\'s cash stays here.'],
  ['B', 'It does, every Saturday, and the page does not say so. It does not say where it is kept, who knows it is here, or what I write.'],
  ['A', 'That is three clauses and it is version two: _cash taken on a Saturday is held in the safe, recorded on the day book as held, and banked on Monday with Monday\'s, and the coordinator is told by telephone before closing._'],
  ['B', 'Nobody has asked me about Saturday in four years.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the missing clause and say whether it is about **telling somebody**. It usually is. **Typical errors:** _it does not say who I tell to_ · _and when I can not?_ · _of the six, two is yours_ · and the content fault, which is explaining the whole procedure to somebody who only needs their own part.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'Which steps were theirs', 'What they asked', 'The missing clause'], [
  ['Abu Yasser (gate)', '3, 4 and 5 — both marked ones', 'And when I cannot? Two lorries, one of me.', 'stop the load **and tell the coordinator, or whoever is on the counter** if she is not here'],
  ['Hala (counter)', '1 and 2', 'What if the order is amended after I have typed the list?', 'a new list **is printed** and the old one **is destroyed**; the order number is unchanged'],
], [1, 1.2, 1.3, 1.6]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"Of six steps, three were his and both marked ones were his. He asked what to do on a Thursday with two lorries and one of him, and the page did not say who he tells — only *stop the load*."',
  '⚠ **The unit\'s mediation, named as the fifth unit of this book:** a procedure is written by the person who understands the process and followed by the person who understands the day, and the gap between them is always the same gap — **what to do when it cannot be done, and who to tell.** It is the same gap in every procedure in every company, which is why it is worth learning once.',
  '⚠ Ask the class who in their workplace has never had to follow their own procedure. It is usually whoever writes them, and the remedy is not better writing — it is the four-minute conversation in Track 5.13.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 3)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'D', 'C', 'E', 'A', 'B']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q3 is the discriminating item: **E** admits the known gap. Learners who answer **D** have matched on *stopped* and *cannot*, which is the Part 3 trap — the question asks which section admits the procedure does not work properly, and D says what to do when a person cannot follow it, which is the opposite of a fault in the procedure. ⚠ Teach the habit of reading the question for its **verb** — *admits* — before scanning.'));
out.push(stage('6', 'Write with help – sample (74 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Abu Yasser, of the six steps on the new page, three are yours: pick against the list, count against the order, and sign the sheet. The one that cannot be bent is the signature — it must not be signed before the count, because the signature is the only evidence we have. If you cannot do both marked steps, stop the load and tell me, or whoever is on the counter if I am not here. Ignore one, two and six: they happen in the office.',
]));
out.push(note('⚠ That sample is 84 words and would lose marks for length. ⚠ Use it as the first draft and have the class cut it to 80: the sentence to go is *because the signature is the only evidence we have*, which is the only one the reader already knows.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Which steps are theirs, and which to ignore', '✓'],
  ['The one that cannot be bent, with why', '✓'],
  ['What to do if they cannot, **and who to tell**', '✓ — *tell me, or whoever is on the counter*'],
  ['60 to 80 words — count them', '✗ 84 at the first attempt'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (129 words)'));
out.push(sample(null, [
  '**RETURNS — version 1. Effective 1 November. One step is marked and five are not.**',
  'The item **is brought** to the counter and a note **is written** on the pad from the original invoice. The invoice number **is copied** onto the note. The credit note **is raised from the invoice**, not from the pad. The credit **is entered** in the ledger from the credit book. The item **is inspected by whoever takes it in, by hand**, and the condition **is written, by name,** on the note.',
  '⚠ **The item is not put back on the shelf until the credit has been raised.** If it is, it is sold twice and credited once. **What breaks:** the stock figure and the customer\'s next order.',
  '**Known gap.** Nothing checks that we credit the price we charged. **If you cannot find the invoice, do not raise the credit — hold the item and tell me.**',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I gave the cash page to Hala and asked what she does when she cannot. She said Saturday, immediately, and then said nobody had asked her in four years. Her clause: *Saturday\'s cash is held in the safe, written on the day book as held, and the coordinator is told before closing.* ⚠ Three facts, and all three were already true.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 5 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'b', 'a', 'a', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 2 to 5 are one point in four costumes and should be marked as a group: *from* a source, *against* a comparison, *on* a document, *by* a person. A learner who gets 2 and 5 and misses 3 and 4 has *by* and *from* and has not got the pair that does the work in a procedure. ⚠ Question 8 catches the missing *been*, which is the form error of the unit.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Steps', 'The count is against', 'Who signs, and how', 'Invoice raised from', 'The known gap'], [[
  'six', 'the order (not the picking list)', 'whoever counted, by name', 'the order, by accounts', 'a difference at the gate is not carried to the invoice, and nothing says who should',
]], [0.7, 1.4, 1.3, 1.1, 2]));
out.push(note('⚠ The second gap needs **both** halves — *against the order, not the picking list* — because the contrast is the whole content of the step. *The order* alone scores the mark; a learner who wrote only *the order* should still be shown the second half. The fifth gap scores for the gap itself; the *nothing says who* clause is a bonus to praise, not a requirement.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (58 words)', ['Cash is taken at the counter and a receipt is written from the numbered book. The day book is written from the till roll by whoever closes. The bag is counted against the day book, by hand. ⚠ The bag is not sealed until the slip and the day book agree. Known gap: cash taken and not banked is invisible until the month end.']));
out.push(box('Marking the Unit 5 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Four steps in the present passive (2) · **each saying what it is done from or against** (2) · one step marked *not … until* (1) · one named role (1) · a known gap stated (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for *from* and *against* are the heart of this check, exactly as the number marks were in Unit 4. **Four well-formed passive steps with no sources score 2 out of 7**, and that is correct: a chain with no sources cannot show a gap, and showing the gap is what the unit is for. Say so before they write.',
  '⚠ Give the named-role mark for **a role**: *by whoever counted*, *by accounts*, *by whoever is covering*. ⚠ Do **not** give it for a person\'s name, and explain why in one line on the script — a name dates the page. This is the one place in Book 1 where a correct-looking answer is marked down on a principle, so the explanation is owed.',
  '⚠ The known-gap mark needs a real gap in the learner\'s own process, not *we could always improve*. A gap that names a document copied from the wrong document earns it outright.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 5**'));
out.push(p('**1 The passive learned as a register.** Many learners arrive believing the passive is the formal, polite or official way to say anything, and Unit 5 will confirm that belief unless you prevent it. The symptom appears in 5.5: a learner writes *an error was made* in an **incident** report and defends it as respectful. ⚠ Do not argue about politeness. Ask the single question — *who would have failed, if it had not been done?* — and let the sentence fail its own test. The two-column page in 5.5 exists for exactly this, and it is worth photocopying.'));
out.push(p('**2 Every step marked as fixed.** In 5.4 most learners will mark four, five or six steps *not … until*, because marking a step feels like taking it seriously. ⚠ The counter-argument that works is not about brevity; it is Mr Attar\'s: **mark two and people keep two, mark six and people keep none.** Then ask which of their own procedures they actually follow on a Thursday afternoon, and wait. The honest answer does the teaching, and the learner who gives it in front of the class has made the unit\'s point better than the book.'));
out.push(p('**3 The missing *been*.** *Two procedures have rewritten* and *are been rewritten* will both appear in 5.6 and neither is a thinking error — the perfect passive has three parts and the middle one carries no meaning, so it drops out under load. ⚠ Drill the chunk *has been · have been* as a single sound at the start of each lesson, as with Unit 1\'s third-person -s and Unit 4\'s *since*. ⚠ These are the three articulation faults of Book 1 and all three respond to the same treatment: a ten-second chunk drill daily, not an explanation.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 5 · Answer Key');
