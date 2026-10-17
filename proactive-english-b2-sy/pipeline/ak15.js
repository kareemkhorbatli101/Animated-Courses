// Proactive English B2 · Syria Edition · Book 2 · Unit 15 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 15  Writing to Somebody Who Has Already Said No — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **This unit needs a week\'s notice and it is the only one in the book that does.** **Ask the class, before 15.1, to go and find out one fact about their own refusal that they could not have known at the time.** **A class that arrives without having looked cannot do 15.1** — **and a class that has looked and found nothing can**, because that is the case the cycle opens on.',
  '**Expect between a third and a half of the room to have nothing.** ⚠ **That is not a failure of the task and it should be named as the unit\'s first finding**: **a second letter with no new fact is the first letter sent again, and what it asks the reader to do is to have been wrong.**',
  '**Mr Barghouti carries this unit**, because he drafts refusals and has reversed about fourteen of them. ⚠ **His sentence is the one to leave on the board for seven cycles:** **_with a new fact I have something to write in the file; without one the file says changed mind, and I am not writing that about my own decision._**',
  '**The unit is not about persuasion and the key should say so early.** ⚠ **Everything here assumes the reader was entitled to refuse and may refuse again.** **The whole technique is built on making the second refusal cheap for them**, which is the only reason anybody ever reconsiders.',
  '**15.7 carries the examination papers.** **Reading and Use of English Part 3** is word formation, **Writing Part 1** is the essay, and **Listening Part 3** is multiple matching. ⚠ **The essay question in 15.7 has its strongest objection on the unexpected side**, and the concession paragraph should be planned before anything else is written.',
], C.lblue, C.navy));

// ===================== 15.1 =====================
out.push(pb());
out.push(h2('15.1  What has changed'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The two columns on the board are the cycle and the empty ones are the teaching.** **Count them out loud.** In most classes **between a third and a half of the second column is blank**, and those students are not behind: **they are the ones who will learn 15.3 properly, because they have to.**'));
out.push(A('**b** New facts: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **5 is the honest one and it is worth praising** — _nothing has changed, but I am asking again_ **at least knows what it is doing**, which **1** and **3** do not.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a fact that was not available when they refused** — and **a second letter with no new fact is the first letter sent again, and it asks the reader to have been wrong.**'));
out.push(A('**b** **1** ⚠ **That the Harasta run has been merged with the Jaramana one**: **there is one gate now, not two** — and the refusal was on the cost of staffing two. **Her first sentence is eleven words.**   **2** ⚠ **To have been wrong.** **A reader who reverses a refusal with no new fact has to explain to somebody else why they refused in the first place.**'));
out.push(NOTE('⚠ **Mr Barghouti\'s file is the mechanism and it should be taught as one, because it removes all the psychology from this unit.** **When he refuses something he writes a line in the file saying why. To reverse it he has to write a second line.** **With a new fact the second line writes itself** — _merged into one gate in November, so the cost objection falls._ **Without one, the only line available is _changed mind_.** ⚠ **Nobody writes that about their own decision**, because somebody will read the file in two years and it will be the only thing in it. **Four minutes against four weeks**, and the difference is the file and not the person.'));
out.push(NOTE('**The honest alternative must be given as firmly as the technique, or a third of the class will write a second letter anyway.** ⚠ **If there is genuinely no new fact, there are two honest things and writing again is not one of them: wait for a fact, or ask for something smaller.** **A smaller ask is itself a change** — **it is a different request and can be granted without anything being reversed** — **and 15.3 is where it is built.** ⚠ **Tell the class in 15.1 that 15.3 exists**, so that the students with an empty second column spend the cycle learning rather than feeling behind.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cost that has gone)_ _Since November the two gates have been merged into one._',
  '**2** _(a number that has changed)_ _Four new staff started in October, which takes the section from seven to eleven._',
  '**3** _(a person who has moved)_ _The arrangements are now held by the transport office rather than by the depot._',
  '**4** _(no new fact, said plainly)_ _I have looked and there is nothing. I shall wait, or ask for less._',
  '**5** _(one that opens on the past)_ ⚠ _Further to my request of 3 September…_ **Six words and the reader has put it down.**',
]));
out.push(A('⚠ Mark these on **one thing only: is there anything about the past in the sentence?** **Any reference to the earlier letter, the earlier decision or the writer\'s own feelings fails**, however short. Item **4** is a correct answer and must be marked as one: **the honest _none_ is worth more than the best reconstruction**, and students will not believe that unless it carries a tick. Item **5** should be read aloud twice: ⚠ **the room should hear the six words and notice that it already knows what the letter is.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** Second seal check refused on cost / the two gates have merged.',
  '**B** **Since November the Harasta and Jaramana runs have been merged. There is one gate now, where there were two.**',
  '**A** _(the ⚠ row)_ Scaffold refused in September / nothing has happened.',
  '**B** ⚠ **There is no new fact.** **Wait, or ask for less** — **and in this case the scaffold cannot wait, so it is a smaller ask: the front elevation for six weeks rather than the whole building.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each first sentence, and for the four marked ⚠ which honest option B chose. ⚠ **All four of the ⚠ rows describe a change in the writer and not in the world** — _nothing has happened_, _I still think_, _I have thought about it a great deal_, _more politely_. **Write those four phrases on the board** and ask how many of the room have one of them in a draft: **it is usually most of them, and a change of feeling is not a new fact however strong the feeling is.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**First sentence:** "Since the November reorganisation the handover sheets for the two Homs sites are held by one office." **Seventeen words.**_ ⚠ _**First attempt was thirty-one** and had "which was the difficulty you raised in September" at the end of it. **Out.**_',
  '**b** _**Partner guessed:** that I am asking for the handover process to be reconciled centrally. ⚠ **Right**, which means the fact is connected to the ask._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim gave the refusal with its date — a second seal check at the Harasta gate, refused on the third of September on cost — and the thing she has found out since: the Harasta run has been merged with the Jaramana one, so there is one gate now and not two. Then her letter has a first sentence and it is eleven words long: since September the two gates have been merged into one. Nothing about the refusal, nothing about the cost, nothing about September. Omar said his second column is empty, that he looked and there is nothing, and then he has the most useful outcome in the room — a second letter with no new fact is the first letter sent again, and what it asks the reader to do is to have been wrong. Dima said which nobody does, and nobody does, and the reason is not pride: a reader who reverses a refusal with no new fact has to explain to somebody else why they refused in the first place, so you have made your request into their problem. Adnan, who refuses things, said he can change his mind on a fact in four minutes and cannot change it on a request in four weeks, and the difference is exactly that — with a new fact he has something to write in the file, and without one the file says changed mind, which he is not writing about his own decision. Bassel asked what to do if you genuinely cannot find a new fact, and there are two honest things and writing again is not one of them: wait for a fact, or ask for something smaller. And Jad asked how new the fact has to be: something they could not have known when they refused, and not something they overlooked — as I mentioned in September is the commonest first six words of a failed second letter, and it is an accusation. Mazen asked about the order, since his letter would start by referring to the earlier one, and the fact goes first and the reference to the refusal afterwards or not at all: a letter that opens further to my request of 3 September has told the reader in six words that this is about the past, and they have put it down. Open with the thing they do not know.']));
