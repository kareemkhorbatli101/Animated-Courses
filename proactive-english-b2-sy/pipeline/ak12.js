// Proactive English B2 · Syria Edition · Book 1 · Unit 12 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 12  What the Year Showed — Answer Key'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework. **This is the last unit of Book 1.**',
  '⚠ **Find the prediction sheet of 1 June before you begin.** It is the sheet this class wrote in **B1 Book 2, Unit 24.5**, and **12.2 and 12.7 both run on it.** **If your class did not write one, the cards in 12.2 and 12.7 carry a substitute** — but the real sheet is worth a great deal more, and **the difference is visible in the lesson within four minutes.**',
  '**One sentence runs through the unit and it is the only thing to keep on the board: _a prediction that was not written down is not a prediction._** ⚠ It is a memory of a prediction, **and a memory of a prediction is always right**, because the version remembered is the version the facts fit. **About half of what anybody in the room believes they predicted this year cannot be marked at all**, and that figure is the first finding and is worth more than any of the predictions.',
  '**12.5 is the hardest page in this book and it uses all of it** — the concession of 9.1, the figures of 10.1, the three readers of 11.1. ⚠ **Allow the full cycle for it and do not shorten Stage 7.** **Collect the pages and keep them**: they are what a year of this course produced, and **no other single task in the book shows it.**',
  '**12.6 is the examination cycle and 12.7 carries the papers.** Writing Part 2 is **a letter or email**, which is the genre the whole unit builds; **Reading and Use of English Part 5 is multiple choice** and **Listening Part 4 is multiple choice** — the last two of the eight examination tasks this book covers.',
  '**And the book ends on a sheet of paper.** ⚠ **The last thing to do in Unit 12 is not the check: it is next year\'s sheet** — the same number of predictions, **every one with a date and a figure**, written and dated and put away. **Twenty minutes, in front of the class, and it is the only homework in this book that cannot be marked for a year.**',
], C.lblue, C.navy));

// ===================== 12.1 =====================
out.push(pb());
out.push(h2('12.1  The one that came out and the one that did not'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The third question is the one to enforce: _where is it written?_** Students will answer the first two and stop; **most predictions fail the third and about half fail the second.** **Do not accept _I said it to somebody_** — that is the content of the cycle and not an answer to the question.'));
out.push(A('**b** Markable: **2** and **4** — both have a thing, a date and a record. Not: **1**, **3** and **5**. ⚠ **1** is the one to read out: _I always said it would be a problem_ **is about the past and the future at once**, which is the shape of every unmarkable prediction in the room.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a thing, a date and a written record** — and Mr Attar finds that **the prediction that came out was never written down**, so he cannot show he made it, while **the one that did not come out is in a post with a date on it.**'));
out.push(A('**b** **1** ⚠ **It is not a prediction; it is a memory of a prediction** — **and a memory of a prediction is always right**, because the version remembered is the version the facts fit.   **2** **Two lines, dated, at the top of the page she is arguing on**: _I expect X by Y._ **About twenty seconds**, and it has made her **change her mind in advance three times this year.**'));
out.push(NOTE('⚠ **The sentence to put on the board and leave there for seven cycles: _a prediction that was not written down is not a prediction._** It will be resisted, and the resistance is the lesson: Mr Attar **was probably right about the second thread** and there is no way to know. **The whole of this unit depends on there being something to mark**, and **about half of what the room believes it predicted cannot be marked at all.** ⚠ **Count it in your own class and put the fraction on the board** — it is the first finding of the unit and **it is worth more than any of the predictions.** And teach the comparison that follows from it, because students find it counter-intuitive: **the written wrong one beats the remembered right one.** **A written wrong prediction teaches you something; a remembered right one teaches you only that you are clever.**'));
out.push(NOTE('**Students are too hard on themselves about vagueness, and the Language box draws the line for them: _about half_ can be marked and _a problem_ cannot.** ⚠ **A tenth is wrong and six in ten is right**, so _about half_ is a prediction. **What cannot be marked is _a problem_, _a lot_, _soon_ and _a great many_** — ⚠ **and the reason is not that they are vague but that no outcome could contradict them.** That distinction is the one to mark on: **ask of every doubtful prediction _what would have had to happen for this to be wrong?_** If the answer is _nothing_, it is unmarkable; **if the answer is a figure, it is a prediction however loose the words are.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about a figure)_ _I expect fewer than twenty disputed results in the February quarter. **Written in the paper of 12 December.**_',
  '**2** _(about a date)_ _I expect the promise field to be in the February release. **Written in the note of 3 December.**_',
  '**3** _(one I cannot find in writing)_ _I said the second thread would be busier within a month. **Nowhere.** I said it in a corridor._',
  '**4** _(using _about half_)_ _I expect the date field to be blank on about half the forms by December. **Markable: a tenth is wrong and six in ten is right.**_',
  '**5** _(using _I should be surprised if_)_ _I should be surprised if the February release were full — **very surprised**, which I take to mean I think it is about one chance in five._',
]));
out.push(A('⚠ Mark these on **the three** — thing, date, record — and write the missing one in the margin. Item **3** is the one to collect from everybody and the word to insist on is **_nowhere_**: **do not accept a reconstruction**, and mark the honest _nowhere_ as a correct answer. Item **5** is worth four minutes: ⚠ **_I should be surprised if_ is a real prediction and it is weaker by exactly the amount of the surprise** — **so say how surprised**, and a student who converts it into a rough chance has done something no other item in the unit asks for.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(as it was made)_ That form was always going to be a problem.',
  '**B** What thing? By what date? Where is it written?',
  '**A** No particular thing. No date. **Nowhere.**',
  '**B** Markable: **no**, because ⚠ **no outcome could have contradicted it** — **and it is about the past as well as the future**, which is the shape to watch for.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three answers for each of the ten and whether it can be marked. **Six of the ten are markable and four are not** — the rows marked ⚠. ⚠ And the second finding, which the class will have produced without noticing: **all four unmarkable ones are about the past as well as the future** — _always going to be_, _always said_, _sooner or later_. **Write those three phrases on the board** and ask the room how often they use them; **that is the most portable thing in the cycle.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Prediction 1:** the second thread would be busier within a month. **Thing:** yes. **Date:** yes, a month. **Record: nowhere.** **Prediction 2:** closing the old thread would cut the questions by half by April. **Thing:** yes. **Date:** April. **Record:** a post of 4 February._ ⚠ _**The one I can show is the one I got wrong.**_',
  '**b** _**Partner\'s marks:** unmarkable _(no record)_ and markable _(wrong)_. **And my prediction for the next three months, in Mrs Khoury\'s shape:** **4 March — I expect the eleven recurring questions to be nine or fewer by 1 June.** ⚠ **Kept in the front of the forum folder**, where I shall find it._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad gave the prediction that came out first: he said the second thread would be busier than the first within a month of opening, and it was — about three times as many posts in the first month. Asked where it is written, he said it is not: he said it to Raed in the corridor in January. Then he cannot be marked right, and that is not a formality — a prediction that was not written down is not a prediction but a memory of a prediction, and a memory of a prediction is always right, because the version you remember is the version the facts fit. Omar said that is a hard thing to say to somebody who was actually right, and he may well have been right, and there is no way to know, and that is the cost. The whole of the unit depends on there being something to mark, and about half of what anybody in the room believes they predicted this year cannot be marked at all — which is the first finding and is worth more than any of the predictions. The other one is written down, in a post of 4 February with a date on it, and it was wrong flatly: he wrote that closing the old thread would cut the questions by half by April, and the questions did not fall at all. They moved, which is not the same thing, and he can show the sentence. Which is the better of his two predictions, and the class should hear why: the one you can show is worth something whatever it says, and the one you cannot show is worth nothing whatever it says — a written wrong prediction teaches you something, and a remembered right one teaches you only that you are clever. Dima said she writes hers at the top of the page she is arguing on: two lines, dated, before she starts, which takes about twenty seconds and has made her change her mind in advance three times this year, because a prediction you have to write down in a figure is harder to hold than one you keep in your head. Hiba asked for the three things it needs, and they are a thing, a date and a record — and the record must have been made before the event, since as I said at the time is not a record but a claim about a record. And Rim asked whether about half is specific enough, and it is: a tenth is wrong and six in ten is right.']));
