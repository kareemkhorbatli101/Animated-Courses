// Proactive English B2 · Syria Edition · Book 2 · Unit 23 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 23  The Long Read — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **This unit needs a real document in the room and the key says so three times.** **Ask every student to bring the longest document they work from, physically, on the first day** — **a contract, a standard, a manual, a binder of minutes.** **The cycles cannot be taught from the samples alone, because the whole skill is what a reader does with sixty pages in their hands.**',
  '**Ask the class to bring three things.** ⚠ **The longest document they work from** _(23.1)_. **A question they actually have about it** _(23.2)_. **And the name of whoever in their office knows it best** _(23.6)_.',
  '⚠ **The hardest teaching point is in 23.2 and it is a habit rather than a rule.** **Opening a long document without a question is not a reasonable first step; it is acquainting yourself, which is what people do instead of reading.** **Use Ms Khoury\'s arithmetic: an afternoon with no question produced a great deal about the machine and nothing about the stock, and she had to tell her editor she would look it up.**',
  '**23.7 carries the examination papers.** **Reading and Use of English Part 4** is key word transformation, **Writing Part 1** is the essay, and **Listening Part 3** is multiple matching.',
  '⚠ **And one warning about 23.4, which is the cycle that implicates the room.** **The third sentence of a silence report names whoever has been filling the gap, and in this class that person has been the writer about three times in four.** **Say at the start that this is not a confession but a finding** — **a gap that has been managed invisibly is the commonest state of affairs in any organisation, and the cycle exists to make it visible, not to allocate blame.**',
], C.lblue, C.navy));

// ===================== 23.1 =====================
out.push(pb());
out.push(h2('23.1  The way in'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Three numbers on the board for each student: pages in the document, pages they actually read, and how they chose.** **The third column is almost always empty, and the honest answer is that nobody chose** — **the reader started at page one and stopped when the work became urgent.** **Keep the first two columns up for the whole unit; they are the measure of the method.**'));
out.push(A('**b** A way in: **3** and **5**. Not: **1**, **2** and **4**. ⚠ **2 is the one to dwell on** — _I read the summary_ — **because it feels like the sensible short cut and it is the error of 23.3.** **A summary is older than the clauses it summarises, and a reader who starts there has started with the oldest part of the document.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **finding out which pages do the work, and in what order it was written**; and **a reader who starts at page one has handed that decision to whoever arranged the pages.**'));
out.push(A('**b** **1** ⚠ **A clause on page 41 that says the opposite of the summary on page 2** — **after four months of working from page 2** — **and he found it by accident, looking for something else.**   **2** ⚠ **It is not a courtesy but a map of what the writer thinks the document is about** — **and where it disagrees with what the document is actually used for, you have learned something before reading a word.**'));
out.push(NOTE('⚠ **The four places are the content of the cycle and they should go on the board in order and stay there:** **the contents page · the amendment or revision list · the definitions · and the schedule of dates at the back.** **None of them is page one, and that is the sentence to repeat.** ⚠ **The amendment list is the one to press hardest, because it is the one nobody has opened.** **It tells you where the document has been changed, and a changed clause is a clause somebody argued about** — **so it is the only part of a long document that tells you where the trouble is.** **Mr Barghouti\'s page 41 is on his amendment list, amended in July, and it is at page 59 of 60, which he had walked past every time he looked at the schedule of dates on page 55.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **The contents page:** _a map of what the writer thinks the document is about_ — **compare it with what the document is actually used for.**   **2** ⚠ **The amendment list:** _nine clauses changed between April and July; seven of our nine disputes this year are on it._   **3** ⚠ **The definitions:** _pages 3 to 5; four of the twenty-three matter._   **4** ⚠ **The schedule of dates:** _every period in one table, and the only page where they can be seen against each other._   **5** ⚠ **Where the contents page disagrees with the use:** _the contents page gives four pages to arbitration and half a page to variations, and in nineteen years we have had no arbitration and about forty variations a year_ — **which tells you what the drafters feared and not what the document does.**'));
out.push(A('⚠ **Mark 5 hardest.** **It asks the student to read the contents page as evidence about the drafters rather than as a route to a page**, **and the answers are usually the most interesting thing produced in the cycle** — **expect at least one student to find four pages devoted to something that has never happened.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Sixty pages of conditions of contract.**',
  '_B:_ **First the amendment list, because it tells me where the arguments have been. Then the contents page, the definitions and the schedule of dates.**',
  '_A:_ **A year of committee minutes in a ring binder.** ⚠ _(marked row)_',
  '_B:_ **No contents page and no amendment list, so the way in is the dates. I read them in date order and look for the meeting where the practice changed — and in a binder of minutes that meeting is usually within four weeks of a change of chairman.**',
  '_A:_ **A tender document of ninety pages.**',
  '_B:_ **Contents page first, because a tender has a schedule of requirements and I need to know how long it is before anything else. Then the definitions, the dates and any addenda.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have no contents page and no amendment list** — **minutes, a bundle, call logs, a correspondence file** — **and the way in is the chronology: read the dates in order and find where the practice changed.** **A pile with no map has its map in its dates, and the listener task is to catch the pair who answer _the contents page_ for a ring binder.** **Somebody always does, because the four places have just been learned as a list.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The document:** the forty-page inward goods standard, second edition._',
  '_**Four minutes on the contents page and the amendment list.** The amendment list is on the inside back cover and has six entries, four of them in the last year._',
  '⚠ _**And the pages I now think do the work are not the pages I have been reading.** **I have been reading clauses 7 and 9, which are refusal and acceptance.** **The four amendments are all in the sampling appendix, which I have never opened** — **and the sampling appendix is what tells an inspector how many cartons to look at.**_',
  '_**So the eleven pages are: the amendment list, the four definitions at 2.1 to 2.4, clauses 7 and 9, and the sampling appendix, which is five pages on its own.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Adnan had worked from sixty pages of conditions of contract for four months, and in August he found a clause on page forty-one that says the opposite of the summary on page two. He had been using page two, because everybody uses page two: it is called summary of principal terms and it is on page two. He found page forty-one by accident, looking for something else, when the word caught his eye — which is not a method, and it is how most of these things are found. So the question for the unit is what the first ten minutes are for, and the answer is not reading: it is finding out which pages do the work and in what order the document was written. Omar asked how you do that in ten minutes, and four places, none of which is page one: the contents page, the amendment or revision list, the definitions, and the schedule of dates at the back. Dima asked why the amendment list, and because it tells you where the document has been changed, and a changed clause is a clause somebody argued about — the amendment list is the only part of a long document that tells you where the trouble is. Adnan said his has one and he had never opened it, and page forty-one is on it, amended in July. Which is the finding, and it took four seconds once he looked: a contents page is not a courtesy but a map of what the writer thinks the document is about, and where it disagrees with what the document is actually used for you have learned something before reading a word. Rim asked about the definitions, and always, and before any clause, because a clause read with the wrong definition is worse than no clause at all. And Jad asked what you do not do: you do not read continuously and you do not take notes, because notes in the first ten minutes are notes about the beginning, which is the part of a long document least likely to matter. Ten minutes of looking, and then you choose your eleven pages. And Lubna asked about saying a clause and a page together: clause first, then the page, with a small pause between them, because people run them into one number, the other person writes down forty-one point three, and the conversation is then about the numbering and not about the clause.']));
out.push(A('⚠ **Mark the report on the four places and on the sentence about the amendment list.** **A version that lists the four places and omits _a changed clause is a clause somebody argued about_ has given the room a procedure without a reason** — **and a procedure without a reason is not followed in February.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _The way **into** a document **is** the first ten minutes **for** reading._ → _the first ten minutes are not for reading_.   ⚠ _Clause **forty-one point three**._ → _clause 14.3 at page 41_.   ⚠ _**Eleven** of the sixty pages **does** the work._ → _do the work_.   ⚠ _I **walked past** it every **times**._ → _every time_.   ⚠ _The **amendments list**._ → _the amendment list_.'));
out.push(NOTE('⚠ **There is a second lesson in the ten minutes that is easy to teach past, and it is the figure.** **In a document of sixty pages, between eight and fourteen do the work.** **The rest is recital, procedure that has never arisen, and the pages copied from the last edition** — **and a reader who treats all sixty as equal has given the important eleven a sixth of the attention they need.** ⚠ **Put the arithmetic on the board, because it is the argument against reading everything and it is not an argument for skimming.** **Eleven pages read properly beats sixty pages read evenly, and the eleven can be chosen in ten minutes by anybody.** **The skill this unit teaches is the choosing, and the choosing is the part nobody has ever been taught.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because a changed clause is a clause somebody argued about, and seven of their nine disputes this year are on the list.** **Nine clauses have been amended since the March edition was issued, with dates from April to July** — **so the list is both a map of the trouble and the only record of the document\'s own chronology.**'));
out.push(A('**2** ⚠ **Clause 14.3 says that time for completion runs from the date of the possession certificate.** **Page 2 says it runs from the date of the order.** **14.3 was amended in July and page 2 has not been reprinted since 1 March** — **so the two are not in conflict so much as a month apart.**'));
out.push(A('**3** ⚠ **Nothing, until somebody raises something** — **they are recital, an arbitration procedure unused in nineteen years, and about eleven pages copied from the previous edition.** **He has marked the copied ones**, **because an unchanged clause in a changed document is sometimes an oversight.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD, SECOND EDITION · THE WAY IN** _(internal note · 2 October · for anybody at a gate)_',
  '**What this note is.** ⚠ **Not a summary of the forty pages.** **A list of the eleven that do the work, in the order to read them.**',
  '**1  The amendment list, on the inside back cover.** ⚠ **Six entries, four of them in the last year, and all four are in the sampling appendix.**',
  '**2  The definitions, at 2.1 to 2.4.** ⚠ **_The top layer_ at 2.3 is the one that catches people: it means every carton visible without moving another carton, and not the four on the near corner.**',
  '**3  The operative clauses, at pages 9 to 12 and the sampling appendix at 31 to 35.** ⚠ **Everybody reads 9 to 12 and nobody reads the appendix, which is where all four amendments are.**',
  '**4  The schedule of limits, at page 36.** ⚠ **Every figure in the standard in one table.**',
  '**5  What to do with the other twenty-nine pages.** ⚠ **Nothing, until somebody raises something.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD, SECOND EDITION · THE WAY IN** _(internal note · 2 October · for anybody who has to work at a gate)_',
  '**What this note is.** ⚠ **Not a summary of the forty pages.** **A list of the eleven that do the work, in the order to read them, written after two years of reading the wrong two clauses carefully.**',
  '**1  The amendment list, on the inside back cover, which nobody opens.** ⚠ **Six entries, four of them in the last year** — **and all four of the recent four are in the sampling appendix, which tells an inspector how many cartons to look at.** **I had not opened it.**',
  '**2  The definitions, at 2.1 to 2.4.** **Four of them, and all four matter.** ⚠ **_The top layer_ at 2.3 is the one that catches people: every carton visible without moving another carton, and not the four on the near corner** — **which is the reading one of my own inspectors took for four months, correctly, because the first edition did not say.**',
  '**3  The operative clauses, at pages 9 to 12, and the sampling appendix at 31 to 35.** ⚠ **Everybody reads 9 to 12.** **Nobody reads 31 to 35, and that is where every amendment of the last year has been made.**',
  '**4  The schedule of limits, at page 36.** ⚠ **Every figure in the standard in one table, and the only page where two of them can be seen against each other.**',
  '**5  What to do with the other twenty-nine pages.** ⚠ **Nothing, until somebody raises something.** **Storage, carriage, and four pages on a claims procedure that has been used twice in eleven years.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: what the note is not, in the first line.** You have it. **The line I copied is _after two years of reading the wrong two clauses carefully_** — and _carefully_ is the word that will make somebody read the rest._',
  '_**Criterion: a clause number and a page for every reference.** Four of the five lines have both. **Line 1 gives the inside back cover and no page number**, and a reader with a different printing will not find it._',
  '_**Keep:** _which is the reading one of my own inspectors took for four months, correctly._ **It works because it puts the fault on the edition rather than on the man, so the next inspector will tell you what they actually do.**_',
  '_**Ranking of the slip I was given:** the page-number criterion first, because it found a real gap; the what-it-is-not criterion second; the leftover-pages criterion last, because one line covered it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Three numbers from each student, in this order: pages in the document, pages that do the work, pages they had been reading.** **Write all three on the board.** **The second is almost always smaller than the third, and the gap is the finding** — **which means most of the room has been reading the wrong pages carefully, and nobody has been idle.** **That distinction is worth making explicitly, because a class that hears _you have not been reading properly_ will defend itself and learn nothing.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Pages:** forty. **Pages that do the work:** eleven. **Pages I had been reading:** four, and two of them are not among the eleven._',
  '⚠ _**And the thing from the amendment list I did not know had been changed.** **The sampling rule was amended in March: it used to say four cartons from the second layer and it now says four, one from each quarter of the pallet.**_',
  '_**Which I have been doing wrongly since March**, and nobody told me, and the amendment list has said so on the inside back cover for seven months._',
  '_**Ten minutes, and it found something I have been getting wrong for seven months.**_',
]));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  Reading for the thing you need'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The test is whether the question can be stated in one sentence, and the teacher should insist on it being said aloud rather than described.** **A student who says _I wanted to understand the contract_ has given the diagnosis, not the question.** **Collect the real ones on the board and notice how few of them existed before the document was opened.**'));
out.push(A('**b** A question you can search with: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 is the one to read twice** — _I need to be familiar with the standard_ — **because it is a professional-sounding sentence that cannot be acted on.** **Ask what a reader would do differently in the next four minutes on the strength of it, and the answer is nothing.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **it is acquainting yourself, which is what people do instead of reading**; and **it takes about four times as long and leaves nothing behind.**'));
out.push(A('**b** **1** ⚠ _Whether the machine can be run on the thinner stock, and if so at what speed._ **The answer is in two places: page 94 says permitted and page 131 says at a reduced speed, and neither points to the other.**   **2** ⚠ **Write it down and leave it.** **In the course of looking for one thing you will see three others and two of them matter** — **and the list at the end of forty minutes is worth more than the two you would have chased.**'));
out.push(NOTE('⚠ **The two-clause question is the single most portable thing in this unit and it should be drilled until it is automatic.** **One clause gets a yes or a no; two clauses get an instruction.** **Ms Khoury\'s page 94 says the stock is permitted and her page 131 caps the speed at four thousand an hour** — **and a reader who had asked only the first half would have stopped at 94 and been right and useless.** ⚠ **Then the habit that protects the forty minutes: read the question back before you start.** **Four seconds, and it stops what happens to everybody** — **finding something interesting on page 11 and spending thirty of the forty minutes on it.** **Say plainly that this is not idleness: an interesting clause feels like progress and reads like work.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **Two clauses:** _whether notice can be given by post, and if not what counts as notice._   **2** ⚠ **The answer in two places:** _page 94 permits the stock; page 131, note (c), caps the speed below 70 gram at four thousand an hour._   **3** ⚠ **Not there:** _the manual does not say; I looked at the index under three words, at table 11 and at the warnings page._   **4** ⚠ **Written and left:** _the paper-weight tolerance at page 96 is ±4 gram_ — **noted, not followed, and followed the next morning in nine minutes.**   **5** ⚠ **Nine minutes the next morning:** _whether a 56-gram sheet is permitted, and if so at what speed_ — **and the answer is at page 94, table 11, footnote 2: it is not permitted.**'));
out.push(A('⚠ **Mark 3 hardest, and mark it on _where I looked_.** **A student who writes _it is not in the manual_ has produced a sentence the next person cannot use** — **and the three words tried in the index are the part that saves the next search, because an index is arranged by the writer\'s words and not the reader\'s.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **A press run on thinner stock, forty minutes to the deadline.**',
  '_B:_ **What I need to know is whether the machine takes the 60-gram stock, and if so at what speed. Index under _stock_, then the speed tables.**',
  '_A:_ **Why the ministry refused the January consignment.** ⚠ _(marked row)_',
  '_B:_ **No document will answer that. What I would write is: the gate book records the refusal and not its reason; I looked at the gate book, the delivery note and the carrier\'s copy. The reason is in somebody\'s head and the person to ask is the gate clerk.**',
  '_A:_ **Which probe governs if the four disagree.**',
  '_B:_ **What I need to know is whether all four probes must be within tolerance, and if not which governs. Clause 9, then the sampling appendix.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows will not be answered by any document** — **a refusal\'s reason, a check that was never recorded, an intention from 2019, a reply nobody made** — **and the answer is the sentence that says so with where you looked and who to ask.** **That sentence is a finding; _I could not find anything_ is a day of somebody else\'s work.** **The listener task should record, for each, whether a person was named** — **because a search that ends in a person has ended somewhere.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The question:** whether a re-presented load must be sampled again in full, and if not which cartons must be checked._',
  '_**Eight minutes.** The answer is not in the standard: clause 7 covers refusal and clause 9 covers acceptance and neither covers a return. I looked at 7, 9, the sampling appendix and the index under four words._',
  '⚠ _**And the list of what I saw and did not follow:** **1** the sampling appendix was amended in March and I have been working to the old rule. **2** clause 9.4 requires a written reason for every refusal and I give one verbally. **3** the schedule of limits at page 36 has two crush figures, 10 mm and 12 mm._',
  '_**The third one frightens me and I am following it tomorrow with its own question.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Dima had a manufacturer\'s manual of two hundred pages and forty minutes before the bulletin closed, and the first thing she did was write down what she needed to know: whether the machine can be run on the thinner stock, and if so at what speed. Two clauses, and the second one saved her, because page ninety-four says yes and page a hundred and thirty-one says at a reduced speed — so a reader who had only asked the first half would have stopped at ninety-four and been right and useless. Which is the whole cycle: a question with one clause gets a yes or a no, and a question with two gets an instruction. Omar asked what you do with the question once you have it, and you read it back before you start, out loud if you are alone: four seconds, and it stops the thing that happens to everybody, which is finding something interesting on page eleven and spending thirty of your forty minutes on it. Adnan said that is exactly how he loses an afternoon, and everybody does, and it is not idleness — an interesting clause feels like progress and reads like work, and at the end of the afternoon you know something you did not need and not the thing you came for. Rim asked what happens if the answer is not there, and then you write that down as an answer, with where you looked: the manual does not say, and I looked at seven, nine and the index under three words. That is a finding and it can be acted on, and I could not find anything is not, because the next person has to do it again. Jad asked about the question you did not ask, and you write it down and leave it, because in the course of looking for one thing you will see three others and two of them matter. Dima\'s list had four things on it and she followed one of them the next morning, with its own question, in nine minutes.']));
