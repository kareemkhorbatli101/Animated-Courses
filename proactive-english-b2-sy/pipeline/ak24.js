// Proactive English B2 · Syria Edition · Book 2 · Unit 24 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 24  Opening the Letters — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **The envelope has to be in the room before 24.1 and this key cannot do anything about that.** **It was sealed at the end of the first book and it is with whoever keeps the register.** **If it has been lost, teach 24.1 to 24.5 as written and run 24.6 on the guesses alone** — **which is a smaller exercise and a real one, and it has been done twice in eleven years.**',
  '**Three things to collect and keep.** ⚠ **The guesses from 24.1**, **which you give back on the morning of 24.6 and not before** _(two or three students will claim their guess was closer than it was, and the paper settles it without an argument)_. **The _cannot yet_ lists from 24.3.** **And nothing from 24.6, which nobody hands in.**',
  '⚠ **The hardest thing in this unit is not a teaching point; it is restraint.** **In 24.6 the class is given four minutes with two pieces of paper and no task, and then says two sentences and the difference and nothing else.** **Do not ask why, do not ask anybody to read a letter aloud, and do not fill a silence** — **and say all three of those things on the first morning of the unit, because a permission given afterwards is not believed.**',
  '**24.7 carries the examination papers.** **Reading and Use of English Part 1** is multiple-choice cloze, **Writing Part 2** is a letter, and **Listening Part 4** is multiple choice.',
  '⚠ **And one thing about the end of a course, since this is the last page of the key.** **The class will want a verdict and this unit does not supply one.** **What it supplies is three pieces of paper that a student keeps: the stocktaking page from 24.2, the _cannot yet_ list from 24.3 and the readiness page from 24.4** — **and the sealed letter, which they do not keep, because somebody else has it.**',
], C.lblue, C.navy));

// ===================== 24.1 =====================
out.push(pb());
out.push(h2('24.1  What you wrote down two years ago'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and the writing-down is the stage. ⚠ **Insist on one sentence, on paper, with a name on it, and collect them** — **a guess that stays in a head is a guess that will be remembered as having been closer than it was.** **Do not discuss the guesses now; there is nothing to compare them with until 24.6.**'));
out.push(A('**b** A usable record: **3** and **5**. Not: **1**, **2** and **4**. ⚠ **2 is the one to dwell on** — _I think I wrote that I wanted to be more confident_ — **because it is a guess about a vague sentence and is therefore unfalsifiable twice over.** **Push the student for the specific version: what would being more confident have let them do?**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is evidence about what you used to want, which nobody can remember accurately**; and **the useful part is almost always the thing you have stopped wanting and did not notice.**'));
out.push(A('**b** **1** ⚠ **A record that only shows progress has been read as a verdict** — **and the letters are not a verdict; they are evidence.** **Four of twelve will be close and eight will not, and neither of those is a result.**   **2** ⚠ **Nobody can remember accurately what they used to want** — **not because memory is weak, but because we revise the old want to fit the thing we got.**'));
out.push(NOTE('⚠ **The two directions of drift are the content of this cycle and they must both be given, because a class told only that memory drifts will hear a general truth.** **The common one: a small specific want quietly replaced by a large vague one** — _I want to answer a complaint without asking anybody to check it_ **becoming** _I want to be more confident_. **The second cannot be tested, so it cannot be finished, and the student carries it for another two years.** ⚠ **The rare one is more cheerful and nobody can feel it: somebody wrote something small, has done it, and has forgotten it was ever difficult.** **Say the general rule once, because it is the sentence students take away from the whole unit:** **learning is invisible from the inside, and the only evidence anybody gets of their own is a piece of paper written before it happened.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **The guess:** _I think I wrote that I wanted to answer a complaint without asking anybody to check it._   **2** ⚠ **The small specific want:** _to take a minute in the room rather than afterwards._   **3** ⚠ **The large vague replacement:** _to be better at meetings_ — **which cannot be tested and therefore cannot be finished.**   **4** ⚠ **Done and forgotten:** _telling a supplier his figure is wrong without it becoming an argument_ — **done on Tuesday and not noticed.**   **5** ⚠ **One you would write again:** _I want to read a sixty-page contract in a morning_ — **and the reason it stands is that it is still not true, which is a different thing from having been a good sentence.**'));
out.push(A('⚠ **Mark 5 hardest and mark it on the distinction.** **A sentence you would write again because it was well written is a sentence you have not finished; a sentence you would write again because you would still choose that goal is something else** — **and a student who cannot tell the two apart has not understood what the letter is for.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **I want to be more confident in meetings.**',
  '_B:_ **That is large and vague. The small version is: I want to say the thing I disagree with before the item is closed rather than afterwards in the corridor.**',
  '_A:_ **I want to answer a complaint without asking anybody to check it.** ⚠ _(marked row)_',
  '_B:_ **That is already small and specific and I am not going to improve it. It can be tested, so it can be finished, and it needs nothing but doing.**',
  '_A:_ **I want to feel comfortable with foreign visitors.**',
  '_B:_ **Large. The small version is: I want to answer a question about our procedures without rehearsing the answer first.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows are already small and specific** — **a complaint answered alone, a minute taken in the room, a four-line refusal, a contract read in a morning** — **and a pair who improve them have done the thing the cycle warns against.** **The listener task should record which rows were left alone.** **A testable want is finished as a sentence; it needs nothing but doing, and a class that has just learned to sharpen sentences will sharpen these too unless told.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**My guess, one sentence, with my name on it:** I think I wrote that I wanted to be able to write a specification somebody could not argue with at the gate._',
  '⚠ _**And out loud: I think it was small, and I think it was about the gate and not about writing.** **If it turns out to be large** — **something about being taken seriously** — **then the small version would have been: I want to write a line a driver cannot argue with for two hours.**_',
  '_**Which is a sentence I could not have written two years ago, because I did not know that was the problem.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The envelope is in the cupboard and it is not being opened until 24.6, and Nour said why not today: because the class would read it as a verdict, and it is not a verdict but evidence. Evidence about what the class used to want, which she would have said she remembers and does not. Nobody does, and that is the first thing to establish: nobody can remember accurately what they used to want, not because memory is weak but because we revise the old want to fit the thing we got. Omar said that is why the guess is written first, and you write it down with your name on it and keep it, because in 24.6 there will be two sentences in front of each student — what they wrote in the first book and what they now think they wrote — and the second is the more interesting of the two. Dima asked what happens if the guess is right, and then you have learned that about yourself, which is worth something: in the last class four of twelve guessed close and eight did not, and of the eight, six had quietly replaced a small specific want with a large vague one. Adnan said that is what he will have done, and it is the commonest of the two directions and the worse one — I want to answer a complaint without asking anybody to check it becomes I want to be more confident, and the second cannot be tested, so it cannot be achieved, and you carry it for another two years. Rim asked about the other direction, and it is rarer and more cheerful: somebody wrote something small, has done it, and has forgotten that it was ever difficult, and will read their own letter without recognising the difficulty in it. That is what learning looks like from the inside, which is to say invisible. And Jad asked how to read the old sentence out loud: as written, and without defending it. People read their own old sentence and add a clause — which of course at that time I did not know — and the clause is a defence of somebody who is not in the room. And Hiba asked what happens if the letter is embarrassing: most of them are slightly embarrassing, and that is the sign the two years were real.']));
out.push(A('⚠ **Mark the report on _it is not a verdict; it is evidence_.** **A version that reports the two directions and leaves out the reason for the guess has lost the mechanism** — **and the reason is that we revise the old want to fit the thing we got, which is why the guess has to be written and not remembered.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I think I **have wrote**._ → _I think I wrote_.   ⚠ _What I **used to want it** was._ → _what I used to want was_.   ⚠ _It is **not a verdict but evidences**._ → _evidence_, **uncountable.**   ⚠ _I **have forgot** it was hard._ → _had forgotten_.   ⚠ _Four **of twelve** guessed **closely** and eight **not**._ → _and eight did not_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because four of them will be close to what the writer now thinks they wrote and eight will not, and neither of those is a result** — **it is information about how a person remembers a want.** **A class that reads the letters as a verdict will read them defensively and learn nothing from them.**'));
out.push(A('**2** ⚠ **The common one is a small specific want replaced by a large vague one, and it is the worse direction, because the replacement cannot be tested and so cannot be finished.** **The rare one is somebody who wrote something small, has done it, and has forgotten that it was hard.**'));
out.push(A('**3** ⚠ **Keep them, because two or three students will claim in 24.6 that their guess was closer than it was** — **and the paper settles it in four seconds without an argument.** **And the point of settling it is not to be right: the drift is the lesson, and it disappears if the guess is remembered rather than read.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BEFORE THE FILES ARE OPENED** _(for the four gate inspectors · 2 December)_',
  '**What is in the drawer.** ⚠ **Four sheets, written by each of you a year ago, saying what you thought the hardest part of the job was.** **I have not read them.**',
  '**What they are not.** ⚠ **They are not an assessment.** **Nothing in them goes into anybody\'s file and I shall not keep copies.**',
  '**The two directions, and one is worse.** ⚠ **The common one: something you could point at has become something general.** **The rare one: you wrote something small, you now do it every week, and you have forgotten it was hard.**',
  '**What I am asking first, and it takes four minutes.** ⚠ **Write what you think you wrote, in one sentence, with your name on it.**',
  '**One thing that will happen.** ⚠ **Two of you will be slightly embarrassed.** **That is the sign the year was real.**',
  '**And what I shall not do.** ⚠ **I shall not read anybody\'s sheet aloud and I shall not ask anybody to.**',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**BEFORE THE FILES ARE OPENED** _(for the four gate inspectors · 2 December)_',
  '**What is in the drawer.** ⚠ **Four sheets, written by each of you a year ago, saying what you thought the hardest part of this job was.** **I have not read them.** **Nobody has, and the drawer has been locked since January.**',
  '**What they are not.** ⚠ **They are not an assessment.** **Nothing in them goes into anybody\'s file, I shall not keep copies, and two of the four will be close to what you now think you wrote while two will not** — **and neither of those is a result.**',
  '**The two directions, and one of them is worse.** ⚠ **The common one: something you could point at has quietly become something general.** _I cannot tell whether a crush is 10 mm_ **becomes** _I need more training_ — **and the second cannot be tested, so it cannot be finished.** **The rare one: you wrote something small, you now do it every week, and you have forgotten it was ever hard.**',
  '**What I am asking you to do first, and it takes four minutes.** ⚠ **Write what you think you wrote, in one sentence, with your name on it, and give it to me.** **You will have both pieces of paper in front of you at the same time.**',
  '**One thing that will happen.** ⚠ **Two of you will be slightly embarrassed, and that is the sign the year was real.**',
  '**And what I shall not do.** ⚠ **I shall not read anybody\'s sheet aloud and I shall not ask anybody to.** **If you would rather say nothing, that is a complete answer and I shall not ask twice.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: who has read them, said early.** Second paragraph of the first section. **The line I copied is _the drawer has been locked since January_** — which is better than the unit asks for, because it is checkable._',
  '_**Criterion: what it is not.** Three things ruled out, and _I shall not keep copies_ is the one that will be believed._',
  '_**Keep:** _if you would rather say nothing, that is a complete answer and I shall not ask twice._ **It works because the permission is given in advance, and the same sentence afterwards would not be believed.**_',
  '_**Ranking of the slip I was given:** the what-it-is-not criterion first, because it is what decides whether anybody writes honestly; the two-directions criterion second; the embarrassment criterion last, since one line covered it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Count the small specific guesses against the large vague ones and put the two numbers on the board, with no names.** **In this class the count has run about one small to two large, every time** — **and the count is the only prediction the unit makes about 24.6.** **Say also that the count is not a ranking: a student whose guess is vague has not failed at anything, and the drift is the commonest professional habit in the book.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The guess, folded and handed in:** I think I wrote that I wanted to be able to write a specification somebody could not argue with at the gate._',
  '⚠ _**And underneath, for myself: I think it is small, and if it turns out to be large the small version is this** — **I want to write a line a driver cannot argue with for two hours.**_',
  '_**That is the thing I shall work on after this course ends, and it has no date on it, which the book says is deliberate.**_',
]));