out.push(A('Listener task: the partner\'s two predictions and which of the three questions each failed. ⚠ **Collect the count of _nowhere_s and put the fraction on the board.** In most classes **it is about half**, and the fraction is the argument for Mrs Khoury\'s twenty seconds. **Then make the room write the new prediction in 4b before the lesson ends** — it is the only part of this cycle that pays next year, **and a class that leaves without writing one has done an exercise about prediction and not a prediction.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I always said it would be a problem._ → **✓** a thing, a date and a record.   **✗** _As I said at the time._ → **✓** that is a claim about a record, not a record.   **✗** Reconstructing the record. → **✓** write _nowhere_.   **✗** Treating _about half_ as too vague. → **✓** it can be marked; _a lot_ cannot.   **✗** Improving the prediction while reading it aloud. → **✓** the words you used.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That **the second thread would be busier than the first within a month** — and it was, about three times over. ⚠ **It is written nowhere**: he said it to Raed in a corridor, **and the version he is describing is the version the figures fit.**'));
out.push(A('**2** That **closing the old thread would cut the questions by half by April.** ⚠ **The questions did not fall at all. They moved**, which is not the same thing, **and the sentence is still there with the date on it.**'));
out.push(A('**3** That **the same question asked in two places is one question asked twice** — ⚠ **and it is not**: about **four of the eleven** are two different questions that look alike, **and closing a thread does not touch those.** And his prediction: **the eleven recurring questions to be nine or fewer by 1 June**, with the falsifier — **if they are ten or eleven, he was wrong about the four.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO PREDICTIONS, ONE OF THEM MARKABLE** · T. Ayoub · 3 March',
  '**I made two predictions about the gate last year. One came out and one did not, and the one that came out is worth nothing.**',
  '**The one I got right.** I said the stamps would be moved to the vehicle end of the desk before the winter. **They were, in October.**',
  '**Where it is written.** ⚠ **Nowhere.** I said it at a meeting and I am fairly sure two people heard me. **I cannot produce a sentence**, and the version I remember is the version the move fits.',
  '**The one I got wrong.** In my request of **2 September** I wrote that the date stamp would save **about three hundred man-hours a year.** ⚠ **It saves about seventeen minutes a year**, and the three hundred was a figure I had never counted. **The request is still in the file with the figure in it.**',
  '**Why the wrong one is better.** Because I can read it back and ask what I had assumed. ⚠ **I had assumed that the stamps were the cost at the gate**, and they are not: **the walking is**, and I have no figure for the walking at all.',
  '**And one prediction for the next three months.** ⚠ **I expect the walking to come to more than twenty hours a year when somebody counts it.** **If it comes to under ten, I was wrong about the gate as well as about the stamps.**',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**TWO PREDICTIONS, ONE OF THEM MARKABLE** · J. Attar · 2 March',
  '**I made two predictions about this forum in January and February. One of them came out and one did not, and the one that came out is worth nothing.**',
  '**The one I got right.** In January I said the second thread would be busier than the first within a month of opening. **It was — about three times as many posts in the first month.**',
  '**Where it is written.** ⚠ **Nowhere.** I said it to Raed in a corridor. **I can describe the conversation and I cannot produce a sentence**, and the version I am describing is the version the figures fit — **which is what memory does and it is not dishonesty.**',
  '**The one I got wrong.** In a post of **4 February** I wrote that closing the old thread would **cut the questions by half by April.** The questions **did not fall at all.** ⚠ **They moved**, and the sentence is still there with the date on it.',
  '**Why the wrong one is the better of the two.** ⚠ **I had assumed that the same question asked in two places is one question asked twice** — **and it is not**: four of the eleven are two different questions that look alike.',
  '**And one prediction for the next three months.** ⚠ **Nine or fewer recurring questions by 1 June. If ten or eleven, I was wrong about the four.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: the reversal in the first two lines.** _One of them came out and one did not, and the one that came out is worth nothing._ ⚠ **Second line, and the whole argument of the page is in it.** Passed.',
  '**Criterion: _nowhere_ unreconstructed.** _Nowhere. I said it to Raed in a corridor._ Passed — ⚠ **and _which is what memory does and it is not dishonesty_ is the clause that lets the next reader write _nowhere_ about their own.**',
  '**Criterion: a new prediction with a date, a figure and a falsifier.** _Nine or fewer by 1 June. If ten or eleven, I was wrong about the four._ Passed, **and the falsifier names which assumption it tests.**',
  '**One thing to keep, and why it works.** _The version I am describing is the version the figures fit._ ⚠ **Keep it because it explains the fault without accusing anybody**, and because **a reader who recognises that sentence will go and look for their own corridor prediction** — which no rule would make them do.',
  '**Ranking of the slip I was given**, most useful first: **1** that my first draft said _I was almost certainly right_ about the unwritten one, which is the memory arguing. **2** that the falsifier did not say which assumption it tested. **3** the date on the post. ⚠ Least useful: **a note that three times as many posts is more than _busier_ implies**, which is true and is a point in my favour.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Each reads their prediction **as they made it**. ⚠ **Listen for the improvement**, which is where this cycle is lost: _probably_, _around_, _a difficulty_, _I think I said_. **A prediction improved in the reading is a prediction that can no longer be wrong**, and the room hears it at once when told what to listen for. Then the sentence the cycle ends on, which is Mr Attar\'s: **the one you can show is worth something whatever it says, and the one you cannot show is worth nothing whatever it says.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Written at the top of the page I am arguing on, 4 March:** I expect the eleven recurring questions to be nine or fewer by 1 June._',
  '⚠ _**And the thing I noticed writing it:** I had to decide what counts as a recurring question before I could write the figure. **That took longer than the twenty seconds and it was the useful part** — the prediction made me define the thing, **which is what Mrs Khoury means by changing her mind in advance.**_',
]));

// ===================== 12.2 =====================
out.push(pb());
out.push(h2('12.2  Marking the sheet'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, **with the sheet of 1 June in the room.** ⚠ **The verdict first and the explanation afterwards**, and the rule to state before the stage begins: **if you cannot say one of the three words, the prediction is unmarkable and that is the verdict.** Students will want a fourth word; there is no fourth word.'));
out.push(A('**b** **1 c** _(unmarkable: no date, no figure, and nothing could have contradicted it)_   **2 b** _(wrong: twenty-six against fewer than twenty)_   **3 a** _(right: the spring, and it went in on 1 March)_. ⚠ **3** is worth a minute: **_by the spring_ is a date and 1 March is inside it**, so the prediction is right — **a loose date that can be tested is a date.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **about half** of the 1 June sheet is unmarkable; and the use of the unmarkable ones is that **they show what the class could not yet say.** Every one is missing **either a date or a figure**, ⚠ **and the class now writes both without being asked.**'));
out.push(A('**b** **1** **Split it, and mark the halves separately** — _right that the questions would move, wrong that they would fall._ **Two verdicts and no averaging.**   **2** ⚠ **Nobody argues about _right_ and nobody argues about _wrong_: every argument is about _unmarkable_** — because that verdict says the prediction was never worth anything, **and that is harder to hear than being wrong.**'));
out.push(NOTE('⚠ **Three verdicts and no fourth, and the fourth will be offered: _it was too early to tell_.** **That is not a verdict; it is _unmarkable_ with a date missing** — **if the prediction had carried a date, the date would have arrived or not.** Mark it unmarkable and say which of the two was absent. ⚠ **And do not soften _wrong_ to be fair to the writer.** Twenty-six against twenty is **wrong, and by six**: **the by-six is 12.4 and the wrong is now**, and **the writer is in the room and is the one who benefits.** A class that averages, hedges or awards half marks **has lost the whole unit in the first ten minutes**, because every later cycle depends on the three words meaning what they say.'));
out.push(NOTE('**Mrs Nasser\'s observation about the order of the three words is the most useful thing in the cycle and it will happen in your room too.** ⚠ **Nobody disputes a _right_. Nobody disputes a _wrong_. Every argument is about an _unmarkable_** — and the reason is worth saying out loud: **that verdict says the prediction was never worth anything, which is harder to hear than being told you failed.** **Expect one argument and allow it four minutes**, and settle it with the Language box test and not with authority: ⚠ **_could anything that happened have contradicted it?_** The man who wrote _the gate will cause trouble_ in Mrs Nasser\'s class **accepted the verdict in about a minute and said it was worse than being wrong**, which is exactly right and is the sentence to leave the stage on.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(no date)_ _"The gate will cause trouble." **Unmarkable.** No date, and no outcome at a gate could have contradicted it._',
  '**2** _(a figure that missed)_ _"Fewer than twenty disputes." Twenty-six. **Wrong.** _(and out by six, which is 12.4)_._',
  '**3** _(right)_ _"The promise field will be in by the spring." In on 1 March. **Right.**_',
  '**4** _(to split)_ _"Closing the thread will cut the questions by half by April." **Right that they would move; wrong that they would fall.** Two verdicts._',
  '**5** _(somebody will call it too early to tell)_ _"The bracket will be printed on refusals by the summer." **Unmarkable — no, wrong**: the summer has gone and it is not printed. ⚠ **_Too early to tell_ is only available while the date is still ahead.**_',
]));
out.push(A('⚠ Mark these on **one word first** and reject any answer that begins with an explanation. Item **5** is the trap and it is worth the four minutes: **students will call it unmarkable or _too early to tell_, and it is simply wrong** — **the date has passed and the thing has not happened.** **_Too early to tell_ is only available while the date is still ahead**, and the moment it passes the verdict exists. **A class that understands item 5 will not need the fourth word again.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(as written)_ "Closing the thread will cut the questions by half by April."',
  '**B** _(split, two verdicts)_ **Right** that the questions would move out of the old thread. **Wrong** that the total would fall: it did not fall at all.',
  '**B** ⚠ **No averaging.** It is not a prediction two thirds right; **it is two predictions, and one of them was wrong.**',
  '**A** Softened: **no.** ⚠ **And the wrong half has the assumption in it** — that the same question asked twice is one question.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The verdict for each of the ten and which were split. **Four are unmarkable, two right, two wrong, and the two marked ⚠ must be split.** ⚠ And the finding to name out loud, because the room will have produced it: **every argument in the lesson was about an _unmarkable_** — **nobody disputed a _right_ or a _wrong_ all afternoon.** Ask why; **somebody always gets there**, and the answer is better from a student than from this key.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Mine, from the sheet of 1 June:** "A refusal code will be on every slip within a month of any exchange I offer." **Right** — twelve days._',
  '**b** _**My partner\'s:** "The second pad will be in use by the autumn." **Wrong**: it is not in use. ⚠ **And we disagreed about one of hers** — "record-keeping will get better" — which she wanted to call **right**, because it has. **It is unmarkable**: no date, no figure, **and nothing that happened in nine months could have contradicted it.** **She accepted it in about a minute and said it was worse than being wrong.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The sheet of 1 June: eleven predictions written by this room nine months ago. Hiba took the first — record-keeping will get better — and said unmarkable: no date, no figure, and nothing that happened could have contradicted it. Verdict first and explanation afterwards, which is how all eleven are to be done. Then: fewer than twenty disputes in the February quarter. There were twenty-six. Wrong. Omar said that is surely a near miss, twenty-six against twenty, and it is wrong, and 12.4 is about what the near miss is worth — but do not soften the verdict in order to be fair to the writer, because the writer is in the room and will be the one who benefits. Wrong, and by six: the by-six is 12.4 and the wrong is now. Then the promise field will be in by the spring, which went in on 1 March: right. And then the count — five of the eleven are unmarkable, which is nearly half, and every one of the five is missing either a date or a figure, with three missing both. Which is the finding of the cycle and it is not about prediction at all: the five unmarkable ones show what this class could not yet say in June, and the proof that it can say it now is that nobody in the room has written an unmarkable prediction since Unit 10 — the sheet is a measurement of the course and not of the year. Dima asked about a prediction right about one thing and wrong about another, and you split it and mark the halves separately: right that the questions would move, wrong that they would fall. Two verdicts and no averaging, because a prediction half right is not two thirds right or one third right — it is two predictions and one of them was wrong. Jad said that is what his was, and splitting it is what told him the assumption: a prediction marked partly right teaches nothing, and the same prediction split tells you which half you were wrong about, and the wrong half always has the assumption in it. And Hiba noticed something about the order of the three words — nobody argues about right and nobody argues about wrong, and every argument in the room has been about unmarkable, because that is the verdict which says the prediction was never worth anything.']));
