// Proactive Business English B1 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a change note · a before-and-after · a predecessor · a legacy practice · a working practice · custom and practice · an unwritten rule · to phase out · to phase in · a transition · a cut-over date · a parallel run · a dual system · to decommission · to retire a form · a superseded version · a revision number · an effective date · a grandfather clause · to carry forward · institutional memory · a founding habit · a workaround that became the method · to formalise · to codify · a standing practice · the way it was always done · a surviving exception · a historic reason · a reason nobody remembers';
const BACK_AT_B1 = 'premises · obsolete · gradually';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 17  The Way It Used to Be Done'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**17.1**  say what used to be true and is not',
  '**17.2**  say what somebody used to do, again and again',
  '**17.3**  say what you are used to, and what you are not',
  '**17.4**  say what you are getting used to',
  '**17.5**  say how a thing used to be done, without naming anybody',
  '**17.6**  write the before-and-after page, with the date of the turn',
  '**17.7**  Review & Mediate: how it used to be done here',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The change this unit is written around, and the sentence nobody could produce', [
  '**From 1 March the Ghouta run moves from Tuesdays and Thursdays to Mondays and Wednesdays.** Fadi has known for a week. Nobody else did, because there is no document in this company whose job is to say *this used to be X and from the 1st it is Y.*',
  '⚠ **And when we asked why it was Tuesdays and Thursdays in the first place, nobody could answer.** The best answer anybody has is that a customer who left in 2019 took deliveries on those days, ⚠ **so two days of every week have been arranged for six years around a customer who is no longer there.**',
  '**So this unit has two halves.** The grammar of *used to · would · be used to · it used to be done* — and the document those tenses are for: ⚠ **a change note with an effective date, and a line saying what the old reason was, including when the honest answer is *nobody remembers*.**',
], C.lyellow, C.orange));

