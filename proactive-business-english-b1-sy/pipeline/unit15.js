// Proactive Business English B1 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a post-mortem · a root cause · a contributing decision · an omission · an oversight · hindsight · with hindsight · a lesson learned · an action owner · a corrective action · a preventive action · to own a decision · accountability · an admission · to acknowledge · an unqualified apology · a qualified apology · to make good · restitution · a goodwill gesture · a near miss · a repeat occurrence · a single point of failure · an assumption that failed · a blind spot · to escalate early · a decision log · a counterfactual · what we would do differently · a standing lesson';
const BACK_AT_B1 = 'mistake · lesson learned · setback';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 15  What Went Wrong, and the Honest Report'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**15.1**  say what you should have done, and own the decision',
  '**15.2**  say what would have happened if somebody had done otherwise',
  '**15.3**  join a past omission to a present consequence',
  '**15.4**  write the apology that names the thing',
  '**15.5**  wish, and know when a wish is an excuse',
  '**15.6**  write the five-part post-mortem',
  '**15.7**  Review & Mediate: what went wrong, and what we would do differently',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ What went wrong, so that you know what this unit is about', [
  '**Nine of the twenty-four cartons for Beirut went out with the wrong consignee code on them.** The stencil set at Baghdad Street — the second store, open since 8 June — carried a code we stopped using in November. Ms Tannous\'s agent had to re-mark them at the port, and the nine cartons reached her customer **two days late.**',
  '⚠ **And the control that should have caught it was invented three weeks earlier, in this book.** The programme page said *how you will know: the stencils are on the bench.* ⚠ **The stencils were on the bench. They were the wrong stencils** — and the column asked whether they were **there**, not whether they were **right.**',
  '⚠ So this unit is not about blame and it is not about care. **It is about a control that was tested for presence instead of correctness**, written by somebody who was pleased with it, and about the four documents you need when that happens: an admission, a counterfactual, an apology, and a report somebody can act on.',
], C.lyellow, C.orange));

