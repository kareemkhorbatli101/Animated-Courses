// Proactive English B2 · Syria Edition · Book 2 · Unit 18 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 18  Summarising at Length — Answer Key'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '⚠ **The title is the argument and the class should be given it on the first evening.** **A faithful summary is usually longer than the one people write**, because the part that matters needs its figure, its interval and its source — **and the unit is against brevity as a virtue from 18.1 onwards.** **Students arrive believing that summarising means shortening; every cycle contradicts that, and 18.6 produces a page longer than the one it replaces.**',
  '**Ask the class to bring three things.** ⚠ **A long document and the one-page version somebody made of it** _(18.1)_. **The minutes of a meeting they attended** _(18.3)_. **And one figure they have seen rounded in a summary** _(18.4)_.',
  '⚠ **Miss Sweidan carries the unit and the cost is hers.** **A forty-two page conservation report, one sentence left off page thirty-one, and a plastering contract let on a wall that is moving.** **Every sentence on her page was true** — **and the key insists on that repeatedly, because a class that hears this as carelessness will resolve to be more careful and will make the same page again.**',
  '**18.7 carries the examination papers.** **Reading and Use of English Part 2** is open cloze, **Writing Part 2** is an article, and **Listening Part 2** is sentence completion.',
  '⚠ **And this unit closes the first half of the book.** **The Mid-Book Test follows it and draws on 13 to 18.** **Leave a week between 18.7 and the test if you can; the examination parts taught so far are six of the seven Reading parts and all four Listening parts, and the class will want the practice more than the revision.**',
], C.lblue, C.navy));

// ===================== 18.1 =====================
out.push(pb());
out.push(h2('18.1  The part that cannot go'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The answer to B\'s question is _nothing_ in most pairs, and that is the finding of the first six minutes.** **Collect four summaries and ask the room what it would now do differently; write the answers on the board, and three of the four will be blank.** **Do not explain anything yet.**'));
out.push(A('**b** Names the load-bearing part: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is the one to read twice** — _the report covers the history, the materials and the costs_ — **because it is a table of contents and the room will defend it as a summary.** **5 is the commonest sentence in working life and it names nothing at all.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **not a shorter version but a version with the load-bearing part kept**; and the test is **to read it to somebody who will act and ask what they would now do.**'));
out.push(A('**b** **1** ⚠ **One sentence from page thirty-one:** _the north wall is moving and has moved eleven millimetres since March._ **The committee approved a plastering contract, which goes on the inside face of the north wall.**   **2** ⚠ **Almost never the longest part and almost never the first finding** — **forty-two pages, one sentence on page thirty-one.**'));
out.push(NOTE('⚠ **The whole unit depends on the class not hearing 18.1 as a story about carelessness, so say the opposite early and twice.** **Every sentence on Miss Sweidan\'s page was true, the page was proportionate, and she did it in an evening and was pleased with it.** ⚠ **A class that hears carelessness resolves to be more careful, which changes nothing** — **the page was not under-checked; it was built by the wrong rule.** **Put the rule itself on the board** _(keep everything in proportion to how much of the document it occupies)_ **and leave it there until 18.2 replaces it.**'));
out.push(NOTE('**The mechanical test is the practical content of the cycle and it must be done out loud at least three times.** ⚠ **Take each finding and ask: if the reader did not know this, what would they do that they should not do?** **Most findings produce no answer at all, and that is the point** — **the test is useful because it mostly returns nothing.** ⚠ **Expect two objections.** **The first: _but everything matters._** **Answer it with the arithmetic: forty-two pages produced exactly one sentence that changed an act.** **The second: _the author should have flagged it._** **He should, and he did not, and that is in the model page** — **but a summariser who waits for authors to flag things will write the February page every time.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a report)_ _The one thing in it that changes what you do: the certificate expired in January, so the rest of the file is not read._',
  '**2** _(a meeting)_ _If you read nothing else: the February order was not decided, and the stores clerk thinks it was._',
  '**3** _(nothing load-bearing)_ ⚠ _Every figure in the annual review is within range and there are no exceptions. Nothing here changes what anybody does._',
  '**4** _(with a second clause, so that you hear it)_ ⚠ _The wall has moved eleven millimetres since March, and of course the roof is in good condition_ — **and the room remembers the roof.**',
  '**5** _(load-bearing on the last page)_ _The one thing here is on page thirty-one of thirty-two: the supplier was in liquidation in March._',
]));
out.push(A('⚠ Item **3** is the one to insist on: **a summary whose honest answer is _nothing changes_ is a good summary and students will not write it**, because it feels like admitting the work was wasted. **It saves the reader the whole document.** Item **4** is said aloud by its author and the room reports what it remembers — **the second clause, every time.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Conservation report, 42 pp: history, materials, costs, and a wall moving 11 mm._',
  '**B** **The one thing in it that changes what you do: the north wall has moved eleven millimetres since March.** **Without it you would let a contract that fixes plaster to that wall.**',
  '**A** _(the ⚠ row)_ _Annual review, 18 pp: everything within range, no exceptions._',
  '**B** ⚠ **There is nothing load-bearing in it, and that is the summary.** _Everything within range, no exceptions; nothing here changes what anybody does._ ⚠ **And I shall not promote the most interesting finding to fill the space.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The load-bearing part for each, and what the reader would otherwise do. ⚠ **The four ⚠ rows have nothing load-bearing in them** — **everything is as expected, and the honest summary says so in one line.** **A pair that promotes the most interesting finding has invented a load-bearing part**, which is harder to catch than leaving one out: **the page looks exactly like a good one.** **Ask the listeners the same question of every row:** **what act does this prevent?**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**The load-bearing sentence:** the relief clerk filled the consignment forms for the two weeks of August, and eleven of the nineteen refusals last year fall in those two weeks._ ⚠ _**The act it prevents:** writing to the suppliers about their paperwork, which is what the section was about to do._',
  '**b** ⚠ _**My partner added:** _…and the rest of the year is well within the limit._ **I would act on the first.** **The second sounds like a page that has nothing to report** — **and it is the same sentence with four seconds of comfort on the end of it.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna summarised a forty-two page conservation report into one page, for a committee of five who had not read it and were not going to. She did the page in an evening and was proud of it: the history, the materials, the photographs, the condition of the roof, and the costs in three columns — everything the report spent forty pages on, in proportion. What was not on it was one sentence from page thirty-one: the north wall is moving and has moved eleven millimetres since March. The committee approved a plastering contract, which goes on the inside face of the north wall. So the summary was accurate, proportionate and complete, and it produced the one decision the report existed to prevent, which is the unit in one page: a summary is not a shorter version of a document, it is a version with the load-bearing part kept. Omar asked how you find one sentence in forty pages, and mechanically, and it is slow the first time: take each finding and ask what the reader would do, not knowing this, that they should not do. Most findings produce no answer, and the one that produces let a plastering contract is the load-bearing part. Adnan said that is a reader’s question and not a writer’s, and it is the reader’s question, and that is the point: a summary written from the document is a précis, and a summary written from the reader’s next act is a summary. Rim asked about the test afterwards, which is to read your summary to somebody who will act and ask what they would now do — and if their answer is what they were going to do anyway, the load-bearing part has gone, and they will not know it is missing, because nothing on the page looks absent. Hiba asked whether it goes first, and first, in its own sentence, with its figure and its date on it. And Mazen asked about reading it out: the load-bearing sentence with nothing after it, because everybody adds a second clause and the second clause takes the first one back in weight.']));
