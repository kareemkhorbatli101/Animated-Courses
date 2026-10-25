// Proactive Business English A1 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'to count · carton · pallet · roll · packet · how many · a hundred · a thousand · digit · in words · count sheet · to recount · wrong · correct · the same · more · less · none · to check · total · empty · full';
const AHEAD_AT_A2 = 'carton · pallet · roll';

out.push(h1('Unit 2  Numbers, Boxes and the Count'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  say the numbers 0 to 20',
  '**2.2**  say the big numbers, up to a thousand',
  '**2.3**  say how many boxes, rolls and packets',
  '**2.4**  say what is on the shelf and what is not',
  '**2.5**  write a number down and read it back',
  '**2.6**  say that a count is wrong',
  '**2.7**  Review: the count sheet — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The number is the job', [
  '**A storeman counts.** That is most of the work. ⚠ **A number said once and not written down is a number that will be wrong by Thursday.**',
  '⚠ **In this unit you will say a number, write it, read it back, and check it.** **Four steps. Every time. All year.**',
], C.lyellow, C.orange));

// ======================= CYCLE 2.1 =======================
out.push(pb());
out.push(h2('2.1  One, two, three — how many?'));
out.push(p('**You can:** say the numbers 0 to 20   ·   **Grammar:** _How many…?_   ·   **Sound:** -teen'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Count to twenty with your teacher. Then count backwards from ten.'));
out.push(p('**b**  How many chairs are in this room? Say the number. **Write it** here: ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they counting?   **A** people   **B** cartons   **C** lorries'));
out.push(p('**b**  Listen again.   **1** How many on the pallet?   **2** How many on the floor?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.1  On the pallet and on the floor', [
  ['Abu Yasser', 'Ammar. Count the cartons on the pallet.'],
  ['Ammar', 'One, two, three… twelve. Twelve cartons.'],
  ['Abu Yasser', 'Twelve. And on the floor?'],
  ['Ammar', 'On the floor… six.'],
  ['Abu Yasser', 'Twelve and six. How many is that?'],
  ['Ammar', 'Eighteen.'],
  ['Abu Yasser', 'Eighteen. Good. Now say it again and point at them.'],
  ['Ammar', 'Twelve here. Six here. Eighteen.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The numbers 0 to 20**',
  table(['0 zero · 1 one · 2 two · 3 three · 4 four', '5 five · 6 six · 7 seven · 8 eight · 9 nine', '10 ten · 11 eleven · 12 twelve · 13 thirteen', '14 fourteen · 15 fifteen · 16 sixteen', '17 seventeen · 18 eighteen · 19 nineteen · 20 twenty'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**Asking:**  **How many** cartons? — Twelve.  ·  **How many** are on the floor? — Six.',
  '⚠ **_How many_ for things you can count:** cartons, rolls, people, days. **Not for water or paper.**',
  '**Practise:** Write the number in words.',
  '1 12 ______   2 18 ______   3 7 ______   4 15 ______   5 20 ______',
  '**Useful words:**  How many…?  ·  Count them.  ·  Point at them.  ·  Say it again.  ·  That is ______.',
  '**Sound — _-teen_.** 🔊 **Track 2.2** Listen. Say it. The loud part is at the **end**: thir-**TEEN** · four-**TEEN** · fif-**TEEN**. Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One person counts. One person asks. Then change places.'));
out.push(dlg(null, [
  ['A', 'Count the __________.'],
  ['B', 'One, two, three… __________. __________ __________.'],
  ['A', '__________. And __________?'],
  ['B', '__________.'],
  ['A', 'How many is that?'],
  ['B', '__________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['cartons on the pallet: 12 · on the floor: 6', 'rolls on the shelf: 9 · in the box: 4']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the three numbers you hear. Then show them.'));
out.push(PHRASE_CARD(['How many…?', 'Count them.', 'That is…', 'Point at them.', 'Say it again.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Count four things in this room. Say the number. **Write it** in words and in numbers.'));
out.push(table(['The thing', 'In numbers', 'In words'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There are ______ ______ in this room._'));
out.push(p('**Listener task:** write one number. Then count that thing yourself. Is it the same?'));
out.push(p('**Board clinic:** your teacher writes five numbers on the board in words. Two are wrong. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the count sheet. Then answer.'));
out.push(box(null, [
  '**COUNT — 5 MARCH — BACK STORE**',
  table(['Thing', 'Number'], [['cartons, pallet 1', '12'], ['cartons, floor', '6'], ['rolls, shelf 3', '9'], ['TOTAL cartons', '18']], [2, 1]),
], 'FFFFFF', C.navy));
out.push(item('1', 'How many cartons on pallet 1?'));
out.push(item('2', 'What is the total?'));
out.push(item('3', 'What is on shelf 3?'));
out.push(box('Writer\'s box', [
  '**A count sheet has four things:** the day → the place → the thing → the number.',
  '⚠ **One line, one thing, one number.** A line with two numbers on it is a line nobody can use.',
  '⚠ **Write the TOTAL at the bottom.** A sheet with no total is a sheet somebody must add up again.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a count sheet for your own work (**15 words or more**).'));
out.push(p('**COUNT — ______________ — ______________**   ______________ — ______   ______________ — ______   ______________ — ______   **TOTAL** — ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The day and the place at the top', ''],
  ['One thing and one number on each line', ''],
  ['A total at the bottom', ''],
  ['The total is right — add it up', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their total. The class adds up the lines. Is it the same?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about counting at your work (**20 to 35 words**). What do you count? How often? Who reads the number?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who reads that number?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many does somebody read the number? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** five things at your work and how many there are (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.2 =======================
out.push(pb());
out.push(h2('2.2  Twenty, fifty, three hundred'));
out.push(p('**You can:** say the big numbers   ·   **Grammar:** _hundred · and_   ·   **Sound:** -ty and -teen'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say these numbers: 20 · 30 · 40 · 50 · 60. Now say: 13 · 14 · 15 · 16.'));
out.push(p('**b**  What is the biggest number at your work? **Write it** here: ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the number on the board?   **A** 340   **B** 314   **C** 430'));
out.push(p('**b**  Listen again.   **1** How many cartons came today?   **2** What is the total in the store?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.3  Three hundred and forty', [
  ['Abu Yasser', 'The board says three hundred and forty. Say it.'],
  ['Ammar', 'Three hundred and forty.'],
  ['Abu Yasser', 'Good. Today ninety came in.'],
  ['Ammar', 'Ninety. Nine zero.'],
  ['Abu Yasser', 'Nine zero. Not nineteen. Three hundred and forty and ninety?'],
  ['Ammar', 'Four hundred and thirty.'],
  ['Abu Yasser', 'Four hundred and thirty. Write it on the board. Big.'],
  ['Ammar', 'Four, three, zero.'],
  ['Abu Yasser', 'And in words under it. Both. Always both.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The big numbers**',
  table(['', 'In numbers', 'In words'], [
    ['**tens**', '20 · 30 · 40 · 50', 'twenty · thirty · forty · fifty'],
    ['**hundreds**', '100 · 200 · 300', 'a hundred · two hundred · three hundred'],
    ['**and**', '340 · 905', 'three hundred **and** forty · nine hundred **and** five'],
    ['**thousand**', '1,000 · 2,500', 'a thousand · two thousand five hundred'],
  ], [1, 1.4, 2.6]),
  '⚠ **_hundred_ never takes an -s:** two hundred, not ~~two hundreds~~.',
  '⚠ **The word _and_ goes before the last part:** three hundred **and** forty.',
  '**Practise:** Write the number.',
  '1 three hundred and twelve ______   2 nine hundred ______   3 a thousand and five ______   4 forty ______',
  '**Useful words:**  a hundred  ·  a thousand  ·  and  ·  Say it.  ·  Write it big.  ·  Both.',
  '**Sound — -ty and -teen.** 🔊 **Track 2.4** Listen. **FOR**-ty (loud at the front) · four-**TEEN** (loud at the end). _Thirty — thirteen. Fifty — fifteen._ Say each pair four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', 'The board says __________. Say it.'],
  ['B', '__________.'],
  ['A', 'Good. Today __________ came in.'],
  ['B', '__________. Not __________.'],
  ['A', '__________ and __________?'],
  ['B', '__________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['340 · 90 · not 19 · 430', '560 · 70 · not 17 · 630']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the four numbers. Then show them. Count the right ones.'));
out.push(PHRASE_CARD(['a hundred', 'a thousand', '…and forty', 'Not nineteen.', 'Write it big.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say four big numbers from your work. Your partner **writes it**. Then **check it** together.'));
out.push(table(['I said', 'My partner wrote', 'Same? ✓ / ✗'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said ______ numbers. ______ were right. The hard one was ______._'));
out.push(p('**Listener task:** which numbers were hardest? Say the pair, e.g. _fifteen and fifty_.'));
out.push(p('**Board clinic:** your teacher says six big numbers. Write them. Then check them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the board in the store. Then answer.'));
out.push(box(null, [
  '**STORE BOARD — 5 MARCH**',
  '**IN TODAY:  90**   _(ninety)_',
  '**IN STORE:  430**   _(four hundred and thirty)_',
  '**OUT TODAY:  0**   _(none)_',
  '⚠ **Every number twice. Numbers and words. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many came in today?'));
out.push(item('2', 'How many went out?'));
out.push(item('3', 'Why is every number written twice?'));
out.push(box('Writer\'s box', [
  '**A store board has three lines:** in today → in store → out today. **And a total if there is one.**',
  '⚠ **Write every number twice: in numbers and in words.** _90 (ninety)._ **A number read from across the yard can be read wrong. Two forms cannot.**',
  '⚠ **Zero is a number. Write it.** An empty line means nobody counted. **0** means somebody did.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a store board for your own work (**15 words or more**).'));
out.push(p('**BOARD — ______________**   **IN TODAY:** ______  _(______________)_   **IN STORE:** ______  _(______________)_   **OUT TODAY:** ______  _(______________)_   **______** (your name)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Every number in numbers AND words', ''],
  ['Zero is written as 0, not left empty', ''],
  ['The day at the top', ''],
  ['A name at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says the number back. Is it the same?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a number that was wrong at your work (**20 to 35 words**). What was the number? What should it have been? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who wrote that number?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the number written only once? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four big numbers from your work, in numbers and in words (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.3 =======================
out.push(pb());
out.push(h2('2.3  One carton, two cartons, a packet of twenty'));
out.push(p('**You can:** say how many of a thing   ·   **Grammar:** _-s · a / an_   ·   **Sound:** the -s at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four things you count at your work. One of each, then many.'));
out.push(p('**b**  Read the four words. Which is big and which is small? _carton · pallet · roll · packet_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar get wrong?   **A** the number   **B** the word for the thing   **C** the shelf'));
out.push(p('**b**  Listen again.   **1** How many in a packet?   **2** How many packets in a carton?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.5  A packet is not a carton', [
  ['Ammar', 'Twenty on shelf two.'],
  ['Abu Yasser', 'Twenty what? Cartons? Packets?'],
  ['Ammar', 'Twenty… boxes.'],
  ['Abu Yasser', 'Come and look. This is a packet. Twenty in a packet.'],
  ['Ammar', 'And this big one?'],
  ['Abu Yasser', 'A carton. Ten packets in a carton. And this on the floor is a pallet.'],
  ['Ammar', 'So twenty packets, not twenty cartons.'],
  ['Abu Yasser', 'Twenty packets. Say the word with the number. Always.'],
  ['Ammar', 'Twenty packets on shelf two.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**One, and more than one**',
  table(['One', 'More than one', 'What it is here'], [
    ['**a** packet', 'two packet**s**', 'the small one — 20 inside'],
    ['**a** carton', 'three carton**s**', 'ten packets inside'],
    ['**a** roll', 'four roll**s**', 'tape, plastic'],
    ['**a** pallet', 'two pallet**s**', 'the wooden one on the floor'],
  ], [1.2, 1.4, 2.4]),
  '⚠ **More than one takes -s:** two cartons. **One takes _a_:** a carton.',
  '⚠ **_an_ before a, e, i, o, u:** **an** order, **an** empty shelf.',
  '⚠ **Say the WORD with the NUMBER.** _Twenty_ is not an answer. _Twenty packets_ is.',
  '**Practise:** Write _a_, _an_ or _-s_.',
  '1 ___ carton   2 three carton___   3 ___ empty pallet   4 ___ roll   5 nine roll___',
  '**Useful words:**  Twenty what?  ·  Come and look.  ·  …inside  ·  Say the word with the number.',
  '**Sound — the -s at the end.** 🔊 **Track 2.6** Listen. Say it. _cartons_ /z/ · _packets_ /s/ · _boxes_ /ɪz/. Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ on shelf __________.'],
  ['B', '__________ what?'],
  ['A', '__________ __________.'],
  ['B', 'How many in a __________?'],
  ['A', '__________.'],
  ['B', 'Say the word with the number.'],
]));
out.push(table(['Card 1', 'Card 2'], [['20 · shelf 2 · packets · 20 in a packet', '12 · shelf 5 · cartons · 10 packets in a carton']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the number AND the word. Both. Then show them.'));
out.push(PHRASE_CARD(['Twenty what?', 'Come and look.', '…inside', 'a packet', 'two cartons']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say four things at your work with the number and the word. Your partner **writes it**.'));
out.push(table(['Number', 'Word', 'Where'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There are ______ ______ on ______._'));
out.push(p('**Listener task:** did the speaker say the word with the number? Say _yes_ or _no_ after each one.'));
out.push(p('**Board clinic:** your teacher writes five lines on the board. Two have a number and no word. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the shelf card. Then answer.'));
out.push(box(null, [
  '**SHELF 2 — WHAT IS HERE**',
  '**Packets:** 20 in a packet.',
  '**Cartons:** 10 packets in a carton.',
  '**Pallet:** 40 cartons on a full pallet.',
  '⚠ **Say the word with the number. Twenty is not an answer.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many packets in a carton?'));
out.push(item('2', 'How many cartons on a full pallet?'));
out.push(item('3', 'Why is _twenty_ not an answer?'));
out.push(box('Writer\'s box', [
  '**A shelf card has three lines:** the small thing → the middle thing → the big thing. **And what is inside each one.**',
  '⚠ **Every line has a number AND a word.** _20 in a packet._ **Not** _20._',
  '⚠ **Put the card ON the shelf, not in the office.** A card in the office is a card for the office.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shelf card for your own work (**15 words or more**).'));
out.push(p('**SHELF ______ — WHAT IS HERE**   **______________:** ______ in a ______________.   **______________:** ______ ______________ in a ______________.   **______________:** ______ ______________ on a full ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A number AND a word on every line', ''],
  ['-s on more than one', ''],
  ['_a_ or _an_ on one', ''],
  ['Three lines: small, middle, big', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says what is inside. Is it clear?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the things you count at your work (**20 to 35 words**). What is the small one? What is the big one? How many inside?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How many in one?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many is the word said with the number every time? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four things at your work with the number and the word (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.4 =======================
out.push(pb());
out.push(h2('2.4  There are six on the shelf. There are none on the floor.'));
out.push(p('**You can:** say what is there and what is not   ·   **Grammar:** _there is · there are · none_   ·   **Sound:** _there are_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Look at the room. Say three things that are here. Say one thing that is not here.'));
out.push(p('**b**  Read the two lines. Which one helps the supervisor? _the shelf is not good · there are none on shelf four_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is on shelf four?   **A** six cartons   **B** nothing   **C** rolls'));
out.push(p('**b**  Listen again.   **1** What is on shelf three?   **2** What does Abu Yasser write down?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.7  None is a number', [
  ['Abu Yasser', 'Shelf three?'],
  ['Ammar', 'There are six cartons on shelf three.'],
  ['Abu Yasser', 'Shelf four?'],
  ['Ammar', 'Shelf four is… empty.'],
  ['Abu Yasser', 'Say it with a number.'],
  ['Ammar', 'There are none on shelf four. Zero.'],
  ['Abu Yasser', 'Good. None is a number. I write zero.'],
  ['Ammar', 'And if I say nothing about shelf four?'],
  ['Abu Yasser', 'Then I do not know if it is empty or if you did not look.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**There is, there are, there are none**',
  table(['', 'One', 'More than one', 'Zero'], [
    ['**+**', '**There is** a carton.', '**There are** six cartons.', '**There are none.**'],
    ['**–**', '**There is not** a carton.', '**There are not** any cartons.', '**Zero.**'],
    ['**?**', '**Is there** a carton?', '**Are there** any cartons?', '**How many are there?**'],
  ], [0.6, 1.8, 2, 1.6]),
  '⚠ **_there is_ for one. _there are_ for more than one.**',
  '⚠ **_none_ and _zero_ are numbers. _Empty_ is not.** **Say the number, and the supervisor knows you looked.**',
  '⚠ **Say nothing about a shelf, and nobody knows if it is empty or if you did not go.**',
  '**Practise:** Write _there is_, _there are_ or _there are none_.',
  '1 ______ a pallet by the door.   2 ______ nine rolls on shelf one.   3 Shelf six? ______.   4 ______ two lorries in the yard.',
  '**Useful words:**  There are six.  ·  There are none.  ·  Zero.  ·  It is empty.  ·  I looked.',
  '**Sound — _there are_.** 🔊 **Track 2.8** Listen. Say it. _There are_ → _there\'re_ /ðeərə/. _There are six on the shelf._ Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks about four shelves. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'Shelf __________?'],
  ['B', 'There are __________ __________ on shelf __________.'],
  ['A', 'Shelf __________?'],
  ['B', 'There are none on shelf __________. Zero.'],
  ['A', 'Shelf __________?'],
  ['B', 'There is __________ __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['shelf 3: 6 cartons · shelf 4: none · shelf 5: one pallet', 'shelf 1: 9 rolls · shelf 2: none · shelf 6: one packet']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the shelf and the number. Which shelf has none?'));
out.push(PHRASE_CARD(['There is…', 'There are…', 'There are none.', 'Zero.', 'I looked.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of four places at your work. Say what is there. **Write it.** One place must have none.'));
out.push(table(['The place', 'How many', 'The thing'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There are ______ ______ in ______. There are none in ______._'));
out.push(p('**Listener task:** which place had none? Write it down.'));
out.push(p('**Board clinic:** your teacher writes five lines. Two say _empty_ with no number. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the shelf check. Then answer.'));
out.push(box(null, [
  '**SHELF CHECK — BACK STORE — 6 MARCH**',
  table(['Shelf', 'How many', 'Thing'], [
    ['1', '9', 'rolls'],
    ['2', '0', '— none —'],
    ['3', '6', 'cartons'],
    ['4', '0', '— none —'],
    ['5', '1', 'pallet'],
  ], [1, 1.2, 2]),
  '⚠ **Every shelf has a line. A shelf with no line is a shelf nobody looked at.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which shelves have none?'));
out.push(item('2', 'What is on shelf five?'));
out.push(item('3', 'What does a shelf with no line mean?'));
out.push(box('Writer\'s box', [
  '**A shelf check has one line for every shelf** — **including the empty ones.**',
  '⚠ **Write 0 for an empty shelf.** **An empty line means nobody looked. A 0 means somebody did.** **That is the whole difference.**',
  '⚠ **Number the shelves in order: 1, 2, 3, 4, 5.** **A check that skips shelf 4 is a check with a hole in it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shelf check for your own work (**15 words or more**).'));
out.push(p('**SHELF CHECK — ______________ — ______________**   **1** — ______ — ______________   **2** — ______ — ______________   **3** — ______ — ______________   **4** — ______ — ______________   **5** — ______ — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A line for every shelf, in order', ''],
  ['0 on the empty ones, not a blank', ''],
  ['A thing on every line that is not 0', ''],
  ['The day and the place at the top', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their empty lines. The class says if a 0 is there.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that ran out (**20 to 35 words**). What was it? When did somebody see? Who said it first?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who said it first?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did somebody write the zero down? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six places at your work and how many things are in each — with 0 where there are none (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.5 =======================
out.push(pb());
out.push(h2('2.5  Say it, write it, read it back'));
out.push(p('**You can:** write a number down and read it back   ·   **Grammar:** _Is it ___ or ___?_   ·   **Sound:** reading a number back'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher says four numbers fast. **Write it.** Then **check it** with your partner.'));
out.push(p('**b**  Which numbers sound the same? Say them in pairs: _13 · 30 · 15 · 50 · 16 · 60_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What saves the order?   **A** Ammar reads the number back   **B** Fadi writes it down   **C** nothing'));
out.push(p('**b**  Listen again.   **1** What did Ammar hear first?   **2** What was the number?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.9  Sixty, not sixteen', [
  ['Fadi', 'Sixty cartons for Homs. On the lorry by eleven.'],
  ['Ammar', 'Sixteen cartons. By eleven.'],
  ['Fadi', 'No. Sixty.'],
  ['Ammar', 'Sixty or sixteen? Six zero, or one six?'],
  ['Fadi', 'Six zero. Sixty.'],
  ['Ammar', 'Six zero. I write it. Sixty cartons for Homs, on the lorry by eleven.'],
  ['Fadi', 'Correct. Read it back every time. Every time, Ammar.'],
  ['Ammar', 'Every time.'],
  ['Fadi', 'Sixteen cartons would be nine thousand pounds short.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Say it, write it, read it back**',
  table(['Step', 'What you do', 'What you say'], [
    ['**1 Say it**', 'the other person says the number', '—'],
    ['**2 Write it**', 'you write the digits', '—'],
    ['**3 Check it**', 'you ask about the two digits', '**Six zero, or one six?**'],
    ['**4 Read it back**', 'you say the whole thing again', '**Sixty cartons for Homs, by eleven.**'],
  ], [1.4, 2.4, 2.6]),
  '⚠ **Say the DIGITS when two numbers sound the same:** _six zero_, not _sixty_. **Digits cannot be heard wrong.**',
  '⚠ **Read the WHOLE thing back, not only the number** — the number, the thing, the place and the time.',
  '**Practise:** Write the digits.',
  '1 sixty ______   2 sixteen ______   3 fifteen ______   4 fifty ______   5 ninety ______',
  '**Useful words:**  Six zero, or one six?  ·  I write it.  ·  Read it back.  ·  Every time.  ·  Correct.',
  '**Sound — reading a number back.** 🔊 **Track 2.10** Listen. The voice goes **down** at the end, because it is not a question: _Sixty cartons for Homs, by eleven.↘_ Say it four times, going down.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A gives an order. B writes it and reads it back. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ __________ for __________. By __________.'],
  ['B', '__________ __________. By __________.'],
  ['A', 'No. __________.'],
  ['B', '__________ or __________? __________, or __________?'],
  ['A', '__________.'],
  ['B', 'I write it. __________ __________ for __________, by __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['60 cartons · Homs · 11 · not 16', '50 rolls · Hama · 9 · not 15']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the whole order: number, thing, place, time. Four things.'));
out.push(PHRASE_CARD(['Six zero, or one six?', 'I write it.', 'Read it back.', 'Every time.', 'Correct.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Give your partner four orders. They **write it** and read it back. **Check it** together.'));
out.push(table(['Number', 'Thing', 'Place', 'Time', 'Right? ✓ / ✗'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [0.8, 1.2, 1, 0.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I gave ______ orders. My partner read ______ back right. The hard one was ______._'));
out.push(p('**Listener task:** count the orders where all four things came back. Not three. Four.'));
out.push(p('**Board clinic:** your teacher gives four orders fast. Write all four things. Then check them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Ammar wrote. Then answer.'));
out.push(box(null, [
  '**ORDER — 6 MARCH — from Fadi**',
  '**60** _(six zero — NOT 16)_ **cartons**',
  '**For:** Homs',
  '**On the lorry by:** 11.00',
  '**Read back to Fadi:** ✓   **A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many cartons?'));
out.push(item('2', 'What time must they be on the lorry?'));
out.push(item('3', 'What does the tick mean?'));
out.push(box('Writer\'s box', [
  '**An order note has five things:** the number → the thing → where it goes → the time → and a tick to say you read it back.',
  '⚠ **The tick is the important one.** **It says somebody checked.** **Without it, nobody knows.**',
  '⚠ **Write the number in digits beside it** when it can be heard two ways: _60 (six zero — NOT 16)_.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an order note for your own work (**15 words or more**).'));
out.push(p('**ORDER — ______________ — from ______________**   **______** _(______ — NOT ______)_ **______________**   **For:** ______________   **By:** ______   **Read back:** ______   **______** (your name)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The number in digits as well', ''],
  ['Where it goes', ''],
  ['A time', ''],
  ['A tick to say it was read back', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their note aloud to a partner. The partner says it back. Is it the same?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an order you took at your work (**20 to 35 words**). Who gave it? What was the number? Did you read it back?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you read it back?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did somebody read the number back? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then take four numbers you heard at work this week and **write down** the digits of each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.6 =======================
out.push(pb());
out.push(h2('2.6  It is not twelve. It is nine.'));
out.push(p('**You can:** say that a count is wrong   ·   **Grammar:** _It is not ___. It is ___._   ·   **Sound:** the flat voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody counted wrong. What do you say? Say it in Arabic. Then in English.'));
out.push(p('**b**  Read the two lines. Which one is better at work? _you are wrong · it is not twelve, it is nine_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar do?   **A** says nothing   **B** counts again and says the new number   **C** telephones the office'));
out.push(p('**b**  Listen again.   **1** What was on the sheet?   **2** What is the real number?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.11  I counted again', [
  ['Ammar', 'Abu Yasser. The sheet says twelve on shelf three.'],
  ['Abu Yasser', 'Twelve. Yes.'],
  ['Ammar', 'It is not twelve. It is nine. I counted again.'],
  ['Abu Yasser', 'You counted twice?'],
  ['Ammar', 'Twice. Nine both times.'],
  ['Abu Yasser', 'Then it is nine. Who wrote twelve?'],
  ['Ammar', 'I do not know. The sheet is from Monday.'],
  ['Abu Yasser', 'Good. You did not say who. You said the number.'],
  ['Ammar', 'I write nine, and today\'s date.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying a number is wrong**',
  table(['Do not say', 'Say'], [
    ['~~You are wrong.~~', '**It is not twelve. It is nine.**'],
    ['~~Somebody counted badly.~~', '**I counted again. Nine both times.**'],
    ['~~The sheet is bad.~~', '**The sheet says twelve. I counted nine.**'],
  ], [2, 3]),
  '⚠ **Talk about the NUMBER, not about the person.** **A number can be changed. A person cannot, and will argue.**',
  '⚠ **Say that you counted TWICE.** **One count is a count. Two counts is a fact.**',
  '**Practise:** Make the sentence better.',
  '1 You are wrong. → ______________   2 Somebody counted badly. → ______________   3 This sheet is no good. → ______________',
  '**Useful words:**  It is not ___, it is ___.  ·  I counted again.  ·  Twice.  ·  both times  ·  I do not know who.',
  '**Sound — the flat voice.** 🔊 **Track 2.12** Listen. _It is not twelve. It is nine._ **Flat, both sentences.** A voice that goes up sounds angry. Say it four times, flat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the sheet. B counted again. Then change places.'));
out.push(dlg(null, [
  ['A', 'The sheet says __________ on __________.'],
  ['B', 'It is not __________. It is __________. I counted again.'],
  ['A', 'You counted twice?'],
  ['B', 'Twice. __________ both times.'],
  ['A', 'Who wrote __________?'],
  ['B', 'I do not know.'],
]));
out.push(table(['Card 1', 'Card 2'], [['12 on shelf 3 · really 9', '40 on pallet 2 · really 36']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker name a person? Say _yes_ or _no_. The answer should be no.'));
out.push(PHRASE_CARD(['It is not…, it is…', 'I counted again.', 'Twice.', 'both times', 'I do not know who.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of two numbers at your work that were wrong. Tell your partner. **Write it** without naming anybody.'));
out.push(table(['What the paper said', 'What it really was', 'How many times I counted'], [['', '', ''], ['', '', '']], [1.6, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The sheet said ______. It is not ______, it is ______. I counted ______ times._'));
out.push(p('**Listener task:** count the reports that named a person. **The good number is zero.**'));
out.push(p('**Board clinic:** your teacher writes four lines. Two name a person. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Ammar wrote on the sheet. Then answer.'));
out.push(box(null, [
  '**COUNT SHEET — MONDAY 4 MARCH — BACK STORE**',
  table(['Shelf', 'Monday', 'Counted again', 'Day'], [
    ['3', '12', '**9**', '6 March'],
    ['4', '0', '0', '6 March'],
    ['5', '1 pallet', '1 pallet', '6 March'],
  ], [1, 1.2, 1.4, 1.2]),
  '⚠ **Counted twice. Nine both times. A.Z. 6 March.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did Monday\'s sheet say for shelf 3?'));
out.push(item('2', 'What is the number now?'));
out.push(item('3', 'How many times did Ammar count?'));
out.push(box('Writer\'s box', [
  '**When you change a number on a sheet, write four things:** the old number → the new number → the day → your name.',
  '⚠ **Do not rub out the old number.** **Leave it and write the new one beside it.** **A number that was changed once can be changed again, and somebody will want to see both.**',
  '⚠ **Write _counted twice_.** **Those two words are why the supervisor will believe the new number.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a changed count for your own work (**15 words or more**).'));
out.push(p('**COUNT SHEET — ______________ — ______________**   **______________** — old: ______ — **new: ______** — ______________   **Counted twice. ______________ both times. ______** (your name) ______________ (the day)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The old number is still there', ''],
  ['The new number is beside it', ''],
  ['_counted twice_ is written', ''],
  ['A name and a day', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their line. The class says if the old number can still be seen.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a count that was wrong (**20 to 35 words**). What did the paper say? What was it really? What did you do?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you count twice?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the writer name a person? **The good number is none.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** one number at your work you are not sure about, and count it twice (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review: the count sheet'));
out.push(p('⚠ **This is the second unit of this book.** Six things about numbers, and now a problem for the class to talk about together.'));
out.push(p('**You can:** read a count sheet   ·   **Review:** Units 2.1 to 2.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**2.1**  Count the chairs. How many?', ''],
  ['**2.2**  Say 340 and 905.', ''],
  ['**2.3**  Say the number AND the word for four things here.', ''],
  ['**2.4**  Say what is on an empty shelf.', ''],
  ['**2.5**  Somebody says 60. What do you ask?', ''],
  ['**2.6**  The sheet is wrong. What do you say?', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why are the two counts different?   **A** one man cannot count   **B** they counted different things   **C** the sheet is old'));
out.push(p('**b**  Listen again.   **1** What did Ammar count?   **2** What did Samih count?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 2.13  Two men, two numbers', [
  ['Abu Yasser', 'Ammar says nine. Samih says twelve. Shelf three.'],
  ['Ammar', 'I counted twice. Nine.'],
  ['Samih', 'I counted twice too. Twelve.'],
  ['Abu Yasser', 'Two men, two counts, and both men counted twice.'],
  ['Ammar', 'I counted the cartons on the shelf.'],
  ['Samih', 'I counted the cartons on the shelf and the three on the floor under it.'],
  ['Ammar', 'The three on the floor are not on the shelf.'],
  ['Samih', 'They came off the shelf this morning. They go back tonight.'],
  ['Abu Yasser', 'So nobody is wrong. The sheet does not say what to count.'],
  ['Ammar', 'Nine on the shelf. Three on the floor. Twelve in the place.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**2.1**', '_Twelve cartons. Six on the floor. Eighteen._'],
    ['**2.2**', '_Three hundred and forty. Write it big. In numbers and in words._'],
    ['**2.3**', '_Twenty packets, not twenty. Say the word with the number._'],
    ['**2.4**', '_There are six on shelf three. There are none on shelf four._'],
    ['**2.5**', '_Six zero, or one six? I write it. I read it back._'],
    ['**2.6**', '_It is not twelve. It is nine. I counted twice._'],
  ], [1, 5]),
  '⚠ **The new thing here: two careful men can get two different numbers and neither is wrong.** **The problem is the sheet, which does not say WHAT to count.**',
  '**Useful words:**  on the shelf  ·  under it  ·  in the place  ·  what to count  ·  Nobody is wrong.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Ammar. One is Samih. Say why your number is right.'));
out.push(table(['Ammar says', 'Samih says'], [[
  'I counted the cartons **on the shelf**. Nine. ⚠ **Twice.**',
  'I counted the cartons **in the place** — on the shelf and the three under it. Twelve. ⚠ **Twice.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something at your work that two people would count differently. Tell your partner. **Write it.**'));
out.push(table(['The thing', 'One way to count it', 'The other way'], [['', '', ''], ['', '', '']], [1.4, 1.6, 1.6]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Ammar counted nine. Samih counted twelve. Both men counted twice. The sheet says _shelf 3_ and nothing else.'));
out.push(table(['Ammar is right', 'Samih is right', 'So we do this'], [[
  'Nine are **on the shelf**. ⚠ **The sheet says shelf.**',
  'Twelve are **in the place**. ⚠ **The three on the floor came off that shelf this morning.**',
  '⚠ **The sheet gets a new line: _on the shelf_ and _on the floor_, counted apart.** **Nine and three. Twelve in the place.** From Monday.',
]], [1, 1, 1.2]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _the sheet does not say what to count_. **The men were both careful. The paper was not.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _COUNT TWICE — WRITE BOTH_   **A** Count once.   **B** Count two times and write both numbers.   **C** Do not count.',
  '**2**  _0 = COUNTED. BLANK = NOT COUNTED._   **A** A blank means none.   **B** A blank means nobody looked.   **C** A blank means zero.',
  '**3**  _SAY THE WORD WITH THE NUMBER_   **A** Say only the number.   **B** Say the number and the thing.   **C** Say nothing.',
  '**4**  _60 (SIX ZERO — NOT 16)_   **A** Sixteen.   **B** Six.   **C** Sixty.',
  '**5**  _TOTAL AT THE BOTTOM OF EVERY SHEET_   **A** Put a total at the bottom.   **B** Put a total at the top.   **C** No total.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words. Three things, all three there.**',
  '⚠ **In a message about a number, the number goes in the FIRST sentence.** The reader may read no further.',
  '⚠ **Write the digits beside a number that can be heard two ways.** _60 (six zero)._',
  '**The shape:** who it is to → the number → where and when → what the reader must do.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to a colleague about a count (**four sentences, about 30 words**). Say the number, the place, the day, and one thing they must do.'));
out.push(p('**To:** ______________   _There are ______ ______________ on ______________. I counted twice. The sheet says ______. Please ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message about a number that is wrong at your work (**four sentences, about 30 words**). Say the number on the paper, the real number, that you counted twice, and what the reader must do.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **answer** your colleague would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  ___ many cartons?   a) How   b) What   c) Who',
  '2  Three ___ and forty.   a) hundreds   b) hundred   c) hundreded',
  '3  There ___ six cartons on shelf three.   a) is   b) are   c) am',
  '4  Shelf four? There are ___.   a) empty   b) nothing   c) none',
  '5  Two ___ on the floor.   a) pallet   b) pallets   c) palletes',
  '6  It is not twelve. It ___ nine.   a) is   b) are   c) be',
  '7  Is it sixty ___ sixteen?   a) and   b) or   c) but',
  '8  I counted ___ . Nine both times.   a) two   b) twice   c) second',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 2.15** Listen. Write the answer.   **1** How many cartons: ______   **2** For which city: ______   **3** The time: ______   **4** The digits he says: ______   **5** How many on shelf four: ______   **6** What he writes at the end: ______'));
out.push(p('**C  Reading.** Read the shelf check at 2.4 again. Which shelves have none? What is on shelf five? What does a blank line mean?'));
out.push(p('**D  Writing.** Write four sentences about a count at your work (**about 30 words**). The number, the place, that you counted twice, and what somebody must do.'));
out.push(...lines(4));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Fadi', 'Seventy cartons for Hama. On the lorry by ten.'],
  ['Ammar', 'Seventy or seventeen? Seven zero, or one seven?'],
  ['Fadi', 'Seven zero. Seventy.'],
  ['Ammar', 'Seven zero. I write it. Seventy cartons for Hama, by ten.'],
  ['Fadi', 'Correct. And shelf four?'],
  ['Ammar', 'There are none on shelf four. Zero. I looked twice.'],
  ['Fadi', 'Write the zero.'],
  ['Ammar', 'I write the zero, and my name.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**2.1**  count to twenty and say how many',
  '**2.2**  say and write the big numbers, in numbers and in words',
  '**2.3**  say the word with the number',
  '**2.4**  say there are none, and write the zero',
  '**2.5**  write a number down and read the whole thing back',
  '**2.6**  say a count is wrong without naming anybody',
  '**2.7**  read a count sheet, and say why two careful men got two numbers',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the stock and orders unit.**',
  '**carton** — here you count them. **At A2 you write the number of them in an order to a supplier.**',
  '**pallet** — here it is the wooden thing on the floor. **At A2 it is a quantity on an invoice.**',
  '**roll** — here you count rolls of tape. **At A2 you ask a supplier how much a roll costs.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
module.exports = out;
