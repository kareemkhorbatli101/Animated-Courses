// Proactive English C1 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT A STUDENT SAYS HAS CHANGED', 'WHAT THE EVIDENCE FOR IT IS'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const ready = (rows) => table(['THE C1 MOVE, AS IT IS NOW', 'ITS HARDER VERSION IN BOOK 2', 'THE AUTOMATIC QUESTION'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three claims from the reports on the board. For each one the room says what the evidence is, and whether it is an occasion with a date.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 12  What the Year Made Automatic'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**The last unit of Book 1 is about what has happened to you, and the only acceptable evidence for any of it is an occasion with a date.** ⚠ **Not a feeling.** **Not _I am more confident_.** **An occasion: a letter you wrote on the fourth of May, a sentence you did not write, a question somebody asked you that nobody had asked before.**',
  '**12.1** says which Book 1 move you now make without noticing, with the evidence.   **12.2** reads your _cannot yet_ list from Unit 1 and crosses off what has gone.   **12.3** names the item that has not moved, and says whether it is about English at all.   **12.4** tests your own invisibility on a reader who does not know the method.   **12.5** writes the readiness page for the second book.   **12.6** writes the proposal for the thing you will do with this English.   **12.7** mediates between the student you were in September and the student you are now.',
  '**Exam practice in 12.7:** C1 Advanced **Reading and Use of English Part 5** (multiple choice), **Writing Part 2** (a proposal) and **Listening Part 4** (two tasks of five).',
  '⚠ **Bring one thing to the first lesson of this unit and it is not optional.** **Your _cannot yet_ list from 1.2**, in the handwriting you wrote it in. **If you have lost it, say so at Stage 1 and write it again from memory before you look at anything** — **and mark that version as reconstructed, because the difference between the two is itself a finding and 12.2 uses it.**',
  '**And one warning about this unit, which is the gentlest in the book and the easiest to waste.** ⚠ **Nothing here is a celebration.** **12.3 is the cycle that matters and it asks you to name the thing that has not moved and then to say whether it was ever about English** — **and in this class about half of every _cannot yet_ list has turned out to belong to an organisation and not to a language, which is a harder finding than any gain in it.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 12.1 =====================
