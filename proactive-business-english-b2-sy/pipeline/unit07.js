// Proactive Business English B2 · Syria Edition · Book 1 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'a proximate cause · a distal cause · a causal chain · a link in a chain · which in turn · the effect of which was · a single cause · a contributor · an unevidenced link · to attribute a cause · a condition that made it possible · a decision with no document · a conversation nobody minuted · to trace a cause · months and departments away · a necessary condition · a sufficient condition · the author of a decision · to rule out a cause · to narrow a cause · an evidenced link · a chain that breaks · a fix that would not have prevented it · a remedy aimed at the wrong link · to stop at the first cause · a decision whose author has left · to be traceable · a link you cannot evidence · the first cause you find · a cause and an occasion · a counterfactual test · a chain of four links';
const COLLOC = 'to trace a chain · to break a link · to rule a cause out · to stop at a cause · to carry a chain · to evidence a link · to aim a remedy · to attribute a failure';
const BACK_AT_B2 = 'trigger · root cause · contributing factor';

out.push(h1('Unit 7  Cause at a Distance'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**7.1**  name a proximate and a distal cause, and keep both',
  '**7.2**  chain four links, and say which of them you can evidence',
  '**7.3**  name a cause that is a decision with no document behind it',
  '**7.4**  apply the counterfactual test, and find the fix that would not have worked',
  '**7.5**  refuse a single cause, and separate three contributors from one occasion',
  '**7.6**  say inside the chain which link you cannot evidence',
  '**7.7**  Review & Mediate: the decision whose author has left the company',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The March consignment, and what everybody already knows about it', [
  '⚠ **The March consignment to Ms Tannous was eleven cartons short and nobody has disputed that since the day it was counted.** **What has been disputed for six weeks is why.** **It went out under the agreed terms of 28 April, which run twelve months from 1 May** — **so a short consignment is a term of the agreement and not a favour withheld.**',
  '⚠ **Four answers have been given, by four people, and all four are true.** **The night count was made in a hurry because the lorry was early. The gate sheet has no column for a part pallet. The pallets we buy have been 1,150 wide since 2023 and the racks are built for 1,200. And eleven cartons is exactly one layer of the short pallet.**',
  '⚠ **Mr Dallal\'s people have asked for a written explanation, which is why this is now a paper and not a conversation.** **And a paper that gives one of those four answers is a paper that will be read as a defence** — ⚠ **because whoever reads it will already have heard one of the other three.**',
  '⚠ **This unit is that paper.** **The hard part is not finding the cause. It is that the cause is a decision taken in 2023 by a man who left in 2024, and there is no document.**',
], C.lyellow, C.orange));

