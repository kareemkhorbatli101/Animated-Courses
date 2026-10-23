// Proactive Business English B1 · Syria Edition · Book 1 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'contributory factor · immediate cause · trigger · knock-on effect · consequence · fallout · chain of events · inference · conjecture · corroboration · attribution · culpability · negligence · failure mode · recurrence · mitigation · containment · remedial work · write-off · disruption · standstill · debrief · eyewitness · stoppage · idle time · repercussion · the balance of probability · on the evidence · not established · open question';
const BACK_AT_B1 = 'lead time · target · colleague';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 7  Cause, Effect and the Written Explanation'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**7.1**  give a cause in three registers, and choose the right one',
  '**7.2**  make the reader see the consequence',
  '**7.3**  say how bad a result was, not just that there was one',
  '**7.4**  build a chain of causes — and decide where to stop',
  '**7.5**  distinguish *caused*, *led to* and *contributed to*',
  '**7.6**  separate what you saw from what you were told and what you infer',
  '**7.7**  Review & Mediate: what does this report actually say caused it?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The three verbs in 7.5 are the most consequential words in this book', [
  '*The driver\'s late arrival **caused** the loss.* *The late arrival **led to** the loss.* *The late arrival **contributed to** the loss.* Those are three different claims and, if the document is ever read by a lawyer or an insurer, three different positions. **Nobody in this course will ever be asked to choose between them out loud, and everybody will choose between them in writing, several times a week.**',
  '⚠ So 7.5 is not a vocabulary cycle. It is the cycle where you learn that the verb you reach for first is usually stronger than the evidence you have, and that *contributed to* is not weakness — it is accuracy, and it is the only one of the three you can defend with a timeline.',
  '**And 7.6 is the discipline that makes 7.5 possible.** Three paragraphs, always in the same order: **what I saw · what I was told · what I infer.** Once those are separate, the verb chooses itself.',
], C.lyellow, C.orange));

