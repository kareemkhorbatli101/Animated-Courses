// Proactive Business English B2 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'the revenue case · a counter-argument · the strongest version of a case · to put the other side · a premise · a material fact · a figure with a source · the base of a percentage · to be derived from · a smaller ask · to narrow a request · an answerable question · to pre-read a paragraph · the hardest paragraph · to be read against you · a reader who disagrees · the burden of proof · to carry a reader · a line of argument · to stand or fall on · a load-bearing fact · to overstate a case · to understate a case · a decision half-taken · an inclination · a point conceded in advance · to be visibly poorer · a case put better than its owner put it · the sentence a reader will quote · an unanswerable paper · a fact that helps the other side · the one figure that decides it';
const COLLOC = 'to give ground · to put a case · to grant a point · to press a case · to meet an objection · to source a figure · to take a case on trust · to turn a reader';
const BACK_AT_B2 = 'a concession · inference · ledger';

out.push(h1('Unit 3  The Case Against a Decision Already Half-Taken'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  make a concession that costs you something',
  '**3.2**  write *I may be wrong about this* as a strength and not a hedge',
  '**3.3**  put the other side better than its owner put it',
  '**3.4**  find the one figure that decides it, and give it a source',
  '**3.5**  say what you are *not* asking for',
  '**3.6**  read your hardest paragraph to the person it is about, before you send it',
  '**3.7**  Review & Mediate: what makes a paper readable by the person who disagrees with it',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The paper itself, and what is in the way', [
  '⚠ **Four pages went to Mr Ayoub on 18 February and came back on the 20th with three words on the first page: _put it better_.** **Not *you are wrong*. Not *I disagree*.** ⚠ *Put it better.*',
  '⚠ **What was wrong with it was that it won every argument.** **Four pages, eleven points, and not one of them conceded anything** — **and a man who has said out loud that this is the best thing in ten years was never going to be moved by a document that treats his judgement as eleven mistakes.**',
  '⚠ **This unit is the paper being rebuilt.** **The first version argued. The second version concedes the revenue case in the second sentence, puts Mr Ayoub\'s argument better than he put it, rests everything on one figure from the ledger, and asks for something smaller than a refusal.** ⚠ **It is forty words shorter and it is the one he read twice.**',
], C.lyellow, C.orange));