// ======================= CYCLE 7.1 =======================
out.push(pb());
out.push(h2('7.1  Proximate and distal cause'));
out.push(p('**Function:** naming two causes and keeping both   ·   **Grammar:** _the immediate cause was X. The condition that made it possible was Y._   ·   **Pronunciation:** two causes said as two sentences'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something that went wrong at your work. Say the cause. ⚠ Then say what made that cause possible.'));
out.push(p('**b**  Which is proximate and which is distal? _the night count was hurried because the lorry came early · the pallets have been fifty millimetres narrow since 2023_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say happens if you give only one cause?   **A** nothing   **B** the reader supplies the other one, and theirs is worse   **C** the paper is shorter'));
out.push(p('**b**  Listen again. **1** What is the proximate cause here? **2** Why does he say the distal one must be second and not first?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  "Two causes, and in that order"', [
  ['Nour', 'The cause was the pallets. They have been fifty millimetres narrow since 2023.'],
  ['Mr Attar', '⚠ **That is a cause and it is not the one that put eleven cartons short on a Tuesday in March.**'],
  ['Nour', 'The count was hurried. The lorry came early.'],
  ['Mr Attar', '⚠ **Now you have both, and a paper needs both, and it needs them in that order.** ⚠ **The immediate cause first, because that is the one the reader was there for.**'],
  ['Nour', 'And if I give only the pallets?'],
  ['Mr Attar', '⚠ **Then you have written a paper about a decision taken two years ago and the reader thinks you are blaming history to avoid blaming Tuesday.** ⚠ **Which is what it is, even when it is true.**'],
  ['Nour', 'And if I give only the hurry?'],
  ['Mr Attar', '⚠ **Then you have written a paper about a man counting fast at two in the morning**, **and the remedy is *do not hurry*, which is not a remedy.** ⚠ **And the same eleven cartons go short again in June.**'],
  ['Nour', 'So the order matters.'],
  ['Mr Attar', '⚠ **The order is the argument.** ⚠ *The immediate cause was a hurried count. The condition that made a hurried count produce exactly eleven cartons is that our pallets have been fifty millimetres narrow since 2023.* **The first sentence answers Tuesday and the second one answers June.**'],
  ['Nour', 'And if I give only one, the reader supplies the other.'],
  ['Mr Attar', '⚠ **He supplies it and his is worse than yours.** ⚠ **A reader given a hurried count supplies carelessness; a reader given a pallet supplies evasion.** **Give him both and he supplies nothing.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Two causes, in order**',
  table(['', 'Write', 'It answers'], [
    ['⚠ **first — proximate**', '⚠ *The immediate cause was a hurried count: the lorry came at one and was loaded by two.*', '⚠ **Tuesday** — the day the reader was there for'],
    ['⚠ **second — distal**', '⚠ *The condition that made a hurried count produce exactly eleven cartons is that our pallets have been fifty millimetres narrow since 2023.*', '⚠ **June** — the next time it would happen'],
    ['**only the first**', 'a man counting fast at two in the morning', '⚠ **and the remedy is *do not hurry*, which is not a remedy**'],
    ['**only the second**', 'a decision taken two years ago', '⚠ **and the reader reads it as blaming history to avoid blaming Tuesday**'],
  ], [1.6, 3.2, 2.2]),
  '⚠ **A paper needs both causes and needs them in that order.** ⚠ **The immediate cause first, because that is the one the reader was there for** — **and the distal one second, because that is the one that answers the next occurrence.**',
  '⚠ **Give one and the reader supplies the other, and his is worse than yours.** ⚠ **A reader given a hurried count supplies carelessness. A reader given a pallet supplies evasion.** **Give him both and he supplies nothing.**',
  '⚠ **Say the two in two separate sentences and do not join them.** **Joined with *because* they become one cause with a reason**; **separated, they are two findings and the second one is a remedy.**',
  '⚠ **The test for a distal cause: does it explain the *amount*?** ⚠ **A hurried count explains a shortage; fifty millimetres explains eleven cartons** — **and a cause that explains the amount is the cause that will still be there in June.**',
  '⚠ **And never write *the root cause*, singular, at the top.** **It commits you to one, and this paper has two, and 7.5 has four.**',
  '**Practise:** Take four failures. Write the immediate cause and the condition that made it possible, in two sentences each.',
  '**Useful phrases:**  the immediate cause was  ·  the condition that made it possible  ·  it answers Tuesday / it answers June  ·  the reader supplies the other one  ·  does it explain the amount?',
  '**Pronunciation – two causes as two sentences.** 🔊 **Track 7.2** Listen twice. ⚠ **The first says *the immediate cause was a hurried count. The condition that made it possible is the pallet width.*** **Two sentences, a full stop between them.** ⚠ **The second joins them with *because*.** **Joined, a listener hears one cause; separated, two.** Say them four times with a stop between.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives one cause; B asks for the other.'));
out.push(dlg(null, [
  ['A', 'The cause was __________.'],
  ['B', '⚠ **That is a cause and it is not the one that __________ on __________.**'],
  ['A', '__________.'],
  ['B', '⚠ **Now you have both. Which is immediate and which is the condition?**'],
  ['A', '__________ is immediate. __________ is the condition.'],
  ['B', '⚠ **And which explains the amount?**'],
  ['A', '__________.'],
  ['B', '⚠ **And if you gave only __________, what would I supply?**'],
  ['A', '__________.'],
]));
out.push(table(['Role card 1 — Tuesday and June', 'Role card 2 — the cause that explains the amount'], [[
  '*The pallets have been fifty millimetres narrow since 2023* → ⚠ **a cause, and not the one that happened on Tuesday.** → ⚠ *The immediate cause was a hurried count; the lorry came at one and was loaded by two.* ⚠ **The first answers Tuesday and the second answers June.**',
  'A has two causes and does not know which is distal. ⚠ **B asks one question: which of them explains the *amount*?** ⚠ **A hurried count explains a shortage of some size; fifty millimetres explains exactly eleven cartons, because eleven is one layer of the short pallet.** **The cause that explains the amount is the one that will still be there in June.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write both causes in two sentences. ⚠ Then say which one explains the amount, and what a reader would have supplied if only one had been given.'));
out.push(PHRASE_CARD(['the immediate cause was', 'the condition that made it possible', 'it answers Tuesday, it answers June', 'the reader supplies the other', 'does it explain the amount?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** failures at your work. Write both causes for each.'));
out.push(table(['What went wrong', 'The immediate cause', 'The condition that made it possible', 'Which explains the amount'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.8, 2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The immediate cause was _______. The condition that made it possible was _______. The one that explains the amount is _______. And if I gave only _______, a reader would supply _______._'));
out.push(p('**Listener task:** count how many conditions are older than two years. ⚠ Then ask how many of them have a document behind them, and expect very few.'));
out.push(p('**Board clinic:** your teacher writes three explanations on the board — look for *the root cause was*, and two causes joined with *because*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE MARCH CONSIGNMENT — THE TWO CAUSES. 6 May. N. Mansour. Root-cause paper, part 1 of 3.**',
  '⚠ **The immediate cause was a hurried count.** _The lorry arrived at one in the morning instead of four and was loaded by two. The night count was made against the gate sheet while the lorry was on the apron, which is not how it is done and is what anybody would have done._',
  '⚠ **The condition that made a hurried count produce exactly eleven cartons is that our pallets have been 1,150 millimetres wide since 2023 and the racks are built for 1,200.** _A short pallet takes eleven fewer cartons in its top layer, and the top layer is the one a hurried count estimates._',
  table(['', 'What it explains', 'What it does not'], [
    ['**the hurried count**', '**that something went short on that Tuesday**', '⚠ **why eleven, and why eleven twice before**'],
    ['**the pallet width**', '⚠ **exactly eleven, every time, for two years**', '**why it happened in March and not in February**'],
    ['**the two together**', '⚠ **both** — **Tuesday and June**', '—'],
  ], [1.6, 2.8, 2.6]),
  '⚠ **The sentence I will not write is *the root cause was the pallet width*.** **It is the better cause and it is not the only one**, ⚠ **and a paper that names one cause invites a remedy aimed at one link** — **which here would be new pallets, costing about four hundred thousand, and the eleven would still go short on a night when the lorry came early and the sheet had no column for a part pallet.**',
  '⚠ **And the clause I have kept against advice is *which is what anybody would have done*.** **Bassel wanted it out.** ⚠ **It is in because the night man did the sensible thing with a lorry on the apron at one in the morning**, **and a paper that leaves that out is a paper about him.** **Unit 2 is why I will not write that paper.**',
  '⚠ **It has happened twice before and that is in part 2.** **March 2024 and August 2024, both eleven, both on nights when the lorry was early.** ⚠ **Nobody connected them, because each was written up as a hurried count** — **and a hurried count is a thing that happens to a man and not a thing that happens to a company.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does each cause explain, and what does it not?'));
out.push(item('2', 'What sentence will the writer not write, and what would it cost?'));
out.push(item('3', 'Why did nobody connect the three occurrences?'));
out.push(box('Writer\'s box', [
  '**The two causes — four parts:** ⚠ **the immediate cause, first, in its own paragraph** → ⚠ **the condition that made it possible, second, explaining the amount** → **a table of what each explains and does not** → ⚠ **and the single-cause sentence you refuse to write.**',
  '⚠ **Make the distal cause explain the quantity.** ⚠ *A short pallet takes eleven fewer cartons in its top layer.* **A distal cause that explains only *that something went wrong* is a second proximate cause**, **and the paper then has two of one kind and none of the other.**',
  '⚠ **Say what each cause does not explain.** ⚠ **The pallet does not explain March rather than February; the hurry does not explain eleven.** **The column is what stops a reader picking one.**',
  '⚠ **Refuse the single-cause sentence in writing, and price the refusal.** ⚠ *A paper that names one cause invites a remedy aimed at one link* — **here, four hundred thousand of new pallets, with the eleven still going short on an early-lorry night.**',
  '⚠ **Keep the clause that defends the person.** ⚠ *Which is what anybody would have done.* **Somebody will want it out.** **It is in because the alternative is a paper about a man**, **and Unit 2 settled that.**',
  '⚠ **And count the previous occurrences.** ⚠ **Twice before, both eleven, both early-lorry nights** — **and nobody connected them because each was written up as a hurried count, which is a thing that happens to a man and not to a company.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two causes of something that went wrong at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE TWO CAUSES. ______________. Root-cause paper, part ______________.**   ⚠ **The immediate cause was ______________.** ______________. **______________, which is not how it is done and is what anybody would have done.**   ⚠ **The condition that made ______________ produce exactly ______________ is that ______________.** ______________.   **______________** | **______________** | ⚠ **______________**   **______________** | ⚠ **______________** | **______________**   ⚠ **The sentence I will not write is *the root cause was ______________*.** **It is the better cause and it is not the only one**, ⚠ **and a paper that names one cause invites a remedy aimed at one link** — **which here would be ______________, costing about ______________, and ______________ would still happen.**   ⚠ **And the clause I have kept against advice is ______________.** ⚠ **It is in because ______________**, **and a paper that leaves it out is a paper about ______________.**   ⚠ **It has happened ______________ before.** ⚠ **Nobody connected them, because each was written up as ______________** — **which is a thing that happens to a person and not to a company.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The immediate cause first, in its own paragraph', ''],
  ['A distal cause that explains the quantity', ''],
  ['What each cause does *not* explain', ''],
  ['The single-cause sentence refused, and the refusal priced', ''],
  ['A clause that defends the person at the sharp end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their distal cause. ⚠ The class says whether it explains the amount — and if it does not, it is a second proximate cause.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that has gone wrong more than once (**200 to 240 words**). Say what the immediate cause was each time, what the condition is, whether anybody connected them, and why not.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line** and write beside the copy:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _why did nobody connect them?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was each occurrence written up on its own? Usually all three — ⚠ **and in two of three the write-ups were done by different people, which is why nobody saw three of the same thing.**'));
out.push(box('Homework', ['Write your final text. Then take one failure, write both causes in two sentences, and check that the second one explains the amount (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.2 =======================
out.push(pb());
out.push(h2('7.2  Chaining'));
out.push(p('**Function:** writing a chain of causes   ·   **Grammar:** _which in turn · the effect of which was · and therefore_   ·   **Pronunciation:** a chain read link by link with a pause at each'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a chain of three things at your work where each caused the next. Say which link you could prove.'));
out.push(p('**b**  Which is a chain and which is a list? _The lorry was early, the count was hurried, the pallet was short. · The lorry was early, which meant the count was made on the apron, the effect of which was that the top layer was estimated._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel say about a chain of four links?   **A** it is too long   **B** two of the four are evidenced and the other two are assumed   **C** all four are equal'));
out.push(p('**b**  Listen again. **1** Which two links are evidenced? **2** What does he say a reader does with an unmarked chain?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  "Which of these four can you prove?"', [
  ['Nour', 'The chain is four links. The lorry was early, so the count was made on the apron, so the top layer was estimated, so eleven were short.'],
  ['Bassel', '⚠ **Read it again and tell me which of the four you can prove.**'],
  ['Nour', 'The lorry was early — the gate sheet has the time on it. One in the morning.'],
  ['Bassel', '⚠ **Evidenced. Next.**'],
  ['Nour', 'The count was made on the apron. …Nobody wrote that down. Abu Yasser says so.'],
  ['Bassel', '⚠ **One man\'s account, which is not nothing and is not a document.** **Next.**'],
  ['Nour', 'The top layer was estimated. That is an inference. Nobody has said it.'],
  ['Bassel', '⚠ **Assumed. And the fourth?**'],
  ['Nour', 'Eleven were short. The receiving note from Beirut, signed.'],
  ['Bassel', '⚠ **So the chain runs: evidenced, one account, assumed, evidenced.** ⚠ **The two ends are solid and the middle is soft, which is the normal shape and nobody ever writes it.**'],
  ['Nour', 'What happens if I do not mark them?'],
  ['Bassel', '⚠ **A reader tests the chain at its weakest link and finds it himself, and then he distrusts the two ends as well.** ⚠ **Mark them and he tests the one you marked, which is the one that deserves testing.**'],
  ['Nour', 'How do I mark them?'],
  ['Bassel', '⚠ **In the sentence, not in a footnote.** ⚠ *The count was made on the apron — Abu Yasser\'s account; there is no record.* **Eight words, and the link is now honest and still in the chain.**'],
  ['Nour', 'It makes the paper look weaker.'],
  ['Bassel', '⚠ **It makes the paper look like a paper.** ⚠ **Four links all stated flat is an assertion with connectives in it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A chain, with its links marked**',
  table(['', 'The link', 'Evidence', 'How to write it'], [
    ['**1**', 'the lorry arrived at one instead of four', '⚠ **the gate sheet**', '*the lorry arrived at one — gate sheet, 12 March*'],
    ['**2**', 'the count was made on the apron', '⚠ **one account; no record**', '⚠ *— Abu Yasser\'s account; there is no record*'],
    ['**3**', 'the top layer was estimated', '⚠ **none — an inference**', '⚠ *which I infer and nobody has stated*'],
    ['**4**', 'eleven cartons were short', '**the Beirut receiving note, signed**', '*eleven short — receiving note, 14 March*'],
    ['⚠ **the shape**', '⚠ **evidenced · one account · assumed · evidenced**', '⚠ **two solid ends and a soft middle — the normal shape, and nobody writes it**', '—'],
  ], [0.6, 2.4, 1.9, 2.5]),
  '⚠ **Connectives make a chain and evidence makes it true.** ⚠ *Which in turn · the effect of which was · and therefore* **join the links; they do not support them.**',
  '⚠ **Mark each link with what holds it up, in the sentence and not in a footnote.** ⚠ **Eight words does it** — *Abu Yasser\'s account; there is no record.*',
  '⚠ **An unmarked chain is tested at its weakest link by the reader, who finds it himself and then distrusts the solid ends as well.** ⚠ **A marked chain is tested at the link you marked, which is the one that deserves testing.**',
  '⚠ **Expect two solid ends and a soft middle.** **The beginning and the end of a chain are usually documents** — **a gate time, a receiving note** — **and the middle is accounts and inferences.** **That is the normal shape of a real explanation.**',
  '⚠ **Say *which I infer* where you have inferred.** **It is three words and it is the difference between a chain and an assertion with connectives in it.**',
  '**Practise:** Take a chain of four. Mark each link evidenced, one account, or assumed, and write the marking into the sentence.',
  '**Useful phrases:**  which of the four can you prove?  ·  one account, which is not a document  ·  which I infer and nobody has stated  ·  he tests the weakest link himself  ·  two solid ends and a soft middle',
  '**Pronunciation – a chain link by link.** 🔊 **Track 7.4** Listen twice. ⚠ **The first reads the four links with a clear pause at each connective.** ⚠ **The second runs them together.** **Run together, a chain is heard as one claim and the listener accepts or rejects all of it; paused, each link is offered separately.** Read four links with four pauses, four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a chain; B asks what holds each link up.'));
out.push(dlg(null, [
  ['A', 'The chain is __________ links. __________, so __________, so __________, so __________.'],
  ['B', '⚠ **Which of them can you prove?**'],
  ['A', '__________ — __________ has it.'],
  ['B', '⚠ **Evidenced. Next.**'],
  ['A', '__________. …Nobody wrote that down. __________ says so.'],
  ['B', '⚠ **One account, which is not a document. Next.**'],
  ['A', '__________. That is an inference.'],
  ['B', '⚠ **So the chain runs __________, __________, __________, __________.** ⚠ **Now mark them in the sentences.**'],
]));
out.push(table(['Role card 1 — evidenced, account, assumed, evidenced', 'Role card 2 — the unmarked chain'], [[
  '⚠ **The gate sheet has the lorry at one. Abu Yasser says the count was on the apron and nobody wrote it down. That the top layer was estimated is an inference nobody has stated. The Beirut receiving note is signed.** ⚠ **Two solid ends and a soft middle.**',
  'A reads a chain with nothing marked. ⚠ **B\'s job is to find the weakest link without being told**, **which takes about twenty seconds.** ⚠ **Then B says what he now thinks of the first and last links** — **which is less than he thought before**, **and that is the cost of not marking.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four links and mark each one. ⚠ Then say which link a reader would attack, and whether the speaker had marked it.'));
out.push(PHRASE_CARD(['which can you prove?', 'one account, not a document', 'which I infer', 'he finds the weak link himself', 'two solid ends, a soft middle']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **two** chains from your work. Mark every link.'));
out.push(table(['Link', 'The claim', 'Evidenced · one account · assumed', 'How I will write the marking'], [['**1**', '', '', ''], ['**2**', '', '', ''], ['**3**', '', '', ''], ['**4**', '', '', '']], [0.6, 2, 1.6, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My chain runs _______, _______, _______, _______. The shape is _______. And the link I would attack is _______._'));
out.push(p('**Listener task:** count how many chains had a soft middle. ⚠ Then ask how many had a soft *end*, which is a different and worse problem.'));
out.push(p('**Board clinic:** your teacher writes three chains on the board — look for a chain where every link is stated flat, and a *therefore* joining two things with nothing between them. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE MARCH CONSIGNMENT — THE CHAIN. 8 May. N. Mansour. Root-cause paper, part 2 of 3.**',
  table(['', 'The link', 'What holds it up', 'Strength'], [
    ['**1**', '**The lorry arrived at one in the morning instead of four.**', '**the gate sheet, 12 March, signed by name**', '⚠ **document**'],
    ['**2**', '**The count was made on the apron, against the gate sheet, with the lorry waiting.**', '⚠ **Abu Yasser\'s account. There is no record of where a count is made.**', '⚠ **one account** — **and the only one there was**'],
    ['**3**', '**The top layer of the short pallet was estimated rather than counted.**', '⚠ **nothing. I infer it, because eleven is exactly one layer and nobody has said it.**', '⚠ **inference** — **the weakest link in this paper**'],
    ['**4**', '**Eleven cartons were short on arrival.**', '**the Beirut receiving note, 14 March, signed by their storeman**', '⚠ **document**'],
  ], [0.4, 3, 3.1, 1.9]),
  '⚠ **Link 3 is the weakest and it is the one the whole paper turns on.** **If the top layer was counted and was right, then eleven cartons went missing somewhere else and everything in this paper is wrong.** ⚠ **I have written that sentence into part 3 under the heading *what would make this paper wrong*, because a reader is entitled to find it in one place rather than to work it out.**',
  '⚠ **And there is a way to turn link 3 into a document, which I have asked for.** **Count a short pallet and a correct pallet, both full, and weigh them.** ⚠ **If the difference is eleven cartons, the inference becomes arithmetic.** **It is twenty minutes and a weighbridge we already have, and I should have done it before writing part 2 rather than after.**',
  '⚠ **Link 2 is the one I expected to be weakest and it is not.** **One man\'s account sounds thin until you ask what the alternative is**, ⚠ **and the alternative is nothing at all: there is no record anywhere of where a count is made**, **which is itself a finding and is in part 3 as a remedy.**',
  '⚠ **What I have not written is *therefore*.** **It appears nowhere in the chain.** ⚠ **Each link says what holds it up and then the next link begins**, **and a reader who disagrees with link 3 can stop there without rejecting links 1 and 4** — **which is the whole purpose of marking them.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which link is weakest, and what follows if it is wrong?'));
out.push(item('2', 'How could that link become a document, and what would it cost?'));
out.push(item('3', 'Which link turned out not to be the weakest, and why not?'));
out.push(box('Writer\'s box', [
  '**A marked chain — four parts:** ⚠ **a table: *link · what holds it up · strength*** → ⚠ **the weakest link and what follows if it is wrong** → ⚠ **how to turn it into a document, priced** → ⚠ **and the link you expected to be weakest.**',
  '⚠ **Put *what holds it up* in a column, with the document\'s date and signatory where there is one.** ⚠ *The gate sheet, 12 March, signed by name.* **A strength column with no documents in it is a chain of opinions.**',
  '⚠ **Say what follows if the weakest link is wrong, and put it where a reader can find it.** ⚠ *If the top layer was counted and was right, eleven cartons went missing somewhere else and everything in this paper is wrong.* **A reader is entitled to find that in one place rather than deduce it.**',
  '⚠ **And look for a way to make the inference a measurement.** ⚠ **Count and weigh a short pallet and a correct one: twenty minutes on a weighbridge you already have.** ⚠ **Admit that you should have done it before writing rather than after** — **which is true in almost every case and is never written.**',
  '⚠ **Expect to be wrong about which link is weakest.** ⚠ **One man\'s account sounds thin until you ask what the alternative is, and the alternative is no record at all** — **which is itself a finding and becomes a remedy.**',
  '⚠ **And do not write *therefore*.** **A marked chain does not need it.** ⚠ **Each link states what holds it up and the next one begins, so a reader can reject one link without rejecting the rest** — **which is the whole purpose of marking.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a marked chain for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE CHAIN. ______________. Root-cause paper, part ______________.**   **1** **______________** | **______________, ______________, signed by ______________** | ⚠ **document**   **2** **______________** | ⚠ **______________\'s account. There is no record of ______________.** | ⚠ **one account**   **3** **______________** | ⚠ **nothing. I infer it, because ______________ and nobody has said it.** | ⚠ **inference — the weakest link**   **4** **______________** | **______________, ______________, signed by ______________** | ⚠ **document**   ⚠ **Link ______________ is the weakest and it is the one the paper turns on.** **If ______________, then ______________ and everything in this paper is wrong.** ⚠ **I have written that under ______________, because a reader is entitled to find it in one place.**   ⚠ **And there is a way to turn it into a document, which I have asked for.** ______________. ⚠ **It is ______________ and I should have done it before writing rather than after.**   ⚠ **Link ______________ is the one I expected to be weakest and it is not.** ⚠ **The alternative is ______________, which is itself a finding.**   ⚠ **What I have not written is *therefore*.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what holds it up* column with dates and signatories', ''],
  ['What follows if the weakest link is wrong', ''],
  ['A way to turn an inference into a measurement, priced', ''],
  ['The link you expected to be weakest, and why it is not', ''],
  ['No *therefore* anywhere in the chain', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their weakest link and what follows if it is wrong. ⚠ The class says whether it could be measured in under an hour.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an explanation at your work that everybody accepts and nobody has evidenced (**200 to 240 words**). Say what the chain is, which links have documents, which has none, what it would take to check, and why nobody has.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _how long would checking the weak link take?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many could the weak link be checked in under an hour? Usually two of three — ⚠ **and in all three the explanation has been repeated for years without anybody checking it.**'));
out.push(box('Homework', ['Write your final text. Then take a four-link chain of your own, mark every link document, account or inference, and go and turn one inference into a measurement (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.3 =======================
out.push(pb());
out.push(h2('7.3  The cause inside a decision nobody recorded'));
out.push(p('**Function:** naming a decision with no document behind it   ·   **Grammar:** _a decision was taken in 2023; there is no document and I have reconstructed it from_   ·   **Pronunciation:** naming an absent document without accusation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a thing at your work that was clearly decided and that has no document. Say how you know it was decided.'));
out.push(p('**b**  Which can be written in a paper? _Somebody decided to change the pallets. · The pallet size changed between the February and April 2023 deliveries; there is no order, note or minute, and the supplier\'s invoices show the change._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala say about naming the man who left?   **A** name him   **B** name the decision and not the man, and say why   **C** leave it out'));
out.push(p('**b**  Listen again. **1** What three documents reconstruct the decision? **2** What is the one thing the paper must not claim?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  "A decision exists even when the paper does not"', [
  ['Nour', 'The pallet width was decided in 2023 and there is nothing in writing. Do I name Mr Jallad? He made the decision and he left in 2024.'],
  ['Hala', '⚠ **What do you know, and what do you believe?**'],
  ['Nour', '⚠ **I know the width changed between February and April 2023, because the supplier\'s invoices give the dimension.** **I believe Mr Jallad agreed it, because he bought the pallets and nobody else could have.**'],
  ['Hala', '⚠ **Then write the first and not the second.** ⚠ **The decision is a fact and the decision-maker is an inference**, **and Unit 2 is why that matters: a name in a paper outlives the paper, and he is not here to answer.**'],
  ['Nour', 'So the paper says a decision was taken and does not say by whom.'],
  ['Hala', '⚠ **The paper says what the documents say, and lists them.** ⚠ *The width changed between the February and the April 2023 deliveries. There is no order, note or minute. The change appears in the supplier\'s invoices of 3 April 2023 and in every invoice since.*'],
  ['Nour', 'That is three sources for a thing that has no document.'],
  ['Hala', '⚠ **Which is the point.** ⚠ **A decision with no document is not an unknown; it is a thing you reconstruct from what the decision touched.** **Invoices. A dimension on a rack drawing. The date the complaints started.**'],
  ['Nour', 'And the one thing I must not claim?'],
  ['Hala', '⚠ **That it was a mistake.** ⚠ **Fifty millimetres narrower is cheaper and it fits a lorry better, and for everything except our own racks it was a good decision.** ⚠ **A paper that calls it an error is a paper written by somebody who has only counted one side of it.**'],
  ['Nour', 'Then what is the finding?'],
  ['Hala', '⚠ **That a decision which was right for the yard and wrong for the racks was taken by one man with no document**, ⚠ **and so nobody checked the second half.** **The finding is the absence, not the width.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A decision with no document**',
  table(['', 'Write', 'Not'], [
    ['**the fact**', '⚠ *The width changed between the February and the April 2023 deliveries.*', '*somebody changed the pallets*'],
    ['**the absence**', '⚠ *There is no order, note or minute.*', '**silence, which a reader reads as not having looked**'],
    ['⚠ **the reconstruction**', '⚠ *The change appears in the supplier\'s invoices of 3 April 2023, on the rack drawing of June, and in the first complaint in August.*', '⚠ **an assertion with no sources**'],
    ['⚠ **the decision-maker**', '⚠ **nothing** — **the decision is a fact and the maker is an inference**', '*Mr Jallad decided it*'],
    ['⚠ **and not**', '⚠ **that it was a mistake**', '**it was cheaper and fitted a lorry better; it was right for the yard**'],
  ], [1.5, 3.4, 2.1]),
  '⚠ **A decision with no document is not an unknown. It is a thing you reconstruct from what the decision touched** — **invoices, a dimension on a drawing, the date the complaints started.**',
  '⚠ **Write the absence as a sentence.** ⚠ *There is no order, note or minute.* **Silence about a missing document reads as not having looked**, **and three named places you looked is worth more than any amount of certainty.**',
  '⚠ **The decision is a fact; the decision-maker is an inference.** ⚠ **A name in a paper outlives the paper and he is not here to answer** — **which is Unit 2 arriving in a root-cause paper.**',
  '⚠ **And do not call it a mistake.** ⚠ **Narrower pallets are cheaper and fit a lorry better, and for everything except the racks it was a good decision.** **A paper that calls it an error has counted one side.**',
  '⚠ **The finding is the absence, not the width.** ⚠ **A decision right for the yard and wrong for the racks was taken with no document, so nobody checked the second half** — **and that sentence is a remedy, where *the pallets are wrong* is a purchase.**',
  '**Practise:** Take an undocumented decision at your work. Write the fact, the absence, three places you looked, and the thing you will not claim.',
  '**Useful phrases:**  what do you know and what do you believe?  ·  the decision is a fact, the maker is an inference  ·  there is no order, note or minute  ·  it was right for the yard  ·  the finding is the absence',
  '**Pronunciation – naming an absent document without accusation.** 🔊 **Track 7.6** Listen twice. ⚠ **The first says *there is no order, note or minute* flatly, as the third item in a list of facts.** ⚠ **The second slows and stresses *no*.** **Stressed, it is an accusation at a man who has left; flat, it is a finding.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an undocumented decision; B separates what is known from what is believed.'));
out.push(dlg(null, [
  ['A', '__________ was decided in __________ and there is nothing in writing. Do I name __________?'],
  ['B', '⚠ **What do you know, and what do you believe?**'],
  ['A', '⚠ **I know __________, because __________.** **I believe __________, because __________.**'],
  ['B', '⚠ **Then write the first and not the second. Where have you looked?**'],
  ['A', '__________, __________ and __________.'],
  ['B', '⚠ **Write that, in a sentence. And the one thing you must not claim?**'],
  ['A', '⚠ **That it was a mistake.** It was __________ for __________.'],
  ['B', '⚠ **So what is the finding?**'],
  ['A', '⚠ **That __________ was taken with no document, and so nobody checked __________.**'],
]));
out.push(table(['Role card 1 — known and believed', 'Role card 2 — the decision that was half right'], [[
  '⚠ **Known: the width changed between the February and April 2023 deliveries, from the supplier\'s invoices.** ⚠ **Believed: that Mr Jallad agreed it, because he bought the pallets.** ⚠ **The first goes in the paper and the second does not** — **the decision is a fact and the maker is an inference.**',
  'A wants to write that the pallet decision was an error. ⚠ **B asks what was good about it.** ⚠ **Cheaper, and it fits a lorry better** — **right for everything except the racks.** ⚠ **Then B gives A the finding: a decision right for the yard and wrong for the racks, taken with no document, so nobody checked the second half.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write what is known and what is believed, and the three places the writer looked. ⚠ Then write the finding, and check it is about an absence and not about a thing.'));
out.push(PHRASE_CARD(['known and believed', 'the maker is an inference', 'no order, note or minute', 'right for the yard', 'the finding is the absence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** undocumented decisions at your work. Reconstruct each.'));
out.push(table(['The decision, as a fact', 'Where I looked and found nothing', 'What reconstructs it', 'What was right about it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.6, 1.9, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The fact is _______. There is no _______, _______ or _______. It is reconstructed from _______. And what was right about it is _______._'));
out.push(p('**Listener task:** count how many of the decisions had somebody who has since left. ⚠ Then ask how many were partly right, and expect most of them.'));
out.push(p('**Board clinic:** your teacher writes three reconstructions on the board — look for a named decision-maker who cannot answer, and a reconstruction with no sources in it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE PALLET DECISION OF 2023. 10 May. N. Mansour. Root-cause paper, part 3 of 3, section A.**',
  '**What is known.** ⚠ **The pallets delivered in February 2023 were 1,200 millimetres wide. Those delivered in April 2023 were 1,150. Every delivery since has been 1,150.**',
  '**Where there is nothing.** ⚠ **There is no purchase order, no note, no minute, and nothing in the file of correspondence with the pallet supplier. I have looked in the purchase file, the 2023 correspondence file, the minute book and the supplier\'s own statements.**',
  table(['', 'What reconstructs the decision', 'Date'], [
    ['**1**', '**the supplier\'s invoice giving the dimension**', '**3 April 2023**'],
    ['**2**', '⚠ **the rack drawing, revised in pencil by somebody to show 1,150 and never reissued**', '**June 2023, undated in ink**'],
    ['**3**', '**the first complaint of a short top layer, from Ms Tannous**', '**August 2023**'],
    ['**4**', '⚠ **the price — about nine per cent less a pallet, which is in the invoices**', '**from April 2023**'],
  ], [0.4, 4.4, 1.6]),
  '⚠ **What this paper does not say, and will not.** **It does not say who decided it.** ⚠ **I believe it was Mr Jallad, because he bought the pallets and nobody else could have, and he left in July 2024 and cannot answer.** **The decision is a fact and the decision-maker is an inference, and an inference about a man who has gone does not belong in a document that outlives both of us.**',
  '⚠ **And it does not say that the decision was wrong.** **Nine per cent less a pallet, on about two thousand pallets a year, is a real saving.** **They fit a lorry better by one row.** ⚠ **For everything except our own racks the decision was correct, and I have put the saving in the table so that a reader can see both halves.**',
  '⚠ **The finding is the absence.** **A decision that was right for the yard and wrong for the racks was taken by one person with no document** — ⚠ **and because there was no document, nobody checked the second half.** **The remedy is not a pallet. It is that a change to a stated dimension goes on the rack drawing in ink, with a date, and the drawing is reissued.** **It is in section B with a name and a date against it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where did the writer look, and what did she find?'));
out.push(item('2', 'What are the two things the paper will not say, and why?'));
out.push(item('3', 'What is the finding, and what is the remedy?'));
out.push(box('Writer\'s box', [
  '**A decision with no document — four parts:** **what is known, as dimensions and dates** → ⚠ **where there is nothing, with the files named** → ⚠ **a table of what reconstructs it, with dates** → ⚠ **and the two things the paper will not say.**',
  '⚠ **Name the files you searched.** ⚠ *The purchase file, the 2023 correspondence file, the minute book and the supplier\'s statements.* **Four named places is a search; *there is no record* is a claim.**',
  '⚠ **Put the price in the reconstruction table.** ⚠ **Nine per cent less a pallet on two thousand pallets a year** — **because a decision reconstructed only from its damage reads as inexplicable**, **and a reader who cannot see why anybody did it does not believe the reconstruction.**',
  '⚠ **Refuse the name, and say why in the paper.** ⚠ **The decision is a fact and the maker is an inference, and an inference about a man who has gone does not belong in a document that outlives both of you.**',
  '⚠ **Refuse *wrong*, and show the saving.** ⚠ **For everything except the racks the decision was correct.** **Both halves in the table, so a reader can see them.**',
  '⚠ **And make the finding the absence, because only the absence has a cheap remedy.** ⚠ *A change to a stated dimension goes on the drawing in ink, with a date, and the drawing is reissued.* **The pallet finding costs four hundred thousand; the absence finding costs a pen.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Reconstruct an undocumented decision at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________. ______________. ______________.**   **What is known.** ⚠ **______________ were ______________. ______________ were ______________. ______________ since has been ______________.**   **Where there is nothing.** ⚠ **There is no ______________, no ______________, no ______________. I have looked in ______________, ______________, ______________ and ______________.**   **1** **______________** | **______________**   **2** ⚠ **______________** | **______________**   **3** **______________** | **______________**   **4** ⚠ **the price — ______________** | **______________**   ⚠ **What this paper does not say, and will not.** **It does not say who decided it.** ⚠ **I believe it was ______________, because ______________, and ______________ and cannot answer.** **The decision is a fact and the decision-maker is an inference.**   ⚠ **And it does not say the decision was wrong.** **______________ is a real saving.** ⚠ **For everything except ______________ the decision was correct.**   ⚠ **The finding is the absence.** ⚠ **Because there was no document, nobody checked ______________.** **The remedy is not ______________. It is that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The files searched, named', ''],
  ['The price or the benefit, in the reconstruction', ''],
  ['The name refused, with the reason in the paper', ''],
  ['*Wrong* refused, and both halves shown', ''],
  ['The finding is an absence, and its remedy is cheap', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their finding and their remedy. ⚠ The class says what the remedy costs — and if it costs more than a pen, the finding is still about the thing and not the absence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision at your work whose author has gone (**200 to 240 words**). Say what was decided, how you know, what was right about it, what nobody checked, and what the remedy is.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was anything right about the decision?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the decision partly right? Usually all three — ⚠ **and in two of three nobody has ever said so, because the only people who discuss it are the ones carrying the half that went wrong.**'));
out.push(box('Homework', ['Write your final text. Then take an undocumented decision at your work, name four places you looked, and write the sentence that makes the absence the finding (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.4 =======================
out.push(pb());
out.push(h2('7.4  Counterfactual discipline'));
out.push(p('**Function:** testing a remedy against the event   ·   **Grammar:** _had we done X, we would still have had Y_   ·   **Pronunciation:** the third conditional said without triumph'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say a fix that was made at your work after something went wrong. Say whether it would have prevented it.'));
out.push(p('**b**  Which is the harder sentence to write? _If we had had wider pallets, this would not have happened. · Had we had wider pallets in March, we would still have been eleven short, because the count was made on the apron and the sheet has no column for a part pallet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mr Attar say most remedies are aimed at?   **A** the cause   **B** the link that is easiest to see   **C** the cheapest link'));
out.push(p('**b**  Listen again. **1** Which of the three remedies survives the test? **2** What does he say about a remedy that would not have prevented it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  "Run it backwards and see what survives"', [
  ['Mr Attar', 'You have three remedies. Run each one backwards through March and tell me what survives.'],
  ['Nour', 'One: wider pallets. ⚠ **Had we had 1,200 pallets in March, the top layer would have been full and the count would have been right.** That one works.'],
  ['Mr Attar', '⚠ **Does it? The lorry still came at one. The count was still made on the apron.**'],
  ['Nour', '…The count would have been right because there was nothing to estimate.'],
  ['Mr Attar', '⚠ **Good. That is a real answer and it survives.** **Two.**'],
  ['Nour', 'Two: a column on the gate sheet for a part pallet. ⚠ **Had the sheet had a column in March, the night man would have had to write a figure in it.** Which he would have estimated.'],
  ['Mr Attar', '⚠ **So it does not survive.**'],
  ['Nour', '⚠ **It survives for the second occurrence and not the first.** **It would not have prevented March and it would have made March visible in April, because the estimate would have been on paper.**'],
  ['Mr Attar', '⚠ **Then say that, exactly as you have just said it.** ⚠ **A remedy that would not have prevented it and would have caught it is a good remedy and it is not the same remedy**, **and a paper that does not separate the two gets both rejected.**'],
  ['Nour', 'And three: do not count on the apron.'],
  ['Mr Attar', '⚠ **Run it backwards.**'],
  ['Nour', '⚠ **Had the rule existed in March, the night man would have had a lorry on the apron at one in the morning and a rule telling him to take it inside.** ⚠ **He would have counted on the apron and written nothing about it, because he always has, and there was no record of where a count is made.**'],
  ['Mr Attar', '⚠ **So remedy three is a rule aimed at a man, and it fails the test, and you should write that it fails.** ⚠ **A root-cause paper that lists three remedies and tests none of them is a wish list with evidence at the front.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The counterfactual test**',
  table(['The remedy', 'Run backwards through the event', 'Verdict'], [
    ['**wider pallets**', '⚠ *Had we had 1,200 pallets in March, the top layer would have been full and there would have been nothing to estimate.*', '⚠ **survives — it prevents**'],
    ['**a column on the gate sheet**', '⚠ *Had the sheet had a column, the night man would have written a figure in it, which he would have estimated.*', '⚠ **does not prevent — and it CATCHES, in April**'],
    ['**a rule about counting inside**', '⚠ *Had the rule existed, he would have counted on the apron and written nothing, because there was no record of where a count is made.*', '⚠ **fails — a rule aimed at a man**'],
  ], [1.5, 4, 1.6]),
  '⚠ **Run every remedy backwards through the event and say what survives.** ⚠ **A root-cause paper that lists three remedies and tests none of them is a wish list with evidence at the front.**',
  '⚠ **Separate *prevents* from *catches*.** ⚠ **A remedy that would not have prevented March and would have made March visible in April is a good remedy and it is not the same remedy** — **and a paper that does not separate the two gets both rejected.**',
  '⚠ **A remedy aimed at a person fails the test almost always.** ⚠ *Do not count on the apron* **meets a man with a lorry on the apron at one in the morning**, **and he does what he did before, and writes nothing, because there is no record of where a count is made.**',
  '⚠ **Say which of your own remedies fails.** **It is the sentence that makes the other two believable** — **and a reader who finds the failing one himself discounts all three.**',
  '⚠ **And write the test in the third conditional, flatly.** ⚠ *Had we had wider pallets, we would still have been eleven short, because…* **Triumph in that sentence turns a test into an argument.**',
  '**Practise:** Take three remedies from your work. Run each backwards and mark it prevents, catches, or fails.',
  '**Useful phrases:**  run it backwards  ·  what survives?  ·  it would not have prevented it and it would have caught it  ·  a rule aimed at a man  ·  a wish list with evidence at the front',
  '**Pronunciation – the third conditional without triumph.** 🔊 **Track 7.8** Listen twice. ⚠ **The first says *had the rule existed in March, he would have counted on the apron anyway* flatly, as a result.** ⚠ **The second stresses *anyway*.** **Stressed, it is a point being scored off whoever proposed the rule; flat, it is a test result.** Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A proposes a remedy; B runs it backwards.'));
out.push(dlg(null, [
  ['A', 'Remedy one: __________.'],
  ['B', '⚠ **Run it backwards through __________. What survives?**'],
  ['A', '⚠ **Had we had __________ in __________, __________.** That one works.'],
  ['B', '⚠ **Does it? __________ still __________.**'],
  ['A', '…__________, because __________.'],
  ['B', '⚠ **Good. Two.**'],
  ['A', 'Two: __________. ⚠ **Had __________, __________.** Which __________.'],
  ['B', '⚠ **So it does not prevent. Does it catch?**'],
  ['A', '⚠ **It survives for the second occurrence and not the first.**'],
  ['B', '⚠ **Then say exactly that, and say which of the three fails.**'],
]));
out.push(table(['Role card 1 — prevents, catches, fails', 'Role card 2 — the rule aimed at a man'], [[
  '⚠ **Wider pallets: nothing to estimate — prevents.** ⚠ **A column on the gate sheet: he writes an estimate — does not prevent, catches in April.** ⚠ **A rule about counting inside: he counts on the apron and writes nothing — fails.** **Three remedies, three different verdicts, and the paper says so.**',
  'A proposes a remedy that is an instruction to a person. ⚠ **B puts the person back in the moment: a lorry on the apron at one in the morning, a driver waiting, and a rule saying take it inside.** ⚠ **Ask what he does.** **He does what he did.** ⚠ **Then ask what would have to be true for the rule to work**, **and the answer is a document, a place or a thing** — **never a resolution.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three remedies and mark each prevents, catches or fails. ⚠ Then write what would have to be true for the failing one to work.'));
out.push(PHRASE_CARD(['run it backwards', 'what survives?', 'does not prevent, catches', 'a rule aimed at a man', 'a wish list with evidence']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** remedies from your work. Test each one.'));
out.push(table(['The remedy', 'Run backwards: what would have happened', 'Prevents · catches · fails', 'What would make it work'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 2.3, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Remedy _______ prevents, because _______. Remedy _______ does not prevent and catches, because _______. And remedy _______ fails, because _______._'));
out.push(p('**Listener task:** count how many failing remedies were instructions to a person. ⚠ Then ask how many have already been in force for a year.'));
out.push(p('**Board clinic:** your teacher writes three remedies on the board — look for *staff to be reminded*, and a remedy that is listed without being tested. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE MARCH CONSIGNMENT — THE REMEDIES, TESTED. 12 May. N. Mansour. Root-cause paper, part 3 of 3, section B.**',
  table(['', 'The remedy', 'Run backwards through March', 'Verdict', 'Cost'], [
    ['**1**', '**Buy 1,200 pallets.**', '⚠ **the top layer would have been full and there would have been nothing to estimate**', '⚠ **prevents**', '⚠ **about 400,000 and nine per cent a pallet for ever**'],
    ['**2**', '**A column on the gate sheet for a part pallet.**', '⚠ **he would have written an estimate in the column** — **so not prevented** — ⚠ **and the estimate would have been on paper and read in April**', '⚠ **does not prevent; catches at the next count**', '⚠ **a reprinted sheet, about nothing**'],
    ['**3**', '**A rule that counts are made inside.**', '⚠ **he would have counted on the apron and written nothing, as he always has, because there is no record of where a count is made**', '⚠ **fails** — **a rule aimed at a man**', '**nothing, and it would be in force and useless**'],
    ['**4**', '⚠ **The rack drawing is revised in ink, dated, and reissued whenever a stated dimension changes.**', '⚠ **the 2023 change would have been on a reissued drawing, somebody would have compared 1,150 with 1,200, and the second half of the decision would have been checked in 2023**', '⚠ **prevents — at the distal cause**', '⚠ **a pen, and a habit**'],
  ], [0.4, 2.2, 3.2, 1.6, 1.8]),
  '⚠ **Remedy 4 is the only one that reaches the distal cause, and it is the cheapest of the four.** **That is not a coincidence and it is not luck.** ⚠ **A remedy aimed at the proximate cause has to beat a man at two in the morning with a lorry waiting; a remedy aimed at the distal cause has to beat a drawing.**',
  '⚠ **Remedy 2 is the one I would have dropped a month ago and it is the second most valuable.** **It does not prevent anything.** ⚠ **It converts an estimate into a written figure**, **and a written estimate is read by the next person** — **so March would have been visible in April instead of in May.** **A remedy that catches is not a failed remedy and a paper has to say which it is.**',
  '⚠ **Remedy 3 fails and I am recommending against it, and it is the one that would have been adopted.** **It costs nothing, it sounds like an answer, and it would be in force by June.** ⚠ **It would also be the fourth rule in this building aimed at what a man does at two in the morning with a driver waiting**, **and the other three are kept about as well as this one would be.**',
  '⚠ **And remedy 1, which prevents, I am not recommending either.** **Four hundred thousand and nine per cent a pallet for ever, to fix a thing that remedy 4 fixes with a pen** — ⚠ **and I have said so here rather than leaving it out, because a reader who sees three remedies and no mention of the obvious expensive one assumes I have not thought of it.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is remedy 4 the cheapest and the only one that reaches the distal cause?'));
out.push(item('2', 'Why is remedy 2 valuable although it prevents nothing?'));
out.push(item('3', 'Why is the expensive remedy mentioned at all?'));
out.push(box('Writer\'s box', [
  '**Remedies, tested — four parts:** ⚠ **a table: *remedy · run backwards · verdict · cost*** → ⚠ **the one that reaches the distal cause** → ⚠ **the one that catches rather than prevents** → ⚠ **and the one that fails, which is the one that would have been adopted.**',
  '⚠ **Write the backwards run in full, in the third conditional, for every remedy.** **A verdict with no run behind it is an opinion**, **and the run is three lines.**',
  '⚠ **Put the cost column next to the verdict.** ⚠ **The remedy that reaches the distal cause is usually the cheapest, and that is not luck** — **a remedy aimed at the proximate cause has to beat a man at two in the morning with a lorry waiting; one aimed at the distal cause has to beat a drawing.**',
  '⚠ **Keep the remedy that catches and label it.** ⚠ **It prevents nothing and it converts an estimate into a written figure, which the next person reads** — **so the event becomes visible one month later instead of two.** **A remedy that catches is not a failed remedy.**',
  '⚠ **Name the failing remedy and say it would have been adopted.** ⚠ **It costs nothing, it sounds like an answer, and it would be the fourth rule in the building aimed at what a man does at two in the morning** — **and the other three are kept about as well as it would be.**',
  '⚠ **And include the expensive remedy you are not recommending.** ⚠ **A reader who sees no mention of the obvious costly answer assumes you have not thought of it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Test the remedies for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — THE REMEDIES, TESTED. ______________. ______________.**   **1** **______________** | ⚠ **______________** | ⚠ **prevents** | ⚠ **______________**   **2** **______________** | ⚠ **______________** — **so not prevented** — ⚠ **and ______________** | ⚠ **does not prevent; catches** | ⚠ **______________**   **3** **______________** | ⚠ **______________, as ______________ always has, because ______________** | ⚠ **fails** — **a rule aimed at a man** | **nothing, and it would be in force and useless**   **4** ⚠ **______________** | ⚠ **______________** | ⚠ **prevents — at the distal cause** | ⚠ **______________**   ⚠ **Remedy ______________ is the only one that reaches the distal cause, and it is the cheapest.** ⚠ **A remedy aimed at the proximate cause has to beat ______________; one aimed at the distal cause has to beat ______________.**   ⚠ **Remedy ______________ prevents nothing and is the second most valuable.** ⚠ **It converts ______________ into ______________, and ______________ is read by the next person.**   ⚠ **Remedy ______________ fails and it is the one that would have been adopted.** **It costs nothing, it sounds like an answer, and ______________.**   ⚠ **And ______________, which prevents, I am not recommending either**, **because ______________** — ⚠ **and I have said so rather than leaving it out, because a reader who sees no mention of it assumes I have not thought of it.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A backwards run in the third conditional for every remedy', ''],
  ['A cost column beside the verdict', ''],
  ['A remedy that catches, labelled as catching', ''],
  ['The failing remedy named, and said to be the likely one', ''],
  ['The expensive remedy mentioned although not recommended', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their failing remedy. ⚠ The class says whether it is an instruction to a person — and in most cases it is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a fix at your work that was made and would not have prevented the thing (**200 to 240 words**). Say what went wrong, what was done, what would have happened if the fix had been in force, whether anybody has noticed, and what would have worked.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the fix an instruction to a person?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the fix an instruction to a person? Usually all three — ⚠ **and in two of three the same thing has happened again since the fix was made.**'));
out.push(box('Homework', ['Write your final text. Then take the last fix made at your work, run it backwards through the event in the third conditional, and mark it prevents, catches or fails (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.5 =======================
out.push(pb());
out.push(h2('7.5  Refusing the single cause'));
out.push(p('**Function:** separating contributors from an occasion   ·   **Grammar:** _no single cause will carry this · three contributors and one occasion_   ·   **Pronunciation:** a refusal of a question said without evasion'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a question at your work of the form *so what caused it?* Say what you answered.'));
out.push(p('**b**  Which is the honest answer? _The pallets. · No single cause will carry this. Three things made it possible and one thing set it off, and the one that set it off was the lorry coming early._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia say the questioner actually wants?   **A** the cause   **B** one thing to tell somebody else   **C** an apology'));
out.push(p('**b**  Listen again. **1** What is the difference between a contributor and an occasion? **2** What does she say you must give instead of one cause?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  "He wants one thing to say to somebody else"', [
  ['Nadia', 'Mr Dallal\'s man will telephone and ask what caused it. What will you say?'],
  ['Nour', 'That no single cause will carry it.'],
  ['Nadia', '⚠ **And he will say *yes, but what caused it*, and you will say it again, and he will write down *they would not say*.**'],
  ['Nour', 'It is the truth.'],
  ['Nadia', '⚠ **It is the truth and it is not an answer, because he does not want a cause.** ⚠ **He wants one thing to say to somebody else.** **He has his own manager.**'],
  ['Nour', 'So I give him one thing.'],
  ['Nadia', '⚠ **You give him the occasion, and you call it the occasion.** ⚠ *The lorry came three hours early, which is what set it off. Three other things made it possible and they are in the paper.* **Now he has one thing and it is true and it is labelled.**'],
  ['Nour', 'What is the difference between a contributor and an occasion?'],
  ['Nadia', '⚠ **A contributor is a thing that was already there. An occasion is the thing that happened that day.** ⚠ **Narrow pallets, a gate sheet with no column, and no record of where counts are made** — **all three were there in February and nothing went short.**'],
  ['Nour', 'And the early lorry is the only thing that was different.'],
  ['Nadia', '⚠ **Which is why it is the occasion, and why it is also the least interesting of the four.** ⚠ **Remove the lorry and the other three are still loaded.** **The next early lorry is in June.**'],
  ['Nour', 'So the paper refuses one cause and the telephone call gives one.'],
  ['Nadia', '⚠ **The telephone call gives the occasion and says there are three contributors in the paper.** ⚠ **That is not two different answers.** **It is one answer at two lengths, and if he reads the paper afterwards nothing in it contradicts what you told him.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Contributors and an occasion**',
  table(['', 'What it is', 'Here'], [
    ['⚠ **a contributor**', '⚠ **a thing that was already there**', '**narrow pallets · a sheet with no column · no record of where counts are made**'],
    ['⚠ **the occasion**', '⚠ **the thing that happened that day**', '**the lorry came three hours early**'],
    ['**the test**', '⚠ **what was different about that day?**', '⚠ **all three contributors were there in February and nothing went short**'],
    ['⚠ **on the telephone**', '⚠ *the lorry came three hours early, which is what set it off; three other things made it possible and they are in the paper*', '**one thing, true, and labelled**'],
  ], [1.4, 2.6, 3]),
  '⚠ **_No single cause will carry this_ is true and is not an answer.** ⚠ **The questioner does not want a cause. He wants one thing to say to somebody else** — **he has his own manager** — **and a man who gets nothing writes down *they would not say*.**',
  '⚠ **Give the occasion and call it the occasion.** **One thing, true, labelled, and with the number of contributors named** — ⚠ *three other things made it possible and they are in the paper.*',
  '⚠ **A contributor was already there; an occasion happened that day.** ⚠ **The test is one question: what was different about that day?** **All three contributors were present in February and nothing went short.**',
  '⚠ **The occasion is the least interesting of the four and it is the one everybody asks for.** ⚠ **Remove the lorry and the other three are still loaded, and the next early lorry is in June.**',
  '⚠ **One answer at two lengths, not two answers.** **The telephone call gives the occasion and says the contributors are in the paper** — **so if he reads the paper afterwards, nothing contradicts what you told him.**',
  '**Practise:** Take a failure. List the contributors, name the occasion, and give the one-sentence telephone answer.',
  '**Useful phrases:**  he wants one thing to say to somebody else  ·  the occasion, and call it the occasion  ·  what was different about that day?  ·  remove it and the other three are still loaded  ·  one answer at two lengths',
  '**Pronunciation – refusing a question without evading it.** 🔊 **Track 7.10** Listen twice. ⚠ **The first says *the lorry came three hours early, which is what set it off* and goes straight on to the contributors.** ⚠ **The second begins *well, it is complicated*.** **A listener who hears *it is complicated* stops listening and writes down that you would not say.** Say the first four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B asks for one cause; A gives the occasion.'));
out.push(dlg(null, [
  ['B', 'What caused it?'],
  ['A', '⚠ **No single cause will carry it.**'],
  ['B', '⚠ **Yes, but what caused it?**'],
  ['A', '…'],
  ['B', '⚠ **I am going to write down that you would not say. Try again.**'],
  ['A', '⚠ **__________, which is what set it off. __________ other things made it possible and they are in the paper.**'],
  ['B', '⚠ **Better. Which of them was already there?**'],
  ['A', '__________, __________ and __________.'],
  ['B', '⚠ **And what was different about that day?**'],
  ['A', '⚠ **__________. Which is why it is the occasion.**'],
]));
out.push(table(['Role card 1 — the telephone call', 'Role card 2 — the contributor presented as the cause'], [[
  '⚠ **B is Mr Dallal\'s man and has his own manager to report to.** ⚠ **A says *no single cause will carry it* twice and B writes down *they would not say*.** ⚠ **Then: *the lorry came three hours early, which is what set it off; three other things made it possible and they are in the paper.*** **One thing, true, labelled.**',
  'A names the pallet width as the cause. ⚠ **B asks what was different about that day.** ⚠ **Nothing — the pallets were the same width in February and nothing went short.** ⚠ **So the pallets are a contributor and not the occasion**, **and a paper that calls a contributor *the cause* will be refuted by anybody who remembers February.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the contributors and the occasion. ⚠ Then write the one-sentence telephone answer, and check it carries the number of contributors.'));
out.push(PHRASE_CARD(['one thing to say to somebody else', 'the occasion, and call it so', 'what was different that day?', 'the others are still loaded', 'one answer at two lengths']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **three** failures at your work. Separate the contributors from the occasion.'));
out.push(table(['What went wrong', 'Contributors — already there', 'The occasion — different that day', 'The telephone answer'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.3, 2.1, 1.8, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The contributors were _______, _______ and _______. The occasion was _______, because that is what was different that day. And on the telephone I would say _______._'));
out.push(p('**Listener task:** count how many occasions were somebody else\'s doing — a supplier, the weather, a customer. ⚠ Then ask how many of the contributors were the speaker\'s own organisation\'s.'));
out.push(p('**Board clinic:** your teacher writes three answers on the board — look for *it is complicated*, and a contributor named as the cause. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE MARCH CONSIGNMENT — WHY THERE IS NO SINGLE CAUSE. 14 May. N. Mansour. Root-cause paper, the summary page, for Mr Dallal.**',
  '⚠ **The occasion: the lorry arrived at one in the morning instead of four.** **That is what was different about 12 March, and it is the only thing that was.**',
  table(['', 'The three contributors', 'Present since', 'Also present in February, when nothing went short'], [
    ['**1**', '**pallets 1,150 wide against racks built for 1,200**', '**April 2023**', '⚠ **yes**'],
    ['**2**', '**a gate sheet with no column for a part pallet**', '⚠ **1998, when the sheet was drawn up**', '⚠ **yes**'],
    ['**3**', '⚠ **no record anywhere of where a count is made**', '⚠ **never recorded at all**', '⚠ **yes**'],
  ], [0.4, 3.2, 1.5, 2.6]),
  '⚠ **The right-hand column is the whole argument of this page and it is three words repeated.** **All three contributors were present in February 2024, in January, and in every month since April 2023.** ⚠ **Nothing went short in any of them.** **So no contributor caused this, and the occasion did not cause it either** — **the lorry has come early before and nothing went short, because the count was made inside.**',
  '⚠ **What caused it is the four together, and that sentence is useless on a telephone**, **which is why the paragraph above exists and why the telephone answer is the occasion.**',
  '⚠ **The sentence I have put at the top in bold, for the reader who reads four lines:** ⚠ **_The lorry came three hours early, which is what set it off. Three other things made it possible and they are set out below._** **It is twenty-six words, it is true, and it is the first thing on the page** — **and Unit 1 is why.**',
  '⚠ **And the thing I will not write, although it is true: that the second contributor has been there since 1998 and nobody has ever noticed.** ⚠ **It is true, it is the oldest fault in this building, and in a paper to a customer it reads as *we have been like this for twenty-seven years*** — **which is a sentence about us and not about his eleven cartons.** **It is in the internal version, at the top, where it belongs.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the right-hand column prove?'));
out.push(item('2', 'What is at the top of the page in bold, and why?'));
out.push(item('3', 'What is true and left out, and where does it go instead?'));
out.push(box('Writer\'s box', [
  '**Why there is no single cause — four parts:** ⚠ **the occasion, first, as the thing that was different** → ⚠ **a table of contributors with *present since* and *also present when nothing went wrong*** → **the four-line sentence at the top** → ⚠ **and the true thing you leave out of this version.**',
  '⚠ **Put *also present when nothing went wrong* in a column and answer it *yes* for every contributor.** **Three *yes*es prove that no contributor caused it** — ⚠ **and the proof is three words repeated, which is why it must be a column and not a sentence.**',
  '⚠ **Say that the occasion did not cause it either.** ⚠ **The lorry has come early before and nothing went short, because the count was made inside.** **A page that proves the contributors innocent and leaves the occasion guilty has not finished the argument.**',
  '⚠ **Then write the four-line version at the top, in bold, for a reader who stops there.** ⚠ *The lorry came three hours early, which is what set it off. Three other things made it possible and they are set out below.* **Twenty-six words, and Unit 1 is why.**',
  '⚠ **And leave out the true thing that is about you rather than about their loss.** ⚠ **A sheet with no column since 1998 reads as *we have been like this for twenty-seven years*** — **true, the oldest fault in the building, and not about his eleven cartons.** **It goes in the internal version, at the top.**',
  '⚠ **One page for the customer and one for inside, with the same facts in a different order.** **Unit 6 is how; this cycle is why.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *why there is no single cause* for something at your work (**80 words or more**). Use the frame.'));
out.push(p('**______________ — WHY THERE IS NO SINGLE CAUSE. ______________. The summary page, for ______________.**   ⚠ **The occasion: ______________.** **That is what was different about ______________, and it is the only thing that was.**   **1** **______________** | **______________** | ⚠ **yes**   **2** **______________** | ⚠ **______________** | ⚠ **yes**   **3** ⚠ **______________** | ⚠ **______________** | ⚠ **yes**   ⚠ **The right-hand column is the whole argument and it is three words repeated.** ⚠ **Nothing went wrong in any of those months.** **So no contributor caused this, and the occasion did not cause it either** — **______________ has happened before and nothing went wrong, because ______________.**   ⚠ **What caused it is the ______________ together, and that sentence is useless on a telephone.**   ⚠ **The sentence at the top, for the reader who reads four lines:** ⚠ **_______________._** **______________ words, true, and first.**   ⚠ **And the thing I will not write, although it is true: ______________.** ⚠ **In a paper to ______________ it reads as ______________** — **which is a sentence about us and not about ______________.** **It is in the internal version.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *present when nothing went wrong* column, answered yes throughout', ''],
  ['The occasion cleared as well as the contributors', ''],
  ['A four-line version at the top, in bold', ''],
  ['A true thing left out, with where it goes instead', ''],
  ['The number of contributors named in the short version', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their four-line version. ⚠ The class says whether it contains one thing, labelled, with the number of contributors.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a question at your work that was answered with one cause (**200 to 240 words**). Say what was asked, who asked, what was answered, what the contributors were, and what happened next.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _was the one cause given a contributor or the occasion?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many was the single cause given a contributor rather than the occasion? Usually two of three — ⚠ **and in those two the remedy was aimed at the contributor and the same thing happened again.**'));
out.push(box('Homework', ['Write your final text. Then take a failure at your work, list the contributors with the month each has been present since, and name the one thing that was different on the day (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.6 =======================
out.push(pb());
out.push(h2('7.6  The link you cannot evidence'));
out.push(p('**Function:** saying inside the chain what you cannot prove   ·   **Grammar:** _I infer this and nobody has stated it · the conversation is not minuted_   ·   **Pronunciation:** an admission placed mid-sentence, not at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say something at your work that everybody knows and no document records. Say how it is known.'));
out.push(p('**b**  Which belongs inside the chain? _(in a footnote) Note: this link is not documented. · The count was made on the apron — Abu Yasser\'s account; there is no record of where a count is made._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Mr Attar say the admission goes inside the sentence?   **A** it is shorter   **B** a footnote is read after the reader has already believed or disbelieved the claim   **C** it looks better'));
out.push(p('**b**  Listen again. **1** What happened to the conversation of 9 March? **2** What does he say you write when there is no evidence at all?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  "Put it in the sentence, not at the bottom"', [
  ['Nour', 'I have footnoted the two links I cannot evidence.'],
  ['Mr Attar', '⚠ **Where does a reader meet a footnote?**'],
  ['Nour', 'At the bottom.'],
  ['Mr Attar', '⚠ **After he has already believed the sentence or disbelieved it.** ⚠ **A footnote cannot un-persuade.** **Put it in the sentence, where it arrives with the claim.**'],
  ['Nour', 'It breaks the sentence.'],
  ['Mr Attar', '⚠ **It is meant to.** ⚠ *The count was made on the apron — Abu Yasser\'s account; there is no record of where a count is made.* **Eleven words in a dash, and the reader has the claim and its warrant together.**'],
  ['Nour', 'And the conversation of 9 March?'],
  ['Mr Attar', '⚠ **Tell me what you have.**'],
  ['Nour', '⚠ **Mr Jallad telephoned the pallet supplier on or about 9 March 2023 and agreed the narrower size.** **I have no minute, no note and no telephone record. What I have is an invoice dated the 3rd of April and a man who has left.**'],
  ['Mr Attar', '⚠ **Then you do not have a conversation. You have an invoice and an inference.** ⚠ **Write the invoice and write the inference, and do not write the conversation at all** — **because a conversation you have invented to join two documents is the one thing in a root-cause paper that can be shown to be false.**'],
  ['Nour', 'So I lose the link.'],
  ['Mr Attar', '⚠ **You lose a sentence and you keep the paper.** ⚠ **The chain runs from the February dimension to the April dimension, and what happened between them is not in your possession.** **Say that.'],
  ['Nour', 'And if somebody asks what happened between them?'],
  ['Mr Attar', '⚠ **Then you say a decision was taken and there is no record of how**, ⚠ **which is the finding anyway and is stronger than a conversation you cannot produce.** **The gap in the chain IS the finding. Stop trying to close it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying it inside the chain**',
  table(['What you have', 'Write', 'Not'], [
    ['**one person\'s account**', '⚠ *the count was made on the apron — Abu Yasser\'s account; there is no record of where a count is made*', '⚠ **a footnote, which is read after the reader has decided**'],
    ['**an inference**', '*the top layer was estimated, which I infer and nobody has stated*', '*the top layer was estimated*'],
    ['⚠ **two documents and nothing between them**', '⚠ *the dimension changed between February and April 2023; there is no record of how*', '⚠ **a conversation invented to join them**'],
    ['⚠ **the finding**', '⚠ **the gap IS the finding** — **stop trying to close it**', '—'],
  ], [1.8, 3.2, 2]),
  '⚠ **A footnote cannot un-persuade.** ⚠ **A reader meets it after he has already believed the sentence or disbelieved it** — **so the admission goes in the sentence, in a dash, where it arrives with the claim.**',
  '⚠ **It breaks the sentence, and it is meant to.** **Eleven words in a dash, and the reader has the claim and its warrant together.**',
  '⚠ **Never invent a conversation to join two documents.** ⚠ **It is the one thing in a root-cause paper that can be shown to be false**, **and it will be shown by the one person who was on the telephone.**',
  '⚠ **When you have two documents and nothing between them, write the two documents and the absence.** ⚠ *The dimension changed between February and April 2023; there is no record of how.*',
  '⚠ **And the gap is the finding.** ⚠ **A decision was taken and there is no record of how** — **which is stronger than a conversation you cannot produce, and is what the remedy answers.** **Stop trying to close the gap.**',
  '**Practise:** Take three links you cannot evidence. Write each with its warrant inside the sentence, and find the one where the gap is the finding.',
  '**Useful phrases:**  a footnote cannot un-persuade  ·  it is meant to break the sentence  ·  you have an invoice and an inference  ·  a conversation invented to join two documents  ·  the gap is the finding',
  '**Pronunciation – an admission mid-sentence.** 🔊 **Track 7.12** Listen twice. ⚠ **The first says the claim, then the dash, then the warrant, then stops** — **and the pause at the dash is short.** ⚠ **The second puts the warrant after a long pause at the end.** **At the end it sounds like a retraction; in the middle it is part of the claim.** Say it four times with a short dash.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has footnoted a weak link; B moves it into the sentence.'));
out.push(dlg(null, [
  ['A', 'I have footnoted the link I cannot evidence.'],
  ['B', '⚠ **Where does a reader meet a footnote?**'],
  ['A', 'At the bottom.'],
  ['B', '⚠ **After he has already believed it. Put it in the sentence.**'],
  ['A', '__________ — __________; there is no record of __________.'],
  ['B', '⚠ **Good. Now the one with nothing at all. What do you have?**'],
  ['A', '⚠ **I have __________ and __________. No minute, no note, no record.**'],
  ['B', '⚠ **Then you have __________ and an inference, and you do not have __________ at all.**'],
  ['A', 'So I lose the link.'],
  ['B', '⚠ **You lose a sentence and you keep the paper.** ⚠ **And the gap is the finding.**'],
]));
out.push(table(['Role card 1 — the footnote moved', 'Role card 2 — the invented conversation'], [[
  '⚠ **A has footnoted *the count was made on the apron*.** ⚠ **B asks where a reader meets a footnote and answers it: after he has decided.** → ⚠ *the count was made on the apron — Abu Yasser\'s account; there is no record of where a count is made.* **Eleven words in a dash.**',
  'A has written that Mr Jallad telephoned the supplier on or about 9 March 2023. ⚠ **B asks what A has.** ⚠ **An invoice of 3 April and a man who has left** — **no minute, no note, no telephone record.** ⚠ **So A has an invoice and an inference and does not have a conversation**, **and a conversation invented to join two documents is the one claim that can be shown false.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the link with its warrant inside the sentence. ⚠ Then write what the speaker had instead of the conversation, and the sentence that replaces it.'));
out.push(PHRASE_CARD(['a footnote cannot un-persuade', 'it is meant to break the sentence', 'an invoice and an inference', 'invented to join two documents', 'the gap is the finding']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** things you believe at work and cannot evidence. Write each properly.'));
out.push(table(['What I believe', 'What I actually have', 'The sentence, with its warrant inside', 'Is the gap the finding?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 2.4, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I believe _______. What I have is _______. My sentence is _______. And the gap _______ the finding._'));
out.push(p('**Listener task:** count how many had a conversation in them that nobody minuted. ⚠ Then ask how many of those conversations could be confirmed by asking one person this week.'));
out.push(p('**Board clinic:** your teacher writes three links on the board — look for a footnote carrying the admission, and a conversation invented to join two documents. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**WHAT I CANNOT EVIDENCE. 16 May. N. Mansour. Root-cause paper, the page I was advised to leave out.**',
  table(['', 'The claim', 'What I have', 'How it appears in the paper'], [
    ['**1**', '**the count was made on the apron**', '**Abu Yasser\'s account, given to me on 6 May**', '⚠ **in the sentence, in a dash: *— Abu Yasser\'s account; there is no record of where a count is made***'],
    ['**2**', '**the top layer was estimated rather than counted**', '⚠ **nothing. Eleven is one layer, and nobody has said it.**', '⚠ **_which I infer and nobody has stated_** — **and part 2 marks it the weakest link**'],
    ['**3**', '⚠ **a telephone conversation on or about 9 March 2023 in which the narrower pallet was agreed**', '⚠ **an invoice of 3 April 2023 and a man who left in July 2024. No minute, no note, no telephone record.**', '⚠ **it does not appear. The paper says the dimension changed between February and April and that there is no record of how.**'],
    ['**4**', '**that nobody compared 1,150 with 1,200**', '⚠ **the pencil revision on the rack drawing, never reissued**', '*the drawing was revised in pencil and never reissued, from which I infer that no comparison was made*'],
  ], [0.4, 2.3, 2.8, 3.1]),
  '⚠ **Row 3 is the one I wrote and deleted.** **The conversation almost certainly happened and I could describe it.** ⚠ **What I have is an invoice and a man who cannot be asked** — **and a conversation invented to join two documents is the only claim in twenty pages that somebody could prove false**, **and the somebody is the pallet supplier\'s clerk, who was on the other end of it and is still there.**',
  '⚠ **And the paper is better without it, which I did not expect.** **With the conversation, the chain reads: a decision was taken on the telephone and nobody wrote it down.** ⚠ **Without it, the chain reads: the dimension changed and there is no record of how** — **which is the finding, and which no amount of asking the supplier\'s clerk would change.**',
  '⚠ **This page was not going to exist.** **Bassel\'s view was that a paper does not advertise its own weaknesses to a customer, and he is right about a customer.** ⚠ **So this page is in the internal version only, at the back, and the four admissions in the customer version are in their sentences where they belong** — **which is where a reader meets them whether a page like this exists or not.**',
  '⚠ **The general rule I have taken out of it:** ⚠ **if you cannot evidence a link, say so in the sentence; and if you have nothing at all, delete the link and write the absence** — **because the absence is evidenced and the link is not.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which row was written and deleted, and who could have proved it false?'));
out.push(item('2', 'Why is the paper better without it?'));
out.push(item('3', 'Where does this page appear, and where do the admissions appear?'));
out.push(box('Writer\'s box', [
  '**What I cannot evidence — four parts:** ⚠ **a table: *claim · what I have · how it appears in the paper*** → ⚠ **the row you wrote and deleted, with who could disprove it** → ⚠ **why the paper is better without it** → ⚠ **and the rule you take out of it.**',
  '⚠ **The third column is the work.** ⚠ *In the sentence, in a dash* · *which I infer and nobody has stated* · ⚠ *it does not appear.* **A list of weak links with no column saying where each one went is a confession and not a method.**',
  '⚠ **Name who could prove the deleted claim false.** ⚠ **The supplier\'s clerk, who was on the other end of the telephone and is still there.** **A claim whose refuter can be named is a claim to delete; one with no possible refuter is usually just an inference and can stay, marked.**',
  '⚠ **Say why the paper is better without the invented link, and expect to be surprised.** ⚠ **With it, the chain reads *a decision was taken on the telephone and nobody wrote it down*. Without it, *the dimension changed and there is no record of how*** — **which is the finding, and which nothing anybody says could change.**',
  '⚠ **Put this page in the internal version only.** **A paper does not advertise its weaknesses to a customer** — **and the admissions themselves stay in their sentences in both versions, because that is where a reader meets them either way.**',
  '⚠ **And write the rule out.** ⚠ **If you cannot evidence a link, say so in the sentence; if you have nothing at all, delete the link and write the absence** — **because the absence is evidenced and the link is not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *what I cannot evidence* for a paper of yours (**80 words or more**). Use the frame.'));
out.push(p('**WHAT I CANNOT EVIDENCE. ______________. ______________.**   **1** **______________** | **______________** | ⚠ **in the sentence, in a dash: *— ______________***   **2** **______________** | ⚠ **nothing. ______________.** | ⚠ **_which I infer and nobody has stated_**   **3** ⚠ **______________** | ⚠ **______________. No ______________, no ______________, no ______________.** | ⚠ **it does not appear. The paper says ______________.**   ⚠ **Row ______________ is the one I wrote and deleted.** ⚠ **What I have is ______________** — **and a claim invented to join two documents is the only one in ______________ that somebody could prove false**, **and the somebody is ______________, who is still there.**   ⚠ **And the paper is better without it, which I did not expect.** **With it, the chain reads ______________. Without it, ______________** — **which is the finding.**   ⚠ **This page is in the internal version only.** **The admissions themselves are in their sentences in both.**   ⚠ **The rule I take out of it:** ⚠ **if you cannot evidence a link, say so in the sentence; if you have nothing at all, delete the link and write the absence.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *how it appears in the paper* column for every claim', ''],
  ['A deleted claim, with its possible refuter named', ''],
  ['Why the paper is better without it', ''],
  ['This page internal, and the admissions in both versions', ''],
  ['The rule written out', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the claim they deleted. ⚠ The class names who could have proved it false — and if nobody can, it was an inference and could have stayed, marked.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that is believed and cannot be evidenced (**200 to 240 words**). Say what it is, how it is known, what document would settle it, whether anybody has looked, and what the absence itself tells you.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. ⚠ **Copy one line**, then:  ★ _the criterion_ ______   ✓ _what I found_ ______   ? _is the absence itself a finding?_ ______'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the absence itself the more interesting finding? Usually two of three — ⚠ **and in all three nobody had thought of the absence as a thing that could be written down.**'));
out.push(box('Homework', ['Write your final text. Then take a paper of yours, find every link you cannot evidence, and move each admission from wherever it is into the sentence it belongs to (80 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review & Mediate: the decision whose author has left'));
out.push(p('**Function:** explaining a root-cause paper to the people inside the chain   ·   **Review:** proximate and distal · the marked chain · the undocumented decision · the counterfactual test · contributors and the occasion · the link you cannot evidence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Which cause goes first, and what does each of the two answer?',
  '**2** What are the three strengths a link can have, and where does the marking go?',
  '**3** What is the difference between a decision and a decision-maker in a paper?',
  '**4** What is the difference between a remedy that prevents and one that catches?',
  '**5** What is the test that separates a contributor from an occasion?',
  '**6** What do you write when you have two documents and nothing between them?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say about the paper?   **A** it is wrong   **B** it is the first one in nineteen years that is not about him   **C** he has not read it'));
out.push(p('**b**  Listen again. **1** What does he add about the 2023 pallets? **2** What does he say about the remedy he would have proposed?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  "The first one that is not about me"', [
  ['Nour', 'I want to read you the chain before it goes. There are four links and you are in the second one.'],
  ['Abu Yasser', 'Read it.'],
  ['Nour', '*The count was made on the apron, against the gate sheet, with the lorry waiting — Abu Yasser\'s account; there is no record of where a count is made.*'],
  ['Abu Yasser', '⚠ **That is nineteen years of counts and the first paper that is not about me.**'],
  ['Nour', 'Say that again.'],
  ['Abu Yasser', '⚠ **There have been four of these. 2019, two in 2021, and one last August.** ⚠ **Every one of them said a count was hurried.** **Mine was the only name in any of them.**'],
  ['Nour', 'And this one?'],
  ['Abu Yasser', '⚠ **This one says there is no record of where a count is made.** ⚠ **Which is true and has been true since 1998 and is not my doing.** **I have asked three times for a line on the sheet.**'],
  ['Nour', 'Asked whom?'],
  ['Abu Yasser', '⚠ **Mr Jallad, twice, and the office once.** **Nothing in writing, because you do not write to a man you see at the gate every morning.**'],
  ['Nour', 'That is the same gap as the pallets.'],
  ['Abu Yasser', '⚠ **It is the same man and the same gap.** **And I will tell you something about the pallets that is not in your paper.** ⚠ **They arrived in April 2023 and I put four of them against the rack and measured them, and I told him they were short.**'],
  ['Nour', 'You measured them.'],
  ['Abu Yasser', '⚠ **With the yard rule, in April 2023, and I told him in the yard, and he said they were cheaper and they fit the lorry.** ⚠ **Which was true.** **And nobody wrote any of it down, including me.**'],
  ['Nour', 'So the second half of the decision was checked.'],
  ['Abu Yasser', '⚠ **It was checked in April 2023 by the man who racks the store, and the check is in nobody\'s writing, and your paper says nobody checked it.** ⚠ **Which is what a paper has to say, because there is no record.** **And it is wrong.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – reading the chain to the people in it**',
  table(['What you read', 'What you are told', 'What it changes'], [
    ['⚠ **the link he is in, with its warrant**', '⚠ *that is nineteen years of counts and the first paper that is not about me*', '**nothing in the paper — and everything about whether he will talk to you**'],
    ['**the absence of a record**', '⚠ *I have asked three times for a line on the sheet*', '⚠ **the absence stops being an oversight and becomes a refusal**'],
    ['**the undocumented decision**', '⚠ *I measured four pallets against the rack in April 2023 and told him they were short*', '⚠ **the second half WAS checked, by the man who racks the store**'],
    ['⚠ **the finding**', '⚠ *your paper says nobody checked it, which is what a paper has to say, because there is no record — and it is wrong*', '⚠ **the paper stands and the finding is now larger**'],
  ], [1.9, 2.9, 2.4]),
  '⚠ **Read the chain to the people who are in it, link by link, before it goes anywhere.** ⚠ **Not for approval** — **for the facts that are in nobody\'s writing, which are the only facts a root-cause paper is missing.**',
  '⚠ **Expect to be told the history of the document and not only of the event.** ⚠ *Four of these, and mine was the only name in any of them.* **A man who has been named in four papers reads the fifth for his own name before he reads anything else.**',
  '⚠ **An absence that somebody asked about three times is not an oversight.** ⚠ **It is a refusal, and it changes the remedy from *write it down* to *somebody said no*.**',
  '⚠ **And expect the hardest finding: that your paper is correct and false at the same time.** ⚠ **The second half of the pallet decision was checked, in April 2023, with a yard rule, by the man who racks the store** — **and the check is in nobody\'s writing, so a paper that follows the evidence must say nobody checked it.**',
  '⚠ **What to do with that is not to change the finding.** ⚠ **The finding is correct on the evidence and the evidence is the paper\'s only claim.** **What changes is the remedy: it is no longer *check the second half* — somebody did — it is *a check that is not written down did not happen*.**',
  '**Practise:** Read a chain to somebody in it. Ask what they told whom, when, and whether anything is in writing.',
  '**Useful phrases:**  the first paper that is not about me  ·  I asked three times  ·  you do not write to a man you see at the gate  ·  a check that is in nobody\'s writing  ·  correct and false at the same time',
  '**Pronunciation – reading somebody their own link.** 🔊 **Track 7.14** Listen twice. ⚠ **The first reads the link and its warrant at one speed and stops.** ⚠ **The second slows at the name.** **Slowed at the name, it is read as an accusation being softened; at one speed, it is a link in a chain.** Read a link with a name in it four times, level.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a chain; B is in one of the links. Then swap.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  '⚠ **A reads the four links, with the warrants, and reads B\'s link at one speed.** ⚠ **A then asks three questions: what have you told whom, when, and is any of it in writing?** **The answers produce the measurement in the yard in April 2023 and the three requests for a line on the sheet.**',
  'B has been named in four papers over nineteen years and reads any fifth for their own name first. ⚠ **B gives the yard measurement only after being read the link properly.** ⚠ **If A reads it slowly, or apologises, B says it is fine and gives nothing** — **and A never learns that the second half of the decision was checked.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what the person in the link added. ⚠ Then say whether it changes the finding or the remedy, and which of the two it is.'));
out.push(PHRASE_CARD(['the first paper not about me', 'I asked three times', 'you do not write to a man at the gate', 'in nobody\'s writing', 'correct and false at once']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a one-page root-cause paper. Read it silently. Then read it to **two** people who are inside the chain, and ask the three questions.'));
out.push(table(['Who I read it to', 'What they added', 'Is it in anybody\'s writing?', 'Finding or remedy?'], [['', '', '', ''], ['', '', '', '']], [1.1, 2, 1.4, 1.4]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the paper. This is the **seventh** unit of this book, and the unwritten thing is this: ⚠ **the facts a root-cause paper is missing are almost always facts somebody told somebody in a yard, and the reason they are missing is that you do not write to a man you see at the gate every morning — so a company builds, over twenty years, a complete record of its documents and no record at all of its conversations, and a paper that follows the evidence will conclude that nobody checked things that were checked.**'));
out.push(p('_The paper said _______. The person in the chain added _______, which is in _______. It changes the _______, and the finding still stands because _______._'));
out.push(p('**Listener task:** add this unit\'s six to the Book 1 **paper-and-decision word list**: _a proximate cause · a distal cause · a causal chain · an unevidenced link · a contributor · a counterfactual test_. ⚠ Forty-two items now, and it runs to Unit 12.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a finding changed because somebody objected to it, and a remedy left unchanged after new information. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B2 Business Vantage Reading Part 3)', 10));
out.push(p('⚠ **This unit is Part 3: multiple choice on one longer text, and it is the second time in this book.** Read the text and answer questions **1–6**. Choose **A**, **B**, **C** or **D**. ⚠ **Locate the sentence that answers the question before you look at the options.**'));
out.push(box(null, [
  '**WHAT A ROOT-CAUSE PAPER CANNOT DO — a note for the association\'s technical bulletin. M. Attar.**',
  'A root-cause paper follows evidence, and that is both its value and the limit of its value. It can establish what documents exist, what they say, and what follows from them; it cannot establish what two people said to each other in a yard, and in most firms the yard is where a good deal of the deciding happens.',
  'The practical consequence is uncomfortable and it is not often stated. A paper written properly, from the documents, will sometimes conclude that nobody checked a thing that was in fact checked — because the check was a man with a rule measuring four pallets against a rack and telling somebody in passing, and no part of that leaves a record. The paper is not wrong in any sense its author could have avoided. It is correct on the evidence and false in fact, and those two conditions are compatible more often than most managers believe.',
  'What follows is not that papers should be softened. A finding altered because somebody objected to it is worth nothing, and a reader who learns that findings can be negotiated will negotiate all of them. The finding stands.',
  'What changes is the remedy, and this is the part most often got wrong. If the second half of a decision was in fact checked, then the remedy is not *check the second half*; somebody did. The remedy is that a check which leaves no record has, for every purpose that matters later, not happened — and the thing to install is not more checking but a place for a check to be recorded.',
  'There is a second consequence. The absence of a record is usually read as an oversight, and it is often a refusal: somebody asked for the line on the form and was told it would slow the gate. An absence with a request behind it is a different finding from an absence with nothing behind it, and only the people in the yard can tell you which one you have. Which is the argument, if any argument were needed, for reading a chain aloud to the people who are in it before it goes anywhere at all.',
]));
out.push(p('**1** What does the writer say a root-cause paper cannot establish?   **A** what documents say   **B** what follows from documents   **C** what two people said to each other in a yard   **D** when a decision was taken'));
out.push(p('**2** What is the uncomfortable consequence he describes?   **A** papers take too long to write   **B** a properly written paper may be correct on the evidence and false in fact   **C** documents are often lost   **D** managers do not read papers'));
out.push(p('**3** What does he say about altering a finding because somebody objected?   **A** it is worth nothing, and it teaches readers that findings can be negotiated   **B** it should be done where the objection is reasonable   **C** it is a matter for the author\'s judgement   **D** it saves time later'));
out.push(p('**4** What does he say the remedy should be if the second half was in fact checked?   **A** more checking   **B** a place for a check to be recorded   **C** a different checker   **D** no remedy at all'));
out.push(p('**5** What is the difference between the two kinds of absence?   **A** one is older than the other   **B** one is in a document and one is not   **C** one has a request behind it and one has nothing   **D** one is the writer\'s fault'));
out.push(p('**6** What does the whole note argue for?   **A** longer papers   **B** reading a chain aloud to the people in it before it goes anywhere   **C** more documents   **D** interviewing former employees'));
out.push(box('Writer\'s box', [
  '**B2 Business Vantage Writing Part 1 — an internal communication, 40 to 50 words, 10 marks.** **Three content points, all three present.** ⚠ **This is the fourth Part 1 in the book; the even units take Part 2.**',
  '⚠ **For a message about a cause, the three points are: what happened as a figure · the occasion, labelled as the occasion · and where the rest of it is.** **Not the contributors** — **there is no room, and 7.5 says the short answer is the occasion.**',
  '⚠ **In forty-five words, name the number of contributors rather than listing them.** ⚠ *Three other things made it possible and they are in the paper.* **Eleven words, and it stops a reader believing you have given them the whole answer.**',
  '⚠ **And never write *it is complicated* in a Part 1 answer.** **It is the one sentence that scores nothing in any paper at any level**, **and it is what a candidate writes when the word limit frightens them.**',
  '⚠ **Part 3 tip, for the text above.** **Four of the six answers are each in one sentence, and two of them use the text\'s own words** — **which is normal, and is why locating beats reasoning.** ⚠ **Question 6 is the one to be careful with: it asks what the whole note argues for**, **and three of its four options are things the note mentions.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 1.** Something has gone wrong at your workplace and a customer has asked what caused it. Write an internal message to your manager (**40 to 50 words**). Say **what happened, as a figure** · **the occasion, labelled as the occasion** · and **where the rest of the explanation is**.'));
out.push(p('______________: ______________. ⚠ **______________, which is what set it off.** **______________ other things made it possible and they are ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. ⚠ **Copy the line you are marking**, then name the criterion and say what you found. Count the words.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, as a figure', ''],
  ['The occasion, and the word *occasion* or *set it off*', ''],
  ['The number of contributors, not a list of them', ''],
  ['Where the rest of the explanation is', ''],
  ['40 to 50 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that was checked and is in nobody\'s writing (**200 to 240 words**). Say what was checked, by whom, what they said and to whom, whether any document would show it, and what a paper written from the documents would conclude.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then read a chain of yours aloud to one person who is in it, ask what they told whom and when, and write down what is in nobody\'s writing (80 words or more).'], C.lblue, C.navy));

// ======================= UNIT CHECK =======================
out.push(pb());
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  The immediate cause ___ a hurried count.   a) was   b) were   c) been',
  '2  The condition that made it ___ is the pallet width.   a) possible   b) possibly   c) possibility',
  '3  ___ we had wider pallets, we would still have been eleven short.   a) If   b) Had   c) Have',
  '4  The count was made on the apron, ___ I infer from the gate sheet.   a) what   b) which   c) who',
  '5  No single cause will ___ this.   a) carry   b) carrying   c) carried',
  '6  Three things made it possible and one thing ___ it off.   a) set   b) sat   c) setted',
  '7  The dimension changed between February and April; there is no record ___ how.   a) for   b) of   c) about',
  '8  A remedy ___ at a person fails the test almost always.   a) aim   b) aiming   c) aimed',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 7.15** Listen to a conversation about a root-cause paper. Complete the note.   How many papers there have been, and over how long: ______   Whose name was in them: ______   What this paper says instead: ______   What he asked for, how many times, and of whom: ______   What he did in April 2023: ______   Why none of it is in writing: ______'));
out.push(p('**C  Reading.** Read the tested remedies at 7.4 again. Which remedy reaches the distal cause, why is it the cheapest, and which one would have been adopted?'));
out.push(p('**D  Writing.** Take a failure at your work. Write the immediate cause and the condition that made it possible in two sentences; then the occasion and the number of contributors in one; then one remedy run backwards in the third conditional (80 words or more).'));
out.push(...lines(5));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Nour', 'I want to read you the chain before it goes. You are in the second link.'],
  ['Abu Yasser', '⚠ **That is nineteen years of counts and the first paper that is not about me.**'],
  ['Nour', 'Say that again.'],
  ['Abu Yasser', '⚠ **There have been four of these. 2019, two in 2021, and one last August.** ⚠ **Every one said a count was hurried.** **Mine was the only name in any of them.**'],
  ['Nour', 'And this one?'],
  ['Abu Yasser', '⚠ **This one says there is no record of where a count is made.** **Which is true and has been true since 1998 and is not my doing.** ⚠ **I have asked three times for a line on the sheet** — **Mr Jallad twice and the office once.**'],
  ['Nour', 'Nothing in writing?'],
  ['Abu Yasser', '⚠ **You do not write to a man you see at the gate every morning.** And I will tell you something that is not in your paper. ⚠ **The pallets arrived in April 2023 and I put four of them against the rack and measured them with the yard rule, and I told him they were short.**'],
  ['Nour', 'And he said?'],
  ['Abu Yasser', '**That they were cheaper and they fit the lorry. Which was true.** ⚠ **And nobody wrote any of it down, including me.**'],
  ['Nour', 'So the second half of the decision was checked.'],
  ['Abu Yasser', '⚠ **It was checked by the man who racks the store, and the check is in nobody\'s writing, and your paper says nobody checked it.** ⚠ **Which is what a paper has to say, because there is no record. And it is wrong.**'],
]));
out.push(sp());
out.push(box('What you can do now', [
  '**7.1** write a proximate and a distal cause in two sentences, and make the second explain the amount',
  '**7.2** mark every link in a chain document, account or inference, inside the sentence',
  '**7.3** reconstruct a decision that has no document, and refuse both the name and the word *wrong*',
  '**7.4** run a remedy backwards through the event, and separate *prevents* from *catches*',
  '**7.5** separate three contributors from one occasion, and give the occasion on the telephone',
  '**7.6** say inside the chain what you cannot evidence, and delete a link you have invented',
  '**7.7** read a chain to the people in it, and hear the check that is in nobody\'s writing',
], C.lblue, C.navy));
out.push(sp());
out.push(p('_Unit 8 — **Numbers in Prose**: three years of trading in eleven sentences, and the figure Mr Haddad will ask for on the telephone._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
module.exports = out;
