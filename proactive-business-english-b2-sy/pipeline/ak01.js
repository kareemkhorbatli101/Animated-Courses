// Proactive Business English B2 · Syria Edition · Book 1 · Unit 1 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 1  What Is Already Decided, and What Is Not'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **What is new at B2, and it changes how you mark.** At A2 a wrong word was a mistake. At B1 a wrong word was often a **claim** — *I handle* and *I am responsible for* say two different things about a person. ⚠ **At B2 a wrong word is usually a wrong *position*: it puts the writer at the wrong distance from the reader.** *Please correct me if I am wrong* is not a grammar fault and not a false claim; ⚠ **it is a writer standing further back than the work deserves**, and the whole of 1.5 is about closing that distance. **Mark the position, not only the form and the claim.**',
  '⚠ **The unit\'s subject is writing upward against something the reader wants**, and it is the first time in this course that a learner has been asked to do it. ⚠ **Expect the room to divide**, and not along the lines of language ability: some learners will write 1.4 and 1.5 fluently and refuse 1.3, because correcting a senior reader\'s facts is forbidden in their workplace in a way that disagreeing with his judgement is not. **The role cards carry it where a learner will not use their own job**, and that is what they are for.',
  '⚠ **The word counts are the course\'s, not the examination\'s**, and at B2 the gap is wide. Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**; cycle 7\'s exam task asks for **40 to 50**, because B2 Business Vantage Writing Part 1 does, and it carries **10 marks against Part 2\'s 20**. ⚠ **Say so the first time the class meets it** — a learner who has just written 240 words and is then given 45 assumes a misprint.',
  '⚠ **Peer review is band 4 in this book, and the band is one instruction: _copy the line you are marking._** **Name the criterion, copy the line, say what you found.** ⚠ **A reviewer who summarises instead of copying has not read the line**, and almost every unfair review in an office is a review of a summary somebody made in their head. **Mark the copying as strictly as you mark the finding.**',
  '⚠ **The spine.** Mr Rafiq Dallal, procurement director of the Beirut company that buys from Ms Tannous, has offered a direct three-year contract at four times the volume. **Mr Ayoub wants it; Nour is recommending against it.** ⚠ **Nothing in this unit is a report of a decision** — it is the paper that goes in before one, and the unit is the paper being built. **The decision is not taken in Book 1 until Unit 12.**',
], C.grey, C.navy));