// ===================== 24.2 =====================
out.push(pb());
out.push(h2('24.2  The habit that stuck and the one that did not'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second half is the stage and it is harder to say, so ask for it first in the pairs and second in the room.** **Then the test, which decides everything in the cycle:** _did you do it last Tuesday when you were late?_ **Not _do you do it_** — **a named day, and a day on which something went wrong.**'));
out.push(A('**b** Habits: **2** and **4**. Knowledge: **1**, **3** and **5**. ⚠ **5 is the one to read twice** — _I am much more aware of criteria now_ — **because awareness is the form knowledge takes when it is pretending to be a habit.** **Ask what the student did differently last Tuesday on the strength of it.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **whether you did it last Tuesday when you were late**; and **a habit that survives only when there is time is knowledge wearing a habit\'s clothes.**'));
out.push(A('**b** **1** ⚠ **The test card stuck** — **every batch that leaves his counter has the four tests on it, and he does not decide to do it.** **The failure condition did not: not once in a year, and he can explain exactly why they work.**   **2** ⚠ **The excuse undoes the sentence.** _I have never written a failure condition_ **followed by** _although to be fair the opportunity has not really come up_ — **and the room hears the second half.**'));
out.push(NOTE('⚠ **The mechanism is frequency and not virtue, and it is the most useful idea in the unit because it is actionable.** **Things become automatic by being attached to a moment and not to an intention.** **A batch goes back on most Thursdays; a proposal is written four times a year** — **and four times a year is not enough repetition for anything.** ⚠ **So some of what these two books taught cannot become habits at all, and saying so is more honest than the alternative.** **The twice-a-year functions go on printed paper as headings with nothing under them** — **and that works because an empty heading is embarrassing, not because it is clever.** **Say the word _time_ is almost never the real reason and is always available: it points at nothing anybody can change, and frequency points at something they can.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **One that stuck:** _the figure with its unit, always_ — _ten millimetres_, **never** _ten_.   **2** ⚠ **One that did not:** _the failure condition; not once in a year._   **3** ⚠ **The moment:** _the test card attaches to sending a batch, which happens most Thursdays._   **4** ⚠ **Cannot be a habit:** _the scope page of a specification, which I write twice a year_ — **so it goes on the front of the specification template as a heading with nothing under it.**   **5** ⚠ **Stopped without noticing:** _I used to open every letter to the exchange with a paragraph about the weather, and there is not one in four letters from this year._'));
out.push(A('⚠ **Mark 4 hardest and mark it on the physical answer.** **_I shall remember to do it_ is not an answer** — **the student has to name a document, a form or a folder that the heading will be printed on, and the ones who cannot name one have not understood why they failed at it the first time.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **The news in the first sentence of a bad-news letter.**',
  '_B:_ **It attaches to writing something somebody will not like, which happens about once a week. It can be a habit, and in my case it took four months.**',
  '_A:_ **The failure condition in a proposal.** ⚠ _(marked row)_',
  '_B:_ **It cannot be a habit. A proposal is four times a year at most. It goes on the front of the proposal form, printed, as a heading with nothing under it — and the gap is the reminder.**',
  '_A:_ **The method beside every criterion.**',
  '_B:_ **It attaches to writing any criterion, which for me is weekly, so it can be automatic. Mine is, since about March.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows arise less than four times a year** — **a failure condition, a mediation, a scope page, a renunciation** — **and none of them can ever become automatic.** **The listener task is the moment or the list, and the answer to catch is a moment invented for a rare thing** — _it attaches to being thorough_ — **which is an intention and not a moment.** **The correction to make in front of the room: name a piece of paper or it is not an answer.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Stuck:** the two-clause question before I open anything long. It attaches to opening a document, which for me is most days._',
  '_**Did not stick:** the note for the next reader. I have written one, for the inward goods standard, and that was because it was homework._',
  '⚠ _**And no excuse after it.** **I was going to say that nobody else reads my documents, and that is not true: four people read the standard and two of them asked me questions about it in October.**_',
  '_**Could it be attached to a moment? Yes, and I had not seen it: the moment is the end of a search, not the beginning of a month.** **Every time I spend forty minutes in a document, the note is the last four of them.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen gave the one that did not stick first: he has never once written a failure condition, not one in a year, and he can explain exactly why they work. The one that stuck is the test card — every batch that leaves his counter has the four tests on a card, and he does not decide to do it; it is just what sending a batch is now. That is the distinction the cycle turns on and it is not about effort: the test of a habit is not whether you can explain it but whether you did it last Tuesday when you were late. Nour asked about a habit that only survives when there is time, and it is knowledge wearing a habit\'s clothes, and it will be the first thing to go in every busy week for the rest of a working life — which is not a moral failing but what a thing that has not become automatic does. Omar asked how something becomes automatic, and by being attached to a moment rather than to an intention: the card is attached to the act of sending a batch, and a failure condition is attached to writing a proposal, which happens four times a year, and four times a year is not enough to make anything automatic. Dima said then some of these cannot become habits at all, and some cannot, and saying so is more honest than the alternative — the four-times-a-year ones have to be on a list that you look at, not remembered but looked at, and the list lives with the thing. Mazen said the failure condition goes on the front of his proposal paper, printed, so that an empty space is visible: a heading with nothing under it is the only reliable reminder anybody has invented, and it works because it is embarrassing. And Adnan asked about habits that went the other way, things dropped without being noticed: somebody stopped writing I hope this finds you well and nobody noticed, including them, and a habit that has disappeared without being noticed is the surest kind of change there is. And Rim asked about saying the admission out loud, which is the admission and then nothing, because people add an excuse and the excuse undoes the sentence.']));
out.push(A('⚠ **Mark the report on the named Tuesday.** **Students report the test as _whether you do it when you are busy_, which is a paraphrase that loses the method** — **the method is a particular day on which something went wrong, and Mr Hariri\'s was the Tuesday he was two hours late and the exchange was waiting.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I do it **without to think**._ → _without thinking_.   ⚠ _I have never **wrote** one._ → _written_.   ⚠ _**Although to be fair** the opportunity has not come up._ → **strike the clause.**   ⚠ _It is **attach to** sending a batch._ → _attached to_.   ⚠ _A heading **with nothing under** it is a reminder._ → _with nothing under it_ **is right; students write** _with nothing on it_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because each of them is attached to something he does every week** — **a batch goes back on most Thursdays, he says a figure out loud twenty times a day, and he writes something somebody will not like about once a week.** **The same reason three times, and it is frequency and not virtue.**'));
out.push(A('**2** ⚠ **Not time** — **each of the four belongs to a thing he does about twice a year.** **He can teach all four and has used none, and the honest reason points at something that can be changed, where _I have not had time_ points at nothing.**'));
out.push(A('**3** ⚠ **Against the Tuesday he was two hours late and the exchange was waiting.** **He was going to write eleven; the day gave him three** — **and three out of about eighty things taught in two books is a normal and a good result.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT STUCK AND WHAT DID NOT** _(R. Shaaban · for my own use · 5 December)_',
  '**Three that stuck.** ⚠ **1 The figure with its unit.** **2 The method in the same line as the criterion.** **3 Writing a failing figure at the gate rather than telling the driver to wait for a letter.**',
  '**Why those three.** ⚠ **Each is attached to something I do every day at a gate.**',
  '**Three I can explain and have never done.** ⚠ **The mediation of two accounts.** **The second paper in somebody else\'s units.** **And the note for the next reader of anything except the standard.** **The honest reason is not time; each belongs to something I do twice a year.**',
  '**Where they go instead.** ⚠ **On the inside cover of the gate book, as three headings with nothing under them.**',
  '**One I stopped and did not notice.** ⚠ **I used to telephone a supplier before refusing a load, to warn him.** **I have not done it since the spring and I cannot say when I stopped.**',
  '**And one honest count.** ⚠ **Three out of about eighty.** **I was going to write nine.**',
]));
out.push(S('Stage 7 · Write freely (sample, 208 words)'));
out.push(SAMPLE([
  '**WHAT STUCK AND WHAT DID NOT** _(R. Shaaban · for my own use · 5 December)_',
  '**Three that stuck, and I did not choose any of them.** ⚠ **1 The figure with its unit, always.** **2 The method of checking written in the same line as the figure.** **3 Giving the driver the failing figure in writing at the gate instead of telling him to wait for a letter.**',
  '**Why those three, and it is the same reason three times.** ⚠ **Each of them is attached to something I do every day at a gate** — **and none of them is attached to an intention.**',
  '**Three I can explain and have never done.** ⚠ **The mediation of two accounts that are both right.** **The second paper written in somebody else\'s units.** **And the note for the next reader of anything except the one standard I did for homework.** **The honest reason is not time: each of the three belongs to something I do about twice a year, and twice a year is not enough repetition for anything.**',
  '**So they go on paper and not in my head.** ⚠ **On the inside cover of the gate book, as three headings with nothing under them** — **which is embarrassing to look at, and that is the whole mechanism.**',
  '**One I stopped doing and did not notice.** ⚠ **I used to telephone a supplier before refusing a load, to warn him it was coming.** **I have not done it since the spring and I cannot tell you when I stopped** — **and a habit that disappears without being noticed is the surest change there is.**',
  '**And one honest count.** ⚠ **Three out of about eighty.** **I was going to write nine, and six of the nine were things I can describe.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the frequency behind each habit that stuck.** You give it once for all three, which is better than three times. **The line I copied is _and none of them is attached to an intention_** — it is the sentence that explains the other three._',
  '_**Criterion: an honest reason that is not time.** _Twice a year is not enough repetition for anything_ does it, and it is a fact rather than an excuse._',
  '_**Keep:** _which is embarrassing to look at, and that is the whole mechanism._ **It works because it admits the reminder is crude, and a crude reminder that is admitted to be crude is the one people keep.**_',
  '_**Ranking of the slip I was given:** the honest-reason criterion first, because mine said _time_; the physical-place criterion second; the count criterion last, since the number was easy once I had a day to test it against._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Ask for the count and then for the day, in that order, and write both on the board.** **A count with no day behind it is the number of things the student can explain** — **and in this room the tested counts have run between two and four out of about eighty.** **Say that figure out loud before anybody has time to feel disappointed by their own, because three habits in two years is a career\'s worth of change and a class does not know that unless it is told.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Tested against Tuesday the eleventh**, when the vehicle was late and I had two drivers waiting._',
  '_**Done that day:** the figure with its unit; the method in the line; the failing figure in writing at the gate. **Three.**_',
  '_**Not done:** everything else, including the two I had been fairly sure of._',
  '⚠ _**And the physical part is done: three headings printed on a slip and pasted inside the cover of the gate book** — **mediation, second paper, note for the next reader** — **with nothing under any of them.** **It took eleven minutes and the slip is ugly, and I am leaving it ugly.**_',
]));