// ======================= CYCLE 15.1 =======================
out.push(pb());
out.push(h2('15.1  I should have asked which code'));
out.push(p('**Function:** owning a decision   ·   **Grammar:** _should have_ and _ought to have_   ·   **Pronunciation:** the weak _should\'ve_ and the full form for emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you should have done last month and did not. Say it with *I should have* and then say who else could have done it.'));
out.push(p('**b**  Which owns the decision? _The code should have been checked. · I should have checked the code. · Somebody should have checked the code._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say she should have done?   **A** telephoned Beirut   **B** asked which code was on the stencils before she wrote the line   **C** nothing'));
out.push(p('**b**  Listen again. **1** What is the difference Mr Ayoub draws between two kinds of *should have*? **2** Which one does he say is worth writing down?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  "Which should-have is it?"', [
  ['Nour', 'Nine cartons went with the November code. I should have checked the stencils.'],
  ['Mr Ayoub', 'You were at the other site on the 9th.'],
  ['Nour', 'Then Abu Yasser should have checked them.'],
  ['Mr Ayoub', 'Against what? He had a line that said the stencils should be on the bench, and they were.'],
  ['Nour', '…So the line should have said *the stencils carry the code on the order*.'],
  ['Mr Ayoub', 'Now we are somewhere. ⚠ There are two kinds of *should have* and only one of them is useful. The first is *I should have done the thing I was already supposed to do* — which is an apology and changes nothing, because next month you will be at the other site again.'],
  ['Nour', 'And the second?'],
  ['Mr Ayoub', '⚠ ***I should have written the line differently*** — which is a decision you took, with a reason, and it can be unmade. ⚠ **The first kind blames a person for being in two places. The second kind fixes a page.**'],
  ['Nour', 'I should have asked which code was on the stencils before I wrote the line, because I had never looked at that stencil set.'],
  ['Mr Ayoub', 'And would you have thought to?'],
  ['Nour', 'No. ⚠ I wrote *how you will know* for every line and I was pleased with it, and I checked whether things would be **there**. It did not occur to me to ask whether anything would be **right**.'],
  ['Mr Ayoub', '⚠ **Then write that sentence down exactly as you have just said it**, because it is worth more than nine cartons. ⚠ *A control that tests presence is not a control* — and you will find three more of them in that programme before Thursday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_should have_ — and the two kinds**',
  table(['Form', 'Example', 'What it does'], [
    ['**should have** + participle', 'I **should have asked** which code.', 'owns a decision'],
    ['**ought to have** + participle', 'I **ought to have asked**.', 'the same, slightly more formal'],
    ['⚠ passive', '~~The code **should have been checked**.~~', '⚠ **owns nothing — no person in it**'],
    ['⚠ *somebody should have*', '~~**Somebody should have** checked.~~', '⚠ **blames the room**'],
    ['**should not have**', 'I **should not have** written the line that way.', 'owns the thing you did'],
  ], [1.7, 2.1, 1.8]),
  '⚠ **There are two kinds of *should have* and only one is useful.** *I should have done the thing I was already supposed to do* is an apology and changes nothing. ⚠ ***I should have written the line differently*** is a decision you took, and a decision can be unmade.',
  '⚠ **The first kind blames a person for being in two places. The second kind fixes a page.**',
  '⚠ **Never use the passive here.** *The code should have been checked* has no person in it, so no action follows it, and it is the sentence everybody writes.',
  '⚠ **Ask yourself the second question: would I have thought to?** If the answer is no, then *I should have* is about the **system you designed** and not about your attention — and that is the version that prevents the next one.',
  '⚠ **A control that tests presence is not a control.** *Are the stencils on the bench* against *do the stencils carry the code on the order.* ⚠ The second takes the same four seconds and is a different question.',
  '**Practise:** Say each as a decision you took, not a duty you missed. 1 a wrong code 2 a late delivery 3 an unsigned sheet 4 a figure nobody checked 5 a customer nobody telephoned',
  '**Useful phrases:**  I should have asked …  ·  I should have written the line differently  ·  would I have thought to?  ·  that is an apology and changes nothing  ·  a control that tests presence is not a control',
  '**Pronunciation – _should\'ve_.** 🔊 **Track 15.2** Listen: _I should\'ve asked which code_ — /ʃʊdəv/, one light syllable, stress on *asked* and *code*. ⚠ Then the full form: _I SHOULD HAVE asked_, which is what you say when somebody is excusing you. Repeat four of each.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a *should have* of the first kind; B moves it to the second. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ went wrong. I should have __________.'],
  ['B', 'You were __________.'],
  ['A', 'Then __________ should have __________.'],
  ['B', 'Against what? He had a line that said __________, and __________.'],
  ['A', '…So the line should have said __________.'],
  ['B', '⚠ And would you have thought to ask?'],
  ['A', 'No. ⚠ I checked whether things would be __________; it did not occur to me to ask whether anything would be __________.'],
]));
out.push(table(['Role card 1 — the nine cartons', 'Role card 2 — the unsigned sheet'], [[
  '"I should have checked the stencils." ⚠ A was at the other site. The useful version: *I should have written the line as* the stencils carry the code on the order *rather than* the stencils are on the bench. **A decision, with a reason, that can be unmade in one minute.**',
  '"Abu Yasser should have signed the gate sheet." ⚠ He signs the page on a Thursday for the week, which everybody knows. The useful version: *I should have put the date column next to the signature column, because a weekly signature on a daily sheet is invisible until you ask for a date.*',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the first-kind sentence and the second-kind sentence. ⚠ Then say which of the two could be acted on tomorrow by somebody who was not in the conversation.'));
out.push(PHRASE_CARD(['I should have asked …', 'I should have written it differently', 'against what?', 'would I have thought to?', 'that changes nothing', 'presence is not correctness']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things that went wrong at your work. Write the first-kind sentence, then the second-kind sentence.'));
out.push(table(['What went wrong', 'First kind — the duty I missed', 'Second kind — the decision I took', 'Can it be unmade?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.7, 1.9, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _What went wrong was _______. The first-kind sentence is _______. The second-kind sentence is _______, and it can be unmade by _______._'));
out.push(p('**Listener task:** count how many second-kind sentences could be acted on in under ten minutes. ⚠ It is usually most of them — a line on a page, a column on a sheet, a question added to a list.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the code should have been checked_ and _somebody should have told me_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**THE NINE CARTONS — WHAT I SHOULD HAVE DONE. 16 January. N. Mansour. ⚠ Written before the post-mortem, and kept short on purpose.**',
  '**What happened.** Nine of twenty-four cartons for Beirut were marked with the consignee code we stopped using in November. Ms Tannous\'s agent re-marked them at the port. **Her customer had them two days late.**',
  table(['The first-kind sentence', 'The second-kind sentence', 'Can it be unmade?'], [
    ['I should have checked the stencils.', '⚠ **I should have written the line as *the stencils carry the code on the order*, not *the stencils are on the bench*.**', '⚠ **yes — one line, one minute**'],
    ['Abu Yasser should have noticed.', 'I should have given him the order to mark **against**, which he did not have in front of him.', 'yes — the order goes on the bench'],
    ['Somebody should have told me the code changed.', '⚠ **I should have asked who holds each stencil set, which I have never known.**', 'yes — a list, half an hour'],
  ], [1.6, 2.8, 1.1]),
  '⚠ **Why the first column is on the page at all.** Because it is what I said out loud on the 15th, three times, and it is what I would have written if nobody had asked me the second question. ⚠ **All three of those sentences are true and not one of them changes anything**, because next month I shall be at the other site again and Abu Yasser will have a line that says *on the bench*.',
  '⚠ **And the question that moved me from one column to the other.** *Would you have thought to?* ⚠ **No.** I wrote *how you will know* for eight lines and I was pleased with it, and every one of the eight asks whether something will be **there.** Not one asks whether it will be **right**.',
  '**So the finding is not about the nine cartons.** ⚠ **There are three more presence-only controls in that programme** — the cartons in bay 2, the van gone from the yard, the port receipt — **and all three would pass with the wrong thing.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer put the first-kind sentences on the page at all?'));
out.push(item('2', 'What question moved the writer from the first column to the second?'));
out.push(item('3', 'What is the finding, and how many other lines does it affect?'));
out.push(box('Writer\'s box', [
  '**What I should have done — four parts:** **what happened, in figures and with the cost to the other side** → **two columns: the first-kind sentence and the second-kind sentence** → ⚠ **why the first column is on the page** → ⚠ **the finding, and how many other lines it affects.**',
  '⚠ **Put the cost to the other side in the first paragraph.** *Her customer had them two days late.* ⚠ Your own cost is not the news; the news is what it did to somebody who was depending on you.',
  '⚠ **Keep both columns.** The first-kind sentences are what you said out loud and what you would have written; printing them next to the useful versions is the only way a reader learns the difference, ⚠ **and it stops the note reading as an evasion.**',
  '⚠ **Print the question that moved you.** *Would you have thought to? No.* ⚠ It is the transferable part: anybody can ask it of their own *should have*, and it sorts an attention problem from a design problem in four seconds.',
  '⚠ **Then count the other lines with the same fault.** *Three more presence-only controls, and all three would pass with the wrong thing.* ⚠ **A post-mortem that fixes one line is a post-mortem that will be written again next month.**',
  '⚠ **Add the *can it be unmade* column.** It is what turns the note into work: one line, one minute; the order on the bench; a list, half an hour.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Take something that went wrong and write the two columns (**60 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT I SHOULD HAVE DONE. ______________. ______________.**   **What happened.** ______________. ⚠ **______________ had ______________.**   ______________ | ⚠ **I should have ______________, not ______________** | ⚠ **______________**   ______________ | I should have ______________ | ______________   ⚠ **Why the first column is on the page.** Because ______________, and ______________ of those sentences change anything, because ______________.   ⚠ **The question that moved me.** *Would I have thought to?* ⚠ ______________.   **So the finding is not about ______________.** ⚠ There are ______________ more ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the person who has to do the marking next month.** The box says give the second-kind sentence as a decision that can be unmade. Your second row says *I should have been more careful* — what would I have in front of me that I did not have?"',
  '⚠ In this unit the reader to name is almost always **the person who will do the job next time**, not the person who is owed an apology. ⚠ **They are different readers and they need different documents**, and 15.4 is where the second one gets theirs.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody who was not there act on your second column tomorrow?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The cost to the other side, in the first paragraph', ''],
  ['Both columns, side by side', ''],
  ['The question *would I have thought to?*, answered', ''],
  ['The other lines with the same fault, counted', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their second column. The class says which sentence could be acted on fastest and by whom.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that went wrong where the obvious *should have* was about a person (**140 to 180 words**). Say what the design-level *should have* was, and whether anybody ever wrote it down.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a person in every *should have*?_   ? _would the writer have thought to do the thing they say they should have?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the design-level *should have* never written down? Usually all three — because the person-level one closes the conversation and everybody is relieved.'));
out.push(box('Homework', ['Write your final text. Then take one thing that went wrong this month, write both kinds of sentence, and ask yourself whether you would have thought to (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.2 =======================
out.push(pb());
out.push(h2('15.2  If somebody had counted the walk-in trade'));
out.push(p('**Function:** saying what would have happened   ·   **Grammar:** the third conditional   ·   **Pronunciation:** the contracted _if we\'d_ and _we\'d have_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take one decision at your work that turned out badly. Say what would have happened if one small thing had been different.'));
out.push(p('**b**  Complete: _If the stencil set ___ (carry) the new code, the nine cartons ___ (go) out right._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about the Homs store?   **A** it was a good decision   **B** the counterfactual is known exactly, which is rare   **C** it reopened'));
out.push(p('**b**  Listen again. **1** What would have happened if somebody had counted the walk-in trade for a week? **2** What does she say most counterfactuals are?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  "If somebody had counted for a week"', [
  ['Nour', 'If the stencils had carried the new code, the nine cartons would have gone out right.'],
  ['Nadia', 'True, and it is a small counterfactual. Try a large one. The Homs store.'],
  ['Nour', 'It opened in 2019 and closed in 2021.'],
  ['Nadia', 'And if somebody had counted the walk-in trade on that street for a week before the lease was signed?'],
  ['Nour', 'We would not have opened it.'],
  ['Nadia', 'How do you know?'],
  ['Nour', 'Because somebody counted it afterwards, in 2020, and the number was about a third of what the plan assumed. ⚠ **So we know what the week\'s counting would have shown, because the counting was eventually done.**'],
  ['Nadia', '⚠ Which makes it one of the very few counterfactuals in this company that is actually known. Most of them are arguments.'],
  ['Nour', 'What is the difference?'],
  ['Nadia', '⚠ **A counterfactual is only worth writing when you know what the other road looked like.** *If we had counted, we would not have opened* — we know, because the count exists. ⚠ *If we had hired somebody else, the shop would have worked* — we do not know, and writing it is a way of being angry on paper.'],
  ['Nour', 'And Mr Ayoub took the decision both times.'],
  ['Nadia', 'He opened it and he closed it, and the closing took him about four months and the opening took him about four years to be willing to talk about. ⚠ **Which is the second thing about a counterfactual: it is an accusation unless the person who took the decision writes it.** The same sentence from him is a lesson. From you it is a complaint, however gently you put it.'],
  ['Nour', 'So who should write mine?'],
  ['Nadia', '⚠ **You should, because you wrote the line.** And that is the only reason the nine-carton counterfactual is useful: *if the line had said* against the order*, Abu Yasser would have found it in four seconds* — ⚠ **and it is you who would have written those three words.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The third conditional — and the two tests before you write one**',
  table(['Form', 'Example'], [
    ['**If** + past perfect, **would have** + participle', '**If** the stencils **had carried** the new code, the nine **would have gone** out right.'],
    ['negative', '**If** we **had counted**, we **would not have opened** it.'],
    ['⚠ *would of*', '~~would of gone~~ — a mis-hearing of *would\'ve*; never write it'],
    ['other modals', 'we **might have** found it · it **could have** been caught'],
    ['the short form', '**If we\'d** asked, **we\'d have** known.'],
  ], [2.3, 3.1]),
  '⚠ **Test one: do you know what the other road looked like?** *If we had counted, we would not have opened* is known, because the count was eventually done. ⚠ *If we had hired somebody else it would have worked* is not known, and writing it is **a way of being angry on paper.**',
  '⚠ **Test two: are you the person who took the decision?** ⚠ **A counterfactual is an accusation unless the person who took the decision writes it.** The same sentence from the decision-taker is a lesson; from anybody else it is a complaint, however gently put.',
  '⚠ **So write your own.** *If the line had said* against the order*, Abu Yasser would have found it in four seconds* — and the three words were yours to write.',
  '⚠ **Keep it to one step back.** A counterfactual that goes two steps — *if we had not opened Homs we would have opened Baghdad Street two years earlier* — is a novel, and nobody can check it.',
  '⚠ *Would have* is /wʊdəv/ in speech. ⚠ **It is never *would of*** — and that spelling in a document about somebody\'s mistake is the sentence a reader quotes afterwards.',
  '**Practise:** Write one counterfactual you know and one you only believe. 1 a wrong code 2 a store that closed 3 a supplier you changed 4 somebody who left 5 a price you held',
  '**Useful phrases:**  if the stencils had carried …  ·  we would not have opened it  ·  do we know what the other road looked like?  ·  who took the decision?  ·  one step back, not two',
  '**Pronunciation – _if we\'d_ and _we\'d have_.** 🔊 **Track 15.4** Listen: _if we\'d counted, we\'d\'ve known_ — two contractions, both light, stress on *counted* and *known*. ⚠ Learners give four heavy syllables to *we would have* and the sentence stops moving. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a counterfactual; B applies the two tests. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'If __________ had __________, __________ would have __________.'],
  ['B', 'Do we know what the other road looked like?'],
  ['A', '__________, because __________.'],
  ['B', 'And who took the decision?'],
  ['A', '__________.'],
  ['B', '⚠ Then __________ should write that sentence, because from anybody else it is __________.'],
  ['A', '⚠ So mine is: if __________ had said __________, __________ would have __________ in __________.'],
]));
out.push(table(['Role card 1 — the two counterfactuals', 'Role card 2 — the one that is an argument'], [[
  '*If the stencils had carried the new code…* — known, small, and the writer took the decision. *If somebody had counted the walk-in trade for a week before the Homs lease…* — ⚠ **known**, because the count was done in 2020 and showed about a third of the plan. ⚠ But Mr Ayoub took that decision, so he is the one who can write it.',
  '*If we had kept the old supplier, the returns would not have risen.* ⚠ Unknown: the old supplier\'s cartons were never used in the new north-door loading, so nobody knows how they would have behaved. **B\'s job is to refuse it and offer the honest version instead:** *we do not know, and the way to find out is to order one pallet of the old carton.*',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the counterfactual, whether it passes each test, and who should write it. ⚠ Then turn the failing one into a question that could be answered.'));
out.push(PHRASE_CARD(['if we\'d counted, we\'d have known', 'do we know the other road?', 'who took the decision?', 'that is anger on paper', 'one step back', 'never "would of"']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **four** counterfactuals from your own work. Apply both tests to each.'));
out.push(table(['The counterfactual', 'Do we know the other road?', 'Who took the decision?', 'Keep or refuse'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 1.4, 1.2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My counterfactual is _______. We _______ know the other road, because _______. The decision was _______, so the person to write it is _______._'));
out.push(p('**Listener task:** count the counterfactuals in the room that fail the second test. ⚠ Then ask what each of them would sound like if the decision-taker said it, and hear the difference.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _if we would have counted_ and _it would of worked_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE NINE CARTONS — THE COUNTERFACTUALS, TESTED. 17 January. N. Mansour.**',
  table(['If…', 'then…', 'Do we know?', 'Whose decision'], [
    ['the line had read *the stencils carry the code on the order*', 'Abu Yasser would have found it in about four seconds', '⚠ **yes** — he found it in four seconds on the 15th when asked', '⚠ **mine**'],
    ['the order had been on the bench beside the stencils', 'he would have had something to mark against', '**yes** — it is how he checks everything else', '**mine**'],
    ['I had known who holds each stencil set', 'I would have asked which code was on that one', 'probably — I ask about everything I know exists', '**mine**'],
    ['Hala had told us the code changed in November', 'the stencil set would have been changed then', '⚠ **no — she sent a note on 14 November and it is in the file**', '⚠ **not hers**'],
  ], [2.2, 2, 2.2, 1]),
  '⚠ **The fourth row is the one I nearly wrote as a finding.** My first draft said *if Baghdad Street had told us the code had changed…* ⚠ **Hala did tell us. The note is dated 14 November and it is in the file, initialled by me.** So the counterfactual is not about her telling us; it is about a note that was read, initialled and filed, and never reached the stencils.',
  '⚠ **And that is a different and worse finding.** A thing nobody was told is a communication failure. ⚠ **A thing everybody was told, in writing, which changed nothing, is a failure of the step between knowing and doing** — and we have no such step. A note about a code arrives, and nothing in the building asks *which objects carry that code?*',
  '**What the three kept rows have in common.** ⚠ **All three are mine, all three are one step back, and all three can be unmade this week.** The fourth row I have struck out, and I have left it on the page struck out, so that nobody writes it again.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row did the writer nearly use as a finding, and why was it wrong?'));
out.push(item('2', 'What is the worse finding that replaced it?'));
out.push(item('3', 'What do the three kept rows have in common?'));
out.push(box('Writer\'s box', [
  '**The counterfactuals, tested — four parts:** **a table: *if · then · do we know? · whose decision*** → ⚠ **the row you nearly wrote, struck out and left on the page** → ⚠ **the worse finding that replaced it** → **what the kept rows have in common.**',
  '⚠ **The *do we know?* column must carry its evidence.** *Yes — he found it in four seconds on the 15th when asked.* ⚠ A bare *yes* is a belief, and this column exists to separate belief from knowledge.',
  '⚠ **Check the file before you write a counterfactual about somebody else.** The commonest finding in a post-mortem is *nobody told us*, and the commonest correction is a dated note, initialled by the person who is complaining.',
  '⚠ **Leave the struck-out row on the page.** ⚠ *So that nobody writes it again.* A removed accusation reappears in the next meeting; a visibly struck-out one with the file reference beside it does not.',
  '⚠ **And say why the corrected finding is worse.** *A thing everybody was told, in writing, which changed nothing, is a failure of the step between knowing and doing.* ⚠ That sentence is the whole value of the page, and it only exists because the first draft was wrong.',
  '⚠ **One step back, and all rows yours.** A table of counterfactuals about other people\'s decisions is a complaint with lines round it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the tested counterfactuals for something that went wrong (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE COUNTERFACTUALS, TESTED. ______________. ______________.**   if ______________ | then ______________ | ⚠ **yes — ______________** | ⚠ **mine**   if ______________ | then ______________ | ______________ | ______________   if ______________ | then ______________ | ⚠ **no — ______________** | ⚠ **not ______________**   ⚠ **The row I nearly wrote as a finding.** My first draft said ______________. ⚠ ______________.   ⚠ **And that is a different and worse finding.** ______________ is ______________; ⚠ ______________ is ______________.   **What the kept rows have in common.** ______________, and I have left the struck-out row on the page so that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **does your *do we know* column carry evidence or a belief?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four columns, including *whose decision*', ''],
  ['Evidence in the *do we know* column', ''],
  ['A row struck out and left visible', ''],
  ['The worse finding, named', ''],
  ['Every kept row one step back and the writer\'s own', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their struck-out row and the file evidence that struck it out. The class says what the note would have caused if it had gone out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a counterfactual at your work that is really an argument (**140 to 180 words**). Say who says it, what it blames, and what would have to be known for it to be a real counterfactual.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every counterfactual pass both tests?_   ? _what would have to be known for the unknown one to be settled?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the arguing counterfactual repeated by somebody who did not take the decision? Usually all three — which is what makes it an argument and not a lesson.'));
out.push(box('Homework', ['Write your final text. Then take one counterfactual you believe about your work, apply both tests honestly, and write what would have to be known for it to be settled (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.3 =======================
out.push(pb());
out.push(h2('15.3  If we had started then, we would have it now'));
out.push(p('**Function:** joining a past omission to a present consequence   ·   **Grammar:** the mixed conditional   ·   **Pronunciation:** the two halves heard as past and present'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing your workplace does not have today because of something nobody did two years ago.'));
out.push(p('**b**  Which half is past and which is present? _If we had started the list in November, we would have it now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the mixed conditional let Nour show?   **A** a cost   **B** that a one-week omission is still costing in January   **C** a date'));
out.push(p('**b**  Listen again. **1** What does the company still not have? **2** What does Mr Attar say about the difference between the two tenses?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  "A week in November and a code in January"', [
  ['Mr Attar', 'Your counterfactual says if the line had read differently, the cartons would have gone out right. That is past and past.'],
  ['Nour', 'It is.'],
  ['Mr Attar', 'Now write the one that is past and **present**. What do you still not have?'],
  ['Nour', '…A list of which objects carry the consignee code. Stencils, rubber stamps, the pre-printed labels, the template on the office machine.'],
  ['Mr Attar', 'And?'],
  ['Nour', 'If somebody had made that list when the code changed in November, we would have it now. ⚠ **And it is January and we still do not have it, which means the next code change will do the same thing again.**'],
  ['Mr Attar', 'That is the sentence. ⚠ **Past and past tells you what happened; past and present tells you what is still true** — and only the second one makes anybody do anything today, because the first one is finished.'],
  ['Nour', 'The first one is more comfortable.'],
  ['Mr Attar', 'The first one is a story and the second one is an outstanding item. ⚠ **A week of somebody\'s time in November would have produced a page that is still missing in January**, and that is the shape of almost every real finding in this kind of work: ⚠ **a small omission, a long time ago, that is still costing.**'],
  ['Nour', 'The Homs store is the same shape.'],
  ['Mr Attar', 'Say it.'],
  ['Nour', 'If somebody had counted the walk-in trade for a week in 2019, we would have about two years of that rent in the business now.'],
  ['Mr Attar', '⚠ **A week against two years.** ⚠ And notice what you have done: you have put a figure on the omission by putting the consequence in the present. **Past and past cannot do that**, because in the past tense the consequence has an end date and the loss looks like 2021.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The mixed conditional — past cause, present consequence**',
  table(['Form', 'Example', 'What it shows'], [
    ['**If** + past perfect, **would** + verb', '**If** we **had made** the list, we **would have** it now.', '⚠ still outstanding'],
    ['past and past', 'If we had made the list, the nine would have gone out right.', 'what happened, finished'],
    ['negative present', 'we **would not be** writing this note', 'the consequence you are inside'],
    ['with a figure', 'we **would have** about two years of that rent **now**', '⚠ puts a number on an omission'],
    ['⚠ the time words', 'a week **in November** → a page missing **in January**', 'name both times'],
  ], [1.9, 2.3, 1.6]),
  '⚠ **Past and past tells you what happened; past and present tells you what is still true.** ⚠ **Only the second makes anybody do anything today**, because the first one is finished and the second is an outstanding item.',
  '⚠ **The present half is where the figure goes.** *We would have about two years of that rent now.* ⚠ In the past tense the consequence has an end date and the loss looks smaller than it is.',
  '⚠ **Name both times in the sentence.** *A week in November* → *a page that is still missing in January.* ⚠ The two dates are what make the sentence an item rather than a reflection.',
  '⚠ **Expect this shape in almost every real finding:** a small omission, a long time ago, that is still costing. ⚠ **The size of the omission and the size of the consequence are almost never related**, and the mixed conditional is the only sentence that shows both at once.',
  '⚠ **And use it on yourself before anybody else.** *If I had made the list in November, we would have it now* is an item. *If somebody had made the list* is a complaint about a building.',
  '**Practise:** Turn each into past-and-present, with both times named. 1 a list nobody made 2 a store that opened 3 a machine nobody serviced 4 a person nobody trained 5 a file nobody indexed',
  '**Useful phrases:**  if we had made it, we would have it now  ·  it is January and we still do not have it  ·  a week against two years  ·  that one is finished; this one is outstanding  ·  name both times',
  '**Pronunciation – the two halves.** 🔊 **Track 15.6** Listen: _if we\'d made the list in noVEMber // we\'d HAVE it NOW_ — the second half slower, and *now* stressed and held. ⚠ The stress on *now* is what tells a listener the item is still open. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a past-and-past counterfactual; B asks for the past-and-present version and the two times. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'That is past and past. Now the one that is past and present. What do you still not have?'],
  ['A', '…__________.'],
  ['B', 'Say it as one sentence.'],
  ['A', 'If __________ had __________ in __________, we would have __________ now.'],
  ['B', '⚠ And what is the figure in the present half?'],
  ['A', '__________.'],
  ['B', '⚠ So __________ against __________ — and that one is outstanding, not finished.'],
]));
out.push(table(['Role card 1 — the code list', 'Role card 2 — the Homs store'], [[
  'Past and past: if the line had read *against the order*, the nine would have gone out right. ⚠ Past and present: **if somebody had made the list of objects carrying the code in November, we would have it now** — and it is January, so the next code change does the same thing again.',
  'Past and past: if somebody had counted the walk-in trade, we would not have opened in 2019. ⚠ Past and present: **if somebody had counted it for a week, we would have about two years of that rent in the business now.** ⚠ A week against two years, and the decision was Mr Ayoub\'s both times.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both versions and the two times. ⚠ Then say which version a reader would act on today, and why the other one is more comfortable to write.'));
out.push(PHRASE_CARD(['we would have it now', 'it is January and we still do not', 'a week against two years', 'finished, or outstanding?', 'name both times', 'put the figure in the present half']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things your workplace still does not have. Write each as a mixed conditional with both times and a figure.'));
out.push(table(['What we still do not have', 'The omission, and when', 'The present consequence, with a figure', 'Still open?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.5, 2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If _______ had _______ in _______, we would have _______ now. It is _______ and we still do not, which means _______._'));
out.push(p('**Listener task:** count the items in the room that are still open. ⚠ Then ask how long each omission would have taken at the time — usually days, against consequences measured in months.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _if we would have made the list_ and a past-and-past sentence offered as an outstanding item. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT WE STILL DO NOT HAVE, AND WHAT IT WOULD HAVE COST TO HAVE IT. 17 January. N. Mansour.**',
  table(['The omission, and when', 'What we would have now', 'What it would have taken then', 'Still open?'], [
    ['nobody listed the objects carrying the consignee code, November', '⚠ **a one-page list: stencils, stamps, labels, the office template**', '⚠ **about two hours**', '⚠ **yes — and the next change repeats the nine cartons**'],
    ['nobody counted the walk-in trade on the Homs street, 2019', 'about two years of that rent in the business', '**one week of one person**', 'closed — the store shut in 2021'],
    ['nobody indexed the pre-2011 files when we moved to Mezzeh', 'the ability to answer a query older than fourteen years in minutes', 'about three weeks, with four people', 'yes — and it grows'],
    ['nobody wrote down who holds each key', 'a list; four sets exist and three hang on one board', 'twenty minutes', '⚠ **yes — Lina found this in her first week**'],
  ], [2.2, 2.2, 1.3, 2]),
  '⚠ **Read the third column against the first.** Two hours, one week, three weeks, twenty minutes. ⚠ **Nothing on this page would have taken longer than a month and three of the four are still outstanding**, which means the reason they were not done is not that they were large.',
  '⚠ **Why they were not done.** None of them was anybody\'s job, none of them had a date, and every one of them was obvious to somebody. ⚠ **The key list was found by a trainee in her first week, which means it was visible from the door** — and four people have walked past it every day for four years.',
  '**So the honest heading for this page is not *what went wrong*.** ⚠ It is **what is still wrong, and what it would have cost to fix at the time** — and the first row is the one that produced the nine cartons, at a price of about two hours in November.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do the four entries in the third column have in common?'));
out.push(item('2', 'What three reasons does the writer give for them not being done?'));
out.push(item('3', 'Why does the writer say the honest heading is not *what went wrong*?'));
out.push(box('Writer\'s box', [
  '**What we still do not have — four parts:** **a table: *the omission and when · what we would have now · what it would have taken then · still open?*** → ⚠ **the third column read against the first** → **why they were not done** → ⚠ **the honest heading.**',
  '⚠ **The third column is the one that changes minds.** *Two hours. One week. Three weeks. Twenty minutes.* ⚠ A reader who sees that nothing on the page would have taken a month stops treating the list as a wish and starts treating it as a backlog.',
  '⚠ **Mark which are still open.** A closed one — a store that shut — belongs on the page as history; an open one is work, and the two must not be mixed silently.',
  '⚠ **Give the three real reasons, which are almost always the same three:** it was nobody\'s job, it had no date, and it was obvious to somebody. ⚠ **Obvious to somebody is the one to dwell on**, because it means the information was never the problem.',
  '⚠ **Name who found it, if it was not you.** *Lina found this in her first week, which means it was visible from the door.* ⚠ It is the most uncomfortable sentence available and it is the one that gets the twenty minutes spent.',
  '⚠ **Then correct your own heading.** *What is still wrong, and what it would have cost to fix at the time.* ⚠ A page headed *what went wrong* is read as history; this heading is read as a list of things to do.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what we still do not have* for your own workplace (**60 words or more**). Use the frame.'));
out.push(p('**WHAT WE STILL DO NOT HAVE, AND WHAT IT WOULD HAVE COST TO HAVE IT. ______________. ______________.**   ______________, ______________ | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ______________, ______________ | ______________ | ______________ | ______________   ______________, ______________ | ______________ | ______________ | ______________   ⚠ **Read the third column against the first.** ______________. ⚠ ______________.   ⚠ **Why they were not done.** None of them was ______________, none had ______________, and every one was ______________. ⚠ ______________ was found by ______________, which means ______________.   **So the honest heading is not *what went wrong*.** ⚠ It is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **how long would the longest of these have taken at the time?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what it would have taken then* figure for every row', ''],
  ['Open and closed marked separately', ''],
  ['The third column read against the first', ''],
  ['The three reasons, including *obvious to somebody*', ''],
  ['The corrected heading', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their third column. The class says whether anything on the page was ever large.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about one thing your workplace still does not have (**140 to 180 words**). Say what it would have taken, when, who it was obvious to, and what it has cost since.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the present half really present?_   ? _how long would it have taken, and who knew?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the fix have taken less than a week? Usually all three — ⚠ **and in all three it is still not done**, which is the finding and not the coincidence.'));
out.push(box('Homework', ['Write your final text. Then write one mixed conditional about your own work, with both times named and a figure in the present half, and give it a date and a name (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.4 =======================
out.push(pb());
out.push(h2('15.4  The apology that names the thing'));
out.push(p('**Function:** apologising so that it is believed   ·   **Grammar:** the apology + the fact · active voice, named agent   ·   **Pronunciation:** the apology said without the rising defence at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of an apology you have received that annoyed you. Say what was missing from it.'));
out.push(p('**b**  Which names the thing? _Mistakes were made. · We apologise for any inconvenience. · Nine of your twenty-four cartons carried the wrong consignee code._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Tannous say she wants?   **A** money   **B** to know exactly what happened and who is doing what about it   **C** an apology'));
out.push(p('**b**  Listen again. **1** What three things does she say the first letter did not tell her? **2** What does she say she will do with the second letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  "I have to tell my own customer something"', [
  ['Nour', 'Ms Tannous — I am telephoning about the nine cartons. We are very sorry for the inconvenience caused.'],
  ['Buyer', 'Thank you. May I tell you what that sentence does not tell me?'],
  ['Nour', 'Please.'],
  ['Buyer', 'It does not tell me **what happened**, it does not tell me **whether it will happen on the next order**, and it does not tell me **what to say to my own customer**, who is the person actually waiting.'],
  ['Nour', 'The stencils at our second store carried a consignee code we stopped using in November. Nine cartons were marked from that set before anybody noticed.'],
  ['Buyer', 'Thank you. That I can use. Who noticed?'],
  ['Nour', 'Your agent, at the port.'],
  ['Buyer', '⚠ So nobody at your end noticed at all, which is worse and is also the useful fact. And the next order?'],
  ['Nour', 'The line on our programme asked whether the stencils were on the bench. It now asks whether they carry the code on the order, and the order goes on the bench beside them. ⚠ **And we are making a list of every object in the company that carries that code, which we should have had in November.**'],
  ['Buyer', 'Now I have a letter I can forward. ⚠ **That is what I need: not an apology to me, but a page I can send to the person who is cross with me.**'],
  ['Nour', 'And the two days?'],
  ['Buyer', 'The two days are gone and nothing you say will bring them back. ⚠ **Do not offer me a discount; offer me the sentence about the list.** A discount tells me you want the matter closed. ⚠ **The list tells me the next consignment is safe, and the next consignment is worth more to me than the discount.**'],
  ['Nour', 'May I put that in writing today?'],
  ['Buyer', '⚠ Put it in writing in **forty words**, because I am going to forward it, and a long letter reads like a company that is frightened.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The apology that names the thing**',
  table(['Instead of', 'Write'], [
    ['~~Mistakes were made.~~', 'Nine cartons were marked from the old stencil set.'],
    ['~~We apologise for any inconvenience.~~', 'I am sorry. Your customer had them two days late.'],
    ['~~Steps are being taken.~~', 'The line now reads *carry the code on the order*, and the order goes on the bench.'],
    ['~~It will not happen again.~~', '⚠ **We are listing every object that carries the code.**'],
    ['~~Please accept a discount.~~', '⚠ **offer the remedy, not the money — unless they ask**'],
  ], [2.1, 3.1]),
  '⚠ **Three things an apology must contain**, and *sorry* is only one of them: **what happened** · **what has changed so that it does not happen again** · ⚠ **something the reader can forward to the person who is actually cross.**',
  '⚠ **Name the thing in the first sentence, in the active voice, with a number.** *Nine of twenty-four cartons carried the consignee code we stopped using in November.* ⚠ A reader who has to read three paragraphs to find out what happened assumes you were hoping they would not.',
  '⚠ **Say who noticed, even when the answer is humiliating.** *Your agent, at the port.* ⚠ *Nobody at your end noticed at all, which is worse and is also the useful fact* — because it tells them precisely what the repair has to cover.',
  '⚠ **Offer the remedy before the money.** *A discount tells me you want the matter closed; the list tells me the next consignment is safe.* ⚠ **A discount offered early buys the closing of a conversation you need to keep having.**',
  '⚠ **Keep it short, because it is going to be forwarded.** ⚠ *A long letter reads like a company that is frightened*, and forty words is the length of a page somebody can send on without editing it.',
  '**Practise:** Rewrite each so that it names the thing. 1 mistakes were made 2 we apologise for the delay 3 steps are being taken 4 this is not our usual standard 5 we value your custom',
  '**Useful phrases:**  I am sorry.  ·  what happened was …  ·  who noticed was …  ·  what has changed is …  ·  you can forward this  ·  not a discount — the list',
  '**Pronunciation – no rise at the end.** 🔊 **Track 15.8** Listen: _I am sorry. Nine cartons carried the old code._ ⚠ Both sentences fall. A rise at the end of an apology sounds like the beginning of an explanation, and the listener braces for an excuse. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A apologises in the usual way; B says what the sentence does not tell them. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ — I am telephoning about __________. We are very sorry for __________.'],
  ['B', 'Thank you. May I tell you what that sentence does not tell me? It does not tell me __________, __________, or __________.'],
  ['A', '__________ happened because __________.'],
  ['B', 'Thank you. That I can use. Who noticed?'],
  ['A', '__________.'],
  ['B', '⚠ And the next one?'],
  ['A', '__________ now __________, and we are __________, which we should have had in __________.'],
]));
out.push(table(['Role card 1 — Ms Tannous', 'Role card 2 — the customer who wants money'], [[
  '"We are very sorry for the inconvenience caused." ⚠ B wants: what happened, whether it recurs, and ⚠ **a page to forward to the person who is actually waiting.** B refuses a discount and asks for the sentence about the list, in forty words.',
  'A customer who interrupts with *what are you going to do about the price?* ⚠ B\'s job is to give the remedy first and the money second, and to say plainly: *I will come to the invoice. First, here is what happened and what has changed, because you will be asked.* **The money is easier to discuss once the facts are on the table.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the three things the first apology did not say, and the sentences that replaced them. ⚠ Then say which sentence the customer said they could forward.'));
out.push(PHRASE_CARD(['I am sorry.', 'what happened was …', 'who noticed was …', 'what has changed is …', 'you can forward this', 'the list, not the discount']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** apologies you have sent or received. Write what each named and what it left out.'));
out.push(table(['The apology', 'What happened — named?', 'What changed — named?', 'Forwardable?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.3, 1.3, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The apology said _______. It did not name _______. What the reader needed to forward was _______._'));
out.push(p('**Listener task:** count the apologies in the room that could have been forwarded by the person who received them. ⚠ It is usually none — and that is the single most useful test in this cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _mistakes were made_ and _we apologise for any inconvenience caused_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two letters, and answer the questions.'));
out.push(box(null, [
  '**TO MS M. TANNOUS, BEIRUT — THE APOLOGY, WRITTEN TWICE. 16 January.**',
  '**Version 1, which I did not send (62 words).** _Dear Ms Tannous, We were very sorry to learn of the difficulty with the recent consignment. Mistakes were made in the marking process and steps are being taken to ensure that this does not happen again. We greatly value your custom and apologise for any inconvenience caused. As a gesture of goodwill we are pleased to offer a discount of five per cent on your next order._',
  '⚠ **What is wrong with it.** It does not say **what happened** — a reader cannot tell from it whether we sent the wrong goods, the wrong papers or the wrong address. It does not say **who noticed**. The remedy is *steps are being taken*, which is not a remedy. ⚠ **And it offers money in the fourth sentence, which tells the reader that the writer wants the matter closed.**',
  '**Version 2, which I sent (41 words).** _Dear Ms Tannous, I am sorry. Nine of your twenty-four cartons were marked from a stencil set at our second store carrying the consignee code we stopped using in November. Your agent found it at the port; nobody here did. Our programme line now reads "the stencils carry the code on the order", and the order is put on the bench beside them. I am also listing every object in the company that carries that code — we should have had that list in November. Please forward this if it helps._',
  '⚠ **What version 2 does that version 1 does not.** It names the thing with a number in the first line. It admits that the customer\'s own agent found it. ⚠ **It gives a remedy you could check** — a line of text you could ask to see. And it ends with the one sentence that makes it useful to her: ⚠ ***please forward this if it helps.***',
  '⚠ **And the money.** It is not mentioned. ⚠ **She asked me not to offer it**, and she gave the reason: *a discount tells me you want the matter closed; the list tells me the next consignment is safe.* **The invoice conversation happened a week later and took four minutes.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Name three things version 1 does not tell the reader.'));
out.push(item('2', 'What is the one sentence that makes version 2 useful to her?'));
out.push(item('3', 'Why is the discount not mentioned?'));
out.push(box('Writer\'s box', [
  '**The apology, written twice — four parts:** **version 1, unsent** → ⚠ **what is wrong with it, item by item** → **version 2, sent, with its word count** → ⚠ **what version 2 does that version 1 does not, and the money.**',
  '⚠ **Name the thing in the first line, with a number, in the active voice.** *Nine of your twenty-four cartons were marked from a stencil set carrying the code we stopped using in November.*',
  '⚠ **Admit who found it.** *Your agent found it at the port; nobody here did.* ⚠ It is the sentence the writer most wants to leave out and the one that makes everything else on the page credible.',
  '⚠ **Give a remedy somebody could check.** A line of text, a column on a sheet, a list with a date. ⚠ ***Steps are being taken* is not a remedy**; it is a promise with nothing in it, and every reader has had it before.',
  '⚠ **End with *please forward this if it helps*.** ⚠ The reader almost always has somebody of their own who is cross, and a page they can send on without editing is worth more to them than sympathy.',
  '⚠ **Hold the money back unless they raise it.** ⚠ *A discount tells me you want the matter closed.* The remedy first, the invoice afterwards — and the invoice conversation is shorter once the facts are agreed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an apology twice for something that went wrong at your work (**60 words or more** in total). Use the frame.'));
out.push(p('**TO ______________ — THE APOLOGY, WRITTEN TWICE. ______________.**   **Version 1, which I did not send.** _We were very sorry to learn of ______________. Mistakes were made in ______________ and steps are being taken ______________._   ⚠ **What is wrong with it.** It does not say ______________. It does not say ______________. The remedy is ______________, which is not a remedy.   **Version 2, which I sent.** _I am sorry. ______________ was ______________ because ______________. ______________ found it; ______________. ______________ now ______________. I am also ______________ — we should have had that in ______________. Please forward this if it helps._   ⚠ **What version 2 does.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person your reader has to answer to** — then ask one question: **could this be forwarded without editing?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The thing named in the first line, with a number', ''],
  ['Who found it — including if it was them', ''],
  ['A remedy somebody could check', ''],
  ['*Please forward this if it helps*', ''],
  ['No money offered unless they raised it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read version 1 and version 2. The class says which one it would forward and which one it would file.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an apology you received that did not name the thing (**140 to 180 words**). Say what you could not tell from it, what you did next, and what it cost the people who sent it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the thing named with a number?_   ? _what could the reader not tell, and what did they do about it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the unnamed thing make the reader assume something worse than the truth? Usually two of three — ⚠ **an unnamed fault is filled in by the reader, and the reader is not generous.**'));
out.push(box('Homework', ['Write your final text. Then take one apology you owe and write it in forty words: the thing named with a number, who found it, what has changed, and *please forward this if it helps* (60+ words with the draft).'], C.lblue, C.navy));

// ======================= CYCLE 15.5 =======================
out.push(pb());
out.push(h2('15.5  I wish we had — and when a wish is an excuse'));
out.push(p('**Function:** wishing, and telling a wish from an excuse   ·   **Grammar:** _I wish_ + past perfect; _if only_   ·   **Pronunciation:** the wish said without self-pity'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one *I wish we had…* about your work. Then say whether the thing you wish for was in your power.'));
out.push(p('**b**  Which is a wish and which is an excuse? _I wish we had made the list in November. · I wish somebody had told me. · I wish the code had not changed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about two of Nour\'s three wishes?   **A** they are ungrammatical   **B** two of them are excuses because the thing wished for was somebody else\'s doing   **C** they are too late'));
out.push(p('**b**  Listen again. **1** What is the test Nadia gives? **2** Which of the three wishes survives it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  "Three wishes, and one of them is yours"', [
  ['Nour', 'I wish the code had not changed in November. I wish somebody had told me which stencil set was where. And I wish I had written the line properly.'],
  ['Nadia', 'Three wishes. Put them through one test: ⚠ **was the thing you wish for in your power at the time?**'],
  ['Nour', 'The code changing — no. That was the freight agent\'s requirement, not ours.'],
  ['Nadia', 'So that one is not a wish, it is weather. What does a reader do with it?'],
  ['Nour', 'Nothing. ⚠ It explains why the thing was difficult and it asks to be forgiven.'],
  ['Nadia', 'Second.'],
  ['Nour', '*I wish somebody had told me which stencil set was where.* …That is not true. Hala sent a note on 14 November and I initialled it.'],
  ['Nadia', 'So that one is worse than weather. ⚠ **It is a wish that is contradicted by a document with your initials on it** — and the document is in a file that an auditor reads.'],
  ['Nour', 'And the third is mine.'],
  ['Nadia', '*I wish I had written the line properly.* ⚠ In your power, at the time, by you, and it would have taken three words. ⚠ **That is a wish. The other two are an excuse and an error.**'],
  ['Nour', 'Is it worth writing at all, though? It is the same thing as *I should have*.'],
  ['Nadia', 'Nearly, and there is one difference worth the trouble. ⚠ ***I should have* is a judgement and *I wish I had* is a regret** — and a regret belongs in a sentence to a person and not in a report. ⚠ **Write *I should have* to Mr Ayoub and *I wish I had* to Ms Tannous**, once, and then never again in the same letter.'],
  ['Nour', 'Why never again?'],
  ['Nadia', '⚠ **Because a second wish in the same letter turns an apology into a performance**, and the reader starts managing your feelings instead of reading your remedy. One wish, one sentence, then the facts.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_I wish_ + past perfect — and the test that sorts a wish from an excuse**',
  table(['Form', 'Example', 'Verdict'], [
    ['**I wish** + past perfect', '**I wish I had written** the line properly.', '⚠ **a wish — it was in my power**'],
    ['**if only** + past perfect', '**If only I had asked** which code.', 'the same, stronger'],
    ['⚠ wishing about the world', '~~I wish the code had not changed.~~', '⚠ **weather — asks to be forgiven**'],
    ['⚠ wishing about others', '~~I wish somebody had told me.~~', '⚠ **an excuse — and check the file first**'],
    ['present wish', 'I **wish** we **had** the list now.', 'the outstanding item of 15.3'],
  ], [1.8, 2.3, 1.8]),
  '⚠ **The test is one question: was the thing you wish for in your power at the time?** If not, it is not a wish — ⚠ **it is weather, and it asks the reader to forgive you instead of giving them anything to do.**',
  '⚠ **Before wishing that somebody had told you, look in the file.** ⚠ *A wish contradicted by a document with your initials on it* is the worst sentence in this unit, and a file is read by people who are looking for exactly that.',
  '⚠ ***I should have* is a judgement; *I wish I had* is a regret.** ⚠ **Write the judgement to your own side and the regret to the person you have let down** — and the regret goes once, in one sentence.',
  '⚠ **One wish per letter.** ⚠ *A second wish turns an apology into a performance*, and the reader starts managing your feelings instead of reading your remedy.',
  '⚠ **Never let a wish stand where a remedy should be.** *I wish we had the list* is honest and does nothing. *I am making the list; it will be on the wall by Friday* is the sentence that belongs on the page.',
  '**Practise:** Put each through the test and say wish, weather or excuse. 1 I wish we had counted 2 I wish the rate had held 3 I wish he had told me 4 I wish I had asked 5 I wish the store had worked',
  '**Useful phrases:**  I wish I had …  ·  was it in my power?  ·  that is weather  ·  check the file first  ·  one wish, one sentence  ·  then the facts',
  '**Pronunciation – the wish without self-pity.** 🔊 **Track 15.10** Listen: _I wish I\'d written it properly._ ⚠ Level, falling, and no pause before the next sentence. A pause after a wish invites consolation, which is the opposite of what the letter is for. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers three wishes; B applies the test and names each one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I wish __________. I wish __________. And I wish __________.'],
  ['B', 'One test: ⚠ was the thing you wish for in your power at the time?'],
  ['A', '__________ — no. That was __________.'],
  ['B', 'So that one is weather. What does a reader do with it?'],
  ['A', 'Nothing. ⚠ It asks to be __________.'],
  ['B', 'Second.'],
  ['A', '__________. …That is not true. ⚠ __________ on __________ and I __________ it.'],
]));
out.push(table(['Role card 1 — the three wishes', 'Role card 2 — the wish in place of a remedy'], [[
  '*I wish the code had not changed* — weather. *I wish somebody had told me which stencil set was where* — ⚠ **an excuse, and contradicted by a note dated 14 November, initialled.** *I wish I had written the line properly* — a wish: in A\'s power, three words, at the time.',
  'A keeps saying *I wish we had a list of these things*. ⚠ B\'s job is to accept it once and then refuse it: **a wish in place of a remedy is the most comfortable sentence in business writing.** The replacement: *I am making the list; it will be on the wall by Friday* — with a date and a name.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three wishes and the verdict on each. ⚠ Then rewrite the weather one as a fact and the excuse one as what the file actually says.'));
out.push(PHRASE_CARD(['I wish I had …', 'was it in my power?', 'that is weather', 'check the file first', 'one wish, one sentence', 'a remedy, not a wish']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **five** wishes about your own work. Apply the test and give the verdict, then the replacement sentence.'));
out.push(table(['The wish', 'In my power?', 'Wish, weather or excuse', 'The replacement sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 0.9, 1.3, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wish _______. It was / was not in my power, so it is a _______. The replacement sentence is _______._'));
out.push(p('**Listener task:** count the wishes in the room that were weather. ⚠ Then ask what each of them was doing in a document — and the honest answer is usually *asking to be forgiven*.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I wish I would have asked_ and a wish standing where a remedy should be. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE THREE WISHES, TESTED — AND WHAT I FOUND IN THE FILE. 17 January. N. Mansour.**',
  table(['The wish', 'In my power at the time?', 'Verdict', 'What goes in the document instead'], [
    ['I wish the consignee code had not changed in November.', 'no — the freight agent\'s requirement', '⚠ **weather**', 'The code changed in November at the agent\'s requirement. _(a fact, not a wish)_'],
    ['I wish somebody had told me which stencil set was where.', '⚠ **they did**', '⚠ **an excuse, contradicted by the file**', '⚠ **Hala\'s note of 14 November, initialled by me, says the old set is at Baghdad Street.**'],
    ['I wish I had written the line properly.', 'yes — three words, by me, on the 8th', '**a wish**', 'I wish I had written it properly. _(once, to Ms Tannous)_'],
  ], [2.1, 1.6, 1.4, 2.6]),
  '⚠ **The middle row is the reason this page exists.** I said *I wish somebody had told me* out loud twice on the 15th and I believed it. ⚠ **Hala\'s note is dated 14 November, it is in the file, and my initials are on it** — and an auditor reading the file would have found that before finding anything else.',
  '⚠ **What my initials on that note mean.** They mean I read it. ⚠ **They do not mean I did anything, and nothing in our system expects them to** — a note arrives, it is initialled, it is filed, and no step asks *which objects does this change?* **So the initial is a record of reading and we have been treating it as a record of acting.**',
  '**And the one surviving wish goes once, in one sentence, to one person.** ⚠ *I wish I had written it properly* — to Ms Tannous, in the letter, and nowhere else. ⚠ **It is not in the report to Mr Ayoub**, because a report is for deciding and a regret in it only invites somebody to be kind to me, which costs the company a finding.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the writer say the middle row is the reason the page exists?'));
out.push(item('2', 'What do the writer\'s initials on the November note actually mean?'));
out.push(item('3', 'Where does the surviving wish go, and where does it not go?'));
out.push(box('Writer\'s box', [
  '**The wishes, tested — four parts:** **a table: *the wish · in my power? · verdict · what goes in the document instead*** → ⚠ **the row the file contradicted** → ⚠ **what your initials actually mean** → **where the surviving wish goes, and where it does not.**',
  '⚠ **Test every wish before you write it, and look in the file for the ones about other people.** ⚠ *I said it out loud twice and I believed it* — belief is not evidence about a document that exists.',
  '⚠ **Turn weather into a fact.** *The code changed in November at the agent\'s requirement.* ⚠ The same information, with nothing in it asking to be forgiven, and it belongs in the report.',
  '⚠ **When the file contradicts you, print the file.** Date, author, and whose initials. ⚠ **It is the most uncomfortable row on any post-mortem page and it is the one that produces the real finding** — here, that an initial records reading and not acting.',
  '⚠ **Name the gap the file reveals.** *A note arrives, it is initialled, it is filed, and no step asks which objects this changes.* ⚠ A missing step is a finding; a missing memory is not.',
  '⚠ **One wish, one sentence, one reader.** ⚠ **Not in the internal report** — *a report is for deciding, and a regret in it invites somebody to be kind to me, which costs the company a finding.*',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Test your own wishes about something that went wrong (**60 words or more**). Use the frame.'));
out.push(p('**THE WISHES, TESTED — AND WHAT I FOUND IN THE FILE. ______________. ______________.**   I wish ______________ | ______________ | ⚠ **weather** | ______________ _(a fact, not a wish)_   I wish ______________ | ⚠ **______________** | ⚠ **an excuse, contradicted by ______________** | ⚠ **______________**   I wish ______________ | yes — ______________ | **a wish** | ______________ _(once, to ______________)_   ⚠ **The row the file contradicted.** I said ______________ and I believed it. ⚠ ______________.   ⚠ **What that tells me.** ______________ means ______________. It does not mean ______________, and ______________.   **The surviving wish goes to ______________ and not into ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be somebody reading the file a year later** — then ask one question: **is there a document that contradicts any of these wishes?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every wish tested for *in my power*', ''],
  ['Weather turned into a fact', ''],
  ['The file checked, and printed where it contradicts', ''],
  ['The missing step named', ''],
  ['One wish, one sentence, one reader', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their excuse row and what the file said. The class says what would have happened if the excuse had gone out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you believed something had not been communicated and it had (**140 to 180 words**). Say where the document was, what your part in it had been, and what you changed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is every wish within the writer\'s power?_   ? _what did the document say, and who had read it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the writer themselves read the document? Usually two of three — ⚠ **and reading is not acting, which is the finding in all of them.**'));
out.push(box('Homework', ['Write your final text. Then take one *I wish somebody had told me* of your own, look in the file, and write down what you find (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.6 =======================
out.push(pb());
out.push(h2('15.6  The five-part post-mortem'));
out.push(p('**Function:** writing the report somebody can act on   ·   **Grammar:** the five parts — what happened · what it cost · why · what changes · who owns it   ·   **Pronunciation:** reading a post-mortem aloud in two minutes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a report about something that went wrong at your work. Which of the five parts did it have?'));
out.push(p('**b**  Put these five in order: _why it happened · who owns each change · what it cost · what happened · what changes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which part does Mr Ayoub say is always missing?   **A** what happened   **B** who owns each change, with a date   **C** the cost'));
out.push(p('**b**  Listen again. **1** What does he say happens to a post-mortem without the fifth part? **2** What does he say about the length?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  "The fifth part is the only one that does anything"', [
  ['Mr Ayoub', 'Read me the five headings.'],
  ['Nour', 'What happened. What it cost. Why. What changes. Who owns each change.'],
  ['Mr Ayoub', 'And which of the five is missing from every post-mortem I have ever been given?'],
  ['Nour', 'The fifth.'],
  ['Mr Ayoub', 'The fifth, with a date on it. ⚠ **A report with four parts is a good read and nothing happens.** I have a drawer of them. Each one explains an event beautifully and not one of them has a line that says *Bassel, by the 24th.*'],
  ['Nour', 'Mine has four changes and I have put my own name against three of them.'],
  ['Mr Ayoub', 'Show me the fourth.'],
  ['Nour', '*A list of every object carrying the consignee code* — and I have put Lina against it, by the 24th, because it is two hours and she will do it properly and she does not know enough to leave anything off.'],
  ['Mr Ayoub', '⚠ That last reason is the best sentence in your report and you have put it in brackets. A person who does not know what matters ⚠ **cannot skip the thing that matters**, which is why a new person is the right one for an inventory.'],
  ['Nour', 'And the cost section. I have written the two days and the agent\'s re-marking charge.'],
  ['Mr Ayoub', 'And our own cost?'],
  ['Nour', '…About four hours of my time and three of Abu Yasser\'s, and a telephone call I will remember for a while.'],
  ['Mr Ayoub', '⚠ **Put the four hours in and leave the telephone call out.** The hours are a figure somebody can weigh against two hours in November. The feeling is yours and it does not belong in a document that will be read in 2029.'],
  ['Nour', 'How long should it be?'],
  ['Mr Ayoub', '⚠ **One page, and the fifth part is a third of it.** If the *why* section is longer than the *who owns it* section, you have written an essay about yourself.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The five-part post-mortem**',
  table(['Part', 'What goes in it', 'The common failure'], [
    ['**1 What happened**', 'the facts, in order, with figures', 'begins with the explanation'],
    ['**2 What it cost**', 'their cost first, then yours in hours', 'omits your own hours'],
    ['**3 Why**', 'the root cause and the contributing decision', '⚠ **longest section — an essay**'],
    ['**4 What changes**', 'the lines, columns and lists that change', '*we will be more careful*'],
    ['⚠ **5 Who owns each change**', '⚠ **a name and a date per change**', '⚠ **missing entirely**'],
  ], [1.5, 2.2, 2]),
  '⚠ **A report with four parts is a good read and nothing happens.** ⚠ *I have a drawer of them. Each one explains an event beautifully and not one has a line that says* Bassel, by the 24th.',
  '⚠ **One page, and the fifth part is a third of it.** ⚠ *If the *why* section is longer than the *who owns it* section, you have written an essay about yourself.*',
  '⚠ **Cost: theirs first, in their units; then yours, in hours.** The two days and the re-marking charge, then *four hours of my time and three of Abu Yasser\'s.* ⚠ **Your hours are what let a reader weigh the repair against the fault** — two hours in November against seven in January.',
  '⚠ **Leave your feelings out.** *The hours are a figure somebody can weigh; the feeling is yours and it does not belong in a document that will be read in 2029.*',
  '⚠ **Give a reason for each owner, not just a name.** ⚠ *Lina, because she does not know enough to leave anything off* — **a person who does not know what matters cannot skip the thing that matters**, which is why a new person is the right one for an inventory.',
  '**Practise:** Say the five headings from memory, then fill them for something that went wrong last month. ⚠ Time yourself on part 3 and stop at ninety seconds.',
  '**Useful phrases:**  what happened · what it cost · why · what changes · who owns it  ·  a name and a date  ·  theirs first, then mine in hours  ·  one page  ·  by the 24th',
  '**Pronunciation – the two-minute post-mortem.** 🔊 **Track 15.12** Listen to the five parts read aloud in two minutes: ⚠ the first four are brisk and the fifth is slow, because the fifth contains names and dates that somebody is writing down. Repeat the fifth part four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a four-part post-mortem; B asks for the fifth part, with names, dates and reasons. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Read me the five headings.'],
  ['A', '__________. __________. __________. __________. __________.'],
  ['B', 'And which is missing from yours?'],
  ['A', '…The __________.'],
  ['B', 'With a date on it. Who owns __________?'],
  ['A', '__________, by the __________, because __________.'],
  ['B', '⚠ And that reason is the best line in your report. Is the *why* section longer than the *who owns it* section?'],
]));
out.push(table(['Role card 1 — the nine cartons', 'Role card 2 — your own'], [[
  'Four changes: the programme line reworded (Nour, the 18th); the order put on the bench (Abu Yasser, the 18th); the three other presence-only lines reworded (Nour, the 20th); ⚠ **the list of objects carrying the code (Lina, the 24th, because she does not know enough to leave anything off).**',
  'Use something from your own work. ⚠ B\'s job is to refuse any change with no name, any name with no date, and any *why* section longer than the fifth part. **Most four-part reports collapse to five lines once the fifth part is written, and the five lines are the whole value.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the fifth part only: each change, its owner, its date and the reason for that owner. ⚠ Then say which change will actually happen.'));
out.push(PHRASE_CARD(['what happened · cost · why · changes · owner', 'a name and a date', 'theirs first, then my hours', 'one page', 'by the 24th', 'and the reason for the owner']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the fifth part for something that went wrong at your work: **four** changes, each with an owner, a date and a reason for that owner.'));
out.push(table(['The change', 'Owner', 'By when', 'Why that person'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 0.9, 0.9, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My four changes are _______. The one I am least confident will happen is _______, and the reason is _______._'));
out.push(p('**Listener task:** count the changes in the room whose owner is the writer. ⚠ Then ask which of them have dates — because a change you own with no date is the commonest way a post-mortem dies.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we will be more careful in future_ and a change with no owner. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the post-mortem, and answer the questions.'));
out.push(box(null, [
  '**POST-MORTEM — THE NINE CARTONS, TANNOUS TRIAL CONSIGNMENT. 18 January. N. Mansour. ⚠ One page. Part 5 is a third of it.**',
  '**1 What happened.** Twenty-four cartons were marked for export on 9 January from the stencil set held at Baghdad Street. Nine were marked before the set was changed. **That set carried the consignee code withdrawn in November.** Nobody here noticed. Ms Tannous\'s agent found it at the port on the 13th and re-marked the nine. **Her customer received them on the 17th instead of the 15th.**',
  '**2 What it cost.** Hers: **two days** to her customer, and the agent\'s re-marking charge of about 140,000. Ours: **about four hours of my time and three of Abu Yasser\'s**, and one telephone call to the customer. ⚠ **Against about two hours in November, which is what the list would have taken.**',
  '**3 Why.** The programme line read *how you will know: the stencils are on the bench.* They were on the bench. ⚠ **The control tested presence and not correctness**, and three other lines on the same page have the same fault. The contributing decision was mine: I wrote the column on 8 January and I checked each line for whether a thing would be **there**. ⚠ **Hala\'s note of 14 November, initialled by me, says which set is at Baghdad Street — so this was not a failure of information.** It was a failure of the step between a note arriving and an object changing, and we have no such step.',
  '⚠ **4 What changes.** (a) The line now reads *the stencils carry the code on the order*, and the order goes on the bench beside them. (b) The three other presence-only lines are reworded the same way. (c) **A one-page list of every object that carries the consignee code** — stencils, stamps, pre-printed labels, the office template. (d) ⚠ **When a note changes a code, the person who initials it writes on it which objects it affects, before filing.**',
  '⚠ **5 Who owns each change.** (a) **N. Mansour, 18 January — done.** (b) **N. Mansour, 20 January.** (c) ⚠ **L. Barakat, 24 January** — two hours, and ⚠ **because she does not know enough to leave anything off.** (d) **K. Ayoub to decide, 24 January** — it changes how every note in the company is filed and it is not mine to impose.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was the root cause, and how many other lines share the fault?'));
out.push(item('2', 'Why is change (c) given to Lina?'));
out.push(item('3', 'Why is change (d) given to Mr Ayoub rather than to the writer?'));
out.push(box('Writer\'s box', [
  '**The five-part post-mortem — and the three places it goes wrong:** **begin with what happened and not with why** → **cost: theirs first in their units, yours in hours** → ⚠ **why: the root cause, the contributing decision, and *this was not a failure of information* where that is true** → **what changes, lettered** → ⚠ **who owns each change, with a date and a reason.**',
  '⚠ **Put your own hours next to the hours it would have taken to prevent it.** *About seven hours in January against about two in November.* ⚠ **That comparison is the only argument that gets the next two-hour job done.**',
  '⚠ **Letter the changes and keep the letters in part 5.** (a) (b) (c) (d) in both parts means a reader can check in four seconds that every change has an owner.',
  '⚠ **Say *done* where it is done, with the date.** One change already made, printed as done, is what makes the other three credible.',
  '⚠ **Give the reason for the owner.** ⚠ *Because she does not know enough to leave anything off.* A name with no reason reads as whoever was available; a name with a reason reads as a decision.',
  '⚠ **And hand upwards what is not yours to impose.** *K. Ayoub to decide — it changes how every note in the company is filed.* ⚠ **A post-mortem that quietly rewrites somebody else\'s procedure will be ignored by them**, and the honest line gets it decided instead.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a five-part post-mortem for something that went wrong at your work (**60 words or more**). Use the frame.'));
out.push(p('**POST-MORTEM — ______________. ______________. ______________. ⚠ One page.**   **1 What happened.** ______________. ______________. ⚠ **______________.**   **2 What it cost.** Theirs: ______________. Ours: ______________ hours. ⚠ **Against ______________, which is what ______________ would have taken.**   **3 Why.** ______________. ⚠ ______________. The contributing decision was ______________. ⚠ ______________ so this was not a failure of ______________.   ⚠ **4 What changes.** (a) ______________. (b) ______________. (c) ______________. (d) ______________.   ⚠ **5 Who owns each change.** (a) ______________, ______________ — done. (b) ______________, ______________. (c) ______________, ______________ — because ______________. (d) ______________ to decide, ______________ — because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the person whose name is against change (c)** — then ask one question: **do I know what I am supposed to do and by when?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Part 1 begins with facts, not with why', ''],
  ['Their cost in their units, yours in hours', ''],
  ['The prevention cost, for comparison', ''],
  ['Lettered changes, matched in part 5', ''],
  ['A name, a date and a reason for every change', ''],
  ['Part 5 at least as long as part 3', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read part 5 only. The class says which change will happen and which will not, and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a report at your work that explained something well and changed nothing (**140 to 180 words**). Say which of the five parts it had, which it lacked, and what happened next.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _did the report have part 5?_   ? _which change had no owner, and is it still undone?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the report lack part 5? Usually all three — ⚠ **and in all three the event has happened again at least once.**'));
out.push(box('Homework', ['Write your final text. Then take one four-part report from your own workplace and write its fifth part: each change, an owner, a date and a reason for that owner (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 15.7 =======================
out.push(pb());
out.push(h2('15.7  Review & Mediate: what went wrong, and what we would do differently'));
out.push(p('**Function:** telling somebody what went wrong so that they can avoid it   ·   **Review:** the two kinds of *should have* · the counterfactual tests · past and present · the apology that names · wish, weather or excuse · the five parts'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the two kinds of *should have*, and which one fixes a page?',
  '**2** What are the two tests a counterfactual must pass before you write it?',
  '**3** What does a mixed conditional show that a third conditional cannot?',
  '**4** What three things must an apology contain, and which of them is not *sorry*?',
  '**5** What is the test that tells a wish from an excuse, and what must you check first?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina ask for at the end?   **A** the report   **B** the thing that is not in the report   **C** a copy of the letter'));
out.push(p('**b**  Listen again. **1** What does Nour say she would do differently that is not a change in the report? **2** Why is it not in the report?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  "What is not in the report?"', [
  ['Lina', 'I have read the post-mortem. Four changes, all with my name or yours and a date. May I ask what is not in it?'],
  ['Nour', 'Everything that is in it is in it.'],
  ['Lina', 'Then let me ask it differently. If the same thing started to happen next week, what would you do differently that is not one of the four changes?'],
  ['Nour', '…I would telephone Ms Tannous on the 13th and not on the 15th.'],
  ['Lina', 'The 13th is when her agent found it.'],
  ['Nour', 'The 13th is when **I knew**. Her agent telephoned our office at about four and I had the message by five, and I spent the 14th finding out exactly what had happened before I telephoned her. ⚠ **So she spent a day and a half knowing something was wrong and not knowing what**, and in that day and a half she had to tell her own customer something, and she had nothing to tell him.'],
  ['Lina', 'Why is that not a change in the report?'],
  ['Nour', 'Because I could not think how to write it as a line. *Telephone sooner* is not a change; it is an instruction to be better. ⚠ And I did not want to write *I delayed a day to look competent*, which is the true version.'],
  ['Lina', 'Is it the true version?'],
  ['Nour', '⚠ It is. I wanted to telephone her with the whole answer rather than with the question, ⚠ **and the whole answer was worth less to her than a day and a half of knowing.**'],
  ['Lina', 'Then the change is a rule about when, not about being better. *Telephone the customer the same day I know, even with nothing to tell them.*'],
  ['Nour', '⚠ Which is writable, has a test in it, and would have taken four minutes on the 13th. ⚠ **And I have been in this job four years and you have been in it three weeks, and you have just written the fifth change** — because the four in the report are all about stencils and codes, **and the one that cost her most is about me.**'],
  ['Lina', 'Shall I put it in?'],
  ['Nour', '⚠ **Put it in, with my name against it, and put your initials next to it as the person who found it.** A post-mortem that hides who found the finding teaches nobody to look.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the question that finds the change nobody wrote**',
  table(['The question', 'Why it works'], [
    ['⚠ **What is not in the report?**', 'the author has answered every question they thought of'],
    ['If it started again next week, what would you do differently?', 'moves from explaining to acting'],
    ['⚠ **…that is not one of the four changes?**', 'blocks the comfortable answer'],
    ['When did you **know**, as against when it was found?', '⚠ **finds the delay nobody writes down**'],
  ], [2.4, 3.2]),
  '⚠ **Ask *what is not in the report?* and then refuse the first answer.** The author has written down everything they thought of; ⚠ **the useful change is the one they could not see how to write as a line.**',
  '⚠ **Separate *when it was found* from *when you knew*.** ⚠ *She spent a day and a half knowing something was wrong and not knowing what* — and in that time she had to tell her own customer something and had nothing to tell him.',
  '⚠ **Refuse *be better* as a change.** *Telephone sooner* is an instruction; ⚠ ***telephone the customer the same day I know, even with nothing to tell them*** is a rule with a test in it, and it takes four minutes.',
  '⚠ **The honest reason for a delay is usually about appearance.** *I wanted to telephone her with the whole answer rather than with the question* — ⚠ **and the whole answer was worth less to her than a day and a half of knowing.**',
  '⚠ **Name who found the finding.** ⚠ *A post-mortem that hides who found the finding teaches nobody to look* — and the person who found this one had been in the job three weeks.',
  '**Practise:** Hand somebody a post-mortem of your own and let them ask the four questions. ⚠ Answer the second one without naming any change already in the report.',
  '**Useful phrases:**  what is not in the report?  ·  not one of the four changes  ·  when did you know?  ·  that is an instruction, not a change  ·  with nothing to tell them  ·  and who found it',
  '**Pronunciation – the uncomfortable sentence said plainly.** 🔊 **Track 15.14** Listen: _I delayed a day to look competent._ ⚠ Level, no emphasis, no pause afterwards. **The sentence is hard to say and easy to hear**, and adding stress to it turns it into a performance. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A hands over a post-mortem; B asks the four questions and refuses the first answer to the second one.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Hand over the nine-carton post-mortem. ⚠ The trap is the *when did you know* question: the report dates everything from when the agent found it, and the useful date is when the message reached the office — **about four o\'clock on the 13th.**',
  'Hand over something of your own. ⚠ The trap is that your first answer to *what would you do differently* will be a change already in the report. **B must say so and ask again.** The second answer is usually about a delay, a telephone call or a person who was not told.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the change that was not in the report, and who found it. ⚠ Then write it as a rule with a test in it, rather than as an instruction to be better.'));
out.push(PHRASE_CARD(['what is not in the report?', 'not one of the four changes', 'when did you know?', 'that is an instruction, not a change', 'with nothing to tell them', 'and who found it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Hand over something that went wrong and collect their four answers.'));
out.push(table(['The four questions', 'What they answered'], [
  ['What is not in the report', ''],
  ['What they would do differently, not already a change', ''],
  ['When they knew, as against when it was found', ''],
  ['⚠ The rule that replaces *be better*', ''],
], [2.4, 3.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class the change that was not in the report. This is the **third** unit of this book, and the thing nobody writes down is this: **a post-mortem is written by the person who caused the thing, so it covers everything they can see and stops exactly where their own conduct begins — and the change that cost the other side most is almost always about a delay the author chose, for a reason they are not proud of, which means it will be found by somebody junior or by nobody at all.**'));
out.push(p('_The report has _______ changes. The one that is not in it is _______, and the reason it is not in it is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a root cause · a corrective action · an action owner · a near miss · a repeat occurrence · a standing lesson._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 1)', 10));
out.push(p('⚠ **This unit practises Part 1: short texts and notices.** Read each of the five and choose what it means.'));
out.push(box(null, [
  '**1**  _Notice by the stencil bench: DO NOT MARK FROM A SET UNTIL THE ORDER IS ON THE BENCH BESIDE IT._',
  '**2**  _Note in a file, initialled: CODE CHANGED 14 NOV. OBJECTS AFFECTED: 2 STENCIL SETS, 1 STAMP, PRE-PRINTED LABELS, OFFICE TEMPLATE._',
  '**3**  _Line in a post-mortem: (d) K. Ayoub to decide, 24 January._',
  '**4**  _Message to a customer: I am telephoning to say that something is wrong with your consignment. I do not yet know what. I will telephone again before six._',
  '**5**  _Line in a programme: how you will know — the stencils carry the code on the order._',
], 'FFFFFF', C.navy));
[
  '**1**  This notice means ___.   **A** the order must be checked before marking begins   **B** the bench must be cleared   **C** only one set may be used',
  '**2**  The person who initialled this note has ___.   **A** read it   **B** read it and written down what it affects   **C** changed the stencils',
  '**3**  This line means ___.   **A** Mr Ayoub caused it   **B** the change is not the writer\'s to impose   **C** the change is finished',
  '**4**  The caller is ___.   **A** apologising   **B** telling the customer before knowing the answer   **C** asking for information',
  '**5**  This line tests ___.   **A** whether the stencils are there   **B** whether the stencils are correct   **C** who put them there',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: telling a colleague the change that came out of a post-mortem and that they now own.',
  'The shape: **what the change is, as a line they could put on a wall** · **when, by date** · ⚠ **why them, in one clause.**',
  '⚠ **In forty words the *why them* clause is what gets it done.** *Because you do not know enough to leave anything off* takes nine words and turns an errand into a reason.',
  '⚠ And never write *be careful* or *make sure*. ⚠ **A change a reader cannot put on a wall is not a change**, and the test is whether it could be read out by somebody who was not in the meeting.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A post-mortem has given a colleague one change to own. Write them a note (**35 to 45 words**). Give **the change as a line they could put on a wall**, ⚠ **the date**, and ⚠ **why them.**'));
out.push(p('______________, change ______________ from ______________ is yours: ______________. By ______________. ⚠ Why you: ______________. If ______________, ______________ — and tell me, not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The change, as a line that could go on a wall', ''],
  ['A date', ''],
  ['⚠ Why them, in one clause', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full five-part post-mortem for something that went wrong at your work (**140 to 180 words**): what happened, what it cost with your own hours against the prevention cost, why with the root cause, the lettered changes, and part 5 with a name, a date and a reason for each — ⚠ **including one change that is about you and not about an object.**'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then ask somebody junior to you what is not in your report, refuse their first answer, and write down the second one with their initials next to it (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Which *should have* can be acted on by somebody who was not there?   a) I should have been more careful   b) I should have written the line as "against the order"   c) somebody should have checked',
  '2  _The code should have been checked._ This is wrong in a post-mortem because ___.   a) it is passive and names nobody   b) it is too short   c) it is in the past',
  '3  _If the stencils ___ the new code, the nine ___ out right._   a) carried / would go   b) had carried / would have gone   c) had carried / would go',
  '4  _If somebody had made the list in November, we ___ it now._   a) would have had   b) would have   c) had',
  '5  Which apology names the thing?   a) we apologise for any inconvenience   b) mistakes were made in the marking process   c) nine of your twenty-four cartons carried the November code',
  '6  _I wish the code had not changed._ This is ___.   a) a wish   b) weather   c) an excuse',
  '7  Before writing _I wish somebody had told me_, you must ___.   a) look in the file   b) telephone them   c) wait a day',
  '8  The fifth part of a post-mortem is ___.   a) what changes   b) who owns each change, with a date   c) what it cost',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 15.15** Listen to the exchange. Complete the note.   The change that is not in the report: ______   When the writer knew: ______   When the customer was telephoned: ______   The honest reason for the delay: ______   Who found the finding: ______'));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Lina', 'If the same thing started next week, what would you do differently that is not one of the four changes?'],
  ['Nour', 'I would telephone Ms Tannous on the 13th and not on the 15th. Her agent telephoned our office at about four on the 13th and I had the message by five.'],
  ['Lina', 'And why did you wait?'],
  ['Nour', 'I spent the 14th finding out exactly what had happened. I wanted to telephone her with the whole answer rather than with the question, and the whole answer was worth less to her than a day and a half of knowing.'],
  ['Lina', 'Then the change is: telephone the customer the same day I know, even with nothing to tell them.'],
  ['Nour', 'Put it in with my name against it, and put your initials next to it as the person who found it.'],
]));
out.push(p('**C  Writing.** Write parts 4 and 5 of a post-mortem for something at your work (**60 words or more**): the lettered changes, and for each an owner, a date and a reason for that owner.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ tell the two kinds of *should have* apart, and write the one that fixes a page',
  '☐ test a counterfactual before I write it, and check the file first',
  '☐ join a past omission to a present consequence, with both times named',
  '☐ write an apology that names the thing and can be forwarded',
  '☐ tell a wish from weather and from an excuse',
  '☐ write a five-part post-mortem whose fifth part is a third of it',
  '☐ ask what is not in a report, and refuse the first answer',
  '☐ write a should-have note, tested counterfactuals, an apology written twice and a post-mortem',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
