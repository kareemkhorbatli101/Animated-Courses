// Proactive Business English B1 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'chronology · underlying cause · contributing factor · prior to · the preceding day · earlier that week · by that stage · up to that point · subsequently · beforehand in the record · omission · oversight · lapse · gap in the record · unrecorded · undated · initialled · countersigned · flimsy copy · duplicate book · audit trail · paper trail · traceable · back-dated · amended · superseded · the original · the top copy · retrospectively · after the event';
const BACK_AT_B1 = 'approval · figures · attend';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 3  What Had Already Happened'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  say what had already happened before the thing happened',
  '**3.2**  name an omission without naming a culprit',
  '**3.3**  use *by the time* — the shape that puts two pasts in one sentence',
  '**3.4**  correct somebody else\'s order of events',
  '**3.5**  build a chronology box: the half-page that settles an argument',
  '**3.6**  say that something was a first time, and what that explains',
  '**3.7**  Review & Mediate: what happened first?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('One tense, and the only thing it is for', [
  'Unit 2 put events in order. This unit puts **one event behind another**. That is all the past perfect does: it takes a thing that was already true when the story began and moves it out of the sequence, so that the reader can see it was **the condition** and not **a step**.',
  '_Nobody had checked the gate sheet_ is not the first event in the story. It is the reason the story has the shape it has, and the past perfect is how English says so in four words.',
  '⚠ **And here is the trap this unit exists to teach.** The past perfect is the tense of fault-finding, and it is the easiest tense in English to be unfair in. *Nobody had checked it* is a fact; *she had not checked it* is a fact with a person in it; and the difference between those two sentences has ended working relationships. **3.2 is about choosing between them on purpose**, and it is the most important cycle in the unit.',
], C.lyellow, C.orange));

