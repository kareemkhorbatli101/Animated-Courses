// Proactive Business English B1 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'standing instruction · process step · work instruction · hold point · control point · segregation of duties · four-eyes check · verification · reconciliation · variance · exception · waiver · compliance · non-compliance · corrective action · preventive action · upstream · downstream · handoff · pinch point · throughput · cycle time · as-is · to-be · walkthrough · sample check · spot check · chain of custody · version number · effective date';
const BACK_AT_B1 = 'duty · shift · load';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 5  How It Is Done Here'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  describe how something is handled, start to finish',
  '**5.2**  say how a practice came to exist',
  '**5.3**  distinguish *by* from *with* — the doer and the tool',
  '**5.4**  order a procedure, and mark the step that cannot be moved',
  '**5.5**  decide when a sentence may have nobody in it, and when it may not',
  '**5.6**  say what has been changed since the last time anybody asked',
  '**5.7**  Review & Mediate: what does this procedure require of me?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The tense of the process — and the man who has come to read it', [
  'A passive takes the person out of the sentence: *the order is checked at the gate* rather than *Abu Yasser checks the order at the gate*. That is exactly right for a **process**, because a process has to go on being true when Abu Yasser is on holiday, and exactly wrong for a **mistake**, because a mistake belongs to somebody.',
  '⚠ **Unit 3 taught you how to name an omission. This unit gives you the tense most often used to avoid naming one.** So 5.5 is the cycle that matters: it is about the one step in every procedure where the name must go back in, and about recognising the difference in your own writing before somebody else does.',
  '**And the unit has a reader.** **Mr Ziad Attar** is the external auditor, and he spends four days at Sham Trading in this unit. He has been the auditor since 2019 — at A2 he was only ever *the auditor who is here on the 13th* — and he is not an enemy. He is the first reader in this book who is paid to find the gap, which makes him the most useful reader you will ever write for.',
], C.lyellow, C.orange));