out.push(A('Listener task: the partner\'s first sentence and the request they think is coming. ⚠ **Count the guesses that were right.** **In a first run about two-thirds of the room produces a fact nobody can connect to a request**, which is a different fault from having no fact at all and is fixed in 15.3. **Then collect the word counts**: **anything over twenty-five has something about the past in it**, and making the student find it themselves takes about fifteen seconds and teaches more than being told.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Further to my request of 3 September._ → **✓** the new fact, first.   **✗** _I still feel strongly about this._ → **✓** a change in the world, not in you.   **✗** _As I mentioned in September._ → **✓** an accusation, not a fact.   **✗** Reconstructing a fact that is not there. → **✓** write _none_ and wait, or ask for less.   **✗** A fact nobody can connect to the ask. → **✓** 15.3.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **A fact he did not have when he refused** — **in thirteen of the fourteen**, something had changed between his refusal and their letter, and the letter said what it was before it said anything else. **In no case did anybody persuade him of anything.**'));
out.push(A('**2** ⚠ _**I know what the letter is, I know how it ends, and I read the rest of it looking for where to stop.**_ **Twenty-six of the thirty-one letters that failed opened that way.**'));
out.push(A('**3** ⚠ **Say what would change your mind, in one line.** _This would be reconsidered if the second gate were closed._ **Of the fourteen reversals, eleven came back from people he had told what to look for** — **faster, shorter, and three of them with the fact and no argument at all.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE ONES I CHANGED MY MIND ABOUT** · R. Shaaban · 10 January · _for the two who sign refusals with me_',
  '**In six years of refusing consignments I have reversed eleven refusals.** ⚠ **Nine of the eleven had a fact in the first line I did not have when I refused.**',
  '**A fact, not an argument.** ⚠ **Nobody has ever argued me out of a refusal** and I had not noticed that until I counted.',
  '**What the ones that failed looked like.** **Twenty-two in the same period.** ⚠ **Fourteen of them restated the original request at greater length.** **What happens when I read a longer version of something I have already refused: I look for the new sentence, do not find one, and reply with the first refusal.**',
  '**Why it is a mechanism.** ⚠ **A refusal of mine goes on a form with a reason box.** **To reverse it I have to fill the box again**, and _changed mind_ is not a reason the next person will accept.',
  '**And what I would tell the two of you.** ⚠ **Put one line in every refusal saying what would change it.** **It costs eight words and the letters that come back are shorter.**',
]));
out.push(S('Stage 7 · Write freely (sample, 214 words)'));
out.push(SAMPLE([
  '**THE ONES I CHANGED MY MIND ABOUT** · A. Barghouti · 9 January · _for the two clerks who draft refusals_',
  '**In nineteen years I have reversed about fourteen refusals**, and ⚠ **thirteen of the fourteen have the same thing in the first sentence of the letter that reversed them: a fact I did not have when I refused.**',
  '**Not a better argument.** ⚠ **In no case did anybody persuade me of anything.**',
  '**What the ones that did not work looked like, and I counted those too.** **Thirty-one in the same period.** ⚠ **Twenty-six opened with a reference to the earlier correspondence.** **I can tell you exactly what happens when I read those six words: I know what the letter is, I know how it ends, and I read the rest looking for where to stop.**',
  '**Why a new fact is a mechanism and not a courtesy.** **When I refuse I write a line in the file saying why. To reverse it I have to write a second line.** ⚠ **With a new fact it writes itself. Without one the only line available is _changed mind_** — **and somebody will read that file in two years.**',
  '**And what I would tell the two of you who draft these.** ⚠ **When you refuse, say what would change your mind.** **Of the fourteen reversals, eleven came back from people I had told what to look for**, and three of those came back with the fact and no argument at all.',
]));
out.push(A('**214 words, both sets counted, his own reading in the present tense, the mechanism rather than the feeling, and a last paragraph the two clerks can act on.** ⚠ **The sentence that earns the band is _I read the rest looking for where to stop_**, because it is the only thing on the page that no writer could have discovered without a refuser telling them — **and it is in the present tense, which is what makes it a description rather than an accusation.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the mechanism, not the feeling.** _"To reverse it I have to write a second line."_ ⚠ **That is a mechanism and it explains the stubbornness without anybody being proud.** **Mine said "people do not like admitting mistakes", which explains nothing and is slightly rude.**',
  '**One thing to keep, and why it works.** _"Twenty-six opened with a reference to the earlier correspondence."_ **It is the only number on the page I shall remember in a fortnight**, and it is about me.',
  '**Ranking of the slip I was given.** **1** the mechanism **2** the last paragraph the reader can act on **3** both sets counted _(right, and I had counted one)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Read only the first sentence and let the room guess the request.** **About a third of first attempts cannot be guessed**, and that is a specific, fixable fault: **the fact is true and is not connected to the ask.** **Do not let the writer explain the connection** — **if it has to be explained in the room it will have to be explained in the letter, and the letter has two lines.** **Then Mr Barghouti\'s sentence about the file.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**I went and looked.** **The refusal said "no member of staff is free".** **I looked at that and not at my request**, which I had read eleven times._',
  '⚠ _**What I found:** two people joined the section in October and one of them does the weekly figures, which is the task the refusal was about._',
  '_**My first sentence:** "The section has been at eleven since October, and the weekly figures are now compiled by Mr Saqqal\'s office." **Twenty words, nothing about June.**_',
]));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  Reopening without reproach'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The word count is the exercise and students will resist it**, because the words saved are the ones they think are polite. **Between four and nine words** is the usual saving, and the sentence is always better without them. **Collect three examples on the board with the counts.**'));
out.push(A('**b** Reproaches: **2** and **5**. Not: **1**, **3** and **4**. ⚠ **4 is worth a minute** — _I understand that this was refused on cost; nonetheless the cost has gone_ **contains the refusal and is not a reproach**, because nothing in it requires the reader to defend anything. **The test is not whether the past is mentioned.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it gives the reader a second thing to answer, and the second thing is easier** — and they hide in **polite phrases** that sound like courtesy.'));
out.push(A('**b** **1** ⚠ **She has a folder of nineteen replies that defend the original decision at length and never mention what was asked for** — **every one of them a reply to a sentence containing a reproach.**   **2** ⚠ **_I appreciate that_ + their reason at full strength, with nobody in it**, then **_nonetheless_**, then the new fact.'));
out.push(NOTE('⚠ **This cycle is practical and not moral, and the key must keep it there or the class will hear a lesson about manners.** **A reproach does not offend a professional reader.** **It gives them a second thing to answer, and the second thing is easier** — **so you have provided an exit.** Mrs Khoury\'s folder is the evidence: ⚠ **nineteen replies, averaging about four hundred words, almost entirely about why the original decision was right, with the request appearing in none of them except as a word in the first line.** **Nobody writes four hundred words out of spite.**'));
out.push(NOTE('**The test is the transferable thing and it is one move.** ⚠ **Put the sentence in the reader\'s mouth and ask whether they would need to defend themselves.** It settles the hard cases, which are all true statements: **_the figure was never accurate_ is a fact and says _you were wrong then_.** ⚠ **Run the three polite ones in front of the whole room and let them hear what each accuses the reader of**: **_I am sure you will recall_ — of forgetting. _As I think I made clear_ — of not reading. _I would have thought_ — of not thinking.** **All three will be defended by somebody as courtesy, and that defence is the point of the exercise.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cost objection)_ _I appreciate that staffing a check at two gates in one shift was the whole of the difficulty. Nonetheless there is one gate now._',
  '**2** _(a timing objection)_ _I appreciate that the release was closed in August and that eleven items were already in it. Nonetheless two of the eleven have since been withdrawn._',
  '**3** _(an objection I think was mistaken)_ _I appreciate that the figure before you in September showed two gates. Nonetheless the merger removes one of them._ ⚠ **Nothing about the figure being wrong.**',
  '**4** _(a hidden reproach, repaired)_ _I am sure you will recall…_ → **_I appreciate that…_** ⚠ **The first accuses them of forgetting; the second concedes their reason.**',
  '**5** _(their reason in nine words)_ _I appreciate that a second observer on a first-year lesson is a cost you cannot repeat across eleven staff._',
]));
out.push(A('⚠ Mark these on **whether the reader appears in the concession**. **_I appreciate that the cost was the difficulty_ has their reason and nobody in it; _I appreciate that you were concerned about cost_ has them in it** and is a half-step towards the other kind. Item **3** is the hard one and the one worth time: ⚠ **the writer believes the September figure was wrong and must not say so**, because saying so is a second subject and it is the one that will be answered.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** As I explained at some length in September…',
  '**B** **Reproach: _at some length_.** **It accuses them of not reading.** **Repaired: _I appreciate that the cost was the difficulty._**',
  '**A** _(the ⚠ row)_ I appreciate that the cost was the difficulty.',
  '**B** ⚠ **No reproach.** **Their reason, at full strength, with nobody in it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The reproach in each and what it accuses the reader of. ⚠ **Three of the five on each card carry one and two carry none.** **The hardest to find is _I would have thought_**, which about half the room reads as a mild opinion: **it accuses the reader of not thinking.** **_No doubt this was overlooked_ is the second hardest** and is the more dangerous, **because it sounds like an excuse being offered on the reader\'s behalf** — **and it says the reader overlooked something.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _"I appreciate that the weekly figures were refused because no member of staff was free to compile them, and that the section was at seven. **Nonetheless** it has been at eleven since October."_ ⚠ _**Put in their mouth:** would they need to defend themselves? **No.** It is their reason and it is correct._',
  '**b** _**Partner as reader:** nothing needs answering. ⚠ **Then they read it in nine words — "I appreciate the staffing difficulty" — and we both agreed it had been got out of the way.** **Twenty-eight words is right here and nine is not.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar read the sentence he had drafted: as I explained at some length in September, the figure the refusal was based on was never accurate. Two reproaches in one sentence — at some length says you did not read it, and never accurate says you were wrong then and not only now. He had not seen the second one at all, and almost nobody does, because it is a fact and it is true: a true thing can still be a reproach, and the test is not whether it is accurate but whether the reader has to answer it. Dima said they will answer it — they will answer the reproach and not the request, because the reproach is the easier of the two, and she has a folder of replies that defend the original decision at length and do not mention what was asked for, every one of them a reply to a sentence like his. Which is the finding and it is practical rather than moral: a reproach does not offend a professional reader, it gives them a second thing to answer and the second thing is easier, so you have provided an exit. Rim asked how you keep the concession without the reproach when the cost really was wrong, and you concede the thing and not the person — I appreciate that the cost of a second gate was the difficulty, which is their reason stated at full strength with nobody in it, and then nonetheless, and then the new fact. Bassel asked why nonetheless and not but, and but is fine and however is fine: what matters is that something stands between the concession and the fact, because a concession followed immediately by a fact reads as a trick. And Adnan asked about the ones that hide in politeness, which are the dangerous ones: I am sure you will recall accuses somebody of forgetting, as I think I made clear accuses them of not reading, and I would have thought accuses them of not thinking. All three sound like courtesy and all three are charges. Jad asked whether there is a test, and there is one: put the sentence in the reader\'s mouth and see whether they would need to defend themselves — if they would, it is a reproach, however it is dressed. And Mazen said his concessions always come out quickly, and the instruction is to say them at full strength and at the same speed as the rest, because a concession read quickly is one being got out of the way, and a reader hears that in writing too, where it shows up as brevity.']));
