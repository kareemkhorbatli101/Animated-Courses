// Proactive Business English B2 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a reader who will not read the original · a two-page version · proportion in a summary · what gets a line · what gets a page · to quote fairly · a quotation that does not improve your side · the part against us · an absence inside a summary · a summary read without the original · a load-bearing fact only in the bundle · a page reference · a bundle · a chronology of a bundle · to summarise something you disagree with · not arguing in a summary · a neutral summary · the three findings that decide it · a finding of no consequence · to give a line to a page · to give a page to a line · the sentence everybody quotes · a sentence nobody has read in place · to read a quotation in place · a fair precis · to compress without deciding · an omission that changes a meaning · a summary that replaces its original · to say which page to go to · a summary of the other side\'s case · the length a decision can carry · to cut a document to the size of a reader';
const COLLOC = 'to carry a bundle · to quote in place · to run a page reference · to compress a finding · to size a summary to a reader · to read a sentence whole · to give a finding a line · to summarise against yourself';
const BACK_AT_B2 = 'summary · quotation · omission';

out.push(h1('Unit 17  Summarising at Length'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**17.1**  write for the reader who will not read the original',
  '**17.2**  decide what gets a line and what gets a page',
  '**17.3**  quote fairly, including the part against you',
  '**17.4**  put an absence inside a summary',
  '**17.5**  write so that nothing load-bearing is only in the bundle',
  '**17.6**  summarise a case you disagree with, without arguing in it',
  '**17.7**  Review & Mediate: the sentence everybody quotes and nobody has read in place',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Two hundred and fourteen pages, and nobody is going to read them', [
  '⚠ **Mr Dallal\'s claim about the pallet condition went to arbitration in Beirut on 12 January, under clause 19 of the agreement accepted in June.** **The bundle runs to two hundred and fourteen pages and twenty-two numbered documents, and about half of them are Sham Trading\'s own.**',
  '⚠ **Mr Ayoub will read two pages. Mr Sayegh has read all of it and charges by the hour. The arbitrator will read what the parties put in front of her.** ⚠ **And in five years somebody in this office will read the summary and not the bundle, because the bundle will be in a box.**',
  '⚠ **Three of the twenty-two documents decide it.** **Nineteen of them are correct, relevant, and of no consequence whatever** — ⚠ **and a summary that gives each of the twenty-two a paragraph is a summary that has decided nothing and will be read by nobody.**',
  '⚠ **This unit is the two pages.** **It is the only unit in the level where the learner\'s whole task is subtraction** — ⚠ **and the hardest thing in it is the one sentence that has to say what the bundle does not contain.**',
], C.lyellow, C.orange));