// ===================== 24.3 =====================
out.push(pb());
out.push(h2('24.3  What you cannot yet do'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Give the rule before the pairs start or the stage produces nothing usable:** **each item has to be something a person could watch you fail at.** **_My vocabulary is limited_ is not one; _I cannot follow two people arguing on a telephone_ is.** **The difference is whether somebody could set the situation up and see.**'));
out.push(A('**b** Can be watched: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 is the one to dwell on** — _I lack confidence_ — **because it is the commonest item on any such list and it describes nothing that can be arranged.** **Push for the version with a situation in it, and there always is one.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is the only honest thing anybody can hand to a future teacher, and the one thing a certificate cannot say**; and **a level tells somebody what you have passed, and this tells them where to start.**'));
out.push(A('**b** **1** ⚠ **Two people arguing on a telephone; a minute readable without rewriting; and a figure said without her voice going up** — **and the third surprised her, because she had not known she did it until somebody told her.**   **2** ⚠ _Yet._ **_I cannot do it yet_ is a sentence with a date in it somewhere, and _I cannot do it_ is a description of a person** — **and the whole list depends on one three-letter word.**'));
out.push(NOTE('⚠ **The most important instruction in this cycle is that the list is made out loud, in a room with other people in it.** **The things a student cannot do that they know about are the easy half; the other half is visible to everybody except them.** **Miss Sweidan did not know her voice went up on an uncertain figure, and when she was told, four other people said they had noticed.** ⚠ **So build the fourth item into Stage 4 and insist that it is written down even where the student disagrees with it.** **In this room the fourth item has been the one students worked on first, about half the time** — **which is the argument for the exercise and it cannot be made in advance, only reported.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **Watchable:** _I cannot yet take a minute in the room and have it readable without rewriting it._   **2** ⚠ **Supplied by somebody else:** _my voice goes up at the end of a figure I am not sure of_ — **and I did not know.**   **3** ⚠ **With _yet_:** _I cannot yet refuse a load to a driver\'s face without reading the clause out to him._   **4** ⚠ **Cost something this year:** _I cannot yet read a sixty-page contract in a morning_ — **and it cost me four months of advice from the wrong page.**   **5** ⚠ **Not about English:** _I cannot find out what any of our budget-holders actually controls, and no amount of English will fix that._'));
out.push(A('⚠ **Mark 5 and insist on the second half of it.** **An organisational item written as a language item will be brought to language lessons for another two years** — **and the sentence _no amount of English will fix that_ is what releases both the student and the next teacher from it.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **My grammar is still weak.**',
  '_B:_ **I cannot yet write a conditional refusal that holds up when somebody reads it back to me, and you could watch it if you gave me a complaint and read my answer aloud.**',
  '_A:_ **I cannot find out what my own budget-holder controls.** ⚠ _(marked row)_',
  '_B:_ **That is not about English at all. It is about who in the organisation is told what a desk holds — and no amount of English will fix it. It belongs to whoever runs the budget office.**',
  '_A:_ **I lack confidence on the telephone.**',
  '_B:_ **I cannot yet take a figure down from somebody speaking quickly without asking them to repeat it twice, and you could watch it with one telephone and one number.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows are not about English at all** — **a budget, a drafter, a record, a notification** — **and the honest answer is to say so and name whose problem each is.** **Half of what a class brings to this list is organisational**, **and a teacher who accepts all of it has accepted work they cannot do and a student who offers all of it will be disappointed for two more years.** **The listener task should count the organisational items, because the count surprises the room.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**1** I cannot yet refuse a load to a driver\'s face without reading the clause out to him. You could watch it at any gate on any morning._',
  '_**2** I cannot yet write a second paper in somebody else\'s units without being told whose units they are._',
  '_**3** I cannot yet keep my own sampling practice the same on two different days, which is 23.4 and which I found out about myself._',
  '⚠ _**And the fourth, from my partner, which I did not agree with and have written down:** **I do not say the figure first when I am explaining a refusal to somebody senior; I say the clause first.** **She has watched me do it twice.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna gave three things she cannot yet do, under the rule that somebody could watch her fail at each one: she cannot follow two people arguing on a telephone line at once; she cannot take a minute in the room and have it readable without rewriting it; and she cannot say a figure she is not sure of without her voice going up at the end. The third surprised her, because she did not know she did it until Jad told her in 22.5 — and it is the one that has cost her most, because a figure said like a question is a figure nobody writes down. Which is why the list has to be made out loud and with other people in the room: the things you cannot do that you know about are the easy half, and the other half is visible to everybody except you. Omar asked why write it down at all, and because it is the only honest thing anybody can hand to a future teacher — a certificate tells them what you have passed and this tells them where to start, and in nineteen years nobody has handed one in on the first day of a course. Nour asked whether it is not rather bleak at the end of two years, and it is the opposite, and the reason is the second word: yet. I cannot do it yet is a sentence with a date in it somewhere, and I cannot do it is a description of a person. Dima asked how specific, and specific enough that somebody could set the situation up and watch. Adnan asked how many, and three and not ten, because a list of ten is a list nobody will act on. And Jad asked what happens if one of them is not about English at all, and then you write it and say so: half of what people bring to this list turns out to be about their own organisation and not their English, which is a true finding that does not belong to a language teacher. And Rim asked about saying a limitation out loud, which is flat, with no apology before it and no boast after it, because the sentence needs neither and is stronger without both.']));
out.push(A('⚠ **Mark the report on _yet_ and on the other half.** **A version that lists the three items and omits that the other half of the list is visible to everybody except the writer has lost the reason the stage is done aloud** — **and that reason is the only argument for doing it in a room rather than at home.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I cannot **still** follow two people._ → _I cannot yet follow_.   ⚠ _**I am afraid I** cannot._ → **strike the apology.**   ⚠ _You could **watch me to fail**._ → _watch me fail_.   ⚠ _It is not about English **at all of it**._ → _at all_.   ⚠ _**Three** things, and **not ten of them**._ → _and not ten_.'));
out.push(NOTE('⚠ **Three and not ten is a rule worth defending against the class, because a conscientious student will produce nine items and all nine will be true.** **A list of ten is a list nobody will act on, including the person who wrote it** — **and the three should be the three that cost something this year, which is a different question from the three that are furthest from perfect.** ⚠ **Make the room choose out loud and give the reason for the distinction:** **a list ordered by distance from perfection begins with the item nobody can start on, and a list ordered by cost begins with the one that will be finished.** **In this class the two orderings have agreed about once in six.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because the certificate says B2 and will be in the file: it tells a teacher what she has passed and nothing about where to start.** **The page gives three things a teacher could watch her fail at on the first morning** — **and in nineteen years nobody has handed one in.**'));
out.push(A('**2** ⚠ **The third: her voice goes up at the end of a figure she is not sure of.** **Mr Attar told her in October and then four other people in the room said they had noticed** — **and it is the one that has cost her most, because a figure said like a question is a figure nobody writes down.**'));
out.push(A('**3** ⚠ **It had no _yet_ in it.** **Four sentences describing a person who cannot do things** — **and the same four sentences with _yet_ in them are a plan.** **She is keeping the first draft to remind herself how close the two are.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT I CANNOT YET DO** _(R. Shaaban · one side of paper · for whoever teaches me next · 7 December)_',
  '**Why you are being given this instead of my certificate.** ⚠ **The certificate says B2.** **It tells you what I have passed and nothing about where to start.**',
  '**1  I cannot yet refuse a load to a driver\'s face without reading the clause out to him.** ⚠ **You could watch it at any gate on any morning.**',
  '**2  I cannot yet write a paper in somebody else\'s units without being told whose units they are.** ⚠ **I can do it once I am told, so this is a finding-out problem and not a writing problem.**',
  '**3  I cannot yet say the figure before the clause when I am explaining a refusal to somebody senior.** ⚠ **I did not know I did this.** **My partner has watched me do it twice.**',
  '**And a fourth that is not about English.** ⚠ **Nobody tells me when the standard is amended, and no amount of English will fix it.**',
  '**The order I think it should be in.** ⚠ **Three first, because it is weeks and it costs me something at every meeting.**',
]));
out.push(S('Stage 7 · Write freely (sample, 210 words)'));
out.push(SAMPLE([
  '**WHAT I CANNOT YET DO** _(R. Shaaban · one side of paper · for whoever teaches me next · 7 December)_',
  '**Why you are being given this instead of my certificate.** ⚠ **The certificate says B2 and it will be in the file.** **It tells you what I have passed and nothing about where to start** — **and this page tells you three things you could watch me fail at on the first morning if you wanted to.**',
  '**1  I cannot yet refuse a load to a driver\'s face without reading the clause out to him.** ⚠ **You could watch it at any gate on any morning.** **What happens is that I say the clause number, then the figure, and then read the clause** — **and by then he is arguing about the clause and not about the carton.**',
  '**2  I cannot yet write a paper in somebody else\'s units without being told whose units they are.** ⚠ **I can do it once I am told, so this is a finding-out problem and not a writing problem** — **which may mean it is not yours.**',
  '**3  I cannot yet say the figure before the clause when I am explaining a refusal to somebody senior.** ⚠ **I did not know I did this.** **My partner has watched me do it twice and I disagreed with her, and I have written it down anyway.**',
  '**And a fourth that is not about English.** ⚠ **Nobody tells me when the standard is amended; I find out by reading the inside back cover.** **No amount of English will fix that, and I am putting it here so that I stop bringing it to language lessons.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: _yet_ in every item.** All three have it, and the fourth correctly does not, because it is not yours to finish. **The line I copied is _which may mean it is not yours_** — and it is the most useful sentence on the page for the person receiving it._',
  '_**Criterion: the item somebody else supplied, marked.** **_I disagreed with her, and I have written it down anyway_ is the form to copy**, because it tells the next teacher how much weight to give it._',
  '_**Keep:** _and by then he is arguing about the clause and not about the carton._ **It works because it describes the failure rather than naming it, so a teacher knows what to arrange.**_',
  '_**Ranking of the slip I was given:** the demonstration criterion first, because two of mine had none; the _yet_ criterion second; the not-about-English criterion last, because I had only one and it was obvious._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two things to listen for and both are audible: an apology in front and a boast after.** **_I am afraid I still cannot_ and _although I have come a very long way_ are the two forms, and the room hears them before the speaker does.** **Then insist on the fourth item for every student, written down even where they disagree** — **and report the figure, which is that in this room the fourth item has been the one people worked on first about half the time.** **That is the argument for the whole cycle and it can only be reported, not predicted.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The page, three items with _yet_, a fourth from my partner, and one that is not about English.**_',
  '⚠ _**And the thing it is for, done: I have given it to Mrs Tannous, who is running the next course, and she read it in front of me and asked about item three.**_',
  '_**What she said:** that item three is four weeks of work and item one is a term, and that she would start with three — which is the order I had written, and I had not expected to be right about that._',
  '_**And she asked for the fourth item in writing, separately, to send to the standards office.** **Which is not what I expected to come out of a language lesson.**_',
]));