// ======================= CYCLE 3.1 =======================
out.push(pb());
out.push(h2('3.1  The concession that costs you something'));
out.push(p('**Function:** conceding in a way the reader can see is expensive   ·   **Grammar:** _X is better than Y, and I have nothing to set against it_   ·   **Pronunciation:** a concession said without a rising _but_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a time somebody conceded something to you in an argument. Say whether it cost them anything.'));
out.push(p('**b**  Which concession costs the writer something? _Of course there are advantages to the proposal, but we must also consider the risks. · The revenue case is better than anything we have been offered in ten years, and I have nothing to set against it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say a free concession does?   **A** nothing   **B** it warns the reader that the real argument is coming   **C** it persuades'));
out.push(p('**b**  Listen again. **1** What is the test of a real concession? **2** Why does she say *but* is the problem?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  "A concession that costs you nothing is a warning"', [
  ['Nour', 'I did concede things. Page one, paragraph two: *of course there are advantages, but*.'],
  ['Nadia', '⚠ **Read the sentence again and stop at the comma.**'],
  ['Nour', '*Of course there are advantages —*'],
  ['Nadia', '⚠ **What did that cost you?**'],
  ['Nour', '…Nothing. It is a shape, not a statement.'],
  ['Nadia', '⚠ **And every reader in the world knows the shape.** ⚠ **A concession that costs you nothing is a warning**: it tells the reader the real argument starts after the comma, and he begins reading for it instead of reading what you wrote.'],
  ['Nour', 'So what would cost me something?'],
  ['Nadia', '⚠ **Say the best thing about his case and then do not say *but*.** ⚠ **Put a full stop there and leave it standing for a sentence.** *The revenue case is better than anything we have been offered in ten years.* **Full stop.'],
  ['Nour', 'That is terrifying to write.'],
  ['Nadia', '⚠ **It is, and that is how you know it is a concession.** ⚠ **The test is whether you are visibly poorer for having written it** — **whether a reader who stopped there would think you had lost.**'],
  ['Nour', 'And then what?'],
  ['Nadia', '⚠ **Then one more sentence that costs you.** *And I have nothing to set against it.* ⚠ **Because you do not.** **There is no counter-figure in your four pages, and pretending there is was the weakest thing in them.**'],
  ['Nour', 'If I concede the revenue case, what is left of my paper?'],
  ['Nadia', '⚠ **One figure and one request.** ⚠ **Which is a paper, and four pages of eleven arguments was not.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The concession that costs something**',
  table(['', 'Free', 'Costly'], [
    ['**what it says**', '*of course there are advantages, but…*', '⚠ **_the revenue case is better than anything we have been offered in ten years._**'],
    ['**the next word**', '⚠ **_but_** — and the reader was waiting for it', '⚠ **a full stop, and then _and I have nothing to set against it_**'],
    ['**what it costs**', '**nothing** — it is a shape, not a statement', '⚠ **a reader who stopped there would think you had lost**'],
    ['**what it does**', '⚠ **warns the reader that the real argument is coming**', '⚠ **makes him read what you actually wrote**'],
  ], [1.3, 2.2, 2.5]),
  '⚠ **A concession that costs you nothing is a warning.** **Every reader knows the *of course… but* shape**, and the moment they see it they stop reading your concession and start reading for the argument after the comma.',
  '⚠ **The test: are you visibly poorer for having written it?** ⚠ **Would a reader who stopped at your full stop think you had lost?** **If not, you have not conceded anything.**',
  '⚠ **Do not say *but*.** **Put a full stop after the best thing about their case and let it stand for a whole sentence.** ⚠ **The silence is the concession.**',
  '⚠ **Then add the sentence that costs you more, not less.** ⚠ *And I have nothing to set against it.* **If you have no counter-figure, say so** — **pretending to one is the weakest thing a paper can do, and a reader who finds the pretence stops believing the figures you do have.**',
  '⚠ **And expect the paper to get shorter.** **Conceding the revenue case removed nine of eleven arguments and left one figure and one request**, which is a paper; **four pages of eleven arguments was not.**',
  '**Practise:** Take something you want to argue against. Write the best thing about it, full stop, and then the sentence that costs you more.',
  '**Useful phrases:**  what did that cost you?  ·  a shape, not a statement  ·  better than anything in ten years  ·  I have nothing to set against it  ·  visibly poorer for having written it',
  '**Pronunciation – a concession without a rising _but_.** 🔊 **Track 3.2** Listen to the same concession twice. ⚠ **The first ends on a falling tone and stops.** ⚠ **The second rises at the end, and the rise is an audible *but* even though no *but* is said.** **A listener hears the rise and waits.** **Say it four times, falling, and stop.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a concession; B tests whether it cost anything.'));
out.push(dlg(null, [
  ['A', 'I did concede. _(reads)_ __________.'],
  ['B', '⚠ **Stop at the comma. What did that cost you?**'],
  ['A', '…__________.'],
  ['B', '⚠ **Then say the best thing about their case and put a full stop after it.**'],
  ['A', '__________.'],
  ['B', '⚠ **Would a reader who stopped there think you had lost?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then one more sentence that costs you.**'],
  ['A', '__________.'],
  ['B', '⚠ And what is left of your paper?'],
  ['A', '__________ and __________.'],
]));
out.push(table(['Role card 1 — of course, but', 'Role card 2 — the pretended counter-figure'], [[
  '*Of course there are advantages, but we must also consider the risks.* ⚠ **B stops A at the comma and asks what it cost. Nothing.** → ⚠ *The revenue case is better than anything we have been offered in ten years.* **Full stop.** → ⚠ *And I have nothing to set against it.*',
  'A has a counter-figure that does not exist — ⚠ **a number arrived at by rounding, a comparison with a year that was not comparable, a cost nobody has priced.** **B\'s job is to ask one question: where did it come from?** ⚠ **When A cannot answer, B asks what the paper looks like without it** — **and the answer is usually shorter and stronger.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the free concession and the costly one. ⚠ Then say what the costly one cost, in one clause, and whether the speaker sounded as though they had lost.'));
out.push(PHRASE_CARD(['what did that cost you?', 'a shape, not a statement', 'full stop, and let it stand', 'I have nothing to set against it', 'visibly poorer']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** positions you hold at work. Write the costly concession for each.'));
out.push(table(['What I hold', 'The best thing about the other side', 'What conceding it costs me', 'What is left of my case'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 2, 1.5, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I hold that _______. The best thing about the other side is _______. Conceding it costs me _______. What is left is _______._'));
out.push(p('**Listener task:** count how many cases got shorter. ⚠ Then ask which speaker sounded most likely to be believed, and why it was the one who gave most away.'));
out.push(p('**Board clinic:** your teacher writes three concessions on the board — look for *of course… but*, and a concession followed immediately by a counter-figure. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two openings, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT PAPER — PARAGRAPH 2, BEFORE AND AFTER. 21 February. N. Mansour.**',
  '**Before (the version that came back with three words on it).** _Of course the proposal has attractions, particularly in terms of volume, but there are a number of considerations which in my view outweigh them, and which I set out below. It is also worth noting that the volume figures are not directly comparable with our current arrangements._',
  '⚠ **Fifty-four words. Two concessions, neither of which costs anything, and one piece of arithmetic that is not true.** **The volume figures are directly comparable. I compared them. They are four times ours.**',
  '**After.** _The revenue case is better than anything we have been offered in ten years. Eleven hundred cartons a month against our four hundred, for three years, at a price I have checked and cannot fault. I have nothing to set against it. What follows is not an argument that the money is smaller than it looks. It is an argument about one figure, and the figure is sixty-one per cent._',
  '⚠ **Sixty-eight words, fourteen more, and it gives away everything the first version was protecting.**',
  table(['', 'Before', 'After'], [
    ['**the concession**', '*of course… attractions*', '⚠ **_better than anything in ten years_**'],
    ['**what it cost**', 'nothing', '⚠ **the whole revenue argument, in two sentences**'],
    ['**the next word**', '⚠ **_but_**', '⚠ **a full stop**'],
    ['**the dishonest clause**', '⚠ **_not directly comparable_** — **they are**', '⚠ **gone, and replaced by _at a price I have checked and cannot fault_**'],
    ['**what the paper now rests on**', 'eleven points', '⚠ **one figure**'],
  ], [1.7, 1.9, 2.4]),
  '⚠ **The clause I am most ashamed of is *not directly comparable*.** **It is four words, it sounds technical, and it is false.** ⚠ **I wrote it because the volume figure is the strongest thing in his case and I wanted it out of the way** — **and a reader who checks it, which Mr Attar would in an afternoon, finds that I have fudged the only figure I did not need to fudge.**',
  '⚠ **And the sentence that does the real work is the last one.** *It is an argument about one figure, and the figure is sixty-one per cent.* **It tells the reader what the paper is**, ⚠ **and it tells him that if the sixty-one per cent is wrong he can stop reading** — **which is a risk and is the only reason he read it twice.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How long is each version, and which is longer?'));
out.push(item('2', 'Which clause is the writer most ashamed of, and why?'));
out.push(item('3', 'What does the last sentence of the second version tell the reader?'));
out.push(box('Writer\'s box', [
  '**The concession paragraph — four parts:** ⚠ **the best thing about the other side, flat and complete** → ⚠ **the figures that support it, not yours** → **the sentence that costs you more** → ⚠ **and what the paper now rests on.**',
  '⚠ **Give their case its own figures.** ⚠ *Eleven hundred a month against our four hundred, for three years, at a price I have checked and cannot fault.* **A concession without numbers in it is a courtesy; a concession with their numbers in it is a position.**',
  '⚠ **Take out every clause that fudges a figure you did not need to fudge.** ⚠ *Not directly comparable* **sounds technical and is false, and the reader who checks it finds it in an afternoon** — **and then stops believing the figures you were right about.**',
  '⚠ **Say what the paper rests on, and say it as a single thing.** ⚠ *It is an argument about one figure, and the figure is sixty-one per cent.* **A paper resting on eleven points cannot be refuted and cannot be read.**',
  '⚠ **Accept the risk that comes with that.** ⚠ **Telling a reader he can stop if the figure is wrong is a risk, and it is the reason he reads on.** **A paper that cannot be stopped is a paper that is not being read.**',
  '⚠ **And expect to be longer, not shorter, at this paragraph.** **Fourteen words more**, and nine of the eleven arguments gone from later pages.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Rewrite the opening of a case you have made or want to make (**80 words or more**). Use the frame.'));
out.push(p('**______________ — PARAGRAPH ______________, BEFORE AND AFTER. ______________. ______________.**   **Before.** ______________   ⚠ **______________ words. ______________ concession(s), ______________, and ______________.**   **After.** ⚠ **______________ is better than ______________.** ______________, ______________, ______________. ⚠ **I have nothing to set against it.** **What follows is not an argument that ______________. It is an argument about ______________, and ______________ is ______________.**   ⚠ **______________ words, ______________ more, and it gives away everything the first version was protecting.**   ⚠ **The clause I am most ashamed of is ______________.** **It is ______________, it sounds ______________, and it is ______________.** ⚠ **I wrote it because ______________** — **and a reader who checks it finds ______________.**   ⚠ **And the sentence that does the real work is ______________.** ⚠ **It tells the reader that if ______________ is wrong he can stop reading** — **which is a risk and is the only reason ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The other side\'s case given its own figures', ''],
  ['No *but* after the concession', ''],
  ['A fudged clause found and taken out', ''],
  ['What the paper rests on, as a single thing', ''],
  ['Both word counts, with the honest version longer', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their concession. ⚠ The class says whether the speaker sounded as though they had lost — and the ones who did are the ones who have done it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an argument you lost or won on a concession (**200 to 240 words**). Say what was conceded, what it cost, what it bought, and what the free version would have sounded like.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the concession cost the writer anything?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the costly concession come from the person who went on to win? Usually two of three — ⚠ **and in at least one the writer still thinks they won on the arguments.**'));
out.push(box('Homework', ['Write your final text. Then take the next thing you have to argue for, write the best version of the other side with its own figures in it, put a full stop after it, and count what is left of your case (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.2 =======================
out.push(pb());
out.push(h2('3.2  I may be wrong about this'));
out.push(p('**Function:** making your own fallibility load-bearing   ·   **Grammar:** _I may be wrong about this, and if I am, what follows is wrong too_   ·   **Pronunciation:** the admission said as a statement, not an apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the last thing you were wrong about at work. Say who found out first.'));
out.push(p('**b**  Which is a hedge and which is a structure? _I may be wrong, of course, as I often am. · I may be wrong about the sixty-one per cent. If I am, nothing else in this paper matters._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say makes the admission strong?   **A** saying it early   **B** attaching a consequence to it   **C** saying it humbly'));
out.push(p('**b**  Listen again. **1** What did Nour write at B1 that this cycle answers? **2** What does Hala say the apologetic version invites?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  "Say what being wrong would cost"', [
  ['Nour', 'In August I wrote that I had never written a paper against a decision my employer had half-taken.'],
  ['Hala', 'And now you have written two, and the first one came back with three words on it.'],
  ['Nour', 'I want to put *I may be wrong* in this one. It feels like the honest thing.'],
  ['Hala', '⚠ **It is the honest thing and it is usually written as a weakness.** **Say it to me as you would write it.**'],
  ['Nour', '*I may of course be wrong about this, as I have been before.*'],
  ['Hala', '⚠ **That invites a reader to agree with you and stop.** ⚠ **You have offered him a free way out of your argument and he will take it.**'],
  ['Nour', 'So how do I write it?'],
  ['Hala', '⚠ **Attach a consequence.** ⚠ *I may be wrong about the sixty-one per cent. If I am, nothing else in this paper matters.* **Now the admission is load-bearing: it is holding the whole paper up, and he cannot agree with it cheaply.**'],
  ['Nour', 'It is the same information.'],
  ['Hala', '⚠ **It is the same information doing the opposite work.** **The first version says *do not take me too seriously*. The second says *take this one figure seriously, because everything stands on it*.**'],
  ['Nour', 'And if the figure is wrong?'],
  ['Hala', '⚠ **Then he finds out in February from one sentence instead of in June from a bank.** ⚠ **And he knows you told him where to push.**'],
  ['Nour', 'Nobody ever tells anybody where to push.'],
  ['Hala', '⚠ **Which is why it works.** ⚠ **A man who has been shown the weak point of an argument reads the rest of it as something built rather than something sold.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making the admission load-bearing**',
  table(['', 'Apologetic', 'Load-bearing'], [
    ['**the words**', '*I may of course be wrong, as I have been before.*', '⚠ **_I may be wrong about the sixty-one per cent. If I am, nothing else in this paper matters._**'],
    ['**what it does**', '⚠ **offers the reader a free way out, which he takes**', '⚠ **holds the paper up, so he cannot agree with it cheaply**'],
    ['**what it says**', '*do not take me too seriously*', '⚠ **_take this one figure seriously; everything stands on it_**'],
    ['**the gain**', 'none', '⚠ **he reads the rest as built, not sold**'],
  ], [1.3, 2.4, 2.3]),
  '⚠ **The same information can do the opposite work.** **_I may be wrong_ with no consequence attached is a hedge; with a consequence attached it is a structure.** ⚠ **Attach the consequence and the sentence changes sides.**',
  '⚠ **Name the single thing you may be wrong about, not your general fallibility.** **_As I have been before_ is about you; _about the sixty-one per cent_ is about the paper.**',
  '⚠ **Make the consequence total where it is total.** ⚠ *Nothing else in this paper matters.* **A reader who is told the whole thing stands on one figure will check that figure** — **which is what you want, and is the opposite of what a hedge produces.**',
  '⚠ **Nobody ever tells anybody where to push, and that is why it works.** ⚠ **A man who has been shown the weak point of an argument reads the rest of it as something built rather than something sold.**',
  '⚠ **And the timing is the real gain.** ⚠ **He finds out in February from one sentence instead of in June from a bank.**',
  '**Practise:** Take a case of yours. Name the one thing you may be wrong about, and say exactly what being wrong would cost.',
  '**Useful phrases:**  attach a consequence  ·  if I am, nothing else matters  ·  a free way out, and he will take it  ·  where to push  ·  built, not sold',
  '**Pronunciation – the admission as a statement.** 🔊 **Track 3.4** Listen to two readings. ⚠ **The first drops in pitch and slows on *wrong*, which is an apology.** ⚠ **The second says it at the same pitch as the sentence before and goes straight into the consequence.** **The second is heard as information.** **Say it four times, level, and go straight on.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A admits a possible error; B makes it load-bearing.'));
out.push(dlg(null, [
  ['A', '__________, as I have been before.'],
  ['B', '⚠ **That invites me to agree with you and stop. What exactly might be wrong?**'],
  ['A', '__________.'],
  ['B', '⚠ **And if it is wrong, what happens to the rest?**'],
  ['A', '__________.'],
  ['B', '⚠ **Then write that.** _(A rewrites.)_'],
  ['A', '⚠ **I may be wrong about __________. If I am, __________.**'],
  ['B', '⚠ And when would I otherwise have found out?'],
  ['A', '__________, from __________.'],
]));
out.push(table(['Role card 1 — the free way out', 'Role card 2 — the admission that is not load-bearing'], [[
  '*I may of course be wrong, as I have been before.* ⚠ **B takes the free way out immediately: *you may well be, and I think you are. Shall we leave it?*** ⚠ **A then has nothing to say** — **which is the point of the card.** **Rebuild it with the consequence attached.**',
  'A names something they may be wrong about ⚠ **that nothing depends on** — a date, a name, a detail in an appendix. **B\'s job is to ask what changes if it is wrong.** ⚠ **The answer is nothing**, so the admission is not load-bearing and does not belong in the opening. ⚠ **Then B asks for the one that *is*** — and A usually knows it at once.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the admission and its consequence. ⚠ Then say whether the consequence is total, partial or nil — and if nil, where the sentence should go instead.'));
out.push(PHRASE_CARD(['attach a consequence', 'if I am, nothing else matters', 'a free way out', 'where to push', 'built, not sold']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** cases you are making. Find the load-bearing admission in each.'));
out.push(table(['The case', 'What I may be wrong about', 'If I am wrong, then…', 'Total, partial or nil?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.7, 1.7, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My case is _______. I may be wrong about _______. If I am, _______. That is a _______ consequence._'));
out.push(p('**Listener task:** count the total consequences in the room. ⚠ Then ask each speaker with a nil consequence what they were really hedging about.'));
out.push(p('**Board clinic:** your teacher writes three admissions on the board — look for *as I have been before*, and an admission attached to something nothing depends on. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT PAPER — PARAGRAPH 3. 22 February. N. Mansour.**',
  '**Paragraph 3.** ⚠ **_I may be wrong about the sixty-one per cent. If I am, nothing else in this paper matters and you should stop at paragraph 4._** _The figure is the share of our turnover that would come from one buyer in the first full contract year. I have taken it from the ledger for the twelve months to 31 December and from Mr Dallal\'s own volume and price. The working is at appendix A, on one page, and it is arithmetic and not judgement: if I have made an error you will find it in four minutes._',
  '⚠ **Ninety-one words, and the first two sentences are the ones I did not want to write.**',
  table(['The move', 'What it does'], [
    ['⚠ **_I may be wrong about the sixty-one per cent_**', '**names one thing, not my general fallibility**'],
    ['⚠ **_nothing else in this paper matters_**', '⚠ **a total consequence — the paper stands or falls on it**'],
    ['⚠ **_you should stop at paragraph 4_**', '⚠ **tells him where to stop reading, which no paper ever does**'],
    ['*taken from the ledger … and from his own volume and price*', '**two sources, one of them his**'],
    ['*it is arithmetic and not judgement*', '⚠ **moves the admission from opinion to checkable fact**'],
    ['⚠ **_you will find it in four minutes_**', '⚠ **prices the check, so there is no excuse for not making it**'],
  ], [2.4, 3.6]),
  '⚠ **The third row is the one I argued with myself about for an evening.** *You should stop at paragraph 4.* ⚠ **No paper tells its reader where to stop.** **It looks like a man handing somebody a weapon.**',
  '⚠ **It is in because of what the alternative is.** **If I do not say it, and the figure is wrong, he reads four pages built on a mistake and finds out from somebody else** — ⚠ **and then the thing he has learned is not that my arithmetic was wrong but that I did not know it could be.**',
  '⚠ **And the last row is the one that cost me most work.** **Four minutes is a measured figure: I timed Mr Attar checking it, without telling him why.** ⚠ **A priced check cannot be postponed on the grounds of time**, and every unchecked figure in this building has been left unchecked on exactly those grounds.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the three things the opening two sentences do?'));
out.push(item('2', 'Why is *you should stop at paragraph 4* in the paper?'));
out.push(item('3', 'Where does the four minutes come from?'));
out.push(box('Writer\'s box', [
  '**The load-bearing admission — four parts:** ⚠ **the one thing you may be wrong about** → ⚠ **the consequence, stated totally if it is total** → **the sources, including one of theirs** → ⚠ **and the price of checking it.**',
  '⚠ **Tell the reader where to stop.** ⚠ *You should stop at paragraph 4.* **It looks like handing somebody a weapon and it is the opposite**: **the alternative is that he reads four pages built on a mistake and learns from somebody else that you did not know it could be wrong.**',
  '⚠ **Use one of their own figures among your sources.** ⚠ *From the ledger, and from Mr Dallal\'s own volume and price.* **A figure derived partly from the other side\'s numbers is much harder to dismiss than one derived only from yours.**',
  '⚠ **Say whether it is arithmetic or judgement.** ⚠ *It is arithmetic and not judgement.* **An admission about a judgement invites a counter-judgement; an admission about arithmetic invites a check**, and only one of those two can be settled.',
  '⚠ **Price the check, and measure the price rather than guessing it.** ⚠ *You will find it in four minutes* — **timed, on somebody who did not know why.** **A priced check cannot be postponed for want of time, which is the ground every unchecked figure is left on.**',
  '⚠ **And keep the working to one page.** **An appendix that takes an hour is an appendix nobody opens**, and then the admission is decoration again.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the load-bearing admission for a case of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________ — PARAGRAPH ______________. ______________. ______________.**   ⚠ **I may be wrong about ______________. If I am, ______________ and you should stop at ______________.** **______________ is ______________. I have taken it from ______________ and from ______________. The working is at ______________, on ______________, and it is ______________ and not ______________: if I have made an error you will find it in ______________.**   ⚠ **______________ words, and the first ______________ sentences are the ones I did not want to write.**   ⚠ **The ______________ move is the one I argued with myself about.** ______________. ⚠ **No paper ______________.** **It looks like ______________.**   ⚠ **It is in because of what the alternative is.** **If I do not say it, and ______________, he ______________** — ⚠ **and then the thing he has learned is not that ______________ but that ______________.**   ⚠ **And ______________ is a measured figure: I ______________, without telling ______________ why.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One named thing, not general fallibility', ''],
  ['A consequence, stated totally if it is total', ''],
  ['Where to stop reading', ''],
  ['A source belonging to the other side', ''],
  ['The check priced, and the price measured', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the first two sentences. ⚠ The class says what it would now go and check, and how long it thinks it would take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure or belief at your work that everything rests on and nobody has checked (**200 to 240 words**). Say what it is, where it came from, what would change if it were wrong, how long checking it would take, and why nobody has.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long would the check actually take?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the check take under an hour? Usually all three — ⚠ **and in at least one the figure is older than everybody who now uses it.**'));
out.push(box('Homework', ['Write your final text. Then take the figure your own work rests on, time yourself checking it, and write the sentence with the measured time in it (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.3 =======================
out.push(pb());
out.push(h2('3.3  The strongest version of the other side'));
out.push(p('**Function:** putting a case better than its owner put it   ·   **Grammar:** _the case for it is this, and it is stronger than has been said_   ·   **Pronunciation:** reading somebody else\'s case aloud as though you held it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say an argument you disagree with that you could put well. Say whether you ever have.'));
out.push(p('**b**  Which is the strongest version? _Some people feel the contract would be good for us. · Three years at four times the volume would let us buy board at a price we have never been offered, keep the second press on nights all year, and stop pricing every order against a season._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say happens when you put the other case badly?   **A** you win   **B** the reader spends the paper correcting you instead of reading you   **C** nothing'));
out.push(p('**b**  Listen again. **1** What did Nour find when she wrote Mr Ayoub\'s case properly? **2** What does Bassel say the risk of this move is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  "Put his case better than he put it"', [
  ['Bassel', 'Your paragraph 5 says *the arguments advanced in favour of the proposal*.'],
  ['Nour', 'They are his arguments. I am reporting them.'],
  ['Bassel', '⚠ **You are reporting them badly, and he will notice.** ⚠ **Then he will spend your whole paper correcting your version of his case instead of reading your version of the facts.**'],
  ['Nour', 'So I put it well.'],
  ['Bassel', '⚠ **Put it better than he put it.** **He said it in a yard in one sentence. You have four pages and a ledger.** ⚠ **Write the case he would write if he had your figures.**'],
  ['Nour', 'I did that. On Tuesday. It took two hours and I did not like it.'],
  ['Bassel', 'Why not?'],
  ['Nour', '⚠ **Because it is better than I thought.** **Board at a price we have never been offered, because eleven hundred a month is a different conversation with the mill. The second press on nights all year instead of five months. And no more pricing every order against a season.**'],
  ['Bassel', '⚠ **And did your own case survive it?**'],
  ['Nour', 'Yes. But it is a different case now. ⚠ **It is not that the contract is bad. It is that sixty-one per cent is too much of us for one man to hold.**'],
  ['Bassel', '⚠ **Which is the paper.** **You found it by writing his side properly, and you would not have found it any other way.**'],
  ['Nour', 'And the risk?'],
  ['Bassel', '⚠ **The risk is real and you should know it: you may convince yourself.** ⚠ **If his case is better than yours, writing it properly is how you discover that, and then you have to say so.** **That is the price of the method and there is no way round it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Putting the other side at its strongest**',
  table(['Weak', 'Strong', 'Why'], [
    ['*the arguments advanced in favour*', '⚠ **_the case for it is this, and it is stronger than has been said_**', '⚠ **a reported case is a reported case; an owned one is read**'],
    ['*some people feel it would be good for us*', '⚠ **_board at a price we have never been offered; the second press on nights all year; no more pricing against a season_**', '**three concrete gains, in his terms, with your figures**'],
    ['**what the weak version costs**', '⚠ **he spends your paper correcting your version of his case**', 'and never reaches your facts'],
    ['**what the strong version costs**', '⚠ **you may convince yourself**', '⚠ **and then you have to say so**'],
  ], [1.9, 2.4, 1.7]),
  '⚠ **Put it better than its owner put it.** **He said it in a yard in one sentence and you have four pages and a ledger** — ⚠ **write the case he would write if he had your figures.**',
  '⚠ **A badly-put opposing case costs you the whole paper.** **A reader who finds his own argument misrepresented spends your document correcting you and never reaches your facts**, and he is right to.',
  '⚠ **Writing it properly is how you find out what your own case actually is.** **Nour\'s case stopped being *the contract is bad* and became *sixty-one per cent is too much of us for one man to hold*** — ⚠ **and she found that by writing his side for two hours, and no other way.**',
  '⚠ **The risk is real: you may convince yourself.** ⚠ **If their case is better than yours, this is how you discover it, and then you have to say so.** **That is the price of the method and there is no way round it.**',
  '⚠ **Use their terms, not yours.** **A gain described in the words the other side would use is a gain they can recognise;** **the same gain in your words reads as a concession you are managing.**',
  '**Practise:** Take a case you oppose. Write three concrete gains it would deliver, in its owner\'s terms, using your figures.',
  '**Useful phrases:**  put it better than he put it  ·  the case he would write if he had your figures  ·  correcting your version of his case  ·  you may convince yourself  ·  and then you have to say so',
  '**Pronunciation – reading somebody else\'s case as though you held it.** 🔊 **Track 3.6** Listen to the same three gains read twice. ⚠ **The first is read as a list being got through; the second is read as an argument.** **The difference is stress on the gains and not on the connectives.** **Read them four times as though you wanted them.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports an opposing case; B makes A own it.'));
out.push(dlg(null, [
  ['B', 'Read me your version of their case.'],
  ['A', '__________.'],
  ['B', '⚠ **That is a report. Put it better than they put it. You have __________ and they had __________.**'],
  ['A', '__________. __________. __________.'],
  ['B', '⚠ **Did you like writing it?**'],
  ['A', '__________.'],
  ['B', '⚠ **And did your own case survive?**'],
  ['A', 'Yes, but it is a different case now. ⚠ **It is not that __________. It is that __________.**'],
  ['B', '⚠ **Which is your paper.**'],
]));
out.push(table(['Role card 1 — two hours he would not have spent', 'Role card 2 — the case that does not survive'], [[
  '⚠ **A writes Mr Ayoub\'s case with the ledger behind it: board at a price never offered, the second press on nights all year, no seasonal pricing.** ⚠ **It takes two hours and A does not like it.** **And A\'s own case changes shape: from *the contract is bad* to *sixty-one per cent is too much of us for one man to hold*.**',
  'A opposes something and, on writing the other side properly, ⚠ **finds the other side is right.** **B\'s job is not to rescue A.** ⚠ **B asks what A is going to do**, and the only honest answers are to say so, or to find the thing that is still true and write a much smaller paper. ⚠ **Both are better than the paper A was going to write.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three gains in the other side\'s terms. ⚠ Then write how the speaker\'s own case changed shape, in the form *not that _____, but that _____*.'));
out.push(PHRASE_CARD(['put it better than he put it', 'the case he would write with your figures', 'did you like writing it?', 'not that X, but that Y', 'you may convince yourself']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** cases you oppose. Write the strongest version of each, then say what happened to yours.'));
out.push(table(['What I oppose', 'Three gains, in their terms', 'Did I like writing it?', 'My case now: not that X, but that Y'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 2.2, 1, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I oppose _______. The three gains are _______. I _______ writing it. And my case is now not that _______, but that _______._'));
out.push(p('**Listener task:** count how many cases changed shape. ⚠ Then ask whether anybody\'s case did not survive, and let them say so.'));
out.push(p('**Board clinic:** your teacher writes three versions on the board — look for *the arguments advanced in favour*, and a strong version written in the opponent\'s words rather than the owner\'s. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT PAPER — PARAGRAPH 5: THE CASE FOR ACCEPTING. 23 February. N. Mansour. Written as Mr Ayoub would write it if he had the ledger.**',
  '⚠ **This paragraph is not a summary of Mr Ayoub\'s view. It is the best case for accepting that can be made on the figures, and it is stronger than the case that has been made in this building so far.**',
  table(['', 'The gain', 'The figure behind it'], [
    ['**1**', '**Board at a price we have never been offered.** Eleven hundred cartons a month is a different conversation with the mill from four hundred.', '⚠ **Mr Attar quotes in multiples of two hundred and has never been asked for a price at this volume. Nobody knows what it is. That is a gain I cannot size and it may be the largest one.**'],
    ['**2**', '**The second press on nights for twelve months instead of five.** The press is idle from March to October.', '**42 cartons an hour, three hours a night, two hundred nights — about 25,000 cartons of capacity we currently throw away.**'],
    ['**3**', '**No more pricing every order against a season.** Every quotation this office issues is a guess about walk-in trade.', '⚠ **Two seasons went wrong in Homs on exactly that guess, in 2019 and 2021, and a three-year contract removes the guess from sixty-one per cent of the business.**'],
    ['**4**', '**A named buyer for three years.** We have never had an order longer than twelve months.', 'the Tannous terms of 28 April run twelve months from 1 May and are the longest thing we have ever signed'],
  ], [0.5, 2.6, 3]),
  '⚠ **The first gain is the one I want to be honest about, because it is the only one I cannot put a number on and it is probably the biggest.** **Nobody in this building has ever asked the mill what board costs at eleven hundred a month**, ⚠ **and I have said in paragraph 10 that I have not asked and why.** **A reader is entitled to notice that the largest gain in the case for accepting is a figure I have declined to obtain.**',
  '⚠ **The third gain is the one that uses my own evidence against me.** **I have spent two years saying that the Homs seasons went wrong because nobody counted walk-in trade.** ⚠ **If that is true, it is an argument for a contract that removes the guess** — **and it is the best argument in this paragraph, and it is mine.**',
  '⚠ **Writing this took two hours and changed my paper.** **I am no longer arguing that the contract is bad. I am arguing that sixty-one per cent is too much of us for one man to hold**, ⚠ **which is a narrower claim, and the only one that survived writing the other side properly.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which gain cannot be sized, and what has the writer said about it elsewhere?'));
out.push(item('2', 'Which gain uses the writer\'s own evidence against her?'));
out.push(item('3', 'How did the paper change?'));
out.push(box('Writer\'s box', [
  '**The case for the other side — four parts:** ⚠ **a sentence saying this is not a summary but the best case available** → **the gains, numbered, in their terms** → ⚠ **the figure behind each, including the ones you cannot size** → ⚠ **and what writing it did to your own case.**',
  '⚠ **Say at the top that it is not a summary.** ⚠ *This is the best case for accepting that can be made on the figures, and it is stronger than the case that has been made in this building so far.* **A reader who thinks he is reading a summary of himself reads defensively.**',
  '⚠ **Name the gain you cannot put a number on, and say whether it is the biggest.** ⚠ *That is a gain I cannot size and it may be the largest one.* **A paper that sizes only the gains that suit it is a paper whose arithmetic cannot be trusted anywhere.**',
  '⚠ **Use your own past evidence for their case where it fits.** ⚠ **Two years of saying the Homs seasons went wrong because nobody counted walk-in trade is an argument for a contract that removes the guess.** **If your own evidence supports them, it supports them.**',
  '⚠ **Then say what writing it did to your case, in the *not that X, but that Y* form.** ⚠ *Not that the contract is bad, but that sixty-one per cent is too much of us for one man to hold.* **A narrower claim that survived is worth more than a wide one that was never tested.**',
  '⚠ **And cross-refer to where you admitted the gap.** **If the largest gain rests on a figure you declined to obtain, the reader must be able to find your reason in one step.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the case for the side you oppose (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE CASE FOR ______________. ______________. Written as ______________ would write it if ______________.**   ⚠ **This paragraph is not a summary of ______________. It is the best case for ______________ that can be made on ______________, and it is stronger than ______________.**   **1** ______________ | ⚠ **______________**   **2** ______________ | **______________**   **3** ______________ | ⚠ **______________**   ⚠ **The ______________ gain is the one I want to be honest about, because ______________ and it is probably ______________.** ⚠ **I have said in ______________ that ______________.** **A reader is entitled to notice that ______________.**   ⚠ **The ______________ gain is the one that uses my own evidence against me.** **I have spent ______________ saying that ______________.** ⚠ **If that is true, it is an argument for ______________.**   ⚠ **Writing this took ______________ and changed my paper.** **I am no longer arguing that ______________. I am arguing that ______________**, ⚠ **which is a narrower claim, and the only one that survived.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A sentence saying this is not a summary', ''],
  ['Gains in their terms, with figures behind them', ''],
  ['The gain that cannot be sized, named as possibly the biggest', ''],
  ['Your own evidence used for their case where it fits', ''],
  ['*Not that X, but that Y* — the narrowed claim', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their *not that X, but that Y*. ⚠ The class says whether Y is narrower than X, and if it is not, the other side was not written properly.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time somebody put your own argument back to you better than you had put it (**200 to 240 words**). Say what they said, how it felt, what you did next, and whether they won.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _did the writer change their mind, or only their respect?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the person who put the argument better go on to win the point? Usually two of three — ⚠ **and in all three the writer remembered it years later.**'));
out.push(box('Homework', ['Write your final text. Then take the thing you most disagree with at work, spend an hour writing its best version with your own figures behind it, and write down in one line what happened to your case (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.4 =======================
out.push(pb());
out.push(h2('3.4  The one figure that decides it'));
out.push(p('**Function:** resting a case on a single sourced figure   ·   **Grammar:** _the figure is X. Its base is Y. It comes from Z._   ·   **Pronunciation:** a percentage said with its base'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a percentage used at your work. Say what its base is — per cent of what?'));
out.push(p('**b**  Which can be checked? _Our dependence on this buyer would be unacceptably high. · Sixty-one per cent of turnover, on the twelve months to 31 December, would come from one buyer._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar ask first?   **A** whether the figure is right   **B** per cent of what   **C** who calculated it'));
out.push(p('**b**  Listen again. **1** What three things does he say a figure needs? **2** What is wrong with the first version of the sixty-one per cent?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  "Per cent of what?"', [
  ['Nour', 'Sixty-one per cent. That is the figure the paper rests on.'],
  ['Mr Attar', '⚠ **Per cent of what?**'],
  ['Nour', 'Of turnover.'],
  ['Mr Attar', '⚠ **Whose turnover, over what period, and at which prices?** ⚠ **A percentage without its base is a feeling with a number stuck to it.**'],
  ['Nour', 'Of our total turnover for the twelve months to 31 December, with Mr Dallal\'s volume at his price added and nothing else changed.'],
  ['Mr Attar', '⚠ **Now it is a figure.** **And where does each half come from?**'],
  ['Nour', 'Ours from the ledger. His from his own letter of 9 January, page two.'],
  ['Mr Attar', '⚠ **Good — and say that, because half of it being his is the strongest thing about it.** ⚠ **A figure he gave you cannot be argued with by him.** What three things does a figure need?'],
  ['Nour', '…The number, the base, and the source.'],
  ['Mr Attar', '⚠ **And one more, which nobody does: what it would have to be for the paper to fail.**'],
  ['Nour', 'Meaning?'],
  ['Mr Attar', '⚠ **At what percentage would you stop worrying?** **If the answer is forty, say so.** ⚠ **Then your reader is not arguing about whether sixty-one is a lot. He is arguing about a line, and lines can be agreed.**'],
  ['Nour', 'I had not thought of putting that in.'],
  ['Mr Attar', '⚠ **Nobody does, and it is the difference between a paper that starts an argument and a paper that ends one.** ⚠ **A number with no threshold beside it can be called high by you and moderate by him for ever.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A figure a reader can check, and act on**',
  table(['What it needs', 'Write', 'Here'], [
    ['**the number**', '*sixty-one per cent*', '—'],
    ['⚠ **the base**', '⚠ *of total turnover for the twelve months to 31 December*', '⚠ **per cent of what, whose, over what period, at which prices**'],
    ['**the source**', '*ours from the ledger; his from his letter of 9 January, page 2*', '⚠ **and say which half is his**'],
    ['⚠ **the threshold**', '⚠ *at forty per cent I would not be writing this paper*', '⚠ **the thing nobody does, and it ends the argument**'],
  ], [1.4, 2.6, 2]),
  '⚠ **A percentage without its base is a feeling with a number stuck to it.** ⚠ **Per cent of what, whose, over what period, at which prices** — **four questions, and a reader who has to ask any of them has stopped reading your argument.**',
  '⚠ **Say which part of the figure came from the other side.** ⚠ *His from his own letter of 9 January, page two.* **A figure he gave you cannot be argued with by him**, and that is the strongest property a number in a paper can have.',
  '⚠ **And give the threshold, which almost nobody does.** ⚠ *At forty per cent I would not be writing this paper.* **Without it, you call sixty-one high and he calls it moderate, for ever.** ⚠ **With it, you are both arguing about a line, and lines can be agreed.**',
  '⚠ **That is the difference between a paper that starts an argument and a paper that ends one.** **A number with no threshold beside it is an invitation to an adjective.**',
  '⚠ **Keep the working to a page and say how long checking takes.** **A figure the reader cannot verify in minutes is a figure he takes on trust, and a figure taken on trust is not load-bearing.**',
  '**Practise:** Take a percentage from your work. Give its number, base, source, and the threshold at which you would stop minding.',
  '**Useful phrases:**  per cent of what?  ·  a feeling with a number stuck to it  ·  whose, over what period, at which prices  ·  his from his own letter  ·  at forty I would not be writing this',
  '**Pronunciation – a percentage said with its base.** 🔊 **Track 3.8** Listen to two speakers. ⚠ **The first says *sixty-one per cent* and stops, and the pause invites *of what?*** ⚠ **The second runs the figure and its base together as one phrase, with no pause** — *sixty-one per cent of turnover to 31 December* — **and nobody interrupts.** Say it four times as one phrase.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives a figure; B asks for the base, the source and the threshold.'));
out.push(dlg(null, [
  ['A', '__________. That is the figure it rests on.'],
  ['B', '⚠ **Per cent of what?**'],
  ['A', 'Of __________.'],
  ['B', '⚠ **Whose, over what period, and at which prices?**'],
  ['A', '__________.'],
  ['B', '⚠ **And where does each part come from?**'],
  ['A', '__________ from __________, and __________ from __________.'],
  ['B', '⚠ **Which part is theirs?**'],
  ['A', '__________.'],
  ['B', '⚠ **And at what figure would you stop writing this paper?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the four questions', 'Role card 2 — the threshold nobody has'], [[
  '*Sixty-one per cent.* ⚠ **B asks per cent of what, whose, over what period, at which prices** — and does not stop until all four are answered. ⚠ **Then: which half is his?** **His volume and his price, from his letter of 9 January, page two.**',
  'A has a figure and no threshold. ⚠ **B asks the only question: at what number would you stop minding?** ⚠ **Expect a long pause.** **Then B points out what the absence costs: A calls the figure high, the reader calls it moderate, and neither can be shown to be wrong.** ⚠ **A threshold turns an adjective into a line.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the number, the base, the source and the threshold. ⚠ Then say which part of the figure came from the other side.'));
out.push(PHRASE_CARD(['per cent of what?', 'a feeling with a number stuck to it', 'whose, when, at which prices', 'his from his own letter', 'at forty I would not be writing this']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** figures used at your work. Give each one its four parts.'));
out.push(table(['The figure', 'The base — of what, whose, when', 'The source', 'The threshold'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 2.1, 1.5, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The figure is _______. Its base is _______. It comes from _______. And at _______ I would stop minding._'));
out.push(p('**Listener task:** count how many figures had no base anybody could state. ⚠ Then count how many had a threshold, and expect the second number to be nought.'));
out.push(p('**Board clinic:** your teacher writes three figures on the board — look for a percentage with no base, and a figure sourced to *the system*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT PAPER — PARAGRAPH 6: THE FIGURE. 24 February. N. Mansour. Working at appendix A, one page.**',
  table(['', 'The part', 'The paper says'], [
    ['**the number**', '**61 per cent**', '*sixty-one per cent*'],
    ['⚠ **the base**', '⚠ **of what, whose, when, at which prices**', '⚠ **_of our total turnover for the twelve months to 31 December, with Mr Dallal\'s stated volume at his stated price added and nothing else changed_**'],
    ['**the source, ours**', 'the ledger', '*the ledger for the twelve months to 31 December*'],
    ['⚠ **the source, his**', '⚠ **his own letter**', '⚠ **_his letter of 9 January, page 2, which gives both the volume and the price_**'],
    ['⚠ **the threshold**', '⚠ **the line I would accept**', '⚠ **_at forty per cent I would not be writing this paper_**'],
    ['**the check**', 'timed', '*four minutes, and the working is one page*'],
  ], [1.5, 1.8, 3.3]),
  '⚠ **Half of this figure is his and I have said so twice.** **The volume and the price are from his own letter, which means the only part he can argue with is our ledger** — ⚠ **and our ledger is the one thing in this building that nobody has ever disputed.**',
  '⚠ **The threshold took me three days to write, because writing it meant deciding it.** *At forty per cent I would not be writing this paper.* **I had to work out whether that was true, and it is: we have run at thirty-eight per cent to Ms Tannous for a year and I have never once worried about it.** ⚠ **So the line is not invented for the paper. It is where I already am, and I did not know it until I had to write a number.**',
  '⚠ **And the threshold does something I did not expect.** **It turns the paper into a negotiation with a shape.** **Mr Ayoub can now say *I will take fifty*, and that is a real answer** — ⚠ **he can offer to cap the Dallal volume, or keep Ms Tannous on at a reduced quantity, and both of those are papers I could write.** **Without the forty, his only available answers were yes and no.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which half of the figure is the other side\'s, and why does that matter?'));
out.push(item('2', 'How did the writer arrive at the threshold?'));
out.push(item('3', 'What does the threshold make possible that was not possible before?'));
out.push(box('Writer\'s box', [
  '**The figure paragraph — four parts:** **the number, the base, the source** → ⚠ **which part of it is theirs** → ⚠ **the threshold** → **and the priced check.**',
  '⚠ **Put the base in the sentence, not in a footnote.** ⚠ *Of our total turnover for the twelve months to 31 December, with his stated volume at his stated price added and nothing else changed.* **The clause *and nothing else changed* is the one people leave out and it is where most percentages go wrong.**',
  '⚠ **Say twice which part is theirs.** ⚠ **If the volume and the price are from his letter, the only thing he can argue with is your ledger** — **and if your ledger is undisputed, the figure is unarguable.**',
  '⚠ **Write the threshold even though it takes days, because writing it means deciding it.** ⚠ **Nour found she had run at thirty-eight per cent for a year without worrying, so forty was not invented for the paper — it was where she already was.** **You usually do not know your own line until you have to write a number.**',
  '⚠ **And know what the threshold buys.** ⚠ **It turns yes-or-no into a shape.** **A reader can cap the volume, split it, or stage it** — **and all of those are answers, where without a threshold his only answers were yes and no.**',
  '⚠ **Price the check and keep the working to one page.** **Four minutes, one page, and the figure stops being taken on trust.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the figure paragraph for a case of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE FIGURE. ______________. Working at ______________, ______________.**   **the number** | ______________ | ______________   ⚠ **the base** | ⚠ **of what, whose, when, at which prices** | ⚠ **______________, with ______________ and nothing else changed**   **the source, ours** | ______________ | ______________   ⚠ **the source, theirs** | ⚠ **______________** | ⚠ **______________**   ⚠ **the threshold** | ⚠ **______________** | ⚠ **at ______________ I would not be writing this paper**   **the check** | timed | ______________   ⚠ **______________ of this figure is theirs and I have said so twice.** **Which means the only part they can argue with is ______________** — ⚠ **and ______________.**   ⚠ **The threshold took me ______________ to write, because writing it meant deciding it.** **I had to work out whether ______________, and ______________.** ⚠ **So the line is not invented for the paper. It is where I already am, and I did not know it until ______________.**   ⚠ **And the threshold turns the paper into ______________.** **______________ can now say ______________, and that is a real answer.** **Without it, the only available answers were yes and no.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The base in the sentence, including *nothing else changed*', ''],
  ['Which part of the figure is theirs, said twice', ''],
  ['A threshold, and how it was arrived at', ''],
  ['What the threshold makes possible', ''],
  ['The check priced and the working on one page', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their threshold sentence. ⚠ The class says what answers it now makes available that yes and no did not.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure at your work that everybody argues about with adjectives (**200 to 240 words**). Say what the figure is, what its base is, who calls it high, who calls it moderate, and what threshold would end the argument.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what would the threshold have to be to satisfy both sides?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many has the argument run for more than a year? Usually all three — ⚠ **and in none of them has anybody ever proposed a number.**'));
out.push(box('Homework', ['Write your final text. Then take the figure you argue about most, write its four parts, and take the threshold to the person who disagrees with you (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.5 =======================
out.push(pb());
out.push(h2('3.5  What you are not asking for'));
out.push(p('**Function:** narrowing a request until it can be granted   ·   **Grammar:** _I am not asking you to X. I am asking you to Y._   ·   **Pronunciation:** the negative half said without emphasis'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something you asked for at work and did not get. Say what the smallest version of it would have been.'));
out.push(p('**b**  Which can be granted this week? _I am recommending we decline the contract. · I am not asking you to refuse it. I am asking you to cap the first year at six hundred a month and see what the mill quotes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Nadia say the big ask fails?   **A** it is unreasonable   **B** granting it means admitting he was wrong in the yard   **C** it costs too much'));
out.push(p('**b**  Listen again. **1** What does the smaller ask let him keep? **2** What does she say you must be honest about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  "Ask for something he can give you"', [
  ['Nour', 'The paper recommends declining the contract in its present form.'],
  ['Nadia', '⚠ **What would he have to do to agree with you?**'],
  ['Nour', 'Write to Mr Dallal and say no.'],
  ['Nadia', '⚠ **And what else?** ⚠ **He stood in the yard in January and told four people this was the best thing in ten years.**'],
  ['Nour', '…He would have to be seen to change his mind.'],
  ['Nadia', '⚠ **You have attached a cost to agreeing with you that has nothing to do with the argument**, and it is a cost he pays and you do not.'],
  ['Nour', 'I cannot write the paper so that he was never wrong.'],
  ['Nadia', '⚠ **No. You can write it so that agreeing with you is not the same act as being wrong.** ⚠ **What is the smallest thing that would answer your sixty-one per cent?**'],
  ['Nour', 'A cap. Six hundred a month in the first year instead of eleven hundred, and ask the mill what board costs at that volume before we commit to more.'],
  ['Nadia', '⚠ **And is that a yes or a no to Mr Dallal?**'],
  ['Nour', '⚠ **It is a yes with a number in it.** He keeps the contract, he keeps the three years, and the concentration goes to about thirty-five per cent.'],
  ['Nadia', '⚠ **So write *I am not asking you to refuse it* in the first four lines.** ⚠ **And mean it** — **because if you do write that and he caps it, you have to be satisfied.**'],
  ['Nour', 'And if I am not satisfied?'],
  ['Nadia', '⚠ **Then do not write the sentence.** ⚠ **A smaller ask you would refuse to accept is a tactic, and a reader finds that out at the moment it matters most.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Narrowing the ask**',
  table(['', 'The big ask', 'The smaller ask'], [
    ['**what it is**', '*decline the contract*', '⚠ **_cap the first year at six hundred and ask the mill_**'],
    ['⚠ **the hidden cost**', '⚠ **he must be seen to change his mind**', '⚠ **none — it is a yes with a number in it**'],
    ['**what he keeps**', 'nothing', '**the contract, the three years, his January position**'],
    ['**what it answers**', '—', '⚠ **sixty-one per cent becomes about thirty-five**'],
    ['⚠ **the condition**', '—', '⚠ **you must be satisfied if he grants it**'],
  ], [1.4, 2.1, 2.5]),
  '⚠ **Ask what he would have to do to agree with you — all of it.** ⚠ **If part of the answer is *be seen to change his mind*, you have attached a cost to agreeing that has nothing to do with the argument**, and it is a cost he pays and you do not.',
  '⚠ **You cannot write a paper in which he was never wrong. You can write one in which agreeing with you is not the same act as being wrong.** **That is the whole craft of 3.5.**',
  '⚠ **Say the negative half first, and put it in the first four lines.** ⚠ *I am not asking you to refuse it.* **A reader who thinks he is being asked for a reversal reads the whole paper as an attack.**',
  '⚠ **Make the smaller ask a yes with a number in it.** ⚠ **He keeps the contract, keeps the three years, and the figure you care about moves** — **which is the only kind of ask that gets granted in the week it is made.**',
  '⚠ **And the condition, which is absolute: you must be satisfied if he grants it.** ⚠ **A smaller ask you would refuse to accept is a tactic, and a reader finds that out at the moment it matters most** — **and never trusts a paper of yours again.**',
  '**Practise:** Take something you want. Say what you are not asking for, then the smallest thing that would answer your concern, and check you would be satisfied.',
  '**Useful phrases:**  what would he have to do to agree with you?  ·  a cost that has nothing to do with the argument  ·  not the same act as being wrong  ·  a yes with a number in it  ·  then do not write the sentence',
  '**Pronunciation – the negative half without emphasis.** 🔊 **Track 3.10** Listen to *I am not asking you to refuse it* twice. ⚠ **The first is flat.** ⚠ **The second stresses *not*, and the stress makes it sound like a denial of something he has accused you of.** **Say it four times, flat, and go straight into the positive half.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a big ask; B narrows it.'));
out.push(dlg(null, [
  ['A', 'The paper recommends __________.'],
  ['B', '⚠ **What would they have to do to agree with you?**'],
  ['A', '__________.'],
  ['B', '⚠ **And what else?**'],
  ['A', '…__________.'],
  ['B', '⚠ **Then you have attached a cost to agreeing that has nothing to do with the argument. What is the smallest thing that would answer __________?**'],
  ['A', '__________.'],
  ['B', '⚠ **Is that a yes or a no to them?**'],
  ['A', '⚠ **It is a yes with __________ in it.**'],
  ['B', '⚠ **And if they grant it, are you satisfied?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — the cap', 'Role card 2 — the tactical small ask'], [[
  '*Decline the contract* → ⚠ **he would have to be seen to change his mind in front of four people.** → ⚠ **_I am not asking you to refuse it. I am asking you to cap the first year at six hundred and ask the mill what board costs at that volume._** **Sixty-one becomes about thirty-five, and he keeps everything he said in January.**',
  'A offers a small ask and ⚠ **would not actually be satisfied by it** — it is a first step towards the big one. **B\'s job is to ask the last question twice.** ⚠ **When A admits it, B says the only thing to say: then do not write the sentence.** ⚠ **A tactic discovered at the moment it matters costs more than the big ask ever would.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the big ask, the hidden cost, and the smaller ask. ⚠ Then say whether the speaker would be satisfied, and how you could tell.'));
out.push(PHRASE_CARD(['what would they have to do to agree?', 'a cost unrelated to the argument', 'not the same act as being wrong', 'a yes with a number in it', 'then do not write the sentence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you want at work. Narrow each one.'));
out.push(table(['What I want', 'What they would have to do to agree', 'The smaller ask', 'Would I be satisfied?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 1.9, 1.9, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I want _______. To agree they would have to _______, and also _______. The smaller ask is _______. And I _______ be satisfied._'));
out.push(p('**Listener task:** count how many big asks had a hidden cost of being seen to change their mind. ⚠ Then ask who said they would not be satisfied, and congratulate them.'));
out.push(p('**Board clinic:** your teacher writes three asks on the board — look for a negative half with no positive half after it, and a smaller ask that is a first instalment of the big one. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE BEIRUT PAPER — PARAGRAPH 9: WHAT I AM ASKING FOR. 25 February. N. Mansour.**',
  '⚠ **_I am not asking you to refuse Mr Dallal\'s proposal. I am not asking you to reduce the term, and I am not asking you to keep Ms Tannous in the chain if the figures do not support it._**',
  '**What I am asking for is three things, and all three can be done this week.**',
  table(['', 'The ask', 'What it costs you', 'What it answers'], [
    ['**1**', '**Cap the first contract year at six hundred cartons a month**, with the balance to be agreed in writing before the second year.', '⚠ **a letter, and a figure in a clause**', '⚠ **sixty-one per cent becomes about thirty-five**'],
    ['**2**', '**Ask Mr Attar what board costs at six hundred and at eleven hundred**, before the second year is agreed.', '**one telephone call**', '⚠ **the largest gain in the case for accepting, which I have not sized**'],
    ['**3**', '**Write to Ms Tannous before 31 March**, whatever is decided, and say what it is.', '⚠ **an uncomfortable letter**', '**the only thing in this file we cannot undo**'],
  ], [0.5, 2.9, 1.5, 2.1]),
  '⚠ **None of these asks you to say you were wrong in the yard in January, and that is deliberate.** **You said the revenue case was the best thing in ten years and it is** — ⚠ **paragraph 5 says so with your own figures in it.** **A cap is not a reversal. It is the same contract with a number in it.**',
  '⚠ **And I will say the thing that makes this an honest paragraph rather than a tactic.** ⚠ **If you cap the first year at six hundred, I am satisfied, and I will not come back in June with the same paper and a different figure in it.** **Thirty-five per cent is below the forty I named in paragraph 6, and I have given you a line and I will keep to it.**',
  '⚠ **The third ask is the one I have thought about longest and it is the smallest.** **It costs a letter.** ⚠ **Everything else in this file can be changed later; a woman who found this company for us and learns from somebody else what we have decided cannot be unlearned.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What are the three things the writer is not asking for?'));
out.push(item('2', 'What makes paragraph 9 honest rather than tactical?'));
out.push(item('3', 'Why is the third ask the smallest and the most important?'));
out.push(box('Writer\'s box', [
  '**What I am asking for — four parts:** ⚠ **the negative half, in full, first** → **the asks, numbered, with what each costs the reader** → ⚠ **the sentence that says a cap is not a reversal** → ⚠ **and the promise not to come back.**',
  '⚠ **Write the negative half in full and make it cost you.** ⚠ *I am not asking you to reduce the term, and I am not asking you to keep Ms Tannous in the chain if the figures do not support it.* **A negative half that gives up nothing is another *of course… but*.**',
  '⚠ **Put *what it costs you* in a column.** **A letter. One telephone call. An uncomfortable letter.** ⚠ **An ask whose cost is stated and small gets granted; an ask with no cost column is read as costing everything.**',
  '⚠ **Say explicitly that agreeing is not an admission.** ⚠ *A cap is not a reversal. It is the same contract with a number in it.* **And point at the paragraph where you made their case with their figures — that is what makes the sentence believable.**',
  '⚠ **Then promise not to come back.** ⚠ *I am satisfied, and I will not come back in June with the same paper and a different figure in it.* **Tie it to the threshold you named earlier.** **This is the sentence that separates a position from a campaign.**',
  '⚠ **And keep one ask that is about a person and costs almost nothing.** ⚠ **Everything else in a file can be changed later; what somebody learns from a third party cannot be unlearned.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I am asking for* for a case of yours (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHAT I AM ASKING FOR. ______________. ______________.**   ⚠ **I am not asking you to ______________. I am not asking you to ______________, and I am not asking you to ______________.**   **What I am asking for is ______________ things, and all ______________ can be done ______________.**   **1** ______________ | ⚠ **______________** | ⚠ **______________**   **2** ______________ | **______________** | ⚠ **______________**   **3** ______________ | ⚠ **______________** | **______________**   ⚠ **None of these asks you to say you were wrong about ______________, and that is deliberate.** ⚠ **______________ says so with your own figures in it.** **______________ is not a reversal. It is ______________.**   ⚠ **And I will say the thing that makes this honest rather than a tactic.** ⚠ **If you ______________, I am satisfied, and I will not come back in ______________ with ______________.** **______________ is below the ______________ I named, and I have given you a line and I will keep to it.**   ⚠ **The ______________ ask is the one I have thought about longest and it is the smallest.** **It costs ______________.** ⚠ **Everything else in this file can be changed later; ______________ cannot be unlearned.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A negative half that gives something up', ''],
  ['A *what it costs you* column, with small costs in it', ''],
  ['Agreeing stated as not an admission, with a cross-reference', ''],
  ['A promise not to come back, tied to the threshold', ''],
  ['One ask about a person, costing almost nothing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their promise not to come back. ⚠ The class says whether they believe it, and the ones they believe are the ones tied to a number.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a request that was refused and should have been granted (**200 to 240 words**). Say what was asked, what agreeing would have cost the person asked, what the smaller version would have been, and whether anybody ever offered it.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the hidden cost about the argument or about the person?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the hidden cost about the person rather than the argument? Usually all three — ⚠ **and in two of three nobody ever offered a smaller version at all.**'));
out.push(box('Homework', ['Write your final text. Then take the thing you most want at work, write the negative half, write the smallest ask that would satisfy you, and ask yourself twice whether it would (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.6 =======================
out.push(pb());
out.push(h2('3.6  The paragraph you show them first'));
out.push(p('**Function:** reading your hardest paragraph to its subject before sending   ·   **Grammar:** _I have written this about you and I want to read it to you first_   ·   **Pronunciation:** reading an uncomfortable paragraph aloud at normal speed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you ever shown somebody a page about them before sending it? Say what happened.'));
out.push(p('**b**  Which is the harder offer? _I have mentioned you in a report, I hope that is all right. · There is a paragraph in this about a decision of yours. I want to read it to you before it goes, and if it is unfair I will change it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Ayoub say about hearing it read aloud?   **A** he objects to the paragraph   **B** he objects to one word and gives her a fact   **C** he objects to nothing'));
out.push(p('**b**  Listen again. **1** Which word does he object to? **2** What does he tell her that is not in the file?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  "Read me the hard one"', [
  ['Nour', 'There is a paragraph in this about a decision of yours. I want to read it to you before it goes.'],
  ['Mr Ayoub', 'Read it.'],
  ['Nour', '*The 2019 and 2021 Homs allocations were set on the standard seasonal figure and did not count walk-in trade, which is about half of what that shop sells in a season. Both allocations were approved by you on the same sheet, which has no line for walk-in trade on it.*'],
  ['Mr Ayoub', '⚠ **Say *approved* again.**'],
  ['Nour', '*Both allocations were approved by you.*'],
  ['Mr Ayoub', '⚠ **I did not approve them. I set them.** ⚠ **Approved means somebody brought me a figure and I agreed to it. Nobody brought me anything. I wrote the number myself, in both years, in about four minutes.**'],
  ['Nour', 'That is worse for you, not better.'],
  ['Mr Ayoub', '⚠ **It is true.** **And if your paper says *approved*, Mr Attar will read it and think there was a proposal, and will go looking for who made it, and there was nobody.** ⚠ **Then you have sent a man looking for a person who does not exist.**'],
  ['Nour', 'So I write *set by you*.'],
  ['Mr Ayoub', '⚠ **Write *set by me*, both years, in four minutes, on a sheet with no line for it.** ⚠ **And add the thing you do not know: the sheet is mine too. I drew it up in 1998 and nobody has changed it since.**'],
  ['Nour', 'I did not know that.'],
  ['Mr Ayoub', '⚠ **Nobody did. And it is the strongest thing in your paper and you would have sent it without it.**'],
  ['Nour', 'Why are you helping me?'],
  ['Mr Ayoub', '⚠ **Because you read it to me instead of sending it.** ⚠ **A man who hears a hard paragraph read to his face argues with the paragraph. A man who finds it in a file argues with the person.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Pre-reading the hardest paragraph**',
  table(['The move', 'Say', 'What it gets you'], [
    ['**the offer**', '⚠ *There is a paragraph in this about a decision of yours. I want to read it to you before it goes.*', '**he listens as a reader, not as a subject**'],
    ['**the reading**', '⚠ **at normal speed, no apology, no softening as you go**', '⚠ **a softened reading is heard as a worse paragraph than the one on the page**'],
    ['**the correction**', '*say **approved** again*', '⚠ **one wrong word found that would have sent a reader hunting for a person who does not exist**'],
    ['⚠ **the gift**', '⚠ *the sheet is mine too; I drew it up in 1998*', '⚠ **the strongest fact in the paper, which was in nobody\'s writing**'],
    ['**the reason**', '⚠ *you read it to me instead of sending it*', '⚠ **a hard paragraph heard is argued with; a hard paragraph found is resented**'],
  ], [1.3, 3, 2.2]),
  '⚠ **Offer the reading, and say what the paragraph is about before you read it.** ⚠ *A decision of yours.* **A person who does not know what is coming listens for themselves instead of listening to the words.**',
  '⚠ **Read it at normal speed and do not soften as you go.** ⚠ **A softened reading is heard as a worse paragraph than the one on the page**, because the listener fills the hesitation with something worse than you wrote.',
  '⚠ **Expect the correction to be a single word, and expect it to matter.** ⚠ *Approved* **means somebody brought a figure and he agreed; *set* means he wrote it himself.** **The wrong word sends a reader looking for a person who does not exist.**',
  '⚠ **And expect to be given something.** ⚠ **The sheet with no line for walk-in trade was his, from 1998, and nobody in the building knew** — **the strongest fact in the paper, and it arrived because the paragraph was read aloud.**',
  '⚠ **The reason is the sentence to remember.** ⚠ **A man who hears a hard paragraph read to his face argues with the paragraph. A man who finds it in a file argues with the person.**',
  '**Practise:** Take the hardest paragraph you have written about somebody. Offer it, read it, and ask for the word that is wrong.',
  '**Useful phrases:**  I want to read it to you before it goes  ·  say that word again  ·  approved means somebody brought me a figure  ·  the sheet is mine too  ·  argues with the paragraph, not the person',
  '**Pronunciation – an uncomfortable paragraph at normal speed.** 🔊 **Track 3.12** Listen to the Homs paragraph read twice. ⚠ **The first is read at the speed of the rest of the conversation.** ⚠ **The second slows and drops at *approved by you*, and the slowing is an apology that makes the sentence sound like an accusation.** **Read it four times at one speed.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers a hard paragraph; B listens as its subject.'));
out.push(dlg(null, [
  ['A', 'There is a paragraph in this about __________. I want to read it to you before it goes.'],
  ['B', 'Read it.'],
  ['A', '_(reads at normal speed)_ __________.'],
  ['B', '⚠ **Say __________ again.**'],
  ['A', '__________.'],
  ['B', '⚠ **That is the wrong word. __________ means __________. What happened was __________.**'],
  ['A', '⚠ That is worse for you, not better.'],
  ['B', '⚠ **It is true. And if your paper says __________, __________ will read it and __________.**'],
  ['A', 'So I write __________.'],
  ['B', '⚠ **And add the thing you do not know: __________.**'],
]));
out.push(table(['Role card 1 — approved or set', 'Role card 2 — the softened reading'], [[
  '⚠ **B objects to one word: *approved* implies a proposal nobody made.** ⚠ **Set is worse for B and is true**, and the wrong word would send Mr Attar hunting for a person who does not exist. ⚠ **Then B gives A the 1998 sheet, which is the strongest fact in the paper.**',
  'A reads the paragraph and ⚠ **softens as they go** — slowing, dropping, adding *of course* and *to some extent*. **B\'s job is to say back what they heard.** ⚠ **B will have heard something worse than was written**, because a listener fills a hesitation. **Then A reads it again at one speed and B says what changed.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the word that was wrong and what it implied. ⚠ Then write the fact the subject gave, and say whether it helped or hurt them.'));
out.push(PHRASE_CARD(['I want to read it to you first', 'say that word again', 'approved means somebody brought me a figure', 'the sheet is mine too', 'argues with the paragraph']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** hard paragraphs you have written or could write. Plan the pre-reading.'));
out.push(table(['Who it is about', 'What I will say before reading', 'The word I expect to be challenged', 'What they might give me'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.9, 1.7, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The paragraph is about _______. I will say _______ before reading it. The word I expect to be challenged is _______. And what they might give me is _______._'));
out.push(p('**Listener task:** count how many expect to be given a fact. ⚠ Then ask how many have ever pre-read a paragraph, and expect almost none.'));
out.push(p('**Board clinic:** your teacher writes three offers on the board — look for *I hope that is all right*, and an offer that does not say what the paragraph is about. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**PARAGRAPH 8, BEFORE AND AFTER THE READING. 26 February. N. Mansour.**',
  '**Before.** _The 2019 and 2021 Homs allocations were set on the standard seasonal figure and did not count walk-in trade, which is about half of what that shop sells in a season. Both allocations were approved by you on the same sheet, which has no line for walk-in trade on it._',
  '**After.** _The 2019 and 2021 Homs allocations were set on the standard seasonal figure and did not count walk-in trade, which is about half of what that shop sells in a season. You set both figures yourself, in both years, in about four minutes, on a sheet you drew up in 1998 and which nobody has changed since. There was no proposal in either year and nobody brought you a figure to agree to._',
  table(['', 'Before', 'After', 'Why it changed'], [
    ['**the verb**', '⚠ **_were approved by you_**', '⚠ **_you set both figures yourself_**', '⚠ **_approved_ implies a proposal; there was none, and a reader would hunt for who made it**'],
    ['**the sheet**', '*the same sheet*', '⚠ **_a sheet you drew up in 1998_**', '⚠ **he told me, and it was in nobody\'s writing**'],
    ['**the time**', '—', '**_in about four minutes_**', 'he said it; it is the whole point and I would not have dared write it'],
    ['**the absence**', '—', '⚠ **_there was no proposal in either year_**', '⚠ **it closes the question the wrong verb would have opened**'],
  ], [1.2, 1.7, 2.1, 2.6]),
  '⚠ **The paragraph after the reading is harder on him than the one before it, and he dictated the difference.** **_You set both figures yourself in about four minutes_ is a worse sentence about a man than *they were approved by you*, and it is the true one, and he preferred it.**',
  '⚠ **What I had not understood is that the softer version was the one that would have damaged him.** **A reader who sees *approved* goes looking for the proposal and finds nobody made one**, ⚠ **and then the story is not that he set a figure quickly but that something was approved in this company with no proposal behind it** — **which is a larger charge and a vaguer one, and it would have attached itself to him anyway.**',
  '⚠ **And the 1998 sheet is now the strongest thing in the paper.** **It turns the Homs seasons from two mistakes by a man into one missing line on a form that has outlived everybody\'s memory of it** — ⚠ **and that is the version I can put in front of Mr Attar without anybody having to be at fault.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which version is harder on the subject, and who dictated the change?'));
out.push(item('2', 'Why would the softer version have damaged him more?'));
out.push(item('3', 'What does the 1998 sheet change about the whole paragraph?'));
out.push(box('Writer\'s box', [
  '**Before and after the reading — four parts:** **the paragraph as written** → **the paragraph after** → ⚠ **a table with a *why it changed* column** → ⚠ **and what you had not understood.**',
  '⚠ **Put the exact verb in its own row.** ⚠ *Approved* **against** *set*. **The whole correction is usually one verb, and the reason is always about what a reader would do next.**',
  '⚠ **Expect the corrected version to be harder on its subject, and say so.** ⚠ *He dictated the difference.* **A subject who is read to will very often make the sentence about them more severe and more exact, because exactness is what they want and severity is the price of it.**',
  '⚠ **Explain why the soft version was the dangerous one.** ⚠ **A reader who sees *approved* goes looking for the proposal, finds none, and the story becomes *something was approved here with no proposal behind it*** — **a larger charge and a vaguer one, and it attaches to the same person anyway.**',
  '⚠ **Record the fact you were given and what it changes.** ⚠ **The 1998 sheet turns two mistakes by a man into one missing line on a form that has outlived everybody\'s memory of it.**',
  '⚠ **And say what you can now put in front of the third reader.** **The test of a pre-reading is whether the paragraph can go to the person it was always going to without anybody having to be at fault.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a hard paragraph before and after a reading (**80 words or more**). Use the frame.'));
out.push(p('**PARAGRAPH ______________, BEFORE AND AFTER THE READING. ______________. ______________.**   **Before.** ______________   **After.** ______________   **the verb** | ⚠ **______________** | ⚠ **______________** | ⚠ **______________**   **the ______________** | ______________ | ⚠ **______________** | ⚠ **______________**   ⚠ **The paragraph after the reading is harder on ______________ than the one before it, and ______________ dictated the difference.**   ⚠ **What I had not understood is that the softer version was the one that would have damaged ______________.** **A reader who sees ______________ goes looking for ______________ and finds ______________**, ⚠ **and then the story is not that ______________ but that ______________** — **which is a larger charge and a vaguer one.**   ⚠ **And ______________ is now the strongest thing in the paper.** **It turns ______________ into ______________** — ⚠ **and that is the version I can put in front of ______________ without anybody having to be at fault.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The exact verb, in its own row', ''],
  ['The after version harder, and the subject credited with it', ''],
  ['Why the soft version was the dangerous one', ''],
  ['The fact you were given, and what it changes', ''],
  ['What can now go to the third reader', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their before and after verbs only. ⚠ The class says what a reader would have gone looking for after the first one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something written about you that you were never shown (**200 to 240 words**). Say what it said, what one word was wrong, what you would have given the writer, and what it cost that you were not asked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _what would the writer have gained by asking?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would the subject have given the writer a fact that improved the document? Usually all three — ⚠ **and in two of three the subject would have accepted a harsher sentence in exchange for an accurate one.**'));
out.push(box('Homework', ['Write your final text. Then take the hardest paragraph you have about a living person, read it to them at normal speed, and write down the word they challenge and the fact they give you (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review & Mediate: readable by the person who disagrees with it'));
out.push(p('**Function:** explaining a paper to somebody who has to carry its argument   ·   **Review:** the costly concession · the load-bearing admission · the other side at its strongest · the figure and its threshold · the smaller ask · the pre-reading'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What is the test of a real concession, and what must not follow it?',
  '**2** What turns *I may be wrong* from a hedge into a structure?',
  '**3** What is the risk of putting the other side at its strongest, and what is the gain?',
  '**4** What four things does a figure need, and which one does almost nobody write?',
  '**5** What must be true before you may write *I am not asking you to refuse it*?',
  '**6** Why does a man who hears a hard paragraph read aloud argue with the paragraph?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say he did with the paper?   **A** disagreed with it and said so   **B** disagreed with it and checked it anyway   **C** agreed with it'));
out.push(p('**b**  Listen again. **1** Which two things made him check rather than argue? **2** What does he say the first version would have got?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  "I disagree with it and I have checked it"', [
  ['Mr Attar', 'I have read your paper twice and I disagree with it.'],
  ['Nour', 'And?'],
  ['Mr Attar', '⚠ **And I checked the sixty-one per cent, which took four minutes, and it is right.**'],
  ['Nour', 'You disagree with it and you checked it.'],
  ['Mr Attar', '⚠ **Those are different activities and most papers only get one of them.** ⚠ **A paper I disagree with that has nothing checkable in it gets an argument. Yours had one figure and a page of working and a man telling me it took four minutes.**'],
  ['Nour', 'What made you check instead of arguing?'],
  ['Mr Attar', '⚠ **Two things, and neither of them was the argument.** ⚠ **Paragraph 5 — you wrote the case for accepting better than anybody has put it in this building, with the board price in it, which is the gain I would have raised and you raised it first.** **I had nothing to correct.'],
  ['Nour', 'And the second?'],
  ['Mr Attar', '⚠ **Paragraph 3. You told me where to stop reading.** ⚠ **Nobody has ever done that.** **A man who has been told where the weak point is reads the rest as something built.'],
  ['Nour', 'And the first version? You saw it.'],
  ['Mr Attar', '⚠ **The first version would have got four pages of reply from me and nothing else.** ⚠ **Eleven points, and I would have answered all eleven, and nobody would have checked anything.**'],
  ['Nour', 'So where do you disagree?'],
  ['Mr Attar', '⚠ **At forty per cent.** **I think the line is fifty, and I can say why, and we can argue about a number for twenty minutes instead of about a contract for a month.**'],
  ['Nour', 'That is what the threshold was for.'],
  ['Mr Attar', '⚠ **I know. It worked on me and I still think you are wrong about the number, and both of those things are fine.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a paper carried by somebody who disagrees with it**',
  table(['What made it readable', 'The move', 'Where'], [
    ['⚠ **nothing to correct**', '⚠ **the other side put better than its owner put it, with the gain he would have raised**', '3.3'],
    ['⚠ **told where to stop**', '*I may be wrong about the sixty-one per cent. If I am, nothing else matters.*', '3.2'],
    ['⚠ **something to check**', 'one figure, one page of working, four minutes', '3.4'],
    ['⚠ **something to disagree about**', '⚠ **the threshold — he thinks the line is fifty**', '3.4'],
    ['⚠ **something to grant**', 'a cap, a telephone call, a letter', '3.5'],
  ], [1.6, 2.6, 0.7]),
  '⚠ **Disagreeing and checking are different activities and most papers only get one of them.** ⚠ **A paper you disagree with that has nothing checkable in it gets an argument** — **and an argument is what the first version of this paper would have got: four pages of reply and nothing else.**',
  '⚠ **The two things that made him check were not the argument.** ⚠ **They were paragraph 5, where his own strongest point was raised before he could raise it, and paragraph 3, where he was told where to stop reading.**',
  '⚠ **Eleven points get eleven answers and nobody checks anything.** **One figure gets checked.**',
  '⚠ **Leave him something to disagree about, and make it a number.** ⚠ *I think the line is fifty.* **Twenty minutes about a number instead of a month about a contract** — **and the disagreement is now inside your paper\'s own frame.**',
  '⚠ **And accept the result: it worked on him and he still thinks you are wrong.** ⚠ **Both of those are fine, and a writer who needs the reader to agree has not written a paper, they have written a request for approval.**',
  '**Practise:** Explain a paper of yours to somebody who disagrees with it. Name what they can check, what they can disagree about, and what they can grant.',
  '**Useful phrases:**  I disagree with it and I have checked it  ·  different activities  ·  nothing to correct  ·  you told me where to stop  ·  a number for twenty minutes instead of a contract for a month',
  '**Pronunciation – reading a disagreement without winning it.** 🔊 **Track 3.14** Listen to *I think the line is fifty* twice. ⚠ **The first is flat and makes a proposal; the second rises and makes a challenge.** **A paper\'s threshold invites the first and gets the second if your own voice supplies it.** **Say it four times, flat.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has written a paper; B disagrees with it. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A names the five things in the paper: the costly concession, the admission with its consequence, the other side at its strongest, the figure with its threshold, and the smaller ask.** ⚠ **B says which of the five made him check rather than argue** — **and it is never the argument itself.**',
  'B disagrees and has **nothing to check**, because A\'s paper has eleven points and no single figure. ⚠ **B\'s job is to answer all eleven**, briskly, and then say what he has not done. ⚠ **He has not checked anything.** **Then both of them find the one figure the paper could have rested on, and notice it was in point seven.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what the reader could check, disagree about and grant. ⚠ Then say which of the six cycles produced each one.'));
out.push(PHRASE_CARD(['I disagree and I checked it', 'different activities', 'nothing to correct', 'you told me where to stop', 'a number, not a contract']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a one-page paper arguing against something. Read it silently. Then explain it to **two** people: somebody who agrees with its conclusion and somebody who does not.'));
out.push(table(['Who I told', 'What they did with it', 'What they could check', 'What they wanted to disagree about'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.6, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the paper. This is the **third** unit of this book, and the unwritten thing is this: ⚠ **a paper that wins every argument is unreadable by the only person who matters, because agreeing with it requires him to have been wrong about everything — so the stronger the paper the less likely it is to be acted on, and the writer reads that refusal as stubbornness and writes a stronger paper next time.**'));
out.push(p('_The paper argued _______. The person who agreed _______. The person who disagreed _______. What they could check was _______, and what they wanted to argue about was _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _the burden of proof · a load-bearing fact · a smaller ask · the base of a percentage · a counter-argument · an inclination_. ⚠ Eighteen items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a paper with eleven load-bearing points, and a threshold given as an adjective. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 3)', 10));
out.push(p('⚠ **This unit is Part 3: multiple choice on one longer text.** Read the text and answer questions **1–6**. Choose **A**, **B**, **C** or **D**. ⚠ **Every answer is in the text and four of the six are in a single sentence each — the part rewards locating before choosing.**'));
out.push(box(null, [
  '**WHY WE READ SOME PAPERS AND ARGUE WITH OTHERS — a note to the management committee. M. Attar, 28 February.**',
  'I have been asked to say what I look for in a paper, after an exchange this month in which I changed my mind about a document I disagreed with and did not change it about the document\'s conclusion. The two facts are not in tension and the distinction is the whole of what follows.',
  'A paper arrives on my desk with a conclusion I either like or do not. If I do not like it, I have two things I can do, and which one I do is decided almost entirely by how the paper is built and hardly at all by how good its argument is. I can argue with it, which means writing a reply, and a reply costs me an afternoon and costs the writer a week. Or I can check it, which costs me minutes and may cost the writer nothing at all.',
  'What makes me check is the presence of one thing that can be checked. A paper resting on a single figure, with its base stated, its sources named and its working on one page, invites a check and I will make it. A paper resting on eleven considerations invites a reply, because there is nothing in it that can be settled; I will answer all eleven and we will both be exactly where we were, except poorer by an afternoon and a week.',
  'There is a second thing and it is rarer. Occasionally a paper tells me where its own weak point is — says, in effect, that if one particular number is wrong I should stop reading. I have seen this four times in twenty-two years. Every time, I have read the whole paper, and every time I have read it as something built rather than something sold. Writers believe this is dangerous. It is the opposite: a paper with no visible weak point is read as a paper whose weak point has been hidden.',
  'I should add that in the case this month I checked the figure, found it right, and still disagree with the paper. The writer named a threshold — a number above which she would object — and I think her number is wrong by ten points. We will settle that in twenty minutes. The previous version of the same paper had eleven points in it and would have cost us a month.',
], 'FFFFFF', C.navy));
out.push(p('**1** What does the writer say decides whether he argues with a paper or checks it?   **A** the quality of its argument   **B** whether he likes its conclusion   **C** how the paper is built   **D** how long the paper is'));
out.push(p('**2** What is the cost of a reply?   **A** an afternoon for him and a week for the writer   **B** minutes for him   **C** a month for the company   **D** nothing'));
out.push(p('**3** Why does a paper resting on eleven considerations invite a reply?   **A** it is too long   **B** the considerations contradict each other   **C** the writer has not understood the question   **D** nothing in it can be settled'));
out.push(p('**4** How often has he seen a paper name its own weak point?   **A** every year   **B** four times in twenty-two years   **C** once   **D** often, in recent years'));
out.push(p('**5** What does he say about a paper with no visible weak point?   **A** it is usually correct   **B** it is read as having hidden its weak point   **C** it is easier to check   **D** it takes longer to read'));
out.push(p('**6** What is his position on the paper he read this month?   **A** he checked the figure, found it right, and still disagrees   **B** he has changed his mind about the conclusion   **C** he thinks the threshold is correct   **D** he has not finished reading it'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **A note, memo, message or email with three content points, all three present.** ⚠ **Unit 1 practised this; Unit 2 practised Part 2 at 120–140 words. The two alternate, and this is Part 1 again.**',
  '⚠ **For a message about a paper, the three points are nearly always: what the paper asks for · what it rests on · and what the reader should do before the meeting.**',
  '⚠ **In forty-five words you cannot summarise an argument, so summarise its shape.** ⚠ *It rests on one figure and the working is one page.* **That is more useful to a colleague than any compression of the argument itself.**',
  '⚠ **And name the threshold if there is one**, because a colleague who knows the number can take a position before the meeting instead of during it.',
  '⚠ **Part 3 tip, for the reading above.** **Locate before choosing.** **Four of the six answers are each in one sentence**, and a learner who reads all four options first then hunts will usually find a sentence that resembles option A somewhere. ⚠ **Find the sentence that answers the question, then look at the options.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** You have written a paper arguing against something your department wants, and it is being discussed on Thursday. Write an internal message to a colleague (**40 to 50 words**). Say **what the paper asks for**, **what it rests on**, and **what they should do before Thursday**.'));
out.push(p('______________: the paper asks for ______________, not ______________. It rests on ______________, and ______________. ⚠ **Before Thursday, please ______________ and ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the paper asks for — and what it does not', ''],
  ['What it rests on, as one thing', ''],
  ['What to do before the meeting', ''],
  ['The threshold, if there is one', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a paper, report or proposal that was right and was not acted on (**200 to 240 words**). Say what it argued, how it was built, what agreeing with it would have cost the person who had to agree, and what the smaller version would have been.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take a paper of your own that was refused, and rebuild its first page with a costly concession, a load-bearing admission, one figure and a smaller ask (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The revenue case is better than anything we ___ in ten years.   a) have been offered   b) are offered   c) were offering',
  '2  I have nothing to set ___ it.   a) to   b) against   c) for',
  '3  If I am wrong about the figure, nothing else ___.   a) matter   b) matters   c) mattering',
  '4  Sixty-one per cent ___ turnover, for the twelve months to December.   a) from   b) on   c) of',
  '5  At forty per cent I ___ be writing this paper.   a) will not   b) would not   c) have not',
  '6  I am not asking you ___ it.   a) refuse   b) to refuse   c) refusing',
  '7  You ___ both figures yourself, in four minutes.   a) set   b) setted   c) were set',
  '8  Had I not named a threshold, his only answers ___ yes and no.   a) would have been   b) will be   c) had been',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 3.15** Listen to a reader explaining what he did with a paper. Complete the note.   What he did with it: ______   What made him check rather than argue, first reason: ______   Second reason: ______   What the earlier version would have got: ______   Where he disagrees: ______   How long settling that will take: ______'));
out.push(p('**C  Reading.** Read paragraph 5 at 3.3 again. Which gain cannot be sized, what has the writer said about it elsewhere, and why does she say a reader is entitled to notice it?'));
out.push(p('**D  Writing.** Take something you oppose. Write the costly concession, the load-bearing admission with its consequence, and the smaller ask — three sentences — and then say in one line what is left of your case (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Mr Attar', 'I read it twice. ⚠ **I disagree with it and I checked it, and those are different activities.**'],
  ['Hala', 'Most papers only get one.'],
  ['Mr Attar', '⚠ **Most papers only get the argument.** A paper I disagree with that has nothing checkable in it gets a reply, and a reply costs me an afternoon and the writer a week.'],
  ['Hala', 'What made you check?'],
  ['Mr Attar', '⚠ **Two things, and neither was the argument.** ⚠ **Paragraph 5 put the case for accepting better than anybody in this building has put it, with the board price in it — which is the gain I would have raised, and she raised it first.** **I had nothing to correct.**'],
  ['Hala', 'And the second?'],
  ['Mr Attar', '⚠ **She told me where to stop reading.** *If the sixty-one per cent is wrong, stop at paragraph 4.* ⚠ **Nobody has ever done that to me.** **I have seen it four times in twenty-two years and I read the whole paper every time.**'],
  ['Hala', 'And the first version of the same paper?'],
  ['Mr Attar', '⚠ **Eleven points. It would have got four pages of reply from me and nothing else, and nobody would have checked anything.** ⚠ **It would have cost us a month.**'],
  ['Hala', 'So you agree with her?'],
  ['Mr Attar', '⚠ **No. She says forty per cent and I say fifty, and I can say why.** ⚠ **We will settle it in twenty minutes**, which is what the threshold was for, and she knows it.'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**3.1** concede the other side\'s best point in a way a reader can see is expensive',
  '**3.2** name the one thing you may be wrong about and attach a total consequence to it',
  '**3.3** put the other side better than its owner put it, and find out what your case really is',
  '**3.4** give a figure its base, its sources and its threshold, and price the check',
  '**3.5** say what you are not asking for, and narrow the ask until it can be granted this week',
  '**3.6** read your hardest paragraph to its subject, and take the word they correct',
  '**3.7** explain a paper to somebody who disagrees with it, and leave them something to check',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 4 — **Risk, Exposure and the Thing You Cannot Model**: likelihood at range, concentration in one sentence, and the risk you refuse to put a figure on._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
module.exports = out;
