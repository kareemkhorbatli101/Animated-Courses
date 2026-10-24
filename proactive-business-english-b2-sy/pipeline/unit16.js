// Proactive Business English B2 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'to steelman · the strongest honest form · a paper you do not believe · to mark your own view out of a paper · an attached view · two papers for one decider · a covering note with no steer · the overturning condition both ways · to argue against your own interest · the recognition test · a case its holder would recognise · to write for the person who holds it · a thumb on the scale · a case that loses · the paper that loses · to lose an argument in writing · a position you reject · an honest statement of the other case · the case you would make if you were them · to separate advocacy from advice · to brief both sides · a decider who is not managed · to put a case you will vote against · the sentence you write afterwards · a case weakened by its advocate · the straw version · the strong version · an argument you cannot improve · to concede the better argument · a view held and set aside · the reason you still disagree · to be outvoted in writing';
const COLLOC = 'to put the other case · to attach a view · to hold a paper back · to write against yourself · to brief a decider · to lose on the merits · to carry a dissent forward · to test a case on its holder';
const BACK_AT_B2 = 'to hold a view · the strongest case against · a dissenting view';

out.push(h1('Unit 16  The Argument You Do Not Hold'));
out.push(p('_Proactive Business English · B2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**16.1**  write the strongest honest form of a case you reject',
  '**16.2**  mark your own view out of the paper, and attach it separately',
  '**16.3**  write the overturning condition in both directions',
  '**16.4**  read the paper to the person who holds the case',
  '**16.5**  put two papers in front of one decider, with no thumb on the scale',
  '**16.6**  write the case you believe, and watch it lose',
  '**16.7**  Review & Mediate: the case for the decision we took, by the person who opposed it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Homs, and a number nobody ever counted', [
  '⚠ **On 2 December Bassel proposed reopening Homs: sixty square metres on the Hama road rather than a hundred and eighty in the centre, at about 1.1 million a year in rent against the old 1.9, with one member of staff.** **He projects nine million of turnover in the first year.**',
  '⚠ **The Homs store opened in 2019 and closed in 2021, and both decisions were Mr Ayoub\'s.** **It took 14.2 million in 2020 and 11.8 in 2021.** ⚠ **The cause of the closure is recorded nowhere, and it is this: the unit was stocked and staffed on booked orders, and nobody ever counted the people who walked in without one.** **So the counter lines were never restocked on counter demand, the walk-in trade went away, and by 2021 the store was living on booked orders alone, which did not cover 1.9 million of fixed cost.**',
  '⚠ **Nour is against reopening, for reasons she can state.** ⚠ **And Mr Ayoub has asked her to write the case FOR it** — **because Bassel is too close to it and because she is the only person in the building who has read the 2019 to 2021 ledgers.**',
  '⚠ **This unit is that paper.** **It is the only unit in four levels in which the learner\'s whole task is to write something they do not believe, as well as its holder would write it** — ⚠ **and the test of it is not whether it is persuasive but whether Bassel would recognise himself in it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 16.1 =======================
out.push(pb());
out.push(h2('16.1  The strongest honest form'));
out.push(p('**Function:** steelmanning in writing   ·   **Grammar:** _the case is not that X; it is that Y_   ·   **Pronunciation:** somebody else\'s case read without distance'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a proposal at your work you disagree with. ⚠ Then say it in the strongest form you can, as though you held it.'));
out.push(p('**b**  Which is the strong form? _Bassel wants to reopen Homs because he thinks it will do well · the case for Homs is that the fixed cost is now 1.1 million, not 1.9, and the lines that failed in 2021 were failing on a number nobody measured_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say is wrong with Nour\'s first version?   **A** it is too short   **B** it is the version she can refute, not the version Bassel holds   **C** it is too favourable'));
out.push(p('**b**  Listen again. **1** What is the straw version, and what is the strong one? **2** What test does Mr Ayoub give her?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  "That is the version you can answer"', [
  ['Nour', 'The case for Homs is that the market is better than it was and the rent is lower.'],
  ['Mr Ayoub', '⚠ **That is the version you can answer, and you can answer it in two sentences.** ⚠ **It is not the version Bassel holds.**'],
  ['Nour', 'It is what he said.'],
  ['Mr Ayoub', '⚠ **It is what he said in four minutes standing up.** ⚠ **Your job is the case he would write if he had three days and the ledgers** — **and he has not had the ledgers.**'],
  ['Nour', 'Then the strong version has to use my own figures.'],
  ['Mr Ayoub', '⚠ **It has to use the figures, and the figures are not yours.** **What do they say?**'],
  ['Nour', '⚠ **That the 2021 closure was decided on a number that was never counted.** **Fixed cost was 1.9 million, turnover 11.8, and the whole of the shortfall is in the counter lines** — **which were restocked on booked orders because nobody measured the walk-in trade.**'],
  ['Mr Ayoub', '⚠ **So what is the strongest case for reopening?**'],
  ['Nour', '⚠ **That the unit never failed as a shop.** **It failed as a warehouse with a door in it.** ⚠ **At sixty square metres on the Hama road, at 1.1 million, with the walk-in trade counted from the first week, the thing that killed it in 2021 cannot happen.**'],
  ['Mr Ayoub', '⚠ **That is better than anything Bassel has said and you do not believe a word of it.**'],
  ['Nour', '⚠ **I believe every word of it. I do not think it is enough.** **Those are different.**'],
  ['Mr Ayoub', '⚠ **Then write the first and keep the second for the second paper.** ⚠ **And the test: would Bassel read this and say *yes, that is what I mean*?** **If he would say *that is better than what I meant*, better still.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The strongest honest form**',
  table(['', 'The straw version', 'The strong version'], [
    ['**where it comes from**', '⚠ **what they said in four minutes, standing up**', '⚠ **what they would write with three days and the documents** — **which they have not had**'],
    ['⚠ **the figures**', '**yours, used against them**', '⚠ **the figures** — **and they belong to nobody**'],
    ['⚠ **the form**', '⚠ *he thinks it will do well*', '⚠ *the unit never failed as a shop; it failed as a warehouse with a door in it*'],
    ['⚠ **the test**', '**is it persuasive?**', '⚠ **would its holder say *that is what I mean*?** — **and better still, *that is better than what I meant*.**'],
  ], [1.7, 3.3, 4]),
  '⚠ **The version you can answer is never the version they hold.** ⚠ **A proposal made in four minutes standing up is not an argument, it is the beginning of one** — **and refuting it refutes nobody.**',
  '⚠ **Build the case from the documents, and the documents are not yours.** ⚠ **The 2019 to 2021 ledgers are in Nour\'s hands and nothing in them belongs to her side of the argument** — **and the strongest case for reopening turns out to be in the figures she read in order to oppose it.**',
  '⚠ **The strong form usually contains a distinction the holder has not made.** ⚠ *It never failed as a shop; it failed as a warehouse with a door in it.* **Thirteen words**, **and they are the case** — **and Bassel had not got there, because he had not seen the ledgers.**',
  '⚠ **Separate *I believe it* from *I think it is enough*.** ⚠ **A writer can believe every sentence of a case and still think the case does not carry the decision** — **and conflating the two is what produces a straw version, because a writer who thinks they must disbelieve the case will write one they can disbelieve.**',
  '⚠ **And the test is the holder, not the reader.** ⚠ **Would Bassel say *that is what I mean*?** **If he would say *that is better than what I meant*, the paper is right** — **and if he would say *that is not quite it*, the paper is not finished, whatever the decider thinks of it.**',
  '**Practise:** Take a proposal you disagree with. Write the version you can answer, then the version its holder would write with three days and the documents.',
  '**Useful phrases:**  that is the version you can answer  ·  with three days and the ledgers  ·  the figures are not mine  ·  I believe it; I do not think it is enough  ·  would they recognise it?',
  '**Pronunciation – somebody else\'s case.** 🔊 **Track 16.2** Listen twice. ⚠ **The first reads *the unit never failed as a shop* as an assertion, in the reader\'s own voice.** ⚠ **The second puts a slight distance into it** — *the case is that the unit never failed as a shop.* **Without the distance it is advocacy; with it, it is a report, and a decider can tell in half a sentence.** Say both four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a case; B strengthens it.'));
out.push(dlg(null, [
  ['A', 'The case for __________ is that __________.'],
  ['B', '⚠ **Could you answer that in two sentences?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then it is the version you can answer. What would they write with three days and the documents?**'],
  ['A', '__________.'],
  ['B', '⚠ **What distinction have they not made?**'],
  ['A', '__________.'],
  ['B', '⚠ **Put that in. Now, would they recognise it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And do you believe it, or do you think it is not enough?**'],
]));
out.push(table(['Role card 1 — the version you can answer', 'Role card 2 — believing it against thinking it enough'], [[
  '⚠ **A gives the case as the proposer said it, in one sentence, and it is refutable.** ⚠ **B asks how long it would take to answer and the answer is two sentences.** ⚠ **B\'s point: a case you can refute in two sentences is not the case anybody holds** — **it is the case somebody made standing up, and refuting it leaves the real argument untouched.**',
  '⚠ **A says writing the strong version would be dishonest, because A does not believe it.** ⚠ **B asks whether A disbelieves the sentences or thinks they do not carry the decision.** ⚠ **B\'s point: those are different, and a writer who thinks they must disbelieve the case will write one they can disbelieve** — **which is the mechanism that produces every straw version ever written.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the straw version and the strong version side by side. ⚠ Then write the distinction the strong version contains that the holder had not made.'));
out.push(PHRASE_CARD(['the version you can answer', 'three days and the documents', 'the distinction they missed', 'would they recognise it?', 'believe it, or enough?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** proposals you disagree with. Write both versions of each.'));
out.push(table(['The proposal', 'The version you can answer', 'The strong version', 'Would its holder recognise it?'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.4, 3.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The proposal is _______. The version I can answer is _______. The strong version is _______. The distinction in it that nobody had made is _______._'));
out.push(p('**Listener task:** count how many strong versions used figures the writer had gathered in order to oppose the proposal. ⚠ Then ask how many of the writers were surprised by their own strong version, and expect most.'));
out.push(p('**Board clinic:** your teacher writes four cases on the board — find the straw version and the one written in its holder\'s four-minute words. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**PAPER A: THE CASE FOR REOPENING HOMS. 9 December. N. Mansour. Page 1 of 3.**',
  '⚠ **This paper puts the case for reopening. It is not my view. My view is in paper B and is attached separately.**',
  '⚠ **The case is not that the market has improved or that the rent is lower, though both are true.** ⚠ **The case is that the Homs unit never failed as a shop. It failed as a warehouse with a door in it, and the thing that killed it cannot happen in sixty square metres on the Hama road.**',
  table(['', 'The 2019–21 figures', 'What they show'], [
    ['**turnover**', '**14.2 million (2020) · 11.8 million (2021)**', '**a fall of 2.4 million in the last year, on a fixed cost of 1.9**'],
    ['⚠ **where the fall is**', '⚠ **the whole of it is in the counter lines** — **booked orders were flat at 9.6 both years**', '⚠ **the shop half of the business died and the warehouse half did not**'],
    ['⚠ **why**', '⚠ **the counter lines were restocked on booked-order demand, because that is the only demand anybody counted**', '⚠ **a customer who came twice and found the line out came a third time and did not come again**'],
    ['**fixed cost then and now**', '**1.9 million · about 1.1 million**', '**a unit that needed 11.9 of turnover to stand up now needs about 7**'],
  ], [1.4, 3.4, 4]),
  '⚠ **So the proposal is not *try Homs again*. It is *open a shop in Homs*, which is not the thing that closed.** **Sixty square metres carries no warehouse and cannot be run on booked orders; a counter in sixty square metres is counted by the person standing at it or it is not counted at all.**',
  '⚠ **What the case needs to be true.** **One: that the counter trade of 2019 and 2020 was real and not a function of the old site.** ⚠ **Two: that somebody counts walk-ins from the first week, in writing, with a sheet.** ⚠ **Three: that 1.1 million is the rent and not the opening offer.**',
  '⚠ **What this paper does not say.** ⚠ **It does not say the proposal should be accepted.** **It does not weigh Homs against anything else the money could do, and it does not price the management time** — **both of which are in paper B, because they are arguments against and this paper is not the place for them.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the case, in the writer\'s formulation, and what is it not?'));
out.push(item('2', 'What three things does the case need to be true?'));
out.push(item('3', 'What does the paper say it does not say, and why are those things elsewhere?'));
out.push(box('Writer\'s box', [
  '**The paper for a case you reject — six parts:** ⚠ **a first line saying whose view it is not** → ⚠ **the case stated as *not X but Y*** → **the figures, in a table with *what they show*** → ⚠ **the reformulation of the proposal** → ⚠ **what the case needs to be true** → **and what the paper does not say.**',
  '⚠ **Say in the first line that it is not your view and where your view is.** ⚠ *This paper puts the case for reopening. It is not my view. My view is in paper B.* **Fourteen words** — **and without them every sentence in the paper is read as advocacy by a reader who knows your position.**',
  '⚠ **State the case as *not X but Y*.** ⚠ **It does two things: it clears away the weak versions the holder actually said, and it puts the strong version in a form that cannot be confused with them** — **and *though both are true* is what stops it reading as a dismissal.**',
  '⚠ **Give the figures a *what they show* column and keep the showing narrow.** ⚠ *The shop half died and the warehouse half did not.* **A column of conclusions is advocacy; a column of readings is a paper** — **and the difference is whether each reading could be contested on its own.**',
  '⚠ **Reformulate the proposal in the holder\'s favour.** ⚠ *It is not "try Homs again", it is "open a shop in Homs", which is not the thing that closed.* **That is the strongest sentence available to the case and it is the writer\'s own construction** — **and a paper that does not improve the proposal has not steelmanned it.**',
  '⚠ **List what the case needs to be TRUE, not what is wrong with it.** ⚠ **Three conditions, each testable** — **because a condition is something the proposer can go and establish, and an objection is something they have to argue with.** **The objections are paper B.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write paper A for a proposal you reject (**80 words or more**). Use the frame.'));
out.push(p('**PAPER A: THE CASE FOR ______________. ______________. ______________. Page 1 of ______________.**   ⚠ **This paper puts the case for ______________. It is not my view. My view is in paper B and is attached separately.**   ⚠ **The case is not that ______________, though ______________ is true.** ⚠ **The case is that ______________.**   **** | **The figures** | **What they show**   **______________** | **______________** | **______________**   ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **So the proposal is not ______________. It is ______________, which is not the thing that ______________.**   ⚠ **What the case needs to be true.** **One: ______________.** ⚠ **Two: ______________.** ⚠ **Three: ______________.**   ⚠ **What this paper does not say. It does not say ______________.** **It does not ______________** — **both of which are in paper B.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer** — time, a figure, or a relationship.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line saying whose view it is not, and where that view is', ''],
  ['The case stated as *not X but Y*, with *though both are true*', ''],
  ['A *what they show* column of readings, not conclusions', ''],
  ['The proposal reformulated in its holder\'s favour', ''],
  ['What the case needs to be true, in testable conditions', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *not X but Y* sentence. ⚠ The class says whether the Y is stronger than anything the proposer has actually said.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the strongest honest case for something you disagree with at your work (**200 to 240 words**). State it as *not X but Y*, use the figures, reformulate the proposal in its holder\'s favour, and end with what it needs to be true.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _would its holder recognise this?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the strong version better than anything the proposer said? Usually all three — ⚠ **and that is the uncomfortable finding: the best statement of a case is often written by the person against it, because they are the one who read the documents.**'));
out.push(box('Homework', ['Write your final text. Then take the proposal you most disagree with and write the version its holder would write with three days and your own figures (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.2 =======================
out.push(pb());
out.push(h2('16.2  Marking your own view out of the paper'));
out.push(p('**Function:** separating advocacy from advice   ·   **Grammar:** _my own view is not in this paper and is attached separately_   ·   **Pronunciation:** a disclaimer read once and not repeated'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a paper you have written where your own view was in it without being announced. ⚠ Then say how a reader would have known.'));
out.push(p('**b**  Which marks the view out? _I have tried to be objective · my own view is not in this paper and is in paper B_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Nadia find Nour\'s view in paper A?   **A** in the first line   **B** in three adjectives and one ordering   **C** nowhere'));
out.push(p('**b**  Listen again. **1** What are the three adjectives, and what is the ordering? **2** Why does Nadia say the disclaimer makes it worse rather than better?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  "You have said it three times without saying it"', [
  ['Nadia', 'Your first line says your view is not in this paper. Then your view is in it three times.'],
  ['Nour', 'Where?'],
  ['Nadia', '⚠ **_Merely_ nine point six in booked orders. _Only_ about 1.1 million. And _he projects_ nine million, which is a word you use about a forecast you do not accept.**'],
  ['Nour', 'Those are small words.'],
  ['Nadia', '⚠ **They are the only words in the paper that have an attitude in them, so they are the words a reader will weigh.** ⚠ **You have written two thousand neutral words and three leaning ones, and the three are visible from across a room.**'],
  ['Nour', 'And the ordering?'],
  ['Nadia', '⚠ **The three conditions. You have put the rent last.** ⚠ **It is the weakest of the three and the easiest to check, and last position in a list of three is where a writer puts the thing they expect to fail.**'],
  ['Nour', 'I put it last because it is the least interesting.'],
  ['Nadia', '⚠ **I believe you, and the reader cannot.** ⚠ **An ordering is a judgement and there is no way to write a list that does not contain one** — **so say what the ordering is.** *The three conditions in the order in which they can be established.*'],
  ['Nour', 'And the disclaimer in line one?'],
  ['Nadia', '⚠ **Keep it, and say it once.** ⚠ **A disclaimer repeated is a thumb on the scale.** **A paper that says four times that it is not advocating anything is advocating something.**'],
  ['Nour', 'So one line, and then nothing.'],
  ['Nadia', '⚠ **One line, and then the discipline has to be in the words and not in the promise.** ⚠ **The first line tells the reader what you are trying to do. The three adjectives tell them whether you managed it** — **and they will believe the adjectives.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Marking your own view out**',
  table(['Where it leaks', 'The tell', 'The fix'], [
    ['⚠ **adjectives and adverbs**', '⚠ *merely · only · just · he projects · apparently · supposedly*', '⚠ **delete** — **they are the only words with an attitude, so they are the words that get weighed**'],
    ['⚠ **ordering**', '⚠ **the weakest item last in a list of three**', '⚠ **say what the ordering is** — *in the order in which they can be established*'],
    ['⚠ **the disclaimer**', '**repeated three or four times**', '⚠ **once, in the first line, and then nothing** — **a disclaimer repeated is a thumb on the scale**'],
    ['⚠ **the attribution verb**', '⚠ *he claims · he believes · he projects*', '⚠ *the projection is* — **and give it its basis instead**'],
  ], [1.7, 3.3, 4]),
  '⚠ **In a paper of two thousand neutral words, three leaning ones are visible from across a room.** ⚠ **_Merely_, _only_ and _he projects_ are the only words in paper A with an attitude in them** — **so they are the only words a reader weighs, and they outweigh everything else.**',
  '⚠ **Every list contains a judgement and there is no way to write one that does not.** ⚠ **Last position in a list of three is where a writer puts the item they expect to fail** — **so the remedy is not to reorder but to state the principle:** *in the order in which they can be established.*',
  '⚠ **Say the disclaimer once.** ⚠ **A paper that says four times that it is not advocating anything is advocating something** — **and the reader notices the fourth time and then goes back and rereads the first three.**',
  '⚠ **Attribution verbs carry a verdict.** ⚠ *He projects nine million* **says you do not accept it; *the projection is nine million, and its basis is the 2020 counter figures* says what it is and lets the reader weigh it.** **The second is longer by four words and neutral.**',
  '⚠ **And the discipline has to be in the words, not in the promise.** ⚠ **The first line says what you are trying to do; the adjectives say whether you managed it** — **and a reader will always believe the adjectives.**',
  '**Practise:** Take a paper of yours. Find every adjective and adverb with an attitude in it, and every list of three. Say what each one does.',
  '**Useful phrases:**  three leaning words  ·  visible from across a room  ·  say what the ordering is  ·  once, and then nothing  ·  the projection is, not he projects',
  '**Pronunciation – a disclaimer said once.** 🔊 **Track 16.4** Listen twice. ⚠ **The first says *my own view is not in this paper and is in paper B* quickly and moves on.** ⚠ **The second slows and weights it.** **Quick, it is a procedural note; weighted, it is a protest, and a protest invites the reader to look for the view.** Say it four times, quickly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a passage; B finds the leaning words.'));
out.push(dlg(null, [
  ['A', 'The figures show __________ nine point six in booked orders.'],
  ['B', '⚠ **Which word there has an attitude in it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Delete it and read the sentence again. What changed?**'],
  ['A', '__________.'],
  ['B', '⚠ **And your list of three. Which is last?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that the weakest?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then say what the ordering is, or the reader will tell themselves.**'],
]));
out.push(table(['Role card 1 — the three small words', 'Role card 2 — the ordering that speaks'], [[
  '⚠ **A defends *merely*, *only* and *he projects* as small words that change nothing.** ⚠ **B asks how many other words in the paper have an attitude in them, and the answer is none.** ⚠ **B\'s point: in two thousand neutral words, three leaning ones are the only ones a reader weighs** — **so they do not change the paper slightly, they are the paper\'s position.**',
  '⚠ **A has put the rent condition last because it is the least interesting.** ⚠ **B accepts that and asks what last position in a list of three usually means.** ⚠ **B\'s point: an ordering is a judgement and cannot be avoided, so the remedy is to state the principle** — *in the order in which they can be established* — **after which the ordering means what the writer says it means.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three leaning words. ⚠ Then write the sentence that states what an ordering is, and say why reordering is not the remedy.'));
out.push(PHRASE_CARD(['three leaning words', 'delete and reread', 'which is last?', 'say what the ordering is', 'once, and then nothing']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** pages of your own writing. Find the leaks.'));
out.push(table(['The page', 'Leaning words found', 'The list, and what is last', 'The fix'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.4, 2.4, 2.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My page had _______ leaning words: _______. My list of _______ had _______ last, which is the _______. The fix is _______._'));
out.push(p('**Listener task:** count how many leaning words the room found in total. ⚠ Then ask how many of them the writers had noticed before today, and expect very few.'));
out.push(p('**Board clinic:** your teacher writes four passages on the board — find the attribution verb that carries a verdict and the disclaimer said twice. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**PAPER A, SECOND DRAFT: WHAT I TOOK OUT. 10 December. N. Mansour. Working page, not circulated.**',
  table(['Was', 'Is', 'Why'], [
    ['⚠ *merely nine point six in booked orders*', '**nine point six in booked orders, flat across both years**', '⚠ **_merely_ was the only attitude in the paragraph** — **and *flat across both years* is the fact I was using it to imply**'],
    ['⚠ *only about 1.1 million*', '**about 1.1 million, against 1.9 at the old site**', '⚠ **_only_ sneered at a figure that is the strongest thing in the case**'],
    ['⚠ *he projects nine million*', '**the projection is nine million, on the 2020 counter figures less fifteen per cent**', '⚠ **_he projects_ was a verdict** — **and the basis, which I had left out, is what a reader actually needs**'],
    ['⚠ *the three conditions are:*', '**the three conditions, in the order in which they can be established, are:**', '⚠ **the ordering was speaking and I had not authorised it**'],
    ['⚠ **the disclaimer, four times**', '**the disclaimer, once, in the first line**', '⚠ **four was a protest** — **and a protest sends the reader looking for the view**'],
  ], [3.2, 3.4, 3.4]),
  '⚠ **Five changes and not one of them alters a figure.** **The paper now contains exactly the same information and argues for nothing.** ⚠ **Which was the point, and I had not managed it in the first draft even though the first line promised it.**',
  '⚠ **The one I argued with myself about is *he projects*.** **Giving the projection its basis makes the case stronger than Bassel made it, because he did not give the basis either.** ⚠ **So the neutral version of a sentence can be more favourable to the other side than the leaning version**, **which is not what I expected and is worth writing down.**',
  '⚠ **And one thing I have left in on purpose.** **The paper says that a customer who came twice and found the line out came a third time and did not come again.** ⚠ **That is an inference, it is mine, and it is marked as one in the table** — **and it is the strongest sentence in the case for reopening, so taking it out to look neutral would have been a thumb on the scale in the other direction.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many changes are there, and what do they all have in common?'));
out.push(item('2', 'What did the writer find surprising about the neutral version of *he projects*?'));
out.push(item('3', 'What has she left in on purpose, and why would taking it out have been a thumb on the scale?'));
out.push(box('Writer\'s box', [
  '**The *what I took out* page — four properties:** ⚠ **a *was · is · why* table** → **a line saying no figure changed** → ⚠ **the change you argued with yourself about** → ⚠ **and the thing you left in on purpose.**',
  '⚠ **Put *was* and *is* side by side and give *why* its own column.** ⚠ **The why is where the learning is** — **and the useful whys name the mechanism:** *the only attitude in the paragraph*, *the ordering was speaking*.',
  '⚠ **Say that no figure changed.** ⚠ **Five changes and the paper contains the same information** — **which is the proof that the leaning was in the words and not in the selection**, **and it is the sentence a suspicious reader needs.**',
  '⚠ **Record the change that surprised you.** ⚠ **The neutral version of a sentence can be MORE favourable to the other side than the leaning version** — **because *he projects* withheld the basis, and giving the basis strengthened the projection.** **Nobody expects that and everybody should know it.**',
  '⚠ **And name what you left in, with the reason.** ⚠ **An inference of your own, marked as an inference, which happens to be the strongest sentence in the case you reject** — **and removing it to look neutral would have been a thumb on the scale in the other direction.**',
  '⚠ **The deeper point, worth one sentence:** ⚠ **neutrality is not the absence of your own material.** **It is the absence of your own verdict** — **and a writer who strips out their best thinking in order to look impartial has produced a weaker paper and a less honest one.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *what I took out* page for a paper of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________, SECOND DRAFT: WHAT I TOOK OUT. ______________. ______________. Working page, not circulated.**   **Was** | **Is** | **Why**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ _______________._ | **______________** | ⚠ **______________**   ⚠ **______________** | **______________** | ⚠ **______________**   ⚠ **______________ changes and not one of them alters a figure.** **The paper now contains exactly the same information and argues for nothing.**   ⚠ **The one I argued with myself about is ______________. ______________.**   ⚠ **And one thing I have left in on purpose. ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *was · is · why* table, with the mechanism named in *why*', ''],
  ['A line saying no figure changed', ''],
  ['The change that surprised the writer', ''],
  ['Something left in on purpose, with its reason', ''],
  ['The disclaimer appearing once in the paper itself', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *why* column. ⚠ The class says of each entry whether it names a mechanism or passes a judgement on the old wording.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a paper of yours in which your own view was in it without being announced (**200 to 240 words**). Say where it leaked, how a reader would have known, what you would take out, and whether taking it out weakens your real argument.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _does the neutral version favour the other side?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the writer announced objectivity and then leaked? Usually all three — ⚠ **and in at least one the leak is an attribution verb, which is the hardest to see because it is doing real grammatical work while carrying a verdict.**'));
out.push(box('Homework', ['Write your final text. Then take one page of your own writing and delete every adjective and adverb with an attitude in it, and read it again (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.3 =======================
out.push(pb());
out.push(h2('16.3  Where you would change your mind, both ways'));
out.push(p('**Function:** the overturning condition in both directions   ·   **Grammar:** _I would support it if · I would abandon my opposition if_   ·   **Pronunciation:** a condition read as a measurement, not a concession'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something at work you are against. ⚠ Then say what you would have to see to support it.'));
out.push(p('**b**  Which is a condition? _I would need to be convinced that the trade is there · I would support it if a counted walk-in figure for the Hama road, taken over four weeks, came to more than two hundred and twenty a week_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub ask Nour for that she has not written?   **A** her own view   **B** the condition under which she would support reopening, stated as a figure   **C** a recommendation'));
out.push(p('**b**  Listen again. **1** What is her condition, and what is the number in it? **2** What is Bassel\'s condition, and why does Mr Ayoub say it is worth more than hers?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  "What would make you support it?"', [
  ['Mr Ayoub', 'Paper B says you are against it. What would make you support it?'],
  ['Nour', 'I would need to be convinced that the walk-in trade is there.'],
  ['Mr Ayoub', '⚠ **That is not a condition, it is a mood.** ⚠ **Convinced by what, measured how, and over how long?**'],
  ['Nour', '⚠ **A counted figure. Somebody standing in a doorway on the Hama road for four weeks, with a sheet, counting people who come in.** ⚠ **If it came to more than two hundred and twenty a week I would support it.**'],
  ['Mr Ayoub', '⚠ **Where does two hundred and twenty come from?**'],
  ['Nour', '⚠ **The 2020 counter turnover divided by the average counter sale, divided by fifty weeks, times the floor ratio.** **It is on the back of paper B.**'],
  ['Mr Ayoub', '⚠ **Then that is a real condition and it costs about nine thousand to test.** ⚠ **Now what is Bassel\'s?**'],
  ['Nour', 'I have not asked him.'],
  ['Mr Ayoub', '⚠ **Ask him. And the question is the other one:** ⚠ **what would make him abandon it?**'],
  ['Nour', 'He said: if the counted figure came in under a hundred and fifty he would drop it and not raise it again.'],
  ['Mr Ayoub', '⚠ **Which is worth more than yours.**'],
  ['Nour', 'Why?'],
  ['Mr Ayoub', '⚠ **Because yours is a condition for changing your mind and his is a condition for giving up a thing he wants.** ⚠ **The second is the one a decider can rely on** — **and the two conditions together turn an argument into a measurement that costs nine thousand.**'],
  ['Nour', 'And between a hundred and fifty and two hundred and twenty?'],
  ['Mr Ayoub', '⚠ **Then neither of you has to move and I decide.** ⚠ **Which is my job, and it is the only part of this that cannot be measured.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The overturning condition, both ways**',
  table(['', 'Not a condition', 'A condition'], [
    ['**yours**', '⚠ *I would need to be convinced the trade is there* — **a mood**', '⚠ *a counted figure over four weeks above 220 a week* — **and the arithmetic behind the 220 is attached**'],
    ['⚠ **theirs**', '**unasked**', '⚠ *under 150 and I drop it and do not raise it again* — **ask for it**'],
    ['⚠ **which is worth more**', '**yours, because you wrote it**', '⚠ **theirs** — **a condition for giving up a thing you want is worth more than a condition for changing your mind**'],
    ['⚠ **the gap between them**', '**pretended away**', '⚠ **named, and left to the decider** — **which is the part that cannot be measured**'],
  ], [1.6, 3.4, 4]),
  '⚠ **A condition that contains no number is a mood.** ⚠ *I would need to be convinced* **cannot be satisfied, cannot be tested, and cannot be shown to have been met** — **so it is a way of staying where you are while appearing open.**',
  '⚠ **Say what, measured how, and over how long.** ⚠ **A counted figure, somebody with a sheet in a doorway, four weeks, above two hundred and twenty** — **and then where the two hundred and twenty comes from, which is arithmetic and goes on the back of the page.**',
  '⚠ **Ask the other side for theirs, and ask the harder version.** ⚠ **Not *what would convince you* but *what would make you abandon it*** — **and a holder who answers that question has given the decider something nobody else can give.**',
  '⚠ **Their condition is worth more than yours.** ⚠ **Yours is a condition for changing your mind; theirs is a condition for giving up something they want** — **and the second costs its author something, which is why a decider relies on it.**',
  '⚠ **And name the gap.** ⚠ **Between a hundred and fifty and two hundred and twenty neither side has to move, and the decider decides** — **which is the one part of the question that cannot be measured, and saying so is what makes the rest of it measurable.**',
  '**Practise:** Take something you oppose. Write your condition with a number and a method. Then go and ask its holder what would make them abandon it.',
  '**Useful phrases:**  that is a mood, not a condition  ·  measured how, over how long?  ·  what would make you abandon it?  ·  a condition that costs its author something  ·  name the gap',
  '**Pronunciation – a condition as a measurement.** 🔊 **Track 16.6** Listen twice. ⚠ **The first says *above two hundred and twenty a week and I would support it* flatly.** ⚠ **The second lifts at the end.** **Flat, it is a threshold; lifted, it sounds like a dare, and a dare makes the other side argue about the number instead of counting.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a condition; B tests it.'));
out.push(dlg(null, [
  ['A', 'I would support it if __________.'],
  ['B', '⚠ **Is there a number in that?**'],
  ['A', '__________.'],
  ['B', '⚠ **Measured how, and over how long?**'],
  ['A', '__________.'],
  ['B', '⚠ **And where does the number come from?**'],
  ['A', '__________.'],
  ['B', '⚠ **Good. Now what would make the other side abandon it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And if the result falls between the two?**'],
]));
out.push(table(['Role card 1 — the mood that looks open', 'Role card 2 — the condition that costs its author'], [[
  '⚠ **A says they would need to be convinced the trade is there, and believes this is an open-minded position.** ⚠ **B asks convinced by what, measured how, over how long** — **three questions, and A has no answer to any of them.** ⚠ **B\'s point: a condition with no number in it cannot be satisfied or shown to have been met, so it is a way of staying still while appearing to move.**',
  '⚠ **A has a condition and has not asked the proposer for theirs.** ⚠ **B asks why the proposer\'s is worth more, and the answer is that giving up a thing you want costs something.** ⚠ **B\'s point: the question to ask is not *what would convince you* but *what would make you abandon it*** — **and a holder who answers it has given the decider the only thing nobody else can.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both conditions with their numbers. ⚠ Then say which is worth more and why, and what happens in the gap between them.'));
out.push(PHRASE_CARD(['a mood, not a condition', 'measured how?', 'where does the number come from?', 'what would make you abandon it?', 'name the gap']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** things you oppose. Write both conditions for each.'));
out.push(table(['The proposal', 'Your condition, with a number', 'Their condition for abandoning it', 'The gap'], [['', '', '', ''], ['', '', '', '']], [1.8, 3, 3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I oppose _______. I would support it if _______, measured by _______ over _______. The holder would abandon it if _______. Between those, _______ decides._'));
out.push(p('**Listener task:** count how many conditions had a number in them at the first attempt. ⚠ Then ask how many people had asked the holder for theirs, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes four conditions on the board — find the mood dressed as a condition and the one with no method in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE TWO CONDITIONS, AND WHAT THEY COST TO TEST. 11 December. N. Mansour. Attachment to papers A and B.**',
  table(['', 'The condition', 'Whose', 'What it costs to test'], [
    ['**1**', '⚠ **a counted walk-in figure on the Hama road above 220 a week, over four weeks, by one person with a sheet in a doorway**', '⚠ **mine** — **above it I support reopening**', '⚠ **about 9,000** — **one person, twenty working days, at the daily rate**'],
    ['**2**', '⚠ **the same counted figure below 150 a week** — **below it the proposal is dropped and not raised again**', '⚠ **Bassel\'s** — **and he offered it unasked when I put the question**', '⚠ **nothing further** — **the same count answers both**'],
  ], [0.4, 4.6, 2.2, 2.8]),
  '⚠ **Where the 220 comes from.** **2020 counter turnover 4.6 million, average counter sale 420, fifty trading weeks** — ⚠ **which is 219 transactions a week, rounded.** **I have not adjusted it for the smaller floor, because the smaller floor is the proposal\'s own case and adjusting it would be arguing in a number.**',
  '⚠ **Where the 150 comes from.** **Bassel\'s own figure, and his basis is that below 150 the counter cannot carry one member of staff.** ⚠ **I have checked it: at 420 a sale, 150 a week is 3.15 million a year of counter turnover, and the staff cost plus the 1.1 million rent is about 1.5.** **At our counter margin that is close to break-even, so his number is defensible and I would not have chosen a different one.**',
  '⚠ **The gap, named.** **Between 150 and 220 neither of us has to move and the decision is Mr Ayoub\'s.** ⚠ **That band is forty per cent wide and I am not going to pretend it is narrower.**',
  '⚠ **What this attachment does that the two papers cannot.** ⚠ **It converts a disagreement into a measurement that costs nine thousand** — **and it does so without either of us conceding anything, because each of us has named the figure at which we stop.** **Nine thousand against a decision about 1.1 million a year of rent is a ratio worth saying out loud.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where does the 220 come from, and what adjustment has the writer deliberately not made?'));
out.push(item('2', 'What does she say about Bassel\'s 150, and why does she check it?'));
out.push(item('3', 'What does the attachment do that the two papers cannot?'));
out.push(box('Writer\'s box', [
  '**The conditions attachment — five parts:** ⚠ **a table of *the condition · whose · what it costs to test*** → ⚠ **where each number comes from** → ⚠ **your check of THEIR number** → **the gap, named and measured** → ⚠ **and the ratio of the test cost to the decision.**',
  '⚠ **Show the arithmetic of your own number and say what you did not adjust.** ⚠ *I have not adjusted it for the smaller floor, because the smaller floor is the proposal\'s own case and adjusting it would be arguing in a number.* **That sentence is the whole of 16.2 in one line.**',
  '⚠ **Check their number and say that it is defensible.** ⚠ *I have checked it and I would not have chosen a different one.* **It costs nothing, it is true, and it is the sentence that makes the whole attachment credible** — **because a writer who has checked the other side\'s figure and found it sound has no thumb anywhere.**',
  '⚠ **Name the gap and measure it.** ⚠ **Forty per cent wide, and *I am not going to pretend it is narrower*** — **because a decider who finds the gap themselves will assume you hid it, and a decider who is given it knows exactly which part of the decision is theirs.**',
  '⚠ **Put the cost of the test against the size of the decision.** ⚠ **Nine thousand against 1.1 million a year** — **and say it out loud.** **A ratio of that order turns an argument into an obvious next step, and nobody has to win anything.**',
  '⚠ **And the general rule, worth one sentence:** ⚠ **two conditions with numbers in them convert a disagreement into a measurement** — **and they do it without either side conceding, because each has named the figure at which they stop rather than the figure they want.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the conditions attachment for a disagreement of yours (**80 words or more**). Use the frame.'));
out.push(p('**THE TWO CONDITIONS, AND WHAT THEY COST TO TEST. ______________. ______________.**   **The condition** | **Whose** | **What it costs to test**   ⚠ **______________** | ⚠ **mine** — **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________** — **and ______________** | ⚠ **______________**   ⚠ **Where the ______________ comes from. ______________.** ⚠ **I have not adjusted it for ______________, because ______________.**   ⚠ **Where the ______________ comes from. ______________.** ⚠ **I have checked it: ______________.** **______________, so ______________ and I would not have chosen a different one.**   ⚠ **The gap, named. ______________.** ⚠ **______________ and I am not going to pretend it is narrower.**   ⚠ **What this attachment does that the two papers cannot. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number and a method in both conditions', ''],
  ['The arithmetic of your own number, and what you did not adjust', ''],
  ['Their number checked, and said to be defensible', ''],
  ['The gap named and measured', ''],
  ['The cost of the test against the size of the decision', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the other side\'s condition. ⚠ The class says whether it costs its author anything, and whether the writer has checked it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a disagreement at your work that could be settled by a measurement (**200 to 240 words**). Give both conditions with numbers, say where each number comes from, name the gap, and price the test.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what does the test cost against the decision?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the test cheaper than a tenth of the decision? Usually all three — ⚠ **and in most of them nobody has ever proposed the measurement, which is the finding: arguments survive because measuring is somebody\'s job and arguing is nobody\'s.**'));
out.push(box('Homework', ['Write your final text. Then go to somebody whose proposal you oppose and ask what would make them abandon it, and write down the figure they give you (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.4 =======================
out.push(pb());
out.push(h2('16.4  Reading it to the person who holds it'));
out.push(p('**Function:** the recognition test   ·   **Grammar:** _is that what you mean? · is there anything in it you would not say?_   ·   **Pronunciation:** a reading that invites correction'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a time somebody described your position back to you. ⚠ Then say whether you recognised it, and what was missing.'));
out.push(p('**b**  Which invites a correction? _I hope I have represented your view fairly · is there anything in this you would not say?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say about the paper?   **A** that it is unfair   **B** that it is better than his own version, and that one sentence in it is not his   **C** that it is too favourable'));
out.push(p('**b**  Listen again. **1** Which sentence does he disown, and why? **2** What does he add that Nour had not thought of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  "There is one sentence in there I would not say"', [
  ['Nour', 'I have written the case for reopening and I want to read it to you. Not to argue about it. To find out whether it is yours.'],
  ['Bassel', 'Go on.'],
  ['Nour', '⚠ _The unit never failed as a shop. It failed as a warehouse with a door in it, and the thing that killed it cannot happen in sixty square metres on the Hama road._'],
  ['Bassel', '⚠ **That is better than what I said, and it is what I meant.** ⚠ **Where did the warehouse sentence come from?**'],
  ['Nour', 'The 2021 ledgers. Booked orders flat, counter lines down the whole 2.4 million.'],
  ['Bassel', '⚠ **I have never seen those ledgers.** ⚠ **Go on.**'],
  ['Nour', '_The counter lines were restocked on booked-order demand, because that is the only demand anybody counted._'],
  ['Bassel', '⚠ **Yes.** ⚠ **And there is one sentence in there I would not say.**'],
  ['Nour', 'Which?'],
  ['Bassel', '⚠ **The one about the customer who came twice and found the line out and did not come a third time.** ⚠ **I think it is true and I would not put it in my own paper, because I cannot show it and somebody will ask me to.**'],
  ['Nour', '⚠ **It is marked as an inference.**'],
  ['Bassel', '⚠ **Then leave it in and I will say in the meeting that it is yours and not mine.** ⚠ **That is better than you taking it out, because it is the strongest sentence in the paper and it should not belong to nobody.**'],
  ['Nour', 'And is anything missing?'],
  ['Bassel', '⚠ **One thing, and it is the thing I actually care about.** ⚠ **Hala\'s sister runs the pharmacy two doors from the Hama road site and has done for nine years.** ⚠ **It is not in any ledger and it is why I picked that street rather than another one** — **and your paper has made a better case than mine for a reason that is not my reason.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The recognition test**',
  table(['The question', 'What it gets', 'Why it works'], [
    ['⚠ *is it yours?*', '**recognition or not**', '⚠ **and it is asked before any argument** — *not to argue about it, to find out whether it is yours*'],
    ['⚠ *is there anything in it you would not say?*', '⚠ **the sentence they disown** — **and the reason, which is usually that they cannot show it**', '⚠ **a sentence its holder will not defend is a liability in the meeting, whoever wrote it**'],
    ['⚠ *is anything missing?*', '⚠ **the reason they actually care about** — **which is often not in any document**', '⚠ **and it is the question nobody asks, because the paper looks finished**'],
    ['⚠ **the attribution**', '⚠ *say it is yours and not mine*', '⚠ **better than removing it** — **the strongest sentence in a paper should not belong to nobody**'],
  ], [2.4, 3.1, 3.5]),
  '⚠ **Say why you are reading it before you read it.** ⚠ *Not to argue about it. To find out whether it is yours.* **Twelve words** — **and without them the holder listens for what to object to instead of for what is missing.**',
  '⚠ **Ask the three questions in order: is it yours · is there anything you would not say · is anything missing.** ⚠ **The third is the one nobody asks**, **because a paper that has been read aloud looks finished** — **and the third is the one that produced the pharmacy.**',
  '⚠ **A sentence the holder disowns is a liability, whoever wrote it.** ⚠ **Bassel will not defend the inference because he cannot show it and somebody will ask him to** — **which is a fact about the meeting and not about the sentence.**',
  '⚠ **And the answer is attribution, not deletion.** ⚠ *Leave it in and I will say it is yours and not mine.* **The strongest sentence in a paper should not belong to nobody** — **and a marked inference with a named author is stronger than an unmarked one and much stronger than no sentence.**',
  '⚠ **Expect the missing thing to be the real reason, and expect it not to be in any document.** ⚠ **The pharmacy two doors away, nine years, Hala\'s sister** — **and the paper had made a better case than its holder for a reason that was not his reason.** **That is what the third question is for.**',
  '**Practise:** Read a case you have written for somebody else back to them. Ask the three questions in order. Write down what is missing.',
  '**Useful phrases:**  not to argue about it  ·  is it yours?  ·  anything you would not say?  ·  anything missing?  ·  say it is mine and not yours',
  '**Pronunciation – a reading that invites correction.** 🔊 **Track 16.8** Listen twice. ⚠ **The first reads the paper\'s strongest sentence levelly, as a report.** ⚠ **The second reads it with conviction.** **Levelly, the holder listens for what is missing; with conviction, they listen for what to agree with, and you learn nothing.** Say it four times, levelly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a case; B is its holder.'));
out.push(dlg(null, [
  ['A', 'I have written the case for __________. Not to argue about it. To find out whether it is yours.'],
  ['B', '__________.'],
  ['A', '⚠ **Is there anything in it you would not say?**'],
  ['B', '⚠ **The sentence about __________. I would not put it in my own paper because __________.**'],
  ['A', '⚠ **It is marked as an inference. Shall I take it out?**'],
  ['B', '__________.'],
  ['A', '⚠ **And is anything missing?**'],
  ['B', '⚠ **One thing, and it is the thing I actually care about. __________.**'],
  ['A', '__________.'],
  ['B', '⚠ **It is not in any document, which is why it is not in your paper.**'],
]));
out.push(table(['Role card 1 — the question nobody asks', 'Role card 2 — the sentence the holder disowns'], [[
  '⚠ **A asks the first two questions and stops, because the paper now looks finished.** ⚠ **B has something that is not in it and will not volunteer it, because A has not asked.** ⚠ **B\'s point when A finally asks: the real reason for a proposal is often not in any document, which is exactly why a paper built from documents cannot contain it.**',
  '⚠ **A offers to delete the sentence B will not defend.** ⚠ **B refuses the deletion and offers attribution instead.** ⚠ **B\'s point: it is the strongest sentence in the paper and it should not belong to nobody** — **and a marked inference with a named author survives a meeting, where an unattributed one gets the whole paper doubted.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three questions in order. ⚠ Then write what was missing, and say why it was not in the paper.'));
out.push(PHRASE_CARD(['not to argue about it', 'is it yours?', 'anything you would not say?', 'anything missing?', 'it is mine, not yours']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Read a case you have written for somebody else back to them. Record what you learn.'));
out.push(table(['Is it theirs?', 'What they would not say, and why', 'What is missing', 'In a document?'], [['', '', '', ''], ['', '', '', '']], [1.6, 2.8, 2.6, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I read it to _______. They said _______. The sentence they would not say is _______, because _______. What was missing is _______, and it is _______ in any document._'));
out.push(p('**Listener task:** count how many papers had something missing. ⚠ Then ask how many of the missing things were in a document, and expect almost none — which is why the question has to be asked rather than researched.'));
out.push(p('**Board clinic:** your teacher writes three openings on the board — find the one that reads the paper with conviction and the one that asks only two of the three questions. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**PAPER A, THIRD DRAFT: WHAT THE READING PRODUCED. 12 December. N. Mansour. For Mr Ayoub.**',
  '⚠ **I read paper A to Bassel on the 11th, before circulating it, and asked three questions: is it yours, is there anything in it you would not say, and is anything missing.** **The reading took eleven minutes and produced three changes.**',
  table(['', 'What he said', 'What I have done'], [
    ['**1**', '⚠ **that the warehouse sentence is better than his own and that he had never seen the 2021 ledgers**', '⚠ **nothing** — **except to record here that the best sentence in the case for reopening was written from documents its proposer has never read**'],
    ['**2**', '⚠ **that he would not put the sentence about the customer who did not come back in his own paper, because he cannot show it**', '⚠ **left it in and attributed it** — *this inference is mine and not Mr Nassif\'s.* **He asked for that rather than for a deletion, on the ground that it is the strongest sentence in the paper and should not belong to nobody**'],
    ['**3**', '⚠ **that Hala\'s sister has run the pharmacy two doors from the Hama road site for nine years, and that this is why he chose that street** — **and it is in no ledger**', '⚠ **added as a numbered paragraph, in his words, marked as his** — **and it changes the case, because it is a reason for THAT site rather than for Homs in general**'],
  ], [0.4, 4.3, 4.3]),
  '⚠ **The third one is the point of the exercise and I had not expected it.** ⚠ **My paper made a better case for reopening than Bassel had made, and it made it for a reason that is not his reason** — **and a paper that is better than its holder\'s version and about something else is not a steelman, it is a different proposal with his name on it.**',
  '⚠ **What I am therefore recommending about the papers themselves.** **Paper A now carries both cases for reopening: the one from the ledgers, which is mine, and the one about the street, which is his.** ⚠ **They are marked, separately, with whose each one is** — **because Mr Ayoub is entitled to know that the stronger of the two arguments for reopening Homs was constructed by the person opposing it.**',
  '⚠ **And one thing I will not do.** **I will not weigh the pharmacy in paper A.** ⚠ **It is a reason and it is an unmeasured one, and paper A is not the place where things get weighed** — **but it is now in front of the decider, which is the only thing the reading was for.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What were the three things Bassel said, and what did the writer do about each?'));
out.push(item('2', 'Why does she say a paper better than its holder\'s version and about something else is not a steelman?'));
out.push(item('3', 'What does she refuse to do with the pharmacy, and why?'));
out.push(box('Writer\'s box', [
  '**The *what the reading produced* page — five properties:** ⚠ **the three questions, named, with the date and the length of the reading** → **a table of *what he said · what I have done*** → ⚠ **the finding you did not expect** → ⚠ **what you recommend about the papers** → **and the one thing you will not do.**',
  '⚠ **Record the questions and how long it took.** ⚠ **Eleven minutes** — **because the obvious objection to the recognition test is that it costs time, and eleven minutes against a decision about 1.1 million a year answers it without an argument.**',
  '⚠ **Put *what I have done* beside *what he said*, and allow *nothing*.** ⚠ **The first row\'s action is *nothing, except to record it here*** — **which is honest, and the recording is itself the action, because the fact that the best sentence came from documents the proposer has never read is a fact about the decision.**',
  '⚠ **Write down the finding you did not expect, in the words it occurred to you in.** ⚠ *A paper that is better than its holder\'s version and about something else is not a steelman, it is a different proposal with his name on it.* **That is a real danger of the technique and nobody warns about it.**',
  '⚠ **Mark whose each argument is.** ⚠ **The ledger case is the writer\'s and the street case is its holder\'s, and a decider is entitled to know that the stronger argument for reopening was built by the person against it** — **because it changes how much weight the opposition paper carries.**',
  '⚠ **And name what you will not do.** ⚠ **The pharmacy is not weighed in paper A, because paper A is not where things get weighed** — **but it is in front of the decider, which is the only thing the reading was for.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the *what the reading produced* page (**80 words or more**). Use the frame.'));
out.push(p('**______________, THIRD DRAFT: WHAT THE READING PRODUCED. ______________. ______________.**   ⚠ **I read ______________ to ______________ on ______________, before circulating it, and asked three questions: is it yours, is there anything in it you would not say, and is anything missing.** **The reading took ______________ and produced ______________ changes.**   **** | **What they said** | **What I have done**   ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   ⚠ **The ______________ one is the point of the exercise and I had not expected it. ______________.**   ⚠ **What I am therefore recommending about the paper itself. ______________.**   ⚠ **And one thing I will not do. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The three questions named, with the date and the duration', ''],
  ['*What I have done* beside each thing said, with *nothing* allowed', ''],
  ['The unexpected finding, in the words it occurred in', ''],
  ['Whose each argument is, marked', ''],
  ['The one thing you will not do, with its reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their third row. ⚠ The class says whether what was missing was in a document, and what that implies about papers built from documents.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody described your position back to you (**200 to 240 words**). Say what they got right, what you would not have said, what was missing, whether the missing thing was in any document, and whether you told them.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the missing thing in a document?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the writer asked what was missing? Usually none — ⚠ **and in all three something was missing, which is the finding: the question is never asked and the answer is always there.**'));
out.push(box('Homework', ['Write your final text. Then take a case you have written about somebody else, read it to them, and ask the third question (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.5 =======================
out.push(pb());
out.push(h2('16.5  Two papers, one decider'));
out.push(p('**Function:** putting both cases in front of one person   ·   **Grammar:** _paper A puts · paper B puts · neither is a recommendation_   ·   **Pronunciation:** a covering note read with no preference in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a decision at your work where only one side was ever written down. ⚠ Then say who wrote it, and what happened.'));
out.push(p('**b**  Which has no thumb on the scale? _paper A puts the case for and paper B, which I would ask you to read second, puts the case against · paper A puts the case for reopening; paper B puts the case against; both are nine hundred words and neither is a recommendation_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What three things does Nadia say give a covering note away?   **A** its length   **B** the order, the lengths, and a sentence offering to discuss one of them   **C** the signature'));
out.push(p('**b**  Listen again. **1** What is the fault in *I would ask you to read B second*? **2** What does Nadia say about the two papers being the same length?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  "Three things give a covering note away"', [
  ['Nour', 'The covering note says: paper A puts the case for reopening; paper B, which I would ask you to read second, puts the case against.'],
  ['Nadia', '⚠ **Take out *which I would ask you to read second*.**'],
  ['Nour', 'It is only an order of reading.'],
  ['Nadia', '⚠ **Second is the position that wins.** ⚠ **The last thing a reader reads is the thing they are holding when they decide** — **and you have asked for it, in writing, for your own paper.**'],
  ['Nour', 'Then no order at all.'],
  ['Nadia', '⚠ **Name them in the order the question arises. For reopening first, because somebody proposed it.** ⚠ **That is an order with a reason that is not about you.**'],
  ['Nour', 'What else gives it away?'],
  ['Nadia', '⚠ **The lengths. A is nine hundred words and B is sixteen hundred.**'],
  ['Nour', 'Because there is more to say against it.'],
  ['Nadia', '⚠ **There is more that you want to say against it, which is a different sentence.** ⚠ **A decider reading nine hundred for and sixteen hundred against has been told which one the writer believes, before reading a word of either.**'],
  ['Nour', 'So I cut B to nine hundred.'],
  ['Nadia', '⚠ **Or write A up to sixteen, if there is sixteen hundred words of case.** ⚠ **Equal length is not fairness, it is the removal of one signal** — **and if a case genuinely cannot fill the space, say so in the covering note and let the asymmetry be deliberate.**'],
  ['Nour', 'And the third thing?'],
  ['Nadia', '⚠ **The sentence offering to discuss.** ⚠ *I am happy to discuss paper B at any time.* **You have offered a conversation about one of the two papers.** **Offer both or neither.**'],
  ['Nour', 'Neither.'],
  ['Nadia', '⚠ **Neither, and then one line at the end that is the only honest thing a covering note can say:** ⚠ *the decision is yours and I have not made it in either paper.*'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The covering note with no thumb on the scale**',
  table(['The signal', 'The tell', 'The fix'], [
    ['⚠ **the order**', '⚠ *paper B, which I would ask you to read second*', '⚠ **the order in which the question arises** — **for reopening first, because somebody proposed it**'],
    ['⚠ **the lengths**', '**900 words for, 1,600 against**', '⚠ **equal, or an asymmetry declared in the note** — **equal length is not fairness, it is the removal of a signal**'],
    ['⚠ **the offer to discuss**', '⚠ *I am happy to discuss paper B at any time*', '⚠ **both or neither** — **and neither is better**'],
    ['⚠ **the closing line**', '⚠ **a recommendation disguised as a summary**', '⚠ *the decision is yours and I have not made it in either paper*'],
  ], [1.6, 3.4, 4]),
  '⚠ **Second is the position that wins.** ⚠ **The last thing a reader reads is the thing they are holding when they decide** — **so an order of reading is a recommendation, and asking for one in writing is a recommendation in writing.**',
  '⚠ **Order the papers by the order in which the question arises.** ⚠ **The case for first, because somebody proposed it and the proposal is what the meeting is about** — **and that is an order with a reason that has nothing to do with the writer.**',
  '⚠ **Equal length is not fairness; it is the removal of one signal.** ⚠ **Nine hundred for and sixteen hundred against tells a decider which one the writer believes before they have read a word** — **and *there is more to say against it* is almost always *there is more that I want to say against it*.**',
  '⚠ **Where a case genuinely cannot fill the space, declare the asymmetry.** ⚠ *Paper B is longer because it prices three alternatives and paper A prices none.* **A declared asymmetry is information; an undeclared one is a thumb.**',
  '⚠ **Offer to discuss both or neither, and neither is better.** ⚠ **An offer to discuss one paper is an offer to argue for it** — **and the reader hears the offer and not the even-handedness of the rest.**',
  '⚠ **And the only honest closing line is one sentence:** ⚠ *the decision is yours and I have not made it in either paper.* **Anything longer is a summary, and a summary of two opposed papers is a recommendation.**',
  '**Practise:** Write a covering note for two opposed papers. Then find the order, the lengths and the offer, and fix all three.',
  '**Useful phrases:**  second is the position that wins  ·  the order the question arises in  ·  equal length removes a signal  ·  both or neither  ·  I have not made it in either paper',
  '**Pronunciation – a note with no preference.** 🔊 **Track 16.10** Listen twice. ⚠ **The first says *paper A puts the case for reopening; paper B puts the case against* at one weight.** ⚠ **The second lingers on *against*.** **At one weight it is a list; lingering, it is an indication, and a decider hears it in half a second.** Say it four times at one weight.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a covering note; B finds the three signals.'));
out.push(dlg(null, [
  ['A', 'Paper A puts the case for __________; paper B, which __________, puts the case against.'],
  ['B', '⚠ **Which position wins?**'],
  ['A', '__________.'],
  ['B', '⚠ **So take that clause out. How long is each paper?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is the difference what there is to say, or what you want to say?**'],
  ['A', '__________.'],
  ['B', '⚠ **And have you offered to discuss either of them?**'],
  ['A', '__________.'],
  ['B', '⚠ **Both or neither. Now write the last line.**'],
]));
out.push(table(['Role card 1 — the order of reading', 'Role card 2 — the lengths'], [[
  '⚠ **A sees an order of reading as a courtesy and nothing more.** ⚠ **B asks which paper the decider will be holding when they decide.** ⚠ **B\'s point: second is the position that wins, so a requested order is a recommendation in writing** — **and the remedy is an order with a reason that is not about the writer, which is the order in which the question arose.**',
  '⚠ **A explains that paper B is longer because there is more to say against the proposal.** ⚠ **B asks whether that is what there is to say or what A wants to say.** ⚠ **B\'s point: either equalise them or declare the asymmetry and its reason** — **because a decider counts pages before reading them, and an undeclared difference of seven hundred words is the loudest thing in the bundle.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three signals. ⚠ Then write the closing line, and say why a summary of two opposed papers is a recommendation.'));
out.push(PHRASE_CARD(['second wins', 'the order it arose in', 'what I want to say', 'both or neither', 'I have not made it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take a decision at your work with two sides. Write the covering note and audit it.'));
out.push(table(['The two papers', 'The order, and its reason', 'The lengths', 'The closing line'], [['', '', '', ''], ['', '', '', '']], [2.2, 2.4, 1.6, 2.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Paper A puts _______ and paper B puts _______. I have named them in the order _______. They are _______ and _______ words, and the asymmetry is _______. The closing line is _______._'));
out.push(p('**Listener task:** count how many notes had an order of reading in them. ⚠ Then ask how many had the writer\'s own paper second, and expect nearly all of them.'));
out.push(p('**Board clinic:** your teacher writes four covering notes on the board — find the order of reading, the undeclared asymmetry and the offer to discuss one paper. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note, and answer the questions.'));
out.push(box(null, [
  '**HOMS: TWO PAPERS. 14 December. N. Mansour. For Mr Ayoub. Copy to Mr Nassif.**',
  '⚠ **Paper A puts the case for reopening. Paper B puts the case against. They are named in that order because the proposal came first and is what the meeting is about.**',
  '⚠ **Both are about fourteen hundred words.** **Paper A was nine hundred until the 12th and is now fourteen hundred, because Mr Nassif gave me a reason for the Hama road site that is in no ledger and I have put it in his words.** ⚠ **The two papers are the same length now because the cases are, and not because I have trimmed one.**',
  '⚠ **Two things in paper A are mine and not Mr Nassif\'s, and both are marked in it.** **One is an inference about customers who found a line out; he asked me to leave it in and attribute it rather than remove it. The other is the whole of the ledger argument, which is the strongest case for reopening in either paper and which he had not seen the figures for.**',
  '⚠ **The attachment is the two conditions.** **Mine: a counted walk-in figure above 220 a week over four weeks. His: below 150 and he drops it and does not raise it again.** ⚠ **Between 150 and 220 neither of us has to move. The count costs about nine thousand.**',
  '⚠ **I am not offering to discuss either paper, and I would rather not be asked to summarise them.** **Both are shorter than this covering note plus any summary I could write of them.**',
  '⚠ **The decision is yours and I have not made it in either paper.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are the papers named in the order they are, and why are they the same length?'));
out.push(item('2', 'What does the note say about the two things in paper A that are the writer\'s own?'));
out.push(item('3', 'Why does the writer say she would rather not be asked to summarise the papers?'));
out.push(box('Writer\'s box', [
  '**The covering note — six parts, and all of them short:** ⚠ **what each paper puts, and why in that order** → ⚠ **the lengths, and why they are what they are** → ⚠ **what in the other side\'s paper is yours** → **the conditions attachment, in two lines** → ⚠ **the refusal to summarise** → **and the closing line.**',
  '⚠ **Give the order a reason that is not about you.** ⚠ *Because the proposal came first and is what the meeting is about.* **Thirteen words** — **and they are the difference between an order and a recommendation.**',
  '⚠ **Say why the lengths are equal, and say that you did not trim.** ⚠ *The same length now because the cases are, and not because I have trimmed one.* **A reader who suspects trimming will discount the shorter paper**, **and the sentence costs eighteen words.**',
  '⚠ **Declare what in the other side\'s paper is your own.** ⚠ **The inference and the whole ledger argument** — **and the decider is entitled to know that the strongest case for reopening was built by the person opposing it**, **because it changes how much weight paper B carries.**',
  '⚠ **Refuse to summarise, and give the arithmetic.** ⚠ *Both are shorter than this covering note plus any summary I could write of them.* **It is true, it is checkable, and it is the only argument against summarising that a busy reader accepts.**',
  '⚠ **And end on one sentence.** ⚠ *The decision is yours and I have not made it in either paper.* **Nothing after it.** **A covering note that goes on after that line is reaching for the decision it has just handed over.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the covering note for two opposed papers of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________: TWO PAPERS. ______________. ______________. For ______________. Copy to ______________.**   ⚠ **Paper A puts ______________. Paper B puts ______________. They are named in that order because ______________.**   ⚠ **Both are about ______________ words.** **______________.** ⚠ **The two papers are the same length because ______________, and not because ______________.**   ⚠ **______________ things in paper A are mine and not ______________, and both are marked in it. One is ______________. The other is ______________.**   ⚠ **The attachment is ______________.** **Mine: ______________. Theirs: ______________.** ⚠ **Between those, ______________.**   ⚠ **I am not offering to discuss either paper, and I would rather not be asked to summarise them.** **______________.**   ⚠ **The decision is yours and I have not made it in either paper.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['An order with a reason that is not about the writer', ''],
  ['The lengths, and why, and *not because I have trimmed one*', ''],
  ['What in the other side\'s paper is the writer\'s own', ''],
  ['An offer to discuss both or neither', ''],
  ['One closing sentence, with nothing after it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their closing line. ⚠ The class says whether anything follows it, and whether the line itself contains a hint.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work where only one side was written down (**200 to 240 words**). Say who wrote it, what the other side would have said, who would have written it, what happened, and what two papers would have changed.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _who would have written the other paper?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the second paper never written? Usually all three — ⚠ **and in most cases the person who would have written it was in the room and was not asked, which is the cheapest failure in this unit.**'));
out.push(box('Homework', ['Write your final text. Then take a covering note of yours and find the order, the lengths and the offer to discuss, and fix all three (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.6 =======================
out.push(pb());
out.push(h2('16.6  The paper that loses'));
out.push(p('**Function:** writing the case you believe and watching it lose   ·   **Grammar:** _the decision went the other way and I think it was reasonable_   ·   **Pronunciation:** a losing position stated without resentment'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an argument you lost at work. ⚠ Then say what you wrote or said afterwards, and what you wish you had.'));
out.push(p('**b**  Which is the sentence to write afterwards? _I remain of the view that the decision was wrong · the decision went the other way on the pharmacy, which is a reason I did not weigh and could not have measured_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What decides it, and on what?   **A** the ledgers   **B** Mr Ayoub decides to take the count, and then to reopen if the count supports it — on the pharmacy and the nine thousand   **C** nothing is decided'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub say about paper B? **2** What does Nour write afterwards, and what does she refuse to write?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  "Your paper is the better paper and it loses"', [
  ['Mr Ayoub', 'Paper B is the better paper. It loses.'],
  ['Nour', 'On what?'],
  ['Mr Ayoub', '⚠ **On two things and neither is in paper B.** ⚠ **The pharmacy, which nobody can measure and which is why Bassel chose that street. And nine thousand, which is what your own attachment says it costs to find out.**'],
  ['Nour', 'So we take the count.'],
  ['Mr Ayoub', '⚠ **We take the count, for four weeks from 5 January, and if it comes in above two hundred and twenty we reopen.** ⚠ **Your number, not his.**'],
  ['Nour', 'And between a hundred and fifty and two hundred and twenty?'],
  ['Mr Ayoub', '⚠ **Then I decide again, and I will say now what I would probably do, which is take it** — **and you are entitled to have that in writing before the count rather than after.**'],
  ['Nour', 'Why tell me that now?'],
  ['Mr Ayoub', '⚠ **Because otherwise in February you will think the count decided it and it did not.** ⚠ **The count decides the easy half. I decide the band, and I have told you which way I lean, so that if you want to write anything more you write it in January and not in March.**'],
  ['Nour', 'I will not write anything more.'],
  ['Mr Ayoub', '⚠ **Then write the one sentence.**'],
  ['Nour', '⚠ **I will write that the decision went the other way on the pharmacy, which is a reason I did not weigh and could not have measured.**'],
  ['Mr Ayoub', '⚠ **And not that you remain of the view that it is wrong?**'],
  ['Nour', '⚠ **I do remain of that view and it is not worth a line, because nothing turns on it.** ⚠ **What turns on something is that a reason outside every document decided a question that four papers could not** — **and whoever reads this file in two years needs that sentence and does not need mine.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The paper that loses, and the sentence afterwards**',
  table(['', 'Not', 'Write'], [
    ['**what decided it**', '⚠ **left unstated, or *on balance***', '⚠ **the two things, named, and *neither is in paper B*** — **the pharmacy and the nine thousand**'],
    ['⚠ **your position**', '⚠ *I remain of the view that the decision was wrong*', '⚠ **nothing** — **it is true and nothing turns on it**'],
    ['⚠ **the sentence that is worth writing**', '**(missing)**', '⚠ *a reason outside every document decided a question four papers could not*'],
    ['⚠ **the lean, disclosed before the event**', '**nothing until February**', '⚠ *I will say now which way I lean, so that if you want to write more you write it in January* — **the decider\'s own discipline**'],
  ], [1.9, 3.1, 4]),
  '⚠ **The better paper can lose, and a writer who has not understood that will write the resentment instead of the finding.** ⚠ **Paper B was the better paper and it lost on two things, neither of which was in it** — **a reason nobody can measure, and the cost of finding out.**',
  '⚠ **Do not write *I remain of the view*.** ⚠ **It is usually true and nothing turns on it** — **and a file note recording a position that changes no act is a sentence about the writer.** **The dissent that is worth minuting is the one with a trigger on it (Book 1, 12.7), and this one has none.**',
  '⚠ **Write the sentence that a reader in two years needs.** ⚠ *A reason outside every document decided a question that four papers could not.* **Thirteen words**, **and they are the only durable finding in the whole episode** — **because the papers will be in the file and the pharmacy will not.**',
  '⚠ **Notice what the decider does, because it is the rarer discipline.** ⚠ **He tells her before the count which way he leans in the undecided band** — **so that if she wants to write more she writes it in January and not in March.** **A lean disclosed in advance is worth more than any reason given afterwards.**',
  '⚠ **And say what the measurement decides and what it does not.** ⚠ **The count decides the easy half; the band is the decider\'s** — **and a writer who believes the count decided everything will be surprised in February by a decision that was always going to be made by a person.**',
  '**Practise:** Take an argument you lost. Write what decided it, whether it was in your paper, and the one sentence a reader in two years needs.',
  '**Useful phrases:**  the better paper and it loses  ·  neither is in paper B  ·  nothing turns on it  ·  a reason outside every document  ·  I will say which way I lean',
  '**Pronunciation – a losing position without resentment.** 🔊 **Track 16.12** Listen twice. ⚠ **The first says *the decision went the other way on the pharmacy* levelly.** ⚠ **The second stresses *the pharmacy*.** **Levelly, it records a cause; stressed, it says *on THAT*, which is the resentment the sentence was written to leave out.** Say it four times, levelly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has lost; B asks the three questions.'));
out.push(dlg(null, [
  ['B', '⚠ **What decided it?**'],
  ['A', '__________.'],
  ['B', '⚠ **Was it in your paper?**'],
  ['A', '__________.'],
  ['B', '⚠ **Could it have been measured?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then what is the sentence a reader needs in two years?**'],
  ['A', '__________.'],
  ['B', '⚠ **And do you want to write that you remain of your view?**'],
  ['A', '⚠ **I do remain of it, and __________.**'],
]));
out.push(table(['Role card 1 — the resentment sentence', 'Role card 2 — what the measurement does not decide'], [[
  '⚠ **A wants to record that they remain of the view that the decision was wrong.** ⚠ **B asks what act changes if that sentence is on the file, and the answer is none.** ⚠ **B\'s point: a dissent worth minuting has a trigger on it; one with no trigger is a sentence about the writer** — **and the sentence that IS worth writing is the one about the reason outside every document.**',
  '⚠ **A believes the count will settle it and is relieved.** ⚠ **B asks what happens between a hundred and fifty and two hundred and twenty.** ⚠ **B\'s point: the measurement decides the easy half and a person decides the band** — **so a writer who wants to say anything more about the band should say it in January, before the count, which is what the decider\'s disclosed lean makes possible.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two things it was decided on. ⚠ Then write the sentence for the file, and say what the count does not decide.'));
out.push(PHRASE_CARD(['what decided it?', 'it was not in my paper', 'nothing turns on it', 'outside every document', 'which way I lean']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** arguments you lost. Work each one out.'));
out.push(table(['The argument', 'What decided it', 'Was it in your paper?', 'The sentence for the file'], [['', '', '', ''], ['', '', '', '']], [1.8, 2.4, 1.6, 3.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I lost on _______. It was decided on _______, which _______ in my paper. It _______ have been measured. The sentence for the file is: _______._'));
out.push(p('**Listener task:** count how many were decided on something that was not in anybody\'s paper. ⚠ Then ask how many of those could have been measured, and expect about half — which is the half that should have been.'));
out.push(p('**Board clinic:** your teacher writes four file sentences on the board — find the resentment and the one that records no cause at all. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note, and answer the questions.'));
out.push(box(null, [
  '**HOMS: THE DECISION, AND ONE SENTENCE OF MINE. 16 December. N. Mansour. On the Homs file, with papers A and B and the conditions attachment.**',
  '⚠ **The decision, 16 December, Mr Ayoub.** **A walk-in count on the Hama road for four weeks from 5 January, by one person with a sheet, at a cost of about nine thousand.** ⚠ **Above 220 a week the unit is reopened. Below 150 the proposal is dropped and not raised again. Between the two the decision is his and he has recorded, before the count, that he would probably take it.**',
  '⚠ **What it was decided on, and neither thing is in either paper.** **First, that Hala\'s sister has run the pharmacy two doors from the site for nine years, which is why Mr Nassif chose that street and which nobody can measure.** ⚠ **Second, that nine thousand is a small price for a number this company has never had, whatever the number turns out to be.**',
  '⚠ **One sentence of mine, for whoever reads this in two years.** ⚠ **A reason outside every document decided a question that four papers could not.** **The ledgers, the conditions, both cases and the costings are all on this file and none of them contains the pharmacy.**',
  '⚠ **What I have not written, and have decided not to.** **I remain of the view that reopening Homs is a mistake.** ⚠ **Nothing turns on that: I have no trigger to attach to it, the count will not test it, and a position with no trigger is a sentence about me rather than about the decision.** **It is here in this paragraph and it is not a dissent.**',
  '⚠ **And one thing I am recording for my own sake rather than the file\'s.** **Paper A is a better case than Paper B and I wrote both.** ⚠ **I did not expect that and I have thought about it since: the case I was against was the one I had the documents for, and the case I held rested on a judgement about management time that I could not evidence** — **which is 16.3\'s lesson arriving from the wrong direction.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the three outcomes the decision provides for, and which one is the decider\'s?'));
out.push(item('2', 'What is the one sentence for a reader in two years, and why is it the durable one?'));
out.push(item('3', 'What has the writer decided not to write, and on what ground?'));
out.push(box('Writer\'s box', [
  '**The note on a decision you lost — five parts:** ⚠ **the decision, with its thresholds and its disclosed lean** → ⚠ **what it was decided on, and whether it was in any paper** → ⚠ **the one sentence for a later reader** → ⚠ **what you have decided not to write, and why** → **and what you are recording for your own sake.**',
  '⚠ **Record the decider\'s disclosed lean.** ⚠ *He has recorded, before the count, that he would probably take it.* **It is the rarest thing in the whole episode and the file should keep it** — **because in February it is the difference between a decision and a surprise.**',
  '⚠ **Say what it was decided on and that neither thing was in either paper.** ⚠ **A decision made on grounds absent from all the papers is the most important fact about it**, **and it is the fact a file never records** — **because the papers are what gets filed.**',
  '⚠ **Write one sentence for the reader in two years and make it a finding, not a position.** ⚠ *A reason outside every document decided a question that four papers could not.* **And then list what IS on the file, so that the absence is visible.**',
  '⚠ **Say what you are not writing and give the test.** ⚠ **No trigger, no test, no act that changes** — **so it is a sentence about the writer.** **Putting it in a paragraph headed *what I have not written* is honest and is not a dissent**, **and the distinction is worth making explicitly.**',
  '⚠ **And keep one paragraph for yourself.** ⚠ *The case I was against was the one I had the documents for.* **A note that records only what the file needs loses the thing the writer learned** — **and the writer is going to be the main reader of this file.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the note on a decision that went against you (**80 words or more**). Use the frame.'));
out.push(p('**______________: THE DECISION, AND ONE SENTENCE OF MINE. ______________. ______________. On the ______________ file.**   ⚠ **The decision, ______________, ______________.** **______________.** ⚠ **______________.**   ⚠ **What it was decided on, and neither thing is in either paper.** **First, ______________.** ⚠ **Second, ______________.**   ⚠ **One sentence of mine, for whoever reads this in ______________ years.** ⚠ **______________.** **______________ are all on this file and none of them contains ______________.**   ⚠ **What I have not written, and have decided not to.** **I remain of the view that ______________.** ⚠ **Nothing turns on that: ______________.** **It is here in this paragraph and it is not a dissent.**   ⚠ **And one thing I am recording for my own sake rather than the file\'s. ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.**'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The thresholds, and the decider\'s disclosed lean if there was one', ''],
  ['What it was decided on, and whether it was in any paper', ''],
  ['One sentence for a later reader, as a finding and not a position', ''],
  ['What you are not writing, with the no-trigger test', ''],
  ['One paragraph for your own sake', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *one sentence*. ⚠ The class says whether it is a finding or a position, and whether a stranger could use it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an argument you lost at work (**200 to 240 words**). Say what the two cases were, what it was decided on, whether that was in anybody\'s paper, what you wrote afterwards, and what one sentence you would write now.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the sentence a finding or a position?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the writer record anything at all afterwards? Usually none — ⚠ **and in all three something was decided on a ground that is now in nobody\'s memory, which is what the one sentence prevents.**'));
out.push(box('Homework', ['Write your final text. Then take one argument you lost and write the single sentence a reader would need in two years (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 16.7 =======================
out.push(pb());
out.push(h2('16.7  Review & Mediate: the case for the decision we took'));
out.push(p('**Function:** writing the case for a decision you opposed   ·   **Review:** the strong form · marking your view out · the conditions · the recognition test · the two papers · the paper that loses'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Where does the strong version of a case come from, and where does the straw version come from?',
  '**2** What are the four places a writer\'s own view leaks, and which is hardest to see?',
  '**3** Whose overturning condition is worth more, and why?',
  '**4** What are the three questions of the recognition test, and which is never asked?',
  '**5** What are the three signals in a covering note, and which position wins?',
  '**6** What sentence is worth writing after you lose, and what sentence is not?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour asked to write, and why her?   **A** her own paper again   **B** the case for the Homs decision, for the bank, because she is the only person who can write it without a word of advocacy in it   **C** nothing'));
out.push(p('**b**  Listen again. **1** What does Nadia say about who should write a paper for a lender? **2** What does Nour insist on, and what does Mr Ayoub grant?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  "Write the case for the thing you lost"', [
  ['Nadia', 'The bank will want a paper on Homs before it will look at the four million again.'],
  ['Mr Ayoub', '⚠ **Bassel should write it. It is his proposal.**'],
  ['Nadia', '⚠ **Bassel believes it, which is the problem.** ⚠ **A lender reading a paper by somebody who wants a thing reads it for what has been left out** — **and Bassel has not read the ledgers, so he will leave out the 2021 figures and the committee will find them.**'],
  ['Mr Ayoub', 'Then Nour.'],
  ['Nour', '⚠ **I am against it.**'],
  ['Nadia', '⚠ **Which is why you can write it.** ⚠ **You have already written the strongest case for it, you have marked what in it is yours, and there is no sentence you need to defend.** ⚠ **A paper by the person who opposed the decision cannot be read for what has been left out, because they had every reason to leave nothing in.**'],
  ['Nour', '⚠ **It is still advocacy. I would be asking them for money for something I think is a mistake.**'],
  ['Mr Ayoub', '⚠ **It is not advocacy, it is the company\'s case, and the company has decided.** ⚠ **Say what you need.**'],
  ['Nour', '⚠ **Three things.** ⚠ **One: the paper says the decision was taken on 16 December and names you as having taken it. Two: it says the count is being done and gives the thresholds, including mine. Three: it says in one line that the paper was written by the person who argued against it.**'],
  ['Mr Ayoub', '⚠ **The third one. Why?**'],
  ['Nour', '⚠ **Because the committee will work it out from the conditions attachment if I do not say it, and then they will wonder what else I did not say.** ⚠ **And because it makes the rest of the paper worth more, not less.**'],
  ['Nadia', '⚠ **That is the only sentence in this conversation nobody could have written for you.**'],
  ['Mr Ayoub', '⚠ **Granted, all three.** ⚠ **And when the count comes in, whichever way it goes, you write that paper too.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – writing the case for a decision you opposed**',
  table(['What happens', 'What is said', 'What it does'], [
    ['⚠ **the proposer is ruled out**', '⚠ *Bassel believes it, which is the problem* — **and he has not read the ledgers**', '⚠ **a lender reads a believer\'s paper for what is missing** — **and finds it**'],
    ['⚠ **the opponent is chosen**', '⚠ *a paper by the person who opposed it cannot be read for what has been left out*', '⚠ **because they had every reason to leave nothing in** — **which is the whole mechanism**'],
    ['⚠ **the objection**', '⚠ *I would be asking them for money for something I think is a mistake*', '**and the answer: it is the company\'s case and the company has decided**'],
    ['⚠ **the three conditions**', '**the date and the decider named · the count and both thresholds · and one line saying who wrote it**', '⚠ **the third is the one nobody would think to ask for**'],
    ['⚠ **why the third**', '⚠ *they will work it out from the attachment, and then wonder what else I did not say*', '⚠ **and it makes the paper worth more, not less**'],
  ], [1.9, 3.5, 3]),
  '⚠ **The person who should write a case for a lender is not the person who believes it.** ⚠ **A believer\'s paper gets read for what is missing, and something always is** — **where a paper by the opponent of the decision cannot be read that way, because they had every reason to leave nothing in.**',
  '⚠ **This is not advocacy and the distinction matters.** ⚠ **The company has decided; the paper is the company\'s case and not the writer\'s** — **and a writer who cannot separate those two will either refuse the work or do it badly.**',
  '⚠ **State the conditions you need, and there are usually three.** ⚠ **The date and the decider named · the mechanism and its thresholds, including your own · and one line saying who wrote it.** **None of them is a protection for the writer; all three are information the reader is going to want.**',
  '⚠ **Disclose your own position in one line, and the reason is arithmetic.** ⚠ **The reader will work it out from the attachment, and a reader who works something out that you did not tell them starts wondering what else you did not tell them** — **and that doubt is worth more than the disclosure costs.**',
  '⚠ **And it makes the paper worth more.** ⚠ **A case for a decision, written by the person who argued against it and saying so, is the most credible document a company can produce about its own judgement** — **and almost no company ever produces one.**',
  '**Practise:** Take a decision at your work that went against you. Write the company\'s case for it, and the one line saying who wrote it.',
  '**Useful phrases:**  the believer\'s paper gets read for what is missing  ·  it is the company\'s case  ·  say what you need  ·  they will work it out  ·  worth more, not less',
  '**Pronunciation – a company\'s case, not yours.** 🔊 **Track 16.14** Listen twice. ⚠ **The first says *this paper was written by the person who argued against the decision* levelly, as a fact.** ⚠ **The second slows and emphasises *argued against*.** **Level, it is provenance; emphasised, it is a protest, and a protest in a paper to a lender undoes the paper.** Say it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for the paper; B is the opponent of the decision. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A explains why the believer cannot write it and why the opponent can**, **and the reason is about how a lender reads and not about fairness.** ⚠ **When B objects that it is advocacy, A separates the company\'s case from B\'s own view in one sentence.** ⚠ **And A asks B what they need, and grants all of it.**',
  '⚠ **B objects once, properly, and then names three conditions** — **the date and decider, the mechanism with both thresholds, and one line saying who wrote it.** ⚠ **B gives the arithmetic reason for the third: the reader will work it out anyway, and then wonder what else was withheld.** ⚠ **And B does not ask for anything that protects B.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason the believer cannot write the paper. ⚠ Then write the three conditions, and say which one nobody would think to ask for.'));
out.push(PHRASE_CARD(['read for what is missing', 'the company has decided', 'say what you need', 'they will work it out', 'worth more, not less']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a decision you opposed. Write the company\'s case and your conditions.'));
out.push(table(['The decision, and who took it', 'The company\'s case, in two sentences', 'Your three conditions', 'The disclosure line'], [['', '', '', ''], ['', '', '', '']], [2, 2.6, 2.4, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the paper. This is the **fourth** unit of this book, and the unwritten thing is this: ⚠ **the most credible document a company can produce about its own judgement is the case for a decision, written by the person who argued against it and saying so** — **and almost no company ever produces one, because everybody assumes that the person who wants a thing is the person to ask for it; so a unit about writing an argument you do not hold ends with the only reader who was never in the room, and the reason the paper works is the reason nobody would predict: its author had every motive to leave something out and did not.**'));
out.push(p('_The decision is _______, taken by _______ on _______. The company\'s case is _______. My conditions are _______, _______ and _______. And the line is: this paper was written by _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 2 **obligation-and-evidence word list**: _the strongest honest form · an attached view · the overturning condition both ways · the recognition test · a covering note with no steer · the paper that loses_. ⚠ **Twenty-four items of the seventy-two, and this is the one-third mark.**'));
out.push(p('**Board clinic:** your teacher writes three exchanges on the board — look for one where the opponent asks for a protection rather than for information, and one where the disclosure line is a protest. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 1)', 10));
out.push(p('⚠ **This unit is Part 1: matching, seven questions against five short texts, and it is the first time in Book 2.** Read the five extracts and answer questions **1–7**. ⚠ **A text may be the answer to more than one question, and the five texts are deliberately similar** — **so hunt for the difference and not for the subject.**'));
out.push(box(null, [
  '**FIVE EXTRACTS FROM PAPERS PUT TO ONE DECIDER.**',
  '**A**  _This paper puts the case for the proposal. It is not my view; my view is in paper B. I have not weighed the proposal against other uses of the money, which is an argument against it and belongs in paper B._',
  '**B**  _I have tried throughout to be objective and to give both sides their due weight, and I hope the reader will feel that I have succeeded in doing so. On balance the second course seems preferable._',
  '**C**  _The case needs three things to be true: that the counter trade of 2019 was real; that walk-ins are counted from the first week; and that 1.1 million is the rent rather than the opening offer. The first two can be established in a month._',
  '**D**  _I would support the proposal if a counted figure over four weeks exceeded 220 a week. Mr Nassif has said he would abandon it below 150. The count costs about nine thousand against a decision on 1.1 million a year of rent._',
  '**E**  _The decision went the other way on a reason that is in neither paper. I remain of my own view, nothing turns on that, and I have not recorded it as a dissent because I have no trigger to attach to it._',
]));
out.push(p('**1**  This writer states a threshold at which they would change position.'));
out.push(p('**2**  This writer claims to be impartial and then recommends a course.'));
out.push(p('**3**  This writer says where their own opinion can be found.'));
out.push(p('**4**  This writer prices the cost of settling the question.'));
out.push(p('**5**  This writer lists conditions and says how soon they can be tested.'));
out.push(p('**6**  This writer explains why they have not recorded a disagreement formally.'));
out.push(p('**7**  This writer names something they have deliberately left out, and where it belongs.'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 2 — a report, 120 to 140 words, 20 marks.** **Four content points, all four present, and a report takes headings.** ⚠ **This is the second Part 2 of Book 2; the odd units take Part 1.**',
  '⚠ **A report putting two cases takes three headings:** ⚠ **_The case for_ · _The case against_ · _What would settle it_.** **Three headings cost six words** — **and the third is the one that makes 135 words a report rather than a summary of a quarrel.**',
  '⚠ **Give the two cases the same number of sentences.** ⚠ **Two and two, at this length** — **because at 135 words a reader counts sentences the way they count pages, and three against one is a recommendation.**',
  '⚠ **In *what would settle it*, put a figure and a threshold.** ⚠ *A four-week count above 220 a week; about nine thousand to take.* **Twelve words**, **and they are the only words in the report that could end the disagreement.**',
  '⚠ **Part 1 tip, for the five extracts above.** ⚠ **Four of the seven questions turn on a single clause, and the five texts are all about the same decision** — **so the subject will not separate them.** ⚠ **Question 2 is the trap: B is the only text that CLAIMS impartiality, and the claim is the tell.**',
  '⚠ **And watch question 7.** **Three texts mention something left out** — ⚠ **but only A says where it belongs**, **and the question asks for both halves.** **A text that says what it has omitted and not where the omission goes is not the answer.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write a report putting both sides of a decision at your work (**120 to 140 words**). Include **the case for** · **the case against** · **what would settle it, with a figure** · and **who wrote the report and what their own view is**.'));
out.push(p('**______________**   ⚠ **______________. ______________.**   **______________**   ⚠ **______________. ______________.**   **______________**   ⚠ **______________, at a cost of about ______________.** **Above ______________ the question is settled; below ______________ it is dropped.**   ⚠ **This report was written by ______________, whose own view is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. ⚠ **Then say what your correction would cost the writer.** Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three headings', ''],
  ['The same number of sentences on each side', ''],
  ['A figure and a threshold in *what would settle it*', ''],
  ['The writer\'s own view disclosed in one line', ''],
  ['120 to 140 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the company\'s case for a decision you opposed (**200 to 240 words**). Put the case in its strongest honest form, name the decision and its decider, give the mechanism and both thresholds, and disclose in one line who wrote it.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take a decision at your work that went against you and write the one line disclosing who wrote the paper and what their view is (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  My own view is not in this paper and ___ attached separately.   a) is   b) are   c) being',
  '2  The case is not that the market has improved ___ that the unit never failed as a shop.   a) and   b) or   c) but',
  '3  I would support it ___ a counted figure exceeded 220.   a) if   b) unless   c) whether',
  '4  He said he ___ abandon it below 150.   a) will   b) would   c) would to',
  '5  Is there anything in it you ___ not say?   a) would   b) will   c) do',
  '6  They are named in that order ___ the proposal came first.   a) because of   b) because   c) for',
  '7  The decision went the other way ___ a reason that is in neither paper.   a) in   b) by   c) on',
  '8  This paper ___ written by the person who argued against it.   a) was   b) is   c) has',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 16.15** Listen to the conversation about the bank paper. Complete the note.   Why the proposer cannot write it: ______   Why the opponent can: ______   The objection, and the answer to it: ______   The three conditions: ______   The reason for the third: ______   What else she is asked to write: ______'));
out.push(p('**C  Reading.** Read the covering note at 16.5 again. Name the three signals that give a covering note away, say which position wins, and say why equal length is not the same as fairness.'));
out.push(p('**D  Writing.** Take a proposal you disagree with. Write the strongest honest form of it in two sentences, and your own overturning condition with a number in it (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Nadia', 'The bank will want a paper on Homs before it will look at the four million again.'],
  ['Mr Ayoub', 'Bassel should write it. It is his proposal.'],
  ['Nadia', '⚠ **Bassel believes it, which is the problem.** ⚠ **A lender reading a paper by somebody who wants a thing reads it for what has been left out** — **and he has not read the ledgers, so he will leave out the 2021 figures and the committee will find them.**'],
  ['Mr Ayoub', 'Then Nour.'],
  ['Nour', 'I am against it.'],
  ['Nadia', '⚠ **Which is why you can write it. A paper by the person who opposed the decision cannot be read for what has been left out, because they had every reason to leave nothing in.**'],
  ['Nour', 'It is still advocacy. I would be asking them for money for something I think is a mistake.'],
  ['Mr Ayoub', '⚠ **It is not advocacy, it is the company\'s case, and the company has decided. Say what you need.**'],
  ['Nour', '⚠ **Three things. That the paper names the decision\'s date and you as having taken it. That it gives the count and both thresholds, including mine. And that it says in one line that it was written by the person who argued against it.**'],
  ['Mr Ayoub', 'The third one. Why?'],
  ['Nour', '⚠ **Because they will work it out from the conditions attachment, and then they will wonder what else I did not say.** ⚠ **And because it makes the rest of the paper worth more, not less.**'],
  ['Mr Ayoub', '⚠ **Granted, all three. And when the count comes in, whichever way it goes, you write that paper too.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**16.1** write a case you reject in the form its holder would write with three days and your documents',
  '**16.2** find the three or four words in your own paper that carry your verdict, and delete them',
  '**16.3** write an overturning condition with a number and a method, and ask the holder for theirs',
  '**16.4** read a case to the person who holds it, and ask the question nobody asks',
  '**16.5** write a covering note with no order of reading, no undeclared asymmetry and no offer to discuss one paper',
  '**16.6** record a decision that went against you without writing the resentment',
  '**16.7** write the company\'s case for a decision you opposed, and say in one line that you did',
], C.lblue, C.navy));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 2 · Syria Edition · Unit 16 · Student\'s Book');
module.exports = out;
