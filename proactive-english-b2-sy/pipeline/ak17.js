// Proactive English B2 · Syria Edition · Book 2 · Unit 17 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 17  The Argument You Do Not Hold — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **This is the least comfortable unit in the book and the class should be warned at the start of 17.1, not discovered to be uncomfortable at 17.4.** **They will spend six cycles putting cases they do not hold, stating the best argument against themselves, and naming what would change their minds.** **Some students experience the first two cycles as being asked to abandon their positions.** **They are not, and the key says so four times, because saying it once is not enough.**',
  '**One thing to kill early and repeatedly: the idea that putting a case weakly is neutral.** ⚠ **It is a refutation disguised as a summary**, and a class that leaves this unit summarising the other side badly has learned the opposite of it.',
  '**17.7 carries the examination papers.** **Reading and Use of English Part 1** is multiple-choice cloze, **Writing Part 1** is the compulsory essay, and **Listening Part 1** is eight short extracts.',
  '⚠ **And one plant for Unit 22.** **17.6 builds a brief with both sides signed; 22 builds a proposal with one.** **The students who can get both sides to sign a brief find the proposal unit easy, and the ones who cannot find that their proposals read as submissions.**',
], C.lblue, C.navy));

// ===================== 17.1 =====================
out.push(pb());
out.push(h2('17.1  Speaking for a case that is not yours'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Most pairs find the second half harder than the first, and a few cannot do the first half at all** — **they state their partner\'s position and then argue with it in the same breath, which is the whole unit arriving in the first six minutes.** **Collect two of those and put them on the board unaltered.**'));
out.push(A('**b** Putting a case: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **5 is the one that fools a room** — _of course, one could argue the opposite_ — **because it sounds generous and names no position, no holder and no figure.** **3 is the weakest thing on the page and students will defend it as balance:** **_there are arguments on both sides_ puts neither of them.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it must be put at least as well as its holder would put it, and whose it is must be said in the same breath**; and **a weakly-put case is not neutrality but a refutation disguised as a summary.**'));
out.push(A('**b** **1** ⚠ **For eleven months everybody on the forum believed the position was his** — **including the two people who later chose somebody else for a working group, one of whom told him afterwards that it was the archive thread.**   **2** ⚠ **_Some_ does two jobs at once.** **It makes the case anonymous, so nobody can be asked whether that is really their argument** — **and it makes it small, because _some_ is fewer than _most_.**'));
out.push(NOTE('⚠ **The lesson of 17.1 is about where the words go and not about whether they were said, and the class will hear it as the second.** **Mr Attar did say it was not his position.** **He said it at the end, in six words, after two hundred** — **and nobody reads the last line of a long post.** ⚠ **So put the arithmetic on the board rather than the principle: six words after two hundred.** **Then move the same six words to the front and read both versions aloud.** **The room will say the first is a retreat and the second is a frame, and they will have said it themselves**, which is worth more than the Language box.'));
out.push(NOTE('⚠ **Expect somebody in the first ten minutes to propose putting the case badly on purpose, and treat it as the most important question of the cycle rather than as an interruption.** **The answer is that it fools nobody:** **a weakly-put case is audible as a refutation to everybody in the room except the person doing it.** ⚠ **And the cost falls on a third party** — **the people whose case it was, who are not there.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(money)_ _The workshop\'s case is this, and it is a good one: a reprint costs them a month\'s margin and they have fourteen people._',
  '**2** _(time)_ _The night shift\'s case, not mine: the sheets take eleven minutes at the end of a twelve-hour turn, and nobody has ever timed them in daylight._',
  '**3** _(one I think is wrong)_ _Mr Ayoub\'s case, and he would recognise it: two volunteers did unpaid work for six years and stopped because it was taken for granted._',
  '**4** _(with **some** in it, and the repair)_ ⚠ _Some people think the forms are too long_ → _the relief clerk\'s case is that the forms take nine minutes and he has forty of them on a Thursday._',
  '**5** _(one I have been mistaken for holding)_ ⚠ _I put the case for charging for the archive in May and I was asked about **my** charge for a year._',
]));
out.push(A('⚠ Mark item **4** first and spend the time there: **the repair always adds a name and a figure and it always gets shorter in feel, even when it is longer in words.** Item **3** is the test of the cycle — **ask whether the holder would recognise it**, and if the student cannot say, the answer is to go and find out.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The archive should be charged for._',
  '**B** **The four subscribers\' case is this, and it is a good one: the server bill is 1,400,000 pounds a year and two volunteers have stopped.** **That is theirs and not mine.**',
  '**A** _(the ⚠ row)_ _Some people say the reprint is too expensive._',
  '**B** ⚠ **There is nobody in that sentence, so first: who?** **Mr Tahhan\'s case is this** — **a reprint costs the workshop a month\'s margin and they have fourteen people.** ⚠ **And he would recognise it, because the margin is his figure.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each, whose case it is and the figure given. ⚠ **The four ⚠ rows have no holder in them** — _some people_, _some_, _some feel_, _some would argue_ — **and the pair must supply one before anything else.** **A pair that puts a _some people_ case without naming anybody has done the thing the cycle is about, and the listeners hear the case shrink as it is spoken.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Mr Hariri\'s case, and I was asked to put it:** the three-hour overlap with the day clerk is when queries are settled, and about four a day fall on him. **If the analyser moves to the afternoon the overlap drops to one hour.** **He has kept a tally since October and it is his tally, not mine.** **I would move the analyser.**_',
  '**b** ⚠ _**With the attribution at the end:** _…that is Mr Hariri\'s view, not mine._ **My partner said she would quote me on the second version** — **because by the time the six words arrive she has already decided whose argument it is.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Jad put a case he did not hold, in public, and it cost him something. It was a thread in 2024 about charging for the archive: he was moderating, the people who wanted the charge were putting their case badly, so he put it for them, properly, in about two hundred words. And for eleven months everybody on that forum believed it was his position — including the two people who later chose somebody else for a working group, one of whom told him afterwards that it was the archive thread. He had said it was not his, at the end, in a sentence: that is their argument, not mine. Six words after two hundred. Which is the whole lesson, and it is a lesson about where the words go rather than about whether he said them: an attribution at the end is read as a retreat, and an attribution inside the first sentence is read as a frame. Rim asked whether the answer is not simply to put it badly, and that is the thing to kill in the room: a case put weakly is not neutrality but a refutation disguised as a summary, and everybody can hear it except the person doing it. Dima said she does it constantly — some people would say — and some is the word to watch, because it does two jobs at once: it makes the case anonymous, so nobody can be asked whether that is really their argument, and it makes it small, because some is fewer than most. Adnan said the alternative is to name them, and to name them and give the figure they would give: the workshop\'s case is that a reprint costs them a month\'s margin. Bassel said they would recognise that, because it is his case and his margin, which is the test and the only one that matters — put the case in front of the person who holds it and ask whether you have put it well enough, and if they want to add anything you had not put it, you had reported it. Lubna asked what happens when somebody mistakes it for yours, and you correct it once, in the same place, and accept that some people will not have read the correction — which is the cost of the method and it is real. And Mazen asked about saying the attribution out loud: at the same weight as the case, in the same breath, because a disclaimer said quickly at the end is heard as embarrassment, and embarrassment is read as agreement.']));