out.push(A('Listener task: the partner\'s concession and whether anything in it needs answering. ⚠ **Collect the ones that do and read four aloud.** **They will nearly all be true statements**, which is the finding: **a true thing can still be a reproach, and the test is not accuracy but whether the reader has to answer it.** **Then do the length check**: a concession of nine words where their reason needs twenty-eight **has been got out of the way**, and the reader hears that in writing exactly as the room hears it aloud.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _As I explained at some length._ → **✓** it accuses them of not reading.   **✗** _The figure was never accurate._ → **✓** true, and a second subject.   **✗** _I am sure you will recall._ → **✓** it accuses them of forgetting.   **✗** _I appreciate that you were concerned._ → **✓** their reason, with nobody in it.   **✗** A nine-word concession to a twenty-word reason. → **✓** give it the words it needs.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Each contained a reproach, and none of them would be called rude.** _As I explained at some length. I am sure you will recall. The figure was never accurate._ **Polite sentences, every one.**'));
out.push(A('**2** ⚠ **Two things have arrived on the reader\'s desk and only one of them is about the reader.** **It is nearer, it is personal, and — the part writers forget — it is the one the reader can win.** **The request, by contrast, is a decision**, and decisions take time and may need somebody else.'));
out.push(A('**3** **She reads the draft once as the reader and marks every sentence they could defend themselves against** — **two, one and three in her last three drafts, all six in sentences she had thought of as courtesy.** ⚠ **And of the nineteen, eleven got what they wanted on a third letter with the reproach taken out and nothing else changed.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE FOLDER OF LETTERS I COULD NOT ANSWER** · B. Tahhan · 17 January',
  '**I keep the second letters clients send me when I have refused something.** ⚠ **There are eight, over about three years, and I have replied properly to two of them.**',
  '**What the six have in common.** **A sentence about what I should already know.** ⚠ **Not rude** — _as we discussed_, _as you are aware_, _I did mention_ — **and each gives me something to answer that is not the request.**',
  '**What my replies look like.** ⚠ **Long, and about the first job.** **The longest is six hundred words about a run in 2023**, and the thing they had actually asked for is not in it.',
  '**Why it happens.** ⚠ **Two things arrive and one of them is about me.** **I can settle that one in an afternoon; the other needs a machine, a date and a conversation with my brother.**',
  '**What I do now.** **I read my own replies before sending and mark anything about the first job.** ⚠ **In the last two there were four and three.**',
  '**And the figure.** ⚠ **Of the two I answered properly, both had no sentence about what I should already know.** **Two of eight.**',
]));
out.push(S('Stage 7 · Write freely (sample, 216 words)'));
out.push(SAMPLE([
  '**THE FOLDER OF REPLIES THAT ANSWER THE WRONG THING** · D. Khoury · 16 January',
  '**I keep a folder of replies that defend a decision at length and never mention what was asked for.** ⚠ **Nineteen, over about four years, and every one is a reply to a sentence I can point at.**',
  '**What the nineteen have in common.** **The letter they are answering contained a reproach.** ⚠ **Not an insult — nothing in any of these would be called rude.** _As I explained at some length. I am sure you will recall. The figure was never accurate._ **Polite sentences, every one.**',
  '**What the replies look like.** ⚠ **The average is about four hundred words and the longest is nine hundred**, and they are almost entirely about why the original decision was correct at the time. **Which it usually was.** **The request appears in none of them except as a word in the first line.**',
  '**Why this happens, and it is not spite.** ⚠ **Two things have arrived and only one of them is about the reader.** **It is nearer, it is personal, and it is the one the reader can win.** **The request is a decision, and decisions take time and may need somebody else.**',
  '**And the figure that persuaded me.** ⚠ **Of the nineteen, eleven got what they wanted on a third letter** — **the reproach taken out and nothing else changed.**',
]));
out.push(A('**216 words, the letters protected, the replies measured, the mechanism including what can be won, and a figure rather than advice at the end.** ⚠ **The clause that earns the band is _it is the one the reader can win_**, because it explains the length of the replies without attributing a motive — **and a page that had said _they are being defensive_ would have been a worse page and an easier one to dismiss.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the replies measured.** _"The average is about four hundred words and the longest is nine hundred."_ ⚠ **The length is the evidence** and I had written "the replies are long", which is the same observation with nothing in it.',
  '**One thing to keep, and why it works.** _"Which it usually was."_ **Four words conceding that the decisions were right**, in the middle of a paragraph criticising the replies — and it is what makes the rest believable.',
  '**Ranking of the slip I was given.** **1** the mechanism and what can be won **2** the replies measured **3** the figure at the end _(strong, but I had seen it coming)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The swallow is the thing to listen for and it is audible from the back of the room.** A concession said at the speed of the rest reads as a concession; one said quickly is being got out of the way. **Then make the written equivalent explicit**, because students will not transfer it: **in writing the swallow is brevity.** **A nine-word concession to a twenty-eight-word reason is the same fault.** **Finish on Mrs Khoury\'s line about what the reader can win.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Four minutes on the letter I sent on 4 December.** **Read as the reader, marking every sentence they could defend themselves against.**_',
  '⚠ _**Three.** _"As we agreed in October" — they did not agree, they noted. _"I am sure this was an oversight" — an accusation dressed as an excuse. _"The original figure was always provisional" — true, and it says they treated a provisional figure as final._',
  '_**All three were in the second half**, where I had stopped being careful. **And the sentence I was proudest of is the second one.**_',
]));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  The smaller ask'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The partner\'s question is the whole stage and it must be asked exactly: what does the small one not do that the big one did?** **If the answer is _nothing_, the big one was padded** — **and that happens in about one case in four, which is uncomfortable and useful.** **Do not let the room treat it as a joke about the student; it is a finding about first requests in general.**'));
out.push(A('**b** Smaller asks named as reduced: **2** and **5**. Not: **1**, **3** and **4**. ⚠ **3 is the one to strike out loudly** — _perhaps we could look at some sort of compromise_ — **because it names nothing, reduces nothing and invites the reader to propose the reduction**, which they will do at their own level and not at yours.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it makes a grant possible without anything being reversed** — and **it must be named, or the reader sees a repeat and stops reading.**'));
out.push(A('**b** **1** ⚠ **They read the first line, saw an engineer at Homs, and replied with the September refusal almost word for word.**   **2** ⚠ **Once, flat, with no gratitude in front of it** — **_I should be most grateful if you would consider…_ puts four seconds of apology in front of the one sentence that was going to work.**'));
out.push(NOTE('⚠ **This is the cycle for everybody whose second column was empty in 15.1, and it should be introduced that way.** **A smaller ask is a different request and not a weaker one.** **They refused a second engineer; they are being asked about three winter months, which they have never refused** — **and the file line writes itself: _different request, granted._** ⚠ **The seven words are the whole technique and they will be left out**: _this is less than I asked for in September._ **Second line, before the ask.** **Mr Darwish\'s October letter is the evidence and it failed for want of exactly those seven words.**'));
out.push(A('**The sizing test is the part that separates this from ordinary compromise, and it is not about proportion.** ⚠ **Small enough that the reason for the refusal no longer applies.** **Refused on cost → it must cost materially less. Refused on precedent → it must be a trial with an end date. Refused on staff → it must take materially less of somebody\'s time.** **A reduction that does not touch their reason is a smaller version of the same refusal**, and all four ⚠ rows in Stage 3 are exactly that. ⚠ **They are plausible, which is why they are there**: a lower price is a real concession and it answers nothing if the objection was precedent.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(refused on cost)_ _This is less than I asked for in September: three winter months rather than the year, which is about a quarter of the cost._',
  '**2** _(refused on precedent)_ _This is less than I asked for: a trial on one gate, ending on 31 March, with the figures brought to you._',
  '**3** _(refused on staff)_ _This is less than I asked for: forty minutes a shift on the nine consignments over forty cartons, rather than two hours on all forty-one._',
  '**4** _(a reduction that misses, said so)_ ⚠ _I offered a lower price and they had refused on precedent. **It was a real concession and it answered nothing.**_',
  '**5** _(with gratitude in front)_ ⚠ _I should be most grateful if you would consider the smaller…_ **Four seconds of apology on the sentence that was going to work.**',
]));
out.push(A('⚠ Mark these on **the seven words and the sizing test, in that order.** A reduction without the naming sentence is the October letter. Item **4** is the one to collect: ⚠ **make each student say whether their own reduction touches the stated reason**, and about a third will find that it does not. Item **3** is the model for the written letter in 15.6 and the figures matter: **nine of forty-one and forty minutes against two hours** — **a comparison is what makes _smaller_ checkable.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(refused, because)_ A second engineer, on cost.',
  '**B** **This is less than I asked for in September: the three winter months rather than the year.** **It touches the reason because it is about a quarter of the cost** — **and the winter carries two-thirds of the faults.**',
  '**A** _(the ⚠ row)_ Refused on precedent; the reduction offered is a lower price.',
  '**B** ⚠ **It misses.** **Their stated reason would still refuse it: a cheaper precedent is still a precedent.** **A trial with an end date would touch it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each smaller ask, and whether it touches the stated reason. ⚠ **The four rows marked ⚠ offer reductions that miss**, and each is plausible — **a lower price against precedent, a trial against cost, a shorter form against staff, a nicer layout against capacity.** **The test is one question: would their stated reason still refuse this?** **Make the room ask it aloud for all four**, because the plausibility is what defeats people: **a genuine concession that does not touch the objection reads to the writer as generosity and to the reader as a repeat.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Smaller ask:** the weekly figures for one quarter, compiled from the existing returns rather than from a new count. **Seven words: this is less than I asked for in June.**_',
  '⚠ _**What it does not do:** it gives no figure for the two sites that do not make returns. **That is about a fifth of the traffic**, and I would rather have four-fifths now._',
  '**b** _**Partner as reader:** their stated reason was that nobody was free to compile it. **Compiled from existing returns, nobody has to be.** **It touches the reason.**_ ⚠ _**Then with "I should be most grateful" in front: the sentence disappears behind it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar had no new fact, so Ms Huda asked for the smallest version of his ask that is still worth having: a second engineer at Homs for the three winter months rather than all year, about a quarter of what he asked for in September. Asked what the quarter does not do that the whole did, he said it does not cover the summer, and the summer has about a third of the faults — so it buys two-thirds of the problem for a quarter of the cost, which he had not worked out until just then. Which is why the cycle comes before the letter and not after it: a smaller ask is a different request and not a weaker one, and it can be granted without anything being reversed, which is the whole of its power. Dima said because the reader is not going back on anything, and nothing at all — they refused a second engineer and are being asked about three winter months, which they have never refused, and the file line writes itself: different request, granted. Omar said he did this in October and it failed, and he knows why: he did not say it was smaller. He just asked for the three months, they read the first line, saw an engineer at Homs, and replied with the September refusal almost word for word. Which is the second half of the cycle and it costs seven words — this is less than I asked for in September — in the second line, before the ask itself. A reader who is not told sees a repeat and stops reading, and they are not being careless, because a repeat is what second letters usually are. And Rim asked whether naming it weakens you, and it is the strongest sentence in the letter, because it is the one thing the reader was not expecting: everybody who writes a second time asks for the same thing or more, so asking for less and saying so is rare enough to be read twice. Bassel asked how much less, and small enough that the reason for the refusal no longer applies — refused on cost, it must cost materially less; refused on precedent, it must be a trial with an end date. A reduction that does not touch their reason is just a smaller version of the same refusal. And Mazen said his would come out apologetically, and the instruction is once, flat, with no gratitude in front of it: I should be most grateful if you would consider puts four seconds of apology in front of the one sentence that was going to work.']));
