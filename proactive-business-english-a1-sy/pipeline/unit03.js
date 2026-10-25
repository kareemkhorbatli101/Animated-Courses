// Proactive Business English A1 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'day · week · Sunday · Monday · Friday · morning shift · afternoon shift · night shift · to swap · o\'clock · half past · quarter past · early · late · on time · day off · break · every day · today · tomorrow · yesterday · shift board';
const AHEAD_AT_A2 = 'yesterday · day off · break';

out.push(h1('Unit 3  The Day, the Week and the Shift'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  say the days of the week',
  '**3.2**  say the time',
  '**3.3**  say what you do every day',
  '**3.4**  say what another person does every day',
  '**3.5**  ask about the shift and ask to swap',
  '**3.6**  say you are late, and why',
  '**3.7**  Review: the shift board — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ A day is a number on a board', [
  '**The shift board is the first thing you look at and the last thing you forget.** ⚠ **It changes every week.**',
  '⚠ **In this unit you will read it, say it, and ask about it.** **A man who asks about his shift on Saturday is early. A man who asks on Sunday morning is late.**',
], C.lyellow, C.orange));

// ======================= CYCLE 3.1 =======================
out.push(pb());
out.push(h2('3.1  Sunday, Monday, Tuesday'));
out.push(p('**You can:** say the days of the week   ·   **Grammar:** _on Monday_   ·   **Sound:** the days'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the days of the week with your teacher. Start with Sunday.'));
out.push(p('**b**  Which days do you work? **Write it** here: ______________'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which day is Ammar\'s day off?   **A** Friday   **B** Sunday   **C** Thursday'));
out.push(p('**b**  Listen again.   **1** How many days does Ammar work?   **2** Which day is the big delivery?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.1  Sunday to Thursday', [
  ['Abu Yasser', 'You work Sunday to Thursday. Five days.'],
  ['Ammar', 'Sunday, Monday, Tuesday, Wednesday, Thursday. Five.'],
  ['Abu Yasser', 'Friday is your day off. Saturday too, this month.'],
  ['Ammar', 'And the big delivery?'],
  ['Abu Yasser', 'On Monday. Always on Monday. Twelve pallets.'],
  ['Ammar', 'On Monday. I will be here early.'],
  ['Abu Yasser', 'Good. On Monday everybody is here early.'],
  ['Ammar', 'And on Thursday?'],
  ['Abu Yasser', 'On Thursday we count. Every Thursday, the whole store.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The days, and _on_**',
  table(['The week at work', 'The day off'], [
    ['**Sunday · Monday · Tuesday · Wednesday · Thursday**', '**Friday** · (and **Saturday**, this month)'],
  ], [3, 1.6]),
  '⚠ **_on_ before a day:** **on** Monday · **on** Thursday. **Not** ~~in Monday~~.',
  '⚠ **A big letter on every day:** **M**onday, not ~~monday~~. **Every time.**',
  '**Practise:** Write the day.',
  '1 The day after Sunday is ______________.   2 The day before Friday is ______________.   3 We count ___ Thursday.   4 The delivery comes ___ Monday.',
  '**Useful words:**  Sunday to Thursday  ·  five days  ·  my day off  ·  always on Monday  ·  every Thursday',
  '**Sound — the days.** 🔊 **Track 3.2** Listen. Say it. The loud part is at the **front**: **SUN**-day · **MON**-day · **THURS**-day. Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', 'You work __________ to __________. __________ days.'],
  ['B', '__________. __________ days.'],
  ['A', '__________ is your day off.'],
  ['B', 'And the big delivery?'],
  ['A', 'On __________. Always on __________.'],
  ['B', 'On __________. I will be here early.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Sunday to Thursday · 5 days · Friday off · delivery Monday', 'Monday to Saturday · 6 days · Sunday off · delivery Wednesday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the day off and the delivery day. Two days.'));
out.push(PHRASE_CARD(['Sunday to Thursday', 'five days', 'my day off', 'always on Monday', 'every Thursday']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about your week. **Write it.**'));
out.push(table(['I work', 'My day off is', 'The busy day is'], [['', '', ''], ['', '', '']], [1.4, 1.2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I work ______ to ______. My day off is ______. The busy day is ______._'));
out.push(p('**Listener task:** which day is busy for most people in this class? Count them.'));
out.push(p('**Board clinic:** your teacher writes five days on the board. Two have a small letter. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the board. Then answer.'));
out.push(box(null, [
  '**THE WEEK — BACK STORE**',
  table(['Day', 'What happens'], [
    ['Sunday', 'normal'],
    ['Monday', 'big delivery — 12 pallets'],
    ['Tuesday', 'normal'],
    ['Wednesday', 'lorry to Homs'],
    ['Thursday', 'count the whole store'],
  ], [1.2, 3]),
], 'FFFFFF', C.navy));
out.push(item('1', 'What happens on Monday?'));
out.push(item('2', 'Which day is the count?'));
out.push(item('3', 'Which two days are normal?'));
out.push(box('Writer\'s box', [
  '**A week board has one line for every working day** — **including the normal ones.**',
  '⚠ **Write _normal_ on the quiet days.** **A day with no line is a day nobody has thought about**, **and that is the day the lorry comes early.**',
  '⚠ **Big letter on every day.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a week board for your own work (**15 words or more**).'));
out.push(p('**THE WEEK — ______________**   **______________** — ______________   **______________** — ______________   **______________** — ______________   **______________** — ______________   **______________** — ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A line for every working day', ''],
  ['A big letter on every day', ''],
  ['_normal_ on the quiet days, not a blank', ''],
  ['The place at the top', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their busy day. The class says which week looks hardest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your week at work (**20 to 35 words**). Which days do you work? Which is the busy one? Which is your day off?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Why is that day busy?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. Which day is busy for most people? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** what happens on each of your working days (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.2 =======================
out.push(pb());
out.push(h2('3.2  Seven o\'clock, half past four'));
out.push(p('**You can:** say the time   ·   **Grammar:** _at seven · half past_   ·   **Sound:** the time, said twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What time is it now? Say it. **Write it** here: ______'));
out.push(p('**b**  What time do you start work? What time do you finish? Tell your partner.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What time does the lorry come?   **A** 6.30   **B** 7.15   **C** 7.30'));
out.push(p('**b**  Listen again.   **1** What time must Ammar be at the gate?   **2** What time is the break?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.3  Quarter past seven', [
  ['Abu Yasser', 'The lorry comes at quarter past seven.'],
  ['Ammar', 'Quarter past seven. Seven fifteen.'],
  ['Abu Yasser', 'Seven fifteen. Say it both ways. Some men say one, some say the other.'],
  ['Ammar', 'And me?'],
  ['Abu Yasser', 'At the gate at seven. Not quarter past. Seven.'],
  ['Ammar', 'Fifteen minutes early.'],
  ['Abu Yasser', 'Fifteen minutes early. The break is at half past ten.'],
  ['Ammar', 'Half past ten. Ten thirty.'],
  ['Abu Yasser', 'Both ways. Good. You learn fast.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The time, two ways**',
  table(['The clock', 'One way', 'The other way'], [
    ['**7.00**', 'seven o\'clock', 'seven'],
    ['**7.15**', 'quarter past seven', 'seven fifteen'],
    ['**7.30**', 'half past seven', 'seven thirty'],
    ['**7.45**', 'quarter to eight', 'seven forty-five'],
  ], [1, 2, 2]),
  '⚠ **_at_ before a time:** **at** seven · **at** half past ten. **Not** ~~in seven~~.',
  '⚠ **Say it BOTH ways.** **Some men at work say _half past ten_ and some say _ten thirty_.** **You need both ears.**',
  '**Practise:** Write the other way.',
  '1 8.30 = half past eight = ______________   2 quarter past nine = ______________   3 4.45 = ______________   4 six o\'clock = ______________',
  '**Say it. Write it. Check it** with your partner — one of you reads the clock number, the other reads the words.',
  '**Useful words:**  at seven  ·  quarter past  ·  half past  ·  quarter to  ·  fifteen minutes early',
  '**Sound — the time, said twice.** 🔊 **Track 3.4** Listen. Say it. _Quarter past seven. Seven fifteen._ **Both, one after the other.** Say each pair four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', 'The lorry comes at __________.'],
  ['B', '__________. __________.'],
  ['A', 'Say it both ways. And you?'],
  ['B', 'At the gate at __________.'],
  ['A', '__________ minutes early. The break is at __________.'],
  ['B', '__________. __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['7.15 · gate at 7.00 · break 10.30', '6.45 · gate at 6.30 · break 9.30']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the three times. Then show them.'));
out.push(PHRASE_CARD(['at seven', 'quarter past', 'half past', 'quarter to', 'both ways']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Say four times from your own day. Your partner **writes it** both ways.'));
out.push(table(['I said', 'One way', 'The other way'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I start at ______. That is ______ and ______. My break is at ______._'));
out.push(p('**Listener task:** who starts earliest? Say the time both ways.'));
out.push(p('**Board clinic:** your teacher writes four times on the board. Two use _in_ for _at_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the times on the store wall. Then answer.'));
out.push(box(null, [
  '**TIMES — BACK STORE**',
  '**Gate:** 7.00  _(seven o\'clock)_',
  '**Lorry:** 7.15  _(quarter past seven)_',
  '**Break:** 10.30  _(half past ten)_',
  '**Finish:** 16.00  _(four o\'clock)_',
  '⚠ **Both ways on every line. A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What time is the break?'));
out.push(item('2', 'What time does the lorry come?'));
out.push(item('3', 'Why is every time written two ways?'));
out.push(box('Writer\'s box', [
  '**A times notice has four lines:** gate → the first job → break → finish.',
  '⚠ **Write the clock number AND the words.** _7.15 (quarter past seven)._ **Some men read numbers and some read words.**',
  '⚠ **Use 16.00 for four in the afternoon** on a notice. **A lorry at 4.00 could be morning or afternoon, and once a year somebody comes at the wrong one.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a times notice for your own work (**15 words or more**).'));
out.push(p('**TIMES — ______________**   **Gate:** ______  _(______________)_   **First job:** ______  _(______________)_   **Break:** ______  _(______________)_   **Finish:** ______  _(______________)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Numbers AND words on every line', ''],
  ['24-hour time for the afternoon', ''],
  ['Four lines', ''],
  ['A name at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says the time the other way.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your times at work (**20 to 35 words**). When do you start? When is your break? When do you finish?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _How long is your break?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. Who has the longest day? **Count the hours on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six times from your week, both ways (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.3 =======================
out.push(pb());
out.push(h2('3.3  I start at seven. I check the shelves.'));
out.push(p('**You can:** say what you do every day   ·   **Grammar:** _I start · I check_   ·   **Sound:** the flat list'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say three things you do every day at work. Say them in Arabic. Your teacher writes the English.'));
out.push(p('**b**  Put these in order for your day: _start · count · break · finish_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things does Ammar do before the break?   **A** two   **B** four   **C** six'));
out.push(p('**b**  Listen again.   **1** What is the first thing he does?   **2** What does he do at the end of the day?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.5  My day', [
  ['Nour', 'Ammar, what do you do every day? The office needs it on paper.'],
  ['Ammar', 'I sign in at the gate. I read the shift board.'],
  ['Nour', 'Then?'],
  ['Ammar', 'I check the shelves. I write the numbers on the sheet.'],
  ['Nour', 'Before the break?'],
  ['Ammar', 'Before the break. Four things. Then the lorry comes.'],
  ['Nour', 'And at the end?'],
  ['Ammar', 'I put the sheet on Abu Yasser\'s table. I sign out.'],
  ['Nour', 'Good. Six things. I write them down.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What I do every day**',
  table(['+', '–', '?'], [
    ['**I start** at seven.', '**I do not start** at six.', '**Do** you start at seven? — Yes, I do.'],
    ['**I check** the shelves.', '**I do not check** the yard.', '**Do** you check the yard? — No, I do not.'],
    ['**We count** on Thursday.', '**We do not count** on Monday.', '**Do** we count today? — Yes, we do.'],
  ], [1.3, 1.5, 2]),
  '⚠ **Say the things in ORDER.** **First, then, after that.** **A list in the wrong order is a list nobody can follow.**',
  '⚠ **_every day_ goes at the start or at the end:** **Every day** I check the shelves. · I check the shelves **every day**.',
  '**Practise:** Write the verb.',
  '1 I ______ in at the gate.   2 I ______ the shift board.   3 I ______ the numbers on the sheet.   4 I ______ out at four.',
  '**Useful words:**  I sign in.  ·  I read…  ·  I check…  ·  I write…  ·  first · then · after that',
  '**Sound — the flat list.** 🔊 **Track 3.6** Listen. Say it. _I sign in. I read the board. I check the shelves._ **Each one flat, with a small stop between.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One says four things in order. Then change places.'));
out.push(dlg(null, [
  ['A', 'What do you do every day?'],
  ['B', 'I __________. I __________.'],
  ['A', 'Then?'],
  ['B', 'I __________. I __________.'],
  ['A', 'And at the end?'],
  ['B', 'I __________. I __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['sign in · read the board · check the shelves · write the numbers', 'open the counter · count the money · serve the customers · lock the door']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the six things in order. Six, in order.'));
out.push(PHRASE_CARD(['I sign in.', 'I read…', 'I check…', 'I write…', 'first · then · after that']));
out.push(stage('4', 'Your turn', 9));
out.push(p('**Write it.** Six things you do every day, in order. Then tell your partner.'));
out.push(table(['', 'I…'], [['**1**', ''], ['**2**', ''], ['**3**', ''], ['**4**', ''], ['**5**', ''], ['**6**', '']], [0.6, 5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _First I ______. Then I ______. After that I ______._'));
out.push(p('**Listener task:** write the first thing and the last thing. Two things.'));
out.push(p('**Board clinic:** your teacher writes six lines out of order. Put them in order together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Nour wrote. Then answer.'));
out.push(box(null, [
  '**WHAT THE STOREMAN DOES — from Ammar, 13 March**',
  '**1** I sign in at the gate.',
  '**2** I read the shift board.',
  '**3** I check the shelves.',
  '**4** I write the numbers on the sheet.',
  '**5** I put the sheet on the supervisor\'s table.',
  '**6** I sign out.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is number 3?'));
out.push(item('2', 'What does he do after he checks the shelves?'));
out.push(item('3', 'Who told the office this?'));
out.push(box('Writer\'s box', [
  '**A what-I-do list has three things:** a number on every line → one job on every line → **in order**.',
  '⚠ **One job on one line.** **_I check the shelves and write the numbers_ is two jobs**, **and the second one gets forgotten.**',
  '⚠ **Put your name and the day at the top.** **A list of jobs from nobody is a list the office cannot ask about.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a what-I-do list for your own job (**15 words or more**).'));
out.push(p('**WHAT I DO — from ______________, ______________**   **1** I ______________.   **2** I ______________.   **3** I ______________.   **4** I ______________.   **5** I ______________.   **6** I ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['One job on each line', ''],
  ['The lines are in order', ''],
  ['A number on every line', ''],
  ['A name and a day at the top', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read line 1 and line 6. The class says if the day starts and ends well.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your day at work (**20 to 35 words**). What do you do first? What do you do last? What is the longest job?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _What is the longest job?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. Which job takes the longest in this class? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** everything you do tomorrow, in order, with a number on each line (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.4 =======================
out.push(pb());
out.push(h2('3.4  Fadi drives. Majd opens the counter.'));
out.push(p('**You can:** say what another person does   ·   **Grammar:** _he starts · she opens_   ·   **Sound:** the -s at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say what one person at your work does every day. Three things.'));
out.push(p('**b**  Read the two lines. Which is correct? _Fadi drive the lorry · Fadi drives the lorry_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who starts earliest?   **A** Ammar   **B** Fadi   **C** Majd'));
out.push(p('**b**  Listen again.   **1** What time does Fadi start?   **2** What does Majd do first?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.7  Three men, three days', [
  ['Nour', 'And Fadi? What does he do?'],
  ['Ammar', 'He starts at six. He checks the lorry. Then he drives to Homs.'],
  ['Nour', 'Six. Earlier than you.'],
  ['Ammar', 'An hour earlier. He finishes later too.'],
  ['Nour', 'And Majd?'],
  ['Ammar', 'He opens the counter at eight. He counts the money first. Then the customers come.'],
  ['Nour', 'He counts the money before the customers?'],
  ['Ammar', 'Before. Always before. He says you cannot count with people waiting.'],
  ['Nour', 'That is true. I write that down too.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What HE does, what SHE does**',
  table(['I / you / we', 'he / she / it'], [
    ['I **start** at seven.', 'He **starts** at six.'],
    ['I **check** the shelves.', 'He **checks** the lorry.'],
    ['We **count** on Thursday.', 'She **counts** the money.'],
    ['I **do not** drive.', 'He **does not** drive on Friday.'],
  ], [2, 2]),
  '⚠ **he / she / it takes -s.** **_He start_ is wrong. _He starts_ is right.** **This is the one thing to get right in this unit.**',
  '⚠ **In the – and ? it goes back:** he **does not** start · **Does** he start?',
  '**Practise:** Write the verb.',
  '1 Fadi ______ (drive) the lorry.   2 Majd ______ (open) the counter.   3 He ______ (not work) on Friday.   4 ______ she ______ (count) the money?',
  '**Useful words:**  He starts…  ·  He checks…  ·  She opens…  ·  earlier than  ·  before the customers',
  '**Sound — the -s at the end.** 🔊 **Track 3.8** Listen. Say it. _starts_ /s/ · _drives_ /z/ · _finishes_ /ɪz/. Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One says what the person does. Then change places.'));
out.push(dlg(null, [
  ['A', 'What does __________ do?'],
  ['B', 'He __________ at __________. He __________ the __________.'],
  ['A', 'Earlier than you?'],
  ['B', '__________ earlier.'],
  ['A', 'And __________?'],
  ['B', 'He __________ the __________ at __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Fadi · 6.00 · checks the lorry · Majd · opens the counter · 8.00', 'Samih · 7.00 · counts the back store · Abu Raed · opens the gate · 6.00']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker say the -s every time? Count the times it was missing.'));
out.push(PHRASE_CARD(['What does he do?', 'He starts…', 'He checks…', 'earlier than', 'before the…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of two people at your work. Say three things each does. **Write it.**'));
out.push(table(['Name', 'He / She…', 'He / She…', 'He / She…'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ starts at ______. He / She ______. Then he / she ______._'));
out.push(p('**Listener task:** write one person and one job. Then ask: _Does he ______ every day?_'));
out.push(p('**Board clinic:** your teacher writes six lines. Three have no -s. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour wrote for the office. Then answer.'));
out.push(box(null, [
  '**WHO DOES WHAT — BACK STORE AND COUNTER**',
  '**Fadi** starts at 6.00. He checks the lorry. He drives to Homs on Wednesday.',
  '**Ammar** starts at 7.00. He reads the board. He checks the shelves.',
  '**Majd** starts at 8.00. He counts the money. Then he opens the counter.',
  '**Samih** starts at 7.00. He counts the back store on Monday.',
  '⚠ **Every line: a name, a time, and what the person does. N.M. 13 March.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who starts earliest?'));
out.push(item('2', 'What does Majd do before he opens the counter?'));
out.push(item('3', 'Which day does Samih count?'));
out.push(box('Writer\'s box', [
  '**A who-does-what page has three things on every line:** the name → the time → what the person does, with **-s**.',
  '⚠ **One person, one line.** **The same rule as Unit 1.4, and for the same reason.**',
  '⚠ **Put the time on every line.** **A page with jobs and no times cannot tell you who is in the yard at half past six.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a who-does-what page for your own work (**15 words or more**).'));
out.push(p('**WHO DOES WHAT — ______________**   **______________** starts at ______. He / She ______________. He / She ______________.   **______________** starts at ______. He / She ______________.   **______________** starts at ______. He / She ______________.   **______** (your name) ______________ (the day)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['-s on every he / she verb', ''],
  ['A time on every line', ''],
  ['One person on each line', ''],
  ['A name and a day at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class listens for the -s.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about one person at your work (**20 to 35 words**). What time do they start? What do they do first? What do they do that nobody else does?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Does anybody else do that?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many describe a job only one person can do? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** three people at your work, with a time and two jobs each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.5 =======================
out.push(pb());
out.push(h2('3.5  Can I swap Thursday?'));
out.push(p('**You can:** ask about the shift and ask to swap   ·   **Grammar:** _When…? · Can I…?_   ·   **Sound:** the polite question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You need a day off. What do you say? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which one is better at work? _I am not coming on Thursday · Can I swap Thursday with Samih?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Does Abu Yasser say yes?   **A** yes   **B** no   **C** yes, if Samih agrees'));
out.push(p('**b**  Listen again.   **1** Which day does Ammar want?   **2** What must he do first?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.9  Ask Samih first', [
  ['Ammar', 'Abu Yasser, when is the count this week?'],
  ['Abu Yasser', 'Thursday. Every Thursday.'],
  ['Ammar', 'Can I swap Thursday? My brother is in hospital on Thursday.'],
  ['Abu Yasser', 'Swap with who?'],
  ['Ammar', 'With Samih. He is off on Thursday.'],
  ['Abu Yasser', 'Then ask Samih first. Not me.'],
  ['Ammar', 'And if he says yes?'],
  ['Abu Yasser', 'If he says yes, come and tell me and I write it on the board.'],
  ['Ammar', 'I ask him today. Then I tell you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about the shift, and asking to swap**',
  table(['You want to know', 'You say'], [
    ['the day', '**When** is the count? · **What day** is the delivery?'],
    ['the time', '**What time** does the lorry come?'],
    ['to change a day', '**Can I swap** Thursday? · **Can I swap** with Samih?'],
    ['who to ask', '**Who do I ask?**'],
  ], [1.6, 3.4]),
  '⚠ **Ask the OTHER MAN first, then the supervisor.** **A swap is between two men. The supervisor only writes it on the board.**',
  '⚠ **Say WHY, in four words.** _My brother is in hospital._ **Not a long story. Four words is enough and it is more likely to be believed.**',
  '**Practise:** Write the question.',
  '1 You want the day of the count. ______________?   2 You want to change Friday. ______________?   3 You do not know who decides. ______________?',
  '**Useful words:**  When is…?  ·  Can I swap…?  ·  with Samih  ·  Ask him first.  ·  Then I tell you.',
  '**Sound — the polite question.** 🔊 **Track 3.10** Listen. _Can I swap Thursday?↗_ **The voice goes up.** A flat _Can I swap Thursday_ is not a question, it is an announcement. Say it four times, going up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks. One answers. Then change places.'));
out.push(dlg(null, [
  ['A', 'When is the __________ this week?'],
  ['B', '__________. Every __________.'],
  ['A', 'Can I swap __________? __________.'],
  ['B', 'Swap with who?'],
  ['A', 'With __________.'],
  ['B', 'Then ask __________ first. Not me.'],
]));
out.push(table(['Card 1', 'Card 2'], [['the count · Thursday · brother in hospital · Samih', 'the delivery · Monday · a wedding in Homs · Hani']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** who did the speaker ask first? **The answer should be the other man, not the supervisor.**'));
out.push(PHRASE_CARD(['When is…?', 'Can I swap…?', 'with…', 'Ask him first.', 'Then I tell you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a day you want to change. **Ask your partner** for a swap. Then **write it.**'));
out.push(table(['The day I want', 'Why, in four words', 'Who I swap with', 'Who I tell after'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I want to swap ______ because ______. I ask ______ first. Then I tell ______._'));
out.push(p('**Listener task:** count the reports that asked the other man first. **That is the right order.**'));
out.push(p('**Board clinic:** your teacher writes four swap requests. Two go to the supervisor first. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note on the board. Then answer.'));
out.push(box(null, [
  '**SWAP — WRITTEN ON THE BOARD BY THE SUPERVISOR**',
  '**Thursday 21 March**',
  '**Was:** Ammar Zreik — morning   ·   **Now:** Samih Qassar — morning',
  '**Was:** Samih Qassar — off   ·   **Now:** Ammar Zreik — off',
  '**Both men agreed. A.Y. 18 March.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who works on Thursday 21 March now?'));
out.push(item('2', 'Who wrote the swap on the board?'));
out.push(item('3', 'What two words say the swap is agreed?'));
out.push(box('Writer\'s box', [
  '**A swap note has four things:** the day → who was on → who is on now → **both men agreed**.',
  '⚠ **Write BOTH halves of the swap.** **One man off and one man on. A note with one half is a note that leaves a hole in the shift.**',
  '⚠ **_Both men agreed_ is the line that matters.** **Without it the swap is one man\'s idea, and on the day the other man will not be there.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a swap note for your own work (**15 words or more**).'));
out.push(p('**SWAP — ______________**   **Was:** ______________ — ______________   **Now:** ______________ — ______________   **Was:** ______________ — ______________   **Now:** ______________ — ______________   **Both agreed. ______** (who wrote it) ______________ (the day)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Both halves of the swap', ''],
  ['The day at the top', ''],
  ['_Both agreed_', ''],
  ['Who wrote it, and when', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their note. The class says if anybody is missing from the shift.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a day you needed off (**20 to 35 words**). What day? Why? Who did you ask? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who did you ask first?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the writer ask the other worker first? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** a swap you would like, with both halves and who you ask first (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.6 =======================
out.push(pb());
out.push(h2('3.6  I am late because the road was closed'));
out.push(p('**You can:** say you are late and why   ·   **Grammar:** _because_   ·   **Sound:** the short reason'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You are late. What do you say first? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the two lines. Which is better at work? _sorry sorry sorry, there was a big problem · I am twenty minutes late. The road was closed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How late is Ammar?   **A** ten minutes   **B** twenty minutes   **C** an hour'));
out.push(p('**b**  Listen again.   **1** Why is he late?   **2** What does Abu Yasser ask him to do next time?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.11  Twenty minutes', [
  ['Ammar', 'Abu Yasser. I am twenty minutes late. The road was closed at Jaramana.'],
  ['Abu Yasser', 'Twenty minutes. All right.'],
  ['Ammar', 'I am sorry.'],
  ['Abu Yasser', 'Say the time and the reason. You did. That is enough.'],
  ['Ammar', 'The lorry?'],
  ['Abu Yasser', 'The lorry came at quarter past. Samih took it.'],
  ['Ammar', 'I will tell Samih thank you.'],
  ['Abu Yasser', 'Do. And next time, telephone. Two minutes on the telephone and I move a man.'],
  ['Ammar', 'I telephone. From the road.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying you are late**',
  table(['Step', 'You say'], [
    ['**1 how late**', '**I am twenty minutes late.**'],
    ['**2 why, short**', '**The road was closed at Jaramana.**'],
    ['**3 what you do next time**', '**Next time I telephone.**'],
  ], [1.8, 3.4]),
  '⚠ **The TIME first, not the reason.** **The supervisor needs to know how long, so he can move a man. The reason can wait ten seconds.**',
  '⚠ **One reason, short, with _because_ or without it:** _I am late **because** the bus did not come._ · _I am late. The bus did not come._ **Both are fine. A long story is not.**',
  '⚠ **Do not say sorry three times.** **Say it once, or not at all. The time and the reason are the apology.**',
  '**Practise:** Put them in order: _the bus did not come · I am fifteen minutes late · next time I telephone_',
  '**Useful words:**  I am ___ minutes late.  ·  because  ·  the road was closed  ·  next time  ·  I telephone.',
  '**Sound — the short reason.** 🔊 **Track 3.12** Listen. _I am twenty minutes late. The road was closed.↘_ **Both flat and both short.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is late. One is the supervisor. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. I am __________ minutes late. __________.'],
  ['B', '__________ minutes. All right.'],
  ['A', 'The __________?'],
  ['B', 'It came at __________. __________ took it.'],
  ['A', 'I will tell __________ thank you.'],
  ['B', 'And next time, __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['20 minutes · road closed at Jaramana · lorry · 7.15 · Samih', '40 minutes · the bus did not come · delivery · 8.00 · Hani']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** did the speaker say the TIME first? Say _yes_ or _no_.'));
out.push(PHRASE_CARD(['I am ___ minutes late.', 'because', 'The road was closed.', 'next time', 'I telephone.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of two times you were late. **Write it.** Time first, then the reason.'));
out.push(table(['How late', 'Why, in five words', 'What I do next time'], [['', '', ''], ['', '', '']], [1.2, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I was ______ minutes late. ______. Next time I ______._'));
out.push(p('**Listener task:** count the reports that said the time first. **That is the useful order.**'));
out.push(p('**Board clinic:** your teacher writes four excuses. Two start with the reason and are too long. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ammar left on the table. Then answer.'));
out.push(box(null, [
  '**FOR ABU YASSER — 14 MARCH**',
  '**I was 25 minutes late.** The road was closed at Jaramana.',
  '**The lorry:** Samih took it at 7.15.',
  '**Next time:** I telephone from the road.',
  '**A.Z.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How late was he?'));
out.push(item('2', 'Who took the lorry?'));
out.push(item('3', 'What will he do next time?'));
out.push(box('Writer\'s box', [
  '**A late note has four things:** how late → why, short → what happened to your job → what you do next time.',
  '⚠ **Line three is the one people forget and it is the one the supervisor wants.** **_Who did my job while I was not here?_**',
  '⚠ **Line four is not an apology. It is a plan.** _Next time I telephone._ **A plan is believed. _I am very sorry_ is not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a late note for your own work (**15 words or more**).'));
out.push(p('**FOR ______________ — ______________**   **I was ______ minutes late.** ______________.   **My job:** ______________ did it at ______.   **Next time:** ______________.   **______** (your name)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['How late, in minutes', ''],
  ['A short reason', ''],
  ['Who did the job', ''],
  ['A plan for next time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their _next time_ line. The class says if it is a plan or an apology.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a day you were late (**20 to 35 words**). How late? Why? Who did your job? What do you do now?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you telephone?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did somebody telephone? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the telephone number you would ring if you were late tomorrow (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review: the shift board'));
out.push(p('⚠ **This is the third unit of this book.** Days, times and shifts — and now a problem for the class to talk about together.'));
out.push(p('**You can:** read the shift board   ·   **Review:** Units 3.1 to 3.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**3.1**  The five days you work.', ''],
  ['**3.2**  7.15 and 10.30, both ways.', ''],
  ['**3.3**  Four things you do every day, in order.', ''],
  ['**3.4**  What one other person does. Remember the -s.', ''],
  ['**3.5**  Ask to swap a day.', ''],
  ['**3.6**  You are late. What do you say first?', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with Hani?   **A** he is always late   **B** he swaps every week and never writes it down   **C** he cannot read the board'));
out.push(p('**b**  Listen again.   **1** How many times has Hani swapped?   **2** Why does Samih not complain?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 3.13  Eleven swaps', [
  ['Abu Yasser', 'Hani has swapped eleven times this year. Nobody wrote one of them on the board.'],
  ['Ammar', 'Eleven?'],
  ['Abu Yasser', 'I counted the sheets. Eleven.'],
  ['Samih', 'He always asks me first. He never asks you.'],
  ['Abu Yasser', 'That is the right order. 3.5. Ask the other man first.'],
  ['Samih', 'And he always comes. He has never once not come.'],
  ['Ammar', 'So where is the problem?'],
  ['Abu Yasser', 'The board says Hani on Thursday. The board is wrong eleven times.'],
  ['Samih', 'The men know. We all know.'],
  ['Abu Yasser', 'The men know. The office does not. And the office pays.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**3.1**', '_Sunday to Thursday. Friday is my day off. Always on Monday._'],
    ['**3.2**', '_Quarter past seven. Seven fifteen. Both ways._'],
    ['**3.3**', '_I sign in. I read the board. I check the shelves._'],
    ['**3.4**', '_He starts at six. He checks the lorry._ — **with the -s**'],
    ['**3.5**', '_Can I swap Thursday? I ask Samih first, then I tell you._'],
    ['**3.6**', '_I am twenty minutes late. The road was closed. Next time I telephone._'],
  ], [1, 5]),
  '⚠ **The new thing here: everybody did the right thing and the paper is still wrong.** **Hani asked the right man. Samih agreed. Hani always came.** **And the board is wrong eleven times, because nobody told the supervisor.**',
  '**Useful words:**  he always asks  ·  he has never once  ·  the men know  ·  the office does not  ·  the office pays',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Samih. One is Abu Yasser. Say why you are right.'));
out.push(table(['Samih says', 'Abu Yasser says'], [[
  'Hani asks me first, every time. He always comes. ⚠ **No shift has ever been short.**',
  'The board says Hani on Thursday eleven times and it was Samih. ⚠ **The office pays from the board.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something at your work that everybody knows and no paper says. Tell your partner. **Write it.**'));
out.push(table(['What everybody knows', 'What the paper says', 'Who finds out, and when'], [['', '', ''], ['', '', '']], [1.6, 1.4, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Hani swapped eleven times. He asked the right man every time. He always came. Nobody wrote it on the board, and the office pays from the board.'));
out.push(table(['Samih is right', 'Abu Yasser is right', 'So we do this'], [[
  'Hani does the asking right. ⚠ **No shift has ever been short, and that is the thing that matters on the day.**',
  'The board has been wrong eleven times. ⚠ **The office pays Samih for a day Hani is written down for.**',
  '⚠ **The swap is not finished until it is on the board.** **Three steps, in order: ask the other man → he says yes → ONE of you tells the supervisor the same day.** **Hani tells. It is his swap.**',
]], [1, 1, 1.2]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _the men know, the office does not, and the office pays_. **A thing everybody knows is not written down anywhere, and that is exactly why it gets lost.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _SHIFT BOARD — NEW EVERY SUNDAY_   **A** The board never changes.   **B** There is a new board every week.   **C** Read it on Thursday.',
  '**2**  _SWAP? TELL THE SUPERVISOR THE SAME DAY_   **A** Tell him next week.   **B** Do not tell him.   **C** Tell him on the day you agree it.',
  '**3**  _LATE? TELEPHONE FROM THE ROAD_   **A** Come in and explain.   **B** Ring before you arrive.   **C** Say nothing.',
  '**4**  _BREAK 10.30 — 10.45_   **A** Fifteen minutes.   **B** Thirty minutes.   **C** An hour.',
  '**5**  _COUNT: EVERY THURSDAY_   **A** Once a month.   **B** Every week, on Thursday.   **C** On Monday.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about a day or a time, the DAY and the TIME go in the first two sentences.** **Everything else can wait.**',
  '⚠ **If you are asking for something, ask in the last sentence.** **The reader remembers the last thing.**',
  '**The shape:** who it is to → the day and the time → why → what you are asking for.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message asking to swap a day (**four sentences, about 30 words**). Say the day, who you want to swap with, why, and what you are asking.'));
out.push(p('**To:** ______________   _I am on the ______________ shift on ______________. ______________ is off that day. ______________. Can I swap with him?_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to your supervisor about a swap (**four sentences, about 30 words**). Say the day, who agreed, why, and ask for it to go on the board.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **answer** your supervisor would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  The delivery comes ___ Monday.   a) in   b) on   c) at',
  '2  I start ___ seven o\'clock.   a) in   b) on   c) at',
  '3  7.30 is ___ past seven.   a) quarter   b) half   c) three',
  '4  Fadi ___ the lorry every morning.   a) check   b) checks   c) checking',
  '5  He ___ work on Friday.   a) do not   b) does not   c) not',
  '6  ___ is the count this week?   a) When   b) Who   c) How',
  '7  ___ I swap Thursday?   a) Can   b) Do   c) Am',
  '8  I am late ___ the road was closed.   a) but   b) because   c) so',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 3.15** Listen. Write the answer.   **1** The day of the swap: ______   **2** Who he asks first: ______   **3** Why: ______   **4** Who he tells after: ______   **5** The time the lorry comes: ______   **6** How late he was: ______'));
out.push(p('**C  Reading.** Read the week board at 3.1 again. What happens on Monday? Which day is the count? Which days are normal?'));
out.push(p('**D  Writing.** Write four sentences to your supervisor about a swap (**about 30 words**). The day, who agreed, why, and what you are asking.'));
out.push(...lines(4));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Ammar', 'Samih, are you off on Tuesday?'],
  ['Samih', 'Tuesday. Yes.'],
  ['Ammar', 'Can I swap? My mother is in hospital on Tuesday.'],
  ['Samih', 'All right. I take your Tuesday, you take my Saturday.'],
  ['Ammar', 'Thank you. I tell Abu Yasser today.'],
  ['Samih', 'Tell him today. Not Monday.'],
  ['Ammar', 'Today. And the lorry comes at quarter past seven, yes?'],
  ['Samih', 'Quarter past seven. You were thirty minutes late on Thursday. Do not be late again.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**3.1**  say the days and which are my working days',
  '**3.2**  say a time two ways',
  '**3.3**  say six things I do every day, in order',
  '**3.4**  say what another person does, with the -s',
  '**3.5**  ask to swap a day, in the right order',
  '**3.6**  say I am late, with the time first and a plan at the end',
  '**3.7**  read a shift board, and say why everybody can be right and the paper still wrong',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the working-day unit.**',
  '**yesterday** — here it is one word about one day. **At A2 you tell the story of a whole week that has finished.**',
  '**day off** — here you say which day it is. **At A2 you write an email asking for one.**',
  '**break** — here it is a time on a notice. **At A2 it is part of a timetable you explain to a new person.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
module.exports = out;
