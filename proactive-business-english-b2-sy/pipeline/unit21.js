// Proactive Business English B2 · Syria Edition · Book 2 · Unit 21 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a paper that asks for a decision · the question the reader actually has · an option set · one option with reasons attached · three real options · the option of changing nothing · to price doing nothing · what has to be true for this to work · an assumption that can be tested · an assumption nobody can test · the option you recommend against · to price the option you recommend against · a case made fairly against yourself · the ask · what you want decided · by whom and by when · a decision that is not yours to take · a proposal that cannot be acted on · a figure whose working is shown · a range rather than a point · the sensitivity of a figure · what would have to change to reverse this · a reversal condition · a paper that can only go one way · a recommendation that may be refused · to record that you advised it · the cheapest option that is not the best · a one-page summary that stands alone · an appendix nobody will read · what to put in front and what to put behind · a proposal written for a reader who will skim · the line that will be read out in the meeting';
const COLLOC = 'to put an option set · to price an option · to test an assumption · to make a case against yourself · to state an ask · to reverse a decision · to flag an assumption · to recommend against';
const BACK_AT_B2 = 'proposal · do-nothing option · preferred option';

out.push(h1('Unit 21  Proposals, and the Option You Argue Against'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**21.1**  answer the question your reader actually has, rather than the one you have prepared',
  '**21.2**  put a real option set, not one option with reasons attached to it',
  '**21.3**  price the option of changing nothing, which is the option that usually wins',
  '**21.4**  name what has to be true for your proposal to work, and which of it can be tested',
  '**21.5**  price the option you recommend against, fairly, and say what would make it right',
  '**21.6**  state the ask: what you want decided, by whom, by when',
  '**21.7**  Review & Mediate: the paper that is strong enough to defeat its own author',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ May, and a reopening somebody has to write up', [
  '⚠ **Homs reopens on 1 June and Bassel Nassif is running it.** **That was the fifth paragraph of the minute of 24 April, and he asked for it.**',
  '⚠ **What nobody mentioned in April is that a reopening needs a capital paper.** **Sixty square metres on the Hama road at 1.1 million against the 1.9 million unit, fitting out, stock, two staff, and a projection of nine million in the first full year** — ⚠ **and the firm has to decide how much of it to do in June and how much to hold back.**',
  '⚠ **So Bassel is writing his first real proposal, and his first reader is Nour, who is now his manager and who argued against the reopening in December.** **Both of them know that.**',
  '⚠ **One thing to know before you start, because it is the whole unit.** ⚠ **The option that wins most proposals is the one nobody writes down: changing nothing.** **It costs no capital, requires no decision, and has no champion** — ⚠ **and a paper that does not price it has left its strongest competitor out of the comparison.**',
], C.lyellow, C.orange));