out.push(A('Listener task: the partner\'s smaller ask and what it does not do. ⚠ **Collect the _nothings_.** **In about a quarter of the room the smaller ask loses nothing at all**, which means the original was padded — **and that is worth naming gently and generally**, because it is true of most first requests and not of that student. **Then collect the reductions that miss**: about a third, **and every one of them is a real concession aimed at the wrong objection.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Asking for less without saying so. → **✓** seven words, second line.   **✗** _Perhaps some sort of compromise._ → **✓** name the reduction.   **✗** A lower price against a precedent objection. → **✓** touch the stated reason.   **✗** _I should be most grateful…_ → **✓** flat, once.   **✗** Not knowing what the smaller one loses. → **✓** work it out before you send it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **He did not name the reduction.** **The reply was the September refusal almost verbatim, with one sentence added: _as set out previously, the cost of additional cover cannot be met this year._** **_Additional cover_ is the evidence that they had not read the three months at all.**'));
out.push(A('**2** ⚠ **Second letters are repeats.** **A reader who has refused something and receives another letter about it has a well-founded expectation, and he did nothing to disturb it** — **and the seven words exist precisely to disturb it.**'));
out.push(A('**3** **That the winter months carry about two-thirds of the faults**, so the quarter-sized request buys two-thirds of the problem. ⚠ **He had the figures in the fault log the whole time and had never put them side by side.** **February: the same three months, with the seven words in the second line and the two-thirds in the third, and nothing else changed.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SAME REQUEST, HALF THE SIZE** · L. Sweidan · 24 January',
  '**In September I asked for a scaffold on the whole elevation and was refused on cost.** ⚠ **In November I asked for the front elevation only, which is about half, and was refused in the same words.**',
  '**What I sent in November.** A letter whose first line was _I am writing again about access to the elevation._ ⚠ **True, smaller, and indistinguishable from the first.**',
  '**What the reply said.** _"The cost of scaffolding the building cannot be met this year."_ ⚠ **The building.** **They had not read the word _front_.**',
  '**What I had left out.** ⚠ **Seven words.**',
  '**Why that is reasonable of them.** ⚠ **Second letters are repeats.** **They see _scaffold_ and _elevation_ and they are right nine times in ten.**',
  '**What I worked out late.** **The front elevation has the 1974 joint and the other three have nothing.** ⚠ **Half the cost and all of the risk**, and I had the survey in my own file.',
]));
out.push(S('Stage 7 · Write freely (sample, 211 words)'));
out.push(SAMPLE([
  '**THE SAME REQUEST, A QUARTER OF THE SIZE** · O. Darwish · 23 January',
  '**In September I asked for a second engineer at Homs and was refused on cost.** ⚠ **In October I asked for three winter months, which is about a quarter of it, and was refused in almost the same words.** **The second refusal was my fault and took one sentence to cause.**',
  '**What I sent in October.** A letter whose first line was _I am writing about engineering cover at the Homs site_, and whose third paragraph asked for December, January and February. ⚠ **Every word true and the request genuinely smaller.**',
  '**What the reply said.** The September refusal, almost verbatim, with one sentence added: _as set out previously, the cost of additional cover cannot be met this year._ ⚠ **_Additional cover._ They had not read the three months at all.**',
  '**What I had left out.** ⚠ **Seven words.** _This is less than I asked for in September._',
  '**Why that is reasonable and not lazy.** ⚠ **Second letters are repeats.** **A reader who has refused something and receives another letter about it has a well-founded expectation, and I did nothing to disturb it.**',
  '**What I also worked out, three months late.** **The winter carries about two-thirds of the faults.** ⚠ **I had the figures in the fault log the whole time and had never put them side by side.**',
]));
out.push(A('**211 words, the reply quoted, the omission counted, the reader defended, and the thing he had not joined up.** ⚠ **The two words that earn the band are _additional cover_**, because they are evidence rather than assertion: **the page does not claim the reader missed the reduction, it shows the phrase in which the reader missed it** — **and no amount of explanation could do that work.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the reader defended explicitly.** _"Second letters are repeats… I did nothing to disturb it."_ ⚠ **It is there, and it is why I trust the rest.** **Mine said they had been careless, which is both unkind and untrue.**',
  '**One thing to keep, and why it works.** _"I had the figures in the fault log the whole time."_ **It is the sentence that costs him most**, and it turns a letter-writing fault into something about his own work.',
  '**Ranking of the slip I was given.** **1** the quoted phrase as evidence **2** the omission counted **3** the reader defended _(important, and I had it)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Time both versions.** **The apology costs about four seconds and it is spent on the one sentence that was going to work**, which is a figure students accept more readily than an instruction. **Then say the smaller ask into the room flat, once, and stop** — **the stopping is harder than the saying.** **Finish on Mr Darwish\'s line:** **nothing in my first two lines told them to.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Seven words written into the second line of my draft.**_',
  '_**First three lines read as the reader:** "The section has been at eleven since October. This is less than I asked for in June. I am asking for the weekly figures for one quarter only, compiled from the existing returns."_',
  '⚠ _**Would a person who refused me in June read past them?** **I think so, and the reason is the second line and not the first** — the first tells her something she did not know, and the second tells her this is not the June letter._',
]));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  A way to say yes'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **B\'s answer is the diagnostic and it has to be given honestly: what would they have to admit in order to agree?** **In almost every first attempt the answer is _that the refusal was wrong_**, and the student has not noticed. **The second attempt is the cycle and should not be rushed** — **most pairs need three goes.**'));
out.push(A('**b** **3** requires the reader to admit nothing. ⚠ **1**, **2** and **4** all require an admission; **5** is the subtle one — _you may wish to review the earlier decision_ **sounds permissive and still asks for a review of a decision**, which is the same request in a softer voice.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it lets the reader agree without the earlier decision ever being wrong** — and **the first branch must be the one where you get nothing.**'));
out.push(A('**b** **1** ⚠ **The second becomes decoration and she answers the one the writer wants and refuses it.** **You can hear the writer holding their breath.**   **2** ⚠ **It has the reversal built into it** — **_reconsider_ means _look again at a decision you took_**, which is exactly the thing you are trying not to ask for.'));
out.push(NOTE('⚠ **The order of the two branches is the whole cycle and it is counter-intuitive, so give the reason rather than the rule.** **The first branch is the one where you get nothing.** **Said first, said properly, and meant** — **because you have to be willing to receive that answer, and a reader can tell within a line whether you are.** Mrs Khoury\'s evidence is from the other side: ⚠ **she has had both versions and they read as different letters.** **When the first branch is the one the writer wants, the second is decoration, and she answers the one they want and refuses it.**'));
out.push(A('**Insincerity in this shape is detectable by length, and that is worth teaching as a measurement rather than as a feeling.** ⚠ **The branch a writer does not want is nine words; the branch they want is thirty.** **Count both.** **A first branch a quarter the length of the second is a request with a disguise on it**, and the reader does not have to analyse anything to feel it. ⚠ **The repair is not padding**: **state their position properly, which is what the short branch was skipping.** **Mrs Sweidan\'s first attempt was eight words — _if nothing has changed, very well_ — and her final one is twenty**, and the twenty contains a stopping date that costs her something.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cost position)_ _If the cost position has not changed, this falls away and I shall not raise it again before October. If the merger has changed it, forty minutes a shift would be enough._',
  '**2** _(a capacity position)_ _If the release is still full, this falls away and I shall not ask again this year. If the two withdrawals have made room, the field as specified would be enough._',
  '**3** _(a precedent position)_ _If a trial would still set a precedent, this falls away. If an end date removes that, one quarter with the figures brought to you would be enough._',
  '**4** _(nine and thirty, repaired)_ ⚠ _"If nothing has changed, very well"_ → _"If the position on the 1974 joint has not changed since September, this falls away and I shall not write about it again."_',
  '**5** _(with _reconsider_, repaired)_ ⚠ _"I am asking you to reconsider"_ → **two branches, and the word disappears.**',
]));
out.push(A('⚠ Mark these on **the word counts of the two branches**, which takes four seconds and settles everything else. Item **4** is the demonstration: **read both versions aloud and ask the room which writer would accept the first branch.** Item **5** is the vocabulary point: ⚠ **_reconsider_, _review the earlier decision_, _look again at_ and _think again about_ all contain the reversal**, and once the two branches exist none of them is needed.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(refused, because)_ Cost, in September.',
  '**B** **If the cost position has not changed, this falls away and I shall not raise the seal check again before the annual review.** _(nineteen)_ **If the merger has changed it, forty minutes a shift on the nine over-forty consignments would be enough.** _(twenty-one)_',
  '**A** _(the ⚠ row)_ Draft: "I am asking you to reconsider the September decision."',
  '**B** ⚠ **_Reconsider_ asks for a reversal.** **Repaired as two branches, and the word is not needed at all.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each two-branch sentence, with the word count of both branches. ⚠ **The four rows marked ⚠ are faulty drafts with different faults**: **_reconsider_ and _review the earlier decision_ ask for a reversal in one word; _surely_ asks for agreement by assertion; and the nine-and-thirty draft is sincere and sounds otherwise.** **The last is the one to dwell on**, because the writer has done nothing wrong except give themselves away by length — **and it is the fault most of the room has just committed.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Losing branch:** "If the staffing position has not changed, this falls away and I shall not ask for the weekly figures again before the September review." **Twenty-four.** **Winning branch:** "If the two October appointments have changed it, one quarter compiled from the existing returns would be enough." **Seventeen.**_ ⚠ _**My first losing branch was eleven words and I have made it twenty-four by putting their position in properly, not by padding.**_',
  '**b** _**Partner read both with a lift on the second and then flat.** ⚠ **I had written the flat one and heard the lifted one in my head**, which I think is why my first losing branch was eleven words._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna was asked to put a request in one sentence and said she was asking for the refusal of the scaffold to be reconsidered. Asked what Ms Huda would have to admit in order to say yes, she said after a pause: that the refusal was wrong, and there is no other way to read it. So the sentence asks for two things and she only wants one of them — it asks for the scaffold and for a concession that it should have been granted in September, and the second is the expensive one and is the one that will be refused. Dima asked about the shape that avoids it, and it is two branches: if the position on the joint has not changed, this falls away; if the November survey has changed it, a scaffold on the front elevation for six weeks would be enough. Nothing in that requires September to have been wrong. Omar said it gives them a way out, and it gives them a way in, which is different: the first branch is not an escape but the sentence that makes the second branch safe, and a reader offered only the second is being asked to agree under pressure while a reader offered both is choosing. Rim asked whether the order matters, and Dima said entirely — she has had both versions and they read as different letters. When the first branch is the one the writer wants, the second is decoration, you can hear the writer holding their breath, and she answers the one they want and refuses it. Which is the rule: the first branch is the one where you get nothing, said first, said properly, and meant — because you have to be willing to receive that answer, and a reader can tell within a line whether you are. Bassel asked what makes insincerity detectable, and length, usually: the branch a writer does not want is nine words and the branch they want is thirty, so give them the same weight. Adnan asked about the word reconsider, which has the reversal built into it — it means look again at a decision you took, which is exactly the thing you are trying not to ask for, so say what has changed and ask about the new situation. And Jad asked about reading the two branches aloud: equal weight, equal speed, and no lift on the second one, because the lift is the tell.']));