out.push(A('Listener task: the case, whose it is, and which version the partner would quote them on. ⚠ **It is the attribution-at-the-end version every time, and the room should be asked why.** **The answer is that a reader decides whose argument it is in the first sentence and does not revisit it** — **which is not carelessness and cannot be corrected by better readers.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Some people would say…_ → **✓** the workshop\'s case is this.   **✗** The attribution at the end. → **✓** inside the first sentence.   **✗** Putting it badly to show it is not yours. → **✓** well, with a name on it.   **✗** _There are arguments on both sides._ → **✓** here is theirs, with their figure.   **✗** A case with no figure in it. → **✓** the figure they would give.   **✗** _Of course, one could argue the opposite._ → **✓** who argues it, and on what?'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The four people were shouting about freeloaders and nobody was listening.** **He wrote their case out properly instead:** **the server bill, the two volunteers who had stopped, and the figure for what a small charge would cover** — **about two hundred words, with the strongest version of each point.**'));
out.push(A('**2** ⚠ **Eleven months of people answering him as though he wanted to charge for the archive, two of them leaving the thread he had started, and a working group in February he was not asked to join.** **He says the man who chose somebody else was not being unfair because he had read what was on the page** — ⚠ **and that is the sentence that makes the whole note usable by a colleague.** **A page that blames its readers has not found the fault.**'));
out.push(A('**3** ⚠ **One clause at the front:** _I am putting the case of the four people who want a charge, because it is being put badly and it deserves better: the server bill is…_ — **and he notes that the two hundred words after it would not have changed at all.** **What he refuses is the easy remedy:** **he is not going to start putting cases badly**, because the version he wrote is the version the two who disagreed finally answered, **which is the first useful thing the thread produced.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE ARGUMENT I DID NOT HOLD** · M. Hariri · 5 April · _for the laboratory, and for whoever writes the next paper_',
  '**In November I put the afternoon side\'s case at a meeting and the section has thought it was mine ever since.** ⚠ **This is not a complaint about anybody who heard it that way.**',
  '**What I did.** **The afternoon side had two good points and was making a third, weak one very loudly.** ⚠ **So I put the two: the forty minutes to temperature, and two repeats in thirty-one days against nine.**',
  '**What I thought I had done.** **Helped the meeting get to the real question in ten minutes rather than fifty.**',
  '**What I had actually done.** ⚠ **Made the best available statement of a position** — **and said _that is their case_ once, quietly, at the end.** **Six words, after about four minutes of speaking.**',
  '**What it cost.** ⚠ **Five months of being asked how my afternoon plan was coming on.** **And a paper in March that I was not shown** — **because, I was told, I had already made up my mind.** **That was not unfair; it was what the room had heard.**',
  '**What I should have said.** ⚠ _I am putting the afternoon side\'s case because it is being put badly: forty minutes to temperature, and two repeats against nine._',
  '**And what I am not going to do.** ⚠ **I am not going to let the weak point stand next time just so that nobody mistakes me for the arguer.**',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**THE ARGUMENT I DID NOT HOLD** · T. Ayoub · 7 April · _for the committee, and for the next person who speaks for somebody_',
  '**In February I put the registry\'s case for keeping the paper register, and I have been the paper man ever since.** ⚠ **Nobody who thinks that has misread me; they read what I said.**',
  '**What I did.** **The registry had one real argument and was making it badly** — **shouting about the electricity.** ⚠ **So I put it properly: the register is read at the gate, the gate has no screen, and in the four cuts last winter the paper book was the only thing anybody could use.**',
  '**What I thought I had done.** **Given the committee the strongest version of a case it was about to dismiss.** **I still think that was the right thing to do.**',
  '**What I had actually done.** ⚠ **Spoken for four minutes and added _that is their case, not mine_ at the end, in six words.** **Nobody remembers the last six words of a four-minute speech.**',
  '**What it cost.** ⚠ **Three months of being asked why I was against the new system, by people I agree with.** **And when the trial list was drawn up in May, my section was not on it** — **because, I was told, we were not ready.** **I had told them so myself, in somebody else\'s voice.**',
  '**What I should have said, and it is one clause at the front.** ⚠ _I am putting the registry\'s case, which is being put badly and deserves better: the gate has no screen._',
  '**And what I am not going to do.** ⚠ **I am not going to let a good argument be lost because the person making it is shouting.** **That is the job, and the clause at the front costs eleven words.**',
]));
out.push(A('**201 words, the readers protected in the second sentence, the two word-counts in the middle, a cost that is conceded to be fair, and the easy remedy refused at the end.** ⚠ **The sentence that earns the band is _I had told them so myself, in somebody else\'s voice_** — **it names the exact mechanism of the harm in nine words**, and no explanation of how attribution works would do as much.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the readers protected and the fault kept.** _"Nobody who thinks that has misread me; they read what I said."_ ⚠ **Both halves in one sentence.** **Mine says _perhaps I was not clear enough_**, which keeps the fault and protects nobody, because it suggests they could have worked it out.',
  '**One thing to keep, and why it works.** _"I had told them so myself, in somebody else\'s voice."_ **It is the whole page in nine words** — **and it is the only line in it that could not have been written by somebody who had merely read the Language box.**',
  '**Ranking of the slip I was given.** **1** the readers protected and the fault kept **2** the easy remedy refused **3** the cost with a fair consequence **4** the two word-counts _(given, and the second is approximate — "about four minutes" is not a count)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The same case twice: the attribution inside the first sentence, then the identical words with it at the end.** **The room says which version it would quote the speaker on, and it is the second every time** — **Finish on Mr Attar\'s sentence:** **nobody reads the last line of a long post; they read the first.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The case I put for somebody else:** the stores clerk\'s case for keeping two sets of keys, at the April meeting._',
  '⚠ _**Where I said whose it was:** nowhere. **I never said it at all.**_',
  '_**The clause that should have been at the front:** _I am putting the stores clerk\'s case, because he is not here and it is a better case than it sounds: the second set has been used four times this year, twice at night._ ⚠ **And the argument against something I believe, for 17.2: the two sets are the reason nothing is ever formally signed out.**_',
]));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  The other side at its strongest'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Insist on _the best_ argument and refuse the easiest one twice before accepting an answer.** **Then the test question, in these words: would the people who hold that argument sign what you have just said?** **In most pairs the answer is no, and the room should hear three _noes_ in a row before the dialogue is played.**'));
out.push(A('**b** The other side at its strongest: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 is the giveaway and it should be read aloud** — _the opposing view is that standards do not matter_ — **because nobody in the history of this city has held that view.** **4 is the strongest of the two right answers:** **it has a figure in it and the figure is the writer\'s own.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the test is whether the people who hold it would sign what you have written**; and **an argument you can answer easily is almost always one you built yourself.**'));
out.push(A('**b** **1** ⚠ **Three years explaining why standards matter, to people who had never said standards did not matter.**   **2** ⚠ **A figure from your own records.** **Eleven of nineteen refusals in two weeks of August** — **because the people who hold the case against you have been watching your figures more carefully than you have.**'));
out.push(NOTE('⚠ **The resistance in this cycle is real and it is not laziness: students believe that stating the other side at full strength is a step towards abandoning their own position.** **Answer it in the terms the Language box uses and answer it twice.** **Putting the other side at full strength is not a step towards changing your mind; it is the only way to find out whether you should** — ⚠ **and Mrs Shaaban, who did it, kept her rule.** **Point at that:** **the model page in Stage 5 concedes the strongest possible argument and then says _I am not dropping the rule_, with a reason, in one line.**'));
out.push(NOTE('**The practical instruction of the cycle is the one that gets skipped, because it means leaving the room.** ⚠ **Ask the person on whom the cost of your position actually falls** — **not the one who argues loudest and not the one most like you.** **Mrs Shaaban asked suppliers for three years and the cost was falling on drivers**, who are not in anybody\'s meetings. ⚠ **Set this as the homework and collect it in writing, in the other person\'s words, because the words are the point:** **_two days_ and _an office he has never been in_ are not how a quality manager would have phrased it, and the phrasing is what makes the argument unanswerable.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about money)_ _The strongest case against our price is that we are highest of three and about six per cent above the middle, and the figure is from our own quotations._',
  '**2** _(about a rule I enforce)_ ⚠ _A refusal costs the driver two days, and he did not fill in the form; a clerk did, in an office he has never been in._',
  '**3** _(one I cannot answer)_ _I have no answer to the two days. They fall on the one person who could not have prevented the refusal._',
  '**4** _(straw, and the repair)_ ⚠ _Critics would say we do not care about delays_ → _the strongest case is that eleven of our nineteen refusals fall in one fortnight, which looks like our staffing and not their paperwork._',
  '**5** _(found by asking the person who loses most)_ _I asked a driver instead of a supplier and got it in forty seconds._',
]));
out.push(A('⚠ Mark item **4** against one question: **could a named person sign it?** The straw version names nobody and the repair names a fortnight, a figure and an implication about the writer. Item **3** is the item that distinguishes a serious attempt: **a student who has no unanswerable argument anywhere in their work has not looked**, and the useful follow-up is **to ask them what the person who loses most would say.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _We refuse consignments on incomplete paperwork._',
  '**B** **The strongest case against it is that the refusal falls on the driver, who did not write the form, and it costs him two days.** **Would they sign it? Yes** — **a driver said it in those words.**',
  '**A** _(the ⚠ row)_ _Critics would say we do not care about delays._',
  '**B** ⚠ **Nobody holds that, so it has to be rebuilt.** **The strongest case: eleven of the nineteen refusals last year fall in one fortnight of August, which is when our own clerk was on leave** — **so the delays track our staffing and not their paperwork.** ⚠ **And they would sign that, because it is their experience and our figure.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The strongest case, its figure, and the answer to the test question. ⚠ **The four ⚠ rows are straw and each carries its giveaway shape** — _critics would say_, _the opposing view is_, _some people do not like_, _opponents think_. **A pair that answers one of those has answered nobody.** **Make the rebuild explicit in three steps: name a person, give what the position costs them, then ask whether they would sign it.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**What I believe:** the second signature on a handover is worth the thirty seconds it costs. ⚠ **The strongest case against it:** **the second signature is given by whoever is nearest, not by whoever checked** — **and in the fourteen handovers I looked at in 16.6, the second name is the same person eleven times, including on two nights he was not on duty.** **That figure is from my own ward book.**_',
  '**b** ⚠ _**Would they sign it? Yes, and worse** — **he would say he signs because refusing would look like an accusation.** **I had not thought of that and I have no answer to it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim refuses consignments on paperwork, and asked for the best argument against her she said that suppliers find the forms a nuisance. Asked whether any supplier would sign that as their case, she said no — they would be insulted by it. Then it is not their argument but hers about them, and that is the commonest shape in this unit: the version you can answer in one line is almost always the version you built. She said she spent three years answering it — three years of explaining why standards matter, to people who had never said standards did not matter. The real one she found from a driver, in month thirty-seven: a refusal costs him two days and he did not fill in the form, the clerk did, in an office he has never been in. That is the other side at its strongest and it has a person in it. And there was a figure, and it was hers: the rejection rate tracks which clerk was on leave rather than which supplier sent the load, and eleven of the nineteen refusals last year fall in two weeks of August. Which is the sentence to take out of the cycle — the strongest version of the case against you nearly always contains a figure from your own records, because the people who hold it have been watching your records more carefully than you have. Dima asked how you find it before month thirty-seven, and you ask the person who loses most: not the one who argues loudest and not the one most like you, but the one on whom the cost of your position actually falls. Rim asked the suppliers for three years and the cost was falling on the drivers. Omar asked what happens if their strongest case is one you cannot answer, and then you say so, and that is not a defeat: I have no answer to the two days, and I am keeping the rule, and here is what I am doing about the two days. A position that admits one unanswered argument is believed on the rest. Tareq asked how to spot the straw shapes, and there are three phrases nearly always followed by something nobody holds: critics would say, the opposing view is, some people do not like. If the sentence after one of those could not be signed by a named person, it is straw. And Mazen asked about reading it out, which is done without irony, because a smile in the voice is a refutation and the room hears it before the sentence ends.']));