out.push(A('Listener task: the partner\'s load-bearing sentence and the act it prevents. ⚠ **Collect the acts, not the sentences.** **A load-bearing sentence with no act beside it has not been tested**, and about a third of any room produces one: **the student has chosen the most important-sounding finding rather than the one that changes anything.** **The remedy is one question, asked in public:** **who was about to do what?**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _The report covers the history and the costs._ → **✓** the one thing that changes what you do.   **✗** _A great deal of interesting material._ → **✓** a finding, with its figure.   **✗** _There are some concerns about the wall._ → **✓** eleven millimetres since March.   **✗** The load-bearing sentence fourth. → **✓** first, in its own sentence.   **✗** A second clause on the end. → **✓** say it and stop.   **✗** Promoting the most interesting finding. → **✓** nothing here changes what anybody does.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **She kept everything in proportion to how much of the report it occupied** — **four pages on the roof became four lines, and twelve pages of history became twelve.** **It is the wrong rule because the report gave the wall one sentence out of forty-two pages, so she gave it nothing out of one page.** **And the sentence to put on the board is hers:** _proportion is the wrong rule and I had been taught it as the right one._'));
out.push(A('**2** ⚠ **The plastering contract, which goes on the inside face of the north wall and will have to come off again** — **two and a half million pounds, and about three weeks of a plasterer\'s time.**'));
out.push(A('**3** ⚠ **The author had not flagged it either:** **it sits between a paragraph on lime plaster and a paragraph on the window reveals, in the same type, with no heading** — **and _somebody who reads forty-two pages properly finds it; nobody reads forty-two pages properly._** **At the top of her next page goes the load-bearing sentence in full:** _the one thing in this report that changes what you do: the north wall has moved eleven millimetres since March, and nothing should be fixed to it until it has been surveyed_ — **thirty-one words, and then the history, the materials and the costs, at whatever length.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**PAGE SIX** · T. Ayoub · 12 May · _for the depot office_',
  '**I summarised the eleven-page gate instruction into half a page for the drivers and two of them were turned back in April.** ⚠ **Every sentence on my half-page was accurate.**',
  '**What I put on it.** **The hours, the documents to carry, where to park, and whom to ask for.** ⚠ **In proportion to the instruction: three pages on parking became three lines.**',
  '**What I left off.** ⚠ _Loads above four tonnes require the weighbridge ticket from the sending depot._ **One sentence on page six of eleven.**',
  '**What the drivers then did.** ⚠ **Arrived without the ticket and were turned back** — **two of them, about nine hours between them, and one load that spoiled.**',
  '**Why I left it off.** ⚠ **Because I was summarising the instruction and not the journey.** **The instruction gave the weighbridge one line out of eleven pages, so I gave it nothing out of half a page.**',
  '**The rule I had been following.** ⚠ **Keep it in proportion.** **Proportion is the wrong rule.**',
  '**And the office\'s share, which is true and is not an excuse.** ⚠ **The sentence is in a paragraph headed _Parking and Access_.**',
  '**What goes at the top of the next one.** ⚠ _If your load is above four tonnes you need the weighbridge ticket from the sending depot; without it you will be turned back._',
]));
out.push(S('Stage 7 · Write freely (sample, 206 words)'));
out.push(SAMPLE([
  '**PAGE THIRTY-ONE, AND MINE WAS PAGE TWO** · R. Shaaban · 14 May · _for the gate, and for whoever writes the next note_',
  '**In January I cut the thirty-page storage standard down to two pages for the gate staff, and in March four pallets were accepted that should have been refused.** ⚠ **Every sentence on my two pages was accurate.**',
  '**What I put on them.** **The temperature range, the humidity range, the stacking heights, the seal check, and the form.** ⚠ **In proportion to the standard: six pages on stacking became six lines, and one line on excursions became one line.**',
  '**What I left off.** ⚠ _An excursion of more than ten degrees above the range, for more than two hours, requires the consignment to be held and referred._ **It is one sentence on page twenty-two of thirty.**',
  '**What the gate then did.** ⚠ **Accepted four pallets that had been eleven degrees over for four hours**, **because my two pages told them to check the temperature and not what to do when it was wrong.** **The four pallets are still in the cold store and nobody will sign for them.**',
  '**Why I left it off.** ⚠ **Because I was summarising the standard and not the gate.** **The standard is written for the people who argue about the rules; the gate has forty seconds and a lorry.**',
  '**The rule I had been following.** ⚠ **Keep it in proportion to the document.** **It is the wrong rule and I had been proud of how faithful my two pages were.**',
  '**And the standard\'s share, which is true and is not an excuse.** ⚠ **The sentence is in a section headed _Definitions_.**',
  '**What goes at the top of the next version.** ⚠ _If a reading is more than ten degrees out for more than two hours, hold the consignment and telephone me. Everything else on this page is a check you already do._',
]));
out.push(A('**206 words, the accuracy conceded in the second sentence, the omitted sentence quoted with its page out of thirty, the gate\'s act priced in pallets nobody will sign for, and the rule named and corrected.** ⚠ **The sentence that earns the band is _the standard is written for the people who argue about the rules; the gate has forty seconds and a lorry_** — **it explains the whole failure as a difference of readership and not of care.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the rule named, and corrected in one line.** _"Keep it in proportion to the document. It is the wrong rule."_ ⚠ **Named and corrected in eleven words.** **Mine says _I should have thought about the reader more_**, which is a resolution and not a rule, and nobody can apply it tomorrow.',
  '**One thing to keep, and why it works.** _"my two pages told them to check the temperature and not what to do when it was wrong"_ **It is the exact shape of the hole**, and I have the same hole in a page about seals.',
  '**Ranking of the slip I was given.** **1** the rule named and corrected **2** the omitted sentence quoted with the arithmetic **3** the act priced **4** the accuracy conceded _(conceded, and in the right place, and the easiest of the four)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The load-bearing sentence, then the same sentence with a second clause attached.** **The room says which it would act on and then what it remembers** — **and it remembers the second clause.** **That is the cheapest thirty seconds in the unit.** **Finish on Miss Sweidan\'s sentence:** **proportion is the wrong rule and I had been taught it as the right one.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The mechanical test on my last summary:** eleven findings, and ten of them produce no answer at all._',
  '⚠ _**The one that does:** the relief clerk filled the forms in August. **Without it the section writes to the suppliers.**_',
  '_**And where it was on my page:** the seventh line of nine. ⚠ **It is now the first, and the page is one line shorter, because the sentence it displaced was _the rest of the year is within the limit_, which is band three.**_',
]));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  The order, not the proportion'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The two markings disagree on about half the sentences in most pairs, and the disagreement is the finding.** **A sentence whose band two readers cannot agree on has no band on the page** — **and the whole of 18.2 is about putting the band on the page rather than in the writer\'s head.**'));
out.push(A('**b** Band labels: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **3 is the near miss and half the room will take it** — _in order of importance_ — **because it describes an order without declaring one.** **A reader cannot tell where importance stops.** **5 is a band three that has become a promise to reproduce the document.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **what changes the decision · what must be checked before acting · what can be ignored**; and **the third is one sentence and never a list.**'));
out.push(A('**b** **1** ⚠ **Four thousand words arrive and she has three hundred** — **twice a week, for six years.**   **2** ⚠ **Then it is band one, and the rule should be written on the wall.** **Promoting a sentence costs the reader four seconds; demoting one cost a plastering contract.**'));
out.push(NOTE('⚠ **Band three is the part of this cycle that is not believed, so give it the arithmetic rather than the principle.** **Mrs Khoury used to spend ninety of her three hundred words saying what the rest of the submission contained** — **thirty per cent of the page, on a list of what does not matter.** **And the fatal property is in the model page:** ⚠ **a reader cannot tell a long band three from a short band one.** **Which means the ninety words did not merely waste space; they disguised the thing the page was for.** **Make the class count their own band three at Stage 4a** — **in most first attempts it is between a third and a half of the page.**'));
out.push(NOTE('**The promotion rule is the practical heart of the unit and it is asymmetric, which is why it works.** ⚠ **If you cannot tell whether something is band one or band two, it is band one.** **Promoting costs the reader four seconds of reading; demoting cost a committee a plastering contract.** ⚠ **Expect a student to object that promoting everything produces a band one of eleven items.** **The answer is that it does not, because the mechanical test of 18.1 keeps almost everything out of band one altogether** — **the doubtful cases are two or three a document, not eleven.** **If a student genuinely has eleven, they have not done 18.1 and should go back to it.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(a report)_ **What changes the decision:** _the certificate expired in January._ **Before you act, check:** _whether a renewal has been lodged since._ **Nothing else here alters it.**',
  '**2** _(a meeting)_ **What changes the decision:** _the February order was not decided._ **Before you act, check:** _whether the stores clerk has already placed it._ **Nothing else here alters it.**',
  '**3** _(band one empty)_ ⚠ **Nothing here changes the decision.** **Before you act, check nothing.** _Every figure is within range and the next review is in June._',
  '**4** _(band three as a list, and the repair)_ ⚠ _Also covered: the roof, the reveals, the lime plaster, the history, the costs…_ → _Nothing else here alters the decision._',
  '**5** _(cannot tell one from two)_ ⚠ _The October levels were taken by somebody not named._ **Promoted: it is band one, because if nobody took them the figure is not a figure.**',
]));
out.push(A('⚠ Item **4** is marked by counting: **the repair is six words and the list was twenty-two**, and the room should see both. Item **3** is the one students resist writing and it is the most useful page in any office — **a summary that honestly reports an empty band one saves the reader the document.** ⚠ **Item 5 is marked on the reason and not on the promotion:** _it is band one because if nobody took them the figure is not a figure_ **is a reason; _to be safe_ is not.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Wall moved 11 mm · levels taken in March · roof sound · costs in three columns._',
  '**B** **What changes the decision: the wall has moved eleven millimetres.** **Before you act, check when the levels were taken and by whom.** **Nothing else here alters it.**',
  '**A** _(the ⚠ row)_ _Seal lifted once · nine good runs · the ninth run was the longest._',
  '**B** ⚠ **Promoted.** **What changes the decision: the seal lifted on the ninth run, which was the longest** — **so it may be a run-length fault and not a single lift.** **Before you act, check the length of the other eight.** **Nothing else here alters it.** ⚠ **I nearly put the run length in band two, and then the seal is an accident rather than a pattern.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three bands for each, and which finding was promoted. ⚠ **The four ⚠ rows each hold something a careful reader could put in either of the first two bands** — **and the rule is to promote it.** **Ask the listeners what promoting cost** — **four seconds** — **and then what demoting the wall cost.** **The asymmetry is the argument and it does not need stating twice.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Banded.** **Band one:** the relief clerk filled the forms in August. **Band two:** whether the August forms were ever re-checked; who signed them. **Band three:** _nothing else here alters the decision.__ ⚠ _**Words taken out of band three: 141 of a 310-word page.** **Nearly half.**_',
  '**b** ⚠ _**We disagreed on three sentences.** **All three were ones I had thought were obviously band two** — **and none of them had a label on it, because I had written the labels only in front of bands one and three.** **The band is on the page or it is nowhere.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Dima cuts other people’s writing for a living: four thousand words arrive and she has three hundred, twice a week, for six years. She used to keep things in proportion — a quarter of the submission on costs, so a quarter of her three hundred on costs — which produces a page that is a map of the submission, and nobody wants a map of the submission. Now she uses three bands and writes the labels on the page: what changes the decision, what has to be checked before anybody acts, and what can be ignored. The third is the one nobody believes: what can be ignored is one sentence — nothing else here alters the decision — six words at the end. Omar said surely you have to say what the rest was, and that is exactly what she used to do and it took half her space: a list of what does not matter is the commonest way of hiding what does, and a reader cannot tell a long band three from a short band one. Which is the test for the whole page — can the reader tell which band each sentence is in? If they cannot, every sentence is band two, and a page of band two is a document the reader has to read all of, which is what they came to you to avoid. Adnan said band two is the one he would get wrong, and it holds only what has to be true before the reader acts: the date of the survey, who took the levels, whether the certificate is current. Two or three things, each a clause — and if band two runs to eight items, some of them are band three and you have not decided. Rim asked what to do when you cannot tell whether something is one or two, and then it is band one, and that rule should be written on the wall: promoting a sentence costs the reader four seconds, and demoting one cost Lubna a plastering contract. Lubna asked whether the labels go on the page in those words, and on the page, in those words, every time — a reader who has seen the three labels once reads the next page in about eleven seconds, and the labels are what make the page shorter, not the cutting. And Mazen asked about saying the labels out loud, which is as labels and not as sentences — a short fall, then a stop.']));