out.push(A('⚠ **Mark the report on the page 94 and page 131 arithmetic.** **A version that says the question should have two clauses without giving the two pages has reproduced the rule and lost the evidence** — **and the evidence is what makes a class do it on Monday.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _What I need to know **is if** the machine can run._ → _is whether_ **in a written question.**   ⚠ _**And if so at which speed**._ → _at what speed_.   ⚠ _The manual **does not says**._ → _does not say_.   ⚠ _I looked **in** the index **on** three words._ → _at the index under three words_.   ⚠ _Four **thousands** an hour._ → _four thousand an hour_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because page 94 permits the stock and page 131 caps the speed, and neither points to the other** — **the index has _stock_ at 94 and does not have it at 131 at all.** **Half the answer is permission and half is a limit, and a reader who stops at the first half is right and useless.**'));
out.push(A('**2** ⚠ **The index, table 11 at page 94, the speed tables at 128 to 132 and the warnings page at 7.** **She did not read the maintenance section at pages 140 to 196** — **and that is where she would have gone next.**'));
out.push(A('**3** ⚠ **The first: whether a 56-gram sheet is permitted, and if so at what speed** — **asked the next morning with its own question and answered in nine minutes at page 94, table 11, footnote 2, where it is not permitted.** **It would have cost half an hour on the Thursday and the bulletin would have gone out without the speed figure.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD · WHAT I WENT IN FOR AND WHAT I FOUND** _(17 October · thirty-five minutes)_',
  '**The question I went in with.** ⚠ _Whether a re-presented load must be sampled again in full, and if not which cartons must be checked._',
  '**The answer, and it is not there.** ⚠ **Clause 7 covers refusal and clause 9 covers acceptance.** **Neither covers a load that comes back.** **I looked at 7, 9, the sampling appendix and the index under four words.**',
  '**The working answer, in one sentence.** ⚠ **The standard is silent, and the person who has been deciding it is me, at the gate, four times in the year.**',
  '**What I looked at and what I did not.** **I did not read the carriage and storage sections at pages 13 to 22**, ⚠ **and that is where I would have gone next.**',
  '**Things I saw and did not follow.** ⚠ **1 The sampling appendix was amended in March and I have been working to the old rule. 2 Clause 9.4 requires a written reason for a refusal and I give one verbally. 3 The schedule of limits has two crush figures.**',
]));
out.push(S('Stage 7 · Write freely (sample, 209 words)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD · WHAT I WENT IN FOR AND WHAT I FOUND** _(17 October · thirty-five minutes)_',
  '**The question I went in with.** ⚠ _Whether a re-presented load must be sampled again in full, and if not which cartons must be checked._ **Two clauses, and the second is the one the driver asks at the gate.**',
  '**The answer, and it is not there.** ⚠ **Clause 7 covers refusal and clause 9 covers acceptance, and neither of them covers a load that comes back in the same week.** **I looked at 7, at 9, at the sampling appendix and at the index under four words** — _return_, _re-present_, _redelivery_ **and** _refusal_ — **and of the four only _refusal_ is in the index at all.**',
  '**The working answer, in one sentence for the next person.** ⚠ **The standard is silent on it, and the person who has been deciding it is me, at the gate, four times in the year to August** — **and not on the same basis each time.**',
  '**What I looked at and what I did not.** ⚠ **I did not read the carriage and storage sections at pages 13 to 22, and that is where I would have gone next** — **a returned load is arguably in carriage until it is accepted, and if the answer exists anywhere it is there.**',
  '**Three things I saw and did not follow.** ⚠ **1 The sampling appendix was amended in March and I have been working to the old rule.** **2 Clause 9.4 requires a written reason for every refusal and I have been giving one verbally.** **3 The schedule of limits at page 36 gives two crush figures, 10 mm and 12 mm.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: a two-clause question written before the search.** You have both clauses and you say which one the driver asks. **The line I copied is _and the second is the one the driver asks at the gate_** — it justifies the second clause instead of merely having it._',
  '_**Criterion: every page the answer came from.** **Here the answer is an absence, and you have given the four words you tried in the index**, which is the version of _where I looked_ that an absence needs._',
  '_**Keep:** _and of the four only refusal is in the index at all._ **It works because it tells the next reader something about the index and not only about the question.**_',
  '_**Ranking of the slip I was given:** the where-I-looked criterion first, because an absence needs it most; the two-clause criterion second; the consequence criterion last, since the consequence is in your third paragraph already._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Count the leads, not the answers, and say so before the stage begins.** **The measure of forty minutes is the list of things seen and not followed** — **and the question to put at the end is the one that lands: how many of those would anybody ever have found again?** **In this room the answer has been none, every time, which is what makes the list the valuable half of the exercise and not the by-product.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The question:** whether notice under clause 3.11 can be given by electronic means, and if not what the alternative is for a site forty kilometres away._',
  '_**Forty minutes.** The answer is at 3.11 and at 27.2, which do not refer to each other: 3.11 requires writing delivered by hand and 27.2 permits a notice left at the site office against a signature._',
  '⚠ _**The working answer:** by hand, or left at the site office against a signature — which means a driver can serve notice and nothing sent from Damascus is notice at all._',
  '_**Four leads, not followed: the index does not have _notice_ at 27 at all; clause 27 is not in the contents page; two of our notices this year went by post; and 27.2 was amended in May.** **I followed the last one next morning in six minutes: the amendment added the signature requirement.**_',
]));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  The paragraph that contradicts the summary'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The second question is the stage:** _which of the two does anybody in your office actually quote?_ **It is the summary, every time.** **Write the sentence on the board before the dialogue and leave it:** **the summary is not the document.** **Half the room will have quoted a summary in a letter within the last month.**'));
out.push(A('**b** Reports a contradiction usefully: **4** and **5**. Not: **1**, **2** and **3**. ⚠ **5 is the full answer and 4 is the half of it everybody produces.** **Both sentences is necessary and not sufficient** — **without _which governs and why_ the reader has been handed the problem and no way through it.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **two dates**; and **a summary is almost always older than the clauses it summarises, so the contradiction is a history and not a mistake.**'));
out.push(A('**b** **1** ⚠ **The edition is dated 1 March; clause 14.3 was amended on 11 July and page 2 was not reprinted** — **so page 2 was right in March and 14.3 has been right since July, and neither is wrong.**   **2** ⚠ **_There is some confusion in the document._** **It is true, it helps nobody, and it makes the writer the source of the confusion in everybody\'s memory of the conversation.**'));
out.push(NOTE('⚠ **The finding that changes a class\'s letters is the one about what gets repeated.** **The person you tell will repeat your sentence and not the clause.** **_He says the contract is confusing_ travels; _he says 14.3 governs and here is why_ travels as well, can be checked, and is still true in six weeks.** ⚠ **Mr Barghouti\'s own note records that he wrote the first version** — _there appears to be some confusion over the commencement date_ — **and that Mr Saqqal would have repeated that sentence.** **Put both versions on the board and ask the room which one they have written, and when.** **Then the second teaching point, which is quieter: look for the clause that says the summary prevails before you advise anybody, because some tender documents have one and then the whole answer reverses.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **Both sentences:** _page 2: time runs from the date of the order. Clause 14.3: time runs from the date of the possession certificate._   **2** ⚠ **Which governs, two reasons:** _14.3 governs, because it is the operative provision and because it was amended later._   **3** ⚠ **Where the summary prevails:** _clause 1.2 provides that in the event of inconsistency the summary of principal terms shall prevail_ — **and then the amended clause is the thing to be alarmed about.**   **4** ⚠ **Cannot tell, with figures:** _if 14.3 governs we are eleven days early; if page 2 governs we are nineteen days late; the clause that decides would be 1.4 and there is no clause 1.4._   **5** ⚠ **Rewritten out of _some confusion_:** _page 2 and 14.3 give different commencement dates; 14.3 governs; on three of six contracts the difference is eleven, nineteen and forty-one days._'));
out.push(A('⚠ **Mark 3 hardest, because it is the one students do not believe exists.** **Bring a tender document with a prevailing-terms clause if you can get one** — **it takes one minute to show and it prevents a confident wrong answer for the rest of their careers.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Page 2: time runs from the order. 14.3: from the possession certificate.**',
  '_B:_ **14.3 governs, because it is the operative provision and because it was amended in July while page 2 was not reprinted.**',
  '_A:_ **Page 2: fourteen days. 22.1: seven days. No clause says which prevails.** ⚠ _(marked row)_',
  '_B:_ **I cannot settle this from what is here. If fourteen applies we are inside the period on every job; if seven applies we are late on four. What would settle it is a prevailing-terms clause, and there is not one — so the question goes to whoever issued the document.**',
  '_A:_ **Summary: no retention. 18.2: five per cent retention.**',
  '_B:_ **18.2 governs, because it is the operative provision; and here the figure is in the clause and absent from the summary, which is a silence rather than a contradiction.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows cannot be settled from what is given** — **no prevailing clause, two identical dates, a summary about something no clause covers, and two figures with no hierarchy** — **and the answer is the contradiction reported with a figure on each side and the thing that would settle it named.** **The listener task should catch the pair who invent a hierarchy**, **because the instinct to produce an answer is strong and a confident wrong hierarchy is worse than the contradiction.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Both sentences.** Page 1 of the standard: _all consignments are checked on arrival_. Clause 9.1: _consignments are checked on arrival or, where the gate is closed, on the first working morning following_._',
  '_**The dates.** The standard is the second edition, of 11 January. Clause 9.1 was amended on 4 March. Page 1 has not been reprinted._',
  '⚠ _**So 9.1 governs, for two reasons: it is the operative clause, and it is later.** **And the figure: eleven of our four hundred consignments last year arrived after the gate closed, and all eleven were checked the following morning** — **which page 1 forbids and 9.1 permits.**_',
  '_**And I have checked for a prevailing-terms clause: there is none, and clause 1.1 puts the clauses above the introductory pages expressly.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Asked which of page two and clause fourteen point three is wrong, Adnan said neither, and that is what he had not expected: page two was right in March and clause fourteen point three has been right since July. The two dates are these — the edition is dated the first of March, the clause was amended on the eleventh of July, and page two was not reprinted. Which is what almost every contradiction in a long document turns out to be: two dates, and not two opinions. A summary is older than the clauses it summarises, because a summary is written once and clauses are amended, so the contradiction is a history and not a mistake. Dima asked which one governs, and the operative clause, and you say why rather than asserting it: fourteen point three governs because it is the operative provision and because it was amended later. Two reasons, and the second is the one nobody gives. Rim asked whether it is ever the other way round, and occasionally: if the document says somewhere that the summary prevails, and some tender documents do in a clause nobody reads, then the summary governs and the amended clause is the thing to be alarmed about. Omar asked what you write, and both sentences in full, side by side, at the same length, then which governs and why — and what you must not write is that there is some confusion in the document, which is true, helps nobody, and makes you the source of the confusion in everybody\'s memory. Jad asked why that matters so much, and because the person you tell will repeat your sentence and not the clause. And Lubna asked what to do if you are not sure which governs: report the contradiction, say what turns on it with a figure, and say what would settle it. If fourteen point three governs we are eleven days early, and if page two governs we are nineteen days late — and uncertainty with a figure on it is professional, where uncertainty on its own is a shrug. And Adnan asked about reading the two sentences out loud: at the same speed and the same length, with no comment between them, because people read the one they believe slowly and the other one quickly, and the room hears the verdict before the evidence and stops listening to the evidence.']));