out.push(A('Listener task: the partner\'s strongest case against themselves and whether its holders would sign it. ⚠ **Count the _noes_ and say the number out loud.** **A room in which most of the strongest cases would not be signed by anybody has just discovered that it has been arguing with nobody for years** — **which is the finding, and it lands much harder as a count than as a principle.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Critics would say…_ → **✓** a named person, and what it costs them.   **✗** _They find the forms a nuisance._ → **✓** would they sign that?   **✗** A counter-case with no figure. → **✓** the figure from your own records.   **✗** Conceding the position to be fair. → **✓** keep it, with one line of reason.   **✗** Reading it with a smile in the voice. → **✓** as though about to act on it.   **✗** Asking the loudest person. → **✓** asking the person who loses most.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **That suppliers find the paperwork a nuisance and would rather she were not so strict about it** — **and she has a folder of replies to it.** **She failed the test because no supplier has ever put it to her in those words**, and **if she showed one of them her version of their case they would be insulted by it.** **That sentence is the cycle, and she says she failed the test for three years without noticing.**'));
out.push(A('**2** ⚠ **The driver\'s argument: a refusal costs him two days, he did not fill in the form, a clerk did in an office he has never been in** — **and he is the only person in the chain who pays for it.** **He had stopped asking the clerk, because the clerk is not the one standing at the gate.** ⚠ **And the figure is hers: nineteen refusals last year, eleven of them in the two weeks their own paperwork clerk was on leave** — **so the rejection rate tracks which clerk was on duty rather than which supplier sent the load.** **It had been in her file since January and she had never arranged it that way.**'));
out.push(A('**3** ⚠ **She has no answer to the two days**, **which fall on the one person who could not have prevented the refusal** — **and she says she is not going to pretend she has a reply.** **Instead, and she calls it smaller than the problem: the gate telephones the supplier\'s office before the driver is turned away**, **so a missing batch number can be read out rather than driven back** — **eight of the nineteen would have been settled in four minutes** — **and in August the relief clerk gets the one-page note their own clerk has never needed.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TWO YEARS ANSWERING NOBODY** · L. Sweidan · 9 April · _for the three of us who mark the first-year plans_',
  '**For two years I have been answering an argument that nobody was making.** ⚠ **The real one came from a trainee in March and took about a minute.**',
  '**The argument I had been answering.** **That new teachers think planning is a formality.** ⚠ **If I showed one of them that as their case they would be insulted by it, and rightly.**',
  '**The argument they are actually making.** ⚠ **The plan is due the day before and the timetable is published on the morning.** **It costs them an evening of planning a lesson for a class they may not get** — **and nobody who sets the deadline has ever had to do it.**',
  '**And the part that is my own figure.** ⚠ **Of the eleven late plans this year, nine follow a timetable change in the same week.** **That has been on my own sheet since October.**',
  '**What I am not doing.** ⚠ **I am not dropping the deadline**, because a plan written after the lesson is a record and not a plan.',
  '**What I have no answer to.** ⚠ **The evening spent on a class they did not get.** **Nothing in my procedure touches that.**',
  '**What I am doing instead, which is smaller than the problem.** **The timetable for observed weeks is fixed on the Thursday before**, ⚠ **which covers nine of the eleven.**',
]));
out.push(S('Stage 7 · Write freely (sample, 205 words)'));
out.push(SAMPLE([
  '**THREE YEARS ANSWERING NOBODY** · B. Tahhan · 11 April · _for the two of us who price the rush work_',
  '**For three years I have refused rush work after four o\'clock and I have been answering the wrong argument about it.** ⚠ **The real one came from a customer\'s messenger, who is nineteen and not in any meeting.**',
  '**The argument I had been answering.** **That customers want everything instantly and will not plan.** ⚠ **I have said that in those words, and if I said it to the customers whose work I refuse they would be insulted by it** — **which is the test, and I had never applied it.**',
  '**The argument they are actually making.** ⚠ **The messenger reaches us at twenty past four because the ministry stamps at four.** **He is not late; the stamp is.** **He loses the afternoon and comes again at eight, and the job is no more urgent than it was** — **it is simply done a day later for a reason that has nothing to do with planning.**',
  '**And the part that is my own figure.** ⚠ **Of the twenty-two jobs I refused last year, fourteen arrived between four and half past.** **That has been in my own refusal book since 2023 and I had never counted the half-hours.**',
  '**What I am not doing.** ⚠ **I am not taking rush work at six.** **The press is cleaned at half past five and a job started after that costs the next morning\'s first run.**',
  '**What I have no answer to.** ⚠ **The fourteen.** **They are not a planning failure and I have been pricing them as one.**',
  '**What I am doing instead, which is smaller than the problem.** **A job in the hand by five on a stamped ministry day goes on the morning run at the ordinary price** — **and I shall count the half-hours from now on.**',
]));
out.push(A('**205 words, the test applied to herself in writing, her own figure rearranged the way the other side would arrange it, the position kept with one line of reason, and the unanswered argument named and not dressed up.** ⚠ **The sentence that earns the band is _he is not late; the stamp is_** — **five words that move the fault from a person to a system**, and the whole page follows from it.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the test applied to yourself, in writing.** _"if I said it to the customers whose work I refuse they would be insulted by it"_ ⚠ **In the conditional, with the person named.** **Mine says _I may have been unfair_**, which applies no test and could be written without having thought about anybody.',
  '**One thing to keep, and why it works.** _"Of the twenty-two jobs I refused last year, fourteen arrived between four and half past."_ **It is his own book, counted in a way he had never counted it** — **and that is the only kind of figure the other side cannot dispute.**',
  '**Ranking of the slip I was given.** **1** the test applied to yourself **2** your own figure rearranged **3** the unanswered argument named **4** the position kept with its reason _(kept, and the reason is the strongest line on the page, so it was the easiest)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The strongest case against yourself, read twice: once as though about to act on it, once with a smile in the voice.** **The room names the word at which the second became a refutation, and it is usually the first one.** **Nobody needs this explained after hearing it.** **Finish on Mrs Shaaban\'s sentence:** **three years of explaining why standards matter, to people who had never said standards did not matter.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Would they sign my version? No.** **I had written that the night shift does not take the sheets seriously.**_',
  '⚠ _**So I asked the person it costs most, who is the man on the gate at two o\'clock.** **His words:** _nobody tells me it is mine, and at two o\'clock there are three of us and one torch._',
  '_**And the figure he could use against me:** of the nine incomplete sheets this year, seven are from nights with a single man on the gate. ⚠ **That is in my own book.**_',
]));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  What would change your mind'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second question does the work: could that thing happen, and by when?** **Most first answers fail it** — _if the evidence changed_ **names no evidence and no date.** **Put four first answers on the board and mark them against the two requirements; in most rooms none of the four scores two.**'));
out.push(A('**b** Falsifying conditions: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **4 has no date in it and is still a condition**, because _show me one month_ is a thing that could happen and somebody else could produce it; **the date is what makes it enforceable, not what makes it a condition.** **5 is the one to dwell on:** _nobody has yet produced anything that would move me_ **sounds like evidence-mindedness and names nothing that would.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **something that could actually happen, and dated**; and **a position with no falsifying condition is a preference**, however much evidence is piled behind it.'));
out.push(A('**b** **1** ⚠ **It was met in six weeks.** **November: one incomplete. December: none. January: one. February: none** — **and by February he had run out of condition and withdrew the proposal in writing, which he had also promised to do.**   **2** ⚠ **It is a legitimate answer and it must be said:** _nothing you could show me would change this; it is not a question of evidence for me._ **It means the argument is about what we value rather than about what is true** — **and those two arguments need different rooms.**'));
out.push(NOTE('⚠ **The story of this cycle is not that Mr Darwish was wrong; it is that he was never tested.** **Two years of a position nobody could touch, and six weeks of a position with a condition on it.** **Say the arithmetic rather than the moral.** ⚠ **And the reason the figures changed is the part a class skips: Mr Hariri put one name on the board.** **The sheets were being kept by whoever was told to keep them and nobody had ever been told** — **so the two years of evidence was a man watching a thing nobody had been asked to do.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(about a rule)_ _If four consecutive months show fewer than two incomplete sheets, I withdraw the proposal._',
  '**2** _(about a person\'s work)_ _If the next three returns are complete and on the published date, I take the warning off the file in July._',
  '**3** _(nothing would, said plainly)_ ⚠ _Nothing you could show me would change this one: I am not willing to take uncertificated machines at any price, and that is not an evidence question for me._',
  '**4** _(an impossible condition, and the repair)_ ⚠ _Show me a month in which nobody anywhere made an error_ → _show me one month in which the night shift filed on time without being telephoned._',
  '**5** _(the question put back)_ _And what would change yours — what would I have to show you, and by when?_',
]));
out.push(A('⚠ Item **3** is the one to mark hardest, because students write it as a concession rather than as a position: **it must name what the disagreement is actually about** _(willingness, not evidence)_, **or it is a refusal to engage wearing the cycle\'s clothes.** Item **4** is the cruelty item and the room should feel it: **the person given an impossible condition spends weeks finding out that nothing would have done.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The night shift cannot keep the handover sheets._',
  '**B** **If four consecutive months show fewer than two incomplete sheets, I withdraw it.** **And what would change yours, and by when?**',
  '**A** _(the ⚠ row)_ _Rush work after four o\'clock is wrong in principle._',
  '**B** ⚠ **Nothing would change this, and I should say so rather than invent a figure.** _It is not an evidence question for me: I am not willing to start a job that costs the next morning\'s first run._ ⚠ **And then the better argument, which is about what the press is for and takes ten minutes instead of fifty.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each condition, its date, and the answer the other side gave. ⚠ **The four ⚠ rows are positions about what is right rather than about what is the case**, and no evidence would settle them. **The honest move is the plain sentence and then the shorter argument about what we value.** **Mark down any pair that invents a figure for one of those four** — **an invented condition is worse than none**, because somebody will try to meet it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**My position:** the second signature catches nothing. ⚠ **The condition:** _if, in the next three months, the second signature is given by a different person from the first in more than half the handovers, I withdraw it._ **That is countable from the ward book by anybody.**_',
  '**b** ⚠ _**Could it happen, and would I honour it?** **It could, and I think it will** — **which is why I nearly wrote _if the second signature ever catches an error_, and that is the decoration.** **Nobody records a catch.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar argued for two years that the night shift could not keep the handover sheets, and then somebody made him write down what would change his mind. He wrote that if four consecutive months showed fewer than two incomplete sheets he would withdraw it, and he thought it was safe, because he had two years of being right behind him. It took six weeks. The second month was clean, the third had one, and by February he had run out of condition, and he withdrew it in writing, which he had also promised to do. Six weeks and not two years because the sheets were being kept by whoever was told to keep them, and nobody had ever been told — the two years was him watching a thing nobody was doing. Which is the cycle in one case: a condition you write down gets tested, and the testing is quick, and a position with no condition is never tested at all, so it is a preference whatever weight of evidence is piled behind it. Dima said two requirements, then, and two: it must be something that could actually happen, and it must have a date. Fewer than two incomplete in four months has both; if the evidence changed has neither. Adnan said he has drafted the other kind, the impossible one, and show me a month in which nobody anywhere made an error is a refusal with a condition painted on it — the person it is given to spends weeks finding out that nothing would have done, which is crueller than a refusal. Hiba asked what happens if the honest answer is that nothing would change it, and then you say that, and the conversation gets shorter and better: nothing you could show me would change this, it is not a question of evidence for me. That is a legitimate position; it just means the argument is about what we value rather than about what is true, and those two arguments need different rooms. Lubna asked what the condition names, and the evidence, never the conclusion: if the sheets improve is a conclusion and the judge of it is you, and fewer than two incomplete in four months is evidence a third person can read off the file. And Mazen asked about saying it out loud, which is as a commitment and not as a hypothesis, because a condition said as a hypothesis commits nobody and everybody listening knows it.']));
