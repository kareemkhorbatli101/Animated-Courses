// Proactive Business English B2 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a written brief · a holding line · a decision-maker · an approver · a recommendation for decision · a direction of travel · a standing remit · a provisional view · a closed point · a matter still open · a live issue · to defer a decision · a decision sheet · the originator · the named recipient · a distribution list · copied for awareness · submitted for decision · for comment · a covering note · an executive summary · the first four lines · a reader with authority · to overrule · to be overruled · the scope of a paper · a line of accountability · a power to decide · a reserved matter · to be answerable to · the burden of a page · a continuing instruction';
const COLLOC = 'to table a paper · to record a decision · to carry a point · to seek a steer · to invite a correction · to log a decision · to brief somebody on · to be minded to agree';
const BACK_AT_B2 = 'brief · position · escalate';

// ---------- LEVEL OPENER ----------
out.push(h1('Unit 1  What Is Already Decided, and What Is Not'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  write the first four lines, so that a reader who stops there can still act',
  '**1.2**  separate what is decided from what is open',
  '**1.3**  stop explaining what this reader already knows',
  '**1.4**  say what you are answerable for, and what you are not',
  '**1.5**  write the sentence that invites a correction from above you',
  '**1.6**  read a brief somebody else wrote about your own department',
  '**1.7**  Review & Mediate: who has already decided, and who only thinks they have',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ B2 starts here, and the reader has changed', [
  '**At A2 you learned to write the thing down. At B1 you learned to write it for somebody who could not ask you a question** — a buyer in Beirut, a man alone at a press at two in the morning. ⚠ **At B2 the reader can ask a question, and can refuse.**',
  '⚠ **On 9 January a letter came from Mr Rafiq Dallal**, procurement director of the Lebanese company that buys from Ms Tannous — the company at the far end of everything this office packed last year. He proposes dealing **directly**: a three-year contract at about four times the Tannous volume. ⚠ **It would cut Ms Tannous, who found us, out of her own chain.**',
  '**Mr Ayoub wants it.** ⚠ **I think it is a mistake, and I have never once written a paper against a decision my employer has already half-taken.** That sentence is the last thing I wrote at B1, in a letter I sealed in August, ⚠ **and this book is what I did about it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 1.1 =======================
out.push(pb());
out.push(h2('1.1  The first four lines'));
out.push(p('**Function:** writing an opening a reader can act on   ·   **Grammar:** front-loading — the figure, the request and the date before any context   ·   **Pronunciation:** reading your own first two sentences and stopping'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last long message you received at work. Say what you knew after four lines of it.'));
out.push(p('**b**  Which opening can be acted on? _I am writing with reference to your letter of the 9th. · Mr Dallal has offered a three-year contract at about four times our export volume. I need a decision by the 26th._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say he does with a long letter?   **A** reads it twice   **B** reads four lines of anything   **C** gives it to Nadia'));
out.push(p('**b**  Listen again. **1** Where was the figure in Nour\'s first draft? **2** What does he say the slow opening assumes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  "I read four lines, of anything"', [
  ['Mr Ayoub', 'Read me your note on the Dallal letter.'],
  ['Nour', '*Further to the letter received on 9 January from Mr Rafiq Dallal of —*'],
  ['Mr Ayoub', '⚠ **Stop. What do I know?**'],
  ['Nour', 'That a letter came, and from whom.'],
  ['Mr Ayoub', '⚠ **Which I knew, because I gave it to you.** ⚠ **I read four lines, of anything** — a letter, a report, a note under my door. **A man who stopped at line four of your note would know nothing he did not know yesterday.**'],
  ['Nour', 'The figure is in paragraph three.'],
  ['Mr Ayoub', '⚠ **The figure is always in paragraph three.** Why?'],
  ['Nour', '…Because I was taught to set the scene first.'],
  ['Mr Ayoub', '⚠ **You were, and it is not stupid: it is correct for an essay and wrong for a page a working man reads standing up.** ⚠ **The slow opening assumes a reader who has already decided to read the whole thing.** Most readers decide at line four.'],
  ['Nour', 'So what are the first four lines?'],
  ['Mr Ayoub', '⚠ **The figure, the request, and the date. Then everything else.** *Mr Dallal offers three years at about four times our export volume. He wants an answer by 26 January. ⚠ **I am recommending against it as it stands, and the paper is attached.***'],
  ['Nour', 'That is the whole thing in three sentences.'],
  ['Mr Ayoub', '⚠ **It is the whole thing a reader needs in order to decide whether to read the rest.** And here is the part nobody believes: ⚠ **a page that can be stopped at line four is more likely to be finished.** A reader who has the content relaxes; ⚠ **a reader three lines in with nothing starts looking for the end.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The first four lines**',
  table(['Line', 'What goes there'], [
    ['**1**', '⚠ **the figure, or the fact** — the thing that is different from yesterday'],
    ['**2**', '**the request, and who is being asked** — *I need a decision · I am asking you to*'],
    ['**3**', '⚠ **the date** — by when, and what happens after it'],
    ['**4**', '**your own position, in a clause** — *I am recommending against it as it stands*'],
    ['⚠ **then**', '⚠ **everything else, in any order you like, because it is now optional**'],
  ], [0.7, 5]),
  '⚠ **I read four lines, of anything.** **A reader who stopped at line four should know what is different from yesterday, what you want, and by when.** Anything else in those four lines is in the way.',
  '⚠ **The slow opening is a genre inherited from a reader who does not exist.** ⚠ *Further to your letter of the 9th* **assumes somebody who has already decided to read the whole page.** **You were taught to set the scene first, and it is correct for an essay.**',
  '⚠ **The figure is always in paragraph three, and it is always a mistake.** Find it in your own last long message and count the lines above it.',
  '⚠ **And the paradox: a page that can be stopped at line four is more likely to be finished.** ⚠ **A reader who has the content in the first three lines relaxes and reads on; a reader who is three lines in with nothing starts looking for the end.**',
  '⚠ **You are reordering the page, not cutting it.** Same length, same content, same courtesy — ⚠ **the context, the history and the thanks go below the line**, and nothing is lost except the order.',
  '**Practise:** Write the first two sentences only, so that a reader could act on them. 1 a request 2 a refusal 3 a figure you have found 4 a decision you have taken 5 bad news',
  '**Useful phrases:**  I read four lines, of anything  ·  what do I know?  ·  the figure is in paragraph three  ·  below the line  ·  reordering, not cutting  ·  stopped at line four and still able to act',
  '**Pronunciation – reading your own first two sentences and stopping.** 🔊 **Track 1.2** Listen to four speakers read two sentences and stop. ⚠ **Two of them have finished and two have only begun**: the finished ones come to a real full stop, the others rise and lean forward. **The test is audible** — if your voice wants to carry on, the content is not in them yet. Say which two had finished.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the real first four lines of something they have actually sent; B says what they now know and could now do. Then A rewrites the opening aloud and B answers again.'));
out.push(dlg(null, [
  ['A', '_(the real first four lines)_ __________.'],
  ['B', 'I know __________, and I could __________.'],
  ['A', '⚠ Nothing, then.'],
  ['B', '⚠ Where is the figure?'],
  ['A', 'Line __________.'],
  ['B', '⚠ Read me lines one to four with it in.'],
  ['A', '_(rewrites aloud)_ __________.'],
  ['B', '⚠ Now I know __________ and I could __________.'],
]));
out.push(table(['Role card 1 — the Dallal note', 'Role card 2 — somebody else\'s page'], [[
  '*Further to the letter received on 9 January…* ⚠ **Four lines, and a reader knows only that a letter came.** The rewrite: ⚠ **three years, four times the volume, a decision by 26 January, and a recommendation against it as it stands** — and the history goes below the line.',
  'A brings a page somebody **sent them**. ⚠ B\'s job is to find the line the content starts on and read the number aloud. ⚠ **Expect line nine to line fourteen.** **Then both of you reorder it** — same words, nothing cut — and count the lines again.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the first four lines before and after. ⚠ Then say what line the figure was on, and what was moved below the line rather than cut.'));
out.push(PHRASE_CARD(['I read four lines of anything', 'what do I know?', 'the figure is in paragraph three', 'below the line', 'reordering, not cutting', 'stopped at line four']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** long messages you have sent or received. Find the line the content begins on, and rewrite the opening.'));
out.push(table(['The message', 'Line the figure is on', 'The four lines, rewritten', 'What went below the line'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1, 2.3, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The content began on line _______. My four lines now read _______. What went below the line was _______._'));
out.push(p('**Listener task:** write down the highest line number in the room. ⚠ Then ask whether anything was lost, and the answer should be nothing at all.'));
out.push(p('**Board clinic:** your teacher writes three openings on the board — look for _I am writing with reference to_ and a first paragraph of pure history. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL PROPOSAL — COVERING NOTE. 12 January. N. Mansour. ⚠ Two versions of the same note, and nothing is cut between them.**',
  '**Version 1, as I wrote it first.** _Further to the letter received on 9 January from Mr Rafiq Dallal, procurement director of the company in Beirut to which Ms Tannous supplies the cartons we have been making since last January, and following your request on the 10th that I look at it, I have now considered the proposal and its terms, which are set out over four pages and include a number of provisions on volume, price and delivery, as well as a clause on damages for late supply. On the question of whether we should accept, my own view, which I set out more fully below, is that…_',
  '⚠ **One hundred and eleven words, and a reader who stopped at line four would know that a letter had arrived.**',
  '**Version 2.**',
  table(['', 'The line'], [
    ['**1**', '⚠ **Mr Dallal offers a three-year contract at about four times our export volume.**'],
    ['**2**', '**He wants an answer by 26 January.**'],
    ['**3**', '⚠ **I am recommending against it in its present form, and the paper is attached.**'],
    ['**4**', '**What I need from you this week is twenty minutes, not a decision.**'],
    ['⚠ **below the line**', '⚠ **the letter came on the 9th · you asked me on the 10th · the terms run to four pages · Ms Tannous has not been told · the damages clause is at paragraph 11**'],
  ], [1.4, 4.6]),
  '⚠ **One hundred and nine words in all, which is two fewer than version 1.** **Nothing was cut.** The letter\'s arrival, Mr Ayoub\'s request, the four pages and the clause reference are all still there — ⚠ **they are below the line, where a reader who wants them will find them and a reader in a hurry will not trip over them.**',
  '⚠ **And line 4 is the one I nearly did not write.** *Twenty minutes, not a decision.* ⚠ **A reader who thinks he is being asked to decide something in four pages puts the page down**; a reader who is being asked for twenty minutes puts it in his pocket.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long is each version, and what was cut?'));
out.push(item('2', 'What is below the line, and why is it not lost?'));
out.push(item('3', 'What does line 4 ask for, and what difference does it make?'));
out.push(box('Writer\'s box', [
  '**The covering note — four parts:** ⚠ **four lines: the figure · the request · the date · your position** → **a line across the page** → ⚠ **everything else below it, in any order** → **and the word count, to prove nothing was cut.**',
  '⚠ **Put the word count on both versions.** ⚠ *One hundred and eleven, and one hundred and nine.* **It is the only way to prove that reordering is not cutting**, and somebody always says it is.',
  '⚠ **Below the line goes everything that is true and not needed in order to act**: how it arose, who asked you, what is attached, how long the terms are, who has not yet been told.',
  '⚠ **Ask for what you actually want in line 2, and make it small enough to grant.** ⚠ *Twenty minutes, not a decision.* **A four-page attachment and a request for a decision is a page that gets put down.**',
  '⚠ **State your own position in line 3, in a clause, and do not argue it there.** *I am recommending against it in its present form.* **The argument is the attachment; the line is the signpost.**',
  '⚠ **And never open with the arrival of a document.** ⚠ *Further to your letter of the 9th* **tells the reader a thing he already knows and spends the only four lines you had.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the covering note for something you need somebody senior to look at (**80 words or more**). Use the frame.'));
out.push(p('**______________ — COVERING NOTE. ______________. ______________.**   **1** ⚠ **______________.**   **2** ______________ by ______________.   **3** ⚠ **I am ______________, and ______________ is attached.**   **4** ⚠ **What I need from you ______________ is ______________, not ______________.**   ⚠ **Below the line.** ______________ · ______________ · ______________ · ______________   ⚠ **______________ words, against ______________ in the version I wrote first. Nothing was cut.**'));
out.push(stage('6P', 'Check together', 5));
out.push(box('⚠ Peer review at B2 — band 4, and it is a step up', [
  '**At A2 you ticked a criterion. At B1 you quoted the criterion, asked a question and stopped.** ⚠ **At B2 you may write on another person\'s sentence — and the price of that permission is that you must copy it first.**',
  '⚠ **Name the criterion. Then copy the line you are marking — the line itself and not a summary of it. Then say what you found.** **Three sentences, three criteria, three copied lines.**',
  '⚠ **The copying is the whole of the band.** **A reviewer who has copied a line has read it; one who has summarised it has not** — and almost every unfair review in an office is a review of a summary somebody made in their head.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Three criteria, three copied lines. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The figure or the fact in line 1', ''],
  ['The request, small enough to grant', ''],
  ['The date', ''],
  ['Your own position, in a clause', ''],
  ['A line across the page, with the history below it', ''],
  ['Both word counts, to prove nothing was cut', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their **four lines**. ⚠ The class says what it now knows and what it could now do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a page that was read and a page that was not (**200 to 240 words**). Say what each opened with, what the reader did, and where the content was.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line of it** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what line the content starts on_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the unread page open with the arrival of a document? Usually two of three — ⚠ **and in all three the writer could say exactly which line the content was on.**'));
out.push(box('Homework', ['Write your final text. Then take the longest thing you have sent in the last month, count the lines above the figure, and reorder the opening without cutting a word (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.2 =======================
out.push(pb());
out.push(h2('1.2  Decided, open, and not yours'));
out.push(p('**Function:** separating what is settled from what is live   ·   **Grammar:** _that is settled · that is still open · that is not mine to decide_   ·   **Pronunciation:** the three states said flatly, as categories'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something at work that everybody talks about as though it were open and is in fact decided. Say what it is.'));
out.push(p('**b**  Sort these: _the price list from March · whether we take the Dallal contract · who signs a credit note · whether Ms Tannous is told this week._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many of the four questions does Mr Ayoub say are actually open?   **A** all four   **B** one   **C** two'));
out.push(p('**b**  Listen again. **1** Which one is not his to decide? **2** What does Nour say a paper that mixes the three does to a reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  "Three of these are not questions"', [
  ['Nour', 'The paper has four questions in it.'],
  ['Mr Ayoub', 'Read them.'],
  ['Nour', 'Whether we take the contract. Whether we can supply the volume. Whether the damages clause is acceptable. And whether Ms Tannous is told before we answer.'],
  ['Mr Ayoub', '⚠ **Only one of those is a question.** The volume is arithmetic — eleven hundred a month against our four hundred, and the press runs three hours a night. ⚠ **That is settled whatever anybody wants.**'],
  ['Nour', 'And the damages clause?'],
  ['Mr Ayoub', '⚠ **Not mine to decide and not yours.** It is a legal question and we will take advice on it. ⚠ **A paper that asks me to decide it is asking me to guess in writing.**'],
  ['Nour', 'And whether Ms Tannous is told?'],
  ['Mr Ayoub', '⚠ **That is a closed point and you closed it**, in the letter you sent her on the 11th. ⚠ **You told her the day the letter came, before anybody asked you to**, and we cannot un-tell her.'],
  ['Nour', 'I thought that was obvious.'],
  ['Mr Ayoub', '⚠ **It was obvious to you and it is the only thing in this file anybody will thank you for in a year.** ⚠ **Write it down as closed, with the date, or somebody will reopen it in March.**'],
  ['Nour', 'So the paper has one question.'],
  ['Mr Ayoub', '⚠ **One question, two settled facts and one matter for somebody else — and if you label them, I can read the paper in six minutes.** ⚠ **If you do not, I read four pages looking for the question, and I find it in paragraph nine, and by then I am irritated with you and not with the contract.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three states, and a fourth that is not yours**',
  table(['State', 'How to write it', 'In this file'], [
    ['⚠ **settled**', '*that is settled, whatever anybody wants*', 'the volume: 1,100 a month against 400'],
    ['⚠ **closed**', '*that is a closed point, and I closed it on the 11th*', 'Ms Tannous was told the day the letter came'],
    ['⚠ **open**', '*that is the question in this paper*', 'whether to accept, in principle'],
    ['⚠ **not mine**', '⚠ **_not mine to decide and not yours_**', 'the damages clause — a legal question'],
    ['**the gain**', '⚠ **six minutes instead of four pages**', '—'],
  ], [1.3, 2.6, 2.1]),
  '⚠ **A paper that mixes the four makes a reader hunt for the question**, and the hunt costs you his patience before your argument has started. ⚠ *By paragraph nine I am irritated with you and not with the contract.*',
  '⚠ **Say *settled* of arithmetic and physical fact**, not of things you have decided to stop arguing about. *The press runs three hours a night* is settled; *we have always done it that way* is not.',
  '⚠ **Write a closed point down as closed, with its date**, or somebody reopens it. ⚠ *Ms Tannous was told on the 11th* — **and a closed point with no date in the file is an open point in March.**',
  '⚠ **And name what is not yours.** ⚠ **A paper that asks a reader to decide something outside his competence is asking him to guess in writing**, which he will not do and will not forgive.',
  '⚠ **One open question a paper, if you can.** Two is a choice; three is a shopping list, and a reader answers the easiest.',
  '**Practise:** Take four things said to be open at your work and sort them: settled · closed · open · not ours.',
  '**Useful phrases:**  that is settled, whatever anybody wants  ·  a closed point, and I closed it on the 11th  ·  that is the question in this paper  ·  not mine to decide and not yours  ·  six minutes instead of four pages',
  '**Pronunciation – the three states as categories.** 🔊 **Track 1.4** Listen: _settled. // closed. // open. // not ours._ ⚠ **Four words, flat, each with a full stop and no rise.** **Said with a rise they sound like proposals**, and a reader starts negotiating with your labels instead of reading your paper. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A lists what is open; B sorts it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The paper has __________ questions in it.'],
  ['B', 'Read them.'],
  ['A', '__________. __________. __________. And __________.'],
  ['B', '⚠ Only __________ of those is a question. __________ is __________ — whatever anybody wants.'],
  ['A', 'And __________?'],
  ['B', '⚠ **Not mine to decide and not yours.** ⚠ A paper that asks me to decide it is asking me to __________.'],
  ['A', 'And __________?'],
  ['B', '⚠ **A closed point, and you closed it** — on __________.'],
]));
out.push(table(['Role card 1 — four into one', 'Role card 2 — the closed point with no date'], [[
  'Four questions: accept · volume · damages clause · telling Ms Tannous. ⚠ **The volume is arithmetic and settled; the clause is legal and not ours; Ms Tannous was told on the 11th and is closed; only *accept in principle* is open.** ⚠ **Six minutes instead of four pages.**',
  'A has a closed point with no date on it. ⚠ B\'s job is to ask one question: ⚠ **when was it closed, and by whom?** ⚠ **If nobody can say, it is not closed — it is only quiet**, and quiet points reopen in about three months, usually in a meeting where the person who closed it is away.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four items with their labels. ⚠ Then write the date beside every closed point, and mark the ones with no date.'));
out.push(PHRASE_CARD(['that is settled', 'a closed point, closed on the 11th', 'that is the question', 'not mine to decide', 'six minutes, not four pages', 'quiet is not closed']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **six** things said to be open at your work. Label each, and date every closed one.'));
out.push(table(['The item', 'settled · closed · open · not ours', 'Why, in one clause', 'Date, if closed'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.7, 1.5, 1.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Of my six, _______ are settled, _______ closed, _______ open and _______ not ours. The one everybody still argues about is _______, and it was closed on _______._'));
out.push(p('**Listener task:** count the closed points in the room with no date. ⚠ Then ask which of them has already been reopened once.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we have always done it that way_ offered as settled, and a paper with four open questions. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL FILE — WHAT IS ACTUALLY OPEN. 13 January. N. Mansour. ⚠ Eleven items. One open.**',
  table(['Item', 'State', 'Why', 'Date'], [
    ['the volume: 1,100 a month against our 400', '⚠ **settled**', '⚠ **arithmetic. The press runs three hours a night on the generator, which runs from one until four.**', '—'],
    ['the three-year term', '⚠ **open**', '⚠ **this is the question in the attached paper**', '—'],
    ['the damages clause at paragraph 11', '⚠ **not ours**', 'a legal question; advice sought from Ms Nahas on the 12th', '—'],
    ['telling Ms Tannous', '**closed**', '⚠ **she was told the day the letter came, before anybody asked**', '**11 Jan**'],
    ['whether we can mark at night for three years', '**settled**', 'two markers from 1 October; it is being done now', '—'],
    ['the price', '⚠ **closed, and not by us**', '⚠ **his letter gives a price and calls it a condition of the term**', '**9 Jan**'],
    ['who signs the contract', '**settled**', 'Mr Ayoub. A reserved matter and always was', '—'],
    ['whether the Tannous arrangement continues to 30 April', '**closed**', 'the agreed terms of 28 April run twelve months from 1 May', '**28 Apr**'],
    ['board supply at four times the volume', '⚠ **open in fact and not in this paper**', '⚠ **I have not asked the mill and I am not going to until the term is decided**', '—'],
    ['insurance at the new value', '**not ours**', 'the broker\'s', '—'],
    ['what we tell the bank, and when', '⚠ **open, and nobody has raised it**', '⚠ **Mr Haddad will read about this before we write to him if the trade talks first**', '—'],
  ], [2.2, 1.3, 2.6, 0.8]),
  '⚠ **Eleven items and one open question — and two things in that table are not where I expected them.** ⚠ **The price is closed and we did not close it**: his letter prices the three years and calls the price a condition of the term, so **accepting the term accepts the price**, and nobody here had noticed.',
  '⚠ **And the eleventh is open and nobody has raised it.** ⚠ **If this is agreed, Mr Haddad hears about it in the trade before we write to him** — and a bank that hears from somebody else asks a different kind of question afterwards.',
  '⚠ **The item I am least comfortable about is the ninth.** Board supply at four times the volume is genuinely open and I have **left it out of the paper on purpose**, because asking the mill would tell the mill. ⚠ **That is a decision of mine inside a paper about somebody else\'s decision, and it is written here so that it is not invisible.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many items are there, and how many are open?'));
out.push(item('2', 'Which item was closed by somebody other than this company?'));
out.push(item('3', 'What has the writer deliberately left out of the paper, and why is it in this table?'));
out.push(box('Writer\'s box', [
  '**What is actually open — four parts:** **a table: *item · state · why · date*** → ⚠ **the count: how many items, how many open** → ⚠ **the items that are not where you expected** → **and the thing you have left out on purpose.**',
  '⚠ **Put the count in the heading.** ⚠ *Eleven items. One open.* **A reader who sees that reads the table instead of scanning it**, and in a normal file it is one or two of ten.',
  '⚠ **Date every closed point and name who closed it.** ⚠ **A closed point whose closer is unnamed is reopened by the first person who was not in the room.**',
  '⚠ **Look for the point closed by the other side.** ⚠ *His letter prices the three years and calls the price a condition of the term.* **Accepting the term accepts the price** — and a file that lists the price as open has not read the letter.',
  '⚠ **And declare your own omission inside the table.** ⚠ *I have left it out of the paper on purpose, because asking the mill would tell the mill.* **A decision of yours inside a paper about somebody else\'s decision is the one thing a reader cannot see**, so write it where they will.',
  '⚠ **Mark the item nobody has raised.** ⚠ *What we tell the bank, and when.* **The item with no advocate is the one that arrives as a surprise**, and listing it costs a line.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what is actually open* for a question at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT IS ACTUALLY OPEN. ______________. ______________. ⚠ ______________ items. ______________ open.**   ______________ | ⚠ **settled** | ⚠ **______________** | —   ______________ | ⚠ **open** | ⚠ **______________** | —   ______________ | ⚠ **not ours** | ______________ | —   ______________ | **closed** | ⚠ **______________** | **______________**   ______________ | ⚠ **closed, and not by us** | ⚠ **______________** | **______________**   ⚠ **______________ items and ______________ open question** — and ⚠ **______________ in that table is not where I expected it.**   ⚠ **And ______________ is open and nobody has raised it.** ______________.   ⚠ **The item I am least comfortable about is ______________.** ⚠ I have left it out on purpose, because ______________, **and it is written here so that it is not invisible.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The count in the heading', ''],
  ['Every closed point dated, with its closer', ''],
  ['A point closed by the other side, found', ''],
  ['Your own omission, declared inside the table', ''],
  ['The item nobody has raised', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the point closed by somebody else. The class says what accepting it would accept.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that everybody treats as open and is not (**200 to 240 words**). Say when it was decided, by whom, whether it is written down, and what the arguing costs.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the closing date in the file or in somebody\'s head?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the decision in nobody\'s writing? Usually all three — ⚠ **and in two of three the person who took it is still in the building and has never been asked.**'));
out.push(box('Homework', ['Write your final text. Then take the next paper or long message you have to write, label every item settled, closed, open or not ours, and count the open ones (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.3 =======================
out.push(pb());
out.push(h2('1.3  What you no longer explain to this reader'));
out.push(p('**Function:** writing for a reader who already knows   ·   **Grammar:** reduced reference — _the January volume_, not _the volume we agreed in January_   ·   **Pronunciation:** the short reference said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of something you explain every time you write to the same person. Say how many times you have explained it.'));
out.push(p('**b**  Which is written for somebody who knows? _the volume we agreed with Ms Tannous in the terms of 28 April · the Tannous volume_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the long explanations tell Mr Ayoub?   **A** the facts   **B** that Nour does not trust him to remember   **C** nothing'));
out.push(p('**b**  Listen again. **1** How many words did the short version save? **2** What is the one thing Nadia says you must still explain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  "You are explaining it to yourself"', [
  ['Nadia', 'Your paper explains the Tannous arrangement in eleven lines.'],
  ['Nour', 'So that the reader has it.'],
  ['Nadia', '⚠ **The reader signed it.** ⚠ **He signed it on 28 April, in this room, and you were standing there.**'],
  ['Nour', 'I thought it was safer to put it in.'],
  ['Nadia', 'Safer for whom? ⚠ **Eleven lines of something he signed tells him one thing only: that you do not trust him to remember his own signature.**'],
  ['Nour', 'That is not what I meant by it.'],
  ['Nadia', '⚠ **It never is, and it is what it says.** Write *the Tannous arrangement*. Three words. ⚠ **If he has forgotten, he will ask, and the asking costs him nine seconds.**'],
  ['Nour', 'And if he has forgotten and does not ask?'],
  ['Nadia', '⚠ **Then he is guessing, and that is a real risk — so there is one thing you still explain.** ⚠ **Not what he knows: what he knows differently from you.**'],
  ['Nour', 'Meaning?'],
  ['Nadia', '⚠ **He thinks the arrangement runs to 28 April because that is the date he signed. It runs twelve months from 1 May.** ⚠ **He has said the wrong date twice this year and nobody corrected him.** ⚠ **That you explain — in one line, with the date, and without saying that he was wrong.**'],
  ['Nour', 'So the eleven lines become one.'],
  ['Nadia', '⚠ **One line, and it is not one of the eleven.** ⚠ **You wrote eleven lines of what he knows and left out the one thing he has wrong.** That is what the long explanation is: ⚠ **it looks like service and it is you explaining the file to yourself.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Reduced reference — writing for a reader who knows**',
  table(['Long', 'Short', 'Why it is safe'], [
    ['*the volume we agreed with Ms Tannous in the terms of 28 April*', '⚠ **the Tannous volume**', '⚠ **he signed it; if he has forgotten he will ask**'],
    ['*the generator, which runs from one until four at night*', '**the generator hours**', 'it has run since the first week'],
    ['*the two night markers appointed on 1 October*', '**the night markers**', 'he appointed them'],
    ['⚠ **the one you do not shorten**', '⚠ **_the arrangement runs twelve months from 1 May_**', '⚠ **because he has it wrong, and says 28 April**'],
  ], [2.4, 1.7, 1.9]),
  '⚠ **Explaining what a reader knows is not courtesy; it says you do not trust him to remember his own signature.** ⚠ **It never means that, and it always says it.**',
  '⚠ **The cost of a short reference is nine seconds of his asking. The cost of a long one is a page he skims.** **Take the nine seconds.**',
  '⚠ **But there is one thing you still explain: not what he knows — what he knows differently from you.** ⚠ **Find the fact he has stated wrongly and nobody corrected, and write it once, with the date, and without saying he was wrong.**',
  '⚠ *The arrangement runs twelve months from 1 May.* **No _in fact_, no _as you will recall_, no _I think you may have_.** **A flat line with a date in it corrects a reader without putting him in the wrong**, and he will take it.',
  '⚠ **And notice what the long version did.** ⚠ **Eleven lines of what he knows, and not one line of what he has wrong** — the explaining crowded out the only thing worth writing.',
  '**Practise:** Take one person you write to. List four things you explain every time, shorten them, and find the one thing they have wrong.',
  '**Useful phrases:**  he signed it  ·  if he has forgotten, he will ask  ·  not what he knows: what he knows differently  ·  without saying he was wrong  ·  explaining the file to yourself',
  '**Pronunciation – the short reference said without apology.** 🔊 **Track 1.6** Listen to two speakers say _the Tannous volume_. ⚠ **One says it and stops. The other says it and hangs on the last word, waiting to be asked.** **The second will be asked**, and then will explain for eleven lines. Say it four times and stop each time.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a long explanation; B shortens it and asks for the missing line.'));
out.push(dlg(null, [
  ['A', '_(a long explanation of something the reader knows)_ __________.'],
  ['B', '⚠ Who signed it?'],
  ['A', '__________ did.'],
  ['B', '⚠ Then write __________. ⚠ If __________ has forgotten, __________ will ask.'],
  ['A', 'And if not?'],
  ['B', '⚠ **Not what they know: what they know differently.** What has __________ got wrong?'],
  ['A', '__________ says __________, and it is __________.'],
  ['B', '⚠ One line, with the date, and **without saying they were wrong**.'],
]));
out.push(table(['Role card 1 — eleven lines into one', 'Role card 2 — the fact nobody corrected'], [[
  'A explains the Tannous arrangement in eleven lines. ⚠ **B: he signed it on 28 April and you were standing there.** → *the Tannous arrangement*, three words — ⚠ **and the line that was missing: twelve months from 1 May.**',
  'A names a person they write to often. ⚠ B\'s job is one question: ⚠ **what does that person state as fact that is not quite right?** ⚠ **Expect a long pause and then a date, a figure or a name** — **and expect that nobody has ever said it to them**, because correcting upward is the thing nobody does.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the long version and the short one, and count the words saved. ⚠ Then write the one line that was missing.'));
out.push(PHRASE_CARD(['he signed it', 'if he has forgotten he will ask', 'not what he knows, what he knows differently', 'without saying he was wrong', 'explaining the file to yourself']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you explain every time you write to one person. Shorten each. Then find the fact that person has wrong.'));
out.push(table(['What I explain every time', 'Who already knows it, and how', 'The short version', 'Words saved'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.7, 1.5, 0.8]));
out.push(p('⚠ **And the one line I have never written:** ______________ ⚠ **states** ______________, **and it is** ______________ — ______________.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I explain _______ every time, to somebody who _______. Short, it is _______, and I save _______ words. And the line I have never written is _______._'));
out.push(p('**Listener task:** count the words saved in the room. ⚠ Then ask how many of the never-written lines are a date.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _as you will recall_ and a nine-line restatement of something the reader wrote. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL PAPER — WHAT I HAVE TAKEN OUT. 14 January. N. Mansour. ⚠ Four hundred and six words out. One line in.**',
  table(['What I had written', 'Lines', 'What it is now', 'Who knows it'], [
    ['the history of the Tannous arrangement', '**11**', '⚠ **the Tannous arrangement**', '⚠ **he signed it, 28 April**'],
    ['how the press runs at night', '**7**', '**the generator hours**', 'he set them'],
    ['who the night markers are and when they started', '**5**', '**the night markers**', 'he appointed them'],
    ['what Mr Dallal\'s company does', '**9**', '⚠ **Mr Dallal\'s company**', '⚠ **we have packed for it for a year**'],
    ['why export cartons are marked twice', '**6**', '**double marking**', 'he insisted on it'],
    ['the 2019 and 2021 Homs seasons', '**13**', '⚠ **taken out altogether**', '⚠ **he took both decisions himself**'],
    ['⚠ **the one line going in**', '⚠ **1**', '⚠ **_the arrangement runs twelve months from 1 May._**', '⚠ **he says 28 April, and has twice**'],
  ], [2.4, 0.6, 2.3, 1.7]),
  '**Four hundred and six words out, and the paper is better in two ways and worse in none.** It is shorter, ⚠ **and it no longer tells its reader that I think he has forgotten his own decisions.**',
  '⚠ **The hardest one to cut was the sixth.** The Homs seasons are the strongest thing in the file — ⚠ **two years, the same mistake, and both times it was his decision** — and thirteen lines of it reads as an accusation however gently it is written. ⚠ **It is now in the attached paper and not in the note**, where he can go and look at it if he wants to, which is a different act from being shown it.',
  '⚠ **And the one line going in is the only line in this document a reader could be annoyed by.** *The arrangement runs twelve months from 1 May.* ⚠ **Four hundred and six words of deference came out, and one flat sentence of correction went in, and the second is the brave one.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many words came out, and how many lines went in?'));
out.push(item('2', 'Which was hardest to cut, and where has it gone?'));
out.push(item('3', 'Why does the writer call the one added line the brave one?'));
out.push(box('Writer\'s box', [
  '**What I have taken out — four parts:** ⚠ **a table: *what I wrote · lines · what it is now · who knows it*** → **the count, in and out** → ⚠ **the one that was hardest, and where it has gone** → ⚠ **and the one line going in.**',
  '⚠ **Name who knows each thing and how.** ⚠ *He signed it, 28 April.* **The column is the justification**; without it the cut looks like laziness, and with it there is nothing to argue with.',
  '⚠ **Count the words out and the lines in.** ⚠ *Four hundred and six out, one in.* **It is the only honest measure of a shortening**, and the asymmetry is the point.',
  '⚠ **Move your strongest material rather than cutting it.** ⚠ **Thirteen lines of _you did this twice_ reads as an accusation however gently it is written.** **In the attachment the reader can go and look** — ⚠ **and being able to look is a different act from being shown.**',
  '⚠ **Then put in the one line nobody has written.** **The fact your reader states wrongly, flat, with its date, with no _in fact_ and no _as you will recall._**',
  '⚠ **And say which line is the brave one.** ⚠ **Deference out and correction in is the whole move of this unit**, and a reader who sees you name it reads the correction as work rather than cheek.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I have taken out* for something you are writing to somebody who knows (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT I HAVE TAKEN OUT. ______________. ⚠ ______________ words out. ______________ line in.**   ______________ | ______________ | ⚠ **______________** | ⚠ **______________**   ______________ | ______________ | **______________** | ______________   ______________ | ______________ | ⚠ **taken out altogether** | ⚠ **______________**   ⚠ **the one line going in** | **1** | ⚠ **______________** | ⚠ **______________, and has ______________**   **______________ words out, and the paper is better in ______________ ways and worse in none.** ⚠ **It no longer tells its reader that ______________.**   ⚠ **The hardest one to cut was ______________.** ______________ **reads as an accusation however gently it is written.** ⚠ **It is now ______________, where ______________** — ⚠ **which is a different act from ______________.**   ⚠ **And the one line going in is the only line here a reader could be annoyed by.** ⚠ ______________ **came out, and ______________ went in, and the second is the brave one.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *who knows it* column, with how they know', ''],
  ['Words out and lines in, counted', ''],
  ['The hardest cut, moved rather than lost', ''],
  ['The one line going in: flat, dated, no softener', ''],
  ['The brave line, named as such', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their **one line going in**. ⚠ The class says whether it contains a softener, and strikes it out if it does.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fact somebody senior to you has had wrong for a long time (**200 to 240 words**). Say what it is, how long, why nobody has said it, and what you are going to write.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a softener in the correction?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has nobody ever said it? Usually all three — ⚠ **and in two of three the reason given is that it has never mattered enough, which is also the reason it has lasted.**'));
out.push(box('Homework', ['Write your final text. Then take the next thing you write to somebody senior, cut every explanation of what they already know, count the words, and add the one line nobody has written (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.4 =======================
out.push(pb());
out.push(h2('1.4  What you are answerable for'));
out.push(p('**Function:** stating your own accountability and its limits   ·   **Grammar:** _I am answerable for · that is not mine · I can be overruled on_   ·   **Pronunciation:** the limit stated without defensiveness'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you are answerable for at work, and one thing people think you are answerable for and you are not.'));
out.push(p('**b**  Which is a limit and which is an excuse? _That is not my department. · I am answerable for the packing standard and not for the price, and the price is where this will be decided._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say happens to a person who never states a limit?   **A** they are promoted   **B** they are given everything and blamed for everything   **C** nothing'));
out.push(p('**b**  Listen again. **1** What is Nour answerable for in this paper? **2** What is the difference he draws between a limit and an excuse?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  "Say what you are not answerable for"', [
  ['Mr Ayoub', 'You are recommending against a contract worth four times our export volume.'],
  ['Nour', 'I am.'],
  ['Mr Ayoub', '⚠ **On what are you answerable?**'],
  ['Nour', 'On everything in the paper, I suppose.'],
  ['Mr Ayoub', '⚠ **Then you are answerable for nothing, because nobody can be answerable for everything and everybody knows it.** Again. ⚠ **On what?**'],
  ['Nour', '…On the figures. The volumes, the hours, the markers, what the press can actually do at night. I counted them myself.'],
  ['Mr Ayoub', 'Good. And?'],
  ['Nour', 'And on the reading of his letter — that the price is a condition of the term.'],
  ['Mr Ayoub', '⚠ **And what are you not answerable for?**'],
  ['Nour', 'The damages clause. And whether three years is a risk worth taking, which is a judgement and yours.'],
  ['Mr Ayoub', '⚠ **Write all of that down, in that order, at the end of the paper.** ⚠ **A person who never states a limit is given everything and blamed for everything** — and I have watched it happen to better people than either of us.'],
  ['Nour', 'It sounds like covering myself.'],
  ['Mr Ayoub', '⚠ **It is the opposite, and here is the test.** ⚠ **An excuse arrives before the work and a limit arrives after it.** *That is not my department* is an excuse. ⚠ *I counted these myself and I will stand behind them; the three-year judgement is yours and I can be overruled on it* **is a limit, and it costs you something to write.**'],
  ['Nour', 'What does it cost?'],
  ['Mr Ayoub', '⚠ **It names the ground you cannot retreat from.** ⚠ **If one of those figures is wrong, you have just signed for it.** ⚠ **That is why so few people write it, and it is why the ones who do are believed.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Answerable for, and not**',
  table(['Say', 'Example'], [
    ['⚠ **I am answerable for**', '⚠ *the figures in paragraph 2. I counted them myself and I will stand behind them.*'],
    ['**and for**', '*the reading of his letter at paragraph 4 — that the price is a condition of the term.*'],
    ['⚠ **I am not answerable for**', '*the damages clause, which is a legal question.*'],
    ['⚠ **I can be overruled on**', '⚠ *whether three years is a risk worth taking. That is a judgement and it is yours.*'],
    ['⚠ **the test**', '⚠ **an excuse arrives before the work; a limit arrives after it**'],
  ], [1.6, 4.4]),
  '⚠ **A person who never states a limit is given everything and blamed for everything.** **Claiming the whole page is the same as claiming none of it**, because nobody believes a person is answerable for everything.',
  '⚠ **Put it at the end, in four lines, in that order**: what you stand behind · what else you stand behind · what is not yours · what you can be overruled on.',
  '⚠ **An excuse arrives before the work and a limit arrives after it.** ⚠ *That is not my department* **(before, and it is an excuse)** · ⚠ *I counted these myself; the judgement is yours* **(after, and it is a limit).**',
  '⚠ **A limit costs you something, which is why it is believed.** ⚠ **It names the ground you cannot retreat from: if one of those figures is wrong, you have signed for it.**',
  '⚠ **Say *I can be overruled on* about the judgement, not about the facts.** **A judgement your reader may take differently is theirs; a figure you counted is not a matter of opinion** and should not be offered as one.',
  '**Practise:** Write the four lines for a piece of work you have done this month: for · and for · not · overruled on.',
  '**Useful phrases:**  I am answerable for  ·  I counted them myself and I will stand behind them  ·  that is not mine  ·  I can be overruled on  ·  an excuse arrives before the work',
  '**Pronunciation – the limit without defensiveness.** 🔊 **Track 1.8** Listen to two speakers say _that is not mine_. ⚠ **One is flat and short; the other is a little loud and a little fast.** **The second sounds like a man stepping back from something**, and a reader hears it even in writing. Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written something; B asks what A is answerable for and pushes until the limits are real.'));
out.push(dlg(null, [
  ['B', '⚠ On what are you answerable?'],
  ['A', 'On everything in it.'],
  ['B', '⚠ **Then on nothing. Again — on what?**'],
  ['A', 'On __________. I __________ myself.'],
  ['B', 'And?'],
  ['A', 'And on __________.'],
  ['B', '⚠ And what are you **not** answerable for?'],
  ['A', '__________, and __________, which is a judgement and __________.'],
  ['B', '⚠ **Four lines, in that order, at the end.** ⚠ And if __________ is wrong?'],
  ['A', '⚠ Then I have signed for it.'],
]));
out.push(table(['Role card 1 — everything, then four lines', 'Role card 2 — the excuse and the limit'], [[
  'A claims the whole paper. ⚠ **B: then you are answerable for nothing.** → **the figures A counted · the reading of the letter · not the damages clause · overruled on the three-year judgement** — ⚠ **and the ground A cannot retreat from is the figures.**',
  'A says *that is not my department.* ⚠ B\'s job is to ask when A said it — ⚠ **before the work or after it?** ⚠ **Before: it is an excuse and A knows it.** **Then rewrite it as a limit that arrives after the work**, and notice that the second version costs A something and the first cost nothing.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four lines. ⚠ Then say which line names ground the speaker cannot retreat from.'));
out.push(PHRASE_CARD(['on what are you answerable?', 'I counted them myself', 'that is not mine', 'I can be overruled on', 'an excuse arrives before the work', 'then I have signed for it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** pieces of work you have done. Write the limit for each.'));
out.push(table(['The work', 'Answerable for', 'Not mine', 'Can be overruled on'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.8, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _On _______ I am answerable, because I _______ myself. _______ is not mine. I can be overruled on _______. And if _______ is wrong, I have signed for it._'));
out.push(p('**Listener task:** count how many people claimed everything the first time. ⚠ Then ask each one what their limit cost them to write.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for an excuse dressed as a limit, and _I can be overruled on_ applied to a figure. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL PAPER — WHAT I AM ANSWERABLE FOR. 15 January. N. Mansour. ⚠ Page four of four, and the only page I rewrote five times.**',
  table(['', 'The line'], [
    ['**1  I am answerable for**', '⚠ **every figure in paragraph 2. The 1,100 a month, our 400, the three hours a night, the 42 cartons an hour on the second press. I counted them myself over four nights in January and I will stand behind them.**'],
    ['**2  and for**', '⚠ **the reading at paragraph 4: that his letter makes the price a condition of the three-year term, so that accepting the term accepts the price. The words are at the foot of his page 2 and I have quoted them in full.**'],
    ['**3  I am not answerable for**', '**the damages clause at paragraph 11. It is a legal question, advice was sought from Ms Nahas on the 12th, and nothing in this paper should be read as advice on it.**'],
    ['**4  and not for**', '⚠ **board supply at four times the volume, which I have not asked the mill about and have said so at paragraph 7.**'],
    ['**5  I can be overruled on**', '⚠ **whether three years is a risk worth taking. That is a judgement about this company\'s future and it is yours. My recommendation at paragraph 9 is against, and I may be wrong, and if you decide the other way I will pack eleven hundred a month and not say I told you so.**'],
  ], [1.6, 4.4]),
  '⚠ **Five lines, and the fifth took four of the five rewrites.** The first three came easily. The fifth is the one that matters, ⚠ **because a reader who has read four pages against his own inclination needs to know, by the last line, that the writer will carry out the opposite of her own recommendation without sulking.**',
  '⚠ **I nearly left out the last nine words.** *And not say I told you so.* It is not the register of a business paper. ⚠ **I have left them in because they are the true thing in the document**, and because this is the first paper I have ever written against something Mr Ayoub wanted, ⚠ **and he has to know what kind of person wrote it.**',
  '⚠ **And line 1 is the one that frightens me.** **Four nights of counting, signed for in one sentence.** ⚠ **If the 42 an hour is wrong, nothing else on these four pages survives** — which is exactly why it is the first line and not buried at paragraph 2.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many lines are there, and which took the most rewriting?'));
out.push(item('2', 'What did the writer nearly leave out, and why is it in?'));
out.push(item('3', 'Which line is the risky one, and why is it first?'));
out.push(box('Writer\'s box', [
  '**What I am answerable for — four parts:** ⚠ **five numbered lines: for · and for · not · and not · overruled on** → **what each one cost to write** → ⚠ **the line you nearly left out** → ⚠ **and the one that frightens you, placed first.**',
  '⚠ **Be specific enough to be caught.** ⚠ *The 42 cartons an hour on the second press, counted over four nights in January.* **A general claim cannot be wrong and so cannot be believed.**',
  '⚠ **Quote, do not characterise, when you are answerable for a reading.** ⚠ *The words are at the foot of his page 2 and I have quoted them in full.* **A reading you are answerable for must be checkable against the text you read.**',
  '⚠ **The *overruled on* line is the one that matters, and it is last.** ⚠ **A reader who has read four pages against his own inclination needs to know the writer will carry out the opposite without sulking.** **Say so in plain words.**',
  '⚠ **Keep the one sentence that is not quite the register.** ⚠ *And not say I told you so.* **The first paper you ever write against your employer has to say what kind of person wrote it**, and the register of a business paper cannot do that on its own.',
  '⚠ **And put the frightening line first.** ⚠ **If it is wrong, nothing else survives** — **so it goes where a reader will test it, not where it can hide.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I am answerable for* for a piece of your own work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT I AM ANSWERABLE FOR. ______________. ⚠ ______________.**   **1  I am answerable for** ⚠ **______________. I ______________ myself ______________ and I will stand behind ______________.**   **2  and for** ⚠ **______________. ______________ and I have quoted ______________.**   **3  I am not answerable for** ______________. ______________, **and nothing here should be read as ______________.**   **4  and not for** ⚠ **______________, which I ______________ and have said so at ______________.**   **5  I can be overruled on** ⚠ **______________. That is a judgement about ______________ and it is yours. My recommendation is ______________, and I may be wrong, and if you decide the other way I will ______________.**   ⚠ **______________ lines, and the ______________ took ______________ of the rewrites.** ⚠ **I nearly left out ______________.** **I have left it in because ______________.**   ⚠ **And line 1 is the one that frightens me.** ⚠ **If ______________ is wrong, ______________** — **which is why it is first.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Specific enough to be caught — a figure, a count, a date', ''],
  ['A reading quoted rather than characterised', ''],
  ['*Not mine*, with where the question has gone instead', ''],
  ['*Overruled on* about a judgement, in plain words', ''],
  ['The frightening line placed first', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their **overruled on** line. ⚠ The class says whether it would reassure a reader who has just been argued with.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were held answerable for something that was not yours (**200 to 240 words**). Say what it was, why nobody had drawn the line, what it cost, and what line you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the limit ever written down anywhere?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the line never written down? Usually all three — ⚠ **and in at least one the person who should have written it was the one who got the blame.**'));
out.push(box('Homework', ['Write your final text. Then write the five lines for the largest thing you are working on now, and put the frightening one first (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.5 =======================
out.push(pb());
out.push(h2('1.5  The sentence that invites a correction'));
out.push(p('**Function:** inviting correction from somebody senior   ·   **Grammar:** _if I have this wrong, it changes_ — the named error and its consequence   ·   **Pronunciation:** the invitation said once, and not repeated'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a time you were sure of something and wrong. Say who could have told you, and why they did not.'));
out.push(p('**b**  Which invites a correction? _Please let me know if you have any comments. · If the mill can take four times the board, my paragraph 7 is wrong and the recommendation changes. You will know that and I do not._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Hala say *please correct me if I am wrong* never works?   **A** it is rude   **B** it names nothing, so there is nothing to correct   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What three things must an invitation contain? **2** What does Nour say she is afraid of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  "Name the thing that could be wrong"', [
  ['Nour', 'I have put *please correct me if I am wrong* at the end.'],
  ['Hala', '⚠ **Nobody has ever corrected anybody because of that sentence.**'],
  ['Nour', 'It is polite.'],
  ['Hala', '⚠ **It is polite and it is empty. It names nothing, so there is nothing to correct.** ⚠ **A reader who disagrees with you reads it and thinks: with what? Where?** And then does nothing, because finding your mistake for you is work.'],
  ['Nour', 'So what do I write instead?'],
  ['Hala', '⚠ **Name the thing that could be wrong, and say what changes if it is.** You are recommending against three years. What is the weakest brick?'],
  ['Nour', 'The board. I have assumed the mill cannot supply four times what we take, and I have not asked them.'],
  ['Hala', '⚠ **Then write that.** ⚠ *If the mill can take four times the board, paragraph 7 is wrong and the recommendation changes.* ⚠ **Now a reader who knows the mill has somewhere to put his knowledge.**'],
  ['Nour', 'And if he does know, and it changes everything?'],
  ['Hala', '⚠ **Then you have found it out in January, in one line, instead of in April, in front of Mr Dallal.** ⚠ **What are you actually afraid of?**'],
  ['Nour', 'That he will say: she wrote four pages on a guess.'],
  ['Hala', '⚠ **He will say that about the version with *please correct me if I am wrong* in it.** ⚠ **A guess you have named is an assumption. A guess you have hidden behind a politeness is a guess.**'],
  ['Nour', 'And how many of these go in?'],
  ['Hala', '⚠ **One, and not repeated.** ⚠ **Two invitations in one paper read as a writer who does not believe her own argument** — and then the reader corrects the argument instead of the assumption.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The invited correction — three parts, one sentence**',
  table(['Part', 'Write', 'In this paper'], [
    ['⚠ **the named thing**', '⚠ *If the mill can take four times the board,*', '⚠ **the weakest brick: an unasked question**'],
    ['**where it sits**', '*paragraph 7 is wrong*', 'the paragraph, so it can be found'],
    ['⚠ **what changes**', '⚠ *and the recommendation changes.*', '⚠ **the consequence, stated**'],
    ['⚠ **and who knows**', '*You will know that and I do not.*', 'why this reader, and not a general plea'],
  ], [1.4, 2.5, 2.1]),
  '⚠ **_Please correct me if I am wrong_ has never corrected anything.** ⚠ **It names nothing, so there is nothing to correct** — and a reader who disagrees thinks *with what? where?* and does nothing, ⚠ **because finding your mistake for you is work.**',
  '⚠ **Name the weakest brick yourself.** **In every paper there is one thing you have assumed and not checked.** ⚠ **You know what it is** — **write it, with its paragraph number.**',
  '⚠ **Say what changes if it is wrong.** ⚠ *paragraph 7 is wrong and the recommendation changes.* **Without the consequence it is a confession; with it, it is a question your reader can answer.**',
  '⚠ **A guess you have named is an assumption; a guess you have hidden behind a politeness is a guess.** **The naming is what makes it respectable.**',
  '⚠ **One invitation a paper, and do not repeat it.** ⚠ **Two read as a writer who does not believe her own argument**, and then the reader corrects the argument instead of the assumption.',
  '⚠ **And the real gain is the date.** ⚠ **You find out in January, in one line, instead of in April in front of the other side.**',
  '**Practise:** Take something you have written or argued. Name the weakest brick, its paragraph, and what changes.',
  '**Useful phrases:**  name the thing that could be wrong  ·  what changes if it is  ·  the weakest brick  ·  you will know that and I do not  ·  a guess you have named is an assumption',
  '**Pronunciation – the invitation said once.** 🔊 **Track 1.10** Listen to two speakers read the invitation. ⚠ **One says it and moves to the next point. The other says it and then says something like it again.** **The second has apologised twice**, and a listener starts to doubt the whole paper. Say it once and move on, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an argument; B makes A name the weakest brick.'));
out.push(dlg(null, [
  ['A', 'I have put __________ at the end.'],
  ['B', '⚠ **Nobody has ever corrected anybody because of that sentence.** What is the weakest brick?'],
  ['A', '__________. I have assumed __________ and I have not __________.'],
  ['B', '⚠ Then write it. **And what changes if you are wrong?**'],
  ['A', '__________ and __________ changes.'],
  ['B', '⚠ **And who would know?**'],
  ['A', '__________ would.'],
  ['B', '⚠ One sentence, **once**. ⚠ And you find out __________ instead of __________.'],
]));
out.push(table(['Role card 1 — the unasked question', 'Role card 2 — two invitations'], [[
  'A has assumed the mill cannot supply four times the board and has not asked. ⚠ **B: name it, with the paragraph, and say the recommendation changes.** ⚠ **January, in one line, instead of April in front of Mr Dallal.**',
  'A\'s paper has three invitations in it. ⚠ B\'s job is to make A delete two and say which one survives. ⚠ **The survivor should be the one with a consequence attached**; the other two will turn out to be apologies. ⚠ **Then B reads the paper back and says whether it sounds more sure or less.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the invitation in three parts: the named thing, where it sits, what changes. ⚠ Then say who in the room would have known the answer.'));
out.push(PHRASE_CARD(['name the thing that could be wrong', 'what changes if it is', 'the weakest brick', 'you will know and I do not', 'once, and not repeated']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you are currently sure of at work. Find the brick under each.'));
out.push(table(['What I am sure of', 'What I have assumed and not checked', 'What changes if it is wrong', 'Who would know'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.8, 1.6, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I am sure of _______. Under it I have assumed _______, and I have not asked. If I am wrong, _______ changes. _______ would know._'));
out.push(p('**Listener task:** count how many assumptions could be checked with one telephone call. ⚠ Then ask why the call has not been made, and listen for the real answer.'));
out.push(p('**Board clinic:** your teacher writes three invitations on the board — look for _please let me know if you have any comments_ and an invitation with no consequence. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE DALLAL PAPER — PARAGRAPH 10, THE ONE THING I HAVE NOT CHECKED. 16 January. N. Mansour.**',
  '**Paragraph 10.** ⚠ **If the mill can supply four times the board we currently take, paragraph 7 is wrong and my recommendation at paragraph 9 changes.** ⚠ **I have not asked them.** I have not asked them because asking the mill for a quotation at eleven hundred a month would tell the mill what we are considering, ⚠ **and the mill sells to two of our competitors in Mezzeh.** ⚠ **You will know whether that caution is right and I do not.** If you think it is wrong, the question takes one telephone call and I will make it this afternoon.',
  '⚠ **That is the whole of paragraph 10, and it is eighty-one words, and it is the paragraph I would defend if I could keep only one.**',
  table(['What it does', 'How'], [
    ['⚠ **names the brick**', '⚠ **the board supply, which I assumed and did not check**'],
    ['**locates it**', 'paragraph 7, and the consequence at paragraph 9'],
    ['⚠ **states the consequence**', '⚠ **the recommendation changes** — not *may need review*'],
    ['⚠ **gives the reason for the gap**', '⚠ **asking would tell the mill, and the mill sells to two competitors**'],
    ['**hands the judgement over**', '*you will know whether that caution is right and I do not*'],
    ['⚠ **and prices the remedy**', '⚠ **one telephone call, this afternoon**'],
  ], [1.9, 4.1]),
  '⚠ **The last line is the one I nearly left out, and it is the one that makes the paragraph safe to write.** ⚠ **An admitted gap with no remedy attached is a hole in a paper; an admitted gap costed at one telephone call is a decision offered to the reader.** **He can take the caution or spend the call, and either way the paper stands.**',
  '⚠ **And there is only one paragraph 10.** Two pages earlier I had written *I am not certain about the night capacity either*, and I have struck it out — ⚠ **not because it was untrue but because the first invitation does its work and the second one undoes it.** **The night capacity I counted myself over four nights, and a thing you have counted is not an open question; it is a figure, and it belongs in paragraph 2 where I have signed for it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long is paragraph 10, and what are the six things it does?'));
out.push(item('2', 'Why is the last line what makes the paragraph safe?'));
out.push(item('3', 'What did the writer strike out, and why?'));
out.push(box('Writer\'s box', [
  '**The one thing I have not checked — four parts:** ⚠ **the named brick, with its paragraph and its consequence** → ⚠ **why the gap exists** → **the judgement handed to the reader** → ⚠ **and the remedy, priced.**',
  '⚠ **Say *changes*, not *may need review*.** ⚠ *My recommendation at paragraph 9 changes.* **A hedged consequence is not a consequence and nobody acts on it.**',
  '⚠ **Give the reason for the gap, even when it is a judgement of yours.** ⚠ *Asking the mill would tell the mill, and the mill sells to two of our competitors.* **A gap with a reason is a decision; a gap with no reason is laziness, and the reader cannot tell them apart without you.**',
  '⚠ **Price the remedy.** ⚠ *One telephone call, and I will make it this afternoon.* ⚠ **An admitted gap with no remedy is a hole; an admitted gap with a price is a choice offered to your reader**, and that is what makes it safe to write.',
  '⚠ **One invitation, and strike out the second even if it is true.** ⚠ **The first does its work and the second undoes it.**',
  '⚠ **And know the difference between a gap and a figure.** ⚠ **A thing you counted yourself is not an open question** — **it goes where you have signed for it, not where you are asking for help.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *one thing I have not checked* paragraph for a piece of your own work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — ______________, THE ONE THING I HAVE NOT CHECKED. ______________.**   ⚠ **If ______________, ______________ is wrong and ______________ changes.** ⚠ **I have not ______________.** **I have not because ______________, and ______________.** ⚠ **You will know whether ______________ and I do not.** **If you think it is wrong, the question takes ______________ and I will ______________.**   ⚠ **That is ______________ words, and it is the paragraph I would defend if I could keep only one.**   ⚠ **And there is only one.** **______________ I had written ______________, and I have struck it out** — ⚠ **not because it was untrue but because ______________.** ⚠ **______________ I ______________ myself, and a thing you have ______________ is not an open question; it is ______________, and it belongs ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The brick named, with its paragraph', ''],
  ['*changes*, not *may need review*', ''],
  ['The reason the gap exists', ''],
  ['The remedy, priced', ''],
  ['One invitation only, the second struck out', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their invitation. ⚠ The class says what it would cost to close the gap, and whether anybody in the room could close it now.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you were sure of and wrong about (**200 to 240 words**). Say what you assumed, who could have told you, why they did not, and what sentence would have let them.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the person who knew ever asked?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did somebody in the building already know? Usually all three — ⚠ **and in two of three they had not been asked because asking would have looked like not knowing.**'));
out.push(box('Homework', ['Write your final text. Then take the thing you are most sure of at work, name the brick under it, and make the telephone call (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.6 =======================
out.push(pb());
out.push(h2('1.6  Reading a brief somebody wrote about you'));
out.push(p('**Function:** reading a document that characterises you   ·   **Grammar:** _it says · it implies · it assumes_ — three layers of a sentence   ·   **Pronunciation:** reading an unflattering line aloud without heat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you ever read something written about your own work by somebody outside it? Say what it got wrong.'));
out.push(p('**b**  Which layer is which? _a small workshop in Mezzeh · (says) it is small · (implies) it cannot refuse · (assumes) it has no other buyer_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say is the useful thing about an unflattering brief?   **A** nothing   **B** it tells you what the other side believes about you   **C** it is usually right'));
out.push(p('**b**  Listen again. **1** What three layers does Nour separate? **2** What does the brief assume that is false?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  "Three layers in nine words"', [
  ['Bassel', 'You have read his letter four times. What has upset you?'],
  ['Nour', 'Page one. ⚠ *A small family workshop in Mezzeh with limited export experience.*'],
  ['Bassel', 'And?'],
  ['Nour', '⚠ **We have exported every month since January. Twice a month since March.**'],
  ['Bassel', '⚠ **Then separate the layers before you answer any of it.** ⚠ **What does the sentence say?**'],
  ['Nour', 'That we are small, in Mezzeh, and new to export. Two of those are true.'],
  ['Bassel', '⚠ **What does it imply?**'],
  ['Nour', '…That we are not in a position to negotiate. That a three-year offer is generous to us.'],
  ['Bassel', '⚠ **And what does it assume?**'],
  ['Nour', '⚠ **That we have no other buyer.** ⚠ **Which is the only one of the three that is actually a mistake** — we have Ms Tannous, and a price list that holds for fourteen days, and a plater in Aleppo who put his rate up twelve per cent in March and we still have him.'],
  ['Bassel', '⚠ **So the brief is useful.** ⚠ **It is nine words, it is written by the man you are negotiating with, and it tells you exactly what he believes about you.** ⚠ **You would have paid for that.**'],
  ['Nour', 'And the part that is wrong about the export experience?'],
  ['Bassel', '⚠ **Correct it once, with a figure, in the paper you are writing for your own employer** — not in a letter to Mr Dallal. ⚠ **A man who thinks you are inexperienced will make an offer that shows what he thinks.** **Let him make it.**'],
  ['Nour', 'And the *small*?'],
  ['Bassel', '⚠ **Small is true and it is not an insult, and you will waste a year of your life if you decide it is.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three layers of a sentence about you**',
  table(['Layer', 'Question', 'In the nine words'], [
    ['⚠ **says**', '**what is stated?**', '⚠ **small · in Mezzeh · limited export experience**'],
    ['⚠ **implies**', '**what follows, unstated?**', 'not in a position to negotiate; the offer is generous'],
    ['⚠ **assumes**', '⚠ **what must be true for it to work?**', '⚠ **that we have no other buyer** — **and that is false**'],
    ['**then**', '⚠ **which layer is actually wrong?**', 'two of the three stated facts are true'],
  ], [1.2, 1.9, 2.9]),
  '⚠ **Separate the layers before you answer any of it.** **Most of the heat in reading a brief about yourself comes from answering the implication as though it were the statement.**',
  '⚠ **The assumption is where the mistakes live.** ⚠ *That we have no other buyer.* **A stated fact can be checked; an implication is arguable; an assumption is usually unexamined, and that is where the other side is actually wrong.**',
  '⚠ **A brief written by the person you are negotiating with is worth money.** ⚠ **Nine words telling you what he believes about you.** ⚠ **You would have paid for that.**',
  '⚠ **Correct it to your own side, once, with a figure. Not to him.** ⚠ **A man who thinks you are inexperienced will make an offer that shows what he thinks — let him make it.**',
  '⚠ **And accept the true part.** ⚠ *Small is true and it is not an insult*, **and a year spent proving otherwise is a year.**',
  '**Practise:** Take a sentence somebody has written about your work. Say what it states, implies and assumes, and say which layer is wrong.',
  '**Useful phrases:**  separate the layers  ·  what does it say · imply · assume  ·  the assumption is where the mistakes live  ·  let him make it  ·  small is true and it is not an insult',
  '**Pronunciation – an unflattering line read without heat.** 🔊 **Track 1.12** Listen to two speakers read *a small family workshop with limited export experience*. ⚠ **One reads it like a line of a document. The other presses on *limited*.** **The second has started arguing**, and will answer the implication instead of the assumption. Read it flat, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings a sentence written about their work; B takes A through the three layers.'));
out.push(dlg(null, [
  ['B', 'What has upset you?'],
  ['A', '__________.'],
  ['B', '⚠ **What does it say?**'],
  ['A', 'That __________. __________ of those are true.'],
  ['B', '⚠ **What does it imply?**'],
  ['A', '…That __________.'],
  ['B', '⚠ **And what does it assume?**'],
  ['A', '⚠ **That __________** — ⚠ which is the only one that is actually a mistake, because __________.'],
  ['B', '⚠ **So the brief is useful.** It tells you __________. ⚠ **Correct it once, with a figure, to __________ and not to __________.**'],
]));
out.push(table(['Role card 1 — nine words', 'Role card 2 — the true part'], [[
  '*A small family workshop in Mezzeh with limited export experience.* ⚠ **Says: small, Mezzeh, inexperienced. Implies: cannot negotiate. Assumes: no other buyer** — ⚠ **and that is the false one.** **Correct the export figure to your own employer, once, and let Mr Dallal make the offer he believes in.**',
  'A is angry about a sentence. ⚠ B\'s job is to find the part of it that is **true** and make A say so out loud. ⚠ **Expect resistance.** **Then ask what a year of proving it wrong would cost** — ⚠ **and whether the part that is true is actually an insult or only a fact A does not like.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three layers. ⚠ Then say which layer the speaker was angry about, and which one was actually wrong.'));
out.push(PHRASE_CARD(['separate the layers', 'what does it say?', 'what does it imply?', 'what does it assume?', 'let him make it', 'small is true']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** sentences written about your work by somebody outside it. Open each one up.'));
out.push(table(['The sentence', 'Says', 'Implies', 'Assumes — and is it true?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.3, 1.5, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sentence says _______, implies _______, and assumes _______. The wrong layer is _______. The true part is _______, and I am going to stop arguing with it._'));
out.push(p('**Listener task:** count how many wrong layers were assumptions. ⚠ Then ask what each assumption would have cost the other side if nobody had noticed.'));
out.push(p('**Board clinic:** your teacher writes three readings on the board — look for a person answering the implication, and a true statement treated as an insult. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HIS LETTER, OPENED UP. 17 January. N. Mansour. ⚠ For the file, and not for Mr Dallal.**',
  table(['His words', 'Says', 'Implies', 'Assumes', 'True?'], [
    ['*a small family workshop in Mezzeh*', 'size, place, ownership', 'we cannot refuse', '⚠ **that we have no other buyer**', '⚠ **says: yes. assumes: no**'],
    ['*with limited export experience*', 'we are new to it', 'we need his market', '⚠ **that we do not know our own costs abroad**', '⚠ **no — every month since January**'],
    ['*we are prepared to offer a three-year term*', 'a long commitment', 'generosity', '⚠ **that length is what we want**', '⚠ **no — length is what _he_ wants**'],
    ['*at the price set out below, which is a condition of the term*', 'a price', 'take it together', 'that we will read the term and not the price', '⚠ **no, and only just**'],
    ['*subject to the damages provisions at paragraph 11*', 'a clause', 'a formality', 'that we will not price the risk', 'not yet known'],
    ['*we would of course expect to deal directly*', 'no intermediary', 'tidier for everybody', '⚠ **that Ms Tannous is a cost and not a reason**', '⚠ **no, and this is the real mistake**'],
  ], [1.9, 1.1, 1.1, 1.8, 1.1]),
  '⚠ **Six sentences, and the mistake that matters is in the last one.** **He reads Ms Tannous as a margin between him and us.** ⚠ **She is the reason there is an us: she found this company, she took the first order at a price that barely held, and she carried the risk of our first export season when nobody in Beirut had heard of Mezzeh.** ⚠ **A man who thinks she is a cost has not asked how he came to be buying our cartons at all.**',
  '⚠ **And the third line is the one I will use.** **He assumes a three-year term is what a small workshop wants: security, a long order, a quiet year.** ⚠ **Length is what _he_ wants** — ⚠ **his board is what moves in three years, not ours** — **and the moment I read it that way the whole letter changed direction.**',
  '⚠ **What I have not done, and will not: write any of this to him.** ⚠ **This page is for the file and for Mr Ayoub.** **A letter that tells the other side what you have worked out about his assumptions is a letter that teaches him to hide them.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many sentences are opened up, and where is the mistake that matters?'));
out.push(item('2', 'What does the writer say the three-year term is really for?'));
out.push(item('3', 'Who is this page for, and who is it not for?'));
out.push(box('Writer\'s box', [
  '**A letter, opened up — four parts:** ⚠ **a table: *his words · says · implies · assumes · true?*** → ⚠ **the mistake that matters** → **the line you will use** → ⚠ **and who the page is for.**',
  '⚠ **Quote his words, not your summary of them.** **The sentence in the left-hand column must be his** — ⚠ **the moment you paraphrase, you are reading your own annoyance.**',
  '⚠ **Put *true?* in its own column, and answer it layer by layer.** ⚠ *Says: yes. Assumes: no.* **A sentence can be accurate and rest on something false, and that split is the whole value of the exercise.**',
  '⚠ **Find the assumption about the person who is not in the room.** ⚠ *That Ms Tannous is a cost and not a reason.* **It is where the other side is most often wrong, because nobody argues for the absent.**',
  '⚠ **Look for the thing he wants that he has described as something you want.** ⚠ *Length is what he wants; his board is what moves in three years, not ours.* **One re-reading like that turns a letter round.**',
  '⚠ **And write at the top who the page is for.** ⚠ **A letter that tells the other side what you have worked out about his assumptions teaches him to hide them.** **This page is for your own file.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Open up a letter or message written to you by somebody on the other side of something (**80 words or more**). Use the frame.'));
out.push(p('**______________, OPENED UP. ______________. ⚠ For the file, and not for ______________.**   _(his words)_ | ______________ | ______________ | ⚠ **______________** | ______________   _(his words)_ | ______________ | ______________ | ⚠ **______________** | ⚠ **______________**   _(his words)_ | ______________ | ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **______________ sentences, and the mistake that matters is in ______________.** ⚠ **He reads ______________ as ______________.** ______________. ⚠ **A person who thinks ______________ has not asked ______________.**   ⚠ **And ______________ is the line I will use.** **He assumes ______________.** ⚠ **______________ is what _he_ wants** — ______________ — **and the moment I read it that way ______________.**   ⚠ **What I have not done, and will not: ______________.** ⚠ **A letter that tells the other side ______________ is a letter that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['His words quoted, not summarised', ''],
  ['*true?* answered layer by layer', ''],
  ['An assumption about somebody not in the room', ''],
  ['Something he wants, described as something you want', ''],
  ['Who the page is for, at the top', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the assumption they found about an absent person. ⚠ The class says who would have argued for them if they had been there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something written about you or your work by somebody outside it (**200 to 240 words**). Say what it stated, what it assumed, which part was true, and what you did with it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which layer is the writer angry about?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the writer angry about the implication rather than the assumption? Usually two of three — ⚠ **and in all three there was a true part that nobody wanted to say out loud.**'));
out.push(box('Homework', ['Write your final text. Then take the last letter from somebody on the other side of something, and write the assumption under each of its sentences (80+ words).'], C.lblue, C.navy));

// ======================= CYCLE 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review & Mediate: who has already decided, and who only thinks they have'));
out.push(p('**Function:** explaining a decision paper to the colleague it affects   ·   **Review:** the first four lines · settled / closed / open / not ours · reduced reference · answerable for · the invited correction · says / implies / assumes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What goes in each of the first four lines, and why is a page that can be stopped at line four more likely to be finished?',
  '**2** What are the four states of an item, and which one is not yours?',
  '**3** What is the one thing you still explain to a reader who knows everything?',
  '**4** What is the test that separates a limit from an excuse?',
  '**5** Why has *please correct me if I am wrong* never corrected anything?',
  '**6** What are the three layers of a sentence written about you, and which layer is usually wrong?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Lina misread in the paper?   **A** the figures   **B** she thinks the decision has been taken   **C** the date'));
out.push(p('**b**  Listen again. **1** What does she point to as evidence? **2** What does Nour say the paper actually asks for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  "Who has already decided?"', [
  ['Lina', 'So we are not taking the Beirut contract.'],
  ['Nour', 'Nothing has been decided. Where did you get that?'],
  ['Lina', 'Your paper. ⚠ *I am recommending against it in its present form.* It is on the first page, line three.'],
  ['Nour', '⚠ **It is, and the word is *recommending*.** ⚠ **A recommendation is a thing one person says to another person who can say no.**'],
  ['Lina', 'But you wrote four pages. Nobody writes four pages and then loses.'],
  ['Nour', '⚠ **People lose after four pages every day of the week, and I may be about to.** Read the last line of page four.'],
  ['Lina', '⚠ *I can be overruled on whether three years is a risk worth taking. That is a judgement and it is yours.*'],
  ['Nour', '⚠ **So who has decided?**'],
  ['Lina', '…Nobody. ⚠ **Mr Ayoub has.** He said in the yard on Tuesday that it was the best thing that had happened to us in ten years.'],
  ['Nour', '⚠ **That is not a decision. That is an inclination, said out loud, before he had read anything.** ⚠ **The paper exists because of it.**'],
  ['Lina', 'Then why does everybody in the packing room think it is settled?'],
  ['Nour', '⚠ **Because he said it in the yard and I wrote mine on paper**, and a thing said in a yard travels in a morning while a thing on paper waits for a reader. ⚠ **That is the whole asymmetry and it is not fixable by writing better.**'],
  ['Lina', 'So what do I tell them?'],
  ['Nour', '⚠ **Four things, and in this order.** ⚠ **The volume is settled: eleven hundred a month against our four hundred. Ms Tannous was told on the 11th, and that is closed. The clause is a legal question and is not ours. And the only open item is whether we take three years** — ⚠ **which is Mr Ayoub\'s, and which he has not taken.**'],
  ['Lina', 'And if they ask me what you think?'],
  ['Nour', '⚠ **Tell them what I have written, which is against, and that I have said in writing that I will pack eleven hundred a month without complaining if he goes the other way.** ⚠ **The second half is the half that stops a rumour.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining a decision paper to the people it affects**',
  table(['To correct the misreading', 'To sort the file for them', 'To stop the rumour'], [
    ['⚠ *Nothing has been decided.*', '⚠ *Settled: … Closed: … Not ours: …*', '⚠ *The only open item is …*'],
    ['⚠ *The word is **recommending**.*', '*and it was closed on the 11th*', '⚠ *and it is his, and he has not taken it*'],
    ['*A recommendation is a thing one person says to another who can say no.*', '*the clause is a legal question*', '⚠ *I have written that I will carry it out either way.*'],
  ], [2.2, 1.8, 2]),
  '⚠ **An inclination said out loud is not a decision, and it travels faster than a paper.** ⚠ **A thing said in a yard travels in a morning; a thing on paper waits for a reader** — ⚠ **and that asymmetry is not fixable by writing better.** **It is fixable by telling people, out loud, in the yard.**',
  '⚠ **Sort the file for them in four words before you give them any detail**: *settled · closed · not ours · open.* **A colleague who has the four categories stops asking you the same question every morning.**',
  '⚠ **Name who owns the open item, and say whether they have taken it.** ⚠ *It is his, and he has not taken it.* **Most office rumours are an open item with no named owner.**',
  '⚠ **And repeat the *overruled on* line to them, not only to your reader.** ⚠ **A department that knows you will carry out the opposite of your own recommendation without sulking stops treating the question as a fight** — ⚠ **and that second half is the half that stops a rumour.**',
  '**Practise:** A colleague thinks something is settled. Correct the reading, sort the file in four words, name the owner of the open item, and say what you will do if you lose.',
  '**Useful phrases:**  nothing has been decided  ·  the word is *recommending*  ·  an inclination said out loud  ·  settled, closed, not ours, open  ·  it is his, and he has not taken it  ·  either way, without complaining',
  '**Pronunciation – reading a paper aloud for a colleague.** 🔊 **Track 1.14** Listen to the four categories read for somebody who has to repeat them: ⚠ **each one a short phrase, a pause, then the item.** **Read as continuous prose they are unrepeatable**, and a colleague who cannot repeat them will invent a fifth. Repeat all four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A thinks something is settled; B corrects the reading, sorts the file and names the owner. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'A has read *I am recommending against it* as a decision and has told the packing room. ⚠ **B: nothing has been decided, the word is *recommending*, and the open item is Mr Ayoub\'s and he has not taken it.** ⚠ **Then B adds the line that stops the rumour: I will pack eleven hundred a month either way.**',
  'A believes a thing is open and it was closed six weeks ago. ⚠ B\'s job is to give the date and the closer: ⚠ **it was closed on the 11th, and it was closed by the person who told Ms Tannous the day the letter came.** ⚠ **Then ask A where they heard it was open** — ⚠ **and expect the answer to be somebody repeating something said in a yard.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the four categories with one item in each. ⚠ Then say which category the misreading had put the open item in, and what the rumour cost.'));
out.push(PHRASE_CARD(['nothing has been decided', 'the word is recommending', 'an inclination said out loud', 'settled · closed · not ours · open', 'it is his, and he has not taken it', 'either way, without complaining']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a decision paper and the covering note. Read both silently. Then explain them to **two** colleagues: one who thinks the decision has been taken, and one who thinks nothing is happening at all.'));
out.push(table(['Who I told', 'What they thought had happened', 'The four categories, as I gave them', 'What they asked next'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 2, 1.3]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the paper. This is the **first** unit of this book, and the unwritten thing is the one the whole unit has been circling: ⚠ **a decision has an owner and a date, and an inclination has neither — but the inclination is said out loud in a yard and the decision waits on a page, so the building always believes the inclination, and the only remedy is a person willing to stand in the yard and say the four categories out loud.**'));
out.push(p('_The paper recommended ______. My colleague thought ______. The four categories were ______. The open item belongs to ______, and they have ______ taken it._'));
out.push(p('**Listener task:** start the Book 1 **paper-and-decision word list** with this unit\'s entries: _a standing remit · an approver · a reserved matter · a line of accountability · to be overruled · a direction of travel_. It runs to Unit 12 and is collected in the Unit 12 key.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a recommendation reported as a decision, and an open item with no named owner. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)', 10));
out.push(p('⚠ **About the exam practice in this book.** B2 Business Vantage has **five** Reading parts, and each unit of this book practises one of them in rotation, so that by Unit 12 you have met every part at least twice. ⚠ **This unit is Part 1: matching.** Read the five short texts **A–E**, then decide which text each statement **1–7** refers to. **A text may be used more than once.**'));
out.push(box(null, [
  '**A** _From Monday the night marking is done by the two markers appointed on 1 October. Nothing else about the night shift changes. Any question about a count goes to the warehouse before it comes to this office._',
  '**B** _Mr Dallal\'s proposal is attached. He wants an answer by 26 January. I am recommending against it in its present form. What I need from you this week is twenty minutes, not a decision._',
  '**C** _For the avoidance of doubt: the arrangement with Ms Tannous runs twelve months from 1 May. The terms were agreed on 28 April. Nothing in the Beirut correspondence alters either date._',
  '**D** _I am answerable for every figure in paragraph 2, which I counted myself over four nights in January. I am not answerable for the damages clause at paragraph 11, which is a legal question and on which advice has been sought._',
  '**E** _If the mill can supply four times the board we currently take, paragraph 7 is wrong and my recommendation changes. I have not asked them, because asking would tell them what we are considering._',
], 'FFFFFF', C.navy));
out.push(p('**1** This text names a gap the writer has left on purpose.   **2** This text corrects a date without saying that anybody was wrong.   **3** This text asks for less than the reader was expecting to be asked for.   **4** This text sends a question to somebody else before it reaches the writer.   **5** This text divides what the writer will stand behind from what the writer will not.   **6** This text gives a deadline set by somebody outside the company.   **7** This text explains why something has not been checked.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** A note, memo, message or email to a colleague, with **three content points**, all three present. ⚠ **Part 1 is worth half the marks of Part 2 and takes a third of the time: do not spend a sentence on courtesy.**',
  '⚠ **For a decision message the three points are nearly always: what is being decided · who is deciding it · and what the reader should do in the meantime.**',
  '⚠ **In forty-five words you cannot sort a whole file, so sort the one item the reader has wrong.** **That is the examination, and it is also the better message.**',
  '⚠ **Begin with the state, not with a greeting.** ⚠ *Nothing has been decided about the Beirut contract* **uses seven words and does the main job of the message.**',
  '⚠ **And name the owner.** **A forty-five-word message that says a thing is open without saying whose it is will produce four conversations tomorrow**, which is the thing it was written to prevent.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** A proposal is being considered at your workplace and your colleagues believe it has already been accepted. Write an internal message to your department (**40 to 50 words**). Say **what is being decided**, **who is deciding it**, and **what they should do in the meantime**.'));
out.push(p('______________: ______________ has not been ______________. ______________ is ______________, and ______________ will decide ______________. Until then, please ______________ and ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the three points and the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The state in the first line, not a greeting', ''],
  ['What is being decided', ''],
  ['Who is deciding it, by name or role', ''],
  ['What the reader should do in the meantime', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that the building believes is settled and is not (**200 to 240 words**). Say what was actually said and by whom, where it was said, how it travelled, what is in fact settled, closed, not yours and open, who owns the open item, and what you would say if you had to stand in the yard and say it out loud.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take the four categories to the person at your work who repeats things fastest, say them out loud, and write down what they say back (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The volume is ___, whatever anybody wants.   a) settled   b) settling   c) settle',
  '2  That is a closed point, and I closed it ___ the 11th.   a) in   b) on   c) at',
  '3  The damages clause is not ___ to decide.   a) my   b) mine   c) me',
  '4  I am answerable ___ every figure in paragraph 2.   a) of   b) to   c) for',
  '5  I can ___ on whether three years is a risk worth taking.   a) overrule   b) be overruled   c) be overruling',
  '6  If the mill can supply four times the board, my recommendation ___.   a) changes   b) would have changed   c) is changing',
  '7  He is ___ to agree, but he has not agreed.   a) minding   b) minded   c) mind',
  '8  A recommendation is a thing one person says to another who ___ say no.   a) can   b) could have   c) may not',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 1.15** Listen to a colleague being told where the Beirut question stands. Complete the note.   Settled: ______   Closed, and on what date: ______   Not ours, and why: ______   Open: ______   Whose it is: ______   What the speaker will do either way: ______'));
out.push(p('**C  Reading.** Read the covering note at 1.1 again. Which line asks for the smallest thing, and why does the writer say it is the line she nearly did not write?'));
out.push(p('**D  Writing.** Your department believes a decision has been taken. Write the four categories out, with one item in each, and then the one line that stops a rumour (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Lina', 'Nobody in the packing room can tell me what is happening about Beirut.'],
  ['Nour', 'Then take four things and say them in this order. ⚠ **Settled: the volume. Eleven hundred a month against our four hundred, and the press runs three hours a night.** That is arithmetic and it does not change.'],
  ['Lina', 'And Ms Tannous?'],
  ['Nour', '⚠ **Closed, on the eleventh of January.** She was told the day the letter came, before anybody asked me to, and we cannot un-tell her. ⚠ **Say the date; a closed point without a date reopens in March.**'],
  ['Lina', 'The clause everybody is talking about?'],
  ['Nour', '⚠ **Not ours.** It is a legal question and advice was sought from Ms Nahas on the twelfth. ⚠ **Nobody in this office should be guessing about it in writing.**'],
  ['Lina', 'So what is actually open?'],
  ['Nour', '⚠ **One thing. Whether we take three years.** ⚠ **And it is Mr Ayoub\'s, and he has not taken it** — whatever he said in the yard on Tuesday, which was an inclination and not a decision.'],
  ['Lina', 'And you have written against it.'],
  ['Nour', '⚠ **I have, and I have also written that if he decides the other way I will pack eleven hundred a month and not say I told you so.** ⚠ **Say that part too. It is the half that stops a rumour.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**1.1** write four lines a reader can act on, and move the rest below the line without cutting it',
  '**1.2** sort a file into settled, closed, open and not ours, and date every closed point',
  '**1.3** stop explaining what your reader knows, and write the one line they have wrong',
  '**1.4** say what you are answerable for, what is not yours, and what you can be overruled on',
  '**1.5** name the one thing you have not checked, say what changes if it is wrong, and price the remedy',
  '**1.6** separate what a document says, implies and assumes about you, and find the layer that is false',
  '**1.7** explain a decision paper to the people it affects, and stop a rumour by naming the owner',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 2 — **Making the Case in Writing**: the paper itself. How an argument is built for a reader who can refuse it, where the strongest thing goes, and what to do with the fact that helps the other side._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
module.exports = out;