// ===================== 24.4 =====================
out.push(pb());
out.push(h2('24.4  The sentence you will be asked for next'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Rule out _longer_ and _more words_ before the pairs start, because that is where every first answer goes.** **The question is what a harder version would have to hold** — **and in almost every case the answer is that two things have to sit in one sentence instead of in two, which is the whole of the next level in one observation.**'));
out.push(A('**b** A real step up: **3** and **5**. Not: **1**, **2** and **4**. ⚠ **2 is the one to read twice** — _longer essays_ — **because length is the only measure students have been given by examinations and it is the one that does not move.** **The harder version of almost everything in these two books is shorter.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **holding two things in one sentence that B2 keeps in two**; and **the B2 version is not wrong; it is visible, and at C1 the work has to stop being visible.**'));
out.push(A('**b** **1** ⚠ **At B2:** _we cannot print the order by 2 April_, **with the reason in a separate sentence.** **At C1:** _we cannot print the order by 2 April, the roller having been out since the sixth of March_ — **the reason inside, in a form that cannot be argued with because it is a fact with a date and not a plea.**   **2** ⚠ **They write the C1 sentence badly and lose the B2 result**, **which is the commonest way a good writer goes backwards** — **somebody does it every year in March, and by May their letters are being argued with and they cannot tell why.**'));
out.push(NOTE('⚠ **The teaching point students want is _what is next_ and the teaching point they need is _not yet_.** **The B2 version is not wrong; it is visible** — **a reader can see the writer making a decision about order** — **and at C1 the work stops being visible, which is the only honest description of the difference.** ⚠ **So the instruction is: when the B2 version is automatic and not before.** **Mr Hariri\'s habits took four months each, and you do not build on a thing you still have to remember.** **Give the class the one thing that costs nothing and can be done today: the readiness page, three models, the harder version written out in full, and the question _is the B2 version automatic for me?_ answered honestly against each.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **From Unit 20:** _we cannot print the order by 2 April, the roller having been out since the sixth of March._   **2** ⚠ **From Unit 14:** _say which account governs while reporting them, without the reader seeing you choose._   **3** ⚠ **From Unit 21:** _give the criterion with its method inside the clause rather than beside it, so that there is nothing to cross-refer._   **4** ⚠ **Where the B2 version is better for now:** _the renunciation paragraph_ — **because its whole value is that the reader can see it, and an invisible renunciation has not been made.**   **5** ⚠ **In speech:** _at B2 you say the figure and then the unit; at C1 the unit is inside the phrase and the figure still cannot be mistaken_ — **and this one is harder in speech than in writing.**'));
out.push(A('⚠ **Mark 4 hardest, because it is the one that protects the student.** **Some of what these books taught is valuable precisely because it is visible** — **a renunciation, a scope sentence, _what I am not asking for_** — **and a student who makes those invisible has undone them rather than improved them.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **The news first, the reason in the next sentence.**',
  '_B:_ **The harder version holds the news and the reason in one sentence, with the reason as a fact and a date. Worth trying, because the B2 version is automatic for me since June.**',
  '_A:_ **The figure with its unit, never separated.** ⚠ _(marked row)_',
  '_B:_ **There is no harder version. It is a procedure and not a choice, and a procedure done invisibly is a procedure not done.**',
  '_A:_ **The criterion, then the method beside it.**',
  '_B:_ **The harder version puts the method inside the clause so that nothing has to be cross-referred. Not worth trying yet: I still have to remember to write the method at all.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have no harder version at all** — **a figure with its unit, both limits of a band, the amendment list first, the question before the document** — **because they are procedures and not choices.** **The listener task is the harder version and whether it is worth trying yet, and the answer to catch is an invented C1 version of a procedure.** **A pair who produce one have understood the level as a style and not as a stage.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**1 From Unit 21.** At B2 I write the criterion and then the method beside it. **Harder version:** no carton is to show a crush of more than 10 mm on any face when measured at its deepest point with the gate rule. **Automatic? Yes, since the spring.**_',
  '_**2 From Unit 23.** At B2 I give both sentences and then the two reasons. **Harder version:** clause 9.1, which was amended in March and supersedes the introduction at page 1, permits a check on the following morning. **Automatic? Yes.**_',
  '⚠ _**3 From Unit 22.** At B2 I give the problem figure and then the conversion. **Harder version:** the three hundred repeat calls are two hundred hours against four hundred and forty once, which is against me in the first year. **Automatic? No** — **I still have to be reminded to do the conversion at all, so this one is not ready.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The last question anybody asks on the last morning is what comes next, and the answer is not more words. It is holding two things in one sentence that B2 keeps in two, and that is the whole step, and it is harder than it sounds. Omar asked for an example, and Unit 20: at B2 you write we cannot print the order by the second of April and then, in a separate sentence, the reason — and the class was taught to keep them apart, because an explanation inside the news makes the news sound negotiable. Dima said that at C1 you put them together without that happening, and the way it is done is not by being clever with the grammar: we cannot print the order by the second of April, the roller having been out since the sixth of March. The reason is inside the sentence and it is in a form that cannot be argued with, because it is a fact with a date and not a plea. Nour asked whether the B2 version is wrong, and no, and this matters: the B2 version is not wrong but visible, because a reader can see the writer making a decision about order — and at C1 the work stops being visible, which is the only honest description of the difference. Adnan asked what happens if they try it now, and you write the C1 sentence badly and lose the B2 result, which is the commonest way a good writer goes backwards. Rim asked when, and when the B2 version is automatic and not before. And Jad asked whether there is anything to do now: keep the list, take three models and write what the harder version would have to hold, and put it with the cannot yet page — which is the only piece of paper that tells a next teacher what a student is ready for rather than what they lack. And Lubna asked about reading a long sentence out loud: to the end, without resetting in the middle, because a sentence that holds two things has a point about two-thirds through where the voice wants to start again, and the reset is where the sentence becomes two again.']));
out.push(A('⚠ **Mark the report on _not wrong but visible_.** **A version in which the B2 forms are a simplified version of the real thing has given the class permission to abandon them** — **and the finding is the opposite: the visibility is why any of it could be taught, and it is also why it is not the finished article.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _At C1 you **must to** hold two things._ → _you have to hold_.   ⚠ _The roller **has been** out since the sixth._ → _having been out_ **in the compressed form.**   ⚠ _It is not wrong; it is **visible to see**._ → _it is visible_.   ⚠ _Is the B2 version **automatically** for me?_ → _automatic_.   ⚠ _A procedure **done invisible**._ → _done invisibly_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because one says what the writer cannot do and the other says what the next level would ask of her** — **and between them they are the only two pieces of paper that would be of use to a teacher on a first morning.** **One alone is either a complaint or a boast.**'));
out.push(A('**2** ⚠ **The second, from Unit 14.** **She still writes the two accounts and then stops, and somebody has to ask her what she thinks** — **so the B2 version is not automatic and the harder version is not ready to be built on.**'));
out.push(A('**3** ⚠ **She was going to put all eleven models on the page.** **Then she asked _is the B2 version automatic?_ about each, and the answer was yes for three** — **and the other eight are not a C1 list; they are the B2 list, still.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT I AM READY FOR** _(R. Shaaban · to be kept with the _cannot yet_ page · 9 December)_',
  '**Why this page exists.** ⚠ **The other page says what I cannot do.** **This one says what the next level would ask of me, in three places.**',
  '**1  From Unit 21 — the criterion and the method.** ⚠ **The harder version puts the method inside the clause:** _no carton is to show a crush of more than 10 mm on any face when measured at its deepest point with the gate rule._ **Automatic? Yes, since the spring.**',
  '**2  From Unit 23 — the contradiction.** ⚠ **The harder version gives the governing sentence first with the other inside it.** **Automatic? Yes.**',
  '**3  From Unit 22 — the problem and the conversion.** ⚠ **Automatic? No** — **I still have to be reminded to do the conversion at all.**',
  '**Things I am not going to attempt.** ⚠ **The figure with its unit; both limits of a band; the amendment list first.** **None has a harder version, because they are procedures.**',
  '**And what I have understood.** ⚠ **The step is not from simple to complicated. It is from visible to invisible.**',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**WHAT I AM READY FOR** _(R. Shaaban · to be kept with the _cannot yet_ page · 9 December)_',
  '**Why this page exists.** ⚠ **The other page says what I cannot do.** **This one says what the next level would ask of me, in three specific places** — **and between them they are the only two pieces of paper that would be of any use to a teacher on a first morning.**',
  '**1  From Unit 21 — the criterion and its method.** **At B2 I write the criterion and put the method beside it.** ⚠ **The harder version puts the method inside the clause so that nothing has to be cross-referred:** _no carton is to show a crush of more than 10 mm on any face when measured at its deepest point with the rule kept at the gate._ **Is the B2 version automatic? Yes, since the spring.**',
  '**2  From Unit 23 — the contradiction.** **At B2 I give both sentences and then the two reasons.** ⚠ **The harder version gives the governing sentence first with the other inside it as a subordinate clause, so the reader never holds two candidates at once.** **Automatic? Yes, and this is the one I shall try.**',
  '**3  From Unit 22 — the problem priced in their units.** ⚠ **Automatic? No.** **I still have to be reminded to do the conversion at all, so there is nothing here to build on yet.**',
  '**And what I have understood about the whole of it.** ⚠ **The step is not from simple to complicated.** **It is from visible to invisible** — **and the visibility is why any of this could be learned.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the harder version written out in full.** Two of the three are written and the third is not, which is correct, because you answered _no_ to it. **The line I copied is _so the reader never holds two candidates at once_** — it explains why the harder version is harder, and most pages here do not._',
  '_**Criterion: the automatic question answered for each.** All three, and the _no_ is the useful one._',
  '_**Keep:** _and the visibility is why any of this could be learned._ **It works because it keeps the B2 forms respectable at the moment a student is about to abandon them.**_',
  '_**Ranking of the slip I was given:** the automatic-question criterion first, because it cut my page from nine items to three; the written-out criterion second; the procedures criterion last, because it was a list._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two things in this stage and the second is the one that matters.** **The reading: one sentence, to the end, without the reset two-thirds through** — **and the room can hear the reset.** **Then the question: is the B2 version automatic for this speaker?** **In this class the honest answer has been yes for two or three models out of eleven** — **and that figure should be given before anybody is disappointed by it, because a student who leaves this cycle thinking they have eleven C1 moves to make will make none of them.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Three models, three harder versions written out, and the automatic question answered: yes, yes, no.**_',
  '⚠ _**And the two pages are together now, folded into the same envelope, and the envelope is in the folder I take to meetings.** **Which is 24.2 applied to 24.4: the pages are attached to a moment and not to an intention, and the moment is the next time anybody asks me what I want to work on.**_',
  '_**The thing I had not expected:** writing the harder versions out in full made two of them look easier than I had assumed and one look much harder. **The one that looks harder is the one I answered _yes_ to.**_',
]));