out.push(A('Listener task: the partner\'s two branches and the word count of each. ⚠ **Put six pairs of counts on the board.** **The pattern is visible without comment**: the losing branch is shorter in almost every first draft, usually by a factor of two or three. **Then ask the repair question** — **not _can you add words_ but _have you stated their position properly?_** — **because padding produces a long branch that is still insincere, and stating their reason produces a long branch that is not.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I am asking you to reconsider._ → **✓** two branches.   **✗** The branch you want, first. → **✓** the losing one first.   **✗** Nine words against thirty. → **✓** state their position properly.   **✗** _Surely this is now obvious._ → **✓** agreement by assertion.   **✗** A losing branch that costs you nothing. → **✓** put the stopping date in it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** **The scaffold, and an admission that September was a mistake.** ⚠ **The second was packed into a single word: _reconsider_ means _look again at a decision you took_** — **and the second is the one that would have been answered.**'));
out.push(A('**2** ⚠ **Because she had to mean it.** **Her first attempt made it eight words — _if nothing has changed, very well_ — and reading it back she could hear herself holding her breath.** **A reader hears that too and answers the branch you want.**'));
out.push(A('**3** **A request for the November measurements**, which is neither branch, **and then the scaffold, for four weeks rather than six.** ⚠ **Nobody ever said whether the position had changed** — **and that is the point of the two branches: they made it unnecessary for anybody to say so.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE SAME LETTER, TWO WAYS** · M. Hariri · 31 January',
  '**I wrote two versions about batch replacement and sent the second.** ⚠ **The difference is one sentence and about thirty words.**',
  '**Version one.** _In the light of the December returns I am asking you to look again at the position on batch replacement._ **Twenty-one words.**',
  '**What is wrong with it.** ⚠ **It asks for the replacement and for an admission that the position was wrong.** **_Look again at_ is _reconsider_ with more syllables.**',
  '**Version two.** _If the position on batch replacement has not changed, this falls away and I shall not raise it before the annual review. If the December returns have changed it, replacement on returns over four units would be enough._ ⚠ **Thirty-eight words, nineteen of them the branch where I get nothing.**',
  '**Why that branch had to be that long.** ⚠ **Because the stopping date is in it**, and that is what makes it cost me something.',
  '**What came back.** ⚠ **Neither branch: a standing arrangement for returns over four units**, and a line saying it was helpful to know where this ended.',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**THE SAME LETTER, TWO WAYS** · L. Sweidan · 30 January',
  '**I wrote two versions of the same letter about the scaffold and sent the second.** ⚠ **The difference between them is one sentence and about forty words, and I think the first would have been refused.**',
  '**Version one.** _In the light of the November survey I am asking you to reconsider the September decision._ **Nineteen words**, and I was pleased with it for about a day.',
  '**What is wrong with it.** ⚠ **It asks for two things: the scaffold, and an admission that September was a mistake.** **I only want the first**, and I had packed the second into a single word.',
  '**Version two.** _If the position on the 1974 joint has not changed since September, this falls away and I shall not write about it again. If the November survey has changed it, a scaffold on the front elevation for six weeks would be enough._ ⚠ **Forty-one words, and twenty of them are the branch where I get nothing.**',
  '**Why the first branch had to be that long.** ⚠ **Because I had to mean it.** **My first attempt made it eight words and reading it back I could hear myself holding my breath.**',
  '**What came back.** **A request for the November measurements, which is neither branch** — **and then the scaffold, for four weeks rather than six.** ⚠ **Nobody ever said whether the position had changed.**',
]));
out.push(A('**213 words, both versions quoted with counts, the word that carried the hidden request, the short first attempt admitted, and what the branches made unnecessary.** ⚠ **The sentence that earns the band is the last one.** **Most students expect a technique that produces an answer; this one worked by making an answer unnecessary** — **and a page that reported only the scaffold would have missed the mechanism entirely.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the short first attempt admitted.** _"My first attempt made it eight words and I could hear myself holding my breath."_ ⚠ **That admission is the evidence that she knows what sincerity sounds like**, and without it the forty-one words would read as technique.',
  '**One thing to keep, and why it works.** _"Nobody ever said whether the position had changed."_ **It is the surprise**, and it is the only sentence that tells a reader what the shape actually does.',
  '**Ranking of the slip I was given.** **1** what the branches made unnecessary **2** the word carrying the hidden request **3** both versions quoted _(necessary, and the easiest to do)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The lift is audible and almost nobody hears their own.** Read the branches flat, then with a lift on the second, and ask the room which version the writer wrote. **Most people have written the flat version and heard the lifted one in their head** — **and that is why the losing branch came out short.** **Make the connection explicit**, because students will treat the length and the intonation as two separate faults: **they are the same fault in two media.** **Finish on Mrs Sweidan\'s line about a branch that costs nothing.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Losing branch:** twenty-four words. **Winning branch:** seventeen._',
  '⚠ _**And what I put in the losing branch that costs me:** "I shall not ask for the weekly figures again before the September review." **That is nine months**, and writing it took longer than the rest of the letter._',
  '_**Which I now think is the test.** If the losing branch is easy to write, it is not costing anything, and a reader will know._',
]));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  The date you stop'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second question is the one nobody can answer and it should be left hanging for a moment.** **Almost nobody has thought of their own asking as a number with an end**, and the realisation that the reader has been counting is the cycle in one move. **Collect the counts: four and five are common, and somebody always has more than seven.**'));
out.push(A('**b** Self-imposed limits: **2** and **5**. Not: **1** and **3**. ⚠ **4 is the one to separate out** — _this is my final request_ **is a limit and it is a threat**, because it implies that something follows the refusal. **A stopping date implies that nothing does.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it tells the reader the correspondence has an end, which is the thing they are weighing** — and a final demand says _or else_ while a stopping date says _or nothing_.'));
out.push(A('**b** **1** ⚠ **That part of what the reader was refusing was the correspondence** — **four letters with no end in sight, and refusing was the only way he had of stopping the series.**   **2** ⚠ **You do not write. For as long as you said.** **A stopping date that is not kept is worse than none at all**, because it is the only sentence in the letter the reader can check.'));
out.push(NOTE('⚠ **The mechanism is the whole of this cycle and students will otherwise read the date as a bluff.** **When somebody has been asked four times with no end in sight, every reply is also a decision about the fifth, sixth and seventh letters** — **and refusing is the only way they know to stop the series.** **So part of what is being refused is the correspondence, and that part can be removed for nothing.** ⚠ **It is not a concession; it is information.** **The reader is weighing a decision and a series, and the sentence tells them the series is one letter long.**'));
out.push(NOTE('**The cost of the sentence must be stated plainly, because a broken stopping date is worse than none.** ⚠ **It is the only sentence in a letter that the reader can check.** **If you break it, they have learned something about every other sentence you have sent them.** **So: write it only if you will keep it** — **and if you know you will ask again in May, write _not before May_, which is also a date and is true.** ⚠ **Mr Barghouti\'s evidence from the other side is the thing to quote**: **the ones who kept it get read properly the following year, and the ones who did not get the first line read.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(not again this year)_ _If the answer in March is still no, I shall not raise it again this year._',
  '**2** _(not before May)_ _If the answer is still no, I shall not raise it again before the May budget._ ⚠ **True, and nearer.**',
  '**3** _(inside the losing branch)_ _If the cost position has not changed, this falls away **and I shall not raise it before the annual review in October.**_',
  '**4** _(one I would not keep, said so)_ ⚠ _I was going to write "not this year" and I know I shall ask at the budget reset. **Not before May.**_',
  '**5** _(softened afterwards)_ ⚠ _…not again this year, **though of course if anything changes…**_ **The date has gone.**',
]));
out.push(A('⚠ Mark these on **one question put to the student: will you keep it?** **Move the date nearer until the answer is yes**, and make the student notice how much nearer it has to come. Item **3** is the placement and it matters: ⚠ **the date goes inside the losing branch and not at the end of the letter** — **at the end it reads as a parting shot; inside the losing branch it is what makes that branch cost something.** Item **5** should be read aloud: **the clause afterwards removes the date and the room can hear it go.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _(the history)_ Asked four times over eleven months.',
  '**B** **If the answer in March is still no, I shall not raise it again before the annual review.** **It goes inside the losing branch.**',
  '**A** _(the ⚠ row)_ Three times; the budget is reset in May and I shall ask again.',
  '**B** ⚠ **Then the date is _not before May_, not _not this year_.** **The braver sentence would be broken in nine weeks and the nearer one will be kept.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Each stopping date and where it goes. ⚠ **The four rows marked ⚠ all describe somebody who will ask again** — a budget reset, a readvertisement, a strong feeling, a promise to colleagues — **and the right answer in all four is a near date rather than a brave one.** **Make the room say the brave version aloud and then say when it would be broken**: **it is always a specific, nameable date**, which is what turns the instruction from caution into arithmetic.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**In the losing branch:** "…and I shall not ask for the weekly figures again before the September review."_ ⚠ _**Will I keep it?** **My first version said "again this year" and I know I shall raise it at the July planning meeting.** **September is nine months and I shall keep it; July is five and I would not have.**_',
  '**b** _**Partner believed September.** ⚠ **Then they added "though of course if the position changes I should be glad to hear" and we both agreed there was no date left in the sentence at all.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Mazen was asked how many times he had asked and how many more he intended to ask: four times, and he had no idea, because he had never thought of it as a number. Neither has his reader, and that is the problem the cycle solves — when somebody has been asked four times with no end in sight, every reply is also a decision about the fifth, sixth and seventh letters, and refusing is the only way they know to stop the series. Mazen said so part of what they are refusing is the correspondence, and part of it is, and that part can be removed for nothing: if the answer in March is still no, I shall not raise it again this year. Dima said it reads as a concession and costs nothing you were going to get, and it costs nothing and it is not a concession but information — the reader is weighing a decision and a series, and you have just told them the series is one letter long. Omar asked how that is not a threat, since this is my final request is a threat, and it is, and the difference is exactly one implication: a final demand says or else, and something follows the refusal, while a stopping date says or nothing, and nothing follows it. The second works and it works because it is true. Rim asked what happens if the date passes and you still want it, and then you do not write, for as long as you said — a stopping date that is not kept is worse than none at all, because it is the only sentence in the letter the reader can check. And Bassel said that seems a heavy price for one sentence, and it is the price of the sentence working, and it is why most people should not write it: write it only if you will keep it, and if you know you will ask again in May, do not write not this year but not before May, which is also a date and is true. Adnan, who has had both kinds, said the ones who kept it he remembers, and when they come back the following year he reads the letter properly, while the ones who did not get the first line read. And Jad asked about saying the date aloud: as information, at the same pitch as the sentence before it, and with nothing after it — the temptation is to soften it with though of course if anything changes, which takes the date away again.']));