out.push(A('Listener task: the partner\'s condition, its date, and whether the listener believes they would honour it. ⚠ **The third part is the assessment and it should be given as a show of hands rather than in writing.** **A condition the room does not believe will be honoured is a decoration**, and the student usually knows it: **ask them what they nearly wrote instead, and the honest answer is a condition nobody could ever produce.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I am always open to persuasion._ → **✓** fewer than two in four months.   **✗** _If the evidence changed._ → **✓** which evidence, and by when.   **✗** _If the sheets improve._ → **✓** a thing a third person can read off the file.   **✗** An impossible condition. → **✓** one somebody could actually produce.   **✗** Inventing a condition for a values question. → **✓** nothing would, and here is why.   **✗** Writing it and not handing it over. → **✓** give it to somebody who disagrees.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Four sheets from March, two of them incomplete** — **and about a hundred conversations in which he said the night shift could not keep them.** **What was wrong with it, in his own words: it was not a lie and was not evidence either** — **he had stopped at the two, and 16.3 has a word for that.** **The hundred conversations are the part to notice: repetition had been doing the work of a second look.**'));
out.push(A('**2** ⚠ **Mr Hariri put one name on the board in October.** **The sheets are kept by whoever is on the gate at two o\'clock, and that person is now named at the start of the shift** — **and nobody had ever been told it was theirs.** **So his two years of evidence was him watching a thing nobody had been asked to do.** **The idea is Mr Hariri\'s and it costs eleven seconds.**'));
out.push(A('**3** ⚠ **He is least pleased that six weeks in he could see where the figures were going and said nothing.** **And to whoever argues with him next:** _ask me what would change my mind, and make me write it down with a date on it_ — **which he calls the cheapest thing anybody has ever done to him**, because **it cost him two years of being wrong and it only took six weeks to find out.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**I SAID THREE MONTHS AND I HAVE HAD THREE MONTHS** · R. Shaaban · 13 April · _to the gate staff_',
  '**In December I wrote that if three consecutive months showed fewer than two refusals on paperwork I would stop telephoning the supplier\'s office myself.** ⚠ **I have had the three months. I withdraw it.**',
  '**What I had proposed.** **That the gate call me before any load was turned away.** ⚠ **I argued it for a year.**',
  '**What my argument was.** **Four refusals in one week of August, two of them wrong.** ⚠ **Which was not a lie and was not evidence either: August was the fortnight our clerk was on leave.**',
  '**The condition, and why I thought it was safe.** ⚠ _Fewer than two refusals on paperwork in three consecutive months._',
  '**What happened.** **January: one. February: none. March: one.**',
  '**Why the figures changed.** ⚠ **The gate now telephones the supplier before the driver is sent away**, **which is Mr Kabbani\'s idea and takes four minutes.**',
  '**What I am now proposing.** **The gate keeps the telephone call and I keep out of it.** **And I shall count again in September.**',
  '**And one sentence for whoever argues with me next.** ⚠ **Make me write the condition down with a date on it.**',
]));
out.push(S('Stage 7 · Write freely (sample, 198 words)'));
out.push(SAMPLE([
  '**I SAID FOUR ROUNDS AND I HAVE HAD FOUR ROUNDS** · D. Khoury · 15 April · _to the three of us on the panel_',
  '**In the spring I wrote that if four rounds produced no candidate who won on the arithmetic and whom one of us did not want, I would stop arguing for the weighting to be reviewed each year.** ⚠ **I have had the four rounds. I withdraw it.**',
  '**What I had proposed.** **That we reopen the weighting before every round.** ⚠ **I argued it from October to March and I was tiresome about it.**',
  '**What my argument was.** **The October panel, where we spent fifty minutes discovering what our criteria were worth.** ⚠ **Which was real and was one panel.** **I had been treating a single afternoon as a tendency.**',
  '**The condition, and why I thought it was safe.** ⚠ _Four rounds with no winner we did not want._ **I expected the spring round alone to settle it in my favour.**',
  '**What happened.** **Spring: no such candidate. Summer: none. September: one, and we appointed him. December: none.**',
  '**Why the figures changed.** ⚠ **Because we published the weighting before the papers were read**, **which was Mr Barghouti\'s point and not mine** — **and a published weighting is argued with in February instead of at half past three on a Thursday.**',
  '**What I am now proposing, which is smaller.** **The weighting is reviewed when a round produces a winner one of us does not want, and not otherwise.** **And I shall count again after the summer round.**',
  '**And one sentence for whoever argues with me next.** ⚠ **Ask me what would change my mind and make me write a date on it.** **I have been wrong since October and it took four rounds to find out, which is cheap.**',
]));
out.push(A('**198 words, withdrawn in the second line, the four rounds printed as a list the panel can check, the credit given to a named colleague, and the thing she is least pleased with inside the page.** ⚠ **The sentence that earns the band is _I had been treating a single afternoon as a tendency_** — **it names the fault in the evidence rather than in the conclusion**, which is the only kind of withdrawal a colleague can learn anything from.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the withdrawal in the second line.** _"I have had the four rounds. I withdraw it."_ ⚠ **Second line, seven words, no explanation in front of it.** **Mine withdraws in the sixth paragraph, after everything that makes the withdrawal reasonable** — **which I now see is a negotiation.**',
  '**One thing to keep, and why it works.** _"I had been treating a single afternoon as a tendency."_ **It is the fault in the evidence and not in the conclusion** — **and it is the only sentence here I could use on my own arguments tomorrow.**',
  '**Ranking of the slip I was given.** **1** the withdrawal in the second line **2** the thing you are least pleased with **3** the credit to a named person **4** the months as a checkable list _(listed, and the fourth entry has no figure)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The condition twice: as a commitment and then as a hypothesis.** **The room says which one it would hold the speaker to, and nobody is ever held to the second** — **although the words are identical.** **Finish on Mr Darwish\'s sentence:** **it cost me two years of being wrong and it only took six weeks to find out.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The position I argue most often:** that the afternoon analyser run is the one with the repeats._',
  '⚠ _**The condition:** _if the next sixty days of the repeat book show the afternoon at or below the morning, I withdraw it._ **Date: the first of July.**_',
  '_**And handing it over:** I gave it to Miss Mansour, who disagrees with me, and asked her to hold me to it. ⚠ **What I noticed while writing it:** my first draft said _if the afternoon were ever shown to be reliable_, **which nobody could produce and which I had chosen for that reason.**_',
]));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  The case you were told to make'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The third question is the cycle and nobody has an answer to it:** _what did you refuse to do?_ **Most people have never decided in advance where their line is**, and at the meeting there is no time to work it out. **Collect the silence and name it** — **then say that the written homework of this cycle is to decide it.**'));
out.push(A('**b** Marks the instruction without disowning the work: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the sneer and the room will call it honest.** **It is not: it disowns the work and keeps the credit for being clever.** **5 is the sneer in one word** — _apparently_ — **and 3 marks no instruction at all**, which leaves the speaker holding a position they were told to carry.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **whose case it is, that you were asked to put it, and what you will not do**; and **the line is between arguing for a position and stating as a fact something you know to be untrue.**'));
out.push(A('**b** **1** ⚠ **He was told to put a case that rested on a figure he had not checked, and he put it.** **Somebody else checked it in four minutes, the tender was reopened and they lost it** — **the figure was wrong by about a fifth, and the person who had told him to use it was the person it cost most.**   **2** ⚠ **It disowns the work and keeps the credit for being clever.** **The case is still badly put, the section still loses, and the room has been told he is above it.**'));
out.push(NOTE('⚠ **The line is narrow and the key states it in one sentence, which should go on the board unaltered:** **you may argue for a position you do not hold, as well as it can be argued; you may not state as a fact something you know to be untrue.** **Everything else in the cycle is mechanics.** ⚠ **Two mechanics matter.** **The first is that the line is said in writing, once, before the meeting, and without a speech** — **two sentences, and the work is not refused.** **The second is the fallback when they insist: the figure goes in with its source named** _(on the section\'s figure of nine per cent)_, **which is 16.3 and is as far as anybody can go without lying or walking out.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(whose, asked, checked)_ _I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are mine and checked._',
  '**2** _(with a verified figure)_ _The paperwork falls from twenty-two forms a month to five, and I have counted both._',
  '**3** _(a figure I refuse, and the two sentences)_ ⚠ _I shall put the case for weekly deliveries. I cannot put the figure of nine per cent; our own book gives eleven._',
  '**4** _(the sneer, so that you hear it)_ ⚠ _I personally think this is nonsense, but I have been told to say it_ — **and the committee now knows about me and nothing about the case.**',
  '**5** _(the source named because they insisted)_ _On the section\'s figure of nine per cent, the saving is…_',
]));
out.push(A('⚠ Item **3** is marked on length: **two sentences, no third one.** **A student who adds _I hope you understand my position_ has made a speech, and the speech is what gets people taken off work.** Item **4** is read aloud by its author and the room says what it learned about the case; the answer is nothing.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Put the case for weekly deliveries._',
  '**B** **I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are from our own goods-in book.**',
  '**A** _(the ⚠ row)_ _Say the saving is nine per cent._',
  '**B** ⚠ **That is an instruction to assert and not to argue, so it goes in writing first:** _I shall put the case. I cannot put the figure of nine per cent; our own book gives eleven._ ⚠ **And if they insist:** _on the section\'s figure of nine per cent_ — **which keeps the work and names the owner of the number.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three clauses, and for the doubtful rows the two refusing sentences. ⚠ **The four ⚠ rows are not instructions to argue; they are instructions to assert.** **That is the line, and the pairs must find it without a speech.** **A pair that delivers a lecture about integrity will not be asked again**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**I am instructed to put the registry\'s case for keeping the paper register; I have put it as well as I can; the four power cuts are from the gate log and I checked them.**_',
  '**b** ⚠ _**My line, written in advance:** _I shall not say that the new system has failed. It has not been tried here._ **And the committee\'s conclusion from the two readings: from the first, that the registry has a case; from the second, that I think the registry is ridiculous** — **which tells them about me and leaves the gate without a screen.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Adnan has spent half his working life putting cases he was told to put, and he says two things go wrong, and he has done both. The first is the sneer — I personally think this is nonsense, but I have been told to say it — which disowns the work and keeps the credit for being clever: the case is still badly put, the section still loses, and he has told the room he is above it. Dima asked what the honest form is, and it is three things: whose case it is, that he was asked to put it, and what he will not do. I am instructed to put the section\'s case for weekly deliveries; I have put it as well as I can; the figures are mine and checked. And the third is the one nobody has prepared — where is your line, and did you decide it before you needed it? He had not, in 2019. He was told to put a case that rested on a figure he had not checked, and he put it, and somebody else checked it in four minutes. The whole tender was reopened and they lost it, the figure being wrong by about a fifth, and the person who had told him to use it was the person it cost most, which is the thing he had not understood at all. Which is the finding of the cycle: a case that rests on a figure you have not checked will fail at the first check, and the person who told you to put it is the one who pays, so checking the figure is not disloyalty but the only loyal thing available. Rim asked what happens if the figure is wrong and they still want it, and then you have reached the line, and it is a narrow one: you may argue for a position you do not hold, as well as it can be argued, and you may not state as a fact something you know to be untrue. Jad asked how you say that to the person who told you, and in writing, once, before the meeting, and without a speech: I shall put the case for weekly deliveries, I cannot put the figure of nine per cent, our own book gives eleven. Two sentences, and you have not refused the work. Bassel asked what happens if they insist, and then the figure goes in with its source named, which is 16.3 — on the section\'s figure of nine per cent, four words, and the reader can see whose number is doing the work. And Mazen asked about saying the instruction out loud: once, flatly, at the start, and never again.']));
