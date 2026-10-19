// Proactive English C1 · Syria Edition · Book 1 · Unit 6 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE CUT TOOK OUT', 'WHAT THE READER LOST'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says what can come out and what cannot, and why.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — and mark only what that reader would notice. Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';

out.push(h1('Unit 6  Two Hundred Words That Cannot Be Cut'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Almost every document anybody in this room writes could be half as long with nothing taken out of it.** ⚠ **That is not a claim about style and it is not an accusation of padding.** **It is arithmetic**: a page of professional prose carries about forty facts in about four hundred and fifty words, **and four hundred and fifty words is roughly twice what forty facts need.**',
  '**6.1** cuts a page by half without losing a figure.   **6.2** leaves things out and substitutes across sentences, and names what each substitution risks.   **6.3** packs information in front of the noun and knows when to put it behind.   **6.4** says in one line what the cut removed, to the person who asked for it.   **6.5** compresses four paragraphs into one without flattening the claim strengths.   **6.6** writes the report that is already at its minimum length, and says so at the top in a way a reader can check.   **6.7** mediates between the author of a long report and the reader who has eleven of them.',
  '**Exam practice in 6.7:** C1 Advanced **Reading and Use of English Part 7** (the gapped text), **Writing Part 2** (a report) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a document of your own that somebody asked you to shorten — **with the shortened version if one exists.** **Two:** something you have cut, where you can still say what came out. **6.1 and 6.4 both run on the first and neither can be run on invented material.**',
  '**And the distinction the whole unit turns on, which should be written on the board in 6.1 and left there.** ⚠ **A cut that removes words is free.** **A cut that removes facts is a decision and has to be declared.** **Most people who are asked to shorten something do the second while believing they are doing the first**, and the reason is that a fact removed from a document does not leave a hole anybody can see.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 6.1 =====================
out.push(pb());
out.push(h2('6.1  A page halved, with every figure still in it'));
out.push(p('**Function:** cutting a page by half without losing a figure   ·   **Grammar:** the empty frame · the unpacked nominalisation · the redundant pair   ·   **Pronunciation:** reading the cut version at the speed the original was written'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the document somebody asked you to shorten, how long it was, and how long it ended up.** ⚠ **Two numbers and nothing else.** Your teacher writes the pairs on the board and the room works out the percentage. **In most classes the average cut is about a fifth**, and the room will think that is modest until 6.1 is over.'));
out.push(board('It should be noted that the roller was out of service.', 'Nothing.'));
out.push(p('**b**  Which of these can come out without losing a fact? **1** _It should be noted that the roller was out of service._  **2** _The bolts measure M12 against a specified M16._  **3** _There is a requirement for the inspection to be carried out prior to installation._  **4** _Nine positions at the third level were not measured._  **5** _In the event that the file copy is produced, the opinion will be revised._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the difference is?   **A** long documents are badly written   **B** **a cut that removes words costs nothing and a cut that removes facts is a decision** — and most people do the second while believing they are doing the first   **C** every document can be shortened'));
out.push(p('**b**  Listen again. **1** What happened when Mr Zahreddine cut his four-page opinion to one page?   **2** What does Mrs Oueidat say about the phrase _it should be noted that_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  Four pages into one', [
  ['Ms Huda', 'Mr Zahreddine cut a four-page opinion to one page. What came out?'],
  ['Mr Zahreddine', '⚠ **Two thousand one hundred words, and not one fact.** **Every figure, every date and every document reference is in the one-page version.** **I counted them twice because I did not believe it either.**'],
  ['Mrs Tarabishi', 'Then what were the two thousand words?'],
  ['Mr Zahreddine', '⚠ **Frames, mostly.** _It should be noted that_, _it is apparent from the foregoing that_, _in the event that_, _with regard to the question of_. **Forty-one of those in four pages.** **I counted those too.**'],
  ['Mrs Oueidat', '⚠ **And _it should be noted that_ is the worst of them, because it pretends to do something.** **It says: what follows is important.** **A reader who is told a sentence is important reads it exactly as fast as they would have anyway.**'],
  ['Dr Qabbani', 'Some of it must have been real. Four pages to one is not all frames.'],
  ['Mr Zahreddine', '⚠ **About half was frames and about half was saying things twice.** **I had a paragraph explaining the measurement method and then a paragraph explaining why the method was appropriate**, and the second one said nothing the first had not.'],
  ['Mr Shihabi', 'That is the one I cannot see in my own work.'],
  ['Mrs Khoury', '⚠ **Nobody can, and there is a mechanical test.** **Count the facts in each paragraph.** **A paragraph with no fact in it that is not in another paragraph comes out whole**, and you will find one or two on every page.'],
  ['Mr Tayara', 'And the ones with one fact in them?'],
  ['Mrs Khoury', '⚠ **Those are the dangerous ones, because they feel like padding and are not.** **A hundred-word paragraph with one fact in it is a hundred words you can cut to twelve** — **and twelve is what you keep, not nothing.**'],
  ['Mrs Ajouz', 'Is there a figure for how much comes out?'],
  ['Mr Zahreddine', '⚠ **In my experience about half, and it is the same half every time.** **Frames, repetition, and the explanation of a method nobody disputes.**'],
  ['Jad', 'What about the things that go when you are not looking?'],
  ['Mrs Khoury', '⚠ **That is 6.4 and it is the reason this unit exists.** **A fact removed from a document leaves no hole.** **The sentence closes over it and reads perfectly well, and nobody — including the writer, a week later — can tell it was ever there.**'],
  ['Mrs Rizk', 'So you have to write down what you took out.'],
  ['Mrs Oueidat', '⚠ **You have to write down what you took out, and to whom.** **Which is a different document and almost nobody produces it.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is that the four-page version took me two days and the one-page version took an afternoon.** **The long one was the first draft and I had been calling it the opinion for nine years.**'],
]));
out.push(sp());
out.push(box('Language box – the cut that removes words and not facts', [
  '**The distinction, and it goes on the board for the whole unit.** ⚠ **A cut that removes words is free.** **A cut that removes facts is a decision and has to be declared.** **Most people asked to shorten something do the second while believing they are doing the first**, because a fact removed leaves no hole: the sentence closes over it and reads perfectly well.',
  '**The empty frames, which are about half of what comes out.** ⚠ _It should be noted that_ · _it is apparent from the foregoing that_ · _with regard to the question of_ · _in the event that_ · _it is important to recognise that_. **Each one announces that something is coming and delays it**, and _it should be noted that_ is the worst because it claims to tell a reader what matters.',
  '**The unpacked nominalisation.** ⚠ _There is a requirement for the inspection to be carried out prior to installation_ → _the inspection must be carried out before installation_ → _bolts must be inspected before installation._ **Fourteen words to seven, and the second cut puts the agent back in.**',
  '**Saying it twice in two shapes.** ⚠ **A paragraph describing a method and a paragraph justifying the method are usually one paragraph.** **The test is mechanical: count the facts in each paragraph, and a paragraph with no fact that is not elsewhere comes out whole.** **You will find one or two on every page.**',
  '**And the dangerous paragraph, which is not the empty one.** ⚠ **A hundred words with one fact in them feel like padding and are not.** **That paragraph cuts to twelve words, and the twelve are what you keep** — **a writer who deletes it has made a decision and will not remember making it.**',
  '**The redundant pair.** ⚠ _null and void_ · _each and every_ · _full and complete_ · _terms and conditions_ · _unless and until_. **In legal drafting some of these have a history and almost none of them has a difference**, and in anything you write yourself the second word of the pair can go.',
  '**Pronunciation.** 🔊 **Track 6.2** **Read the cut version aloud at the speed you would have read the original.** ⚠ **It will feel too fast and too bare, and it is neither.** **The feeling is the writer\'s and not the reader\'s** — **you know what was taken out and the reader does not, and the bareness is what the reader experiences as clarity.**',
  '**Practise:** Cut a sentence without losing a fact. **1** removing a frame  **2** unpacking a nominalisation  **3** removing the second word of a pair  **4** cutting a hundred-word paragraph to its one fact  **5** one where nothing can come out — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence or paragraph from the card. B gives the cut version and **says what kind of cut it was.** ⚠ **Two rows on each card cannot be cut at all** — **every word carries a fact** — **and B must say so rather than producing something shorter.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_It should be noted that the roller was out of service on the day in question._', '_With regard to the question of the file copy, the same has not been produced._'],
  ['_⚠ Nine of the nineteen arrived after the rota ended at nine._', '_⚠ Eleven of the hundred and four were dispensed against a superseded sheet._'],
  ['_There is a requirement for each and every record to be retained for a period of two years._', '_In the event that the certificate is produced, the opinion will be revised accordingly._'],
  ['_⚠ The box was signed for on 26 June and has not been seen since._', '_⚠ Forty-one positions were measured on 7 August and nine were not._'],
  ['_The methodology adopted was considered appropriate having regard to the circumstances prevailing at the time._', '_It is important to recognise that the inspection was not, in fact, carried out._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each cut version and the kind of cut. ⚠ **Rows 2 and 4 on both cards cannot be cut and the class will shorten them anyway.** **When they do, ask what went** — **and in every case it is a number, a date or a denominator.** **Row 5 on Card A is the one to spend time on**: fourteen words of method-justification that say nothing, and the honest cut is to delete the sentence whole.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the document you brought** and **count the facts in each paragraph** — **a figure, a date, a name, a document reference or a finding.** ⚠ **Write the number in the margin.** **Then find the paragraphs whose facts all appear elsewhere.** **In most documents there are one or two on every page**, and they are usually the paragraphs the writer worked hardest on.'));
out.push(p('**b**  Swap. Your partner cuts **one paragraph of yours** and hands it back, and you say **whether anything went.** ⚠ **Then check it against the original, fact by fact.** **About a third of first attempts lose something**, and the person who lost it is nearly always confident that they did not.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine cut a four-page opinion to one page and lost two thousand one hundred words and not one fact: every figure, every date and every document reference is in the one-page version, and he counted them twice because he did not believe it either. Mrs Tarabishi asked what the two thousand words were, and they were frames, mostly — it should be noted that, it is apparent from the foregoing that, in the event that, with regard to the question of — forty-one of those in four pages, which he also counted. Mrs Oueidat said it should be noted that is the worst of them because it pretends to do something: it says what follows is important, and a reader who is told a sentence is important reads it exactly as fast as they would have anyway. Dr Qabbani said some of it must have been real, since four pages to one is not all frames, and about half was frames and about half was saying things twice — he had a paragraph explaining the measurement method and then a paragraph explaining why the method was appropriate, and the second said nothing the first had not. Mr Shihabi said that is the one he cannot see in his own work, and Mrs Khoury said nobody can and there is a mechanical test: count the facts in each paragraph, and a paragraph with no fact in it that is not in another paragraph comes out whole, and you will find one or two on every page. Mr Tayara asked about the ones with one fact in them, and those are the dangerous ones, because they feel like padding and are not — a hundred-word paragraph with one fact in it is a hundred words you can cut to twelve, and twelve is what you keep, not nothing. Mrs Ajouz asked whether there is a figure for how much comes out, and in Mr Zahreddine\'s experience about half, and it is the same half every time: frames, repetition, and the explanation of a method nobody disputes. Mr Attar asked about the things that go when you are not looking, and Mrs Khoury said that is 6.4 and it is the reason the unit exists — a fact removed from a document leaves no hole, the sentence closes over it and reads perfectly well, and nobody, including the writer a week later, can tell it was ever there. Mrs Rizk said so you have to write down what you took out, and Mrs Oueidat said what you took out and to whom, which is a different document and almost nobody produces it. And Mr Zahreddine said the thing he will take away is that the four-page version took him two days and the one-page version took an afternoon: the long one was the first draft and he had been calling it the opinion for nine years._'));
out.push(p('**Listener task:** write the fact count for each paragraph of your own document.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the one-page version of Mr Zahreddine\'s opinion. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE · CONSULTING ENGINEER** · _east elevation, Mezzeh · opinion for the insurer_ · **22 January**',
  '**On the fifty-six bolt positions I have measured — forty-one on 7 August 2026 and fifteen on 14 January 2027 — fifty-five measure between 12.0 and 12.2 millimetres against a specified M16.** **One, at the third level, second from the north end, measures 15.9.** **The frame has fifty-six bolt positions in all and I have now measured every one.** **I have issued no certificate for this frame.**',
  '**Method.** **Vernier, two readings at each position, the lower recorded.** **The fifteen positions of 14 January were measured in the presence of the site agent, who signed my sheet.** **No position was measured by anybody else in my presence.**',
  '**Not examined, and this list is complete.** **The welds. The grout. The anchor positions below the second level. The mill certificates, which were not in the site file on either visit.** **The frame as a structure: I have not calculated it on the installed sizes and have had no instruction to do so.**',
  '**What follows.** **Fifty-five of the fifty-six positions are below the specified grade.** **The frame does not meet the specification it was built to.** ⚠ **It does not follow that the frame will fail, and I have not done the calculation that would say.**',
  '**Documents seen, with dates.** **Delivery note of 4 August, reading M16.** **Site copy of the purchase requisition of 19 July, amended by hand, the amendment not initialled.** **Supplier\'s letter of 11 August, confirming an order for M12.** **My own site diary entries for 7 August and 14 January.** **I have not seen the file copy of the requisition, asked for on 9, 10 and 12 August and on three occasions since, most recently on 19 January.**',
  '**The single M16 and what it does not mean.** **Both the delivery note and the supplier\'s letter can be true if the order was amended after a part delivery.** **The 15.9 position is the only one of the fifty-six that was behind the sheeted scaffold in August and measured in January.** **One bolt will not establish anything and the file copy would.**',
  '**Readings.** **Of the fifty-six, thirty-nine read 12.0, fourteen read 12.1, two read 12.2 and one reads 15.9.** **No reading between 12.3 and 15.8 was obtained anywhere on the frame.**',
  '**What would change this opinion.** **The file copy, if it reads M12.** **A calculation on the installed sizes, which would not change the specification finding.** **Any further M16 readings, of which there are none to date.** **And the mill certificates, if they are produced and name a grade.**',
  '**One matter of record.** **I was asked on site on 7 August to leave the bolt sizes out of my note and to raise them separately, and I declined.** **The request is in my site diary with the time against it, which is 09.40.** **The person who made it is named in the diary and not here.** **I record it because an insurer reading this in eighteen months will want to know whether anything was withheld.**',
  '**F. Zahreddine** · _given on the information described above and on no other_',
]));
out.push(item('1', 'How many separate facts are in the first paragraph, and what has been removed from around them?'));
out.push(item('2', 'What does the section on the single M16 do, and why is it not a finding?'));
out.push(item('3', 'What is in the last paragraph, and what reason does he give for including it?'));
out.push(writers([
  'A document cut to its facts: **the finding first, with its limits inside it** → **the method in one line** → **what was not examined, as a list** → **what follows and what does not** → **the documents with dates** → **what would change it** → **and anything that was asked of you.**',
  '⚠ **Delete every frame and put nothing in its place.** _It should be noted that the bolts measure M12_ → _the bolts measure M12._ **The frame was never carrying information**, and a reader who is told a sentence matters reads it at exactly the speed they would have anyway.',
  '**Give a method one line if nobody disputes it.** ⚠ _Vernier, two readings at each position, the lower recorded._ **Nine words.** **A paragraph justifying a method nobody has questioned is the commonest hundred words in professional prose** — **and it goes back in the moment somebody questions it.**',
  '**Make a list a list.** ⚠ _The welds. The grout. The anchor positions below the second level._ **Four sentences of three words each, where a paragraph would have taken sixty** — **and a reader can count four things and cannot count a paragraph.**',
  '⚠ And **keep the sentence that costs you something.** _I was asked to leave the bolt sizes out and I declined._ **A cut version is read as a summary unless it contains the one thing nobody would summarise**, and that sentence is what tells a reader this is the whole of it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a document cut to its facts (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **On the ______________ I have ______________ — ______________ on ______________ and ______________ on ______________ — ______________.** **One, at ______________, ______________.** **I have ______________.**   **Method.** **______________.** **______________.**   **Not examined, and this list is complete.** **______________. ______________. ______________.**   **What follows.** **______________.** ⚠ **It does not follow that ______________, and I have not ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every frame deleted, and nothing put in its place',
  'The method in one line, unless somebody disputes it',
  'A list written as a list',
  'Every figure and date from the original still present',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their _not examined_ list**, and the room counts the items aloud.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole document (260 words or more), to the shape in the writer\'s box: the finding with its limits, the method, the list, what follows and what does not, the documents, what would change it, and what was asked of you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no frames, the method in one line, lists written as lists, and every figure from the original still present.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a cut paragraph aloud at the speed they would have read the original.** ⚠ **The room says whether it felt too fast.** **It does to the writer and not to anybody else** — and the class should be asked who, in the room, actually lost anything. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **the long one was the first draft, and I had been calling it the opinion for nine years.**'));
out.push(hw('Take **the document you brought** and cut it **by half**, counting the facts before and after. ⚠ **The two counts must be identical.** **If they are not, you have made a decision and 6.4 is where you declare it** — **so keep a list of anything that went out, with the reason.** **Bring both versions, both fact counts and the list.** **6.2 is what you can leave out and what each substitution risks.**'));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  What you can leave out, and what it costs'));
out.push(p('**Function:** leaving out and substituting across sentences, and naming what each substitution risks   ·   **Grammar:** _the latter · such · did so · the same · one_ · verb-phrase ellipsis   ·   **Pronunciation:** the substituted word, said without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence from your own writing containing _the latter_, _the former_, _such_, _the same_ or _said_ as in _the said document_.** ⚠ **If you have none, say so.** Your teacher writes them up. **In most classes six or seven students have one**, and about half of those cannot say, without looking back, what the word refers to.'));
out.push(board('The registrar and the sister were asked; the same has not replied.', 'Which of them.'));
out.push(p('**b**  Which of these substitutions is ambiguous? **1** _The site copy and the file copy were requested; the latter has not been produced._  **2** _The registrar and the sister were asked; the same has not replied._  **3** _He asked for the costings to be removed and I did so._  **4** _The committee considered the rota and the vehicle, and such a change was rejected._  **5** _Two certificates were issued and neither is in the file._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about substitution?   **A** it is always clearer   **B** **it saves words and moves a small cost onto the reader, and the cost is different for each word** — so the question is which cost you are prepared to pay   **C** it belongs in legal writing only'));
out.push(p('**b**  Listen again. **1** What happened to the minute Mrs Khoury wrote with _the latter_ in it?   **2** What does Mr Zahreddine say about _the same_ and _the said_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  The latter, and which one that was', [
  ['Ms Huda', 'Mrs Khoury — the minute with _the latter_ in it. What happened?'],
  ['Mrs Khoury', '⚠ **Two districts did the opposite of what the minute said and both were reading it correctly.** _The Deir Atiyah vehicle and the Saturday rota were discussed; the latter is to be amended._ **One district amended the rota and one amended the vehicle timetable.**'],
  ['Mrs Tarabishi', 'But _the latter_ is the second one. It is not ambiguous.'],
  ['Mrs Khoury', '⚠ **It is not ambiguous and it was misread, which is the useful part.** **Half the people who read _the latter_ reconstruct it by meaning and not by position** — **they decide which of the two the sentence is likely to be about, and they are right about as often as they are wrong.**'],
  ['Dr Qabbani', 'So never use it.'],
  ['Mrs Oueidat', '⚠ **Use it where the two things are plainly two and plainly in order**, and nowhere else. _The site copy and the file copy; the latter has not been produced._ **Two documents, one list, two words saved.**'],
  ['Mr Shihabi', 'What about _such_? I see it everywhere and I have never written it.'],
  ['Mrs Oueidat', '⚠ **_Such_ is the dangerous one, because it looks precise and refers to a class and not a thing.** _Such a change was rejected._ **Which change — the one proposed, the kind of change, or any change of that sort?** **Three readings, all grammatical.**'],
  ['Mr Tayara', 'And _did so_?'],
  ['Mrs Khoury', '⚠ **_Did so_ is the safest of the lot and almost nobody uses it.** **It picks up the whole verb phrase and it cannot pick up anything else.** _He asked for the costings to be taken out and I did so._ **There is nothing else in the sentence it could mean.**'],
  ['Mr Zahreddine', 'My profession writes _the same_ and _the said_ and both are worse than useless.'],
  ['Mrs Oueidat', 'Say why, because the room will think they are precise.'],
  ['Mr Zahreddine', '⚠ **_The said document_ tells you a document has been mentioned and not which one**, and in a four-page opinion three documents have been mentioned. **_The same has not been produced_ is the same fault with a pronoun missing.** **They survive because they sound careful.**'],
  ['Jad', 'Is there a test?'],
  ['Mrs Khoury', '⚠ **There is, and it takes four seconds: cover everything above the substitution and read the sentence.** **If you cannot supply the referent from the sentence itself, your reader is going back up the page** — **and about a third of them will not bother and will guess.**'],
  ['Mrs Ajouz', 'And the ones who guess are the ones who act on it.'],
  ['Mrs Rizk', '⚠ **Which happened to both my districts.** **Neither of them wrote to ask what the latter meant.** **They both decided, and one of them was wrong, and the wrong one spent four months on a timetable nobody had asked for.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is that I saved four words.** **Four words, against four months of somebody\'s work.**'],
]));
out.push(sp());
out.push(box('Language box – substitution, and the cost of each one', [
  '**What substitution is for.** ⚠ **It saves words and moves a small cost onto the reader, and the cost is different for each word.** **The question is never whether to substitute but which cost you are prepared to pay**, and the costs are not equal.',
  '**_The latter_ and _the former_.** ⚠ **Use them only where the two things are plainly two and plainly in order.** _The site copy and the file copy; the latter has not been produced._ **About half of all readers reconstruct _the latter_ by meaning rather than by position** — **they decide which one the sentence is probably about, and they are right about as often as not.**',
  '**_Such_, which looks precise and is not.** ⚠ _Such a change was rejected._ **It refers to a class and not a thing**: which change — the one proposed, the kind of change, or any change of that sort? **Three readings and all of them grammatical.**',
  '**_Did so_, which is the safest and the least used.** ⚠ **It picks up a whole verb phrase and can pick up nothing else.** _He asked for the costings to be taken out and I did so._ **Nothing else in the sentence is a candidate**, which is why it is worth teaching.',
  '**_The same_ and _the said_.** ⚠ **_The said document_ tells a reader that a document has been mentioned and not which one**, and by page four three have been. **They survive in professional prose because they sound careful** — **and a word that sounds careful and carries no information is the most expensive kind there is.**',
  '**Verb-phrase ellipsis, which is free.** ⚠ _The March certificate was issued and the June one was not._ _Two were requested and neither has arrived._ **Nothing is lost and the reader supplies the verb without noticing** — **and this is the substitution to reach for first, before any of the others.**',
  '**The four-second test.** ⚠ **Cover everything above the substitution and read the sentence.** **If you cannot supply the referent from that sentence alone, your reader is going back up the page** — **and about a third of them will guess instead, and the ones who guess are the ones who act.**',
  '**Pronunciation.** 🔊 **Track 6.4** **Say the substituted word with no emphasis at all.** ⚠ _…and the **latter** has not been produced_ **with a stress on _latter_ makes the reader look for a contrast that is not there.** **Say it flat** — **it is a pointing word and a pointing word that is stressed stops being a pointer and starts being a claim.**',
  '**Practise:** Substitute, and name the cost. **1** with _the latter_, where the two are plainly two  **2** with _did so_  **3** with verb-phrase ellipsis  **4** where _such_ would be ambiguous — so do not use it  **5** one where the full repetition is right — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair of sentences from the card. B **substitutes where it is safe and says what the substitution costs**, or **says that it is not safe and repeats the noun.** ⚠ **Two rows on each card cannot take a substitution at all.** **B must say which word would have been ambiguous and what the reader would have had to do.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The site copy and the file copy were requested. The file copy has not been produced._', '_The March certificate was issued. The June certificate was not issued._'],
  ['_⚠ The registrar and the ward sister were both asked. The registrar has not replied._', '_⚠ The rota and the vehicle were both discussed. The rota is to be amended._'],
  ['_He asked for the costings to be taken out. I took the costings out._', '_She asked me to withdraw the advice. I withdrew the advice._'],
  ['_⚠ The committee considered a second vehicle and a later rota. The second vehicle was rejected._', '_⚠ Two readings were taken at each position. The second reading was recorded._'],
  ['_Eleven queries were received. Nine of the eleven queries asked about an exception._', '_Four certificates are missing. All four certificates were issued._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each substitution and its cost. ⚠ **Rows 2 and 4 on both cards cannot take one.** **In rows 2 the two items are people or things of the same kind and _the latter_ would be reconstructed by meaning**; **in rows 4 the two items are not plainly in order, so _the former_ and _the latter_ both fail.** **The repair is the noun, repeated** — **and the class should count what repeating it costs: two words, against a reader going back up the page.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your cut version from 6.1** and find **every substitution in it.** ⚠ **Apply the four-second test to each: cover everything above it and read the sentence.** **Mark the ones that fail.** **In most documents one or two fail**, and they are almost always _such_, _the same_ or a _the latter_ with more than two candidates above it.'));
out.push(p('**b**  Swap. Your partner reads **only the sentence containing each substitution**, with everything above it covered, and says **what they think it refers to.** ⚠ **Write down their answers before you tell them.** **They will guess rather than say they do not know**, which is exactly what a reader does.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury wrote a minute with the latter in it and two districts did the opposite of each other, both reading it correctly. The minute said the Deir Atiyah vehicle and the Saturday rota were discussed, the latter to be amended; one district amended the rota and one amended the vehicle timetable. Mrs Tarabishi said the latter is the second one and is not ambiguous, and it is not ambiguous and it was misread, which is the useful part: half the people who read the latter reconstruct it by meaning and not by position, deciding which of the two the sentence is likely to be about, and they are right about as often as they are wrong. Dr Qabbani said so never use it, and Mrs Oueidat said use it where the two things are plainly two and plainly in order and nowhere else — the site copy and the file copy, the latter not produced: two documents, one list, two words saved. Mr Shihabi asked about such, which he sees everywhere and has never written, and such is the dangerous one because it looks precise and refers to a class and not a thing: such a change was rejected — which change, the one proposed, the kind of change, or any change of that sort? Three readings, all grammatical. Mr Tayara asked about did so, and Mrs Khoury said did so is the safest of the lot and almost nobody uses it: it picks up the whole verb phrase and cannot pick up anything else, and in he asked for the costings to be taken out and I did so there is nothing else it could mean. Mr Zahreddine said his profession writes the same and the said and both are worse than useless, and asked to say why, because the room will think they are precise: the said document tells you a document has been mentioned and not which one, and in a four-page opinion three documents have been mentioned, and the same has not been produced is the same fault with a pronoun missing. They survive because they sound careful. Mr Attar asked whether there is a test, and there is, and it takes four seconds: cover everything above the substitution and read the sentence, and if you cannot supply the referent from the sentence itself, your reader is going back up the page — and about a third of them will not bother and will guess. Mrs Ajouz said the ones who guess are the ones who act on it, and Mrs Rizk said that is what happened to both districts: neither wrote to ask what the latter meant, both decided, one was wrong, and the wrong one spent four months on a timetable nobody had asked for. And Mrs Khoury said the thing she will take away is that she saved four words — four words, against four months of somebody\'s work._'));
out.push(p('**Listener task:** write the substitutions in your own document that failed the four-second test.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Mrs Khoury rewrote. Answer the questions.'));
out.push(model([
  '**MINUTE OF THE DISTRICT MEETING OF 20 JANUARY** · _to the four districts_ · **D. Khoury**',
  '**1. The Saturday rota and the Deir Atiyah vehicle.** **Both were discussed.** **The Saturday rota is to be amended to end at half past twelve from 7 February.** **The vehicle timetable is not to be amended and no district is to change it.**',
  '**2. What the amendment covers.** **The rota, and only the rota.** **The change applies to the four Saturdays of February and is to be reviewed on 2 March.** **Districts that have already amended a vehicle timetable in reliance on the minute of 6 January are to restore it, and the cost of doing so is to be reported to this office by 14 February.** **The report is to be made by memorandum and not by telephone, so that this office holds a date against each district.**',
  '**3. The minute of 6 January.** **It read: _the Deir Atiyah vehicle and the Saturday rota were discussed; the latter is to be amended._** **Two districts acted on it and they acted in opposite directions.** **Both readings were available from the sentence and the office accepts that the sentence was the cause.** **The sentence was drafted in this office and approved by me on 6 January, and neither district is at fault for the reading it took.**',
  '**4. What this office will do about it.** **Minutes from this one onwards will name the thing being decided in every sentence that decides anything.** **No minute will carry _the latter_, _the former_, _such_ or _the same_ in an operative paragraph.** **The words are not forbidden in a narrative paragraph and nothing turns on those.** **An operative paragraph is one that requires, permits or forbids something, and the test is whether a district would act differently if the paragraph were removed.**',
  '**5. The cost, which this office is recording because it will be asked for.** **One district spent about four months of a clerk\'s part-time work on a vehicle timetable that was not wanted.** **No service was interrupted and no patient was affected.** **The four months are the district\'s own estimate and this office has not checked it and will not, checking it being worth less than the figure.** **The timetable itself is sound and may be useful if a second vehicle is ever funded.**',
  '**6. What is not being changed.** **The referral book requirement.** **The Saturday cover arrangement outside February.** **The February rota in the other three districts, which was never under discussion.** **The review date of 2 March, which was fixed in November and stands.**',
  '**7. One matter for the districts rather than this office.** **Neither district wrote to ask what the minute meant.** **A query would have cost one telephone call in the first week of January.** **Four queries a month is about an hour of this office\'s time and is the cheapest thing anybody here buys.** **The office would rather have four queries a month than one of these**, and it is recorded here so that nobody reads paragraph 4 as the whole of the remedy.',
]));
out.push(item('1', 'What does paragraph 1 do differently from the minute of 6 January?'));
out.push(item('2', 'What rule does the office adopt, and where does it say the rule does not apply?'));
out.push(item('3', 'What does paragraph 7 record, and why does she say it is there?'));
out.push(writers([
  'A document that substitutes safely: **name the thing in every sentence that decides anything** → **substitute only where the referent is in the same sentence** → **use verb-phrase ellipsis freely, because it costs nothing** → **keep _did so_ and leave _such_ and _the same_ alone** → **and where a substitution has already caused something, quote the sentence rather than describing it.**',
  '⚠ **Name the thing in an operative sentence, however clumsy the repetition looks.** _The Saturday rota is to be amended. The vehicle timetable is not to be amended._ **Four words of repetition against four months of a clerk\'s work** — **and the repetition is invisible to a reader who is looking for an instruction.**',
  '**Quote the sentence that caused the trouble.** ⚠ _It read: "the Deir Atiyah vehicle and the Saturday rota were discussed; the latter is to be amended."_ **A reader who is given a description has to reconstruct it**, and a reader who is given the sentence can see for themselves that both readings were available.',
  '**Say where your own rule does not apply.** ⚠ _The words are not forbidden in a narrative paragraph and nothing turns on those._ **A rule with no boundary is read as a style instruction and ignored within a month**; **a rule that names the case it does not cover is read as a decision.**',
  '⚠ And **record what the other party could have done, without making it the remedy.** _A query would have cost one telephone call._ **Put it last and say why it is there** — **otherwise a paragraph like that one is read as the office moving the fault, and the whole document stops working.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a minute that names what it decides (120 words or more).'));
out.push(p('**MINUTE OF ______________ OF ______________** · _to _______________ · **______________**   **1. ______________ and ______________.** **Both were discussed.** **______________ is to be ______________ from ______________.** **______________ is not to be ______________ and ______________.**   **2. What the ______________ covers.** **______________, and only ______________.** **The change applies to ______________ and is to be reviewed on ______________.**   **3. ______________.** **It read: _"______________."_** **______________ acted on it and ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every operative sentence names the thing it decides',
  'No substitution whose referent is outside its own sentence',
  'Verb-phrase ellipsis used where it is free',
  'The sentence that caused the trouble quoted, not described',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one operative sentence each**, and the room says what is being decided and about what.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole minute (260 words or more), to the shape in the writer\'s box: the decision with the thing named, what it covers, the sentence quoted, the rule and its boundary, the cost, what is not changing, and the matter for the other party.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every operative sentence names its object, no substitution reaching outside its sentence, and the problem sentence quoted.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an operative sentence of theirs with the noun repeated and then with _the latter_ in its place.** ⚠ **The room says which they would act on without checking.** **The repeated noun, every time** — and the class should be asked how much the repetition cost. **Two or three words.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **four words, against four months of somebody\'s work.**'));
out.push(hw('Take **a document of your own that governs what somebody else does** and find **every operative sentence.** ⚠ **Apply the four-second test to each substitution in them.** **Then rewrite the ones that fail with the noun repeated, and count the words you have added.** **It is usually under ten in a whole document.** **Bring the document, the failures and the word count.** **6.3 is what goes in front of the noun and what goes behind it.**'));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  In front of the noun, or behind it'));
out.push(p('**Function:** packing information in front of the noun, and knowing when to put it behind   ·   **Grammar:** premodification against postmodification · the three-modifier limit   ·   **Pronunciation:** a premodified phrase said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the longest noun phrase in anything you have written this month, read out exactly, and the number of words in it.** ⚠ **Count aloud.** Your teacher writes the phrases and the numbers up. **The longest in most classes is between nine and fourteen words**, and its writer will defend it as precise, which it is.'));
out.push(board('the hand-amended uninitialled 19 July purchase requisition site copy', 'Which document that is.'));
out.push(p('**b**  Which of these should move behind the noun? **1** _a short report_  **2** _the hand-amended, uninitialled, undated purchase requisition site copy_  **3** _the not-yet-produced file copy of the requisition_  **4** _the north lift_  **5** _the March certificate_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the front of the noun is for?   **A** detail   **B** **identifying which one, in words a reader already uses** — and everything that describes rather than identifies goes behind   **C** sounding technical'));
out.push(p('**b**  Listen again. **1** What happened to the list Mr Tayara circulated to his department heads?   **2** What does Mrs Oueidat say the test is, and what does she say about names?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  Fourteen words and one noun', [
  ['Ms Huda', 'Mr Tayara circulated a list and it came back. Why?'],
  ['Mr Tayara', '⚠ **Four of the six heads asked which room I meant**, and the phrase was _the first-floor east-corridor former science preparation room_. **Eight words and a hyphen, and it is exactly right.**'],
  ['Mrs Tarabishi', 'If it is exactly right, what is the difficulty?'],
  ['Mrs Khoury', '⚠ **A reader holds about three modifiers in front of a noun and then stops knowing what is being modified.** **By _former_ they have lost the floor.** **It is not a question of difficulty: it is a limit, and everybody has the same one.**'],
  ['Dr Qabbani', 'So what would you write?'],
  ['Mr Tayara', '⚠ **What everybody in the building calls it, which is the old prep room**, and then _on the first floor, at the east end_ behind it. **Two of the eight words moved and the other six went behind the noun.**'],
  ['Mrs Oueidat', '⚠ **And that is the test, and it is not about length.** **The front of the noun is for identifying which one, in words a reader already uses.** **Everything that describes rather than identifies goes behind.**'],
  ['Mr Shihabi', 'Give me the hard case. Mine are all legal documents.'],
  ['Mrs Oueidat', '⚠ **_The hand-amended uninitialled 19 July purchase requisition site copy._** **Every word is doing work and the phrase is unusable.** **Behind the noun: _the site copy of the purchase requisition of 19 July, amended by hand, the amendment not initialled._** **Longer, and a reader can take it one piece at a time.**'],
  ['Mr Zahreddine', 'It is four words longer and I would use it.'],
  ['Mrs Khoury', '⚠ **Which is the trade this unit keeps making.** **Unit 6 is about cutting, and the one place you spend words is here**, because a noun phrase a reader cannot hold is not shorter: it is a phrase they have to read twice.'],
  ['Jad', 'What about names? _The Saturday rota_ is premodified.'],
  ['Mrs Oueidat', '⚠ **_The Saturday rota_ is a name and names are exempt.** **The test is whether people say it out loud.** **If the office says _the Saturday rota_, write it; if you invented the phrase for this document, unpack it.**'],
  ['Mrs Ajouz', 'So I should listen to what people call things.'],
  ['Mrs Rizk', '⚠ **It is the cheapest research there is.** **I spent a year writing _the outpatient department Saturday clinic provision_ and the whole governorate calls it the Saturday clinic.**'],
  ['Mrs Tarabishi', 'And when there is no name, because the thing is new?'],
  ['Mrs Khoury', '⚠ **Then you are naming it, and whatever you write is what people will say for the next ten years.** **Choose two words.** **Nobody has ever shortened a name a document gave them.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is that my phrase was accurate and nobody could use it.** **Four of six heads wrote back, and the two who did not wrote back later, about the wrong room.**'],
]));
out.push(sp());
out.push(box('Language box – in front of the noun, or behind it', [
  '**The limit, and it is a limit and not a preference.** ⚠ **A reader holds about three modifiers in front of a noun and then stops knowing what is being modified.** _The first-floor east-corridor former science preparation room_ — **by _former_ they have lost the floor, and everybody has the same limit.**',
  '**What the front of the noun is for.** ⚠ **Identifying which one, in words the reader already uses.** _The March certificate._ _The north lift._ _The Saturday rota._ **Two words, and every one of them is how people in the building actually speak.**',
  '**What goes behind.** ⚠ **Everything that describes rather than identifies.** _The site copy of the purchase requisition of 19 July, amended by hand, the amendment not initialled._ **Longer by four words, and a reader can take it one piece at a time**, which a premodified version does not allow.',
  '**Names are exempt, and the test is whether people say them out loud.** ⚠ **If the office says _the Saturday rota_, write it.** **If you invented the phrase for this document, unpack it** — **and the cheapest research anybody in this room can do is to listen to what colleagues call the thing.**',
  '**The one place in this unit where you spend words.** ⚠ **Unit 6 cuts everywhere else.** **A noun phrase a reader cannot hold is not shorter: it is a phrase they read twice**, and two readings of eight words cost more than one reading of twelve.',
  '**And the hyphen is the warning.** ⚠ **A hyphen chain in front of a noun — _hand-amended_, _not-yet-produced_, _first-floor east-corridor_ — is almost always a clause that has been folded up.** **Unfold it and put it behind.** **One hyphenated pair is normal; two is a signal; three is a sentence in disguise.**',
  '**Pronunciation.** 🔊 **Track 6.6** **Say a premodified phrase as one unit, with the stress on the noun and none of the modifiers stressed.** ⚠ _the **March** certificate_ · _the **north** lift_. **Then try it with the eight-word phrase and hear it fall apart** — **you have to stress three or four things, and a phrase that cannot be said in one unit cannot be held in one either.**',
  '**Practise:** Put it in front or behind, and say why. **1** two short modifiers in front  **2** a hyphen chain unfolded behind  **3** a name, left alone  **4** a phrase you invented — so unpack it  **5** one where the long front version is right — and say what makes it so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the noun phrase from the card. B says **front or behind, and why** — and gives the repaired version where one is needed. ⚠ **Two rows on each card are names and must be left exactly as they are.** **B must say so and not improve them.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_the hand-amended uninitialled 19 July purchase requisition site copy_', '_the first-floor east-corridor former science preparation room_'],
  ['_⚠ the Saturday rota_', '_⚠ the north lift_'],
  ['_the not-yet-produced contractor-held north lift March test certificate_', '_the never-reconciled 2023 north district paper records box_'],
  ['_⚠ the referral book_', '_⚠ the form period_'],
  ['_the previously-unexamined September and November dispensing sheet set_', '_the as-yet-unsearched directorate archive paper original store_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each repair, and the word count before and after. ⚠ **Rows 2 and 4 on both cards are names and the class will improve them anyway**, which is the useful mistake. **Ask what a reader would call the thing** — **and in all four cases it is exactly what is on the card.** **The repairs in rows 1, 3 and 5 all come out longer**, and the class should say by how much: three or four words each, against a phrase read twice.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your longest noun phrase from Stage 1** and **count the modifiers in front of the noun.** ⚠ **Keep the two that identify which one and move everything else behind.** **Then read both versions aloud and count the words.** **The repaired version is nearly always longer and nearly always faster to read**, and the class should be asked to hold both facts at once.'));
out.push(p('**b**  Swap. Your partner reads your original phrase **once, at speed**, and then says **what the thing is.** ⚠ **If they cannot, ask them which word they lost.** **It is almost always the first modifier** — **the one furthest from the noun, which is where the identifying word usually is.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara circulated a list and four of the six heads asked which room he meant. The phrase was the first-floor east-corridor former science preparation room: eight words and a hyphen, and exactly right. Mrs Tarabishi asked what the difficulty is if it is exactly right, and Mrs Khoury said a reader holds about three modifiers in front of a noun and then stops knowing what is being modified — by former they have lost the floor, and it is not a question of difficulty but a limit, and everybody has the same one. Dr Qabbani asked what he would write instead, and what everybody in the building calls it, which is the old prep room, with on the first floor, at the east end behind it: two of the eight words moved and the other six went behind the noun. Mrs Oueidat said that is the test and it is not about length — the front of the noun is for identifying which one, in words a reader already uses, and everything that describes rather than identifies goes behind. Mr Shihabi asked for the hard case, since his are all legal documents, and the hand-amended uninitialled 19 July purchase requisition site copy is one: every word is doing work and the phrase is unusable, and behind the noun it is the site copy of the purchase requisition of 19 July, amended by hand, the amendment not initialled. Mr Zahreddine said it is four words longer and he would use it, and Mrs Khoury said that is the trade this unit keeps making: Unit 6 is about cutting and the one place you spend words is here, because a noun phrase a reader cannot hold is not shorter but a phrase they have to read twice. Mr Attar asked about names, since the Saturday rota is premodified, and the Saturday rota is a name and names are exempt: the test is whether people say it out loud, so if the office says the Saturday rota, write it, and if you invented the phrase for this document, unpack it. Mrs Ajouz said so she should listen to what people call things, and Mrs Rizk said it is the cheapest research there is — she spent a year writing the outpatient department Saturday clinic provision and the whole governorate calls it the Saturday clinic. Mrs Tarabishi asked what happens when there is no name because the thing is new, and Mrs Khoury said then you are naming it, and whatever you write is what people will say for the next ten years: choose two words, because nobody has ever shortened a name a document gave them. And Mr Tayara said the thing he will take away is that his phrase was accurate and nobody could use it: four of six heads wrote back, and the two who did not wrote back later, about the wrong room._'));
out.push(p('**Listener task:** write your own longest phrase in both versions, with both word counts.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the schedule Mr Tayara reissued. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _to the six department heads_ · _summer works, reissued_ · **26 January**',
  '**This replaces the schedule of 19 January.** **Nothing in the work has changed and every room is named as the building names it.** **Six rooms, three of them worked on, one of them not, and two named only because somebody asked.**',
  '**1. The old prep room**, on the first floor at the east end, formerly used for science preparation and empty since 2022. **Work: new flooring and two power points.** **Four days, in the first week of August.** **The room is 14 and the number is on the door, though nobody uses it.**',
  '**2. The lower hall**, which is the one with the stage. **Work: the stage front rebuilt and the two side steps replaced.** **Nine days, in the second and third weeks of August.** **The stage front is the original and the two side steps were put in in 1998.** **The hall is unusable for the whole nine days and the examinations office has been told in writing and has confirmed that no paper is sat in that fortnight.**',
  '**3. The north staircase**, from the ground floor to the second. **Work: handrail on the wall side, which is the side that has never had one.** **Two days, and either week.** **The handrail is the one item in this schedule that came from a governor and not from a head.**',
  '**4. The form rooms on the second floor**, numbers 21 to 26. **Work: none.** **They are in this schedule because three heads asked about them in January and the answer is that nothing is being done to them this summer.** **All three were asked separately and in all three cases the question was about storage.**',
  '**What is not in this schedule, and was in the one of 19 January.** **The science laboratory extract fans.** **They have come out because the quotation of 14 January covers one fan and there are three**, and a schedule with one of three fans in it would have been read as all of them. **One fan is the extract over the fume cupboard and the other two are room fans, and nobody reading a schedule would have separated them.** **The fans will appear in a separate note when the other two quotations are in.**',
  '**Access and keys.** **The caretaker holds every key named here.** **Heads who need access to a room during its work days are to ask him and not the contractor.** **The contractor has been told to refer all requests and has agreed in writing: the letter of 22 January is on the file and the caretaker has a copy.**',
  '**What I am asking the six of you for.** **One line each, by 2 February, saying whether anything in your department has to be out of a room before its first work day.** ⚠ **If the answer is nothing, write nothing** — **I shall take silence as nothing and I shall be wrong about one of you, which is why this line is here.**',
]));
out.push(item('1', 'How is each room named, and what follows the name in each case?'));
out.push(item('2', 'Why are the form rooms in the schedule, and why are the extract fans out of it?'));
out.push(item('3', 'What does he ask for, and what does he say about silence?'));
out.push(writers([
  'A schedule a reader can use: **name each thing as the building names it** → **put the describing material behind the name, in pieces** → **say what is in the list and is not being worked on, if somebody asked** → **say what has come out since the last version and why** → **and ask for one line, naming what silence will be taken to mean.**',
  '⚠ **Use the building\'s own name and put the description behind it.** _The old prep room, on the first floor at the east end, formerly used for science preparation and empty since 2022._ **Four pieces behind a three-word name** — **and every piece can be taken separately, which a premodified version does not allow.**',
  '**Keep a name short even when it is imprecise.** ⚠ _The lower hall, which is the one with the stage._ **The clause does the identifying and the name does the pointing**, and a reader who knows the building needs only the first three words.',
  '**Put something in a list to say that nothing is happening to it.** ⚠ _Work: none._ **Three heads asked, so the rooms are in the schedule with an empty entry** — **an absence a reader can see is worth more than a page of reassurance.**',
  '⚠ And **name what silence will be taken to mean.** _I shall take silence as nothing and I shall be wrong about one of you, which is why this line is here._ **A request that does not say what no reply means will get no replies from the people who have nothing to say and from the people who have not read it**, and those two groups are indistinguishable.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a schedule that names things as its readers name them (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **This replaces ______________.** **Nothing in ______________ has changed and ______________.**   **1. ______________**, ______________, ______________ and ______________. **Work: ______________.** **______________, in ______________.**   **2. ______________**, which is ______________. **Work: ______________.** **______________, in ______________.** **______________ is unusable for ______________ and ______________ has been told.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every thing named as its readers name it',
  'No more than two modifiers in front of any noun',
  'The describing material behind the name, in separate pieces',
  'An empty entry where somebody asked and nothing is happening',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their names** — the words in front of each noun — and the room says whether it could ask for that thing by that name.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole schedule (260 words or more), to the shape in the writer\'s box: the names, the description behind them, the empty entry, what has come out and why, and the one-line request with silence defined.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: names as the readers use them, no more than two modifiers in front, describing material behind, and silence defined.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a premodified phrase of theirs once, at speed, and the room says what the thing is.** ⚠ **Then the unpacked version, read the same way.** **The room gets the second one and usually not the first**, and the second is longer — which is the whole of this cycle and should be said by a student. Then the sentence the cycle ends on, which is Mr Tayara\'s: **my phrase was accurate and nobody could use it.**'));
out.push(hw('Take **a document of your own** and find **every noun phrase with three or more modifiers in front of the noun.** ⚠ **For each one, write down what the people who use the thing call it** — **and if you do not know, that is the task, and it costs one question.** **Then unpack the rest behind the noun and count the words both ways.** **Bring the phrases, the names and the counts.** **6.4 is the line that says what your cut removed.**'));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  The line that says what the cut removed'));
out.push(p('**Function:** saying in one line what a cut removed, to the person who asked for it   ·   **Grammar:** the declared cut · _the costings are out; the two figures that matter are in paragraph 2_   ·   **Pronunciation:** a declaration said as information and not as a complaint'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the last time somebody asked you to shorten something, and whether you told them what came out.** ⚠ **Two words: _told_ or _did not_.** Your teacher counts the two columns. **In most classes eight or nine of the ten did not**, and the one or two who did were working to a procedure that required it.'));
out.push(board('I have shortened it as requested.', 'Everything that went.'));
out.push(p('**b**  Which of these declares the cut? **1** _The costings are out; the two figures that matter are in paragraph 2._  **2** _I have shortened it as requested._  **3** _The report has been reduced to two pages._  **4** _Some detail has been removed for reasons of space._  **5** _Three things are no longer in it: the supplier correspondence, the 2024 comparison and the names of the two clerks._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the declaration is for?   **A** protecting the writer   **B** **letting the person who asked for the cut decide whether they still want it** — which is a decision they cannot make without knowing what went   **C** showing how much work was done'));
out.push(p('**b**  Listen again. **1** What happened to the figure Mrs Rizk cut from a two-page version?   **2** What does Mrs Khoury say about _some detail has been removed_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  Nobody asked what went', [
  ['Ms Huda', 'Mrs Rizk — the two-page version. What came out?'],
  ['Mrs Rizk', '⚠ **The cost of doing nothing.** **One sentence and one figure, and it was the only sentence in the proposal that was about the reader.**'],
  ['Mrs Tarabishi', 'Why did that one go?'],
  ['Mrs Rizk', '⚠ **Because it was in the fourth paragraph and the fourth paragraph was the one over the page.** **I cut to fit and I cut from the end.** **That is how almost everybody cuts and it has nothing to do with importance.**'],
  ['Dr Qabbani', 'And nobody noticed.'],
  ['Mrs Rizk', '⚠ **Nobody could.** **A fact taken out of a document leaves no hole.** **The budget holder read a complete, shorter proposal with no cost of inaction in it, and refused it in four days.**'],
  ['Mrs Oueidat', '⚠ **And this is the part that is new at this level.** **The repair is not to keep the sentence — sometimes it has to go.** **The repair is one line to the person who asked you to cut it, saying what went.**'],
  ['Mr Shihabi', 'A desk would ignore that line.'],
  ['Mrs Khoury', '⚠ **A desk would read it in two seconds and about one time in five would put the thing back.** **One in five is a very good return on eleven words.**'],
  ['Mr Tayara', 'What does the line look like?'],
  ['Mrs Oueidat', '⚠ _The costings are out; the two figures that matter are in paragraph 2._ **Name what went and say where the surviving version carries the weight.** **Eleven words, and the reader can decide.**'],
  ['Mrs Ajouz', 'I have written _some detail has been removed for reasons of space_ for years.'],
  ['Mrs Khoury', '⚠ **That sentence is worse than silence and the room should see why.** **It tells the reader something is missing and not what**, so a careful reader now distrusts the whole document and cannot check any part of it. **Silence at least leaves them reading.**'],
  ['Jad', 'And if what went was genuinely unimportant?'],
  ['Mr Zahreddine', '⚠ **Then the line takes four words and costs you nothing.** _The supplier correspondence is out._ **It is not an apology and it must not sound like one.**'],
  ['Mrs Rizk', 'That is the part I get wrong. Mine sound like complaints.'],
  ['Mrs Oueidat', '⚠ **Because they are written to the person who made you cut it, and you are annoyed.** **Write it as a line of information: a noun, a verb, a location.** **No adverb anywhere in it.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is that it was refused in four days.** **The one sentence that was about him, and I took it out to fit a page.**'],
]));
out.push(sp());
out.push(box('Language box – declaring the cut', [
  '**What the declaration is for.** ⚠ **It lets the person who asked for the cut decide whether they still want it**, which is a decision they cannot make without knowing what went. **It is not protection for the writer and it must not read as protection.**',
  '**The shape, and it is three parts.** ⚠ **What went. Where the surviving version carries the weight. Nothing else.** _The costings are out; the two figures that matter are in paragraph 2._ **Eleven words, and a reader can act on it in two seconds.**',
  '**Why _some detail has been removed_ is worse than silence.** ⚠ **It tells a reader that something is missing and not what**, so a careful reader distrusts the whole document and cannot check any part of it. **Silence at least leaves them reading.**',
  '**Where the cut actually falls, which is not where people think.** ⚠ **Almost everybody cuts to fit and cuts from the end**, and the end of a document is where the cost of inaction, the limitation and the request usually live. **The declaration catches exactly this**, because a writer who has to name what went will see what they have done.',
  '**No adverb, and no apology.** ⚠ _The supplier correspondence is out._ **A noun, a verb, a location, and nothing else** — **the line is written to the person who made you cut it, you are annoyed with them, and every adverb you reach for is the annoyance.**',
  '**And the return on it.** ⚠ **About one time in five the reader puts the thing back.** **One in five on eleven words is the best arithmetic in this unit** — **and the other four times you have a record of a decision you made, which is what 6.1 said a cut was.**',
  '**Pronunciation.** 🔊 **Track 6.8** **Say the declaration flat, as information.** ⚠ _The costings are out._ **With a fall on _out_ and nothing else stressed.** **A rise anywhere in it turns the line into a question about whether the cut was right, and the reader hears a complaint** — **and the one thing a reader will not do with a complaint is act on it.**',
  '**Practise:** Declare a cut in one line. **1** where a figure went  **2** where a whole section went  **3** where what went was unimportant  **4** where you disagree with the cut — and still write it flat  **5** one where nothing went — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads what was asked for and what was cut. B writes **the one-line declaration** and reads it aloud, flat. ⚠ **Two rows on each card describe cuts that removed no fact at all**, and the line there is different: **it says so, in four words, and that is also worth writing.** Change cards.'));
out.push(table(['Card A – what was asked, and what went', 'Card B – what was asked, and what went'], [
  ['_"Two pages." The cost of doing nothing, one sentence._', '_"One page." The supplier correspondence, four paragraphs._'],
  ['_⚠ "Shorter." Forty-one empty frames and two repeated paragraphs._', '_⚠ "Half the length." The method justification and three redundant pairs._'],
  ['_"Fit it on the agenda." The limitation on the figure._', '_"One side." The names of the two clerks and the 2024 comparison._'],
  ['_⚠ "Tighten it." Nine instances of_ it should be noted that.', '_⚠ "Cut it down." Two paragraphs that said the same thing twice._'],
  ['_"Two hundred words." The second of the two counts, and its date._', '_"Half a page." The list of what was not examined._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each declaration, and whether it contains an adverb. ⚠ **Rows 2 and 4 on both cards removed no fact**, and the line is _nothing has come out but words_ or four words of your own. **Collect the adverbs that got in** — _unfortunately_, _necessarily_, _simply_, _regrettably_ — **and ask whose annoyance each one is.** **Every one belongs to the writer and none to the reader.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the list of what went** from your 6.1 homework and **write the one-line declaration for it.** ⚠ **A noun, a verb, a location, no adverb.** **Then read it aloud and check it against the three parts: what went, where the weight now sits, nothing else.** **Most first attempts have four parts and the fourth is an explanation nobody asked for.**'));
out.push(p('**b**  Swap. Your partner is the person who asked for the cut. They read **only your declaration** and say **whether they want the thing put back.** ⚠ **Count the yeses in the room.** **It is usually one in four or five**, and the students whose line produced a yes should read it out.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk cut a proposal to two pages and what came out was the cost of doing nothing: one sentence and one figure, and the only sentence in the proposal that was about the reader. Mrs Tarabishi asked why that one went, and because it was in the fourth paragraph and the fourth paragraph was the one over the page — she cut to fit and she cut from the end, which is how almost everybody cuts and has nothing to do with importance. Dr Qabbani said and nobody noticed, and nobody could: a fact taken out of a document leaves no hole, and the budget holder read a complete, shorter proposal with no cost of inaction in it and refused it in four days. Mrs Oueidat said this is the part that is new at this level — the repair is not to keep the sentence, because sometimes it has to go, but one line to the person who asked you to cut it, saying what went. Mr Shihabi said a desk would ignore that line, and Mrs Khoury said a desk would read it in two seconds and about one time in five would put the thing back, and one in five is a very good return on eleven words. Mr Tayara asked what the line looks like, and the costings are out, the two figures that matter are in paragraph 2: name what went and say where the surviving version carries the weight, in eleven words, and the reader can decide. Mrs Ajouz said she has written some detail has been removed for reasons of space for years, and Mrs Khoury said that sentence is worse than silence and the room should see why — it tells the reader something is missing and not what, so a careful reader distrusts the whole document and cannot check any part of it, and silence at least leaves them reading. Mr Attar asked what happens if what went was genuinely unimportant, and Mr Zahreddine said then the line takes four words and costs you nothing: the supplier correspondence is out, and it is not an apology and must not sound like one. Mrs Rizk said that is the part she gets wrong, because hers sound like complaints, and Mrs Oueidat said that is because they are written to the person who made you cut it and you are annoyed — write it as a line of information, a noun, a verb, a location, and no adverb anywhere in it. And Mrs Rizk said the thing she will take away is that it was refused in four days: the one sentence that was about him, and she took it out to fit a page._'));
out.push(p('**Listener task:** write your own declaration, and underline any adverb in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note Mrs Rizk now sends with every shortened document. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _to the governorate health office_ · _Saturday clinic proposal, two-page version_ · **28 January**',
  '**The two-page version is attached and three things are out of it.** **The long version was four pages and the attached is two: nine hundred and thirty words against two thousand and ten.**',
  '**One. The cost to this office of the present arrangement.** **It was a sentence and a figure: about a hundred and fourteen thousand pounds a year, built from your own 2025 schedule.** **It is now a clause in paragraph 2 and the figure is not in the document at all.** **The sentence read that your own 2025 schedule costs an accident attendance at about nine thousand pounds and an outpatient attendance at about three thousand.** **The working is on the sheet behind this note if you want it.**',
  '**Two. The refusal that went with that figure.** **The long version said that I do not know whether the other seventeen behaved like the two and am not claiming it.** **That sentence has gone with the figure it qualified**, which is the right order to lose them in and is the only reason I am content to lose either.',
  '**Three. The table of the eleven Saturdays.** **Eleven rows, each with a date and a number turned away.** **The total is in paragraph 1 and the distribution is not.** **The distribution is the part that shows the problem is the nine o\'clock cut-off and not the volume**, and a reader who has only the total will reach for a second vehicle. **Four of the eleven Saturdays account for twelve of the nineteen and all four are in February and March.**',
  '**What is still there, and carries the weight.** **The nineteen, the one in three, the ask, the rota condition and the withdrawal undertaking.** **Paragraph 2 carries what paragraphs 2 to 4 carried before.** **The ask and the date are unchanged and are where they were.** **The two paragraphs that went are 3 and 4 of the long version and nothing from 1 or 5 has moved.**',
  '**Which of the three I should put back, if you will have a third page.** **The table.** **Not the figure, which can live on the sheet behind, and not the refusal, which only exists to qualify the figure.** **A third page would take the table and about forty words of heading and nothing else.** **The table changes what anybody would propose and the other two change only how much they believe it.**',
  '**And one thing that is not about this document.** **I cut from the end because the end was over the page.** **I have done that for eleven years and this is the first time I have written down what it cost**, which is why the list above exists. **I have since asked two colleagues what they cut from, and both said the end, without being prompted and without having been asked the question before.** **The list will be attached to everything from now on.**',
]));
out.push(item('1', 'What are the three things that came out, and what does she say about the second?'));
out.push(item('2', 'Which one would she put back, and what reason does she give for the other two?'));
out.push(item('3', 'What does she say about where the cut fell, and how long has she done it?'));
out.push(writers([
  'A note declaring a cut: **what went, numbered** → **what each thing was, in a figure or a count** → **where the surviving version carries the weight** → **which one you would put back, and why not the others** → **and where the cut fell, if you know.**',
  '⚠ **Name what went and give it a size.** _It was a sentence and a figure: about a hundred and fourteen thousand pounds a year._ **A reader who is told _some detail_ cannot act; a reader who is told _a sentence and a figure_ can decide in two seconds.**',
  '**Say where the weight is now.** ⚠ _Paragraph 2 carries what paragraphs 2 to 4 carried before._ **This is the half of the declaration that people leave out**, and it is the half that stops a reader going to look for the missing thing in the wrong place.',
  '**Rank them, and give the reason for the ranking.** ⚠ _The table changes what anybody would propose and the other two change only how much they believe it._ **A reader with one page to spare will put back whatever is first on your list** — **so the ranking is a decision you are making for them, and it should be the one you would defend.**',
  '⚠ And **say where the cut fell, if you can see it.** _I cut from the end because the end was over the page._ **Almost everybody does, and the end is where the cost of inaction, the limitation and the request live** — **and a writer who has written that sentence once will never cut the same way again.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note declaring a cut (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **The ______________ version is attached and ______________ things are out of it.**   **One. ______________.** **It was ______________: ______________.** **It is now ______________ and ______________ is not in the document at all.**   **Two. ______________.** **The long version said that ______________.** **That has gone with ______________**, which is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each thing that went, named and given a size',
  'Where the surviving version carries the weight',
  'The one you would put back, and why not the others',
  'No adverb and no apology anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first numbered item**, and the room says whether it would put the thing back.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the numbered list, each with its size, where the weight sits now, the ranking with its reason, and where the cut fell.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: each item named and sized, the weight located, the ranking with a reason, and no adverb anywhere.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their declaration twice: once flat and once with the voice rising on the last word.** ⚠ **The room says what the rising version was.** **A complaint** — and the class should be asked what a reader does with a complaint, which is nothing. Then the sentence the cycle ends on, which is Mrs Rizk\'s: **the one sentence that was about him, and I took it out to fit a page.**'));
out.push(hw('Take **the two versions from your 6.1 homework** and write **the declaration for the person who asked for the cut.** ⚠ **Then send it.** **This is the one piece of homework in Book 1 that has to leave the room**, because the whole of the cycle is the one-in-five chance that somebody puts the thing back. **Bring the declaration and the reply, if one comes.** **6.5 compresses four paragraphs into one without flattening what each of them claimed.**'));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  Four paragraphs into one, with the strengths intact'));
out.push(p('**Function:** compressing four paragraphs into one without flattening the claim strengths   ·   **Grammar:** _shows · suggests · is consistent with · does not exclude_ under compression   ·   **Pronunciation:** the weak claim said at the same volume as the strong one'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one claim from your own writing, read out exactly, and then the same claim as somebody else would repeat it.** ⚠ **Your version first and theirs second.** Your teacher writes both. **In most classes seven of the ten pairs show a claim that got stronger in the second version**, and nobody in the room did it deliberately.'));
out.push(board('The April fall is consistent with the vacancy.', 'The vacancy caused the April fall.'));
out.push(p('**b**  Which compression keeps the claim strength? _(Original: the April figure fell · this is consistent with the vacancy · it does not establish a cause · no other change has been identified.)_ **1** _The April fall was caused by the vacancy._  **2** _The April fall shows the effect of the vacancy._  **3** _The April fall is consistent with the vacancy and no other change has been identified._  **4** _The April fall is consistent with the vacancy, which does not establish a cause._  **5** _The April fall was probably due to the vacancy._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide compression does to claims?   **A** nothing, if the words are kept   **B** **it flattens four strengths into one, and the one it flattens to is always the strongest** — because the hedges are the words that look removable   **C** it makes them shorter'));
out.push(p('**b**  Listen again. **1** What happened to Dr Qabbani\'s four paragraphs in the committee\'s summary?   **2** What does Mrs Oueidat say about the word _suggests_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  Four strengths and one word', [
  ['Ms Huda', 'Dr Qabbani — the four paragraphs and what the committee did with them.'],
  ['Dr Qabbani', '⚠ **Four paragraphs with four different strengths in them, and the summary said _shows_ four times.** **The person who wrote it was careful and had read all four.**'],
  ['Mrs Tarabishi', 'What were the four strengths?'],
  ['Dr Qabbani', '⚠ **_Shows_ for the thirty-one and the ten, which is a count.** **_Suggests_ for the seven of eleven.** **_Is consistent with_ for the night presentations.** **And _does not exclude_ for the two who arrived with antibiotics running.**'],
  ['Mrs Khoury', '⚠ **And the summary made all four _shows_, which is the only direction this ever goes.** **Compression never weakens a claim.** **The hedge is the part that looks removable, because it is the part that is not information.**'],
  ['Mr Shihabi', 'A desk does that twice a day.'],
  ['Mrs Oueidat', '⚠ **And the word to watch is _suggests_, which is the one that disappears first.** **_The data suggests_ becomes _the data shows_ in one keystroke and nobody can see the difference on the page.** **In a hearing it is the difference between an opinion and a finding.**'],
  ['Mr Tayara', 'So how do you compress four paragraphs and keep four strengths?'],
  ['Dr Qabbani', '⚠ **You do not keep four.** **You keep the strongest claim and the weakest, and you say that the two in the middle are in the paper.** **Two strengths survive compression and four do not, and choosing which two is the work.**'],
  ['Mrs Ajouz', 'Which two did you keep?'],
  ['Dr Qabbani', '⚠ **The count, which is _shows_, and the _does not exclude_.** **The strongest thing I know and the weakest thing I am not ruling out** — **and a reader who has those two has the shape of the whole paper.**'],
  ['Jad', 'And the middle two are lost.'],
  ['Mrs Khoury', '⚠ **The middle two are in the paper and are not in the summary, which is a different thing from lost.** **And it is declared, which is 6.4** — _the seven of eleven and the night presentations are in paragraphs 3 and 4._'],
  ['Mrs Rizk', 'Is there a way of writing that cannot be flattened?'],
  ['Mr Zahreddine', '⚠ **Put the strength in the arithmetic rather than in the verb.** _Seven of eleven_ **cannot be strengthened by anybody.** _The data suggests an association_ **can be strengthened by deleting two words.**'],
  ['Mrs Oueidat', '⚠ **Which is the most useful sentence in this cycle and it is not about compression at all.** **A claim carried by a verb is at the mercy of whoever repeats it.** **A claim carried by two numbers is not.**'],
  ['Mr Shihabi', 'And if the committee will take only one sentence?'],
  ['Dr Qabbani', '⚠ **Then it takes the count, and the count is the one claim that deserves to travel alone.**'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is that the summary was written by somebody careful.** **She read all four paragraphs and wrote _shows_ four times**, and if I had given her two numbers she could not have done it.'],
]));
out.push(sp());
out.push(box('Language box – claim strength under compression', [
  '**The four strengths, from strongest to weakest.** ⚠ _shows_ — **a count or a measurement.** _suggests_ — **a pattern you would act on and would not swear to.** _is consistent with_ — **a fact that fits and fits other things too.** _does not exclude_ — **a possibility you are declining to rule out.**',
  '**What compression does to them.** ⚠ **It flattens all four to the strongest, every time**, because the hedge is the part that looks removable: it carries no information and takes up the words a summariser is trying to save. **Compression never weakens a claim and nobody has ever seen it happen.**',
  '**_Suggests_ is the one that goes first.** ⚠ _The data suggests_ → _the data shows_ **is one keystroke and invisible on the page.** **In a hearing it is the difference between an opinion and a finding**, and the person who made the change was being helpful.',
  '**How to compress four paragraphs: keep two strengths and declare the rest.** ⚠ **The strongest claim and the weakest.** _Thirty-one of forty-one had a second sample. The night presentations do not exclude a different explanation._ **A reader with those two has the shape of the paper** — **and the middle two are declared, as in 6.4.**',
  '**And the repair that makes a claim un-flattenable.** ⚠ **Put the strength in the arithmetic and not in the verb.** _Seven of eleven_ **cannot be strengthened by anybody.** _The data suggests an association_ **can be strengthened by deleting two words.** **A claim carried by a verb is at the mercy of whoever repeats it; a claim carried by two numbers is not.**',
  '**The test, and it takes a minute.** ⚠ **Give your compressed version to somebody and ask them to shorten it by a third.** **Watch which words they take.** **They will take the hedges and they will not notice** — **and whatever survives that is what your reader will actually receive.**',
  '**Pronunciation.** 🔊 **Track 6.10** **Read a weak claim at exactly the volume and speed of a strong one.** ⚠ _The night presentations **do not exclude** a different explanation._ **Students drop their voice on a hedge, which tells a listener it is removable** — **and a listener who has been told a clause is removable removes it.**',
  '**Practise:** Compress and keep the strength. **1** a count, with _shows_  **2** a pattern, with _suggests_  **3** a fact that fits, with _is consistent with_  **4** four paragraphs into one, keeping two strengths  **5** one where the strength goes into the arithmetic — and say what that buys',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four claims from the card. B **compresses them into one sentence, keeping the strongest and the weakest**, and then says **which two are being declared rather than carried.** ⚠ **Two rows on each card contain a claim whose strength is already in the arithmetic.** **B must say so, because that one cannot be flattened and does not need a verb to protect it.** Change cards.'));
out.push(table(['Card A – four claims', 'Card B – four claims'], [
  ['_Thirty-one of forty-one had a second sample · seven of eleven reached a diagnosis · the night presentations fit · the two on antibiotics are not excluded._', '_Eleven of a hundred and four were wrong · the printed sheets suggest the cause · the flag fits the pattern · a dose change is not excluded._'],
  ['_⚠ Twenty-two records against a monthly average of thirty-one._', '_⚠ Forty-one positions measured, fifty-five of fifty-six below grade._'],
  ['_The eleven queries all concerned the date · nine asked about an exception · the sentence fits · a clerk change is not excluded._', '_Nineteen turned away · nine after the rota ended · the cut-off fits · the volume is not excluded._'],
  ['_⚠ Four of twelve certificates are not in the file._', '_⚠ Two of nineteen presented at the governorate hospital._'],
  ['_The box was signed for on 26 June · the clerks suggest it went to the store · the vacancy fits · a second box is not excluded._', '_The appeal took fourteen months · the target is eight · the information request fits · a backlog is not excluded._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each compressed sentence and the two claims declared. ⚠ **Rows 2 and 4 on both cards are arithmetic and carry their own strength.** **_Twenty-two against a monthly average of thirty-one_ needs no verb at all** — **nobody can strengthen it, and nobody can weaken it either, which is the trade.** **Ask the room what the arithmetic version cannot do**, and the answer is that it cannot tell you what the writer thinks it means.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **four paragraphs of your own** and **mark the strength of each claim** — _shows_, _suggests_, _is consistent with_, _does not exclude_. ⚠ **Then compress them into one sentence keeping the strongest and the weakest**, and write the declaring line for the other two. **If all four of your paragraphs are _shows_, that is the finding**, and it means the strengths were flattened before anybody else got to them.'));
out.push(p('**b**  Swap. Your partner shortens your compressed sentence by a third. ⚠ **Watch which words they take.** **They will take the hedges and they will not notice they have done it.** **Then show them, and ask what they thought they were removing.** **The answer is almost always _nothing_, which is accurate and is the problem.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani wrote four paragraphs with four different strengths in them and the committee\'s summary said shows four times, and the person who wrote it was careful and had read all four. Mrs Tarabishi asked what the four strengths were: shows for the thirty-one and the ten, which is a count; suggests for the seven of eleven; is consistent with for the night presentations; and does not exclude for the two who arrived with antibiotics running. Mrs Khoury said the summary made all four shows, which is the only direction this ever goes — compression never weakens a claim, because the hedge is the part that looks removable, being the part that is not information. Mr Shihabi said a desk does that twice a day, and Mrs Oueidat said the word to watch is suggests, which is the one that disappears first: the data suggests becomes the data shows in one keystroke and nobody can see the difference on the page, and in a hearing it is the difference between an opinion and a finding. Mr Tayara asked how you compress four paragraphs and keep four strengths, and you do not keep four — you keep the strongest claim and the weakest and say that the two in the middle are in the paper, because two strengths survive compression and four do not, and choosing which two is the work. Mrs Ajouz asked which two he kept, and the count, which is shows, and the does not exclude: the strongest thing he knows and the weakest thing he is not ruling out, and a reader who has those two has the shape of the whole paper. Mr Attar said so the middle two are lost, and Mrs Khoury said they are in the paper and not in the summary, which is a different thing from lost, and it is declared, which is 6.4. Mrs Rizk asked whether there is a way of writing that cannot be flattened, and Mr Zahreddine said put the strength in the arithmetic rather than in the verb: seven of eleven cannot be strengthened by anybody, and the data suggests an association can be strengthened by deleting two words. Mrs Oueidat said that is the most useful sentence in the cycle and it is not about compression at all — a claim carried by a verb is at the mercy of whoever repeats it, and a claim carried by two numbers is not. Mr Shihabi asked what happens if the committee will take only one sentence, and then it takes the count, which is the one claim that deserves to travel alone. And Dr Qabbani said the thing he will take away is that the summary was written by somebody careful: she read all four paragraphs and wrote shows four times, and if he had given her two numbers she could not have done it._'));
out.push(p('**Listener task:** write the strength of each of your own four claims, in one word each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the one-paragraph summary Dr Qabbani now puts at the top of every paper. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _to the clinical governance committee_ · _culture-negative admissions: summary and paper_ · **30 January**',
  '**Summary.** **Of forty-one culture-negative admissions in the three years to March, thirty-one had a second blood sample and ten did not.** **The ten do not exclude an explanation that would make the second sample unnecessary, and eight of them presented at night.** **Paragraphs 3 and 4 carry two further claims at lower strengths and neither is in this summary.**',
  '**What the summary keeps and why.** **The first sentence is a count and nobody can strengthen it.** **The second is the weakest thing in the paper and it is here because a committee that has only the count will act on it.** **The two in the middle — that seven of eleven reached a serological diagnosis, and that the night presentations fit a staffing explanation — are findings I would not want quoted without their paragraphs.**',
  '**Paragraph 3, in full strength.** **In eleven of the thirty-one, the second sample was available and the first was not, and in seven of those eleven a serological diagnosis was reached.** **The eleven are every admission in which the two samples disagreed and there were no others.** **Eleven is a small number and the eleven were not selected.** **This suggests that the second sample carries diagnostic weight and it does not establish it.**',
  '**Paragraph 4, in full strength.** **Eight of the ten presented at night.** **This is consistent with a staffing explanation and it is consistent with three others, including that night admissions are sicker on arrival.** **Night is taken as between eight in the evening and eight in the morning, which is a shift boundary and not a clinical one.** **I have not separated them and the records will not.**',
  '**What would separate them.** **Two lines on the admissions sheet from January: the time, and whether the first sample had already gone.** **About eighteen months of those two lines would answer paragraph 4 and would not answer paragraph 3.** **Paragraph 3 would need a different study and I am not proposing one.**',
  '**On the arithmetic, which is the part I should like the committee to notice.** **Thirty-one and ten are counts and will survive any summary anybody writes.** **_Suggests_ and _is consistent with_ will not.** **If this paper is minuted, the minute will say that the second sample reached a diagnosis in seven of eleven cases**, and that sentence is stronger than anything in paragraph 3. **I have watched it happen to three of my own papers, and each minute was written by somebody who had read the paper carefully.**',
  '**One thing that is mine.** **I wrote _shows_ in a paper in 2024 for a figure that was a count of eleven.** **Nobody challenged it and the sentence is still quoted.** ⚠ **It was the strongest word available and the figure did not deserve it**, and I have not withdrawn it because withdrawing it would draw attention to a conclusion that happens to be right.',
]));
out.push(item('1', 'Which two claims are in the summary, and why those two?'));
out.push(item('2', 'What does he say about what will survive a minute, and what will not?'));
out.push(item('3', 'What does he admit about the 2024 paper, and why has he not withdrawn it?'));
out.push(writers([
  'A summary that survives being quoted: **the strongest claim first, as arithmetic** → **the weakest claim second, as a refusal to exclude** → **a line saying the middle claims are in the paper and are not here** → **the middle claims given in full strength below** → **and a note of what will survive a minute and what will not.**',
  '⚠ **Make the strongest claim out of two numbers.** _Thirty-one had a second sample and ten did not._ **Nobody can strengthen it and nobody can weaken it** — **and that is the only protection a claim ever gets, because a verb can be changed by anybody who repeats you.**',
  '**Put the weakest claim in the summary too, and say why it is there.** ⚠ _The ten do not exclude an explanation that would make the second sample unnecessary._ **A committee with only the count will act on the count** — **and the weakest claim is what stops them, and it has to be in the thing they read.**',
  '**Declare the claims you are not carrying.** ⚠ _Paragraphs 3 and 4 carry two further claims at lower strengths and neither is in this summary._ **One sentence, and it is 6.4 arriving inside a document rather than beside it.**',
  '⚠ And **say what will survive a minute.** _If this paper is minuted, the minute will say that the second sample reached a diagnosis in seven of eleven cases._ **Naming the sentence your reader is about to write is the only way of stopping it** — **and if you cannot stop it, you have at least told them what they are doing.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the summary and the first full-strength paragraph (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **Summary.** **Of ______________, ______________ and ______________.** **The ______________ do not exclude ______________, and ______________.** **Paragraphs ______________ carry ______________ and neither is in this summary.**   **What the summary keeps and why.** **The first sentence is ______________ and nobody can strengthen it.** **The second is ______________ and it is here because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The strongest claim written as arithmetic',
  'The weakest claim in the summary, with its reason',
  'The middle claims declared, not carried',
  'A line saying what a minute will say',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their summary**, and the room writes the minute it would produce.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole paper (260 words or more), to the shape in the writer\'s box: the summary, what it keeps and why, the middle claims at full strength, what would separate them, and what a minute will say.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the strongest claim as arithmetic, the weakest claim present, the middle claims declared, and the minute predicted.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Two students exchange summaries and each writes the one-line minute the other\'s summary would produce.** ⚠ **Then both read the two minutes out.** **Where a minute is stronger than the summary it came from, the summary has a verb in it that should have been a number.** **Count how many of the room\'s minutes are stronger.** Then the sentence the cycle ends on, which is Dr Qabbani\'s: **if I had given her two numbers she could not have done it.**'));
out.push(hw('Take **four paragraphs of your own** and mark each claim\'s strength in one word. ⚠ **Then compress them to one sentence keeping the strongest and the weakest, and write the declaring line for the middle two.** **Then do the hard part: find the one claim whose strength is in a verb and rewrite it as arithmetic.** **If you cannot, write one line saying what you would have to count.** **Bring the four strengths, the compression and the arithmetic version.** **6.6 is the report that is already at its minimum length**, and the sentence at the top that says so in a way a reader can check.'));

// ===================== 6.6 =====================
out.push(h2('6.6  The report that is already at its minimum'));
out.push(p('**Function:** writing the report that is already at its minimum length, and saying so at the top in a way a reader can check   ·   **Grammar:** the checkable claim about your own document   ·   **Pronunciation:** a claim about your own work said without defensiveness'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence you have written about your own document** — _this report is necessarily detailed_, _I have kept this as brief as possible_, _a fuller version is available_. ⚠ **Read it out and then say whether a reader could check it.** Your teacher writes the checkable ones in one column and the rest in the other. **The second column is nearly always longer.**'));
out.push(board('This report has been kept to the minimum necessary.', 'Nothing a reader can test.'));
out.push(p('**b**  Which claim can a reader check? **1** _This report is as short as it can be._  **2** _Every effort has been made to keep this brief._  **3** _This report has been kept to the minimum necessary._  **4** _This report is 940 words and carries 41 facts, listed on page 2._  **5** _Nothing in this report appears twice; the three repeated figures are marked and are repeated deliberately._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a claim about your own document should do?   **A** reassure the reader   **B** **give the reader something they can test in about ten seconds** — because an untestable claim about length is read as an apology for the length   **C** explain the method'));
out.push(p('**b**  Listen again. **1** What happened when Mrs Oueidat put a fact count at the top of a report?   **2** What does Mr Zahreddine say about _a fuller version is available_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  A number at the top', [
  ['Ms Huda', 'Mrs Oueidat put a fact count at the top of a report. What came back?'],
  ['Mrs Oueidat', '⚠ **Nothing came back, which was the point.** **Eleven reports went to that committee and mine was the only one nobody asked to be summarised.**'],
  ['Mrs Tarabishi', 'Because of a number at the top?'],
  ['Mrs Oueidat', '⚠ **Because of what the number told them.** _This report is nine hundred and forty words and carries forty-one facts, listed on page 2._ **A reader who sees that knows the ratio before they start**, and the ratio is what they were really asking about when they asked for a summary.'],
  ['Dr Qabbani', 'They want to know whether it will waste their time.'],
  ['Mrs Khoury', '⚠ **They want to know whether it is padded, and they have no way of telling from the outside.** **Length tells them nothing: a four-page report can be dense and a one-page report can be empty.** **The count is the only thing that separates them.**'],
  ['Mr Shihabi', 'Does anybody actually turn to page 2?'],
  ['Mrs Oueidat', '⚠ **Two of the eleven did, and one of them checked four of the forty-one.** **That is a very small amount of checking and it is enough** — **a claim that can be checked behaves differently from one that cannot, whether or not anybody checks it.**'],
  ['Mr Tayara', 'What is wrong with _I have kept this as brief as possible_?'],
  ['Mrs Khoury', '⚠ **It is an apology and a reader hears it as one.** **It says: this is long and I am sorry.** **And it cannot be wrong, which is the test** — **a sentence that no evidence could contradict is not information.**'],
  ['Mr Zahreddine', 'The one in my profession is _a fuller version is available on request_.'],
  ['Mrs Oueidat', 'Say what is wrong with it, because it sounds helpful.'],
  ['Mr Zahreddine', '⚠ **It tells the reader that what they are holding is not the whole thing and does not say what is missing.** **So a careful reader now has to request the fuller version**, and they do, and about nine times in ten there is nothing in it they needed. **It costs everybody a fortnight.**'],
  ['Jad', 'And the repair is 6.4.'],
  ['Mrs Oueidat', '⚠ **The repair is 6.4 inside the document instead of beside it.** _The supplier correspondence and the 2024 comparison are not in this version._ **Fourteen words, and nobody requests anything.**'],
  ['Mrs Rizk', 'Does the fact count not invite an argument about what a fact is?'],
  ['Mrs Khoury', '⚠ **It does, once, with the person who asks, and it takes four minutes.** **A figure, a date, a name, a document reference or a finding.** **After that the definition is in the room and the argument does not recur.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is that the number was not for them.** **I counted forty-one facts in nine hundred and forty words and found six paragraphs with no fact in them at all**, and they came out before anybody saw it.'],
]));
out.push(sp());
out.push(box('Language box – saying your document is at its minimum', [
  '**What a claim about your own document has to do.** ⚠ **Give the reader something they can test in about ten seconds.** **An untestable claim about length is read as an apology for the length**, and a sentence that no evidence could contradict is not information.',
  '**The checkable version.** ⚠ _This report is nine hundred and forty words and carries forty-one facts, listed on page 2._ **The reader has the ratio before they start**, and the ratio is what they wanted when they asked for a summary. **Length on its own tells them nothing: a four-page report can be dense and a one-page report can be empty.**',
  '**What counts as a fact, and settle it once.** ⚠ **A figure, a date, a name, a document reference or a finding.** **The argument about the definition happens once, with the person who asks, and takes four minutes** — **after that it is in the room and does not recur.**',
  '**_A fuller version is available on request._** ⚠ **It tells the reader that what they hold is not the whole thing and does not say what is missing**, so a careful reader has to request the fuller version. **They do, and about nine times in ten there is nothing in it they needed**, and it costs everybody a fortnight.',
  '**The repair is 6.4 moved inside the document.** ⚠ _The supplier correspondence and the 2024 comparison are not in this version._ **Fourteen words, and nobody requests anything** — **and the reader can decide whether they want either of them, which is the decision the _fuller version_ sentence takes away from them.**',
  '**And the thing the count does for the writer, which is larger than what it does for the reader.** ⚠ **You cannot count the facts in your own document without finding the paragraphs that have none.** **There are usually four to six on a page of this kind**, and they come out before anybody else sees them.',
  '**Pronunciation.** 🔊 **Track 6.12** **Say a claim about your own document flat, at the speed of the sentence after it.** ⚠ _This report is nine hundred and forty words and carries forty-one facts._ **Any stress on _is_ or on the numbers turns it into a defence**, and a reader who hears a defence looks for the attack it is answering.',
  '**Practise:** Make a claim about your own document checkable. **1** with a word count and a fact count  **2** with what is not in this version  **3** with the three deliberate repetitions marked  **4** where the honest claim is that it could be shorter — and say by how much  **5** one where no claim should be made at all — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B says **whether a reader could check it in ten seconds**, and gives the checkable version where one is possible. ⚠ **Two claims on each card are already checkable and need nothing.** **B must say what the test would be and how long it would take.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_This report has been kept to the minimum necessary._', '_Every effort has been made to avoid unnecessary detail._'],
  ['_⚠ This note is 310 words and carries 14 facts, listed overleaf._', '_⚠ The supplier correspondence and the 2024 comparison are not in this version._'],
  ['_A fuller version is available on request._', '_Further detail can be supplied if required._'],
  ['_⚠ Three figures appear twice and both appearances are marked._', '_⚠ This is the whole of the opinion and no part of it has been withheld._'],
  ['_The report is necessarily detailed given the complexity of the matter._', '_I have summarised the position as concisely as the subject allows._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each checkable version, and the test a reader would run. ⚠ **Rows 2 and 4 on both cards are already checkable.** **Ask the room how long each test takes**: counting fourteen facts is about ninety seconds, finding three marked repetitions is about twenty, and checking that nothing has been withheld cannot be done at all by the reader — **which is why row 4 on Card B is a promise and not a claim, and belongs in a document signed by somebody.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your cut version from 6.1** and **count its words and its facts.** ⚠ **Write the top line.** **Then do the thing the count is really for: list the paragraphs with no fact in them.** **In most documents of this kind there are four to six on a page**, and they come out before anybody else sees the report.'));
out.push(p('**b**  Swap. Your partner **checks four of your facts at random against the document** and times themselves. ⚠ **Then they say whether the top line is true.** **In about a fifth of first attempts it is not**, and the usual reason is that the writer counted a figure twice because it appeared in two paragraphs.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat put a fact count at the top of a report and nothing came back, which was the point: eleven reports went to that committee and hers was the only one nobody asked to be summarised. Mrs Tarabishi asked whether that was because of a number at the top, and because of what the number told them — this report is nine hundred and forty words and carries forty-one facts, listed on page 2 — and a reader who sees that knows the ratio before they start, and the ratio is what they were really asking about when they asked for a summary. Dr Qabbani said they want to know whether it will waste their time, and Mrs Khoury said they want to know whether it is padded and have no way of telling from the outside: length tells them nothing, because a four-page report can be dense and a one-page report can be empty, and the count is the only thing that separates them. Mr Shihabi asked whether anybody actually turns to page 2, and two of the eleven did and one of them checked four of the forty-one, which is a very small amount of checking and is enough — a claim that can be checked behaves differently from one that cannot, whether or not anybody checks it. Mr Tayara asked what is wrong with I have kept this as brief as possible, and Mrs Khoury said it is an apology and a reader hears it as one: it says this is long and I am sorry, and it cannot be wrong, which is the test, because a sentence that no evidence could contradict is not information. Mr Zahreddine said the one in his profession is a fuller version is available on request, and asked to say what is wrong with it since it sounds helpful: it tells the reader that what they are holding is not the whole thing and does not say what is missing, so a careful reader has to request the fuller version, and they do, and about nine times in ten there is nothing in it they needed, and it costs everybody a fortnight. Mr Attar said the repair is 6.4, and the repair is 6.4 inside the document instead of beside it: the supplier correspondence and the 2024 comparison are not in this version, fourteen words, and nobody requests anything. Mrs Rizk asked whether the fact count invites an argument about what a fact is, and it does, once, with the person who asks, and it takes four minutes — a figure, a date, a name, a document reference or a finding — and after that the definition is in the room and the argument does not recur. And Mrs Oueidat said the thing she will take away is that the number was not for them: she counted forty-one facts in nine hundred and forty words and found six paragraphs with no fact in them at all, and they came out before anybody saw it._'));
out.push(p('**Listener task:** write your own top line, with both numbers in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the report Mrs Oueidat sent to the standing committee. Answer the questions.'));
out.push(model([
  '**S. OUEIDAT** · _to the standing committee_ · _the vacant-premises notice: first quarter under the amendment_ · **2 February**',
  '**This report is nine hundred and forty words and carries forty-one facts, listed on page 2.** **The supplier correspondence and the 2024 district comparison are not in it.** **Three figures appear twice and both appearances of each are marked with an asterisk.** **The list on page 2 gives each fact, the paragraph it is in and its source.**',
  '**The finding.** **Applications in the eleven amended districts ran at fifty-one, fifty-four and forty-nine a month in January, February and March, against thirty-nine, forty-one and forty in the quarter before.*** **In the four districts that never carried the old sentence, the monthly figures were fifty-six, fifty-two and fifty-five, against fifty-five, fifty-seven and fifty-three.** **The fifteen districts together received one thousand five hundred and twelve applications in the quarter, against one thousand two hundred and ninety-four in the quarter before.**',
  '**What that comparison does and does not do.** **Eleven districts moved and four did not, and the four were not selected: they had the plain sentence by a printing accident in 2025.** **This is consistent with the sentence being the cause and it does not establish it.** **It does not exclude a January effect, and the four districts are the only control anybody has.** **The printing accident is recorded in this office\'s file of 14 October 2025, which names the four districts.**',
  '**What is not known.** **Whether the applicants are occupiers.** **The form has not asked since 2021, when the field was removed to shorten it.** **No district holds the information in any other form and I have asked all fifteen.** **The question was raised by a committee member in November and the answer then was the answer now.**',
  '**The cost of restoring the field.** **One line on a form reprinted every March.** **The reprint is scheduled and the amendment must be with the printer by 11 February.*** **The field is eleven characters wide and would take the place of a line asking for a telephone number that nobody uses.** **After that the next opportunity is March 2028.**',
  '**What I am asking the committee for.** **A decision on the field, by 11 February.** **Nothing else, and no further report is proposed before the March 2028 reprint.** **The decision is the committee\'s and this office has no preference it has not already stated.**',
  '**What I am not asking for.** **Not a redesign of the form.** **Not an extension of the amendment to the four districts, which already have the plain sentence.** **Not a study.** **And not a change to the eleven districts, whose sentence is now the one the four have always had.**',
  '**One thing about this report rather than its subject.** **The first draft was two thousand one hundred words and forty-one facts: the facts did not change.** **Six paragraphs of it carried no fact at all and are not here.** **Four of them explained why the comparison is sound**, which it either is or is not, and the committee can see the figures.',
]));
out.push(item('1', 'What does the top line say, and what two other claims are made about the document?'));
out.push(item('2', 'What claim strength does she use for the comparison, and what does she say it does not exclude?'));
out.push(item('3', 'What does the last paragraph say came out of the first draft, and what did four of those paragraphs do?'));
out.push(writers([
  'A report that says it is at its minimum: **a top line with a word count and a fact count, and where the list is** → **what is not in this version** → **the deliberate repetitions, marked** → **the finding** → **the claim strength, with what it does not exclude** → **the ask** → **and what came out of the draft.**',
  '⚠ **Give both numbers and say where the list is.** _Nine hundred and forty words and forty-one facts, listed on page 2._ **The reader has the ratio in ten seconds** — **and the ratio is what they wanted when they asked for a summary, which almost nobody realises.**',
  '**Mark deliberate repetition rather than removing it.** ⚠ _Three figures appear twice and both appearances of each are marked._ **A figure a reader meets twice without warning looks like padding**, and the same figure marked as deliberate looks like care.',
  '**Keep the claim strength in the sentence it belongs to.** ⚠ _This is consistent with the sentence being the cause and it does not establish it._ **Eleven words of hedge in a nine-hundred-word report** — **and they are the first eleven anybody shortening it will remove, which is 6.5 and is why the comparison is given as six numbers.**',
  '⚠ And **say what came out of the draft and what it was doing.** _Four of them explained why the comparison is sound, which it either is or is not._ **The sentence is the whole of this unit in sixteen words**, and it tells a committee that the writer has already done the work they were going to ask for.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a report that says it is at its minimum (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **This report is ______________ words and carries ______________ facts, listed ______________.** **______________ and ______________ are not in it.** **______________ figures appear twice and ______________.**   **The finding.** **______________ ran at ______________ in ______________, against ______________.** **In ______________, the figures were ______________.**   **What that comparison does and does not do.** ⚠ **This is consistent with ______________ and it does not establish it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A word count and a fact count, with the list located',
  'What is not in this version, named',
  'Deliberate repetition marked, not removed',
  'The claim strength kept, with what it does not exclude',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their top line**, and the room says what it would check and how long it would take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole report (260 words or more), to the shape in the writer\'s box: the top line, what is out, the marked repetitions, the finding, the claim strength, the ask, and what came out of the draft.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a checkable top line, what is not in this version, repetition marked, and the claim strength kept.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their top line and a partner checks four facts against the document, timed.** ⚠ **The room hears the time.** **It is about forty seconds for four**, and the class should be asked what that buys: a reader who does it once stops asking for summaries. Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **the number was not for them.**'));
out.push(hw('Take **the document you have been working on all week** and **count its words and its facts**, then write the top line. ⚠ **Then list the paragraphs with no fact in them and take them out.** **Count again.** **Write both pairs of numbers down, because the second pair is the one that goes at the top and the difference between them is what this unit was for.** **Bring both counts and the final top line.** **6.7 is the unit check**, and the mediation is between the author of a long report and the reader who has eleven of them.'));

// ===================== 6.7 =====================
out.push(h2('6.7  Review & Mediate: The reader who has eleven of them'));
out.push(p('**Function:** mediating between the author of a long report and the reader who has eleven of them   ·   **Recycling:** Unit 6   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 7 · Writing Part 2 (a report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The site copy and the file copy were requested; the latter have not been produced.  **2** He asked for the costings to be taken out and I did it so.  **3** Of the fifty-six positions, fifty-five is below the specified grade.  **4** The first-floor east-corridor former science preparation room are to be refloored.  **5** There is a requirement for each and every record to be retained for two years.  **6** The costings are out; the two figures what matter are in paragraph 2.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the author\'s note and the two things the reader said about it.'));
out.push(box(null, [
  '**ONE REPORT, ELEVEN IN THE BUNDLE** _(the author is a district officer; the reader chairs the committee)_',
  '**The author\'s covering note.** _"The report is eleven pages. I am afraid it could not be made shorter — every section was asked for by the committee at one time or another, and I have kept it as brief as the subject allows."_',
  '**What the reader said in the meeting.** _"We have eleven reports and four hours. Could you give us two pages?"_',
  '**What the reader said afterwards, to somebody else.** _"It is probably a good report. I shall not know, because I read the first page and the last and I have no idea whether the middle is padding."_',
  '⚠ **Both of them are being reasonable and neither of them can do anything about it.**',
  '**And the thing neither of them said.** **The author has eleven pages and no way of showing that they are dense.** **The reader has no way of telling a dense eleven pages from a padded eleven pages, from the outside.**',
  '**The question for the cycle.** _What do you say, and to which of the two?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the request for two pages is the wrong request. What is the right one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  Eleven pages and four hours', [
  ['Ms Huda', 'Mrs Rizk — which of the two is being unreasonable?'],
  ['Mrs Rizk', 'Neither. ⚠ **And that is what makes this one different from 3.7 and 5.7, where one of the two was wrong about something.**'],
  ['Mrs Tarabishi', 'Then the chairman should read the eleven pages. He asked for the sections.'],
  ['Mrs Khoury', '⚠ **He asked for them over four years and he has four hours.** **Both facts are true and neither of them is a failing.** **This is the first mediation in the book where the problem is arithmetic and not prose.**'],
  ['Dr Qabbani', 'So what is the right request?'],
  ['Mr Zahreddine', '⚠ **Not two pages.** **_How many facts are in the eleven?_** **The chairman wants to know whether the middle is padding and two pages will not tell him** — **a two-page summary from a padded report is a padded summary and he cannot tell those apart either.**'],
  ['Mr Shihabi', 'And a fact count answers it?'],
  ['Mrs Oueidat', '⚠ **It answers it in ten seconds and it can be checked in forty.** **Eleven pages with two hundred and ten facts is a dense report and the chairman should read it.** **Eleven pages with sixty is a four-page report, and the author should be told so.**'],
  ['Mr Tayara', 'And what if it is sixty?'],
  ['Mrs Khoury', '⚠ **Then the author has the information they needed and nobody has accused them of anything.** **That is the whole of the mediation: you have not told the author their report is padded, you have given them a way of finding out.**'],
  ['Mrs Ajouz', 'Which they will do privately and nobody will ever mention again.'],
  ['Mrs Oueidat', '⚠ **Which is the point.** **A writer who counts the facts in their own document finds the empty paragraphs themselves**, and a writer who is told their document is padded defends it.'],
  ['Jad', 'And to the chairman? Do you say anything at all?'],
  ['Mrs Khoury', '⚠ **One sentence, and it is about his own request.** **_Two pages will not tell you what you want to know._** **He will ask what will, and then you have been asked.**'],
  ['Mr Shihabi', 'That is the fourth move from 4.7.'],
  ['Mrs Khoury', '⚠ **It is the fourth move and the class should notice it is now standard.** **1.7, 3.7 and 5.7 had a reader with nothing to do.** **4.7, 6.7 and everything after have a reader who acts** — **and a reader who acts gets one question.**'],
  ['Mrs Rizk', 'And the covering note itself?'],
  ['Mr Zahreddine', '⚠ **_I am afraid it could not be made shorter_ is the sentence to read back to the author, and nothing else.** **Ask whether a reader could check it.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is that the chairman was right and got the request wrong.** **Four hours and eleven reports, and he asked for the one thing that would not help him.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between a long report and a busy reader', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Here both parties are right, which is new.** ⚠ **The author was asked for every section, over four years.** **The chairman has four hours and eleven reports.** **This is the first mediation in the book where the problem is arithmetic and not prose**, and saying so to both of them is the first move.',
  '**The sentence to read back, and it is the author\'s own.** ⚠ _I am afraid it could not be made shorter._ **And the question: could a reader check that?** **No evidence could contradict it, which 6.6 said is the test of a claim that is not information.**',
  '**The fourth move, to the reader who acts.** ⚠ _Two pages will not tell you what you want to know._ **One sentence, about his own request, and then stop** — **he will ask what would, and at that point you have been asked and may answer.**',
  '**Why a fact count is the right request and two pages is not.** ⚠ **The chairman wants to know whether the middle is padding.** **A two-page summary of a padded report is a padded summary and he cannot tell those apart either.** **Eleven pages with two hundred and ten facts is dense and he should read it; eleven pages with sixty is a four-page report.**',
  '**And what the count does that an accusation cannot.** ⚠ **A writer who counts the facts in their own document finds the empty paragraphs themselves.** **A writer who is told their report is padded defends it** — **and the difference between those two outcomes is the whole reason this cycle asks a question instead of making a statement.**',
  '**Pronunciation.** 🔊 **Track 6.14** **Ask _how many facts are in the eleven pages?_ with the stress on _facts_ and nowhere else.** ⚠ **Stress on _eleven_ makes it a complaint about length.** **Stress on _many_ makes it rhetorical.** **On _facts_ it is a question about a number, and the author answers it with a number.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an author\'s covering note and a reader\'s request, and does **not** show them. A reads both. B makes the three moves on the author and the fourth on the reader. ⚠ **In one of the two pairs the report really is padded and the author knows it.** **B must notice that the covering note says something different from the usual one, and ask a different question.** Change roles with the other pair.'));
out.push(table(['Pair A – the district report', 'Pair B – the quarterly return'], [
  ['_Author: "Eleven pages; every section was asked for; as brief as the subject allows."_', '_⚠ Author: "Fourteen pages. Most of it is the same as last quarter."_'],
  ['_Reader: "Eleven reports, four hours. Give us two pages."_', '_Reader: "Can you cut it down?"_'],
  ['_⚠ Neither is wrong and the claim cannot be checked._', '_⚠ The author has already said what is wrong with it._'],
  ['_The question to the author: how many facts?_', '_⚠ The question to the author is not about facts: it is which fourteen pages changed._'],
  ['_The sentence to the reader: two pages will not tell you what you want._', '_The sentence to the reader: ask for the changes and not for a cut._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each pair\'s question to the author and sentence to the reader. ⚠ **Pair B is the one where the author has already diagnosed it** — _most of it is the same as last quarter_ — **and a fact count there would waste an afternoon.** **The question is which pages changed**, and the answer turns fourteen pages into two. **The three moves are for writers who have not already said it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the covering note you have written most often** — _as brief as possible_, _a fuller version is available_, _necessarily detailed_ — and **ask whether a reader could check it.** ⚠ **Then write the checkable version with both numbers in it.** **If you cannot produce the numbers, that is the finding**, and it is the same finding the chairman had from the outside.'));
out.push(p('**b**  Swap and do the four moves on a partner\'s note and their imagined reader. ⚠ **Count the silence after the question about facts.** **It is about seven seconds, which is longer than any other silence in this book** — **because the author is counting.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say, and to whom:  _Asked which of the two is being unreasonable, Mrs Rizk said neither, and that is what makes this one different from 3.7 and 5.7, where one of the two was wrong about something. Mrs Tarabishi said the chairman should read the eleven pages since he asked for the sections, and Mrs Khoury said he asked for them over four years and he has four hours: both facts are true and neither is a failing, and this is the first mediation in the book where the problem is arithmetic and not prose. Dr Qabbani asked what the right request is, and Mr Zahreddine said not two pages but how many facts are in the eleven — the chairman wants to know whether the middle is padding and two pages will not tell him, because a two-page summary from a padded report is a padded summary and he cannot tell those apart either. Mr Shihabi asked whether a fact count answers it, and Mrs Oueidat said it answers it in ten seconds and can be checked in forty: eleven pages with two hundred and ten facts is a dense report and the chairman should read it, and eleven pages with sixty is a four-page report and the author should be told so. Mr Tayara asked what happens if it is sixty, and then the author has the information they needed and nobody has accused them of anything, which is the whole of the mediation — you have not told the author their report is padded, you have given them a way of finding out. Mrs Ajouz said they will do it privately and nobody will mention it again, and Mrs Oueidat said that is the point: a writer who counts the facts in their own document finds the empty paragraphs themselves, and a writer who is told their document is padded defends it. Mr Attar asked whether you say anything to the chairman, and Mrs Khoury said one sentence, about his own request — two pages will not tell you what you want to know — and he will ask what will, and then you have been asked. Mr Shihabi said that is the fourth move from 4.7, and it is the fourth move, and the class should notice it is now standard: 1.7, 3.7 and 5.7 had a reader with nothing to do, and 4.7, 6.7 and everything after have a reader who acts, and a reader who acts gets one question. Mrs Rizk asked about the covering note itself, and Mr Zahreddine said I am afraid it could not be made shorter is the sentence to read back to the author and nothing else, and then ask whether a reader could check it. And Mrs Rizk said the thing she will take away is that the chairman was right and got the request wrong: four hours and eleven reports, and he asked for the one thing that would not help him._'));
out.push(p('**Listener task:** write your own covering note in its checkable version, with both numbers.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 7)', 7));
out.push(p('You are going to read an article. **Six** paragraphs have been removed. Choose from the paragraphs **A–G** the one which fits each gap **(1–6)**. There is one extra paragraph which you do not need to use.'));
out.push(box(null, [
  '**THE READER WHO HAS ELEVEN OF THEM**',
  'I chair a committee that receives about forty papers a year, and for nine of those years I have been asking authors for shorter versions. I have recently stopped, and the reason is that I worked out what I was actually asking for.',
  '**(1)** ______',
  'That is the question, and a summary cannot answer it. A short version of a padded paper is a padded short version, and from the outside the two are identical. I was asking authors to do a piece of work that could not tell me the thing I wanted to know.',
  '**(2)** ______',
  'The officer who changed my mind did it without arguing. She simply put two numbers at the top of her report, and the second of them was one I had never seen on a document before.',
  '**(3)** ______',
  'What I did with that, the first time, was turn to the list and check four of the forty-one. It took under a minute. I have not checked anybody\'s since, and I do not need to: a number that can be checked behaves differently from one that cannot, which is a thing I had not understood before that afternoon.',
  '**(4)** ______',
  'The effect on my own reading was not what I expected. I had assumed I would use the ratio to decide what to read. In practice I use it to decide what to read **carefully**, which is a different decision and a better one.',
  '**(5)** ______',
  'There is one objection and it is a real one. A fact count rewards a particular kind of writing and the committee receives other kinds. A paper arguing a position has few facts and may be the most useful thing we read all year.',
  '**(6)** ______',
  '**A**  So I now ask for it, and about half the authors supply it. The other half write back explaining why their subject does not lend itself to counting, and that reply is itself informative, though not in the way its authors intend.',
  '**B**  Nine hundred and forty words, and forty-one facts, with the list on page 2. I remember reading it twice to be sure I had understood what the second number was for.',
  '**C**  My answer to that is to ask such authors for a different number: how many claims the paper makes, and how many of them it defends. It is the same move and it is harder to produce, which is probably fair.',
  '**D**  What I wanted, every time, was not a shorter paper. It was an answer to a question I had never put into words: is the middle of this worth the hour it will cost me?',
  '**E**  The committee has since reduced its paper length limit from fifteen pages to eight, and the quality of what we receive has fallen noticeably. I mention it because it is the opposite of what anybody predicted.',
  '**F**  Nobody had told me, in nine years, that the thing I could not judge was density rather than length. Length is on the outside of a document and density is not, and every instinct I had was reaching for the one I could see.',
  '**G**  A dense eight pages now gets my whole afternoon and a thin four gets ten minutes, and before the two numbers existed those two documents received exactly the same treatment, which was a skim of the first page and the last.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an author and a busy reader (120 words or more).'));
out.push(p('**ONE REPORT, ______________ IN THE BUNDLE** · ______________   **The author\'s note.** _"______________"_   **The reader, in the meeting.** _"______________"_   **The reader, afterwards.** _"______________"_   **What is correct.** ⚠ **Both ______________, and ______________.**   **To the author.** ⚠ **Your own note says ______________. Could a reader check that?**   **To the reader.** ⚠ **______________ will not tell you ______________.**   **What I am not going to do.** ⚠ **______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both parties told they are right, and why',
  'The author\'s own sentence read back, and one question',
  'One sentence to the reader, about their own request',
  'No accusation of padding anywhere',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: a report)', 10));
out.push(box(null, [
  '⚠ **The report is the second Part 2 genre of the course and it is the one everybody thinks they can already write.** **It is written to somebody who asked for it and agrees there is a problem** — **which is what separates it from the proposal in 4.6, where the reader had agreed nothing.**',
  'The director of your organisation has asked for a report on how documents are shared and stored where you work. **Write a **report** for the director.** Write **220–260 words**.',
  '_"I want to know what actually happens now, not what the procedure says, and I want one recommendation. If there is something you cannot tell me, say so in the report rather than leaving it out."_',
  '**You should: 1** describe what happens now, with figures   **2** say what you could not establish   **3** make one recommendation, and say what it would cost',
  '⚠ **Everything in Unit 6 is available here and two things are being marked.** **A top line a reader can check**, and **what you could not establish, declared rather than omitted** — **which the director has asked for in his own last sentence.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The figure ___ out of the second draft, and nothing else went with it.   a) was boiled   b) boiled away   c) boiled off',
  '2  Nothing in the paragraph ___ to be padded out.   a) need   b) needing   c) needs',
  '3  The report\'s ___ is what the committee praised, and it is nine hundred words.   a) economy   b) economical   c) economise',
  '4  Of the eleven paragraphs, ___ carries a figure.   a) each of   b) every   c) each',
  '5  The second version is ___ shorter and says the same.   a) considerably   b) considerable   c) consideration',
  '6  He asked for the costings to be taken out and I did ___.   a) that   b) so   c) it',
  '7  The latter of the two figures, ___ is the one the committee uses.   a) that   b) which   c) what',
  '8  The ___ of the four paragraphs into one took an afternoon.   a) condense   b) condensed   c) condensation',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 6.15** You will hear a records officer talking about shortening documents. For questions **1–8**, complete the sentences with **a word or short phrase**.'));
[
  '**1**  The officer says the first thing she counts in a document is the number of ______________.',
  '**2**  She found forty-one instances of one phrase in a report of ______________ pages.',
  '**3**  The number of paragraphs in that report with no fact in them at all was ______________.',
  '**4**  She says people almost always cut from the ______________ of a document.',
  '**5**  What the proposal she describes lost was the cost of ______________.',
  '**6**  She says a declaration of what was cut takes about ______________ words.',
  '**7**  About one time in five, the reader asks for the material to be ______________.',
  '**8**  The one thing she says should never be cut is the list of what was not ______________.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 6.15  Audio script (read after the check)', [
  ['Records officer', 'The first thing I do with any document somebody has asked me to shorten is count the facts in it. Not the words — anybody can count words, and the word count tells you nothing you need. A figure, a date, a name, a document reference, a finding. That is a fact. I write the number in the margin of each paragraph and then I add them up.'],
  ['Records officer', 'What comes out first is always the same phrase, and it is "it should be noted that". I have counted forty-one of those in one four-page report, which is about two hundred words of nothing at all. People put it in because they want the reader to slow down at that point, and it has no such effect: a reader who is told a sentence is important reads it at exactly the same speed.'],
  ['Records officer', 'In that same four-page report there were six paragraphs with no fact in them whatever. Six. Every fact in each of them appeared somewhere else as well. They were not badly written — two of them were the best-written paragraphs in the document, which is usually the way, because a writer spends the most time on the paragraph that is doing the least.'],
  ['Records officer', 'Now, the dangerous part. When people cut, they cut from the end. Almost everybody, almost every time. They cut to fit a page and the thing that is over the page is the end, and the end of a professional document is where the limitation lives, where the cost of doing nothing lives, and where the request lives.'],
  ['Records officer', 'I watched a proposal lose its whole argument that way. The thing that came out was the cost of inaction — one sentence, one figure, taken from the reader\'s own published schedule. It was in the fourth paragraph and the fourth paragraph was over the page. The budget holder read a perfectly complete shorter proposal and refused it in four days, and nobody could have told from the document that anything was missing.'],
  ['Records officer', 'So the rule I give people is this: write one line to whoever asked you to cut it, saying what went. It takes about eleven words. "The costings are out; the two figures that matter are in paragraph two." Name what went and say where the weight is now.'],
  ['Records officer', 'And it works more often than anybody expects. About one time in five the reader puts the thing back. They read the line in two seconds and they say, no, keep that. One in five on eleven words is the best return on anything I have ever taught anybody.'],
  ['Records officer', 'The one thing I will not have cut, ever, is the list of what was not examined. People take it out because it looks like empty space and it is the opposite: it is the only part of a document that tells a reader where its edges are. Cut that and you have turned a bounded piece of work into a claim about everything.'],
]));
out.push(p('**C  Writing.** Write the report (220–260 words): what happens now with figures, what you could not establish, and one recommendation with its cost.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ cut a page by half and keep every figure in it',
  '☐ tell a cut that removes words from a cut that removes facts',
  '☐ substitute across sentences and name what each substitution costs',
  '☐ decide what goes in front of the noun and what goes behind it',
  '☐ say in one line what a cut removed, with no adverb in it',
  '☐ compress four paragraphs and keep the strongest and weakest claims',
  '☐ make a claim about my own document that a reader can check',
  '☐ mediate between a long report and a reader who has eleven of them',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _boil away · pack in · cut away · tighten down · whittle down · shave off · lop off · prune back · pad out · fill out · spin out · dry up_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 6.7 draws on this unit\'s lexis)_: _condense → **condensation** · terse → **terseness** · economical → **economy** · length → **lengthy** · compact → **compactness** · curtail → **curtailment** · suppress → **suppression** · essential → **essentially** · superfluous → **superfluity**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _find out_ **→ _a way of finding out_**, which is what you give a writer instead of a verdict, where at A2 it was finding out a train time · _write down_ **→ _write down what you took out_**, a record made against your own future self, where at A2 it was writing down a word · _work on_ **→ _the paragraph you worked on most_**, which is usually the one doing the least, where at A2 it was working on a farm.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