out.push(A('Listener task: the partner\'s verdict on their own prediction and what was missing from it. ⚠ **Collect the three totals for your own class and write them on the board as the class\'s result for the year** — _two right, four wrong, five unmarkable_, or whatever they are. **That line is the finding of the whole unit** and it is the only honest answer to _was it a good year?_: **the sheet measures the course and not the year.** **Say it in those words and leave the totals up for 12.7.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _It sort of happened._ → **✓** one of three words.   **✗** _It was too early to tell._ → **✓** unmarkable, with the missing date named.   **✗** Softening _wrong_ to _nearly right_. → **✓** wrong, and the figure in 12.4.   **✗** Averaging a split prediction. → **✓** two verdicts.   **✗** The verdict run into the explanation. → **✓** one word, full stop.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Two right, four wrong, five unmarkable** — and ⚠ **the five are the interesting ones**, and the page is mostly about them.'));
out.push(A('**2** _Record-keeping will get better_ — **no date, no figure.** _People will write things down more_ — **no date, no figure.** _Things will be clearer_ — **no date, no figure.** _The gate will cause trouble_ — **no date.** ⚠ _It will be too early to tell_ — **which is not a prediction at all**, and somebody wrote it as one.'));
out.push(A('**3** About **whether _the gate will cause trouble_ was unmarkable**, because the gate did cause trouble. ⚠ **It is unmarkable**: no date, and **no outcome at a gate could have contradicted it.** **The man who wrote it accepted that in about a minute and said it was worse than being wrong** — which Mrs Nasser calls exactly right.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE DEPOT SHEET OF 1 JUNE, MARKED** · R. Shaaban · 5 March',
  '**Six predictions, written at the depot on 1 June. Three right, two wrong, one unmarkable.** ⚠ **The one is the interesting one.**',
  '**The three right ones.** _A code on every slip within a month of any exchange_ — **twelve days.** _The date stamp in use at the gate without reminders_ — **in use.** _Nine of forty will still be ours in March_ — **nine of forty.** **All three carry a figure and a period.**',
  '**The two wrong ones.** _Refusals below six in the February quarter_ — **nine.** _The depot will tell us who entered each code_ — **not once in forty slips.**',
  '**The unmarkable one, and what was missing.** _Things will be easier with the distributor._ ⚠ **No date, no figure, and nothing that happened could have contradicted it** — **they are easier, and that is not the point.**',
  '**What it shows, and it is not about the year.** Five of our six carried a figure in June and **one did not.** ⚠ **The one that did not is the only one we cannot use**, and it is also the only one anybody would have agreed with at the time.',
  '**And the sheet for next year.** ⚠ **Six predictions, every one with a date and a figure, in about twelve minutes.** **In June the six took an hour.**',
]));
out.push(S('Stage 7 · Write freely (sample, 214 words)'));
out.push(SAMPLE([
  '**THE SHEET OF 1 JUNE, MARKED** · H. Nasser · 4 March',
  '**Eleven predictions, written by this class on 1 June. Two right, four wrong, five unmarkable.** ⚠ **The five are the interesting ones and this page is mostly about them.**',
  '**The two right ones.** _The promise field will be in by the spring_ — in on **1 March.** _The refusal code on every slip within a month of the exchange_ — **twelve days.** **Both carry a date and a thing that either happened or did not.**',
  '**The four wrong ones, with their figures.** _Fewer than twenty disputes_ — **twenty-six.** _The second pad in use by the autumn_ — **not in use.** _The bracket printed by the summer_ — **not printed.** _Closing the thread will halve the questions_ — **split: right that they would move, wrong that they would fall.**',
  '**The five unmarkable ones, and what was missing.** Three had **no date and no figure.** One had **no date.** ⚠ One was _it will be too early to tell_, **which is not a prediction at all.**',
  '**What the five show.** ⚠ **They show what this class could not yet say in June** — **and nobody here has written an unmarkable prediction since Unit 10.** **The sheet measures the course.**',
  '**The one argument we had.** Not about any _wrong_. ⚠ **About an _unmarkable_**, and the man who wrote it said it was worse than being wrong.',
  '**And next year\'s sheet.** **Eleven, all dated and figured, in about twenty minutes.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: the three totals in the first line.** _Two right, four wrong, five unmarkable._ ⚠ **First line, and the sentence that follows says which group the page is about**, which stops it reading as a score. Passed.',
  '**Criterion: each wrong prediction with its figure and no adjective.** _Fewer than twenty — twenty-six._ Passed. ⚠ **No _nearly_, no _almost_, and no _in fact_ anywhere in the paragraph.**',
  '**Criterion: what was missing from each unmarkable one.** _Three had no date and no figure. One had no date._ Passed — **and the repetition is what makes the pattern visible.**',
  '**One thing to keep, and why it works.** _The sheet measures the course._ ⚠ **Keep it because it is the only sentence that answers the question the totals invite** — _was it a good year?_ — **and it answers it by changing what the sheet is for.**',
  '**Ranking of the slip I was given**, most useful first: **1** that my first draft wrote _only two right_, where _only_ was doing the marking. **2** that the argument paragraph did not say what the man said afterwards, which is the best line in it. **3** the two times for the two sheets. ⚠ Least useful: **a suggestion that eleven is a small sample**, which is true of every class and is not a criterion.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('The verdict in one word, a stop, and then the explanation. ⚠ **Listen for the word running into the explanation** — _unmarkable because of course nobody could have known_ — **which is an apology for the verdict**, and the room then marks the next one more gently. Then the sentence the cycle ends on, which is Mrs Nasser\'s and is the argument of the whole unit: **the sheet measures the course and not the year.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Sheet marked:** 2 right, 4 wrong, 5 unmarkable. **Missing from the five:** no date and no figure ×3, no date ×1, **not a prediction at all ×1.**_',
  '_**Next year\'s sheet written: eleven predictions, every one with a date and a figure. Time: nineteen minutes.**_',
  '⚠ _**And the thing that took the time** was not the writing. **It was deciding what counted** — four of the eleven had to be defined before they could be given a figure, **and in June we wrote all eleven without defining anything and it took an hour.**_',
]));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  Right, and not for the reason I gave'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **One question and only one: _would it have happened anyway?_** Students will want to argue about degrees; **the answer is _yes_ or _no_**, and a student who answers _partly_ is defending the prediction. **If the answer is yes, they were right by accident**, which is worth knowing and is worth nothing else.'));
out.push(A('**b** Right **for the reason given**: **2** and **4** — the mechanism is named and the outcome follows from it. Not: **1** _(the asking did not do it)_, **3** _(no reason given)_, **5** _(no thing and no reason)_. ⚠ **1** is the one to read out, because it is the shape of Mrs Sabbagh\'s own error.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **right for the right reason · right for the wrong reason · wrong with the reason surviving · wrong with the reason gone** — and **the dangerous one is right for the wrong reason**, because it **teaches you the wrong mechanism with the authority of a success.**'));
out.push(A('**b** **1** **Write it down and say so where the first thing was said** — _the field went in because a slot opened on 11 December, and not because of anything I wrote._   **2** Because ⚠ **Miss Mansour knows something about how disputes happen and Mrs Sabbagh knows nothing about how releases are filled**: **a success and no mechanism against a mechanism and a failure**, and **the mechanism is the part you use next time.**'));
out.push(NOTE('⚠ **_Right for the wrong reason_ is the finding of this cycle and the reason it matters is the asymmetry of correction: nobody corrects a success.** Mrs Sabbagh would have gone on conceding at the start of every request for a year, **believing a thing that is not true, with a success behind her**, and **the field is in, so nobody would have argued.** **A failure gets corrected by the facts; a success with the wrong mechanism behind it has to be corrected by the writer.** ⚠ **So teach the one question as a routine applied to successes and not to failures**: _would it have happened anyway?_ Students apply it readily to things that went wrong and almost never to things that went right — **and the whole value of the cycle is in the second case.** **Run Stage 4a on a success, not a failure**, and say why.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(one of mine that came out)_ _The field went into the February release. **Would it have happened anyway? Yes** — a slot opened on 11 December and my specification was the only one ready. **Right for the wrong reason.**_',
  '**2** _(where the reason was wrong)_ _The code came in twelve days. **Would it have happened anyway?** Possibly: the depot changed its own form in January. ⚠ **Mark it _unknown_ and go and ask** — that is the honest third answer when the facts are available and have not been looked at._',
  '**3** _(wrong with the reason surviving)_ _Disputes below twenty: twenty-six. **The mechanism is untouched** — they fell, and they fell because a second portion existed. **A working mechanism and a wrong number.**_',
  '**4** _(one other thing my mechanism predicts)_ _If a written specification gets the next slot, **then the next slot goes to whoever has one ready** — **so write the next specification now and ask for nothing.**_',
  '**5** _(a mechanism that predicts nothing else)_ _"The distributor answered because he is a reasonable man." ⚠ **That predicts nothing about anything**, and it is a story about one event._',
]));
out.push(A('⚠ Mark these on **the answer to the question and the named mechanism**, and allow the third answer in item **2**: **_unknown, and the facts are available_** — which is better than a guess and worse than four minutes\' work, **and the right response is to go and ask.** Item **5** is the one to read out: **a mechanism that predicts nothing else is a story about one event**, and students offer character as a mechanism more often than anything else.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(prediction and outcome)_ The field would go in because I conceded October. It went in.',
  '**B** Would it have happened anyway?',
  '**A** **Yes** — a slot opened on 11 December.',
  '**B** Result: **right for the wrong reason.** The real mechanism: **the first written specification in the drawer fills a slot when one opens.**',
  '**B** What else does it predict? ⚠ **That the next thing with a specification gets the next slot, whoever asks** — **so write one now and ask for nothing.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Which of the four results each of the ten is, and what else the mechanism predicts. **Two are right for the right reason, two wrong with the reason surviving, four right for the wrong reason, and two unmarkable.** ⚠ **Four of ten right for the wrong reason is the usual proportion** and it is the figure to put on the board — **and all four are in the first and third rows of the cards**, which is where the cycle hides them.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Would it have happened anyway? Yes.** The real mechanism is that **a written specification fills the next slot that opens**, and mine was the only one written. ⚠ **Not _partly_** — the concession produced a reply in two hours and the reply did not produce the release._',
  '**b** _**What else does it predict?** That the next slot goes to whoever has a specification ready. **How I shall look:** ask the release clerk which of the four items in the May release were specified before 1 April. ⚠ **Four minutes, and she will know.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour wrote in December that the promise field would be in the February release, and it went in on 1 March — a day late, and she will call that right. Asked why she said it would, she said because she had conceded the October release and asked for February in the same sentence, and the answer came back in two hours: she thought the concession had done it. Then the one question of the cycle — would it have happened anyway? And yes: a regulatory item was withdrawn from the February release on 11 December and a slot opened, and the specification was already written, so the first thing in the drawer went into the slot. It was hers because it was ready and not because she had conceded anything. Right about the outcome and wrong about the mechanism, which is the dangerous one of the four: right for the wrong reason teaches you the wrong mechanism with the authority of a success, and she would have gone on conceding at the start of every request for a year, believing a thing that is not true. Omar asked what the four are, and they are right for the right reason, which is worth most; right for the wrong reason, which is worth nothing and costs you something; wrong with the reason surviving, which is worth a great deal; and wrong with the reason gone, which is worth a clean start. Dima asked about the third, and Yara\'s is the example: she predicted the disputes would fall below twenty if second portions were sent, and they fell to twenty-six, so the prediction is wrong and the mechanism is untouched — they fell, and they fell because a second portion existed. A working mechanism and a wrong number is a position to build on. And Nour said it is worth more than hers, and she can say why: Yara knows something about how disputes happen and she knows nothing about how releases are filled — she has a success and no mechanism, and Yara has a mechanism and a failure, and the mechanism is the part you use next time. Then what to do when you find you were right for the wrong reason: write it down and say so where you said the first thing, which she has, with a line in the February note. And the useful half is what else the real mechanism predicts: that the next thing with a written specification gets the next slot, whoever asks — so she has written the specification for the second field now and has not asked for it at all.']));