out.push(A('Listener task: the partner\'s three clauses and the line they decided in advance. ⚠ **Collect the lines and read six of them out without names.** **Most rooms produce two kinds:** **a line about figures** _(I shall not state a number I have not checked)_ **and a line about people** _(I shall not say a colleague was told when I know he was not)_. **Both are good and the first is the one that gets tested.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I personally think this is nonsense, but…_ → **✓** I am instructed, once, at the start.   **✗** _Apparently we want weekly deliveries now._ → **✓** the section\'s case, put properly.   **✗** The instruction said three times. → **✓** once, and never again.   **✗** A refusal with a speech attached. → **✓** two sentences, in writing, beforehand.   **✗** Putting an unchecked figure. → **✓** check it, or name whose it is.   **✗** No line decided in advance. → **✓** write it before you need it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The nine per cent.** **Their own goods-in book gives eleven per cent over the same four months** — **and eleven is better for them than nine** — **so he does not understand where nine came from, and until he does he will not read it out.** **The clause that keeps it from being a refusal:** _if it is nine for a reason I have not seen, tell me the reason and I shall say nine._'));
out.push(A('**2** ⚠ **In 2019 he put a case that rested on a figure he had not checked.** **The other side checked it in four minutes, the tender was reopened, and they lost it** — **the figure was wrong by about a fifth, and the person it cost most was the person who had given it to him.** **He says that is why the note exists and why it is dull**, **which is the sentence that makes the whole page a working document rather than a complaint.**'));
out.push(A('**3** ⚠ **They will ask what happens to the Monday consignments in a week with a public holiday** — **and he has no answer, and says the case is weaker for it, and that if the section has one it is worth more than the ninth per cent.** **His own view appears once:** **he would keep daily deliveries** — **and he says it is not what he was asked for, it will not be in the room, but it is in the note once so that nobody has to guess.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BEFORE TUESDAY: THE PAPER REGISTER CASE** · T. Ayoub · 16 April · _to Mrs Khoury_',
  '**I shall put the registry\'s case for keeping the paper register on Tuesday and I shall put it as well as I can.** ⚠ **There is one sentence in the draft I cannot say.**',
  '**What I shall say, and it is a good case.** **The register is read at the gate, the gate has no screen, and in the four power cuts last winter the paper book was the only thing anybody could use.** ⚠ **The strongest thing we have is the four cuts and I have the dates from the gate log.**',
  '**The sentence I cannot say.** **The draft says the new system has failed elsewhere.** ⚠ **It has not been tried in any directorate I can find, and two have ordered it.** **If somebody has a place where it was tried and failed, give me the place and I shall say it.**',
  '**What I am not doing.** ⚠ **I am not refusing the work and I am not going in to lose it.** **I shall say I am instructed, once, and then put the case.**',
  '**And why this note exists.** ⚠ **In 2021 I put a claim I had not checked and it was checked by the other side in a morning.** **It cost us the item and the person it cost most was the person who gave me the claim.**',
  '**What they will ask, and I have no answer.** ⚠ **Whether a screen at the gate would settle it.** **It probably would, and nobody has priced one.**',
  '**And one sentence of my own, which I shall not say in the room.** ⚠ **I would put a screen at the gate and keep the book for a year.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**BEFORE THURSDAY: THE ONE-PAGE ASSESSMENT CASE** · H. Nasser · 18 April · _to the deputy_',
  '**I shall put the section\'s case for one-page assessments on Thursday and I shall put it as well as it can be put.** ⚠ **There is one figure in it I cannot read out, and this note is so that you hear it from me now.**',
  '**What I shall say, and it is a good case.** **A four-page assessment is read by nobody: of the eleven I collected from last year, nine have no mark anywhere after the second page.** ⚠ **An appeal route on the fourth page is a route nobody takes, and in those nine it is on the fourth page.** **That is counted and I counted it twice.**',
  '**The figure I cannot say.** **The draft says one-page assessments take half the time to write.** ⚠ **I have timed fourteen of mine and the honest figure is about two-thirds, not a half** — **and two-thirds is still the best argument we have.** **If the half comes from somebody\'s timings, show me them and I shall say a half.**',
  '**What I am not doing.** ⚠ **I am not refusing the work.** **I shall say I am instructed, once, at the start, and then put the case for fifteen minutes without saying it again.**',
  '**And why this note exists.** ⚠ **In my first year I was assessed on a line nobody could explain, and I have been careful about unexplained numbers since.** **An unexplained number is the same fault from the other end of the desk.**',
  '**What they will ask, and I have no answer.** ⚠ **What a one-page assessment does when a candidate fails two criteria out of three.** **There is no room on one page for two sets of working and I have not solved it.**',
  '**And one sentence of my own, which I shall not say on Thursday.** ⚠ **I would allow a second page for the working and keep the first page to the five parts.** **That is not what I was asked for and it will not be in the room.**',
]));
out.push(A('**207 words, the work committed to in the first line before the objection, both figures with their sources and the door left open, the old mistake priced and credited with producing the habit, and her own view in exactly one place.** ⚠ **The sentence that earns the band is _an unexplained number is the same fault from the other end of the desk_** — **it ties the refusal to Unit 16 without borrowing any of its authority**, and it is the reason a reader believes the rest.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: both figures with both sources, and the door left open.** _"the honest figure is about two-thirds, not a half… If the half comes from somebody\'s timings, show me them and I shall say a half."_ ⚠ **Two figures, two sources, and a way back for the person who wrote the draft.** **Mine gives my figure and not theirs**, which makes it my word against a document.',
  '**One thing to keep, and why it works.** _"two-thirds is still the best argument we have"_ **It shows the correction costs the case nothing** — **and that single clause is what makes the refusal easy to accept.**',
  '**Ranking of the slip I was given.** **1** both figures with sources **2** the old mistake priced **3** your own view in one place **4** the work committed to first _(first line, and the shortest thing on the page to do)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The case twice: the instruction once at the start, then the same case with the sneer attached.** **The room says what a committee would conclude from each** — **and the second conclusion is always about the speaker and never about the case.** **Finish on Mr Barghouti\'s sentence:** **the person who told you to put it is the one who pays.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The case I was told to make:** that the section cannot release anybody for the training in May._',
  '⚠ _**My line, written before I need it:** _I shall not say that nobody applied. Two people applied and I have their notes._',
  '_**And where I shall keep it:** in the front of the diary, because at the meeting there is no time to work it out. ⚠ **I have been in that meeting without it twice.**_',
]));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  The argument and the arguer'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The word-count is the point and it should be done on the board.** **The version with the person in it is nearly always shorter, and that is the whole problem** — **the quicker move settles nothing.** **Collect two pairs and write the two counts beside each other; in most cases it is about six words against about twenty.**'));
out.push(A('**b** Takes issue with the argument: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **5 is the one half the room will defend** — _he said the opposite in 2019_ — **and it is the shape the rest of the cycle is about.** **2 is worth reading aloud for a second reason: it concedes the argument** _(it does)_ **before it answers it, which is 17.2 inside 17.5.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it ends the argument without settling it**; and **a record bears on how carefully you should check what somebody says, and not on whether this argument is true.**'));
out.push(A('**b** **1** ⚠ **The same point came from the ministry, in a circular, and it was right** — **they had printed the figure four more times by then and the correction ran to half a column.**   **2** ⚠ **Say it once, as a fact, and then answer the argument anyway.** _He supplies us weekly and the change would suit him._ **One sentence, and then the gate movements, the driver and the twenty-two forms, on their merits.**'));
out.push(NOTE('⚠ **Spend the cycle on the fourth shape, because the first three are easy to hear and the fourth sounds like diligence.** **A person\'s record bears on how carefully you should check what they say; it does not bear on whether this argument is true** — **and reaching for it is nearly always a way of not checking.** ⚠ **Mrs Khoury\'s arithmetic is the cheapest version of the lesson: eleven letters was her reason for not spending four minutes.** **Put the four minutes on the board and leave it there for the rest of the lesson.** **Then the harder half, from the model page: the pattern of eleven letters was real and she was not inventing it.** **The error was not believing something false about him; it was using a true thing for a job it cannot do.**'));
out.push(NOTE('**The hardest case in the cycle is a real interest, and the room will treat naming it as the answer.** ⚠ **It is one sentence, and then the argument stands or falls on its own figures.** **The driver\'s two days are real whether or not they are his.** **If a class needs the general form:** **an argument with an interest behind it can still be true, and if you answer only the interest you have answered nothing.** ⚠ **And the repair for the whole cycle is two words, which should be practised rather than discussed: say _the argument_ and not _your argument_.** **It costs nothing, it is audible, and it is the only part of this unit a student can apply in the next five minutes.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a claim about a figure)_ _The claim is that the saving is nine per cent. Our own book gives eleven over the same four months, so one of the two sources is wrong and it is worth four minutes._',
  '**2** _(a claim about time)_ _The claim that the forms take four minutes is wrong: I timed eleven of them and the median was nine._',
  '**3** _(a real interest, named once)_ ⚠ _He supplies us weekly and the change would suit him. The gate movements fall by four a week either way, and that is from our log._',
  '**4** _(the person in it, so that you hear it)_ ⚠ _You would say that; you work in the workshop_ — **six words, and nothing has been settled.**',
  '**5** _(tempted to use a record)_ ⚠ _He has written eleven times this year_ → **and the figure is still in the yearbook, and checking it takes four minutes.**',
]));
out.push(A('⚠ Item **3** is the one to mark strictly: **one sentence for the interest, and then a figure.** **A student who gives three sentences to the interest has written the error politely.** Item **5** is the item that changes behaviour — **ask for a real temptation and a real time cost**, and the time cost is almost always under ten minutes.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _You would say that; you work in the workshop._',
  '**B** **The argument is that a reprint costs a month\'s margin.** **To settle it we should have to check the margin against one reprint** — **which is in the workshop\'s own book and takes about ten minutes.**',
  '**A** _(the ⚠ row)_ _He supplies us weekly, so of course he wants weekly._',
  '**B** ⚠ **He does, and the change would suit him.** **That is one sentence.** **The argument is that gate movements fall by four a week and one driver is released on three days** — **and to settle it we should have to count the movements in our own log for a month, which nobody has done.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The rebuilt argument and what would settle it. ⚠ **The four ⚠ rows contain a genuine interest and the pairs will think naming it is the answer.** **It is one sentence, and then the argument stands on its own figures** — **the driver\'s two days are real whether or not they are his.** **A pair that stops after naming the interest has made the cycle\'s error in its politest form.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**The argument I dismissed:** the relief clerk\'s complaint about the consignment forms. ⚠ **I dismissed it through him** — **it was his week and the refusals were his.** **With him removed:** _the forms take nine minutes and there are forty of them on a Thursday, which is six hours._ ⚠ **What I would have to check:** the Thursday count and one timing. **About twenty minutes.**_',
  '**b** ⚠ _**With the person put back in:** _he only says that because it was his week._ **Seven words.** **And my partner said the first version can be answered by defending him, which is the argument he and I would both rather have had.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Dima spiked a letter in 2022 saying the figures for the water supply were out by a factor of ten. She wrote two lines of a reply in her head and spiked it, because the man had written to them eleven times that year about everything. She did not check the figure: she answered the eleven letters and not the one in her hand. Fourteen months later the same point came from the ministry, in a circular, and it was right — they had printed the figure four more times by then and the correction ran to half a column. So the cost of the shortcut was four reprints and a correction, and that is the shape to carry out of the cycle: attacking the arguer ends the argument without settling it, and the argument comes back, because nothing was ever answered. Omar asked what the shapes are, so as to be able to hear them, and there are four, the fourth being the subtle one: the motive, you only say that because; the person, coming from you; the group, people in your office always; and the record, he said the opposite in 2019. Adnan said the record one sounds legitimate, which is why it is the dangerous one: a person\'s record bears on how carefully you should check what they say, and it does not bear on whether this particular argument is true, and reaching for it is nearly always a way of not checking. Dima said it was exactly that — eleven letters was her reason for not spending four minutes. And the repair is smaller than anybody expects: say the argument and not your argument, two words, and the room changes, because the thing on the table stops being a person\'s property. Rim asked about the case where the interest really is relevant, since a supplier arguing for weekly deliveries has one, and he has, and you say so once as a fact and then answer the argument anyway: he supplies us weekly and the change would suit him, one sentence, then the gate movements and the driver and the twenty-two forms, on their merits. Hiba asked why answer it at all if the interest is obvious, and because an argument with an interest behind it can still be true, and if you answer only the interest you have answered nothing — the eleven letters were a real pattern and the twelfth letter was still right. And Mazen asked about saying it out loud, which is done with no name in the sentence and the stress on the claim rather than on the pronoun.']));