// ======================= CYCLE 17.1 =======================
out.push(pb());
out.push(h2('17.1  The reader who will not read the original'));
out.push(p('**Function:** writing the version that will be acted on   ·   **Grammar:** _this summary is written to be acted on without the bundle_   ·   **Pronunciation:** a length stated as a decision'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the longest document your work has produced in the last year. ⚠ Then say who read all of it, and who acted on it.'));
out.push(p('**b**  Which is written to be acted on? _a summary of the bundle, by document, in twenty-two paragraphs · two pages: what is claimed, the three documents that decide it, and what is not in the bundle at all_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the twenty-two-paragraph summary?   **A** it is too short   **B** it is a summary by document rather than by question, and nobody will act on it   **C** it is accurate'));
out.push(p('**b**  Listen again. **1** How many people will read the bundle, and how many will read the summary? **2** What does Mr Sayegh say a summary has to be able to survive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  "Two hundred and fourteen pages, and two readers"', [
  ['Nour', 'I have summarised the bundle. Twenty-two paragraphs, one for each document.'],
  ['Mr Sayegh', '⚠ **Then you have indexed it, which is useful, and you have not summarised it.**'],
  ['Nour', 'What is the difference?'],
  ['Mr Sayegh', '⚠ **An index is organised by document. A summary is organised by question.** ⚠ **Nobody decides anything by document.**'],
  ['Nour', 'Who is actually going to read the bundle?'],
  ['Mr Sayegh', '⚠ **Me, because I am paid to, and the arbitrator, in the parts the parties take her to.** **Mr Ayoub will read two pages. The committee at the bank will read half a page if we ever have to tell them.**'],
  ['Nour', 'And in five years?'],
  ['Mr Sayegh', '⚠ **In five years somebody in your office will read your summary and the bundle will be in a box in a store.** ⚠ **Which is the reader who matters most and the one nobody writes for.**'],
  ['Nour', 'So how long?'],
  ['Mr Sayegh', '⚠ **Two pages, and the length is a decision rather than a constraint.** ⚠ **Say so at the top: *this summary is written to be acted on without the bundle*.**'],
  ['Nour', 'And if somebody needs the detail?'],
  ['Mr Sayegh', '⚠ **Then every load-bearing sentence carries a page number and they go and look.** ⚠ **What a summary must survive is being read by somebody who has no access to the original at all** — **and the test is not whether it is accurate. It is whether a decision taken on it alone would be the same decision.**'],
  ['Nour', 'Twenty-two paragraphs is accurate.'],
  ['Mr Sayegh', '⚠ **It is accurate and it is unusable, and unusable is worse** — **because an inaccurate summary gets corrected and an unusable one gets ignored, and nobody ever says so.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing for the reader who will not read the original**',
  table(['', 'An index', 'A summary'], [
    ['**organised by**', '⚠ **document** — **twenty-two paragraphs, one each**', '⚠ **question** — **because nobody decides anything by document**'],
    ['⚠ **the readers**', '**assumed to have the bundle**', '⚠ **named** — **two pages for one, half a page for another, and a stranger in five years who has no bundle at all**'],
    ['⚠ **the length**', '**whatever the material takes**', '⚠ **a decision, stated at the top** — *this summary is written to be acted on without the bundle*'],
    ['⚠ **the test**', '**is it accurate?**', '⚠ **would a decision taken on it alone be the same decision?**'],
  ], [1.5, 3.4, 4]),
  '⚠ **An index is organised by document and a summary is organised by question**, **and the two look identical in a contents list.** ⚠ **Nobody decides anything by document** — **so a twenty-two-paragraph summary of twenty-two documents has done the work and not the job.**',
  '⚠ **Name your readers and what each will read.** ⚠ **Two pages, half a page, and a stranger in five years with the bundle in a box** — **and the last of those is the reader who matters most and the one nobody writes for.**',
  '⚠ **State the length as a decision at the top.** ⚠ *This summary is written to be acted on without the bundle.* **Twelve words** — **and they tell the reader that nothing has been left out by accident.**',
  '⚠ **The test is not accuracy.** ⚠ **It is whether a decision taken on the summary alone would be the same decision as one taken on the bundle** — **and that is a question a writer can actually answer, where *is it accurate* is one they always answer yes to.**',
  '⚠ **And accurate-and-unusable is worse than inaccurate.** ⚠ **An inaccurate summary gets corrected; an unusable one gets ignored** — **and nobody ever tells the writer, so it happens again.**',
  '**Practise:** Take a long document at your work. Name every reader and what each will read. Then say what length is a decision rather than a constraint.',
  '**Useful phrases:**  you have indexed it, not summarised it  ·  organised by question  ·  the reader in five years  ·  acted on without the bundle  ·  accurate and unusable',
  '**Pronunciation – a length as a decision.** 🔊 **Track 17.2** Listen twice. ⚠ **The first says *two pages* firmly and stops.** ⚠ **The second says *about two pages, I hope*.** **Firm, it is a decision the reader can rely on; hedged, it is an apology, and a hedged length invites a request for more.** Say it four times, firmly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a summary; B tests it.'));
out.push(dlg(null, [
  ['A', 'I have summarised it. __________ paragraphs, one for each __________.'],
  ['B', '⚠ **Is that organised by document or by question?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who is going to read the original?**'],
  ['A', '__________.'],
  ['B', '⚠ **And who will read your summary in five years?**'],
  ['A', '__________.'],
  ['B', '⚠ **Would a decision taken on your summary alone be the same decision?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then how long is it, and is the length a decision?**'],
]));
out.push(table(['Role card 1 — the index that looks like a summary', 'Role card 2 — accurate and unusable'], [[
  '⚠ **A has one paragraph for each of twenty-two documents and is proud of the coverage.** ⚠ **B asks what question the summary answers, and the answer is *all of them*.** ⚠ **B\'s point: an index is organised by document and a summary by question, and nobody decides anything by document** — **so A has done the work and not the job, and the two are indistinguishable in a contents list.**',
  '⚠ **A defends the summary on accuracy, which is unanswerable, because it is accurate.** ⚠ **B agrees and asks the other question: would a decision taken on it alone be the same decision?** ⚠ **B\'s point: accurate-and-unusable is worse than inaccurate** — **an inaccurate summary gets corrected, an unusable one gets ignored, and the writer never finds out.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the difference between an index and a summary in one sentence. ⚠ Then name the four readers, and say which one matters most.'));
out.push(PHRASE_CARD(['indexed, not summarised', 'by question', 'the reader in five years', 'the same decision?', 'accurate and unusable']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a long document at your work. Name its readers.'));
out.push(table(['The reader', 'What they will read', 'Do they have the original?', 'What they will do with it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 1.8, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The document is _______ pages. _______ will read all of it. _______ will read _______. In five years _______ will read _______, with _______. So the summary is _______ long, and that is a decision because _______._'));
out.push(p('**Listener task:** count how many documents had a reader who would read all of them. ⚠ Then ask how many had a five-year reader named, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four summary openings on the board — find the index pretending to be a summary, and the one with a hedged length. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**DALLAL v SHAM TRADING: SUMMARY OF THE BUNDLE. 18 January. N. Mansour. Two pages. Page 1.**',
  '⚠ **This summary is written to be acted on without the bundle.** **The bundle is 214 pages and 22 documents; every load-bearing sentence below carries a page reference.** ⚠ **Three documents decide the claim. Nineteen are correct, relevant and of no consequence.**',
  table(['', 'The question', 'The answer, and where'], [
    ['**1**', '**What is claimed?**', '**That 1,180 cartons delivered between April and September were short-measured because of a pallet 50 mm narrow, and that the condition was known to us. 2.1 million. [pp. 1–4]**'],
    ['**2**', '⚠ **Was the condition known to us?**', '⚠ **Yes, from April 2023, and our own root-cause paper says so. [p. 61, our document]** — **this is the document that decides the claim and it is ours**'],
    ['**3**', '⚠ **Was it disclosed?**', '⚠ **To Ms Tannous in April, in writing. To Dallal Freres, not in writing at any time. [pp. 88–94]**'],
    ['**4**', '**What does the agreement require?**', '**Clause 11 inspection on three days\' notice; clause 12 deemed acceptance at fourteen days. Nine of the eleven consignments are outside the fourteen days. [pp. 12–13]**'],
  ], [0.4, 2.8, 5.8]),
  '⚠ **The three that decide it, named.** **Our root-cause paper of March [p. 61]. The gate sheets for the eleven consignments [pp. 101–144]. And Mr Attar\'s audit note of 2024, which both sides quote [p. 177].**',
  '⚠ **What is not in the bundle at all, and this is the most important line on this page.** ⚠ **There is no record anywhere, on either side, of the telephone call of 14 May** — **in which, on our account, Mr Hamdan accepted that the condition predated the agreement.** ⚠ **The absence is ours: we made the call and we did not note it.** **See page 2.**',
  '⚠ **The nineteen of no consequence** are listed on page 2 with one line each, **because a reader who is told that nineteen documents do not matter will want to see that somebody has read them.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is the summary organised, and how many documents decide the claim?'));
out.push(item('2', 'Which document that decides the claim belongs to Sham Trading?'));
out.push(item('3', 'Why are the nineteen listed at all, if they are of no consequence?'));
out.push(box('Writer\'s box', [
  '**The summary page — six parts:** ⚠ **a first line saying it is to be acted on without the original** → **the size of the original and the count that decides it** → ⚠ **a table of *the question · the answer, and where*** → **the deciding documents, named** → ⚠ **what is not in the bundle** → **and the irrelevant majority, listed with one line each.**',
  '⚠ **Say in the first line that the summary stands alone, and give the size of the original.** ⚠ **214 pages, 22 documents, three that decide it, nineteen of no consequence** — **four numbers that add up and tell the reader the writer has been through all of it.**',
  '⚠ **Organise the table by question and not by document.** ⚠ **_What is claimed · was it known · was it disclosed · what does the agreement require_** — **four questions, and a reader can act on any one of them without the other three.**',
  '⚠ **Put the page reference in the answer and not in a footnote.** ⚠ **[p. 61]** — **because the whole promise of the first line is that a reader can go and look, and a reference that costs a page-turn is a reference nobody follows.**',
  '⚠ **Name the document that is against you, and say it is yours.** ⚠ *Our own root-cause paper says so. [p. 61, our document]* — **and the phrase *this is the document that decides the claim and it is ours* is the strongest sentence on the page**, **because a reader who finds that out from somebody else stops trusting the summary.**',
  '⚠ **And list the irrelevant majority with one line each.** ⚠ **Nineteen documents, nineteen lines, on the second page** — **because a reader told that nineteen documents do not matter needs to see that somebody has read them, and nineteen lines cost half a page.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the summary page for a long document at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: SUMMARY. ______________. ______________. ______________ pages. Page 1.**   ⚠ **This summary is written to be acted on without the original.** **The original is ______________ and ______________; every load-bearing sentence below carries a ______________.** ⚠ **______________ decide it. ______________ are correct, relevant and of no consequence.**   **The question** | **The answer, and where**   **______________** | **______________ [______________]**   ⚠ **______________** | ⚠ **______________ [______________]**   ⚠ **The ______________ that decide it, named. ______________.**   ⚠ **What is not in the original at all, and this is the most important line on this page.** ⚠ **______________.** ⚠ **The absence is ______________.**   ⚠ **The ______________ of no consequence** are listed with one line each, **because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line saying it stands alone, with the size of the original', ''],
  ['Organised by question, not by document', ''],
  ['A page reference inside every load-bearing answer', ''],
  ['The document against you named, and said to be yours', ''],
  ['The irrelevant majority listed with one line each', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their question column. ⚠ The class says whether a reader could act on any one question without the others.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a long document at your work (**200 to 240 words**). Say how long it is, who read all of it, who acted on it, what a two-page version would say, and what the five-year reader would need.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would the same decision be taken on the summary alone?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did anybody read the whole original? Usually one of three — ⚠ **and in that one it was the person paid by the hour, which is the pattern: the only complete reader of a long document is usually the one being paid to read it.**'));
out.push(box('Homework', ['Write your final text. Then take the longest document at your work and name its four readers, including the one in five years (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.2 =======================
out.push(pb());
out.push(h2('17.2  What gets a line and what gets a page'));
out.push(p('**Function:** proportion in a summary   ·   **Grammar:** _three of the twenty-two · nineteen get a line each_   ·   **Pronunciation:** a count read as a finding'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a report at your work in which everything got the same amount of space. ⚠ Then say which part actually mattered.'));
out.push(p('**b**  Which has proportion? _each of the twenty-two documents is described in turn · three documents get a page between them and nineteen get a line each_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say the proportions of a summary are?   **A** equal   **B** a page for what decides it and a line for what does not, and the ratio is the finding   **C** decided by the length of each document'));
out.push(p('**b**  Listen again. **1** What test does he give for deciding what gets a page? **2** Why does he say the nineteen must still be listed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  "The proportions are the finding"', [
  ['Nour', 'How much space for each document?'],
  ['Mr Sayegh', '⚠ **Wrong question.** ⚠ **How much space for each of the things that could change the outcome.**'],
  ['Nour', 'Three documents could.'],
  ['Mr Sayegh', '⚠ **Then those three get a page between them and the other nineteen get a line each.** ⚠ **And the ratio is itself the finding** — **a reader who sees three paragraphs and nineteen lines has been told the shape of the case before reading a word of it.**'],
  ['Nour', 'What is the test?'],
  ['Mr Sayegh', '⚠ **If this document did not exist, would the answer change?** ⚠ **Yes means a paragraph. No means a line.**'],
  ['Nour', 'Nineteen of them are correct and relevant.'],
  ['Mr Sayegh', '⚠ **Correct and relevant and of no consequence, which is the commonest condition of a document in a bundle.** ⚠ **Relevance is what gets a thing into a bundle. Consequence is what gets it a paragraph.**'],
  ['Nour', 'Then why list the nineteen at all?'],
  ['Mr Sayegh', '⚠ **Because a reader told that nineteen documents do not matter wants to see that somebody read them.** ⚠ **Nineteen lines cost half a page and they are the cheapest credibility in the summary.**'],
  ['Nour', 'And if I am wrong about one of the nineteen?'],
  ['Mr Sayegh', '⚠ **Then it is on the list with a page number and the reader finds it, which is the whole reason for the list.** ⚠ **A document left out entirely is a document you have decided about in private.** **A document on a one-line list is a document you have decided about in public, and somebody can correct you in a morning.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Proportion**',
  table(['', 'Not', 'Write'], [
    ['**the question**', '⚠ *how much space for each document?*', '⚠ **how much space for each thing that could change the outcome?**'],
    ['⚠ **the test**', '**importance, which cannot be settled**', '⚠ *if this document did not exist, would the answer change?* — **yes: a paragraph. No: a line.**'],
    ['⚠ **relevance and consequence**', '**treated as the same thing**', '⚠ **relevance gets a document into a bundle; consequence gets it a paragraph**'],
    ['⚠ **the ratio**', '**an accident of the material**', '⚠ **itself the finding** — **three paragraphs and nineteen lines tells a reader the shape of the case before they read a word**'],
  ], [1.9, 3.1, 4]),
  '⚠ **Proportion is not about documents, it is about outcomes.** ⚠ **Ask of each item: if this did not exist, would the answer change?** **Yes is a paragraph and no is a line** — **and the test can be applied by somebody with no judgement about importance at all.**',
  '⚠ **Relevance and consequence are different and almost everybody conflates them.** ⚠ **Relevance is what gets a document into a bundle; consequence is what earns it a paragraph** — **and *correct, relevant and of no consequence* is the commonest condition of a document in any long file.**',
  '⚠ **The ratio is the finding.** ⚠ **Three paragraphs and nineteen lines tells a reader the shape of the case before they have read a word of it** — **and twenty-two equal paragraphs tells them nothing, which is why an even summary feels so unhelpful and so hard to criticise.**',
  '⚠ **List the ones that do not matter, with page numbers.** ⚠ **A document left out entirely is a document you have decided about in private; a document on a one-line list is one you have decided about in public** — **and somebody can correct you in a morning.**',
  '⚠ **And nineteen lines are the cheapest credibility in a summary.** ⚠ **Half a page** — **and without them a reader has only the writer\'s word that the other nineteen were read at all.**',
  '**Practise:** Take a long document. Apply the test to every part. Count how many get a paragraph and how many get a line, and say what the ratio tells a reader.',
  '**Useful phrases:**  would the answer change?  ·  relevance gets it in, consequence gets it a paragraph  ·  the ratio is the finding  ·  decided in private  ·  nineteen lines, half a page',
  '**Pronunciation – a count as a finding.** 🔊 **Track 17.4** Listen twice. ⚠ **The first says *three of the twenty-two decide it* as one phrase.** ⚠ **The second breaks after *three*.** **Run together it is a fact; broken, the three lands first and the reader hears the ratio.** Say it four times with the break.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes proportions; B applies the test.'));
out.push(dlg(null, [
  ['A', 'I have given each of the __________ a paragraph.'],
  ['B', '⚠ **Take the third one. If it did not exist, would the answer change?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is a line. Is it relevant?**'],
  ['A', '__________.'],
  ['B', '⚠ **Relevant and of no consequence. How many are like that?**'],
  ['A', '__________.'],
  ['B', '⚠ **And how many could change the answer?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then that ratio is your first paragraph.**'],
]));
out.push(table(['Role card 1 — relevance and consequence', 'Role card 2 — leaving them out'], [[
  '⚠ **A defends a paragraph on the ground that the document is relevant, which it is.** ⚠ **B accepts the relevance and applies the test** — **if it did not exist, would the answer change? — and it would not.** ⚠ **B\'s point: relevance is what gets a document into a bundle and consequence is what earns it a paragraph, and *correct, relevant and of no consequence* is the usual condition of a document in a file.**',
  '⚠ **A proposes dropping the nineteen entirely, since they do not matter.** ⚠ **B asks how a reader would know they had been read.** ⚠ **B\'s point: a document left out is one you decided about in private, where a one-line entry with a page number is a decision anybody can correct in a morning** — **and nineteen lines cost half a page.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the test in one sentence. ⚠ Then write the difference between relevance and consequence, and say what a ratio of three to nineteen tells a reader.'));
out.push(PHRASE_CARD(['would the answer change?', 'relevant and of no consequence', 'the ratio is the finding', 'decided in private', 'half a page']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a long document at your work. Apply the test to **six** of its parts.'));
out.push(table(['The part', 'If it did not exist, would the answer change?', 'Paragraph or line?', 'Relevant?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 3.2, 1.6, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The document has _______ parts. _______ could change the answer and get a paragraph. _______ are relevant and of no consequence and get a line. The ratio is _______, and it tells a reader _______._'));
out.push(p('**Listener task:** count how many people had given equal space to everything before applying the test. ⚠ Then ask what the ratios were, and note that a ratio of one to six or worse is normal.'));
out.push(p('**Board clinic:** your teacher writes four summaries on the board — find the one with equal paragraphs and the one that has dropped the irrelevant parts entirely. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SUMMARY OF THE BUNDLE, PAGE 2: THE NINETEEN, AND WHY. 18 January. N. Mansour.**',
  '⚠ **The test applied to all twenty-two: if this document did not exist, would the answer change?** **Three yes. Nineteen no.**',
  table(['Doc', 'What it is', 'Line'], [
    ['**5**', '**Dallal Freres purchase order, 2 April**', '**establishes the order; not in dispute. [p. 31]**'],
    ['**6**', '**our acknowledgement, 3 April**', '**not in dispute. [p. 33]**'],
    ['**9**', '**the Beirut receiving note, 14 March, from an earlier consignment**', '⚠ **the only document on the file from before the agreement; it is about a different consignment and proves nothing either way. [p. 44]**'],
    ['**12**', '**correspondence on the carton colour, May to July**', '⚠ **eleven pages, and a preference rather than a criterion. [pp. 70–80]**'],
    ['**17**', '**our credit note of 10 October, 58,000**', '⚠ **relates to the marking rejection and not to the pallets; a reader who assumes otherwise will mis-read the whole file. [p. 95]**'],
    ['**21**', '**the acceptance page of 24 October**', '⚠ **post-dates every consignment in the claim. [p. 160]**'],
  ], [0.5, 3.6, 4.9]),
  '⚠ **Thirteen more are listed on the attached sheet in the same form.** **Every one has a page number.**',
  '⚠ **Two of the nineteen are worth a second sentence, and it is not because they matter.** ⚠ **Document 17, the credit note, is the one a reader is most likely to mis-read: 58,000 against a claim of 2.1 million looks like a part payment and is a credit for a different complaint.** ⚠ **And document 9 is the only pre-agreement document in the bundle, which makes it look important** — **it is about another consignment and proves nothing.**',
  '⚠ **Why this page exists.** **A reader told that nineteen of twenty-two documents are of no consequence has been asked to take a very large statement on trust.** ⚠ **Nineteen lines and nineteen page numbers cost half a page and convert it into something anybody can check in a morning** — **and if I am wrong about one of them, this is the page that lets somebody tell me.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the test, and what were the two numbers it produced?'));
out.push(item('2', 'Why do documents 17 and 9 get a second sentence, and is it because they matter?'));
out.push(item('3', 'What does the writer say this page lets somebody do?'));
out.push(box('Writer\'s box', [
  '**The *and why* page — five properties:** ⚠ **the test, stated, with its two counts** → **a table of *doc · what it is · line*** → ⚠ **a page number on every entry** → ⚠ **a second sentence for the ones a reader will mis-read** → **and a paragraph saying why the page exists.**',
  '⚠ **State the test and give both numbers.** ⚠ **Three yes, nineteen no** — **and the numbers add to twenty-two, which is how a reader knows nothing has been quietly dropped.**',
  '⚠ **One line each, and the line says what the document establishes rather than what it is about.** ⚠ *Not in dispute* **and** *proves nothing either way* **are findings; *concerns the order* is a description, and a description tells a reader nothing they can use.**',
  '⚠ **Give a second sentence to the ones a reader will mis-read, and say that is why.** ⚠ **The credit note of 58,000 against a claim of 2.1 million looks like a part payment** — **and the writer who leaves that unexplained has created the misunderstanding they could have prevented in a clause.**',
  '⚠ **Flag the document that LOOKS important.** ⚠ **The only pre-agreement document in a bundle looks decisive and is about something else** — **and a reader scanning for dates will stop on it.** **Naming that is worth more than naming most of the three that matter.**',
  '⚠ **And say why the page exists.** ⚠ *If I am wrong about one of them, this is the page that lets somebody tell me.* **A summary that cannot be corrected is a summary nobody can rely on** — **and the nineteen lines are what make the three paragraphs believable.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *and why* page for a long document of yours (**80 words or more**). Use the frame.'));
out.push(p('**SUMMARY, PAGE 2: THE ______________, AND WHY. ______________. ______________.**   ⚠ **The test applied to all ______________: if this ______________ did not exist, would the answer change?** **______________ yes. ______________ no.**   **Doc** | **What it is** | **Line**   **______________** | **______________** | **______________ [______________]**   ⚠ **______________** | **______________** | ⚠ **______________ [______________]**   ⚠ **______________** | **______________** | ⚠ **______________ [______________]**   ⚠ **______________ more are listed on the attached sheet in the same form.** **Every one has a ______________.**   ⚠ **______________ of them are worth a second sentence, and it is not because they matter.** ⚠ **______________.**   ⚠ **Why this page exists. ______________.** ⚠ **And if I am wrong about one of them, this is the page that lets somebody tell me.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The test stated, with two counts that add to the total', ''],
  ['Each line saying what the item establishes, not what it is about', ''],
  ['A page number on every entry', ''],
  ['A second sentence for the item a reader will mis-read', ''],
  ['A paragraph saying why the page exists', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only three of their one-line entries. ⚠ The class says of each whether it is a finding or a description.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a report at your work in which everything got equal space (**200 to 240 words**). Say what it covered, which part mattered, what the ratio should have been, and what a reader did with it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what is the ratio, and what does it tell a reader?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the ratio worse than one to five? Usually all three — ⚠ **and in most of them the writer had never counted, which is the point: the ratio is the finding and it can only be found by counting.**'));
out.push(box('Homework', ['Write your final text. Then take a long document and apply the test to every part, and write the two counts (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.3 =======================
out.push(pb());
out.push(h2('17.3  Quoting fairly'));
out.push(p('**Function:** quoting so that the quotation does not improve your side   ·   **Grammar:** _the sentence reads, in full_   ·   **Pronunciation:** a quotation read whole, at one speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something your work quotes often. ⚠ Then say whether you have read the sentence it comes from, in place.'));
out.push(p('**b**  Which is a fair quotation? _the paper says that no occurrence was reported by any customer before March · the paper says that the condition has been present since April 2023 and was identified in the course of this review, and that no occurrence was reported by any customer before March_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the half-sentence?   **A** it is inaccurate   **B** it is accurate, it is a quotation nobody can check without the bundle, and the other side has the bundle   **C** it is too short'));
out.push(p('**b**  Listen again. **1** What is the whole sentence? **2** What does he say the rule is, and what is the test?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  "Quote the sentence, not the half you want"', [
  ['Nour', 'Our root-cause paper says that no occurrence was reported by any customer before March.'],
  ['Mr Sayegh', '⚠ **Read me the sentence.**'],
  ['Nour', '⚠ *The condition has been present since April 2023 and was identified in the course of this review; no occurrence was reported by any customer before March.*'],
  ['Mr Sayegh', '⚠ **So you have quoted the second half of a sentence whose first half is the claim against us.**'],
  ['Nour', 'The second half is true.'],
  ['Mr Sayegh', '⚠ **Every half-sentence anybody ever quoted was true.** ⚠ **The question is not whether it is accurate, it is who else has the document** — **and in an arbitration the other side has all of it and so does the arbitrator.**'],
  ['Nour', 'So they will quote the first half.'],
  ['Mr Sayegh', '⚠ **They will quote the whole sentence, with your half-quotation underneath it, and that costs you more than the sentence ever could.** ⚠ **A party that has been caught shortening one quotation has every other quotation in its summary read twice.**'],
  ['Nour', 'Then I quote the whole thing.'],
  ['Mr Sayegh', '⚠ **You quote the whole thing, and you say which half is against you, in your own words, before they do.** ⚠ **The rule is: a quotation that improves your side is a quotation you have not finished reading.**'],
  ['Nour', 'And the test?'],
  ['Mr Sayegh', '⚠ **Would the other side quote it the same way?** ⚠ **If they would quote it longer, you have cut it.** **If they would quote it shorter, you have found something.**'],
  ['Nour', 'That is a test I can apply without asking anybody.'],
  ['Mr Sayegh', '⚠ **Which is why it is the only one worth having.** **And it applies to your own documents hardest of all** — ⚠ **because the only quotations in this bundle that we can be caught shortening are ours.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Quoting fairly**',
  table(['', 'Not', 'Write'], [
    ['**the unit**', '⚠ **the half you want** — **accurate, and a quotation nobody can check**', '⚠ **the sentence, in full** — **and the paragraph where the sentence is conditional**'],
    ['⚠ **the part against you**', '**left for them to find**', '⚠ **named, in your own words, before they do**'],
    ['⚠ **the rule**', '**quote what helps**', '⚠ **a quotation that improves your side is one you have not finished reading**'],
    ['⚠ **the test**', '**is it accurate?**', '⚠ **would the other side quote it the same way?** — **longer means you cut it; shorter means you have found something**'],
  ], [1.8, 3.2, 4]),
  '⚠ **Every half-sentence anybody ever quoted was true.** ⚠ **Accuracy is not the question; the question is who else has the document** — **and in a dispute the answer is everybody.**',
  '⚠ **The cost of a shortened quotation is not the sentence, it is the summary.** ⚠ **A party caught shortening one quotation has every other quotation read twice** — **and a reader who starts checking a summary has stopped using it.**',
  '⚠ **Name the half against you, in your own words, before they do.** ⚠ **It costs one clause and it converts a weakness into evidence of care** — **and the clause is almost always shorter than the half-sentence it replaces.**',
  '⚠ **The rule in one line:** ⚠ *a quotation that improves your side is a quotation you have not finished reading.* **Not always true, and true often enough to be the first thing to check** — **because a quotation is usually cut at the point where it stops helping.**',
  '⚠ **And the test can be applied alone:** ⚠ **would the other side quote it the same way?** **Longer means you cut it; shorter means you have found something they will not want quoted** — **and it applies hardest to your own documents, because those are the ones you can be caught shortening.**',
  '**Practise:** Take three quotations your work uses. Read each sentence in full. Say which half is against you, and whether the other side would quote it the same way.',
  '**Useful phrases:**  read me the sentence  ·  every half-sentence was true  ·  who else has the document?  ·  would they quote it the same way?  ·  one you have not finished reading',
  '**Pronunciation – a quotation read whole.** 🔊 **Track 17.6** Listen twice. ⚠ **The first reads the whole sentence at one speed.** ⚠ **The second slows on the second half.** **At one speed it is a quotation; slowed on the favourable half, it is an argument, and a reader hears the emphasis and goes to the original.** Say it four times at one speed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A quotes; B asks for the sentence.'));
out.push(dlg(null, [
  ['A', 'The paper says that __________.'],
  ['B', '⚠ **Read me the sentence.**'],
  ['A', '__________.'],
  ['B', '⚠ **Which half is against us?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who else has the document?**'],
  ['A', '__________.'],
  ['B', '⚠ **Would they quote it the same way?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then quote it whole, and name the first half yourself.**'],
]));
out.push(table(['Role card 1 — the true half-sentence', 'Role card 2 — the test applied to your own documents'], [[
  '⚠ **A defends the half-quotation on accuracy and is right about the accuracy.** ⚠ **B agrees and asks who else has the document, which in an arbitration is everybody.** ⚠ **B\'s point: the cost is not the sentence but the summary** — **a party caught shortening one quotation has every quotation read twice, and a reader who starts checking has stopped using it.**',
  '⚠ **A applies the test to the other side\'s documents and finds nothing wrong.** ⚠ **B asks A to apply it to A\'s own, and the shortened quotation is in A\'s own paper.** ⚠ **B\'s point: the only quotations in a bundle that your side can be caught shortening are your own** — **so the test does its real work on your own material and that is where nobody applies it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the whole sentence and mark which half is against the firm. ⚠ Then write the test, and say why it bites hardest on your own documents.'));
out.push(PHRASE_CARD(['read me the sentence', 'which half is against us?', 'who else has it?', 'the same way?', 'not finished reading']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** quotations your work uses. Read each in full.'));
out.push(table(['The quotation as used', 'The sentence in full', 'Which half is against you', 'Would they quote it the same way?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 3, 2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We quote _______. The sentence in full is _______. The half against us is _______. They would quote it _______, which means _______._'));
out.push(p('**Listener task:** count how many of the quotations were half-sentences. ⚠ Then ask how many of the writers had read the sentence in full before today, and expect about half not to have.'));
out.push(p('**Board clinic:** your teacher writes four quotations on the board with their originals — find the cut, and the one where the firm would have been better off quoting more. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FOUR QUOTATIONS IN OUR SUMMARY, CHECKED. 19 January. N. Mansour. Working page.**',
  table(['Quoted as', 'The sentence in full', 'Verdict'], [
    ['⚠ *no occurrence was reported by any customer before March*', '⚠ *The condition has been present since April 2023 and was identified in the course of this review; no occurrence was reported by any customer before March.*', '⚠ **cut** — **the first half is the claim against us.** **Now quoted whole, with one clause of mine before it: *our own paper establishes the date, and it is the document that decides this claim.***'],
    ['⚠ *the gate sheet is the primary record*', '⚠ **(see 17.7 — and the sentence is longer than anybody in this office has ever quoted)**', '⚠ **cut, and not by me** — **see page 2 and the note of 23 January**'],
    ['**clause 12: a consignment not rejected within fourteen days of delivery is deemed accepted**', '**the same, and the clause is one sentence**', '⚠ **whole** — **and I have added the sentence that nine of eleven consignments are outside the period, because a reader who works that out themselves will wonder why I did not say it**'],
    ['⚠ *the Buyer may inspect any consignment on three days\' notice*', '**the same**', '⚠ **whole, and useless to us** — **they never inspected, which is a fact about them and not an argument, and I have left it as a line in the nineteen**'],
  ], [2.8, 3.4, 3.4]),
  '⚠ **Two of the four were cut, and one of the two was cut by somebody else before it ever reached me.** ⚠ **That is the finding of this page and it is more serious than the first one**, **because a quotation that has been shortened inside a company and then repeated for years has stopped being a quotation at all** — **it has become a thing everybody knows.**',
  '⚠ **The test I applied to all four: would the other side quote it the same way?** **On the first, they would quote it longer. On clause 12 they would quote it the same. On clause 11 they would not quote it at all, which told me it was not worth a paragraph.** ⚠ **And on the second I cannot answer the question yet, which is why there is a note of 23 January.**',
  '⚠ **What I have changed in the summary.** **The first quotation now runs in full, with one clause of mine in front of it naming the half against us.** ⚠ **The clause is nine words and the half-sentence it replaces was fourteen** — **so quoting fairly made the summary shorter, which I had not expected and will not forget.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of the four were cut, and what is notable about one of the cuts?'));
out.push(item('2', 'What did the test tell the writer about clause 11?'));
out.push(item('3', 'What does she say she had not expected?'));
out.push(box('Writer\'s box', [
  '**The quotation audit — five properties:** ⚠ **a table of *quoted as · the sentence in full · verdict*** → **the test applied to every one** → ⚠ **the quotation cut by somebody else** → ⚠ **what the test tells you about what to leave out** → **and what fixing it cost.**',
  '⚠ **Put the quotation as used beside the sentence in full, side by side.** ⚠ **The cut is visible and arguable in that form and invisible in any other** — **and a verdict column of *cut* or *whole* makes the page usable by somebody else.**',
  '⚠ **Record the quotation that was cut before you got it.** ⚠ **A quotation shortened inside a company and repeated for years has stopped being a quotation: it has become a thing everybody knows** — **and that is more serious than a cut you made yourself, because nobody is looking for it.**',
  '⚠ **Use the test to decide what to LEAVE OUT as well as what to quote.** ⚠ **The other side would not quote clause 11 at all** — **which told the writer it was not worth a paragraph, and moved it into the one-line list.** **The test does proportion work as well as fairness work.**',
  '⚠ **Say what the honest version cost.** ⚠ **Nine words against fourteen** — **quoting fairly made the summary shorter.** **That is not always true and it is worth recording when it happens, because the assumed cost of fairness is length and here there was none.**',
  '⚠ **And where you cannot yet answer the test, say so and give a date.** ⚠ *I cannot answer the question yet, which is why there is a note of 23 January.* **An open item with a date is a finding; an open item without one is a thing that will be forgotten.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the quotation audit for a document of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE ______________ QUOTATIONS IN OUR ______________, CHECKED. ______________. ______________. Working page.**   **Quoted as** | **The sentence in full** | **Verdict**   ⚠ _______________._ | ⚠ _______________._ | ⚠ **cut** — **______________**   **______________** | **______________** | ⚠ **whole** — **______________**   ⚠ **______________** | **______________** | ⚠ **______________**   ⚠ **______________ of the ______________ were cut, and ______________.** ⚠ **______________.**   ⚠ **The test I applied to all of them: would the other side quote it the same way?** **______________.**   ⚠ **What I have changed. ______________.** ⚠ **______________, which I had not expected.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Quoted as* and *the sentence in full* side by side', ''],
  ['A verdict on every one', ''],
  ['Any quotation that was cut before the writer received it', ''],
  ['The test used to decide what to leave out as well', ''],
  ['What the honest version cost, in words or in substance', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one *quoted as* and then the sentence in full. ⚠ The class says where the cut falls, and whether it falls at the point where the sentence stopped helping.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something your work quotes often (**200 to 240 words**). Say what it is, where it comes from, whether you have read the sentence in full, what the whole sentence says, and who shortened it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would the other side quote it the same way?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had nobody read the sentence in full? Usually two of three — ⚠ **and in at least one the quotation turns out to be shorter than the sentence in a way that changes it, which is the whole of 17.7 arriving early.**'));
out.push(box('Homework', ['Write your final text. Then find one thing your work quotes, read the sentence it comes from in full, and write out both (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.4 =======================
out.push(pb());
out.push(h2('17.4  The absence, inside the summary'));
out.push(p('**Function:** putting what the original does not say into the summary   ·   **Grammar:** _there is no record anywhere of · and the absence is ours_   ·   **Pronunciation:** an absence stated as a fact, not as a worry'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something that happened at your work that is in no document. ⚠ Then say who would know, and how long they will be there.'));
out.push(p('**b**  Which belongs in a summary? _there may be other material not before us · there is no record anywhere, on either side, of the telephone call of 14 May_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the absence, and whose is it?   **A** a missing gate sheet, Dallal\'s   **B** no record of the telephone call of 14 May, and the absence is Sham Trading\'s   **C** a missing inspection report'));
out.push(p('**b**  Listen again. **1** Why does Mr Sayegh say the absence must be in the summary rather than left out? **2** What does Nour want to add, and what does he refuse?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  "No record anywhere, on either side"', [
  ['Nour', 'On 14 May I telephoned Mr Hamdan and he accepted that the pallet condition predated the agreement. It is in no document.'],
  ['Mr Sayegh', '⚠ **On either side?**'],
  ['Nour', 'On either side. I made the call and I did not note it.'],
  ['Mr Sayegh', '⚠ **Then it goes in the summary, on the first page, and it goes in as a fact about the bundle.**'],
  ['Nour', 'It helps nobody. It is our best point and we cannot prove it.'],
  ['Mr Sayegh', '⚠ **It is not a point at all. That is why it goes in.** ⚠ **A summary that lists what the bundle contains and not what it lacks tells the reader that the bundle is complete** — **and the one thing we know is that it is not.**'],
  ['Nour', 'Mr Ayoub will ask why we did not note it.'],
  ['Mr Sayegh', '⚠ **He will, and the answer is in your sentence: the absence is ours.** ⚠ **Four words, and they stop the conversation you are dreading** — **because the only alternative is that he works it out and asks the question in a worse form.**'],
  ['Nour', 'Should I say what I remember of the call?'],
  ['Mr Sayegh', '⚠ **In the summary, no.** ⚠ **A summary is about what the bundle says and does not say.** **What you remember is a separate document with your name on it, dated, and written before anybody has told you what would be convenient to remember.**'],
  ['Nour', 'Written today.'],
  ['Mr Sayegh', '⚠ **Written today, which is eight months late and is the earliest it can now be written.** ⚠ **And in the summary, one sentence: there is no record anywhere of the call, and the absence is ours.**'],
  ['Nour', 'And if the other side has a note of it?'],
  ['Mr Sayegh', '⚠ **Then your sentence is wrong and they will say so, and you will have been wrong about a fact rather than silent about one.** ⚠ **Those are completely different positions, and only one of them survives.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The absence, inside the summary**',
  table(['', 'Not', 'Write'], [
    ['**the form**', '⚠ *there may be other material not before us* — **a sentence that says nothing**', '⚠ *there is no record anywhere, on either side, of the telephone call of 14 May*'],
    ['⚠ **whose it is**', '**unstated**', '⚠ *and the absence is ours* — **four words, and they answer the question before it is asked**'],
    ['⚠ **what you remember**', '**in the summary**', '⚠ **a separate dated document with your name on it** — **a summary says what the bundle says and does not say**'],
    ['⚠ **the risk**', '**saying nothing, in case you are wrong**', '⚠ **being wrong about a fact beats being silent about one** — **only one of the two survives being found out**'],
  ], [1.7, 3.3, 4]),
  '⚠ **A summary that lists what the bundle contains and not what it lacks tells the reader that the bundle is complete.** ⚠ **It never is**, **and the one absence you know about is the one you are deciding whether to mention.**',
  '⚠ **Say whose the absence is, in four words.** ⚠ *And the absence is ours.* **It answers the question your reader is about to ask, in the form you would choose rather than the form they would** — **and the question only gets worse if they reach it first.**',
  '⚠ **Keep what you remember out of the summary and in a dated document of its own.** ⚠ **A summary is about the bundle.** **A recollection is evidence of a different kind and it needs a date, a name, and the fact that it was written before anybody said what would be convenient to remember.**',
  '⚠ **Write the recollection today, however late today is.** ⚠ **Eight months late is the earliest it can now be written** — **and a note written late and dated honestly is worth more than no note, which is the choice actually in front of you.**',
  '⚠ **And being wrong about an absence beats being silent about one.** ⚠ **If the other side produces a note of the call, your sentence is wrong and they say so** — **and you have been wrong about a fact rather than silent about one.** **Only the first of those survives.**',
  '**Practise:** Take something at your work that is in no document. Write the absence as one sentence, say whose it is, and write the recollection as a separate dated note.',
  '**Useful phrases:**  on either side  ·  the absence is ours  ·  what the bundle does not say  ·  a separate dated note  ·  wrong about a fact, not silent about one',
  '**Pronunciation – an absence as a fact.** 🔊 **Track 17.8** Listen twice. ⚠ **The first says *there is no record anywhere of the call, and the absence is ours* flatly.** ⚠ **The second drops at the end.** **Flat, it is a finding about the bundle; dropped, it is a confession, and a confession invites a conversation about blame instead of about the gap.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports an absence; B places it.'));
out.push(dlg(null, [
  ['A', 'On __________ I __________, and it is in no document.'],
  ['B', '⚠ **On either side?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it goes in the summary. Whose is the absence?**'],
  ['A', '__________.'],
  ['B', '⚠ **Say so in four words. And what you remember?**'],
  ['A', '__________.'],
  ['B', '⚠ **Not in the summary. Where?**'],
  ['A', '__________.'],
  ['B', '⚠ **Dated today. And if they have a note of it?**'],
]));
out.push(table(['Role card 1 — leaving it out because it cannot be proved', 'Role card 2 — the recollection in the wrong document'], [[
  '⚠ **A wants to leave the absence out, because it is the firm\'s best point and cannot be proved.** ⚠ **B agrees it is not a point and says that is exactly why it goes in** — **a summary that lists what a bundle contains and not what it lacks tells the reader the bundle is complete.** ⚠ **And B gives the four words that answer the blame question in advance.**',
  '⚠ **A wants to put what she remembers of the call into the summary.** ⚠ **B refuses: a summary is about what the bundle says and does not say.** ⚠ **B\'s point: a recollection is evidence of another kind and needs its own dated document with a name on it** — **written today, which is eight months late and is the earliest it can now be written.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the absence as one sentence, with the four words. ⚠ Then say where the recollection goes, and why being wrong beats being silent.'));
out.push(PHRASE_CARD(['on either side?', 'the absence is ours', 'not in the summary', 'dated today', 'wrong, not silent']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things at your work that are in no document.'));
out.push(table(['What happened, and when', 'Is it on either side?', 'The absence sentence', 'Where the recollection goes'], [['', '', '', ''], ['', '', '', '']], [2.4, 1.6, 3, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _On _______ I _______. It is in no document on _______. The sentence is: there is no record anywhere of _______, and the absence is _______. What I remember goes in _______, dated _______._'));
out.push(p('**Listener task:** count how many of the absences belonged to the writer\'s own side. ⚠ Then ask how many had ever been written down as absences, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four absence sentences on the board — find the one that says nothing (*there may be other material*) and the one that puts a recollection in a summary. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two documents, and answer the questions.'));
out.push(box(null, [
  '**ONE: THE SENTENCE IN THE SUMMARY. Page 1, last paragraph.**',
  '⚠ **There is no record anywhere, on either side, of the telephone call of 14 May, in which on our account Mr Hamdan accepted that the pallet condition predated the agreement. The absence is ours: we made the call and did not note it. A separate note of what is recollected is at the end of this file, dated 19 January.**',
  '**TWO: THE SEPARATE NOTE. 19 January. N. Mansour.**',
  '⚠ **NOTE OF A TELEPHONE CALL OF 14 MAY, WRITTEN ON 19 JANUARY.**',
  '⚠ **This note is written eight months after the call and after a claim has been made. It is the earliest it can now be written and I am recording that at the top rather than at the bottom.**',
  '⚠ **What I am sure of.** **That I telephoned Mr Hamdan on the afternoon of 14 May about the April consignment, from the office, and that the call lasted a few minutes. The call is in the office telephone log at 15.12 and that is the only document of any kind that relates to it. [p. 2 of this note]**',
  '⚠ **What I believe and cannot be sure of.** **That he said the narrow pallets had been a problem before the agreement and that he had seen them at the Beirut bay in the spring.** ⚠ **I am not sure whether he said *before the agreement* or *before the summer*, and the difference matters, and I will not pretend to a certainty I do not have.**',
  '⚠ **What I am sure I did not say.** **I did not tell him the condition had been identified in our own review in March. I had not read the review on 14 May.**',
  '⚠ **Why there is no note.** **The call produced nothing I had to act on, so there was nowhere for it to go.** ⚠ **That is the same reason the counter does not record the plater\'s shortfalls and the same reason nobody wrote down Ms Tannous\'s September call** — **and it is a fault in how this office works and not in what I did on 14 May.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the summary paragraph do in three sentences?'));
out.push(item('2', 'How is the separate note divided, and what is in the second part?'));
out.push(item('3', 'What reason does she give for there being no note, and what does she say about it?'));
out.push(box('Writer\'s box', [
  '**The absence, in two documents — the summary paragraph in three sentences, and the note in four parts.**',
  '⚠ **The summary paragraph: the absence · whose it is · and where the recollection is.** ⚠ **Three sentences, about fifty words, on the first page** — **and the third sentence is what stops the first two reading as an excuse, because it points at a document.**',
  '⚠ **Date the note and date the writing, at the top.** ⚠ *This note is written eight months after the call and after a claim has been made. It is the earliest it can now be written and I am recording that at the top rather than at the bottom.* **A reader will establish both dates in ten seconds; a writer who makes them look for it has lost the only thing the note had.**',
  '⚠ **Divide it into *sure of · believe and cannot be sure of · sure I did not say*.** ⚠ **The third is the one nobody writes and it is the most useful** — **because a recollection with a boundary round it is credible and one without a boundary expands to whatever is convenient.**',
  '⚠ **Name the one document that does exist, however small.** ⚠ **A telephone log entry at 15.12** — **it proves the call happened and nothing about what was said, and saying exactly that is worth more than the log is.**',
  '⚠ **Refuse the convenient certainty in terms.** ⚠ *I am not sure whether he said "before the agreement" or "before the summer", and the difference matters, and I will not pretend to a certainty I do not have.* **It is the sentence that makes the rest of the note usable.**',
  '⚠ **And say why there was no note, as a mechanism.** ⚠ **The call produced nothing to act on, so there was nowhere for it to go** — **the same fault as the plater\'s shortfalls and the September call.** **A fault in how an office works, named three times across a book, is a finding; the same fault called carelessness is an apology.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the absence paragraph and the separate note for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**ONE: THE SENTENCE IN THE SUMMARY.**   ⚠ **There is no record anywhere, on either side, of ______________, in which on our account ______________. The absence is ______________: ______________. A separate note of what is recollected is ______________, dated ______________.**   **TWO: THE SEPARATE NOTE. ______________. ______________.**   ⚠ **NOTE OF ______________, WRITTEN ON ______________.**   ⚠ **This note is written ______________ after ______________. It is the earliest it can now be written and I am recording that at the top rather than at the bottom.**   ⚠ **What I am sure of. ______________. ______________ is the only document of any kind that relates to it.**   ⚠ **What I believe and cannot be sure of. ______________.** ⚠ **I am not sure whether ______________, and the difference matters, and I will not pretend to a certainty I do not have.**   ⚠ **What I am sure I did not say. ______________.**   ⚠ **Why there is no note. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences in the summary: absence, whose, where the note is', ''],
  ['Both dates at the top of the note', ''],
  ['The three parts, including *what I am sure I did not say*', ''],
  ['The one document that does exist, and what it does not prove', ''],
  ['Why there was no note, as a mechanism', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *what I believe and cannot be sure of*. ⚠ The class says whether the uncertainty is named precisely or gestured at.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something important at your work that is in no document (**200 to 240 words**). Say what it was, who knows, what the nearest document is, why nothing was written, and what you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _whose is the absence?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the absence the writer\'s own side\'s? Usually all three — ⚠ **and in every case the reason is the same one: the thing produced nothing to act on, so there was nowhere for it to go.**'));
out.push(box('Homework', ['Write your final text. Then write the dated note for one undocumented thing at your work, with all three parts (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.5 =======================
out.push(pb());
out.push(h2('17.5  The summary read without the original'));
out.push(p('**Function:** writing so that nothing load-bearing is only in the bundle   ·   **Grammar:** _the figure is X [p. 61] · go to page X for the wording_   ·   **Pronunciation:** a page reference read as part of the sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a summary you have read without the document behind it. ⚠ Then say what you had to take on trust.'));
out.push(p('**b**  Which can be read without the original? _the gate sheets support our position · the gate sheets for the eleven consignments each carry a counted figure signed by name; nine of the eleven match the order exactly [pp. 101–144]_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia find when she reads the summary without the bundle?   **A** nothing   **B** four sentences that cannot be used without going to the bundle, and one she had believed meant the opposite   **C** an arithmetic error'));
out.push(p('**b**  Listen again. **1** What is the test she applies? **2** What is the sentence she had read the wrong way, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  "I have read it with the bundle shut"', [
  ['Nadia', 'I have read your summary with the bundle shut, as you asked. Four sentences do not work.'],
  ['Nour', 'Which?'],
  ['Nadia', '⚠ **The ones that refer to a document instead of saying what it says.** ⚠ *The gate sheets support our position.* **I cannot use that. Supported how?**'],
  ['Nour', 'Each one carries a counted figure signed by name, and nine of the eleven match the order exactly.'],
  ['Nadia', '⚠ **Then write that, and put the pages after it.** ⚠ **The test is: could I act on this sentence if the bundle were in a box in Homs?**'],
  ['Nour', 'And the one I had wrong?'],
  ['Nadia', '⚠ *Our credit note of 10 October, 58,000, is in the bundle at page 95.* ⚠ **I read that as a part payment of the claim.**'],
  ['Nour', 'It is the marking credit. It has nothing to do with the pallets.'],
  ['Nadia', '⚠ **I know that now because I asked you.** ⚠ **A reader who does not ask carries that mistake into a meeting, and 58,000 against 2.1 million looks exactly like a firm that has started paying.**'],
  ['Nour', 'It is in the nineteen, with a line.'],
  ['Nadia', '⚠ **Then the line is in the wrong place.** ⚠ **A document that a reader will mis-read belongs on the first page, in a sentence that says what it is NOT** — **and the fact that it is of no consequence is exactly why nobody will check it.**'],
  ['Nour', 'So consequence and misreadability are different questions.'],
  ['Nadia', '⚠ **Completely different, and the second one has no section in your summary.** ⚠ **Proportion tells you what to put a paragraph on. Misreadability tells you what to put a sentence on whether it deserves one or not.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The summary read without the original**',
  table(['', 'Not', 'Write'], [
    ['**the reference**', '⚠ *the gate sheets support our position*', '⚠ **what they say, and then the pages** — *each carries a counted figure signed by name; nine of eleven match the order exactly [pp. 101–144]*'],
    ['⚠ **the test**', '**is it accurate?**', '⚠ **could a reader act on this sentence if the bundle were in a box in another city?**'],
    ['⚠ **the mis-readable document**', '**a line in the irrelevant list**', '⚠ **a sentence on the first page saying what it is NOT** — **58,000 is a marking credit and not a part payment**'],
    ['⚠ **the two questions**', '**treated as one**', '⚠ **proportion says what gets a paragraph; misreadability says what gets a sentence whether it deserves one or not**'],
  ], [1.7, 3.3, 4]),
  '⚠ **A sentence that refers to a document instead of saying what it says is a sentence nobody can use.** ⚠ *The gate sheets support our position* **passes every accuracy check and cannot be acted on, repeated, or argued with.**',
  '⚠ **The test is physical:** ⚠ **could a reader act on this sentence if the bundle were in a box in another city?** **It is answerable sentence by sentence**, **and it is the only test that finds this fault, because the fault is invisible to anybody holding the bundle.**',
  '⚠ **Have somebody read it with the original shut.** ⚠ **A writer cannot perform this test on their own work**, **because they know what the referred-to document says** — **and the four sentences that fail will all look fine to them.**',
  '⚠ **Misreadability is a separate question from consequence and most summaries have no section for it.** ⚠ **A credit note of 58,000 against a claim of 2.1 million looks like a part payment** — **and the fact that it is of no consequence is exactly why nobody will check it.**',
  '⚠ **So: a document a reader will mis-read belongs on the first page, in a sentence that says what it is not.** ⚠ **Proportion decides paragraphs. Misreadability decides sentences, whether the document deserves one or not** — **and that is a rule the shape of the summary has to make room for.**',
  '**Practise:** Give a summary of yours to somebody with the original shut. Collect the sentences they cannot use, and the one they read the wrong way.',
  '**Useful phrases:**  with the bundle shut  ·  supported how?  ·  in a box in another city  ·  a sentence saying what it is not  ·  proportion and misreadability',
  '**Pronunciation – a page reference inside a sentence.** 🔊 **Track 17.10** Listen twice. ⚠ **The first runs the reference into the sentence without a pause.** ⚠ **The second pauses before it, as an aside.** **Inside the sentence, the reference is part of the claim; as an aside, it sounds optional, and a reader treats it as decoration.** Say it four times without the pause.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence; B has the original shut.'));
out.push(dlg(null, [
  ['A', 'The __________ support our position.'],
  ['B', '⚠ **Supported how? I have not got the document.**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write that and put the page after it. Next.**'],
  ['A', 'Our __________ of __________ is in the bundle at page __________.'],
  ['B', '⚠ **I read that as __________.**'],
  ['A', '⚠ **It is not. It is __________.**'],
  ['B', '⚠ **Then where does the sentence saying what it is not belong?**'],
  ['A', '__________.'],
  ['B', '⚠ **And is that about consequence or about misreading?**'],
]));
out.push(table(['Role card 1 — the sentence that refers', 'Role card 2 — the mis-read document'], [[
  '⚠ **A has written that a set of documents supports the firm\'s position, which is true.** ⚠ **B, with the bundle shut, asks *supported how* and cannot act on the answer *they just do*.** ⚠ **B\'s point: a sentence that refers to a document instead of saying what it says passes every accuracy check and cannot be used, repeated or argued with** — **and the writer cannot see it, because the writer knows what the document says.**',
  '⚠ **B reads a credit note of 58,000 as a part payment of a 2.1 million claim, which is a reasonable reading.** ⚠ **A explains that it is a marking credit and unrelated.** ⚠ **B\'s point: the sentence saying what it is NOT belongs on the first page, and the fact that the document is of no consequence is precisely why nobody will check it** — **which makes misreadability a different question from proportion.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the test in one sentence. ⚠ Then write the difference between proportion and misreadability, and say which decides paragraphs and which decides sentences.'));
out.push(PHRASE_CARD(['with the bundle shut', 'supported how?', 'in a box in another city', 'what it is not', 'proportion or misreading?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Give a summary of yours to a partner with the original shut. Record what fails.'));
out.push(table(['The sentence', 'Why it cannot be used', 'The rewrite, with its reference', 'Mis-read as?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.2, 2, 3, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My partner could not use _______ sentences. The worst was _______, because _______. The rewrite is _______. And _______ was read as _______, which is a misreading and not a question of consequence._'));
out.push(p('**Listener task:** count how many sentences failed across the room. ⚠ Then ask how many of the writers had believed their summaries stood alone, and expect all of them.'));
out.push(p('**Board clinic:** your teacher writes four sentences on the board — find the one that refers instead of saying, and the one a reader will mis-read. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SUMMARY, THIRD DRAFT: WHAT THE BUNDLE-SHUT READING FOUND. 20 January. N. Mansour. Working page.**',
  '⚠ **Nadia read the summary on the 19th with the bundle shut. Four sentences failed and one was read the opposite way. Twenty minutes.**',
  table(['Was', 'Is', 'Why'], [
    ['⚠ *the gate sheets support our position [pp. 101–144]*', '**each gate sheet carries a counted figure signed by name; nine of the eleven match the order exactly [pp. 101–144]**', '⚠ **a reference is not a statement** — **and she could not act on *support*, which is a conclusion with no content**'],
    ['⚠ *the root-cause paper is the key document [p. 61]*', '**the root-cause paper states that the condition has been present since April 2023; it is our own document and it decides the claim [p. 61]**', '⚠ **_key document_ told her it mattered and not what it said**'],
    ['⚠ *clause 12 is in our favour [p. 13]*', '**clause 12 deems a consignment accepted if not rejected within fourteen days; nine of the eleven consignments are outside the period [p. 13]**', '⚠ **_in our favour_ is a verdict** — **and she asked how many consignments, which is the only thing that makes it a favour**'],
    ['⚠ *the correspondence on the cartons is immaterial [pp. 70–80]*', '**eleven pages on the carton colour, which is a preference and not a criterion, and no consignment in the claim turns on it [pp. 70–80]**', '⚠ **_immaterial_ is a word she had to take on trust**'],
  ], [2.8, 3.6, 3.2]),
  '⚠ **And the one read the opposite way.** **Our credit note of 10 October, 58,000, was a line in the nineteen.** ⚠ **She read it as a part payment of the claim, which is the natural reading of 58,000 against 2.1 million.** **It is now a sentence on page 1:** ⚠ *the credit note of 10 October, 58,000, relates to the September marking rejection and not to the pallets; nothing has been paid on this claim.*',
  '⚠ **The finding, and it changes the shape of the summary.** ⚠ **Misreadability is not the same question as consequence, and my summary had no place for it.** **Proportion decides what gets a paragraph. Misreadability decides what gets a sentence, whether the document deserves one or not** — **and the two can point in opposite directions, as they do here.**',
  '⚠ **One thing I could not have found alone.** **All four failed sentences looked right to me**, **because I know what the documents say** — ⚠ **and the fifth was worse, because I had put it where nobody would check it precisely on the ground that it did not matter.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What do the four failed sentences have in common?'));
out.push(item('2', 'What is the finding about misreadability, and how does it change the summary\'s shape?'));
out.push(item('3', 'What does the writer say she could not have found alone?'));
out.push(box('Writer\'s box', [
  '**The bundle-shut page — five properties:** ⚠ **who read it, when, and how long it took** → **a *was · is · why* table** → ⚠ **the sentence read the opposite way** → ⚠ **the finding about shape** → **and what you could not have found alone.**',
  '⚠ **Name the reader and the duration.** ⚠ **Twenty minutes** — **and it is the whole argument for the exercise, because twenty minutes of somebody else\'s time against a summary that four readers will act on is not a cost anybody has to think about.**',
  '⚠ **In the *why* column, name the fault and not the wording.** ⚠ *A reference is not a statement* · *in our favour is a verdict* · *immaterial is a word she had to take on trust.* **Three named faults, reusable next time** — **where *this was vague* is a judgement and teaches nothing.**',
  '⚠ **Give the opposite-way reading its own paragraph, with the natural reading spelled out.** ⚠ **58,000 against 2.1 million looks like a part payment** — **and saying why the misreading is natural is what stops the next reader making it.**',
  '⚠ **Record the finding about shape, because it is the durable one.** ⚠ **Proportion decides paragraphs; misreadability decides sentences, whether the document deserves one or not** — **and the two can point in opposite directions, which means a summary needs a place for the second question.**',
  '⚠ **And say what you could not have found alone, in terms.** ⚠ **All four looked right to the writer because she knows what the documents say** — **and the fifth was in the one place nobody would check, on the ground that it did not matter.** **That is the strongest argument in the unit for giving the draft to somebody else.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the bundle-shut page for a summary of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, ______________ DRAFT: WHAT THE ______________-SHUT READING FOUND. ______________. ______________.**   ⚠ **______________ read it on ______________ with the original shut. ______________ sentences failed and ______________ was read the opposite way. ______________.**   **Was** | **Is** | **Why**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ **And the one read the opposite way. ______________.** ⚠ **They read it as ______________, which is the natural reading.** **It is now a sentence on page 1: ______________.**   ⚠ **The finding, and it changes the shape. ______________.**   ⚠ **One thing I could not have found alone. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The reader, the date and the duration', ''],
  ['A named fault in every *why*, not a judgement', ''],
  ['The opposite-way reading, with the natural reading spelled out', ''],
  ['The finding about shape', ''],
  ['What the writer could not have found alone', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *why* column. ⚠ The class says of each whether it names a fault that could be looked for next time.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a summary you have read without the document behind it (**200 to 240 words**). Say what you had to take on trust, what you could not use, whether you asked, and what the writer could have done in a clause.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could you act on this with the original shut?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the reader ask? Usually one of three — ⚠ **and in the other two they acted on a sentence they could not use, or did not act at all, and the writer never found out which.**'));
out.push(box('Homework', ['Write your final text. Then give a summary of yours to somebody with the original shut, and write down the sentences they cannot use (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.6 =======================
out.push(pb());
out.push(h2('17.6  Summarising a case you disagree with'));
out.push(p('**Function:** summarising without arguing   ·   **Grammar:** _the claim is that X; the document relied on is Y_   ·   **Pronunciation:** somebody else\'s claim read without resistance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a complaint somebody has made about your work. ⚠ Then state it as they would, in one sentence, without the answer attached.'));
out.push(p('**b**  Which is a summary? _they allege, without any evidence, that we knew of the condition · the claim is that the condition was known from April 2023, and the document relied on is our own root-cause paper_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the three words Nour has used?   **A** they are inaccurate   **B** _allege_, _assert_ and _purport_ are verdicts, and a summary of the other side\'s case cannot contain the answer to it   **C** they are too formal'));
out.push(p('**b**  Listen again. **1** What is the rule about where the answers go? **2** Why does he say the summary should be readable by the other side without complaint?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  "Summarise it as they would recognise it"', [
  ['Nour', 'Their case, in four lines: they allege that the condition was known to us, they assert that eleven consignments were affected, and they purport to rely on our own root-cause paper.'],
  ['Mr Sayegh', '⚠ **Three verdicts in one sentence.** ⚠ *Allege*, *assert* and *purport* all mean *and they are wrong*.**'],
  ['Nour', 'They are wrong about the eleven.'],
  ['Mr Sayegh', '⚠ **Then that goes in our answer, which is a different document.** ⚠ **A summary of the other side\'s case that contains the answer to it is not a summary, it is an argument with gaps in it** — **and the arbitrator will read it as one.**'],
  ['Nour', 'So I write *the claim is*.'],
  ['Mr Sayegh', '⚠ **_The claim is that the condition was known from April 2023. The document relied on is our own root-cause paper of March._** ⚠ **Two sentences, no verdict, and the second one is the one that matters to us.**'],
  ['Nour', 'And where do the answers go?'],
  ['Mr Sayegh', '⚠ **In the answer, numbered against the claim.** ⚠ **The summary tells Mr Ayoub what is being said. The answer tells him what we say about it, and he needs the first one first** — **because a man who reads our answer before their claim never knows what the claim was.**'],
  ['Nour', 'What is the test?'],
  ['Mr Sayegh', '⚠ **Could Mr Hamdan read your summary of his case without complaining?** ⚠ **If he could, it is a summary.** **If he would say *that is not what we are saying*, it is our answer with their name on it.**'],
  ['Nour', 'That is the recognition test from the Homs papers.'],
  ['Mr Sayegh', '⚠ **It is the same test and it is harder here, because in the Homs papers you wanted Bassel to recognise himself.** ⚠ **Here you do not want Mr Hamdan to recognise anything** — **and the test does not care what you want.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Summarising a case you disagree with**',
  table(['', 'Not', 'Write'], [
    ['**the verb**', '⚠ *they allege · they assert · they purport to rely on* — **three verdicts**', '⚠ *the claim is that · the document relied on is*'],
    ['⚠ **the answer**', '**woven in**', '⚠ **a separate document, numbered against the claim** — **a summary containing its own answer is an argument with gaps in it**'],
    ['⚠ **the order**', '**the answer first, because it is ours**', '⚠ **the claim first** — **a reader who meets the answer first never learns what the claim was**'],
    ['⚠ **the test**', '**is it fair?**', '⚠ **could the other side read it without complaining?** — **and the test does not care that you would rather they did not recognise it**'],
  ], [1.6, 3.4, 4]),
  '⚠ **_Allege_, _assert_ and _purport_ all mean *and they are wrong*.** ⚠ **Three of them in one sentence is not emphasis, it is a summary that has already answered the thing it was summarising** — **and a reader can see the answer through it.**',
  '⚠ **Write *the claim is* and *the document relied on is*.** ⚠ **Two forms, no verdicts, and the second is usually the sentence that matters most to your own side** — **because what they rely on is the thing you have to deal with.**',
  '⚠ **Keep the answers in the answer, numbered against the claim.** ⚠ **A summary that contains its own answer is an argument with gaps in it**, **and the gaps are where the claim used to be.**',
  '⚠ **Claim first, answer second, always.** ⚠ **A reader who meets your answer before their claim never learns what the claim was** — **and will reconstruct it from your answer, which is the one version nobody should be working from.**',
  '⚠ **The test is the recognition test, and it is harder here.** ⚠ **In a steelman you want the holder to recognise themselves; here you would rather they did not** — **and the test does not care what you want.** **Could they read it without complaining?**',
  '**Practise:** Take a complaint made about your work. Summarise it as its maker would recognise it, in two sentences, with no verdict and no answer.',
  '**Useful phrases:**  three verdicts in one sentence  ·  the claim is that  ·  the document relied on is  ·  claim first, answer second  ·  without complaining',
  '**Pronunciation – a claim read without resistance.** 🔊 **Track 17.12** Listen twice. ⚠ **The first says *the claim is that the condition was known from April 2023* flatly.** ⚠ **The second leans on *claim*.** **Flat, it reports; leaned on, *claim* becomes a verdict all by itself, which is how the three words get back in after they have been deleted.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A summarises a claim; B removes the verdicts.'));
out.push(dlg(null, [
  ['A', 'They allege that __________ and assert that __________.'],
  ['B', '⚠ **How many verdicts in that sentence?**'],
  ['A', '__________.'],
  ['B', '⚠ **Write it with *the claim is*.**'],
  ['A', '__________.'],
  ['B', '⚠ **And what do they rely on?**'],
  ['A', '__________.'],
  ['B', '⚠ **Where does the answer go?**'],
  ['A', '__________.'],
  ['B', '⚠ **Could they read your summary without complaining?**'],
]));
out.push(table(['Role card 1 — the three verdict verbs', 'Role card 2 — the answer woven in'], [[
  '⚠ **A uses *allege*, *assert* and *purport* and regards them as neutral legal vocabulary.** ⚠ **B asks what each one means when read by the person it describes.** ⚠ **B\'s point: all three mean *and they are wrong*, so three in one sentence is a summary that has answered the thing it was summarising** — **and the arbitrator will read the answer through it.**',
  '⚠ **A has woven the firm\'s answers into the summary, because they are short and obvious.** ⚠ **B asks what Mr Ayoub now knows about the claim.** ⚠ **B\'s point: a summary containing its own answer is an argument with gaps in it, and the gaps are where the claim used to be** — **so the reader reconstructs the claim from the answer, which is the one version nobody should work from.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the claim in two sentences with no verdict in either. ⚠ Then say where the answer goes, and what the test is.'));
out.push(PHRASE_CARD(['three verdicts', 'the claim is that', 'the document relied on is', 'claim first', 'without complaining']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** complaints made about your work. Summarise each.'));
out.push(table(['The complaint, as you would put it', 'The claim, in their terms', 'What they rely on', 'Could they read it without complaint?'], [['', '', '', ''], ['', '', '', '']], [2.4, 2.8, 2.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The complaint is _______. As I first wrote it, it had _______ verdicts in it. The claim is that _______. The document relied on is _______. They _______ read it without complaining._'));
out.push(p('**Listener task:** count how many first versions contained a verdict verb. ⚠ Then ask how many contained the answer as well, and expect most of them to have contained both.'));
out.push(p('**Board clinic:** your teacher writes four summaries on the board — find the verdict verbs and the woven-in answer. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two pages, and answer the questions.'));
out.push(box(null, [
  '**ONE: THEIR CASE, SUMMARISED. 21 January. N. Mansour. One page. No answers on this page.**',
  '⚠ **The claim is that eleven consignments delivered between April and September were short-measured by about 1,180 cartons in total, because pallets 50 mm narrow were used, and that the condition was known to Sham Trading throughout. 2.1 million, with interest. [pp. 1–4]**',
  '⚠ **The documents relied on are three.** **Our own root-cause paper of March, for the date on which the condition was identified [p. 61]. The eleven gate sheets, for the counted figures [pp. 101–144]. And Mr Attar\'s audit note of 2024, for the proposition that the gate sheet is the primary record [p. 177].**',
  '⚠ **The point they put highest is not the pallets.** **It is paragraph 14: that we disclosed the condition to Ms Tannous in April, whose agreed terms of 28 April ran twelve months from 1 May, and said nothing to them.** ⚠ **Their words: *the Respondent elected which of its customers to inform.* [p. 3]**',
  '⚠ **What they do not claim.** **They do not claim that the pallets were used deliberately. They do not claim any loss beyond the cartons and interest. And they do not rely on clause 11 at all, although it is in the bundle.** ⚠ **The third of those is the most useful line on this page.**',
  '**TWO: OUR ANSWER, NUMBERED AGAINST THE CLAIM. One page. 21 January.**',
  '⚠ **To the eleven consignments:** **nine of the eleven are outside the fourteen days of clause 12 and are deemed accepted. Two are inside it. [p. 13]**',
  '⚠ **To paragraph 14:** ⚠ **we have no answer to this and I am recording that rather than drafting round it.** **The disclosure to Ms Tannous was made in April, under agreed terms of 28 April running twelve months from 1 May, and nothing was said to Dallal Freres at any time.**',
  '⚠ **To the audit note:** **see the note of 23 January. The sentence they rely on is half a sentence.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How is the first page organised, and what is on it that the claim does not contain?'));
out.push(item('2', 'What does the writer say is the most useful line on the first page, and why might that be?'));
out.push(item('3', 'What does the answer say about paragraph 14?'));
out.push(box('Writer\'s box', [
  '**Their case and your answer, in two pages — and the first carries no answers at all.**',
  '⚠ **Head the page *no answers on this page*.** ⚠ **It is an instruction to yourself more than to the reader**, **and it is the only thing that keeps the answers out** — **because every sentence of a claim you disagree with invites one.**',
  '⚠ **Give the claim, then the documents relied on, then the point they put highest.** ⚠ **The third is the one your own side will get wrong**: **the point they put highest is often not the one you have been worrying about, and here it is not the pallets but the election between customers.** **Quote their own words for it.**',
  '⚠ **Write *what they do not claim*, and list it.** ⚠ **No deliberate use, no loss beyond the cartons, and no reliance on clause 11 at all** — **and the third is the most useful line on the page, because a clause in the bundle that the claimant does not rely on tells you what their advisers think of it.**',
  '⚠ **Number the answer against the claim and keep them on separate pages.** ⚠ **A reader can then put one down and pick the other up**, **which is the physical form of *claim first, answer second*.**',
  '⚠ **And where you have no answer, say so.** ⚠ *We have no answer to this and I am recording that rather than drafting round it.* **Fourteen words** — **and the alternative is a paragraph that looks like an answer, which your own side will then rely on.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write their case and your answer for a complaint at your work (**80 words or more**). Use the frame.'));
out.push(p('**ONE: THEIR CASE, SUMMARISED. ______________. ______________. No answers on this page.**   ⚠ **The claim is that ______________. ______________. [______________]**   ⚠ **The documents relied on are ______________.** **______________.**   ⚠ **The point they put highest is not ______________. It is ______________.** ⚠ **Their words: _______________. [______________]**   ⚠ **What they do not claim. They do not claim ______________. They do not ______________. And they do not rely on ______________ at all, although it is in the ______________.** ⚠ **The ______________ of those is the most useful line on this page.**   **TWO: OUR ANSWER, NUMBERED AGAINST THE CLAIM. ______________.**   ⚠ **To ______________:** **______________.**   ⚠ **To ______________:** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*No answers on this page* at the head, and none on it', ''],
  ['The documents relied on, listed', ''],
  ['The point they put highest, in their own words', ''],
  ['*What they do not claim*, with at least three items', ''],
  ['An answer that says *we have no answer* where that is true', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their claim sentence. ⚠ The class listens for a verdict verb and for an answer smuggled into a subordinate clause.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a complaint made about your work (**200 to 240 words**). Summarise it as its maker would recognise it, say what they rely on, say what they do not claim, and then answer it separately.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could the complainant read this without complaining?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the point the complainant puts highest different from the one the writer had been worrying about? Usually two of three — ⚠ **and that is worth more than any answer, because a firm defending the wrong point has spent its effort on something nobody is pressing.**'));
out.push(box('Homework', ['Write your final text. Then take one complaint about your work and write *what they do not claim*, with three items in it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 17.7 =======================
out.push(pb());
out.push(h2('17.7  Review & Mediate: the sentence everybody quotes'));
out.push(p('**Function:** reading in place a sentence everybody relies on   ·   **Review:** the reader without the original · proportion · quoting fairly · the absence · the bundle-shut test · the neutral summary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the difference between an index and a summary, and what is the test of a summary?',
  '**2** What is the proportion test, and what is the difference between relevance and consequence?',
  '**3** What is the rule about a quotation that improves your side, and what is the test?',
  '**4** What are the three sentences of an absence paragraph, and where does a recollection go?',
  '**5** What does the bundle-shut reading find that the writer cannot, and what is misreadability?',
  '**6** What three verbs are verdicts, and where do the answers go?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar\'s sentence actually say?   **A** what everybody has been quoting   **B** that the gate sheet is the primary record of what left the yard and is not a record of condition   **C** nothing about the gate sheet'));
out.push(p('**b**  Listen again. **1** Who has been quoting the half-sentence, and for how long? **2** What does Mr Attar say about it, and what does he refuse to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  "I wrote the whole sentence"', [
  ['Nour', 'Mr Attar, your audit note of 2024. We quote one sentence of it constantly. _The gate sheet is the primary record._'],
  ['Mr Attar', '⚠ **That is not a sentence I have ever written.**'],
  ['Nour', 'It is on page four of your note.'],
  ['Mr Attar', '⚠ **Read it to me from the note.**'],
  ['Nour', '⚠ *The gate sheet is the primary record of what left the yard, and is not a record of condition.*'],
  ['Mr Attar', '⚠ **Then you have been quoting the first half of my sentence for two years, and the half you have been leaving off is the half I wrote it for.**'],
  ['Nour', 'Dallal Freres are relying on the half we quote.'],
  ['Mr Attar', '⚠ **Of course they are. You gave it to them.** ⚠ **It is in three of your own letters, and it is in the facility paper you sent the bank in June.**'],
  ['Nour', '⚠ **It is in the arbitration bundle at page 177 in the short form, from our own letter of May.**'],
  ['Mr Attar', '⚠ **Then the claimant is quoting your quotation of me, and the arbitrator will read my note, which says the opposite about condition.** ⚠ **That is better for you than it sounds and worse than it should have been.**'],
  ['Nour', 'Will you write to them saying what the sentence says?'],
  ['Mr Attar', '⚠ **No.** ⚠ **The note says what it says and it is in the bundle at page 177 in full as well.** ⚠ **If I write a letter now explaining my own sentence, I have become a witness in a dispute about a company I audit, and that is worth less to you than the note is.**'],
  ['Nour', 'So the remedy is the note itself.'],
  ['Mr Attar', '⚠ **The remedy is that somebody reads it.** ⚠ **In eleven years nobody in your office has read page four.** **You have all read a quotation of it, in each other\'s letters, which is how a half-sentence becomes a thing everybody knows.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the sentence everybody quotes**',
  table(['What happens', 'What is said', 'What it does'], [
    ['**the quotation is offered**', '⚠ *the gate sheet is the primary record*', '⚠ **and the author does not recognise it** — *that is not a sentence I have ever written*'],
    ['⚠ **the author asks for the note**', '⚠ *read it to me from the note*', '⚠ **four words, and they end two years of a half-sentence** — **he does not argue, he asks for the document**'],
    ['⚠ **the whole sentence**', '⚠ *…of what left the yard, and is not a record of condition*', '⚠ **the half left off is the half he wrote it for** — **and it is the half this arbitration is about**'],
    ['⚠ **how it spread**', '⚠ *it is in three of your own letters and in the facility paper* — **and the claimant is quoting your quotation of me**', '⚠ **a half-sentence repeated inside a company becomes a thing everybody knows**'],
    ['⚠ **the refusal**', '⚠ *if I write a letter explaining my own sentence I have become a witness* — **and that is worth less to you than the note**', '⚠ **the remedy is that somebody reads page four**'],
  ], [1.9, 3.5, 3]),
  '⚠ **A half-sentence repeated inside a company for two years is no longer a quotation.** ⚠ **It is a thing everybody knows** — **and nobody checks a thing everybody knows, which is why it survives longer than any argument could.**',
  '⚠ **The author\'s response is the model and it is four words:** ⚠ *read it to me from the note.* **He does not defend the sentence or dispute the use of it** — **he asks for the document, and the document ends the matter in one reading.**',
  '⚠ **A half-sentence travels by letter.** ⚠ **Three of the firm\'s own letters and a facility paper to the bank** — **and the claimant is now quoting Sham Trading\'s quotation of Mr Attar, which is how a cut reaches an arbitration without anybody ever intending it.**',
  '⚠ **The auditor\'s refusal is the most instructive thing in the exchange.** ⚠ **A letter explaining his own sentence makes him a witness in a dispute about a company he audits** — **and his independence is worth more to the firm than his explanation.** **That is a cost a layman never sees.**',
  '⚠ **And the remedy is not a correction, it is a reading.** ⚠ **The note is in the bundle in full at page 177; the sentence has always said what it says** — **and in eleven years nobody in the office read page four, because they all read a quotation of it in each other\'s letters.**',
  '**Practise:** Find a sentence your work quotes. Go to the original, read it in place, and find out who first shortened it.',
  '**Useful phrases:**  that is not a sentence I have written  ·  read it to me from the note  ·  the half I wrote it for  ·  your quotation of me  ·  nobody read page four',
  '**Pronunciation – a whole sentence, at one weight.** 🔊 **Track 17.14** Listen twice. ⚠ **The first reads *the gate sheet is the primary record of what left the yard, and is not a record of condition* at one weight throughout.** ⚠ **The second drops the second half.** **At one weight it is one sentence; dropped, the second half sounds like a qualification somebody added, which is exactly how it came to be left off.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A quotes; B is the author. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A offers the quotation as the firm uses it and names where it has been used.** ⚠ **When B asks for the note, A reads the whole sentence and hears the difference for the first time.** ⚠ **A then traces where the half-sentence has travelled** — **letters, papers, and a bundle** — **and does not ask B to fix it until the tracing is done.**',
  '⚠ **B does not recognise the sentence and says so in one line, then asks for the document rather than arguing.** ⚠ **B names the half that was left off and says it is the half the sentence was written for.** ⚠ **And B refuses to write an explanatory letter, giving the reason: it would make B a witness, and B\'s independence is worth more than B\'s explanation.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the whole sentence and underline the half that was left off. ⚠ Then write where the half-sentence has travelled, and why the author will not write a letter.'));
out.push(PHRASE_CARD(['not a sentence I have written', 'read it to me', 'the half I wrote it for', 'your quotation of me', 'nobody read page four']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a sentence your firm quotes. Trace it.'));
out.push(table(['The quotation as used', 'The sentence in place', 'Where the short form has travelled', 'Who shortened it first'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.8, 2.4, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the conversation. This is the **fifth** unit of this book, and the unwritten thing is this: ⚠ **the most dangerous sentence in any company is the one everybody quotes and nobody has read in place** — **because a quotation repeated inside an organisation stops being a quotation and becomes a thing everybody knows, and nobody checks a thing everybody knows; so six cycles about summarising two hundred and fourteen pages end at page four of an eleven-year-old note, and the remedy is not a correction or a letter but one person going and reading it.**'));
out.push(p('_The firm quotes _______. In place the sentence reads _______. The half left off is _______. It has travelled to _______, _______ and _______. And it was first shortened in _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 2 **obligation-and-evidence word list**: _a reader who will not read the original · proportion in a summary · the part against us · an absence inside a summary · a page reference · a sentence nobody has read in place_. ⚠ **Thirty items of the seventy-two.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for one where the author argues instead of asking for the document, and one where the firm asks for a letter it should not want. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 2)', 10));
out.push(p('⚠ **This unit is Part 2: sentence insertion, five gaps, six sentences, and one is not needed. It is the third time in the level.** ⚠ **Read the whole paragraph each time and look for what the sentence must connect BACKWARDS to as well as forwards.**'));
out.push(box(null, [
  '**SUMMARISING A LONG FILE — from a trade association\'s guidance to members.**',
  'The commonest fault in a long summary is not inaccuracy. **(1)** ______ A summary that gives each document a paragraph has described a file and answered no question, and a reader who cannot find the question they came with will put it down.',
  'The remedy is to organise by question rather than by document, and then to let the proportions do the work. **(2)** ______ Where it would not, the item gets one line and a page number. The ratio that results is itself a finding: a reader who sees three paragraphs and nineteen lines has been told the shape of the file before reading a word.',
  'Members should resist the temptation to omit the items of no consequence altogether. **(3)** ______ One line each costs half a page and converts a very large claim about a file into something anybody can check in a morning.',
  'Two further practices repay the time they take. The first is to have somebody read the summary with the original closed. **(4)** ______ The second is to state, in the summary itself, what the file does not contain — and, where the gap is the member\'s own, to say so in four words.',
  'Finally, a warning about quotation. A quotation that improves the member\'s own position is very often a quotation that has been stopped early, and the test is simple. **(5)** ______ Members will find that this test bites hardest on their own documents, because those are the ones a reader on the other side will check first.',
]));
out.push(p('**A**  Ask of each item: if it did not exist, would the answer change? If it would, the item gets a paragraph.'));
out.push(p('**B**  Would the other side quote the sentence the same way? If they would quote it longer, it has been cut.'));
out.push(p('**C**  It is that an accurate summary can be organised in a way that nobody can act on.'));
out.push(p('**D**  That reader will find the sentences that refer to a document instead of saying what it says, which the writer cannot see at all.'));
out.push(p('**E**  A file of over two hundred pages will usually contain between two and four documents that decide the matter.'));
out.push(p('**F**  A document left out entirely has been judged in private; a document on a one-line list has been judged where somebody can disagree.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the third Part 1 of Book 2; the even units take Part 2.**',
  '⚠ **For a message about a summary, the three points are: the two counts · the one thing the file does not contain · and what you want the reader to do.** ⚠ **Not the subject of the dispute** — **your manager knows it.**',
  '⚠ **Lead on the counts and make them add up.** ⚠ *Three of the twenty-two documents decide it; nineteen are of no consequence.* **Fourteen words, and they are the shape of the file.**',
  '⚠ **The absence is the content point candidates leave out and it is the one with the marks on it.** ⚠ *There is no record of the call of 14 May, and the absence is ours.* **Sixteen words**, **and *the absence is ours* is four of them.**',
  '⚠ **Part 2 tip, for the insertion above.** ⚠ **Four of the five gaps are solved by the sentence AFTER the gap and not the one before** — **gap 2 is followed by *where it would not*, which requires a conditional sentence before it; gap 5 is followed by *members will find that this test*, which requires a test.** ⚠ **Read the sentence after the gap first.**',
  '⚠ **And the sentence not needed is E, about the number of decisive documents.** **It is true, it is relevant, and nothing in the paragraph it would sit in refers to counting documents before or after it** — ⚠ **which is the standard Part 2 distractor: topically correct and structurally unattached.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Write a message to your manager about a summary you have prepared (**40 to 50 words**). Include **the two counts** · **what the file does not contain** · and **what you want them to do**.'));
out.push(p('**To:** ______________   **From:** ______________   **Date:** ______________   **Subject:** ______________   ⚠ **______________ of the ______________ documents decide it; ______________ are of no consequence and are listed with a line each.**   ⚠ **There is no record anywhere of ______________, and the absence is ours.**   ⚠ **I am asking you to ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two counts that add up', ''],
  ['The absence, with *the absence is ours* if it is', ''],
  ['An ask, stated as an ask', ''],
  ['No summary of the dispute itself', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the summary of a long document at your work (**200 to 240 words**). Organise it by question, give the two counts, quote one thing in full, state what the document does not contain, and put a reference in every load-bearing sentence.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then find one sentence your work quotes, read it in place in the original, and write out both versions (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  This summary is written to ___ acted on without the bundle.   a) being   b) be   c) been',
  '2  Three ___ the twenty-two documents decide it.   a) from   b) in   c) of',
  '3  If this document did not exist, ___ the answer change?   a) will   b) would   c) does',
  '4  There is no record anywhere, ___ either side, of the call.   a) at   b) in   c) on',
  '5  The absence ___ ours.   a) is   b) are   c) being',
  '6  The document relied ___ is our own root-cause paper.   a) at   b) on   c) for',
  '7  They do not rely on clause 11 ___, although it is in the bundle.   a) at all   b) in all   c) of all',
  '8  Nobody in this office ___ page four.   a) has read   b) have read   c) is reading',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 17.15** Listen to the conversation with the auditor. Complete the note.   The quotation as the firm uses it: ______   The sentence in place: ______   The half left off, and whose it is: ______   Where the short form has travelled: ______   Why he will not write a letter: ______   What the remedy is: ______'));
out.push(p('**C  Reading.** Read the summary page at 17.1 again. Say how it is organised, how many documents decide the claim, and why the most important line on the page is about something that is not in the bundle.'));
out.push(p('**D  Writing.** Take a long document at your work. Write its two counts, one question-and-answer line with a page reference, and one sentence saying what the document does not contain (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['Nour', 'Mr Attar, your audit note of 2024. We quote one sentence of it constantly. _The gate sheet is the primary record._'],
  ['Mr Attar', '⚠ **That is not a sentence I have ever written. Read it to me from the note.**'],
  ['Nour', '⚠ *The gate sheet is the primary record of what left the yard, and is not a record of condition.*'],
  ['Mr Attar', '⚠ **Then you have been quoting the first half of my sentence for two years, and the half you have been leaving off is the half I wrote it for.**'],
  ['Nour', 'Dallal Freres are relying on the half we quote.'],
  ['Mr Attar', '⚠ **Of course they are. You gave it to them. It is in three of your own letters and in the facility paper you sent the bank in June.**'],
  ['Nour', 'Will you write to them saying what the sentence says?'],
  ['Mr Attar', '⚠ **No. The note says what it says and it is in the bundle at page 177 in full.** ⚠ **If I write a letter now explaining my own sentence, I have become a witness in a dispute about a company I audit, and that is worth less to you than the note is.**'],
  ['Nour', 'So the remedy is the note itself.'],
  ['Mr Attar', '⚠ **The remedy is that somebody reads it. In eleven years nobody in your office has read page four** — **you have all read a quotation of it, in each other\'s letters.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**17.1** write a summary organised by question, for a reader who will not have the original',
  '**17.2** apply the proportion test, and list what does not matter with one line and a page number',
  '**17.3** quote a sentence in full and name the half against you before the other side does',
  '**17.4** put an absence in a summary, say whose it is, and write the recollection as a dated note',
  '**17.5** have a summary read with the original shut, and find what refers instead of saying',
  '**17.6** summarise a case you disagree with, with no verdict verbs and no answers in it',
  '**17.7** find the sentence everybody quotes, read it in place, and trace where the short form went',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
module.exports = out;