// ===================== 1.1 =====================
out.push(h2('1.1  The first four lines'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the answer is almost always *nothing*. Expect four lines of greeting, reference and history. ⚠ **Do not let the class answer this in general terms — make somebody read four real lines aloud**, because the generalisation is comfortable and the real four lines are not.'));
out.push(p('**b**  The **second** can be acted on: it gives a figure (three years, four times the volume), a request (a decision) and a date (the 26th). The first gives the arrival of a document, which the reader already knows.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 In **paragraph three** — and the class should be told that this is not a coincidence: *the figure is always in paragraph three*, because the writer has been taught to set the scene first.  2 ⚠ **A reader who has already decided to read the whole thing** — which is a reader who does not exist for most pages, and certainly not for a man who reads standing up.'));
out.push(p('⚠ **The paradox at the end of the track is the hard part and worth two minutes of class time.** **A page that can be stopped at line four is more likely to be *finished*.** ⚠ **A reader who has the content in the first three lines relaxes and reads on; a reader three lines in with nothing starts looking for the end.** **Learners resist this because it sounds like a trick. Ask them to think of a page they finished and a page they abandoned, and the pattern holds in the room every time.**'));
out.push(p('**Language box – Practise (samples, two sentences each):**  **1** _We need a second night marker from 1 February. I am asking you to approve one post._  **2** _We cannot supply eleven hundred a month before April. I am recommending we decline the volume and offer six hundred._  **3** _The plater\'s rate went up twelve per cent in March and we have not repriced. Our export margin is four points thinner than the sheet says._  **4** _I have moved the Ghouta run to Mondays and Wednesdays from 1 March. Nothing else about the route changes._  **5** _Nine cartons in the fourth store are scrap. I am writing off eleven thousand and I need your signature this week._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Further to the letter received on 9 January from Mr Rafiq Dallal, procurement director of the company in Beirut to which Ms Tannous supplies —'],
  ['B', 'Stop. I know that a letter came, and from whom, and I knew both before you started.'],
  ['A', 'The figure is in paragraph three.'],
  ['B', 'The figure is always in paragraph three. What line is it on?'],
  ['A', '…Line eleven.'],
  ['B', 'Read me lines one to four with it in.'],
  ['A', 'Mr Dallal offers three years at about four times our export volume. He wants an answer by 26 January. I am recommending against it as it stands, and the paper is attached.'],
  ['B', 'Now I know what has changed and what you want, and I have not lost the history — it is below the line.'],
]));
out.push(p('⚠ **The move to watch for is a learner who *cuts* instead of reordering.** **If the history has gone, the exercise has been failed in the other direction** — and a reader who finds the date of the letter missing will ask for it, and the writer will have saved nothing.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four lines before and after and the line number of the figure. **Typical errors:** _I am writing with reference to_ · a first sentence that names the document rather than the change · a request with no date · and the content fault, which is a writer who has deleted the context instead of moving it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The message', 'Line the figure is on', 'The four lines, rewritten', 'What went below the line'], [
  ['My note on the plater\'s rate', '**9**', 'The plater put his rate up twelve per cent on 1 March. We have not repriced since. I am asking for a decision on the export price list this week, and the figures are attached.', 'when he told us · the March price list · who else we have asked · the four-day quotation we have out'],
  ['The scrap in the fourth store', '**14**', 'Nine cartons in the fourth store are scrap. The write-off is about eleven thousand. I need your signature before the January count closes.', 'how they got wet · who found them · what the store is used for now'],
  ['My reply to the bank', '**6**', 'We can meet the February instalment. We cannot meet February and the new board order in the same month. I am asking for two weeks on the instalment, not a reduction.', 'the committee\'s letter of the 4th · last year\'s figures · who has seen this'],
  ['The night-marking note', '**11**', 'Night marking starts on 1 February with the two markers appointed in October. Nothing else about the night shift changes. Any question about a count goes to the warehouse first.', 'why we are marking at night · the generator hours · the October appointments'],
], [1.2, 1, 2.3, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The content began on line fourteen. My four lines now read: _Nine cartons in the fourth store are scrap. The write-off is about eleven thousand. I need your signature before the January count closes._ What went below the line was how they got wet, who found them, and what the store is used for now."', '⚠ **Collect the highest line number in the room on the board.** **Nine to fourteen is normal and twenty is not rare.** ⚠ **Then ask the second question, which is the one that teaches: was anything lost?** **The answer is always no, and a class that has said it out loud stops believing that shortening means cutting.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** Version 1 is **111 words**; version 2 is **109**. ⚠ **Nothing was cut** — the letter\'s arrival, Mr Ayoub\'s request, the four pages and the clause reference are all still there, below the line. ⚠ **The point of the two counts is that the shorter version is two words shorter, not half the length**: the gain is order, not brevity.  **2** Below the line: the 9th, the request of the 10th, the four pages, that Ms Tannous has not been told, and the damages clause at paragraph 11. **They are not lost because a reader who wants them will find them and a reader in a hurry will not trip over them.**  **3** Line 4 asks for **twenty minutes, not a decision**. ⚠ **A reader who thinks he is being asked to decide something in four pages puts the page down; a reader asked for twenty minutes puts it in his pocket.**'));
out.push(stage('6', 'Write with help – sample (96 words)'));
out.push(sample(null, [
  '**THE PLATER\'S RATE — COVERING NOTE. 14 January. H. Mourad.**',
  '**1** The plater put his rate up twelve per cent on 1 March and we have not repriced since.',
  '**2** I am asking for a decision on the export price list this week.',
  '**3** The figures are attached; our margin on export cartons is four points thinner than the sheet says.',
  '**4** What I need from you is half an hour with the sheet, not a new price list today.',
  '**Below the line.** He told us on 28 February · the price list is revision 2 of 1 April · we still have him because nobody in Aleppo plates to that standard · there is a quotation out that holds for fourteen days.',
  '**Ninety-six words, against a hundred and thirty-one in the version I wrote first. Nothing was cut.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The figure or the fact in line 1', '✓ *twelve per cent on 1 March*'],
  ['The request, small enough to grant', '✓ *half an hour with the sheet, not a new price list*'],
  ['The date', '✗ ⚠ **"this week" is not a date** — give the day'],
  ['Your own position, in a clause', '✓ *four points thinner than the sheet says*'],
  ['A line across the page, with the history below it', '✓'],
  ['Both word counts, to prove nothing was cut', '✓ 96 against 131'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review, to read aloud:** _"Criterion: the date. The line I am marking is **_I am asking for a decision on the export price list this week._** What I found: *this week* is Thursday to you and next Monday to him, and the quotation that holds for fourteen days runs out in the gap."_ ⚠ **Note that the reviewer copied the line.** **A reviewer who had written *the date is vague* would have been right and would not have shown the writer the gap.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read their four lines only. ⚠ **The class answers in the form *I know X and I could do Y*** — and where the second half is empty, the request is missing or has no date. **Do not let the writer explain; the four lines either carry it or they do not.**'));
out.push(stage('7', 'Write freely – sample (223 words)'));
out.push(sample(null, [
  'Two pages went to Mr Ayoub in the same week in November and he read one of them.',
  'The one he read was Abu Yasser\'s, and it was not a page: it was four lines on the back of a gate sheet. _Two of the three men on the night count cannot read the carton codes. I have been reading them out and they have been marking. If I am away, nothing is counted properly. I want one of them taught, and I can teach him in a week of nights._ Mr Ayoub went to the yard the same afternoon.',
  'The one he did not read was mine, and it was two pages about the same problem, with a table of error rates by shift and a paragraph about training. The figure — that a third of the night counts in October had an error in them — was on the second page, two-thirds of the way down. He told me three weeks later that he had meant to come back to it.',
  'I used to think the difference was that Abu Yasser is in the yard and I am in an office. It is not. He put the problem, the request and the cost in four lines because he was writing on the back of a sheet and had no room for anything else. The paper made him do what I had to be taught.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The copied line is the whole task here.** **Mark it hard the first time**: a learner who writes _good use of detail_ has not done the exercise. **Sample:** _"Criterion: where the content starts. The line I copied is **_The figure — that a third of the night counts in October had an error in them — was on the second page._** What I found: this is the sentence the whole text is about, and it is your line eleven."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three unread pages to have opened with the arrival of a document** — *further to*, *with reference to*, *as discussed*. ⚠ **And expect every writer to be able to name the line the content was on**, which is the finding that matters: **they knew, and they wrote it there anyway**, because the order was inherited and never examined.'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content, not for the shortening.',
  '⚠ **The second part is the one to collect next lesson**: the longest thing sent in the last month, the line count above the figure, and the reordered opening. ⚠ **Ask for the two word counts.** **A learner who cannot produce them has cut, and cutting is a different skill that this cycle has not taught.**',
], C.lblue, C.navy));

// ===================== 1.2 =====================
out.push(pb());
out.push(h2('1.2  Decided, open, and not yours'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect the answers to be good and bitter** — a price everybody argues about that was fixed two years ago, a shift pattern, a supplier nobody is allowed to drop. **The teaching point is in the second half of the question: it is decided, and the arguing continues, and the arguing has a cost.**'));
out.push(p('**b**  **the price list from March** = closed (it exists, it is dated, it is in use)  ·  **whether we take the Dallal contract** = ⚠ **open, and it is the one** ·  **who signs a credit note** = settled, and a reserved matter  ·  **whether Ms Tannous is told this week** = ⚠ **closed, and closed by Nour on the 11th** — ⚠ **and this is the one the class will get wrong**, because it sounds like a question and it was answered before anybody asked it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The damages clause** — *not mine to decide and not yours*; it is a legal question and advice has been sought.  2 ⚠ **It makes him hunt for the question**, and *by paragraph nine I am irritated with you and not with the contract.* **The cost of mixing the four is not confusion; it is the reader\'s patience, spent before the argument starts.**'));
out.push(p('⚠ **The line to pull out of the track is Mr Ayoub\'s about Ms Tannous:** *it was obvious to you and it is the only thing in this file anybody will thank you for in a year.* ⚠ **Nour told the person who would be cut out, on the day the letter came, before being asked** — **and the unit\'s point is that she must still write it down as closed, with the date, or somebody reopens it in March.** **Good instincts unrecorded are reopened.**'));
out.push(p('**Language box – Practise (sample):**  _Settled: the Saturday opening at Baghdad Street — nineteen of thirty in the trial and it is now the pattern. Closed: the Ghouta run moved to Mondays and Wednesdays, on 1 March, and I moved it. Not ours: whether the landlord repairs the Mezzeh roof. Open: whether we open the second store on Fridays as well, which is Mr Ayoub\'s and he has not taken it._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The Friday opening is still open. Everybody is waiting to hear.'],
  ['B', 'When was it closed, and by whom?'],
  ['A', 'It was not closed. It was discussed in August and nothing came of it.'],
  ['B', 'Then it is not closed — it is quiet. There is a difference and it is about three months long.'],
  ['A', 'Mr Ayoub said in August that we would not do it until the generator was sorted out.'],
  ['B', 'That is a decision with a condition on it, which is the worst kind to leave unwritten. Has the generator been sorted out?'],
  ['A', '…It runs from one until four, and it has since the first week.'],
  ['B', 'Then the condition was met in the first week and nobody told him. The item is open again and it has been open since August with nobody holding it.'],
]));
out.push(p('⚠ **Role card 2 produces the finding that the exercise exists for:** **a decision with a condition attached, unwritten, whose condition has since been met.** ⚠ **It is not a closed point and it is not an open one; it is a decision waiting for somebody to notice.** **If a learner finds one of these in their own workplace, stop the pair work and let them tell the room.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four items with labels and the date beside every closed one. **Typical errors:** *settled* used of a habit (*we have always done it that way*) rather than of arithmetic or physical fact · a closed point with no closer · ⚠ **and the content fault, which is a learner who labels everything open because labelling it closed feels like a claim to authority they do not have.** **Point out that Nour is an office manager and closed one of the four.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The item', 'settled · closed · open · not ours', 'Why, in one clause', 'Date, if closed'], [
  ['The Saturday opening at Baghdad Street', '**settled**', 'nineteen of thirty in the trial; it is the pattern now', '—'],
  ['The Ghouta delivery days', '**closed**', 'moved to Mondays and Wednesdays, and I moved them', '**1 March**'],
  ['The Mezzeh roof', '**not ours**', 'the landlord\'s, and the lease says so', '—'],
  ['Friday opening at the second store', '⚠ **open, and nobody holds it**', '⚠ **decided against in August on a condition that was met in the first week**', '—'],
  ['The plater in Aleppo', '**closed, and not by us**', '⚠ **he put his rate up twelve per cent and we paid it**', '**1 March**'],
  ['Whether the night count is signed by name', '**settled**', 'the gate sheet has been signed by name since June', '—'],
], [1.7, 1.5, 1.8, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my six, two are settled, two closed, one open and one not ours. The one everybody still argues about is the Friday opening, and it was decided against in August on a condition that was met in the first week of September, and nobody has told him."', '⚠ **Collect the undated closed points on the board and then ask the second question: how many have already been reopened once?** **The usual answer is about half, and a class that has counted it stops treating a date as a formality.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** **Eleven items. One open** — the three-year term. (The ninth and eleventh are open *in fact*; the ninth is deliberately not in the paper and the eleventh has no advocate.)  **2** ⚠ **The price** — *his letter gives a price and calls it a condition of the term*, so **accepting the term accepts the price**, and it was closed on 9 January by Mr Dallal. ⚠ **This is the reading the whole paper turns on, and the class should be made to find it rather than told it.**  **3** ⚠ **Board supply at four times the volume**, left out because *asking the mill would tell the mill* — and it is in the table **so that it is not invisible**: it is a decision of Nour\'s inside a paper about somebody else\'s decision, and a reader cannot see it any other way.'));
out.push(stage('6', 'Write with help – sample (134 words)'));
out.push(sample(null, [
  '**THE FRIDAY OPENING — WHAT IS ACTUALLY OPEN. 16 January. H. Mourad. Seven items. One open.**',
  table(['Item', 'State', 'Why', 'Date'], [
    ['Saturday trade at Baghdad Street', '**settled**', 'nineteen of thirty in the trial', '—'],
    ['Friday opening at the second store', '⚠ **open**', '⚠ **this is the question in this note**', '—'],
    ['The generator condition', '**closed**', '⚠ **met in the first week of September and nobody said so**', '**7 Sep**'],
    ['Staffing a Friday', '**settled**', 'two counter staff are already on a Friday rota at Mezzeh', '—'],
    ['The roof', '**not ours**', 'the landlord\'s under the lease', '—'],
    ['Opening hours on a Friday', '⚠ **closed, and not by us**', '⚠ **the street closes at one and we cannot open after it**', '**—**'],
    ['What we tell the Saturday staff', '⚠ **open, and nobody has raised it**', '⚠ **three of them will lose the Friday overtime they have been doing at Mezzeh**', '—'],
  ], [1.9, 1.2, 2.4, 0.7]),
  '**Seven items and one open question — and two are not where I expected them.** The generator condition was met in September and the decision has been sitting on a met condition for four months. And the opening hours are closed by the street and not by us.',
  '**And the seventh is open and nobody has raised it.** Three of the Saturday staff do Friday overtime at Mezzeh and would lose it.',
  '**The item I am least comfortable about is the fourth.** I have put the rota down as settled on the strength of one conversation with Lina, and I have not asked the two women themselves. It is written here so that it is not invisible.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The count in the heading', '✓ *Seven items. One open.*'],
  ['Every closed point dated, with its closer', '✗ ⚠ **the opening hours have no date** — the street has closed at one for years, so give the year or say *long-standing*'],
  ['A point closed by the other side, found', '✓ the street'],
  ['Your own omission, declared inside the table', '✓ the rota, on one conversation'],
  ['The item nobody has raised', '✓ the Friday overtime'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: every closed point dated. The line I am marking is **_Opening hours on a Friday | closed, and not by us | the street closes at one and we cannot open after it | —_**. What I found: the dash. The other five rows carry a date and this one carries a dash, so a reader will read it as *we have not checked* rather than as *this has been true for twenty years*."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the point closed by the other side. ⚠ **The class answers one question: what does accepting it accept?** **In the Dallal file the answer is the price; in a lease it is usually the hours; with a supplier it is usually the lead time.** ⚠ **A learner who cannot find one has not read the other side\'s document, only their own notes about it.**'));
out.push(stage('7', 'Write freely – sample (231 words)'));
out.push(sample(null, [
  'We have argued about the Thursday delivery for a year and a half, and it was decided in the summer of 2021 by Mr Ayoub, in about forty seconds, in the yard.',
  'What he decided was that we would not deliver to Ghouta on a Thursday, because the Thursday lorry had to be back for the Friday counter and twice it was not. He said it to Abu Yasser and to nobody else. It is in no sheet, no note and no page. Abu Yasser remembers it exactly, including the weather, and has repeated it to four people over eighteen months, and each of the four has treated it as Abu Yasser\'s opinion about lorries.',
  'So twice a year somebody asks why we do not deliver to Ghouta on a Thursday, and the answer takes twenty minutes and ends with somebody saying they will raise it with Mr Ayoub, and nobody does, because by then the room has lost interest.',
  'I have now moved the Ghouta run to Mondays and Wednesdays, on 1 March, and I wrote that down. The 2021 decision is still not written anywhere, and I am going to write it as a closed point with its date and his name on it, because it is the only way the argument stops.',
  'What it has cost is about four hours of other people\'s time, and one driver who thinks we are disorganised.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **The question to press is the second one: in the file, or in somebody\'s head?** **Sample:** _"Criterion: where the closing date lives. The line I copied is **_Abu Yasser remembers it exactly, including the weather._** What I found: that is your whole record. One man\'s memory, and he has been repeating it for eighteen months to people who hear it as his opinion."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to be in nobody\'s writing, and expect two of three to be decisions whose taker is still in the building and has never been asked.** ⚠ **That is the finding: not that the record is lost, but that it was never made and the person who could make it is twenty metres away.** **End the stage by asking who in the room is going to go and ask.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part — labelling every item of the next real paper — is the one that transfers**, and it is also the one learners forget to date. **Collect the labels and count the closed points without dates before you look at anything else.**',
], C.lblue, C.navy));

// ===================== 1.3 =====================
out.push(pb());
out.push(h2('1.3  What you no longer explain to this reader'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect numbers between four and fifty.** **The commonest answers are a company\'s own address, a contract the reader signed, and a procedure the reader wrote.**'));
out.push(p('**b**  The **second** — *the Tannous volume*. ⚠ **The first is written for a stranger and sent to the man who signed it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Ten** — eleven lines become one, and the one is not one of the eleven.  2 ⚠ **Not what he knows: what he knows differently from you** — *the arrangement runs twelve months from 1 May*, which he has twice given as 28 April, the date he signed.'));
out.push(p('⚠ **The sting in this track is in Nadia\'s last speech and the class usually misses it.** **Nour did not merely write eleven unnecessary lines; she wrote eleven lines of what he knows and left out the one thing he has wrong.** ⚠ **The long explanation is not harmless padding — it crowded out the only line worth writing.** **That is why the cycle is in the book: the fault is not length, it is substitution.**'));
out.push(p('**Language box – Practise (sample):**  _Every time I write to the bank I explain that we have two sites. Mr Haddad has visited both. Short: **our two sites**. What he has wrong: he thinks the second store opened in June — it opened on **8 June**, and the account for it was opened in **July**, and he has been dating our turnover increase from July ever since._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Who do you write to most?'],
  ['A', 'Mr Attar at the mill. Twice a week.'],
  ['B', 'What does he state as a fact that is not quite right?'],
  ['A', '…He says we order in multiples of five hundred. We stopped that in March. We order in multiples of two hundred since the bench page was revised.'],
  ['B', 'And how long has he been saying it?'],
  ['A', 'Since March. Every quotation he sends is in fives.'],
  ['B', 'Has anybody told him?'],
  ['A', 'We round up. We have been buying three hundred too much board nine months out of ten to avoid telling him.'],
  ['B', 'Then the sentence is one line, with the date, and without saying he was wrong. And it is worth about nine months of board.'],
]));
out.push(p('⚠ **This is the exercise\'s best outcome and it happens about one pair in three: the uncorrected fact has a price, and the price has been paid silently for months because correcting upward or outward feels more expensive than the money.** **When a pair finds one, make them say the figure out loud.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the long and short versions, count the words saved, and write the one missing line. **Typical errors:** *as you will recall* and *in fact* in the correction (both say *you were wrong*) · a short reference that drops a fact the reader does not actually have · ⚠ **and the content fault, which is a learner who shortens beautifully and refuses to write the correcting line at all.** **That refusal is the unit, not a failure of the exercise.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I explain every time', 'Who already knows it, and how', 'The short version', 'Words saved'], [
  ['That we have two sites and which is which', 'Mr Haddad has visited both', '**our two sites**', '**31**'],
  ['How the night marking works', 'he approved the two markers in October', '**the night markers**', '**18**'],
  ['Why export cartons are marked twice', 'he insisted on it after the first season', '**double marking**', '**22**'],
  ['What the bench page is for', 'he signed revision 2 himself', '**the bench page**', '**26**'],
], [1.8, 1.7, 1.5, 0.8]));
out.push(p('⚠ **And the one line I have never written:** **Mr Haddad** states **that the second store opened in June and our turnover rose from July**, and it is **that the store opened on 8 June and the July figure is the first full month, not the first month** — which makes our growth look two months slower than it was, in the one document the credit committee reads.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I explain our two sites every time, to a man who has visited both. Short, it is *our two sites*, and I save thirty-one words. And the line I have never written is that the second store opened on 8 June, so the July figure is its first full month and not its first month — which makes us look two months slower to the only people who read it."', '⚠ **Collect the words saved on the board — the room total is usually in the hundreds — and then ask how many of the never-written lines are a date.** **It is usually most of them**, because a date is the easiest fact to half-remember and the hardest to correct without appearing to correct a person.']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Four hundred and six words out; one line in.**  **2** ⚠ **The 2019 and 2021 Homs seasons** — the strongest material in the file, two years and the same mistake, both times his decision. **It has gone into the attached paper**, because *thirteen lines of it reads as an accusation however gently it is written*, and ⚠ **being able to look is a different act from being shown.**  **3** ⚠ **Because it is the only line in the document a reader could be annoyed by.** **Four hundred and six words of deference came out and one flat sentence of correction went in**, and deference costs nothing while a correction costs the writer something.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**THE BOARD ORDER — WHAT I HAVE TAKEN OUT. 17 January. B. Nassif. Two hundred and eleven words out. One line in.**',
  table(['What I had written', 'Lines', 'What it is now', 'Who knows it'], [
    ['how the bench page came to be revised', '**8**', '**the bench page**', 'he signed revision 2 on 1 April'],
    ['what we use the fourth store for', '**4**', '**the fourth store**', 'it was his idea'],
    ['why we order board and not sheet', '**6**', '⚠ **taken out altogether**', '⚠ **he has ordered board for twenty years**'],
    ['⚠ **the one line going in**', '⚠ **1**', '⚠ **_We order in multiples of two hundred, and have since 1 April._**', '⚠ **he quotes in fives, and has since March**'],
  ], [2.4, 0.6, 2.3, 1.7]),
  '**Two hundred and eleven words out, and the note is better in two ways and worse in none.** It no longer tells Mr Attar that I think he has forgotten his own trade.',
  '**The hardest one to cut was the third.** Six lines explaining board to a man who has sold it since 1998 reads as an insult however gently it is written. It is now in nothing at all, because it did not need to be anywhere.',
  '**And the one line going in is the only line here he could be annoyed by.** Two hundred and eleven words of deference came out and one sentence about multiples went in, and the second is the brave one, and it is worth three hundred cartons of board a month.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *who knows it* column, with how they know', '✓ throughout'],
  ['Words out and lines in, counted', '✓ 211 and 1'],
  ['The hardest cut, moved rather than lost', '✗ ⚠ **this one was genuinely dropped** — **say so**, as the sample does, rather than claiming a move'],
  ['The one line going in: flat, dated, no softener', '✓ *and have since 1 April*'],
  ['The brave line, named as such', '✓ and priced, which is better'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the hardest cut moved rather than lost. The line I am marking is **_It is now in nothing at all, because it did not need to be anywhere._** What I found: that is honest and it breaks the pattern of the other rows, so a reader will wonder whether you also dropped something that mattered. One clause saying *and the board question has never been in doubt* would close it."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their **one line going in**. ⚠ **The class hunts for softeners and strikes them out**: *as you will recall · I think you may have · just to confirm · in fact · if I am not mistaken.* ⚠ **A learner whose line survives the hunt has written the hardest sentence in the cycle**, and it is usually about eleven words long.'));
out.push(stage('7', 'Write freely – sample (227 words)'));
out.push(sample(null, [
  'Mr Ayoub has believed for two years that the Homs season went wrong in 2021 because the driver was new.',
  'The driver was new. He was also irrelevant. What went wrong in 2021 is what went wrong in 2019: we sent the standard season allocation to Homs and did not count the walk-in trade, which is half of what that shop sells in a season, and the shop was empty by the second week both times. Both allocations were his decision, taken in the same week of the year, on the same sheet, and the sheet has no line for walk-in trade on it.',
  'Nobody has said this to him. I have heard four people say the driver thing back to him in meetings, and one of them was me, in my first month, because it was the easy thing to say.',
  'The reason nobody says it is not fear, exactly. It is that the correct sentence has his decision in it twice, and there is no way to write *you did this in 2019 and again in 2021* that sounds like information.',
  'What I am going to write is the sheet. Not the history: a line on the allocation sheet that says *walk-in trade, last season, counted*, with a box for a figure. He will fill it in, and in a year nobody will remember that it was ever missing, which is the price of the thing being fixed.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: the softener. The line I copied is **_there is no way to write *you did this in 2019 and again in 2021* that sounds like information._** What I found: you have diagnosed it exactly and then written no sentence at all. The sheet is a good answer and it is not the line — it is a way of never writing the line."_ ⚠ **That review is correct and should be read out.** **The cycle allows the move and the reader is entitled to name it.**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to say nobody has ever said it, and expect two of three to give the reason as *it has never mattered enough*.** ⚠ **Point out what that reason also explains: it is why the fact has lasted.** **A thing that never matters enough to correct is a thing that will be wrong for as long as the person holds the job.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part is the transferable one and it has two halves: the cuts, with a word count, and the one added line.** **Learners do the first half willingly and the second half rarely.** ⚠ **Ask directly for the added line, and if it is not there, ask what the correction would be worth** — **the answer is often a figure, as in the board sample.**',
], C.lblue, C.navy));

// ===================== 1.4 =====================
out.push(pb());
out.push(h2('1.4  What you are answerable for'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the useful half** — and the commonest answer is *everything that goes wrong in my department whether or not I decided it*, which is exactly the position this cycle is written against.'));
out.push(p('**b**  *That is not my department* is an **excuse**; the second is a **limit**. ⚠ **The test is when it arrives: an excuse arrives before the work and a limit arrives after it.** **An excuse costs nothing; a limit names ground you cannot retreat from.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **The figures in paragraph 2** — volumes, hours, markers, what the press can do at night, *counted myself* — **and the reading of the letter**, that the price is a condition of the term.  2 ⚠ **An excuse arrives before the work and a limit arrives after it.**'));
out.push(p('⚠ **The exchange worth replaying is Mr Ayoub\'s *then you are answerable for nothing*.** **Learners expect claiming everything to look responsible.** ⚠ **Nobody can be answerable for everything and everybody knows it, so a claim to the whole page is read as a claim to none of it** — **and that is a thing learners have usually felt and never heard said.**'));
out.push(p('**Language box – Practise (sample, four lines):**  _I am answerable for the counter takings at both sites, banked daily, which I count and sign for. And for the complaints log, which I keep. I am not answerable for the price list, which is Mr Ayoub\'s. I can be overruled on whether a complaint is worth a credit note, which is a judgement about a customer and not about a figure._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'That is not my department.'],
  ['B', 'When did you say it — before the work or after it?'],
  ['A', 'Before. I said it when the file arrived.'],
  ['B', 'Then it was an excuse, and it cost you nothing. Rewrite it as a limit.'],
  ['A', '…I have checked the four invoices and the arithmetic is right, and I will stand behind that. Whether we pay them before the end of the month is a cash decision and it is not mine.'],
  ['B', 'And what have you just signed for?'],
  ['A', 'The arithmetic. If one of those four is wrong it is mine and nobody else\'s.'],
  ['B', 'That is the difference, and it is the whole difference. The first version protected you and told the reader nothing. The second one exposes you on four invoices and makes the rest of the sentence believable.'],
]));
out.push(p('⚠ **Role card 2 is the one to spend time on.** **Learners find the rewrite easy and the last question hard: *what have you just signed for?*** ⚠ **Until a learner can answer it, they have written a politer excuse rather than a limit.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four lines and name the line that cannot be retreated from. **Typical errors:** *I can be overruled on* applied to a figure (a counted figure is not a matter of opinion and must not be offered as one) · a limit with nothing specific in it (*I am answerable for my own work*) · ⚠ **and the content fault, which is a learner who writes all four lines and makes every one of them a *not mine*.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The work', 'Answerable for', 'Not mine', 'Can be overruled on'], [
  ['The January stock count', 'every figure on the four sheets; I counted the fourth store twice', 'the valuation of the scrap', 'whether nine cartons is a write-off or a repack'],
  ['The complaints log', 'that every complaint is in it with a date', 'whether a credit note is issued', 'how a borderline case is classified'],
  ['The freight quotations', 'that all three are for the same specification', 'which one we take', 'whether a fourth was worth getting'],
  ['The export price sheet', 'the arithmetic and the plater\'s twelve per cent', 'the margin we choose to take', 'whether to show the old price alongside'],
], [1.4, 1.8, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"On every figure on the four stock sheets I am answerable, because I counted the fourth store twice myself. The valuation of the scrap is not mine. I can be overruled on whether nine cartons is a write-off or a repack. And if one of those sheets is wrong, I have signed for it."', '⚠ **Count how many claimed everything the first time** — **it is usually most of the room** — **and then ask each one what their limit cost them to write.** ⚠ **A learner who says it cost nothing has not written a limit.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Five lines**, and the **fifth** took four of the five rewrites.  **2** ⚠ **The last nine words of line 5 — *and not say I told you so*.** **It is not the register of a business paper**, and it is in because *it is the true thing in the document* and because ⚠ **this is the first paper Nour has written against something her employer wanted, and he has to know what kind of person wrote it.**  **3** ⚠ **Line 1 — the figures, four nights of counting signed for in one sentence.** **It is first because *if the forty-two an hour is wrong, nothing else on these four pages survives*** — ⚠ **so it goes where a reader will test it, not where it can hide.**'));
out.push(stage('6', 'Write with help – sample (148 words)'));
out.push(sample(null, [
  '**THE JANUARY COUNT — WHAT I AM ANSWERABLE FOR. 18 January. N. Mansour. Page three of three.**',
  '**1  I am answerable for** every figure on the four stock sheets. I counted the fourth store twice, on the 8th and the 11th, because of the damp, and I will stand behind all four sheets.',
  '**2  and for** the reading at line 9: that nine of the cartons in the fourth store cannot be sold as first quality. I have put two of them on this desk and anybody may look at them.',
  '**3  I am not answerable for** the valuation. What the nine are worth as scrap is a price question and I have not priced them.',
  '**4  and not for** what the fourth store is used for next season, which I have not raised here.',
  '**5  I can be overruled on** whether the nine are a write-off or a repack. That is a judgement about what our seconds trade will carry and it is yours. My recommendation is a write-off, and I may be wrong, and if you decide to repack I will repack them and say nothing further about it.',
  '**Five lines, and the fifth took most of the rewriting. I nearly left out the last six words. They are in because this is the first count I have signed on my own.**',
  '**And line 1 is the one that frightens me. If the fourth store is wrong twice, the whole count is wrong, which is why it is first.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Specific enough to be caught — a figure, a count, a date', '✓ *twice, on the 8th and the 11th*'],
  ['A reading quoted rather than characterised', '✗ ⚠ **better than quoting** — *two of them are on this desk and anybody may look* — **but the line number should be exact**'],
  ['*Not mine*, with where the question has gone instead', '✗ ⚠ **the valuation is disclaimed and not handed anywhere** — say who prices it'],
  ['*Overruled on* about a judgement, in plain words', '✓'],
  ['The frightening line placed first', '✓'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: *not mine*, with where it has gone. The line I am marking is **_What the nine are worth as scrap is a price question and I have not priced them._** What I found: that is a limit with nowhere to go. A reader has to invent the next step himself, and he will put it back on you."_ ⚠ **This is the commonest fault in the cycle and it is worth naming on the board: a limit with no destination is half an excuse.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their **overruled on** line. ⚠ **The class answers one question: would this reassure a reader who has just been argued with?** **The test is whether the line says what the writer will *do* if they lose**, not merely that they accept the reader\'s authority. ⚠ *I will repack them and say nothing further about it* **passes;** *the decision is of course yours* **does not.**'));
out.push(stage('7', 'Write freely – sample (236 words)'));
out.push(sample(null, [
  'In my first job I was answerable for a delivery book I was not allowed to write in.',
  'The arrangement was that the storeman wrote the entries and I checked them and signed the page at the end of the week. He was sixty-one and had done it for nineteen years and he wrote in pencil, in a hand I could read about four days in five. I signed about forty pages.',
  'In the March of my second year a consignment of valves went missing between the gate and the racks, and the page that should have had them on it had a line that could have been read as sixteen or as ten. It was my signature at the bottom. Nobody suggested I had taken anything; what was said, in a room with three people in it, was that I had signed for a figure I could not read, which was true.',
  'Nobody had ever written down what I was answerable for. If anybody had, somebody would have noticed that it was arithmetic I could check and handwriting I could not.',
  'What I would write now is four lines. I am answerable for the arithmetic of every page I sign. I am not answerable for the legibility of entries I am not permitted to make. I can be overruled on whether that matters. And if a figure is wrong and legible, it is mine.',
  'It took me nine years to be able to write the second line.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the limit ever written down? The line I copied is **_Nobody had ever written down what I was answerable for._** What I found: you then write that somebody would have noticed the gap, and that is the finding — the limit was not missing because nobody thought of it, it was missing because writing it would have exposed the arrangement."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three to have had no written limit, and expect at least one text in which the person who should have written it is the person who was blamed.** ⚠ **That asymmetry is the cycle\'s point: the limit protects the junior person and only the senior one can write it**, which is why it is usually not written, and why learners should write their own.'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part — five lines for the largest thing in hand, with the frightening one first — is the piece that will be used at work**, and the placement is the part learners get wrong. ⚠ **Check that line 1 is the exposed one and not the safest one**, which is what everybody does on a first attempt.',
], C.lblue, C.navy));

// ===================== 1.5 =====================
out.push(pb());
out.push(h2('1.5  The sentence that invites a correction'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the question that teaches: why did they not tell you?** **The answers are nearly always one of three** — **nobody asked them · they assumed you knew · saying it would have looked like telling you your job.**'));
out.push(p('**b**  The **second** invites a correction. ⚠ **It names the thing (the mill and the board), locates it (paragraph 7), states the consequence (the recommendation changes) and says who knows.** **The first names nothing, so there is nothing to correct.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The named thing · where it sits · what changes if it is wrong** (and the fourth part, who would know).  2 ⚠ **That Mr Ayoub will say *she wrote four pages on a guess*** — **and Hala\'s answer is that he will say that about the version with *please correct me if I am wrong* in it.** ⚠ **A guess you have named is an assumption; a guess hidden behind a politeness is a guess.**'));
out.push(p('⚠ **The second half of the track carries the rule learners break:** **one invitation a paper, and do not repeat it.** ⚠ **Two read as a writer who does not believe her own argument, and the reader then corrects the argument instead of the assumption.** **This is counter-intuitive — a second admission feels more honest — and it is worth stating twice.**'));
out.push(p('**Language box – Practise (sample):**  _If the Saturday figures from Baghdad Street include the trade counter, my comparison at line 6 is wrong and the Friday case collapses. I have taken them from the daily sheet and I have not asked Hala whether the counter is in them. She will know and I do not._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have three invitations in four pages. Read them.'],
  ['A', '"I may be wrong about the volume." "Please correct me if I have misread the clause." "If the mill can supply four times the board, paragraph 7 is wrong and the recommendation changes."'],
  ['B', 'Which one has a consequence attached?'],
  ['A', 'The third.'],
  ['B', 'Then the third survives. What were the other two?'],
  ['A', '…The first is an apology about a figure I counted myself over four nights.'],
  ['B', 'Which is not an open question at all. It is a figure and it belongs where you signed for it.'],
  ['A', 'And the second is an apology for reading a document I have quoted in full.'],
  ['B', 'So two apologies and one question. Take out the apologies and read the paper back to yourself. Does it sound more sure or less?'],
  ['A', 'More. And shorter by about forty words.'],
]));
out.push(p('⚠ **The diagnostic in role card 2 is reliable: ask which invitation has a consequence attached, and the others turn out to be apologies.** **Learners discover that their hedges cluster around the material they are most confident about**, because that is where the exposure feels greatest.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the invitation in three parts and name who in the room would have known. **Typical errors:** a consequence hedged into nothing (*may need review*, *might change things*) · no paragraph reference, so the reader cannot find the brick · an invitation about a counted figure · ⚠ **and the content fault, which is a learner who names the weakest brick accurately and then adds *but I am fairly confident*, undoing it in six words.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I am sure of', 'What I have assumed and not checked', 'What changes if it is wrong', 'Who would know'], [
  ['We cannot supply eleven hundred a month', 'that the mill cannot double our board', 'the whole recommendation', 'Mr Attar'],
  ['The Friday opening is worth it', 'that the Saturday figures exclude the trade counter', 'the comparison, and the case', 'Hala'],
  ['The plater is irreplaceable', 'that nobody else in Aleppo plates to our standard', 'our acceptance of the twelve per cent', 'Bassel, who buys there'],
  ['The scrap is scrap', 'that the seconds trade will not take damp cartons', 'nine cartons, and about eleven thousand', 'Abu Yasser'],
], [1.5, 1.8, 1.6, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I am sure the plater is irreplaceable. Under it I have assumed that nobody else in Aleppo plates to our standard, and I have not asked. If I am wrong, our acceptance of the twelve per cent changes. Bassel would know, because he buys there every month."', '⚠ **Count how many of the assumptions could be closed with one telephone call** — **in a normal room it is most of them** — ⚠ **and then ask why the call has not been made.** **Listen for the real answer, which is usually that asking would reveal that the asker did not know.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Eighty-one words**, and it **names the brick · locates it · states the consequence · gives the reason for the gap · hands the judgement over · prices the remedy.**  **2** ⚠ **Because an admitted gap with no remedy attached is a hole in a paper; an admitted gap costed at one telephone call is a decision offered to the reader.** **He can take the caution or spend the call, and either way the paper stands.**  **3** ⚠ *I am not certain about the night capacity either* — **struck out not because it was untrue but because the first invitation does its work and the second one undoes it**, and ⚠ **the night capacity was counted over four nights, so it is a figure and not an open question.**'));
out.push(stage('6', 'Write with help – sample (118 words)'));
out.push(sample(null, [
  '**THE FRIDAY NOTE — LINE 11, THE ONE THING I HAVE NOT CHECKED. 19 January. H. Mourad.**',
  '**Line 11.** If the Saturday figures I have used at line 6 include the trade counter as well as the shop, my comparison is wrong and the case for Friday collapses. I have taken them from the daily sheet, which does not say, and I have not asked. I have not asked because the question goes to Lina, who has been at the counter three weeks, and I did not want her first week of figures read as a test of her. You will know whether that is the right caution and I do not. If you think it is wrong, it is one question at the counter and I will ask it this afternoon.',
  '**One hundred and eighteen words, and it is the paragraph I would defend if I could keep only one.**',
  '**And there is only one.** At line 4 I had written *I am not sure the Friday street closure is still at one*, and I have struck it out — not because it was untrue but because I walked down it on the 9th and it closed at one, and a thing you have seen is not an open question.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The brick named, with its paragraph', '✓ line 6, named at line 11'],
  ['*changes*, not *may need review*', '✓ *the case for Friday collapses*'],
  ['The reason the gap exists', '✓ ⚠ **and it is a human reason, which is allowed and is better than a procedural one**'],
  ['The remedy, priced', '✓ *one question at the counter, this afternoon*'],
  ['One invitation only, the second struck out', '✓ and the striking is shown'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the remedy, priced. The line I am marking is **_it is one question at the counter and I will ask it this afternoon._** What I found: the price is right and it contradicts your reason. If the question costs one afternoon and your only ground for not asking is Lina\'s three weeks, a reader will tell you to ask and will wonder why you did not."_ ⚠ **That review is correct and it is the best thing the sample produces**: **a priced remedy tests the reason for the gap, and sometimes the reason does not survive it.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only their invitation. ⚠ **The class answers two questions: what would it cost to close the gap, and is the person who could close it in this room?** ⚠ **In a class of colleagues the second answer is often yes, and the gap closes during the lesson** — **which is the best thing that happens in this cycle and should be allowed to interrupt it.**'));
out.push(stage('7', 'Write freely – sample (229 words)'));
out.push(sample(null, [
  'I was certain for five months that the Ghouta customers wanted a Thursday delivery, and I had it from the customers themselves.',
  'What I had asked them was whether Thursday suited them, and they had all said yes, because Thursday suits anybody who is being asked a yes-or-no question by a supplier. What I had not asked was what they did with the delivery when it came, and the answer, which Abu Yasser could have told me in one sentence, is that the two biggest of them break the load down for their own customers on a Monday. A Thursday delivery sat in their store rooms for four days and arrived at the end of the chain looking older than it was.',
  'Abu Yasser knew. He had driven that run for six years. He did not tell me because I never asked him a question he could answer — I asked him to confirm an arrangement, which is a different act, and he confirmed it.',
  'The sentence that would have let him say it is not a polite one. It is: *I have assumed Thursday suits them because they told me so, and I have not asked what they do with the load. If that is wrong the whole schedule is wrong. You have driven it for six years.*',
  'I moved the run to Mondays and Wednesdays on 1 March, five months later than I could have.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the person who knew ever asked? The line I copied is **_I asked him to confirm an arrangement, which is a different act, and he confirmed it._** What I found: that is the whole essay in one sentence, and it is on your line fourteen. It is also a general law and you have not said so — you asked a closed question of the only open source you had."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect somebody in the building to have known in all three texts, and expect two of three to give the reason as *asking would have looked like not knowing*.** ⚠ **Name that cost out loud at the end of the cycle**: **five months of the wrong delivery day, against one sentence that would have exposed one gap in one writer\'s knowledge.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to make the telephone call, and some will.** **Collect the outcomes next lesson before anything else** — ⚠ **in a working class, one or two of the assumptions will have turned out to be wrong**, and nothing else in the unit teaches as well as that does.',
], C.lblue, C.navy));

// ===================== 1.6 =====================
out.push(pb());
out.push(h2('1.6  Reading a brief somebody wrote about you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect an auditor\'s report, a bank\'s file note, a tender document or a consultant\'s summary** — and expect the thing it got wrong to be a **size**, a **capability** or an **alternative the writer did not know existed.**'));
out.push(p('**b**  **says** = it is small  ·  **implies** = it cannot refuse  ·  **assumes** = it has no other buyer. ⚠ **Only the third is checkable against the world, and it is the one that is false.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **says · implies · assumes** — stated small, in Mezzeh, inexperienced; implied not in a position to negotiate; assumed no other buyer.  2 ⚠ **That we have no other buyer** — **which is false: Ms Tannous, a price list that holds fourteen days, and a plater we kept through a twelve per cent rise.**'));
out.push(p('⚠ **Bassel\'s two closing lines are the ones to make the class sit with.** **First: a brief written by the man you are negotiating with is worth money — nine words telling you what he believes about you, and *you would have paid for that*.** ⚠ **Second: *small is true and it is not an insult, and you will waste a year of your life if you decide it is.*** **Some learners will resist the second more than anything else in the unit.**'));
out.push(p('**Language box – Practise (sample):**  _"A regional supplier with no export department." **Says:** we have no export department, which is true — there is no department, there is me. **Implies:** we cannot handle the paperwork. **Assumes:** that export capability lives in a department. ⚠ **The assumption is the false one: we have exported every month since January, and the thing he is looking for is a function and not a room.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Read the sentence that annoyed you.'],
  ['A', '"A small family workshop in Mezzeh with limited export experience."'],
  ['B', 'Which part of it is true?'],
  ['A', 'None of it. We have exported every month since January.'],
  ['B', 'Which part of it is true?'],
  ['A', '…Small is true. And it is a family firm. And it is in Mezzeh.'],
  ['B', 'So three of the four facts are correct and you have read the sentence as an insult.'],
  ['A', 'It is written to be one.'],
  ['B', 'It may be. And what would a year of proving that we are not small cost us?'],
  ['A', 'A year. And the twelve per cent, probably, because we would take work we cannot plate.'],
  ['B', 'Then take the one that is wrong — the experience — correct it once to Mr Ayoub with a figure, and let Mr Dallal make the offer he believes in.'],
]));
out.push(p('⚠ **The repetition of *which part of it is true?* is deliberate and should not be skipped.** **The first answer is always *none of it*.** ⚠ **A learner who gets to the true part has done the exercise; one who does not has rehearsed an argument.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three layers and name the layer the speaker was angry about. **Typical errors:** answering the implication as though it were the statement (*we are not small!* when nobody said small was bad) · an *assumes* entry that is really a second implication · ⚠ **and the content fault, which is a learner who wants to write the corrected version to the other side.** **The next stage shows why not.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'Says', 'Implies', 'Assumes — and is it true?'], [
  ['*a small family workshop in Mezzeh*', 'size, place, ownership', 'we cannot refuse', '⚠ **no other buyer — false**'],
  ['*with limited export experience*', 'new to export', 'we need his market', '⚠ **we do not know our costs abroad — false**'],
  ['*a regional supplier with no export department*', 'no department', 'cannot handle paperwork', 'capability lives in a department — **false**'],
  ['*a long-standing supplier of Ms Tannous*', 'the relationship', 'we are her subcontractor', '⚠ **that she found us rather than we found her — true, and he does not know why that matters**'],
], [1.6, 1.3, 1.5, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The sentence says we have no export department, implies we cannot handle the paperwork, and assumes that export capability lives in a department. The wrong layer is the assumption. The true part is that there is no department — there is me — and I am going to stop arguing with it."', '⚠ **Count how many wrong layers were assumptions: it is usually all of them.** ⚠ **Then ask the question that makes the cycle commercial: what would each assumption have cost the other side if nobody had noticed?** **In the Dallal file the answer is the whole shape of his offer.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Six sentences**, and the mistake that matters is in the **last** — *we would of course expect to deal directly*, which assumes **Ms Tannous is a cost and not a reason.** ⚠ **She found this company, took the first order at a price that barely held, and carried the risk of the first export season.**  **2** ⚠ **Length is what *he* wants** — *his board is what moves in three years, not ours* — **and he has described it as security for a small workshop.**  **3** ⚠ **For the file and for Mr Ayoub, and not for Mr Dallal.** **A letter that tells the other side what you have worked out about his assumptions is a letter that teaches him to hide them.**'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**THE BANK\'S FILE NOTE, OPENED UP. 20 January. N. Mansour. For the file, and not for Mr Haddad.**',
  table(['His words', 'Says', 'Implies', 'Assumes', 'True?'], [
    ['*a second outlet opened mid-year*', 'a second store', 'expansion on credit', '⚠ **that we borrowed for it**', '⚠ **no — it was paid out of the Homs season**'],
    ['*turnover rising from July*', 'a July rise', 'a slow start', '⚠ **that July is the first month**', '⚠ **no — the store opened on 8 June**'],
    ['*the proprietor is closely involved in daily trade*', 'Mr Ayoub is in the shop', 'no management depth', '⚠ **that involvement is a substitute for a second decision-maker**', '⚠ **no, and it is the real mistake**'],
  ], [1.9, 1.1, 1.1, 1.8, 1.1]),
  '**Three sentences, and the mistake that matters is in the third.** He reads Mr Ayoub in the shop as a firm with one head. It is a firm with one head and a written sheet for every part of the trade, and the sheets are why the second store opened in a fortnight. ⚠ **A man who thinks daily involvement means no depth has not asked what happens here when Mr Ayoub is in Homs for a week.**',
  '**And the second line is the one I will use.** He assumes July is the store\'s first month, so he is reading our growth two months slower than it was, in the one document the credit committee sees.',
  '**What I have not done, and will not: write any of this to him.** A note that tells a bank what you have worked out about its file note is a note that gets you a politer file note.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['His words quoted, not summarised', '✓ all three in his wording'],
  ['*true?* answered layer by layer', '✗ ⚠ **the third row answers for the assumption only** — **the stated fact is also true and should say so**'],
  ['An assumption about somebody not in the room', '✓ the sheets, and whoever runs on them'],
  ['Something he wants, described as something you want', '✗ ⚠ **not present** — **a bank\'s file note often has none, and the writer should say so rather than leave the slot empty**'],
  ['Who the page is for, at the top', '✓'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: something he wants, described as something you want. The line I am marking is **_He assumes July is the store\'s first month._** What I found: this is the nearest you come, and it is not the same thing — it is an error, not a preference dressed up. Say in one clause that the note contains no such move, so a reader does not think you missed it."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the assumption they found about an **absent** person. ⚠ **The class answers one question: who would have argued for them if they had been in the room?** ⚠ **The usual answer is nobody, and that is why the assumption survived to be written down.** **In the Dallal letter the absent person is Ms Tannous, and in Book 1 she is absent from every document until Unit 8.**'));
out.push(stage('7', 'Write freely – sample (233 words)'));
out.push(sample(null, [
  'An inspector wrote three lines about our packing room in 2019 and one of them is still quoted at me.',
  'What it said was that the room was clean, the racking was sound, and that *procedures appear to be held informally*. The first two were compliments and nobody mentioned them again. The third has been read in this building for five years as a criticism of me, and I have spent some of those five years writing procedures down partly in order to answer it.',
  'What it says is that the procedures were not written. True, in 2019. What it implies is that informal procedures are weak ones. What it assumes is that a procedure held in one person\'s head is less reliable than one in a folder — which is an assumption about buildings with staff turnover, and ours had three people in that room for eleven years, two of whom are still here.',
  'The true part is the stated part, and I have stopped arguing with it. The assumption was wrong for our room in 2019 and it is right for our room now that we have eleven people and a night shift, which is why the sheets exist.',
  'So he was wrong about us and right about where we were going, and I spent four years reading a sentence as an insult when it was a forecast. The forecast was the useful part and nobody in the building ever read it that way.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: which layer is the writer angry about? The line I copied is **_The third has been read in this building for five years as a criticism of me._** What I found: the anger is at the implication, and your own last paragraph says the assumption was the interesting part. The essay knows the answer two hundred words before it says it."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three to have been angry at the implication rather than the assumption, and expect all three to contain a true part nobody wanted to say out loud.** ⚠ **Close the cycle on that: the brief is usually accurate and usually wrong, and those are not the same sentence.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part — an assumption written under each sentence of a real letter — is the most transferable task in the unit** and the one most likely to be brought back with something in it. ⚠ **Ask for the assumption about the absent person specifically**, or it will not be found.',
], C.lblue, C.navy));

// ===================== 1.7 =====================
out.push(pb());
out.push(h2('1.7  Review & Mediate: who has already decided, and who only thinks they have'));
out.push(stage('1', 'Get ready – Unit 1 quiz'));
out.push(p('**1** The figure or fact · the request and who is being asked · the date · your own position in a clause. ⚠ **A reader who has the content in the first three lines relaxes and reads on; a reader three lines in with nothing starts looking for the end.**  **2** **settled · closed · open · not ours** — and *not ours* is the one that is not yours, and a paper that asks a reader to decide it is asking him to guess in writing.  **3** ⚠ **Not what he knows: what he knows differently from you** — the fact he states wrongly, written once, with its date, and without saying he was wrong.  **4** ⚠ **An excuse arrives before the work; a limit arrives after it** — and a limit names ground you cannot retreat from.  **5** ⚠ **Because it names nothing, so there is nothing to correct**, and finding your mistake for you is work.  **6** **says · implies · assumes** — ⚠ **and the assumption is usually the wrong one, because it is the layer nobody has examined.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Nour\'s own paper, page one, line three** — *I am recommending against it in its present form* — **and, when pressed, Mr Ayoub\'s remark in the yard on Tuesday that it was the best thing in ten years.**  2 ⚠ **Twenty minutes, not a decision** — and the paper asks for a decision only on one item, the three-year term, which is Mr Ayoub\'s and which he has not taken.'));
out.push(p('⚠ **The line this whole book will come back to is Nour\'s about the asymmetry:** **a thing said in a yard travels in a morning while a thing on paper waits for a reader, and that is not fixable by writing better.** ⚠ **It is the one place in the unit where good writing is said to be insufficient**, and the remedy offered is not a better page but a person standing in the yard saying four words out loud. **Do not let the class leave the unit without that.**'));
out.push(p('**Language box – Practise (sample):**  _"Nothing has been decided. The word in my note is *recommending*, and a recommendation is a thing one person says to another who can say no. Settled: the volume. Closed, on the 11th: Ms Tannous has been told. Not ours: the damages clause. Open: whether we take three years, and it is Mr Ayoub\'s, and he has not taken it. And I have written that if he decides the other way I will pack eleven hundred a month and not say I told you so."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'The night-marking question is still open. We are all waiting.'],
  ['B', 'It was closed on 1 October, and it was closed by the man who appointed the two markers.'],
  ['A', 'Nobody told the packing room.'],
  ['B', 'That is a fair complaint and it is a different one. Where did you hear it was open?'],
  ['A', 'Somebody said it in the yard. I think it came from the gate.'],
  ['B', 'It usually does. Four things, in this order, and say them where you heard it. Settled: we mark at night. Closed on 1 October: the two markers. Not ours: what the generator can carry, which is the electrician\'s. Open: nothing.'],
  ['A', 'And if they ask who decided?'],
  ['B', 'Say the name and the date. An open item with no named owner is what a rumour is made of, and this one has an owner and has had one for three months.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four categories with one item in each and name the category the misreading had used. **Typical errors:** a *recommending* reported as a decision · four categories given with no owner for the open item · ⚠ **and the content fault, which is a mediator who gives the four categories correctly and leaves out the *either way* line**, which is the half that actually stops the rumour.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'What they thought had happened', 'The four categories, as I gave them', 'What they asked next'], [
  ['Lina, at the counter', 'that we had taken the Beirut contract', 'settled: the volume · closed on the 11th: Ms Tannous told · not ours: the clause · open: three years, Mr Ayoub\'s, not taken', '⚠ **whether she would be moved to the night shift** — which is in no document and is the thing she actually wanted to know'],
  ['Abu Yasser, in the yard', 'that nothing was happening at all', 'the same four, and the date Mr Dallal wants an answer by', '⚠ **whether Ms Tannous knew** — and he asked it first, before anything about volume'],
], [1, 1.4, 2, 1.3]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('⚠ **The unwritten thing, in full:** **a decision has an owner and a date, and an inclination has neither — but the inclination is said out loud in a yard and the decision waits on a page, so the building always believes the inclination.** ⚠ **The only remedy is a person willing to stand in the yard and say the four categories out loud.**'));
out.push(sample(null, ['"The paper recommended against the three-year term. Lina thought we had already taken it, from line three of my own note. The four categories were the volume, Ms Tannous on the 11th, the clause, and the term. The open item belongs to Mr Ayoub, and he has not taken it."', '⚠ **Both sample colleagues ask a question that is in no document: Lina about the night shift, Abu Yasser about Ms Tannous.** **Collect those questions on the board.** ⚠ **They are the paper\'s real gaps, found by the people the decision happens to, and no amount of rewriting would have produced them.**']));
out.push(p('**The Book 1 paper-and-decision word list starts here:** _a standing remit · an approver · a reserved matter · a line of accountability · to be overruled · a direction of travel_. ⚠ **It runs to Unit 12 and is collected in the Unit 12 key.** **Keep it on the wall and add six a unit.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(p('⚠ **B2 Business Vantage Reading Part 1 is matching, and it is the part learners lose marks on by reading the texts first.** **Teach the order: read the statement, then hunt.** **A text may be used more than once, and in this set two are.**'));
out.push(table(['Statement', '1', '2', '3', '4', '5', '6', '7'], [['**Text**', '**E**', '**C**', '**B**', '**A**', '**D**', '**B**', '**E**']], [1.4, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Why, briefly.** **1 E** — *I have not asked them, because asking would tell them.*  **2 C** — the date is corrected (*twelve months from 1 May*, terms *agreed on 28 April*) and nobody is told they were wrong.  **3 B** — *twenty minutes, not a decision.*  **4 A** — *any question about a count goes to the warehouse before it comes to this office.*  **5 D** — answerable for paragraph 2, not answerable for paragraph 11.  **6 B** — *he wants an answer by 26 January*, and Mr Dallal is outside the company.  **7 E** — the reason for the gap, which is what separates E from a mere admission.'));
out.push(p('⚠ **The distractor to discuss is 2 against 1.** **Both C and E are about something unverified**; **C corrects a date that is known and E declines to check one that is not.** ⚠ **A learner who chose E for statement 2 has read *gap* for *correction*, which is the distinction cycle 1.3 and cycle 1.5 exist to separate.**'));
out.push(stage('6', 'Write with help – sample exam answer (47 words)'));
out.push(sample(null, [
  '**Beirut contract — nothing decided.** The three-year proposal from Mr Dallal has not been accepted. The volume and the delivery days are settled; only the term is open, and Mr Ayoub will decide it by 26 January. Until then, please pack to the current schedule and send any question about it to me.',
  '⚠ **Forty-seven words. Three content points: what is being decided (the term), who is deciding it (Mr Ayoub, with a date), and what to do meanwhile (pack to the current schedule, questions to me).**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The state in the first line, not a greeting', '✓ *nothing decided*, in the heading itself'],
  ['What is being decided', '✓ the term, and only the term'],
  ['Who is deciding it, by name or role', '✓ Mr Ayoub, with the date'],
  ['What the reader should do in the meantime', '✓ and where to send questions, which is the better half'],
  ['40 to 50 words — count them', '✓ 47'],
], [3.4, 2.6]));
out.push(p('⚠ **Marking the exam task.** **Content: 3 points, all present, nothing invented.** **Organisation: the state first.** **Language: a message, not a memorandum — no *further to*, no *please be advised*.** ⚠ **Length is a band, not a target: 39 words loses content marks and 62 loses language marks, and both are commoner than a message inside the band.** **Count the words with the class the first three times.**'));
out.push(stage('7', 'Write freely – sample (238 words)'));
out.push(sample(null, [
  'Everybody in this building believes we are opening on Fridays, and nobody has decided it.',
  'What was said was said by Mr Ayoub in the yard in August, to two people, and it was that we would open on Fridays once the generator was sorted out. The generator has run from one until four since the first week of September. So what exists is a decision in favour, with a condition, and the condition was met four months ago, and the man who set it does not know that.',
  'What travelled was the first half. By October the packing room was talking about Friday rotas. In November somebody asked Lina whether she wanted Fridays, which is how a thing that has not been decided starts making promises.',
  'Settled: we can staff a Friday — two counter staff are already on a Friday rota at Mezzeh. Closed, on 7 September: the generator condition was met. Not ours: the street, which closes at one, so a Friday is a half day whatever we want. And open: whether we open at all, which is Mr Ayoub\'s and which he thinks he has already answered.',
  'If I had to stand in the yard and say it, I would say: nothing is decided, the generator stopped being the reason in September, the street makes it a half day, and Mr Ayoub will decide it when somebody tells him the condition was met. And then I would go and tell him, because otherwise I am part of it.',
]));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part sends the learner to the fastest repeater in their workplace with the four categories.** ⚠ **Collect what was said back.** **In a working class the answer is usually a fifth item nobody had categorised** — **which is the whole case for doing it out loud rather than on a page.**',
], C.lblue, C.navy));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 1 check'));
out.push(p('**A  Language.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'c', 'b', 'a', 'b', 'a']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q5 is the one that separates the class.** *I can be overruled on* — **the passive is the whole point of the phrase**: a writer who says *I can overrule* has claimed the reader\'s authority, and a writer who says *I can be overruling* has not understood that it is a standing condition and not an action. ⚠ **Q7 is the collocation *to be minded to agree*, which the class has met once**, and it should be taught as what a senior reader says when he has not decided and is leaning.'));
out.push(p('**B  Listening (Track 1.15).**   **Settled:** the volume — eleven hundred a month against our four hundred, and the press runs three hours a night.   **Closed, and on what date:** Ms Tannous was told, on **11 January**.   **Not ours, and why:** the damages clause — a legal question; advice sought from Ms Nahas on the 12th.   **Open:** whether we take three years.   **Whose it is:** ⚠ **Mr Ayoub\'s, and he has not taken it** — whatever he said in the yard on Tuesday.   **What the speaker will do either way:** ⚠ **pack eleven hundred a month and not say _I told you so_.**'));
out.push(p('**C  Reading.**  ⚠ **Line 4 — *what I need from you this week is twenty minutes, not a decision*.** **It asks for the smallest thing on the page.** ⚠ **She nearly did not write it because it is not the register of a business note and because asking for twenty minutes can look like asking for less than the matter deserves.** **It is in because a reader who thinks he is being asked to decide something in four pages puts the page down, and a reader asked for twenty minutes puts it in his pocket.**'));
out.push(p('**D  Writing – sample (104 words).**'));
out.push(sample(null, [
  '**Nothing has been decided about the Friday opening.**',
  '**Settled:** we can staff a Friday; two counter staff are already on a Friday rota at Mezzeh.',
  '**Closed, on 7 September:** the generator condition Mr Ayoub set in August was met in the first week of September.',
  '**Not ours:** the street closes at one, so a Friday is a half day whatever we decide.',
  '**Open:** whether we open at all. ⚠ **It is Mr Ayoub\'s, and he has not taken it, and he believes he answered it in August.**',
  '⚠ **And the line that stops a rumour: whichever way he decides, I will put the rota out the same week and nobody will hear from me that I thought otherwise.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the mark for *11 January* only if the date is there**; *she was told* without the date is the fault the whole of 1.2 is about.',
  '**C  Reading — 3 marks:** the line identified (1) · that it asks for the smallest thing (1) · why it was nearly left out (1).',
  '**D  Writing — 8 marks:** four categories present and correctly used (4) · the closed point dated (1) · the open item\'s owner named (1) · ⚠ **the *either way* line, which says what the writer will do if they lose (2)** — **and no marks for a *the decision is of course yours* that does not say what they will do.**',
  '**Total 25.** ⚠ **A learner who scores well on A–C and loses D is the normal profile of this unit**, and it is not a language result: it is a learner who will not write the fourth category down because naming an open item feels like claiming a right to an opinion about it.',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. This unit asks learners to write upward against something a senior reader wants, and in many of their workplaces that has never been done on paper. Expect three reactions, none of which is a language problem. Some will write it fluently and enjoy it. Some will write every line except the correction in 1.3, because correcting a senior reader\'s facts is forbidden where disagreeing with his judgement is merely unwise. And some will write all of it about a workplace they have left, which is a legitimate use of the unit and should be allowed without comment. The role cards exist for the second group; do not press a learner into using their own employer, and do not read the refusal as a failure of the exercise. It is the subject of the exercise. What all three groups should leave with is the four categories and the two lines nobody writes: the one that corrects a fact upward, and the one that says what you will do if you lose. Everything else in Unit 1 is arrangement; those two are the unit.'));
out.push(sp());
out.push(p('_Unit 2 — **Making the Case in Writing**: how an argument is built for a reader who can refuse it, where the strongest thing goes, and what to do with the fact that helps the other side._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 1 · Answer Key');
module.exports = out;