out.push(A('Listener task: the partner\'s stopping date and whether they believe it. ⚠ **Collect the disbelieved ones and ask the writer when they would break it.** **Everybody can name the date**, which is the finding: **the sentence is not hard to write honestly, it is hard to write bravely, and bravery is not what it is for.** **Then run the softening clause once in front of the room** — _though of course if anything changes_ — **and let them hear the date disappear.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _I shall keep asking._ → **✓** a date.   **✗** _This is my final request._ → **✓** that is _or else_; you want _or nothing_.   **✗** _Not this year_, when you will ask in May. → **✓** _not before May_.   **✗** The date at the end of the letter. → **✓** inside the losing branch.   **✗** _…though of course if anything changes._ → **✓** the date has gone.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **That the man answering had been asked the same thing four times with no end in sight** — **every reply he wrote was also a decision about the next letter**, and the only way he had of stopping the series was to refuse again, firmly enough that Mr Hariri would give up.'));
out.push(A('**2** ⚠ **Because he knew he would ask again at the review.** **_Not this year_ would have been a better sentence and a false one** — **and the only sentence in a letter a reader can actually check is the one about what you will do next.**'));
out.push(A('**3** **A standing arrangement for returns over four units** — about two-thirds of what he wanted — **in nine days.** ⚠ **And a line he did not expect: _it is helpful to know where this ends._** **He thinks it meant that the man could decide one question instead of a series**: **four letters had made the decision bigger each time, and one sentence made it small enough to say yes to.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THE THIRD LETTER, AND WHY IT WAS ANSWERED** · R. Shaaban · 7 February',
  '**I wrote twice about the refusal code and the third letter is the one that was answered.** ⚠ **It asked for less and it contained one sentence the others did not.**',
  '**What I had never worked out.** ⚠ **That two letters with no end in sight make a third letter part of what is being refused.**',
  '**Which means part of what was being refused was the correspondence.** ⚠ **I do not say that with resentment: it is what an open correspondence does.**',
  '**The sentence I added.** _"If the position has not changed, this falls away and I shall not raise the code again before the annual review in October."_ ⚠ **Twenty-six words, and the work is in the last twelve.**',
  '**Why October and not _this year_.** ⚠ **Because the annual review is where I shall raise it**, and I would have broken the braver sentence in eight months.',
  '**What came back.** **The code on every slip, in twelve days.**',
]));
out.push(S('Stage 7 · Write freely (sample, 212 words)'));
out.push(SAMPLE([
  '**THE FIFTH LETTER, AND WHY IT WAS THE FIRST ONE READ** · M. Hariri · 6 February',
  '**I wrote to the distributor four times between March and November and the fifth letter is the one that was answered properly.** ⚠ **It was shorter than any of the other four and asked for less, and it contained one sentence none of them had.**',
  '**What I had never worked out.** **That the man answering had been asked the same thing four times with no end in sight.** ⚠ **Every reply he wrote was also a decision about the next letter** — **and the only way he had of stopping the series was to refuse again.**',
  '**Which means part of what he was refusing was me**, and not the batch numbers. ⚠ **I do not say that with any resentment: it is simply what an open-ended correspondence does**, and I had created it by writing four times without saying how many there would be.',
  '**The sentence I added.** _If the position on batch replacement has not changed, this falls away and I shall not raise it again before the next annual review._ ⚠ **Twenty-three words, and the whole of their work is in the last nine.**',
  '**Why the annual review and not _this year_.** ⚠ **Because I knew I would ask again at the review.** **The only sentence a reader can check is the one about what you will do next.**',
  '**What came back in nine days.** **A standing arrangement for returns over four units** — **and a line I did not expect: _it is helpful to know where this ends._**',
]));
out.push(A('**212 words, the count first, the resentment refused, the sentence quoted with its working part located, and the near date defended.** ⚠ **The quoted line from the reply is what makes the page evidence rather than advice** — _it is helpful to know where this ends_ — **and it is the only sentence on the page the writer did not choose.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the near date defended against the brave one.** _"Because I knew I would ask again at the review."_ ⚠ **It is defended on honesty and not on caution**, which is the distinction I had missed: I wrote that I was being realistic, and realistic is not a reason.',
  '**One thing to keep, and why it works.** _"I had created it by writing four times without saying how many there would be."_ **It puts the fault on the writer**, and the page is useless unless it does.',
  '**Ranking of the slip I was given.** **1** the quoted line from the reply **2** the near date defended **3** the working part located _(useful, and I shall copy it)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two performances and the second is the one that teaches.** The date said as information with nothing after it; then the same date with _though of course if anything changes_ on the end. **Ask what is left of the date.** **Nothing is**, and the room will say so without prompting. **Then the question to leave them with**: **how many of the letters in your own drawer have a date in them, and how many of those dates have you kept?** **Finish on Mr Hariri\'s line about the decision being made small enough to say yes to.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Will I keep it?** **First version: "not again this year."** **No** — the July planning meeting is where I shall raise it._',
  '⚠ _**Moved to:** "not before the September review." **That is nine months and I shall keep it.**_',
  '_**And how much nearer it had to come:** from a sentence I liked to a sentence that is true. **About two months of difference and all of the credibility.**_',
]));