out.push(A('Listener task: the partner\'s result, the real mechanism and the one other thing it predicts. ⚠ **Insist on the looking in 4b and set a date for it in the lesson.** **A mechanism nobody checks is a story**, and the check is four minutes in most cases: one question to one person who knows. **Collect the four-minute checks on the board with the names of the people to be asked**; a class that leaves with five names has left with the cycle, **and a class that leaves with five mechanisms has not.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I told you it would happen._ → **✓** and would it have happened anyway?   **✗** _Partly._ → **✓** yes or no, or _unknown and I shall ask_.   **✗** Keeping the credit for a success with the wrong reason. → **✓** write it where the claim is.   **✗** Character as a mechanism. → **✓** a mechanism predicts other things.   **✗** Finding the mechanism and not using it. → **✓** do one thing on it this week.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because **the claim it corrects is in the February note.** ⚠ **A correction in a different document from the claim is not a correction** — and in two years the file holds both and cannot tell which is later.'));
out.push(A('**2** **A regulatory item was withdrawn from the February release on 11 December**, and the promise field filled the slot because ⚠ **its specification had been written since 14 November** — **it was the only thing in the drawer that could be dropped into a slot at short notice.** **Hers because it was ready, not because she had conceded anything.**'));
out.push(A('**3** **That the next thing with a written specification gets the next slot, whoever asks.** ⚠ **So she has written the specification for the second field — the call-back date — and has asked nobody for anything at all.** **If a slot opens in May, it is the only thing in the drawer again.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE REFUSAL CODE · right, and not only for the reason I gave** · R. Shaaban · 7 March',
  '**This line goes into my note of 2 February, where the claim is.** ⚠ **The code may have come in twelve days because the depot had already changed its own form in January**, and not only because I conceded nine of our forty in the same sentence as the ask.',
  '**What I claimed, in writing, on 2 February.** That the concession had produced in twelve days what two unconceded requests had not produced in eleven months.',
  '**What I have since found out, on 4 March.** Their refusal form was **reprinted in January with four code boxes on it**, a month before my letter. ⚠ **I do not know whether the box was waiting for my letter or my letter arrived at a box that was already waiting.** **Those are different things and I cannot tell them apart.**',
  '**Why I am writing it down even though I cannot settle it.** Because the version I believed **tells me the concession did it**, and I have been recommending that to two other depots. ⚠ **A recommendation resting on a mechanism I cannot show is worth withdrawing until I can.**',
  '**What would settle it, and it is one question to one person.** **Whether the January reprint was asked for by anybody, and by whom.** ⚠ **Four minutes**, and I have written to ask.',
  '**And what I am not withdrawing.** **The concession.** It cost me a figure and a position and both were worth paying. ⚠ **What I am withdrawing is the claim about what it bought.**',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**THE PROMISE FIELD · right, and not for the reason I gave** · N. Sabbagh · 6 March',
  '**This line is going into the February note and not into a new one, because the claim it corrects is in the February note.** ⚠ **The field went into the release because a slot opened on 11 December, and not because of anything I wrote.**',
  '**What I claimed, in writing, on 3 December.** That conceding the October release and asking for February in the same sentence **had produced an answer in two hours** where four separate requests had produced nothing.',
  '**What actually happened, which I found out on 2 March.** A regulatory item was withdrawn on **11 December** and a slot opened. ⚠ **The specification had been written since 14 November, so it was the only thing in the drawer that could be dropped into a slot at short notice.** **Mine because it was ready, not because I had conceded anything.**',
  '**Why I am writing this down rather than keeping the credit.** Because the version I believed **tells me to concede at the start of every request** — ⚠ **a success with the wrong reason behind it is more expensive than a failure, and nobody would have corrected me.**',
  '**What the real mechanism predicts.** **The next thing with a written specification gets the next slot, whoever asks.** ⚠ **So I have written the specification for the second field and asked nobody for anything.**',
  '**One sentence about the two hours.** ⚠ **I do not know why. I have stopped claiming to.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: the correction in the same document as the claim.** _This line is going into the February note and not into a new one._ ⚠ **First line, and it says why.** Passed.',
  '**Criterion: three dates.** _Claimed 3 December · the slot opened 11 December · found out 2 March._ Passed — **and the three dates are what make it a record rather than a confession.**',
  '**Criterion: the real mechanism with one thing already done about it.** _I have written the specification for the second field and asked nobody for anything._ Passed. ⚠ **The doing is in the same note as the finding**, which is the test.',
  '**One thing to keep, and why it works.** _I do not know why. I have stopped claiming to._ ⚠ **Keep it because a page that corrects one claim and leaves another unexplained is more believable than one that explains everything** — and because the two hours really are unexplained.',
  '**Ranking of the slip I was given**, most useful first: **1** that my first draft kept _the concession worked_ in the paragraph about what I am not withdrawing, which undid the correction. **2** that _what the real mechanism predicts_ had no action under it until the second draft. **3** the dates. ⚠ Least useful: **a query about whether 1 March counts as February**, which is 12.4 and not this cycle.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('_Right about X. Wrong about why._ Both at the same volume. ⚠ **Listen for the second half arriving quieter**, which is the commonest delivery fault in the cycle: **a speaker who drops the voice there has kept the credit for the first half**, and the room remembers a success. Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **I have a success and no mechanism; she has a mechanism and a failure, and the mechanism is the part you use next time.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Mechanism:** the first written specification in the drawer fills the next slot that opens._',
  '_**One other thing it predicts:** the four items in the May release were specified before anybody asked for them._',
  '⚠ _**Looked. Found:** three of the four were. **The fourth was a regulatory item and had no specification at all**, which is the exception and tells me the mechanism holds for everything except regulation. **Four minutes, one question, and a better mechanism than the one I had.**_',
]));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  Out by six'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Nobody in the room will say _wrong_ first on a first attempt**, and the figure is useless without it. **Enforce the order and say why**: _nearly right_ ends the conversation and _out by six_ starts one. **The partner names the kind only after the two sentences have been said in the right order.**'));
out.push(A('**b** States the miss as a figure: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **5** is the one to read out — _I was not far off_ — because it is the shape every student reaches for **and it contains no number and no verdict.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **right direction and wrong size · right thing and wrong date · right about everything except the thing itself** — and **right direction and wrong size is worth most**, because **the mechanism is right and only the coefficient is wrong.**'));
out.push(A('**b** **1** ⚠ **_What delayed it?_** — and **do not accept _these things take time_**: **a delay with a date in it is a mechanism and a delay with _these things take time_ in it is a shrug.**   **2** **The mechanism.** _Nearly right_ ends the conversation, **so nobody looks**, and the question **_why six?_** is never asked.'));
out.push(NOTE('⚠ **Miss Mansour\'s six is the best worked example in the unit and the whole cycle can be taught from it: four of her twenty-six were disputes about the second portion itself** — two portions arriving with different labels, **a kind that did not exist before February.** **She made four of her own twenty-six.** Which means **twenty-two are the old kind: forty-one to twenty-two is a fall of nineteen against the twenty-one she predicted** — ⚠ **the coefficient was nearly right and the model was incomplete**, and **_incomplete_ is a different verdict from _wrong_ and is the one that says what to add.** **Nothing in that paragraph is visible from _nearly right_.** Put the two arithmetics on the board side by side — **41→26 and 41→22** — and let the class see what the four cost the appearance of the mechanism.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(out by a number)_ _Wrong. Out by six: twenty-six against fewer than twenty._',
  '**2** _(out by a period)_ _Wrong. Out by two months: 1 March against the end of December._',
  '**3** _(out by a factor)_ _Wrong. Out by a factor of about twenty: fourteen hours against three hundred._',
  '**4** _(not a near miss at all)_ ⚠ _The questions would fall by half; they moved and did not fall. **That is a miss on what was happening**, and calling it nearly right because they fell in one place is learning nothing._',
  '**5** _(a delay with a date in it)_ _Wrong. Out by two months — **and the delay has a date: a slot opened on 11 December and the release went out on 1 March.** Not _these things take time_._',
]));
out.push(A('⚠ Mark these on **the order of the two sentences** before anything else: **verdict, full stop, figure.** Item **4** is the one to insist on and the room will resist it: **a miss on what was happening is not a near miss**, and the test is whether the prediction and the outcome are about the same quantity. **The questions did not fall by a smaller amount than predicted; they did not fall.** Item **3** is the shape to praise: ⚠ **_out by a factor of about twenty_ is a miss priced on the right scale**, and students who have done 10.1 reach for it unprompted.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(prediction and outcome)_ Three hundred man-hours; about fourteen.',
  '**B** **Wrong.** Out by **a factor of about twenty.**',
  '**B** Kind: **direction and size** — the stamps do cost something and the number was wrong by twenty times.',
  '**B** Why that much? ⚠ **The three hundred was a figure about all the time spent at the gate and was being used about the stamps** — **which is 10.1 and not a coefficient error at all**, so strictly the model was about a different object.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The verdict, the figure and the kind for each of the ten. **Four are direction-and-size, two thing-and-date, and four are not near misses at all** — the rows marked ⚠. ⚠ And the finding: **three of the four refusals were offered as near misses by the pair reading them**, which is the move the cycle exists to stop. **Name it as the fault of the stage and not of the students**: the offer is automatic, **and hearing it named once is usually enough.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Wrong. Out by six.** **Why that much?** ⚠ **Four of the twenty-six were about the second portion itself**, which did not exist before February. **I made four of my own twenty-six.**_',
  '**b** _**Did my own action create any part of the miss?** **Yes, four of it.** ⚠ **And the question found it; I had been looking at the twenty-six as one number for three months.** **Restated without the four: forty-one to twenty-two, a fall of nineteen against the twenty-one I predicted.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Yara gave the verdict first: wrong — she said fewer than twenty disputes in the February quarter and there were twenty-six. And the size of the miss as a figure: out by six, on a prediction of under twenty from a starting figure of forty-one. Which is the discipline of the cycle and it is two sentences, the verdict and then the figure: nearly right is not a verdict and out by six is not a defence, because the first costs you the mechanism and the second keeps it. Omar asked how nearly right costs you the mechanism, and because nobody argues with it and so nobody looks: nearly right ends the conversation, and out by six starts one, since the next question is why six — and six, in her case, has an answer worth more than the whole prediction. And it does: four of the twenty-six were disputes about the second portion itself, two portions arriving with different labels, which is a thing that did not exist before February. She created four of her own twenty-six and had not predicted that at all. Which is the finding of the cycle and the reason to state the miss as a figure: twenty-two of the twenty-six are the old kind and four are a new kind she made, so the mechanism worked better than the number says and the number is worse than it looks for a different reason — and neither of those is visible from nearly right. Dima asked for the three kinds of miss: right direction and wrong size, which is worth most because the mechanism is right and only the coefficient is wrong; right thing and wrong date, which is worth something, and where the question is always what delayed it; and right about everything except the thing itself, which is not a near miss at all. Jad asked for the third, and the questions will fall by half is it: they moved and did not fall, which is a miss on what was happening. Hiba asked about her own wrong date, and then ask what delayed it and do not accept these things take time, because a delay with a date in it is a mechanism and a delay with these things take time in it is a shrug. And Rim asked whether a near miss is ever worth more than a hit: nearly always, if the hit has no mechanism.']));
