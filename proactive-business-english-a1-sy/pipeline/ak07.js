// Proactive Business English A1 · Syria Edition · Book 2 · Unit 7 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 7  Full, Empty, Broken'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This is the first unit of Book 2 and the book has a subject.** **Book 1 ended with five things that went wrong and nobody at fault.** **Book 2 is about the gaps, and the class should be told that on the first morning** — **it is the only thing that makes six more units of vocabulary feel like a course rather than a list.**',
  '⚠ **The whole unit is three sentences and a number:** _Two of the ten are crushed. They came like this. What do I do?_ **Three short sentences and the supervisor can answer in four words.** **Everything else in the unit serves those three.**',
  '⚠ **7.3 is the cycle that carries the money.** **_Some are damaged_ is real English and it decides nothing. _Two of the ten_ is a note; _eight of the ten_ is a lorry turning round.** **Two numbers, always: how many are bad AND how many came.**',
  '⚠ **7.2 and 7.4 both say the same hard thing in different words: write the carton, not the man.** **_Crushed on one corner_ is yours to write; _somebody dropped it_ is not, because you were not there.** **It is the same discipline as the dust in 4.4 and the wrapped pallets in 5.6, and this is the third time the course has asked for it.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 7.1 =====================
out.push(h2('7.1  Big, small, heavy, light'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Real objects, picked up, in the hand.** **_This one is heavy_ said while holding something heavy is learned; the same sentence read off a page is not.**'));
out.push(p('**b**  **A full carton is heavier.** ⚠ **Four words: _because there is more in it._** **Insist on the four words rather than a nod** — **it is the first _because_ of Book 2 and it comes back in 7.5 as the thing that makes a rule survive.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the small heavy one.   **b**  **1** The labels are in it.  **2** It is light, and he can carry it with one hand.'));
out.push(p('⚠ **Play it three times.** **Book 2 does not change that: at A1 the first play is noise, the second is words and the third is meaning.**'));
out.push(p('⚠ **The last two lines are the content and they are not about English:** _Small and heavy is always the dangerous one. Nobody expects it._ **Ask the class whether anybody has ever been hurt by a small box.** **Somebody will have been, and the answer is the reason the _hands_ column exists in Lesson B.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Two boxes for the counter. Take the small one first.'],
  ['B', 'The small one? The big one is nearer.'],
  ['A', 'The small one is heavy. The big one is light.'],
  ['B', 'A small heavy one and a big light one.'],
  ['A', 'Labels in the small one. Empty bags in the big one.'],
  ['B', 'So the small one needs two hands.'],
]));
out.push(note("The fourth line is the drill: two adjectives together, in the order size then weight. A small heavy one. Learners will produce a heavy small one, which is not wrong in any way they can hear, and the only fix is repetition rather than explanation. Run the line on its own twenty times with different pairs of words."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two things, two words each.** ⚠ **Four words, and the order matters** — **a listener who writes _heavy small_ has heard the speaker say it that way, which is information the speaker needs.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things I carry', [
  '**The thing:** a sack of flour   **Size:** big   **Weight:** heavy   **Hands:** two, and a shoulder',
  '**The thing:** a tray of bread   **Size:** big   **Weight:** light   **Hands:** one',
  '**The thing:** a box of till rolls   **Size:** small   **Weight:** heavy   **Hands:** two',
  '**The thing:** a bag of bags   **Size:** big   **Weight:** very light   **Hands:** one, or under the arm',
]));
out.push(note("The third row is the one to look for in every learner's table, because it is the small heavy one and every workplace has at least one. Till rolls, nails, tiles, batteries, bottled water. If a learner's table has no small heavy thing in it, ask again — they have one and they have stopped noticing it, which is exactly the problem."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _A box of till rolls is small and heavy. It needs two hands._'));
out.push(p('⚠ **The mistake to expect:** ***a box small*** **or** ***a box heavy*** — **the Arabic word order, and it is the only grammar point in this cycle.** **One board clinic, four minutes, done.**'));
out.push(p('**Then the count:** which things in this class are small and heavy? ⚠ **Put the list on the board, not the number.** **A list of eight small heavy things from eight different workplaces is worth more than a count, because every learner recognises somebody else\'s.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** The empty bags.  **2** Three — labels, nails and paper.  **3** The nails — _two, and bend your knees_.'));
out.push(p('⚠ **Question 2 is a counting question across a column and the answer is three, not four** — **the empty bags need one hand.** **A learner who answers four has counted the rows.** **Fourth time in the course for that error, and it is still the commonest one.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (24 words)', [
  '**WHAT IS IN THESE BOXES — AND WHAT IT WEIGHS**',
  table(['The thing', 'Size', 'Weight', 'Hands'], [
    ['till rolls', 'small', '**heavy**', '**two**'],
    ['paper bags', 'big', 'light', 'one'],
    ['bottled water', 'small', '**very heavy**', '**two, and bend your knees**'],
    ['bread trays', 'big', 'light', 'one'],
  ], [1.4, 1, 1.4, 2]),
  '⚠ **A small box is not a light box. Read the card before you lift. S.Q.**',
]));
out.push(p('**What to credit.** ⚠ **The _hands_ column, which is the one people leave off.** **_Heavy_ is an opinion; _two hands_ is an instruction.** **Size AND weight on every line.** **And a warning at the bottom.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "till rolls — heavy". ⚠ **How many hands?**',
  '**(pointing)** Here. **(reading)** "paper bags — big". ⚠ **How heavy? Big tells me nothing.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their small heavy line and the class says whether they would have guessed.** **The answer is nearly always no, and that is the card justifying itself in five seconds.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**The heaviest thing I lift is a sack of flour, fifty kilos. I take it off the pallet with Hani. Alone I would drag it, and the sack would tear.**',
]));
out.push(p('⚠ **_Alone I would drag it_ is the sentence to notice** — **it names the unsafe workaround, which is 4.6 and is about to be 10.6.** **Do not lecture on it here.** **Underline it and leave it; Unit 10 is three units away and it is built on exactly these sentences.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Do you lift it alone?_ — **_Not now. I did for two months._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many people lift something heavy alone?** **Take the figure without comment.** **It is the opening entry in a tally that Unit 10 will finish.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (27 words)', [
  '**Flour — big, heavy, two hands. Bread trays — big, light, one. Till rolls — small, heavy, two. Water — small, very heavy, two. Bags — big, light, one. Oil — small, heavy, two.**',
]));

out.push(pb());
// ===================== 7.2 =====================
out.push(h2('7.2  Broken, torn, wet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take the Arabic and write the English beside it.** **Most workplaces have two or three things that get damaged over and over, and the class will name them faster than any list in a book.**'));
out.push(p('**b**  **Torn goes with paper, broken with glass, wet with rain.** ⚠ **Then ask what goes with a carton, and let the gap sit there** — **_crushed_ is the new word and it arrives in the dialogue, which is better than arriving in a list.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — it is crushed.   **b**  **1** One corner — the bottom corner.  **2** He does not know; he has not opened it.'));
out.push(p('⚠ **The best exchange in the unit is the diagnosis:** _Dry and crushed on one corner. That is a box that was dropped, not a box that sat in the rain. — How do you know? — Rain makes a mark all along the bottom. A drop makes one corner. Twenty years._ ⚠ **Ammar supplied two facts and a man with twenty years did the thinking.** **That division of labour is the whole unit.**'));
out.push(p('⚠ **And the line that makes it possible:** _I have not opened it. The outside is crushed. I do not know about the inside._ **Third time in the course, after 4.4 and 5.6.** **Say so out loud: this is now a habit the book expects.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'A carton off the Aleppo lorry. It is crushed.'],
  ['B', 'Crushed where?'],
  ['A', 'One corner. This side.'],
  ['B', 'And inside?'],
  ['A', 'I have not opened it. I do not know about the inside.'],
  ['B', 'Is it wet?'],
]));
out.push(note("Crushed where? is the hinge and it should be drilled as the supervisor's line, because a learner who has heard it four times will answer it before it is asked. That is the point: the question exists in the drill so that it stops needing to be asked at work."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **WHAT and WHERE.** ⚠ **The second is the hard one and the one that gets missed.** **_It is crushed_ with no place in it is half a report, and a listener who writes only the adjective has recorded half of what was said.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four damaged things', [
  '**The thing:** a flour sack   **What is wrong:** torn   **Where:** along the bottom seam   **Looked inside:** yes, flour on the pallet',
  '**The thing:** a bread tray   **What is wrong:** broken   **Where:** one corner of the frame   **Looked inside:** no inside to look at',
  '**The thing:** a carton of oil   **What is wrong:** wet   **Where:** the bottom, all along it   **Looked inside:** no',
  '**The thing:** a bag of sugar   **What is wrong:** torn   **Where:** a straight cut near the top   **Looked inside:** no',
]));
out.push(note("The fourth row is worth reading aloud: a straight cut near the top is what a knife makes, and the class can work that out from the table pinned up in Lesson B. But the learner has written what they saw and not what they concluded, which is the rule. Praise the restraint, then let somebody else draw the inference."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The flour sack is torn, along the bottom seam. I looked inside — there is flour on the pallet._'));
out.push(p('⚠ **Count the reports that said WHERE.** **The figure is low first time** — **learners give the adjective because the adjective feels like the answer.** **Put the number up and run stage 4R again; this is one of the few places where repeating a stage immediately pays.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** It was dropped.  **2** Wet at the bottom means it stood in water; wet on the top means rain, uncovered.  **3** Write what you SEE, not what happened.'));
out.push(p('⚠ **Question 3 is the rule of the cycle and the table is a trap for it.** **Abu Yasser has pinned up a table of inferences and then written _the table is mine, not yours_.** **A learner who starts writing _it was dropped_ on a damage sheet has read the left column and obeyed the right one.** **Point at both.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (26 words)', [
  '**DAMAGE — TUESDAY MORNING, BACK STORE**',
  '**1** The flour sack is torn, along the bottom seam.',
  '**2** The bread tray is broken, one corner of the frame.',
  '**3** The oil carton is wet, the bottom, all along it.',
  '**4** The sugar bag is torn, a straight cut near the top.',
  '⚠ **What I did NOT look at:** inside the oil carton, inside the sugar bag.',
]));
out.push(p('**What to credit.** **A place on every line.** ⚠ **No person named anywhere.** **And the last line: what you did not look at.** **A damage list that is silent about what was not checked is a list that will be read as complete.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "The tray is broken". ⚠ **Where on it?**',
  '**(pointing)** Here. **(reading)** "Hani dropped the sack". ⚠ **Were you there? Write the sack, not the man.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one line and the class answers one question: is a person named in it?** **Nobody should be.** **The class is very good at this question within two minutes, and much better at it than at the place rule** — **blame is easy to spot and detail is not.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**In February six sacks of sugar came torn along the bottom. The driver said they were like that in Homs. The office sent them back and we got six new ones on Thursday.**',
]));
out.push(p('⚠ **_The driver said_ rather than _the driver tore them_ is the thing to credit, and most learners get it right here while getting it wrong in a table.** **Prose invites reporting; a form invites concluding.** **Say that when you hand the papers back; it is a useful thing to know about forms.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody get the blame?_ — **_No. Nobody knew who stacked them._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did somebody get the blame?** **And the follow-up: in how many was the person blamed the person who actually did it?** **Almost never known.** **That gap is the argument for the rule and it makes itself.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (25 words)', [
  '**Sack torn, bottom seam. Tray broken, one corner. Carton wet, all along the bottom. Bag torn, straight cut at the top. Not opened: the carton, the bag.**',
]));

out.push(pb());
// ===================== 7.3 =====================
out.push(h2('7.3  Two of the ten'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect _two are crushed_ and accept it, then ask how many came.** **The missing half is the point and the class should feel it missing rather than be told.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask what the supervisor can DO with each.** **With _some_, nothing — he has to come and look. With _two of the ten_, he can take two off an invoice without leaving his desk.** **Same test as 3.6, 5.1 and 6.4: what can the other person do with this?**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — two of ten.   **b**  **1** He takes two off the invoice.  **2** He telephones Aleppo.'));
out.push(p('⚠ **The last exchange is the one to put on the board:** _The number decides. "Some" decides nothing. Two of ten is a note. Eight of ten is a lorry turning round._ **The same two crushed cartons are a note or a disaster depending on a number the learner was not going to say.**'));
out.push(p('⚠ **And notice that Abu Yasser asks TWICE.** _How many? — A few. — Ammar. How many cartons came, and how many are crushed?_ **He has to name both numbers in the question before he gets them.** **That is what a vague report costs: a second question.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The Aleppo cartons. Some of them are crushed.'],
  ['B', 'How many?'],
  ['A', 'A few.'],
  ['B', 'How many came, and how many are crushed?'],
  ['A', 'Ten came. Two are crushed.'],
  ['B', 'Two of ten. Now I can do something.'],
]));
out.push(note("The drill deliberately makes the learner say the vague version first and be pushed off it. That is the right way round: a learner who has had a few taken off them twice stops offering it. Swap the roles so that everybody has also been the supervisor asking twice — being on the receiving end of a few is what makes the lesson stick."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **The two numbers.** ⚠ **Both, written down.** **A listener who writes _2_ has recorded half the information and would, in a real yard, have to walk.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four damaged loads', [
  '**What came:** flour sacks   **Came:** 20   **Bad:** 2   **_Twenty sacks came. Two of the twenty are torn._**',
  '**What came:** bread trays   **Came:** 40   **Bad:** 1   **_Forty trays came. One is broken._**',
  '**What came:** oil cartons   **Came:** 6   **Bad:** 3   **_Six cartons came. Three of the six are wet — half of them._**',
  '**What came:** sugar bags   **Came:** 12   **Bad:** 11   **_Twelve bags came. Eleven of the twelve are torn._**',
]));
out.push(note("Put the four sample rows next to Abu Yasser's rule in Lesson B and the class can see four different outcomes from four pieces of arithmetic: a note, a note, a telephone call, and a lorry going back. Two of twenty and eleven of twelve are the same sentence shape and completely different days."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Twelve bags came. Eleven of the twelve are torn._'));
out.push(p('⚠ **Count the reports with TWO numbers.** ⚠ **And then do the thing that makes this cycle land: read out a one-number report and ask the class what should happen.** **They cannot say** — **which is the answer.**'));
out.push(p('**Board clinic:** four reports containing _some_ or _a few_. ⚠ **The class asks _how many of how many?_ in chorus, four times.** **Chorus, not individually: the question has to be automatic and automatic comes from repetition.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** A note, and the invoice is reduced.  **2** The lorry does not leave — it goes back loaded.  **3** He has to come and look.'));
out.push(p('⚠ **Question 3 is the cost of vagueness stated as a fact about somebody\'s legs**, **and that is why it works.** **Nobody at A1 is moved by _be precise_.** **Everybody is moved by _the supervisor has to walk down here_.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words)', [
  '**DAMAGE REPORT — 4 APRIL**',
  '**Twelve sugar bags came. Eleven are torn.**',
  '**Where:** a straight cut near the top, all eleven on the same side.',
  '**What I did not look at:** inside — I did not open any of them.',
  '**Which line of the rule:** most of them — the lorry does not leave.',
  '**S. Qassar**',
]));
out.push(p('**What to credit.** ⚠ **Two numbers in the FIRST line** — **the number decides what happens, so it goes where the reader\'s eye lands.** **No _some_, no _a few_.** **A place.** ⚠ **And which line of the rule it is**, **which is the learner doing the supervisor\'s arithmetic for him.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the first line. **(reading)** "Eleven bags are torn". ⚠ **Of how many? Eleven of twelve or eleven of a hundred?**',
  '**(pointing)** at the bottom. **(reading)** nothing. ⚠ **Which line of the rule? Do the sum.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their FIRST LINE only, and the class says which line of Abu Yasser\'s rule it is.** **Nothing else from the page.** **If the class can answer from the first line alone, the report works.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**Last winter twelve cartons of oil came and six were wet all along the bottom. Half of them. The office telephoned Homs the same day and they sent six new ones free.**',
]));
out.push(p('⚠ **Ask for the OUTCOME, not just the damage.** **Papers that stop at _six were wet_ have described a morning; papers that say what the company did have described a procedure working.** **The second kind is what this unit is for.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who paid for them?_ — **_Homs did. Because we telephoned the same day._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did the supplier pay?** **And the follow-up that carries the unit: in how many of those was the report made the SAME DAY?** **Nearly all.** **Put the two numbers side by side** — **a same-day report with two numbers in it is the difference between the supplier paying and the company paying.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (29 words)', [
  '**Twenty sacks came, two torn. Forty trays came, one broken. Six cartons came, three wet — half. Twelve bags came, eleven torn — most. Every line has two numbers.**',
]));

out.push(pb());
// ===================== 7.4 =====================
out.push(h2('7.4  It came like this'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Listen for whether the Arabic blames somebody.** **In most rooms it does, because in most rooms the first instinct is to get out from under it** — **and the sentence this cycle teaches gets you out from under it WITHOUT accusing anybody.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask what happens if the first line is wrong.** **You have accused a man who drove nine hours, in front of your supervisor, and you cannot take it back.** **The second line is safer AND more useful.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — on the lorry.   **b**  **1** He saw them before he touched them, and showed the driver.  **2** The driver did not load it; somebody in Aleppo stacked something heavy on it.'));
out.push(p('⚠ **Abu Yasser opens with an accusation —** _Did you crush them?_ **— and that is deliberate.** **It is the question the learner is afraid of, asked in the first line, and the cycle exists to give them the answer.** **Three sentences and it is over.**'));
out.push(p('⚠ **And the last line is the one to keep:** _Nobody here did it, and nobody in Aleppo will remember who. That is why we write the carton, not the man._ **The rule from 7.2 given its reason** — **and the reason is not politeness, it is that the information does not exist.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Two crushed. Did you crush them?'],
  ['B', 'No. They came like this. I saw them on the lorry, before I touched them.'],
  ['A', 'Before you touched them. You are sure?'],
  ['B', 'I am sure. I showed the driver and he looked at them too.'],
  ['A', 'You showed the driver before you unloaded. Good.'],
  ['B', 'Is the driver in trouble?'],
]));
out.push(note("Make the accusation real in the drill — flat, unfriendly, no smile. Did you crush them? The sentence has to work under that, and a pair who perform it as a friendly chat have not practised the thing. Then swap, so everybody has also had to ask it: being the one who asks is what shows you that the three-sentence answer is a relief rather than a defence."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the speaker say WHO ELSE saw it?** ⚠ **That is the half that gets believed and the half that gets dropped**, **because the first two sentences feel like a complete answer.** **They are not: they are the speaker\'s word.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — two times it was already damaged', [
  '**The thing:** six wet oil cartons   **When I saw it:** on the lorry, before unloading   **Who else saw it:** the driver, and Hani   **Was I believed:** yes',
  '**The thing:** a torn flour sack   **When I saw it:** after I carried it in   **Who else saw it:** nobody   **Was I believed:** ⚠ **no — it came off my wages**',
]));
out.push(note("Those two rows are the whole cycle and most learners have both. The difference between them is not honesty and it is not care: it is the order of two actions. Look before you carry, and find a second pair of eyes. Put the two rows side by side on the board and let the class say what changed."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The flour sack came like this. I saw it after I carried it in. I showed nobody, and it came off my wages._'));
out.push(p('⚠ **Take TWO counts and put them side by side:** **how many reports had a second witness, and how many of those were believed.** **The second figure is very close to the first.** **That pair of numbers is the most persuasive thing in Unit 7 and it comes out of the class\'s own experience.**'));
out.push(p('**Board clinic:** four lines, two naming a person as the cause. ⚠ **The class rewrites each with no person in it.** **Ask what was lost by removing the person** — **nothing, except a guess.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** 7.35.  **2** The inside — he has not opened it.  **3** Two.'));
out.push(p('⚠ **Question 1 is the whole note.** **_I showed the driver at 7.35_ is checkable; _I showed the driver_ is a claim.** **A learner who answers _before unloading_ has read the right line and missed the number on it.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (33 words)', [
  '**SEEN BEFORE UNLOADING — 4 APRIL, 8.10**',
  '**Lorry:** Homs, 220 416.  **Driver:** Marwan Haddad.',
  '**Twelve sugar bags came. Eleven are torn, a straight cut near the top, all on the same side.**',
  '⚠ **I saw this before I touched anything.**',
  '⚠ **I showed the driver at 8.10. He looked at the pallet.**',
  '**Not opened:** none of the bags.',
  '**S. Qassar**   **Driver: M. Haddad**',
]));
out.push(p('**What to credit.** ⚠ **A TIME on the showing line.** **Two numbers.** ⚠ **No person blamed** — **even though a straight cut near the top obviously means a knife, and the learner obviously knows it.** **Two signatures.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "I showed the driver". ⚠ **What time? Put the time.**',
  '**(pointing)** at the bottom. **(reading)** "S. Qassar". ⚠ **Where does the driver sign?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their showing line and the class says whether it has a time in it.** **One question, five seconds, round the room.** **This is the smallest check in Book 2 and it is the one that decides who pays.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**A sack of flour came torn and I did not see it until it was on my pallet. Nobody else saw it on the lorry. The shop took it off my wages, nine hundred.**',
]));
out.push(p('⚠ **That sample is the commonest true answer to this stage and it should not be softened.** **The learner paid for somebody else\'s mistake because they looked ten seconds too late.** ⚠ **Do not moralise.** **Write the three sentences from the Language box on the board and leave them there.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who else saw it?_ — **_Nobody. That was the problem._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did a second person see it AT THE TIME?** **Low.** **And in how many of those was the writer believed? High.** **The two figures together are the cycle, and they are stronger than anything a teacher can say.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (23 words)', [
  '**It came like this. I saw it on the lorry, before I touched it. I showed the driver at ___. He looked at it too.**',
]));

out.push(pb());
// ===================== 7.5 =====================
out.push(h2('7.5  What do I do?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect a long version in Arabic and cut it.** **Four English words do the job and the cycle is partly about brevity** — **a question wrapped in apology gets a shorter answer than a question with facts in front of it.**'));
out.push(p('**b**  **The second line.** ⚠ **Ask why.** **Because it hands over the facts first.** **A supervisor who has the facts can answer in four words; a supervisor who has only the question has to ask three of his own.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — put them aside and open one.   **b**  **1** The worse one.  **2** Because next time he will not be there, and Ammar will have to decide.'));
out.push(p('⚠ **The last exchange is the best thing in Unit 7 and it is about teaching, not storekeeping:** _Why are you telling me all of it? — Because next time I am not here, and you will have to decide. A man who was only told what to do learns nothing._ ⚠ **Read it twice.** **It is also a description of this book.**'));
out.push(p('⚠ **And Ammar\'s best line is a question:** _And if the labels are damaged?_ **He asks about the case that has not happened yet, while the man who knows is standing beside him.** **That is the most valuable four words in the cycle.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Two of the ten are crushed. They came like this. What do I do?'],
  ['B', 'Put the two aside. By the bench, not on the shelf.'],
  ['A', 'And the eight?'],
  ['B', 'They go on row three. Normal.'],
  ['A', 'And if the inside is damaged?'],
  ['B', 'Then they go back on the next Aleppo lorry.'],
]));
out.push(note("The speaker giving instructions must say the reason as well, even where the card does not supply one — by the bench, not on the shelf is only half a line without because a damaged carton on a shelf gets sold. Push for it. A pair who drill the reasons will produce the Lesson B card almost without effort."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Did the speaker ask _and if…?_** ⚠ **That question is worth more than the first one** — **it buys tomorrow\'s answer today.** **A pair who never asked it have had one problem solved; a pair who did have had two.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things I have had to ask about', [
  '**The facts:** two of twenty sacks torn, came like that   **My question:** _What do I do?_   **The answer:** _Aside, tell the office._   **A reason?** ⚠ **no**',
  '**The facts:** the till is forty short at six o\'clock   **My question:** _Do I count again or tell you?_   **The answer:** _Count again, then tell me._   **A reason?** **yes — most are counting mistakes**',
  '**The facts:** a customer wants credit, no account   **My question:** _Shall I say no?_   **The answer:** _Say I will ask the manager._   **A reason?** **yes — never say no to a regular yourself**',
  '**The facts:** the bread came at seven, not six   **My question:** _And if it comes late again?_   **The answer:** _Ring me, do not wait._   **A reason?** **yes — I can move the van**',
]));
out.push(note("The fourth row is the only one where the learner asked about a case that had not happened yet, and it is the only one that produced an instruction for the future. That is the whole argument for and if…? and it is better shown in a table than explained. The first row — an answer with no reason — is the one that will not survive the supervisor's day off."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The bread came at seven, not six. And if it comes late again? He said ring me, do not wait, because he can move the van._'));
out.push(p('⚠ **Count the answers that came with a REASON.** **A reason is what lets you decide the same thing alone next month** — **and the count is usually about half, which means half of what this class has been told will not survive a day off.**'));
out.push(p('**Board clinic:** four questions with no facts in front of them. ⚠ **The class adds one line of facts to each.** **Then read the before and after aloud** — **the difference in how answerable they are is obvious in the ear.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Because a damaged carton on a shelf gets sold.  **2** One — only the worst one.  **3** That the reason on every line is what makes the card work when the supervisor is away.'));
out.push(p('⚠ **Question 2 is the step people overdo.** **A card that says _open it_ and not _how many_ is a card somebody will overdo** — **and if you open all ten you cannot send any back.** **That is a real commercial fact and it is worth one minute.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (38 words)', [
  '**THE TILL IS SHORT — WHAT TO DO, AND WHY**',
  '**1** Count it again, alone, with the drawer closed. ⚠ **because** most shortages are counting mistakes and nine times in ten the second count is right.',
  '**2** Count it a second time only. ⚠ **because** a third count with people waiting makes new mistakes.',
  '**3** Still short? Write the figure and the time, then tell the manager. ⚠ **because** the figure at six is evidence; the figure at eight is a memory.',
  '**4** Do not put your own money in. ⚠ **because** then nobody ever finds out why it was short.',
  '**S. Qassar**',
]));
out.push(p('**What to credit.** ⚠ **A reason on EVERY step.** **A step that says how MUCH, not just what.** **A step for the bad case as well as the good one.** ⚠ **And credit a step that says what not to do** — **the fourth line in the sample is the one a real shop needs most.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Count it again". ⚠ **Why? And how many times?**',
  '**(pointing)** at the card. **(reading)** four steps, all good cases. ⚠ **What if it is still wrong?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one step with its reason and the class answers one question: would you follow it with nobody watching?** **That is the only test of a procedure.** **A step whose reason is _because the manager said so_ fails it, and the class will say so.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**Majd told me never to say no to a regular customer myself, because a no from the counter is final and a no from the manager can change. I can decide that alone now.**',
]));
out.push(p('⚠ **The last sentence is what the stage is asking for:** _I can decide that alone now._ **A learner who can say it about one decision has been taught rather than instructed**, **and that distinction is what the dialogue in this cycle is about.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Could you decide it alone now?_ — **_Yes. He told me why._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was a reason given?** **And the one that matters: in how many could the writer now decide alone?** **The two numbers are nearly the same number**, **which is the finding — a reason and the ability to decide alone are the same thing.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**Alone: a short till, a torn sack, a late delivery. Not alone: credit for a customer, sending a lorry back, anything about wages. I ask the manager.**',
]));

