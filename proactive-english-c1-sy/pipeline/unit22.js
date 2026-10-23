// Proactive English C1 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE READER HAS NOT NOTICED', 'WHAT IT COSTS IN A YEAR'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const asks = (rows) => table(['THE ASK AS WRITTEN', 'WHO MUST SAY YES', 'WHAT IT COSTS THEM'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three first paragraphs from the reports on the board. For each one the room says whether it establishes a problem, proposes a remedy, or describes the writer.';
const slip = '**Peer review, C1 band 4.** ⚠ **Name the reader you are being, name what is absent**, give the criterion **with the line copied**, **hand it over unsigned** — **and then write the one sentence you would put in the writer\'s place.** **The writer answers whether that sentence is theirs, and may refuse it.**';

out.push(h1('Unit 22  The Proposal Nobody Asked For'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_   ·   _Series author: Mo (Mohamad Khorbatli)_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Every proposal in this course so far has answered something: a brief, a request, a committee\'s question, a donor\'s change.** ⚠ **This one answers nothing.** **Nobody has asked for it, nobody has agreed that there is a problem, and the reader\'s first move on reading it will be to decide whether to finish the page** — **which is a reader this series has not written for before.**',
  '**So the architecture is reversed.** ⚠ **The first paragraph is not about the remedy and does not mention one.** **It establishes that something is happening and costs something, to somebody who has not noticed it** — **and the cost of doing nothing has to be costed, with the arithmetic shown, because a reader who has lived with a thing for nine years does not experience it as a cost.**',
  '**And the unit\'s hardest cycle is the shortest one.** ⚠ **_Why you?_** **A twenty-two-year-old proposing a change to an eleven-depot firm cannot answer that with a claim about himself** — **and the answer, when it works, is made of occasions and figures and contains no adjectives at all.**',
], C.grey, C.navy));
out.push(p('**Seven cycles · 90 minutes each · the seventh is Review & Mediate**', { bold: true, color: C.teal }));