out.push(pb());
out.push(h2('12.1  The move you no longer notice'));
out.push(p('**Function:** saying which Book 1 move you now make without noticing, and giving the evidence   ·   **Grammar:** the evidence is an occasion with a date, never a feeling   ·   **Pronunciation:** a claim about yourself made without a rise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you now do in writing that you did not do in September.** ⚠ **One sentence, and then stop.** Your teacher writes the ten claims on the board and leaves the second column empty. **In most classes seven or eight of the ten first answers are a feeling** — _I am more careful_, _I think about the reader_ — **and the empty column is what the cycle is for.**'));
out.push(board('I think about the reader more.', 'On 4 May I deleted a sentence before sending.'));
out.push(p('**b**  Which two are evidence? **1** _On 4 May I deleted the word "significant" from a paragraph before anybody asked me to._  **2** _I am much more aware of my reader now._  **3** _My writing has improved considerably._  **4** _In June a referee asked me nothing about my search, for the first time in four submissions._  **5** _I feel more confident about formal English._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide counts as evidence?   **A** a feeling of improvement   **B** **an occasion with a date** — something that happened, or did not happen, on a day you can name   **C** a teacher\'s opinion'));
out.push(p('**b**  Listen again. **1** What is Mr Shihabi\'s evidence, and why does he say it surprised him?   **2** What does Mrs Khoury say about the claims that have no occasion behind them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  An occasion with a date', [
  ['Ms Huda', 'Mr Shihabi — one thing you now do that you did not do in September.'],
  ['Mr Shihabi', '⚠ **On the eleventh of June I filed eighty-six words and the desk ran them unchanged.** **That had never happened before.** **It has happened four times since and I can give the dates.**'],
  ['Mrs Tarabishi', 'That is a result and not a move.'],
  ['Mr Shihabi', '⚠ **The move is what produced it and I did not notice doing it.** **I wrote the shape with the holes in it first, made two calls, and filled them** — **and I had not decided to work that way: I found that I had, about three weeks after I stopped thinking about it.**'],
  ['Mrs Khoury', '⚠ **Which is the only kind of evidence this cycle accepts, and the room should hear why.** **A claim about yourself with no occasion behind it cannot be checked by anybody, including you** — **and _I am more careful_ is true of everybody in this room every June and was true last June as well.**'],
  ['Dr Qabbani', 'Mine is a negative. Nobody asked me something.'],
  ['Mrs Khoury', '⚠ **A negative with a date on it is the strongest evidence there is.** _In June a referee asked me nothing about my search, for the first time in four submissions._ **Four submissions is a denominator** — **and the class should notice that it has just applied 4.5 to a claim about itself.**'],
  ['Mrs Ajouz', 'Is it not strange to require a date about your own English?'],
  ['Mrs Oueidat', '⚠ **It is exactly as strange as requiring one about anything else, which is to say not at all.** **Everything this book has taught about other people\'s claims applies to your own** — **and a readiness page written out of feelings is a readiness page nobody can act on, including the teacher of your second book.**'],
  ['Mr Tayara', 'And where somebody genuinely has no occasion?'],
  ['Mrs Khoury', '⚠ **Then nothing has become automatic yet and that is a true answer.** **It happens to two or three people in any class and it is not a failure** — **a move can be learnt, usable and still deliberate, and the honest sentence is _I can do it and I still decide to_.**'],
  ['Mrs Rizk', 'Mine is that I stopped doing something.'],
  ['Mr Shihabi', '⚠ **Those are the best ones and they are the hardest to date**, because nobody notices the day they stop. **The way to date a stopping is to find the last time you did it** — **Mrs Rizk\'s last _significant_ is in a document of the fourth of March and there has not been one since.**'],
  ['Jad', 'How long does a move take to become automatic?'],
  ['Mrs Khoury', '⚠ **Nobody in this class has reported less than two months or more than five**, and the number appears to depend on how often the occasion arises rather than on difficulty. **Mr Shihabi files every day and Mrs Tarabishi submits twice a year** — **and the same move took three weeks for one and is not automatic for the other.**'],
  ['Mr Zahreddine', 'I have written the same way for twenty years and three things are different.'],
  ['Mrs Tarabishi', 'And mine is still deliberate. Every time.'],
  ['Mrs Oueidat', '⚠ **Which is the entry to write and not the one to be embarrassed by.** **You submit twice a year and the occasion has arisen twice** — **and a move that has been made twice on purpose is a move, and the second book will make it three times.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is that I did not decide anything.** **For two years I believed I was a slow writer, and then one afternoon in June I noticed that I had started with the holes** — **and the noticing came three weeks after the change, which means the change was not a decision and cannot be claimed as one.**'],
]));
out.push(sp());
out.push(box('Language box – evidence about yourself', [
  '**The only evidence this cycle accepts.** ⚠ **An occasion with a date.** **Something that happened, or did not happen, on a day you can name.** **_I am more careful_ is true of everybody in this room every June and was true last June as well.**',
  '**The negative with a date is the strongest form.** ⚠ _In June a referee asked me nothing about my search, for the first time in four submissions._ **Four submissions is a denominator** — **and this is 4.5 applied to a claim about yourself, which is the one place in the book where the technique is turned inwards.**',
  '**How to date a stopping.** ⚠ **Nobody notices the day they stop doing something.** **Find the last time you did it.** _My last "significant" is in a document of the fourth of March and there has not been one since._ **The date of the last instance is the date of the change.**',
  '**What automatic means and what it does not.** ⚠ **A move is automatic when you find that you have made it, not when you remember to.** **A move can be learnt, usable and still deliberate** — **and _I can do it and I still decide to_ is a true answer and not a weaker one.**',
  '**How long it takes, measured in this class.** ⚠ **Between two and five months, and it depends on how often the occasion arises and not on difficulty.** **Somebody who files every day and somebody who submits twice a year will take three weeks and two years over the same move.**',
  '**And the thing that cannot be claimed.** ⚠ **A change you noticed three weeks after it happened was not a decision.** **Say that it happened and do not say that you chose it** — **which is the only honest form of the sentence and is also the form a reader believes.**',
  '**Pronunciation.** 🔊 **Track 12.2** **Say your claim with no rise at the end.** ⚠ _On the eleventh of June I filed eighty-six words and the desk ran them unchanged._ **A rise turns a fact about yourself into a question to the room**, and the room then reassures you, which costs the claim its evidence. **Fall on the last three words and stop.**',
  '**Practise:** State the move and give the occasion. **1** something you started  **2** something you stopped, dated by its last instance  **3** a negative — something nobody asked  **4** one where there is no occasion yet  **5** one you noticed afterwards — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B says **whether it is evidence** and, where it is not, **asks the one question that would produce some.** ⚠ **Two rows on each card are feelings with no occasion behind them.** **B must not accept them.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_On 4 May I deleted "significant" before anybody asked me to._', '_In June a referee asked me nothing about my search._'],
  ['_⚠ I am much more aware of my reader now._', '_⚠ My formal English has improved a great deal._'],
  ['_My last "satisfactory" is in a file of 7 February._', '_The last time I wrote "kindly do the needful" was in March._'],
  ['_⚠ I feel more confident writing to senior people._', '_⚠ I understand hedging much better than I did._'],
  ['_On 11 June the desk ran eighty-six words unchanged, for the first time._', '_Three letters since April have gone out with no formula at the top._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** evidence or feeling, and the question. ⚠ **Rows 2 and 4 on both cards are feelings** — **and the question that produces evidence is always the same one: _when was the last time?_** **Rows 3 are stoppings dated by their last instance**, which is the form the room will find hardest to produce and easiest to recognise. **Rows 5 are the strongest of all**: a count with a date and a _for the first time_, which is a denominator in four words.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your claim from Stage 1** and find **the occasion.** ⚠ **If it is a starting, give the date.** **If it is a stopping, find the last instance and give that date.** **If it is a negative, give the denominator** — _for the first time in four submissions_. **In this class about a third of the first claims have been abandoned at this stage**, and that is the cycle working.'));
out.push(p('**b**  Swap. Your partner reads **only your occasion** and says **what move it is evidence of.** ⚠ **They are right about two-thirds of the time, and the third where they are wrong is the interesting one** — **because an occasion that is evidence of a different move from the one you claimed tells you something you did not know about your own writing.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _On the eleventh of June Mr Shihabi filed eighty-six words and the desk ran them unchanged, which had never happened before, and it has happened four times since and he can give the dates. Mrs Tarabishi said that is a result and not a move, and the move is what produced it and he did not notice doing it: he wrote the shape with the holes in it first, made two calls and filled them, and he had not decided to work that way but found that he had, about three weeks after he stopped thinking about it. Mrs Khoury said that is the only kind of evidence this cycle accepts, because a claim about yourself with no occasion behind it cannot be checked by anybody, including you, and I am more careful is true of everybody in the room every June and was true last June as well. Dr Qabbani said his is a negative, that nobody asked him something, and a negative with a date on it is the strongest evidence there is: in June a referee asked him nothing about his search, for the first time in four submissions, and four submissions is a denominator. Mrs Ajouz asked whether it is not strange to require a date about your own English, and Mrs Oueidat said it is exactly as strange as requiring one about anything else, which is to say not at all. Mr Tayara asked about somebody who genuinely has no occasion, and then nothing has become automatic yet and that is a true answer: a move can be learnt, usable and still deliberate. Mrs Rizk said hers is that she stopped doing something, and those are the best ones and the hardest to date, because nobody notices the day they stop — and the way to date a stopping is to find the last time you did it. Mr Attar asked how long a move takes to become automatic, and nobody in the class has reported less than two months or more than five, and the number depends on how often the occasion arises. Mr Zahreddine said he has written the same way for twenty years and three things are different. Mrs Tarabishi said hers is still deliberate every time, and Mrs Oueidat said that is the entry to write and not the one to be embarrassed by: she submits twice a year and the occasion has arisen twice, and a move made twice on purpose is a move. And Mr Shihabi said the thing he will take away is that he did not decide anything: the noticing came three weeks after the change, which means the change was not a decision and cannot be claimed as one._'));
out.push(p('**Listener task:** write your occasion, with its date, and what your partner said it was evidence of.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Shihabi wrote for his own file at the end of the year. Answer the questions.'));
out.push(model([
  '**T. SHIHABI** · _note for my own file_ · _four things that are different, with the occasions_ · **26 July**',
  '**Four things are different and three of them have dates.** ⚠ **The fourth has no occasion behind it yet and is listed as not yet automatic**, which is a true entry and not a gap.',
  '**One: I start with the shape and the holes.** **On 11 June I filed eighty-six words and the desk ran them unchanged, which had not happened before in two years of filing.** **It has happened four times since: 18 and 27 June, 4 and 19 July.** ⚠ **I did not decide to work this way.** **I noticed, about three weeks after it started, that I had stopped writing sentences first** — **so the change is dated by the result and not by the decision, because there was no decision.**',
  '**Two: I have stopped varying the reporting verb.** **The last _claimed_ in my copy is in a story of 14 March.** **There have been none since and the desk has not inserted one.** **A stopping is dated by its last instance**, because nobody notices the day they stop.',
  '**Three: a negative, which is the one I value most.** **The desk has not changed a word of a first paragraph of mine since 11 June.** **Before that it changed about one word a paragraph** — **which is its own figure and not mine: the chief sub-editor gave it in a note to contributors and I had never counted my own.**',
  '**Four, which is not automatic.** **I can write the absences list for a story that will be translated overnight, and I still have to decide to.** ⚠ **I have done it three times, on 2, 14 and 22 July, and each time because I remembered.** **A move I remember to make is not automatic and I am not claiming it as one.**',
  '**Three figures that are not about me and are the reason the first item can be dated at all.** **The desk\'s own rate is about one word a paragraph, which the chief sub-editor publishes in a note to contributors.** **Mine ran at that rate until June and has run at nought since the eleventh.** ⚠ **Neither figure is mine and both are necessary**, because a claim about a change needs the rate before it as well as the rate after.',
  '**What I am not able to say about any of this.** **Whether the change in the first item is about English at all.** **I have better questions to ask on the telephone than I had in September**, and asking a better question in Arabic is not an improvement in English — **and 12.3 is the cycle that deals with this and I have written nothing about it here.**',
  '**And one thing that has not changed and that I expected to.** **I still cannot write a covering note short enough.** **Mine run to about four hundred words against a house figure of three hundred**, and the three I have written since April were all cut by somebody else.',
]));
out.push(item('1', 'How many of the four things have dates, and what is the fourth?'));
out.push(item('2', 'Why does he say the first change is dated by the result?'));
out.push(item('3', 'What does he say he is not able to say about any of it?'));
out.push(writers([
  'A note about yourself with occasions in it: **the count, and how many have dates** → **each thing, with its occasion and its date** → **a stopping, dated by its last instance** → **a negative, with its denominator** → **the thing that is not automatic, said to be not automatic** → **what you are not able to say** → **and one thing that has not changed and that you expected to.**',
  '⚠ **Give the count first, and the count of dates separately.** _Four things are different and three of them have dates._ **A reader who has that sentence reads the rest as a ledger** — **and the one without a date is then an entry rather than an omission.**',
  '**Date a stopping by its last instance and say why.** ⚠ _The last "claimed" in my copy is in a story of 14 March. A stopping is dated by its last instance, because nobody notices the day they stop._ **The second sentence is what makes the first one evidence rather than an estimate.**',
  '**Say what is not automatic, in those words.** ⚠ _A move I remember to make is not automatic and I am not claiming it as one._ **This is the sentence that makes the other three believable** — **and a note in which everything has become automatic is a note nobody reads twice.**',
  '⚠ And **put the thing that has not changed at the end, with its figure.** _Mine run to about four hundred words against a house figure of three hundred._ **A year\'s note that ends on a gain is a letter to yourself.** **One that ends on a figure you failed to move is a document** — **and 12.3 is going to ask whether that figure is about English at all.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note about yourself with occasions in it (120 words or more).'));
out.push(p('**______________** · _note for my own file_ · _______________ · **______________**   **______________ things are different and ______________ of them have dates.** ⚠ **The ______________ has no occasion behind it yet and is listed as not yet automatic.**   **One: ______________.** **On ______________ I ______________, which had not happened before.** **It has happened ______________ times since: ______________.** ⚠ **I did not decide to ______________.**   **Two: I have stopped ______________.** **The last ______________ is in ______________ of ______________.** **A stopping is dated by its last instance.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count of things and the count of dates, separately',
  'A stopping dated by its last instance',
  'A negative with a denominator',
  'The thing that is not automatic, said to be not automatic',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their occasions**, and the room says what each one is evidence of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the counts, the things with their occasions, the stopping, the negative, the one that is not automatic, what you cannot say, and the thing that has not changed.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a date against every claim, a stopping dated by its last instance, the not-automatic entry present, and a figure on the thing that has not changed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their strongest claim twice, once with a rise at the end and once falling.** ⚠ **The room says which version it wanted to reassure.** **It is the rise, every time** — **and reassurance costs the claim its evidence, because a fact that has been agreed to is no longer a fact that was offered.** **Fall, and stop.** Then the sentence the cycle ends on, which is Mr Shihabi\'s: **the noticing came three weeks after the change.**'));
out.push(hw('Write **the four things that are different**, each with its occasion and its date. ⚠ **Date every stopping by its last instance** — **which means going back through your own documents until you find one.** **In this class that search has taken between twenty minutes and two hours and has never failed.** **Bring the four entries and the search time.** **12.2 reads your _cannot yet_ list from 1.2 and crosses off what has gone**, so bring the list, in the handwriting you wrote it in.'));

// ===================== 12.2 =====================
out.push(pb());
out.push(h2('12.2  The list, nine months on'));
out.push(p('**Function:** reading your own _cannot yet_ list from Unit 1 and crossing off what has gone   ·   **Grammar:** **the 1.2 lists, nine months on** · a crossing-off needs a document   ·   **Pronunciation:** reading your own handwriting aloud without commentary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read your _cannot yet_ list from 1.2 aloud, in full, in the order you wrote it.** ⚠ **No commentary and no explanation of any item.** Your teacher writes the total number of items for each student on the board. **In most classes the lists run between four and nine items** — **and three or four students will have lost theirs and must read the reconstructed version, marked as reconstructed.**'));
out.push(board('Cannot state a degree of certainty.', 'Crossed off: section 4.6, written 2 May.'));
out.push(p('**b**  Which two crossings-off are justified? **1** _"Cannot write a limitation" — crossed off because I feel better about limitations now._  **2** _"Cannot state a degree of certainty" — crossed off: chapter 4, section 4.6, written 2 May, states nine findings at four degrees._  **3** _"Cannot refuse a referee\'s point" — crossed off: point 5 refused in the letter of 12 May, with the office named._  **4** _"Cannot write a proposal" — crossed off because I have not had to write one._  **5** _"Cannot speak for two minutes without deciding" — crossed off because my teacher says so._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a crossing-off needs?   **A** a feeling that the thing is easier   **B** **a document, with a date, in which the thing was done** — and where no occasion has arisen the item stays on the list   **C** the teacher\'s agreement'));
out.push(p('**b**  Listen again. **1** How many items were on Mrs Tarabishi\'s list, and how many has she crossed off?   **2** What does Mrs Khoury say about the items where no occasion has arisen?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  Nine items and four documents', [
  ['Ms Huda', 'Mrs Tarabishi — the list from September.'],
  ['Mrs Tarabishi', '⚠ **Nine items, in my own handwriting, and I have crossed off four.** **Each of the four has a document against it with a date** — **and two of the remaining five have had no occasion at all, which is not the same as not having moved.**'],
  ['Mrs Khoury', '⚠ **And that distinction is the whole of this cycle.** **Three states and not two: gone, with a document; still there, with an attempt; and no occasion, which is neither.** **A list with two states on it is a list that has been wished at.**'],
  ['Dr Qabbani', 'Which four went?'],
  ['Mrs Tarabishi', '⚠ **_Cannot state a degree of certainty_ — section 4.6 of 2 May, nine findings at four degrees.** **_Cannot refuse a referee\'s point_ — the letter of 12 May, point 5 refused with the office named.** **_Cannot write a limitation under its claim_ — chapter 4, all five findings, 18 May.** **And _cannot read my own abstract against my body_, which went on 10 May and took eleven minutes.**'],
  ['Mrs Oueidat', '⚠ **Four documents and four dates, and the room should notice what kind of list that is.** **It is a list of occasions and not of abilities** — **and it can be checked by anybody who asks to see the four documents, which nobody ever does and which is why it is worth writing.**'],
  ['Mr Shihabi', 'And the two with no occasion?'],
  ['Mrs Tarabishi', '⚠ **_Cannot write a proposal_ and _cannot mediate between two colleagues in English_.** **I have not had to do either.** **They stay on the list unchanged and unmarked** — **and writing _not needed yet_ against them would be a judgement about my work and not about my English.**'],
  ['Mr Tayara', 'Is that not simply an excuse?'],
  ['Mrs Khoury', '⚠ **It would be if the list were a report to somebody.** **It is a list to yourself, and the only thing it is for is deciding what the second book has to do** — **and an item crossed off because nothing happened sends you into Book 2 with a hole you cannot see.**'],
  ['Mrs Ajouz', 'Mine has an item I cannot cross off and cannot leave.'],
  ['Mrs Oueidat', '⚠ **Which is 12.3 and it is the next cycle, and the room should be told so now rather than discovering it.** **About half of what is left on any list in this room turns out not to be about English** — **and Mrs Ajouz\'s item is a procedure in an inspectorate, which no amount of Book 2 will touch.**'],
  ['Mrs Rizk', 'My list was four items and three were the same thing.'],
  ['Mrs Tarabishi', '⚠ **Mine had two like that and I did not see it in September.** **_Cannot state a degree_ and _cannot write a limitation_ and _cannot refuse a point_ are three items and one move** — **which is why four crossings-off out of nine is a better figure than it sounds, and why the list is worth rewriting rather than only marking.**'],
  ['Jad', 'Should we write a new list?'],
  ['Mrs Khoury', '⚠ **12.5 writes it and it is not the same document.** **A _cannot yet_ list is a list of absences and a readiness page is a list of moves with their harder versions** — **and the room should keep both, because in four months the September list will be the only evidence that any of this happened.**'],
  ['Mr Zahreddine', 'I did not write one in September. I thought the exercise was for the others.'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is my own handwriting.** **I read nine items aloud that I did not remember writing**, and two of them I would not now put on a list at all — **and the one I was most worried about in September is the one I crossed off first and have not thought about since February.**'],
]));
out.push(sp());
out.push(box('Language box – reading your own list', [
  '**Three states and not two.** ⚠ **Gone, with a document and a date.** **Still there, with an attempt you can describe.** **No occasion, which is neither of those** — **and a list with only two states on it is a list that has been wished at.**',
  '**What a crossing-off needs.** ⚠ **A document in which the thing was done, with a date.** _Section 4.6 of 2 May, nine findings at four degrees._ **Not a feeling, not an improvement, and not a teacher\'s agreement** — **and the list can then be checked by anybody who asks to see the documents.**',
  '**The no-occasion items stay unchanged and unmarked.** ⚠ **Writing _not needed yet_ against them is a judgement about your work and not about your English.** **An item crossed off because nothing happened sends you into the second book with a hole you cannot see.**',
  '**The list is to yourself and not a report to anybody.** ⚠ **The only thing it is for is deciding what the second book has to do.** **Which is why honesty about it costs nothing and is still difficult** — **and why three or four students in any class will try to cross off an item to be done with it.**',
  '**Items that look like three things and are one move.** ⚠ _Cannot state a degree_ · _cannot write a limitation_ · _cannot refuse a point_. **Three items in September and one move in May** — **which is why four crossings-off out of nine is a better figure than it sounds, and why the list is worth rewriting rather than only marking.**',
  '**And the half that is coming.** ⚠ **About half of what is left on any list in this room will turn out not to be about English at all**, which is 12.3 and should be said now rather than discovered. **An item that is a procedure in somebody else\'s office is not a thing the second book can touch.**',
  '**Pronunciation.** 🔊 **Track 12.4** **Read your own handwriting aloud with no commentary.** ⚠ **The temptation is to explain each item as you read it** — _I think I meant_ — **and the explanation is written nine months later by somebody who knows how it turned out.** **Read the words as they stand.** **Two or three of them will not make sense and that is information.**',
  '**Practise:** Mark the item in one of the three states. **1** gone, with a document  **2** still there, with an attempt  **3** no occasion  **4** three items that are one move  **5** one that is not about English — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item and its proposed mark from the card. B says **whether the mark holds**, and where it does not, **what would be needed.** ⚠ **Two rows on each card are crossings-off with nothing behind them.** **B must refuse them.** Change cards.'));
out.push(table(['Card A – item, then proposed mark', 'Card B – item, then proposed mark'], [
  ['_Cannot state a degree of certainty._ · _Gone: section 4.6, 2 May._', '_Cannot refuse a referee\'s point._ · _Gone: letter of 12 May, point 5._'],
  ['_⚠ Cannot write a limitation._ · _Gone: I feel better about limitations._', '_⚠ Cannot write a proposal._ · _Gone: I have not had to write one._'],
  ['_Cannot read my abstract against my body._ · _Gone: 10 May, eleven minutes._', '_Cannot write eighty words that survive._ · _Gone: 11 June, filed unchanged._'],
  ['_⚠ Cannot mediate in English._ · _Gone: my teacher says it is better._', '_⚠ Cannot find a calque in my own writing._ · _Gone: I know about them now._'],
  ['_Cannot get the uptake figure._ · _Still there._', '_Cannot speak for two minutes without deciding._ · _No occasion._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the state, and what is missing. ⚠ **Rows 2 and 4 on both cards are crossings-off with nothing behind them** — **a feeling, an absence of occasion, a teacher\'s opinion and a piece of knowledge** — **and the last of those is the subtle one: _I know about them now_ is knowledge and a crossing-off needs an occasion.** **Rows 5 are correctly marked and should be praised**: _still there_ and _no occasion_ are the two marks nobody wants to write.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Mark **every item on your list** in one of the three states, with **the document and the date** against each crossing-off. ⚠ **Then count the three groups.** **In this class the three figures have run at about a third, a third and a third** — **and the group nobody expects to be large is the third one.**'));
out.push(p('**b**  Swap. Your partner reads **only your crossings-off and their documents** and says **whether any two of them are the same move.** ⚠ **In most lists two or three are.** **Which is not a reason to uncross anything** — **it is the finding that your September list was a list of symptoms and not of moves, and 12.5 is where that gets repaired.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi had nine items in her own handwriting and has crossed off four, each with a document against it and a date, and two of the remaining five have had no occasion at all, which is not the same as not having moved. Mrs Khoury said that distinction is the whole of the cycle: three states and not two — gone with a document, still there with an attempt, and no occasion, which is neither — and a list with two states on it is a list that has been wished at. Dr Qabbani asked which four went, and cannot state a degree of certainty, which is section 4.6 of 2 May with nine findings at four degrees; cannot refuse a referee\'s point, which is the letter of 12 May with point 5 refused and the office named; cannot write a limitation under its claim, which is chapter 4 of 18 May; and cannot read my own abstract against my body, which went on 10 May and took eleven minutes. Mrs Oueidat said that is a list of occasions and not of abilities, and it can be checked by anybody who asks to see the four documents, which nobody ever does and which is why it is worth writing. Mr Shihabi asked about the two with no occasion, and cannot write a proposal and cannot mediate between two colleagues in English: she has not had to do either, and they stay on the list unchanged and unmarked. Mr Tayara asked whether that is not simply an excuse, and Mrs Khoury said it would be if the list were a report to somebody, and it is a list to yourself whose only purpose is deciding what the second book has to do. Mrs Ajouz said hers has an item she cannot cross off and cannot leave, and Mrs Oueidat said that is 12.3. Mrs Rizk said her list was four items and three were the same thing. Mr Attar asked whether they should write a new list, and 12.5 writes it and it is not the same document. Mr Zahreddine said he did not write one in September because he thought the exercise was for the others, and Mrs Khoury said he should write it now, in September\'s words and marked as reconstructed, because a reconstructed list and a real one differ in a way that is itself worth knowing. And Mrs Tarabishi said the thing she will take away is her own handwriting: she read nine items aloud that she did not remember writing, and the one she was most worried about in September is the one she crossed off first._'));
out.push(p('**Listener task:** write your three counts, and any two crossings-off that are the same move.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Tarabishi\'s marked list, copied out fair. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _the list of 14 September, marked_ · _nine items, three states_ · **28 July**',
  '**Nine items in September.** ⚠ **Four gone with documents, three still there with attempts, two with no occasion.** **The September handwriting is at the back of this sheet and has not been altered.**',
  '**Gone, with the document.** **_Cannot say how sure I am_ — chapter 4, section 4.6, written 2 May: nine findings at four degrees, three of them at the eighth.** **_Cannot refuse a referee_ — letter of 12 May: point 5 not accepted, with the office that holds the records named.** **_Cannot put a limitation under its claim_ — chapter 4 of 18 May: five findings, five boundaries, no limitations section.** **_Cannot read my own abstract against my body_ — 10 May, eleven minutes, two sentences removed.**',
  '**Still there, with the attempt.** **_Cannot write a covering note of the right length_** — **three attempts, all between 380 and 420 words against a figure of 300.** **_Cannot find a calque in my own writing_** — **six found by other people and none by me.** **_Cannot hold a hedge across a language_** — **one attempt, 6 July, and the two sentences it produced were signed by nobody because I could not decide whether they said what I meant.**',
  '**No occasion.** **_Cannot write a proposal._** **_Cannot mediate between two colleagues in English._** ⚠ **Both unmarked and both unchanged.** **I have not had to do either and writing anything against them would be a statement about my work rather than about my English.**',
  '**The three attempts on the covering note, because an attempt described is worth more than an item marked.** **The first was 418 words and had a summary of the application in it, which is the failure mode of the genre.** **The second was 392 and had four absences instead of three.** **The third was 381 and had three absences, one instruction and a paragraph about the instruction** — ⚠ **and the paragraph about the instruction is eighty words I have not learnt to do without.**',
  '**Two things about the list itself rather than about the items.** **Three of the nine were one move.** _Cannot say how sure I am_, _cannot refuse a referee_ **and** _cannot put a limitation under its claim_ **are three symptoms of one thing, and I wrote them as three because in September I could not see the thing.**',
  '**And the second thing, which is harder.** **Two of the nine I would not now put on a list.** ⚠ **_Cannot write quickly_ is not about English and never was**, and _cannot sound like a native speaker_ is not something I want and I do not know why I wrote it. **Both are struck through rather than crossed off, and the September hand is still legible underneath.**',
  '**What this list is for.** **Nothing except deciding what the second book has to do.** **It is not a report and nobody has asked for it** — **and the three still-there items are the three I shall be looking for in the first four units of Book 2.**',
]));
out.push(item('1', 'What are the three states, and how many items are in each?'));
out.push(item('2', 'What does she say about three of the nine items?'));
out.push(item('3', 'Which two would she not now put on a list, and what has she done with them?'));
out.push(writers([
  'A marked list: **the September count and the three states, with the original attached** → **gone, each with its document and date** → **still there, each with the attempt described** → **no occasion, unmarked and unchanged** → **what the list reveals about itself** → **the items you would not now write** → **and what the list is for.**',
  '⚠ **Attach the September version unaltered.** _The September handwriting is at the back of this sheet and has not been altered._ **A marked list without the original is a list written in July** — **and in four months the September version will be the only evidence that any of this happened.**',
  '**Describe the attempt, not the difficulty.** ⚠ _Three attempts, all between 380 and 420 words against a figure of 300._ **An attempt with figures is a position on a scale; _I find this hard_ is a mood** — **and the first can be worked on in Book 2 and the second cannot.**',
  '**Leave the no-occasion items blank.** ⚠ _Both unmarked and both unchanged._ **Anything written against them is a statement about your work** — **and the one thing that must not be written is a crossing-off, because it sends you into the second book with a hole you cannot see.**',
  '⚠ And **strike through rather than cross off the items you would not now write.** _Cannot sound like a native speaker is not something I want and I do not know why I wrote it._ **A struck item with the September hand legible underneath is the most honest thing on the page** — **and it is the only place in Book 1 where a student is asked to disagree with themselves in writing.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your marked list (120 words or more).'));
out.push(p('**______________** · _the list of _______________, marked_ · _______________ items, three states_ · **______________**   **______________ items in September.** ⚠ **______________ gone with documents, ______________ still there with attempts, ______________ with no occasion.** **The September handwriting is ______________ and has not been altered.**   **Gone, with the document.** **_______________ — ______________, written ______________: ______________.** **_______________ — ______________.**   **Still there, with the attempt.** **_______________** — **______________ attempts, ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The September original attached, unaltered',
  'A document and a date against every crossing-off',
  'Each still-there item with its attempt in figures',
  'The no-occasion items unmarked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their three counts**, and the room says which of the three groups is largest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole marked list (260 words or more), to the shape in the writer\'s box: the counts, the three states in full, what the list reveals about itself, the items you would not now write, and what the list is for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a document and a date on every crossing-off, attempts in figures, no-occasion items unmarked, and the September original attached.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads three items of their September list aloud, in the September words, with no commentary.** ⚠ **The room says which of the three it does not understand.** **There is usually one** — **and a writer who cannot now explain what they meant in September has given the room its clearest evidence that somebody has moved.** Then the sentence the cycle ends on, which is Mrs Tarabishi\'s: **I read nine items aloud that I did not remember writing.**'));
out.push(hw('Mark **every item on your list** in one of the three states, with **the document and the date** against each crossing-off — ⚠ **and go and find the documents.** **Not from memory.** **In this class that search has produced two surprises in every list: an item the student thought was gone and cannot evidence, and an item they had not crossed off and can.** **Bring the marked list with the September original attached.** **12.3 names the item that has not moved and asks whether it is about English at all**, which is the cycle this unit exists for.'));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  The item that is not about English'));
out.push(p('**Function:** naming the item that has not moved, and saying whether it is about English at all   ·   **Grammar:** the half of every list that belongs to an organisation   ·   **Pronunciation:** saying _this is not about my English_ without defiance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the one item on your list that has not moved and that you most wanted to move.** ⚠ **One item, read in the September words.** Your teacher writes the ten items on the board. **In most classes four or five of the ten contain a word that names somebody else\'s office** — _the regional director_, _the inspectorate_, _the panel_, _my supervisor_ — **and that word is the finding before anybody has said anything.**'));
out.push(board('I cannot get the uptake figure.', 'Nobody in the region collects it.'));
out.push(p('**b**  Which two are not about English at all? **1** _I cannot get the uptake figure because nobody in the region collects it._  **2** _I cannot write a limitation under the claim it limits._  **3** _I cannot tell a calque in my own writing._  **4** _I cannot hold a hedge across a language._  **5** _I cannot refuse a point to the regional director, because this office has never refused one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about the items that have not moved?   **A** they need more practice   **B** **about half of them are not about English** — they are a procedure, a hierarchy or a missing record in somebody\'s office, and no second book will touch them   **C** they will move with time'));
out.push(p('**b**  Listen again. **1** What is Mrs Rizk\'s item, and what did she find when she looked at it?   **2** What does Mrs Khoury say is the useful thing to do with such an item?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  Not about English', [
  ['Ms Huda', 'Mrs Rizk — the item that has not moved.'],
  ['Mrs Rizk', '⚠ **_I cannot refuse anything to the regional director._** **It was on my list in September, it is on it now, and I have spent nine months thinking it was about my English.**'],
  ['Mrs Tarabishi', 'And it is not?'],
  ['Mrs Rizk', '⚠ **This office has never refused the regional director anything, in writing, by anybody, in eleven years.** **I checked the file.** **There is no English in which that refusal exists** — **and I can now write it in four different registers and have never sent one.**'],
  ['Mrs Khoury', '⚠ **Which is the most useful thing anybody will say in this unit and it is worth sitting with.** **About half of what is left on any list in this room is a procedure, a hierarchy or a missing record in somebody\'s office** — **and nine months of a second book will not touch one of them.**'],
  ['Dr Qabbani', 'That sounds like giving up.'],
  ['Mrs Oueidat', '⚠ **It is the opposite and the difference is a sentence long.** _I cannot do this_ **is a statement about you and you will work at it for years.** _This office has never done this_ **is a statement about an office and it can be changed by one person doing it once** — **and the first version has kept Mrs Rizk from the second for nine months.**'],
  ['Mr Tayara', 'How do you tell which kind an item is?'],
  ['Mrs Khoury', '⚠ **One question: if somebody wrote it for you, perfectly, in English, would the thing happen?** **If yes, it is about English.** **If no, it is not** — **and the test takes four seconds and settles about half of every list in this room.**'],
  ['Mrs Ajouz', 'Mine is that the inspectorate will not accept a hand-kept day-book.'],
  ['Mrs Oueidat', '⚠ **And no sentence of yours will make it.** **What English can do there is one thing and it is not small: it can produce the document that makes the refusal a decision somebody has to take rather than a thing that happens** — **which is 9.6 and 11.6 and is the whole of what a covering note is for.**'],
  ['Mr Shihabi', 'So the item stays on the list.'],
  ['Mrs Khoury', '⚠ **The item is rewritten.** **_I cannot refuse the regional director_ becomes _this office has never refused the regional director and I have four drafts_** — **and that is not the same item at all: the first is a wall and the second is a decision with a date on it that somebody has not yet taken.**'],
  ['Mrs Rizk', 'Which somebody is me.'],
  ['Mrs Oueidat', '⚠ **Which is why the rewriting is uncomfortable and why it is the point.** **An item about your English is somebody else\'s problem until you learn it.** **An item about your office is yours as soon as you have named it** — **and about half the room is about to acquire a decision it did not have this morning.**'],
  ['Jad', 'Mine is that nobody answers forum questions from this country.'],
  ['Mrs Khoury', '⚠ **Test it.** **If somebody wrote your answer for you, perfectly, would it be answered?** **You have four hundred words of working code and two replies about a sentence** — **and the sentence is 11.2 and has gone, so the test says the item was about English and may already have moved.** **Which you can find out by posting one.**'],
  ['Mr Zahreddine', 'None of mine are about English. All three are about insurers.'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the eleven years.** **I went to the file expecting to find two or three refusals and to feel foolish**, and there are none — **and nine months of believing that a sentence was beyond me, when the sentence has never been written by anybody in this office and I have four of them in a drawer.**'],
]));
out.push(sp());
out.push(box('Language box – the item that is not about English', [
  '**The four-second test.** ⚠ _If somebody wrote it for you, perfectly, in English, would the thing happen?_ **If yes, it is about English.** **If no, it is not** — **and the test settles about half of every list in this room.**',
  '**The three kinds that are not about English.** ⚠ **A procedure** — _the inspectorate will not accept a hand-kept day-book_. **A hierarchy** — _this office has never refused the regional director_. **A missing record** — _nobody in the region collects the uptake figure_. **None of the three will move in nine months of a second book.**',
  '**Why this is the opposite of giving up, and the difference is one sentence.** ⚠ _I cannot do this_ **is a statement about you and you will work at it for years.** _This office has never done this_ **is a statement about an office and can be changed by one person doing it once.**',
  '**What English can still do, which is not small.** ⚠ **It can produce the document that makes a refusal a decision somebody has to take rather than a thing that happens.** **Which is 9.6 and 11.6** — **and a covering note that names an absence has moved an item that was never about language.**',
  '**The rewriting, and it is the whole cycle.** ⚠ _I cannot refuse the regional director_ **becomes** _this office has never refused the regional director and I have four drafts_. **The first is a wall and the second is a decision with a date on it that somebody has not yet taken.**',
  '**And why the rewriting is uncomfortable.** ⚠ **An item about your English is somebody else\'s problem until you learn it.** **An item about your office is yours as soon as you have named it** — **and about half this room acquires a decision it did not have at the start of the lesson.**',
  '**Pronunciation.** 🔊 **Track 12.6** **Say _this is not about my English_ with no stress on _my_.** ⚠ **Stress on _my_ makes it a defence and the room hears a complaint.** **Flat, it is a finding** — **and the sentence after it has to be the rewritten item, immediately, or the flatness is wasted and the finding becomes an excuse.**',
  '**Practise:** Apply the test and rewrite the item. **1** a procedure  **2** a hierarchy  **3** a missing record  **4** one that is about English after all  **5** one where English can produce the document that forces a decision',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B applies the four-second test aloud and, where the item is not about English, **rewrites it as a statement about an office** and says **what document English could still produce.** ⚠ **Two rows on each card are about English after all.** **B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_I cannot refuse anything to the regional director._', '_The inspectorate will not accept a hand-kept day-book._'],
  ['_⚠ I cannot find a calque in my own writing._', '_⚠ I cannot write a covering note of three hundred words._'],
  ['_Nobody in the region collects the uptake figure._', '_My supervisor does not read drafts before the deadline._'],
  ['_⚠ I cannot hold a hedge across a language._', '_⚠ I cannot state a degree I would defend._'],
  ['_No forum answers from this country are read._', '_The committee has never withdrawn a resolution._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the test, the rewriting, and the document. ⚠ **Rows 2 and 4 on both cards are about English after all** — **a calque, a word count, a hedge and a degree are four things a second book can move**, and the room should notice that all four are in Units 9 to 11. **Rows 5 are the two to spend time on**: both look like walls and both can be tested, and Mr Attar\'s has probably already moved.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **every still-there item on your list** and apply the test. ⚠ **If somebody wrote it for you, perfectly, would the thing happen?** **Sort the items into two groups and count them.** **In this class the split has been about half and half** — **and the group that is not about English is almost always larger than the student expected.**'));
out.push(p('**b**  Take **the not-about-English group** and rewrite each one **as a statement about an office**, then write **the document English could still produce.** ⚠ **The rewriting takes about a minute an item and the discomfort is the point.** **Each rewritten item is now a decision with a date on it** — **and the date is yours to set.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk\'s item is that she cannot refuse anything to the regional director: it was on her list in September, it is on it now, and she has spent nine months thinking it was about her English. Mrs Tarabishi asked whether it is not, and this office has never refused the regional director anything, in writing, by anybody, in eleven years — she checked the file, and there is no English in which that refusal exists, and she can now write it in four different registers and has never sent one. Mrs Khoury said that is the most useful thing anybody will say in this unit: about half of what is left on any list in the room is a procedure, a hierarchy or a missing record in somebody\'s office, and nine months of a second book will not touch one of them. Dr Qabbani said that sounds like giving up, and Mrs Oueidat said it is the opposite and the difference is a sentence long — I cannot do this is a statement about you and you will work at it for years, and this office has never done this is a statement about an office and can be changed by one person doing it once. Mr Tayara asked how you tell which kind an item is, and one question: if somebody wrote it for you, perfectly, in English, would the thing happen? Mrs Ajouz said hers is that the inspectorate will not accept a hand-kept day-book, and no sentence of hers will make it — and what English can do there is to produce the document that makes the refusal a decision somebody has to take. Mr Shihabi said so the item stays on the list, and the item is rewritten. Mrs Rizk said which somebody is her, and Mrs Oueidat said that is why the rewriting is uncomfortable and why it is the point: an item about your English is somebody else\'s problem until you learn it, and an item about your office is yours as soon as you have named it, so about half the room was about to acquire a decision it did not have that morning. Mr Attar said nobody answers forum questions from this country, and Mrs Khoury said test it. Mr Zahreddine said none of his are about English and all three are about insurers, and Mrs Khoury said that is either the most honest answer in the room or the least examined one, and the four-second test will say which within a minute. And Mrs Rizk said the thing she will take away is the eleven years: she went to the file expecting to find two or three refusals and to feel foolish, and there are none._'));
out.push(p('**Listener task:** write your two counts, and one rewritten item.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote to herself, and the draft she has not sent. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note to myself_ · _the item that was not about English_ · **30 July**',
  '**The item on my September list was _I cannot refuse anything to the regional director_.** ⚠ **It is not about my English and it has not been for some months.**',
  '**The test, which took four seconds and which I had not applied in nine months.** **If somebody wrote the refusal for me, perfectly, in English, would it be sent?** **No.** **So the item is not about English.**',
  '**What I found when I looked.** **This office has not refused the regional director anything in writing in eleven years.** **I went through the correspondence file expecting two or three and expecting to feel foolish about the item.** ⚠ **There are none.** **Not one refusal, by anybody, in the whole file.** **The file runs from 2015 and is complete; the regional office keeps the other half of it and I have asked for nothing from them.**',
  '**What I can do that I could not in September, which is the part that makes this harder and not easier.** **I have four drafts of the refusal, in four registers.** **One concedes the method and holds the result; one is four sentences with a document in each; one is a covering note with three absences in it; and one is eighty words.** ⚠ **All four are usable and none has been sent.**',
  '**The item, rewritten.** **_This office has never refused the regional director and I have four drafts._** **Which is not the same item.** **The first was a wall.** **The second is a decision with a date on it, and the date is mine to set** — **and I did not have that decision at nine o\'clock this morning.**',
  '**What English can still do here, because it is not nothing.** **The regional director\'s request of 14 July asks for a figure the register cannot produce.** **A refusal is not the only document available: a note naming the absence and the return that would narrow it is 11.6, and it is not a refusal at all** — **and it makes the refusal a decision he has to take rather than one I have to send.**',
  '**What has already changed without my noticing, which belongs in this note because it bears on the date.** **The regional office answered a note of mine on 18 June in four days.** **It had taken eleven weeks to answer the application in March.** ⚠ **The difference is that the June note named an absence and the March application did not**, and I did not write the June note as an experiment: I wrote it because 11.6 had happened and I had stopped writing the other kind.',
  '**And the date.** **The note goes on 4 August.** ⚠ **Not the refusal.** **The note, which names the absence, and which this office has also never sent** — **and if the note produces the answer, the refusal will never have to be written by anybody.** **If it does not, the refusal goes on 1 September and the four drafts become one.**',
]));
out.push(item('1', 'What is the test, and what answer did it give?'));
out.push(item('2', 'Why does she say what she can now do makes it harder?'));
out.push(item('3', 'What is going on 4 August, and why is it not the refusal?'));
out.push(writers([
  'A note about an item that is not about English: **the September item, in its own words** → **the test, and its answer** → **what you found when you looked, with the figure** → **what you can now do, and why that makes it harder** → **the item rewritten as a statement about an office** → **what English can still produce** → **and the date.**',
  '⚠ **Apply the test in the note, in its own words.** _If somebody wrote the refusal for me, perfectly, in English, would it be sent? No._ **A note that asserts the finding without the test is a note that can be argued with by its own writer at three in the morning** — **and the test is four seconds and settles it.**',
  '**Go to the file and put the figure in.** ⚠ _This office has not refused the regional director anything in writing in eleven years._ **_I think we never do_ is a feeling.** **Eleven years and a file is a fact** — **and it is the fact that turns the item from a wall into a decision.**',
  '**Say that the ability makes it harder.** ⚠ _All four are usable and none has been sent._ **This is the sentence the cycle exists to produce.** **While the item was about English, the drafts were the work; now the drafts are done and the work is somebody\'s nerve** — **and naming that is the only honest form of the note.**',
  '⚠ And **find the document that is not the refusal.** _A note naming the absence is 11.6, and it is not a refusal at all._ **Then put a date on that.** **An item rewritten and dated has moved; an item rewritten and undated is the September item with better grammar.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note about an item that is not about English (120 words or more).'));
out.push(p('**______________** · _note to myself_ · _______________ · **______________**   **The item on my September list was _______________.** ⚠ **It is not about my English.**   **The test.** **If somebody wrote ______________ for me, perfectly, in English, would ______________?** **______________.** **So the item is not about English.**   **What I found when I looked.** **______________ has not ______________ in ______________.** ⚠ **______________.**   **What I can do that I could not in September.** **I have ______________.** ⚠ **All ______________ and none ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The test applied in its own words, with its answer',
  'A figure from a file and not a feeling',
  'The ability named as what makes it harder',
  'The document that is not the refusal, with a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their rewritten item**, and the room says whether it has a date in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the September item, the test, what the file said, what you can now do, the rewriting, the document English can still produce, and the date.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the test in its own words, a figure from a file, the ability named, and a dated document that is not the refusal.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says _this is not about my English_ twice, once with the stress on _my_ and once flat.** ⚠ **The room says which sounded like a complaint.** **The stressed one** — **and the next sentence must be the rewritten item, or the finding becomes an excuse.** **Flat, then the date.** Then the sentence the cycle ends on, which is Mrs Rizk\'s: **I went to the file expecting to feel foolish, and there are none.**'));
out.push(hw('Apply **the four-second test to every still-there item** on your list and sort them into two groups. ⚠ **Then take the not-about-English group and go to a file** — **actually go** — **and find the figure: how many times, in how many years, by anybody.** **In this class that search has never once found what the student expected.** **Rewrite each item as a statement about an office, and put a date on the one document English can still produce.** **Bring the two counts, the figure and the date.** **12.4 tests your own invisibility on a reader who does not know the method**, which is the only test of this work that exists.'));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  The invisibility test'));
out.push(p('**Function:** testing your own invisibility: giving a page to a reader who does not know the method   ·   **Grammar:** the only available test, and what counts as passing it   ·   **Pronunciation:** asking for a reading without asking for an opinion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **who you would give a page of your writing to, if you wanted to know whether the method shows.** ⚠ **A name and a relationship, and nothing about the page.** Your teacher writes the ten readers on the board. **In most classes six or seven of the ten name somebody who was on a course** — **a colleague, a classmate, a supervisor — and every one of those six is the wrong reader.**'));
out.push(board('She said the writing was very clear.', 'She asked which office holds the notes.'));
out.push(p('**b**  Which two results count as passing? **1** _She said the writing was very clear._  **2** _She said it was much better than my last one._  **3** _She asked which office holds the delivery notes._  **4** _She asked whether the two dates were five months apart on purpose._  **5** _She said she could tell I had been on a course._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide counts as passing?   **A** the reader says the writing is clear   **B** **the reader talks about the content and not about the writing** — and a compliment on the writing is a failure, because the method has been seen   **C** the reader cannot find any errors'));
out.push(p('**b**  Listen again. **1** What did Mr Zahreddine\'s reader ask him, and what did he conclude?   **2** What does Mrs Khoury say a compliment on the writing means?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  What a reader talks about', [
  ['Ms Huda', 'Mr Zahreddine — the page you gave to your daughter.'],
  ['Mr Zahreddine', '⚠ **She is twenty-three and reads nothing of this kind.** **I gave her one page of an opinion and asked her to read it and tell me anything she wanted to.** **She asked who keeps the delivery notes.**'],
  ['Mrs Tarabishi', 'And that is the test passed?'],
  ['Mr Zahreddine', '⚠ **That is the test passed and I did not expect it to feel like nothing.** **She said nothing about the writing at all.** **She read a page about bolt diameters, understood what was missing from it, and asked the one question the page was designed to produce.**'],
  ['Mrs Khoury', '⚠ **And a compliment would have been a failure, which the room should hear plainly.** _The writing is very clear_ **means the reader saw the writing.** **The method is a set of moves for making a page do its work without being noticed** — **and a reader who notices has been given a page about its own construction.**'],
  ['Dr Qabbani', 'That seems a hard standard.'],
  ['Mrs Oueidat', '⚠ **It is the only standard available and it is not hard: it is uncomfortable.** **Everything else you could measure is a thing you measure yourself** — **and the one thing you cannot see from inside is whether the page shows its method, which is exactly the thing that decides what a reader does next.**'],
  ['Mr Shihabi', 'Who is the right reader, then?'],
  ['Mrs Khoury', '⚠ **Somebody who has never been on a course and has no stake in the document.** **Not a colleague, not a classmate, not a supervisor** — **and in this class the readers who produced findings have been a daughter, a neighbour, a brother-in-law and a pharmacist\'s assistant.** **The wrong reader compliments the writing because that is what a reader with a stake does.**'],
  ['Mrs Ajouz', 'And what do you ask them?'],
  ['Mr Zahreddine', '⚠ **Nothing.** _Read this and tell me anything you want to._ **Eight words.** **Any question narrower than that tells them what to look at** — **and _is it clear?_ produces _yes_ in every case and is worth nothing at all.**'],
  ['Mr Tayara', 'What if they say nothing?'],
  ['Mrs Oueidat', '⚠ **Then wait, and do not help.** **About a third say nothing for a minute and then ask a question about the content**, which is the pass arriving slowly. **A writer who fills the silence has given the reader a subject** — **and the subject will be the writing.**'],
  ['Mrs Rizk', 'Mine said it was better than the last one.'],
  ['Mrs Khoury', '⚠ **Which is a comparison and therefore a failure, and it is also information.** **A reader who compares has read two of your documents** — **so they have a stake, and the test needs somebody who has read none.**'],
  ['Jad', 'Could you fail it on purpose?'],
  ['Mr Zahreddine', '⚠ **You could pass it by writing nothing interesting, which is the one way to cheat it.** **A page with no claim in it produces no question.** **So the test has two halves: the reader asks about the content, and the content was worth asking about** — **and the second half is why the page you choose has to be a page you would send.**'],
  ['Mrs Tarabishi', 'I gave mine to my brother and he asked about the sample size.'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is that it felt like nothing.** **Twenty years of opinions and a page that my daughter read without stopping once** — **and what I wanted, and did not get, was for somebody to say it was well written**, and the wanting is the whole reason the test has to be done by somebody who will not.'],
]));
out.push(sp());
out.push(box('Language box – the invisibility test', [
  '**What passing is.** ⚠ **The reader talks about the content and asks a question the page was designed to produce.** **What failing is: a compliment on the writing** — **because a compliment means the reader saw the writing, and a page that shows its method is a page about its own construction.**',
  '**The right reader.** ⚠ **Somebody who has never been on a course and has no stake in the document.** **Not a colleague, not a classmate, not a supervisor.** **In this class the findings have come from a daughter, a neighbour, a brother-in-law and a pharmacist\'s assistant** — **and the wrong reader compliments the writing, because that is what a reader with a stake does.**',
  '**What you ask.** ⚠ **Nothing.** _Read this and tell me anything you want to._ **Eight words.** **Any question narrower than that tells them what to look at** — **and _is it clear?_ produces _yes_ every time and is worth nothing.**',
  '**The silence.** ⚠ **About a third say nothing for a minute and then ask about the content, which is the pass arriving slowly.** **Do not fill it.** **A writer who fills the silence has given the reader a subject, and the subject will be the writing.**',
  '**A comparison is a failure and is also information.** ⚠ _It is better than the last one._ **A reader who compares has read two of your documents, so they have a stake** — **and the test needs somebody who has read none.**',
  '**The one way to cheat it, and why the choice of page matters.** ⚠ **A page with no claim in it produces no question.** **So the test has two halves: the reader asks about the content, and the content was worth asking about** — **which is why the page has to be one you would actually send.**',
  '**And the thing nobody is warned about.** ⚠ **Passing feels like nothing.** **What a writer wants is to be told the page is well written, and that is the one result that means the test has failed** — **and the wanting is the whole reason the reader has to be somebody who will not say it.**',
  '**Pronunciation.** 🔊 **Track 12.8** **Say _read this and tell me anything you want to_ with no rise and no stress on _anything_.** ⚠ **Stress on _anything_ makes it an invitation to find fault.** **A rise at the end makes it a request for reassurance**, and a reader hears the request and supplies it. **Flat, and then hand over the page and stop talking.**',
  '**Practise:** Say whether it is a pass and why. **1** a question about the content  **2** a compliment on the writing  **3** a comparison  **4** a silence then a question  **5** a question about something the page left out on purpose',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the reader\'s response from the card. B says **pass or fail** and **what the response tells the writer.** ⚠ **Two rows on each card are passes that look like failures.** **B must spot them.** Change cards.'));
out.push(table(['Card A – what the reader said', 'Card B – what the reader said'], [
  ['_The writing is very clear._', '_I could tell you had been on a course._'],
  ['_⚠ Who keeps the delivery notes?_', '_⚠ Were the two dates five months apart on purpose?_'],
  ['_It is much better than the last one._', '_I did not understand the part about the tolerance._'],
  ['_⚠ Nothing for a minute, then: what happens if nobody asks for them?_', '_⚠ Nothing for a minute, then: is the second date the one that matters?_'],
  ['_I liked the way you set out the findings._', '_Why is there no section at the end about limitations?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** pass or fail, and what it tells the writer. ⚠ **Rows 2 and 4 on both cards are passes** — **and rows 4 will be called failures, because a minute of silence feels like incomprehension and is a reader reading.** **Row 3 of Card B is a pass too**: _I did not understand the tolerance_ is about the content. **Row 5 of Card B is hardest** — **a question about the method, which fails.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Choose **the page** — ⚠ **one you would actually send, with a claim in it** — **and the reader: somebody who has never been on a course and has no stake.** **Write the eight words you will say.** **Then say nothing else.** **In this class the whole exercise has taken between two and nine minutes.**'));
out.push(p('**b**  Write **what they said, word for word**, and mark it pass or fail. ⚠ **Do not improve what they said.** **A reader\'s sentence written down as it was spoken is evidence; the same sentence tidied is a report** — **and two students in this class have tidied a comparison into a question, which is the one thing the exercise cannot survive.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine\'s daughter is twenty-three and reads nothing of this kind: he gave her one page of an opinion and asked her to read it and tell him anything she wanted to, and she asked who keeps the delivery notes. Mrs Tarabishi asked whether that is the test passed, and that is the test passed, and he did not expect it to feel like nothing: she said nothing about the writing at all, and read a page about bolt diameters, understood what was missing from it, and asked the one question the page was designed to produce. Mrs Khoury said a compliment would have been a failure — the writing is very clear means the reader saw the writing, and the method is a set of moves for making a page do its work without being noticed. Dr Qabbani said that seems a hard standard, and Mrs Oueidat said it is the only standard available and it is not hard but uncomfortable: everything else you could measure is a thing you measure yourself. Mr Shihabi asked who the right reader is, and somebody who has never been on a course and has no stake in the document, and in this class the readers who produced findings have been a daughter, a neighbour, a brother-in-law and a pharmacist\'s assistant. Mrs Ajouz asked what you ask them, and nothing: read this and tell me anything you want to, eight words. Mr Tayara asked what happens if they say nothing, and then wait and do not help, because about a third say nothing for a minute and then ask a question about the content. Mrs Rizk said hers said it was better than the last one, and Mrs Khoury said that is a comparison and therefore a failure, and it is also information: a reader who compares has read two of your documents, so they have a stake, and the test needs somebody who has read none. Mr Attar asked whether you could fail it on purpose, and you could pass it by writing nothing interesting, which is the one way to cheat it. Mrs Tarabishi said she gave hers to her brother and he asked about the sample size, and Mrs Khoury said that is a pass on both halves, because the sample size is the thing her chapter is for and a reader with no stake in it found the one question two referees had already asked. And Mr Zahreddine said the thing he will take away is that it felt like nothing: what he wanted, and did not get, was for somebody to say it was well written._'));
out.push(p('**Listener task:** write the reader\'s words, as spoken, and your mark.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Zahreddine wrote after the test. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _note for my own file_ · _the invisibility test, 29 July_ · **1 August**',
  '**The page.** **Page four of the opinion on the east elevation: finding 2 and its boundary, finding 3 and its boundary, and the paragraph on what I did not inspect.** ⚠ **A page I had sent two days earlier**, which is the condition of the test: a page nobody would send produces no question.',
  '**The reader.** **My daughter, twenty-three, a pharmacist\'s assistant, who has never read an engineer\'s opinion and has not been on a course.** **No stake in the document and nothing to gain from being kind about it.**',
  '**What I said.** _Read this and tell me anything you want to._ **Eight words, flat, and then I stopped talking.**',
  '**What she said, word for word.** **Nothing for about a minute.** **Then: _"Who keeps the delivery notes?"_** **Then, after I answered: _"So nobody has asked for them."_** ⚠ **Nothing about the writing.** **Nothing about the English.** **Two questions about the content, and the second one was the point of the page.**',
  '**Pass or fail.** **Pass, on both halves.** **She asked about the content, and the content was worth asking about** — **the delivery notes are the document that would settle finding 2 and the page names them and says nobody has asked.**',
  '**What I wanted and did not get, which belongs in this note because it is the reason the reader has to be the wrong sort of person.** ⚠ **I wanted her to say it was well written.** **Twenty years of opinions, a page I was pleased with, and the result that counts as a pass was a question about somebody else\'s filing** — **and it felt like nothing at all.**',
  '**What I would do differently.** **I would not change the page.** **I would choose a longer one** — **four pages rather than one — because one page produced two questions and I do not know whether the rest of the opinion would have produced any.**',
  '**What I did with the result, which is the half of the test nobody plans for.** **The page now carries one more sentence.** _The delivery notes for the two bays, which the contractor holds, have not been asked for and would answer this finding in a week._ ⚠ **That sentence was already in the opinion, at page six, in the paragraph about what would narrow the findings** — **and a reader who got to page four and asked the question had not reached it.** **It is now in both places and the repetition is deliberate.** **A page that may be read alone has to carry the sentence that answers it.**',
  '**And one thing I shall not do again.** **I nearly answered her silence.** **At about forty seconds I had a sentence ready about what the page was for**, and if I had said it the test would have been over and the result would have been a conversation about my method.',
]));
out.push(item('1', 'Why does he say the page had to be one he had sent?'));
out.push(item('2', 'What did the reader say, and why is the second thing the point?'));
out.push(item('3', 'What did he want, and why does he put it in the note?'));
out.push(writers([
  'A note on the invisibility test: **the page, and why it qualified** → **the reader, and why they were the right one** → **the eight words you said** → **what they said, word for word, including the silence** → **pass or fail, on both halves** → **what you wanted and did not get** → **and what you would do differently.**',
  '⚠ **Say that the page was one you had sent.** _A page nobody would send produces no question._ **This is the half of the test everybody forgets** — **and a writer who chooses a safe page has guaranteed a pass that means nothing.**',
  '**Write what the reader said word for word, including the silence.** ⚠ _Nothing for about a minute. Then: "Who keeps the delivery notes?"_ **A reader\'s sentence as it was spoken is evidence.** **The same sentence tidied is a report** — **and two students in this class tidied a comparison into a question.**',
  '**Mark both halves.** ⚠ _Pass, on both halves. She asked about the content, and the content was worth asking about._ **A page that produces a question about nothing has passed the first half and failed the second**, and only the two together are a result.',
  '⚠ And **write down what you wanted.** _I wanted her to say it was well written._ **It is the reason the reader has to be the wrong sort of person**, and a note that leaves it out is a note by somebody who will choose a colleague next time and get a compliment.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on the invisibility test (120 words or more).'));
out.push(p('**______________** · _note for my own file_ · _the invisibility test, _______________ · **______________**   **The page.** **______________.** ⚠ **A page I had ______________**, which is the condition of the test.   **The reader.** **______________, who has never ______________ and has not been on a course.** **No stake in ______________.**   **What I said.** _Read this and tell me anything you want to._ **Eight words, flat, and then I stopped talking.**   **What ______________ said, word for word.** **______________.** ⚠ **Nothing about the writing.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A page you had actually sent',
  'A reader with no stake and no course',
  'The reader\'s words as spoken, including the silence',
  'Both halves of the test marked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **what their reader said, word for word**, and the room marks it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the page, the reader, the eight words, what was said, the two marks, what you wanted, and what you would do differently.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a page you had sent, a reader with no stake, the words as spoken, and both halves marked.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says _read this and tell me anything you want to_ twice: once with a rise and once flat.** ⚠ **The room says which one it would have reassured.** **It is the rise** — **and a reader who hears a request for reassurance supplies it, which is a failure the writer produced.** **Flat, hand over the page, and stop talking.** Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **what I wanted, and did not get, was for somebody to say it was well written.**'));
out.push(hw('Run **the test** on a page you have actually sent, with a reader who has no stake and has not been on a course. ⚠ **Say the eight words and then nothing.** **Write down what they said, word for word, including any silence and its length.** **Mark both halves.** **In this class two students have failed the second half** — **the reader asked about the content and the content was not worth asking about — and both said it was the most useful result in the unit.** **Bring the words and the marks.** **12.5 writes the readiness page for the second book**, and it is built from everything this unit has produced.'));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  The readiness page'));
out.push(p('**Function:** writing the readiness page for the second book   ·   **Grammar:** three C1 moves, each with its harder version and its automatic question   ·   **Pronunciation:** reading a readiness page aloud without defending it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the three Book 1 moves you would take into the second book.** ⚠ **Three, named as moves and not as topics** — _put a limitation under its claim_, **not** _limitations_. Your teacher writes the thirty moves on the board in one column. **In most classes about eighteen of the thirty are the same six moves** — **and the six are the ones that produced documents rather than exercises.**'));
out.push(board('I am ready for Book 2.', 'Three moves, three harder versions, three questions.'));
out.push(p('**b**  Which two belong on a readiness page? **1** _I am ready for Book 2._  **2** _State a degree I will defend → state it to somebody senior who has already decided → do I write the degree without choosing it?_  **3** _I have improved a lot this year._  **4** _Name an absence → name it in a document I did not write → do I write the list before the version?_  **5** _My weakest area is vocabulary._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a readiness page is made of?   **A** a list of strengths and weaknesses   **B** **three moves, each with its harder version and a question that tests whether it is automatic** — and nothing else   **C** a summary of the year'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say the harder version of a move is for?   **2** What does Mrs Khoury say about the automatic question?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.9  Three moves and three questions', [
  ['Ms Huda', 'Mrs Oueidat — the page you have written for September.'],
  ['Mrs Oueidat', '⚠ **Three rows and three columns, and nothing else on the sheet.** **The move as it is now; the harder version of it; and one question I can ask myself in four seconds to find out whether it has become automatic.**'],
  ['Mrs Tarabishi', 'Why the harder version?'],
  ['Mrs Oueidat', '⚠ **Because a move you have is not a thing to practise.** **The second book has to be given something to do** — **and the harder version of _name the absence_ is naming it in a document somebody else wrote, which I do four times a year and have never done well.**'],
  ['Mrs Khoury', '⚠ **And the automatic question is the column that makes the page worth keeping.** **It is not _can I do this_, which is answered yes by everybody in July.** **It is a question with a behaviour in it:** _do I write the list before the version?_ **Four seconds, and the answer in September will be different from the answer today.**'],
  ['Dr Qabbani', 'Mine would be: do I state the degree without choosing it?'],
  ['Mrs Oueidat', '⚠ **Which is the right shape and the room should notice why.** **_Without choosing it_ is the test of automatic** — **a move you choose is a move you have, and a move you make without choosing is a move that has you.** **And the second kind is the only kind that survives a bad week.**'],
  ['Mr Shihabi', 'Three seems few for a year.'],
  ['Mrs Khoury', '⚠ **Three is what a page can hold and what a September teacher can use.** **A page with nine moves on it is a syllabus and will be read once** — **and Mrs Oueidat has about eleven moves she could name, which is why choosing three is the work and not the limitation.**'],
  ['Mrs Ajouz', 'How do you choose which three?'],
  ['Mrs Oueidat', '⚠ **The three that produced documents rather than exercises.** **Not the three I enjoyed and not the three I found hardest** — **the three that are in a file somewhere with a date on them, which is 12.1 arriving as a selection rule.**'],
  ['Mr Tayara', 'And the ones that are not about English?'],
  ['Mrs Khoury', '⚠ **They do not go on this page at all and they are not lost.** **They go on a second sheet, with the office named and the date of the document you are going to send** — **which is 12.3, and a readiness page with an organisational problem on it will send the second book looking for a language it cannot find.**'],
  ['Mrs Rizk', 'Does anybody read this page except me?'],
  ['Mrs Oueidat', '⚠ **Your teacher in September, for about four minutes, and then you in June.** **Which is two readers more than most of what any of us writes about ourselves** — **and the four minutes are the reason the harder version has to be a thing somebody can set as work.**'],
  ['Jad', 'What goes in the harder version if the move is already hard?'],
  ['Mrs Oueidat', '⚠ **The same move with a reader who can refuse you.** **Every move in this book gets harder in exactly one way, which is the reader\'s power** — **the covering note to a colleague, then to a donor, then to a committee that has already decided; and the page should say which of the three you have reached.**'],
  ['Mr Zahreddine', 'Mine are all three about the same thing and I cannot separate them.'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is that I had eleven moves and three rows.** **Choosing was the whole afternoon** — **and the three I chose are not the three I would have chosen in May, because two of the eleven turned out to have no document behind them and one of them is the move I talk about most.**'],
]));
out.push(sp());
out.push(ready([
  ['**Name the absence before writing the version** _(11.1)_', 'Name it in a document somebody else wrote, which I cannot alter', '⚠ _Do I write the list before the version?_'],
  ['**State a degree I will defend** _(9.1)_', 'State it to a reader who has already decided the other way', '⚠ _Do I state the degree without choosing it?_'],
  ['**Put the limitation under its claim** _(9.3)_', 'Put it under a claim that is not mine, in a summary of two experts', '⚠ _Does the _therefore_ half arrive without being looked for?_'],
]));
out.push(sp());
out.push(box('Language box – the readiness page', [
  '**Three rows and three columns, and nothing else on the sheet.** ⚠ **The move as it is now, with the cycle number.** **The harder version.** **One question, answerable in four seconds, with a behaviour in it.**',
  '**Why the harder version.** ⚠ **A move you have is not a thing to practise.** **The second book has to be given something to do** — **and the harder version of _name the absence_ is naming it in a document somebody else wrote and you cannot alter.**',
  '**The automatic question has a behaviour in it.** ⚠ **Not _can I do this_, which everybody answers yes in July.** _Do I write the list before the version?_ · _Do I state the degree without choosing it?_ **_Without choosing_ is the test** — **a move you choose is a move you have, and a move you make without choosing is a move that has you.**',
  '**How every move in this book gets harder, which is one way and not many.** ⚠ **The reader\'s power.** **The covering note to a colleague, then to a donor, then to a committee that has already decided** — **and the page should say which of the three you have reached.**',
  '**How to choose three out of eleven.** ⚠ **The three that produced documents rather than exercises.** **Not the three you enjoyed and not the three you found hardest** — **the three that are in a file somewhere with a date on them, which is 12.1 arriving as a selection rule.**',
  '**And what does not go on this page.** ⚠ **Anything that is not about English.** **It goes on a second sheet with the office named and the date of the document you are going to send** — **because a readiness page with an organisational problem on it will send the second book looking for a language it cannot find.**',
  '**Who reads it.** ⚠ **Your teacher in September, for about four minutes, and you in June.** **Two readers more than most of what anybody writes about themselves** — **and the four minutes are the reason the harder version has to be a thing somebody can set as work.**',
  '**Pronunciation.** 🔊 **Track 12.10** **Read your three rows aloud and do not explain any of them.** ⚠ **The temptation after each row is a sentence beginning _I mean_.** **A row that needs explaining is not a row** — **it is two rows, or it is a topic and not a move, and the reading aloud finds that in about eight seconds.**',
  '**Practise:** Write the three columns for one move. **1** a move with a document behind it  **2** its harder version, by the reader\'s power  **3** the question, with a behaviour in it  **4** one that belongs on the second sheet  **5** one you talk about most — and check whether it has a document',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the row from the card. B says **whether it is a readiness row** and, where it is not, **says what it is instead.** ⚠ **Two rows on each card belong on the second sheet.** **B must say so and name the office.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Name the absence → in a document I cannot alter → do I write the list first?_', '_State a degree → to a reader who has decided → do I state it without choosing?_'],
  ['_⚠ I cannot refuse the regional director → ? → ?_', '_⚠ The inspectorate will not accept a hand-kept day-book → ? → ?_'],
  ['_Put the limitation under its claim → under somebody else\'s claim → does the therefore arrive by itself?_', '_Write eighty words → with no telephone available → do I draft the holes first?_'],
  ['_⚠ I want to improve my vocabulary → ? → ?_', '_⚠ My writing is better than it was → ? → ?_'],
  ['_Concede the method and hold the result → to somebody senior → do I apply the test before conceding?_', '_Find the calque → in my own first sentence → do I read it aloud before sending?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** readiness row, second sheet, or neither. ⚠ **Rows 2 on both cards belong on the second sheet** — **an office and a procedure, and both need a named office and a date rather than a harder version.** **Rows 4 are neither**: a wish and a feeling, and the honest answer is that there is nothing to write down. **Rows 1, 3 and 5 are complete and are models** — **every harder version is the same move with a reader who can refuse you.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  List **every move you could name** and count them. ⚠ **In this class the counts have run between seven and fourteen.** **Then strike every one with no document behind it** — **which in this class has removed between two and five — and choose three from what is left.** **The choosing is the work.**'));
out.push(p('**b**  Write **the three rows in full** and read them aloud to your partner **without explaining any of them.** ⚠ **A row that needs a sentence beginning _I mean_ is not a row.** **It is two rows, or it is a topic** — **and in this class about a third of first attempts have failed the reading-aloud test and been rewritten in two minutes.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat has written three rows and three columns and nothing else on the sheet: the move as it is now, the harder version of it, and one question she can ask herself in four seconds to find out whether it has become automatic. Mrs Tarabishi asked why the harder version, and because a move you have is not a thing to practise: the second book has to be given something to do, and the harder version of name the absence is naming it in a document somebody else wrote, which she does four times a year and has never done well. Mrs Khoury said the automatic question is the column that makes the page worth keeping — it is not can I do this, which is answered yes by everybody in July, but a question with a behaviour in it: do I write the list before the version? Dr Qabbani said his would be whether he states the degree without choosing it, and that is the right shape, because without choosing it is the test of automatic: a move you choose is a move you have, and a move you make without choosing is a move that has you. Mr Shihabi said three seems few for a year, and three is what a page can hold and what a September teacher can use. Mrs Ajouz asked how you choose which three, and the three that produced documents rather than exercises. Mr Tayara asked about the ones that are not about English, and they do not go on this page and they are not lost: they go on a second sheet with the office named and the date of the document you are going to send. Mrs Rizk asked whether anybody reads the page, and her teacher in September for about four minutes, and herself in June, which is two readers more than most of what any of them writes about themselves, and the four minutes are why the harder version has to be a thing somebody can set as work. Mr Attar asked what goes in the harder version if the move is already hard, and the same move with a reader who can refuse you. Mr Zahreddine said his are all three about the same thing and he cannot separate them, and Mrs Khoury said then he has one move and two rows to find, and the finding is worth more than three rows written to fill a page. And Mrs Oueidat said the thing she will take away is that she had eleven moves and three rows, and the three she chose are not the three she would have chosen in May._'));
out.push(p('**Listener task:** write your count of moves, your count after striking, and your three rows.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Oueidat\'s readiness page and her second sheet. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _readiness page for the second book_ · _three moves, three harder versions, three questions_ · **2 August**',
  '**Eleven moves could be named and three are on this page.** ⚠ **Two of the eleven had no document behind them and were struck; six are real and are not here, because a page with nine rows is a syllabus and is read once.**',
  '**Row one.** **Move: name the absence before writing the version (11.1).** **Harder version: name it in a document I did not write and cannot alter** — **which is the covering line, and I do it four times a year and have never done it well.** **Question: _do I write the list before the version?_**',
  '**Row two.** **Move: state a degree I will defend (9.1).** **Harder version: state it to a reader who has already decided the other way** — **a court that has heard the other side, or a committee with a resolution on the table.** **Question: _do I state the degree without choosing it?_**',
  '**Row three.** **Move: put the limitation under its claim with its _therefore_ half (9.3).** **Harder version: put it under a claim that is not mine, in a summary of two experts who disagree.** **Question: _does the _therefore_ half arrive without being looked for?_**',
  '**Why these three and not the six others.** **All three are in documents with dates: the covering note of 24 July, the summary of 18 June, the court note of 4 May.** ⚠ **The six others are things I can do and have not had to do**, and one of them is the move I talk about most, which is how I know the selection rule is worth having.',
  '**The second sheet, which is not a readiness page.** **_The court will not accept a covering line read into the record unless the judge asks for it._** **That is not about my English.** **It is a practice of one court, the office is the registry, and the document I am going to send is a note to the registrar on 11 August asking whether a covering line may be filed with the summary rather than read.** ⚠ **Nobody in this city has asked, as far as the registry knows.**',
  '**The six moves that are real and are not on the page, because a reader of this sheet in September is entitled to know they exist.** **Concede the method and hold the result (9.4).** **Write the response letter to its own length (9.6).** **Tell a hedge made of grammar from one made of words (11.3).** **Write the covering note to three absences (11.6).** **Find a calque by reading aloud (11.2).** **Write eighty words from a shape with holes in it (10.6).** ⚠ **All six have documents and all six are left off**, because three is what a page can hold.',
  '**And one sentence about the page itself.** **Three rows took an afternoon and the eleven-item list took four minutes.** **The work was in the striking and the choosing** — **and the two items I struck were both moves I believed I had, which is the only unpleasant thing in this document and the reason it is worth keeping.**',
]));
out.push(item('1', 'How many moves could she name, and why are only three on the page?'));
out.push(item('2', 'What is the selection rule, and how does she know it is worth having?'));
out.push(item('3', 'What is on the second sheet, and what is she going to send?'));
out.push(writers([
  'A readiness page: **the count of moves and the count of rows** → **three rows, each with the move and its cycle, the harder version by the reader\'s power, and the question with a behaviour in it** → **why these three and not the others, with the documents and the dates** → **the second sheet, with the office and the date** → **and one sentence about where the work was.**',
  '⚠ **Give both counts.** _Eleven moves could be named and three are on this page._ **A page of three rows with no count behind it looks like a small year** — **and the eleven is what makes the three a choice rather than an inventory.**',
  '**Every harder version is the reader\'s power.** ⚠ _State it to a reader who has already decided the other way._ **This is the one axis on which every move in Book 1 gets harder** — **and a harder version that is longer or in a new genre has made the move a different one.**',
  '**The question has a behaviour in it and _without choosing_ is the test.** ⚠ _Do I state the degree without choosing it?_ **A move you choose is a move you have.** **A move you make without choosing is a move that has you** — **and only the second kind survives a bad week, which is what September will be.**',
  '⚠ And **keep the second sheet separate and put a date on it.** _A note to the registrar on 11 August._ **A readiness page with an organisational problem on it sends the second book looking for a language it cannot find** — **and the problem has acquired an office and a date, which is more than it had in September.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your readiness page (120 words or more).'));
out.push(p('**______________** · _readiness page for the second book_ · _three moves, three harder versions, three questions_ · **______________**   **______________ moves could be named and three are on this page.** ⚠ **______________ had no document behind them and were struck.**   **Row one.** **Move: ______________ (______).** **Harder version: ______________.** **Question: _______________?_**   **Row two.** **Move: ______________ (______).** **Harder version: ______________.** **Question: _______________?_**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both counts: moves nameable, and rows kept',
  'Every harder version on the axis of the reader\'s power',
  'Every question with a behaviour in it',
  'The second sheet separate, with an office and a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their three questions only**, and the room says which of them has no behaviour in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole readiness page and the second sheet (260 words or more), to the shape in the writer\'s box: the counts, the three rows, why these three with their documents, the second sheet with its date, and where the work was.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both counts, harder versions on the reader\'s-power axis, a behaviour in every question, and a dated second sheet.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their three rows aloud and explains nothing.** ⚠ **The room counts the times the reader begins a sentence with _I mean_.** **It should be nought.** **A row that needs explaining is two rows, or it is a topic and not a move** — **and the reading aloud finds that in about eight seconds, which no amount of re-reading on paper does.** Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **the three I chose are not the three I would have chosen in May.**'));
out.push(hw('Write **the list of every move you could name** and count it. ⚠ **Strike every one with no document behind it** — **and go and look for the documents rather than remembering them.** **Then choose three, write the three rows in full, and read them aloud to somebody without explaining any of them.** **Write the second sheet as well, with the office named and a date on the document you are going to send.** **Bring the two counts, the three rows and the second sheet.** **12.6 writes the proposal for the thing you will do with this English**, and it is Writing Part 2 and goes to a reader who has not agreed that you should.'));

// ===================== 12.6 =====================
out.push(h2('12.6  The proposal for what you will do with it'));
out.push(p('**Function:** writing the proposal for the thing you will do with this English   ·   **Grammar:** **Writing Part 2 (proposal)** · to a reader who has not agreed that you should   ·   **Pronunciation:** an ask said once and not three times'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the thing you will do with this English, in one sentence, and the name of the person who has to agree.** ⚠ **The name, not the title.** Your teacher writes the ten names on the board. **In most classes seven or eight of the ten are a person who has not been asked about anything in nine months** — **and three or four of the ten students have never asked that person for anything at all.**'));
out.push(board('I would like the chance to use my English.', 'Forty letters a month; three come back.'));
out.push(p('**b**  Which two belong in a proposal to a reader who has not agreed? **1** _I would like to be given the opportunity to write the English correspondence._  **2** _The office sends about forty English letters a month and three come back for clarification; I should like to draft them for six months and report the figure in March._  **3** _I am now much better at English and would like to use it._  **4** _I hope you will consider my request favourably._  **5** _Doing nothing costs the office about two days a month in re-drafting, on its own figures at annexe A._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide this proposal is not?   **A** a request for permission   **B** **a request about you** — it is about something the reader\'s office is paying for now, and the English is the instrument and not the subject   **C** a report on the year'));
out.push(p('**b**  Listen again. **1** What is Mr Attar\'s proposal, and who has to agree to it?   **2** What does Mrs Rizk say about the first paragraph?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  Not a request about you', [
  ['Ms Huda', 'Mr Attar — the thing you will do with this, and who has to agree.'],
  ['Jad', '⚠ **The team lead, who is called Firas Haddad and who has never been asked for anything by me in two years.** **And the thing is the English release notes.** **We ship every three weeks and the notes are written by whoever is free.**'],
  ['Mrs Tarabishi', 'And you want to write them.'],
  ['Jad', '⚠ **Which is the version of the sentence that will be refused, and I have learnt that this week.** **_I want to write them_ is a request about me.** **What I have is a figure: eleven of the last twenty support tickets quote a release note back at us, and four of the eleven quote a sentence that is wrong.**'],
  ['Mrs Rizk', '⚠ **And that figure is the first paragraph, which is 4.6 and I have been making the same mistake for eleven years.** **A proposal to somebody who has not agreed begins with what their office is paying for now** — **not with the remedy and never with the writer.**'],
  ['Mrs Khoury', '⚠ **And the ask goes once.** **Once, in the middle, in one sentence** — **and a proposal with the ask in the first paragraph and the last is a proposal that has told a budget holder four times that somebody wants something, and a want can be refused in four seconds.**'],
  ['Dr Qabbani', 'Does the English come into it at all?'],
  ['Jad', '⚠ **It is the instrument and not the subject, and saying so is the hardest line in my draft.** **Nowhere in the proposal does it say that my English has improved.** **It says that four of eleven tickets quote a wrong sentence and that I propose to draft the notes for six months and report the figure in March** — **and if the figure does not move, the arrangement ends.**'],
  ['Mr Shihabi', 'You have put the failure condition in.'],
  ['Jad', '⚠ **Because a six-month arrangement with no end in it is a permanent change, and nobody grants a permanent change to somebody who has not asked for anything in two years.** **Three sentences: what it costs now, what I shall do, and when it stops if it does not work.**'],
  ['Mrs Ajouz', 'Mine is a procedure and not a person.'],
  ['Mrs Oueidat', '⚠ **Then 12.3 has already told you what to do and this cycle is about the document rather than the item.** **A procedure is changed by a proposal to whoever owns it** — **and the figure in the first paragraph is what the procedure costs, which somebody in that office has and nobody has asked them for.**'],
  ['Mr Tayara', 'And where there is no figure?'],
  ['Mrs Rizk', '⚠ **Then the first paragraph says so and names the document that would produce one.** **Which is 9.1 at the first degree** — **and a proposal that opens by naming what nobody has counted is a stronger proposal than one that opens with an estimate, because the estimate can be argued with and the absence cannot.**'],
  ['Mrs Tarabishi', 'Mine is a supervisor and the thing I want is four hours of her time.'],
  ['Mrs Khoury', '⚠ **Then the cost of doing nothing is in her diary and not in yours.** **Eleven weeks on a round that four hours would have prevented** — **and the arithmetic of a proposal is always in the reader\'s units and never in the writer\'s.**'],
  ['Mr Zahreddine', 'I have nothing to propose. I have been doing this for twenty years.'],
  ['Jad', '🔊 ⚠ **And the thing I shall take away is the two years.** **I have never asked Mr Haddad for anything**, and the proposal I have written is three hundred words about eleven support tickets — **and the only sentence in it that is about me is the one that says the arrangement ends in March if the figure has not moved.**'],
]));
out.push(sp());
out.push(box('Language box – the proposal to somebody who has not agreed', [
  '**What it is not.** ⚠ **It is not a request about you.** **It is about something the reader\'s office is paying for now** — **and the English is the instrument and not the subject, which means the word does not appear.**',
  '**The first paragraph is what it costs now, in the reader\'s units.** ⚠ _Eleven of the last twenty support tickets quote a release note back at us and four of the eleven quote a sentence that is wrong._ **Not the remedy and never the writer** — **which is 4.6 and is the paragraph nobody writes.**',
  '**The ask goes once, in the middle, in one sentence.** ⚠ **A proposal with the ask in the first paragraph and the last has told a budget holder four times that somebody wants something** — **and a want can be refused in four seconds.**',
  '**Put the failure condition in.** ⚠ _If the figure has not moved by March, the arrangement ends._ **A six-month arrangement with no end in it is a permanent change** — **and nobody grants a permanent change to somebody who has not asked for anything in two years.**',
  '**Three sentences carry the whole of it.** ⚠ **What it costs now.** **What you will do.** **When it stops if it does not work.** **Everything else in the three hundred words is evidence for the first of the three.**',
  '**Where there is no figure.** ⚠ **The first paragraph says so and names the document that would produce one**, which is 9.1 at the first degree. **A proposal that opens by naming what nobody has counted is stronger than one that opens with an estimate** — **because the estimate can be argued with and the absence cannot.**',
  '**And where what you want is somebody\'s time.** ⚠ **The cost of doing nothing is in their diary and not in yours.** _Eleven weeks on a round that four hours would have prevented._ **The arithmetic of a proposal is always in the reader\'s units.**',
  '**Pronunciation.** 🔊 **Track 12.12** **Say your ask once, flat, and then stop.** ⚠ **The temptation is to say it again in other words**, and a listener hears the second version as the real one and the first as politeness. **Once, and then the next sentence is the failure condition** — **which is the one place in this book where a sentence about yourself belongs.**',
  '**Practise:** Write the three sentences. **1** what it costs now, in the reader\'s units  **2** the ask, once  **3** the failure condition with its date  **4** one where there is no figure  **5** one where what you want is somebody\'s time',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the opening from the card. B says **whether it is about the reader\'s office or about the writer**, and gives **the first paragraph that should have been there.** ⚠ **Two rows on each card are already right.** **B must say so.** Change cards.'));
out.push(table(['Card A – the opening sentence', 'Card B – the opening sentence'], [
  ['_I would like the opportunity to write the English release notes._', '_I am now much better at English and would like to use it._'],
  ['_⚠ Eleven of the last twenty tickets quote a release note and four quote a wrong sentence._', '_⚠ The office sends forty English letters a month and three come back for clarification._'],
  ['_My English has improved considerably over the past year._', '_I hope you will consider my request favourably._'],
  ['_⚠ Nobody has counted how many files are returned for wording; the regional return would show it._', '_⚠ Eleven weeks were spent on a round that four hours of reading would have prevented._'],
  ['_I feel I could contribute more if given the chance._', '_It would be good for my development to take this on._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** reader\'s office or writer, and the repaired first paragraph. ⚠ **Rows 2 and 4 on both cards are already right** — **and rows 4 will be rejected by the room, because one has no figure and the other is in somebody else\'s diary.** **Both are correct**: naming what nobody has counted is 9.1\'s first degree, and a cost in the reader\'s units is the only arithmetic a proposal has. **Rows 5 cannot be repaired.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the three sentences**: ⚠ **what it costs the reader\'s office now, in their units; the ask, once; and the failure condition with a date.** **Then count the words.** **In this class the three sentences have run between sixty and ninety words** — **and the three hundred of the full proposal are evidence for the first of them and nothing else.**'));
out.push(p('**b**  Swap. Your partner reads **only your three sentences** and says **whether they would grant it.** ⚠ **Then they say which of the three decided it.** **In this class it has been the third one about half the time** — **which nobody expects, because the failure condition is the sentence writers put in last and reluctantly.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar\'s team lead is called Firas Haddad and has never been asked for anything by him in two years, and the thing is the English release notes: they ship every three weeks and the notes are written by whoever is free. Mrs Tarabishi said so he wants to write them, and that is the version of the sentence that will be refused, and he has learnt that this week — I want to write them is a request about me, and what he has is a figure: eleven of the last twenty support tickets quote a release note back at them and four of the eleven quote a sentence that is wrong. Mrs Rizk said that figure is the first paragraph, which is 4.6 and she has been making the same mistake for eleven years: a proposal to somebody who has not agreed begins with what their office is paying for now, and not with the remedy and never with the writer. Mrs Khoury said the ask goes once, in the middle, in one sentence, because a proposal with the ask in the first paragraph and the last has told a budget holder four times that somebody wants something, and a want can be refused in four seconds. Dr Qabbani asked whether the English comes into it at all, and it is the instrument and not the subject, and saying so is the hardest line in the draft: nowhere does the proposal say that his English has improved. Mr Shihabi said he has put the failure condition in, and because a six-month arrangement with no end in it is a permanent change. Mrs Ajouz said hers is a procedure and not a person, and Mrs Oueidat said 12.3 has already told her what to do. Mr Tayara asked about the case where there is no figure, and then the first paragraph says so and names the document that would produce one. Mrs Tarabishi said hers is a supervisor and what she wants is four hours of her time, and then the cost of doing nothing is in her diary and not in Mrs Tarabishi\'s. Mr Zahreddine said he has nothing to propose because he has been doing this for twenty years, and Mrs Oueidat said that is the one answer the cycle cannot use, and the question to ask instead is which of his three insurers has never been written to about the thing all three of them do. And Mr Attar said the thing he will take away is the two years._'));
out.push(p('**Listener task:** write your three sentences and which one your partner said decided it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the proposal Mr Attar sent. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _to F. Haddad, team lead_ · _proposal: the English release notes, six months_ · **4 August**',
  '**Eleven of the last twenty support tickets quote a release note back at us.** **Four of the eleven quote a sentence that is wrong** — **two about the watchdog default, one about the board revision and one about a parameter we removed in March.** ⚠ **The twenty tickets are the twenty most recent and the quotations are at annexe A with the ticket numbers.**',
  '**What the four wrong sentences have cost, in the team\'s own figures.** **Each of the four produced a reply from whoever picked the ticket up, and two produced a second reply.** **Six replies at about twenty minutes is two hours** — **and the time is in the support rota and not in the release process, which is why nobody has counted it.**',
  '**What is not in dispute.** **The notes are written by whoever is free on the Thursday.** **There is no owner, no check and no record of who wrote which.** **Nobody has suggested that this is anybody\'s fault and it is not a criticism of the process**: a release every three weeks and no named writer is a reasonable arrangement that has produced four wrong sentences in twenty tickets.',
  '**The proposal.** ⚠ **I should like to draft the release notes for the next six months, with whoever ships the release checking the technical content before it goes out.** **One sentence, and it is the only thing asked for in this document.**',
  '**What I would do that is not being done now.** **Three things, none of which takes more than twenty minutes a release.** **Every parameter named in a note checked against the code on the day of the release, not the day of writing.** **Every sentence that states a default given the default\'s line number in an appendix the support team can see.** **And the previous note read against the new one, because two of the four wrong sentences were right in the release before.**',
  '**When this stops.** ⚠ **In March, if the figure has not moved.** **The measure is the same one: of the twenty most recent tickets at that date, how many quote a release note and how many quote a sentence that is wrong.** **If four is still four, the arrangement ends and I shall say so in the same words I am using now.**',
  '**What I am not proposing, because it is the larger change and is not mine to ask for.** **A named owner for the release notes in the process document.** ⚠ **That would outlast six months and would need the process document opened**, which is a decision for you and not a thing I can offer to do.',
  '**And one thing about this proposal rather than about the notes.** **I have not written that my English has improved and it is not relevant.** **The four wrong sentences are wrong in their facts**, and a note with a correct parameter in clumsy English costs nobody a ticket.',
]));
out.push(item('1', 'What is in the first paragraph, and where are the quotations?'));
out.push(item('2', 'How many times is the ask made, and when does the arrangement stop?'));
out.push(item('3', 'What does he say he has not written, and why?'));
out.push(writers([
  'A proposal to somebody who has not agreed: **the figure, in the reader\'s units, with the evidence attached** → **what it has cost, in their own figures** → **what is not in dispute, and that nobody is blamed** → **the ask, once** → **what you would do that is not being done** → **when it stops, with the same measure** → **and one thing about the proposal rather than the subject.**',
  '⚠ **Open with their figure and attach the evidence.** _Eleven of the last twenty support tickets quote a release note back at us._ **A proposal whose first paragraph is about the writer is refused in four seconds**, and this one reaches the writer in the fourth.',
  '**Say that nobody is being blamed, and mean it.** ⚠ _A release every three weeks and no named writer is a reasonable arrangement that has produced four wrong sentences in twenty tickets._ **A proposal that implies the present arrangement is somebody\'s fault asks the reader to agree that they have been negligent** — **and no reader agrees to that.**',
  '**The ask is one sentence and is labelled.** ⚠ _One sentence, and it is the only thing asked for in this document._ **Saying so is worth more than the brevity**, because a reader who has been told there is one ask stops looking for others and reads the rest as evidence.',
  '⚠ And **put the failure condition in, with the same measure.** _If four is still four, the arrangement ends and I shall say so in the same words I am using now._ **This is the sentence that gets it granted** — **in this class it has decided about half the cases, and it is the sentence writers put in last and reluctantly.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a proposal to somebody who has not agreed (120 words or more).'));
out.push(p('**______________** · _to _______________ · _proposal: _______________ · **______________**   **______________ of the last ______________ ______________.** **______________ of the ______________ ______________.** ⚠ **______________ are at annexe ___.**   **What ______________ has cost, in ______________ own figures.** **______________.** **______________ at about ______________ is ______________.**   **What is not in dispute.** **______________.** **Nobody has suggested that this is anybody\'s fault and it is not a criticism of ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reader\'s figure first, with the evidence attached',
  'Nobody blamed, said expressly',
  'The ask once, and labelled as the only one',
  'The failure condition, with the same measure and a date',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their first paragraph only**, and the room says whose office is being described.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole proposal (260 words or more), to the shape in the writer\'s box: the figure, the cost, what is not in dispute, the ask once, what you would do, when it stops, and one thing about the proposal.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reader\'s figure first, nobody blamed, one labelled ask, and a dated failure condition with the same measure.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says their ask once, flat, and then stops.** ⚠ **The room counts the seconds before the student says it again in other words.** **It is usually about four.** **A listener hears the second version as the real one and the first as politeness** — **and the sentence after the ask has to be the failure condition, the one place in this book where a sentence about yourself belongs.** Then the sentence the cycle ends on, which is Mr Attar\'s: **I have never asked Mr Haddad for anything.**'));
out.push(hw('Write **the whole proposal, 260 to 300 words**, to the person whose name you gave at Stage 1. ⚠ **Then find their figure** — **actually find it, from their records and not from your estimate** — **and put it in the first paragraph.** **Send it if you can.** **In this class seven of the ten have sent one and four of the seven have had an answer in under a fortnight.** **Bring the proposal and anything that came back.** **12.7 mediates between the student you were in September and the student you are now**, and carries **Reading Part 5**, **Writing Part 2** and **Listening Part 4**.'));

// ===================== 12.7 =====================
out.push(h2('12.7  Review & Mediate: the student in September and the student in June'));
out.push(p('**Function:** mediating between the student you were in September and the student you are now   ·   **Recycling:** Unit 12 and Book 1   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 5 · Writing Part 2 (a proposal) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** On 4 May I have deleted the word before anybody asked me.  **2** A stopping is dated by it is last instance.  **3** If somebody wrote it for you, perfectly, would the thing happens?  **4** The three that produced documents rather than exercises, not the three which I enjoyed them.  **5** Doing nothing cost the office about two days a month, on its own figures.  **6** I should like to draft them for six months and reporting the figure in March.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two documents and the question.'));
out.push(box(null, [
  '**TWO DOCUMENTS BY THE SAME PERSON** _(the writer is Mrs Ajouz; the first is of 14 September and the second of 4 August; the reader of both is the same registration officer)_',
  '**September.** _"The arrangements at this branch have been satisfactory and the record has been maintained throughout. We would be grateful if the file could be processed at your earliest convenience."_',
  '**August.** _"Nine entries have been made since 2019, six concerning the cold chain and three the labelling; the dates are at annexe A. The day-book is kept by hand and is the only record. Three queries were dealt with at the counter and are not in it."_',
  '**The student in September.** _"The first one is polite and the second one is cold. I would not have sent the second to that officer."_',
  '**The student in August.** _"The first one was returned in eleven days and the second was accepted. I would not now send the first to anybody."_',
  '⚠ **Both are right about the officer and only one of them has been read by him.**',
  '**And the thing neither has noticed.** **The September version asks for something and the August version asks for nothing.** **The officer granted the thing that was not asked for** — **and nowhere in nine months has anybody said that the politeness was the part that caused the delay, because it was not: the absence of the nine entries was.**',
  '**The question for the cycle.** _What do you say to the student in September, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said to the student in September. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  What you do not say to September', [
  ['Ms Huda', 'Mrs Khoury — what must not be said?'],
  ['Mrs Khoury', '⚠ **That the politeness was the fault.** **It was not.** **The file was returned because there were no entries in it, and the courtesy formula cost nothing at all** — **and a student told that their manners were the problem will spend the second book being cold, which is not a skill.**'],
  ['Mrs Ajouz', 'But I would not now send the first one.'],
  ['Mrs Khoury', '⚠ **For a different reason, and the difference is the whole cycle.** **You would not send it because it contains no entries, no dates and no annexe** — **not because it contains _we would be grateful_.** **Those are two findings and nine months has produced one of them.**'],
  ['Mrs Tarabishi', 'So what do you say?'],
  ['Mrs Oueidat', '⚠ **Three things, and in this order.** **What September was right about.** **What September had no way of knowing.** **And the one thing that is now available that was not** — **which is a list of absences and not a manner.**'],
  ['Dr Qabbani', 'What was September right about?'],
  ['Mrs Ajouz', '⚠ **About the officer.** **He is a formal man who has worked there for twenty years and the formula was correctly judged** — **and the August version keeps it, in one line at the end, which nobody in this room noticed when it was read out.**'],
  ['Mr Shihabi', 'It does?'],
  ['Mrs Ajouz', '⚠ **_I should be grateful for confirmation when the file has been considered._** **One line, at the end, after the entries.** **The only thing that changed was where it goes and how many of them there are** — **and I did not plan that: I noticed it in July when I read the two documents side by side.**'],
  ['Mrs Khoury', '⚠ **Which is the finding of the whole unit arriving by itself.** **Nothing has been taken away.** **A list of nine entries has been added and a formula has moved to the end** — **and the second document is twice as long as the first and was accepted.**'],
  ['Mr Tayara', 'And what September had no way of knowing?'],
  ['Mrs Oueidat', '⚠ **That the officer\'s question was always going to be _on what_.** **It was not a question about her English and it was never going to be** — **and 12.3 is the cycle that says so, and the student in September could not have reached it because she had no returned file to look at.**'],
  ['Mrs Rizk', 'Is that not a kind of excuse for September?'],
  ['Mrs Khoury', '⚠ **It is an account and not an excuse, and the distinction is one word.** _September could not have known_ **is an account.** _September should have known_ **is a reproach, and it is also false** — **the nine entries existed in a day-book that nobody had asked for, and nothing in September\'s situation pointed at them.**'],
  ['Jad', 'What do you say about the second book?'],
  ['Mrs Oueidat', '⚠ **One sentence, and it is the readiness page and not an encouragement.** **_The three moves with documents behind them, their harder versions, and the three questions._** **A student who is told they have improved will arrive in September expecting to be told again** — **and a student who arrives with three rows and a second sheet has brought work.**'],
  ['Mr Zahreddine', 'September did not write a list at all. I thought the exercise was for the others.'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the line at the end.** **I kept the courtesy and moved it**, and I did not decide to — **and the student in September was right about the officer and wrong about nothing except what a file has to contain, which is the only thing nine months of this was ever going to teach anybody.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between September and now', [
  '**The three moves, unchanged since 1.7, and this is the last time they appear in Book 1.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new, because the writer is you.** ⚠ **Three things, in this order: what September was right about; what September had no way of knowing; and the one thing now available that was not.** **Nothing else, and no verdict.**',
  '**What must not be said.** ⚠ **That the manner was the fault.** **A file returned for having no entries in it was not returned for its courtesy** — **and a student told their manners were the problem will spend the second book being cold, which is not a skill.**',
  '**An account and not a reproach, and the distinction is one word.** ⚠ _September could not have known_ **is an account.** _September should have known_ **is a reproach and is also false** — **the evidence September needed was in a day-book nobody had asked for.**',
  '**Look for what has been kept, because something always has.** ⚠ **Mrs Ajouz\'s courtesy formula is in both documents and nobody in the room noticed.** **It moved to the end and there is one of it instead of two** — **and she did not decide that: she found it in July, reading the two side by side.**',
  '**The second document is usually longer.** ⚠ **Nothing was taken away.** **Nine entries were added and a formula moved** — **and a student who expects the June version of their own writing to be shorter has learnt the wrong thing from the whole book.**',
  '**And what you say about the second book.** ⚠ **The readiness page, and not an encouragement.** **A student told they have improved arrives in September expecting to be told again.** **A student who arrives with three rows and a second sheet has brought work** — **which is the last thing Book 1 has to say.**',
  '**Pronunciation.** 🔊 **Track 12.14** **Say _September could not have known_ with no stress on _could_.** ⚠ **Stress on _could_ turns it into a defence and the room hears somebody arguing with themselves.** **Flat, it is an account** — **and the sentence after it has to be the thing that is now available, immediately, or the account becomes a consolation.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the September version and the June version from the card and does **not** say which is which. B identifies them, then says **what September was right about**, **what September had no way of knowing**, and **what is now available.** ⚠ **On one of the two cards September is better than June in one respect.** **B must find it.** Change roles with the other pair.'));
out.push(table(['Pair A – the registration file', 'Pair B – the literature review'], [
  ['_"The arrangements have been satisfactory and the record maintained."_', '_"Four authors have written on this question and their findings are mixed."_'],
  ['_"Nine entries since 2019, six cold-chain, three labelling; dates at annexe A."_', '_"Of the six pairings among these four authors, one is a dispute and five are not."_'],
  ['_⚠ September judged the reader correctly and kept the formula._', '_⚠ September named all four authors in the first sentence; June names two._'],
  ['_⚠ September had no returned file to learn from._', '_⚠ September had read none of the four in the original._'],
  ['_⚠ Now available: the list of entries and the annexe._', '_⚠ Now available: the arithmetic of the pairings._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three things, and the respect in which September was better. ⚠ **On Pair B September named all four authors first and June names two** — **which is a loss and should be said**: the arithmetic of the pairings is worth more, and a reader who meets two names wonders about the other two. **The honest answer is that June\'s first sentence should have carried the arithmetic and the four names**, which neither student wrote.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Put **your September document and your June document side by side** and write the three things: ⚠ **what September was right about, what September had no way of knowing, and what is now available.** **Then look for what has been kept.** **In this class something has been kept in every single pair** — **and in six of ten the student had not noticed it.**'));
out.push(p('**b**  Swap. Your partner reads **both of your documents** and says **the one respect in which September is better.** ⚠ **There is one in about half of all pairs.** **Write it down and do not argue with it** — **it is the only sentence in this unit that nobody can write about their own work, and it is the reason the cycle needs a partner.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say to September, and what you do not:  _Mrs Khoury said what must not be said is that the politeness was the fault, because it was not: the file was returned because there were no entries in it, and the courtesy formula cost nothing at all, and a student told that their manners were the problem will spend the second book being cold, which is not a skill. Mrs Ajouz said but she would not now send the first one, and for a different reason, and the difference is the whole cycle: she would not send it because it contains no entries, no dates and no annexe, and not because it contains we would be grateful. Mrs Tarabishi asked what you do say, and Mrs Oueidat said three things and in this order — what September was right about, what September had no way of knowing, and the one thing now available that was not, which is a list of absences and not a manner. Dr Qabbani asked what September was right about, and about the officer: he is a formal man who has worked there for twenty years and the formula was correctly judged, and the August version keeps it, in one line at the end, which nobody in the room noticed when it was read out. Mr Shihabi asked whether it does, and it does: I should be grateful for confirmation when the file has been considered, one line, at the end, after the entries. Mrs Khoury said that is the finding of the whole unit arriving by itself — nothing has been taken away, a list of nine entries has been added and a formula has moved to the end, and the second document is twice as long as the first and was accepted. Mr Tayara asked what September had no way of knowing, and that the officer\'s question was always going to be on what. Mrs Rizk asked whether that is a kind of excuse, and it is an account and not an excuse, and the distinction is one word. Mr Attar asked what you say about the second book, and one sentence, and it is the readiness page and not an encouragement. Mr Zahreddine said September did not write a list at all, and Mrs Khoury said the account has to say so, because a student who is told what his September self ought to have done and never did will not recognise himself in it. And Mrs Ajouz said the thing she will take away is the line at the end: she kept the courtesy and moved it, and she did not decide to._'));
out.push(p('**Listener task:** write your three things, and what has been kept.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 5)', 7));
out.push(p('You are going to read an article about how adults learn to write in a second language at work. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best according to the text.'));
out.push(box(null, [
  '**WHAT THE SECOND YEAR LOOKS LIKE**',
  'The literature on professional second-language writing has an awkward gap in it. There is a great deal on the first year, in which almost everything that happens is visible: vocabulary arrives, sentences lengthen, errors of form fall away and can be counted. There is a great deal on what happens to children. On the adult in the second and third year — the lawyer, the pharmacist, the engineer who already writes competently and is now learning to write usably — there is very little, and what there is tends to rely on the writers\' own accounts of themselves.',
  'Those accounts are the problem. Asked what has changed, an adult writer reports a feeling: more confident, more careful, more aware of the reader. Asked for an occasion, the same writer will often produce nothing at all for several minutes, and then produce something much more specific than the feeling and in a different category altogether — a word they stopped using in February, a question a colleague did not ask, a document that came back once instead of three times. The two kinds of answer are not versions of each other. The first cannot be checked by anybody, including the person giving it; the second can be checked by looking in a file.',
  'The small body of work that does ask for occasions reports two findings that sit oddly together. The first is that the changes adults notice are almost all subtractions. They stopped using a word, stopped explaining something, stopped adding a paragraph. Almost nobody reports having started doing something, even where the record plainly shows that they have — and the suggested reason is mechanical rather than psychological: a thing you have begun doing is part of how you now write and is therefore invisible, whereas a thing you have stopped doing leaves a hole where it used to be.',
  'The second finding is harder to use. Where adult writers are asked to list what they still cannot do, and the lists are then examined by somebody with access to the organisation, about half of the items turn out not to be about language at all. They are procedures, hierarchies and missing records: the figure that nobody collects, the refusal that the office has never made, the form with no field for the thing. The writers themselves had assumed, in most cases for years, that these were their own shortcomings — and the researchers who report this are careful to note that the writers were not being modest. They had simply never had occasion to separate what they could not write from what their office had never done.',
  'Whether the second finding is a result about language learning at all is a fair question, and the honest answer is that it is probably a result about organisations that happens to be visible through a window made of language. It is nonetheless the finding with the most immediate use, because an item that has been misfiled as a personal deficiency is an item nobody is working on, and an item correctly filed as a procedure is one that a single document can sometimes move.',
  '**1**  What does the writer say is the main difficulty with research on the second and third year?',
  '    **A** it has mostly been carried out on children   **B** the changes it studies cannot be counted   **C** it depends largely on what the writers say about themselves   **D** the writers studied are already competent',
  '**2**  What does the writer say about the two kinds of answer an adult gives?',
  '    **A** they belong to different categories and only one can be verified   **B** the first is usually a politer version of the second   **C** the second is less specific than the first   **D** neither is of much use to a researcher',
  '**3**  Why, according to the text, do adults report subtractions rather than additions?',
  '    **A** subtractions are easier to date   **B** a new habit is invisible because it is now simply how they write   **C** writers are reluctant to claim credit for new skills   **D** the records show more subtractions than additions',
  '**4**  What does the writer say about the items that turn out not to be about language?',
  '    **A** the writers had been modest about them   **B** they are mostly missing records   **C** they could have been identified by the writers themselves   **D** the writers had not had occasion to separate two different things',
  '**5**  What is the writer\'s view of the second finding?',
  '    **A** it is probably about organisations and is still the most useful of the two   **B** it belongs in a different field and should not have been reported   **C** it is less reliable than the first finding   **D** it will be superseded by better research',
  '**6**  What does the final paragraph suggest about an item filed as a procedure?',
  '    **A** it is harder to work on than a personal difficulty   **B** it requires the agreement of an organisation   **C** one document can sometimes be enough to shift it   **D** it should be removed from a learner\'s list',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write what you say to the student in September (120 words or more).'));
out.push(p('**To myself, ______________** · _______________ · **______________**   **What you were right about.** **______________.** **______________.**   **What you had no way of knowing.** ⚠ **______________.** **You could not have known it because ______________.**   **What is now available that was not.** **______________.**   **And what you kept.** ⚠ **______________**, which is in both documents and which I had not noticed until ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What September was right about, said first and meant',
  'An account and not a reproach: _could not have known_',
  'What is now available, named as a document',
  'What has been kept, found by looking',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the proposal)', 10));
out.push(box(null, [
  '⚠ **Last Writing task of Book 1, and it is the proposal.** **The first paragraph is what the reader\'s office is paying for now, in their units.** **The ask goes once, in the middle.** **The failure condition has a date on it.**',
  'The organisation you work for is deciding how to spend a small training budget. **Write a **proposal** for something you would do with the English you now have.** You should **say what the present arrangement costs**, **describe what you propose**, and **say how it would be judged.** Write **220–260 words**.',
  '⚠ **The word _English_ should appear in this proposal about once, and not in the first paragraph.** **A proposal whose subject is the writer\'s English is a request about the writer** — **and the reader has a budget and a problem, and the English is the instrument.**',
  '**And the sentence that decides it, which half this class has now measured.** ⚠ **The failure condition.** _If the figure has not moved by March, the arrangement ends._ **Writers put it in last and reluctantly** — **and in this class it is the sentence that has got half the proposals granted.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  On 4 May I ___ the word, and I have not used it since.   a) have deleted   b) deleted   c) was deleting',
  '2  A stopping is dated by ___ last instance.   a) its   b) it is   c) it\'s',
  '3  If somebody wrote it for you, perfectly, would the thing ___ ?   a) happens   b) happened   c) happen',
  '4  The three that produced documents, not the three ___ enjoyed.   a) I   b) what I   c) that I them',
  '5  Doing nothing ___ the office about two days a month, on its own figures.   a) are costing   b) costs   c) cost',
  '6  I should like to draft them for six months and ___ the figure in March.   a) report   b) reported   c) reporting',
  '7  A move you make without ___ it is a move that has you.   a) choose   b) to choose   c) choosing',
  '8  Nine months on, the move has ___ and he cannot say when.   a) bedded up   b) bedded down   c) bed down',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching, two tasks).** 🔊 **Track 12.15** You will hear five people talking about what changed in the way they write at work. **You must complete both tasks as you listen.**'));
out.push(p('**TASK ONE – what they say changed first.** For questions **1–5**, choose from the list (**A–H**) what each speaker says changed first.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** they stopped using one word   **B** they started putting a date in a sentence   **C** they began reading a summary last   **D** they stopped varying a reporting verb   **E** they began writing a list before a version   **F** they started asking what a document rules out   **G** they began refusing one point in every reply   **H** they stopped thanking anybody for anything', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**TASK TWO – what they say they still cannot do.** For questions **6–10**, choose from the list (**A–H**) what each speaker says they still cannot do.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** write a covering note short enough   **B** refuse something to somebody senior   **C** find a calque in their own writing   **D** get the figure before the deadline   **E** stop a form from forcing an answer   **F** hold a hedge across a language   **G** say what their evidence excludes   **H** leave a sentence alone that a desk would change', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Speaker 1', 'I am a pharmacist and the first thing that changed was that I started putting a date in the sentence. Not in a heading, not in an annexe — in the sentence with the claim in it. Nine entries since 2019. I can date that, because the last file I sent without a date in the sentence came back on the fourth of February and I have not sent one since. What I still cannot do is anything about the forms. There is a box headed Reason for return with one line in it, and a file is always returned for two reasons, and the second one is never written down anywhere by anybody. I have learnt to put two reasons in a covering note and the box still says one.'],
  ['Speaker 2', 'I work in a court and the change was that I stopped producing a version first. I write the list now — what has no equivalent, what the reader will supply, what I write — and then the version, and the list takes twenty minutes and saves the afternoon. It started in about March. What I still cannot do is carry a hedge. Some of them live in the grammar of English and have nowhere to live in Arabic, and I can write the two sentences that replace one of them and I cannot make anybody use them. The covering line goes in and nobody reads it into the record, and that is not something I can fix with better sentences.'],
  ['Speaker 3', 'I am on a newspaper desk and I came from a wire service, and the thing I stopped doing was varying the verb. Said, nine times in a paragraph, and I used to think that was lazy. The last time I changed one for variety was March and I corrected my own use of claimed in print in the same month, which is not an experience I recommend. What I cannot do is write a covering note of the right length. Mine come out at four hundred words against a house figure of three hundred, and I have written three since April and all three were cut by somebody else, and they were right to cut them.'],
  ['Speaker 4', 'I am finishing a doctorate and the change was the reading order. I read the body first now and the abstract last, with the body open beside it, and it takes eleven minutes and it finds two sentences every time. It started in May, after my supervisor asked me one question about a search I could not describe. What I still cannot do is refuse anything to anybody senior. I can write the refusal — four registers of it, point by point, with the office that holds the records named. I have never sent one to my supervisor and I have had four drafts in a drawer since June.'],
  ['Speaker 5', 'I am a structural engineer and I have written the same way for twenty years, so I did not expect anything. What changed was that I started asking what the measurements rule out rather than what they show. Fifty-five readings of fifty-six exclude a specified-grade frame at all but one position, and that sentence is stronger than anything I wrote before and I did not have it in September. What I cannot do is see a calque in my own writing. I have one in every opinion and I know it is there and I cannot find it. My daughter found two in an afternoon and I had read the page about forty times.'],
]));
out.push(p('**C  Writing.** Write the proposal (220–260 words): what the present arrangement costs, in the reader\'s units; the ask once; and the failure condition with a date.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give an occasion with a date as evidence about my own writing',
  '☐ date a stopping by its last instance',
  '☐ mark my September list in three states and not two',
  '☐ apply the four-second test and say which items are not about English',
  '☐ rewrite an item as a statement about an office, with a date',
  '☐ run the invisibility test on a reader who has no stake',
  '☐ write a readiness page: three moves, three harder versions, three questions',
  '☐ write a proposal whose first paragraph is about the reader\'s office',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _bed down · settle down · ease into · slide into · drift into · grow into · take hold · creep up on · steal up on · cotton on · wake up to · shake off_.',
  '**This unit\'s word-formation set** _(Reading Part 5 in 12.7 draws on this unit\'s lexis)_: _automatic → **automatically** · master → **mastery** · internal → **internalise** · transfer → **transferable** · routine → **routinely** · reflex → **reflexive** · competence → **competent** · consolidate → **consolidation** · acquire → **acquisition**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _get on_ **→ _how the two documents get on side by side_**, which is comparing, where at A2 it was getting on a bus · _go through_ **→ _go through the correspondence file_**, which is examining, where at A2 it was going through a door · _take in_ **→ _what a reader takes in from one page_**, which is understanding, where at A2 it was taking in the washing.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
