// Proactive English B2 · Syria Edition · Book 2 · Unit 18 — Student's Book
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

out.push(h1('Unit 18  Summarising at Length'));
out.push(p('_Proactive English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit', [
  '**18.1** The part that cannot go   ·   **18.2** The order, not the proportion   ·   **18.3** Ninety minutes in six lines',
  '**18.4** The figure you must not round   ·   **18.5** What you left out, named   ·   **18.6** The whole summary   ·   **18.7** Review & Mediate: the summariser and the summarised',
  '⚠ **The title is the argument of the unit.** **A faithful summary is usually longer than the one people write**, because the part that matters needs its figure, its date and its source — **and that is three clauses, not one word.**',
  '**17.6 built a brief; 18 asks the same question of everything else.** ⚠ **What is the part that, if it goes, makes the rest not worth reading?** **This unit closes the first half of the book, and the Mid-Book Test follows it.**',
], C.lteal, C.teal));

// ===================== 18.1 =====================
out.push(pb());
out.push(h2('18.1  The part that cannot go'));
out.push(p('**Function:** finding the part that, if it goes, makes the rest not worth reading   ·   **Grammar:** the load-bearing sentence, placed first   ·   **Pronunciation:** the load-bearing sentence read with nothing after it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs. A summarises something they read or wrote this month, in three sentences. ⚠ **B asks one question: what would I do differently, having heard that?** **If the answer is nothing, the summary has left out the part that matters** — **and in most pairs the answer is nothing.**'));
out.push(board('There is a great deal of interesting material in the report.', 'The one thing in it that changes what you do: the north wall has moved eleven millimetres since March.'));
out.push(p('**b**  Which names the load-bearing part? **1** _The report covers the history, the materials and the costs._  **2** _The one thing in it that changes what you do: the north wall has moved eleven millimetres since March._  **3** _There is a great deal of interesting material in it._  **4** _If you read nothing else: the plastering contract cannot be let until the wall has been surveyed._  **5** _I have summarised the main points._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a summary is, and what test does she give?   **A** a shorter version; count the words   **B** **not a shorter version but a version with the load-bearing part kept** — and the test is **to read it to somebody who will act and ask what they would now do**   **C** a list of the main points; ask whether anything is missing'));
out.push(p('**b**  Listen again. **1** What did Mrs Sweidan\'s one page leave out, and what did the committee then do?   **2** Where does Ms Huda say the load-bearing part usually is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  Eleven millimetres since March', [
  ['Ms Huda', 'Miss Sweidan. You summarised a forty-two page report into one page and something happened.'],
  ['Lubna', '**A conservation report on a house in Sarouja, for a committee of five who had not read it and were not going to.** ⚠ **I did the page in an evening and I was proud of it.**'],
  ['Ms Huda', '**What was on it?**'],
  ['Lubna', '**The history, the materials, the photographs, the condition of the roof, and the costs in three columns.** ⚠ **Everything the report spent forty pages on, in proportion.**'],
  ['Ms Huda', '**And what was not on it?**'],
  ['Lubna', '_(a pause)_ ⚠ **One sentence on page thirty-one.** **The north wall is moving and has moved eleven millimetres since March.**'],
  ['Ms Huda', '**What did the committee do?**'],
  ['Lubna', '⚠ **Approved a plastering contract.** **Which goes on the inside face of the north wall.**'],
  ['Ms Huda', '**So the summary was accurate, proportionate and complete, and it produced the one decision the report existed to prevent.** ⚠ **That is the unit in one page.** **A summary is not a shorter version of a document; it is a version with the load-bearing part kept.**'],
  ['Omar', 'How do you find it, if it is one sentence in forty pages?'],
  ['Ms Huda', '**Mechanically, and it is slow the first time.** ⚠ **Take each finding and ask: if the reader did not know this, what would they do that they should not do?** **Most findings produce no answer.** **The one that produces _let a plastering contract_ is the load-bearing part.**'],
  ['Adnan', 'That is a reader\'s question and not a writer\'s.'],
  ['Ms Huda', '**It is the reader\'s question and that is the point.** ⚠ **A summary written from the document is a précis; a summary written from the reader\'s next act is a summary.**'],
  ['Rim', 'And the test afterwards?'],
  ['Ms Huda', '**Read your summary to somebody who will act and ask what they would now do.** ⚠ **If their answer is what they were going to do anyway, the load-bearing part has gone** — **and they will not know it is missing, because nothing on your page looks absent.**'],
  ['Hiba', 'Does it go first?'],
  ['Ms Huda', '**First, and in its own sentence, and with its figure and its date on it.** ⚠ _The north wall has moved eleven millimetres since March._ **Not _there are some concerns about the north wall_**, which is the same sentence with the load-bearing part taken out of it.'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **The load-bearing sentence with nothing after it.** ⚠ **Say it, and stop, and let the room have it.** **Everybody puts _and of course the roof is in good condition_ on the end**, and the second clause takes the first one back — **not in meaning, but in weight, which is what the listener remembers.**'],
]));
out.push(sp());
out.push(box('Language box – the part that cannot go', [
  '⚠ **A summary is not a shorter version of a document.** **It is a version with the load-bearing part kept** — **and a page can be accurate, proportionate and complete and still have lost it.**',
  '**How to find it, and it is mechanical.** ⚠ **Take each finding and ask: if the reader did not know this, what would they do that they should not do?** **Most findings produce no answer; the one that does is the load-bearing part.**',
  '**It is almost never the longest part and almost never the first finding.** ⚠ **Forty-two pages, one sentence on page thirty-one** — **and the author of the report had not flagged it either.**',
  '**It is written from the reader and not from the document.** ⚠ **A summary written from the document is a précis; a summary written from the reader\'s next act is a summary.**',
  '**The test, afterwards.** ⚠ **Read it to somebody who will act and ask what they would now do.** **If their answer is what they were going to do anyway, the load-bearing part has gone** — **and they will not know it is missing, because nothing on your page looks absent.**',
  '**Where it goes: first, in its own sentence, with its figure and its date.** ⚠ _The north wall has moved eleven millimetres since March._ **Not _there are some concerns about the north wall_**, which is the same sentence with the load-bearing part removed.',
  '**The shapes.** _The one thing in this that changes what you do: ______._ _If you read nothing else: ______._ _Nothing else here alters the decision._ ⚠ **And the ones that name nothing:** _a great deal of interesting material_ · _I have summarised the main points_ · _the report covers_.',
  '**Pronunciation.** 🔊 **Track 18.2** **The load-bearing sentence with nothing after it.** ⚠ **Say it, and stop.** **Everybody adds _and of course the roof is in good condition_**, and the second clause takes the first one back — **not in meaning, but in weight, which is what the listener remembers.**',
  '**And the length paradox, which is the argument of the whole unit.** ⚠ **A faithful summary is usually longer than the one people write.** **The load-bearing part needs its figure, its date and its source** — _eleven millimetres, since March, from the March and October levels_ — **which is three clauses and not one word.**',
  '**Practise:** Name the load-bearing part, first, with its figure and date. **1** a report you have read  **2** a meeting you attended  **3** one where nothing is load-bearing, said plainly  **4** one with a second clause attached, so that you hear it  **5** one where the load-bearing part is on the last page',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the document and its findings from the card. B names **the load-bearing part, first, in one sentence with its figure** — and says what the reader would otherwise do. ⚠ **Two rows on each card have no load-bearing part at all**, and B must say so rather than promoting the most interesting finding. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the document, and what is in it)_ __________.'],
  ['B', '**The one thing in it that changes what you do: __________.** **Without it you would __________.**'],
]));
out.push(table(['Card A – the document', 'Card B – the document'], [
  ['_Conservation report, 42 pp: history, materials, costs, and a wall moving 11 mm._', '_Supplier audit, 30 pp: prices, delivery, and an expired insurance certificate._'],
  ['_⚠ Annual review, 18 pp: everything within range, no exceptions._', '_⚠ Site visit note, 4 pp: all five machines as expected._'],
  ['_Staff report, 12 pp: nine strengths and one unregistered qualification._', '_Print trial, 9 pp: eight good runs and a seal that lifted on the ninth._'],
  ['_⚠ Training summary, 6 pp: attendance, feedback, and a plan for June._', '_⚠ Stock count, 11 pp: every figure agreeing with the register._'],
  ['_Tender file, 25 pp: four bids, and one bidder in liquidation in March._', '_Ward audit, 20 pp: all records complete except the fourth-night checks._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the load-bearing part for each, and what the reader would otherwise do. ⚠ **The four rows marked ⚠ have nothing load-bearing in them** — **everything is as expected, and the honest summary says so in one line.** **A pair that promotes the most interesting finding has invented a load-bearing part**, which is harder to catch than leaving one out.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take something long you have read or written. ⚠ **Write its load-bearing sentence: one sentence, first, with its figure and its date** — **and then the reader\'s act it prevents.**'));
out.push(p('**b**  Swap and perform. Your partner reads your load-bearing sentence **and then adds a second clause of their own invention.** ⚠ You both say which version you would act on.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna summarised a forty-two page conservation report into one page, for a committee of five who had not read it and were not going to. She did the page in an evening and was proud of it: the history, the materials, the photographs, the condition of the roof, and the costs in three columns — everything the report spent forty pages on, in proportion. What was not on it was one sentence from page thirty-one: the north wall is moving and has moved eleven millimetres since March. The committee approved a plastering contract, which goes on the inside face of the north wall. So the summary was accurate, proportionate and complete, and it produced the one decision the report existed to prevent, which is the unit in one page: a summary is not a shorter version of a document, it is a version with the load-bearing part kept. Omar asked how you find one sentence in forty pages, and mechanically, and it is slow the first time: take each finding and ask what the reader would do, not knowing this, that they should not do. Most findings produce no answer, and the one that produces let a plastering contract is the load-bearing part. Adnan said that is a reader’s question and not a writer’s, and it is the reader’s question, and that is the point: a summary written from the document is a précis, and a summary written from the reader’s next act is a summary. Rim asked about the test afterwards, which is to read your summary to somebody who will act and ask what they would now do — and if their answer is what they were going to do anyway, the load-bearing part has gone, and they will not know it is missing, because nothing on the page looks absent. Hiba asked whether it goes first, and first, in its own sentence, with its figure and its date on it. And Mazen asked about reading it out: the load-bearing sentence with nothing after it, because everybody adds a second clause and the second clause takes the first one back in weight._'));
out.push(p('**Listener task:** write your partner\'s load-bearing sentence and the act it prevents.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lubna writes after the committee meeting. Answer the questions.'));
out.push(model([
  '**PAGE THIRTY-ONE** · L. Sweidan · 2 May · _for the studio, and for whoever writes the next committee page_',
  '**I summarised a forty-two page report into one page and the committee let the one contract the report existed to prevent.** ⚠ **Every sentence on my page was accurate.**',
  '**What I put on it.** **The history of the house, the materials, four photographs, the condition of the roof, and the costs in three columns.** ⚠ **In proportion to the report: four pages on the roof became four lines, and twelve pages of history became twelve.**',
  '**What I left off.** **One sentence from page thirty-one.** ⚠ _The north wall has moved eleven millimetres since March._ **It is one sentence in a forty-two page report and the report does not say it twice.**',
  '**What the committee did.** ⚠ **Approved the plastering contract**, **which goes on the inside face of the north wall**, **and which will have to come off again.** **Two and a half million pounds, and about three weeks of a plasterer\'s time.**',
  '**Why I left it off, which is the part I did not expect.** ⚠ **Because I was summarising the report and not the decision.** **I kept everything in proportion to how much of the report it occupied** — **and the report gave the wall one sentence out of forty-two pages, so I gave it nothing out of one page.** **Proportion is the wrong rule and I had been taught it as the right one.**',
  '**And the thing I shall say about the report\'s author, because it is true and it is not an excuse.** ⚠ **He had not flagged it either.** **It sits between a paragraph on lime plaster and a paragraph on the window reveals, in the same type, with no heading.** **Somebody who reads forty-two pages properly finds it; nobody reads forty-two pages properly.**',
  '**What goes at the top of the next page I write.** ⚠ _The one thing in this report that changes what you do: the north wall has moved eleven millimetres since March, and nothing should be fixed to it until it has been surveyed._ **Thirty-one words, and then the history, the materials and the costs, and I do not care how long the rest is.**',
]));
out.push(item('1', 'What rule did she follow in writing the page, and why does she now say it is the wrong one?'));
out.push(item('2', 'What did the committee approve, and what will it cost?'));
out.push(item('3', 'What does she say about the report\'s author, and what will go at the top of her next page?'));
out.push(writers([
  'A note about a summary that lost its load-bearing part: **what you did and what it produced, in the first two lines** → **what you put on the page** → **what you left off, quoted** → **what the reader then did, priced** → **why you left it off** → **the rule you had been following** → **the author\'s share, named and not used as an excuse** → **and the sentence that goes at the top of the next one.**',
  '⚠ **Concede the accuracy before anything else.** _Every sentence on my page was accurate._ **It is what makes the note worth reading**: a summary that was wrong is a mistake, and a summary that was right and still did harm is a method.',
  '**Quote the sentence you left off, in full, and say how long the document was.** _One sentence in a forty-two page report, and the report does not say it twice._ ⚠ **The arithmetic is the argument** and no adjective does the same work.',
  '**Price the reader\'s act.** _Two and a half million pounds, and about three weeks of a plasterer\'s time._ ⚠ **A summary\'s cost is always somebody else\'s work**, which is why it is invisible to the person who wrote it.',
  '⚠ And **name the rule you had been taught.** _I kept everything in proportion to how much of the report it occupied._ **Then the correction, in one line:** _proportion is the wrong rule._ **A note that blames carelessness has found nothing; a note that names a rule can be used by somebody else tomorrow.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a summary that lost its load-bearing part (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **I summarised ______________ into ______________ and ______________.** ⚠ **Every sentence on my page was accurate.**   **What I put on it.** ______________. ⚠ **In proportion to ______________.**   **What I left off.** ⚠ _"______________."_ **It is ______ sentence in a ______ page ______________.**   **What ______________ then did.** ⚠ ______________. **______________, and about ______________.**   **Why I left it off.** ⚠ **Because I was summarising ______________ and not ______________.**   **The rule I had been following.** ⚠ ______________. **______________ is the wrong rule.**   **And ______________\'s share, which is true and is not an excuse.** ⚠ ______________.   **What goes at the top of the next one.** ⚠ _"______________."_'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The accuracy conceded before anything else',
  'The omitted sentence quoted, with the document\'s length',
  'The reader\'s act priced in money or in somebody\'s work',
  'The rule named, and corrected in one line',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentence they left off**, and the room says what a reader would have done differently on hearing it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the accuracy conceded, the omitted sentence quoted with the arithmetic, the act priced, and the rule named and corrected.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the accuracy conceded first, the omitted sentence quoted with the document\'s length, the reader\'s act priced, and a rule named rather than carelessness.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your load-bearing sentence and stop. Then read it again with a second clause attached.** ⚠ **The room says which one it would act on**, and it is the first, and the words of the first are inside the second. Then the sentence the cycle ends on, which is Miss Sweidan\'s: **proportion is the wrong rule and I had been taught it as the right one.**'));
out.push(hw('Write the note (80+ words). ⚠ Then take the last summary you wrote and do the mechanical test on it: **for each finding, what would the reader do, not knowing this, that they should not do?** **Most will produce nothing.** **Write down the one that does** — **and if it is not in the first line of your summary, move it.** **18.2 is about what happens to everything else once the load-bearing part is first.** ⚠ **And bring a long document and the one-page version somebody made of it.**'));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  The order, not the proportion'));
out.push(p('**Function:** arranging what survives — three bands instead of a proportion   ·   **Grammar:** the three bands, labelled on the page   ·   **Pronunciation:** the band labels said as labels and not as sentences'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take the summary you wrote for 18.1 homework. ⚠ **Mark each sentence 1, 2 or 3: _changes the decision_, _must be checked before acting_, _can be ignored_.** **Your partner marks it too, without being told your marks.** **In most pairs the two markings disagree on about half the sentences**, which is the cycle.'));
out.push(board('I have included the main points in order of importance.', 'What changes the decision: the wall has moved eleven millimetres. Before you act, check the survey date and who took the levels. Nothing else here alters it.'));
out.push(p('**b**  Which is a band label? **1** _The report also discusses the window reveals._  **2** _What changes the decision: the wall has moved eleven millimetres since March._  **3** _I have included the main points in order of importance._  **4** _Before you act, two things to check: the date of the survey, and who took the levels._  **5** _The remainder is summarised below in the order of the original._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three bands does Ms Huda give, and what does she say about the third?   **A** important, less important, unimportant; the third should be left out   **B** **what changes the decision · what must be checked before acting · what can be ignored** — and **the third is one sentence and never a list**   **C** findings, recommendations, appendices; the third goes first'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say she gets, and what has she got room for?   **2** What does Ms Huda say to do when you cannot tell whether something is band one or band two?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  Three bands and one sentence', [
  ['Ms Huda', 'Mrs Khoury. You cut other people\'s writing for a living. What arrives and what have you room for?'],
  ['Dima', '⚠ **Four thousand words arrive and I have three hundred.** **Twice a week, for six years.**'],
  ['Ms Huda', '**And how do you choose?**'],
  ['Dima', '**I used to keep things in proportion** — **a quarter of the submission on costs, so a quarter of my three hundred on costs.** ⚠ **It produces a page that is a map of the submission.** **Nobody wants a map of the submission.**'],
  ['Ms Huda', '**And now?**'],
  ['Dima', '**Three bands, and I write the labels on the page.** ⚠ **What changes the decision. What has to be checked before anybody acts. And what can be ignored.**'],
  ['Ms Huda', '**Say the third one again, because it is the one nobody believes.**'],
  ['Dima', '⚠ **What can be ignored** — **and it is one sentence.** _Nothing else here alters the decision._ **Six words at the end.**'],
  ['Omar', 'Surely you have to say what the rest was?'],
  ['Dima', '**That is exactly what I used to do and it took half my space.** ⚠ **A list of what does not matter is the commonest way of hiding what does** — **and a reader cannot tell a long band three from a short band one.**'],
  ['Ms Huda', '**And that is the test for the whole page.** ⚠ **Can the reader tell which band each sentence is in?** **If they cannot, every sentence is band two** — **and a page of band two is a document the reader has to read all of, which is what they came to you to avoid.**'],
  ['Adnan', 'Band two is the one I would get wrong. What is in it?'],
  ['Ms Huda', '**Only what has to be true before the reader acts.** ⚠ **The date of the survey. Who took the levels. Whether the certificate is current.** **Two or three things, each a clause** — **and if band two runs to eight items, some of them are band three and you have not decided.**'],
  ['Rim', 'And when you cannot tell whether something is one or two?'],
  ['Ms Huda', '⚠ **Then it is band one, and that rule should be written on the wall.** **Promoting a sentence costs the reader four seconds.** **Demoting it cost Miss Sweidan a plastering contract.**'],
  ['Lubna', 'And the labels — on the page, in those words?'],
  ['Ms Huda', '**On the page, in those words, every time.** ⚠ **A reader who has seen the three labels once reads the next page in eleven seconds** — **and the labels are what make the page shorter, not the cutting.**'],
  ['Mazen', 'And saying the labels out loud?'],
  ['Ms Huda', '🔊 **As labels, not as sentences: a short fall, then a stop.** ⚠ _What changes the decision._ **Then the stop, then the finding.** **Said as a sentence** — _what changes the decision is that the wall has moved_ — **it becomes a clause and the reader stops hearing the structure**, which is the only thing you were buying with it.'],
]));
out.push(sp());
out.push(box('Language box – the three bands', [
  '**Three bands, labelled on the page, always in this order.** ⚠ **1 What changes the decision.** **2 What must be checked before acting.** **3 What can be ignored.**',
  '**Proportion produces a map of the document.** ⚠ **A quarter of the submission on costs, so a quarter of your page on costs** — **and nobody wants a map of the submission.** **Bands produce a map of the decision.**',
  '**Band three is one sentence and never a list.** ⚠ _Nothing else here alters the decision._ **Six words at the end.** **A list of what does not matter is the commonest way of hiding what does.**',
  '**Band two holds only what must be true before the reader acts.** ⚠ **The date of the survey, who took the levels, whether the certificate is current** — **two or three things, each a clause.** **If band two runs to eight items, some of them are band three and you have not decided.**',
  '**The rule for doubt, and it should be written on the wall.** ⚠ **If you cannot tell whether something is band one or band two, it is band one.** **Promoting a sentence costs the reader four seconds; demoting one cost a plastering contract.**',
  '**The test for the whole page.** ⚠ **Can the reader tell which band each sentence is in?** **If they cannot, every sentence is band two** — **and a page of band two is a document they have to read all of, which is what they came to you to avoid.**',
  '**The order never changes.** ⚠ **Band one first, even when band two sounds more urgent**, **and band three last and alone.** **A page that opens with what must be checked has told the reader to check something before saying what for.**',
  '**Pronunciation.** 🔊 **Track 18.4** **The labels as labels: a short fall, then a stop.** ⚠ _What changes the decision._ **Then the finding.** **Said as a sentence** — _what changes the decision is that the wall has moved_ — **it becomes a clause and the reader stops hearing the structure.**',
  '**And the labels are what shorten the page, not the cutting.** ⚠ **A reader who has seen the three labels once reads the next page in about eleven seconds** — **and they can stop after band one if they choose, which no proportioned summary ever allows.**',
  '**Practise:** Label the three bands and put them in order. **1** a report  **2** a meeting  **3** one where band one is empty  **4** one with a band three that has become a list, and the repair  **5** one where you cannot tell band one from band two',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the findings from the card. B puts them in **three labelled bands**, with band three in one sentence. ⚠ **Two rows on each card contain a finding that could be band one or band two**, and B must promote it and say why. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the findings)_ __________.'],
  ['B', '**What changes the decision:** __________. **Before you act, check:** __________. **Nothing else here alters it.**'],
]));
out.push(table(['Card A – the findings', 'Card B – the findings'], [
  ['_Wall moved 11 mm · levels taken in March · roof sound · costs in three columns._', '_Certificate expired · prices second of four · references detailed · delivery nine of eleven._'],
  ['_⚠ Seal lifted once · nine good runs · the ninth run was the longest._', '_⚠ One figure corrected after circulation · three sources named · two are the same source._'],
  ['_Qualification unregistered · nine strengths · two referees from one office._', '_Reject rate nine sheets · limit three a quarter · the nine are one run._'],
  ['_⚠ Bidder in liquidation in March · lowest price · delivery by August._', '_⚠ Fourth-night checks missing · all other records complete · the ward moved in June._'],
  ['_Everything within range · no exceptions · next review in June._', '_All five machines as expected · the log signed · the relief clerk on duty._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three bands for each, and which finding was promoted. ⚠ **The four rows marked ⚠ each hold something a careful reader could put in either of the first two bands** — **and the rule is to promote it.** **Ask the listeners what promoting cost** — **four seconds** — **and then what demoting the wall cost.** **The asymmetry is the argument.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your 18.1 summary and rewrite it in **three labelled bands**, with band three in one sentence. ⚠ **Count the words you have taken out of band three** — **in most first attempts it is between a third and a half of the page.**'));
out.push(p('**b**  Swap. Your partner marks each of your sentences 1, 2 or 3 **without seeing your labels.** ⚠ Then you compare. **Every disagreement is a sentence whose band is not on the page.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dima cuts other people’s writing for a living: four thousand words arrive and she has three hundred, twice a week, for six years. She used to keep things in proportion — a quarter of the submission on costs, so a quarter of her three hundred on costs — which produces a page that is a map of the submission, and nobody wants a map of the submission. Now she uses three bands and writes the labels on the page: what changes the decision, what has to be checked before anybody acts, and what can be ignored. The third is the one nobody believes: what can be ignored is one sentence — nothing else here alters the decision — six words at the end. Omar said surely you have to say what the rest was, and that is exactly what she used to do and it took half her space: a list of what does not matter is the commonest way of hiding what does, and a reader cannot tell a long band three from a short band one. Which is the test for the whole page — can the reader tell which band each sentence is in? If they cannot, every sentence is band two, and a page of band two is a document the reader has to read all of, which is what they came to you to avoid. Adnan said band two is the one he would get wrong, and it holds only what has to be true before the reader acts: the date of the survey, who took the levels, whether the certificate is current. Two or three things, each a clause — and if band two runs to eight items, some of them are band three and you have not decided. Rim asked what to do when you cannot tell whether something is one or two, and then it is band one, and that rule should be written on the wall: promoting a sentence costs the reader four seconds, and demoting one cost Lubna a plastering contract. Lubna asked whether the labels go on the page in those words, and on the page, in those words, every time — a reader who has seen the three labels once reads the next page in about eleven seconds, and the labels are what make the page shorter, not the cutting. And Mazen asked about saying the labels out loud, which is as labels and not as sentences — a short fall, then a stop._'));
out.push(p('**Listener task:** write how many of your partner\'s sentences you and they put in different bands.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Dima writes for the other sub-editors. Answer the questions.'));
out.push(model([
  '**THREE HUNDRED WORDS, THREE BANDS** · D. Khoury · 4 May · _for the three of us who cut the submissions_',
  '**For six years I cut four thousand words to three hundred by proportion, and I am going to describe what that produced, because none of us was taught anything else.** ⚠ **It produced a map of the submission.**',
  '**What proportion does.** **A submission spends a quarter of itself on costs, so I gave costs a quarter of my three hundred.** ⚠ **The page was faithful and it was useless** — **a reader who wanted to know what to do had to read all of it and then decide for himself, which is what he had sent the submission to me to avoid.**',
  '**What I do now, and the labels are printed.** ⚠ **_What changes the decision_** — **one finding, first, with its figure.** **_Before you act, check_** — **two or three clauses, never more.** **_Nothing else here alters the decision_** — **one sentence, at the end, and no list.**',
  '**The band that cost me the most to learn.** ⚠ **The third.** **I used to spend ninety of my three hundred words saying what the rest of the submission contained** — **which is a list of what does not matter, and a reader cannot tell it from a list of what does.** **Ninety words buys nothing and hides everything.**',
  '**The arithmetic, since we are a trade bulletin and everybody here counts.** ⚠ **A proportioned three hundred takes a reader about ninety seconds and leaves him to decide.** **A banded three hundred takes eleven seconds if he stops after band one, which he usually should.** **Same words. Same facts. Eighty seconds, times about four hundred readers, times twice a week.**',
  '**And the rule I have written above my desk.** ⚠ _If you cannot tell whether it is band one or band two, it is band one._ **Promoting costs the reader four seconds.** **Demoting is how a committee lets a plastering contract on a wall that is moving.**',
  '**One thing I have not solved.** ⚠ **Contributors hate it.** **A banded summary shows which four lines of their four thousand words mattered**, **and eleven of them have said so** — **and I have no answer except that the page is for the reader and not for the writer, which is true and does not make it comfortable.**',
]));
out.push(item('1', 'What did proportion produce, and why does she call the page useless?'));
out.push(item('2', 'What is the arithmetic she gives, and what are the two figures?'));
out.push(item('3', 'What rule is above her desk, and what has she not solved?'));
out.push(writers([
  'A page about replacing proportion with bands: **what you did for how long, and what it produced** → **what proportion does, with an example** → **the three labels, printed** → **the band that was hardest to learn** → **the arithmetic, in the reader\'s seconds** → **the rule above your desk** → **and one thing you have not solved.**',
  '⚠ **Say that nobody taught you anything else.** _None of us was taught anything else._ **A page that presents the old method as stupidity will not be read by the people still using it**, and they are the audience.',
  '**Give the useless page its due before you condemn it.** _The page was faithful and it was useless._ ⚠ **Both halves in one sentence**, because the second is only believable after the first.',
  '**Put the saving in the reader\'s seconds and then multiply.** _Eighty seconds, times about four hundred readers, times twice a week._ ⚠ **A saving stated once is an opinion; a saving multiplied is a case.**',
  '⚠ And **end on the cost to somebody else.** _A banded summary shows which four lines of their four thousand words mattered, and eleven of them have said so._ **Then the answer, which is true and uncomfortable:** _the page is for the reader and not for the writer._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about replacing proportion with bands (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **For ______ years I ______________ by proportion, and I am going to describe what that produced.** ⚠ **It produced ______________.**   **What proportion does.** ______________. ⚠ **The page was faithful and it was ______________.**   **What I do now.** ⚠ **_What changes the decision_** — ______________. **_Before you act, check_** — ______________. **_Nothing else here alters it_** — ______________.   **The band that cost me the most to learn.** ⚠ **The ______.** ______________.   **The arithmetic.** ⚠ **______________ takes a reader about ______________.** **______________ takes ______________.** **Same words, times ______________.**   **And the rule above my desk.** ⚠ _"______________."_   **One thing I have not solved.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The old method given its due in the same sentence',
  'The three labels printed in the writer\'s own words',
  'The saving in the reader\'s seconds, and multiplied',
  'One thing not solved, with its cost to somebody else',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their band three**, and the room says whether it is one sentence or a list in disguise.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: the old method given its due, the labels printed, the saving multiplied, and something unsolved at the end.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the old method given its due, the three labels printed, the saving in the reader\'s seconds and multiplied, and one unsolved cost.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your three labels aloud, as labels: a short fall and a stop.** ⚠ **Then read the first one as a sentence** — _what changes the decision is that…_ — **and the room says at which version it stopped hearing the structure.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **ninety words buys nothing and hides everything.**'));
out.push(hw('Write the page (80+ words). ⚠ Then band the one-page summary you brought: **mark every sentence 1, 2 or 3, and count what is in band three.** **Then write band three as one sentence and see what you have left.** **In most pages it is between a third and a half.** **18.3 does it to a meeting** — **ninety minutes into six lines** — **which is the hardest summarising any of you will be asked for.** ⚠ **And bring the minutes of a meeting you attended.**'));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  Ninety minutes in six lines'));
out.push(p('**Function:** summarising a meeting for people who were not there   ·   **Grammar:** the six lines, each with one job   ·   **Pronunciation:** the decision read without the discussion attached to it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the minutes you brought. ⚠ **Find the decision and read it out.** **Then count the words in the whole document and the words in the decision.** **In most sets of minutes the ratio is worse than twenty to one**, and in two or three there is no decision in them at all.'));
out.push(board('There was a wide-ranging discussion of the car park.', 'Decided: the January order goes to Dar al-Kutub at the quoted price. (Mr Saqqal, under the 2023 delegation.) Placed by 20 May, by the stores clerk.'));
out.push(p('**b**  Which is a decision line? **1** _There was a wide-ranging discussion of the car park._  **2** _Decided: the January order goes to Dar al-Kutub at the quoted price. (Mr Saqqal, under the 2023 delegation.)_  **3** _It was felt that the matter should be considered further._  **4** _Not decided: the February order. On the agenda for 5 June._  **5** _The committee noted the report with thanks._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does Ms Huda say minutes are for, and what does she say the sixth line is?   **A** the chairman; the sixth line is the date of the next meeting   **B** **for people who were not there** — and the sixth line is **what the time was actually spent on, if it was not any of the first five**   **C** the file; the sixth line is an apology'));
out.push(p('**b**  Listen again. **1** What did Mr Barghouti count, and what were the two figures?   **2** What does Ms Huda say the fourth line prevents?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  Nineteen hundred words and sixty', [
  ['Ms Huda', 'Mr Barghouti. You have taken minutes for nineteen years. You counted a set.'],
  ['Adnan', '⚠ **Nineteen hundred words.** **Sixty of them were the decision.**'],
  ['Ms Huda', '**And the other eighteen hundred and forty?**'],
  ['Adnan', '**The discussion.** ⚠ **Who said what, in the order they said it, with nothing left out** — **because that is what I was taught minutes were.**'],
  ['Ms Huda', '**And who reads minutes?**'],
  ['Adnan', '⚠ **People who were not there.** **Which I had never said to myself in nineteen years.** **The people who were there do not need them.**'],
  ['Ms Huda', '**That one sentence settles the whole cycle.** ⚠ **Minutes that record the discussion are a transcript, and a transcript is read by nobody.** **Minutes that record the decision are read by people who have to act on it and were not in the room.**'],
  ['Omar', 'So what goes in? You said six lines.'],
  ['Ms Huda', '**Six, and each has one job.** ⚠ **One: what was decided, in the words of the decision, quoted.** **Two: by whom, and under what authority.** **Three: by when, and who acts.**'],
  ['Dima', 'And the other three?'],
  ['Ms Huda', '⚠ **Four: what was _not_ decided, and when it will be.** **Five: what a reader should do if they disagree.** **Six: what the time was actually spent on, if it was not any of the first five.**'],
  ['Rim', 'The fourth one is new to me.'],
  ['Ms Huda', '**It is the line that prevents the meeting being held again.** ⚠ **A reader who cannot tell what was left open assumes everything was settled** — **and then somebody acts on the February order, which nobody decided.** _Not decided: the February order. On the agenda for 5 June._ **Twelve words.**'],
  ['Adnan', 'And the sixth is the one I cannot believe I am allowed to write.'],
  ['Ms Huda', '⚠ **_Fifty of the ninety minutes went on the car park, and it changed nothing._** **It is true, it is useful, and it is the only line in any set of minutes anybody reads twice.**'],
  ['Hiba', 'And if you cannot write the first line at all?'],
  ['Ms Huda', '**Then say so, and say it before the room disperses.** ⚠ _I cannot write what was decided. Can somebody give me the sentence?_ **Nine words, and the alternative is a set of minutes that invents a decision** — **which is the worst document in this unit, because it will be acted on.**'],
  ['Mazen', 'And reading the decision out?'],
  ['Ms Huda', '🔊 **The decision with no discussion attached.** ⚠ _Decided: the January order goes to Dar al-Kutub at the quoted price._ **Then stop.** **Not _after a long discussion in which several views were expressed, it was decided that…_** — **that opening is eleven words of apology, and the listener has stopped attending before the decision arrives.**'],
]));
out.push(sp());
out.push(box('Language box – ninety minutes in six lines', [
  '⚠ **Minutes are for people who were not there.** **The people who were there do not need them** — **and that one sentence decides everything else on this page.**',
  '**Minutes that record the discussion are a transcript, and a transcript is read by nobody.** ⚠ **Nineteen hundred words and sixty of them the decision** — **which is what nineteen years of being taught that minutes record who said what produces.**',
  '**Six lines, each with one job.** ⚠ **1 What was decided, in the words of the decision, quoted.** **2 By whom, and under what authority.** **3 By when, and who acts.**',
  '⚠ **4 What was _not_ decided, and when it will be.** **5 What a reader should do if they disagree.** **6 What the time was actually spent on, if it was not any of the first five.**',
  '**Line four prevents the meeting being held again.** ⚠ **A reader who cannot tell what was left open assumes everything was settled**, and then somebody acts on the thing nobody decided. _Not decided: the February order. On the agenda for 5 June._ **Twelve words.**',
  '**Line six is the only line in any set of minutes that anybody reads twice.** ⚠ _Fifty of the ninety minutes went on the car park, and it changed nothing._ **It embarrasses the agenda, which is the thing that needs it** — **written twice, it took the car park off the standing agenda, which no complaint had managed in four years.**',
  '**And if you cannot write line one, say so before the room disperses.** ⚠ _I cannot write what was decided. Can somebody give me the sentence?_ **Nine words.** **The alternative is minutes that invent a decision, which will be acted on.**',
  '**The shapes.** _Decided: ______. (______, under ______.)_ _By ______, by ______._ _Not decided: ______. On the agenda for ______._ _If you disagree, ______ by ______._ ⚠ **And the ones that record nothing:** _a wide-ranging discussion_ · _it was felt that_ · _noted with thanks_ · _several views were expressed_.',
  '**Pronunciation.** 🔊 **Track 18.6** **The decision with no discussion attached.** ⚠ _Decided: the January order goes to Dar al-Kutub at the quoted price._ **Then stop.** **Not _after a long discussion in which several views were expressed…_** — **eleven words of apology, and the listener has stopped attending before the decision arrives.**',
  '**Practise:** The six lines, in order. **1** a decision quoted, with its authority  **2** who acts, by when  **3** what was not decided  **4** what the time went on  **5** one where you cannot write line one, said before the room disperses',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the meeting from the card — what happened, in the order it happened. B writes **the six lines.** ⚠ **Two meetings on each card ended without a decision**, and B must write line one as _not decided_ and say so to the room before it disperses. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(what happened, in order)_ __________.'],
  ['B', '**Decided:** __________. **(__________, under __________.)** **By __________.** **Not decided:** __________. **If you disagree:** __________. **The time went on** __________.'],
]));
out.push(table(['Card A – the meeting', 'Card B – the meeting'], [
  ['_90 min: car park 50, January order 12, February order raised and dropped._', '_60 min: reject limit 15, Ramadan hours 35, the limit confirmed at three._'],
  ['_⚠ 75 min: four views on the new form, no vote, chairman away._', '_⚠ 45 min: the second signature discussed twice, nothing put to the meeting._'],
  ['_50 min: weighting published, trial agreed for four months including a December._', '_80 min: analyser trial agreed, training not settled, Miss Mansour away in July._'],
  ['_⚠ 30 min: the agenda was read and the meeting adjourned for a quorum._', '_⚠ 55 min: the budget line discussed; the figure is not yet with us._'],
  ['_40 min: plastering contract approved, survey of the north wall not raised._', '_65 min: tender awarded to the second bidder, reference condition attached._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the six lines for each meeting, and whether line one is a decision. ⚠ **The four rows marked ⚠ produced no decision at all**, and the honest line one is _not decided_ with a date. **A pair that writes a decision for one of those four has produced the worst document in the unit** — **minutes that invent a decision, which somebody will act on.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the minutes you brought and rewrite them as **six lines.** ⚠ **Then count: the words in the original, and the words in your six.** **Write both figures at the top.**'));
out.push(p('**b**  Swap. Your partner reads your line one **first with the discussion attached** — _after a long discussion…_ — **and then alone.** ⚠ They say at which word they stopped attending.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Adnan has taken minutes for nineteen years, and he counted a set: nineteen hundred words, sixty of them the decision. The other eighteen hundred and forty were the discussion — who said what, in the order they said it, with nothing left out, because that is what he was taught minutes were. Asked who reads minutes, he said people who were not there, which he had never said to himself in nineteen years: the people who were there do not need them. That one sentence settles the whole cycle — minutes that record the discussion are a transcript, and a transcript is read by nobody, while minutes that record the decision are read by people who have to act on it and were not in the room. Omar asked what goes in, and six lines, each with one job: what was decided, in the words of the decision, quoted; by whom, and under what authority; by when, and who acts. Dima asked about the other three, and four is what was not decided and when it will be, five is what a reader should do if they disagree, and six is what the time was actually spent on if it was not any of the first five. Rim said the fourth was new to her, and it is the line that prevents the meeting being held again: a reader who cannot tell what was left open assumes everything was settled, and then somebody acts on the February order, which nobody decided. Not decided: the February order, on the agenda for 5 June — twelve words. Adnan said the sixth is the one he cannot believe he is allowed to write, and fifty of the ninety minutes went on the car park and it changed nothing is true, useful, and the only line in any set of minutes anybody reads twice. Hiba asked what happens if you cannot write the first line at all, and then you say so before the room disperses — I cannot write what was decided, can somebody give me the sentence? Nine words, and the alternative is minutes that invent a decision, which is the worst document in the unit because it will be acted on. And Mazen asked about reading the decision out, which is done with no discussion attached._'));
out.push(p('**Listener task:** write your partner\'s line one and line six, and the two word-counts.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minutes Adnan now writes, and the note under them. Answer the questions.'));
out.push(model([
  '**PURCHASING COMMITTEE · 6 MAY · SIX LINES** · A. Barghouti',
  '**Decided.** _The January print order goes to Dar al-Kutub Press at the quoted price of 4,100,000 pounds._ ⚠ **(Mr Saqqal, under the delegation of 11 March 2023.)**',
  '**By when, and who.** **Placed by 20 May, by the stores clerk, on the standard order form**, **and the order number is to be sent to me on the day it is placed so that the February paper can refer to it.**',
  '**Not decided.** ⚠ **The February order.** **It was raised and dropped for want of the budget line.** **On the agenda for 5 June, and the budget line is to be with us by 1 June.**',
  '**If you disagree.** **Write to me by 16 May, saying which part, and it goes to Mr Saqqal before the order is placed.** ⚠ **After 20 May it is a variation and costs money** — **about a tenth of the order on the last two we varied, and three weeks.** **Nobody has ever written to me in the four days, and two people have written in the week after the order went out.**',
  '**What the ninety minutes went on.** ⚠ **Fifty minutes on the car park.** **It changed nothing and it is on the standing agenda.** **Twelve minutes on the January order. Eight on the February order. The rest on arriving and leaving.**',
  '**NOTE, which is not part of the minutes.** ⚠ **This is the fourth set I have written this way and the first in which nobody asked me for the discussion.** **The old version of this meeting ran to about nineteen hundred words and the decision in it was sixty.** **I have been circulating, for nineteen years, a document in which the thing to be acted on was three per cent of the text** — **and it was accurate, and complete, and I was thanked for it.**',
  '**And one thing the sixth line has done.** ⚠ **I wrote _fifty minutes on the car park, and it changed nothing_ in March and again in April.** **The car park came off the standing agenda on 29 April.** **Four years of people complaining about it in the room achieved nothing; two lines in a document achieved it** — **because the complaint was in the meeting and the line was in front of the people who set the agenda.**',
]));
out.push(item('1', 'What was not decided, and what two dates does he give for it?'));
out.push(item('2', 'What does he say about the old version of this meeting, and what is the figure?'));
out.push(item('3', 'What did the sixth line achieve, and why does he say it worked when complaining did not?'));
out.push(writers([
  'Minutes in six lines, and a note under them: **the decision quoted, with its authority in brackets** → **by when, and who acts** → **what was not decided, with two dates** → **the route for disagreement, with a deadline and what happens after it** → **what the time went on, in minutes** → **then a note, marked as not part of the minutes.**',
  '⚠ **Quote the decision and bracket the authority.** _(Mr Saqqal, under the delegation of 11 March 2023.)_ **Without the authority a reader cannot tell whether the decision was the meeting\'s to take**, and that is the first thing anybody asks three months later.',
  '**Give the open item two dates, not one.** _On the agenda for 5 June, and the budget line is to be with us by 1 June._ ⚠ **One date is a promise about a meeting; two dates are a promise about the work.**',
  '**Say what happens after the deadline.** _After 20 May it is a variation and costs money._ ⚠ **Eleven words, and they are worth more to the reader than the deadline itself.**',
  '⚠ And **put the arithmetic in the note and not in the minutes.** _Nineteen hundred words, and the decision in it was sixty._ **Then the uncomfortable half:** _it was accurate, and complete, and I was thanked for it._ **A note that calls the old document careless has misdiagnosed it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the six lines and the note (80 words or more).'));
out.push(p('**______________ · ______________ · SIX LINES** · ______________   **Decided.** _"______________."_ ⚠ **(______________, under ______________.)**   **By when, and who.** ______________.   **Not decided.** ⚠ ______________. **On the agenda for ______________, and ______________ by ______________.**   **If you disagree.** ______________ **by ______________, and it goes to ______________.** ⚠ **After ______________ it is ______________.**   **What the ______ minutes went on.** ⚠ ______________.   **NOTE, which is not part of the minutes.** ⚠ **The old version ran to about ______ words and the decision in it was ______.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision quoted, with its authority bracketed',
  'The open item with two dates',
  'What happens after the deadline',
  'The arithmetic in the note, with the old document given its due',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their line six**, and the room says whether it would change an agenda.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full six lines and note (180 words or more), to the shape in the writer\'s box: the decision quoted with its authority, two dates on the open item, the deadline\'s consequence, and the arithmetic in the note.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the decision quoted with its authority, two dates on the open item, what happens after the deadline, and the arithmetic kept in the note.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your line one twice: with the discussion attached, then alone.** ⚠ **The room says at which word it stopped attending**, and it is usually the fourth. Then the sentence the cycle ends on, which is Mr Barghouti\'s: **I have been circulating, for nineteen years, a document in which the thing to be acted on was three per cent of the text.**'));
out.push(hw('Write the six lines and the note (80+ words). ⚠ Then do the count on a real set of minutes: **the words in the document, and the words in the decision.** **Write the ratio at the top.** **If there is no decision in them, write that instead** — **it is a more useful finding and it is commoner than anybody expects.** **18.4 is about the one thing in a summary that must never be rounded**, which is where Miss Sweidan\'s eleven millimetres comes back. ⚠ **And bring one figure you have seen rounded in a summary.**'));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  The figure you must not round'));
out.push(p('**Function:** deciding which figures survive a summary unrounded   ·   **Grammar:** the figure with its unit, its date and its source   ·   **Pronunciation:** the exact figure said exactly, with no _about_ in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the rounded figure you brought. ⚠ **Say the rounded version and then the real one.** **Then one question: is there a number at which somebody acts?** **If there is, say both figures again and listen to which side of it each one falls on.**'));
out.push(board('The wall has moved about a centimetre.', 'The wall has moved eleven millimetres since March, from the March and October levels.'));
out.push(p('**b**  Which figure must survive unrounded? **1** _The house is about a hundred years old._  **2** _The wall has moved eleven millimetres since March._  **3** _The report runs to about forty pages._  **4** _Four pallets were eleven degrees above the limit._  **5** _The committee has about five members._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What rule does Ms Huda give for rounding, and what does she say about the word _about_?   **A** never round anything; _about_ is always wrong   **B** **round a figure that describes and never a figure that triggers** — and **_about_ is honest when the measurement is approximate and dishonest when the measurement is exact and you are saving space**   **C** round to two figures; _about_ is a matter of style'));
out.push(p('**b**  Listen again. **1** What happened to Miss Sweidan\'s eleven millimetres in the second summary?   **2** What does Mrs Shaaban say about her own eleven degrees?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  About a centimetre', [
  ['Ms Huda', 'Miss Sweidan. The eleven millimetres went into the next summary. What happened to it?'],
  ['Lubna', '⚠ **It became _about a centimetre_.** **I wrote that myself, in June, because the sentence was long and I was tidying it.**'],
  ['Ms Huda', '**And what is ten millimetres?**'],
  ['Lubna', '**The figure in the conservation standard at which a structural survey is required.** ⚠ **Eleven triggers it. About a centimetre does not.**'],
  ['Ms Huda', '**Say the arithmetic, because this is the cycle.**'],
  ['Lubna', '⚠ **Eleven is on one side of the threshold and _about a centimetre_ reads as ten or under, which is the other side.** **I did not change the measurement. I changed which side of the line it fell on.**'],
  ['Ms Huda', '**And that is the rule, and it is the only one you need.** ⚠ **Round a figure that describes. Never round a figure that triggers.**'],
  ['Omar', 'How do I know which is which?'],
  ['Ms Huda', '**Three questions, and the first two take four seconds.** ⚠ **Is this figure compared with anything? Does anybody act at a particular value? Would the reader notice if it were wrong by the amount I am rounding by?**'],
  ['Dima', 'And _about_?'],
  ['Ms Huda', '**_About_ is honest when the measurement is approximate.** ⚠ **It is dishonest when the measurement is exact and you are saving space** — **and that is almost every _about_ in a summary.** **The report said eleven. The summary said about ten.**'],
  ['Rim', 'Mine is the same figure in a different trade. ⚠ **Four pallets, eleven degrees over, and I wrote _a little over the limit_ in the letter.**'],
  ['Ms Huda', '**And what does eleven degrees over do that _a little over_ does not?**'],
  ['Rim', '⚠ **Eleven degrees over, for four hours, is outside the storage condition and the consignment has to be destroyed.** **_A little over_ is a thing you discuss.** **Nobody has mentioned that excursion for seven weeks.**'],
  ['Bassel', 'And the opposite fault? I have seen summaries more exact than the thing they summarise.'],
  ['Ms Huda', '**That is false precision and it is the same fault from the other end.** ⚠ **A quotation of _about four million_ becomes _4,100,000_ in the summary, and the reader believes the hundred thousand.** **You have invented a figure, and the invention looks like care.**'],
  ['Hiba', 'So what travels with the figure?'],
  ['Ms Huda', '**Three things, and they cost eleven words.** ⚠ **The unit, the date, and the source.** _Eleven millimetres, since March, from the March and October levels._ **A figure with no date is a measurement with no event attached, and a figure with no source cannot be checked by the person who has to act on it.**'],
  ['Mazen', 'And saying it out loud?'],
  ['Ms Huda', '🔊 **Exactly, with nothing in front of it.** ⚠ _Eleven millimetres._ **Not _about eleven millimetres_**, which is what everybody says, because _about_ is how we make a number sound polite. **A triggering figure said with _about_ in front of it has been rounded in the air**, and the listener will write down the rounded one.'],
]));
out.push(sp());
out.push(box('Language box – the figure you must not round', [
  '**The rule, and it is the only one needed.** ⚠ **Round a figure that describes. Never round a figure that triggers.**',
  '**Three questions, and the first two take four seconds.** ⚠ **Is this figure compared with anything?** **Does anybody act at a particular value?** **Would the reader notice if it were wrong by the amount I am rounding by?**',
  '⚠ **Rounding does not change the measurement; it changes which side of a line the measurement falls on.** **Eleven millimetres triggers a structural survey at ten.** **_About a centimetre_ reads as ten or under.** **The wall did not move; the sentence did.**',
  '**_About_ is honest when the measurement is approximate and dishonest when the measurement is exact and you are saving space** — ⚠ **which is almost every _about_ in a summary.** **The report said eleven; the summary said about ten.**',
  '**The same fault in another trade.** ⚠ **Four pallets eleven degrees over, for four hours, is outside the storage condition and the consignment is destroyed.** **_A little over the limit_ is a thing you discuss** — **and nobody has mentioned that excursion for seven weeks.**',
  '**And the opposite fault, which looks like care.** ⚠ **False precision:** _about four million_ **in the quotation becomes** _4,100,000_ **in the summary, and the reader believes the hundred thousand.** **You have invented a figure.**',
  '**Three things travel with a triggering figure, and they cost eleven words.** ⚠ **The unit, the date and the source.** _Eleven millimetres, since March, from the March and October levels._ **A figure with no date is a measurement with no event attached; a figure with no source cannot be checked by whoever has to act.**',
  '**The shapes.** _______ ______ since ______, from ______._ _The limit is ______ and the reading is ______._ _Rounded for the sake of the sentence; the figure is ______._ ⚠ **And the ones that round in the air:** _about_ · _a little over_ · _roughly_ · _in the region of_ · _just under_.',
  '**Pronunciation.** 🔊 **Track 18.8** **Exactly, with nothing in front of it.** ⚠ _Eleven millimetres._ **Not _about eleven millimetres_**, which is how we make a number sound polite. **A triggering figure said with _about_ in front of it has been rounded in the air**, and the listener writes down the rounded one.',
  '**Practise:** Say the figure and whether it may be rounded. **1** one that describes  **2** one that triggers  **3** one you have rounded yourself, and the repair  **4** one with false precision, and the repair  **5** one with its unit, date and source',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the figure and its context from the card. B says **whether it may be rounded, and why** — and if it may not, gives it with **its unit, its date and its source.** ⚠ **Two rows on each card are false precision**, and B must say what the original figure was. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the figure, and what it is for)_ __________.'],
  ['B', '**Rounded / not**, because __________. **Full form:** __________, **since** __________, **from** __________.'],
]));
out.push(table(['Card A – the figure', 'Card B – the figure'], [
  ['_11 mm of movement; the survey threshold is 10 mm._', '_11 degrees over; the storage condition is a hard limit._'],
  ['_⚠ "4,100,000 pounds" from a quotation that said "about four million."_', '_⚠ "37.4 per cent" from a count of 112 items._'],
  ['_The house is about a hundred years old._', '_The report runs to about forty pages._'],
  ['_⚠ "nine days late" from a note that said "over a week."_', '_⚠ "eleven minutes" from a clerk who said "ten or twelve."_'],
  ['_Nine rejected sheets; the limit is three a quarter._', '_Three of five returns on time; the criterion is three of five._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each figure, rounded or not, and the full form where it is not. ⚠ **The four rows marked ⚠ are false precision and the pairs will treat them as accurate.** **A summary cannot be more exact than what it summarises** — **_37.4 per cent_ from a count of a hundred and twelve offers a tenth that does not exist.** **The honest figure is** _forty-two of a hundred and twelve_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take two figures from your own last summary: **one that describes and one that triggers.** ⚠ **Write the triggering one in full** — **unit, date, source** — **and write beside it the number at which somebody acts.**'));
out.push(p('**b**  Swap and perform. Your partner reads your triggering figure **with _about_ in front of it**, and then exactly. ⚠ They say which one they would write down.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna’s eleven millimetres went into the next summary and became about a centimetre — she wrote that herself, in June, because the sentence was long and she was tidying it. Ten millimetres is the figure in the conservation standard at which a structural survey is required: eleven triggers it, and about a centimetre does not. Which is the cycle in one piece of arithmetic — eleven is on one side of the threshold and about a centimetre reads as ten or under, which is the other side. She did not change the measurement; she changed which side of the line it fell on. And that is the rule, and it is the only one needed: round a figure that describes, and never round a figure that triggers. Omar asked how to tell which is which, and three questions, the first two taking four seconds: is this figure compared with anything, does anybody act at a particular value, and would the reader notice if it were wrong by the amount you are rounding by? Dima asked about the word about, which is honest when the measurement is approximate and dishonest when the measurement is exact and you are saving space — which is almost every about in a summary. The report said eleven; the summary said about ten. Rim said hers is the same figure in a different trade: four pallets, eleven degrees over, and she wrote a little over the limit in the letter. Eleven degrees over for four hours is outside the storage condition and the consignment has to be destroyed, while a little over is a thing you discuss, and nobody has mentioned that excursion for seven weeks. Bassel raised the opposite fault, which is summaries more exact than the thing they summarise: a quotation of about four million becomes 4,100,000 in the summary and the reader believes the hundred thousand, so a figure has been invented and the invention looks like care. Hiba asked what travels with a figure, and three things costing eleven words: the unit, the date and the source. A figure with no date is a measurement with no event attached, and a figure with no source cannot be checked by the person who has to act on it. And Mazen asked about saying it out loud: exactly, with nothing in front of it, because about is how we make a number sound polite and a triggering figure said with about in front of it has been rounded in the air._'));
out.push(p('**Listener task:** write your partner\'s triggering figure in full and the number at which somebody acts.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Lubna writes in July. Answer the questions.'));
out.push(model([
  '**ABOUT A CENTIMETRE** · L. Sweidan · 8 May · _for the studio_',
  '**In May I put the eleven millimetres at the top of the summary, where it belongs.** ⚠ **In June I wrote _about a centimetre_, and I did it while tidying a long sentence.**',
  '**What the two versions say.** **_Eleven millimetres since March_ is a reading.** ⚠ **_About a centimetre_ is a reading with its last digit removed** — **and the last digit is the whole of it, because the conservation standard requires a structural survey at ten.**',
  '**So what I did, exactly.** ⚠ **I did not change the measurement.** **I changed which side of the threshold the measurement falls on.** **Eleven is above ten. About a centimetre is at or below it.** **The wall did not move in June; my sentence did.**',
  '**Why I did it, which is the part worth writing down.** ⚠ **Not carelessness and not hurry.** **_Eleven millimetres since March, from the March and October levels_ is eleven words and the line looked heavy**, **and I had been taught that a summary should read well.** **It does read well. It reads well and it does not trigger a survey.**',
  '**What it would have cost if nobody had noticed.** **The plastering goes on, the wall goes on moving, the plaster cracks in the first winter** ⚠ **and the second contract is a repair of the first one.** **Mr Hamwi, who has done this for thirty years, says the usual figure for taking plaster off a moving wall is about a third of what it cost to put on.** **That _about_ is honest, because he is estimating.**',
  '**The rule I have written on the first page of the notebook.** ⚠ _Round a figure that describes; never round a figure that triggers._ **And under it, the three questions: is it compared with anything, does anybody act at a particular value, and would the reader notice if it were wrong by the amount I am rounding by?**',
  '**And one thing I had not understood about the word _about_.** ⚠ **It is not a vague word; it is a precise one.** **It says _I measured this loosely_.** **When the measurement was exact, _about_ is a false statement about how the figure was obtained** — **and it is the only false statement I have ever made in a summary that every single sentence of was true.**',
]));
out.push(item('1', 'What does she say she changed, and what did she not change?'));
out.push(item('2', 'Why did she round it, and what does she say about reading well?'));
out.push(item('3', 'What would it have cost, and whose _about_ does she call honest?'));
out.push(writers([
  'A note about a figure you rounded: **where it was right and where it went wrong, in the first two lines** → **what the two versions say** → **what you did, exactly** → **why you did it, with the reason taken seriously** → **what it would have cost** → **the rule you have written down** → **and one thing you had not understood about the word you used.**',
  '⚠ **Name the act precisely and refuse the easy description of it.** _I did not change the measurement; I changed which side of the threshold it falls on._ **_I made a mistake_ names nothing a colleague can avoid tomorrow.**',
  '**Take your own reason seriously before dismissing it.** _Not carelessness and not hurry: the line looked heavy and I had been taught that a summary should read well._ ⚠ **Then the sentence that does the work:** _it reads well and it does not trigger a survey._',
  '**Price the unnoticed version, and let somebody else supply the figure.** _About a third of what it cost to put on._ ⚠ **And mark that _about_ as the honest kind**, because the distinction is the point of the page.',
  '⚠ And **end on the word rather than on yourself.** _It is not a vague word; it is a precise one. It says I measured this loosely._ **A page that ends in self-reproach teaches nothing; a page that ends on what a word means can be used by the next person.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note about a figure you rounded (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **In ______________ I put the ______________ ______________.** ⚠ **In ______________ I wrote _"______________"_, and I did it while ______________.**   **What the two versions say.** ______________. ⚠ **______________ is ______________ with ______________ removed.**   **So what I did, exactly.** ⚠ **I did not change ______________.** **I changed ______________.**   **Why I did it.** ⚠ **Not ______________ and not ______________.** ______________. **It does ______________ and it does not ______________.**   **What it would have cost.** ______________. ⚠ **______________ says the usual figure is ______________.**   **The rule I have written down.** ⚠ _"______________."_   **And one thing I had not understood about the word _______.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The act named precisely, not called a mistake',
  'Your own reason taken seriously, then answered in one line',
  'The unnoticed cost priced, with somebody else\'s figure',
  'The ending on the word and not on yourself',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their rule**, and the room says whether it could be applied by somebody who had not read the rest of the page.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full note (180 words or more), to the shape in the writer\'s box: the act named precisely, the reason taken seriously, the cost priced, and the ending on the word.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the act named precisely rather than called a mistake, your own reason taken seriously, the unnoticed cost priced, and an ending on the word rather than on yourself.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your triggering figure twice: with _about_ in front of it, then exactly.** ⚠ **The room writes down what it hears, and then you compare what was written with what was said.** **Somebody will have written the rounded one both times.** Then the sentence the cycle ends on, which is Miss Sweidan\'s: **the wall did not move in June; my sentence did.**'));
out.push(hw('Write the note (80+ words). ⚠ Then go through your last summary and mark every figure **D** or **T** — **describes or triggers.** **For each T, write the number at which somebody acts beside it**, and if you cannot find that number, **that is the thing to go and ask.** **18.5 names what you left out**, which is the only honest way to hand over a page that is a twentieth of a document. ⚠ **And bring a summary of yours with something missing that you now wish you had flagged.**'));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  What you left out, named'));
out.push(p('**Function:** naming what a summary leaves out, and when the reader should go and get it   ·   **Grammar:** the omission note in three parts   ·   **Pronunciation:** the omission read as information and not as apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, with the summary you brought. ⚠ **Say what is not in it.** **Then the question that does the work: what would a reader have to be about to do, for that missing thing to matter?** **Most people can answer the first and almost nobody can answer the second** — **and the second is the omission note.**'));
out.push(board('This is a summary and should be read with the full report.', 'Not here: the per-machine fault lists. I hold them. Ask me before you buy any machine for site use.'));
out.push(p('**b**  Which is an omission note? **1** _This is a summary and should be read with the full report._  **2** _Not here: the per-machine fault lists. I hold them. Ask me before you buy any machine for site use._  **3** _Some details have necessarily been omitted._  **4** _Not summarised: pages 29 to 33, on the north wall. Read them before fixing anything to it._  **5** _For a fuller account, see the original._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three parts does Ms Huda say an omission note has, and which does she say nobody writes?   **A** a date, a signature and a reference; nobody writes the date   **B** **what kind of material is not here · where it is and who holds it · the condition under which the reader should go and read it** — and **nobody writes the third, which is the only useful one**   **C** an apology, a list and a disclaimer; nobody writes the list'));
out.push(p('**b**  Listen again. **1** What happened at two of Mr Darwish\'s eleven sites?   **2** What does Ms Huda say about _this is a summary and should be read with the full report_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  Ask me before you buy', [
  ['Ms Huda', 'Mr Darwish. One page a month to eleven site managers. Something went wrong twice.'],
  ['Omar', '**Two sites bought machines of a model that is on my fault list and not on my summary.** ⚠ **Nine faults in fourteen months on that model, across three sites.** **None of it on the page, because the page is about last month.**'],
  ['Ms Huda', '**Was the page wrong?**'],
  ['Omar', '⚠ **No. It was right about last month and it was silent about the model, and silence is what they acted on.**'],
  ['Ms Huda', '**And what did you have at the bottom of it?**'],
  ['Omar', '_(reading)_ _This is a summary and should be read with the full fault record._ ⚠ **Which protects me and tells them nothing.**'],
  ['Ms Huda', '**Say that again, because it is the finding of the cycle.** ⚠ **A disclaimer protects the writer.** **An omission note protects the reader** — **and they look alike and do opposite jobs.**'],
  ['Dima', 'So what does an omission note have in it?'],
  ['Ms Huda', '**Three parts.** ⚠ **What kind of material is not here. Where it is and who holds it. And the condition under which the reader should go and read it.**'],
  ['Rim', 'The third is the one I have never written.'],
  ['Ms Huda', '**Nobody writes the third and it is the only useful one.** ⚠ _Ask me before you buy any machine for site use._ **Nine words, and it does the work the other eleven pages cannot do** — **because a reader cannot know which of a hundred missing things is about to matter, and you can.**'],
  ['Omar', '⚠ **I put that line on in March. Three managers have asked me since, and two of them changed what they were buying.**'],
  ['Ms Huda', '**And what did the line cost you?**'],
  ['Omar', '**Nine words and about forty minutes of answering.** ⚠ **Against two machines nobody should have bought.**'],
  ['Lubna', 'Mine would be pages twenty-nine to thirty-three.'],
  ['Ms Huda', '**And the trigger?**'],
  ['Lubna', '⚠ _Read them before fixing anything to the north wall._ **Which is the sentence that would have stopped the committee**, **and it is shorter than the paragraph of history I did include.**'],
  ['Mazen', 'And reading it out?'],
  ['Ms Huda', '🔊 **As information, flat, in the same voice as the rest.** ⚠ _Not here: the per-machine fault lists._ **Not _I am afraid I have had to leave out…_** — **an omission read as an apology is heard as a formality, and a formality is skipped.** **It is the most skipped line on any page, and the way it is read is why.**'],
]));
out.push(sp());
out.push(box('Language box – what you left out, named', [
  '⚠ **A disclaimer protects the writer.** **An omission note protects the reader.** **They look alike and they do opposite jobs** — _this is a summary and should be read with the full report_ **is the first.**',
  '**Three parts.** ⚠ **1 What kind of material is not here.** **2 Where it is and who holds it.** **3 The condition under which the reader should go and read it.**',
  '**Nobody writes the third and it is the only useful one.** ⚠ _Ask me before you buy any machine for site use._ **Nine words** — **because a reader cannot know which of a hundred missing things is about to matter, and the writer can.**',
  '**And it works.** ⚠ **Three managers asked in the first three months and two changed what they were buying.** **The line cost nine words and about forty minutes of answering, against two machines nobody should have bought.**',
  '**It is not a list.** ⚠ **A note that lists everything left out is the document again, and nobody reads either.** **It is a class of material and a trigger:** _the per-machine fault lists_ · _before you buy_.',
  '**The trigger is usually shorter than the thing you did include.** ⚠ _Read pages twenty-nine to thirty-three before fixing anything to the north wall._ **Fourteen words, against a paragraph of history that changed nothing.**',
  '**And a named omission cannot be used against you.** ⚠ **An unnamed one can** — **so the note protects the reader first and the writer second, and in that order it works.** **In the other order it becomes a disclaimer.**',
  '**The shapes.** _Not here: ______. ______ holds it. ______ before you ______._ _Not summarised: pages ______, on ______. Read them before ______._ ⚠ **And the ones that name nothing:** _some details have necessarily been omitted_ · _for a fuller account, see the original_ · _should be read with_.',
  '**Pronunciation.** 🔊 **Track 18.10** **As information, flat, in the same voice as the rest.** ⚠ _Not here: the per-machine fault lists._ **Not _I am afraid I have had to leave out…_** — **an omission read as an apology is heard as a formality, and a formality is skipped.** **It is the most skipped line on any page, and the way it is read is why.**',
  '**Practise:** Write the omission note in three parts. **1** material you hold yourself  **2** pages in a document  **3** one where the trigger is a purchase  **4** a disclaimer, and the repair  **5** one where nothing material is missing, said plainly',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the summary and what it leaves out, from the card. B writes **the omission note in three parts**, with the trigger as a condition. ⚠ **Two rows on each card are disclaimers**, and B must rebuild them. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the summary, and what is not in it)_ __________.'],
  ['B', '**Not here:** __________. **__________ holds it.** **__________ before you __________.**'],
]));
out.push(table(['Card A – the summary', 'Card B – the summary'], [
  ['_Monthly fault page; per-machine fault lists not in it._', '_One-page conservation summary; pages 29–33 on the wall not in it._'],
  ['_⚠ "This is a summary and should be read with the full report."_', '_⚠ "Some details have necessarily been omitted."_'],
  ['_Tender summary; the four bidders\' own references not in it._', '_Six-line minutes; the discussion not in them._'],
  ['_⚠ "For a fuller account, see the original."_', '_⚠ "Not all material could be included here."_'],
  ['_Reject summary; the batch numbers of the nine sheets not in it._', '_Staff summary; the register entry dates not in it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three parts for each, and the trigger. ⚠ **The four rows marked ⚠ are disclaimers and the pairs must rebuild them from nothing** — **which means inventing the class of material and the trigger, and that is the exercise.** **Ask the listeners one question about each rebuild: what would a reader be about to do?** **A trigger that names no act is a disclaimer in a new coat.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own summary and write its **omission note in three parts.** ⚠ **The trigger must name an act** — _before you buy_, _before you fix anything to it_, _before you sign_ — **and not a state of mind.**'));
out.push(p('**b**  Swap and perform. Your partner reads your note **first as an apology** — _I am afraid I have had to leave out…_ — **and then flat, as information.** ⚠ They say which version they would have skipped.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Omar sends one page a month to eleven site managers, and something went wrong twice: two sites bought machines of a model that is on his fault list and not on his summary — nine faults in fourteen months on that model, across three sites, none of it on the page, because the page is about last month. The page was not wrong: it was right about last month and silent about the model, and silence is what they acted on. At the bottom of it he had this is a summary and should be read with the full fault record, which protects him and tells them nothing. Which is the finding of the cycle: a disclaimer protects the writer, an omission note protects the reader, and they look alike and do opposite jobs. Dima asked what an omission note has in it, and three parts: what kind of material is not here, where it is and who holds it, and the condition under which the reader should go and read it. Rim said the third is the one she has never written, and nobody writes the third and it is the only useful one — ask me before you buy any machine for site use, nine words, and it does the work the other eleven pages cannot do, because a reader cannot know which of a hundred missing things is about to matter and the writer can. Omar put that line on in March, and three managers have asked him since, two of whom changed what they were buying; the line cost nine words and about forty minutes of answering, against two machines nobody should have bought. Lubna said hers would be pages twenty-nine to thirty-three, and the trigger is read them before fixing anything to the north wall — which is the sentence that would have stopped the committee, and it is shorter than the paragraph of history she did include. And Mazen asked about reading it out: as information, flat, in the same voice as the rest, because an omission read as an apology is heard as a formality, and a formality is skipped._'));
out.push(p('**Listener task:** write your partner\'s omission note and whether its trigger names an act.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Omar sends with his April summary. Answer the questions.'));
out.push(model([
  '**WHAT IS NOT ON THE MONTHLY PAGE** · O. Darwish · 10 May · _to the eleven site managers_',
  '**Two of you bought machines in February of a model I have nine faults against, and my page did not say so.** ⚠ **The page was not wrong.** **It was about last month and silent about the model, and the silence is what you acted on.**',
  '**What the monthly page is, so that we are clear.** **Faults raised, faults closed, and anything still open after thirty days, for the month just gone.** ⚠ **It is about four hundred words and it takes me an afternoon.**',
  '**What is not on it, and this is the part I should have written three years ago.** ⚠ **The per-machine fault history.** **Nine faults in fourteen months on the model two of you have just bought, across three sites, and all nine are the same board.** **I hold the record; it is not circulated; nobody has ever asked for it.**',
  '**When you should ask for it.** ⚠ _Before you buy any machine for site use._ **Nine words.** **Not when you are deciding whether to buy, which is too early — when you know the model.**',
  '**What has happened since I put that line on in March.** **Three of you have asked.** ⚠ **Two changed the model you were buying.** **One did not and had a reason I had not thought of, which is that the faulty board is covered by a maintenance contract he already holds.**',
  '**What it cost me.** **Nine words on the page and about forty minutes of answering in three months.** ⚠ **Against two machines at about eleven million pounds which I now expect to fail in the same way as the other three.**',
  '**And what I am not going to do.** ⚠ **I am not going to circulate the fault history.** **It is sixty pages, it is wrong in places, and a sixty-page attachment to a four-hundred-word page would mean neither was read.** **The line at the bottom is the right size for what it does** — **and it only works because I am the person who knows which of the missing things is about to matter.**',
]));
out.push(item('1', 'What does he say the silence was, and what did the managers act on?'));
out.push(item('2', 'When exactly should they ask, and why not earlier?'));
out.push(item('3', 'What has happened since March, and what is he refusing to do?'));
out.push(writers([
  'A page about what a summary leaves out: **what went wrong, and that the page was not wrong** → **what the summary is, in a sentence** → **what is not on it, with a figure** → **when the reader should ask, as an act** → **what has happened since you added the line** → **what it cost you** → **and what you are refusing to do.**',
  '⚠ **Separate silence from error in the first paragraph.** _The page was not wrong. It was about last month and silent about the model._ **A page that confesses an error has invited a correction; a page that names a silence has described a structure that will happen again.**',
  '**Make the trigger an act and then narrow it.** _Before you buy any machine for site use._ ⚠ **And then the refinement that proves you have thought about it:** _not when you are deciding whether to buy — when you know the model._',
  '**Report the exception honestly.** _One did not and had a reason I had not thought of._ ⚠ **It is the sentence that makes the other two believable**, and it costs the page nothing.',
  '⚠ And **refuse the generous-sounding remedy, with its arithmetic.** _I am not going to circulate the fault history: sixty pages against four hundred words would mean neither was read._ **Then the reason the small line works:** _I am the person who knows which of the missing things is about to matter._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about what your summary leaves out (80 words or more).'));
out.push(p('**WHAT IS NOT ON ______________** · ______________ · _to ______________   **______________, and my ______________ did not say so.** ⚠ **The page was not wrong.** **It was ______________ and silent about ______________.**   **What the ______________ is.** ______________. ⚠ **It is about ______ words and it takes me ______________.**   **What is not on it.** ⚠ ______________. **______________ holds it; it is not circulated.**   **When you should ask for it.** ⚠ _"______________."_ **Not when ______________, which is too early** — **when ______________.**   **What has happened since.** ______________. ⚠ **______________ had a reason I had not thought of, which is ______________.**   **What it cost me.** ______________. ⚠ **Against ______________.**   **And what I am not going to do.** ⚠ ______________, **because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Silence separated from error in the first paragraph',
  'The trigger as an act, and then narrowed',
  'The exception reported honestly',
  'The generous remedy refused, with its arithmetic',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their trigger**, and the room says what act it names and whether it could be acted on today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more), to the shape in the writer\'s box: silence separated from error, the trigger narrowed, the exception reported, and the generous remedy refused.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: silence separated from error, a trigger that names an act and is then narrowed, the exception reported, and the generous remedy refused with its arithmetic.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your omission note twice: as an apology, then flat as information.** ⚠ **The room says which one it would have skipped** — **and it is the apology, every time, because an apology is heard as a formality.** Then the sentence the cycle ends on, which is Mr Darwish\'s: **the page was right about last month and silent about the model, and the silence is what they acted on.**'));
out.push(hw('Write the page (80+ words). ⚠ Then write the omission note for your own last summary, **in three parts, with the trigger as an act** — **and send it to the person who reads that summary.** **If you cannot think of a trigger, the honest note says so:** _nothing material is missing for the decisions this page is used for._ **That is a strong sentence and you should only write it if it is true.** **18.6 puts the whole thing together** — **load-bearing part, three bands, unrounded figure, omission note, on one page.**'));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  The whole summary'));
out.push(p('**Function:** the whole summary — a long document on one page   ·   **Grammar:** the five parts, in that order   ·   **Pronunciation:** the page read aloud to somebody who has to act'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, from memory: **the five parts of a summary, in order.** ⚠ **Then say which of the five was missing from the last summary you wrote.** **It is the omission note in most cases and the provenance line in nearly all the rest** — **and nobody has ever left out the band that can be ignored.**'));
out.push(board('Here is a summary of the report.', 'The wall has moved eleven millimetres since March. Before you act, check the survey date and who took the levels. Nothing else here alters the decision. Not here: pages 29 to 33. Forty-two pages, summarised 2 May, one page.'));
out.push(p('**b**  Which order is right? **1** _provenance · load-bearing · check · not here · nothing else_  **2** _load-bearing · check before acting · nothing else alters it · not here · provenance_  **3** _load-bearing · not here · check · nothing else · provenance_  **4** _check · load-bearing · nothing else · provenance · not here_  **5** _load-bearing · nothing else alters it · check · not here · provenance_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What two people does Ms Huda say a whole summary must be shown to, and what must each be able to say?   **A** the chairman and the author; both must approve it   **B** **somebody who has to act, and the author of the original** — and **the first must be able to say what they will now do, and the second that nothing load-bearing is missing**   **C** two colleagues; both must find it readable'));
out.push(p('**b**  Listen again. **1** What did the author of the report say when Mrs Sweidan showed him her new page?   **2** What does Ms Huda say about the provenance line?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  Both of them have to sign it', [
  ['Ms Huda', 'Miss Sweidan. You have done the same forty-two pages again. Five parts?'],
  ['Lubna', '**Five.** ⚠ **The load-bearing sentence, with its figure unrounded. What has to be checked before anybody acts. One sentence saying nothing else alters it. The omission note. And the provenance line.**'],
  ['Ms Huda', '**And you showed it to two people.**'],
  ['Lubna', '**The committee secretary, who acts** — ⚠ **and the man who wrote the forty-two pages, which I had never done in my life.**'],
  ['Ms Huda', '**What did he say?**'],
  ['Lubna', '⚠ **That the wall was the right choice and that I had the threshold wrong.** **The standard says ten millimetres _in any three-month period_, and my eleven is since March, which is seven months.** **So it may not trigger at all** — **and it may be worse, because eleven over seven months and eleven over three are different buildings.**'],
  ['Ms Huda', '**So the author did not confirm your page; he corrected it.** ⚠ **That is what the second reader is for, and it is why both readings are in the method.** **The person who acts tells you whether the page works; the author tells you whether it is true.**'],
  ['Dima', 'And if the author is not available?'],
  ['Ms Huda', '**Then the page says so in the provenance line, which is the fifth part.** ⚠ _Forty-two pages, summarised 2 May by L. Sweidan, not checked with the author._ **Twelve words, and a reader can now weigh the page.**'],
  ['Omar', 'What else is in provenance?'],
  ['Ms Huda', '⚠ **What was summarised, how long it was, by whom, when, and whether the author has seen it.** **The length is the part people leave out and it is the most useful:** **a reader who knows that one page stands for forty-two reads it differently from one who thinks it stands for four.**'],
  ['Adnan', 'Does the provenance line not belong at the top?'],
  ['Ms Huda', '**It belongs at the bottom, and this is not a convention.** ⚠ **A page that opens by describing itself has spent the reader\'s first four seconds on housekeeping** — **and the first four seconds are the only ones you are guaranteed.**'],
  ['Rim', 'How long is the whole thing?'],
  ['Ms Huda', '**One page, and the five parts leave room for more than people expect.** ⚠ **Mrs Sweidan\'s new page has the history, the materials and the costs on it as well** — **under the band that can be ignored, in one sentence, which is where they belonged all along.**'],
  ['Hiba', 'And the test for the page as a whole?'],
  ['Ms Huda', '**Two questions to two people.** ⚠ **To the one who acts: what will you now do?** **To the author: is anything load-bearing missing?** **A page that passes the first and fails the second is readable and wrong, which is the most dangerous document in this unit.**'],
  ['Mazen', 'And reading it aloud?'],
  ['Ms Huda', '🔊 **To somebody who has to act, and watch their hands.** ⚠ **When the load-bearing sentence lands, a person who is going to act reaches for a pen.** **If nobody reaches for anything, the sentence is not load-bearing** — **and that is a better test than anything you can do to the page by reading it yourself.**'],
]));
out.push(sp());
out.push(box('Language box – the whole summary', [
  '**Five parts, in this order, on one page.** ⚠ **1 The load-bearing sentence, with its figure unrounded.** **2 What must be checked before acting.** **3 One sentence: nothing else alters it.** **4 The omission note.** **5 The provenance line.**',
  '**Two readers, and they answer different questions.** ⚠ **Somebody who has to act: what will you now do?** **The author of the original: is anything load-bearing missing?** **A page that passes the first and fails the second is readable and wrong.**',
  '⚠ **The author corrects rather than confirms, and that is what he is for.** **The standard says ten millimetres _in any three-month period_; the eleven is since March, which is seven** — **so it may not trigger, and it may be worse, because eleven over seven months and eleven over three are different buildings.**',
  '**Provenance holds five things and the length is the one people leave out.** ⚠ **What was summarised, how long it was, by whom, when, and whether the author has seen it.** **A reader who knows that one page stands for forty-two reads it differently from one who thinks it stands for four.**',
  '**And if the author has not seen it, say so.** ⚠ _Forty-two pages, summarised 2 May by L. Sweidan, not checked with the author._ **Twelve words, and the reader can weigh the page.**',
  '**Provenance goes at the bottom, and that is not a convention.** ⚠ **A page that opens by describing itself has spent the reader\'s first four seconds on housekeeping** — **and the first four seconds are the only ones you are guaranteed.**',
  '**One page, and the five parts leave more room than people expect.** ⚠ **The history, the materials and the costs are all on the new page** — **under the band that can be ignored, in one sentence, which is where they belonged.**',
  '**Pronunciation.** 🔊 **Track 18.12** **Read it to somebody who has to act, and watch their hands.** ⚠ **When the load-bearing sentence lands, a person who is going to act reaches for a pen.** **If nobody reaches for anything, the sentence is not load-bearing** — **and that is a better test than anything you can do by reading it yourself.**',
  '**And one warning for the whole unit.** ⚠ **A summary that is beautifully built and has the wrong load-bearing sentence is worse than a bad summary**, because a bad summary is read with suspicion and a good one is acted on. **The second reader exists for exactly this, and skipping him is the only serious shortcut in the method.**',
  '**Practise:** The five parts, one page. **1** the load-bearing sentence with its figure  **2** two things to check  **3** band three in one sentence  **4** the omission note with its trigger  **5** the provenance line, including the length',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a line from a summary. B says **which of the five parts it is, whether it is in the right place, and what must come before it.** ⚠ **Two rows on each card are provenance pretending to be a first line.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the line)_ __________.'],
  ['B', 'Part ______. **Right place / not.** **Before it:** __________.'],
]));
out.push(table(['Card A – the line', 'Card B – the line'], [
  ['_The wall has moved eleven millimetres since March._', '_Before you act, check the survey date and who took the levels._'],
  ['_⚠ This is a summary of a forty-two page report of 2 May._', '_⚠ The following summarises the audit file in one page._'],
  ['_Nothing else here alters the decision._', '_Not here: pages 29 to 33, on the wall. Read them before fixing anything to it._'],
  ['_⚠ Prepared by L. Sweidan for the committee of 6 May._', '_⚠ A one-page digest of the supplier file follows._'],
  ['_Forty-two pages, summarised 2 May, not checked with the author._', '_The certificate expired in January; nothing else alters it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the part number for each line and what must come before it. ⚠ **The four rows marked ⚠ are provenance put at the top**, where it spends the reader\'s first four seconds on housekeeping. **Make the listeners say what the page has given away:** **the only four seconds anybody is guaranteed.** **Then ask what the same words do at the bottom, which is where they are useful.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write the whole summary of something long, **five parts, one page.** ⚠ **Then read it to somebody who has to act and watch their hands.**'));
out.push(p('**b**  Swap. **Your partner takes the part of the author of the original** and asks the second question: ⚠ **is anything load-bearing missing?** **They are allowed to invent something, and if they can, your page has a hole in it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna did the same forty-two pages again, in five parts: the load-bearing sentence with its figure unrounded, what has to be checked before anybody acts, one sentence saying nothing else alters it, the omission note, and the provenance line. And she showed it to two people — the committee secretary, who acts, and the man who wrote the forty-two pages, which she had never done in her life. He said the wall was the right choice and that she had the threshold wrong: the standard says ten millimetres in any three-month period, and her eleven is since March, which is seven months, so it may not trigger at all, and it may be worse, because eleven over seven months and eleven over three are different buildings. So the author did not confirm her page; he corrected it, and that is what the second reader is for, and why both readings are in the method — the person who acts tells you whether the page works, and the author tells you whether it is true. Dima asked what happens if the author is not available, and then the page says so in the provenance line: forty-two pages, summarised 2 May by L. Sweidan, not checked with the author. Twelve words, and a reader can now weigh the page. Omar asked what else is in provenance, and what was summarised, how long it was, by whom, when, and whether the author has seen it — the length being the part people leave out and the most useful, because a reader who knows that one page stands for forty-two reads it differently from one who thinks it stands for four. Adnan asked whether provenance does not belong at the top, and it belongs at the bottom, and that is not a convention: a page that opens by describing itself has spent the reader’s first four seconds on housekeeping, and the first four seconds are the only ones you are guaranteed. Rim asked how long the whole thing is, and one page, and the five parts leave room for more than people expect — the history, the materials and the costs are all on the new page, under the band that can be ignored, in one sentence, which is where they belonged. Hiba asked for the test for the page as a whole, which is two questions to two people: to the one who acts, what will you now do, and to the author, is anything load-bearing missing? And Mazen asked about reading it aloud: to somebody who has to act, and watch their hands._'));
out.push(p('**Listener task:** write whether your partner, as the author, could name something load-bearing that your page had missed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the summary Lubna sends to the committee in May. Answer the questions.'));
out.push(model([
  '**HOUSE IN SAROUJA · SUMMARY FOR THE COMMITTEE OF 6 MAY** · L. Sweidan',
  '**The one thing here that changes what you do.** ⚠ **The north wall has moved eleven millimetres between the March and the October levels** — **seven months, not three** — **and the conservation standard requires a structural survey at ten millimetres in any three-month period.** **Nothing should be fixed to that wall until the three-month figure is known.** **The plastering contract goes on its inside face.**',
  '**Before you act, check three things.** ⚠ **Who took the October levels** _(the report does not say)_. **Whether any reading was taken between March and October** _(if one was, the three-month figure exists and nobody has looked for it)_. **And whether the plasterer\'s quotation is still open after 20 May.**',
  '**Nothing else in the report alters this decision.** **The roof, the window reveals, the lime plaster, the history of the house and the costs in three columns are all sound and none of them bears on the wall** — **and the costs are unchanged from the paper you saw in February, so there is nothing in them to read again.**',
  '**Not here.** ⚠ **Pages twenty-nine to thirty-three, which are the wall.** **The studio holds the report.** **Read those five pages before letting any contract that fixes anything to the north wall** — **they are five pages and they take about twelve minutes.**',
  '**Provenance.** **Forty-two pages, dated 14 April, by Mr Kabbani of the conservation office, and this is the second summary of it that has gone to you.** ⚠ **Summarised 2 May by L. Sweidan, one page.** **Checked with the author on 5 May, who corrected the threshold** — **the three-month qualification is his and not mine, and without him this page would have told you the survey was required.**',
  '**NOTE for the studio, which is not part of the summary.** ⚠ **My February page on the same report was accurate in every sentence and the committee let the plastering contract.** **This page is shorter than that one.** **The difference is not length and it is not care: it is that this one is arranged by what you have to do and that one was arranged by what the report contains.**',
]));
out.push(item('1', 'What correction did the author make, and what would the page have said without him?'));
out.push(item('2', 'What are the three things to check, and which of them is a gap in the report itself?'));
out.push(item('3', 'What does she say the difference between the two pages is not, and what is it?'));
out.push(writers([
  'A whole summary on one page: **the load-bearing sentence with its figure, its interval and the threshold** → **two or three things to check, with the gaps marked** → **one sentence saying nothing else alters it** → **the omission note with its trigger** → **the provenance line, including the length and whether the author has seen it** → **and, if it is for colleagues, a note that is not part of the summary.**',
  '⚠ **Put the interval in with the figure.** _Eleven millimetres between the March and the October levels — seven months, not three._ **A figure with no interval cannot be compared with a threshold that has one**, and that is the commonest way an unrounded figure still misleads.',
  '**Mark the gaps inside band two.** _Who took the October levels (the report does not say)._ ⚠ **A thing to check and a thing that cannot be checked are different instructions**, and the bracket is the cheapest way to say which is which.',
  '**Name the author\'s correction in the provenance line and say what it saved.** _The three-month qualification is his and not mine._ ⚠ **It is the only part of a summary that credits somebody else**, and it is what makes a second reader agree to do it again.',
  '⚠ And **in the note, name the difference exactly.** _It is not length and it is not care: it is that this one is arranged by what you have to do._ **A note that says _I have learned to be more careful_ gives a colleague nothing to copy.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the whole summary (80 words or more).'));
out.push(p('**______________ · SUMMARY FOR ______________** · ______________   **The one thing here that changes what you do.** ⚠ ______________ **between ______________ and ______________** — **______________, not ______________** — **and ______________ requires ______________ at ______________.**   **Before you act, check ______ things.** ⚠ ______________ _(______________)_. ______________. ______________.   **Nothing else in ______________ alters this decision.** ______________.   **Not here.** ⚠ ______________. **______________ holds it.** **Read ______________ before ______________.**   **Provenance.** **______ pages, dated ______________, by ______________.** ⚠ **Summarised ______________ by ______________, ______ page.** **Checked with the author on ______________, who ______________.**   **NOTE, which is not part of the summary.** ⚠ ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The interval printed with the figure and the threshold',
  'The gaps marked inside the things to check',
  'The author\'s correction credited in the provenance line',
  'The difference named exactly in the note',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first part**, and the room says who would reach for a pen and what for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full summary (180 words or more), to the shape in the writer\'s box: the figure with its interval, the gaps marked, the author credited, and the difference named.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the interval printed with the figure, the gaps marked in band two, the author\'s correction credited, and the difference named exactly.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your page to somebody who has to act, and watch their hands.** ⚠ **When the load-bearing sentence lands, a person who is going to act reaches for a pen** — **and if nobody reaches for anything, the sentence is not load-bearing.** Then the sentence the cycle ends on, which is Miss Sweidan\'s: **the difference is not length and it is not care; it is that this one is arranged by what you have to do.**'));
out.push(hw('Write the whole summary (80+ words). ⚠ Then do the thing that makes it a summary rather than a précis: **show it to the author of the original and ask one question** — **is anything load-bearing missing?** **Bring what they said, in their words.** **In most cases they correct something, and the correction is usually an interval or a source.** **18.7 puts you between a summariser and the person whose work was summarised**, which is the last mediation of the first half of the book.'));

// ===================== 18.7 =====================
out.push(pb());
out.push(h2('18.7  Review & Mediate: The summariser and the summarised'));
out.push(p('**Function:** mediating between somebody who summarised a document and the person who wrote it   ·   **Recycling:** Unit 18   ·   **Exam practice:** B2 First Reading and Use of English Part 2 · Writing Part 2 (an article) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The report run to forty-two pages.  **2** She pare down the page to one in an evening.  **3** The figure was round to a centimetre.  **4** Nothing else alter the decision.  **5** His distil of the argument was four lines.  **6** The summary is more concision than the report.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the summary, and what each side says about it.'));
out.push(box(null, [
  '**ONE PAGE, TWO ACCOUNTS** _(a summariser and the man who wrote the forty-two pages, three weeks apart)_',
  '**The page.** _"The north wall has moved eleven millimetres between the March and the October levels — seven months, not three — and the standard requires a survey at ten in any three-month period. Nothing should be fixed to that wall until the three-month figure is known. Before you act, check who took the October levels. Nothing else in the report alters this decision. Not here: pages 29 to 33. Forty-two pages, summarised 2 May, checked with the author."_',
  '**The summariser.** _"It is the best page I have written. The load-bearing finding is first, the figure is unrounded and has its interval, the omission note has a trigger, and the author corrected me before it went out."_',
  '**The man who wrote the report.** _"Her page is better than my report. The committee now treats it as the report. Nobody has read pages 29 to 33 and nobody ever will — and the eleven months I spent on the lime plaster is a clause under _nothing else alters this_."_',
  '⚠ **Both accounts are accurate and neither of them is about the page.**',
  '**And the thing the page does not settle.** **Who keeps the original alive** — **and what becomes of material that is correctly in band three and is the only record of eleven months of work.**',
  '**The question for the cycle.** _What does a good summary do to the document it summarises?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say a good summary does to its original, and what is the one question the page does not settle?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  A good summary displaces its original', [
  ['Ms Huda', 'A page that does everything this unit teaches, and the man who wrote the report is worse off. Miss Sweidan — is the page wrong?'],
  ['Lubna', 'No. ⚠ **I would write it again**, and Mr Kabbani is right as well, which I had not expected at all.'],
  ['Ms Huda', '**Say his complaint in his words.**'],
  ['Lubna', '⚠ _The committee now treats your page as the report._ **And eleven months of lime plaster analysis is inside a clause that begins _nothing else alters this decision_.**'],
  ['Ms Huda', '**Then the mediation, and it is three moves.** One: **separate what the summary is for from what the original is for.** ⚠ Two: **find what the original does that the summary cannot.** Three: **say whether the summariser can supply it.**'],
  ['Dima', 'What is the summary for?'],
  ['Lubna', '**One decision, on one day, by five people who will not read forty-two pages.** ⚠ **It did that.**'],
  ['Ms Huda', '**And what is the original for?**'],
  ['Adnan', ' ⚠ **The questions nobody has asked yet.** **A record is not for this decision; it is for the dispute in four years about what was known in April.**'],
  ['Ms Huda', '**Which is the finding of this cycle and it is new.** ⚠ **A summary serves a decision that exists.** **A record serves questions that do not exist yet** — **and nobody can summarise for a question nobody has asked.**'],
  ['Omar', 'So his eleven months is correctly in band three.'],
  ['Ms Huda', '**Correctly in band three for this decision, and that is the whole of the trouble.** ⚠ **Band three is a judgement about one decision and it is being read as a judgement about the material.**'],
  ['Rim', 'And the question the page does not settle?'],
  ['Ms Huda', '⚠ **Who keeps the original alive, and where it lives.** **That is not a summarising question and Miss Sweidan cannot answer it** — **it is a decision about the committee\'s own files, and the committee has never taken it.**'],
  ['Hiba', 'What does the mediator do, if neither of them is wrong?'],
  ['Ms Huda', '**Name the question and hand it to the people who can answer it.** ⚠ **Which here is the committee and not either of these two** — **and the mediator does not decide where a conservation office\'s records live.**'],
  ['Bassel', 'And what must we not do?'],
  ['Ms Huda', '**Two things, and the second looks generous.** ⚠ **Do not improve the page.** **And do not put the lime plaster back into it** — **which would restore eleven months to visibility and lose the wall, and that is how the February page was written.**'],
  ['Mazen', 'And reading the two accounts?'],
  ['Ms Huda', '🔊 **One after the other, at the same speed, and neither reasonable at the other\'s expense.** ⚠ **The summariser\'s account is a description of a method and the author\'s is a description of a disappearance** — **and the second is harder to read aloud without sounding wounded.** **Read it as a report.**'],
]));
out.push(sp());
out.push(box('Language box – the summariser and the summarised', [
  '**The three moves.** ⚠ **1 Separate what the summary is for from what the original is for.** **2 Find what the original does that the summary cannot.** **3 Say whether the summariser can supply it.**',
  '⚠ **The finding, and it is new: a summary serves a decision that exists, and a record serves questions that do not exist yet.** **Nobody can summarise for a question nobody has asked** — **and that is not a fault in the summary.**',
  '**So the eleven months is correctly in band three, and that is the whole of the trouble.** ⚠ **Band three is a judgement about one decision and it is being read as a judgement about the material.** **Both readings are reasonable and only one of them is what you meant.**',
  '**A good summary displaces its original, which a bad one never does.** ⚠ **The committee treats the page as the report** — **and the better the page, the more completely it does so.** **That is the price of the method and it is not avoidable by writing worse pages.**',
  '**The question the page does not settle.** ⚠ **Who keeps the original alive, and where it lives.** **That is not a summarising question** — **it is a decision about somebody\'s files, and in most places it has never been taken.**',
  '**What the mediator does.** ⚠ **Names the question and hands it to the people who can answer it** — **here the committee, and not either of the two.** **The mediator does not decide where a record lives.**',
  '**Two things not to do, and the second looks generous.** ⚠ **Do not improve the page.** **And do not put the omitted material back into it** — **which restores eleven months to visibility and loses the wall, and that is how the February page was written.**',
  '**And one line a summariser can add to any page, which costs nothing and answers half of this.** ⚠ _The original is forty-two pages and is held by the studio; this page is not a substitute for it in any dispute about what was known in April._ **Twenty-eight words, and the author of the report will sign it.**',
  '**Pronunciation.** 🔊 **Track 18.14** **The two accounts one after the other, at the same speed, neither reasonable at the other\'s expense.** ⚠ **The summariser\'s is a description of a method and the author\'s is a description of a disappearance** — **and the second is harder to read without sounding wounded.** **Read it as a report.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a summary and two accounts of it, and does **not** show them. A reads the page, then both accounts. B makes the three moves: **what each document is for, what the original does that the summary cannot, and whether the summariser can supply it.** ⚠ **In one of the two pairs the summary is genuinely defective** — a figure has been rounded — **and B must say so rather than looking for a question about records.** Change roles with the other pair.'));
out.push(table(['Pair A – the conservation report', 'Pair B – the audit file'], [
  ['_Five parts, author checked, wall first._', '_Five parts, provenance at the bottom._'],
  ['_Summariser: "the best page I have written."_', '_⚠ Summariser: "I put the excursion as a little over the limit."_'],
  ['_Author: "the committee treats the page as the report."_', '_Author: "eleven degrees over is a destruction, not a discussion."_'],
  ['_⚠ The question: who keeps the original alive._', '_⚠ Not a question about records: a triggering figure was rounded._'],
  ['_⚠ Answerable, by the committee, not by either of them._', '_⚠ The page is defective and the remedy is a correction._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the three moves for each pair. ⚠ **Pair B is not a records question:** **a triggering figure rounded to _a little over the limit_ is a defective summary**, and no decision about where the original lives will mend it. **A page that displaces its original and a page that has moved a figure across a threshold need different remedies** — **a question for the committee, and a correction today.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **the last summary you wrote or received** and do the three moves on it in writing. ⚠ **Write what the original does that your page cannot.** Then the question the cycle ends on: **where does that original live now, and who decided that?**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the page does not settle:  _A page that does everything the unit teaches, and the man who wrote the report is worse off. Asked whether the page is wrong, Lubna said no — she would write it again, and Mr Kabbani is right as well, which she had not expected at all. His complaint in his words: the committee now treats your page as the report, and eleven months of lime plaster analysis is inside a clause that begins nothing else alters this decision. So the mediation, which is three moves: separate what the summary is for from what the original is for; find what the original does that the summary cannot; and say whether the summariser can supply it. The summary is for one decision, on one day, by five people who will not read forty-two pages, and it did that. The original, Adnan said, is for the questions nobody has asked yet: a record is not for this decision, it is for the dispute in four years about what was known in April. Which is the finding of the cycle and it is new — a summary serves a decision that exists, and a record serves questions that do not exist yet, and nobody can summarise for a question nobody has asked. Omar said so his eleven months is correctly in band three, and correctly in band three for this decision, which is the whole of the trouble: band three is a judgement about one decision and it is being read as a judgement about the material. Rim asked what the page does not settle, and who keeps the original alive and where it lives — which is not a summarising question and Lubna cannot answer it, because it is a decision about the committee’s own files and the committee has never taken it. Hiba asked what the mediator does if neither of them is wrong, and the mediator names the question and hands it to the people who can answer it, which here is the committee and not either of these two. And Bassel asked what we must not do: two things, the second of which looks generous — do not improve the page, and do not put the lime plaster back into it, which would restore eleven months to visibility and lose the wall, and that is how the February page was written._'));
out.push(p('**Listener task:** write what your own last summary\'s original does that your page cannot, and where that original lives.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text and think of the word which best fits each gap. **Use only one word in each gap.**'));
out.push(box(null, [
  '**WHAT A SUMMARY IS FOR**',
  'A summary is not a shorter version **(1)** ______ a document. It is a version with the part that matters kept, and the difference shows **(2)** ______ soon as somebody has to act. Accuracy is **(3)** ______ enough: a page can be right in every sentence and still lose the one finding that would have changed what the reader was **(4)** ______ to do.',
  'The commonest mistake is to cut **(5)** ______ proportion to the original. A submission spends a quarter of itself on costs, and **(6)** ______ the summary gives costs a quarter of its space. The result is a map of the submission, and **(7)** ______ wants a map of the submission.',
  'What a reader wants is the finding that changes the decision, placed first and with its figure; then the two or three things that must be checked before acting; and then one sentence to say that nothing **(8)** ______ alters it.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a summariser and an author (80 words or more).'));
out.push(p('**ONE PAGE, TWO ACCOUNTS** · ______________   **The page.** _"______________"_   **The summariser.** _"______________"_   **The author.** _"______________"_   ⚠ **Both accounts are accurate and neither is about ______________.**   **What the summary is for.** ______________. ⚠ **It did that.**   **What the original is for.** ⚠ ______________.   **The question the page does not settle.** ⚠ ______________.   **Who can answer it?** ______________, **and not ______________.**   **And what I am not doing.** ⚠ **Improving the page**, and **putting ______________ back into it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both accounts quoted, and both allowed to be accurate',
  'What each document is for, kept apart',
  'The question the page does not settle, in one sentence',
  'Both things you are not doing, named',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: an article)', 10));
out.push(box(null, [
  '⚠ **The article, and the shape is 11.6: a title that is not a label, a first line that is a claim and not a topic, one concrete case with a figure, and a last line the reader can repeat to somebody else.** **What Unit 18 adds is that an article is a summary with a reader who has not asked for it** — **so the load-bearing sentence has to earn its place in the first two lines or nothing after it is read.**',
  'An English-language magazine for people who work with documents has asked for articles on **the one page that stands for a hundred.**',
  'Write your **article** in **180–220 words**, saying **what you were asked to summarise, what you left out, what it cost or saved, and the one rule you would give somebody doing it tomorrow.**',
  '⚠ **All four requirements, or the content mark goes.** **And the title is not _Summarising_**: a label tells the editor what the subject is, and the editor chose the subject.',
], C.lorange, C.orange));
out.push(...lines(6));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The ___ of forty-two pages into one took an evening and a second reader.   a) distillation   b) distil   c) distilled',
  '2  Nothing else in these pages ___ the decision you have to take.   a) alters   b) alter   c) altering',
  '3  The figure was ___ to a centimetre and stopped triggering a survey.   a) rounding   b) rounded   c) round',
  '4  The ___ of a long report to one page is not the same thing as a précis.   a) reduce   b) reducing   c) reduction',
  '5  He ___ out the discussion and left the decision, which is six lines.   a) striped   b) stripped   c) strip',
  '6  A faithful summary is often ___ than the one people write.   a) short   b) shortly   c) longer',
  '7  The ___ of the original is one of the five things a provenance line records.   a) length   b) lengthen   c) lengthy',
  '8  Read those five pages ___ before you fix anything to that wall.   a) exhaust   b) exhaustive   c) exhaustively',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 2 style – sentence completion).** 🔊 **Track 18.15** You will hear a student talking about summarising a long report. For questions **1–10**, complete the sentences with **a word or short phrase.**'));
[
  '**1**  The report she summarised ran to ______________ pages.',
  '**2**  Her first one-page version left out a sentence from page ______________.',
  '**3**  On the strength of that page the committee approved a ______________ contract.',
  '**4**  The north wall had moved eleven millimetres since ______________.',
  '**5**  The rule she had been taught was to keep everything in ______________.',
  '**6**  She now writes the band that can be ignored in ______________.',
  '**7**  The standard requires a survey at ten millimetres in any ______________ period.',
  '**8**  The author of the report corrected her ______________.',
  '**9**  Besides the date and her own name, the provenance line records the ______________ of the original.',
  '**10**  Her omission note tells the reader to read pages 29 to 33 before ______________ anything to the wall.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['Lubna', 'I want to describe one page twice, because I wrote it twice and the second time was better for a reason I can give you.'],
  ['Lubna', 'The document was a conservation report on a house in Sarouja, and it ran to forty-two pages. Five people on a committee had to decide about it and none of them was going to read it. I did the one-page version in an evening in February and I was pleased with it. The history, the materials, four photographs, the roof, the costs in three columns.'],
  ['Lubna', 'What I left out was one sentence, from page thirty-one. It said the north wall is moving. The committee read my page and approved a plastering contract, which goes on the inside face of that wall. Everything on my page was true.'],
  ['Lubna', 'The figure in the sentence I had left out was eleven millimetres. The wall had moved eleven millimetres since March, and I did not have it anywhere.'],
  ['Lubna', 'Now, why did I leave it out? Not hurry, and not carelessness. The rule I had been taught was to keep everything in proportion: four pages on the roof become four lines, twelve pages of history become twelve. The report gave the wall one sentence out of forty-two pages, so I gave it nothing out of one page. Proportion is the wrong rule and nobody had ever told me.'],
  ['Lubna', 'What I do now is three bands with the labels printed. What changes the decision. What has to be checked before anybody acts. And what can be ignored — and I write that band in one sentence, which is the part people cannot believe. It used to take me a third of the page to say what the rest of the report contained.'],
  ['Lubna', 'There is one more thing, and it is the thing I am proudest of and it is not mine. I showed the new page to the man who wrote the forty-two pages, which I had never done in my life. He told me the standard requires a survey at ten millimetres in any three-month period, and my eleven millimetres is since March, which is seven months. So he corrected my threshold, and the page went out saying that the three-month figure is not yet known, which is the truth and is more useful than what I had.'],
  ['Lubna', 'At the bottom there is a provenance line. It says what was summarised, by whom, when, whether the author has seen it, and the length of the original — and the length is the one people leave out. A reader who knows that one page stands for forty-two reads it differently.'],
  ['Lubna', 'And there is an omission note, which has a trigger in it. Mine says: read pages twenty-nine to thirty-three before fixing anything to the north wall. Fourteen words. It is shorter than the paragraph of history I put in the February version, and it is the sentence that would have stopped the committee.'],
]));
out.push(p('**C  Writing.** Write the article (180–220 words): what you were asked to summarise, what you left out, what it cost or saved, and the one rule for somebody doing it tomorrow.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ find the part that, if it goes, makes the rest not worth reading',
  '☐ put it first, with its figure, its interval and its source',
  '☐ arrange what survives in three labelled bands, in that order',
  '☐ write the band that can be ignored in one sentence',
  '☐ summarise a meeting in six lines, including what was not decided',
  '☐ tell a figure that describes from a figure that triggers',
  '☐ write an omission note whose trigger names an act',
  '☐ show a summary to the author of the original and ask the second question',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _cut out · leave aside · pare down · strip out · run to · amount to · go over · write up · set down · take in · skim over · lose sight of_.',
  '**This unit\'s word-formation set** _(Reading Part 2 in 18.7 draws on this)_: _abbreviate → **abbreviation** · compress → **compression** · reduce → **reduction** · substitute → **substitution** · faithful → **faithfulness** · exhaustive → **exhaustively** · essence → **essential** · distil → **distillation** · concise → **concision**._',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 2 · Syria Edition · Unit 18 · Student\'s Book');