out.push(A('Listener task: how many of the partner\'s sentences the two of them put in different bands. ⚠ **Collect the numbers and write the total on the board.** **A room that disagrees on a third of its sentences has just measured how much of its summarising lives in the writer\'s head** — **and the remedy is mechanical, not a matter of judgement: print all three labels.** **Then ask how many students had printed only the first.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _In order of importance._ → **✓** the three labels, printed.   **✗** A band three of twenty-two words. → **✓** nothing else here alters it.   **✗** Eight items in band two. → **✓** two or three, each a clause.   **✗** Band two first because it is urgent. → **✓** band one first, always.   **✗** Promoting _to be safe_. → **✓** with a reason.   **✗** Labels in the writer\'s head. → **✓** on the page, in those words.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **A map of the submission.** **She calls the page useless because a reader who wanted to know what to do had to read all of it and then decide for himself** — **which is what he had sent the submission to her to avoid.** **The page was faithful and it was useless, and both halves are in one sentence.**'));
out.push(A('**2** ⚠ **A proportioned three hundred takes a reader about ninety seconds and leaves him to decide; a banded three hundred takes eleven seconds if he stops after band one, which he usually should.** **Same words, same facts.** **And then the multiplication:** **eighty seconds, times about four hundred readers, times twice a week.**'));
out.push(A('**3** ⚠ _If you cannot tell whether it is band one or band two, it is band one._ **And what she has not solved: contributors hate it** — **a banded summary shows which four lines of their four thousand words mattered, and eleven of them have said so.** **Her answer is that the page is for the reader and not for the writer**, **which she says is true and does not make it comfortable.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FOUR HUNDRED WORDS, THREE BANDS** · O. Darwish · 16 May · _for the eleven site managers_',
  '**For three years I wrote the monthly fault page in proportion, and I am going to describe what that produced.** ⚠ **It produced a map of the month.**',
  '**What proportion does.** **Half the faults were printers, so half the page was printers.** ⚠ **The page was faithful and it was useless** — **a manager who wanted to know whether to do anything had to read all four hundred words and decide for himself.**',
  '**What I do now.** ⚠ **_What changes the decision_** — **one line, with the model and the count.** **_Before you act, check_** — **two clauses.** **_Nothing else here alters it_** — **one sentence.**',
  '**The band that cost me the most to learn.** ⚠ **The third.** **I used to list every fault closed, which was most of the page and told nobody anything.**',
  '**The arithmetic.** ⚠ **The old page took a manager about two minutes.** **The new one takes about fifteen seconds if he stops after band one.** **Same facts, times eleven managers, times twelve months.**',
  '**And the rule above my desk.** ⚠ _If you cannot tell whether it is band one or band two, it is band one._',
  '**One thing I have not solved.** ⚠ **Two of the managers ask me for the old page.** **They want to know everything that happened, and the new page does not tell them** — **and I have no answer except that it is not what the page is for.**',
]));
out.push(S('Stage 7 · Write freely (sample, 201 words)'));
out.push(SAMPLE([
  '**THIRTY PAGES, TWO PAGES, THREE BANDS** · R. Shaaban · 18 May · _for the two of us who write the gate notes_',
  '**For four years I cut standards down for the gate by proportion, and none of us was taught anything else.** ⚠ **It produced a map of the standard.**',
  '**What proportion does.** **The standard spends six of its thirty pages on stacking, so I gave stacking six of my sixty lines.** ⚠ **The two pages were faithful and they were useless at the gate** — **a man with forty seconds and a lorry had to read sixty lines and work out which of them applied to the load in front of him.**',
  '**What I do now, and the labels are printed.** ⚠ **_What changes the decision_** — **the holds and the refusals, with their figures.** **_Before you act, check_** — **two clauses, and never more.** **_Nothing else here is a check you already do_** — **one sentence.**',
  '**The band that cost me the most to learn.** ⚠ **The third.** **I used to spend half the note describing the ranges, which the gate knows** — **and a reader cannot tell a long band three from a short band one, so the half-page of ranges hid the one line about excursions.**',
  '**The arithmetic.** ⚠ **The old note took a man about three minutes and he read it once, in January.** **The new one takes about twenty seconds and he reads it at the lorry.** **Same facts, times about nine loads a day.**',
  '**And the rule above my desk.** ⚠ _If you cannot tell whether it is band one or band two, it is band one._',
  '**One thing I have not solved.** ⚠ **The gate now has a note that does not teach anybody the standard.** **A man who has only ever read my band one does not know why the ranges are what they are** — **and the day something happens that is not on my page, he has nothing.**',
]));
out.push(A('**201 words, the old method given its due in the same sentence, the three labels printed in her own words, the saving in the reader\'s seconds and then multiplied, and an unsolved cost at the end.** ⚠ **The strongest line is the unsolved one** — **a man who has only ever read my band one does not know why the ranges are what they are** — **because it is the real price of the method and no cycle in this unit answers it.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the saving in the reader\'s seconds, multiplied.** _"about twenty seconds and he reads it at the lorry… times about nine loads a day"_ ⚠ **Seconds, and then a multiplier that is the reader\'s own work.** **Mine says _it saves a lot of time_**, which is an opinion with a number missing.',
  '**One thing to keep, and why it works.** _"a reader cannot tell a long band three from a short band one"_ **It is the reason band three must be one sentence**, and I had been treating that as a style rule.',
  '**Ranking of the slip I was given.** **1** the saving multiplied **2** the unsolved cost **3** the labels printed **4** the old method given its due _(given, in six words, and the easiest of the four)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The three labels as labels, then the first one as a sentence.** **The room says at which version it stopped hearing the structure** — **and it is the sentence version, because a label inside a clause is no longer a label.** **Finish on Mrs Khoury\'s sentence:** **ninety words buys nothing and hides everything.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Banded the one-page version I brought.** **Band three was 141 words of 310.**_',
  '⚠ _**Written as one sentence it is six words**, which gives me 135 words back on a one-page summary._',
  '_**And what I did with them:** nothing. ⚠ **The page is now 175 words and it is finished.** **I had assumed I would need the space for something.**_',
]));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  Ninety minutes in six lines'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The ratio is worse than twenty to one in most sets of minutes, and in two or three there is no decision in them at all** — **which is the more useful finding and should be collected separately.** **Write the two worst ratios on the board with no names.**'));
out.push(A('**b** Decision lines: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **5 is the one the room will argue about** — _the committee noted the report with thanks_ — **because something clearly happened.** **Ask what act follows from it; nothing does.** **3 records that a decision was avoided and does not say when it will be taken, which is 4 with its useful half removed.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **minutes are for people who were not there**; and the sixth line is **what the time was actually spent on, if it was not any of the first five.**'));
out.push(A('**b** **1** ⚠ **Nineteen hundred words, sixty of them the decision.**   **2** ⚠ **The meeting being held again.** **A reader who cannot tell what was left open assumes everything was settled, and then somebody acts on the thing nobody decided.**'));
out.push(NOTE('⚠ **The sentence that settles this cycle is Mr Barghouti\'s and it should be written on the board before the six lines are given:** **minutes are for people who were not there.** **The people who were there do not need them.** **Everything else follows** — **the decision quoted, the authority bracketed, what was not decided, the route for disagreement.** ⚠ **And the sixth line is the one a class will not believe it is allowed to write.** _Fifty of the ninety minutes went on the car park, and it changed nothing._ **Give them the outcome rather than the permission: he wrote it twice and the car park came off the standing agenda, which four years of complaining in the room had not achieved.** **The complaint was in the meeting; the line was in front of the people who set the agenda.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(quoted, with authority)_ _Decided: the January print order goes to Dar al-Kutub at the quoted price. (Mr Saqqal, under the delegation of 11 March 2023.)_',
  '**2** _(who acts, by when)_ _Placed by 20 May, by the stores clerk, on the standard order form._',
  '**3** _(not decided)_ ⚠ _Not decided: the February order. Raised and dropped for want of the budget line. On the agenda for 5 June._',
  '**4** _(what the time went on)_ ⚠ _Fifty of the ninety minutes went on the car park. It changed nothing and it is on the standing agenda._',
  '**5** _(cannot write line one)_ ⚠ _I cannot write what was decided. Can somebody give me the sentence?_ **Said in the room, before anybody left.**',
]));
out.push(A('⚠ Item **5** is the item to collect and the hardest to get students to say, because it looks like an admission of not having followed. **It is the opposite: the alternative is minutes that invent a decision, which will be acted on.** Item **3** is marked on the two dates — **the meeting and the thing the meeting needs** — **and a single date is a promise about a meeting rather than about the work.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _90 min: car park 50, January order 12, February order raised and dropped._',
  '**B** **Decided: the January order goes to Dar al-Kutub at the quoted price. (Mr Saqqal, under the 2023 delegation.) Placed by 20 May by the stores clerk. Not decided: the February order; on the agenda for 5 June. If you disagree, write by 16 May. Fifty of the ninety minutes went on the car park and it changed nothing.**',
  '**A** _(the ⚠ row)_ _75 min: four views on the new form, no vote, chairman away._',
  '**B** ⚠ **Line one is _not decided_, and I said so in the room:** _I cannot write what was decided; is there a sentence?_ ⚠ **There was not.** _Not decided: the new form. Four views recorded, no proposal put, chairman absent. To be taken when he returns._ **And line six: seventy-five minutes, and nothing was put to the meeting.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The six lines for each meeting, and whether line one is a decision. ⚠ **The four ⚠ rows produced no decision at all**, and the honest line one is _not decided_ with a date. **A pair that writes a decision for one of those four has produced the worst document in the unit** — **minutes that invent a decision, which somebody will act on.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Original: 1,240 words. My six lines: 118.**_ ⚠ _**And the decision in the original is 34 words**, which I found in the fourth paragraph of the third page, after two pages of who said what._',
  '**b** ⚠ _**With the discussion attached:** _after a full discussion in which several views were expressed, it was agreed that…_ **My partner said she stopped attending at _full_.** **Which is the fourth word.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Adnan has taken minutes for nineteen years, and he counted a set: nineteen hundred words, sixty of them the decision. The other eighteen hundred and forty were the discussion — who said what, in the order they said it, with nothing left out, because that is what he was taught minutes were. Asked who reads minutes, he said people who were not there, which he had never said to himself in nineteen years: the people who were there do not need them. That one sentence settles the whole cycle — minutes that record the discussion are a transcript, and a transcript is read by nobody, while minutes that record the decision are read by people who have to act on it and were not in the room. Omar asked what goes in, and six lines, each with one job: what was decided, in the words of the decision, quoted; by whom, and under what authority; by when, and who acts. Dima asked about the other three, and four is what was not decided and when it will be, five is what a reader should do if they disagree, and six is what the time was actually spent on if it was not any of the first five. Rim said the fourth was new to her, and it is the line that prevents the meeting being held again: a reader who cannot tell what was left open assumes everything was settled, and then somebody acts on the February order, which nobody decided. Not decided: the February order, on the agenda for 5 June — twelve words. Adnan said the sixth is the one he cannot believe he is allowed to write, and fifty of the ninety minutes went on the car park and it changed nothing is true, useful, and the only line in any set of minutes anybody reads twice. Hiba asked what happens if you cannot write the first line at all, and then you say so before the room disperses — I cannot write what was decided, can somebody give me the sentence? Nine words, and the alternative is minutes that invent a decision, which is the worst document in the unit because it will be acted on. And Mazen asked about reading the decision out, which is done with no discussion attached.']));