out.push(A('Listener task: the partner\'s rebuilt argument and what they would have to check to settle it. ⚠ **Collect the times.** **Almost every answer is between four minutes and half an hour**, and the room should see the list: **these are the shortcuts the four shapes bought.** **Then the question that ends the cycle:** **which of those checks are you going to do this week?**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _You would say that; you work in the workshop._ → **✓** the argument is that…   **✗** _People in the registry always…_ → **✓** this claim, and what would settle it.   **✗** _He said the opposite in 2019._ → **✓** check the figure; it takes four minutes.   **✗** Naming the interest and stopping. → **✓** one sentence, then the figures.   **✗** _**Your** claim is wrong._ → **✓** the claim is wrong.   **✗** _I do not judge people._ → **✓** judge their reliability; check the claim.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The pattern of eleven letters told her how carefully to check what he sent** — **and she says it was real information and she was not inventing it.** **What she used it for was whether the twelfth letter was true**, **which it cannot do.** **That split is the whole page and it is the part to put on the board:** **one true thing, two jobs, and only one of them its own.**'));
out.push(A('**2** ⚠ **It saved four minutes** — **the figure is in the yearbook and she has the yearbook.** **It cost four reprints of a wrong number, half a column of correction, and the only reader who had noticed.** **The last item is the one students miss:** **the cost was not only the error but the loss of the one person who was checking them.**'));
out.push(A('**3** ⚠ **A narrow rule:** **if a letter contains a number we have printed, somebody checks the number before the letter is spiked** — **four minutes a letter, about a dozen letters a year, forty-eight minutes against half a column.** **And the unresolved thing at the end:** **he has written five times since and two of those five were also right** — **so the man whose letters she was using as a reason not to read him has a better record on figures than the section does.** **She says she does not know what to do with that except to say it.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FOURTH COMPLAINT** · R. Shaaban · 19 April · _for the gate staff_',
  '**In October a driver said our batch-number rule was being applied to loads it was not written for, and I dismissed it because he had complained three times that year.** ⚠ **He was right.**',
  '**What I did, exactly.** **I heard him out, said I would look, and did not look.** ⚠ **The reply I formed was about the three complaints and not about the rule.**',
  '**Why that felt reasonable at the time.** ⚠ **Three complaints in a year from one driver is real information and I was not inventing it.** **It tells me how fast to check what he says.** **It does not tell me whether the fourth complaint is true.**',
  '**What the shortcut saved and what it cost.** ⚠ **It saved about ten minutes with the rule in front of me.** **It cost two refusals that should not have happened, four days of his, and a man who now sends somebody else to the gate.**',
  '**What I should have said.** ⚠ _Show me the load and I shall read the rule with you now._ **Eleven words.**',
  '**And the rule I am proposing.** ⚠ **A complaint about the wording of a rule is read against the rule before it is answered.** **Ten minutes a complaint, about eight a year.**',
  '**One more thing.** ⚠ **Two of his four complaints were right, which is a better rate than my own notes.**',
]));
out.push(S('Stage 7 · Write freely (sample, 203 words)'));
out.push(SAMPLE([
  '**THE NINTH NOTE** · J. Attar · 21 April · _for the moderators_',
  '**In January a member said our thread rules were being applied to quoted material, and I closed the note because he had posted eight complaints in six months.** ⚠ **He was right, and the rules say so.**',
  '**What I did, exactly.** **I read the note, wrote two lines about the eight complaints, and closed it.** ⚠ **The reply was about his posting record and not about the rules** — **and I had the rules open in another window.**',
  '**Why that felt reasonable at the time, which is the part worth writing down.** ⚠ **Eight complaints in six months is real information and I was not inventing it.** **It tells a moderator how carefully to read what somebody sends and how long to spend on it.** **It does not tell him whether the ninth note is right** — **and I used it for the second thing, which it cannot do.**',
  '**What the shortcut saved and what it cost.** ⚠ **It saved about five minutes.** **It cost two deletions I had to restore in March, one member who left, and the only person on the forum who reads the rules.**',
  '**What I should have written, and it is one line.** ⚠ _You are right that rule four does not cover quotations; I shall post a correction today._ **Fifteen words.** **The eight complaints could have stayed exactly where they were** — **in my judgement about how fast to read him, and not in my judgement about whether he was right.**',
  '**And the rule I am proposing.** ⚠ **A note that quotes a rule is checked against the rule before it is closed.** **Five minutes a note, about twenty notes a year.** **An hour and a half against two restorations and a member.**',
  '**One more thing, since I am writing it down.** ⚠ **He has sent three notes since and two were right.** **The man whose record I used as a reason not to read him reads the rules more often than the moderators do.**',
]));
out.push(A('**203 words, the concession inside the first two sentences, his own bad reason taken seriously and then split into its two jobs, both sides of the shortcut priced in the same units, and an unresolved sentence at the end.** ⚠ **The line that earns the band is _and I had the rules open in another window_** — **six words that make the shortcut indefensible without a single adjective**, and the rest of the page is built on it.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: your own bad reason split into its two jobs.** _"It tells a moderator how carefully to read what somebody sends… It does not tell him whether the ninth note is right."_ ⚠ **Two sentences, one true thing, two jobs.** **Mine says _I should not have judged him_**, which throws away a judgement that was correct and teaches me nothing for next time.',
  '**One thing to keep, and why it works.** _"and I had the rules open in another window"_ **It removes every excuse in six words** — **and it is the only sentence on the page that could not have been guessed.**',
  '**Ranking of the slip I was given.** **1** the bad reason split in two **2** both sides priced in the same units **3** the unresolved thing at the end **4** the concession in the first two sentences _(there, in four words, and the easiest of the four)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The disagreement twice: with the person in the sentence and with the person taken out.** **The room says which could be answered by defending a name, and the first can, every time** — **which is why it is the version people reach for and why it never settles anything.** **Finish on Mrs Khoury\'s sentence:** **the man whose letters I was using as a reason not to read him has a better record on figures than the section does.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The last argument I dismissed:** the stores clerk on the key register._',
  '⚠ _**Which shape:** the record. **He lost a key in 2022 and I have mentioned it twice since, including once in his hearing.**_',
  '_**What I should have checked:** whether the register has ever recorded a key going out at night. ⚠ **Time: four minutes, and the register is on my own shelf.**_',
]));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  The whole brief'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second half is the diagnostic:** **the missing part is the condition in most cases and the counter in the rest, and almost nobody has ever left out their own view.** **Put that on the board in those words.** **The two parts that serve the reader go missing; the one that serves the writer never does.**'));
out.push(A('**b** **2** — _the attribution · the case at full strength · the strongest counter · the condition · your own view._ ⚠ **4 is the near miss and about a third of any room chooses it**, because putting your view second feels honest. **It is 16.3 lost at the level of the page:** **a reader who has your view before the case reads the case as support for you**, and nothing after it can be read any other way.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **both sides must say their own case is well put**; and **your own view goes once, at the end, after the reader has had the case.**'));
out.push(A('**b** **1** ⚠ **The morning side said yes.** **The afternoon side said no and gave her a figure she had not used** — **the analyser reaches temperature in forty minutes and the morning shift spends those forty minutes on other work.** **She put it in, sent it again, both said yes** — **and the meeting then took eighteen minutes, which it had never done.**   **2** ⚠ **A brief that only one side signs is a submission with a brief\'s manners.**'));
out.push(NOTE('⚠ **The distinction that carries this cycle is _well put_ against _fairly put_, and it is worth the whole lesson.** **Mrs Sabbagh had put one case well and one fairly, and the difference was a single figure the other side had and she did not.** **A fairly-put case contains nothing false and still loses**, because the figures that decide a question are usually held by the people who hold the position. ⚠ **So the instruction is procedural rather than moral: send the draft to both sides and ask one question each** — _is your case well put here?_ **That is the homework, it takes a day, and it is the only part of this unit that a student can hand to somebody else.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(the attribution)_ _The afternoon side asked me to put their case and the morning side has read this and signed it._',
  '**2** _(the case at full strength, with its source)_ _Two repeats in thirty-one days against nine, from the repeat book, which the morning side keeps._',
  '**3** _(the strongest counter)_ ⚠ _The overlap with the day clerk drops from three hours to one, and the three hours are when queries are settled._',
  '**4** _(what would settle it)_ _Four months of afternoon running, with the temperature log and the repeat book kept as they are._',
  '**5** _(your own view, one sentence)_ ⚠ _I would move it, and I have not answered Mr Hariri\'s point._',
]));
out.push(A('⚠ Item **2** is marked on the source and nothing else: **the strongest version of a case you do not hold takes its figure from the people who hold it**, and a figure from your own notes is a summary. Item **5** is marked on length — **one sentence** — **and on whether the weakness is inside it.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _This is the laboratory\'s case and I was asked to put it._',
  '**B** **Part 1.** **Right place** — **it is the first line.** **Before it: nothing.**',
  '**A** _(the ⚠ row)_ _Obviously the morning arrangement has served us well._',
  '**B** ⚠ **Part 5, in the wrong place and the wrong clothes.** **_Obviously_ is the word that gives it away.** **As part 2 it would have to be:** _the morning arrangement has produced nine repeats in thirty-one days, which is the figure the afternoon side uses against it._ ⚠ **Before it: the attribution.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The part number for each line and what must come before it. ⚠ **The four ⚠ rows are the writer\'s view dressed as something else** — _obviously_, _clearly_, _nobody could seriously_, _not really in doubt_ — **and each is part five in the wrong place.** **Make the listeners name the word that gives it away**.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Five lines:** attribution **16 words** · the case **38** · the counter **31** · the condition **22** · my view **14**. **121 in all.**_ ⚠ _**The strike-out:** two _of course_ and one _obviously_ have gone. **All three were in the counter paragraph**, which means I had been conceding and withdrawing it in the same breath._',
  '**b** ⚠ _**She read both cases at the same speed and said I hold the morning case** — **not from my view paragraph but because the morning case has a sourced figure and the afternoon case has an adjective.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Nour wrote a brief on the afternoon analyser question and did something unusual with it: she gave it to both sides before the meeting and asked each one question — is your case well put here? The morning side said yes. The afternoon side said no, and gave her a figure she had not used, which is that the analyser reaches temperature in forty minutes and the morning shift spends those forty minutes on something else. So she had put one case well and one case fairly, and those are not the same, and the difference is one figure. She put it in and sent it again, both said yes, and then the meeting took eighteen minutes, which it has never done. Which is the test for the whole page: both sides must say their own case is well put, and a brief that only one side signs is a submission with a brief’s manners. Dima asked about the five parts, and they are whose case it is, the case at full strength, the strongest argument against it, what would settle it, and her own view, once, at the end. Omar asked why the view goes last and not first, and because a reader who has your view first reads everything after it as support for you: it is 16.3 at the level of the page, the working before the verdict every time, and your view is a verdict. Adnan asked about leaving it out altogether, which is worse, and students always propose it — a brief with no view in it makes the reader hunt for one and they will find it, in your adjectives and in which case got three sentences and which got two. Give it once, plainly, where it cannot contaminate the case. Hiba asked whose condition the condition is, and both — what would settle it for the room, not what would change your mind, and then each side says whether they would accept that. Bassel asked what happens if one side will not accept any condition, and then you have found the real disagreement and it is not about the analyser: put that in the brief as the last finding, without a complaint in it, and the meeting is then about the right thing. And Mazen asked about reading it aloud, which is each case read as the person whose case it is, both at the same speed, because a brief read in your own voice throughout has only one case in it.']));