out.push(A('⚠ **Mark the report on _neither of them is wrong_.** **A version in which page 2 is an error has lost the finding of the cycle** — **the two sentences are a history, and the word to look for in a student\'s report is _dates_ and not _mistake_.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _There **is some confusion** in the document._ → **both sentences, then which governs.**   ⚠ _14.3 **governs because it is later**, full stop._ → **two reasons, not one.**   ⚠ _Page 2 **was not reprint**._ → _was not reprinted_.   ⚠ _The summary **prevail** over the clauses._ → _prevails_.   ⚠ _**In case of** inconsistency._ → _in the event of inconsistency_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **First, because 14.3 is the operative provision and page 2 is described in its own heading as a summary.** **Second, because 14.3 was amended on 11 July and page 2 has not been reprinted since 1 March** — **so page 2 was accurate when it was printed and has not been accurate since July.**'));
out.push(A('**2** ⚠ **For a clause providing that the summary prevails** — **and there is none.** **He looked at clause 1 _(interpretation)_, clause 2 _(documents forming the contract)_ and the index under four words, and clause 2.4 puts the conditions above the summary expressly.**'));
out.push(A('**3** ⚠ **One line on page 2 as an erratum slip:** _see clause 14.3, amended 11 July_ — **not a reprint and not an amendment.** **And he is not saying that the document is confusing: it is sixty pages with an amendment list that records nine changes, and the system works as designed** — **what failed is that nobody in the office had opened page 59, including him.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD · PAGE 1 AGAINST CLAUSE 9.1** _(note · 20 October · to Mrs Tannous)_',
  '**The two sentences, in full.** ⚠ **Page 1:** _all consignments are checked on arrival._ **Clause 9.1:** _consignments are checked on arrival or, where the gate is closed, on the first working morning following._',
  '**Which governs, and the two reasons.** ⚠ **9.1 governs.** **First, because it is the operative clause.** **Second, because it was amended on 4 March and page 1 has not been reprinted since 11 January.**',
  '**And I have checked for the clause that would reverse this.** ⚠ **There is no prevailing-terms clause, and 1.1 puts the clauses above the introductory pages expressly.**',
  '**What turns on it.** ⚠ **Eleven of four hundred consignments last year arrived after the gate closed and all eleven were checked the following morning** — **which page 1 forbids.**',
  '**What I am asking for.** ⚠ **One line on page 1: _see clause 9.1, amended 4 March_.**',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**INWARD GOODS STANDARD · PAGE 1 AGAINST CLAUSE 9.1** _(note · 20 October · to Mrs Tannous, standards office)_',
  '**The two sentences, in full and at the same length.** ⚠ **Page 1, under _how this standard works_:** _all consignments are checked on arrival._ **Clause 9.1, at page 9:** _consignments are checked on arrival or, where the gate is closed, on the first working morning following._',
  '**Which governs, and the two reasons.** ⚠ **Clause 9.1 governs.** **First, because it is the operative clause and page 1 describes itself as an introduction.** **Second, because 9.1 was amended on 4 March and page 1 has not been reprinted since the second edition was issued on 11 January** — **so page 1 was accurate when it was printed and has not been accurate since March.**',
  '**And I have checked for the clause that would reverse this.** ⚠ **There is no prevailing-terms provision: I have looked at clause 1, at the contents page and at the index under three words, and clause 1.1 puts the clauses above the introductory pages expressly.**',
  '**What turns on it, with the figure.** ⚠ **Eleven consignments out of about four hundred arrived after the gate had closed last year, and all eleven were checked the following morning** — **which page 1 forbids and 9.1 permits.** **No load has been refused on the point and one supplier has asked about it twice.**',
  '**What I am asking for, which is small.** ⚠ **Not a reprint.** **One line on page 1: _see clause 9.1, amended 4 March_.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: both sentences in full at the same length.** You have them, and quoting the heading of page 1 is better than the unit asks for. **The line I copied is _page 1 describes itself as an introduction_** — that is the first reason doing real work rather than asserting a rule._',
  '_**Criterion: two reasons with a date among them.** Both present, and the dates are the second. **_Accurate when it was printed and has not been accurate since March_ is the sentence that keeps the drafter on your side.**_',
  '_**Keep:** _one supplier has asked about it twice._ **It works because it shows the contradiction has been noticed outside the organisation, which is what makes a small ask urgent.**_',
  '_**Ranking of the slip I was given:** the two-reasons criterion first; the counter-check second, because you had done it and I had not; the small-ask criterion last, because it was one line._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The demonstration is that the room can hear a verdict in the speed of a reading, and it works every time.** **Ask the class to guess which sentence the speaker believes, and they are right from the pace and not from the words.** **Then the second question: what did you nearly write instead of the note?** **Almost every student nearly wrote _there is some confusion_, and the ones who did not had written nothing at all** — **which is the third option nobody mentions and the commonest one in practice.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Both sentences.** Page 2 of the maintenance agreement: _faults are attended to within four working hours_. Clause 6.2 as amended: _within four working hours, or one working day for Deir Atiyah and Salkhad_._',
  '_**The dates.** Page 2 is from the original of 2 February. Clause 6.2 was amended on 11 April._',
  '⚠ _**So 6.2 governs, because it is the operative clause and because it is later** — **and here the amendment is in our favour and page 2 is the stricter of the two, which is the reverse of the unit\'s example and is worth noticing.**_',
  '_**The figure:** two of eleven sites are affected, and on both of them we have been reporting ourselves as late since April when we were not._',
]));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  The silence that matters'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Insist on the second half of the instruction: which of the three has actually happened.** **A class left to list what a document does not cover will produce a dozen silences in four minutes, and eleven of them will never have arisen.** **Write _tested_ and _untested_ as two columns and sort them as they come.**'));
out.push(A('**b** Load-bearing: **3** and **5**. Not: **1**, **2** and **4**. ⚠ **4 is the one to put under the light** — _it does not define the word carefully_ — **because it is a complaint about drafting rather than a silence at all.** **The test is whether a case has arisen and somebody has decided it, and nobody decides anything on the strength of a definition being loose.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **that the case has happened, and that somebody filled the gap on the day**; and **the person who filled it is now the rule, and nobody has written their name down.**'));
out.push(A('**b** **1** ⚠ **A refused delivery brought back in the same week** — **four times in the year, and she had been deciding all four herself, at the gate, and not on the same basis each time.**   **2** ⚠ **Without triumph, which is a real difficulty** — **finding a hole in a forty-page document feels like winning, and a note that reads as winning is answered by somebody defending the document instead of filling the hole.**'));
out.push(NOTE('⚠ **The third sentence is the cycle and it is the one students leave out, because the answer is always somebody in the room.** **What the document is silent on · how many times it has arisen · and who has been deciding it in the meantime, and on what basis.** ⚠ **Say at the start that this is not a confession.** **A gap that has been managed invisibly is the normal state of affairs in any organisation** — **and Ms Shaaban\'s own sentence is the one to put on the board:** _the gap was managed and not neglected, and that is also the problem, because nobody knew it was being managed._ **A class that hears the third sentence as an accusation will produce untested silences for the rest of the cycle, which is the safe answer and the useless one.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **What it is silent on:** _nothing provides for a consignment refused at the gate and brought back in the same week; clause 7 covers refusal and clause 9 covers acceptance._   **2** ⚠ **How often:** _four times in the year to August, twice from the same supplier; the gate book entries and the dates are attached._   **3** ⚠ **Who has been deciding it:** _I have, at the gate, and not on the same basis each time_ — **January as a fresh consignment, March as a continuation.**   **4** ⚠ **Three untested, one line each:** _arbitration outside the country_ · _carton colour_ · _a carrier not on the list_ — **all never arisen, and no argument for any of them.**   **5** ⚠ **Written without triumph or apology:** _nothing in the standard provides for this, and I have been deciding it at the gate for a year._'));
out.push(A('⚠ **Mark 5 hardest and mark it in both directions.** **Triumph reads as _the standard has a hole in it_; apology reads as _I am afraid I have been improvising_** — **and the version that gets the paragraph drafted is flat and has a figure immediately after the silence.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **A refused delivery brought back the same week.**',
  '_B:_ **Nothing in the standard provides for it. It has arisen four times in the year to August, and I have been deciding it at the gate, on two different bases.**',
  '_A:_ **Arbitration outside the country.** ⚠ _(marked row)_',
  '_B:_ **Never arisen. One line in the list at the end, and no argument for it: the contract is silent on arbitration outside the country, and in nineteen years no arbitration of any kind has been commenced.**',
  '_A:_ **A proof returned after the reader has gone home.**',
  '_B:_ **The schedule is silent. It happens about once a fortnight, and the sub-editor on duty decides whether to hold the page, which means the answer depends on which of four people is on duty.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows have never arisen** — **arbitration abroad, carton colour, a third analyser, minutes by an absentee** — **and they belong in a one-line list at the end and nowhere else.** **A pair that argues for an untested silence has written the note that does not get read, and the listener task should record which rows were argued for.** **The rule to state once: a note reporting twelve untested silences will not be read; one reporting a single tested silence and listing twelve others will be acted on.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The tested silence:** the typesetting agreement is silent on a correction introduced by the typesetter after the final text has been approved._',
  '_**How often:** three times this year, and once it reached print._',
  '⚠ _**And who has been filling it: I have.** **Twice I treated it as the typesetter\'s cost and once, in June, as ours — and the difference was that in June the correction had improved the sentence, which is not a principle and I would not defend it in writing until now.**_',
  '_**And three untested silences, one line each: a text approved by somebody other than the author; a correction made at the press; and a reprint ordered by the ministry. None has ever arisen.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Rim\'s forty-page standard is silent on a refused delivery that is brought back the same week: it covers refusal and it covers acceptance and it says nothing about the load that comes back on the Thursday. It has happened four times last year, which is what makes it worth saying — she has a dozen other silences and none of them has ever arisen. And the four were decided by her, on the day, at the gate, and she is fairly sure she did not decide them the same way. Which is the finding of the cycle: a silence that has been tested was filled by somebody, and that person is now the rule, and nobody has written their name down, including the person. Omar asked how you report it, and three sentences, of which the third is the one people leave out: what the document is silent on, how many times it has arisen, and who has been deciding it in the meantime and on what basis. Rim said the third is the uncomfortable one because the answer is her, and it is always somebody in the room, which is why the cycle lands — a silence reported without the third sentence sounds like a complaint about the drafters, and with it, it is a report about a practice, and a practice can be written down this month. Dima asked about the silences that have never arisen, and one line each in a list at the end, with no argument: a note reporting twelve untested silences will not be read, and one reporting a single tested silence and listing twelve others will be acted on. Adnan asked about tone, and without triumph, which is a real difficulty, because finding a hole in a forty-page document feels like winning — and a note that reads as winning is answered by somebody defending the document instead of filling the hole. Jad asked what happens if the drafter is the person you are writing to, and then the third sentence protects them, which they will not expect: nothing in the standard provides for this, and I have been deciding it at the gate for a year. The second half says the gap has been managed and not neglected, and it is also true.']));