out.push(A('Listener task: the partner\'s verdict, figure and kind, and whether any part of the miss was theirs. ⚠ **4b is the stage that pays and it must be asked in those words: _did your own action create any part of the miss?_** **It finds something in about a third of the room**, and in every case the student had been looking at one number for months. **Collect the restated arithmetics** — _41→26_ against _41→22_ — **and put two or three on the board**: the difference between the two is what the cycle is for.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Nearly right._ → **✓** wrong, then the figure.   **✗** _Only six out, so really…_ → **✓** the verdict before the figure.   **✗** _These things take time._ → **✓** a delay with a date in it.   **✗** Calling a miss on the thing a near miss. → **✓** same quantity, or it is not one.   **✗** Counting the miss as all external. → **✓** did you make any of it?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **Wrong. Out by six.** The figures: **fewer than twenty predicted; forty-one down to twenty-six.**'));
out.push(A('**2** **Four of the twenty-six were disputes about the second portion itself** — two portions arriving with different labels, ⚠ **a kind of dispute that did not exist before February.** **He or she made four of their own twenty-six**, so **twenty-two are the old kind: forty-one to twenty-two is a fall of nineteen against the twenty-one predicted** — **the coefficient was nearly right and the model was incomplete.**'));
out.push(A('**3** **Fewer than eighteen disputed results in the February quarter, of which no more than one about a second portion.** ⚠ **Two figures and not one**, because **one figure hid four disputes of the writer\'s own making for three months.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**EIGHTY WORDS AGAINST FIFTY · out by thirty** · J. Attar · 9 March',
  '**Wrong. Out by thirty words**, which is a factor of about one and a half. ⚠ I predicted in February that the first post of the new thread would answer the eleven recurring questions **in about fifty words each.** **It takes about eighty.**',
  '**Why I am not calling it nearly right.** Because the thirty has an answer. ⚠ **_Nearly right_ would have let me keep the fifty as a working figure** and I should have planned the next four answers on it.',
  '**Why thirty, and most of it is mine.** **Four of the eleven questions turned out to be two questions that look alike** — which is 12.1, and I had been told it by my own wrong prediction and had not applied it here. **Answering both halves takes about eighty words. Answering one takes about forty.**',
  '**Which means the figure was right for seven of the eleven.** ⚠ **Seven at about forty-five and four at about eighty** comes to the same total as eleven at about fifty-five, **so the total was nearly right and the average was hiding two different kinds of question.**',
  '**What I am doing about it.** Splitting the four into eight in the first post. ⚠ **If the eight come out at about forty words each, the model was right and only the count of questions was wrong.**',
  '**And next year\'s prediction, with two figures.** **No more than fifteen separate answers, averaging under fifty words**, by 1 September.',
]));
out.push(S('Stage 7 · Write freely (sample, 215 words)'));
out.push(SAMPLE([
  '**TWENTY-SIX AGAINST UNDER TWENTY · out by six** · Y. Mansour · 8 March',
  '**Wrong. Out by six.** ⚠ I predicted in my paper of 12 December that disputed results would fall below twenty in the February quarter if second portions were sent. **They fell from forty-one to twenty-six.**',
  '**Why I am not calling it nearly right.** Because nobody would have argued with that, and so nobody would have looked. ⚠ **_Out by six_ asks a question and _nearly right_ ends one** — and **why six?** has an answer I should not otherwise have found.',
  '**Why six, and four of it is mine.** ⚠ **Four of the twenty-six were disputes about the second portion itself** — two portions arriving with different labels on the same day, **a kind that did not exist before February.** **I made four of my own twenty-six.**',
  '**Which means the mechanism did better than the number says.** Twenty-two of the twenty-six are the old kind: **forty-one to twenty-two is a fall of nineteen**, against the twenty-one I predicted. ⚠ **The coefficient was nearly right and the model was incomplete** — **it had no term for the disputes the remedy itself creates.**',
  '**What I am doing about the four.** **Both portions drawn at the same time by the same person and initialled in the same minute.**',
  '**And next year\'s prediction, with the lesson in it.** ⚠ **Fewer than eighteen, of which no more than one about a second portion.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: the verdict before the figure.** _Wrong. Out by six._ ⚠ **Four words, two sentences, and the second one is the question the page then answers.** Passed.',
  '**Criterion: the writer\'s own share of the miss counted.** _I made four of my own twenty-six._ Passed — **and the counting is what turns a defence into a finding.**',
  '**Criterion: next year\'s prediction carrying a second figure.** _Fewer than eighteen, of which no more than one about a second portion._ ⚠ Passed, **and the second figure is exactly the thing the single figure hid.**',
  '**One thing to keep, and why it works.** _It had no term for the disputes the remedy itself creates._ ⚠ **Keep it because it names a general fault in a particular model** — **any remedy counted by the thing it remedies has this term missing**, and a reader will apply it to their own figures within a day.',
  '**Ranking of the slip I was given**, most useful first: **1** that _nearly right_ appeared once in the fourth paragraph, where it undid the first two sentences. **2** that the restated arithmetic needed both numbers printed, not just the fall. **3** the second figure. ⚠ Least useful: **a note that twenty-six is not far from twenty**, which is the whole thing the page refuses.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('The verdict, a stop, then the figure. ⚠ **Listen for the figure arriving first** — _only six out, so really_ — **which is a defence before a verdict**, and once it is in the room nobody asks why six. Then the sentence the cycle ends on, which is the answer to anybody who would rather have been right: **out by six with a reason beats exactly right with none.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Verdict and figure:** wrong, out by six._',
  '_**Did my own action create any part of it? Yes — four of the twenty-six.**_',
  '⚠ _**And the thing I had not noticed in three months of looking at the number:** the four are all from the first fortnight. **They are a settling-in problem and not a labelling problem**, and if that is right the second portions need no change at all, **which I should not have found out without counting my own share.**_',
]));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  The year I was wrong about the main thing'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and **the partner\'s job is the whole stage: name the first protection heard.** ⚠ The list is in the Language box and should be on the board before the stage begins — **_in fairness_ · _with hindsight_ · _to be honest_ · _I think most people would have_ · _the information available at the time_.** **Almost nobody manages the sentence clean the first time**, and saying so in advance makes the second attempt possible.'));
out.push(A('**b** No protection: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3** is the one to read out — _with hindsight, one might have approached it differently_ — because **it contains a protection, a hedge and an impersonal pronoun**, and it is the sentence this cycle exists to prevent.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **he spent the year on the bracket when the thing that would have answered the letters was one sentence in the refusal** — and the page must have **the main thing first with no protection, the figures with their bases, and all three readers of 11.1.**'));
out.push(A('**b** **1** ⚠ **It goes last and it is short**, because **a page that ends on what you got right has retracted itself** — **and it must be there**: a page with nothing right in it **is not honest, it is dramatic**, and a reader who finds a year with no successes **stops believing the figures.**   **2** ⚠ **Can the person who paid for the mistake read this page and find themselves in it?**'));
out.push(NOTE('⚠ **This is the hardest page in the book and the first sentence is the whole difficulty.** Allow the full cycle, do not shorten Stage 7, and **run Stage 1a twice**: the first attempt arrives protected in seven or eight cases out of ten, and **the second attempt, after the protection has been named, is usually clean.** The protections are not politeness and they are not modesty: ⚠ **every one of them is addressed to a reader who is about to judge you, and the page is not for that reader.** **Cross them out and read it again; nothing is lost** — have the class do exactly that in Stage 4a and count what came out. **Most pages have two.** And the delivery carries the same fault: ⚠ **the throat-clearing before the first sentence is the protection arriving in the voice**, and the room hears the sentence being withdrawn before it is finished.'));
out.push(NOTE('**Mrs Khoury\'s test is the one to mark on and it is not a test of honesty but of address: _can the person who paid for the mistake read this page and find themselves in it?_** ⚠ Mr Barghouti\'s head of section **paid eleven months of correspondence and now believes the writer is interested in attributing blame between offices** — **and that line is the most expensive thing on the page and is not a figure.** **A page that counts the months and not that has counted the cheap part.** ⚠ **Where a student cannot give the page to the person who paid, make them name that person at the top of their own copy.** The page has three readers and **one of them is a person you have cost something**; naming them changes the page more than any instruction about protections does.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about an object)_ _I spent the year on the bracket when the letters were asking what the paragraph meant._',
  '**2** _(about a person)_ _I spent eleven months persuading the man who had already agreed, and never wrote to the clerk who had to do it._',
  '**3** _(about a figure)_ _I quoted three hundred man-hours for two years and the figure is about fourteen._',
  '**4** _(about a date)_ _I planned the whole year round a February release and the slot that mattered opened in December._',
  '**5** _(the cost on somebody else)_ ⚠ _I argued about the batch for five months and the depot spent five months answering me about something I had already conceded in a bracket._',
]));
out.push(A('⚠ Mark these on **the first word**: if the sentence begins with anything but the subject of the action, there is a protection in it. Item **5** is the one to collect and read out, because it is the hardest kind and the best: **the main thing named with the cost to somebody else inside the same sentence.** **Students write item 3 readily and item 5 almost never** — and item 5 is the one that makes the page worth writing, **because a year that cost only the writer is the easiest kind to write about and is the rarest.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the main thing, no protection)_ I spent the year on the bracket when the letters were asking what the paragraph meant.',
  '**B** Protection heard: **none.** The figure?',
  '**A** **Sixty-two of ninety-one** letters asked what the paragraph meant; **four** asked which office applied it. **My count, off the file copies, in February.**',
  '**B** **The person who paid is the head of section.** Are they in it? ⚠ **Not yet** — **and he paid eleven months**, so the page is not finished.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The protection heard in each of the ten and whether the person who paid is in it. **A protection arrives in seven or eight of the ten**, and **_with hindsight_ is the commonest.** ⚠ And **the person who paid is in three of the ten** — the two rows marked ⚠ being the ones where the cost fell on the writer alone, **which is the easiest kind of year to write about and the rarest.** **Say that**, because students assume the opposite.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Main thing:** I spent five months arguing about whether the batch was faulty when the question was who checks the seal. **Figure:** nine cartons refused in five months out of about sixty, my count, off the refusal slips. ⚠ **Protections crossed out: two** — "in fairness to both sides" and "the information we had at the time". **Nothing was lost.**_',
  '**b** _**The person who paid:** the distributor\'s office, which answered nine letters about a question I had already conceded. ⚠ **They are not on the page.** **Added:** "They spent five months answering me about something I had conceded in September, in a bracket, in a third letter."_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Adnan gave the main thing in one sentence with nothing in front of it: he spent the year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says. Then the figure: of the ninety-one letters they answered last quarter, sixty-two asked what the paragraph meant and four asked which office had applied it — and he has spent a year on the four. Asked what the year cost, he said three written requests, three refusals, about eleven months, and a head of section who now believes he is interested in attributing blame to offices, which he is not and cannot now easily unsay. Omar asked how he found out, and he counted the letters — 10.1, in February: nobody had ever counted what the letters asked, only how many there were, for nine years, and the count took about forty minutes. Which is the shape of the page: the main thing with nothing in front of it, the figures with their bases, and what the year cost — and then the three readers, because this page has all three: you next year, whoever lets you try again, and the file. Most accounts of a year are written for the fourth reader of 11.5. Dima said there is one more thing it has to have and it goes last: the thing you were right about, last and short, because a page that ends on what you got right has retracted itself. And it must be there, which is the part students get wrong in the other direction, because a page with nothing right in it is not honest but dramatic, and a reader who finds a year with no successes in it stops believing the figures. Jad asked about the protections, and there is a list: in fairness, with hindsight, to be honest, I think most people would have, the information available at the time — every one addressed to a reader who is about to judge you, and the page is not for that reader. And Mrs Khoury gave the test: can the person who paid for the mistake read this page and find themselves in it?']));
