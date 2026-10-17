// Proactive English B2 · Syria Edition · Book 2 · Unit 15 — Student's Book
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

out.push(h1('Unit 15  Writing to Somebody Who Has Already Said No'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'This unit is about **the second letter** — the one you write after you have been refused. ⚠ **It is the hardest letter in working English and almost nobody is taught it**, which is why most second letters are the first letter sent again more politely.',
  '**15.1** says **what has changed since the refusal**, in one sentence.   **15.2** reopens **without reproach**.   **15.3** asks for **less** than you asked for the first time, and says so.   **15.4** gives the reader a way to say yes **without reversing themselves**.   **15.5** sets the date on which you will **stop asking**.   **15.6** writes the second letter.   **15.7** explains a refusal to the person who received it.',
  '**Exam practice in 15.7:** B2 First **Reading and Use of English Part 3** (word formation), **Writing Part 1** (the essay) and **Listening Part 3** (multiple matching).',
  '⚠ **Bring one refusal you have received and not accepted** — **with the date it was given, and anything that has happened since.** **And before the first lesson, go and find out one fact about it that you could not have known at the time.** **If you look and there is nothing, bring that**: 15.1 opens on exactly that case, **and a letter written without a new fact is the first letter in a better coat.**',
  '**One thing this unit is not about.** ⚠ **It is not about persuasion.** **Everything here assumes the reader was entitled to refuse and may refuse again** — **and the whole technique is built on making that second refusal cheap for them**, which is the only reason anybody ever reconsiders.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 15.1 =====================
out.push(pb());
out.push(h2('15.1  What has changed'));
out.push(p('**Function:** saying what has changed since the refusal, in one sentence   ·   **Grammar:** the new fact, and nothing about the old answer   ·   **Pronunciation:** the new fact said first, before any reference to the refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the refusal you brought, in one sentence, with its date** — and then **the one thing you have found out since that you could not have known at the time.** ⚠ **Your teacher writes both columns on the board.** **Count how many second columns are empty.**'));
out.push(board('I am writing to ask you to reconsider my request of 3 September.', 'Since September the two sites have been reduced to one, which removes the cost the refusal was about.'));
out.push(p('**b**  Which sentence is a new fact? **1** _I still feel strongly that this is important._  **2** _Since September the two sites have been reduced to one._  **3** _I would ask you to look at this again._  **4** _The charge the refusal was based on was withdrawn in November._  **5** _Nothing has changed, but I am asking again._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the first sentence of a second letter must contain, and what does she say about a second letter with no new fact?   **A** an apology for troubling them; it may be sent anyway   **B** **a fact that was not available when they refused** — and **a second letter with no new fact is the first letter sent again, and it asks the reader to have been wrong**   **C** a reminder of the original request'));
out.push(p('**b**  Listen again. **1** What does Mrs Shaaban say she found when she went looking?   **2** What does Ms Huda say the reader is being asked to do if there is no new fact?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  Since the refusal', [
  ['Ms Huda', 'Mrs Shaaban. The refusal, with its date, and the thing you have found out since.'],
  ['Rim', 'Refused on the third of September — a second seal check at the Harasta gate, on cost. ⚠ **And since then the Harasta run has been merged with the Jaramana one.** **There is one gate now, not two.**'],
  ['Ms Huda', '**Then your letter has a first sentence and it is eleven words long.** ⚠ **_Since September the two gates have been merged into one._** **Nothing about the refusal, nothing about the cost, nothing about September.**'],
  ['Omar', 'Mine has no second column. I looked and there is nothing.'],
  ['Ms Huda', '**Then you have the most useful outcome in the room and I am not being kind.** ⚠ **A second letter with no new fact is the first letter sent again** — **and what it asks the reader to do is to have been wrong.**'],
  ['Dima', 'Which nobody does.'],
  ['Ms Huda', '**Which nobody does, and the reason is not pride.** ⚠ **A reader who reverses a refusal with no new fact has to explain to somebody why they refused in the first place** — **and you have made your request into their problem.**'],
  ['Adnan', 'I refuse things. ⚠ **I can change my mind on a fact in four minutes and I cannot change it on a request in four weeks**, and the difference is exactly that: with a fact I have something to write in the file.'],
  ['Ms Huda', '**Say that again for the room, Mr Barghouti, because it is the whole unit.**'],
  ['Adnan', '**With a new fact I have something to write in the file.** ⚠ **Without one, the file says _changed mind_, and I am not writing that about my own decision.**'],
  ['Bassel', 'And if you genuinely cannot find a new fact?'],
  ['Ms Huda', '**Then there are two honest things to do and writing again is not one of them.** ⚠ **Wait for a fact, or ask for something smaller**, which is 15.3. **A smaller ask is itself a change** — **it is a different request and it can be granted without anything being reversed.**'],
  ['Jad', 'How new does the fact have to be?'],
  ['Ms Huda', '**It has to be something they could not have known when they refused.** ⚠ **Not something they overlooked** — **that is the first letter again, with an accusation in it.** **_As I mentioned in September_ is the commonest first six words of a failed second letter.**'],
  ['Hiba', 'Where do you look for it? I have read my own application four times.'],
  ['Ms Huda', '⚠ **Not at your own request — you have been over that.** **Look at the thing the refusal named.** _On cost. On capacity. No member of staff is free._ **The fact you want is almost always about that thing and not about what you asked for** — **Mrs Shaaban did not find a better argument for a seal check; she found out that one of the two gates had closed.**'],
  ['Mazen', 'And the order? Mine would start by referring to the earlier letter.'],
  ['Ms Huda', '🔊 **The fact first, and the reference to the refusal afterwards or not at all.** ⚠ **A letter that opens _further to my request of 3 September_ has told the reader in six words that this is about the past**, and they have put it down. **Open with the thing they do not know.**'],
]));
out.push(sp());
out.push(box('Language box – the new fact', [
  '**The first sentence of a second letter is a fact that was not available when they refused.** ⚠ _Since September the two gates have been merged into one._ **Eleven words. Nothing about the refusal, nothing about the cost, nothing about the date.**',
  '⚠ **A second letter with no new fact is the first letter sent again** — **and what it asks the reader to do is to have been wrong.**',
  '**Why nobody does that, and it is not pride.** ⚠ **A reader who reverses a refusal with no new fact has to explain to somebody else why they refused in the first place.** **You have made your request into their problem.**',
  '**Mr Barghouti, who refuses things for a living:** ⚠ **_with a new fact I have something to write in the file; without one the file says changed mind, and I am not writing that about my own decision._** **Four minutes against four weeks**, and the difference is the file.',
  '**How new is new?** ⚠ **Something they could not have known when they refused** — **not something they overlooked.** **_As I mentioned in September_ is the commonest first six words of a failed second letter**, and it is an accusation.',
  '**And if there is genuinely nothing, two honest things, neither of which is writing again.** ⚠ **Wait for a fact, or ask for something smaller.** **A smaller ask is itself a change: it is a different request, and it can be granted without anything being reversed.**',
  '**The shapes.** _Since [month], [fact]._ _[The thing] was withdrawn in November._ _There is now one [X] where there were two._ ⚠ **And the one that loses the reader in six words:** _further to my request of 3 September…_',
  '**Pronunciation.** 🔊 **Track 15.2** **The fact first, and the reference to the refusal afterwards or not at all.** ⚠ **A letter that opens on the past has told the reader in six words what it is**, and they have put it down. **Open with the thing they do not know.**',
  '**Where to look for the fact, because students look in the wrong place.** ⚠ **Not at your own request** — you have been over that — **but at the thing the refusal named.** _On cost_, _on capacity_, _no member of staff is free_: **the fact you want is usually about that thing and not about what you asked for.** **Mrs Shaaban did not find a better argument for a seal check; she found out that one of the two gates had closed.**',
  '**Practise:** One sentence: the new fact, with nothing about the refusal in it. **1** a cost that has gone  **2** a number that has changed  **3** a person who has moved  **4** a case where there is no new fact, said plainly  **5** one that opens on the past, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the refusal and what has happened since. B gives **the first sentence** — the new fact, with nothing about the refusal in it. ⚠ **Two rows on each card have no new fact at all**, and B must say so and name which of the two honest options applies. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the refusal, with its date)_ __________. _(since then)_ __________.'],
  ['B', '**Since __________, __________.**  _(or)_ **There is no new fact** — **wait, or ask for less.**'],
]));
out.push(table(['Card A – the refusal and since', 'Card B – the refusal and since'], [
  ['_Second seal check refused on cost / the two gates have merged._', '_Promise field refused in August / the release has two items fewer._'],
  ['_⚠ Scaffold refused in September / nothing has happened._', '_⚠ Weekly report refused in June / I still think it is needed._'],
  ['_Training refused on numbers / four new staff started in October._', '_A named contact refused / the old address was closed in November._'],
  ['_⚠ Extra day refused in May / I have thought about it a great deal._', '_⚠ The code refused twice / I am going to ask more politely._'],
  ['_Reprint refused / the customer has confirmed the halves go to stock._', '_Second machine refused / the older one failed on 2 December._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each first sentence, and for the four marked ⚠ which honest option B chose. ⚠ **All four of the ⚠ rows describe a change in the writer and not in the world** — _nothing has happened_, _I still think_, _I have thought about it_, _more politely_ — **and that is the finding: a change of feeling is not a new fact, however strong the feeling is.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own first sentence: **the new fact, nothing about the refusal.** ⚠ **Count the words.** **Over twenty-five and there is something about the past in it** — go and find it and take it out.'));
out.push(p('**b**  Swap. Your partner reads only your first sentence and says **what request they think is coming.** ⚠ **If they cannot guess, the fact is not connected to the ask** — and that is a different fault, which 15.3 fixes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim gave the refusal with its date — a second seal check at the Harasta gate, refused on the third of September on cost — and the thing she has found out since: the Harasta run has been merged with the Jaramana one, so there is one gate now and not two. Then her letter has a first sentence and it is eleven words long: since September the two gates have been merged into one. Nothing about the refusal, nothing about the cost, nothing about September. Omar said his second column is empty, that he looked and there is nothing, and then he has the most useful outcome in the room — a second letter with no new fact is the first letter sent again, and what it asks the reader to do is to have been wrong. Dima said which nobody does, and nobody does, and the reason is not pride: a reader who reverses a refusal with no new fact has to explain to somebody else why they refused in the first place, so you have made your request into their problem. Adnan, who refuses things, said he can change his mind on a fact in four minutes and cannot change it on a request in four weeks, and the difference is exactly that — with a new fact he has something to write in the file, and without one the file says changed mind, which he is not writing about his own decision. Bassel asked what to do if you genuinely cannot find a new fact, and there are two honest things and writing again is not one of them: wait for a fact, or ask for something smaller. And Jad asked how new the fact has to be: something they could not have known when they refused, and not something they overlooked — as I mentioned in September is the commonest first six words of a failed second letter, and it is an accusation. Mazen asked about the order, since his letter would start by referring to the earlier one, and the fact goes first and the reference to the refusal afterwards or not at all: a letter that opens further to my request of 3 September has told the reader in six words that this is about the past, and they have put it down. Open with the thing they do not know._'));
out.push(p('**Listener task:** write your partner\'s first sentence and the request you think is coming.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Adnan writes about refusals he has reversed. Answer the questions.'));
out.push(model([
  '**THE ONES I CHANGED MY MIND ABOUT** · A. Barghouti · 9 January · _for the two clerks who draft refusals_',
  '**In nineteen years I have reversed about fourteen refusals.** ⚠ **I have gone back and looked at all of them, and thirteen of the fourteen have the same thing in the first sentence of the letter that reversed them.**',
  '**A fact I did not have when I refused.** Not a better argument. **In no case did anybody persuade me of anything.** ⚠ **In thirteen of fourteen, something had changed between my refusal and their letter**, and the letter told me what it was before it told me anything else.',
  '**What the other thirteen second letters looked like**, and I counted those too — **the ones that did not work.** **Thirty-one of them in the same period.** ⚠ **Twenty-six opened with a reference to the earlier correspondence.** _Further to my letter of…_ **I can tell you exactly what happens when I read those six words: I know what the letter is, I know how it ends, and I read the rest of it looking for where to stop.**',
  '**Why a new fact is not a courtesy but a mechanism.** ⚠ **When I refuse something I write a line in the file saying why.** **To reverse it I have to write a second line.** **With a new fact, the second line writes itself** — _merged into one gate in November, so the cost objection falls._ **Without one, the only line available is _changed mind_**, and I will not write that about my own decision, **because somebody will read the file in two years and it will be the only thing in it.**',
  '**The one of the fourteen that had no new fact.** ⚠ **It asked for a quarter of what the first letter had asked for**, and said so in the second line. **That is a different request**, and granting it reversed nothing. **I have come to think it is the better technique**, because a fact may never arrive and a smaller ask is always available.',
  '**And the thing I would tell the two of you who draft these.** ⚠ **When you refuse, say what would change your mind.** **One line.** _This would be reconsidered if the second gate were closed._ **Of the fourteen reversals, eleven came back from people I had told what to look for** — **and they came back faster and shorter, and three of them came back with the fact and no argument at all.**',
]));
out.push(item('1', 'What do thirteen of his fourteen reversals have in common, and what does he say did not happen in any of them?'));
out.push(item('2', 'What does he say happens when he reads _further to my letter of…_?'));
out.push(item('3', 'What does he tell the two clerks to do when they refuse something, and what was the result?'));
out.push(writers([
  'A page from the person who refuses: **the figure in the first line** → **what the successful ones had in common** → **what the unsuccessful ones looked like, counted** → **why it is a mechanism and not a courtesy** → **the exception** → **and what you would tell the people who draft refusals.**',
  '⚠ **Count both sets.** _Fourteen reversals; thirty-one that failed; twenty-six of those opened on the earlier correspondence._ **A page of this kind lives on its arithmetic**, and a reader who is about to write a second letter will remember twenty-six of thirty-one and nothing else.',
  '**Describe your own reading, honestly and in the present tense.** _I know what the letter is, I know how it ends, and I read the rest looking for where to stop._ ⚠ **That is the most useful thing a refuser can tell a writer**, and it is not available from any other source.',
  '**Give the mechanism and not the feeling.** _To reverse it I have to write a second line in the file._ ⚠ **_Changed mind_ is a sentence nobody writes about their own decision** — **and that explains a refusal\'s stubbornness without anybody having to be proud.**',
  '⚠ And **end on the thing the reader can do**, which here is the opposite of the page\'s subject: **tell people what would change your mind when you refuse them.** _Eleven of fourteen came back from people I had told what to look for._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page from the refuser\'s side (80 words or more).'));
out.push(p('**THE ONES I CHANGED MY MIND ABOUT** · ______________ · ______________   **In ______________ I have reversed about ______ refusals.** ⚠ **______ of the ______ have the same thing in the first sentence.**   **______________.** **Not ______________.** ⚠ **In no case did anybody ______________.**   **What the ones that did not work looked like.** **______ of them.** ⚠ **______ opened with ______________.** **What happens when I read those words: ______________.**   **Why it is a mechanism and not a courtesy.** ⚠ **When I refuse I write ______________. To reverse it I have to ______________.** **Without a new fact the only line available is _"______________"_.**   **The exception.** ⚠ ______________.   **And what I would tell the people who draft these.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sets counted — the ones that worked and the ones that did not',
  'Your own reading described in the present tense',
  'The mechanism, not the feeling',
  'A last paragraph the reader can act on',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentence describing what they do when they read the first six words**, and the room says whether it has ever written those six words.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: both sets counted, your own reading in the present tense, the mechanism, and something the reader can act on.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both sets counted, your own reading in the present tense, the mechanism rather than the feeling, and a last paragraph the reader can act on.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only your first sentence — the new fact — and let the room guess the request.** ⚠ **If nobody can guess, the fact is not connected to the ask**, and about a third of first attempts are not. Then the sentence the cycle ends on, which is Mr Barghouti\'s: **without a new fact the only line available is _changed mind_, and I will not write that about my own decision.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do the thing that takes a week and cannot be done in the lesson: **go and look for one fact about your own refusal that you could not have known at the time.** **If you find none, write _none_ and bring it** — **it is not a failure and about half the room will have one.** ⚠ **And one place to look that students never think of: the refusal itself.** **A refusal often names the thing that was in the way** — _on cost_, _on capacity_, _no member of staff is free_ — **and the fact you are looking for is usually about that thing and not about your request.** **Mrs Shaaban did not find a better argument for a seal check; she found out that one of the two gates had closed.** **15.2 is the reopening**, and it is about the sentences you must not write.'));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  Reopening without reproach'));
out.push(p('**Function:** reopening without reproach   ·   **Grammar:** _I appreciate that … nonetheless_ · no reference to the refusal\'s tone   ·   **Pronunciation:** the concession said at full strength, not swallowed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A says a sentence from a second letter that contains a reproach. ⚠ **B finds the reproach and says what it accuses the reader of.** **Then A says the same thing with the reproach removed and both count the words saved.** **It is usually between four and nine.**'));
out.push(board('As I explained at some length in September, the cost figure was never accurate.', 'I appreciate that the cost of a second gate was the difficulty; there is now one gate.'));
out.push(p('**b**  Which sentence contains a reproach? **1** _I appreciate that the cost was the difficulty._  **2** _As I think I made clear in September…_  **3** _Since November there has been one gate._  **4** _I understand that this was refused on cost; nonetheless the cost has gone._  **5** _I am sure you will recall that I did explain this._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a reproach in a second letter actually costs, and where do they hide?   **A** nothing; readers expect them   **B** **it gives the reader a second thing to answer, and the second thing is easier** — and they hide in **polite phrases** that sound like courtesy   **C** it makes the letter longer'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say she does with a letter containing a reproach?   **2** What does Ms Huda say about _I appreciate that_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  I appreciate that, nonetheless', [
  ['Ms Huda', 'Mr Darwish, read me the sentence you had drafted.'],
  ['Omar', '_As I explained at some length in September, the figure the refusal was based on was never accurate._'],
  ['Ms Huda', '**Two reproaches in one sentence, and I shall take them in order.** ⚠ **_At some length_ says you did not read it.** **_Never accurate_ says you were wrong then and not only now.**'],
  ['Omar', 'I had not seen the second one at all.'],
  ['Ms Huda', '**Almost nobody does, because it is a fact and it is true.** ⚠ **A true thing can still be a reproach** — **the test is not whether it is accurate but whether the reader has to answer it.**'],
  ['Dima', 'And they will answer it.'],
  ['Dima', '⚠ **They will answer the reproach and not the request, because the reproach is the easier of the two.** **I have a folder of replies that defend the original decision at length and do not mention what was asked for.** **Every one of them is a reply to a sentence like Mr Darwish\'s.**'],
  ['Ms Huda', '**Which is the finding and it is practical rather than moral.** ⚠ **A reproach does not offend a professional reader; it gives them a second thing to answer, and the second thing is easier.** **You have provided an exit.**'],
  ['Rim', 'How do you keep the concession without the reproach? Because the cost was wrong.'],
  ['Ms Huda', '**Concede the thing and not the person.** _I appreciate that the cost of a second gate was the difficulty._ ⚠ **That is their reason, stated at full strength, with nobody in it.** **Then _nonetheless_, and then the new fact.**'],
  ['Bassel', 'Why _nonetheless_ and not _but_?'],
  ['Ms Huda', '**_But_ is fine and _however_ is fine.** ⚠ **What matters is that something stands between the concession and the fact**, because a concession followed immediately by a fact reads as a trick. **The word is doing a small piece of honest work: it says _I know this does not dispose of your reason._**'],
  ['Adnan', 'And the ones that hide in politeness?'],
  ['Ms Huda', '⚠ **Those are the dangerous ones.** **_I am sure you will recall_ accuses somebody of forgetting. _As I think I made clear_ accuses them of not reading. _I would have thought_ accuses them of not thinking.** **All three sound like courtesy and all three are charges.**'],
  ['Jad', 'Is there a test?'],
  ['Ms Huda', '**One: put the sentence in the reader\'s mouth and see whether they would need to defend themselves.** ⚠ **If they would, it is a reproach, however it is dressed.**'],
  ['Hiba', 'Is there a kind that is not in the words at all?'],
  ['Ms Huda', '**One, and it is grammatical rather than lexical.** ⚠ **The passive with a date in it.** _It was decided in September that…_ **puts the decision at a distance and puts the reader in it anyway** — **and a reader who has to work out whether they are being referred to has been given something to answer.** **Name them or name nothing.**'],
  ['Mazen', 'And saying the concession aloud? Mine always comes out quickly.'],
  ['Ms Huda', '🔊 **At full strength and at the same speed as the rest.** ⚠ **A concession read quickly is a concession being got out of the way**, and a reader hears that in writing too — **it shows up as brevity.** **If their reason takes nine words to state fairly, give it nine.**'],
]));
out.push(sp());
out.push(box('Language box – reopening without reproach', [
  '**The shape.** _**I appreciate that** [their reason, at full strength, with nobody in it]. **Nonetheless** [the new fact]._ ⚠ **Their reason first, and it must be the real one.**',
  '⚠ **A reproach does not offend a professional reader; it gives them a second thing to answer, and the second thing is easier.** **You have provided an exit** — **and the reply will defend the original decision at length and not mention what you asked for.**',
  '**A true thing can still be a reproach.** ⚠ **The test is not whether it is accurate but whether the reader has to answer it.** **_The figure was never accurate_ is true and says _you were wrong then_**, which is a second subject.',
  '**The dangerous ones hide inside politeness.** ⚠ **_I am sure you will recall_ accuses somebody of forgetting.** **_As I think I made clear_ accuses them of not reading.** **_I would have thought_ accuses them of not thinking.** **All three sound like courtesy and all three are charges.**',
  '**The test, and it is one move.** ⚠ **Put the sentence in the reader\'s mouth and ask whether they would need to defend themselves.** **If they would, it is a reproach, however it is dressed.**',
  '**Concede the thing and not the person.** ⚠ **_I appreciate that the cost of a second gate was the difficulty_ has their reason in it and nobody at all.** **_I appreciate that you were concerned about cost_ has them in it**, and is a half-step towards the other kind.',
  '**Why something must stand between the concession and the fact.** ⚠ **A concession followed immediately by a fact reads as a trick.** **_Nonetheless_, _however_, _but_ — any of them** — **the word says _I know this does not dispose of your reason._**',
  '**Pronunciation.** 🔊 **Track 15.4** **The concession at full strength and at the same speed as the rest.** ⚠ **A concession read quickly is one being got out of the way**, and the written equivalent is brevity: **if their reason takes nine words to state fairly, give it nine.**',
  '**And one reproach that is almost invisible because it is grammatical rather than lexical.** ⚠ **The passive with a date in it.** _It was decided in September that…_ **puts the decision at a distance and puts the reader in it anyway** — **and a reader who has to work out whether they are being referred to has been given something to answer.** **Name them or name nothing:** _I appreciate that the cost was the difficulty_ **has neither of those problems.**',
  '**Practise:** Concede, then _nonetheless_, then the fact. **1** a cost objection  **2** a timing objection  **3** an objection you think was mistaken  **4** one with a hidden reproach, and the repair  **5** one where their reason needs nine words',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the drafted sentence from the card. B finds **the reproach**, says **what it accuses the reader of**, and gives the repaired version. ⚠ **Two rows on each card contain no reproach at all** and B must say so. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the drafted sentence)_ __________.'],
  ['B', 'Reproach: __________. **It accuses them of** __________. **Repaired:** __________.'],
]));
out.push(table(['Card A – the drafted sentence', 'Card B – the drafted sentence'], [
  ['_As I explained at some length in September…_', '_I am sure you will recall that I raised this in June._'],
  ['_⚠ I appreciate that the cost was the difficulty._', '_⚠ Since November there has been one gate._'],
  ['_The figure the refusal was based on was never accurate._', '_I would have thought the merger made this straightforward._'],
  ['_⚠ I understand this was refused on cost; nonetheless the cost has gone._', '_⚠ The second gate closed on 4 November._'],
  ['_As I think I made clear in my earlier letter…_', '_No doubt this was overlooked at the time._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the reproach in each and what it accuses the reader of. ⚠ **Three of the five on each card carry one, and two carry none.** **The hardest to find is _I would have thought_**, which about half the room reads as a mild opinion: **it accuses the reader of not thinking**, and the test settles it — **would they need to defend themselves?**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own concession sentence: **_I appreciate that_ + their reason at full strength + _nonetheless_ + the new fact.** ⚠ **Then put the first half in your reader\'s mouth and ask whether they would need to defend themselves.**'));
out.push(p('**b**  Swap. Your partner reads your concession **as the reader** and says whether anything in it needs answering. ⚠ Then they read it **in nine words or fewer** and you both decide whether it has been got out of the way.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar read the sentence he had drafted: as I explained at some length in September, the figure the refusal was based on was never accurate. Two reproaches in one sentence — at some length says you did not read it, and never accurate says you were wrong then and not only now. He had not seen the second one at all, and almost nobody does, because it is a fact and it is true: a true thing can still be a reproach, and the test is not whether it is accurate but whether the reader has to answer it. Dima said they will answer it — they will answer the reproach and not the request, because the reproach is the easier of the two, and she has a folder of replies that defend the original decision at length and do not mention what was asked for, every one of them a reply to a sentence like his. Which is the finding and it is practical rather than moral: a reproach does not offend a professional reader, it gives them a second thing to answer and the second thing is easier, so you have provided an exit. Rim asked how you keep the concession without the reproach when the cost really was wrong, and you concede the thing and not the person — I appreciate that the cost of a second gate was the difficulty, which is their reason stated at full strength with nobody in it, and then nonetheless, and then the new fact. Bassel asked why nonetheless and not but, and but is fine and however is fine: what matters is that something stands between the concession and the fact, because a concession followed immediately by a fact reads as a trick. And Adnan asked about the ones that hide in politeness, which are the dangerous ones: I am sure you will recall accuses somebody of forgetting, as I think I made clear accuses them of not reading, and I would have thought accuses them of not thinking. All three sound like courtesy and all three are charges. Jad asked whether there is a test, and there is one: put the sentence in the reader\'s mouth and see whether they would need to defend themselves — if they would, it is a reproach, however it is dressed. And Mazen said his concessions always come out quickly, and the instruction is to say them at full strength and at the same speed as the rest, because a concession read quickly is one being got out of the way, and a reader hears that in writing too, where it shows up as brevity._'));
out.push(p('**Listener task:** write your partner\'s concession and whether anything in it needs answering.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima writes about the folder of replies. Answer the questions.'));
out.push(model([
  '**THE FOLDER OF REPLIES THAT ANSWER THE WRONG THING** · D. Khoury · 16 January',
  '**I keep a folder of replies that defend a decision at length and never mention what was asked for.** ⚠ **There are nineteen of them, collected over about four years, and every one is a reply to a sentence I can point at.**',
  '**What the nineteen have in common.** **The letter they are answering contained a reproach.** ⚠ **Not an insult — nothing in any of these would be called rude.** _As I explained at some length. I am sure you will recall. The figure was never accurate._ **Polite sentences, every one, and each of them gives the reader something to answer that is not the request.**',
  '**What the replies look like.** **Long.** ⚠ **The average is about four hundred words and the longest is nine hundred**, and they are almost entirely about why the original decision was correct at the time it was made. **Which it usually was.** **The request appears in none of the nineteen except as a word in the first line.**',
  '**Why I think this happens, and it is not spite.** ⚠ **Two things have arrived on the reader\'s desk and only one of them is about the reader.** **Anybody answers that one.** **It is nearer, it is personal, and — this is the part writers forget — it is the one the reader can win.**',
  '**The request, by contrast, is a decision**, and decisions take time and may need somebody else. ⚠ **So a letter containing both gets the easy half answered within a day and the hard half left**, and the writer concludes that the reader has refused again, **which is not what has happened at all.**',
  '**What I do now with my own second letters, and it takes four minutes.** **I read the draft once, as the reader**, and I mark every sentence they could defend themselves against. ⚠ **In my last three drafts there were two, one and three.** **All six were in sentences I had thought of as courtesy.**',
  '**And the figure that persuaded me.** ⚠ **Of the nineteen, eleven got what they wanted on a third letter** — **a letter with the reproach taken out and nothing else changed.** **Eleven of nineteen, on a redraft that took four minutes**, and the eight that did not are the eight with no new fact in them.',
]));
out.push(item('1', 'What do the nineteen letters she is answering have in common, and how does she describe their tone?'));
out.push(item('2', 'Why does she say a reader answers the reproach rather than the request?'));
out.push(item('3', 'What does she do now, and what happened to eleven of the nineteen?'));
out.push(writers([
  'A page from a reader\'s folder: **what you collect and how many** → **what the letters they answer have in common** → **what the replies look like, measured** → **why it happens, and that it is not spite** → **the distinction that explains it** → **what you now do, with its cost in minutes** → **and the figure that persuaded you.**',
  '⚠ **Protect the letters you are criticising.** _Nothing in any of these would be called rude._ **The page is only useful if the reader recognises their own polite sentence in it**, and a page that attacks rudeness lets every careful writer off.',
  '**Measure the replies.** _An average of about four hundred words, the longest nine hundred, and the request appears in none of them except as a word in the first line._ ⚠ **The length is the evidence**: nobody writes nine hundred words out of spite.',
  '**Give the mechanism in one pair of sentences.** _Two things have arrived and only one is about the reader. It is the one the reader can win._ ⚠ **A request is a decision and a reproach is an argument, and only one of the two can be won by replying.**',
  '⚠ And **end on the figure, not on the advice.** _Eleven of nineteen got what they wanted on a third letter with the reproach taken out and nothing else changed._ **That is four minutes against eleven outcomes**, and no reader needs to be told what to do with it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page from the reader\'s side (80 words or more).'));
out.push(p('**THE FOLDER OF ______________** · ______________ · ______________   **I keep ______________.** ⚠ **There are ______ of them, over about ______________.**   **What they have in common.** ______________. ⚠ **Not ______________ — nothing in any of these would be called ______________.** _"______________"_   **What the replies look like.** ⚠ **The average is about ______ words and the longest is ______**, and they are almost entirely about ______________.   **Why it happens, and it is not spite.** ⚠ **Two things have arrived and only one of them is ______________.** **It is ______________, and it is the one the reader can ______________.**   **What I do now.** ______________, **which takes ______________.** ⚠ **In my last three drafts there were ______, ______ and ______.**   **And the figure that persuaded me.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The letters you criticise protected — nothing rude in any of them',
  'The replies measured, not described',
  'The mechanism, including what the reader can win',
  'A figure at the end, not advice',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the polite sentence they used to think was courtesy**, and the room says what it accuses the reader of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the letters protected, the replies measured, the mechanism with what can be won, and a figure at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the letters protected, the replies measured, the mechanism including what can be won, and a figure rather than advice at the end.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your concession sentence at full strength and at the speed of the rest of the letter.** ⚠ The room listens for the swallow — **a concession said quickly is one being got out of the way**, and in writing the same thing shows as brevity. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **it is nearer, it is personal, and it is the one the reader can win.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do Mrs Khoury\'s four minutes on **a letter you have already sent**: read it as the reader and mark every sentence they could defend themselves against. **Count them.** **15.3 asks for less than you asked for the first time** — **which is the move for everybody whose second column was empty in 15.1.** ⚠ **Bring the count of reproaches from your own sent letter**, and bring the sentence you were proudest of: **in about a third of cases they are the same sentence.**'));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  The smaller ask'));
out.push(p('**Function:** asking for less than you asked for the first time, and saying so   ·   **Grammar:** the reduced ask, named as reduced   ·   **Pronunciation:** the reduction said once, without gratitude in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say your original ask, then **the smallest version of it that would still be worth having.** ⚠ **Your partner asks one question: what does the small one not do that the big one did?** **If the answer is _nothing_, the big one was padded.**'));
out.push(board('I am asking again for the second seal check.', 'I am asking for less than I asked for in September: the seal check on the two consignments over forty cartons, not on all of them.'));
out.push(p('**b**  Which is a smaller ask, named as reduced? **1** _I am asking again._  **2** _I am asking for less than in September: the check on consignments over forty cartons only._  **3** _Perhaps we could look at some sort of compromise._  **4** _I should be grateful if you would reconsider._  **5** _A trial on one gate for three months, rather than both gates permanently._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a smaller ask does that a new fact does, and why must it be named as smaller?   **A** nothing; it is a weaker version of the same letter   **B** **it makes a grant possible without anything being reversed** — and **it must be named, or the reader sees a repeat and stops reading**   **C** it shows willingness to compromise'));
out.push(p('**b**  Listen again. **1** What does Mr Darwish say happened when he did not name the reduction?   **2** What does Ms Huda say about gratitude in front of the ask?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  Less than I asked for', [
  ['Ms Huda', 'Mr Darwish had no new fact. What is the smallest version of your ask that is still worth having?'],
  ['Omar', 'A second engineer at Homs for the three winter months, rather than all year. ⚠ **About a quarter of what I asked for in September.**'],
  ['Ms Huda', '**And what does the quarter not do that the whole did?**'],
  ['Omar', 'It does not cover the summer, and the summer has about a third of the faults. ⚠ **So it buys me two-thirds of the problem for a quarter of the cost**, which I had not worked out until just now.'],
  ['Ms Huda', '**Which is why this cycle comes before the letter and not after it.** ⚠ **A smaller ask is a different request and not a weaker one** — **it can be granted without anything being reversed**, and that is the whole of its power.'],
  ['Dima', 'Because the reader is not going back on anything.'],
  ['Ms Huda', '**Nothing at all.** ⚠ **They refused a second engineer. They are being asked about three winter months, which they have never refused.** **The file line writes itself: _different request, granted._**'],
  ['Omar', 'I did this in October and it failed.'],
  ['Ms Huda', '**Say why, because I think you know.**'],
  ['Omar', '⚠ **I did not say it was smaller.** **I just asked for the three months.** **They read the first line, saw an engineer at Homs, and replied with the September refusal almost word for word.**'],
  ['Ms Huda', '**Which is the second half of the cycle and it costs seven words.** ⚠ **_This is less than I asked for in September._** **Put it in the second line, before the ask itself.** **A reader who is not told sees a repeat and stops reading** — **and they are not being careless: a repeat is what second letters usually are.**'],
  ['Rim', 'Does naming it weaken you?'],
  ['Ms Huda', '⚠ **It is the strongest sentence in the letter**, because it is the one thing the reader was not expecting. **Everybody who writes a second time asks for the same thing or more.** **Asking for less, and saying so, is so rare that it is read twice.**'],
  ['Bassel', 'How much less?'],
  ['Ms Huda', '**Small enough that the reason for the refusal no longer applies.** ⚠ **That is the test and it is not about proportion.** **If they refused on cost, the smaller ask must cost materially less. If they refused on precedent, it must be a trial with an end date.** **A reduction that does not touch their reason is just a smaller version of the same refusal.**'],
  ['Dima', 'Is there a figure to work out before writing it?'],
  ['Ms Huda', '**One, and it changes the sentence.** ⚠ **What proportion of the problem the smaller request still solves.** **Mr Darwish\'s quarter covers the three months that carry two-thirds of the faults** — **so the sentence is not _a quarter of what I asked for_ but _a quarter of the cost and two-thirds of the problem_.** **That is a different letter and it took him three months to work out.**'],
  ['Mazen', 'And saying it? Mine would come out apologetically.'],
  ['Ms Huda', '🔊 **Once, flat, with no gratitude in front of it.** ⚠ _I should be most grateful if you would consider the smaller…_ **puts four seconds of apology in front of the one sentence that was going to work.** **Say it as a fact about the request: _this is less than I asked for in September._**'],
]));
out.push(sp());
out.push(box('Language box – the smaller ask', [
  '**What a smaller ask does that an argument cannot.** ⚠ **It makes a grant possible without anything being reversed.** **They refused a second engineer; they are being asked about three winter months, which they have never refused** — **and the file line writes itself: _different request, granted._**',
  '**It must be named as smaller, and it costs seven words.** ⚠ **_This is less than I asked for in September._** **In the second line, before the ask itself.** **A reader who is not told sees a repeat and stops reading** — **and they are not being careless, because a repeat is what second letters usually are.**',
  '⚠ **Naming it does not weaken you; it is the strongest sentence in the letter**, because it is the one thing the reader was not expecting. **Everybody who writes a second time asks for the same thing or more.** **Asking for less, and saying so, is read twice.**',
  '**How much less: the test is not proportion.** ⚠ **Small enough that the reason for the refusal no longer applies.** **Refused on cost → it must cost materially less. Refused on precedent → a trial with an end date.** **A reduction that does not touch their reason is a smaller version of the same refusal.**',
  '**And work out what the smaller one does not do, before you send it.** ⚠ _It does not cover the summer, and the summer has about a third of the faults._ **If the answer is _nothing_, the original ask was padded** — **which is worth knowing and is not a disaster.**',
  '**The shapes.** _This is less than I asked for in September._ _A trial on one gate for three months, rather than both gates permanently._ _On consignments over forty cartons only._ ⚠ **And the four words that cost you the sentence:** _I should be grateful…_',
  '**Pronunciation.** 🔊 **Track 15.6** **Once, flat, with no gratitude in front of it.** ⚠ **_I should be most grateful if you would consider…_ puts four seconds of apology in front of the one sentence that was going to work.** **Say it as a fact about the request.**',
  '**And one thing to decide before you write it.** ⚠ **Whether you will come back for the rest.** **If you will, do not say so** — **and do not imply the opposite either.** **A smaller ask offered as a foot in the door is detected, and it is detected by the same reader who would have granted it.**',
  '**And one figure to work out before you write, because it changes the ask.** ⚠ **What proportion of the problem the smaller request still solves.** **Mr Darwish\'s quarter-sized request covers the three months that carry two-thirds of the faults** — **so the sentence is not _a quarter of what I asked for_ but _a quarter of the cost and two-thirds of the problem_**, which is a different letter.',
  '**Practise:** Name the reduction, then make it. **1** refused on cost  **2** refused on precedent  **3** refused on staff  **4** one where the reduction does not touch their reason, and say so  **5** one with gratitude in front of it, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the refusal and its stated reason. B makes **a smaller ask that touches that reason**, and names it as smaller. ⚠ **Two rows on each card have a reduction offered that does not touch the reason given**, and B must say so and produce a different one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(refused, because)_ __________.'],
  ['B', '**This is less than I asked for in __________: __________.**  _(and why it touches the reason)_ __________.'],
]));
out.push(table(['Card A – refused, because', 'Card B – refused, because'], [
  ['_A second engineer, on cost._', '_A promise field, on release capacity._'],
  ['_⚠ Refused on precedent; the reduction offered is a lower price._', '_⚠ Refused on staff; the reduction offered is a shorter form._'],
  ['_A seal check at both gates, on staff time._', '_Weekly figures, because the committee meets monthly._'],
  ['_⚠ Refused on cost; the reduction offered is a trial period._', '_⚠ Refused on capacity; the reduction offered is a nicer layout._'],
  ['_A named contact, because nobody is free._', '_A reprint, on margin._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each smaller ask, and whether it touches the stated reason. ⚠ **The four rows marked ⚠ offer reductions that miss** — a lower price against a precedent objection, a trial against a cost objection — **and each is plausible, which is why they are in the exercise.** **The test: would their stated reason still refuse this?**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your smaller ask and the seven words that name it. ⚠ **Then write what the smaller one does not do.** **If you cannot think of anything, write _nothing_ and decide whether to be embarrassed about the first letter.**'));
out.push(p('**b**  Swap. Your partner plays the reader and says whether their stated reason would still refuse it. ⚠ Then they say the ask back to you **with _I should be most grateful_ in front of it**, and you hear what four seconds of apology does to a sentence.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar had no new fact, so Ms Huda asked for the smallest version of his ask that is still worth having: a second engineer at Homs for the three winter months rather than all year, about a quarter of what he asked for in September. Asked what the quarter does not do that the whole did, he said it does not cover the summer, and the summer has about a third of the faults — so it buys two-thirds of the problem for a quarter of the cost, which he had not worked out until just then. Which is why the cycle comes before the letter and not after it: a smaller ask is a different request and not a weaker one, and it can be granted without anything being reversed, which is the whole of its power. Dima said because the reader is not going back on anything, and nothing at all — they refused a second engineer and are being asked about three winter months, which they have never refused, and the file line writes itself: different request, granted. Omar said he did this in October and it failed, and he knows why: he did not say it was smaller. He just asked for the three months, they read the first line, saw an engineer at Homs, and replied with the September refusal almost word for word. Which is the second half of the cycle and it costs seven words — this is less than I asked for in September — in the second line, before the ask itself. A reader who is not told sees a repeat and stops reading, and they are not being careless, because a repeat is what second letters usually are. And Rim asked whether naming it weakens you, and it is the strongest sentence in the letter, because it is the one thing the reader was not expecting: everybody who writes a second time asks for the same thing or more, so asking for less and saying so is rare enough to be read twice. Bassel asked how much less, and small enough that the reason for the refusal no longer applies — refused on cost, it must cost materially less; refused on precedent, it must be a trial with an end date. A reduction that does not touch their reason is just a smaller version of the same refusal. And Mazen said his would come out apologetically, and the instruction is once, flat, with no gratitude in front of it: I should be most grateful if you would consider puts four seconds of apology in front of the one sentence that was going to work._'));
out.push(p('**Listener task:** write your partner\'s smaller ask and what it does not do.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Omar writes about the October letter that failed. Answer the questions.'));
out.push(model([
  '**THE SAME REQUEST, A QUARTER OF THE SIZE** · O. Darwish · 23 January',
  '**In September I asked for a second engineer at Homs and was refused on cost.** ⚠ **In October I asked for three winter months, which is about a quarter of it, and was refused in almost the same words.** **The second refusal was my fault and it took one sentence to cause.**',
  '**What I sent in October.** A letter whose first line was _I am writing about engineering cover at the Homs site_, and whose third paragraph asked for December, January and February. ⚠ **Every word of it true and the request genuinely smaller.**',
  '**What the reply said.** The September refusal, almost verbatim, **with one sentence added: _as set out previously, the cost of additional cover cannot be met this year._** ⚠ **Additional cover.** **They had not read the three months at all** — **and I do not blame them, because nothing in my first two lines told them to.**',
  '**What I had left out.** ⚠ **Seven words.** _This is less than I asked for in September._ **Second line, before the request.** **Without it, a reader sees _Homs_, _engineer_ and _cover_ in the first paragraph and files the letter where the September one went.**',
  '**Why that is reasonable of them and not lazy.** **Second letters are repeats.** ⚠ **That is what they almost always are, and a reader who has refused something and receives another letter about it has a well-founded expectation, which I did nothing to disturb.** **The seven words exist precisely to disturb it.**',
  '**What I also worked out, three months late.** **The winter months carry about two-thirds of the faults.** ⚠ **So the quarter-sized request buys two-thirds of the problem** — **and that sentence should have been in the letter, because it turns a smaller ask into a better one.** **I had the figures in the fault log the whole time and had never put them side by side.**',
  '**And what I shall send in February.** The same three months, **with the seven words in the second line and the two-thirds in the third.** ⚠ **Nothing else changes.** **If it is refused again it will be refused on something, and I shall at least know what.**',
]));
out.push(item('1', 'What was wrong with the October letter, and how did the reply show it?'));
out.push(item('2', 'Why does he say the reader\'s mistake was reasonable?'));
out.push(item('3', 'What did he work out three months late, and what will the February letter change?'));
out.push(writers([
  'A page about a reduction that was not named: **the two asks and the two refusals in the first lines** → **what you sent** → **what the reply said, quoted** → **what you had left out, counted in words** → **why the reader\'s mistake was reasonable** → **what else you worked out late** → **and what the next letter changes.**',
  '⚠ **Quote the phrase in the reply that proves they did not see the reduction.** _As set out previously, the cost of additional cover cannot be met this year._ **_Additional cover_ is the evidence**, and without a quotation the page is an assertion about somebody else\'s reading.',
  '**Count the omission.** _Seven words._ ⚠ **An omission with a number on it is a thing the reader can check against their own drafts**; _I should have been clearer_ is not.',
  '**Defend the reader explicitly.** _Second letters are repeats; that is what they almost always are._ ⚠ **A page that calls the reader careless has explained nothing** — **and the seven words exist precisely because the expectation is well-founded.**',
  '⚠ And **name the thing you knew and had not joined up.** _I had the figures in the fault log the whole time and had never put them side by side._ **That is 10.1 arriving inside a letter**, and it is usually the most useful sentence on the page.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a reduction that was not named (80 words or more).'));
out.push(p('**THE SAME REQUEST, ______________ THE SIZE** · ______________ · ______________   **In ______ I asked for ______________ and was refused on ______________.** ⚠ **In ______ I asked for ______________, which is about ______________, and was refused ______________.**   **What I sent.** ______________. ⚠ **Every word true and the request genuinely smaller.**   **What the reply said.** _"______________"_ ⚠ ______________. **They had not read ______________ at all.**   **What I had left out.** ⚠ **______ words.** _"______________."_   **Why that is reasonable of them.** ⚠ **Second letters are ______________.**   **What I also worked out late.** ⚠ ______________. **I had ______________ the whole time.**   **And what I shall send.** ______________. ⚠ **Nothing else changes.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The phrase from the reply that proves the reduction was not seen',
  'The omission counted in words',
  'The reader defended explicitly',
  'The thing you knew and had not joined up',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the seven words**, and the room says where in their own letter they would go.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the reply quoted, the omission counted, the reader defended, and the thing you had not joined up.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reply quoted, the omission counted in words, the reader defended, and the thing you knew and had not joined up.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your smaller ask twice — once flat and once with _I should be most grateful_ in front of it.** ⚠ The room times both. **The apology costs about four seconds and it is spent on the one sentence that was going to work.** Then the sentence the cycle ends on, which is Mr Darwish\'s: **they had not read the three months at all, and nothing in my first two lines told them to.**'));
out.push(hw('Write the page (80+ words). ⚠ Then write **the seven words into the draft of your own second letter**, in the second line, and read the first three lines as the reader. **Ask whether a person who has refused you once would read past them.** **15.4 gives the reader a way to say yes without reversing themselves** — **which is the other half of what the seven words begin.** ⚠ **And work out the proportion before the next lesson: what share of the problem does your smaller ask still solve?** **If it is most of it, say so in the letter.**'));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  A way to say yes'));
out.push(p('**Function:** giving the reader a way to say yes without reversing themselves   ·   **Grammar:** _if the position has not changed, …; if it has, …_   ·   **Pronunciation:** the two branches given equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A asks B to agree to something B has already refused, **in one sentence.** ⚠ **B says what they would have to admit in order to agree.** **Then A tries again, in a form where B has to admit nothing.** **The second attempt is the cycle.**'));
out.push(board('I am asking you to reconsider the September decision.', 'If the position on cost has not changed, this falls away; if the merger has changed it, three winter months would do.'));
out.push(p('**b**  Which version requires the reader to admit nothing? **1** _I am asking you to reconsider._  **2** _I think the September decision was mistaken._  **3** _If the cost position is unchanged, this falls away; if the merger has changed it, three months would do._  **4** _Surely this is now obvious._  **5** _You may wish to review the earlier decision._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the two-branch sentence does, and what must the first branch be?   **A** it gives the reader an escape; the first branch should be the one you want   **B** **it lets the reader agree without the earlier decision ever being wrong** — and **the first branch must be the one where you get nothing**   **C** it is a politeness formula with no effect'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say happens when the first branch is the one the writer wants?   **2** What does Ms Huda say about the word _reconsider_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  If it has not changed', [
  ['Ms Huda', 'Mrs Sweidan. Ask me to agree to something I have refused, in one sentence.'],
  ['Lubna', 'I am asking you to reconsider the refusal of the scaffold.'],
  ['Ms Huda', '**And what do I have to admit in order to say yes?**'],
  ['Lubna', '_(a pause)_ ⚠ **That the refusal was wrong.** **There is no other way to read it.**'],
  ['Ms Huda', '**So the sentence asks me for two things and you only want one of them.** ⚠ **It asks me to grant the scaffold and to concede that I should have granted it in September.** **The second is the expensive one and it is the one I shall refuse.**'],
  ['Dima', 'And the shape that avoids it?'],
  ['Ms Huda', '**Two branches.** _If the position on the joint has not changed, this falls away. If the November survey has changed it, a scaffold on the front elevation for six weeks would be enough._ ⚠ **Nothing in that requires September to have been wrong.**'],
  ['Omar', 'It gives them a way out.'],
  ['Ms Huda', '**It gives them a way _in_, which is different.** ⚠ **The first branch is not an escape; it is the sentence that makes the second branch safe.** **A reader who is offered only the second branch is being asked to agree under pressure; a reader offered both is choosing.**'],
  ['Rim', 'Does the order matter?'],
  ['Dima', '⚠ **Entirely.** **I have had both versions and they read as different letters.** **When the first branch is the one the writer wants, the second is decoration** — **you can hear the writer holding their breath** — **and I answer the one they want and refuse it.**'],
  ['Ms Huda', '**Which is the rule: the first branch is the one where you get nothing.** ⚠ **Say it first, say it properly, and mean it** — **because you have to be willing to receive that answer, and a reader can tell within a line whether you are.**'],
  ['Bassel', 'What makes it detectable?'],
  ['Ms Huda', '**Length, usually.** ⚠ **The branch a writer does not want is nine words and the branch they want is thirty.** **Give them the same weight.** **If the first branch is a quarter of the length of the second, you have written a request with a disguise on it.**'],
  ['Adnan', 'And the word _reconsider_?'],
  ['Ms Huda', '⚠ **It has the reversal built into it.** **_Reconsider_ means _look again at a decision you took_**, which is exactly the thing you are trying not to ask for. **Say what has changed and ask about the new situation**; **the word is never needed and it costs you the sentence.**'],
  ['Hiba', 'What happens if they answer neither branch?'],
  ['Ms Huda', '**That is the commonest outcome and it is the shape working.** ⚠ **Mrs Sweidan got back a request for the November measurements, which is not a branch at all, and then the scaffold.** **Nobody ever said whether the position had changed** — **and the two branches are what made it unnecessary for anybody to say so.** **They remove the question rather than answering it.**'],
  ['Jad', 'And reading the two branches aloud?'],
  ['Ms Huda', '🔊 **Equal weight, equal speed, and no lift on the second one.** ⚠ **The lift is the tell.** _If the position has not changed, this falls away…_ **said flatly, then the second branch at exactly the same pitch** — **and a reader who hears no preference reads both.**'],
]));
out.push(sp());
out.push(box('Language box – a way to say yes', [
  '**The problem with the direct ask.** ⚠ _I am asking you to reconsider._ **It asks for two things: the thing itself, and a concession that the first decision was wrong.** **The second is the expensive one and it is the one that gets refused.**',
  '**The shape.** _**If** [their position] **has not changed**, this falls away. **If** [the new fact] **has changed it**, [the smaller ask] would be enough._ ⚠ **Nothing in it requires the first decision to have been wrong.**',
  '⚠ **It gives the reader a way _in_, not a way out.** **The first branch is not an escape; it is the sentence that makes the second branch safe.** **A reader offered only the second is being asked to agree under pressure; a reader offered both is choosing.**',
  '**The first branch is the one where you get nothing, and it goes first.** ⚠ **Say it properly and mean it** — **you have to be willing to receive that answer, and a reader can tell within a line whether you are.**',
  '**What makes insincerity detectable: length.** ⚠ **The branch a writer does not want is nine words and the branch they want is thirty.** **Give them the same weight.** **A first branch a quarter the length of the second is a request with a disguise on it.**',
  '⚠ **Never use the word _reconsider_.** **It has the reversal built into it** — **it means _look again at a decision you took_**, which is precisely what you are trying not to ask for. **Say what has changed and ask about the new situation.**',
  '**The shapes.** _If X has not changed, this falls away._ _If Y has changed it, Z would be enough._ _On the first of those, I shall not write again._ ⚠ **And the ones to avoid:** _reconsider_ · _review the earlier decision_ · _surely_ · _you may wish to_.',
  '**Pronunciation.** 🔊 **Track 15.8** **Equal weight, equal speed, no lift on the second branch.** ⚠ **The lift is the tell.** **A reader who hears no preference reads both branches; one who hears a preference reads only the second and answers it.**',
  '**One thing the two branches do that nothing else in the letter does.** ⚠ **They make it possible for the reader to answer neither.** **Mrs Sweidan got back a request for the November measurements** — **which is not a branch at all** — **and then the scaffold.** **Nobody ever said whether the position had changed**, and that is the shape working: **it removed the question rather than answering it.**',
  '**Practise:** Two branches, the losing one first and the same length. **1** a cost position  **2** a capacity position  **3** a precedent position  **4** one where the two branches are nine and thirty words, and the repair  **5** one that uses _reconsider_, and the repair',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the stated reason for the refusal. B gives **the two-branch sentence**, losing branch first, **both branches the same length.** ⚠ **Two rows on each card are drafts that already exist and are faulty** — one uses _reconsider_, one has branches of nine and thirty words — **and B must repair them.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(refused, because)_ __________.'],
  ['B', '**If __________ has not changed, this falls away. If __________ has changed it, __________ would be enough.**'],
]));
out.push(table(['Card A – refused, because', 'Card B – refused, because'], [
  ['_Cost, in September._', '_Release capacity, in August._'],
  ['_⚠ Draft: "I am asking you to reconsider the September decision."_', '_⚠ Draft: branches of nine and thirty-one words._'],
  ['_Staff time, in June._', '_Precedent, in May._'],
  ['_⚠ Draft: "you may wish to review the earlier decision."_', '_⚠ Draft: "surely the merger changes this."_'],
  ['_Margin, on the reprint._', '_Nobody free, on the named contact._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each two-branch sentence, with the word count of both branches. ⚠ **The four rows marked ⚠ are faulty drafts** and the faults are different: **_reconsider_ and _review the earlier decision_ both ask for a reversal in one word; _surely_ asks for agreement by assertion; and the nine-and-thirty draft is sincere and sounds otherwise.** **The last is the one to dwell on.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your own two branches. ⚠ **Count the words in each.** **If the difference is more than about five, make the shorter one longer** — **not by padding, but by stating their position properly.**'));
out.push(p('**b**  Swap. Your partner reads both branches aloud **with a lift on the second**, and then **flat.** ⚠ You say which version you had written. **Most people have written the first and heard the second in their head.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna was asked to put a request in one sentence and said she was asking for the refusal of the scaffold to be reconsidered. Asked what Ms Huda would have to admit in order to say yes, she said after a pause: that the refusal was wrong, and there is no other way to read it. So the sentence asks for two things and she only wants one of them — it asks for the scaffold and for a concession that it should have been granted in September, and the second is the expensive one and is the one that will be refused. Dima asked about the shape that avoids it, and it is two branches: if the position on the joint has not changed, this falls away; if the November survey has changed it, a scaffold on the front elevation for six weeks would be enough. Nothing in that requires September to have been wrong. Omar said it gives them a way out, and it gives them a way in, which is different: the first branch is not an escape but the sentence that makes the second branch safe, and a reader offered only the second is being asked to agree under pressure while a reader offered both is choosing. Rim asked whether the order matters, and Dima said entirely — she has had both versions and they read as different letters. When the first branch is the one the writer wants, the second is decoration, you can hear the writer holding their breath, and she answers the one they want and refuses it. Which is the rule: the first branch is the one where you get nothing, said first, said properly, and meant — because you have to be willing to receive that answer, and a reader can tell within a line whether you are. Bassel asked what makes insincerity detectable, and length, usually: the branch a writer does not want is nine words and the branch they want is thirty, so give them the same weight. Adnan asked about the word reconsider, which has the reversal built into it — it means look again at a decision you took, which is exactly the thing you are trying not to ask for, so say what has changed and ask about the new situation. And Jad asked about reading the two branches aloud: equal weight, equal speed, and no lift on the second one, because the lift is the tell._'));
out.push(p('**Listener task:** write your partner\'s two branches and the word count of each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna writes about the two versions. Answer the questions.'));
out.push(model([
  '**THE SAME LETTER, TWO WAYS** · L. Sweidan · 30 January',
  '**I wrote two versions of the same letter about the scaffold and sent the second.** ⚠ **The difference between them is one sentence and about forty words, and I think the first would have been refused.**',
  '**Version one, the sentence that did the work.** _In the light of the November survey I am asking you to reconsider the September decision._ **Nineteen words**, and I was pleased with it for about a day.',
  '**What is wrong with it, which took me a week to see.** ⚠ **It asks for two things.** **The scaffold, and an admission that September was a mistake.** **I only want the first**, and I had packed the second into a single word — **_reconsider_ means _look again at a decision you took_** — **and the second is the one that would have been answered.**',
  '**Version two.** _If the position on the 1974 joint has not changed since September, this falls away and I shall not write about it again. If the November survey has changed it, a scaffold on the front elevation for six weeks would be enough._ ⚠ **Forty-one words, and twenty of them are the branch where I get nothing.**',
  '**Why the first branch had to be that long.** **Because I had to mean it.** ⚠ **My first attempt made it eight words** — _if nothing has changed, very well_ — **and reading it back I could hear myself holding my breath.** **A reader hears that too and answers the branch you want.**',
  '**What came back, and it is not what I expected.** **A request for the November measurements**, which is neither branch. ⚠ **And then the scaffold, for four weeks rather than six.** **Nobody ever said whether the position had changed** — **and that is the point of the two branches: they made it unnecessary for anybody to say so.**',
  '**And the sentence I shall keep.** ⚠ **_I shall not write about it again._** **It is in the branch where I get nothing and it is the reason the branch is believed** — **because it costs me something to put there**, and a first branch that costs the writer nothing is not a branch at all.',
]));
out.push(item('1', 'What two things did the first version ask for, and which word carried the second?'));
out.push(item('2', 'Why did the first branch of version two have to be twenty words?'));
out.push(item('3', 'What came back, and what does she say the two branches made unnecessary?'));
out.push(writers([
  'A page comparing two versions: **the difference, in sentences and words, in the first line** → **version one quoted** → **what is wrong with it** → **version two quoted in full** → **why the losing branch had to be that long** → **what came back** → **and the sentence you would keep.**',
  '⚠ **Quote both versions in full.** **A page about two sentences that paraphrases either of them has lost its subject**, and the reader cannot do the comparison the page is for.',
  '**Find the word that carried the hidden request.** _"Reconsider" means "look again at a decision you took"._ ⚠ **One word carrying an entire second request is the most useful kind of finding**, because it is portable: every reader has that word somewhere in a draft.',
  '**Say why the losing branch is long, and admit the short first attempt.** _My first attempt made it eight words, and reading it back I could hear myself holding my breath._ ⚠ **The admission is the evidence that you know what sincerity sounds like.**',
  '⚠ And **name what the two branches made unnecessary**, which is usually the surprise: _nobody ever said whether the position had changed._ **The shape works by removing a question, not by answering one**, and most writers expect the opposite.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page comparing two versions (80 words or more).'));
out.push(p('**THE SAME LETTER, TWO WAYS** · ______________ · ______________   **I wrote two versions and sent the second.** ⚠ **The difference is ______________ and about ______ words.**   **Version one.** _"______________"_ **______ words.**   **What is wrong with it.** ⚠ **It asks for two things: ______________ and ______________.** **I only want the first**, and I had packed the second into ______________.   **Version two.** _"______________"_ ⚠ **______ words, and ______ of them are the branch where I get nothing.**   **Why that branch had to be that long.** ⚠ **Because ______________.** **My first attempt made it ______ words and I could hear ______________.**   **What came back.** ______________. ⚠ **Nobody ever said ______________.**   **And the sentence I shall keep.** ⚠ _"______________."_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both versions quoted in full, with word counts',
  'The word that carried the hidden request',
  'The short first attempt admitted',
  'What the two branches made unnecessary',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their losing branch**, and the room says whether they believe the writer would accept it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: both versions quoted with counts, the word that carried the second request, the short first attempt admitted, and what the branches made unnecessary.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both versions quoted with counts, the word carrying the hidden request, the short first attempt admitted, and what the branches made unnecessary.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the two branches flat, then with a lift on the second, and let the room say which one you wrote.** ⚠ **Most people have written the flat version and heard the lifted one in their own head**, which is why it survives into the letter as length. Then the sentence the cycle ends on, which is Mrs Sweidan\'s: **a first branch that costs the writer nothing is not a branch at all.**'));
out.push(hw('Write the page (80+ words). ⚠ Then take your own two branches and **count the words in each**, and put something in the losing branch that costs you — **a date you will stop, a thing you will not ask for again.** **15.5 is that date**, and it is the last move before the letter is written. ⚠ **Bring the number of times you have already asked.** **Nobody knows it without counting**, and the count is the thing your reader has been keeping without being asked to. **Bring the dates as well as the number**, because the gaps between them say something the number does not: **four letters in eleven months and four letters in five weeks are different correspondences**, and only one of them needs a stopping date in the next letter.'));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  The date you stop'));
out.push(p('**Function:** setting the date on which you will stop asking   ·   **Grammar:** the self-imposed limit, in writing   ·   **Pronunciation:** the date said as information, not as a threat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. Say **how many times you have asked for the thing you brought**, and **how many more times you intend to ask.** ⚠ **Almost nobody has an answer to the second**, and that is the cycle. **Then say a date after which you will stop.**'));
out.push(board('I shall keep raising it until something happens.', 'If the answer in March is still no, I shall not raise it again this year.'));
out.push(p('**b**  Which is a self-imposed limit? **1** _I shall keep asking._  **2** _If the answer in March is still no, I shall not raise it again this year._  **3** _I hope you will give this your urgent attention._  **4** _This is my final request._  **5** _I shall not write about this again after the end of the quarter._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a stated stopping date does for the reader, and how is it different from a final demand?   **A** nothing; it is a threat in polite form   **B** **it tells the reader the correspondence has an end, which is the thing they are weighing** — and a final demand says _or else_, while a stopping date says _or nothing_   **C** it gives you an excuse to stop'));
out.push(p('**b**  Listen again. **1** What does Mr Hariri say he realised about his own letters?   **2** What does Ms Huda say you must do if the date passes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  After March, nothing', [
  ['Ms Huda', 'Mr Hariri. How many times have you asked, and how many more do you intend to ask?'],
  ['Mazen', 'Four times. ⚠ **And I have no idea.** **I had never thought of it as a number.**'],
  ['Ms Huda', '**Neither has your reader, and that is the problem this cycle solves.** ⚠ **When somebody has been asked four times with no end in sight, every reply is also a decision about the fifth, sixth and seventh letters** — **and refusing is the only way they know to stop the series.**'],
  ['Mazen', '_(a pause)_ ⚠ **So part of what they are refusing is the correspondence.**'],
  ['Ms Huda', '**Part of what they are refusing is the correspondence, and that part you can remove for nothing.** _If the answer in March is still no, I shall not raise it again this year._'],
  ['Dima', 'It reads as a concession and it costs you nothing you were going to get.'],
  ['Ms Huda', '**It costs you nothing you were going to get, and it is not a concession: it is information.** ⚠ **The reader is weighing a decision and a series, and you have just told them the series is one letter long.**'],
  ['Omar', 'How is that not a threat? _This is my final request_ is a threat.'],
  ['Ms Huda', '**It is, and the difference is exactly one implication.** ⚠ **A final demand says _or else_ — something follows the refusal.** **A stopping date says _or nothing_ — nothing follows it.** **The second is the one that works, and it works because it is true.**'],
  ['Rim', 'What if the date passes and you still want it?'],
  ['Ms Huda', '**Then you do not write.** ⚠ **For as long as you said.** **A stopping date that is not kept is worse than none at all** — **it is the only sentence in your letter that the reader can check, and if you break it they have learned something about every other sentence you have ever sent them.**'],
  ['Bassel', 'That seems a heavy price for one sentence.'],
  ['Ms Huda', '**It is the price of the sentence working, and it is why most people should not write it.** ⚠ **Write it only if you will keep it.** **If you know you will ask again in May, do not write _not this year_** — **write _not before May_, which is also a date and is true.**'],
  ['Adnan', 'I have had both kinds. ⚠ **The ones who kept it, I remember, and when they come back the following year I read the letter properly.** **The ones who did not, I read the first line of.**'],
  ['Dima', 'Does it do anything for the writer?'],
  ['Ms Huda', '⚠ **It ends the thing.** **A request with no stopping date sits in your own week for as long as it is open**, and most people are carrying three or four of them without having counted. **Mr Hariri carried his for eleven months.** **A date closes it for the writer whichever way the answer goes**, and that is worth something on its own.'],
  ['Jad', 'And saying the date aloud?'],
  ['Ms Huda', '🔊 **As information, at the same pitch as the sentence before it, and with nothing after it.** ⚠ **The temptation is to soften it** — _though of course if anything changes…_ — **which takes the date away again.** **Say the date and stop.**'],
]));
out.push(sp());
out.push(box('Language box – the date you stop', [
  '**What a reader is actually weighing.** ⚠ **Not one decision but a series.** **When somebody has been asked four times with no end in sight, every reply is also a decision about the fifth, sixth and seventh letters** — **and refusing is the only way they know to stop the series.**',
  '⚠ **Part of what they are refusing is the correspondence, and that part you can remove for nothing.** _If the answer in March is still no, I shall not raise it again this year._',
  '**It is not a concession; it is information.** ⚠ **The reader is weighing a decision and a series, and you have told them the series is one letter long.**',
  '**How it differs from a final demand, and the difference is one implication.** ⚠ **_This is my final request_ says _or else_ — something follows the refusal.** **A stopping date says _or nothing_ — nothing follows it.** **The second works, and it works because it is true.**',
  '**If the date passes and you still want it: you do not write.** ⚠ **For as long as you said.** **A stopping date that is not kept is worse than none at all** — **it is the only sentence in the letter the reader can check**, and breaking it teaches them something about every other sentence you have sent.',
  '⚠ **So write it only if you will keep it.** **If you know you will ask again in May, do not write _not this year_** — **write _not before May_, which is also a date and is true.** **Mr Barghouti, from the other side: the ones who kept it get read properly the following year; the ones who did not get the first line read.**',
  '**Pronunciation.** 🔊 **Track 15.10** **As information, at the same pitch as the sentence before it, and with nothing after it.** ⚠ **The temptation is to soften it** — _though of course if anything changes…_ — **which takes the date away again.** **Say the date and stop.**',
  '**And where it goes in the letter.** ⚠ **In the losing branch of 15.4, not at the end.** _If the position has not changed, this falls away **and I shall not raise it again this year**._ **At the end it reads as a parting shot; inside the losing branch it is what makes that branch cost something.**',
  '**And one thing the date does for you rather than for them.** ⚠ **It ends the thing.** **A request with no stopping date sits in your own week for as long as it is open**, and most people carry three or four of them. **Mr Hariri carried his for eleven months** — **and a date closes it for the writer whichever way the answer goes**, which is worth something on its own.',
  '**Practise:** Set a date and stop. **1** _not again this year_  **2** _not before May_  **3** one inside the losing branch  **4** one you would not keep, and say so  **5** one softened by a clause afterwards, so that you hear it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the history from the card — **how many times asked, over what period.** B sets **a stopping date they would actually keep**, and says where in the letter it goes. ⚠ **Two rows on each card describe somebody who will certainly ask again**, and B must choose the nearer date rather than the braver one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the history)_ Asked __________ times over __________.'],
  ['B', '**If the answer in __________ is still no, I shall not __________ .** **It goes __________.**'],
]));
out.push(table(['Card A – the history', 'Card B – the history'], [
  ['_Four times in eleven months._', '_Twice in a year._'],
  ['_⚠ Three times; the budget is reset in May and I shall ask again._', '_⚠ Twice; the post is readvertised in April and I shall apply._'],
  ['_Once, eight months ago._', '_Five times in two years._'],
  ['_⚠ Six times; this matters more to me than anything else at work._', '_⚠ Four times; I have told two colleagues I will not let it drop._'],
  ['_Twice, both in writing, both refused on cost._', '_Three times, the last one answered in nine days._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each stopping date and where it goes. ⚠ **The four rows marked ⚠ all describe somebody who will ask again** — a budget reset, a readvertisement, a strong feeling, a promise to colleagues — **and the right answer in all four is a near date, not a brave one.** _Not before May_ **is a stopping date; _not this year_ will be broken in May.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write your stopping date into the losing branch of your two-branch sentence. ⚠ **Then answer one question in writing: will you keep it?** **If the honest answer is no, move the date nearer until the answer is yes.**'));
out.push(p('**b**  Swap. Your partner reads your branch and says whether they believe the date. ⚠ Then they add _though of course if anything changes…_ to the end of it, and you both decide what is left of the sentence.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mazen was asked how many times he had asked and how many more he intended to ask: four times, and he had no idea, because he had never thought of it as a number. Neither has his reader, and that is the problem the cycle solves — when somebody has been asked four times with no end in sight, every reply is also a decision about the fifth, sixth and seventh letters, and refusing is the only way they know to stop the series. Mazen said so part of what they are refusing is the correspondence, and part of it is, and that part can be removed for nothing: if the answer in March is still no, I shall not raise it again this year. Dima said it reads as a concession and costs nothing you were going to get, and it costs nothing and it is not a concession but information — the reader is weighing a decision and a series, and you have just told them the series is one letter long. Omar asked how that is not a threat, since this is my final request is a threat, and it is, and the difference is exactly one implication: a final demand says or else, and something follows the refusal, while a stopping date says or nothing, and nothing follows it. The second works and it works because it is true. Rim asked what happens if the date passes and you still want it, and then you do not write, for as long as you said — a stopping date that is not kept is worse than none at all, because it is the only sentence in the letter the reader can check. And Bassel said that seems a heavy price for one sentence, and it is the price of the sentence working, and it is why most people should not write it: write it only if you will keep it, and if you know you will ask again in May, do not write not this year but not before May, which is also a date and is true. Adnan, who has had both kinds, said the ones who kept it he remembers, and when they come back the following year he reads the letter properly, while the ones who did not get the first line read. And Jad asked about saying the date aloud: as information, at the same pitch as the sentence before it, and with nothing after it — the temptation is to soften it with though of course if anything changes, which takes the date away again._'));
out.push(p('**Listener task:** write your partner\'s stopping date and whether you believe it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes about the fifth letter. Answer the questions.'));
out.push(model([
  '**THE FIFTH LETTER, AND WHY IT WAS THE FIRST ONE READ** · M. Hariri · 6 February',
  '**I wrote to the distributor four times between March and November and the fifth letter is the one that was answered properly.** ⚠ **The fifth was shorter than any of the other four and asked for less, and it contained one sentence none of them had.**',
  '**What I had never worked out.** **That the man answering had been asked the same thing four times with no end in sight.** ⚠ **Every reply he wrote was also a decision about the next letter** — **and the only way he had of stopping the series was to refuse again, firmly enough that I would give up.**',
  '**Which means part of what he was refusing was me**, and not the batch numbers. **I do not say that with any resentment: it is simply what an open-ended correspondence does**, and I had created it by writing four times without ever saying how many there would be.',
  '**The sentence I added.** _If the position on batch replacement has not changed, this falls away and I shall not raise it again before the next annual review._ ⚠ **Twenty-three words, and the whole of their work is in the last nine.**',
  '**Why I chose the annual review and not _this year_.** **Because I knew I would ask again at the review.** ⚠ **_Not this year_ would have been a better sentence and a false one**, and the only sentence in a letter a reader can actually check is the one about what you will do next. **If I break that, everything else I have written to him is worth less.**',
  '**What came back in nine days.** **Not the batch replacement.** ⚠ **A standing arrangement for returns over four units**, which is a different thing and is about two-thirds of what I wanted — **and a line I did not expect: _it is helpful to know where this ends._**',
  '**And what I think that line meant.** ⚠ **That he could decide one question instead of a series.** **Four letters had made the decision bigger each time, and one sentence made it small enough to say yes to.**',
]));
out.push(item('1', 'What had he never worked out about the man answering his letters?'));
out.push(item('2', 'Why did he choose the annual review rather than _this year_?'));
out.push(item('3', 'What came back, and what does he think the line about the end meant?'));
out.push(writers([
  'A page about a correspondence with an end put on it: **the count and which letter was answered** → **what you had never worked out about the reader** → **what that means about the refusals** → **the sentence you added, quoted and counted** → **why you chose that date and not a braver one** → **what came back** → **and what you think it meant.**',
  '⚠ **Refuse the resentment explicitly.** _I do not say that with any resentment: it is simply what an open-ended correspondence does._ **A page that discovers the reader was refusing the writer and then complains about it has wasted the discovery.**',
  '**Quote the added sentence and say where its work is.** _Twenty-three words, and the whole of their work is in the last nine._ ⚠ **Locating the working part inside your own sentence** is what lets a reader copy it rather than admire it.',
  '**Defend the near date against the brave one.** _"Not this year" would have been a better sentence and a false one._ ⚠ **And give the reason that makes it general:** _the only sentence a reader can check is the one about what you will do next._',
  '⚠ And **quote what came back, including anything you did not expect.** _It is helpful to know where this ends._ **A line like that is the evidence for the whole cycle**, and it is worth more than any amount of explanation of why the technique works.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about putting an end on a correspondence (80 words or more).'));
out.push(p('**THE ______ LETTER, AND WHY IT WAS THE FIRST ONE ______________** · ______________ · ______________   **I wrote ______ times between ______ and ______, and the ______ is the one that ______________.** ⚠ **It was ______________ and contained one sentence none of them had.**   **What I had never worked out.** ⚠ **That ______________.** **Every reply was also a decision about ______________**, and the only way to stop the series was ______________.   **Which means part of what they were refusing was ______________.** ⚠ **I do not say that with resentment: ______________.**   **The sentence I added.** _"______________"_ ⚠ **______ words, and the work is in the last ______.**   **Why I chose ______________ and not ______________.** ⚠ **Because ______________.**   **What came back.** ______________. ⚠ **And a line I did not expect: _"______________."_**   **And what I think it meant.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The count, and which letter was answered',
  'The resentment refused explicitly',
  'The added sentence quoted, with its working part located',
  'The near date defended against the brave one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their stopping sentence**, and the room says whether it is one the writer will keep.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the count first, the resentment refused, the sentence quoted with its working part, and what came back.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the count and the letter answered, the resentment refused, the added sentence with its working part located, and the near date defended.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say your stopping date as information, with nothing after it, and let the room count the silence.** ⚠ Then say it again with _though of course if anything changes…_ on the end, **and the room says what is left of the date.** Nothing is left. Then the sentence the cycle ends on, which is Mr Hariri\'s: **one sentence made the decision small enough to say yes to.**'));
out.push(hw('Write the page (80+ words). ⚠ Then answer one question about your own stopping date, in writing: **will you keep it?** **If the honest answer is no, move the date nearer until the answer is yes**, and notice how much nearer it has to come. **15.6 writes the whole letter** — **the new fact, the concession, the smaller ask, the two branches and the date, in 180 to 220 words.**'));

// ===================== 15.6 =====================
out.push(h2('15.6  The second letter'));
out.push(p('**Function:** writing the second letter   ·   **Grammar:** 180–220 words · the new fact, the smaller ask, the exit   ·   **Pronunciation:** reading the letter aloud in the reader\'s voice, which is where the reproach is heard'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five moves of this unit in order.** ⚠ Then say **which of the five you have already left out of your own draft.** **Everybody has left out one and it is usually the fourth or the fifth.**'));
out.push(board('I am writing to follow up my earlier request.', 'Since November the two gates have been merged into one.'));
out.push(p('**b**  Which order is right? **1** _ask · fact · concession · branches · date_  **2** _fact · concession · smaller ask · branches · date_  **3** _concession · fact · date · ask_  **4** _date · fact · ask · concession_  **5** _fact · concession · branches · smaller ask · date_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the whole letter must do in its first two lines, and what is the commonest thing students leave in?   **A** establish the history; students leave out the date   **B** **give the new fact and nothing about the past** — and the commonest thing left in is **a sentence of history that feels like courtesy**   **C** apologise for writing again'));
out.push(p('**b**  Listen again. **1** What does Mrs Nasser say about reading the letter in the reader\'s voice?   **2** What does Ms Huda say about the length?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  The whole letter', [
  ['Ms Huda', 'Five moves. Mrs Shaaban, in order.'],
  ['Rim', 'The new fact. The concession, with _nonetheless_. The smaller ask, named as smaller. The two branches. And the date I stop.'],
  ['Ms Huda', '**And in the letter the date lives inside the losing branch, so it is five moves and four paragraphs.** ⚠ **Which of the five is missing from your draft?**'],
  ['Rim', 'The date. ⚠ **I wrote everything else and then stopped**, and I think I stopped because the date is the only one that costs me anything.'],
  ['Ms Huda', '**That is why it is the fifth and not the first.** ⚠ **Four of the five moves cost you nothing** — **they are about arrangement.** **The fifth is a real concession and most drafts end at the fourth.**'],
  ['Hiba', 'Mine is missing the concession, and I had thought it was there.'],
  ['Ms Huda', '**Read me what you have.**'],
  ['Hiba', '_I understand the position taken in September._'],
  ['Ms Huda', '⚠ **That is a reference to a position, not a concession to it.** **A concession states their reason at full strength in your own words** — _I appreciate that a second observer on a first-year lesson is a cost you cannot repeat across eleven staff._ **Theirs, properly put.**'],
  ['Omar', 'How long is the whole thing?'],
  ['Ms Huda', '**A hundred and eighty to two hundred and twenty words**, which is the examination band and is also right. ⚠ **A second letter over three hundred words has history in it somewhere**, and history is the thing the reader already has.'],
  ['Dima', 'And the first two lines?'],
  ['Ms Huda', '**The new fact and nothing else.** ⚠ **No greeting beyond the necessary one, no _I hope you are well_, no _further to_.** **The reader decides in two lines whether this is a repeat**, and everything you can do about that decision happens there.'],
  ['Hiba', '⚠ **May I say the thing I found hardest?** **Reading it in the reader\'s voice.** **I read my own drafts in my voice and they sound reasonable** — **and in his voice the third sentence is a complaint.** **Same words.**'],
  ['Ms Huda', '**That is the best practical instruction in this cycle and it should be the last thing anybody does before sending.** ⚠ **Read it aloud as the person who refused you.** **The reproach is inaudible in your own voice and obvious in theirs.**'],
  ['Rim', 'Is there a sentence everybody writes that should go?'],
  ['Ms Huda', '**One, and it is meant kindly.** ⚠ _I realise you are very busy._ **It does three things: it tells the reader you expect to be a nuisance, it invites them to agree, and it spends a line of a two-hundred-word letter on nothing.** **Cut it, and cut _I shall keep this brief_ with it** — **which is four words spent announcing an intention the reader can check in two seconds.**'],
  ['Mazen', 'And the ending?'],
  ['Ms Huda', '🔊 **Stop at the branches.** ⚠ **No _I look forward to hearing from you_ and no _thank you for your time_.** **The letter ends on a sentence that gives them something to decide** — **and anything after it is the writer being nervous in public.**'],
]));
out.push(sp());
out.push(box('Language box – the second letter', [
  '**Five moves, four paragraphs, 180–220 words.** **1** The new fact, in the first two lines. **2** The concession, with _nonetheless_. **3** The smaller ask, named as smaller. ⚠ **4** The two branches, losing one first. **5** The stopping date — **inside the losing branch.**',
  '⚠ **Four of the five cost you nothing; they are about arrangement.** **The fifth is a real concession, and most drafts end at the fourth** — **which is why the date is taught last and written first.**',
  '**A reference to a position is not a concession to it.** ⚠ _I understand the position taken in September_ **names nothing.** **A concession states their reason at full strength in your own words**: _I appreciate that a second observer on a first-year lesson is a cost you cannot repeat across eleven staff._',
  '**The first two lines: the new fact and nothing else.** ⚠ **No _further to_, no _I hope you are well_, no history.** **The reader decides in two lines whether this is a repeat**, and everything you can do about that decision happens there.',
  '**Length.** **180–220 words.** ⚠ **A second letter over three hundred words has history in it somewhere**, and history is the one thing the reader already has.',
  '**The last thing to do before sending, and it is Mrs Nasser\'s.** ⚠ **Read it aloud as the person who refused you.** **In your own voice it sounds reasonable; in theirs the third sentence is a complaint.** **Same words.** **The reproach is inaudible in one voice and obvious in the other.**',
  '**Stop at the branches.** ⚠ **No _I look forward to hearing from you_, no _thank you for your time_.** **The letter ends on a sentence that gives them something to decide**, and anything after it is the writer being nervous in public.',
  '**Pronunciation.** 🔊 **Track 15.12** **Read it in the reader\'s voice, aloud, once.** ⚠ **Mark every sentence that changes meaning between the two voices.** **In most drafts there are two, and both are in the second half**, where the writer has relaxed.',
  '**And the one sentence to cut from every draft, which nearly everybody writes.** ⚠ _I realise you are very busy._ **It is meant as courtesy and it does three things**: **it tells the reader you expect to be a nuisance, it invites them to agree, and it spends a line of a two-hundred-word letter on nothing.** **Cut it, and cut _I shall keep this brief_ with it.**',
  '**Practise:** The five moves in order, inside 220 words. **1** with a cost refusal  **2** with a capacity refusal  **3** with no new fact, so the smaller ask carries it  **4** one read in the reader\'s voice, with the two sentences marked  **5** one that ends after the branches',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a draft opening from the card. B says **which of the five moves it is, whether it is in the right place, and what is missing before it.** ⚠ **Two rows on each card are openings that look like move one and are history.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the opening)_ __________.'],
  ['B', 'Move ______. **In the right place / not.** **Missing before it:** __________.'],
]));
out.push(table(['Card A – the opening', 'Card B – the opening'], [
  ['_Since November the two gates have been merged into one._', '_The charge the refusal rested on was withdrawn in December._'],
  ['_⚠ Further to my letter of 3 September regarding the seal check…_', '_⚠ I am writing again about the promise field._'],
  ['_I appreciate that the cost of a second gate was the difficulty._', '_This is less than I asked for in September._'],
  ['_⚠ As you will recall, I raised this matter in the summer._', '_⚠ I hope you are well. I wanted to come back to you about…_'],
  ['_If the position has not changed, this falls away._', '_I shall not raise it again before the annual review._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the move number for each opening and what is missing before it. ⚠ **The four rows marked ⚠ are history wearing the clothes of move one**, and three of the four sound like ordinary courtesy. **_I hope you are well_ is the one the room will defend**, and it spends the two deciding lines.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Lay your five moves out in order, **one line each**, and count the words of the whole. ⚠ **Over two hundred and twenty before you have written a sentence of real prose means a move has history in it.**'));
out.push(p('**b**  Swap. **Your partner reads your five lines aloud in the voice of the person who refused you** — slowly, and as that person. ⚠ **You mark every sentence that changes meaning.** **There are usually two.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim gave the five moves in order: the new fact; the concession with nonetheless; the smaller ask named as smaller; the two branches; and the date she stops. In the letter the date lives inside the losing branch, so it is five moves and four paragraphs. Asked which of the five is missing from her draft, she said the date — she wrote everything else and then stopped, and she thinks she stopped because the date is the only one that costs her anything. Which is why it is the fifth and not the first: four of the five moves cost you nothing, because they are about arrangement, and the fifth is a real concession, so most drafts end at the fourth. Hiba said hers is missing the concession and she had thought it was there, and read out what she had: I understand the position taken in September. That is a reference to a position and not a concession to it — a concession states their reason at full strength in your own words. Omar asked how long the whole thing is, and a hundred and eighty to two hundred and twenty words, which is the examination band and is also right: a second letter over three hundred words has history in it somewhere, and history is the thing the reader already has. Dima asked about the first two lines, which carry the new fact and nothing else — no further to, no I hope you are well, no history — because the reader decides in two lines whether this is a repeat, and everything you can do about that decision happens there. Hiba then said the thing she had found hardest, which is reading the letter in the reader\'s voice: she reads her own drafts in her own voice and they sound reasonable, and in his voice the third sentence is a complaint — the same words. That is the best practical instruction in the cycle and it should be the last thing anybody does before sending, because the reproach is inaudible in your own voice and obvious in theirs. And Mazen asked about the ending: stop at the branches, with no I look forward to hearing from you and no thank you for your time, since the letter ends on a sentence that gives them something to decide and anything after it is the writer being nervous in public._'));
out.push(p('**Listener task:** write the two sentences of your partner\'s letter that changed meaning in the reader\'s voice.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read both of Rim\'s letters — the one that was refused and the one that was not. Answer the questions.'));
out.push(model([
  '**THE SEPTEMBER LETTER** · _R. Shaaban · 2 September · to the depot manager_',
  'I am writing further to our conversation in August about seal checks at the gates. As you will recall, I have raised the question of a second check on a number of occasions, most recently in the spring, and I am sure you will appreciate that this is something I have thought about a great deal. The present arrangement means that nobody at this depot can say with certainty what has left it, and I would have thought that was a matter of some importance. I am therefore asking for a seal check to be introduced at both the Harasta and the Jaramana gates, on all consignments, with effect from the beginning of October. I should be most grateful if you would give this your consideration, and I look forward to hearing from you in due course.',
  '⚠ **Refused on 3 September, in two sentences, on cost.** _One hundred and forty words, no figure in any of them, two reproaches, and an ask larger than the one before it._',
  '',
  '**THE FEBRUARY LETTER** · _R. Shaaban · 13 February · to the depot manager_',
  '**Since November the Harasta and Jaramana runs have been merged. There is one gate now, where there were two.**',
  '**I appreciate that the second seal check was refused in September on cost**, and that the cost of staffing a check at two gates in a single shift was the whole of the difficulty. ⚠ **Nonetheless** the merger removes the second gate, **and with it about half of what was being costed.**',
  '**This is less than I asked for in September.** I am asking for a seal check at one gate, **on consignments over forty cartons only** — about **nine consignments a week** out of forty-one, **and about forty minutes a shift** rather than the two hours the September request would have needed.',
  '**If the cost position has not changed, this falls away**, and I shall not raise the seal check again before the annual review in October. ⚠ **If the merger has changed it, forty minutes a shift on the nine over-forty consignments would be enough**, and I should be glad to run it for one quarter and bring you the figures.',
  '',
  '⚠ **Two hundred and six words, and the only sentence about September is the one conceding their reason.**',
]));
out.push(item('1', 'Find the two reproaches in the September letter, and say what each accuses the reader of.'));
out.push(item('2', 'What does the third paragraph of the February letter do that the September one did not?'));
out.push(item('3', 'What does she put inside the losing branch, and what does the second branch offer?'));
out.push(writers([
  'The second letter, four paragraphs, 180–220 words: **the new fact alone** → **the concession at full strength, then _nonetheless_ and what the fact removes** → **the smaller ask, named as smaller, with its figures** → **the two branches, the losing one first and carrying the stopping date.**',
  '⚠ **No greeting beyond the necessary one, and no history.** **The first paragraph is two sentences and both are about now.** **Everything the reader needs about September they already have**, and putting it in spends the two lines you are being read in.',
  '**Put figures in the smaller ask and make them comparable.** _Nine of forty-one; forty minutes a shift rather than two hours._ ⚠ **The comparison is what makes _smaller_ checkable** — **without it, _less than I asked for_ is a claim.**',
  '**Let the concession be longer than you want it to be.** ⚠ **Mrs Shaaban spends thirty-one words on their reason** before _nonetheless_. **A concession shorter than the ask reads as a formality**, and the reader has met a great many formalities.',
  '⚠ And **end on the second branch, with something concrete in it.** _I should be glad to run it for one quarter and bring you the figures._ **An offer to produce evidence is the best last line a second letter can have** — **it gives the reader a way to agree to something small and reversible.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your second letter (80 words or more).'));
out.push(p('**______________ · ______________ · to ______________**   **Since ______________, ______________. ______________.**   **I appreciate that ______________ was refused in ______ on ______________**, and that ______________ was the whole of the difficulty. ⚠ **Nonetheless** ______________, **and with it ______________.**   **This is less than I asked for in ______.** I am asking for ______________, **______________ only** — about ______________ out of ______________, **and about ______________** rather than ______________.   **If ______________ has not changed, this falls away**, and I shall not raise it again before ______________. ⚠ **If ______________ has changed it, ______________ would be enough**, and I should be glad to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'First two lines: the new fact and nothing about the past',
  'The concession at full strength, longer than you want it',
  'The smaller ask named, with comparable figures',
  'The stopping date inside the losing branch, and nothing after the second',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first two lines**, and the room says whether a person who has refused them once would read the third.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (**180–220 words**), to the shape in the writer\'s box, and write the word count at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the new fact alone in the first two lines, a concession at full strength, the smaller ask named with comparable figures, and the stopping date inside the losing branch.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Have your partner read your letter aloud in the voice of the person who refused you, slowly, as that person.** ⚠ **Mark every sentence that changes meaning between the two voices.** **There are usually two and both are in the second half.** Then the sentence the cycle ends on, which is Mrs Nasser\'s: **the reproach is inaudible in your own voice and obvious in theirs.**'));
out.push(hw('Write the letter (180–220 words) and ⚠ **do not send it tonight.** **Read it in the reader\'s voice tomorrow morning and mark the two sentences.** **Then send it.** **15.7 turns the unit round**: **you explain a refusal to the person who received it**, which is the one position in this book where you are on neither side.'));

// ===================== 15.7 =====================
out.push(h2('15.7  Review & Mediate: Explaining a refusal to the person refused'));
out.push(p('**Function:** explaining a refusal to the person who received it   ·   **Recycling:** Unit 15   ·   **Exam practice:** B2 First Reading and Use of English Part 3 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Since November the two gates have been merge into one.  **2** I appreciate that the cost was the difficulty, nonetheless the cost has gone.  **3** This is less that I asked for in September.  **4** If the position has not changed, this will fall away and I will not write.  **5** His reluctant to name a date made the letter weaker.  **6** The refuse was given on cost and never explained.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the refusal, and the two things the person who received it believes about it.'));
out.push(box(null, [
  '**ONE REFUSAL, AND WHAT THE READER TOOK FROM IT** _(a directorate and an applicant)_',
  '**The refusal, in full.** _"Thank you for your application of 2 October. On this occasion we are unable to take the matter forward. We are grateful for your interest."_',
  '**What the applicant believes.** _"They did not read it. If they had read it they would have seen the eleven years, and nobody who had seen the eleven years would write three sentences."_',
  '**What the applicant does next.** _"I shall write again, setting out the eleven years properly."_',
  '⚠ **The applicant is wrong about the first and the second follows from it.**',
  '**And the thing the refusal does not contain.** **Any reason at all** — **which is why it can be read as not having been read.**',
  '**The question for the cycle.** _What can honestly be said to this person?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a reasonless refusal does to the person refused, and what is the one thing a mediator can honestly supply?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  What can honestly be said', [
  ['Ms Huda', 'Three sentences, no reason, and a reader who has concluded he was not read. Mr Barghouti — you write these. Was he read?'],
  ['Adnan', 'Almost certainly, and that is the cruelty of it. ⚠ **A refusal of three sentences takes longer to write than a refusal of eight**, because you have to decide what not to say.'],
  ['Ms Huda', '**Then do the mediation, and it is three moves.** One: **say what the refusal does and does not say.** Two: **say what can be inferred and what cannot.** Three: ⚠ **supply the one thing the letter withheld, if you honestly have it** — **and say plainly that you do not, if you do not.**'],
  ['Dima', 'What does it actually say?'],
  ['Adnan', '**That the matter is not being taken forward.** ⚠ **That is all. It does not say the application was weak, it does not say it was read quickly, and it does not say _no_ to anything but this occasion.** **_On this occasion_ is doing real work and nobody ever believes it.**'],
  ['Ms Huda', '**And what cannot be inferred?**'],
  ['Adnan', '⚠ **Anything about the eleven years.** **A reasonless refusal is silent about the application by design** — **and a reader fills the silence with the worst thing they can think of**, which is almost always _they did not read it_.'],
  ['Omar', 'Why not give a reason? It would take one line.'],
  ['Adnan', '**Because a reason can be argued with and a decision made by four people cannot be defended by one.** ⚠ **I have given reasons and spent a fortnight on correspondence about the reason rather than the decision.** **It is not laziness; it is a choice about where the fortnight goes.**'],
  ['Hiba', 'That is a real answer and I have never heard anybody say it.'],
  ['Ms Huda', '⚠ **Which is the finding of this cycle: the thing a refusal withholds is usually withheld on purpose, and the purpose is almost never contempt.** **Explaining that to the person refused is most of what a mediator can do.**'],
  ['Rim', 'And the third move? Supplying what was withheld?'],
  ['Ms Huda', '**Only if you honestly have it.** ⚠ **A mediator who invents a reason to comfort somebody has done more harm than the three sentences did** — **because the invented reason will be acted on, and it will produce a second letter aimed at nothing.**'],
  ['Bassel', 'And if you do not have it?'],
  ['Ms Huda', '**Then say so, and say what the person can do that does not require it.** ⚠ **_On this occasion_ is a date, not a verdict**, and the practical advice follows from the words on the page rather than from anything anybody knows.'],
  ['Dima', 'Is there anything you can always say, whatever you know?'],
  ['Ms Huda', '**One thing, and it is on the page.** ⚠ **_On this occasion_ is a date and not a verdict, and the next occasion has a date too** — **a readvertisement, a review, a new quarter.** **Find it and give it.** **That is advice from the words of the letter and it requires nothing from anybody\'s private knowledge**, which is why it is the only thing a mediator can always supply.'],
  ['Jad', 'What do you not do?'],
  ['Ms Huda', '🔊 **You do not defend the refusal and you do not join in the complaint.** ⚠ **Both are easier than the mediation and both end it.** **Read the three sentences aloud, flatly, twice** — **once as they were written and once as he read them** — **and the gap between the two readings is the whole conversation.**'],
]));
out.push(sp());
out.push(box('Language box – explaining a refusal', [
  '**The three moves.** **1** **Say what the refusal does and does not say.** **2** **Say what can be inferred and what cannot.** ⚠ **3** **Supply the one thing it withheld, if you honestly have it — and say plainly that you do not, if you do not.**',
  '**What a reasonless refusal actually says.** ⚠ **That the matter is not being taken forward, and nothing else.** **It does not say the application was weak and it does not say _no_ to anything but this occasion.** **_On this occasion_ is doing real work and nobody ever believes it.**',
  '⚠ **A reasonless refusal is silent about the application by design** — **and a reader fills the silence with the worst thing they can think of**, which is almost always _they did not read it_.',
  '**Why reasons are withheld, and it is not contempt.** ⚠ **A reason can be argued with, and a decision made by four people cannot be defended by one.** **Mr Barghouti: _I have given reasons and spent a fortnight on correspondence about the reason rather than the decision._** **It is a choice about where the fortnight goes.**',
  '**The finding.** ⚠ **The thing a refusal withholds is usually withheld on purpose, and the purpose is almost never contempt.** **Explaining that to the person refused is most of what a mediator can do.**',
  '⚠ **Never invent a reason to comfort somebody.** **An invented reason will be acted on**, and it produces a second letter aimed at nothing — **which is more harm than the three sentences did.**',
  '**And if you have nothing: say so, and say what they can do that does not require it.** ⚠ **_On this occasion_ is a date, not a verdict**, and the practical advice follows from the words on the page.',
  '**Pronunciation.** 🔊 **Track 15.14** **Read the refusal aloud twice, flatly** — **once as it was written and once as it was read.** ⚠ **The gap between the two readings is the whole conversation**, and it cannot be described to somebody who has not heard it.',
  '**And the one practical thing that can always be said, whatever you know.** ⚠ **_On this occasion_ is a date, not a verdict**, and the next occasion has a date too — **a readvertisement, a review, a new quarter.** **Find it and give it.** **That is advice from the words on the page and it requires nothing from anybody\'s private knowledge**, which is why it is the only thing a mediator can always supply.',
  '**One warning, and it is the one every mediator fails here.** ⚠ **Do not defend the refusal and do not join in the complaint.** **Both are easier than the mediation and both end it**, and the second is the more tempting because it costs you nothing and feels like loyalty.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a refusal and a reader\'s reaction, and does **not** show them. A reads both. B makes the three moves: **what it says, what cannot be inferred, and what can honestly be supplied.** ⚠ **In one of the two pairs the mediator genuinely knows the reason** and must decide whether to give it. Change roles with the other pair.'));
out.push(table(['Pair A – the directorate', 'Pair B – the release committee'], [
  ['_"On this occasion we are unable to take the matter forward."_', '_"The field cannot be included in this release."_'],
  ['_Reader: "they did not read the eleven years."_', '_Reader: "they do not think it matters."_'],
  ['_Says: not taken forward. Nothing else._', '_⚠ The mediator sat on the committee and knows the reason._'],
  ['_⚠ Cannot be inferred: anything about the application._', '_⚠ The reason is capacity, and it is not confidential._'],
  ['_⚠ Honestly available: nothing. Say so._', '_⚠ Honestly available: the reason. Give it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is the one where the mediator knows**, and the right answer is to say so — **a mediator who withholds a reason they have, to avoid awkwardness, has chosen their own comfort over the other person\'s next six months.** **The test is not whether it is awkward but whether it is confidential**, and in Pair B it is not.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **a refusal somebody has shown you**, or the one you brought read from the other side, and do the three moves in writing. ⚠ **Write the sentence beginning _what this does not say is…_** Then the question the cycle ends on: **what can you honestly supply, and what are you tempted to supply that you do not have?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what can honestly be said:  _Three sentences, no reason, and a reader who has concluded he was not read. Asked whether he was read, Adnan said almost certainly, and that is the cruelty of it — a refusal of three sentences takes longer to write than a refusal of eight, because you have to decide what not to say. So the mediation, which is three moves: say what the refusal does and does not say; say what can be inferred and what cannot; and supply the one thing it withheld, if you honestly have it, and say plainly that you do not if you do not. What it actually says is that the matter is not being taken forward, and that is all — it does not say the application was weak, it does not say it was read quickly, and it does not say no to anything but this occasion, and on this occasion is doing real work that nobody ever believes. What cannot be inferred is anything about the eleven years: a reasonless refusal is silent about the application by design, and a reader fills the silence with the worst thing they can think of, which is almost always they did not read it. Omar asked why not give a reason when it would take one line, and because a reason can be argued with and a decision made by four people cannot be defended by one — Adnan has given reasons and spent a fortnight on correspondence about the reason rather than the decision, which is not laziness but a choice about where the fortnight goes. Hiba said that is a real answer and she has never heard anybody say it. Which is the finding of the cycle: the thing a refusal withholds is usually withheld on purpose, and the purpose is almost never contempt, so explaining that to the person refused is most of what a mediator can do. Rim asked about the third move, supplying what was withheld, and only if you honestly have it — a mediator who invents a reason to comfort somebody has done more harm than the three sentences did, because the invented reason will be acted on and will produce a second letter aimed at nothing. Bassel asked what to do if you do not have it, and then say so, and say what the person can do that does not require it: on this occasion is a date and not a verdict. And Jad asked what you do not do: you do not defend the refusal and you do not join in the complaint, because both are easier than the mediation and both end it._'));
out.push(p('**Listener task:** write the thing you were tempted to supply and do not have.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 3)', 7));
out.push(p('Read the text below. Use the word given in capitals at the end of each line to form a word that fits in the gap in the same line. For questions **1–8**, write the word.'));
out.push(box(null, [
  '**THE THREE-SENTENCE REFUSAL**',
  'Most people who receive a short refusal conclude that their **(1)** ______________ was not read. It is the natural reading and it is almost always wrong.   **SUBMIT**',
  'A refusal of three sentences takes longer to write than one of eight, because the writer has to decide what to leave out. The **(2)** ______________ is deliberate, and it is made for a reason that has nothing to do with the person refused.   **OMIT**',
  'A reason can be argued with. A decision taken by four people cannot be defended by one of them in correspondence, and the **(3)** ______________ of the committee is not something a single signatory can represent.   **COMPOSE**',
  'So the writer chooses. Give a reason and accept a fortnight of letters about the reason rather than the decision; or give none, and be thought **(4)** ______________ by somebody who will never know why.   **CARE**',
  'The reader, meanwhile, fills the silence. **(5)** ______________ about one\'s own work is not available in the absence of information, so the worst available explanation arrives and settles.   **REASSURE**',
  'There is one phrase in almost every such letter that is doing real work and is never believed: **on this occasion.** It is a **(6)** ______________ of time and not a verdict on anybody, and it is the only part of the letter that tells the reader to try again.   **RESTRICT**',
  'What can honestly be said to such a reader is less than they want and more than nothing. ⚠ The one thing that must not be offered is an invented reason, however **(7)** ______________ it is meant: it will be acted on, and the next letter will be aimed at a target that does not exist.   **KIND**',
  'And the practical advice does not depend on knowing anything. The **(8)** ______________ of a date in the letter — _on this occasion_ — is itself an instruction, and it is the one most readers throw away.   **INCLUDE**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a refusal and its reader (80 words or more).'));
out.push(p('**ONE REFUSAL, AND WHAT THE READER TOOK FROM IT** · ______________   **The refusal, in full.** _"______________"_   **What the reader believes.** _"______________"_   **What it says.** ⚠ **______________, and that is all.**   **What this does not say is** ______________. ⚠ **A reasonless refusal is silent by ______________**, and a reader fills the silence with ______________.   **Why the reason was withheld.** ⚠ ______________. **It is not ______________; it is ______________.**   **What I can honestly supply.** ______________. ⚠ **And what I am tempted to supply and do not have:** ______________.   **And what I am not doing.** ⚠ **Defending the refusal, or joining in the complaint.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The refusal quoted in full, and what it says stated exactly',
  'A sentence beginning _what this does not say is…_',
  'Why the reason was withheld, without contempt in it',
  'What you honestly have, and what you are tempted to invent',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The essay, and the shape has not changed since Unit 3.** **Four paragraphs, one job each, the concession third with the objection in its first sentence and a figure in sentence four, and your own idea alone in the last paragraph.**',
  'In your English class you have been talking about how decisions are explained to the people they affect. Your teacher has asked you to write an **essay**.',
  '_"An organisation should always give its reasons when it refuses a request."_ Do you agree?',
  'Write an essay using **all the notes** and giving **reasons** for your point of view. Write **180–220 words**.',
  'Notes — write about: **1** what a reason gives the person refused   **2** what giving reasons costs the organisation   **3** ______________ _(your own idea)_',
  '⚠ **The concession paragraph is the one to plan first here**, because the strongest objection is on the other side from most people\'s instinct: **a reason can be argued with, and the fortnight spent arguing is a real cost.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Since November the two gates ___ into one.   a) have merged   b) are merging   c) merge',
  '2  I appreciate that the cost was the difficulty; ___, the cost has gone.   a) however   b) nonetheless   c) although',
  '3  This is less ___ I asked for in September.   a) that   b) than   c) then',
  '4  If the position has not changed, this ___ away.   a) will fall   b) falls   c) would fall',
  '5  His ___ to name a date made the whole letter weaker.   a) reluctant   b) reluctance   c) reluctantly',
  '6  The ___ on the letter was one person, though the decision had been taken by four.   a) sign   b) signing   c) signatory',
  '7  She decided to ___ back to the question in March rather than in January.   a) go   b) going   c) gone',
  '8  The ___ of a reason is usually deliberate and is rarely contempt.   a) omit   b) omitting   c) omission',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 15.15** You will hear five people talking about a refusal they received. For questions **1–5**, choose from the list **A–H** what each speaker says. **There are three extra letters.**'));
[
  '**A** I asked for something smaller and did not say that I had.',
  '**B** I found a fact I could not have had at the time.',
  '**C** I wrote a sentence I thought was polite and it was a complaint.',
  '**D** I said when I would stop asking and it changed the reply.',
  '**E** I decided not to write again at all.',
  '**F** I was given a reason and spent longer arguing about the reason than about the decision.',
  '**G** I never found out why and I have stopped minding.',
  '**H** I asked a third person to explain the letter to me.',
  '',
  '**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Speaker 1', 'It was the same request, a quarter of the size — three months instead of a year — and I never said so anywhere in the letter. The reply quoted their original refusal almost word for word, and quite right too: they saw the same site and the same post in my first paragraph and nothing told them to read on. Seven words would have done it.'],
  ['Speaker 2', 'I had written, as I thought perfectly civilly, that I was sure he would recall raising it in June. I read it back a month later in his voice rather than my own and it says: you have forgotten. That is a charge, and he answered the charge for four hundred words and never came to what I had asked for.'],
  ['Speaker 3', 'What I added was the end of it. If the answer is still no in March, I shall not raise it again before the annual review. Nine words of real work, and what came back included a line I did not expect at all — that it was helpful to know where this ended. He could decide one question instead of a series.'],
  ['Speaker 4', 'They did tell me why, which I had wanted, and then I spent a fortnight writing about whether the reason was correct. It was a committee decision and the person answering me could not defend it, and in the end I had argued myself a long way from the thing I actually wanted. I have some sympathy now for the people who say nothing.'],
  ['Speaker 5', 'The merger. Two gates became one in November and the whole of the cost objection was about staffing two gates in a shift. Nobody could have known that in September — it had not happened. I put it in the first line and said nothing about September at all.'],
]));
out.push(p('**C  Writing.** Write the essay (180–220 words): four paragraphs, one job each, all three notes, the concession third with a figure in sentence four.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ open a second letter with a fact that was not available when they refused',
  '☐ tell a new fact from a change in my own feelings',
  '☐ concede their reason at full strength with nobody in it',
  '☐ find a reproach inside a polite sentence',
  '☐ ask for less than I asked for, and say that I am doing so',
  '☐ give the reader two branches, the losing one first and the same length',
  '☐ set a stopping date I will keep',
  '☐ explain a reasonless refusal without defending it or joining the complaint',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _go back to · write in · put aside · press on · ease off · leave off · take back · stand over · let up · hear back from · draw back · turn on_ **(of an argument)**.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 15.7 draws on this)_: _submit → **submission** · omit → **omission** · compose → **composition** · care → **careless** · reassure → **reassurance** · restrict → **restriction** · kind → **kindly** · include → **inclusion** · sign → **signatory**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 15 · Student\'s Book');