// ======================= CYCLE 17.1 =======================
out.push(pb());
out.push(h2('17.1  We used to sign at the gate'));
out.push(p('**Function:** saying what used to be true   ·   **Grammar:** _used to_ for past state and past habit   ·   **Pronunciation:** _used to_ said as one word, /juːstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things that used to be true at your work and are not now. Say when each changed, if you know.'));
out.push(p('**b**  Which are possible? _We used to sign at the gate. · We are used to signing at the gate. · We use to sign at the gate._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar want to know?   **A** what the procedure is   **B** what it used to be, and when it changed   **C** who signs'));
out.push(p('**b**  Listen again. **1** What used to happen at the gate? **2** Why can nobody give him the date?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  "And before that?"', [
  ['Mr Attar', 'The gate sheet is signed by the person who counted, by name. When did that start?'],
  ['Nour', 'It is company procedure. It is in the Baghdad Street file.'],
  ['Mr Attar', 'And before that?'],
  ['Nour', 'Before that — we used to sign at the gate without counting first. The sheet used to be a record that a load had gone, not a record that it had been counted.'],
  ['Mr Attar', 'When did it change?'],
  ['Nour', '…During the Baghdad Street opening. Some time in the summer.'],
  ['Mr Attar', 'Which summer, and what date?'],
  ['Nour', 'I cannot give you a date.'],
  ['Mr Attar', '⚠ Then here is the problem, and it is not about the gate. **Your current procedure is good. I can see it, I can test it, and I have.** What I cannot do is audit the three months before it, ⚠ **because nobody can tell me whether a sheet from May was signed under the old practice or the new one.**'],
  ['Nour', 'Both kinds of sheet look identical.'],
  ['Mr Attar', 'Both kinds of sheet are identical. ⚠ **A change with no date is not a change; it is a gradual difference in what people do** — and for three months in the middle, half the sheets mean one thing and half mean another, and nothing on the paper says which.'],
  ['Nour', 'So what should we have written?'],
  ['Mr Attar', '⚠ **One line: *from 8 June the gate sheet is signed by the person who counted; before that it recorded despatch only.*** ⚠ Eighteen words, an effective date, and the old practice named — **and three months of sheets become readable instead of ambiguous.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_used to_ — for a state or a habit that has ended**',
  table(['Form', 'Example'], [
    ['**used to** + verb', 'We **used to sign** at the gate without counting.'],
    ['state', 'The sheet **used to be** a record of despatch.'],
    ['negative', 'We **did not use to** count first. ⚠ *(not ~~used to~~)*'],
    ['question', '**Did** you **use to** sign before counting?'],
    ['⚠ never present', '~~We **use to** sign~~ — there is no present form'],
  ], [1.8, 3.1]),
  '⚠ **The spelling trap: *used to* in the affirmative, *did not use to* and *did you use to* elsewhere.** The *d* goes when *did* arrives.',
  '⚠ **A change with no date is not a change.** It is *a gradual difference in what people do* — ⚠ **and for the months in the middle, half the documents mean one thing and half mean another, and nothing on the paper says which.**',
  '⚠ **So *used to* in a working document always comes with a date.** *From 8 June the gate sheet is signed by the person who counted; before that it recorded despatch only.* ⚠ **Eighteen words, and three months of sheets become readable.**',
  '⚠ **Name the old practice, not just the new one.** An instruction says what to do now; ⚠ **a change note says what it used to be, which is the only way anybody can read the old documents.**',
  '⚠ **And expect not to know the date.** *I cannot give you a date* is the normal answer, and the lesson is not to be ashamed of it but to write the date down **this time**.',
  '**Practise:** Say each as *used to* + a date. 1 a form that changed 2 a day that moved 3 a person who did something nobody does now 4 a rule that was relaxed 5 a machine that was replaced',
  '**Useful phrases:**  we used to …  ·  it used to be …  ·  we did not use to …  ·  and before that?  ·  from the 1st …; before that …  ·  I cannot give you a date',
  '**Pronunciation – /juːstə/.** 🔊 **Track 17.2** Listen: _we used to sign at the gate_ — *used to* is one light word, /juːstə/, and the stress is on *sign* and *gate*. ⚠ Learners say *used TO* in two heavy syllables, which sounds like *we were made to*. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a current procedure; B asks *and before that?* until a date is needed. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________ is __________. When did that start?'],
  ['A', 'It is procedure. It is in __________.'],
  ['B', 'And before that?'],
  ['A', 'Before that we used to __________. It used to be __________, not __________.'],
  ['B', 'When did it change?'],
  ['A', '…__________. I cannot give you a date.'],
  ['B', '⚠ Then nobody can tell whether a __________ from __________ means __________ or __________.'],
]));
out.push(table(['Role card 1 — the gate sheet', 'Role card 2 — the price hold'], [[
  'Now: signed by the person who counted, by name. ⚠ Before: signed at the gate without counting — a record of despatch only. Changed during the Baghdad Street opening, which began on 8 June. ⚠ **No date was ever written, so three months of sheets are ambiguous.**',
  'Now: a quoted price is held fourteen days, in writing, with the date on it. ⚠ Before: held *until the customer came back*, which in practice meant for ever. Changed after a customer returned with a two-year-old quotation. ⚠ **Nobody knows the month, and there are old quotations in circulation with no date on them at all.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the old practice, the new one, and the date — or *not known*. ⚠ Then write the eighteen-word line that should have been written at the time.'));
out.push(PHRASE_CARD(['we used to …', 'it used to be …', 'and before that?', 'did you use to …?', 'from the 1st; before that …', 'I cannot give you a date']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** things at your work that used to be different. Write the old practice, the new one, and the date if you know it.'));
out.push(table(['It used to be…', 'It is now…', 'The date of the turn', 'Written down anywhere?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.8, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We used to _______. Now we _______. It changed _______, and it _______ written down._'));
out.push(p('**Listener task:** count how many turns in the room have a date. ⚠ Then count how many are written down anywhere at all — the second number is usually smaller than the first.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we use to sign_ and _we didn\'t used to count_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**WHAT THE AUDIT COULD NOT READ — AND THE FOUR LINES THAT WOULD HAVE FIXED IT. 20 January. N. Mansour.**',
  '**What Mr Attar asked for.** Not the procedure. ⚠ **The date the procedure started, and what it had been before.**',
  table(['The practice', 'It used to be', 'It is now', 'The date', 'Written down?'], [
    ['the gate sheet', 'signed at the gate; a record of despatch', 'signed by the person who counted, by name', '⚠ **not known — "during the opening"**', '⚠ **no**'],
    ['the price hold', 'held until the customer came back', 'fourteen days, in writing, with the date', 'not known', 'the new one only'],
    ['the consignee code', 'the old code, on two stencil sets', 'the new code, on everything', '**14 November**', '⚠ **yes — Hala\'s note**'],
    ['the Ghouta run', 'Tuesdays and Thursdays', '⚠ **Mondays and Wednesdays**', '⚠ **1 March — next month**', '⚠ **nowhere yet**'],
  ], [1.3, 1.9, 1.9, 1.4, 1.3]),
  '⚠ **One of the four has a date and it is the one that caused the nine cartons.** Hala\'s note of 14 November is the only properly dated change in this table, ⚠ **and it is the only change that went wrong** — which tells us that a date is not a control, it is a **record**. The date did not stop the error; it is what let us find the error in four minutes instead of a day.',
  '⚠ **What the three undated ones cost.** Nothing yet, and that is exactly the danger: *nothing yet* has been true for six years. ⚠ **They cost nothing until somebody has to read an old document** — an auditor, a customer with a two-year-old quotation, a solicitor — **and then they cost whatever that document was worth.**',
  '**And the fourth row is in the future.** ⚠ **The Ghouta run moves on 1 March and the note does not exist yet**, which means we are about to make the fourth undated change in this table, in writing, in a unit about undated changes. ⚠ **So I am writing it this week.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the auditor actually ask for?'));
out.push(item('2', 'Which row has a date, and what does the writer conclude from it?'));
out.push(item('3', 'Why is the fourth row different from the other three?'));
out.push(box('Writer\'s box', [
  '**What could not be read — four parts:** **what was actually asked for** → **a table: *the practice · it used to be · it is now · the date · written down?*** → ⚠ **what the undated ones cost, and when** → **the change that has not happened yet.**',
  '⚠ **Separate *the date* from *written down?*.** They are different columns and a change can have one without the other: you may know the month and have written nothing, or have a note with no date on it.',
  '⚠ **Say plainly that a date is a record and not a control.** ⚠ *The date did not stop the error; it is what let us find it in four minutes instead of a day.* **A reader who thinks you are claiming the date prevents mistakes will stop believing the page.**',
  '⚠ **Name the cost of the undated ones honestly: nothing yet.** ⚠ *Nothing yet has been true for six years* — and they cost nothing **until somebody has to read an old document**, and then they cost whatever that document was worth.',
  '⚠ **And find the change that is about to happen.** A page of historical regret changes nothing; ⚠ **a page that catches the next one while it is still in the future is worth writing**, and there is almost always one.',
  '⚠ **Keep *not known* in the date column rather than guessing a month.** *During the opening* is honest; *June 2024* invented is worse than a blank, because somebody will rely on it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the undated changes at your work (**60 words or more**). Use the frame.'));
out.push(p('**WHAT CANNOT BE READ — ______________. ______________.**   **What was actually asked for.** ⚠ ______________.   ______________ | used to be ______________ | is now ______________ | ⚠ **______________** | ⚠ **______________**   ______________ | used to be ______________ | is now ______________ | ______________ | ______________   ______________ | used to be ______________ | ⚠ **is now ______________** | ⚠ **______________ — next month** | ⚠ **nowhere yet**   ⚠ **What the undated ones cost.** ______________, and that is the danger: ______________ has been true for ______________. They cost nothing until ______________.   **And the change that has not happened yet.** ⚠ ______________, so I am ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as somebody looking at a document from two years ago.** The box says separate *the date* from *written down?*. Your second row has a tick in one column and nothing in the other — which is it?"',
  '⚠ In this unit the reader to name is nearly always **somebody in the future holding an old piece of paper**: an auditor, a customer, a successor. ⚠ **They are the only reader a change note has**, and the writer never meets them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could I tell, from a document alone, which practice it was written under?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*The date* and *written down?* as separate columns', ''],
  ['*Not known* where it is not known', ''],
  ['The cost of the undated ones, and when it falls', ''],
  ['A change that has not happened yet', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *date* column. The class counts the blanks.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a change at your work that nobody dated (**140 to 180 words**). Say what the old practice was, what it is now, and what happened when somebody had to read an old document.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is *used to* used for every ended practice?_   ? _who had to read the old document, and what did they conclude?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the undated change cost nothing until years later? Usually all three — ⚠ **and in all three the cost fell on somebody who had not been there.**'));
out.push(box('Homework', ['Write your final text. Then write one eighteen-word change line for something at your work: *from [date] X; before that, Y* (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.2 =======================
out.push(pb());
out.push(h2('17.2  He would open the shutter at seven'));
out.push(p('**Function:** describing repeated past action   ·   **Grammar:** _would_ for past habit; what it cannot do   ·   **Pronunciation:** the contracted _he\'d_ in narrative'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of somebody who used to work where you work. Describe three things they did, again and again, using *would*.'));
out.push(p('**b**  Which is wrong, and why? _He would open the shutter at seven. · He would be the manager. · We would have two vans._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Mr Habib use to do?   **A** nothing   **B** three things, two of which are still being done for no reason   **C** he signed the sheets'));
out.push(p('**b**  Listen again. **1** Why does the trade counter open at seven? **2** What does Abu Yasser say about the two kinds of surviving habit?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  "Why does the counter open at seven?"', [
  ['Lina', 'Why does the trade counter open at seven? Nobody comes until half past eight.'],
  ['Abu Yasser', 'Mr Habib. He was here from 1998 until 2014, and he would open the shutter at seven every morning, including Fridays.'],
  ['Lina', 'Why?'],
  ['Abu Yasser', 'Because until about 2006 the bakery two doors down took deliveries at a quarter past seven and he would sell them wrap. ⚠ **He would also sweep the pavement at seven, and he would make tea for the first customer, whoever it was.**'],
  ['Lina', 'And the bakery?'],
  ['Abu Yasser', 'Closed in about 2008.'],
  ['Lina', 'So we have opened at seven for seventeen years for a bakery that closed seventeen years ago.'],
  ['Abu Yasser', 'We have. ⚠ And here is the part that matters: **of the three things he would do, one has survived and two have not** — we open at seven and nobody sweeps and nobody makes tea.'],
  ['Lina', 'Why that one and not the others?'],
  ['Abu Yasser', '⚠ **Because opening at seven is in the rota and the other two were in him.** The sweeping and the tea stopped the week he left. The shutter time was written in a document, ⚠ **so it outlived the reason, the man, and the bakery.**'],
  ['Lina', 'That sounds like an argument for not writing things down.'],
  ['Abu Yasser', '⚠ **It is an argument for writing the reason down next to the thing.** If the rota had said *seven, for the bakery delivery at 7.15*, somebody would have crossed it out in 2008. ⚠ **A rule with its reason attached can die when the reason does. A rule on its own cannot die at all.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_would_ for past habit — and the two things it cannot do**',
  table(['Form', 'Example', 'Note'], [
    ['**would** + verb (repeated action)', 'He **would open** the shutter at seven.', 'the habit of a person'],
    ['⚠ **not** for a state', '~~He **would be** the manager.~~', '⚠ **use *was*, or *used to be***'],
    ['⚠ **not** for possession', '~~We **would have** two vans.~~', '⚠ **use *used to have***'],
    ['the short form', '**He\'d** sweep the pavement at seven.', 'narrative'],
    ['⚠ **the reason, attached**', 'seven, **for the bakery delivery at 7.15**', 'so the rule can die'],
  ], [1.9, 2.1, 1.9]),
  '⚠ ***Would* describes repeated actions and nothing else.** For a state or a possession use *used to*: ⚠ *he used to be the manager*, *we used to have two vans.* **The commonest B1 error in this cycle is *would* for a state.**',
  '⚠ **A habit that is in a document outlives a habit that is in a person.** The sweeping and the tea stopped the week he left; the shutter time is in the rota, ⚠ **so it outlived the reason, the man, and the bakery.**',
  '⚠ **So write the reason next to the thing.** *Seven, for the bakery delivery at 7.15.* ⚠ **A rule with its reason attached can die when the reason does; a rule on its own cannot die at all.**',
  '⚠ **This is not an argument against writing things down.** It is an argument about **what** to write down: the instruction and its reason, in the same line, ⚠ **because the person who could have crossed it out in 2008 did not know why it was there.**',
  '⚠ **Use *would* to describe a predecessor fairly.** *He would make tea for the first customer, whoever it was* is a sentence about a man and not about a procedure, and it is the right tense for it.',
  '**Practise:** Describe a predecessor with four *would* sentences, then check that none of them is a state or a possession.',
  '**Useful phrases:**  he would open at seven  ·  he would also …  ·  he used to be …  ·  we used to have …  ·  and the reason was …  ·  seven, for the delivery at 7.15',
  '**Pronunciation – _he\'d_.** 🔊 **Track 17.4** Listen: _he\'d open the shutter at seven and he\'d sweep the pavement_ — /hiːd/, light, and the verbs stressed. ⚠ Learners say *he WOULD* and the narrative becomes an insistence. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks why something is done; B explains with *would* and finds the dead reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Why does __________? Nobody __________.'],
  ['B', '__________. He was here from __________ until __________, and he would __________ every __________.'],
  ['A', 'Why?'],
  ['B', 'Because until about __________, __________. ⚠ He would also __________, and he would __________.'],
  ['A', 'And __________?'],
  ['B', '__________ in about __________.'],
  ['A', '⚠ So we have __________ for __________ years for __________ that __________ years ago.'],
]));
out.push(table(['Role card 1 — the seven o\'clock shutter', 'Role card 2 — the two carbon copies'], [[
  'Mr Habib, 1998–2014, would open at seven for the bakery delivery at 7.15; the bakery closed in about 2008. ⚠ **He would also sweep the pavement and make tea for the first customer, and both stopped the week he left.** The shutter time is in the rota.',
  'Every order is written with two carbon copies. ⚠ The second copy used to go to a bookkeeper who came on Thursdays and retired in 2016. **The copies are still made, and for nine years they have been filed in a box nobody opens** — about forty a week, which is roughly nineteen thousand sheets.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the habit, the original reason, the year the reason ended, and the years it has run since. ⚠ Then say whether the habit is in a document or in a person.'));
out.push(PHRASE_CARD(['he would open at seven', 'he would also …', 'he used to be …', 'and the reason was …', 'the reason ended in …', 'in a document, or in a person?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **four** habits at your work whose reason has ended. Say who the habit came from and where it lives.'));
out.push(table(['The habit', 'Whose it was', 'The original reason', 'When the reason ended', 'Document or person?'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.4, 1, 1.6, 1.2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We _______ because _______ would _______. The reason ended in _______, so we have done it for _______ years for nothing. It lives in _______._'));
out.push(p('**Listener task:** count the habits in the room that live in a document. ⚠ Then count the ones that live in a person — and ask which of the two kinds the room has more of, and which kind survived longer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _he would be the manager_ and _we would have two vans_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**FOUR THINGS WE DO FOR REASONS THAT HAVE ENDED. 21 February. L. Barakat, in her seventh week.**',
  table(['What we do', 'Whose habit it was', 'The reason', 'The reason ended', 'Years since'], [
    ['open the trade counter at 07.00', 'Mr Habib, 1998–2014', 'the bakery delivery at 7.15', '⚠ **the bakery closed about 2008**', '⚠ **17**'],
    ['two carbon copies of every order', 'the Thursday bookkeeper', 'his second copy', '⚠ **he retired in 2016**', '9'],
    ['the stock card ruled in red every Friday', 'Mr Habib again', 'a weekly figure for a bank facility', 'the facility ended 2017', '8'],
    ['the yard swept before the van is loaded', '⚠ **nobody knows**', '⚠ **nobody knows**', '—', '—'],
  ], [1.8, 1.4, 1.7, 1.6, 0.8]),
  '⚠ **Three of the four have a dead reason and the fourth has no known reason at all**, which is a different and more interesting case: ⚠ **nobody can say why the yard is swept before loading, and everybody does it, and nobody has ever not done it.** I am not proposing to stop it. **I am proposing that somebody find out, because a habit nobody can explain is either a good reason nobody has written down or a dead one.**',
  '⚠ **And one of the four should not be stopped even though its reason has ended.** The red rule on the stock card was for a bank facility that ended in 2017, ⚠ **and it is now the only weekly stock figure anybody produces.** The reason died and the practice turned out to be useful for something else — **so the change note is not *stop ruling in red*, it is *the red rule is now our weekly stock figure, since 2017.***',
  '**What I am recommending.** ⚠ **Stop the carbon copies** — about forty a week, nine years, and the box has not been opened. ⚠ **Move the counter opening to 08.00** and tell the four customers who come before nine. ⚠ **Keep the red rule and write down why.** ⚠ **Ask three people about the yard.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the four is a different case, and why?'));
out.push(item('2', 'Why should the red rule not be stopped?'));
out.push(item('3', 'What are the four recommendations?'));
out.push(box('Writer\'s box', [
  '**Things we do for reasons that have ended — four parts:** **the table: *what we do · whose habit · the reason · when it ended · years since*** → ⚠ **the one with no known reason** → ⚠ **the one that should survive its reason** → **what you recommend for each, separately.**',
  '⚠ **Put the *years since* column in and make it a number.** *Seventeen.* ⚠ A reader who sees *the bakery closed about 2008* does the arithmetic and feels something; a reader who is given the number has already felt it.',
  '⚠ **Keep the row with no known reason, and do not propose stopping it.** ⚠ *A habit nobody can explain is either a good reason nobody has written down or a dead one* — and the honest recommendation is **find out**, not **stop**.',
  '⚠ **Look for the practice that outlived its reason and became useful.** ⚠ *The reason died and the practice turned out to be useful for something else.* **The change note for that one is a re-justification and not a cancellation** — *the red rule is now our weekly stock figure, since 2017.*',
  '⚠ **Recommend separately for every row.** Four rows, four different actions: stop, move, keep-and-re-justify, investigate. ⚠ **A page that recommends one thing for four rows has not looked at four rows.**',
  '⚠ **And give the quantity where you can.** *About forty a week, nine years* — roughly nineteen thousand sheets into a box nobody opens. **The quantity is what gets the decision taken.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the habits with dead reasons at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ THINGS WE DO FOR REASONS THAT HAVE ENDED. ______________. ______________.**   ______________ | ______________ | ______________ | ⚠ **______________** | ⚠ **______________**   ______________ | ______________ | ______________ | ______________ | ______________   ______________ | ⚠ **nobody knows** | ⚠ **nobody knows** | — | —   ⚠ **The one with no known reason.** ______________. I am not proposing to stop it; ⚠ ______________.   ⚠ **The one that should survive its reason.** ______________ was for ______________, which ended in ______________, ⚠ **and it is now ______________** — so the change note is not ______________, it is ______________.   **What I am recommending.** ⚠ Stop ______________. ⚠ Move ______________. ⚠ Keep ______________ and write down why. ⚠ Ask ______________ about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **does every row get its own recommendation?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *years since* column, as a number', ''],
  ['A row with no known reason, kept and not cancelled', ''],
  ['A row that should survive its reason, re-justified', ''],
  ['A separate recommendation for every row', ''],
  ['A quantity somewhere', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their *years since* column. The class says which number it finds hardest to believe.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a predecessor at your work and what they would do (**140 to 180 words**). Say which of their habits survived, which did not, and why the difference.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is *would* used only for repeated actions?_   ? _which habits survived, and were they in a document or in a person?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the surviving habits turn out to be the ones written in a document? Usually all three — ⚠ **and the habits that were in the person stopped within a week of their leaving.**'));
out.push(box('Homework', ['Write your final text. Then find one instruction at your work and write its reason next to it, so that it can be crossed out when the reason ends (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.3 =======================
out.push(pb());
out.push(h2('17.3  I am used to being the one they telephone'));
out.push(p('**Function:** saying what you are accustomed to   ·   **Grammar:** _be used to_ + -ing / noun   ·   **Pronunciation:** the difference between _used to_ and _be used to_, heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say two things about your job you are used to, and two you are not used to.'));
out.push(p('**b**  Which is which? _I used to work at two sites. · I am used to working at two sites._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina say she is not used to?   **A** the hours   **B** being the person a customer asks for   **C** the paperwork'));
out.push(p('**b**  Listen again. **1** What is Nour used to that she does not notice? **2** What does Lina say the dangerous kind of being used to something is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  "I am not used to being asked for by name"', [
  ['Nour', 'How is the seventh week?'],
  ['Lina', 'The work is fine. ⚠ **I am not used to being asked for by name.** Mr Haffar telephoned and asked for Lina, and I did not know what to do with the question.'],
  ['Nour', 'What did you do?'],
  ['Lina', 'I said *speaking* and then I could not remember anything about his account.'],
  ['Nour', 'You will get used to it. I am used to it and I was not in my first year.'],
  ['Lina', 'May I say something about that?'],
  ['Nour', 'Go on.'],
  ['Lina', '⚠ **You are used to things that I do not think anybody should be used to.** You are used to the generator going off at four and you do not plan round it any more; you work until it goes and then you stop. You are used to the Ghouta run being Tuesdays and Thursdays and you have never asked why.'],
  ['Nour', 'The generator runs from one until four. Everybody knows that.'],
  ['Lina', '⚠ **You are used to a three-hour window and I am used to electricity**, so I notice it and you do not. ⚠ **And being used to something is the same thing as not seeing it.**'],
  ['Nour', 'That is the Unit 13 finding in a different coat.'],
  ['Lina', 'It is. ⚠ **But there are two kinds** and that is what I wanted to say. Being used to the generator is harmless — it is a fact and nobody can change it. ⚠ **Being used to the Ghouta being Tuesdays and Thursdays is not harmless, because somebody could change it and nobody has asked.**'],
  ['Nour', 'And the test between them?'],
  ['Lina', '⚠ **Could it be otherwise?** If it could not, being used to it is just competence. ⚠ **If it could, being used to it is the reason it has not been.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_be used to_ + -ing — and the two kinds**',
  table(['Form', 'Example', 'Meaning'], [
    ['**I am used to** + -ing', 'I **am used to working** at two sites.', 'accustomed — now'],
    ['**I am used to** + noun', 'I **am used to** the hours.', 'accustomed — now'],
    ['⚠ **I used to** + verb', 'I **used to work** at two sites.', '⚠ **and I do not now**'],
    ['negative', 'I **am not used to being** asked for by name.', 'not yet accustomed'],
    ['question', '**Are** you **used to** the generator?', ''],
  ], [1.7, 2.2, 1.8]),
  '⚠ **Two forms one word apart and opposite meanings.** *I used to work at two sites* means I do not now. ⚠ *I am used to working at two sites* means I do, and it no longer troubles me. **The error is not grammatical in effect; it reverses the fact.**',
  '⚠ **Being used to something is the same thing as not seeing it.** *You are used to a three-hour window and I am used to electricity, so I notice it and you do not.*',
  '⚠ **And there are two kinds, with one test: could it be otherwise?** ⚠ If it could not, being used to it is **competence** — the generator runs from one until four and nobody can change that. ⚠ **If it could, being used to it is the reason it has not been** — the Ghouta run on Tuesdays and Thursdays for a customer who left in 2019.',
  '⚠ **So ask the newest person what they are not used to**, and sort their answers with that test. The harmless half is a list of facts about the place. ⚠ **The other half is a list of things nobody has asked about.**',
  '⚠ ***You will get used to it* is true and is not always a kindness.** It is the sentence by which a thing that could be otherwise becomes a fact about the building.',
  '**Practise:** Say four things you are used to, then apply the test to each. ⚠ Could it be otherwise? Two of your four will usually turn out to be the second kind.',
  '**Useful phrases:**  I am used to …  ·  I am not used to …  ·  you will get used to it  ·  could it be otherwise?  ·  being used to it is not seeing it  ·  what are you not used to?',
  '**Pronunciation – the two forms side by side.** 🔊 **Track 17.6** Listen: _I used to work there_ /juːstə/ · _I\'m used to working there_ /juːstə/. ⚠ **The two sound almost identical and mean opposite things**, so in speech the difference is carried by *am* and by the *-ing*. Repeat four of each, in pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is new and says what they are not used to; B sorts the answers with the test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The work is fine. ⚠ I am not used to __________.'],
  ['B', 'You will get used to it.'],
  ['A', 'May I say something about that? ⚠ You are used to __________ and __________.'],
  ['B', '__________. Everybody knows that.'],
  ['A', '⚠ You are used to __________ and I am used to __________, so I notice it and you do not.'],
  ['B', 'And the test?'],
  ['A', '⚠ Could it be otherwise? __________ could not, so that is competence. ⚠ __________ could, and nobody has asked.'],
]));
out.push(table(['Role card 1 — Lina in her seventh week', 'Role card 2 — the two kinds, sorted'], [[
  'Not used to: being asked for by name. ⚠ And what A notices that B does not: the generator from one until four, and the Ghouta run on Tuesdays and Thursdays. **One is a fact and one is a question nobody has asked.**',
  'Six things somebody is used to: the generator hours; the counter opening at seven; two carbon copies; the gate sheet signed weekly; the Ghouta days; the price list dated on the front sheet only. ⚠ **Apply the test to each — five of the six could be otherwise.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what the new person is not used to, and the two lists the test produces. ⚠ Then say which list is longer, and who could change anything on it.'));
out.push(PHRASE_CARD(['I am used to …', 'I am not used to …', 'you will get used to it', 'could it be otherwise?', 'you notice it and I do not', 'that is competence; that is not']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **six** things you are used to at work. Apply the test to each and sort them.'));
out.push(table(['I am used to…', 'Could it be otherwise?', 'Competence, or a question nobody has asked?', 'Who could change it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.2, 1.9, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am used to _______. It _______ be otherwise, so it is _______. The person who could change it is _______._'));
out.push(p('**Listener task:** count how many things in the room could be otherwise. ⚠ Then ask how many of them the speaker could change themselves — it is usually more than half, and that is the uncomfortable part.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am used to work here_ and _I used to working here_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT THE NEWEST PERSON IS NOT USED TO — AND THE TEST. 22 February. N. Mansour, from Lina\'s list.**',
  '**How this page was made.** I asked Lina, in her seventh week, to write down everything she was not used to. ⚠ **She produced eleven items in about four minutes.** Then we applied one test to each: **could it be otherwise?**',
  table(['What she is not used to', 'Could it be otherwise?', 'So it is…', 'Who could change it'], [
    ['the generator going off at four', '⚠ **no — one until four**', 'a fact about the place', '—'],
    ['being asked for by name', 'no — it is the job', 'something she will learn', 'nobody'],
    ['the counter opening at 07.00', '⚠ **yes**', '⚠ **a question nobody has asked**', '⚠ **me**'],
    ['two carbon copies of every order', '⚠ **yes**', '⚠ **a question nobody has asked**', '⚠ **me**'],
    ['the gate sheet signed for a whole week', '⚠ **yes**', '⚠ **a question nobody has asked**', 'me, with Abu Yasser'],
    ['three sets of keys on one board by the door', '⚠ **yes**', '⚠ **a question nobody has asked**', 'Mr Ayoub'],
    ['the Ghouta run on Tuesdays and Thursdays', '⚠ **yes — and it changes on 1 March**', 'already changing', 'done'],
  ], [2, 1.3, 1.7, 1.2]),
  '⚠ **Two of the eleven are facts and five are questions nobody has asked.** The remaining four are things she will simply get used to, and they belong in neither column: being telephoned by name, the noise at the counter, the Thursday rush, and the way Nadia finishes at four exactly.',
  '⚠ **And four of the five are mine to change.** Not Mr Ayoub\'s, not the company\'s, not the trade\'s. ⚠ **The counter hours, the carbon copies, the gate sheet and asking about the keys are all within what I do**, and I have been here four years and have not asked about any of them.',
  '⚠ **Why she could see them and I could not.** ⚠ **Being used to something is the same thing as not seeing it**, and there is exactly one person in any building who is not yet used to it. ⚠ **She stops being that person at about the twelfth week**, so the list has to be asked for early or not at all.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How was the page made, and how long did it take?'));
out.push(item('2', 'How many of the five are the writer\'s own to change?'));
out.push(item('3', 'Why does the writer say the list has to be asked for early?'));
out.push(box('Writer\'s box', [
  '**What the newest person is not used to — four parts:** **how the page was made, and how long it took** → **the table with the test and *who could change it*** → ⚠ **how many are yours** → ⚠ **why they could see it and you could not, and the deadline.**',
  '⚠ **Say how the page was made.** *I asked her to write down everything she was not used to; she produced eleven items in about four minutes.* ⚠ **The method is the transferable part and it costs four minutes.**',
  '⚠ **Keep the third column to three answers:** a fact about the place · something they will learn · ⚠ **a question nobody has asked.** The third is the only column that produces work, and the first two stop the page being a complaint.',
  '⚠ **Count what is yours.** ⚠ *Four of the five are mine to change.* **A page that hands every item upwards will be read as a list of grievances**, and the writer usually owns most of them.',
  '⚠ **And give the deadline.** ⚠ *She stops being that person at about the twelfth week* — **there is exactly one person in any building who is not yet used to it, and the window is short.** That sentence is why this page gets written again when the next person arrives.',
  '⚠ **Leave the items that are neither in, as a group.** *Four are things she will simply get used to.* It shows the reader you have not treated every unfamiliarity as a fault.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Make the page from the newest person at your work, or from your own first weeks (**60 words or more**). Use the frame.'));
out.push(p('**WHAT THE NEWEST PERSON IS NOT USED TO — AND THE TEST. ______________. ______________.**   **How this page was made.** ⚠ ______________, and it took ______________.   ______________ | ⚠ **no — ______________** | a fact about the place | —   ______________ | ⚠ **yes** | ⚠ **a question nobody has asked** | ⚠ **______________**   ______________ | ⚠ **yes** | ⚠ **a question nobody has asked** | ______________   ⚠ **______________ of the ______________ are facts and ______________ are questions nobody has asked.**   ⚠ **And ______________ of them are mine to change.** ______________.   ⚠ **Why they could see it and I could not.** ______________, and ______________ stops being that person at about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **how many of these are yours?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How the page was made, and how long it took', ''],
  ['The test applied to every row', ''],
  ['A *who could change it* column', ''],
  ['How many are the writer\'s own', ''],
  ['The deadline — when they stop being able to see it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the items that are their own to change. The class says which could be done this week.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you are used to at your work that you should not be (**140 to 180 words**). Say how long you have been used to it, who could change it, and why you have not asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is *be used to* used, not *used to*?_   ? _who could change it, and why has nobody asked?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the writer change it themselves? Usually two of three — ⚠ **and in those the reason nobody has asked is that nobody has noticed, including the person who could.**'));
out.push(box('Homework', ['Write your final text. Then ask the newest person where you work what they are not used to, and sort their answers with the test (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.4 =======================
out.push(pb());
out.push(h2('17.4  I am getting used to it'));
out.push(p('**Function:** describing a transition you are inside   ·   **Grammar:** _be getting used to_ + -ing   ·   **Pronunciation:** _getting_ reduced, and the progress heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing at your work you are getting used to. Say how long it has taken so far and whether it is still getting easier.'));
out.push(p('**b**  Which stage is each? _I am not used to it. · I am getting used to it. · I am used to it. · I do not notice it any more._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour getting used to?   **A** the export work   **B** covering two sites, and she says what the first month was like   **C** the new code'));
out.push(p('**b**  Listen again. **1** What does she say the first month of two sites was? **2** What does Mr Ayoub say about the fourth stage?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  "Four stages, and the fourth is the dangerous one"', [
  ['Mr Ayoub', 'Two sites. It is eight months. Are you used to it?'],
  ['Nour', 'I am getting used to it. The first month I drove between them about nine times a week and did almost nothing at either.'],
  ['Mr Ayoub', 'And now?'],
  ['Nour', 'Twice a week, Tuesdays and Fridays, and I do the Baghdad Street work in the morning and come back. ⚠ **So I am not used to it and I am no longer not used to it.**'],
  ['Mr Ayoub', 'There are four stages and you have named three of them. Not used to it. Getting used to it. Used to it.'],
  ['Nour', 'And the fourth?'],
  ['Mr Ayoub', '⚠ **Not noticing it.** And the fourth is the dangerous one, because at the third stage you still know that two sites is a thing that costs you something. ⚠ **At the fourth stage you do not, and you stop telling anybody about it** — and then next year somebody asks why administration takes so long and nobody says *because one person is in two buildings.*'],
  ['Nour', 'How long does the fourth stage take?'],
  ['Mr Ayoub', '⚠ About a year, in my experience, and it is not a weakness; it is what being good at something is. ⚠ **The repair is to write the cost down while you can still feel it** — which is now, in month eight, and not in month fourteen.'],
  ['Nour', 'Write what down?'],
  ['Mr Ayoub', 'Two sentences. ⚠ **What it costs, in hours or in things not done**, and ⚠ **what would have to be true for it to stop costing that.** ⚠ Then put a date on it and look at it in a year, **because in a year you will read it and not recognise the person who wrote it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_be getting used to_ — and the four stages**',
  table(['Stage', 'Form', 'What is true'], [
    ['1', 'I **am not used to** it.', 'you feel every bit of it'],
    ['2', 'I **am getting used to** it.', '⚠ **both at once** — not used to it, and no longer not'],
    ['3', 'I **am used to** it.', 'you manage it, and you know it costs'],
    ['⚠ **4**', '⚠ **I do not notice it.**', '⚠ **you stop telling anybody** — about a year'],
  ], [0.5, 2.1, 3]),
  '⚠ **Stage 2 is a real state and not a polite answer.** *I am not used to it and I am no longer not used to it* — and the evidence is the figures: ⚠ *nine journeys a week in the first month, twice a week now.*',
  '⚠ **Stage 4 is the dangerous one.** At stage 3 you still know the thing costs you something. ⚠ **At stage 4 you do not, and you stop telling anybody** — *and then next year somebody asks why administration takes so long and nobody says because one person is in two buildings.*',
  '⚠ **Stage 4 is not a weakness; it is what being good at something is.** ⚠ So the repair is not vigilance: **it is to write the cost down while you can still feel it.**',
  '⚠ **Two sentences, while you are at stage 2 or 3:** ⚠ **what it costs, in hours or in things not done**, and ⚠ **what would have to be true for it to stop costing that.** Then date it and read it in a year.',
  '⚠ **Describe progress with figures and not with adjectives.** *Nine journeys a week, then twice a week* says more than *much better*, and it is the only form in which stage 2 can be reported honestly.',
  '**Practise:** Take something you are getting used to. Give the figure for the first month and the figure for now, and then write the two sentences.',
  '**Useful phrases:**  I am getting used to it  ·  the first month I …; now I …  ·  I am not used to it and no longer not  ·  what it costs is …  ·  what would have to be true is …  ·  read it again in a year',
  '**Pronunciation – _getting_ reduced.** 🔊 **Track 17.8** Listen: _I\'m getting used to it_ — /ˈɡetɪn ˈjuːstə/, light, and the stress on *used*. ⚠ A heavy *getting* makes it sound like a complaint rather than a report. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a transition; B gets the figures and the two sentences. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________. It is __________ months. Are you used to it?'],
  ['A', 'I am getting used to it. The first month I __________ and __________.'],
  ['B', 'And now?'],
  ['A', '__________. ⚠ So I am not used to it and I am no longer not used to it.'],
  ['B', '⚠ And the fourth stage, which is not noticing it?'],
  ['A', 'About __________.'],
  ['B', '⚠ Then write two sentences now: what it costs, and what would have to be true for it to stop costing that.'],
]));
out.push(table(['Role card 1 — two sites, eight months', 'Role card 2 — the fourth stage, found'], [[
  'Month one: about nine journeys a week, almost nothing done at either site. Now: twice a week, Tuesdays and Fridays, Baghdad Street in the morning. ⚠ **Stage 2, eight months in.** The two sentences: what it costs, and what would make it stop costing that.',
  'B asks A about something A has stopped noticing. ⚠ **A will say *it is fine* and mean it.** B\'s job is to ask for the figure: *how many times a week?* *how long does it take?* ⚠ **The figure usually shocks the person who gave it**, which is the whole of stage 4.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the first-month figure, the current figure, and the two sentences. ⚠ Then say which stage the speaker is at, and what the evidence for that is.'));
out.push(PHRASE_CARD(['I am getting used to it', 'the first month I …; now I …', 'how many times a week?', 'what it costs is …', 'what would have to be true', 'read it again in a year']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you are getting used to or have got used to. Give the figures and name the stage.'));
out.push(table(['The thing', 'First month', 'Now', 'Stage', 'What it still costs'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.4, 1.2, 1.2, 0.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am getting used to _______. The first month, _______; now, _______. It still costs _______, and what would have to be true for it to stop is _______._'));
out.push(p('**Listener task:** count how many people are at stage 4 on something, by their own account. ⚠ Then ask for the figure in each case, and watch the figure surprise the person who gave it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am getting used to work two sites_ and _I get used to it_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**TWO SITES, MONTH EIGHT — WRITTEN WHILE I CAN STILL FEEL IT. 23 February. N. Mansour. ⚠ To be read again in February next year.**',
  table(['', 'Month one', 'Month eight'], [
    ['journeys between sites', '**about 9 a week**', '**2 a week — Tuesdays and Fridays**'],
    ['hours in the van', 'about 6 a week', 'about 1.5 a week'],
    ['things started and not finished', '⚠ **most days**', 'about one a week'],
    ['⚠ **what is still not done at all**', '⚠ **the fourth-store stocktake, the file index, the key list**', '⚠ **the same three**'],
  ], [1.8, 2, 2.2]),
  '⚠ **The first three rows are what getting used to it looks like, and they are a real improvement.** Nine journeys to two, six hours to one and a half, and I finish what I start on four days in five.',
  '⚠ **The fourth row has not moved in eight months.** The fourth-store stocktake, the file index and the key list were not done in month one because I was in the van, and they are not done in month eight because they are not in anybody\'s week. ⚠ **Getting used to a job is not the same as the job getting done** — I have got used to the part of it I do, and the three things nobody notices have quietly become things nobody does.',
  '⚠ **What it costs, in one sentence.** About one and a half hours a week in a van, and three standing jobs that have not been done since June.',
  '⚠ **What would have to be true for it to stop costing that.** ⚠ **Either somebody covers Baghdad Street on a Tuesday morning, or the three standing jobs are given to somebody by name with a date** — and the second is cheaper, is available now, and is what I am asking for.',
  '⚠ **And the reason I am writing it in month eight.** By month fourteen I shall not notice the van or the three jobs, ⚠ **and this note will be the only evidence that any of it ever cost anything.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which three rows improved, and which did not move at all?'));
out.push(item('2', 'What are the two possible remedies, and which is asked for?'));
out.push(item('3', 'Why is the note written in month eight?'));
out.push(box('Writer\'s box', [
  '**Written while I can still feel it — five parts:** **a table of *month one* against *now*** → ⚠ **the rows that improved** → ⚠ **the row that has not moved** → **what it costs, in one sentence** → ⚠ **what would have to be true, and why you are writing it now.**',
  '⚠ **Put a *what is still not done at all* row in and expect it not to have moved.** ⚠ *Getting used to a job is not the same as the job getting done* — **the part you do gets easier and the part nobody notices becomes the part nobody does.**',
  '⚠ **Use figures for the improvement and names for the loss.** *Nine journeys to two* is progress; *the fourth-store stocktake, the file index and the key list* is the cost, and it has to be named item by item or it disappears.',
  '⚠ **Offer two remedies and say which you are asking for and why.** ⚠ *The second is cheaper, is available now, and is what I am asking for.* **A note with one remedy reads as a demand; a note with two reads as a decision somebody can take.**',
  '⚠ **Date it for reading in a year, in the heading.** *To be read again in February next year.* ⚠ It is the only instruction in the document and it is the one that matters.',
  '⚠ **And give the reason for writing it now.** ⚠ *By month fourteen I shall not notice the van or the three jobs, and this note will be the only evidence that any of it ever cost anything.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note for something you are getting used to (**60 words or more**). Use the frame.'));
out.push(p('**______________, MONTH ______________ — WRITTEN WHILE I CAN STILL FEEL IT. ______________. ⚠ To be read again in ______________.**   ______________ | **______________** | **______________**   ______________ | ______________ | ______________   ⚠ **what is still not done at all** | ⚠ **______________** | ⚠ **______________**   ⚠ **What getting used to it looks like.** ______________.   ⚠ **The row that has not moved.** ______________, and ______________. ⚠ Getting used to a job is not the same as ______________.   ⚠ **What it costs, in one sentence.** ______________.   ⚠ **What would have to be true.** Either ______________, or ______________ — and ______________ is what I am asking for.   ⚠ **Why I am writing it now.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the writer, a year from now** — then ask one question: **will I still be able to feel this when I read it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *month one* against *now* table with figures', ''],
  ['A *still not done at all* row', ''],
  ['The cost in one sentence', ''],
  ['Two remedies, and which one you ask for', ''],
  ['A date for re-reading, in the heading', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *still not done at all* row. The class says how long each item has been on it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that everybody has got used to (**140 to 180 words**). Say what it cost at the beginning, what people say about it now, and what the figure actually is.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the progress given in figures?_   ? _what is the figure now, and who last said it out loud?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the cost stopped being mentioned rather than stopped being paid? Usually all three — ⚠ **and in all three somebody could still give the figure when asked.**'));
out.push(box('Homework', ['Write your final text. Then write the two sentences for something you are getting used to — what it costs and what would have to be true — and put a date on it for next year (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.5 =======================
out.push(pb());
out.push(h2('17.5  It used to be done at the gate'));
out.push(p('**Function:** describing an old method without naming anybody   ·   **Grammar:** the passive with _used to_   ·   **Pronunciation:** the long passive chain said without stumbling'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe two old methods at your work without naming a single person.'));
out.push(p('**b**  Make each impersonal: _We used to sign at the gate. → It _______. · Somebody used to type the picking list. → The picking list _______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nadia want the passive here?   **A** it is more formal   **B** the old method must be described without implying that the people were careless   **C** it is shorter'));
out.push(p('**b**  Listen again. **1** What is wrong with the active version? **2** When does she say the passive is the wrong choice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  "Describe the method, not the people"', [
  ['Nour', 'The change note says *we used to sign the gate sheet without counting the load*.'],
  ['Nadia', 'Who is *we*?'],
  ['Nour', 'Everybody. Abu Yasser mostly.'],
  ['Nadia', 'So a document that will be in the file in 2035 says that Abu Yasser signed sheets without counting.'],
  ['Nour', '…It does say that.'],
  ['Nadia', 'And it is not what you mean. ⚠ **You mean that the method did not require a count** — which is a fact about a procedure, not about a man who followed it correctly for eleven years.'],
  ['Nour', 'So: *the gate sheet used to be signed at the gate, as a record of despatch; it was not required to be counted against the order.*'],
  ['Nadia', 'Better. And now the test. ⚠ **Is there anybody in this sentence?**'],
  ['Nour', 'No.'],
  ['Nadia', '⚠ **Then it is the right sentence for a change note and the wrong sentence for a post-mortem.** In Unit 15 you learned that *the code should have been checked* owns nothing and names nobody, and that was a fault. **Here it is the point.**'],
  ['Nour', 'How do I know which document I am writing?'],
  ['Nadia', '⚠ **One question: is anybody supposed to do something as a result?** A post-mortem asks somebody to change something, so it needs names. ⚠ **A change note describes what the old method was so that old documents can be read** — and nobody has to do anything, so names in it are only an accusation with a date.'],
  ['Nour', 'And where the old method was genuinely somebody\'s fault?'],
  ['Nadia', '⚠ **Then it is not a change note, and you are writing the wrong document.** Put the fault in the post-mortem, with the name, ⚠ **and leave the change note describing the method** — because the change note will be read by strangers for twenty years and the post-mortem by four people this month.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The passive with _used to_ — describing a method, not people**',
  table(['Active', 'Impersonal'], [
    ['We used to sign at the gate.', 'The sheet **used to be signed** at the gate.'],
    ['Somebody used to type the list.', 'The list **used to be typed** from the order.'],
    ['Nobody used to count first.', 'The load **was not required to be counted** first.'],
    ['We used to hold prices for ever.', 'A price **used to be held** until the customer returned.'],
    ['⚠ the test', '⚠ **is there anybody in this sentence?**'],
  ], [2.4, 2.6]),
  '⚠ **A change note describes the method; it does not describe the people who followed it.** ⚠ *You mean that the method did not require a count — which is a fact about a procedure, not about a man who followed it correctly for eleven years.*',
  '⚠ **And remember that a document outlives its subject.** *A document that will be in the file in 2035 says that Abu Yasser signed sheets without counting.* ⚠ **He did; it was the method; and in 2035 nobody will know that.**',
  '⚠ **One question decides between the passive and the active: is anybody supposed to do something as a result?** ⚠ A post-mortem asks somebody to change something, so it **needs names** — that was Unit 15. ⚠ **A change note asks nobody to do anything, so a name in it is only an accusation with a date.**',
  '⚠ **And if the old method really was somebody\'s fault, you are writing the wrong document.** Put the fault in the post-mortem, with the name; ⚠ **leave the change note describing the method** — *the change note will be read by strangers for twenty years and the post-mortem by four people this month.*',
  '⚠ ***Was not required to be*** is the useful construction for a thing the old method permitted. It is longer than *nobody did* and it is accurate: it says the method, not the practice.',
  '**Practise:** Make each impersonal and then apply the test. 1 we used to sign at the gate 2 somebody used to type the list 3 nobody used to date the quotations 4 we used to keep two copies 5 we used to open at seven',
  '**Useful phrases:**  it used to be done at …  ·  it was not required to be …  ·  is there anybody in this sentence?  ·  the method, not the people  ·  a name here is an accusation with a date',
  '**Pronunciation – the long passive chain.** 🔊 **Track 17.10** Listen: _the sheet used to be signed at the gate_ — /juːstə bi saɪnd/, three light syllables in the middle, stress on *sheet*, *signed* and *gate*. ⚠ Learners stress every word and the sentence stops twice. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A writes an active change note; B makes it impersonal and applies the test. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The change note says *we used to __________*.'],
  ['B', 'Who is *we*?'],
  ['A', 'Everybody. __________ mostly.'],
  ['B', 'So a document that will be in the file in __________ says that __________.'],
  ['A', '…So: *__________ used to be __________; it was not required to be __________.*'],
  ['B', '⚠ And is there anybody in that sentence?'],
  ['A', 'No.'],
  ['B', '⚠ Then it is right for a change note. Is anybody supposed to do anything as a result?'],
]));
out.push(table(['Role card 1 — the gate sheet', 'Role card 2 — the wrong document'], [[
  '*We used to sign the gate sheet without counting the load.* ⚠ Names Abu Yasser, who followed the method correctly for eleven years. Impersonal: *the gate sheet used to be signed at the gate, as a record of despatch; the load was not required to be counted against the order.*',
  'A has written a change note that says *the quotations used to be left undated, which caused the Tarabishi dispute.* ⚠ **The second half is a post-mortem in a change note.** B\'s job: split it. The change note describes the method; ⚠ **the dispute, with its date and its name, goes in the other document.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the active version and the impersonal one. ⚠ Then say which document each belongs in, and why.'));
out.push(PHRASE_CARD(['it used to be done at …', 'it was not required to be …', 'who is "we"?', 'anybody in this sentence?', 'the method, not the people', 'that belongs in the other document']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** old methods at your work. Write each impersonally, and say whether anything in it belongs in a post-mortem instead.'));
out.push(table(['The active version', 'The impersonal version', 'Anybody in it?', 'Belongs in…'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 0.9, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Actively it is _______. Impersonally it is _______. There is _______ in it, so it belongs in _______._'));
out.push(p('**Listener task:** count the sentences in the room that named somebody in a change note. ⚠ Then ask what each of them would look like to a stranger reading the file in ten years.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the sheet used to signed_ and _it was used to be done_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the change note, and answer the questions.'));
out.push(box(null, [
  '**CHANGE NOTE 1 — THE GATE SHEET. Issued 24 February. Effective 8 June (retrospective record). Revision 1.**',
  '⚠ **Why this note is dated nine months after the change.** The change happened during the Baghdad Street opening and no note was written at the time. ⚠ **This note records it late and says so**, so that anybody reading a sheet from that period knows which practice applied and that the boundary is not exact.',
  table(['', 'The old method', 'The new method'], [
    ['what the sheet was', 'a record that a load had left', 'a record that a load had been counted against the order'],
    ['when it was signed', 'at the gate, as the load went', '**after the count, and not before**'],
    ['who signed it', '⚠ **not specified by the method**', '⚠ **the person who counted, by name**'],
    ['what happened to a difference', 'not provided for', 'written on the sheet before the load moves'],
  ], [1.6, 2.2, 2.4]),
  '⚠ **Is there anybody in this note?** No. ⚠ **The old method did not specify who signed, and that is the fact being recorded** — not that any particular person signed without counting, which is what an active sentence here would have said about somebody who followed the method correctly for eleven years.',
  '⚠ **The boundary, stated as a boundary.** Sheets dated before about 1 June are under the old method. Sheets from 8 June are under the new. ⚠ **Sheets in the first week of June cannot be told apart and there are about nine of them** — and saying so is the only honest thing available, because inventing a date would be worse.',
  '**What this note is for.** ⚠ **Not to change anything.** The practice changed nine months ago. ⚠ **It is so that a sheet from 2024 can be read in 2035** — and the reader will be a stranger, which is why there are no names in it and why the revision number is on the top line.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the note dated nine months after the change?'));
out.push(item('2', 'What does the note say about the first week of June?'));
out.push(item('3', 'What is the note for, and who will read it?'));
out.push(box('Writer\'s box', [
  '**The change note — five parts:** **heading with an effective date and a revision number** → ⚠ **why it is late, if it is** → **a table: *the old method · the new method*, impersonal throughout** → ⚠ **the boundary, stated as a boundary** → **what the note is for, and who will read it.**',
  '⚠ **Put the effective date in the heading, even retrospectively**, and mark it as a retrospective record. ⚠ **A late note is worth almost as much as a timely one and a missing note is worth nothing.**',
  '⚠ **Describe both methods in the same rows.** *What the sheet was · when it was signed · who signed it · what happened to a difference.* ⚠ The parallel rows are what let a reader see the change rather than read about it.',
  '⚠ **Say *not specified by the method* where that is the truth.** It is the most useful cell on the page: ⚠ **the old method did not require a name, which is a fact about the procedure and not about anybody who followed it.**',
  '⚠ **State the boundary as a boundary, including its fuzziness.** ⚠ *Sheets in the first week of June cannot be told apart and there are about nine of them.* **Inventing a clean date would be worse, because somebody will rely on it.**',
  '⚠ **And say what the note is not for.** *Not to change anything — the practice changed nine months ago.* ⚠ **It is so that a sheet from 2024 can be read in 2035, and the reader will be a stranger** — which is the whole argument for the impersonal voice and the revision number.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a change note for an undated change at your work (**60 words or more**). Use the frame.'));
out.push(p('**CHANGE NOTE ______________ — ______________. Issued ______________. Effective ______________. Revision ______________.**   ⚠ **Why this note is dated ______________ after the change.** ______________, so that ______________.   what it was | ______________ | ______________   when | ______________ | ______________   who | ⚠ **not specified by the method** | ⚠ **______________**   ______________ | ______________ | ______________   ⚠ **Is there anybody in this note?** ______________. ⚠ ______________.   ⚠ **The boundary.** ______________ are under the old method; ______________ are under the new. ⚠ ______________ cannot be told apart, and there are about ______________.   **What this note is for.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be a stranger in 2035** — then ask one question: **can I tell which method a document was written under?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An effective date and a revision number in the heading', ''],
  ['Why it is late, if it is', ''],
  ['Parallel rows, impersonal throughout', ''],
  ['*Not specified by the method* where true', ''],
  ['The boundary, including its fuzziness', ''],
  ['What the note is for, and who will read it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their boundary paragraph. The class says how many documents fall in the uncertain part.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an old method at your work, impersonally (**140 to 180 words**). Describe what the method was, what it did not require, when it changed, and what cannot now be told apart.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there anybody in any sentence?_   ? _what did the old method not require, and who would have been blamed for that?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did an active sentence blame somebody for following the method correctly? Usually two of three — ⚠ **and in both cases the writer had not noticed doing it.**'));
out.push(box('Homework', ['Write your final text. Then take one sentence from a document at your work that names somebody for an old method, and rewrite it impersonally (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.6 =======================
out.push(pb());
out.push(h2('17.6  Then, now, and the date the turn happened'));
out.push(p('**Function:** writing the before-and-after page   ·   **Grammar:** the before-and-after page; the effective date and the reason for the old way   ·   **Pronunciation:** reading a change aloud at a counter in thirty seconds'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Announce a change at your work in three sentences: what it was, what it is, and from when.'));
out.push(p('**b**  Which is missing from most announcements you have seen? _what it is now · from when · what it used to be · why it used to be that._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi say the drivers need that the note does not have?   **A** the new days   **B** what to do with the customers who have planned around the old days   **C** a map'));
out.push(p('**b**  Listen again. **1** What two customers are affected? **2** What does Fadi say about the reason for the old days?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  "And what do I tell the two who planned round it?"', [
  ['Nour', 'The change note. *From 1 March the Ghouta run moves from Tuesdays and Thursdays to Mondays and Wednesdays.*'],
  ['Fadi', 'That is right and it is not enough. What do I tell the two customers who have planned round Tuesdays and Thursdays?'],
  ['Nour', 'Which two?'],
  ['Fadi', 'The Ghouta bakery takes flour on a Tuesday morning and wants wrap the same day. And Mr Jaber\'s yard is shut on Mondays.'],
  ['Nour', 'So one gains nothing and one loses a delivery day.'],
  ['Fadi', '⚠ The bakery can move to Monday, which is better for them. ⚠ **Mr Jaber\'s yard is shut on Mondays, so from the 1st he has one delivery day a week instead of two, and nobody has told him.**'],
  ['Nour', 'Then the note needs a fourth line: who is affected and what happens to them.'],
  ['Fadi', 'And a fifth, which is the one I actually want. ⚠ **Why was it Tuesdays and Thursdays?**'],
  ['Nour', 'I asked. Nobody knows. The best answer is that a customer who left in 2019 took deliveries on those days.'],
  ['Fadi', '⚠ So two days of every week have been arranged for six years around a customer who is not there. **Put that in the note.**'],
  ['Nour', 'It makes us look foolish.'],
  ['Fadi', '⚠ **It makes the next change possible.** If the note says *the old days were set for a customer who left in 2019*, then in three years when somebody asks why it is Mondays and Wednesdays, ⚠ **there will be a line that says it was for the bakery and for Mr Jaber\'s Monday closing** — and when the bakery closes, somebody will cross it out.'],
  ['Nour', 'Which is 17.2 again. The rule with its reason attached can die.'],
  ['Fadi', '⚠ **And the rule without it cannot.** We have just spent six years proving that, and the note is two lines longer than it was.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The before-and-after page — five lines, and the last two are the ones nobody writes**',
  table(['Line', 'Example'], [
    ['**1 What it used to be**', 'The Ghouta run **used to be** Tuesdays and Thursdays.'],
    ['**2 What it is now**', '**From 1 March** it is Mondays and Wednesdays.'],
    ['**3 The effective date**', '1 March, with no parallel run.'],
    ['⚠ **4 Who is affected, and what happens to them**', '⚠ **Mr Jaber\'s yard is shut on Mondays — one delivery day instead of two.**'],
    ['⚠ **5 Why the old way was the old way**', '⚠ **set for a customer who left in 2019.**'],
  ], [2.3, 3.3]),
  '⚠ **Line 4 is the one the people doing the work ask for first.** A change note that gives the new arrangement and not its effect on named customers is a note the driver cannot use.',
  '⚠ **Line 5 looks like an admission and is an investment.** ⚠ *It makes the next change possible* — because a rule with its reason attached can die when the reason dies, and **a rule without one cannot die at all.** *We have just spent six years proving that.*',
  '⚠ **Give the new reason as well as the old one.** *It is Mondays and Wednesdays for the bakery and for Mr Jaber\'s Monday closing* — so that in three years, when the bakery closes, somebody can cross it out.',
  '⚠ **Say whether there is a parallel run.** *1 March, with no parallel run* — or *both days served for two weeks*. ⚠ A change with no statement either way is read as a parallel run by about half the readers.',
  '⚠ **And write *nobody knows* if that is the answer to line 5.** ⚠ **It is the most useful line on the page**: it tells the next person that the arrangement is unexplained and may be cancelled, instead of leaving them to assume there is a reason they have not been told.',
  '**Practise:** Announce a change in five lines. ⚠ Do lines 4 and 5 first and the other three will take ten seconds.',
  '**Useful phrases:**  it used to be …  ·  from the 1st it is …  ·  with no parallel run  ·  who is affected is …  ·  the old days were set for …  ·  and nobody knows why',
  '**Pronunciation – the thirty-second announcement.** 🔊 **Track 17.12** Listen: _it used to be Tuesdays and Thursdays // from the first of March it is Mondays and Wednesdays // no parallel run // Mr Jaber loses a day // the old days were for a customer who left in 2019._ ⚠ Five groups, each falling. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A announces a change in two lines; B asks for lines 4 and 5. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The change note. *From __________ the __________ moves from __________ to __________.*'],
  ['B', 'That is right and it is not enough. What do I tell the __________ who planned round __________?'],
  ['A', 'Which?'],
  ['B', '__________ and __________.'],
  ['A', 'So one __________ and one __________.'],
  ['B', '⚠ And the one I actually want: why was it __________ in the first place?'],
  ['A', '⚠ Nobody knows. The best answer is __________.'],
]));
out.push(table(['Role card 1 — the Ghouta run', 'Role card 2 — the counter hours'], [[
  '*From 1 March the Ghouta run moves from Tuesdays and Thursdays to Mondays and Wednesdays.* ⚠ Line 4: the Ghouta bakery gains (flour comes Monday); ⚠ **Mr Jaber\'s yard is shut on Mondays, so he loses a delivery day and nobody has told him.** ⚠ Line 5: the old days were for a customer who left in 2019.',
  '*From 1 April the trade counter opens at 08.00 instead of 07.00.* ⚠ Line 4: four customers come before nine and one of them at ten past seven every day for years. ⚠ Line 5: **seven o\'clock was for a bakery delivery at 7.15, and the bakery closed in about 2008.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the announcement for the class – **without the book**.'));
out.push(p('**Listener task:** write all five lines. ⚠ Then say which of the five the first version was missing, and who would have found out the hard way.'));
out.push(PHRASE_CARD(['it used to be …', 'from the 1st it is …', 'with no parallel run', 'who is affected is …', 'the old reason was …', 'and nobody knows why']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** changes at your work, past or coming. Write all five lines for each.'));
out.push(table(['It used to be', 'It is now', 'From when', 'Who is affected, and how', 'Why it was the old way'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1.4, 1.4, 0.8, 1.9, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It used to be _______ and from _______ it is _______. _______ is affected: _______. The old way was _______, or nobody knows._'));
out.push(p('**Listener task:** count the changes in the room whose line 5 is *nobody knows*. ⚠ Then ask how long each arrangement has lasted — and the two numbers together are the finding.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a change note with no effective date, and one with no line 4. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the before-and-after page, and answer the questions.'));
out.push(box(null, [
  '**CHANGE NOTE 2 — THE GHOUTA RUN. Issued 25 February. Effective 1 March. Revision 1. ⚠ No parallel run.**',
  table(['', 'Then — until 29 February', 'Now — from 1 March'], [
    ['days', 'Tuesdays and Thursdays', '**Mondays and Wednesdays**'],
    ['why those days', '⚠ **a customer who left in 2019 took deliveries on them**', '⚠ **the Ghouta bakery takes flour on Mondays, and Mr Jaber\'s yard is shut on Mondays**'],
    ['who loads', 'not specified by the method', 'the person who counted, as Change Note 1'],
    ['cut-off for orders', 'not specified', '**16.00 the day before**'],
  ], [1.3, 2.4, 2.5]),
  '⚠ **Who is affected, and what happens to them.** The Ghouta bakery **gains**: flour comes on Monday and wrap now comes the same day. ⚠ **Mr Jaber loses a delivery day — his yard is shut on Mondays, so from the 1st he has one day a week instead of two.** He has not been told. ⚠ **Fadi is telephoning him today**, before the note is circulated, because a customer should not read about it.',
  '⚠ **Why it used to be Tuesdays and Thursdays.** ⚠ **Nobody knows for certain.** The best answer anybody has is that a customer who left in **2019** took deliveries on those days. ⚠ **So two days of every week have been arranged for six years around somebody who is not there** — and that sentence is in this note on purpose.',
  '⚠ **Why the new reason is written down.** So that when the bakery\'s Monday changes, or Mr Jaber opens on a Monday, ⚠ **somebody can cross this out instead of inheriting it.** Change Note 1 and the seven o\'clock shutter are both in this file because nobody wrote a reason down, ⚠ **and the shutter has now outlived its bakery by seventeen years.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who gains, who loses, and what is being done about the loser?'));
out.push(item('2', 'What is the honest answer to *why those days*, and why is it in the note?'));
out.push(item('3', 'Why is the new reason written down?'));
out.push(box('Writer\'s box', [
  '**The before-and-after page — four parts:** **heading with the effective date, the revision number and whether there is a parallel run** → **a *then · now* table whose second row is *why those days*** → ⚠ **who is affected, and what is being done about the loser before the note goes out** → ⚠ **why the new reason is written down.**',
  '⚠ **Make *why* a row in the table, not a footnote.** ⚠ Both columns of that row matter: the old reason (often *nobody knows*) and **the new one, which is what allows the next change.**',
  '⚠ **Name the loser and telephone them before the note circulates.** ⚠ *Fadi is telephoning him today, because a customer should not read about it.* **A change note that reaches a customer before a person does has made an enemy for the price of a telephone call.**',
  '⚠ **Write *nobody knows for certain* and then give the best answer anybody has, with its year.** ⚠ *A customer who left in 2019* — and then the arithmetic: **two days of every week for six years around somebody who is not there.**',
  '⚠ **Say *no parallel run* or say how long the parallel run is.** Silence is read as a parallel run by about half of any audience, and the half that reads it the other way will be at the wrong place on the Tuesday.',
  '⚠ **And point at the cost of not doing this, from your own file.** ⚠ *The shutter has now outlived its bakery by seventeen years.* **One example from inside the building is worth any amount of explanation.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a before-and-after page for a change at your work (**60 words or more**). Use the frame.'));
out.push(p('**CHANGE NOTE ______________ — ______________. Issued ______________. Effective ______________. Revision ______________. ⚠ ______________ parallel run.**   ______________ | ______________ | **______________**   ⚠ **why** | ⚠ **______________** | ⚠ **______________**   ______________ | ______________ | ______________   ⚠ **Who is affected, and what happens to them.** ______________ **gains**: ______________. ⚠ **______________ loses ______________.** ⚠ ______________ is telephoning ______________ today, because ______________.   ⚠ **Why it used to be ______________.** ⚠ ______________. The best answer anybody has is ______________. ⚠ So ______________ for ______________ years.   ⚠ **Why the new reason is written down.** So that when ______________, somebody can ______________ instead of ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the customer who loses a day** — then ask one question: **does anybody telephone me before this goes out?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Effective date, revision number, parallel run or not', ''],
  ['*Why* as a row, with both columns filled', ''],
  ['The loser named, and telephoned before circulation', ''],
  ['*Nobody knows*, with the best answer and its year', ''],
  ['Why the new reason is written down', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *why* row. The class says how many old reasons are *nobody knows*.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full before-and-after page for a change at your work (**140 to 180 words**), including the old reason, the new reason, and what is being done for whoever loses by it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _all five lines?_   ? _who loses, and when will they be told?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the old reason unknown? Usually two of three — ⚠ **and in those, the arrangement had lasted longer than the reason had existed.**'));
out.push(box('Homework', ['Write your final text. Then take a change that is coming at your work and write its line 4 and line 5 — who is affected, and why the old way was the old way (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.7 =======================
out.push(pb());
out.push(h2('17.7  Review & Mediate: how it used to be done here'));
out.push(p('**Function:** explaining the old way to somebody who has to work with its leftovers   ·   **Review:** _used to_ · _would_ · _be used to_ · _be getting used to_ · the passive · the before-and-after page'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Why is a change with no date not a change?',
  '**2** What two things can *would* not describe, and what do you use instead?',
  '**3** What is the test that sorts the two kinds of *being used to something*?',
  '**4** What are the four stages, and which is the dangerous one?',
  '**5** Which two lines of a before-and-after page does nobody write, and what does the second one make possible?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina find in the file?   **A** a missing sheet   **B** three generations of a form, all still in use   **C** the old price list'));
out.push(p('**b**  Listen again. **1** How many versions of the gate sheet are in circulation? **2** What does Nour say about which version a person uses?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  "There are three gate sheets and nobody chose any of them"', [
  ['Lina', 'There are three different gate sheets in the building.'],
  ['Nour', 'There is one gate sheet.'],
  ['Lina', 'There are three. The pad in the yard has a signature column and no date column. The pad at Baghdad Street has both. ⚠ **And there is a box of about two hundred old ones in the store with neither — just a line for the load.**'],
  ['Nour', 'And which are being used?'],
  ['Lina', 'All three. The yard uses the yard pad. Baghdad Street uses theirs. ⚠ **And when the yard pad runs out, Abu Yasser takes a block from the old box, because it is there and it is free.**'],
  ['Nour', 'So a sheet from last month could be any of three forms.'],
  ['Lina', 'It could, and I can show you one of each from February. ⚠ **Nobody chose this. Nobody decided that three versions should be in use.** The new pad was printed for Baghdad Street because they needed pads, and the old box has never been thrown away because nobody throws anything away.'],
  ['Nour', 'Which version is right?'],
  ['Lina', '⚠ **The Baghdad Street one, and the people using the wrong one are the people who have been here longest** — because they are used to a pad that lives in a drawer in the yard, and the right pad lives at the other site.'],
  ['Nour', 'That is the whole unit in one sentence.'],
  ['Lina', '⚠ **And what nobody has written down is the thing that would end it in a morning.** Not a note saying *use the new sheet*. ⚠ **A note saying *the old pads are withdrawn; the box in the store is to be destroyed; the yard pad is reprinted with a date column from the 1st.*** Three instructions, and one of them is to throw something away.'],
  ['Nour', 'Why has nobody written that?'],
  ['Lina', '⚠ **Because a change note tells people what to do and nobody has ever written one that tells them what to get rid of** — so every change we make adds a version and removes none, ⚠ **and in eleven years that is three gate sheets, two price lists and a box of two hundred forms nobody will ever use and nobody will ever destroy.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the generations of a form, and the instruction nobody writes**',
  table(['What is found', 'Why it is there'], [
    ['three versions of one form in use', '⚠ **nobody chose it** — a pad was printed and nothing was withdrawn'],
    ['the oldest version used by the longest-serving', '⚠ **they are used to the pad that lives in the drawer**'],
    ['a box of 200 obsolete forms, kept', 'nobody throws anything away'],
    ['⚠ **no withdrawal instruction anywhere**', '⚠ **a change note says what to do and never what to get rid of**'],
  ], [2.2, 3.4]),
  '⚠ **Count the versions of your forms before you write anything else.** Three gate sheets, two price lists, a box of two hundred — ⚠ **and nobody decided on any of it.**',
  '⚠ **The oldest version is used by the longest-serving people**, because being used to a thing includes being used to where it lives. ⚠ **It is not resistance; it is a drawer.**',
  '⚠ **And the missing instruction is a withdrawal.** ⚠ *The old pads are withdrawn; the box in the store is to be destroyed; the yard pad is reprinted with a date column from the 1st.* **Three instructions, and one of them is to throw something away.**',
  '⚠ **Every change note that adds a version and withdraws none makes the next change harder.** ⚠ *In eleven years that is three gate sheets, two price lists and a box of two hundred forms nobody will ever use and nobody will ever destroy.*',
  '⚠ **So a change note has a sixth line, and it is the one this unit ends on: *what is withdrawn, and what is to be destroyed.*** With a date, and with somebody\'s name against the destroying.',
  '**Practise:** Count the versions of one form at your work. ⚠ Then write the withdrawal line — and notice how much harder it is to write than the instruction.',
  '**Useful phrases:**  how many versions are in use?  ·  nobody chose this  ·  it lives in the drawer  ·  what is withdrawn?  ·  the box is to be destroyed  ·  and whose name is against that',
  '**Pronunciation – the withdrawal, said plainly.** 🔊 **Track 17.14** Listen: _the old pads are withdrawn // the box in the store is to be destroyed // the yard pad is reprinted with a date column from the first._ ⚠ Three flat statements, no apology in any of them. **The middle one is the hard one to say.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A counts the versions of a form; B asks who uses which, and why, and then for the withdrawal line.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Count the gate sheets: the yard pad (signature, no date), the Baghdad Street pad (both), the old box (neither). ⚠ **All three in use, and the oldest used by the longest-serving.** The withdrawal line is three instructions and one of them is to destroy two hundred forms.',
  'Count a form of your own. ⚠ **Expect two or three versions and expect nobody to have chosen.** B\'s job is to ask *where does each pad live?* — because the answer explains who uses which, ⚠ **and a version that lives in the nearest drawer will win against any instruction.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the versions, where each lives, and who uses it. ⚠ Then write the withdrawal line, with a name against the destroying.'));
out.push(PHRASE_CARD(['how many versions?', 'nobody chose this', 'where does it live?', 'what is withdrawn?', 'to be destroyed, by …', 'the nearest drawer wins']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Count the versions of one of their forms and collect the answers.'));
out.push(table(['Version', 'Where it lives', 'Who uses it', 'Withdraw, reprint or destroy?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1.4, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class how many versions you found. This is the **fifth** unit of this book, and the thing nobody writes down is this: **a change note tells people what to start doing and has no line for what to stop doing, so every change in the history of a company has added a version and withdrawn none — which means the oldest form is always still in a drawer somewhere, being used by the people who have been there longest, because being used to a thing includes being used to where it lives, and the nearest drawer beats any instruction ever written.**'));
out.push(p('_I found _______ versions of _______. The oldest lives in _______ and is used by _______. The withdrawal line is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a change note · an effective date · a superseded version · to phase out · a parallel run · custom and practice._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 4)', 10));
out.push(p('⚠ **This unit practises Part 4: right, wrong, or doesn\'t say.** Read the extract, then mark each statement **A** right, **B** wrong or **C** doesn\'t say.'));
out.push(box(null, [
  '**Extract from Change Note 2, issued 25 February.**',
  '_Effective 1 March. Revision 1. No parallel run. Until 29 February the Ghouta run was made on Tuesdays and Thursdays; from 1 March it is made on Mondays and Wednesdays. Why those days: nobody knows for certain. The best answer anybody has is that a customer who left in 2019 took deliveries on Tuesdays and Thursdays. The new days are set because the Ghouta bakery takes flour on Mondays, and because Mr Jaber\'s yard is shut on Mondays. The Ghouta bakery gains: wrap now comes on the same day as its flour. Mr Jaber has one delivery day a week instead of two. He has not been told in writing; he is being telephoned today, before this note is circulated. The cut-off for orders on the run is 16.00 the day before; under the old arrangement no cut-off was specified by the method._',
]));
[
  '**1**  The old days were chosen for a customer who has left.   **A** right   **B** wrong   **C** doesn\'t say',
  '**2**  There is a two-week period when both the old and the new days are served.   **A** right   **B** wrong   **C** doesn\'t say',
  '**3**  Mr Jaber\'s yard is shut on Mondays.   **A** right   **B** wrong   **C** doesn\'t say',
  '**4**  Mr Jaber has agreed to the change.   **A** right   **B** wrong   **C** doesn\'t say',
  '**5**  The old arrangement had no stated cut-off for orders.   **A** right   **B** wrong   **C** doesn\'t say',
  '**6**  The Ghouta bakery asked for the change.   **A** right   **B** wrong   **C** doesn\'t say',
  '**7**  This is the first revision of the note.   **A** right   **B** wrong   **C** doesn\'t say',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling a colleague that a form they use has been withdrawn.',
  'The shape: **which version is withdrawn, and from when** · ⚠ **which version to use and where it is** · ⚠ **what to do with the old ones.**',
  '⚠ **In forty words the third part is the one that works.** *Use the new pad* has been written a thousand times and failed; ⚠ ***the old pads from the box are to be brought to me and destroyed*** has a verb, an object and a destination.',
  '⚠ And say **where the right version lives**, because the nearest drawer beats any instruction: *the new pads are in the yard drawer from Monday* is the sentence that makes the change stick.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A form at your work has three versions. Write to the person using the oldest (**35 to 45 words**). Give **which version is withdrawn and from when**, ⚠ **which to use and where it is**, and ⚠ **what to do with the old ones.**'));
out.push(p('______________, from ______________ the ______________ is withdrawn. Use ______________; ⚠ from ______________ they are in ______________. ⚠ The old ones in ______________ are to be ______________ — bring them to ______________ and I will ______________. Nothing you have already ______________ needs ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Which version is withdrawn, and from when', ''],
  ['⚠ Which to use, and where it lives', ''],
  ['⚠ What to do with the old ones, with a destination', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full before-and-after page for a change at your work (**140 to 180 words**): the effective date, the revision number, whether there is a parallel run, the *why* row with both columns, who is affected and what is being done for them, and ⚠ **the withdrawal line, with a name against the destroying.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then count the versions of one form at your work, find where each lives, and write the withdrawal line (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  _We ___ sign at the gate without counting._   a) use to   b) used to   c) are used to',
  '2  _We ___ count first._   a) did not used to   b) did not use to   c) not used to',
  '3  _He ___ the manager until 2014._   a) would be   b) was   c) would have been',
  '4  _He ___ open the shutter at seven every morning._   a) would   b) used to be   c) was used to',
  '5  _I ___ working at two sites now._   a) used to   b) am used to   c) use to',
  '6  _I ___ it — the first month was nine journeys a week and now it is two._   a) am used to   b) am getting used to   c) used to',
  '7  In a change note, _the sheet used to be signed at the gate_ is right because ___.   a) it is formal   b) it describes the method and names nobody   c) it is shorter',
  '8  The line nobody writes in a change note is ___.   a) the effective date   b) what is withdrawn and destroyed   c) the new arrangement',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 17.15** Listen to the exchange. Complete the note.   Number of versions in use: ______   Where the oldest ones are: ______   Who uses the oldest, and why: ______   Which version is right: ______   The three instructions in the withdrawal line: ______'));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['Lina', 'There are three different gate sheets in the building. The yard pad has a signature column and no date column. The Baghdad Street pad has both. And there is a box of about two hundred old ones in the store with neither.'],
  ['Nour', 'And which are being used?'],
  ['Lina', 'All three. When the yard pad runs out, Abu Yasser takes a block from the old box, because it is there and it is free.'],
  ['Nour', 'Which version is right?'],
  ['Lina', 'The Baghdad Street one, and the people using the wrong one are the people who have been here longest, because they are used to a pad that lives in a drawer in the yard.'],
  ['Nour', 'So what should the note say?'],
  ['Lina', 'The old pads are withdrawn, the box in the store is to be destroyed, and the yard pad is reprinted with a date column from the 1st.'],
]));
out.push(p('**C  Writing.** Write a change note for something at your work (**60 words or more**): what it used to be, what it is now, the effective date, who is affected, why the old way was the old way, and what is withdrawn.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what used to be true, with a date, and write *not known* when there is none',
  '☐ describe a predecessor with *would*, and use *used to* for states',
  '☐ say what I am used to, and test whether it could be otherwise',
  '☐ report a transition in figures, and name the fourth stage',
  '☐ describe an old method impersonally, and know which document I am writing',
  '☐ write a before-and-after page with the old reason and the new one',
  '☐ count the versions of a form and write the withdrawal line',
  '☐ write a change note, a before-and-after page and a withdrawal instruction',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