out.push(A('⚠ **Mark the report on the three sentences and on the admission.** **A version that reports the silence and the figure and omits _and she had been deciding all four herself_ has removed the finding** — **and the sentence to look for is that she is fairly sure she did not decide them the same way.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _The standard **is silent about** it._ → _is silent on_.   ⚠ _**Nothing provide for** this case._ → _nothing provides for_.   ⚠ _It has **arised** four times._ → _arisen_.   ⚠ _I have been deciding it **since a year**._ → _for a year_.   ⚠ _**On base of** the time of day._ → _on the basis of_.'));
out.push(NOTE('⚠ **The list of untested silences is worth more attention than it gets, because its purpose is not the silences.** **A note reporting twelve untested gaps will not be read; one reporting a single tested gap and listing twelve others will be acted on** — **and the list is what gets looked at when the next edition is drafted.** ⚠ **So the list has a job and the job is a year away.** **One line each, no argument, and the words _never arisen_ against every one of them.** **Teach the form exactly, because a student who writes two sentences about an untested silence has turned a usable appendix into an argument** — **and the drafter will then answer the argument and leave the tested gap where it is.**'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because it has arisen four times in the year to August, and she has a dozen other silences of which none has ever arisen.** **An untested silence is a note for the file; a tested one has been filled by somebody.**'));
out.push(A('**2** ⚠ **In January she treated the return as a fresh consignment and checked the whole top layer; in March she treated it as a continuation and checked only the four cartons that had failed** — **and the reason she gives for the difference is the time of day.** **Her own note records that the first draft said the gap had been _dealt with pragmatically_, which is a way of not saying that.**'));
out.push(A('**3** ⚠ **Because the answer matters and is not obvious: if a re-presented load is fresh the whole sampling rule applies again and the supplier will object to the cost; if it is a continuation only the failed cartons are checked and a supplier could in principle substitute the rest.** **Both answers have a cost, and showing that is what gets a reporter\'s report used.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TYPESETTING AGREEMENT · ONE GAP THAT HAS BEEN TESTED** _(note · 24 October · to Mr Hamwi)_',
  '**The gap, in one sentence.** ⚠ **Nothing provides for a correction introduced by the typesetter after the final text has been approved.** **Clause 4 covers corrections marked by us and clause 6 covers the approval itself.**',
  '**How often it has arisen.** ⚠ **Three times this year, and once it reached print.** **I have the proofs and the dates.**',
  '**Who has been deciding it.** ⚠ **I have.** **Twice as the typesetter\'s cost and once, in June, as ours** — **and the difference was that in June the correction had improved the sentence.**',
  '**What I am not saying.** ⚠ **I am not saying the agreement is defective.** **It is nine pages and this is three occasions in about forty issues.**',
  '**What would settle it.** ⚠ **Whether an improvement is a correction.** **If it is, we pay for work we did not ask for; if it is not, the typesetter must leave an error standing that he can see.**',
  '**And three other silences, one line each.** ⚠ **A text approved by somebody other than the author** _(never)_. **A correction made at the press** _(never)_. **A reprint ordered by the ministry** _(never)_.',
]));
out.push(S('Stage 7 · Write freely (sample, 212 words)'));
out.push(SAMPLE([
  '**TYPESETTING AGREEMENT · ONE GAP THAT HAS BEEN TESTED** _(note · 24 October · to Mr Hamwi)_',
  '**The gap, in one sentence.** ⚠ **Nothing in the agreement provides for a correction introduced by the typesetter after the final text has been approved.** **Clause 4 covers corrections we have marked and clause 6 covers the approval itself, and a change made after approval and by him is in neither.**',
  '**How often it has arisen.** ⚠ **Three times this year, and on one occasion it reached print.** **I have the proofs and the dates, and all three are in the second half of the year.**',
  '**Who has been deciding it, which is the part I would want to read if I were you.** ⚠ **I have.** **Twice I treated the change as the typesetter\'s cost and once, in June, as ours** — **and the difference was that in June the correction had improved the sentence.** **That is not a principle and I would not have put it in writing before this month.**',
  '**What I am not saying.** ⚠ **I am not saying the agreement is defective.** **It is nine pages and this is three occasions in about forty issues** — **and the gap has been managed rather than neglected, which is also the problem, because nobody knew it was being managed.**',
  '**What would settle it, and I am not proposing an answer.** ⚠ **Whether an improvement counts as a correction.** **If it does, we are paying for work we did not commission; if it does not, a typesetter who can see an error must set it anyway** — **and neither of those is obviously right.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: the gap located between two named clauses.** Clause 4 and clause 6. **The line I copied is _a change made after approval and by him is in neither_** — eleven words, and they do what a paragraph of description would not._',
  '_**Criterion: who has been deciding it and on what basis.** You give both bases and the reason for the difference. **_That is not a principle_ is the sentence that makes the paragraph usable rather than defensive.**_',
  '_**Keep:** _and all three are in the second half of the year._ **It works because it tells the reader the thing is getting more frequent, which no total can show.**_',
  '_**Ranking of the slip I was given:** the who-decided criterion first; the between-two-clauses criterion second; the untested-list criterion last, because it was three lines and needed no thought._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two things to listen for, and both are audible: the pause before the figure, and the name.** **A pause is where triumph gets in, and the room hears the pause rather than the figure.** **Then keep the tally of who has been filling the gap** — **in this room it has been the writer about three times in four, which is the figure to give the class at the end.** **It is also the reason the cycle should not be taught as a criticism of drafters: the person who has been quietly holding the document together is almost always the person reading it.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The tested silence:** the standard is silent on a probe that fails during the check rather than before it._',
  '_**Between clauses 9.2** _(all four probes within tolerance)_ **and 9.5** _(what to do with a failed load)_._',
  '_**How often: twice, both in July, both on the same pallet of frozen stock.**_',
  '⚠ _**Who has been deciding it: me, and on both occasions I took the three remaining readings and accepted the load** — **which clause 9.2 does not permit, and which I would do again, and which is now the rule at this gate because nobody has written anything down.**_',
  '_**Three untested: a probe that disagrees with itself; a load with no probes; a note with no temperature on it. None has ever arisen.**_',
]));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  Reading the figures against each other'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **This is the stage to do with the documents in the room and a watch.** **Give six minutes and ask for one column of figures of one kind** — **periods, or quantities, or percentages.** **Then the sentence that explains why it works:** **nobody who writes a long document ever sees its figures in one list, and nobody who writes one is ever asked to.**'));
out.push(A('**b** An irreconcilable pair: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **2 is the better of the two answers because it contains the dependency** — _because the revision follows the instruction_ — **and 4 gives the conflict without saying why the two cannot coexist.** **Both are acceptable; the dependency is what makes a report actionable.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **putting every figure of the same kind in one list, which nobody who wrote it has ever done**; and **about a third of the time two of them will not go together.**'));
out.push(A('**b** **1** ⚠ **Fourteen days for the engineer to issue a variation instruction and seven for the contractor to submit the revised programme** — **and the programme follows the instruction, so the seven days begin inside the fourteen.**   **2** ⚠ **The order is in the clauses and the lengths are in the schedule** — **which is why a schedule of dates looks reasonable to everybody who has read it and cannot be worked by anybody who has to use it.**'));
out.push(NOTE('⚠ **The most useful sentence in this cycle is about where the two halves of the problem live, and it generalises beyond contracts.** **The order of operations is in the clauses and the lengths are in the schedule** — **so the table that looks like a check on the figures is exactly the place where the conflict is invisible.** ⚠ **The second teaching point is the one students resist: write the present practice down.** **The practice exists whether or not it is recorded, and a clause that is never enforced is a clause somebody can enforce once, against you, at the worst available moment** — **which is a dispute about something else entirely.** **Mr Barghouti names four jobs and the days late on each, and that is what gets the clause amended rather than defended.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **Two periods:** _fourteen days for a variation instruction_ _(14.6)_ **against** _seven for the revised programme_ _(22.1)_.   **2** ⚠ **Two quantities:** _clause 9.2 requires four probes; the sampling table at appendix 2 provides for two._   **3** ⚠ **The dependency, said last:** _the revised programme follows the instruction, so the seven days begin inside the fourteen._   **4** ⚠ **What happens now:** _the programme is late on every job and nobody has objected: nine, eleven, four and nineteen days on the last four._   **5** ⚠ **Where the practice has replaced a figure:** _the fourteen days are the real period and the seven are decoration_ — **which is a sentence about the document and not about anybody\'s diligence.**'));
out.push(A('⚠ **Mark 4 hardest, on the instances.** **_In practice it is always late_ is an allegation; _nine, eleven, four and nineteen days on these four jobs_ is a finding** — **and the difference decides whether the note is answered by a drafter or by a defence.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Fourteen days for an instruction, seven for the revised programme.**',
  '_B:_ **They cannot both be met, because the programme follows the instruction and the seven days begin inside the fourteen. In practice the programme is late on every job and nobody has objected.**',
  '_A:_ **Thirty days to pay, sixty days of retention.** ⚠ _(marked row)_',
  '_B:_ **These reconcile. Payment and retention run separately and do not interact — the retention is held out of a sum that is paid within thirty days, and nothing in either depends on the other.**',
  '_A:_ **Forty-eight hours for a proof, a reader who leaves at two.**',
  '_B:_ **They cannot both be met on a proof that arrives after midday on a Wednesday, because the forty-eight hours include a period in which nobody is in the building.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows reconcile perfectly well** — **payment and retention run separately, two identical limits agree, warranty and maintenance are different obligations with the same length, and the Salkhad drive is precisely why that site has its own period.** **A pair that finds a conflict in all ten is doing what a reader does when they have been told to look for conflicts**, **and the listener task should include the count of rows cleared.** **In this room between two and four of the ten are usually cleared, and the pairs who clear them are reading and not performing.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Six minutes, one column.** Fourteen periods in the typesetting agreement. Nine are in the schedule at the back and five are in the clauses only._',
  '_**The pair that will not go:** forty-eight hours to return a corrected proof _(clause 5.1)_ and seventy-two hours for the typesetter to reset _(clause 5.4)_, against a weekly issue that closes on Thursday at noon._',
  '⚠ _**The dependency: the reset follows the return.** **Forty-eight and seventy-two is one hundred and twenty hours, which is five days, and the cycle is seven days long with a Friday and a Saturday in it** — **so the two periods fit the week only if the proof goes out on a Monday morning, and it goes out on Tuesday afternoon.**_',
  '_**What happens now: the typesetter resets in about thirty hours and has never mentioned it, on forty-two issues a year, for three years.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['The schedule of dates at page fifty-five gave Adnan eleven periods in one table, which is the only place in the document where they can be seen together — and two of them cannot both be met. Fourteen days to issue a variation instruction, and seven days to submit the revised programme; and the revised programme follows the instruction, so the seven days begin inside the fourteen. Which is the commonest kind of irreconcilable pair, and it is not about arithmetic: it is about the order of operations, because two periods that are fine on their own cannot both be met when one depends on the other, and a schedule of dates shows the lengths and not the order. Dima said you have to know the order from somewhere else, and always, and it is never in the table: the order is in the clauses and the lengths are in the schedule, which is why the schedule looks reasonable to everybody who has read it and cannot be worked by anybody who has to use it. Rim asked how you make the list, and by kind and not by page — all the periods together, all the quantities, all the percentages, all the dates — which takes about twenty minutes in a sixty-page document and is the fastest check there is. Omar asked what you do with a pair that will not go, and you say both figures, say why they cannot both be met, and say what actually happens now; and the third part is the one that gets it fixed. Jad asked whether that is not dangerous to put in writing, and it is the opposite: the practice exists whether or not it is recorded, and a clause that is never enforced is a clause somebody can enforce once, against you, at the worst moment, which is a dispute about something else entirely. Lubna asked about figures that are not periods, and the same, and quantities are where the mistakes are largest: clause nine requires four probes and the sampling table provides for two, so on a four-probe load the table cannot be applied at all, and somebody has been applying something. And Adnan asked about reading the two figures out loud: without emphasis on either, and with the dependency said last, because people stress the smaller figure as though it were the culprit, and neither figure is wrong — the pair is.']));
out.push(A('⚠ **Mark the report on _neither figure is wrong; the pair is_.** **Students report the conflict and then blame the seven days, because the smaller figure looks like the culprit** — **and a note that blames a figure invites a defence of that figure instead of an amendment to the pair.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _The seven days **begins** inside the fourteen._ → _begin_.   ⚠ _Both **can not** be met._ → _cannot both be met_.   ⚠ _**In the practice** the programme is late._ → _in practice_.   ⚠ _**Fourteen days** against **seven days**: one is wrong._ → _neither figure is wrong; the pair is_.   ⚠ _The table **provide** for two probes._ → _provides_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Because the revised programme follows the instruction, so the seven days begin inside the fourteen** — **and neither figure is wrong; the pair is.** **The lengths are in the schedule and the order is in the clauses, which is why the schedule looks reasonable to anybody who has read it.**'));
out.push(A('**2** ⚠ **Clause 9.2 requires all four temperature probes to read within tolerance and the sampling table at appendix 2 provides for two** — **so on a four-probe load the table cannot be applied at all.** **And what he says he does not know is what somebody at the gate has been applying for two years.**'));
out.push(A('**3** ⚠ **So that nobody else spends the twenty minutes** — **thirty days to pay and sixty of retention run separately, and twelve months of warranty against twelve of maintenance is a coincidence of length and not a conflict.** **It also proves he looked at all eleven periods and not only at the two he wanted.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TYPESETTING AGREEMENT · THE FOURTEEN PERIODS IN ONE LIST** _(note · 28 October · to Mr Hamwi)_',
  '**What I did, and it took eighteen minutes.** ⚠ **Every period in one column, by kind and not by page.** **Fourteen of them.** **Nine are in the schedule at the back and five are in the clauses only.**',
  '**The pair that will not go.** ⚠ **Forty-eight hours to return a corrected proof** _(5.1)_ **and seventy-two hours to reset** _(5.4)_. **The reset follows the return, so the two run end to end: a hundred and twenty hours, which is five days in a seven-day cycle that includes a Friday.**',
  '**What actually happens now.** ⚠ **The typesetter resets in about thirty hours and has never mentioned it** — **forty-two issues a year, for three years.**',
  '**Why I am putting the practice in writing.** ⚠ **A period that is never enforced can be enforced once, against us, in the middle of a disagreement about something else.**',
  '**And periods that look wrong and are not.** ⚠ **Thirty days to invoice and thirty to pay run in sequence and are stated as such at 8.2.**',
]));
out.push(S('Stage 7 · Write freely (sample, 211 words)'));
out.push(SAMPLE([
  '**TYPESETTING AGREEMENT · THE FOURTEEN PERIODS IN ONE LIST** _(note · 28 October · to Mr Hamwi)_',
  '**What I did, and it took eighteen minutes.** ⚠ **I put every period in the agreement into one column, by kind and not by page.** **There are fourteen.** **The schedule at the back has nine of them and the other five are in the clauses only** — **and the two that will not go together are both in that second group.**',
  '**The pair that will not go.** ⚠ **Forty-eight hours for us to return a corrected proof** _(clause 5.1)_ **and seventy-two hours for the typesetter to reset** _(clause 5.4)_. **The reset follows the return, so the two run end to end: a hundred and twenty hours, which is five days** — **in a seven-day cycle that contains a Friday and a Saturday and closes on Thursday at noon.** **Neither figure is wrong; the pair is.**',
  '**What actually happens now, which is the part that will get it amended.** ⚠ **The typesetter resets in about thirty hours and has never once mentioned the seventy-two** — **forty-two issues a year, for three years, which is about a hundred and twenty-six occasions.**',
  '**Why I am putting the practice in writing rather than leaving it alone.** ⚠ **A period that is never enforced can be enforced once, against us, in the middle of a disagreement about something else entirely.**',
  '**And two periods that look wrong and are not.** ⚠ **Thirty days to invoice and thirty days to pay run in sequence and clause 8.2 says so expressly.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: every figure of one kind listed, with how many and where.** Fourteen, nine in the schedule and five in the clauses. **The line I copied is _and the two that will not go together are both in that second group_** — which is the finding, not the list._',
  '_**Criterion: the dependency said last.** You have it, and _neither figure is wrong; the pair is_ is in the right place, at the end._',
  '_**Keep:** _about a hundred and twenty-six occasions._ **It works because it converts three years into a number, and a number is what makes a practice look like a practice.**_',
  '_**Ranking of the slip I was given:** the where-the-figures-were criterion first, because it found the real pattern; the present-practice criterion second; the reconciling-pairs criterion last, since one line covered it._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Two numbers from each student: how many figures of one kind, and how many of them sit outside the table that is supposed to hold them.** **The second number is almost never nought, and the figures outside the table are where the conflicts are** — **because nobody has ever seen them beside the others.** **Then the time taken.** **In this room the lists have run between twelve and twenty-five minutes, and more than half of them found a pair** — **which is the figure that persuades a class to do it again without being asked.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Twenty minutes, one kind: every quantity in the inward goods standard. Nineteen of them. The schedule of limits at page 36 has eleven and eight are in the clauses only.**_',
  '⚠ _**The pair that will not go:** the schedule gives a crush limit of 10 mm and clause 7.3, amended in March, gives 12 mm. **Both are current, both are printed, and neither points to the other.**_',
  '_**What happens now: I have been refusing at 10 mm for seven months and the amendment is in my favour** — **so two of the four loads I refused this year would not have been refused under the clause that governs.**_',
  '_**And two that look wrong and are not: the four probes and the four quarters of the pallet are different fours, and the eight-millimetre character height and the 8 mm crush are a coincidence.**_',
]));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  The note you leave for the next reader'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Both questions in one go, and the second answers itself:** _who knows this document best_, **and** _where is that written down?_ **It is in their head, in every case.** **Then the sentence that makes the cycle urgent:** **when that person is on leave in August the document is sixty pages again for everybody else** — **and August is when the work that cannot wait arrives.**'));
out.push(A('**b** Belongs in the note: **2**, **4** and **5**. Not: **1** and **3**. ⚠ **1 is the one to argue about** — **a summary** — **because it is what everybody writes and it is the error the cycle exists to correct.** **A summary is a fifth document: the reader goes through yours and then goes through the original anyway, because they have no way of knowing whether to trust you.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **a summary, and a reader given a summary instead of a map will read the summary and then the whole document anyway**; and **the note is a set of instructions for a search.**'));
out.push(A('**b** **1** ⚠ **Inside the front cover of the document, physically** — **not in a file, not on a shared drive and not attached to a message from April.** **And if there are eleven copies, eleven notes.**   **2** ⚠ **At the top, with your name and the edition of the document it refers to** — **because a note with no date has to be verified, which costs the next reader the forty minutes you were saving.**'));
out.push(NOTE('⚠ **The distinction between a summary and a set of instructions is the whole cycle and it needs the reason, not the rule.** **Instructions can be trusted a line at a time; a summary has to be trusted whole** — **which is why Mr Barghouti\'s four-page summary of June was read once and his two-page note of September is used by eleven people.** ⚠ **Then the part that is practical and feels trivial and is not: the note lives inside the front cover, physically, and there are as many notes as there are copies.** **Eleven copies and one note means one reader in eleven will find it.** **An afternoon of photocopying is the single cheapest thing in this unit, and it is the step a class will skip unless the teacher asks for the two numbers in Stage 7R.**'));
out.push(S('Language box · Practise'));
out.push(A('**1** ⚠ **Which pages do the work:** _eleven of the sixty; the amendment list at 59, the definitions at 3 to 5, the operative clauses at 11 to 14 and 41, and the schedule at 55._   **2** ⚠ **A _do not rely on_:** _do not rely on page 2; it says time runs from the date of the order and clause 14.3 says from the possession certificate, and 14.3 governs._   **3** ⚠ **A figure pair:** _fourteen days for a variation instruction against seven for the revised programme, and the seven begin inside the fourteen._   **4** ⚠ **A tested silence with a person:** _nothing provides for a refused consignment brought back in the same week; it has arisen four times and Ms Shaaban at the gate has been deciding it._   **5** ⚠ **The date line:** _A. Barghouti · 20 September · refers to the 1 March edition, with amendments to 11 July._'));
out.push(A('⚠ **Mark 5 hardest, which surprises students.** **The date line is the only part of the note that stops it being followed after it has stopped being true** — **and a note naming the edition it refers to can be checked against the copy in a reader\'s hands in four seconds.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '_A:_ **Sixty pages of conditions of contract, eleven copies.**',
  '_B:_ **Working pages: eleven of the sixty. Do not rely on page 2, because 14.3 governs and was amended later. Figures: fourteen days against seven, and the seven begin inside the fourteen. Silence: a re-presented load, filled by Ms Shaaban at the gate.**',
  '_A:_ **My own notebook of gate decisions.** ⚠ _(marked row)_',
  '_B:_ **A note is not worth writing yet, because I am the only reader. It becomes worth writing on the day a second inspector has to work from it, or the day before I go on leave — and the second of those is a date I already know.**',
  '_A:_ **A two-hundred-page machine manual, two copies.**',
  '_B:_ **Working pages: the speed tables and table 11. Do not rely on the index, which is arranged by the maker\'s part names. Two notes, one in each copy.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **The four marked rows are read by one person only** — **a private notebook, a single-operator manual, one person\'s correspondence, an unfinished draft** — **and the honest answer is that a note is not worth writing yet.** **But the listener task must capture the second half: when it becomes worth writing.** **The day a second person has to use it, or the day before you go on leave** — **and the second of those is a date the student already knows, which is what makes the answer actionable rather than theoretical.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**Six lines, in the order given.** 1 Working pages: the amendment list on the inside back cover, 2.1 to 2.4, clauses 7 and 9, and the sampling appendix at 31 to 35._',
  '_2 Definitions that matter: all four, and 2.3 — _the top layer_ — is the one that catches people._',
  '_3 Do not rely on page 1: it says all consignments are checked on arrival, and 9.1, amended 4 March, permits the following morning where the gate is closed._',
  '_4 Figures: the schedule gives 10 mm and clause 7.3 gives 12 mm, both current._',
  '_5 Tested silence: a re-presented load, four times in the year, decided by me at the gate on two different bases._',
  '⚠ _6 Ignore pages 13 to 22 and 37 to 40 until somebody raises something._ _**And it goes inside the front cover of all four copies; there are four, at four gates, and I shall photocopy on Thursday.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Five cycles of reading, and the question is what survives them. Adnan had four notes and about nine hours of work, and all of it is in his own file, which nobody opens, and in his head, which is on leave in August. So the last cycle is the note for the next reader, and what it is not is a summary: he tried that in June, it ran to four pages, and nobody used it — because a summary is a fifth document, and a reader who is given one reads it and then reads the contract anyway, since they do not know whether to trust it. Which is exactly right, and the note is a set of instructions for a search instead: if you are looking for X go to page Y, do not rely on page 2, and the figures that will not reconcile are these. Instructions can be trusted a line at a time, and a summary has to be trusted whole. Dima asked where it lives, and inside the front cover of the document, physically — not in a file, not on a shared drive and not attached to a message from April, because the next reader will have the document in their hands and nothing else. Rim asked what happens if there are eleven copies, and then eleven notes, and that is not a joke: it takes an afternoon of photocopying and it is the cheapest thing in the unit. Omar asked about the date, and at the top, with your name and the edition it refers to, because a note with no date has to be verified, which costs the next reader the forty minutes you were saving. And Jad asked what to leave out: your opinion of the drafting, which is the most satisfying thing to write and the only part that will date badly and offend somebody, and which tells the next reader nothing about where to look. And Lubna asked about reading a list of references out loud: at dictation speed, and the page before the clause this time, because somebody is writing it down and they turn to the page first. Twenty-three point one had it the other way round, and the difference is simply whether the person listening is holding a pen.']));
