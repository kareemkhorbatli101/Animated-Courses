// Proactive Business English A1 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'gate · gate book · badge · shift · shift list · storeman · supervisor · yard · store · name · surname · spell · letter · sign in · sign out · morning · afternoon · colleague · start work · finish work · visitor · write down';
const AHEAD_AT_A2 = 'badge · surname · spell';

out.push(h1('Unit 1  Your Name and the Gate'));
out.push(p('_Proactive Business English · A1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**1.1**  say your name and your job',
  '**1.2**  say the letters, and spell your name',
  '**1.3**  find your name on a list',
  '**1.4**  say who another person is',
  '**1.5**  say hello in the morning and goodbye at four o\'clock',
  '**1.6**  say that you did not understand',
  '**1.7**  Review: the gate book — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The people in this book', [
  'Everybody works at **Sham Trading**, a small company in **Mezzeh, Damascus**. There is a **gate**, a **yard**, two **stores**, a **trade counter** at the front, and an **office** on the second floor.',
  '**Ammar Zreik** (19) — storeman. **It is his first job. He starts in this unit.**',
  '**Abu Yasser** (52) — the supervisor. Thirty years here. He says: _check it twice_.',
  '**Abu Raed** (58) — the gate. He writes every name in the **gate book**. Nine years, every day.',
  '**Fadi Saeed** (31) — the driver.   ·   **Majd Bitar** (23) — the trade counter.',
  '**Samih Qassar** (24) — the other storeman. Two years here. He counts the back store on Mondays.',
  '**Nour Mansour** (24) — the office. She is new too, upstairs.',
], C.lyellow, C.orange));
out.push(sp());
out.push(box('How this book works', [
  '**Lesson A — you speak:**  1 Get ready → 2 Listen and read → 3 Practise → 3R Perform → 4 Your turn → 4R Report',
  '**Lesson B — you write:**  5 Read → 6 Write with help → 6P Check together → 6R Share → 7 Write freely → 7P Respond → 7R Share → Homework',
  '⚠ **Arabic is fine in this class.** Ask in Arabic. Say the English part in English. Nobody will stop you.',
  '⚠ **Every task has five steps: Read. Say it. Write it. Check it. Ask your partner.** They are always in that order.',
  'Everything here happens at work. Where a task is about **you**, use your real job — or invent one.',
], C.grey, C.navy));