out.push(A('Listener task: which of the two cases the partner holds, and how the listener knew. ⚠ **Collect the _how_ and not the _which_.** **The usual answers are: one case is longer; one has a sourced figure and the other has an adjective; one paragraph has a concession in it and the other does not.** **None of them is the view paragraph.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Your view in the first paragraph. → **✓** once, at the end.   **✗** No view anywhere. → **✓** one sentence, plainly.   **✗** _Obviously the present arrangement works._ → **✓** a figure, with its source.   **✗** _What would change my mind._ → **✓** what would settle it, for the room.   **✗** One side consulted. → **✓** both, and say so in the first paragraph.   **✗** Four pages. → **✓** one.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Two repeats in thirty-one days against the morning\'s nine in the same period** — **and the figure is from the repeat book, which the morning side keeps.** **That is the sentence to point at:** **the strongest version of the afternoon case is built out of the morning side\'s own records**, which is why the morning side signed the brief.'));
out.push(A('**2** ⚠ **The two-hour overlap.** **If the analyser runs in the afternoon the overlap with the day clerk drops from three hours to one, and the three hours are when queries are settled** — **about four a day, and Mr Hariri is the person they fall on.** **Who has answered it: nobody on the afternoon side, including her.** **The _including me_ is four words and it is what makes the brief credible.**'));
out.push(A('**3** ⚠ **The morning side accepts the four-month trial with one condition of their own: that the four months include a December**, **because December is the month they say the overlap matters** — **and she has put it in.** **What neither side has raised:** **Miss Mansour is the only person trained on the afternoon settings**, **so if she is away for three weeks of a four-month trial the trial is not a trial** — **and nobody has said who should be trained before it starts.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**BRIEF: THE SECOND SIGNATURE** · N. Sabbagh · 22 April · _to the four of us, before Monday_',
  '**The ward sisters asked me to put their case for keeping the second signature and the night staff have read this and signed it.** ⚠ **Both have told me their own case is well put here.** **My view is at the end and nowhere else.**',
  '**The case for keeping it, at full strength.** **In the four years before the second signature, three handovers were disputed and none could be resolved.** ⚠ **Since it was introduced there have been none, and that figure is from the night book, which the night staff keep.**',
  '**The strongest argument against it.** ⚠ **In the fourteen handovers I looked at, the second name is the same person eleven times, including two nights he was not on duty.** **Mr Hariri says he signs because refusing would look like an accusation.** **Nobody on the ward sisters\' side has answered that, including me.**',
  '**What would settle it.** ⚠ _Three months in which the second signature is given by whoever checked, with the name written at the time._ **The night staff accept this.** **The ward sisters accept it with one condition: that it covers a Ramadan rota.**',
  '**And one thing neither side has raised.** ⚠ **Nobody records a catch.** **If the second signature has ever found an error, there is no line on the form for it.**',
  '**My own view, once.** ⚠ **I would keep it and add the line for a catch** — **but I have not answered Mr Hariri\'s point.**',
]));
out.push(S('Stage 7 · Write freely (sample, 210 words)'));
out.push(SAMPLE([
  '**BRIEF: RUSH WORK AFTER FOUR O\'CLOCK** · B. Tahhan · 24 April · _to the two of us, before the July prices_',
  '**The customers\' side of this was put to me by a messenger and I have put it; the pressmen have read this and signed it.** ⚠ **Both have told me their own case is well put here.** **My view is at the end and nowhere else.**',
  '**The case for taking stamped work after four, at full strength.** **The ministry stamps at four, so a messenger cannot reach us before twenty past.** ⚠ **Of the twenty-two jobs refused last year, fourteen arrived between four and half past** — **and that figure is from our own refusal book, which the pressmen keep.** **None of the fourteen was a planning failure: the stamp is the delay and the customer does not control it.**',
  '**The strongest argument against it.** ⚠ **The press is cleaned at half past five.** **A job started after that costs the first run of the next morning, which is the run with the deadline on it** — **and Mr Hariri, who cleans it, puts the loss at about forty minutes of the morning.** **Nobody on the customers\' side has answered that, including me.**',
  '**What would settle it.** ⚠ _Three months in which stamped work in the hand by five is taken at the ordinary price, with the cleaning time and the morning run both logged._ **The customers accept this.** **The pressmen accept it with one condition: that the three months include a Ramadan, when the stamping hours move.**',
  '**And one thing neither side has raised.** ⚠ **Nobody has asked the ministry whether the stamp could be at half past three on press days.** **It may be refused in a sentence, and the sentence costs a letter.**',
  '**My own view, once.** ⚠ **I would take the stamped work by five** — **but the forty minutes of the morning is a real cost and I have not answered it.**',
]));
out.push(A('**210 words, both signatures claimed in the first paragraph, the case built on a figure from the pressmen\'s own book, the counter given at full strength with the person it falls on named, a condition each side has accepted with its own addition, and his view in one sentence with its weakness inside it.** ⚠ **The strongest thing on the page is _none of the fourteen was a planning failure: the stamp is the delay_** — **it answers the objection the pressmen would have made before they make it**, which is why they signed.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: a figure from the other side\'s own records.** _"that figure is from our own refusal book, which the pressmen keep"_ ⚠ **Their book, counted their way.** **Mine uses my own tally**, which the other side has already told me they do not accept — **so the strongest part of my brief is the part they will spend the meeting disputing.**',
  '**One thing to keep, and why it works.** _"Nobody has asked the ministry whether the stamp could be at half past three on press days."_ **It is the only line that could end the argument instead of settling it** — **and it costs a letter.**',
  '**Ranking of the slip I was given.** **1** the figure from their own records **2** the unanswered counter named **3** your view with its weakness inside it **4** both signatures claimed _(claimed in the first paragraph, and the easiest of the four to write and the hardest to earn)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The partner reads both cases as the people whose cases they are, at the same speed, and then says which one the writer holds.** **It is almost never the view paragraph that gives it away** — **it is the length, an adjective, or which case got the sourced figure.** **Finish on Mrs Sabbagh\'s sentence:** **one case well put and one case fairly put, and the difference was one figure.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Brief written and sent to both sides.** **The ward sisters said yes.**_',
  '⚠ _**The night staff said no, and added this:** _the second signature is given by whoever is nearest, and on two of the nights in your fourteen the man who signed was not on duty._ **That is from their own book.**_',
  '_**So I had put one case well and one fairly, which is exactly the cycle.** ⚠ **I have put it in and sent it again, and both have signed it.** **The brief is nineteen words longer.**_',
]));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: The advocate and the believer'));
out.push(S('Stage 1 · Get ready – Unit 17 quiz'));
out.push(A('**1** _I am **instructed** to put…_   **2** _The strongest case against me **is** the two days._   **3** _He **takes** issue with the argument…_   **4** _Her **refutation** of the figure…_   **5** _The claim is not **plausible**…_   **6** _If four months **show** fewer than two…_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **The post is missing which part of the case its holder would not give up** — **the server bill, or the two volunteers.** **The one question that would have supplied it:** _which part of this would you not give up?_ **Eight words, asked before a word is written.** **Then that part goes last and plainest, and everything else is support.** ⚠ **And the sentence an advocate can add at the end of any case:** _the part of this that its holders would not give up is the two volunteers._'));
out.push(NOTE('⚠ **This is the only cycle in the unit where neither party is in the wrong, and the class has to accept that before the mediation makes sense.** **Mr Attar\'s post does everything 17.1 to 17.6 teach** — **the attribution in the first sentence, the figures theirs and checked, the case at full strength** — **and the man whose case it was is worse off than if it had been put badly.** ⚠ **The finding is new to the book and it should be given in these words: strength and importance are not the same thing.** **A committee answers the answerable part, which is usually the number, and the number is rarely the part its holder cares about.** ⚠ **Mr Attar\'s reason for not asking is the one to leave in the room** — **he thought asking would make it his case, and it would have made it more theirs.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7. ⚠ **The three moves are the examinable content and the third is the one that gets skipped:** **say whether the advocate can supply it.** **Here he can, in one sentence, and only after asking.** **Keep the mediator\'s limit explicit:** **the mediator does not decide which half of somebody\'s case matters to them** — **that is the one thing in this unit that cannot be worked out from the page, and guessing it is the harm 15.7 was about.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What it says.** **Three things: the server bill, the two volunteers, and the arithmetic of a charge.** **All of them accurate and all of them his.**',
  '**The part its holder would not give up.** ⚠ **The volunteers.** **Two people did unpaid work for six years and stopped because it was being taken for granted** — **and the charge was never about the bill.**',
  '**Can the advocate supply it?** ⚠ **Yes, in one sentence, and only after asking:** _the part of this that its holders would not give up is the two volunteers._',
  '**And Pair B, for contrast.** ⚠ **Not a load-bearing case at all: the advocate used the nine per cent from the draft and the holder\'s own book gives eleven.** **A case put with somebody else\'s number is not their case** — **and the remedy is a correction with the source named, not a question about importance.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair. ⚠ **Pair B is the discrimination the cycle is built on and the room will treat it as another load-bearing case.** **An advocate who has used a figure its holder does not accept has misput the case**, and no question about importance will mend it. **Two different faults, two different remedies: a sentence for the first, a correction for the second.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The case:** the stores clerk\'s case for two sets of keys, which I put at the April meeting._',
  '_**What it says.** **The second set has been used four times this year, twice at night.** **Accurate, and his.**_',
  '⚠ _**The part he would not give up:** I do not know. **I assumed it was the four uses, because that is the countable part.**_',
  '_**Did I ever ask him?** ⚠ **No.** **And when I asked him this week he said it was none of the four** — **it is that the night porter is alone and the keys are the only thing he can do without waking anybody.** **The committee spent its twenty minutes on the four uses.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A post that does everything the unit has taught, and the man whose case it was is worse off. Asked whether the post is wrong, Jad said no — he would write it again, and Tareq is right as well, which is the part he did not expect. Tareq said he put the case better than he can put it himself, and that the committee answered the server bill, which he can live without, and never touched the two volunteers, which is the whole reason he started. So the mediation, which is three moves: separate what the case says from what its holder wants from it; find the part the holder would not give up; and say whether the advocate can supply it. What the post says is three things — the bill, the volunteers, and the arithmetic of a charge — all accurate and all his. The part Tareq would not give up is the volunteers: two people did unpaid work for six years and stopped because it was being taken for granted, and the charge was never about the bill. Which is the finding of the cycle and it is new: a case can be put at full strength, with every figure checked, and still be answered on the part its holder does not care about, because strength and importance are not the same thing. Jad said the committee answered the part that was easiest to answer, which was the bill, because the bill is a number — and it always is: a committee answers the answerable part, and if you do not say which part is load-bearing, the answerable part is the one that gets the meeting. Adnan said so the advocate asks one question first, and one question, before a word is written: which part of this would you not give up? Then that part goes last and plainest, and the rest is support. Eight words, and Jad did not ask them — he said he did not ask because he thought asking would make it his case, and it would have made it more theirs. Rim asked what the mediator does when neither of them is wrong, and the mediator names the question and hands it to the person who can answer it, which here is Tareq, who has never been asked which part is load-bearing; the mediator does not decide which half of somebody’s case matters to them. Hiba asked what we must not do, and two things, the second of which looks generous: do not improve the post, and do not hand the case back to its holder as a solution, because that returns him to putting it badly, which is where the unit started.']));
