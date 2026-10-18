// Proactive English B2 · Syria Edition · Book 2 · Unit 24 — Student's Book
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

out.push(h1('Unit 24  Opening the Letters'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**24.1** What you wrote down two years ago   ·   **24.2** The habit that stuck and the one that did not   ·   **24.3** What you cannot yet do',
  '**24.4** The sentence you will be asked for next   ·   **24.5** Telling somebody else what the course was for   ·   **24.6** Opening the letters   ·   **24.7** Review & Mediate: the person who sealed the letter and the person who opened it',
  '⚠ **This is the last unit of the book and of the series, and it is not like the others.** **It has no new function to teach.** **It takes the whole of B2 and puts it back on one task** — **and the task is your own record of two years.**',
  '**⚠ 24.6 needs an envelope that was sealed at the end of B1.** **It has been with whoever keeps the register since then.** **If it is not in the room on the first day, the cycle cannot be taught at all** — **so find it now, before 24.1.**',
], C.lteal, C.teal));

// ===================== 24.1 =====================
out.push(pb());
out.push(h2('24.1  What you wrote down two years ago'));
out.push(p('**Function:** comparing a record you made of yourself with what happened   ·   **Grammar:** _I wrote that I would ___; what I did was ____   ·   **Pronunciation:** reading your own old sentence without defending it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, without the envelope yet. ⚠ **Say what you think you wrote at the end of B1 about what you wanted English for.** **Write your guess down now, in one sentence, and put your name on it.** **In 24.6 you will have both sentences in front of you** — **and the guess is as interesting as the letter, because it is a record of what you think you used to want.**'));
out.push(board('I expect I said something about wanting to be more confident at work.', 'I think I wrote: I want to be able to answer a complaint without asking somebody to check it.'));
out.push(p('**b**  Which is a usable record of a prediction? **1** _I wanted to improve._  **2** _I think I wrote that I wanted to be more confident._  **3** _I think I wrote: I want to answer a complaint without asking anybody to check it._  **4** _I cannot remember at all, and I am not going to guess._  **5** _I think I wrote that I would be running the Tuesday meeting by now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the value of an old record is?   **A** that it shows progress   **B** **that it is evidence about what you used to want, which nobody can remember accurately** — and **the useful part is almost always the thing you have stopped wanting and did not notice**   **C** that it is encouraging'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say about a record that only shows progress?   **2** What does she say nobody can do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.1  Two years of your own handwriting', [
  ['Ms Huda', 'The envelope is in the cupboard and we are not opening it until 24.6. Why not today?'],
  ['Nour', '**Because we would read it as a verdict.** ⚠ **And it is not a verdict; it is evidence.**'],
  ['Ms Huda', '**Evidence about what?**'],
  ['Nour', '⚠ **About what we used to want** — **which I would have told you I remember, and I do not.**'],
  ['Ms Huda', '**Nobody does, and that is the first thing to establish.** ⚠ **Nobody can remember accurately what they used to want** — **not because memory is weak, but because we revise the old want to fit the thing we got.**'],
  ['Omar', 'So we write down our guess first.'],
  ['Ms Huda', '**You write down your guess first, with your name on it, and you keep it.** ⚠ **In 24.6 you will have two sentences in front of you: what you wrote in the first book and what you now think you wrote.** **The second is the more interesting of the two.**'],
  ['Dima', 'And what if the guess is right?'],
  ['Ms Huda', '⚠ **Then you have learned that about yourself, which is worth something.** **In the last class, four of twelve guessed close and eight did not** — **and of the eight, six had quietly replaced a small specific want with a large vague one.**'],
  ['Adnan', 'That is what I shall have done.'],
  ['Ms Huda', '**It is the commonest of the two directions and the worse one.** ⚠ **_I want to answer a complaint without asking anybody to check it_ becomes _I want to be more confident_** — **and the second cannot be tested, so it cannot be achieved, and you will carry it for another two years.**'],
  ['Rim', 'And the other direction?'],
  ['Ms Huda', '⚠ **Rarer and more cheerful.** **Somebody wrote something small and has done it and forgotten that it was ever difficult** — **and they will read their own letter and not recognise the difficulty in it.** **That is what learning looks like from the inside, which is to say invisible.**'],
  ['Mazen', 'And what do we do with the guess afterwards?'],
  ['Ms Huda', '**I keep both pieces of paper and you get them back on the same morning.** ⚠ **In the last class two students told me their guess had been almost right, and the paper said otherwise** — **and the point of looking is not to catch anybody.** **It is that the drift is the whole lesson, and it disappears the moment a guess is remembered instead of read.**'],
  ['Jad', 'And how do we read the old sentence out loud?'],
  ['Ms Huda', '🔊 **As written, and without defending it.** ⚠ **People read their own old sentence and add a clause** — _which of course at that time I did not know that_ — **and the clause is a defence of somebody who is not in the room.** **Read it, stop, and let it be what it was.**'],
  ['Hiba', 'And if it is embarrassing?'],
  ['Ms Huda', '**Most of them are slightly embarrassing, and that is the sign the two years were real.** ⚠ **A letter you would write again word for word is a letter from somebody who has not moved** — **and in eleven years of doing this I have seen two of those, and both of them were written by people who already had the English.**'],
]));
out.push(sp());
out.push(box('Language box – what you wrote down two years ago', [
  '**An old record is evidence and not a verdict.** ⚠ **Evidence about what you used to want** — **and nobody can remember that accurately, because we revise the old want to fit the thing we got.**',
  '**So write your guess down first, with your name on it, and keep it.** ⚠ **In 24.6 you will have two sentences: what you wrote in the first book and what you now think you wrote.** **The second is the more interesting of the two.**',
  '**The commonest drift, and it is the worse direction.** ⚠ **A small specific want is quietly replaced by a large vague one.** _I want to answer a complaint without asking anybody to check it_ **becomes** _I want to be more confident_ — **and the second cannot be tested, so it cannot be achieved, and you carry it for another two years.**',
  '⚠ **The other direction is rarer and more cheerful.** **Somebody wrote something small, has done it, and has forgotten that it was ever difficult** — **and will read their own letter without recognising the difficulty in it.** **That is what learning looks like from the inside, which is to say invisible.**',
  '**The forms.** _I wrote that I would ______; what I did was ______._ _I think I wrote ______, and I now want ______ instead._ _I have done it and I had forgotten it was hard._ ⚠ **And the one to avoid:** _I have improved a lot_, **which is a sentence about a feeling.**',
  '**Pronunciation.** 🔊 **Track 24.2** **As written, and without defending it.** ⚠ **People read their own old sentence and add a clause** — _which of course at that time I did not know_ — **and the clause is a defence of somebody who is not in the room.** **Read it, stop, and let it be what it was.**',
  '**And one thing about embarrassment, which is worth saying before the envelope is opened.** ⚠ **Most of these letters are slightly embarrassing, and that is the sign the two years were real.** **A letter you would write again word for word is a letter from somebody who has not moved.**',
  '**And one thing about why the guess is written and not merely thought.** ⚠ **Two or three students in every class will claim afterwards that their guess was closer than it was**, **and the paper settles it in four seconds without an argument.** **The point of settling it is not to be right: the drift is the lesson, and it disappears if the guess is remembered rather than read.**',
  '**Practise:** Record the prediction. **1** your guess, in one sentence  **2** the small specific want you think you had  **3** the large vague one you may have replaced it with  **4** one thing you can now do that you have forgotten was hard  **5** one you would write again, and why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the old sentence from the card. B says **whether it is small and specific or large and vague**, and **what the vague version of the small one would be, or the small version of the vague one.** ⚠ **Two rows on each card are already small and specific and need no work** — B must say so and resist improving them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the old sentence)_ __________.'],
  ['B', '**That is __________. The __________ version of it is __________.**'],
]));
out.push(table(['Card A – the old sentence', 'Card B – the old sentence'], [
  ['_I want to be more confident in meetings._', '_I want to improve my English generally._'],
  ['_⚠ I want to answer a complaint without asking anybody to check it._', '_⚠ I want to minute a meeting in the room rather than afterwards._'],
  ['_I want to feel comfortable with foreign visitors._', '_I want to be fluent._'],
  ['_⚠ I want to write a refusal in four lines without softening it._', '_⚠ I want to read a sixty-page contract in a morning._'],
  ['_I want to progress in my career._', '_I want to stop being nervous on the telephone._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each sentence and whether it is small or large. ⚠ **The four rows marked ⚠ are already small and specific** — **a complaint answered alone, a minute taken in the room, a four-line refusal, a contract read in a morning** — **and a pair who improve them have done the thing the cycle warns against.** **A testable want is finished; it needs nothing but doing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your guess at your own old sentence, **in one sentence, with your name on it**, and fold it. ⚠ **Then say out loud whether you think it was small or large** — **and if large, say what the small version would have been.**'));
out.push(p('**b**  Swap and perform. Your partner reads your guess **with a defending clause added** and then as written. ⚠ You say which one you would rather be read in 24.6.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The envelope is in the cupboard and it is not being opened until 24.6, and Nour said why not today: because the class would read it as a verdict, and it is not a verdict but evidence. Evidence about what the class used to want, which she would have said she remembers and does not. Nobody does, and that is the first thing to establish: nobody can remember accurately what they used to want, not because memory is weak but because we revise the old want to fit the thing we got. Omar said that is why the guess is written first, and you write it down with your name on it and keep it, because in 24.6 there will be two sentences in front of each student — what they wrote in the first book and what they now think they wrote — and the second is the more interesting of the two. Dima asked what happens if the guess is right, and then you have learned that about yourself, which is worth something: in the last class four of twelve guessed close and eight did not, and of the eight, six had quietly replaced a small specific want with a large vague one. Adnan said that is what he will have done, and it is the commonest of the two directions and the worse one — I want to answer a complaint without asking anybody to check it becomes I want to be more confident, and the second cannot be tested, so it cannot be achieved, and you carry it for another two years. Rim asked about the other direction, and it is rarer and more cheerful: somebody wrote something small, has done it, and has forgotten that it was ever difficult, and will read their own letter without recognising the difficulty in it. That is what learning looks like from the inside, which is to say invisible. And Jad asked how to read the old sentence out loud: as written, and without defending it. People read their own old sentence and add a clause — which of course at that time I did not know — and the clause is a defence of somebody who is not in the room. And Hiba asked what happens if the letter is embarrassing: most of them are slightly embarrassing, and that is the sign the two years were real._'));
out.push(p('**Listener task:** write your partner\'s guess and whether it is small or large.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Ms Huda gives the class before the envelope is opened, and the note under it. Answer the questions.'));
out.push(model([
  '**BEFORE THE ENVELOPE** _(for the class · the first morning of Unit 24)_',
  '**What is in the cupboard.** ⚠ **Twelve letters, sealed at the end of the first book, written by you to yourselves.** **I have not read them.** **Nobody has.**',
  '**What they are not.** ⚠ **They are not a verdict on two years.** **Four of them will be close to what you now think you wrote and eight will not, and neither of those is a result** — **it is information about how a person remembers a want.**',
  '**The two directions, and one of them is worse.** ⚠ **The common one: a small specific want replaced by a large vague one.** _I want to answer a complaint without asking anybody to check it_ **becomes** _I want to be more confident at work_ — **and the second cannot be tested, so it cannot be finished, and you will carry it for another two years.** **The rare one: somebody wrote something small, has done it, and has forgotten that it was hard.**',
  '**What I am asking you to do before it is opened, and it takes four minutes.** ⚠ **Write what you think you wrote, in one sentence, with your name on it.** **Fold it and give it to me.** **In 24.6 you will have both pieces of paper in front of you at the same time** — **and in eleven years of doing this, the guess has taught people more than the letter.**',
  '**One thing that will happen and is worth expecting.** ⚠ **Some of you will be slightly embarrassed by your own letter.** **That is the sign that the two years were real.** **A letter you would write again word for word is a letter from somebody who has not moved** — **and I have seen two of those, and both were written by people who already had the English before they began.**',
  '**And what I shall not do.** ⚠ **I shall not read anybody\'s letter aloud, and I shall not ask anybody to.** **In 24.6 you will read your own, to yourself, and then you will decide what of it to say** — **and if the answer is nothing, that is a complete answer and I shall not ask twice.**',
  '**NOTE for the teacher, which the class does not see.** ⚠ **Keep the guesses.** **Two or three students will claim in 24.6 that their guess was closer than it was, and the paper settles it in four seconds without an argument** — **and the point of settling it is not to be right, it is that the drift is the lesson and it disappears if the guess is remembered rather than read.**',
]));
out.push(item('1', 'Why does the page say the letters are not a verdict?'));
out.push(item('2', 'What are the two directions of drift, and which is worse?'));
out.push(item('3', 'What does the note say about keeping the guesses?'));
out.push(writers([
  'A page before an opening: **what is in the envelope and who has read it** → **what it is not** → **the two directions of drift, and which is worse** → **what to do before it is opened** → **what will happen and is worth expecting** → **and what you will not be asked to do.**',
  '⚠ **Say who has not read them, and say it early.** _I have not read them. Nobody has._ **Five words, and they are the reason anybody will take the exercise seriously.**',
  '**Give the drift with both directions and name the worse one.** ⚠ _A small specific want replaced by a large vague one._ **A class told only that memory drifts will hear a general truth; a class given the two directions can look for theirs.**',
  '**Say what will be uncomfortable before it happens.** ⚠ _Some of you will be slightly embarrassed, and that is the sign the two years were real._ **Discomfort that has been predicted is bearable; the same discomfort unannounced is read as failure.**',
  '⚠ And **say what will not be asked.** _I shall not read anybody\'s letter aloud and I shall not ask anybody to._ **The permission not to share is what makes the reading honest** — **and _if the answer is nothing, that is a complete answer_ has to be said in advance or it is not believed.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own version of the page, for a class or a colleague (80 words or more).'));
out.push(p('**BEFORE ______________** _(for ______________ · ______________)_   **What is in ______________.** ⚠ **______________, written by ______________.** **I have not ______________.**   **What they are not.** ⚠ **They are not ______________.**   **The two directions, and one is worse.** ⚠ **The common one: ______________ replaced by ______________.** **The rare one: ______________.**   **What I am asking you to do first, and it takes ______ minutes.** ⚠ **______________.**   **One thing that will happen and is worth expecting.** ⚠ **______________.** **That is the sign ______________.**   **And what I shall not do.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Who has read the letters, said early',
  'What the exercise is not',
  'The two directions of drift, with the worse one named',
  'What will not be asked of anybody',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their _what they are not_ line only**, and the room says whether it removes the fear of a verdict.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: what is in the envelope, what it is not, the two directions, what to do first, what will be uncomfortable, and what will not be asked.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: who has read them said early, what it is not, both directions of drift with the worse named, and what will not be asked of anybody.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your guess at your own old sentence, once, and do not defend it.** ⚠ **The room counts the small specific guesses against the large vague ones** — **and the count is the only prediction this unit makes about 24.6.** **In this class it has run about one small to two large, every time.** Then the sentence the cycle ends on, which is Ms Huda\'s: **a letter you would write again word for word is a letter from somebody who has not moved.**'));
out.push(hw('Write **your guess** at your own sealed sentence: **one sentence, your name on it, folded, and given in.** ⚠ **Then write underneath, for yourself only, whether you think it is small and specific or large and vague** — **and if it is large, write the small version.** **The small version is the thing you will work on after this course ends, and it is the only piece of homework in this book that has no date on it.**'));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  The habit that stuck and the one that did not'));
out.push(p('**Function:** separating what you have actually changed from what you merely know   ·   **Grammar:** _I do ___ now without thinking; I know I should ___ and I do not_   ·   **Pronunciation:** the admission said without an excuse after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Name one thing from these two books that you now do without thinking, and one that you know you should do and do not.** **The second is harder to say and it is the useful one** — **and the test of a habit is not whether you can explain it; it is whether you did it last Tuesday when you were late.**'));
out.push(board('I have definitely taken a lot of this on board.', 'I put the news in the first sentence without thinking. I have never once written the failure condition.'));
out.push(p('**b**  Which is a habit and which is knowledge? **1** _I understand why the news goes first._  **2** _I put the news in the first sentence without thinking about it._  **3** _I know I should name the second reader._  **4** _I write the two-clause question before I open a long document, every time._  **5** _I am much more aware of criteria now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the test of a habit is?   **A** whether you can explain it   **B** **whether you did it last Tuesday when you were late** — and **a habit that survives only when there is time is knowledge wearing a habit\'s clothes**   **C** whether you agree with it'));
out.push(p('**b**  Listen again. **1** Which habit stuck for Mr Hariri, and which did not?   **2** What does Ms Huda say about the excuse that follows an admission?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.3  Last Tuesday, when you were late', [
  ['Ms Huda', 'Mr Hariri. One habit that stuck and one that did not, and the second one first.'],
  ['Mazen', '⚠ **I have never once written a failure condition.** **Not one, in a year, and I can explain exactly why they work.**'],
  ['Ms Huda', '**And the one that stuck?**'],
  ['Mazen', '⚠ **The test card.** **Every batch that leaves my counter has the four tests on a card, and I do not decide to do it** — **it is just what sending a batch is now.**'],
  ['Ms Huda', '**That is the distinction the cycle turns on, and it is not about effort.** ⚠ **The test of a habit is not whether you can explain it.** **It is whether you did it last Tuesday when you were late.**'],
  ['Nour', 'And a habit that only survives when there is time?'],
  ['Ms Huda', '⚠ **Is knowledge wearing a habit\'s clothes.** **And it will be the first thing to go in every busy week for the rest of your working life** — **which is not a moral failing; it is what a thing that has not become automatic does.**'],
  ['Omar', 'So how does something become automatic?'],
  ['Ms Huda', '**By being attached to a moment rather than to an intention.** ⚠ **Mr Hariri\'s card is attached to the act of sending a batch.** **A failure condition is attached to _writing a proposal_, which happens four times a year** — **and four times a year is not enough to make anything automatic.**'],
  ['Dima', 'Then some of these cannot become habits at all.'],
  ['Ms Huda', '⚠ **Some cannot, and saying so is more honest than the alternative.** **The four-times-a-year ones have to be on a list that you look at** — **not remembered, looked at** — **and the list lives with the thing, as in 23.6.**'],
  ['Mazen', '**So the failure condition goes on the front of my proposal paper.**'],
  ['Ms Huda', '**Printed, so that an empty space is visible.** ⚠ **A heading with nothing under it is the only reliable reminder anybody has ever invented** — **and it works because it is embarrassing and not because it is clever.**'],
  ['Adnan', 'And the habits that went the other way? Things we did before and stopped?'],
  ['Ms Huda', '⚠ **Those are worth naming too, and the room usually has one.** **Somebody stopped writing _I hope this finds you well_ and nobody noticed, including them** — **and a habit that has disappeared without being noticed is the surest kind of change there is.**'],
  ['Rim', 'And saying the admission out loud?'],
  ['Ms Huda', '🔊 **The admission, and then nothing.** ⚠ **People say _I have never written a failure condition_ and then add _although to be fair the opportunity has not really come up_** — **and the excuse undoes the sentence.** **Say it, stop, and let the room hear it.**'],
]));
out.push(sp());
out.push(box('Language box – the habit that stuck and the one that did not', [
  '**The test of a habit is not whether you can explain it.** ⚠ **It is whether you did it last Tuesday when you were late.** **A habit that survives only when there is time is knowledge wearing a habit\'s clothes.**',
  '⚠ **And it will be the first thing to go in every busy week for the rest of your working life.** **Which is not a moral failing; it is what a thing that has not become automatic does.**',
  '**Things become automatic by being attached to a moment and not to an intention.** ⚠ **Mr Hariri\'s test card is attached to the act of sending a batch, which happens weekly.** **A failure condition is attached to _writing a proposal_, which happens four times a year** — **and four times a year is not enough to make anything automatic.**',
  '**So some of these cannot become habits at all, and saying so is more honest than the alternative.** ⚠ **The four-times-a-year ones go on a list that you look at** — **not remembered, looked at** — **and the list lives with the thing, as in 23.6.**',
  '⚠ **Printed, so that an empty space is visible.** **A heading with nothing under it is the only reliable reminder anybody has ever invented** — **and it works because it is embarrassing and not because it is clever.**',
  '**And name the habits that went the other way.** ⚠ **Somebody stopped writing _I hope this finds you well_ and nobody noticed, including them** — **and a habit that has disappeared without being noticed is the surest kind of change there is.**',
  '**Pronunciation.** 🔊 **Track 24.4** **The admission, and then nothing.** ⚠ **People say _I have never written a failure condition_ and then add _although to be fair the opportunity has not really come up_** — **and the excuse undoes the sentence.** **Say it, stop, and let the room hear it.**',
  '**And one thing about the proportion, because it is reassuring and nobody expects it.** ⚠ **In a room of twelve, each student usually has two or three habits that stuck out of about eighty functions taught.** **That is a normal and a good result** — **and a student who claims eleven has counted the things they can explain.**',
  '**And one thing about the word _time_, which is the answer everybody gives.** ⚠ **_I have not had time_ is almost never the reason and it is always available** — **and it points at nothing anybody can change.** **The reason is frequency: a thing attached to a weekly moment becomes automatic and a thing attached to a twice-yearly one never does, whatever anybody\'s diary looks like.**',
  '**Practise:** Name them. **1** one that stuck  **2** one that did not  **3** the moment the one that stuck is attached to  **4** one that cannot become a habit, and the list it goes on  **5** one you stopped doing without noticing',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the function from the card. B says **whether it could become a habit at all** — **and if it could, what moment it attaches to; and if it could not, what list it goes on.** ⚠ **Two rows on each card arise less than four times a year** and can never be habits. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the function)_ __________.'],
  ['B', '**It attaches to __________, which happens __________** _(or)_ **it cannot be a habit; it goes on __________.**'],
]));
out.push(table(['Card A – the function', 'Card B – the function'], [
  ['_The news in the first sentence of a bad-news letter._', '_The two-clause question before a long document._'],
  ['_⚠ The failure condition in a proposal._', '_⚠ The mediation of two accounts that are both right._'],
  ['_The method beside every criterion._', '_The date against every action in a minute._'],
  ['_⚠ The scope page of a specification._', '_⚠ The renunciation paragraph in a proposal._'],
  ['_The figure and its unit, never separated._', '_The ordinary word defined in the clause._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each function, the moment or the list. ⚠ **The four rows marked ⚠ arise less than four times a year** — **a failure condition, a mediation, a scope page, a renunciation** — **and none of them can ever become automatic.** **They go on a printed heading with an empty space under it**, **which is the only reminder that works, and it works because the space is embarrassing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Name **one habit that stuck and one that did not**, out loud, with no excuse after either. ⚠ **Then say what moment the first one is attached to** — **and whether the second could ever be attached to one.**'));
out.push(p('**b**  Swap and perform. Your partner reads your admission **with an excuse added** and then alone. ⚠ You say which one you believed.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen gave the one that did not stick first: he has never once written a failure condition, not one in a year, and he can explain exactly why they work. The one that stuck is the test card — every batch that leaves his counter has the four tests on a card, and he does not decide to do it; it is just what sending a batch is now. That is the distinction the cycle turns on and it is not about effort: the test of a habit is not whether you can explain it but whether you did it last Tuesday when you were late. Nour asked about a habit that only survives when there is time, and it is knowledge wearing a habit\'s clothes, and it will be the first thing to go in every busy week for the rest of a working life — which is not a moral failing but what a thing that has not become automatic does. Omar asked how something becomes automatic, and by being attached to a moment rather than to an intention: the card is attached to the act of sending a batch, and a failure condition is attached to writing a proposal, which happens four times a year, and four times a year is not enough to make anything automatic. Dima said then some of these cannot become habits at all, and some cannot, and saying so is more honest than the alternative — the four-times-a-year ones have to be on a list that you look at, not remembered but looked at, and the list lives with the thing. Mazen said the failure condition goes on the front of his proposal paper, printed, so that an empty space is visible: a heading with nothing under it is the only reliable reminder anybody has invented, and it works because it is embarrassing. And Adnan asked about habits that went the other way, things dropped without being noticed: somebody stopped writing I hope this finds you well and nobody noticed, including them, and a habit that has disappeared without being noticed is the surest kind of change there is. And Rim asked about saying the admission out loud, which is the admission and then nothing, because people add an excuse and the excuse undoes the sentence._'));
out.push(p('**Listener task:** write your partner\'s two habits and the moment the first attaches to.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes for himself at the end of the course, and the note under it. Answer the questions.'));
out.push(model([
  '**WHAT STUCK AND WHAT DID NOT** _(M. Hariri · for my own use · 4 November)_',
  '**Three that stuck, and I did not choose any of them.** ⚠ **1 The test card on every batch.** **2 The figure with its unit, always** — _ten millimetres_, **never** _ten_. **3 The news in the first sentence, which I now cannot write any other way and which took about four months.**',
  '**Why those three and not others, and it is the same reason three times.** ⚠ **Each of them is attached to something I do every week.** **A batch goes back to the exchange on most Thursdays.** **I say a figure out loud twenty times a day.** **And I write something that somebody will not like about once a week.**',
  '**Four I can explain and have never done.** ⚠ **The failure condition.** **The scope page.** **The renunciation paragraph.** **And the mediation of two accounts.** **I could teach all four and I have used none of them** — **and the honest reason is not time; it is that each of them belongs to a thing I do about twice a year.**',
  '**So the four go on paper and not in my head, and here is where.** ⚠ **On the front of the proposal form I use, printed as four headings with nothing under them.** **An empty heading is the only reminder that has ever worked on me** — **and it works because it is embarrassing to hand in a form with a blank under _how you will know it has not worked_.**',
  '**One I stopped doing and did not notice.** ⚠ **I used to begin every letter to the exchange with a paragraph about the weather and the state of the line.** **I have looked at four letters from this year and there is not one.** **I cannot tell you when I stopped** — **and a habit that disappears without being noticed is the surest change there is.**',
  '**And one honest count, because I was going to claim more.** ⚠ **Three out of about eighty things taught in two books.** **I was going to write eleven, and when I tested the other eight against last Tuesday** — **the Tuesday I was two hours late and the exchange was waiting** — **I had done three of them.**',
  '**NOTE for myself, which is the only reader this page has.** ⚠ **The four on the form are the real work of next year.** **Not learning anything new: making four things that I already understand happen on the two days a year when they arise** — **and the only mechanism I have for that is a piece of printed paper with gaps in it.**',
]));
out.push(item('1', 'Why did those three habits stick, and what is the reason the writer gives?'));
out.push(item('2', 'What is the honest reason the other four have never been used?'));
out.push(item('3', 'How did the writer test his claim of eleven, and what was the result?'));
out.push(writers([
  'A stocktaking page: **the ones that stuck, with no credit claimed** → **why those and not others** → **the ones you can explain and have never done** → **where they go instead of in your head** → **one you stopped doing without noticing** → **and an honest count.**',
  '⚠ **Give the reason for the ones that stuck, and expect it to be the same reason every time.** _Each of them is attached to something I do every week._ **A habit is a frequency and not a virtue, and a page that says so is a page you can act on.**',
  '**Name the honest reason for the ones that did not.** ⚠ _Not time; each belongs to a thing I do about twice a year._ **_I have not had time_ is almost never true and always available** — **and it points at nothing you can change.**',
  '**Put the rare ones on printed paper with gaps.** ⚠ _Four headings with nothing under them._ **An empty heading works because it is embarrassing, not because it is clever** — **and nothing else has ever reliably worked on anybody.**',
  '⚠ And **test your own count against one real day.** _The Tuesday I was two hours late and the exchange was waiting._ **Mr Hariri was going to claim eleven and the day gave him three** — **and three out of eighty is a normal and a good result, which is worth knowing before you count.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own stocktaking page (80 words or more).'));
out.push(p('**WHAT STUCK AND WHAT DID NOT** _(______________ · for my own use · ______________)_   **______ that stuck, and I did not choose any of them.** ⚠ **1 ______________. 2 ______________. 3 ______________.**   **Why those and not others.** ⚠ **Each of them is attached to ______________.**   **______ I can explain and have never done.** ⚠ **______________.** **The honest reason is not time; it is ______________.**   **So they go on paper and not in my head, and here is where.** ⚠ **______________.**   **One I stopped doing and did not notice.** ⚠ **______________.**   **And one honest count.** ⚠ **______ out of about ______.** **I was going to write ______, and when I tested the others against ______________ I had done ______.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The ones that stuck, with the frequency they are attached to',
  'The honest reason for the ones that did not, and not _time_',
  'A physical place for the rare ones, with visible gaps',
  'A count tested against one real day',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their _never done_ list only**, with no excuse after it, and the room says whether any of them could be attached to a weekly moment.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full stocktaking page (180 words or more), to the shape in the writer\'s box: what stuck and why, what did not and the honest reason, where the rare ones go, one you stopped without noticing, and the tested count.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the frequency behind each habit that stuck, an honest reason that is not _time_, a physical place with visible gaps, and a count tested against one real day.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your count, and then say the day you tested it against.** ⚠ **A count with no day behind it is the number of things you can explain** — **and in this room the tested counts have run between two and four out of about eighty.** **Three habits in two years is a career\'s worth of change.** Then the sentence the cycle ends on, which is Mr Hariri\'s: **I was going to write eleven, and the Tuesday gave me three.**'));
out.push(hw('Write **the stocktaking page** for yourself. ⚠ **Test your count against one real day on which you were late** — **a named Tuesday, not a general impression** — **and then do the physical part: print the headings for the rare ones, with gaps, on the form or the folder they belong to.** **The printing is the homework; the page is only the thinking.**'));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  What you cannot yet do'));
out.push(p('**Function:** writing the list of things you still cannot do, in testable terms   ·   **Grammar:** _I cannot yet ___ without ___ · I can ___ but not ____   ·   **Pronunciation:** a limitation stated without apology or boast'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Say three things in English you still cannot do, and make each of them something a person could watch you fail at.** **_My vocabulary is limited_ is not one of them.** **_I cannot follow two people arguing on the telephone at the same time_ is** — **and the difference is whether somebody could set up the situation and see.**'));
out.push(board('My English is still quite weak in some areas.', 'I cannot yet follow two people arguing on a telephone line at the same time.'));
out.push(p('**b**  Which can be watched? **1** _My grammar is still weak._  **2** _I cannot yet follow two people arguing on a telephone at the same time._  **3** _I lack confidence._  **4** _I cannot read a sixty-page contract in a morning without a note from somebody else._  **5** _My vocabulary needs work._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a _cannot yet_ list is for?   **A** modesty   **B** **it is the only honest thing anybody can hand to a future teacher, and it is the one thing a certificate cannot say** — and **a level tells somebody what you have passed, and this tells them where to start**   **C** encouragement'));
out.push(p('**b**  Listen again. **1** What was on Ms Sweidan\'s list, and which item surprised her?   **2** What does Ms Huda say about the word _yet_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.5  Something a person could watch you fail at', [
  ['Ms Huda', 'Miss Sweidan. Three things you cannot yet do, and the rule is that somebody could watch you fail at each one.'],
  ['Lubna', '⚠ **One: I cannot follow two people arguing on a telephone line at once.** **Two: I cannot take a minute in the room and have it readable without rewriting it.** **Three: I cannot say a figure I am not sure of without my voice going up at the end.**'],
  ['Ms Huda', '**And which of those surprised you?**'],
  ['Lubna', '⚠ **The third.** **I did not know I did it until Mr Attar told me in 22.5** — **and it is the one that has cost me most, because a figure said like a question is a figure nobody writes down.**'],
  ['Ms Huda', '**Which is why the list has to be made out loud and with other people in the room.** ⚠ **The things you cannot do that you know about are the easy half.** **The other half is visible to everybody except you.**'],
  ['Omar', 'And why write it down at all?'],
  ['Ms Huda', '⚠ **Because it is the only honest thing anybody can hand to a future teacher.** **A certificate tells them what you have passed.** **This tells them where to start** — **and in nineteen years nobody has ever handed me one on the first day of a course.**'],
  ['Nour', 'Is it not rather bleak, at the end of two years?'],
  ['Ms Huda', '**It is the opposite, and the reason is the second word.** ⚠ **_Yet_.** **_I cannot do it yet_ is a sentence with a date in it somewhere, and _I cannot do it_ is a description of a person.** **The whole list depends on one three-letter word.**'],
  ['Dima', 'And how specific?'],
  ['Ms Huda', '⚠ **Specific enough that somebody could set the situation up and watch.** **_My vocabulary is limited_ cannot be watched.** **_I cannot follow two people arguing on a telephone_ can be arranged in four minutes** — **and then it can be worked on, and then it can be finished.**'],
  ['Adnan', 'And how many?'],
  ['Ms Huda', '**Three, and not ten.** ⚠ **A list of ten is a list nobody will act on, including you** — **and the three should be the three that cost you something this year, which is a different question from the three that are furthest from perfect.**'],
  ['Jad', 'And if one of them is not about English at all?'],
  ['Ms Huda', '⚠ **Then write it, and say so.** **Half of what people bring to this list turns out to be about their own organisation and not their English** — _I cannot find out what my own budget-holder controls_ — **and that is a true finding and it does not belong to a language teacher.**'],
  ['Mazen', 'And do we show the list to anybody here?'],
  ['Ms Huda', '⚠ **To one person in this room, today, and to whoever teaches you next, on the first morning.** **Not to your manager** — **that is a different document with a different purpose, and a _cannot yet_ list handed to somebody who writes your assessment will be written to be safe.** **Safe lists are the ones that say _my vocabulary is limited_.**'],
  ['Rim', 'And saying a limitation out loud?'],
  ['Ms Huda', '🔊 **Flat, with no apology before it and no boast after it.** ⚠ **People say _I am afraid I still cannot_** — **which is an apology** — **or _I cannot do it yet, although I have come a very long way_** — **which is a boast.** **The sentence needs neither and is stronger without both.**'],
]));
out.push(sp());
out.push(box('Language box – what you cannot yet do', [
  '**The rule for every item: somebody could watch you fail at it.** ⚠ _My vocabulary is limited_ **cannot be watched.** _I cannot follow two people arguing on a telephone line at once_ **can be arranged in four minutes** — **and then it can be worked on, and then it can be finished.**',
  '**The list has to be made out loud, with other people in the room.** ⚠ **The things you cannot do that you know about are the easy half; the other half is visible to everybody except you.** **Miss Sweidan did not know her voice went up on an uncertain figure until somebody told her.**',
  '⚠ **It is the only honest thing anybody can hand to a future teacher.** **A certificate says what you have passed; this says where to start** — **and in nineteen years nobody has handed one in on the first day of a course.**',
  '**And it is not bleak, because of the second word.** ⚠ **_Yet_.** **_I cannot do it yet_ is a sentence with a date in it somewhere; _I cannot do it_ is a description of a person.** **The whole list depends on one three-letter word.**',
  '**Three, and not ten.** ⚠ **A list of ten is a list nobody will act on, including you** — **and the three should be the three that cost you something this year, which is a different question from the three that are furthest from perfect.**',
  '⚠ **And if one of them is not about English at all, write it and say so.** **Half of what people bring to this list turns out to be about their own organisation** — _I cannot find out what my own budget-holder controls_ — **which is a true finding that does not belong to a language teacher.**',
  '**Pronunciation.** 🔊 **Track 24.6** **Flat, with no apology before and no boast after.** ⚠ _I am afraid I still cannot_ **is an apology;** _I cannot yet, although I have come a very long way_ **is a boast.** **The sentence needs neither and is stronger without both.**',
  '**And one thing about what this list is for after today, which is the point of writing it.** ⚠ **It goes to whoever teaches you next, on the first morning, on one side of paper.** **Not your certificate** — **the certificate will be in the file and will tell them nothing they can use before the second week.**',
  '**And one thing about the order of the three items, which decides whether anybody acts on them.** ⚠ **Put first the one that cost you something this year**, **and not the one that is furthest from perfect.** **They are different questions, and a list ordered by distance from perfection is a list that begins with the item nobody can start on.**',
  '**Practise:** Write the list. **1** one that can be watched  **2** one that somebody else told you about  **3** one with _yet_ in it  **4** one that cost you something this year  **5** one that is not about English, said as such',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the statement from the card. B rewrites it so that **somebody could watch the failure**, and says **who would have to be in the room for it to be visible.** ⚠ **Two rows on each card are not about English at all**, and B must say so. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the statement)_ __________.'],
  ['B', '**I cannot yet __________, and you could watch it if __________.**'],
]));
out.push(table(['Card A – the statement', 'Card B – the statement'], [
  ['_My grammar is still weak._', '_My vocabulary needs work._'],
  ['_⚠ I cannot find out what my own budget-holder controls._', '_⚠ Nobody tells me which clause the drafter relies on._'],
  ['_I lack confidence on the telephone._', '_I am not fluent in meetings._'],
  ['_⚠ Our office has no record of who decided what._', '_⚠ I am never told when a standard is amended._'],
  ['_My writing is too long._', '_I find fast speakers difficult._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each rewritten item and who would have to be present. ⚠ **The four rows marked ⚠ are not about English at all** — **a budget, a drafter, a record, a notification** — **and the honest answer is to say so and name whose problem each is.** **Half of what a class brings to this list is organisational, and a language teacher who accepts all of it is accepting work they cannot do.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your three**, each one watchable, each with _yet_ in it. ⚠ **Then ask your partner to add a fourth that you have not noticed** — **and write it down even if you disagree with it.**'));
out.push(p('**b**  Swap and perform. Your partner reads one of your items **with an apology in front** and then flat. ⚠ You say which one sounded like something that could be finished.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna gave three things she cannot yet do, under the rule that somebody could watch her fail at each one: she cannot follow two people arguing on a telephone line at once; she cannot take a minute in the room and have it readable without rewriting it; and she cannot say a figure she is not sure of without her voice going up at the end. The third surprised her, because she did not know she did it until Jad told her in 22.5 — and it is the one that has cost her most, because a figure said like a question is a figure nobody writes down. Which is why the list has to be made out loud and with other people in the room: the things you cannot do that you know about are the easy half, and the other half is visible to everybody except you. Omar asked why write it down at all, and because it is the only honest thing anybody can hand to a future teacher — a certificate tells them what you have passed and this tells them where to start, and in nineteen years nobody has handed one in on the first day of a course. Nour asked whether it is not rather bleak at the end of two years, and it is the opposite, and the reason is the second word: yet. I cannot do it yet is a sentence with a date in it somewhere, and I cannot do it is a description of a person. Dima asked how specific, and specific enough that somebody could set the situation up and watch. Adnan asked how many, and three and not ten, because a list of ten is a list nobody will act on. And Jad asked what happens if one of them is not about English at all, and then you write it and say so: half of what people bring to this list turns out to be about their own organisation and not their English, which is a true finding that does not belong to a language teacher. And Rim asked about saying a limitation out loud, which is flat, with no apology before it and no boast after it, because the sentence needs neither and is stronger without both._'));
out.push(p('**Listener task:** write your partner\'s three items and the fourth you added.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list Lubna writes for whoever teaches her next, and the note under it. Answer the questions.'));
out.push(model([
  '**WHAT I CANNOT YET DO** _(L. Sweidan · one side of paper · for whoever teaches me next · 6 November)_',
  '**Why you are being given this instead of my certificate.** ⚠ **The certificate says B2 and it will be in the file.** **It tells you what I have passed and nothing about where to start** — **and this page tells you three things you could watch me fail at on the first morning if you wanted to.**',
  '**1  I cannot yet follow two people arguing on a telephone line at the same time.** ⚠ **You could arrange it in four minutes with two colleagues and a handset.** **What happens is that I follow the first speaker, lose the second entirely, and then answer the first** — **and in a site meeting on a line that is what a disagreement sounds like.**',
  '**2  I cannot yet take a minute in the room and have it readable without rewriting it afterwards.** ⚠ **I can take one and rewrite it in forty minutes, so this is a speed problem and not a writing problem.** **The forty minutes are after a nine-hour day and they are the reason three minutes from July are still not circulated.**',
  '**3  I cannot yet say a figure I am not sure of without my voice going up at the end.** ⚠ **I did not know I did this.** **Mr Attar told me in October and then four other people in the room said they had noticed.** **A figure said like a question is a figure nobody writes down** — **and I have watched it happen to the thirty millimetres twice.**',
  '**And a fourth that is not about English, which I am putting here because it is true and because it is not your problem.** ⚠ **I cannot find out which of our drawings the site actually works from.** **There are three revisions in circulation and nobody records which is on the wall** — **and no amount of English will fix that.** **I am putting it on the page so that I stop bringing it to language lessons.**',
  '**What I think the order should be, and you may disagree.** ⚠ **Three first, because it is four weeks of work and it costs me something every week.** **Then one, which is months.** **Then two, which may not be a language problem at all and may be a shorthand problem.**',
  '**NOTE for myself, which I have copied onto the back.** ⚠ **The word in every item is _yet_, and I wrote the first draft without it.** **The first draft was four sentences describing a person who cannot do things** — **and the same four sentences with _yet_ in them are a plan.** **I am keeping the first draft to remind myself how close the two are.**',
]));
out.push(item('1', 'Why is the reader being given this page instead of the certificate?'));
out.push(item('2', 'Which item did the writer not know about, and how did she find out?'));
out.push(item('3', 'What does the note say about the first draft?'));
out.push(writers([
  'A _cannot yet_ page: **why this instead of a certificate** → **three items, each one watchable, with how it could be watched** → **one that is not about English, marked as such** → **the order you think they should be done in** → **and the word _yet_ in every item.**',
  '⚠ **Say how each item could be watched.** _You could arrange it in four minutes with two colleagues and a handset._ **An item with a demonstration attached is a teaching plan; the same item without one is a complaint about yourself.**',
  '**Separate a speed problem from a skill problem.** ⚠ _I can take one and rewrite it in forty minutes, so this is a speed problem and not a writing problem._ **It is the distinction that decides what the next course should spend its time on.**',
  '**Mark the item somebody else told you about.** ⚠ _I did not know I did this; Mr Attar told me and then four others said they had noticed._ **A list made alone is half a list, and saying which half came from the room tells the next teacher how to get the other half.**',
  '⚠ And **put _yet_ in every item.** **Miss Sweidan\'s first draft had none and described a person who cannot do things; the same four sentences with _yet_ are a plan.** **She kept the first draft to remind herself how close the two are.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your _cannot yet_ page (80 words or more).'));
out.push(p('**WHAT I CANNOT YET DO** _(______________ · one side of paper · for ______________)_   **Why you are being given this instead of my certificate.** ⚠ **The certificate says ______________.** **It tells you ______________ and nothing about ______________.**   **1  I cannot yet ______________.** ⚠ **You could arrange it by ______________.** **What happens is ______________.**   **2  I cannot yet ______________.** ⚠ **I can ______________, so this is a ______________ problem and not a ______________ problem.**   **3  I cannot yet ______________.** ⚠ **I did not know I did this.** **______________ told me.**   **And a fourth that is not about English.** ⚠ **______________, and no amount of English will fix it.**   **The order I think it should be in.** ⚠ **______ first, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  '_Yet_ in every item',
  'How each item could be watched, by somebody else',
  'The item somebody else told you about, marked',
  'Anything that is not about English, said as such',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one item only**, and the room says how it could be watched and who would have to be there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: why this instead of a certificate, three watchable items with demonstrations, the one that is not about English, and the order.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: _yet_ in every item, a demonstration for each, the item somebody else supplied marked, and anything that is not about English said as such.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your three items, flat, with no apology in front and no boast after.** ⚠ **The room listens for both, and both are audible** — **and then adds a fourth to each speaker, which must be written down even where the speaker disagrees.** **In this class the fourth has been the item people worked on first, about half the time.** Then the sentence the cycle ends on, which is Miss Sweidan\'s: **the first draft was four sentences describing a person who cannot do things.**'));
out.push(hw('Write **your _cannot yet_ page**, three items and a fourth from somebody else, with _yet_ in every one. ⚠ **Then do the thing it is for: give it to whoever teaches you next, on the first morning, on one side of paper.** **If there is no next course yet, give it to the person you work most closely with** — **because the half of the list you cannot see is in their hands and nowhere else.**'));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  The sentence you will be asked for next'));
out.push(p('**Function:** saying what the next level will require that this one did not   ·   **Grammar:** _at B2 I was asked to ___; at C1 I shall be asked to ____   ·   **Pronunciation:** a long sentence held to the end without a reset'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Take any model in this book and ask what a harder version would require.** **Not longer and not more words** — **harder.** **In most cases the answer is that two things have to be held in one sentence instead of in two**, **and that is the whole of the next level in one observation.**'));
out.push(board('At the next level I suppose everything is just more advanced.', 'At B2 I give the news and then the reason. At C1 the reason has to be inside the news sentence.'));
out.push(p('**b**  Which describes a real step up? **1** _More vocabulary._  **2** _Longer essays._  **3** _At B2 the news and the reason are two sentences; at C1 the reason is inside the news sentence and it still does not sound negotiable._  **4** _Fewer mistakes._  **5** _At B2 I report two accounts and then say which governs; at C1 I have to say which governs while reporting them, without the reader seeing me choose._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the step from B2 to C1 actually is?   **A** more words   **B** **holding two things in one sentence that B2 keeps in two** — and **the B2 version is not wrong; it is visible, and at C1 the work has to stop being visible**   **C** fewer errors'));
out.push(p('**b**  Listen again. **1** What is the example Ms Huda gives from Unit 20?   **2** What does she say about students who try to write at C1 too early?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.7  Two things in one sentence', [
  ['Ms Huda', 'The last question anybody asks me on the last morning: what is next? And the answer is not more words.'],
  ['Dima', '**What is it, then?**'],
  ['Ms Huda', '⚠ **Holding two things in one sentence that B2 keeps in two.** **That is the whole step, and it is harder than it sounds.**'],
  ['Omar', 'Give us one.'],
  ['Ms Huda', '⚠ **Unit 20.** **At B2 you write _we cannot print the order by 2 April_ and then, in a separate sentence, the reason.** **We taught you to keep them apart, because an explanation inside the news makes the news sound negotiable.**'],
  ['Dima', '**And at C1 you put them together without that happening.**'],
  ['Ms Huda', '**Yes, and the way it is done is not by being clever with the grammar.** ⚠ _We cannot print the order by 2 April, the roller having been out since the sixth of March._ **The reason is inside the sentence and it is in a form that cannot be argued with, because it is a fact with a date and not a plea.**'],
  ['Nour', 'Is the B2 version wrong, then?'],
  ['Ms Huda', '⚠ **No, and this matters.** **The B2 version is not wrong; it is visible.** **A reader can see the writer making a decision about order** — **and at C1 the work stops being visible, which is the only honest description of the difference.**'],
  ['Adnan', 'And what happens if we try it now?'],
  ['Ms Huda', '**You write the C1 sentence badly and lose the B2 result, which is the commonest way a good writer goes backwards.** ⚠ **Every year somebody reads this far and starts putting reasons inside news sentences in March** — **and by May their letters are being argued with, and they cannot tell why.**'],
  ['Rim', 'So when?'],
  ['Ms Huda', '⚠ **When the B2 version is automatic and not before.** **Mr Hariri\'s three habits took four months each, and the news sentence was the longest of the three** — **and you do not build on a thing you still have to remember.**'],
  ['Jad', 'And is there anything we should do now?'],
  ['Ms Huda', '**One thing, and it costs nothing.** ⚠ **Keep the list.** **Take any three models from these two books and write, for each, what the harder version would have to hold** — **and put it with the _cannot yet_ page.** **It is the only piece of paper that tells your next teacher what you are ready for rather than what you lack.**'],
  ['Nour', 'And is the list the same for all of us?'],
  ['Ms Huda', '⚠ **No, and that is the only reason it is worth writing.** **Ms Khoury is ready to build on the contradiction and not on the two accounts; Mr Hariri is ready on the figure and the test card and on nothing else.** **A readiness page that matches somebody else\'s is a page copied from the syllabus** — **and the syllabus is not a statement about any particular person.**'],
  ['Lubna', 'And reading a long sentence out loud?'],
  ['Ms Huda', '🔊 **To the end, without resetting in the middle.** ⚠ **A sentence that holds two things has a point about two-thirds through where the voice wants to start again** — _we cannot print the order by the second of April_, **pause**, _the roller having been_ — **and the reset is where the sentence becomes two again.**'],
]));
out.push(sp());
out.push(box('Language box – the sentence you will be asked for next', [
  '**The step is not more words.** ⚠ **It is holding two things in one sentence that B2 keeps in two** — **and that is the whole of it, and it is harder than it sounds.**',
  '**The example from Unit 20.** ⚠ **At B2:** _we cannot print the order by 2 April_, **and the reason in a separate sentence.** **At C1:** _we cannot print the order by 2 April, the roller having been out since the sixth of March._ **The reason is inside and it cannot be argued with, because it is a fact with a date and not a plea.**',
  '⚠ **The B2 version is not wrong; it is visible.** **A reader can see the writer making a decision about order** — **and at C1 the work stops being visible, which is the only honest description of the difference.**',
  '**And what happens if you try it early.** ⚠ **You write the C1 sentence badly and lose the B2 result**, **which is the commonest way a good writer goes backwards.** **Every year somebody starts putting reasons inside news sentences in March, and by May their letters are being argued with and they cannot tell why.**',
  '**So: when the B2 version is automatic and not before.** ⚠ **Mr Hariri\'s habits took four months each and the news sentence was the longest of the three** — **and you do not build on a thing you still have to remember.**',
  '⚠ **One thing to do now, and it costs nothing: keep the list.** **Take three models from these two books and write, for each, what the harder version would have to hold.** **Put it with the _cannot yet_ page** — **it is the only paper that tells your next teacher what you are ready for rather than what you lack.**',
  '**Pronunciation.** 🔊 **Track 24.8** **To the end, without resetting in the middle.** ⚠ **A sentence holding two things has a point about two-thirds through where the voice wants to begin again** — **and the reset is where the sentence becomes two again.**',
  '**And one more pair, from Unit 14, because the pattern repeats across the whole book.** ⚠ **At B2 you report two accounts and then say which governs.** **At C1 you say which governs while reporting them, without the reader seeing you choose** — **and it is the same move: two things in one place, and the work invisible.**',
  '**And one thing that is true of every pair in this cycle and is easy to miss.** ⚠ **The harder version is never longer.** **_We cannot print the order by 2 April, the roller having been out since the sixth of March_ is shorter than the two sentences it replaces** — **which is the clearest sign that the step is not about adding anything.**',
  '**Practise:** Describe the step. **1** from Unit 20  **2** from Unit 14  **3** from Unit 21  **4** one where the B2 version is better for now, and why  **5** one in speech rather than writing',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the B2 move from the card. B says **what the harder version would have to hold in one place**, and **whether it is worth attempting yet.** ⚠ **Two rows on each card have no harder version** — the B2 form is the professional form — **and B must say so.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the B2 move)_ __________.'],
  ['B', '**The harder version holds __________ and __________ in one __________, and it is / is not worth trying yet because __________.**'],
]));
out.push(table(['Card A – the B2 move', 'Card B – the B2 move'], [
  ['_The news first, the reason in the next sentence._', '_Two accounts, then which governs._'],
  ['_⚠ The figure with its unit, never separated._', '_⚠ Both limits of a band, both stated._'],
  ['_The criterion, then the method beside it._', '_The ask, then the cost, then the date._'],
  ['_⚠ The amendment list read before the clauses._', '_⚠ The question written down before the document is opened._'],
  ['_What you are not asking for, in its own paragraph._', '_The silence, the figure, and then the person._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the harder version, and whether it is worth trying yet. ⚠ **The four rows marked ⚠ have no harder version at all** — **a figure with its unit, both limits of a band, the amendment list first, the question before the document** — **because they are not stylistic choices but procedures, and a procedure done invisibly is a procedure not done.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **three models** from either book. ⚠ **For each, write what the harder version would have to hold in one place** — **and then say, honestly, whether the B2 version is automatic for you yet.**'));
out.push(p('**b**  Swap and perform. Your partner reads one of your C1 sentences **with a reset two-thirds through** and then to the end. ⚠ You say which one was still one sentence.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The last question anybody asks on the last morning is what comes next, and the answer is not more words. It is holding two things in one sentence that B2 keeps in two, and that is the whole step, and it is harder than it sounds. Omar asked for an example, and Unit 20: at B2 you write we cannot print the order by the second of April and then, in a separate sentence, the reason — and the class was taught to keep them apart, because an explanation inside the news makes the news sound negotiable. Dima said that at C1 you put them together without that happening, and the way it is done is not by being clever with the grammar: we cannot print the order by the second of April, the roller having been out since the sixth of March. The reason is inside the sentence and it is in a form that cannot be argued with, because it is a fact with a date and not a plea. Nour asked whether the B2 version is wrong, and no, and this matters: the B2 version is not wrong but visible, because a reader can see the writer making a decision about order — and at C1 the work stops being visible, which is the only honest description of the difference. Adnan asked what happens if they try it now, and you write the C1 sentence badly and lose the B2 result, which is the commonest way a good writer goes backwards. Rim asked when, and when the B2 version is automatic and not before. And Jad asked whether there is anything to do now: keep the list, take three models and write what the harder version would have to hold, and put it with the cannot yet page — which is the only piece of paper that tells a next teacher what a student is ready for rather than what they lack. And Lubna asked about reading a long sentence out loud: to the end, without resetting in the middle, because a sentence that holds two things has a point about two-thirds through where the voice wants to start again, and the reset is where the sentence becomes two again._'));
out.push(p('**Listener task:** write your partner\'s three harder versions and whether the B2 form is automatic for them.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Dima writes to keep with her _cannot yet_ list, and the note under it. Answer the questions.'));
out.push(model([
  '**WHAT I AM READY FOR** _(D. Khoury · to be kept with the _cannot yet_ page · 8 November)_',
  '**Why this page exists.** ⚠ **The other page says what I cannot do.** **This one says what the next level would ask of me, in three specific places** — **and between them they are the only two pieces of paper that would be of any use to a teacher on a first morning.**',
  '**1  From Unit 20 — the news and the reason.** **At B2 I write the news and then the reason, in two sentences, and I was taught to keep them apart.** ⚠ **The harder version holds both in one, with the reason in a form that cannot be argued with:** _we cannot print the order by 2 April, the roller having been out since the sixth of March._ **Is the B2 version automatic for me? Yes, since about June.**',
  '**2  From Unit 14 — two accounts and which governs.** **At B2 I report both and then say which governs.** ⚠ **The harder version says which governs while reporting them, without the reader seeing me choose.** **Is the B2 version automatic? No.** **I still write the two accounts and then stop, and somebody has to ask me what I think** — **so this one is not ready to be built on.**',
  '**3  From Unit 23 — the contradiction.** **At B2 I give both sentences and then the two reasons.** ⚠ **The harder version gives the governing sentence first, with the other one inside it as a subordinate clause, so that the reader never has to hold two candidates at once.** **Automatic? Yes, and this is the one I shall try.**',
  '**Three things I am not going to attempt, and why.** ⚠ **The figure with its unit.** **Both limits of a band.** **The question written before the document is opened.** **None of these has a harder version, because they are procedures and not choices** — **and a procedure done invisibly is a procedure not done.**',
  '**And the thing I have understood about the whole of this.** ⚠ **The step is not from simple to complicated.** **It is from visible to invisible.** **Everything in these two books was taught in a form where the reader can see the method working** — **and that is why it can be learned, and it is also why it is not the finished article.**',
  '**NOTE for myself.** ⚠ **I was going to put all eleven models on this page.** **Then I asked the question about each one** — _is the B2 version automatic?_ — **and the answer was yes for three of them.** **The other eight are not a C1 list; they are the B2 list, still.**',
]));
out.push(item('1', 'Why are there two pages rather than one?'));
out.push(item('2', 'Which of the three is not ready to be built on, and why?'));
out.push(item('3', 'What does the note say happened when she asked the question about each model?'));
out.push(writers([
  'A readiness page: **why it exists, beside the _cannot yet_ page** → **three B2 moves, each with its harder version** → **whether the B2 version is automatic, item by item** → **the ones with no harder version, and why** → **and what you have understood about the whole step.**',
  '⚠ **Ask the question of every item and write the answer.** _Is the B2 version automatic for me? No._ **An item with _no_ against it is more useful than one with _yes_, because it tells the next teacher where the real work is.**',
  '**Give the harder version in full, not in description.** ⚠ _We cannot print the order by 2 April, the roller having been out since the sixth of March._ **A described step is a wish; a written sentence can be judged.**',
  '**Say which moves have no harder version.** ⚠ _They are procedures and not choices, and a procedure done invisibly is a procedure not done._ **It is the sentence that stops a good student spoiling three working habits in an attempt to grow out of them.**',
  '⚠ And **name the step in one sentence of your own.** _It is not from simple to complicated; it is from visible to invisible._ **Everything in both books was taught in a form where the reader can see the method working** — **which is why it can be learned and why it is not the finished article.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your readiness page (80 words or more).'));
out.push(p('**WHAT I AM READY FOR** _(______________ · to be kept with the _cannot yet_ page · ______________)_   **Why this page exists.** ⚠ **The other page says ______________.** **This one says ______________.**   **1  From Unit ______ — ______________.** **At B2 I ______________.** ⚠ **The harder version holds ______________ in one ______________:** _______________. **Is the B2 version automatic? ______.**   **2  From Unit ______ — ______________.** ⚠ **The harder version ______________.** **Automatic? ______, because ______________.**   **Things I am not going to attempt, and why.** ⚠ **______________.** **None of these has a harder version, because ______________.**   **And what I have understood.** ⚠ **The step is not from ______________ to ______________. It is from ______________ to ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The harder version written out in full, not described',
  'The automatic question answered for every item',
  'The moves with no harder version, with the reason',
  'The step named in one sentence of your own',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one harder version only**, and the room says whether it is still one sentence and whether the reason inside it could be argued with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full readiness page (180 words or more), to the shape in the writer\'s box: why it exists, three moves with their harder versions, the automatic question answered, the procedures that have no harder version, and the step named.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the harder version written out in full, the automatic question answered for each, the procedures excluded with a reason, and the step named in one sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read one harder version, to the end, without resetting two-thirds through.** ⚠ **The room says whether it was one sentence or two** — **and then answers the question that decides everything: is the B2 version automatic for this speaker?** **In this class the honest answer has been yes for two or three models out of eleven.** Then the sentence the cycle ends on, which is Ms Khoury\'s: **the other eight are not a C1 list; they are the B2 list, still.**'));
out.push(hw('Write **the readiness page**: three models, three harder versions written out in full, and the automatic question answered for each. ⚠ **Then put it with your _cannot yet_ page and keep them together** — **the two of them are one document, and the one without the other is either a complaint or a boast.**'));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  Telling somebody else what the course was for'));
out.push(p('**Function:** explaining to a colleague what two years of this was for, without a syllabus   ·   **Grammar:** _it is not a course in ___; it is a course in ____   ·   **Pronunciation:** a definition said once and not elaborated'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **A colleague asks what the course was.** **You have about fifteen seconds before they stop listening.** **Say it** — **and notice that the first attempt is always a list of topics, which is the one answer that tells them nothing.**'));
out.push(board('We did letters, meetings, reports, specifications, proposals and reading.', 'It is not a course in English. It is a course in saying the difficult sentence in writing.'));
out.push(p('**b**  Which tells a colleague something? **1** _We covered letters, meetings and reports._  **2** _It is not a course in English; it is a course in saying the difficult sentence in writing._  **3** _It was a B2 course._  **4** _It taught me to put the thing somebody will not like in the first line and the kindness after it._  **5** _It was very useful._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is wrong with a list of topics?   **A** nothing; it is accurate   **B** **it is accurate and it describes nothing** — and **the person asking wants to know what you can now do that you could not, and a topic list answers a different question**   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What did Mr Tahhan say the course was, and what did his nephew say back?   **2** What does Ms Huda say about the second sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.9  Fifteen seconds in a doorway', [
  ['Ms Huda', 'Mr Tahhan. Your nephew asked you what the course was. What did you say?'],
  ['Bassel', '**Letters, meetings, reports, specifications, proposals and long documents.** ⚠ **Six words of topics, and he said: so, English.**'],
  ['Ms Huda', '**And was he wrong?**'],
  ['Bassel', '⚠ **No, and that is what annoyed me.** **Everything I said was true and none of it told him anything.**'],
  ['Ms Huda', '**Which is the problem with a topic list and it is not that it is inaccurate.** ⚠ **The person asking wants to know what you can now do that you could not** — **and a list of topics answers a different question, which is what the timetable contained.**'],
  ['Nour', 'So what is the form?'],
  ['Ms Huda', '**Two sentences.** ⚠ **What it is not, and what it is.** _It is not a course in English; it is a course in saying the difficult sentence in writing._ **And then stop.**'],
  ['Omar', 'Why what it is not?'],
  ['Ms Huda', '⚠ **Because the listener has already decided what it is** — **and if you do not displace that, everything you say afterwards is heard as detail about their own idea.** **This is 20.1 and 22.1 arriving in speech: the thing that displaces has to come first.**'],
  ['Bassel', '**And the second sentence has to be mine and not a slogan.**'],
  ['Ms Huda', '**It has to be the thing you actually got, which is different for each of you.** ⚠ **Mr Hariri would say it is a course in writing down what you test.** **Ms Shaaban would say it is a course in writing a line that can be failed.** **Both are true and neither is the syllabus.**'],
  ['Dima', 'And if they ask for more?'],
  ['Ms Huda', '⚠ **Then give one example and no second example.** **One is evidence; two is a lesson, and nobody asked for a lesson in a doorway.**'],
  ['Rim', 'And what if they ask whether it was worth it?'],
  ['Ms Huda', '**Then you need a figure, and you have one, from 22.2.** ⚠ _My disputes at the gate went from eleven a year to one._ **Not _it was very useful_** — **which is the sentence that has closed more training budgets than any refusal.**'],
  ['Adnan', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Once, and not elaborated.** ⚠ **People say the two sentences and then keep going** — _if you see what I mean, it is quite hard to explain really_ — **and the elaboration cancels the definition.** **Say it, stop, and let them ask.**'],
]));
out.push(sp());
out.push(box('Language box – telling somebody else what the course was for', [
  '**A list of topics is accurate and describes nothing.** ⚠ **The person asking wants to know what you can now do that you could not** — **and a topic list answers a different question, which is what the timetable contained.** **Mr Tahhan gave six topics and his nephew said: _so, English._**',
  '**Two sentences: what it is not, and what it is.** ⚠ _It is not a course in English; it is a course in saying the difficult sentence in writing._ **And then stop.**',
  '⚠ **The negative comes first because the listener has already decided what it is** — **and if you do not displace that, everything afterwards is heard as detail about their own idea.** **This is 20.1 and 22.1 arriving in speech: the thing that displaces goes first.**',
  '**The second sentence has to be yours and not a slogan.** ⚠ **Mr Hariri: _a course in writing down what you test._** **Ms Shaaban: _a course in writing a line that can be failed._** **Both true, and neither of them is the syllabus.**',
  '**If they ask for more, one example and no second example.** ⚠ **One is evidence; two is a lesson, and nobody asked for a lesson in a doorway.**',
  '⚠ **And if they ask whether it was worth it, you need a figure and you have one.** _My disputes at the gate went from eleven a year to one._ **Not _it was very useful_** — **which is the sentence that has closed more training budgets than any refusal.**',
  '**Pronunciation.** 🔊 **Track 24.10** **Once, and not elaborated.** ⚠ **People say the two sentences and then keep going** — _if you see what I mean, it is quite hard to explain really_ — **and the elaboration cancels the definition.** **Say it, stop, and let them ask.**',
  '**And one thing about who asks, because it changes nothing and people think it should.** ⚠ **A colleague, a manager and somebody at a family gathering all get the same two sentences.** **The figure is for the manager if they ask for it** — **and the temptation to give the manager a longer answer is the temptation to give them the syllabus.**',
  '**And one thing about the fifteen seconds, which sound arbitrary and are not.** ⚠ **It is the length of a doorway, a lift and the end of a meeting** — **the three places this question is actually asked.** **Nobody has ever asked what a course was while sitting down with time in hand, and an answer built for that occasion will never be delivered.**',
  '**Practise:** Say it in fifteen seconds. **1** what it is not  **2** what it is, in your own words  **3** one example, and no second  **4** the figure, if they ask whether it was worth it  **5** the same two sentences for somebody who is not a colleague',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the person asking, from the card. B answers in **two sentences and fifteen seconds**, and then stops. ⚠ **A must not help**, and in **two rows on each card A asks whether it was worth it**, which needs the figure and not the definition. Swap roles.'));
out.push(dlg(null, [
  ['A', '_(the question)_ __________?'],
  ['B', '**It is not a course in __________. It is a course in __________.** _(and nothing after it)_'],
]));
out.push(table(['Card A – who is asking', 'Card B – who is asking'], [
  ['_A colleague in the corridor: what was that course?_', '_Your manager, in a lift: so what did you get out of it?_'],
  ['_⚠ The person who signs the training budget: was it worth it?_', '_⚠ A supplier who paid for his own: has it earned anything back?_'],
  ['_Your brother, at a family lunch: what have you been doing?_', '_A new colleague: should I do it?_'],
  ['_⚠ The finance manager, in writing: what did the eleven places cost us?_', '_⚠ A committee, in a meeting: justify next year._'],
  ['_Somebody who did the first book only: what is in the second?_', '_A teacher from another school: what is it, exactly?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two sentences, and whether the speaker stopped. ⚠ **The four rows marked ⚠ are asking whether it was worth it, which is a different question** — **and the answer is a figure from 22.2 and not a definition.** **_It was very useful_ is the answer to catch, and somebody always gives it.** **It is the sentence that has closed more training budgets than any refusal.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Say **your own two sentences**, and let your partner time fifteen seconds. ⚠ **Then say the figure you would give if they asked whether it was worth it** — **and if you have no figure, say so, and say where you would get one.**'));
out.push(p('**b**  Swap and perform. Your partner says your two sentences **and then elaborates** and then says them and stops. ⚠ You say which version you would have believed in a doorway.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Bassel\'s nephew asked him what the course was, and he said: letters, meetings, reports, specifications, proposals and long documents. Six words of topics, and the nephew said: so, English. Asked whether the nephew was wrong, Bassel said no, and that is what annoyed him — everything he said was true and none of it told the boy anything. Which is the problem with a topic list, and it is not that it is inaccurate: the person asking wants to know what you can now do that you could not, and a list of topics answers a different question, which is what the timetable contained. Nour asked what the form is, and two sentences: what it is not, and what it is. It is not a course in English; it is a course in saying the difficult sentence in writing. And then stop. Omar asked why what it is not, and because the listener has already decided what it is, and if you do not displace that, everything you say afterwards is heard as detail about their own idea — which is 20.1 and 22.1 arriving in speech, because the thing that displaces has to come first. Bassel said the second sentence has to be his and not a slogan, and it has to be the thing he actually got, which is different for each of them: Mazen would say it is a course in writing down what you test, and Rim would say it is a course in writing a line that can be failed, and both are true and neither is the syllabus. Dima asked what to do if they want more, and one example and no second example, because one is evidence and two is a lesson and nobody asked for a lesson in a doorway. And Rim asked what to say if they ask whether it was worth it: a figure, and the class has one — my disputes at the gate went from eleven a year to one, and not it was very useful, which is the sentence that has closed more training budgets than any refusal. And Adnan asked about saying it out loud, which is once and not elaborated, because people say the two sentences and then keep going, and the elaboration cancels the definition._'));
out.push(p('**Listener task:** write your partner\'s two sentences and their figure.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Bassel sends to his nephew, and the note under it. Answer the questions.'));
out.push(model([
  '**TO ANAS, WHO ASKED ME IN A DOORWAY AND GOT A BAD ANSWER** _(B. Tahhan · 11 November)_',
  '**What I said, and it was useless.** ⚠ **Letters, meetings, reports, specifications, proposals and long documents.** **Every word true, and you said: _so, English._** **You were right and I was annoyed, which is how I know you were right.**',
  '**What it is not.** ⚠ **It is not a course in English.** **I had the English before I started; I have been printing for nineteen years and I read manuals in it.**',
  '**What it is.** ⚠ **It is a course in writing the sentence somebody will not like, and putting it first.** **That is the whole of it for me, and it is one sentence, and it took two years.**',
  '**One example, and I am giving you one and not two.** ⚠ **In March I wrote a customer four paragraphs about a late order and the news was in the fourth.** **He telephoned at eight the next morning having read the first paragraph and thought the letter was about the price.** **The letter I wrote in May was nine words long at the top and a third shorter overall** — **and he placed the order elsewhere, and we are still printing for him in November, which is the part I had not expected.**',
  '**Whether it was worth it, since you will ask your father and he will ask me.** ⚠ **Two figures.** **The customer letters I have had to withdraw this year: none, against two last year.** **And the time I spend on a difficult letter: about twenty minutes, against something over an hour** — **because most of the hour used to be spent arranging the order of the paragraphs, and I no longer have to decide the order.**',
  '**What I would say to you about doing it, since that is the real question.** ⚠ **Do not do it for the certificate.** **Do it if there is a sentence you have been avoiding writing for a year** — **and if there is not, wait until there is, because the course is only useful to somebody who already has a letter they cannot write.**',
  '**NOTE for my own file, which Anas does not get.** ⚠ **I wrote four drafts of this and the first three all began with the topics.** **I could not get rid of them** — **they are what I have, in order, with dates, and they feel like the answer.** **The fourth draft begins with what it is not, and the topics are nowhere in it at all.**',
]));
out.push(item('1', 'Why does the writer say his first answer was useless?'));
out.push(item('2', 'What two figures does he give, and what explains the second?'));
out.push(item('3', 'What does the note say about the first three drafts?'));
out.push(writers([
  'A letter explaining the course: **what you said and why it was useless** → **what it is not** → **what it is, in one sentence of your own** → **one example and no second** → **two figures, if anybody will ask whether it was worth it** → **and what you would say to the person about doing it.**',
  '⚠ **Put the negative first and make it specific to you.** _It is not a course in English; I had the English before I started._ **A general negative is a slogan; this one is a fact about the writer and cannot be argued with.**',
  '**One example, and let it be a story with a figure in it.** ⚠ _Four paragraphs in March, nine words in May, and he is still a customer in November._ **One example is evidence; two is a lesson, and a letter that gives two has stopped answering the question that was asked.**',
  '**Give the second figure as well as the first, because the second is the surprising one.** ⚠ _About twenty minutes against something over an hour, because the hour used to be spent arranging the order of the paragraphs._ **The time saved is the figure nobody expects and the one managers remember.**',
  '⚠ And **answer the real question honestly, including the discouraging half.** _Do it if there is a sentence you have been avoiding writing for a year; and if there is not, wait until there is._ **A recommendation with a condition on it is believed; one without is read as politeness.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter explaining the course (80 words or more).'));
out.push(p('**TO ______________** _(______________ · ______________)_   **What I said, and it was useless.** ⚠ **______________.** **Every word true, and you said: _______________.**   **What it is not.** ⚠ **It is not ______________.** **I ______________ before I started.**   **What it is.** ⚠ **It is a course in ______________.** **That is the whole of it for me.**   **One example, and I am giving you one and not two.** ⚠ **______________.**   **Whether it was worth it.** ⚠ **Two figures. ______________, against ______________. And ______________, against ______________.**   **What I would say to you about doing it.** ⚠ **Do not do it for ______________. Do it if ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What it is not, specific to you and not a slogan',
  'What it is, in one sentence of your own',
  'One example with a figure in it, and no second example',
  'A recommendation with a condition on it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their two sentences only**, and the room says whether a colleague in a doorway would have understood them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more), to the shape in the writer\'s box: the useless answer, what it is not, what it is, one example, the two figures, and the conditional recommendation.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a negative specific to you, one sentence of your own, one example with a figure, no second example, and a recommendation with a condition.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your two sentences and stop, and let the room time the silence afterwards.** ⚠ **Almost everybody keeps going** — _if you see what I mean_, _it is quite hard to explain_ — **and the elaboration cancels the definition.** **Then say how many drafts it took you to get the topics out of the first line.** Then the sentence the cycle ends on, which is Mr Tahhan\'s: **the first three drafts all began with the topics, and I could not get rid of them.**'));
out.push(hw('Write **the letter to somebody who asked you what the course was** — **a colleague, a relative, a manager** — **with the two sentences, one example, two figures and a conditional recommendation.** ⚠ **Then send it.** **It is the last piece of homework in the book and it is the only one with a reader who did not know they were waiting for it.**'));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  Opening the letters'));
out.push(p('**Function:** reading your own sealed letter beside your guess, and writing the next one   ·   **Grammar:** _I wrote ___; I guessed ___; the difference is ____   ·   **Pronunciation:** your own old words read aloud at ordinary speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  ⚠ **The envelope is opened at the start of this cycle and not before.** **Each student is given two pieces of paper at once: the letter they sealed at the end of the first book, and the guess they wrote in 24.1.** **Read both, to yourself, and say nothing for four minutes.** **There is no task in the four minutes.**'));
out.push(board('Well, I was not far off, really, if you think about it.', 'I wrote: I want to answer a complaint alone. I guessed: I wanted to be more confident.'));
out.push(p('**b**  Which is a usable comparison? **1** _I was not far off._  **2** _I wrote: I want to answer a complaint alone. I guessed: I wanted to be more confident._  **3** _It was more or less what I expected._  **4** _I was completely wrong._  **5** _I wrote something I have done and forgotten was hard; I guessed something I am still trying to do._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda ask the class to do after reading both papers?   **A** read the letter aloud   **B** **say the two sentences and the difference between them, and nothing else** — and **the difference is the only finding, and any account of why is a defence**   **C** explain how they have changed'));
out.push(p('**b**  Listen again. **1** What were Ms Sabbagh\'s two sentences?   **2** What does Ms Huda say the new letter must contain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.11  Both pieces of paper at once', [
  ['Ms Huda', 'Four minutes, and nobody says anything. Then two sentences and the difference, and nothing else. Ms Sabbagh.'],
  ['Nour', '⚠ **I wrote: _I want to be able to answer an escalation without asking somebody to check the letter._** **I guessed: _I wanted to be more confident on the telephone._**'],
  ['Ms Huda', '**And the difference?**'],
  ['Nour', '⚠ **The letter is about a letter and the guess is about the telephone.** **I have changed what I think the problem was.**'],
  ['Ms Huda', '**That is the finding and it is enough.** ⚠ **Do not explain it.** **Every account of why is a defence of somebody who is not in the room** — **and we established that in 24.1.**'],
  ['Omar', '**Mine is the other way round.** ⚠ **I wrote something I now do every week and I had forgotten it was ever difficult.**'],
  ['Ms Huda', '**Say what it was.**'],
  ['Omar', '⚠ _I want to tell a supplier that his figure is wrong without it becoming an argument._ **I did it on Tuesday and I did not notice doing it.**'],
  ['Ms Huda', '**Which is the rarer direction and the one nobody can feel.** ⚠ **Learning is invisible from the inside** — **and the only evidence anybody ever gets of their own is a piece of paper they wrote before it happened.**'],
  ['Dima', 'And now we write the next one.'],
  ['Ms Huda', '**Now you write the next one, and it has three things in it and not one.** ⚠ **One sentence about what you want to be able to do.** **The _cannot yet_ list from 24.3.** **And the date you will open it.**'],
  ['Adnan', 'Why the date, when nobody set one last time?'],
  ['Ms Huda', '⚠ **Because nobody set one last time and the envelope was opened because a course ended.** **If there is no course next time there is no envelope-opening** — **so the date goes on the outside, and somebody who is not you has to be the one who keeps it.**'],
  ['Rim', '**And who keeps it?**'],
  ['Ms Huda', '**Somebody who will still be at your work in two years and who is not your closest friend there.** ⚠ **A friend will give it back when you ask for it early.** **The point of a sealed letter is that you cannot get at it** — **and in the last class two people chose the registry clerk, which is exactly right.**'],
  ['Mazen', 'And what if somebody has lost their letter?'],
  ['Ms Huda', '⚠ **Then they have their guess, which is a piece of paper written three weeks ago about a letter they cannot check** — **and that is a smaller exercise and a real one.** **Two have lost theirs in eleven years, and both of them wrote the next letter and gave it to a registry clerk, which is the part that matters.**'],
  ['Lubna', 'And reading our own old words out loud?'],
  ['Ms Huda', '🔊 **At ordinary speed, as written, and only if you want to.** ⚠ **Nobody is asked to read their letter aloud and nobody will be.** **Some of you will and some of you will not, and both are complete** — **and I shall not ask twice, which I said on the first morning of this unit.**'],
]));
out.push(sp());
out.push(box('Language box – opening the letters', [
  '**Four minutes, both papers, and no task.** ⚠ **Then two sentences and the difference, and nothing else.** **Every account of why is a defence of somebody who is not in the room.**',
  '**The common direction.** ⚠ _I wrote: I want to answer an escalation without asking somebody to check the letter._ _I guessed: I wanted to be more confident on the telephone._ **The difference: the letter is about a letter and the guess is about the telephone** — **the writer has changed what she thinks the problem was.**',
  '**The rare direction, and nobody can feel it.** ⚠ _I want to tell a supplier his figure is wrong without it becoming an argument_ — **done on Tuesday, and not noticed.** **Learning is invisible from the inside, and the only evidence anybody gets of their own is a piece of paper written before it happened.**',
  '**The new letter has three things in it and not one.** ⚠ **1 One sentence about what you want to be able to do.** **2 The _cannot yet_ list from 24.3.** **3 The date you will open it.**',
  '⚠ **The date goes on the outside, because last time the envelope was opened only because a course ended.** **If there is no course next time, there is no opening** — **so the date is on the envelope and somebody who is not you keeps it.**',
  '**And who keeps it: somebody who will still be at your work in two years and who is not your closest friend there.** ⚠ **A friend will give it back when you ask for it early, and the point of a sealed letter is that you cannot get at it.** **Two people in the last class chose the registry clerk, which is exactly right.**',
  '**Pronunciation.** 🔊 **Track 24.12** **At ordinary speed, as written, and only if you want to.** ⚠ **Nobody is asked to read their letter aloud and nobody will be.** **Some will and some will not, and both are complete.**',
  '**And one thing about the four minutes, which is the part a teacher is tempted to shorten.** ⚠ **They are not reading time; they are the only unstructured minutes in two books.** **Everything else in these two volumes has a task attached to it** — **and the one piece of evidence a student has about their own two years deserves four minutes with nothing asked of them.**',
  '**And one thing about silence in this cycle, which has to be said in advance or it is not believed.** ⚠ **Nobody is asked to read their letter aloud and nobody will be.** **Some will speak and some will not, and both are complete** — **and _nothing_ is a whole answer, which the teacher says once on the first morning of the unit and then honours.**',
  '**Practise:** Say it in two sentences. **1** what you wrote  **2** what you guessed  **3** the difference, with no account of why  **4** the new sentence  **5** the date and the keeper',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, with your own two papers in front of you. A says **the two sentences and the difference, and then stops.** B says nothing except **thank you**, and then takes a turn. ⚠ **Neither of you asks why.** **If a pair finds that one of them has nothing to say, that is complete** — **say so and move on.** Then change pairs once and do it again.'));
out.push(dlg(null, [
  ['A', '**I wrote: __________. I guessed: __________. The difference is __________.**'],
  ['B', '**Thank you.**'],
]));
out.push(table(['What to listen for', 'What not to do'], [
  ['_The two sentences, as written._', '_⚠ Ask why._'],
  ['_Whether the drift is small-to-large or large-to-small._', '_⚠ Say _that is not really a difference_._'],
  ['_⚠ The rare one: something done and forgotten to be hard._', '_⚠ Offer an interpretation._'],
  ['_Silence, which is a complete answer._', '_⚠ Fill it._'],
  ['_⚠ Whether the speaker defended the old sentence._', '_⚠ Help them defend it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('No performance in this cycle. ⚠ **Instead, the room hears one thing from the teacher and nothing from anybody else:** **the count.** **How many of the twelve guessed small-to-large, how many large-to-small, how many close, and how many found something they had done and forgotten.** **No names and no letters** — **the count is the only public finding of the cycle, and it is the finding this unit was built to produce.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the new letter**: one sentence about what you want to be able to do, the _cannot yet_ list from 24.3, and the date you will open it. ⚠ **Then write the date on the outside of the envelope and the name of the person who will keep it.**'));
out.push(p('**b**  Swap the envelopes — not the letters — and check each other\'s **outside**: a date, a keeper\'s name, and nothing else. ⚠ **An envelope with no keeper is a letter you will open in March.**'));
out.push(stage('4R', 'Report – the count', 6));
out.push(p('Tell the class:  _Four minutes, and nobody said anything, and then two sentences and the difference and nothing else. Nour wrote: I want to be able to answer an escalation without asking somebody to check the letter. She guessed: I wanted to be more confident on the telephone. The difference is that the letter is about a letter and the guess is about the telephone — she has changed what she thinks the problem was. That is the finding and it is enough, and it is not to be explained, because every account of why is a defence of somebody who is not in the room. Omar\'s was the other way round: he wrote something he now does every week and had forgotten was ever difficult — I want to tell a supplier that his figure is wrong without it becoming an argument — and he did it on Tuesday and did not notice doing it. Which is the rarer direction and the one nobody can feel, because learning is invisible from the inside, and the only evidence anybody ever gets of their own is a piece of paper they wrote before it happened. Dima said that now they write the next one, and it has three things in it and not one: one sentence about what they want to be able to do, the cannot yet list from 24.3, and the date they will open it. Adnan asked why the date, when nobody set one last time, and because nobody set one last time and the envelope was opened only because a course ended — so the date goes on the outside and somebody who is not the writer keeps it. And Rim asked who keeps it: somebody who will still be at the same work in two years and who is not the writer\'s closest friend there. A friend will give it back when you ask for it early, and the point of a sealed letter is that you cannot get at it — and in the last class two people chose the registry clerk, which is exactly right. And Lubna asked about reading their own old words aloud: at ordinary speed, as written, and only if they want to, because nobody is asked to read their letter aloud and nobody will be._'));
out.push(p('**Listener task:** write the count — small-to-large, large-to-small, close, and forgotten-it-was-hard.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Nour seals at the end of the second book, and the note under it. Answer the questions.'));
out.push(model([
  '**TO MYSELF, TO BE OPENED ON 1 DECEMBER IN TWO YEARS** _(N. Sabbagh · sealed 13 November · kept by Mr Deeb in the registry)_',
  '**What I wrote last time, so that you have it.** ⚠ _I want to be able to answer an escalation without asking somebody to check the letter._ **I guessed, before opening it, that I had written something about being more confident on the telephone** — **and the difference is that I had changed what I thought the problem was.**',
  '**What I want to be able to do, in one sentence.** ⚠ **I want to write a proposal whose figure is the last figure** — **so that the person reading it does not have to wonder what I shall ask for in March.** **One sentence, and I have been three days arriving at it.**',
  '**What I cannot yet do, which is the list from 24.3 and is the honest part.** ⚠ **1 I cannot yet put a reason inside a news sentence without the news sounding negotiable.** **2 I cannot yet find out what any of our budget-holders actually controls, and that is not about English.** **3 I cannot yet stop my voice going up when I give a figure I am not sure of** — **which Miss Sweidan has as well, and which four people noticed before either of us did.**',
  '**The habits that stuck, so that you can check whether they are still there.** ⚠ **The news in the first sentence.** **The figure from their records and not mine.** **And the renunciation paragraph, which I have written four times.** **If any of the three has gone by the time you read this, that is the thing to look at and not the new sentence.**',
  '**And one instruction for you, which I am allowed to give because I am you.** ⚠ **Do not read this on a good day.** **Read it on the Thursday after something has gone wrong, which is when it will be of some use** — **and if you are reading it in a quiet week, put it back and wait.**',
  '**Who has this and why.** ⚠ **Mr Deeb in the registry, because he will still be there in two years and because he is not a friend of mine.** **I asked him for the date and not for the envelope, and he has written it in the book he keeps for certificates** — **which means it will be given to me whether or not I remember to ask.**',
  '**NOTE for myself, in the envelope, in a different hand so that I know which came later.** ⚠ **I sealed this on the thirteenth and I nearly went back for it on the fifteenth to change the first sentence.** **That is why Mr Deeb has it.**',
]));
out.push(item('1', 'What three things are in the letter, and which does the writer call the honest part?'));
out.push(item('2', 'What instruction does she give her future self about when to read it?'));
out.push(item('3', 'Why is the letter kept by Mr Deeb rather than by the writer?'));
out.push(writers([
  'A sealed letter: **what you wrote last time and what you guessed** → **one sentence about what you want to be able to do** → **the _cannot yet_ list** → **the habits that stuck, so that the reader can check them** → **one instruction about when to read it** → **and who has it and why.**',
  '⚠ **Put last time\'s sentence in this letter.** **A letter that begins again from nothing has lost the only comparison it could have made** — **and a reader in two years will have three sentences instead of two, which is the first thing in this unit that compounds.**',
  '**Ask the reader to check the habits before the ambition.** ⚠ _If any of the three has gone by the time you read this, that is the thing to look at and not the new sentence._ **Habits are lost quietly and ambitions are lost loudly, and only one of the two can be recovered by noticing.**',
  '**Give one instruction about when to read it.** ⚠ _Do not read this on a good day; read it on the Thursday after something has gone wrong._ **A letter read in a quiet week is read as a curiosity.**',
  '⚠ And **give it to somebody who is not a friend, and give them the date rather than the envelope.** _He has written it in the book he keeps for certificates, which means it will be given to me whether or not I remember to ask._ **The mechanism, and not the intention** — **which is 22.5 arriving in a letter to yourself.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the sealed letter (80 words or more).'));
out.push(p('**TO MYSELF, TO BE OPENED ON ______________** _(______________ · sealed ______________ · kept by ______________)_   **What I wrote last time.** ⚠ _______________. **I guessed _______________, and the difference is ______________.**   **What I want to be able to do, in one sentence.** ⚠ **I want to ______________.**   **What I cannot yet do.** ⚠ **1 ______________. 2 ______________. 3 ______________.**   **The habits that stuck, so that you can check them.** ⚠ **______________.** **If any of them has gone, that is the thing to look at and not ______________.**   **One instruction for you.** ⚠ **Do not read this ______________. Read it ______________.**   **Who has this and why.** ⚠ **______________, because ______________ and because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Last time\'s sentence, included for comparison',
  'One sentence about what you want to be able to do',
  'The _cannot yet_ list, with _yet_ in every item',
  'A keeper who is not a friend, and a date on the outside',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their one sentence only** — **not the list and not the instruction** — and the room says whether it could be tested in two years.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full sealed letter (180 words or more), to the shape in the writer\'s box: last time\'s sentence, one new sentence, the _cannot yet_ list, the habits to check, one instruction, and the keeper.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('⚠ **No peer review in this cycle.** **The letter is sealed and nobody reads it.** **Instead, check your partner\'s **envelope**: a date on the outside, a keeper\'s name, and the keeper is not a friend of theirs.** **Those three things are the whole of the review, and all three are visible without opening anything.**'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say the name of your keeper and the date on your envelope, and nothing else.** ⚠ **The room checks two things: that the keeper will still be there, and is not a friend.** **In the last class three students had to change their keeper, having all chosen the person they sit next to.** Then the sentence the cycle ends on, which is Ms Sabbagh\'s: **I nearly went back for it on the fifteenth to change the first sentence, and that is why Mr Deeb has it.**'));
out.push(hw('⚠ **Hand the envelope to the keeper, in person, and watch them write the date in whatever book they keep.** **That is the homework, and it is the only one in either book that cannot be done at a desk.** **If the keeper will not write the date down, they are the wrong keeper** — **and the right one is somebody whose job it is to keep dates.**'));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: The person who sealed the letter and the person who opened it'));
out.push(p('**Function:** mediating between yourself two years ago and yourself today   ·   **Recycling:** Unit 24 and the whole of B2   ·   **Exam practice:** B2 First Reading and Use of English Part 1 · Writing Part 2 (a letter) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 24 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It is a real achieve and I shall say so.  **2** Her progressive over the two books is more than I expected.  **3** His persist over two years is the whole story.  **4** She has a fluent I have not got.  **5** The mature of the second book is obvious.  **6** My reflect on all this is in the letter.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two accounts of one letter, and notice that they are by the same person.'));
out.push(box(null, [
  '**ONE LETTER, TWO ACCOUNTS** _(the same woman, two years apart)_',
  '**The letter.** _"I want to be able to answer an escalation without asking somebody to check the letter. I think the hardest part will be the first line. I have asked Mr Deeb to keep this."_',
  '**The woman who sealed it.** _"It is the most honest thing I have written. One sentence, testable, and the thing I am most afraid of named in the second. I could not have written anything more useful than that."_',
  '**The woman who opened it.** _"It is honest and it is about somebody else\'s problem. I answer escalations alone and I have for a year. What I cannot do now is make a figure the last figure in a proposal — and the letter has nothing to say to me about that, because the woman who wrote it had never written a proposal."_',
  '⚠ **Both accounts are accurate and neither of them is about the letter.**',
  '**And the thing a sealed letter cannot do.** **It is written for a reader who has to be invented** — **and the invention is always of a person with the writer\'s present problem.**',
  '**The question for the cycle.** _What survives a change of problem?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a sealed letter cannot do, and what is the one part of it that survives?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 24.13  The reader you had to invent', [
  ['Ms Huda', 'The last mediation in this course, and the two accounts are by the same person. Ms Sabbagh — was the letter wrong?'],
  ['Nour', 'No. ⚠ **I would write it again** — **and the woman who opened it is right as well, which is a strange thing to say about myself.**'],
  ['Ms Huda', '**Say her account in her words.**'],
  ['Nour', '⚠ _It is about somebody else\'s problem._ **I answer escalations alone and I have for a year.** **The letter has nothing to say to me about proposals, because the woman who wrote it had never written one.**'],
  ['Ms Huda', '**Then the mediation, and it is the three moves one last time.** ⚠ **Separate what the letter was for from what its reader needed.** **Find the thing it cannot do.** **And say what survives.**'],
  ['Omar', 'What was it for?'],
  ['Nour', '**Making one want testable, so that I could not quietly turn it into _being more confident_.** ⚠ **And it did that** — **the sentence was still a sentence two years later, and I have done the thing in it.**'],
  ['Ms Huda', '**And the thing it cannot do?**'],
  ['Dima', '⚠ **Know what will have stopped mattering.** **A sealed letter is written for a reader who has to be invented, and the invention is always of a person with the writer\'s present problem** — **which is the one thing certain to have changed.**'],
  ['Ms Huda', '**Which is the finding, and it is the last one in the course.** ⚠ **Everything in this unit has asked you to write for your future self.** **Nothing in it noticed that your future self is the one reader you cannot research** — **and we have spent two books insisting that you find out what the reader already knows.**'],
  ['Adnan', '**So the ambition is the perishable part.**'],
  ['Ms Huda', '**The ambition is perishable and something else is not.** ⚠ **What survives a change of problem is the record of what was hard.** _I think the hardest part will be the first line._ **That sentence is still useful to a woman writing proposals, because it is about her and not about escalations.**'],
  ['Rim', 'And what can the woman who opened it supply?'],
  ['Ms Huda', '⚠ **The next letter, on the same day, before she leaves the room.** **And almost nobody does it** — **because the opening feels like an ending, and an ending is not a thing anybody writes a letter in the middle of.**'],
  ['Ms Huda', '**And whose decision is that?**'],
  ['Lubna', '⚠ **Hers, and only hers.** **There will be no course next time and no teacher to say _now write the next one_** — **which is why it is the last instruction in the book and why it is in 24.6 and not here.**'],
  ['Jad', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks modest.** ⚠ **Do not write a letter so general that it cannot be wrong** — _I hope I shall have continued to develop_ — **because it will survive anything and be worth nothing.** **And do not conclude that the first letter failed.** **It did what it was for, and the thing it could not do, nothing can.**'],
  ['Nour', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense** — **and this time both of them are you.** ⚠ **Read your own old account as you would read a colleague\'s.** **That is the whole of the course in one instruction, and it is the last one.**'],
]));
out.push(sp());
out.push(box('Language box – the person who sealed the letter and the person who opened it', [
  '**The three moves, one last time.** ⚠ **1 Separate what the letter was for from what its reader needed.** **2 Find the thing it cannot do.** **3 Say what survives.**',
  '⚠ **The finding, and it is the last in the course: a sealed letter is written for a reader who has to be invented, and the invention is always of a person with the writer\'s present problem** — **which is the one thing certain to have changed.**',
  '**And it is the opposite of everything these two books have taught.** ⚠ **Two volumes of finding out what the reader already knows, in whose units, from whose records** — **and your future self is the one reader you cannot research.**',
  '**What the letter was for, and it did it.** ⚠ **Making one want testable, so that it could not quietly become _being more confident_.** **The sentence was still a sentence two years later.**',
  '**What survives a change of problem is the record of what was hard.** ⚠ _I think the hardest part will be the first line._ **That is about the writer and not about escalations** — **and it is still useful to a woman now writing proposals.**',
  '⚠ **What the person who opens it can supply: the next letter, on the same day, before leaving the room.** **And almost nobody does** — **because the opening feels like an ending, and an ending is not a thing anybody writes a letter in the middle of.**',
  '**Whose decision that is: the opener\'s, and only theirs.** ⚠ **There will be no course next time and no teacher to say _now write the next one_** — **which is why that instruction is in 24.6 and not here.**',
  '**Two things not to do, and the second looks modest.** ⚠ **Do not write a letter so general that it cannot be wrong** — _I hope I shall have continued to develop_ — **because it will survive anything and be worth nothing.** **And do not conclude that the first letter failed: it did what it was for, and the thing it could not do, nothing can.**',
  '**And one thing to say about the whole of these two books, since this is the place for it.** ⚠ **Every function in them was taught in a form where the reader can see the method working** — **the news first, the figure beside the criterion, the renunciation in its own paragraph, the two accounts quoted in full.** **That visibility is why any of it could be learned**, **and it is also why none of it is the finished article.**',
  '**Pronunciation.** 🔊 **Track 24.14** **One after the other, at the same speed, neither reasonable at the other\'s expense** — **and this time both of them are you.** ⚠ **Read your own old account as you would read a colleague\'s.** **That is the whole of the course in one instruction, and it is the last one.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, each with your own letter and guess. A reads **the letter\'s sentence and then their own account of it as the person who sealed it**, in the third person: _the woman who wrote this thought…_ ⚠ **Then as the person who opened it.** **B makes the three moves and says what survives.** Change roles, and then change pairs once.'));
out.push(table(['Pair A – what to produce', 'Pair B – what to catch'], [
  ['_The letter\'s sentence, as written._', '_⚠ A speaker who defends the old sentence._'],
  ['_The sealer\'s account, in the third person._', '_⚠ A speaker who says the letter failed._'],
  ['_⚠ The opener\'s account, in the first person._', '_⚠ An account of why, which is a defence._'],
  ['_What it was for, and whether it did it._', '_⚠ A _what survives_ that is the ambition._'],
  ['_⚠ What survives: the record of what was hard._', '_⚠ Silence treated as an incomplete answer._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, and only if both volunteer. **Listener task:** what the letter was for, the thing it could not do, and what survives. ⚠ **The answer to catch is _it failed_**, **which somebody will give** — **and the correction is the finding: the letter did what it was for, and the thing it could not do, nothing can.** **A letter general enough to survive two years is a letter that was never worth sealing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Do the three moves on **your own** letter, in writing. ⚠ **Name the part that survives a change of problem** — **and if there is none, say so, and then write that part into the letter you sealed in 24.6, which is still in your hand until you give it to the keeper.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what a sealed letter cannot do:  _The last mediation in the course, and the two accounts are by the same person. Asked whether the letter was wrong, Nour said no — she would write it again, and the woman who opened it is right as well, which is a strange thing to say about oneself. That account in her own words: it is about somebody else\'s problem. She answers escalations alone and has for a year, and the letter has nothing to say to her about proposals, because the woman who wrote it had never written one. So the mediation, in the three moves one last time: separate what the letter was for from what its reader needed; find the thing it cannot do; and say what survives. It was for making one want testable, so that it could not quietly turn into being more confident — and it did that, because the sentence was still a sentence two years later and she has done the thing in it. The thing it cannot do, Dima said, is know what will have stopped mattering: a sealed letter is written for a reader who has to be invented, and the invention is always of a person with the writer\'s present problem, which is the one thing certain to have changed. Which is the finding, and it is the last one in the course — everything in the unit asked them to write for their future selves, and nothing in it noticed that a future self is the one reader nobody can research. Adnan said the ambition is the perishable part, and the ambition is perishable and something else is not: what survives a change of problem is the record of what was hard. And Rim asked what the woman who opened it can supply: the next letter, on the same day, before she leaves the room — and almost nobody does it, because the opening feels like an ending. Lubna asked whose decision that is, and hers, and only hers, because there will be no course next time and no teacher to say now write the next one. And what must not be done: do not write a letter so general that it cannot be wrong, and do not conclude that the first letter failed — it did what it was for, and the thing it could not do, nothing can._'));
out.push(p('**Listener task:** write the part of your own letter that survives a change of problem.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**THE LETTER YOU CANNOT RESEARCH**',
  'Anybody who has been asked to write to their future self will **(1)** ______ out with the same difficulty. The reader has to be invented, and the invention always **(2)** ______ out to be a person with the writer\'s present problem — which is the one thing certain to have changed. Two years later the ambition has **(3)** ______ away and something smaller has taken its place.',
  'This is not a failure of the exercise. A letter general enough to **(4)** ______ two years of change is a letter worth nothing, because it can never be wrong. What matters is that one part of such a letter does **(5)** ______ with whatever the reader has become: the record of what the writer found hard. That record is about a person and not about a task, and people change more slowly than their work does.',
  'There is a second difficulty and it is practical. The reader who **(6)** ______ up the envelope is the only person who can write the next one, and the moment of opening feels like an **(7)** ______ rather than a middle. Almost nobody writes the second letter, and those who do have usually **(8)** ______ on to a habit from the course that carries them into it.',
  '**1**  **A** break   **B** take   **C** start   **D** turn',
  '**2**  **A** comes   **B** turns   **C** stands   **D** falls',
  '**3**  **A** held   **B** stuck   **C** settled   **D** fallen',
  '**4**  **A** survive   **B** settle   **C** carry   **D** stick',
  '**5**  **A** settle   **B** reach   **C** tally   **D** hold',
  '**6**  **A** turns   **B** picks   **C** holds   **D** catches',
  '**7**  **A** outcome   **B** occasion   **C** interval   **D** ending',
  '**8**  **A** held   **B** kept   **C** carried   **D** stuck',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of your two selves (80 words or more).'));
out.push(p('**ONE LETTER, TWO ACCOUNTS** · _the same person, ______ years apart_   **The letter.** _"______________"_   **The person who sealed it.** _"______________"_   **The person who opened it.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the letter was for.** ______________. ⚠ **It did that.**   **The thing it cannot do.** ⚠ ______________.   **What survives a change of problem.** ⚠ **______________**, **because it is about ______________ and not about ______________.**   **What the person who opened it can supply.** ⚠ ______________.   **And what I am not concluding.** ⚠ **That the letter ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the letter was for, separated from what its reader needed',
  'What survives a change of problem, named',
  'No conclusion that the first letter failed',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a letter)', 10));
out.push(box(null, [
  '⚠ **The letter, and the shape is Unit 20 with Unit 24 on top of it: the thing that displaces in the first sentence, one example, the figures if they are wanted, and a recommendation with a condition on it.**',
  'A colleague has written to ask whether they should take the course you have just finished. Write to them.',
  'Write your **letter** in **180–220 words**, including **what the course is not**, **what it is, in one sentence of your own**, **one example with a figure in it**, and **a recommendation with a condition on it.**',
  '⚠ **All four requirements, or the content mark goes.** **And the fourth is where the marks are** — **a recommendation with no condition reads as politeness, and the examiner is looking for a letter the colleague could actually decide on.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 24 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Three habits in two years is a real ___ and I shall say so.   a) achievement   b) achieve   c) achieving',
  '2  Her ___ over the two books is greater than anybody expected, including her.   a) progressive   b) progress   c) progressing',
  '3  What she has shown over two years is ___ and nothing cleverer than that.   a) persist   b) persisting   c) persistence',
  '4  She has a ___ on the telephone that I have not got.   a) fluent   b) fluency   c) fluently',
  '5  The ___ of the second book over the first is obvious on any page.   a) mature   b) maturing   c) maturity',
  '6  My ___ on all of this is in the letter and nowhere else.   a) reflection   b) reflect   c) reflecting',
  '7  ___ in a second language is not the same thing as confidence in it.   a) Competent   b) Competence   c) Competently',
  '8  There is an ___ in the room that there was not two years ago.   a) aware   b) awarely   c) awareness',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 24.15** You will hear an interview with a teacher about the end of a two-year course. For questions **1–7**, choose the answer (**A**, **B** or **C**) which fits best.'));
[
  '**1**  Why does she ask students to guess what they wrote before the envelope is opened?   **A** because the guess records what they now think they used to want   **B** to make the opening less solemn   **C** because some letters have been lost',
  '**2**  What does she say about the commoner direction of drift?   **A** the want stays the same   **B** a large want is replaced by a small one   **C** a small specific want is replaced by a large vague one',
  '**3**  What does she say the test of a habit is?   **A** whether it can be explained   **B** whether it was done on a day when the student was late   **C** whether the student agrees with it',
  '**4**  What does she say about the functions that arise twice a year?   **A** they should be practised more   **B** they should be dropped   **C** they cannot become habits and belong on printed paper',
  '**5**  What does she say the step to the next level is?   **A** holding two things in one sentence   **B** more vocabulary   **C** fewer mistakes',
  '**6**  Why does she insist that the keeper of the envelope is not a friend?   **A** friends forget   **B** a friend will hand it back early if asked   **C** friends move away',
  '**7**  What does she say almost nobody does?   **A** open the envelope   **B** keep the _cannot yet_ list   **C** write the next letter on the same day',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 24.15  Audio script (read after the check)', [
  ['Interviewer', 'You make them guess what is in the envelope before you open it. Why?'],
  ['Ms Huda', 'Because the guess is the interesting document, not the letter. Nobody can remember accurately what they used to want — we revise the old want to fit the thing we got. So the guess is a record of what they now think they used to want, and putting the two sheets side by side is the whole exercise.'],
  ['Interviewer', 'And what do you usually find?'],
  ['Ms Huda', 'Two directions, and one is far commoner. A small specific want gets quietly replaced by a large vague one. _I want to answer a complaint without asking anybody to check it_ becomes _I want to be more confident_ — and the second cannot be tested, so it cannot be finished, and they carry it for another two years.'],
  ['Interviewer', 'You also ask them to separate habits from knowledge.'],
  ['Ms Huda', 'The test of a habit is not whether they can explain it. It is whether they did it on the Tuesday they were two hours late. Anything that only survives when there is time is knowledge in a habit\'s clothes, and it will be the first thing to go in every busy week of their working lives.'],
  ['Interviewer', 'And the things that only come up twice a year?'],
  ['Ms Huda', 'Those cannot become habits at all, and saying so is more honest than pretending. Twice a year is not enough repetition for anything. They go on printed paper, as headings with nothing under them, because an empty heading is the only reminder that has ever reliably worked on anybody. It works because it is embarrassing.'],
  ['Interviewer', 'They always ask you what comes next. What do you tell them?'],
  ['Ms Huda', 'Not more words. The step is holding two things in one sentence that this level keeps in two — the news and the reason together, in a form that still cannot be argued with. And I tell them not to attempt it until the simpler version is automatic, because every year somebody tries it in March and by May their letters are being argued with and they cannot think why.'],
  ['Interviewer', 'The envelope is kept by somebody else. You are strict about who.'],
  ['Ms Huda', 'Somebody who will still be there in two years and who is not a friend. A friend hands it back the moment you ask for it early, and the whole value of a sealed letter is that you cannot get at it. Two of them chose the registry clerk, which is exactly right — it is his job to keep dates.'],
  ['Interviewer', 'And is there anything they almost all fail to do?'],
  ['Ms Huda', 'One thing. Writing the next letter on the same day, before they leave the room. The opening feels like an ending, and nobody writes a letter in the middle of an ending. There will be no course next time and nobody to tell them — so it is the last instruction in the book, and it is the one I expect most of them to forget.'],
]));
out.push(p('**C  Writing.** Write the letter (180–220 words): what the course is not, what it is in one sentence of your own, one example with a figure, and a recommendation with a condition on it.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 24)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ record a prediction about myself in testable terms',
  '☐ tell a habit from a piece of knowledge, using one real day',
  '☐ say which functions can never become habits, and where they go instead',
  '☐ write a _cannot yet_ list that somebody else could watch me fail at',
  '☐ say what the next level will ask of me, in three specific places',
  '☐ tell a colleague what the course was for, in two sentences and fifteen seconds',
  '☐ seal a letter with a date, a keeper and a record of what was hard',
  '☐ read my own old account as I would read a colleague\'s',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _move on from · hold on to · grow out of · settle into · take stock of · fall away · stick with · catch up on · carry on with · set about · start out · end up_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 24.7 draws on this)_: _achieve → **achievement** · progress → **progressive** · persist → **persistence** · fluent → **fluency** · mature → **maturity** · reflect → **reflection** · competent → **competence** · aware → **awareness** · hesitate → **hesitation**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 24 · Student\'s Book');