out.push(A('Listener task: the partner\'s main thing, the protections heard, and whether the person who paid is on the page. ⚠ **Collect the protections and put the count on the board as one number — the whole class\'s total.** In a class of twelve expect **twenty or more**, and the number does more than the list does. **Then collect the pages at the end of the cycle and keep them.** They are what a year of this course produced, **and no other single task in the book shows it** — the handover says so and it is worth saying to the class.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _With hindsight…_ → **✓** begin with the subject of the action.   **✗** _The information available at the time was limited._ → **✓** the figure you did not count.   **✗** A page ending on what went right. → **✓** last and short.   **✗** A page with nothing right in it. → **✓** one sentence; otherwise the figures are not believed.   **✗** The cost counted in months only. → **✓** the cost that is not a figure.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** He spent the year **asking for the originating office to be printed on refusals**, when the thing that would have answered the letters was **one sentence saying what the paragraph says.** **Three written requests** — February, July and December — **and three refusals in the same four words.**'));
out.push(A('**2** Of **ninety-one** letters answered last quarter — his count, off the file copies, in February — **sixty-two asked what the paragraph meant** and **four asked which office had applied it.** ⚠ **The count took about forty minutes**, and nobody had ever done it: **the office has counted how many letters there were, every quarter, for nine years.**'));
out.push(A('**3** The most expensive line is that **the head of section now believes he is interested in attributing blame between offices** — ⚠ **which he is not and cannot easily unsay.** And the one thing he was right about: **the schedule has been applied about four hundred times since 2019 and nobody can see which paragraph any decision rests on** — **still true, still worth a year, and somebody else\'s.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FIVE MONTHS I SPENT ON THE WRONG QUESTION** · M. Hariri · 11 March',
  '**I spent five months arguing about whether a batch of cells was faulty, and the question was always who looks at the seal before the carton leaves the depot.**',
  '**What I did on the strength of it.** Nine refusals, **four letters**, and about **five months** of a counter that is open six days a week. ⚠ **I also conceded properly, in September, that the batch was not faulty** — **inside a bracket, in a third letter.** **The concession was right and the place was useless.**',
  '**What was true instead, with the figures.** Of **nine cartons refused between July and November** — my count, off the refusal slips — **nine had a lifted seal and none had a failed cell.** **I tested four cells myself and all four were within tolerance.**',
  '**How I found out, and it took about four minutes.** I read their delivery note of 19 September **to the bottom of the page.** ⚠ **_Sealing is done by hand on a brush bench_**, under the signature. **I had read that note about forty times.**',
  '**What it cost somebody else.** Their office answered **nine letters** about a question I had already conceded. ⚠ **That is five months of somebody\'s afternoons** and it is the line I should not like read out.',
  '**What I have changed.** Anything I concede goes in **the first paragraph.** ⚠ **Not in a bracket and not in a third letter.**',
  '**And the one thing I was right about.** **The seals do lift**, and nobody at either end had a procedure for looking at them. **That is still true.**',
]));
out.push(S('Stage 7 · Write freely (sample, 217 words)'));
out.push(SAMPLE([
  '**THE YEAR I SPENT ON THE WRONG FOUR LETTERS** · A. Barghouti · 10 March',
  '**I spent this year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says.**',
  '**What I did on the strength of it.** Three written requests — **February, July and December** — three refusals in the same four words, and about **eleven months** of my own time in a section of three people. ⚠ **I also spent 9.1 on it**, conceding the staffing objection at full strength. **The page was good and the object was wrong.**',
  '**What was true instead, with the figures.** Of the **ninety-one** letters this office answered last quarter — my count, off the file copies, in February — **sixty-two asked what the paragraph meant.** **Four asked which office had applied it.** ⚠ **I have spent a year on the four.**',
  '**How I found out, and it took about forty minutes.** I counted what the letters asked. ⚠ **Nobody had ever done that**: we have counted how many there were, every quarter, for nine years.',
  '**What it cost somebody else.** The head of section now believes **I am interested in attributing blame between offices.** ⚠ **I cannot easily unsay it, and that is the most expensive line on this page and it is not a figure.**',
  '**What I have changed.** One sentence on the template, agreed in eleven days.',
  '**And the one thing I was right about.** ⚠ **Nobody can see which paragraph a decision rests on. That is still true.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: no protection in the first sentence.** _I spent this year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says._ ⚠ **Thirty-four words, one sentence, its own paragraph, and nothing in front of it.** Passed.',
  '**Criterion: the figures with a base and a counter.** _Ninety-one letters; sixty-two; four. My count, off the file copies, in February._ Passed — **and the counter is the writer, which is the strongest form.**',
  '**Criterion: the cost that is not a figure.** _He now believes I am interested in attributing blame between offices._ ⚠ Passed, **and the page says in terms that it is the most expensive line on it**, which is the judgement the reader would otherwise have to make.',
  '**One thing to keep, and why it works.** _The page was good and the object was wrong._ ⚠ **Keep it because it saves the method from the mistake** — a reader of this page would otherwise conclude that conceding at full strength does not work, **and the only thing that did not work was the choice of what to argue about.**',
  '**Ranking of the slip I was given**, most useful first: **1** that my first draft opened _in fairness, the schedule is genuinely opaque_, which is a protection and a true sentence. **2** that the forty minutes needed to sit beside the eleven months, not three paragraphs away. **3** the one-thing-right placement. ⚠ Least useful: **a suggestion that the title was severe**, which it is, and the page is about a year that was.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('The first sentence once, flat, **no throat-clearing.** ⚠ **The throat-clearing is the protection arriving in the delivery**, and it is the last delivery fault this book names. Then the sentence the cycle ends on, which is Mr Barghouti\'s and is the hardest line in the book: **the page was good and the object was wrong.** ⚠ **Collect these pages.** They are the thing to show anybody who asks what a year of this course was for.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Given to:** the head of section, on 11 March._',
  '_**Asked:** are you in it?_',
  '⚠ _**He said yes, and that the line about attributing blame was the only part he had not known I knew.** **He then said the four letters are still four letters and somebody should deal with them**, which is a better outcome than the page asked for and is not why I wrote it._',
]));

// ===================== 12.6 =====================
out.push(h2('12.6  The letter that reports a year'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Ban _I hope you are well_ out loud before the stage starts**, because it will otherwise arrive in five or six of eight attempts and the stage will be about it. **Then the three things with figures, and then the ask or the no-ask** — and the no-ask is the move of the cycle: **a letter at the end of a year with no ask in it is read; a letter with an ask is filed.**'));
out.push(A('**b** First lines: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4** is the one to read out — _to tell you what the code did to our refusals, and to ask for nothing_ — because **it carries the reason for writing and the no-ask in one sentence**, which is the whole of the cycle in eighteen words.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it has one reader and that reader has a relationship with you** — and Mrs Shaaban says **a letter at the end of a year with no ask in it is read**, and _I am asking for nothing_ **is the sentence the whole letter turns on.**'));
out.push(A('**b** **1** **Three, each with a figure**, and **the one to be remembered goes last.** ⚠ A year reported as a list of eight things **has reported nothing**: the reader remembers the first and the last.   **2** **The question tells you and it is the first thing to find.** ⚠ **An email to a friend · a letter to a manager · a reply to somebody who has written to you** — **each sets the register before you have written a word**, and a letter in the wrong one is the commonest failure in the paper.'));
out.push(NOTE('⚠ **The no-ask is counter-intuitive and the evidence for it should be given as a fact and not as advice: Mrs Shaaban\'s letter asked for nothing and the distributor wrote back in four days proposing something she had not thought of.** **A letter with an ask is filed until somebody has time; a letter with none is read on the day it arrives.** The reason is worth saying: **the year is the content**, and an ask **converts the letter into a request with a year attached to it** — ⚠ **and the reader can tell the difference in four seconds.** When an ask is genuinely needed, **it goes last and is named as the only one** _(11.4)_. **But in this genre, make the class write one letter with no ask at all**, even where they want something: **it is the only way to find out that it works.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(an arrangement after a quarter)_ _I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures._',
  '**2** _(a year of refusals)_ _I am writing to tell you what the code did to our refusals this year, and to ask for nothing._',
  '**3** _(something that has fallen through)_ _I am writing because the second pad has not gone in, and you were the person who asked me about it in June._',
  '**4** _(something that has caught on)_ _I am writing because the date stamp has caught on at the gate without anybody being reminded, which neither of us expected._',
  '**5** _(a letter with no ask)_ ⚠ _I am asking for nothing. **Not a change to the policy, not an explanation, and not an answer to this letter.**_',
]));
out.push(A('⚠ Mark these on **whether the first line gives a reason a reader could not have guessed**, and reject any first line that would fit any letter. Item **5** is the one to insist on, and the third item in its list is the one that works: ⚠ **_and not an answer to this letter_** — **a letter that does not ask to be answered is answered more often than one that does**, and students will not believe that until they have sent one.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**B** _(first line)_ I am writing because **the arrangement we made in February has now run for a quarter**, and I thought you would want the figures.',
  '**B** _(three things)_ **A code on every slip since 10 February — about forty slips.** **The date stamp on our side, on one consignment in fourteen.** **And nine of our forty were ours, which has not moved.**',
  '**B** _(no ask)_ **I am asking for nothing** — not a change to the policy, not an explanation, **and not an answer to this letter.**',
  '**A** _(time: 39 sec)_ The register is **semi-formal, no contractions**, because the reader is **another office** and the relationship is **working and not personal.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The first line, the three figures and the ask for each of the eight. **_I hope you are well_ arrives in five or six of the eight**, and **the third thing has no figure in about half.** ⚠ And the finding to name: **only one or two pairs choose the no-ask**, and those are the ones to read out — **the class hears the difference between a letter that reports a year and a letter that wants something, and it cannot be explained any other way.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**First line and three things written. Word count of the three: ninety-four.** ⚠ **Which leaves about a hundred for the first line, the no-ask, the one thing that went wrong and the closing** — and that is the whole letter at two hundred._',
  '**b** _**Read aloud, by name.** ⚠ **I stopped twice**: at "the figures below represent" — which I should never say to a man I have telephoned — and at "please do not hesitate", **which I would not say aloud to anybody.** **Both out, and the register is now one I could say.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim gave the first line of her letter to the distributor: I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures. And not I hope you are well, which is where most of the room will start — because a letter has one reader and that reader has a relationship with you, and that is what makes it different from the article and the report: the article is for somebody who did not ask, the report is for a file, and the letter is for a person who will remember what you wrote last time. Omar asked how many things it carries, and three, each with a figure, because a letter reporting a year as a list of eight things has reported nothing: the reader remembers the first and the last, so three things, three figures, and the one you want remembered goes last. Hers are a code on every slip since 10 February, about forty slips; the date stamp on their own side, on one consignment in fourteen; and nine of their forty were theirs, which she told him in December and which is still the figure. Dima asked about the ask, and there is none and she has said so in the letter: I am asking for nothing — four words, and they are the sentence the whole letter turns on, because a letter at the end of a year with no ask in it is read and a letter with an ask is filed until somebody has time. Which is worth saying in those words because it is counter-intuitive: the letter with no ask is the one that produces the next conversation, and in her case the distributor wrote back in four days proposing something she had not thought of. Jad asked about when there is an ask, and one, at the end, named as the only one — but in a letter reporting a year, consider having none at all, because the year is the content and an ask converts the letter into a request with a year attached to it. And Hiba asked about the register in the examination, and the question tells you and it is the first thing to find.']));
