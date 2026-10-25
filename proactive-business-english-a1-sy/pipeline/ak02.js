// Proactive Business English A1 · Syria Edition · Book 1 · Unit 2 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 2  Numbers, Boxes and the Count'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer**.',
  '⚠ **This is the unit the whole book is for.** **A storeman counts, and almost every expensive mistake in a warehouse starts as a number heard wrong, said once, and not written down.**',
  '⚠ **The four steps are the unit: say it → write it → check it → read it back.** **They appear in 2.5 as a Language box and they should be on the board from 2.1.**',
  '⚠ **The seven number pairs go on the board in 2.2 and stay there until Unit 12:** **13/30 · 14/40 · 15/50 · 16/60 · 17/70 · 18/80 · 19/90.** **Take the count in 2.2, take it again in 2.5, and show the class both figures.**',
  '⚠ **2.6 teaches something that is not grammar and is harder than grammar: how to say a number is wrong without saying a person is wrong.** **_It is not twelve, it is nine_ changes a number. _You are wrong_ starts an argument, and the number stays as it was.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words.**',
], C.grey, C.navy));

// ===================== 2.1 =====================
out.push(h2('2.1  One, two, three — how many?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Count backwards as well as forwards.** **Forwards is a song most learners half-know; backwards is the one that shows whether the numbers are really there.**'));
out.push(p('**b**  Open. **Whatever the room holds.** ⚠ **Make them write the figure, not only say it** — **the writing is the half this unit is about.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Twelve.  **2** Six.'));
out.push(p('⚠ **Abu Yasser\'s last line is the method:** _Now say it again and point at them._ **A number said while pointing is a number that was counted. A number said from memory is a number that was remembered, and those are different things.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Count the cartons.'],
  ['B', 'One, two, three… twelve. Twelve cartons.'],
  ['A', 'Twelve. And on the floor?'],
  ['B', 'Six.'],
  ['A', 'How many is that?'],
  ['B', 'Eighteen.'],
]));
out.push(note("Put real objects on a table — pens, books, anything — and make them actually count. A counting lesson done from a page is a reading lesson. Ten objects and two learners is enough, and the second pair of hands is what makes it a workplace task instead of an exercise."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Three numbers written and shown.** **Expect all three right at this stage and say so** — **this is the easy one, and 2.2 is where it stops being easy.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four things in the room', [
  '**chairs** — 14 — fourteen   ·   **windows** — 3 — three   ·   **tables** — 7 — seven   ·   **doors** — 2 — two',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _There are fourteen chairs in this room._'));
out.push(p('⚠ **Make a second learner count the same thing.** **About one time in four the two numbers differ**, **and in a classroom with fourteen chairs in it that is the most useful ninety seconds of the lesson** — **because it happens in a yard too, and in Unit 2.7 it is the whole problem.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Twelve.  **2** Eighteen.  **3** Nine rolls.'));
out.push(p('⚠ **Question 2 is a trap and it is meant to be.** **The total is 18, which is the CARTONS only — the nine rolls are not in it.** **A learner who answers 27 has added everything on the page, which is what a tired person does at five o\'clock.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (16 words)', [
  '**COUNT — 11 MARCH — BACK STORE**',
  'cartons, pallet 1 — 20   ·   cartons, floor — 4   ·   rolls, shelf 1 — 12   ·   **TOTAL cartons — 24**',
]));
out.push(p('**What to credit.** ⚠ **A day and a place at the top.** **One thing and one number per line.** ⚠ **A total that is actually right** — **add it up in front of them, because about a third of the totals in a first class are wrong and nobody has ever checked one of theirs before.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **No total.** **A total that does not add up.** **Two numbers on one line.** **No day or no place.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The class adds up the lines while the writer watches.** **This is the first time most of them have had a number of theirs checked by somebody else, and it should feel ordinary rather than like a test.**'));
out.push(stage('7', 'Write freely – sample (29 words)'));
out.push(sample('Sample answer', [
  '**I count the cartons in the back store every morning. It takes about twenty minutes. I write the number on the sheet. Abu Yasser reads it at four o\'clock.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Who reads that number?_  —  _The supervisor, at four o\'clock._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers where somebody reads the number.** **Expect about half.** **A number nobody reads is a number nobody needs, and the class should be asked whether the count is worth twenty minutes in those cases.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (22 words)', [
  '**Cartons in the store: about 400. Pallets: 11. Rolls of tape: 30. Men on the morning shift: 6. Lorries: 2.**',
]));

out.push(pb());
// ===================== 2.2 =====================
out.push(h2('2.2  Twenty, fifty, three hundred'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Put the two rows next to each other on the board — the -ty row above the -teen row — and leave them there.**'));
out.push(p('**b**  Open. **Expect a price, a stock figure or a lorry weight.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  **1** Ninety.  **2** Four hundred and thirty.'));
out.push(p('⚠ **_Nine zero. Not nineteen._** **That is the whole cycle in four words and it is Ammar who says it, not the supervisor.** **The learner has started doing it for himself, which is the point of putting it in Unit 2 and not Unit 6.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The board says three hundred and forty. Say it.'],
  ['B', 'Three hundred and forty.'],
  ['A', 'Good. Today ninety came in.'],
  ['B', 'Ninety. Nine zero. Not nineteen.'],
  ['A', 'Three hundred and forty and ninety?'],
  ['B', 'Four hundred and thirty.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Four numbers, written and shown, and counted.** **This is the first measured count of the unit.** **Write the figure on the board and leave it.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four big numbers', [
  '**I said** 340   **wrote** 340   **✓**   ·   **I said** 90   **wrote** 19   **✗**',
  '**I said** 1,200   **wrote** 1,200   **✓**   ·   **I said** 15   **wrote** 50   **✗**',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I said four numbers. Two were right. The hard one was fifteen and fifty._'));
out.push(p('⚠ **Now put all seven pairs on the board — 13/30, 14/40, 15/50, 16/60, 17/70, 18/80, 19/90 — and leave them up for the rest of the course.** ⚠ **This board is worth more to a storeman than any grammar in Book 1.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Ninety.  **2** None — zero.  **3** So a number read from across the yard cannot be read wrong.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (18 words)', [
  '**BOARD — 11 MARCH**',
  '**IN TODAY:** 70 _(seventy)_   **IN STORE:** 510 _(five hundred and ten)_   **OUT TODAY:** 0 _(none)_   **S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **Every number in both forms.** ⚠ **A written 0, not an empty space** — **this is the cycle\'s one hard point and it comes back in 2.4.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A number in digits only.** **An empty line where zero belongs.** **No day.** **No name.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **One learner reads a line aloud and the class says the number back.** **If the class says a different number, the line failed, and the writer can see exactly why.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**Last year the board said nineteen pallets. It was ninety. Nobody checked it for two days. We told a customer we had none and we had ninety in the back store.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Who wrote that number?_  —  _I do not know. The board is not signed._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers where the number was written only once.** **Usually all three**, **and that is the argument for the Writer\'s box rule rather than any amount of telling.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**430 — four hundred and thirty. 90 — ninety. 1,200 — one thousand two hundred. 15 — fifteen, not fifty.**',
]));

out.push(pb());
// ===================== 2.3 =====================
out.push(h2('2.3  One carton, two cartons, a packet of twenty'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. **Four things, singular and plural.**'));
out.push(p('**b**  **Big to small: pallet → carton → packet. A roll is a different shape and is not in that line**, ⚠ **and a learner who says so has understood the cycle before it started.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Twenty.  **2** Ten.'));
out.push(p('⚠ **The fault is not the number, it is the word, and that is unusual enough to say aloud.** **Ammar says _twenty boxes_, which is a word that means nothing in this yard: a packet, a carton and a pallet are all boxes.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Twenty on shelf two.'],
  ['B', 'Twenty what?'],
  ['A', 'Twenty packets.'],
  ['B', 'How many in a packet?'],
  ['A', 'Twenty.'],
  ['B', 'Say the word with the number.'],
]));
out.push(note("Bring the three real things if you can — a packet, a carton and a pallet photograph will do. The distinction is not linguistic and cannot be taught from a word list; it is a fact about a particular yard, and every learner's yard has its own three words. Ask them for theirs and write those on the board instead."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Number AND word, both written.** **A listener who writes only the number has made the same mistake as the speaker in the dialogue, and that is worth pointing out gently.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four things', [
  '**12** — cartons — pallet 1   ·   **9** — rolls — shelf 3   ·   **40** — packets — shelf 2   ·   **1** — pallet — the floor',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _There are twelve cartons on pallet one._'));
out.push(stage('5', 'Read'));
out.push(p('**1** Ten.  **2** Forty.  **3** Because _twenty_ does not say twenty of what, and three different things in this store are all boxes.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (19 words)', [
  '**SHELF 4 — WHAT IS HERE**',
  '**Packets:** 25 in a packet.   **Cartons:** 8 packets in a carton.   **Pallet:** 36 cartons on a full pallet.',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A number with no word.** **A plural with no -s.** **_a_ before a vowel sound where _an_ belongs.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Ask the class what is inside.** **If they cannot say, the line failed, however correct its grammar is.**'));
out.push(stage('7', 'Write freely – sample (27 words)'));
out.push(sample('Sample answer', [
  '**We count packets, cartons and pallets. A packet has twenty-five inside. A carton has eight packets. The pallet is the wooden thing and it holds thirty-six cartons.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _How many in one?_  —  _Twenty-five in a packet._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers where the word goes with the number every time.** **Expect two of three by now** — **it is the easiest of this unit\'s habits to acquire and the first one learners keep.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (21 words)', [
  '**30 packets on shelf two. 8 cartons on pallet one. 12 rolls of tape in the cupboard. 2 pallets by the door.**',
]));

out.push(pb());
// ===================== 2.4 =====================
out.push(h2('2.4  There are six on the shelf. There are none on the floor.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. **Three things here, one thing not here.** ⚠ **The second half is the hard one and it is the cycle.**'));
out.push(p('**b**  **The second.** **_Not good_ is about the shelf. _There are none on shelf four_ is about the stock, and it is a thing somebody can act on this morning.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Six cartons.  **2** Zero.'));
out.push(p('⚠ **Abu Yasser\'s last line is the one to read twice:** _Then I do not know if it is empty or if you did not look._ ⚠ **A blank space on a sheet means two completely different things and the sheet cannot tell them apart.** **Writing the zero is the whole of this cycle.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Shelf three?'],
  ['B', 'There are six cartons on shelf three.'],
  ['A', 'Shelf four?'],
  ['B', 'There are none on shelf four. Zero.'],
  ['A', 'Shelf five?'],
  ['B', 'There is one pallet.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The shelf with none.** **A listener who cannot say which shelf had none did not hear a zero, and that is usually because the speaker said _empty_.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four places', [
  '**the back store** — 14 — cartons   ·   **the cupboard** — 0 — none   ·   **the yard** — 2 — pallets   ·   **shelf 6** — 9 — rolls',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _There are fourteen cartons in the back store. There are none in the cupboard._'));
out.push(stage('5', 'Read'));
out.push(p('**1** Shelves 2 and 4.  **2** One pallet.  **3** That nobody looked at that shelf.'));
out.push(p('⚠ **Question 3 is the sentence of the unit.** **Ask the class whether a sheet at their work has blanks on it, and what those blanks mean.** **Nobody knows, which is the answer.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (17 words)', [
  '**SHELF CHECK — FRONT STORE — 12 MARCH**',
  '**1** — 6 — cartons   **2** — 0 — none   **3** — 11 — packets   **4** — 0 — none   **5** — 1 — pallet',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A missing shelf number.** **A blank where a 0 belongs.** ⚠ **The commonest fault is skipping an empty shelf entirely, and it is the one the cycle exists to prevent.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Only the empty lines.** **Reading only those makes a skipped shelf impossible to hide.**'));
out.push(stage('7', 'Write freely – sample (30 words)'));
out.push(sample('Sample answer', [
  '**We ran out of tape in February. Nobody wrote it down. The shelf was empty for four days and the sheet had a blank line, so nobody knew.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Who said it first?_  —  _A driver, on the fourth day._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers where somebody wrote the zero.** **Expect one of three or none**, **and that figure is the reason this cycle is in Book 1 and not Book 2.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (23 words)', [
  '**Shelf 1 — 6. Shelf 2 — 0. Shelf 3 — 11. Shelf 4 — 0. Shelf 5 — 1 pallet. Shelf 6 — 0.**',
]));

out.push(pb());
// ===================== 2.5 =====================
out.push(h2('2.5  Say it, write it, read it back'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Say them genuinely fast.** **A kind pace teaches nothing, because the lorry driver at seven in the morning is not slow and is not being unkind.**'));
out.push(p('**b**  **13/30, 15/50, 16/60.** **Put the other four pairs up beside them from 2.2.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  **1** Sixteen.  **2** Sixty.'));
out.push(p('⚠ **Fadi\'s last line is the money:** _Sixteen cartons would be nine thousand pounds short._ ⚠ **Say the figure aloud and let it sit.** **This is the first time in the course that a language mistake has a price on it, and a yard class understands a price.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Sixty cartons for Homs. By eleven.'],
  ['B', 'Sixteen cartons. By eleven.'],
  ['A', 'No. Sixty.'],
  ['B', 'Sixty or sixteen? Six zero, or one six?'],
  ['A', 'Six zero.'],
  ['B', 'I write it. Sixty cartons for Homs, by eleven.'],
]));
out.push(note("The fourth step is the one that gets dropped and it is the one that works. Reading the number back alone catches a wrong number; reading the whole thing back catches a wrong city and a wrong time as well, and in this trade the wrong city is the more expensive of the two. Insist on all four things coming back, every time, for the whole lesson."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Four things: number, thing, place, time.** **Three is a fail.** **Say that before they start.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — four orders', [
  '**60** — cartons — Homs — 11.00 — ✓   ·   **15** — rolls — the counter — 9.00 — ✗ **(partner wrote 50)**',
  '**200** — packets — Hama — 14.00 — ✓   ·   **70** — cartons — Aleppo — 6.00 — ✓',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I gave four orders. My partner read three back right. The hard one was fifteen._'));
out.push(p('⚠ **This is the second measured count of the unit.** **Put it on the board beside 2.2\'s.** **It goes up every time, and the class should see by how much.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Sixty.  **2** Eleven o\'clock.  **3** That the number was read back to the person who gave it.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (18 words)', [
  '**ORDER — 12 MARCH — from Abu Yasser**',
  '**70** _(seven zero — NOT 17)_ **cartons**   **For:** Hama   **By:** 10.00   **Read back:** ✓   **S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **The digits beside the number.** **A place and a time.** ⚠ **The tick** — **and ask whether it is honest, because a tick written without the reading back is worse than no tick at all.**'));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **No tick.** **No time.** **A number that can be heard two ways written once.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **The partner says it back from the note.** **If anything is different, the note failed** — **and the writer finds out in ten seconds instead of at eleven o\'clock.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**A driver told me fifteen rolls on the telephone. I wrote fifty. I did not read it back. We sent fifty and thirty-five came back on Thursday on the same lorry.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Did you read it back?_  —  _No. Now I do, every time._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers where somebody read it back.** **Expect one of three in the story and all of them in the room by the end of the lesson** — **and say both numbers aloud, because the difference is the lesson.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (22 words)', [
  '**60 — six zero. 15 — one five. 90 — nine zero. 17 — one seven. On the telephone I say the digits now.**',
]));

out.push(pb());
// ===================== 2.6 =====================
out.push(h2('2.6  It is not twelve. It is nine.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Most learners say, in Arabic, that they say nothing.** **Let that stand and come back to it at the end of the cycle.**'));
out.push(p('**b**  **The second.** **The first is about a person and it will be argued with. The second is about a number and it can be checked in ninety seconds.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** Twelve.  **2** Nine.'));
out.push(p('⚠ **Abu Yasser\'s second-to-last line is the one to teach:** _You did not say who. You said the number._ ⚠ **Ammar does not know who wrote twelve and says so**, **and the count is corrected without anybody being accused of anything.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The sheet says twelve on shelf three.'],
  ['B', 'It is not twelve. It is nine. I counted again.'],
  ['A', 'You counted twice?'],
  ['B', 'Twice. Nine both times.'],
  ['A', 'Who wrote twelve?'],
  ['B', 'I do not know.'],
]));
out.push(note("The sentence I do not know is doing real work here and learners will want to replace it with a guess. Stop that. A guess about who wrote a wrong number turns a count into an accusation, and the supervisor who hears the guess will remember the name and not the number. The honest answer is nearly always that nobody knows, and it is also the useful one."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **Did anybody name a person? The answer should be no.** **If a pair names somebody, do not correct it in front of the class — put the line on the board afterwards with the name taken out, and let them see the difference.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — two wrong numbers', [
  '**The paper said** 12 on shelf 3   **It really was** 9   **I counted** twice',
  '**The paper said** 400 in the store   **It really was** 370   **I counted** three times, with another man',
]));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The sheet said twelve. It is not twelve, it is nine. I counted two times._'));
out.push(stage('5', 'Read'));
out.push(p('**1** Twelve.  **2** Nine.  **3** Twice.'));
out.push(p('⚠ **Point at what the sheet does NOT do: it does not rub out the twelve.** **Both numbers are on the page and both dates are on the page**, **which is the first appearance in this course of a record that shows its own history.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (19 words)', [
  '**COUNT SHEET — FRONT STORE — 12 MARCH**',
  '**Shelf 3** — old: 12 — **new: 9** — 12 March',
  '**Counted twice. Nine both times. S.Q. 12 March.**',
]));
out.push(stage('6P', 'Check together'));
out.push(p('**What to fail.** ⚠ **A rubbed-out or crossed-through old number.** **No _counted twice_.** **No name or no day on the change.**'));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Can the old number still be read?** **That is the only question, and it takes one second to answer.**'));
out.push(stage('7', 'Write freely – sample (29 words)'));
out.push(sample('Sample answer', [
  '**The stock sheet said four hundred. I counted three hundred and seventy, twice. I wrote the new number beside the old one. Nobody knows who wrote four hundred.**',
]));
out.push(stage('7P', 'Respond'));
out.push(p('**Sample:**  ? _Did you count twice?_  —  _Twice, and the second time with Samih._'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Count the papers that named a person. The good number is none.** **Where a name appears, ask what it added** — **the answer is always nothing, and the writer sees it immediately.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**The sheet says 220 packets on shelf two. I counted 214, twice. I have written both numbers and today\'s date. I do not know who wrote 220.**',
]));

out.push(pb());
// ===================== 2.7 =====================
out.push(h2('2.7  Review: the count sheet'));
out.push(stage('1', 'Get ready – Unit 2 quiz'));
out.push(table(['', 'The answer'], [
  ['**2.1**', '_There are ______ chairs._ — **with the word, not the number alone**'],
  ['**2.2**', '_Three hundred and forty. Nine hundred and five._'],
  ['**2.3**', '_Twelve cartons. Nine rolls._ — **number AND word, four times**'],
  ['**2.4**', '_There are none. Zero._ — **not _it is empty_**'],
  ['**2.5**', '_Six zero, or one six?_ **Then read the whole thing back.**'],
  ['**2.6**', '_It is not ______, it is ______. I counted twice._'],
], [1, 6]));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  **1** The cartons on the shelf.  **2** The cartons on the shelf and the three on the floor under it.'));
out.push(p('⚠ **Both men counted twice and both men are careful.** **The sheet says _shelf 3_ and does not say whether the floor under shelf 3 is part of shelf 3.** ⚠ **Nobody in this dialogue made a mistake.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let either learner concede.** **If one of them says _yes, you are right_ in the first thirty seconds, stop and start again** — **the exercise is to hold a position that is correct, which is harder and is the point.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **_Both._** **And if the class picks one, ask what the sheet said.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — two ways to count one thing', [
  '**The thing:** the pallets in the yard.   **One way:** the full ones only.   **The other way:** full and empty together.',
  '**The thing:** the men on the shift.   **One way:** the men who signed in.   **The other way:** the men who are here now, which is two fewer at four o\'clock.',
]));
out.push(note("The second sample is the one that comes up in real classes and it is better than the book's example, because it is about people and everybody has an opinion. Use it if a learner produces it. The resolution is the same: the sheet does not say, and a sheet that does not say will produce two honest answers for as long as it exists."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Ammar**', '⚠ **nine are on the shelf, and the sheet says _shelf_** — **he counted twice**', '**the idea that his number is the only number.** ⚠ **Nine is right for the shelf and wrong for the place.**'],
  ['**Samih**', '⚠ **twelve are in the place, and the three on the floor came off that shelf this morning** — **he counted twice too**', '**the same thing, from the other side.**'],
  ['**the sheet**', '**nothing** — ⚠ **the sheet is what is wrong, and it is the only thing in the room that is**', '⚠ **its single line.** **From Monday it has two: _on the shelf_ and _on the floor_.**'],
], [1.2, 4.2, 4.1]));
out.push(p('**Report (sample):**  _Ammar is right because nine are on the shelf. Samih is right because twelve are in the place. So the sheet gets two lines, and both numbers go on it._'));
out.push(p('⚠ **And the sentence that costs the most is Abu Yasser\'s:** _So nobody is wrong. The sheet does not say what to count._ ⚠ **Mark it.** **A supervisor who says that has given up the easiest thing available to him, which is deciding that one of his men cannot count.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'C', 'A']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 2 is the hardest in the paper and it is the one from 2.4.** **_A blank means nobody looked_, not _a blank means zero_** — **and a learner who has not done 2.4 will choose C every time, because it is what a blank looks like.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**To:** Abu Yasser',
  '**There are nine cartons on shelf three. I counted twice. The sheet says twelve. Please change the sheet.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the number, in the first sentence**'],
  ['**1**', '**the place**'],
  ['**1**', '⚠ **_I counted twice_**'],
  ['**1**', '⚠ **a thing the reader must DO**'],
  ['**1**', '**four sentences, about thirty words**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences aloud.** **And check that the number is in the FIRST one** — **a message whose number is in sentence three is a message that may be read as far as sentence two.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **The fourth sentence must be the thing the reader does.** **_Please change the sheet._ _Please count it yourself._ _Please tell the office._** **A message with no instruction is a message nobody acts on.**'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**There are 214 packets on shelf two, not 220. I counted twice, both times 214. The old number is still on the sheet. Please tell the office before the order goes.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'c', 'b', 'a', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Question 4 is the unit\'s own point:** ***none***, **not _empty_ and not _nothing_.** **Expect it wrong in about a third of papers and do not give half marks for _nothing_** — **it is the word the cycle exists to replace.**',
  '**B  Listening — 6 marks**, one each. **seventy (1) · Hama (1) · 10.00, accept _ten_ (1) · seven zero (1) · none, accept zero (1) · the zero and his name (1).**',
  '**C  Reading — 3 marks:** **shelves 2 and 4 (1) · one pallet (1) · that nobody looked (1).**',
  '**D  Writing — 8 marks:** **the number (1) · the place (1) · _counted twice_ (2) · a thing to do (2) · four sentences (1) · about thirty words (1).**',
  '**Total 25.** ⚠ **The profile to expect: A split on Q4 and Q7, B high, C high, D split on the instruction.** ⚠ **D loses the instruction marks in about half of papers**, **because a learner who has reported a number feels finished** — **and the whole of Book 1 is the argument that a number nobody is asked to act on is a number nobody acts on.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Six things. First, this is the unit the book is for and it should get the time: a storeman counts, and almost every expensive mistake in a yard starts as a number heard wrong and written once. Second, the four steps — say it, write it, check it, read it back — go on the board in 2.1 and stay there. The fourth is the one that gets dropped and it is the one that works, because reading the whole thing back catches a wrong city as well as a wrong number, and in this trade the wrong city costs more. Third, the seven number pairs. Put all of them up in 2.2 and leave them up until Unit 12. Take the written count in 2.2, take it again in 2.5, and show the class both figures; it goes up every time and they should see by how much. Fourth, the zero. A blank space and a written 0 mean two completely different things and a sheet cannot tell them apart. Ask whether the sheets at their own work have blanks on them and what those blanks mean; nobody knows, and that is the answer. Fifth, 2.6, which is not grammar and is harder than grammar. It is not twelve, it is nine changes a number; you are wrong starts an argument and the number stays as it was. The sentence I do not know is doing real work and learners will want to replace it with a guess — stop that, because a guess turns a count into an accusation and the supervisor remembers the name instead of the number. Sixth, 2.7. Two careful men counted twice and got different numbers, and neither is wrong: the sheet does not say what to count. Do not let either learner concede in the practice, because holding a position that is correct is harder than giving way and it is the thing being taught. And mark Abu Yasser's line — so nobody is wrong, the sheet does not say what to count — because he has given up the easiest explanation available to him, which was that one of his men cannot count."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 2 · Answer Key');
module.exports = out;