// ======================= CYCLE 7.1 =======================
out.push(pb());
out.push(h2('7.1  Because, since, owing to'));
out.push(p('**Function:** giving a cause   ·   **Grammar:** *because · since · owing to · as a result of*   ·   **Pronunciation:** the pause before a cause in writing read aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say why something was late at your work this month. Then say it again for a customer, and again for a written report.'));
out.push(p('**b**  Which belongs where? _…because the lorry broke down. · …owing to a vehicle breakdown. · …as a result of a breakdown on the Homs road._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia object to in Nour\'s sentence?   **A** the tense   **B** that it names a person where a report needs a condition   **C** the length'));
out.push(p('**b**  Listen again. **1** What does she say *because* does that *owing to* does not? **2** What does she say the customer\'s version must still contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  "Same cause, three readers"', [
  ['Nour', 'The delivery was late because Fadi did not leave until half past ten.'],
  ['Nadia', 'True for the three of us in this room. Who else reads it?'],
  ['Nour', 'Mr Attar. And the customer gets a version.'],
  ['Nadia', 'Then you have written one sentence for three readers and it fits one of them. For us, *because Fadi did not leave until half past ten* — a person and a time, and we can act on it. For the file?'],
  ['Nour', '*Owing to a late departure from the yard.*'],
  ['Nadia', 'Good. No name, and still checkable, because the gate sheet has the time on it.'],
  ['Nour', 'And for Mr Haffar?'],
  ['Nadia', 'What does he need? Not the reason in that detail. He needs to know whether it will happen again on Thursday.'],
  ['Nour', '*Your delivery arrived at four rather than one as a result of a late departure from our yard. Thursday\'s is loaded the night before.*'],
  ['Nadia', 'That is the one. ⚠ And notice what you did not do, which is leave the cause out. People think the customer version means the vague version and it does not — it means the **short** version, with the thing he can use kept in.'],
  ['Nour', 'Most of the letters I have received in my life left the cause out.'],
  ['Nadia', 'Most of them were written by somebody protecting themselves, and you could tell. ⚠ *We apologise for the inconvenience caused* has no cause in it at all, which is why it reads as an insult rather than an apology.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three registers of cause — and one phrase to abandon**',
  table(['Form', 'Register', 'Example'], [
    ['**because** + clause', 'internal; names people', '…**because** Fadi did not leave until 10.30.'],
    ['**since** + clause', 'internal, cause already known', '**Since** the list had been superseded, the price was wrong.'],
    ['**owing to / due to** + noun', 'the file; no names', '…**owing to** a late departure from the yard.'],
    ['**as a result of** + noun', 'the customer; short', '…**as a result of** a late departure from our yard.'],
    ['⚠ **the inconvenience caused**', '⚠ no cause at all', 'abandon it — it is the sentence with the cause removed'],
  ], [1.7, 1.4, 2.4]),
  '⚠ **One cause, three versions, and the difference is the register and not the honesty.** The internal version names a person because somebody has to act; the file version names a condition because it must be true next April; the customer\'s version is **short**, not vague, and keeps the one thing the customer can use.',
  '⚠ **The customer\'s version must still contain the cause.** *We apologise for any inconvenience caused* is the cause taken out and the apology left in, which reads as an insult. Replace it with eight words naming the condition and what has changed.',
  '⚠ **_Owing to_ and _due to_ take a noun**, not a clause: *owing to a breakdown*, not ~~owing to the lorry broke down~~. This is the commonest error in the cycle.',
  '⚠ *Since* at the start of a sentence means **because**, not *from that time*, and it signals a cause the reader already knows.',
  '**Practise:** Give each cause three times — internal, file, customer. 1 a late delivery 2 a wrong price 3 a short load 4 a missed telephone call 5 an unpaid invoice',
  '**Useful phrases:**  because…  ·  since…  ·  owing to…  ·  as a result of…  ·  and what has changed is…',
  '**Pronunciation – the pause before a cause.** 🔊 **Track 7.2** Listen: _your delivery arrived at four rather than one // as a result of a late departure from our yard_. The small break before the cause is what makes a written sentence hearable. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives the internal version; B asks who else reads it and builds the other two. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ because __________.'],
  ['B', 'True for us. Who else reads it?'],
  ['A', '__________ and __________.'],
  ['B', 'Then give me the file version — no name, still checkable.'],
  ['A', 'Owing to __________.'],
  ['B', 'And the customer\'s. What does he actually need?'],
  ['A', '__________ as a result of __________. And __________ has changed.'],
  ['B', '⚠ And notice what you did not do, which is leave the cause out.'],
]));
out.push(table(['Role card 1 — the wrong price', 'Role card 2 — the short load'], [[
  'Internal: *because Hala priced it from the list of the 5th.* File: *owing to a superseded price list in use at the counter.* Customer: *your invoice was 46,000 high as a result of an out-of-date price list at our counter. One dated list is now printed on Fridays.*',
  'Internal: *because nobody counted the second pallet.* File: *owing to an incomplete gate count.* Customer: *four cartons were missing from Tuesday\'s load as a result of an incomplete count at our gate. The count is now against the order and signed by name.*',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write all three versions. Then ring the version that would be the easiest to write and the hardest to defend — it is the customer\'s, every time.'));
out.push(PHRASE_CARD(['because…', 'since…', 'owing to…', 'as a result of…', 'and what has changed is…', 'not "the inconvenience caused"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** real causes from your own month. Write each in all three registers.'));
out.push(table(['Internal — *because*', 'File — *owing to*', 'Customer — *as a result of*'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your three versions of one cause. Then say which one you would actually have sent before this lesson.'));
out.push(p('**Listener task:** count how many in the room would have sent the file version to the customer. It is the commonest mistake and it reads as evasion even when it is laziness.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _owing to the lorry broke down_ and _due to we had no driver_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the three versions, and answer the questions.'));
out.push(box(null, [
  '**ONE LATE DELIVERY, WRITTEN THREE TIMES. 11 November.**',
  '**1 · To Mr Ayoub and Nadia — internal.** Tuesday\'s Ghouta run left at 10.30 rather than 7.00 because Fadi was waiting for the Mezzeh pallets, which were not picked until 9.40 because the picking list was printed at 7.15 and the counter had three people queueing at it. Four drops arrived after four o\'clock and one, Mr Haffar\'s, was refused and came back.',
  '**2 · For the file — the incident record.** The Ghouta run of 11 November departed three and a half hours late, owing to a delay in picking caused by the picking list being produced after the counter opened. Four drops were made outside the stated window and one consignment was refused and returned. **Lead time from order to departure on that day: 17 hours against a stated 12.**',
  '**3 · To Mr Haffar — the customer.** Your order arrived at 4.20 rather than before one, and you were right to refuse it. That happened as a result of a late departure from our yard, which happened because our picking list is printed after the counter opens and the two compete for the same person. ⚠ **From Monday the Ghouta list is printed the night before.** Your Thursday order will be loaded on Wednesday evening and I will telephone you myself when it leaves the yard.',
  '⚠ **The same facts, and the customer\'s version is the only one with a change in it.** That is not a coincidence: the internal version is for diagnosis, the file version is for the record, and the customer\'s is the only one addressed to somebody who has to decide whether to order again on Thursday.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which version names people, and why?'));
out.push(item('2', 'What does the file version add that neither of the others has?'));
out.push(item('3', 'What does the page say is the only version with a change in it, and why?'));
out.push(box('Writer\'s box', [
  '**One cause, three documents.** Internal: *because* + people, and the chain as far back as it goes. File: *owing to* + conditions, no names, and **one measurement**. Customer: *as a result of*, short, and ⚠ **the change**.',
  '**Give the file version a number.** *Lead time from order to departure: 17 hours against a stated 12.* A record with a measurement in it can be compared with the next one; a record without one is a story.',
  '⚠ **Put the change in the customer\'s version and nowhere else.** The internal version diagnoses and the file version records; only the customer has to decide whether to order again, so only the customer needs to know what is different now.',
  '**Agree with the customer where they were right.** *You were right to refuse it.* It costs nothing, it is usually true, and it removes the argument from the rest of the letter.',
  '⚠ **Promise something you will personally do.** *I will telephone you myself when it leaves the yard.* One personal undertaking is worth more than three process changes to somebody who has been let down.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one real cause and write all three versions (**50 words or more** in total). Use the frame.'));
out.push(p('**1 · Internal.** ______________ because ______________, which ______________ because ______________.   **2 · For the file.** ______________ owing to ______________. ______________ were ______________. **______________: ______________ against a stated ______________.**   **3 · To the customer.** ______________ rather than ______________, and you were right to ______________. That happened as a result of ______________. ⚠ **From ______________, ______________.** I will ______________ myself.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says put the change in the customer\'s version. Yours describes the cause twice and stops — what is different from Monday?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the customer decide from this whether to order on Thursday?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three versions, in three registers', ''],
  ['No names in the file version, and one measurement in it', ''],
  ['The change, in the customer\'s version only', ''],
  ['One personal undertaking', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their customer version. The class says which they would believe — and then which they would have written before today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a letter you have received that gave no cause (**100 to 140 words**). Say what it said, what you worked out had happened, and what you thought of the people who sent it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they worked out had happened_   ✓ _because / owing to / as a result of in the right registers?_   ? _was the writer hiding something, or just lazy?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the sender hiding something? Usually none — they were in a hurry and used a form of words. ⚠ Which is the useful discovery: the reader cannot tell laziness from evasion, so the cost is the same.'));
out.push(box('Homework', ['Write your final text. Then take one real cause at your work and write all three versions, and send the customer\'s one (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.2 =======================
out.push(pb());
out.push(h2('7.2  So, therefore, which meant that'));
out.push(p('**Function:** making the consequence visible   ·   **Grammar:** *so · therefore · which meant that · consequently*   ·   **Pronunciation:** the stress on the consequence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name something small that went wrong at your work and say what it actually cost. Who knew the cost?'));
out.push(p('**b**  Which makes the reader see it? _The list was printed late. · The list was printed late, which meant that four drops arrived after four o\'clock and one came back._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Mr Ayoub say he had not noticed the picking-list problem?   **A** nobody told him   **B** every report he had seen stopped at the cause   **C** it is too small'));
out.push(p('**b**  Listen again. **1** What does he say a cause without a consequence gets? **2** What figure makes him act?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  "And what did that cost?"', [
  ['Nour', 'The picking list is printed at 7.15, after the counter opens.'],
  ['Mr Ayoub', 'It always has been.'],
  ['Nour', 'Which meant that on Tuesday the Ghouta run left three and a half hours late, four drops were outside the window, and Mr Haffar refused his and sent it back.'],
  ['Mr Ayoub', 'Say that again from the beginning.'],
  ['Nour', 'The list is printed after the counter opens, so the same person is doing both, so the picking does not start until about 9.40.'],
  ['Mr Ayoub', 'And the returned consignment?'],
  ['Nour', 'Came back on the lorry, went to the yard overnight, and nine cartons of it are now damp. About 180,000, and it is a write-off.'],
  ['Mr Ayoub', 'Then why is this the first I have heard of the printing time?'],
  ['Nour', 'It is not. It was in the report in March and the report in June.'],
  ['Mr Ayoub', 'And in those reports, what did it say?'],
  ['Nour', '…*The picking list is printed at 7.15.*'],
  ['Mr Ayoub', 'That is a fact about a printer, and I read about forty facts a week. ⚠ *Which meant that nine cartons were written off* is a decision I can make in one minute, and I would have made it in March. **A cause with no consequence attached gets filed, and whoever filed it was me.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making the consequence visible**',
  table(['Form', 'Register', 'Example'], [
    ['**so** + clause', 'speech, informal writing', 'The list is printed late, **so** the picking starts at 9.40.'],
    ['**which meant that**', '⚠ the strongest in a report', '…, **which meant that** nine cartons were written off.'],
    ['**therefore**', 'formal, after a semicolon or full stop', 'The departure was late; **therefore** four drops missed the window.'],
    ['**consequently**', 'formal, same position', '**Consequently**, the consignment was refused.'],
    ['**with the result that**', 'neutral, written', '…**with the result that** the load returned to the yard.'],
  ], [1.9, 1.7, 2.6]),
  '⚠ **A cause with no consequence attached gets filed.** *The picking list is printed at 7.15* is a fact about a printer. *…which meant that nine cartons were written off* is a decision somebody can make in a minute. ⚠ The same sentence appeared in two earlier reports and changed nothing, and that was nobody\'s dishonesty — it was a missing clause.',
  '⚠ **Put a figure in the consequence.** *About 180,000, and it is a write-off.* The consequence is what gets read; the figure is what gets acted on.',
  '⚠ **_Which meant that_ is the house form for a report**, because it attaches the consequence to the specific cause rather than to the whole paragraph.',
  '⚠ *Therefore* and *consequently* begin a **new sentence** or follow a semicolon. ~~The list was late therefore the run was late~~ is the commonest punctuation error at B1.',
  '**Practise:** Add the consequence, with a figure. 1 a list printed late 2 a price list out of date 3 a gate count skipped 4 an unanswered telephone 5 a vehicle off the road',
  '**Useful phrases:**  which meant that…  ·  so…  ·  therefore…  ·  consequently…  ·  with the result that…  ·  and that came to…',
  '**Pronunciation – the stress on the consequence.** 🔊 **Track 7.4** Listen: _the list is printed late // which meant that **nine cartons** were written off_. The stress is on the number, not on the connector. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A states a cause; B asks what it cost until there is a figure. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ is __________.'],
  ['B', 'It always has been.'],
  ['A', 'Which meant that __________, __________, and __________.'],
  ['B', 'Say that again from the beginning.'],
  ['A', '__________, so __________, so __________.'],
  ['B', 'And what did it cost?'],
  ['A', 'About __________, and it is __________.'],
  ['B', '⚠ Then why is this the first I have heard of it?'],
  ['A', 'It is not. It was in the report in __________.'],
]));
out.push(table(['Role card 1 — the unanswered telephone', 'Role card 2 — the vehicle'], [[
  'The counter telephone rings out between 12 and 1 because both staff take lunch together. Consequence: eleven missed orders in October that went to the yard on the next street; about 900,000 of trade, which nobody had added up.',
  'The second van has been off the road since August. Consequence: the Ghouta run and the Mezzeh run share one vehicle, so Ghouta is Tuesday and Thursday only, so two customers have halved their orders. About 400,000 a month, and it has been four months.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the cause, the chain, and the figure. ⚠ Then say how long the cause had been known — it is usually months.'));
out.push(PHRASE_CARD(['which meant that…', 'so…', 'therefore…', 'consequently…', 'and that came to…', 'a cause with no consequence gets filed']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** known causes at your work and attach a consequence with a figure to each. Then say how long each has been known.'));
out.push(table(['The cause (already known)', 'Which meant that…', 'The figure', 'Known since'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.8, 0.8, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  ______ has been known since ______. It means that ______, which comes to about ______ a ______._'));
out.push(p('**Listener task:** add up the room\'s figures. ⚠ Then ask how many of these causes have been reported before without a consequence attached — and note that nobody in the room was being dishonest.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the list was late therefore the run was late_ and _which meaned that_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THREE THINGS WE HAVE REPORTED BEFORE WITHOUT SAYING WHAT THEY COST. 13 November.**',
  '**1 · The picking list is printed at 7.15.** Reported in March and in June, in those words. **Which meant that** on 11 November the Ghouta run left at 10.30, four drops were outside the window, one consignment was refused, it stood in the yard overnight and nine cartons are a write-off. **About 180,000 on one day**, and the printing time has been the same since 2023.',
  '**2 · The counter telephone is not answered between twelve and one.** Reported in June. **Which meant that** in October we can identify eleven calls that were not returned, of which four are customers who have since ordered from Maarouf on the next street. **About 900,000 of trade in one month**, and we did not add it up until Tuesday.',
  '**3 · The second van has been off the road since August.** Reported weekly. **Which meant that** Ghouta moved from four days to two, and two customers have halved their orders rather than wait. **About 400,000 a month for four months.**',
  '⚠ **What this note is not.** It is not new information. Every one of these three was written down before, by me, in reports that were read. **What was missing was the second half of each sentence**, and I am not going to pretend the figures were hidden — they were not calculated, which is worse, because anybody could have calculated them and the person best placed was me.',
  '⚠ **And one consequence I cannot put a figure on.** Mr Haffar has ordered from us since 2017 and his Thursday order has not come. I have no way of valuing that and I am not going to invent a number for it. **It belongs in this note without one.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer say was missing from the earlier reports?'));
out.push(item('2', 'What distinction does the writer draw between hidden and not calculated?'));
out.push(item('3', 'What consequence is reported without a figure, and why?'));
out.push(box('Writer\'s box', [
  '**A "what it cost" note — one numbered paragraph per known cause:** the cause, **when it was reported before**, *which meant that* + the chain, and **the figure in bold**.',
  '**Say when each cause was reported before.** *Reported in March and in June, in those words.* It is the sentence that turns a list of problems into an argument about reporting, which is the real finding.',
  '⚠ **Distinguish hidden from not calculated, and say which is worse.** *They were not calculated, which is worse, because anybody could have calculated them and the person best placed was me.* A reader will suspect concealment; taking the less flattering of the two explanations is what stops them.',
  '⚠ **Include the consequence you cannot value, and do not invent a number for it.** *I have no way of valuing that and I am not going to invent a number.* ⚠ A note where every consequence has a figure looks complete and is not; the one without a figure is often the largest.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "what it cost" note for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**THINGS WE HAVE REPORTED BEFORE WITHOUT SAYING WHAT THEY COST.**   **1 ·** ______________. Reported in ______________. **Which meant that** ______________, ______________ and ______________. **About ______________**, and ______________ has been the same since ______________.   **2 ·** ______________. Reported ______________. **Which meant that** ______________. **About ______________.**   ⚠ **What this note is not.** Not new information. What was missing was ______________, and the figures were not ______________, which is worse because ______________.   ⚠ **And one consequence I cannot value.** ______________. I am not going to invent a number for it.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says include the consequence you cannot value. Every one of yours has a figure — is there really nothing on your list you cannot price?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody act on this in one minute?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Which meant that* + a chain, on every item', ''],
  ['A figure in bold on each', ''],
  ['When each was reported before', ''],
  ['One consequence without a figure, and no invented number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their unvalued consequence. The class says which is the largest thing on anybody\'s list — and it usually is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that everybody knows and nobody has costed (**100 to 140 words**). Work out the figure now, show the arithmetic, and say how long the cause has been known.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the figure, and whether the arithmetic is shown_   ✓ _which meant that / therefore punctuated correctly?_   ? _who could have calculated this, and when?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these figures had ever been calculated before? Almost none — and the useful point is that calculating one takes about ten minutes and is nobody\'s job.'));
out.push(box('Homework', ['Write your final text. Then take one cause at your workplace that has been reported before and attach the consequence with a figure. Send it to whoever read the earlier report (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.3 =======================
out.push(pb());
out.push(h2('7.3  So late that the contract moved'));
out.push(p('**Function:** saying how bad a result was   ·   **Grammar:** *so … that · such … that · too … to*   ·   **Pronunciation:** the stress that carries the degree'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something at your work that was not just late but late enough to change something. What changed?'));
out.push(p('**b**  Which tells the reader more? _The delivery was very late. · The delivery was so late that the shop had closed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar want in place of the word *serious*?   **A** a figure   **B** a threshold that was crossed   **C** an apology'));
out.push(p('**b**  Listen again. **1** What does he say the word *serious* tells him? **2** What is the test he gives for a *so … that* sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  "Serious enough for what?"', [
  ['Mr Attar', 'Your report says the delay was serious.'],
  ['Nour', 'It was.'],
  ['Mr Attar', 'Serious tells me how you feel about it. What crossed a line?'],
  ['Nour', 'The run left at half past ten.'],
  ['Mr Attar', 'And?'],
  ['Nour', 'It was so late that Mr Haffar\'s shop had shut by the time we got there, so the load came back, so it stood in the yard overnight, so nine cartons were damp.'],
  ['Mr Attar', 'That is four lines and every one of them is a line that was crossed. Write that instead of *serious*.'],
  ['Nour', 'It is longer.'],
  ['Mr Attar', 'It is four times as long and about forty times as useful, and here is the test. ⚠ **A _so … that_ sentence is right when the second half names something that would not have happened at all if the first half had been smaller.** If the shop had still been open, nothing on that list happens. Half an hour earlier and there is no incident.'],
  ['Nour', 'And if nothing had been crossed? If it was just late?'],
  ['Mr Attar', 'Then it was late, and you say *the run left three and a half hours late* and stop. ⚠ Do not reach for *so … that* when nothing changed — that is how a report acquires drama, and a report with drama in it gets discounted entirely, including the true parts.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Degree of result — and when not to use it**',
  table(['Form', 'What follows', 'Example'], [
    ['**so** + adjective + **that**', 'a clause', 'It was **so** late **that** the shop had shut.'],
    ['**so much / so many** + **that**', 'a clause', '**So many** drops were missed **that** one load returned.'],
    ['**such** + a/an + noun + **that**', 'a clause', 'It was **such** a long delay **that** the stock went damp.'],
    ['**too** + adjective + **to**', 'an infinitive', 'The load was **too** late **to** be delivered.'],
    ['⚠ what to drop', '—', '*serious* · *significant* · *considerable*'],
  ], [2, 1.2, 2.6]),
  '⚠ **The test: a _so … that_ sentence is right when the second half names something that would not have happened at all if the first half had been smaller.** Half an hour earlier and the shop is open and there is no incident. If nothing was crossed, nothing was *so* anything.',
  '⚠ **_Serious_ tells the reader how you feel.** A crossed threshold tells them what happened. Replace every *serious*, *significant* and *considerable* with the line that was crossed, and the report gets longer and about forty times more useful.',
  '⚠ **Do not reach for _so … that_ when nothing changed.** A report with drama in it gets discounted **entirely**, including the parts that were true, and that is the expensive consequence of one dramatic sentence.',
  '⚠ **_Such_ takes a noun and _so_ takes an adjective**: *such a long delay*, *so long a delay*, ~~so a long delay~~.',
  '**Practise:** Replace the adjective with a crossed line. 1 a serious delay 2 a significant error 3 a considerable shortage 4 a very bad week 5 a major problem with a supplier',
  '**Useful phrases:**  so … that…  ·  so many … that…  ·  such a … that…  ·  too … to…  ·  and if it had been smaller, none of that happens',
  '**Pronunciation – the stress that carries the degree.** 🔊 **Track 7.6** Listen: _it was **so** late that the shop had **shut**_. Two stresses, one on *so* and one on the thing that was crossed. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A uses an adjective; B presses for the line that was crossed. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your report says __________ was __________.'],
  ['A', 'It was.'],
  ['B', '__________ tells me how you feel. What crossed a line?'],
  ['A', '__________.'],
  ['B', 'And?'],
  ['A', 'It was so __________ that __________, so __________, so __________.'],
  ['B', 'Write that instead. ⚠ And the test: if __________ had been smaller, does any of it happen?'],
  ['A', 'None of it.'],
]));
out.push(table(['Role card 1 — "a significant error"', 'Role card 2 — nothing was crossed'], [[
  'A pricing error of 46,000. The line crossed: it was so far out that the customer\'s own accounts department queried it before ours did, which meant the error was found outside the company.',
  'A delivery forty minutes late. Nothing was crossed: the shop was open, the goods were accepted, nobody complained. ⚠ B must get A to say *the delivery was forty minutes late* and stop — and the harder part is getting A to accept that this is the complete answer.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the crossed line. ⚠ For role card 2, write *nothing was crossed* — and notice how uncomfortable that is to write about something that went wrong.'));
out.push(PHRASE_CARD(['so … that…', 'so many … that…', 'such a … that…', 'too … to…', 'what crossed a line?', 'not "serious"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things that went wrong this year. For each, name the line crossed — or write *nothing crossed*.'));
out.push(table(['What went wrong', 'The line that was crossed, or *nothing crossed*', 'Would a smaller version have done it?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.5, 2.3, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It was so _______ that _______. If it had been _______, none of that happens._  Or: _It was _______, and nothing was crossed._'));
out.push(p('**Listener task:** count how many of the room\'s five crossed nothing. It is usually three of five, and those three are the ones that have been described as serious in writing.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was so a long delay_ and _it was too late for be delivered_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**ELEVEN THINGS WENT WRONG IN OCTOBER. THREE OF THEM CROSSED A LINE.**',
  '**The three.**',
  '**1.** The Ghouta run was **so late that** Mr Haffar\'s shop had shut, which meant the load returned, stood overnight, and nine cartons are a write-off. ⚠ Half an hour earlier and none of this exists.',
  '**2.** The counter list was **so far out of date that** the customer\'s own accounts department found the error before ours did. The size of the error is not the point — 46,000 is a fortnight of counter takings. **The point is that it was found outside this company**, which has happened once before, in 2019.',
  '**3.** The fourth store room has been unentered **so long that** we can no longer reconcile it to the paper count, because the paper count stopped in August and the shelves have been moved since. ⚠ This is the only one of the three where the line was crossed by **doing nothing**, and it crossed without a date.',
  '**The other eight.** A delivery forty minutes late, accepted. Two invoices queried and found correct. A damaged carton replaced the same day. A driver sick, covered. Two short orders found at the gate and corrected before loading — ⚠ **which is the control working, and is in this list only because somebody will otherwise count it as a fault.** A telephone line down for an afternoon. A late supplier delivery that did not affect a customer.',
  '⚠ **Why the eight are listed at all.** Because a page that lists only the three looks like a page where somebody chose the three. **Eleven, with the eight named and dismissed in a line each, is a different document from three with a heading.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is said to be the point about the pricing error, if not its size?'));
out.push(item('2', 'How is the third crossed line different from the other two?'));
out.push(item('3', 'Why does the page list the eight that crossed nothing?'));
out.push(box('Writer\'s box', [
  '**A monthly page — the count in the heading, the crossed lines numbered with *so … that*, then the rest named and dismissed in a line each.**',
  '**Put both numbers in the heading.** *Eleven things went wrong. Three crossed a line.* ⚠ A page that reports only the three looks like a page where somebody chose the three.',
  '**Add the counterfactual to each crossed line.** *Half an hour earlier and none of this exists.* It is the test from the Language box, written down, and it is what stops a reader asking whether the degree was exaggerated.',
  '⚠ **Mark the one that crossed by doing nothing.** *The line was crossed by doing nothing, and it crossed without a date.* Those are the hardest to notice and the most expensive, because no event ever happened to report.',
  '⚠ **Put the control that worked in the list, and say why it is there.** *Which is the control working, and is in this list only because somebody will otherwise count it as a fault.* Otherwise a reader counts your successes as failures and you have no way to object later.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own month (**50 words or more**). Use the frame.'));
out.push(p('**______________ THINGS WENT WRONG IN ______________. ______________ OF THEM CROSSED A LINE.**   **1.** ______________ was **so** ______________ **that** ______________, which meant ______________. ⚠ ______________ earlier and none of this exists.   **2.** ______________ was **so** ______________ **that** ______________. The point is not ______________; the point is ______________.   **3.** ______________ has been ______________ **so long that** ______________. ⚠ This one crossed by doing nothing.   **The others.** ______________. ______________. ______________ — ⚠ **which is the control working.**   ⚠ **Why the others are listed.** Because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says add the counterfactual to each crossed line. Your second has no *if it had been smaller* — would a smaller version have crossed it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does every *so … that* pass the smaller-version test?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both counts in the heading', ''],
  ['*so … that* only where a line was crossed', ''],
  ['A counterfactual on each', ''],
  ['The ones that crossed nothing, named and dismissed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their line that crossed by doing nothing. The class says which of those nobody had ever reported.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that has crossed a line by nobody doing anything (**100 to 140 words**). Say what it is, when it was still recoverable, and what would be needed now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _when it was still recoverable_   ✓ _so … that / such … that used correctly?_   ? _who would have noticed, and what would they have had to be looking at?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was there a point at which it was still recoverable cheaply? All three — and in none of them did anything happen on that day to report.'));
out.push(box('Homework', ['Write your final text. Then list everything that went wrong at your work last month and mark which crossed a line. Count both numbers (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.4 =======================
out.push(pb());
out.push(h2('7.4  The chain, and where to stop'));
out.push(p('**Function:** building a chain of causes   ·   **Grammar:** *which led to · and that in turn · ultimately*   ·   **Pronunciation:** reading a chain so the links are audible'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one thing that went wrong. Ask *why* four times. Where do you end up?'));
out.push(p('**b**  Which is the useful place to stop? _…because the shop had shut. · …because the list prints at 7.15. · …because we have never recruited a second counter assistant. · …because of the economy._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about Nour\'s fifth link?   **A** it is wrong   **B** it is true and useless   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What is her rule for where a chain stops? **2** What does she say happens to a report that goes one link too far?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  "Stop at the last link somebody here can pull"', [
  ['Nour', 'Nine cartons written off because the shop had shut, which was because the run left at 10.30, which was because picking started at 9.40, which was because the list prints at 7.15, which was because we have one person on the counter at opening, which is because we have never replaced the assistant who left in 2021, which is because of the economy.'],
  ['Nadia', 'Where did you get to?'],
  ['Nour', 'The economy.'],
  ['Nadia', 'And what can anybody in this building do about the economy?'],
  ['Nour', 'Nothing.'],
  ['Nadia', 'Then that link is true and useless, and it is worse than useless, because the moment Mr Ayoub reads *because of the economy* the whole report becomes a thing that could not be helped. ⚠ **Stop at the last link somebody in this building can pull.**'],
  ['Nour', 'Which is the printing time.'],
  ['Nadia', 'Or the second person at opening — and those are different recommendations with different costs, so give him both and say which you would do.'],
  ['Nour', 'And the 2021 assistant? That is true as well.'],
  ['Nadia', 'It is true and it is the explanation of why the printing time was never fixed, so put it in **once**, as background, not as the cause. ⚠ A chain with the recruitment in it as a link is a chain that ends in a hiring decision nobody is going to make this month; a chain that stops at the printer ends in something that can be done on Monday for nothing.'],
  ['Nour', 'So the longest true chain is not the best one.'],
  ['Nadia', 'The longest true chain is how you understand it. ⚠ **The chain you write is the one that ends where somebody can act**, and knowing the difference is most of what a report is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Building a chain — and stopping it in the right place**',
  table(['Form', 'Example'], [
    ['**which led to**', 'The list printed at 7.15, **which led to** picking starting at 9.40.'],
    ['**and that in turn**', '…**and that in turn** put the departure back to 10.30.'],
    ['**ultimately**', '**Ultimately** nine cartons were written off.'],
    ['**the immediate cause** / **the contributory factor**', 'The **immediate cause** was the shop being shut; a **contributory factor** was the printing time.'],
    ['⚠ **where to stop**', 'the last link somebody here can pull'],
  ], [2.2, 3.1]),
  '⚠ **Stop at the last link somebody in this building can pull.** The chain can usually be extended to the economy, the war, the currency or 1998, and every one of those links is true. ⚠ **The moment a reader meets one, the whole report becomes a thing that could not be helped**, and the true, fixable links stop being read.',
  '⚠ **The longest true chain is how you understand it; the chain you write ends where somebody can act.** Knowing the difference is most of what a report is.',
  '⚠ **Where two links can both be pulled, give both and say which you would do.** The printing time costs nothing; a second person at opening costs a salary. Those are different recommendations and the reader is entitled to both.',
  '⚠ **Background goes in once, as background.** *The counter assistant who left in 2021 was not replaced* explains why the printing time was never fixed. It is not the cause and it must not be a link.',
  '**Practise:** Build the chain, then stop it in the right place and say which link you would pull. 1 a write-off 2 a lost customer 3 a pricing error 4 an unreconciled store room 5 a vehicle off the road',
  '**Useful phrases:**  which led to…  ·  and that in turn…  ·  ultimately…  ·  the immediate cause was…  ·  a contributory factor was…  ·  the last link we can pull is…',
  '**Pronunciation – reading a chain aloud.** 🔊 **Track 7.8** Listen to four links read with a small break at each *which led to*. ⚠ A chain read without breaks is heard as one excuse; read with them it is heard as four facts. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A builds the longest true chain; B finds where to stop it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ because __________, which was because __________, which was because __________, which is because __________.'],
  ['B', 'Where did you get to?'],
  ['A', '__________.'],
  ['B', 'And what can anybody here do about that?'],
  ['A', 'Nothing.'],
  ['B', 'Then that link is true and useless. ⚠ Stop at the last link somebody here can pull.'],
  ['A', 'Which is __________.'],
  ['B', 'Or __________ — and those cost different amounts, so give both and say which you would do.'],
]));
out.push(table(['Role card 1 — the lost customer', 'Role card 2 — the store room'], [[
  'A customer gone to a competitor. The chain runs: no return call → telephone unanswered at lunch → both staff take lunch together → no cover arranged → one person short since 2021 → the economy. ⚠ The link that can be pulled is the lunch cover, and it costs nothing at all.',
  'The fourth store room unreconciled. The chain: paper count stopped in August → the person doing it moved to the new site → the new site opened in June → the lease was signed in May. ⚠ Every link is true; the only one anybody can pull is who does the paper count, and nobody has asked.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the chain and ring the link where it should stop. ⚠ Then write the link **after** that one, and notice that it is true.'));
out.push(PHRASE_CARD(['which led to…', 'and that in turn…', 'ultimately…', 'the immediate cause was…', 'a contributory factor was…', 'the last link we can pull']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things that went wrong. Build each chain to the end, then mark where you would stop and what you would do.'));
out.push(table(['The chain, in full', 'Stop here', 'What I would do, and what it costs'], [['', '', ''], ['', '', ''], ['', '', '']], [2.6, 1, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class the whole chain, then say where you stopped and why.'));
out.push(p('**Listener task:** count how many chains in the room ended at the economy, the currency or the war if they were allowed to run. ⚠ Nearly all of them — and that is exactly why the rule exists.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _which lead to picking starting late_ and _and that in turn it put the departure back_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the report, and answer the questions.'));
out.push(box(null, [
  '**WRITE-OFF OF NINE CARTONS — report. 14 November. Z. Attar and K. Ayoub.**',
  '**The chain, as far as it goes.** The Ghouta list was printed at 7.15, **which led to** picking beginning at 9.40, **and that in turn** put the departure at 10.30 against a scheduled 7.00. The run reached Mr Haffar at 4.20, by which time the shop had shut. The load returned, stood in the yard overnight in rain, and nine cartons are unsaleable.',
  '**Where this report stops, and why.** The chain continues: one person is on the counter at opening, because the assistant who left in 2021 was not replaced, because of what everybody knows about the last four years. ⚠ **All of that is true and this report stops at the printing time**, because the printing time is the last link anybody in this building can pull, and because a report that ends at the economy is a report that ends.',
  '**Two things could be pulled, and they cost different amounts.**',
  '**a) Print the Ghouta list the night before.** Costs nothing, can be done on Monday, and removes the conflict between the printer and the counter on three mornings a week. ⚠ **It does not fix the other two mornings** and I am not going to describe it as a solution.',
  '**b) A second person at opening, 8.00 to 10.00, five days.** Costs about 650,000 a month. Removes the conflict on all five mornings and would also have answered the eleven telephone calls in October.',
  '**What I would do.** (a) on Monday, and (b) put to you with the telephone figures in one paper rather than two, because (b) is not a delivery decision and it has been argued as one twice.',
  '⚠ **The 2021 vacancy, once, as background.** It is not a link in this chain. It is the reason the printing time has been reported in March and June and never changed: there was never anybody to change it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where does the report stop the chain, and what two reasons does it give?'));
out.push(item('2', 'What does the report refuse to call option (a)?'));
out.push(item('3', 'How is the 2021 vacancy used, and how is it not used?'));
out.push(box('Writer\'s box', [
  '**An incident report with a chain — four parts:** the chain to the point of damage → ⚠ **where this report stops, and why** → the links that can be pulled, **with costs** → what you would do.',
  '**Say out loud where you have stopped and that the chain continues.** *All of that is true and this report stops at the printing time.* A reader who can see the next link will supply it themselves and conclude you missed it; naming it closes that.',
  '**Give each pullable link a cost and a date.** *Costs nothing, can be done on Monday.* A recommendation without a cost is an opinion.',
  '⚠ **Refuse to call the cheap fix a solution.** *It does not fix the other two mornings and I am not going to describe it as a solution.* The cheap fix is usually adopted and then believed to have solved the problem, and the only moment you can prevent that is now.',
  '⚠ **Put the structural cause in as background, exactly once, and say what it explains.** *It is the reason the printing time has been reported twice and never changed: there was never anybody to change it.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the report with a chain for one real incident (**50 words or more**). Use the frame.'));
out.push(p('**______________ — report.**   **The chain.** ______________, **which led to** ______________, **and that in turn** ______________. Ultimately ______________.   **Where this report stops, and why.** The chain continues: ______________, because ______________. ⚠ All of that is true and this report stops at ______________, because ______________.   **Two things could be pulled.**   **a)** ______________. Costs ______________, can be done ______________. ⚠ It does not fix ______________.   **b)** ______________. Costs about ______________.   **What I would do.** ______________.   ⚠ **Background, once.** ______________ is not a link; it is the reason ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says refuse to call the cheap fix a solution. Yours offers the free option and stops — what does it not fix?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a reader add a link after yours and think you had missed it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A chain with *which led to* and *and that in turn*', ''],
  ['Where the report stops, stated, with the next link named', ''],
  ['Two pullable links, each with a cost and a date', ''],
  ['The cheap fix not called a solution', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *where this report stops*. The class says which chain they would have extended, and to what.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something at your work was explained by something nobody could change (**100 to 140 words**). Say what the explanation was, whether it was true, and what stopped being discussed once it was said.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what stopped being discussed_   ✓ _which led to / and that in turn?_   ? _which link could somebody there have pulled?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the unchangeable explanation true? All of them, usually. ⚠ Which is the point: the sentence that ends a discussion is almost never a lie, and that is what makes it so effective.'));
out.push(box('Homework', ['Write your final text. Then build one chain at your work to its end, mark where you would stop, and write the two links that could be pulled with their costs (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.5 =======================
out.push(pb());
out.push(h2('7.5  Caused, led to, contributed to'));
out.push(p('**Function:** matching the claim to the evidence   ·   **Grammar:** *caused · led to · contributed to · cannot be ruled out*   ·   **Pronunciation:** the three verbs said flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one thing that went wrong and list everything that played a part. How many things?'));
out.push(p('**b**  Which would you sign your name to? _The rain caused the write-off. · The overnight standing contributed to the write-off._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about the word *caused*?   **A** it is too strong for the evidence   **B** it is informal   **C** it is correct here'));
out.push(p('**b**  Listen again. **1** What does he say each of the three verbs would commit the company to? **2** What does he say about using the weaker verb?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  "Which of those three can you prove?"', [
  ['Mr Attar', '"The late departure caused the loss of nine cartons." Can you prove that?'],
  ['Nour', 'The run was late, the shop shut, the load came back, it rained, the cartons are damp.'],
  ['Mr Attar', 'And if it had not rained?'],
  ['Nour', '…Then the cartons would be dry and we would have delivered them on Wednesday.'],
  ['Mr Attar', 'So what caused the write-off?'],
  ['Nour', 'The rain.'],
  ['Mr Attar', 'And what caused the load to be standing in the rain?'],
  ['Nour', 'The late departure. So the departure led to it and the rain caused it.'],
  ['Mr Attar', 'Closer. Now the third one. What **contributed**?'],
  ['Nour', 'That the yard has no cover on the north side, which we have known since 2019.'],
  ['Mr Attar', 'Then you have three sentences and three different claims. ⚠ *Caused* says that but for this, nothing. *Led to* says this started the sequence. *Contributed to* says this made it worse or more likely and is not sufficient on its own.'],
  ['Nour', 'Does the difference matter if nobody is going to court?'],
  ['Mr Attar', 'It matters more when nobody is. ⚠ If you write *the late departure caused the loss*, then Fadi caused the loss, and in two years when somebody reads the file that is what it will say — and the yard will still have no cover on the north side, because nothing in the file ever said so. ⚠ **The weaker verb is not the softer one. It is the one that keeps the other two causes in the document.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three verbs, three claims**',
  table(['Verb', 'What it claims', 'Example'], [
    ['**caused**', '⚠ but for this, **nothing**', 'The rain **caused** the damage.'],
    ['**led to**', 'this started the sequence', 'The late departure **led to** the load standing out.'],
    ['**contributed to**', 'made it worse or more likely; not sufficient alone', 'The lack of cover **contributed to** the damage.'],
    ['**cannot be ruled out as a factor**', 'you suspect and cannot show', 'A second night out **cannot be ruled out as a factor**.'],
    ['⚠ **was not a factor**', 'the positive clearance', 'The packaging **was not a factor**; it was within specification.'],
  ], [1.9, 2, 2.3]),
  '⚠ **Test for _caused_: if this had not happened, would nothing have happened?** If the answer is *something smaller would have happened*, the verb is **led to** or **contributed to**.',
  '⚠ **The weaker verb is not the softer one.** *The late departure caused the loss* puts the whole loss on the departure — and therefore on a person — and **removes the other two causes from the document for ever**. In two years somebody reads the file and the yard still has no cover, because nothing ever said so.',
  '⚠ **Use all three in the same report.** A real incident has an immediate cause, a sequence and two or three contributory factors, and a report with one verb in it has thrown most of itself away.',
  '⚠ **Clear what was not a factor, positively.** *The packaging was not a factor; it was within specification.* Otherwise the next reader investigates it again.',
  '**Practise:** Sort into *caused*, *led to*, *contributed to* and *not a factor*. 1 the rain 2 the late departure 3 no cover on the north side 4 the packaging 5 the shop\'s closing time',
  '**Useful phrases:**  caused  ·  led to  ·  contributed to  ·  cannot be ruled out as a factor  ·  was not a factor  ·  but for this, nothing',
  '**Pronunciation – the three verbs said flat.** 🔊 **Track 7.10** Listen: _the rain **caused** it // the departure **led to** it // the lack of cover **contributed to** it_. ⚠ All three are said without emphasis: a stressed *contributed* sounds like an accusation being softened, which is the opposite of the point. Repeat three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes *caused*; B tests it and sorts the three claims. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '"__________ caused __________." Can you prove that?'],
  ['A', '__________.'],
  ['B', 'And if __________ had not happened?'],
  ['A', '…Then __________.'],
  ['B', 'So what caused it?'],
  ['A', '__________. So __________ led to it and __________ caused it.'],
  ['B', 'And what contributed?'],
  ['A', '__________, which we have known since __________.'],
  ['B', '⚠ Three sentences, three claims — and the weak one is what keeps the other two in the document.'],
]));
out.push(table(['Role card 1 — the pricing error', 'Role card 2 — the lost customer'], [[
  'Caused: the counter copy was eight days old. Led to: the trade band being raised on the 8th without the counter copy being replaced. Contributed: no dated list, no destruction of the old one, and three people pricing from two copies. Not a factor: Hala\'s arithmetic, which was correct throughout.',
  'Caused: four unreturned calls. Led to: both counter staff taking lunch together. Contributed: no answering machine, no diverted line, and a competitor two hundred metres away. ⚠ Not a factor: price — the customer has said so in writing, and that should be recorded before anybody assumes it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four lines — caused, led to, contributed, not a factor. ⚠ The fourth is the one nobody writes.'));
out.push(PHRASE_CARD(['caused', 'led to', 'contributed to', 'cannot be ruled out', 'was not a factor', 'but for this, nothing']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** real incidents and sort every factor into the four categories.'));
out.push(table(['Incident', 'Caused', 'Led to', 'Contributed to', 'Not a factor'], [['', '', '', '', ''], ['', '', '', '', '']], [1, 1.2, 1.2, 1.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your four lines. Then say which verb you would have used for all of it before this lesson.'));
out.push(p('**Listener task:** count how many in the room would have written *caused* for a contributory factor. ⚠ Then ask who, in each case, would have been named by that sentence.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was contributed to the damage_ and _the rain was caused the write-off_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the attribution page, and answer the questions.'));
out.push(box(null, [
  '**WRITE-OFF OF NINE CARTONS — attribution. 14 November. Second page of the report.**',
  '**What caused the damage.** Rain, on the night of 11 November, on nine cartons standing on the north side of the yard. But for the rain the cartons would have been delivered dry on the Wednesday. ⚠ **No person caused this damage** and I want that sentence in the file, because the next three paragraphs are about people and decisions and they will be read as blame if this one is missing.',
  '**What led to the cartons being there.** The late departure, which put the run at Mr Haffar\'s door after closing, which brought the load back. The departure was late for the reasons in the first page.',
  '**What contributed.** Three things. **One:** there is no cover on the north side of the yard, which has been in the yard notes since 2019. **Two:** the returns procedure has no overnight step — nothing says where a returned load goes, so it goes where there is room. **Three:** the load came back at 6.40 and the warehouse closes at 6.00, so nobody with a key to the covered bay was there, and nothing says who to telephone.',
  '**What was not a factor.** The packaging, which was the standard double-wall and within specification; two cartons on the same pallet that were under the tarpaulin are dry. Fadi\'s driving, his hours and his route, all of which are on the tachograph and were correct. And the customer, who was entitled to close at four and has never said otherwise.',
  '⚠ **Why the last paragraph is the longest.** Because each of those three will be investigated by somebody if I do not clear them here, and because two of them are people. **Clearing a person positively costs me four lines now and saves them a conversation in a year.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which sentence does the writer specifically want in the file, and why?'));
out.push(item('2', 'What three contributory factors are named?'));
out.push(item('3', 'Why does the writer say the last paragraph is the longest?'));
out.push(box('Writer\'s box', [
  '**An attribution page — four paragraphs in this order:** **what caused** → **what led to** → **what contributed** (numbered) → ⚠ **what was not a factor**.',
  '**If no person caused it, write that sentence.** *No person caused this damage and I want that sentence in the file, because the next three paragraphs are about people.* Without it, everything after it is read as blame.',
  '**Number the contributory factors.** Three numbered things can each be fixed by somebody; a paragraph of factors gets read as context.',
  '⚠ **Clear people positively, with the evidence.** *Fadi\'s driving, his hours and his route, all of which are on the tachograph and were correct.* ⚠ *There is no suggestion that…* clears nobody; naming the evidence does.',
  '⚠ **Say why you cleared them.** *Clearing a person positively costs me four lines now and saves them a conversation in a year.* It is the sentence that tells a reader the page was written by somebody who has thought about who reads files and when.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the attribution page for one incident at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — attribution.**   **What caused it.** ______________. But for ______________, ______________. ⚠ ______________.   **What led to it.** ______________, which ______________, which ______________.   **What contributed.** **One:** ______________, which has been known since ______________. **Two:** ______________. **Three:** ______________.   **What was not a factor.** ______________, because ______________. ______________, which is shown by ______________. And ______________, who ______________.   ⚠ **Why the last paragraph is the longest.** Because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says clear people positively with the evidence. Yours says *there is no suggestion of any fault on anybody\'s part* — what evidence clears them?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does any sentence here put a whole loss on one person?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four categories, in order', ''],
  ['*Caused* used only where but-for holds', ''],
  ['Contributory factors numbered', ''],
  ['People cleared positively, with the evidence named', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *not a factor* paragraph. The class says who it protects, and from what.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a document blamed the wrong thing (**100 to 140 words**). Say what it said, what had actually caused it, who carried the blame, and whether it was ever corrected.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _who carried the blame_   ✓ _caused / led to / contributed to used for the right claims?_   ? _was the document ever corrected, and could it be now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the document corrected? Almost none. ⚠ A wrong attribution is almost never corrected, because by the time anybody notices, the only evidence of what happened is the document itself.'));
out.push(box('Homework', ['Write your final text. Then write the four-category attribution for one real incident, and make sure the *not a factor* paragraph names its evidence (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.6 =======================
out.push(pb());
out.push(h2('7.6  What I saw, what I was told, what I infer'));
out.push(p('**Function:** separating kinds of evidence   ·   **Grammar:** the evidence paragraph; *I saw · I was told · I infer*   ·   **Pronunciation:** the three openings read so the reader hears the shift'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you reported last month. How much of it did you see with your own eyes?'));
out.push(p('**b**  Which of these did the writer see? _The cartons are damp. · The load stood out overnight. · Nobody telephoned the covered bay._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar ask Nour to mark on her own report?   **A** the dates   **B** which sentences she saw, was told, or worked out   **C** the figures'));
out.push(p('**b**  Listen again. **1** How much of the report turns out to be first-hand? **2** What does he say is wrong with an inference that is not labelled?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  "Mark every sentence S, T or I"', [
  ['Mr Attar', 'Go through your own report and mark every sentence. S for what you saw, T for what you were told, I for what you worked out.'],
  ['Nour', 'The cartons are damp — S, I looked at them. The run left at 10.30 — S, it is on the gate sheet.'],
  ['Mr Attar', 'The gate sheet is not your eyes. That is T.'],
  ['Nour', 'It is a document.'],
  ['Mr Attar', 'Written by somebody. A good T, and still a T. Keep going.'],
  ['Nour', 'The shop had shut — T, Fadi said so. The load stood on the north side overnight — I did not see that either; Abu Yasser told me in the morning. T. Nobody telephoned the covered bay — that is… I do not actually know that. Nobody has said they did.'],
  ['Mr Attar', 'So what is it?'],
  ['Nour', 'An inference. From the fact that the load was outside.'],
  ['Mr Attar', 'A reasonable one and an inference. How much of your page is S?'],
  ['Nour', 'The damp cartons. One sentence out of fourteen.'],
  ['Mr Attar', 'Which is normal and is not a criticism — you were at the other site. ⚠ The danger is not that a report is mostly T and I; it is that a report which does not say so reads as fourteen observations. **And then an inference that turns out wrong looks like a lie rather than a mistake.**'],
  ['Nour', 'So I write the three paragraphs separately.'],
  ['Mr Attar', 'Three paragraphs, always in that order, and the I paragraph last and shortest. ⚠ Nobody can argue with your S, most people will accept your T, and your I is the only part anybody can disagree with — **so make it easy to find, because somebody disagreeing with your inference is the cheapest thing that can happen to this report.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The evidence paragraph — three kinds, in one order**',
  table(['Kind', 'How it opens', 'Example'], [
    ['**S — what I saw**', 'I saw · I examined · I counted', '**I examined** nine cartons; all nine were damp to the base.'],
    ['**T — what I was told**', 'I was told · X told me · the sheet records', '**Abu Yasser told me** the load stood on the north side.'],
    ['**T — documents are T**', 'the sheet records · the tachograph shows', '**The gate sheet records** a departure at 10.30.'],
    ['**I — what I infer**', 'I infer · it appears · the most likely explanation', '**I infer** that nobody telephoned the covered bay.'],
    ['⚠ order and length', 'S, then T, then I — **I last and shortest**'],
  ], [1.7, 2, 2.4]),
  '⚠ **A document is T, not S.** The gate sheet was written by somebody. It is good evidence and it is not your eyes, and a report that treats documents as observations has no way of flagging the day a document is wrong.',
  '⚠ **One sentence in fourteen being first-hand is normal and is not a criticism.** The danger is a report that does not say so, because it reads as fourteen observations — ⚠ **and then an inference that turns out wrong looks like a lie rather than a mistake.**',
  '⚠ **Put the inference last and make it short and easy to find.** Nobody can argue with your S and most people accept your T; the I is the only part anybody can disagree with. **Somebody disagreeing with your inference is the cheapest thing that can happen to a report.**',
  '⚠ **Label an inference even when it is obviously right.** The habit is what protects you on the day one is obviously right and wrong.',
  '**Practise:** Mark each S, T or I. 1 the cartons are damp 2 the gate sheet shows 10.30 3 Fadi said the shop had shut 4 nobody telephoned the bay 5 the rain started about nine',
  '**Useful phrases:**  I examined…  ·  I counted…  ·  X told me…  ·  the sheet records…  ·  I infer…  ·  the most likely explanation is…',
  '**Pronunciation – the three openings.** 🔊 **Track 7.12** Listen to three sentences read with a clear break at each opening: _I examined… // Abu Yasser told me… // I infer…_. ⚠ A reader hears the shift of footing before they understand the content. Repeat three.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads their own account; B marks every sentence S, T or I. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Mark every sentence. S for what you saw, T for what you were told, I for what you worked out.'],
  ['A', '__________ — S, I __________. __________ — S, it is on __________.'],
  ['B', '__________ is not your eyes. That is T.'],
  ['A', 'It is a document.'],
  ['B', 'Written by somebody. A good T, and still a T.'],
  ['A', '__________ — that is… I do not actually know that.'],
  ['B', 'So what is it?'],
  ['A', 'An inference. From __________.'],
  ['B', '⚠ How much of your page is S?'],
]));
out.push(table(['Role card 1 — the pricing error', 'Role card 2 — the lost customer'], [[
  'S: the counter copy, dated the 5th, in Nour\'s hand. T: Hala\'s account; the credit list file; the invoice. I: that nobody replaced the counter copy on the 8th — nobody has said they did and nobody has said they did not.',
  'S: nothing at all — Nour saw none of it. T: the customer\'s own letter; the telephone log; Hala\'s account of the lunch hour. I: that the four calls were the reason he left, which is the inference the customer himself has not actually made.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the marking for the class – **without the book**.'));
out.push(p('**Listener task:** count the S, T and I sentences. ⚠ For role card 2, notice that the S count is nought and the report is still worth writing.'));
out.push(PHRASE_CARD(['I examined…', 'I counted…', 'X told me…', 'the sheet records…', 'I infer…', 'a document is T']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take something you reported recently. Write **eight** of its sentences and mark each S, T or I. Then count.'));
out.push(table(['The sentence', 'S / T / I', 'If T, who told you. If I, from what.'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.2, 0.7, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of eight sentences, _______ were S, _______ were T and _______ were I. The one I was most surprised about was _______._'));
out.push(p('**Listener task:** write the room\'s S counts. ⚠ Then ask how many of these reports presented all three kinds in the same voice — it is nearly all of them, and nobody intended it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I was told by the gate sheet_ and _I infer that the cartons are damp_ where the writer looked at them. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the evidence page, and answer the questions.'));
out.push(box(null, [
  '**WRITE-OFF OF NINE CARTONS — evidence. 14 November. Third page of the report.**',
  '**What I saw.** I examined the nine cartons at 8.15 on 12 November, in the yard, before they were moved. All nine were damp from the base to about a third of the way up; the outer wall was soft and the inner wall was marked on seven. I opened two: the contents of one were dry and of the other were not. I photographed all nine and the photographs are with this report. ⚠ **That is the whole of what I saw**, and it is one paragraph.',
  '**What I was told, and by whom.** Abu Yasser told me, at 8.05, that the load came back at about 6.40 and was put on the north side because the covered bay was locked. The gate sheet records a departure at 10.30 and a return at 6.42. Fadi told me that Mr Haffar\'s shop was shut when he arrived at 4.20 and that he telephoned the office and got no answer; the office telephone log shows no call at that time, which **I have not been able to reconcile** and am reporting unreconciled. The tachograph shows the route and the hours and both were correct.',
  '**What I infer.** Three things, and they are inferences. **One:** that nobody telephoned a keyholder for the covered bay, because nobody has said they did. **Two:** that the rain began after the load was placed, because the top surfaces are marked and the base is soaked. **Three:** that the two cartons under the tarpaulin were covered by chance rather than by anybody\'s decision, because nobody has claimed it and the tarpaulin was over a different pallet.',
  '⚠ **One thing I cannot place.** Fadi says he telephoned and the log says he did not. I am not going to resolve that by preferring one of them. **Either the call was not made or the log is incomplete, and the second is at least as likely as the first, because the log is filled in from memory at the end of the day.** It is in this report unresolved and it is the one thing on this page I would ask somebody else to look at.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long is the "what I saw" paragraph, and what does the writer say about that?'));
out.push(item('2', 'What is reported as unreconciled, and what two explanations are offered?'));
out.push(item('3', 'What does the writer refuse to do about the telephone discrepancy?'));
out.push(box('Writer\'s box', [
  '**An evidence page — three paragraphs, always in this order:** **what I saw** (first-hand only, with time and place) → **what I was told, and by whom** (people **and** documents) → **what I infer** (numbered, and labelled as inferences).',
  '**Give the S paragraph a time and a place and then stop.** *I examined the nine cartons at 8.15 on 12 November, in the yard, before they were moved… That is the whole of what I saw.* The last clause is what makes the paragraph trustworthy.',
  '**Name who told you, and when.** *Abu Yasser told me, at 8.05.* A T with a person and a time can be checked; a T without them is a rumour with good manners.',
  '⚠ **Report a conflict unresolved, and do not prefer a person.** *Either the call was not made or the log is incomplete, and the second is at least as likely.* ⚠ Preferring the document over the person is the default and it is not neutral — somebody fills the log in from memory.',
  '⚠ **Name the one thing you want somebody else to look at.** It is the sentence that distinguishes a report from a defence.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the evidence page for something you reported (**50 words or more**). Use the frame.'));
out.push(p('**______________ — evidence.**   **What I saw.** I examined ______________ at ______________ on ______________. ______________. ⚠ That is the whole of what I saw.   **What I was told, and by whom.** ______________ told me, at ______________, that ______________. ______________ records ______________. ______________ told me ______________, which I have ______________.   **What I infer.** **One:** ______________, because ______________. **Two:** ______________, because ______________. **Three:** ______________.   ⚠ **One thing I cannot place.** ______________ says ______________ and ______________ says ______________. I am not going to resolve that by preferring one of them, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says name who told you and when. Your second paragraph says *it was reported that* — who reported it, and at what time?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **is there anything in the S paragraph the writer did not see?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three paragraphs, S then T then I', ''],
  ['The S paragraph first-hand only, with a time and a place', ''],
  ['Every T attributed to a person or a named document', ''],
  ['The inferences numbered and labelled, and one conflict left unresolved', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their S paragraph only. The class says whether anything in it was actually told to the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you believed something because a document said it (**100 to 140 words**). Say what the document was, what it said, what turned out to be true, and who had filled it in.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _who had filled the document in_   ✓ _S, T and I kept apart?_   ? _what would have made you doubt it at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was the document filled in at the end of the day from memory? Usually two of three — and the class should notice that this is how their own logs are filled in.'));
out.push(box('Homework', ['Write your final text. Then take a report you have already sent and mark every sentence S, T or I. Count the S sentences (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review & Mediate: what does this report say caused it?'));
out.push(p('**Function:** explaining a report to the person it names   ·   **Review:** three registers of cause · the consequence · degree · the chain and where to stop · the three verbs · S, T and I'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Three registers of cause — which reader gets which?',
  '**2** What happens to a cause with no consequence attached?',
  '**3** What is the test for a *so … that* sentence?',
  '**4** Where does a chain of causes stop?',
  '**5** What does *caused* claim that *contributed to* does not?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why has Fadi come to see Nour?   **A** he has read the report   **B** he has heard that a report names him   **C** he wants a day off'));
out.push(p('**b**  Listen again. **1** What does the report actually say about him? **2** What does he point out that nobody had thought of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  "Does it say it was me?"', [
  ['Fadi', 'There is a report about the cartons. Does it say it was me?'],
  ['Nour', 'Sit down and I will read you the four lines that are about you. "What caused the damage: rain. No person caused this damage." "The tachograph shows the route and the hours and both were correct." "Fadi\'s driving, his hours and his route were not a factor."'],
  ['Fadi', 'And the late departure?'],
  ['Nour', 'Led to the load standing out. The departure was at 10.30 because picking started at 9.40 because the list prints at 7.15. Your name is not in that sentence and the printer is.'],
  ['Fadi', 'Somebody will still say the driver was late.'],
  ['Nour', 'Then they will be contradicted by page three, which is why page three exists.'],
  ['Fadi', 'There is one thing. It says I telephoned and the log says I did not.'],
  ['Nour', 'It says I cannot reconcile those and that the log is filled in from memory, so I am not preferring one over the other.'],
  ['Fadi', 'I telephoned the counter, not the office. Different number. It would not be in that log at all.'],
  ['Nour', '…Which log is the counter in?'],
  ['Fadi', 'There is no log on the counter. There has never been one. ⚠ So nobody can ever show that anybody telephoned the counter, which is the number on the side of my van.'],
  ['Nour', 'That is a better finding than anything on my three pages, and it took you forty seconds.'],
  ['Fadi', 'Because it is my number.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining a report to the person it names**',
  table(['To reassure', 'To be precise', 'To be corrected'], [
    ['I will read you the four lines that are about you.', 'Your name is not in that sentence; the printer is.', 'Which log is the counter in?'],
    ['No person caused this damage.', '*Led to*, not *caused*.', 'That is a better finding than my three pages.'],
  ], [2, 2, 2]),
  '⚠ **Read them the actual lines.** Not a summary and not reassurance: the sentences, in the order they appear. Somebody who has heard a report names them cannot be calmed by a paraphrase.',
  '⚠ **Say which sentence their name is in and which it is not.** *Your name is not in that sentence and the printer is.* That is what the three verbs in 7.5 were for, and this is the conversation where they pay.',
  '⚠ **Then let them read it as the person who was there.** Fadi finds in forty seconds what three pages missed, because it is his telephone number — ⚠ and the finding only arrives because the report had said the discrepancy was unresolved instead of resolving it against him.',
  '⚠ **Say out loud that their finding is better than yours.** It costs nothing and it is usually true, and it is how the next discrepancy reaches you in forty seconds instead of a year.',
  '**Practise:** Explain a report to somebody it names. Read the lines, say where their name is and is not, and ask what they can see that you cannot.',
  '**Useful phrases:**  I will read you the lines that are about you.  ·  No person caused this.  ·  *led to*, not *caused*  ·  Your name is not in that sentence.  ·  What can you see that I cannot?',
  '**Pronunciation – reading a report aloud to somebody it names.** 🔊 **Track 7.14** Listen to the four lines read slowly, with a pause after each. ⚠ A report read fast sounds like a defence; read slowly, with pauses, it sounds like what it is. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a report; B is named in it and has come to ask. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A\'s report on a pricing error names the counter copy and not Hala, and clears her arithmetic positively. B is Hala, who has heard only that there is a report. ⚠ B has one thing A does not know: two copies were in use, and the second was in the van.',
  'A\'s report on a lost customer names the lunch hour. B works the counter and knows the real reason: the customer always telephoned at 12.20 because that was when his own shop was quiet, and he had been told to.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what the named person found that the report had missed. ⚠ Then say why only they could have found it.'));
out.push(PHRASE_CARD(['I will read you the lines.', 'No person caused this.', 'led to, not caused', 'Your name is not in that sentence.', 'What can you see that I cannot?', 'that is better than my three pages']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a report. Explain it to **two** people it names, and collect what each of them can see that you cannot.'));
out.push(table(['Who I told', 'The lines about them', 'What they corrected', 'Why only they could see it'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the person named in the report could see that the report could not. This is the **seventh** unit of this book, and the finding is the one the whole unit has been building to: **a report is written by whoever has the documents and corrected by whoever was there, and the correction only ever arrives if the report left something unresolved instead of resolving it against them.**'));
out.push(p('_The report said _______. _______ pointed out that _______, which nobody could have known except _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _contributory factor · immediate cause · knock-on effect · inference · corroboration · recurrence._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 7)', 10));
out.push(p('⚠ **This unit practises Part 7: filling in a form from a text.** Read the account, then complete the incident form. Write **one, two or three words or a number** in each space.'));
out.push(box(null, [
  '**Extract from the report of 14 November.**',
  '_The Ghouta run departed at 10.30 against a scheduled 7.00. It reached Mr Haffar\'s premises at 4.20, by which time the shop had shut, and the load was returned to the yard, arriving at 6.42. The covered bay was locked and the load was placed on the north side. Rain fell overnight. Nine cartons of a consignment of twenty-four are unsaleable and are written off at about 180,000. The immediate cause of the damage was the rain; the late departure led to the load standing out; the absence of cover on the north side, which has been noted since 2019, contributed. The packaging was not a factor._',
], 'FFFFFF', C.navy));
out.push(table(['INCIDENT FORM', ''], [
  ['Date of incident', '______________'],
  ['Scheduled departure', '______________'],
  ['Actual departure', '______________'],
  ['Time of return to yard', '______________'],
  ['Where the load was placed', '______________'],
  ['Number of cartons written off', '______________'],
  ['Value of write-off', '______________'],
  ['Immediate cause', '______________'],
  ['Contributory factor', '______________'],
  ['Stated as not a factor', '______________'],
], [2, 3]));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: writing to the person a report names, before they hear about it from anybody else.',
  'The shape: **what the report says about them, quoted** · **which sentence their name is not in** · **what you are asking them to look at**.',
  '⚠ **Quote at least one line exactly.** A paraphrase of a report about somebody is worth nothing to them, because the thing they are afraid of is the wording.',
  '⚠ **End by asking them something.** *What can you see that I cannot?* ⚠ A letter that only reassures invites no correction, and the correction is the reason to write.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A report at your work names a colleague. Write to them before they hear about it elsewhere (**60 to 80 words**). **Quote what it says about them**, say **which sentence their name is not in**, and **ask them what they can see that you cannot**.'));
out.push(p('______________, there is a report about ______________ and I would rather you heard it from me. It says: "______________." ______________ is not in the sentence about ______________; ______________ is. One thing I could not resolve is ______________. ______________?'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one line quoted exactly', ''],
  ['Which sentence their name is not in', ''],
  ['A question that invites a correction', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a full incident report for something at your work (**100 to 140 words**): the chain with *which led to*, where you stop it, the three verbs used correctly, a *not a factor* line with its evidence, and your inference labelled as one.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then read your report to the person it names and write down what they correct (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The run was late ___ the list printed at 7.15.   a) because   b) owing to   c) as a result',
  '2  The delivery failed ___ a late departure from the yard.   a) because   b) owing to   c) since',
  '3  The list printed late, ___ picking began at 9.40.   a) which mean that   b) that meant   c) which meant that',
  '4  The departure was late; ___ four drops missed the window.   a) because   b) therefore   c) owing to',
  '5  It was ___ late that the shop had shut.   a) so   b) such   c) too',
  '6  It was ___ a long delay that the stock went damp.   a) so   b) such   c) too',
  '7  The rain ___ the damage; the late departure ___ the load standing out.   a) led to / caused   b) contributed to / caused   c) caused / led to',
  '8  The gate sheet records a departure at 10.30. That is ___.   a) what I was told   b) what I saw   c) what I infer',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 7.15** Listen to the exchange. Complete the note.   What the report says caused the damage: ______   What led to it: ______   What contributed: ______   What was not a factor: ______   What Fadi points out: ______'));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Nour', 'The report says rain caused the damage, and it says in those words that no person caused it.'],
  ['Nour', 'The late departure led to the load standing out overnight. Your name is not in that sentence — the printing time is.'],
  ['Nour', 'Three things contributed. There is no cover on the north side of the yard, which has been noted since 2019. The returns procedure has no overnight step. And the load came back after the warehouse closed, so nobody with a key to the covered bay was there.'],
  ['Nour', 'And your driving, your hours and your route were not a factor — the tachograph shows all three and all three were correct.'],
  ['Fadi', 'There is one thing. I telephoned the counter, not the office. Different number, so it would never be in the office log. And there has never been a log on the counter at all.'],
]));
out.push(p('**C  Writing.** Write the three evidence paragraphs for one incident (**50 words or more**): what you saw, what you were told and by whom, and what you infer.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give one cause in three registers, and keep the cause in the customer\'s version',
  '☐ attach a consequence with a figure, so that a cause is not filed',
  '☐ use *so … that* only where a line was crossed, and say what crossed it',
  '☐ build a chain and stop it at the last link somebody here can pull',
  '☐ choose between *caused*, *led to* and *contributed to* — and clear what was not a factor',
  '☐ separate what I saw from what I was told and what I infer, in that order',
  '☐ explain a report to the person it names, and invite the correction',
  '☐ write a three-register cause, a "what it cost" note, an attribution page and an evidence page',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