out.push(A('Listener task: the part the holder of the student\'s own last case would not give up, and whether they asked. ⚠ **The second half is the finding and the honest answer is almost always no.** **Then the follow-up, which can be done before the next lesson:** **go and ask, and bring the answer in their words.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Redrafting the post. → **✓** the post is good; find the question.   **✗** _I expect it was the figure._ → **✓** ask him.   **✗** Deciding which half matters. → **✓** that is the holder\'s to say.   **✗** Handing the case back to him. → **✓** he puts it badly; that is why you were asked.   **✗** Treating Pair B as load-bearing. → **✓** a wrong figure needs a correction.   **✗** _You are both right._ → **✓** both accounts are accurate, and here is the question.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 1)'));
out.push(A('**1** A _(speak)_   **2** B _(make)_   **3** C _(pick)_   **4** D _(taken)_   **5** B _(reads)_   **6** C _(bears)_   **7** A _(take)_   **8** D _(reach)_'));
out.push(A('⚠ **Items 1, 3, 4 and 7 are fixed collocations and nothing else will do:** _speak for somebody_ · _pick something apart_ · _take issue with_ · _take one thing for another_. **Teach them as whole phrases rather than as verbs with particles**, because the particle is not predictable. **Item 5 is the grammar item inside the lexical ones:** ⚠ **_the attribution reads as a frame_ is the intransitive _read_** — **a thing reads well or badly** — **and students who have only met the transitive verb choose _says_.** **Standing instruction for Part 1: read the whole text before the options, because four of the eight gaps are decided by a word three lines away.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE CASE, TWO ACCOUNTS** · O. Darwish · 26 April',
  '**The case.** _"I am putting the night shift\'s case, which is being put badly: the sheets take eleven minutes at the end of a twelve-hour turn, there is one torch between three men, and nobody has ever been told the sheets are theirs."_',
  '**The advocate.** _"The attribution is in the first sentence, every figure is theirs, and the section finally answered it instead of talking about attitude."_',
  '**The holder.** _"He put it better than I can. And the section answered the eleven minutes, which I can live with. Nobody said anything about the torch."_',
  '⚠ **Both accounts are accurate and neither is about the post.**',
  '**What the case says.** **Three things: the minutes, the torch, and the name nobody was given.** ⚠ **All of it accurate and all of it theirs.**',
  '**The part its holder would not give up.** ⚠ **The torch.** **Eleven minutes is a nuisance; one torch between three men at two o\'clock is the reason the sheets are filled in from memory at six.**',
  '**Can the advocate supply it?** **Yes, in one sentence, by asking first.**',
  '**And what I am not doing.** ⚠ **Improving the case**, and **handing it back to the night shift as a solution** — **they have had it for two years and nobody has been listening.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 1: the essay, sample 184 words)'));
out.push(SAMPLE([
  '**Is it dishonest to argue for something you do not believe?**',
  '**It is not dishonest to argue for a position you do not hold, provided that you say whose it is; it becomes dishonest at the point where you state as a fact something you know to be untrue.**',
  '**The question of honesty is really a question about one sentence.** **If I put a colleague\'s case and say in my first line that it is his, nobody has been deceived about anything.** **If I leave that line out, or bury it at the end of two hundred words, I have let a reader believe something false** — **not about the argument, but about me** — **and that is the deception, not the advocacy.**',
  '**The usefulness is easier to show and it is larger than people expect.** **Most decisions are taken with somebody absent.** **A decision taken with one side absent and badly summarised is worse than the same decision with that side well summarised**, so refusing to put a case you disagree with does not protect your conscience: it damages the decision and costs somebody who is not in the room.',
  '**There is a third point, which is the one I had not expected.** **A case put at full strength can be answered on the part its holder does not care about.** **So the advocate has one more duty: to ask which part they would not give up, and to put that part last.**',
  '**The line, then, is not between believing and arguing.** **It is between an argument with a name on it and a false statement with nobody\'s name on it at all.**',
]));
out.push(A('**184 words, inside the 140–190 band.** ⚠ **The question is answered in the first sentence with the condition attached**, **both given notes are used and the second is developed further than the first**, **the third point is taken from 17.7 rather than from general observation**, **and the conclusion restates the distinction instead of summarising the paragraphs.** **The sentence that earns the band is _not about the argument, but about me_** — **it locates the deception precisely, which is what the question asks for.**'));
out.push(S('Stage ✓ · Unit 17 check'));
out.push(A('**A** **1** a _(refutation)_   **2** c _(instructed)_   **3** b _(against)_   **4** a _(representation)_   **5** b _(says)_   **6** c _(coherence)_   **7** a _(show)_   **8** c _(dismissal)_'));
out.push(A('⚠ **Item 5 is the item that separates a class:** **_nothing_ is singular**, so the verb is _says_ — **and a room that has just read six briefs full of plural nouns reaches for _say_.** **Read the subject aloud before the verb.** **Item 7 is the same fault with the opposite answer:** ⚠ **_four months_ is plural**, so it is _show_, **and the first-conditional _if_ clause takes the present.** **And item 8 is the unit\'s word-formation hinge:** **_dismissive_ describes a manner and _dismissal_ is the act** — **the sentence is about an act that was polite, which rules out the manner word.**'));
out.push(A('**B  Listening** **1** B   **2** A   **3** A   **4** C   **5** B   **6** B   **7** C   **8** C'));
out.push(A('⚠ **Part 1 is eight unrelated extracts and the hardest thing about it is the pace, not the language.** **Give the standing instruction before the first playing: read the stem and underline the question word** — _what does he say he did wrong_, _what surprised her_ — **because three of the eight distractors are true statements that do not answer the question asked.** ⚠ **Extract 2 is the clearest case:** **_that it came from a driver_ is true of the cycle and is not in the recording at all**, and students choose it from memory of 17.2. **Play the recording twice.**'));
out.push(A('**C  Writing** — **marked on the two given notes, the third point, and the first sentence.** ⚠ **All four or the content and organisation marks go.** **The commonest loss is the first sentence:** **a script that opens _there are two sides to this question_ has not answered it**, and the examiner has no way to tell whether the writer ever does. **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 17 (sample)'));
out.push(SAMPLE([
  '_**Essay written, 184 words.**_',
  '_**Mediation written, and the question asked on the Wednesday** — **the stores clerk said it was the night porter being alone, which was not in the case I put at all.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the five parts of a brief. **The eight words** — **which part of this would you not give up?** **I have asked them twice this week and been wrong both times.**_',
]));
out.push(sp());
out.push(box('After Unit 17', [
  '**Unit 18 is about length.** ⚠ **For six cycles the class has been building cases at full strength; 18 asks them to summarise at length and then to cut** — **a twenty-page report into one page, a meeting into six lines, a year into a paragraph** — **without losing the thing the reader would have acted on.**',
  '⚠ **The connection is 17.6 and it should be named on the first day of 18.** **A brief is already a summary with a rule about what cannot be left out**, and 18.1 asks the same question of everything else: **what is the part that, if it goes, makes the rest not worth reading?** **The students who can say which part of a case is load-bearing can do 18; the ones who cut by length alone produce shorter documents that are no use to anybody.**',
  '**And 18 closes the first half of the book.** ⚠ **The Mid-Book Test follows it and carries the six examination parts taught in 13 to 18** — **Reading 6, 7, 3, 4, 1 and 2, Writing Parts 1 and 2, and all four Listening parts.** **Sixty marks, and the weighting is the examination\'s own: forty for reading and use of English, twenty-five for writing, twenty-five for listening and ten for speaking.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 17 · Answer Key');