out.push(pb());
// ===================== 7.6 =====================
out.push(h2('7.6  One line, and somebody acts on it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Take the first attempt, then make them say it again shorter, twice.** **Three attempts, each shorter, and the third one is usually the good one** — **this is the only stage in the book where the exercise is cutting.**'));
out.push(p('**b**  Open. ⚠ **Counting the words is the point and it should be done out loud, on fingers, in front of everybody.** **A learner who has never counted the words in a sentence does not know what twelve words looks like.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — the office took money off the invoice.   **b**  **1** Twelve words.  **2** Nour, and then the office upstairs.'));
out.push(p('⚠ **This is the first time in the whole course that something a learner WROTE has an outcome in money.** **Forty thousand off an invoice, from twelve words, written in two minutes.** **Say the figures.** **The class has spent seven units being told that writing matters and this is the cycle that shows it.**'));
out.push(p('⚠ **And the counter-example is in the same dialogue:** _last month somebody wrote "some boxes damaged" and I had to walk down here twice… and then the lorry had gone and we paid for all twelve._ **Same event, two kinds of line, two different invoices.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Ten cartons came. Two are crushed.'],
  ['B', 'Where on them?'],
  ['A', 'Bottom corner.'],
  ['B', 'And did they come like that?'],
  ['A', 'They came like this. I saw them on the lorry.'],
  ['B', '_(writes, then reads it back)_  Ten cartons came, two crushed, bottom corner, came like this.'],
]));
out.push(note("The writer must read the line back aloud, every time, and that is not a courtesy — it is the test. A line you cannot say in one breath is too long for a sheet, and a line that sounds odd read aloud will be misread on paper. Make the pairs do it even when they think the line is obviously fine."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Count the words. Then say whether you could act on it without asking anything.** ⚠ **The second half is the real task** — **a nine-word line you cannot act on is worse than a fifteen-word line you can.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four damage lines', [
  '**My line:** _Twenty sacks came, two torn, bottom seam, came like this._   **Words:** 10   **Act on it?** **yes**',
  '**My line:** _Twelve bags came, eleven torn, straight cut at the top, came like this._   **Words:** 13   **Act on it?** **yes**',
  '**My line:** _Some trays broken._   **Words:** 3   **Act on it?** ⚠ **no — how many of how many?**',
  '**My line:** _Six oil cartons came and three of them were wet all along the bottom and they came like that from Homs on the Tuesday lorry._   **Words:** 26   **Act on it?** **yes, but too long for a sheet**',
]));
out.push(note("Rows three and four are the two ways to fail and they fail differently: row three is too short to use and row four is too long to be read. Both are worth keeping in the table. The lesson is not be brief — it is be brief without losing a number, and row four loses nothing, it just will not fit in a column."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Twenty sacks came, two torn, bottom seam, came like this. Ten words. The office can take two off the invoice._'));
out.push(p('⚠ **Ask for the shortest line in the class that is still actionable, and write it on the board.** **It is usually about nine or ten words and it always has two numbers in it.** **That line stays on the board for the rest of the unit as the target.**'));
out.push(p('**Board clinic:** four long lines. ⚠ **Cut each to under fifteen words WITHOUT losing a number.** **The constraint is the exercise** — **cutting is easy if you are allowed to drop the numbers, and useless.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** 30 March and 1 April.  **2** The two that worked have two numbers in them; the two that failed have none.  **3** Nobody knew which pallet.'));
out.push(p('⚠ **This is the only table in the course where learners can see their own kind of writing succeeding and failing in a column.** **Read all four rows aloud, in order.** ⚠ **And point at the third column: _acted on?_** **That column is the only honest measure of a piece of workplace writing.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (29 words)', [
  '**DAMAGE SHEET — WEEK OF 30 MARCH, THE SHOP**',
  table(['Date', 'The line', 'Acted on?'], [
    ['31 Mar', 'Twenty sacks came, two torn, bottom seam, came like this.', '✓ two off the invoice'],
    ['1 Apr', 'Some trays broken.', '✗ Majd asked how many, I did not know'],
    ['2 Apr', 'Forty trays came, one broken at a corner, came like this.', '✓ replaced Thursday'],
    ['3 Apr', 'Oil wet.', '✗ which cartons? how many? nobody acted'],
  ], [0.9, 3.4, 1.8]),
  '⚠ **The two that worked have two numbers. The two that failed have none. S.Q.**',
]));
out.push(p('**What to credit.** **Two numbers in every line that worked.** ⚠ **At least one line that did NOT work**, **with a reason in the third column.** **Every line under fifteen words.** ⚠ **Credit a learner who puts their OWN failure on the sheet** — **that is the hardest thing the unit asks and it is the thing the sheet is for.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** at the third column. **(reading)** "✗". ⚠ **Why did it fail? Write it.**',
  '**(pointing)** at four lines, all ticked. ⚠ **Where is the one that did not work? Everybody has one.**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their FAILED line and the class says what was missing from it.** **In nine cases out of ten the answer is a number.** **Say that out loud when it happens for the third time** — **the class will have found the rule for itself.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**I wrote on the sheet that two sacks of twenty were torn at the bottom seam. Majd read it and took two off the Homs invoice. Nobody told me, I saw it later.**',
]));
out.push(p('⚠ **_Nobody told me, I saw it later_ is the sentence to notice and it is the quiet finding of this cycle.** **Workplace writing usually works invisibly** — **and a learner who never hears that their line was acted on has no reason to write the next one well.** **Tell them. Once is enough.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody tell you it worked?_ — **_No. I found out from the invoice._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was the writer TOLD that their writing had worked?** **Almost none.** ⚠ **That is a thing a supervisor in this room could change on Monday**, **and it is worth saying to a class that contains supervisors.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (28 words)', [
  '**Twenty sacks came, two torn, bottom seam, came like this. Forty trays came, one broken, corner, came like this. Six cartons came, three wet, bottom, came like this.**',
]));

out.push(pb());
// ===================== 7.7 =====================
out.push(h2('7.7  Review: a damage note'));
out.push(stage('1', 'Get ready – Unit 7 quiz'));
out.push(table(['', 'The answer'], [
  ['**7.1**', '_a small heavy box_ ⚠ **size then weight, in that order**'],
  ['**7.2**', '_It is crushed, on one corner._ ⚠ **what AND where**'],
  ['**7.3**', '_Twelve came. Three of the twelve are torn._'],
  ['**7.4**', '_It came like this. I saw it on the lorry. I showed the driver at ___._'],
  ['**7.5**', '_Two of ten are crushed. They came like this. What do I do?_'],
  ['**7.6**', '_Ten cartons came, two crushed, bottom corner, came like this._ ⚠ **twelve words**'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **7.3 is the one to listen hardest to** — **a learner who gives one number should hear the question _of how many?_ once and then be ticked.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — four.   **b**  **1** Each man assumed one of the other three had written it.  **2** The company paid for twelve cartons and two were crushed.'));
out.push(p('⚠ **Four men saw it and all four were right about what they saw.** **Fouad told Ammar. Ammar told Fouad. Samih carried them to the bench. Abu Yasser walked past them.** **Nobody ignored it, nobody was lazy, and three of the four actively did something.** **And the sheet for Tuesday is empty.**'));
out.push(p('⚠ **Abu Yasser\'s last line is the summary:** _Four of us knew. The sheet did not. And the sheet is what Nour takes upstairs._ **Knowing is not recording, and only one of the two goes upstairs.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play Fouad as somebody passing the job on.** **He saw it, he told the man he thought wrote things, and he did it the same morning** — **that is three correct actions.** ⚠ **And do not let anybody play Nour as the paperwork person.** **She paid for twelve cartons and got ten.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **_All four, a quarter each_** — **and then the harder half of the task: say why that is not a useful answer.** **A quarter of the blame each means nothing changes, because nobody can act on a quarter.** **The useful answer names ONE man, and the trick is that it names him by position and not by name.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — everybody saw it, nobody wrote it', [
  '**What everybody saw:** the freezer door not closing properly.   **How many people:** five, over two days.   **Who they thought would write it:** the one who is friendly with the manager.',
  '**What everybody saw:** a customer taking two bags and paying for one, every Thursday.   **How many people:** three.   **Who they thought would write it:** ⚠ **each other — all three had seen the other two see it.**',
]));
out.push(note("The second sample is the sharper shape and it comes up in real classes more often than the first: three people who have each watched the other two watching. Nobody is deceived, nobody is complicit, and nothing is written down. It is the same arithmetic as the four cartons and it will be the same answer."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Each of the four**', '⚠ **each saw it, and three of the four told somebody the same morning — not one of them ignored it**', '**the assumption.** ⚠ **Nobody assumes any more. The first man writes it.**'],
  ['**Nour**', '⚠ **the sheet for Tuesday is empty and the company paid for twelve cartons** — **four men knowing is not a record, it is four men who will remember it differently next month**', '**the search for a culprit.** ⚠ **There is no culprit, and looking for one would not get the money back.**'],
  ['**The rule**', '⚠ **THE FIRST MAN TO SEE IT WRITES THE LINE** — **not the man who writes things, not the supervisor, not whoever has time** — **and he says one sentence out loud:** _I have written it._', '**nothing.** ⚠ **It costs one line and five words, and nobody writes it twice.**'],
], [1.4, 4.4, 3.4]));
out.push(p('**Report (sample):**  _All four are right because every one of them saw it and three of them told somebody. Nour is right because the sheet is empty and we paid for twelve. So the first man to see it writes the line, and he says "I have written it" out loud so the others know._'));
out.push(p('⚠ **And the finding, which is new in this book and is the opposite of what anybody expects:** **the MORE people see a thing, the LESS likely it is that anybody writes it down.** ⚠ **One man who sees a crushed carton writes it. Four men who see it each assume one of the other three has.** **Put that on the board as a sentence and ask the class for another example from their own work.** **Every class produces one in under a minute.**'));
out.push(p('⚠ **It is also why the rule names a POSITION and not a person.** **_The first pair of eyes_ is a rule that works in a yard where people change shift; _Ammar writes things_ is a rule that fails the first Tuesday Ammar is off.** **Book 1\'s five findings were all about records that depended on one man. This one is about a record that depended on nobody in particular, which is worse.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'B', 'B', 'C']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 5 is this cycle as an exam item and the three options are the three wrong answers a real yard gives:** **the supervisor, whoever has time, and the man who writes things.** **The right answer is the one nobody chooses by instinct.**'));
out.push(p('⚠ **Tell the class what the task is.** **A2 Key Reading Part 1, which they sit at the end of the NEXT course** — **seventh time of asking, and by now most of the room reads the five notices without being told how.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words, four sentences)', [
  '**To:** the office',
  '**Twelve sugar bags came and eleven are torn. They came like this. Marwan the driver saw them with me at 8.10. Please do not pay for the eleven.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**the two numbers, in the first sentence**'],
  ['**1**', '**what is wrong**'],
  ['**1**', '⚠ **_they came like this_** — **whose problem it is**'],
  ['**1**', '⚠ **a second witness, with a TIME**'],
  ['**1**', '⚠ **the ask in the LAST sentence**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **Seventh unit running** — **and by now the class should be counting before you ask.** **If they are, say so: it is a habit they built, not a thing they were told.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the last one must be the thing the reader must DO.** **Here it is almost always _do not pay for them_ or _ask for replacements_** — **and a message that reports damage without asking for anything is a message the office files.**'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**Twenty flour sacks came and two are torn along the bottom seam. They came like this. Hani saw them on the lorry with me at 7.20. Please take two off the invoice.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'c', 'a', 'c', 'a', 'b', 'a', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Question 1 is the adjective order and (c) _heavy small_ will be chosen by learners who have the two words and not the order.** ⚠ **Question 4 is the one that matters commercially:** _two of the ten_ **against** _some_ **and** _a few_, **both of which are correct English and neither of which can be acted on.** ⚠ **Question 8 is 7.7 and the answer is the one nobody picks by instinct** — **the first man to see it, not the supervisor and not whoever has time.**',
  '**B  Listening — 6 marks**, one each. **Twelve (1) · three (1) · torn (1) · along the top, accept "the top" (1) · the driver, at ten past eight (1) · put the three aside by the bench and the nine on row two, accept either half (1).** ⚠ **Item 5 scores only if the learner has the driver AND something about the time** — **it is the showing line from 7.4 and the time is what makes it worth anything.**',
  '**C  Reading — 3 marks:** **30 March and 1 April (1) · the two that worked have two numbers and the two that failed have none (2).** ⚠ **The second answer is worth two marks because it is the whole unit in one sentence**, **and a learner who can state it has understood 7.3 and 7.6 together.**',
  '**D  Writing — 8 marks:** **four sentences (2) · two numbers (2) · what is wrong (1) · _came like this_ (1) · a witness with a time (1) · the ask last (1).**',
  '**Total 25.** ⚠ **The profile to expect: A split on 1 and 4, B split on item 5, C split on the two-mark answer, D the best in the course so far.** ⚠ **If D is not the best yet, look at whether the two numbers are there** — **that is where the marks are and it is a counting habit, not an English one.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five things, and the first is about the book rather than the unit. This is the first unit of Book 2 and Book 2 has a subject: the gaps. Book 1 ended with five things that went wrong and nobody at fault, and the class should be reminded of all five on the first morning of this unit, in Arabic if that is what it takes. Without that frame, Book 2 is six more lists of words. With it, every unit from here is an answer to something the class has already seen go wrong. Second, the three sentences. Two of the ten are crushed. They came like this. What do I do? Everything in this unit serves those three, and a learner who can produce them in that order has the unit even if the vocabulary is shaky. Drill the order, not the words. Third, the two numbers in 7.3. Some are damaged is real English and it decides nothing; two of ten is a note and eight of ten is a lorry turning round. The cycle is built so that the learner says the vague version first and has it taken off them twice, which is the right way round — being pushed off a few is what stops a learner offering it. Take the counts and put them on the board; the arithmetic argues better than you can. Fourth, write the carton and not the man. It appears in 7.2 as a rule and in 7.4 as a reason, and the reason is the useful half: nobody in Aleppo will remember who stacked something heavy on that carton, so the information does not exist and naming a man is a guess. This is the third time the course has asked for this discipline, after the dust in 4.4 and the wrapped pallets in 5.6. Say that it is the third time. Fifth, 7.7, which is a new shape of problem. Book 1's five findings were all about records that depended on one man — Abu Raed's book, Hani's swaps, Fouad's map, a slip on one desk. This one is about a record that depended on nobody in particular, and it is worse, because the more people who see a thing the less likely it is that anybody writes it down. Four men, all of them right, and an empty sheet. The answer names a position and not a person: the first pair of eyes writes the line, and says I have written it out loud. Ask the class for an example from their own work. Every class has one and most have three."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 7 · Answer Key');
module.exports = out;