// ===================== 22.1 =====================
out.push(pb());
out.push(h2('22.1  There is a problem, and you have not noticed it'));
out.push(p('**Function:** establishing that there is a problem, to somebody who has not noticed one   ·   **Grammar:** the first paragraph that contains no remedy   ·   **Pronunciation:** the finding said as an observation, not as an accusation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing that happens where you work that nobody has ever called a problem.** ⚠ **Happens, not ought to happen.** **In this class ten things were named and seven of the ten had been happening for more than three years** — **and your teacher writes the ten on the board with the number of years beside each, which is the column that does the work.**'));
out.push(board('Three people reconcile deliveries for four days a month.', '144 person-days, since 2016.'));
out.push(p('**b**  Which two first paragraphs establish a problem without proposing anything? **1** _I should like to propose a new stock system for the depot office._  **2** _Three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016._  **3** _I have some ideas about how we might improve our reconciliation procedures._  **4** _Of the forty-one movements written off last year, twenty-six were duplicates created when a lorry was re-routed; the write-off is approved by the depot manager each month._  **5** _I believe there is considerable scope for efficiency gains in the depot office._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the first paragraph must do?   **A** propose the remedy at once   **B** **establish that something is happening, and what it costs** — with no remedy anywhere in it   **C** flatter the reader'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say a reader who has lived with a thing for nine years does not experience?   **2** What does Mr Attar say he took out of his first paragraph, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  The first paragraph with no remedy in it', [
  ['Ms Huda', 'Mr Attar has written a proposal nobody asked him for.'],
  ['Mr Attar', '⚠ **Three pages, to the finance director of a milling firm with eleven depots, and I am twenty-two and he does not know my face.** **The thing I am writing about has been happening since 2016** — **three people in the depot office reconcile deliveries that the system has recorded twice, four days a month, and nobody has ever called it anything.**'],
  ['Mrs Khoury', 'What was in your first draft\'s first paragraph?'],
  ['Mr Attar', '⚠ **A system.** **_I should like to propose a new reconciliation module._** **Eleven words, and every one of them is about my remedy** — **and Mrs Khoury asked me what Mr Zeidan would be doing at the end of that sentence, and the answer is deciding whether to read the second one.**'],
  ['Mrs Oueidat', 'And the version he sent?'],
  ['Mr Attar', '⚠ **No remedy anywhere on the first page.** **_Three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016._** **Twenty-eight words, all of them checkable** — **and the only thing a reader can do with that sentence is find out whether it is true.**'],
  ['Mrs Khoury', '⚠ **Which is the cycle.** **A reader who has lived with a thing for nine years does not experience it as a cost: they experience it as the way the office works** — **and a proposal that opens with a remedy asks them to buy a solution to a problem they do not have, which is the commonest reason an unsolicited proposal is not finished.**'],
  ['Dr Qabbani', 'Why the date?'],
  ['Mr Attar', '⚠ **Because the date is the part Mr Zeidan told me afterwards had stopped him.** **He has signed the depot office\'s establishment three times since 2016 and nobody has ever asked him for a fourth person** — **and he said he had read that as a sign that the office was adequately staffed, which it is, four days a month at a time.**'],
  ['Mrs Tarabishi', 'Is the first paragraph an accusation?'],
  ['Mrs Khoury', '⚠ **It is an observation and the difference is in the grammar, not in the tone.** **_Three people spend four days_ is a fact about an office.** **_Nobody has noticed that three people spend four days_ is a fact about the reader** — **and the second version is 19.5: a conclusion dressed as an observation, and it will not be forgiven in a document nobody asked for.**'],
  ['Mr Shihabi', 'Mine would be the subbing queue.'],
  ['Mrs Khoury', '⚠ **Then the first paragraph is the queue and not the rota you want to change.** **_Eleven of the last twenty front-page pieces were subbed after nine in the evening, and six of those eleven carried corrections the following day._** **Two figures and a consequence** — **and not one word about who should be working when.**'],
  ['Mr Tayara', 'And if the reader disputes the figure?'],
  ['Mr Attar', '⚠ **Then the paragraph has done its work, which the room will not like.** **A reader who disputes the figure has accepted that the figure matters** — **and Mr Zeidan disputed my second figure, asked the stock controller to test it, and it came back higher than I had claimed.**'],
  ['Mrs Rizk', 'Higher?'],
  ['Mr Attar', '⚠ **Nineteen movements higher over the year, and Mrs Mouawad found it in about forty minutes from the write-off sheets.** **I had used the depot\'s own figure and the depot\'s own figure was conservative** — **and the lesson I took is that an unsolicited figure should be the one you can defend and not the one that helps you, because it will be tested by somebody who is better at it than you are.**'],
  ['Mrs Ajouz', 'How long is the first page?'],
  ['Mrs Oueidat', '⚠ **Shorter than the room thinks and shorter than the remedy deserves.** **One paragraph of observation, one of arithmetic, and nothing else** — **because a reader who has not agreed that there is a problem cannot be given a remedy, and every sentence of remedy on page one is a sentence that invites them to stop.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is what Mr Zeidan said when he sent for me.** **_I read the first paragraph twice, because it did not mention a system at all._** **He had been expecting a man from the systems section to propose a system** — **and the sentence that got me the four weeks is the sentence that has nothing of mine in it.**'],
]));
out.push(sp());
out.push(box('Language box – the first paragraph of a proposal nobody asked for', [
  '**No remedy anywhere in it.** ⚠ **_Three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016._** **Twenty-eight words, all checkable** — **and the only thing a reader can do with it is find out whether it is true.**',
  '**A reader who has lived with a thing for nine years does not experience it as a cost.** ⚠ **They experience it as the way the office works** — **and a proposal that opens with a remedy is offering them a solution to a problem they do not have.**',
  '**Give the date, because the date is what stops a reader.** ⚠ **_Since 2016._** **Nine years of an establishment signed off three times and no fourth person ever requested** — **and the reader does that arithmetic themselves, which is the only form in which they will do it at all.**',
  '**An observation, not a conclusion about the reader.** ⚠ **_Three people spend four days_ is a fact about an office.** **_Nobody has noticed that three people spend four days_ is a fact about the reader** — **and that is 19.5, and in an unsolicited document it ends the reading.**',
  '**Two figures and a consequence are enough.** ⚠ **_Eleven of the last twenty front-page pieces were subbed after nine in the evening, and six of those eleven carried corrections the following day._** **And not one word about who should be working when.**',
  '**And use the figure you can defend, not the figure that helps you.** ⚠ **It will be tested by somebody better at it than you** — **and a conservative figure that comes back higher is the strongest thing that can happen to a proposal nobody asked for.**',
  '**Pronunciation.** 🔊 **Track 22.2** **Say the first sentence flat, with the stress on the figures and none on _spend_.** ⚠ **Stress on the verb makes it a complaint about three people** — **and flat, with the numbers carrying, it is a measurement of an office, which is what the reader has to be able to check.**',
  '**Practise:** First paragraph, no remedy. **1** four days a month since 2016  **2** the subbing queue  **3** a figure you can defend  **4** an observation, not a conclusion  **5** the date that does the arithmetic',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the opening from the card. B says **whether it establishes a problem or proposes a remedy**, and rewrites it as **two figures and a consequence, with no remedy in it.** ⚠ **Two rows on each card establish a problem already** — **and there B says so and names the figure a reader would test.** Change cards.'));
out.push(table(['Card A – the opening as written', 'Card B – the opening as written'], [
  ['_I should like to propose a new reconciliation module._', '_I have some ideas about improving the rota._'],
  ['_⚠ Three people spend four days a month on duplicate deliveries, since 2016._', '_⚠ Eleven of twenty front-page pieces were subbed after nine, and six carried corrections._'],
  ['_There is considerable scope for efficiency gains in the depot office._', '_The present arrangement is far from ideal._'],
  ['_⚠ Of forty-one movements written off, twenty-six were duplicates from re-routing._', '_⚠ The laboratory block is double-booked in four of nine science periods._'],
  ['_Nobody has noticed that the office loses four days a month._', '_The management has overlooked the subbing problem for years._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** problem or remedy, and the figure a reader would test. ⚠ **Rows 2 and 4 on both cards establish a problem already and the room must leave them alone** — **and name which figure the reader will test first, which is the smaller one in three of the four.** **Rows 5 are the pair the cycle turns on**: both are facts about the reader rather than about the work, **and the room will defend them as true, which they are.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the thing nobody has called a problem** and write **the first paragraph**: two figures, a consequence, a date, and no remedy. ⚠ **Then strike every word that is about your remedy.** **In this class seven of ten first paragraphs named a remedy and four named it in the first six words** — **and in six of the seven the remedy came back in the room\'s own words two paragraphs later, which is where it belongs.**'));
out.push(p('**b**  Swap. Your partner reads **only your first paragraph** and says **what they would do next if they were the reader.** ⚠ **Then the harder question: which of your figures would they test, and who would they ask?** — **and in this class eight of ten could name the person in their own organisation who would be asked, which is the person whose figure you should have used.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar has written a proposal nobody asked him for: three pages, to the finance director of a milling firm with eleven depots, and he is twenty-two and the director does not know his face, and the thing he is writing about has been happening since 2016, because three people in the depot office reconcile deliveries that the system has recorded twice, four days a month, and nobody has ever called it anything. Mrs Khoury asked what was in his first draft\'s first paragraph, and a system: I should like to propose a new reconciliation module, eleven words and every one of them about his remedy, and she asked what Mr Zeidan would be doing at the end of that sentence, and the answer is deciding whether to read the second one. Mrs Oueidat asked about the version he sent, and no remedy anywhere on the first page: three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016, which is twenty-eight words, all of them checkable, and the only thing a reader can do with that sentence is find out whether it is true. Mrs Khoury said that is the cycle, because a reader who has lived with a thing for nine years does not experience it as a cost but as the way the office works, so a proposal that opens with a remedy asks them to buy a solution to a problem they do not have. Dr Qabbani asked why the date, and because the date is the part Mr Zeidan said had stopped him: he has signed the depot office\'s establishment three times since 2016 and nobody has ever asked him for a fourth person. Mrs Tarabishi asked whether the first paragraph is an accusation, and Mrs Khoury said it is an observation and the difference is in the grammar and not in the tone, because three people spend four days is a fact about an office and nobody has noticed that three people spend four days is a fact about the reader. Mr Shihabi said his would be the subbing queue, and then the first paragraph is the queue and not the rota he wants to change. Mr Tayara asked what happens if the reader disputes the figure, and then the paragraph has done its work, because a reader who disputes a figure has accepted that the figure matters. Mrs Rizk asked about the figure coming back higher, and nineteen movements higher over the year, found in about forty minutes from the write-off sheets, because he had used the depot\'s own figure and the depot\'s own figure was conservative. And Mr Attar said the thing he will take away is what Mr Zeidan said when he sent for him: that he had read the first paragraph twice, because it did not mention a system at all._'));
out.push(p('**Listener task:** write your partner\'s two figures, their consequence, and the date.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the first page of Mr Attar\'s proposal and the note he wrote afterwards. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _page 1 of a proposal to the finance director_ · _and a note written after the meeting_ · **4 November**',
  '**The paragraph, as sent.** _Three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016._ ⚠ **Twenty-eight words.** **No remedy, no adjective, and nothing about me.**',
  '**The second paragraph, as sent.** _Of the forty-one movements written off in the year to June, twenty-six were duplicates created when a lorry was re-routed between depots; the write-off is approved by the depot manager each month and has never been queried._ ⚠ **A figure, a cause, and the name of the procedure that keeps it invisible.**',
  '**What I took out.** **_I should like to propose a new reconciliation module._** ⚠ **It had been my first sentence for three drafts, and it is eleven words about my remedy** — **and the question that removed it was what the reader would be doing at the end of it, which is deciding whether to read the second sentence.**',
  '**Why the date is in the first sentence.** **Because it is the part that stopped him.** ⚠ **He has signed the depot office\'s establishment three times since 2016 and has never been asked for a fourth person** — **and he told me he had read that as evidence that the office was adequately staffed, which it is, four days a month at a time.**',
  '**The sentence I did not write, and it is true.** **_Nobody has noticed this for nine years._** ⚠ **It is a fact about the reader and not about the office** — **and in a document he did not ask for, a fact about the reader ends the reading at that line, whatever else is below it.**',
  '**The figure I got wrong.** **Mine was conservative.** ⚠ **He disputed the twenty-six, asked Mrs Mouawad to test it, and it came back at forty-five duplicates over the year** — **nineteen higher than I had claimed, found in about forty minutes from the write-off sheets.** **I had used the depot\'s own figure because it was the figure I could defend.**',
  '**What the dispute did.** **It settled the question of whether there is a problem.** ⚠ **A reader who sends for the stock controller has stopped deciding whether to finish the page** — **and the four weeks I was asking for were agreed in the same conversation, which I had expected to need a second meeting.**',
  '**What is not on page 1 at all.** **The remedy, the module, the four weeks, the database access, and the eleven depots.** ⚠ **All five are on page 3** — **and the only reason page 3 was read is that page 1 did not mention them.**',
  '**And the thing I shall not do again.** **Three drafts opening with my own remedy.** ⚠ **I had been writing to a reader who already agreed with me, who was myself** — **and the reader I actually had did not know there was a problem and had signed off the establishment three times.**',
]));
out.push(item('1', 'What did Mr Attar take out of his first paragraph, and what question removed it?'));
out.push(item('2', 'Why is the date in the first sentence, and what had the reader read it as?'));
out.push(item('3', 'What happened to the figure he used, and what does he say the dispute did?'));
out.push(writers([
  'The first page of a proposal nobody asked for: **the observation, with two figures and a date** → **the second paragraph, with a cause and the procedure that keeps it invisible** → **what you took out** → **why the date is in the first sentence** → **the sentence you did not write, and why** → **the figure you got wrong** → **what the dispute did** → **and what is not on page 1 at all.**',
  '⚠ **Quote your own first sentence and count its words.** _Twenty-eight words. No remedy, no adjective, and nothing about me._ **The count is the discipline** — **and a writer who cannot quote their own first sentence has not decided what it is for.**',
  '**Name the procedure that keeps the thing invisible.** ⚠ _The write-off is approved by the depot manager each month and has never been queried._ **Every unnoticed cost has a procedure holding it in place** — **and naming it is what stops the paragraph being a complaint about carelessness.**',
  '**Report the sentence you did not write, in full.** ⚠ _Nobody has noticed this for nine years._ **True, and a fact about the reader** — **and a note that does not record the temptation has hidden the hardest decision on the page.**',
  '⚠ And **report the figure you got wrong, in the direction you got it wrong.** _It came back nineteen higher, found in forty minutes._ **A conservative figure that is tested and comes back higher is the strongest event in the life of an unsolicited proposal** — **and it cannot be arranged, only chosen in advance.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write page 1 of your own proposal (120 words or more).'));
out.push(p('**The paragraph.** **______________ spend ______________ on ______________, and this has been the case since ______________.** ⚠ **______________ words.**   **The second paragraph.** **Of the ______________, ______________ were ______________; the ______________ is approved by ______________ and has never been queried.**   **What I took out.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two figures and a date in the first sentence',
  'No remedy anywhere on the page',
  'The procedure that keeps it invisible, named',
  'No sentence that is a fact about the reader',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, flat, and the room says which figure it would test and whom it would ask.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the paragraph, the second paragraph, what you took out, why the date is there, the sentence you did not write, the figure you got wrong, what the dispute did, and what is not on page 1.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: two figures and a date, no remedy on the page, and no sentence that is a fact about the reader.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many first paragraphs named a remedy?** **Seven of ten, four of them in the first six words** — **and in six of the seven the remedy came back two paragraphs later, which is where it belongs.** **Then: which figure would the reader test, and whom would they ask?** **Eight of ten could name the person.** **Then Mr Zeidan reading the first paragraph twice.**'));
out.push(hw('**Write the first paragraph of your proposal and give it to one colleague who is not the reader.** ⚠ **Then the harder half: ask them which figure they would test and send you to check.** **In this class six of ten were sent to check a figure and four found their own figure was wrong, three of them in the conservative direction.** **Bring the paragraph and the corrected figure.** **22.2 costs the thing that is already happening**, so bring the arithmetic you have, however rough.'));

// ===================== 22.2 =====================
out.push(pb());
out.push(h2('22.2  The cost of doing nothing, costed'));
out.push(p('**Function:** costing the thing that is already happening   ·   **Grammar:** the arithmetic shown, and never totalled   ·   **Pronunciation:** the figures read as a list, not as a climax'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the thing you named last week, and what it costs in a year.** ⚠ **In person-days, movements, pages or visits** — **not in money, which nobody in the room can price and everybody will dispute.** **In this class nine of ten could produce the arithmetic in under two minutes and eight had never done it** — **and your teacher writes the nine sums on the board, in full, with the multiplication showing.**'));
out.push(board('Three people, four days, twelve months.', '144 person-days — and what they buy.'));
out.push(p('**b**  Which two show their arithmetic? **1** _This is costing us a great deal of time every year._  **2** _Three people, four days a month, twelve months: 144 person-days, at the office\'s own grade._  **3** _The inefficiency is substantial._  **4** _Forty-five duplicate movements were written off last year; each is approved by the depot manager, which takes about twenty minutes, so the approvals are fifteen hours._  **5** _The total annual cost to the business is enormous._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide you must never do with the figures?   **A** show them   **B** **total them** — because a total invites an argument about the weakest item   **C** repeat them'));
out.push(p('**b**  Listen again. **1** Why does Mrs Khoury say a total is dangerous?   **2** What does Mr Attar say the 144 days buy?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  Four sums, and no total', [
  ['Ms Huda', 'Mr Attar has costed the thing that is already happening.'],
  ['Mr Attar', '⚠ **Four sums and no total, and the no total is the part that took me three drafts.** **Three people, four days a month, twelve months: a hundred and forty-four person-days at the office\'s own grade.** **Forty-five duplicate write-offs.** **Fifteen hours of the depot manager\'s approvals.** **And two days added to the annual stock count because the ledger disagrees with the bays.**'],
  ['Ms Huda', 'Why no total?'],
  ['Mrs Khoury', '⚠ **Because a total is a single figure and a reader attacks the weakest item in it, which is 20.3 pointed at arithmetic.** **My two days on the stock count is the softest of his four** — **and a reader who knocks that down has knocked down a total, where he cannot knock down four separate sums by disputing one of them.**'],
  ['Mr Shihabi', 'So the weakest sum should come out.'],
  ['Mr Attar', '⚠ **It stays and it is labelled, which is the other half of the method.** **_The first three I can show from your own records; the fourth is my estimate and I have put my working beside it._** **A reader who is told which figure is soft will test that one and accept the other three** — **and a reader who is not told will test all four and trust none.**'],
  ['Mrs Oueidat', 'And in money?'],
  ['Mrs Khoury', '⚠ **Not in money, and the room will want money because money sounds serious.** **A money figure needs a rate, and a rate is a decision somebody else makes** — **so a proposal that prices anything has invited the reader to argue about the rate instead of about the hundred and forty-four days, which is a figure nobody in the building can dispute.**'],
  ['Dr Qabbani', 'Does the reader not do the money himself?'],
  ['Mr Attar', '⚠ **He did it in front of me with a pencil, and he used a rate I would never have guessed.** **He loaded it with the agency cover the office uses in August** — **and that is the point: he reached a figure I could not have produced, and because he produced it he was not arguing with it.**'],
  ['Mrs Tarabishi', 'What do the hundred and forty-four days buy?'],
  ['Mr Attar', '⚠ **Eleven real errors last year, and this is the paragraph I nearly left out.** **The hand reconciliation is not pure waste: it catches genuine short deliveries, eleven of them, two of which were large** — **and a proposal that calls the whole of it waste is wrong, and will be corrected by the first person who has ever done the work.**'],
  ['Mrs Khoury', '⚠ **Which is the honest form of a cost of doing nothing, and it is the half almost nobody writes.** **Name what the present arrangement buys, in figures, and say how your remedy keeps it** — **because the reader is not weighing your remedy against zero: they are weighing it against something that works badly and does work.**'],
  ['Mr Tayara', 'Mine would be four of nine science periods.'],
  ['Mrs Khoury', '⚠ **Then the sum is the periods and the cost is the cover.** **Four collisions a week, thirty-two weeks, one cover teacher each: a hundred and twenty-eight cover periods** — **and what the present arrangement buys is that the laboratory is never empty, which is true and which your proposal has to keep.**'],
  ['Mrs Rizk', 'How far back do you go?'],
  ['Mr Attar', '⚠ **One year, and I had wanted nine.** **Nine years is a bigger figure and a weaker document, because a reader who is shown nine years is being shown a decade of his own signature** — **and 22.1 says the date goes in once, as information, and the arithmetic stays inside a year the records can prove.**'],
  ['Mrs Ajouz', 'Where do the records come from?'],
  ['Mrs Khoury', '⚠ **The write-off sheets and the office\'s own day-book, which is why the figures survived being tested.** **Every one of the first three sums is from a document Mr Zeidan already owns** — **and that is the difference between a costing and an allegation: he can check all three without asking Mr Attar for anything.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the pencil.** **He wrote his own money figure in the margin of my second page, from my days and his rate, and then he read it out to me** — **and I understood that my job had been to hand him arithmetic he could finish, and that if I had finished it for him he would have spent the meeting correcting my rate.**'],
]));
out.push(sp());
out.push(box('Language box – the cost of doing nothing', [
  '**Show the arithmetic, in full, with the multiplication visible.** ⚠ **_Three people, four days a month, twelve months: a hundred and forty-four person-days, at the office\'s own grade._** **A reader who can see the multiplication can change one number in it** — **which is what you want, because changing a number is taking part.**',
  '**Never total them.** ⚠ **A total is a single figure and a reader attacks the weakest item in it, which is 20.3 pointed at arithmetic** — **and four separate sums cannot be knocked down by disputing one.**',
  '**Label the soft figure as soft.** ⚠ **_The first three I can show from your own records; the fourth is my estimate and my working is beside it._** **A reader who is told which figure is soft tests that one and accepts the other three** — **and a reader who is not told tests all four and trusts none.**',
  '**Not in money.** ⚠ **A money figure needs a rate and a rate is somebody else\'s decision** — **so pricing it invites an argument about the rate instead of about the days.** **The reader will do the money with a pencil, using a rate you could not have guessed, and will not argue with a figure he produced himself.**',
  '**Name what the present arrangement buys.** ⚠ **_The hand reconciliation catches genuine short deliveries: eleven last year, two of them large._** **The reader is not weighing your remedy against zero** — **and a proposal that calls the whole of it waste will be corrected by the first person who has ever done the work.**',
  '**And keep the arithmetic inside one year the records can prove.** ⚠ **Nine years is a bigger figure and a weaker document, because it shows the reader a decade of his own signature** — **and the date belongs in 22.1, once, as information.**',
  '**Pronunciation.** 🔊 **Track 22.4** **Read the four sums as a list, flat, with the same stress on each, and no rise before the last.** ⚠ **A rise before the fourth figure makes it a climax and tells the reader that the four add up to something** — **which is the one thing the page is built not to say.**',
  '**Practise:** Cost it, and do not total it. **1** three people, four days, twelve months  **2** forty-five write-offs  **3** the soft figure, labelled  **4** what the present arrangement buys  **5** one year, not nine',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B turns it into **a sum with its multiplication showing**, says **whether it is hard or soft**, and names **what the present arrangement buys.** ⚠ **Two rows on each card are already sums** — **and there B says which of the two is the soft one.** Change cards.'));
out.push(table(['Card A – the claim as written', 'Card B – the claim as written'], [
  ['_This is costing us a great deal of time._', '_The inefficiency is substantial._'],
  ['_⚠ Three people, four days a month, twelve months._', '_⚠ Forty-five write-offs, each approved in twenty minutes._'],
  ['_The total annual cost is enormous._', '_We are losing money on this every month._'],
  ['_⚠ Two days added to the stock count — my estimate._', '_⚠ Four collisions a week, thirty-two weeks, one cover each._'],
  ['_The hand reconciliation is pure waste._', '_Nobody gains anything from the present system._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the sum, hard or soft, and what the arrangement buys. ⚠ **Rows 2 and 4 on both cards are sums already** — **and rows 4 are the soft ones, which the room must label rather than remove.** **Rows 5 are the pair the cycle turns on**: both call the present arrangement waste, **and both are wrong, because the hand reconciliation catches eleven real errors and the double-booked laboratory is never empty.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Cost **your own thing**: three or four sums with the multiplication showing, one of them labelled as your estimate, and **one paragraph on what the present arrangement buys.** ⚠ **No total and no money.** **In this class seven of ten produced a total on the first attempt and six put a money figure on it** — **and all six rates were guesses, which their partners established in under a minute by asking where the rate came from.**'));
out.push(p('**b**  Swap. Your partner reads **your sums** and asks **which document each one comes from.** ⚠ **Then the harder question: what does the present arrangement buy, and does your remedy keep it?** — **and in this class four students discovered that their remedy loses something the present arrangement provides, which is the most useful hour in the unit.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar has costed the thing that is already happening: four sums and no total, and the no total is the part that took three drafts. Three people, four days a month, twelve months, which is a hundred and forty-four person-days at the office\'s own grade; forty-five duplicate write-offs; fifteen hours of the depot manager\'s approvals; and two days added to the annual stock count because the ledger disagrees with the bays. Mrs Khoury asked why no total, and because a total is a single figure and a reader attacks the weakest item in it, which is 20.3 pointed at arithmetic, and the two days on the stock count is the softest of the four. Mr Shihabi said so the weakest sum should come out, and Mr Attar said it stays and it is labelled: the first three can be shown from the reader\'s own records and the fourth is an estimate with its working beside it, because a reader who is told which figure is soft will test that one and accept the other three. Mrs Oueidat asked about money, and Mrs Khoury said not in money, because a money figure needs a rate and a rate is a decision somebody else makes, so pricing it invites an argument about the rate instead of about the days. Dr Qabbani asked whether the reader does not do the money himself, and Mr Attar said he did it in front of him with a pencil and used a rate he would never have guessed, loaded with the agency cover the office uses in August, and because he produced it he was not arguing with it. Mrs Tarabishi asked what the hundred and forty-four days buy, and eleven real errors last year, two of them large, which is the paragraph he nearly left out. Mrs Khoury said that is the honest form of a cost of doing nothing and it is the half almost nobody writes, because the reader is not weighing the remedy against zero. Mr Tayara said his would be four of nine science periods, and then the sum is the periods and the cost is the cover, a hundred and twenty-eight cover periods, and what the arrangement buys is that the laboratory is never empty. Mrs Rizk asked how far back to go, and one year, because nine years is a bigger figure and a weaker document. Mrs Mouawad said the records are the write-off sheets and the office\'s own day-book, which is why the figures survived being tested. And Mr Attar said the thing he will take away is the pencil, and that his job had been to hand the reader arithmetic he could finish._'));
out.push(p('**Listener task:** write one of your partner\'s sums, say whether it is hard or soft, and name what the arrangement buys.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read page 2 of Mr Attar\'s proposal. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _page 2 of the proposal: what the present arrangement costs, and what it buys_ · **11 November**',
  '**1 · The reconciliation itself.** **Three people, four days a month, twelve months.** ⚠ **A hundred and forty-four person-days a year, at the office\'s own grade.** **The four days are the days recorded in the office day-book as _reconciliation_, and the day-book is in Mr Fattal\'s cupboard.**',
  '**2 · The write-offs.** **Forty-five of the ninety-one movements written off in the year to June were duplicates created when a lorry was re-routed between depots.** ⚠ **The figure is Mrs Mouawad\'s and not mine: I had said twenty-six, from the depot\'s own summary, and she found forty-five in the sheets in about forty minutes.**',
  '**3 · The approvals.** **Each write-off is approved by the depot manager.** ⚠ **Forty-five approvals at about twenty minutes each is fifteen hours of a manager\'s year** — **and the twenty minutes is Mr Fattal\'s own figure, given to me on the telephone when I asked him how long one takes.**',
  '**4 · The stock count.** **My estimate, and the only soft figure on this page.** ⚠ **Two days added to the annual count because the ledger and the bays disagree.** **My working: the count took nine days in 2023 and seven in 2021, and the difference is the reconciliation of the duplicates** — **and I cannot prove that the whole two days is this and not something else.**',
  '**What these four are not.** **They are not a total and I have not added them.** ⚠ **A hundred and forty-four days, forty-five movements, fifteen hours and two days are four different things measured in three different units** — **and a single figure made out of them would be mine rather than yours.**',
  '**What the present arrangement buys, and it is not nothing.** **Eleven genuine short deliveries were found by the hand reconciliation last year.** ⚠ **Two of the eleven were large, and one of those two was recovered from the haulier.** **The office is not doing something pointless: it is doing something that works and costs four days a month.**',
  '**What any remedy has to keep.** **Those eleven.** ⚠ **A remedy that removes the duplicates and also removes the detection of short deliveries would cost the business more than the present arrangement does** — **and that is the test I should like applied to anything I propose, including what is on page 3.**',
  '**And where every figure on this page comes from.** **The day-book, the write-off sheets, Mr Fattal\'s telephone answer, and two annual counts.** ⚠ **All four are documents you already hold** — **and nothing on this page needs me in order to be checked.**',
  '**And one figure I have left out on purpose.** **What the duplicates cost in stock that was not where the ledger said it was.** ⚠ **Three of the forty-five duplicates ended with a pallet counted twice and a bay found short in August, and I cannot tell from the sheets whether the stock was moved, sold or never delivered** — **so there is a fifth cost and I am not putting a number on it, because the number would be a guess dressed as arithmetic and the four above it are not.**',
]));
out.push(item('1', 'Whose figure is the forty-five, and what had Mr Attar said first?'));
out.push(item('2', 'Which figure does he label as soft, and what working does he give for it?'));
out.push(item('3', 'What does he say the present arrangement buys, and what test does he ask for?'));
out.push(writers([
  'A costing page: **each sum numbered, with its multiplication showing** → **whose figure each one is** → **the soft one, labelled, with its working** → **what the four are not** → **what the present arrangement buys, in figures** → **what any remedy must keep** → **and where every figure comes from.**',
  '⚠ **Number the sums and show the multiplication.** _Three people, four days a month, twelve months: a hundred and forty-four person-days._ **A reader who can see the multiplication can change one number in it** — **and changing a number is taking part, which is the whole object of the page.**',
  '**Attribute every figure to a person or a document.** ⚠ _The twenty minutes is Mr Fattal\'s own figure, given to me on the telephone._ **An attributed figure is checkable without you** — **and a page of attributed figures cannot be answered by doubting the writer, which is the first thing an unsolicited reader reaches for.**',
  '**Label the soft figure and give the working you have.** ⚠ _My estimate, and the only soft figure on this page; I cannot prove the whole two days is this and not something else._ **The sentence that admits the limit is what makes the other three unarguable.**',
  '⚠ And **say what the present arrangement buys, in figures, and what your remedy must keep.** _Eleven genuine short deliveries, two of them large._ **A costing that calls the present arrangement waste is wrong and will be corrected by the first person who has ever done the work** — **and the test you ask to be applied to your own remedy is the sentence that makes you a colleague rather than a critic.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the costing page (120 words or more).'));
out.push(p('**1 · ______________.** **______________, ______________, ______________: ______________.** ⚠ **The figure is ______________\'s and not mine.**   **2 · ______________.** **______________.**   **3 · ______________.** **My estimate, and the only soft figure on this page.** ⚠ **My working: ______________.**   **What these are not.** **They are not a total.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every sum with its multiplication visible',
  'Every figure attributed to a document or a person',
  'One figure labelled soft, with its working',
  'What the present arrangement buys, in figures',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the paragraph on what the present arrangement buys**, and the room says whether the remedy keeps it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole costing page (260 words or more): the numbered sums, the attributions, the soft figure with its working, what the four are not, what the arrangement buys, what any remedy must keep, and where every figure comes from.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the multiplication visible in every sum, no total and no money figure, and one paragraph on what the present arrangement buys.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many produced a total on the first attempt?** **Seven of ten, and six put a money figure on it** — **and all six rates were guesses, which their partners established by asking where the rate came from.** **Then: what does the present arrangement buy?** **Four students found that their remedy loses something it provides, which is the most useful hour in the unit.** **Then the pencil in the margin.**'));
out.push(hw('**Cost your own thing in three or four sums and take them to the person who does the work.** ⚠ **Then the harder half: ask that person what the present arrangement catches that nothing else would.** **In this class eight of ten asked and seven were told something they had not known, and two of the seven abandoned the proposal they had been writing, which is a good outcome and should be said so.** **Bring the sums and what you were told.** **22.3 names the ask in one sentence**, so bring the one thing you actually want.'));

// ===================== 22.3 =====================
out.push(pb());
out.push(h2('22.3  The ask, in one sentence, early'));
out.push(p('**Function:** naming what you are asking for in one sentence, early   ·   **Grammar:** the ask that is inside the reader\'s own power   ·   **Pronunciation:** the ask said once, with no softening before it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **what you are actually asking for, in one sentence.** ⚠ **One sentence, and your teacher stops you at the second.** **In this class six of ten could not do it in one and four were asking for something the reader has no power to give** — **and your teacher writes the ten asks on the board with the name of the person who would have to say yes beside each.**'));
out.push(board('Four weeks of my own time and read access.', 'Mr Zeidan, alone, this month.'));
out.push(p('**b**  Which two are one ask, inside one reader\'s power? **1** _I am asking for four weeks of my own time and read access to the depot database._  **2** _I should like us to review our systems and consider a modernisation programme._  **3** _I am asking for one afternoon a week until March, and for the day-book to be left in the office rather than the cupboard._  **4** _I am asking for a new reconciliation module, a licence, and a decision about the eleven depots._  **5** _I hope we can find a way forward together on this._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the ask must be?   **A** large enough to be worth the reading   **B** **the smallest thing that tests the proposal**, inside one reader\'s power, in one sentence   **C** flexible'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say an ask that needs two sentences is?   **2** Where does Mr Attar say his ask sits, and why there?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  The smallest thing that tests it', [
  ['Ms Huda', 'What is Mr Attar asking for?'],
  ['Mr Attar', '⚠ **Four weeks of my own time and read access to the depot database.** **One sentence, twelve words, and both halves are inside Mr Zeidan\'s own power** — **the four weeks because he signs my section\'s time, and the access because the database is his cost centre and not the depot\'s.**'],
  ['Mrs Khoury', 'And the first version?'],
  ['Mr Attar', '⚠ **A module, a licence and a decision about the eleven depots, and that is three asks wearing one sentence.** **Mrs Khoury asked me who would say yes to each** — **and the answers were Mr Zeidan, the board, and a committee that meets twice a year, which means the proposal would have sat for five months before anybody could refuse it.**'],
  ['Mrs Oueidat', 'So the ask shrank.'],
  ['Mrs Khoury', '⚠ **The ask became the smallest thing that tests the proposal, which is the whole cycle and is not the same as the smallest thing he could ask for.** **Four weeks produces a figure: either the duplicates can be identified from the table structure or they cannot** — **and a test that can fail is the only ask a careful reader has ever said yes to.**'],
  ['Dr Qabbani', 'An ask that cannot fail?'],
  ['Mr Attar', '⚠ **A review.** **_I should like us to review our systems_ cannot fail, costs nothing to agree to, and produces a meeting** — **and Mr Zeidan told me he has agreed to eleven reviews in four years and can name two that produced a document.**'],
  ['Mrs Tarabishi', 'Why one sentence?'],
  ['Mrs Khoury', '⚠ **Because an ask that needs two sentences is two asks, and the reader will grant the easier one.** **It is 20.3 again, from the other side of the desk** — **and a writer who has two things to ask for must choose, exactly as a refuser must choose one reason.**'],
  ['Mr Shihabi', 'Mine needs two: an earlier deadline and a second sub.'],
  ['Mrs Oueidat', '⚠ **Then it needs one, and the room should watch which one he picks.** **The deadline is inside the editor\'s power and the second sub is a post** — **and a post is a decision for somebody who is not reading your proposal, so asking for it in the same sentence has sent your deadline to the same place.**'],
  ['Mr Tayara', 'Where does the ask go?'],
  ['Mr Attar', '⚠ **First line of page 3, and Mr Zeidan said he looked for it.** **He read the observation and the arithmetic and then went looking for what I wanted, which he said he does at the end of page 1 and then at the top of each page after it** — **so the ask is where a reader looks, and not where a writer builds up to.**'],
  ['Mrs Rizk', 'Not at the end?'],
  ['Mrs Khoury', '⚠ **Never at the end, and three students in this room have it at the end.** **A reader who reaches the last paragraph to find out what is wanted has spent the whole document guessing** — **and a reader who is guessing is composing a refusal, which is 20.6 pointed at your own page.**'],
  ['Mrs Ajouz', 'Does the ask name the date?'],
  ['Mr Attar', '⚠ **It names mine and not his.** **_Four weeks, which I should take between the eleventh of this month and the ninth of next._** **A date he can diary and refuse** — **and I did not write _at your convenience_, which is 20.4: an alternative with no date in it is not an alternative.**'],
  ['Mrs Tarabishi', 'And if he says yes to half?'],
  ['Mr Attar', '⚠ **He did, in the first meeting, and the half he said yes to was the half I had not expected.** **Read access at once, the four weeks in January** — **and because the ask was one sentence with two checkable halves, the halving was his and not a negotiation, and I had the access the same afternoon.**'],
  ['Mrs Oueidat', 'And the ask itself — what is it a sentence about?'],
  ['Mr Attar', '🔊 ⚠ **It is a sentence about me and not about the business and not about the business.** **Four weeks of my time and read access to a database: nothing in it changes anybody\'s post, budget or procedure** — **and the three drafts in which I asked for the module were drafts in which the first decision I had given him was somebody else\'s to make.**'],
]));
out.push(sp());
out.push(box('Language box – the ask', [
  '**One sentence.** ⚠ **_I am asking for four weeks of my own time and read access to the depot database._** **An ask that needs two sentences is two asks and the reader will grant the easier one** — **which is 20.3 from the other side of the desk.**',
  '**Inside the reader\'s own power.** ⚠ **The four weeks because he signs that section\'s time; the access because the database is his cost centre.** **An ask that needs a board, a committee or a post has been sent somewhere else** — **and in this class four of ten asks were outside the reader\'s power and two of the four were outside anybody\'s.**',
  '**The smallest thing that tests the proposal, which is not the smallest thing you could ask for.** ⚠ **Four weeks produces a figure: either the duplicates can be identified from the table structure or they cannot** — **and a test that can fail is the only ask a careful reader has ever said yes to.**',
  '**So never ask for a review.** ⚠ **_I should like us to review our systems_ cannot fail, costs nothing to agree to and produces a meeting** — **and one reader in this unit has agreed to eleven reviews in four years and can name two that produced a document.**',
  '**Put it where the reader looks: the end of page 1, or the first line of a page.** ⚠ **Never at the end.** **A reader who reaches the last paragraph to find out what is wanted has spent the document guessing** — **and a reader who is guessing is composing a refusal.**',
  '**And name your own date, not the reader\'s convenience.** ⚠ **_Four weeks, which I should take between the eleventh of this month and the ninth of next._** **A date he can diary and refuse** — **where _at your convenience_ is 20.4: an alternative with no date in it is not an alternative.**',
  '**Pronunciation.** 🔊 **Track 22.6** **Say the ask once, flat, with nothing before it.** ⚠ **_I wonder whether it might be possible to_ puts six words of softening in front of twelve words of content** — **and the softening is heard as doubt about the ask, which is the only part of the document the reader is going to decide about.**',
  '**Practise:** One sentence, inside his power. **1** four weeks and read access  **2** one afternoon a week until March  **3** a review, refused  **4** two asks, choose one  **5** your own date, named',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the ask from the card. B says **who would have to say yes**, says **whether it is one ask or two**, and rewrites it as **the smallest thing that tests the proposal.** ⚠ **Two rows on each card are already one ask inside one reader\'s power** — **and there B says what the test would produce.** Change cards.'));
out.push(asks([
  ['_A module, a licence and a decision about eleven depots._', '⚠ **Three people, one of them a committee**', '**Five months before a refusal**'],
  ['_⚠ Four weeks of my own time and read access._', '⚠ **Mr Zeidan, alone**', '**Four weeks of a salary already paid**'],
  ['_I should like us to review our systems._', '⚠ **Nobody: it cannot fail**', '**A meeting, and no document**'],
  ['_⚠ One afternoon a week until March, and the day-book left in the office._', '⚠ **The depot manager, alone**', '**Twelve afternoons and a cupboard**'],
  ['_An earlier deadline and a second sub-editor._', '⚠ **The editor, and whoever signs posts**', '**The deadline goes where the post goes**'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** who says yes, one ask or two, and what the test produces. ⚠ **Rows 2 and 4 are already one ask inside one reader\'s power and the room must say what each test would produce** — **a figure in both cases, and in row 4 the figure is whether the day-book is used when it is reachable.** **Rows 3 and 5 are the pair the cycle turns on**: a review cannot fail, and a two-part ask sends its easy half after its hard one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your ask in one sentence**, name **the person who would have to say yes**, and say **what the test would produce.** ⚠ **Then strike the softening in front of it.** **In this class six of ten asks needed two sentences, four were outside the reader\'s power, and seven had softening in front of them** — **and the average softening was nine words, which is longer than three of the asks.**'));
out.push(p('**b**  Swap. Your partner reads **your ask** and says **whether it can fail.** ⚠ **Then the harder question: what is the smallest version of it that still tests your proposal?** — **and in this class five asks shrank, three of them by more than half, and one student found that his ask tested nothing at all.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar is asking for four weeks of his own time and read access to the depot database, which is one sentence of twelve words, and both halves are inside Mr Zeidan\'s own power: the four weeks because he signs that section\'s time and the access because the database is his cost centre and not the depot\'s. Mrs Khoury asked about the first version, and a module, a licence and a decision about the eleven depots, which is three asks wearing one sentence, and when she asked who would say yes to each the answers were Mr Zeidan, the board, and a committee that meets twice a year, so the proposal would have sat for five months before anybody could refuse it. Mrs Oueidat said so the ask shrank, and Mrs Khoury said the ask became the smallest thing that tests the proposal, which is not the same as the smallest thing he could ask for, because four weeks produces a figure and a test that can fail is the only ask a careful reader has ever said yes to. Dr Qabbani asked about an ask that cannot fail, and a review: it cannot fail, costs nothing to agree to and produces a meeting, and Mr Zeidan has agreed to eleven reviews in four years and can name two that produced a document. Mrs Tarabishi asked why one sentence, and because an ask that needs two sentences is two asks and the reader will grant the easier one, which is 20.3 from the other side of the desk. Mr Shihabi said his needs two, an earlier deadline and a second sub, and Mrs Oueidat said then it needs one, because the deadline is inside the editor\'s power and the second sub is a post, and asking for a post in the same sentence sends the deadline to the same place. Mr Tayara asked where the ask goes, and the first line of page 3, because Mr Zeidan said he looked for it at the end of page 1 and then at the top of each page after it. Mrs Rizk asked whether it goes at the end, and never at the end, and three students in the room have it at the end. Mrs Ajouz asked whether the ask names a date, and it names his and not the reader\'s: four weeks between the eleventh of this month and the ninth of next. Mrs Mouawad asked what happens if the reader says yes to half, and he did, and the half was the unexpected one: read access at once and the four weeks in January. And Mr Attar said the thing he will take away is that the ask is a sentence about him and not about the business._'));
out.push(p('**Listener task:** write your partner\'s ask, the name of the person who must say yes, and what the test would produce.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read page 3 of Mr Attar\'s proposal, as far as the ask. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _page 3, lines 1 to 4, and the note on how they got there_ · **18 November**',
  '**The ask, as sent, and it is the first line of the page.** _I am asking for four weeks of my own time and read access to the depot database._ ⚠ **Twelve words.** **Nothing before it and nothing softening it.**',
  '**The date, in the second line.** _Four weeks, which I should take between the eleventh of this month and the ninth of next, and which I should expect to report on in writing by the sixteenth._ ⚠ **My date and not his, and a reporting date so that the four weeks has an end he can hold me to.**',
  '**Who has to say yes, in the third line.** _Both halves are within your own signature: the four weeks because you sign this section\'s time, and the access because the database sits in your cost centre and not the depot\'s._ ⚠ **I checked both before I wrote the sentence, and the second one was wrong in my first draft.**',
  '**What the test would produce, in the fourth.** _At the end of the four weeks you will have a figure: the number of the forty-five duplicates that can be identified from the table structure alone, and the number that cannot._ ⚠ **A test that can fail.** **If the answer is nine of forty-five, the proposal is dead and the four weeks have cost you four weeks.**',
  '**The ask I had written for three drafts.** **A reconciliation module, a licence, and a decision about the eleven depots.** ⚠ **Three asks and three readers: you, the board, and a committee that meets twice a year** — **and a proposal that asks a reader for somebody else\'s decision has made its first request an act of delegation.**',
  '**What I took off the front of it.** **_I wonder whether it might be possible for me to_.** ⚠ **Nine words of softening in front of twelve words of ask** — **and the nine words say that I am not sure the twelve are reasonable, which is information the reader did not have until I gave it to them.**',
  '**Why it is at the top of a page and not at the end of the document.** **Because you told me where you look.** ⚠ **The end of page 1 and then the top of each page afterwards** — **and a reader who has to reach the last paragraph to find out what is wanted has spent the document guessing, and a guessing reader is composing a refusal.**',
  '**And what the ask does not contain, which is on the next page.** **Everything that would change anybody\'s post, budget or procedure.** ⚠ **The ask is a sentence about me** — **four weeks of a salary you are already paying and read access to a database you already own.**',
  '**And what I shall do with the four weeks, in one line, because you will ask.** **Read the movements table against the bay sheets for the eleven depots, month by month, for the year to June.** ⚠ **It is forty-four depot-months and about three hours each** — **which is where the four weeks comes from, and it is the only estimate in the ask.**',
]));
out.push(item('1', 'What four things do the first four lines of page 3 contain?'));
out.push(item('2', 'Why does he say the three-part ask was an act of delegation?'));
out.push(item('3', 'What did he take off the front of the ask, and what did those words tell the reader?'));
out.push(writers([
  'The ask: **the sentence itself, first line, counted** → **your date, with a reporting date** → **who has to say yes, checked** → **what the test would produce, including the failure** → **the ask you had written before** → **the softening you took off** → **why it is where it is** → **and what the ask does not contain.**',
  '⚠ **Quote the ask and count the words.** _Twelve words. Nothing before it and nothing softening it._ **A writer who cannot quote their own ask has not got one** — **and the count is what exposes the nine words of apology that were in front of it.**',
  '**State what the test would produce, including the result that kills the proposal.** ⚠ _If the answer is nine of forty-five, the proposal is dead and the four weeks have cost you four weeks._ **An ask that cannot fail is a review** — **and the sentence that names the failure is the one that makes a careful reader say yes.**',
  '**Say who signs, and say that you checked.** ⚠ _Both halves are within your own signature, and the second one was wrong in my first draft._ **An ask inside the wrong person\'s power is a delay dressed as a request** — **and the admission that you checked and were wrong once is worth more than a confident assertion.**',
  '⚠ And **end on what the ask does not contain.** _The ask is a sentence about me: four weeks of a salary you are already paying and read access to a database you already own._ **That sentence is the hinge between this cycle and the next** — **and a reader who reaches it has been given nothing to refuse except you.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first four lines of your own page 3 (120 words or more).'));
out.push(p('**The ask.** **I am asking for ______________.** ⚠ **______________ words.**   **The date.** **______________, which I should take between ______________ and ______________, and report on by ______________.**   **Who says yes.** **______________ is within your own signature, because ______________.**   **What the test produces.** **At the end you will have ______________.** ⚠ **If ______________, the proposal is dead.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One sentence, and the word count beside it',
  'Your own date, with a reporting date',
  'The name of the person whose signature it is',
  'The result that would kill the proposal',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their ask**, flat, and the room says who would have to say yes and whether it can fail.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the ask, the date, the signature, the test and its failure, the ask you had written before, the softening you removed, why it sits where it sits, and what it does not contain.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one sentence with its word count, the name of the person who signs, and the result that would kill the proposal.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Three counts on the board.** **How many asks needed two sentences?** **Six of ten.** **How many were outside the reader\'s power?** **Four, and two of those outside anybody\'s.** ⚠ **And how many had softening in front of them?** **Seven, averaging nine words** — **which is longer than three of the asks, and the room should hear the nine words read out and then the ask read out alone.**'));
out.push(hw('**Write your ask and take it to somebody who knows your organisation\'s signatures.** ⚠ **Then the harder half: ask them whether the person you have named can actually say yes alone.** **In this class five of ten were told no and three found that the real signature belonged to somebody they had never written to.** **Bring the ask and the name.** **22.4 says what you are not asking for**, so bring the thing your reader would most fear this proposal is really about.'));

// ===================== 22.4 =====================
out.push(pb());
out.push(h2('22.4  What I am not asking for'));
out.push(p('**Function:** saying what you are not asking for, and meaning it   ·   **Grammar:** the declared exclusion that makes the ask credible   ·   **Pronunciation:** the exclusion read as a list of facts'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **what your reader will fear this proposal is really about.** ⚠ **Fear, not object to.** **In this class nine of ten named a post, a budget line or a procedure that is somebody\'s standing** — **and your teacher writes the ten fears on the board, because every one of them has to appear in somebody\'s exclusion list.**'));
out.push(board('What he feared: a system, a licence, eleven depots.', 'What the list said: none of the four.'));
out.push(p('**b**  Which two exclusions cost the writer something? **1** _I am not asking for a new system._  **2** _I am not asking for a decision about the other ten depots, and if the four weeks works I shall not ask for one before next year._  **3** _I am not asking for anything unreasonable._  **4** _I am not asking for Mrs Lattouf\'s four days to be removed from her job: if the duplicates go, the four days become the stock-count audit, and she runs it._  **5** _I am not asking for much._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the exclusion list must contain?   **A** everything you can think of   **B** **the thing the reader fears, and one exclusion that costs you something**   **C** a reassurance'));
out.push(p('**b**  Listen again. **1** What did Mr Zeidan say the list was the reason for?   **2** Which exclusion does Mr Attar say cost him something, and what?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  Four things I am not asking for', [
  ['Ms Huda', 'Mr Attar put a list in his proposal that he had never seen in one.'],
  ['Mr Attar', '⚠ **Four lines under the ask: no new system, no licence, nobody\'s post, and no decision about the eleven depots.** **Mr Zeidan told me three weeks later that the list is the reason he said yes** — **and that he had not known it was the reason at the time, which is the part I have been thinking about since.**'],
  ['Ms Huda', 'What was he afraid of?'],
  ['Mrs Khoury', '⚠ **Not of the four weeks, which cost him nothing he was not already paying.** **Of what the four weeks is the first step of** — **a module, a licence, a project, and eventually a decision about eleven depots that he would have to take to a board, having already said yes to the first sentence of it.**'],
  ['Mrs Oueidat', 'So the list is about the future.'],
  ['Mr Attar', '⚠ **It is about the next three asks and not about this one, and that is why it has to be written down.** **Every unsolicited proposal is read as the first instalment of something** — **and a reader who has no idea what the instalments are will refuse the first one, which is cheaper than finding out.**'],
  ['Dr Qabbani', 'And is the list true?'],
  ['Mr Attar', '⚠ **Three of the four are true for ever and one is true for a year, and I said which.** **If the four weeks works I shall want the module** — **so the line reads _I am not asking for a module now and I shall not ask for one before the stock count in February_, which is a date and not a promise.**'],
  ['Mrs Khoury', '⚠ **Which is the only honest form of an exclusion with a life in it.** **An exclusion that is not true is remembered: a reader who is told _no new system_ and receives a system in April has been told something false in writing** — **and the cost is not this proposal, it is the next three.**'],
  ['Mrs Tarabishi', 'Does an exclusion have to cost you something?'],
  ['Mrs Oueidat', '⚠ **One of them does, and this is the hardest sentence in the cycle.** **A list of four things nobody wanted is a courtesy, and reads as one.** **_I shall not ask for a decision about the other ten depots before next year_ costs him a year of the thing he most wants** — **and the reader can see that it costs him, which is why the list works.**'],
  ['Mr Shihabi', 'Mine is the second sub-editor.'],
  ['Mrs Khoury', '⚠ **Then the exclusion is the post, in those words, and it costs you the thing you went in for.** **_I am not asking for a second sub-editor and I am not asking for the vacancy to be held open_** — **and the second half is the one the editor is actually afraid of, which the room should notice: the fear is rarely the post, it is the precedent.**'],
  ['Mrs Ajouz', 'And the four days?'],
  ['Mr Attar', '⚠ **This is the line I did not write, and Mrs Lattouf is the reason it is now in the document.** **I wrote _nobody\'s post_, which is true and is not the same thing** — **and her four days a month are the visible part of her job, so a proposal that removes the reconciliation removes the thing her work is seen as, and _nobody\'s post_ does not touch that at all.**'],
  ['Mrs Rizk', 'Did she read it before you sent it?'],
  ['Mr Attar', '⚠ **She read the second draft and asked me one question.** **_What am I for, in February?_** **Neither of us had an answer** — **and the answer that is in the document now is the stock-count audit nobody has ever had time for, and she runs it, and she wrote that sentence and not I.**'],
  ['Mr Tayara', 'That is 22.7.'],
  ['Mrs Khoury', '⚠ **It is, and the room should notice that the cycle has arrived early because somebody read the draft.** **The exclusion list is written for the budget holder and the person it changes is somewhere else** — **and this is the one cycle in Book 2 where the fix was supplied by the person who was missing from the document.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the shape of the list now.** **Four exclusions, one of them with a date, one of them costing me a year, and one of them written by somebody who is not me** — **and the version I nearly sent had four lines of comfort in it and would have been read as four lines of comfort.**'],
]));
out.push(sp());
out.push(box('Language box – the declared exclusion', [
  '**The list goes under the ask and contains the thing the reader fears.** ⚠ **Not the four weeks: what the four weeks is the first instalment of.** **_No new system, no licence, nobody\'s post, no decision about the eleven depots._** **A reader who cannot see the instalments refuses the first one, because refusing is cheaper than finding out.**',
  '**An exclusion with a life in it carries a date and not a promise.** ⚠ **_I am not asking for a module now and I shall not ask for one before the stock count in February._** **Three of four exclusions are true for ever and one is true for a year** — **and the writer says which.**',
  '**An exclusion that is not true is remembered.** ⚠ **A reader told _no new system_ who receives a system in April has been told something false in writing** — **and the cost is not this proposal: it is the next three.**',
  '**One exclusion has to cost you something the reader can see.** ⚠ **A list of four things nobody wanted is a courtesy and reads as one.** **_I shall not ask for a decision about the other ten depots before next year_ costs a year of the thing the writer most wants.**',
  '**And the fear is rarely the post: it is the precedent.** ⚠ **_I am not asking for a second sub-editor and I am not asking for the vacancy to be held open._** **The second half is the one the reader is afraid of** — **and an exclusion list that names the post and not the precedent has missed the fear by one line.**',
  '**_Nobody\'s post_ does not cover the person whose work this changes.** ⚠ **Four days a month can be the visible part of somebody\'s job** — **and the sentence that covers it has to say what the four days become, and is better written by the person whose days they are.**',
  '**Pronunciation.** 🔊 **Track 22.8** **Read the four exclusions as a list of facts, flat, with no reassurance in the voice.** ⚠ **Warmth on an exclusion turns it into a promise** — **and a promise invites the reader to test it, where a flat list invites them to read the next line.**',
  '**Practise:** Exclude it, and mean it. **1** the system  **2** the licence, with a date  **3** nobody\'s post  **4** the precedent  **5** the exclusion that costs you a year',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the exclusion from the card. B says **whether it costs the writer anything**, and rewrites it so that it **names the fear, carries a date where it needs one, and costs something.** ⚠ **Two rows on each card already cost the writer something** — **and there B names what.** Change cards.'));
out.push(table(['Card A – the exclusion as written', 'Card B – the exclusion as written'], [
  ['_I am not asking for a new system._', '_I am not asking for anything unreasonable._'],
  ['_⚠ I shall not ask about the other ten depots before next year._', '_⚠ If the duplicates go, the four days become the audit, and she runs it._'],
  ['_I am not asking for much._', '_I am not asking you to change anything you do not want to change._'],
  ['_⚠ I am not asking for the vacancy to be held open._', '_⚠ I am not asking for the laboratory block to be mine to timetable._'],
  ['_I am not asking for a module._', '_Nobody\'s post is affected._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** does it cost anything, and the rewrite. ⚠ **Rows 2 and 4 on both cards cost the writer something and the room must name what** — **a year, a post\'s worth of standing, a precedent and a timetable.** **Rows 5 are the pair the cycle turns on**: one is an exclusion with a hidden date in it, **and _nobody\'s post is affected_ is true and does not cover the person whose four days these are.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **four exclusions**: the thing your reader fears, the precedent behind it, one with a date, and one that costs you something you can name. ⚠ **Then strike every exclusion that costs you nothing.** **In this class the average list had four lines and the average number that cost the writer anything was one** — **and three students had lists of five lines in which nothing was given up at all.**'));
out.push(p('**b**  Swap. Your partner reads **your list** and asks **which line is a comfort.** ⚠ **Then the harder question: who is the person whose work this changes, and is there a line about them?** — **and in this class seven of ten lists had no such line, and four of the seven writers could not name the person without looking something up.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar put four lines under his ask that he had never seen in a proposal: no new system, no licence, nobody\'s post, and no decision about the eleven depots, and Mr Zeidan told him three weeks later that the list is the reason he said yes, and that he had not known it was the reason at the time. Mrs Khoury asked what he was afraid of, and not of the four weeks, which cost him nothing he was not already paying, but of what the four weeks is the first step of: a module, a licence, a project, and a decision about eleven depots that he would have to take to a board having already said yes to the first sentence of it. Mrs Oueidat said so the list is about the future, and Mr Attar said it is about the next three asks and not about this one, because every unsolicited proposal is read as the first instalment of something and a reader who cannot see the instalments will refuse the first one. Dr Qabbani asked whether the list is true, and three of the four are true for ever and one is true for a year, and he said which: if the four weeks works he will want the module, so the line reads that he is not asking for one now and will not ask before the stock count in February, which is a date and not a promise. Mrs Khoury said that is the only honest form of an exclusion with a life in it, because an exclusion that is not true is remembered and the cost is the next three proposals. Mrs Tarabishi asked whether an exclusion has to cost you something, and Mrs Oueidat said one of them does, because a list of four things nobody wanted is a courtesy and reads as one. Mr Shihabi said his is the second sub-editor, and Mrs Khoury said then the exclusion is the post and the precedent, and the fear is rarely the post. Mrs Lattouf asked about the four days, and Mr Attar said that is the line he did not write: he had written nobody\'s post, which is true and is not the same thing, because her four days a month are the visible part of her job. Mrs Lattouf said she read the proposal before the second draft and asked him one question, what she is for in February, and neither of them had an answer, and the answer in the document now is the stock-count audit that nobody has had time for, and she runs it, and she wrote that sentence and not he. Mr Tayara said that is 22.7, and Mrs Khoury said it is, and the cycle has arrived early because somebody read the draft. And Mr Attar said the thing he will take away is the shape of the list now: four exclusions, one with a date, one costing him a year, and one written by somebody who is not him._'));
out.push(p('**Listener task:** write your partner\'s four exclusions and mark the one that costs them something.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the exclusion list as sent, and Mr Attar\'s note on it. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _the four exclusions, as sent, with the note_ · **25 November**',
  '**1 · The system.** _I am not asking for a new reconciliation module now, and I shall not ask for one before the stock count in February._ ⚠ **A date and not a promise, because if the four weeks works I shall want the module** — **and an exclusion that pretends otherwise is a sentence I should have to break in April.**',
  '**2 · The licence.** _I am not asking for any software to be bought, in this proposal or in the one I may write in February._ ⚠ **True for ever, as far as I can see.** **The work I am proposing uses read access to a database you already licence** — **and if a future proposal of mine needs a licence, it will say so on its first page.**',
  '**3 · The precedent, which is the one he was afraid of.** _I am not asking for the systems section to be given standing work in the depots, and nothing in this proposal creates a route by which that happens._ ⚠ **Mr Zeidan has three sections asking him for standing work in other people\'s areas** — **and until Mrs Khoury asked me what he was really afraid of, this line was not in the document.**',
  '**4 · The person whose work this changes, and she wrote this line.** _I am not asking for Mrs Lattouf\'s four days to be taken out of her job. If the duplicates go, the four days become the stock-count audit the office has never had time for, and she runs it._ ⚠ **My own version had said _nobody\'s post is affected_, which is true and covers nothing.**',
  '**What the list cost me.** **A year of the thing I most want.** ⚠ **If the four weeks produces the figure I expect, I shall sit on it from February until the stock count** — **and that is written down, in a document the reader keeps, which is the point.**',
  '**What Mrs Lattouf asked me.** **_What am I for, in February?_** ⚠ **Neither of us had an answer, and it took us two days and a conversation with Mr Fattal to get one** — **and the answer is better than the proposal was: the audit has been on the office\'s list since 2019 and nobody has ever had four days a month to do it.**',
  '**Why the list is not a courtesy.** **Because three of the four lines cost somebody something.** ⚠ **A list of four things nobody wanted reads as reassurance, and reassurance in an unsolicited document is heard as a sales voice** — **and Mr Zeidan has had eleven of those in four years.**',
  '**And what I had not understood about exclusions.** **That they are the only part of the proposal about the future.** ⚠ **Everything above them is this month: a figure, a sum, four weeks** — **and the reader is deciding about three years, which he cannot ask me about and which the list is the only place to answer.**',
]));
out.push(item('1', 'Which exclusion carries a date, and why does it have to?'));
out.push(item('2', 'What was the precedent the reader feared, and when did that line enter the document?'));
out.push(item('3', 'What did Mrs Lattouf ask, and what came out of it?'));
out.push(writers([
  'The exclusion list: **four lines under the ask** → **the one with a date, and why it needs one** → **the one that is true for ever** → **the precedent, in the reader\'s terms** → **the person whose work this changes, in their words** → **what the list cost you** → **and what you had not understood about exclusions.**',
  '⚠ **Name the precedent and not only the thing.** _Nothing in this proposal creates a route by which the systems section is given standing work in the depots._ **The fear is rarely the post or the licence** — **and a list that names the item and misses the precedent has missed the fear by one line.**',
  '**Put a date on the exclusion that cannot be permanent.** ⚠ _I shall not ask for a module before the stock count in February._ **An exclusion that is not true is remembered, and the cost is the next three proposals** — **and a date is the only honest form of an exclusion with a life in it.**',
  '**Let the person whose work changes write their own line.** ⚠ _If the duplicates go, the four days become the stock-count audit, and she runs it._ **_Nobody\'s post is affected_ is true and covers nothing** — **and the line that covers it cannot be written by the person who is removing the work.**',
  '⚠ And **say what the list cost you, in a unit the reader can count.** _A year of the thing I most want, written down in a document you keep._ **A list of four things nobody wanted is a courtesy** — **and the reader has had eleven courtesies in four years and can hear one in a line and a half.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your four exclusions (120 words or more).'));
out.push(p('**1 · ______________.** **I am not asking for ______________ now, and I shall not ask before ______________.** ⚠ **A date and not a promise.**   **2 · ______________.** **True for ever, as far as I can see.**   **3 · The precedent.** **Nothing in this proposal creates a route by which ______________.**   **4 · ______________, and ______________ wrote this line.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reader\'s fear, named as a precedent',
  'A date on every exclusion that cannot be permanent',
  'One line that costs the writer something countable',
  'A line about the person whose work this changes, in their words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the line that costs them something**, and the room says what it costs and whether it can be seen from outside.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the four exclusions, the one with a date, the precedent, the person whose work this changes, what the list cost you, and what you had not understood about exclusions.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the precedent named, a date on the exclusion that cannot be permanent, and one line that costs the writer something countable.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many exclusions in each list cost the writer anything?** **One, on average, and three lists of five gave up nothing at all** — **and those three should be read aloud, because a list that costs nothing is audible in a line and a half.** **Then: who is the person whose work this changes?** **Seven of ten lists had no line about them, and four writers could not name the person without looking it up.**'));
out.push(hw('**Take your exclusion list to the person whose work your proposal changes.** ⚠ **Then the harder half: ask them the question Mrs Lattouf asked, which is what they are for afterwards, and write down their answer in their words.** **In this class eight of ten asked, six were given an answer better than the one they had, and two were told that the proposal should not be sent, and both of those are in the key.** **Bring their words.** **22.5 answers _why you_ without a claim about yourself**, so bring the three occasions you would use.'));

// ===================== 22.5 =====================
out.push(pb());
out.push(h2('22.5  Why you, and no adjectives'));
out.push(p('**Function:** answering _why you_ without a claim about yourself   ·   **Grammar:** the answer made of occasions and figures   ·   **Pronunciation:** the occasion said as a date and a document'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **why you, and not somebody else.** ⚠ **Your teacher strikes every adjective as you say it.** **In this class eight of ten answered with a claim about themselves and the average number of adjectives in the first sentence was four** — **and the board carries what is left of the ten answers, which in three cases was nothing at all.**'));
out.push(board('I am thorough and I know the system well.', 'I did the reconciliation for two months in 2024.'));
out.push(p('**b**  Which two are occasions a reader can check? **1** _I have a good understanding of our systems._  **2** _I wrote the re-routing report of 14 March, which you have read._  **3** _I am well placed to look at this._  **4** _I did the reconciliation myself for two months in 2024 while Mrs Lattouf was on leave, so the four days is my own figure._  **5** _I am probably the best person to take this forward._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide _why you_ is answered with?   **A** experience, described   **B** **occasions and figures the reader can check**, with no adjectives anywhere   **C** enthusiasm'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say an adjective about yourself invites?   **2** What sentence does Mr Attar say made the answer credible?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  Three occasions and no adjectives', [
  ['Ms Huda', 'Why Mr Attar, and not somebody else?'],
  ['Mr Attar', '⚠ **Three occasions and no adjectives, and the three are on four lines of page 3.** **I wrote the re-routing report of 14 March, which he has read.** **I have read the depot system\'s table structure and can name the three tables and the field that duplicates.** **And I did the reconciliation myself for two months in 2024, while Mrs Lattouf was on leave.**'],
  ['Ms Huda', 'What was in the first draft?'],
  ['Mr Attar', '⚠ **_I have a good understanding of our systems and I am well placed to look at this._** **Thirteen words, four of them claims about me, and nothing a reader can do anything with** — **and Mrs Khoury asked what Mr Zeidan would check, and the answer is nothing, so he would have to decide whether to believe me, which is not a decision anybody makes in favour of a stranger.**'],
  ['Mrs Oueidat', 'Why does an adjective fail?'],
  ['Mrs Khoury', '⚠ **Because it invites a comparison the reader cannot make and you cannot win.** **_I am thorough_ asks him whether I am more thorough than the systems manager, whom he has known for nine years** — **and an occasion asks him nothing: it asks him to look at a report he has already read.**'],
  ['Dr Qabbani', 'And the two months of reconciliation?'],
  ['Mr Attar', '⚠ **That is the occasion that does the most work and I nearly left it out, because it is two months of clerical cover and I had thought it looked junior.** **It is the reason the four days is my own figure and not hearsay** — **and a reader who knows I have done the work myself does not have to decide whether I have understood it.**'],
  ['Mrs Tarabishi', 'Does the answer name anybody else?'],
  ['Mr Attar', '⚠ **It names two people, and this is the sentence Mrs Khoury made me write.** **_The write-off analysis would be better done by Mrs Mouawad, and the table work could be done by the systems manager; the reason I am asking is that I have done both the reconciliation and the table structure._** **A conjunction, and not a comparison.**'],
  ['Mrs Khoury', '⚠ **Which is the credible form of _why you_ and the room will find it counter-intuitive.** **A writer who names two people who could do part of it better has stopped competing and started describing an overlap** — **and an overlap is a fact about the work, where _best placed_ is a claim about a person that the reader has to adjudicate.**'],
  ['Mr Shihabi', 'And the limits?'],
  ['Mr Attar', '⚠ **Two lines, and they are 21.4 arriving in a proposal.** **_I have never worked in a depot and I have never taken part in a stock count._** **Both are relevant and both are findable** — **and the second one is the limit that matters, because the fourth of my four sums is about the stock count and I have never seen one.**'],
  ['Mr Tayara', 'That weakens the fourth sum.'],
  ['Mrs Khoury', '⚠ **It labels the fourth sum, which 22.2 had already done, and the two labels agree** — **and the room should notice that a document in which the soft figure and the writer\'s limit point at the same thing is a document that has been checked by its own writer.**'],
  ['Mrs Rizk', 'How long is the whole answer?'],
  ['Mr Attar', '⚠ **Six lines on page 3, after the ask and the exclusions.** **Three occasions, one conjunction, two limits** — **and no adjective about me anywhere in the three pages, which I know because I searched the file for the twelve I had used in the first draft.**'],
  ['Mrs Ajouz', 'Twelve?'],
  ['Mr Attar', '⚠ **Twelve, in three pages, and eleven of them were about me.** **_Thorough_, _well placed_, _ideally situated_, _keen_, _committed_, _efficient_** — **and the twelfth was about the depot office, which stayed, because _careful_ is a description of eleven errors found by hand and is doing work that a figure could not do on its own.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the search.** **I put the eleven adjectives into the search box one at a time, took each one out, and wrote in its place the occasion it had been standing in for** — **and in seven cases there was no occasion at all, which told me that seven of my eleven claims about myself had nothing underneath them.**'],
]));
out.push(sp());
out.push(box('Language box – why you', [
  '**Three occasions, each a date and a document.** ⚠ **_I wrote the re-routing report of 14 March, which you have read._** **_I have read the table structure and can name the three tables and the field that duplicates._** **_I did the reconciliation myself for two months in 2024._** **All three are checkable without asking you anything.**',
  '**No adjectives about yourself.** ⚠ **An adjective invites a comparison the reader cannot make and you cannot win: _I am thorough_ asks whether you are more thorough than somebody he has known for nine years** — **where an occasion asks him to look at a report he has already read.**',
  '**The occasion that looks junior is usually the one that works.** ⚠ **Two months of clerical cover is why the four days is your own figure and not hearsay** — **and a reader who knows you have done the work does not have to decide whether you have understood it.**',
  '**Name the people who could do part of it better, and use a conjunction.** ⚠ **_The write-off analysis would be better done by Mrs Mouawad and the table work by the systems manager; the reason I am asking is that I have done both._** **An overlap is a fact about the work** — **and _best placed_ is a claim the reader has to adjudicate.**',
  '**Two limits, both findable.** ⚠ **_I have never worked in a depot and I have never taken part in a stock count._** **And when the limit and the soft figure point at the same thing, the document has been checked by its own writer.**',
  '**And search your own file for your adjectives.** ⚠ **Take each one out and write in its place the occasion it was standing in for** — **and where there is no occasion, there was nothing underneath the claim, which in this unit was true of seven of eleven.**',
  '**Pronunciation.** 🔊 **Track 22.10** **Say each occasion with the stress on the date and the document, and none on _I_.** ⚠ **Stress on _I_ turns an occasion back into a claim** — **and the whole of this cycle is audible in that one syllable, which is why the room should hear both versions of the same sentence.**',
  '**Practise:** Occasion, not claim. **1** a report with a date  **2** a structure you can name  **3** work you have done yourself  **4** two people who could do part of it better  **5** two limits',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B replaces it with **the occasion it was standing in for** — or says **that there is no occasion underneath it.** ⚠ **Two rows on each card are occasions already** — **and there B says what a reader would check and where.** Change cards.'));
out.push(table(['Card A – the claim as written', 'Card B – the claim as written'], [
  ['_I have a good understanding of our systems._', '_I am well placed to look at this._'],
  ['_⚠ I wrote the re-routing report of 14 March._', '_⚠ I did the reconciliation for two months in 2024._'],
  ['_I am thorough and careful with figures._', '_I am keen to take this forward._'],
  ['_⚠ Mrs Mouawad would do the write-off analysis better._', '_⚠ I have never taken part in a stock count._'],
  ['_I am probably the best person for this._', '_I have a lot of experience in this area._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the occasion, or no occasion. ⚠ **Rows 2 and 4 on both cards are occasions already, and rows 4 are the two that do the hardest work** — **naming somebody who could do part of it better, and naming a limit.** **Rows 5 are the pair with nothing underneath them**: the room will try to supply an occasion, **and the useful finding is that it has to be supplied from the writer\'s life and cannot be supplied from the sentence.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your own _why you_**: three occasions with dates and documents, one conjunction naming who could do part of it better, and two limits. ⚠ **Then search your draft for adjectives about yourself and take every one out.** **In this class the drafts carried an average of nine such adjectives and the record was nineteen** — **and in six of ten cases at least half of them had no occasion underneath.**'));
out.push(p('**b**  Swap. Your partner reads **your three occasions** and says **where they would check each one.** ⚠ **Then the harder question: which of your occasions looks junior, and did you nearly leave it out?** — **and in this class five students had left out the work they had done with their own hands, all five because it looked junior.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked why Mr Attar and not somebody else, and three occasions and no adjectives, on four lines of page 3: he wrote the re-routing report of 14 March, which the reader has read; he has read the depot system\'s table structure and can name the three tables and the field that duplicates; and he did the reconciliation himself for two months in 2024 while Mrs Lattouf was on leave. Ms Huda asked what was in the first draft, and that he has a good understanding of the systems and is well placed to look at this, thirteen words with four claims about himself and nothing a reader can do anything with, because Mr Zeidan would have to decide whether to believe him, which is not a decision anybody makes in favour of a stranger. Mrs Oueidat asked why an adjective fails, and Mrs Khoury said because it invites a comparison the reader cannot make and the writer cannot win, since I am thorough asks whether he is more thorough than the systems manager, whom the reader has known for nine years. Dr Qabbani asked about the two months of reconciliation, and that is the occasion that does the most work and he nearly left it out because it is clerical cover and looked junior, and it is the reason the four days is his own figure and not hearsay. Mrs Tarabishi asked whether the answer names anybody else, and it names two people, which is the sentence Mrs Khoury made him write: the write-off analysis would be better done by Mrs Mouawad and the table work by the systems manager, and the reason he is asking is that he has done both the reconciliation and the table structure, which is a conjunction and not a comparison. Mrs Khoury said that is the credible form of why you, because a writer who names two people who could do part of it better has stopped competing and started describing an overlap. Mr Shihabi asked about the limits, and two lines, which are 21.4 arriving in a proposal: he has never worked in a depot and has never taken part in a stock count, and the second is the limit that matters because the fourth of his four sums is about the stock count. Mr Tayara said that weakens the fourth sum, and Mrs Khoury said it labels it, and the two labels agree. Mrs Rizk asked how long the whole answer is, and six lines on page 3, with no adjective about him anywhere in the three pages. Mrs Ajouz asked about the twelve, and twelve adjectives in three pages, eleven of them about himself. And Mr Attar said the thing he will take away is the search: he took each adjective out and wrote in its place the occasion it had been standing in for, and in seven cases there was no occasion at all._'));
out.push(p('**Listener task:** write your partner\'s three occasions and say where you would check each one.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the _why you_ section of Mr Attar\'s proposal and his note on the search. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _page 3, the six lines after the exclusions_ · _with the note on the search_ · **2 December**',
  '**Occasion one.** _I wrote the re-routing report of 14 March, which you have read and which is where the duplication is described._ ⚠ **A date, a document, and a reader who already has it.**',
  '**Occasion two.** _I have read the depot system\'s table structure, and the duplication is created by the delivery-note field in the movements table when a lorry is re-routed between depots._ ⚠ **Three tables and one field, all nameable** — **and a systems man who cannot name the field has not read anything.**',
  '**Occasion three, which I nearly left out.** _I did the reconciliation myself for two months in 2024, while Mrs Lattouf was on leave._ ⚠ **It looked junior to me and it is the occasion that does the most work** — **because the four days a month in my first paragraph is my own figure and not something I was told.**',
  '**Who could do part of it better.** _The write-off analysis would be better done by Mrs Mouawad, who found nineteen duplicates I had missed in forty minutes, and the table work could be done by the systems manager._ ⚠ **The reason I am asking is the conjunction: I have done both the reconciliation and the table structure, and neither of them has done both.**',
  '**The two limits.** _I have never worked in a depot and I have never taken part in a stock count._ ⚠ **The second matters: my fourth sum is about the stock count and I have never seen one** — **which is why that sum is labelled as an estimate on page 2, and the two labels agree.**',
  '**What I took out of the first draft.** **Twelve adjectives, eleven of them about me.** ⚠ **_Thorough_, _well placed_, _ideally situated_, _keen_, _committed_, _efficient_, and six more** — **and the twelfth stayed, because it was about the depot office and _careful_ is a description of eleven errors found by hand.**',
  '**How the search worked.** **One adjective at a time into the search box, out, and in its place the occasion it had been standing in for.** ⚠ **In seven of the eleven there was no occasion at all** — **and the seven are now not in the document, which means my first draft made seven claims about myself with nothing underneath them.**',
  '**And what I understand about _why you_ now.** **It is the only part of a proposal nobody asked for that is about the writer, and it must be the part with the least of the writer in it.** ⚠ **A reader deciding about four weeks of my time is deciding about me** — **and the way to let him do that is to hand him three things he can check and two he cannot, rather than a sentence he has to believe.**',
  '**And the one occasion I have not used.** **I corrected a figure of his in a meeting in June, in front of two other people, and I was right.** ⚠ **It is checkable, it is recent and it is about me being right against him** — **and an occasion that makes the reader the person who was wrong is not an occasion, whatever else it is.**',
]));
out.push(item('1', 'Which occasion did he nearly leave out, and why does it do the most work?'));
out.push(item('2', 'What does the conjunction say, and who does he name?'));
out.push(item('3', 'How did the search work, and what did it show about seven of the eleven?'));
out.push(writers([
  'The _why you_ section: **three occasions, each with a date and a document** → **the one that looks junior** → **who could do part of it better, as a conjunction** → **two limits, both findable** → **the adjectives you took out, counted** → **how the search worked** → **and what you now understand about the section.**',
  '⚠ **Make every occasion checkable without you.** _The re-routing report of 14 March, which you have read._ **An occasion the reader can verify costs them eleven seconds** — **and a claim they have to believe costs them a decision about a stranger, which is the one decision an unsolicited reader will not make.**',
  '**Keep the occasion that looks junior.** ⚠ _I did the reconciliation myself for two months in 2024._ **Clerical cover is why your central figure is yours and not hearsay** — **and five writers in this class had removed exactly that sentence, all five for the same reason.**',
  '**Name who could do part of it better, with a conjunction and not a comparison.** ⚠ _Mrs Mouawad found nineteen duplicates I had missed in forty minutes._ **The figure that makes somebody else look better is the figure that makes you credible** — **and it is the hardest sentence in the section to leave in.**',
  '⚠ And **count your adjectives and report the count.** _Twelve, eleven of them about me, and seven with no occasion underneath._ **The count is the discipline, and the arithmetic of it is the finding** — **because a writer who discovers that seven of their eleven claims had nothing beneath them has learnt something that no amount of advice about modesty would have taught.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own _why you_ (120 words or more).'));
out.push(p('**Occasion one.** **I ______________ on ______________, which ______________.**   **Occasion two.** **I have ______________, and ______________.**   **Occasion three, which I nearly left out.** **I ______________ myself for ______________.**   **Who could do part of it better.** ⚠ **______________ would be better done by ______________; the reason I am asking is that ______________.**   **The two limits.** **I have never ______________ and I have never ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three occasions, each with a date or a document',
  'One occasion done with your own hands',
  'A conjunction naming who could do part of it better',
  'No adjective about yourself anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their three occasions**, flat, and the room says where it would check each one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more): the three occasions, the one you nearly left out, the conjunction, the two limits, the adjectives you removed with their count, how the search worked, and what you now understand about the section.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three checkable occasions, one conjunction naming somebody else, and no adjective about the writer anywhere.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many adjectives about yourself were in the draft?** **An average of nine, and a record of nineteen** — **and in six of ten cases at least half had no occasion underneath them.** **Then: which occasion looked junior, and who had removed it?** **Five of ten had taken out the work they had done with their own hands.** **Then Mr Attar\'s search box, and the seven that went.**'));
out.push(hw('**Search your own draft for every adjective about yourself and take them out one at a time**, writing in the place of each the occasion it was standing in for. ⚠ **Then the harder half: count the ones with no occasion underneath, and keep that number.** **In this class the average was five of nine and two students found that every adjective they had used had an occasion behind it, both of whom had written the proposal twice before.** **Bring the count.** **22.6 writes the whole proposal**, so bring everything: the paragraph, the sums, the ask, the exclusions and the occasions.'));

// ===================== 22.6 =====================
out.push(pb());
out.push(h2('22.6  The whole proposal, assembled'));
out.push(p('**Function:** writing the unsolicited proposal   ·   **Grammar:** the fixed order, and what happens if the answer is no   ·   **Pronunciation:** the whole document read aloud in four minutes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your five pieces, in the order you would send them.** ⚠ **Observation, costing, ask, exclusions, occasions** — **and your teacher writes each room\'s order on the board.** **In this class four of ten put the ask first and two put the occasions first** — **and both orders are defensible and both were abandoned by their writers within the hour.**'));
out.push(board('Observation · costing · ask · exclusions · occasions.', 'And the last paragraph: what happens if the answer is no.'));
out.push(p('**b**  Which two last paragraphs are honest? **1** _I look forward to hearing from you and am happy to discuss this at any time._  **2** _If the answer is no, the office goes on as it is and I shall not raise this again before the stock count._  **3** _I am sure you will agree that we cannot afford to let this continue._  **4** _If you would rather not, nothing happens: the reconciliation continues, the write-offs continue, and I shall not write to you about it again this year._  **5** _I trust this will receive your urgent attention._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the last paragraph must do?   **A** press for a decision   **B** **say what happens if the answer is no, with no consequence threatened**   **C** offer to meet'));
out.push(p('**b**  Listen again. **1** Why does Mrs Khoury say the observation must come before the ask?   **2** What does Mr Attar say the four-minute reading found?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  Five pieces, one order', [
  ['Ms Huda', 'Mr Attar has the five pieces. What order?'],
  ['Mr Attar', '⚠ **Observation, costing, ask, exclusions, occasions, and then one paragraph about what happens if he says no.** **Three pages, and the first page has no remedy, no ask and nothing about me** — **which took five drafts and is the only order of the five I tried that a stranger finished.**'],
  ['Ms Huda', 'Why not the ask first?'],
  ['Mrs Khoury', '⚠ **Because an ask before an observation is a request without a reason, and the reader\'s first question is _why are you telling me this?_** **Four students in this room put the ask first and all four abandoned it within the hour** — **not because they were told to, but because they read their own page and found that the second paragraph had to explain the first.**'],
  ['Mrs Oueidat', 'And the occasions?'],
  ['Mrs Khoury', '⚠ **Last of the five, and this is the one the room resists.** **A proposal that opens with the writer\'s qualifications is a letter of application** — **and the reader has not yet agreed that there is anything to be qualified for, so the occasions arrive as a claim on his attention rather than as an answer to a question he has asked.**'],
  ['Dr Qabbani', 'He has asked it by then?'],
  ['Mr Attar', '⚠ **He asked it out loud in the meeting, before he got to page 3.** **_And why you?_** **Which is the whole argument for the order** — **a question the reader asks is answered in six lines and a question nobody has asked needs a paragraph of persuasion.**'],
  ['Mrs Tarabishi', 'What is in the last paragraph?'],
  ['Mr Attar', '⚠ **What happens if he says no, and nothing happens.** **_The reconciliation continues, the write-offs continue, and I shall not write to you about this again before the stock count in February._** **No consequence, no warning, and no regret** — **and he told me that paragraph was the reason he read page 3 twice.**'],
  ['Mrs Khoury', '⚠ **Because it removes the only thing an unsolicited proposal can threaten, which is the reader\'s peace.** **A document that ends _I am sure you will agree that we cannot afford to let this continue_ has made a refusal into a fault** — **and a reader who can refuse at no cost reads the ask on its merits, which is all the writer ever wanted.**'],
  ['Mr Shihabi', 'And the length?'],
  ['Mr Attar', '⚠ **Three pages, and I read the whole thing aloud with a watch: four minutes and ten seconds.** **Mrs Khoury had said that a proposal nobody asked for gets the reading of a page nobody asked for, which is 21.6** — **and three pages at that speed is exactly what a reader with eighty documents a month will give it.**'],
  ['Mr Tayara', 'What did reading it aloud find?'],
  ['Mr Attar', '⚠ **Two things, and both were in the middle.** **A paragraph on page 2 that said the same thing as the paragraph above it in other words, which came out** — **and a sentence about Mr Fattal\'s approvals that sounded, out loud, like a complaint about Mr Fattal, which I rewrote and which is 22.7 and is still not right.**'],
  ['Mrs Rizk', 'Is there a one-page version?'],
  ['Mr Attar', '⚠ **There is, and it is the version I would send to somebody I had never written to at all.** **The first paragraph, two of the four sums, the ask, two exclusions and one occasion** — **two hundred and sixty words, and everything in it is in the three-page version, which is the test: a summary that contains a new argument is a different document.**'],
  ['Mrs Ajouz', 'Which version went?'],
  ['Mr Attar', '⚠ **The three pages, because he signs my section\'s time and has met me twice.** **The one-page version went to the systems manager as a note, and he read it in front of me** — **and the room should notice that the document the reader gets depends on how many minutes they owe you, which is not a matter of politeness but of arithmetic.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the order of the five pieces, which is the opposite of the order I wrote them in.** **I wrote the remedy first, then the occasions, then the ask, and the observation last, which is how I thought about it** — **and the document goes in the order the reader needs, which is the whole of what this unit is: I had been writing the sequence of my own discovery.**'],
]));
out.push(sp());
out.push(box('Language box – the assembled proposal', [
  '**The order is fixed and it is not the order you thought in.** ⚠ **Observation · costing · ask · exclusions · occasions · what happens if the answer is no.** **The sequence of your own discovery runs the other way** — **remedy, qualifications, ask, problem** — **and sending that is sending your own notes.**',
  '**The ask cannot come before the observation.** ⚠ **An ask without a reason makes the reader ask _why are you telling me this?_** — **and four writers in this unit put the ask first and abandoned it within the hour, each after reading their own second paragraph explaining their first.**',
  '**The occasions come last, because by then the reader has asked for them.** ⚠ **_And why you?_** **A question the reader asks is answered in six lines** — **and the same six lines placed first are a letter of application for a post that does not exist.**',
  '**The last paragraph says what happens if the answer is no, and nothing happens.** ⚠ **_The reconciliation continues, the write-offs continue, and I shall not write to you about this again before February._** **No consequence, no warning, no regret** — **and a reader who can refuse at no cost reads the ask on its merits.**',
  '**Read the whole thing aloud with a watch.** ⚠ **Three pages is about four minutes, which is what a reader with eighty documents a month will give it** — **and reading aloud finds the repeated paragraph and the sentence that sounds like a complaint, which are the two faults a silent reading cannot hear.**',
  '**And keep a one-page version, which must contain nothing new.** ⚠ **First paragraph, two sums, the ask, two exclusions, one occasion.** **A summary that contains a new argument is a different document** — **and which version a reader gets is arithmetic about their minutes, not politeness.**',
  '**Pronunciation.** 🔊 **Track 22.12** **Read your own proposal aloud, timed, and listen for the sentence that sounds like a complaint about a named person.** ⚠ **It will be a sentence of pure arithmetic on the page and an accusation in the mouth** — **and the reader hears the mouth version, because that is how documents are read.**',
  '**Practise:** Assemble it. **1** the five pieces, in order  **2** the ask, not first  **3** the occasions, last  **4** the no paragraph  **5** the one-page version, with nothing new',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the order from the card. B says **what the reader\'s first question would be**, and gives **the order they would send.** ⚠ **Two rows on each card are already in the sendable order** — **and there B names the piece that is doing the most work.** Change cards.'));
out.push(table(['Card A – the order as drafted', 'Card B – the order as drafted'], [
  ['_Ask · occasions · observation · costing._', '_Occasions · ask · observation._'],
  ['_⚠ Observation · costing · ask · exclusions · occasions._', '_⚠ Observation · costing · ask · exclusions · occasions · no._'],
  ['_Remedy · costing · ask._', '_Observation · ask · remedy · occasions._'],
  ['_⚠ Observation · two sums · ask · two exclusions · one occasion._', '_⚠ Observation · costing · ask · the no paragraph._'],
  ['_Observation · costing · ask · exclusions · occasions · urgency._', '_Observation · costing · ask · exclusions · occasions · a meeting._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the reader\'s first question, and the order you would send. ⚠ **Rows 2 and 4 on both cards are sendable** — **and rows 4 are the one-page versions, where the piece doing the most work is the single occasion.** **Rows 5 are the pair the cycle turns on**: both end in something the reader must do, **urgency or a meeting, and both replace the one paragraph that lets a reader refuse at no cost.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Assemble **your whole proposal** in the six parts, and then **read it aloud with a watch.** ⚠ **Write down the time.** **In this class the documents ran between two minutes forty and six minutes, and the two longest were both about to be sent to readers who had never heard of their writers** — **and both writers cut, one by half.**'));
out.push(p('**b**  Swap. Your partner reads **only your last paragraph** and says **what it costs them to refuse.** ⚠ **Then the harder question: which sentence in the whole document sounds like a complaint about a named person?** — **and in this class seven of ten documents had one and in five of the seven the writer had not noticed it until it was read aloud.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked Mr Attar for the order of the five pieces, and observation, costing, ask, exclusions, occasions, and then one paragraph about what happens if the answer is no, over three pages, with a first page that has no remedy, no ask and nothing about him, which took five drafts and is the only order of the five he tried that a stranger finished. Ms Huda asked why not the ask first, and Mrs Khoury said because an ask before an observation is a request without a reason and the reader\'s first question is why are you telling me this, and four students in the room put the ask first and all four abandoned it within the hour after reading their own second paragraph explaining their first. Mrs Oueidat asked about the occasions, and last of the five, which is the one the room resists, because a proposal that opens with the writer\'s qualifications is a letter of application and the reader has not yet agreed that there is anything to be qualified for. Dr Qabbani asked whether the reader has asked by then, and Mr Attar said he asked it out loud in the meeting before he got to page 3, and why you, which is the whole argument for the order. Mrs Tarabishi asked what is in the last paragraph, and what happens if he says no, and nothing happens: the reconciliation continues, the write-offs continue, and he will not write again before the stock count in February, with no consequence, no warning and no regret, and the reader told him that paragraph was the reason he read page 3 twice. Mrs Khoury said that is because it removes the only thing an unsolicited proposal can threaten, which is the reader\'s peace. Mr Shihabi asked about the length, and three pages, read aloud with a watch at four minutes and ten seconds, which is 21.6. Mr Tayara asked what reading it aloud found, and two things in the middle: a paragraph that repeated the one above it, which came out, and a sentence about Mr Fattal\'s approvals that sounded like a complaint about Mr Fattal. Mrs Rizk asked whether there is a one-page version, and there is, of two hundred and sixty words, and everything in it is in the three-page version. Mrs Ajouz asked which version went, and the three pages, because the reader signs that section\'s time and has met him twice. And Mr Attar said the thing he will take away is that the order of the five pieces is the opposite of the order he wrote them in._'));
out.push(p('**Listener task:** write your partner\'s order, their reading time, and what their last paragraph costs a reader who refuses.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Writing Part 2: the report)', 7));
out.push(p('Read the one-page version Mr Attar gave to the systems manager, with the two notes he wrote on his own copy. The report itself is 262 words. Answer the questions.'));
out.push(model([
  '**REPORT: DUPLICATE DELIVERY RECORDS IN THE DEPOT SYSTEM** · _J. Attar, systems section, for the systems manager_ · **9 December**',
  '**What is happening.** **Three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and this has been the case since 2016.** ⚠ **Of the ninety-one movements written off in the year to June, forty-five were duplicates created when a lorry was re-routed between depots.**',
  '**What it costs.** **A hundred and forty-four person-days a year at the office\'s own grade, and fifteen hours of the depot manager\'s time in approvals.** ⚠ **I have not added these together: they are measured in different units, and a single figure would be mine rather than yours.**',
  '**What it buys, because it is not waste.** **Eleven genuine short deliveries were found by the hand reconciliation last year, two of them large.** ⚠ **Any remedy has to keep those eleven, and that is the test I should like applied to this report.**',
  '**What I am asking for.** **Four weeks of my own time and read access to the depot database, between the eleventh of this month and the ninth of next, reporting in writing by the sixteenth.** ⚠ **At the end you will have a figure: how many of the forty-five duplicates can be identified from the table structure alone.** **If it is nine, the proposal is dead.**',
  '**What I am not asking for.** **No new module before the February stock count, no software to be bought at any point, and no standing work for this section in the depots.** ⚠ **And Mrs Lattouf\'s four days are not being taken out of her job: if the duplicates go, those days become the stock-count audit, which she runs.**',
  '**Why me.** **I wrote the re-routing report of 14 March; I can name the field in the movements table that duplicates; and I did the reconciliation myself for two months in 2024.** ⚠ **The write-off analysis would be better done by Mrs Mouawad, who found nineteen duplicates I had missed in forty minutes.**',
  '**If the answer is no.** **The reconciliation continues and I shall not write to you about this again before February.**',
  '**Note on my own copy, 1: what this version leaves out, and where it is in the three pages.** ⚠ **The approvals paragraph, the fourth sum with its working, the two limits, and the line about never having taken part in a stock count.** **All four are on pages 2 and 3 of the long version** — **and the test I applied is that nothing in this one page is absent from those three, because a summary that contains a new argument is a different document and will be read as the real one.**',
  '**Note on my own copy, 2: why this one is a report and the long one is a proposal.** ⚠ **A report tells a reader what is happening and leaves the decision in the open; a proposal asks for something.** **This version asks too, in the fourth section** — **so it is a report with an ask in it, which is what the examination means by a report.** **It is also what the systems manager could act on in the four minutes he gave me, standing in a corridor with the paper in his hand.**',
]));
out.push(item('1', 'Which two sums appear in the one-page version, and what does he say about adding them?'));
out.push(item('2', 'What test does he ask to have applied to his own report?'));
out.push(item('3', 'What does the last paragraph say, and what does it not contain?'));
out.push(writers([
  'The report, in the examination sense and the real one: **a heading that names the thing and not the remedy** → **what is happening, with two figures and a date** → **what it costs, not totalled** → **what it buys** → **the ask, with its date and its failure** → **the exclusions** → **why you, in three clauses** → **and what happens if the answer is no.**',
  '⚠ **Head it with the problem and not with your solution.** _Duplicate delivery records in the depot system._ **A heading that names a module is a heading about you** — **and in the examination the heading is marked as part of the organisation, which is worth four marks a candidate rarely collects.**',
  '**Keep the refusal to total, in the document, as a sentence.** ⚠ _I have not added these together: they are measured in different units, and a single figure would be mine rather than yours._ **The sentence is thirty words and it does what a total cannot** — **and in a report it reads as the writer\'s method rather than as a gap.**',
  '**Put the failure in the ask.** ⚠ _If it is nine, the proposal is dead._ **A report that cannot be wrong has nothing to report** — **and examiners mark the same thing under _development_, which in this genre means consequences and not more description.**',
  '⚠ And **end on the no, with nothing after it.** _The reconciliation continues and I shall not write to you about this again before February._ **No offer to meet, no hope of a favourable view, no urgency** — **and a reader who can refuse at no cost is the only reader who will read your ask on its merits.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the one-page version of your own proposal as a report (120 words or more of it).'));
out.push(p('**REPORT: ______________**   **What is happening.** **______________ since ______________.**   **What it costs.** **______________.** ⚠ **I have not added these together.**   **What it buys.** **______________.**   **What I am asking for.** **______________, reporting by ______________.** ⚠ **If ______________, the proposal is dead.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A heading that names the problem, not the remedy',
  'Sums not totalled, and the refusal stated',
  'What the present arrangement buys',
  'A last paragraph with no consequence in it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their heading and their last paragraph only**, and the room says what the document between them must contain.'));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the report)', 12));
out.push(box(null, [
  '⚠ **Six headed sections, 220–260 words, and a last paragraph that threatens nothing.**',
  'Something at your place of work has been happening for years and nobody has called it a problem. **Write a report** for the person whose signature could test it, setting out **what is happening**, **what it costs**, **what the present arrangement buys**, **what you are asking for**, **what you are not asking for**, and **what happens if the answer is no.** Write **220–260 words**.',
  '**You should include:** two figures and a date   ·   sums that are not totalled   ·   one ask inside the reader\'s power   ·   one exclusion that costs you something   ·   one occasion instead of a claim about yourself.',
  '⚠ **No adjective about yourself anywhere in the report.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the six sections in order, no total and no adjective about the writer, and a last paragraph that costs the reader nothing to accept.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How long did each document take, read aloud?** **Between two minutes forty and six minutes** — **and the two longest were going to readers who had never heard of their writers, and both were cut.** **Then: which sentence sounds like a complaint about a named person?** **Seven of ten had one, and five of the seven writers had not noticed until it was read aloud.** **Then the order, which is the reverse of the order of discovery.**'));
out.push(hw('**Read your whole proposal aloud, timed, to somebody who is not in your field** — **and write down the time and the sentence that sounded like a complaint.** ⚠ **Then the harder half: take that sentence to the person it is about, before you send the document.** **In this class eight of ten found such a sentence, six took it to the person, and four of the six were given a figure or a reason that improved the document.** **Bring the time, the sentence and what you were told.** **22.7 is a proposal, a budget holder, and the person whose work it changes.**'));

// ===================== 22.7 =====================
out.push(pb());
out.push(h2('22.7  Review & Mediate: a proposal, the budget holder, and the person whose work it changes'));
out.push(p('**Function:** mediating between a proposal, the person who signs it and the person whose work it changes   ·   **Recycling:** Unit 22   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 7 · Writing Part 2 (the report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Three people spend four days in a month on duplicates.  **2** I am not asking a module before February.  **3** If he wouldn\'t have disputed the figure, nobody would have tested it.  **4** The audit is on the office list since 2019.  **5** Mrs Mouawad found nineteen duplicates which I had missed them.  **6** What I am for, in February?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE PROPOSAL, FOUR ACCOUNTS** _(the three pages of 25 November; the meeting of 2 December)_',
  '**Mr Attar.** _"Page 2 says that forty-five write-offs were approved last year and that the approval has never been queried. Both halves are true and both figures came from Mr Fattal."_',
  '**Mr Fattal, the depot manager, who signs the approvals.** _"I gave him the twenty minutes on the telephone when he asked me how long one takes. I did not know what it was for."_',
  '**Mrs Lattouf, whose four days these are.** _"I saw the second draft and asked him what I am for in February, and the answer in the document now is mine."_',
  '**The office\'s own list of jobs to do, dated 2019, which nobody in this story has read.** _"Stock-count audit — no capacity."_ **It has been on the list for six years.**',
  '⚠ **All four are accurate.** **The person whose work the proposal changes was consulted; the person whose signature it describes was not** — **and the sentence about the approvals is pure arithmetic on the page and an accusation in the mouth, which 22.6 found when the document was read aloud.**',
  '**And the thing none of the three has noticed.** **The audit Mrs Lattouf is to run has been on the office\'s own list since 2019 for want of capacity** — **so the remedy in the proposal was proposed six years ago by the office itself, and the proposal gives Mr Attar the credit for it.**',
  '**The question for the cycle.** _What do you write, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  The signature on page 2', [
  ['Ms Huda', 'Who should have seen this first?'],
  ['Mrs Khoury', '⚠ **Mr Fattal, and it is not a courtesy question.** **Page 2 of that proposal says that forty-five write-offs were approved and never queried, and there is exactly one person in the company who approves them** — **so a paragraph of arithmetic about a procedure is a paragraph about a named man\'s nine years, and he has not read it.**'],
  ['Mr Attar', 'Both figures are his.'],
  ['Mr Attar', '⚠ **He gave me the twenty minutes on the telephone and he gave it freely, and he did not ask me what it was for and I did not tell him.** **That is the part I keep coming back to** — **not that I misused the figure, which I did not, but that I took it without saying what it was going into.**'],
  ['Mrs Oueidat', 'Is that a fault?'],
  ['Mrs Khoury', '⚠ **It is the ordinary way a figure travels and it is not a fault, which is the ninth time in Book 2 that the room has had to hold both.** **Mrs Lattouf saw the second draft because her work changes.** **Mr Fattal\'s work does not change at all** — **and that is precisely why nobody thought of him: the proposal does not touch him, it only describes him.**'],
  ['Dr Qabbani', 'So what goes to him?'],
  ['Mr Attar', '⚠ **Page 2, before Mr Zeidan circulates it, with the fifteen hours read the other way round.** **_Forty-five approvals at twenty minutes is fifteen hours of your year, and the figure is yours._** **His time saved, and not his attention questioned** — **and the same two figures do both, which is the whole lesson of the cycle and I had not seen it until it was read out loud.**'],
  ['Mrs Tarabishi', 'And the sentence about never being queried?'],
  ['Mrs Khoury', '⚠ **It stays, and it is finished differently.** **_The approval is the procedure and it has done exactly what it was designed to do: it recorded forty-five write-offs and it is not designed to ask why there were forty-five._** **Without that clause the sentence is an allegation about one man** — **and with it, it is a finding about a form.**'],
  ['Mr Shihabi', 'What must not be said?'],
  ['Mr Attar', '⚠ **That nobody has queried the write-offs for nine years, with nothing after it.** **It is true, it is already on page 2, and it reads as nine years of inattention by the only man who signs** — **and the room should notice that the forbidden sentence in this unit is one I have already written and sent.**'],
  ['Mrs Rizk', 'Sent?'],
  ['Mr Attar', '⚠ **Sent to Mr Zeidan on the twenty-fifth, and he has not circulated it yet, which is the only reason this cycle has a remedy in it.** **If he had passed page 2 to the depot before I had spoken to Mr Fattal, the first Mr Fattal would have known of it is a sentence about his own signature in a document from a man he has met twice.**'],
  ['Mr Tayara', 'And the 2019 list?'],
  ['Mrs Oueidat', '⚠ **That is the second finding and it is the larger of the two.** **The stock-count audit has been on the office\'s own list since 2019 with _no capacity_ written beside it** — **so the remedy in the proposal is the office\'s own proposal from six years ago, and the document as it stands gives Mr Attar the credit for it.**'],
  ['Mrs Ajouz', 'Does that have to be fixed?'],
  ['Mrs Khoury', '⚠ **It has to be cited, which is cheaper than credit and worth more.** **_The audit is item 4 of the office\'s list of 2019, where the entry reads "no capacity"._** **One clause** — **and the proposal stops being a young man\'s idea and becomes the office\'s idea with four weeks attached to it, which is the version that survives Mr Attar leaving.**'],
  ['Mrs Lattouf', 'I told the systems man in 2019.'],
  ['Mr Attar', '⚠ **She told him about the delivery-note field six years ago and nothing happened and nobody wrote it down, and she said so in one sentence on a recording we made for the class.** **That is the third account and I had not asked her for it** — **and the only difference between her 2019 and my November is that I wrote three pages and she told somebody in a corridor.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the order of the three conversations.** **Mrs Lattouf before the second draft, Mr Fattal before the circulation, and Mr Zeidan at any time** — **because Mr Zeidan can refuse the proposal and the other two cannot, and a document that reaches the people who cannot refuse it last has described them to somebody with power over them without asking them first.**'],
]));
out.push(sp());
out.push(box('Language box – the three readers of one proposal', [
  '**A proposal has three readers and only one of them can refuse it.** ⚠ **The person who signs, the person whose work it changes, and the person it describes** — **and the order of the conversations is the second and third before the first, because the two who cannot refuse are being described to somebody with power over them.**',
  '**The person it describes is the one nobody thinks of, and for a reason.** ⚠ **Mr Fattal\'s work does not change at all: the proposal only describes him** — **and a paragraph of arithmetic about a procedure is a paragraph about the nine years of whoever signs it.**',
  '**The same two figures read both ways.** ⚠ **_Forty-five approvals at twenty minutes is fifteen hours of your year, and the figure is yours._** **His time saved, not his attention questioned** — **and the version that reaches him first decides which of the two he hears for ever.**',
  '**Finish the sentence that is an allegation.** ⚠ **_The approval is the procedure and it has done exactly what it was designed to do: it recorded forty-five write-offs, and it is not designed to ask why there were forty-five._** **Without the clause it is about a man; with it, it is about a form.**',
  '**What must not be said: _nobody has queried this for nine years_, with nothing after it.** ⚠ **It is true and it is already in the document** — **and the forbidden sentence in this cycle is one the writer has already written and sent, which is the position most writers are actually in.**',
  '**And cite the older proposal, which is cheaper than credit and worth more.** ⚠ **_The audit is item 4 of the office\'s list of 2019, where the entry reads "no capacity"._** **One clause, and the proposal stops being a young man\'s idea** — **and becomes the office\'s idea with four weeks attached, which is the version that survives his leaving.**',
  '**Pronunciation.** 🔊 **Track 22.14** **Read the approvals sentence twice: once as time saved and once as attention questioned.** ⚠ **Same words, same figures, and the difference is where the stress falls and what the next clause is** — **and the room should hear both and then say which one it has been writing for twenty units.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **the person who was not consulted**, gives **the three conversations in order**, and names **what must not be said.** ⚠ **On one of the two cards everybody was consulted**, and B must find that and say what went wrong instead. Change roles with the other pair.'));
out.push(table(['Pair A – the proposal and the approvals', 'Pair B – the proposal and the rota'], [
  ['_The writer: "both figures came from him."_', '_The writer: "I spoke to all four of them first."_'],
  ['_The signer: "I did not know what it was for."_', '_The signer: "the rota is not mine to change."_'],
  ['_⚠ The person whose work changes: consulted._', '_⚠ Everybody whose work changes: consulted._'],
  ['_⚠ The office list of 2019: never read._', '_⚠ Nothing missing: four conversations, all held._'],
  ['_⚠ Missing: the man the paragraph describes._', '_⚠ Missing: nothing. The ask was outside his power._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** who was not consulted, the three conversations, and what must not be said. ⚠ **On Pair B everybody was consulted and the room will keep hunting for a person** — **and the finding is that the ask was outside the reader\'s power, so four careful conversations were held about a decision the reader could not take.** **The repair is 22.3: name the signature before you write the ask, not after.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own proposal** and write **the four accounts**: yours, the signer\'s, the person whose work changes, and one document nobody has read. ⚠ **Then name the person your proposal describes but does not touch.** **In this class six of ten had such a person and five of the six had not spoken to them** — **and in three cases the person was the one whose figure the proposal rests on.**'));
out.push(p('**b**  Swap. Your partner gives **the three conversations in order** and names **the sentence you must not write.** ⚠ **In this class that sentence was, in eight cases of ten, already in the document.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Ms Huda asked who should have seen the proposal first, and Mrs Khoury said Mr Fattal, and it is not a courtesy question, because page 2 says that forty-five write-offs were approved and never queried and there is exactly one person in the company who approves them, so a paragraph of arithmetic about a procedure is a paragraph about a named man\'s nine years. Mr Attar said both figures are his: he gave the twenty minutes on the telephone and gave it freely, and did not ask what it was for and was not told, and that is the part he keeps coming back to, not that he misused the figure but that he took it without saying what it was going into. Mrs Oueidat asked whether that is a fault, and Mrs Khoury said it is the ordinary way a figure travels and it is not a fault, and this is the ninth time in Book 2 that the room has had to hold both, because Mrs Lattouf saw the second draft since her work changes, and Mr Fattal\'s work does not change at all, which is precisely why nobody thought of him: the proposal does not touch him, it describes him. Dr Qabbani asked what goes to him, and page 2, before Mr Zeidan circulates it, with the fifteen hours read the other way round, as his time saved rather than his attention questioned, which the same two figures do both. Mrs Tarabishi asked about the sentence on never being queried, and Mrs Khoury said it stays and is finished differently, because the approval is the procedure and has done exactly what it was designed to do, and without that clause the sentence is an allegation about one man and with it a finding about a form. Mr Shihabi asked what must not be said, and that nobody has queried the write-offs for nine years with nothing after it, which is true and is already on page 2. Mrs Rizk asked about sent, and sent on the twenty-fifth and not yet circulated, which is the only reason the cycle has a remedy in it. Mr Tayara asked about the 2019 list, and Mrs Oueidat said that is the second finding and the larger of the two, because the stock-count audit has been on the office\'s own list since 2019 with no capacity written beside it. Mrs Ajouz asked whether that has to be fixed, and Mrs Khoury said it has to be cited, which is cheaper than credit and worth more. Mrs Lattouf said she told the systems man in 2019, and Mr Attar said nothing happened and nobody wrote it down. And Mr Attar said the thing he will take away is the order of the three conversations, because Mr Zeidan can refuse the proposal and the other two cannot._'));
out.push(p('**Listener task:** write the person who was not consulted and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 7)', 7));
out.push(p('You are going to read an account by a finance director. **Six paragraphs have been removed.** Choose from the paragraphs **A–G** the one which fits each gap **(1–6)**. There is one extra paragraph which you do not need to use.'));
out.push(model([
  '**THE PROPOSAL I DID NOT ASK FOR**',
  'It arrived on a Tuesday, in an envelope, from a man in the systems section whose name I knew and whose face I did not. Three pages. I read the first paragraph twice, because it did not mention a system at all: it said that three people in the depot office spend four days a month reconciling deliveries that the system has recorded twice, and that this has been the case since 2016.',
  '**1 ______**',
  'The second page was arithmetic, and it is the part I have since shown to the board. A hundred and forty-four person-days a year, costed at the office\'s own grade. Twenty-six duplicate movements written off. Fifteen hours of a manager\'s year spent approving them. And a fourth figure, for the annual stock count, which the writer had marked as his own estimate. He had not added them up. There was a sentence saying why not, which I have quoted at two meetings since: they are measured in different units, and a single figure would be his rather than mine.',
  '**2 ______**',
  'The third page was shorter than either of the others, and it is the page I now use when I am teaching junior managers how to write to me. It said what he was asking for: four weeks of his own time, and read access to the depot database, between two named dates, with a written report by a third. Nothing else. And it said what the four weeks would produce, which was a figure, and what figure would kill the proposal.',
  '**3 ______**',
  'What I said yes to cost the company nothing it was not already paying, which is a sentence I would have distrusted a year earlier.',
  '**4 ______**',
  'He is twenty-two, and I have been asked since why that did not weigh against him.',
  '**5 ______**',
  'The part he got wrong was not in the arithmetic, and I did not see it myself until the document had been in my drawer for a week. Then I read page 2 again, slowly, with a pencil, as I read anything that is going to be circulated.',
  '**6 ______**',
  'The proposal is in its second year. The four days have become a stock-count audit that we had never had the capacity for, which Mrs Lattouf runs, and which was on the office\'s own list from 2019, where somebody had written _no capacity_ beside it. The figure the four weeks produced was thirty-one of the forty-five, which is not the whole of it and is enough. I keep the three pages in a drawer, and I have twice taken them out to show somebody what a first paragraph is for. Two of the three sections I run have sent me something like it since, and neither was any good, because both of them opened with a remedy and one of them opened with a remedy I had already refused in 2022. Nobody asked for the three pages, which is the only thing about them that I still find remarkable.',
]));
out.push(p('**A**   Underneath it there was a list of what he was not asking for, which I had never seen in a proposal before. No new module before February, no software at any point, no standing work for his section in the depots, and a line about the clerk whose four days these were. I have since learnt that the list is the reason I said yes, although I did not know it at the time.', { indent: 200, after: 70 }));
out.push(p('**B**   It did not, because the proposal told me almost nothing about him. It told me that he had written the re-routing report of March, that he could name the field in the movements table that duplicates, and that he had done the reconciliation himself for two months while the clerk was on leave. Three occasions, no adjectives, and I could check all three without asking him anything.', { indent: 200, after: 70 }));
out.push(p('**C**   What struck me about that sentence was not the figure but the date. I had signed the depot office\'s establishment three times in those years and had never once been asked for a fourth person, which I had taken as evidence that the office was adequately staffed. It had not occurred to me that an office can absorb four days a month for nine years without ever mentioning it.', { indent: 200, after: 70 }));
out.push(p('**D**   There is a woman in that office who had done those four days every month for nine years, and a paragraph of his second page described the approvals of the manager who signs the write-offs. He had spoken to her before his second draft. He had not spoken to him at all, and the figures in that paragraph were the manager\'s own, given on the telephone without being told what they were for.', { indent: 200, after: 70 }));
out.push(p('**E**   Every proposal that reaches me says it is inexpensive, and most of them are inexpensive in the first year and not in the fourth. The difference here was that the cost was four weeks of a salary I was already paying, and that he had written it in those words instead of describing it as an investment.', { indent: 200, after: 70 }));
out.push(p('**F**   That fourth figure was the one I disputed, and I was wrong to. I asked the stock controller to test the second one instead, and it came back nineteen movements higher than he had claimed, found in about forty minutes from the write-off sheets. It is the only time in my career that an unsolicited figure has been conservative.', { indent: 200, after: 70 }));
out.push(p('**G**   I have since changed the way this company invites proposals, and we now publish a form with six headings. It has produced forty-one submissions in a year, of which two were worth reading. A form that asks for problems will be sent problems; it will not be sent the problem nobody has noticed.', { indent: 200, after: 70 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three things and the working (120 words or more).'));
out.push(p('**To the person the paragraph describes, before it is circulated.** ⚠ **______________ at ______________ is ______________ of your year, and the figure is yours.**   **The sentence, finished.** **The ______________ is the procedure and it has done exactly what it was designed to do: ______________, and it is not designed to ______________.**   **The citation.** **______________ is item ______________ of ______________, where the entry reads ______________.**   **And the working.** **The sentence that must not be written: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The figures read as time saved, to the person they describe',
  'The allegation sentence finished with its clause about the form',
  'The older proposal cited, not credited',
  'The three conversations in order, the signer last',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the report)', 10));
out.push(box(null, [
  '⚠ **Written to the person your proposal describes and does not touch** — **and nothing in it asks them for anything.**',
  'You have written a proposal that describes a procedure somebody else signs. **Write a report** for that person, setting out **what the paragraph in your proposal says**, **where its figures came from**, **what the procedure was designed to do**, **what the change would save them**, and **what you are not asking them for.** Write **220–260 words**.',
  '**You should include:** the two figures, attributed   ·   the clause that makes it a finding about a form   ·   one older document cited   ·   and a last line that asks for nothing.',
  '⚠ **No sentence beginning _nobody has_.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Three people spend four days ___ month on duplicates.   a) in a   b) a   c) per',
  '2  I am not asking ___ a module before February.   a) —   b) to   c) for',
  '3  ___ he not disputed the figure, nobody would have tested it.   a) Had   b) If   c) Should',
  '4  The audit ___ on the office list since 2019.   a) is   b) has been   c) was',
  '5  Mrs Mouawad found nineteen duplicates ___ I had missed.   a) which them   b) what   c) that',
  '6  ___ am I for, in February?   a) What   b) Which   c) How',
  '7  The four days become the audit, ___ she runs.   a) what   b) which   c) that it',
  '8  Nothing in this proposal creates a route ___ which that happens.   a) by   b) in   c) for',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 22.15** You will hear a clerk in a depot office talking about the monthly reconciliation. Complete the sentences with **a word, a short phrase or a number** from what you hear.'));
[
  '1  Mrs Lattouf has done the monthly reconciliation since ______________.',
  '2  The reconciliation is done in the week after the month ______________.',
  '3  The duplicates are found by hand, from the ______________.',
  '4  Last year the reconciliation also found eleven ______________.',
  '5  One recovery from the haulier paid for about ______________ of the reconciliation.',
  '6  The stock-count audit has been on the office list since ______________.',
  '7  She says the person whose work it changes should see the proposal before the person who ______________.',
  '8  She told the previous systems man about the delivery-note field in 2019, and nobody ______________.',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['Mrs Lattouf', 'I have been in the depot office since 2014 and I have done the monthly reconciliation since 2016. It takes the three of us four days, and we do it in the week after the month closes. The duplicates appear when a lorry is re-routed: the delivery note is entered at the depot that was expecting it and again at the depot that received it, and the system keeps both. We find them by hand, from the bay sheets.'],
  ['Mrs Lattouf', 'Last year we also found eleven short deliveries that nobody else would have found. Two of those were large and one of them was recovered from the haulier, which paid for about a year of the reconciliation on its own. That is the part of the job I would not want written down as waste, and the proposal does not say it is, which I checked.'],
  ['Mrs Lattouf', 'When Mr Attar showed me his second draft I asked him one question, which was what I am for in February. Neither of us had an answer that afternoon. The answer we have now is the stock-count audit, which has been on the office list since 2019 and which nobody has ever had four days a month to do. I wrote that sentence in his proposal myself, and he left it as I wrote it.'],
  ['Mrs Lattouf', 'What I would say to anybody writing one of these is that the person whose work it changes should see the proposal before the person who signs it. That is not a courtesy. I knew about the delivery-note field in 2019 and I told the systems man who was here then, in the corridor, and nothing happened, and nobody wrote it down.'],
]));
out.push(p('**C  Writing.** Write the three things and the working (120 words or more): the figures read as time saved, the allegation sentence finished, the older document cited, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write a first paragraph that establishes a problem and contains no remedy',
  '☐ cost the thing that is already happening, with the multiplication showing and no total',
  '☐ say what the present arrangement buys, in figures',
  '☐ name my ask in one sentence, inside one reader\'s power, where they look',
  '☐ say what I am not asking for, with a date on it and a cost to me',
  '☐ answer _why you_ with occasions and no adjectives',
  '☐ assemble the whole proposal in the reader\'s order, and end on what happens if the answer is no',
  '☐ speak to the person my proposal describes before it reaches the person who signs it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _raise with · put before · set before · make a case for · take on board · bring on side · win round · get behind · test out · float by · speak up for · jump in_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 22.7 draws on this unit\'s lexis)_: _advocate → **advocacy** · initiate → **initiative** · solicit → **unsolicited** · merit → **meritorious** · viable → **viability** · incur → **incurred** · forgo → **forgone** · budget → **budgetary** · enumerate → **enumeration**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _think about_ **→ _the proposal asks nine people to think about a cost they have never seen_**, which is directing attention to something unnoticed, where at A2 it was thinking about a holiday · _get back_ **→ _nobody got back to me for five weeks_**, which is answering a document, where at A2 it was getting back home · _write back_ **→ _the clause was written back into the schedule in 2021_**, which is restoring something to a document, where at A2 it was replying to a letter.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 22 · The Proposal Nobody Asked For');
