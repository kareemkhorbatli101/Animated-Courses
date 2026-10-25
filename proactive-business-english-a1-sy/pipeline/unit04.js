// Proactive Business English A1 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'in · on · under · behind · next to · between · row · shelf · top shelf · bottom shelf · first · second · third · where · ladder · to reach · to put back · gone · left · right · straight on · loading door';
const AHEAD_AT_A2 = 'shelf · ladder · loading door';

out.push(h1('Unit 4  Where Things Are'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  say where a thing is — in, on, under, behind, next to',
  '**4.2**  say the row and the shelf',
  '**4.3**  ask where something is',
  '**4.4**  say it is not there',
  '**4.5**  tell somebody how to walk to a place in the yard',
  '**4.6**  say what you can and cannot reach',
  '**4.7**  Review: the shelf map — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Fouad Tarabishi** (41) — the yard man. Eleven years here, longer than anybody but Abu Raed. **He knows where everything is and he has moved about half of it.** You meet him in **4.7**.',
], C.grey, C.navy));
out.push(sp());
out.push(box('⚠ A place is an address, not a wave of the hand', [
  '**_Over there_ is not a place.** ⚠ **_Row 3, shelf 2_ is a place.**',
  '⚠ **This unit turns a hand into six words.** **A man who can say _row three, shelf two, behind the blue boxes_ has told you something you can walk to.** **A man who points has told you to look.**',
], C.lyellow, C.orange));