out.push(A('⚠ **Mark the report on the reason a summary fails.** **A version that says _do not write a summary_ has given a prohibition** — **and the content is that a summary is a fifth document, so the reader goes through it and then through the original anyway, having no way to know whether to trust it.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _If you **look for** a period, go to page 55._ → _if you are looking for_.   ⚠ _**Don\'t rely** on page 2._ → _do not rely on_ **in a written note.**   ⚠ _Eleven **copy**, eleven **note**._ → _copies_, _notes_.   ⚠ _It **refer to** the 1 March edition._ → _refers to_.   ⚠ _**What to ignore until somebody raise it**._ → _raises it_.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **Do not rely on it, and three things support that:** **14.3 is the operative clause; it was amended on 11 July while page 2 was not reprinted; and clause 2.4 puts the conditions above the summary expressly.** **Three reasons, so that the next reader does not have to check his reading before using it.**'));
out.push(A('**2** ⚠ **_Notice_ at 3.11** — **notice means in writing and delivered by hand, so nothing sent by post is notice at all.** **It is the definition that catches people because the word is ordinary and nobody checks an ordinary word, which is 21.4.**'));
out.push(A('**3** ⚠ **What he thinks of the drafting of clause 14.** **He records that he wanted to write it because the first draft of the note had a paragraph on it** — **and the paragraph told the next reader nothing about where to look.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**READ THIS FIRST** _(R. Shaaban · 2 November · refers to the second edition of 11 January, with amendments to 4 March)_',
  '**What this is.** ⚠ **Not a summary.** **Instructions for finding things in forty pages.** **Eleven pages of the forty do the work.**',
  '**1  If you are looking for a limit, go to page 36 and then to clause 7.3.** ⚠ **The schedule at 36 gives 10 mm and 7.3, amended in March, gives 12 mm.** **Both are current and neither points to the other.**',
  '**2  If you are looking for when a load is checked, go to clause 9.1.** ⚠ **Do not rely on page 1**, **which says all consignments are checked on arrival; 9.1 permits the following morning where the gate was closed, and 9.1 is later and is the operative clause.**',
  '**3  The four definitions are at 2.1 to 2.4.** ⚠ **_The top layer_ at 2.3 is the one that catches people.**',
  '**4  One tested silence.** ⚠ **A refused load brought back in the same week: nothing provides for it, it has arisen four times, and I have been deciding it at the gate.** **Ask me before you advise anybody.**',
  '**5  Ignore pages 13 to 22 and 37 to 40 until somebody raises something.**',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**READ THIS FIRST** _(R. Shaaban · 2 November · refers to the second edition of 11 January, with amendments to 4 March)_',
  '**What this is.** ⚠ **Not a summary.** **Instructions for finding things in forty pages, written after two years of reading the wrong two clauses carefully.** **Eleven pages of the forty do the work.**',
  '**1  If you are looking for a limit, go to page 36 and then to clause 7.3.** ⚠ **The schedule at 36 gives a crush limit of 10 mm and clause 7.3, amended on 4 March, gives 12 mm.** **Both are current, both are printed, and neither points to the other** — **7.3 governs, and I refused two loads this year that it would not have refused.**',
  '**2  If you are looking for when a load is checked, go to clause 9.1.** ⚠ **Do not rely on page 1.** **Page 1 says all consignments are checked on arrival; 9.1 permits the first working morning following where the gate was closed** — **and 9.1 is both the operative clause and the later of the two.**',
  '**3  The four definitions are at 2.1 to 2.4 and all four matter.** ⚠ **_The top layer_ at 2.3 is the one that catches people: every carton visible without moving another carton, and not the four on the near corner.**',
  '**4  One tested silence, and the answer here is a person and not a page.** ⚠ **Nothing provides for a refused load brought back in the same week.** **It has arisen four times in the year to August and I have been deciding it at the gate, on two different bases.** **Ask me before you advise anybody.**',
  '**5  Ignore pages 13 to 22 and 37 to 40 until somebody raises something.** ⚠ **Carriage, storage, and a claims procedure used twice in eleven years.**',
]));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '_**Criterion: a heading with the date and the edition.** All three, and naming the amendment date as well as the edition is more than the unit asks. **The line I copied is _with amendments to 4 March_** — four words, and they are what let me check your note against my copy._',
  '_**Criterion: a reason for every _do not rely on_.** Line 2 gives two reasons. **_Both the operative clause and the later of the two_ is the form to copy.**_',
  '_**Keep:** _and I refused two loads this year that it would not have refused._ **It works because it prices the error on your own side, so nobody reads line 1 as a complaint about the schedule.**_',
  '_**Ranking of the slip I was given:** the heading criterion first, because mine had no edition on it; the reasons criterion second; the no-opinion criterion last, because neither of us had written one._',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Ask for the two numbers and write them side by side: copies of the document, and notes written.** **If they are not the same, ask for the date on which they will be** — **and hold the class to it, because the photocopying is the step that gets skipped and it is the step that decides whether the cycle produced anything.** **Then ask what each student left out.** **Most of the room will have left out the same thing, which is what they think of the drafting** — **and the room finding that out together is better than being told.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The note, six parts, two pages, inside the front cover.**_',
  '_**Copies of the document: four, at four gates. Notes written: four. Photocopied on Thursday morning, eleven minutes.**_',
  '⚠ _**And the line I nearly left out and have now put in:** **what to do when the note is wrong.** _If your copy carries an amendment later than 4 March, trust the document and not this note, and tell me which clause changed._ **Without it the note will be followed for a year after it has stopped being true, which is exactly what happened to page 1.**_',
  '_**And what I left out: three sentences about the sampling appendix being in the wrong place in the document. True, satisfying, and of no use to anybody looking for anything.**_',
]));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: The reader of a long document and the person who wrote it'));
out.push(S('Stage 1 · Get ready – Unit 23 quiz'));
out.push(A('**1** _His **annotation** in the margin is dated July._   **2** _The **navigation** of a long document takes ten minutes._   **3** _A **compilation** of eleven standards is not an index._   **4** _The **collation** took the whole afternoon._   **5** _The **retrieval** of one clause took forty minutes._   **6** _An **abridgement** of sixty pages is not a note._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **A long document cannot show its own dates.** **It is written in layers by different hands at different dates, and every layer is printed in the same type as the others** — **so a clause amended in July looks exactly like a recital written in 2009.** **The one thing the drafter can do without the committee is put a date in the margin against every clause number: eleven words of policy and an afternoon.**'));
out.push(S('Language box · Practise'));
out.push(A('⚠ **No Practise line in x.7.** **The Language box here records the three moves and the finding, and the work of the cycle is in Stages 3 and 4 rather than in a drill.** **Read the box aloud once before Stage 3 and leave it open on the desk while the pairs work.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '_**What the note is for.** Stopping eleven people in one office from advising on the wrong clause. It did that: nobody has used page 2 since September._',
  '_**The thing the document cannot do.** Show its own dates. Every layer is printed in the same type, so a clause amended in July is indistinguishable from a recital written in 2009._',
  '_**Can either party supply it?** Yes, and only the drafter. Not a reprint of page 2, which needs the committee — a pencil date beside each clause number, which needs nobody._',
  '⚠ _**And what the reader can supply:** one sentence. We relied on clause 14.3 on three contracts this year. She has never been told that anybody reads page 41 at all, and she refused the erratum slip because nobody reads that far._',
  '_**And what we are not doing.** Not amending the document in pencil in our own copy, because we would become the amendment list and we are on leave in August. And not writing to the committee over her head: it takes until February and costs us the only person who can date the clauses this month._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('⚠ **Pair B is the control and it is the half of the stage that gets skipped.** **A four-page summary with no page references is a fifth document, and no margin date will mend it** — **so the answer for Pair B is 23.6 and not a drafter.** **Two faults, two remedies: a date beside every clause number, and a set of instructions for a search written today.** **A pair that applies the mediation to Pair B has learned to reach for the clever answer, which is the error this stage exists to catch.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The document:** the inward goods standard, second edition, with amendments to March._',
  '_**What it is for:** letting an inspector and a driver reach the same answer at a gate. It does that on everything except the two crush figures._',
  '_**The pages I cannot date:** all of them except the amendment list. The schedule at page 36 gives 10 mm and clause 7.3 gives 12 mm, and nothing on either page says which was printed when — the amendment list says 7.3 was changed in March, and it does not say whether page 36 was reprinted after it._',
  '⚠ _**And has anybody ever told the drafter which clause I rely on? No.** **I rely on the schedule at 36, because it is one page and I can hold it at the gate** — **and she has probably assumed for two years that I work from the clauses.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A note that does everything the unit teaches, and the one thing it asks for was refused. Asked whether the note is wrong, Adnan said no — he would write it again, and Mrs Tannous is right as well, and it took him three weeks to see why. Her account in her own words: page two is the committee\'s words, decided in March, and she is not permitted to alter it; and the committee does not meet again until February. So the mediation, in three moves: separate what the note is for from what its reader could do about it; find the thing the document cannot do; and say whether either party can supply it. The note is for stopping eleven people in one office from advising on the wrong clause, and it did that — nobody has used page two since September. The thing the document cannot do, Rim said, is show its own dates: a long document is written in layers by different hands at different dates, and every layer is printed in the same type as the others, so a clause amended in July looks exactly like a recital written in 2009. Which is the finding of the cycle and it is new — everything in the unit has taught the class to find the dates, and nothing in it noticed that the reason you have to hunt for them is that the document hides them by being typeset. Omar said the amendment list exists, and it does, at page fifty-nine of sixty, and nobody in his office had ever opened it: a list at the back is not a date against a clause, it is the same information in the place where nobody is when they need it. Jad said what can be supplied is a date in the margin of every clause, and only the drafter can do it — not a reprint of page two, which needs the committee, but a pencil date beside each clause number, which needs nobody. And Adnan said what he can supply is one sentence he had never thought to write: we relied on clause fourteen point three on three contracts this year.']));