// ======================= CYCLE 1.1 =======================
out.push(pb());
out.push(h2('1.1  My name is Ammar. I am the new storeman.'));
out.push(p('**You can:** say your name and your job   ·   **Grammar:** _I am · you are_   ·   **Sound:** _I\'m_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  It is your first day. What do you say? Say it in Arabic. Then say it in English. Your teacher writes it on the board.'));
out.push(table(['In Arabic', 'In English'], [['', 'My name is…'], ['', ''], ['', '']], [1, 1]));
out.push(p('**b**  Read the four jobs. Which one is yours? _storeman · driver · counter · office_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Ammar?   **A** in the office   **B** at the gate   **C** at home'));
out.push(p('**b**  Listen again.   **1** What is Ammar\'s job?   **2** What time is it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.1  Ten to seven in the morning', [
  ['Abu Raed', 'Good morning. Your name, please.'],
  ['Ammar', 'Good morning. My name is Ammar Zreik.'],
  ['Abu Raed', 'Ammar. And your job?'],
  ['Ammar', 'I am the new storeman.'],
  ['Abu Raed', 'The new storeman. Welcome. I am Abu Raed. I am the gate.'],
  ['Ammar', 'Thank you.'],
  ['Abu Raed', 'It is ten to seven. You are early. That is good.'],
  ['Ammar', 'Yes. My first day.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar — _I am · you are_**',
  table(['+', '–', '?'], [
    ['I **am** Ammar.   I**\'m** Ammar.', 'I **am not** the driver.', '**Am** I early? — Yes, you are.'],
    ['You **are** the storeman.   You**\'re**…', 'You **are not** late.', '**Are** you Ammar? — Yes, I am.'],
  ], [1.3, 1, 1.3]),
  '⚠ English needs **am** or **are** in the sentence. Say _I am Ammar_, not ~~I Ammar~~.',
  '⚠ **a** before most words: _a storeman, a driver_. **the** when there is only one: _the gate, the office_.',
  '**Practise:** Write _am_, _are_ or _am not_.',
  '1 I ___ Ammar.   2 You ___ the supervisor.   3 I ___ the driver. I am the storeman.   4 ___ you new? — Yes, I ___.',
  '**Useful words:**  Good morning.  ·  My name is…  ·  I am the new…  ·  Welcome.  ·  Thank you.',
  '**Sound — _I\'m_.** 🔊 **Track 1.2** Listen. Say it. _I am_ → _I\'m_. _I\'m Ammar._ _I\'m the storeman._ Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', 'Good morning. Your name, please.'],
  ['B', 'Good morning. My name is __________.'],
  ['A', 'And your job?'],
  ['B', 'I am the new __________.'],
  ['A', 'Welcome. I am __________.'],
  ['B', 'Thank you.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Fadi Saeed · the driver', 'Majd Bitar · the counter']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** tick the words you hear.'));
out.push(PHRASE_CARD(['Good morning.', 'My name is…', 'I am the new…', 'Welcome.', 'Thank you.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Stand up. Meet **three** people. Say your name and your job. Write their names here.'));
out.push(table(['Name', 'Job'], [['', ''], ['', ''], ['', '']], [1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _This is ______. He is / She is the ______._'));
out.push(p('**Listener task:** write one name. Then ask that person: _Are you the ______?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the line from the gate book. Then answer.'));
out.push(box(null, [
  '**GATE BOOK — SHAM TRADING**',
  table(['Date', 'Name', 'Job', 'In', 'Out'], [
    ['4 March', 'Ammar Zreik', 'storeman', '6.50', '4.05'],
    ['4 March', 'Fadi Saeed', 'driver', '7.10', '5.30'],
  ], [1, 1.6, 1.2, 0.8, 0.8]),
], 'FFFFFF', C.navy));
out.push(item('1', 'What is Ammar\'s job?'));
out.push(item('2', 'What time does Fadi come in?'));
out.push(item('3', 'Who is out at 4.05?'));
out.push(box('Writer\'s box', [
  '**A line in the gate book has five things:** the date → the name → the job → the time in → the time out.',
  '⚠ **Big letters** for names: **A**mmar **Z**reik. For the city: **D**amascus. For the company: **S**ham **T**rading.',
  '⚠ Write the **surname** too. There are two men called Ammar in this yard.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own line in the gate book (**15 words or more**). Use the words below.'));
out.push(p('**Date:** ______________   **Name:** ______________   **Job:** ______________   **In:** ______   **Out:** ______   **And one sentence:** _My name is ______________ and I am the ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How we check — read this once. We use it all year.', [
  '⚠ **Not helpful:** "Good." · "Bad." · "Many mistakes."',
  '⚠ **This is what we do:**  **Point at the line. Read it aloud. Say the one thing that is missing.**',
  'Three things. No more. Arabic is fine.',
  '**Words you can use:**  Here. · Read it again. · The surname? · The big letter? · Good.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Change books with your partner. **Read.** **Check it.** Tick ✓ or cross ✗.'));
out.push(table(['Check', '✓ / ✗'], [
  ['Big letter for the name and the surname', ''],
  ['The job is there', ''],
  ['Two times: in and out', ''],
  ['_am_ or _are_ in the sentence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line **before** and **after**. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your first day (**20 to 35 words**). Say your name, your job, the time you start and the time you finish.'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner** one question. Write it:  ★ _I like…_   ? _one question_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the papers on the wall. Walk and read. Write one word on a paper you like: _Good._'));
out.push(box('Homework', ['Finish your writing. Then **write down** the names of four people at your work, with the surname (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.2 =======================
out.push(pb());
out.push(h2('1.2  Z, R, E, I, K — how do you spell it?'));
out.push(p('**You can:** say the letters and spell your name   ·   **Grammar:** _How do you spell…?_   ·   **Sound:** the hard letters'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the letters you know in English. Your teacher writes them on the board.'));
out.push(p('**b**  Which letters are in your name? Say them. Write them here: ______________'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** Ammar is late   **B** Abu Raed cannot write the name   **C** the gate is closed'));
out.push(p('**b**  Listen again.   **1** How many letters in _Zreik_?   **2** What does Abu Raed write in the book?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.3  Five letters', [
  ['Abu Raed', 'Zreik. How do you spell it?'],
  ['Ammar', 'Z, R, E, I, K.'],
  ['Abu Raed', 'Again, please. Slowly.'],
  ['Ammar', 'Z. R. E. I. K. Five letters.'],
  ['Abu Raed', 'Five. Good. I write it in Arabic in my book. I do not write English.'],
  ['Ammar', 'Nine years?'],
  ['Abu Raed', 'Nine years. Every name. Every day.'],
  ['Ammar', 'And nobody says it is wrong?'],
  ['Abu Raed', 'Nobody reads it. Only me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The letters**',
  table(['A B C D E F G', 'H I J K L M N', 'O P Q R S T U', 'V W X Y Z'], [['', '', '', '']], [1, 1, 1, 0.8]),
  '**Asking:**  How do you spell it?  ·  Again, please.  ·  Slowly, please.  ·  Is it a B or a P?',
  '⚠ **The hard ones.** These sound the same to many people. Say them slowly: **B / P** · **G / J** · **E / I** · **S / X**.',
  '**Practise:** Spell these. Say each letter. _gate · yard · shift · store · badge_',
  '**Useful words:**  five letters  ·  the first letter  ·  the last letter  ·  big letter  ·  small letter',
  '**Sound — the hard letters.** 🔊 **Track 1.4** Listen. Say it. _B — P. G — J. E — I. S — X._ Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. How do you spell it?'],
  ['B', '__________.'],
  ['A', 'Again, please. Slowly.'],
  ['B', '__________. ______ letters.'],
  ['A', 'Is it a __________ or a __________?'],
  ['B', 'A __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Your own surname', 'The name of your street']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the name you hear. Then show it. Is it right?'));
out.push(PHRASE_CARD(['How do you spell it?', 'Again, please.', 'Slowly.', 'Is it a B or a P?', '…letters.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Work in pairs. **Ask your partner** for four names. Write them. Then check them.'));
out.push(table(['I wrote', 'Right ✓ / Wrong ✗'], [['', ''], ['', ''], ['', ''], ['', '']], [2.5, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I wrote ______ names. ______ are right. The hard one was ______._'));
out.push(p('**Listener task:** count the names that were wrong. Which letters were the problem?'));
out.push(p('**Board clinic:** your teacher writes three names on the board, two with a wrong letter. Find them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card. Then answer.'));
out.push(box(null, [
  '**SHAM TRADING — STAFF BADGE**',
  '**Name:** AMMAR ZREIK',
  '**Job:** Storeman',
  '**Number:** 41',
  '**Start:** 4 March',
], 'FFFFFF', C.navy));
out.push(item('1', 'How do you spell the surname?'));
out.push(item('2', 'What is the number?'));
out.push(item('3', 'How many letters are in the first name?'));
out.push(box('Writer\'s box', [
  '**A badge has four things:** the name → the job → the number → the day you started.',
  '⚠ On a badge the name is in **BIG LETTERS**, every letter. AMMAR ZREIK.',
  '⚠ Count the letters before you write. Five is five. Say them, then write them, then **Check it**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own badge (**15 words or more**).'));
out.push(p('**Name:** ______________   **Job:** ______________   **Number:** ______   **Start:** ______________   **And one sentence:** _My surname is ______________. It has ______ letters._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The name is in big letters', ''],
  ['The number of letters is right', ''],
  ['All four things are there', ''],
  ['The sentence has _is_ or _has_', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students spell their surname for the class. The class writes it. Then they show it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a name that is hard to spell (**20 to 35 words**). Whose name is it? How many letters? Which letter is the problem?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner** to spell the name aloud. Write it. Is it the same?'));
out.push(stage('7R', 'Share', 4));
out.push(p('Three students spell a name. The class writes. Count the right ones on the board.'));
out.push(box('Homework', ['Finish your writing. Then spell four names from your work, letter by letter, and write the number of letters (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.3 =======================
out.push(pb());
out.push(h2('1.3  This is the list. That is my name.'));
out.push(p('**You can:** find your name on a list   ·   **Grammar:** _this is · that is_   ·   **Sound:** _this / that_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What lists are at your work? Say them in Arabic. Your teacher writes the English on the board.'));
out.push(p('**b**  Look at a list on the wall. Where is your name — near the top or near the bottom?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ammar find?   **A** his badge   **B** his name on the shift list   **C** the store key'));
out.push(p('**b**  Listen again.   **1** How many names are on the list?   **2** Which shift is Ammar on?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.5  The shift list', [
  ['Abu Yasser', 'This is the store. And this is the shift list.'],
  ['Ammar', 'Where is my name?'],
  ['Abu Yasser', 'Look. Eleven names. That is you — number seven.'],
  ['Ammar', 'Zreik. Yes. That is me.'],
  ['Abu Yasser', 'You are on the morning shift. Seven to four.'],
  ['Ammar', 'Seven to four. Every day?'],
  ['Abu Yasser', 'Sunday to Thursday. Read the list every morning. It changes.'],
  ['Ammar', 'It changes?'],
  ['Abu Yasser', 'Every week. Read it. Do not ask me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar — _this_ and _that_**',
  table(['Near me', 'Not near me'], [
    ['**This** is the list.   **This** is my name.', '**That** is the gate.   **That** is your name.'],
    ['**These** are the boxes.', '**Those** are the pallets.'],
  ], [1, 1]),
  '⚠ **this** = here, near my hand. **that** = there, away from me.',
  '⚠ One thing: _this / that_. Two or more: _these / those_.',
  '**Practise:** Write _this_, _that_, _these_ or _those_.',
  '1 ___ is the shift list. (here)   2 ___ is the gate. (far)   3 ___ are my boxes. (here)   4 ___ are your pallets. (far)',
  '**Useful words:**  Where is my name?  ·  That is me.  ·  number seven  ·  the morning shift  ·  It changes.',
  '**Sound — _this / that_.** 🔊 **Track 1.6** Listen. Say it. Put your tongue between your teeth: _this · that · these · those_. Say each one four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One person points. One person says. Then change places.'));
out.push(dlg(null, [
  ['A', 'This is the __________. And this is the __________.'],
  ['B', 'Where is my name?'],
  ['A', 'Look. __________ names. That is you — number __________.'],
  ['B', 'Yes. That is me.'],
  ['A', 'You are on the __________ shift.'],
  ['B', '__________ to __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['the store · the shift list · 11 names · number 7 · morning · 7 to 4', 'the yard · the lorry list · 6 names · number 2 · afternoon · 12 to 9']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** tick the words you hear.'));
out.push(PHRASE_CARD(['This is…', 'That is…', 'Where is my name?', 'number…', 'the morning shift']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Look around the room. Point at four things. Say _this_ or _that_. Write the four things.'));
out.push(table(['this / that', 'The thing'], [['', ''], ['', ''], ['', ''], ['', '']], [1, 2.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _This is ______. That is ______._ Point while you say it.'));
out.push(p('**Listener task:** was it near or far? Say _near_ or _far_ after each one.'));
out.push(p('**Board clinic:** your teacher writes four sentences on the board. Two use the wrong word. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list. Then answer.'));
out.push(box(null, [
  '**SHIFT LIST — WEEK OF 4 MARCH — STORE**',
  table(['', 'Name', 'Shift'], [
    ['5', 'Hani Deeb', 'afternoon'],
    ['6', 'Samih Qassar', 'morning'],
    ['7', 'Ammar Zreik', 'morning'],
    ['8', 'Omar Sibai', 'afternoon'],
  ], [0.6, 2, 1.4]),
], 'FFFFFF', C.navy));
out.push(item('1', 'What number is Ammar?'));
out.push(item('2', 'Who is on the afternoon shift?'));
out.push(item('3', 'Which week is this list for?'));
out.push(box('Writer\'s box', [
  '**A shift list has four things:** the week → the number → the name → the shift.',
  '⚠ The **week** is at the top. A list with no week is a list for no week. Always look at the top first.',
  '⚠ Names go **surname first** on some lists and **first name first** on others. **Read it. Check it.** Do not guess.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shift list for four people at your work (**15 words or more**).'));
out.push(p('**Week of:** ______________   **1** ______________ — ______________   **2** ______________ — ______________   **3** ______________ — ______________   **4** ______________ — ______________   **And one sentence:** _This is the list for ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The week is at the top', ''],
  ['Four names, with numbers', ''],
  ['A shift for every name', ''],
  ['_This is…_ in the sentence', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their week line. The class says if the week is clear.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a list at your work (**20 to 35 words**). What list is it? Where is it? Is your name on it?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Where is that list?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Three students say where their list is. The class says which one is easiest to find.'));
out.push(box('Homework', ['Finish your writing. Then copy one real list from your work and **write down** where it is on the wall (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.4 =======================
out.push(pb());
out.push(h2('1.4  He is the driver. She is in the office.'));
out.push(p('**You can:** say who another person is   ·   **Grammar:** _he is · she is · it is_   ·   **Sound:** _he\'s / she\'s_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say the names of three people at your work. What is each one\'s job?'));
out.push(p('**b**  Read the four jobs. Which are in the yard, and which are in the office? _driver · storeman · accountant · counter_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many people does Abu Yasser name?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again.   **1** Who is Fadi?   **2** Where is Nour?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.7  Who is who', [
  ['Abu Yasser', 'That man by the lorry is Fadi. He is the driver.'],
  ['Ammar', 'Fadi. And the man at the counter?'],
  ['Abu Yasser', 'That is Majd. He is on the counter. He is good with the customers.'],
  ['Ammar', 'And the woman on the stairs?'],
  ['Abu Yasser', 'She is Nour. She is in the office. She is new too — today is her first day.'],
  ['Ammar', 'Her first day too?'],
  ['Abu Yasser', 'Yes. She is upstairs, you are down here.'],
  ['Ammar', 'And Abu Raed is the gate.'],
  ['Abu Yasser', 'Abu Raed is the gate. He is always the gate.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar — _he · she · it_**',
  table(['+', '–', '?'], [
    ['He **is** the driver.   He**\'s**…', 'He **is not** the storeman.', '**Is** he the driver? — Yes, he is.'],
    ['She **is** in the office.   She**\'s**…', 'She **is not** in the yard.', '**Is** she new? — Yes, she is.'],
    ['It **is** my badge.   It**\'s**…', 'It **is not** your badge.', '**Is** it the key? — No, it is not.'],
  ], [1.3, 1.1, 1.3]),
  '⚠ **he** = a man. **she** = a woman. **it** = a thing. In Arabic a thing can be he or she. In English a thing is **it**.',
  '**Practise:** Write _he is_, _she is_ or _it is_.',
  '1 Fadi? ___ the driver.   2 Nour? ___ in the office.   3 The badge? ___ on the table.   4 Majd? ___ on the counter.',
  '**Useful words:**  That man is…  ·  That woman is…  ·  He is good with…  ·  her first day  ·  upstairs / down here',
  '**Sound — _he\'s / she\'s_.** 🔊 **Track 1.8** Listen. Say it. _He is_ → _he\'s_. _She is_ → _she\'s_. _He\'s the driver._ _She\'s in the office._ Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', 'That man is __________. He is the __________.'],
  ['B', 'And the woman?'],
  ['A', 'She is __________. She is in the __________.'],
  ['B', 'Is she new?'],
  ['A', 'Yes, she is. / No, she is not.'],
  ['B', 'And __________?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Fadi · driver · Nour · office · new', 'Majd · counter · Hala · customer service · not new']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** tick the words you hear.'));
out.push(PHRASE_CARD(['That man is…', 'He is the…', 'That woman is…', 'She is in the…', 'Is she new?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of four people at your work. Tell your partner who they are. Write it.'));
out.push(table(['Name', 'he / she', 'Job or place'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.4, 0.8, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is ______. He is / She is the ______._'));
out.push(p('**Listener task:** write one name and one job. Then ask: _Is he the ______?_'));
out.push(p('**Board clinic:** your teacher writes four sentences on the board. Two use _he_ for a woman or _it_ for a person. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note on the store wall. Then answer.'));
out.push(box(null, [
  '**WHO TO ASK — STORE WALL**',
  '**Abu Yasser** — he is the supervisor. Ask him about the shelves and the count.',
  '**Fadi** — he is the driver. Ask him about the lorry and the times.',
  '**Majd** — he is on the counter. Ask him about the customers.',
  '**Nour** — she is in the office. Ask her about paper: notes, lists, numbers.',
  '**Abu Raed** — he is the gate. Ask him about visitors.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who do you ask about the lorry?'));
out.push(item('2', 'What do you ask Nour about?'));
out.push(item('3', 'Who is the supervisor?'));
out.push(box('Writer\'s box', [
  '**A who-to-ask note has three things on every line:** the name → _he is_ or _she is_ → what to ask about.',
  '⚠ Use **him** for a man and **her** for a woman: _Ask **him** about the lorry. Ask **her** about the lists._',
  '⚠ One person, one line. A line with two people is a line nobody can use.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a who-to-ask note for your own work (**15 words or more**).'));
out.push(p('**WHO TO ASK**   ______________ — he is / she is the ______________. Ask him / her about ______________.   ______________ — he is / she is the ______________. Ask him / her about ______________.   ______________ — he is / she is the ______________. Ask him / her about ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_he is_ or _she is_ on every line', ''],
  ['_him_ for a man, _her_ for a woman', ''],
  ['One person on each line', ''],
  ['Something to ask about on every line', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line. The class says who they would ask for help.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about one person at your work (**20 to 35 words**). Who is he or she? What is the job? What do you ask about?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Is he the ______?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the papers on the wall. Walk and read. Find two people with the same job.'));
out.push(box('Homework', ['Finish your writing. Then **write down** five people at your work and what you ask each one about (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.5 =======================
out.push(pb());
out.push(h2('1.5  Good morning at seven, goodbye at four'));
out.push(p('**You can:** say hello and goodbye at work   ·   **Grammar:** _in the morning · at four_   ·   **Sound:** the friendly voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say when you come to work? What do you say when you go home? Say it in Arabic, then in English.'));
out.push(p('**b**  Read the four words. Which is the morning and which is the afternoon? _7.00 · 11.00 · 14.00 · 16.00_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many times does Ammar say goodbye?   **A** once   **B** twice   **C** four times'));
out.push(p('**b**  Listen again.   **1** What does Abu Yasser say at four o\'clock?   **2** What does Ammar forget?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.9  The end of the first day', [
  ['Abu Yasser', 'Four o\'clock. Good. Go home.'],
  ['Ammar', 'Goodbye, Abu Yasser.'],
  ['Abu Yasser', 'Goodbye. See you tomorrow morning. Seven o\'clock.'],
  ['Ammar', 'Seven o\'clock. Goodbye.'],
  ['Abu Raed', 'Ammar! The book.'],
  ['Ammar', 'Sorry?'],
  ['Abu Raed', 'Sign out. Your name, and the time. Every day, in and out.'],
  ['Ammar', 'Ah. Sorry. Four o\'clock.'],
  ['Abu Raed', 'Four o\'clock. Good night, Ammar.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Hello and goodbye at work**',
  table(['Time', 'You say'], [
    ['7.00 — 12.00', '**Good morning.**'],
    ['12.00 — 18.00', '**Good afternoon.**'],
    ['going home', '**Goodbye.** · **See you tomorrow.** · **Good night.**'],
  ], [1.4, 3]),
  '⚠ **in** the morning / **in** the afternoon. But **at** seven o\'clock, **at** four.',
  '⚠ **Sign in** when you come. **Sign out** when you go. Every day. Both.',
  '**Practise:** Write _in_ or _at_.',
  '1 I start ___ seven.   2 I work ___ the morning.   3 I finish ___ four.   4 He comes ___ the afternoon.',
  '**Useful words:**  Good morning.  ·  Good afternoon.  ·  Goodbye.  ·  See you tomorrow.  ·  Good night.',
  '**Sound — the friendly voice.** 🔊 **Track 1.10** Listen. The voice goes **up** at the end: _Good morning↗_ _See you tomorrow↗_. A flat voice sounds angry. Say it four times, going up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Read the lines. Say it. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ o\'clock. Good. Go home.'],
  ['B', 'Goodbye, __________.'],
  ['A', 'Goodbye. See you tomorrow __________.'],
  ['B', '__________ o\'clock. Goodbye.'],
  ['A', '__________! The book.'],
  ['B', 'Sorry. __________ o\'clock.'],
]));
out.push(table(['Card 1', 'Card 2'], [['four · Abu Yasser · morning · seven', 'nine · Majd · afternoon · twelve']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** tick the words you hear.'));
out.push(PHRASE_CARD(['Good morning.', 'Good afternoon.', 'Goodbye.', 'See you tomorrow.', 'Good night.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about your day. What time do you start? What time do you finish? What do you say?'));
out.push(table(['I start at', 'I finish at', 'I say'], [['', '', ''], ['', '', '']], [1, 1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I start at ______. I finish at ______. In the morning I say ______._'));
out.push(p('**Listener task:** who starts earliest? Who finishes latest? Say the two names.'));
out.push(p('**Board clinic:** your teacher writes four sentences on the board. Two use _in_ for _at_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice at the gate. Then answer.'));
out.push(box(null, [
  '**GATE — SHAM TRADING**',
  '**Morning shift:** sign in at **7.00**. Sign out at **4.00**.',
  '**Afternoon shift:** sign in at **12.00**. Sign out at **9.00**.',
  '⚠ **Sign in AND sign out. Every day. Both.**',
  'No name in the book = no day of work on the paper at the end of the month.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What time does the afternoon shift finish?'));
out.push(item('2', 'What must you do twice every day?'));
out.push(item('3', 'What happens if your name is not in the book?'));
out.push(box('Writer\'s box', [
  '**A gate notice has three things:** the times → what you must do → what happens if you do not.',
  '⚠ The last line is the one people read. Put the **money** part last: _no name = no day of work_.',
  '⚠ Write the times as numbers: **7.00**, not _seven_. A number on a wall is read from far away.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a gate notice for your own work (**15 words or more**).'));
out.push(p('**GATE — ______________**   **Morning shift:** sign in at ______. Sign out at ______.   **Afternoon shift:** sign in at ______. Sign out at ______.   **You must:** ______________.   **If you do not:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Four times, as numbers', ''],
  ['_at_ before every time', ''],
  ['What you must do', ''],
  ['What happens if you do not', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their last line. The class says which one they would not forget.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your own day at work (**20 to 35 words**). When do you come? When do you go? What do you say to people?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _What do you say at four o\'clock?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Three students read. The class counts how many say goodbye to a person by name.'));
out.push(box('Homework', ['Finish your writing. Then **write down** the four times of your week: in, out, in, out (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.6 =======================
out.push(pb());
out.push(h2('1.6  Sorry — again, please'));
out.push(p('**You can:** say that you did not understand   ·   **Grammar:** _Can you…? · Please_   ·   **Sound:** _Sorry?_ going up'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Somebody speaks fast. You do not understand. What do you do now? Say it in Arabic.'));
out.push(p('**b**  Read the two lines. Which one is better at work? _I say nothing and I do it wrong · I say "Sorry — again, please"_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser say at the end?   **A** go home   **B** ask again, always   **C** you are late'));
out.push(p('**b**  Listen again.   **1** How many boxes?   **2** What does Ammar not understand — the number or the place?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.11  Fourteen or forty?', [
  ['Abu Yasser', 'Ammar — fourteen boxes to row three, shelf two.'],
  ['Ammar', 'Sorry?'],
  ['Abu Yasser', 'Fourteen boxes. Row three, shelf two.'],
  ['Ammar', 'Again, please. Slowly.'],
  ['Abu Yasser', 'Four — teen. One four. Fourteen. Not forty.'],
  ['Ammar', 'Fourteen. Row three, shelf two. Can you write it down?'],
  ['Abu Yasser', 'Here. Fourteen. Row 3. Shelf 2.'],
  ['Ammar', 'Thank you. Sorry.'],
  ['Abu Yasser', 'Do not say sorry. Ask. Always ask. Ask me ten times.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**When you do not understand**',
  table(['You say', 'When'], [
    ['**Sorry?**', 'you heard nothing'],
    ['**Again, please.**  ·  **Slowly, please.**', 'you heard, but it was fast'],
    ['**Can you write it down?**', 'it is a number, or a name'],
    ['**Is it 14 or 40?**', 'two numbers sound the same'],
  ], [2, 2]),
  '⚠ **14 and 40 sound the same on a bad telephone.** So do 15 / 50, 16 / 60, 17 / 70. ⚠ **Always ask. Always.**',
  '⚠ **Do not say sorry for asking.** Asking is your job. Doing it wrong is not.',
  '**Practise:** What do you say?',
  '1 He spoke very fast. ___   2 It is a long name. ___   3 You heard nothing. ___   4 It is 15 or 50. ___',
  '**Useful words:**  Sorry?  ·  Again, please.  ·  Slowly.  ·  Can you write it down?  ·  Is it ___ or ___?',
  '**Sound — _Sorry?_ going up.** 🔊 **Track 1.12** Listen. _Sorry?↗_ going up is a question. _Sorry.↘_ going down is an apology. Say the question four times, going up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A speaks fast. B asks. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ boxes to row __________, shelf __________.'],
  ['B', 'Sorry?'],
  ['A', '__________ boxes. Row __________, shelf __________.'],
  ['B', 'Again, please. Slowly.'],
  ['A', '__________. Not __________.'],
  ['B', 'Can you write it down?'],
]));
out.push(table(['Card 1', 'Card 2'], [['14 boxes · row 3 · shelf 2 · not 40', '15 rolls · row 6 · shelf 1 · not 50']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the number you hear. Then show it. Is it right?'));
out.push(PHRASE_CARD(['Sorry?', 'Again, please.', 'Slowly.', 'Can you write it down?', 'Is it 14 or 40?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Work in pairs. Say four numbers fast. Your partner asks and writes. Then check them.'));
out.push(table(['I said', 'My partner wrote', 'Same? ✓ / ✗'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said ______ numbers. My partner wrote ______ right. The hard one was ______._'));
out.push(p('**Listener task:** count the wrong numbers in the class. Which pairs of numbers were the problem?'));
out.push(p('**Board clinic:** your teacher says six numbers fast. Write them. Then check them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paper Abu Yasser wrote. Then answer.'));
out.push(box(null, [
  '**FOR AMMAR — 4 MARCH**',
  '**14** boxes  (one four — NOT 40)',
  '**Row 3, shelf 2**',
  'Ask me if it is not there. Do not put it somewhere else.',
  '**A.Y.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many boxes?'));
out.push(item('2', 'What must Ammar do if the shelf is full?'));
out.push(item('3', 'Who wrote the paper?'));
out.push(box('Writer\'s box', [
  '**A paper for one person has four things:** the name → the number → the place → what to do if there is a problem.',
  '⚠ Write a number that can be read two ways **twice**: **14** _(one four)_. It costs four words and it saves a day.',
  '⚠ Put your name at the end — even two letters. A paper from nobody is a paper nobody will ask about.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a paper for one person at your work (**15 words or more**).'));
out.push(p('**FOR ______________ — ______________**   **______** ______________  (______ — NOT ______)   **Place:** ______________   **If there is a problem:** ______________.   **______________** (your name)'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A name at the top', ''],
  ['The number written twice', ''],
  ['A place', ''],
  ['A name at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their number line. The class says if it can be read two ways.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you did not understand at work (**20 to 35 words**). What was it? What did you do? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you ask again?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many did the person ask again? Count them on the board.'));
out.push(box('Homework', ['Finish your writing. Then **write down** four numbers from your work that can be read two ways (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 1.7 =======================
out.push(pb());
out.push(h2('1.7  Review: the gate book'));
out.push(p('⚠ **This is the first unit of this book.** One week at work, and now a problem for the class to talk about together.'));
out.push(p('**You can:** read a page from the gate book   ·   **Review:** Units 1.1 to 1.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**1.1**  Your name and your job.', ''],
  ['**1.2**  Spell your surname.', ''],
  ['**1.3**  Point at something near you, and something far.', ''],
  ['**1.4**  Say who one person at your work is.', ''],
  ['**1.5**  What do you say at four o\'clock?', ''],
  ['**1.6**  You did not hear. What do you say?', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with the gate book?   **A** it is full   **B** only Abu Raed can read it   **C** it is lost'));
out.push(p('**b**  Listen again.   **1** How long has Abu Raed kept the book?   **2** What does Nour want?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 1.13  Nine years of names', [
  ['Nour', 'Abu Raed, I need the names from Tuesday. The office needs them.'],
  ['Abu Raed', 'They are here. Tuesday. Eleven names.'],
  ['Nour', '(reading) I cannot read this. It is in Arabic letters.'],
  ['Abu Raed', 'It is in my letters. Nine years. Every name. Every day. Not one day missing.'],
  ['Nour', 'I know. The book is perfect. But the office cannot read it.'],
  ['Abu Raed', 'Then come to the gate and I will read it to you.'],
  ['Ammar', 'I can read the English. I can write it next to his.'],
  ['Abu Raed', 'Next to mine. Not instead of mine.'],
  ['Nour', 'Next to yours. Both.'],
  ['Abu Raed', 'Then it is good. Nine years is nine years.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**1.1**', '_My name is Ammar. I am the new storeman._'],
    ['**1.2**', '_Z, R, E, I, K. Five letters. How do you spell it?_'],
    ['**1.3**', '_This is the list. That is my name. Number seven._'],
    ['**1.4**', '_He is the driver. She is in the office._'],
    ['**1.5**', '_Good morning. Goodbye. See you tomorrow._'],
    ['**1.6**', '_Sorry? Again, please. Can you write it down?_'],
  ], [1, 5]),
  '⚠ **The new thing here: two people are both right.** Abu Raed is right — his book is perfect and it is nine years old. Nour is right — the office cannot read it. **Nobody is wrong.**',
  '**Useful words:**  I can read it.  ·  next to  ·  not instead of  ·  both  ·  Nine years is nine years.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One person is Abu Raed. One person is Nour. Say why you are right.'));
out.push(table(['Abu Raed says', 'Nour says'], [[
  'Nine years. Every name. Every day. Not one day missing. ⚠ **It is a perfect book.**',
  'The book is perfect. ⚠ **But four people in the office cannot read one word of it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something at your work that only **one person** can read or do. Tell your partner. Write it.'));
out.push(table(['The thing', 'Who can do it', 'What if that person is away'], [['', '', ''], ['', '', '']], [1.4, 1.2, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** Abu Raed keeps a perfect book that only he can read. The office needs the names and cannot read them. Ammar can read English.'));
out.push(table(['Abu Raed is right', 'Nour is right', 'So we do this'], [[
  'Nine years, every day, not one day missing. ⚠ **A book that is never wrong.**',
  'The office needs Tuesday\'s names today. ⚠ **A book nobody can read is no help to them.**',
  '⚠ **Ammar writes the name in English NEXT TO Abu Raed\'s, not instead of it. Both names. Every day.** From Monday.',
]], [1, 1, 1.2]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _next to_ — **not** _instead of_. Nine years of work stays in the book.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _SIGN IN AND SIGN OUT — BOTH_   **A** Sign your name twice a day.   **B** Sign your name once.   **C** Do not sign.',
  '**2**  _SHIFT LIST — NEW EVERY WEEK_   **A** The list is always the same.   **B** Read it every week.   **C** The list is in the office.',
  '**3**  _VISITORS: NAME AT THE GATE_   **A** Visitors go in.   **B** Visitors give a name at the gate.   **C** No visitors.',
  '**4**  _14 BOXES (ONE FOUR — NOT 40)_   **A** Forty boxes.   **B** Four boxes.   **C** Fourteen boxes.',
  '**5**  _ASK ABU YASSER ABOUT THE SHELVES_   **A** Ask him about the lorry.   **B** Ask him about the shelves.   **C** Do not ask.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** You write a short message. **Three things, all three there.**',
  '⚠ At A1 we write **four sentences, about 30 words**. The real A2 exam asks for 25 words and three things. **Same shape, one step down.**',
  '**The shape:** who it is to → your name → what you want to say → the day or the time.',
  '⚠ Write the **number twice** if it can be read two ways. _14 (one four)._',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('You are new at work. Write a message to a colleague (**four sentences, about 30 words**). Say your name, your job, where you work, and what time you start.'));
out.push(p('**To:** ______________   _My name is ______________. I am the new ______________. I am in the ______________. I start at ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message to a new colleague (**four sentences, about 30 words**). Say hello, say who you are, say one thing about your work, and say one thing they must do.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **answer** your colleague would send (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  My name ___ Ammar.   a) is   b) are   c) am',
  '2  I ___ the new storeman.   a) is   b) am   c) are',
  '3  ___ is the shift list. (here)   a) That   b) This   c) These',
  '4  Fadi? ___ the driver.   a) She is   b) It is   c) He is',
  '5  I start ___ seven o\'clock.   a) in   b) at   c) on',
  '6  I work ___ the morning.   a) in   b) at   c) of',
  '7  Sorry — ___ , please.   a) again   b) more   c) other',
  '8  How do you ___ it?   a) say   b) spell   c) write',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 1.15** Listen. Write the answer.   **1** The name: ______   **2** How many letters: ______   **3** The job: ______   **4** The time in: ______   **5** The time out: ______   **6** The shift: ______'));
out.push(p('**C  Reading.** Read the gate book at 1.1 again. Who is out at 4.05? What is Fadi\'s job? What time does Fadi sign in?'));
out.push(p('**D  Writing.** Write four sentences about your first day at a job (**about 30 words**). Your name, your job, the time you start, the time you finish.'));
out.push(...lines(4));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Abu Raed', 'Good morning. Your name, please.'],
  ['Majd', 'Good morning. Majd Bitar. B, I, T, A, R. Five letters.'],
  ['Abu Raed', 'Majd Bitar. And your job?'],
  ['Majd', 'I am on the counter.'],
  ['Abu Raed', 'The counter. Time in — seven twenty.'],
  ['Majd', 'Seven twenty. And out at four?'],
  ['Abu Raed', 'Out at four. You are on the morning shift this week.'],
  ['Majd', 'The morning shift. Thank you, Abu Raed.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**1.1**  say my name and my job',
  '**1.2**  spell my name, letter by letter',
  '**1.3**  find my name on a list',
  '**1.4**  say who another person is',
  '**1.5**  say hello in the morning and goodbye at four',
  '**1.6**  say _Sorry? Again, please._ and ask for a number to be written down',
  '**1.7**  read a page of the gate book, and say why two people are both right',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back on your first day at A2 Business, in Unit 1.**',
  '**badge** — here it is the card with your name on it. **At A2 it is the thing you show a visitor.**',
  '**surname** — here you write it in the gate book. **At A2 you spell it on the telephone to a supplier.**',
  '**spell** — here you spell your own name. **At A2 you spell the company name, letter by letter, to somebody in Aleppo.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
module.exports = out;