out.push(A('Listener task: the partner\'s line one, line six, and the two word-counts. ⚠ **Collect the line sixes and read six of them out.** **In most rooms two or three are the kind that would change an agenda** — **a standing item that changed nothing, a figure that was waited for and never came, an argument that had been had in March.** **Ask those students one question: who sets your agenda, and have they seen that line?**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _A wide-ranging discussion of the car park._ → **✓** fifty of the ninety minutes, and it changed nothing.   **✗** _It was felt that._ → **✓** decided, or not decided.   **✗** A decision with no authority. → **✓** (name, under what delegation).   **✗** No line four. → **✓** not decided, with two dates.   **✗** _Noted with thanks._ → **✓** what act follows?   **✗** Inventing a decision. → **✓** ask for the sentence before the room leaves.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The February order**, **raised and dropped for want of the budget line** — **and two dates: on the agenda for 5 June, and the budget line to be with them by 1 June.** **The second date is the one that does the work, because it is a date on the thing the meeting needs rather than on the meeting.**'));
out.push(A('**2** ⚠ **The old version ran to about nineteen hundred words and the decision in it was sixty** — **so he had been circulating, for nineteen years, a document in which the thing to be acted on was three per cent of the text.** **And the half that matters:** **it was accurate, and complete, and he was thanked for it.**'));
out.push(A('**3** ⚠ **The car park came off the standing agenda on 29 April**, **after he had written the sixth line in March and again in April.** **Four years of people complaining about it in the room achieved nothing, and two lines in a document achieved it** — **because the complaint was in the meeting and the line was in front of the people who set the agenda.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**STUDIO MEETING · 20 MAY · SIX LINES** · L. Sweidan',
  '**Decided.** _The Sarouja summary goes to the committee in the five-part form._ ⚠ **(Mrs Khoury, as studio head.)**',
  '**By when, and who.** **Sent by 24 May, by me, with the author\'s correction in the provenance line.**',
  '**Not decided.** ⚠ **Where the forty-two page report lives after June.** **On the agenda for 3 June, and the conservation office is to say by 30 May whether it wants it back.**',
  '**If you disagree.** **Tell me by 23 May and it goes to Mrs Khoury before the summary is sent.** ⚠ **After 24 May the committee has it and a correction is a second paper.**',
  '**What the fifty minutes went on.** ⚠ **Thirty-two minutes on whether the photographs should be in colour.** **It changed nothing. Nine minutes on the summary. The rest on arriving.**',
  '**NOTE, which is not part of the minutes.** ⚠ **The old minutes of this meeting would have been about eight hundred words and the decision in them is twelve.** **I have written the photographs line because the photographs are on the agenda every month.**',
]));
out.push(S('Stage 7 · Write freely (sample, 198 words)'));
out.push(SAMPLE([
  '**SUPPLIER REVIEW · 21 MAY · SIX LINES** · R. Shaaban',
  '**Decided.** _The Qassaa supplier stays on the list for one further quarter, on condition that the next two consignments carry the weighbridge ticket._ ⚠ **(Mr Kabbani, under the purchasing rules of 2022, clause nine.)**',
  '**By when, and who.** **The condition goes to the supplier in writing by 25 May, by me.** **The next two consignments are due in June and July.**',
  '**Not decided.** ⚠ **Whether the reject limit is three a quarter or three a consignment.** **The rules say _a quarter_ and the gate has been applying it per consignment for two years.** **On the agenda for 18 June, and I am to produce the two years of figures by 11 June.**',
  '**If you disagree.** **Write to me by 24 May, saying which part, and it goes to Mr Kabbani before the letter is sent.** ⚠ **After 25 May the supplier has the condition and withdrawing it costs us the quarter.**',
  '**What the eighty minutes went on.** ⚠ **Forty-one minutes on the reject limit, which was not decided.** **Twenty-two on the supplier, which was. Nine on the gate telephone. The rest on arriving and leaving.**',
  '**NOTE, which is not part of the minutes.** ⚠ **Forty-one minutes on a question that two years of practice had already answered differently from the rules, and nobody had written that down.** **The old minutes of this meeting would have recorded four views on the limit and no finding.** **I have put the finding in line four because it is the only thing in eighty minutes that will still matter in September.**',
]));
out.push(A('**198 words, the decision quoted with its clause bracketed, two dates on the open item, the consequence of the deadline stated, the minutes of the time itemised, and the arithmetic kept in the note.** ⚠ **The strongest line is in the note** — **two years of practice had already answered the question differently from the rules, and nobody had written that down** — **because it is a finding that only the act of writing six lines produced.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: two dates on the open item.** _"On the agenda for 18 June, and I am to produce the two years of figures by 11 June."_ ⚠ **A date for the meeting and a date for the work.** **Mine has the meeting date only**, which I now see is a promise that the question will be raised again and not that it will be answerable.',
  '**One thing to keep, and why it works.** _"Forty-one minutes on the reject limit, which was not decided."_ **It puts the longest item of the meeting against the emptiest outcome in one clause.**',
  '**Ranking of the slip I was given.** **1** two dates on the open item **2** the arithmetic in the note **3** what happens after the deadline **4** the decision quoted with its authority _(quoted, with the clause, and the easiest because it was read out in the meeting)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Line one twice: with the discussion attached and then alone.** **The room says at which word it stopped attending, and it is usually the fourth.** **Then one question for the room: how many of you have ever written a set of minutes in which the decision came first?** **Finish on Mr Barghouti\'s sentence:** **I have been circulating, for nineteen years, a document in which the thing to be acted on was three per cent of the text.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The count:** 1,240 words in the minutes, 34 in the decision. **Ratio about thirty-six to one.**_',
  '⚠ _**And the worse finding:** the set from March has no decision in it at all. **It has four views and a date for the next meeting.**_',
  '_**What was acted on anyway:** the stores clerk ordered the paper. ⚠ **He told me he had taken it from the fourth paragraph, which records what two people said they would prefer.**_',
]));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  The figure you must not round'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The question that does the work is the second one: is there a number at which somebody acts?** **Where there is, make the pair say both versions again and name which side of it each falls on.** **In about half the cases brought in, the rounded version is on the wrong side**, and nobody had noticed until it was said twice.'));
out.push(A('**b** Must survive unrounded: **2** and **4**. May be rounded: **1**, **3** and **5**. ⚠ **The difference is not size and it is not importance.** **It is whether anything is compared with the figure** — **ten millimetres in a standard, a storage limit in a contract.** **A hundred years and forty pages are compared with nothing.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **round a figure that describes and never a figure that triggers**; and **_about_ is honest when the measurement is approximate and dishonest when the measurement is exact and you are saving space.**'));
out.push(A('**b** **1** ⚠ **It became _about a centimetre_** — **and she wrote that herself, in June, while tidying a long sentence.**   **2** ⚠ **She wrote _a little over the limit_**, **and eleven degrees over for four hours is outside the storage condition and the consignment has to be destroyed** — _a little over_ **is a thing you discuss, and nobody has mentioned that excursion for seven weeks.**'));
out.push(NOTE('⚠ **The arithmetic of this cycle must be said in Miss Sweidan\'s words, because the paraphrase loses it: she did not change the measurement, she changed which side of the threshold the measurement falls on.** **Eleven is above ten; _about a centimetre_ is at or below it.** **The wall did not move in June; the sentence did.** ⚠ **And the second half is the one that protects students from the wrong lesson.** **_About_ is not a vague word; it is a precise one, and it says _I measured this loosely_.** **When the measurement was exact, _about_ is a false statement about how the figure was obtained** — **which is why Mr Hamwi\'s _about a third of what it cost to put on_ is honest and her _about a centimetre_ was not.** **Put both in front of the class and make them say which is which and why.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(describes)_ _The report runs to about forty pages._ **Nothing is compared with it.**',
  '**2** _(triggers)_ _Eleven millimetres, since March, from the March and October levels; the standard requires a survey at ten._',
  '**3** _(one I rounded, and the repair)_ ⚠ _Nearly a fortnight late_ → _nine days late, on the delivery note of 14 March, against an agreed limit of seven._',
  '**4** _(false precision, and the repair)_ ⚠ _37.4 per cent_ **from a count of a hundred and twelve** → _forty-two of a hundred and twelve._',
  '**5** _(unit, date, source)_ _Nine rejected sheets, in the consignment of 2 April, counted from our own reject bin._',
]));
out.push(A('⚠ Item **4** is the one most rooms get wrong twice: **they correct the decimal and then write _about forty per cent_**, which is the first fault again. **The honest form is the count itself** — **forty-two of a hundred and twelve** — **and it is shorter than either.** Item **3** is marked on all three additions: **a repair that gives the figure and leaves out the source has mended half of it.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _11 mm of movement; the survey threshold is 10 mm._',
  '**B** **Not rounded**, because there is a number at which somebody acts. **Full form: eleven millimetres, between the March and the October levels, from the conservation office\'s own readings.**',
  '**A** _(the ⚠ row)_ _"4,100,000 pounds" from a quotation that said "about four million."_',
  '**B** ⚠ **False precision.** **The original figure is _about four million_ and the hundred thousand is mine** — **so the honest form is** _about four million, in the quotation of 2 May_. ⚠ **And if the committee needs an exact figure, it is not in the file and somebody must telephone for it.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('For each figure, rounded or not, and the full form where it is not. ⚠ **The four ⚠ rows are false precision and the pairs will treat them as accurate.** **A summary cannot be more exact than what it summarises** — **_37.4 per cent_ from a count of a hundred and twelve offers a tenth that does not exist.** **The honest figure is** _forty-two of a hundred and twelve_.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Describes:** the standard runs to about thirty pages._ ⚠ _**Triggers:** eleven degrees above the range, for four hours, on the pallets of 14 March, from the store\'s own chart. **The number at which somebody acts: ten degrees for two hours** — **and we are over on both.**_',
  '**b** ⚠ _**With _about_ in front of it:** _about eleven degrees over._ **My partner said she would write down _about ten_** — **which is the figure in the standard, and the one that does nothing.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna’s eleven millimetres went into the next summary and became about a centimetre — she wrote that herself, in June, because the sentence was long and she was tidying it. Ten millimetres is the figure in the conservation standard at which a structural survey is required: eleven triggers it, and about a centimetre does not. Which is the cycle in one piece of arithmetic — eleven is on one side of the threshold and about a centimetre reads as ten or under, which is the other side. She did not change the measurement; she changed which side of the line it fell on. And that is the rule, and it is the only one needed: round a figure that describes, and never round a figure that triggers. Omar asked how to tell which is which, and three questions, the first two taking four seconds: is this figure compared with anything, does anybody act at a particular value, and would the reader notice if it were wrong by the amount you are rounding by? Dima asked about the word about, which is honest when the measurement is approximate and dishonest when the measurement is exact and you are saving space — which is almost every about in a summary. The report said eleven; the summary said about ten. Rim said hers is the same figure in a different trade: four pallets, eleven degrees over, and she wrote a little over the limit in the letter. Eleven degrees over for four hours is outside the storage condition and the consignment has to be destroyed, while a little over is a thing you discuss, and nobody has mentioned that excursion for seven weeks. Bassel raised the opposite fault, which is summaries more exact than the thing they summarise: a quotation of about four million becomes 4,100,000 in the summary and the reader believes the hundred thousand, so a figure has been invented and the invention looks like care. Hiba asked what travels with a figure, and three things costing eleven words: the unit, the date and the source. A figure with no date is a measurement with no event attached, and a figure with no source cannot be checked by the person who has to act on it. And Mazen asked about saying it out loud: exactly, with nothing in front of it, because about is how we make a number sound polite and a triggering figure said with about in front of it has been rounded in the air.']));