// ===================== 15.6 =====================
out.push(pb());
out.push(h2('15.6  The second letter'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second half of the question is the one that matters: which of the five have you already left out?** **It is the fourth or the fifth in most drafts** — **the two branches or the stopping date** — **and in both cases the reason is the same: they are the only two moves that cost the writer anything.**'));
out.push(A('**b** **2** is the right order: **fact · concession · smaller ask · branches · date.** ⚠ **5 is the near miss** — branches before the smaller ask — **and it fails for a specific reason: the branches have to offer the smaller ask, so the reader must know what it is before they are asked to choose.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **the new fact and nothing about the past** — and the commonest thing left in is **a sentence of history that feels like courtesy.**'));
out.push(A('**b** **1** ⚠ **She reads her own drafts in her own voice and they sound reasonable; in his voice the third sentence is a complaint.** **Same words.**   **2** ⚠ **180–220 words.** **A second letter over three hundred has history in it somewhere**, and history is the one thing the reader already has.'));
out.push(NOTE('⚠ **The five moves are not five equal pieces of work and the class should be told so.** **Four of them cost nothing: they are about arrangement.** **The fifth — the stopping date — is a real concession, which is why most drafts end at the fourth.** **Teach it last and write it first.** ⚠ **And watch for the move that is present in form and absent in substance**: Mrs Nasser\'s _I understand the position taken in September_ **is a reference to a position and not a concession to it.** **A concession states their reason at full strength in the writer\'s own words**, and a draft that names no reason has not made the move however polite it is.'));
out.push(A('**Mrs Nasser\'s instruction is the most valuable thing in this cycle and it belongs at the end of every writing task in the unit.** ⚠ **Read the letter aloud as the person who refused you.** **The reproach is inaudible in your own voice and obvious in theirs.** **In most drafts there are two sentences that change meaning between the two readings, and both are in the second half**, where the writer has relaxed. ⚠ **Run it as a paired exercise rather than as private advice**: **the partner reads the letter aloud, slowly, as the reader**, and the writer marks. **It takes ninety seconds and it finds things four minutes of silent checking does not.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a cost refusal)_ _Since November there is one gate. I appreciate that staffing two was the difficulty; nonetheless. This is less than I asked for: nine consignments, forty minutes. If the position has not changed… if it has…_',
  '**2** _(a capacity refusal)_ _Two of the eleven items have been withdrawn. I appreciate that the release was full; nonetheless. This is less: the field without the summary screen. If… if…_',
  '**3** _(no new fact — the smaller ask carries it)_ ⚠ _I have no new fact. **The letter opens on the reduction instead**: this is a quarter of what I asked for in September, and here is what it still covers._',
  '**4** _(read in the reader\'s voice, marked)_ ⚠ _Two sentences changed: "as we had discussed" and "the original estimate was always provisional". **Both in the second half.**_',
  '**5** _(ending after the branches)_ _…would be enough, and I should be glad to run it for one quarter and bring you the figures._ ⚠ **Full stop. Nothing after it.**',
]));
out.push(A('⚠ Item **3** is the one to give to the third of the room with no new fact, and it must be marked as a complete answer rather than a fallback: **the smaller ask is itself a change and can open the letter.** **Mark on the opening in every case** — ⚠ **anything about September in the first two lines is a failed letter however good the rest is**, because the reader has decided by then. Item **5** is a cut and not a flourish: **_I look forward to hearing from you_ is eight words telling the reader something they already assumed.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** Since November the two gates have been merged into one.',
  '**B** **Move 1**, in the right place. **Nothing missing before it.**',
  '**A** _(the ⚠ row)_ Further to my letter of 3 September regarding the seal check…',
  '**B** ⚠ **Not a move at all — history.** **Missing before it: everything.** **The reader has decided what this letter is by the sixth word.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The move number for each opening and what is missing before it. ⚠ **The four rows marked ⚠ are history wearing the clothes of move one**, and three of the four sound like ordinary courtesy. **_I hope you are well_ is the one the room will defend**: it is courteous, harmless in a first letter, **and in a second letter it spends the two lines in which the reader is deciding whether this is a repeat.** ⚠ **Put that to the room as a cost rather than a rule** — **two lines out of a twelve-line letter, spent on something the reader cannot act on.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Five lines, one per move. Total before prose: 96 words.**_ ⚠ _**Under 220, so no move has history in it.** **My first attempt was 240 and the concession line was 71 words of September.**_',
  '**b** _**Partner read the five lines as the person who refused me, slowly.**_ ⚠ _**Two changed meaning: "as the section has now been strengthened" (in his voice: you were under-strengthened and did nothing) and "I am sure this is straightforward" (in his voice: you have made it complicated).** **Both in the second half.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim gave the five moves in order: the new fact; the concession with nonetheless; the smaller ask named as smaller; the two branches; and the date she stops. In the letter the date lives inside the losing branch, so it is five moves and four paragraphs. Asked which of the five is missing from her draft, she said the date — she wrote everything else and then stopped, and she thinks she stopped because the date is the only one that costs her anything. Which is why it is the fifth and not the first: four of the five moves cost you nothing, because they are about arrangement, and the fifth is a real concession, so most drafts end at the fourth. Hiba said hers is missing the concession and she had thought it was there, and read out what she had: I understand the position taken in September. That is a reference to a position and not a concession to it — a concession states their reason at full strength in your own words. Omar asked how long the whole thing is, and a hundred and eighty to two hundred and twenty words, which is the examination band and is also right: a second letter over three hundred words has history in it somewhere, and history is the thing the reader already has. Dima asked about the first two lines, which carry the new fact and nothing else — no further to, no I hope you are well, no history — because the reader decides in two lines whether this is a repeat, and everything you can do about that decision happens there. Hiba then said the thing she had found hardest, which is reading the letter in the reader\'s voice: she reads her own drafts in her own voice and they sound reasonable, and in his voice the third sentence is a complaint — the same words. That is the best practical instruction in the cycle and it should be the last thing anybody does before sending, because the reproach is inaudible in your own voice and obvious in theirs. And Mazen asked about the ending: stop at the branches, with no I look forward to hearing from you and no thank you for your time, since the letter ends on a sentence that gives them something to decide and anything after it is the writer being nervous in public.']));
out.push(A('Listener task: the two sentences that changed meaning in the reader\'s voice. ⚠ **Collect them and read eight aloud without saying whose they are.** **They are almost all in the second half of the letter**, and almost all of them are sentences the writer thought of as smoothing. **Then name the mechanism**: **a writer relaxes after the hard moves are done, and the sentences written while relaxed are the ones written in the writer\'s own voice.** **The hard moves were written in the reader\'s.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Further to my letter of…_ → **✓** the new fact, first.   **✗** _I hope you are well._ → **✓** two lines spent on nothing.   **✗** _I understand the position taken._ → **✓** a concession names their reason.   **✗** Over three hundred words. → **✓** there is history in it somewhere.   **✗** _I look forward to hearing from you._ → **✓** stop at the branches.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **_As you will recall_ accuses the reader of forgetting; _I would have thought that was a matter of some importance_ accuses them of not thinking it important.** **And a third, if the class finds it: _I am sure you will appreciate_, which asks them to agree in advance.**'));
out.push(A('**2** ⚠ **It names the reduction and gives comparable figures** — **nine consignments out of forty-one; forty minutes a shift rather than two hours.** **The September letter named no figure at all and asked for more than the request before it.**'));
out.push(A('**3** **The stopping date**: _I shall not raise the seal check again before the annual review in October._ ⚠ **And the second branch offers to run it for one quarter and bring the figures** — **which is a way of agreeing to something small and reversible.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**O. DARWISH · 20 FEBRUARY · to the regional manager**',
  '**Two of the eleven Homs faults in January were on the same machine, which has now been withdrawn. The recurring list is nine.**',
  '**I appreciate that a second engineer for a full year was refused in September on cost**, and that the cover at the other three sites would have had to be reduced to pay for it. ⚠ **Nonetheless** nine recurring faults rather than eleven **changes what the cover is for.**',
  '**This is less than I asked for in September.** **December, January and February only** — **about a quarter of the cost, and the three months carry about two-thirds of the faults.**',
  '**If the cost position has not changed, this falls away and I shall not raise engineering cover again before the September planning round.** ⚠ **If the withdrawal of the machine has changed it, three winter months would be enough**, and I should be glad to bring you the fault counts at the end of March.',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**R. SHAABAN · 13 FEBRUARY · to the depot manager**',
  '**Since November the Harasta and Jaramana runs have been merged. There is one gate now, where there were two.**',
  '**I appreciate that the second seal check was refused in September on cost**, and that the cost of staffing a check at two gates in a single shift was the whole of the difficulty. ⚠ **Nonetheless** the merger removes the second gate, **and with it about half of what was being costed.**',
  '**This is less than I asked for in September.** I am asking for a seal check at one gate, **on consignments over forty cartons only** — about **nine consignments a week** out of forty-one, **and about forty minutes a shift** rather than the two hours the September request would have needed.',
  '**If the cost position has not changed, this falls away**, and I shall not raise the seal check again before the annual review in October. ⚠ **If the merger has changed it, forty minutes a shift on the nine over-forty consignments would be enough**, and I should be glad to run it for one quarter and bring you the figures.',
]));
out.push(A('**206 words, four paragraphs, all five moves, and the only sentence about September is the one conceding their reason.** ⚠ **The paragraph that earns the band is the second**, because the concession is thirty-one words and the ask is forty-eight: **a concession roughly two-thirds the length of the request reads as meant**, and the September letter\'s equivalent was a reference rather than a concession.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the new fact alone in the first two lines.** _"Since November the Harasta and Jaramana runs have been merged. There is one gate now, where there were two."_ ⚠ **Twenty words, nothing about September.** **Mine had "which I raised with you in the summer" in the second line and I have cut it.**',
  '**One thing to keep, and why it works.** _"About forty minutes a shift rather than the two hours the September request would have needed."_ **The comparison is what makes _less_ checkable** — I had written "a much smaller commitment", which is a claim.',
  '**Ranking of the slip I was given.** **1** the comparable figures **2** the stopping date inside the losing branch **3** the first two lines _(right, and the easiest to fix)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **This performance is the most useful ninety seconds in the unit and it should not be cut for time.** The partner reads the letter aloud, slowly, **as the person who refused**. The writer marks every sentence that changes meaning. **Two is the usual number and both are in the second half.** **Then the instruction that goes with the homework**: **do not send it tonight.** **Read it in the reader\'s voice tomorrow morning**, because a draft read in the reader\'s voice an hour after writing is still being read in the writer\'s.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Letter written, 211 words, five moves.** **Not sent.**_',
  '⚠ _**Read in her voice the next morning.** **Two sentences changed**: "as the section has now been strengthened" and "I am sure this is straightforward". **Both cut.**_',
  '_**Sent on the Tuesday, 203 words.** **And the thing I notice: the two sentences I cut were the two I had added to make it sound friendlier.**_',
]));

