// Proactive English B2 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band 2.** Name the criterion and **copy the line** — the line itself, not a summary — and say what you found. Then **one thing to keep, and why it works.** Then **rank the slip you were given**: most useful criterion first, least useful last.';

out.push(h1('Unit 10  Numbers in Prose'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Unit 9 conceded. This unit is about **the sentences that carry figures** — and about the fact that a figure in prose is only as good as the base, the period and the counting that are printed beside it.',
  '**10.1** puts a figure into a sentence a reader can check.   **10.2** asks the one question that collapses a percentage with no denominator.   **10.3** writes a rate that says what it is a rate of.   **10.4** compares two figures without a false base.   **10.5** takes a figure out of somebody else\'s page and asks what would have to be true for it to mean what it is being used to mean.   **10.6** writes the article, where a figure has to be one the reader can picture.   **10.7** mediates between **two figures that cannot both be right — and both are.**',
  '**Exam practice in 10.7:** B2 First **Reading and Use of English Part 1** (multiple-choice cloze), **Writing Part 2** (an article) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring two figures you use at work** — **one you are sure of and one you have been repeating without checking.** 10.1 runs on the pair, and **the second one is the interesting one**: in most classes about half of the unchecked figures turn out to be wrong, and nearly all of them turn out to have no base printed beside them.',
  '**And the peer-review slip does not change again in this book.** Band 2 stands for Units 10, 11 and 12: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 10.1 =====================
out.push(pb());
out.push(h2('10.1  A number a reader can check'));
out.push(p('**Function:** putting a figure into a sentence with its base, its period and its counter   ·   **Grammar:** _of the N, M_ · _N in M_ · _about_ · _just over_ · _nearly_   ·   **Pronunciation:** the base heard as part of the figure'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the figure you are **sure** of, with **what it is a figure of**, **when**, and **who counted it**. Then say the one you have been repeating. ⚠ Your partner asks the same four things about the second one. **In most pairs the second figure cannot answer two of the four**, and that is the finding the unit starts from.'));
out.push(board('We get a lot of refusals these days.', 'Of the forty consignments last quarter, nine were refused — my count, from the gate copies.'));
out.push(p('**b**  Which figure can a reader check? **1** _Refusals are up considerably._  **2** _Of the forty consignments last quarter, nine were refused._  **3** _We had about four hundred of them._  **4** _Nine of forty last quarter, counted off the gate copies on Tuesday._  **5** _It happens all the time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Ms Huda say a figure needs beside it, and what happens to Mr Ayoub\'s second figure?   **A** a source; nothing   **B** **a base, a period and a counter** — what it is a figure of, when, and who counted — and Mr Ayoub\'s second figure turns out to be **a figure he has been quoting for two years that nobody ever counted**, and which is wrong by a factor of about three   **C** a percentage; it is confirmed'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about the word _about_?   **2** What does Mr Ayoub say he will do with the figure now?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  Of the forty, nine', [
  ['Ms Huda', 'Two figures each. Mr Ayoub — the one you are sure of first.'],
  ['Tareq', 'Nine of forty consignments refused last quarter. I counted them off the gate copies on Tuesday and I can show you the forty.'],
  ['Ms Huda', '**Base, period, counter. All three, in one sentence, and the class should hear what that costs: about eleven words.** Now the other one.'],
  ['Tareq', 'We lose about three hundred man-hours a year on the gate.'],
  ['Ms Huda', '_(a pause)_ **Three hundred man-hours of what, over what, counted by whom?**'],
  ['Tareq', '_(longer pause)_ I have been saying it for two years. ⚠ **I do not know where it came from and I have never counted it.**'],
  ['Ms Huda', '**Then count it now, roughly, out loud.** Nine seconds a stamp, two stamps, how many consignments?'],
  ['Tareq', 'About two hundred and forty a month. Eighteen seconds each is seventy-two minutes a month — **about fourteen hours a year.** ⚠ **Not three hundred. Fourteen.**'],
  ['Ms Huda', '**And that is the unit in one exchange.** The figure was not a lie and nobody invented it: ⚠ **it is a figure that lost its base and went on travelling.** Three hundred man-hours of **something** was probably once true of **something else** — and for two years it has been doing work in arguments about the gate.'],
  ['Omar', 'How do you stop that happening?'],
  ['Ms Huda', '**Print the base in the same sentence, every time, and the figure cannot travel.** _Nine of forty consignments last quarter_ cannot be quoted about anything else. ⚠ _About three hundred man-hours_ can be quoted about anything, **which is exactly why it survived two years.**'],
  ['Dima', 'And the hedges? _About._ _Just over._ _Nearly._'],
  ['Ms Huda', '**Honest, and only if you know which side of the number you are on.** _Just over four hundred_ says you have counted and gone past; _nearly four hundred_ says you have counted and not reached it. ⚠ **_About_ says you have not counted**, and that is a perfectly good thing to say — **as long as you then say what you would have had to count.**'],
  ['Jad', 'Is there a figure that needs no base?'],
  ['Ms Huda', '**A total of a closed set, and nothing else.** _There are eleven telephone customers_ needs no base, because the base is all of them. ⚠ **Everything else in this book is a part of something**, and the part is worthless without the whole: **nine is a scandal out of forty and a triumph out of four thousand.**'],
  ['Hiba', 'And the counter? Does it matter who counted?'],
  ['Ms Huda', '**It matters most when the answer is _I did_.** ⚠ A figure you counted yourself, on a named day, from a named document, is the strongest figure available to anybody in this room — **stronger than a figure from a system**, because you can be asked how you did it and the system cannot.'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **The base goes in the same breath as the number.** _Nine of forty_ — no pause. ⚠ A speaker who says _nine_, pauses, and then adds _of forty_ has told the room that the base is a qualification, **and half of them will remember the nine and not the forty.**'],
]));
out.push(sp());
out.push(box('Language box – a figure with its base', [
  '**Three things beside every figure, in the same sentence.** **1 The base** — a figure of **what**? **2 The period** — **when**? **3 The counter** — **who counted, and from what?** ⚠ _Of the forty consignments last quarter, nine were refused — my count, from the gate copies._ **Eleven words, and a reader who disagrees knows exactly where to go.**',
  '**The shapes.** _Of the N, M…_ _M of N…_ _M in every N…_ _M out of N…_ ⚠ **_One in nine_ and _eleven per cent_ are the same figure and are not the same sentence**: _one in nine_ carries its base and a percentage does not, **which is 10.2.**',
  '**Why a figure without a base travels.** ⚠ _Nine of forty consignments last quarter_ **cannot be quoted about anything else.** _About three hundred man-hours_ **can be quoted about anything** — which is why Mr Ayoub\'s survived two years and was wrong by a factor of about twenty. **A figure that lost its base is not a lie and nobody invented it.**',
  '**The hedges are honest, and each says something different.** _Just over four hundred_ — counted, and gone past. _Nearly four hundred_ — counted, and not reached. ⚠ **_About_ says you have not counted**, which is a perfectly good thing to say, **as long as you then say what you would have had to count.**',
  '**The only figure that needs no base is a total of a closed set.** _There are eleven telephone customers._ ⚠ **Everything else is a part of something, and the part is worthless without the whole: nine is a scandal out of forty and a triumph out of four thousand.**',
  '**The strongest figure available to anybody is one you counted yourself.** ⚠ _My count, from the gate copies, on Tuesday._ **Stronger than a figure from a system**, because you can be asked how you did it and a system cannot.',
  '**And the arithmetic to do out loud before you quote anybody\'s figure, including your own.** ⚠ **Nine seconds a stamp, two stamps, two hundred and forty consignments a month: seventy-two minutes a month, fourteen hours a year.** It takes twenty seconds, it needs no paper, **and it is the only thing that would have stopped three hundred man-hours.**',
  '**Pronunciation.** 🔊 **Track 10.2** **The base goes in the same breath as the number.** _Nine of forty_ — no pause. ⚠ A speaker who says _nine_, pauses, then adds _of forty_ has made the base a qualification, **and half the room will remember the nine and not the forty.**',
  '**Practise:** Say the figure with its base, period and counter. **1** something refused  **2** something counted this week  **3** a figure you have been repeating  **4** using _just over_  **5** using _about_, with what you would have had to count',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the figure from the card **as it is usually said**. B asks the three questions — **a figure of what? when? counted by whom, from what?** A answers as far as they can. B then says the figure again **with whatever of the three is available**, and marks the rest as missing. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as it is usually said)_ __________.'],
  ['B', 'A figure of what? When? Counted by whom, from what?'],
  ['A', '__________ / **I do not know.**'],
  ['B', '_(the sentence a reader can check)_ Of __________, __________ — __________. **Missing: __________.**'],
]));
out.push(table(['Card A – as it is usually said', 'Card B – as it is usually said'], [
  ['_We lose about three hundred man-hours a year on the gate._', '_Most of the calls are about promises nobody recorded._'],
  ['_Refusals are up considerably this year._', '_Hardly anybody fills in the date field._'],
  ['_⚠ The schedule has been applied hundreds of times._', '_⚠ The seal lifts on nearly all of them._'],
  ['_The second pad would save a great deal of time._', '_The survey is always late._'],
  ['_Everybody looks words up at the counter._', '_The disputes have come down a lot since February._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the ten, which of the three — base, period, counter — was missing. Then the count: **the base is missing in eight or nine of the ten** and the counter in all ten. ⚠ And the finding to say out loud: **the two rows marked ⚠ are the ones nobody can answer at all**, because those are figures that have lost their base and gone on travelling.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the figure you have been repeating and **do the arithmetic out loud, roughly, now.** Write the number you have been saying and the number you get. ⚠ **Do not look anything up** — the point of the stage is that twenty seconds of arithmetic is usually enough.'));
out.push(p('**b**  Swap. Your partner asks the three questions about **both** your figures and writes the missing ones in the margin. ⚠ Then each of you writes the checkable version of your unchecked figure, **with the word _about_ in it and with what you would have had to count.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq gave the figure he was sure of first: nine of forty consignments refused last quarter, counted off the gate copies on Tuesday, and he can show anybody the forty. Base, period and counter, all three in one sentence, and the class should hear what that costs — about eleven words. Then the other one: they lose about three hundred man-hours a year on the gate. Three hundred man-hours of what, over what, counted by whom? He has been saying it for two years, he does not know where it came from, and he has never counted it. So he counted it out loud: nine seconds a stamp, two stamps, about two hundred and forty consignments a month, eighteen seconds each, seventy-two minutes a month — about fourteen hours a year. Not three hundred. Fourteen. And that is the unit in one exchange: the figure was not a lie and nobody invented it, it is a figure that lost its base and went on travelling, and three hundred man-hours of something was probably once true of something else. Omar asked how you stop that happening, and the answer is to print the base in the same sentence every time, because then the figure cannot travel: nine of forty consignments last quarter cannot be quoted about anything else, and about three hundred man-hours can be quoted about anything, which is exactly why it survived two years. Dima asked about the hedges, and they are honest only if you know which side of the number you are on: just over four hundred says you have counted and gone past, nearly four hundred says you have counted and not reached it, and about says you have not counted — which is a perfectly good thing to say as long as you then say what you would have had to count. Jad asked whether any figure needs no base, and only a total of a closed set: there are eleven telephone customers needs no base because the base is all of them, and everything else is a part of something, where the part is worthless without the whole — nine is a scandal out of forty and a triumph out of four thousand. Hiba asked whether it matters who counted, and it matters most when the answer is I did: a figure you counted yourself, on a named day, from a named document, is the strongest figure available to anybody in the room, stronger than a figure from a system, because you can be asked how you did it and the system cannot._'));
out.push(p('**Listener task:** write your partner\'s two figures and which of the three was missing from each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Tareq writes after counting. Answer the questions.'));
out.push(model([
  '**THREE HUNDRED MAN-HOURS, AND WHERE THEY WENT** · T. Ayoub · 8 January',
  '**I have been quoting a figure for two years that I have never counted, and this note is to withdraw it before anybody else repeats it.** The figure is _about three hundred man-hours a year on the gate_, and I have used it in two meetings and one request.',
  '**What I counted on Tuesday, and how.** The two stamps on the gate copy, timed with a watch, ten consignments: **about nine seconds a stamp, so eighteen seconds a consignment.** The consignment book for December: **two hundred and thirty-eight consignments.**',
  '**What the figure actually is.** Eighteen seconds by two hundred and thirty-eight is seventy-one minutes a month, which is **about fourteen hours a year.** ⚠ **Not three hundred. Fourteen** — and the difference is a factor of about twenty.',
  '**Where I think the three hundred came from, which is a guess and marked as one.** ⚠ On the face of it, somebody once counted **all** the time spent at the gate — the signing, the waiting, the walking to the stamps and back — and three hundred man-hours a year is about right for that. **It is a figure about a different thing**, and I have been using it about the stamps.',
  '**What this does to the request I made in September.** The date stamp I asked for would add **about nine seconds to one consignment in fourteen** — **about seventeen minutes a year.** ⚠ **The request is now smaller than it was and better than it was**, because the figure beside it is one I counted on a named day from a named book.',
  '**What I would still like somebody to count.** The walking. **I have no figure for the distance from the vehicle to the stamps**, and the gate men say it is the real cost. If it is, the answer is to move the stamps and not to argue about nine seconds.',
  '**And one sentence about the two years.** Nobody ever asked me what the three hundred was a figure of. ⚠ **I would not have been able to answer, and I was not asked twice** — which is how a figure like that stays alive.',
]));
out.push(item('1', 'What figure is he withdrawing, and what did he use it for?'));
out.push(item('2', 'What did he count, how, and what is the figure actually?'));
out.push(item('3', 'What does he say the three hundred was probably a figure of, and what does he still want counted?'));
out.push(writers([
  'A note that withdraws your own figure: **the withdrawal in the first two lines** → **what you counted, and how** → **the figure as it actually is** → **where the old one came from, marked as a guess** → **what it does to your old request** → **what you still want counted** → **and one sentence about how long it lasted**.',
  '**Withdraw the figure before anybody repeats it, and say where you used it.** _Two meetings and one request._ ⚠ A withdrawal that does not say where the figure has been **leaves it in circulation**: the people who heard it have not read your note.',
  '⚠ **Print the method, not the result.** _Two stamps, timed with a watch, ten consignments: about nine seconds a stamp._ **A figure with its method beside it can be argued with**, which is the point: the gate men can tell you your ten were the quick ones, **and then you have a better figure.**',
  '**Mark the guess as a guess.** _On the face of it, somebody once counted all the time spent at the gate._ ⚠ This is 7.1 arriving inside a note about arithmetic, and it is worth the four words: **a guess about where a wrong figure came from is useful and is not evidence.**',
  '⚠ And say what the new figure does to **the request you made on the old one**. _Smaller than it was and better than it was._ **A writer who corrects a figure and leaves the request at the old size has not finished**, and the reader notices first.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that withdraws your own figure (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **I have been quoting a figure for ______________ that I have never counted, and this note is to withdraw it before anybody else repeats it.** The figure is _______________, and I have used it in ______________.   **What I counted, and how.** ______________. ______________.   **What the figure actually is.** ______________. ⚠ **Not ______________. ______________.**   **Where I think the old figure came from, which is a guess and marked as one.** ⚠ On the face of it, ______________.   **What this does to ______________.** ______________. ⚠ **The request is now ______________.**   **What I would still like somebody to count.** ______________.   **And one sentence about the ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The figure withdrawn, with the places it has been used',
  'The method printed, not only the result',
  'The guess about the old figure marked as a guess',
  'What the new figure does to the request made on the old one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the old figure and the new one, in that order, and the room says what the old one was probably a figure of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the withdrawal first, the method printed, the guess marked, and the request resized.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the base, the period and the counter in the same sentence as the figure; the method printed and not only the result; the request resized to the new figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the old figure and the new figure one after the other, in the same breath and at the same volume.** ⚠ The room says which one it would have believed. Then the sentence the cycle ends on, which is Mr Ayoub\'s: **nobody ever asked me what the three hundred was a figure of, and I was not asked twice.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take one figure from a notice or a circular you did not write and send yourself the three questions about it in one line: **a figure of what, when, counted by whom?** Keep the answer; **10.5 uses the page.**'));

// ===================== 10.2 =====================
out.push(h2('10.2  Forty per cent of what?'));
out.push(p('**Function:** collapsing a percentage with no denominator   ·   **Grammar:** _per cent of_ · _percentage points_ · _from X to Y_ · _one in N_   ·   **Pronunciation:** the denominator said as part of the figure'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out a percentage from anywhere — a notice, a circular, a label — and ask the room the one question: **of what?** ⚠ Then do the second half, which is the one people forget: **and how many is that?** A percentage that cannot answer the second question is usually hiding a very small number.'));
out.push(board('Complaints have fallen by forty per cent.', 'Complaints fell from five to three — a fall of two.'));
out.push(p('**b**  Which can a reader use? **1** _A forty per cent rise in enquiries._  **2** _Enquiries rose from five to seven._  **3** _Satisfaction is up eight per cent._  **4** _Of the forty-one disputes, thirty-one came from a single sample._  **5** _Performance improved by a fifth._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the one question is, and what does Mrs Sabbagh\'s forty per cent turn out to be?   **A** _how much?_; a large fall   **B** **_of what?_ — and then _how many is that?_** — and Nour\'s _forty per cent fall in escalations_ turns out to be **a fall from five to three in one month**, which is two calls and is inside the ordinary variation of the figure   **C** _when?_; a rise'));
out.push(p('**b**  Listen again. **1** What is the difference between _per cent_ and _percentage points_?   **2** When does Ms Huda say a percentage is the right form and a count is not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  Of what, and how many is that', [
  ['Ms Huda', 'Mrs Sabbagh. The sentence you were given to put in the quarterly note.'],
  ['Nour', '_A forty per cent fall in escalations following the February change._'],
  ['Ms Huda', '**Of what?**'],
  ['Nour', 'Of escalations. _(a pause)_ **Five in January and three in February.** ⚠ **It is two calls.**'],
  ['Ms Huda', '**Two calls, and the second question is the one everybody forgets: _and how many is that?_** ⚠ A percentage that cannot answer it **is usually hiding a very small number** — and a fall from five to three is inside the ordinary month-to-month movement of that figure, which has been between two and nine all year.'],
  ['Omar', 'So the sentence is wrong?'],
  ['Ms Huda', '**The sentence is arithmetically correct and it is not evidence of anything**, and those are different complaints. ⚠ **Write both complaints down separately**, because a writer who says _that is wrong_ about a correct sum will be shown the sum and will lose the argument.'],
  ['Nour', 'What should it say?'],
  ['Ms Huda', '**_Escalations fell from five to three. The figure has been between two and nine all year._** Two sentences, no percentage, ⚠ **and the second sentence is the one that does the work** — it gives the reader the ordinary movement, **which is the only thing that makes any single month interesting or dull.**'],
  ['Dima', 'And when is a percentage the right form?'],
  ['Ms Huda', '**When the bases differ and the counts cannot be compared.** ⚠ Nine refusals out of forty and ninety out of eight hundred: **the counts say the second depot is ten times worse and the percentages say it is twice as good.** A percentage is the honest form there, **and the raw counts are the misleading ones.**'],
  ['Jad', 'And _percentage points_?'],
  ['Ms Huda', '**A different thing from _per cent_, and the one most often got wrong in print.** From twenty per cent to thirty per cent is **ten percentage points** and **a fifty per cent rise.** ⚠ **Both are true, and one of them sounds three times the size of the other** — which is why you should expect to meet whichever suits the writer.'],
  ['Hiba', 'Is there a form that cannot be misused?'],
  ['Ms Huda', '**_One in N_, and it is the form to prefer in prose.** _One call in nine_ carries its base in the words. ⚠ _Eleven per cent_ carries nothing, **and the reader has to supply the base from memory or invent one** — which, in my experience of reading staff papers, they invent.'],
  ['Rim', 'And the arithmetic in the head?'],
  ['Ms Huda', '**Ten per cent of anything is the number with the point moved.** ⚠ **Do that first, before you read on**: ten per cent of eight hundred is eighty, so ninety out of eight hundred is a little over eleven per cent. **Four seconds**, and you now know whether the writer\'s adjective fits their number.'],
  ['Mazen', 'And saying it aloud?'],
  ['Ms Huda', '🔊 **The denominator is said as part of the figure, not after it.** _One call in nine_ — one phrase. ⚠ And when you have to read a percentage out, **say the count straight afterwards in the same breath**: _forty per cent, which is two calls._ **A room that hears the count does not need the warning.**'],
]));
out.push(sp());
out.push(box('Language box – the percentage and its denominator', [
  '**Two questions, and the second is the one everybody forgets.** **1 _Of what?_** **2 _And how many is that?_** ⚠ **A percentage that cannot answer the second is usually hiding a very small number**: a _forty per cent fall_ that is **five to three** is two calls.',
  '**And then the third thing, which is not a question but a figure: the ordinary movement.** ⚠ _Escalations fell from five to three. The figure has been between two and nine all year._ **The second sentence does the work**, because the ordinary range is the only thing that makes a single month interesting or dull.',
  '**Two complaints, kept separate.** _That sum is wrong_ and _that sum is not evidence of anything_. ⚠ **A writer who makes the first complaint about a correct sum will be shown the sum and will lose the argument.** The February figure was arithmetically perfect.',
  '**When a percentage is the honest form and the counts are the misleading ones.** ⚠ **Nine of forty against ninety of eight hundred: the counts say the second is ten times worse and the percentages say it is twice as good.** **Percentages when the bases differ; counts when they do not.**',
  '**_Per cent_ and _percentage points_ are different things.** From **20% to 30%** is **ten percentage points** and **a fifty per cent rise.** ⚠ **Both true, and one sounds three times the size** — **expect to meet whichever suits the writer**, and say which one you mean.',
  '**The form to prefer in prose: _one in N_.** _One call in nine_ **carries its base in the words.** ⚠ _Eleven per cent_ carries nothing and the reader supplies the base from memory — **or invents one, which is what happens.**',
  '**And the arithmetic to do before you read on, which takes four seconds.** ⚠ **Ten per cent of anything is the number with the point moved.** Ten per cent of eight hundred is eighty, so ninety of eight hundred is a little over eleven per cent. **You now know whether the writer\'s adjective fits their number.**',
  '**One warning about the small base, because it is the commonest trap in a staff paper.** A percentage of a base under about twenty **moves by a visible amount every time one case changes.** ⚠ On a base of five, **one case is twenty per cent** — so a paper reporting percentage changes on small bases is reporting the arrival and departure of single cases, **and should print the cases.**',
  '**Pronunciation.** 🔊 **Track 10.4** **The denominator is said as part of the figure, not after it:** _one call in nine_ — one phrase. ⚠ And when you must read a percentage out, **give the count in the same breath**: _forty per cent, which is two calls._ **A room that hears the count needs no warning.**',
  '**Practise:** Ask both questions and then rewrite the sentence. **1** a fall of forty per cent  **2** a rise of a fifth  **3** _satisfaction is up eight per cent_  **4** a percentage on a base of five  **5** a case where the percentage is the honest form',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the percentage from the card. B asks **of what?** and **how many is that?** A gives the counts. B then rewrites the sentence **with the counts and the ordinary range**, and says whether the percentage or the count is the honest form. ⚠ **One row on each card is a case where the percentage is right**; B must say which. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the sentence)_ __________ per cent __________.'],
  ['B', 'Of what? And how many is that?'],
  ['A', 'From __________ to __________. The ordinary range is __________.'],
  ['B', '_(rewritten)_ __________. **Honest form: percentage / count**, because __________.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_A forty per cent fall in escalations._ _(5 → 3; range 2–9)_', '_A fifty per cent rise in telephone orders._ _(8 → 12; range 6–14)_'],
  ['_Refusals down a third._ _(9 → 6; range 4–11)_', '_Disputed results down a quarter._ _(41 → 31; range 28–45)_'],
  ['_⚠ Nine of forty against ninety of eight hundred._', '_⚠ Four of eleven against sixty of four hundred._'],
  ['_Satisfaction up eight per cent._ _(of what? nobody knows)_', '_Complaints up two hundred per cent._ _(1 → 3)_'],
  ['_From twenty per cent to thirty per cent._', '_From two per cent to four per cent._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the counts behind each of the ten, and which form is honest. Then the count: **in seven of the ten the count is the honest form**, and in the two rows marked ⚠ the percentage is — **because the bases differ and the counts cannot be compared.** ⚠ And the row to dwell on is _complaints up two hundred per cent_: **one to three**, which is two complaints and is a true sum.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Find a percentage in something you have to read this week and answer both questions in writing. ⚠ **If you cannot find the counts, write that down as the finding** — _the base is not printed and cannot be worked out from the page_ is a complete and useful answer, **and it is the commonest one.**'));
out.push(p('**b**  Swap. Each of you rewrites the other\'s percentage **as a count with its ordinary range**, and then says in one line which of the two sentences a reader could act on.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour had been given a sentence for the quarterly note: a forty per cent fall in escalations following the February change. Asked of what, she said of escalations — five in January and three in February, which is two calls. And the second question is the one everybody forgets: and how many is that? A percentage that cannot answer it is usually hiding a very small number, and a fall from five to three is inside the ordinary month-to-month movement of a figure that has been between two and nine all year. Omar asked whether the sentence is wrong, and the sentence is arithmetically correct and it is not evidence of anything, and those are different complaints: write both down separately, because a writer who says that is wrong about a correct sum will be shown the sum and will lose the argument. Nour asked what it should say, and it should say that escalations fell from five to three, and that the figure has been between two and nine all year — two sentences, no percentage, and the second sentence is the one that does the work, because the ordinary movement is the only thing that makes any single month interesting or dull. Dima asked when a percentage is the right form, and when the bases differ and the counts cannot be compared: nine refusals out of forty against ninety out of eight hundred, where the counts say the second depot is ten times worse and the percentages say it is twice as good. A percentage is the honest form there and the raw counts are the misleading ones. Jad asked about percentage points, which are a different thing from per cent and the thing most often got wrong in print: from twenty per cent to thirty per cent is ten percentage points and a fifty per cent rise, both true, and one of them sounds three times the size of the other. Hiba asked whether any form cannot be misused, and one in N is the form to prefer in prose, because one call in nine carries its base in the words while eleven per cent carries nothing and the reader invents a base. And Rim asked about arithmetic in the head: ten per cent of anything is the number with the point moved, which takes four seconds and tells you whether the writer\'s adjective fits their number._'));
out.push(p('**Listener task:** write your partner\'s percentage, the counts behind it, and which form is honest.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour sends back about the quarterly sentence. Answer the questions.'));
out.push(model([
  '**THE FORTY PER CENT · and what it is forty per cent of** · N. Sabbagh · 10 January',
  '**I have been asked to put _a forty per cent fall in escalations_ in the quarterly note and I am asking for it to be taken out.** ⚠ **The sum is correct. That is not my objection.**',
  '**What the figure is.** Escalations were **five in January and three in February.** Forty per cent is two calls. **The figure has been between two and nine every month since last March**, and I have the twelve monthly counts.',
  '**Why I am not saying the sentence is wrong.** It is not wrong; it is arithmetically perfect, and ⚠ **a note that calls a correct sum wrong will be shown the sum and will be ignored on everything else in it.** My objection is the other one: **it is not evidence of anything**, because two calls is inside the ordinary movement of a figure that moves by two or three every month on its own.',
  '**What the sentence should be, and it is shorter.** _Escalations fell from five to three. The figure has been between two and nine since last March._ ⚠ **Two sentences, no percentage, and the second one is the one that does the work** — it tells the reader what ordinary looks like, **which is the only thing that makes any single month interesting or dull.**',
  '**And the figure in the same note that I would keep.** _Of the forty-one escalation calls last quarter, thirty-four involved a promise that is in no note of ours._ ⚠ **That one has a base, a period and a counter**, and thirty-four out of forty-one would still be thirty-one out of forty-one if three of them turned out to be mine. **It survives a bad month.**',
  '**What I am asking for.** The percentage out, the two counts in, and the range beside them. **It costs the note four words and it costs the February change its only quotable sentence**, and I am aware that this is why I shall be argued with.',
  '**One sentence about why it matters more than it looks.** If the quarterly note carries a forty per cent fall, **the next quarterly note has to carry whatever happened next** — and three to five is a sixty-seven per cent rise. ⚠ **A percentage on a base of five commits you to reporting single calls as policy outcomes for ever.**',
]));
out.push(item('1', 'What is she asking for, and what does she say her objection is not?'));
out.push(item('2', 'What should the sentence be, and which of its two sentences does the work?'));
out.push(item('3', 'Which figure in the note would she keep, and what makes it survive a bad month?'));
out.push(writers([
  'A note that takes a percentage out: **what you are asking for, and _the sum is correct_** → **the counts, and the ordinary range** → **why you are not calling it wrong** → **the sentence it should be** → **a figure in the same note that you would keep, and why** → **what the change costs** → **and one sentence about next quarter**.',
  '⚠ **Say _the sum is correct_ in the first two lines.** A reader who thinks you are disputing the arithmetic will check it, find it right, **and stop reading** — which is the fate of most objections to a figure. **Only one of the two complaints is yours.**',
  '**Print the ordinary range beside the counts.** _Between two and nine since last March._ ⚠ **The range is the sentence that does the work**, and it is almost never in the page objected to: without it, three is a triumph and five a scandal **and nobody can tell which.**',
  '**Keep a figure as well.** _Thirty-four of forty-one escalation calls involved a promise in no note of ours._ ⚠ A note that only removes figures reads as an objection to measurement; **one that keeps a figure is read as an argument about which figures are worth having.**',
  '⚠ And end on **what the percentage commits the writer to next quarter**. _Three to five is a sixty-seven per cent rise._ **A percentage on a base of five commits you to reporting single calls as policy outcomes for ever** — and that sentence wins the argument more often than any objection to the figure.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that takes a percentage out (80 words or more).'));
out.push(p('**______________ · and what it is ______ per cent of** · ______________ · ______________   **I have been asked to put _______________ and I am asking for it to be taken out.** ⚠ **The sum is correct. That is not my objection.**   **What the figure is.** ______________ and ______________. ______ per cent is ______________. **The figure has been between ______ and ______ since ______________.**   **Why I am not saying the sentence is wrong.** ⚠ ______________. My objection is the other one: **it is not evidence of anything**, because ______________.   **What the sentence should be, and it is shorter.** _______________. _______________. ⚠ **The second one does the work**, because ______________.   **And the figure I would keep.** _______________. ⚠ **It has a base, a period and a counter**, and ______________.   **What I am asking for.** ______________.   **One sentence about next quarter.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_The sum is correct_ said in the first two lines',
  'The counts, with the ordinary range beside them',
  'A figure kept as well as one removed, with the reason',
  'What the percentage commits the writer to next quarter',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the percentage and then the counts, and the room says which sentence it would print.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the sum conceded as correct, the counts with their range, a figure kept, and the commitment named.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: _the sum is correct_ in the first two lines, the ordinary range beside the counts, one figure kept with its reason.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the percentage and then the count, in the same breath.** ⚠ _Forty per cent, which is two calls._ The room says whether the warning was still needed. Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **a percentage on a base of five commits you to reporting single calls as policy outcomes for ever.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take one percentage from anything you have to read this week and write the two counts beside it. **If you cannot find them, write _the base is not printed and cannot be worked out from the page_** — which is a complete answer and is the commonest one.'));

// ===================== 10.3 =====================
out.push(h2('10.3  Nine seconds a what?'));
out.push(p('**Function:** writing a rate with both of its units   ·   **Grammar:** _per_ · _a_ (_twice a week_) · _one in N_ · the denominator the decision uses   ·   **Pronunciation:** the two halves of a rate'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a rate from your own work **with both its units**, and then **say it again with a different denominator.** _Nine seconds a consignment — fourteen hours a year._ ⚠ Your partner says which of the two they would use to decide, and why. **The two are the same fact and they are not the same argument.**'));
out.push(board('Filling in the form takes ages.', 'Forty seconds a call — about seven minutes an hour, on eleven calls.'));
out.push(p('**b**  Which are rates? **1** _Nine seconds._  **2** _Nine seconds a consignment._  **3** _About two hundred and forty a month._  **4** _Forty seconds a call._  **5** _A great deal of time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say every rate has two of, and what does Mr Darwish find when he changes the denominator?   **A** figures; nothing   **B** **two units — a numerator unit and a denominator unit** — and Omar finds that **forty seconds a call** and **seven minutes an hour** and **four and a half days a year** are the same fact, and that **the one he had been using was the one that suited his case**   **C** sources; a smaller figure'));
out.push(p('**b**  Listen again. **1** Which denominator does Ms Huda say to choose?   **2** What does she say about _per_ and _a_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  The same fact, three sizes', [
  ['Ms Huda', 'Mr Darwish. The cost of the second page of the form, as you have been giving it.'],
  ['Omar', 'Forty seconds a call.'],
  ['Ms Huda', '**Two units: seconds, and a call. Now the same fact per hour, and then per year.**'],
  ['Omar', 'Eleven calls an hour, so **about seven minutes an hour.** And seven minutes by six hours by about two hundred and forty working days — _(pause)_ **about four and a half days a year.** ⚠ **That is the same fact and it is a different argument.**'],
  ['Ms Huda', '**Which is the cycle, and here is the uncomfortable part: you have been using the small one.** ⚠ **Forty seconds a call sounds like nothing** and four and a half days a year sounds like a scandal, **and you were arguing in favour of the page.**'],
  ['Omar', 'I was. I had not noticed I was choosing.'],
  ['Ms Huda', '**Nobody notices.** ⚠ **The denominator is where the thumb goes on the scale in ordinary honest prose**, and it goes there without anybody deciding to put it there — **you reach for the size that sounds like the thing you already think.**'],
  ['Dima', 'So which denominator is the right one?'],
  ['Ms Huda', '**The one the decision uses.** ⚠ If the decision is _shall we add the page_, the denominator is **the year**, because that is the unit a staffing decision is made in. If the decision is _can I do this on a busy morning_, the denominator is **the call.** **Two honest answers to two different questions, and the question comes first.**'],
  ['Jad', 'And if you do not know which decision?'],
  ['Ms Huda', '**Then give both, in one sentence, and let the reader choose.** _Forty seconds a call, which is about four and a half days a year._ ⚠ **It costs eight words and it is the single most useful habit in this unit**, because a reader who is given both sizes cannot be surprised later by the other one.'],
  ['Hiba', 'Is a denominator ever simply wrong?'],
  ['Ms Huda', '**When the reader does not use it.** _Two refusals per thousand consignments_ is useless to a depot that handles two hundred and forty a month — ⚠ **they will never see a thousand consignments in a quarter**, so the figure cannot be compared with anything they have ever experienced. **Per month, or per quarter, or not at all.**'],
  ['Rim', 'And _per_ against _a_?'],
  ['Ms Huda', '**_A_ is the ordinary register and _per_ is the technical one, and the rule is not to mix them in a sentence.** _Forty seconds a call_ ✓. _Forty seconds per call_ ✓ in a specification. ⚠ _Forty seconds a call per operator_ ✗ — **two registers and two denominators, and a reader has to stop.**'],
  ['Mazen', 'What about the rates nobody writes as rates?'],
  ['Ms Huda', '⚠ **_The seal lifts on nearly all of them_ is a rate with the denominator missing and the numerator replaced by an adjective.** It is worth hunting for, because it is the commonest figure in speech: **nearly all of what, out of how many, over what?** Mr Hariri\'s answer, when he counted, was **nine cartons in five months out of about sixty.**'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **The two halves of a rate go in one phrase, and the stress falls on the denominator.** _Forty seconds a **call**._ ⚠ A speaker who stresses the numerator has given the room a quantity, **and a quantity with no denominator is what this whole unit is about.**'],
]));
out.push(sp());
out.push(box('Language box – both units of a rate', [
  '**Every rate has two units: a numerator unit and a denominator unit.** _Nine seconds_ is a quantity. ⚠ **_Nine seconds a consignment_ is a rate**, and only the second can be compared with anything.',
  '**The same fact comes in three sizes and they are different arguments.** **Forty seconds a call · about seven minutes an hour · about four and a half days a year.** ⚠ **The small one sounds like nothing and the large one sounds like a scandal**, and Mr Darwish had been using the small one while arguing in favour of the page — **without noticing he was choosing.**',
  '⚠ **The denominator is where the thumb goes on the scale in ordinary honest prose**, and it goes there without anybody deciding: **you reach for the size that sounds like the thing you already think.** Knowing that is most of the defence.',
  '**Which denominator is right: the one the decision uses.** ⚠ _Shall we add the page?_ → **the year**, because staffing is decided in years. _Can I do this on a busy morning?_ → **the call.** **Two honest answers to two different questions, and the question comes first.**',
  '**And when you do not know the decision, give both in one sentence.** _Forty seconds a call, which is about four and a half days a year._ ⚠ **Eight words, and the single most useful habit in this unit**: a reader given both sizes cannot be surprised later by the other one.',
  '**A denominator the reader does not use is simply wrong.** _Two refusals per thousand consignments_ to a depot handling two hundred and forty a month: ⚠ **they will never see a thousand in a quarter**, so the figure cannot be compared with anything they have experienced. **Per month, per quarter, or not at all.**',
  '**_A_ is the ordinary register; _per_ is the technical one; do not mix them in a sentence.** _Forty seconds a call_ ✓ · _forty seconds per call_ ✓ in a specification · ⚠ _forty seconds a call per operator_ ✗ — **two registers and two denominators, and the reader has to stop.**',
  '**And the rates nobody writes as rates, which are the commonest figures in speech.** ⚠ _The seal lifts on nearly all of them_ — **an adjective for a numerator and no denominator at all.** _Nearly all of what, out of how many, over what?_ **Mr Hariri\'s answer, counted: nine cartons in five months out of about sixty.**',
  '**Pronunciation.** 🔊 **Track 10.6** **Both halves in one phrase, stress on the denominator:** _forty seconds a **call**._ ⚠ A speaker who stresses the numerator has given the room a quantity — **and a quantity with no denominator is what this unit is about.**',
  '**Practise:** Give the rate with both units, then again with another denominator. **1** seconds a call  **2** a figure a month  **3** a rate with the denominator missing  **4** one where the reader\'s unit is the month  **5** both sizes in one sentence',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the quantity from the card. B turns it into a rate **with both units**, then gives the same fact with **a second denominator**, and says which one the decision on the card uses. ⚠ **Two rows on each card have no denominator at all**; B must supply the questions rather than a figure. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as given)_ __________. _(the decision: __________)_'],
  ['B', '_(the rate)_ __________ a __________.'],
  ['B', '_(the same fact, another denominator)_ __________, **which is** __________.'],
  ['B', 'The decision uses **__________**, because __________.'],
]));
out.push(table(['Card A – the quantity and the decision', 'Card B – the quantity and the decision'], [
  ['_Forty seconds. (Shall we add the second page?)_', '_Nine seconds. (Shall we move the stamps?)_'],
  ['_Four minutes. (Shall we write five lines a meeting?)_', '_Twenty minutes. (Shall we put in the promise field?)_'],
  ['_⚠ The seal lifts on nearly all of them. (Shall I refuse the carton?)_', '_⚠ Hardly anybody fills in the date field. (Shall we keep it?)_'],
  ['_Two refusals per thousand consignments. (Is our depot worse?)_', '_Three disputes per hundred samples. (Shall we send two portions?)_'],
  ['_⚠ It takes ages. (Shall we buy the second probe?)_', '_⚠ We get them all the time. (Shall we change the form?)_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both units for each of the ten, and the denominator the decision uses. Then the count: **in six of the ten the denominator first offered is not the one the decision uses** — and it is the smaller one in five of those six. ⚠ And the four rows marked ⚠ produce **three questions and no figure**, which is the correct answer and should be marked as one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own rate **three times**: per transaction, per hour or day, and per year. ⚠ Then write **which of the three you have been using** and **which decision you were arguing about.** In most cases the two do not match, and it is worth writing down which way the mismatch went.'));
out.push(p('**b**  Swap. Your partner writes the one-sentence version with both sizes in it — _forty seconds a call, which is about four and a half days a year_ — and then says which half of it they would quote if they disagreed with you.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar had been giving the cost of the second page of the form as forty seconds a call. Two units: seconds, and a call. Asked for the same fact per hour, he said eleven calls an hour, so about seven minutes an hour; and per year, seven minutes by six hours by about two hundred and forty working days, which is about four and a half days a year — the same fact and a different argument. Which is the cycle, and here is the uncomfortable part: he had been using the small one, because forty seconds a call sounds like nothing and four and a half days a year sounds like a scandal, and he was arguing in favour of the page. He said he had not noticed he was choosing, and nobody notices: the denominator is where the thumb goes on the scale in ordinary honest prose, and it goes there without anybody deciding to put it there, because you reach for the size that sounds like the thing you already think. Dima asked which denominator is the right one, and it is the one the decision uses: if the decision is whether to add the page, the denominator is the year, because that is the unit a staffing decision is made in; if the decision is whether this can be done on a busy morning, the denominator is the call. Two honest answers to two different questions, and the question comes first. Jad asked what to do when you do not know which decision, and then give both in one sentence and let the reader choose — forty seconds a call, which is about four and a half days a year. It costs eight words and it is the most useful habit in the unit, because a reader who is given both sizes cannot be surprised later by the other one. Hiba asked whether a denominator can be simply wrong, and it can: two refusals per thousand consignments is useless to a depot that handles two hundred and forty a month, because they will never see a thousand in a quarter and the figure cannot be compared with anything they have experienced. Rim asked about per against a, and a is the ordinary register and per is the technical one, and the rule is not to mix them in a sentence. And Mazen asked about the rates nobody writes as rates: the seal lifts on nearly all of them is a rate with the denominator missing and the numerator replaced by an adjective, and when he counted it was nine cartons in five months out of about sixty._'));
out.push(p('**Listener task:** write your partner\'s rate in two sizes, and which one they had been using.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Omar writes about the two sizes of his own figure. Answer the questions.'));
out.push(model([
  '**FORTY SECONDS A CALL, AND FOUR AND A HALF DAYS A YEAR** · O. Darwish · 12 January',
  '**These are the same figure and I have been giving you the small one.** ⚠ **I was not hiding anything and I did not notice I was choosing**, which is the only part of this note that may be of use to anybody else.',
  '**The figure, with both units and both sizes.** The second page of the enquiry form takes **about forty seconds a call** — timed with a watch, eleven calls, on Monday. Eleven calls an hour is **about seven minutes an hour**; six hours a day over about two hundred and forty working days is **about four and a half days a year** of one person\'s time.',
  '**Which of the two I have been using, and in what argument.** The forty seconds, in three meetings, **arguing for the page.** ⚠ **Forty seconds a call sounds like nothing. Four and a half days a year sounds like a post.** Same fact.',
  '**Which denominator the decision actually uses.** The decision is whether to add the page, and that is a staffing decision, **so the denominator is the year.** ⚠ **I have been answering a different question from the one being asked** — _can a busy counter manage it?_ — which nobody had put.',
  '**And I am still in favour of the page, on the larger figure.** Four and a half days a year against **thirty-four of the forty-one escalation calls** last quarter that turned on a promise in no note of ours. **Each of those takes between forty minutes and three hours.** Thirty-four at an hour is thirty-four hours, **which is about four days** — and that is the comparison I should have been making from the start.',
  '**What I would still like somebody to count.** How much of the forty seconds is the promise field and how much is the rest of the page. ⚠ **I have no figure for that at all**, and if the field is ten seconds of the forty, the page is the wrong thing to argue about.',
  '**And one sentence about the three meetings.** Nobody asked me for the annual figure. ⚠ **If they had, I should have had to work it out in front of them, and I should have given the right one** — **which is an argument for being asked rather than for being honest.**',
]));
out.push(item('1', 'What two sizes of the same figure does he give, and which has he been using?'));
out.push(item('2', 'Which denominator does the decision use, and what question had he been answering?'));
out.push(item('3', 'What comparison does he say he should have been making, and what does he still want counted?'));
out.push(writers([
  'A note that gives both sizes of your own figure: **the two sizes, and which one you were using** → **both units and the method** → **the argument you used it in** → **the denominator the decision uses** → **your position on the larger figure** → **what you cannot count** → **and one sentence about not having been asked**.',
  '⚠ **Say _I did not notice I was choosing_ and mean it.** **The confession is the only part of such a note of use to anybody else** — a writer who implies they were careful all along has written a correction nobody learns from, **including the writer.**',
  '**Give the chain, not the result.** _Eleven calls an hour; six hours a day; two hundred and forty days._ ⚠ **Every step is a place where somebody can disagree with you**, and that is what you want: the counter may work five hours and not six, **and then everybody has a better figure.**',
  '**Restate your position on the larger figure.** _I am still in favour of the page, on four and a half days a year._ ⚠ A writer who corrects a figure and goes quiet lets the reader assume the argument collapsed — **and a position that survives its own worst figure is the strongest thing on the page.**',
  '⚠ And **name what you cannot count**. _How much of the forty seconds is the promise field._ **A note that says where its own arithmetic stops is believed about the rest** — and this one admits the whole argument may be about the wrong object.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that gives both sizes (80 words or more).'));
out.push(p('**______________, AND ______________** · ______________ · ______________   **These are the same figure and I have been giving you the ______________ one.** ⚠ **I did not notice I was choosing.**   **The figure, with both units and both sizes.** ______________ — ______________. ______________ is ______________; ______________ is ______________.   **Which of the two I have been using, and in what argument.** ______________. ⚠ **______________ sounds like ______________. ______________ sounds like ______________.** Same fact.   **Which denominator the decision uses.** ______________, **so the denominator is ______________.** ⚠ ______________.   **And my position on the larger figure.** ______________.   **What I would still like somebody to count.** ______________.   **And one sentence about ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sizes of the figure, with both units in each',
  'The arithmetic chain printed, step by step',
  'The denominator the decision uses, named',
  'The writer\'s position restated on the larger figure',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their two sizes, smaller first, and the room says which one it would have been given.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: both sizes, the arithmetic chain, the decision\'s denominator, your position on the larger figure, and what you cannot count.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both units in every rate, the arithmetic chain printed step by step, the position restated on the larger figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the rate with the stress on the denominator — _forty seconds a **call**_ — and then the annual size.** ⚠ The room says which it heard as the real figure. Then the sentence the cycle ends on, which is Mr Darwish\'s and is the most useful thing in it: **I did not notice I was choosing.**'));
out.push(hw('Write the note (80+ words). ⚠ Then find one rate in something you did not write and **convert it to the denominator your own decision uses.** Keep both numbers side by side; **10.5 asks what would have to be true for the writer\'s version to mean what they used it to mean.**'));

// ===================== 10.4 =====================
out.push(pb());
out.push(h2('10.4  Compared with what?'));
out.push(p('**Function:** comparing two figures without a false base   ·   **Grammar:** _compared with_ · _as against_ · _twice as many … as_ · _like for like_   ·   **Pronunciation:** the two bases in the same breath'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make a comparison from your own work out loud, **with both bases in it.** _Nine of forty this quarter, against six of thirty-one last quarter._ ⚠ Then your partner asks the three questions: **same period? same definition? same population?** In most comparisons at least one of the three fails.'));
out.push(board('This year\'s group is far better than last year\'s.', 'Seven of nine passed this year, against fourteen of twenty-two last year.'));
out.push(p('**b**  Which comparison can a reader use? **1** _Twice as many refusals as last year._  **2** _Nine of forty this quarter, against six of thirty-one last quarter._  **3** _Results are much improved._  **4** _Seven of nine, against fourteen of twenty-two — and the test changed in September._  **5** _Better than ever._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three questions does Ms Huda say to ask before any comparison, and which of them does Mrs Nasser\'s comparison fail?   **A** one question; none   **B** **same period? same definition? same population?** — and Hiba\'s comparison fails **all three**: nine students against twenty-two, a test that changed in September, and a group selected differently   **C** two questions; the second'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say _like for like_ obliges a writer to do?   **2** What does she say is the strongest thing to write when a comparison cannot be made?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  Same period, same definition, same population', [
  ['Ms Huda', 'Mrs Nasser. The sentence in your report on the training group.'],
  ['Hiba', '_This year\'s group did twice as well as last year\'s._'],
  ['Ms Huda', '**Three questions, in order. Same period? Same definition? Same population?**'],
  ['Hiba', '_(pause)_ Period, **yes** — both measured at the end of the course. Definition, **no**: the assessment changed in September, and the old one had a written paper where the new one has an observed lesson. Population, **no**: nine this year and twenty-two last year — ⚠ **and the nine were chosen, because we could only take nine.** **The comparison fails two of the three and I wrote it on Tuesday.**'],
  ['Omar', 'Can it be repaired?'],
  ['Ms Huda', '**Not into a comparison, and that is the finding of the cycle.** ⚠ **A comparison that fails the definition question cannot be fixed by arithmetic**, because there is no quantity that converts a written paper into an observed lesson. **The population question can sometimes be repaired and the definition question never can.**'],
  ['Hiba', 'So what do I write?'],
  ['Ms Huda', '⚠ **The strongest thing available: _these two figures cannot be compared, and here is what I should need in order to compare them._** **Seven of nine and fourteen of twenty-two, both printed, with the two assessments named and the selection named** — and then the sentence that says what would make a comparison possible: **two groups assessed the same way.**'],
  ['Dima', 'Editors ask for a comparison and that answer sounds like a refusal.'],
  ['Ms Huda', '**It reads as a refusal for about four seconds and then it reads as competence.** ⚠ **I have never once seen a reader think less of a writer for it** — and I have seen a great many readers discover, in that paragraph, that the comparison they had been quoting for two years was never available.'],
  ['Jad', 'And _like for like_? Everybody says it.'],
  ['Ms Huda', '⚠ **It is a promise and it obliges you to say what you held constant.** _Like for like_ on its own means nothing: _like for like — the same four depots, the same three months, the same definition of a refusal_ is a sentence. **Three named constants, or do not use the phrase.**'],
  ['Rim', 'What is the commonest false base, in your experience?'],
  ['Ms Huda', '**A part-year against a full year**, and it is almost always innocent. ⚠ _Nine refusals this year against six last year_ — **and this year is nine months long.** **Nine in nine months is twelve a year**, which is double and not half as much again, **and nobody did that on purpose.**'],
  ['Mazen', 'And the shapes?'],
  ['Ms Huda', '**_Compared with_** and **_as against_** both take the second base with them and are the two to use. ⚠ **_Twice as many_ is the one to distrust**, because it hides both bases: _twice as many as last year_ can be two against one. **If you write _twice_, print both numbers in the same sentence.**'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **The two bases go in one breath.** _Nine of forty, against six of thirty-one._ ⚠ A speaker who pauses between them has made the second base an afterthought, **and a comparison with one audible base is the thing the cycle is about.**'],
]));
out.push(sp());
out.push(box('Language box – the three questions before a comparison', [
  '**Three questions, in this order, before any comparison.** **1 Same period?** **2 Same definition?** **3 Same population?** ⚠ **In most comparisons at least one of the three fails**, and Mrs Nasser\'s failed two: a changed assessment and a selected group of nine against twenty-two.',
  '⚠ **The population question can sometimes be repaired and the definition question never can.** **No quantity converts a written paper into an observed lesson**, so a comparison that fails the definition question **cannot be fixed by arithmetic** — and arithmetic is what everybody tries first.',
  '**So the strongest thing to write is that it cannot be done, and what you would need.** ⚠ _These two figures cannot be compared. Seven of nine, assessed by observed lesson; fourteen of twenty-two, assessed by written paper; and the nine were selected. **To compare them I should need two groups assessed the same way.**_',
  '**It reads as a refusal for about four seconds and then it reads as competence.** ⚠ **No reader has ever thought less of a writer for it** — and many readers discover in that paragraph that **a comparison they had been quoting for two years was never available.**',
  '**_Like for like_ is a promise and it obliges you to name what you held constant.** ⚠ On its own it means nothing. _Like for like — the same four depots, the same three months, the same definition of a refusal._ **Three named constants, or do not use the phrase.**',
  '**The commonest false base, and it is almost always innocent: a part-year against a full year.** ⚠ _Nine this year against six last year_ — **and this year is nine months long.** **Nine in nine months is twelve a year**, which is double and not half as much again.',
  '**The shapes.** **_Compared with_** and **_as against_** carry the second base with them and are the two to use. ⚠ **Distrust _twice as many_**, which hides both bases — _twice as many as last year_ can be two against one. **If you write _twice_, print both numbers in the same sentence.**',
  '**And one definition to hold on to, because it is where most of the trouble is.** ⚠ **A figure is a count of things that met a definition**, and the definition is usually written down nowhere. **Before comparing two counts, find out who decided what counted** — and if it was two different people, you have a comparison of two opinions wearing figures.',
  '**Pronunciation.** 🔊 **Track 10.8** **Both bases in one breath:** _nine of forty, against six of thirty-one._ ⚠ A speaker who pauses between them has made the second base an afterthought — **and a comparison with one audible base is what this cycle is about.**',
  '**Practise:** Make the comparison with both bases, then apply the three questions. **1** two quarters  **2** two years, one of them incomplete  **3** two groups of different sizes  **4** after a definition changed  **5** one that cannot be compared at all',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the comparison from the card **as it was written**. B asks the three questions and says which fail. B then writes either the repaired comparison **or** the sentence saying it cannot be made and what would be needed. ⚠ **Two rows on each card fail the definition question and cannot be repaired**; B must say so. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as written)_ __________.'],
  ['B', 'Same period? Same definition? Same population?'],
  ['B', 'Fails: __________.'],
  ['B', '_(repaired, or refused)_ __________. / **These cannot be compared. To compare them I should need __________.**'],
]));
out.push(table(['Card A – as written', 'Card B – as written'], [
  ['_Twice as many refusals as last year._ _(9 this year, 9 months; 6 last year, 12)_', '_Escalations are down by a third._ _(41 last quarter; 62 the quarter before, 4 months)_'],
  ['_⚠ This year\'s group did twice as well._ _(7 of 9, observed lesson; 14 of 22, written paper)_', '_⚠ Disputes are down since February._ _(a dispute was redefined in January)_'],
  ['_Our depot is worse than theirs._ _(9 of 40; 90 of 800)_', '_The thin reference is used more than the big one._ _(counted at the counter; counted by borrowing slips)_'],
  ['_⚠ Satisfaction is higher than in 2023._ _(a different question was asked)_', '_⚠ Complaints have halved._ _(the complaints book was replaced in March)_'],
  ['_Like for like, refusals are flat._ _(no constants named)_', '_Like for like, the survey was faster._ _(no constants named)_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** which of the three questions each of the ten fails, and whether it can be repaired. Then the count: **four of the ten fail the definition question and cannot be repaired at all.** ⚠ And the two _like for like_ rows are the ones to read out: **neither names a single constant**, and the phrase has been doing the work of three named facts in both.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write a comparison you have made or been given, **with both bases printed**, and then apply the three questions in writing. ⚠ **If it fails the definition question, do not repair it** — write the refusal sentence and what you would need instead.'));
out.push(p('**b**  Swap. Your partner finds the definition: **who decided what counted, on each side of your comparison?** ⚠ If the answer is two different people, say so in one line. **That is a comparison of two opinions wearing figures**, and it is commoner than anybody expects.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba had written that this year\'s training group did twice as well as last year\'s. Three questions, in order. Same period? Yes — both measured at the end of the course. Same definition? No: the assessment changed in September, and the old one had a written paper where the new one has an observed lesson. Same population? No: nine this year and twenty-two last year, and the nine were chosen, because they could only take nine. So the comparison fails two of the three, and she had written it on Tuesday. Omar asked whether it can be repaired, and not into a comparison, which is the finding of the cycle: a comparison that fails the definition question cannot be fixed by arithmetic, because there is no quantity that converts a written paper into an observed lesson — the population question can sometimes be repaired and the definition question never can. Hiba asked what she should write, and the strongest thing available: that these two figures cannot be compared, and here is what would be needed in order to compare them. Seven of nine and fourteen of twenty-two, both printed, with the two assessments named and the selection named, and then the sentence that says what would make a comparison possible — two groups assessed the same way. Dima said that editors ask for a comparison and that answer sounds like a refusal, and it reads as a refusal for about four seconds and then it reads as competence: she has never once seen a reader think less of a writer for it, and she has seen a great many readers discover in that paragraph that a comparison they had been quoting for two years was never available. Jad asked about like for like, and it is a promise that obliges you to say what you held constant: on its own it means nothing, and like for like with the same four depots, the same three months and the same definition of a refusal is a sentence — three named constants, or do not use the phrase. Rim asked for the commonest false base, and it is a part-year against a full year, and it is almost always innocent: nine refusals this year against six last year, where this year is nine months long, and nine in nine months is twelve a year. And on the shapes, compared with and as against both carry the second base with them, while twice as many hides both bases and can be two against one._'));
out.push(p('**Listener task:** write your partner\'s comparison, which questions it fails, and whether it can be repaired.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Hiba writes instead of the comparison. Answer the questions.'));
out.push(model([
  '**THE TWO GROUPS, AND WHY I AM NOT COMPARING THEM** · H. Nasser · 14 January',
  '**I was asked for a comparison between this year\'s group and last year\'s and I am not able to give one.** ⚠ **This paragraph is what I have instead of it**, and it is longer than the sentence I was asked for and shorter than the argument that would have followed the sentence.',
  '**Both figures, with both bases.** **Seven of nine** completed this year\'s course to standard. **Fourteen of twenty-two** completed last year\'s.',
  '**Why they are not comparable, in three parts.** **The period is the same** — both measured in the last week of the course. ⚠ **The definition is not**: last year\'s standard was a written paper and this year\'s is an observed lesson, **and there is no quantity that converts one into the other.** **The population is not**: we could take nine this year and we chose them, from thirty-one applications.',
  '**Which of the two faults can be mended.** The population can be, roughly: ⚠ **if I take last year\'s nine strongest on their written papers, eight of the nine completed** — which tells you something and is not a comparison, **because the definition is still two different things.**',
  '**What I should need in order to compare them.** **Two groups assessed the same way.** The observed lesson begins this year, so **the first comparison available to this directorate is next year against this year** — ⚠ **and it will be available in June and not before.**',
  '**What I can say instead, which is the part worth reading.** Of the nine, **six had never taught a lesson that anybody watched.** All six said the observed lesson was the hardest part of the course, and **five of the six asked for a second one.** ⚠ **That is a finding about a definition and not a comparison between two years**, and it is the only thing in this report I should want acted on.',
  '**And one sentence about the sentence I was asked for.** _This year\'s group did twice as well_ is arithmetically available and I wrote it on Tuesday. ⚠ **It would have been quoted for two years** — and the two years would have been spent comparing a written paper with a lesson.',
]));
out.push(item('1', 'What was she asked for, and what has she written instead?'));
out.push(item('2', 'Which of the two faults can be mended, and why does mending it not give a comparison?'));
out.push(item('3', 'What does she say she can offer instead, and what does she say about the sentence she was asked for?'));
out.push(writers([
  'A paragraph that refuses a comparison: **the refusal in the first line** → **both figures with both bases** → **the three questions answered, in order** → **which fault can be mended, and why mending it is not enough** → **what you would need, and when it will exist** → **what you can say instead** → **and one sentence about the sentence you were asked for**.',
  '**Refuse in the first line and say what the paragraph is.** _This paragraph is what I have instead of it._ ⚠ A reader who meets the refusal in the fourth line has read three lines **looking for the comparison**, and takes the refusal for an excuse.',
  '⚠ **Answer the three questions in order and say which one passes.** _The period is the same._ **A refusal that concedes nothing reads as evasion**; one that grants one of three and names the two that fail **reads as a count.**',
  '**Say when the comparison will exist.** _Next year against this year, available in June and not before._ ⚠ **A date turns a refusal into a plan**, and it stops the request being made again in a fortnight by somebody who did not read the page.',
  '⚠ And put the real finding in the paragraph that replaces the comparison. _Six of the nine had never taught a lesson anybody watched; five of the six asked for a second one._ **A refusal with a finding in it is worth more than the comparison was going to be**, and the writer should say which part they want acted on.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph that refuses a comparison (80 words or more).'));
out.push(p('**______________, AND WHY I AM NOT COMPARING THEM** · ______________ · ______________   **I was asked for a comparison between ______________ and ______________ and I am not able to give one.** ⚠ **This paragraph is what I have instead of it.**   **Both figures, with both bases.** ______________. ______________.   **Why they are not comparable, in three parts.** **The period ______________.** ⚠ **The definition ______________**, and ______________. **The population ______________.**   **Which fault can be mended.** ______________ — ⚠ **which tells you something and is not a comparison, because ______________.**   **What I should need.** ______________. **Available ______________ and not before.**   **What I can say instead.** ______________. ⚠ ______________.   **And one sentence about the sentence I was asked for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The refusal in the first line, with what the paragraph is instead',
  'Both figures with both bases printed',
  'The three questions answered in order, with the one that passes granted',
  'A date for when the comparison will exist',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the refusal line and then the finding they offer instead, and the room says which it would rather have been given.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full paragraph (180 words or more), to the shape in the writer\'s box: the refusal first, both bases, the three questions in order, the date, and the finding you offer instead.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both bases printed, the three questions answered in order with the one that passes granted, a date for when the comparison will exist.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the two figures with both bases, in one breath — _seven of nine, against fourteen of twenty-two_ — and then the refusal.** ⚠ The room says whether the refusal sounded like competence. Then the sentence the cycle ends on, which is Mrs Nasser\'s: **it would have been quoted for two years, and the two years would have been spent comparing a written paper with a lesson.**'));
out.push(hw('Write the paragraph (80+ words). ⚠ Then take one comparison you have been using and find out **who decided what counted on each side of it.** If the answer is two different people, write that down in one line: **it is a comparison of two opinions wearing figures**, and 10.5 begins there.'));

// ===================== 10.5 =====================
out.push(pb());
out.push(h2('10.5  What would have to be true'));
out.push(p('**Function:** naming the hidden premises of somebody else\'s figure   ·   **Grammar:** _for that to mean_ · _which assumes_ · _only if_ · _unless_   ·   **Pronunciation:** the figure, then its assumption, flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out a figure from the page you kept as homework, **and then the claim it is being used to support.** ⚠ Then say the sentence: _for that figure to mean that, it would have to be true that…_ **Finish it three times.** Most figures carry three premises and the third is the interesting one.'));
out.push(board('They say complaints are down, so things must be better.', 'For a fall in complaints to mean fewer problems, the chances to complain must not have fallen too.'));
out.push(p('**b**  Which names a hidden premise? **1** _That figure is false._  **2** _Which assumes the complaints book was not replaced._  **3** _I do not believe it._  **4** _For that to mean fewer problems, complaining would have to be as easy as it was._  **5** _They are not telling the whole story._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three premises does Ms Huda say every figure in an argument carries, and what is the fourth that Mrs Khoury adds?   **A** base, source, date; a fifth   **B** **the base did not move · the definition did not move · the measuring did not move** — and Dima adds the one people miss: **the thing being counted was not changed by the counting**   **C** period, population, definition; nothing'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the difference is between _which assumes_ and _which is false_?   **2** How many assumptions does she say to ask about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  For that to mean that', [
  ['Ms Huda', 'Mrs Khoury. The page you were sent on Tuesday, and the figure in it.'],
  ['Dima', '_Complaints have halved since March._ From twenty-two to eleven, and the claim is that the new arrangement is working.'],
  ['Ms Huda', '**Now the sentence. _For that to mean…_**'],
  ['Dima', '**For a fall from twenty-two to eleven to mean fewer problems, it would have to be true that there were as many chances to complain, that a complaint still meant the same thing, and that complaining was as easy as it was in March.** ⚠ **The complaints book was replaced in March.**'],
  ['Ms Huda', '**Which is the third premise and it is almost always the one that fails: _the measuring did not move._** ⚠ **The three to run through are the base, the definition and the measuring** — and the third fails most often **because it is the one nobody thinks of as part of the figure.**'],
  ['Omar', 'What is the difference between those and 10.4\'s three questions?'],
  ['Ms Huda', '**10.4 asks whether two figures can be compared. This asks what a single figure is being used to prove.** ⚠ **A figure can be perfectly good and still not support the claim beside it**, and that is the commonest fault in a staff paper — **better than a wrong figure and worse than no figure**, because a reader cannot see the join.'],
  ['Dima', 'And the fourth one, which I meet in my own work?'],
  ['Ms Huda', 'Say it.'],
  ['Dima', '⚠ **That the thing counted was not changed by the counting.** We put a form in front of people who wanted to complain and complaints fell by a third. **The problems did not fall. The form fell on them**, and the figure is perfectly accurate.'],
  ['Ms Huda', '**Which is the one to write on the board**, because it is invisible from inside an organisation: **a measurement can be the cause of what it measures.** ⚠ And it has a tell: **the fall begins in the month the measuring changed**, which is March in this page and is printed in the page itself.'],
  ['Jad', 'Do you say the figure is false?'],
  ['Ms Huda', '**Never, unless you can show it.** ⚠ **_Which assumes_ is honest and costs nothing. _Which is false_ is a claim and needs evidence**, and a writer who makes the second and cannot support it has handed the argument back. **Name the premise and let the reader see it.**'],
  ['Hiba', 'Three premises is three paragraphs. Is that not too much?'],
  ['Ms Huda', '**Name all three and ask about one.** ⚠ **The one to ask about is the one that, if it failed, would destroy the claim entirely** — here, the complaints book. **A page that asks about three assumptions gets no answer; a page that asks about one gets an answer in a fortnight.**'],
  ['Rim', 'And if the writer has already named them?'],
  ['Ms Huda', '**Then say so and believe the figure.** ⚠ A writer who prints _this assumes the book was not replaced, and it was not_ has done the work, **and the right response is to say which assumption you have checked and move on.** **That is a rarer page than you expect and you should be visibly pleased to meet one.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **The figure, then the premise, both flat and at the same speed.** ⚠ A speaker who drops the voice on the premise has made it an insinuation, **and the room then hears an accusation about the writer instead of a question about the arithmetic.**'],
]));
out.push(sp());
out.push(box('Language box – naming what a figure assumes', [
  '**The sentence, and it is the whole cycle: _for that figure to mean that, it would have to be true that…_** ⚠ **Finish it three times.** Most figures in an argument carry three premises, **and the third is the interesting one.**',
  '**The three standard premises.** **1 The base did not move.** **2 The definition did not move.** **3 The measuring did not move.** ⚠ **The third fails most often, because it is the one nobody thinks of as part of the figure** — the complaints book was replaced in March.',
  '**And the fourth, which is invisible from inside an organisation: _the thing counted was not changed by the counting_.** ⚠ **A measurement can be the cause of what it measures.** Put a form in front of people who want to complain and complaints fall by a third; **the problems did not fall, the form fell on them, and the figure is accurate.**',
  '**Its tell, which is usually printed in the page itself: the change begins in the month the measuring changed.** ⚠ **Look at the date of the fall and the date of the new arrangement.** If they are the same month, the second premise and the third are both in question.',
  '**How this differs from 10.4.** **10.4 asks whether two figures can be compared. This asks what one figure is being used to prove.** ⚠ **A figure can be perfectly good and still not support the claim beside it** — **better than a wrong figure and worse than no figure**, because a reader cannot see the join.',
  '**_Which assumes_ is honest and costs nothing. _Which is false_ is a claim and needs evidence.** ⚠ A writer who makes the second and cannot support it **has handed the argument back.** **Name the premise and let the reader see it.**',
  '**Name all three; ask about one.** ⚠ **The one to ask about is the one that, if it failed, would destroy the claim entirely.** **A page that asks about three assumptions gets no answer; a page that asks about one gets an answer in a fortnight.**',
  '**And when the writer has already named them, say so and believe the figure.** ⚠ _This assumes the book was not replaced, and it was not._ **That writer has done the work**, and the right response is to name the assumption you have checked and move on — **a rarer page than you expect.**',
  '**Pronunciation.** 🔊 **Track 10.10** **The figure, then the premise, both flat and at the same speed.** ⚠ A speaker who drops the voice on the premise has made it an insinuation — **and the room then hears an accusation about the writer instead of a question about the arithmetic.**',
  '**Practise:** Finish _for that to mean that, it would have to be true that…_ three times. **1** a fall in complaints  **2** a rise in enquiries  **3** a figure after a form was introduced  **4** one where the measuring moved  **5** one where the writer has already named the premises',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the figure and the claim from the card. B names **three** premises and then says **which one to ask about** and why. ⚠ **One row on each card has already been dealt with by its writer**; B must say so and believe the figure. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the figure and the claim)_ __________, **so** __________.'],
  ['B', '_(base)_ Which assumes __________.'],
  ['B', '_(definition)_ Which assumes __________.'],
  ['B', '_(measuring)_ Which assumes __________.'],
  ['B', 'The one to ask about is __________, because **if it failed the claim would go entirely.**'],
]));
out.push(table(['Card A – the figure and the claim', 'Card B – the figure and the claim'], [
  ['_Complaints halved since March, so the arrangement works._ _(the book was replaced in March)_', '_Refusals down a third, so the paperwork has improved._ _(the gate copy changed in October)_'],
  ['_Escalations fell from five to three, so the February change worked._', '_Disputes down a quarter, so the second portions are working._'],
  ['_Enquiries up forty per cent, so the notice was read._ _(the telephone number also changed)_', '_Borrowings up a fifth, so the thin reference is popular._ _(it was moved to the counter)_'],
  ['_⚠ Nine of forty refused, and this assumes nobody changed what counts as a refusal — nobody did; I checked the standing order._', '_⚠ Fourteen hours a year, and this assumes eighteen seconds a consignment, which I timed on ten of them on Tuesday._'],
  ['_Four of eleven filled it in, so the field is unpopular._', '_Six of nine asked for a second observed lesson, so the lesson works._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three premises for each, and the one to ask about. Then the count: **the measuring premise is the one to ask about in six of the ten** — and in three of those the date of the change is printed in the page itself. ⚠ And in the two rows marked ⚠ **both writers named their own premises**, so the answer is to believe the figure.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the page you kept as homework from 10.1. Write the figure, the claim, and **three premises**, each beginning _which assumes_. ⚠ Then mark the one you would ask about, and write **the one piece of evidence that would settle it** — not three pieces.'));
out.push(p('**b**  Swap. Your partner looks for the fourth premise: **was the thing counted changed by the counting?** ⚠ Look at **the date of the change and the date of the new arrangement.** If they are the same month, say so in one line.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima had been sent a page with a figure in it: complaints have halved since March, from twenty-two to eleven, and the claim is that the new arrangement is working. So she finished the sentence: for a fall from twenty-two to eleven to mean fewer problems, it would have to be true that there were as many chances to complain, that a complaint still meant the same thing, and that complaining was as easy as it was in March — and the complaints book was replaced in March. Which is the third premise and it is almost always the one that fails: the three to run through are the base, the definition and the measuring, and the third fails most often because it is the one nobody thinks of as part of the figure. Omar asked how these differ from the three questions of 10.4, and 10.4 asks whether two figures can be compared while this asks what a single figure is being used to prove: a figure can be perfectly good and still not support the claim beside it, which is the commonest fault in a staff paper — better than a wrong figure and worse than no figure, because a reader cannot see the join. Then Dima gave the fourth premise from her own work: that the thing counted was not changed by the counting. They put a form in front of people who wanted to complain and complaints fell by a third; the problems did not fall, the form fell on them, and the figure is perfectly accurate. Which is the one to write on the board, because it is invisible from inside an organisation — a measurement can be the cause of what it measures — and it has a tell: the fall begins in the month the measuring changed, which is March in that page and is printed in the page itself. Jad asked whether you say the figure is false, and never unless you can show it: which assumes is honest and costs nothing, while which is false is a claim and needs evidence, and a writer who makes the second and cannot support it has handed the argument back. Hiba asked whether three premises is too much, and the rule is to name all three and ask about one — the one that, if it failed, would destroy the claim entirely. A page that asks about three assumptions gets no answer; a page that asks about one gets an answer in a fortnight. And Rim asked what to do when the writer has already named them, and then say so and believe the figure._'));
out.push(p('**Listener task:** write your partner\'s three premises and the one they would ask about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima sends back with the page. Answer the questions.'));
out.push(model([
  '**COMPLAINTS HALVED SINCE MARCH · what the figure would have to assume** · D. Khoury · 16 January',
  '**I am not disputing the figure.** Twenty-two to eleven, and I have no reason to think either number wrong. ⚠ **My question is what the figure is being used to prove**, which is a different question and is the only one in this note.',
  '**For a fall from twenty-two to eleven to mean fewer problems, three things would have to be true.** **One: that there were as many occasions on which somebody might complain** — the base. **Two: that a complaint still means what it meant in March** — the definition. **Three: that complaining is as easy as it was in March** — the measuring.',
  '**The third is the one I am asking about, and I am asking because of a date in your own page.** ⚠ **The complaints book was replaced in March**, and the fall begins in March. **I am not saying the figure is false. I am saying it assumes something that your page says changed in the same month.**',
  '**Why I am asking about one and not three.** The base and the definition can both be wrong and the claim survives in some reduced form. ⚠ **If the third fails, the claim goes entirely**, because a fall caused by a new book is not a fall in problems at all. **One question gets an answer; three get a defence.**',
  '**And the one piece of evidence that would settle it.** **The count of complaints made in person or by telephone, March to December, which the new book does not carry and the old one did.** If that count has fallen as well, **the claim stands and I shall say so in writing.**',
  '**One thing I should add, from this desk.** We did something like it ourselves. ⚠ **We put a form in front of people who wanted to complain and complaints fell by about a third.** The problems did not fall. **The form fell on them**, and our figure was perfectly accurate for two years.',
  '**And one sentence about what I am not doing.** I am not asking for the arrangement to be withdrawn, and I am not asking for the figure to be taken out. ⚠ **I am asking for one count, and for the sentence to say _complaints recorded_ rather than _complaints_** — **which is four words and is the whole of my objection.**',
]));
out.push(item('1', 'What does she say she is not disputing, and what is her question instead?'));
out.push(item('2', 'Why is she asking about the third premise and not all three?'));
out.push(item('3', 'What one piece of evidence would settle it, and what two things is she not asking for?'));
out.push(writers([
  'A note that names what a figure assumes: **_I am not disputing the figure_, first** → **three premises, labelled base, definition and measuring** → **the one you are asking about, with the date from the writer\'s own page** → **why one and not three** → **the evidence that would settle it** → **a case of your own** → **and what you are not asking for**.',
  '⚠ **Open with _I am not disputing the figure_ and mean it.** **A reader who thinks the arithmetic is under attack will defend the arithmetic**, and the arithmetic is not the point: _my question is what the figure is being used to prove_ is the sentence that gets the note read.',
  '**Label each premise.** _The base · the definition · the measuring._ ⚠ A note with three unlabelled assumptions reads as three complaints; **the same three labelled read as a procedure** — and the writer can then apply it to their next figure without you.',
  '**Take the date out of the writer\'s own page.** _The book was replaced in March, and the fall begins in March._ ⚠ **A premise supported from the page it questions cannot be answered by disputing your sources**, and it is almost always there: **people print both dates in the same document.**',
  '⚠ And **ask for one count and name it**. _Complaints made in person or by telephone, March to December._ **One question gets an answer; three get a defence** — and then concede the rest explicitly: _I am not asking for the arrangement to be withdrawn._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that names what a figure assumes (80 words or more).'));
out.push(p('**______________ · what the figure would have to assume** · ______________ · ______________   **I am not disputing the figure.** ______________. ⚠ **My question is what the figure is being used to prove.**   **For ______________ to mean ______________, three things would have to be true.** **One: ______________** — the base. **Two: ______________** — the definition. **Three: ______________** — the measuring.   **The ______________ is the one I am asking about, and I am asking because of a date in your own page.** ⚠ ______________. **I am not saying the figure is false. I am saying ______________.**   **Why one and not three.** ______________. ⚠ **If ______________ fails, the claim goes entirely.**   **And the one piece of evidence that would settle it.** ______________.   **One thing I should add, from this desk.** ______________.   **And what I am not asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_I am not disputing the figure_ in the first line',
  'Three premises, each labelled base, definition or measuring',
  'The date taken from the page being questioned',
  'One named piece of evidence, and what is not being asked for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the figure and then the premise they would ask about, both flat, and the room says whether it heard a question or an accusation.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the figure conceded, three labelled premises, the date from the writer\'s own page, one named piece of evidence, and the fence round the request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: _I am not disputing the figure_ in the first line, three labelled premises, one named piece of evidence rather than three.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the figure and then its premise, flat and at the same speed.** ⚠ The room says whether the voice dropped. Then the sentence the cycle ends on, which is Mrs Khoury\'s and is the one to leave on the board: **the problems did not fall, the form fell on them, and our figure was perfectly accurate for two years.**'));
out.push(hw('Write the note (80+ words) and send it. ⚠ Then do the date test on one more page: **find the date of the improvement and the date of the change in the arrangement.** If they are the same month, write the two dates on one line. **That single line is the most useful thing in this unit and it takes about a minute.**'));

// ===================== 10.6 =====================
out.push(pb());
out.push(h2('10.6  The figure in the article'));
out.push(p('**Function:** writing an article that carries figures   ·   **Grammar:** one figure a paragraph · three in an article · the figure the reader can picture   ·   **Pronunciation:** the article read aloud against a clock'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say one of your figures to somebody who does not do your job, **and watch their face.** ⚠ Then say it again in a unit they have in their own life. _Fourteen hours a year_ → **two working days.** _Forty seconds a call_ → **the time it takes to find your keys.** The second version is the one an article can use.'));
out.push(board('It costs 0.3 per cent of staff time.', 'It costs one person two working days a year.'));
out.push(p('**b**  Which figure can a reader picture? **1** _0.3 per cent of staff time._  **2** _Two working days a year, for one person._  **3** _Eighteen seconds a consignment._  **4** _A statistically significant proportion._  **5** _Nine cartons out of about sixty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many figures does Ms Huda say an article of two hundred words will carry, and what does Mr Attar find when he reads his own article aloud?   **A** as many as it needs; nothing   **B** **three, and a fourth is read as none** — and Jad finds that his article had **seven figures in two hundred and six words**, and that a reader he tried it on could afterwards remember **none of them**   **C** one; a mistake in the arithmetic'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say the first figure in an article has to be?   **2** What is the one thing she says an article does that an essay does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  Three figures, and a fourth is none', [
  ['Ms Huda', 'Mr Attar. Your article for the forum, and the count.'],
  ['Jad', 'Two hundred and six words. **Seven figures.** I read it to my brother, who does not do this work, and asked him afterwards what he remembered.'],
  ['Ms Huda', 'And?'],
  ['Jad', '⚠ **Nothing. Not one of the seven.** He remembered that it was about the forum and that I thought something took too long.'],
  ['Ms Huda', '**Which is the rule of this cycle and it is a number: three figures in an article of two hundred words, and a fourth is read as none.** ⚠ **It is not that the reader cannot count** — **it is that a figure is remembered by being the only figure in its paragraph**, and seven figures in four paragraphs means no paragraph has one.'],
  ['Omar', 'Which three do you keep?'],
  ['Ms Huda', '**The one the article is about, the one that makes it surprising, and the one the reader can act on.** ⚠ And **the first of the three goes in the first paragraph**, because an article is read by somebody who did not ask: **the figure is what stops them turning the page.**'],
  ['Dima', 'And the form of the figure?'],
  ['Ms Huda', '**It has to be a figure the reader can picture, in a unit they have in their own life.** ⚠ _0.3 per cent of staff time_ is not picturable by anybody. **_Two working days a year, for one person_ is the same fact and a reader has had two working days.** **Convert into the reader\'s unit, not yours.**'],
  ['Jad', 'My seven were all in my unit. Consignments, calls, cartons.'],
  ['Ms Huda', '**Which is why your brother remembered none of them**, and it is the commonest fault in a specialist writing for a general reader. ⚠ **Your denominators are your working life and they are not his.** **He has never seen two hundred and forty consignments.**'],
  ['Hiba', 'What does an article do that an essay does not?'],
  ['Ms Huda', '**It addresses the reader.** ⚠ An essay argues and an article **speaks to somebody**: a question, a _you_, a case the reader will recognise. **In the examination that is the communicative achievement mark**, and it is the thing candidates who write good essays lose it on — **they write a second essay and put a title on it.**'],
  ['Rim', 'And the examination arithmetic?'],
  ['Ms Huda', '**A title and four paragraphs, a hundred and forty to a hundred and ninety words, and this book writes a hundred and eighty to two hundred and twenty.** ⚠ **The announcement names its own requirements and they are the content mark** — underline them and tick them off. **An article missing one of three named requirements cannot reach the top band.**'],
  ['Mazen', 'Is a title worth anything?'],
  ['Ms Huda', '⚠ **It is worth the organisation mark and it costs four words.** **A title with the figure in it does two jobs**: _Two working days a year, for one page of a form._ **A candidate who writes _My Article_ has told the examiner what to expect.**'],
  ['Lubna', 'And the clock?'],
  ['Ms Huda', '🔊 **Read it aloud to somebody who does not do your work, and then ask them what they remember.** ⚠ **Two hundred words takes about seventy seconds and the asking takes four.** **If they remember no figure, you have more than three** — and that is a faster test than any amount of re-reading.'],
]));
out.push(sp());
out.push(box('Language box – the article, and this unit\'s two declared sets', [
  '**Three figures in an article of two hundred words, and a fourth is read as none.** ⚠ **A figure is remembered by being the only figure in its paragraph** — Mr Attar\'s seven in four paragraphs left a reader able to remember **none of them.**',
  '**Which three.** **1 The one the article is about.** **2 The one that makes it surprising.** **3 The one the reader can act on.** ⚠ **And the first goes in the first paragraph**, because an article is read by somebody who did not ask: **the figure is what stops them turning the page.**',
  '**The figure must be in a unit the reader has in their own life.** ⚠ _0.3 per cent of staff time_ is picturable by nobody. **_Two working days a year, for one person_ is the same fact**, and every reader has had two working days. **Convert into the reader\'s unit, not yours.**',
  '⚠ **Your denominators are your working life and they are not the reader\'s.** Consignments, calls and cartons are invisible units outside the depot — **and a specialist writing for a general reader loses every figure this way**, honestly and without noticing.',
  '**What an article does that an essay does not: it addresses the reader.** ⚠ A question, a _you_, a case the reader will recognise. **In the examination this is the communicative achievement mark**, and it is what candidates who write good essays lose — **they write a second essay and put a title on it.**',
  '**The examination arithmetic.** **A title and four paragraphs**, 140–190 words asked, **180–220 written in this book.** ⚠ **The announcement names its own requirements and they are the content mark**: underline them, tick them off. **An article missing one of three named requirements cannot reach the top band.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _add up to · come out at · come to · break down · average out · tot up · knock off · level off · cut down on · scale up · work back from · read off_.',
  '**This unit\'s word-formation set** _(the unit check in 10.7 is built on it)_: _calculate → **calculation** · measure → **measurement** · accurate → **accuracy** · precise → **precision** · frequent → **frequency** · estimate → **overestimate** · vary → **variation** · proportion → **proportionate** · approximate → **approximation**._',
  '**Pronunciation.** 🔊 **Track 10.12** **Read it aloud to somebody who does not do your work and then ask what they remember.** ⚠ **Two hundred words takes about seventy seconds and the asking takes four.** **If they remember no figure, you have more than three.**',
  '**Practise:** Convert the figure into a unit a general reader has. **1** fourteen hours a year  **2** forty seconds a call  **3** 0.3 per cent of staff time  **4** nine of forty  **5** two hundred and forty consignments a month',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. A reads the four figures on the card aloud, in their own units. B picks **three**, converts each into a unit a general reader has, and says which of the three goes first and why. A then names the one B left out and says whether it was the right one to lose. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(four figures, in my units)_ __________ · __________ · __________ · __________.'],
  ['B', '_(three, in the reader\'s units)_ __________ · __________ · __________.'],
  ['B', 'First: __________, because **it is what the article is about.**'],
  ['A', 'You left out __________. **Right / wrong**, because __________.'],
]));
out.push(table(['Card A – four figures', 'Card B – four figures'], [
  ['_Eighteen seconds a consignment_', '_Forty seconds a call_'],
  ['_Two hundred and thirty-eight consignments in December_', '_Eleven calls an hour, six hours a day_'],
  ['_About fourteen hours a year_', '_About four and a half days a year_'],
  ['_Nine of forty refused last quarter_', '_Thirty-four of forty-one escalations turned on an unrecorded promise_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three figures each pair kept, in the reader\'s units, and which went first. Then the count: **six or seven of the eight pairs keep the annual figure and drop the monthly volume**, which is right — **the volume is the writer\'s unit and the year is everybody\'s.** ⚠ And the finding: **the figure dropped is almost always the one the writer worked hardest to get.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  List **every** figure you would put in your article and count them. ⚠ Then cross out all but three and write, beside each survivor, **which of the three jobs it does** — what the article is about, what makes it surprising, what the reader can act on. **A figure that does none of the three goes.**'));
out.push(p('**b**  Swap, and read your partner\'s three aloud **in their original units**; then read them again converted. ⚠ Your partner says which version they would print. **It is the converted one in almost every case, and the writer is almost always surprised.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad\'s article for the forum came to two hundred and six words and carried seven figures. He read it to his brother, who does not do this work, and asked him afterwards what he remembered — and he remembered nothing: not one of the seven. He remembered that it was about the forum and that Jad thought something took too long. Which is the rule of the cycle and it is a number: three figures in an article of two hundred words, and a fourth is read as none. It is not that the reader cannot count; it is that a figure is remembered by being the only figure in its paragraph, and seven figures in four paragraphs means no paragraph has one. Omar asked which three you keep, and the answer is the one the article is about, the one that makes it surprising, and the one the reader can act on — and the first of the three goes in the first paragraph, because an article is read by somebody who did not ask, so the figure is what stops them turning the page. Dima asked about the form of the figure, and it has to be a figure the reader can picture, in a unit they have in their own life: 0.3 per cent of staff time is not picturable by anybody, and two working days a year for one person is the same fact, and every reader has had two working days. Convert into the reader\'s unit and not your own. Jad said his seven were all in his units — consignments, calls, cartons — and that is why his brother remembered none of them, and it is the commonest fault in a specialist writing for a general reader: your denominators are your working life and they are not his, and he has never seen two hundred and forty consignments. Hiba asked what an article does that an essay does not, and it addresses the reader: a question, a you, a case the reader will recognise — which in the examination is the communicative achievement mark, and is the thing candidates who write good essays lose, because they write a second essay and put a title on it. And Mazen asked whether a title is worth anything: it is worth the organisation mark and it costs four words, and a title with the figure in it does two jobs._'));
out.push(p('**Listener task:** write your partner\'s three figures, converted, and the one they left out.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the article Jad writes for the forum after the count. ⚠ **The examination version is 180–220 words and the same four paragraphs**; 10.7 writes it. Answer the questions.'));
out.push(model([
  '**TWO WORKING DAYS A YEAR, FOR ONE PAGE OF A FORM** · J. Attar · 18 January',
  '**If somebody told you that one page of one form was costing your office two working days a year, you would ask to see the page. Nobody in our office had asked, including me, and I have been defending the page since March.**',
  'The arithmetic is not difficult and that is the point of this article. **The second page of our enquiry form takes about forty seconds to fill in.** Forty seconds sounds like nothing, and it is nothing — forty seconds. ⚠ **It is also, at eleven enquiries an hour over a working year, about two working days of one person\'s time**, and those are the same fact wearing two different sizes.',
  '**I had been giving the small size for ten months, and I had not noticed I was choosing.** I was in favour of the page. Forty seconds a call is the figure that sounds like the thing I already thought, and I reached for it **about fifteen times in three meetings** without once working out the other end of it. ⚠ **Nobody asked me to**, which is the part of this that should worry anybody who signs off a form.',
  '**I am still in favour of the page**, and on the larger figure, which is the only honest way to be in favour of it now. **Two working days a year** against the enquiries we cannot answer at all because nobody wrote down what was promised — and those take between forty minutes and three hours each. **That comparison I should have been making in March.**',
  '**So here is the thing worth doing before your next meeting, and it takes about twenty seconds.** Take the figure you have been quoting, **and work out the other end of it.** Per call and per year. Per carton and per quarter. ⚠ **If the two sizes make you feel differently about your own position, you have learnt something about yourself and not about the form** — **which is what happened to me, and I would rather have found it out at a desk than in a meeting.**',
]));
out.push(item('1', 'What is the first figure in the article, and whom is it addressed to?'));
out.push(item('2', 'What does he say he had not noticed, and how many times did he do it?'));
out.push(item('3', 'What does he ask the reader to do, and how long does he say it takes?'));
out.push(writers([
  'An article carrying three figures: **the figure it is about, in the reader\'s unit, first, addressed to _you_** → **the arithmetic, in one paragraph** → **what you had been doing, with a count** → **your position on the larger figure** → **and a thing the reader can do, with a time on it**.',
  '**Address the reader in the first sentence.** _If somebody told you that one page of one form was costing your office two working days a year…_ ⚠ **This is the mark an essay-writer loses**: an article speaks to somebody. **A question, a _you_, or a case the reader knows — one of the three, in the first two lines.**',
  '⚠ **Put the figure in the reader\'s unit and keep yours out of the first paragraph** — _two working days a year_, not _forty seconds a call_. **The second is the one you counted and the first is the one they can picture.**',
  '**Count your own fault.** _About fifteen times in three meetings._ ⚠ A confession with a figure is the most quotable sentence such an article can have, **and the one that makes the arithmetic believed** — a writer who counted their own slips has probably counted the rest.',
  '⚠ And end on **something the reader can do, with a time on it**: _take the figure you have been quoting and work out the other end of it — about twenty seconds._ **An article ending on a conclusion is read; one ending on a twenty-second task is acted on**, which is the only reason to write one.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the article (80 words or more now, and the full 180–220 in Stage 7).'));
out.push(p('**______________** · ______________ · ______________   **If somebody told you that ______________, you would ______________. Nobody ______________, including me.**   The arithmetic is not difficult and that is the point. **______________ takes about ______________.** ______________ sounds like nothing, and it is nothing. ⚠ **It is also ______________**, and those are the same fact wearing two different sizes.   **I had been giving the ______________ size for ______________, and I had not noticed I was choosing.** ______________ **about ______ times** ______________. ⚠ **Nobody asked me to.**   **I am still ______________, and on the larger figure.** ______________ against ______________.   **So here is the thing worth doing before your next meeting, and it takes about ______________.** ______________. ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reader addressed in the first two lines',
  'The first figure in the reader\'s unit, not the writer\'s',
  'Three figures in the whole article and no more',
  'A task for the reader at the end, with a time on it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first paragraph only, and the room says whether it was spoken to somebody.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full article (**180–220 words**, a title and four paragraphs), count the figures, and write the figure count at the end beside the word count.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reader addressed in the first two lines, the first figure in the reader\'s unit, no more than three figures in the article.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your article to somebody who does not do your work and then ask what they remember.** ⚠ Two hundred words takes about seventy seconds and the asking takes four. **If they remember no figure, you have more than three.** Then the sentence the cycle ends on, which is Mr Attar\'s: **I reached for it about fifteen times in three meetings, and nobody asked me to.**'));
out.push(hw('Write the article (180–220 words) and count both the words and the figures. ⚠ Then do the test: read it to somebody outside this class and **ask them what they remember.** Write down what they said. **It is the only test in this unit that cannot be done at a desk.**'));

// ===================== 10.7 =====================
out.push(pb());
out.push(h2('10.7  Review & Mediate: Two figures that cannot both be right'));
out.push(p('**Function:** mediating between two figures of two different things   ·   **Recycling:** Unit 10   ·   **Exam practice:** B2 First Reading and Use of English Part 1 · Writing Part 2 (an article) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Eighteen seconds a consignment add up to fourteen hours a year.  **2** The December count came out on two hundred and thirty-eight.  **3** He broke the total into two stamps of nine seconds.  **4** Over the year it average out at one in fourteen.  **5** The accurate of the figure was never in question.  **6** The cost is proportion to the number of consignments.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two figures as they were sent, and the question neither side asked.'));
out.push(box(null, [
  '**TWO FIGURES FOR ONE SCHEDULE** _(the section and the registry, November and December)_',
  '**From the section, 20 November.** _"The schedule has been applied about four hundred times since 2019. I have counted."_',
  '**From the registry, 4 December.** _"The schedule has been applied one hundred and sixty-two times since 2019. This is a matter of record."_',
  '⚠ **Both counts are correct. Neither side has said what they counted.**',
  '**What each of them counted.** The section: **every paragraph of the schedule applied to any decision.** The registry: **every decision in which the schedule was applied at all.**',
  '**And the question neither of them asked.** _A figure of what?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say happens to the disagreement when both bases are named, and what is the new fact that falls out of it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  Four hundred and a hundred and sixty-two', [
  ['Ms Huda', 'Two counts of one schedule, two weeks apart, and they differ by a factor of about two and a half. Mr Barghouti — which of them is wrong?'],
  ['Adnan', 'Mine, I assumed. The registry is a matter of record and I counted off the files.'],
  ['Ms Huda', '**Then do the mediation, which is three moves and is not the mediation of 9.7.** One: **print both figures with the bases as stated.** Two: **ask what each is a figure of.** Three: **write the sentence that contains both.**'],
  ['Adnan', '_(a pause)_ I counted **paragraph applications.** A refusal usually cites two or three paragraphs of the schedule. ⚠ **The registry counted decisions** — one decision, one entry, however many paragraphs it used. So the sentence is: **one hundred and sixty-two decisions, applying the schedule about four hundred times.** _(pause)_ **Both numbers are in it and there is no disagreement left.**'],
  ['Ms Huda', '⚠ **And now the part worth the lesson: what fell out of that sentence that neither side had before?**'],
  ['Adnan', 'Four hundred over a hundred and sixty-two. **About two and a half paragraphs a decision.** Nobody has ever said that out loud, and it is the figure I actually need.'],
  ['Ms Huda', '**Which is the finding of the cycle, and it is the fifth kind of mediation in this book.** ⚠ **When two figures of the same thing differ, the difference between them is often itself a fact worth having** — and in this case it is a better fact than either of the two figures. **Two and a half paragraphs a decision tells you the bracket would be printed about two and a half times per refusal.**'],
  ['Omar', 'Does it always work like that?'],
  ['Ms Huda', '**It works whenever the two counts are of two different things, which is the usual case.** ⚠ **The usual case is not a dispute at all: it is two honest counts of two different objects** — and the difference is a ratio nobody had calculated, **because nobody had put the two numbers in one sentence.**'],
  ['Dima', 'And when they really do contradict?'],
  ['Ms Huda', '**The test is exact and it has three parts: same base, same period, same counting rule.** ⚠ If all three hold and the figures still differ, **one of the counts is wrong** — and there is only one remedy: **recount together, from the same document, in the same room, on the same day.**'],
  ['Hiba', 'Not by correspondence?'],
  ['Ms Huda', '⚠ **Never by correspondence.** Two people counting the same document in two rooms produce two counting rules without noticing, **and a fortnight of letters about a discrepancy is a fortnight spent inventing the rule each of them was using.** **One hour and one table settles it.**'],
  ['Jad', 'And who was wrong here? Somebody must have been.'],
  ['Ms Huda', '**Nobody, and that is the third time this book has said so in a different way.** ⚠ 8.7 both reviews were true and incomplete. 9.7 both sides had conceded. **10.7: both counts are exact and they are counts of two different objects** — **and the only error in five weeks of correspondence was that neither letter said what it had counted.**'],
  ['Rim', 'Which is 10.1.'],
  ['Ms Huda', '**Which is 10.1, and it is the last time this book says it.** ⚠ **A figure with its base printed beside it cannot start a quarrel like this one**, and the base costs about four words.'],
  ['Mazen', 'And the mediation aloud?'],
  ['Ms Huda', '🔊 **Read the sentence that contains both figures flat, with no stress on either number.** ⚠ A mediator who leans on their own side\'s figure has awarded the argument; **the whole effect is in the two numbers sounding like one sentence about one thing.**'],
]));
out.push(sp());
out.push(box('Language box – two figures of two different things', [
  '**The three moves, and they are not the moves of 9.7.** **1** Print **both figures with the bases as stated.** **2** Ask **what each is a figure of.** **3** **Write the sentence that contains both.**',
  '**Then ask what fell out of that sentence.** _One hundred and sixty-two decisions, applying the schedule about four hundred times._ ⚠ **Four hundred over a hundred and sixty-two is about two and a half paragraphs a decision** — **a figure neither side had, and a better one than either of theirs.**',
  '**Which is the finding: when two figures of the same thing differ, the difference between them is often itself a fact worth having.** ⚠ **The usual case is not a dispute at all** — it is **two honest counts of two different objects**, and the ratio between them is something nobody had calculated **because nobody had put the two numbers in one sentence.**',
  '**The test for a real contradiction, and it has three parts: same base, same period, same counting rule.** ⚠ If all three hold and the figures still differ, **one count is wrong.**',
  '**And then there is one remedy: recount together, from the same document, in the same room, on the same day.** ⚠ **Never by correspondence.** Two people counting one document in two rooms **invent two counting rules without noticing**, and a fortnight of letters is a fortnight spent discovering what rule each was using. **One hour and one table settles it.**',
  '**The fifth kind of mediation in this book, and the last.** **4.7** both had overclaimed. **6.7** the record was silent. **7.7** the document was defective. **8.7** both reviews were true and incomplete. **9.7** both sides had conceded. ⚠ **10.7: both counts are exact and are counts of two different objects.**',
  '⚠ **And the only error in five weeks of correspondence was that neither letter said what it had counted** — which is 10.1, **and it is the last time this book says it: the base costs about four words and it cannot start a quarrel like this one.**',
  '**One warning, which is 10.5 applied to a ratio.** The two and a half paragraphs a decision is **an average over five years**, and an average hides its own spread: ⚠ **if most refusals cite one paragraph and a few cite eleven, the bracket question is a different question.** **Ask for the spread before you build on a ratio you have just discovered.**',
  '**Pronunciation.** 🔊 **Track 10.14** **Read the sentence containing both figures flat, with no stress on either number.** ⚠ A mediator who leans on their own side\'s figure has awarded the argument — **the whole effect is in the two numbers sounding like one sentence about one thing.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs below and does **not** show it. A reads the two figures as they were sent. B makes the three moves and then says what fell out of the sentence that neither side had. ⚠ **One of the two pairs is a real contradiction** — same base, same period, same counting rule — and B must say which, and what the only remedy is. Change roles with the other pair.'));
out.push(table(['Pair A – the schedule', 'Pair B – the refused cartons'], [
  ['_The section: "about four hundred times since 2019."_', '_The counter: "nine cartons refused in five months."_'],
  ['_The registry: "one hundred and sixty-two times since 2019."_', '_The distributor: "nine cartons refused in five months."_'],
  ['_What each counted: paragraph applications / decisions._', '_What each counted: cartons refused at the counter / cartons returned to the depot._'],
  ['_Already available: the number of paragraphs cited on each refusal._', '_⚠ Already available: nothing — and the two nines are not the same nine._'],
  ['_⚠ What falls out: about two and a half paragraphs a decision._', '_⚠ Same base, same period, same rule: one of the counts is wrong._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair, and what fell out of each sentence. ⚠ **Pair B is the real contradiction and it is the harder one to see**, because the two figures agree: nine and nine. **The counts are of two different sets of cartons and happen to be the same size.** About half the pairs read Pair B as agreement and stop.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take two figures for the same thing from your own work — or one of yours and one somebody has quoted at you. **Print both with their bases, ask what each is a figure of, and write the sentence that contains both.** ⚠ Then do the part that matters: **divide one by the other and say what the answer is a figure of.** If it is not a fact you already had, **it is the finding of the exercise.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what fell out of the sentence that contained both figures:  _Two counts of one schedule, two weeks apart, differing by a factor of about two and a half. Asked which was wrong, Adnan assumed his was, because the registry is a matter of record and he had counted off the files. So he did the mediation, which is three moves and not the moves of 9.7: print both figures with the bases as stated, ask what each is a figure of, and write the sentence that contains both. And the answer was that he had counted paragraph applications, because a refusal usually cites two or three paragraphs of the schedule, while the registry had counted decisions — one decision, one entry, however many paragraphs it used. So the sentence is: one hundred and sixty-two decisions, applying the schedule about four hundred times. Both numbers are in it and there is no disagreement left. And then the part worth the lesson: what fell out of that sentence that neither side had before? Four hundred over a hundred and sixty-two is about two and a half paragraphs a decision, which nobody has ever said out loud and which is the figure he actually needs, because it tells him the bracket would be printed about two and a half times per refusal. Which is the finding of the cycle: when two figures of the same thing differ, the difference between them is often itself a fact worth having, and in this case it is a better fact than either of the two figures. Omar asked whether it always works like that, and it works whenever the two counts are of two different things, which is the usual case — and the usual case is not a dispute at all but two honest counts of two different objects, where the difference is a ratio nobody had calculated because nobody had put the two numbers in one sentence. Dima asked about real contradictions, and the test has three parts: same base, same period, same counting rule, and if all three hold and the figures still differ then one of the counts is wrong, with one remedy — recount together, from the same document, in the same room, on the same day. Hiba asked whether that can be done by correspondence, and never: two people counting the same document in two rooms produce two counting rules without noticing, and a fortnight of letters is a fortnight spent inventing the rule each of them was using, where one hour and one table settles it. And Jad asked who was wrong, and nobody was: both counts are exact and they are counts of two different objects, and the only error in five weeks was that neither letter said what it had counted._'));
out.push(p('**Listener task:** write the sentence containing both of your own figures, and what fell out of it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text below and decide which answer (**A**, **B**, **C** or **D**) best fits each gap. There is an example at the beginning (**0**).'));
out.push(box(null, [
  '**HOW A FIGURE LOSES ITS BASE**',
  'Most of the wrong figures in **(0)** _**circulation**_ inside an organisation were never **(1)** ______________ by anybody. They were counted properly once, from a real document, by somebody who knew exactly what they were counting — and then they were quoted in a meeting with the base left **(2)** ______________ of the sentence.',
  'That is all it takes. A figure with no base can be **(3)** ______________ about almost anything, because there is nothing in it to say what it is a figure of. Nobody is **(4)** ______________ blame for this, which is part of what makes it so hard to stop: the first speaker knew the base, the second assumed it, and the third was told a number.',
  'The remedy **(5)** ______________ in printing the base in the same sentence as the figure, every time, which costs about four words. It takes roughly twenty seconds to **(6)** ______________ a figure back from its parts and discover that it is wrong by a factor of twenty — and those twenty seconds are the only thing that would have **(7)** ______________ any difference at any point in two years. Nobody, in two years, had thought to cut **(8)** ______________ on the number of unchecked figures in the room.',
  '**0** A circulation  B movement  C travel  D passage   ·   **1** A invented  B thought  C put  D set   ·   **2** A behind  B out  C off  D away   ·   **3** A told  B said  C quoted  D spoken   ·   **4** A at  B in  C for  D to',
  '**5** A lies  B stands  C sits  D holds   ·   **6** A make  B work  C take  D put   ·   **7** A done  B taken  C made  D given   ·   **8** A off  B out  C over  D down',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two figures (80 words or more).'));
out.push(p('**TWO FIGURES FOR ONE ______________** · ______________   **From ______________, ______________.** "______________"   **From ______________, ______________.** "______________"   **Both counts are correct. Neither side has said what it counted.**   **What each of them counted.** ______________. ______________.   **The sentence that contains both.** **______________, ______________.**   **And what fell out of it that neither side had.** ______________ ÷ ______________ = ______________, **which is a figure of ______________.** ⚠ ______________.   **The test, applied.** Same base: **yes / no.** Same period: **yes / no.** Same counting rule: **yes / no.** So this **is / is not** a real contradiction. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both figures printed with the bases as stated',
  'What each side actually counted, named',
  'One sentence containing both figures',
  'The ratio between them, with what it is a figure of',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: an article)', 10));
out.push(box(null, [
  '⚠ **The examination article, and the shape is 10.6: three figures, the first one in the reader\'s unit, and the reader addressed in the first two lines.** 180–220 words, a title and four paragraphs.',
  'You see this announcement in an English-language magazine.',
  '_"**Articles wanted: numbers at work.** Tell us about a figure you use in your own work or studies. Say **where the figure comes from**, say **what it is a figure of**, and tell us **one thing you did differently after you checked it.** The most useful articles will be printed."_',
  'Write your **article** in **180–220 words**.',
  '⚠ **The announcement names three requirements and they are the content mark**: **where it comes from · what it is a figure of · what you did differently.** All three, or the content mark goes. **And the title is worth the organisation mark and costs four words** — put the figure in it.',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Eighteen seconds a consignment ___ about fourteen hours a year.   a) adds   b) adds up   c) adds up to',
  '2  The December count ___ two hundred and thirty-eight.   a) came out at   b) came   c) came out',
  '3  He ___ the total down into two stamps of nine seconds each.   a) broke up   b) broke   c) broke off',
  '4  Over the year it ___ out at about one consignment in fourteen.   a) averages   b) average   c) averaging',
  '5  The ___ of the figure was never in question; its base was.   a) accurate   b) accuracy   c) accurately',
  '6  The cost is ___ to the number of consignments and not to the number of staff.   a) proportion   b) proportionally   c) proportionate',
  '7  An ___ is honest if you say what you would have had to count.   a) approximately   b) approximation   c) approximate',
  '8  Nobody had thought to cut ___ on the number of unchecked figures.   a) off   b) out   c) down',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 10.15** You will hear a depot manager talking about counting at a gate. For questions **1–10**, complete the sentences with a word or short phrase.'));
[
  '**1**  Mr Ayoub had been quoting his figure for ______________ before he counted it.',
  '**2**  He timed the two stamps using a ______________.',
  '**3**  Each stamp took him about ______________ seconds.',
  '**4**  The number of consignments in the December book was ______________.',
  '**5**  The real annual total is about ______________ hours.',
  '**6**  He thinks the old figure was once a count of all the time spent at the ______________.',
  '**7**  The date stamp he asked for would affect one consignment in ______________.',
  '**8**  He now wants somebody to count the ______________.',
  '**9**  The gate men say the real cost is the distance from the vehicle to the ______________.',
  '**10**  He says a figure like that stays alive not because anybody is ______________.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Tareq', 'I want to tell you about a figure I had been quoting for two years, because I think the way it happened is commoner than anybody admits.'],
  ['Tareq', 'The figure was that we lose about three hundred man-hours a year on the gate. I used it in two meetings and one written request, and I believed it. I did not invent it and I am fairly sure nobody else did either. It arrived in a conversation at some point and it was useful, and I never asked it the one question it could not answer, which is: three hundred man-hours of what?'],
  ['Tareq', 'So on a Tuesday in January I counted. There are two stamps on a gate copy — the time stamp and the seal stamp — and I timed them using a watch, on ten consignments. Each stamp took me about nine seconds. Eighteen seconds a consignment. Then I took the consignment book for December off the shelf and counted the entries: two hundred and thirty-eight.'],
  ['Tareq', 'Eighteen seconds by two hundred and thirty-eight is seventy-one minutes a month. Over a year that is about fourteen hours. Not three hundred. Fourteen — and the difference is a factor of about twenty.'],
  ['Tareq', 'I have a guess about where the three hundred came from, and I want it understood as a guess. I think somebody once counted all the time spent at the gate — the signing, the waiting, the walking to the stamps and back — and three hundred man-hours a year is about right for that. It is a figure about a different thing, and I had been using it about the stamps.'],
  ['Tareq', 'What it does to the request I made in September is make it smaller and better. The date stamp I asked for would add about nine seconds, and it would only go on a refused consignment — which is one consignment in fourteen. That is about seventeen minutes a year, and I would rather ask for seventeen minutes with a count behind it than for nine seconds with nothing.'],
  ['Tareq', 'There is one thing I still want somebody to count, and it is the walking. I have no figure at all for the distance from the vehicle to the stamps, and the gate men tell me that is the real cost. If they are right, the answer is to move the stamps and not to argue about nine seconds, and I shall have spent two years on the wrong object.'],
  ['Tareq', 'And the last thing, which is the reason I am telling you this at all. In two years nobody ever asked me what the three hundred was a figure of. I could not have answered, and I was not asked twice. That is how a figure like that stays alive — not because anybody is dishonest, but because nobody asks.'],
]));
out.push(p('**C  Writing.** Write the article (180–220 words, a title and four paragraphs) about a figure you use: where it comes from, what it is a figure of, and one thing you did differently after you checked it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a figure with its base, its period and its counter in the same sentence',
  '☐ ask of a percentage _of what?_ and _how many is that?_ and give the ordinary range',
  '☐ write a rate with both of its units, and give the same fact in a second size',
  '☐ choose the denominator the decision uses rather than the one that suits my case',
  '☐ apply the three questions before a comparison — same period, same definition, same population',
  '☐ say that two figures cannot be compared, and what I should need in order to compare them',
  '☐ name what a figure assumes, in the form _which assumes…_, and ask about one assumption',
  '☐ show that two figures which cannot both be right are counts of two different things',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 11 – THREE READERS, ONE FACT', [
  'Unit 10 was about figures. **Unit 11** is about one fact written three times, for three readers who need different things from it: **the person who has to act on it, the person who has to approve it, and the person who will read it in two years and was not there.**',
  '**11.2 is the cycle that will change how the class writes anything twice**: the same fact, same length, three versions — **and the finding is that the three differ in what is left out and not in what is said.** ⚠ **11.5 reads a page and names which of the three readers it was written for**, which is usually not the reader it was sent to.',
  '⚠ **Bring one short piece of writing of your own that went to more than one person** — a note, a message, a page — **and the names of the people it went to.** 11.1 runs on it.',
  '**And the slip is unchanged.** Band 2 for Units 11 and 12: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
