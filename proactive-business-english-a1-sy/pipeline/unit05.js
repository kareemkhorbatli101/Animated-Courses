// Proactive Business English A1 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'delivery note · date · signature · to sign · month · January · March · box · unit · quantity · to copy · missing · paper · to agree · driver · lorry · goods · to receive · a line · to tick · stamp · to compare';
const AHEAD_AT_A2 = 'delivery note · driver · lorry';

out.push(h1('Unit 5  The Delivery Note'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  name the four things on every delivery note',
  '**5.2**  read a date, and not read it the wrong way round',
  '**5.3**  read a quantity and its unit',
  '**5.4**  sign — and know what you have agreed to',
  '**5.5**  copy a number without changing it',
  '**5.6**  say a paper is missing',
  '**5.7**  Review: a real delivery note — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ This is the unit the course was built for', [
  '**A delivery note is the one piece of English that arrives at the gate whether you can read it or not.** ⚠ **It has a number on it, and the number is money.**',
  '⚠ **Four units have been getting you ready for this one.** **Unit 1 was your name. Unit 2 was the count. Unit 3 was the day. Unit 4 was the place.** **A delivery note is all four on one piece of paper, and at the bottom there is a line for you to sign.**',
], C.lyellow, C.orange));

// ======================= CYCLE 5.1 =======================
out.push(pb());
out.push(h2('5.1  Name, date, number, signature'));
out.push(p('**You can:** name the four things on every note   ·   **Grammar:** the four words   ·   **Sound:** the four, said in order'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you ever signed a paper you could not read? **Say it** in Arabic. Your teacher writes the English.'));
out.push(p('**b**  Look at any paper on your table. Find a name and a date. Point at them.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things must Ammar look at?   **A** two   **B** four   **C** six'));
out.push(p('**b**  Listen again.   **1** Which one does Nour say is the dangerous one?   **2** What is at the bottom of the paper?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.1  Four things, every time', [
  ['Nour', 'Ammar. This is a delivery note. Look at it.'],
  ['Ammar', 'It is all English.'],
  ['Nour', 'Four things. Only four. The name at the top. The date. The quantity. And the line at the bottom.'],
  ['Ammar', 'The name at the top is the company?'],
  ['Nour', 'The company that sent the goods. The date is when they sent them.'],
  ['Ammar', 'And the quantity is how many.'],
  ['Nour', 'How many, and of what. Twelve boxes, not twelve.'],
  ['Ammar', 'And the line at the bottom?'],
  ['Nour', 'That is for your signature. That is the dangerous one.'],
  ['Ammar', 'Why dangerous?'],
  ['Nour', 'Because when you sign it, you have said the other three are correct.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four things, every time, in this order**',
  table(['', 'The thing', 'Where it is', 'What it tells you'], [
    ['**1**', '**the name**', 'at the top', 'who sent the goods'],
    ['**2**', '**the date**', 'under the name', 'when they sent them'],
    ['**3**', '**the quantity**', 'in the middle', 'how many, and of what'],
    ['**4**', '**the signature**', 'at the bottom', '⚠ **that YOU say 1, 2 and 3 are correct**'],
  ], [0.5, 1.4, 1.4, 3]),
  '⚠ **Look at all four before you touch a pen.** **Always in this order.** **Top, date, middle, bottom.**',
  '⚠ **The fourth one is not a formality.** **A signature is a sentence: _I have checked the other three and they are right._** **You say that sentence without writing it, and you cannot take it back.**',
  '**Practise:** Write the number 1, 2, 3 or 4.',
  '1 Where is the date? ______   2 What says who sent the goods? ______   3 What is at the bottom? ______   4 What tells you how many? ______',
  '**Useful words:**  a delivery note  ·  the name at the top  ·  the date  ·  the quantity  ·  the line at the bottom',
  '**Sound — the four, said in order.** 🔊 **Track 5.2** Listen. Say it. _Name. Date. Quantity. Signature._ **Four words, four stops.** **Say them every time you pick up a note, under your breath.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One has the note. One asks. Then change places.'));
out.push(dlg(null, [
  ['A', 'This is a delivery note. Look at it.'],
  ['B', 'It is all English.'],
  ['A', 'Four things. The __________ at the top. The __________. The __________. And the __________.'],
  ['B', 'And the line at the bottom?'],
  ['A', 'That is for your __________. That is the dangerous one.'],
  ['B', 'Why dangerous?'],
  ['A', 'Because when you sign it, you have said the other three are __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['name · date · quantity · line · signature · correct', 'company · day · number · space · name · right']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the four things, in order. Four words.'));
out.push(PHRASE_CARD(['a delivery note', 'the name at the top', 'the date', 'the quantity', 'the line at the bottom']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find a real paper from your work, or draw one. Find the four things. **Write it.**'));
out.push(table(['', 'What it says on my paper'], [['**1 the name**', ''], ['**2 the date**', ''], ['**3 the quantity**', ''], ['**4 the signature line**', '']], [1.4, 4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My paper says ______ at the top. The date is ______. The quantity is ______. The line is ______._'));
out.push(p('**Listener task:** did everybody find all four? Count the papers that were missing one.'));
out.push(p('**Board clinic:** your teacher draws a note with one thing missing. The class says which one.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour put on the wall. Then answer.'));
out.push(box(null, [
  '**BEFORE YOU SIGN ANYTHING — FOUR THINGS**',
  '**1 The name at the top.** Is it a company you know?',
  '**2 The date.** Is it today, or a week ago?',
  '**3 The quantity.** Did you count it yourself?',
  '**4 The line at the bottom.** ⚠ **Your signature says 1, 2 and 3 are correct.**',
  '⚠ **If you have not counted it, do not sign it. Say: I have not counted it yet. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does your signature say?'));
out.push(item('2', 'What do you say if you have not counted?'));
out.push(item('3', 'Which of the four is a question about the past?'));
out.push(box('Writer\'s box', [
  '**A before-you-sign list has four numbered lines and one escape line.**',
  '⚠ **Every line is a QUESTION, not an instruction.** _Is it today?_ **A question makes the reader look at the paper. An instruction lets him nod.**',
  '⚠ **The escape line is the most useful line on the page:** _I have not counted it yet._ **Six words that stop a signature.** **Without it the list is advice; with it the list is a thing you can do while a driver waits.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a before-you-sign list for your own work (**15 words or more**).'));
out.push(p('**BEFORE YOU SIGN — ______________**   **1** ______________?   **2** ______________?   **3** ______________?   **4** ______________?   ⚠ **If ______________, say: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Four numbered lines', ''],
  ['Every line is a question', ''],
  ['An escape line at the end', ''],
  ['The escape line is something you can SAY', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their escape line. The class says if they could say it to a driver who is in a hurry.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a paper you sign at work (**20 to 35 words**). What is on it? Do you read it? What happens if it is wrong?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Have you ever signed something you had not checked?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many people have signed something they had not checked? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the four things from a real paper at your work (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.2 =======================
out.push(pb());
out.push(h2('5.2  4 March, not 3 April'));
out.push(p('**You can:** read a date   ·   **Grammar:** the months; _4 March · 04/03_   ·   **Sound:** the month, loud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the twelve months with your teacher. Start with January.'));
out.push(p('**b**  What is today\'s date? **Write it** three ways: ______________  ·  ______  ·  ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the date on the note?   **A** 3 April   **B** 4 March   **C** 4 April'));
out.push(p('**b**  Listen again.   **1** Which country writes the month first?   **2** What does Nour tell Ammar to write?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.3  Which number is the month?', [
  ['Ammar', 'The date says 04/03. Is that the fourth of March?'],
  ['Nour', 'Here, yes. Day first, then month. 04/03 is the fourth of March.'],
  ['Ammar', 'And somewhere else?'],
  ['Nour', 'In America the month is first. 04/03 there is the third of April.'],
  ['Ammar', 'The same six numbers. A different month.'],
  ['Nour', 'The same six numbers. And this note came from a company in Beirut, so it is the fourth of March.'],
  ['Ammar', 'How do I know it is Beirut?'],
  ['Nour', 'The name at the top. Thing number one. You looked at it, I hope.'],
  ['Ammar', 'I looked at it.'],
  ['Nour', 'Then write the month in letters on your own sheet. 4 March. Then nobody can read it two ways.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The months, and the date**',
  table(['', '', '', ''], [
    ['**January**', '**February**', '**March**', '**April**'],
    ['**May**', '**June**', '**July**', '**August**'],
    ['**September**', '**October**', '**November**', '**December**'],
  ], [1, 1, 1, 1]),
  '⚠ **Three ways to write the same day, and only one of them is safe:**',
  table(['How it is written', 'Safe?'], [
    ['**4 March** · **4 March 2026**', '⚠ **SAFE — the month is in letters and cannot be read two ways**'],
    ['**04/03**', '**NOT safe — day first here, month first in some countries**'],
    ['**4/3/26**', '**NOT safe — and the year is short too**'],
  ], [2, 3.4]),
  '⚠ **On a note you RECEIVE, work out which way it is from the name at the top.** **On a sheet you WRITE, put the month in letters. Always.**',
  '⚠ **A big letter on every month:** **M**arch, not ~~march~~. **Same rule as the days in 3.1.**',
  '**Practise:** Write the date in letters.',
  '1 04/03 _(from Beirut)_ = ______________   2 12/01 _(from Aleppo)_ = ______________   3 Write today in letters: ______________',
  '**Useful words:**  4 March  ·  the month in letters  ·  day first  ·  month first  ·  two ways',
  '**Sound — the month, loud.** 🔊 **Track 5.4** Listen. Say it. _four MARCH · twelve JANUARY._ **The month is the loud part, because the month is the part that goes wrong.** Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'The date says __________. Is that the __________?'],
  ['B', 'Here, yes. __________ first, then __________.'],
  ['A', 'And somewhere else?'],
  ['B', 'In __________ the __________ is first. It would be the __________.'],
  ['A', 'The same six numbers. A different month.'],
  ['B', 'Write the month in __________ on your own sheet.'],
]));
out.push(table(['Card 1', 'Card 2'], [['04/03 · fourth of March · day · month · America · third of April · letters', '11/09 · eleventh of September · day · month · America · ninth of November · letters']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the two dates the six numbers could mean. Two dates.'));
out.push(PHRASE_CARD(['4 March', 'the month in letters', 'day first', 'month first', 'two ways']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write four dates from your life in numbers. Give them to your partner. They write them in letters.'));
out.push(table(['In numbers', 'In letters'], [['', ''], ['', ''], ['', ''], ['', '']], [1.6, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My partner wrote ______. In letters that is ______. It could also be ______._'));
out.push(p('**Listener task:** which dates could be read two ways? Which could not? **Any day after the twelfth can only be read one way — say why.**'));
out.push(p('**Board clinic:** your teacher writes four dates. Two have a small letter on the month. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the top of the real note. Then answer.'));
out.push(box(null, [
  '**BEIRUT PACKAGING CO.**',
  '**Delivery note no. 4417**',
  '**Date:** 04/03/2026',
  '**To:** Sham Trading, Damascus',
  '**Received by:** ________________________   **Date received:** ________________',
  '⚠ **Written on the back in pencil, by Nour:** _04/03 = 4 March. Beirut. Day first._',
], 'FFFFFF', C.navy));
out.push(item('1', 'What date did the company send the goods?'));
out.push(item('2', 'Why did Nour write on the back?'));
out.push(item('3', 'What two things are empty on this note?'));
out.push(box('Writer\'s box', [
  '**When you receive a note with a number date, write the letter date on it yourself** — **in pencil, on the back or beside it.**',
  '⚠ **Write WHY as well:** _Beirut. Day first._ **Three words that tell the next reader how you worked it out, so he does not have to work it out again** — **or work it out differently.**',
  '⚠ **Fill in BOTH empty lines.** _Received by_ **and** _Date received_. **A note signed with no date received is a note that says you agreed, and does not say when.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the top of a delivery note for your own work, and fill in the two empty lines (**15 words or more**).'));
out.push(p('**______________** _(company)_   **Delivery note no.** ______   **Date:** ______________   **To:** ______________   **Received by:** ______________   **Date received:** ______________   ⚠ **In pencil:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The month in letters somewhere on the page', ''],
  ['_Received by_ filled in', ''],
  ['_Date received_ filled in', ''],
  ['The pencil note saying how you read the date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their pencil note. The class says if they could follow the reasoning.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about dates at your work (**20 to 35 words**). How are they written? Has a date ever been read the wrong way? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Which way does your company write them?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many companies write the month in letters? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six dates from your work in letters (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.3 =======================
out.push(pb());
out.push(h2('5.3  Twelve boxes, not twelve'));
out.push(p('**You can:** read a quantity and its unit   ·   **Grammar:** number + noun   ·   **Sound:** the unit at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say five quantities from your work. A number and a thing. _Three pallets. Twelve boxes._'));
out.push(p('**b**  Read the two lines. Which one can you count? _12 · 12 boxes_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What came off the lorry?   **A** 12 boxes   **B** 12 pallets   **C** 12 boxes on 3 pallets'));
out.push(p('**b**  Listen again.   **1** How many boxes on a pallet?   **2** What does Ammar count?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.5  Twelve of what?', [
  ['Driver', 'Twelve. Sign here.'],
  ['Ammar', 'Twelve what?'],
  ['Driver', 'It says twelve on the paper.'],
  ['Ammar', 'It says 12. Twelve boxes, or twelve pallets?'],
  ['Driver', 'Boxes. Twelve boxes. Three pallets, four boxes on each.'],
  ['Ammar', 'Then the paper should say twelve boxes.'],
  ['Driver', 'Everybody knows it is boxes.'],
  ['Ammar', 'I am new. I do not know it is boxes. I count twelve boxes.'],
  ['Driver', 'Count them, then. I have four more stops.'],
  ['Ammar', 'Four more stops is not my problem. Twelve boxes is my problem.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**A number is not a quantity until it has a unit**',
  table(['Not enough', 'A quantity'], [
    ['**12**', '**12 boxes**'],
    ['**3**', '**3 pallets**'],
    ['**1**', '**1 roll**'],
    ['**200**', '**200 packets**'],
  ], [1.6, 3.4]),
  '⚠ **The unit goes AFTER the number, and it takes an -s for more than one:** **12 box**es**. 3 pallet**s**.** **One: _1 roll_, no -s.**',
  '⚠ **The same twelve can be boxes or pallets, and the difference is thirty-six boxes.** **This is the most expensive missing word in the course.** **Ask. Every time.**',
  '⚠ **And the sentence that gets you the answer:** _Twelve what?_ **Two words. Not rude. Ask them.**',
  '**Practise:** Write the quantity.',
  '1 three _(pallets)_ = ______________   2 one _(roll)_ = ______________   3 two hundred _(packets)_ = ______________   4 twelve _(box)_ = ______________',
  '**Useful words:**  Twelve what?  ·  12 boxes  ·  3 pallets  ·  four on each  ·  I count…',
  '**Sound — the unit at the end.** 🔊 **Track 5.6** Listen. Say it. _twelve BOXES · three PALLETS._ **The unit is the loud part, because the unit is the part people leave out.** Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the driver. One is the storeman. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. Sign here.'],
  ['B', '__________ what?'],
  ['A', 'It says __________ on the paper.'],
  ['B', '__________ __________, or __________ __________?'],
  ['A', '__________. __________ __________, __________ on each.'],
  ['B', 'Then the paper should say __________ __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['twelve · boxes · pallets · three pallets · four on each', 'two hundred · packets · cartons · ten cartons · twenty on each']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write what the paper said and what the lorry actually had. Two answers.'));
out.push(PHRASE_CARD(['Twelve what?', '12 boxes', '3 pallets', 'four on each', 'I count…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say six quantities from your work. **Write it** with the unit every time.'));
out.push(table(['Number', 'Unit', 'In a sentence'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [0.8, 1.2, 3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We get ______ ______ every week. They come on ______ ______, ______ on each._'));
out.push(p('**Listener task:** did everybody say a unit? Count the reports with a bare number.'));
out.push(p('**Board clinic:** your teacher writes six quantities. Three have no unit. The class asks _______ what?_ for each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the middle of the real note. Then answer.'));
out.push(box(null, [
  '**BEIRUT PACKAGING CO. — note no. 4417**',
  table(['Line', 'Goods', 'Quantity', 'Unit'], [
    ['**1**', 'labels, white', '**12**', '**boxes**'],
    ['**2**', 'labels, yellow', '**4**', '**boxes**'],
    ['**3**', 'tape', '**6**', '**rolls**'],
    ['**4**', 'bags', '**200**', '**packets**'],
  ], [0.7, 2, 1, 1.2]),
  '**Total lines: 4.** ⚠ **Total boxes: 16. Count the boxes, not the lines.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many rolls of tape?'));
out.push(item('2', 'How many boxes of labels altogether?'));
out.push(item('3', 'Why does the note say _count the boxes, not the lines_?'));
out.push(box('Writer\'s box', [
  '**A quantity line has three parts:** the goods → the number → **the unit**, in three separate columns.',
  '⚠ **Separate columns, not one box.** **_12 boxes_ in one column can be read as a quantity of twelve-boxes.** **Two columns cannot be misread.**',
  '⚠ **Put the total at the bottom, and say WHICH total.** _Total lines: 4. Total boxes: 16._ **A note that says _total: 4_ has told you about its own layout, not about the lorry.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the goods lines of a delivery note for your own work (**15 words or more**).'));
out.push(table(['Line', 'Goods', 'Quantity', 'Unit'], [
  ['**1**', '', '', ''],
  ['**2**', '', '', ''],
  ['**3**', '', '', ''],
  ['**4**', '', '', ''],
], [0.7, 2, 1, 1.2]));
out.push(p('**Total lines:** ______   ⚠ **Total ______________:** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A unit on every line', ''],
  ['The number and the unit in separate columns', ''],
  ['A total that names what it is counting', ''],
  ['An -s on the unit where there is more than one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class asks _______ what?_ if the unit is missing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the quantities at your work (**20 to 35 words**). What unit do you count in? Has a number ever been counted in the wrong unit? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How many in one of those?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many different units does this class count in? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** eight quantities from your work, with the unit on every one (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.4 =======================
out.push(pb());
out.push(h2('5.4  Sign here — and what you have just said'));
out.push(p('**You can:** sign, and know what you agreed to   ·   **Grammar:** _Sign here · I signed it_   ·   **Sound:** the slow refusal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A driver says _sign here_ and you have not counted. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which one can you say to a driver in a hurry? _No · I have not counted it yet. Two minutes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Ammar sign?   **A** yes   **B** no   **C** yes, after he counts'));
out.push(p('**b**  Listen again.   **1** How long does he ask for?   **2** What does he write next to his name?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.7  Two minutes', [
  ['Driver', 'Sign here. I am late.'],
  ['Ammar', 'I have not counted it yet. Two minutes.'],
  ['Driver', 'Two minutes. Everybody says two minutes.'],
  ['Ammar', 'Two minutes. Sixteen boxes. One, two, three…'],
  ['Driver', 'And?'],
  ['Ammar', 'Fifteen. Fifteen boxes, not sixteen.'],
  ['Driver', 'Then write fifteen and sign it.'],
  ['Ammar', 'I write fifteen. I sign it. And I write _one box short_ next to my name.'],
  ['Driver', 'You are the first man this month who counted.'],
  ['Ammar', 'I am the first man this month who will not pay for a box he did not get.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Signing**',
  table(['The step', 'What you say or write'], [
    ['**1 they ask**', '_Sign here._'],
    ['**2 you are not ready**', '⚠ **_I have not counted it yet. Two minutes._**'],
    ['**3 you count**', '_One, two, three… fifteen._'],
    ['**4 it is wrong**', '**_Fifteen, not sixteen._** **Write the real number.**'],
    ['**5 you sign**', '**_I signed it_** — **and write WHY beside your name:** _one box short_.'],
  ], [1.6, 3.4]),
  '⚠ **_I have not counted it yet_ is the most useful sentence in this book.** **It is not _no_. It is _not yet_, and it comes with a number of minutes.** **Nobody argues with two minutes.**',
  '⚠ **If the number is wrong, you still sign** — **but you sign the REAL number and you write why.** **A refusal to sign leaves the yard with a lorry and no paper. A signature with _one box short_ beside it leaves the yard with the truth.**',
  '**Practise:** Write the line.',
  '1 The driver is in a hurry and you have not counted. ______________.   2 The paper says 16 and you counted 15. ______________.   3 You sign. What do you write beside your name? ______________.',
  '**Useful words:**  Sign here.  ·  I have not counted it yet.  ·  Two minutes.  ·  fifteen, not sixteen  ·  one box short',
  '**Sound — the slow refusal.** 🔊 **Track 5.8** Listen. _I have not counted it yet.↘ Two minutes.↘_ **Slow and flat. No apology.** **Said fast it sounds like an excuse; said slowly it sounds like a job being done.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the driver, in a hurry. One is the storeman. Then change places.'));
out.push(dlg(null, [
  ['A', 'Sign here. I am late.'],
  ['B', 'I have not counted it yet. __________ minutes.'],
  ['A', '__________ minutes. Everybody says __________ minutes.'],
  ['B', '__________ minutes. __________ __________. One, two, three…'],
  ['A', 'And?'],
  ['B', '__________. __________, not __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['two · sixteen boxes · fifteen · fifteen · sixteen', 'five · two hundred packets · one hundred and ninety · 190 · 200']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the storeman sign in the end? **The answer should be yes, with the real number.**'));
out.push(PHRASE_CARD(['Sign here.', 'I have not counted it yet.', 'Two minutes.', 'fifteen, not sixteen', 'one box short']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your partner is a driver in a hurry. **Ask your partner** for two minutes. Then **write it.**'));
out.push(table(['What the driver said', 'What I said', 'How long I asked for', 'What I wrote'], [['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1.2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _He said ______. I said ______. I asked for ______ minutes. I wrote ______._'));
out.push(p('**Listener task:** how many people asked for a NUMBER of minutes? **A number is what makes it work.**'));
out.push(p('**Board clinic:** your teacher writes four refusals. Two are just _no_. Correct them together into _not yet_ with a number.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the bottom of the real note. Then answer.'));
out.push(box(null, [
  '**BEIRUT PACKAGING CO. — note no. 4417**',
  '**Goods received by:** _Ammar Zreik_',
  '**Date received:** _4 March 2026_',
  '**Time:** _7.50_',
  '**Signature:** _A. Zreik_',
  '⚠ **Note:** _Paper says 16 boxes. I counted 15. ONE BOX SHORT. Line 1, white labels. Driver agreed and signed too — M. Haddad._',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many boxes did Ammar count?'));
out.push(item('2', 'Which line was short?'));
out.push(item('3', 'Who else signed the note?'));
out.push(box('Writer\'s box', [
  '**A signature block has five lines:** name → date → **time** → signature → **the note**.',
  '⚠ **The note is where the whole value is.** **Say the number on the paper, the number you counted, WHICH LINE, and that the driver agreed.** **Four facts.**',
  '⚠ **Get the driver to sign the note too.** **A short delivery with two signatures on it is a fact.** **A short delivery with one signature on it is your word against his** — **and he left ten minutes ago.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a signature block with a note on it (**15 words or more**).'));
out.push(p('**Goods received by:** ______________   **Date received:** ______________   **Time:** ______   **Signature:** ______________   ⚠ **Note:** _Paper says ______. I counted ______. ______________. Line ______, ______________. Driver agreed and signed — ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The number on the paper AND the number counted', ''],
  ['Which line was wrong', ''],
  ['A time, not just a date', ''],
  ['The driver\'s name, signed', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their note. The class says if a man reading it next week would understand.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about signing at your work (**20 to 35 words**). Who asks you to sign? Have you ever signed something wrong? What would you do now?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody ask you why you signed it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did somebody sign without counting? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the sentence you will say the next time a driver is in a hurry (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.5 =======================
out.push(pb());
out.push(h2('5.5  Is it a six or an eight?'));
out.push(p('**You can:** copy a number without changing it   ·   **Grammar:** checking; _Is it a 6 or an 8?_   ·   **Sound:** the two digits, apart'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write 4417 on a piece of paper. Give it to your partner. They read it back. **Check it.**'));
out.push(p('**b**  Which pairs of numbers look the same in bad handwriting? **Say it.** _6 and 8 · 1 and 7 · 5 and 6 · 3 and 8 · 0 and 6_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the note number?   **A** 4417   **B** 4411   **C** 4477'));
out.push(p('**b**  Listen again.   **1** Which two digits are hard to read?   **2** What does Ammar do in the end?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.9  One digit, three hours', [
  ['Ammar', 'Nour. The note number. Is it 4417 or 4477?'],
  ['Nour', 'Let me see. It is handwritten. Somebody wrote it in a hurry.'],
  ['Ammar', 'The third digit. A one, or a seven?'],
  ['Nour', 'I cannot tell. And the two numbers are two different deliveries.'],
  ['Ammar', 'So I telephone Beirut and ask.'],
  ['Nour', 'Telephone Beirut. Ask for the note number and the date together.'],
  ['Ammar', 'Why both?'],
  ['Nour', 'Because if the number is wrong and the date is right, you know which delivery it is anyway.'],
  ['Ammar', 'Two facts are better than one.'],
  ['Nour', 'Two facts are better than one. Last year a digit like that cost us three hours on the telephone.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Copying a number, and checking it**',
  table(['These look the same', 'How you ask'], [
    ['**6** and **8**', '**Is it a six or an eight?**'],
    ['**1** and **7**', '**Is it a one or a seven?**'],
    ['**5** and **6**', '**Is it a five or a six?**'],
    ['**0** and **6**', '**Is it a nought or a six?**'],
  ], [1.6, 3.4]),
  '⚠ **Read the number back, digit by digit:** _four, four, one, seven._ **Not _four thousand four hundred and seventeen_.** **Digits can be checked one at a time; a big number cannot.**',
  '⚠ **Ask for TWO facts, not one.** **The note number AND the date.** **If one is wrong you still know which delivery it is** — **and that is the whole reason the question is worth a telephone call.**',
  '**Practise:** Write the question.',
  '1 You cannot tell 6 from 8. ______________?   2 You cannot tell 1 from 7. ______________?   3 Read 4417 back digit by digit: ______________',
  '**Useful words:**  Is it a six or an eight?  ·  digit by digit  ·  I cannot tell.  ·  two facts  ·  handwritten',
  '**Sound — the two digits, apart.** 🔊 **Track 5.10** Listen. _Is it a SIX↗ or an EIGHT?↘_ **Up on the first, down on the second.** **That is how a two-way question sounds in English.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One has a number they cannot read. One helps. Then change places.'));
out.push(dlg(null, [
  ['A', 'The __________ number. Is it __________ or __________?'],
  ['B', 'Let me see. It is handwritten.'],
  ['A', 'The __________ digit. A __________, or a __________?'],
  ['B', 'I cannot tell.'],
  ['A', 'So I telephone __________ and ask.'],
  ['B', 'Ask for the __________ and the __________ together.'],
]));
out.push(table(['Card 1', 'Card 2'], [['note · 4417 · 4477 · third · one · seven · Beirut · number · date', 'order · 3086 · 3086 · second · nought · eight · Aleppo · number · quantity']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the two numbers it could be. Then say which digit is the problem.'));
out.push(PHRASE_CARD(['Is it a six or an eight?', 'digit by digit', 'I cannot tell.', 'two facts', 'handwritten']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write five numbers from your work badly, on purpose. Your partner asks about each one. **Write it.**'));
out.push(table(['My number', 'What they asked', 'The answer'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 2.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My partner could not tell ______ from ______. I read it back digit by digit: ______._'));
out.push(p('**Listener task:** which pair of digits caused the most trouble in this class? Count them.'));
out.push(p('**Board clinic:** your teacher writes four numbers badly. The class asks a two-way question about each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour wrote on the copy sheet. Then answer.'));
out.push(box(null, [
  '**COPYING A NUMBER — THE THREE STEPS**',
  '**1 Read it out loud, digit by digit.** _Four, four, one, seven._',
  '**2 Write it. Then read what YOU wrote, digit by digit.** _Four, four, one, seven._',
  '**3 If a digit could be two things, ASK.** _Is it a one or a seven?_',
  '⚠ **If nobody can tell you, write BOTH on your sheet: 4417 / 4477 — one digit unclear.**',
  '⚠ **Never guess a digit. A guessed digit looks exactly like a known one. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many times do you read the number?'));
out.push(item('2', 'What do you write if nobody can tell you?'));
out.push(item('3', 'Why is a guessed digit dangerous?'));
out.push(box('Writer\'s box', [
  '**A copying procedure has three numbered steps and two warnings.**',
  '⚠ **Step 2 is the one that is always left out:** **read back what YOU wrote.** **Step 1 checks their handwriting; step 2 checks yours** — **and yours is the one the office will read next week.**',
  '⚠ **The last warning is the whole page:** _a guessed digit looks exactly like a known one_. **That is why writing _4417 / 4477 — one digit unclear_ is better than being right by luck.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a copying procedure for the numbers at your own work (**15 words or more**).'));
out.push(p('**COPYING A ______________ — THE THREE STEPS**   **1** ______________.   **2** ______________.   **3** ______________.   ⚠ **If nobody can tell you, ______________.**   ⚠ **Never ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Step 2 — reading back what YOU wrote', ''],
  ['A step that says ASK', ''],
  ['What to do when nobody knows', ''],
  ['A warning about guessing', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their step 2. The class says whose handwriting it checks.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a number that was copied wrong at your work (**20 to 35 words**). Which digit? Who found it? How long did it take?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How did they find it in the end?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many hours did wrong digits cost this class altogether? **Add them up on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the five pairs of digits that look the same, with a question for each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.6 =======================
out.push(pb());
out.push(h2('5.6  There is no note'));
out.push(p('**You can:** say a paper is missing   ·   **Grammar:** _there is no… · there are no…_   ·   **Sound:** the calm problem'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A lorry comes with no paper. What do you do? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which is better? _He did not bring the paper · There is no delivery note. I wrote one myself._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Ammar take the goods?   **A** yes   **B** no   **C** yes, and he writes his own note'));
out.push(p('**b**  Listen again.   **1** What does the driver say about the note?   **2** What four things does Ammar write?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.11  I wrote one myself', [
  ['Driver', 'Six pallets. Where do they go?'],
  ['Ammar', 'The note, please.'],
  ['Driver', 'There is no note. The office did not give me one.'],
  ['Ammar', 'There are no papers at all?'],
  ['Driver', 'Nothing. Just the pallets.'],
  ['Ammar', 'Then I write one. Your name, your lorry number, six pallets, today\'s date.'],
  ['Driver', 'You write it?'],
  ['Ammar', 'I write it and you sign it. Then we both have a paper.'],
  ['Driver', 'Nobody has ever done that.'],
  ['Ammar', 'Then today is a good day. Your name, please. Slowly.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying there is nothing there**',
  table(['One thing', 'More than one thing'], [
    ['**There is no** note.', '**There are no** papers.'],
    ['**There is no** signature.', '**There are no** labels on the boxes.'],
    ['**There is no** date on it.', '**There are no** numbers on the pallets.'],
  ], [2, 2.6]),
  '⚠ **One thing: _there is no_. More than one: _there are no_.** **Same split as 4.3, and the -s tells you which.**',
  '⚠ **_There is no note_ is not the end of the conversation. It is the start.** **The next sentence is the one that matters:** _Then I write one._',
  '⚠ **A paper you wrote yourself, signed by the driver, is a real paper.** **Four things on it: his name, his lorry number, the quantity with its unit, the date.** **Then both of you have something.**',
  '**Practise:** Write _there is no_ or _there are no_.',
  '1 ______________ delivery note.   2 ______________ papers in the lorry.   3 ______________ signature at the bottom.   4 ______________ labels on the six pallets.',
  '**Useful words:**  There is no note.  ·  There are no papers.  ·  Then I write one.  ·  and you sign it  ·  Slowly.',
  '**Sound — the calm problem.** 🔊 **Track 5.12** Listen. _There is no note.↘ Then I write one.↘_ **Two flat sentences, no rise, no panic.** **Said like that it is a procedure, not a complaint.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the driver with no paper. One is the storeman. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ __________. Where do they go?'],
  ['B', 'The note, please.'],
  ['A', 'There is no note. The office did not give me one.'],
  ['B', 'There are no papers at all?'],
  ['A', 'Nothing. Just the __________.'],
  ['B', 'Then I write one. Your name, your __________ number, __________ __________, today\'s date.'],
]));
out.push(table(['Card 1', 'Card 2'], [['six pallets · pallets · lorry · six pallets', 'two hundred packets · packets · van · two hundred packets']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the four things the storeman put on his own note. Four things.'));
out.push(PHRASE_CARD(['There is no note.', 'There are no papers.', 'Then I write one.', 'and you sign it', 'Slowly.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a paper that is sometimes missing at your work. **Write it.**'));
out.push(table(['The missing paper', 'What people do now', 'What I could write instead'], [['', '', ''], ['', '', '']], [1.4, 1.6, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Sometimes there is no ______. People ______. I could write ______._'));
out.push(p('**Listener task:** how many people said they would write their own paper? **That is the useful answer.**'));
out.push(p('**Board clinic:** your teacher writes four lines. Two use _is_ for _are_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper Ammar wrote himself. Then answer.'));
out.push(box(null, [
  '**GOODS RECEIVED — NO DELIVERY NOTE**',
  '**Date:** 6 March 2026   **Time:** 9.20',
  '**Driver:** Marwan Haddad   **Lorry:** 345 871',
  '**Goods:** 6 pallets, empty bags. ⚠ **Not counted inside — pallets wrapped.**',
  '**Driver says:** the office in Homs did not give him a note.',
  '**Received by:** _A. Zreik_   **Driver\'s signature:** _M. Haddad_',
  '⚠ **Two signatures. Copy to the office today. A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the lorry number?'));
out.push(item('2', 'Why are the bags not counted?'));
out.push(item('3', 'How many signatures are on this paper?'));
out.push(box('Writer\'s box', [
  '**A note you write yourself has six things:** date and time → driver and lorry → goods with unit → **what the driver SAYS** → two signatures → a copy to the office.',
  '⚠ **Write what you did NOT check as well.** _Not counted inside — pallets wrapped._ **That line protects you.** **A paper that claims you checked something you could not see is worse than no paper.**',
  '⚠ **_Driver says:_ — put his explanation in HIS words, not yours.** **You do not know whether the Homs office gave him a note. You know what he said.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note for goods arriving with no paper (**15 words or more**).'));
out.push(p('**GOODS RECEIVED — NO ______________**   **Date:** ______________  **Time:** ______   **Driver:** ______________  **Lorry:** ______   **Goods:** ______________. ⚠ **Not checked:** ______________   **Driver says:** ______________   **Received by:** ______   **Driver\'s signature:** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The driver\'s name AND the lorry number', ''],
  ['A line saying what you did NOT check', ''],
  ['The driver\'s words, as his words', ''],
  ['Two signatures', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _not checked_ line. The class says if it protects the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about goods or a job that came with no paper (**20 to 35 words**). What was missing? What did you do? What happened later?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody ask about it later?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was somebody asked about it weeks later? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** your own no-paper note for a real delivery, with all six things (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review: a real delivery note'));
out.push(p('⚠ **This is the fifth unit of this book, and the one it was built for.** The whole note, top to bottom — and one problem for the class to talk about together.'));
out.push(p('**You can:** read a whole delivery note   ·   **Review:** Units 5.1 to 5.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**5.1**  The four things on every note, in order.', ''],
  ['**5.2**  04/03 from Beirut. Say it, and write it safely.', ''],
  ['**5.3**  Somebody says "twelve". What do you ask?', ''],
  ['**5.4**  A driver is in a hurry and you have not counted.', ''],
  ['**5.5**  You cannot tell a one from a seven.', ''],
  ['**5.6**  The lorry came with nothing. What do you do?', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the driver want?   **A** to be paid   **B** a signature before the count   **C** to leave the pallets outside'));
out.push(p('**b**  Listen again.   **1** How many stops has the driver got left?   **2** What has happened to Ammar before?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 5.13  Four more stops', [
  ['Driver', 'Sign it now. I have four more stops and the Homs road closes at two.'],
  ['Ammar', 'Sixteen boxes. I count sixteen boxes first. Four minutes.'],
  ['Driver', 'Four minutes here, four minutes at the next place. That is my afternoon.'],
  ['Abu Yasser', 'He is right about the road. It does close at two.'],
  ['Ammar', 'And I signed for sixteen last month and got fifteen. It came off my name.'],
  ['Abu Yasser', 'That is also true. I remember it.'],
  ['Driver', 'I did not load it. I drive it.'],
  ['Ammar', 'I know you did not load it. I am not asking you to pay for it.'],
  ['Driver', 'Then sign it.'],
  ['Ammar', 'Then wait four minutes. Those are the only two things on the table.'],
  ['Abu Yasser', 'There is a third thing. Nobody has thought of it yet.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**5.1**', '_Name. Date. Quantity. Signature. The last one says the other three are correct._'],
    ['**5.2**', '_04/03 is 4 March here. Write the month in letters._'],
    ['**5.3**', '_Twelve what? Twelve boxes, not twelve._'],
    ['**5.4**', '_I have not counted it yet. Two minutes._'],
    ['**5.5**', '_Is it a one or a seven? Digit by digit._'],
    ['**5.6**', '_There is no note. Then I write one, and you sign it._'],
  ], [1, 5]),
  '⚠ **The new thing here: the driver is right, Ammar is right, and both of them are right about something that costs the other man money.** **The road does close at two. And Ammar did lose a box off his own name last month.**',
  '**Useful words:**  four more stops  ·  it came off my name  ·  I did not load it  ·  the only two things on the table  ·  a third thing',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the driver. One is Ammar. Say why you are right.'));
out.push(table(['The driver says', 'Ammar says'], [[
  'Four more stops and the Homs road closes at two. ⚠ **Four minutes at every stop is his whole afternoon, and he did not load the lorry.**',
  'Sixteen on the paper and fifteen in the yard last month. ⚠ **It came off his name, and a signature cannot be taken back.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_. **Then listen for Abu Yasser\'s last line.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a time somebody wanted you to be quick and you wanted to be careful. Tell your partner. **Write it.**'));
out.push(table(['What they wanted', 'What I wanted', 'What happened'], [['', '', ''], ['', '', '']], [1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** The driver has four more stops and a road that closes at two. Ammar signed for sixteen last month, got fifteen, and it came off his name. Four minutes is real to both of them.'));
out.push(table(['The driver is right', 'Ammar is right', 'The third thing'], [[
  'The road closes at two. ⚠ **Four minutes at each of five stops is twenty minutes, and he did not load the lorry — he cannot fix what is wrong inside it.**',
  'Sixteen on the paper, fifteen in the yard, off his name. ⚠ **A signature is a sentence you cannot take back, which is 5.1.**',
  '⚠ **Count the LINES, not the boxes, and sign for the lines you counted.** **Ammar counts line 1 — the white labels, the line that was short last time — in forty seconds, signs for that line, and writes _lines 2 to 4 not counted, driver waiting_.** **The driver leaves in one minute. The office knows exactly what was and was not checked.**',
]], [1, 1, 1.4]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _those are the only two things on the table_ — **and Abu Yasser\'s answer, _there is a third thing_.** **Two men arguing honestly about four minutes had both forgotten that a note has four lines on it and you do not have to count all of them.** **The third thing is almost always a smaller piece of the same job.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _NOT COUNTED IT? DO NOT SIGN IT_   **A** Sign and count later.   **B** Count before you sign.   **C** Never sign anything.',
  '**2**  _WRITE THE MONTH IN LETTERS_   **A** 04/03 is fine.   **B** Write "4 March".   **C** Do not write dates.',
  '**3**  _NO NOTE? WRITE ONE. DRIVER SIGNS TOO._   **A** Send the lorry away.   **B** Take the goods and say nothing.   **C** Make your own paper and get it signed.',
  '**4**  _NUMBERS: DIGIT BY DIGIT, BOTH WAYS_   **A** Read it once.   **B** Read theirs and then read yours.   **C** Guess the unclear one.',
  '**5**  _12 IS NOT A QUANTITY_   **A** A number needs a unit.   **B** Twelve is too many.   **C** Do not write numbers.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about a delivery, the QUANTITY and the DIFFERENCE go first.** _The paper says 16. I counted 15._ **Two sentences, two numbers.**',
  '⚠ **Name the LINE, not just the delivery.** **A note with four lines on it has four places to be wrong.**',
  '**The shape:** who it is to → what the paper says → what you counted → what you want done.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message about a short delivery (**four sentences, about 30 words**). Say the paper number, what you counted, which line, and what you want.'));
out.push(p('**To:** ______________   _Note ______ came today. The paper says ______ ______. I counted ______, on line ______. Please ______._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to the office about a delivery that was wrong (**four sentences, about 30 words**). The note number, the two quantities, the line, and what you want done.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **reply** the office would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  Your signature says the other three things are ___.   a) finished   b) correct   c) counted',
  '2  04/03 from Beirut is ___.   a) 4 March   b) 3 April   c) 4 April',
  '3  Write the month in ___.   a) numbers   b) pencil   c) letters',
  '4  12 is not a quantity. A quantity needs a ___.   a) date   b) unit   c) signature',
  '5  The driver is in a hurry. You say: I have not ___ it yet.   a) count   b) counting   c) counted',
  '6  Read a number back ___.   a) digit by digit   b) all together   c) backwards',
  '7  ___ no delivery note.   a) There are   b) There is   c) It is',
  '8  ___ no papers in the lorry.   a) There is   b) It is   c) There are',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 5.15** Listen. Write the answer.   **1** The note number: ______   **2** The date, in letters: ______   **3** What the paper says: ______   **4** What she counted: ______   **5** Which line: ______   **6** Who signed as well: ______'));
out.push(p('**C  Reading.** Read the goods table at 5.3 again. How many rolls of tape? How many boxes of labels altogether? What is the total of boxes?'));
out.push(p('**D  Writing.** Write four sentences to the office about a short delivery (**about 30 words**). The note number, the two quantities, the line, and what you want.'));
out.push(...lines(4));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['Nour', 'Note number 4417. Fourth of March.'],
  ['Ammar', 'Four, four, one, seven. 4 March.'],
  ['Nour', 'The paper says sixteen boxes.'],
  ['Ammar', 'Sixteen boxes. How many did you count?'],
  ['Nour', 'Fifteen. Line one, the white labels.'],
  ['Ammar', 'One box short, line one.'],
  ['Nour', 'And the driver signed it as well. Marwan Haddad.'],
  ['Ammar', 'Two signatures. Then it is a fact, not an argument.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**5.1**  name the four things on every note, and say what my signature means',
  '**5.2**  read a number date, and write a safe one',
  '**5.3**  ask _twelve what?_ and write a quantity with its unit',
  '**5.4**  ask for two minutes, count, and sign the real number',
  '**5.5**  copy a number and check it digit by digit, both ways',
  '**5.6**  say there is no paper, and write one myself',
  '**5.7**  read a whole delivery note, and find the third thing when two men are both right',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the deliveries unit.**',
  '**delivery note** — here you read one and sign it. **At A2 you write an email about one that was wrong.**',
  '**driver** — here he is a man at your gate in a hurry. **At A2 he is somebody you book a time slot with.**',
  '**lorry** — here it is the thing the goods come on. **At A2 you report a late one to a customer.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
module.exports = out;