// ======================= CYCLE 5.1 =======================
out.push(pb());
out.push(h2('5.1  How an order is handled'));
out.push(p('**Function:** describing a process   ·   **Grammar:** present passive   ·   **Pronunciation:** the weak _is_ and _are_ in a chain of steps'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe what happens to an order at your work, from the moment it arrives to the moment it is invoiced. How many steps?'));
out.push(p('**b**  Which belongs in a procedure, and why? _Hala takes the order. · The order is taken at the counter. · Somebody takes the order._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar ask for?   **A** the names   **B** the steps, without the names   **C** the figures'));
out.push(p('**b**  Listen again. **1** Why does he not want the names? **2** What does he say he is going to do with the list afterwards?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  "Tell me the steps, not the people"', [
  ['Mr Attar', 'Walk me through an order. From the telephone to the invoice.'],
  ['Nour', 'Hala takes it at the counter, then she types the picking list, then Abu Yasser—'],
  ['Mr Attar', 'Stop. Take the names out and tell me again.'],
  ['Nour', 'Why? You will meet all three of them this week.'],
  ['Mr Attar', 'I will, and in April one of them will be somewhere else and the procedure will still have to work. Names tell me who is doing it today. Steps tell me what the company requires.'],
  ['Nour', 'The order is taken at the counter. A picking list is typed from it. The goods are picked against the list. The load is counted against the **order** at the gate, not against the list. The gate sheet is signed, by name, by whoever counted. The invoice is raised from the order.'],
  ['Mr Attar', 'Six steps. Now say the last one again.'],
  ['Nour', 'The invoice is raised from the order.'],
  ['Mr Attar', 'Not from the gate sheet?'],
  ['Nour', '…From the order. Which means that if the gate count found a difference, the invoice does not know about it.'],
  ['Mr Attar', 'That is the first thing you have told me that you did not know when you started talking. Six steps took four minutes and found one gap, and I have not opened a file yet.'],
  ['Nour', 'Is that what you do all week?'],
  ['Mr Attar', 'Mostly. I ask people to describe what they do without using anybody\'s name, and about a third of the time they find the gap themselves while they are talking. ⚠ The names are what hide it: as long as Abu Yasser is in the sentence, the sentence feels reliable, because he is.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The present passive — a process that outlives the people in it**',
  table(['Shape', 'Example'], [
    ['**is / are** + third form', 'The order **is taken** at the counter.'],
    ['a chain of steps', 'A list **is typed**. The goods **are picked**. The load **is counted**.'],
    ['the source named', 'The invoice **is raised from** the order.'],
    ['**not** + the wrong source', '…**not** from the picking list.'],
    ['⚠ one named role', 'The gate sheet **is signed, by name,** by whoever counted.'],
  ], [1.7, 2.6]),
  '⚠ **Take the names out and the gaps appear.** A step with a trusted person in it feels reliable because the person is; the same step with nobody in it has to stand on its own. This is the single most useful thing in the unit and it takes four minutes to prove on your own process.',
  '⚠ **Say what each step is done *from*.** *The invoice is raised from the order* — and the moment you say that, you can ask whether it should be raised from the gate sheet instead. Most process gaps are a document being copied from the wrong document.',
  '⚠ **A procedure is written in the present**, even about a thing that happens twice a year. *The stock is counted quarterly*, not *we count the stock*, and not *the stock will be counted*.',
  '⚠ Six steps is a procedure. Fourteen is a narrative, and nobody will follow it.',
  '**Practise:** Describe each as a chain of passive steps, naming what each step is done *from*. 1 an order 2 a payment in 3 a complaint 4 a delivery out 5 a new supplier account',
  '**Useful phrases:**  The order is taken at…  ·  A list is typed from it.  ·  The load is counted against the order.  ·  …is raised from…  ·  not from…',
  '**Pronunciation – the weak _is_ and _are_.** 🔊 **Track 5.2** Listen: _the order\'s taken · a list\'s typed · the goods\'re picked_. In a chain of steps the auxiliary almost disappears and the third form carries the stress. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a process with names; B takes the names out and asks what each step is done **from**. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Walk me through __________. From __________ to __________.'],
  ['A', '__________ takes it, then __________, then __________—'],
  ['B', 'Stop. Take the names out and tell me again.'],
  ['A', '__________ is __________. __________ is __________ from it. __________ is __________ against __________.'],
  ['B', 'Now say the last step again. __________ is raised from __________?'],
  ['A', '…From __________. Which means that if __________, __________ does not know about it.'],
  ['B', 'That is the first thing you have told me that you did not know when you started.'],
]));
out.push(table(['Role card 1 — a payment in', 'Role card 2 — a complaint'], [[
  'Cash over the counter → day book → bank bag → paying-in book → ledger. The gap: the ledger is written from the paying-in book, not from the day book, so a payment taken and not banked is invisible.',
  'Complaint by telephone → a note on a pad → a credit note or a replacement → the complaints book. The gap: the complaints book is written up at the end of the month from memory, so a complaint settled the same day never reaches it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the walkthrough for the class – **without the book**.'));
out.push(p('**Listener task:** write the steps as a chain, and ring the step where a document is copied from the wrong document. There is one in nearly every process.'));
out.push(PHRASE_CARD(['The order is taken at…', 'A list is typed from it.', 'counted against the order', 'is raised from…', 'not from…', 'Take the names out.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write one of your own processes as **six** passive steps. Beside each, write what it is done **from**. Then mark any step where that source looks wrong.'));
out.push(table(['Step (passive)', 'Done from what', 'Right source?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.4, 0.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your six steps with no names in them. Then say which source looked wrong when you wrote it down.'));
out.push(p('**Listener task:** count the processes in the room where at least one document is copied from the wrong one. It is most of them, and nobody knew before this morning.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the order is take at the counter_ and _the goods picks against the list_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page written for the auditor, and answer the questions.'));
out.push(box(null, [
  '**GOODS OUT — the procedure as it is, October. Version 3. Effective 1 September 2024.**',
  '**1.** An order **is taken** at the counter or by email and **is written** on a numbered order form. A telephone order **is read back** to the customer before the call ends.',
  '**2.** A picking list **is typed from the order**. The order number and the time of typing **are printed** on it.',
  '**3.** The goods **are picked** against the picking list.',
  '**4.** At the gate the load **is counted against the order** — ⚠ **not against the picking list** — and the gate sheet **is signed, by name, by whoever counted it**. This is the only step in this procedure where a person is named, and it is named deliberately.',
  '**5.** Any difference between the order and the count **is written on the gate sheet** and the load **is not released** until the difference **has been seen** by the coordinator.',
  '**6.** The invoice **is raised from the order**.',
  '⚠ **Known gap, stated by us before you ask.** Step 6 says *from the order*. If a difference was found at step 5 and recorded, the invoice does not pick it up: somebody has to carry it across by hand, and nothing in this procedure says who. **This has happened once that we know of, in March, and it was found by the customer.** We do not have a fix yet and we are not going to invent one for this page.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which step names a person, and what does the page say about that?'));
out.push(item('2', 'What is the known gap, and how was it discovered?'));
out.push(item('3', 'What does the page refuse to do at the end?'));
out.push(box('Writer\'s box', [
  '**A procedure page — numbered passive steps, a version number and an effective date**, then one honest paragraph: **known gap, stated by us before you ask.**',
  '**Mark the step that names a person and say the naming is deliberate.** *This is the only step where a person is named, and it is named deliberately.* A reader who meets a name in a procedure assumes it is sloppiness unless you tell them otherwise.',
  '**State the gap with its instance.** *This has happened once that we know of, in March, and it was found by the customer.* A gap with a date and a discoverer is a finding; a gap in the abstract is a worry.',
  '⚠ **Refuse to invent a fix for the page.** *We do not have a fix yet and we are not going to invent one for this page.* Procedures acquire imaginary controls precisely because somebody felt a page should not end on a gap — and then the imaginary control is audited and found not to exist, which is far worse than the gap.',
  '⚠ **Version number and effective date, always.** A procedure page with neither cannot be relied on, because nobody can tell whether the copy in their hand is the one in force.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the procedure page for one of your own processes (**50 words or more**). Use the frame.'));
out.push(p('**______________ — the procedure as it is, ______________. Version ______________. Effective ______________.**   **1.** ______________ **is** ______________ and **is** ______________.   **2.** ______________ **is** ______________ from ______________.   **3.** ______________ **are** ______________ against ______________.   **4.** ______________ **is** ______________ — ⚠ **not** ______________ — and ______________ **is signed, by name, by** ______________.   **5.** Any difference **is** ______________ and ______________ **is not** ______________ until ______________.   **6.** ______________ **is** ______________ from ______________.   ⚠ **Known gap, stated by us before you ask.** ______________. This has happened ______________. We do not have a fix yet.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what each step is done from. Your step 5 does not say — what document is it copied from?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody follow this on a day when none of the usual people is in?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Six steps or fewer, all passive, all present', ''],
  ['Each step says what it is done **from**', ''],
  ['One named step, with the naming explained', ''],
  ['A known gap with its date, and no invented fix', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their known gap. The class says which gap they would fix first, and which they would leave.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a process at your work that nobody has ever written down (**100 to 140 words**). Describe it in passive steps, and say what you found when you wrote it as steps rather than as people.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the step that surprised them_   ✓ _present passive throughout?_   ? _which document is copied from the wrong one?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did writing it as steps show something the writer had not known? It is usually two of the three, and that is the whole argument for Unit 5.'));
out.push(box('Homework', ['Write your final text. Then write one of your own processes as six passive steps with no names, and show it to the person who does step 3 (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.2 =======================
out.push(pb());
out.push(h2('5.2  How it came to be done that way'));
out.push(p('**Function:** giving the history of a practice   ·   **Grammar:** past passive   ·   **Pronunciation:** _was_ and _were_ in a history'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Pick one rule at your work. Say how it came to exist, without naming anybody.'));
out.push(p('**b**  Which is the stronger thing to tell an auditor? _We introduced the gate count in 2024. · The gate count was introduced in September 2024, after two consignments had been signed for in error._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar want with every change?   **A** the date and what prompted it   **B** the cost   **C** who approved it'));
out.push(p('**b**  Listen again. **1** Why does he say an undated control is worth less? **2** What does he say about controls introduced after nothing happened?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  "What prompted it?"', [
  ['Mr Attar', 'The gate count against the order. When was it introduced and what prompted it?'],
  ['Nour', 'September 2024. Two consignments had been signed for that were not ours — the haulier had changed drivers twice that summer.'],
  ['Mr Attar', 'Good. Did either of them cost money?'],
  ['Nour', 'Neither. Both were returned within a week.'],
  ['Mr Attar', 'Better. Write that down, because it is the strongest thing on your page.'],
  ['Nour', 'That nothing happened?'],
  ['Mr Attar', 'That a control **was introduced** when nothing had yet gone wrong enough to force it. Most of the controls I see were introduced after a loss, which tells me a company reacts. Yours was introduced after a near miss, which tells me something different and rarer.'],
  ['Nour', 'And if a control has no date?'],
  ['Mr Attar', 'Then I cannot tell whether it is a decision or a habit, and I have to test it rather than take it. An undated control costs me an afternoon and costs you my afternoon. ⚠ Dates are not bureaucracy; they are the difference between my believing you and my checking you.'],
  ['Nour', 'The fourteen-day price was introduced in April and I do not know what prompted it.'],
  ['Mr Attar', 'Then find out before Thursday and tell me, and if nobody remembers, tell me that instead. *Nobody can now say what prompted this* is an answer I can work with. ⚠ *It has always been done this way* is not, and it is the sentence I hear most.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The past passive — the history of a control**',
  table(['Shape', 'Example'], [
    ['**was / were** + third form', 'The gate count **was introduced** in September 2024.'],
    ['**after** + the past perfect', '…**after** two consignments **had been signed** for in error.'],
    ['the near miss, stated', 'Neither **cost** money. Both **were returned** within a week.'],
    ['**was prompted by**', 'The change **was prompted by** a change of driver.'],
    ['⚠ the honest nil', 'Nobody can now say what prompted this.'],
  ], [1.9, 2.6]),
  '⚠ **Every control needs a date and a prompt.** Without them a reader cannot tell a decision from a habit, and has to test what they could otherwise have taken on trust.',
  '⚠ **Say when the prompt was a near miss, not a loss.** *Neither cost money* is the strongest sentence on a procedure page: a control introduced after a near miss says something about a company that a control introduced after a loss does not.',
  '⚠ **_Nobody can now say what prompted this_ is a real answer and a good one.** ⚠ *It has always been done this way* is not an answer; it is the sentence that makes an auditor open a file.',
  '⚠ The shape is **past passive + *after* + past perfect**, and Unit 3\'s tense does the second half: *was introduced after two consignments had been signed for*.',
  '**Practise:** Give the date and the prompt for each, and say whether the prompt was a loss or a near miss. 1 a gate count 2 a price term 3 a two-signature rule 4 a locked store room 5 something nobody can date',
  '**Useful phrases:**  was introduced in…  ·  after … had been …  ·  neither cost money  ·  was prompted by…  ·  Nobody can now say what prompted this.',
  '**Pronunciation – _was_ and _were_ in a history.** 🔊 **Track 5.4** Listen: _it was introduced in September // after two consignments had been signed for in error_. Two groups, and *was* and *had* are both weak. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a control; B asks for the date and the prompt, and tests the answer. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________. When was it introduced and what prompted it?'],
  ['A', '__________. __________ had been __________.'],
  ['B', 'Did it cost money?'],
  ['A', '__________.'],
  ['B', 'Then write that down, because it is the strongest thing on your page.'],
  ['A', 'That __________?'],
  ['B', 'That a control was introduced when __________. Most of the controls I see __________.'],
  ['A', 'And if a control has no date?'],
  ['B', 'Then I cannot tell whether it is a decision or a habit.'],
]));
out.push(table(['Role card 1 — the fourteen-day price', 'Role card 2 — nobody remembers'], [[
  'Introduced April 2025. The prompt: two months of selling wrap at or below cost in early 2025, after the price moved twice before March. A loss, and it should be stated as one.',
  'The two-signature rule on anything over 500,000. Nobody can date it and nobody can say what prompted it. B must get A to say so plainly rather than reaching for *it has always been done this way*.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the date and the prompt, and mark each prompt L (a loss) or N (a near miss). Then count them.'));
out.push(PHRASE_CARD(['was introduced in…', 'after … had been …', 'neither cost money', 'was prompted by…', 'Nobody can now say.', 'not "it has always been done"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** controls at your work. For each: the date, the prompt, and whether the prompt was a loss or a near miss. Where nobody knows, write *nobody can now say*.'));
out.push(table(['The control', 'Introduced', 'Prompted by', 'Loss or near miss?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 0.9, 1.6, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ was introduced in _______, after _______ had been _______. It was a loss / a near miss._'));
out.push(p('**Listener task:** count the losses against the near misses in the room. A company whose controls are all losses is a company that has never acted early, which is worth knowing about yourself.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was introduce in 2024_ and _after two consignments were been signed_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the history page, and answer the questions.'));
out.push(box(null, [
  '**CONTROLS — when each was introduced, and what prompted it. Prepared for Z. Attar, October.**',
  table(['Control', 'Introduced', 'Prompted by', 'L / N'], [
    ['Gate count against the order, signed by name', 'Sept 2024', 'two consignments signed for in error after a change of driver; neither cost money', '**N**'],
    ['Price held 14 days in writing', 'Apr 2025', 'about two months of wrap sold at or below cost after the list moved twice before March', '**L**'],
    ['One price list, printed Fridays, dated and initialled', 'Oct 2025', 'two undated lists in use in one building; one credit of 46,000', '**L**'],
    ['Picking list carries the order number and the time', 'Oct 2025', 'an order amended after a list was printed; nothing lost', '**N**'],
    ['Two signatures over 500,000', 'unknown', '**nobody can now say**', '—'],
  ], [1.7, 0.8, 2.6, 0.5]),
  '**What this table says about us, which you will work out anyway.** Two of our five controls came from a loss, two from a near miss, and one has no history at all. The two near misses were both in the last fourteen months and the two losses were both before that. ⚠ We would like to claim that as a change in the way we work. **It may equally be that we have simply been writing things down since the second site opened, and that near misses before that were not recorded rather than not noticed.**',
  '**The one with no history.** The two-signature rule predates everybody here except Abu Yasser, who says it was Mr Ayoub\'s father\'s rule and that the figure was once 50,000. We have not changed it and we cannot justify the figure; 500,000 is now about a fortnight of counter takings rather than a serious sum.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What pattern does the company point out in its own table?'));
out.push(item('2', 'What alternative explanation does it offer for that pattern?'));
out.push(item('3', 'What does the page say about the 500,000 figure?'));
out.push(box('Writer\'s box', [
  '**A controls history — a four-column table:** the control → when it was introduced → what prompted it → **L or N**. Then two paragraphs: what the table says about you, and the one with no history.',
  '**Draw the conclusion the reader would draw, and then undercut it.** *We would like to claim that as a change in the way we work. It may equally be that we have simply been writing things down since the second site opened.* ⚠ That second sentence is worth more than the whole table: it shows you can read your own evidence against yourself.',
  '**Give the undatable control its own paragraph and say what is wrong with it.** *500,000 is now about a fortnight of counter takings rather than a serious sum.* A control nobody can justify is more dangerous than no control, because it is obeyed.',
  '⚠ **Mark losses and near misses and count them.** The proportion is a fact about the company, and no auditor will ever have to ask for it twice.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the controls history for your own workplace (**50 words or more**). Four or five controls, then the two paragraphs. Use the frame.'));
out.push(p('**CONTROLS — when each was introduced, and what prompted it.**   ______________ | ______________ | ______________ | **L / N**   ______________ | ______________ | ______________ | **L / N**   ______________ | ______________ | ______________ | **L / N**   ______________ | unknown | **nobody can now say** | —   **What this table says about us.** ______________ of our ______________ came from a loss and ______________ from a near miss. ⚠ We would like to claim ______________. It may equally be that ______________.   **The one with no history.** ______________. We cannot justify ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says draw the conclusion and then undercut it. Yours draws a flattering conclusion — what is the other explanation?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the page tell the reader anything they could have used against the writer?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A date and a prompt for every control', ''],
  ['Losses and near misses marked and counted', ''],
  ['The flattering conclusion undercut', ''],
  ['The undatable control, and what is wrong with it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their undercutting sentence. The class says which writer they would trust with a figure.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule at your work that nobody can justify (**100 to 140 words**). Say what it is, who it came from, what the figure or the threshold once meant, and what would happen if it were changed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the rule once meant_   ✓ _past passive with a date and a prompt?_   ? _who would have to agree to change it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these rules were sensible when they were made? Nearly all — which is the uncomfortable point: a good rule with a fixed figure in it becomes a bad rule by doing nothing at all.'));
out.push(box('Homework', ['Write your final text. Then find the date and the prompt of one control at your workplace by asking the longest-serving person, and write it down (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.3 =======================
out.push(pb());
out.push(h2('5.3  By hand, with a pen'));
out.push(p('**Function:** naming the doer and the tool   ·   **Grammar:** *by* + the agent, *with* + the instrument   ·   **Pronunciation:** the stress that falls on the agent'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that are done **by hand**, and three that are done **with** a particular tool or document.'));
out.push(p('**b**  Which are right? _It is signed by hand. · It is signed with hand. · It is counted by the gate sheet. · It is counted against the gate sheet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar notice about one sentence?   **A** the tense   **B** that *by* has been used for a document   **C** the spelling'));
out.push(p('**b**  Listen again. **1** What difference does he draw between *by* and *with*? **2** Why does he say the mistake matters in a procedure?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  "By whom, or with what?"', [
  ['Mr Attar', 'Step five. "The difference is recorded by the gate sheet."'],
  ['Nour', 'It is.'],
  ['Mr Attar', 'Is it? A gate sheet cannot record anything. It is a piece of paper.'],
  ['Nour', 'It is recorded **on** the gate sheet. By whoever counted.'],
  ['Mr Attar', 'Then that is two different facts and your sentence had neither. *By* is the person; *with* or *on* or *against* is the thing. *Recorded by the person who counted, on the gate sheet.*'],
  ['Nour', 'Does it matter? Everybody knows what it means.'],
  ['Mr Attar', 'Everybody here knows. Look at what the sentence as written requires: nothing. There is no person in it, so there is nobody who has failed if it is not done. ⚠ A procedure is a list of things somebody has to do, and *by* is the word that says who.'],
  ['Nour', 'And *with*?'],
  ['Mr Attar', 'Tells me what they do it with, and that matters more often than people think. *Counted by hand* and *counted with a scanner* are two different controls with two different failure modes. A scanner does not mis-add and a hand does not scan the same pallet twice.'],
  ['Nour', 'Ours is all by hand.'],
  ['Mr Attar', 'Then write *by hand* and let me decide what I think about it, rather than leaving me to assume a system you do not have.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_By_, _with_, _on_, _against_**',
  table(['Word', 'What follows it', 'Example'], [
    ['**by**', 'the **person** who does it', 'recorded **by** whoever counted'],
    ['**by hand** / **by telephone**', 'the manner', 'counted **by hand** · ordered **by telephone**'],
    ['**with**', 'the **tool**', 'counted **with** a scanner · signed **with** a pen'],
    ['**on**', 'where it is written', 'recorded **on** the gate sheet'],
    ['**against**', 'what it is checked **against**', 'counted **against** the order'],
  ], [1.1, 1.5, 2.4]),
  '⚠ **_By_ is the person; a document cannot do anything.** *Recorded by the gate sheet* is a sentence that requires nobody to do anything, which is exactly the fault a procedure cannot afford. ⚠ The repair is usually two facts where there was one: *by whoever counted, on the gate sheet.*',
  '⚠ **_By hand_ and _with a scanner_ are two different controls** with two different failure modes — a scanner does not mis-add and a hand does not scan the same pallet twice. **Name the manner and let the reader judge it**, rather than leaving them to assume a system you do not have.',
  '⚠ **_Against_ is the most important of the four in this book.** *Counted against the order* names what the count is compared with, and that is where process gaps live.',
  '⚠ ~~Signed with hand~~ and ~~counted by the gate sheet~~ are the two errors, and they are opposite: one puts a tool where a manner belongs, the other a document where a person belongs.',
  '**Practise:** Say each with the right word, and add the person where there is none. 1 the gate sheet 2 the count 3 the invoice 4 the order 5 the stock entry',
  '**Useful phrases:**  by whoever counted  ·  by hand  ·  with a pen  ·  on the gate sheet  ·  against the order',
  '**Pronunciation – the stress on the agent.** 🔊 **Track 5.6** Listen: _recorded **by** whoever counted, **on** the gate sheet_. Both prepositions carry a small stress, because they are the two words that carry the facts. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a step with a document as the agent; B repairs it into two facts. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Step __________. "__________ is __________ by __________."'],
  ['A', 'It is.'],
  ['B', 'Is it? __________ cannot __________ anything.'],
  ['A', 'It is __________ **on** __________. By __________.'],
  ['B', 'Then that is two facts and your sentence had neither. ⚠ *By* is the person; *on* is the thing.'],
  ['A', 'Does it matter? Everybody knows what it means.'],
  ['B', 'Look at what the sentence requires: __________. There is no person in it, so __________.'],
]));
out.push(table(['Role card 1 — the stock entry', 'Role card 2 — the reconciliation'], [[
  '"The stock is updated by the system." It is not: it is updated **on** the system, **by** whoever is entering, **from** the count sheets, **by hand**. Four facts hidden in six words.',
  '"The bank account is reconciled by the statement." It is reconciled **against** the statement, **by** Nadia, **with** a printed ledger, **by hand**, monthly.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the repair for the class – **without the book**.'));
out.push(p('**Listener task:** write the repaired sentence and count the facts in it. Four is common where there was one.'));
out.push(PHRASE_CARD(['by whoever counted', 'by hand', 'with a pen', 'on the gate sheet', 'against the order', 'a document cannot do anything']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** steps from your own procedures and check each for *by*, *with*, *on* and *against*. Repair any where a document is doing the work.'));
out.push(table(['The step as written', 'Repaired: by whom · with what · on what · against what'], [['', ''], ['', ''], ['', ''], ['', ''], ['', '']], [1.6, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It said _______. It is actually done by _______, with _______, on _______, against _______._'));
out.push(p('**Listener task:** write down every step where nobody was named. Each one is a step that requires nobody to do anything.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _signed with hand_ and _counted by the order_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the repaired page, and answer the questions.'));
out.push(box(null, [
  '**GOODS OUT — version 4. Effective 20 October. Changed from version 3 after a walkthrough with the auditor.**',
  '**What has changed from version 3.** Nothing about what we do. Four steps said what happened and did not say **who by** or **against what**; they now do. ⚠ We found this by reading the page aloud to somebody who does not work here.',
  table(['Step', 'Version 3 said', 'Version 4 says'], [
    ['2', 'A picking list is typed from the order.', 'A picking list is typed **from the order, by whoever took it, on the office machine**, which prints the order number and the time.'],
    ['4', 'The load is counted at the gate.', 'The load is counted **against the order**, **by hand**, **by one person**, and the gate sheet is signed **by that person, by name**.'],
    ['5', 'The difference is recorded by the gate sheet.', 'Any difference is written **on the gate sheet by the person who counted**, and the load is not released until it **has been seen by the coordinator**.'],
    ['6', 'The invoice is raised from the order.', 'The invoice is raised **from the order by accounts**, ⚠ and **not** from the gate sheet, which is the known gap at the foot of this page.'],
  ], [0.5, 2.1, 3.1]),
  '**One thing we have learned from doing this.** Every one of the four sentences was true before and required nobody. The page has not got longer by much and it has got **harder**: there are now four places where a person could have failed to do something, and before there were none. ⚠ That is not a cost of the rewrite. That is what a procedure is.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the page say has changed about what the company does?'));
out.push(item('2', 'How did they find the four sentences?'));
out.push(item('3', 'What does the last paragraph say a procedure is?'));
out.push(box('Writer\'s box', [
  '**A version-change page — a three-column table:** the step number → what the old version said → what the new one says, with the added words in bold. Then one paragraph on what the rewrite taught you.',
  '**Say plainly when nothing about the work has changed.** *Nothing about what we do.* A new version that changes only the words is the commonest and most suspected kind, and saying so disarms it.',
  '**Give the method.** *We found this by reading the page aloud to somebody who does not work here.* It is the cheapest audit there is and almost nobody does it.',
  '⚠ **Name the real effect: the page is harder.** *There are now four places where a person could have failed to do something, and before there were none. That is not a cost of the rewrite; that is what a procedure is.* A learner who understands that sentence has understood the whole unit.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one of your own procedures and write the version-change page (**50 words or more**). Use the frame.'));
out.push(p('**______________ — version ______________. Effective ______________. Changed after ______________.**   **What has changed.** Nothing about ______________. ______________ steps said what happened and did not say **who by** or **against what**. ⚠ We found this by ______________.   ______________ | ______________ | ______________   ______________ | ______________ | ______________   ______________ | ______________ | ______________   **One thing we have learned.** Every one of those sentences was true before and required nobody. The page is now **harder**: there are ______________ places where a person could fail, and before there were ______________. ⚠ That is what a procedure is.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says show the added words in bold so the reader can see the change. In your third row I cannot tell what is new — which words were not there before?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **how many places in the new version could a person fail?** Count them. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Old and new side by side, with the additions visible', ''],
  ['A statement that the work itself has not changed', ''],
  ['The method named', ''],
  ['The count of places a person could now fail', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their count. The class says whether a page with more such places is a better page — and the answer is yes, and it is worth saying why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a sentence at your work that requires nobody (**100 to 140 words**). Find a real one — a notice, a rule, a procedure line — and say what it would have to say to require somebody.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence that requires nobody_   ✓ _by, with, on, against used correctly?_   ? _who should it name?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of these sentences are on a wall somewhere, in a frame or a laminate? The grander the presentation, the more often nobody is required.'));
out.push(box('Homework', ['Write your final text. Then read one of your own procedure pages aloud to somebody who does not work with you, and write down every step they could not follow (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.4 =======================
out.push(pb());
out.push(h2('5.4  First, then, and only after that'));
out.push(p('**Function:** ordering a procedure   ·   **Grammar:** sequencers; *only after*; *must not be … until*   ·   **Pronunciation:** the step that is spoken slower'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take a procedure you know. Which step could be done out of order with no harm, and which could not?'));
out.push(p('**b**  Which is stronger in a procedure? _Then the load is released. · The load is not released until the difference has been seen._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say about the order of steps?   **A** it does not matter   **B** only two of six steps actually have to be in that order   **C** all six are fixed'));
out.push(p('**b**  Listen again. **1** What is the test for a step that must be in its place? **2** Why does he say marking only the fixed steps makes a procedure more likely to be followed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  "Which of these six could be done in any order?"', [
  ['Mr Attar', 'Six steps. Which of them have to be in that order?'],
  ['Nour', 'All of them, surely.'],
  ['Mr Attar', 'Try it. Could the picking list be typed before the order is written down?'],
  ['Nour', 'No. It is typed from the order.'],
  ['Mr Attar', 'So steps one and two are fixed. Could the invoice be raised before the goods are picked?'],
  ['Nour', 'It could. It would be unusual and nothing would break.'],
  ['Mr Attar', 'So step six is not fixed. Keep going — and you will find that two of your six are genuinely fixed and the rest are habit, which is not a criticism.'],
  ['Nour', 'Why does it matter which?'],
  ['Mr Attar', 'Because a procedure where every step is marked as essential is a procedure that gets abandoned the first busy Thursday. Nobody can follow six rigid steps under pressure, so they follow none. **Mark two and people keep two.**'],
  ['Nour', 'And the two are?'],
  ['Mr Attar', 'The count against the order before the signature, and the difference seen before the release. Those are the two where doing it out of order destroys the control. Write them as *must not … until*, and write the other four as plain steps.'],
  ['Nour', 'That feels like giving permission to be sloppy about four of them.'],
  ['Mr Attar', 'It is giving permission to be **flexible** about four, so that the two survive. ⚠ A control that cannot bend anywhere breaks everywhere.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Ordering a procedure — and marking only what is fixed**',
  table(['Shape', 'Use', 'Example'], [
    ['**First** … **then** … **after that**', 'ordinary steps', 'First the order is written. Then a list is typed.'],
    ['**is not … until**', '⚠ **the fixed steps only**', 'The load **is not released until** the difference has been seen.'],
    ['**only after**', 'the same, in front position', '**Only after** the count is the sheet signed.'],
    ['**must not be** … **before**', 'the strongest form', 'The sheet **must not be** signed **before** the count.'],
    ['the test', 'what breaks if it is out of order', 'Nothing breaks → it is not fixed.'],
  ], [1.6, 1.3, 2.4]),
  '⚠ **The test for a fixed step: what breaks if it is done out of order?** If nothing breaks, it is habit — which is not a criticism, and it should be written as a plain step.',
  '⚠ **Mark two steps and people keep two. Mark six and people keep none.** A procedure in which everything is essential is abandoned the first busy Thursday, because nobody can hold six rigid steps under pressure. ⚠ *A control that cannot bend anywhere breaks everywhere.*',
  '⚠ **The fixed steps get a different grammar**: *is not … until*, *only after*, *must not be … before*. The difference in the sentence is how the reader knows which two matter.',
  '⚠ A step is usually fixed because something is **checked against** something that must exist first, or because a signature would otherwise certify something unseen.',
  '**Practise:** For each procedure, find the two steps that are genuinely fixed and write them as *not … until*. 1 goods out 2 a payment in 3 a credit note 4 a stock count 5 taking on somebody new',
  '**Useful phrases:**  First… then… after that…  ·  is not released until…  ·  only after…  ·  must not be signed before…  ·  what breaks if it is out of order?',
  '**Pronunciation – the step spoken slower.** 🔊 **Track 5.8** Listen to six steps read aloud: four at an even pace and the two fixed ones slower, with a pause before *until*. A reader hears which two matter before they have understood why. Repeat the two.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A believes all the steps are fixed; B tests each with *what breaks?* and finds the two. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ steps. Which have to be in that order?'],
  ['A', 'All of them, surely.'],
  ['B', 'Try it. Could __________ be done before __________?'],
  ['A', 'No. It is __________ from __________.'],
  ['B', 'So those two are fixed. Could __________ be done before __________?'],
  ['A', 'It could. Nothing would break.'],
  ['B', 'So that one is not fixed. ⚠ Mark two and people keep two.'],
  ['A', 'That feels like permission to be sloppy about the rest.'],
  ['B', 'It is permission to be flexible, so that the two survive.'],
]));
out.push(table(['Role card 1 — a payment in', 'Role card 2 — a credit note'], [[
  'Steps: take the cash, write the day book, count the bag, write the paying-in slip, bank it, enter the ledger. The two fixed: the day book before the bag leaves the counter, and the ledger from the paying-in slip only after the bank stamp.',
  'Steps: agree it, raise it, approve it, send the top copy, keep the second, tell accounts. The two fixed: approval before the top copy leaves, and the second copy in the book before anything is sent.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the testing for the class – **without the book**.'));
out.push(p('**Listener task:** write the two fixed steps and what breaks if each is done out of order. If nothing breaks, say so.'));
out.push(PHRASE_CARD(['First… then… after that…', 'is not released until…', 'only after…', 'must not be signed before…', 'what breaks?', 'mark two, keep two']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take one of your own procedures. List the steps, test each, and mark only the ones that are genuinely fixed — with what breaks.'));
out.push(table(['Step', 'Fixed?', 'What breaks if it is out of order'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 0.7, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of _______ steps, _______ are fixed. The first is _______, because if it is done out of order _______._'));
out.push(p('**Listener task:** count how many procedures in the room have more than two fixed steps. Then ask whether those procedures are actually followed on a Thursday.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is not released until the difference is not seen_ and _only after the count the sheet is signed_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the final version of the procedure, and answer the questions.'));
out.push(box(null, [
  '**GOODS OUT — version 5. Effective 1 November. Two steps are marked and four are not.**',
  '**The four ordinary steps.** First, the order is written on a numbered form and a telephone order is read back. Then a picking list is typed from the order, by whoever took it. The goods are picked against the list. After that, the invoice is raised from the order by accounts.',
  '**The two that are fixed, and why.**',
  '⚠ **1 · The gate sheet must not be signed before the load has been counted against the order.** If it is signed first, the signature certifies a count that did not happen, and the signature is the only evidence we have. **What breaks:** everything downstream. Every claim we have ever settled rested on a gate sheet.',
  '⚠ **2 · The load is not released until any difference has been seen by the coordinator.** If it goes out first, the difference becomes a dispute with a customer instead of a decision by us. **What breaks:** the choice. We lose the ability to decide what to do before somebody else has an opinion about it.',
  '**What this means on a busy Thursday.** The four ordinary steps can be done in any workable order, and sometimes are. The two marked steps cannot, and there is no version of busy that makes them negotiable. ⚠ **If you cannot do both marked steps, stop the load.** A load standing in the yard has never cost us what a wrong gate sheet has.',
  '**And one thing we are not pretending.** This page is version 5 since September 2024. Four of those versions changed the words and one changed the work. We are not going to describe that as continuous improvement.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What breaks if the gate sheet is signed before the count?'));
out.push(item('2', 'What does the page tell somebody to do if both marked steps cannot be done?'));
out.push(item('3', 'What does the last paragraph refuse to call the five versions?'));
out.push(box('Writer\'s box', [
  '**A finished procedure page — the ordinary steps in one paragraph, the fixed steps numbered and marked**, each with **what breaks**. Then what it means on a busy day, and one honest paragraph about the page itself.',
  '**Put the ordinary steps in a paragraph and the fixed steps in numbered lines.** The layout does the teaching: a reader sees two marked things and remembers two.',
  '**Give each fixed step a "what breaks".** *Every claim we have ever settled rested on a gate sheet.* A rule with a consequence attached is kept; a rule with an explanation is discussed.',
  '⚠ **Say what to do when it cannot be done.** *If you cannot do both marked steps, stop the load.* Every procedure is broken sometimes, and the page that says what to do then is the page that survives.',
  '⚠ **Do not describe five versions as continuous improvement.** *Four changed the words and one changed the work.* Naming that is worth more to a reader than any of the four.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the final version of one of your procedures (**50 words or more**). Use the frame.'));
out.push(p('**______________ — version ______________. Effective ______________. ______________ steps are marked and ______________ are not.**   **The ordinary steps.** First ______________. Then ______________. ______________. After that ______________.   **The ones that are fixed, and why.**   ⚠ **1 · ______________ must not be ______________ before ______________.** If it is, ______________. **What breaks:** ______________.   ⚠ **2 · ______________ is not ______________ until ______________.** **What breaks:** ______________.   **What this means on a busy day.** ______________. ⚠ **If you cannot ______________, ______________.**   **And one thing we are not pretending.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says say what to do when it cannot be done. Your page has two fixed steps and no instruction for the Thursday when both are impossible — what should somebody do?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would this survive a busy Thursday?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No more than two steps marked as fixed', ''],
  ['A "what breaks" on each fixed step', ''],
  ['An instruction for when it cannot be done', ''],
  ['One honest paragraph about the page itself', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what breaks" lines. The class says which would actually stop them cutting the corner at four o\'clock.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a rule you have broken at work for a good reason (**100 to 140 words**). Say what the rule was, what you did instead, what it saved, and whether the rule should have said what to do.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the good reason_   ✓ _not … until / only after?_   ? _should the rule have covered it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many should the rule have said what to do? Nearly all — and that is the most useful thing a class can take to whoever writes the rules.'));
out.push(box('Homework', ['Write your final text. Then take one of your workplace\'s procedures and mark the two steps that are genuinely fixed, with what breaks (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.5 =======================
out.push(pb());
out.push(h2('5.5  Why there is nobody in this sentence'));
out.push(p('**Function:** choosing between the passive and a name   ·   **Grammar:** the passive with and without an agent   ·   **Pronunciation:** reading a sentence aloud to hear who is in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Find a sentence at your work with nobody in it. Read it aloud and ask who would have failed if it were not done.'));
out.push(p('**b**  Which of these may have nobody in it, and which may not? _The stock is counted quarterly. · An error was made in the invoice. · The goods are checked on arrival. · The customer was not informed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which of Nour\'s two sentences does Mr Attar object to?   **A** the one about the stock count   **B** the one about the customer not being informed   **C** both'));
out.push(p('**b**  Listen again. **1** What is his test? **2** What does he say about the sentence being true?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  "Who would have failed?"', [
  ['Mr Attar', 'Two sentences from your file. *The stock is counted quarterly.* *The customer was not informed of the price change.* One of those is a procedure and one is an incident. Which is which?'],
  ['Nour', 'The first is a procedure.'],
  ['Mr Attar', 'And the second?'],
  ['Nour', 'The second is… what happened.'],
  ['Mr Attar', 'The second is a thing somebody did not do, written so that nobody did not do it. Here is the test: **who would have failed, if it had not been done?** For the stock count — anybody; it is the company\'s job and the passive is right. For the customer?'],
  ['Nour', 'Whoever priced the order. Which was Hala.'],
  ['Mr Attar', 'Then the sentence has a person in it and you have taken them out.'],
  ['Nour', 'It is still true as written.'],
  ['Mr Attar', 'Every word of it. That is the problem — it is the only kind of dishonesty that survives an audit, because there is nothing in it to find. ⚠ *An error was made* is true, grammatical, and worth nothing to anybody.'],
  ['Nour', 'So in the incident file I write Hala.'],
  ['Mr Attar', 'In the incident file you write what happened and who, with the reason, as you did in Unit 3. In the **procedure** file you write *the customer is informed of any price change before the order is confirmed, by whoever prices it*, which has nobody\'s name in it and requires somebody. ⚠ Two files, two jobs. The sin is using the procedure voice to write an incident.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**When a sentence may have nobody in it**',
  table(['Sentence type', 'Agent needed?', 'Example'], [
    ['a **procedure** — what always happens', 'a **role**, not a name', 'The order is counted **by whoever is on the gate**.'],
    ['a **rule** — what must happen', 'a role', 'The sheet is signed **by the person who counted**.'],
    ['an **incident** — what happened once', '⚠ **a person**', 'Hala priced it from the old list.'],
    ['an **omission** — what was not done', '⚠ **a person or an honest *nobody***', 'see Unit 3.2'],
    ['a **process fact** — how a thing is made', 'nobody', 'The boxes **are made** in Homs.'],
  ], [1.8, 1.3, 2.2]),
  '⚠ **The test: who would have failed, if it had not been done?** If the answer is *anybody, it is the company\'s job*, the passive with a **role** is right. If the answer is a person, the sentence has a person in it and you have removed them.',
  '⚠ **The agentless passive about a single event is the only dishonesty that survives an audit**, because every word of it is true and there is nothing in it to find. *An error was made in the invoice* is grammatical, accurate and worth nothing.',
  '⚠ **Two files, two voices.** The procedure file gets *by whoever prices it*; the incident file gets a name and a reason. The fault is not the passive — it is using the **procedure voice to write an incident**.',
  '⚠ The useful middle form is **the role, not the name**: *by whoever is on the gate* requires somebody without dating the page to this month\'s staff list.',
  '**Practise:** For each, say whether it may have nobody in it, and if not, who. 1 the stock is counted quarterly 2 an error was made 3 the goods are checked on arrival 4 the customer was not informed 5 a decision was taken not to replace him',
  '**Useful phrases:**  Who would have failed?  ·  by whoever is on the gate  ·  it is the company\'s job  ·  two files, two voices  ·  *an error was made* — by whom?',
  '**Pronunciation – hearing who is in a sentence.** 🔊 **Track 5.10** Listen to four sentences read aloud and, after each, the question *by whom?* ⚠ Reading a procedure aloud with that question after every line is the cheapest audit in this book. Repeat the four questions.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads sentences from a real file; B applies the test and sorts them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Two sentences. *__________.* *__________.* One is a procedure and one is an incident. Which is which?'],
  ['A', 'The first is a procedure.'],
  ['B', 'And the second?'],
  ['A', 'The second is… what happened.'],
  ['B', '⚠ Who would have failed, if it had not been done?'],
  ['A', '__________. Which was __________.'],
  ['B', 'Then the sentence has a person in it and you have taken them out.'],
  ['A', 'It is still true as written.'],
  ['B', 'Every word of it. That is the problem.'],
]));
out.push(table(['Role card 1 — the incident file', 'Role card 2 — a notice on a wall'], [[
  'Four sentences: *the goods were not checked · an error was made in the pricing · the stock is counted quarterly · the customer was not informed.* Two are procedures and two are incidents in a procedure voice.',
  'A notice reads: *all spillages must be cleaned up immediately.* B asks who would have failed. Nobody is named and nobody is on duty — and the notice has been on the wall for six years.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** sort the sentences into procedures and incidents. For each incident, write who should be in it.'));
out.push(PHRASE_CARD(['Who would have failed?', 'by whoever is on the gate', 'it is the company\'s job', 'two files, two voices', 'an error was made — by whom?', 'true and worth nothing']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Collect **five** real agentless sentences from your workplace — notices, procedures, reports. Apply the test to each.'));
out.push(table(['The sentence, as written', 'Procedure or incident?', 'Who should be in it'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It says _______. If it had not been done, _______ would have failed. So it is a procedure / an incident, and it should say _______._'));
out.push(p('**Listener task:** write down every sentence that turned out to require nobody at all. Those are the sentences on walls.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _an error was made by a mistake_ and _the customer was not informed by Hala_ where the incident file needs a plain active sentence. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two-column page, and answer the questions.'));
out.push(box(null, [
  '**THE SAME FOUR FACTS, WRITTEN TWICE. Prepared for Z. Attar so that he can see both files at once.**',
  table(['The incident file — what happened once', 'The procedure file — what always happens'], [
    ['On 14 October Hala priced order 0914 from the counter list dated the 5th. The limit had been raised on the 8th and the counter copy had not been replaced. She told me on the Friday before anybody asked.', 'The credit list is printed on Fridays, dated and initialled by whoever prints it, and the superseded copy is destroyed. An order is priced **against the current list only**.'],
    ['Nobody wrote to Mr Haffar between the 11th and the 13th about the rise. We cannot show that nobody telephoned either, because we keep no note of calls out.', 'A customer holding a written quotation **is informed of any list change** affecting it, by whoever prices the order, **before the order is confirmed**. Calls out are noted on the counter pad.'],
    ['The invoice was raised at list price on the 16th, from the list, by accounts, because the order form carried no quotation reference.', 'An order carrying a quotation reference **cannot be priced from the list**. The reference is entered on the order form at the time the order is taken.'],
    ['The credit of 46,000 was paid on the 22nd, eight days after the customer first telephoned.', 'A credit arising from our own pricing error **is paid within three working days** of being agreed, **by accounts**, without waiting for the month end.'],
  ], [3, 3]),
  '⚠ **Why the two columns look so different.** The left column has three people in it and four dates. The right column has **no names at all** and five roles. Neither is a softened version of the other: the left says what happened to one order, and the right has to be true in April, when two of the three people may be somewhere else.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many people are named in the left column, and how many in the right?'));
out.push(item('2', 'What does the right column have instead of names?'));
out.push(item('3', 'Why does the page say the right column has to be true in April?'));
out.push(box('Writer\'s box', [
  '**The two-column page: the same facts as an incident and as a procedure.** Left: names, dates, what happened once. Right: roles, the present passive, what always happens.',
  '**Write the left column first.** The procedure is derived from the incident and not the other way round — and a procedure written without an incident behind it is a procedure nobody can test.',
  '**Count the names in each column and say the count.** *Three people and four dates on the left; no names and five roles on the right.* It is the fastest way to show a reader that you know which voice you are in.',
  '⚠ **The right column must be true next April.** That is the whole reason for the roles: *by whoever prices the order* survives a change of staff and *by Hala* does not. ⚠ And neither column is a polite version of the other — writing one for both jobs is the fault of the unit.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one real incident at your work and write the two-column page (**50 words or more**). Use the frame.'));
out.push(p('**THE SAME FACTS, WRITTEN TWICE.**   **Incident:** On ______________, ______________ did ______________. ______________ had ______________ and ______________ had not ______________.   **Procedure:** ______________ **is** ______________, **by whoever** ______________, **before** ______________.   **Incident:** Nobody ______________. We cannot show ______________.   **Procedure:** ______________ **is** ______________ and ______________ **are noted on** ______________.   **Incident:** ______________ was ______________ because ______________.   **Procedure:** ______________ **cannot be** ______________ unless ______________.   ⚠ **Why the two look different.** The left has ______________ people and ______________ dates; the right has ______________ names and ______________ roles.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says the right column must be true next April. Yours names a person in the third procedure line — who will do it when they are not here?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the right column be pinned up with no date on it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Names and dates on the left, roles on the right', ''],
  ['The incident written first', ''],
  ['The counts stated', ''],
  ['Nothing in the right column that expires with a person', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their right column only. The class says whether it would still be true if everybody left.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something was written with nobody in it (**100 to 140 words**). Say what the sentence was, who was actually involved, who read it, and what the vagueness cost or saved.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the sentence with nobody in it_   ✓ _procedure voice and incident voice kept apart?_   ? _did the vagueness protect anybody, or only delay something?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did the vagueness actually protect somebody? Sometimes it does — and when it does, it is worth saying so rather than pretending the choice is always easy.'));
out.push(box('Homework', ['Write your final text. Then take one sentence from a wall or a file at your work, ask who would have failed, and rewrite it in the right voice (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.6 =======================
out.push(pb());
out.push(h2('5.6  What has been changed'));
out.push(p('**Function:** reporting changes since the last review   ·   **Grammar:** present perfect passive   ·   **Pronunciation:** _has been_ in a list of changes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What has been changed at your work in the last year? Name three things, with nobody in the sentences.'));
out.push(p('**b**  Which are right? _Two procedures have been rewritten. · Two procedures are been rewritten. · Two procedures have rewritten. · The list has been printed on Fridays since October._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar want listed separately?   **A** what has been changed and what has only been written down   **B** the costs   **C** the dates'));
out.push(p('**b**  Listen again. **1** What distinction does he insist on? **2** What does he say about the fifth item?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  "Changed, or written down?"', [
  ['Nour', 'What has been changed since last year. Five things.'],
  ['Mr Attar', 'Read them.'],
  ['Nour', 'The price list has been reduced to one copy, printed on Fridays. The picking list has been changed to carry the order number and the time. Nine procedures have been written. The gate sheet has been given a date box. And the goods-out procedure has been rewritten twice.'],
  ['Mr Attar', 'Now sort them into two lists. Things that have been **changed**, and things that have been **written down**.'],
  ['Nour', 'The price list and the picking list have been changed. The procedures have been written down.'],
  ['Mr Attar', 'And the nine procedures — had any of them been done differently before they were written?'],
  ['Nour', 'No. They describe what we were already doing.'],
  ['Mr Attar', 'Then nothing has changed about the work, and that is not a criticism — writing down what you already do is most of what a company like yours needs. But do not put it in the same list as a change, because it is not one, and I will find that out in an hour.'],
  ['Nour', 'And the goods-out procedure, rewritten twice?'],
  ['Mr Attar', 'What changed about what people do?'],
  ['Nour', 'The second rewrite added who by and against what. Nothing about what happens.'],
  ['Mr Attar', 'So that is a writing-down too. ⚠ Out of five items you have two changes and three documents, and the honest version of your page says so. **A company that cannot tell those apart does not know what it has actually altered, and neither will I.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The present perfect passive — and the sort that matters**',
  table(['Shape', 'Example'], [
    ['**has / have been** + third form', 'The price list **has been reduced** to one copy.'],
    ['+ **since**', 'It **has been printed** on Fridays **since** October.'],
    ['⚠ **changed**', 'the **work** is different: *the list has been reduced to one copy*'],
    ['⚠ **written down**', 'the work is the same: *nine procedures have been written*'],
    ['the honest count', 'two changes and three documents'],
  ], [2, 2.5]),
  '⚠ **Sort every list of changes into what has been changed and what has only been written down.** Writing down what you already do is most of what a small company needs — and it is **not a change**, and a reader will discover that in an hour.',
  '⚠ **The test for a rewrite: what is different about what people do?** If the answer is nothing, it is a document and belongs in the second list, however much work it was.',
  '⚠ **_Has been_ + third form, never _is been_ or bare _has_.** *Two procedures have been rewritten* — the commonest error here is dropping *been*.',
  '⚠ The count is the finding: *out of five items, two changes and three documents*. A company that cannot tell them apart does not know what it has altered.',
  '**Practise:** Sort each into *changed* or *written down*. 1 one price list instead of two 2 nine procedures written 3 a date box on a form 4 a procedure rewritten with no change of practice 5 a new signature limit',
  '**Useful phrases:**  has been reduced to…  ·  has been printed on Fridays since October  ·  have been written  ·  two changes and three documents  ·  what is different about what people do?',
  '**Pronunciation – _has been_ in a list.** 🔊 **Track 5.12** Listen to four changes read as a list: *has been* is weak and quick each time, and the third form carries the stress. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a list of changes; B sorts them and counts. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'What has been changed since __________. __________ things.'],
  ['B', 'Read them.'],
  ['A', '__________ has been __________. __________ has been __________. __________ have been __________.'],
  ['B', 'Now sort them: changed, or written down?'],
  ['A', '__________ has been changed. __________ has been written down.'],
  ['B', 'And __________ — was anything done differently before it was written?'],
  ['A', 'No. It describes what we were already doing.'],
  ['B', '⚠ Then out of __________ items you have __________ changes and __________ documents.'],
]));
out.push(table(['Role card 1 — a year of improvements', 'Role card 2 — one real change'], [[
  'Six items: three procedures written, a form reprinted, a notice laminated, and the till reconciled daily instead of weekly. Only the last is a change.',
  'One item that looks small and is a real change: the gate count moved from the picking list to the order. Nothing was written and the work is genuinely different.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the two counts. Then say which list the company would rather talk about, and which the reader would rather have.'));
out.push(PHRASE_CARD(['has been reduced to…', 'has been printed since…', 'have been written', 'changed, or written down?', 'two changes and three documents', 'what is different about what people do?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('List **six** things that have been changed or written at your work in the last year, and sort them honestly.'));
out.push(table(['What has been…', 'Changed, or written down?', 'What is different about what people do'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 1.1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Out of _______ items, _______ are changes and _______ are documents. The one real change is _______._'));
out.push(p('**Listener task:** write down the room\'s totals. The ratio of documents to changes is usually about three to one, and it is not a criticism of anybody.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _two procedures are been rewritten_ and _the list has printed on Fridays_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page prepared for the auditor, and answer the questions.'));
out.push(box(null, [
  '**SINCE YOUR LAST VISIT — two changes, four documents, and one thing that has got worse.**',
  '**Two things have been changed.** The goods-out count **has been moved** from the picking list to the **order**, since 1 November — this is the only change this year that alters what anybody does, and it was prompted by an order that went short in October. And the credit list **has been reduced** to one copy, printed on Fridays, dated and initialled, since 22 October.',
  '**Four things have been written down, and nothing about them has changed.** Nine one-page procedures **have been written**, all nine corrected by somebody who had not done the job. The picking list **has been reprinted** to carry the order number and the time of typing. The gate sheet **has been given** a date box. The goods-out procedure **has been rewritten** twice, adding *who by* and *against what* and altering no practice.',
  '⚠ **And one thing has got worse.** The stock records **have not been** brought up to date: three store rooms of four are on the system and the fourth, which is the largest, **has not been** entered since August. A year ago all four were counted on paper and the paper was current. **So on stock we were better off before we started, and we will be better off than ever when the fourth room is done, and at the moment we are in the worst of both.**',
  '**What has not been done at all.** Nothing has been done about the two-signature limit of 500,000, which nobody can date or justify. It was on last year\'s list as well.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which single change altered what anybody does, and what prompted it?'));
out.push(item('2', 'What is the "worst of both" on stock, and how did it come about?'));
out.push(item('3', 'What was also on last year\'s list?'));
out.push(box('Writer\'s box', [
  '**A "since your last visit" page — four parts:** what **has been changed** (with the prompt) → what **has been written down**, with *and nothing about them has changed* → ⚠ **what has got worse** → what has not been done at all, and whether it was on the last list too.',
  '**Put the honest count in the title.** *Two changes, four documents, and one thing that has got worse.* A reader who sees that heading reads the rest differently, and in your favour.',
  '**Report the thing that has got worse, with its mechanism.** *A year ago all four were counted on paper and the paper was current… at the moment we are in the worst of both.* A half-finished improvement is genuinely worse than no improvement, and saying so is the hardest paragraph on the page.',
  '⚠ **Say when an item was on the previous list.** *It was on last year\'s list as well.* Nobody else will have to point it out, and the page keeps the right to be believed about the rest.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "since your last visit" page for your own workplace (**50 words or more**). Use the frame.'));
out.push(p('**SINCE ______________ — ______________ changes, ______________ documents, and ______________.**   **______________ have been changed.** ______________ **has been** ______________ since ______________ — this is the only change that alters what anybody does, and it was prompted by ______________.   **______________ have been written down, and nothing about them has changed.** ______________ **have been** ______________. ______________ **has been** ______________.   ⚠ **And one thing has got worse.** ______________ **has not been** ______________. A year ago ______________. **So we are in the worst of both.**   **What has not been done at all.** ______________. It was on last year\'s list as well.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says report the thing that has got worse with its mechanism. Yours names something that is behind — but is it worse than before you started, or only unfinished?"',
  'Quote, question, stop. ⚠ The two are different and only one of them is this paragraph.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **does the page distinguish a change from a document?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the title', ''],
  ['Changes separated from documents, with *nothing has changed* said', ''],
  ['Something that has got worse, with its mechanism', ''],
  ['Something not done, and whether it was on the last list', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "got worse" paragraph. The class says which writer they would believe about their improvements.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a half-finished improvement at your work (**100 to 140 words**). Say what it was meant to replace, what state both systems are in now, and whether you are better or worse off than before it started.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the "worst of both" state_   ✓ _present perfect passive, with been?_   ? _what would finish it, and who decides?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the old system still running alongside the new one? That is the commonest shape of a half-finished improvement, and it is the state nobody reports.'));
out.push(box('Homework', ['Write your final text. Then write your own list of what has been changed and what has only been written down, with both counts (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review & Mediate: what does this require of me?'));
out.push(p('**Function:** explaining a procedure to the person who has to follow it   ·   **Review:** the present and past passive · *by*/*with*/*on*/*against* · fixed steps · the agentless sentence · what has been changed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Why take the names out of a procedure?',
  '**2** What follows *by*, and what follows *with*?',
  '**3** What is the test for a step that must be in its place?',
  '**4** Who would have failed — and what is that question for?',
  '**5** What two lists does every page of changes need?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser want to know about the new page?   **A** who wrote it   **B** which of it is his, and what to do when he cannot   **C** the version number'));
out.push(p('**b**  Listen again. **1** What does Nour tell him to ignore? **2** What does he find that the page gets wrong?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  "Which of this is mine?"', [
  ['Abu Yasser', 'Version five. Six steps and two of them in bold. What do I actually have to do?'],
  ['Nour', 'Of the six, two are yours, and both of the bold ones are yours. Ignore steps one, two and six — they happen in the office.'],
  ['Abu Yasser', 'So: pick against the list, count against the order, sign by name, and do not let it go until you have seen a difference.'],
  ['Nour', 'That is the whole of your part, in one sentence, and it is better than the page.'],
  ['Abu Yasser', 'And when I cannot? Thursday, two lorries, one of me.'],
  ['Nour', 'Then you stop the load. It says so.'],
  ['Abu Yasser', 'It says *if you cannot do both marked steps, stop the load*. It does not say who I tell.'],
  ['Nour', '…It does not.'],
  ['Abu Yasser', 'And a load standing in the yard with nobody told is worse than a load gone out, because at least the gone one is somebody\'s problem. I stop it, the driver waits, and nobody in the office knows there is a lorry in the yard at four o\'clock.'],
  ['Nour', 'Then that is version six, and it is one clause: *stop the load and tell the coordinator, or whoever is on the counter if the coordinator is not here.*'],
  ['Abu Yasser', 'That is the clause. ⚠ And the reason it is missing is that whoever wrote the page has never had to stop a load.'],
  ['Nour', 'I wrote the page.'],
  ['Abu Yasser', 'I know.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining a procedure to whoever has to follow it**',
  table(['To orient them', 'To find the gap', 'To fix it'], [
    ['Of the six, two are yours.', 'And when you cannot?', 'That is version six, and it is one clause.'],
    ['Ignore steps one, two and six.', 'It does not say who I tell.', 'stop the load **and tell** …, or … if …'],
  ], [2, 1.9, 2.1]),
  '⚠ **Tell them which steps are theirs and which to ignore.** A six-step page given whole to one person is a page they will read once. *Two of these are yours* is the sentence that makes it usable.',
  '⚠ **Then ask the question the page cannot ask itself: _and when you cannot?_** Every procedure is impossible sometimes, and the person who has to follow it knows exactly when.',
  '⚠ **The missing clause is almost always "and tell whom".** A stop instruction with no name attached produces a stopped thing that nobody knows about, which is often worse than the thing it prevented.',
  '⚠ **The gap exists because the writer has never done the job.** ⚠ Say so without defending yourself, and let the person who found it put their name on the version.',
  '**Practise:** Explain a procedure to the person who has to follow it. Say which steps are theirs, ask what they do when they cannot, and write the missing clause.',
  '**Useful phrases:**  Of the six, two are yours.  ·  Ignore steps…  ·  And when you cannot?  ·  It does not say who I tell.  ·  That is version six, and it is one clause.',
  '**Pronunciation – reading a bold step aloud.** 🔊 **Track 5.14** Listen to the two marked steps read aloud slowly, with the *until* clause separated. ⚠ The person following a procedure hears which half is the condition; a reader skimming the page does not. Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a procedure; B has to follow it and asks *and when I cannot?*. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A has written a cash procedure: the bag goes to the bank daily. B works alone on Saturdays and cannot leave the counter. The missing clause is what happens to Saturday\'s cash — and nobody has ever said.',
  'A has written a complaints procedure: every complaint is logged the same day. B takes complaints on the telephone while serving. The missing clause is what counts as a complaint, and whether an unhappy remark is one.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the missing clause. Then say whether it is about **telling somebody** — it usually is.'));
out.push(PHRASE_CARD(['Of the six, two are yours.', 'Ignore steps…', 'And when you cannot?', 'It does not say who I tell.', 'one clause', 'whoever wrote it has never done the job']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a procedure. Explain it to **two** colleagues who have to follow different parts of it, and collect the missing clauses.'));
out.push(table(['Who I told', 'Which steps were theirs', 'What they asked', 'The missing clause'], [['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.3, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the page did not say. This is the **fifth** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a procedure is written by the person who understands the process and followed by the person who understands the day, and the gap between them is always the same gap — what to do when it cannot be done, and who to tell.**'));
out.push(p('_Of _______ steps, _______ were theirs. They asked _______, and the page did not say _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _procedure · control point · segregation of duties · variance · waiver · effective date._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 3)', 10));
out.push(p('⚠ **This unit practises Part 3: matching a question to the right part of a text.** Read the five sections of the procedure, then answer the five questions by choosing the section (**A–E**).'));
out.push(box(null, [
  '**A**  _An order is written on a numbered form. A telephone order is read back to the customer before the call ends._',
  '**B**  _A picking list is typed from the order, by whoever took it, and carries the order number and the time of typing._',
  '**C**  _The load is counted against the order, by hand, by one person, and the gate sheet is signed by that person, by name. The sheet must not be signed before the count._',
  '**D**  _Any difference is written on the gate sheet by the person who counted, and the load is not released until the difference has been seen by the coordinator. If both marked steps cannot be done, the load is stopped and the coordinator is told._',
  '**E**  _The invoice is raised from the order by accounts. A difference found at the gate is not carried across automatically; this is a known gap._',
], 'FFFFFF', C.navy));
[
  '**1**  Which section tells you what to do when you cannot follow the procedure?',
  '**2**  Which section says a document must not be signed too early?',
  '**3**  Which section admits that the procedure does not work properly?',
  '**4**  Which section requires something to be repeated back to a customer?',
  '**5**  Which section says what a document must have printed on it?',
].forEach(t => out.push(p(t + '   **A** · **B** · **C** · **D** · **E**', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: a note to a colleague explaining which part of a new procedure is theirs.',
  'The shape: **which steps are yours** · **the one that cannot be bent** · **what to do if you cannot, and who to tell**.',
  '⚠ **In eighty words, the stop clause earns its place over everything else.** A note that explains the whole procedure and omits what to do on a bad Thursday has spent eighty words on the easy part.',
  '⚠ No version history and no explanation of why the procedure changed. The reader needs their own part and nothing else.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A procedure at your work has been rewritten. Write to the colleague who has to follow part of it (**60 to 80 words**). Say **which steps are theirs**, **which one cannot be bent**, and **what to do if they cannot, and who to tell**.'));
out.push(p('______________, of the ______________ steps on the new page, ______________ are yours: ______________. The one that cannot be bent is ______________, because ______________. If you cannot ______________, ______________ and tell ______________, or ______________ if ______________. Ignore ______________ — ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Which steps are theirs, and which to ignore', ''],
  ['The one that cannot be bent, with why', ''],
  ['What to do if they cannot, **and who to tell**', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write one of your own procedures in full (**100 to 140 words**): six passive steps, the two that are fixed marked with *not … until*, one named role, a known gap, and what to do when it cannot be done.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then give one of your procedures to the person who has to follow it and ask them what to do when they cannot. Write down the clause they produce (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The order ___ at the counter.   a) is taken   b) is take   c) takes',
  '2  A picking list is typed ___ the order.   a) by   b) from   c) with',
  '3  The load is counted ___ the order.   a) against   b) by   c) on',
  '4  The difference is recorded ___ the gate sheet.   a) by   b) on   c) with',
  '5  It is signed ___ whoever counted it.   a) by   b) with   c) from',
  '6  The gate count ___ in September 2024.   a) was introduced   b) was introduce   c) introduced',
  '7  The load is not released ___ the difference has been seen.   a) before   b) until   c) since',
  '8  Two procedures ___ rewritten this year.   a) have   b) have been   c) are been',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 5.15** Listen to the walkthrough. Complete the note.   Steps in the procedure: ______   The count is against: ______   Who signs, and how: ______   The invoice is raised from: ______   The known gap: ______'));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['Nour', 'The order is taken at the counter and written on a numbered form. A picking list is typed from the order, by whoever took it.'],
  ['Nour', 'The goods are picked against the picking list. At the gate the load is counted against the order — not against the picking list — and the gate sheet is signed, by name, by whoever counted it.'],
  ['Nour', 'Any difference is written on the gate sheet and the load is not released until it has been seen by the coordinator.'],
  ['Nour', 'The invoice is raised from the order by accounts. That is six steps, and the known gap is at the last one: a difference found at the gate is not carried across to the invoice by anything, and nothing in the procedure says who should carry it.'],
]));
out.push(p('**C  Writing.** Write four passive steps of one of your own procedures (**50 words or more**), with one step marked *not … until*, one named role, and a known gap stated.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe a process as passive steps with no names, and say what each step is done **from**',
  '☐ give a control its date and its prompt, and say whether the prompt was a loss or a near miss',
  '☐ use *by* for the person and *with*, *on* and *against* for the thing',
  '☐ find the two steps that are genuinely fixed, and leave the others flexible',
  '☐ ask who would have failed, and keep the procedure voice out of an incident',
  '☐ separate what has been **changed** from what has only been **written down**',
  '☐ explain a procedure to the person who has to follow it, and find the missing clause',
  '☐ write a procedure page, a controls history, a version-change page and a two-column page',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
