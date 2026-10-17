// Proactive English B2 · Syria Edition · Book 2 · Unit 23 — Student's Book
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

out.push(h1('Unit 23  The Long Read'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**23.1** The way in   ·   **23.2** Reading for the thing you need   ·   **23.3** The paragraph that contradicts the summary',
  '**23.4** The silence that matters   ·   **23.5** Reading the figures against each other   ·   **23.6** The note you leave for the next reader   ·   **23.7** Review & Mediate: the reader of a long document and the person who wrote it',
  '⚠ **Unit 18 summarised a report.** **This unit reads one** — **sixty pages of conditions of contract, a ministry standard, a tender bundle, a year of minutes** — **and the skill is not speed.** **It is knowing which eleven pages of the sixty you are going to read properly.**',
  '**And 22.6 comes back on the first day.** ⚠ **A long document is read the way page one of a proposal is read: once, in order, for about ten minutes** — **and then by jumping to the one figure the reader does not believe.** **Everything in this unit is about making that jump land somewhere useful.**',
], C.lteal, C.teal));

// ===================== 23.1 =====================
out.push(pb());
out.push(h2('23.1  The way in'));
out.push(p('**Function:** finding out in ten minutes what a long document is for   ·   **Grammar:** reporting a document\'s structure — _the operative part is ___ · the rest is ____   ·   **Pronunciation:** reading a clause number and a page number together'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the longest document either of you has had to work from. ⚠ **Say how many pages it is and how many of them you actually read.** **Then say how you chose those pages.** **In most cases the answer to the third question is that nobody chose: the reader started at page one and stopped when the work became urgent.**'));
out.push(board('I read the whole thing twice and I still could not tell you what it says.', 'Eleven of the sixty pages do the work and I can tell you which eleven.'));
out.push(p('**b**  Which is a way in? **1** _I read it from the beginning._  **2** _I read the summary._  **3** _I found the definitions, the operative clauses and the schedule of dates, which is eleven pages of the sixty._  **4** _I read it twice._  **5** _I went to the contents page and the amendment list before anything else._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the first ten minutes of a long document are for?   **A** reading the summary carefully   **B** **finding out which pages do the work, and in what order it was written** — and **a reader who starts at page one has handed that decision to whoever arranged the pages**   **C** making notes as you go'));
out.push(p('**b**  Listen again. **1** What did Mr Barghouti find on page 41, and how long had he been working from the document?   **2** What does Ms Huda say about a contents page?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.1  Sixty pages and eleven of them', [
  ['Ms Huda', 'Mr Barghouti. The conditions of contract, and page forty-one.'],
  ['Adnan', '**Sixty pages. I had worked from it for four months.** ⚠ **And in August I found a clause on page forty-one that says the opposite of the summary on page two.**'],
  ['Ms Huda', '**Which had you been using?**'],
  ['Adnan', '⚠ **Page two.** **Everybody uses page two, because it is called _summary of principal terms_ and because it is on page two.**'],
  ['Ms Huda', '**And how did you find page forty-one in the end?**'],
  ['Adnan', '⚠ **By accident.** **I was looking for something else and the word caught my eye** — **which is not a method, and it is how most of these things are found.**'],
  ['Ms Huda', '**So the question for the unit is what the first ten minutes are for.** ⚠ **Not reading.** **Finding out which pages do the work, and in what order the document was written.**'],
  ['Omar', 'How do you do that in ten minutes?'],
  ['Ms Huda', '**Four places, and none of them is page one.** ⚠ **The contents page.** **The amendment or revision list.** **The definitions.** **And the schedule of dates at the back.**'],
  ['Dima', 'Why the amendment list?'],
  ['Ms Huda', '⚠ **Because it tells you where the document has been changed, and a changed clause is a clause somebody argued about.** **The amendment list is the only part of a long document that tells you where the trouble is.**'],
  ['Adnan', '**Mine has one and I had never opened it.** ⚠ **Page forty-one is on it, amended in July.**'],
  ['Ms Huda', '**Which is the finding and it took four seconds once you looked.** ⚠ **A contents page is not a courtesy; it is a map of what the writer thinks the document is about** — **and where it disagrees with what the document is actually used for, you have learned something before reading a word.**'],
  ['Rim', 'And the definitions, in the first ten minutes?'],
  ['Ms Huda', '⚠ **Always, and before any clause.** **Unit 21.6 taught you why:** **a clause read with the wrong definition is worse than no clause at all**, **and in a document of sixty pages the definitions are usually on pages three to five and are the pages nobody reads.**'],
  ['Jad', 'And what do you not do in the ten minutes?'],
  ['Ms Huda', '**You do not read continuously, and you do not take notes.** ⚠ **Notes in the first ten minutes are notes about the beginning**, **which is the part of a long document least likely to matter.** **Ten minutes of looking, and then you choose your eleven pages.**'],
  ['Lubna', 'And saying clause and page together?'],
  ['Ms Huda', '🔊 **Clause first, then the page, with a small pause between them.** ⚠ _Clause 14.3 — at page forty-one._ **People run them into one number and the other person writes down forty-one point three**, **and then cannot find it, and the conversation is about the numbering.**'],
]));
out.push(sp());
out.push(box('Language box – the way in', [
  '**The first ten minutes are not for reading.** ⚠ **They are for finding out which pages do the work and in what order the document was written** — **and a reader who starts at page one has handed that decision to whoever arranged the pages.**',
  '**Four places, and none of them is page one.** ⚠ **The contents page · the amendment or revision list · the definitions · and the schedule of dates at the back.**',
  '⚠ **The amendment list is the only part of a long document that tells you where the trouble is.** **A changed clause is a clause somebody argued about** — **and Mr Barghouti\'s page 41, which contradicts his page 2, was on the list, amended in July, and he had never opened it.**',
  '**A contents page is not a courtesy; it is a map of what the writer thinks the document is about.** ⚠ **Where it disagrees with what the document is actually used for, you have learned something before reading a word.**',
  '**The definitions, always, and before any clause.** ⚠ **21.6 gave the reason: a clause read with the wrong definition is worse than no clause at all** — **and in sixty pages the definitions are usually on pages three to five, which are the pages nobody reads.**',
  '⚠ **And what you do not do: read continuously, or take notes.** **Notes in the first ten minutes are notes about the beginning, which is the part of a long document least likely to matter.** **Ten minutes of looking, and then choose your eleven pages.**',
  '**Pronunciation.** 🔊 **Track 23.2** **Clause first, then the page, with a small pause between them.** ⚠ _Clause 14.3 — at page forty-one._ **People run them into one number, the other person writes forty-one point three, and the conversation is then about the numbering.**',
  '**And one thing about the eleven pages, which is the figure to keep.** ⚠ **In a document of sixty, between eight and fourteen pages do the work.** **The rest is recital, procedure that never arises, and the parts copied from the last one** — **and a reader who treats all sixty as equal has given the important eleven a sixth of the attention they need.**',
  '**And one thing that is true of every long document and is never printed in it.** ⚠ **The clause numbers and the page numbers do not run together.** **Appendices, errata and inserted clauses all break the correspondence** — **so a reference with only one of the two sends the next reader to the contents page, which is where they started.**',
  '**Practise:** Find the way in. **1** the contents page  **2** the amendment list  **3** the definitions  **4** the schedule of dates  **5** one where the contents page disagrees with what the document is used for',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the document from the card. B says **which four places they would look in the first ten minutes, and which they would look at first.** ⚠ **Two rows on each card have no contents page and no amendment list at all**, and B must say what they would use instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the document)_ __________.'],
  ['B', '**First the __________, because __________. Then the __________, the __________ and the __________.**'],
]));
out.push(table(['Card A – the document', 'Card B – the document'], [
  ['_Sixty pages of conditions of contract._', '_A forty-page ministry standard._'],
  ['_⚠ A year of committee minutes in a ring binder._', '_⚠ A bundle of eleven specifications with no index._'],
  ['_A tender document of ninety pages._', '_A manufacturer\'s manual of two hundred pages._'],
  ['_⚠ Four months of escalation call logs._', '_⚠ A correspondence file on one dispute._'],
  ['_The archive catalogue, four volumes._', '_A thirty-page insurance policy._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four places and the order. ⚠ **The four rows marked ⚠ have no contents page and no amendment list** — **minutes, a bundle, call logs, a correspondence file** — **and the way in is the dates: read them in date order and find where the practice changed.** **A pile with no map has its map in its chronology.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the longest document you work from. ⚠ **Spend four minutes on its contents page and its amendment list in front of your partner** — **and then say which pages you now think do the work, and how that differs from the pages you have been reading.**'));
out.push(p('**b**  Swap and perform. Your partner reads a clause and page reference **as one number** and then with the pause. ⚠ They say which one they could have written down.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan had worked from sixty pages of conditions of contract for four months, and in August he found a clause on page forty-one that says the opposite of the summary on page two. He had been using page two, because everybody uses page two: it is called summary of principal terms and it is on page two. He found page forty-one by accident, looking for something else, when the word caught his eye — which is not a method, and it is how most of these things are found. So the question for the unit is what the first ten minutes are for, and the answer is not reading: it is finding out which pages do the work and in what order the document was written. Omar asked how you do that in ten minutes, and four places, none of which is page one: the contents page, the amendment or revision list, the definitions, and the schedule of dates at the back. Dima asked why the amendment list, and because it tells you where the document has been changed, and a changed clause is a clause somebody argued about — the amendment list is the only part of a long document that tells you where the trouble is. Adnan said his has one and he had never opened it, and page forty-one is on it, amended in July. Which is the finding, and it took four seconds once he looked: a contents page is not a courtesy but a map of what the writer thinks the document is about, and where it disagrees with what the document is actually used for you have learned something before reading a word. Rim asked about the definitions, and always, and before any clause, because a clause read with the wrong definition is worse than no clause at all. And Jad asked what you do not do: you do not read continuously and you do not take notes, because notes in the first ten minutes are notes about the beginning, which is the part of a long document least likely to matter. Ten minutes of looking, and then you choose your eleven pages. And Lubna asked about saying a clause and a page together: clause first, then the page, with a small pause between them, because people run them into one number, the other person writes down forty-one point three, and the conversation is then about the numbering and not about the clause._'));
out.push(p('**Listener task:** write your partner\'s four places and which pages they now think do the work.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan writes for the contracts office, and the note under it. Answer the questions.'));
out.push(model([
  '**CONDITIONS OF CONTRACT, 1 MARCH EDITION · THE WAY IN** _(internal note · 3 September · for anybody who has to work from it)_',
  '**What this note is.** ⚠ **Not a summary of the sixty pages.** **A list of the eleven that do the work, in the order to read them, written after four months of working from the wrong two.**',
  '**1  The amendment list, at page 59, which nobody opens.** ⚠ **Nine clauses have been amended since the March edition was first issued and the dates run from April to July.** **Read this before anything else, because a changed clause is a clause somebody argued about** — **and seven of our nine disputes this year are on it.**',
  '**2  The definitions, at pages 3 to 5.** **Four of them matter and the other nineteen do not.** ⚠ **_Delivery_ means arrival at the gate and not acceptance** _(3.2)_. **_Working day_ excludes the Saturday the registry opens** _(3.7)_. **_Notice_ means in writing and delivered by hand** _(3.11)_ — **so nothing sent by post is notice at all.** **_The works_ is the whole site and not the building** _(3.19)_.',
  '**3  The operative clauses, at pages 11 to 14 and page 41.** ⚠ **Pages 11 to 14 are what everybody uses.** **Page 41 is clause 14.3, amended in July, and it says that time for completion runs from the date of the possession certificate and not from the date of the order** — **which is the opposite of the summary at page 2.**',
  '**4  The schedule of dates, at page 55.** **Every period in the contract in one table.** ⚠ **It is the only page in the document where the periods can be seen against each other**, **and two of them cannot both be met: the fourteen days for a variation instruction and the seven days for a programme revision.**',
  '**5  What to do with the other forty-nine pages.** ⚠ **Nothing, until somebody raises something.** **They are recital, a procedure for arbitration that has not been used in nineteen years, and about eleven pages copied from the previous edition** — **and I have marked the copied ones, because an unchanged clause in a changed document is sometimes an oversight.**',
  '**6  One thing about the numbering, which I have put in because two people have now asked me.** ⚠ **The clause numbers and the page numbers do not run together anywhere in this document.** **Clause 9 is at page 26 and clause 31 at page 48, and four pages of appendix sit between 14 and 15** — **so a clause reference cannot be found by a reader holding a page.** **Always give both.**',
  '**NOTE for my own file, which did not go round the office.** ⚠ **The ten minutes I should have spent in March would have cost ten minutes.** **Not spending them cost four months of advice based on page 2 and one letter I have had to withdraw.** **What I mind is that the amendment list is page 59 of 60 and I had walked past it every time I looked at the schedule of dates on page 55.**',
]));
out.push(item('1', 'Why does the note say to read the amendment list first?'));
out.push(item('2', 'What does clause 14.3 say, and how does it differ from page 2?'));
out.push(item('3', 'What does the note say about the other forty-nine pages, and what has the writer marked?'));
out.push(writers([
  'A way-in note: **what the note is, and what it is not** → **the amendment list, with how many clauses and over what dates** → **the definitions that matter, with their numbers** → **the operative clauses, including any that are not where everybody looks** → **the schedule of dates** → **and what to do with the rest.**',
  '⚠ **Say what the note is not.** _Not a summary of the sixty pages._ **A reader who expects a summary and gets a map will use neither; a reader told it is a map will keep it.**',
  '**Give the clause number and the page, every time.** ⚠ _Page 41 is clause 14.3, amended in July._ **A reference with only one of the two sends the next reader back to the contents page, and the contents page is where they started.**',
  '**Name the definitions that matter and say how many do not.** ⚠ _Four of them matter and the other nineteen do not._ **It is the sentence that makes a reader read four definitions instead of skipping twenty-three.**',
  '⚠ And **say what to do with the rest, which is usually nothing.** _Recital, a procedure not used in nineteen years, and about eleven pages copied from the previous edition._ **And mark the copied ones** — **an unchanged clause in a changed document is sometimes an oversight.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the way-in note (80 words or more).'));
out.push(p('**______________ · THE WAY IN** _(internal note · ______________ · for ______________)_   **What this note is.** ⚠ **Not ______________.** **A list of the ______ pages that do the work, in the order to read them.**   **1  The amendment list, at page ______.** ⚠ **______ clauses have been amended and the dates run from ______________ to ______________.**   **2  The definitions, at pages ______ to ______.** ⚠ **______ of them matter and the other ______ do not.** **_______________ means ______________** _(______)_.   **3  The operative clauses, at pages ______ and ______.** ⚠ **Page ______ is clause ______, and it says ______________.**   **4  The schedule of dates, at page ______.** ⚠ **______________.**   **5  What to do with the other ______ pages.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What the note is not, in the first line',
  'A clause number and a page number for every reference',
  'The definitions that matter, counted against the ones that do not',
  'What to do with the pages that are left',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their line 1 only**, and the room says how many clauses were amended and over what period.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full way-in note (180 words or more), to the shape in the writer\'s box: what it is not, the amendment list, the definitions that matter, the operative clauses with their pages, the schedule of dates, and what to do with the rest.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: what the note is not, a clause number and a page for every reference, the definitions that matter counted, and instructions for the remaining pages.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say how many pages your document has and how many of them do the work.** ⚠ **Then say how many you had been reading.** **The three numbers are almost never the same, and the second is almost always smaller than the third** — **which means most of the room has been reading the wrong pages carefully.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **the amendment list is page fifty-nine of sixty and I had walked past it every time.**'));
out.push(hw('Spend **ten minutes** on the longest document you work from: **the contents page, the amendment list, the definitions and the schedule of dates.** ⚠ **Bring the number of pages, the number that do the work, and the number you had been reading** — **and bring one thing from the amendment list that you did not know had been changed.**'));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  Reading for the thing you need'));
out.push(p('**Function:** going into a long document with a question and coming out with an answer   ·   **Grammar:** the question form — _what I need to know is whether ___ and the answer is at ____   ·   **Pronunciation:** a question read back before the search begins'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Say the last long document you opened and the question you opened it with.** **If you cannot state the question in one sentence, you were not reading; you were acquainting yourself** — **which is the thing people do instead of reading when they do not know what they want to know.**'));
out.push(board('I had better have a look at the contract before the meeting.', 'What I need to know is whether a late programme revision is a breach, and the answer is at 14.3 and 22.1.'));
out.push(p('**b**  Which is a question you can search with? **1** _I need to understand the contract._  **2** _What I need to know is whether a late programme revision is a breach._  **3** _I need to be familiar with the standard._  **4** _What I need to know is which of the four probes governs if they disagree._  **5** _I should read it properly at some point._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say about opening a document without a question?   **A** it is a reasonable first step   **B** **it is acquainting yourself, which is what people do instead of reading** — and **it takes about four times as long and leaves nothing behind**   **C** it is the only way to find anything unexpected'));
out.push(p('**b**  Listen again. **1** What was Ms Khoury\'s question, and where was the answer?   **2** What does Ms Huda say about the question you did not ask?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.3  What I need to know is whether', [
  ['Ms Huda', 'Ms Khoury. The two hundred pages and the forty minutes.'],
  ['Dima', '**A manufacturer\'s manual, two hundred pages, and I had forty minutes before the bulletin closed.** ⚠ **And the first thing I did was write down what I needed to know.**'],
  ['Ms Huda', '**Say it as you wrote it.**'],
  ['Dima', '⚠ _What I need to know is whether the machine can be run on the thinner stock, and if so at what speed._ **Two clauses, and the second one saved me.**'],
  ['Ms Huda', '**Why the second?**'],
  ['Dima', '⚠ **Because page 94 says yes and page 131 says at a reduced speed**, **and a reader who had only asked the first half would have stopped at page 94 and been right and useless.**'],
  ['Ms Huda', '**Which is the whole cycle.** ⚠ **A question with one clause gets a yes or a no; a question with two gets an instruction.**'],
  ['Omar', 'And what do you do with the question once you have it?'],
  ['Ms Huda', '**You read it back before you start, out loud if you are alone.** ⚠ **Four seconds, and it stops the thing that happens to everybody** — **which is that you find something interesting on page 11 and spend thirty of your forty minutes on it.**'],
  ['Adnan', 'That is exactly how I lose an afternoon.'],
  ['Ms Huda', '⚠ **Everybody does, and it is not idleness.** **An interesting clause feels like progress and reads like work** — **and at the end of the afternoon you know something you did not need and not the thing you came for.**'],
  ['Rim', 'And if the answer is not there?'],
  ['Ms Huda', '**Then you write that down as an answer, with where you looked.** ⚠ _The manual does not say; I looked at 7, 9 and the index under three words._ **That is a finding and it can be acted on.** **_I could not find anything_ is not a finding, because the next person has to do it again.**'],
  ['Jad', 'And the question you did not ask?'],
  ['Ms Huda', '⚠ **Write it down and leave it.** **In the course of looking for one thing you will see three others, and two of them matter** — **so make a list and do not follow them.** **The list at the end of forty minutes is worth more than the two you would have chased.**'],
  ['Dima', '**Mine had four things on it and one of them was the paper weight.**'],
  ['Ms Huda', '**And did you follow it?**'],
  ['Dima', '⚠ **The next morning, with its own question, in nine minutes.** **It would have cost me half an hour on the Thursday and the bulletin would have gone out without the speed figure.**'],
  ['Lubna', 'And reading the question back out loud?'],
  ['Ms Huda', '🔊 **Flat, and all of it, including the second clause.** ⚠ **People read back the first half** — _whether it can run on the thinner stock_ — **and drop the _and at what speed_, which is the half that does the work.** **The dropped clause is always the one with the number in it.**'],
]));
out.push(sp());
out.push(box('Language box – reading for the thing you need', [
  '**Open a long document with a question you can state in one sentence.** ⚠ **If you cannot, you are acquainting yourself, which is what people do instead of reading** — **it takes about four times as long and leaves nothing behind.**',
  '**A question with one clause gets a yes or a no; a question with two gets an instruction.** ⚠ _Whether the machine can be run on the thinner stock, **and if so at what speed.**_ **Page 94 says yes and page 131 says at a reduced speed** — **and a reader who asked only the first half would have stopped at 94 and been right and useless.**',
  '**Read the question back before you start, out loud if you are alone.** ⚠ **Four seconds, and it stops the thing that happens to everybody** — **finding something interesting on page 11 and spending thirty of your forty minutes on it.**',
  '⚠ **And that is not idleness.** **An interesting clause feels like progress and reads like work** — **and at the end of the afternoon you know something you did not need and not the thing you came for.**',
  '**If the answer is not there, that is an answer: write it with where you looked.** ⚠ _The manual does not say; I looked at 7, 9 and the index under three words._ **_I could not find anything_ is not a finding, because the next person has to do it again.**',
  '**The question you did not ask: write it down and leave it.** ⚠ **In the course of looking for one thing you will see three others and two of them matter** — **so make a list and do not follow them.** **The list is worth more than the two you would have chased.**',
  '**Pronunciation.** 🔊 **Track 23.4** **The question read back flat, and all of it, including the second clause.** ⚠ **People read back the first half and drop the _and at what speed_, which is the half that does the work** — **and the dropped clause is always the one with the number in it.**',
  '**And one thing about forty minutes, which is the realistic unit.** ⚠ **Nobody is given a day for a long document.** **Forty minutes with a two-clause question and a list of four things not followed is a professional piece of work; four hours of acquainting yourself is not** — **and the difference is visible to anybody who asks you a question afterwards.**',
  '**And one thing about indexes, which are trusted more than they deserve.** ⚠ **An index is arranged by the words the writer uses and not by the words you would use.** **_Speed_ may be under _output rate_ and _paper_ under _stock_** — **so try three words before you decide the document is silent, and write down which three you tried.**',
  '**Practise:** State the question. **1** with two clauses  **2** where the answer is in two places  **3** where the answer is not there, and what you write  **4** the question you did not ask, written and left  **5** one you can answer in nine minutes the next morning',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the situation from the card. B states **the two-clause question** and says **where in the document they would look.** ⚠ **Two rows on each card are situations where the answer will not be in the document**, and B must say what they would write instead. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the situation)_ __________.'],
  ['B', '**What I need to know is whether __________, and if so __________.**'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_A press run on thinner stock, forty minutes to the deadline._', '_Whether a late programme revision is a breach._'],
  ['_⚠ Why the ministry refused the January consignment._', '_⚠ Whether the archive index was ever checked._'],
  ['_Which probe governs if the four disagree._', '_Whether notice can be given by post._'],
  ['_⚠ What the committee intended by _as required_ in 2019._', '_⚠ Whether anybody ever answered the escalation of 4 May._'],
  ['_What period applies to a variation instruction._', '_Whether the cover can be less than 25 mm anywhere._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each two-clause question and where they would look. ⚠ **The four rows marked ⚠ will not be answered by any document** — **a refusal\'s reason, a check that was never recorded, an intention from 2019, a reply nobody made** — **and the answer is the sentence that says so with where you looked.** **That sentence is a finding; _I could not find anything_ is a day of somebody else\'s work.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a question you actually have about a document you work from. ⚠ **Write it with two clauses and read it back** — **and then give yourself eight minutes and keep a list of everything you see and do not follow.**'));
out.push(p('**b**  Swap and perform. Your partner reads your question back **dropping the second clause** and then whole. ⚠ You say what the dropped clause would have cost.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima had a manufacturer\'s manual of two hundred pages and forty minutes before the bulletin closed, and the first thing she did was write down what she needed to know: whether the machine can be run on the thinner stock, and if so at what speed. Two clauses, and the second one saved her, because page ninety-four says yes and page a hundred and thirty-one says at a reduced speed — so a reader who had only asked the first half would have stopped at ninety-four and been right and useless. Which is the whole cycle: a question with one clause gets a yes or a no, and a question with two gets an instruction. Omar asked what you do with the question once you have it, and you read it back before you start, out loud if you are alone: four seconds, and it stops the thing that happens to everybody, which is finding something interesting on page eleven and spending thirty of your forty minutes on it. Adnan said that is exactly how he loses an afternoon, and everybody does, and it is not idleness — an interesting clause feels like progress and reads like work, and at the end of the afternoon you know something you did not need and not the thing you came for. Rim asked what happens if the answer is not there, and then you write that down as an answer, with where you looked: the manual does not say, and I looked at seven, nine and the index under three words. That is a finding and it can be acted on, and I could not find anything is not, because the next person has to do it again. Jad asked about the question you did not ask, and you write it down and leave it, because in the course of looking for one thing you will see three others and two of them matter. Dima\'s list had four things on it and she followed one of them the next morning, with its own question, in nine minutes._'));
out.push(p('**Listener task:** write your partner\'s two-clause question and what they saw and did not follow.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dima leaves in the manual, and the note under it. Answer the questions.'));
out.push(model([
  '**MANUAL, MODEL 4100 · WHAT I WENT IN FOR AND WHAT I FOUND** _(slipped inside the front cover · 11 October · forty minutes)_',
  '**The question I went in with.** ⚠ _Whether the machine can be run on the 60-gram stock, and if so at what speed._ **Two clauses, and the second is the one that mattered.**',
  '**The answer, and it is in two places that do not refer to each other.** ⚠ **Page 94, table 11: the 60-gram stock is listed as permitted.** **Page 131, note (c) under the speed table: _stock below 70 gram: maximum 4,000 an hour_.** **Nothing on page 94 points to page 131** — **and the index has _stock_ at page 94 and does not have it at 131 at all.**',
  '**So the working answer, in one sentence for the next person.** ⚠ **Yes, at not more than four thousand an hour**, **which is about two-thirds of our normal run and means the Thursday bulletin cannot be done on it at all if we start after eleven.**',
  '**What I looked at and what I did not.** **I used the index, table 11 at page 94, the speed tables at 128 to 132, and the warnings page at 7.** ⚠ **I did not read the maintenance section, pages 140 to 196**, **and that is where I would have gone next.**',
  '**Four things I saw and did not follow, written down so that nobody has to find them twice.** ⚠ **1 The paper-weight tolerance at page 96 is ±4 gram, which may mean our 60-gram stock is sometimes 56.** **2 The guillotine clearance at page 103 does not match our bench setting.** **3 There is a warning at page 7 about humidity that nobody here has read.** **4 The parts list gives two numbers for the same roller.**',
  '**Which of the four I have now followed.** ⚠ **The first, the next morning, with its own question** _(whether a 56-gram sheet is permitted, and if so at what speed)_, **in nine minutes: it is not permitted, at page 94, table 11, footnote 2.** **That would have cost me half an hour on the Thursday and the bulletin would have gone out without the speed figure.**',
  '**And one thing about the index, which I am recording because it caught me and will catch the next person.** ⚠ **The index of this manual is arranged by the manufacturer\'s own part names and not by the words anybody here would use.** **_Stock_ is there; _paper_ is not.** **_Speed_ is under _output rate_** — **and I found the speed table by turning pages.** **Try three words before you decide a manual is silent.**',
  '**NOTE for my own file.** ⚠ **The forty minutes produced one usable sentence and four leads, and I have tested the method against the way I used to do it.** **In June I spent an afternoon on this manual with no question and came out knowing a great deal about the machine and nothing about the stock** — **and when Mr Hamwi asked me on the Thursday I had to say that I would look it up.**',
]));
out.push(item('1', 'Why does the answer need both page 94 and page 131?'));
out.push(item('2', 'What did the writer look at, and where would she have gone next?'));
out.push(item('3', 'Which of the four leads has she followed, and what did it cost?'));
out.push(writers([
  'A long-read note: **the question you went in with, in two clauses** → **the answer, with every page it came from** → **the working answer in one sentence for the next person** → **what you looked at and what you did not** → **the things you saw and did not follow** → **and which of them you have since followed.**',
  '⚠ **Say where the two halves of an answer are and whether they point at each other.** _Nothing on page 94 points to page 131, and the index has stock at 94 and not at 131 at all._ **That sentence is worth more to the next reader than the answer, because it tells them the document cannot be trusted to join itself up.**',
  '**Put the working answer in one sentence, in the reader\'s terms.** ⚠ _Yes, at not more than four thousand an hour, which means the Thursday bulletin cannot be done on it if we start after eleven._ **An answer with no consequence attached will be looked up again by the next person.**',
  '**Say what you did not look at.** ⚠ _I did not read pages 140 to 196, and that is where I would have gone next._ **It is the half of a search that is never recorded and the half that saves the next one.**',
  '⚠ And **write the things you saw and did not follow**, **numbered, with their pages.** **They are the by-product of forty minutes and are often worth more than the answer** — **and the one you follow next morning takes nine minutes instead of thirty.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the long-read note (80 words or more).'));
out.push(p('**______________ · WHAT I WENT IN FOR AND WHAT I FOUND** _(______________ · ______ minutes)_   **The question I went in with.** ⚠ _Whether ______________, and if so ______________._   **The answer, and it is at ______________.** ⚠ **Page ______: ______________.** **Page ______: ______________.** **Nothing on page ______ points to page ______.**   **The working answer, in one sentence.** ⚠ **______________, which means ______________.**   **What I looked at and what I did not.** **I used ______________.** ⚠ **I did not ______________, and that is where I would have gone next.**   **Things I saw and did not follow.** ⚠ **1 ______________. 2 ______________. 3 ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A two-clause question, written before the search',
  'Every page the answer came from, and whether they cross-refer',
  'The working answer in one sentence, with its consequence',
  'What was not looked at, and where you would have gone next',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their working answer only**, and the room says whether anybody would need to look it up again.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full long-read note (180 words or more), to the shape in the writer\'s box: the two-clause question, the answer with its pages, the working answer, what you did not look at, and the leads you did not follow.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a two-clause question, every page the answer came from, the working answer with its consequence, and the leads written down and not followed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your two-clause question, and then read your list of things you did not follow.** ⚠ **The room counts the leads** — **and the count is the measure of the forty minutes, not the answer.** **Then the question that lands: how many of those leads would anybody ever have found again?** Then the sentence the cycle ends on, which is Ms Khoury\'s: **I came out knowing a great deal about the machine and nothing about the stock.**'));
out.push(hw('Take **one real question** about a document you work from, write it **with two clauses**, and give yourself **forty minutes**. ⚠ **Bring the working answer in one sentence with its consequence, every page it came from, and the list of things you saw and did not follow.** **Then follow one of them the next morning and time it.**'));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  The paragraph that contradicts the summary'));
out.push(p('**Function:** finding and reporting a contradiction inside a long document   ·   **Grammar:** _page 2 says ___; clause 14.3 says ___; the clause governs because ____   ·   **Pronunciation:** two contradictory sentences read at the same speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Take a long document and compare its summary with one operative clause you know well.** **Then ask which of the two anybody in your office actually quotes.** **It is the summary, every time** — **and the summary is not the document, which is a sentence worth having before this cycle begins.**'));
out.push(board('There seems to be some confusion in the contract about when time starts.', 'Page 2 says from the date of the order; clause 14.3 says from the possession certificate; 14.3 governs.'));
out.push(p('**b**  Which reports a contradiction usefully? **1** _The document is contradictory._  **2** _There is some confusion about dates._  **3** _I am not sure which applies._  **4** _Page 2 says from the date of the order and clause 14.3 says from the possession certificate._  **5** _Page 2 and clause 14.3 disagree, and 14.3 governs because it is the operative clause and was amended later._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a contradiction between a summary and a clause usually is?   **A** a drafting error   **B** **two dates** — and **a summary is almost always older than the clauses it summarises, so the contradiction is a history and not a mistake**   **C** a matter of interpretation'));
out.push(p('**b**  Listen again. **1** What were the two dates in Mr Barghouti\'s document?   **2** What does Ms Huda say you must not write?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.5  Two dates and not two opinions', [
  ['Ms Huda', 'Mr Barghouti. Page two against clause fourteen point three. Which is wrong?'],
  ['Adnan', '⚠ **Neither, and that is what I had not expected.** **Page two was right in March and clause fourteen point three has been right since July.**'],
  ['Ms Huda', '**Say the two dates.**'],
  ['Adnan', '⚠ **The edition is dated the first of March.** **Clause fourteen point three was amended on the eleventh of July and page two was not reprinted.**'],
  ['Ms Huda', '**Which is what almost every contradiction in a long document turns out to be.** ⚠ **Two dates, and not two opinions.** **A summary is older than the clauses it summarises, because a summary is written once and clauses are amended** — **so the contradiction is a history, not a mistake.**'],
  ['Dima', 'And which one governs?'],
  ['Ms Huda', '**The operative clause, and you say why rather than asserting it.** ⚠ _14.3 governs because it is the operative provision and because it was amended later._ **Two reasons, and the second is the one nobody gives.**'],
  ['Rim', 'Is it ever the other way round?'],
  ['Ms Huda', '⚠ **Occasionally, and it is worth knowing when.** **If the document says somewhere that the summary prevails** — **and some tender documents do, in a clause nobody reads** — **then the summary governs and the amended clause is the thing to be alarmed about.** **Look for it before you advise anybody.**'],
  ['Omar', 'And what do you write?'],
  ['Ms Huda', '**Both sentences, in full, side by side, at the same length.** ⚠ **Then which governs and why.** **And what you must not write is _there is some confusion in the document_** — **which is true, helps nobody, and makes you the source of the confusion in everybody\'s memory of the conversation.**'],
  ['Jad', 'Why does that matter so much?'],
  ['Ms Huda', '⚠ **Because the person you tell will repeat your sentence and not the clause.** **_Adnan says the contract is confusing_ travels; _Adnan says 14.3 governs and here is why_ travels as well and can be checked** — **and six weeks later the second one is still true.**'],
  ['Lubna', 'And if you are not sure which governs?'],
  ['Ms Huda', '**Then you report the contradiction, say what turns on it, and say what would settle it.** ⚠ _If 14.3 governs we are eleven days early; if page 2 governs we are nineteen days late. The clause that decides is 1.4, and I cannot find a clause 1.4._ **Uncertainty with a figure on it is professional; uncertainty on its own is a shrug.**'],
  ['Adnan', 'And reading the two sentences out loud?'],
  ['Ms Huda', '🔊 **At the same speed and the same length, with no comment between them.** ⚠ **People read the one they believe slowly and the other one quickly** — **and the room hears the verdict before the evidence, and stops listening to the evidence.**'],
]));
out.push(sp());
out.push(box('Language box – the paragraph that contradicts the summary', [
  '**Almost every contradiction in a long document is two dates and not two opinions.** ⚠ **A summary is older than the clauses it summarises, because a summary is written once and clauses are amended** — **so the contradiction is a history, not a mistake.**',
  '⚠ **Mr Barghouti\'s edition is dated 1 March; clause 14.3 was amended on 11 July and page 2 was not reprinted.** **Page 2 was right in March and 14.3 has been right since July, and neither of them is wrong.**',
  '**The operative clause governs, and you say why rather than asserting it.** ⚠ _14.3 governs because it is the operative provision and because it was amended later._ **Two reasons, and the second is the one nobody gives.**',
  '**But look before you advise.** ⚠ **Some documents say that the summary prevails, in a clause nobody reads** — **and then the summary governs and the amended clause is the thing to be alarmed about.**',
  '**Write both sentences in full, side by side, at the same length.** ⚠ **Then which governs and why.** **And never write _there is some confusion in the document_** — **it is true, it helps nobody, and it makes you the source of the confusion in everybody\'s memory of the conversation.**',
  '⚠ **Because the person you tell will repeat your sentence and not the clause.** **_He says the contract is confusing_ travels; _he says 14.3 governs and here is why_ travels too, and can be checked, and is still true six weeks later.**',
  '**If you are not sure which governs, report it with a figure.** ⚠ _If 14.3 governs we are eleven days early; if page 2 governs we are nineteen days late. The clause that decides is 1.4, and I cannot find a clause 1.4._ **Uncertainty with a figure on it is professional; uncertainty on its own is a shrug.**',
  '**Pronunciation.** 🔊 **Track 23.6** **The two sentences at the same speed and the same length, with no comment between them.** ⚠ **People read the one they believe slowly and the other quickly** — **and the room hears the verdict before the evidence and stops listening to the evidence.**',
  '**And one thing to establish before you alarm anybody.** ⚠ **Find out whether the contradiction has ever had a consequence.** **Two letters written on the wrong basis may both have gone to jobs where the two dates happened to fall together** — **and a contradiction that has not yet cost anything is reported differently from one that has.**',
  '**Practise:** Report the contradiction. **1** both sentences in full  **2** which governs, with two reasons  **3** one where the summary prevails  **4** one where you cannot tell, with the figures on both sides  **5** one rewritten out of _there is some confusion_',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair of statements from the card. B reports it: **both sentences, then which governs and why.** ⚠ **Two rows on each card cannot be settled from what is given**, and B must say what turns on it, with a figure, and what would settle it. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the summary says)_ __________. _(the clause says)_ __________.'],
  ['B', '**__________ governs, because __________ and because __________.**'],
]));
out.push(table(['Card A – the pair', 'Card B – the pair'], [
  ['_Page 2: time runs from the order. 14.3: from the possession certificate._', '_Page 1: notice may be given by any means. 3.11: notice is in writing, by hand._'],
  ['_⚠ Page 2: fourteen days. 22.1: seven days. No clause says which prevails._', '_⚠ Summary: four probes averaged. Clause 9: each probe. Both dated March._'],
  ['_Contents: _delivery_ at clause 5. Clause 5 is about insurance._', '_Page 2: the works means the building. 3.19: the whole site._'],
  ['_⚠ Summary: the index is checked annually. No clause mentions the index._', '_⚠ Page 2: the rate is held for a quarter. Schedule: for a month._'],
  ['_Summary: no retention. 18.2: five per cent retention._', '_Page 2: arbitration in Damascus. 31.4: in Aleppo, amended in May._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both sentences, which governs, and the two reasons. ⚠ **The four rows marked ⚠ cannot be settled from what is given** — **no prevailing clause, two identical dates, a summary about something no clause covers, and two figures with no hierarchy** — **and the answer is the contradiction reported with a figure on each side and the thing that would settle it named.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Find a contradiction in a document you work from — **between the summary and a clause, or between two clauses.** ⚠ **Write both sentences in full and then look for the dates** — **and if there are dates, say which came later.**'));
out.push(p('**b**  Swap and perform. Your partner reads the two sentences **with the one they believe read slowly** and then both at the same speed. ⚠ You say at which point you stopped listening.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Asked which of page two and clause fourteen point three is wrong, Adnan said neither, and that is what he had not expected: page two was right in March and clause fourteen point three has been right since July. The two dates are these — the edition is dated the first of March, the clause was amended on the eleventh of July, and page two was not reprinted. Which is what almost every contradiction in a long document turns out to be: two dates, and not two opinions. A summary is older than the clauses it summarises, because a summary is written once and clauses are amended, so the contradiction is a history and not a mistake. Dima asked which one governs, and the operative clause, and you say why rather than asserting it: fourteen point three governs because it is the operative provision and because it was amended later. Two reasons, and the second is the one nobody gives. Rim asked whether it is ever the other way round, and occasionally: if the document says somewhere that the summary prevails, and some tender documents do in a clause nobody reads, then the summary governs and the amended clause is the thing to be alarmed about. Omar asked what you write, and both sentences in full, side by side, at the same length, then which governs and why — and what you must not write is that there is some confusion in the document, which is true, helps nobody, and makes you the source of the confusion in everybody\'s memory. Jad asked why that matters so much, and because the person you tell will repeat your sentence and not the clause. And Lubna asked what to do if you are not sure which governs: report the contradiction, say what turns on it with a figure, and say what would settle it. If fourteen point three governs we are eleven days early, and if page two governs we are nineteen days late — and uncertainty with a figure on it is professional, where uncertainty on its own is a shrug. And Adnan asked about reading the two sentences out loud: at the same speed and the same length, with no comment between them, because people read the one they believe slowly and the other one quickly, and the room hears the verdict before the evidence and stops listening to the evidence._'));
out.push(p('**Listener task:** write your partner\'s two sentences, the two dates, and which governs.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan sends to the contracts office, and the note under it. Answer the questions.'));
out.push(model([
  '**CONDITIONS OF CONTRACT, 1 MARCH EDITION · PAGE 2 AGAINST CLAUSE 14.3** _(internal note · 5 September · to Mr Saqqal, copied to the office)_',
  '**The two sentences, in full and at the same length.** ⚠ **Page 2, under _summary of principal terms_:** _time for completion runs from the date of the order._ **Clause 14.3, at page 41:** _time for completion runs from the date of the possession certificate._',
  '**Which governs, and the two reasons.** ⚠ **Clause 14.3 governs.** **First, because it is the operative provision and page 2 is described in its own heading as a summary.** **Second, because 14.3 was amended on 11 July and page 2 has not been reprinted since the edition was issued on 1 March** — **so page 2 was accurate when it was printed and has not been accurate since July.**',
  '**And I have checked for the clause that would reverse this.** ⚠ **Some tender documents provide that the summary prevails.** **This one does not: I have looked at clause 1 _(interpretation)_, clause 2 _(documents forming the contract)_ and the index under four words.** **Clause 2.4 puts the conditions above the summary expressly.**',
  '**What turns on it, with the figures.** ⚠ **On three of our six current contracts the possession certificate is later than the order, by eleven, nineteen and forty-one days.** **On the Harasta job that is the difference between being nineteen days late and eleven days early**, **and we have written two letters this year on the basis of page 2 that were wrong.**',
  '**What I am asking for, which is small.** ⚠ **Not a reprint and not an amendment.** **One line on page 2, as an erratum slip: _see clause 14.3, amended 11 July_.** **It costs a sheet of paper and it is the only thing that stops the next person doing what I did for four months.**',
  '**And the thing I am not saying.** ⚠ **I am not saying the document is confusing.** **It is sixty pages with an amendment list at page 59 that records nine changes, and the system works exactly as it was designed to** — **what failed is that nobody in this office had ever opened page 59, including me.**',
  '**And one thing I am recording because somebody will ask it in the meeting.** ⚠ **Nobody has been harmed by this and I am not asking for anybody to be told that they were wrong.** **The two letters written on the basis of page 2 were both to Mr Kabbani in June, and on both the certificate and the order fell on the same date** — **so the advice was right by accident.**',
  '**NOTE for my own file, which did not go round.** ⚠ **I wrote _there appears to be some confusion over the commencement date_ in the first draft of this note.** **Mr Saqqal would have repeated that sentence and not the clause** — **and in six weeks the office would have remembered that the contract is confusing and not that 14.3 governs.**',
]));
out.push(item('1', 'What are the two reasons the clause governs?'));
out.push(item('2', 'What did the writer check for, and what did he find?'));
out.push(item('3', 'What is he asking for, and what is he not saying?'));
out.push(writers([
  'A contradiction note: **both sentences in full and at the same length** → **which governs, with two reasons** → **the check for the clause that would reverse it** → **what turns on it, with figures** → **what you are asking for** → **and the thing you are not saying.**',
  '⚠ **Give the second reason, which is the date.** _14.3 was amended on 11 July and page 2 has not been reprinted since 1 March._ **The first reason is a rule anybody could state; the second is the one that explains why a careful colleague was wrong for four months.**',
  '**Record the check you made for the clause that would reverse your answer.** ⚠ _I have looked at clause 1, clause 2 and the index under four words. Clause 2.4 puts the conditions above the summary expressly._ **An answer with its own counter-check recorded is not re-opened.**',
  '**Price the contradiction.** ⚠ _Eleven, nineteen and forty-one days on three of six contracts; on the Harasta job, the difference between nineteen days late and eleven days early._ **A contradiction with no figure on it is read as a point of interest.**',
  '⚠ And **ask for the small thing.** _Not a reprint and not an amendment: one line on page 2 as an erratum slip._ **The small ask is granted in a week and stops the next reader doing what you did for four months.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the contradiction note (80 words or more).'));
out.push(p('**______________ · ______________ AGAINST ______________** _(internal note · ______________ · to ______________)_   **The two sentences, in full.** ⚠ **______________:** _______________. **______________:** _______________.   **Which governs, and the two reasons.** ⚠ **______________ governs.** **First, because ______________.** **Second, because ______________ was amended on ______________ and ______________ has not been ______________.**   **And I have checked for the clause that would reverse this.** ⚠ **I have looked at ______________.**   **What turns on it, with the figures.** ⚠ **______________.**   **What I am asking for.** ⚠ **Not ______________. One line: _______________.**   **And the thing I am not saying.** ⚠ **I am not saying ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both sentences in full, at the same length',
  'Two reasons for which governs, the second of them a date',
  'The check for the clause that would reverse it, recorded',
  'A figure on what turns on it, and a small ask',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their two sentences only**, at the same speed, and the room says which it would have believed and why.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full contradiction note (180 words or more), to the shape in the writer\'s box: both sentences, the two reasons, the counter-check, the figures, the small ask, and the thing you are not saying.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both sentences in full at the same length, two reasons with a date among them, the counter-check recorded, and a figure on what turns on it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your two sentences at the same speed, and let the room guess which one you believe.** ⚠ **The room is usually right, and it is right from the speed and not from the words** — **which is the demonstration.** **Then say what you nearly wrote instead of the note.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **in six weeks the office would have remembered that the contract is confusing and not that 14.3 governs.**'));
out.push(hw('Find **one contradiction** in a document you work from, between a summary and a clause or between two clauses. ⚠ **Bring both sentences in full, the two dates if there are dates, and which governs with two reasons** — **and bring the figure for what turns on it.** **If there is no figure, the contradiction is a point of interest and not a note.**'));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  The silence that matters'));
out.push(p('**Function:** reporting what a long document does not say, and which silence is load-bearing   ·   **Grammar:** _the document is silent on ___ · nothing in it provides for ____   ·   **Pronunciation:** a silence reported without triumph'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Name three things a document you work from does not cover, and then say which of the three has actually happened.** **A silence that has never been tested is a note for the file; a silence that has been tested and was filled by somebody\'s decision on the day is the most important thing in the document** — **and it is not in the document.**'));
out.push(board('The standard does not really say anything about that sort of case.', 'The standard is silent on a refused delivery that is re-presented, and it happened four times last year.'));
out.push(p('**b**  Which silence is load-bearing? **1** _The contract does not mention arbitration in Beirut._  **2** _There is nothing about the colour of the cartons._  **3** _The standard is silent on a refused delivery that is re-presented, and it happened four times last year._  **4** _It does not define the word carefully._  **5** _Nothing provides for what happens if the possession certificate is never issued, which is the position on two sites now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say makes a silence worth reporting?   **A** that it is surprising   **B** **that the case has happened, and that somebody filled the gap on the day** — and **the person who filled it is now the rule, and nobody has written their name down**   **C** that it would be easy to fix'));
out.push(p('**b**  Listen again. **1** What silence did Ms Shaaban find, and who had been filling it?   **2** What does Ms Huda say about reporting a silence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.7  Who has been deciding it', [
  ['Ms Huda', 'Ms Shaaban. The forty-page standard, and the thing that is not in it.'],
  ['Rim', '**It is silent on a refused delivery that is brought back the same week.** ⚠ **It covers refusal and it covers acceptance and it says nothing about the load that comes back on the Thursday.**'],
  ['Ms Huda', '**Has it happened?**'],
  ['Rim', '⚠ **Four times last year.** **Which is what makes it worth saying** — **I have a dozen other silences and none of them has ever arisen.**'],
  ['Ms Huda', '**And who decided those four?**'],
  ['Rim', '⚠ **I did.** **On the day, at the gate, four times, and I am fairly sure I did not decide them the same way.**'],
  ['Ms Huda', '**Which is the finding of this cycle.** ⚠ **A silence that has been tested was filled by somebody, and that person is now the rule** — **and nobody has written their name down, including the person.**'],
  ['Omar', 'So how do you report it?'],
  ['Ms Huda', '**Three sentences, and the third is the one people leave out.** ⚠ **What the document is silent on. How many times it has arisen. And who has been deciding it in the meantime, and on what basis.**'],
  ['Rim', '**The third is the uncomfortable one, because the answer is me.**'],
  ['Ms Huda', '⚠ **It is always somebody in the room, and that is why the cycle lands.** **A silence reported without the third sentence sounds like a complaint about the drafters; with it, it is a report about a practice** — **and a practice can be written down this month.**'],
  ['Dima', 'And the silences that have never arisen?'],
  ['Ms Huda', '⚠ **One line each in a list at the end, and do not argue for them.** **A note that reports twelve untested silences will not be read; one that reports one tested silence and lists twelve others will be acted on, and the list gets looked at in the next edition.**'],
  ['Adnan', 'And what about tone?'],
  ['Ms Huda', '**Without triumph, and this is a real difficulty.** ⚠ **Finding a hole in a forty-page document feels like winning** — **and a note that reads as winning is answered by somebody defending the document instead of filling the hole.**'],
  ['Jad', 'And if the drafter is the person you are writing to?'],
  ['Ms Huda', '⚠ **Then the third sentence protects them, which they will not expect.** _Nothing in the standard provides for this, and I have been deciding it at the gate for a year._ **The second half says that the gap has been managed and not neglected, and it is also true.**'],
  ['Lubna', 'And reading a silence out loud?'],
  ['Ms Huda', '🔊 **Flat, and with the figure immediately after it, in the same breath.** ⚠ _The standard is silent on it; it has happened four times._ **A pause between the two halves is where the triumph gets in** — **and the room hears the pause, not the figure.**'],
]));
out.push(sp());
out.push(box('Language box – the silence that matters', [
  '**A silence is worth reporting when the case has happened.** ⚠ **An untested silence is a note for the file.** **A tested silence was filled by somebody\'s decision on the day** — **and that person is now the rule, and nobody has written their name down, including them.**',
  '**Three sentences, and the third is the one people leave out.** ⚠ **What the document is silent on · how many times it has arisen · and who has been deciding it in the meantime, and on what basis.**',
  '⚠ **The third is uncomfortable because the answer is always somebody in the room.** **Ms Shaaban decided four refused-and-re-presented loads herself, at the gate, and is fairly sure she did not decide them the same way.**',
  '**A silence reported without the third sentence sounds like a complaint about the drafters.** ⚠ **With it, it is a report about a practice** — **and a practice can be written down this month.**',
  '**The silences that have never arisen get one line each in a list at the end, with no argument.** ⚠ **A note reporting twelve untested silences will not be read; one reporting a single tested silence and listing twelve others will be acted on** — **and the list gets looked at in the next edition.**',
  '⚠ **Report it without triumph, and this is a real difficulty.** **Finding a hole in a forty-page document feels like winning, and a note that reads as winning is answered by somebody defending the document instead of filling the hole.**',
  '**And if the drafter is the person you are writing to, the third sentence protects them.** ⚠ _Nothing in the standard provides for this, and I have been deciding it at the gate for a year._ **The second half says the gap has been managed and not neglected, and it is also true.**',
  '**Pronunciation.** 🔊 **Track 23.8** **Flat, with the figure immediately after, in the same breath.** ⚠ _The standard is silent on it; it has happened four times._ **A pause between the two halves is where the triumph gets in, and the room hears the pause and not the figure.**',
  '**And one thing about the order of the three sentences, which matters more than it looks.** ⚠ **The figure comes second and the person comes third.** **A note that names the person before giving the figure reads as an accusation**, **and a note that gives the figure first has already established that the case is real.**',
  '**Practise:** Report the silence. **1** what it is silent on  **2** how many times it has arisen  **3** who has been deciding it, and how  **4** three untested silences, one line each  **5** one where the person deciding it is you, written without either triumph or apology',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the silence from the card. B reports it: **what it is silent on, how often it has arisen, and who has been deciding it.** ⚠ **Two rows on each card have never arisen at all**, and B must say so and put them in the list at the end. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the gap)_ __________.'],
  ['B', '**Nothing in __________ provides for __________. It has arisen __________ times, and __________ has been deciding it, on the basis of __________.**'],
]));
out.push(table(['Card A – the gap', 'Card B – the gap'], [
  ['_A refused delivery brought back the same week._', '_A possession certificate that is never issued._'],
  ['_⚠ Arbitration outside the country._', '_⚠ A carton colour requirement._'],
  ['_A proof returned after the reader has gone home._', '_An escalation logged by a member of the public._'],
  ['_⚠ A second analyser installed at a third site._', '_⚠ Minutes taken by somebody who was not present._'],
  ['_A handset returned twice for the same fault._', '_A drawing revision issued after work has started._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the silence, the number of times and the person deciding. ⚠ **The four rows marked ⚠ have never arisen** — **arbitration abroad, carton colour, a third analyser, minutes by an absentee** — **and they belong in a one-line list at the end and nowhere else.** **A pair that argues for an untested silence has written the note that does not get read.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a document you work from. ⚠ **Find one silence that has actually been tested and say who filled it** — **and if the answer is you, say how many times and whether you filled it the same way each time.**'));
out.push(p('**b**  Swap and perform. Your partner reads your silence **with a pause before the figure** and then in one breath. ⚠ You say in which version you heard triumph.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Rim\'s forty-page standard is silent on a refused delivery that is brought back the same week: it covers refusal and it covers acceptance and it says nothing about the load that comes back on the Thursday. It has happened four times last year, which is what makes it worth saying — she has a dozen other silences and none of them has ever arisen. And the four were decided by her, on the day, at the gate, and she is fairly sure she did not decide them the same way. Which is the finding of the cycle: a silence that has been tested was filled by somebody, and that person is now the rule, and nobody has written their name down, including the person. Omar asked how you report it, and three sentences, of which the third is the one people leave out: what the document is silent on, how many times it has arisen, and who has been deciding it in the meantime and on what basis. Rim said the third is the uncomfortable one because the answer is her, and it is always somebody in the room, which is why the cycle lands — a silence reported without the third sentence sounds like a complaint about the drafters, and with it, it is a report about a practice, and a practice can be written down this month. Dima asked about the silences that have never arisen, and one line each in a list at the end, with no argument: a note reporting twelve untested silences will not be read, and one reporting a single tested silence and listing twelve others will be acted on. Adnan asked about tone, and without triumph, which is a real difficulty, because finding a hole in a forty-page document feels like winning — and a note that reads as winning is answered by somebody defending the document instead of filling the hole. Jad asked what happens if the drafter is the person you are writing to, and then the third sentence protects them, which they will not expect: nothing in the standard provides for this, and I have been deciding it at the gate for a year. The second half says the gap has been managed and not neglected, and it is also true._'));
out.push(p('**Listener task:** write your partner\'s silence, its figure, and who has been filling it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rim sends to the standards office, and the note under it. Answer the questions.'));
out.push(model([
  '**INWARD GOODS STANDARD, SECOND EDITION · ONE GAP THAT HAS BEEN TESTED** _(note · 17 September · to Mrs Tannous, standards office)_',
  '**The gap, in one sentence.** ⚠ **Nothing in the standard provides for a consignment that has been refused at the gate and is brought back in the same week.** **Clause 7 covers refusal and clause 9 covers acceptance, and the load that returns on the Thursday is in neither.**',
  '**How often it has arisen.** ⚠ **Four times in the year to August.** **Twice from the same supplier, once in January and once in March.** **I have the gate book entries and the dates.**',
  '**Who has been deciding it, which is the part I would want to read if I were you.** ⚠ **I have.** **At the gate, four times, and not on the same basis each time.** **In January I treated the return as a fresh consignment and checked the whole top layer; in March I treated it as a continuation and checked only the four cartons that had failed** — **and I cannot now give you a reason for the difference beyond the time of day.**',
  '**What I am not saying, because the note would be read differently if I did not say it.** ⚠ **I am not saying the standard is defective.** **It is forty pages and it covers everything that happens in a week at eleven gates** — **and this is one case in four hundred and eleven consignments.** **The gap was managed and not neglected, and that is also the problem: nobody knew it was being managed.**',
  '**What would settle it, and it is one paragraph and not a clause.** ⚠ **Whether a re-presented load is a fresh consignment or a continuation.** **If it is fresh, the whole sampling rule applies again and the supplier will object to the cost.** **If it is a continuation, only the failed cartons are checked and a supplier could in principle substitute the rest** — **so the answer matters and it is not obvious, and that is why I am not proposing one.**',
  '**And twelve other silences, one line each, for the next edition and not for now.** ⚠ **Arbitration outside the country** _(never arisen)_. **Carton colour** _(never)_. **Deliveries by a carrier not on the list** _(never)_. **A probe that fails during the check** _(never)_. **Partial refusal of a sealed pallet** _(never)_. **Seven more on the attached sheet, all never.**',
  '**NOTE for my own file.** ⚠ **The hardest sentence in this note is the third paragraph and I rewrote it twice.** **The first version said that the gap had been _dealt with pragmatically_, which is a way of not saying that I decided it differently in January and in March.** **The second version gave the two bases and left out the reason** — **and the reason is the time of day, and I have put it in.**',
]));
out.push(item('1', 'Why is this gap worth reporting, and how many other silences does the writer have?'));
out.push(item('2', 'What were the two different bases on which she decided, and what does she give as the reason for the difference?'));
out.push(item('3', 'Why does she not propose an answer?'));
out.push(writers([
  'A silence note: **the gap in one sentence, with the clauses on either side of it** → **how often it has arisen, with the record** → **who has been deciding it and on what basis** → **what you are not saying** → **what would settle it, and why you are not proposing an answer** → **and the untested silences, one line each.**',
  '⚠ **Name the clauses the gap falls between.** _Clause 7 covers refusal and clause 9 covers acceptance, and the load that returns on the Thursday is in neither._ **A gap located between two clauses is a drafting job; a gap described in general terms is an argument.**',
  '**Give the bases you actually used, including the inconsistent ones.** ⚠ _In January a fresh consignment; in March a continuation; and I cannot give a reason beyond the time of day._ **It is the sentence nobody writes and the one that gets the paragraph drafted.**',
  '**Say what you are not saying.** ⚠ _I am not saying the standard is defective: this is one case in four hundred and eleven consignments._ **Without it, the note is answered by somebody defending forty pages.**',
  '⚠ And **say why you are not proposing the answer.** _If it is fresh the supplier objects to the cost; if it is a continuation a supplier could substitute the rest._ **A reporter who shows that both answers have a cost is believed to have no preference, which is what gets their report used.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the silence note (80 words or more).'));
out.push(p('**______________ · ONE GAP THAT HAS BEEN TESTED** _(note · ______________ · to ______________)_   **The gap, in one sentence.** ⚠ **Nothing in ______________ provides for ______________.** **Clause ______ covers ______________ and clause ______ covers ______________.**   **How often it has arisen.** ⚠ **______ times in ______________.** **I have ______________.**   **Who has been deciding it.** ⚠ **______________.** **On ______________ I treated it as ______________; on ______________ as ______________** — **and the reason for the difference is ______________.**   **What I am not saying.** ⚠ **I am not saying ______________.**   **What would settle it.** ⚠ **Whether ______________.** **If ______________; if ______________.**   **And other silences, one line each.** ⚠ **______________** _(never arisen)_.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The gap located between two named clauses',
  'How often it has arisen, with the record it comes from',
  'Who has been deciding it, and on what basis each time',
  'The untested silences in a list, with no argument for them',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their third paragraph only**, and the room says whether the person deciding has been named.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full silence note (180 words or more), to the shape in the writer\'s box: the gap between two clauses, the figure, who has been deciding and how, what you are not saying, what would settle it, and the untested list.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the gap between two named clauses, how often with its record, who has been deciding and on what basis, and the untested silences listed without argument.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your third paragraph, in one breath, with the figure immediately after the silence.** ⚠ **The room listens for a pause and for triumph, and both are audible** — **and then for the name of the person who has been filling the gap.** **In this room that person has been the writer about three times in four.** Then the sentence the cycle ends on, which is Ms Shaaban\'s: **the gap was managed and not neglected, and that is also the problem — nobody knew it was being managed.**'));
out.push(hw('Find **one silence that has actually been tested** in a document you work from. ⚠ **Bring the two clauses it falls between, the number of times, and the name of whoever has been deciding it** — **and if that is you, bring the two different bases you used, because there will be two.** **Then list three untested silences, one line each, with no argument.**'));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  Reading the figures against each other'));
out.push(p('**Function:** checking a long document\'s figures against each other and reporting what will not reconcile   ·   **Grammar:** _page 12 gives ___ and the schedule gives ___; they cannot both_   ·   **Pronunciation:** two figures that will not reconcile, read without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Find every figure of the same kind in a long document and put them in one list.** **Periods with periods, quantities with quantities, dates with dates.** **Nobody who writes a long document ever sees its figures in one list** — **and about a third of the time two of them will not go together.**'));
out.push(board('The dates in the contract are a bit tight in places.', 'Fourteen days for a variation instruction and seven for a programme revision: both cannot be met.'));
out.push(p('**b**  Which reports an irreconcilable pair? **1** _The periods are rather short._  **2** _Fourteen days for a variation instruction and seven for a programme revision: both cannot be met, because the revision follows the instruction._  **3** _Some of the dates may conflict._  **4** _Clause 9 requires four probes and the sampling table provides for two: on a four-probe load the table cannot be applied._  **5** _The figures should be reviewed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is the fastest check on a long document?   **A** reading it twice   **B** **putting every figure of the same kind in one list, which nobody who wrote it has ever done** — and **about a third of the time two of them will not go together**   **C** asking the author'));
out.push(p('**b**  Listen again. **1** Which two periods would not reconcile in Mr Barghouti\'s contract?   **2** What does Ms Huda say about the order of operations?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.9  Fourteen days and seven', [
  ['Ms Huda', 'Mr Barghouti. The schedule of dates at page fifty-five. What did the list give you?'],
  ['Adnan', '**Eleven periods in one table, which is the only place in the document where they can be seen together.** ⚠ **And two of them cannot both be met.**'],
  ['Ms Huda', '**Say them.**'],
  ['Adnan', '⚠ **Fourteen days to issue a variation instruction, and seven days to submit the revised programme.** **And the revised programme follows the instruction** — **so the seven days begin inside the fourteen.**'],
  ['Ms Huda', '**Which is the commonest kind of irreconcilable pair and it is not about arithmetic.** ⚠ **It is about the order of operations.** **Two periods that are fine on their own cannot both be met when one of them depends on the other** — **and a schedule of dates shows the lengths and not the order.**'],
  ['Dima', 'So you have to know the order from somewhere else.'],
  ['Ms Huda', '⚠ **Always, and it is never in the table.** **The order is in the clauses and the lengths are in the schedule** — **which is why the schedule looks reasonable to everybody who has read it and cannot be worked by anybody who has to use it.**'],
  ['Rim', 'How do you make the list?'],
  ['Ms Huda', '**By kind and not by page.** ⚠ **All the periods together, all the quantities, all the percentages, all the dates.** **It takes about twenty minutes in a sixty-page document and it is the fastest check there is.**'],
  ['Omar', 'And what do you do with a pair that will not go?'],
  ['Ms Huda', '**You say both figures, say why they cannot both be met, and say what actually happens now.** ⚠ **The third part is the one that gets it fixed** — _in practice the programme is submitted late and nobody has objected, which means the fourteen days are the real period and the seven are decoration._'],
  ['Jad', 'Is that not a dangerous thing to put in writing?'],
  ['Ms Huda', '⚠ **It is the opposite, and this is worth being clear about.** **The practice exists whether or not it is written down** — **and a clause that is never enforced is a clause somebody can enforce once, against you, at the worst moment.** **Writing it down is how it gets amended.**'],
  ['Lubna', 'And figures that are not periods?'],
  ['Ms Huda', '**The same, and quantities are where the mistakes are largest.** ⚠ **Clause 9 requires four probes and the sampling table provides for two** — **so on a four-probe load the table cannot be applied at all, and somebody has been applying something.**'],
  ['Adnan', 'And reading the two figures out loud?'],
  ['Ms Huda', '🔊 **Without emphasis on either, and with the dependency said last.** ⚠ _Fourteen days, and seven days, and the seven begin inside the fourteen._ **People stress the smaller figure as though it were the culprit** — **and neither figure is wrong; the pair is.**'],
]));
out.push(sp());
out.push(box('Language box – reading the figures against each other', [
  '**Put every figure of the same kind in one list: periods with periods, quantities with quantities, dates with dates.** ⚠ **Nobody who writes a long document ever sees its figures in one list** — **and about a third of the time two of them will not go together.**',
  '**The commonest irreconcilable pair is not about arithmetic but about the order of operations.** ⚠ **Fourteen days to issue a variation instruction and seven to submit the revised programme** — **and the programme follows the instruction, so the seven begin inside the fourteen.**',
  '⚠ **The order is in the clauses and the lengths are in the schedule.** **Which is why a schedule of dates looks reasonable to everybody who has read it and cannot be worked by anybody who has to use it.**',
  '**Make the list by kind and not by page.** ⚠ **About twenty minutes in a sixty-page document, and it is the fastest check there is.**',
  '**Three parts to the report, and the third is the one that gets it fixed.** ⚠ **Both figures · why they cannot both be met · and what actually happens now.** _In practice the programme is submitted late and nobody has objected, which means the fourteen days are the real period and the seven are decoration._',
  '⚠ **And putting the practice in writing is safer than leaving it out.** **The practice exists whether or not it is recorded** — **and a clause that is never enforced is a clause somebody can enforce once, against you, at the worst moment.** **Writing it down is how it gets amended.**',
  '**Quantities are where the mistakes are largest.** ⚠ **Clause 9 requires four probes and the sampling table provides for two** — **so on a four-probe load the table cannot be applied at all, and somebody has been applying something.**',
  '**Pronunciation.** 🔊 **Track 23.10** **Without emphasis on either figure, and with the dependency said last.** ⚠ _Fourteen days, and seven days, and the seven begin inside the fourteen._ **People stress the smaller figure as though it were the culprit, and neither figure is wrong; the pair is.**',
  '**And one thing about the figures nobody lists, which are the dates.** ⚠ **Put the document\'s own dates in the column too** — **the edition, the amendments, the schedule\'s own revision** — **because a period measured from a date that has itself been amended is the one error nobody finds by arithmetic.**',
  '**Practise:** Report the pair. **1** two periods  **2** two quantities  **3** the dependency, said last  **4** what actually happens now  **5** one where the practice has quietly replaced one of the two figures',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair from the card. B reports it: **both figures, why they cannot both be met, and what actually happens now.** ⚠ **Two rows on each card reconcile perfectly well** and are there to be cleared, and B must say so rather than finding a problem. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the two figures)_ __________ and __________.'],
  ['B', '**They cannot both be met, because __________. In practice __________.**'],
]));
out.push(table(['Card A – the pair', 'Card B – the pair'], [
  ['_Fourteen days for an instruction, seven for the revised programme._', '_Clause 9: four probes. Sampling table: two._'],
  ['_⚠ Thirty days to pay, sixty days of retention._', '_⚠ 10 mm crush limit at the gate, 10 mm in the store standard._'],
  ['_Forty-eight hours for a proof, a reader who leaves at two._', '_Eight afternoons a year, a quarterly rota drawn in June._'],
  ['_⚠ Twelve months of warranty, twelve months of maintenance._', '_⚠ Four working hours on site, a four-hour drive to Salkhad._'],
  ['_Four thousand sheets by the second, eleven working days of run._', '_Twelve-digit batch numbers, a six-digit field on the note._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** both figures, the dependency and the present practice. ⚠ **The four rows marked ⚠ reconcile perfectly well** — **payment and retention run separately, two identical limits agree, warranty and maintenance are different obligations, and the Salkhad drive is why that site has its own period.** **A pair that finds a conflict in all ten is doing what a reader does when they have been told to look for conflicts.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a document you work from and spend six minutes listing **all its periods in one column.** ⚠ **Then look for a pair where one depends on the other** — **and if you find one, say what happens now, in practice, and who decided that.**'));
out.push(p('**b**  Swap and perform. Your partner reads your pair **stressing the smaller figure** and then flat with the dependency last. ⚠ You say which version blamed a number.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The schedule of dates at page fifty-five gave Adnan eleven periods in one table, which is the only place in the document where they can be seen together — and two of them cannot both be met. Fourteen days to issue a variation instruction, and seven days to submit the revised programme; and the revised programme follows the instruction, so the seven days begin inside the fourteen. Which is the commonest kind of irreconcilable pair, and it is not about arithmetic: it is about the order of operations, because two periods that are fine on their own cannot both be met when one depends on the other, and a schedule of dates shows the lengths and not the order. Dima said you have to know the order from somewhere else, and always, and it is never in the table: the order is in the clauses and the lengths are in the schedule, which is why the schedule looks reasonable to everybody who has read it and cannot be worked by anybody who has to use it. Rim asked how you make the list, and by kind and not by page — all the periods together, all the quantities, all the percentages, all the dates — which takes about twenty minutes in a sixty-page document and is the fastest check there is. Omar asked what you do with a pair that will not go, and you say both figures, say why they cannot both be met, and say what actually happens now; and the third part is the one that gets it fixed. Jad asked whether that is not dangerous to put in writing, and it is the opposite: the practice exists whether or not it is recorded, and a clause that is never enforced is a clause somebody can enforce once, against you, at the worst moment, which is a dispute about something else entirely. Lubna asked about figures that are not periods, and the same, and quantities are where the mistakes are largest: clause nine requires four probes and the sampling table provides for two, so on a four-probe load the table cannot be applied at all, and somebody has been applying something. And Adnan asked about reading the two figures out loud: without emphasis on either, and with the dependency said last, because people stress the smaller figure as though it were the culprit, and neither figure is wrong — the pair is._'));
out.push(p('**Listener task:** write your partner\'s two figures, the dependency, and what happens now.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the figures note Adnan sends to the contracts office, and the note under it. Answer the questions.'));
out.push(model([
  '**CONDITIONS OF CONTRACT, 1 MARCH EDITION · THE ELEVEN PERIODS IN ONE LIST** _(internal note · 11 September · to Mr Saqqal)_',
  '**What I did, and it took twenty-two minutes.** ⚠ **I put every period in the document into one column, by kind and not by page.** **Eleven of them.** **The schedule at page 55 has nine; the other two are in clauses 22.1 and 31.4 and are not in the schedule at all.**',
  '**The pair that will not go.** ⚠ **Fourteen days for the engineer to issue a variation instruction** _(clause 14.6)_ **and seven days for the contractor to submit the revised programme** _(clause 22.1)_. **The revised programme follows the instruction, so the seven days begin inside the fourteen** — **and neither figure is wrong; the pair is.**',
  '**What actually happens now, which is the part that will get it amended.** ⚠ **The programme is submitted late on every job and nobody has ever objected.** **So the fourteen days are the real period and the seven are decoration** — **and I can name four jobs and the number of days late on each: nine, eleven, four and nineteen.**',
  '**Why I am putting the practice in writing rather than leaving it alone.** ⚠ **The practice exists whether or not it is recorded.** **A clause that is never enforced is a clause that somebody can enforce once, against us, at the worst available moment** — **and the worst available moment is a dispute about something else entirely.**',
  '**A second pair, in quantities, which is a larger error than the periods.** ⚠ **Clause 9.2 requires all four temperature probes to read within tolerance.** **The sampling table at appendix 2 provides for two probes.** **On a four-probe load the table cannot be applied at all** — **and somebody at the gate has been applying something for two years, and I do not know what.**',
  '**And two periods that look wrong and are not, which I am reporting so that nobody else spends the twenty minutes.** ⚠ **Thirty days to pay and sixty days of retention run separately and do not interact.** **Twelve months of warranty and twelve months of maintenance are different obligations with the same length, which is a coincidence and not a conflict.**',
  '**NOTE for my own file.** ⚠ **The twenty-two minutes found more than the four months did.** **And the thing I want to record is why: I had read every one of these clauses, some of them many times, and I had never seen two of the figures on the same page** — **because nothing in a long document ever puts them there, and nobody who writes one is ever asked to.**',
]));
out.push(item('1', 'Why can the fourteen days and the seven days not both be met?'));
out.push(item('2', 'What is the second pair, and what does the writer say he does not know?'));
out.push(item('3', 'Why does he report two pairs that look wrong and are not?'));
out.push(writers([
  'A figures note: **what you did and how long it took** → **the pair that will not go, with clause numbers** → **what actually happens now, with named jobs and figures** → **why you are recording the practice** → **any second pair, in other units** → **and the pairs that look wrong and are not.**',
  '⚠ **Say how many figures there were and where they were hiding.** _The schedule has nine; the other two are in clauses 22.1 and 31.4 and are not in the schedule at all._ **The figures outside the table are the ones that produce the conflict, because nobody has ever seen them beside the others.**',
  '**Put the dependency last and blame neither figure.** ⚠ _The revised programme follows the instruction, so the seven days begin inside the fourteen — and neither figure is wrong; the pair is._ **A note that blames the smaller figure invites a defence of it.**',
  '**Give the present practice with instances.** ⚠ _Submitted late on every job; four jobs, nine, eleven, four and nineteen days._ **The practice with no instances is an allegation; the practice with four dates is a finding.**',
  '⚠ And **report the pairs that reconcile.** _Thirty days to pay and sixty of retention run separately; twelve months of warranty and twelve of maintenance are a coincidence._ **It saves the next reader the twenty minutes and it proves you looked at all eleven and not only at the two you wanted.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the figures note (80 words or more).'));
out.push(p('**______________ · THE ______ PERIODS IN ONE LIST** _(internal note · ______________ · to ______________)_   **What I did, and it took ______ minutes.** ⚠ **Every ______________ in one column, by kind and not by page.** **______ of them.** **The schedule has ______; the other ______ are in ______________.**   **The pair that will not go.** ⚠ **______________** _(clause ______)_ **and ______________** _(clause ______)_. **______________ follows ______________, so ______________** — **and neither figure is wrong; the pair is.**   **What actually happens now.** ⚠ **______________, and I can name ______ jobs: ______________.**   **Why I am putting the practice in writing.** ⚠ **______________.**   **And pairs that look wrong and are not.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every figure of one kind in one list, with how many and where',
  'The pair that will not go, with clause numbers and the dependency last',
  'The present practice, with named instances and figures',
  'The pairs that reconcile, reported so nobody repeats the work',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their irreconcilable pair only**, and the room says which figure they were blaming.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full figures note (180 words or more), to the shape in the writer\'s box: the list and how long it took, the pair with its dependency, the present practice with instances, why you are recording it, and the pairs that reconcile.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every figure of one kind listed with how many and where, the dependency said last, the present practice with named instances, and the reconciling pairs reported.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say how many figures of one kind your document has, and how many of them are outside the table that is supposed to hold them.** ⚠ **The second number is almost never nought, and the figures outside the table are where the conflicts are** — **because nobody has ever seen them beside the others.** **Then say how long your list took.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **the twenty-two minutes found more than the four months did.**'));
out.push(hw('Spend **twenty minutes** listing every figure of one kind in a document you work from — **periods, or quantities, or percentages** — **by kind and not by page.** ⚠ **Bring the number, how many were outside the table that should hold them, and any pair that will not go** — **with the dependency, and with what happens now in practice.**'));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  The note you leave for the next reader'));
out.push(p('**Function:** writing the note that saves the next reader your forty minutes   ·   **Grammar:** _if you are looking for ___, go to ___ · do not rely on ____   ·   **Pronunciation:** reading a list of page references at dictation speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. ⚠ **Ask who in your office knows a long document well, and then ask where that knowledge is written down.** **It is in their head, in every case** — **and when they are on leave in August the document is sixty pages again for everybody else.**'));
out.push(board('Ask Adnan, he knows the contract better than anybody.', 'The note is inside the front cover and it is two pages, and Adnan is on leave until the fourteenth.'));
out.push(p('**b**  Which belongs in a note for the next reader? **1** a summary of the document  **2** which pages do the work  **3** your opinion of the drafting  **4** the figures that will not reconcile, with clause numbers  **5** what to ignore, and why'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the note is not?   **A** a summary   **B** **a summary, and a reader who is given a summary instead of a map will read the summary and then the whole document anyway** — and **the note is a set of instructions for a search**   **C** a criticism of the document'));
out.push(p('**b**  Listen again. **1** Where does Ms Huda say the note should live?   **2** What does Ms Huda say about putting a date on the note?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.11  Inside the front cover', [
  ['Ms Huda', 'Five cycles of reading, and the question is what survives them. Mr Barghouti?'],
  ['Adnan', '**Four notes and about nine hours of work.** ⚠ **And all of it is in my own file, which nobody opens, and in my head, which is on leave in August.**'],
  ['Ms Huda', '**So the last cycle is the note for the next reader.** **What is it not?**'],
  ['Adnan', '⚠ **A summary.** **I tried that in June and it was four pages and nobody used it.**'],
  ['Ms Huda', '**And why not?**'],
  ['Adnan', '⚠ **Because a summary is a fifth document.** **A reader who is given one reads it and then reads the contract anyway, because they do not know whether to trust it.**'],
  ['Ms Huda', '**Which is exactly right, and the note is a set of instructions for a search instead.** ⚠ _If you are looking for X, go to page Y. Do not rely on page 2. The figures that will not reconcile are these._ **Instructions can be trusted a line at a time, and a summary has to be trusted whole.**'],
  ['Dima', 'And where does it live?'],
  ['Ms Huda', '**Inside the front cover of the document, physically.** ⚠ **Not in a file, not on a shared drive, and not attached to a message from April.** **The next reader will have the document in their hands and nothing else** — **and a note that is anywhere but inside that cover will not be found by the person it was written for.**'],
  ['Rim', 'And if there are eleven copies of the document?'],
  ['Ms Huda', '⚠ **Then eleven notes, and that is not a joke.** **It takes an afternoon of photocopying and it is the single cheapest thing in this unit** — **and a note in one of eleven copies will be found by one reader in eleven.**'],
  ['Omar', 'What about putting a date on it?'],
  ['Ms Huda', '**At the top, with your name, and with the edition of the document it refers to.** ⚠ **A note with no date is a note the next reader has to verify, which costs them the forty minutes you were saving** — **and 23.3 is the reason: your note will be older than the document before long, and the next reader needs to know by how much.**'],
  ['Jad', 'And what do you leave out?'],
  ['Ms Huda', '⚠ **Your opinion of the drafting.** **It is the most satisfying thing to write and the only part that will date badly and offend somebody** — **and it tells the next reader nothing about where to look.**'],
  ['Lubna', 'And reading a list of references out loud?'],
  ['Ms Huda', '🔊 **At dictation speed, and the page before the clause this time.** ⚠ _Page forty-one — clause fourteen point three._ **The other way round in speech, because somebody is writing it down and they turn to the page first.** **23.1 had it the other way, and the difference is whether the listener is holding a pen.**'],
]));
out.push(sp());
out.push(box('Language box – the note you leave for the next reader', [
  '**The note is not a summary.** ⚠ **A summary is a fifth document, and a reader given one reads it and then reads the original anyway, because they do not know whether to trust it.** **Mr Barghouti\'s June summary was four pages and nobody used it.**',
  '**It is a set of instructions for a search.** ⚠ _If you are looking for X, go to page Y. Do not rely on page 2. The figures that will not reconcile are these._ **Instructions can be trusted a line at a time; a summary has to be trusted whole.**',
  '**It lives inside the front cover of the document, physically.** ⚠ **Not in a file, not on a shared drive, and not attached to a message from April.** **The next reader will have the document in their hands and nothing else.**',
  '⚠ **And if there are eleven copies, eleven notes.** **It takes an afternoon of photocopying and it is the single cheapest thing in this unit** — **a note in one of eleven copies will be found by one reader in eleven.**',
  '**Date it, sign it, and name the edition it refers to.** ⚠ **A note with no date has to be verified, which costs the next reader the forty minutes you were saving** — **and 23.3 is the reason: your note will be older than the document before long, and the reader needs to know by how much.**',
  '⚠ **Leave out your opinion of the drafting.** **It is the most satisfying thing to write and the only part that will date badly and offend somebody** — **and it tells the next reader nothing about where to look.**',
  '**What goes in, in this order.** ⚠ **1 Which pages do the work.** **2 The definitions that matter.** **3 Do not rely on ___, and why.** **4 The figures that will not reconcile.** **5 The silences that have been tested, and who has been filling them.** **6 What to ignore.**',
  '**Pronunciation.** 🔊 **Track 23.12** **At dictation speed, and the page before the clause this time.** ⚠ _Page forty-one — clause fourteen point three._ **23.1 had it the other way round; the difference is whether the person listening is holding a pen.**',
  '**And one line that has to be in the note and is always left out.** ⚠ **What to do when the note is wrong.** _If your copy carries a later amendment, trust the document and not this note, and tell me which clause changed._ **A note with no expiry is followed for a year after it has stopped being true.**',
  '**Practise:** Write the lines. **1** which pages do the work  **2** a _do not rely on_  **3** a figure pair that will not reconcile  **4** a tested silence and who fills it  **5** the date line, with the edition named',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names the document from the card. B gives **four lines of the note: the working pages, a _do not rely on_, a figure pair and a tested silence.** ⚠ **Two rows on each card are documents nobody else in the organisation ever reads**, and B must say whether a note is worth writing at all. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the document)_ __________.'],
  ['B', '**Working pages: __________. Do not rely on __________, because __________. Figures: __________. Silence: __________, filled by __________.**'],
]));
out.push(table(['Card A – the document', 'Card B – the document'], [
  ['_Sixty pages of conditions of contract, eleven copies._', '_A forty-page inward goods standard, at eleven gates._'],
  ['_⚠ My own notebook of gate decisions._', '_⚠ A manual for a machine only I operate._'],
  ['_A two-hundred-page machine manual, two copies._', '_A tender document of ninety pages, one copy._'],
  ['_⚠ A file of my own correspondence on one dispute._', '_⚠ A draft I am still writing._'],
  ['_The archive catalogue, four volumes, open shelf._', '_A thirty-page insurance policy, one copy in the safe._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the four lines for each document. ⚠ **The four rows marked ⚠ are read by one person only** — **a private notebook, a single-operator manual, one person\'s correspondence, an unfinished draft** — **and the honest answer is that a note is not worth writing yet.** **But say when it becomes worth writing:** **the day a second person has to use it, or the day before you go on leave.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **six lines** of the note for the longest document you work from, in the order in the Language box. ⚠ **Then say where you will physically put it, and how many copies of the document exist.**'));
out.push(p('**b**  Swap and perform. Your partner reads your references **clause first** and then **page first at dictation speed.** ⚠ You write them down and say which version you could keep up with.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Five cycles of reading, and the question is what survives them. Adnan had four notes and about nine hours of work, and all of it is in his own file, which nobody opens, and in his head, which is on leave in August. So the last cycle is the note for the next reader, and what it is not is a summary: he tried that in June, it ran to four pages, and nobody used it — because a summary is a fifth document, and a reader who is given one reads it and then reads the contract anyway, since they do not know whether to trust it. Which is exactly right, and the note is a set of instructions for a search instead: if you are looking for X go to page Y, do not rely on page 2, and the figures that will not reconcile are these. Instructions can be trusted a line at a time, and a summary has to be trusted whole. Dima asked where it lives, and inside the front cover of the document, physically — not in a file, not on a shared drive and not attached to a message from April, because the next reader will have the document in their hands and nothing else. Rim asked what happens if there are eleven copies, and then eleven notes, and that is not a joke: it takes an afternoon of photocopying and it is the cheapest thing in the unit. Omar asked about the date, and at the top, with your name and the edition it refers to, because a note with no date has to be verified, which costs the next reader the forty minutes you were saving. And Jad asked what to leave out: your opinion of the drafting, which is the most satisfying thing to write and the only part that will date badly and offend somebody, and which tells the next reader nothing about where to look. And Lubna asked about reading a list of references out loud: at dictation speed, and the page before the clause this time, because somebody is writing it down and they turn to the page first. Twenty-three point one had it the other way round, and the difference is simply whether the person listening is holding a pen._'));
out.push(p('**Listener task:** write your partner\'s six lines and where the note will physically live.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Adnan puts inside the front cover of all eleven copies, and the note under it. Answer the questions.'));
out.push(model([
  '**READ THIS FIRST** _(A. Barghouti · 20 September · refers to the 1 March edition, with amendments to 11 July)_',
  '**What this is.** ⚠ **Not a summary.** **Instructions for finding things in sixty pages, written after four months of using the wrong two.** **Eleven pages of the sixty do the work.**',
  '**1  If you are looking for a period, go to page 55 and then to clauses 22.1 and 31.4.** ⚠ **The schedule at 55 has nine of the eleven periods and the other two are not in it.**',
  '**2  If you are looking for when time starts, go to page 41, clause 14.3.** ⚠ **Do not rely on page 2.** **Page 2 says time runs from the date of the order; 14.3 says from the possession certificate, and 14.3 governs** _(it is the operative clause, and it was amended on 11 July while page 2 was not reprinted)_. **Clause 2.4 puts the conditions above the summary expressly.**',
  '**3  The four definitions that matter are at 3.2, 3.7, 3.11 and 3.19.** ⚠ **_Notice_ at 3.11 is the one that catches people: notice means in writing and delivered by hand, so nothing sent by post is notice at all.**',
  '**4  Two figures that will not reconcile.** ⚠ **Fourteen days for a variation instruction** _(14.6)_ **against seven for the revised programme** _(22.1)_, **and the seven begin inside the fourteen.** **In practice the programme is late on every job and nobody has objected.** **And clause 9.2 requires four probes while the sampling table at appendix 2 provides for two.**',
  '**5  One tested silence.** ⚠ **Nothing provides for a refused consignment brought back in the same week.** **It has arisen four times in the year to August and Ms Shaaban at the gate has been deciding it** — **not on the same basis each time.** **Ask her before you advise anybody.**',
  '**6  What to ignore until somebody raises it.** ⚠ **Pages 16 to 40 and 42 to 54: recital, an arbitration procedure not used in nineteen years, and about eleven pages copied unchanged from the previous edition** _(marked in the margin with a pencil C)_.',
  '**7  And what to do when this note is wrong, which it will be.** ⚠ **It refers to the 1 March edition with amendments to 11 July.** **If the copy in your hands has a later amendment, trust the document and not this note, and tell me which clause changed** — **and if I have left, tell whoever keeps the contracts file, because the note will otherwise be followed for a year after it has stopped being true.**',
  '**NOTE for my own file, which is not in the front cover.** ⚠ **The note is two pages and it took an hour, and the photocopying took the afternoon.** **I have left out one thing I wanted to write, which is what I think of the drafting of clause 14** — **and I want to record that I wanted to write it, because the first draft of the note had a paragraph on it and the paragraph told the next reader nothing about where to look.**',
]));
out.push(item('1', 'What does the note say about page 2, and what three things support that?'));
out.push(item('2', 'Which definition does the note say catches people, and why?'));
out.push(item('3', 'What has the writer left out, and why does he record that he wanted to write it?'));
out.push(writers([
  'A note for the next reader: **what it is and what it is not** → **where to go for each kind of thing** → **the _do not rely on_, with its reasons** → **the definitions that matter** → **the figures that will not reconcile** → **the tested silence and who fills it** → **and what to ignore.**',
  '⚠ **Head it so that it is read.** _READ THIS FIRST_, **with your name, the date and the edition it refers to.** **A note that does not name the edition will be distrusted the first time the document is reissued, which is the moment it is most needed.**',
  '**Give the reason for every _do not rely on_.** ⚠ _14.3 governs: it is the operative clause, it was amended on 11 July, and clause 2.4 puts the conditions above the summary._ **Three reasons, so that the next reader does not have to check your reading before they can use it.**',
  '**Point the reader at a person where the answer is a person.** ⚠ _Ms Shaaban at the gate has been deciding it, not on the same basis each time; ask her before you advise anybody._ **A note that names a person for a tested silence is doing something no document can do.**',
  '⚠ And **leave out what you think of the drafting.** **It is the most satisfying paragraph in a first draft and the only one that will date badly and offend somebody** — **and it tells the next reader nothing about where to look.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note for the next reader (80 words or more).'));
out.push(p('**READ THIS FIRST** _(______________ · ______________ · refers to ______________)_   **What this is.** ⚠ **Not a summary.** **Instructions for finding things in ______ pages.** **______ pages of the ______ do the work.**   **1  If you are looking for ______________, go to ______________.**   **2  If you are looking for ______________, go to ______________.** ⚠ **Do not rely on ______________**, **because ______________ and ______________.**   **3  The definitions that matter are at ______________.** ⚠ **______________ is the one that catches people.**   **4  Figures that will not reconcile.** ⚠ **______________ against ______________.** **In practice ______________.**   **5  One tested silence.** ⚠ **______________, filled by ______________.**   **6  What to ignore until somebody raises it.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A heading, a date, a name and the edition it refers to',
  'A reason for every _do not rely on_',
  'A person named for any tested silence',
  'No opinion of the drafting anywhere in it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their _do not rely on_ line only**, and the room says whether the reason given is enough to act on without checking.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the heading and the edition, where to go for each kind of thing, the _do not rely on_ with reasons, the definitions, the figures, the silence with a person, and what to ignore.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a heading with the date and the edition, a reason for every _do not rely on_, a person named for a tested silence, and no opinion of the drafting.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Say where your note will physically live and how many copies of the document exist.** ⚠ **Then say what you left out** — **and most of the class will have left out the same thing, which is what they think of the drafting.** Then the sentence the cycle ends on, which is Mr Barghouti\'s: **all of it is in my own file, which nobody opens, and in my head, which is on leave in August.**'));
out.push(hw('Write **the note for the next reader** for the longest document you work from, to the six-part order. ⚠ **Then do the physical part: put it inside the front cover, and count the copies.** **Bring the number of copies and the number of notes** — **and if those two numbers are not the same, say when they will be.**'));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: The reader of a long document and the person who wrote it'));
out.push(p('**Function:** mediating between a reader whose note is right and a drafter who cannot act on it   ·   **Recycling:** Unit 23   ·   **Exam practice:** B2 First Reading and Use of English Part 4 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 23 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** His annotate in the margin is dated July.  **2** The navigate of a long document takes ten minutes.  **3** A compile of eleven standards is not an index.  **4** The collate took the whole afternoon.  **5** The retrieve of one clause took forty minutes.  **6** An abridge of sixty pages is not a note.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the note, and what each side says about it.'));
out.push(box(null, [
  '**ONE NOTE, TWO ACCOUNTS** _(the reader and the drafter, five weeks apart)_',
  '**The note.** _"READ THIS FIRST. Eleven pages of the sixty do the work… If you are looking for when time starts, go to page 41, clause 14.3. Do not rely on page 2: page 2 says from the date of the order, 14.3 says from the possession certificate, and 14.3 governs — it is the operative clause and it was amended on 11 July while page 2 was not reprinted… One erratum line on page 2 would stop the next person doing what I did for four months."_',
  '**The reader.** _"It is two pages and it took an hour and the photocopying took the afternoon. Eleven copies, eleven notes, inside the front cover of each. Nobody in the office has used the wrong clause since."_',
  '**The drafter.** _"It is the best thing anybody has sent me in nine years and I cannot do the one thing he asks. Page 2 is the committee\'s words, decided in March. Clause 14.3 is the amendment the law required in July. I wrote both and they do not agree, and I am not permitted to alter page 2, because page 2 is a summary of a committee decision and the committee does not meet again until February."_',
  '⚠ **Both accounts are accurate and neither of them is about the note.**',
  '**And the thing a long document cannot do.** **It is written in layers by different hands at different dates** — **and it shows none of the dates, because every layer is printed in the same type as the others.**',
  '**The question for the cycle.** _Who can put a date against a clause?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a long document cannot show, and what is the one thing the drafter can do without the committee?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 23.13  Every layer in the same type', [
  ['Ms Huda', 'A note that does everything this unit teaches, and the one thing it asks for was refused. Mr Barghouti — is the note wrong?'],
  ['Adnan', 'No. ⚠ **I would write it again.** **And Mrs Tannous is right as well, and it took me three weeks to see why.**'],
  ['Ms Huda', '**Say her account in her words.**'],
  ['Adnan', '⚠ _Page 2 is the committee\'s words, decided in March, and I am not permitted to alter it._ **And the committee does not meet again until February.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the note is for from what its reader could do about it.** ⚠ Two: **find the thing the document cannot do.** Three: **say whether either party can supply it.**'],
  ['Dima', 'What is the note for?'],
  ['Adnan', '**Stopping eleven people in one office from advising on the wrong clause.** ⚠ **It did that.** **Nobody has used page 2 since September.**'],
  ['Ms Huda', '**And the thing the document cannot do?**'],
  ['Rim', '⚠ **Show its own dates.** **A long document is written in layers by different hands at different dates** — **and every layer is printed in the same type as the others, so a clause amended in July looks exactly like a recital written in 2009.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **Everything in this unit has taught you to find the dates** — **the amendment list, the editions, the later clause** — **and nothing in it has noticed that the reason you have to hunt for them is that the document hides them by being typeset.**'],
  ['Omar', '**And the amendment list exists.**'],
  ['Ms Huda', '**At page fifty-nine of sixty, and he had never opened it, and nor had anybody else in his office.** ⚠ **A list at the back is not a date against a clause.** **It is the same information in the place where nobody is when they need it.**'],
  ['Ms Huda', '**So what can be supplied, and by whom?**'],
  ['Jad', ' ⚠ **A date in the margin of every clause, and only the drafter can do it.** **Not a reprint of page 2, which needs the committee** — **a pencil date beside each clause number, which needs nobody.** **Eleven words of policy and an afternoon.**'],
  ['Ms Huda', '**And what can the reader supply?**'],
  ['Adnan', '⚠ **One sentence I had never thought to write.** _We relied on clause 14.3 on three contracts this year._ **She has never been told that anybody reads page forty-one at all** — **and she refused the erratum slip on the grounds that nobody reads that far.**'],
  ['Lubna', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks helpful.** ⚠ **Do not alter the document yourself, in pencil, in your own copy only** — **you will become the amendment list, and you are on leave in August.** **And do not write to the committee over the drafter\'s head: it takes until February and it costs you the only person who can date the clauses this month.**'],
  ['Adnan', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The reader\'s account is a description of a method and the drafter\'s is a description of a committee** — **and the second is harder to read aloud without sounding like an excuse.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the reader of a long document and the person who wrote it', [
  '**The three moves.** ⚠ **1 Separate what the note is for from what its reader could do about it.** **2 Find the thing the document cannot do.** **3 Say whether either party can supply it.**',
  '⚠ **The finding, and it is new: a long document cannot show its own dates.** **It is written in layers by different hands at different dates, and every layer is printed in the same type** — **so a clause amended in July looks exactly like a recital written in 2009.**',
  '**And the whole unit has been a set of methods for hunting the dates down.** ⚠ **The amendment list, the editions, the later clause, the revision number** — **and none of the five cycles noticed that the hunt is necessary only because the typesetting hides what the reader needs.**',
  '**An amendment list at the back is not a date against a clause.** ⚠ **It is the same information in the place where nobody is when they need it** — **page 59 of 60, which Mr Barghouti and his whole office had walked past for four months.**',
  '**What the drafter can supply, and only the drafter.** ⚠ **A date in the margin of every clause.** **Not a reprint of page 2, which needs the committee** — **a pencil date beside each clause number, which needs nobody.** **Eleven words of policy and an afternoon.**',
  '⚠ **And what the reader can supply, which he had never thought to write:** _we relied on clause 14.3 on three contracts this year._ **She has never been told that anybody reads page 41 at all** — **and she refused the erratum slip because nobody reads that far.**',
  '**Two things not to do, and the second looks helpful.** ⚠ **Do not amend the document in pencil in your own copy** — **you become the amendment list, and you are on leave in August.** **And do not write to the committee over the drafter\'s head: it takes until February and costs you the only person who can date the clauses this month.**',
  '**Pronunciation.** 🔊 **Track 23.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The reader\'s is a description of a method and the drafter\'s is a description of a committee** — **and the second is harder to read without sounding like an excuse.**',
  '**And one thing neither party can be blamed for, which is worth saying in the room.** ⚠ **The drafter cannot know which clauses are relied on and the reader cannot know which words are the committee\'s** — **so each of them is working from a document that conceals exactly the half the other one holds.**',
  '**And one sentence any reader of a long document can send tomorrow, which costs nothing.** ⚠ _We relied on clause 14.3 on three contracts this year._ **Thirteen words, and they tell the one person who can date the clauses that the back half of the document is read at all.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a note and two accounts of it, and does **not** show them. A reads the note, then both accounts. B makes the three moves: **what the note is for, the thing the document cannot do, and who can supply it.** ⚠ **In one of the two pairs the note is genuinely defective** — it is a four-page summary — **and B must say so rather than looking for a drafter.** Change roles with the other pair.'));
out.push(table(['Pair A – the conditions of contract', 'Pair B – the goods standard'], [
  ['_Working pages, do not rely on, figures, silence, what to ignore._', '_⚠ Four pages of summary and no page references at all._'],
  ['_Reader: "nobody has used the wrong clause since."_', '_Reader: "I wrote it out properly so people would not have to read it."_'],
  ['_Drafter: "page 2 is the committee\'s words and I cannot alter it."_', '_Drafter: "I have not seen it; I was sent a copy in April."_'],
  ['_⚠ The question: who can date a clause._', '_⚠ Not that question: a summary is a fifth document._'],
  ['_⚠ Answerable, by the drafter, in an afternoon._', '_⚠ The note is defective and the remedy is 23.6._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a date problem:** **a four-page summary with no page references is a fifth document**, and no margin date will mend it. **Two different faults, two different remedies** — **a date beside every clause number, and a set of instructions for a search written today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **a long document you work from** and do the three moves on it in writing. ⚠ **Say which of its pages you cannot date.** Then the question the cycle ends on: **has anybody ever told its drafter which clause you actually rely on?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what a long document cannot do:  _A note that does everything the unit teaches, and the one thing it asks for was refused. Asked whether the note is wrong, Adnan said no — he would write it again, and Mrs Tannous is right as well, and it took him three weeks to see why. Her account in her own words: page two is the committee\'s words, decided in March, and she is not permitted to alter it; and the committee does not meet again until February. So the mediation, in three moves: separate what the note is for from what its reader could do about it; find the thing the document cannot do; and say whether either party can supply it. The note is for stopping eleven people in one office from advising on the wrong clause, and it did that — nobody has used page two since September. The thing the document cannot do, Rim said, is show its own dates: a long document is written in layers by different hands at different dates, and every layer is printed in the same type as the others, so a clause amended in July looks exactly like a recital written in 2009. Which is the finding of the cycle and it is new — everything in the unit has taught the class to find the dates, and nothing in it noticed that the reason you have to hunt for them is that the document hides them by being typeset. Omar said the amendment list exists, and it does, at page fifty-nine of sixty, and nobody in his office had ever opened it: a list at the back is not a date against a clause, it is the same information in the place where nobody is when they need it. Jad said what can be supplied is a date in the margin of every clause, and only the drafter can do it — not a reprint of page two, which needs the committee, but a pencil date beside each clause number, which needs nobody. And Adnan said what he can supply is one sentence he had never thought to write: we relied on clause fourteen point three on three contracts this year._'));
out.push(p('**Listener task:** write the pages you cannot date, and whether anybody has told the drafter what you rely on.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 4)', 7));
out.push(p('For questions **1–6**, complete the second sentence so that it means the same as the first. **Use the word given and between two and five words, including the word given. Do not change the word given.**'));
out.push(box(null, [
  '**1**  Nobody in the office had ever opened page 59.   **BEEN**   Page 59 ______________________ by anybody in the office.',
  '**2**  He only found the clause after four months.   **TOOK**   It ______________________ to find the clause.',
  '**3**  It is impossible to tell a clause\'s date from the way it is printed.   **WAY**   There ______________________ telling a clause\'s date from the way it is printed.',
  '**4**  The committee will not meet again before February.   **UNTIL**   The committee ______________________ February.',
  '**5**  However careful the reader is, a summary is older than its clauses.   **MATTER**   ______________________ careful the reader is, a summary is older than its clauses.',
  '**6**  Her refusal of the erratum slip was based on the belief that nobody read that far.   **GROUNDS**   She refused the erratum slip ______________________ nobody read that far.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a reader and a drafter (80 words or more).'));
out.push(p('**ONE NOTE, TWO ACCOUNTS** · ______________   **The note.** _"______________"_   **The reader.** _"______________"_   **The drafter.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the note is for.** ______________. ⚠ **It did that.**   **The thing the document cannot do.** ⚠ ______________.   **Who can supply it?** ⚠ **______________, and only ______________.**   **What the reader can supply.** ⚠ **One sentence:** _"______________."_   **And what I am not doing.** ⚠ **Amending ______________ in my own copy**, and **writing to ______________ over ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What the note is for, separated from what the drafter could do',
  'The thing the document cannot do, named in one sentence',
  'Who can supply it, and what the reader can supply',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The essay, and the shape is the one you know: the question answered in the first sentence, both notes used with one developed further than the other, your own third point, and a conclusion that is not a summary.** **What Unit 23 adds is the finding of 23.7** — **so the third note can be the thing a long document cannot do, which is show its own dates.**',
  'In your English class you have been discussing long documents at work. Your teacher has asked you to write an **essay** answering this question:',
  '**Should long official documents be written so that nobody has to read all of them?**',
  '**Notes.** Write about: **1** the reader\'s time   **2** the risk of missing something   **3** ______________ _(your own idea)_',
  'Write your **essay** in **140–190 words.**',
  '⚠ **Both given notes, or the content mark goes.** **And the third note is where the marks are** — **a third point taken from the unit** _(the amendment list at page 59, the summary older than its clauses, the silence somebody has been filling at the gate)_ **is worth more than a general observation about bureaucracy.**',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 23 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  His ___ in the margin is dated July and is the only date on the page.   a) annotation   b) annotate   c) annotating',
  '2  ___ of a sixty-page document takes about ten minutes if you know where to look.   a) Navigate   b) Navigating   c) Navigation',
  '3  A ___ of eleven standards in one binder is not an index.   a) compile   b) compilation   c) compiling',
  '4  The ___ of four months of call logs took the whole afternoon.   a) collate   b) collation   c) collating',
  '5  ___ of one clause from sixty pages took him forty minutes.   a) Retrieval   b) Retrieve   c) Retrieving',
  '6  An ___ of sixty pages is not a note for the next reader.   a) abridge   b) abridging   c) abridgement',
  '7  His ___ of the clause was correct and his reading of page 2 was out of date.   a) comprehend   b) comprehension   c) comprehending',
  '8  The ___ of the pencil date in the margin is the only thing anybody objected to.   a) legible   b) legibly   c) legibility',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 3 style – multiple matching).** 🔊 **Track 23.15** You will hear five people talking about working from a long document. For questions **1–5**, choose from the list **A–H** what each speaker says. **Use each letter once only. There are three extra letters you do not need.**'));
out.push(box(null, [
  '**A**  I had read every one of the figures and never seen two of them together.',
  '**B**  I found that I had been the rule for a year without knowing it.',
  '**C**  I wrote a summary and nobody used it.',
  '**D**  I came out knowing everything except the thing I went in for.',
  '**E**  I could not make the change that was asked for, and the request was right.',
  '**F**  I read the document from the beginning every time.',
  '**G**  I keep the note in a file where nobody looks.',
  '**H**  I asked for a reprint and was given one.',
  '',
  '**Speaker 1**  _______   **Speaker 2**  _______   **Speaker 3**  _______   **Speaker 4**  _______   **Speaker 5**  _______',
], C.grey, C.navy));
out.push(dlg('Track 23.15  Audio script (read after the check)', [
  ['Speaker 1', '**Woman.** Twenty-two minutes, and it found more than four months of reading had. I put every period in the thing into one column, by kind and not by page — eleven of them, and two will not go together. And what I want to record is that I had read every one of those clauses, some of them many times. I had simply never seen two of the figures on the same page, because nothing in a document of that length ever puts them there.'],
  ['Speaker 2', '**Woman.** It is silent on a load that is refused and brought back in the same week. Four times last year. And when I was asked who had decided those four, the answer was me, at the gate, on the day — and not on the same basis each time. In January I treated it as a fresh consignment and in March as a continuation, and I cannot give you a reason beyond the time of day. I had been the rule for a year and I did not know it.'],
  ['Speaker 3', '**Man.** Four pages, and I was rather pleased with it. Nobody opened it twice. I understand why now: a summary is a fifth document, so the reader goes through mine and then goes through the original anyway, because they have no way of knowing whether to trust me. What they wanted was not a shorter version. It was a set of instructions — if you want this, go to page forty-one.'],
  ['Speaker 4', '**Woman.** His note is the best thing anybody has sent me in nine years and I cannot do the one thing in it that he asks for. The page he wants corrected is a summary of a committee decision and the words are the committee\'s, not mine. I drafted both halves and they do not agree. The committee does not sit again until February, and I was not told until last month that anybody reads as far as page forty-one at all.'],
  ['Speaker 5', '**Man.** Forty minutes before the bulletin closed, and I opened it with no question at all. I came out knowing a great deal about the machine — the humidity warnings, the parts numbering, a clearance figure that does not match our bench — and nothing whatever about the stock, which is what I had gone in for. An interesting clause feels like progress. That is the trouble with it.'],
]));
out.push(p('**C  Writing.** Write the essay (140–190 words): the question answered in the first sentence, both notes used, your own third point, and a conclusion that is not a summary.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 23)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ spend ten minutes finding which pages of a long document do the work',
  '☐ open a document with a two-clause question and read it back',
  '☐ report a contradiction with both sentences, two reasons and a figure',
  '☐ tell a tested silence from an untested one, and name who has been filling it',
  '☐ list every figure of one kind and find the pair that will not reconcile',
  '☐ write the note for the next reader, and put it inside the front cover',
  '☐ say what a long document cannot do, and who can supply it',
  '☐ tell a drafter which clause I actually rely on',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _wade through · skip over · pick out · flick through · dip into · plough through · pore over · home in on · fasten on · leaf through · turn up · tally with_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 23.7 draws on this)_: _annotate → **annotation** · navigate → **navigation** · compile → **compilation** · collate → **collation** · retrieve → **retrieval** · abridge → **abridgement** · comprehend → **comprehension** · legible → **legibility** · cumulative → **cumulatively**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 23 · Student\'s Book');