out.push(A('⚠ **Mark the report on whether the drafter is reported as reasonable and on whether the amendment list is dealt with.** **Students report the finding and skip Omar\'s objection** — **that the amendment list exists** — **and the answer to it is the content: a list at the back is not a date against a clause, it is the same information in the place where nobody is when they need it.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('⚠ _A long document cannot show **it own** dates._ → _its own_.   ⚠ _Every layer is printed **by** the same type._ → _in the same type_.   ⚠ _I am not **permitted to altering** page 2._ → _permitted to alter_.   ⚠ _The committee **does not meet** again **till** February._ → _until February_ **in writing.**   ⚠ _We **relied in** clause 14.3._ → _relied on_.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 4)'));
out.push(A('**1** _had never been opened_   **2** _took him four months_   **3** _is no way of_   **4** _will not meet again until_   **5** _No matter how_   **6** _on the grounds that_'));
out.push(NOTE('⚠ **Items 1 and 4 are the two that separate a class and they fail in opposite directions.** **Item 1 needs the negative moved into the passive** — _had never been opened_ — **and students write _had not been opened ever_, which is four words and is not English.** **Item 4 needs _again_ kept** — _will not meet again until February_ — **and students drop it, which loses the sense of _again_ in the original and the mark with it.** ⚠ **Item 3 is worth a minute of its own because the key word changed the answer:** **with WAY the answer is _is no way of_, and a class that has learned the NO pattern from Unit 16 will write _is no point in_ without reading the key word.** **Teach the habit once: read the key word before you read the gap.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE NOTE, TWO ACCOUNTS** · _the inward goods standard, six weeks apart_',
  '**The note.** _"READ THIS FIRST. Eleven pages of the forty do the work… If you are looking for a limit, go to page 36 and then to clause 7.3: the schedule gives 10 mm and 7.3, amended in March, gives 12 mm, and neither points to the other… One line on page 36 would have saved me two refusals."_',
  '**The reader.** _"Two pages, inside the front cover of all four copies. No load has been refused on the wrong figure since."_',
  '**The drafter.** _"It is the clearest thing I have been sent. The schedule at 36 is reprinted by the ministry press on a two-year cycle and I cannot alter a page of it between printings; clause 7.3 I can amend in an afternoon. I wrote both and they do not agree."_',
  '⚠ **Both accounts are accurate and neither is about the note.**',
  '**What the note is for.** **Letting four inspectors reach the same answer.** ⚠ **It did that.**',
  '**The thing the document cannot do.** ⚠ **Show which of its two printings each page belongs to.**',
  '**Who can supply it?** ⚠ **The drafter, and only the drafter** — **a printing date in the footer of every page, which needs no press cycle at all.**',
  '**What the reader can supply.** ⚠ **One sentence:** _"we work from the schedule at page 36 and not from the clauses."_',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 1: the essay, sample 181 words)'));
out.push(SAMPLE([
  '**Should long official documents be written so that nobody has to read all of them?**',
  '**They should, and most of them already are; what is missing is any honest instruction about which parts to skip.**',
  '**The argument from the reader\'s time is the obvious one and it is stronger than it looks. In a document of sixty pages, between eight and fourteen do the work. The rest is recital, procedure that has never arisen, and pages copied from the previous edition. A reader who treats all sixty as equal has given the important eleven a sixth of the attention they need, which is worse than reading eleven and stopping.**',
  '**The risk of missing something is real, and the answer is not to read everything but to read the right four places first: the contents page, the amendment list, the definitions and the schedule of figures. Twenty minutes, and it finds more than four months of continuous reading does.**',
  '**My own third point is the one the course taught me. A long document cannot show its own dates. Every layer is printed in the same type, so a clause amended in July looks exactly like a recital from 2009 — and that, rather than length, is what makes long documents dangerous.**',
  '**So the length is not the problem. The absence of a map is.**',
]));
out.push(NOTE('⚠ **The essay above is a band-5 answer and the first sentence is where it earns the mark.** **The question is answered in it, with a concession** — _most of them already are_ — **and an essay that reaches its position in the third paragraph loses marks the content never recovers.** ⚠ **The third note is the other place to mark hardest, and here it is the unit\'s own finding rather than a general observation about bureaucracy.** **Teach the habit directly: in Part 1 the two given notes are the floor and the third is the whole difference between a safe answer and a good one.** **And note what the sample does with the second given note: it accepts the risk and answers it with a method, which is worth more than denying the risk.**'));
out.push(S('Stage ✓ · Unit 23 check'));
out.push(A('**A** **1** a _(annotation)_   **2** c _(Navigation)_   **3** b _(compilation)_   **4** b _(collation)_   **5** a _(Retrieval)_   **6** c _(abridgement)_   **7** b _(comprehension)_   **8** c _(legibility)_'));
out.push(A('⚠ **Item 2 is the item that separates a class.** **_Navigation of a sixty-page document_ takes the noun, and _navigating of_ is not English** — **although _navigating a sixty-page document_, with no _of_, would be.** **The rule is worth stating once: a gerund does not take _of_, and the gap here is followed by one.** ⚠ **Item 8 is the pair to put beside it.** **_The legibility of the pencil date_ is the thing that was objected to, and a room that has just answered six nouns still reaches for the adjective because _legible_ is the word they know.** **Read it aloud and the error is audible, which is the habit to build rather than the rule.**'));
out.push(A('**B  Listening** **1** A   **2** B   **3** C   **4** E   **5** D'));
out.push(A('⚠ **Speakers 1 and 5 are the pair to replay, because both describe a method failing and the options are easy to cross.** **Speaker 1 found something by making a list; speaker 5 found nothing by having no question** — **and the distractor that catches a class is F, _I read the document from the beginning every time_, which neither of them says.** ⚠ **Speaker 4 is the one to listen to twice for a different reason:** **she is the drafter, and the option that fits is E, _I could not make the change that was asked for, and the request was right_.** **Students reach for H, because a refusal and a reprint sound related** — **and she neither asked for a reprint nor was given one.**'));
out.push(A('**C  Writing** — **marked on the first sentence and on the third note.** ⚠ **Both given notes or the content mark goes**, **and the commonest loss is a third note that is a general observation about bureaucracy rather than anything from the unit.** **The second commonest is a conclusion that restates the three paragraphs** — **a conclusion that is a summary is not a conclusion, and the band descriptors say so.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 23 (sample)'));
out.push(SAMPLE([
  '_**Mediation written, and the pages I cannot date listed: all of them except the amendment list.**_',
  '_**Essay written, 181 words, both notes and a third from the unit.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the four places. **The thirteen words.** **I have written to Mrs Tannous to say that we work from the schedule at page 36 and not from the clauses** — **and she replied in two days to say that she had assumed the opposite for two years, and that she can put a printing date in the footer of every page without asking anybody.**_',
]));
out.push(sp());
out.push(box('After Unit 23', [
  '**Unit 24 is the last unit of the book and of the series, and it is not like the others.** ⚠ **24.1 to 24.5 take the whole of B2 and put it back together on one task.** **And 24.6 opens the sealed letters the class wrote in B1 24.6** — **which have been in an envelope since the end of the first book.**',
  '⚠ **If the sealed letters are not in the room on the first day of 24, the cycle cannot be taught.** **This is the last reminder in this key, and it has been in every key since Unit 16.** **Find them now: they are with whoever kept the B1 register.**',
  '**And the connection from 23 to 24 is worth naming.** ⚠ **23.6 wrote the note for the next reader of a document.** **24.6 reads the note the class wrote for themselves** — **and the question is the same one: was the writer right about what the reader would need?**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 23 · Answer Key');
