// Proactive Business English A1 · Syria Edition · Book 1 · Unit 4 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 4  Where Things Are'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Before you teach this unit', [
  'Every task has an answer. Where a task is open, this key gives a **full sample answer** — speaking, reports, checklists and homework too. Learners\' own answers will be different and that is correct.',
  '⚠ **This unit replaces a hand with six words.** **_Over there_ is not a place; _row three, shelf two, behind the blue boxes_ is.** **That sentence is the unit and it is worth putting on the board on the first morning.**',
  '⚠ **Shelf 1 is the BOTTOM in this book.** **It is the bottom in most stores and not in all of them, and the book says so in 4.2.** **Do not teach it as a fact about English** — **teach it as a thing to ASK on your first day.** **A learner who guesses puts the heavy cartons where the light ones go.**',
  '⚠ **4.6 is the safety cycle and _can_ is the only verb in Book 1 that refuses the -s from 3.4.** **Expect _he cans_ from learners who have just learned Unit 3 well.** **That error is evidence the last unit worked; say so before you correct it.**',
  '⚠ **4.7 is the second problem in this book with nobody at fault, and it is a harder one than 3.7.** **Fouad was right eleven times out of eleven.** **A bent roll really is rubbish.** **And a man really did go to row two on Tuesday and come back with nothing.**',
  '**Word counts.** Stage 6 asks for **15 words or more**, stage 7 for **20 to 35**. ⚠ **Cycle 7\'s written task is four sentences in about 30 words**, which is the shape of an A2 Key Writing Part 6 one step down.',
], C.grey, C.navy));

