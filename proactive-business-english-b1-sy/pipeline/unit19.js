// Proactive Business English B1 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a formal claim · a claimant · a respondent · a without-prejudice letter · a goodwill settlement · a full and final settlement · to accept liability · to deny liability · to admit in part · to limit a claim · a head of claim · consequential loss · direct loss · a remedy sought · to quantify a loss · to mitigate a loss · a time bar · a limitation period · to reserve a position · a holding reply · a substantive reply · an undisputed item · a disputed item · to split a claim · to settle on terms · a conditional admission · a schedule of loss · an invoice in dispute · to withhold payment · to set off';
const BACK_AT_B1 = 'compensation · put right · acknowledgement';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 19  Complaints, Claims and Resolutions'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**19.1**  say what the fault is, exactly, and how often it happens',
  '**19.2**  say what work you arranged somebody else to do',
  '**19.3**  ask the question that is harder to refuse',
  '**19.4**  make one request, by one date',
  '**19.5**  write the sentence that cannot be misread',
  '**19.6**  accept and limit in the same letter',
  '**19.7**  Review & Mediate: who counts as the claimant',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Why this unit is not about being firm', [
  '**Ms Tannous has made a claim.** Her agent\'s re-marking charge was about 140,000; her customer had the nine cartons two days late; and her own customer has deducted something from her, which she has not yet quantified. ⚠ **She is the claimant and she is also the best customer this company has outside Syria.**',
  '⚠ **The hard part of a claim is never the firmness.** It is the arithmetic: **which items are undisputed, which are disputed, and which are losses that are real and are not ours.** Her re-marking charge is undisputed. The two days are ours and cannot be priced. ⚠ **And whatever her own customer has deducted from her is a real loss that we did not cause** — and saying so in a letter without sounding as though we are refusing to care is the whole of 19.6.',
  '**So the unit is a claim and a reply, written from both sides.** ⚠ Nour writes to her own supplier about a different fault in 19.1 to 19.5; and in 19.6 she answers Ms Tannous. **Both documents have the same shape and the sides are reversed**, which is the only way to learn either.',
], C.lyellow, C.orange));