// ===================== 24.5 =====================
out.push(pb());
out.push(h2('24.5  Telling somebody else what the course was for'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open, and time it. ⚠ **Fifteen seconds, and let the first attempt be a list of topics, because it will be and the class has to hear itself do it.** **Then say the diagnosis rather than the rule:** **everything in the topic list is true and none of it tells the listener anything, because they asked what you can now do and you answered what the timetable contained.**'));
out.push(A('**b** Tells a colleague something: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 is worth more attention than 2** — _it taught me to put the thing somebody will not like in the first line and the kindness after it_ — **because it is an answer with the method inside it, and a colleague can tell at once whether they want that.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is accurate and it describes nothing**; and **the person asking wants to know what you can now do that you could not, and a topic list answers a different question.**'));
out.push(A('**b** **1** ⚠ **He said: letters, meetings, reports, specifications, proposals and long documents** — **and his nephew said: _so, English._** **Everything he said was true and none of it told the boy anything.**   **2** ⚠ **It has to be his own and not a slogan** — **the thing he actually got, which is different for each student.** **Mr Hariri: _writing down what you test._** **Ms Shaaban: _writing a line that can be failed._**'));
out.push(NOTE('⚠ **The negative first is the structural point and it is 20.1 and 22.1 arriving in speech.** **The listener has already decided what the course was, and if you do not displace that, everything afterwards is heard as detail about their own idea.** ⚠ **Then the part a class will skip: the figure.** **_Was it worth it?_ is a different question from _what was it?_, and it needs the figure from 22.2 and not a definition.** _My disputes at the gate went from eleven a year to one._ **Say the sentence that lands: _it was very useful_ has closed more training budgets than any refusal** — **and a student who leaves the course without a figure for it will be asked for one within the year by somebody who can stop the next one.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **What it is not:** _it is not a course in English; I had the English before I started._   **2** ⚠ **What it is, in your own words:** _it is a course in writing the sentence somebody will not like, and putting it first._   **3** ⚠ **One example, and no second:** _in March I wrote four paragraphs and the news was in the fourth; in May it was nine words at the top._   **4** ⚠ **The figure:** _two letters withdrawn last year, none this year; and about twenty minutes on a difficult letter instead of over an hour._   **5** ⚠ **For somebody who is not a colleague:** **the same two sentences, unchanged** — **and the temptation to give a relation a gentler version or a manager a longer one is the temptation to give either of them the syllabus.**'));
out.push(A('⚠ **Mark 2 hardest and mark it for being the student\'s own.** **A sentence that could have been printed on the front of the book is a slogan** — **and the test is whether somebody else in the room could have written it.** **If two students produce the same second sentence, at least one of them has not answered.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **What was that course?**',
  '_B:_ **It is not a course in English. It is a course in writing a line that can be failed.** _(and nothing after it)_',
  '_A:_ **Was it worth it?** ⚠ _(marked row)_',
  '_B:_ **My disputes at the gate went from eleven a year to one, and the page I work from went from eleven lines to four.** _(and not: it was very useful)_',
  '_A:_ **What have you been doing?**',
  '_B:_ **It is not a course in English. It is a course in writing a line that can be failed.** _(the same two sentences, because the question is the same question)_',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows ask whether it was worth it, which is a different question, and the answer is a figure and not a definition.** **_It was very useful_ is the answer to catch and somebody always gives it** — **and the sentence to put beside it is that it has closed more training budgets than any refusal.** **The listener task is the two sentences and whether the speaker stopped**, **because the commonest fault is not the wrong words; it is the elaboration after the right ones.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**It is not a course in English. It is a course in writing a line that can be failed.**_',
  '_**Timed at eleven seconds**, and my partner said she would have asked a question after it, which is the point._',
  '⚠ _**And the figure, if they ask whether it was worth it: eleven disputes at the gate last year and one this year, from our own gate book and not from my memory.**_',
  '_**And if I had no figure, which I nearly did not:** **I would say so and say where I would get one** — **the gate book is initialled and anybody can count it in ten minutes, and I had never counted it until Unit 22.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Bassel\'s nephew asked him what the course was, and he said: letters, meetings, reports, specifications, proposals and long documents. Six words of topics, and the nephew said: so, English. Asked whether the nephew was wrong, Bassel said no, and that is what annoyed him — everything he said was true and none of it told the boy anything. Which is the problem with a topic list, and it is not that it is inaccurate: the person asking wants to know what you can now do that you could not, and a list of topics answers a different question, which is what the timetable contained. Nour asked what the form is, and two sentences: what it is not, and what it is. It is not a course in English; it is a course in saying the difficult sentence in writing. And then stop. Omar asked why what it is not, and because the listener has already decided what it is, and if you do not displace that, everything you say afterwards is heard as detail about their own idea — which is 20.1 and 22.1 arriving in speech, because the thing that displaces has to come first. Bassel said the second sentence has to be his and not a slogan, and it has to be the thing he actually got, which is different for each of them: Mazen would say it is a course in writing down what you test, and Rim would say it is a course in writing a line that can be failed, and both are true and neither is the syllabus. Dima asked what to do if they want more, and one example and no second example, because one is evidence and two is a lesson and nobody asked for a lesson in a doorway. And Rim asked what to say if they ask whether it was worth it: a figure, and the class has one — my disputes at the gate went from eleven a year to one, and not it was very useful, which is the sentence that has closed more training budgets than any refusal. And Adnan asked about saying it out loud, which is once and not elaborated, because people say the two sentences and then keep going, and the elaboration cancels the definition.']));
out.push(A('⚠ **Mark the report on _so, English_.** **It is the evidence for the whole cycle and students leave it out because it is somebody being rude about the course** — **and it is not: it is an accurate summary of a topic list, delivered by somebody who had been told the truth and learned nothing.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _It is not a course **of** English._ → _in English_.   ⚠ _It is a course **for writing** the difficult sentence._ → _in writing_.   ⚠ _**If you see what I mean**._ → **strike it.**   ⚠ _It **was very useful**._ → **give the figure.**   ⚠ _We **did** letters, meetings and reports._ → **strike the topic list.**'));
out.push(NOTE('⚠ **The fifteen seconds sound arbitrary and are not, and a class that is told why will keep the discipline.** **Fifteen seconds is the length of a doorway, a lift and the end of a meeting** — **the three places this question is actually asked.** **Nobody has ever asked what a course was while sitting down with time in hand, and an answer built for that occasion will never be delivered.** ⚠ **Then the fault the stage exists to catch, which is not the wrong words but the elaboration after the right ones.** **Time the silence rather than the sentences.** **Almost everybody keeps going** — _if you see what I mean_, _it is quite hard to explain really_ — **and the elaboration cancels the definition it follows.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because every word of it was true and none of it told his nephew anything** — **and the nephew\'s reply, _so, English_, was an accurate summary of what he had been given.** **He was annoyed, which is how he knows the boy was right.**'));
out.push(A('**2** ⚠ **Letters withdrawn: none this year against two last year.** **Time on a difficult letter: about twenty minutes against something over an hour** — **and the second is explained by the fact that most of the hour used to be spent arranging the order of the paragraphs, which he no longer has to decide.**'));
out.push(A('**3** ⚠ **All three began with the topics, and he could not get rid of them** — **they are what he has, in order, with dates, and they feel like the answer.** **The fourth draft begins with what it is not, and the topics are nowhere in it at all.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO MY SISTER, WHO ASKED AND GOT THE TIMETABLE** _(R. Shaaban · 11 December)_',
  '**What I said, and it was useless.** ⚠ **Criteria, specifications, proposals, long documents and two tests.** **Every word true, and you said: so, writing.**',
  '**What it is not.** ⚠ **It is not a course in English.** **I have been refusing deliveries in English for nine years.**',
  '**What it is.** ⚠ **It is a course in writing a line that can be failed.** **That is the whole of it for me.**',
  '**One example, and one only.** ⚠ **Our page used to say _the packaging must arrive undamaged_.** **I spent two hours at a gate on it in January, and at the end of the two hours the line was still true for me and still true for the driver.** **It now says ten millimetres.**',
  '**Whether it was worth it.** ⚠ **Eleven disputes at the gate last year and one this year.** **And the page went from eleven lines to four, which is not fewer rules but fewer arguments.**',
  '**What I would say about doing it.** ⚠ **Do not do it for the certificate.** **Do it if there is a line in your work that two people read differently.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**TO MY SISTER, WHO ASKED AND GOT THE TIMETABLE** _(R. Shaaban · 11 December)_',
  '**What I said, and it was useless.** ⚠ **Criteria, specifications, proposals, long documents and two tests.** **Every word of that is true and you said: so, writing** — **and you were right, which is why it annoyed me.**',
  '**What it is not.** ⚠ **It is not a course in English.** **I have been refusing deliveries in English for nine years and reading standards in it for longer.**',
  '**What it is.** ⚠ **It is a course in writing a line that can be failed.** **That is the whole of it for me, it is one sentence, and it took two years.**',
  '**One example, and I am giving you one and not two.** ⚠ **Our acceptance page used to say that the packaging must arrive undamaged.** **In January I spent two hours at the gate refusing a load on that line, and at the end of the two hours it was still true for me and still true for the driver** — **because it has two honest readings and the page never said whose eye decides.** **It now says ten millimetres, measured with the rule at the gate.**',
  '**Whether it was worth it, since Father will ask you.** ⚠ **Eleven disputes at the gate last year; one this year.** **And the page went from eleven lines to four** — **which is not fewer rules, it is fewer arguments.**',
  '**And what I would say about doing it.** ⚠ **Not for the certificate.** **Do it if there is a line in your work that two people read differently** — **and if there is not, wait until there is.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: a negative specific to you.** _Nine years and standards for longer_ does it, and it cannot be argued with. **The line I copied is _and you were right, which is why it annoyed me_** — it buys the rest of the letter in nine words._',
  '_**Criterion: one example with a figure.** The two hours and the ten millimetres. **_It was still true for me and still true for the driver_ is the sentence that makes the example teach something.**_',
  '_**Keep:** _which is not fewer rules, it is fewer arguments._ **It works because it answers the objection a reader of a quality page always has, before they can make it.**_',
  '_**Ranking of the slip I was given:** the one-example criterion first, because my own letter had three; the negative criterion second; the condition criterion last, since I had it already._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Time the silence after the two sentences, not the two sentences.** **Almost everybody keeps going** — _if you see what I mean_, _it is quite hard to explain_ — **and the elaboration cancels the definition.** **Then ask how many drafts it took to get the topics out of the first line.** **The answer is usually three or four, and Mr Tahhan\'s was four** — **and knowing that it takes four drafts is what stops a student concluding that they are bad at explaining their own work.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Letter written to my sister, 207 words, and sent on the eleventh.**_',
  '⚠ _**And she has replied, which no other piece of homework in this book has produced.** **She asked whether the two hours at the gate were paid for by us or by the carrier** — **which is a question I had never asked and which is going into my next paper.**_',
  '_**Four drafts.** The first three began with the list of topics and I could not get rid of them._',
  '_**And the figure I gave her is now written down somewhere outside my own head, which is the thing Unit 22 said about figures from your own records.**_',
]));