out.push(A('Listener task: the partner\'s triggering figure in full and the number at which somebody acts. ⚠ **The second half is where the cycle bites.** **About a third of any room cannot find the acting number** — **and that is not a summarising failure, it is a discovery: they have been reporting a figure for years without knowing what it is compared with.** **Collect those and set them as the thing to go and ask.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _About a centimetre._ → **✓** eleven millimetres since March.   **✗** _A little over the limit._ → **✓** eleven degrees over, for four hours.   **✗** _About eleven millimetres._ → **✓** eleven millimetres.   **✗** _37.4 per cent_ from 112. → **✓** forty-two of a hundred and twelve.   **✗** A figure with no date. → **✓** since March, from the March levels.   **✗** _4,100,000_ from _about four million_. → **✓** about four million, and say whose words.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **She changed which side of the threshold the measurement falls on.** **She did not change the measurement.** **Eleven is above ten; _about a centimetre_ is at or below it** — **and her own line is the one to keep:** _the wall did not move in June; my sentence did._'));
out.push(A('**2** ⚠ **Not carelessness and not hurry.** **The full form is eleven words and the line looked heavy, and she had been taught that a summary should read well.** **Her answer to herself is the sentence of the cycle:** _it does read well. It reads well and it does not trigger a survey._'));
out.push(A('**3** ⚠ **The plastering goes on, the wall goes on moving, the plaster cracks in the first winter, and the second contract is a repair of the first** — **and Mr Hamwi puts taking plaster off a moving wall at about a third of what it cost to put on.** **That _about_ is the honest kind, because he is estimating** — **which is the distinction the whole cycle rests on.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**A LITTLE OVER THE LIMIT** · R. Shaaban · 22 May · _for the gate_',
  '**In March I wrote the excursion into the refusal letter as eleven degrees over for four hours.** ⚠ **In April I wrote _a little over the limit_, and I did it to keep the letter short.**',
  '**What the two versions say.** **_Eleven degrees over for four hours_ is a reading against a condition.** ⚠ **_A little over the limit_ is a reading with the condition removed.**',
  '**So what I did, exactly.** ⚠ **I did not change the temperature.** **I turned a destruction into a discussion.**',
  '**Why I did it.** ⚠ **Not carelessness.** **The full form is fourteen words in a letter I wanted to keep to a page**, **and I had been taught that a short letter is a clear one.**',
  '**What it would have cost.** **Four pallets accepted that cannot be sold** ⚠ **and nobody will sign for them.** **Mr Kabbani says the usual loss on a held consignment is about a third of its value. That _about_ is honest, because he is estimating.**',
  '**The rule I have written down.** ⚠ _Round a figure that describes; never round a figure that triggers._',
  '**And one thing I had not understood about _a little_.** ⚠ **It is not a quantity.** **It is an instruction to the reader about how much to care.**',
]));
out.push(S('Stage 7 · Write freely (sample, 204 words)'));
out.push(SAMPLE([
  '**NINE DAYS, OR OVER A WEEK** · B. Tahhan · 24 May · _for the two of us who price the late deliveries_',
  '**In February I recorded a late delivery as nine days.** ⚠ **In the April summary I wrote _over a week_, and I wrote it because the line was long and the summary was a page.**',
  '**What the two versions say.** **_Nine days_ is a count against a contract.** ⚠ **_Over a week_ is a count with the contract taken out of it** — **and the contract allows seven days and provides for a deduction after that.**',
  '**So what I did, exactly.** ⚠ **I did not change the delivery.** **I removed the two days that the deduction is calculated on.** **Over a week is true of eight days and of nineteen.**',
  '**Why I did it, which is the part worth writing down.** ⚠ **Not hurry.** **_Nine days late, on the note of 14 March, against an agreed seven_ is fourteen words**, **and I had been taught that a summary should not read like a ledger.** **It does not read like a ledger. It also does not support a deduction.**',
  '**What it would have cost.** **The deduction is two days at about forty thousand pounds a day, which is eighty thousand** ⚠ **and we did not claim it.** **Mr Hamwi says we have not claimed one in three years. That _about_ is honest: he is estimating the daily figure.**',
  '**The rule I have written on the first page of the order book.** ⚠ _Round a figure that describes; never round a figure that triggers._ **And under it: is anything compared with this number?**',
  '**And one thing I had not understood about the word _over_.** ⚠ **It is not an approximation; it is a boundary with the distance deleted.** **_Over a week_ keeps the fact that we are late and throws away the only part of it that is worth money.**',
]));
out.push(A('**204 words, the act named precisely rather than called a mistake, her own reason taken seriously and answered in one line, the unnoticed cost priced with somebody else\'s figure, and an ending on the word rather than on himself.** ⚠ **The sentence that earns the band is _a boundary with the distance deleted_** — **six words that explain why a true statement can be worthless**, and no amount of self-reproach would do the same work.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the act named precisely.** _"I removed the two days that the deduction is calculated on."_ ⚠ **Not _I was imprecise_.** **Mine says _I rounded it and I should not have_**, which names the action and not what the action did.',
  '**One thing to keep, and why it works.** _"It does not read like a ledger. It also does not support a deduction."_ **Two short sentences, and the second answers the first without arguing with it.**',
  '**Ranking of the slip I was given.** **1** the act named precisely **2** the ending on the word **3** the cost priced with somebody else\'s figure **4** your own reason taken seriously _(taken seriously, and the shortest thing on the page)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The triggering figure twice — with _about_ and then exactly — and the room writes down what it hears.** **Then compare what was written with what was said.** **Somebody will have written the rounded figure both times**, and that is the demonstration: **the rounding happens in the listener and not only on the page.** **Finish on Miss Sweidan\'s sentence:** **the wall did not move in June; my sentence did.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Marked D or T through my last summary:** nine figures, two of them T._',
  '⚠ _**The acting numbers:** for the reject count, three a quarter, which I had. **For the delivery days, I could not find one.**_',
  '_**So the thing to go and ask:** what the contract allows before a deduction. ⚠ **I have been reporting days late for two years without knowing what they are compared with.**_',
]));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  What you left out, named'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **Almost nobody can answer the second question, and that is the cycle in six minutes.** **Most people can list what is missing; the omission note is not a list but an answer to _what would a reader have to be about to do?_** **Collect three first answers and three second answers and put them side by side.**'));
out.push(A('**b** Omission notes: **2** and **4**. Not: **1**, **3** and **5**. ⚠ **1 is a disclaimer and the room will defend it as honest.** **It is honest and it is useless:** **it tells the reader that something is missing and nothing about what, where, or when it would matter.** **5 is the same thing in a politer voice.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **what kind of material is not here · where it is and who holds it · the condition under which the reader should go and read it**; and **nobody writes the third, which is the only useful one.**'));
out.push(A('**b** **1** ⚠ **They bought machines of a model that is on his fault list and not on his summary** — **nine faults in fourteen months across three sites, none of it on the page, because the page is about last month.**   **2** ⚠ **It protects him and tells them nothing.** **A disclaimer protects the writer and an omission note protects the reader, and they look alike and do opposite jobs.**'));
out.push(NOTE('⚠ **The disclaimer/omission distinction is the examinable content and it should be put as a question about whom the sentence serves.** _This is a summary and should be read with the full report_ **cannot be acted on by anybody**: it names no material, no location and no occasion. **The test is one question** — **after reading this, what would a reader do differently?** — **and a disclaimer produces nothing.** ⚠ **And the order matters: the note protects the reader first and the writer second.** **In that order it works, and a named omission cannot be used against the writer either.** **In the other order it becomes a disclaimer, which is why so many of them do.**'));
out.push(NOTE('**The third part is where the lesson is and it is the part a class will not produce unaided.** ⚠ **A trigger must name an act** — _before you buy_, _before you fix anything to it_, _before you sign_ — **and not a state of mind.** _If you are interested in the fault history_ **is not a trigger, because nobody knows when they are interested.** ⚠ **And it is narrowed, which is the refinement that proves a student has thought about it:** **not when you are deciding whether to buy, which is too early, but when you know the model.** **A trigger that fires too early is ignored as often as one that fires too late.** **Make the room time the triggers at Stage 4a: _when, exactly, would this sentence reach the reader?_**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(material I hold)_ _Not here: the per-machine fault history. I hold it. Ask me before you buy any machine for site use._',
  '**2** _(pages in a document)_ _Not summarised: pages 29 to 33, on the north wall. The studio holds the report. Read them before fixing anything to that wall._',
  '**3** _(the trigger is a purchase)_ _Not here: the batch numbers. The gate book has them. Ask before you accept a replacement consignment from the same run._',
  '**4** _(a disclaimer, and the repair)_ ⚠ _Some details have necessarily been omitted_ → _Not here: the four bidders\' own references. The tender file has them. Read them before you sign._',
  '**5** _(nothing material missing)_ ⚠ _Nothing material is missing for the decisions this page is used for._ **Only written if true.**',
]));
out.push(A('⚠ Item **5** is a strong sentence and the class should be warned about it twice: **it is the only sentence in this unit that can be shown to be false by one event**, and a writer who has used it once wrongly will never be believed in it again. Item **4** is marked on all three parts — **the class of material, the holder, and an act** — **and a repair with two of the three is still a disclaimer.**'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _Monthly fault page; per-machine fault lists not in it._',
  '**B** **Not here: the per-machine fault history.** **I hold it; it is not circulated.** **Ask me before you buy any machine for site use.**',
  '**A** _(the ⚠ row)_ _"This is a summary and should be read with the full report."_',
  '**B** ⚠ **That is a disclaimer and it has to be rebuilt from nothing.** **What kind of material: the per-site cost tables.** **Where: the finance office holds them.** ⚠ **And the act:** _ask for them before you commit any site to a replacement programme._ **A reader can do something with that today.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three parts for each, and the trigger. ⚠ **The four ⚠ rows are disclaimers and the pairs must rebuild them from nothing** — **inventing the class of material and the act, which is the exercise.** **Ask the listeners one question about each rebuild: what would a reader be about to do?** **A trigger that names no act is a disclaimer in a new coat.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Not here: the two years of reject figures by consignment.** **I hold them in the refusal book.** ⚠ **Ask me before you set a limit in any new supply agreement.**_',
  '**b** ⚠ _**As an apology:** _I am afraid I have not been able to include the reject figures…_ **My partner said she would have skipped it**, **and she said why: it sounded like the sentence at the bottom of a form.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Omar sends one page a month to eleven site managers, and something went wrong twice: two sites bought machines of a model that is on his fault list and not on his summary — nine faults in fourteen months on that model, across three sites, none of it on the page, because the page is about last month. The page was not wrong: it was right about last month and silent about the model, and silence is what they acted on. At the bottom of it he had this is a summary and should be read with the full fault record, which protects him and tells them nothing. Which is the finding of the cycle: a disclaimer protects the writer, an omission note protects the reader, and they look alike and do opposite jobs. Dima asked what an omission note has in it, and three parts: what kind of material is not here, where it is and who holds it, and the condition under which the reader should go and read it. Rim said the third is the one she has never written, and nobody writes the third and it is the only useful one — ask me before you buy any machine for site use, nine words, and it does the work the other eleven pages cannot do, because a reader cannot know which of a hundred missing things is about to matter and the writer can. Omar put that line on in March, and three managers have asked him since, two of whom changed what they were buying; the line cost nine words and about forty minutes of answering, against two machines nobody should have bought. Lubna said hers would be pages twenty-nine to thirty-three, and the trigger is read them before fixing anything to the north wall — which is the sentence that would have stopped the committee, and it is shorter than the paragraph of history she did include. And Mazen asked about reading it out: as information, flat, in the same voice as the rest, because an omission read as an apology is heard as a formality, and a formality is skipped.']));
