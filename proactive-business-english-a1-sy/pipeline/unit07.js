// Proactive Business English A1 · Syria Edition · Book 2 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'big · small · heavy · light · broken · torn · wet · dry · damage · crushed · half · most · a few · condition · to drop · to tear · outside · inside · when it came · like this · what do I do · to decide';
const AHEAD_AT_A2 = 'damage · crushed · condition';

out.push(h1('Unit 7  Full, Empty, Broken'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('⚠ Welcome to Book 2', [
  '**Book 1 was six units and one idea.** **Five times something went wrong and nobody was at fault:** **Abu Raed\'s gate book, Hani\'s eleven swaps, the roll behind the door, Fouad\'s shelf map, a slip under a pad.** **Every one was somebody doing their job well into a system with one gap in it.**',
  '⚠ **Book 2 is about the gaps.** **Six more units: the broken carton, asking for a thing, yesterday, the word NO, the customer at the counter, and the note you leave for the man who comes after you.**',
  '**You can already say your name, count a shelf, read a shift board, give an address, sign a delivery note and answer a telephone.** ⚠ **This book is about what you do when something is wrong.**',
], C.lteal, C.navy));
out.push(sp());
out.push(box('In this unit you will…', [
  '**7.1**  describe a thing — big, small, heavy, light, full, empty',
  '**7.2**  say something is damaged',
  '**7.3**  say how many are bad, not just that they are bad',
  '**7.4**  say it was like that when it came',
  '**7.5**  ask what to do',
  '**7.6**  write one line about it',
  '**7.7**  Review: a damage note — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ A broken thing is a decision somebody has to make', [
  '**A carton with a hole in it is not a problem until somebody has to decide what to do with it.** ⚠ **And the man who can describe it is the man who makes the decision possible.**',
  '⚠ **This unit is six sentences and a number.** _Two of the ten are crushed. They came like this. What do I do?_ **Three sentences, and the supervisor can answer in four words.**',
], C.lyellow, C.orange));

// ======================= CYCLE 7.1 =======================
out.push(pb());
out.push(h2('7.1  Big, small, heavy, light'));
out.push(p('**You can:** describe a thing   ·   **Grammar:** the adjective before the noun   ·   **Sound:** the adjective, loud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Pick up two things on your table. **Say it:** _This one is heavy. That one is light._'));
out.push(p('**b**  Which is heavier: a full carton or an empty one? **Say why** in four words.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which box does Ammar take?   **A** the big one   **B** the small heavy one   **C** both'));
out.push(p('**b**  Listen again.   **1** Why is the small box heavy?   **2** What does Samih say about the big one?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.1  The small heavy one', [
  ['Samih', 'Two boxes for the counter. Take the small one first.'],
  ['Ammar', 'The small one? The big one is nearer.'],
  ['Samih', 'The small one is heavy. The big one is light.'],
  ['Ammar', 'A small heavy box and a big light box.'],
  ['Samih', 'Labels in the small one. Empty bags in the big one.'],
  ['Ammar', 'So the big one I can carry on my shoulder.'],
  ['Samih', 'The big one you can carry with one hand. The small one needs two.'],
  ['Ammar', 'Small and heavy is the dangerous one.'],
  ['Samih', 'Small and heavy is always the dangerous one. Nobody expects it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a thing**',
  table(['Pairs', 'Pairs'], [
    ['**big** — **small**', '**heavy** — **light**'],
    ['**full** — **empty**', '**wet** — **dry**'],
  ], [2, 2]),
  '⚠ **The word comes BEFORE the thing:** a **small** box · a **heavy** carton. **Not** ~~a box small~~. **This is the opposite of Arabic and it is the one thing to get right in this cycle.**',
  '⚠ **Two words together, in this order: SIZE then WEIGHT.** _a **small heavy** box_ · _a **big light** box_. **Not** ~~a heavy small box~~.',
  '⚠ **And the thing worth knowing at work:** **small and heavy is the dangerous one, because nobody expects it.** **Say the weight out loud when you hand a small box to somebody.**',
  '**Practise:** Write the word.',
  '1 A box with nothing in it is ______.   2 A box with labels in it is ______.   3 A carton in the rain is ______.   4 A pallet with two cartons on it is ______.',
  '**Useful words:**  a small box  ·  a heavy carton  ·  big and light  ·  small and heavy  ·  it needs two hands',
  '**Sound — the adjective, loud.** 🔊 **Track 7.2** Listen. Say it. _a SMALL box · a HEAVY carton._ **The describing word is the loud part, because it is the new information.** Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One gives a job. One asks about the thing. Then change places.'));
out.push(dlg(null, [
  ['A', 'Two __________ for the counter. Take the __________ one first.'],
  ['B', 'The __________ one? The __________ one is nearer.'],
  ['A', 'The __________ one is __________. The __________ one is __________.'],
  ['B', 'A __________ __________ one and a __________ __________ one.'],
  ['A', '__________ in the __________ one. __________ in the __________ one.'],
  ['B', 'So the __________ one needs __________ hands.'],
]));
out.push(table(['Card 1', 'Card 2'], [['boxes · small · heavy · big · light · labels · empty bags · two', 'cartons · big · light · small · heavy · paper · nails · two']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the two things and two words for each. Four words.'));
out.push(PHRASE_CARD(['a small box', 'a heavy carton', 'big and light', 'small and heavy', 'it needs two hands']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you carry at work. Describe each with two words. **Write it.**'));
out.push(table(['The thing', 'Size', 'Weight', 'One hand or two?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1, 1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is ______ and ______. It needs ______ hands._'));
out.push(p('**Listener task:** which thing in this class is small and heavy? **Those are the ones that hurt people.** Count them.'));
out.push(p('**Board clinic:** your teacher writes four phrases. Two put the word after the thing. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card on the shelf. Then answer.'));
out.push(box(null, [
  '**WHAT IS IN THESE BOXES — AND WHAT IT WEIGHS**',
  table(['Box', 'Size', 'Weight', 'Hands'], [
    ['labels', 'small', '**heavy**', '**two**'],
    ['empty bags', 'big', 'light', 'one'],
    ['nails', 'small', '**very heavy**', '**two, and bend your knees**'],
    ['paper', 'big', 'heavy', 'two'],
  ], [1.4, 1, 1.4, 2]),
  '⚠ **A small box is not a light box. Read the card before you lift. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which box is big and light?'));
out.push(item('2', 'How many boxes need two hands?'));
out.push(item('3', 'Which one has an extra instruction, and what is it?'));
out.push(box('Writer\'s box', [
  '**A weight card has four columns:** the thing → the size → the weight → **how many hands**.',
  '⚠ **The _hands_ column is the one that matters and it is the one people leave off.** **_Heavy_ is an opinion. _Two hands_ is an instruction.**',
  '⚠ **Put the warning where the reader is looking:** _a small box is not a light box_, **at the bottom, next to the small heavy ones.** **Same rule as the warning line in 4.5.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a weight card for four things at your own work (**15 words or more**).'));
out.push(table(['The thing', 'Size', 'Weight', 'Hands'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [1.4, 1, 1.4, 2]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A _hands_ number on every line', ''],
  ['Size AND weight, not just one', ''],
  ['The small heavy ones marked', ''],
  ['A warning line at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their small heavy line. The class says if they would have guessed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the heaviest thing you lift at work (**20 to 35 words**). What is it? How heavy? Does anybody help?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Do you lift it alone?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many people lift something heavy alone? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six things at your work with their size, weight and the number of hands (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.2 =======================
out.push(pb());
out.push(h2('7.2  Broken, torn, wet'));
out.push(p('**You can:** say something is damaged   ·   **Grammar:** _it is broken · it is torn_   ·   **Sound:** the flat fact'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things that get damaged at your work. Say it in Arabic. Your teacher writes the English.'));
out.push(p('**b**  Read the three words. Which goes with paper, which with glass, which with rain? _broken · torn · wet_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with the carton?   **A** it is wet   **B** it is crushed   **C** it is torn'));
out.push(p('**b**  Listen again.   **1** Which corner?   **2** What is inside?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.3  Crushed on one corner', [
  ['Ammar', 'Abu Yasser. A carton off the Aleppo lorry. It is crushed.'],
  ['Abu Yasser', 'Crushed where?'],
  ['Ammar', 'One corner. The bottom corner, this side.'],
  ['Abu Yasser', 'And inside?'],
  ['Ammar', 'I have not opened it. The outside is crushed. I do not know about the inside.'],
  ['Abu Yasser', 'Good. Do not open it yet. Is it wet?'],
  ['Ammar', 'Not wet. Dry. Just crushed.'],
  ['Abu Yasser', 'Dry and crushed on one corner. That is a box that was dropped, not a box that sat in the rain.'],
  ['Ammar', 'How do you know?'],
  ['Abu Yasser', 'Rain makes a mark all along the bottom. A drop makes one corner. Twenty years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what is wrong with it**',
  table(['The word', 'It goes with', 'At work'], [
    ['**broken**', 'hard things', 'the pallet is **broken** · the handle is **broken**'],
    ['**torn**', 'paper, bags, plastic', 'the bag is **torn** · the label is **torn**'],
    ['**crushed**', 'cartons, boxes', 'the carton is **crushed** on one corner'],
    ['**wet**', 'anything, from rain', 'the bottom is **wet**'],
  ], [1.1, 1.6, 2.8]),
  '⚠ **Say WHERE as well as WHAT:** _crushed **on one corner**_ · _torn **at the top**_ · _wet **along the bottom**_. **_It is broken_ on its own tells a supervisor nothing he can use.**',
  '⚠ **And say what you have NOT looked at:** _I have not opened it. I do not know about the inside._ **Unit 5.6 said the same thing about a wrapped pallet, and it is the same reason.**',
  '**Practise:** Write the word.',
  '1 The paper bag is ______.   2 The wooden pallet is ______.   3 The carton is ______ on one corner.   4 The bottom of the box is ______.',
  '**Useful words:**  it is broken  ·  it is torn  ·  crushed on one corner  ·  wet along the bottom  ·  I have not opened it',
  '**Sound — the flat fact.** 🔊 **Track 7.4** Listen. _It is crushed.↘ One corner.↘_ **Flat, short, no feeling in it.** **Damage said calmly gets dealt with; damage said loudly gets argued about.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reports. One asks. Then change places.'));
out.push(dlg(null, [
  ['A', 'A __________ off the __________ lorry. It is __________.'],
  ['B', '__________ where?'],
  ['A', '__________. This side.'],
  ['B', 'And inside?'],
  ['A', 'I have not opened it. I do not know about the inside.'],
  ['B', 'Is it wet?'],
]));
out.push(table(['Card 1', 'Card 2'], [['carton · Aleppo · crushed · one corner · not wet, dry', 'bag · Homs · torn · along the top · wet at the bottom']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write WHAT is wrong and WHERE. Two answers, and the second is the hard one.'));
out.push(PHRASE_CARD(['it is broken', 'it is torn', 'crushed on one corner', 'wet along the bottom', 'I have not opened it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four damaged things you have seen at work. **Write it.**'));
out.push(table(['The thing', 'What is wrong', 'Where', 'Did you look inside?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is ______. ______. I looked / did not look inside._'));
out.push(p('**Listener task:** count the reports that said WHERE. **_It is broken_ with no place is half a report.**'));
out.push(p('**Board clinic:** your teacher writes four reports. Two have no place in them. Add one to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Abu Yasser pinned up. Then answer.'));
out.push(box(null, [
  '**DAMAGE — WHAT THE MARK TELLS YOU**',
  table(['What you see', 'What probably happened'], [
    ['crushed on **one corner**', 'it was **dropped**'],
    ['crushed on **the top**', 'something **heavy was stacked** on it'],
    ['wet **along the bottom**', 'it **stood in water**, or in the rain'],
    ['wet **on the top**', 'it was in the **rain**, uncovered'],
    ['torn **in a straight line**', 'a **knife** — somebody opened it'],
  ], [2, 3]),
  '⚠ **Write what you SEE, not what you think happened. The table is mine, not yours. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does one crushed corner tell you?'));
out.push(item('2', 'What is the difference between wet at the bottom and wet on the top?'));
out.push(item('3', 'What does Abu Yasser tell you to write?'));
out.push(box('Writer\'s box', [
  '**A damage line has three parts:** the thing → what is wrong → **where on it**.',
  '⚠ **Write what you SEE. Not what happened.** _Crushed on one corner_ is yours to write. _Somebody dropped it_ is not** — **you were not there, and the moment you write it the conversation is about a person instead of a carton.**',
  '⚠ **Unit 4.4 said the same thing about an empty shelf:** _a clean square, no dust_. **Say what you saw and let the man with twenty years do the thinking.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write four damage lines for things at your own work (**15 words or more**).'));
out.push(p('**DAMAGE — ______________**   **1** The ______________ is ______________, ______________.   **2** The ______________ is ______________, ______________.   **3** The ______________ is ______________, ______________.   **4** The ______________ is ______________, ______________.   ⚠ **What I did NOT look at:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A place on every line', ''],
  ['What you SAW, not what you think', ''],
  ['No person named', ''],
  ['A line saying what you did not look at', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says if a person is named in it. **Nobody should be.**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about damaged goods at your work (**20 to 35 words**). What was damaged? Where? What happened to it in the end?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody get the blame?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did somebody get the blame? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four damage lines from a real day, with a place on every one (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.3 =======================
out.push(pb());
out.push(h2('7.3  Two of the ten'));
out.push(p('**You can:** say how many are bad   ·   **Grammar:** _two of ten · half · most · a few_   ·   **Sound:** the two numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  There are ten cartons. Two are crushed. **Say it** in one sentence.'));
out.push(p('**b**  Read the two lines. Which can a supervisor use? _Some of them are crushed · Two of the ten are crushed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many are crushed?   **A** two of ten   **B** half   **C** most of them'));
out.push(p('**b**  Listen again.   **1** What does Abu Yasser do with the number?   **2** What would he do if it were half?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.5  Two is a problem, half is a lorry', [
  ['Ammar', 'The Aleppo cartons. Some of them are crushed.'],
  ['Abu Yasser', 'How many?'],
  ['Ammar', 'A few.'],
  ['Abu Yasser', 'Ammar. How many cartons came, and how many are crushed?'],
  ['Ammar', 'Ten came. Two are crushed.'],
  ['Abu Yasser', 'Two of ten. Now I can do something. Two I take off the invoice.'],
  ['Ammar', 'And if it was more?'],
  ['Abu Yasser', 'Half, and I telephone Aleppo. Most of them, and the lorry goes back full.'],
  ['Ammar', 'So the number decides.'],
  ['Abu Yasser', 'The number decides. _Some_ decides nothing. Two of ten is a note. Eight of ten is a lorry turning round.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**How many are bad**',
  table(['Vague — do not use at work', 'A quantity — use this'], [
    ['**some of them**', '**two of the ten**'],
    ['**a few**', '**three of the twelve**'],
    ['**quite a lot**', '**half of them — six of the twelve**'],
    ['**most of them**', '**nine of the twelve**'],
  ], [2, 3]),
  '⚠ **TWO numbers, always: how many are bad AND how many came.** **_Two crushed_ is not enough.** **Two out of ten is a note; two out of three is a disaster. The same two.**',
  '⚠ **_a few_, _some_ and _most_ are real English and they belong in a conversation.** **They do not belong in a report, because nobody can act on them.** **At work, count.**',
  '**Practise:** Write it with two numbers.',
  '1 Twelve bags came. Three are torn. ______________.   2 Six pallets came. All six are broken. ______________.   3 Twenty boxes came. Ten are wet. ______________.',
  '**Say it. Write it. Check it** — read your sentence back and point at the two numbers in it.',
  '**Useful words:**  two of the ten  ·  half of them  ·  most of them  ·  a few  ·  how many came?',
  '**Sound — the two numbers.** 🔊 **Track 7.6** Listen. _TWO of the TEN._ **Both numbers loud, with _of the_ quiet between them.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reports vaguely. One asks for the numbers. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________ __________. Some of them are __________.'],
  ['B', 'How many?'],
  ['A', 'A few.'],
  ['B', 'How many came, and how many are __________?'],
  ['A', '__________ came. __________ are __________.'],
  ['B', '__________ of __________. Now I can do something.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Aleppo cartons · crushed · ten · two', 'Homs bags · torn · twelve · three']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the two numbers. **How many came and how many are bad.**'));
out.push(PHRASE_CARD(['two of the ten', 'half of them', 'most of them', 'a few', 'How many came?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four times something came damaged. **Write it** with two numbers each time.'));
out.push(table(['What came', 'How many came', 'How many bad', 'In one sentence'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.2, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ came. ______ of the ______ were ______._'));
out.push(p('**Listener task:** count the reports with TWO numbers in them. **One number is half a report.**'));
out.push(p('**Board clinic:** your teacher writes four reports with _some_ or _a few_ in them. The class asks _how many of how many?_ for each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet on the wall. Then answer.'));
out.push(box(null, [
  '**WHAT THE NUMBER DECIDES — ABU YASSER\'S RULE**',
  table(['How many are bad', 'What happens'], [
    ['**1 or 2 of ten**', 'a note, and the invoice is reduced'],
    ['**about half**', 'telephone the supplier the same day'],
    ['**most of them**', '⚠ **the lorry does not leave — it goes back loaded**'],
    ['**all of them**', '⚠ **nothing is signed, and the office rings the supplier\'s office**'],
  ], [1.6, 3.4]),
  '⚠ **Give me two numbers and I know which line this is. Give me "some" and I have to come and look. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What happens if two of ten are bad?'));
out.push(item('2', 'What happens if most are bad?'));
out.push(item('3', 'What does Abu Yasser have to do if you say _some_?'));
out.push(box('Writer\'s box', [
  '**A damage report has the two numbers in its FIRST line.** _Ten cartons came. Two are crushed._',
  '⚠ **First line, not last.** **The number decides what happens, so the number goes where the reader\'s eye lands.** **Everything else on the page is detail.**',
  '⚠ **And the sentence that explains why this cycle exists:** _give me "some" and I have to come and look._ **A vague report makes somebody walk.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a damage report for your own work (**15 words or more**). Two numbers in the first line.'));
out.push(p('**DAMAGE REPORT — ______________**   **______ ______________ came. ______ are ______________.**   **Where:** ______________   **What I did not look at:** ______________   **Which line of the rule:** ______________   ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Two numbers, in the FIRST line', ''],
  ['No _some_, no _a few_', ''],
  ['A place for the damage', ''],
  ['Which line of the rule it is', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their first line only. The class says which line of the rule it is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a load that came damaged (**20 to 35 words**). How many came? How many were bad? What did the company do?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who paid for them?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the supplier pay? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four damage reports from your work, each with two numbers (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.4 =======================
out.push(pb());
out.push(h2('7.4  It came like this'));
out.push(p('**You can:** say it was already damaged when it arrived   ·   **Grammar:** _it came like this_   ·   **Sound:** the sentence with no blame in it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Something was broken before you touched it. How do you say so? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which one is about the carton? _The driver broke it · It came like this. I saw it on the lorry._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When did Ammar see the damage?   **A** after he unloaded   **B** on the lorry   **C** the next day'));
out.push(p('**b**  Listen again.   **1** What did he do before he touched it?   **2** What does Abu Yasser say about the driver?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.7  I saw it on the lorry', [
  ['Abu Yasser', 'Two crushed. Did you crush them?'],
  ['Ammar', 'No. They came like this. I saw them on the lorry, before I touched them.'],
  ['Abu Yasser', 'Before you touched them. You are sure.'],
  ['Ammar', 'I am sure. I showed the driver and he looked at them too.'],
  ['Abu Yasser', 'You showed the driver before you unloaded. Good.'],
  ['Ammar', 'Is the driver in trouble?'],
  ['Abu Yasser', 'The driver did not load it. Somebody in Aleppo stacked something heavy on it.'],
  ['Ammar', 'So nobody here did it.'],
  ['Abu Yasser', 'Nobody here did it, and nobody in Aleppo will remember who. That is why we write the carton, not the man.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying it came like that**',
  table(['Step', 'What you say'], [
    ['**1 the fact**', '**It came like this.**'],
    ['**2 when you saw it**', '**I saw it on the lorry, before I touched it.**'],
    ['**3 who else saw it**', '⚠ **I showed the driver and he looked at it too.**'],
  ], [1.6, 3.4]),
  '⚠ **Step 3 is the one that makes the other two believed.** **A second pair of eyes, at the time.** **It is the same thing as the driver\'s signature in Unit 5.4 and it costs ten seconds.**',
  '⚠ **SHOW THE DRIVER BEFORE YOU UNLOAD.** **Once the carton is off the lorry and on your floor, it is your carton.** **That is not a rule somebody wrote. It is just what everybody believes.**',
  '⚠ **And no blame in the sentence.** _It came like this_ **does not say who did it, because you do not know.** **_The driver broke it_ is a guess, and if you are wrong you have accused a man who drove nine hours.**',
  '**Practise:** Write the line.',
  '1 It was damaged before you touched it. ______________.   2 Say when you saw it. ______________.   3 Say who else saw it. ______________.',
  '**Useful words:**  It came like this.  ·  before I touched it  ·  I saw it on the lorry  ·  I showed the driver  ·  he looked at it too',
  '**Sound — no blame in it.** 🔊 **Track 7.8** Listen. _It came like this.↘_ **Flat, and quieter than you think.** **Said loudly it sounds like an argument you have already started.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the supervisor. One explains. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ __________. Did you __________ them?'],
  ['B', 'No. They came like this. I saw them __________, before I touched them.'],
  ['A', 'Before you touched them. You are sure?'],
  ['B', 'I am sure. I showed the __________ and he looked at them too.'],
  ['A', 'You showed the __________ before you unloaded. Good.'],
  ['B', 'Is the __________ in trouble?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Two crushed · crush · on the lorry · driver', 'Three torn · tear · in the van · driver']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker say WHO ELSE saw it? **That is the half that gets believed.**'));
out.push(PHRASE_CARD(['It came like this.', 'before I touched it', 'I saw it on the lorry', 'I showed the driver', 'he looked at it too']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Two times something was already damaged when it reached you. **Write it.**'));
out.push(table(['The thing', 'When I saw it', 'Who else saw it', 'Was I believed?'], [['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ came like this. I saw it ______. I showed ______._'));
out.push(p('**Listener task:** count the reports where somebody else saw it. **Then count how many of those were believed.** Compare the two numbers.'));
out.push(p('**Board clinic:** your teacher writes four lines. Two name a person as the cause. Rewrite them with no person in them.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ammar wrote at the lorry. Then answer.'));
out.push(box(null, [
  '**SEEN BEFORE UNLOADING — 4 APRIL, 7.35**',
  '**Lorry:** Aleppo, 412 663. **Driver:** Marwan Haddad.',
  '**Ten cartons on the lorry. Two crushed, bottom corner, both on the same side.**',
  '⚠ **I saw this on the lorry, before I touched anything.**',
  '⚠ **I showed the driver at 7.35. He looked at both cartons.**',
  '**Not opened. I do not know about the inside.**',
  '**A. Zreik**   **Driver: M. Haddad**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What time did he show the driver?'));
out.push(item('2', 'What does he say he does not know?'));
out.push(item('3', 'How many signatures are on this note?'));
out.push(box('Writer\'s box', [
  '**A seen-before-unloading note has five things:** the lorry and driver → **the two numbers** → **that you saw it before you touched it** → **that you showed the driver, with a time** → what you did not open.',
  '⚠ **The TIME on the showing line is the whole note.** _I showed the driver at 7.35._ **A time is checkable; _I showed the driver_ is a claim.**',
  '⚠ **And the driver signs this one too.** **Unit 5.4 again: a fact with two signatures is a fact. A fact with one is your word against a man who left.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a seen-before-unloading note for your own work (**15 words or more**).'));
out.push(p('**SEEN BEFORE UNLOADING — ______________, ______**   **Lorry:** ______________  **Driver:** ______________   **______ ______________ came. ______ are ______________, ______________.**   ⚠ **I saw this before I touched anything.**   ⚠ **I showed the driver at ______.**   **Not opened:** ______________   ______  **Driver:** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A time on the showing line', ''],
  ['Two numbers', ''],
  ['No person blamed', ''],
  ['Two signatures', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their showing line. The class says if it has a time in it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about damage that was not your fault (**20 to 35 words**). What was it? When did you see it? Did anybody believe you?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who else saw it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did a second person see it at the time? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the four lines you will say the next time something comes damaged (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.5 =======================
out.push(pb());
out.push(h2('7.5  What do I do?'));
out.push(p('**You can:** ask what to do   ·   **Grammar:** _what do I do?_   ·   **Sound:** the short question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You do not know what to do with something. What do you ask? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which gets an answer? _I do not know what to do with it · Two are crushed. What do I do?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser decide?   **A** send them back   **B** put them aside and open one   **C** sell them cheap'));
out.push(p('**b**  Listen again.   **1** Which one does he open?   **2** Why does he say he is telling Ammar the reason?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.9  And I will tell you why', [
  ['Ammar', 'Two of the ten are crushed. They came like this. What do I do?'],
  ['Abu Yasser', 'Put the two aside. By the bench, not on the shelf.'],
  ['Ammar', 'And the eight?'],
  ['Abu Yasser', 'The eight go on row three. Normal.'],
  ['Ammar', 'And the two by the bench?'],
  ['Abu Yasser', 'Open one. The worse one. If the labels inside are good, we keep both and I take two off the invoice.'],
  ['Ammar', 'And if the labels are damaged?'],
  ['Abu Yasser', 'Then both go back on the next Aleppo lorry and I telephone them today.'],
  ['Ammar', 'Why are you telling me all of it?'],
  ['Abu Yasser', 'Because next time I am not here, and you will have to decide. A man who was only told what to do learns nothing.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking what to do**',
  table(['You say', 'When'], [
    ['**What do I do?**', 'you have given the facts and you do not know the next step'],
    ['**Do I ______ or ______?**', 'you can see two possible answers — **better, because it shows you thought**'],
    ['**Shall I ______?**', 'you think you know and you want it confirmed'],
    ['**And if ______?**', '⚠ **asking what to do in the OTHER case, before it happens**'],
  ], [1.8, 3.6]),
  '⚠ **Give the facts FIRST, then the question.** _Two of the ten are crushed. They came like this. What do I do?_ **Three short sentences, and the supervisor can answer in four words.** **A question with no facts in front of it makes him come and look.**',
  '⚠ **_And if…?_ is the best question in this unit.** **It gets you the answer to tomorrow\'s problem today, while somebody who knows is standing next to you.**',
  '**Practise:** Write the question.',
  '1 You have two choices. ______________ or ______________?   2 You think you know. ______________?   3 You want the other case too. ______________?',
  '**Useful words:**  What do I do?  ·  Do I … or …?  ·  Shall I …?  ·  And if …?  ·  Put them aside.',
  '**Sound — the short question.** 🔊 **Track 7.10** Listen. _What do I DO?↘_ **It goes DOWN, because it starts with a question word** — **the same rule as _Where is the roll?_ in 4.3.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One has a problem. One decides AND says why. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ of the __________ are __________. They came like this. What do I do?'],
  ['B', 'Put the __________ aside. __________, not on the shelf.'],
  ['A', 'And the __________?'],
  ['B', 'They go on __________. Normal.'],
  ['A', 'And if the inside is damaged?'],
  ['B', 'Then they go back on the next __________ lorry.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Two · ten · crushed · two · by the bench · eight · row three · Aleppo', 'Three · twelve · torn · three · in the office · nine · row one · Homs']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker ask _and if…?_ **That question is worth more than the first one.**'));
out.push(PHRASE_CARD(['What do I do?', 'Do I … or …?', 'Shall I …?', 'And if …?', 'Put them aside.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you have had to ask about at work. **Write it.** Facts first, then the question.'));
out.push(table(['The facts, in one line', 'My question', 'The answer I got', 'Did they say why?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.8, 1.2, 1.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______. ______. What do I do? — He said ______, because ______._'));
out.push(p('**Listener task:** in how many reports did the answer come with a REASON? **A reason is what lets you decide next time.**'));
out.push(p('**Board clinic:** your teacher writes four questions with no facts in front of them. Add one line of facts to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card by the bench. Then answer.'));
out.push(box(null, [
  '**DAMAGED GOODS — WHAT TO DO, AND WHY**',
  '**1 Put them aside.** By the bench. ⚠ **Never on the shelf** — **a damaged carton on a shelf gets sold.**',
  '**2 Open the worst one.** Only one. ⚠ **If you open all of them you cannot send any back.**',
  '**3 Inside good?** Keep them. The office takes the money off the invoice.',
  '**4 Inside damaged?** Both go back on the next lorry, and telephone the supplier the same day.',
  '⚠ **Every line has a reason on it. A man who was only told what to do learns nothing. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why do damaged cartons not go on the shelf?'));
out.push(item('2', 'How many do you open?'));
out.push(item('3', 'What is the last line of the card really about?'));
out.push(box('Writer\'s box', [
  '**A what-to-do card has numbered steps, and ⚠ a REASON on every step.**',
  '⚠ **The reason is not decoration.** _Never on the shelf — a damaged carton on a shelf gets sold._ **A step with a reason survives the day the supervisor is away. A step without one gets skipped by the first man in a hurry.**',
  '⚠ **One of the steps should say what NOT to do too much of:** _open only one_. **A card that says what to do and not how much is a card somebody will overdo.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a what-to-do card for one problem at your own work (**15 words or more**). A reason on every line.'));
out.push(p('**______________ — WHAT TO DO, AND WHY**   **1** ______________. ⚠ **because** ______________   **2** ______________. ⚠ **because** ______________   **3** ______________. ⚠ **because** ______________   **4** ______________. ⚠ **because** ______________   ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A reason on every step', ''],
  ['Numbered steps, in order', ''],
  ['One step saying how much, not just what', ''],
  ['A step for the bad case as well as the good one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one step with its reason. The class says if they would follow it with nobody watching.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a decision somebody at your work made and explained (**20 to 35 words**). What was it? What was the reason? Could you make it yourself now?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Could you decide it alone now?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was a reason given? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** three decisions you could make alone, and three you could not (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.6 =======================
out.push(pb());
out.push(h2('7.6  One line, and somebody acts on it'));
out.push(p('**You can:** write one line that somebody will act on   ·   **Grammar:** one sentence, four parts   ·   **Sound:** reading your own line aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the shortest sentence you can that tells somebody everything about two crushed cartons.'));
out.push(p('**b**  Count the words in it. Fewer than fifteen? **Say it again, shorter.**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened because of Ammar\'s one line?   **A** nothing   **B** the office took money off the invoice   **C** the lorry went back'));
out.push(p('**b**  Listen again.   **1** How long was the line?   **2** Who read it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.11  Twelve words', [
  ['Nour', 'Ammar. Your line on the damage sheet. Twelve words.'],
  ['Ammar', 'Is twelve enough?'],
  ['Nour', 'I took it upstairs. The office took forty thousand off the Aleppo invoice this morning.'],
  ['Ammar', 'From twelve words?'],
  ['Nour', 'From twelve words with two numbers in them. _Ten cartons came, two crushed, bottom corner, came like this._'],
  ['Ammar', 'I wrote it in two minutes.'],
  ['Nour', 'Two minutes. And last month somebody wrote _some boxes damaged_ and I had to walk down here twice.'],
  ['Ammar', 'And then?'],
  ['Nour', 'And then the lorry had gone and we paid for all twelve. That is what the two numbers are for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**One line that works**',
  table(['The four parts', 'In the example'], [
    ['**1 how many came**', '_Ten cartons came_'],
    ['**2 how many are bad, and what is wrong**', '_two crushed_'],
    ['**3 where on the thing**', '_bottom corner_'],
    ['**4 that it came like that**', '_came like this_'],
  ], [2.2, 3]),
  '⚠ **_Ten cartons came, two crushed, bottom corner, came like this._** **Twelve words.** **Commas instead of sentences, because this is a LINE on a sheet and not a paragraph.**',
  '⚠ **The test of the line is not whether it is correct English.** **It is whether somebody can act on it without coming to find you.** **Read it back and ask: could Nour take this upstairs?**',
  '**Practise:** Write one line for each.',
  '1 Twelve bags, three torn at the top, already torn on the van. ______________',
  '2 Six pallets, all six broken, came like that. ______________',
  '**Useful words:**  ten cartons came  ·  two crushed  ·  bottom corner  ·  came like this  ·  twelve words',
  '**Sound — reading your own line aloud.** 🔊 **Track 7.12** Listen. _Ten cartons came, two crushed, bottom corner, came like this._ **A small stop at every comma.** ⚠ **Read your own line aloud before you leave it on the desk.** **If you run out of breath it is too long.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One says the facts slowly. One writes ONE line. Then read it back and change places.'));
out.push(dlg(null, [
  ['A', '__________ __________ came. __________ are __________.'],
  ['B', 'Where on them?'],
  ['A', '__________.'],
  ['B', 'And did they come like that?'],
  ['A', 'They came like this. I saw them on the lorry.'],
  ['B', '_(writes, then reads it back)_  __________ came, __________ __________, __________, came like this.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Ten cartons · two · crushed · bottom corner', 'Twelve bags · three · torn · at the top']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs read their line for the class — **books closed**.'));
out.push(p('**Listener task:** count the words. **Then say whether you could act on it without asking anything.**'));
out.push(PHRASE_CARD(['ten cartons came', 'two crushed', 'bottom corner', 'came like this', 'twelve words']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four damage lines from your own work. **Write it.** Count the words each time.'));
out.push(table(['My one line', 'Words', 'Could somebody act on it?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [3.4, 0.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read your shortest line to the class. Say the number of words. **Then say what somebody could do with it.**'));
out.push(p('**Listener task:** what is the shortest line in this class that you could still act on? **Write it down.**'));
out.push(p('**Board clinic:** your teacher writes four long lines. The class cuts each one to under fifteen words **without losing a number.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the damage sheet. Then answer.'));
out.push(box(null, [
  '**DAMAGE SHEET — WEEK OF 30 MARCH**',
  table(['Date', 'The line', 'Acted on?'], [
    ['30 Mar', 'Ten cartons came, two crushed, bottom corner, came like this.', '✓ 40,000 off invoice'],
    ['31 Mar', 'Some boxes damaged.', '✗ Nour came down twice, lorry gone'],
    ['1 Apr', 'Twelve bags came, three torn at the top, came like this.', '✓ three replaced'],
    ['2 Apr', 'Pallet broken.', '✗ which pallet? nobody knew'],
  ], [0.9, 3.4, 1.8]),
  '⚠ **The two lines that worked have two numbers in them. The two that failed have none. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two lines were acted on?'));
out.push(item('2', 'What is the difference between the lines that worked and the ones that did not?'));
out.push(item('3', 'What went wrong on 2 April?'));
out.push(box('Writer\'s box', [
  '**A damage sheet has three columns:** the date → **the line** → **whether anybody acted on it**.',
  '⚠ **The third column is the one that teaches.** **It is the only place in this book where you can see your own writing working or failing**, **in a column, over a week.**',
  '⚠ **Keep the failures on the sheet.** _Pallet broken. ✗ which pallet? nobody knew._ **A sheet with only the good lines on it teaches nobody anything** — **and the man who wrote that line is the man who needs to see it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a damage sheet for one week at your own work (**15 words or more**). Include at least one line that did not work.'));
out.push(table(['Date', 'The line', 'Acted on?'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [0.9, 3.4, 1.8]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Two numbers in every line that worked', ''],
  ['At least one line that did NOT work', ''],
  ['A reason in the third column for each failure', ''],
  ['Every line under fifteen words', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their failed line. The class says what was missing from it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something you wrote was acted on (**20 to 35 words**). What did you write? Who read it? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody tell you it worked?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the writer told that their writing had worked? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four one-line damage reports, each under fifteen words with two numbers in it (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 7.7 =======================
out.push(pb());
out.push(h2('7.7  Review: a damage note'));
out.push(p('⚠ **This is the first unit of this book.** Describing, damage, the two numbers, _it came like this_, asking, and one line that works — and now a problem for the class to talk about together.'));
out.push(p('**You can:** write a whole damage note   ·   **Review:** Units 7.1 to 7.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**7.1**  Two words for a box: size and weight, in that order.', ''],
  ['**7.2**  Something is damaged. Say what AND where.', ''],
  ['**7.3**  Three of twelve are torn. Say it with two numbers.', ''],
  ['**7.4**  It was damaged before you touched it. Three sentences.', ''],
  ['**7.5**  Ask what to do. Facts first.', ''],
  ['**7.6**  One line, under fifteen words, with two numbers.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many people saw the carton?   **A** one   **B** two   **C** four'));
out.push(p('**b**  Listen again.   **1** Why did nobody write it down?   **2** What did it cost?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 7.13  Four people saw it', [
  ['Nour', 'The Aleppo invoice. We paid for twelve cartons and two were crushed.'],
  ['Abu Yasser', 'Who saw them?'],
  ['Fouad', 'I saw them. On the lorry, Tuesday morning.'],
  ['Samih', 'I saw them. I carried them to the bench.'],
  ['Ammar', 'I saw them. I told Fouad.'],
  ['Abu Yasser', 'And I saw them. I walked past the bench on Tuesday afternoon.'],
  ['Nour', 'Four men. And the damage sheet for Tuesday is empty.'],
  ['Fouad', 'I thought Ammar wrote it. He is the one who writes things.'],
  ['Ammar', 'I thought Abu Yasser wrote it. He saw them after me.'],
  ['Samih', 'I thought it was already written. Four of us knew.'],
  ['Abu Yasser', 'Four of us knew. The sheet did not. And the sheet is what Nour takes upstairs.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**7.1**', '_A small heavy box. A big light one. It needs two hands._'],
    ['**7.2**', '_It is crushed. One corner, the bottom one. I have not opened it._'],
    ['**7.3**', '_Two of the ten are crushed._ **Two numbers, always.**'],
    ['**7.4**', '_It came like this. I saw it on the lorry. I showed the driver at 7.35._'],
    ['**7.5**', '_Two of ten are crushed. What do I do? And if the inside is damaged?_'],
    ['**7.6**', '_Ten cartons came, two crushed, bottom corner, came like this._'],
  ], [1, 5]),
  '⚠ **The new thing here: four men saw it and all four were right about what they saw.** **Nobody was careless. Nobody was lazy. Everybody assumed somebody else had written the line.** ⚠ **And the more people who see a thing, the less likely it is that anybody writes it down.**',
  '**Useful words:**  four men saw it  ·  I thought he wrote it  ·  it was already written  ·  four of us knew  ·  the sheet did not',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Fouad. One is Nour. Say why you are right.'));
out.push(table(['Fouad says', 'Nour says'], [[
  'I saw it and I told Ammar the same morning. ⚠ **I did my part. Ammar is the one who writes things.**',
  'The sheet for Tuesday is empty and I paid for twelve cartons. ⚠ **Four men knowing is not a record.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** whose fault is it? Say _all four, a quarter each_ — **and then say why that is not a useful answer.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something at your work that everybody saw and nobody wrote down. Tell your partner. **Write it.**'));
out.push(table(['What everybody saw', 'How many people', 'Who they thought would write it'], [['', '', ''], ['', '', '']], [1.6, 1.2, 2]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Four men saw two crushed cartons on Tuesday. All four were right about what they saw. Each one assumed another had written it down. The sheet is empty and the company paid for twelve.'));
out.push(table(['Each man is right', 'Nour is right', 'So we do this'], [[
  'Each of the four saw it and each told or was told. ⚠ **Not one of them ignored it, and three of them did something about it.**',
  'The sheet is empty and the money is gone. ⚠ **Four men knowing a thing is not a record — it is four men who will remember it differently next month.**',
  '⚠ **THE FIRST MAN TO SEE IT WRITES THE LINE.** **Not the one who writes things, not the supervisor, not whoever has time.** **The first pair of eyes.** **And he says one sentence out loud:** _I have written it._ **Then the other three know, and nobody writes it twice.**',
]], [1, 1, 1.4]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _four of us knew; the sheet did not._ **And the finding, which is new and is the opposite of what anybody expects:** ⚠ **the MORE people see a thing, the LESS likely it is that anybody writes it down.** **One man who sees a crushed carton writes it. Four men who see it each assume one of the other three has.** **That is why the rule names the FIRST pair of eyes and not the right person for the job.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _SMALL IS NOT LIGHT. READ THE CARD BEFORE YOU LIFT._   **A** Small boxes are easy.   **B** Check the weight first.   **C** Do not lift anything.',
  '**2**  _DAMAGED? WRITE TWO NUMBERS: HOW MANY CAME, HOW MANY BAD._   **A** Write "some are damaged".   **B** Write both numbers.   **C** Count only the bad ones.',
  '**3**  _SHOW THE DRIVER BEFORE YOU UNLOAD_   **A** Unload first, then tell him.   **B** Tell him while it is still on the lorry.   **C** Do not tell the driver.',
  '**4**  _DAMAGED GOODS BY THE BENCH — NEVER ON THE SHELF_   **A** Put damaged goods with the good ones.   **B** Keep damaged goods separate.   **C** Throw damaged goods away.',
  '**5**  _FIRST MAN TO SEE IT WRITES THE LINE_   **A** The supervisor writes it.   **B** Whoever has time writes it.   **C** Whoever sees it first writes it.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about damage, the TWO NUMBERS go in the first sentence.** **Not the date, not an apology.**',
  '⚠ **Say _it came like this_ in the second sentence, if it did.** **The reader needs to know whose problem it is before he reads any detail.**',
  '**The shape:** the two numbers and what is wrong → that it came like that → who else saw it → what you want done.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message about a damaged delivery (**four sentences, about 30 words**). The numbers, that it came like that, who saw it, and what you want.'));
out.push(p('**To:** ______________   _______ ______________ came and ______ are ______________. They came like this. ______________ saw them with me at ______. Please ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to the office about damaged goods (**four sentences, about 30 words**). Two numbers, that it came like that, a second witness with a time, and what you want done.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **reply** the office would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  It is a ___ box. Two hands.   a) box small   b) small heavy   c) heavy small',
  '2  The paper bag is ___.   a) broken   b) crushed   c) torn',
  '3  The carton is crushed ___.   a) on one corner   b) very much   c) badly',
  '4  Say it with two numbers: ___ are crushed.   a) some   b) a few   c) two of the ten',
  '5  It was damaged before you touched it: it ___.   a) came like this   b) is coming   c) came',
  '6  I have not opened it. I ___ about the inside.   a) know   b) do not know   c) am knowing',
  '7  You have given the facts. You ask: ___   a) What do I do?   b) What I do?   c) What do I doing?',
  '8  Who writes the damage line?   a) the supervisor   b) the first man to see it   c) whoever has time',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 7.15** Listen. Write the answer.   **1** How many came: ______   **2** How many are bad: ______   **3** What is wrong: ______   **4** Where on it: ______   **5** Who else saw it: ______   **6** What the supervisor decided: ______'));
out.push(p('**C  Reading.** Read the damage sheet at 7.6 again. Which two lines were acted on? What did the two failed lines have in common?'));
out.push(p('**D  Writing.** Write four sentences to the office about damaged goods (**about 30 words**). Two numbers, that it came like that, a witness, and what you want.'));
out.push(...lines(4));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Samih', 'Abu Yasser. The Homs bags. Twelve came. Three are torn.'],
  ['Abu Yasser', 'Torn where?'],
  ['Samih', 'Along the top, all three on the same side of the pallet.'],
  ['Abu Yasser', 'Did they come like that?'],
  ['Samih', 'They came like this. I saw them on the van and I showed the driver at ten past eight.'],
  ['Abu Yasser', 'Good. Put the three aside, by the bench. The nine go on row two.'],
  ['Samih', 'And the three?'],
  ['Abu Yasser', 'Open one. If the bags inside are clean we keep all three and the office takes three off the invoice.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**7.1**  describe a thing with two words, in the right order, and say how many hands',
  '**7.2**  say what is wrong AND where on the thing',
  '**7.3**  say how many are bad out of how many came',
  '**7.4**  say it came like that, when I saw it, and who else saw it',
  '**7.5**  give the facts and then ask what to do — and ask _and if…?_',
  '**7.6**  write one line under fifteen words that somebody can act on',
  '**7.7**  write a damage note, and say why four witnesses are worse than one',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the damaged-goods unit.**',
  '**damage** — here it is a thing you describe. **At A2 you write a claim about it.**',
  '**crushed** — here it is one word about one corner. **At A2 it is one of five words in a condition report.**',
  '**condition** — here it is a column on a card. **At A2 you agree the condition of goods with a supplier in writing.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 7 · Student\'s Book');
module.exports = out;
