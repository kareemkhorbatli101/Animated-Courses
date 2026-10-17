// Proactive English B2 · Syria Edition · Book 1 · Unit 12 — Student's Book
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

out.push(h1('Unit 12  What the Year Showed'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'This is the last unit of Book 1, and it is about **looking back on a year in writing**: what was predicted, what happened, and what the difference was worth knowing.',
  '**12.1** takes two predictions of your own — one that came out and one that did not.   **12.2** marks the prediction sheet this class wrote **on 1 June**, in **B1 Book 2, Unit 24.5.**   **12.3** separates a prediction that was right **for the reason given** from one that was right **by accident.**   **12.4** prices the near miss.   **12.5** writes the account of a year in which the writer **was wrong about the main thing.**   **12.6** writes the letter that reports a year.   **12.7** mediates **two accounts of the same year that cannot both be right.**',
  '**Exam practice in 12.7:** B2 First **Reading and Use of English Part 5** (multiple choice), **Writing Part 2** (a letter or email) and **Listening Part 4** (multiple choice).',
  '⚠ **Bring two things you predicted at work this year** — **one that came out and one that did not** — **and anything you wrote down at the time.** 12.1 runs on the pair, and **a prediction you did not write down cannot be marked**, which is the first finding of the unit and the one everybody meets.',
  '**12.5 is the hardest page in this book and it uses all of it**: the concession of 9.1, the figures of 10.1, the three readers of 11.1. ⚠ **Keep it.** It is the page to show somebody who asks what a year of this course was for.',
  '**And the peer-review slip is unchanged for the last time.** Band 2: the criterion with the line copied, one thing to keep with its reason, and the ranking of the slip received.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 12.1 =====================
out.push(pb());
out.push(h2('12.1  The one that came out and the one that did not'));
out.push(p('**Function:** stating a prediction so that it can be marked   ·   **Grammar:** _I expected X by Y_ · _it turned out that_ · _as it happened_ · the date and the figure   ·   **Pronunciation:** the prediction read as it was made'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Read out your two predictions **as you made them**, with whatever you wrote down at the time. ⚠ Then your partner asks three things of each: **what exactly was predicted, by what date, and where is it written?** **Most predictions fail the third question and about half fail the second.**'));
out.push(board('I always said that form would never work.', 'On 2 September I wrote that the date field would be blank on about half the forms by December.'));
out.push(p('**b**  Which prediction can be marked? **1** _I always said it would be a problem._  **2** _On 2 September I wrote that the date field would be blank on about half the forms by December._  **3** _I had a feeling about that one._  **4** _I expected fewer than twenty disputes in the February quarter, and I wrote it in the January note._  **5** _Everybody knew it was coming._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Ms Huda say a markable prediction needs, and what does Mr Attar find about his own two?   **A** a figure, a reason, a witness; both were right   **B** **a thing, a date and a written record** — and Jad finds that **the prediction that came out was never written down**, so he cannot show he made it, while **the one that did not come out is in a post with a date on it**   **C** a date and a name; neither can be marked'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about the prediction that was never written down?   **2** What does Mrs Khoury say she does with her own predictions?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  A thing, a date and a record', [
  ['Ms Huda', 'Mr Attar. Two predictions. The one that came out first.'],
  ['Jad', 'I said the second thread would be busier than the first within a month of opening, and it was — about three times as many posts in the first month.'],
  ['Ms Huda', '**Where is it written?**'],
  ['Jad', '_(a pause)_ **It is not.** I said it to Raed in the corridor in January.'],
  ['Ms Huda', '⚠ **Then you cannot be marked right, and that is not a formality.** **A prediction that was not written down is not a prediction; it is a memory of a prediction** — **and a memory of a prediction is always right**, because the version you remember is the version the facts fit.'],
  ['Omar', 'That is a hard thing to say to somebody who was actually right.'],
  ['Ms Huda', '**He may well have been right, and there is no way to know, and that is the cost.** ⚠ **The whole of this unit depends on there being something to mark**, and about half of what anybody in this room believes they predicted this year **cannot be marked at all.** **That figure is the first finding and it is worth more than any of the predictions.**'],
  ['Jad', 'The other one is written down. It is in a post of 4 February with a date on it.'],
  ['Ms Huda', 'And it was wrong.'],
  ['Jad', '⚠ **Flatly.** I wrote that closing the old thread would cut the questions by half by April. **The questions did not fall at all** — they moved, which is not the same thing, **and I can show you the sentence.**'],
  ['Ms Huda', '**Which is the better of your two predictions**, and the class should hear why. ⚠ **The one you can show is worth something whatever it says**, and the one you cannot show is worth nothing whatever it says. **A written wrong prediction teaches you something; a remembered right one teaches you only that you are clever.**'],
  ['Dima', 'I write mine at the top of the page I am arguing on.'],
  ['Ms Huda', 'Say what that does.'],
  ['Dima', '**Two lines, dated, before I start.** _I expect X by Y._ ⚠ **It takes about twenty seconds and it has made me change my mind in advance three times this year** — **because a prediction you have to write down in a figure is harder to hold than one you keep in your head.**'],
  ['Hiba', 'And the three things it needs?'],
  ['Ms Huda', '**A thing, a date and a record.** **The thing** must be something that either happens or does not. **The date** must be a real one. ⚠ **And the record must have been made before the event** — _as I said at the time_ is not a record, **it is a claim about a record.**'],
  ['Rim', 'What about _about half_? Is that specific enough?'],
  ['Ms Huda', '**It is, and this is where students are too hard on themselves.** ⚠ _About half_ can be marked: **a tenth is wrong and six in ten is right.** **What cannot be marked is _a problem_, _a lot_, _soon_ and _a great many_** — **not because they are vague but because no outcome could contradict them.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Read it as you made it, in the words you used, and not in the words you would use now.** ⚠ **The temptation is to improve it while reading** — _I said it would probably be a difficulty around the spring_ — **and a prediction improved in the reading is a prediction that can no longer be wrong.**'],
]));
out.push(sp());
out.push(box('Language box – a prediction that can be marked', [
  '**Three things, and the third is the one that fails.** **1 A thing** that either happens or does not. **2 A date** that is a real one. ⚠ **3 A record made before the event** — _as I said at the time_ **is not a record; it is a claim about a record.**',
  '⚠ **A prediction that was not written down is not a prediction; it is a memory of a prediction** — **and a memory of a prediction is always right**, because the version you remember is the version the facts fit.',
  '**Which gives the first figure of the unit, and it should be counted in your own class: about half of what anybody believes they predicted this year cannot be marked at all.** ⚠ **That figure is worth more than any of the predictions.**',
  '**So the written wrong one beats the remembered right one.** ⚠ **The prediction you can show is worth something whatever it says; the one you cannot show is worth nothing whatever it says.** **A written wrong prediction teaches you something; a remembered right one teaches you only that you are clever.**',
  '**Mrs Khoury\'s habit, which costs twenty seconds.** **Two lines, dated, at the top of the page you are arguing on**: _I expect X by Y._ ⚠ **It has made her change her mind in advance three times this year** — **because a prediction you have to write down in a figure is harder to hold than one you keep in your head.**',
  '**_About half_ can be marked and students are too hard on themselves about this.** ⚠ A tenth is wrong and six in ten is right. **What cannot be marked is _a problem_, _a lot_, _soon_ and _a great many_** — **not because they are vague, but because no outcome could contradict them.**',
  '**The shapes.** _I expect X by Y._ _I expect fewer than N by Y._ _It turned out that…_ _As it happened,…_ ⚠ **And one to use with care: _I should be surprised if…_** — which is a real prediction and is **weaker by exactly the amount of the surprise**, so say how surprised.',
  '**Pronunciation.** 🔊 **Track 12.2** **Read it as you made it, in the words you used, and not in the words you would use now.** ⚠ The temptation is to improve it while reading — _a difficulty around the spring_ — **and a prediction improved in the reading is a prediction that can no longer be wrong.**',
  '**Practise:** State the prediction with a thing, a date and where it is written. **1** about a figure  **2** about a date  **3** one you cannot find in writing  **4** using _about half_  **5** using _I should be surprised if_, with how surprised',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the prediction from the card **as it was made.** B asks the three questions — **what thing? by what date? where is it written?** — and then says whether it can be marked. ⚠ **Two rows on each card cannot be marked at all**; B must say which, and why no outcome could contradict them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(as it was made)_ __________.'],
  ['B', 'What thing? By what date? Where is it written?'],
  ['A', '__________ / **nowhere.**'],
  ['B', 'Markable: **yes / no**, because __________.'],
]));
out.push(table(['Card A – as it was made', 'Card B – as it was made'], [
  ['_The date field would be blank on about half the forms by December._', '_Fewer than twenty disputes in the February quarter._'],
  ['_⚠ That form was always going to be a problem._', '_⚠ The gate would give us trouble sooner or later._'],
  ['_Closing the old thread would cut the questions by half by April._', '_The second portions would bring the disputes below twenty._'],
  ['_⚠ Everybody knew the display would have to move._', '_⚠ I always said the pencil board would not last._'],
  ['_I should be surprised if the February release were full — very surprised._', '_The code would be on every slip within a month of the exchange._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three answers for each of the ten, and whether it can be marked. Then the count: **six of the ten are markable and four are not** — and the four are the rows marked ⚠. ⚠ **And the second finding: all four unmarkable ones are about the past as well as the future** — _always going to be_, _always said_ — **which is the shape to watch for in your own speech.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your two predictions **as you made them** and then answer the three questions for each in writing. ⚠ **If the record does not exist, write _nowhere_ and leave it.** **Do not reconstruct it** — a reconstructed record is the thing this cycle is about, and the honest _nowhere_ is worth more than the best reconstruction.'));
out.push(p('**b**  Swap. Your partner marks each of your two **markable / unmarkable** and says why. ⚠ Then both of you write **one prediction for the next three months**, in Mrs Khoury\'s shape: **two lines, dated, with a figure.** **Keep it somewhere you will find it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad gave the prediction that came out first: he said the second thread would be busier than the first within a month of opening, and it was — about three times as many posts in the first month. Asked where it is written, he said it is not: he said it to Raed in the corridor in January. Then he cannot be marked right, and that is not a formality — a prediction that was not written down is not a prediction but a memory of a prediction, and a memory of a prediction is always right, because the version you remember is the version the facts fit. Omar said that is a hard thing to say to somebody who was actually right, and he may well have been right, and there is no way to know, and that is the cost. The whole of the unit depends on there being something to mark, and about half of what anybody in the room believes they predicted this year cannot be marked at all — which is the first finding and is worth more than any of the predictions. The other one is written down, in a post of 4 February with a date on it, and it was wrong flatly: he wrote that closing the old thread would cut the questions by half by April, and the questions did not fall at all. They moved, which is not the same thing, and he can show the sentence. Which is the better of his two predictions, and the class should hear why: the one you can show is worth something whatever it says, and the one you cannot show is worth nothing whatever it says — a written wrong prediction teaches you something, and a remembered right one teaches you only that you are clever. Dima said she writes hers at the top of the page she is arguing on: two lines, dated, before she starts, which takes about twenty seconds and has made her change her mind in advance three times this year, because a prediction you have to write down in a figure is harder to hold than one you keep in your head. Hiba asked for the three things it needs, and they are a thing, a date and a record — and the record must have been made before the event, since as I said at the time is not a record but a claim about a record. And Rim asked whether about half is specific enough, and it is: a tenth is wrong and six in ten is right._'));
out.push(p('**Listener task:** write your partner\'s two predictions and which of the three questions each failed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad posts about his own two predictions. Answer the questions.'));
out.push(model([
  '**TWO PREDICTIONS, ONE OF THEM MARKABLE** · J. Attar · 2 March',
  '**I made two predictions about this forum in January and February. One of them came out and one did not, and the one that came out is worth nothing.** ⚠ **This post is about why that is the right way round.**',
  '**The one I got right.** In January I said the second thread would be busier than the first within a month of opening. **It was — about three times as many posts in the first month**, which is more than I meant by _busier_.',
  '**Where it is written.** ⚠ **Nowhere.** I said it to Raed in a corridor. **I can describe the conversation and I cannot produce a sentence**, and the version I am describing is the version the figures fit — **which is what memory does and it is not dishonesty.**',
  '**The one I got wrong.** In a post of **4 February** I wrote that closing the old thread would **cut the questions by half by April.** The questions **did not fall at all.** ⚠ **They moved**, which is not the same thing, **and the sentence is still there with the date on it.**',
  '**Why the wrong one is the better of the two.** Because I can read it back and ask what I had assumed. ⚠ **I had assumed that the same question asked in two places is one question asked twice** — **and it is not**: about four of the eleven are two different questions that look alike, **and closing a thread does not touch those at all.** **That is a thing I now know and I would not know it from the prediction I got right.**',
  '**What I have changed, and it costs twenty seconds.** Two lines at the top of any page I am arguing on: _I expect X by Y._ ⚠ **I have written five since February. Two of them changed what I then wrote underneath**, which is the part I did not expect: **a figure you have to write down is harder to hold than one you keep in your head.**',
  '**And one prediction for the next three months, so that this post can be marked too.** ⚠ **I expect the eleven recurring questions to be nine or fewer by 1 June**, because four of them are now answered in the first post of the new thread. **If they are ten or eleven, I was wrong about the four.**',
]));
out.push(item('1', 'Which of his two predictions came out, and what is wrong with it?'));
out.push(item('2', 'What did he predict in the post of 4 February, and what actually happened?'));
out.push(item('3', 'What had he assumed, and what prediction does he make for the next three months?'));
out.push(writers([
  'A page about your own two predictions: **the pair in the first two lines, with the verdict reversed** → **the one you got right** → **where it is written, even if that is _nowhere_** → **the one you got wrong, with its date** → **why the wrong one is better** → **what you have changed** → **and one new prediction, so that this page can be marked too**.',
  '⚠ **Put the reversal first.** _One came out and one did not, and the one that came out is worth nothing._ **A reader who meets that sentence first reads the rest as an argument**; one who meets it later has already decided the page is about being right.',
  '**Write _nowhere_ and leave it.** ⚠ _I can describe the conversation and cannot produce a sentence._ **Do not reconstruct the record**, and add the clause that makes it usable: **_which is what memory does and it is not dishonesty._**',
  '**Say what you assumed, not what you got wrong.** _I had assumed the same question asked in two places is one question asked twice._ ⚠ **The wrong figure is worth nothing and the wrong assumption is worth the page**, which is 10.5 arriving in the last unit of the book.',
  '⚠ And **end on a new prediction with a date, a figure and a falsifier.** _Nine or fewer by 1 June; if ten or eleven, I was wrong about the four._ **A page about predictions that makes none has not understood itself**, **and the falsifier is what makes it a prediction and not a hope.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about your own two predictions (80 words or more).'));
out.push(p('**TWO PREDICTIONS, ONE OF THEM MARKABLE** · ______________ · ______________   **I made two predictions about ______________. One came out and one did not, and the one that came out is worth nothing.** ⚠ ______________.   **The one I got right.** ______________. **It was — ______________.**   **Where it is written.** ⚠ **______________.** ______________.   **The one I got wrong.** On ______________ I wrote that ______________. ______________ ⚠ ______________.   **Why the wrong one is the better of the two.** Because ______________. ⚠ **I had assumed that ______________** — **and ______________.**   **What I have changed.** ______________.   **And one prediction for the next ______________.** ⚠ **I expect ______________ by ______________**, because ______________. **If ______________, I was wrong about ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reversal in the first two lines',
  '_Nowhere_ written, where there is no record, and not reconstructed',
  'The assumption named, and not only the wrong figure',
  'A new prediction with a date, a figure and a falsifier',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their unwritten prediction and then say _nowhere_, and the room says whether it believes the prediction anyway.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the reversal first, _nowhere_ where it belongs, the assumption named, and a new prediction with its falsifier.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reversal in the first two lines, _nowhere_ unreconstructed, a new prediction with a date, a figure and a falsifier.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your prediction as you made it, in the words you used, and not in the words you would use now.** ⚠ The room listens for the improvement — _probably_, _around_, _a difficulty_ — and says where it heard one. Then the sentence the cycle ends on, which is Mr Attar\'s: **the one you can show is worth something whatever it says, and the one you cannot show is worth nothing whatever it says.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do Mrs Khoury\'s twenty seconds: **two lines, dated, at the top of the next page you argue on** — _I expect X by Y_. **12.2 marks the sheet the class wrote on 1 June**, and this one is for next year.'));

// ===================== 12.2 =====================
out.push(h2('12.2  Marking the sheet'));
out.push(p('**Function:** marking a prediction sheet written nine months ago   ·   **Grammar:** _right_ · _wrong_ · _unmarkable_ · _right about X and wrong about Y_   ·   **Pronunciation:** the verdict said before the explanation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take out **the prediction sheet this class wrote on 1 June** _(B1 Book 2, Unit 24.5)_. Read the first prediction aloud **exactly as it was written**, and say one word: **right, wrong, or unmarkable.** ⚠ **The word first and the explanation afterwards** — and if you cannot say the word, the prediction is unmarkable and that is the verdict.'));
out.push(board('Well, it sort of happened and it sort of didn\'t.', 'Unmarkable. No date, and nothing could have contradicted it.'));
out.push(p('**b**  Which verdict is the right one? **1** _"Things will improve."_ → **a** right **b** wrong **c** unmarkable  **2** _"Fewer than twenty disputes in the February quarter."_ _(there were twenty-six)_ → **a** right **b** wrong **c** unmarkable  **3** _"The promise field will be in by the spring."_ _(it went in on 1 March)_ → **a** right **b** wrong **c** unmarkable'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What proportion of the 1 June sheet turns out to be unmarkable, and what does Ms Huda say is the use of the unmarkable ones?   **A** none; nothing   **B** **about half** — and the use of the unmarkable ones is that **they show what the class could not yet say**: every one of them is missing **either a date or a figure**, and the class now writes both without being asked   **C** all of them; they are a waste'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say to do when a prediction is right about one thing and wrong about another?   **2** What does Mrs Nasser notice about the order of the three verdicts?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  Right, wrong, unmarkable', [
  ['Ms Huda', 'The sheet of 1 June. Eleven predictions, written by this room nine months ago. Mrs Nasser, the first one.'],
  ['Hiba', '_"Record-keeping will get better."_ **Unmarkable.** No date, no figure, and **nothing that happened could have contradicted it.**'],
  ['Ms Huda', '**Verdict first and explanation afterwards, which is how all eleven are to be done.** Next.'],
  ['Hiba', '_"Fewer than twenty disputes in the February quarter."_ There were **twenty-six.** **Wrong.**'],
  ['Omar', 'That is a near miss, surely. Twenty-six against twenty.'],
  ['Ms Huda', '⚠ **It is wrong, and 12.4 is about what the near miss is worth.** **Do not soften the verdict in order to be fair to the writer** — **the writer is in the room and will be the one who benefits.** _Wrong, and by six._ **The by-six is 12.4; the wrong is now.**'],
  ['Hiba', 'Then: _"The promise field will be in by the spring."_ It went in on **1 March.** **Right.**'],
  ['Ms Huda', '**Right. And now the count: how many of the eleven are unmarkable?**'],
  ['Hiba', '_(counting)_ **Five.** ⚠ **Nearly half**, and every one of the five is missing **either a date or a figure.** Three are missing both.'],
  ['Ms Huda', '**Which is the finding of the cycle and it is not about prediction at all.** ⚠ **The five unmarkable ones show what this class could not yet say in June**, and the proof that it can say it now is that **nobody in this room has written an unmarkable prediction since Unit 10.** **The sheet is a measurement of the course and not of the year.**'],
  ['Dima', 'And where a prediction is right about one thing and wrong about another?'],
  ['Ms Huda', '**Split it, and mark the halves separately.** _"Closing the thread will cut the questions by half by April"_ — ⚠ **right that the questions would move, wrong that they would fall.** **Two verdicts and no averaging**, because a prediction half right is not a prediction two thirds right or one third right: **it is two predictions, and one of them was wrong.**'],
  ['Jad', 'Which is what mine was.'],
  ['Ms Huda', '**Which is what yours was, and splitting it is what told you the assumption.** ⚠ **A prediction marked _partly right_ teaches nothing; the same prediction split into two teaches you which half you were wrong about** — **and the wrong half always has the assumption in it.**'],
  ['Hiba', 'And I notice something about the order of the three words.'],
  ['Ms Huda', 'Say it.'],
  ['Hiba', '⚠ **Nobody argues about _right_ and nobody argues about _wrong_.** **All eleven arguments in this room have been about _unmarkable_** — because that is the verdict that says the prediction was never worth anything, **and that is a harder thing to hear than being wrong.**'],
  ['Mazen', 'And saying the verdict aloud?'],
  ['Ms Huda', '🔊 **One word, then a full stop, then the explanation.** _Unmarkable._ ⚠ A speaker who runs the word into the explanation — _unmarkable because of course nobody could have known_ — **has apologised for the verdict**, and the room then marks the next one more gently.'],
]));
out.push(sp());
out.push(box('Language box – marking a prediction sheet', [
  '**Three verdicts and no fourth.** **Right · wrong · unmarkable.** ⚠ **The verdict first, then a full stop, then the explanation** — and **if you cannot say one of the three words, the prediction is unmarkable and that is the verdict.**',
  '**Do not soften _wrong_ to be fair to the writer.** ⚠ Twenty-six against twenty is **wrong, and by six.** **The by-six is 12.4; the wrong is now** — **and the writer is in the room and is the one who benefits.**',
  '**Where a prediction is right about one thing and wrong about another, split it and mark the halves.** ⚠ _Right that the questions would move, wrong that they would fall._ **Two verdicts and no averaging**: a prediction is never two thirds right — **it is two predictions, and one of them was wrong.**',
  '**And the wrong half always has the assumption in it.** ⚠ **A prediction marked _partly right_ teaches nothing**; the same prediction **split** tells you which half you were wrong about, **which is where the assumption is** _(10.5)_.',
  '**The finding of the cycle, and it is not about prediction.** **Five of the eleven on the 1 June sheet are unmarkable — nearly half — and every one is missing a date or a figure; three are missing both.** ⚠ **The sheet is a measurement of the course and not of the year.**',
  '⚠ **And nobody argues about _right_ or _wrong_. Every argument is about _unmarkable_** — because that verdict says the prediction was never worth anything, **and that is harder to hear than being wrong.**',
  '**One more verdict to resist, because it will be offered: _it was too early to tell_.** ⚠ **That is not a fourth verdict; it is _unmarkable_ with a date missing.** If the prediction had carried a date, the date would have arrived or not. **Mark it unmarkable and say which of the two was absent.**',
  '**Pronunciation.** 🔊 **Track 12.4** **One word, then a full stop, then the explanation.** ⚠ A speaker who runs the word into the explanation — _unmarkable because of course nobody could have known_ — **has apologised for the verdict**, and the room marks the next one more gently.',
  '**Practise:** Verdict first, then the explanation. **1** one with no date  **2** one with a figure that missed  **3** one that was right  **4** one to split into two  **5** one somebody will call _too early to tell_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with the 1 June sheet between you**. A reads a prediction **exactly as written.** B gives **one word**, stops, and then explains. Where it is right about one thing and wrong about another, **B splits it into two and gives two verdicts.** ⚠ **A marks whether B softened anything.** Work through four each; use the card below if your class has no sheet.'));
out.push(table(['Card A – predictions of 1 June', 'Card B – predictions of 1 June'], [
  ['_"Record-keeping will get better."_', '_"People will write things down more."_'],
  ['_"Fewer than twenty disputes in the February quarter."_ _(26)_', '_"The second pad will be in use by the autumn."_ _(it was not)_'],
  ['_"The promise field will be in by the spring."_ _(1 March)_', '_"The bracket will be printed on refusals by the summer."_ _(not yet)_'],
  ['_⚠ "Closing the thread will cut the questions by half by April."_ _(they moved, did not fall)_', '_⚠ "The date stamp will stop the arguments with the depot."_ _(it stopped some of them)_'],
  ['_"It will be too early to tell by then."_', '_"Nothing much will change."_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the verdict for each of the ten, and which were split. Then the count: **four of the ten are unmarkable, two are right, two are wrong, and the two marked ⚠ must be split.** ⚠ And the finding to name: **every argument in the room was about an _unmarkable_** — **nobody disputed a _right_ or a _wrong_ all lesson.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Mark **your own** prediction from the 1 June sheet, in one word, in writing. ⚠ **Then write what was missing if it was unmarkable** — _a date_, _a figure_, or _both_ — **and do not write a defence.** The defence is the thing this stage exists to prevent.'));
out.push(p('**b**  Swap sheets and mark your partner\'s, in one word each. ⚠ **Where the two of you disagree, the disagreement will be about _unmarkable_** — and the test is the one from the Language box: **could anything that happened have contradicted it?**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sheet of 1 June: eleven predictions written by this room nine months ago. Hiba took the first — record-keeping will get better — and said unmarkable: no date, no figure, and nothing that happened could have contradicted it. Verdict first and explanation afterwards, which is how all eleven are to be done. Then: fewer than twenty disputes in the February quarter. There were twenty-six. Wrong. Omar said that is surely a near miss, twenty-six against twenty, and it is wrong, and 12.4 is about what the near miss is worth — but do not soften the verdict in order to be fair to the writer, because the writer is in the room and will be the one who benefits. Wrong, and by six: the by-six is 12.4 and the wrong is now. Then the promise field will be in by the spring, which went in on 1 March: right. And then the count — five of the eleven are unmarkable, which is nearly half, and every one of the five is missing either a date or a figure, with three missing both. Which is the finding of the cycle and it is not about prediction at all: the five unmarkable ones show what this class could not yet say in June, and the proof that it can say it now is that nobody in the room has written an unmarkable prediction since Unit 10 — the sheet is a measurement of the course and not of the year. Dima asked about a prediction right about one thing and wrong about another, and you split it and mark the halves separately: right that the questions would move, wrong that they would fall. Two verdicts and no averaging, because a prediction half right is not two thirds right or one third right — it is two predictions and one of them was wrong. Jad said that is what his was, and splitting it is what told him the assumption: a prediction marked partly right teaches nothing, and the same prediction split tells you which half you were wrong about, and the wrong half always has the assumption in it. And Hiba noticed something about the order of the three words — nobody argues about right and nobody argues about wrong, and every argument in the room has been about unmarkable, because that is the verdict which says the prediction was never worth anything._'));
out.push(p('**Listener task:** write your partner\'s verdict on their own prediction and what was missing from it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Hiba writes after marking the sheet. Answer the questions.'));
out.push(model([
  '**THE SHEET OF 1 JUNE, MARKED** · H. Nasser · 4 March',
  '**Eleven predictions, written by this class on 1 June. Two right, four wrong, five unmarkable.** ⚠ **The five are the interesting ones and this page is mostly about them.**',
  '**The two right ones.** _The promise field will be in by the spring_ — in on **1 March.** _The refusal code will be on every slip within a month of the exchange_ — twelve days. **Both carry a date and a thing that either happened or did not.**',
  '**The four wrong ones, with their figures.** _Fewer than twenty disputes in the February quarter_ — **twenty-six.** _The second pad in use by the autumn_ — **not in use.** _The bracket printed on refusals by the summer_ — **not printed.** _Closing the thread will cut the questions by half by April_ — **split: right that they would move, wrong that they would fall.**',
  '**The five unmarkable ones, and what was missing from each.** _Record-keeping will get better_ — **no date, no figure.** _People will write things down more_ — **no date, no figure.** _Things will be clearer_ — **no date, no figure.** _The gate will cause trouble_ — **no date.** _It will be too early to tell_ — ⚠ **which is not a prediction at all**, and somebody wrote it as one.',
  '**What the five show, and it is not about the year.** All five are missing **a date or a figure.** ⚠ **They show what this class could not yet say in June** — **and the thing worth recording is that nobody here has written an unmarkable prediction since Unit 10.** **The sheet measures the course.**',
  '**The one argument we had.** Not about any _wrong_. ⚠ **About whether _the gate will cause trouble_ was unmarkable**, because the gate did cause trouble. **It is unmarkable**: no date, and **no outcome at a gate could have contradicted it.** The man who wrote it accepted that in about a minute and said it was worse than being wrong, **which is exactly right.**',
  '**And the sheet for next year, which we wrote on the same afternoon.** ⚠ **Eleven predictions, every one with a date and a figure, in about twenty minutes.** **In June it took us an hour and we produced five that cannot be marked.**',
]));
out.push(item('1', 'What are the three totals, and which group does she say is the interesting one?'));
out.push(item('2', 'What was missing from each of the five unmarkable predictions?'));
out.push(item('3', 'What was the one argument about, and what did the writer of that prediction say?'));
out.push(writers([
  'A page that marks a prediction sheet: **the three totals in the first line** → **the right ones, with what they have in common** → **the wrong ones, with their figures** → **the unmarkable ones, with what was missing from each** → **what the unmarkable ones show** → **the one argument** → **and the sheet for next year, with its time**.',
  '⚠ **Put the three totals in the first line and say which group interests you.** _Two right, four wrong, five unmarkable._ **A page that opens on the score reads as a competition**; the same page opening on **five unmarkable** reads as a measurement, **and only one of the two is worth writing.**',
  '**Give the wrong ones their figures and no adjectives.** _Fewer than twenty — twenty-six._ ⚠ **A wrong prediction with its figure beside it is a fact; the same prediction with _nearly_ in front of it is a defence** — and the defence costs you 12.4, **where the six is actually worth something.**',
  '**Name what was missing from each unmarkable one, in two or three words.** _No date, no figure._ ⚠ **The repetition is the point**: five identical diagnoses in a row **make the pattern visible in a way no sentence of analysis does.**',
  '⚠ And **end on the time the next sheet took.** _Eleven with a date and a figure in about twenty minutes; in June an hour, and five of them unmarkable._ **Two figures and no claim** — **and the claim the reader makes for themselves is the one you wanted.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page that marks a prediction sheet (80 words or more).'));
out.push(p('**______________, MARKED** · ______________ · ______________   **______ predictions, written on ______________. ______ right, ______ wrong, ______ unmarkable.** ⚠ ______________.   **The right ones.** _______________. **Both carry ______________.**   **The wrong ones, with their figures.** _______________ — **______________.** _______________ — **______________.**   **The unmarkable ones, and what was missing from each.** _______________ — **______________.** _______________ — **______________.** ⚠ _______________ — **which is not a prediction at all.**   **What they show, and it is not about the year.** ______________. ⚠ ______________.   **The one argument we had.** ______________.   **And the sheet for next year.** ⚠ ______________ **in about ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The three totals in the first line',
  'Each wrong prediction with its figure and no adjective',
  'What was missing from each unmarkable one, named',
  'The two times for the two sheets, with no claim attached',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their three totals and then the first unmarkable prediction on their sheet, and the room says what was missing from it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the totals first, the figures without adjectives, the five diagnoses, the argument, and the two times.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the three totals in the first line, each wrong prediction with its figure and no adjective, what was missing from each unmarkable one.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say the verdict in one word, stop, and then explain.** ⚠ The room listens for the word running into the explanation, which is an apology. Then the sentence the cycle ends on, which is Mrs Nasser\'s and is the whole argument of the unit: **the sheet measures the course and not the year.**'));
out.push(hw('Mark every prediction on the sheet in one word and write what was missing from each unmarkable one. ⚠ Then write **next year\'s sheet** — the same number of predictions, **every one with a date and a figure** — and time yourself. **Keep both sheets together; 12.7 uses them.**'));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  Right, and not for the reason I gave'));
out.push(p('**Function:** separating a prediction right for its reason from one right by accident   ·   **Grammar:** _right, and for the reason I gave_ · _which would have happened anyway_ · _what else the mechanism predicts_   ·   **Pronunciation:** the verdict and the reason, both flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take a prediction of yours that came out and say **two things**: what happened, and **why you said it would.** ⚠ Then your partner asks the one question of the cycle: **would it have happened anyway?** **If the answer is yes, you were right by accident**, and that is worth knowing and is worth nothing else.'));
out.push(board('I told you the field would go in, and it did.', 'Right about the field. Wrong about why: a regulatory item was withdrawn and a slot opened.'));
out.push(p('**b**  Which is right **for the reason given**? **1** _I said the field would go in because I asked four times, and it went in._  **2** _I said the disputes would fall if we sent two portions; we did, and they fell from forty-one to twenty-six._  **3** _I said the thread would be busier and it was._  **4** _I said the seal would keep lifting while the sealing is done by hand; it is, and it does._  **5** _I said something would have to change and it did._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What four results does Ms Huda name, and which does she say is the dangerous one?   **A** two results; the wrong one   **B** **right for the right reason · right for the wrong reason · wrong with the reason surviving · wrong with the reason gone** — and **the dangerous one is right for the wrong reason**, because it **teaches you the wrong mechanism with the authority of a success**   **C** three results; the first'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say to do when a prediction is right and the reason is wrong?   **2** Why does Mrs Sabbagh say the wrong one with the reason surviving is worth more than her own success?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  Would it have happened anyway?', [
  ['Ms Huda', 'Mrs Sabbagh. The promise field. You predicted it and it happened.'],
  ['Nour', 'I wrote in December that the field would be in the February release. **It went in on 1 March** — a day late and I shall call that right.'],
  ['Ms Huda', '**And why did you say it would?**'],
  ['Nour', 'Because I had conceded the October release and asked for February in the same sentence, and the answer came back in two hours. ⚠ **I thought the concession had done it.**'],
  ['Ms Huda', '**Then the one question of this cycle: would it have happened anyway?**'],
  ['Nour', '_(a pause)_ **Yes.** A regulatory item was withdrawn from the February release on 11 December and a slot opened. ⚠ **The specification was already written, so the first thing in the drawer went into the slot. It was mine because it was ready, not because I had conceded anything.**'],
  ['Ms Huda', '**Right about the outcome and wrong about the mechanism, and that is the dangerous one of the four.** ⚠ **Right for the wrong reason teaches you the wrong mechanism with the authority of a success** — and you would have gone on conceding at the start of every request for a year, **believing a thing that is not true, with a success behind it.**'],
  ['Omar', 'What are the four?'],
  ['Ms Huda', '**Right for the right reason**, which is worth most. **Right for the wrong reason**, which is worth nothing and costs you something. ⚠ **Wrong with the reason surviving**, which is worth a great deal. **And wrong with the reason gone**, which is worth a clean start.'],
  ['Dima', 'Explain the third. Wrong, and still worth a great deal?'],
  ['Ms Huda', '**Miss Mansour\'s is the example.** She predicted the disputes would fall below twenty if second portions were sent. ⚠ **They fell to twenty-six**, so the prediction is wrong — **and the mechanism is untouched: they fell, and they fell because a second portion existed.** **She has a working mechanism and a wrong number**, which is a position to build on.'],
  ['Nour', '**And it is worth more than mine**, and I can say why. ⚠ **She knows something about how disputes happen and I know nothing about how releases are filled.** **I have a success and no mechanism; she has a mechanism and a failure**, and the mechanism is the part you use next time.'],
  ['Ms Huda', '**Which is the sentence to leave the cycle on.** Now: what do you do when you find you were right for the wrong reason?'],
  ['Nour', '**Write it down and say so where I said the first thing.** ⚠ I have put a line in the February note: _the field went in because a slot opened on 11 December, and not because of anything I wrote._'],
  ['Ms Huda', '**And the second half, which is the useful half: what else does the real mechanism predict?**'],
  ['Nour', '⚠ **That the next thing with a written specification gets the next slot, whoever asks.** **So I have written the specification for the second field now**, in February, **and I have not asked for it at all.**'],
  ['Hiba', 'That is a better use of the finding than the finding.'],
  ['Ms Huda', '**It is the whole use of it.** ⚠ **A mechanism that is right predicts other things**, and the test of any mechanism you believe is to **name one other thing it predicts and go and look.** **A mechanism that predicts nothing else is a story about one event.**'],
  ['Mazen', 'And aloud?'],
  ['Ms Huda', '🔊 **Verdict and reason both flat, and the reason not quieter than the verdict.** _Right about the field. Wrong about why._ ⚠ A speaker who drops the voice on the second half **has kept the credit for the first** — and the room then remembers a success.'],
]));
out.push(sp());
out.push(box('Language box – the outcome and the mechanism', [
  '**Every prediction has two parts and both are marked: the outcome and the mechanism.** ⚠ **Four results.** **Right for the right reason** — worth most. **Right for the wrong reason** — worth nothing and costs you something. **Wrong with the reason surviving** — worth a great deal. **Wrong with the reason gone** — worth a clean start.',
  '**The one question: _would it have happened anyway?_** ⚠ **If yes, you were right by accident.** Mrs Sabbagh\'s field went in because **a regulatory item was withdrawn on 11 December and a slot opened** — **and the specification was ready, so the first thing in the drawer went in.** **Hers because it was ready, not because she had conceded anything.**',
  '⚠ **Right for the wrong reason is the dangerous one, because it teaches you the wrong mechanism with the authority of a success** — and you then do the wrong thing for a year with a success behind you.',
  '**And wrong with the reason surviving is the valuable one.** Miss Mansour predicted disputes below twenty; **they fell to twenty-six.** ⚠ **The prediction is wrong and the mechanism is untouched**: they fell, and they fell because a second portion existed. **A working mechanism and a wrong number is a position to build on.**',
  '**Mrs Sabbagh\'s own comparison, which is the sentence of the cycle.** ⚠ **_I have a success and no mechanism; she has a mechanism and a failure_** — **and the mechanism is the part you use next time.**',
  '**What to do when you find you were right for the wrong reason: write it where you wrote the first thing.** _The field went in because a slot opened on 11 December, and not because of anything I wrote._ ⚠ **A correction in a different place from the claim is not a correction.**',
  '**Then the useful half: _what else does the real mechanism predict?_** ⚠ **That the next thing with a written specification gets the next slot, whoever asks** — **so write the next specification now and ask for nothing.** **That is a better use of the finding than the finding.**',
  '**And the general test of any mechanism you believe: name one other thing it predicts and go and look.** ⚠ **A mechanism that predicts nothing else is a story about one event**, which is 7.2 arriving in the last unit of the book.',
  '**Pronunciation.** 🔊 **Track 12.6** **Verdict and reason both flat, and the reason not quieter than the verdict.** _Right about the field. Wrong about why._ ⚠ A speaker who drops the voice on the second half **has kept the credit for the first**, and the room remembers a success.',
  '**Practise:** Give the outcome, the reason, and the answer to _would it have happened anyway?_ **1** one of yours that came out  **2** one where the reason was wrong  **3** one wrong with the reason surviving  **4** one other thing your mechanism predicts  **5** a mechanism that predicts nothing else',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the prediction and its outcome from the card. B asks **would it have happened anyway?** and then names which of the four results it is. B then asks **what else the mechanism predicts.** ⚠ **Two rows on each card are right for the wrong reason**; B must say which and name the real mechanism. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the prediction and the outcome)_ I said __________, and __________.'],
  ['B', 'Would it have happened anyway?'],
  ['A', '__________.'],
  ['B', 'Result: **__________**. _(and the real mechanism, if the reason was wrong)_ __________.'],
  ['B', 'What else does that mechanism predict? __________.'],
]));
out.push(table(['Card A – the prediction and the outcome', 'Card B – the prediction and the outcome'], [
  ['_⚠ The field would go in because I conceded October. It went in._ _(a slot opened on 11 December)_', '_⚠ The code would come because I offered the date stamp. It came in twelve days._ _(the depot had changed its own form in January)_'],
  ['_Disputes would fall if second portions were sent. They fell from 41 to 26._', '_The seal would keep lifting while the sealing is done by hand. It is, and it does._'],
  ['_The second thread would be busier. It was, three times over._ _(nothing else was open)_', '_The thin reference would be used more at the counter. It was._ _(it was moved to the counter)_'],
  ['_The questions would fall by half if the thread closed. They moved and did not fall._', '_The date field would be blank on half the forms. It was blank on a quarter._'],
  ['_Something would have to change. It did._', '_The gate would cause trouble. It did._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** which of the four results each of the ten is, and what else the mechanism predicts. Then the count: **two are right for the right reason, two are wrong with the reason surviving, four are right for the wrong reason, and two are unmarkable.** ⚠ **Four of ten right for the wrong reason is the usual proportion**, and it is the figure to put on the board.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the prediction of yours that came out and answer the question in writing: **would it have happened anyway?** ⚠ **Write _yes_ or _no_ and then the real mechanism**, whichever the answer is. **Do not write _partly_**; it is the shape a defence takes in this cycle.'));
out.push(p('**b**  Swap. Your partner asks **what else your mechanism predicts** — and then you both **choose one of those things and say how you would look.** ⚠ **A mechanism nobody can check is a story**, and the looking takes about four minutes in most cases.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour wrote in December that the promise field would be in the February release, and it went in on 1 March — a day late, and she will call that right. Asked why she said it would, she said because she had conceded the October release and asked for February in the same sentence, and the answer came back in two hours: she thought the concession had done it. Then the one question of the cycle — would it have happened anyway? And yes: a regulatory item was withdrawn from the February release on 11 December and a slot opened, and the specification was already written, so the first thing in the drawer went into the slot. It was hers because it was ready and not because she had conceded anything. Right about the outcome and wrong about the mechanism, which is the dangerous one of the four: right for the wrong reason teaches you the wrong mechanism with the authority of a success, and she would have gone on conceding at the start of every request for a year, believing a thing that is not true. Omar asked what the four are, and they are right for the right reason, which is worth most; right for the wrong reason, which is worth nothing and costs you something; wrong with the reason surviving, which is worth a great deal; and wrong with the reason gone, which is worth a clean start. Dima asked about the third, and Yara\'s is the example: she predicted the disputes would fall below twenty if second portions were sent, and they fell to twenty-six, so the prediction is wrong and the mechanism is untouched — they fell, and they fell because a second portion existed. A working mechanism and a wrong number is a position to build on. And Nour said it is worth more than hers, and she can say why: Yara knows something about how disputes happen and she knows nothing about how releases are filled — she has a success and no mechanism, and Yara has a mechanism and a failure, and the mechanism is the part you use next time. Then what to do when you find you were right for the wrong reason: write it down and say so where you said the first thing, which she has, with a line in the February note. And the useful half is what else the real mechanism predicts: that the next thing with a written specification gets the next slot, whoever asks — so she has written the specification for the second field now and has not asked for it at all._'));
out.push(p('**Listener task:** write your partner\'s result, the real mechanism, and the one other thing it predicts.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour adds to the February note, where the original claim is. Answer the questions.'));
out.push(model([
  '**THE PROMISE FIELD · right, and not for the reason I gave** · N. Sabbagh · 6 March',
  '**This line is going into the February note and not into a new one, because the claim it corrects is in the February note.** ⚠ **The field went into the release because a slot opened on 11 December, and not because of anything I wrote.**',
  '**What I claimed, in writing, on 3 December.** That conceding the October release and asking for February in the same sentence **had produced an answer in two hours** where four separate requests had produced nothing. **The answer did come back in two hours and I have the message.**',
  '**What actually happened, which I found out on 2 March.** A regulatory item was withdrawn from the February release on **11 December.** A slot opened. ⚠ **The specification for the promise field had been written since 14 November, so it was the only thing in the drawer that could be dropped into a slot at short notice.** **It was mine because it was ready, not because I had conceded anything.**',
  '**Why I am writing this down rather than keeping the credit.** Because the version I believed **tells me to concede at the start of every request**, and I should have gone on doing that for a year on one success. ⚠ **A success with the wrong reason behind it is more expensive than a failure**, and nobody would have corrected me: **nobody argues with a field that is in.**',
  '**What the real mechanism predicts, which is the part worth having.** **The next thing with a written specification gets the next slot, whoever asks.** ⚠ **So I have written the specification for the second field and asked nobody for anything.** **If a slot opens in May, it is the only thing in the drawer again.**',
  '**And what I am not withdrawing.** The concession itself. ⚠ **It cost me a figure I had been using and a position I had held since November, and both of those were worth paying** — **but it bought me a reply and not a release**, and I had been telling people it bought the release.',
  '**One sentence about the two hours.** The reply in two hours is still the fastest answer I have had from that office in three years. ⚠ **I do not know why. I have stopped claiming to.**',
]));
out.push(item('1', 'Why is the line going into the February note rather than a new one?'));
out.push(item('2', 'What actually opened the slot, and why was the promise field the thing that filled it?'));
out.push(item('3', 'What does the real mechanism predict, and what has she done about it?'));
out.push(writers([
  'A note that corrects your own reason: **the correction in the same document as the claim** → **what you claimed, with its date** → **what actually happened, with its date** → **why you are writing it down rather than keeping the credit** → **what the real mechanism predicts, and what you have done about it** → **what you are not withdrawing** → **and one sentence about what you still cannot explain**.',
  '⚠ **Put the correction where the claim is.** _This line goes into the February note, not into a new one._ **A correction in a different document from the claim is not a correction**: the claim travels on, **and in two years the file holds both and cannot tell which is later.**',
  '**Date both halves.** _Claimed 3 December; found out 2 March; the slot opened 11 December._ ⚠ **Three dates turn a confession into a record**, which is what makes the page useful to the reader of 11.1.',
  '**Say why you are not keeping the credit, in terms of cost.** _A success with the wrong reason behind it is more expensive than a failure, and nobody would have corrected me._ ⚠ **The sentence that justifies the whole page**, and it is about the next year and not about honesty.',
  '⚠ And **put the real mechanism to work in the same note**. _I have written the specification for the second field and asked nobody for anything._ **A page that finds a mechanism and does not use it has found nothing** — and the using is usually cheaper than the asking.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that corrects your own reason (80 words or more).'));
out.push(p('**______________ · right, and not for the reason I gave** · ______________ · ______________   **This line is going into ______________ and not into a new one, because the claim it corrects is there.** ⚠ **______________ because ______________, and not because of anything I ______________.**   **What I claimed, in writing, on ______________.** ______________.   **What actually happened, which I found out on ______________.** ______________. ⚠ **It was ______________ because ______________, not because ______________.**   **Why I am writing this down rather than keeping the credit.** Because ______________. ⚠ **A success with the wrong reason behind it is more expensive than a failure**, and ______________.   **What the real mechanism predicts.** ______________. ⚠ **So I have ______________.**   **And what I am not withdrawing.** ______________.   **One sentence about what I still cannot explain.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The correction placed in the same document as the claim',
  'Three dates: the claim, the real event, and the finding out',
  'The real mechanism, with one thing already done about it',
  'What is not being withdrawn, and what still cannot be explained',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their verdict and reason — _right about X, wrong about why_ — both flat, and the room says whether the second half sounded quieter.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the correction in the right document, the three dates, the real mechanism put to work, and what you cannot explain.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the correction in the same document as the claim, three dates, the real mechanism with one thing already done about it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read _right about X_ and then _wrong about why_, at the same volume, and do not drop the second.** ⚠ The room says which of the two halves it remembers. Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **I have a success and no mechanism; she has a mechanism and a failure.**'));
out.push(hw('Write the note (80+ words) **into the document where the original claim is.** ⚠ Then name **one other thing your mechanism predicts**, go and look, and write what you found in one line.'));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  Out by six'));
out.push(p('**Function:** pricing a prediction that was nearly right   ·   **Grammar:** _out by_ · _right about the direction, wrong about the size_ · _right about the thing, wrong about the date_   ·   **Pronunciation:** the miss stated as a figure'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take a prediction of yours that missed and say the verdict first — **wrong** — and then **the size of the miss as a figure.** _Out by six. Out by two months._ ⚠ Your partner says which kind of miss it was. **Nobody in the room will say _wrong_ first on a first attempt**, and the figure is useless without it.'));
out.push(board('It was more or less right, give or take.', 'Wrong. Out by six: twenty-six against fewer than twenty.'));
out.push(p('**b**  Which states the miss as a figure? **1** _It was nearly right._  **2** _Wrong. Out by six._  **3** _Roughly what I said, in the end._  **4** _Wrong. Out by two months: 1 March against the end of December._  **5** _I was not far off._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three kinds of near miss does Ms Huda name, and which does she say is worth most?   **A** two kinds; the second   **B** **right direction and wrong size · right thing and wrong date · right about everything except the thing itself** — and **right direction and wrong size is worth most**, because **the mechanism is right and only the coefficient is wrong**   **C** four kinds; none of them'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say to ask about a prediction that was right about the thing and wrong about the date?   **2** What does she say _nearly right_ costs the writer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  The size of the miss', [
  ['Ms Huda', 'Miss Mansour. The disputes. Verdict first.'],
  ['Yara', '**Wrong.** I said fewer than twenty in the February quarter and there were twenty-six.'],
  ['Ms Huda', '**And the size of the miss, as a figure.**'],
  ['Yara', '**Out by six**, on a prediction of under twenty from a starting figure of forty-one.'],
  ['Ms Huda', '**Which is the discipline of this cycle and it is two sentences: the verdict, then the figure.** ⚠ **_Nearly right_ is not a verdict and _out by six_ is not a defence** — **the first costs you the mechanism and the second keeps it**, and most of the room will try to use the first to avoid the second.'],
  ['Omar', 'How does _nearly right_ cost you the mechanism?'],
  ['Ms Huda', '**Because nobody argues with it and so nobody looks.** ⚠ _Nearly right_ ends the conversation; **_out by six_ starts one**: the next question is **_why six?_** — **and six, in Miss Mansour\'s case, has an answer that is worth more than the whole prediction.**'],
  ['Yara', 'It does. ⚠ **Four of the twenty-six were disputes about the second portion itself** — two portions arriving with different labels, which is a thing that did not exist before February. **I created four of my own twenty-six**, and I had not predicted that at all.'],
  ['Ms Huda', '**Which is the finding of the cycle, and it is the reason to state the miss as a figure.** ⚠ **Twenty-two of the twenty-six are the old kind and four are a new kind I made** — **so the mechanism worked better than the number says and the number is worse than it looks for a different reason.** **Neither of those is visible from _nearly right_.**'],
  ['Dima', 'And the three kinds of miss?'],
  ['Ms Huda', '**Right direction and wrong size**, which is worth most: **the mechanism is right and the coefficient is wrong**, and a coefficient can be measured. ⚠ **Right thing and wrong date**, which is worth something — **and the question there is always _what delayed it?_**, because the delay is usually the mechanism you missed. **And right about everything except the thing itself**, which is not a near miss at all.'],
  ['Jad', 'Give the third.'],
  ['Ms Huda', '⚠ _The questions will fall by half._ **They moved and did not fall.** **That is not a miss on the size; it is a miss on what was happening** — **and a writer who calls it _nearly right_ because the questions did go down in one place has learnt nothing at all.**'],
  ['Hiba', 'And the wrong date? Mine was two months late.'],
  ['Ms Huda', '**Then ask what delayed it, and do not accept _these things take time_.** ⚠ In Mrs Sabbagh\'s case **the answer was a slot opening on 11 December**, which is 12.3. **A delay with a date in it is a mechanism; a delay with _these things take time_ in it is a shrug**, and the shrug is the commonest answer in this cycle.'],
  ['Rim', 'Is a near miss ever worth more than a hit?'],
  ['Ms Huda', '⚠ **Nearly always, if the hit has no mechanism.** **Mrs Sabbagh was exactly right about the field and knows nothing; Miss Mansour was out by six and knows four new things**, and three of them are about how disputes are made. **Out by six with a reason beats exactly right with none.**'],
  ['Mazen', 'And aloud?'],
  ['Ms Huda', '🔊 **The verdict, a full stop, then the figure.** _Wrong. Out by six._ ⚠ A speaker who puts the figure first — _only six out, so really_ — **has given the room a defence before the verdict**, and nobody then asks why six.'],
]));
out.push(sp());
out.push(box('Language box – pricing the miss', [
  '**Two sentences, in this order: the verdict, then the figure.** _Wrong. Out by six._ ⚠ **_Nearly right_ is not a verdict and _out by six_ is not a defence** — **the first costs you the mechanism and the second keeps it.**',
  '**Why _nearly right_ costs the mechanism: nobody argues with it, so nobody looks.** ⚠ **_Out by six_ starts a conversation and the next question is _why six?_** — **and the six has an answer worth more than the prediction.**',
  '**Miss Mansour\'s six.** ⚠ **Four of the twenty-six were disputes about the second portion itself** — two portions with different labels, a thing that did not exist before February. **Twenty-two are the old kind and four are a new kind she made**: **the mechanism worked better than the number says, and the number is worse than it looks for a different reason.** **Neither is visible from _nearly right_.**',
  '**Three kinds of miss. 1 Right direction, wrong size** — worth most: **the mechanism is right and the coefficient is wrong**, and a coefficient can be measured. **2 Right thing, wrong date** — worth something, and the question is always **_what delayed it?_** ⚠ **3 Right about everything except the thing itself** — **not a near miss at all.**',
  '⚠ **The third is the one to refuse.** _The questions will fall by half_ — **they moved and did not fall.** **That is a miss on what was happening**, and a writer who calls it _nearly right_ because the questions fell in one place **has learnt nothing at all.**',
  '**On a wrong date, do not accept _these things take time_.** ⚠ **A delay with a date in it is a mechanism; a delay with _these things take time_ in it is a shrug** — and the shrug is the commonest answer in this cycle. Mrs Sabbagh\'s delay was **a slot opening on 11 December.**',
  '**And a near miss is nearly always worth more than a hit with no mechanism.** ⚠ **Exactly right about the field and knows nothing; out by six and knows four new things** — three of them about how disputes are made. **Out by six with a reason beats exactly right with none.**',
  '**One last thing to say about the figure, because it is the cheapest discipline in the unit.** ⚠ **Write _out by_ and then a number, in the same sentence as the verdict**, every time: _out by six · out by two months · out by a factor of about three._ **A miss with a number on it can be compared with next year\'s miss**, and a miss called _nearly_ cannot be compared with anything.',
  '**Pronunciation.** 🔊 **Track 12.8** **The verdict, a full stop, then the figure.** _Wrong. Out by six._ ⚠ A speaker who puts the figure first — _only six out, so really_ — **has given the room a defence before the verdict**, and nobody then asks why six.',
  '**Practise:** Verdict, then the miss as a figure, then the kind. **1** out by a number  **2** out by a period  **3** out by a factor  **4** one that is not a near miss at all  **5** one where the delay has a date in it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the prediction and the outcome from the card. B gives **the verdict, a full stop, and the miss as a figure**, and then names the kind. B then asks **why that much?** or, for a date, **what delayed it?** ⚠ **Two rows on each card are not near misses at all**; B must refuse them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(prediction and outcome)_ I said __________; __________ happened.'],
  ['B', '**Wrong.** Out by __________.'],
  ['B', 'Kind: **direction and size / thing and date / not a near miss.**'],
  ['B', 'Why that much? / What delayed it? __________.'],
]));
out.push(table(['Card A – prediction and outcome', 'Card B – prediction and outcome'], [
  ['_Fewer than twenty disputes; twenty-six._', '_The field by the end of December; 1 March._'],
  ['_⚠ The questions would fall by half; they moved and did not fall._', '_⚠ The seal trouble would stop; the batch was never the trouble._'],
  ['_Three hundred man-hours; about fourteen._', '_The date field blank on half the forms; blank on a quarter._'],
  ['_The code within a month; twelve days._', '_The second pad by the autumn; not at all._'],
  ['_⚠ Record-keeping would get better; it did, in one office._', '_⚠ The gate would cause trouble; it did, about the walking._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the verdict, the figure and the kind for each of the ten. Then the count: **four are direction-and-size, two are thing-and-date, and four are not near misses at all** — the rows marked ⚠. ⚠ And the finding: **three of the four refusals were offered as near misses by the pair reading them**, which is the move the cycle exists to stop.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the verdict and the figure** for your own missed prediction, in that order and in two sentences. ⚠ Then answer **why that much?** in one line. **If your answer is _these things take time_, cross it out and write _I do not know_**, which is honest and is the start of looking.'));
out.push(p('**b**  Swap. Your partner names the kind of miss and then asks the harder question: ⚠ **did your own action create any part of the miss?** **In Miss Mansour\'s case four of twenty-six were hers**, and the question finds something in about a third of the room.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Yara gave the verdict first: wrong — she said fewer than twenty disputes in the February quarter and there were twenty-six. And the size of the miss as a figure: out by six, on a prediction of under twenty from a starting figure of forty-one. Which is the discipline of the cycle and it is two sentences, the verdict and then the figure: nearly right is not a verdict and out by six is not a defence, because the first costs you the mechanism and the second keeps it. Omar asked how nearly right costs you the mechanism, and because nobody argues with it and so nobody looks: nearly right ends the conversation, and out by six starts one, since the next question is why six — and six, in her case, has an answer worth more than the whole prediction. And it does: four of the twenty-six were disputes about the second portion itself, two portions arriving with different labels, which is a thing that did not exist before February. She created four of her own twenty-six and had not predicted that at all. Which is the finding of the cycle and the reason to state the miss as a figure: twenty-two of the twenty-six are the old kind and four are a new kind she made, so the mechanism worked better than the number says and the number is worse than it looks for a different reason — and neither of those is visible from nearly right. Dima asked for the three kinds of miss: right direction and wrong size, which is worth most because the mechanism is right and only the coefficient is wrong; right thing and wrong date, which is worth something, and where the question is always what delayed it; and right about everything except the thing itself, which is not a near miss at all. Jad asked for the third, and the questions will fall by half is it: they moved and did not fall, which is a miss on what was happening. Hiba asked about her own wrong date, and then ask what delayed it and do not accept these things take time, because a delay with a date in it is a mechanism and a delay with these things take time in it is a shrug. And Rim asked whether a near miss is ever worth more than a hit: nearly always, if the hit has no mechanism._'));
out.push(p('**Listener task:** write your partner\'s verdict, figure and kind, and whether any part of the miss was theirs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Yara writes about her own miss. Answer the questions.'));
out.push(model([
  '**TWENTY-SIX AGAINST UNDER TWENTY · out by six** · Y. Mansour · 8 March',
  '**Wrong. Out by six.** ⚠ I predicted in my paper of 12 December that disputed results would fall below twenty in the February quarter if second portions were sent. **They fell from forty-one to twenty-six.**',
  '**Why I am not calling it nearly right.** Because nobody would have argued with that and so nobody would have looked. ⚠ **_Out by six_ asks a question and _nearly right_ ends one** — and the question **why six?** has an answer I should not otherwise have found.',
  '**Why six, and four of it is mine.** ⚠ **Four of the twenty-six were disputes about the second portion itself** — two portions arriving with different labels on the same day, which is a kind of dispute **that did not exist before February.** **I made four of my own twenty-six.**',
  '**Which means the mechanism did better than the number says.** Twenty-two of the twenty-six are the old kind: forty-one down to twenty-two is **a fall of nineteen**, against the fall of twenty-one I predicted. ⚠ **The coefficient was nearly right and the model was incomplete** — **it had no term in it for the disputes the remedy itself creates.**',
  '**What I am doing about the four.** **Both portions are now drawn at the same time by the same person and initialled in the same minute** — one line in the sampling instruction. ⚠ **If that does not remove them, the four are not a labelling problem and I shall have been wrong twice about the same six.**',
  '**And the prediction for next year, with the lesson in it.** ⚠ **Fewer than eighteen disputed results in the February quarter, of which no more than one about a second portion.** **Two figures and not one**, because one figure hid four disputes of my own making for three months.',
  '**One sentence about the paper of 12 December.** It said _the proposal has failed on its own figure_ if the disputes did not fall below twenty. ⚠ **They did not, so it has, and I said I would say so in writing.** **This is the writing, and the proposal continues** — **because a thing can fail on its own figure and still be the right thing, and saying both is the only honest way to keep it.**',
]));
out.push(item('1', 'What are the two sentences he or she begins with, and what were the two figures?'));
out.push(item('2', 'What are the four disputes, and why do they change what the number means?'));
out.push(item('3', 'What is the prediction for next year, and why does it have two figures in it?'));
out.push(writers([
  'A note that prices your own miss: **the verdict and the figure, in two sentences, first** → **why you are not calling it nearly right** → **why that much, and how much of it is yours** → **what the miss means for the mechanism** → **what you are doing about the part that is yours** → **next year\'s prediction with the lesson built into it** → **and the falsifier you set yourself, honoured**.',
  '⚠ **Open on two sentences and nothing else.** _Wrong. Out by six._ **Four words**, and they do more than a paragraph of explanation: **a reader who meets the verdict and the figure first will read the rest for the mechanism**, which is what the page is for.',
  '**Separate your own part of the miss and count it.** _Four of the twenty-six were disputes about the second portion._ ⚠ **A remedy that creates some of the problems it counts is the commonest reason a good mechanism looks weak**, and counting is the only way to see it.',
  '**Then re-state the arithmetic without your own four.** _Forty-one to twenty-two is a fall of nineteen, against twenty-one predicted._ ⚠ **The coefficient was nearly right and the model was incomplete** — and **_incomplete_ is a different verdict from _wrong_ and is the one that tells you what to add.**',
  '⚠ And **build the lesson into next year\'s prediction as a second figure.** _Fewer than eighteen, of which no more than one about a second portion._ **One figure hid four disputes of her own making for three months**, and **two figures cannot.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note that prices your own miss (80 words or more).'));
out.push(p('**______________ · out by ______________** · ______________ · ______________   **Wrong. Out by ______________.** ⚠ I predicted in ______________ of ______________ that ______________. **______________.**   **Why I am not calling it nearly right.** ______________. ⚠ **_Out by _______ asks a question and _nearly right_ ends one.**   **Why ______, and ______ of it is mine.** ⚠ ______________. **I made ______ of my own ______.**   **Which means the mechanism did better than the number says.** ______________. ⚠ **The coefficient was ______________ and the model was ______________.**   **What I am doing about the ______.** ______________. ⚠ **If it does not work, ______________.**   **And the prediction for next year.** ⚠ ______________. **Two figures and not one**, because ______________.   **One sentence about ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The verdict and the figure, in two sentences, before anything else',
  'The part of the miss that is the writer\'s own, counted',
  'The arithmetic restated without that part',
  'Next year\'s prediction with a second figure carrying the lesson',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their two opening sentences only, and the room asks **why that much?**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: verdict and figure first, your own share of the miss counted, the arithmetic restated, and next year\'s two figures.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the verdict before the figure, the writer\'s own share of the miss counted, next year\'s prediction carrying a second figure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say the verdict, stop, and then the figure.** ⚠ The room listens for the figure arriving first — _only six out, so really_ — which is a defence before a verdict. Then the sentence the cycle ends on, which is Ms Huda\'s answer to anybody who would rather have been right: **out by six with a reason beats exactly right with none.**'));
out.push(hw('Write the note (80+ words). ⚠ Then ask the harder question of your own miss: **did your own action create any part of it?** **Count it if it did** — in about a third of cases it has.'));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  The year I was wrong about the main thing'));
out.push(p('**Function:** writing the account of a year in which you were wrong about the main thing   ·   **Grammar:** the main thing first, with no protection · the figures with their bases · the three readers   ·   **Pronunciation:** the first sentence read without protection'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say **the main thing you were wrong about this year** in one sentence, **with nothing in front of it.** ⚠ Your partner listens for a protection — _in fairness_, _with hindsight_, _I think most people would have_, _to be honest_ — **and says the first one they hear.** **Almost nobody manages the sentence clean the first time.**'));
out.push(board('With hindsight, perhaps I was focusing on the wrong area.', 'I spent the year arguing about the schedule when the question was the letter.'));
out.push(p('**b**  Which sentence has no protection in it? **1** _In fairness, the information available at the time was limited._  **2** _I spent the year arguing about the schedule when the question was the letter._  **3** _With hindsight, one might have approached it differently._  **4** _I was wrong about the main thing, and I was wrong about it in writing, three times._  **5** _To be honest, nobody really knew._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was Mr Barghouti wrong about, and what does Ms Huda say the page must have in it?   **A** a figure; an apology   **B** **he spent the year on the bracket when the thing that would have answered the letters was one sentence in the refusal** — and the page must have **the main thing first with no protection, the figures with their bases, and all three readers of 11.1**, because the page is read by the writer next year, by whoever lets them try again, and by the file   **C** a date; three apologies'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about the thing the writer was right about?   **2** What test does Mrs Khoury give for whether the page is honest?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  The main thing, with nothing in front of it', [
  ['Ms Huda', 'Mr Barghouti. One sentence. The main thing you were wrong about this year, with nothing in front of it.'],
  ['Adnan', '**I spent the year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says.**'],
  ['Ms Huda', '**No protection in it. Say the figure.**'],
  ['Adnan', 'Of the **ninety-one** letters we answered last quarter, **sixty-two** asked what the paragraph meant. ⚠ **Four asked which office had applied it.** **I have spent a year on the four.**'],
  ['Ms Huda', '**And what did the year cost?**'],
  ['Adnan', 'Three written requests, three refusals, about eleven months, and ⚠ **a head of section who now believes I am interested in attributing blame to offices** — which I am not, and which I cannot now easily unsay.'],
  ['Omar', 'How did you find out?'],
  ['Adnan', '**I counted the letters.** 10.1, in February. ⚠ **Nobody had ever counted what the letters asked** — we had counted how many there were, for nine years. **The count took about forty minutes.**'],
  ['Ms Huda', '**Which is the shape of the page: the main thing with nothing in front of it, the figures with their bases, and what the year cost.** ⚠ **And then the three readers**, because this page has all three: **you next year, whoever lets you try again, and the file.** **Most accounts of a year are written for the fourth reader of 11.5.**'],
  ['Dima', 'And there is one more thing it has to have, and it goes last.'],
  ['Ms Huda', 'Say it.'],
  ['Dima', '⚠ **The thing you were right about, last and short.** **A page that ends on what you got right has retracted itself** — the reader puts it down remembering the credit. **One sentence, at the end, and no more.**'],
  ['Ms Huda', '**And it must be there**, which is the part students get wrong in the other direction. ⚠ **A page with nothing right in it is not honest, it is dramatic** — and a reader who finds a year with no successes in it **stops believing the figures.**'],
  ['Jad', 'What about the protections? They are hard to leave out.'],
  ['Ms Huda', '**They are, and there is a list: _in fairness_ · _with hindsight_ · _to be honest_ · _I think most people would have_ · _the information available at the time_.** ⚠ **Every one of them is addressed to a reader who is about to judge you**, and the page is not for that reader. **Cross them out and read it again; nothing is lost.**'],
  ['Hiba', 'Does the figure have to be yours?'],
  ['Ms Huda', '**It has to have a base, a period and a counter, which is 10.1** — ⚠ **and in a page about your own year the counter is almost always you**, which is the strongest form. _Sixty-two of ninety-one, my count, February._'],
  ['Mazen', 'And Mrs Khoury\'s test?'],
  ['Dima', '⚠ **Can the person who paid for the mistake read this page and find themselves in it?** **The head of section paid eleven months of correspondence**; if he reads it and is not there, **the page is about the writer and not about the year.**'],
  ['Ms Huda', '🔊 **Read the first sentence once, flat, and do not clear your throat first.** ⚠ **The throat-clearing is the protection arriving in the delivery** — and the room hears it as the sentence being withdrawn before it is finished.'],
]));
out.push(sp());
out.push(box('Language box – the account of a year', [
  '**The shape, and every part of it is from this book.** **The main thing first, in one sentence, with nothing in front of it** → **what you did on the strength of it, with the time it cost** → **what was true instead, with the figures** _(10.1)_ → **how you found out** → **what it cost somebody else** → **what you have changed** → ⚠ **and the thing you were right about, last and short.**',
  '**The protections, and they are a list: _in fairness_ · _with hindsight_ · _to be honest_ · _I think most people would have_ · _the information available at the time_.** ⚠ **Every one is addressed to a reader who is about to judge you, and the page is not for that reader.** **Cross them out and read it again; nothing is lost.**',
  '**The figures carry a base, a period and a counter**, and in a page about your own year **the counter is almost always you**, which is the strongest form: _sixty-two of ninety-one, my count, February._',
  '**Mr Barghouti\'s figures are the model.** ⚠ **Of ninety-one letters, sixty-two asked what the paragraph meant and four asked which office had applied it. He spent a year on the four.** **Nobody had ever counted what the letters asked** — only how many there were, for nine years — **and the count took about forty minutes.**',
  '**The three readers of 11.1 are all here.** **You next year** _(the actor)_; **whoever has to let you try again** _(the approver)_; **and the file** _(the record)_. ⚠ **Most accounts of a year are written for the fourth reader of 11.5** — the writer — **and the tell is the same: the history in the first paragraph.**',
  '**The thing you were right about goes last and is short.** ⚠ **A page that ends on what you got right has retracted itself.** **And it must be there**: **a page with nothing right in it is not honest, it is dramatic**, and a reader who finds a year with no successes **stops believing the figures.**',
  '**Mrs Khoury\'s test, which is the one to use on your own page: _can the person who paid for the mistake read this and find themselves in it?_** ⚠ The head of section paid **eleven months of correspondence**; if he reads the page and is not in it, **the page is about the writer and not about the year.**',
  '**And one cost to name whatever else you leave out: what the year did to what people now think you want.** ⚠ Mr Barghouti\'s head of section **believes he is interested in attributing blame to offices**, which he is not **and cannot now easily unsay.** **A wrong object, argued for a year, leaves a reputation behind it** — and that is the most expensive line on the page.',
  '**Pronunciation.** 🔊 **Track 12.10** **Read the first sentence once, flat, and do not clear your throat first.** ⚠ **The throat-clearing is the protection arriving in the delivery**, and the room hears it as the sentence being withdrawn before it is finished.',
  '**Practise:** The main thing, in one sentence, with nothing in front of it. **1** about an object  **2** about a person  **3** about a figure  **4** about a date  **5** one where the cost fell on somebody else',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A says **the main thing** from the card, **in one sentence with no protection.** B listens for a protection and names the first one heard; if there is none, B asks for **the figure.** A gives it with a base, a period and a counter. ⚠ **B then applies Mrs Khoury\'s test aloud: can the person who paid find themselves in it?** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the main thing, no protection)_ __________.'],
  ['B', 'Protection heard: __________ / **none.** The figure?'],
  ['A', '__________ of __________, my count, __________.'],
  ['B', '**The person who paid is __________.** Are they in it? **Yes / no.**'],
]));
out.push(table(['Card A – the main thing', 'Card B – the main thing'], [
  ['_I spent the year on the bracket when the letters were asking what the paragraph meant._', '_I spent five months on the batch when the question was who checks the seal._'],
  ['_I quoted a figure for two years that I had never counted._', '_I gave the small size of my own figure in three meetings without noticing._'],
  ['_⚠ I thought the concession had produced the release; a slot had opened._', '_⚠ I predicted the questions would fall; they moved._'],
  ['_I wrote for the approver and sent it to the man with the stamp._', '_I wrote eight pages for myself and sent them to the man with the display._'],
  ['_I said the second pad would be in use by the autumn and never asked the eleven customers._', '_I compared two groups assessed in two different ways for a year._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the protection heard in each of the ten, and whether the person who paid is in it. Then the count: **a protection arrives in seven or eight of the ten**, and _with hindsight_ is the commonest. ⚠ And the person who paid is in **three of the ten** — the two rows marked ⚠ being the ones where the cost fell on the writer alone.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own main thing in **one sentence with no protection**, and then the figure beneath it with its base, period and counter. ⚠ Then write the list of five protections in the margin **and cross out any that got in.** **Count them.** Most pages have two.'));
out.push(p('**b**  Swap, and do the test: **name the person who paid for your partner\'s mistake and look for them on the page.** ⚠ Then both of you write **the one thing you were right about, in one sentence**, and put it at the bottom where it belongs.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan gave the main thing in one sentence with nothing in front of it: he spent the year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says. Then the figure: of the ninety-one letters they answered last quarter, sixty-two asked what the paragraph meant and four asked which office had applied it — and he has spent a year on the four. Asked what the year cost, he said three written requests, three refusals, about eleven months, and a head of section who now believes he is interested in attributing blame to offices, which he is not and cannot now easily unsay. Omar asked how he found out, and he counted the letters — 10.1, in February: nobody had ever counted what the letters asked, only how many there were, for nine years, and the count took about forty minutes. Which is the shape of the page: the main thing with nothing in front of it, the figures with their bases, and what the year cost — and then the three readers, because this page has all three: you next year, whoever lets you try again, and the file. Most accounts of a year are written for the fourth reader of 11.5. Dima said there is one more thing it has to have and it goes last: the thing you were right about, last and short, because a page that ends on what you got right has retracted itself. And it must be there, which is the part students get wrong in the other direction, because a page with nothing right in it is not honest but dramatic, and a reader who finds a year with no successes in it stops believing the figures. Jad asked about the protections, and there is a list: in fairness, with hindsight, to be honest, I think most people would have, the information available at the time — every one addressed to a reader who is about to judge you, and the page is not for that reader. And Mrs Khoury gave the test: can the person who paid for the mistake read this page and find themselves in it?_'));
out.push(p('**Listener task:** write your partner\'s main thing, the protections you heard, and whether the person who paid is on the page.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Adnan writes about his year. ⚠ **This is the longest and hardest page in this book**, and it uses every unit in it. Answer the questions.'));
out.push(model([
  '**THE YEAR I SPENT ON THE WRONG FOUR LETTERS** · A. Barghouti · 10 March',
  '**I spent this year asking for the originating office to be printed on refusals, and the thing that would have answered the letters was one sentence saying what the paragraph says.**',
  '**What I did on the strength of it.** Three written requests — **February, July and December** — three refusals in the same four words, and about **eleven months** of my own time in a section of three people. ⚠ **I also spent 9.1 on it**, conceding the staffing objection at full strength in a page I am still pleased with. **The page was good and the object was wrong.**',
  '**What was true instead, with the figures.** Of the **ninety-one** letters this office answered last quarter — my count, off the file copies, in February — **sixty-two asked what the paragraph meant.** **Four asked which office had applied it.** ⚠ **I have spent a year on the four.**',
  '**How I found out, and it took about forty minutes.** I counted what the letters asked. **Nobody had ever done that.** We have counted how many letters there were, every quarter, for nine years, ⚠ **and nobody had counted what was in them** — which is 10.1, and I should have done it in February of last year instead of February of this one.',
  '**What it cost somebody else.** The head of section read three requests about printing office names and now believes **I am interested in attributing blame between offices.** ⚠ **I am not, and I cannot easily unsay it**: the only evidence of what I want is a year of letters asking for the wrong thing. **That is the most expensive line on this page and it is not a figure.**',
  '**What I have changed.** The refusal template now carries **one sentence**: _this paragraph requires that…_, in the words of the schedule, typed by whoever signs. **About twenty seconds a refusal.** It was agreed in eleven days by the same head of section who had refused the bracket three times. ⚠ **I have not asked for the bracket again** and I shall not: **four letters a quarter is not nothing, and it is not this.**',
  '**And the one thing I was right about.** ⚠ **The schedule has been applied about four hundred times since 2019 and nobody can see which paragraph any decision rests on.** **That is still true, and it is still worth a year — somebody else\'s, and not mine, and not next.**',
]));
out.push(item('1', 'What was he wrong about, and how many requests did he make?'));
out.push(item('2', 'What are the three figures from the ninety-one letters, and how long did the count take?'));
out.push(item('3', 'What does he call the most expensive line on the page, and what is the one thing he was right about?'));
out.push(writers([
  'The account of a year: **the main thing, one sentence, no protection** → **what you did, with the time** → **what was true instead, with the figures and their counter** → **how you found out, with how long it took** → **what it cost somebody else** → **what you have changed** → **and the one thing you were right about, last and short**.',
  '⚠ **Let the first sentence stand alone as its own paragraph.** **One sentence, no protection, white space after.** A reader who meets it with the next sentence attached reads one claim; **standing alone it is a statement, and the page must earn its way out of it.**',
  '**Say when good work was on the wrong object.** _I spent 9.1 on it, conceding the staffing objection in a page I am still pleased with. The page was good and the object was wrong._ ⚠ **That distinction is the most useful thing such a page can contain**: it stops the reader, and the writer, concluding that the method failed.',
  '**Put a time on the finding out.** _About forty minutes._ ⚠ **A year on the wrong thing and forty minutes to find out** is the whole argument for counting, and needs no advice after it: **the two figures make it.**',
  '⚠ And **name the cost that is not a figure.** _He now believes I am interested in attributing blame, and I cannot unsay it._ **A wrong object argued for a year leaves a reputation behind it** — **and a page that counts the months and not that has counted the cheap part.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the account of your year (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **I spent this year ______________, and ______________.**   **What I did on the strength of it.** ______________ — ______________ — and about ______________. ⚠ ______________.   **What was true instead, with the figures.** Of the ______ ______________ — my count, ______________, in ______________ — **______ ______________.** **______ ______________.** ⚠ **I have spent ______________ on the ______.**   **How I found out, and it took ______________.** ______________. ⚠ ______________.   **What it cost somebody else.** ______________. ⚠ **That is the most expensive line on this page and it is not a figure.**   **What I have changed.** ______________. ⚠ ______________.   **And the one thing I was right about.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The main thing in one sentence, alone, with no protection',
  'The figures with a base, a period and a counter',
  'A time on the finding out, beside the time spent being wrong',
  'The cost that is not a figure, and the one thing right, last and short',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first sentence only, once, flat, and the room says whether it heard a protection.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full account (180 words or more), to the shape in the writer\'s box: the main thing alone and unprotected, the figures with their counter, the two times, the cost to somebody else, and the one thing right at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no protection in the first sentence, the figures with a base and a counter, the cost that is not a figure, and the one thing right placed last.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the first sentence once, flat, and do not clear your throat first.** ⚠ The room listens for the throat-clearing, which is the protection arriving in the delivery. Then the sentence the cycle ends on, which is Mr Barghouti\'s and is the hardest line in the book: **the page was good and the object was wrong.**'));
out.push(hw('Write the account (180+ words) and keep it. ⚠ Then do Mrs Khoury\'s test: **give it to the person who paid**, if you can, and ask whether they are in it. **If you cannot, name them at the top of your own copy.**'));

// ===================== 12.6 =====================
out.push(pb());
out.push(h2('12.6  The letter that reports a year'));
out.push(p('**Function:** writing the letter that reports a year to one reader outside   ·   **Grammar:** the reason for writing in the first line · three things, each with a figure · one ask, or none   ·   **Pronunciation:** the letter read as if to the person'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say **the reason for writing** in one sentence, as the first line of a letter — **and not _I hope you are well._** ⚠ Then say **the three things**, each with a figure, and then say whether you are asking for anything. **A letter at the end of a year with no ask in it is read; a letter with an ask is filed.**'));
out.push(board('I hope this finds you well. I thought I would write and update you.', 'I am writing because the arrangement we made in February has now run for a quarter.'));
out.push(p('**b**  Which is a first line? **1** _I hope you are keeping well._  **2** _I am writing because the arrangement we made in February has now run for a quarter._  **3** _I thought I would drop you a line._  **4** _I am writing to tell you what the code did to our refusals, and to ask for nothing._  **5** _It has been some time since we were in touch._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say makes a letter different from the article and the report, and what does Mrs Shaaban say about the no-ask?   **A** its length; that it is rude   **B** **it has one reader and that reader has a relationship with you** — and Rim says **a letter at the end of a year with no ask in it is read**, and the sentence _I am asking for nothing_ **is the sentence the whole letter turns on**   **C** its register; that it is compulsory'));
out.push(p('**b**  Listen again. **1** How many things does Ms Huda say a letter reporting a year should carry?   **2** What does she say about the register in the examination task?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  One reader, three things, no ask', [
  ['Ms Huda', 'Mrs Shaaban. The letter to the distributor at the end of the year. The first line.'],
  ['Rim', '_I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures._'],
  ['Ms Huda', '**And not _I hope you are well_, which is where most of the room will start.** ⚠ **A letter has one reader and that reader has a relationship with you**, and that is what makes it different from the article and the report: **the article is for somebody who did not ask, the report is for a file, and the letter is for a person who will remember what you wrote last time.**'],
  ['Omar', 'So how many things does it carry?'],
  ['Ms Huda', '**Three, each with a figure.** ⚠ **A letter reporting a year as a list of eight things has reported nothing**: the reader remembers the first and the last. **Three things, three figures, and the one you want remembered goes last.**'],
  ['Rim', 'Mine are the code, the date stamp and the nine.'],
  ['Ms Huda', 'Give them.'],
  ['Rim', '**A code on every slip since 10 February — about forty slips.** **The date stamp on our side, on one consignment in fourteen.** ⚠ **And nine of our forty were ours, which I told you in December and which is still the figure.**'],
  ['Dima', 'And the ask?'],
  ['Rim', '**There is none, and I have said so in the letter.** ⚠ _I am asking for nothing._ **Four words**, and they are the sentence the whole letter turns on: **a letter at the end of a year with no ask in it is read, and a letter with an ask is filed until somebody has time.**'],
  ['Ms Huda', '**Which is worth saying in those words, because it is counter-intuitive.** ⚠ **The letter with no ask is the one that produces the next conversation** — and in Mrs Shaaban\'s case **the distributor wrote back in four days proposing something she had not thought of**, which is the only thing in this unit that nobody planned.'],
  ['Jad', 'And when there is an ask?'],
  ['Ms Huda', '**One, at the end, and named as the only one** — which is 11.4. ⚠ **But in a letter reporting a year, consider having none at all**: **the year is the content**, and an ask converts the letter into a request with a year attached to it. **The reader can tell the difference in four seconds.**'],
  ['Hiba', 'And the register in the examination?'],
  ['Ms Huda', '**The question tells you, and it is the first thing to find.** ⚠ **An email to a friend, a letter to a manager, a reply to somebody who has written to you** — **each sets the register before you have written a word**, and the commonest failure in the paper is a letter in the wrong one. **Contractions in an email to somebody you know; none in a letter to an office.**'],
  ['Mazen', 'And the requirements?'],
  ['Ms Huda', '**In the question, as always, and they are the content mark.** ⚠ **Underline them and tick them off**: a letter answering three of four named points **cannot reach the top band however good the English is.** **A hundred and forty to a hundred and ninety words asked; a hundred and eighty to two hundred and twenty written in this book.**'],
  ['Lubna', 'And aloud?'],
  ['Ms Huda', '🔊 **Read it as if to the person, by name, and stop where you would stop if they were there.** ⚠ **A letter that cannot be read aloud to its reader without embarrassment has the wrong register** — and that is a faster test than any rule about contractions.'],
]));
out.push(sp());
out.push(box('Language box – the letter, and this unit\'s two declared sets', [
  '**A letter has one reader, and that reader has a relationship with you.** ⚠ **The article is for somebody who did not ask; the report is for a file; the letter is for a person who will remember what you wrote last time.** **That is the whole difference, and it decides every sentence.**',
  '**The first line is the reason for writing.** _I am writing because the arrangement we made in February has now run for a quarter._ ⚠ **Not _I hope you are well_**, which tells the reader nothing and is where most of the room starts.',
  '**Three things, each with a figure, and the one you want remembered last.** ⚠ **A letter reporting a year as a list of eight things has reported nothing**: the reader remembers the first and the last.',
  '**And then the move of this cycle: consider having no ask at all, and say so.** ⚠ _I am asking for nothing._ **Four words.** **A letter at the end of a year with no ask in it is read; a letter with an ask is filed until somebody has time** — and in Mrs Shaaban\'s case **the distributor wrote back in four days proposing something she had not thought of.**',
  '**Why: the year is the content**, and an ask **converts the letter into a request with a year attached to it.** ⚠ **The reader can tell the difference in four seconds.** When there must be an ask: **one, at the end, named as the only one** _(11.4)_.',
  '**The examination register is set by the question and it is the first thing to find.** ⚠ **An email to a friend · a letter to a manager · a reply to somebody who has written to you** — **each sets the register before you have written a word**, and a letter in the wrong one is the commonest failure in the paper. **Contractions in an email to somebody you know; none in a letter to an office.**',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _pan out · look back on · set in · die down · wear off · catch on · take off · fall through · come off · shape up · play out · ride out_.',
  '**This unit\'s word-formation set** _(the unit check in 12.7 is built on it)_: _expect → **expectation** · foresee → **foresight** · confident → **confidence** · anticipate → **anticipation** · revise → **revision** · optimistic → **optimism** · prove → **proof** · surprise → **surprising** · inevitable → **inevitability**._',
  '**Pronunciation.** 🔊 **Track 12.12** **Read it as if to the person, by name, and stop where you would stop if they were there.** ⚠ **A letter that cannot be read aloud to its reader without embarrassment has the wrong register** — a faster test than any rule about contractions.',
  '**Practise:** A first line that is the reason for writing, then three things with figures. **1** an arrangement that has run a quarter  **2** a year of refusals  **3** something that has fallen through  **4** something that has caught on  **5** a letter with no ask in it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **with a watch**. A has the reader and the subject from the card. B gives, in forty seconds: **the first line** _(the reason for writing)_, **three things with figures**, and **the ask or the no-ask.** A then says what register the reader sets. ⚠ **B must not open with _I hope you are well_**; A listens for it. Swap cards.'));
out.push(dlg(null, [
  ['B', '_(first line)_ I am writing because __________.'],
  ['B', '_(three things)_ __________. __________. __________.'],
  ['B', '_(ask or no ask)_ I am asking for __________ / **nothing.**'],
  ['A', '_(time: ______ sec)_ The register is **__________**, because the reader is __________.'],
]));
out.push(table(['Card A – the reader and the subject', 'Card B – the reader and the subject'], [
  ['_The distributor; the February arrangement after a quarter_', '_The directorate; a year of refusal letters_'],
  ['_A colleague in another depot; the date stamp_', '_A former trainee; the observed lesson_'],
  ['_The magazine that printed your review; what happened after_', '_The forum editors; the thread after a quarter_'],
  ['_The matron; the expected admissions after a month_', '_The clerk of works; the second survey_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** the first line, the three figures, and the ask for each of the eight. Then the count: **_I hope you are well_ arrives in five or six of the eight**, and **the third thing has no figure in about half.** ⚠ And the finding to name: **only one or two pairs choose the no-ask**, and it is the one the class should hear read out.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the first line and the three things for the letter you will use in 12.7, **each with a figure**, and then write **the ask or the no-ask.** ⚠ Then count the words: **three things with figures is about ninety words**, and the whole letter is 180–220.'));
out.push(p('**b**  Swap, and read your partner\'s letter aloud **as if to the person, by name.** ⚠ **Stop where you would stop if they were there.** The places you stop are the places where the register is wrong, **and there is no faster way to find them.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim gave the first line of her letter to the distributor: I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures. And not I hope you are well, which is where most of the room will start — because a letter has one reader and that reader has a relationship with you, and that is what makes it different from the article and the report: the article is for somebody who did not ask, the report is for a file, and the letter is for a person who will remember what you wrote last time. Omar asked how many things it carries, and three, each with a figure, because a letter reporting a year as a list of eight things has reported nothing: the reader remembers the first and the last, so three things, three figures, and the one you want remembered goes last. Hers are a code on every slip since 10 February, about forty slips; the date stamp on their own side, on one consignment in fourteen; and nine of their forty were theirs, which she told him in December and which is still the figure. Dima asked about the ask, and there is none and she has said so in the letter: I am asking for nothing — four words, and they are the sentence the whole letter turns on, because a letter at the end of a year with no ask in it is read and a letter with an ask is filed until somebody has time. Which is worth saying in those words because it is counter-intuitive: the letter with no ask is the one that produces the next conversation, and in her case the distributor wrote back in four days proposing something she had not thought of. Jad asked about when there is an ask, and one, at the end, named as the only one — but in a letter reporting a year, consider having none at all, because the year is the content and an ask converts the letter into a request with a year attached to it. And Hiba asked about the register in the examination, and the question tells you and it is the first thing to find._'));
out.push(p('**Listener task:** write your partner\'s first line, three figures and ask, and where you stopped reading it aloud.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Rim sends at the end of the year. Answer the questions.'));
out.push(model([
  '**TO THE DISTRIBUTOR, AL-AMIN DEPOT** · R. Shaaban · 12 March',
  '**Dear Mr Kabbani,**',
  '**I am writing because the arrangement we made in February has now run for a quarter, and I thought you would want the figures before anybody asks either of us for them.**',
  '**The code.** A refusal code has been on **every slip since 10 February** — **about forty slips**, and I have not had to telephone your office about a single one of them. ⚠ **In the eleven months before that I telephoned about nine.**',
  '**The date stamp.** On our side, on **one consignment in fourteen** — about seventeen minutes a year, which is less than I said it would be when I offered it. **It has caught on at the gate without anybody being reminded**, which I did not expect.',
  '**And the nine, which is the figure I want you to remember.** ⚠ **Nine of our forty consignments last quarter left here with the paperwork incomplete.** That is the figure I gave you in December and **it has not moved**: the code tells me which nine, and knowing which nine has not yet made them eight. **I shall tell you in June whether it has.**',
  '**I am asking for nothing.** ⚠ Not a change to the policy, not an explanation of anything, **and not an answer to this letter.** **The arrangement is working and this is a letter about a working arrangement**, which I think is rarer in both our offices than it ought to be.',
  '**And one thing that has not come off, so that this letter is not only the good news.** The two of us agreed in February that your end would tell me when a code was entered by somebody other than the man who signed the slip. ⚠ **That has not happened once in forty slips**, and I do not know whether it has not happened or has not been recorded. **I am not asking you to find out** — I mention it because **if June goes the same way I shall want to know, and I would rather have said so now than discovered it then.**',
  '**One thing I should say about the five months before February.** I was arguing about whether the batch was faulty and you were telling me it was not. **We were both right and we were arguing about the wrong object** — ⚠ **and I had written in September that I accepted the batch was not faulty, inside a bracket, in a third letter.** **Nobody reads a bracket in a third letter, and I shall not put anything there again.**',
  '**Yours sincerely, R. Shaaban**',
]));
out.push(item('1', 'What is the reason she gives for writing, and what three things does the letter carry?'));
out.push(item('2', 'Which figure does she want remembered, and what does she say about it?'));
out.push(item('3', 'What is she asking for, and what does she say about the five months before February?'));
out.push(writers([
  'A letter reporting a year: **the reason for writing, first** → **three things, each with a figure** → **the one you want remembered, named and last** → **the ask, or the no-ask, in four words** → **one thing about the part that went wrong** → **and nothing else**.',
  '⚠ **Say which figure you want remembered.** _The nine is the figure I want you to remember._ **A reader told which figure matters remembers that one**; a reader given three equal figures remembers the first, **and it is never the one you meant.**',
  '**Report an unmoved figure as unmoved.** _It has not moved; knowing which nine has not made them eight. I shall tell you in June._ ⚠ **A year with an unmoved figure in it is believed about the ones that moved**, and the June date turns the admission into a plan.',
  '**Put the no-ask in four words and then say what it is not.** _I am asking for nothing. Not a change to the policy, not an explanation, and not an answer to this letter._ ⚠ **The third is the one that works**: a letter that does not ask to be answered **is answered more often than one that does.**',
  '⚠ And **end on the thing you got wrong about the relationship, not about the work.** _I had written that I accepted the batch was not faulty, inside a bracket, in a third letter._ **A letter admitting a bracket beats one admitting a figure**: the bracket cost the reader five months too.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter (80 words or more now, and the full 180–220 in Stage 7).'));
out.push(p('**Dear ______________,**   **I am writing because ______________, and I thought you would want ______________.**   **______________.** ______________ — ______________. ⚠ ______________.   **______________.** ______________ — ______________. **______________**, which I did not expect.   **And ______________, which is the figure I want you to remember.** ⚠ ______________. **It has / has not moved**: ______________. **I shall tell you in ______________ whether ______________.**   **I am asking for nothing.** ⚠ Not ______________, not ______________, **and not an answer to this letter.**   **One thing I should say about ______________.** ______________ — ⚠ ______________.   **Yours sincerely, ______________**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A first line that is the reason for writing, and no _I hope you are well_',
  'Three things, each with a figure',
  'The figure to be remembered, named as such and placed last of the three',
  'The no-ask in four words, with the three things it is not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their first line only, and the room says what the reader will expect next.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (**180–220 words**), to the shape in the writer\'s box, and write the word count at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a first line that is the reason for writing, three things each with a figure, and the no-ask with the three things it is not.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the letter aloud as if to the person, by name, and stop where you would stop if they were there.** ⚠ The places you stop are the places where the register is wrong. Then the sentence the cycle ends on, which is Mrs Shaaban\'s: **nobody reads a bracket in a third letter, and I shall not put anything there again.**'));
out.push(hw('Write the letter (180–220 words) and **send it.** ⚠ Then write down **how long the answer took** and whether it proposed anything you had not thought of. **Mrs Shaaban\'s took four days.**'));

// ===================== 12.7 =====================
out.push(h2('12.7  Review & Mediate: Two accounts of the same year'));
out.push(p('**Function:** mediating two accounts of one year that cannot both be right   ·   **Recycling:** Unit 12 and the whole book   ·   **Exam practice:** B2 First Reading and Use of English Part 5 · Writing Part 2 (a letter or email) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Nobody could have foresaw the four new disputes.  **2** The arrangement did not panned out as I had said.  **3** Looking backwards on the year, the sheet is the useful part.  **4** The argument die down after the code appeared.  **5** My confident that the field would go in was misplaced.  **6** It was not inevitability that the second portions would create disputes.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two accounts of the same year, and the sheet neither of them mentions.'));
out.push(box(null, [
  '**TWO ACCOUNTS OF ONE YEAR** _(written in the same week, by two people in the same room)_',
  '**The first.** _"A good year. The promise field went in, the refusal code is on every slip, the handover sheet carries the expected admissions, and the thread is closed. Four things asked for and four things done."_',
  '**The second.** _"A poor year. The bracket was refused three times, the second pad never went in, the disputes did not fall below twenty, and the comparison I was asked for could not be made. Four things attempted and four things unfinished."_',
  '⚠ **Every statement in both accounts is true.**',
  '**And the thing neither account mentions.** The sheet of 1 June, which lists **eleven** predictions — **the four in the first account, the four in the second, and three nobody has mentioned at all.**',
  '**The question for the cycle.** _Which account is right?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say both accounts are, and what is the only defence against a flattering one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  Both accounts are selections', [
  ['Ms Huda', 'Two accounts of the same year, written in the same week by two people in this room. Mr Darwish — which of them is right?'],
  ['Omar', 'Both, as far as I can see. ⚠ **Every sentence in each of them is true**, and I have checked eight of them.'],
  ['Ms Huda', '**Then do the mediation, and it is three moves and is the last set of three in this book.** One: **put both accounts beside the sheet of 1 June.** Two: **mark all eleven predictions, once, in front of both writers.** Three: ⚠ **count what each account left out.**'],
  ['Omar', 'The first account has the four that came out. The second has the four that did not. ⚠ **And three of the eleven are in neither** — all three unmarkable.'],
  ['Ms Huda', '**Which is the finding of this cycle and of the unit: both accounts are selections, and neither writer is being dishonest.** ⚠ **Nobody chose; each of them remembered the predictions that were the shape of the year they had had** — **and the year each of them had had was decided by which four came out.**'],
  ['Dima', 'And the three nobody mentioned?'],
  ['Ms Huda', '**Those are the ones to dwell on.** ⚠ **An unmarkable prediction leaves no trace in either account**, because it cannot be remembered as a success or a failure: **it is not in the good year and it is not in the bad one.** **Five of the eleven were unmarkable in June and three of those have simply disappeared** — **which is what unmarkable means, a year later.**'],
  ['Jad', 'So what is the defence? If both accounts are honest and both are selections.'],
  ['Ms Huda', '**One thing only, and it is the last answer this book gives: a sheet written at the beginning.** ⚠ **You cannot correct a selection by trying harder to be fair at the end of the year** — **the selection is made by memory and memory does it before you sit down.** **The sheet of 1 June is the only document in this room that nobody could flatter.**'],
  ['Hiba', 'Because it was written before anybody knew.'],
  ['Ms Huda', '**Because it was written before anybody knew, and because it has a date at the top.** ⚠ **Those are the two conditions and there are no others**: **written in advance, and dated.** **A sheet written in advance and not dated can be rewritten; a sheet dated and written afterwards is an account.**'],
  ['Mazen', 'And who is right about the year, in the end?'],
  ['Ms Huda', '**Neither, and that is the eighth time this book has reached that answer and the last.** ⚠ **4.7, 6.7, 7.7, 8.7, 9.7, 10.7 — nobody was wrong. 11.7 — the writer was.** **12.7: both accounts are true and both are selections of the same eleven facts**, and the facts are on one sheet of paper that neither writer looked at.'],
  ['Rim', 'And the year itself? Was it good or poor?'],
  ['Ms Huda', '⚠ **Two right, four wrong, five unmarkable** — **and the five are the result.** **A class that writes eleven predictions and cannot mark five of them has learnt something from that which neither of the two accounts contains**, and it is the only sentence about this year worth keeping.'],
  ['Omar', 'And I wrote the first account.'],
  ['Ms Huda', '🔊 **Then read the two accounts aloud, one after the other, at the same speed, and do not read your own more warmly.** ⚠ **The room then hears two selections.** **A mediator who reads their own side as though it were the fuller one has written a third account**, and it is the least honest of the three.'],
]));
out.push(sp());
out.push(box('Language box – two accounts of one year', [
  '**The three moves, and they are the last set of three in this book.** **1** Put **both accounts beside the sheet written at the start of the year.** **2** **Mark all the predictions, once, in front of both writers.** ⚠ **3** **Count what each account left out.**',
  '**The finding: both accounts are selections, and neither writer is being dishonest.** ⚠ **Nobody chose.** **Each remembered the predictions that were the shape of the year they had had** — **and the year each had had was decided by which four came out.**',
  '**And the three that appear in neither account are the ones to dwell on.** ⚠ **An unmarkable prediction leaves no trace in either account**, because it cannot be remembered as a success or a failure: **it is not in the good year and it is not in the bad one.** **Five were unmarkable in June and three have simply disappeared — which is what unmarkable means a year later.**',
  '**The only defence, and it is the last answer this book gives: a sheet written at the beginning.** ⚠ **You cannot correct a selection by trying harder to be fair at the end of the year** — **the selection is made by memory, and memory does it before you sit down.**',
  '**Two conditions and no others: written in advance, and dated.** ⚠ **A sheet written in advance and not dated can be rewritten; a sheet dated and written afterwards is an account.** **The sheet of 1 June is the only document in the room that nobody could flatter.**',
  '**The eighth and last mediation of this book, and the answer is the one it has reached seven times before.** **4.7, 6.7, 7.7, 8.7, 9.7, 10.7 — nobody was wrong. 11.7 — the writer was.** ⚠ **12.7: both accounts are true and both are selections of the same eleven facts**, and the facts are on one sheet of paper that neither writer looked at.',
  '**And the only sentence about the year worth keeping is not in either account.** ⚠ **Two right, four wrong, five unmarkable — and the five are the result.** **A class that writes eleven predictions and cannot mark five of them has learnt something from that which neither account contains.**',
  '**One warning about the mediation, because it is the one every mediator fails.** ⚠ **Do not produce a third account.** The mediator\'s work is **the marking and the count of what was left out**, and nothing else: **a third account is another selection, written by somebody with no sheet at all** — **and it is the least honest of the three, because it is the only one that knew about the other two.**',
  '**Pronunciation.** 🔊 **Track 12.14** **Read the two accounts one after the other, at the same speed, and do not read your own more warmly.** ⚠ **The room then hears two selections.** **A mediator who reads their own side as the fuller one has written a third account.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs of accounts below and does **not** show it. A reads both accounts and then the sheet. B makes the three moves: **mark the predictions, say which account kept which, and count what both left out.** ⚠ **In one of the two pairs the two accounts are not both true** — one statement in one of them is false — and B must find it. Change roles with the other pair.'));
out.push(table(['Pair A – the year in this room', 'Pair B – the year at the depot'], [
  ['_First: "a good year — four things asked for and four things done."_', '_First: "the arrangement works; the code is on every slip."_'],
  ['_Second: "a poor year — four things attempted and four unfinished."_', '_⚠ Second: "nothing changed; we are where we were in January."_'],
  ['_The sheet: eleven predictions, two right, four wrong, five unmarkable._', '_The sheet: six predictions, three right, two wrong, one unmarkable._'],
  ['_⚠ Left out of both: three unmarkable ones._', '_⚠ "Nothing changed" is false: the code has been on every slip since 10 February._'],
  ['_⚠ Both accounts are true._', '_⚠ One statement in the second account is false._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the marks, the selections and the count of omissions for each pair. ⚠ **Pair B is the one with a false statement** — _nothing changed_ is contradicted by forty slips — **and the distinction is the one the whole unit rests on: a selection is honest and a false statement is not.** About half the pairs call Pair B a selection; **the test is whether a document contradicts it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **your own account of this year in four sentences**, and then put it beside the sheet of 1 June. ⚠ **Mark your own predictions and count what your account left out.** Then the last question of the book: **write the one sentence about your year that is in neither your account nor anybody else\'s** — **the thing that is in the sheet and not in the memory.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what both accounts left out:  _Two accounts of the same year, written in the same week by two people in the room. Asked which of them is right, Omar said both, as far as he could see: every sentence in each of them is true and he had checked eight of them. So the mediation, which is three moves and is the last set of three in the book: put both accounts beside the sheet of 1 June, mark all eleven predictions once in front of both writers, and count what each account left out. The first account has the four that came out and the second has the four that did not — and three of the eleven are in neither, all three unmarkable. Which is the finding of the cycle and of the unit: both accounts are selections and neither writer is being dishonest. Nobody chose; each of them remembered the predictions that were the shape of the year they had had, and the year each of them had had was decided by which four came out. Dima asked about the three nobody mentioned, and those are the ones to dwell on: an unmarkable prediction leaves no trace in either account, because it cannot be remembered as a success or a failure — it is not in the good year and it is not in the bad one. Five of the eleven were unmarkable in June and three have simply disappeared, which is what unmarkable means a year later. Jad asked what the defence is if both accounts are honest and both are selections, and one thing only, and it is the last answer the book gives: a sheet written at the beginning. You cannot correct a selection by trying harder to be fair at the end of the year, because the selection is made by memory and memory does it before you sit down. Hiba said because it was written before anybody knew, and because it has a date at the top — those are the two conditions and there are no others: written in advance, and dated. And Mazen asked who is right about the year, and neither._'));
out.push(p('**Listener task:** write the one sentence about your own year that is in the sheet and not in the memory.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 5)', 7));
out.push(p('Read the text below and answer questions **1–6**, choosing the answer (**A**, **B**, **C** or **D**) which you think fits best.'));
out.push(box(null, [
  '**WHAT A SHEET OF PAPER DOES TO A YEAR**',
  'Nine months ago a class of mine wrote eleven predictions on a single sheet, put the date at the top and put it away. Last week we marked them. Two were right, four were wrong, and five could not be marked at all — and it is the five that have changed how this class writes.',
  'The five were not vague in the ordinary sense. Each was missing either a date or a figure, and three were missing both. _Record-keeping will get better_ was the first of them, and nothing that happened in nine months could have contradicted it. A prediction that nothing could contradict is not a prediction; it is a hope with a future tense on it. The class could not have told you that in June. It can now, and the evidence is that nobody has written an unmarkable prediction since the autumn.',
  'The arguments, when we marked the sheet, were not where I expected them. Nobody disputed a _wrong_. Every argument in the room was about an _unmarkable_ — because that verdict says the prediction was never worth anything, and being told that is harder to hear than being told you failed.',
  'The most useful single result was a near miss. Somebody had predicted fewer than twenty disputed results in one quarter; there were twenty-six. She wrote, in two sentences, _wrong — out by six_, and the figure produced the question _why six?_ Four of the twenty-six turned out to be disputes about the remedy itself, a kind that had not existed before. She had made four of her own twenty-six. _Nearly right_ would have ended the conversation; _out by six_ opened it.',
  'And one result was awkward. A prediction came out exactly, for a reason its writer had not given: a slot opened in a release because something else was withdrawn, and the thing that filled it was simply the only specification that was ready. A success with the wrong reason behind it is more expensive than a failure, because nobody corrects it. Nobody argues with a field that is in.',
  'The practice costs twenty seconds a time — two lines at the top of the page you are arguing on, dated. I do not claim that it makes anybody\'s predictions better. What it does is make them markable, and marking them is what taught this class the difference between a figure and a hope. The sheet measures the course and not the year.',
], C.grey, C.navy));
[
  '**1**  What does the writer say has changed the way the class writes?   **A** the five that could not be marked   **B** the two that were right   **C** the four that were wrong   **D** the arguments about the marking',
  '**2**  What does the writer say about _record-keeping will get better_?   **A** it was too optimistic   **B** nothing that happened could have contradicted it   **C** it was not written down   **D** it had no name against it',
  '**3**  What was unexpected about the arguments?   **A** how long they lasted   **B** that they were about the predictions that failed   **C** that nobody argued about being wrong   **D** that the class disputed the writer\'s marking',
  '**4**  Why does the writer value the near miss?   **A** the figure was close to the prediction   **B** the writer prefers failures to successes   **C** the class had expected that result   **D** stating the size of the miss produced a finding',
  '**5**  What does the writer say about a success with the wrong reason behind it?   **A** it is more expensive than a failure, because nobody corrects it   **B** it is better than a failure, whatever the reason   **C** it should not be mentioned to the class   **D** there is no way of detecting it',
  '**6**  What is the writer\'s main point about the sheet?   **A** it predicts the year accurately   **B** it saves time   **C** it measures what the class can write   **D** it settles arguments',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two accounts (80 words or more).'));
out.push(p('**TWO ACCOUNTS OF ONE ______________** · ______________   **The first.** "______________"   **The second.** "______________"   **Every statement in both is true / one statement in the second is false.** ______________.   **The sheet of ______________, marked.** ______ right, ______ wrong, ______ unmarkable.   **What the first account kept.** ______________. **What the second kept.** ______________.   **What both left out.** ⚠ ______________ — **all of them ______________.**   **The defence, and there is one.** ⚠ **A sheet written at the beginning**, and two conditions: **written in advance, and dated.**   **And the one sentence about the year that is in neither account.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted as written, with their truth stated',
  'The sheet marked, with the three totals',
  'What each account kept, and what both left out',
  'One sentence about the year that is in neither account',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a letter or email)', 10));
out.push(box(null, [
  '⚠ **The examination letter, and the shape is 12.6: the reason for writing in the first line, three things each with a figure, and one ask or none.** 180–220 words.',
  'You have received this email from somebody you worked with last year.',
  '_"We have not been in touch since the spring. I have been asked to put together a short note on what came of the arrangements we made last year, and I should rather hear it from you than guess. **What actually happened, what did not, and is there anything you would do differently?** Anything you can send me this week would help."_',
  'Write your **email** in reply, in **180–220 words.**',
  '⚠ **Three requirements and they are the content mark: what happened · what did not · what you would do differently.** All three, or the content mark goes. **The register is set by the reader** — somebody you worked with and have not written to for months — **and contractions are acceptable here and would not be in a letter to an office.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Nobody could have ___ the four new disputes.   a) foreseeing   b) foreseen   c) foresaw',
  '2  The arrangement did not ___ out as I had said it would.   a) panned   b) panning   c) pan',
  '3  Looking ___ on the year, the sheet is the useful part.   a) back   b) backward   c) backwards',
  '4  The argument ___ down as soon as the code appeared on the slips.   a) die   b) dying   c) died',
  '5  My ___ that the field would go in was based on the wrong thing.   a) confident   b) confidence   c) confidently',
  '6  The ___ of the delay was a slot opening in December.   a) proof   b) proving   c) proven',
  '7  One figure hid four disputes, so next year\'s prediction carries a ___ of the model.   a) revise   b) revising   c) revision',
  '8  It was not ___ that the second portions would create disputes of their own.   a) inevitability   b) inevitable   c) inevitably',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 12.15** You will hear an interview with a woman who sends consignments between depots, talking about her year. For questions **1–7**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  What does she say she got wrong about the year?   **A** the object of the argument   **B** the distributor\'s intentions   **C** the figure for refusals',
  '**2**  Why did the five months not end sooner?   **A** neither side read the other\'s concession   **B** the distributor would not answer   **C** the figures were wrong',
  '**3**  What does she say about the twelve days?   **A** she does not know why it was so fast   **B** she had conceded a fault in the same sentence as the ask   **C** the depot had changed its own form',
  '**4**  What was her prediction on the sheet of 1 June?   **A** fewer refusals   **B** that the gate would cause trouble   **C** a code on every slip within a month of an exchange',
  '**5**  What does she say the sheet showed?   **A** that she had been mostly right   **B** that nearly half of what the class wrote could not be marked   **C** that predictions are not worth making',
  '**6**  What has she changed about her own writing?   **A** she writes longer notes   **B** she sends fewer notes   **C** she writes two dated lines before she argues',
  '**7**  What does she say she still cannot explain?   **A** why nine of the forty were hers   **B** why the depot changed its own form in January   **C** why the seal lifts at one corner',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Interviewer', 'Looking back on the year, what would you say you got wrong?'],
  ['Rim', 'The object. Not the figures and not the people — the object. I spent five months arguing about whether a batch of cells was faulty, and the question was never the batch. The question was who looks at the seal before the carton leaves the depot, and nobody asked it until February.'],
  ['Interviewer', 'Five months is a long time for a question nobody asked.'],
  ['Rim', 'It is, and the reason is almost comic. I had written in September that I accepted the batch was not faulty — in a bracket, in a third letter. They had written in September that the sealing is done by hand on a brush bench — at the foot of a delivery note, under a signature. Each of us had conceded the thing the other needed, and neither of us read the other\'s concession, because you read a letter for what you have to answer.'],
  ['Interviewer', 'And then it moved quickly.'],
  ['Rim', 'Twelve days, after twice in eleven months with no reply at all. I had asked for the same three characters on the slip in February and in July and conceded nothing either time. In February this year I conceded a fault of our own, in figures, in the same sentence as the ask — nine of our forty consignments had left with the paperwork incomplete — and the code was on every slip twelve days later.'],
  ['Interviewer', 'You had predicted something about that, I think.'],
  ['Rim', 'On the sheet we wrote in June. My prediction was that a refusal code would be on every slip within a month of any exchange I offered. That one came out, and it is one of only two on the sheet that did.'],
  ['Interviewer', 'What did the sheet tell you, apart from that?'],
  ['Rim', 'That five of our eleven predictions could not be marked at all. Nearly half. No date or no figure in any of the five, and three had neither. That is the thing I took away from the whole year, and it is not about the depot.'],
  ['Interviewer', 'Has it changed how you write?'],
  ['Rim', 'Two lines at the top of anything I am arguing on, with the date. What I expect, by when. It takes about twenty seconds and it has twice made me change what I then wrote underneath.'],
  ['Interviewer', 'And is there anything about the year you still cannot explain?'],
  ['Rim', 'One thing. Their own refusal form has four codes on it and ours has three, and theirs was changed in January, a month before any of this. Nobody at that end has been able to tell me why, and I have stopped asking, and I do not like not knowing.'],
]));
out.push(p('**C  Writing.** Write the email (180–220 words): the reason for writing in the first line, three things each with a figure, what did not happen, and what you would do differently.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state a prediction with a thing, a date and a written record',
  '☐ mark a prediction _right_, _wrong_ or _unmarkable_, and say the word before the explanation',
  '☐ split a prediction that was right about one thing and wrong about another',
  '☐ tell a prediction right for the reason given from one right by accident',
  '☐ say what else my mechanism predicts, and go and look',
  '☐ price a near miss as a figure — _out by six_ — and count my own share of it',
  '☐ write the account of a year with the main thing first and no protection in front of it',
  '☐ write the letter that reports a year, with three figures and no ask',
], C.lblue, C.navy));
out.push(sp());
out.push(box('THE END OF BOOK 1 — AND WHAT COMES NEXT', [
  '**That is twelve units, eighty-four cycles and a book.** You began Unit 1 saying what a room assumes and you end Unit 12 marking a sheet of paper you wrote nine months ago. ⚠ **The sheet is the measure of the course**, and it is the only thing in these twelve units that nobody could flatter.',
  '**What to do next, in this order.** **1 The End-of-Book Test**, which carries all four papers of B2 First and takes an afternoon. **2 Write next year\'s sheet** — the same number of predictions, **every one with a date and a figure** — and put it away dated. **3 Keep your 12.5 page.** It is the hardest thing in this book and it is the page to show anybody who asks what a year of this course was for.',
  '⚠ **And one thing to carry out of the book, if only one.** **Every cycle in these twelve units is a consequence of the same habit: say the thing that can be checked, and put the base, the date and the name beside it.** The concession of 9.1, the figures of 10.1, the three readers of 11.1 and the sheet of 12.2 **are four forms of one discipline**, and it is cheaper than any of the alternatives.',
  '**B2 Book 2 begins at Unit 13** and takes the same seven-cycle shape into **negotiation, the long document, the disagreement with somebody senior, and the paper that has to survive without you.** ⚠ **Bring the sheet.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