// ===================== 24.6 =====================
out.push(pb());
out.push(h2('24.6  Opening the letters'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** ⚠ **Hand out both pieces of paper at the same moment: the sealed letter and the guess from 24.1.** **Then four minutes of silence with no task in them.** **Do not use the four minutes to give instructions about what comes after, and do not shorten them** — **they are the only unstructured minutes in two books, and everything else in both volumes has a task attached to it.**'));
out.push(A('**b** A usable comparison: **2** and **5**. Not: **1**, **3** and **4**. ⚠ **1 is the one to notice** — _I was not far off_ — **because it is the sentence almost everybody reaches for and it is a verdict rather than a comparison.** **Ask for the two sentences instead and the drift appears on its own.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **say the two sentences and the difference between them, and nothing else**; and **the difference is the only finding, and any account of why is a defence.**'));
out.push(A('**b** **1** ⚠ **She wrote:** _I want to be able to answer an escalation without asking somebody to check the letter._ **She guessed:** _I wanted to be more confident on the telephone._ **The difference: the letter is about a letter and the guess is about the telephone.**   **2** ⚠ **Three things and not one** — **one sentence about what you want to be able to do, the _cannot yet_ list from 24.3, and the date you will open it.**'));
out.push(NOTE('⚠ **This cycle is run by not doing things and the key cannot make that easier.** **Do not ask why.** **Do not ask anybody to read a letter aloud.** **Do not fill a silence, and do not treat silence as an incomplete answer.** **All three were promised on the first morning of the unit and a promise kept here is the whole value of the exercise.** ⚠ **The one thing the teacher does supply is the count: how many guessed small-to-large, how many large-to-small, how many close, and how many found something they had done and forgotten was hard.** **No names and no letters.** **The count is the only public finding of the cycle and it is the finding the unit was built to produce** — **and it is also the thing a student can carry to the next two years, because it tells them that the drift is ordinary.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **What you wrote:** _I want to be able to answer an escalation without asking somebody to check the letter._   **2** ⚠ **What you guessed:** _I wanted to be more confident on the telephone._   **3** ⚠ **The difference, with no account of why:** _the letter is about a letter and the guess is about the telephone._   **4** ⚠ **The new sentence:** _I want to write a proposal whose figure is the last figure._   **5** ⚠ **The date and the keeper:** _1 December in two years, kept by Mr Deeb in the registry, who has written it in the book he keeps for certificates._'));
out.push(A('⚠ **Mark 3 hardest, and mark it for what is absent.** **Any clause beginning _because_ or _which was probably because_ is a defence of somebody who is not in the room** — **and the drift is the finding, not the explanation of it.** **A student who cannot stop at the difference should write the explanation down privately and not say it.**'));
out.push(S('Stage 3 · Practise (sample – one exchange)'));
out.push(SAMPLE([
  '_A:_ **I wrote: I want to be able to answer an escalation without asking somebody to check the letter. I guessed: I wanted to be more confident on the telephone. The difference is that the letter is about a letter and the guess is about the telephone.**',
  '_B:_ **Thank you.**',
  '_B:_ **I wrote: I want to tell a supplier his figure is wrong without it becoming an argument. I guessed something about not minding being disagreed with. The difference is that I have done the thing in the letter and I had forgotten it was difficult.**',
  '_A:_ **Thank you.**',
  '⚠ _(and neither of them asked why, and neither offered an interpretation, which is the whole of the stage)_',
]));
out.push(S('Stage 3R · Perform – the count'));
out.push(A('⚠ **There is no performance in this cycle and the key should say so plainly, because a teacher under time pressure will be tempted to restore one.** **What the room hears instead is the count, from the teacher, with no names and no letters:** **small-to-large, large-to-small, close, and found-and-forgotten.** **In this room the count has run roughly six, two, three and one in a class of twelve** — **and the small-to-large figure is the one to say last, because it is the largest and it is the one that tells every student in the room that they are ordinary.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The new letter, three things.** One sentence: I want to write a specification that a supplier comments on before he tenders rather than argues with at a gate. **The _cannot yet_ list from 24.3, copied in.** **And the date: 1 February in two years.**_',
  '⚠ _**And the outside of the envelope: the date, and _kept by Mr Deeb, registry_, and nothing else.**_',
  '_**My partner checked the outside and sent it back once, because I had written the keeper as our own section clerk** — **who sits opposite me, and who would hand it back on the first morning I asked.**_',
  '_**So it is Mr Deeb, who keeps the certificate book and whose job it is to keep dates.**_',
]));
out.push(S('Stage 4R · Report – the count (sample)'));
out.push(SAMPLE(['Four minutes, and nobody said anything, and then two sentences and the difference and nothing else. Nour wrote: I want to be able to answer an escalation without asking somebody to check the letter. She guessed: I wanted to be more confident on the telephone. The difference is that the letter is about a letter and the guess is about the telephone — she has changed what she thinks the problem was. That is the finding and it is enough, and it is not to be explained, because every account of why is a defence of somebody who is not in the room. Omar\'s was the other way round: he wrote something he now does every week and had forgotten was ever difficult — I want to tell a supplier that his figure is wrong without it becoming an argument — and he did it on Tuesday and did not notice doing it. Which is the rarer direction and the one nobody can feel, because learning is invisible from the inside, and the only evidence anybody ever gets of their own is a piece of paper they wrote before it happened. Dima said that now they write the next one, and it has three things in it and not one: one sentence about what they want to be able to do, the cannot yet list from 24.3, and the date they will open it. Adnan asked why the date, when nobody set one last time, and because nobody set one last time and the envelope was opened only because a course ended — so the date goes on the outside and somebody who is not the writer keeps it. And Rim asked who keeps it: somebody who will still be at the same work in two years and who is not the writer\'s closest friend there. A friend will give it back when you ask for it early, and the point of a sealed letter is that you cannot get at it — and in the last class two people chose the registry clerk, which is exactly right. And Lubna asked about reading their own old words aloud: at ordinary speed, as written, and only if they want to, because nobody is asked to read their letter aloud and nobody will be.']));
out.push(A('⚠ **Mark the report on the two accounts and on the absence of explanation.** **The commonest fault is a reported _because_** — **a student writing up what Ms Sabbagh said and adding the reason she had changed her mind, which she did not give and was not asked for.** **The report should feel slightly bare, and a report that does not feel bare has added something.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _I **was not far** off._ → **give the two sentences.**   ⚠ _The difference is **because** I had changed._ → _the difference is that…_   ⚠ _To be **open** on 1 December._ → _to be opened_.   ⚠ _**Kept from** Mr Deeb._ → _kept by_.   ⚠ _I had **forget** it was hard._ → _had forgotten_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **One sentence about what she wants to be able to do; the _cannot yet_ list from 24.3; and the habits that stuck so that the reader can check them.** **She calls the _cannot yet_ list the honest part** — **and the date and the keeper are on the outside rather than in the letter.**'));
out.push(A('**2** ⚠ _Do not read this on a good day._ **Read it on the Thursday after something has gone wrong, which is when it will be of some use** — **and if you are reading it in a quiet week, put it back and wait.** **A letter read in a quiet week is read as a curiosity.**'));
out.push(A('**3** ⚠ **Because he will still be in the registry in two years and because he is not a friend of hers** — **and because she asked him for the date and not for the envelope, so he has written it in the book he keeps for certificates.** **It will be given to her whether or not she remembers to ask.** **Her own note records that she nearly went back for it two days later to change the first sentence.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO MYSELF, TO BE OPENED ON 1 FEBRUARY IN TWO YEARS** _(R. Shaaban · sealed 12 December · kept by Mr Deeb in the registry)_',
  '**What I wrote last time.** ⚠ _I want to write a specification somebody cannot argue with at the gate._ **I guessed something about being taken seriously, and the difference is that the letter had a gate in it and the guess did not.**',
  '**What I want to be able to do, in one sentence.** ⚠ **I want to write a specification that a supplier comments on before he tenders rather than argues with at a gate.**',
  '**What I cannot yet do.** ⚠ **1 Refuse a load to a driver\'s face without reading the clause out.** **2 Write a paper in somebody else\'s units without being told whose they are.** **3 Say the figure before the clause to somebody senior.**',
  '**The habits that stuck, so that you can check them.** ⚠ **The figure with its unit; the method in the line; the failing figure in writing at the gate.** **If any has gone, look at that and not at the new sentence.**',
  '**One instruction for you.** ⚠ **Do not read this in a quiet week.** **Read it after a load has been refused and argued about.**',
  '**Who has this and why.** ⚠ **Mr Deeb, because he will still be in the registry and because he is not a friend of mine.**',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**TO MYSELF, TO BE OPENED ON 1 FEBRUARY IN TWO YEARS** _(R. Shaaban · sealed 12 December · kept by Mr Deeb in the registry)_',
  '**What I wrote last time, so that you have all three sentences.** ⚠ _I want to write a specification somebody cannot argue with at the gate._ **I guessed, before opening it, that I had written something about being taken seriously** — **and the difference is that the letter had a gate in it and the guess did not.**',
  '**What I want to be able to do, in one sentence.** ⚠ **I want to write a specification that a supplier comments on before he tenders rather than argues with at a gate** — **which is the seventeen words of 21.7 and not a specification problem at all.**',
  '**What I cannot yet do, which is the honest part.** ⚠ **1 I cannot yet refuse a load to a driver\'s face without reading the clause out to him.** **2 I cannot yet write a paper in somebody else\'s units without being told whose units they are.** **3 I cannot yet say the figure before the clause to somebody senior, and my partner had to tell me that one.**',
  '**The habits that stuck, so that you can check whether they are still there.** ⚠ **The figure with its unit; the method in the same line as the figure; and the failing figure given in writing at the gate.** **If any of the three has gone, that is the thing to look at and not the new sentence.**',
  '**One instruction for you.** ⚠ **Do not read this in a quiet week.** **Read it after a load has been refused and argued about, which is when it will be of any use.**',
]));
out.push(S('Stage 7P · Respond (the envelope only)'));
out.push(A('⚠ **No peer review in this cycle: the letter is sealed and nobody reads it.** **What the partner checks is the outside of the envelope, and three things only** — **a date, a keeper\'s name, and that the keeper is not a friend of the writer\'s.** **All three are visible without opening anything.** **In the last class three envelopes went back at this point and all three had named the person the writer sits next to** — **which is the commonest error and the only one this stage can catch.**'));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Only two facts are said aloud: the keeper\'s name and the date.** **Nothing about what is inside, and the teacher should stop anybody who starts.** **The room checks that the keeper will still be there and is not a friend** — **and then the cycle ends without a summary, which will feel wrong to a teacher and is correct.** **The last instruction of the unit is in the homework and it is physical: hand the envelope over in person and watch the date go into a book.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Envelope handed to Mr Deeb on the twelfth, in person.**_',
  '⚠ _**And he wrote the date in the certificate book in front of me, which took him about nine seconds and which is the whole mechanism.** **He also asked what happens if he retires first, and said he would put a second note in the book for whoever takes it over** — **which I had not thought of and which is better than anything in my letter.**_',
  '_**One thing I noticed afterwards:** I nearly asked him for it back two days later to change the first sentence. **That is why he has it and I do not.**_',
]));