// ======================= CYCLE 4.1 =======================
out.push(pb());
out.push(h2('4.1  In the box, on the shelf, under the bench'));
out.push(p('**You can:** say where a thing is   ·   **Grammar:** _in · on · under · behind · next to_   ·   **Sound:** the small words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put your pen **in** your book. **on** your book. **under** your book. Say what you are doing.'));
out.push(p('**b**  Where is your bag? **Say it** with one of the five words.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is the small box?   **A** on the shelf   **B** under the bench   **C** behind the door'));
out.push(p('**b**  Listen again.   **1** What is next to the bench?   **2** Where does Ammar look first?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.1  Under the bench', [
  ['Abu Yasser', 'Ammar. The small box of labels. Where is it?'],
  ['Ammar', 'On the shelf?'],
  ['Abu Yasser', 'Not on the shelf. I looked.'],
  ['Ammar', 'In the big box?'],
  ['Abu Yasser', 'Not in the big box. Look under the bench.'],
  ['Ammar', 'Under the bench. Yes. Here it is.'],
  ['Abu Yasser', 'Next to the bench there is a ladder. Put the box on the top shelf.'],
  ['Ammar', 'On the top shelf. Behind the paper?'],
  ['Abu Yasser', 'Not behind the paper. In front of it. So the next man can see it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The five small words**',
  table(['Word', 'It means', 'At work'], [
    ['**in**', 'inside', '**in** the box · **in** the store'],
    ['**on**', 'on top of', '**on** the shelf · **on** the table'],
    ['**under**', 'below', '**under** the bench · **under** the pallet'],
    ['**behind**', 'at the back of', '**behind** the door · **behind** the paper'],
    ['**next to**', 'beside', '**next to** the bench · **next to** the gate'],
  ], [1.1, 1.3, 2.6]),
  '⚠ **The word comes BEFORE the thing:** **on** the shelf. **Not** ~~the shelf on~~.',
  '⚠ **_in_ and _on_ are the two that get swapped, and the difference is money.** **_in_ the box is inside it; _on_ the box is on the lid where it will fall off.**',
  '**Practise:** Write the word.',
  '1 The labels are ______ the small box.   2 The box is ______ the bench.   3 The ladder is ______ the bench.   4 Put the paper ______ the top shelf.',
  '**Useful words:**  in the box  ·  on the shelf  ·  under the bench  ·  behind the door  ·  next to the gate',
  '**Sound — the small words.** 🔊 **Track 4.2** Listen. Say it. **The small word is QUIET and the thing is LOUD:** _on the SHELF · under the BENCH._ Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________. Where is it?'],
  ['B', '__________ the __________?'],
  ['A', 'No. I looked.'],
  ['B', '__________ the __________?'],
  ['A', 'Look __________ the __________.'],
  ['B', 'Yes. Here it is.'],
]));
out.push(table(['Card 1', 'Card 2'], [['box of labels · on the shelf · in the big box · under the bench', 'count sheet · on the table · behind the door · in the drawer']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the three places the speakers looked. Three places.'));
out.push(PHRASE_CARD(['in the box', 'on the shelf', 'under the bench', 'behind the door', 'next to the gate']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say where five things are at your work. **Write it.**'));
out.push(table(['The thing', 'Where it is'], [['', ''], ['', ''], ['', ''], ['', ''], ['', '']], [1.4, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is ______ the ______._'));
out.push(p('**Listener task:** which small word did most people use? Count them.'));
out.push(p('**Board clinic:** your teacher writes five places. Two use _in_ for _on_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note on the small store door. Then answer.'));
out.push(box(null, [
  '**SMALL STORE — WHERE THINGS ARE**',
  '**Labels** — in the small box, on the top shelf',
  '**Count sheets** — on the table, next to the window',
  '**Ladder** — next to the bench',
  '**Spare key** — behind the door, on the hook',
  '⚠ **Put it back where this paper says. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where are the labels?'));
out.push(item('2', 'What is behind the door?'));
out.push(item('3', 'How many places have TWO small words?'));
out.push(box('Writer\'s box', [
  '**A where-things-are note has one line for each thing:** the thing → the small word → the place.',
  '⚠ **Two small words are better than one.** _In the small box, **on the top shelf**._ **One word tells you the container; two tell you where the container is.**',
  '⚠ **End with the line that makes the note work:** _put it back where this paper says_. **A note that only tells you where to FIND a thing is out of date the first time somebody moves it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a where-things-are note for your own work (**15 words or more**).'));
out.push(p('**______________ — WHERE THINGS ARE**   **______________** — ______________   **______________** — ______________   **______________** — ______________   **______________** — ______________   **Put it back where this paper says. ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A small word on every line', ''],
  ['Two small words on at least two lines', ''],
  ['The place at the top', ''],
  ['The _put it back_ line at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says if they could find the thing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about where you keep four things at work (**20 to 35 words**). Which one is hardest to find? Why?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who else knows where that is?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many things does only one person know the place of? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** where six things are at your work, with two small words each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.2 =======================
out.push(pb());
out.push(h2('4.2  Row three, shelf two'));
out.push(p('**You can:** say the row and the shelf   ·   **Grammar:** _row 3 · shelf 2 · the first · the second_   ·   **Sound:** the number after the word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Count the rows in this room. Say _the first row, the second row, the third row._'));
out.push(p('**b**  Which shelf in your store is the hardest to reach? **Say it** with a number.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which row are the cartons in?   **A** row 1   **B** row 3   **C** row 7'));
out.push(p('**b**  Listen again.   **1** How many shelves in a row?   **2** Which shelf is number 1?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.3  Shelf one is the bottom', [
  ['Samih', 'Ammar. The cartons from Monday. Row three, shelf two.'],
  ['Ammar', 'Row three. Which one is row three?'],
  ['Samih', 'From the door. One, two, three. The third row.'],
  ['Ammar', 'And shelf two?'],
  ['Samih', 'Four shelves in a row. Shelf one is the bottom.'],
  ['Ammar', 'The bottom? Not the top?'],
  ['Samih', 'The bottom. Shelf one is the bottom, shelf four is the top. Everybody asks.'],
  ['Ammar', 'Row three, shelf two. The second one up.'],
  ['Samih', 'The second one up. Write it on the sheet like that.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Rows, shelves and the numbers**',
  table(['How this yard is addressed', 'What it means'], [
    ['**row 3**', 'the third row, counted **from the door**'],
    ['**shelf 2**', 'the second shelf, counted **from the bottom**'],
    ['**the top shelf**', 'shelf 4 — the highest'],
    ['**the bottom shelf**', 'shelf 1 — the lowest'],
  ], [1.6, 3.4]),
  '**first · second · third · fourth** — _the **first** row · the **second** shelf · the **third** row._',
  '⚠ **The number goes AFTER the word on a label and BEFORE it in a sentence.** **The label says _row 3_. You say _the third row_.** **Both are right. Learn both.**',
  '⚠ **Shelf 1 is the BOTTOM in this book and in most stores — and not in all of them.** **Ask on your first day. Do not guess.** **A man who guesses puts the heavy cartons where the light ones go.**',
  '**Practise:** Write the number or the word.',
  '1 row 3 = the ______ row   2 the second shelf = shelf ______   3 shelf 4 = the ______ shelf   4 the first row = row ______',
  '**Say it. Write it. Check it** — read the address back to the man who gave it to you, every time, before you walk away.',
  '**Useful words:**  row 3  ·  shelf 2  ·  the top shelf  ·  the bottom shelf  ·  from the door',
  '**Sound — the number after the word.** 🔊 **Track 4.4** Listen. Say it. _ROW three. SHELF two._ **Both loud, with a stop between.** **It is read out across a store, so it is said slowly.** Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One gives an address. One says it back. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________. Row __________, shelf __________.'],
  ['B', 'Row __________. Which one is row __________?'],
  ['A', 'From the __________. One, two, three.'],
  ['B', 'And shelf __________?'],
  ['A', 'Shelf one is the __________.'],
  ['B', 'Row __________, shelf __________. The __________ one up.'],
]));
out.push(table(['Card 1', 'Card 2'], [['cartons · row 3 · shelf 2 · from the door · bottom', 'rolls · row 1 · shelf 4 · from the gate · bottom']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the address. Row and shelf. Two numbers.'));
out.push(PHRASE_CARD(['row 3', 'shelf 2', 'the top shelf', 'the bottom shelf', 'from the door']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw your own store in the box. Put four things in it with an address. **Write it.**'));
out.push(table(['The thing', 'Row', 'Shelf'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2.6, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is in row ______, shelf ______. That is the ______ row from the ______._'));
out.push(p('**Listener task:** is shelf 1 the top or the bottom in your partner\'s store? **Ask. Do not guess.**'));
out.push(p('**Board clinic:** your teacher writes four addresses. Two count the rows from the wrong end. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the shelf list. Then answer.'));
out.push(box(null, [
  '**BACK STORE — ROWS 1 TO 4**',
  table(['', 'Shelf 1 (bottom)', 'Shelf 2', 'Shelf 3', 'Shelf 4 (top)'], [
    ['**Row 1**', 'pallets', 'cartons', 'cartons', 'empty'],
    ['**Row 2**', 'rolls', 'rolls', 'packets', 'packets'],
    ['**Row 3**', 'cartons', 'cartons', 'labels', 'empty'],
    ['**Row 4**', 'pallets', 'empty', 'empty', 'empty'],
  ], [1, 1.5, 1.1, 1.1, 1.3]),
], 'FFFFFF', C.navy));
out.push(item('1', 'What is in row 3, shelf 3?'));
out.push(item('2', 'Which row has the most empty shelves?'));
out.push(item('3', 'Where are the rolls?'));
out.push(box('Writer\'s box', [
  '**A shelf list is a table, and a table is read in two directions:** the row across, and the shelf down.',
  '⚠ **Write _(bottom)_ and _(top)_ in the heading.** **Without them the table is a set of numbers and the reader has to ask somebody.** **Four words save a question.**',
  '⚠ **Write _empty_ in an empty shelf.** **A blank square means nobody looked; _empty_ means somebody did.** **Same rule as the week board in 3.1, and it is the same reason.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shelf list for your own store (**15 words or more**). Use a table with the row down the side and the shelf across the top.'));
out.push(table(['', 'Shelf 1 (bottom)', 'Shelf 2', 'Shelf 3', 'Shelf 4 (top)'], [
  ['**Row 1**', '', '', '', ''],
  ['**Row 2**', '', '', '', ''],
  ['**Row 3**', '', '', '', ''],
], [1, 1.5, 1.1, 1.1, 1.3]));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_(bottom)_ and _(top)_ in the heading', ''],
  ['_empty_ written in the empty squares', ''],
  ['A number on every row', ''],
  ['The place at the top', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students give one address. The class finds it in the other student\'s table.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your store (**20 to 35 words**). How many rows? How many shelves? Which shelf is the heavy one? Which is empty?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Which shelf do you use most?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. Is the heavy shelf the bottom one in every store? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the address of six things at your work (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.3 =======================
out.push(pb());
out.push(h2('4.3  Where is the big roll?'));
out.push(p('**You can:** ask where something is   ·   **Grammar:** _Where is…? · Where are…?_   ·   **Sound:** the question that goes down'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner where three things in this room are.'));
out.push(p('**b**  Read the two questions. Which is correct? _Where is the rolls? · Where are the rolls?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Do they find the roll?   **A** yes   **B** no   **C** yes, in the wrong place'));
out.push(p('**b**  Listen again.   **1** Where should the roll be?   **2** Where is it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.5  Not where it says', [
  ['Nour', 'Ammar, where is the big roll? The office needs it today.'],
  ['Ammar', 'Row two, shelf one. It says so on the paper.'],
  ['Nour', 'It is not in row two.'],
  ['Ammar', 'Where are the other rolls?'],
  ['Nour', 'Row two, shelf two. All four of them.'],
  ['Ammar', 'Then the big one is somewhere sensible. Behind the door?'],
  ['Nour', 'Behind the door. Yes. Standing up.'],
  ['Ammar', 'Standing up, because it does not go on a shelf.'],
  ['Nour', 'Somebody made a good decision and told nobody.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking where**',
  table(['One thing', 'More than one thing'], [
    ['**Where is** the roll?', '**Where are** the rolls?'],
    ['**Where is** the box?', '**Where are** the boxes?'],
    ['**Where is** the ladder?', '**Where are** the labels?'],
  ], [2, 2]),
  '⚠ **One thing: _is_. More than one: _are_.** **The same split as Unit 1.4, and the -s on the noun tells you which.**',
  '⚠ **A _where_ question goes DOWN at the end, not up.** _Where is the roll?↘_ **It is the opposite of _Can I swap Thursday?↗_ from 3.5.** **Questions that start with a question word go down.**',
  '**Practise:** Write _is_ or _are_.',
  '1 Where ______ the ladder?   2 Where ______ the count sheets?   3 Where ______ my badge?   4 Where ______ the four pallets?',
  '**Useful words:**  Where is…?  ·  Where are…?  ·  It says so on the paper.  ·  somewhere sensible  ·  standing up',
  '**Sound — the question that goes down.** 🔊 **Track 4.6** Listen. _Where IS the roll?↘_ **The loud part is _is_ and the voice falls.** Say it four times, falling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'Where is the __________?'],
  ['B', 'Row __________, shelf __________. It says so on the paper.'],
  ['A', 'It is not in row __________.'],
  ['B', 'Where are the other __________?'],
  ['A', 'Row __________, shelf __________.'],
  ['B', 'Then it is somewhere sensible. __________ the __________?'],
]));
out.push(table(['Card 1', 'Card 2'], [['big roll · row 2 · shelf 1 · rolls · behind the door', 'long ladder · row 4 · shelf 1 · ladders · next to the gate']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker use _is_ or _are_ correctly each time? Count the mistakes.'));
out.push(PHRASE_CARD(['Where is…?', 'Where are…?', 'It says so on the paper.', 'somewhere sensible', 'standing up']));
out.push(stage('4', 'Your turn', 9));
out.push(p('**Ask your partner** where four things at their work are. **Write it.**'));
out.push(table(['My question', 'Their answer'], [['Where ______ the ______?', ''], ['Where ______ the ______?', ''], ['Where ______ the ______?', ''], ['Where ______ the ______?', '']], [2.4, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked where the ______ was. It is ______._'));
out.push(p('**Listener task:** how many answers were an address with a number? How many were a wave of the hand?'));
out.push(p('**Board clinic:** your teacher writes four questions. Two use _is_ for _are_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour wrote on the paper. Then answer.'));
out.push(box(null, [
  '**ROW 2 — CORRECTION, 16 MARCH**',
  '**The paper says:** big roll — row 2, shelf 1.',
  '**It is not there.** It is behind the door, standing up.',
  '**Why:** it is too long for the shelf.',
  '**So:** the paper now says _big roll — behind the door, standing up_.',
  '**N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where does the paper say the roll is?'));
out.push(item('2', 'Where is it really?'));
out.push(item('3', 'Why is it not on the shelf?'));
out.push(box('Writer\'s box', [
  '**A correction has four lines:** what the paper says → where the thing really is → **why** → what the paper says now.',
  '⚠ **Line three is the one that stops the argument.** **_It is too long for the shelf_ turns somebody\'s mistake into somebody\'s good decision**, **and a good decision does not get undone the next morning.**',
  '⚠ **Line four is the whole point.** **A correction that does not change the paper is a complaint.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a correction for something at your own work (**15 words or more**).'));
out.push(p('**______________ — CORRECTION, ______________**   **The paper says:** ______________.   **It is not there.** It is ______________.   **Why:** ______________.   **So:** the paper now says ______________.   **______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['What the paper said', ''],
  ['Where the thing really is', ''],
  ['The _why_ line', ''],
  ['What the paper says now', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _why_ line. The class says if it is a good reason.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that is not where the paper says (**20 to 35 words**). Where is it? Why? Who moved it?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody change the paper?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the paper changed? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** two things at your work that are not where the paper says (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.4 =======================
out.push(pb());
out.push(h2('4.4  It is not there. It is gone.'));
out.push(p('**You can:** say a thing is not there   ·   **Grammar:** _there is not · it is gone_   ·   **Sound:** the flat bad news'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You cannot find a thing. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which tells the supervisor more? _I cannot find it · It is not in row two. The space is empty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is gone?   **A** one carton   **B** four cartons   **C** the whole shelf'));
out.push(p('**b**  Listen again.   **1** What is in the empty space?   **2** What does Abu Yasser do first?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.7  The space is empty', [
  ['Ammar', 'Abu Yasser. Row three, shelf two. The four cartons are not there.'],
  ['Abu Yasser', 'Not there, or gone?'],
  ['Ammar', 'The space is empty. There is nothing in it.'],
  ['Abu Yasser', 'Is there dust?'],
  ['Ammar', 'No dust. A clean square.'],
  ['Abu Yasser', 'Then they went today. Dust takes a week.'],
  ['Ammar', 'So somebody moved them this morning.'],
  ['Abu Yasser', 'Or sold them. I ask the counter first, not the men.'],
  ['Ammar', 'The counter first. Why?'],
  ['Abu Yasser', 'Because four cartons going out of the front door is normal and nobody tells me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying a thing is not there**',
  table(['You mean', 'You say'], [
    ['the space is empty', '**There is nothing** in it. · **The space is empty.**'],
    ['one thing is missing', '**It is not there.** · **It is gone.**'],
    ['more than one', '**They are not there.** · **There are no cartons.**'],
    ['you do not know where', '**I do not know where it is.**'],
  ], [1.6, 3.4]),
  '⚠ **_It is not there_ and _I cannot find it_ are not the same thing.** **_I cannot find it_ is about you. _It is not there_ is about the shelf.** **Say the one about the shelf.**',
  '⚠ **Say WHAT YOU SAW, not what you think:** _a clean square, no dust_. **Abu Yasser works out the rest from that, and he can only do it if you tell him the dust.**',
  '**Practise:** Write the line.',
  '1 One carton is missing. ______________.   2 The shelf is empty. ______________.   3 You do not know. ______________.',
  '**Useful words:**  It is not there.  ·  It is gone.  ·  The space is empty.  ·  no dust  ·  a clean square',
  '**Sound — the flat bad news.** 🔊 **Track 4.8** Listen. _The four cartons are not there.↘_ **Flat and slow. No panic in the voice.** **Bad news said calmly is listened to.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reports. One asks. Then change places.'));
out.push(dlg(null, [
  ['A', 'Row __________, shelf __________. The __________ are not there.'],
  ['B', 'Not there, or gone?'],
  ['A', 'The space is empty. There is nothing in it.'],
  ['B', 'Is there dust?'],
  ['A', '__________ dust. A __________ square.'],
  ['B', 'Then they went __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['row 3 · shelf 2 · four cartons · no dust · clean · today', 'row 1 · shelf 4 · six packets · thick dust · dirty · a long time ago']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the thing go today or a long time ago? **The dust is the answer.**'));
out.push(PHRASE_CARD(['It is not there.', 'It is gone.', 'The space is empty.', 'no dust', 'a clean square']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of two things that went missing at your work. **Write it.**'));
out.push(table(['The thing', 'What I saw', 'When it went', 'Who I told'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.8, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ was not there. I saw ______. I told ______._'));
out.push(p('**Listener task:** count the reports that said WHAT THEY SAW. **That is the useful half.**'));
out.push(p('**Board clinic:** your teacher writes four reports. Two say _I cannot find it_ and nothing else. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ammar wrote. Then answer.'));
out.push(box(null, [
  '**MISSING — 17 MARCH, 7.40**',
  '**What:** four cartons of labels.',
  '**Where it should be:** row 3, shelf 2.',
  '**What I saw:** an empty space. A clean square. No dust.',
  '**Who I told:** Abu Yasser, 7.45. He asked the counter.',
  '**A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is missing?'));
out.push(item('2', 'What did Ammar see?'));
out.push(item('3', 'Who did he tell, and when?'));
out.push(box('Writer\'s box', [
  '**A missing note has five lines:** what → where it should be → **what you SAW** → who you told → when.',
  '⚠ **Line three is the whole note.** **_An empty space, a clean square, no dust_ is three facts somebody else can use.** **_I cannot find it_ is none.**',
  '⚠ **Put the TIME on the note, twice:** **when you saw it and when you told somebody.** **If the cartons come back at nine, the two times are what prove you did your job at 7.40.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a missing note for your own work (**15 words or more**).'));
out.push(p('**MISSING — ______________, ______**   **What:** ______________.   **Where it should be:** ______________.   **What I saw:** ______________.   **Who I told:** ______________, ______.   **______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['What you SAW, not what you think', ''],
  ['Where it should be, with an address', ''],
  ['Two times — when you saw it and when you told', ''],
  ['Who you told, by name', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _what I saw_ line. The class says how many facts are in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a thing that went missing at your work (**20 to 35 words**). What did you see? Who did you tell? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did it come back?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the thing come back the same day? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** a missing note for something you cannot find at home (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.5 =======================
out.push(pb());
out.push(h2('4.5  Straight on, then left at the bench'));
out.push(p('**You can:** tell somebody how to walk to a place   ·   **Grammar:** _go · turn · take_ (orders)   ·   **Sound:** one order, one breath'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Tell your partner how to walk from the door of this room to your chair. Three orders.'));
out.push(p('**b**  Which hand is your left? Hold it up. **Say it.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many turns?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again.   **1** What is on the left at the end?   **2** What must the driver not do?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.9  From the gate to the loading door', [
  ['Driver', 'The loading door. Where is it?'],
  ['Ammar', 'From the gate, go straight on. Past the small store.'],
  ['Driver', 'Straight on. Past the small store.'],
  ['Ammar', 'Then turn left at the bench. The long bench, not the short one.'],
  ['Driver', 'Left at the long bench.'],
  ['Ammar', 'The loading door is on your left. The big grey door.'],
  ['Driver', 'And the other door?'],
  ['Ammar', 'Do not use the other door. It is the office stairs. No lorries.'],
  ['Driver', 'Straight on, left at the long bench, grey door on the left.'],
  ['Ammar', 'Say it back like that every time. You got it right.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving a direction inside the yard**',
  table(['The order', 'Example'], [
    ['**go**', '**Go** straight on. · **Go** past the small store.'],
    ['**turn**', '**Turn** left at the bench. · **Turn** right at the gate.'],
    ['**take**', '**Take** the second door. · **Take** the ladder with you.'],
    ['**do not**', '**Do not** use the other door.'],
  ], [1.2, 3.8]),
  '⚠ **An order has NO _you_ at the front:** **Go** straight on. **Not** ~~You go straight on~~. **It is shorter, and in a yard shorter is safer.**',
  '⚠ **Name the landmark, and say which one:** _the LONG bench, not the short one_. **A yard has two of most things, and the man you are directing has never seen either.**',
  '⚠ **End with the thing NOT to do.** _Do not use the other door._ **The last thing you say is the thing remembered, and in a yard the dangerous door matters more than the right one.**',
  '**Practise:** Write the order.',
  '1 ______ straight on.   2 ______ left at the bench.   3 ______ the second door.   4 ______ ______ use the stairs.',
  '**Useful words:**  go straight on  ·  turn left  ·  turn right  ·  past the…  ·  Do not use…',
  '**Sound — one order, one breath.** 🔊 **Track 4.10** Listen. _Go straight on.↘ Turn left at the bench.↘_ **A full stop after each one.** **A direction said in one long breath is a direction nobody can follow.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the driver. One gives directions. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________. Where is it?'],
  ['B', 'From the __________, go straight on. Past the __________.'],
  ['A', 'Straight on. Past the __________.'],
  ['B', 'Then turn __________ at the __________.'],
  ['A', '__________ at the __________.'],
  ['B', 'It is on your __________. Do not use the __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['loading door · gate · small store · left · long bench · other door', 'office · loading door · big store · right · green gate · back stairs']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** draw the way on a piece of paper. Then show it to the speakers.'));
out.push(PHRASE_CARD(['go straight on', 'turn left', 'turn right', 'past the…', 'Do not use…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner how to walk from the gate of your work to where you stand. **Write it.**'));
out.push(table(['', 'The order'], [['**1**', ''], ['**2**', ''], ['**3**', ''], ['**Do not**', '']], [1, 5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Go ______. Turn ______ at the ______. It is on your ______. Do not ______._'));
out.push(p('**Listener task:** could you walk it? Say _yes_ or _which order was missing_.'));
out.push(p('**Board clinic:** your teacher writes four directions. Two have no landmark. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper at the gate. Then answer.'));
out.push(box(null, [
  '**FOR DRIVERS — THE LOADING DOOR**',
  '**1** From the gate, go straight on. Past the small store.',
  '**2** Turn left at the long bench. _(Not the short bench by the wall.)_',
  '**3** The loading door is on your left. The big grey door.',
  '⚠ **DO NOT use the other door. It is the office stairs. No lorries.**',
  '**Say it back to the gate man before you drive. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many orders are there before the warning?'));
out.push(item('2', 'Which bench do you turn at?'));
out.push(item('3', 'What must the driver do before driving?'));
out.push(box('Writer\'s box', [
  '**A directions paper has three numbered orders, then one warning, then one instruction to the reader.**',
  '⚠ **Put the warning in a line of its own, in big letters.** **A warning in the middle of order 2 is a warning nobody reads.**',
  '⚠ **The last line is an instruction to the READER, not about the way:** _say it back before you drive_. **It is the only line that checks whether the other four worked.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a directions paper for your own work (**15 words or more**).'));
out.push(p('**FOR ______________ — ______________**   **1** From the ______________, ______________.   **2** Turn ______________ at the ______________.   **3** It is on your ______________.   ⚠ **DO NOT ______________.**   **______________. ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Three numbered orders', ''],
  ['A landmark in each one, and which one it is', ''],
  ['The warning in its own line', ''],
  ['A last line telling the reader what to do', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their paper. A third walks it across the room. The class says if they arrived.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write directions from the gate of your work to one place (**20 to 35 words**). Which turn do people get wrong? What must they not do?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody ever got it wrong?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many name a door that nobody should use? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** directions from your gate to the office, with a warning (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.6 =======================
out.push(pb());
out.push(h2('4.6  I can reach it. I cannot reach that one.'));
out.push(p('**You can:** say what you can and cannot reach   ·   **Grammar:** _can · cannot_   ·   **Sound:** can and can\'t'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which shelf in this room can you reach? Which cannot you reach? **Say it.**'));
out.push(p('**b**  Hold your hand up. Say _I can reach here. I cannot reach there._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Ammar use the ladder?   **A** yes   **B** no   **C** no, he asks for help'));
out.push(p('**b**  Listen again.   **1** Which shelf can he reach?   **2** Where is the ladder?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.11  I cannot reach shelf four', [
  ['Samih', 'Ammar. Put the packets on shelf four.'],
  ['Ammar', 'I can reach shelf three. I cannot reach shelf four.'],
  ['Samih', 'The ladder is next to the bench.'],
  ['Ammar', 'The ladder is not next to the bench. It is in the yard.'],
  ['Samih', 'Then do not stand on a carton. Wait for the ladder.'],
  ['Ammar', 'I can put them on shelf three and move them later.'],
  ['Samih', 'Better. Tell me you moved them.'],
  ['Ammar', 'I tell you. And I write it on the sheet.'],
  ['Samih', 'Good. A man on a carton is a man in hospital.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_can_ and _cannot_**',
  table(['+', '–', '?'], [
    ['**I can** reach shelf three.', '**I cannot** reach shelf four.', '**Can** you reach it? — Yes, I can.'],
    ['**He can** drive the lorry.', '**He cannot** drive on Friday.', '**Can** he drive it? — No, he cannot.'],
  ], [1.8, 1.8, 2.2]),
  '⚠ **_can_ has NO -s, even for he and she:** _he **can**_, **not** ~~he cans~~. **It is the one verb in Book 1 that does not take the -s from 3.4.**',
  '⚠ **And the verb after _can_ is bare:** _I can **reach**_, **not** ~~I can to reach~~, **not** ~~I can reaching~~.',
  '⚠ **_I cannot reach it_ is a whole answer and it is not a failure.** **The failure is standing on a carton.** **Say the sentence, then say what you will do instead.**',
  '**Practise:** Write _can_ or _cannot_.',
  '1 I ______ reach shelf three. It is easy.   2 I ______ reach shelf four. It is too high.   3 He ______ drive the lorry. He has the licence.   4 ______ you reach the top one?',
  '**Useful words:**  I can reach…  ·  I cannot reach…  ·  Wait for the ladder.  ·  do not stand on…  ·  and move them later',
  '**Sound — can and can\'t.** 🔊 **Track 4.12** Listen. _I can REACH it_ — **_can_ is quiet.** _I CAN\'T reach it_ — **_can\'t_ is LOUD.** **That is how you hear the difference across a store.** Say both four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One gives a job. One says what they can and cannot do. Then change places.'));
out.push(dlg(null, [
  ['A', 'Put the __________ on shelf __________.'],
  ['B', 'I can reach shelf __________. I cannot reach shelf __________.'],
  ['A', 'The ladder is __________.'],
  ['B', 'The ladder is not __________. It is __________.'],
  ['A', 'Then do not __________. Wait for the ladder.'],
  ['B', 'I can put them on shelf __________ and move them later.'],
]));
out.push(table(['Card 1', 'Card 2'], [['packets · shelf 4 · shelf 3 · next to the bench · in the yard · stand on a carton', 'rolls · shelf 4 · shelf 2 · behind the door · with the driver · climb the shelf']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** what did the speaker say they would do instead? One thing.'));
out.push(PHRASE_CARD(['I can reach…', 'I cannot reach…', 'Wait for the ladder.', 'do not stand on…', 'and move them later']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say three things you can do at your work and three you cannot. **Write it.**'));
out.push(table(['I can…', 'I cannot…'], [['', ''], ['', ''], ['', '']], [1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I can ______. I cannot ______. So I ______._'));
out.push(p('**Listener task:** how many people said _I cannot_ AND what they do instead? **Both halves.**'));
out.push(p('**Board clinic:** your teacher writes four lines. Two say _he cans_ or _I can to reach_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper on the ladder. Then answer.'));
out.push(box(null, [
  '**THE LADDER — WHO, WHERE, WHEN**',
  '**Where it lives:** next to the long bench. ⚠ **Put it back there.**',
  '**Who can use it:** anybody. ⚠ **Two men: one up, one holding.**',
  '**Shelf 4:** you need the ladder. **No exceptions.**',
  '**If the ladder is not here:** put the thing on shelf 3 and tell the supervisor.',
  '⚠ **DO NOT stand on a carton, a pallet or a chair. A man on a carton is a man in hospital.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where does the ladder live?'));
out.push(item('2', 'How many men use it?'));
out.push(item('3', 'What do you do if it is not there?'));
out.push(box('Writer\'s box', [
  '**A safety paper has four lines and one warning:** where the thing lives → who can use it → when you need it → **what to do when it is not there** → the warning.',
  '⚠ **The fourth line is the one that makes the paper work.** **A rule with no answer for _what if it is not here_ is a rule that gets broken by a man doing his job.**',
  '⚠ **The warning says what will happen, not just what not to do.** _A man on a carton is a man in hospital._ **Nine words. Nobody forgets them.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a safety paper for one thing at your work (**15 words or more**).'));
out.push(p('**______________ — WHO, WHERE, WHEN**   **Where it lives:** ______________.   **Who can use it:** ______________.   **When you need it:** ______________.   **If it is not here:** ______________.   ⚠ **DO NOT ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Where the thing lives', ''],
  ['Who can use it', ''],
  ['An answer for _if it is not here_', ''],
  ['A warning that says what will happen', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their warning. The class says which one they would remember.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work you cannot do alone (**20 to 35 words**). What is it? What do you need? What do people do instead when it is not there?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody been hurt doing that?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many describe something people do that is not safe? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** three things at your work you cannot do alone, and who you ask (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review: the shelf map'));
out.push(p('⚠ **This is the fourth unit of this book.** Places, addresses and reaching — and now a problem for the class to talk about together.'));
out.push(p('**You can:** read a shelf map   ·   **Review:** Units 4.1 to 4.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**4.1**  Where is your pen? Use three different small words.', ''],
  ['**4.2**  Row 3, shelf 2. Then say it the other way.', ''],
  ['**4.3**  Ask where one thing is. Then ask where four things are.', ''],
  ['**4.4**  The shelf is empty. Say what you saw.', ''],
  ['**4.5**  Three orders from the gate to a door.', ''],
  ['**4.6**  One thing you can reach and one you cannot.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fouad do?   **A** he loses things   **B** he puts things where they fit, not where the map says   **C** he cannot read the map'));
out.push(p('**b**  Listen again.   **1** How long has Fouad worked there?   **2** Why is his place for the long rolls better?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 4.13  Somewhere sensible', [
  ['Nour', 'Fouad has moved eleven things this month. Not one of them is where the map says.'],
  ['Abu Yasser', 'Where are they?'],
  ['Nour', 'Somewhere sensible. Every time. The long rolls stand behind the door now.'],
  ['Fouad', 'They do not fit on shelf one. They bend. A bent roll is rubbish.'],
  ['Abu Yasser', 'That is true. I have thrown away bent rolls for nine years.'],
  ['Nour', 'And I sent a man to row two for a roll on Tuesday. He came back with nothing.'],
  ['Fouad', 'He should ask me.'],
  ['Nour', 'He did ask you. You were at lunch.'],
  ['Fouad', 'Then he should ask Samih. Samih knows.'],
  ['Abu Yasser', 'Samih knows. Fouad knows. I know. The map does not.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**4.1**', '_In the box, on the top shelf. Under the bench. Behind the door._'],
    ['**4.2**', '_Row three, shelf two. The second one up. Shelf one is the bottom._'],
    ['**4.3**', '_Where is the roll? Where are the rolls?_'],
    ['**4.4**', '_It is not there. The space is empty. No dust, a clean square._'],
    ['**4.5**', '_Go straight on. Turn left at the long bench. Do not use the other door._'],
    ['**4.6**', '_I can reach shelf three. I cannot reach shelf four. Wait for the ladder._'],
  ], [1, 5]),
  '⚠ **The new thing here: being right about the shelf is not the same as being findable.** **Fouad is right about every one of his eleven decisions.** **A bent roll IS rubbish.** **And a man was sent to row two on Tuesday and came back with nothing.**',
  '**Useful words:**  somewhere sensible  ·  it does not fit  ·  he should ask me  ·  you were at lunch  ·  the map does not',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Fouad. One is Nour. Say why you are right.'));
out.push(table(['Fouad says', 'Nour says'], [[
  'Eleven good decisions. ⚠ **A long roll on shelf one bends, and a bent roll is thrown away.**',
  'A man went to row two on Tuesday and came back with nothing. ⚠ **The map is the only thing that works when Fouad is at lunch.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of somebody at your work who does a thing better than the paper says. Tell your partner. **Write it.**'));
out.push(table(['What they do', 'Why it is better', 'What happens when they are away'], [['', '', ''], ['', '', '']], [1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Fouad has moved eleven things to better places. Every decision was right. The map still says the old place, and on Tuesday a man was sent to an empty shelf while Fouad was at lunch.'));
out.push(table(['Fouad is right', 'Nour is right', 'So we do this'], [[
  'A long roll bends on shelf one. ⚠ **Eleven times he has stopped good stock turning into rubbish, and nobody asked him to.**',
  'The map is what works when Fouad is not there. ⚠ **A yard that only Fouad can read is a yard that closes when Fouad is at lunch.**',
  '⚠ **Fouad keeps deciding. The map follows him.** **He moves the thing, then he writes the new place on the map the same day** — **and the OLD line gets a pencil line through it, not a rub-out, so the next man can see it moved and when.**',
]], [1, 1, 1.2]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _Samih knows. Fouad knows. I know. The map does not._ **Three people knowing a thing is not the same as the thing being written down** — **and this is the second time in this book that a good arrangement turned out to be invisible.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _SHELF 1 = BOTTOM_   **A** Shelf 1 is the highest.   **B** Shelf 1 is the lowest.   **C** There is no shelf 1.',
  '**2**  _LADDER LIVES NEXT TO THE LONG BENCH_   **A** Keep the ladder in the yard.   **B** Put the ladder back beside the long bench.   **C** The ladder is broken.',
  '**3**  _MOVED SOMETHING? WRITE IT ON THE MAP TODAY_   **A** Write it next week.   **B** Do not move anything.   **C** Change the map the same day.',
  '**4**  _SHELF 4: TWO MEN, ONE LADDER_   **A** One man on the ladder alone.   **B** Two men and a ladder.   **C** No ladder needed.',
  '**5**  _OTHER DOOR = OFFICE STAIRS. NO LORRIES._   **A** Lorries use the other door.   **B** The other door is for the office, not lorries.   **C** Both doors are the same.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about a place, the ADDRESS goes in the first two sentences.** **Row, shelf, or the small word and the landmark.**',
  '⚠ **If you moved something, say WHY in one short sentence.** **A move with a reason stays moved.**',
  '**The shape:** who it is to → where the thing is now → why → what the reader must do.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message saying you moved something (**four sentences, about 30 words**). Say what, where it is now, why, and what the reader must do.'));
out.push(p('**To:** ______________   _I moved the ______________. It is ______________ now. ______________. Please ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to your supervisor about a thing you moved (**four sentences, about 30 words**). Say what, where, why, and ask for the map to be changed.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **new line** for the map, with the old place crossed out (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  The labels are ___ the small box.   a) on   b) in   c) under',
  '2  The ladder is ___ the bench.   a) next to   b) in   c) behind',
  '3  Row 3 is the ___ row.   a) first   b) second   c) third',
  '4  ___ are the four rolls?   a) Where is   b) Where are   c) Where',
  '5  The space is empty. The cartons are ___.   a) go   b) gone   c) going',
  '6  ___ left at the long bench.   a) Turn   b) You turn   c) Turning',
  '7  I ___ reach shelf four. It is too high.   a) can   b) cannot   c) can not to',
  '8  He ___ drive the lorry. He has the licence.   a) cans   b) can   c) can to',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 4.15** Listen. Write the answer.   **1** The row: ______   **2** The shelf: ______   **3** Which end you count from: ______   **4** What is missing: ______   **5** What he saw: ______   **6** Who he told: ______'));
out.push(p('**C  Reading.** Read the shelf list at 4.2 again. What is in row 3, shelf 3? Where are the rolls? Which row has the most empty shelves?'));
out.push(p('**D  Writing.** Write four sentences to your supervisor about something you moved (**about 30 words**). What, where, why, and what to do.'));
out.push(...lines(4));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Samih', 'Ammar. Row two, shelf three. The packets.'],
  ['Ammar', 'Row two. From the door?'],
  ['Samih', 'From the door, always. One, two.'],
  ['Ammar', 'Shelf three. Row two, shelf three.'],
  ['Samih', 'Go on, then. Before the lorry.'],
  ['Ammar', 'Samih. The packets are not there. Six packets.'],
  ['Samih', 'Not there?'],
  ['Ammar', 'An empty space. Thick dust. They went a long time ago.'],
  ['Samih', 'Thick dust. Tell Abu Yasser, not me. He keeps the old sheets.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**4.1**  say where a thing is with five different small words',
  '**4.2**  say a row and a shelf, and say which end I counted from',
  '**4.3**  ask where one thing is, and where more than one is',
  '**4.4**  say a thing is not there, and say what I saw',
  '**4.5**  give three orders and one warning to get somebody across a yard',
  '**4.6**  say what I can and cannot reach, and what I do instead',
  '**4.7**  read a shelf map, and say why a good decision can still lose a roll',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the store and stock unit.**',
  '**shelf** — here it is a place with a number. **At A2 you write a stock report about what is on it.**',
  '**ladder** — here it is a thing you wait for. **At A2 it is in a safety procedure you have to explain to somebody new.**',
  '**loading door** — here you walk a driver to it. **At A2 you book a time slot for it in an email.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
module.exports = out;