out.push(A('Listener task: the partner\'s first line, three figures and ask, and where the reader stopped. ⚠ **The reading aloud by name is the register test and it is faster than any rule.** **The places a student stops are the places where the register is wrong**, and the two that come up in every class are **_the figures below represent_** and **_please do not hesitate_** — neither of which anybody would say to a person they have telephoned. **Collect the stops, not the corrections.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I hope you are well._ → **✓** the reason for writing.   **✗** Eight things. → **✓** three, each with a figure.   **✗** The figure to be remembered first. → **✓** last of the three, and named as such.   **✗** An ask at the end of a year letter. → **✓** consider none, and say so.   **✗** A register you would not say aloud. → **✓** read it by name and listen for the stops.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That **the arrangement made in February has run for a quarter** and she thought he would want the figures **before anybody asks either of them for them.** The three things: **the code**, **the date stamp**, and **the nine.**'));
out.push(A('**2** **The nine** — _nine of our forty consignments last quarter left here with the paperwork incomplete._ ⚠ **It has not moved**: the code tells her which nine, and **knowing which nine has not yet made them eight.** **She will say in June whether it has.**'));
out.push(A('**3** **Nothing** — not a change to the policy, not an explanation, **and not an answer to the letter.** And of the five months: ⚠ **they were both right and were arguing about the wrong object**, and **she had written her concession inside a bracket in a third letter** — **nobody reads a bracket in a third letter, and she will not put anything there again.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE DIRECTORATE, SCHEDULE SECTION** · A. Barghouti · 14 March',
  '**Dear Mr Saqqal,**',
  '**I am writing because the sentence you agreed to in February has now been on the template for a month, and I thought you would want the figure before the quarterly return asks for it.**',
  '**The sentence.** _This paragraph requires that…_, in the words of the schedule, typed by whoever signs. **About twenty seconds a refusal**, on **forty-one refusals since 10 February.**',
  '**What it has done to the letters.** ⚠ **Eleven letters answered since 10 February, against ninety-one in the quarter before** — and **two of the eleven asked what a paragraph meant**, against sixty-two. **I am aware one month is one month.**',
  '**And the figure I want you to remember.** **Four letters a quarter asked which office had applied the paragraph.** ⚠ **That figure has not moved and I am not asking you to move it.** **I spent a year on those four and they are still four.**',
  '**I am asking for nothing.** Not the bracket, **which I withdraw**, not a review of anything, **and not an answer to this letter.**',
  '**One thing about last year.** ⚠ **Three of my requests answered the cost and none said what the change did not touch.** **I was answering a question about money that nobody was asking**, and that cost you eleven months of correspondence as well as me.',
  '**Yours sincerely, A. Barghouti**',
]));
out.push(S('Stage 7 · Write freely (sample, 216 words)'));
out.push(SAMPLE([
  '**TO THE DISTRIBUTOR, AL-AMIN DEPOT** · R. Shaaban · 12 March',
  '**Dear Mr Kabbani,**',
  '**I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures before anybody asks either of us for them.**',
  '**The code.** A refusal code has been on **every slip since 10 February** — **about forty slips** — and I have not telephoned your office about one of them. ⚠ **In the eleven months before that I telephoned about nine.**',
  '**The date stamp.** On our side, on **one consignment in fourteen** — about seventeen minutes a year. **It has caught on at the gate without anybody being reminded**, which I did not expect.',
  '**And the nine, which is the figure I want you to remember.** ⚠ **Nine of our forty consignments last quarter left here with the paperwork incomplete.** **It has not moved**: the code tells me which nine and has not yet made them eight. **I shall tell you in June.**',
  '**I am asking for nothing.** Not a change to the policy, not an explanation, **and not an answer to this letter.**',
  '**One thing about the five months before February.** We were both right and arguing about the wrong object — ⚠ **and I had written my concession inside a bracket in a third letter.** **Nobody reads a bracket in a third letter.**',
  '**Yours sincerely, R. Shaaban**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2: criterion, line, keep, ranking)'));
out.push(SAMPLE([
  '**Criterion: a first line that is the reason for writing.** _I am writing because the arrangement we made in February has now run for a quarter._ ⚠ **No _I hope you are well_ anywhere in the letter.** Passed.',
  '**Criterion: three things, each with a figure.** _About forty slips · one consignment in fourteen · nine of forty._ Passed — **and the third is named as the one to remember.**',
  '**Criterion: the no-ask with the three things it is not.** _Not a change to the policy, not an explanation, and not an answer to this letter._ ⚠ Passed, **and the third of the three is the one that will get it answered.**',
  '**One thing to keep, and why it works.** _Nobody reads a bracket in a third letter._ ⚠ **Keep it because it is the only sentence in the letter that admits something about how she writes rather than what she counted** — and because **the bracket cost the reader five months too**, so he is in it.',
  '**Ranking of the slip I was given**, most useful first: **1** that my first draft had the nine second and the stamp last, so the letter ended on the easy figure. **2** that _I am asking for nothing_ needed the three refusals after it or it reads as sulking. **3** the eleven-months comparison. ⚠ Least useful: **a query about whether to name the gate men**, which would have made it a different letter.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('Read aloud **as if to the person, by name**, stopping where you would stop if they were there. ⚠ **The stops are the register faults** and there is no faster way to find them. Then the sentence the cycle ends on, which is Mrs Shaaban\'s and reaches back to 11.7: **nobody reads a bracket in a third letter, and I shall not put anything there again.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Letter sent, 12 March, 216 words.**_',
  '_**Answer took: four days.**_',
  '⚠ _**And it proposed something I had not thought of:** that their own clerk should initial the code box, **so that a wrong code can be traced to a person.** **I had not asked for anything at all** — and the one thing I had been unable to get in eleven months of asking arrived unasked, in a reply to a letter that wanted nothing._',
]));

// ===================== 12.7 =====================
out.push(pb());
out.push(h2('12.7  Review & Mediate: Two accounts of the same year'));
out.push(S('Stage 1 · Get ready – Unit 12 quiz'));
out.push(A('**1** _Nobody could have **foreseen** the four new disputes._   **2** _The arrangement did not **pan** out as I had said._   **3** _Looking **back** on the year, the sheet is the useful part._   **4** _The argument **died** down after the code appeared._   **5** _My **confidence** that the field would go in was misplaced._   **6** _It was not **inevitable** that the second portions would create disputes._'));
out.push(A('⚠ Items **1** and **3** are the two that carry the unit. **1** is the past participle after _could have_, and _foresaw_ is the error students who speak well make in writing. **3** is **_look back on_** and not _backwards_: **the particle is _back_ and the preposition is _on_**, and _looking backwards_ is a direction and not a review. Items **5** and **6** are the declared word-formation set, and **6** is the one most often wrong: ⚠ **_inevitable_ after _was not_ and not _inevitability_**, because the slot wants an adjective.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Open — the two accounts as written, with the sheet of 1 June underneath and the question for the cycle.'));
out.push(A('**b** **Both accounts are selections**, and neither writer is being dishonest: **each remembered the predictions that were the shape of the year they had had.** ⚠ And the only defence is **a sheet written at the beginning** — **two conditions and no others: written in advance, and dated.**'));
out.push(NOTE('⚠ **This is the eighth and last mediation of the book, and the answer is the one it has reached seven times before: nobody is wrong.** **4.7, 6.7, 7.7, 8.7, 9.7, 10.7 — nobody was wrong. 11.7 — the writer was. 12.7 — both accounts are true and both are selections of the same eleven facts.** Tell the class the whole series; **it is the architecture of the book** and the last cycle is the place to say so. ⚠ **The move that is new is the third: count what each account left out** — and the three predictions in neither account are the ones to dwell on, because **an unmarkable prediction leaves no trace in either**: **it cannot be remembered as a success or a failure, so it is not in the good year and it is not in the bad one.** **Five were unmarkable in June and three have simply disappeared, which is what unmarkable means a year later.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7: the Language box here **tests** rather than drills, and the testing is done in Stage 3 on two pairs of accounts the class has not seen — **one pair in which both accounts are true, and one in which a statement in the second is false.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**The first account.** _"A good year — four things asked for and four things done."_ **The second.** _"A poor year — four things attempted and four unfinished."_',
  '**The sheet, marked.** Eleven predictions: **two right, four wrong, five unmarkable.**',
  '**What the first account kept.** **The four that came out.** **What the second kept.** **The four that did not.**',
  '**What both left out.** ⚠ **Three of the eleven, all three unmarkable** — _record-keeping will get better_, _things will be clearer_, _it will be too early to tell._',
  '**Both accounts are true.** Neither writer chose: **each remembered the predictions that were the shape of the year they had had.**',
  '**The defence.** ⚠ **A sheet written in advance and dated.** **You cannot correct a selection by trying harder to be fair at the end of the year.**',
]));
out.push(A('⚠ **Pair B is the one with a false statement and the distinction is the one the whole unit rests on: a selection is honest and a false statement is not.** _"Nothing changed; we are where we were in January"_ **is contradicted by forty slips carrying a code since 10 February** — **and the test is whether a document contradicts it.** About half the pairs call Pair B a selection as well; ⚠ **the correct answer names the sentence and the document**, and the right tone is 10.2\'s: **_that is not a selection, it is wrong, and here is the thing that shows it._**'));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The marks, the selections and the count of omissions for each pair. ⚠ **Pair B has the false statement** — _nothing changed_ against forty coded slips. **A selection is honest; a false statement is not**, and the test is whether a document contradicts it. **About half the pairs miss it**, and the four minutes spent on why are the last four minutes of teaching in this book.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**My account in four sentences.** A mixed year: the code came, the date stamp caught on, the refusals did not fall, and the comparison with the northern depot could not be made._',
  '_**Beside the sheet.** Of six predictions: **three right, two wrong, one unmarkable.** **My account kept the three right and one of the two wrong.**_',
  '_**What my account left out.** The second wrong one — the depot never told us who entered each code — **and the unmarkable one entirely.** ⚠ **I had forgotten writing it.**_',
  '_**The one sentence in the sheet and not in the memory.** ⚠ **The only prediction I cannot mark is the only one I would have agreed with in June**, and it has left no trace in anything I have written since._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Two accounts of the same year, written in the same week by two people in the room. Asked which of them is right, Omar said both, as far as he could see: every sentence in each of them is true and he had checked eight of them. So the mediation, which is three moves and is the last set of three in the book: put both accounts beside the sheet of 1 June, mark all eleven predictions once in front of both writers, and count what each account left out. The first account has the four that came out and the second has the four that did not — and three of the eleven are in neither, all three unmarkable. Which is the finding of the cycle and of the unit: both accounts are selections and neither writer is being dishonest. Nobody chose; each of them remembered the predictions that were the shape of the year they had had, and the year each of them had had was decided by which four came out. Dima asked about the three nobody mentioned, and those are the ones to dwell on: an unmarkable prediction leaves no trace in either account, because it cannot be remembered as a success or a failure — it is not in the good year and it is not in the bad one. Five of the eleven were unmarkable in June and three have simply disappeared, which is what unmarkable means a year later. Jad asked what the defence is if both accounts are honest and both are selections, and one thing only, and it is the last answer the book gives: a sheet written at the beginning. You cannot correct a selection by trying harder to be fair at the end of the year, because the selection is made by memory and memory does it before you sit down. Hiba said because it was written before anybody knew, and because it has a date at the top — those are the two conditions and there are no others: written in advance, and dated. And Mazen asked who is right about the year, and neither.']));