// ===================== 24.7 =====================
out.push(pb());
out.push(h2('24.7  Review & Mediate: The person who sealed the letter and the person who opened it'));
out.push(S('Stage 1 · Get ready – Unit 24 quiz'));
out.push(A('**1** _It is a real **achievement** and I shall say so._   **2** _Her **progress** over the two books is more than I expected._   **3** _His **persistence** over two years is the whole story._   **4** _She has a **fluency** I have not got._   **5** _The **maturity** of the second book is obvious._   **6** _My **reflection** on all this is in the letter._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **A sealed letter cannot know what will have stopped mattering.** **It is written for a reader who has to be invented, and the invention is always of a person with the writer\'s present problem** — **which is the one thing certain to have changed.** **The part that survives is the record of what was hard:** _I think the hardest part will be the first line_ **is about the writer and not about escalations, and is still useful to a woman now writing proposals.**'));
out.push(S('Language box · Practise'));
out.push(A('⚠ **No Practise line in x.7.** **The Language box here records the three moves and the last finding of the course, and the work is in Stages 3 and 4 rather than in a drill.** **Read it aloud once before Stage 3 and leave it open on the desk.**'));
out.push(S('Stage 3 · Practise (sample – one pair)'));
out.push(SAMPLE([
  '_**What the letter was for.** Making one want testable, so that it could not quietly turn into _being more confident_. It did that: the sentence was still a sentence two years later and she has done the thing in it._',
  '_**The thing it cannot do.** Know what will have stopped mattering. It was written for a reader who had to be invented, and the invention was a person with the writer\'s problem of two years ago._',
  '_**What survives.** The record of what was hard: _I think the hardest part will be the first line_. That is about her and not about escalations._',
  '⚠ _**What the person who opened it can supply.** The next letter, on the same day, before leaving the room — and almost nobody does, because the opening feels like an ending._',
  '_**And what we are not concluding.** That the first letter failed. It did what it was for, and the thing it could not do, nothing can._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The answer to catch is _it failed_, and somebody will give it, because the letter did not speak to the reader who opened it.** **The correction is the finding: it did what it was for, and the thing it could not do, nothing can** — **and a letter general enough to survive two years of change is a letter that was never worth sealing.** **Perform this stage only if both pairs volunteer.** **In a class that has just read its own letters, a compulsory performance is the one thing that will undo 24.6.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**What my letter was for:** making me name the gate rather than my own standing. It did that._',
  '_**The thing it cannot do:** it could not know that the problem would move from the gate to the tender. The woman who wrote it had never read a tender._',
  '⚠ _**What survives:** one clause — _I think the hard part will be saying it to his face_. **That is about me and it is still true, and it is item one of my _cannot yet_ list two years later.**_',
  '_**And there was nothing else that survived**, which is why I have put that clause into the letter I sealed yesterday, in those words, so that the next one has at least one line that cannot go out of date._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['The last mediation in the course, and the two accounts are by the same person. Asked whether the letter was wrong, Nour said no — she would write it again, and the woman who opened it is right as well, which is a strange thing to say about oneself. That account in her own words: it is about somebody else\'s problem. She answers escalations alone and has for a year, and the letter has nothing to say to her about proposals, because the woman who wrote it had never written one. So the mediation, in the three moves one last time: separate what the letter was for from what its reader needed; find the thing it cannot do; and say what survives. It was for making one want testable, so that it could not quietly turn into being more confident — and it did that, because the sentence was still a sentence two years later and she has done the thing in it. The thing it cannot do, Dima said, is know what will have stopped mattering: a sealed letter is written for a reader who has to be invented, and the invention is always of a person with the writer\'s present problem, which is the one thing certain to have changed. Which is the finding, and it is the last one in the course — everything in the unit asked them to write for their future selves, and nothing in it noticed that a future self is the one reader nobody can research. Adnan said the ambition is the perishable part, and the ambition is perishable and something else is not: what survives a change of problem is the record of what was hard. And Rim asked what the woman who opened it can supply: the next letter, on the same day, before she leaves the room — and almost nobody does it, because the opening feels like an ending. Lubna asked whose decision that is, and hers, and only hers, because there will be no course next time and no teacher to say now write the next one. And what must not be done: do not write a letter so general that it cannot be wrong, and do not conclude that the first letter failed — it did what it was for, and the thing it could not do, nothing can.']));