// ===================== 15.7 =====================
out.push(pb());
out.push(h2('15.7  Review & Mediate: Explaining a refusal to the person refused'));
out.push(S('Stage 1 · Get ready – Unit 15 quiz'));
out.push(A('**1** _…have been **merged** into one._   **2** _…was the difficulty; **nonetheless**, the cost has gone._   **3** _This is less **than** I asked for._   **4** _…this **falls** away and I **shall** not write._   **5** _His **reluctance** to name a date…_   **6** _The **refusal** was given on cost…_'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **A reasonless refusal is silent about the application by design, and a reader fills the silence with the worst thing they can think of** — **almost always _they did not read it_.** **The one thing a mediator can always supply is on the page: _on this occasion_ is a date and not a verdict**, and the next occasion has a date too.'));
out.push(NOTE('⚠ **Mr Barghouti\'s explanation is the finding and it is the one nobody has heard: a reason can be argued with, and a decision taken by four people cannot be defended by one of them in correspondence.** **He has given reasons and spent a fortnight writing about the reason rather than the decision.** **It is not laziness; it is a choice about where the fortnight goes.** ⚠ **Mrs Nasser\'s response is the one to leave in the room — _that is a real answer and I have never heard anybody say it_** — **because the whole value of this cycle to the person refused is that the silence stops being about them.**'));
out.push(A('**The third move has a limit that must be enforced, and it is the only place in this book where a mediator can do real damage.** ⚠ **Never invent a reason to comfort somebody.** **An invented reason will be acted on**, and it produces a second letter aimed at nothing — **six months of somebody else\'s work spent on a target that does not exist.** **And the mirror case is in Pair B of Stage 3**: ⚠ **a mediator who _has_ the reason and withholds it to avoid awkwardness has chosen their own comfort over the other person\'s next six months.** **The test is not whether it is awkward but whether it is confidential.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7. ⚠ **The two warnings are the examinable content and both should be said in the room:** **do not defend the refusal, and do not join in the complaint.** **Both are easier than the mediation and both end it** — **and the second is the more tempting, because it costs nothing and feels like loyalty.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What it says.** ⚠ **That the matter is not being taken forward.** **That is all.**',
  '**What this does not say is** that the application was weak, that it was read quickly, or that the answer would be the same on another occasion.',
  '**Why the reason was withheld.** ⚠ **A reason can be argued with and a committee decision cannot be defended by one signatory.** **It is a choice about where a fortnight goes.**',
  '**What I can honestly supply.** **Nothing about the decision.** ⚠ **And one thing from the page: _on this occasion_ is a date.** **The post is readvertised in April.**',
  '**What I am not doing.** **Defending it, or agreeing that they did not read it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair. ⚠ **Pair B is the one where the mediator knows the reason, and it is not confidential.** **The right answer is to give it.** **A mediator who withholds a reason they have, to avoid awkwardness, has chosen their own comfort over the other person\'s next six months** — **and the test is not whether it is awkward but whether it is confidential.** **Expect about half the room to withhold it in a first run**, and expect them to call the withholding tact.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**What this does not say is** that the figures were wrong, that the case was weak, or that the answer in April would be the same._',
  '_**Why it was withheld:** the decision was taken by the release committee and the person who signed could not defend it alone._',
  '⚠ _**What I can honestly supply:** that the release has eleven items and two developer-weeks, which is public. **What I am tempted to supply and do not have: that they liked the idea.** I believe it and I do not know it, and if I say it she will write again in March aimed at a committee that never discussed the merits._',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Three sentences, no reason, and a reader who has concluded he was not read. Asked whether he was read, Adnan said almost certainly, and that is the cruelty of it — a refusal of three sentences takes longer to write than a refusal of eight, because you have to decide what not to say. So the mediation, which is three moves: say what the refusal does and does not say; say what can be inferred and what cannot; and supply the one thing it withheld, if you honestly have it, and say plainly that you do not if you do not. What it actually says is that the matter is not being taken forward, and that is all — it does not say the application was weak, it does not say it was read quickly, and it does not say no to anything but this occasion, and on this occasion is doing real work that nobody ever believes. What cannot be inferred is anything about the eleven years: a reasonless refusal is silent about the application by design, and a reader fills the silence with the worst thing they can think of, which is almost always they did not read it. Omar asked why not give a reason when it would take one line, and because a reason can be argued with and a decision made by four people cannot be defended by one — Adnan has given reasons and spent a fortnight on correspondence about the reason rather than the decision, which is not laziness but a choice about where the fortnight goes. Hiba said that is a real answer and she has never heard anybody say it. Which is the finding of the cycle: the thing a refusal withholds is usually withheld on purpose, and the purpose is almost never contempt, so explaining that to the person refused is most of what a mediator can do. Rim asked about the third move, supplying what was withheld, and only if you honestly have it — a mediator who invents a reason to comfort somebody has done more harm than the three sentences did, because the invented reason will be acted on and will produce a second letter aimed at nothing. Bassel asked what to do if you do not have it, and then say so, and say what the person can do that does not require it: on this occasion is a date and not a verdict. And Jad asked what you do not do: you do not defend the refusal and you do not join in the complaint, because both are easier than the mediation and both end it.']));
out.push(A('Listener task: the thing the student was tempted to supply and does not have. ⚠ **Collect those and read six aloud.** **They are almost all reassurances** — _they liked it_, _it was a close decision_, _it was nearly approved_ — **and almost none of them is known.** **Then say the cost plainly**: **an invented reason is acted on**, and the next letter is aimed at a target that does not exist. **That is the only place in this book where a mediator can do more harm than the original document did.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _They obviously did not read it._ → **✓** what cannot be inferred.   **✗** Inventing a comforting reason. → **✓** it will be acted on.   **✗** Withholding a reason you have and may give. → **✓** confidential, or not?   **✗** Defending the refusal. → **✓** neither side.   **✗** Ignoring _on this occasion_. → **✓** a date, not a verdict.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 3)'));
out.push(A('**1** submission   **2** omission   **3** composition   **4** careless   **5** Reassurance   **6** restriction   **7** kindly   **8** inclusion'));
out.push(A('⚠ **Part 3 is morphology with a grammar test inside it: the gap tells you the part of speech before you know the word.** **_their_ before 1, _the_ before 2 and 3, _a_ before 6** — all nouns; **_be thought_ before 4 wants an adjective and _however_ before 7 wants an adverb.** ⚠ **Item 5 is the one that separates a class**: **REASSURE must become _reassurance_ and it starts a sentence, so it takes a capital** — **and about a third of any room writes _reassuring_, which is an adjective where a subject is needed.** **Teach the four-second check: build the word, then read the whole sentence for sense.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE REFUSAL, AND WHAT THE READER TOOK FROM IT** · 10 February',
  '**The refusal, in full.** _"Thank you for your application of 2 October. On this occasion we are unable to take the matter forward."_',
  '**What the reader believes.** _"They did not read it."_',
  '**What it says.** ⚠ **That the matter is not being taken forward, and that is all.**',
  '**What this does not say is** that the application was weak, or that the answer would be the same in April.',
  '**Why the reason was withheld.** ⚠ **A reason can be argued with; a committee decision cannot be defended by one signatory.** **It is not contempt; it is a choice about where a fortnight goes.**',
  '**What I can honestly supply.** **Nothing about the decision**, and one thing from the page: ⚠ **_on this occasion_ is a date.** **The post is readvertised in April.**',
  '**And what I am tempted to supply and do not have:** that it was close.',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 1: the essay, sample 209 words)'));
out.push(SAMPLE([
  '**It is often said that an organisation should always give its reasons when it refuses a request. I think it should usually do so, but the argument against is much stronger than most people who have been refused will allow.**',
  '**What a reason gives the person refused is the ability to act.** Without one, a candidate or an applicant cannot tell whether to try again, to try elsewhere, or to change anything at all — **and in the absence of information people supply the worst explanation available**, which is almost always that nobody read what they sent.',
  '⚠ **The objection is serious and I want to put it at its strongest: a reason can be argued with, and a decision taken by four people cannot be defended by one of them in correspondence.** **An officer who gives a reason may spend a fortnight writing about the reason rather than about the decision**, and a directorate that answers nine hundred letters a quarter cannot spend that fortnight nine hundred times. **That is a real cost and it falls on the next applicant.**',
  '**My own view is that the choice is being made in the wrong place.** ⚠ **The expensive thing is not the reason but the correspondence it opens** — **and one line saying what would change the decision closes that correspondence rather than opening it**, which is what the directorates that do it have found.',
]));
out.push(A('**209 words, four paragraphs with one job each, all three notes, the concession third with the objection in its first sentence and a figure in sentence four, and the own idea alone in the last paragraph.** ⚠ **The concession paragraph is the one to read aloud**, because the strongest objection is on the side most students do not expect — **and an essay that treats the organisation as merely unhelpful has failed descriptor two before it has begun.**'));
out.push(S('Stage ✓ · Unit 15 check'));
out.push(A('**A** **1** a _(have merged)_   **2** b _(nonetheless)_   **3** b _(than)_   **4** b _(falls)_   **5** b _(reluctance)_   **6** c _(signatory)_   **7** a _(go)_   **8** c _(omission)_'));
out.push(A('⚠ **Item 4 is the one that separates a class**: **a first conditional takes a present tense in the _if_ clause and a future in the main clause**, and the gap is in the _if_ clause, so it is **falls** and not _will fall_. **About a third of any room puts the future in both halves.** **And item 2** is a conjunct rather than a conjunction: ⚠ **_although_ cannot follow a semicolon in that position**, which is the grammar inside what looks like a vocabulary item.'));
out.push(A('**B  Listening** **1** A   **2** C   **3** D   **4** F   **5** B   _(**E**, **G** and **H** are not used)_'));
out.push(A('⚠ **The three unused options are written to be plausible for more than one speaker.** **G** _(I never found out why and I have stopped minding)_ **is nearly true of Speaker 4**, who has some sympathy for the people who say nothing — **but he was given a reason, which is the whole of his account.** **E** tempts on Speaker 1, who was refused twice. ⚠ **Teach the one habit: read all eight options before the recording starts and mark the two or three that could fit nobody**; the five that remain are a shorter list. **Play it twice.**'));
out.push(S('Homework / After Unit 15 (sample)'));
out.push(SAMPLE([
  '_**Essay written, 209 words.**_',
  '_**Letter sent on the Tuesday, 203 words, after reading it in her voice.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the five moves. **The question — what has changed since they said no?** **I have asked it of two other things this week and the answer was nothing both times**, which saved me two letters._',
]));
out.push(sp());
out.push(box('After Unit 15', [
  '**Unit 16 turns the desk round.** ⚠ **You have spent three units writing to people who decide; 16 is about being the person who decides, and about writing criteria that can be failed.** **13.7 planted it** — **a requirement that cannot be failed is a reserve power** — **and 16.1 is where the class writes three that can.**',
  '⚠ **Ask the class to bring one set of criteria they have been assessed against, or one they have written.** **A mark scheme, a tender specification, an appraisal form, a job description.** **Anything with a list on it that somebody passed or failed.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 15 · Answer Key');