// ======================= CYCLE 3.1 =======================
out.push(pb());
out.push(h2('3.1  What had already happened'));
out.push(p('**Function:** putting one event behind another   ·   **Grammar:** past perfect, affirmative and negative   ·   **Pronunciation:** the contracted _had_, which disappears'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something that went wrong. Name one thing that was **already true** before it started — something nobody did that morning.'));
out.push(p('**b**  What is the difference? _The pallet was unwrapped and we signed for it. · The pallet had already been unwrapped when we signed for it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What had already happened before the lorry arrived?   **A** the order had been changed   **B** the pallet had been opened   **C** nothing'));
out.push(p('**b**  Listen again. **1** Why does Nour say the tense matters to Mr Ayoub? **2** What does Abu Yasser say he had never done before?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  "That was already true"', [
  ['Nour', 'The Adra consignment. Mr Ayoub wants to know how we came to sign for a pallet that was short.'],
  ['Abu Yasser', 'We counted it and it was twenty-two, and the note said twenty-four, and I signed the note.'],
  ['Nour', 'You signed a note that said twenty-four when you had counted twenty-two?'],
  ['Abu Yasser', 'I wrote twenty-two on it first. I always do. The driver signed under my figure.'],
  ['Nour', 'Then that is a different story from the one I was told, and the difference is one word. Say it again with *had*.'],
  ['Abu Yasser', 'I had written twenty-two on the note before he signed it.'],
  ['Nour', 'And that is the sentence. It had already been corrected when it left the yard, which means the twenty-four is not ours.'],
  ['Abu Yasser', 'There is something else. The pallet had already been opened when it came off the lorry. The wrap was cut along one side and taped again.'],
  ['Nour', 'You saw that before you counted?'],
  ['Abu Yasser', 'Before I touched it. I have never seen that before in thirty years, and I did not know what to write, so I wrote nothing.'],
  ['Nour', 'So by the time you counted, somebody else had already been into it, and the one thing we cannot prove is what was in it before they did.'],
  ['Abu Yasser', 'That is why I wrote nothing. I did not want to write something I could not stand behind.'],
  ['Nour', 'You were right about the standing behind and wrong about the writing. *The wrap was cut along one side and re-taped* is a thing you saw. Write what you saw and let somebody else decide what it means — that is the whole of it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The past perfect — one event behind another**',
  table(['Shape', 'Example', 'What it does'], [
    ['**had** + third form', 'I **had written** twenty-two on the note.', 'this was already true'],
    ['**had already** + third form', 'The pallet **had already been opened**.', 'and before the story started'],
    ['**had not** + third form', 'Nobody **had checked** the gate sheet.', 'the omission, as a condition'],
    ['**by the time** …, **had** …', '**By the time** I counted, somebody **had been** into it.', 'two pasts in one sentence (3.3)'],
    ['**had never** + third form', 'I **had never seen** that before.', 'why nobody knew what to do (3.6)'],
  ], [1.5, 2.2, 1.8]),
  '⚠ **Use it for the condition, not for the sequence.** Unit 2 put events in order with the past simple; the past perfect lifts **one** of them out of the order and says *this was the situation, not a step*. If every verb in your account is a past perfect, nothing is a condition any more.',
  '⚠ **One past perfect per paragraph is usually enough.** Once the reader knows what was already true, the rest can be past simple: _the pallet had already been opened. The driver put it down, we counted it, I wrote twenty-two._',
  '⚠ **The passive form is the one you will need most**: *had been opened · had been signed · had been typed*. The thing that was already true is usually something **done to** a document by somebody unnamed — which is exactly the problem 3.2 is about.',
  '⚠ *Write what you saw and let somebody else decide what it means.* That sentence is the rule for every observation in this book, and Unit 9 will give you the grammar for the deciding.',
  '**Practise:** Say what had already happened, before each. 1 you signed the note 2 the customer telephoned 3 the engineer arrived 4 the order went out 5 you found out',
  '**Useful phrases:**  I had written…  ·  It had already been opened.  ·  Nobody had checked…  ·  By the time I counted…  ·  I had never seen that before.',
  '**Pronunciation – the _had_ that disappears.** 🔊 **Track 3.2** Listen: _I\'d written twenty-two · it\'d already been opened · nobody\'d checked it_. In speech *had* is one sound and sometimes less. Hearing it is the skill; saying the full form is safer. Repeat four of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports in the past simple; B finds the thing that was already true and makes them say it with *had*. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'We __________ and it was __________, and the note said __________, and I __________.'],
  ['B', 'You __________ when you had __________?'],
  ['A', 'I __________ first. I always do.'],
  ['B', 'Then that is a different story, and the difference is one word. Say it again with *had*.'],
  ['A', 'I had __________ before __________.'],
  ['B', 'And that is the sentence. It had already been __________, which means __________.'],
  ['A', 'There is something else. __________ had already been __________.'],
  ['B', 'You saw that before __________?'],
]));
out.push(table(['Role card 1 — the amended order', 'Role card 2 — the engineer\'s visit'], [[
  'A took an order, then the customer telephoned and changed it, and A amended the paper. The picking list had already been printed. A has been reporting it as "the order was wrong".',
  'A called an engineer out and the machine was working by the time he arrived. The fault had already cleared itself twice that week and nobody had written it down.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one sentence with *had* in it. Then say what that sentence proves that the past-simple version did not.'));
out.push(PHRASE_CARD(['I had written…', 'It had already been opened.', 'Nobody had checked…', 'By the time I counted…', 'I had never seen that before.', 'Write what you saw.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things that went wrong. For each, write the thing that was **already true** before it started, in the past perfect — and say whether anybody knew at the time.'));
out.push(table(['What went wrong', 'What had already happened', 'Did anybody know?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _By the time _______, _______ had already _______. Nobody knew / _______ knew and had not said._'));
out.push(p('**Listener task:** count how many of the already-true things were **in writing somewhere** and how many were only in somebody\'s head. The second kind is the commoner and the more expensive.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I have written twenty-two before he signed_ and _the pallet was already opened_ where the point is that it was opened earlier. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Nour sent Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**THE ADRA CONSIGNMENT — what was already true before we signed**',
  'Three things had already happened before the pallet reached our scales, and none of them is visible on the paperwork.',
  '**One.** The pallet **had been opened** before it came off the lorry. The wrap was cut along one side and taped again with a different tape from ours and from theirs. Abu Yasser saw this before he touched it. He did not write it on the note, because he did not know what to write, and I have told him that *the wrap was cut along one side and re-taped* is a thing he saw and is always safe to write.',
  '**Two.** The driver **had already signed** the note before he handed it over. His signature is above our figure, not below it, which is the wrong way round and is how we know the order of events.',
  '**Three.** Abu Yasser **had written** twenty-two on the note, in his own hand, before either signature. So the figure of twenty-four that reached the office was never agreed by anybody here.',
  '**What follows from that.** The twenty-four is not our figure and we are not asking for the two boxes to be written off against us. ⚠ What we cannot say, and will not say, is what was in the pallet before it was opened. Nobody here knows, and the two boxes may never have left Adra.',
  '**What I have asked for.** A photograph of the pallet before loading, on the one route where this has now happened twice. They may refuse; it is a reasonable thing to ask and an unreasonable thing to insist on.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the position of the driver\'s signature prove the order of events?'));
out.push(item('2', 'What does the note refuse to say, and why?'));
out.push(item('3', 'What does the last sentence concede before anybody has answered?'));
out.push(box('Writer\'s box', [
  '**A "what was already true" paragraph — the shape:** a first line that says how many things, and that the paperwork does not show them → one numbered item each, in the **past perfect** → what follows → **what we cannot say** → what you have asked for.',
  '**Number them and keep them to three.** Three things that were already true is a case; five is a complaint, and a reader stops weighing at four.',
  '**Use physical evidence to prove order.** *His signature is above our figure, not below it.* A chronology that rests on somebody\'s memory can be argued with; one that rests on where the ink is cannot.',
  '⚠ **Write the "what we cannot say" paragraph.** *The two boxes may never have left Adra.* It costs you the strongest version of your own case and it is the reason the rest of the page is believed. Unit 9 teaches the grammar of saying how sure you are; this unit teaches the habit of saying when you are not sure at all.',
  '⚠ Concede the ask while you make it: *a reasonable thing to ask and an unreasonable thing to insist on.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what was already true" paragraph for something at your work (**50 words or more**). Use the frame.'));
out.push(p('**______________ — what was already true before ______________**   ______________ things had already happened before ______________, and none of them is visible on ______________.   **One.** ______________ **had been** ______________. ______________.   **Two.** ______________ **had already** ______________. ______________, which is how we know ______________.   **Three.** ______________ **had** ______________ before ______________. So ______________.   **What follows from that.** ______________. ⚠ What we cannot say is ______________.   **What I have asked for.** ______________. They may refuse; it is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says write the *what we cannot say* paragraph. Yours has three things you are certain of and nothing you are not — is there really nothing here you do not know?"',
  'Quote, question, stop. There is always something, and the writer knows what it is.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would somebody on the other side of this argument accept the chronology?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three things, numbered, each in the past perfect', ''],
  ['At least one proved by physical evidence, not memory', ''],
  ['A "what we cannot say" paragraph', ''],
  ['One ask, with the refusal conceded', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we cannot say". The class says which writer they would believe on the rest of the page.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that went wrong where the real cause was already in place before anybody acted (**100 to 140 words**). Say what was already true, who could have known, and when it was discovered.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing that was already true_   ✓ _past perfect for the condition, past simple for the steps?_   ? _could anybody have known at the time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many could somebody have known? And in how many did somebody actually know and not say? The second number is the one worth discussing.'));
out.push(box('Homework', ['Write your final text. Then take one dispute at your workplace and write the three things that were already true before it started (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.2 =======================
out.push(pb());
out.push(h2('3.2  Because nobody had checked it'));
out.push(p('**Function:** naming an omission   ·   **Grammar:** *nobody had…* / *it had not been…* / *she had not…*   ·   **Pronunciation:** the flat delivery that keeps it a fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that regularly do not get done. For each, say whether it is anybody\'s job.'));
out.push(p('**b**  Put these in order, least to most accusing: _The sheet had not been checked. · Nobody had checked the sheet. · Hala had not checked the sheet. · The sheet was not checked, as usual._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which version does Mr Ayoub want in the note?   **A** the one with a name   **B** the one without   **C** both, in different places'));
out.push(p('**b**  Listen again. **1** What is the test he gives for using a name? **2** What does he say the passive version is for, and what is it not for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  Three ways to say the same omission', [
  ['Nour', 'I have three versions of the same sentence and I do not know which to send. *Hala had not checked the credit list.* *Nobody had checked the credit list.* *The credit list had not been checked.*'],
  ['Mr Ayoub', 'All three are true?'],
  ['Nour', 'All three are true. It is her job, she did not do it, and it did not get done.'],
  ['Mr Ayoub', 'Then the question is not which is true. It is what the sentence is **for**. Who is reading it?'],
  ['Nour', 'You. And then possibly the file.'],
  ['Mr Ayoub', 'If it is for me and the thing is going to happen again next week, use the name. I cannot fix a Thursday without knowing whose Thursday it was. If it is for the file, where it will be read in a year by somebody who does not know her, use the passive.'],
  ['Nour', 'And *nobody had checked it*?'],
  ['Mr Ayoub', 'Is the honest one when it is genuinely nobody\'s — and the dishonest one when it is somebody\'s and you would rather not say. That is the version people reach for, and it is the only one of the three that can be a lie while every word in it is true.'],
  ['Nour', 'So the test is whether anybody could have been expected to.'],
  ['Mr Ayoub', 'The test is whether you could name a person **and are choosing not to**. If you can and you are, say so out loud to yourself and then decide. Half the time you will find you are protecting somebody who does not need protecting and would rather be named than be *nobody*.'],
  ['Nour', 'She would, actually. She told me on the Friday before I asked.'],
  ['Mr Ayoub', 'Then she has already done the hard part and you are about to take the credit for it away from her by writing *nobody*.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three ways to name an omission, and what each is for**',
  table(['Shape', 'Use it when', '⚠ Do not use it when'], [
    ['**X had not** + third form', 'the reader has to act on a person', 'it is going in a file to be read in a year'],
    ['**Nobody had** + third form', 'it was genuinely nobody\'s job', 'it was somebody\'s and you would rather not say'],
    ['**It had not been** + third form', 'a record, a file, a procedure page', 'somebody has to be spoken to this week'],
    ['**It is not anybody\'s job**', 'the finding is the gap itself', 'you have not checked whether it is'],
  ], [1.7, 1.9, 1.9]),
  '⚠ **All three can be true at once, so truth is not the test.** The test is **what the sentence is for** and **who will read it**.',
  '⚠ **_Nobody had…_ is the dangerous one.** It is the only version of the three that can be a lie while every word in it is true, and it is the one people reach for. The honest use is where nobody could have been expected to; the dishonest use is where you could name somebody and would rather not.',
  '⚠ **And the thing nobody expects:** writing *nobody* about a person who has already admitted it **takes the credit away from them**. If somebody told you before you asked, they have done the hard part. Name them, and say that they told you.',
  '⚠ The passive is for the file and the procedure page, where the person will have left and the gap will not have. It is not a way of avoiding a conversation this week.',
  '**Practise:** For each, say which of the three you would use, and for whom. 1 a credit list not checked 2 a guarantee not filed 3 a gate sheet not signed 4 a price not re-quoted 5 something that is nobody\'s job',
  '**Useful phrases:**  X had not…  ·  Nobody had…  ·  It had not been…  ·  It is not anybody\'s job.  ·  She told me before I asked.',
  '**Pronunciation – keeping it a fact.** 🔊 **Track 3.4** Listen: _Hala had not checked the credit list._ Flat, even, no stress on *Hala* and none on *not*. Stress either word and it becomes an accusation; the sentence is the same and the room is not. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has three versions; B asks who is reading it and applies the test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Three versions of the same sentence. *__________ had not __________.* *Nobody had __________.* *__________ had not been __________.*'],
  ['B', 'All three true?'],
  ['A', 'All three true.'],
  ['B', 'Then the question is what the sentence is for. Who is reading it?'],
  ['A', '__________.'],
  ['B', 'If it is for __________ and the thing will happen again, use __________. If it is for __________, use __________.'],
  ['A', 'And *nobody had*?'],
  ['B', 'Can you name a person, and are you choosing not to?'],
]));
out.push(table(['Role card 1 — the guarantee', 'Role card 2 — nobody\'s job'], [[
  'A shutter guarantee was never filed and the company paid 180,000 for a free repair. Filing guarantees is not written down as anybody\'s job, and in practice A has always done it and did not this time.',
  'Nobody checks that the generator fuel is ordered before a holiday. It has never been anybody\'s job and twice it has nearly run out. Here *nobody had* is the honest version and the finding is the gap.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write which version was chosen and for whom. Then say whether you would have chosen the same, and why.'));
out.push(PHRASE_CARD(['X had not…', 'Nobody had…', 'It had not been…', 'It is not anybody\'s job.', 'Who is reading it?', 'She told me before I asked.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** real omissions at your work. For each, write all three versions, then ring the one you would use and say who the reader is.'));
out.push(table(['The omission', 'With a name', 'With *nobody*', 'Passive', 'Reader'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.1, 1.2, 1.1, 1.2, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The omission was _______. I would write _______, because the reader is _______ and _______._'));
out.push(p('**Listener task:** write down every case where the speaker could name somebody and chose not to. Then ask, gently, whether the person would rather be named.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _nobody had not checked it_ and _it was not been checked_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions of the same paragraph, and answer the questions.'));
out.push(box(null, [
  '**Version A — the note to Mr Ayoub, sent the same day**',
  'The Haffar credit was not applied because **Hala had not checked the credit list** before raising the order, and the list had changed on the Monday. She telephoned me about it on the Friday morning before anybody had asked her anything, which is why we caught it at all. The reason she did not check is worth more than the fact that she did not: **the list is printed on Mondays and she works the counter alone on Mondays**, and she has never once had a quiet twenty minutes on the day the list changes.',
  '**Version B — the entry in the procedure file, written a week later**',
  'In October an order was raised against a credit limit that **had been superseded** three days earlier. The credit list is printed weekly and was not checked against the order. **Since 1 November** the credit list is printed on **Fridays** rather than Mondays, and the counter copy is initialled by whoever prints it, so that the date of the copy in use is visible without asking anybody.',
  '⚠ **Why there are two.** Version A is for a person who has to make a decision this week and it has a name in it, because he cannot move a Monday without knowing whose Monday it is. Version B is for a reader in two years who will not know who Hala is and does not need to; it has a **date** and a **change** in it instead. Neither is a softened version of the other. They are two documents with two jobs, and the fault is writing one of them for both readers.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does Version A say is worth more than the omission itself?'));
out.push(item('2', 'What has replaced the name in Version B?'));
out.push(item('3', 'What does the note at the bottom say the real fault would be?'));
out.push(box('Writer\'s box', [
  '**Two documents, two readers.** The same omission needs a **named** version for whoever must act this week, and a **passive, dated** version for the file. Write both, on purpose, and never try to write one that serves both.',
  '**In the named version, give the reason more room than the fault.** *The list is printed on Mondays and she works the counter alone on Mondays.* A note that names a person and stops has named a person for nothing.',
  '**Credit the person who told you.** *She telephoned me on the Friday before anybody had asked her anything, which is why we caught it at all.* ⚠ Leave that out and you have turned a disclosure into a discovery, which is how people learn not to disclose.',
  '⚠ **In the file version, replace the name with a date and a change.** *Since 1 November the list is printed on Fridays.* A file entry with a person in it and no change in it is gossip with a reference number.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take one real omission and write **both** versions (**50 words or more** in total). Use the frame.'));
out.push(p('**Version A — for ______________, sent ______________**   ______________ because **______________ had not ______________**, and ______________. ______________ told me ______________ before ______________, which is why ______________. The reason is worth more than the fact: **______________**.   **Version B — for the file, written ______________**   In ______________, ______________ **had been** ______________. ______________ was not ______________. **Since ______________**, ______________, so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says the file version replaces the name with a date and a change. Yours has a date and no change — what is different now from what it was before?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the named person read Version A without feeling it was unfair?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Version A has a name **and** a reason with more room than the fault', ''],
  ['Whoever disclosed it is credited', ''],
  ['Version B is passive, dated, and names a change', ''],
  ['Neither version is a softened copy of the other', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read Version A only. The class says whether they would mind being the person in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were named, or not named, in something written about work (**100 to 140 words**). Say what was written, what you would have preferred, and whether the reason was in it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what they would have preferred_   ✓ _the three versions used correctly?_   ? _was the reason in it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many would have preferred to be named **with** the reason, rather than left as *nobody*? It is usually most of them, and it surprises people.'));
out.push(box('Homework', ['Write your final text. Then write the file version of one omission at your workplace — passive, dated, with the change in it — and put it where the file is (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.3 =======================
out.push(pb());
out.push(h2('3.3  By the time I got there'));
out.push(p('**Function:** two pasts in one sentence   ·   **Grammar:** *by the time* + past simple, main clause past perfect   ·   **Pronunciation:** the comma that carries the whole sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish three of these about your own week: _By the time I _______, _______ had already _______._'));
out.push(p('**b**  Which is right? _By the time I got there, he left. · By the time I got there, he had left. · By the time I had got there, he left._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things had happened before Nour reached the bank?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** What does *by the time* let her say in one sentence? **2** Why does Nadia say the sentence is worth having?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  "By the time I got there"', [
  ['Nadia', 'How did the bank go?'],
  ['Nour', 'By the time I got there, they had closed the counter, moved the queue to the first floor and taken the lease copy off the file.'],
  ['Nadia', 'All three?'],
  ['Nour', 'All three, and the appointment was at ten and I was there at five to.'],
  ['Nadia', 'That is a good sentence, actually. Say it to Mr Ayoub exactly like that.'],
  ['Nour', 'Why that one?'],
  ['Nadia', 'Because *by the time* puts your five to ten and their three changes in the same sentence, and the reader does the arithmetic himself. If you tell him in order — the counter was closed, then I went upstairs, then they could not find the lease — he hears a morning of difficulties. The way you said it, he hears that you were early and it made no difference.'],
  ['Nour', 'It did make a difference. I got it done by eleven.'],
  ['Nadia', 'Then that is your second sentence and it belongs after the first. One sentence for what you walked into, one for what you did about it.'],
  ['Nour', 'And the lease?'],
  ['Nadia', 'Had been taken off the file by somebody, at some point, for some reason nobody could discover. Which is exactly how to say it, because that is all anybody knows.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_By the time_ — the shape that holds two pasts**',
  table(['Shape', 'Example'], [
    ['**By the time** + past simple, … **had** + third form', '**By the time I got there**, they **had closed** the counter.'],
    ['three things in one main clause', '…they **had closed** the counter, **moved** the queue and **taken** the lease off the file.'],
    ['your own time, for contrast', 'The appointment **was** at ten and I **was** there at five to.'],
    ['**had been** + third form, agent unknown', 'The lease **had been taken** off the file by somebody.'],
    ['the second sentence', 'the thing **you** then did about it'],
  ], [2.2, 2.6]),
  '⚠ **_By the time_ takes the past simple, and the main clause takes the past perfect.** *By the time I got there, he had left.* ~~By the time I had got there, he left~~ reverses it and the sentence stops making sense.',
  '⚠ **Three past participles can share one _had_**: *had closed … moved … taken*. It is the most economical sentence in English for a morning like this one, and the reader does the arithmetic without being asked.',
  '⚠ **Put your own time in for contrast.** *The appointment was at ten and I was there at five to.* Without it, three changes read as a difficult bank; with it, they read as something that happened to somebody who was early.',
  '⚠ **One sentence for what you walked into; one for what you did about it.** Learners who have been taught to be modest leave the second one out, and then the account is only a complaint.',
  '⚠ *By somebody, at some point, for some reason nobody could discover* is not a joke — it is the correct way to report an agentless act, and Unit 5 will give you the passive properly.',
  '**Practise:** Say each with *by the time*, three things, and your own time. 1 the bank 2 a delivery you went to meet 3 a meeting you were early for 4 a customer who had already telephoned twice 5 a repair that had already been attempted',
  '**Useful phrases:**  By the time I got there…  ·  had closed, moved and taken  ·  I was there at five to.  ·  by somebody, at some point  ·  and here is what I did about it',
  '**Pronunciation – the comma that carries the sentence.** 🔊 **Track 3.6** Listen: _By the time I got there ↗ // they had closed the counter, moved the queue and taken the lease off the file._ The first clause rises and waits; the three participles fall in steps. Without the pause the sentence collapses. Repeat twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports in order; B rebuilds it as one *by the time* sentence plus one sentence about what A did. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'How did __________ go?'],
  ['A', 'First __________, and then __________, and then __________.'],
  ['B', 'Say that again starting with *by the time*.'],
  ['A', 'By the time I __________, they had __________, __________ and __________.'],
  ['B', 'And what time were you there?'],
  ['A', '__________. The appointment was __________.'],
  ['B', 'Then say that too. And what did you do about it?'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the delivery already gone', 'Role card 2 — the second attempt'], [[
  'A drove to the depot to collect. By the time A arrived: the pallet had been loaded onto another lorry, the paperwork had been signed by somebody else, and the depot manager had gone to lunch. A was ten minutes early.',
  'A called an engineer. By the time he came: the fault had cleared, the machine had been restarted twice by somebody on the night shift, and the log had not been written. A has only the night man\'s word for it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one *by the time* sentence. Count the past participles sharing the *had*; two or three is right.'));
out.push(PHRASE_CARD(['By the time I got there…', 'had closed, moved and taken', 'I was there at five to.', 'by somebody, at some point', 'and here is what I did', 'One sentence each.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** occasions when you arrived and things had already changed. Write each as one *by the time* sentence, with your own time, and a second sentence about what you did.'));
out.push(table(['By the time I…', '…they had… (two or three things)', 'What I did'], [['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2.2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your sentence pair. The class says whether the second sentence was there — and whether it sounded like boasting. It almost never does.'));
out.push(p('**Listener task:** write down anybody whose second sentence was missing. That is modesty costing somebody their own account.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _by the time I had arrived, he left_ and _by the time of I arrived_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the email, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Second account — opened, and three things that cost us a morning',
  'Dear Mr Ayoub,',
  'The second account is open and the first Baghdad Street takings go in on Thursday. The rest of this email is about how it went, because two of the three things will happen to the next person as well.',
  '**What I walked into.** By the time I got there at five to ten, they had moved personal-account interviews to the first floor, closed the ground-floor counter to anything but cash, and taken our lease copy off the file. The appointment had been made on the 2nd, for ten, in my name.',
  '**What I did.** I asked for the officer by name rather than queueing, waited twenty minutes, and had the account open by eleven. I had brought a second copy of the lease in the folder, which is the only reason the morning was not wasted.',
  '**What had become of the first lease copy.** It had been taken off the file by somebody, at some point, for a reason nobody there could discover. I am not asking them to find out. ⚠ The useful part is that it **had been taken off before we arrived**, so this was not a thing we could have fixed at the counter, and the next person should not stand there believing it can be.',
  '**What the next person should do.** Telephone the day before and ask whether interviews are still on the ground floor; take two copies of anything they have ever asked for once; and ask for the officer by name at the door rather than taking a number.',
  'Thank you. Best regards, Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer say the email is mostly about how it went?'));
out.push(item('2', 'What is "the useful part" about the missing lease, and why is it useful?'));
out.push(item('3', 'Which of the three instructions at the end comes from which of the three things?'));
out.push(box('Writer\'s box', [
  '**A "how it went" email — four headed parts:** the result in the first line → **what I walked into**, as one *by the time* sentence → what I did → **what the next person should do.**',
  '**Put the result first and the story second.** *The account is open and the first takings go in on Thursday.* Nobody reads a narrative to find out whether it worked.',
  '**Turn each thing you walked into into one instruction.** Three obstacles, three instructions, in the same order. A "how it went" email with no instructions at the end is a story about your morning.',
  '⚠ **Say which problems were already fixed-in before you arrived.** *It had been taken off before we arrived, so this was not a thing we could have fixed at the counter.* That is the past perfect doing real work: it tells the next person not to waste twenty minutes trying.',
  '⚠ Say what you had brought that saved it. *I had brought a second copy* is the one piece of praise you are allowed, and it is also the instruction.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "how it went" email about an errand of your own (**50 words or more**). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, and ______________ things that ______________   Dear ______________,   ______________ is ______________ and ______________. The rest of this email is about how it went, because ______________.   **What I walked into.** By the time I got there at ______________, they had ______________, ______________ and ______________.   **What I did.** I ______________, ______________, and ______________ by ______________. I had brought ______________, which is the only reason ______________.   **What had become of ______________.** It had been ______________ by somebody, at some point. ⚠ The useful part is that ______________.   **What the next person should do.** ______________; ______________; and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says turn each thing you walked into into one instruction. You have three obstacles and one instruction — what should the next person do about the other two?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the next person avoid two of the three problems?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The result in the first line', ''],
  ['One *by the time* sentence with two or three participles', ''],
  ['What was already fixed-in before arrival, named as such', ''],
  ['One instruction per obstacle, in the same order', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their instructions only. The class says which they would actually follow next week.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an errand that took three times as long as it should have (**100 to 140 words**). Begin with what you walked into, in one sentence, and end with what you would tell the next person.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the instruction worth keeping_   ✓ _by the time + past perfect?_   ? _how much of it could they have known the day before?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How much of each morning could have been avoided by one telephone call the day before? Usually most of it, which is an uncomfortable and useful finding.'));
out.push(box('Homework', ['Write your final text. Then write the three instructions for the next person on one of your own regular errands, and give them to whoever does it when you are away (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.4 =======================
out.push(pb());
out.push(h2('3.4  No — it had already been counted'));
out.push(p('**Function:** correcting somebody\'s order of events   ·   **Grammar:** the past perfect in a correction; *in fact · actually · the other way round*   ·   **Pronunciation:** correcting without contradicting'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody at work describes something in the wrong order and you were there. What do you say first?'));
out.push(p('**b**  Which of these corrects without contradicting? _No, that is wrong. · Actually it was the other way round. · I think you will find that… · It had already been counted when he signed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the wrong order Bassel has in his head?   **A** who signed first   **B** which lorry came first   **C** when the price changed'));
out.push(p('**b**  Listen again. **1** How does Nour correct him without saying he is wrong? **2** Why does the order matter to the customer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  "The other way round"', [
  ['Bassel', 'So he ordered at the old price, and then we put the price up, and he is annoyed because we charged him the new one.'],
  ['Nour', 'Can I check one thing in that? The order came in on the 14th.'],
  ['Bassel', 'The 14th, yes.'],
  ['Nour', 'And the price went up on the 11th.'],
  ['Bassel', '…The 11th.'],
  ['Nour', 'So it is the other way round. By the time he ordered, the price had already gone up — three days earlier.'],
  ['Bassel', 'Then why is he annoyed?'],
  ['Nour', 'Because nobody told him. He had been given a quotation on the 2nd, and the quotation says fourteen days, so on the 14th he believed he was inside it, and he was — by two days.'],
  ['Bassel', 'So he is right.'],
  ['Nour', 'He is right and we are right, which is the worst kind of argument. He had a quotation that had not expired; we had a price that had already changed. Both sentences are true and the order of events is what tells us which one wins.'],
  ['Bassel', 'Which one does win?'],
  ['Nour', 'His. A quotation in writing with a date on it beats a price list every time, and it is our own rule, and we wrote it.'],
  ['Bassel', 'I would have gone to him with the price list.'],
  ['Nour', 'You would have gone to him with the wrong order of events, and he had the right one on a piece of paper with our stamp on it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Correcting an order of events**',
  table(['Shape', 'Example', 'Why it works'], [
    ['**Can I check one thing in that?**', 'before anything else', 'asks permission, not a quarrel'],
    ['the two dates, as questions', 'The order came in on the 14th? And the price went up on the 11th?', '⚠ they correct themselves'],
    ['**So it is the other way round.**', 'the conclusion, flatly', 'no *you were wrong* anywhere'],
    ['**By the time** …, … **had already** …', 'By the time he ordered, the price had already gone up.', 'the corrected order, in one sentence'],
    ['**He had been given** …', 'He **had been given** a quotation on the 2nd.', 'the thing the other person did not know'],
  ], [1.7, 2.3, 1.6]),
  '⚠ **Correct with two dates and let them do it themselves.** Asking *the order came in on the 14th?* and *the price went up on the 11th?* produces the correction from the other person\'s own mouth, and nobody has been contradicted.',
  '⚠ **_The other way round_ is the most useful phrase in the cycle**, because it corrects the **order** and not the person. Nothing they said was false; it was in the wrong sequence.',
  '⚠ **Say when both are right.** *He is right and we are right, which is the worst kind of argument.* Two true accounts in different orders is the commonest shape of a real dispute, and naming it is how you get to the rule that settles it.',
  '⚠ Then name the rule and say whose it is: *a quotation in writing with a date on it beats a price list — it is our own rule and we wrote it.*',
  '**Practise:** Correct each with two dates and *the other way round*. 1 the order and the price rise 2 the repair and the guarantee 3 the delivery and the credit limit 4 the proof and the approval 5 the payment and the invoice',
  '**Useful phrases:**  Can I check one thing in that?  ·  So it is the other way round.  ·  By the time he ordered…  ·  He had been given…  ·  He is right and we are right.',
  '**Pronunciation – correcting without contradicting.** 🔊 **Track 3.8** Listen: _And the price went up on the ↗ eleventh?_ — a genuine question, rising, slightly puzzled. Said flat and falling, the same words are an accusation of carelessness. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the order wrong; B corrects it with two dates and finds the rule that settles it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'So __________, and then __________, and he is annoyed because __________.'],
  ['B', 'Can I check one thing in that? __________ on the __________?'],
  ['A', 'The __________, yes.'],
  ['B', 'And __________ on the __________.'],
  ['A', '…The __________.'],
  ['B', 'So it is the other way round. By the time __________, __________ had already __________.'],
  ['A', 'Then why is he annoyed?'],
  ['B', 'Because __________. He had been given __________, and __________.'],
]));
out.push(table(['Role card 1 — the guarantee and the repair', 'Role card 2 — the credit limit'], [[
  'A believes the shutter was repaired after the guarantee ran out. In fact the repair was on 2 March and the guarantee ran to 1 April. The rule that settles it: the date on the fitting invoice, not the date we paid.',
  'A believes the customer went over his limit. In fact the limit had been raised on the 8th and the order was on the 12th; the list the counter was using was printed on the 5th. The rule: the date on the counter copy.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the correction for the class – **without the book**.'));
out.push(p('**Listener task:** write the two dates and the rule that settles it. Then say who was right — and whether both were.'));
out.push(PHRASE_CARD(['Can I check one thing?', 'So it is the other way round.', 'By the time he ordered…', 'He had been given…', 'Both are right.', 'and it is our own rule']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** disagreements at your work. For each, write the two dates, the corrected order, and the rule that settles it.'));
out.push(table(['The disagreement', 'The two dates', 'The corrected order', 'The rule that settles it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We thought _______. In fact, by the time _______, _______ had already _______. The rule that settles it is _______._'));
out.push(p('**Listener task:** write down any disagreement where nobody could name a rule. Those are the ones that come back, and the finding is the missing rule.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _by the time he had ordered, the price went up_ and _it is the other way around round_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter to the customer, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Order 0914 — you are right, and here is the chronology',
  'Dear Mr Haffar,',
  '**You are right and we have credited the difference** — 46,000 — today. The rest of this letter is the chronology, because you asked for it and because you are entitled to it.',
  '**2 October.** We gave you a written quotation, with our stamp, which states that the price is held fourteen days.',
  '**11 October.** Our own list price for wrap went up. The quotation was not affected and we did not write to you, which we should have done.',
  '**14 October.** You ordered. By then our list price **had already risen**, but your quotation **had not expired** — it had two days to run.',
  '**16 October.** The invoice was raised at the new list price, because the counter priced it from the list and not from your quotation.',
  '**Where the fault is.** Ours, in two places. We did not tell you on the 11th that the list had moved, which would have let you order on the 11th rather than the 14th. And the counter priced from the list when a live quotation existed, which is the opposite of our own rule.',
  '**What has changed today.** A quotation reference now goes on the order form, and an order with a quotation reference cannot be priced from the list. ⚠ We have also stopped doing the thing that would have been easier: we have not shortened the fourteen days.',
  'Thank you for being clear about the dates. It is the dates that settled this and we would not have got there from the argument.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is in the first line, and what is not?'));
out.push(item('2', 'Where does the letter say the fault is, and how many faults are there?'));
out.push(item('3', 'What easier change has the company deliberately not made?'));
out.push(box('Writer\'s box', [
  '**A chronology letter — the shape:** the answer first, with the figure → the dates, one line each, in order → **where the fault is** → what has changed → thanks for the dates.',
  '**The answer goes in the first line.** *You are right and we have credited the difference — 46,000 — today.* A chronology sent before the answer reads as a defence being prepared.',
  '**One line per date, and put the past perfect where the two timelines cross.** *By then our list price had already risen, but your quotation had not expired.* That single sentence is the whole dispute, and it is why the letter needs this unit\'s tense.',
  '⚠ **Name both faults.** One would have been enough to settle it; naming the second — pricing from the list when a quotation exists — tells the customer you have looked at the system and not only at his order.',
  '⚠ **Say what you have *not* changed.** *We have not shortened the fourteen days.* Admitting the easier fix and refusing it is the sentence a customer remembers, because it is the one that costs you something.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a chronology letter for a disagreement you have had (**50 words or more**). Use the frame.'));
out.push(p('**Subject:** ______________ — ______________, and here is the chronology   Dear ______________,   **______________** — ______________ — ______________. The rest of this letter is the chronology, because ______________.   **______________.** ______________.   **______________.** ______________. ______________, which we should have done.   **______________.** You ______________. By then ______________ **had already** ______________, but ______________ **had not** ______________.   **Where the fault is.** ______________, in ______________ places. ______________. And ______________.   **What has changed today.** ______________. ⚠ We have also not ______________.   Thank you for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says put the past perfect where the two timelines cross. I can find your dates but not the sentence where they cross — which two things were both true on the 14th?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the customer check every line of this against his own file?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The answer and the figure in the first line', ''],
  ['One line per date, in order', ''],
  ['A past perfect where the timelines cross', ''],
  ['Both faults named, and an easier change refused', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what has changed, and what we have not". The class says which refusal they find most convincing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a disagreement that was settled by a date (**100 to 140 words**). Say what each side believed, which document settled it, and whether anybody had been dishonest or only wrong.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the document that settled it_   ✓ _the corrected order, with a past perfect?_   ? _was anybody dishonest, or only wrong?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many was anybody actually dishonest? Almost never — and that is worth saying, because most people go into a dispute expecting the opposite.'));
out.push(box('Homework', ['Write your final text. Then take one open argument at your work, write the two dates, and find out which rule settles it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.5 =======================
out.push(pb());
out.push(h2('3.5  The chronology box'));
out.push(p('**Function:** building the half-page that settles an argument   ·   **Grammar:** dates and times with the past perfect; *unrecorded · undated*   ·   **Pronunciation:** reading a date aloud so it cannot be mistaken'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of an argument at your work that went on for weeks. How many of its dates could anybody have proved?'));
out.push(p('**b**  Which of these belongs in a chronology? _the 11th · early October · the week before Eid · 11 October, from the price list copy in the counter drawer_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia insist on for every line?   **A** a date   **B** where the date comes from   **C** a signature'));
out.push(p('**b**  Listen again. **1** What does she do with the lines nobody can prove? **2** Why does she say the gaps are the useful part?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  "And where does that date come from?"', [
  ['Nour', 'The chronology for the Haffar order. Second of October, quotation. Eleventh, price rise. Fourteenth, order. Sixteenth, invoice.'],
  ['Nadia', 'Good. Now put beside each one where the date comes from.'],
  ['Nour', 'The second is on the quotation. The fourteenth is on the order. The sixteenth is on the invoice.'],
  ['Nadia', 'And the eleventh?'],
  ['Nour', 'The eleventh is when the price went up.'],
  ['Nadia', 'Says who, on what paper?'],
  ['Nour', '…The list in the counter drawer is dated the eleventh. But the list in your office is dated the eighth.'],
  ['Nadia', 'Then we have two prices and two dates and no way of knowing which was in use at the counter on the fourteenth.'],
  ['Nour', 'Should I leave the line out?'],
  ['Nadia', 'Never leave a line out. Write it and write **unrecorded** beside it. A chronology with a hole in it that says *hole* is worth ten times one that is smooth and partly invented.'],
  ['Nour', 'It makes us look disorganised.'],
  ['Nadia', 'We were disorganised — there are two undated lists in one building. The gap is not a weakness in the chronology, it is the **finding**. Everything else on that page we knew already; the line that says *unrecorded* is the only one that will change anything on Monday.'],
  ['Nour', 'And if somebody asks why there are two lists?'],
  ['Nadia', 'Then the chronology has done its work before anybody has even argued about the 46,000.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The chronology box — four columns, and the fourth is the one that matters**',
  table(['Column', 'What goes in it', 'Example'], [
    ['**date**', 'the day, never a week or a season', '11 October'],
    ['**what happened**', 'one clause, no adjectives', 'the list price of wrap rose'],
    ['**where this is recorded**', '⚠ the document, by name and location', 'price list, counter drawer'],
    ['**status**', 'recorded · **unrecorded** · **undated** · disputed', '**disputed** — office copy dated the 8th'],
  ], [0.9, 2, 1.9, 1.5]),
  '⚠ **Every line needs a source, and a line with no source is not left out — it is written and marked.** *Unrecorded* and *undated* are the two most valuable words in a chronology box, because they are the only lines that will change anything.',
  '⚠ **The gap is the finding.** Everything a chronology confirms, somebody already believed. The hole is the new information, and smoothing it over is how a document becomes useless and dishonest in the same stroke.',
  '⚠ **Never a week, a month or a season.** *Early October* cannot be checked by anybody; *11 October, price list in the counter drawer* can be checked in forty seconds by somebody who does not trust you.',
  '⚠ The box is **half a page**. A chronology that runs to two pages is a narrative with a ruler drawn on it.',
  '**Practise:** Build a four-column chronology for each, and mark at least one line *unrecorded*. 1 a price dispute 2 a short delivery 3 a repair under guarantee 4 a payment query 5 a lost document',
  '**Useful phrases:**  where is this recorded?  ·  unrecorded  ·  undated  ·  disputed — the other copy says…  ·  the gap is the finding',
  '**Pronunciation – a date that cannot be mistaken.** 🔊 **Track 3.10** Listen: _the eleventh of October · the fourteenth of October_. The day, then the month, with a small pause. ⚠ On the telephone never say *11/10* — half the world reads it as November. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a chronology; B asks where each date comes from and marks the gaps. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The chronology for __________. __________, __________. __________, __________. __________, __________.'],
  ['B', 'Good. Now put beside each one where the date comes from.'],
  ['A', 'The __________ is on the __________. The __________ is on the __________.'],
  ['B', 'And the __________?'],
  ['A', '…__________. But __________.'],
  ['B', 'Then we have __________ and no way of knowing __________.'],
  ['A', 'Should I leave the line out?'],
  ['B', 'Never leave a line out. Write it and write **unrecorded** beside it.'],
]));
out.push(table(['Role card 1 — the lost guarantee', 'Role card 2 — the night-shift restart'], [[
  'Dates: the shutter fitted (invoice, 2 March), the fault (customer\'s telephone call, logged), the repair (the fitter\'s own note, undated), the payment (our cheque stub, 14 December). The gap: nobody can date the fault.',
  'Dates: the engineer called (diary), the machine restarted twice (nobody wrote it; the night man remembers), the engineer\'s visit (his docket), the fault returning (unrecorded). Two of the four lines are unrecorded.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the lines marked *unrecorded*. Then say what each gap would cost if somebody argued about it.'));
out.push(PHRASE_CARD(['Where is this recorded?', 'unrecorded', 'undated', 'disputed — the other copy says…', 'the gap is the finding', 'the eleventh of October']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Build a four-column chronology for a real argument at your work. **At least one line must be marked _unrecorded_ or _undated_** — and if none is, look harder.'));
out.push(table(['Date', 'What happened', 'Where it is recorded', 'Status'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.9, 1.8, 1.8, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The chronology has _______ lines. _______ of them are recorded on a document I could produce. The gap is _______, and it would cost us _______ if anybody argued._'));
out.push(p('**Listener task:** write down the most expensive gap in the room. It is usually a date that everybody knows and nobody wrote.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _in early October_ in a chronology line and _11/10_ written as a date. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the finished chronology, and answer the questions.'));
out.push(box(null, [
  '**CHRONOLOGY — order 0914, the 46,000 difference. Built 22 October from the documents named; nothing here is from memory.**',
  table(['Date', 'What happened', 'Where it is recorded', 'Status'], [
    ['2 Oct', 'quotation issued, 14 days, stamped', 'quotation, carbon copy in the quotation book', 'recorded'],
    ['8 Oct', 'a price list is dated this day', 'list in the office file', '**disputed**'],
    ['11 Oct', 'a price list is dated this day', 'list in the counter drawer', '**disputed**'],
    ['11–13 Oct', 'the customer was not told of any rise', 'nothing — no letter, no note of a call', '**unrecorded**'],
    ['14 Oct', 'order placed by telephone, taken by Hala', 'order form, counter copy, initialled', 'recorded'],
    ['16 Oct', 'invoice raised at list price', 'invoice 3318', 'recorded'],
    ['21 Oct', 'customer telephoned; dates given by him', 'my own note, written during the call', 'recorded'],
  ], [0.9, 1.9, 1.9, 1.1]),
  '**Three findings, and only one of them is about the 46,000.**',
  '**1.** The quotation had not expired on the 14th. The credit is due and has been paid.',
  '**2.** There are **two undated-in-use price lists** in one building, one in the office and one in the counter drawer, and no way of knowing which was in use on any given day. That is the line marked *disputed*, twice, and it is the expensive finding.',
  '**3.** Between the 11th and the 13th nobody wrote to the customer. ⚠ We cannot even show that nobody **telephoned** him, because we have no note of calls out. The *unrecorded* line is not a gap in this chronology; it is a gap in the way we work.',
  '**What has changed.** One list, printed Fridays, initialled and dated by whoever prints it, and the old copy destroyed. A note of outgoing calls on the counter pad. Both were done on the 22nd.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the heading say about memory, and why?'));
out.push(item('2', 'Which of the three findings is called the expensive one, and why is it not the 46,000?'));
out.push(item('3', 'What does the *unrecorded* line turn out to be a gap in?'));
out.push(box('Writer\'s box', [
  '**A chronology box plus three findings.** The table is half a page; the findings underneath are three short numbered paragraphs, and **only one of them is about the thing that was being argued over.**',
  '**Say in the heading that nothing is from memory.** *Built 22 October from the documents named; nothing here is from memory.* It is the sentence that makes the table evidence rather than an account.',
  '**Rank the findings and say which is expensive.** The 46,000 is settled in two lines. The two price lists will cost more than that again if nobody touches them, and the reader will not see that unless you say so.',
  '⚠ **Let the gap be a finding about the way you work**, not about the argument. *The unrecorded line is not a gap in this chronology; it is a gap in the way we work.* That is the sentence this whole cycle exists to produce.',
  '⚠ **Date the fix.** *Both were done on the 22nd.* A chronology that ends in a recommendation is a report; one that ends in two things already done is a different document and gets a different answer.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a chronology box with three findings for a real argument (**50 words or more**). Use the frame.'));
out.push(p('**CHRONOLOGY — ______________. Built ______________ from the documents named; nothing here is from memory.**   ______________ | ______________ | ______________ | ______________   ______________ | ______________ | ______________ | **unrecorded**   ______________ | ______________ | ______________ | ______________   **Three findings, and only one of them is about ______________.**   **1.** ______________.   **2.** ______________. That is the expensive finding because ______________.   **3.** ⚠ We cannot even show that ______________. The *unrecorded* line is not a gap in this chronology; it is ______________.   **What has changed.** ______________. Done on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says one finding should be about the way you work rather than about the argument. All three of yours are about the argument — what did building this table tell you that you did not know?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody who distrusts the writer check every line?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A source for every line, by document and place', ''],
  ['At least one line marked _unrecorded_ or _disputed_', ''],
  ['Three findings, ranked, one of them about the way you work', ''],
  ['A fix with a date on it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *unrecorded* line and their finding 3. The class says which gap they recognise from their own workplace.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something nobody at your work can date (**100 to 140 words**). Say what it is, why nobody wrote it down, what it would cost in an argument, and what one line of paper would fix it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody can date_   ✓ _dates given as day and month, with sources?_   ? _who would be asked if it were disputed?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the undatable things are things **everybody knows**? That is the pattern: the facts nobody records are the ones nobody thought they would ever need to prove.'));
out.push(box('Homework', ['Write your final text. Then build a four-column chronology of one real matter at your work, with the sources, and show it to whoever has been arguing about it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.6 =======================
out.push(pb());
out.push(h2('3.6  I had never done it before that day'));
out.push(p('**Function:** saying something was a first time   ·   **Grammar:** *had never* + third form; *it was the first time I had…*   ·   **Pronunciation:** the stress on *never*'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name something you did at work for the first time this year. Did anybody show you, or did you work it out?'));
out.push(p('**b**  Which are right? _It was the first time I had done it. · It was the first time I did it. · I had never done it before. · I have never done it before that day._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What had Hala never done before that day?   **A** taken a cash payment   **B** raised a credit note   **C** answered the telephone'));
out.push(p('**b**  Listen again. **1** What does Nour say a first time explains, and what does it not excuse? **2** What does she do about it for next time?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  "It was the first time I had done it"', [
  ['Hala', 'The credit note. I did it wrong and I do not know how.'],
  ['Nour', 'Tell me what you did, in order.'],
  ['Hala', 'I wrote the amount, I wrote the invoice number, I signed it, and I posted it.'],
  ['Nour', 'And the second copy?'],
  ['Hala', '…There is a second copy?'],
  ['Nour', 'There is a second copy and it stays in the book. Had you ever raised one before?'],
  ['Hala', 'No. It was the first time I had done it. Nadia always does them and she was at the bank.'],
  ['Nour', 'Then that is the whole of it, and the sentence is *it was the first time I had raised one*. Say it like that to Mr Ayoub if he asks.'],
  ['Hala', 'It sounds like an excuse.'],
  ['Nour', 'It is not an excuse and it is not nothing. It **explains** why the second copy is missing and it does not **excuse** the two hours I spent looking for it. Those are different things and you are allowed to say the first without claiming the second.'],
  ['Hala', 'What should I have done?'],
  ['Nour', 'Asked. And I am not going to pretend that is a satisfactory answer, because Nadia was at the bank and I was at Baghdad Street and you had a customer waiting. Asked **whom**?'],
  ['Hala', 'That is why I did not ask.'],
  ['Nour', 'Which is a better finding than anything about the credit note. There is no written procedure for a credit note and the only person who knows is one person. I am going to write it on one side of paper this afternoon, and you are going to tell me where it is wrong, because you are the one who has just found out what it does not say.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying it was a first time**',
  table(['Shape', 'Example'], [
    ['**It was the first time I had** + third form', '**It was the first time I had raised** one.'],
    ['**I had never** + third form + **before**', '**I had never seen** that **before**.'],
    ['**Had you ever** + third form?', '**Had you ever raised** one before?'],
    ['what it explains', 'It **explains** why the second copy is missing.'],
    ['what it does not excuse', 'It does not **excuse** the two hours.'],
  ], [2.2, 2.6]),
  '⚠ **_It was the first time I had…_, not _did_.** The first time is a point in the past and what you had done up to it is further back, which is exactly what the past perfect is for.',
  '⚠ **A first time explains and does not excuse, and you are allowed to say the first without claiming the second.** Learners who have been told not to make excuses often will not say it at all — and then nobody finds out that there is no written procedure.',
  '⚠ **The useful question is _asked whom?_** *You should have asked* is only advice if there was somebody to ask. Where there was not, the first time has found a gap and the gap is worth more than the error.',
  '⚠ **The person who has just got it wrong is the best person to check the new procedure**, because they are the only one who knows what it does not say.',
  '**Practise:** Say each as a first time, with what it explains and what it does not excuse. 1 a credit note 2 a customs form 3 a bank paying-in book 4 a complaint 5 covering for somebody',
  '**Useful phrases:**  It was the first time I had…  ·  I had never … before.  ·  Had you ever…?  ·  It explains … it does not excuse …  ·  Asked whom?',
  '**Pronunciation – the stress on _never_.** 🔊 **Track 3.12** Listen: _I had **never** raised one before._ The stress is on *never* and the *had* almost vanishes. Repeat four, then four of _it was the first time I\'d done it_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has got something wrong; B finds out it was a first time, separates explaining from excusing, and asks *asked whom?*. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. I did it wrong and I do not know how.'],
  ['B', 'Tell me what you did, in order.'],
  ['A', 'I __________, I __________, I __________, and I __________.'],
  ['B', 'And __________?'],
  ['A', '…__________?'],
  ['B', 'Had you ever __________ before?'],
  ['A', 'No. It was the first time I had __________. __________ always does them and __________.'],
  ['B', 'Then the sentence is *it was the first time I had __________*. It explains __________ and it does not excuse __________.'],
]));
out.push(table(['Role card 1 — the customs form', 'Role card 2 — covering the counter'], [[
  'A filled in a customs form and used the invoice value instead of the declared value. First time; the person who does it was away. There is a note on how to do it, in a drawer, which nobody told A about.',
  'A covered the Baghdad Street counter and did not know that takings go in a separate bag. First time; nobody has ever written down what is different about the second site.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what the first time explained and what it did not excuse. Then answer *asked whom?* — and if there is no answer, that is the finding.'));
out.push(PHRASE_CARD(['It was the first time I had…', 'I had never … before.', 'Had you ever…?', 'It explains, it does not excuse.', 'Asked whom?', 'you know what it does not say']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** things you have done for the first time at work. For each: what it explained, what it did not excuse, and whether there was anybody to ask.'));
out.push(table(['The first time', 'What it explained', 'What it did not excuse', 'Anybody to ask?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It was the first time I had _______. It explained _______ and it did not excuse _______. There was / was not anybody to ask, because _______._'));
out.push(p('**Listener task:** count the cases where there was nobody to ask. Each one is a procedure that exists in one person\'s head.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it was the first time I did it_ and _I have never done it before that day_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the one-page procedure they wrote that afternoon, and answer the questions.'));
out.push(box(null, [
  '**CREDIT NOTES — one page, written 23 October by Nour and corrected the same day by Hala, who had just raised her first one and found out what this page did not say.**',
  '**When.** A credit note is raised when we have charged for something the customer should not have paid for. ⚠ Not when a customer is unhappy — that is a conversation, and it comes first.',
  '**Who may raise one.** Anybody. **Who must approve it:** Mr Ayoub, if it is over 100,000. Below that, whoever raises it signs it and tells Nadia the same day.',
  '**The book.** Credit notes are in the blue duplicate book in the office, **not** on loose paper. There are **two copies**: the top copy goes to the customer, **the second stays in the book**. If the second copy is not in the book, the credit note does not exist as far as the accounts are concerned.',
  '**What goes on it.** The date · the customer · the **invoice number it relates to** · the amount · one line saying why · your signature and your name printed under it.',
  '**What to do if you have never done one.** Do it anyway, and telephone Nadia or me afterwards rather than before. ⚠ This is deliberate: waiting for one of us has cost a customer four days twice this year, and a credit note raised slightly wrong on the right day is cheaper than a right one on the wrong day.',
  '**What this page does not cover.** Credit notes against an invoice that has already been paid — Nadia does those and the money goes back differently. Nobody else has ever done one and there is no page for it.',
  '_Corrected by Hala, 23 October: the original of this page did not mention the second copy, which is the thing that actually went wrong._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who corrected the page, and what was missing from it?'));
out.push(item('2', 'What does the page tell somebody to do if they have never raised a credit note, and why?'));
out.push(item('3', 'What does the page say it does not cover?'));
out.push(box('Writer\'s box', [
  '**A one-page procedure — six or seven headed lines:** when · who may and who must approve · where the book is and how many copies · what goes on it · **what to do if you have never done one** · **what this page does not cover.**',
  '**Have it corrected by the person who just got it wrong**, and say so on the page with the date. They are the only person who knows what it does not say, and the line *corrected by Hala* makes the page trustworthy in a way no amount of care could.',
  '**Give permission to act without asking, and give the reason.** *A credit note raised slightly wrong on the right day is cheaper than a right one on the wrong day.* Every procedure page should contain one sentence like this and almost none do.',
  '⚠ **End with what the page does not cover** and name who does know. A procedure page that pretends to be complete sends somebody confidently into the one case it never anticipated.',
  '⚠ Say which thing is **not** a reason to use the procedure: *not when a customer is unhappy — that is a conversation.* Half of all procedure misuse is a procedure used instead of a conversation.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-page procedure for something at your work that exists only in one person\'s head (**50 words or more**). Use the frame.'));
out.push(p('**______________ — one page, written ______________ by ______________ and corrected by ______________.**   **When.** ______________. ⚠ Not when ______________.   **Who may do it.** ______________. **Who must approve it:** ______________.   **Where it lives.** ______________, not ______________. There are ______________ copies: ______________.   **What goes on it.** ______________ · ______________ · ______________ · ______________.   **What to do if you have never done one.** ______________, and ______________ afterwards rather than before. ⚠ This is deliberate: ______________.   **What this page does not cover.** ______________. ______________ does those.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — quote the criterion, ask the question, stop', [
  '"The box says end with what the page does not cover. Yours reads as complete — is there really no case here that you would not want a new person to meet alone?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody do this for the first time, alone, at four o\'clock, from this page?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Where it lives, and how many copies', ''],
  ['What to do if you have never done it, with the reason', ''],
  ['What the page does not cover, and who does know', ''],
  ['One thing that is *not* a reason to use it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what to do if you have never done one". The class says which gives real permission and which only sounds like it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the first time you did something important at work (**100 to 140 words**). Say what you did not know, who you could have asked, whether you asked, and what you would write on one page for the next person.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody had told them_   ✓ _it was the first time I had…_   ? _is there a page now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many cases is there now a page? Almost never — and the three texts in front of you are between them most of one.'));
out.push(box('Homework', ['Write your final text. Then write the one-page procedure for something only you know how to do, and have it corrected by somebody who has never done it (50+ words).'], C.lblue, C.navy));

// ======================= CYCLE 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review & Mediate: what happened first?'));
out.push(p('**Function:** settling a disagreement about order   ·   **Review:** the past perfect · omissions · *by the time* · corrections · the chronology box · first times'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the past perfect for — a step, or a condition?',
  '**2** Which of the three ways of naming an omission can be a lie while every word is true?',
  '**3** _By the time I _______, he _______ left._',
  '**4** What are the two most valuable words in a chronology box?',
  '**5** A first time _______ and does not _______.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does Nour settle it?   **A** by deciding who is more senior   **B** by asking where each date is recorded   **C** by splitting the cost'));
out.push(p('**b**  Listen again. **1** What does she refuse to do? **2** What turns out to be the real finding?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  "Neither of you is wrong about what you saw"', [
  ['Bassel', 'The order was changed after the picking list was printed. Hala says it was before.'],
  ['Hala', 'It was before. I amended the list by hand.'],
  ['Nour', 'I am not going to decide which of you remembers better, because you both remember perfectly and you are talking about two different pieces of paper. Where is each date recorded?'],
  ['Bassel', 'The amendment is on the order, in Hala\'s hand, undated.'],
  ['Nour', 'Undated. And the picking list?'],
  ['Hala', 'The picking list is time-stamped. Four o\'clock.'],
  ['Nour', 'So we can date the list to the minute and we cannot date the amendment at all. Bassel, what makes you say it came after?'],
  ['Bassel', 'The warehouse picked twelve. If the amendment had been there, they would have picked fourteen.'],
  ['Nour', 'That is an inference and it is a good one, and it is not a date. Hala, what makes you say before?'],
  ['Hala', 'I remember doing it while the printer was still running.'],
  ['Nour', 'Also an inference, also good, also not a date. So the honest chronology says: list time-stamped at four; amendment undated; warehouse picked twelve. And then one line saying that **the amendment is undated and therefore the order of these two events cannot be established.**'],
  ['Bassel', 'That settles nothing.'],
  ['Nour', 'It settles everything that can be settled, which is not the same as nothing. And it finds the thing worth finding: we have a document people write on by hand and never date. The next one of these will be settled in ten seconds, and this one never will be.'],
  ['Hala', 'So we initial and date amendments.'],
  ['Nour', 'From this afternoon. And you two have just spent four minutes disagreeing about a Thursday, and the finding was not on either side.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating a disagreement about order**',
  table(['To refuse the wrong question', 'To find out what is knowable', 'To close it'], [
    ['I am not going to decide which of you remembers better.', 'Where is each date recorded?', 'the order cannot be established'],
    ['You both remember perfectly.', 'That is an inference, and a good one.', 'and here is what we change'],
  ], [2, 1.9, 1.9]),
  '⚠ **Refuse the question "who is right?" and ask "what is recorded?"** Two people remembering two documents are not disagreeing about a fact; they are each describing a different piece of paper.',
  '⚠ **Name an inference as an inference and praise it.** *That is an inference and it is a good one, and it is not a date.* The warehouse picking twelve is real evidence about the order of events — but it is reasoning, and in a chronology it goes in a different column from a time stamp. Unit 9 is about exactly this difference.',
  '⚠ **Write the line that says it cannot be established.** It feels like a failure and it is the honest end of most disputes about order — and it is the line that produces the change.',
  '⚠ **The finding is usually on neither side.** Two people argued about Thursday; the finding was an undated document. Say so, and say it without triumph.',
  '**Practise:** Two colleagues disagree about the order of two events. Refuse the wrong question, ask where each date is recorded, name the inferences, and say what changes.',
  '**Useful phrases:**  Where is each date recorded?  ·  That is an inference, and a good one.  ·  undated, and therefore the order cannot be established  ·  The finding was not on either side.  ·  From this afternoon.',
  '**Pronunciation – refusing without dismissing.** 🔊 **Track 3.14** Listen: _I am not going to decide which of you remembers better // because you both remember perfectly._ The second clause is warmer and slower than the first. Without it the refusal sounds like impatience. Repeat twice.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in threes. A and B disagree about the order of two events; C refuses the wrong question, asks where each date is recorded, and names the finding. Then rotate.'));
out.push(table(['Trio 1 — the amendment', 'Trio 2 — the telephone call'], [[
  'A says the amendment came after the list; B says before. The list is time-stamped; the amendment is undated. Both have inferences. The finding: nobody dates amendments.',
  'A says the customer was telephoned about the price; B says he was not. There is no note of outgoing calls at all. Neither can be shown. The finding: there is no record of calls out, which is the same gap as 3.5\'s.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two trios act out the mediation for the class – **without the book**.'));
out.push(p('**Listener task:** write the line that says what cannot be established, and the change that follows from it.'));
out.push(PHRASE_CARD(['Where is each date recorded?', 'That is an inference.', 'cannot be established', 'You both remember perfectly.', 'The finding was not on either side.', 'From this afternoon.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you two accounts of the same events in different orders. Mediate between **two** colleagues: establish what is recorded, name the inferences, and write the line that closes it.'));
out.push(table(['Who I mediated for', 'What each believed', 'What is actually recorded', 'The finding'], [['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.3, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you settled and what you could not. This is the **third** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a dispute about order is almost never a dispute about memory — it is a dispute about which documents are dated.** Everybody in it is telling the truth, and the undated document is the only thing at fault.'));
out.push(p('_______ believed _______ and _______ believed _______. What is recorded is _______. What cannot be established is _______, and the finding is _______._'));
out.push(p('**Listener task:** add to the Book 1 office-word list: _chronology · root cause · omission · audit trail · superseded · retrospectively._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 5)', 10));
out.push(p('⚠ **This unit practises Part 5: multiple choice on a longer text.** Read the text and choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**MEMORANDUM — amendments to orders, from 23 October**',
  'Two colleagues spent four minutes last Thursday disagreeing about whether an amendment to an order had been written before or after the picking list was printed. Both were certain and both were honest. Neither could be shown to be right, because the picking list is time-stamped by the machine and the amendment was written by hand and not dated.',
  'In the end the order of the two events could not be established, and it never will be. What the disagreement found was not on either side of it: we have a document which people write on by hand and which has nowhere on it for a date.',
  'From this afternoon, any handwritten amendment to an order is initialled and given the time as well as the day. The order form has been reprinted with a box for it. This takes about four seconds.',
  'Nobody is being blamed for last Thursday, and the two boxes have been sent. The reason for writing this down at all is that the next disagreement of this kind will take ten seconds instead of four minutes, and this one cannot be settled at any price.',
], 'FFFFFF', C.navy));
[
  '**1**  What could not be decided about last Thursday?   **A** who wrote the amendment   **B** the order of two events   **C** how many boxes were sent',
  '**2**  Why could the amendment not be dated?   **A** nobody could remember   **B** the form had no place for a date   **C** it was written by a machine',
  '**3**  What does the memorandum say about the two colleagues?   **A** one was mistaken   **B** both were honest   **C** both were careless',
  '**4**  What has changed?   **A** amendments are no longer allowed   **B** the form now has a box for the time   **C** the picking list is no longer time-stamped',
  '**5**  How long does the new step take?   **A** four seconds   **B** four minutes   **C** ten seconds',
  '**6**  Why was the memorandum written?   **A** to blame somebody   **B** so that the next disagreement is quick to settle   **C** to explain the two boxes',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** This is the longer of the two writing tasks and the one that carries the marks. ⚠ It is still shorter than this book\'s own free-writing tasks, and on purpose.',
  'For a memorandum about a change the shape is: **what happened, in one sentence** · **what it showed** · **what changes, and from when**.',
  '⚠ **In eighty words there is room for one sentence of reassurance and no more.** *Nobody is being blamed* is worth its four words; a paragraph of it is not.',
  '⚠ Give the new step a cost. *This takes about four seconds* is six words and it is the difference between a change that happens and a change that is resented.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** A small disagreement at your work has shown up a gap in a document. Write a memorandum (**60 to 80 words**). Say **what happened**, **what it showed**, and **what changes and from when**.'));
out.push(p('______________ disagreed last week about ______________. Neither could be shown to be right, because ______________. What that showed is ______________. From ______________, ______________. This takes ______________. Nobody is being blamed.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, in one sentence', ''],
  ['What it showed — the gap, not the people', ''],
  ['What changes, from when, and what it costs', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the chronology of something at your work that is still disputed (**100 to 140 words**): the dates with their sources, the lines that are undated, the inferences named as inferences, and the one sentence saying what cannot be established.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then find one document at your workplace that people write on by hand with nowhere to put a date, and add the box (50+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ twenty-two on the note before he signed it.   a) have written   b) had written   c) was writing',
  '2  The pallet ___ already been opened when it came off the lorry.   a) has   b) had   c) was',
  '3  Nobody ___ checked the credit list.   a) had   b) had not   c) have',
  '4  By the time I got there, they ___ the counter.   a) closed   b) had closed   c) have closed',
  '5  By the time I ___ there, he had left.   a) got   b) had got   c) have got',
  '6  It was the first time I ___ one.   a) raised   b) had raised   c) have raised',
  '7  I ___ never seen that before.   a) have   b) had   c) was',
  '8  The lease ___ been taken off the file by somebody.   a) has   b) had   c) was',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 3.15** Listen to the chronology read aloud. Complete the note.   Quotation issued: ______   Price list dated: ______   Order placed: ______   The line marked *unrecorded*: ______   What has changed: ______'));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Nour', 'The chronology for order 0914, built on the twenty-second of October from the documents named. Nothing in it is from memory.'],
  ['Nour', 'Second of October: the quotation was issued, fourteen days, stamped — that is in the quotation book. Eighth and eleventh of October: there are two price lists, one in the office file dated the eighth and one in the counter drawer dated the eleventh. Both are marked disputed.'],
  ['Nour', 'Eleventh to thirteenth: the customer was not told of any rise. There is no letter and no note of a telephone call, so that line is marked unrecorded.'],
  ['Nour', 'Fourteenth of October: the order was placed by telephone and taken by Hala; the counter copy is initialled. Sixteenth: the invoice was raised at list price.'],
  ['Nour', 'What has changed, from the twenty-second: one price list, printed on Fridays, initialled and dated by whoever prints it, and the old copy destroyed.'],
]));
out.push(p('**C  Writing.** Write a four-line chronology box of something at your work (**50 words or more**): date, what happened, where it is recorded, status — with at least one line marked *unrecorded* or *undated*, and one sentence saying what that gap is a gap in.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what had already happened, and use it for the condition rather than the sequence',
  '☐ choose between *X had not*, *nobody had* and *it had not been*, and say who the reader is',
  '☐ credit the person who told me before I asked',
  '☐ put two pasts in one *by the time* sentence, with my own time for contrast',
  '☐ correct somebody\'s order of events with two dates and no contradiction',
  '☐ build a chronology box with a source for every line and *unrecorded* where there is none',
  '☐ say that something was a first time — what it explains, and what it does not excuse',
  '☐ write a "what was already true" paragraph, two versions of an omission, a chronology and a one-page procedure',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