out.push(A('⚠ **Mark the report on the symmetry.** **Both accounts are by the same person and both are accurate, and a report that makes one of them the right one has lost the only mediation in the course where the two parties cannot be reconciled by talking to each other.** **The line to look for is Ms Sabbagh\'s:** _the woman who opened it is right as well, which is a strange thing to say about myself._'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _It is about **somebody else problem**._ → _somebody else\'s problem_.   ⚠ _The reader has to be **invent**._ → _invented_.   ⚠ _What **survive** a change of problem._ → _survives_.   ⚠ _The opening feels like **an end** rather than a middle._ → _an ending_.   ⚠ _**Nothing can** do the thing it could not._ → _and the thing it could not do, nothing can_.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 1)'));
out.push(A('**1** **C** _(start out)_   **2** **B** _(turns out)_   **3** **D** _(fallen away)_   **4** **A** _(survive)_   **5** **C** _(tally with)_   **6** **B** _(picks up)_   **7** **D** _(an ending)_   **8** **A** _(held on to)_'));
out.push(NOTE('⚠ **Items 5 and 7 are the two that separate a class and they fail for different reasons.** **Item 5 needs _tally with_, which is this unit\'s declared phrasal verb, and the trap is that three of the four options collocate with _with_ in some register** — **so teach the habit of reading the whole clause: _does tally with whatever the reader has become_ is the only one that means _agree in substance_.** ⚠ **Item 7 needs the noun _ending_ and not _end_, and _end_ is not on the page precisely because it would also work** — **the distractors are three nouns that do not contrast with _a middle_.** **Item 1 is the gentle one and worth using to teach the method: look at the particle first.** **Only one of the four verbs takes _out with_ in the sense of beginning.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE LETTER, TWO ACCOUNTS** · _the same woman, two years apart_',
  '**The letter.** _"I want to write a specification somebody cannot argue with at the gate. I think the hard part will be saying it to his face."_',
  '**The person who sealed it.** _"It names the gate and not my own standing, which is what I had been avoiding. One sentence, testable."_',
  '**The person who opened it.** _"It is honest and the problem has moved. Nobody argues with me at the gate now. What I cannot do is get a supplier to comment on a figure before he tenders — and the woman who wrote this had never read a tender."_',
  '⚠ **Both accounts are accurate and neither is about the letter.**',
  '**What the letter was for.** **Making me name the gate.** ⚠ **It did that.**',
  '**The thing it cannot do.** ⚠ **Know what will have stopped mattering.**',
  '**What survives a change of problem.** ⚠ **_I think the hard part will be saying it to his face_**, **because it is about me and not about gates.**',
  '**What the person who opened it can supply.** ⚠ **The next letter, today, before leaving the room.**',
  '**And what I am not concluding.** ⚠ **That the letter failed.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 2: a letter, sample 209 words)'));
out.push(SAMPLE([
  '**Dear Lubna,**',
  '**You asked whether you should take the course, and the honest answer depends on one thing, which I shall come to.**',
  '**First, what it is not. It is not a course in English. Most of the people in my group had the English before they started; two of them read technical manuals in it for a living.**',
  '**What it is, for me, is a course in writing a line that can be failed. That is the whole of it in one sentence and it took two years.**',
  '**One example. Our acceptance page used to say that the packaging must arrive undamaged. In January I spent two hours at the gate refusing a load on that line, and at the end of the two hours it was still true for me and still true for the driver — because it has two honest readings and the page had never said whose eye decides. It now says ten millimetres, measured with the rule kept at the gate. Our disputes at the gate went from eleven last year to one this year, and that figure is from our own gate book and not from my memory.**',
  '**And now the condition, which is the answer to your question. Do it if there is a line in your work that two people read differently and you have been avoiding writing it properly for a year. If there is not, wait until there is, because the course is only useful to somebody who already has a sentence they cannot write.**',
  '**Yours,**',
  '**Rim**',
]));
out.push(NOTE('⚠ **The letter above is a band-5 answer and the fourth requirement is where it earns the mark.** **A recommendation with no condition on it reads as politeness, and the examiner is looking for a letter the colleague could actually decide on.** ⚠ **Mark three things hardest.** **One: the negative first, and specific** — _most of the people in my group had the English before they started_ **is a fact and not a slogan.** **Two: one example and one only; a letter with three examples has stopped answering the question that was asked.** **Three: the figure with its source** — _from our own gate book and not from my memory_ — **which is Unit 22 arriving in a Part 2 letter and is the sentence that could not have been written before this course.** **Register: a personal letter to a colleague, so contractions are acceptable and headings are not.**'));
out.push(S('Stage ✓ · Unit 24 check'));
out.push(A('**A** **1** a _(achievement)_   **2** b _(progress)_   **3** c _(persistence)_   **4** b _(fluency)_   **5** c _(maturity)_   **6** a _(reflection)_   **7** b _(Competence)_   **8** c _(awareness)_'));
out.push(A('⚠ **Item 2 is the item that separates a class.** **_Her progress over the two books_ takes the plain noun, and students reach for _progressive_ because the unit has just taught them eight abstract nouns and _progressive_ looks like one.** **It is an adjective, and _her progressive over the two books_ is audibly wrong to anybody who reads it aloud.** ⚠ **Item 7 is the pair to put beside it:** **_competence in a second language_ is the noun and _competent_ is what a class writes, because the sentence could begin with an adjective in a different construction.** **The general habit, stated once and for the last time in this course: read the words on either side of the gap before deciding the part of speech.**'));
out.push(A('**B  Listening** **1** A   **2** C   **3** B   **4** C   **5** A   **6** B   **7** C'));
out.push(A('⚠ **Items 2 and 4 are the two to replay.** **In 2 all three options describe a direction of drift and the question asks which is commoner** — **she says the small specific want is replaced by the large vague one, and students choose B because a want getting smaller sounds more like failure.** ⚠ **In 4 the trap is A, _they should be practised more_, which is what a teacher would be expected to say and is the opposite of what she says.** **She says they cannot become habits at all and belong on printed paper, and that saying so is more honest than pretending.** **Item 7 is worth one replay for a different reason: it is the last answer in the course, and what almost nobody does is write the next letter on the same day.**'));
out.push(A('**C  Writing** — **marked on the four requirements and on the register.** ⚠ **All four or the content mark goes**, **and the commonest loss is the fourth: a recommendation with no condition on it.** **The second commonest is a second example** — **which costs nothing by the descriptors and everything in the reader\'s attention, and is worth marking as a comment even where it does not move the band.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 24 (sample)'));
out.push(SAMPLE([
  '_**Mediation written, and the part of my old letter that survives named: one clause, about saying it to his face.**_',
  '_**Letter written to Lubna, 209 words, four requirements, and sent.**_',
  '⚠ _**And the thing I am taking out of the whole of this, which is not a function:** **read your own old account as you would read a colleague\'s.** **I have two years of my own paper in front of me and the only way any of it was usable was by reading it as though somebody else had written it** — **which is what the two books have been teaching, on other people\'s documents, for forty-eight cycles.**_',
]));
out.push(sp());
out.push(box('After Unit 24', [
  '**This is the end of the second book and of the series.** ⚠ **There are three pieces of paper a student should leave with, and none of them is the certificate:** **the stocktaking page from 24.2, the _cannot yet_ list from 24.3 and the readiness page from 24.4.** **The sealed letter is the fourth and they do not have it, because somebody else does.**',
  '⚠ **What to do with the _cannot yet_ lists.** **Collect a copy of each, keep them, and give them to whoever teaches the group next** — **on the first morning, before any assessment.** **In nineteen years no teacher has ever been handed one, and the whole of 24.3 exists to change that for twelve people.**',
  '**And the last thing to say to the room, which should be said and not written.** ⚠ **Two of these twelve will take a C1 course and the rest will not.** **The ones who do not have the three pages, the sealed letter and a keeper with a date in a book** — **and that is a better arrangement for the next two years than a course would be, because nobody is going to set them a task and they now have four that set themselves.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 24 · Answer Key');