// ======================= CYCLE 21.1 =======================
out.push(pb());
out.push(h2('21.1  The question your reader actually has'));
out.push(p('**Function:** finding the real question before writing   ·   **Grammar:** _you are asking whether X; I have written about Y_   ·   **Pronunciation:** a question repeated back'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a paper you have written at work and what question you think the reader had. ⚠ Then say whether anybody ever told you.'));
out.push(p('**b**  Which is the reader\'s question? _is the Homs reopening a good idea · how much of the 1.1 million do we have to spend before we know whether the reopening works_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour tell Bassel about his draft?   **A** nothing   **B** it answers a question the board settled in February   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What is the question the board actually has? **2** What does she say you do when you cannot work out the question?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.1  "That question was settled in February"', [
  ['Nour', 'Your first page argues that reopening Homs is the right decision.'],
  ['Bassel', 'It is.'],
  ['Nour', '⚠ **It may be, and the board decided it on 4 February.** ⚠ **You have written eleven hundred words answering a question that is closed.**'],
  ['Bassel', 'Then what is open?'],
  ['Nour', '⚠ **How much of the 1.1 million we have to spend before we know whether it is working.** ⚠ **That is what Mr Sayegh asked me in the corridor last Tuesday, in those words, and it is the only thing anybody wants from this paper.**'],
  ['Bassel', 'Nobody told me that.'],
  ['Nour', '⚠ **Nobody tells anybody.** ⚠ **Which is why you ask, and the useful form of the question is not *what do you want to know* but *what are you going to do with this paper*.**'],
  ['Bassel', 'What is the difference?'],
  ['Nour', '⚠ **The first gets you a topic and the second gets you a decision.** ⚠ *What do you want to know* **produces *everything about Homs*.** *What will you do with it* **produces *decide whether to release the fit-out money in June or in September*, which is a paper you can write in two pages.**'],
  ['Bassel', 'And if I cannot ask? If the reader is not available?'],
  ['Nour', '⚠ **Then write your guess at the question on the first line and let them correct it.** ⚠ *This paper answers one question: how much must be committed in June before the firm knows whether the site works.* **If that is the wrong question, they will tell you in eight seconds and you will have lost one line instead of eleven hundred words.**'],
  ['Bassel', 'That feels like admitting I do not know what I am doing.'],
  ['Nour', '⚠ **It is the opposite. It is the only sentence in a proposal that cannot be misread** — **and a reader who disagrees with it has just given you the paper you should have written.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Finding the question, and declaring it**',
  table(['', 'The wrong question', 'The real one'], [
    ['**the closed one**', '⚠ *is reopening Homs a good idea?* — **settled on 4 February**', '⚠ *how much must be committed in June before we know whether the site works?*'],
    ['⚠ **how to find it**', '⚠ *what do you want to know?* — **produces a topic**', '⚠ *what are you going to DO with this paper?* — **produces a decision**'],
    ['⚠ **if you cannot ask**', '**(guess silently and write 1,100 words)**', '⚠ **write your guess on line one and let them correct it** — **eight seconds against eleven hundred words**'],
  ], [1.7, 3.4, 3.9]),
  '⚠ **Most proposals answer the question the writer prepared rather than the one the reader has**, ⚠ **and the commonest version is answering a question that has already been decided** — **which reads to the reader as though the writer has not been listening.**',
  '⚠ **The finding question is *what will you do with this paper?*** ⚠ **Not *what do you want to know*, which produces a subject.** **A decision has a date, an owner and two or more answers; a subject has none of the three.**',
  '⚠ **Where you cannot ask, declare your guess in one line at the top.** ⚠ *This paper answers one question: ___.* **It is the only sentence in a proposal that cannot be misread, and a reader who corrects it has handed you the paper you should have written.**',
  '⚠ **Expect the real question to be narrower than yours and to have a date in it.** ⚠ **Not *should we reopen* but *how much in June rather than September*** — **and narrower questions make shorter papers, which is the only reliable way to be read.**',
  '⚠ **And notice where Nour got it: a corridor, last Tuesday, in those words.** ⚠ **The real question is almost always said out loud somewhere by somebody** — **and almost never written down, which is why asking beats guessing.**',
  '**Practise:** Take a paper you owe somebody. Ask *what will you do with it?* and write the question in one line.',
  '**Useful phrases:**  that question was settled  ·  what will you do with this paper?  ·  this paper answers one question  ·  if that is the wrong question, tell me  ·  nobody tells anybody',
  '**Pronunciation – a question repeated back.** 🔊 **Track 21.2** Listen twice. ⚠ **The first says *so the question is how much must be committed in June* with the voice falling at the end.** ⚠ **The second rises.** **Falling, it is a summary you are confirming; rising, it is a request to be told again, and a busy reader answers it impatiently.** Say it four times, falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a paper to write; B finds the question.'));
out.push(dlg(null, [
  ['A', 'I have to write a paper about __________.'],
  ['B', '⚠ **What is the reader going to DO with it?**'],
  ['A', '__________.'],
  ['B', '⚠ **So the question is whether to __________ or to __________, by __________?**'],
  ['A', '__________.'],
  ['B', '⚠ **Has any part of that already been decided?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then take that part out. Now write the question in one line.**'],
  ['A', '__________.'],
  ['B', '⚠ **And put it at the top, so they can correct it in eight seconds.**'],
]));
out.push(table(['Role card 1 — they want the whole picture', 'Role card 2 — I cannot admit I do not know the question'], [[
  '⚠ **A insists the reader wants everything about the subject.** ⚠ **B asks what the reader will do on the strength of it, and A has to name a decision.** ⚠ **B\'s point: *the whole picture* is what a writer produces when nobody has told them the decision** — **and every page spent on a settled question reads as not having listened.**',
  '⚠ **A will not write the question at the top, in case it reveals uncertainty.** ⚠ **B asks what the alternative costs if the guess is wrong.** ⚠ **B\'s point: the declared guess costs one line and eight seconds of the reader\'s patience; the silent guess costs the whole paper** — **and a reader who corrects the line has given you the paper you should have written, for free.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one reader\'s question in one line, with a date in it. ⚠ Then say which part of the subject has already been decided and must come out.'));
out.push(PHRASE_CARD(['what will they do with it?', 'whether X or Y, by when?', 'what is already decided?', 'the question, in one line', 'at the top, so they can correct it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** papers you owe somebody.'));
out.push(table(['The subject', 'What the reader will DO', 'The question, in one line', 'What has already been decided'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.2, 2.8, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The subject is _______. The reader will _______. So the question is whether to _______ or to _______, by _______. And _______ has already been decided, so it comes out._'));
out.push(p('**Listener task:** count how many of the questions have a date in them. ⚠ Then ask how many of the writers have ever asked their reader the finding question, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four opening lines on the board — find the one that answers a settled question, and the one whose question has no decision in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING: THE CAPITAL PAPER. PAGE 1. B. Nassif, 14 May. Two pages and an appendix.**',
  '⚠ **This paper answers one question: how much of the 1.1 million must be committed in June, before the firm knows whether the site works?** **If that is the wrong question, tell me and I will write the other one.**',
  '⚠ **What is already decided and is not in this paper.** **That Homs reopens: decided 4 February, on a count of a hundred and ninety-six a week against thresholds of two hundred and twenty and a hundred and fifty.** **That it is sixty square metres on the Hama road at 1.1 million: decided in the same minute.** ⚠ **I have written nothing about either and I want that noticed, because my December paper argued for both and this is not that paper.**',
  '⚠ **The answer, in one line, so that nobody has to reach page 2.** **About 640,000 must be committed in June. The remaining 460,000 can wait until the eighth week of trading, and waiting costs about 35,000.**',
  '⚠ **What is on each page.** **Page 2: the three options, with the option of changing nothing priced. The appendix: the fit-out quotations, the staffing, and the eight-week trading test.**',
  '⚠ **One thing about my own position, which Nour has asked me to put at the front rather than the back.** **I proposed the reopening in December and I was wrong about the threshold** — **I said a hundred and fifty and the count came in at a hundred and ninety-six, which is above my number and below hers.** ⚠ **So a reader should know that the person writing the capital paper is the person whose threshold was the lower one, and should read my eight-week test with that in mind.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the question the paper answers, and what does the writer invite the reader to do?'));
out.push(item('2', 'What does the writer say is already decided, and why does he want that noticed?'));
out.push(item('3', 'What does he disclose about his own position, and what does he ask the reader to do with it?'));
out.push(box('Writer\'s box', [
  '**The first page of a proposal — five parts:** ⚠ **the question, in one line, with an invitation to correct it** → ⚠ **what is already decided and therefore absent** → ⚠ **the answer, in one line, so nobody has to reach page 2** → **what is on each page** → ⚠ **and your own position in it.**',
  '⚠ **Put the question first and invite correction.** ⚠ *If that is the wrong question, tell me and I will write the other one.* **Eleven words that cost nothing and save a paper.**',
  '⚠ **List what is already decided, and say you have written nothing about it.** ⚠ **It stops a reader scanning for arguments they have already heard**, **and where the writer previously argued for the decided thing, saying so prevents the paper being read as a second attempt.**',
  '⚠ **Give the answer on page 1, in one line, with the cost of the alternative.** ⚠ *About 640,000 in June; the rest can wait eight weeks, and waiting costs about 35,000.* **A reader who stops there has what they came for** — **and a proposal written to be read in order is a proposal written for somebody who is not busy.**',
  '⚠ **Say what is on each page.** ⚠ **Three lines, so a reader with one question knows which page holds it** — **the same move as 18.6, and it works on two pages as well as on six.**',
  '⚠ **And disclose your own position at the FRONT.** ⚠ *The person writing this is the person whose threshold was the lower one; read my eight-week test with that in mind.* **At the back it reads as a confession; at the front it is a piece of information, and it makes the rest of the paper more credible rather than less.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first page of a proposal for your work (**80 words or more**). Use the frame.'));
out.push(p('**______________: ______________. PAGE 1. ______________, ______________.**   ⚠ **This paper answers one question: ______________? If that is the wrong question, tell me and I will write the other one.**   ⚠ **What is already decided and is not in this paper. ______________: decided ______________. ______________.**   ⚠ **The answer, in one line, so that nobody has to reach page 2. ______________, and ______________ costs about ______________.**   ⚠ **What is on each page. ______________.**   ⚠ **One thing about my own position. ______________, so a reader should know that ______________ and should read ______________ with that in mind.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The question in one line, with an invitation to correct it', ''],
  ['What is already decided, and absent', ''],
  ['The answer on page 1, with the cost of the alternative', ''],
  ['What is on each page', ''],
  ['The writer\'s own position, at the front', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their question line. ⚠ The class says of each whether it contains a decision, two answers and a date.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a paper at your work that answered the wrong question (**200 to 240 words**). Say what you wrote, what the reader actually wanted, how you found out, and what it cost.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is there a decision in this question?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer find out the real question only after submitting? ⚠ **Usually all three** — **and in at least one the real question had been said out loud by somebody, in a corridor, before the paper was started.**'));
out.push(box('Homework', ['Write your final text. Then take one paper you owe somebody, ask them what they will do with it, and write the question in one line (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.2 =======================
out.push(pb());
out.push(h2('21.2  A real option set'));
out.push(p('**Function:** offering choices rather than a preference dressed as choices   ·   **Grammar:** _option A does X; option B does Y; they differ in Z_   ·   **Pronunciation:** three options read with equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a time somebody gave you three options and you could see which one they wanted. ⚠ Then say how you could tell.'));
out.push(p('**b**  Which is an option set? _A: commit the full 1.1 m. B: commit 1.1 m but more slowly. C: do not reopen, which the board has already rejected · A: commit all of it in June. B: commit 640,000 in June and 460,000 at week eight. C: lease the 1.9 m unit instead, at 300,000 more a year and twice the floor_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about Bassel\'s three options?   **A** nothing   **B** two of them are the same option and the third is one nobody would take   **C** there are too many'));
out.push(p('**b**  Listen again. **1** What are the three tests she gives? **2** What does she say a reader does when they can see which option you want?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.3  "That is one option wearing three hats"', [
  ['Nadia', 'Your three options. A is the full amount in June. B is the full amount more slowly. C is not reopening.'],
  ['Bassel', 'Three options.'],
  ['Nadia', '⚠ **A and B are the same option at two speeds, and C was rejected in February.** ⚠ **So it is one option wearing three hats, and a reader can see that in about four seconds.**'],
  ['Bassel', 'What should the three be?'],
  ['Nadia', '⚠ **Apply three tests and they will fall out.** ⚠ **One: could a sensible person choose each of them? Two: do they differ in something other than degree? Three: has any of them already been decided?**'],
  ['Bassel', 'B and A differ in degree.'],
  ['Nadia', '⚠ **They differ in nothing else, so they are one option with a dial on it** — **and a dial belongs inside an option, not between two.**'],
  ['Bassel', 'So what is a real third option?'],
  ['Nadia', '⚠ **The 1.9 million unit, which you have never put in writing and which Mr Ayoub asked about in February.** ⚠ **Twice the floor, three hundred thousand more a year, and a completely different proposition** — **and it fails test one for you and passes it for somebody who thinks the site will work.**'],
  ['Bassel', 'I think that option is wrong.'],
  ['Nadia', '⚠ **Which is 21.5 and we will come to it.** ⚠ **The point now is that it is an option a sensible person could choose**, **and leaving it out does not remove it from the board\'s mind** — **it removes it from your paper, where you could have answered it.**'],
  ['Bassel', 'And if they can see which one I want?'],
  ['Nadia', '⚠ **They always can and that is fine.** ⚠ **What they must not be able to see is that the others were put there to lose** — **because a reader who spots that stops reading the options and starts looking for what else you have arranged.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three tests for an option set**',
  table(['', 'The test', 'Applied'], [
    ['**1 choosable**', '⚠ **could a sensible person choose each one?**', '⚠ *not reopening* **fails** — **it was decided in February**'],
    ['⚠ **2 different in kind**', '⚠ **do they differ in something other than degree?**', '⚠ *the full amount in June* **and** *the full amount more slowly* **differ only in degree** — **one option with a dial on it**'],
    ['**3 still open**', '**has any of them already been decided?**', '**a decided option is not an option; it is a reminder**'],
    ['⚠ **the real third**', '⚠ **the one you have never put in writing**', '⚠ *the 1.9 m unit* — **twice the floor, 300,000 a year more, a different proposition entirely**'],
  ], [1.8, 3.2, 4]),
  '⚠ **One option at three speeds is one option.** ⚠ **A dial belongs inside an option, not between two of them** — **and a set made that way is visible as a set made that way in about four seconds.**',
  '⚠ **The real third option is usually the one you have not written down because you think it is wrong.** ⚠ **Leaving it out does not remove it from the reader\'s mind; it removes it from your paper, where you could have answered it.**',
  '⚠ **A reader is allowed to see which option you prefer.** ⚠ **What they must not see is that the others were put there to lose** — **because a reader who spots that stops assessing the options and starts looking for what else has been arranged.**',
  '⚠ **Say what the options differ IN, in one line.** ⚠ *They differ in how much floor we take and how much we commit before we know.* **Two dimensions, named, and the reader can now hold all three in their head at once.**',
  '⚠ **And beware the option that exists to be rejected.** ⚠ **Every reader has met it, every reader recognises it, and it costs more than the argument it was meant to win** — **which is the subject of 21.5 and the hardest thing in the unit.**',
  '**Practise:** Take a decision at your work. Write three options and apply the three tests. Then find the one you have not written down.',
  '**Useful phrases:**  one option wearing three hats  ·  a dial belongs inside an option  ·  could a sensible person choose it?  ·  they differ in  ·  put there to lose',
  '**Pronunciation – three options, equally weighted.** 🔊 **Track 21.4** Listen twice. ⚠ **The first reads all three option headings at the same pace and volume.** ⚠ **The second slows and warms on the second one.** **Equal, the reader assesses three options; warmed, the reader has been told the answer and reads the other two looking for the flaw.** Say all three four times, equally.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers three options; B applies the tests.'));
out.push(dlg(null, [
  ['A', 'Option A is __________. Option B is __________. Option C is __________.'],
  ['B', '⚠ **Could a sensible person choose each of those?**'],
  ['A', '__________.'],
  ['B', '⚠ **Do any two of them differ only in degree?**'],
  ['A', '__________.'],
  ['B', '⚠ **Has any of them already been decided?**'],
  ['A', '__________.'],
  ['B', '⚠ **So what is the option you have not written down?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what do these options differ IN? Say it in one line.**'],
]));
out.push(table(['Role card 1 — three speeds is three options', 'Role card 2 — why include one I think is wrong'], [[
  '⚠ **A offers the same course of action at three levels of spending.** ⚠ **B asks what the three differ in besides the number.** ⚠ **B\'s point: they differ in nothing, so it is one option with a dial, and the dial belongs inside the option** — **which also means a reader comparing them is comparing a figure with itself.**',
  '⚠ **A will not include an option they believe is mistaken.** ⚠ **B asks whether the board will think of it anyway, and who asked about it in February.** ⚠ **B\'s point: omitting it does not remove it from anybody\'s mind** — **it removes it from the one document where the writer could have answered it, and the question then arrives in the meeting with nobody prepared.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write three options that pass all three tests. ⚠ Then write the one line saying what they differ in.'));
out.push(PHRASE_CARD(['could somebody choose it?', 'differ in more than degree?', 'already decided?', 'the one you did not write', 'they differ in…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** decision at your work and build the set.'));
out.push(table(['Option', 'What it is', 'Choosable? Different in kind? Still open?', 'What it differs in'], [['**A**', '', '', ''], ['**B**', '', '', ''], ['**C**', '', '', '']], [0.8, 2.6, 2.8, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A is _______, B is _______, C is _______. They differ in _______ and _______. The one I had not written down was _______, and it fails test _______ for me and passes it for somebody who _______._'));
out.push(p('**Listener task:** count how many sets had two options differing only in degree. ⚠ Then ask how many of the writers found an option they had been leaving out, and expect most to have done.'));
out.push(p('**Board clinic:** your teacher writes four option sets on the board — find the one with a dial between two options, and the one containing a decided option. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING, PAGE 2: THE OPTIONS. B. Nassif, 14 May.**',
  '⚠ **The three options differ in two things only: how much floor we take, and how much we commit before we know whether the site works.** **Everything else about them is the same.**',
  table(['', 'A  Commit in full, June', 'B  Commit 640, hold 460', 'C  The 1.9 m unit'], [
    ['**floor**', '**sixty square metres**', '**sixty square metres**', '⚠ **a hundred and twenty square metres**'],
    ['**committed in June**', '**1.10 m**', '⚠ **0.64 m**', '**1.90 m**'],
    ['**committed later**', '**—**', '⚠ **0.46 m at week eight**', '**—**'],
    ['**annual rent**', '**1.1 m**', '**1.1 m**', '⚠ **1.4 m**'],
    ['**first-year projection**', '**9.0 m**', '⚠ **8.4 m** — **six weeks of partial stock**', '⚠ **13.0 m**, **on an assumption nobody can test**'],
    ['⚠ **cost of being wrong**', '**1.10 m committed and a lease**', '⚠ **0.64 m committed and a lease**', '**1.90 m committed and a bigger lease**'],
    ['⚠ **who could choose it**', '**anybody confident the count holds**', '**anybody who wants the count tested in trading**', '⚠ **anybody who thinks the northern market is larger than the count showed** — **which is the position Mr Ayoub took in February**'],
  ], [1.9, 2.3, 2.4, 3.4]),
  '⚠ **The last row is the one I was going to leave out and Nour asked for it.** **It names, for each option, the person who could reasonably choose it** — ⚠ **and writing it changed my view of option C, which I had been treating as nobody\'s position when it is in fact the position the previous office manager took in February with reasons.**',
  '⚠ **What I have NOT done.** **I have not put the same course of action at three speeds.** ⚠ **A and B are the same floor and the same site, and they differ in one thing: whether 460,000 is committed before or after eight weeks of trading** — **so B is not a slower A, it is A with a test in the middle, and that is a difference in kind and not in degree.**',
  '⚠ **And one figure I want to flag rather than bury.** **The 13 million in option C rests on an assumption about the northern market that nobody in this firm can test**, ⚠ **and I have written that in the cell rather than in the appendix** — **because a figure with an untestable assumption behind it is more dangerous in a table than in a paragraph.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two things do the options differ in, and what is the same about all three?'));
out.push(item('2', 'What does the last row do, and what did writing it change?'));
out.push(item('3', 'Why does the writer say B is not a slower A?'));
out.push(box('Writer\'s box', [
  '**The options page — five parts:** ⚠ **a line saying what they differ in** → ⚠ **one column per option, one row per dimension** → ⚠ **a *cost of being wrong* row** → ⚠ **a *who could choose it* row, naming a real position** → ⚠ **and any untestable figure flagged in the cell rather than in an appendix.**',
  '⚠ **Open with what they differ in, and say what is the same.** ⚠ *They differ in two things only: how much floor, and how much we commit before we know.* **A reader who has that sentence can hold three options in their head; one who does not will compare them one pair at a time and lose.**',
  '⚠ **Put the options in columns and the dimensions in rows.** ⚠ **Floor, committed now, committed later, rent, projection** — **and a reader compares down a row in a second, which no amount of prose achieves.**',
  '⚠ **Include a *cost of being wrong* row.** ⚠ **It is the row that makes option B visible as a different kind of thing rather than a smaller A** — **and in most option sets it is the row that decides the matter.**',
  '⚠ **And include a *who could choose it* row, with a real position in it.** ⚠ *Anybody who thinks the northern market is larger than the count showed — which is the position Mr Ayoub took in February.* **Writing that row is what stops an option being a straw man, and here it changed the author\'s own view.**',
  '⚠ **Flag an untestable figure in the cell.** ⚠ *13.0 m, on an assumption nobody can test.* **A figure with an untestable assumption is more dangerous in a table than in a paragraph, because a table reads as arithmetic** — **so the warning goes where the figure is.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an options page for a decision at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________, PAGE ______________: THE OPTIONS. ______________, ______________.**   ⚠ **The three options differ in ______________ and ______________ only. Everything else about them is the same.**   **** | **A  ______________** | **B  ______________** | **C  ______________**   **______________** | **______________** | **______________** | **______________**   **______________** | **______________** | **______________** | ⚠ **______________, on an assumption ______________**   ⚠ **cost of being wrong** | **______________** | **______________** | **______________**   ⚠ **who could choose it** | **______________** | **______________** | ⚠ **______________, which is the position ______________ took**   ⚠ **What I have NOT done. I have not put the same course of action at three speeds. ______________ and ______________ differ in ______________, which is a difference in kind and not in degree.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A line saying what the options differ in', ''],
  ['Options in columns, dimensions in rows', ''],
  ['A *cost of being wrong* row', ''],
  ['A *who could choose it* row, naming a real position', ''],
  ['Any untestable figure flagged in its own cell', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *who could choose it* row. ⚠ The class says of each whether the position named is somebody\'s real one, and a cell saying *nobody* means the option should come out.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a set of options somebody put to you (**200 to 240 words**). Say what the options were, which two were the same, which one was there to lose, and how you could tell.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _could a sensible person choose this one?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the reader tell which option was wanted? ⚠ **Usually all three, and that is not the fault** — **the fault is in the one where the reader could also tell that the others were there to lose, and ask how that changed what they did with the paper.**'));
out.push(box('Homework', ['Write your final text. Then take one decision at your work and write the option you have been leaving out, with the position of somebody who could reasonably choose it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.3 =======================
out.push(pb());
out.push(h2('21.3  Pricing the option of changing nothing'));
out.push(p('**Function:** costing the status quo   ·   **Grammar:** _changing nothing costs X; it is not free_   ·   **Pronunciation:** a status quo priced without indignation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a proposal at your work that lost to nothing happening. ⚠ Then say whether anybody ever costed nothing happening.'));
out.push(p('**b**  Which is priced? _doing nothing is not an option · doing nothing means we trade from two sites for a seventh year, which at the counts Hala keeps is about 2.3 million a year of northern turnover we are not taking, and the Hama road unit goes to somebody else in about four months_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Sayegh say about the option of changing nothing?   **A** it should be left out   **B** it is the option that wins most proposals and the only one with no champion   **C** it is always wrong'));
out.push(p('**b**  Listen again. **1** What are the three costs he says it always has? **2** What does he say about the phrase *doing nothing is not an option*?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.5  "It wins most proposals and nobody writes it down"', [
  ['Bassel', 'I have left out doing nothing. The board has decided to reopen.'],
  ['Mr Sayegh', '⚠ **The board decided to reopen. It has not yet spent anything.** ⚠ **And between now and the first invoice, doing nothing requires no decision, no capital and no signature** — **which makes it the strongest option in the room and the only one with no champion.**'],
  ['Bassel', 'Nobody is proposing it.'],
  ['Mr Sayegh', '⚠ **Nobody ever proposes it. It arrives by itself, in June, as a postponement** — **and a postponement nobody has priced is indistinguishable from a decision nobody has taken.**'],
  ['Bassel', 'So what do I write?'],
  ['Mr Sayegh', '⚠ **Three costs, and it always has all three.** ⚠ **One: what you do not earn** — **a seventh year on two sites, about 2.3 million of northern turnover at Hala\'s counts.** ⚠ **Two: what you lose that was available** — **the Hama road unit goes to somebody else in about four months, and the next one may not be sixty square metres at 1.1.** ⚠ **Three: what gets harder** — **every month of delay is a month further from the February count, and in September somebody will say the count is stale, and they will be right.**'],
  ['Bassel', 'The third one is the worst.'],
  ['Mr Sayegh', '⚠ **The third one is the one that is never written, and it is how most postponements become permanent.** ⚠ **The evidence for the decision decays while nobody is deciding** — **and then the honest answer in September is *we would have to count again*, which is another two months.**'],
  ['Bassel', 'May I write *doing nothing is not an option*?'],
  ['Mr Sayegh', '⚠ **You may, and it is the single most useless sentence in business writing.** ⚠ **It tells a reader that you would rather not price it.** **Doing nothing is always an option. It is frequently the option that is taken. And it is the only one that happens without anybody choosing it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The three costs of changing nothing, and it always has all three**',
  table(['', 'The cost', 'Here'], [
    ['**1 what you do not earn**', '**the foregone thing, at a count somebody keeps**', '⚠ *a seventh year on two sites: about 2.3 m of northern turnover at Hala\'s counts*'],
    ['⚠ **2 what you lose that was available**', '⚠ **the thing that will not wait**', '⚠ *the Hama road unit goes in about four months, and the next may not be sixty square metres at 1.1*'],
    ['⚠ **3 what gets harder**', '⚠ **the decay** — **and this is the one nobody writes**', '⚠ *every month is a month further from the February count; in September somebody will say it is stale and be right*'],
  ], [2.2, 2.8, 4]),
  '⚠ **Changing nothing requires no decision, no capital and no signature**, ⚠ **which makes it the strongest option in any room and the only one with no champion.** **Nobody proposes it; it arrives by itself, as a postponement.**',
  '⚠ **And a postponement nobody has priced is indistinguishable from a decision nobody has taken.** ⚠ **That is the sentence to remember** — **because the firm will later believe it decided something, and the file will show that it did not.**',
  '⚠ **The third cost is the one that matters most and is written least.** ⚠ **The evidence for the decision decays while nobody is deciding** — **so the honest answer in September is *we would have to count again*, which is another two months, and that is how a postponement becomes permanent.**',
  '⚠ **Never write *doing nothing is not an option*.** ⚠ **It tells a reader that you would rather not price it.** **Doing nothing is always an option, it is frequently the option taken, and it is the only one that happens without anybody choosing it.**',
  '⚠ **Price it at a count somebody keeps rather than at your own estimate.** ⚠ *At Hala\'s counts* **is a source a reader can check.** **A foregone figure from the proposer is the least believed number on any page.**',
  '**Practise:** Take a proposal of yours. Write all three costs of changing nothing, and put a source on the first.',
  '**Useful phrases:**  no decision, no capital, no signature  ·  it arrives by itself  ·  a postponement nobody has priced  ·  what gets harder  ·  the evidence decays while nobody decides',
  '**Pronunciation – a status quo priced without indignation.** 🔊 **Track 21.6** Listen twice. ⚠ **The first says *doing nothing costs about 2.3 million a year of northern turnover* flatly.** ⚠ **The second leans on *costs*.** **Flat, it is a figure in a comparison; leaned on, it is an accusation of inertia, and the people who would have chosen it stop listening.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has left it out; B prices it.'));
out.push(dlg(null, [
  ['A', 'I have left out doing nothing, because __________.'],
  ['B', '⚠ **Does doing nothing need a decision, capital or a signature?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is the strongest option in the room. What do you not earn?**'],
  ['A', '__________.'],
  ['B', '⚠ **What do you lose that was available?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what gets harder? What decays while nobody decides?**'],
  ['A', '__________.'],
  ['B', '⚠ **Whose count is the first figure? Not yours, I hope.**'],
]));
out.push(table(['Role card 1 — it has been decided already', 'Role card 2 — doing nothing is not an option'], [[
  '⚠ **A says the board has decided, so the status quo is gone.** ⚠ **B distinguishes a decision from a commitment: nothing has been spent, and between now and the first invoice no signature is needed for nothing to happen.** ⚠ **B\'s point: a decision that has not been committed is a postponement waiting to happen** — **and in June it will arrive as a diary problem rather than as a reversal.**',
  '⚠ **A offers the sentence directly.** ⚠ **B says it is the most useless sentence in business writing and asks what it tells the reader.** ⚠ **B\'s point: it announces that the writer would rather not price it** — **and the reader, who is the person who will actually choose it, now knows the paper has a gap exactly where their own preference lives.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write all three costs for one proposal. ⚠ Then say what decays while nobody decides, because that is the cost that turns a postponement into a permanence.'));
out.push(PHRASE_CARD(['no decision, no signature', 'what you do not earn', 'what you lose that was available', 'what gets harder', 'whose count is that?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** proposals, yours or your firm\'s.'));
out.push(table(['The proposal', 'What you do not earn, and whose count', 'What you lose that was available', 'What decays'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.6, 2.4, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The proposal is _______. Changing nothing means we do not earn _______, on _______\'s count. We lose _______, which goes in about _______. And what decays is _______._'));
out.push(p('**Listener task:** count how many of the first figures came from somebody else\'s count rather than the writer\'s. ⚠ Then ask how many of the writers had ever costed the status quo before today, and expect none.'));
out.push(p('**Board clinic:** your teacher writes four status-quo paragraphs on the board — find the one that says *doing nothing is not an option*, and the one with no decay cost in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING, PAGE 2, SECTION 4: THE OPTION OF CHANGING NOTHING. B. Nassif, 14 May.**',
  '⚠ **I am setting this out as an option because it is one, and because it is the only one of the four that requires no decision from anybody.** **If the June board does not release capital, this is what happens, and it happens by itself.**',
  table(['', 'The cost', 'Where the figure comes from'], [
    ['**what we do not earn**', '**about 2.3 m of northern turnover in a seventh year on two sites**', '⚠ **Hala Mourad\'s walk-in counts, Mezzeh and Baghdad Street (which opened on 8 June), scaled to the February Homs count of 196 a week** — **her figures and not mine, and the scaling is at the appendix**'],
    ['**what we lose that was available**', '**the sixty square metres unit on the Hama road at 1.1 m**', '⚠ **the agent says four months and has two other viewers; the 1.9 m unit has been available for nine months and may still be there, and that is a real difference between the two**'],
    ['⚠ **what gets harder**', '⚠ **the count goes stale**', '⚠ **the February count was taken over four weeks. By September it is seven months old, and anybody who says it needs retaking will be right** — **which is a further two months and about 9,000.**'],
  ], [2, 2.8, 4.2]),
  '⚠ **The third row is the one I would want read twice.** **It is not an argument for haste.** ⚠ **It is the observation that the evidence for this decision decays while nobody is deciding**, **so the cost of waiting is not only the rent and the turnover** — **it is that in September the firm will honestly not know what it knew in February, and the right answer then will be to count again.**',
  '⚠ **One thing I am not going to claim.** **I am not going to say that changing nothing is the worst option.** ⚠ **For a firm that thinks the February count was a fluke, changing nothing is the correct option and the 2.3 million is imaginary** — **and the whole of my case rests on the count being real, which is also what option B is designed to test.**',
  '⚠ **And one sentence I have been asked to remove and have kept.** **Nothing in this section is an argument against caution.** ⚠ **Option B commits 640,000 and tests the count in eight weeks of trading, which is caution with a date on it** — **and the difference between that and changing nothing is not courage, it is that one of them produces evidence and the other produces a stale count.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Whose figures are used for the first cost, and why does the writer say so?'));
out.push(item('2', 'What does the third row say, and what does the writer say it is not?'));
out.push(item('3', 'What does the writer refuse to claim, and whose position does he describe?'));
out.push(box('Writer\'s box', [
  '**The changing-nothing section — five parts:** ⚠ **a line saying it needs no decision from anybody** → ⚠ **three costs, each with its source** → ⚠ **the decay cost, read twice and marked as not an argument for haste** → ⚠ **a refusal to call it the worst option, with the position from which it is right** → ⚠ **and the distinction between caution and changing nothing.**',
  '⚠ **Open with the thing that makes it strong.** ⚠ *It requires no decision from anybody; if the board does not release capital, this is what happens, and it happens by itself.* **Two sentences, and the reader now sees why it needs pricing at all.**',
  '⚠ **Source every figure, and prefer somebody else\'s count to your own.** ⚠ *Her figures and not mine, and the scaling is at the appendix.* **A foregone figure produced by the proposer is the least believed number on any page** — **and one produced by a colleague who is not arguing for anything is the most.**',
  '⚠ **Write the decay cost and then say what it is not.** ⚠ *It is not an argument for haste. It is the observation that the evidence decays while nobody decides.* **Without the second sentence the row reads as pressure, and a reader who feels pressed discounts the figure.**',
  '⚠ **Refuse to call it the worst option, and name the position from which it is right.** ⚠ *For a firm that thinks the February count was a fluke, changing nothing is correct and the 2.3 million is imaginary.* **It is the most credible sentence in the section**, **and it concedes that the author\'s whole case rests on one number.**',
  '⚠ **And separate caution from inertia, because they get conflated by both sides.** ⚠ *The difference is not courage; it is that one of them produces evidence and the other produces a stale count.* **That sentence protects option B from being read as the brave choice, which is the fastest way to lose it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a changing-nothing section for a proposal of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, SECTION ______________: THE OPTION OF CHANGING NOTHING. ______________, ______________.**   ⚠ **I am setting this out as an option because it is one, and because it requires no decision from anybody. If ______________ does not ______________, this is what happens, and it happens by itself.**   **** | **The cost** | ⚠ **Where the figure comes from**   **what we do not earn** | **______________** | ⚠ **______________\'s figures and not mine**   **what we lose that was available** | **______________** | ⚠ **______________**   ⚠ **what gets harder** | ⚠ **______________** | ⚠ **______________**   ⚠ **The third row is not an argument for haste. It is the observation that ______________.**   ⚠ **One thing I am not going to claim. For somebody who thinks ______________, changing nothing is the correct option** — **and my whole case rests on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A line saying it needs no decision from anybody', ''],
  ['All three costs, each with a source', ''],
  ['A decay cost, marked as not an argument for haste', ''],
  ['The position from which changing nothing is right', ''],
  ['Nothing anywhere saying it is not an option', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their decay cost. ⚠ The class says of each what will have gone stale, and by when somebody would be right to say so.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a proposal at your work that lost to nothing happening (**200 to 240 words**). Say what was proposed, what happened instead, whether anybody costed it, and what had decayed by the time anybody looked again.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the status quo ever priced?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the proposal lose to a postponement rather than to a rejection? ⚠ **Usually all three** — **and in none of them was the postponement minuted as a decision, which is the whole finding of the cycle.**'));
out.push(box('Homework', ['Write your final text. Then take one pending proposal at your work and write what decays while nobody decides, with the date by which somebody would be right to call it stale (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.4 =======================
out.push(pb());
out.push(h2('21.4  What has to be true'));
out.push(p('**Function:** naming your assumptions and sorting them   ·   **Grammar:** _this works if X; X can be tested by Y; Z cannot be tested at all_   ·   **Pronunciation:** an assumption named as an assumption'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a plan at your work that depended on something nobody checked. ⚠ Then say whether it was checkable.'));
out.push(p('**b**  Which is a useful assumption list? _assuming conditions remain stable · this works if the 196 a week holds, which eight weeks of trading will show; if the fit-out is 640,000, which the quotations fix; and if the northern wholesale trade comes back, which nobody in this firm can test and which I have assumed at nil_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour make Bassel do with his assumptions?   **A** remove them   **B** sort them into testable and untestable, and assume the untestable ones at nil   **C** prove them'));
out.push(p('**b**  Listen again. **1** What does she say about assuming an untestable thing at nil? **2** What does she say an assumption list is really for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.7  "Which of these can anybody check?"', [
  ['Nour', 'You have five assumptions. Which of them can anybody check?'],
  ['Bassel', 'The fit-out cost. We have three quotations.'],
  ['Nour', '⚠ **So that is not an assumption, it is a figure with a range.** ⚠ **Move it.** **What else?**'],
  ['Bassel', 'The 196 a week. Eight weeks of trading would show it.'],
  ['Nour', '⚠ **Testable, and your option B is the test.** ⚠ **Say that explicitly, because it is the strongest thing in your paper and it is currently implicit.**'],
  ['Bassel', 'And the northern wholesale trade coming back. Nobody can check that.'],
  ['Nour', '⚠ **Then assume it at nil and say you have.**'],
  ['Bassel', 'That takes two million out of my projection.'],
  ['Nour', '⚠ **It does, and the projection that remains is one somebody will act on.** ⚠ **A nine-million projection with two million of untestable upside in it is a seven-million projection that a reader will discount to five, because they cannot tell which part is which** — **so you lose four by keeping two.**'],
  ['Bassel', 'And if the wholesale trade does come back?'],
  ['Nour', '⚠ **Then you have a surprise on the good side, which is the only kind anybody forgives.** ⚠ **And you write it in as a note: *not in the projection; if it returns, add about 2 m*.** **The reader keeps the information and the arithmetic stays clean.**'],
  ['Bassel', 'What is the list actually for, then?'],
  ['Nour', '⚠ **Two things, and the second matters more.** ⚠ **It tells a reader which parts of your case are claims and which are arithmetic.** ⚠ **And in eighteen months, when something has gone wrong, it tells everybody which assumption failed** — **and whether anybody could have known.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Sorting what has to be true**',
  table(['', 'Kind', 'What to do with it'], [
    ['**the fit-out at 640,000**', '⚠ **not an assumption** — **a figure with a range, fixed by three quotations**', '⚠ **move it out of the list and give it its range**'],
    ['**the 196 a week**', '⚠ **testable**', '⚠ **name the test and the date** — *eight weeks of trading, which is what option B is for* — **and say so explicitly**'],
    ['⚠ **the northern wholesale trade**', '⚠ **untestable by anybody in this firm**', '⚠ **assume it at NIL, say you have, and note the upside** — *not in the projection; if it returns, add about 2 m*'],
  ], [2.2, 3.2, 3.6]),
  '⚠ **Three kinds, and most lists mix all three.** ⚠ **A figure with a source is not an assumption; a testable claim needs its test named; and an untestable claim is assumed at nil.**',
  '⚠ **Assume the untestable at nil, and say that you have.** ⚠ **A projection with untestable upside inside it gets discounted further than the upside is worth**, **because a reader cannot tell which part is which** — ***so you lose four by keeping two.***',
  '⚠ **Keep the upside as a note outside the arithmetic.** ⚠ *Not in the projection; if it returns, add about 2 m.* **The reader keeps the information, the arithmetic stays clean, and a surprise on the good side is the only kind anybody forgives.**',
  '⚠ **Name the test and the date for anything testable.** ⚠ **And where one of your options IS the test, say so** — **it is usually the strongest thing in a proposal and it is almost always left implicit.**',
  '⚠ **And the second purpose of the list is the one that matters in eighteen months.** ⚠ **When something has gone wrong it tells everybody which assumption failed and whether anybody could have known** — **which is the difference between a mistake and a gamble, and nobody can reconstruct it afterwards without the list.**',
  '**Practise:** Take a plan of yours. List what has to be true, then sort the list into three kinds and act on each.',
  '**Useful phrases:**  which of these can anybody check?  ·  that is a figure, not an assumption  ·  name the test and the date  ·  assumed at nil, and I say so  ·  which assumption failed, and could anybody have known',
  '**Pronunciation – an assumption named as one.** 🔊 **Track 21.8** Listen twice. ⚠ **The first says *I have assumed the wholesale trade at nil* evenly, as a method.** ⚠ **The second drops on *at nil*.** **Even, it is prudence; dropped, it sounds like a disappointment, and the reader starts wondering what else has been written down reluctantly.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a list; B sorts it.'));
out.push(dlg(null, [
  ['A', 'This works if __________, if __________, and if __________.'],
  ['B', '⚠ **Which of those can anybody check?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then that is a figure with a range, not an assumption. What is the range?**'],
  ['A', '__________.'],
  ['B', '⚠ **And which one can be tested? By what, and by when?**'],
  ['A', '__________.'],
  ['B', '⚠ **And the one nobody can check?**'],
  ['A', '__________.'],
  ['B', '⚠ **Assume it at nil, say so, and put the upside in a note.**'],
]));
out.push(table(['Role card 1 — assuming conditions remain stable', 'Role card 2 — I cannot take 2 million out'], [[
  '⚠ **A offers a single sentence covering everything.** ⚠ **B asks what specifically has to be true, and gets three things on the third attempt.** ⚠ **B\'s point: *conditions remain stable* cannot fail in a way anybody can identify** — **so in eighteen months, when something has gone wrong, the list will not say which assumption failed, which is half of what it was for.**',
  '⚠ **A refuses to assume the untestable upside at nil, because it is probably real.** ⚠ **B asks what a reader does with a projection containing an amount they cannot separate out.** ⚠ **B\'s point: they discount the whole thing further than the upside is worth** — **four lost to keep two** — **and the upside survives as a note, where it informs without contaminating the arithmetic.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** sort one list into the three kinds. ⚠ Then say which option in the proposal is the test for the testable one, and if none is, say that too.'));
out.push(PHRASE_CARD(['who can check it?', 'a figure, not an assumption', 'the test, and the date', 'assumed at nil', 'the upside, in a note']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** plan of yours and sort what has to be true.'));
out.push(table(['What has to be true', 'Figure, testable, or untestable?', 'The test and its date, or the range', 'What you have assumed'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2.4, 2, 2.4, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _This works if _______, which is a _______; if _______, which _______ will test by _______; and if _______, which nobody can check and which I have assumed at nil, with a note saying _______._'));
out.push(p('**Listener task:** count how many lists contained something that was not an assumption at all. ⚠ Then ask how many contained something untestable that had been quietly included in a figure.'));
out.push(p('**Board clinic:** your teacher writes four assumption lists on the board — find the one that says *conditions remain stable*, and the one with untestable upside inside the arithmetic. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING, APPENDIX A: WHAT HAS TO BE TRUE. B. Nassif, 14 May. Sorted into three kinds, because they are not the same kind of thing.**',
  '⚠ **Not assumptions at all — figures with ranges.**',
  '**The fit-out is 640,000, from three quotations at 598, 640 and 711. I have used the middle one. The range matters: at 711 the June commitment is 711 and option B still works; at 598 we are 42,000 better off and nothing else changes.**',
  '**The rent is 1.1 m, fixed by the draft lease for three years.**',
  '⚠ **Testable, with the test and the date.**',
  '**That the February count of 196 a week holds.** ⚠ **Test: eight weeks of trading from 1 June, counted weekly by the counter supervisor on Hala Mourad\'s method and not on a new one.** **Decision point: week eight, which is 27 July.** ⚠ **This is what option B is for, and I should have said so on page 2 and did not.**',
  '**That the Hama road unit can be fitted out in four weeks.** **Test: the contractor\'s programme, which I have, and the first two weeks of it, which will show whether it is real.**',
  '⚠ **Untestable by anybody in this firm, and therefore assumed at nil.**',
  '**That the northern wholesale trade returns.** ⚠ **Not in the projection. If it returns at the 2019 level, add about 2 m to the first full year.** **I have put nothing in, and I want it noted that I wanted to.**',
  '**That the second chemist on the Hama road closes, as the agent believes.** ⚠ **Not in the projection. If it closes, add about 600,000.** **The agent has an interest in telling me this and I have treated it as worth nothing.**',
  '⚠ **And one note on what this appendix is for, which is not persuasion.** **It is here so that in eighteen months, if the site has not worked, this firm can say which of these failed and whether anybody could have known.** ⚠ **If the count turns out to be 140 a week, that is a testable assumption that failed and the test was in the plan. If the wholesale trade returns and we have taken sixty square metres when we could have taken a hundred and twenty, that is an untestable one and nobody was negligent** — **and the difference between those two sentences is the only thing this page exists to make possible.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How does the writer treat the three fit-out quotations, and what does he say about the range?'));
out.push(item('2', 'What two things are assumed at nil, and what does he say about the agent?'));
out.push(item('3', 'What does the writer say the appendix is for, and what two sentences does it make possible?'));
out.push(box('Writer\'s box', [
  '**The assumptions appendix — five parts:** ⚠ **three headings: figures with ranges · testable, with the test and the date · untestable, assumed at nil** → ⚠ **a range that shows what changes and what does not** → ⚠ **a decision point with a date on every test** → ⚠ **an upside noted outside the arithmetic, with its source\'s interest named** → ⚠ **and a line saying the page is not for persuasion.**',
  '⚠ **Use three headings and sort ruthlessly.** ⚠ **Most of what a writer calls an assumption is a figure with a range**, **and separating those out shortens the real list to two or three things, which is the point.**',
  '⚠ **Give a range and then say what it changes.** ⚠ *At 711 the June commitment is 711 and option B still works; at 598 we are 42,000 better off and nothing else changes.* **A range without that sentence is a hedge; with it, it is a demonstration that the plan survives its own uncertainty.**',
  '⚠ **Put a decision point and a date on every test.** ⚠ *Week eight, which is 27 July.* **A test with no date is an intention** — **and where one of your options IS the test, say so, in those words.**',
  '⚠ **Note an upside outside the arithmetic, and name the interest of whoever told you.** ⚠ *The agent has an interest in telling me this and I have treated it as worth nothing.* **One clause, and it makes every other figure on the page more credible.**',
  '⚠ **And say what the page is for.** ⚠ *So that in eighteen months this firm can say which of these failed and whether anybody could have known.* **That is the difference between a mistake and a gamble**, **and it cannot be reconstructed afterwards by anybody without this page.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an assumptions appendix for a plan of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, APPENDIX ______________: WHAT HAS TO BE TRUE. ______________, ______________.**   ⚠ **Not assumptions at all — figures with ranges.** **______________ is ______________, from ______________. The range matters: at ______________, ______________; at ______________, ______________ and nothing else changes.**   ⚠ **Testable, with the test and the date.** **That ______________.** ⚠ **Test: ______________. Decision point: ______________.**   ⚠ **Untestable by anybody here, and therefore assumed at nil.** **That ______________.** ⚠ **Not in the projection. If it happens, add about ______________.** ⚠ **______________ told me this and has an interest in telling me, and I have treated it as worth nothing.**   ⚠ **What this appendix is for, which is not persuasion. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings, and nothing in the wrong one', ''],
  ['A range with what it changes and what it does not', ''],
  ['A test and a dated decision point on every testable item', ''],
  ['Untestable upside outside the arithmetic, with the teller\'s interest', ''],
  ['A line saying the page is not for persuasion', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their untestable items. ⚠ The class says of each whether it has been assumed at nil, and whether the upside note names whose interest it serves.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an assumption at your work that failed (**200 to 240 words**). Say what it was, whether it was testable, whether anybody had written it down, and whether the failure was a mistake or a gamble.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was this testable, and was it tested?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the failed assumption been written down anywhere beforehand? ⚠ **Usually none** — **and that is why nobody could afterwards say whether it was a mistake or a gamble, which is the question every post-mortem actually turns on.**'));
out.push(box('Homework', ['Write your final text. Then take one plan of yours and sort what has to be true into the three kinds, with a dated test on anything testable (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.5 =======================
out.push(pb());
out.push(h2('21.5  The option you recommend against, priced'));
out.push(p('**Function:** making the other case properly   ·   **Grammar:** _I recommend against X; X is right if Y; Y is not true, and here is how I know_   ·   **Pronunciation:** an opponent\'s case made without irony'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an option you have argued against at work. ⚠ Then say the best thing about it, in its own terms, and see whether you can.'));
out.push(p('**b**  Which is fair? _C is too expensive and the floor is more than we need · C gives us twice the floor for 300,000 a year more, which is 1.4 million of turnover at our margin; it is right if the northern market is larger than the count showed, and that is the position Mr Ayoub took in February with reasons_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say about Bassel\'s treatment of option C?   **A** it is fair   **B** it is a caricature, and the caricature is what will lose him the argument   **C** it should be removed'));
out.push(p('**b**  Listen again. **1** What three things does she say the rejected option needs? **2** Why does she say a caricature is dangerous to the person who writes it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.9  "Make it properly or take it out"', [
  ['Nadia', 'Option C. Three lines, and the third says the floor is more than we need.'],
  ['Bassel', 'It is.'],
  ['Nadia', '⚠ **Read it as Mr Ayoub will.** ⚠ **He asked for that option in February and gave reasons, and your three lines do not contain any of them.**'],
  ['Bassel', 'I disagree with his reasons.'],
  ['Nadia', '⚠ **Then disagree with them, which requires stating them.** ⚠ **What you have written is a caricature, and a caricature is dangerous to the person who writes it** — **because the moment somebody states the real case in the meeting, your paper looks as though it had not understood it.**'],
  ['Bassel', 'What does the option need?'],
  ['Nadia', '⚠ **Three things.** ⚠ **One: the best thing about it, in its own terms, with a figure** — **twice the floor for 300,000 a year more, which is 1.4 million of turnover at our margin.** ⚠ **Two: the condition under which it is right** — **if the northern market is larger than the count showed.** ⚠ **Three: your reason for thinking that condition is not met, and how a reader could check.**'],
  ['Bassel', 'And if I write all that, somebody may choose it.'],
  ['Nadia', '⚠ **Somebody may. That is what putting an option in a paper means.**'],
  ['Bassel', 'Then I have written a paper that can defeat me.'],
  ['Nadia', '⚠ **You have written a paper that can be acted on, which is the only kind worth writing.** ⚠ **And here is the part you have not seen: if the board chooses C on the strength of your own fair statement of it, you have lost an argument and kept everything else** — **your figures, your judgement, and the next paper you write.**'],
  ['Bassel', 'And if I caricature it and win?'],
  ['Nadia', '⚠ **Then you have won once, and the next time you argue against something, Mr Sayegh will look for what you have left out** — ⚠ **and he will be right to, and you will have spent something you cannot get back for a decision that went your way anyway.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The option you recommend against — three parts**',
  table(['', 'The part', 'Here'], [
    ['**1 the best of it, in its own terms**', '⚠ **with a figure, and not your figure for it**', '⚠ *twice the floor for 300,000 a year more, which is 1.4 m of turnover at our margin*'],
    ['⚠ **2 the condition**', '⚠ **under which it is right** — **and name whose position that is**', '⚠ *if the northern market is larger than the count showed, which is the position Mr Ayoub took in February*'],
    ['⚠ **3 your reason, and the check**', '⚠ **why you think the condition is not met, and how a reader could test it**', '⚠ *the count was taken over four weeks in the month the chemist reopened; the walk-in figures for March would show it either way*'],
  ], [2.4, 3.2, 3.4]),
  '⚠ **A caricature is dangerous to the person who writes it.** ⚠ **The moment somebody states the real case in the meeting, your paper looks as though it had not understood it** — **and everything else in the paper is then read in that light.**',
  '⚠ **Give the rejected option a figure in its own terms, not your discount of it.** ⚠ *1.4 m of turnover at our margin.* **A writer who can state the other case numerically has demonstrated that they understood it, which is most of what a reader is assessing.**',
  '⚠ **Name the condition under which it is right, and whose position that is.** ⚠ **An option with no condition is a straw man; one with a condition and a name attached is an argument somebody is actually having** — **and 18.5 taught the same thing about rejected options in a file.**',
  '⚠ **And give your reason WITH a check.** ⚠ *The March walk-in figures would show it either way.* **A reason with no check is an opinion; a reason with a check is an invitation** — **and a reader who can test your objection usually accepts it.**',
  '⚠ **The hardest part of this cycle is accepting what it costs.** ⚠ **If the board chooses the option on the strength of your own fair statement of it, you have lost an argument and kept everything else** — **your figures, your judgement, and the next paper.** ⚠ **If you caricature it and win, you have won once and spent something you cannot get back.**',
  '**Practise:** Take something you argue against. Write the best of it with a figure, the condition, and your reason with a check.',
  '**Useful phrases:**  read it as they will  ·  in its own terms, with a figure  ·  it is right if  ·  which is the position X took  ·  here is how a reader could check',
  '**Pronunciation – the other case, without irony.** 🔊 **Track 21.10** Listen twice. ⚠ **The first says *twice the floor for 300,000 a year more* in the same voice as the writer\'s own option.** ⚠ **The second puts a faint lift on *twice*.** **Level, it is the other case; lifted, it is the other case being quoted, and a reader hears the quotation marks.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a caricature; B rebuilds the option.'));
out.push(dlg(null, [
  ['A', 'The other option is wrong because __________.'],
  ['B', '⚠ **What is the best thing about it, in its own terms? Give me a figure.**'],
  ['A', '__________.'],
  ['B', '⚠ **Under what condition would it be right?**'],
  ['A', '__________.'],
  ['B', '⚠ **Whose position is that? Name somebody.**'],
  ['A', '__________.'],
  ['B', '⚠ **And why do you think the condition is not met? How could I check?**'],
  ['A', '__________.'],
  ['B', '⚠ **Now: if the board chooses it on that, what have you lost?**'],
]));
out.push(table(['Role card 1 — a fair version might win', 'Role card 2 — I cannot find anything good about it'], [[
  '⚠ **A resists stating the other case properly because it might prevail.** ⚠ **B agrees that it might and asks what is lost in each of the two cases.** ⚠ **B\'s point: losing an argument on a fair statement costs one decision; winning on a caricature costs the reader\'s trust in every later paper** — **and the second is not recoverable, while the first is a Tuesday.**',
  '⚠ **A says honestly that the option has nothing to recommend it.** ⚠ **B asks who asked for it and why, and A has to reconstruct a real person\'s reasons.** ⚠ **B\'s point: an option that genuinely nobody could choose should be out of the paper altogether** — **so either it has something, in which case write it, or it has nothing, in which case it is padding and should go.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three parts for one option you argue against. ⚠ Then say what you would lose if the reader chose it, and what you would lose by caricaturing it.'));
out.push(PHRASE_CARD(['the best of it, with a figure', 'right if…', 'whose position is that?', 'how could I check?', 'what would you lose either way?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** options you argue against.'));
out.push(table(['The option', 'The best of it, with a figure', 'Right if — and whose position', 'Your reason, and the check'], [['', '', '', ''], ['', '', '', '']], [1.6, 2.6, 2.6, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I recommend against _______. The best thing about it is _______, which is worth _______. It is right if _______, which is _______\'s position. I think the condition is not met because _______, and a reader could check that by _______._'));
out.push(p('**Listener task:** count how many could state the other case with a figure. ⚠ Then ask how many found that writing it changed their own view at all, and expect at least one.'));
out.push(p('**Board clinic:** your teacher writes four rejected-option paragraphs on the board — find the caricature, and the one whose reason has no check attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING, PAGE 2, SECTION 5: OPTION C, AGAINST WHICH I RECOMMEND. B. Nassif, 14 May. Second draft; the first was three lines and Nadia was right about it.**',
  '⚠ **The best of option C, in its own terms.** **A hundred and twenty square metres instead of sixty, for 300,000 a year more in rent.** ⚠ **At our margin that floor supports about 1.4 million more of annual turnover if it is filled, and the fit-out per square metre is lower because the unit was last fitted as a wholesaler and the shelving stays.** **The unit has also been empty for nine months, which means the landlord is likelier to give a rent-free period, and the agent has hinted at three months.**',
  '⚠ **The condition under which option C is right, and whose position that is.** **Option C is right if the northern market is materially larger than the February count showed.** ⚠ **That is the position Mr Ayoub took on 12 February, and his reasons were two: that the count was taken in a month when the competing chemist had just reopened after a refit and was advertising, and that a sixty-square-metre unit cannot hold the wholesale lines at all, so a count of walk-in trade measures the wrong thing for half the opportunity.** **Both of those are real points and the second is better than the first.**',
  '⚠ **Why I think the condition is not met, and how a reader can check.** **On the chemist: Hala\'s counts at Mezzeh show a 4 per cent dip in the weeks after any competitor advertises, not the 20 per cent that would be needed to move 196 to the 240 that option C requires.** ⚠ **A reader can check that in her weekly sheets for March, which are in the appendix.** **On the wholesale lines: I cannot answer this, and I have assumed the wholesale trade at nil in all three options, which means option C\'s 13 million contains about 2 million I have not credited to the others.** ⚠ **If a reader credits it, option C\'s projection becomes the best on the page.**',
  '⚠ **What that last sentence means, and I am writing it rather than hoping nobody notices.** **The arithmetic of this paper turns on whether the wholesale trade is worth nothing, and nobody in this firm can establish that it is.** ⚠ **I recommend option B. I recommend it knowing that a reader who takes the wholesale trade seriously should choose option C, and that such a reader would not be making a mistake** — **they would be disagreeing with me about one number that neither of us can check.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What three things does the writer say are good about option C, in its own terms?'));
out.push(item('2', 'What are Mr Ayoub\'s two reasons, and which does the writer say is better?'));
out.push(item('3', 'What does the last paragraph concede, and what does the writer say about a reader who chooses C?'));
out.push(box('Writer\'s box', [
  '**The recommend-against section — five parts:** ⚠ **the best of it in its own terms, with figures** → ⚠ **the condition and whose position it is, with their reasons** → ⚠ **your reason, with a check a reader can run** → ⚠ **any part you cannot answer, said plainly** → ⚠ **and what a reader who disagrees with you would be doing.**',
  '⚠ **Give the other case its own best points, including ones you were not asked about.** ⚠ *The shelving stays; the landlord is likelier to give a rent-free period.* **A writer who finds a point for the other side that nobody had raised has established that they are not managing the comparison.**',
  '⚠ **State the opposing reasons and rank them.** ⚠ *Both are real points and the second is better than the first.* **Ranking them proves you have weighed them** — **and conceding that one is strong costs almost nothing and buys the reader\'s attention for your answer to it.**',
  '⚠ **Answer with a check, and use somebody else\'s figures.** ⚠ *A 4 per cent dip, not the 20 per cent required; a reader can check Hala\'s March sheets, which are in the appendix.* **A reason with a runnable check is accepted far more often than one without.**',
  '⚠ **And say plainly what you cannot answer.** ⚠ *On the wholesale lines, I cannot answer this.* **Then follow the consequence through honestly:** *if a reader credits it, option C\'s projection becomes the best on the page.*',
  '⚠ **Close by describing the reader who disagrees with you.** ⚠ *Such a reader would not be making a mistake; they would be disagreeing with me about one number that neither of us can check.* **That sentence is the most expensive one in the paper and the only one that makes the recommendation worth having** — **because it locates the whole disagreement in one place where everybody can see it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a recommend-against section for a proposal of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, SECTION ______________: OPTION ______________, AGAINST WHICH I RECOMMEND. ______________, ______________.**   ⚠ **The best of it, in its own terms. ______________, which is worth about ______________.** ⚠ **And ______________, which nobody has raised.**   ⚠ **The condition under which it is right, and whose position that is. It is right if ______________. That is the position ______________ took on ______________, and the reasons were ______________ and ______________.** ⚠ **Both are real and the ______________ is better.**   ⚠ **Why I think the condition is not met, and how a reader can check. ______________. A reader can check that in ______________.**   ⚠ **What I cannot answer. ______________.** ⚠ **If a reader credits it, ______________.**   ⚠ **I recommend ______________, knowing that a reader who ______________ should choose ______________, and that such a reader would not be making a mistake.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The best of it, with a figure in its own terms', ''],
  ['The condition, with a named position and its reasons', ''],
  ['The reasons ranked, and one conceded as strong', ''],
  ['A check a reader could actually run', ''],
  ['What the writer cannot answer, and what follows from it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *the best of it* paragraph. ⚠ The class says of each whether it contains a point the writer was not asked for, which is the test of whether the other case has really been made.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a case you argued against (**200 to 240 words**). State the other case as well as you can, with figures, name the condition under which it is right, and say what you would have lost if it had won.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would the other side recognise their own case here?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the other side recognise their own case? ⚠ **Usually one of three** — **and ask the other two what the person who held that view actually said, because in most cases nobody ever asked them.**'));
out.push(box('Homework', ['Write your final text. Then take one thing you argue against and write its best point with a figure, plus a check a reader could run on your objection (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.6 =======================
out.push(pb());
out.push(h2('21.6  The ask'));
out.push(p('**Function:** stating what you want decided   ·   **Grammar:** _I ask the board to X, by Y; if it does not, Z_   ·   **Pronunciation:** an ask that is not a hope'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the last thing you asked somebody senior to decide. ⚠ Then say whether you named a date, and what happened.'));
out.push(p('**b**  Which is an ask? _I would be grateful for the board\'s guidance on the way forward · I ask the board on 28 May to release 640,000 for commitment in June, and to note that the remaining 460,000 returns to it at week eight on 27 July_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say is wrong with Bassel\'s last paragraph?   **A** nothing   **B** it asks for guidance, which nobody can give and nobody can be held to   **C** it is too direct'));
out.push(p('**b**  Listen again. **1** What are the four parts of an ask? **2** What does she say to do about the part of the paper that is NOT an ask?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.11  "Guidance is not a decision"', [
  ['Nour', 'Your last paragraph asks for the board\'s guidance on the way forward.'],
  ['Bassel', 'That is the polite form.'],
  ['Nour', '⚠ **It is the form that produces nothing.** ⚠ **Nobody can give guidance and nobody can be held to it** — **and in four weeks neither you nor they will be able to say what was decided on 28 May.**'],
  ['Bassel', 'So what are the parts?'],
  ['Nour', '⚠ **Four.** ⚠ **What you want decided, as a verb with an object: release 640,000. Who decides it: the board, not *the firm*. When: on 28 May, at that meeting and not *in due course*. And what happens if they do not decide it.**'],
  ['Bassel', 'The fourth sounds like a threat.'],
  ['Nour', '⚠ **It is a timetable, and it only sounds like a threat if you write it like one.** ⚠ *If capital is not released on 28 May, the fit-out cannot start before July and the eight-week test ends in September rather than July.* **That is not pressure, it is arithmetic, and the board is entitled to it before deciding rather than after.**'],
  ['Bassel', 'And there is a part of the paper that is not asking for anything.'],
  ['Nour', '⚠ **Then say so, in its own line.** ⚠ *The wholesale question is not a decision for 28 May; it is noted so that nobody later thinks it was overlooked.* **An unmarked non-ask gets treated as an ask by somebody, and then refused, and then you have lost a point you were not making.**'],
  ['Bassel', 'How long should the whole thing be?'],
  ['Nour', '⚠ **Four lines. And it goes at the top as well as the bottom** — **the same four lines, word for word, not a shorter version at the top.**'],
  ['Bassel', 'Why the same words?'],
  ['Nour', '⚠ **Because somebody will read one of the two and quote it.** ⚠ **If the two versions differ by a word, that word is what the meeting will be about** — **which is Unit 6 at B2 and the only lesson in this course that has cost this firm money twice.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The ask — four parts, four lines, twice**',
  table(['', 'The part', 'Here'], [
    ['**1 what**', '⚠ **a verb with an object** — **not a subject**', '⚠ *release 640,000 for commitment in June*'],
    ['**2 who**', '**a body or a person, not *the firm***', '⚠ *the board*'],
    ['**3 when**', '**a date, not *in due course***', '⚠ *on 28 May, at that meeting*'],
    ['⚠ **4 if not**', '⚠ **the arithmetic of delay, not a threat**', '⚠ *the fit-out cannot start before July and the eight-week test ends in September*'],
  ], [1.4, 3.4, 4.2]),
  '⚠ **Guidance is not a decision.** ⚠ **Nobody can give it and nobody can be held to it** — **and four weeks later neither party can say what was decided, which is the commonest way a good paper produces nothing.**',
  '⚠ **The fourth part is a timetable and not a threat, and it only reads as one if you write it as one.** ⚠ **Give the consequence in dates and the board is entitled to it before deciding rather than after** — **and a board that decides without it will blame the writer in September.**',
  '⚠ **Mark anything in the paper that is NOT an ask.** ⚠ *The wholesale question is not a decision for 28 May; it is noted so that nobody later thinks it was overlooked.* **An unmarked non-ask gets treated as an ask, refused, and counted against you** — **and you have lost a point you were not making.**',
  '⚠ **Four lines, at the top and at the bottom, in the SAME WORDS.** ⚠ **Not a shorter version at the top** — **the same four lines, word for word, because somebody will read one of the two and quote it.**',
  '⚠ **And if the two versions differ by a word, that word is what the meeting will be about.** ⚠ **This is Unit 6 at B2 and it is the only lesson in this course that has cost this firm money twice** — **once in the three letters of September and once in the half-quoted audit sentence.**',
  '**Practise:** Take a paper you owe. Write the ask in four parts and four lines. Then write it again at the top, identically.',
  '**Useful phrases:**  guidance is not a decision  ·  I ask the board to  ·  on 28 May, at that meeting  ·  if it is not decided then  ·  this is not a decision for 28 May',
  '**Pronunciation – an ask that is not a hope.** 🔊 **Track 21.12** Listen twice. ⚠ **The first says *I ask the board on 28 May to release 640,000* with the voice falling at *640,000*.** ⚠ **The second trails upward.** **Falling, it is an ask; trailing, it is a hope, and a reader who hears a hope answers with encouragement.** Say it four times, falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers an ask; B tests the four parts.'));
out.push(dlg(null, [
  ['A', 'I would ask for __________.'],
  ['B', '⚠ **What verb? What do you want somebody to DO?**'],
  ['A', '__________.'],
  ['B', '⚠ **Who does it? Not *the firm*.**'],
  ['A', '__________.'],
  ['B', '⚠ **When? A date.**'],
  ['A', '__________.'],
  ['B', '⚠ **And if they do not decide it then, what happens? In dates.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now is there anything in your paper that is NOT an ask? Mark it.**'],
]));
out.push(table(['Role card 1 — guidance is the polite form', 'Role card 2 — the consequence sounds like a threat'], [[
  '⚠ **A defends *I would be grateful for the board\'s guidance* as courtesy.** ⚠ **B asks what the minute will say in four weeks.** ⚠ **B\'s point: nobody can give guidance and nobody can be held to it, so the paper produces a conversation and no decision** — **and politeness that costs a decision is not politeness, it is a dropped ask.**',
  '⚠ **A will not write the consequence of delay, for fear of appearing to pressure the board.** ⚠ **B rewrites it in dates and asks which version is pressure.** ⚠ **B\'s point: a consequence given as arithmetic is information the board needs BEFORE deciding** — **and a board that decides without it is the board that will ask in September why nobody mentioned the timetable.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write one ask in four parts. ⚠ Then say why the top and bottom versions must be identical, and what happens if they differ by a word.'));
out.push(PHRASE_CARD(['what verb?', 'who, not the firm', 'what date?', 'if not, then what?', 'the same words, top and bottom']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** asks you owe somebody.'));
out.push(table(['What — a verb and an object', 'Who decides', 'By when', 'If not, then — in dates'], [['', '', '', ''], ['', '', '', '']], [2.6, 1.8, 1.6, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I ask _______ to _______, on _______. If it is not decided then, _______. And the part of my paper that is not an ask is _______._'));
out.push(p('**Listener task:** count how many asks had a date. ⚠ Then ask how many had a consequence in dates, and expect very few.'));
out.push(p('**Board clinic:** your teacher writes four asks on the board — find the one asking for guidance, and the one whose consequence is written as a threat. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two versions, and answer the questions.'));
out.push(box(null, [
  '**HOMS REOPENING: THE ASK. B. Nassif, 14 May. These four lines appear at the top of page 1 and at the foot of page 2, in the same words.**',
  '⚠ **I ask the board, on 28 May, to release 640,000 for commitment in June, being the fit-out at the middle quotation, the opening stock and eight weeks of staffing.**',
  '⚠ **I ask the board to note that the remaining 460,000 is not sought now and returns to it at week eight, on 27 July, with eight weeks of counted trading attached.**',
  '⚠ **If capital is not released on 28 May, the fit-out cannot start before July, the eight-week test ends in September rather than July, and the February count will by then be seven months old.**',
  '⚠ **The wholesale question at section 5 is not a decision for 28 May. It is recorded so that nobody in a year thinks it was overlooked, and so that if the board does take a view on it, option C and not option B is the one that follows.**',
  '⚠ **A note on why these four lines are identical in both places, which Nour asked me to add.** **In September 2026 this firm sent three letters about one delivery date and the sentence carrying the date was slightly different in each, and the difference was what the argument became.** ⚠ **In 2024 an auditor\'s sentence was quoted in half for two years.** **So: the same four lines, in the same words, in both places, and I have read them aloud one after the other to check.**',
  '⚠ **And one thing about the fourth line, which I resisted.** **It is not a threat and it does not read as one because it is written in dates and contains no adjective.** ⚠ **A board that decides on 28 May without knowing that the test slips to September has been given an incomplete paper** — **and it is the kind of incompleteness nobody notices until September, when it will be my fault and not theirs.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the four lines, in order of what they do?'));
out.push(item('2', 'Why are the two versions identical, and what two examples does the writer give?'));
out.push(item('3', 'Why does the writer say the fourth line is not a threat?'));
out.push(box('Writer\'s box', [
  '**The ask — five rules:** ⚠ **four lines: the ask, the thing not yet sought, the consequence of delay, and the non-ask marked as one** → ⚠ **a verb and an object in the first** → ⚠ **dates in the third and no adjectives** → ⚠ **identical text at the top and the bottom** → ⚠ **and a reason given for the identity, where the reader might think it an error.**',
  '⚠ **Say what the money is FOR, inside the ask.** ⚠ *Being the fit-out at the middle quotation, the opening stock and eight weeks of staffing.* **Thirteen words that stop the figure being queried in the meeting rather than before it.**',
  '⚠ **Put the thing you are NOT asking for in its own line, with its return date.** ⚠ *The remaining 460,000 is not sought now and returns to it at week eight, on 27 July, with eight weeks of counted trading attached.* **It is the sentence that makes a staged ask credible rather than evasive.**',
  '⚠ **Write the consequence in dates with no adjectives.** ⚠ **Three facts and no *unfortunately*, no *regrettably*, no *serious*** — **an adjective in that line is what turns a timetable into pressure, and it is always an adjective rather than a fact that does it.**',
  '⚠ **Mark the non-ask, and say what would follow if the reader DID take a view.** ⚠ *If the board does take a view on it, option C and not option B is the one that follows.* **That clause is honest, it is useful, and it costs the writer his own recommendation if the board takes the view** — **which is 21.5 and 21.6 arriving in the same sentence.**',
  '⚠ **And where identical text might look like an error, give the reason.** ⚠ **Two examples from this firm\'s own history, in one line each.** **A reader who thinks a repetition is sloppiness will cut one of them; a reader who knows why will not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the ask for a proposal of yours (**80 words or more**). Use the frame, and then write it again identically.'));
out.push(p('**______________: THE ASK. ______________, ______________. These four lines appear at the top and at the foot, in the same words.**   ⚠ **I ask ______________, on ______________, to ______________, being ______________.**   ⚠ **I ask ______________ to note that ______________ is not sought now and returns at ______________.**   ⚠ **If ______________ is not decided on ______________, ______________, and ______________.**   ⚠ **______________ is not a decision for ______________. It is recorded so that nobody later thinks it was overlooked, and so that if ______________, then ______________ is the one that follows.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A verb and an object, with what the money is for', ''],
  ['The thing not sought now, with its return date', ''],
  ['The consequence in dates, with no adjectives', ''],
  ['The non-ask marked, with what would follow', ''],
  ['The two versions identical — read them aloud', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their top and bottom versions aloud, one after the other. ⚠ The class listens for a difference, and a difference is audible in about four seconds.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an ask of yours that produced nothing (**200 to 240 words**). Say what you asked for, which of the four parts was missing, what you got instead, and what the paper had deserved.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _which of the four parts is missing?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ Which of the four parts was missing most often? ⚠ **It is the fourth, every time** — **and in most cases the writer had decided it would look like pressure, which is the belief this cycle exists to correct.**'));
out.push(box('Homework', ['Write your final text. Then take one ask you owe somebody and write all four parts, with the consequence in dates and no adjectives (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 21.7 =======================
out.push(pb());
out.push(h2('21.7  Review & Mediate: the paper strong enough to defeat its author'));
out.push(p('⚠ **This is the ninth unit of this book, and the first in which a document written properly produces an answer nobody in the room had.** ⚠ **Everything before it was about writing what you already knew; this cycle is about what honest writing turns up.**'));
out.push(p('**Function:** holding a paper you may lose by   ·   **Grammar:** _if they choose C on my own account of it, then…_   ·   **Pronunciation:** a concession that does not sound like a retreat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 21 quiz', 6));
out.push(table(['Say it in one sentence', '✓'], [
  ['**21.1**  What question finds the reader\'s real question?', ''],
  ['**21.2**  What are the three tests for an option set?', ''],
  ['**21.3**  What are the three costs of changing nothing?', ''],
  ['**21.4**  What do you do with an assumption nobody can test?', ''],
  ['**21.5**  What three parts does the option you recommend against need?', ''],
  ['**21.6**  What are the four parts of an ask, and which is always missing?', ''],
], [6, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour realise while arguing about section 5?   **A** nothing   **B** that there is a fourth option nobody has written, which the honest version of section 5 made visible   **C** that Bassel is right'));
out.push(p('**b**  Listen again. **1** Why does Nour say she is the wrong person to want section 5 weakened? **2** What is the fourth option, and what does it do to the untestable assumption?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 21.13  "Then we have both been arguing about the wrong paper"', [
  ['Bassel', 'Section 5 is too strong. If the board reads it properly they may take option C, and I recommend against C.'],
  ['Nadia', 'You wrote it properly because I made you. You cannot now unwrite it.'],
  ['Bassel', 'Nour. You are my manager. Tell me to soften it and I will.'],
  ['Nour', '(pause) ⚠ **I want to and I am the wrong person to want it.** ⚠ **If the board takes option C I am committing 1.9 million on a reopening I argued against in December** — **so of the three people in this room I have the largest personal reason to see your section 5 weakened, and that is exactly why I am not going to touch it.**'],
  ['Bassel', 'Then my paper may lose on my own writing.'],
  ['Nour', '⚠ **Read me your last sentence again.**'],
  ['Bassel', '"A reader who takes the wholesale trade seriously should choose option C, and such a reader would not be making a mistake — they would be disagreeing with me about one number that neither of us can check."'],
  ['Nour', '⚠ **Say the last six words again.**'],
  ['Bassel', 'Neither of us can check.'],
  ['Nour', '⚠ **And every option on your page assumes that stays true.** ⚠ **Why?**'],
  ['Bassel', '…Because nobody in this firm can measure the northern wholesale trade.'],
  ['Nour', '⚠ **The unit next door has been empty for nine months.** ⚠ **Take the sixty square metres, and take a written option over the adjoining sixty for six months at a fee.** **Then the wholesale question is testable: eight weeks of trading tells you the walk-in count, and if the wholesale enquiries come in you exercise the option in November at a price agreed in May.**'],
  ['Nadia', 'That is not any of the three options.'],
  ['Nour', '⚠ **No. It is a fourth, and none of us saw it until he wrote the third one honestly.** ⚠ **A caricature of option C would have hidden it, because you cannot find the test for an assumption you have not stated as an assumption.**'],
  ['Bassel', 'And it is your option, not mine.'],
  ['Nour', '⚠ **It is your paper.** **I would not have found it reading a paper with three lines of straw in the middle of it** — **and I am going to the board recommending something I argued against in December, which is the part of this that costs me.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The fourth option, and why only an honest third one produces it**',
  table(['', 'What was there', 'What the honest version produced'], [
    ['⚠ **the stated assumption**', '⚠ *neither of us can check it* — **written down because section 5 was written fairly**', '⚠ **a question: why does every option assume that stays true?**'],
    ['**the fact nobody had used**', '**the adjoining unit has been empty nine months**', '⚠ **a written option over it for six months, at a fee**'],
    ['⚠ **the result**', '**an untestable assumption**', '⚠ **a testable one, with a date** — **eight weeks for the walk-in count, November for the wholesale decision at a May price**'],
  ], [1.9, 3.1, 4]),
  '⚠ **You cannot find the test for an assumption you have not stated as an assumption.** ⚠ **That is the sentence that joins 21.4 and 21.5**, **and it is the whole argument for writing the rejected option properly** — **a caricature would have hidden the fourth option, because the caricature would not have contained the word *untestable*.**',
  '⚠ **When you catch yourself wanting a paper weakened, ask whether you are the right person to want it.** ⚠ **Nour has the largest personal interest in a weak section 5 and says so out loud**, **which is why she can be trusted not to act on it** — **and saying it is what makes the rest of the conversation possible.**',
  '⚠ **The question that unlocked it is four words long.** ⚠ *Why does that stay true?* **Applied to any sentence containing *cannot be checked*, it is the most productive question in the unit** — **because most untestable things are untestable only under the arrangement you happen to have proposed.**',
  '⚠ **A fourth option is not a compromise between three.** ⚠ **It is a different arrangement that converts an assumption into a test** — **and it usually costs a fee rather than a decision, which is why nobody looks for it.**',
  '⚠ **And name what the new answer costs the person recommending it.** ⚠ *I am going to the board recommending something I argued against in December, which is the part of this that costs me.* **Said in the room, by the person it costs** — **which is how the firm knows the recommendation is not self-serving.**',
  '**Useful phrases:**  I am the wrong person to want that  ·  say the last six words again  ·  why does that stay true?  ·  a written option, at a fee  ·  you cannot test an assumption you have not stated',
  '**Pronunciation – a concession that is not a retreat.** 🔊 **Track 21.14** Listen twice. ⚠ **The first says *I am going to the board recommending something I argued against in December* at an even pace, as a fact.** ⚠ **The second slows at the end.** **Even, it is a cost being named; slowed, it is a complaint about having to pay it, and the room starts reassuring her instead of deciding.** Say it four times, even.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an untestable assumption; B looks for the fourth option. ⚠ **Use the five steps in order.**'));
out.push(table(['B asks', 'A answers'], [
  ['⚠ **Which sentence in your paper says something cannot be checked?**', '______________'],
  ['⚠ **Why does that stay true? What arrangement makes it untestable?**', '______________'],
  ['⚠ **What would have to be different for somebody to be able to check it?**', '______________'],
  ['⚠ **Can you buy that for a fee rather than a decision?**', '______________'],
  ['⚠ **And what date would the test then have?**', '______________'],
], [4.4, 4.6]));
out.push(table(['Role card 1 — soften it, I am your manager', 'Role card 2 — the fourth option is a compromise'], [[
  '⚠ **A asks their manager to authorise weakening the honest section, and the manager would gain by it.** ⚠ **B names their own interest out loud and declines on that ground.** ⚠ **B\'s point: the person with the largest reason to want a paper weakened is the person who must not touch it** — **and saying so in the room is what makes the rest of the conversation possible.**',
  '⚠ **A treats the fourth option as splitting the difference between B and C.** ⚠ **B points out that it takes the same floor as B and makes C available later at a known price.** ⚠ **B\'s point: a fourth option is not a midpoint, it is a different arrangement that converts an assumption into a dated test** — **and it usually costs a fee, which is why it is never in the original set.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** find one *cannot be checked* sentence in your own work and ask why that stays true. ⚠ Then say what a fourth option would be, and what it would cost as a fee.'));
out.push(PHRASE_CARD(['which sentence says it cannot be checked?', 'why does that stay true?', 'what would have to be different?', 'can you buy it as a fee?', 'and what date would the test have?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things at your work that nobody can check.'));
out.push(table(['The untestable thing', 'Why it stays untestable', 'What would make it testable', 'The fee, and the date'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.2, 2.4, 2.2]));
out.push(stage('4R', 'Mediate and report', 9));
out.push(p('**The mediation.** Bassel wants his own honest section weakened. Nadia will not allow it. Nour would gain from weakening it and must not.'));
out.push(table(['What each side is right about', 'What each side gives up', 'What goes to the board'], [[
  '⚠ **Bassel:** **a fairly stated option C may defeat his recommendation, and it is his paper that will have done it.**  ⚠ **Nadia:** **a paper written properly cannot be unwritten because the writer has seen where it leads.**  ⚠ **Nour:** **she has the largest personal reason to want section 5 weak, which disqualifies her from touching it** — **and she says so rather than quietly agreeing with Bassel.**',
  '⚠ **Bassel:** **authorship of the winning option. The fourth option is Nour\'s, found in his paper** — **and he states that in the paper rather than letting it blur.**  ⚠ **Nour:** **her own December position. She goes to the board recommending a commitment she argued against, and the only reason she can is that the test now has a date on it.**  ⚠ **Nadia:** **nothing, and she notes that she has given up nothing.**',
  '⚠ **A fourth option, as section 6:** *take the sixty square metres unit as in option B, and take a written option over the adjoining sixty square metres for six months at a fee of about 45,000. Eight weeks of trading tests the walk-in count; the wholesale question is decided in November at a price agreed in May.*  ⚠ **And a note: *this option was not in the first draft. It became visible only when section 5 was written fairly, and it was found by N. Mansour reading it. The untestable assumption at Appendix A is now testable and has a date.***',
]], [1, 1, 1.3]));
out.push(p('**Then report:** _Everybody is right about something. _______ is right that _______. _______ is right that _______. _______ is right that _______. So section 6 says _______, and _______ gives up _______ while _______ gives up _______._'));
out.push(p('⚠ **And the line the whole unit exists for:** *"I would not have found it reading a paper with three lines of straw in the middle of it."* ⚠ **That is the return on 21.5, stated by the person who got it** — **and it is a practical return rather than a moral one, which is why it is worth putting to a class that thinks fairness is a courtesy.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)', 10));
out.push(p('⚠ **This unit is Part 1: matching, seven questions against five short texts. It is the third time in the level.** ⚠ **A text may be used more than once, and in this one two of them are.** **Read all five before answering any question.**'));
out.push(box(null, [
  '**FIVE EXTRACTS FROM CAPITAL PAPERS — from a trade association\'s training pack.**',
  '**A**  …I should be grateful for the board\'s guidance on the way forward in this matter, and for any steer members may wish to give on the question of timing. I remain at the board\'s disposal and will of course be happy to provide further analysis should that be felt helpful…',
  '**B**  …If no capital is released at this meeting, the works cannot begin before the autumn and the tenancy survey, taken in March, will be eleven months old by the time any decision is taken. We would then be advised to survey again, which is six weeks and about 14,000. That is the cost of taking no decision, and it is not nil…',
  '**C**  …The second option gives 40 per cent more capacity for 180,000 a year more, which at our own margin supports about 900,000 of additional turnover. It is the right option if demand in the eastern district is larger than our own survey indicated, which is the view the previous manager set out in his note of 3 March, and his reasons were specific…',
  '**D**  …I have excluded the export recovery from every projection in this paper. Nobody in this company can establish whether it will happen, so I have assumed it at nil and said so. If it does occur at the 2021 level, add approximately 1.2 m to the second full year; that figure appears nowhere in my arithmetic and should not be relied on…',
  '**E**  …Option one commits the full amount at once. Option two commits the full amount over two stages. Option three commits the full amount over three stages, with the final stage in the second year. The committee is invited to consider which pace it prefers…',
]));
out.push(p('**For each statement, decide which extract it refers to. Circle A, B, C, D or E.**'));
out.push(item('1', 'This writer states the strongest point of an option they do not recommend.'));
out.push(item('2', 'This writer asks for something that nobody could later be held to.'));
out.push(item('3', 'This writer offers the same course of action at three different speeds.'));
out.push(item('4', 'This writer has put a figure on what happens if nothing is decided.'));
out.push(item('5', 'This writer has kept a figure out of the arithmetic because it cannot be verified.'));
out.push(item('6', 'This writer does not say what they want decided, or by when.'));
out.push(item('7', 'This writer names the person whose view the rejected option reflects.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Three content points, all three present.** ⚠ **This is the fourth Part 2 of Book 2, after Units 14, 16 and 18.**',
  '⚠ **For a report recommending between options, the three headings write themselves.** ⚠ *The options · What changing nothing costs · Recommendation and ask.* **Three headings at 130 words, and the marker sees all three content points in four seconds.**',
  '⚠ **The options heading takes a contrast and not a list.** ⚠ *A commits everything in June; B commits 640,000 and tests the count in eight weeks. They differ in one thing: whether we spend before or after the evidence.* **Thirty words, and the comparison is made rather than described.**',
  '⚠ **Price the status quo, because the task asks for it and because candidates leave it out.** ⚠ *Changing nothing costs about 2.3 m of turnover and a survey that will be eleven months old.* **A figure and a decay, in seventeen words.**',
  '⚠ **And the ask needs the fourth part.** ⚠ *I ask the board to release 640,000 on 28 May. If it is not released then, the test ends in September rather than July.* **Candidates write the first sentence and stop** — **and the second is where the marks are, because it is the only clause that cannot be written without having thought about the timetable.**',
  '⚠ **Part 1 tip, for the matching above.** ⚠ **Two extracts are used twice and the rubric says a text may be used more than once, which candidates read and then ignore** — **they distribute seven answers across five texts as though each must appear.** ⚠ **Match on the single distinctive move in each extract: a guidance request, a priced decay, a named opposing view, an excluded figure, three speeds.** **Then the repeats look obvious rather than suspicious.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Your company is choosing between two ways of funding a change. Your manager has asked for a report (**120 to 140 words**) setting out **the options and what they differ in**, **what changing nothing would cost**, and **your recommendation with a dated ask**.'));
out.push(p('**REPORT: ______________**   **To:** ______________   **From:** ______________   **Date:** ______________   ⚠ **The options.** **A ______________. B ______________. They differ in one thing: ______________.**   ⚠ **What changing nothing costs.** **______________, and ______________ will by then be ______________.**   ⚠ **Recommendation and ask.** **I recommend ______________. I ask ______________ to ______________ on ______________.** ⚠ **If it is not decided then, ______________.**   **Words: ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings carrying the three content points', ''],
  ['A contrast, with what the options differ in', ''],
  ['The status quo priced, with a figure and a decay', ''],
  ['An ask with a date, and the consequence of delay', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that nobody can check (**200 to 240 words**). Say what it is, why it stays uncheckable, what arrangement would make it testable, and what that arrangement would cost.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take one assumption at your work that nobody can test, and write the fourth option: the arrangement that would make it testable, with a fee and a date (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 21 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ask the board ___ 28 May to release the capital.   a) in   b) on   c) at',
  '2  Doing nothing requires no decision ___ all.   a) in   b) of   c) at',
  '3  It is right ___ the northern market is larger than the count showed.   a) if   b) whether   c) unless',
  '4  I have assumed it ___ nil.   a) to   b) at   c) in',
  '5  The two options differ ___ one thing only.   a) in   b) on   c) by',
  '6  Twice the floor ___ 300,000 a year more.   a) at   b) by   c) for',
  '7  A reader who takes it seriously ___ choose option C.   a) should   b) shall   c) will',
  '8  You cannot test an assumption you have not ___ down.   a) wrote   b) written   c) write',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 21.15** Listen to the conversation after the board meeting. Complete the note.   Which option the board took: ______   What Nour had to tell the board about her December position: ______   What Bassel put in the paper about the fourth option\'s author: ______   The fee agreed for the written option: ______   What Nadia says she gave up: ______   What Bassel says he has learned about caricatures: ______'));
out.push(p('**C  Reading.** Read section 5 at 21.5 again. Say what three good things it finds in option C, which of Mr Ayoub\'s two reasons the writer calls the better, and what the last paragraph concedes.'));
out.push(p('**D  Writing.** Take a decision at your work. Price the option of changing nothing in all three ways, with a source on the first figure and a date on the decay (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 21.15  Audio script (read after the check)', [
  ['Nadia', 'Well?'],
  ['Bassel', '⚠ **They took the fourth option. Sixty square metres and a written option over the adjoining sixty, for six months.**'],
  ['Nadia', 'And the fee?'],
  ['Bassel', '⚠ **Forty-five thousand. Mr Sayegh asked twice whether that was a real figure or a round one, and it is a real one** — **the agent has it in writing.**'],
  ['Nadia', 'What did Nour have to say to them?'],
  ['Bassel', '⚠ **That she argued against the reopening in December, that she was wrong about neither threshold, and that she was now recommending a larger commitment than the one she had opposed.** ⚠ **She said it in the first two minutes rather than being asked.**'],
  ['Nadia', 'And the paper?'],
  ['Bassel', '⚠ **Section 6 says the fourth option was not in the first draft, that it became visible only when section 5 was written fairly, and that Nour found it.** ⚠ **I wrote that. She told me not to and I wrote it anyway, because it is true and because a paper that takes credit for somebody else\'s idea is a paper nobody checks the rest of.**'],
  ['Nadia', 'And what did I give up?'],
  ['Bassel', '⚠ **Nothing. You said so at the time and you were right** — **you held the line on one section and it produced the whole answer.**'],
  ['Nadia', 'And what have you learned, since you will be asked?'],
  ['Bassel', '⚠ **That a caricature is not a cheap win, it is an expensive one.** ⚠ **If I had left my three lines in, the board would have taken option B, I would have got what I wanted, and nobody would ever have found the fourth option** — **because the thing that produced it was the word *untestable*, and a caricature of option C would not have contained it.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**21.1** find the question your reader actually has, and declare it in one line at the top',
  '**21.2** build an option set that passes the three tests, including the option you left out',
  '**21.3** price the option of changing nothing in three ways, including what decays',
  '**21.4** sort what has to be true into figures, testable claims and things assumed at nil',
  '**21.5** state the option you recommend against in its own terms, with a check on your objection',
  '**21.6** write an ask in four parts, identically at the top and the bottom',
  '**21.7** ask of any untestable assumption why it stays untestable, and find the fourth option',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Back at B2 — three things you already have', [
  '⚠ **' + BACK_AT_B2 + '** — **all three come from B1\'s options paper, and all three were smaller there.** ⚠ **A proposal at A2 was a page asking for something.** **Here it is two pages, an appendix and a question declared on line one** — **and the appendix is the part that matters in eighteen months.**',
  '⚠ **The do-nothing option at B1 was a row in a table.** ⚠ **Here it has three costs, and the third one** — **what decays while nobody decides** — **is the one that makes a postponement into a permanence, and B1 never mentioned it.**',
  '⚠ **And a preferred option at B1 was the one you preferred.** ⚠ **Here it is the one that survives after you have made the other case properly** — **and in this unit the preferred option turned out to be a fourth one that nobody had written down, found by the person who would have gained most from a weaker paper.**',
], C.lteal));
out.push(sp());
out.push(p('**Lexis in this unit (32):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Collocations (8):** ' + COLLOC, { size: 18, color: '595959' }));
out.push(p('**Back at B2 (3):** ' + BACK_AT_B2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 21 · Student\'s Book');
module.exports = out;