out.push(A('Listener task: the one sentence about the student\'s own year that is in the sheet and not in the memory. ⚠ **Collect those sentences and read them out; they are the last thing the class produces in this book.** **And then do the thing the handover asks for: write next year\'s sheet in front of the class**, the same number of predictions, **every one with a date and a figure**, dated and put away. **Twenty minutes.** ⚠ **A class that leaves Unit 12 without writing it has done a unit about prediction and has made none.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _One of us must be exaggerating._ → **✓** both accounts are selections.   **✗** Producing a third account. → **✓** the marking and the count, and nothing else.   **✗** Treating a false statement as a selection. → **✓** name the document that contradicts it.   **✗** Trying to be fairer at the end of the year. → **✓** a sheet written in advance.   **✗** An undated sheet. → **✓** written in advance **and** dated.'));
out.push(S('Stage 5 · Read – exam practice (B2 First Reading and Use of English Part 5)'));
out.push(A('**1** A   **2** B   **3** C   **4** D   **5** A   **6** C'));
out.push(A('Three things to say about this task, because it is the first Part 5 of the course and the last reading task in the book. ⚠ **Part 5 asks what the writer says and means, and the answer is always in one place in the text** — **find the sentence before you choose**, and the three wrong options are built from things the text mentions but does not say. ⚠ Item **3** is the one that separates a class: **B** _(that they were about the predictions that failed)_ **is the opposite of what the text says** and is chosen by anybody skimming, because the paragraph is full of the words _wrong_ and _failed_. And item **6** asks for **the main point and not a detail**: **B** _(it saves time)_ is true of the practice and is not the point — ⚠ **teach the habit of asking, on a main-point question, _what would the text lose if this sentence went?_**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO ACCOUNTS OF ONE YEAR** · H. Nasser · 13 March',
  '**The first.** _"A good year. The promise field went in, the refusal code is on every slip, the handover sheet carries the expected admissions, and the thread is closed. Four things asked for and four things done."_',
  '**The second.** _"A poor year. The bracket was refused three times, the second pad never went in, the disputes did not fall below twenty, and the comparison I was asked for could not be made."_',
  '**Every statement in both is true.** I have checked eight of them against documents and the other two against the people who wrote them.',
  '**The sheet of 1 June, marked.** **Two right, four wrong, five unmarkable.**',
  '**What the first account kept.** **The four that came out.** **What the second kept.** **The four that did not.**',
  '**What both left out.** ⚠ **Three of the eleven — all three unmarkable.** _Record-keeping will get better_, _things will be clearer_, _it will be too early to tell._ **Neither account mentions any of them, and neither writer remembered writing them.**',
  '**The defence, and there is one.** ⚠ **A sheet written at the beginning**, and two conditions: **written in advance, and dated.** **You cannot correct a selection by being fairer in March.**',
  '**And the one sentence about the year that is in neither account.** ⚠ **Five of eleven could not be marked — and that is the result.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (B2 First Writing Part 2: a letter or email)'));
out.push(A('⚠ **Three requirements and they are the content mark: what happened · what did not · what you would do differently.** **Mark the three off before reading for language.** And **the register is set by the reader** — somebody the candidate worked with and has not written to for months — **so contractions are acceptable here and would not be in a letter to an office.** A script in the wrong register **is the commonest failure in this part of the paper.**'));
out.push(A('**And the two faults this unit adds to the marking.** ⚠ **_I hope you are well_ as the first line**, which spends the only sentence the reader is certain to read. And **a year reported as a list**: **three things, each with a figure, and the one to be remembered last** — **a script with eight items has reported nothing**, and the examiner remembers the first and the last exactly as any other reader does.'));
out.push(SAMPLE([
  '**Dear Lubna,**',
  '**It has been a while, and you have asked the one question I have spent this month answering, so here it is with the figures.**',
  '**What happened.** The refusal code went in — **a code on every slip since 10 February, about forty of them** — and I have not had to telephone the depot about one. In the eleven months before that I telephoned nine times. The date stamp at our end has caught on without anybody being reminded, which neither of us expected in June.',
  '**What did not.** **Our own nine.** Nine of forty consignments left here last quarter with the paperwork incomplete, which is exactly what it was in December. ⚠ **Knowing which nine has not yet made them eight**, and I shall know in June whether it ever will.',
  '**And what I would do differently.** I conceded the thing that mattered in September — **in a bracket, in a third letter.** Nobody reads a bracket in a third letter. ⚠ **It cost both offices five months**, and if I had put the same sentence in the first paragraph of the first letter we should have been where we are now by October. **That is the whole of what I have learnt, and it is about where a sentence goes and not about what it says.**',
  '**Yours, Rim**',
]));
out.push(A('_(218 words — a first line that is the reason for writing, all three named requirements, three figures, the register of an email to somebody known, and the thing done differently stated as a fault of placing and not of substance.)_'));
out.push(S('Unit 12 check · A  Grammar and vocabulary'));
out.push(A('**1** b   **2** c   **3** a   **4** c   **5** b   **6** a   **7** c   **8** b'));
out.push(A('Items **1** and **2** are the two that carry the unit: **the past participle after _could have_**, and **the bare infinitive after _did not_** — both of them places where a student who speaks well writes badly. Items **3**, **4** and **8** are three of the declared phrasal verbs in three forms: **_look back on_ with its particle and its preposition, _die down_ in the past simple, and _cut down on_ —** no, item **8** is the word-formation item: ⚠ **_inevitable_ and not _inevitability_**, because _was not_ wants an adjective. Items **5**, **6** and **7** complete the word-formation set: **confidence, proof, revision**, and **6** is the one to check in marking, since _proving_ and _proven_ both look possible until the article is read.'));
out.push(S('Unit 12 check · B  Listening (B2 First Listening Part 4 style – multiple choice)'));
out.push(A('**1** A   **2** A   **3** B   **4** C   **5** B   **6** C   **7** B'));
out.push(A('⚠ **Part 4 distractors are built from things the speaker says somewhere else in the recording**, and this script has two of the cleanest examples in the book. In item **3**, option **C** — _the depot had changed its own form_ — **is true, and it is her answer to item 7**: she says she cannot explain it. A candidate who has heard the phrase and not placed it will choose it. ⚠ And in item **1**, **C** _(the figure for refusals)_ **is what the situation suggests** and she says the opposite in her second sentence: _not the figures and not the people — the object._ **Teach the one habit: did she say that in answer to this question?** **Then read the script once afterwards**, because the distractors are easier to see than to hear.'));
out.push(S('Unit 12 check · C  Writing'));
out.push(A('The email, and marked on four things only: **a first line that is the reason for writing; three things each with a figure; all three named requirements answered; and the one to be remembered last.** ⚠ Nothing else is assessed. **An email opening _I hope you are well_ has spent the only sentence the reader is certain to read**, and **a year reported as a list of eight items has reported nothing** — those two faults will account for most of the band difference in any class, **and both are visible before a word is read for language.**'));
out.push(S('I can… (Unit 12)'));
out.push(A('Self-assessment; no answers. The four that matter are the first, the second, the sixth and the seventh: **a prediction with a thing, a date and a record**, **the verdict before the explanation**, **the near miss priced as a figure with your own share counted**, and **the account of a year with no protection in front of the main thing.** ⚠ A class that ticks the letter and the mechanism items and not those four **has learnt to write about a year and not to mark one** — and the marking is the whole of Unit 12.'));
out.push(box('After Unit 12', [
  '**That is twelve units, eighty-four cycles and a book.** ⚠ **Three things remain, in this order.**',
  '**1 The End-of-Book Test.** All four papers of B2 First, a hundred marks, and an afternoon. It carries **all seven parts of Reading and Use of English, Writing Parts 1 and 2, all four Listening parts and all four Speaking parts** — **every task the twelve units taught, and nothing they did not.** The papers are weighted as Cambridge weights them: **40 · 25 · 25 · 10.**',
  '**2 Next year\'s sheet, written in front of the class and dated.** ⚠ **The same number of predictions, every one with a date and a figure, in about twenty minutes.** **This is the only homework in the book that cannot be marked for a year**, and it is the one that makes next year markable. **A class that leaves without it has done a unit about prediction and has made none.**',
  '**3 Collect the 12.5 pages and keep them.** ⚠ **They are the hardest thing anybody wrote in this book** and they are what a year of this course produced. **Show one to anybody who asks what the course was for** — **with the writer\'s permission, and the permission is usually given, because the page was written to be read.**',
  '**And B2 Book 2 begins at Unit 13**, in the same seven-cycle shape: **negotiation, the long document, the disagreement with somebody senior, and the paper that has to survive without you.** ⚠ **Ask the class to bring the sheet.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 12 · Answer Key');