out.push(A('Listener task: the partner\'s omission note and whether its trigger names an act. ⚠ **Collect the triggers and test each one with the same question, out loud: when exactly would this sentence reach the reader?** **The weak ones are weak in a single way** — **they fire at a state of mind** _(if you are interested, should you need)_ — **and the strong ones fire at an act with a date near it.** **In most rooms about half need narrowing rather than rewriting.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** _Should be read with the full report._ → **✓** not here: the fault history.   **✗** _Some details have been omitted._ → **✓** what kind, and who holds it.   **✗** A list of everything left out. → **✓** a class of material and a trigger.   **✗** _If you are interested…_ → **✓** before you buy.   **✗** The trigger firing too early. → **✓** when you know the model.   **✗** Read as an apology. → **✓** flat, as information.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The page was right about last month and silent about the model** — **and the silence is what they acted on.** **That distinction is the first paragraph of the model page and it is the reason the page is worth reading:** **a confession of error invites a correction, and a named silence describes a structure that will happen again.**'));
out.push(A('**2** ⚠ _Before you buy any machine for site use._ **Not when they are deciding whether to buy, which is too early** — **when they know the model.** **The narrowing is what makes the trigger fire at a moment that exists.**'));
out.push(A('**3** ⚠ **Three of the eleven have asked since March and two changed the model they were buying** — **and one did not, and had a reason he had not thought of, which is that the faulty board is covered by a maintenance contract that manager already holds.** **What he refuses is to circulate the fault history:** **sixty pages, wrong in places, and a sixty-page attachment to a four-hundred-word page would mean neither was read.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WHAT IS NOT ON THE WEEKLY GATE NOTE** · R. Shaaban · 26 May · _to the gate staff_',
  '**Two loads were accepted in April that should have been held, and my note did not say so.** ⚠ **The note was not wrong.** **It was about the week and silent about the excursion rule.**',
  '**What the note is.** **Holds, refusals and anything still open, for the week just gone.** ⚠ **About two hundred words and it takes me an hour.**',
  '**What is not on it.** ⚠ **The excursion rule and the two-hour figure.** **The standard holds it, on page twenty-two; the gate has never had a copy.**',
  '**When you should ask for it.** ⚠ _Before you accept any load whose chart shows a reading outside the range._ **Not before every load, which is too often** — **when you see a reading out.**',
  '**What has happened since I put that line on.** **Four of you have telephoned.** ⚠ **Three loads were held that would have been accepted.** **One was accepted after I looked, and the chart was misread.**',
  '**What it cost me.** **Fourteen words and about an hour of telephoning in two months.** ⚠ **Against four pallets nobody will sign for.**',
  '**And what I am not going to do.** ⚠ **I am not going to attach the standard.** **Thirty pages behind a two-hundred-word note means neither is read.**',
]));
out.push(S('Stage 7 · Write freely (sample, 207 words)'));
out.push(SAMPLE([
  '**WHAT IS NOT ON THE COMMITTEE PAGE** · L. Sweidan · 28 May · _to the committee of five_',
  '**In February you let a plastering contract on a wall that is moving, and my one-page summary did not mention the wall.** ⚠ **The page was not wrong.** **It was a faithful account of a forty-two page report and silent about the one sentence in it that bore on what you were about to do.**',
  '**What the page is.** **One page: the history, the materials, the roof, the costs.** ⚠ **It is about four hundred words and it takes me an evening.**',
  '**What is not on it.** ⚠ **The condition of the walls.** **Pages twenty-nine to thirty-three of the report, which the studio holds** — **five pages, and nobody on the committee has read them.**',
  '**When you should ask for them.** ⚠ _Before you let any contract that fixes anything to a wall._ **Not before every contract, which is most of them** — **when something is to be fixed.** **That is about one paper in four.**',
  '**What has happened since I put that line on the May page.** **Two of you have asked.** ⚠ **The plasterer\'s contract has been held.** **And one of you asked about the roof instead, which the page does cover** — **so the line gets read, and not always carefully.**',
  '**What it cost me.** **Fourteen words, and about forty minutes of answering.** ⚠ **Against a two-and-a-half-million-pound contract that will have to come off again.**',
  '**And what I am not going to do.** ⚠ **I am not going to attach the five pages.** **Five pages behind four hundred words would mean the four hundred were not read** — **and the line works because I am the person who knows which of the missing things is about to matter.**',
]));
out.push(A('**207 words, the silence separated from error in the first paragraph, the trigger given as an act and then narrowed with a figure, the exception reported honestly, and the generous remedy refused with its arithmetic.** ⚠ **The sentence that earns the band is _so the line gets read, and not always carefully_** — **it concedes that the method half-works and makes the rest of the page believable.**'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the trigger as an act, then narrowed.** _"Before you let any contract that fixes anything to a wall… that is about one paper in four."_ ⚠ **An act, and then how often it fires.** **Mine says _before you take any decision on the file_**, which fires every time and will therefore be read never.',
  '**One thing to keep, and why it works.** _"one of you asked about the roof instead, which the page does cover"_ **It reports the method half-working and costs the page nothing.**',
  '**Ranking of the slip I was given.** **1** the trigger narrowed **2** the exception reported **3** silence separated from error **4** the generous remedy refused _(refused, with its arithmetic, and the easiest because the arithmetic is obvious)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **The omission note twice: as an apology and then flat.** **The room says which it would have skipped** — **the apology, every time** — **and the reason is worth drawing out of them: an apology is heard as a formality and a formality is the one thing everybody has learned to skip.** **Finish on Mr Darwish\'s sentence:** **the page was right about last month and silent about the model, and the silence is what they acted on.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**The omission note for my refusal summary:** _Not here: the two years of reject figures by consignment. I hold them in the refusal book. Ask me before you set a limit in any new supply agreement._**_',
  '⚠ _**Sent to the purchasing office**, which is where that summary goes._',
  '_**And the answer I had in two days:** they are drafting an agreement this month and had not thought to ask. ⚠ **Fourteen words, two days, and a limit that will now be three a consignment rather than three a quarter, which is what the gate has been applying anyway.**_',
]));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  The whole summary'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. ⚠ **The missing part is the omission note in most cases and the provenance line in nearly all the rest, and nobody has ever left out the band that can be ignored.** **Say that in those words:** **the two parts that serve the reader go missing and the part that fills space never does.**'));
out.push(A('**b** **2** — _load-bearing · check before acting · nothing else alters it · not here · provenance._ ⚠ **5 is the near miss and about a quarter of any room takes it**, because _nothing else alters it_ feels like a natural second sentence. **It is not: a reader who is told that nothing else matters before being told what to check has been given the all-clear and then a task.**'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** — **somebody who has to act, and the author of the original**; and **the first must be able to say what they will now do, and the second that nothing load-bearing is missing.**'));
out.push(A('**b** **1** ⚠ **That the wall was the right choice and that she had the threshold wrong:** **the standard says ten millimetres _in any three-month period_, and her eleven is since March, which is seven** — **so it may not trigger at all, and it may be worse, because eleven over seven months and eleven over three are different buildings.**   **2** ⚠ **It goes at the bottom and that is not a convention:** **a page that opens by describing itself has spent the reader\'s first four seconds on housekeeping.** **It records five things, and the length is the one people leave out.**'));
out.push(NOTE('⚠ **The second reader is the only serious shortcut in the method and the cycle exists to make the class try it once.** **The author of the original does not confirm a page; he corrects it** — **and the correction in the model is an interval, which is the commonest thing a summariser gets wrong because it is the thing an author never thinks to say twice.** ⚠ **Say what the correction saved: without it, Miss Sweidan\'s page would have told the committee that a survey was required, which is a different kind of wrong from the February page and would have been just as expensive.** **And the warning for the whole unit belongs here:** **a summary that is beautifully built and has the wrong load-bearing sentence is worse than a bad summary**, **because a bad summary is read with suspicion and a good one is acted on.**'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _(load-bearing with its figure)_ _The north wall has moved eleven millimetres between the March and the October levels — seven months, not three._',
  '**2** _(two things to check)_ _Who took the October levels (the report does not say). Whether any reading was taken between March and October._',
  '**3** _(band three in one sentence)_ _Nothing else in the report alters this decision._',
  '**4** _(the omission note)_ _Not here: pages 29 to 33, which are the wall. The studio holds the report. Read them before letting any contract that fixes anything to it._',
  '**5** _(provenance, including the length)_ _Forty-two pages, dated 14 April, by Mr Kabbani. Summarised 2 May by L. Sweidan, one page. Checked with the author on 5 May, who corrected the threshold._',
]));
out.push(A('⚠ Item **2** is marked on the brackets: **a thing to check and a thing that cannot be checked are different instructions**, and _(the report does not say)_ is the cheapest way to tell them apart. Item **5** is marked on the length and on whether the author has seen it — **those are the two a reader uses to weigh the page**, and they are the two students leave out.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A** _The wall has moved eleven millimetres since March._',
  '**B** **Part 1.** **Right place** — **it is the first line.** **Before it: nothing.**',
  '**A** _(the ⚠ row)_ _This is a summary of a forty-two page report of 2 May._',
  '**B** ⚠ **Part 5, at the top, where it spends the reader\'s first four seconds on housekeeping.** **The same words at the bottom are useful** — **they tell a reader that one page stands for forty-two.** ⚠ **Before it: everything.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The part number for each line and what must come before it. ⚠ **The four ⚠ rows are provenance put at the top.** **Make the listeners say what the page has given away: the only four seconds anybody is guaranteed.** **Then ask what the same words do at the bottom, which is where they are useful** — **and the answer is that they let a reader weigh the page rather than decide whether to read it.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _**Five parts, 168 words.** **Read to the stores clerk, who acts.** ⚠ **He reached for a pen at the second clause of the first sentence** — **at _three a consignment and not three a quarter_** — **and said he would stop the June order until he had asked.**_',
  '**b** ⚠ _**My partner, as the author of the standard:** **yes, something load-bearing is missing** — **the limit is three a quarter _per supplier_, and I have four suppliers in one line.** **She invented nothing; it is in the clause and I had not read it twice.**_',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna did the same forty-two pages again, in five parts: the load-bearing sentence with its figure unrounded, what has to be checked before anybody acts, one sentence saying nothing else alters it, the omission note, and the provenance line. And she showed it to two people — the committee secretary, who acts, and the man who wrote the forty-two pages, which she had never done in her life. He said the wall was the right choice and that she had the threshold wrong: the standard says ten millimetres in any three-month period, and her eleven is since March, which is seven months, so it may not trigger at all, and it may be worse, because eleven over seven months and eleven over three are different buildings. So the author did not confirm her page; he corrected it, and that is what the second reader is for, and why both readings are in the method — the person who acts tells you whether the page works, and the author tells you whether it is true. Dima asked what happens if the author is not available, and then the page says so in the provenance line: forty-two pages, summarised 2 May by L. Sweidan, not checked with the author. Twelve words, and a reader can now weigh the page. Omar asked what else is in provenance, and what was summarised, how long it was, by whom, when, and whether the author has seen it — the length being the part people leave out and the most useful, because a reader who knows that one page stands for forty-two reads it differently from one who thinks it stands for four. Adnan asked whether provenance does not belong at the top, and it belongs at the bottom, and that is not a convention: a page that opens by describing itself has spent the reader’s first four seconds on housekeeping, and the first four seconds are the only ones you are guaranteed. Rim asked how long the whole thing is, and one page, and the five parts leave room for more than people expect — the history, the materials and the costs are all on the new page, under the band that can be ignored, in one sentence, which is where they belonged. Hiba asked for the test for the page as a whole, which is two questions to two people: to the one who acts, what will you now do, and to the author, is anything load-bearing missing? And Mazen asked about reading it aloud: to somebody who has to act, and watch their hands.']));
out.push(A('Listener task: whether the partner, as author, could name something load-bearing that the page had missed. ⚠ **Collect the yeses and read three of them out.** **In most rooms more than half the pages have a hole**, and the holes are of two kinds: **an interval** _(since March, over how long?)_ **and a scope** _(per supplier, per consignment, per site)_. **Both are invisible to the summariser and obvious to the author**, which is the argument for the second reader in one line.'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Provenance at the top. → **✓** at the bottom, with the length.   **✗** _Nothing else alters it_ second. → **✓** after what must be checked.   **✗** A figure with no interval. → **✓** eleven millimetres over seven months.   **✗** Band two with no gaps marked. → **✓** _(the report does not say)_.   **✗** No second reader. → **✓** show it to the author.   **✗** _Checked with the author_ when he has not seen it. → **✓** not checked with the author.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** ⚠ **The three-month qualification: the standard requires a survey at ten millimetres _in any three-month period_, and her figure is over seven months.** **Without him the page would have told the committee that the survey was required** — **and she says so on the page, in the provenance line, which is where the credit belongs.**'));
out.push(A('**2** ⚠ **Who took the October levels** _(and the report does not say, which makes it a gap in the report and not a task)_; **whether any reading was taken between March and October** _(if one was, the three-month figure exists and nobody has looked for it)_; **and whether the plasterer\'s quotation is still open after 20 May.** **The first is the gap.**'));
out.push(A('**3** ⚠ **Not length and not care.** **It is that this one is arranged by what the reader has to do and the February one was arranged by what the report contains** — **and the new page is the shorter of the two, which is the fact that makes the point unarguable.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**CONSIGNMENT 231 · SUMMARY FOR THE PURCHASING OFFICE** · R. Shaaban',
  '**The one thing here that changes what you do.** ⚠ **Nine rejected sheets in the consignment of 2 April, counted from our own reject bin** — **and the limit in the agreement is three a quarter, not three a consignment.** **On the quarter figure this supplier is at fourteen and the agreement is breached.** **Nothing should be ordered from them until the figure is agreed.**',
  '**Before you act, check two things.** ⚠ **Whether the limit is per supplier or per order** _(the agreement does not say)_. **And whether the gate\'s per-consignment practice has ever been put in writing.**',
  '**Nothing else in the file alters this decision.** **The prices, the delivery dates and the seal checks are all within the agreement.**',
  '**Not here.** ⚠ **The two years of reject figures by consignment.** **I hold them in the refusal book.** **Ask before you set a limit in any new agreement.**',
  '**Provenance.** **An eleven-page file, dated 2 April, kept by the gate.** ⚠ **Summarised 26 May by R. Shaaban, one page.** **Not checked with the gate supervisor, who is on leave until 2 June.**',
]));
out.push(S('Stage 7 · Write freely (sample, 213 words)'));
out.push(SAMPLE([
  '**GATE INSTRUCTION 4 · SUMMARY FOR THE DRIVERS** · T. Ayoub',
  '**The one thing here that changes what you do.** ⚠ **A load above four tonnes needs the weighbridge ticket from the sending depot** — **four tonnes, not four and a half, and the figure is in clause nine of the instruction of 11 March.** **Without the ticket you will be turned back at the gate and the load will not be held for you.**',
  '**Before you act, check three things.** ⚠ **Whether your load is above four tonnes _laden_ or _net_** _(the instruction does not say, and the gate has been applying laden)_. **Whether the sending depot issues tickets after four o\'clock.** **And whether your ticket shows the date, which two of the April tickets did not.**',
  '**Nothing else in the instruction alters this.** **The hours, the parking, the documents and the person to ask for are all as they were in January.**',
  '**Not here.** ⚠ **The eleven pages of the instruction itself, and the three pages on hazardous loads.** **The depot office holds both.** **Read the hazardous pages before you carry anything in a sealed drum.**',
  '**Provenance.** **Eleven pages, dated 11 March, issued by the depot office.** ⚠ **Summarised 28 May by T. Ayoub, half a page.** **Checked with the gate supervisor on 29 May, who corrected the tonnage** — **the four tonnes is laden and not net, and without him this page would have told you the wrong thing about every load over three and a half.**',
  '**NOTE for the depot office, which is not part of the summary.** ⚠ **The laden-or-net question is not in the instruction and the gate has been deciding it.** **That is not a summarising problem and I cannot fix it from here.**',
]));
out.push(A('**213 words, the figure with its clause and its date, the gaps marked inside band two, the author\'s correction credited in the provenance line with what it saved, and a note that hands the unanswerable question to the people who own it.** ⚠ **The strongest thing on the page is _four tonnes, not four and a half_** — **a figure defended against the rounding the drivers had been using**, which is 18.4 doing its work inside 18.6.'));
out.push(S('Stage 7P · Respond (sample slip — band 2)'));
out.push(SAMPLE([
  '**Criterion: the author\'s correction credited, with what it saved.** _"who corrected the tonnage — the four tonnes is laden and not net, and without him this page would have told you the wrong thing about every load over three and a half."_ ⚠ **Credited, and priced.** **Mine says _checked with the author_ and stops**, which tells the reader that a conversation happened and not what came out of it.',
  '**One thing to keep, and why it works.** _"(the instruction does not say, and the gate has been applying laden)"_ **A gap and a practice in one bracket** — **and the practice is the thing a driver actually needs.**',
  '**Ranking of the slip I was given.** **1** the correction credited and priced **2** the gaps marked **3** the figure with its interval **4** the difference named _(it is in the note, and the note is the shortest thing on the page)_.',
]));
out.push(S('Stage 7R · Share'));
out.push(A('⚠ **Read the page to somebody who has to act and watch their hands.** **When the load-bearing sentence lands, a person who is going to act reaches for a pen** — **and if nobody reaches for anything, the sentence is not load-bearing.** **Do it for four or five pages; the room will see that it is a reliable test and that it cannot be faked.** **Finish on Miss Sweidan\'s sentence:** **the difference is not length and it is not care; it is that this one is arranged by what you have to do.**'));
out.push(S('Homework (sample)'));
out.push(SAMPLE([
  '_**Shown to the author:** the gate supervisor, who wrote the instruction I summarised._',
  '⚠ _**His words:** _four tonnes is laden. Nobody has ever written that down and I have been saying it at the gate for six years._**_',
  '_**So the correction is an interval of a different kind** — **a scope.** ⚠ **And the useful part is that it is not in the document at all**, which means no amount of reading the eleven pages would have given it to me._',
]));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: The summariser and the summarised'));
out.push(S('Stage 1 · Get ready – Unit 18 quiz'));
out.push(A('**1** _The report **runs** to forty-two pages._   **2** _She **pared** down the page to one…_   **3** _The figure was **rounded** to a centimetre._   **4** _Nothing else **alters** the decision._   **5** _His **distillation** of the argument…_   **6** _The summary is more **concise** than the report._'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** ⚠ **A good summary displaces its original** — **and the better the page, the more completely it does so.** **The committee now treats the one page as the report.** **The question the page does not settle:** **who keeps the original alive, and where it lives** — **which is a decision about somebody\'s files and not a summarising question.**'));
out.push(NOTE('⚠ **This cycle is the only one in the unit where neither party is in the wrong, and the finding is new to the book: a summary serves a decision that exists, and a record serves questions that do not exist yet.** **Nobody can summarise for a question nobody has asked** — **so the lime plaster is correctly in band three for this decision, and that is the whole of the trouble.** ⚠ **Band three is a judgement about one decision and it is being read as a judgement about the material.** **Both readings are reasonable and only one of them is what the summariser meant.** ⚠ **And the two prohibitions matter more here than in any other mediation.** **Do not improve the page.** **And do not put the omitted material back into it** — **which restores eleven months to visibility and loses the wall, and is exactly how the February page was written.** **The generous move is the February page in a different mood.**'));
out.push(S('Language box · Practise'));
out.push(A('No Practise line in x.7. ⚠ **The three moves are the examinable content, and the third is where the mediator\'s limit shows: the summariser cannot supply it.** **Where a record lives is a decision about files, and in most places it has never been taken by anybody.** **The one line a summariser can add is in the Language box and should be learned:** _this page is not a substitute for the original in any dispute about what was known in April._ **The author of the report will sign it, which is the point of it.**'));
out.push(S('Stage 3 · Practise (sample – Pair A)'));
out.push(SAMPLE([
  '**What the summary is for.** **One decision, on one day, by five people who will not read forty-two pages.** **It did that.**',
  '**What the original is for.** ⚠ **The questions nobody has asked yet** — **the dispute in four years about what was known in April.** **A record is not for this decision.**',
  '**What the original does that the summary cannot.** ⚠ **Hold eleven months of lime plaster analysis against a question that has not been put.**',
  '**Can the summariser supply it?** ⚠ **No.** **Where the report lives after June is the committee\'s decision and it has never been taken.** **What she can supply is one line:** _this page is not a substitute for the original in any dispute about what was known in April._',
  '**And Pair B, for contrast.** ⚠ **Not a records question: a triggering figure was rounded to _a little over the limit_.** **That is a defective summary and the remedy is a correction today.**',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The three moves for each pair. ⚠ **Pair B is the discrimination the cycle is built on.** **A triggering figure rounded to _a little over the limit_ is a defective summary**, and no decision about where the original lives will mend it. **Two different faults, two different remedies: a question for the committee, and a correction today.** **Mark down any pair that offers Pair B a line about records.**'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '_**The summary:** my two-page version of the storage standard, which the gate uses._',
  '_**What it is for.** **Forty seconds and a lorry.** **It does that.**_',
  '⚠ _**What the original does that my page cannot:** tell a man why the ranges are what they are, on the day something happens that is not on my page._',
  '_**Where the original lives now:** one copy, in the office, in a drawer. ⚠ **Nobody decided that.** **It was in the drawer when I arrived and the gate has never had one.**_',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['A page that does everything the unit teaches, and the man who wrote the report is worse off. Asked whether the page is wrong, Lubna said no — she would write it again, and Mr Kabbani is right as well, which she had not expected at all. His complaint in his words: the committee now treats your page as the report, and eleven months of lime plaster analysis is inside a clause that begins nothing else alters this decision. So the mediation, which is three moves: separate what the summary is for from what the original is for; find what the original does that the summary cannot; and say whether the summariser can supply it. The summary is for one decision, on one day, by five people who will not read forty-two pages, and it did that. The original, Adnan said, is for the questions nobody has asked yet: a record is not for this decision, it is for the dispute in four years about what was known in April. Which is the finding of the cycle and it is new — a summary serves a decision that exists, and a record serves questions that do not exist yet, and nobody can summarise for a question nobody has asked. Omar said so his eleven months is correctly in band three, and correctly in band three for this decision, which is the whole of the trouble: band three is a judgement about one decision and it is being read as a judgement about the material. Rim asked what the page does not settle, and who keeps the original alive and where it lives — which is not a summarising question and Lubna cannot answer it, because it is a decision about the committee’s own files and the committee has never taken it. Hiba asked what the mediator does if neither of them is wrong, and the mediator names the question and hands it to the people who can answer it, which here is the committee and not either of these two. And Bassel asked what we must not do: two things, the second of which looks generous — do not improve the page, and do not put the lime plaster back into it, which would restore eleven months to visibility and lose the wall, and that is how the February page was written.']));
out.push(A('Listener task: what the original of the student\'s own last summary does that their page cannot, and where that original lives. ⚠ **The second half is the finding and it is usually uncomfortable: a drawer, an office nobody visits, a file on one person\'s desk.** **Almost nobody can name a decision that put it there.** **That is the question this cycle hands over** — **and the room should be told plainly that it is not theirs to answer, which is the hardest instruction in the unit for a class that has just learned to fix pages.**'));
out.push(S('Board clinic – typical mistakes'));
out.push(A('**✗** Redrafting the page. → **✓** the page is good; find the question.   **✗** Putting the lime plaster back. → **✓** that is the February page again.   **✗** _Both of you have a point._ → **✓** both accounts are accurate, and here is the question.   **✗** Treating Pair B as a records question. → **✓** a rounded trigger needs a correction.   **✗** Deciding where the record lives. → **✓** hand it to the committee.   **✗** _The author should have flagged it._ → **✓** true, and not the question.'));
out.push(S('Stage 5 · Read – exam practice (Reading and Use of English Part 2)'));
out.push(A('**1** of   **2** as   **3** not   **4** about   **5** in   **6** so   **7** nobody   **8** else'));
out.push(A('⚠ **Part 2 is eight grammar words and the commonest loss is writing two.** **Say it before they start: one word, and a contraction counts as two.** **Items 2 and 6 are halves of fixed pairs** — _as soon as_, _and so_ — **and a student who reads only the gap will miss both, because the other half is three words away.** ⚠ **Item 4 is the one that separates a class:** _what the reader was ______ to do_ **takes _about_**, and the room will try _going_, which needs _was going to do_ and is therefore right in meaning and wrong in the gap. **Teach the habit the paper rewards: read the whole sentence aloud with the word in, and then read the sentence before it.**'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**ONE PAGE, TWO ACCOUNTS** · D. Khoury · 30 May',
  '**The page.** _"What changes the decision: the new analyser cannot run the fourth test. Before you act, check whether the fourth test is in the tender. Nothing else in the submission alters this. Not here: the maintenance schedule, which the supplier holds; ask for it before you sign. Four thousand words, summarised 28 May, three hundred."_',
  '**The summariser.** _"Three hundred words, five parts, and the purchasing office stopped the order in a day."_',
  '**The contributor.** _"Four thousand words and she has used four lines of them. Eleven months of trials are under _nothing else alters this_, and the office now quotes her page back to me."_',
  '⚠ **Both accounts are accurate and neither is about the page.**',
  '**What the summary is for.** **One purchase, in one week, by people who will not read four thousand words.** ⚠ **It did that.**',
  '**What the original is for.** ⚠ **The trials themselves** — **the record of what was tested, which the office will want in two years if the machine fails on something else.**',
  '**The question the page does not settle.** ⚠ **Where the trial record lives and who can find it.**',
  '**Who can answer it?** ⚠ **The purchasing office, which keeps the tender file** — **and not either of these two.**',
  '**And what I am not doing.** ⚠ **Improving the page**, and **putting the trials back into it.**',
]));
out.push(S('Stage 7 · Write freely – exam practice (Writing Part 2: an article, sample 209 words)'));
out.push(SAMPLE([
  '**THE SENTENCE I LEFT ON PAGE THIRTY-ONE**',
  '⚠ **I once summarised a forty-two page report into one page, and every sentence on my page was true, and the committee read it and let the one contract the report existed to prevent.**',
  '**I was asked to do it because five people had to decide about a house and none of them was going to read forty-two pages.** **I put the history, the materials, the photographs, the roof and the costs in three columns, in proportion to the report** — **four pages on the roof became four lines.**',
  '**What I left out was one sentence from page thirty-one: the north wall had moved eleven millimetres since March.** ⚠ **The report gave it one sentence out of forty-two pages, so I gave it nothing out of one page.** **The committee approved plastering, which goes on the inside face of that wall and will have to come off again** — **two and a half million pounds, and three weeks of a plasterer\'s time.**',
  '**It was not carelessness.** **It was a rule: keep everything in proportion to the document.** ⚠ **I had been taught that rule and nobody had ever told me it was wrong.**',
  '**So here is the one I would give you instead, and it takes four seconds a finding.** ⚠ **Ask what the reader would do, not knowing this, that they should not do.** **Almost everything produces no answer.** **Put the thing that does at the top, with its figure, and let the page be as long as it likes after that.**',
]));
out.push(A('**209 words, inside the 180–220 band.** ⚠ **The title is a claim and not a label** — _the sentence I left on page thirty-one_ — **the first line is the whole story with its paradox in it, all four requirements are present** _(what she was asked to summarise, what she left out, what it cost, and the rule)_, **and the last line is one a reader can repeat to somebody else.** **The sentence that earns the band is _I had been taught that rule and nobody had ever told me it was wrong_** — **it moves the fault from the writer to the method, which is what makes the article worth printing.**'));
out.push(S('Stage ✓ · Unit 18 check'));
out.push(A('**A** **1** a _(distillation)_   **2** a _(alters)_   **3** b _(rounded)_   **4** c _(reduction)_   **5** b _(stripped)_   **6** c _(longer)_   **7** a _(length)_   **8** c _(exhaustively)_'));
out.push(A('⚠ **Item 6 is the item that tests whether the unit landed.** **_A faithful summary is often **longer** than the one people write_** — **and a room that has spent six cycles cutting will reach for _shorter_, which is the belief the whole unit was written against.** **Item 2 is the singular _nothing_ again, which 17.7 also tested:** **worth pointing out that it has now appeared twice and will appear in the Mid-Book Test.** ⚠ **And item 5 is a spelling item hiding in a lexical one** — **_striped_ is a pattern and _stripped_ is what you do to a discussion.**'));
out.push(A('**B  Listening** **1** forty-two   **2** thirty-one   **3** plastering   **4** March   **5** proportion   **6** one sentence   **7** three-month   **8** threshold   **9** length   **10** fixing'));
out.push(A('⚠ **Part 2 is sentence completion and the answers are the speaker\'s own words, so the standing instruction is: write what you hear and do not improve it.** **Item 6 is the one that loses marks** — **the answer is _one sentence_ and students write _a single sentence_ or _one line_**, neither of which she says. **Item 7 wants the hyphenated form _three-month_, and _three months_ is accepted; _three_ alone is not, because the sentence already has _period_ in it.** ⚠ **Item 10 needs the gerund** _fixing_, **which the sentence frame requires and about a quarter of any room writes as _fix_.** **Play the recording twice and give the room twenty seconds before the first playing to read all ten stems.**'));
out.push(A('**C  Writing** — **marked on the four requirements and on the title.** ⚠ **All four or the content mark goes**, and the commonest loss is the third: **an article that says what was left out and never what it cost has told the reader nothing they can weigh.** **A title that is a label** _(Summarising)_ **loses the organisation mark on its own.** **The Stage 7 sample above is the band-5 model.**'));
out.push(S('Homework / After Unit 18 (sample)'));
out.push(SAMPLE([
  '_**Article written, 209 words.**_',
  '_**Mediation written, and the question handed to the purchasing office on the Thursday** — **they have never decided where the tender files live after an order is placed, and nobody had asked.**_',
  '⚠ _**And the thing I am taking out of the unit:** not the five parts. **The four-second question** — **what would the reader do, not knowing this, that they should not do?** **I have asked it of eleven findings this week and ten of them produced nothing, which is the first time that has felt like progress.**_',
]));
out.push(sp());
out.push(box('After Unit 18 — and the Mid-Book Test', [
  '**This is the half-way point.** ⚠ **The Mid-Book Test follows and draws on Units 13 to 18.** **Sixty marks, weighted as the examination weights them** — **forty for reading and use of English, twenty-five for writing, twenty-five for listening, ten for speaking** — **and it carries the six Reading parts taught so far** _(6, 7, 3, 4, 1, 2)_, **both Writing parts, and all four Listening parts.**',
  '⚠ **Leave a week between 18.7 and the test if the timetable allows.** **The class will ask for examination practice rather than revision, and they are right: the material of 13 to 18 has been practised in every cycle and the paper shapes have each been met once.**',
  '**Unit 19 opens the second half with chairing and minuting.** ⚠ **18.3 planted it** — **minutes are for people who were not there, and the six lines are the shape** — **and 19 asks the harder half: how a meeting has to be run for six honest lines to be writable at the end of it.** **A chairman who has read 18.3 knows what the minutes will need and can get it said in the room.**',
  '⚠ **And one thing to carry into the second half.** **Units 13 to 18 have been about documents that go out: interviews, negotiations, refusals, criteria, cases, summaries.** **Units 19 to 24 are about the rooms and the records they come from** — **and 24.6 opens the letters the class sealed in B1 24.6, which should be mentioned now so that nobody has thrown theirs away.**',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 18 · Answer Key');