// ===================== 4.1 =====================
out.push(h2('4.1  In the box, on the shelf, under the bench'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Do it with real pens and real books, standing up.** **The five words are learned by the hand before they are learned by the ear**, **and a class that has put a pen under a book does not confuse _under_ with _behind_ again.**'));
out.push(p('**b**  Open. ⚠ **Take all five answers from five different learners** — **one word each.** **If four of them say _on_, ask the fifth for a different word and make them move the bag.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — under the bench.   **b**  **1** A ladder.  **2** On the shelf.'));
out.push(p('⚠ **Play it three times.** **At A1 the first listening is noise, the second is words, the third is meaning.**'));
out.push(p('⚠ **The last line is the marked one:** _Not behind the paper. In front of it. So the next man can see it._ **Abu Yasser is not being fussy** — **a thing behind another thing is a thing that will be reported missing in Unit 4.4.** **The two cycles are connected and it is worth saying so now.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The box of labels. Where is it?'],
  ['B', 'On the shelf?'],
  ['A', 'No. I looked.'],
  ['B', 'In the big box?'],
  ['A', 'Look under the bench.'],
  ['B', 'Yes. Here it is.'],
]));
out.push(note("Run it twice with the book and twice without. Have the pairs stand at the back of the room and point at real places as they say the words — a shelf, a table, a door. The five words are physical and a drill done sitting down teaches four of them."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Three places.** ⚠ **The second one is the one that goes missing** — **it comes in the middle, it is rejected, and listeners write down the places that turn out to be right.** **Tell them to write all three, including the wrong ones.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — five things at my work', [
  '**The thing:** the count sheets   **Where it is:** on the table, next to the window',
  '**The thing:** the spare key   **Where it is:** behind the door, on the hook',
  '**The thing:** the labels   **Where it is:** in the small box, on the top shelf',
  '**The thing:** the ladder   **Where it is:** next to the long bench',
  '**The thing:** the old sheets   **Where it is:** under the table, in a green box',
]));
out.push(note("Four of these five samples use two small words, and that is the shape the Writer's box asks for at stage 6. A learner who writes on the shelf five times has not got it wrong, but they have nothing to build the note from, so push for the second word here rather than at stage 6."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The spare key is behind the door, on the hook._'));
out.push(p('⚠ **The mistake to expect:** ***the shelf on*** — **the Arabic word order coming through.** **The small word goes BEFORE the thing in English, every time, with no exceptions in this book.** **One board clinic fixes it.**'));
out.push(p('**Then the count:** which small word did most people use? ⚠ **_on_ wins in every class, and the interesting figure is how few people used _behind_.** **Ask why** — **the answer is that things behind other things are hard to find, which is Unit 4.4 arriving early.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** In the small box, on the top shelf.  **2** The spare key, on the hook.  **3** Three — labels, count sheets and spare key.'));
out.push(p('⚠ **Question 3 is a counting-and-reading question and it is harder than it looks.** **The learner has to decide whether _next to the bench_ counts as two** — **it does not, it is one small word made of two English words.** **Expect four as an answer and treat it as a good mistake.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (24 words)', [
  '**BACK STORE — WHERE THINGS ARE**',
  '**Count sheets** — on the table, next to the window',
  '**Labels** — in the small box, on the top shelf',
  '**Ladder** — next to the long bench',
  '**Spare key** — behind the door, on the hook',
  '**Put it back where this paper says. S.Q.**',
]));
out.push(p('**What to credit.** **A small word on every line.** **Two small words on at least two lines.** ⚠ **And the _put it back_ line at the end** — **a note that only says where to FIND a thing is out of date the first time somebody moves it, which is the whole of 4.7.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Ladder — the bench". ⚠ **Which small word? On it? Under it?**',
  '**(pointing)** Here. **(reading)** "Labels — in the box". ⚠ **Where is the box?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read one line and the class answers one question: could you find the thing?** **Not _is it correct_.** **Could you walk to it.** **That is the only test a where-things-are note has to pass.**'));
out.push(stage('7', 'Write freely – sample (30 words)'));
out.push(sample('Sample answer', [
  '**The count sheets are on the table and the labels are in a small box on the top shelf. The spare key is the hardest. It is behind the door and only three men know.**',
]));
out.push(p('⚠ **The question _which one is hardest to find_ is the one that produces real language**, **because the learner has to compare and give a reason.** **A paper that answers it in eight words has done more than a paper with six tidy locations.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Who else knows where that is?_ — **_Three men. Not the new ones._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many things does only ONE person know the place of?** **In a real workplace class the number is high.** **It is a finding, not an exercise** — **and every one of those is a day the work stops.** **Unit 1.7 and 3.7 were the same shape and 4.7 is about to be too.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (28 words)', [
  '**Pens — in the drawer, under the counter. Boxes — on the floor, behind the door. Sheets — on the table, next to the window. Key — in my pocket, not on the hook.**',
]));

out.push(pb());
// ===================== 4.2 =====================
out.push(h2('4.2  Row three, shelf two'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Count the rows of chairs in the room out loud, standing at the door.** **The phrase that matters is _from the door_** — **and the class will see immediately that counting from the other end gives a different answer.** **That is 4.2 in fifteen seconds.**'));
out.push(p('**b**  Open. **The hardest shelf to reach is almost always the top one.** ⚠ **Ask for its NUMBER, not _the top_.** **If the learner does not know the number, that is the answer to write on the board** — **and it is the gap this cycle fills.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — row 3.   **b**  **1** Four.  **2** The bottom.'));
out.push(p('⚠ **Samih\'s line is the one to read twice:** _Shelf one is the bottom, shelf four is the top. Everybody asks._ **_Everybody asks_ is permission.** **A learner who has heard that nobody is expected to know will ask on their first day instead of guessing.**'));
out.push(p('⚠ **And _from the door_ — the three words that make the number mean anything.** **Point at them.** **An address counted from an end nobody named is not an address.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The cartons. Row three, shelf two.'],
  ['B', 'Row three. Which one is row three?'],
  ['A', 'From the door. One, two, three.'],
  ['B', 'And shelf two?'],
  ['A', 'Shelf one is the bottom.'],
  ['B', 'Row three, shelf two. The second one up.'],
]));
out.push(note("The last line is the drill: the learner converts the label form into the spoken form in their own mouth. Row three, shelf two, the second one up. Make them say all three parts every time, because the conversion is the skill and the two numbers on their own are just repetition."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Two numbers.** ⚠ **Ask the listeners which END the row was counted from as a follow-up.** **Half will not have heard it** — **and that is worth showing them, because it is the half of the address that cannot be guessed.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four things in my store', [
  '**The thing:** cartons   **Row:** 3   **Shelf:** 2',
  '**The thing:** rolls   **Row:** 2   **Shelf:** 1',
  '**The thing:** labels   **Row:** 3   **Shelf:** 3',
  '**The thing:** pallets   **Row:** 1   **Shelf:** 1',
]));
out.push(note("Learners whose work has no rows and shelves — a counter, an office, a lorry — should invent an addressing system for the space they do have. A counter has a left end and a right end and three drawers, and numbering them is the same skill. Do not let them sit out the cycle; the thing being taught is addressing, not warehousing."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The cartons are in row three, shelf two. That is the third row from the door._'));
out.push(p('⚠ **The marked thing here is the second sentence.** **It names the end.** **A report with only the first sentence has given an address that works in one store and nowhere else.**'));
out.push(p('**Then the question to the partner:** is shelf 1 the top or the bottom in your store? ⚠ **ASK. Do not guess.** **That instruction is in the unit twice and it is the most portable thing in it.**'));
out.push(p('**Board clinic:** four addresses, two counted from the wrong end. ⚠ **The class cannot find the error without being told which end is right**, **which is exactly the point** — **let them discover that they have to ask.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Labels.  **2** Row 4 — three empty shelves.  **3** Row 2, shelves 1 and 2.'));
out.push(p('⚠ **Question 3 needs BOTH shelves.** **The rolls are on two shelves and a learner who gives one has read for the first match again.** ⚠ **Question 2 is the hard one: it is a counting question across a row, and the learner has to count _empty_ three times in row 4 and two in rows 1 and 3.** **Expect row 1.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (22 words)', [
  '**SMALL STORE — ROWS 1 TO 3**',
  table(['', 'Shelf 1 (bottom)', 'Shelf 2', 'Shelf 3', 'Shelf 4 (top)'], [
    ['**Row 1**', 'pallets', 'cartons', 'cartons', 'empty'],
    ['**Row 2**', 'rolls', 'rolls', 'labels', 'empty'],
    ['**Row 3**', 'packets', 'packets', 'empty', 'empty'],
  ], [1, 1.5, 1.1, 1.1, 1.3]),
]));
out.push(p('**What to credit.** ⚠ **_(bottom)_ and _(top)_ in the heading** — **four words that save a question.** ⚠ **And _empty_ written in the empty squares** — **a blank means nobody looked, _empty_ means somebody did.** **Same rule as the week board in 3.1, same reason.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Shelf 1". ⚠ **Top or bottom? Write it.**',
  '**(pointing)** Here at this square. **(reading)** nothing. ⚠ **Is it empty, or did you not look?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **One learner gives an address out loud; another finds it in their OWN table and says what is there.** **Round the room.** **It is the fastest drill in the unit and the only one that tests both halves at once.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**My store has three rows and four shelves in each row. Shelf one is the bottom and it is the heavy one, because the pallets go there. Shelf four is empty in every row.**',
]));
out.push(p('⚠ **The question _which shelf is the heavy one_ has a right answer at nearly every workplace and it is the bottom.** **Ask why** — **the answer is lifting, and it is the reason 4.6 exists.** **A learner who connects the two cycles has understood the store rather than the vocabulary.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Which shelf do you use most?_ — **_Shelf two. It is the one I can reach without the ladder._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: is the heavy shelf the bottom one in every store?** **It should be, and where it is not there is a reason or a problem.** **Either way it is worth thirty seconds of the class\'s attention.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**Cartons — row 3, shelf 2. Rolls — row 2, shelf 1. Labels — row 3, shelf 3. Pallets — row 1, shelf 1. Packets — row 2, shelf 4. Count from the door.**',
]));

out.push(pb());
// ===================== 4.3 =====================
out.push(h2('4.3  Where is the big roll?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three questions, and make one of them plural.** **If every question in the room is singular the cycle has not started.**'));
out.push(p('**b**  ***Where are the rolls?*** **is correct.** ⚠ **Ask what tells you** — **the -s on _rolls_.** **It is the same -s as 3.4 doing a different job, and a class that sees that connection has one rule instead of two.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — yes, in the wrong place.   **b**  **1** Row two, shelf one.  **2** Behind the door, standing up.'));
out.push(p('⚠ **Nour\'s last line is the whole of 4.7 arriving three cycles early:** _Somebody made a good decision and told nobody._ **Underline it.** **When the class reaches 4.7 you will point back at this line, and they will remember hearing it.**'));
out.push(p('⚠ **And Ammar\'s reasoning is worth naming:** **the other four rolls are in the right place, so the big one is not lost** — **it is somewhere that suits it.** **That is deduction, in English, by a man who could not say _good morning_ three units ago.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Where is the big roll?'],
  ['B', 'Row two, shelf one. It says so on the paper.'],
  ['A', 'It is not in row two.'],
  ['B', 'Where are the other rolls?'],
  ['A', 'Row two, shelf two.'],
  ['B', 'Then it is somewhere sensible. Behind the door?'],
]));
out.push(note("The exchange has one singular question and one plural question in it, twelve seconds apart, which is why it is the drill and not a gap-fill. A learner who says Where is the other rolls has heard the difference and not produced it yet; that is normal at this point and it goes in the board clinic, not on the paper."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Count the _is_ / _are_ mistakes.** ⚠ **A number, not a list** — **the same rule as 3.4, and for the same reason.** **Two in a first run is normal.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — four questions and four answers', [
  '**Where is the ladder?** — **_In the yard. It should be next to the bench._**',
  '**Where are the count sheets?** — **_On the table._**',
  '**Where is the spare key?** — **_Behind the door._**',
  '**Where are the labels?** — **_In the small box, row 3 shelf 3._**',
]));
out.push(note("Two of the four questions must be plural, and that is worth stating as the rule for the stage. Learners left to choose will write four singular questions because the singular is easier, and they will then have had no practice in the thing the cycle is for."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I asked where the ladder was. It is in the yard, not next to the bench._'));
out.push(p('⚠ **The marked thing is the second half:** _not next to the bench_. **The learner has reported the answer AND the difference from the paper**, **which is the 4.3 skill and the thing Lesson B is built on.**'));
out.push(p('**Then the count:** how many answers were an address with a number, and how many were a wave of the hand? ⚠ **Put both numbers on the board.** **The wave-of-the-hand number is usually the bigger one and it should not be** — **say so, kindly, once.**'));
out.push(p('**Board clinic:** four questions, two with _is_ for _are_. ⚠ **Let the class find them by listening, not by reading.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Row 2, shelf 1.  **2** Behind the door, standing up.  **3** It is too long for the shelf.'));
out.push(p('⚠ **Question 3 is the one that matters and it is line three of the note.** **_Why_ is what turns somebody\'s mistake into somebody\'s good decision** — **and a good decision does not get undone the next morning.** **A learner who skips the _why_ line has read the correction as a complaint.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (26 words)', [
  '**ROW 1 — CORRECTION, 18 MARCH**',
  '**The paper says:** long ladder — row 1, shelf 1.',
  '**It is not there.** It is next to the gate, flat on the wall.',
  '**Why:** it is longer than the shelf and it sticks out into the walkway.',
  '**So:** the paper now says _long ladder — next to the gate, on the wall_.',
  '**S.Q.**',
]));
out.push(p('**What to credit.** **Four lines, all four.** ⚠ **The _why_ line is the one that stops the argument, and the _So_ line is the whole point** — **a correction that does not change the paper is a complaint.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "It is next to the gate". ⚠ **Why? Nobody will believe it without the why.**',
  '**(pointing)** at the bottom. **(reading)** nothing. ⚠ **What does the paper say NOW?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _why_ line and the class says if it is a good reason.** **A good reason names a consequence:** _it bends · it sticks out · it falls._ **A reason that says _it is better there_ is not a reason yet, and the class will say so.**'));
out.push(stage('7', 'Write freely – sample (31 words)'));
out.push(sample('Sample answer', [
  '**The long ladder is not in row one. It is next to the gate, flat on the wall. Fouad moved it last year because it stuck out. Nobody changed the paper.**',
]));
out.push(p('⚠ **Expect the last sentence in most papers and do not treat it as a complaint.** **It is a finding, and it is the one this book keeps making** — **the arrangement works, the paper does not say so, and nobody is at fault.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did anybody change the paper?_ — **_No. It still says row one._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many was the paper changed?** **The number is nearly always low.** **Write it on the board and leave it there until 4.7**, **because 4.7 is the lesson that number is asking for.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**The ladder is not in row one, it is by the gate. The big roll is not on shelf one, it stands behind the door. Both for good reasons.**',
]));

out.push(pb());
// ===================== 4.4 =====================
out.push(h2('4.4  It is not there. It is gone.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Listen for how much of the Arabic is about the speaker rather than the shelf.** **_I cannot find it_ in any language is a sentence about the man looking.** **The class should hear itself doing that first.**'));
out.push(p('**b**  **The second line tells the supervisor more.** ⚠ **Ask what he can DO with each.** **With the first, nothing. With the second, he knows which shelf to look at and that somebody already looked.** **Same test as 3.6.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — four cartons.   **b**  **1** Nothing — a clean square, no dust.  **2** He asks the counter.'));
out.push(p('⚠ **The dust is the finding and it is the best moment in the unit.** _Is there dust? — No dust. A clean square. — Then they went today. Dust takes a week._ **Nobody in this dialogue knows where the cartons are, and between them they have worked out WHEN they went.** **From dust.**'));
out.push(p('⚠ **And the last line, which is about how a workplace actually behaves:** _four cartons going out of the front door is normal and nobody tells me_. **Abu Yasser asks the counter before he asks the men because the innocent explanation is the likely one.** **Say that out loud.** **It is the opposite of what most learners expect a supervisor to do.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Row three, shelf two. The four cartons are not there.'],
  ['B', 'Not there, or gone?'],
  ['A', 'The space is empty. There is nothing in it.'],
  ['B', 'Is there dust?'],
  ['A', 'No dust. A clean square.'],
  ['B', 'Then they went today.'],
]));
out.push(note("Card 2 inverts the dust — thick dust, a dirty square, a long time ago — and the pairs should run both cards so that the deduction goes in both directions. A learner who has only ever said no dust has learned a phrase; a learner who has said both has learned what dust is for."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Today, or a long time ago?** ⚠ **The dust is the answer and nothing else in the exchange gives it.** **Listeners who answer from the card numbers have guessed** — **ask them which word told them.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — two things that went missing', [
  '**The thing:** six packets   **What I saw:** an empty space, thick dust   **When:** a long time ago   **Who I told:** Abu Yasser',
  '**The thing:** the spare key   **What I saw:** an empty hook, the door open   **When:** this morning   **Who I told:** the gate man first',
]));
out.push(note("Column two is the only one that matters and it is the one that will be filled in with nothing. A learner who writes I could not find it in the what-I-saw column has written about themselves in a box marked for the shelf, and that is worth one sentence of feedback and no more."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _The six packets were not there. I saw an empty space and thick dust. I told Abu Yasser._'));
out.push(p('⚠ **Count the reports that said WHAT THEY SAW.** **That is the useful half and the number will be low first time.** **Put it on the board.** **A report with a fact in it is worth three without.**'));
out.push(p('**Board clinic:** four reports, two of which say _I cannot find it_ and nothing else. ⚠ **Ask the class to add one fact to each.** **Adding is the exercise, not correcting.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Four cartons of labels.  **2** An empty space, a clean square, no dust.  **3** Abu Yasser, at 7.45.'));
out.push(p('⚠ **Question 2 wants all THREE facts.** **One is not an answer.** **The learner who writes _an empty space_ has read the first phrase and stopped** — **and the three facts together are what let somebody else work out the day.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (27 words)', [
  '**MISSING — 18 MARCH, 8.10**',
  '**What:** six packets of labels.',
  '**Where it should be:** row 2, shelf 4.',
  '**What I saw:** an empty space. Thick dust. A dirty square.',
  '**Who I told:** Samih, 8.15. He is asking the counter.',
  '**S.Q.**',
]));
out.push(p('**What to credit.** **What you SAW, in facts.** **An address, not a wave.** ⚠ **And TWO times** — **when you saw it and when you told somebody.** **If the packets come back at nine, those two times are what prove you did your job at eight.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "What I saw: nothing". ⚠ **Was there dust? Was the square clean?**',
  '**(pointing)** at the top. **(reading)** "MISSING — 18 March". ⚠ **What time?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their _what I saw_ line and the class counts the facts in it.** **A number, out loud.** **Three is good, one is a start, nought is a sentence about the writer.**'));
out.push(stage('7', 'Write freely – sample (33 words)'));
out.push(sample('Sample answer', [
  '**In January six packets went from row two. I saw thick dust in the space, so they went weeks before. I told Samih at eight. They were at the counter all the time.**',
]));
out.push(p('⚠ **The last sentence is the one to look for and it is the commonest true ending.** **The thing was never missing; nobody wrote down that it had moved.** **Third time in four units.** **The class is being taught one idea from four directions and 4.7 is the fourth.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Did it come back?_ — **_It was never gone. It was at the counter._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: in how many did the thing come back the same day?** **And the better follow-up: in how many was the thing never actually missing?** **Ask the second question too.** **It is the one with the finding in it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (23 words)', [
  '**MISSING — my house keys. Where they should be: on the hook by the door. What I saw: an empty hook. When: this morning. Who I told: my wife.**',
]));

out.push(pb());
// ===================== 4.5 =====================
out.push(h2('4.5  Straight on, then left at the bench'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Three orders and no more.** **A learner who gives seven has not understood that a direction is short.** **Make the partner actually walk it** — **the walking is the correction.**'));
out.push(p('**b**  Open. ⚠ **Hands up, physically.** **Left and right are the two words in this book that have to be in the body and not in the head**, **and a learner who has to think about which hand will give a driver the wrong turn under pressure.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A — one.   **b**  **1** The loading door — the big grey door.  **2** Use the other door, which is the office stairs.'));
out.push(p('⚠ **The marked line is Ammar\'s last one:** _Say it back like that every time. You got it right._ **The driver repeated the whole route in one sentence and was told so.** **That is the check, and it is the same read-back that Unit 2.5 taught for numbers.** **Point back at it.**'));
out.push(p('⚠ **And _the LONG bench, not the short one_.** **A yard has two of most things and the man being directed has seen neither.** **Four extra words, one fewer lorry in the wrong place.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'The loading door. Where is it?'],
  ['B', 'From the gate, go straight on. Past the small store.'],
  ['A', 'Straight on. Past the small store.'],
  ['B', 'Then turn left at the long bench.'],
  ['A', 'Left at the long bench.'],
  ['B', 'It is on your left. Do not use the other door.'],
]));
out.push(note("Every second line is a read-back and that is deliberate: the person being directed says each step before the next one arrives. Run it with the pairs standing back to back so that neither can point. Pointing is what this cycle is replacing and a drill that allows it teaches nothing."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **Draw the way.** ⚠ **Then show the drawing to the speakers, not to the teacher.** **The speakers find out whether their direction worked**, **which is the only feedback that changes how somebody gives directions.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — from the gate to where I stand', [
  '**1** From the gate, go straight on, past the weighbridge.',
  '**2** Turn right at the green door. _(Not the grey one — that is the office.)_',
  '**3** I am at the second counter, on the left.',
  '**Do not** walk across the yard where the lorries turn. Use the painted line.',
]));
out.push(note("The Do not line is the one the stage is really for and it is the one learners leave blank, because they are thinking about the route rather than about the person walking it. Ask the question directly: what could the person you are directing do that would hurt them? Every workplace has an answer and most learners have never been asked for it."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _Go straight on past the weighbridge. Turn right at the green door. I am on your left. Do not walk where the lorries turn._'));
out.push(p('⚠ **Four parts and the fourth is the marked one.** **The last thing you say is the thing remembered, and in a yard the dangerous door matters more than the right one.**'));
out.push(p('**Board clinic:** four directions, two with no landmark. ⚠ **Ask the class what _turn left after a bit_ means.** **It means nothing, and saying so out loud is the whole clinic.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Three.  **2** The long bench — not the short one by the wall.  **3** Say it back to the gate man.'));
out.push(p('⚠ **Question 3 is the one most learners miss**, **because the last line is an instruction to the READER rather than part of the route.** **It is also the only line that checks whether the other four worked.** **Point at it twice.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (29 words)', [
  '**FOR DRIVERS — THE WEIGHBRIDGE**',
  '**1** From the gate, go straight on. Past the small store.',
  '**2** Turn right at the water tank. _(Not the first tank — the big one.)_',
  '**3** The weighbridge is on your right. The yellow lines.',
  '⚠ **DO NOT drive on the yellow lines with a full lorry. Empty only.**',
  '**Say it back to the gate man before you drive. S.Q.**',
]));
out.push(p('**What to credit.** **Three numbered orders.** **A landmark in each, and WHICH one.** ⚠ **The warning in a line of its own, in big letters** — **a warning inside order 2 is a warning nobody reads.** **And a last line telling the reader to do something.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Turn left at the bench". ⚠ **Which bench? There are two.**',
  '**(pointing)** at the end. **(reading)** nothing. ⚠ **What must the driver DO? Say it back? Sign?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their paper and a THIRD walks it across the room.** **The class says whether they arrived.** **It is the only stage in the book where the test of a piece of writing is somebody\'s feet**, **and it is worth the three minutes it costs.**'));
out.push(stage('7', 'Write freely – sample (34 words)'));
out.push(sample('Sample answer', [
  '**From our gate, drivers go straight on and turn right at the water tank. They always turn at the first tank, which is wrong, so we painted a number on the big one. Do not reverse past the office.**',
]));
out.push(p('⚠ **The question _which turn do people get wrong_ produces the best writing in the cycle**, **because every yard has one and the learner knows it.** **A paper that names the wrong turn AND what was done about it is a paper about problem-solving, in English, at A1.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Has anybody ever got it wrong?_ — **_Many times. One lorry hit the office wall._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many name a door or a way that nobody should use?** **Every yard has one.** **A class where only two papers name it has learners who have not been told**, **and that is a thing to say to them plainly.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (26 words)', [
  '**From the gate go straight on. Turn left at the water tank, the big one. The office door is on your right, up four steps. Do not take the lorry ramp.**',
]));

out.push(pb());
// ===================== 4.6 =====================
out.push(h2('4.6  I can reach it. I cannot reach that one.'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Standing up, arms out, pointing at real shelves.** **_I can reach_ and _I cannot reach_ are about the body**, **and a class that has stretched for a shelf says the sentence differently afterwards.**'));
out.push(p('**b**  Open. ⚠ **This is the sound drill arriving before the box, on purpose.** **_I can reach HERE_ with _can_ quiet; _I CANNOT reach there_ with _cannot_ loud.** **Say both and let the class hear which one carries.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C — no, he asks for help, and in the end puts them lower.   **b**  **1** Shelf three.  **2** In the yard — not next to the bench, where it should be.'));
out.push(p('⚠ **Samih\'s last line is the one the class will remember for the rest of the course:** _A man on a carton is a man in hospital._ **Nine words.** **Put it on the board and leave it there.**'));
out.push(p('⚠ **And Ammar\'s solution, which is the point of the cycle:** _I can put them on shelf three and move them later._ **He did not do the job as told and he did not refuse it.** **He did a safe version and said he would finish it.** ⚠ **Then: _I tell you. And I write it on the sheet._** **That sentence is 4.7 and 3.7 both.**'));
out.push(stage('3', 'Practise – sample with card 1'));
out.push(dlg(null, [
  ['A', 'Put the packets on shelf four.'],
  ['B', 'I can reach shelf three. I cannot reach shelf four.'],
  ['A', 'The ladder is next to the bench.'],
  ['B', 'The ladder is not next to the bench. It is in the yard.'],
  ['A', 'Then do not stand on a carton. Wait for the ladder.'],
  ['B', 'I can put them on shelf three and move them later.'],
]));
out.push(note("The last line is the only one worth drilling hard. Saying I cannot is easy and saying nothing is easier; offering the safe half of the job is the thing that makes a storeman useful rather than difficult, and it is a sentence pattern — I can do X and do Y later — that will work in every unit from here on."));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** **What did the speaker say they would do INSTEAD?** ⚠ **One thing.** **A pair that ended on _I cannot reach shelf four_ has stopped halfway**, **and the listeners will say so, which is better than the teacher saying it.**'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(sample('Sample — three I can, three I cannot', [
  '**I can…** count a shelf  ·  read a delivery note  ·  drive the small van',
  '**I cannot…** reach shelf four  ·  lift a full pallet alone  ·  open the safe',
]));
out.push(note("The I cannot column is the one that matters and it is the one learners resist, because in most of their working lives saying I cannot has cost them something. Say the opposite out loud: a man who says I cannot reach shelf four is a man who has not fallen off a carton. The cycle only works if the room believes that."));
out.push(stage('4R', 'Report – sample'));
out.push(p('**Report (sample):**  _I can count a shelf. I cannot lift a full pallet alone. So I ask Samih and we do it together._'));
out.push(p('⚠ **The mistake to expect, and it comes straight out of Unit 3.4:** ***he cans***, ***I can to reach***. **_can_ takes no -s and the verb after it is bare.** **It is the one verb in Book 1 that refuses the rule the class just learned** — **praise the rule, then make the exception.**'));
out.push(p('**Then the count:** how many said _I cannot_ **and** what they do instead? ⚠ **Both halves.** **The number is the assessment for this cycle and it is more useful than any mark.**'));
out.push(p('**Board clinic:** four lines, two with _he cans_ or _I can to reach_. ⚠ **Do this one slowly.** **It is a correction that will have to be made again in Unit 7 and in Unit 10.**'));
out.push(stage('5', 'Read'));
out.push(p('**1** Next to the long bench.  **2** Two — one up, one holding.  **3** Put the thing on shelf 3 and tell the supervisor.'));
out.push(p('⚠ **Question 3 is the question the whole paper exists for.** **A rule with no answer for _what if it is not here_ is a rule that gets broken by a man doing his job** — **and a learner who can find that line has understood what a safety paper is.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (31 words)', [
  '**THE PALLET TRUCK — WHO, WHERE, WHEN**',
  '**Where it lives:** by the loading door, against the wall. ⚠ **Put it back there.**',
  '**Who can use it:** anybody who has been shown. ⚠ **Ask Samih to show you.**',
  '**Full pallets:** you need the truck. **No exceptions. Nobody drags a full pallet.**',
  '**If the truck is not here:** take half the boxes off and carry them, or wait.',
  '⚠ **DO NOT drag a full pallet. Two men did their backs that way last year.**',
]));
out.push(p('**What to credit.** **Where it lives · who can use it · when you need it · what to do when it is not there · the warning.** ⚠ **The fourth line is the one that makes the paper work**, **and the warning should say what will HAPPEN** — **_two men did their backs_ is remembered; _it is dangerous_ is not.**'));
out.push(stage('6P', 'Check together – sample'));
out.push(sample('Sample — what a learner actually says', [
  '**(pointing)** Here. **(reading)** "Do not drag a full pallet". ⚠ **Why? What happens?**',
  '**(pointing)** Here. **(reading)** nothing about this. ⚠ **What do I do if the truck is not here?**',
]));
out.push(stage('6R', 'Share'));
out.push(p('⚠ **Two learners read their warning and the class says which one they would remember.** **The answer is always the one with a consequence in it.** **Name that out loud** — **it is a writing rule the class can use for the rest of their lives.**'));
out.push(stage('7', 'Write freely – sample (32 words)'));
out.push(sample('Sample answer', [
  '**I cannot lift a full pallet alone. I need the pallet truck or a second man. When the truck is broken the men drag the pallets, and that is how two backs went.**',
]));
out.push(p('⚠ **The third sentence is the one to look for:** **what people do INSTEAD when the right thing is not available.** **Every workplace has an unsafe workaround and every learner knows theirs.** **Writing it down in English is the most valuable thing this cycle does.**'));
out.push(stage('7P', 'Respond – sample'));
out.push(p('**Sample slip:**  _Has anybody been hurt doing that?_ — **_Two men. One was off for a month._**'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Three papers, then the count: how many describe something people do that is not safe?** **The number will be high and it should be said plainly and without drama.** ⚠ **Do not turn this into a safety lecture.** **The class has written the problem down in English, which is what they came for** — **the lecture would undo it.**'));
out.push(stage('HW', 'Homework – sample'));
out.push(sample('Sample answer (24 words)', [
  '**Shelf four — I ask Samih. A full pallet — I ask anybody, two men. The safe — I cannot, and nobody in the store can. Only the office.**',
]));

out.push(pb());
// ===================== 4.7 =====================
out.push(h2('4.7  Review: the shelf map'));
out.push(stage('1', 'Get ready – Unit 4 quiz'));
out.push(table(['', 'The answer'], [
  ['**4.1**', '_In my pocket. On the table. Under the book._ ⚠ **Three DIFFERENT small words.**'],
  ['**4.2**', '_Row 3, shelf 2_ → _the third row, the second shelf up, from the door._'],
  ['**4.3**', '_Where is the ladder? · Where are the four rolls?_ ⚠ **One _is_, one _are_.**'],
  ['**4.4**', '_The space is empty. No dust. A clean square._ ⚠ **What you SAW.**'],
  ['**4.5**', '_Go straight on. Turn left at the long bench. The door is on your left._'],
  ['**4.6**', '_I can reach shelf three. I cannot reach shelf four._'],
], [1, 6]));
out.push(p('⚠ **Tick, do not mark.** **4.6 is the only one where the form matters** — **_he cans_ gets heard once and then ticked.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B — he puts things where they fit, not where the map says.   **b**  **1** It does not say, but he has been there long enough that Abu Yasser trusts his judgement.  **2** A long roll bends on shelf one, and a bent roll is rubbish.'));
out.push(p('⚠ **Nobody in this dialogue is wrong.** **Fouad was right eleven times out of eleven. A bent roll IS rubbish. Abu Yasser has thrown them away for nine years.** **And a man went to row two on Tuesday and came back with nothing.** **Four true things.**'));
out.push(p('⚠ **The resolution is in the last line and it is the hardest sentence in Book 1:** _Samih knows. Fouad knows. I know. The map does not._ **Three men knowing a thing is not the same as the thing being written down.**'));
out.push(stage('3', 'Practise'));
out.push(p('**The two sides, and both are true.** ⚠ **Do not let a learner play Nour as somebody who cares about paper.** **She sent a man to an empty shelf and he came back with nothing, and she is the one who will be asked why.** ⚠ **And do not let anybody play Fouad as careless.** **He is the most careful man in the yard; that is the problem.**'));
out.push(stage('3R', 'Perform'));
out.push(p('**Listener task.** ⚠ **The answer is _both_.** **If the class says _Fouad_, ask who the man on Tuesday should have asked.** **If the class says _Nour_, ask her to explain a store full of bent rolls.** **Neither question has an answer, which is the point.**'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample('Sample — somebody who does it better than the paper says', [
  '**What they do:** Abu Khalil stacks the heavy cartons on the bottom shelf, not where the plan says.   **Why it is better:** nobody lifts them above the waist.   **When they are away:** the new men follow the plan and somebody\'s back goes.',
  '**What they do:** Rima keeps the Tuesday invoices in a separate folder.   **Why it is better:** Tuesday is the audit day and they are always wanted together.   **When they are away:** nobody can find them, because the folder is not on any list.',
]));
out.push(note("The third column is where the cycle lives and it is the one learners fill in last. Both samples end the same way: the good practice is invisible, so it fails exactly when the person who invented it is not in the building. That is the same shape as Abu Raed's gate book in 1.7, Hani's swaps in 3.7 and Fouad's rolls here — four units, one idea, approached from four sides."));
out.push(stage('4R', 'Mediate and report'));
out.push(p('**The three positions, in full.**'));
out.push(table(['', 'Right about', 'Gives up'], [
  ['**Fouad**', '⚠ **a long roll bends on shelf one and a bent roll is rubbish — eleven times he has stopped good stock going in the bin, unasked**', '**nothing about the decisions.** ⚠ **He keeps deciding. He is the one who knows.**'],
  ['**Nour**', '⚠ **the map is the only thing that works when Fouad is at lunch — she sent a man to row two and he came back with nothing**', '**the simple answer, which was to make Fouad stop moving things and follow the map**'],
  ['**Abu Yasser**', '**he has thrown away bent rolls for nine years, so he knows Fouad is right**', '⚠ **the comfortable position of letting three men who know carry the yard in their heads**'],
], [1.4, 4, 4]));
out.push(p('**Report (sample):**  _Fouad is right because a bent roll is rubbish and he has saved eleven of them. Nour is right because a man went to row two on Tuesday and came back with nothing. So Fouad keeps deciding and the map follows him — same day, new line written, old line crossed with a pencil line so the next man can see it moved._'));
out.push(p('⚠ **The pencil line, not a rub-out, is the detail worth marking.** **A crossed-out line tells the next man the thing MOVED and roughly when.** **A clean map tells him the thing was always there, which is how a store loses its own history.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'B', 'C', 'B', 'B']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(p('⚠ **Question 3 is this unit\'s own lesson as an exam item:** _MOVED SOMETHING? WRITE IT ON THE MAP TODAY_ **→** _change the map the same day_. **A learner who has done 4.7 answers it without reading the options.**'));
out.push(p('⚠ **Tell the class what this task is.** **A2 Key Reading Part 1, which they will sit at the end of the NEXT course** — **same five notices, same three choices, one step up.** **Say it out loud; seeing the real shape a year early is worth the thirty seconds.**'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample('Sample answer (30 words, four sentences)', [
  '**To:** Abu Yasser',
  '**I moved the long rolls. They stand behind the door now, not on row two shelf one. They bend on the shelf and a bent roll is rubbish. Please change the map today.**',
]));
out.push(table(['Marks', 'For'], [
  ['**1**', '**what was moved**'],
  ['**1**', '**where it is now — with an address or a landmark**'],
  ['**1**', '⚠ **where it WAS, so the reader can find the old line**'],
  ['**1**', '⚠ **the reason, in one short sentence**'],
  ['**1**', '⚠ **the ask in the LAST sentence**'],
], [1, 5]));
out.push(stage('6P', 'Check together'));
out.push(p('⚠ **Count the sentences out loud, with fingers.** **Four.** **The commonest fault is three sentences and a very long third one**, **and the learner cannot see it until somebody counts.** **Third unit running.**'));
out.push(stage('7', 'Write freely – exam practice'));
out.push(p('⚠ **Four sentences, about thirty words, and the last one must be the thing the reader must DO.** **Here that is _change the map_, and it is the one sentence that separates this message from a note about where a roll is.** **Mark it hardest.**'));
out.push(sample('Sample answer (29 words, four sentences)', [
  '**Abu Yasser, I moved the long ladder. It is on the wall by the gate now, not row one shelf one. It stuck out into the walkway. Please change the map.**',
]));
out.push(stage('✓', 'Marking the unit check'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'b', 'b', 'a', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(box('Marking the unit check', [
  '**A  Words — 8 marks**, one each. ⚠ **Questions 7 and 8 are the _can_ pair and they are the ones that matter:** _I **cannot** reach shelf four_ **and** _he **can** drive_. **Option (a) in question 8 is _cans_ and it will be chosen by the learners who did best in Unit 3.** **Mark it wrong and then say why they chose it.** ⚠ **Question 4 is _Where **are** the four rolls_** — **the plural _are_, which the -s on _rolls_ gives away.**',
  '**B  Listening — 6 marks**, one each. **Row two (1) · shelf three (1) · from the door (1) · six packets (1) · an empty space with thick dust, accept either half (1) · Abu Yasser (1).** ⚠ **Item 3 is the one half the class will miss** — **_from the door, always_ goes past quickly and it is the half of an address that cannot be guessed.**',
  '**C  Reading — 3 marks:** **labels (1) · row 2, shelves 1 and 2 — BOTH needed (1) · row 4 (1).** ⚠ **The second mark is all-or-nothing on purpose.** **Reading for the first match is the habit this book exists to break.**',
  '**D  Writing — 8 marks:** **four sentences (2) · what was moved (1) · where it is now (1) · where it was (1) · the reason (1) · the ask last (1) · about thirty words (1).**',
  '**Total 25.** ⚠ **The profile to expect: A split on 7 and 8, B split on item 3, C split on the second mark, D better again than Unit 3.** ⚠ **If D has gone up for the third unit running, say so when you hand it back and say why:** **the class has now counted sentences three times, and counting is a skill rather than an ability.**',
], C.lteal, C.navy));
out.push(note("Teacher's note. Five things. First, the sentence this unit replaces. Over there is not a place; row three, shelf two, behind the blue boxes is. Put that on the board on the first morning and point at it whenever somebody waves a hand for the rest of the unit. Second, shelf 1 is the bottom here and in most stores and not in all of them, and the book says so. Do not teach it as a fact about English. Teach it as a thing to ask on your first day — everybody asks, says Samih in 4.2, and that line is permission for a learner who would otherwise guess. Third, can in 4.6, which is the one verb in Book 1 that refuses the -s the class learned in 3.4. Expect he cans from the learners who did best last unit. That error is evidence Unit 3 worked and they should be told so before they are corrected; it will need correcting again in Unit 7 and in Unit 10, so do not spend the whole clinic on it now. Fourth, the dust in 4.4. Three men who cannot find four cartons work out from the absence of dust that they went today, and that exchange is the best thing in the unit. It is also the pattern for everything the book asks of a storeman: say what you saw, not what you think, and let the people with more information do the thinking. Say it in Arabic once. Fifth, 4.7, which is the fourth time in four units that a perfectly good arrangement has turned out to be invisible — Abu Raed's gate book, Hani's eleven swaps, the roll behind the door, and now Fouad's eleven good decisions. The class should notice the pattern by now, and if nobody does, point at the four of them together. Fouad was right eleven times out of eleven and a man still came back from row two with nothing. The resolution is that the map follows the man who knows, written the same day, with a pencil line through the old entry rather than a rub-out, so the next man can see the thing moved and roughly when. A clean map is a store with no memory."));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 4 · Answer Key');
module.exports = out;
