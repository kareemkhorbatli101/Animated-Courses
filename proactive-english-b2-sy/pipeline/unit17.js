// Proactive English B2 · Syria Edition · Book 2 · Unit 17 — Student's Book
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

out.push(h1('Unit 17  The Argument You Do Not Hold'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**17.1** Speaking for a case that is not yours   ·   **17.2** The other side at its strongest   ·   **17.3** What would change your mind',
  '**17.4** The case you were told to make   ·   **17.5** The argument and the arguer   ·   **17.6** The whole brief   ·   **17.7** Review & Mediate: the advocate and the believer',
  '⚠ **This is the hardest speaking unit in the book and the least comfortable.** **For six cycles you will be putting cases you do not hold** — **well enough that the room cannot tell** — **and then saying whose they are.**',
  '**Unit 16 gave you an instrument to judge against; Unit 17 takes it away.** ⚠ **The connection is 16.3: showing the working means naming the evidence that points the other way** — **and here it is a whole position rather than one criterion.**',
], C.lteal, C.teal));

// ===================== 17.1 =====================
out.push(pb());
out.push(h2('17.1  Speaking for a case that is not yours'));
out.push(p('**Function:** putting a position you do not hold, and saying whose it is   ·   **Grammar:** the attribution inside the sentence, not after it   ·   **Pronunciation:** the attribution at full weight, not as a disclaimer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A states a position they **do** hold, in one sentence. ⚠ **B states it again, better than A did** — **and then says whose it is.** **Swap.** **Most people find the second half harder than the first**, and a few find they cannot do the first half at all without arguing against it.'));
out.push(board('Well, some people would say the reprint costs too much.', 'The workshop\'s case is this, and it is a good one: a reprint costs them a month\'s margin and they have fourteen people.'));
out.push(p('**b**  Which is putting a case? **1** _Some people think a reprint is too expensive._  **2** _The workshop\'s case is that a reprint costs them a month\'s margin, and the figure is theirs and checkable._  **3** _There are arguments on both sides._  **4** _I am putting the workshop\'s case and not mine: a reprint costs them a month\'s margin, and they have fourteen people._  **5** _Of course, one could argue the opposite._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two things does Ms Huda say a case you do not hold must have, and what does she say a weakly-put case actually is?   **A** a disclaimer and a short summary; a weak case is honest   **B** **it must be put at least as well as its holder would put it, and whose it is must be said in the same breath** — and **a weakly-put case is not neutrality; it is a refutation disguised as a summary**   **C** a source and a date; a weak case is a draft'));
out.push(p('**b**  Listen again. **1** What happened to Mr Attar for eleven months?   **2** What does Ms Huda say about the word _some_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  Whose case is it', [
  ['Ms Huda', 'Mr Attar. You put a case you did not hold, in public, and it cost you something. Tell them.'],
  ['Jad', 'A thread in 2024 about charging for the archive. ⚠ **I was moderating, and the people who wanted the charge were putting their case badly** — **so I put it for them, properly, in about two hundred words.**'],
  ['Ms Huda', '**And?**'],
  ['Jad', '⚠ **For eleven months everybody on that forum believed it was my position.** **Including the two people who later chose somebody else for a working group** — **and one of them told me afterwards that it was the archive thread.**'],
  ['Ms Huda', '**Did you say it was not yours?**'],
  ['Jad', '**At the end. In a sentence.** ⚠ _That is their argument, not mine._ **Six words after two hundred.**'],
  ['Ms Huda', '**Which is the whole lesson and it is a lesson about where the words go, not about whether you said them.** ⚠ **An attribution at the end is read as a retreat.** **An attribution inside the first sentence is read as a frame.**'],
  ['Rim', 'Is the answer not simply to put it badly?'],
  ['Ms Huda', '⚠ **That is the thing to kill in this room today.** **A case put weakly is not neutrality — it is a refutation disguised as a summary**, and everybody can hear it except the person doing it.'],
  ['Dima', 'I do it constantly. _Some people would say…_'],
  ['Ms Huda', '**_Some_ is the word to watch and it does two jobs at once.** ⚠ **It makes the case anonymous, so nobody can be asked whether that is really their argument** — **and it makes it small, because _some_ is fewer than _most_.**'],
  ['Adnan', 'And the alternative is to name them.'],
  ['Ms Huda', '**Name them, and give the figure they would give.** ⚠ _The workshop\'s case is that a reprint costs them a month\'s margin._ **Not _some people think it is expensive_** — **and the test is whether the workshop would recognise it.**'],
  ['Bassel', 'They would. That is my case and my margin.'],
  ['Ms Huda', '**Which is the test, and it is the only one that matters.** ⚠ **Put the case in front of the person who holds it and ask whether you have put it well enough.** **If they want to add anything, you had not put it; you had reported it.**'],
  ['Lubna', 'And when somebody mistakes it for yours?'],
  ['Ms Huda', '**You correct it once, in the same place, and you accept that some people will not have read the correction.** ⚠ **That is the cost of the method and it is real** — **eleven months, in Mr Attar\'s case, and a working group.**'],
  ['Mazen', 'And saying the attribution out loud?'],
  ['Ms Huda', '🔊 **At the same weight as the case, in the same breath, in the same voice.** ⚠ _The workshop\'s case is this, and it is a good one._ **Not _the workshop would probably say, although I do not agree with it myself…_** — **a disclaimer said quickly at the end is heard as embarrassment, and embarrassment is read as agreement.**'],
]));
out.push(sp());
out.push(box('Language box – putting a case that is not yours', [
  '**Two requirements, and they are not optional.** ⚠ **1 Put it at least as well as its holder would put it.** **2 Say whose it is, in the same breath.**',
  '**Where the attribution goes decides how it is read.** ⚠ **At the end it is a retreat** _(and six words after two hundred is nothing)_; **inside the first sentence it is a frame.** _I am putting the workshop\'s case and not mine: a reprint costs them a month\'s margin._',
  '⚠ **A case put weakly is not neutrality.** **It is a refutation disguised as a summary** — **and everybody in the room can hear it except the person doing it.**',
  '**The word to watch is _some_.** ⚠ **It does two jobs at once: it makes the case anonymous, so nobody can be asked whether that is really their argument** — **and it makes it small, because _some_ is fewer than _most_.**',
  '**The repair is a name and a figure.** _The workshop\'s case is that a reprint costs them a month\'s margin._ ⚠ **Give the figure they would give, from the source they would use.**',
  '**The test, and it is the only one.** ⚠ **Put the case in front of the person who holds it and ask whether you have put it well enough.** **If they want to add anything, you had not put it; you had reported it.**',
  '**Why do it at all.** ⚠ **Because they are often not in the room** — **and a decision taken with one side absent and badly summarised is worse than one taken with that side absent and well summarised.**',
  '**Pronunciation.** 🔊 **Track 17.2** **The attribution at the same weight as the case, in the same breath.** ⚠ _The workshop\'s case is this, and it is a good one._ **Not _they would probably say, although I do not agree myself…_** — **a disclaimer said quickly at the end is heard as embarrassment, and embarrassment is read as agreement.**',
  '**Practise:** Put a case you do not hold, with the attribution inside the first sentence. **1** a case about money  **2** a case about time  **3** one you think is wrong  **4** one with _some_ in it, and the repair  **5** one you have been mistaken for holding',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the position from the card. B puts it **as its holder would**, with the attribution **inside the first sentence**, and gives the figure its holder would give. ⚠ **Two rows on each card are written as _some people_ positions**, and B must name somebody who actually holds them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the position)_ __________.'],
  ['B', '**__________\'s case is this, and it is a good one: __________.** **That is theirs and not mine.**'],
]));
out.push(table(['Card A – the position', 'Card B – the position'], [
  ['_The archive should be charged for._', '_The analyser work should stay in the morning._'],
  ['_⚠ Some people say the reprint is too expensive._', '_⚠ Some people think the forms are too long._'],
  ['_Deliveries should be weekly, not daily._', '_The second signature should be dropped._'],
  ['_⚠ Some feel the training is unnecessary._', '_⚠ Some would argue the deadline is too tight._'],
  ['_The press should refuse rush work._', '_The register should be kept on paper._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each, whose case it is and the figure given. ⚠ **The four rows marked ⚠ have no holder in them** — _some people_, _some_, _some feel_, _some would argue_ — **and the pair must supply one before anything else.** **A pair that puts a _some people_ case without naming anybody has done the thing the cycle is about**, and the listeners will hear the case shrink as it is spoken.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a position you genuinely **do not** hold, held by somebody you know. ⚠ **Put it in four sentences, with the attribution inside the first**, and with the figure its holder would use.'));
out.push(p('**b**  Swap. Your partner reads your case and then **puts the attribution at the end instead**, in six words. ⚠ Then they say which version they would quote you on.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad put a case he did not hold, in public, and it cost him something. It was a thread in 2024 about charging for the archive: he was moderating, the people who wanted the charge were putting their case badly, so he put it for them, properly, in about two hundred words. And for eleven months everybody on that forum believed it was his position — including the two people who later chose somebody else for a working group, one of whom told him afterwards that it was the archive thread. He had said it was not his, at the end, in a sentence: that is their argument, not mine. Six words after two hundred. Which is the whole lesson, and it is a lesson about where the words go rather than about whether he said them: an attribution at the end is read as a retreat, and an attribution inside the first sentence is read as a frame. Rim asked whether the answer is not simply to put it badly, and that is the thing to kill in the room: a case put weakly is not neutrality but a refutation disguised as a summary, and everybody can hear it except the person doing it. Dima said she does it constantly — some people would say — and some is the word to watch, because it does two jobs at once: it makes the case anonymous, so nobody can be asked whether that is really their argument, and it makes it small, because some is fewer than most. Adnan said the alternative is to name them, and to name them and give the figure they would give: the workshop\'s case is that a reprint costs them a month\'s margin. Bassel said they would recognise that, because it is his case and his margin, which is the test and the only one that matters — put the case in front of the person who holds it and ask whether you have put it well enough, and if they want to add anything you had not put it, you had reported it. Lubna asked what happens when somebody mistakes it for yours, and you correct it once, in the same place, and accept that some people will not have read the correction — which is the cost of the method and it is real. And Mazen asked about saying the attribution out loud: at the same weight as the case, in the same breath, because a disclaimer said quickly at the end is heard as embarrassment, and embarrassment is read as agreement._'));
out.push(p('**Listener task:** write your partner\'s case, whose it is, and which of the two versions they would be quoted on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Jad writes eleven months after the archive thread. Answer the questions.'));
out.push(model([
  '**THE ARGUMENT I DID NOT HOLD** · J. Attar · 4 April · _for the forum, and for whoever moderates it next_',
  '**In May last year I put somebody else\'s case so well that the forum has thought it was mine ever since.** ⚠ **This is not a complaint about anybody who read it that way.** **The page was mine and it was badly built.**',
  '**What I did.** **Four people wanted the archive charged for and were arguing it badly** — **shouting about freeloaders, and nobody was listening.** ⚠ **So I wrote their case out properly: the server bill, the two volunteers who had stopped, the figure for what a small charge would cover.** **About two hundred words, with the strongest version of each point.**',
  '**What I thought I had done.** **Moderated.** ⚠ **I thought that putting the weaker side at full strength was the job, and I still think it is.**',
  '**What I had actually done.** **Written the best available statement of a position** — **and put the only sentence that said it was not mine at the very end.** ⚠ _That is their argument, not mine._ **Six words, after two hundred.** **Nobody reads the last line of a long post; they read the first.**',
  '**What it cost.** ⚠ **Eleven months of people answering me as though I wanted to charge for the archive.** **Two of them stopped posting to the thread I had started.** **And a working group in February that I was not asked to join** — **one of the two who chose told me afterwards that it was the archive thread, and he was not being unfair.** **He had read what was on the page.**',
  '**What I should have written, and it is one clause.** ⚠ _I am putting the case of the four people who want a charge, because it is being put badly and it deserves better: the server bill is…_ **Inside the first sentence, at the same weight as the case.** **The two hundred words after it would not have changed at all.**',
  '**And the thing I am not going to do.** ⚠ **I am not going to start putting cases badly.** **The forum had four people arguing for a charge and nobody understanding why** — **and the version I wrote is the version the two who disagreed finally answered, which is the first useful thing that thread produced.** **I shall keep doing it, with the clause at the front.**',
]));
out.push(item('1', 'What were the four people doing badly, and what did he write instead?'));
out.push(item('2', 'What did his attribution cost him, and why does he say the man who chose somebody else was not being unfair?'));
out.push(item('3', 'What should he have written, and what is he refusing to do?'));
out.push(writers([
  'A page about a case mistaken for yours: **what you did, in the first line** → **what the other side was doing badly** → **what you wrote instead** → **what you thought you had done** → **what you had actually done, with the words in the wrong place** → **what it cost, in months and names** → **the clause you should have written** → **and what you refuse to do about it.**',
  '⚠ **Protect the people who misread you, early.** _This is not a complaint about anybody who read it that way. The page was mine and it was badly built._ **A page that blames its readers has not found the fault**, and the fault is nearly always in the order of the sentences.',
  '**Quote your own bad attribution and count the words.** _Six words, after two hundred._ ⚠ **The arithmetic does the argument**, and no adjective can do it as well.',
  '**Give the cost in time and in consequences, and let the consequence be fair.** _A working group in February that I was not asked to join._ ⚠ **And then the hard clause:** _he was not being unfair; he had read what was on the page._',
  '⚠ And **refuse the easy remedy at the end.** _I am not going to start putting cases badly._ **A page that ends by proposing to summarise the other side less well has learned the wrong thing**, and the reader will see it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a case mistaken for yours (80 words or more).'));
out.push(p('**THE ARGUMENT I DID NOT HOLD** · ______________ · ______________   **In ______________ I put ______________\'s case so well that ______________.** ⚠ **This is not a complaint about ______________.**   **What I did.** ______________ **were arguing it badly** — ______________. ⚠ **So I wrote their case out properly: ______________.**   **What I thought I had done.** ______________.   **What I had actually done.** ⚠ **______________**, **and put the only sentence that said it was not mine ______________.** _"______________."_ **______ words, after ______.**   **What it cost.** ⚠ ______________. **And ______________** — **and ______________ was not being unfair.**   **What I should have written.** ⚠ _"______________."_   **And what I am not going to do.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The readers protected in the first lines, and the fault kept',
  'Your own bad attribution quoted, with the two word-counts',
  'The cost in time, with a consequence you call fair',
  'The easy remedy refused at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the clause they should have written**, and the room says whether it would still have been quoted on it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the readers protected, the two word-counts, the cost with a fair consequence, and the easy remedy refused.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the readers protected and the fault kept, your own attribution quoted with its arithmetic, a cost you call fair, and the easy remedy refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your case twice: the attribution inside the first sentence, then the same words with it at the end.** ⚠ **The room says which version it would quote you on**, and it is the second every time. **The words are identical and only the order has moved.** Then the sentence the cycle ends on, which is Mr Attar\'s: **nobody reads the last line of a long post; they read the first.**'));
out.push(hw('Write the page (80+ words). ⚠ Then do the thing the cycle is for: **find a case you have put for somebody else — in a meeting, a message, a report — and look at where you said whose it was.** **If it was at the end, or nowhere, write the clause that should have been at the front.** **17.2 asks for the other side at its strongest**, which is the same skill turned against your own position. ⚠ **And bring one argument against something you believe** — **the best one you know of, not the easiest.**'));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  The other side at its strongest'));
out.push(p('**Function:** stating the case against your own position at full strength   ·   **Grammar:** the strongest version, with a figure from your own records   ·   **Pronunciation:** the other side read without irony'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A names something they believe about their work. ⚠ **B asks for the best argument against it** — **not the easiest one, the best.** **Then B asks the question that decides the cycle: would the people who hold that argument sign what you have just said?** **In most pairs the answer is no.**'));
out.push(board('Critics would say we are too strict about paperwork.', 'The strongest case against me is mine: our rejection rate tracks which clerk was on leave, not which supplier sent it.'));
out.push(p('**b**  Which is the other side at its strongest? **1** _Of course, some people do not like paperwork._  **2** _The strongest case against me is that a refusal costs the driver two days and he did not write the form._  **3** _The opposing view is that standards do not matter._  **4** _Against my own position: our rejection rate tracks which clerk was on leave rather than which supplier sent it, and that figure is from my own file._  **5** _Critics would say we are too strict._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give for the other side at its strongest, and what does she say about an argument you can answer easily?   **A** it must be short; an easy argument is a weak one   **B** **the test is whether the people who hold it would sign what you have written** — and **an argument you can answer easily is almost always one you built yourself**   **C** it must be written down; an easy argument should be used first'));
out.push(p('**b**  Listen again. **1** What does Mrs Shaaban say she spent three years answering?   **2** What does Ms Huda say the strongest version nearly always contains?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  Would they sign it', [
  ['Ms Huda', 'Mrs Shaaban. You refuse consignments on paperwork. What is the best argument against you?'],
  ['Rim', 'That suppliers find the forms a nuisance.'],
  ['Ms Huda', '⚠ **Would any supplier sign that as their case?**'],
  ['Rim', '_(a pause)_ **No. They would be insulted by it.**'],
  ['Ms Huda', '**Then it is not their argument; it is yours about them.** ⚠ **And that is the commonest shape in this unit: the version you can answer in one line is almost always the version you built.**'],
  ['Rim', '⚠ **I spent three years answering it.** **Three years of explaining why standards matter, to people who had never said standards did not matter.**'],
  ['Ms Huda', '**And the real one? You found it eventually.**'],
  ['Rim', '**From a driver, in month thirty-seven.** ⚠ **A refusal costs him two days and he did not fill in the form** — **the clerk did, in an office he has never been in.**'],
  ['Ms Huda', '**That is the other side at its strongest and it has a person in it.** ⚠ **Was there a figure?**'],
  ['Rim', '**There was, and it was mine.** ⚠ **Our rejection rate tracks which clerk was on leave rather than which supplier sent the load.** **Eleven of the nineteen refusals last year fall in two weeks of August.**'],
  ['Ms Huda', '**Which is the sentence to take out of this cycle.** ⚠ **The strongest version of the case against you nearly always contains a figure from your own records** — **because the people who hold it have been watching your records more carefully than you have.**'],
  ['Dima', 'How do you find it, before month thirty-seven?'],
  ['Ms Huda', '**Ask the person who loses most.** ⚠ **Not the person who argues loudest and not the person most like you** — **the one on whom the cost of your position actually falls.** **Mrs Shaaban asked the suppliers for three years and the cost was falling on the drivers.**'],
  ['Omar', 'And if their strongest case is one you cannot answer?'],
  ['Ms Huda', '**Then say so, and that is not a defeat.** ⚠ _I have no answer to the two days, and I am keeping the rule, and here is what I am doing about the two days._ **A position that admits one unanswered argument is believed on the rest** — **which is 16.5 in a different room.**'],
  ['Tareq', 'And the straw shapes? How do we spot them?'],
  ['Ms Huda', '**Three phrases, and they are nearly always followed by something nobody holds.** ⚠ _Critics would say_ · _the opposing view is_ · _some people do not like_. **If the sentence after one of those could not be signed by a named person, it is straw.**'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **Without irony, and that is harder than it sounds.** ⚠ **A smile in the voice is a refutation and the room hears it before the sentence ends.** **Read the other side as though you were about to act on it** — **and if you cannot say it in that voice, you have not understood it yet.**'],
]));
out.push(sp());
out.push(box('Language box – the other side at its strongest', [
  '**The test, and it is one question.** ⚠ **Would the people who hold it sign what you have written?** **If they would be insulted by it, it is your argument about them and not theirs.**',
  '⚠ **An argument you can answer in one line is almost always one you built.** **The version that is easy to knock down was made to be knocked down**, and nobody is watching you do it except the people who hold the real one.',
  '**The strongest version nearly always contains a figure from your own records.** ⚠ **Eleven of the nineteen refusals fall in two weeks of August** — **because the people who hold the case against you have been watching your figures more carefully than you have.**',
  '**Where to find it.** ⚠ **Ask the person on whom the cost of your position actually falls** — **not the one who argues loudest and not the one most like you.** **The suppliers were asked for three years and the cost was falling on the drivers.**',
  '**And it has a person in it.** _A refusal costs him two days and he did not fill in the form; the clerk did, in an office he has never been in._ ⚠ **A strongest version with no person in it is usually still a summary.**',
  '**When their best case is one you cannot answer, say so.** ⚠ _I have no answer to the two days, and I am keeping the rule, and here is what I am doing about the two days._ **A position that admits one unanswered argument is believed on the rest.**',
  '⚠ **None of this requires you to agree.** **Putting the other side at full strength is not a step towards changing your mind** — **it is the only way to find out whether you should.** **Students resist the cycle because they think the two are the same thing.**',
  '**Pronunciation.** 🔊 **Track 17.4** **Without irony, which is harder than it sounds.** ⚠ **A smile in the voice is a refutation and the room hears it before the sentence ends.** **Read the other side as though you were about to act on it** — **and if you cannot say it in that voice, you have not understood it yet.**',
  '**Practise:** State the case against your own position at full strength, with a figure. **1** about money  **2** about a rule you enforce  **3** one you cannot answer  **4** one built out of straw, and the repair  **5** one you found by asking the person who loses most',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the position from the card. B states **the strongest case against it**, with a person in it and a figure, and then answers the test question: **would they sign it?** ⚠ **Two rows on each card are straw already** — they are what somebody would say about their opponents — **and B must rebuild them.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the position)_ __________.'],
  ['B', '**The strongest case against it is __________, and it costs __________.** **Would they sign it?** __________.'],
]));
out.push(table(['Card A – the position', 'Card B – the position'], [
  ['_We refuse consignments on incomplete paperwork._', '_Every instruction is given in the imperative._'],
  ['_⚠ Critics would say we do not care about delays._', '_⚠ The opposing view is that training is a waste._'],
  ['_Plans must be submitted before the lesson._', '_The archive stays free to everybody._'],
  ['_⚠ Some people do not like being observed._', '_⚠ Opponents think standards do not matter._'],
  ['_Deliveries are counted from our own book._', '_Rush work is refused after four o\'clock._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the strongest case, its figure, and the answer to the test question. ⚠ **The four rows marked ⚠ are straw and each is the giveaway shape** — _critics would say_, _the opposing view is_, _some people do not like_, _opponents think_. **A pair that answers one of those has answered nobody.** **Make the rebuild explicit: name a person, give what the position costs them, and then ask whether they would sign it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something you believe about your work and write **the strongest case against it** in three sentences — **with a person in it and a figure from your own records.** ⚠ **Then answer the test question honestly: would they sign it?**'));
out.push(p('**b**  Swap and perform. Your partner reads your strongest case **twice: once as though about to act on it, once with a smile in the voice.** ⚠ They say at which word the second version became a refutation.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim refuses consignments on paperwork, and asked for the best argument against her she said that suppliers find the forms a nuisance. Asked whether any supplier would sign that as their case, she said no — they would be insulted by it. Then it is not their argument but hers about them, and that is the commonest shape in this unit: the version you can answer in one line is almost always the version you built. She said she spent three years answering it — three years of explaining why standards matter, to people who had never said standards did not matter. The real one she found from a driver, in month thirty-seven: a refusal costs him two days and he did not fill in the form, the clerk did, in an office he has never been in. That is the other side at its strongest and it has a person in it. And there was a figure, and it was hers: the rejection rate tracks which clerk was on leave rather than which supplier sent the load, and eleven of the nineteen refusals last year fall in two weeks of August. Which is the sentence to take out of the cycle — the strongest version of the case against you nearly always contains a figure from your own records, because the people who hold it have been watching your records more carefully than you have. Dima asked how you find it before month thirty-seven, and you ask the person who loses most: not the one who argues loudest and not the one most like you, but the one on whom the cost of your position actually falls. Rim asked the suppliers for three years and the cost was falling on the drivers. Omar asked what happens if their strongest case is one you cannot answer, and then you say so, and that is not a defeat: I have no answer to the two days, and I am keeping the rule, and here is what I am doing about the two days. A position that admits one unanswered argument is believed on the rest. Tareq asked how to spot the straw shapes, and there are three phrases nearly always followed by something nobody holds: critics would say, the opposing view is, some people do not like. If the sentence after one of those could not be signed by a named person, it is straw. And Mazen asked about reading it out, which is done without irony, because a smile in the voice is a refutation and the room hears it before the sentence ends._'));
out.push(p('**Listener task:** write your partner\'s strongest case against themselves and whether its holders would sign it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rim writes after the conversation with the driver. Answer the questions.'));
out.push(model([
  '**THREE YEARS ANSWERING NOBODY** · R. Shaaban · 6 April · _for the two of us who sign the refusals_',
  '**For three years I have been answering an argument that nobody was making.** ⚠ **The real one came from a driver in August and took him about forty seconds to say.**',
  '**The argument I had been answering.** **That suppliers find the paperwork a nuisance and would rather we were not so strict about it.** ⚠ **I have a folder of replies to it.** **No supplier has ever put it to me in those words, and if I showed one of them my version of their case they would be insulted by it** — **which is the test, and I failed it for three years without noticing.**',
  '**The argument they are actually making.** **A refusal costs the driver two days.** ⚠ **He did not fill in the form; a clerk did, in an office he has never been in** — **and he is the only person in the chain who pays for it.** **He said he had stopped asking the clerk, because the clerk is not the one standing at our gate.**',
  '**And the part that is my own figure.** ⚠ **Nineteen refusals last year, and eleven of them fall in two weeks of August** — **the two weeks our own paperwork clerk was on leave and a relief clerk was filling the forms.** **So our rejection rate tracks which clerk was on duty rather than which supplier sent the load.** **That figure has been in my file since January and I had never arranged it that way.**',
  '**What I am not doing.** ⚠ **I am not dropping the rule.** **A consignment with no batch numbers cannot be traced, and in 2022 we needed to trace one.**',
  '**What I have no answer to.** ⚠ **The two days.** **They fall on the one person who could not have prevented the refusal, and nothing in my procedure touches that.** **I am not going to pretend I have a reply.**',
  '**What I am doing instead, which is smaller than the problem.** **The gate telephones the supplier\'s office before the driver is turned away**, ⚠ **so that a missing batch number can be read out rather than driven back.** **Eight of the nineteen would have been settled in four minutes.** **And in August the relief clerk gets the one-page note our own clerk has never needed.**',
]));
out.push(item('1', 'What argument had she been answering, and why does she say she failed the test?'));
out.push(item('2', 'What is the driver\'s argument, and what is the figure from her own file?'));
out.push(item('3', 'What has she no answer to, and what is she doing instead?'));
out.push(writers([
  'A note about an argument you had been answering instead of theirs: **the years in the first line** → **the argument you had been answering** → **the test, and that you failed it** → **the argument they are actually making, with a person in it** → **the figure from your own records** → **what you are not doing** → **what you have no answer to** → **and what you are doing instead, called smaller than the problem.**',
  '⚠ **Apply the test to yourself in writing, not in the abstract.** _If I showed one of them my version of their case they would be insulted by it._ **That sentence is the whole of the cycle and it costs the writer more than any figure on the page.**',
  '**Arrange your own figure the way they would arrange it.** _Eleven of the nineteen fall in the two weeks our clerk was on leave._ ⚠ **The data was already in the file; what was missing was the arrangement.**',
  '**Keep the position and say why, in one line.** _A consignment with no batch numbers cannot be traced, and in 2022 we needed to trace one._ ⚠ **A page that concedes everything has not stated a position**, and the reader stops trusting the concessions too.',
  '⚠ And **name what you cannot answer, and do not dress the remedy up.** _What I am doing instead, which is smaller than the problem._ **A remedy announced as a solution invites the reply you have just admitted you have no answer to.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about an argument you had been answering instead of theirs (80 words or more).'));
out.push(p('**______ YEARS ANSWERING NOBODY** · ______________ · ______________   **For ______ years I have been answering ______________.** ⚠ **The real one came from ______________.**   **The argument I had been answering.** ______________. ⚠ **If I showed them my version of their case they would ______________.**   **The argument they are actually making.** ______________. ⚠ **It costs ______________, and ______________ did not ______________.**   **And the part that is my own figure.** ⚠ **______ of the ______ fall in ______________.** **That figure has been in my file since ______________.**   **What I am not doing.** ⚠ ______________, **because ______________.**   **What I have no answer to.** ⚠ ______________.   **What I am doing instead, which is smaller than the problem.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The test applied to yourself, in writing',
  'Your own figure arranged the way they would arrange it',
  'The position kept, with one line of reason',
  'The unanswered argument named, and the remedy called small',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _what I have no answer to_ paragraph**, and the room says whether it is a real gap or a small one chosen to look brave.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the test applied to yourself, your own figure rearranged, the position kept, and the remedy called smaller than the problem.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the test applied to yourself in writing, your own figure arranged their way, the position kept with its reason, and an unanswered argument named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your strongest case against yourself twice: once as though about to act on it, once with a smile in the voice.** ⚠ **The room names the word at which the second became a refutation**, and it is usually the first one. Then the sentence the cycle ends on, which is Mrs Shaaban\'s: **three years of explaining why standards matter, to people who had never said standards did not matter.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the argument against something you believe and apply the test in writing: **would the people who hold it sign your version?** **If the answer is no, go and ask the person on whom your position costs most** — **and write down what they say in their words, not yours.** **17.3 asks what would change your mind**, which is the only question that makes the other two cycles mean anything. ⚠ **And bring one figure from your own records that somebody could use against you.**'));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  What would change your mind'));
out.push(p('**Function:** naming the evidence that would change your position   ·   **Grammar:** the falsifying condition, with a date   ·   **Pronunciation:** the condition said as a commitment, not as a hypothesis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A states a position. ⚠ **B asks: what would change your mind?** **Then the second question, which is the one that works: could that thing happen, and by when?** **Most first answers fail the second question** — _if the evidence changed_ **names no evidence and no date.**'));
out.push(board('I am always open to persuasion on this.', 'If the next four months of sheets show fewer than two incomplete, I withdraw the proposal.'));
out.push(p('**b**  Which is a falsifying condition? **1** _I am always open to persuasion._  **2** _If the next four months of sheets show fewer than two incomplete, I withdraw the proposal._  **3** _I would change my mind if the evidence changed._  **4** _Show me one month in which the night shift filed on time without being telephoned, and I drop it._  **5** _Nobody has yet produced anything that would move me._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two things must a falsifying condition be, and what does Ms Huda say about a position that has none?   **A** short and written; a position without one is incomplete   **B** **something that could actually happen, and dated** — and **a position with no falsifying condition is a preference**, however much evidence is piled behind it   **C** agreed by both sides; a position without one is dishonest'));
out.push(p('**b**  Listen again. **1** What happened six weeks after Mr Darwish wrote his condition down?   **2** What does Ms Huda say about _nothing would change my mind_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  Six weeks later', [
  ['Ms Huda', 'Mr Darwish. In 16.3 you had a verdict on the Homs handover sheets and you had stopped at the two incomplete ones. What happened after that?'],
  ['Omar', '**I argued for two years that the night shift could not keep the sheets.** ⚠ **Then somebody made me write down what would change my mind.**'],
  ['Ms Huda', '**What did you write?**'],
  ['Omar', '⚠ _If four consecutive months show fewer than two incomplete sheets, I withdraw it._ **I thought it was safe. I had two years of being right behind me.**'],
  ['Ms Huda', '**And?**'],
  ['Omar', '**Six weeks.** ⚠ **The second month was clean, the third had one, and by February I had run out of condition.** **I withdrew it in writing, which I had also promised to do.**'],
  ['Ms Huda', '**Why six weeks and not two years?**'],
  ['Omar', '⚠ **Because the sheets were being kept by whoever was told to keep them**, and nobody had ever been told. **The two years was me watching a thing nobody was doing.**'],
  ['Ms Huda', '**And that is the cycle in one case.** ⚠ **A condition you write down gets tested, and the testing is quick.** **A position with no condition is never tested at all** — **and it is a preference, whatever weight of evidence is piled behind it.**'],
  ['Dima', 'Two requirements, then.'],
  ['Ms Huda', '**Two.** ⚠ **It must be something that could actually happen** — **and it must have a date.** _Fewer than two incomplete in four months_ **has both.** _If the evidence changed_ **has neither.**'],
  ['Adnan', 'I have drafted the other kind. The impossible one.'],
  ['Ms Huda', '⚠ **_Show me a month in which nobody anywhere made an error_ is a refusal with a condition painted on it**, and the person it is given to spends weeks finding out that nothing would have done. **It is crueller than a refusal.**'],
  ['Hiba', 'And if the honest answer is that nothing would change it?'],
  ['Ms Huda', '**Then say that, and the conversation gets shorter and better.** ⚠ _Nothing you could show me would change this; it is not a question of evidence for me._ **That is a legitimate position** — **it just means the argument is about what we value and not about what is true**, and those two arguments need different rooms.'],
  ['Lubna', 'And the condition names what, exactly?'],
  ['Ms Huda', '**The evidence, never the conclusion.** ⚠ _If the sheets improve_ **is a conclusion and whoever judges it is you.** _Fewer than two incomplete in four months_ **is evidence, and a third person can read it off the file.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **As a commitment, not a hypothesis.** ⚠ _If four months show fewer than two, I withdraw it._ **Not _I suppose if things really did improve I might have to think again_** — **a condition said as a hypothesis commits nobody, and everybody listening knows it.**'],
]));
out.push(sp());
out.push(box('Language box – what would change your mind', [
  '⚠ **A position with no falsifying condition is a preference**, however much evidence is piled behind it. **It has never been tested, because nothing was ever offered that could test it.**',
  '**Two requirements.** ⚠ **1 It must be something that could actually happen.** **2 It must have a date.** _Fewer than two incomplete in four months_ **has both;** _if the evidence changed_ **has neither.**',
  '**The condition names the evidence, never the conclusion.** ⚠ _If the sheets improve_ **is a conclusion and the judge of it is you.** _Fewer than two incomplete in four months_ **is evidence, and a third person can read it off the file.**',
  '**The impossible condition is a refusal with a condition painted on it.** ⚠ _Show me a month in which nobody anywhere made an error._ **The person it is given to spends weeks finding out that nothing would have done** — **which is crueller than a refusal.**',
  '**_Nothing would change my mind_ is a legitimate answer and it must be said.** ⚠ _Nothing you could show me would change this; it is not a question of evidence for me._ **It means the argument is about what we value rather than about what is true** — **and those two arguments need different rooms.**',
  '**Ask the other side for theirs.** ⚠ **It is the most useful question in the unit.** **If neither side can name a thing that would move them, you are not arguing about evidence** — **and three more meetings will not help.**',
  '**The shapes.** _If ______ shows fewer than ______ by ______, I withdraw it._ _Show me one ______ and I drop it._ _I have no condition on this one, and here is why._ ⚠ **And the ones that commit to nothing:** _always open to persuasion_ · _if the evidence changed_ · _nobody has yet produced anything_.',
  '**Pronunciation.** 🔊 **Track 17.6** **As a commitment, not a hypothesis.** ⚠ _If four months show fewer than two, I withdraw it._ **Not _I suppose if things really did improve I might have to think again_** — **a condition said as a hypothesis commits nobody, and everybody listening knows it.**',
  '**Practise:** Name what would change your mind, with a date. **1** about a rule  **2** about a person\'s work  **3** one where nothing would, said plainly  **4** an impossible condition, and the repair  **5** the question put back to the other side',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the position from the card. B gives **the falsifying condition: the evidence, and the date** — and then puts the question back. ⚠ **Two rows on each card cannot honestly have a condition**, and B must say so rather than inventing one. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the position)_ __________.'],
  ['B', '**If __________ by __________, I withdraw it.** **And what would change yours?**'],
]));
out.push(table(['Card A – the position', 'Card B – the position'], [
  ['_The night shift cannot keep the handover sheets._', '_The forms are too long for the drivers._'],
  ['_⚠ Rush work after four o\'clock is wrong in principle._', '_⚠ The archive should be free because knowledge should be._'],
  ['_This supplier\'s reject rate is getting worse._', '_The relief clerk needs the one-page note._'],
  ['_⚠ Nobody should be assessed on a line they cannot read._', '_⚠ A refusal should always carry a reason._'],
  ['_Daily deliveries cost more than they save._', '_The second signature catches nothing._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each condition, its date, and the answer the other side gave. ⚠ **The four rows marked ⚠ are positions about what is right rather than about what is the case**, and no evidence would settle them. **The honest move is the plain sentence** — _nothing you could show me would change this_ — **and then the argument about what we value.** **Mark down any pair that invents a figure.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a position you hold at work and write **the falsifying condition: the evidence and the date.** ⚠ **Then test it: could it actually happen, and would you honour it?** **If the honest answer to the second is no, you have written a decoration.**'));
out.push(p('**b**  Swap and perform. Your partner reads your condition **as a commitment and then as a hypothesis.** ⚠ Then they ask the question back, and you answer it on the spot.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar argued for two years that the night shift could not keep the handover sheets, and then somebody made him write down what would change his mind. He wrote that if four consecutive months showed fewer than two incomplete sheets he would withdraw it, and he thought it was safe, because he had two years of being right behind him. It took six weeks. The second month was clean, the third had one, and by February he had run out of condition, and he withdrew it in writing, which he had also promised to do. Six weeks and not two years because the sheets were being kept by whoever was told to keep them, and nobody had ever been told — the two years was him watching a thing nobody was doing. Which is the cycle in one case: a condition you write down gets tested, and the testing is quick, and a position with no condition is never tested at all, so it is a preference whatever weight of evidence is piled behind it. Dima said two requirements, then, and two: it must be something that could actually happen, and it must have a date. Fewer than two incomplete in four months has both; if the evidence changed has neither. Adnan said he has drafted the other kind, the impossible one, and show me a month in which nobody anywhere made an error is a refusal with a condition painted on it — the person it is given to spends weeks finding out that nothing would have done, which is crueller than a refusal. Hiba asked what happens if the honest answer is that nothing would change it, and then you say that, and the conversation gets shorter and better: nothing you could show me would change this, it is not a question of evidence for me. That is a legitimate position; it just means the argument is about what we value rather than about what is true, and those two arguments need different rooms. Lubna asked what the condition names, and the evidence, never the conclusion: if the sheets improve is a conclusion and the judge of it is you, and fewer than two incomplete in four months is evidence a third person can read off the file. And Mazen asked about saying it out loud, which is as a commitment and not as a hypothesis, because a condition said as a hypothesis commits nobody and everybody listening knows it._'));
out.push(p('**Listener task:** write your partner\'s condition, its date, and whether you believe they would honour it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Omar writes when he withdraws his proposal. Answer the questions.'));
out.push(model([
  '**I SAID FOUR MONTHS AND I HAVE HAD FOUR MONTHS** · O. Darwish · 8 April · _to the Homs section, and to the night shift_',
  '**In October I wrote that if four consecutive months showed fewer than two incomplete handover sheets I would withdraw my proposal.** ⚠ **I have had the four months. I withdraw it.**',
  '**What I had proposed.** **That the night shift should stop keeping the sheets and that the day clerk should write them up from the night log.** ⚠ **I argued it for two years.**',
  '**What my argument was.** **Four sheets from March, two of them incomplete** — **and about a hundred conversations in which I said the night shift could not keep them.** ⚠ **Which was not a lie and was not evidence either: I had stopped at the two, and 16.3 has a word for that.**',
  '**The condition, and why I thought it was safe.** ⚠ _Fewer than two incomplete in four consecutive months._ **I had two years of being right behind me and I expected to be writing this note in about 2027.**',
  '**What happened.** **November: one incomplete. December: none. January: one. February: none.** ⚠ **Six weeks in, I could see where it was going and I said nothing, which is the part of this note I am least pleased with.**',
  '**Why the figures changed.** **Anas put one name on the board in October** — ⚠ **the sheets are kept by whoever is on the gate at two o\'clock, and that person is now named at the start of the shift.** **Nobody had ever been told it was theirs.** **My two years of evidence was me watching a thing nobody had been asked to do.**',
  '**What I am now proposing, which is smaller and is theirs.** ⚠ **The night shift keeps the sheets, and the name goes on the board at the start of every shift** — **which is Anas\'s idea and costs eleven seconds.** **And I shall count again in August, because four months is four months and not a guarantee.**',
  '**And one sentence for whoever argues with me next.** ⚠ **Ask me what would change my mind, and make me write it down with a date on it.** **It is the cheapest thing anybody has ever done to me** — **it cost me two years of being wrong and it only took six weeks to find out.**',
]));
out.push(item('1', 'What was his evidence, and what does he say was wrong with it?'));
out.push(item('2', 'Why did the figures change, and whose idea was it?'));
out.push(item('3', 'What is he least pleased with, and what does he say to whoever argues with him next?'));
out.push(writers([
  'A note withdrawing a position because your own condition was met: **the condition and the withdrawal in the first two lines** → **what you had proposed** → **what your argument actually was** → **why you thought the condition was safe** → **the figures, month by month** → **why they changed, and whose idea it was** → **what you propose now** → **and one sentence for whoever argues with you next.**',
  '⚠ **Withdraw in the second line, before any explanation.** _I have had the four months. I withdraw it._ **A withdrawal that arrives after three paragraphs of context is read as a negotiation**, and the reader starts looking for the escape.',
  '**Print the months as a list.** _November: one. December: none. January: one. February: none._ ⚠ **Four short clauses do the work of a paragraph** — **and they let the reader check the arithmetic you are conceding to.**',
  '**Give the credit to the person who produced the change, by name.** _Which is Anas\'s idea and costs eleven seconds._ ⚠ **A withdrawal that credits nobody reads as weather** — **as though the figures improved on their own.**',
  '⚠ And **include the thing you are least pleased with.** _Six weeks in, I could see where it was going and I said nothing._ **It is the only sentence on the page that the reader could not have written for you.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note withdrawing a position (80 words or more).'));
out.push(p('**I SAID ______________ AND I HAVE HAD ______________** · ______________ · ______________   **In ______________ I wrote that if ______________ I would ______________.** ⚠ **I have had ______________. I withdraw it.**   **What I had proposed.** ______________. ⚠ **I argued it for ______________.**   **What my argument was.** ______________. ⚠ **Which was not a lie and was not ______________ either.**   **The condition, and why I thought it was safe.** ⚠ _"______________."_   **What happened.** **______: ______. ______: ______. ______: ______. ______: ______.**   **Why the figures changed.** ⚠ ______________, **which is ______________\'s idea.**   **What I am now proposing.** ______________. **And I shall count again in ______________.**   **And one sentence for whoever argues with me next.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The withdrawal in the second line, before any explanation',
  'The months printed as a list a reader can check',
  'The credit given to a named person',
  'The thing you are least pleased with, kept in',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their condition and the line that withdraws on it**, and the room says whether the condition could have been met at all.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: withdrawn in the second line, the months listed, the credit named, and the thing you are least pleased with.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the withdrawal in the second line, the months as a checkable list, the credit to a named person, and the thing you are least pleased with.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your condition twice — as a commitment, then as a hypothesis — and let the room say which one it would hold you to.** ⚠ **Nobody is ever held to the second**, and the words are the same. Then the sentence the cycle ends on, which is Mr Darwish\'s: **it cost me two years of being wrong and it only took six weeks to find out.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the position you argue most often and write its condition: **the evidence, and the date.** **Give it to somebody who disagrees with you and ask them to hold you to it.** **If you cannot bring yourself to hand it over, the condition is a decoration and you knew that while you were writing it.** **17.4 is about the case you were _told_ to make** — **which is where putting an argument you do not hold stops being a choice.** ⚠ **And bring one instruction you have been given to argue for something.**'));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  The case you were told to make'));
out.push(p('**Function:** putting a case you were instructed to put, and naming its limits   ·   **Grammar:** marking the instruction without disowning the work   ·   **Pronunciation:** the instruction named once, flatly, and not repeated'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A describes a case they were **told** to make at work. ⚠ **B asks three questions: whose case was it, did you say you had been asked, and what did you refuse to do?** **The third is the one nobody has an answer to** — **because most people have never decided in advance where their line is.**'));
out.push(board('I personally think it is nonsense, but I have been told to say it.', 'I am instructed to put the section\'s case for weekly deliveries, and I have put it as well as I can.'));
out.push(p('**b**  Which marks the instruction without disowning the work? **1** _I personally think this is nonsense, but I have been told to say it._  **2** _I am instructed to put the section\'s case for weekly deliveries, and I have put it as well as I can._  **3** _The section says weekly deliveries are better._  **4** _This is the section\'s case and I was asked to make it; the figures are checked, and my own view is not what you are being given._  **5** _Apparently we want weekly deliveries now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Ms Huda say an instructed case must say, and where does she say the line is?   **A** the name, the date and the file; the line is whatever your superior decides   **B** **whose case it is, that you were asked to put it, and what you will not do** — and **the line is between arguing for a position and stating as a fact something you know to be untrue**   **C** the reason, the cost and the deadline; there is no line'));
out.push(p('**b**  Listen again. **1** What happened to Mr Barghouti in 2019?   **2** What does Ms Huda say about _I personally think this is nonsense, but_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  I am instructed', [
  ['Ms Huda', 'Mr Barghouti. Half your working life has been spent putting cases you were told to put. What goes wrong?'],
  ['Adnan', '**Two things, and I have done both.** ⚠ **The first is the sneer** — _I personally think this is nonsense, but I have been told to say it._ **The second is worse and I did it in 2019.**'],
  ['Ms Huda', '**Take the sneer first. What is wrong with it?**'],
  ['Adnan', '⚠ **It disowns the work and keeps the credit for being clever.** **The case is still badly put, the section still loses, and I have told the room I am above it.**'],
  ['Ms Huda', '**And every reader can see what it is for.** ⚠ **It protects the speaker and nobody else** — **and the person whose case it was has been put in front of a committee by somebody signalling that they do not believe it.**'],
  ['Dima', 'So what is the honest form?'],
  ['Adnan', '**Three things.** ⚠ **Whose case it is. That I was asked to put it. And what I will not do.** _I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are mine and checked._'],
  ['Ms Huda', '**And the third is the one nobody has prepared.** ⚠ **Where is your line, and did you decide it before you needed it?**'],
  ['Adnan', '**I did not, in 2019.** ⚠ **I was told to put a case that rested on a figure I had not checked, and I put it.** **Somebody else checked it in four minutes.**'],
  ['Ms Huda', '**And?**'],
  ['Adnan', '⚠ **The whole tender was reopened and we lost it.** **The figure was wrong by about a fifth.** **And the person who had told me to use it was the person it cost most** — **which is the thing I had not understood at all.**'],
  ['Ms Huda', '**Say that again, because it is the finding of this cycle.** ⚠ **A case that rests on a figure you have not checked will fail at the first check** — **and the person who told you to put it is the one who pays.** **Checking the figure is not disloyalty; it is the only loyal thing available.**'],
  ['Rim', 'And if the figure is wrong and they still want it?'],
  ['Ms Huda', '**Then you have reached the line, and it is a narrow one.** ⚠ **You may argue for a position you do not hold, as well as it can be argued.** **You may not state as a fact something you know to be untrue.** **The first is advocacy and the second is not.**'],
  ['Jad', 'How do you say that to the person who told you?'],
  ['Ms Huda', '**In writing, once, before the meeting, and without a speech.** ⚠ _I shall put the case for weekly deliveries. I cannot put the figure of nine per cent; our own book gives eleven._ **Two sentences, and you have not refused the work.**'],
  ['Bassel', 'And if they insist?'],
  ['Ms Huda', '**Then the figure goes in with its source named, which is 16.3.** ⚠ _On the section\'s figure of nine per cent._ **Four words, and the reader can see whose number is doing the work** — **and that is as far as you can go without lying or walking out.**'],
  ['Mazen', 'And saying the instruction out loud?'],
  ['Ms Huda', '🔊 **Once, flatly, at the start, and never again.** ⚠ _I am instructed to put the section\'s case._ **Said twice it becomes the sneer**; **said at the end it looks like an escape** — **and said in a particular tone it tells the committee exactly what you think, which is the thing you were asked not to do.**'],
]));
out.push(sp());
out.push(box('Language box – the case you were told to make', [
  '**Three things, and the third is the one nobody has prepared.** ⚠ **1 Whose case it is.** **2 That you were asked to put it.** **3 What you will not do.**',
  '**The sneer is the commonest failure and it is not modesty.** ⚠ _I personally think this is nonsense, but I have been told to say it._ **It disowns the work and keeps the credit for being clever** — **the case is still badly put, the section still loses, and the room has been told you are above it.**',
  '**The honest form is flat and it is three clauses.** _I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are mine and checked._ ⚠ **Nothing in it tells the committee what you think, which is correct.**',
  '⚠ **A case that rests on a figure you have not checked will fail at the first check** — **and the person who told you to put it is the one who pays.** **Checking the figure is not disloyalty; it is the only loyal thing available.**',
  '**The line, and it is narrow.** ⚠ **You may argue for a position you do not hold, as well as it can be argued.** **You may not state as a fact something you know to be untrue.** **The first is advocacy and the second is not.**',
  '**How the line is said: in writing, once, before the meeting, and without a speech.** ⚠ _I shall put the case for weekly deliveries. I cannot put the figure of nine per cent; our own book gives eleven._ **Two sentences, and you have not refused the work.**',
  '**And if they insist, the figure goes in with its source named.** ⚠ _On the section\'s figure of nine per cent._ **Four words, and the reader can see whose number is doing the work** — **which is as far as you can go without lying or walking out.**',
  '**Pronunciation.** 🔊 **Track 17.8** **Once, flatly, at the start, and never again.** ⚠ _I am instructed to put the section\'s case._ **Said twice it becomes the sneer; said at the end it looks like an escape** — **and said in a particular tone it tells the committee exactly what you think, which is what you were asked not to do.**',
  '**Practise:** Put an instructed case in three clauses. **1** whose, asked, and checked  **2** with a figure you have verified  **3** with a figure you refuse, and the two sentences  **4** the sneer, so that you hear it  **5** the source named because they insisted',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the instruction from the card. B puts the case **in three clauses** — **whose, asked, and what they will not do.** ⚠ **Two rows on each card contain a figure the speaker has reason to doubt**, and B must give the two sentences that refuse it without refusing the work. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the instruction)_ **Put the case for __________.**'],
  ['B', '**I am instructed to put __________\'s case for __________; I have put it as well as I can; __________.**'],
]));
out.push(table(['Card A – the instruction', 'Card B – the instruction'], [
  ['_Put the case for weekly deliveries._', '_Put the case for keeping the second signature._'],
  ['_⚠ Say the saving is nine per cent._', '_⚠ Say no other supplier can meet the date._'],
  ['_Put the case for the morning analyser shift._', '_Put the case for charging for the archive._'],
  ['_⚠ Say the reject rate has halved._', '_⚠ Say the forms take four minutes._'],
  ['_Put the case for refusing rush work._', '_Put the case for one-page assessments._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three clauses, and for the doubtful rows the two refusing sentences. ⚠ **The four rows marked ⚠ are not instructions to argue; they are instructions to assert.** **That is the line, and the pairs must find it without a speech:** _I shall put the case; I cannot put the figure, our own book gives eleven._ **A pair that delivers a lecture about integrity will not be asked again.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a case you have been **told** to make and put it in three clauses. ⚠ **Then write your line in advance** — **the thing you would not do** — **in one sentence, as though you were handing it to the person who gave the instruction.**'));
out.push(p('**b**  Swap and perform. Your partner reads your case **with the instruction said once at the start**, and then **with the sneer attached.** ⚠ They say what the committee would conclude from each.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan has spent half his working life putting cases he was told to put, and he says two things go wrong, and he has done both. The first is the sneer — I personally think this is nonsense, but I have been told to say it — which disowns the work and keeps the credit for being clever: the case is still badly put, the section still loses, and he has told the room he is above it. Dima asked what the honest form is, and it is three things: whose case it is, that he was asked to put it, and what he will not do. I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are mine and checked. And the third is the one nobody has prepared — where is your line, and did you decide it before you needed it? He had not, in 2019. He was told to put a case that rested on a figure he had not checked, and he put it, and somebody else checked it in four minutes. The whole tender was reopened and they lost it, the figure being wrong by about a fifth, and the person who had told him to use it was the person it cost most, which is the thing he had not understood at all. Which is the finding of the cycle: a case that rests on a figure you have not checked will fail at the first check, and the person who told you to put it is the one who pays, so checking the figure is not disloyalty but the only loyal thing available. Rim asked what happens if the figure is wrong and they still want it, and then you have reached the line, and it is a narrow one: you may argue for a position you do not hold, as well as it can be argued, and you may not state as a fact something you know to be untrue. Jad asked how you say that to the person who told you, and in writing, once, before the meeting, and without a speech: I shall put the case for weekly deliveries, I cannot put the figure of nine per cent, our own book gives eleven. Two sentences, and you have not refused the work. Bassel asked what happens if they insist, and then the figure goes in with its source named, which is 16.3 — on the section\'s figure of nine per cent, four words, and the reader can see whose number is doing the work. And Mazen asked about saying the instruction out loud: once, flatly, at the start, and never again._'));
out.push(p('**Listener task:** write your partner\'s three clauses and the line they decided in advance.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan sends before a meeting at which he will put a case he does not hold. Answer the questions.'));
out.push(model([
  '**BEFORE THURSDAY: THE WEEKLY DELIVERY CASE** · A. Barghouti · 10 April · _to Mr Saqqal_',
  '**I shall put the section\'s case for weekly deliveries on Thursday and I shall put it as well as I can.** ⚠ **There is one figure in it I cannot say, and this note is so that you hear it from me now rather than from the committee then.**',
  '**What I shall say, and it is a good case.** **Four fewer gate movements a week, one driver released for other work on three days, and a reduction in the paperwork from twenty-two forms a month to five.** ⚠ **The last figure is the strongest thing we have and I have checked it twice.**',
  '**The figure I cannot say.** **The draft puts the saving at nine per cent.** ⚠ **Our own goods-in book gives eleven per cent over the same four months, and eleven is better for us than nine** — **so I do not understand where nine came from, and until I do I shall not read it out.** **If it is nine for a reason I have not seen, tell me the reason and I shall say nine.**',
  '**What I am not doing.** ⚠ **I am not refusing the work and I am not going to the meeting to lose it.** **I shall open by saying I am instructed, once, and then put the case for twenty minutes without saying it again.**',
  '**And the thing I have learned to put in writing first, because of 2019.** ⚠ **In 2019 I put a case that rested on a figure I had not checked.** **It was checked by the other side in four minutes, the tender was reopened, and we lost it.** **The figure was wrong by about a fifth and the person it cost most was the person who had given it to me.** **That is why this note exists and why it is dull.**',
  '**What the committee will ask, and I should like an answer before Thursday.** ⚠ **They will ask what happens to the Monday consignments in a week with a public holiday.** **I have no answer to that and the case is weaker for it.** **If the section has one, it is worth more than the ninth per cent.**',
  '**And one sentence of my own, which I shall not say on Thursday.** ⚠ **You know I would keep daily deliveries.** **That is not what you asked me for and it will not be in the room** — **but it is in this note, once, so that nobody has to guess.**',
]));
out.push(item('1', 'Which figure will he not say, and why?'));
out.push(item('2', 'What does he say happened in 2019, and who paid for it?'));
out.push(item('3', 'What will the committee ask, and what does he say about his own view?'));
out.push(writers([
  'A note before putting a case you do not hold: **what you will do, in the first line** → **what you will say, and that it is good** → **the figure you cannot say, with your own source** → **what you are not doing** → **why you write this note at all** → **the question the other side will ask, which you cannot answer** → **and your own view, once, in writing and not in the room.**',
  '⚠ **Commit to doing the work before you raise the problem.** _I shall put the case and I shall put it as well as I can._ **A note that opens with the objection reads as a refusal being negotiated.**',
  '**Give your figure and theirs, with both sources.** _The draft puts the saving at nine per cent; our own book gives eleven._ ⚠ **And leave the door open:** _if it is nine for a reason I have not seen, tell me the reason and I shall say nine._',
  '**Price the old mistake rather than describing it.** _Wrong by about a fifth; the tender reopened; the person it cost most was the person who gave me the figure._ ⚠ **Then say what the price bought.**',
  '⚠ And **put your own view once, in writing, where the room will not hear it.** _You know I would keep daily deliveries. That is not what you asked me for and it will not be in the room._ **It is the sentence that makes the other eight paragraphs believable**, and it belongs in exactly one place.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note before putting a case you do not hold (80 words or more).'));
out.push(p('**BEFORE ______________: THE ______________ CASE** · ______________ · _to ______________   **I shall put ______________\'s case for ______________ and I shall put it as well as I can.** ⚠ **There is one ______________ I cannot ______________.**   **What I shall say, and it is a good case.** ______________. ⚠ **The strongest thing we have is ______________ and I have checked it ______________.**   **The figure I cannot say.** **The draft puts ______________ at ______________.** ⚠ **Our own ______________ gives ______________.** **If it is ______ for a reason I have not seen, ______________.**   **What I am not doing.** ⚠ ______________.   **And why this note exists.** ⚠ **In ______ I ______________.** **It cost ______________, and the person it cost most was ______________.**   **What they will ask, and I have no answer.** ⚠ ______________.   **And one sentence of my own, which I shall not say in the room.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The work committed to in the first line, before the objection',
  'Both figures, with both sources, and the door left open',
  'The old mistake priced, and what the price bought',
  'Your own view once, in writing, not in the room',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _figure I cannot say_ paragraph**, and the room says whether it reads as a refusal or as a check.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the work committed to first, both figures with sources, the old mistake priced, and your own view in exactly one place.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the work committed to before the objection, both figures with sources, the old mistake priced, and your own view once and in writing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your case twice: the instruction once at the start, then the same case with the sneer attached.** ⚠ **The room says what a committee would conclude from each** — **and the second conclusion is always about the speaker and never about the case.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **the person who told you to put it is the one who pays.**'));
out.push(hw('Write the note (80+ words). ⚠ Then write your line, before you need it: **the thing you would not do, in one sentence.** **Keep it where you can find it, because at the meeting there is no time to work it out.** **17.5 separates the argument from the arguer** — **which is the skill that lets you do all of this without making enemies of the people whose cases you put.** ⚠ **And bring one argument you have heard attacked by way of the person who made it.**'));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  The argument and the arguer'));
out.push(p('**Function:** taking issue with the argument and not with the person making it   ·   **Grammar:** the argument named without the person attached to it   ·   **Pronunciation:** the disagreement said with no name in the sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A makes a claim. ⚠ **B disagrees twice: once with the person in the sentence, once with the person taken out.** **Count the words.** **In most pairs the first version is shorter, and that is the whole problem** — **the quicker move is the one that settles nothing.**'));
out.push(board('You would say that; you work in the workshop.', 'The argument is that a reprint costs a month\'s margin. It does — and the margin is not the only cost in the sentence.'));
out.push(p('**b**  Which takes issue with the argument? **1** _You would say that; you work in the workshop._  **2** _The argument is that a reprint costs a month\'s margin. It does, and the margin is not the only cost in the sentence._  **3** _People in the registry always want more forms._  **4** _The claim that the forms take four minutes is wrong: I timed eleven of them and the median was nine._  **5** _He said the opposite in 2019._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say attacking the arguer does, and what does she say about using somebody\'s past record?   **A** it wins the argument; a record is always relevant   **B** **it ends the argument without settling it** — and **a record bears on how carefully you should check what somebody says, and not on whether this argument is true**   **C** it is sometimes necessary; a record should never be mentioned'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say happened fourteen months after she spiked the letter?   **2** What does Ms Huda say to do when the other side\'s interest is genuinely relevant?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  Fourteen months later', [
  ['Ms Huda', 'Mrs Khoury. You spiked a letter once and it came back.'],
  ['Dima', '**In 2022. A letter saying our figures for the water supply were out by a factor of ten.** ⚠ **I wrote two lines of a reply in my head and spiked it: the man had written to us eleven times that year about everything.**'],
  ['Ms Huda', '**Did you check the figure?**'],
  ['Dima', '⚠ **No. I answered the eleven letters and not the one in my hand.**'],
  ['Ms Huda', '**And fourteen months later?**'],
  ['Dima', '**The same point, from the ministry, in a circular.** ⚠ **It was right.** **We had printed the figure four more times by then, and the correction ran to half a column.**'],
  ['Ms Huda', '**So the cost of the shortcut was four reprints and a correction.** ⚠ **And this is the shape to carry out of the cycle: attacking the arguer ends the argument without settling it** — **and the argument comes back, because nothing was ever answered.**'],
  ['Omar', 'What are the shapes? I want to be able to hear them.'],
  ['Ms Huda', '**Four, and the fourth is the subtle one.** ⚠ **The motive** — _you only say that because_. **The person** — _coming from you_. **The group** — _people in your office always_. **And the record** — _he said the opposite in 2019_.'],
  ['Adnan', 'The record one sounds legitimate.'],
  ['Ms Huda', '**Which is why it is the dangerous one.** ⚠ **A person\'s record bears on how carefully you should check what they say.** **It does not bear on whether this particular argument is true** — **and reaching for it is nearly always a way of not checking.**'],
  ['Dima', '**It was exactly that. Eleven letters was my reason for not spending four minutes.**'],
  ['Ms Huda', '**And the repair is smaller than anybody expects.** ⚠ **Say _the argument_ and not _your argument_.** **Two words, and the room changes** — **because the thing on the table stops being a person\'s property.**'],
  ['Rim', 'And when the interest really is relevant? A supplier arguing for weekly deliveries has an interest.'],
  ['Ms Huda', '**He has, and you say so once, as a fact, and then you answer the argument anyway.** ⚠ _He supplies us weekly and the change would suit him._ **One sentence. Then the gate movements, the driver and the twenty-two forms, on their merits.**'],
  ['Hiba', 'Why answer it at all if the interest is obvious?'],
  ['Ms Huda', '⚠ **Because an argument with an interest behind it can still be true** — **and if you answer only the interest you have answered nothing.** **Mrs Khoury\'s eleven letters were a real pattern and the twelfth letter was still right.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **With no name in the sentence at all, and the stress on the claim rather than on the pronoun.** ⚠ _The claim that the forms take four minutes is wrong._ **Not _**your** claim about the forms is wrong_** — **the stressed pronoun puts a person in a sentence you had just managed to keep them out of.**'],
]));
out.push(sp());
out.push(box('Language box – the argument and the arguer', [
  '⚠ **Attacking the arguer ends the argument without settling it** — **and the argument comes back, because nothing was ever answered.** **Mrs Khoury\'s came back in fourteen months, from the ministry, and it was right.**',
  '**Four shapes, and the fourth is the subtle one.** ⚠ **The motive** — _you only say that because_. **The person** — _coming from you_. **The group** — _people in your office always_. **The record** — _he said the opposite in 2019_.',
  '**Why the record is the dangerous one.** ⚠ **A person\'s record bears on how carefully you should check what they say.** **It does not bear on whether this argument is true** — **and reaching for it is nearly always a way of not checking.** **Eleven letters was a reason for not spending four minutes.**',
  '**The repair is two words.** ⚠ **Say _the argument_ and not _your argument_.** **The thing on the table stops being a person\'s property, and the room changes.**',
  '**When the interest really is relevant, say it once as a fact and then answer anyway.** ⚠ _He supplies us weekly and the change would suit him._ **One sentence. Then the gate movements, the driver and the twenty-two forms, on their merits.**',
  '**The version with no name in it is longer and much harder to dismiss.** ⚠ **A disagreement with a name in it can be answered by defending the name**, which is the argument everybody would rather have. **Take the name out and there is nothing left to do but the work.**',
  '**The shapes to use.** _The argument is that ______. It does, and ______._ _The claim that ______ is wrong: ______._ _______ would suit him, and the argument still stands or falls on ______._ ⚠ **And the ones to hear yourself saying:** _you would say that_ · _coming from you_ · _people in your office always_ · _he said the opposite in_.',
  '**Pronunciation.** 🔊 **Track 17.10** **No name in the sentence, and the stress on the claim rather than on the pronoun.** ⚠ _The claim that the forms take four minutes is wrong._ **Not _**your** claim about the forms is wrong_** — **a stressed pronoun puts a person back into a sentence you had just managed to keep them out of.**',
  '**Practise:** Disagree with the argument and not the arguer. **1** a claim about a figure  **2** a claim about time  **3** one where the interest is real, named once  **4** one with the person in it, so that you hear it  **5** one where you are tempted to use a record',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the disagreement from the card. B **rebuilds it with the person taken out**, and says what would have to be checked to settle it. ⚠ **Two rows on each card involve a real interest**, and B must name it once and then answer the argument anyway. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the disagreement)_ __________.'],
  ['B', '**The argument is that __________.** **To settle it we should have to check __________.**'],
]));
out.push(table(['Card A – the disagreement', 'Card B – the disagreement'], [
  ['_You would say that; you work in the workshop._', '_Coming from you, that is a strange thing to argue._'],
  ['_⚠ He supplies us weekly, so of course he wants weekly._', '_⚠ She wrote the form, so of course she defends it._'],
  ['_People in the registry always want more forms._', '_He said the opposite in 2019._'],
  ['_⚠ The driver only wants the rule dropped to save himself two days._', '_⚠ The relief clerk blames the form because it was his week._'],
  ['_Nobody who has not stood on a gate should have a view._', '_That is the sort of thing they say every spring._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the rebuilt argument and what would settle it. ⚠ **The four rows marked ⚠ contain a genuine interest and the pairs will think naming it is the answer.** **It is one sentence, and then the argument stands on its own figures** — **the driver\'s two days are real whether or not they are his.** **A pair that stops after naming the interest has made the cycle\'s error in its politest form.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take an argument you have dismissed through the person who made it. ⚠ **Write it out with the person removed, at its strongest** — **and then write what you would have to check to settle it.**'));
out.push(p('**b**  Swap and perform. Your partner reads your disagreement **with the person put back in**, in the shortest form they can manage. ⚠ Then you both say which version could be answered by defending a name.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima spiked a letter in 2022 saying the figures for the water supply were out by a factor of ten. She wrote two lines of a reply in her head and spiked it, because the man had written to them eleven times that year about everything. She did not check the figure: she answered the eleven letters and not the one in her hand. Fourteen months later the same point came from the ministry, in a circular, and it was right — they had printed the figure four more times by then and the correction ran to half a column. So the cost of the shortcut was four reprints and a correction, and that is the shape to carry out of the cycle: attacking the arguer ends the argument without settling it, and the argument comes back, because nothing was ever answered. Omar asked what the shapes are, so as to be able to hear them, and there are four, the fourth being the subtle one: the motive, you only say that because; the person, coming from you; the group, people in your office always; and the record, he said the opposite in 2019. Adnan said the record one sounds legitimate, which is why it is the dangerous one: a person\'s record bears on how carefully you should check what they say, and it does not bear on whether this particular argument is true, and reaching for it is nearly always a way of not checking. Dima said it was exactly that — eleven letters was her reason for not spending four minutes. And the repair is smaller than anybody expects: say the argument and not your argument, two words, and the room changes, because the thing on the table stops being a person\'s property. Rim asked about the case where the interest really is relevant, since a supplier arguing for weekly deliveries has one, and he has, and you say so once as a fact and then answer the argument anyway: he supplies us weekly and the change would suit him, one sentence, then the gate movements and the driver and the twenty-two forms, on their merits. Hiba asked why answer it at all if the interest is obvious, and because an argument with an interest behind it can still be true, and if you answer only the interest you have answered nothing — the eleven letters were a real pattern and the twelfth letter was still right. And Mazen asked about saying it out loud, which is done with no name in the sentence and the stress on the claim rather than on the pronoun._'));
out.push(p('**Listener task:** write your partner\'s rebuilt argument and what they would have to check to settle it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima writes for the sub-editors after the circular arrives. Answer the questions.'));
out.push(model([
  '**THE TWELFTH LETTER** · D. Khoury · 12 April · _for the sub-editors, and for the spike_',
  '**In March 2022 a man wrote to say our water figure was out by a factor of ten, and I spiked it because he had written eleven times that year.** ⚠ **He was right.** **The ministry said the same thing in a circular fourteen months later and we had printed the figure four more times.**',
  '**What I did, exactly.** **I read the letter, formed a reply in my head, and spiked it without checking the number.** ⚠ **The reply I formed was about him and not about the figure** — **eleven letters, one of them about the typeface.**',
  '**Why that felt reasonable at the time, which is the part worth writing down.** ⚠ **A pattern of eleven letters is real information and I was not inventing it.** **It tells you how carefully to check what somebody sends.** **It does not tell you whether the twelfth letter is true** — **and I used it for the second thing, which it cannot do.**',
  '**What the shortcut saved and what it cost.** ⚠ **It saved four minutes: the figure is in the yearbook and I have the yearbook.** **It cost four reprints of a wrong number, half a column of correction, and the only reader who had noticed.**',
  '**What I should have written to him, and it is two lines.** ⚠ _Thank you — I have checked the yearbook and you are right; we shall correct it on Tuesday._ **Fourteen words.** **The eleven letters could have stayed exactly where they were, in my judgement about how fast to check and not in my judgement about whether he was right.**',
  '**And the thing for the spike itself.** **We spike letters, and we should.** ⚠ **But the rule I am proposing is narrow: if a letter contains a number that we have printed, somebody checks the number before the letter is spiked.** **That is four minutes a letter and about a dozen letters a year.** **Forty-eight minutes against half a column.**',
  '**One more thing, since I am writing it down anyway.** ⚠ **He has written five times since, and two of those five were also right.** **I do not know what to do with that except to say it** — **the man whose letters I was using as a reason not to read him has a better record on figures than the section does.**',
]));
out.push(item('1', 'What did the pattern of eleven letters tell her, and what did she use it for?'));
out.push(item('2', 'What did the shortcut save and what did it cost?'));
out.push(item('3', 'What rule is she proposing, and what does she say about his letters since?'));
out.push(writers([
  'A note about an argument you dismissed through its author: **what you did and that he was right, in the first lines** → **exactly what you did, with the reply you formed** → **why it felt reasonable, taken seriously** → **what the shortcut saved and what it cost** → **what you should have written, and its word-count** → **a narrow rule** → **and one more thing you do not know what to do with.**',
  '⚠ **Concede in the first three words of the second sentence.** _He was right._ **A page that reaches the concession in paragraph four has spent three paragraphs explaining why it was reasonable to be wrong**, and the reader has stopped.',
  '**Take your own bad reason seriously before you dismiss it.** _A pattern of eleven letters is real information and I was not inventing it._ ⚠ **Then separate its two jobs:** _it tells you how carefully to check and not whether the twelfth letter is true._ **That distinction is the whole page.**',
  '**Price both sides of the shortcut in the same units.** _Four minutes against four reprints, half a column, and the only reader who had noticed._ ⚠ **And propose the rule in minutes a year** — _forty-eight minutes against half a column_ — **because that is the form in which a rule gets adopted.**',
  '⚠ And **end on the thing you cannot resolve.** _Two of his five letters since were also right._ **A page that ties itself up has usually left something out**, and the unresolved sentence is the one a colleague will remember.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about an argument you dismissed through its author (80 words or more).'));
out.push(p('**THE ______________ LETTER** · ______________ · ______________   **In ______________ ______________ said ______________, and I ______________ because ______________.** ⚠ **______________ was right.**   **What I did, exactly.** ______________. ⚠ **The reply I formed was about ______________ and not about ______________.**   **Why that felt reasonable at the time.** ⚠ **______________ is real information and I was not inventing it.** **It tells you ______________.** **It does not tell you ______________.**   **What the shortcut saved and what it cost.** ⚠ **It saved ______________.** **It cost ______________.**   **What I should have written.** ⚠ _"______________."_ **______ words.**   **And the rule I am proposing.** ⚠ ______________. **______ minutes against ______________.**   **One more thing.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The concession inside the first two sentences',
  'Your own bad reason taken seriously, then split in two',
  'Both sides of the shortcut priced in the same units',
  'One thing you do not know what to do with',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the two lines they should have written**, and the room counts the words and says what the delay bought.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the concession first, the bad reason split in two, both sides priced, and something unresolved at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the concession in the first two sentences, your own bad reason split into its two jobs, both sides priced in the same units, and one unresolved thing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your disagreement twice: with the person in the sentence, then with the person taken out.** ⚠ **The room says which one could be answered by defending a name** — **and the first can, every time, which is why it is the version people reach for.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **the man whose letters I was using as a reason not to read him has a better record on figures than the section does.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take **the last argument you dismissed** and ask which of the four shapes you used — **the motive, the person, the group or the record** — **and what you would have had to check instead.** **Put a time on the checking.** **It is usually four minutes.** **17.6 puts the whole thing on one page**: a case you do not hold, the other side at its strongest, your condition, and your line.'));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  The whole brief'));
out.push(p('**Function:** the whole brief — a case you do not hold, on one page   ·   **Grammar:** the five parts, in that order   ·   **Pronunciation:** reading the brief aloud as the person whose case it is'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five parts of a brief, in order.** ⚠ **Then say which of the five is missing from the last argument you put in writing.** **It is the condition in most cases and the counter in the rest** — **and almost nobody has ever left out their own view.**'));
out.push(board('Here is my view, and here is what the other side says.', 'This is the laboratory\'s case and I was asked to put it. Here it is at full strength. Here is the best argument against it. Here is what would settle it. My own view is at the end.'));
out.push(p('**b**  Which order is right? **1** _your view · the case · the counter · the attribution · the condition_  **2** _the attribution · the case at full strength · the strongest counter · the condition · your own view_  **3** _the case · the attribution · your view · the counter · the condition_  **4** _the attribution · your own view · the case · the counter · the condition_  **5** _the attribution · the case · the condition · your own view · the counter_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What test does Ms Huda give for a whole brief, and what does she say about where your own view goes?   **A** the chairman must approve it; your view goes first   **B** **both sides must say their own case is well put** — and **your own view goes once, at the end, after the reader has had the case**   **C** it must be anonymous; your view is left out altogether'));
out.push(p('**b**  Listen again. **1** What happened when Mrs Sabbagh gave her brief to both sides?   **2** What does Ms Huda say about a brief that only one side signs?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  Both sides sign it', [
  ['Ms Huda', 'Mrs Sabbagh. Your company maintains the analysers at Suwayda. You wrote a brief on the afternoon question there and you did something unusual with it.'],
  ['Nour', '**I gave it to both sides before the meeting and asked each of them one question: is your case well put here?**'],
  ['Ms Huda', '**And?**'],
  ['Nour', '⚠ **The morning side said yes.** **The afternoon side said no, and gave me a figure I had not used** — **the analyser reaches temperature in forty minutes and the morning shift spends those forty minutes on something else.**'],
  ['Ms Huda', '**So you had put one case well and one case fairly.** ⚠ **Those are not the same and the difference is one figure.**'],
  ['Nour', '**I put it in and sent it again.** **Both said yes.** ⚠ **And then the meeting took eighteen minutes, which it has never done.**'],
  ['Ms Huda', '**Which is the test for the whole page.** ⚠ **Both sides must say their own case is well put.** **A brief that only one side signs is a submission with a brief\'s manners.**'],
  ['Dima', 'And the five parts?'],
  ['Nour', '**Whose case it is. The case at full strength. The strongest argument against it.** ⚠ **What would settle it. And my own view, once, at the end.**'],
  ['Omar', 'Why does the view go last and not first?'],
  ['Ms Huda', '**Because a reader who has your view first reads everything after it as support for you.** ⚠ **It is 16.3 at the level of the page** — **the working before the verdict, every time.** **Your view is a verdict and it goes fourth or fifth, never first.**'],
  ['Adnan', 'And leaving it out altogether?'],
  ['Ms Huda', '**Worse, and students always propose it.** ⚠ **A brief with no view in it makes the reader hunt for one, and they will find it** — **in your adjectives, in which case you got three sentences and in which case you got two.** **Give it once, plainly, where it cannot contaminate the case.**'],
  ['Hiba', 'And the condition — whose condition is it?'],
  ['Ms Huda', '**Both.** ⚠ _What would settle it: four months of afternoon running, with the temperature log._ **Not what would change your mind, in a brief** — **what would settle it for the room**, and then each side says whether they would accept that.'],
  ['Bassel', 'And if one side will not accept any condition?'],
  ['Ms Huda', '**Then you have found the real disagreement and it is not about the analyser.** ⚠ **Put that in the brief as the last finding, without a complaint in it** — **and the meeting is then about the right thing, which is 17.3.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **Each case read as the person whose case it is, and both at the same speed.** ⚠ **A brief read in your own voice throughout has one case in it** — **the other one, read faster and flatter, is the one you do not hold, and everybody can hear which that is.**'],
]));
out.push(sp());
out.push(box('Language box – the whole brief', [
  '**Five parts, in this order, on one page.** **1 Whose case it is.** **2 The case at full strength.** ⚠ **3 The strongest argument against it.** **4 What would settle it.** **5 Your own view, once, at the end.**',
  '**The test for the whole page, and it is one question asked twice.** ⚠ **Both sides must say their own case is well put.** **A brief that only one side signs is a submission with a brief\'s manners.**',
  '**Well put and fairly put are not the same, and the difference is usually one figure.** ⚠ **The afternoon side gave Mrs Sabbagh the forty minutes to temperature**, which she had not used — **and after it went in, the meeting took eighteen minutes.**',
  '**Why your view goes last.** ⚠ **A reader who has your view first reads everything after it as support for you.** **It is 16.3 at the level of the page: the working before the verdict, every time.**',
  '**And leaving it out is worse than giving it.** ⚠ **A brief with no view makes the reader hunt for one, and they will find it** — **in your adjectives, and in which case got three sentences and which got two.** **Give it once, plainly, where it cannot contaminate the case.**',
  '**One page, which is 16.6 and is not negotiable.** ⚠ **A brief of four pages is read by nobody, and a brief read by nobody has put neither case.**',
  '**The condition belongs to the room, not to you.** ⚠ _What would settle it: four months of afternoon running, with the temperature log._ **Then each side says whether they would accept that** — **and a side that will accept no condition has told you the disagreement is elsewhere.**',
  '**Pronunciation.** 🔊 **Track 17.12** **Each case read as the person whose case it is, and both at the same speed.** ⚠ **A brief read in your own voice throughout has one case in it** — **the other, read faster and flatter, is the one you do not hold, and everybody can hear which.**',
  '**Practise:** The five parts, one page. **1** the attribution in one line  **2** a case at full strength, with its source  **3** the strongest counter  **4** what would settle it  **5** your own view in one sentence at the end',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from a brief. B says **which of the five parts it is, whether it is in the right place, and what must come before it.** ⚠ **Two rows on each card are the writer\'s own view wearing a case\'s clothes.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', 'Part ______. **Right place / not.** **Before it:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_This is the laboratory\'s case and I was asked to put it._', '_What would settle it: four months of afternoon running._'],
  ['_⚠ Obviously the morning arrangement has served us well._', '_⚠ The sensible course is clearly to leave it alone._'],
  ['_The analyser reaches temperature in forty minutes._', '_The strongest argument against is the two-hour overlap._'],
  ['_⚠ Nobody could seriously want this changed in June._', '_⚠ The right answer here is not really in doubt._'],
  ['_My own view, for what it is worth, is at the end._', '_The morning side would accept a four-month trial._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are the writer\'s view dressed as something else** — _obviously_, _clearly_, _nobody could seriously_, _not really in doubt_ — **and each of them is part five in the wrong place and the wrong clothes.** **Make the listeners name the word that gives it away**, because that word is what a reader notices first.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Lay out the five parts of a brief on a live question at your work, **one line each.** ⚠ **Then strike out every _obviously_, _clearly_ and _of course_** and see whether part five is still the only place your view appears.'));
out.push(p('**b**  Swap. **Your partner reads each case as the person whose case it is**, at the same speed. ⚠ Then they say which of the two you hold, and how they knew.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Nour wrote a brief on the afternoon analyser question and did something unusual with it: she gave it to both sides before the meeting and asked each one question — is your case well put here? The morning side said yes. The afternoon side said no, and gave her a figure she had not used, which is that the analyser reaches temperature in forty minutes and the morning shift spends those forty minutes on something else. So she had put one case well and one case fairly, and those are not the same, and the difference is one figure. She put it in and sent it again, both said yes, and then the meeting took eighteen minutes, which it has never done. Which is the test for the whole page: both sides must say their own case is well put, and a brief that only one side signs is a submission with a brief’s manners. Dima asked about the five parts, and they are whose case it is, the case at full strength, the strongest argument against it, what would settle it, and her own view, once, at the end. Omar asked why the view goes last and not first, and because a reader who has your view first reads everything after it as support for you: it is 16.3 at the level of the page, the working before the verdict every time, and your view is a verdict. Adnan asked about leaving it out altogether, which is worse, and students always propose it — a brief with no view in it makes the reader hunt for one and they will find it, in your adjectives and in which case got three sentences and which got two. Give it once, plainly, where it cannot contaminate the case. Hiba asked whose condition the condition is, and both — what would settle it for the room, not what would change your mind, and then each side says whether they would accept that. Bassel asked what happens if one side will not accept any condition, and then you have found the real disagreement and it is not about the analyser: put that in the brief as the last finding, without a complaint in it, and the meeting is then about the right thing. And Mazen asked about reading it aloud, which is each case read as the person whose case it is, both at the same speed, because a brief read in your own voice throughout has only one case in it._'));
out.push(p('**Listener task:** write which of the two cases your partner holds, and how you knew.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the brief Nour sends before the meeting. Answer the questions.'));
out.push(model([
  '**BRIEF: THE AFTERNOON ANALYSER QUESTION** · N. Sabbagh · 14 April · _to the five of us, before Tuesday_',
  '**The afternoon side asked me to put their case and the morning side has read this and signed it.** ⚠ **Both of them have told me their own case is well put here.** **My view is at the end and nowhere else.**',
  '**The case for moving the analyser work to the afternoon, at full strength.** **The machine reaches temperature in forty minutes.** ⚠ **In the morning arrangement those forty minutes fall inside the shift and are spent on other work, which means the first four samples of every day are run by somebody who is also doing something else.** **Since Miss Mansour took the afternoon work in August, the afternoon run has had two repeats in thirty-one days against the morning\'s nine in the same period** — **and that figure is from the repeat book, which the morning side keeps.**',
  '**The strongest argument against it.** ⚠ **The two-hour overlap.** **If the analyser runs in the afternoon, the overlap with the day clerk\'s hours drops from three hours to one** — **and the three hours are when queries are settled.** **Mr Rifai puts it at about four queries a day, and he is the person they fall on.** **Nobody on the afternoon side has answered that, including me.**',
  '**What would settle it.** ⚠ _Four months of afternoon running, with the temperature log and the repeat book kept as they are now._ **The afternoon side accepts this.** **The morning side accepts it with one condition of their own: that the four months include a December, because December is the month they say the overlap matters.** **That seems fair to me and I have put it in.**',
  '**And one thing neither side has raised, which I am putting in because it will come up on Tuesday.** ⚠ **Miss Mansour is the only person trained on the afternoon settings.** **If the trial runs for four months and she is away for three weeks of it, the trial is not a trial.** **Somebody should be trained before it starts, and nobody has said who.**',
  '**My own view, once.** ⚠ **I would move it.** **I think the forty minutes is a real figure and the four queries are a real figure and the first is larger** — **but I have not answered Mr Rifai\'s point and the brief says so twice.**',
]));
out.push(item('1', 'What is the figure from the repeat book, and who keeps that book?'));
out.push(item('2', 'What is the strongest argument against, and who has answered it?'));
out.push(item('3', 'What condition does the morning side add, and what has neither side raised?'));
out.push(writers([
  'A brief on one page: **whose case it is, and that both sides have signed it** → **the case at full strength, with a figure and its source** → **the strongest argument against, and who has not answered it** → **what would settle it, and whether each side accepts it** → **anything neither side has raised** → **and your own view, once, at the end.**',
  '⚠ **Say in the first paragraph that both sides have read it.** _Both of them have told me their own case is well put here._ **It is the only sentence that makes the rest of the page worth reading**, and it can only be written if you did the work.',
  '**Take the figure from the other side\'s own records where you can.** _That figure is from the repeat book, which the morning side keeps._ ⚠ **A case built on its opponents\' records cannot be answered by disputing the records.**',
  '**Name who has not answered the counter, and include yourself if that is true.** _Nobody on the afternoon side has answered that, including me._ ⚠ **One clause, and it buys the whole brief its credit.**',
  '⚠ And **keep your own view to one short paragraph, with the unanswered point repeated inside it.** _I would move it… but I have not answered Mr Rifai\'s point and the brief says so twice._ **A view that arrives without its own weakness attached undoes the four parts above it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-page brief (80 words or more).'));
out.push(p('**BRIEF: ______________** · ______________ · _to ______________   **______________ asked me to put their case and ______________ has read this and signed it.** ⚠ **Both have told me their own case is well put here.** **My view is at the end and nowhere else.**   **The case for ______________, at full strength.** ______________. ⚠ **______________, and that figure is from ______________, which ______________ keeps.**   **The strongest argument against it.** ⚠ ______________. **______________ puts it at ______________.** **Nobody on ______________ has answered that, including ______________.**   **What would settle it.** ⚠ _"______________."_ **______________ accepts this.** **______________ accepts it with one condition: ______________.**   **And one thing neither side has raised.** ⚠ ______________.   **My own view, once.** ⚠ ______________, **but ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sides said, in the first paragraph, to have signed it',
  'A figure taken from the other side\'s own records',
  'Who has not answered the counter, yourself included if true',
  'Your view in one paragraph, with its weakness inside it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their own-view paragraph**, and the room says whether it could have been guessed from the four parts above it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full brief (180 words or more), to the shape in the writer\'s box: both signatures claimed, a figure from the other side\'s records, the unanswered counter named, and your view last with its weakness inside it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both sides said to have signed it, a figure from the other side\'s own records, the unanswered counter named, and your view once with its weakness attached.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Your partner reads both cases from your brief, as the people whose cases they are, at the same speed.** ⚠ **Then they say which one you hold and how they knew** — **and it is almost never the view paragraph.** **It is the length, or an adjective, or which case got the sourced figure.** Then the sentence the cycle ends on, which is Mrs Sabbagh\'s: **one case well put and one case fairly put, and the difference was one figure.**'));
out.push(hw('Write the brief (80+ words). ⚠ Then do the thing that makes it a brief: **give it to both sides and ask each one question** — **is your case well put here?** **Bring what the second side added, in their words.** **It is usually a figure and it is usually from their own records.** **17.7 puts you between an advocate and a believer**, which is the only mediation in this book where neither party is in the wrong. ⚠ **And bring a brief or a paper where you could not tell what the writer thought.**'));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: The advocate and the believer'));
out.push(p('**Function:** mediating between somebody who put a case and somebody who holds it   ·   **Recycling:** Unit 17   ·   **Exam practice:** B2 First Reading and Use of English Part 1 · Writing Part 1 (the essay) · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I am instruct to put the section\'s case on Thursday.  **2** The strongest case against me are the two days.  **3** He take issue with the argument and not with the person.  **4** Her refutate of the figure took four minutes.  **5** The claim is not plausibility, and I have checked it twice.  **6** If four months shows fewer than two incomplete, I withdraw it.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the case, and what each side says about it.'));
out.push(box(null, [
  '**ONE CASE, TWO ACCOUNTS** _(an advocate and the man whose case it was, three weeks apart)_',
  '**The post.** _"I am putting the case of the four people who want a charge for the archive, because it is being put badly and it deserves better. The server bill is 1,400,000 pounds a year. Two volunteers have stopped. A charge of 2,000 pounds a download would cover the bill with about a fifth to spare. That is their argument and not mine."_',
  '**The advocate.** _"I did everything this unit teaches. The attribution is in the first sentence. The figures are theirs and checked. I put it at full strength and the two who disagree finally answered it."_',
  '**The man whose case it was.** _"He put it better than I can put it, and the committee has now answered his version. And the part they answered is not the part I care about."_',
  '⚠ **Both accounts are accurate and neither of them is about the post.**',
  '**And the thing the post does not contain.** **Which part of the case its holder would not give up** — **the server bill, or the two volunteers.**',
  '**The question for the cycle.** _Who decides which part of a case matters most — the person who holds it, or the person who puts it?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the post is missing, and what is the one question that would have supplied it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  Which part would you not give up', [
  ['Ms Huda', 'A post that does everything this unit has taught, and the man whose case it was is worse off. Mr Attar — is the post wrong?'],
  ['Jad', 'No. ⚠ **I would write it again**, and Mr Ayoub is right as well, which is the part I did not expect.'],
  ['Tareq', '**He put my case better than I can put it.** ⚠ **And the committee answered the server bill, which I can live without, and never touched the two volunteers, which is the whole reason I started.**'],
  ['Ms Huda', '**Then do the mediation, and it is three moves.** One: **separate what the case says from what its holder wants from it.** ⚠ Two: **find the part the holder would not give up.** Three: **say whether the advocate can supply it.**'],
  ['Dima', 'What does the post say?'],
  ['Jad', '**Three things: the bill, the volunteers, and the arithmetic of a charge.** ⚠ **All of them accurate and all of them his.**'],
  ['Ms Huda', '**And the part Mr Ayoub would not give up?**'],
  ['Tareq', '⚠ **The volunteers.** **Two people did unpaid work for six years and stopped because it was being taken for granted** — **and the charge was never about the bill.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **A case can be put at full strength, with every figure checked, and still be answered on the part its holder does not care about** — **because strength and importance are not the same thing.**'],
  ['Jad', '**And the committee answered the part that was easiest to answer.** ⚠ **Which was the bill, because the bill is a number.**'],
  ['Ms Huda', '**It always is.** ⚠ **A committee answers the answerable part, and if you do not say which part is load-bearing, the answerable part is the one that gets the meeting.**'],
  ['Adnan', 'So the advocate asks one question first.'],
  ['Ms Huda', '**One question, before a word is written.** ⚠ _Which part of this would you not give up?_ **Then that part goes last and plainest, and the rest is support.** **Eight words, and Mr Attar did not ask them.**'],
  ['Jad', '⚠ **I did not ask because I thought asking would make it my case.** **It would have made it more theirs.**'],
  ['Rim', 'And what does the mediator do? Neither of them is wrong.'],
  ['Ms Huda', '⚠ **Name the question and hand it to the person who can answer it** — **and here that person is Mr Ayoub, who has never been asked which part is load-bearing.** **The mediator does not decide which half of somebody\'s case matters to them.**'],
  ['Hiba', 'And the thing we must not do?'],
  ['Ms Huda', '**Two things, and the second looks generous.** ⚠ **Do not improve the post.** **And do not hand the case back to its holder as a solution** — **that returns Mr Ayoub to putting it badly, which is where the unit started.**'],
  ['Mazen', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, and neither reasonable at the other\'s expense.** ⚠ **The advocate\'s account is a description of a method and the believer\'s is a description of a loss** — **and the second is harder to read aloud without sounding aggrieved.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the advocate and the believer', [
  '**The three moves.** **1** **Separate what the case says from what its holder wants from it.** ⚠ **2** **Find the part the holder would not give up.** **3** **Say whether the advocate can supply it.**',
  '⚠ **The finding, and it is new: a case can be put at full strength, with every figure checked, and still be answered on the part its holder does not care about.** **Strength and importance are not the same thing.**',
  '**And the answerable part is the one that gets the meeting.** ⚠ **A committee answers what it can answer** — **usually the number** — **and if nobody has said which part is load-bearing, the number is what the twenty minutes go on.**',
  '**The question the advocate asks before a word is written.** ⚠ _Which part of this would you not give up?_ **Eight words.** **Then that part goes last and plainest, and everything else is support.**',
  '**And asking it does not make the case yours.** ⚠ **Mr Attar did not ask because he thought it would** — **and it would have made the case more theirs, not less.**',
  '**What the mediator does.** ⚠ **Names the question and hands it to the person who can answer it** — **and that person is the holder, who has never been asked which part is load-bearing.** **The mediator does not decide which half of somebody\'s case matters to them.**',
  '**Two things not to do, and the second looks generous.** ⚠ **Do not improve the post** — **it is a good post and redrafting answers nothing.** **And do not hand the case back to its holder as a solution**, which returns them to putting it badly, where the unit started.',
  '**Pronunciation.** 🔊 **Track 17.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The advocate\'s is a description of a method and the believer\'s is a description of a loss** — **and the second is harder to read without sounding aggrieved.** **Read it as a report.**',
  '**And one sentence an advocate can add at the end of any case, which costs nothing and prevents all of this.** ⚠ _The part of this that its holders would not give up is the two volunteers._ **Fourteen words, written after one question has been asked** — **and the committee then has to spend its twenty minutes on the right half.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a case and two accounts of it, and does **not** show them. A reads the case, then both accounts. B makes the three moves: **what it says, the part its holder would not give up, and whether the advocate can supply it.** ⚠ **In one of the two pairs the advocate has genuinely misput the case** — a figure is not the holder\'s — **and B must say so rather than looking for a load-bearing part.** Change roles with the other pair.'));
out.push(table(['Pair A – the archive', 'Pair B – the deliveries'], [
  ['_Three points: the bill, the volunteers, the arithmetic._', '_Three points: gate movements, a driver, the forms._'],
  ['_Advocate: "attribution first, figures theirs and checked."_', '_⚠ Advocate: "I used the nine per cent from the draft."_'],
  ['_Holder: "answered on the bill, which I can live without."_', '_Holder: "that figure is not ours; our book gives eleven."_'],
  ['_⚠ The missing part: which half is load-bearing._', '_⚠ Not a missing part: a figure that is not the holder\'s._'],
  ['_⚠ Answerable, by the holder, in one sentence._', '_⚠ The case is misput and the remedy is a correction._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a load-bearing case**: **an advocate who has used a figure its holder does not accept has misput the case**, and no question about importance will mend it. **A case put with somebody else\'s number is not their case**, and the remedy is a correction with the source named. **Two different faults, two different remedies.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last case you put for somebody else** and do the three moves on it in writing. ⚠ **Write the part its holder would not give up** — **and then the question the cycle ends on: did you ever ask them, or did you decide it yourself?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the post does not contain:  _A post that does everything the unit has taught, and the man whose case it was is worse off. Asked whether the post is wrong, Jad said no — he would write it again, and Tareq is right as well, which is the part he did not expect. Tareq said he put the case better than he can put it himself, and that the committee answered the server bill, which he can live without, and never touched the two volunteers, which is the whole reason he started. So the mediation, which is three moves: separate what the case says from what its holder wants from it; find the part the holder would not give up; and say whether the advocate can supply it. What the post says is three things — the bill, the volunteers, and the arithmetic of a charge — all accurate and all his. The part Tareq would not give up is the volunteers: two people did unpaid work for six years and stopped because it was being taken for granted, and the charge was never about the bill. Which is the finding of the cycle and it is new: a case can be put at full strength, with every figure checked, and still be answered on the part its holder does not care about, because strength and importance are not the same thing. Jad said the committee answered the part that was easiest to answer, which was the bill, because the bill is a number — and it always is: a committee answers the answerable part, and if you do not say which part is load-bearing, the answerable part is the one that gets the meeting. Adnan said so the advocate asks one question first, and one question, before a word is written: which part of this would you not give up? Then that part goes last and plainest, and the rest is support. Eight words, and Jad did not ask them — he said he did not ask because he thought asking would make it his case, and it would have made it more theirs. Rim asked what the mediator does when neither of them is wrong, and the mediator names the question and hands it to the person who can answer it, which here is Tareq, who has never been asked which part is load-bearing; the mediator does not decide which half of somebody’s case matters to them. Hiba asked what we must not do, and two things, the second of which looks generous: do not improve the post, and do not hand the case back to its holder as a solution, because that returns him to putting it badly, which is where the unit started._'));
out.push(p('**Listener task:** write the part your own last case\'s holder would not give up, and whether you asked them.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**PUTTING A CASE THAT IS NOT YOURS**',
  'Anybody who has had to **(1)** ______ for a colleague at a meeting knows the difficulty. You are expected to **(2)** ______ a case you may not hold, and to put it well enough that nobody in the room can **(3)** ______ it apart on a technicality. Put it weakly and you have not been neutral: you have **(4)** ______ issue with the argument while appearing to summarise it.',
  'The safeguard is small. Say whose case it is inside the first sentence and the attribution **(5)** ______ as a frame; say it at the end and it sounds like an apology. There is a second difficulty, and it is the one that **(6)** ______ on your own standing. A case put at full strength tends to stick to whoever put it. Months later, colleagues may still **(7)** ______ the position for yours, and no correction will **(8)** ______ all of them.',
  '**1**  **A** speak   **B** talk   **C** tell   **D** say',
  '**2**  **A** give   **B** make   **C** do   **D** keep',
  '**3**  **A** hold   **B** break   **C** pick   **D** cut',
  '**4**  **A** made   **B** put   **C** found   **D** taken',
  '**5**  **A** says   **B** reads   **C** tells   **D** speaks',
  '**6**  **A** turns   **B** carries   **C** bears   **D** lies',
  '**7**  **A** take   **B** hold   **C** keep   **D** have',
  '**8**  **A** arrive   **B** come   **C** get   **D** reach',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an advocate and a believer (80 words or more).'));
out.push(p('**ONE CASE, TWO ACCOUNTS** · ______________   **The case.** _"______________"_   **The advocate.** _"______________"_   **The holder.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the case says.** ______________. ⚠ **All of it ______________.**   **The part its holder would not give up.** ⚠ ______________.   **Can the advocate supply it?** ______________, **by ______________.**   **And what I am not doing.** ⚠ **Improving the case**, and **handing it back to ______________ as a solution.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the case says, separated from what its holder wants from it',
  'The load-bearing part, in one sentence',
  'Both things you are not doing, named',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The essay, and the shape is 3.6: the question answered in the first sentence, both notes used with one developed further than the other, your own third point, and a conclusion that is not a summary.** **What Unit 17 adds is that you already know how to state the side you do not take** — **so the paragraph against your own position must be the strongest one on the page.**',
  'In your English class you have been discussing advocacy. Your teacher has asked you to write an **essay** answering this question:',
  '**Is it dishonest to argue for something you do not believe?**',
  '**Notes.** Write about: **1** honesty   **2** usefulness   **3** ______________ _(your own idea)_',
  'Write your **essay** in **140–190 words.**',
  '⚠ **Both given notes, or the content mark goes.** **And the third note is where the marks are** — **a third point taken from the unit** _(the attribution, the line you will not cross, the case nobody else is in the room to put)_ **is worth more than a general observation about society.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ of the figure took four minutes and settled the whole tender.   a) refutation   b) refute   c) refuting',
  '2  I am ___ to put the section\'s case on Thursday, and I shall put it well.   a) instruct   b) instructing   c) instructed',
  '3  The strongest case ___ my own position came from a driver at the gate.   a) about   b) against   c) upon',
  '4  A ___ of somebody else\'s view is not the same thing as holding it.   a) representation   b) represent   c) representative',
  '5  Nothing in the first four parts of the brief ___ what the writer thinks.   a) say   b) says   c) saying',
  '6  The ___ of his account is what makes it so hard to answer.   a) coherent   b) coherently   c) coherence',
  '7  If four months ___ fewer than two incomplete sheets, I withdraw the proposal.   a) show   b) shows   c) showing',
  '8  Her ___ of the complaint was polite, complete and four lines long.   a) dismissive   b) dismiss   c) dismissal',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 1 style – multiple choice).** 🔊 **Track 17.15** You will hear people talking in eight different situations. For questions **1–8**, choose the best answer (**A**, **B** or **C**).'));
[
  '**1**  You hear a man talking about a meeting. What does he say he did wrong?   **A** he put the case badly   **B** he put the attribution at the end   **C** he refused to put the case',
  '**2**  You hear a woman talking about an argument against her own position. What surprised her?   **A** that it used her own figures   **B** that it came from a driver   **C** that nobody had made it before',
  '**3**  You hear two colleagues discussing a condition. What do they agree about it?   **A** it should be given to somebody who disagrees with you   **B** it has no date on it   **C** it could never happen',
  '**4**  You hear a man talking about an instruction. What will he not do?   **A** attend the meeting   **B** put the case   **C** state a figure he cannot verify',
  '**5**  You hear a woman talking about a letter she spiked. What does she say the eleven letters told her?   **A** that the man was wrong   **B** how carefully to check what he sent   **C** that he would write again',
  '**6**  You hear a man reading from a brief. Which part of the brief is it?   **A** the condition   **B** the strongest argument against   **C** his own view',
  '**7**  You hear two colleagues talking about a brief. What was missing from it?   **A** a figure from the other side   **B** the attribution   **C** the writer\'s own view',
  '**8**  You hear a woman at the end of a meeting. What does she say the disagreement is really about?   **A** the analyser   **B** the temperature log   **C** what the two sides value',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['Extract 1', '**Man.** The case itself was fine. I had the server bill, I had the volunteers, I had the arithmetic — and I wrote _that is their argument and not mine_ in the last line, after two hundred words. Nobody reads the last line. If I had put those six words at the front, the whole eleven months would not have happened.'],
  ['Extract 2', '**Woman.** I had expected something about standards, or about how nobody likes paperwork. What I got was my own file read back to me: eleven of our nineteen refusals in two weeks of August, which is the fortnight our clerk was on leave. He had arranged my figures better than I had. That is what I was not ready for.'],
  ['Extract 3', '**Man.** So you have written the condition down. — **Woman.** Four months, fewer than two incomplete, and I withdraw it. — **Man.** Then do the last part: give it to somebody who disagrees with you and ask them to hold you to it. — **Woman.** And if I cannot bring myself to hand it over? — **Man.** Then you knew it was a decoration while you were writing it.'],
  ['Extract 4', '**Man.** I shall be there, and I shall put the case for twenty minutes, and I shall put it as well as it can be put. What I shall not read out is the nine per cent. Our own book gives eleven over the same four months and nobody has shown me where nine comes from. If somebody shows me, I shall say nine.'],
  ['Extract 5', '**Woman.** Eleven letters in a year is real information and I was not inventing it. It tells you how fast to check what the twelfth one says. It does not tell you whether the twelfth one is right — and I used it for the second thing, which it cannot do. The figure was in the yearbook. Four minutes.'],
  ['Extract 6', '**Man.** _If the analyser runs in the afternoon, the overlap with the day clerk drops from three hours to one, and the three hours are when queries are settled. Mr Rifai puts it at about four queries a day, and he is the person they fall on. Nobody on the afternoon side has answered that, including me._'],
  ['Extract 7', '**Woman.** It was a good paper. Both cases were put, both had figures, the condition was in it. — **Man.** So what was wrong with it? — **Woman.** I read it twice and I still do not know what he thinks. And because he never said, I spent the second reading looking for it — in the adjectives, in which case got the longer paragraph. He should have given me one sentence.'],
  ['Extract 8', '**Woman.** We have spent fifty minutes on the temperature log and neither side will accept a four-month trial. So the trial is not the problem and the log is not the problem. One side thinks the laboratory exists to get samples run and the other thinks it exists to be somewhere people can ask a question at four o\'clock. That is a real disagreement and no figure settles it. Shall we have that meeting instead?'],
]));
out.push(p('**C  Writing.** Write the essay (140–190 words): the question answered in the first sentence, both notes used, your own third point, and a conclusion that is not a summary.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put a case I do not hold, with the attribution inside the first sentence',
  '☐ state the other side at its strongest, and ask whether they would sign it',
  '☐ name the evidence that would change my mind, with a date on it',
  '☐ say plainly when nothing would change it',
  '☐ put an instructed case in three clauses, and name what I will not do',
  '☐ disagree with the argument and leave the arguer out of the sentence',
  '☐ write a brief in five parts, with my own view once and at the end',
  '☐ ask which part of a case its holder would not give up',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _stand in for · speak for · bring round · take issue with · argue away · reason with · sign up to · buy into · fall in with · square up to · pick apart · see through_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 17.7 draws on this)_: _refute → **refutation** · represent → **representation** · distort → **distortion** · plausible → **plausibility** · coherent → **coherence** · motivate → **motivation** · sympathetic → **sympathetically** · dismiss → **dismissal** · charitable → **charitably**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