// ======================= CYCLE 19.1 =======================
out.push(pb());
out.push(h2('19.1  What it does, and how often'));
out.push(p('**Function:** stating a fault precisely   ·   **Grammar:** present simple with frequency; *it does X · it does it about Y times in Z*   ·   **Pronunciation:** the frequency phrase said as one group'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe a fault at your work in one sentence: what it does, not what it is. Then say how often.'));
out.push(p('**b**  Which can be acted on? _The machine is unreliable. · The machine stops. · The machine stops about four times a day, always in the first hour._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the supplier ask for?   **A** the invoice   **B** what the fault does and how often   **C** the machine back'));
out.push(p('**b**  Listen again. **1** What were the first two descriptions, and why were they useless? **2** What does Nour count, and what does the count show?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  "Tell me what it does"', [
  ['Nour', 'The label printer you supplied in November is not fit for purpose.'],
  ['Supplier', 'What does it do?'],
  ['Nour', 'It keeps failing.'],
  ['Supplier', 'What does it do when it fails?'],
  ['Nour', '…It prints about forty labels and then the feed slips, and the forty-first is printed across two labels.'],
  ['Supplier', 'Now I can help you. How often?'],
  ['Nour', 'Often.'],
  ['Supplier', '⚠ Count it. **I have about nine of these machines in Damascus and if yours slips at forty, it is one thing, and if it slips at four hundred, it is another thing entirely.**'],
  ['Nour', 'I counted for three days. It slips at between thirty-eight and forty-four, every time, about eleven times a day — ⚠ **and it does not slip at all on the first run of the morning.**'],
  ['Supplier', 'That last part is worth more than everything else you have said. ⚠ **Not slipping when it is cold is a feed roller, and slipping when it is warm is a feed roller, and the two together mean it is a roller and not the software.**'],
  ['Nour', 'So the count told you what it was.'],
  ['Supplier', '⚠ **The count and the exception.** *It fails at forty* narrows it to about four things. ⚠ ***It does not fail on the first run* narrows it to one** — and I have a roller in the van.'],
  ['Nour', 'And *it is not fit for purpose*?'],
  ['Supplier', '⚠ **Told me nothing and put me on my guard**, because it is the sentence people use before a solicitor. ⚠ **I would still have come; I would have come ready to argue instead of ready to mend it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What it does, how often, and the exception**',
  table(['Instead of', 'Write'], [
    ['~~It is unreliable.~~', 'It **prints** about forty labels and then the feed **slips**.'],
    ['~~It keeps failing.~~', 'It **slips** at between 38 and 44, about **eleven times a day**.'],
    ['~~Often.~~', 'about eleven times a day · about four times a week · every third load'],
    ['⚠ **the exception**', '⚠ **It does not slip on the first run of the morning.**'],
    ['~~It is not fit for purpose.~~', '⚠ **tells a reader nothing and puts them on their guard**'],
  ], [2.3, 2.7]),
  '⚠ **Say what it does, in the present simple, not what it is.** *It is unreliable* is a verdict; ⚠ *it prints about forty labels and then the feed slips* is a fault somebody can work on.',
  '⚠ **Count it, and give the range.** *Between thirty-eight and forty-four, about eleven times a day.* ⚠ **The figure is what tells the other side which of several faults it is** — *if yours slips at forty it is one thing, and at four hundred it is another thing entirely.*',
  '⚠ **The exception is worth more than the rule.** ⚠ *It does not slip at all on the first run of the morning.* **The count narrows it to four things; the exception narrows it to one** — and nobody volunteers an exception unless they have been asked for one.',
  '⚠ **Avoid the legal phrases in a first letter.** ⚠ *Not fit for purpose* tells a reader nothing and puts them on their guard: **it is the sentence people use before a solicitor**, and it makes somebody arrive ready to argue instead of ready to mend.',
  '⚠ **Three days of counting is the right amount.** Long enough to find the range and the exception, short enough to do before you write — and the counting is the part that cannot be done afterwards.',
  '**Practise:** Turn each verdict into a fault with a count and an exception. 1 the printer is unreliable 2 the deliveries are late 3 the cartons are weak 4 the invoices are wrong 5 the line is always engaged',
  '**Useful phrases:**  what does it do?  ·  it prints about forty and then …  ·  about eleven times a day  ·  between 38 and 44  ·  and it does not happen when …  ·  I counted for three days',
  '**Pronunciation – the frequency group.** 🔊 **Track 19.2** Listen: _about eLEVen times a DAY_ — one group, two stresses, no pause inside it. ⚠ Learners break after *times* and the figure stops sounding like a measurement. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a fault as a verdict; B asks what it does and how often. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The __________ you supplied in __________ is __________.'],
  ['B', 'What does it do?'],
  ['A', 'It keeps __________.'],
  ['B', 'What does it do when it __________?'],
  ['A', '…It __________ about __________ and then __________.'],
  ['B', 'Now I can help you. How often?'],
  ['A', '⚠ Between __________ and __________, about __________ a day — and it does not __________ when __________.'],
]));
out.push(table(['Role card 1 — the label printer', 'Role card 2 — the late deliveries'], [[
  '*Not fit for purpose* → ⚠ *it prints about forty labels and then the feed slips; between 38 and 44, about eleven times a day;* ⚠ **and it does not slip on the first run of the morning.** The exception identifies a feed roller, and the man has one in the van.',
  '*Your deliveries are always late* → ⚠ *four of the last eleven arrived after the shop shut;* ⚠ **and all four were Thursdays.** The exception is the finding: **Thursday is the Ghouta run day at the supplier\'s end too**, which nobody on either side had connected.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the verdict, the fault, the count and the exception. ⚠ Then say which of the four the other side could act on.'));
out.push(PHRASE_CARD(['what does it do?', 'it prints forty and then …', 'about eleven times a day', 'between 38 and 44', 'and it does not happen when …', 'I counted for three days']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** faults at your work. Write the verdict you would have given, the fault, the count and the exception.'));
out.push(table(['The verdict', 'What it does', 'How often', 'The exception'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.9, 1.1, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would have said _______. What it does is _______, about _______, and it does not happen when _______._'));
out.push(p('**Listener task:** count how many exceptions in the room nobody had noticed before. ⚠ Then ask how long each count took — usually two or three days, and never done before the letter.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is always failing_ and _it is not fit for purpose_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO THE SUPPLIER OF THE LABEL PRINTER — THE FAULT, COUNTED. 14 March. N. Mansour.**',
  '**What it does.** The machine prints a run of labels normally and then the feed slips, so that one label is printed across the gap between two. The run continues and every label after the slip is misaligned until the machine is stopped and the feed re-seated.',
  table(['', 'Counted over three days, 11–13 March'], [
    ['labels printed before the first slip', '**between 38 and 44** (nine runs)'],
    ['slips a day', '**about eleven**'],
    ['labels wasted a day', 'about 90, of about 600 printed'],
    ['⚠ **runs with no slip at all**', '⚠ **the first run of each morning — three of three**'],
    ['time lost re-seating', 'about 25 minutes a day'],
  ], [2.4, 3]),
  '⚠ **The exception is the useful line and I nearly left it out.** The machine does not slip on the first run of the morning, three mornings out of three. ⚠ **I have no idea what that means and I am reporting it because you may.**',
  '**What I am not saying.** ⚠ I am not saying the machine is faulty rather than badly used. **Two of us operate it and neither of us was shown how** — the man who delivered it set it up and left. ⚠ **If the slip is caused by how we load the roll, tell me and I will have it right this week.**',
  '⚠ **What I am asking for.** Somebody to look at it, with the three days of counts in front of them, ⚠ **before anybody decides whose fault it is.** I have not asked for a replacement and I am not going to until I know what the fault is.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the exception, and why does the writer include it?'));
out.push(item('2', 'What does the writer say she is not claiming?'));
out.push(item('3', 'What is she asking for, and what is she not asking for?'));
out.push(box('Writer\'s box', [
  '**The fault, counted — four parts:** **what it does, in the present simple** → **a table of counts over a stated period** → ⚠ **the exception, even when you do not understand it** → **what you are not saying, and what you are asking for.**',
  '⚠ **Give the period of the count.** *Counted over three days, 11–13 March.* ⚠ A figure with no period behind it is an impression with a number in it.',
  '⚠ **Report the exception even when you cannot explain it.** ⚠ *I have no idea what that means and I am reporting it because you may.* **The other side knows their own machine and the exception is the line that tells them which of four faults it is.**',
  '⚠ **Say what you are not claiming.** ⚠ *I am not saying the machine is faulty rather than badly used; neither of us was shown how to load it.* **A letter that concedes the possibility of its own error gets an engineer instead of a solicitor.**',
  '⚠ **Ask for the diagnosis before the remedy.** ⚠ *Somebody to look at it, before anybody decides whose fault it is. I have not asked for a replacement and I am not going to until I know what the fault is.*',
  '⚠ **And keep the legal phrases out of a first letter.** *Not fit for purpose* and *we reserve our rights* belong in a third letter if they belong anywhere; ⚠ **in a first letter they buy an argument instead of a repair.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the counted fault for something at your work (**60 words or more**). Use the frame.'));
out.push(p('**TO ______________ — THE FAULT, COUNTED. ______________. ______________.**   **What it does.** ______________ and then ______________, so that ______________.   ______________ | **______________**   ______________ | **______________**   ⚠ **______________ with no fault at all** | ⚠ **______________**   ⚠ **The exception.** ______________. ⚠ I have no idea what that means and I am reporting it because ______________.   **What I am not saying.** ⚠ I am not saying ______________. ______________, so ⚠ if ______________, tell me and I will ______________.   ⚠ **What I am asking for.** ______________, before ______________. I have not asked for ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as the engineer who has to come out.** The box says report the exception even if you cannot explain it. Your letter says it slips *all the time* — are there any runs where it does not?"',
  '⚠ In this unit the reader to name is **the person who will have to do something about it** — an engineer, a supplier\'s clerk, a customer\'s agent. ⚠ **A claim written for one\'s own file is firm; a claim written for the person who must act is counted.**',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **when does it not happen?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it does, in the present simple', ''],
  ['A count with the period stated', ''],
  ['The exception', ''],
  ['What you are not claiming', ''],
  ['The diagnosis asked for before the remedy', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their exception. The class says what it might narrow the fault down to.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a complaint at your work that was made as a verdict (**140 to 180 words**). Say what was said, what the fault actually was, and how long it took to find out.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a count anywhere?_   ? _when did it not happen, and did anybody ask?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had nobody counted before complaining? Usually all three — ⚠ **and in two of three the count would have identified the fault without anybody coming out.**'));
out.push(box('Homework', ['Write your final text. Then count one fault at your work for three days and write what it does, how often, and when it does not happen (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.2 =======================
out.push(pb());
out.push(h2('19.2  We have had it serviced twice'));
out.push(p('**Function:** saying what work you arranged somebody else to do   ·   **Grammar:** _have something done_   ·   **Pronunciation:** the weak _had it_ in the middle of the phrase'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things at your work that you have had done rather than done yourselves. Say when, and by whom.'));
out.push(p('**b**  Which is right? _We serviced it twice. · We have had it serviced twice. · It was serviced by us twice._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nadia want *have it serviced* rather than *serviced it*?   **A** it is more formal   **B** it says the company did its part without claiming expertise it has not got   **C** it is shorter'));
out.push(p('**b**  Listen again. **1** What does *we serviced it* claim? **2** What does the construction prove in a claim?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  "Who serviced it?"', [
  ['Nadia', 'Your letter says *we have serviced the machine twice since November*.'],
  ['Nour', 'We have. In December and in February.'],
  ['Nadia', 'Who did it?'],
  ['Nour', 'The engineer from the supplier, both times.'],
  ['Nadia', '⚠ Then you have not serviced it; **you have had it serviced**, and the difference matters twice over in a claim. ⚠ **First, *we serviced it* claims that we have somebody who can service a label printer, and we do not** — and if they ask who, the answer is nobody, which makes the rest of the letter weaker.'],
  ['Nour', 'And the second?'],
  ['Nadia', '⚠ ***We have had it serviced twice* proves we did our part**, because having it serviced is the only part that was ours. **The servicing itself was theirs, by their own engineer, and the construction says so in four words.**'],
  ['Nour', 'So the phrase does two things at once.'],
  ['Nadia', 'It says *we arranged it* and *somebody else did it*, and in a claim ⚠ **it quietly puts the work on the other side\'s record and not on ours.** Both services are in their engineer\'s own notes.'],
  ['Nour', 'What else have we had done?'],
  ['Nadia', 'List it. ⚠ **We have had the roll holder replaced, we have had the feed cleaned, and we have had the machine re-sited** — which we did because their engineer asked us to, and which is worth more in this letter than any adjective.'],
  ['Nour', 'And the things we did ourselves?'],
  ['Nadia', '⚠ **Say those in the active, and say them separately.** *We have cleaned the rollers weekly since January and kept a sheet.* ⚠ **Mixing the two is what makes a claim letter sound as though a company is claiming credit for everything that has been done to its own machine.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_have something done_ — arranged by us, carried out by them**',
  table(['Form', 'Example'], [
    ['**have** + object + past participle', 'We **have had** the machine **serviced** twice.'],
    ['past', 'We **had** the roll holder **replaced** in December.'],
    ['⚠ with the agent', 'We **had it serviced by your own engineer**, twice.'],
    ['⚠ **active, for what you did**', 'We **have cleaned** the rollers weekly and kept a sheet.'],
    ['~~we serviced it~~', '⚠ **claims expertise you have not got**'],
  ], [2.1, 3]),
  '⚠ **Two different claims, four words apart.** *We serviced it* says we have somebody who can service a label printer — ⚠ **and if they ask who, the answer is nobody.** *We have had it serviced* says we arranged it and somebody else did it.',
  '⚠ **In a claim, *have something done* puts the work on the other side\'s record.** Both services are in their own engineer\'s notes, ⚠ **so the sentence is evidence they hold and we do not have to produce.**',
  '⚠ **Name the agent where it helps you.** *We had it serviced **by your own engineer**, twice.* ⚠ Four extra words and the other side\'s own man becomes the witness.',
  '⚠ **And say what you did yourselves in the active, separately.** *We have cleaned the rollers weekly since January and kept a sheet.* ⚠ **Mixing the two makes a letter sound as though a company is claiming credit for everything that has been done to its own machine.**',
  '⚠ **The construction is also the honest way to describe most of what a small company does**: it has things delivered, fitted, serviced, printed, cleared and repaired. ⚠ **Claiming to have done them is a habit, not a lie, and a reader who knows the trade hears it at once.**',
  '**Practise:** Say each with *have something done*, with the agent. 1 the machine serviced 2 the van repaired 3 the labels printed 4 the consignment cleared 5 the shutter mended',
  '**Useful phrases:**  we have had it serviced twice  ·  by your own engineer  ·  we had the holder replaced in December  ·  and what we did ourselves is …  ·  who did it?  ·  it is in their notes',
  '**Pronunciation – the weak middle.** 🔊 **Track 19.4** Listen: _we\'ve had it serviced twice_ — /wiv hædɪt/, light and quick, with the stress on *serviced* and *twice*. ⚠ A heavy *HAD* makes it sound like an argument. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A claims to have done work; B asks who did it and supplies the construction. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your letter says *we have __________ the __________*.'],
  ['A', 'We have. In __________ and in __________.'],
  ['B', 'Who did it?'],
  ['A', '__________, both times.'],
  ['B', '⚠ Then you have not __________ it; you have **had it __________**. And what did you do yourselves?'],
  ['A', '__________.'],
  ['B', '⚠ Then say that in the active and say it separately.'],
]));
out.push(table(['Role card 1 — the printer', 'Role card 2 — the van'], [[
  '*We have serviced the machine twice* → ⚠ **we have had it serviced twice, by your own engineer**, in December and February. ⚠ And what we did ourselves: **cleaned the rollers weekly since January and kept a sheet.**',
  '*We maintain the van properly* → ⚠ **we have had it serviced three times this year, at your own depot**, and we have had the brakes done in August. ⚠ **What we did ourselves: checked the oil every Monday, which is in the driver\'s sheet** — and the distinction is what makes the third claim credible.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence as claimed and as corrected, with the agent. ⚠ Then write separately what the company did itself.'));
out.push(PHRASE_CARD(['we have had it serviced', 'by your own engineer', 'who did it?', 'and we ourselves have …', 'it is in their notes', 'twice, in December and February']));
out.push(stage('4', 'Your turn', 9));
out.push(p('List **five** things at your work. Mark whether you had them done or did them, and name the agent.'));
out.push(table(['The work', 'Had done, or did?', 'By whom', 'The sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.1, 1.2, 2.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have had _______ done, by _______, in _______. What we did ourselves is _______._'));
out.push(p('**Listener task:** count the claims in the room that would have overstated what the company can do. ⚠ Then ask who would have noticed — usually the other side\'s own engineer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we have serviced it by the engineer_ and _we had serviced it twice_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE LABEL PRINTER — WHAT HAS BEEN DONE TO IT, AND BY WHOM. 15 March. N. Mansour.**',
  table(['Date', 'What was done', 'Arranged by', 'Carried out by', 'Evidence'], [
    ['3 Dec', 'the machine serviced', '**us**', '⚠ **your engineer**', 'his own note, left with us'],
    ['12 Dec', 'the roll holder replaced', '**us**', '⚠ **your engineer**', 'your invoice 4412'],
    ['from 6 Jan', 'rollers cleaned weekly', 'us', '⚠ **us** — Lina, Mondays', 'our own sheet, eleven entries'],
    ['21 Jan', 'the machine re-sited away from the window', '**us**', 'us', '⚠ **at your engineer\'s own suggestion**'],
    ['9 Feb', 'the machine serviced again', '**us**', '⚠ **your engineer**', 'his note; he recorded the slip'],
  ], [0.8, 2.2, 0.9, 1.3, 1.8]),
  '⚠ **Four of the five were carried out by your own people**, and I have written them as *we have had X done* because that is what happened: ⚠ **we arranged them and your engineer did them.** The two services and the holder are on your record and not only on ours.',
  '⚠ **The one line that is entirely ours is the weekly cleaning**, and it is in the active because we did it: **Lina has cleaned the rollers every Monday since 6 January and there are eleven entries on the sheet.** ⚠ **I am not going to describe eleven entries as maintenance; it is eleven entries, and the sheet is here.**',
  '⚠ **And the fourth line is the one I would ask you to read twice.** We moved the machine away from the window **because your engineer suggested it on 3 December.** ⚠ **The slip continued after the move**, which he recorded himself on 9 February — so one explanation has already been tried, by you, and it was not the cause.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the five were carried out by the supplier\'s own people?'));
out.push(item('2', 'Which line is in the active, and why?'));
out.push(item('3', 'Why does the writer ask the reader to read the fourth line twice?'));
out.push(box('Writer\'s box', [
  '**What has been done to it — four parts:** **a table with *arranged by* and *carried out by* as separate columns** → ⚠ **how many were theirs** → **the line that is entirely yours, in the active** → ⚠ **the line where their own explanation has already been tried.**',
  '⚠ **Two columns, not one.** *Arranged by* and *carried out by* are different facts, ⚠ **and the whole value of *have something done* is that it keeps them apart in one sentence.**',
  '⚠ **Put the evidence column in and name whose document it is.** *His own note. Your invoice 4412. Our own sheet, eleven entries.* ⚠ **Evidence the other side holds is worth more than evidence you hold**, and a claim that says so is hard to argue with.',
  '⚠ **Describe your own work in numbers, not in nouns.** ⚠ *I am not going to describe eleven entries as maintenance; it is eleven entries, and the sheet is here.* **The noun invites an argument about standards and the number does not.**',
  '⚠ **And find the line where their own explanation has been tried.** ⚠ *We moved it because your engineer suggested it, and the slip continued* — **an explanation eliminated by the other side\'s own suggestion is the strongest line available in any claim**, and it is usually in the file already.',
  '⚠ **Keep the dates in a column and in order.** A claim with dates down one side can be read in fifteen seconds, which is how long a reader gives it before deciding what kind of letter it is.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what has been done to it, and by whom* for something at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT HAS BEEN DONE TO IT, AND BY WHOM. ______________. ______________.**   ______________ | ______________ | **us** | ⚠ **______________** | ______________   ______________ | ______________ | us | ⚠ **us — ______________** | ______________   ______________ | ______________ | **us** | ______________ | ⚠ **______________**   ⚠ **______________ of the ______________ were carried out by your own people**, and I have written them as *we have had X done* because ______________.   ⚠ **The line that is entirely ours.** ______________, and it is in the active because ______________. ⚠ I am not going to describe ______________ as ______________.   ⚠ **And the line to read twice.** ______________ because ______________, and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the supplier\'s clerk** — then ask one question: **which of these did we do?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Arranged by* and *carried out by* as separate columns', ''],
  ['An evidence column naming whose document it is', ''],
  ['Your own work in numbers, not nouns', ''],
  ['A line where their own explanation has been tried', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *carried out by* column. The class counts how many entries are the other side\'s.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a claim at your work where somebody overstated what their own side had done (**140 to 180 words**). Say what was claimed, who had actually done it, and what happened when it was checked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is *have something done* used where the work was arranged and not done?_   ? _who actually did it, and who found out?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the overstatement found by the other side? Usually two of three — ⚠ **and in both the rest of the letter was discounted because of it.**'));
out.push(box('Homework', ['Write your final text. Then take five things done at your work this year and write each with *have something done* or in the active, with the agent named (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.3 =======================
out.push(pb());
out.push(h2('19.3  Could you tell me whether…'));
out.push(p('**Function:** asking the question that is harder to refuse   ·   **Grammar:** indirect questions — _could you tell me whether · I should like to know what · may I ask when_   ·   **Pronunciation:** the falling tone that keeps it a request and not a challenge'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask a direct question about a fault at your work. Then ask the same thing indirectly, and say which you would put in a letter.'));
out.push(p('**b**  Make each indirect: _Why was the invoice raised at list price? · When will somebody come? · Who authorised the change? · Did anybody tell the customer?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happens when the question is asked directly?   **A** nothing   **B** the supplier answers a different question   **C** he refuses'));
out.push(p('**b**  Listen again. **1** What does the direct question invite? **2** What does the indirect form do that the direct one does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  "Ask it the other way"', [
  ['Nour', 'I asked them *why has nobody come out?* and the answer was two paragraphs about how busy March is.'],
  ['Nadia', 'Because you asked a *why* question about them. ⚠ **A *why* question invites an explanation, and an explanation is the cheapest thing anybody can send you.**'],
  ['Nour', 'What should I have asked?'],
  ['Nadia', '⚠ *Could you tell me **whether** an engineer has been allocated, and if so **when** he is expected?* ⚠ **Two facts, and neither of them can be answered with a paragraph about March.**'],
  ['Nour', 'It is longer and it sounds softer.'],
  ['Nadia', 'It sounds softer and it is much harder to refuse. ⚠ **A direct question can be answered with an explanation; an indirect question asks for a fact, and a company that does not answer it has visibly not answered it.**'],
  ['Nour', 'Visibly to whom?'],
  ['Nadia', '⚠ **To whoever reads the file afterwards** — which in a claim is the whole point. *Why has nobody come?* answered with a paragraph looks like a conversation. ⚠ ***Could you tell me whether an engineer has been allocated* answered with a paragraph looks like a refusal to say.**'],
  ['Nour', 'So the indirect form is for the file as much as for the reader.'],
  ['Nadia', '⚠ **It is a question that keeps its shape.** And there is a second thing it does: it lets you ask something you half know. ⚠ *Could you tell me whether the slip was recorded at the February service?* **I know it was, because his note says so — and asking it as a question is politer than telling them what their own engineer wrote.**'],
  ['Nour', 'And if they say it was not recorded?'],
  ['Nadia', '⚠ **Then you have the note.** ⚠ **An indirect question you already know the answer to is the strongest sentence in a claim**, and it costs nothing to ask.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Indirect questions — a request for a fact**',
  table(['Direct', 'Indirect'], [
    ['~~Why has nobody come out?~~', '**Could you tell me whether** an engineer has been allocated?'],
    ['~~When will he come?~~', '**and, if so, when** he is expected?'],
    ['~~Who authorised it?~~', '**I should like to know who** authorised the change.'],
    ['~~Did anybody tell the customer?~~', '**May I ask whether** the customer was told?'],
    ['⚠ **word order**', '⚠ **no inversion:** *…whether an engineer **has been** allocated*, not ~~has an engineer been~~'],
  ], [2.3, 2.9]),
  '⚠ **A *why* question invites an explanation, and an explanation is the cheapest thing anybody can send you.** ⚠ An indirect question asks for a **fact**, and a fact cannot be answered with a paragraph about how busy March is.',
  '⚠ **The indirect form keeps its shape in a file.** ⚠ *Why has nobody come?* answered with a paragraph looks like a conversation; ⚠ ***could you tell me whether an engineer has been allocated*** answered with a paragraph **looks like a refusal to say** — to whoever reads the file afterwards.',
  '⚠ **Use *whether* and not *if* in writing**, and never invert after it: *whether an engineer has been allocated*, not ~~whether has an engineer been allocated~~. ⚠ The no-inversion rule is the commonest error in this cycle.',
  '⚠ **Ask what you already know.** ⚠ *Could you tell me whether the slip was recorded at the February service?* — **you have the engineer\'s note.** It is politer than telling them what their own man wrote, and ⚠ **if they deny it, you have the note.**',
  '⚠ **Two facts per question, no more.** *Whether an engineer has been allocated, and if so when he is expected* is two; three becomes a questionnaire and will be answered selectively.',
  '**Practise:** Turn each into an indirect question for a letter. 1 why was it priced from the old list 2 when will it be replaced 3 who signed the sheet 4 did anybody check the code 5 has the claim been passed to anybody',
  '**Useful phrases:**  could you tell me whether …  ·  and, if so, when …  ·  I should like to know who …  ·  may I ask whether …  ·  a fact, not an explanation  ·  I have the note',
  '**Pronunciation – the falling tone.** 🔊 **Track 19.6** Listen: _could you tell me whether an engineer has been alloCAted._ ⚠ It **falls** at the end, like a statement. **A rise turns it into a challenge** and loses everything the indirect form was for. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks a direct question; B gets an explanation and recasts it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I asked them *why __________?* and the answer was __________.'],
  ['B', 'Because you asked a *why* question about them. ⚠ A *why* question invites __________.'],
  ['A', 'What should I have asked?'],
  ['B', '⚠ *Could you tell me whether __________, and if so when __________?*'],
  ['A', 'It is longer and it sounds softer.'],
  ['B', '⚠ And it is much harder to refuse, because __________.'],
  ['A', 'And can I ask something I already know?'],
  ['B', '⚠ You can, and __________.'],
]));
out.push(table(['Role card 1 — the engineer', 'Role card 2 — the question you already know'], [[
  '*Why has nobody come out?* → two paragraphs about March. ⚠ Recast: ***could you tell me whether an engineer has been allocated, and if so when he is expected?*** — two facts, neither answerable with a paragraph.',
  'B knows from the engineer\'s own note that the slip was recorded at the February service. ⚠ The question: ***could you tell me whether the slip was recorded at the February service?*** ⚠ **If they say no, B produces the note; if they say yes, the claim has their own engineer in it.** Either answer helps.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the direct question, the answer it got, and the indirect version. ⚠ Then write one indirect question whose answer the asker already knows.'));
out.push(PHRASE_CARD(['could you tell me whether …', 'and, if so, when …', 'a fact, not an explanation', 'no inversion after whether', 'I have the note', 'it keeps its shape in a file']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** questions you need answered at work. Write each directly and then indirectly.'));
out.push(table(['Direct', 'Indirect', 'The fact I want', 'Do I already know it?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 2.2, 1.3, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Directly it is _______. Indirectly it is _______. The fact I want is _______, and I _______ already know it._'));
out.push(p('**Listener task:** count the questions in the room that were *why* questions. ⚠ Then ask what each of them would have been answered with.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _could you tell me whether has he been allocated_ and _I should like to know why are you busy_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO THE SUPPLIER — FOUR QUESTIONS. 18 March. N. Mansour. ⚠ Four questions and no complaint in any of them.**',
  '**1** Could you tell me **whether** an engineer has been allocated to the printer, and **if so when** he is expected?',
  '**2** Could you tell me **whether** the feed slip was recorded at the service of 9 February? ⚠ _(His note of that date is in front of me and records it, so this is a question I can answer myself; I am asking so that we are working from the same document.)_',
  '**3** I should like to know **what** the machine\'s stated run length is before a feed check is required. ⚠ **If it is forty, we have no complaint at all and I shall say so in writing.**',
  '**4** May I ask **whether** this model has had feed-roller failures elsewhere? ⚠ _(I am aware you may not wish to answer this one, and I am asking it in writing rather than on the telephone so that the question is on the file either way.)_',
  '⚠ **Why there is no complaint in this letter.** Because I do not yet know whether there is one. ⚠ **Question 3 may end the matter against us**: if the machine is specified to need a feed check at forty labels, then it is doing what it was sold to do, we were never told, and the fault is in what we were told and not in the machine.',
  '⚠ **And the bracket after question 2 is deliberate.** I could have written *your engineer recorded the slip on 9 February*, which is true and is a small accusation. ⚠ **Asking instead costs me nothing, and if the answer comes back *no* I have his note.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is there no complaint in the letter?'));
out.push(item('2', 'What might question 3 do to the writer\'s own case?'));
out.push(item('3', 'Why is question 2 asked rather than stated?'));
out.push(box('Writer\'s box', [
  '**Four questions — four parts:** **the questions, numbered, each asking for a fact** → ⚠ **a bracket where you already know the answer** → ⚠ **the question that might end the matter against you** → **why there is no complaint in the letter.**',
  '⚠ **Number the questions.** A numbered question that is not answered is visibly unanswered, ⚠ **and a reader who answers three of four has answered three of four in writing.**',
  '⚠ **Put a bracket where you hold the document.** ⚠ *His note of that date is in front of me and records it; I am asking so that we are working from the same document.* **It is politer than the accusation and it keeps the note in reserve.**',
  '⚠ **Ask the question that might end the matter against you.** ⚠ *If it is forty, we have no complaint at all and I shall say so in writing.* **A letter containing one such question is read completely differently from one that does not** — and it costs nothing, because the answer is the answer either way.',
  '⚠ **Say why there is no complaint yet.** *Because I do not yet know whether there is one.* ⚠ **A claim made before the facts are in is a claim that can be withdrawn, and withdrawing one costs more than waiting.**',
  '⚠ **And put the awkward question in writing on purpose.** ⚠ *I am asking it in writing rather than on the telephone so that the question is on the file either way.* **Say so plainly; a reader who sees the reason is less offended than one who guesses it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write four questions about something at your work (**60 words or more**). Use the frame.'));
out.push(p('**TO ______________ — FOUR QUESTIONS. ______________. ______________. ⚠ No complaint in any of them.**   **1** Could you tell me **whether** ______________, and **if so when** ______________?   **2** Could you tell me **whether** ______________? ⚠ _(______________, so this is a question I can answer myself; I am asking so that ______________.)_   **3** I should like to know **what** ______________. ⚠ **If it is ______________, we have no complaint at all and I shall say so in writing.**   **4** May I ask **whether** ______________? ⚠ _(I am asking in writing rather than on the telephone so that ______________.)_   ⚠ **Why there is no complaint in this letter.** ______________. ⚠ **Question ______________ may end the matter against us**: if ______________, then ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the clerk who has to answer it** — then ask one question: **which of these can I answer with a paragraph?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbered questions, each asking for a fact', ''],
  ['No inversion after *whether*', ''],
  ['A bracket where you already hold the answer', ''],
  ['A question that might end the matter against you', ''],
  ['Why there is no complaint yet', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their question 3. The class says whether it could really go against the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time a *why* question was answered with an explanation (**140 to 180 words**). Say what was asked, what came back, and what the indirect version would have asked for.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is the indirect word order right?_   ? _what fact was wanted, and was it ever given?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the fact never given at all? Usually all three — ⚠ **and in all three the explanation was perfectly polite and arrived by return.**'));
out.push(box('Homework', ['Write your final text. Then write one indirect question whose answer you already hold, and one that might end a matter against you (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.4 =======================
out.push(pb());
out.push(h2('19.4  One request, by one date'));
out.push(p('**Function:** making a single ask inside a legal claim   ·   **Grammar:** the single ask — *what I am asking for is X, by Y*   ·   **Pronunciation:** the figure and the date both stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a claim or request you have made. Say how many things you asked for. Then say which one you actually wanted.'));
out.push(p('**b**  Which is a single ask? _Please replace the machine, credit the labels and send somebody to train us. · What I am asking for is a replacement feed roller, fitted by Thursday the 26th._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened to the letter with four asks in it?   **A** it was granted   **B** the cheapest of the four was granted and the rest ignored   **C** it was refused'));
out.push(p('**b**  Listen again. **1** Which of the four did the supplier answer? **2** What does Mr Ayoub say a list of asks tells the other side?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  "Four asks and they chose the cheapest"', [
  ['Nour', 'They have replied. They are sending a roller.'],
  ['Mr Ayoub', 'And what did you ask for?'],
  ['Nour', 'A roller, a credit for the wasted labels, somebody to show us how to load it, and a note of the stated run length.'],
  ['Mr Ayoub', 'And you have been sent?'],
  ['Nour', 'A roller.'],
  ['Mr Ayoub', '⚠ **Of course. You offered them four things and they chose the cheapest, which is what anybody does with a list.** ⚠ A list of asks is a menu, and the other side orders from it.'],
  ['Nour', 'All four were reasonable.'],
  ['Mr Ayoub', 'All four were reasonable, and ⚠ **a list also tells them that you do not know which one matters to you** — and if you do not, they will not guess. Which one mattered?'],
  ['Nour', '…The run length. ⚠ **If the machine is specified to need a check at forty, everything else on the list is irrelevant and we have a different problem, which is what we were told when we bought it.**'],
  ['Mr Ayoub', '⚠ Then the letter was one sentence long and you wrote four. ⚠ *What I am asking for is the stated run length before a feed check is required, in writing, by Thursday the 26th.*'],
  ['Nour', 'And the credit for the labels?'],
  ['Mr Ayoub', '⚠ **Afterwards, and in a different letter, and only if the answer is not forty.** ⚠ **A claim with one ask in it gets an answer; a claim with four gets the cheapest** — and then the other three are harder to ask for a second time, because they have been asked once and not refused, which is worse than refused.'],
  ['Nour', 'Why is unanswered worse than refused?'],
  ['Mr Ayoub', '⚠ **Because a refusal can be argued with and a silence cannot.** They have not said no to the credit. ⚠ **They have said nothing, and nothing has no reason in it to answer.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**One request, one date**',
  table(['Instead of', 'Write'], [
    ['~~a list of four asks~~', '⚠ **what I am asking for is X, by Y**'],
    ['~~please replace, credit and train~~', '**the stated run length, in writing, by Thursday the 26th**'],
    ['~~as soon as possible~~', '**by Thursday the 26th**'],
    ['⚠ **and the rest**', '⚠ **afterwards, in a different letter, and only if**'],
    ['⚠ **the thing to notice**', '⚠ **unanswered is worse than refused**'],
  ], [2.3, 2.9]),
  '⚠ **A list of asks is a menu and the other side orders from it** — ⚠ **the cheapest item, every time.** Four reasonable asks produce one roller.',
  '⚠ **And a list tells them you do not know which one matters to you.** If you do not know, ⚠ **they will not guess**, and the one that mattered was the one that would have ended the matter either way.',
  '⚠ **One ask, with a figure or a thing, and one date.** *The stated run length before a feed check is required, in writing, by Thursday the 26th.* ⚠ **Never *as soon as possible***, which is a date nobody can miss.',
  '⚠ **Keep the others for a different letter, and only if the first answer makes them necessary.** ⚠ The order of asking is a decision and not a courtesy: **the question that could end the matter goes first.**',
  '⚠ **Unanswered is worse than refused.** ⚠ *A refusal can be argued with and a silence cannot* — they have not said no to the credit, **they have said nothing, and nothing has no reason in it to answer.** An ask spent on a list is an ask that has been half used.',
  '**Practise:** Take four asks and put them in order. ⚠ Which one would end the matter either way? That one goes first, alone, with a date.',
  '**Useful phrases:**  what I am asking for is …  ·  by Thursday the 26th  ·  afterwards, and in a different letter  ·  a list is a menu  ·  unanswered is worse than refused  ·  which one matters to you?',
  '**Pronunciation – the figure and the date.** 🔊 **Track 19.8** Listen: _what I\'m asking for is the stated RUN LENGTH, in writing, by THURSday the TWENty-sixth._ ⚠ Three stresses, and everything else light. **The date must not be mumbled: it is half the sentence.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a list of asks; B finds the one that matters and puts a date on it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'They have replied. What did you ask for?'],
  ['A', '__________, __________, __________ and __________.'],
  ['B', 'And you have been sent?'],
  ['A', '__________.'],
  ['B', '⚠ Of course — you offered them four things and they chose __________. Which one mattered?'],
  ['A', '…__________, because __________.'],
  ['B', '⚠ Then the letter was one sentence. *What I am asking for is __________, by __________.*'],
]));
out.push(table(['Role card 1 — the printer', 'Role card 2 — the ask that ends it'], [[
  'Four asks: a roller, a credit for labels, training, and the stated run length. ⚠ **Sent: a roller.** The one that mattered was the run length, ⚠ **because if it is forty the machine is doing what it was sold to do and the problem is what we were told.**',
  'B\'s job is to find, in A\'s list, ⚠ **the ask whose answer would end the matter either way** — and to insist that it goes first and alone. ⚠ **It is usually a question and not a demand**, and most people put it last because it might not help them.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four asks, the one that was granted, and the one that mattered. ⚠ Then write the single-ask sentence with its date.'));
out.push(PHRASE_CARD(['what I am asking for is …', 'by Thursday the 26th', 'a list is a menu', 'which one matters?', 'afterwards, in a different letter', 'unanswered is worse than refused']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** claims or requests at your work. For each: all the asks, the one that matters, and the single-ask sentence.'));
out.push(table(['The claim', 'All the asks', 'The one that matters, and why', 'The single-ask sentence, with a date'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.8, 1.9, 2.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked for _______. The one that mattered was _______, because _______. The sentence is _______, by _______._'));
out.push(p('**Listener task:** count the claims in the room with more than two asks in them. ⚠ Then ask which ask was granted in each case — and it is the cheapest, almost without exception.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _please deal with this as soon as possible_ and a letter with five numbered requests. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two letters, and answer the questions.'));
out.push(box(null, [
  '**THE CLAIM, WRITTEN TWICE. 20 March. N. Mansour.**',
  '**Version 1, which I sent on the 11th (four asks).** _Please send a replacement feed roller; credit us for the labels wasted since November; arrange for somebody to show us how the roll should be loaded; and confirm the stated run length before a feed check is required._',
  '⚠ **What came back: a roller, and nothing else.** No refusal of the credit, no answer on the training, ⚠ **and no answer at all on the run length** — which is the only one of the four whose answer could have ended the matter in either direction.',
  '**Version 2, which I am sending today (one ask).** _What I am asking for is the stated run length of this model before a feed check is required, in writing, by Thursday the 26th. ⚠ If it is forty labels, we have no complaint and I shall say so in writing, and this correspondence ends. If it is four hundred, the machine is not performing as specified and I shall write to you again about the labels and the time._',
  '⚠ **Why one ask and not four.** Because four asks are a menu and I have already seen what happens: ⚠ **they took the cheapest, and the three that were not answered are now harder to ask for than they were before I asked, because unanswered is worse than refused.**',
  '⚠ **And why this ask and not the credit.** The credit is about 90 labels a day since November, which is real money. ⚠ **But I cannot ask for it honestly until I know whether the machine is doing what it was sold to do** — and if it is, the credit is not owed and the complaint is against whoever told us it would run a thousand.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which of the four asks was answered, and which was not answered at all?'));
out.push(item('2', 'What are the two branches in version 2, and what does each one lead to?'));
out.push(item('3', 'Why is the credit not asked for yet?'));
out.push(box('Writer\'s box', [
  '**The claim written twice — four parts:** **version 1 and what came back** → **version 2, one ask with a date** → ⚠ **the two branches: what happens if the answer is X and if it is Y** → ⚠ **why this ask and not the obvious one.**',
  '⚠ **The two branches are what make a single ask strong.** ⚠ *If it is forty, we have no complaint and this correspondence ends. If it is four hundred, I shall write again.* **A reader who can see both outcomes can answer; a reader who can only see one will delay.**',
  '⚠ **Offer the ending.** ⚠ *This correspondence ends* is the most attractive sentence available to a supplier, **and offering it is free if the branch is honest.**',
  '⚠ **One date, and name the day as well as the number.** *By Thursday the 26th.* ⚠ A date with no day in it is misread about once in ten.',
  '⚠ **Say why you are not asking for the money yet.** ⚠ *I cannot ask for it honestly until I know whether the machine is doing what it was sold to do.* **It is a stronger position than asking, and it keeps the claim alive without spending it.**',
  '⚠ **And print what happened to version 1.** *They took the cheapest, and the three that were not answered are now harder to ask for than before.* ⚠ **The record of the first letter is what justifies the shape of the second.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a claim twice for something at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE CLAIM, WRITTEN TWICE. ______________. ______________.**   **Version 1 (______________ asks).** _Please ______________; ______________; ______________; and ______________._   ⚠ **What came back:** ______________, and nothing else. ⚠ **No answer at all on ______________**, which is the only one whose answer could have ended the matter.   **Version 2 (one ask).** _What I am asking for is ______________, by ______________. ⚠ If ______________, ______________ and this correspondence ends. If ______________, ______________._   ⚠ **Why one ask and not ______________.** ______________, and ⚠ unanswered is worse than refused.   ⚠ **And why this ask and not ______________.** ______________, but I cannot ask for it honestly until ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what are my two choices, and what happens after each?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One ask, with a figure or a thing', ''],
  ['One date, with the day named', ''],
  ['Two branches, both stated', ''],
  ['An ending offered on one branch', ''],
  ['Why the obvious ask is being held back', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their two branches. The class says which branch the other side would prefer, and whether it is honest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a claim at your work with several asks in it (**140 to 180 words**). Say which was granted, which was ignored, and which one would have ended the matter.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there one ask and one date?_   ? _which ask would have ended the matter either way?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the cheapest ask the one granted? Usually all three — ⚠ **and in all three the ask that would have ended the matter was last on the list or not on it.**'));
out.push(box('Homework', ['Write your final text. Then take a claim you are about to make, find the ask whose answer would end it either way, and write it alone with a date and both branches (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.5 =======================
out.push(pb());
out.push(h2('19.5  What I asked for was not this'));
out.push(p('**Function:** writing the sentence that cannot be misread   ·   **Grammar:** the cleft — _what I asked for was… · it was not the price that…_   ·   **Pronunciation:** the stress that the cleft puts on one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a sentence about a mistake at your work. Then say it again starting with *what*.'));
out.push(p('**b**  Make each a cleft: _I asked for a roller, not a replacement machine. · The date is the problem, not the price. · He signed the sheet, not the order._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has the supplier replied about?   **A** the roller   **B** something nobody asked for   **C** the price'));
out.push(p('**b**  Listen again. **1** What did the supplier\'s letter answer? **2** What sentence does Nadia give to stop it happening again?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  "That is not what I asked"', [
  ['Nour', 'They have answered. Two pages about whether the machine was correctly specified for our volume.'],
  ['Nadia', 'And what did you ask?'],
  ['Nour', 'The stated run length before a feed check is required.'],
  ['Nadia', 'Those are different questions.'],
  ['Nour', 'They are, and theirs is a much more interesting one for them, because it is about what we ordered.'],
  ['Nadia', '⚠ **Which is what happens when a question can be slid sideways.** You asked a narrow factual thing and they have answered a broad arguable thing, and now the correspondence is about our purchasing decision.'],
  ['Nour', 'How do I pull it back?'],
  ['Nadia', '⚠ **With a cleft, and nothing else in the paragraph.** *What I asked for was the stated run length before a feed check is required. I did not ask whether the machine was correctly specified, and I am not asking now.*'],
  ['Nour', 'It sounds blunt.'],
  ['Nadia', '⚠ **It is the only shape of sentence that cannot be slid sideways**, because the subject of the sentence is the question itself. ⚠ *What I asked for was X* puts X in the one position in English where it cannot be mistaken for anything else.'],
  ['Nour', 'And the second half?'],
  ['Nadia', '⚠ ***I did not ask whether Y, and I am not asking now*** — **which closes the door they have opened and refuses to walk through it.** ⚠ Without that half they will answer the specification question again, because they have now written two pages on it and nobody abandons two pages.'],
  ['Nour', 'Is there a risk in it?'],
  ['Nadia', '⚠ **One, and it is worth knowing.** A cleft is emphatic, so it can only be used once in a letter. ⚠ **Two clefts in one page read as anger, and anger in a claim is the thing the other side is waiting for** — because an angry claimant can be managed instead of answered.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The cleft — putting one thing where it cannot be mistaken**',
  table(['Ordinary', 'Cleft'], [
    ['I asked for a roller.', '**What I asked for was** a roller.'],
    ['The date is the problem.', '**It is the date that is** the problem, not the price.'],
    ['He signed the sheet.', '**What he signed was** the sheet, not the order.'],
    ['Nobody told the customer.', '**The one thing nobody did was** tell the customer.'],
    ['⚠ **the closing half**', '⚠ **I did not ask whether Y, and I am not asking now.**'],
  ], [2.2, 3]),
  '⚠ **A cleft puts one thing in the one position in English where it cannot be mistaken for anything else** — and that is why it is the sentence to use when a question has been answered with a different question.',
  '⚠ **Always add the closing half.** ⚠ *I did not ask whether the machine was correctly specified, and I am not asking now.* **Without it they will answer their own question again**, because they have written two pages on it and nobody abandons two pages.',
  '⚠ **A question that can be slid sideways will be.** You ask a narrow factual thing; they answer a broad arguable thing; ⚠ **and then the correspondence is about your purchasing decision instead of their machine.**',
  '⚠ **Once per letter, and no more.** ⚠ **Two clefts on one page read as anger**, and *anger in a claim is the thing the other side is waiting for, because an angry claimant can be managed instead of answered.*',
  '⚠ **The cleft is also the right sentence for a limit.** *What we are offering is the carriage, and not the two days* — ⚠ **it makes the limit the subject of the sentence rather than a word tucked into the end of one.**',
  '**Practise:** Turn each into a cleft with a closing half. 1 I asked for the run length 2 the date is the problem 3 he signed the sheet 4 we are offering the carriage 5 nobody told the customer',
  '**Useful phrases:**  what I asked for was …  ·  I did not ask whether … and I am not asking now  ·  it is the date that …, not the price  ·  what we are offering is …  ·  once per letter  ·  the question itself is the subject',
  '**Pronunciation – the cleft\'s one stress.** 🔊 **Track 19.10** Listen: _what I asked for was the stated RUN LENGTH._ ⚠ One heavy stress at the end and everything before it level. **A cleft said with two stresses loses its point and gains a tone.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports a sideways answer; B writes the cleft and the closing half. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'They have answered. __________ about __________.'],
  ['B', 'And what did you ask?'],
  ['A', '__________.'],
  ['B', 'Those are different questions. ⚠ Theirs is more interesting for them, because __________.'],
  ['A', 'How do I pull it back?'],
  ['B', '⚠ *What I asked for was __________. I did not ask __________, and I am not asking now.*'],
  ['A', 'It sounds blunt.'],
  ['B', '⚠ It is the only shape that cannot be slid sideways — and once per letter, no more.'],
]));
out.push(table(['Role card 1 — the specification', 'Role card 2 — the two clefts'], [[
  'Asked: the stated run length. ⚠ Answered: two pages on whether the machine was correctly specified for our volume. ⚠ **The cleft plus the closing half**: *what I asked for was the stated run length; I did not ask whether the machine was correctly specified, and I am not asking now.*',
  'A has written a letter with three clefts in it. ⚠ B\'s job is to keep one and convert the other two to ordinary sentences — **and to say why: two clefts read as anger**, ⚠ **and an angry claimant can be managed instead of answered.** Which one stays is the one the letter is about.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the question asked, the question answered, and the cleft with its closing half. ⚠ Then say why the other side\'s question was more attractive to them.'));
out.push(PHRASE_CARD(['what I asked for was …', 'I did not ask whether …', 'and I am not asking now', 'it is the date that …', 'once per letter', 'it cannot be slid sideways']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** times a question of yours was answered sideways. Write the cleft and the closing half for each.'));
out.push(table(['What I asked', 'What they answered', 'The cleft', 'The closing half'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______. They answered _______. The cleft is _______, and the closing half is _______._'));
out.push(p('**Listener task:** count the sideways answers in the room. ⚠ Then ask what each of the substituted questions was about — and it is almost always about the asker and not the answerer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _what I asked was for the run length_ and a letter with four clefts. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO THE SUPPLIER — PULLING THE QUESTION BACK. 24 March. N. Mansour. ⚠ One cleft, and the rest ordinary.**',
  'Thank you for your letter of the 21st.',
  '⚠ **What I asked for was the stated run length of this model before a feed check is required.** I did not ask whether the machine was correctly specified for our volume, and I am not asking now.',
  'Your letter of the 21st does not contain the run length. It contains two pages on specification, and I have read them. ⚠ **If the specification question becomes relevant I shall raise it myself**, and at present it is not relevant, because I do not yet know what the machine is supposed to do.',
  'The question is unanswered as of today, which is the sixth working day since I asked it. ⚠ **I am asking it again, in the same words, so that there is no doubt which question is outstanding.** The stated run length before a feed check is required, in writing, by Thursday the 26th.',
  '⚠ **Why this letter is four sentences long.** Because everything else I might say would be about your letter of the 21st, and your letter of the 21st is not the subject. ⚠ **The subject is a figure that I asked for on the 18th and have not been given.**',
  '⚠ **And what I have not written.** I have not said that the specification pages were an evasion; I do not know that, and they may have been written by somebody who was trying to help. ⚠ **I have said only that they do not contain the figure** — which is a fact, is checkable, and cannot be argued with.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many clefts are in the letter, and where is it?'));
out.push(item('2', 'Why does the writer repeat the question in the same words?'));
out.push(item('3', 'What does the writer deliberately not say about the two pages?'));
out.push(box('Writer\'s box', [
  '**Pulling the question back — five parts:** **one line of acknowledgement** → ⚠ **the cleft, with its closing half** → **what their letter does and does not contain** → **the question again, in the same words, with the working days counted** → ⚠ **why the letter is short, and what you have not said.**',
  '⚠ **Repeat the question in exactly the same words.** ⚠ *I am asking it again, in the same words, so that there is no doubt which question is outstanding.* **A reworded question restarts the clock and lets the other side treat it as a new one.**',
  '⚠ **Count the working days.** *The sixth working day since I asked it.* ⚠ A number that grows by itself is the most patient pressure available in a letter.',
  '⚠ **Say what their letter does contain**, and that you have read it. ⚠ *It contains two pages on specification, and I have read them.* **A claimant who has visibly read the reply is harder to put off than one who appears not to have.**',
  '⚠ **Say why the letter is short.** ⚠ *Everything else I might say would be about your letter of the 21st, and your letter of the 21st is not the subject.* **Explaining the shortness stops it reading as curtness.**',
  '⚠ **And refuse the accusation you could make.** ⚠ *I have not said that the specification pages were an evasion; I do not know that, and they may have been written by somebody trying to help.* **Saying only the checkable thing is what makes the letter unanswerable.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a letter pulling a question back (**60 words or more**). Use the frame.'));
out.push(p('**TO ______________ — PULLING THE QUESTION BACK. ______________. ⚠ One cleft.**   Thank you for your letter of ______________.   ⚠ **What I asked for was ______________.** I did not ask ______________, and I am not asking now.   Your letter does not contain ______________. It contains ______________, and I have read it. ⚠ If ______________ becomes relevant I shall raise it myself.   The question is unanswered as of today, which is the ______________ working day since I asked it. ⚠ **I am asking it again, in the same words**: ______________, by ______________.   ⚠ **Why this letter is short.** ______________.   ⚠ **And what I have not written.** I have not said ______________; ⚠ I have said only that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **which question am I being asked, and is it the same one as before?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Exactly one cleft, with its closing half', ''],
  ['The question repeated in the same words', ''],
  ['The working days counted', ''],
  ['What their letter does contain, acknowledged', ''],
  ['The accusation you could make, refused', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their closing half. The class says which door it closes.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a question at your work that was never answered (**140 to 180 words**). Say what was answered instead, how many times you asked, and whether you ever got the figure.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there one cleft and only one?_   ? _how many times was the question asked, and in the same words?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the question reworded each time it was asked? Usually two of three — ⚠ **and a reworded question lets the other side answer it as a new one, which restarts everything.**'));
out.push(box('Homework', ['Write your final text. Then take one outstanding question of yours and ask it again in exactly the words you used the first time, with the working days counted (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.6 =======================
out.push(pb());
out.push(h2('19.6  I accept it, and here is what it does not cover'));
out.push(p('**Function:** accepting and limiting in one letter   ·   **Grammar:** accept + limit — _I accept X. What that does not cover is Y._   ·   **Pronunciation:** the acceptance said without hesitation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a claim somebody made against your work. Say what part of it was plainly right.'));
out.push(p('**b**  Which accepts and limits? _We are sorry you are unhappy. · We accept the re-marking charge of 140,000. What that does not cover is your own customer\'s deduction, which we did not cause._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub insist on?   **A** refusing everything   **B** accepting the undisputed item first and in full   **C** offering a discount'));
out.push(p('**b**  Listen again. **1** What are the three items in Ms Tannous\'s claim? **2** What does he say about the order of the sentences?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  "Accept the first one in the first line"', [
  ['Nour', 'Ms Tannous has three items. The agent\'s re-marking charge, about 140,000. The two days to her customer. And something her customer has deducted from her, which she has not put a figure on.'],
  ['Mr Ayoub', 'Which of the three is undisputed?'],
  ['Nour', 'The first. It is her agent\'s invoice, it is itemised, and it happened because of our code.'],
  ['Mr Ayoub', '⚠ **Then it goes in the first line, in full, with the figure, and with no *however* anywhere near it.**'],
  ['Nour', 'And the other two?'],
  ['Mr Ayoub', 'In the second paragraph, and separately from each other, because they are different kinds of thing. ⚠ **The two days are ours and cannot be priced** — we caused them and there is no invoice. ⚠ **And the third is a real loss that we did not cause.**'],
  ['Nour', 'Her customer deducted it because the cartons were late.'],
  ['Mr Ayoub', 'Her customer deducted it from **her**, under **her** contract, which we have never seen. ⚠ **It is a real loss and it is hers to bear or to recover from her own customer, and it is not ours.** And that sentence has to be in the letter, once, plainly, ⚠ **and it has to come after the acceptance and not before it.**'],
  ['Nour', 'Why does the order matter so much?'],
  ['Mr Ayoub', '⚠ **Because a letter that limits before it accepts is read as a refusal with a concession at the end**, and a letter that accepts before it limits is read as an acceptance with a boundary. ⚠ **The content is identical. The order decides which letter she thinks she has received.**'],
  ['Nour', 'And the two days, which we cannot price?'],
  ['Mr Ayoub', '⚠ **Offer something for them that is not money.** The list of objects carrying the code, the reworded programme line, and the name of the person who will telephone her the same day if it happens again. ⚠ **She asked us for the list in January and she will remember that we sent it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Accept, then limit — and the order is the letter**',
  table(['The move', 'The sentence'], [
    ['**1 accept the undisputed item, in full, with the figure**', 'We accept the re-marking charge of 140,000 and it will be credited.'],
    ['⚠ **no *however* near it**', '⚠ **nothing in the first paragraph but the acceptance**'],
    ['**2 the item that is yours and cannot be priced**', 'The two days are ours. There is no invoice for them.'],
    ['**3 the real loss that is not yours**', '⚠ **Your customer\'s deduction is a real loss and it is not ours.**'],
    ['**4 what you offer instead of money**', 'the list, the reworded line, and a name'],
  ], [2.6, 3.2]),
  '⚠ **A letter that limits before it accepts is read as a refusal with a concession at the end.** A letter that accepts before it limits is read as an acceptance with a boundary. ⚠ **The content is identical and the order decides which letter they think they have received.**',
  '⚠ **Accept the undisputed item in the first line, in full, with the figure, and with no *however* anywhere near it.** A *however* in the first paragraph cancels the acceptance in the reader\'s memory.',
  '⚠ **Separate the three kinds of item.** ⚠ **Undisputed · ours but unpriceable · a real loss that is not ours.** They are different and a letter that treats them as one list will be answered as one list.',
  '⚠ **Say the third one plainly, once.** ⚠ *Your customer deducted it from you, under your contract, which we have never seen. It is a real loss and it is yours to bear or to recover, and it is not ours.* **Plainly, once, and after the acceptance.**',
  '⚠ **And for the item you cannot price, offer something that is not money.** ⚠ A list, a reworded control, **a name and an undertaking** — *the person who will telephone her the same day if it happens again.* **She asked for the list in January and she will remember that we sent it.**',
  '**Practise:** Take a claim against you, sort the items into the three kinds, and say them in the right order. ⚠ Then say what you can offer for the unpriceable one.',
  '**Useful phrases:**  we accept X and it will be credited  ·  the two days are ours  ·  there is no invoice for them  ·  it is a real loss and it is not ours  ·  what I can offer instead is …  ·  and the name is …',
  '**Pronunciation – the acceptance without hesitation.** 🔊 **Track 19.12** Listen: _we accept the re-marking charge of a hundred and forty thousand, and it will be credited._ ⚠ Level, falling, **no pause before *and it will be credited*** — a pause there sounds like a condition arriving. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a claim against them; B sorts it into the three kinds and puts them in order. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has __________ items: __________, __________, and __________.'],
  ['B', 'Which is undisputed?'],
  ['A', '__________, because __________.'],
  ['B', '⚠ Then it goes in the first line, in full, with the figure, and with no *however* near it. And the others?'],
  ['A', '__________ is ours and cannot be priced. ⚠ And __________ is a real loss we did not cause.'],
  ['B', '⚠ And for the one you cannot price?'],
  ['A', '__________, __________ and a name.'],
]));
out.push(table(['Role card 1 — the Tannous claim', 'Role card 2 — the order that matters'], [[
  'Three items: ⚠ **the re-marking charge of about 140,000 — undisputed**; the two days to her customer — **ours, unpriceable**; ⚠ **her own customer\'s deduction — a real loss, not ours.** For the unpriceable one: the list of objects carrying the code, the reworded line, and a name.',
  'A has written the same letter with the limit first. ⚠ B reads it back as the customer would: *so you are refusing most of it and offering me the carriage.* ⚠ **Then B reads the same content in the other order** — and the class hears that two identical letters are two different letters.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the sorting for the class – **without the book**.'));
out.push(p('**Listener task:** write the three items and their kinds, in the order they should appear. ⚠ Then write what is offered for the unpriceable one.'));
out.push(PHRASE_CARD(['we accept X, and it will be credited', 'the two days are ours', 'it is a real loss and not ours', 'no "however" in the first paragraph', 'what I can offer instead', 'and the name is …']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a claim against your work. Sort **four** items into the three kinds and write the sentence for each.'));
out.push(table(['The item', 'Undisputed / ours but unpriceable / not ours', 'The sentence', 'Order'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.8, 2.2, 0.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The undisputed item is _______, and I accept it in the first line. _______ is ours and cannot be priced. _______ is a real loss and not ours. What I offer instead is _______._'));
out.push(p('**Listener task:** count how many letters in the room would have limited before accepting. ⚠ Then ask how the claimant would have read each one.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we accept the charge, however_ and a letter in which all three items are in one paragraph. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter, and answer the questions.'));
out.push(box(null, [
  '**TO MS M. TANNOUS, BEIRUT — YOUR CLAIM OF 20 MARCH. 25 March. N. Mansour.**',
  '**We accept your agent\'s re-marking charge of 140,000 in full.** It will be credited against your next invoice, or paid to you directly if you prefer; tell me which and it is done the same day.',
  '**The two days.** Your customer had the nine cartons two days late and that is ours. ⚠ **There is no invoice for it and I am not going to offer you a figure, because any figure I invented would be an insult to a loss I cannot measure.** What I can offer instead is in the last paragraph.',
  '⚠ **The deduction your own customer has made.** You have not yet put a figure on it and I am going to answer it before you do. ⚠ **It was deducted from you, under your contract with him, which we have not seen. It is a real loss and it is not ours.** If your contract with him passes such a deduction up the chain, send me the clause and I shall read it and answer again.',
  '⚠ **What I offer for the two days.** The one-page list of every object in this company that carries a consignee code, which you asked for in January — it is finished and it is enclosed. The programme line that failed now reads *the stencils carry the code on the order*, and the order is put on the bench beside them. ⚠ **And a name: if anything of yours is wrong again, I shall telephone you on the day I know, with nothing to tell you except that I know.**',
  '⚠ **What I have not done in this letter.** I have not offered you a discount on the next order. ⚠ **You told me in January that a discount tells you we want the matter closed**, and I would rather send you the list.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is accepted, and where in the letter?'));
out.push(item('2', 'Why does the writer refuse to put a figure on the two days?'));
out.push(item('3', 'What is offered instead of money, and why is there no discount?'));
out.push(box('Writer\'s box', [
  '**Accept and limit — five parts:** **the undisputed item, accepted in full in the first line, with a choice of how** → **the item that is yours and unpriceable** → ⚠ **the real loss that is not yours, answered plainly** → **what you offer instead of money** → ⚠ **what you have not done, and why.**',
  '⚠ **Give a choice in the acceptance.** *Credited against your next invoice, or paid directly if you prefer; tell me which and it is done the same day.* ⚠ **A choice costs nothing and it converts an acceptance into an action.**',
  '⚠ **Refuse to invent a figure, and say why.** ⚠ *Any figure I invented would be an insult to a loss I cannot measure.* **That sentence is better than any number and it is true.**',
  '⚠ **Answer the unquantified item before they quantify it.** ⚠ *You have not yet put a figure on it and I am going to answer it before you do.* **Waiting for the figure accepts the principle.**',
  '⚠ **And leave a door open on the one you refuse.** ⚠ *If your contract with him passes such a deduction up the chain, send me the clause and I shall read it and answer again.* **A refusal with a route in it is not a wall.**',
  '⚠ **Use what they have told you.** ⚠ *You told me in January that a discount tells you we want the matter closed, and I would rather send you the list.* **Quoting a customer\'s own words back as a reason is the most respectful thing in the letter.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an accept-and-limit letter about a claim against your work (**60 words or more**). Use the frame.'));
out.push(p('**TO ______________ — YOUR CLAIM OF ______________. ______________. ______________.**   **We accept ______________ of ______________ in full.** It will be ______________, or ______________ if you prefer; tell me which and ______________.   **______________.** ______________ and that is ours. ⚠ There is no invoice for it and I am not going to offer you a figure, because ______________.   ⚠ **______________.** ______________. ⚠ **It is a real loss and it is not ours.** If ______________, send me ______________ and I shall ______________.   ⚠ **What I offer instead.** ______________. ______________. ⚠ **And a name: if ______________, I shall ______________.**   ⚠ **What I have not done.** I have not ______________, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be the claimant** — then ask one question: **is this a refusal or an acceptance?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The undisputed item in the first line, in full, with no *however*', ''],
  ['A choice of how it is settled', ''],
  ['The unpriceable item, with a refusal to invent a figure', ''],
  ['The loss that is not yours, answered plainly, with a route left open', ''],
  ['Something offered instead of money, including a name', ''],
  ['What you have not done, and why', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first line. The class says whether it contains a figure and whether anything in it hesitates.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a claim against your work and how it was answered (**140 to 180 words**). Say which items were accepted, which were limited, and in what order the letter put them.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the acceptance come before the limit?_   ? _what was offered for the thing that could not be priced?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the limit come first? Usually two of three — ⚠ **and in both the claimant read the letter as a refusal, which it was not.**'));
out.push(box('Homework', ['Write your final text. Then take a claim against your work, sort it into the three kinds of item, and write the first line only — the acceptance, in full, with the figure (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.7 =======================
out.push(pb());
out.push(h2('19.7  Review & Mediate: who counts as the claimant'));
out.push(p('**Function:** explaining a claim to the person who must answer it   ·   **Review:** the fault counted · *have something done* · indirect questions · one ask, one date · the cleft · accept and limit'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What three things does a counted fault contain, and which is worth most?',
  '**2** What does *we have had it serviced* say that *we serviced it* does not?',
  '**3** Why does an indirect question get a fact where a direct one gets an explanation?',
  '**4** Why is a list of asks a menu, and what is worse than a refusal?',
  '**5** What decides whether a letter is read as an acceptance or a refusal?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does Lina say the real claimant is?   **A** Ms Tannous   **B** somebody nobody has written to   **C** the agent'));
out.push(p('**b**  Listen again. **1** How many people have lost something? **2** What does Nour say about who gets written to?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  "There are four people in this and we have written to one"', [
  ['Lina', 'May I ask about the Tannous letter? I have read it four times and I think there is somebody missing from it.'],
  ['Nour', 'Go on.'],
  ['Lina', 'Count the people who lost something. Ms Tannous lost the agent\'s charge and whatever her customer deducted. ⚠ **Her customer lost two days of whatever he was going to do with nine cartons.** The agent lost an afternoon at the port.'],
  ['Nour', 'And the fourth?'],
  ['Lina', '⚠ **Abu Yasser.** He marked nine cartons correctly from the wrong stencils and he has been in every document in this company for two months as the man at the marking bench. ⚠ **He has not lost money and he has lost something.**'],
  ['Nour', 'And of the four, we have written to?'],
  ['Lina', 'One. ⚠ **And she is the only one of the four who can send us an invoice**, which I do not think is a coincidence.'],
  ['Nour', 'It is not a coincidence. A claim is answered by whoever can bill you.'],
  ['Lina', '⚠ **Then the question is not who the claimant is; it is who is a claimant and cannot bill.** The agent will not write to us because he has invoiced her and been paid. ⚠ **Her customer does not know we exist.** And Abu Yasser works here.'],
  ['Nour', 'What would you do about the three?'],
  ['Lina', '⚠ **Nothing about two of them.** The agent has been paid and her customer is hers to manage; writing to him over her head would be the worst thing we could do. ⚠ **But Abu Yasser has read four documents about the marking bench and nobody has written one sentence to him.**'],
  ['Nour', 'And the sentence?'],
  ['Lina', '⚠ ***You marked nine cartons correctly from the stencils you were given, and the fault was in the line I wrote.*** ⚠ **It is in the post-mortem in exactly those words and he has never been shown the post-mortem** — because a post-mortem goes to the person who decides and not to the person who is in it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the claimant who cannot send an invoice**',
  table(['Who lost something', 'Can they bill us?', 'Have we written to them?'], [
    ['Ms Tannous', '⚠ **yes**', '⚠ **yes**'],
    ['her own customer', 'no — he does not know we exist', 'no, and we must not'],
    ['her agent', 'no — he has invoiced her and been paid', 'no, and there is no need'],
    ['⚠ **Abu Yasser**', '⚠ **no — he works here**', '⚠ **no, and that is the finding**'],
  ], [2, 1.9, 2.1]),
  '⚠ **A claim is answered by whoever can bill you**, which is why the four-item letter went to the one person of four who can. ⚠ **That is not a coincidence and it is not wrong; it is simply what claims are.**',
  '⚠ **So the useful question is not who the claimant is but *who is a claimant and cannot bill?*** The agent has been paid. The customer\'s customer does not know we exist. ⚠ **And the man at the bench works here.**',
  '⚠ **Two of the three need nothing.** Writing to a customer\'s customer over her head is the worst thing available; ⚠ **the agent has been paid and a letter to him would be a letter about nothing.** Knowing when to do nothing is part of the skill.',
  '⚠ **And the one who needs a sentence is the one on the payroll.** ⚠ *You marked nine cartons correctly from the stencils you were given, and the fault was in the line I wrote.* **It is in the post-mortem in those words and he has never been shown the post-mortem**, because a post-mortem goes to the person who decides.',
  '⚠ **The general rule: every document in a claim has a distribution list, and the person the document is about is almost never on it.** Check it, once, before the letter goes.',
  '**Practise:** Take a claim at your work and list everybody who lost something. ⚠ Mark who can bill you. Then write the one sentence owed to somebody who cannot.',
  '**Useful phrases:**  who lost something?  ·  can they bill us?  ·  who is a claimant and cannot bill?  ·  two of the three need nothing  ·  you did it correctly from what you were given  ·  and the fault was in the line I wrote',
  '**Pronunciation – the sentence owed to a colleague.** 🔊 **Track 19.14** Listen: _you marked nine cartons CORRECTly from the stencils you were GIVen, and the fault was in the line I WROTE._ ⚠ Three stresses, and the last clause must not be softened. **It is the half that costs the speaker something.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a claim; B lists everybody who lost something and finds the one who cannot bill.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'The Tannous claim: four people lost something and one letter was written. ⚠ **Two of the three need nothing** — the agent has been paid and the customer\'s customer is hers. ⚠ **The fourth works here and has been in four documents.**',
  'Take a claim of your own. ⚠ B\'s job is to list everybody who lost something **before** asking who was written to — and the list is always longer than the correspondence. ⚠ **Expect one name on the payroll**, and expect them not to have been shown the document they are in.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write everybody who lost something and whether they can bill. ⚠ Then write the one sentence owed to somebody who cannot, in the words you would use.'));
out.push(PHRASE_CARD(['who lost something?', 'can they bill us?', 'who cannot bill?', 'two of the three need nothing', 'you did it correctly', 'the fault was in my line']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. List the losers in their claim and find the one who cannot bill.'));
out.push(table(['Who lost something', 'Can they bill?', 'Written to?', 'What is owed'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1, 1, 2.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class who was missing from the correspondence. This is the **seventh** unit of this book, and the thing nobody writes down is this: **a claim is answered by whoever can send an invoice, so a company\'s whole correspondence about a fault is addressed to the one person in it who has a billing relationship — and everybody else who lost something, including the person whose name is in every document about it and who did their work correctly from what they were given, is handled by nobody, because a document about somebody goes to the person who decides and not to the person it is about.**'));
out.push(p('_Four people lost something and we wrote to _______. The one who cannot bill and is owed a sentence is _______, and the sentence is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _a claimant · an undisputed item · a head of claim · to accept liability · a holding reply · a full and final settlement._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 6)', 10));
out.push(p('⚠ **This unit practises Part 6: a multiple-choice gap-fill.** Read the letter and choose **A**, **B** or **C** for each gap.'));
out.push(box(null, [
  '**Extract from a reply to a claim.**',
  '_We accept your agent\'s re-marking charge of 140,000 (1) ______ full. It will be credited against your next invoice, or paid (2) ______ you directly if you prefer. The two days are ours; there is no invoice (3) ______ them and I am not going to offer you a figure. The deduction your own customer has made was deducted from you (4) ______ your contract with him, which we have not seen. It is a real loss and it is not (5) ______. If your contract passes such a deduction (6) ______ the chain, send me the clause. What I offer (7) ______ the two days is the list you asked for in January, which is enclosed, (8) ______ a name: if anything of yours is wrong again I shall telephone you (9) ______ the day I know. I have not offered you a discount, (10) ______ you told me in January that a discount tells you we want the matter closed. We are (11) ______ for the fault and we are not liable (12) ______ a loss we did not cause._',
]));
[
  '**1**   **A** at   **B** in   **C** on',
  '**2**   **A** to   **B** for   **C** at',
  '**3**   **A** of   **B** for   **C** about',
  '**4**   **A** under   **B** on   **C** in',
  '**5**   **A** our   **B** ours   **C** us',
  '**6**   **A** up   **B** on   **C** at',
  '**7**   **A** instead   **B** for   **C** about',
  '**8**   **A** with   **B** and   **C** also',
  '**9**   **A** at   **B** in   **C** on',
  '**10**   **A** because   **B** so   **C** although',
  '**11**   **A** responsible   **B** liable   **C** accountable',
  '**12**   **A** of   **B** for   **C** to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 1 — an internal note, 35 to 45 words.** Here: the sentence owed to a colleague who is in a document and has not been shown it.',
  'The shape: ⚠ **what they did, and that it was correct** · ⚠ **where the fault actually was, in the first person** · **what they are being given or shown.**',
  '⚠ **In forty words the second part is the whole note.** *The fault was in the line I wrote* costs the writer something, which is why it is believed — ⚠ **and *there was a problem with the programme* costs nothing and is believed by nobody.**',
  '⚠ And offer the document. *The post-mortem is on the bench and your name is in it twice.* ⚠ **Being in a document you have not read is the thing that is actually wrong**, and handing it over is the repair.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A colleague is named in a document about something that went wrong and has not been shown it. Write them a note (**35 to 45 words**). Give ⚠ **what they did and that it was correct**, ⚠ **where the fault was, in the first person**, and **what you are giving them.**'));
out.push(p('______________, you ______________ correctly from ______________. ⚠ **The fault was in ______________ that I ______________**, not in ______________. ⚠ ______________ is ______________ and your name is in it ______________ — ______________. If ______________, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What they did, and that it was correct', ''],
  ['⚠ Where the fault was, in the first person', ''],
  ['What they are being given or shown', ''],
  ['35 to 45 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full accept-and-limit reply to a claim against your work (**140 to 180 words**): the undisputed item accepted in the first line with a figure and a choice, the item that is yours and cannot be priced, ⚠ **the real loss that is not yours, answered plainly with a route left open**, what you offer instead of money including a name, and what you have not done and why.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then list everybody who lost something in a claim at your work, mark who can bill you, and write the sentence owed to one who cannot (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Which can be acted on?   a) the machine is unreliable   b) the machine stops   c) it slips at between 38 and 44, about eleven times a day',
  '2  The engineer from the supplier did the work. Write:   a) we serviced it twice   b) we have had it serviced twice   c) it was serviced twice',
  '3  Which gets a fact rather than an explanation?   a) why has nobody come?   b) could you tell me whether an engineer has been allocated?   c) when are you coming?',
  '4  _Could you tell me whether ___ allocated._   a) has an engineer been   b) an engineer has been   c) an engineer been',
  '5  A claim with four asks in it usually gets ___.   a) all four   b) the cheapest one   c) a refusal',
  '6  In a claim, which is worse?   a) a refusal   b) no answer at all   c) a delay',
  '7  _What I asked for was the run length._ This shape is used ___.   a) as often as possible   b) once in a letter   c) never in a claim',
  '8  A letter that limits before it accepts is read as ___.   a) an acceptance with a boundary   b) a refusal with a concession at the end   c) a holding reply',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 19.15** Listen to the exchange. Complete the note.   People who lost something: ______   The one who can send an invoice: ______   The one who works here: ______   What is owed to him: ______   Why he has never seen the document: ______'));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Lina', 'Count the people who lost something. Ms Tannous lost the agent\'s charge and whatever her customer deducted. Her customer lost two days. The agent lost an afternoon at the port.'],
  ['Nour', 'And the fourth?'],
  ['Lina', 'Abu Yasser. He marked nine cartons correctly from the wrong stencils and he has been in every document in this company for two months.'],
  ['Nour', 'And of the four, we have written to one.'],
  ['Lina', 'And she is the only one of the four who can send us an invoice, which I do not think is a coincidence.'],
  ['Nour', 'What is owed to Abu Yasser?'],
  ['Lina', 'One sentence: you marked nine cartons correctly from the stencils you were given, and the fault was in the line I wrote. It is in the post-mortem in those words and he has never been shown the post-mortem.'],
  ['Nour', 'Why not?'],
  ['Lina', 'Because a post-mortem goes to the person who decides and not to the person who is in it.'],
]));
out.push(p('**C  Writing.** Write the first two paragraphs of a reply to a claim (**60 words or more**): the undisputed item accepted in full with its figure, and the item that is yours and cannot be priced.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state a fault as what it does, with a count and an exception',
  '☐ use *have something done* for work I arranged and somebody else did',
  '☐ ask an indirect question, including one whose answer I already hold',
  '☐ make one request, by one date, with both branches stated',
  '☐ use a cleft once, with its closing half',
  '☐ accept the undisputed item first and limit afterwards',
  '☐ find the claimant who cannot send an invoice',
  '☐ write a counted fault, four questions, a single ask and an accept-and-limit reply',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
