// Proactive Business English A2 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'shift · working hours · break · lunch break · overtime · timetable · diary · schedule · deadline · day off · routine · to-do list · start work · finish work · clock in · lock up · check email · file · print out · sign · update · busy · quiet · once a week · twice a month · every other day';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 2  The Working Day'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  describe your working day, hour by hour',
  '**2.2**  ask and say when places open, close and start',
  '**2.3**  say how often you do something at work',
  '**2.4**  say what you are doing now, and what a colleague is doing',
  '**2.5**  ask a colleague about his or her working day',
  '**2.6**  ask somebody politely to do something, and answer a request',
  '**2.7**  Review & Mediate: tell a colleague what the weekly timetable says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The working week at Sham Trading Co.', [
  'The office works **Sunday to Thursday, 8.00 am – 4.00 pm**. The warehouse opens at **7.30** and closes at **4.30**. The trade counter at the front opens at **8.30** and closes at **4.00** — and at **2.00 pm on Thursdays**.',
  'Friday and Saturday are the **weekend**. Bassel is often on the road on Sunday and Monday. Nadia leaves at 4.00 exactly; she has two children at school.',
], C.lyellow, C.orange));

// ======================= CYCLE 2.1 =======================
out.push(pb());
out.push(h2('2.1  I start at eight'));
out.push(p('**Function:** describing your working day   ·   **Grammar:** present simple (+ / –)   ·   **Pronunciation:** the _-s_ ending'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put these five things in the order of **your** working day. Number them 1–5. Then compare with a partner.'));
out.push(table(['Order (1–5)', 'At work'], [
  ['', 'I check my email.'], ['', 'I start work.'], ['', 'I have a break.'],
  ['', 'I finish work.'], ['', 'I make my to-do list.'],
], [1, 4]));
out.push(p('**b**  Which two of these do you **not** do? _I don\'t drive to work. · I don\'t work on Friday. · I don\'t answer the telephone. · I don\'t work in an office._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What time does Nour finish?   **A** 3.00   **B** 4.00   **C** 4.30'));
out.push(p('**b**  Listen again. **1** What does Nour do first in the morning?   **2** Why doesn\'t Nadia stay after four?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  The end of the first full day', [
  ['Nadia', 'Well? Your first full day. How was it?'],
  ['Nour', 'Long! But good. I start at eight, so I\'m here before everybody.'],
  ['Nadia', 'And what do you do first?'],
  ['Nour', 'I check the email and I make a list. Then the telephone starts.'],
  ['Nadia', 'That\'s the job. I don\'t open my email first — I count the money from the counter first.'],
  ['Nour', 'And you finish at four?'],
  ['Nadia', 'At four exactly. I don\'t stay after four. My children finish school at half past three.'],
  ['Nour', 'And Bassel? He isn\'t here today.'],
  ['Nadia', 'Bassel doesn\'t work in the office on Sundays. He drives to Homs.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple (+ / –)**',
  table(['+', '–'], [
    ['I **start** at eight.  ·  You **check** the email.  ·  We **close** at four.', 'I **don\'t** start at seven.  ·  We **don\'t** work on Friday.'],
    ['He **starts** at seven thirty.  ·  She **finishes** at four.', 'He **doesn\'t** work in the office on Sundays.'],
  ], [1.4, 1]),
  '**He / she / it adds -s:**  start → start**s**  ·  work → work**s**  ·  finish → finish**es**  ·  go → go**es**  ·  have → **has**  ·  do → **does**',
  '⚠ After _don\'t_ and _doesn\'t_ the verb has **no -s**: _He doesn\'t **work** on Sundays_, not ~~he doesn\'t works~~.',
  '**Practise:** Complete with the present simple.',
  '1 Nour ______ (start) at eight.  2 Nadia ______ (not stay) after four.  3 The warehouse ______ (open) at half past seven.  4 I ______ (make) a list every morning.  5 Bassel ______ (not work) in the office on Sundays.',
  '**Useful phrases:**  I start at…  ·  First I…, then I…  ·  I finish at…  ·  I don\'t… on Fridays.  ·  That\'s the job.',
  '**Pronunciation – the -s ending.** 🔊 **Track 2.2** Listen and repeat: /s/ _starts, works, writes_  ·  /z/ _opens, drives, calls_  ·  /ɪz/ _finishes, closes, watches_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.'));
out.push(dlg(null, [
  ['A', 'What time do you start?'],
  ['B', 'I start at __________. I\'m here before __________.'],
  ['A', 'And what do you do first?'],
  ['B', 'First I __________, then I __________.'],
  ['A', 'What time do you finish?'],
  ['B', 'At __________. I don\'t __________ after that.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'Abu Yasser · warehouse · starts 7.30 · first job: opens the big door and checks the night delivery · finishes 4.30 · doesn\'t use email',
  'Bassel · sales · starts 8.00 on Tuesday · first job: telephones three customers · finishes 5.00 · doesn\'t work in the office on Sundays',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the two times you hear.'));
out.push(PHRASE_CARD(['I start at…', 'First I…', 'then I…', 'I finish at…', 'I don\'t…', 'before everybody']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues about their day. Use your **real** job, or invent one. Make notes.'));
out.push(table(['Name', 'Starts', 'First job of the day', 'Finishes'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1, 2, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about **one** person:  _______ starts at _______. First he / she _______. He / She finishes at _______ and doesn\'t _______._'));
out.push(p('**Listener task:** write down the earliest start you hear. Then ask: _Is that every day?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('New staff write a short note about their working day for the office file. Read Nour\'s note and answer the questions.'));
out.push(box(null, [
  '**MY WORKING DAY** — Nour Mansour, administrative assistant',
  'I work Sunday to Thursday. I start at eight o\'clock and I finish at four. First I check the email and make a to-do list. Then I answer the telephone and take messages. After the break I file the orders and print out the delivery notes. I don\'t work at the trade counter, and I don\'t work on Fridays.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which days does Nour work?'));
out.push(item('2', 'What are her first two jobs of the day?'));
out.push(item('3', 'Name one thing she does **not** do.'));
out.push(box('Writer\'s box', [
  '**Shape of a working-day note:** days and hours → first jobs → later jobs → one or two things you **don\'t** do.',
  '**Order words:** _First… · Then… · After that… · After the break… · At the end of the day…_',
  'Write **I** for your own jobs and **he / she** + **-s** for somebody else: _She files the orders._',
  '⚠ Times: write _8.00_ or _eight o\'clock_, _4.30_ or _half past four_. In speech we say _half past four_; on a notice we write _4.30 pm_.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own working-day note (25 words or more). Complete the frame.'));
out.push(p('**MY WORKING DAY** — ______________, ______________.  I work ______ to ______. I start at ______ and I finish at ______. First I ______________. Then I ______________. After the break I ______________. I don\'t ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books with your partner. Read your partner\'s note. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days and hours are both there', ''],
  ['Order words: _first, then, after that_', ''],
  ['One sentence with _don\'t_', ''],
  ['No **-s** after _don\'t_', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the working day of **a colleague** — somebody at your real workplace, or somebody in this book (35 words or more). Use **he / she** and remember the **-s**.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I like…_   ✓ _Can you add a time?_   ? _a question about the person_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the texts on the wall. Walk and read. Find **one** person whose day starts earlier than yours and tell the class.'));
out.push(box('Homework', ['Write your final note. Then write **five** sentences about a person in your family who works: what time he or she starts, finishes, and two things he or she does and does not do (25+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.2 =======================
out.push(pb());
out.push(h2('2.2  What time do you open?'));
out.push(p('**Function:** asking and saying when places open, close and start   ·   **Grammar:** questions about times; _at / on / in_   ·   **Pronunciation:** the time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Look at the opening hours. Which place is open at **8.00 am**? Which place is closed at **4.15 pm**?'));
out.push(table(['Place', 'Opens', 'Closes'], [
  ['Office (2nd floor)', '8.00', '4.00'],
  ['Warehouse', '7.30', '4.30'],
  ['Trade counter', '8.30', '4.00 (Thursday 2.00)'],
], [1.4, 1, 1.6]));
out.push(p('**b**  Say the time: _8.00 · 8.15 · 8.30 · 8.45 · 12.00 · 2.00 pm_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is telephoning?   **A** a customer   **B** a driver   **C** Nadia'));
out.push(p('**b**  Listen again. **1** What time does the trade counter close on Thursday?   **2** When can the customer come?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  A call to the trade counter', [
  ['Nour', 'Sham Trading, good morning. Nour speaking.'],
  ['Mr Tarabishi', 'Good morning. Tarabishi, from the Hamidiyeh. What time do you open?'],
  ['Nour', 'The trade counter opens at half past eight, Mr Tarabishi.'],
  ['Mr Tarabishi', 'And what time does it close?'],
  ['Nour', 'At four — but on Thursday we close at two.'],
  ['Mr Tarabishi', 'At two. I see. And the warehouse?'],
  ['Nour', 'The warehouse is open from half past seven to half past four.'],
  ['Mr Tarabishi', 'Good. Then I come on Tuesday, in the morning. At about ten.'],
  ['Nour', 'Tuesday at ten. I\'ll tell Abu Yasser. See you then.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – questions about times, and at / on / in**',
  table(['Question', 'Answer'], [
    ['**What time do** you open?', 'We open **at** half past eight.'],
    ['**What time does** it close?', 'It closes **at** four.'],
    ['**When** is the delivery?', '**On** Tuesday.  ·  **In** the morning.  ·  **At** ten.'],
    ['Are you open **on** Thursday?', 'Yes, but we close **at** two.'],
  ], [1.2, 1.6]),
  '**at** + a clock time: _at 8.30, at noon, at night_   ·   **on** + a day or date: _on Tuesday, on 1 April_   ·   **in** + a part of the day, a month, a year: _in the morning, in April_',
  '⚠ _in the morning / in the afternoon / in the evening_ — but **at** night.',
  '**Practise:** Complete with _at, on_ or _in_.',
  '1 We open ___ 8.30.  2 The lorry comes ___ Tuesday.  3 I check the stock ___ the morning.  4 The counter closes ___ two ___ Thursdays.  5 We are closed ___ Friday and Saturday.',
  '**Useful phrases:**  What time do you open?  ·  We\'re open from… to…  ·  We close at…  ·  Are you open on…?  ·  See you then.',
  '**Pronunciation – saying the time.** 🔊 **Track 2.4** Listen and repeat: _eight o\'clock · half past eight · quarter past nine · quarter to five · ten to four · twenty past two_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones; B answers. Use the skeleton and the opening hours in stage 1. Then swap, and use the role cards.'));
out.push(dlg(null, [
  ['A', 'Good morning. What time do you open?'],
  ['B', 'We open at __________.'],
  ['A', 'And what time do you close?'],
  ['B', 'At __________ — but on __________ we close at __________.'],
  ['A', 'Then I come on __________, in the __________.'],
  ['B', '__________ in the __________. See you then.'],
]));
out.push(table(['Role card 1 — a bank', 'Role card 2 — a workshop'], [[
  'Opens 9.00 · closes 2.00 · closed Friday and Saturday · busy between 11 and 12',
  'Opens 8.00 · closes 6.00 · closes 1.00–2.00 for lunch · open on Saturday morning',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the opening time, the closing time and the day of the visit.'));
out.push(PHRASE_CARD(['What time do you open?', 'We open at…', 'We close at…', 'from… to…', 'on Thursday', 'See you then.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues about a place they know well — their office, a shop near their home, a government office. Make notes.'));
out.push(table(['Place', 'Opens', 'Closes', 'Closed on'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1, 1, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ opens at _______ and closes at _______. It\'s closed on _______._'));
out.push(p('**Listener task:** write the place that is open the longest. Then ask one question with _When…?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice from the front door and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO. — OPENING HOURS**',
  'Office   Sunday – Thursday   8.00 am – 4.00 pm',
  'Warehouse   Sunday – Thursday   7.30 am – 4.30 pm',
  'Trade counter   Sunday – Wednesday   8.30 am – 4.00 pm   ·   Thursday   8.30 am – 2.00 pm',
  'Closed on Friday and Saturday. For deliveries outside these hours, please telephone extension 201 one day before.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which part of the company opens first?'));
out.push(item('2', 'On which day does the trade counter close early?'));
out.push(item('3', 'What must you do if you want a delivery at 6.00 pm?'));
out.push(box('Writer\'s box', [
  '**Shape of an opening-hours notice:** title → one line for each place → the days → the hours → a line for exceptions → what to do and who to call.',
  'On a notice we write the short form: **8.00 am – 4.00 pm**, **Sunday – Thursday**. In speech we say _from eight to four_.',
  'Use **Closed on…** for the whole day and **closes early on…** for a short day.',
  '⚠ A notice has no _Dear_ and no _Thank you_ — it is information, not a message.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an opening-hours notice for **your** workplace, or for Sham Trading with new hours (25 words or more). Use the frame.'));
out.push(p('**______________ — OPENING HOURS**   ______________   ______ – ______   ______ am – ______ pm.   ______________   ______ – ______   ______ am – ______ pm.   Closed on ______________. For ______________, please telephone ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s notice. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days **and** hours for every place', ''],
  ['A line that says when it is closed', ''],
  ['A line that says who to call', ''],
  ['_am_ / _pm_ (or the 24-hour clock) used the same way all through', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their notice. The class listens and asks **one** question that the notice does not answer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a short message to a customer who wants to come on Thursday afternoon (35 words or more). Say when you close on Thursday, offer another day and time, and ask them to confirm.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **customer**. Write on a slip:  ★ _I like…_   ✓ _Can you add…?_   ? _one question you still have_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read two other messages. Find one that gives the customer a **choice** of two times, and say why that is better.'));
out.push(box('Homework', ['Write your final message. Then copy the opening hours of a real place near your home (a pharmacy, a bakery, a government office) and write three sentences about them: when it opens, when it closes, and when it is closed (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.3 =======================
out.push(pb());
out.push(h2('2.3  How often do you count the stock?'));
out.push(p('**Function:** saying how often you do something at work   ·   **Grammar:** _how often?_ and frequency adverbs   ·   **Pronunciation:** word stress in frequency words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put the words on the line, from 0% to 100%: _never · sometimes · always · often · usually_'));
out.push(table(['0%', '', '', '', '100%'], [['never', '', '', '', 'always']], [1, 1, 1, 1, 1]));
out.push(p('**b**  True for you? _I always check my email before ten. · I sometimes work on Friday. · I never take work home._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are Nour and Abu Yasser?   **A** in the office   **B** in the warehouse   **C** at the trade counter'));
out.push(p('**b**  Listen again. **1** How often does Abu Yasser count the whole stock?   **2** What does he do every morning?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  In the warehouse', [
  ['Nour', 'Abu Yasser, Mr Ayoub wants the stock numbers. How often do you count the stock?'],
  ['Abu Yasser', 'The whole warehouse? Twice a month. The last Thursday and the fifteenth.'],
  ['Nour', 'And the fast things — the boxes, the tape?'],
  ['Abu Yasser', 'Those I count every morning. I always walk the shelves before the door opens.'],
  ['Nour', 'Every morning? That\'s a lot of walking.'],
  ['Abu Yasser', 'Thirty years of walking, my daughter. I never trust the screen. The screen says ninety; sometimes the shelf says eighty-six.'],
  ['Nour', 'And then?'],
  ['Abu Yasser', 'And then I write it in the book, and I tell Nadia. Check it twice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how often? and frequency**',
  table(['Question', 'Answer — adverb', 'Answer — expression'], [
    ['**How often** do you count the stock?', 'I **always** count it.', '**Every** morning.  ·  **Twice a** month.'],
    ['**How often** does he check the email?', 'He **usually** checks it at nine.', '**Once a** week.  ·  **Every other** day.'],
    ['**How often** do you work on Friday?', 'I **never** work on Friday.', 'Two **or three times a** year.'],
  ], [1.4, 1.3, 1.3]),
  '**Where does the adverb go?**  **before** the main verb: _I **always** count._  ·  **after** _be_: _He **is** **always** late._',
  '⚠ _Every morning_, _twice a month_ and _once a week_ go at the **end**: _I count the boxes **every morning**._',
  '**Practise:** Put the word in the right place.',
  '1 I check my email at nine. (always)  2 She is late. (never)  3 We count the stock. (twice a month)  4 Bassel works in the office. (sometimes)  5 The lorry is on time. (usually)',
  '**Useful phrases:**  How often…?  ·  Every morning.  ·  Once a week.  ·  Twice a month.  ·  Every other day.  ·  Hardly ever.',
  '**Pronunciation – stress.** 🔊 **Track 2.6** Listen and repeat. The first part is strong: **AL**ways · **U**sually · **OF**ten · **SOME**times · **NE**ver · **EVE**ry morning',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton. Then swap roles. Then use the role cards.'));
out.push(dlg(null, [
  ['A', 'How often do you __________?'],
  ['B', 'I __________ __________. Usually __________.'],
  ['A', 'Every __________? That\'s a lot.'],
  ['B', 'It is, but I never __________. And you?'],
  ['A', 'I __________ __________ — about __________ a week.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'Nadia · checks the bank twice a day · sends the invoices once a week, on Wednesday · never works at the weekend · sometimes stays until five at the end of the month',
  'Bassel · visits Homs every other week · telephones customers every morning · hardly ever writes an email · always sends a message after a visit',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the two frequency expressions you hear.'));
out.push(PHRASE_CARD(['How often…?', 'always', 'usually', 'never', 'every other…', 'twice a month']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues how often they do these things at work: check email · write a report · meet a customer · work late · take a day off. Make notes.'));
out.push(table(['Name', 'Does it often', 'Hardly ever does it'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ always _______, but he / she hardly ever _______._'));
out.push(p('**Listener task:** write the thing **most** people in the class do every day.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for the adverb in the wrong place. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short note Abu Yasser gives to a new warehouse worker, and answer the questions.'));
out.push(box(null, [
  '**THE STOCK ROUTINE** — please read and keep',
  'We count the whole stock twice a month: on the fifteenth and on the last Thursday. I walk the shelves every morning before the door opens and I check the fast lines — boxes, tape, plastic wrap. I always write the numbers in the book, not only on the computer. If the shelf and the screen are different, tell me the same day. We never change a number without a second person.',
], 'FFFFFF', C.navy));
out.push(item('1', 'How often is the whole stock counted?'));
out.push(item('2', 'What does Abu Yasser check every morning?'));
out.push(item('3', 'What must you do if the shelf and the screen are different?'));
out.push(box('Writer\'s box', [
  '**Shape of a routine note:** what we do → how often → who does it → one rule that is never broken.',
  'Join two routines with **and**: _I walk the shelves **and** I check the fast lines._ Join a contrast with **but**: _We count twice a month, **but** I check the boxes every day._',
  'Use **always** and **never** for the rules of the workplace — they are strong words, so use them only when they are true.',
  '⚠ _Every morning_ at the end, the adverb _always_ before the verb. Both in one sentence is fine: _I **always** check the tape **every morning**._ — but one is usually enough.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short routine note for a new colleague in **your** job (25 words or more). Use the frame.'));
out.push(p('**______________ ROUTINE** — please read and keep.  We ______________ ______ a ______. I always ______________ before ______________. I check ______________ every ______________. If ______________, tell me ______________. We never ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s note. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least two frequency expressions', ''],
  ['_always_ / _never_ in the right place (before the main verb)', ''],
  ['One rule with _never_', ''],
  ['Clear who does what', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **your own** week at work (35 words or more). Use at least four of: _always · usually · often · sometimes · hardly ever · never · once a week · twice a month · every other day_.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I like…_   ✓ _Can you add how often?_   ? _a question about the routine_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Walk and read three texts. Find the person whose week is **most** like yours and tell them one thing you both do.'));
out.push(box('Homework', ['Write your final text. Then write five sentences about how often things happen in your street or building: the rubbish, the water, the electricity, the post, the bread van (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.4 =======================
out.push(pb());
out.push(h2('2.4  I\'m working on the Homs order'));
out.push(p('**Function:** saying what you are doing now   ·   **Grammar:** present continuous   ·   **Pronunciation:** weak forms of _am / is / are_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Look around the room. Say three things: _Somebody is ______. Two people are ______. Nobody is ______._'));
out.push(p('**b**  Which sentence is about **now** and which is about **every day**? _1 I check the email at nine. · 2 I\'m checking the email now. · 3 She works in accounts. · 4 She\'s working in the warehouse this week._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Mr Ayoub come to Nour\'s desk?   **A** he wants the Homs order   **B** he wants a coffee   **C** he wants to meet a customer'));
out.push(p('**b**  Listen again. **1** What is Nour doing?   **2** What is Nadia doing this week?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  A busy Monday', [
  ['Mr Ayoub', 'Nour, are you busy?'],
  ['Nour', 'A little. I\'m working on the Homs order.'],
  ['Mr Ayoub', 'Good. Is Nadia in?'],
  ['Nour', 'She\'s here, but she isn\'t at her desk. She\'s doing the month-end this week, so she\'s in the small room.'],
  ['Mr Ayoub', 'And Bassel? He isn\'t answering his telephone.'],
  ['Nour', 'He\'s driving to Homs. He\'s meeting Mr Tarabishi\'s cousin at eleven.'],
  ['Mr Ayoub', 'Of course. And the warehouse?'],
  ['Nour', 'They\'re loading the small van now. Abu Yasser is counting the boxes at the gate.'],
  ['Mr Ayoub', 'Then everything is moving. Thank you, Nour.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present continuous (now, and this week)**',
  table(['+', '–', '?'], [
    ['I **\'m working** on the Homs order.', 'I **\'m not** working on the invoices.', '**Am** I working too slowly?'],
    ['He **\'s driving** to Homs.', 'She **isn\'t** sitting at her desk.', '**Is** Nadia in? – Yes, she is.'],
    ['They **\'re loading** the van.', 'They **aren\'t** closing yet.', '**Are** you busy? – A little.'],
  ], [1.3, 1.3, 1.4]),
  '**Spelling:** work → work**ing**  ·  driv**e** → driv**ing**  ·  s**it** → si**tt**ing  ·  ru**n** → ru**nn**ing',
  '⚠ **Now** or **around now** → present continuous: _She\'s doing the month-end **this week**._   **Every day** → present simple: _She **does** the month-end **every month**._',
  '**Practise:** Present simple or present continuous?',
  '1 Nour ______ (work) on the Homs order at the moment.  2 She usually ______ (start) at eight.  3 Look — Abu Yasser ______ (count) the boxes.  4 Bassel ______ (not work) in the office on Sundays.  5 They ______ (load) the van now.',
  '**Useful phrases:**  Are you busy?  ·  A little.  ·  I\'m working on…  ·  He isn\'t answering.  ·  She\'s doing the month-end.  ·  Everything is moving.',
  '**Pronunciation – weak forms.** 🔊 **Track 2.8** Listen and repeat: _I\'m working_ /aɪm ˈwɜːkɪŋ/ · _he\'s driving_ /hiːz ˈdraɪvɪŋ/ · _are you busy?_ /ə juː ˈbɪzi/ · _they\'re loading_ /ðeə ˈləʊdɪŋ/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is looking for somebody; B says where they are and what they are doing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Are you busy?'],
  ['B', 'A little. I\'m __________.'],
  ['A', 'Is __________ in?'],
  ['B', 'He\'s / She\'s here, but he isn\'t / she isn\'t __________. He\'s / She\'s __________.'],
  ['A', 'And __________?'],
  ['B', 'He\'s / She\'s __________. They\'re __________ now.'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'You are in the office. Nadia: small room, month-end. Bassel: on the road to Aleppo. The warehouse: checking a delivery.',
  'You are at the trade counter. Mr Ayoub: in a meeting. Abu Yasser: moving the pallets. Two drivers: waiting outside.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write what **two** of the people are doing now.'));
out.push(PHRASE_CARD(['Are you busy?', 'A little.', 'I\'m working on…', 'He isn\'t answering.', 'She\'s doing…', 'They\'re loading…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Telephone **three** colleagues (stand back to back). Ask what they are doing **now** and what they are working on **this week**. Make notes.'));
out.push(table(['Name', 'Doing now', 'Working on this week'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______ at the moment. This week he / she is _______._'));
out.push(p('**Listener task:** write one job that **two** people are doing. Then ask one question with _Are you…?_'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _every day_ with a continuous verb. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Mr Ayoub asks for a short update by email on Monday afternoon. Read Nour\'s reply and answer the questions.'));
out.push(box(null, [
  '**To:** Mr Ayoub   **From:** Nour Mansour   **Subject:** Monday update',
  'Dear Mr Ayoub,',
  'I\'m working on the Homs order now; it is ready for your signature this afternoon. Nadia is doing the month-end this week, so she is in the small room until Wednesday. Bassel is driving to Homs and he is meeting the customer at eleven. In the warehouse they are loading the small van, and Abu Yasser is counting the boxes at the gate.',
  'I am not working on the Aleppo invoices today. I will start them tomorrow.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What will be ready this afternoon?'));
out.push(item('2', 'Where is Nadia working this week, and until when?'));
out.push(item('3', 'What is Nour **not** doing today?'));
out.push(box('Writer\'s box', [
  '**Shape of a short update:** subject line → greeting → what **I** am doing → what **others** are doing → one thing that is **not** happening → your name.',
  'A good update answers the question the manager has **not** asked yet: _when will it be ready?_',
  'Use the present continuous all through: _I\'m working… · she is doing… · they are loading…_',
  '⚠ Say what is **not** happening too. A manager who reads only good news stops trusting the update.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a short update for **your** manager (25 words or more). Use the frame.'));
out.push(p('**Subject:** ______ update.  Dear ______________, I\'m working on ______________; it will be ready ______________. ______________ is ______________ this week. ______________ are ______________. I am not ______________ today. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s update. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_am / is / are_ + **-ing** in every sentence about now', ''],
  ['Something about **you** and something about **somebody else**', ''],
  ['One negative sentence (_I am not…_)', ''],
  ['A time: _this afternoon · this week · until Wednesday_', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an update for the end of **today** (35 words or more): what you are finishing now, what a colleague is doing, and one thing that is waiting until tomorrow.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s update as the **manager**. Write on a slip:  ★ _This is clear._   ✓ _When will it be ready?_   ? _a question about one job_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three updates. Which one could the manager read in **ten seconds** and still know everything? Say why.'));
out.push(box('Homework', ['Write your final update. Then write four sentences about what the people in your home are doing **now**, and four about what they do **every day** (25+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.5 =======================
out.push(pb());
out.push(h2('2.5  What does a day on the road look like?'));
out.push(p('**Function:** asking a colleague about his or her working day   ·   **Grammar:** present simple questions   ·   **Pronunciation:** _do you_ and _does he_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make five questions from the table. Ask your partner.'));
out.push(table(['', '', ''], [
  ['What time', 'do you', 'start?'],
  ['Where', 'does he', 'have lunch?'],
  ['How', 'do they', 'travel to work?'],
  ['How often', 'does she', 'see customers?'],
], [1, 1, 1]));
out.push(p('**b**  Which answer goes with which question? _At half past seven. · By bus. · Twice a week. · In the café on the corner._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Nour asking about his day?   **A** Abu Yasser   **B** Bassel   **C** Mr Ayoub'));
out.push(p('**b**  Listen again. **1** What time does Bassel leave Damascus?   **2** How many customers does he usually see in a day?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  A day on the road', [
  ['Nour', 'Bassel, can I ask you something? Mr Ayoub wants a note about the sales day.'],
  ['Bassel', 'Ask. But be quick — I leave at seven.'],
  ['Nour', 'At seven? What time do you get to Homs?'],
  ['Bassel', 'About half past nine, if the road is good.'],
  ['Nour', 'And where do you start?'],
  ['Bassel', 'At the market. I always see the small shops first, because they open early.'],
  ['Nour', 'How many customers do you see in a day?'],
  ['Bassel', 'Five or six. Not more — I don\'t like a short visit. A short visit sells nothing.'],
  ['Nour', 'And what do you do with the orders?'],
  ['Bassel', 'I send them by message the same evening. Nadia doesn\'t like a Thursday surprise.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple questions**',
  table(['Yes / No', 'Wh-'], [
    ['**Do** you work on Thursday? – Yes, I do. / No, I don\'t.', '**What time do** you leave?  – At seven.'],
    ['**Does** he drive to Homs? – Yes, he does. / No, he doesn\'t.', '**Where does** he start?  – At the market.'],
    ['**Do** they open at eight? – Yes, they do.', '**How many** customers **do** you see?  – Five or six.'],
  ], [1.5, 1.5]),
  '⚠ The **-s** goes on **does**, not on the verb: _What time **does** he **leave**?_, not ~~does he leaves~~.',
  '⚠ One question word only: _**Where** do you have lunch?_, not ~~Where do you have lunch where~~.',
  '**Practise:** Write the question.',
  '1 ______ (what time / you / start)?  2 ______ (where / he / have lunch)?  3 ______ (how often / she / visit Aleppo)?  4 ______ (your manager / work / on Thursday)?  5 ______ (how many emails / you / write / a day)?',
  '**Useful phrases:**  Can I ask you something?  ·  Be quick.  ·  What time do you…?  ·  How many…?  ·  And then?  ·  The same evening.',
  '**Pronunciation – do you / does he.** 🔊 **Track 2.10** Listen and repeat: _do you_ /djə/ · _what time do you start?_ · _does he_ /dəzi/ · _where does he go?_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A interviews B about B\'s working day. Use the skeleton, then swap, then use the role cards.'));
out.push(dlg(null, [
  ['A', 'Can I ask you something? What time do you leave?'],
  ['B', 'At __________.'],
  ['A', 'Where do you __________?'],
  ['B', 'At __________. I always __________ first, because __________.'],
  ['A', 'How many __________ do you __________ in a day?'],
  ['B', '__________. Not more.'],
  ['A', 'And what do you do with __________?'],
  ['B', 'I __________ the same __________.'],
]));
out.push(table(['Role card 1 — a driver', 'Role card 2 — a shop owner'], [[
  'Leaves the yard 6.00 · loads 6.00–7.00 · three stops before noon · eats in the lorry · back at 5.00 · writes the delivery notes at the end',
  'Opens 9.00 · counts the money first · the busy hour is 12–1 · orders from Sham Trading twice a month · closes 8.00 · never opens on Friday morning',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their interview for the class – **without the book**.'));
out.push(p('**Listener task:** write the **three** questions you hear, exactly.'));
out.push(PHRASE_CARD(['Can I ask you…?', 'What time do you…?', 'Where do you…?', 'How many…?', 'And then?', 'Not more.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview **two** colleagues about their real working day. Ask at least **five** questions. Write short notes — you will report.'));
out.push(table(['Question', 'Colleague 1', 'Colleague 2'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Report on one colleague. Use **he / she** and the **-s**:  _______ leaves at _______. He / She _______ first, because _______. He / She doesn\'t _______._'));
out.push(p('**Listener task:** write one question you would still like to ask. Ask it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _does he leaves_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour writes for Mr Ayoub after the interview, and answer the questions.'));
out.push(box(null, [
  '**NOTE — the sales day** (from Bassel, for Mr Ayoub)',
  'Bassel leaves Damascus at seven and gets to Homs at about half past nine. He starts at the market, because the small shops open early. He sees five or six customers in a day and he doesn\'t make short visits. He sends the orders by message the same evening, so accounts has them before Thursday.',
  'One question for you: does he take the small van or the car when the order is large?',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does Bassel start at the market?'));
out.push(item('2', 'When does he send the orders?'));
out.push(item('3', 'What does Nour still not know?'));
out.push(box('Writer\'s box', [
  '**Shape of a note from an interview:** who it is about and who it is for → the day in order → one habit with the reason → one thing the person does **not** do → a question you could not answer.',
  'Use **because** for the reason: _He starts at the market **because** the small shops open early._',
  'Use **so** for the result: _He sends the orders the same evening, **so** accounts has them before Thursday._',
  '⚠ You are writing about **somebody else**, so every verb takes **-s**: _he **leaves**, he **sees**, he **sends**_.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Interview your partner for two minutes, then write the note (25 words or more). Use the frame.'));
out.push(p('**NOTE — ______________** (from ______________, for ______________).  ______________ starts at ______________ and ______________. He / She ______________ first, because ______________. He / She doesn\'t ______________, so ______________. One question: ______________?'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s note. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['**-s** on every he / she verb', ''],
  ['One _because_ and one _so_', ''],
  ['One negative sentence with _doesn\'t_', ''],
  ['A real question at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their final question. The class says which question a manager would most want answered.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the working day of somebody whose job you would **not** like to do (35 words or more). Say what they do, how often, and one thing you would find hard.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I like…_   ✓ _Check the **-s** in…_   ? _a question about that job_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find the hardest job in the class and say, in one sentence, why.'));
out.push(box('Homework', ['Write your final text. Then write **eight** questions you would ask in a job interview about the working day. Use _do_ and _does_ (25+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.6 =======================
out.push(pb());
out.push(h2('2.6  Could you send it before five?'));
out.push(p('**Function:** asking somebody politely to do something, and answering   ·   **Grammar:** requests   ·   **Pronunciation:** polite intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which is more polite? Say both, then choose. _1 Send me the file. / Could you send me the file, please? · 2 I want the number. / Can I have the number, please? · 3 Wait. / Just a moment, please._'));
out.push(p('**b**  You cannot do what somebody asks. What do you say **after** _I\'m sorry_? Give two ideas.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nadia want?   **A** the Homs file   **B** the invoice numbers   **C** a lift home'));
out.push(p('**b**  Listen again. **1** When does Nadia need it?   **2** What does Nour ask Nadia to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  Before five', [
  ['Nadia', 'Nour, could you send me the invoice numbers for Homs?'],
  ['Nour', 'Of course. When do you need them?'],
  ['Nadia', 'Before five, if you can. The bank closes the day at five.'],
  ['Nour', 'Before five… I\'m sorry, I can\'t do all of them. Bassel is still sending me orders.'],
  ['Nadia', 'How many can you do?'],
  ['Nour', 'The old ones, yes — about twenty. The new ones tomorrow morning. Is that all right?'],
  ['Nadia', 'That\'s fine. Could you put them in one file, please? Not twenty messages.'],
  ['Nour', 'One file. And could you tell me the format you want?'],
  ['Nadia', 'Number, date, amount. In that order.'],
  ['Nour', 'Number, date, amount. I\'ll send it at half past four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – requests and answers**',
  table(['Asking', 'Saying yes', 'Saying no — politely'], [
    ['**Could you** send it before five**, please**?', 'Of course.  ·  Certainly.', 'I\'m sorry, I can\'t. **Bassel is still sending me orders.**'],
    ['**Can you** check this for me?', 'Yes, of course.  ·  No problem.', 'I\'m afraid I can\'t do all of them, but I can do…'],
    ['**Can I have** the number, please?', 'Here you are.', 'Not today, I\'m afraid. Tomorrow morning?'],
  ], [1.4, 1.1, 1.7]),
  '**Could you** is more polite than **can you**. Add **please** — at work it costs nothing.',
  '⚠ A polite _no_ has **three** parts: _I\'m sorry_ → the **reason** → what you **can** do. A _no_ with no reason sounds rude in English.',
  '**Practise:** Make the request polite.',
  '1 Send the file. → ______  2 Tell me the number. → ______  3 Wait. → ______  4 I want to see the order. → ______  5 Open the window. → ______',
  '**Useful phrases:**  Could you…, please?  ·  When do you need it?  ·  Of course.  ·  I\'m afraid I can\'t…  ·  Is that all right?  ·  That\'s fine.',
  '**Pronunciation – polite intonation.** 🔊 **Track 2.12** Listen. The voice goes **up** at the end of a request: _Could you send it before ↗five?_ Flat is not polite. Repeat the six requests.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks; B says yes to one thing and no to another, with a reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Could you __________, please?'],
  ['B', 'Of course. When do you need it?'],
  ['A', 'Before __________, if you can.'],
  ['B', 'I\'m sorry, I can\'t __________. __________.'],
  ['A', 'How much can you do?'],
  ['B', '__________ today, and __________ tomorrow. Is that all right?'],
  ['A', 'That\'s fine. And could you __________, please?'],
]));
out.push(table(['Role card 1', 'Role card 2'], [[
  'A: you need the stock numbers for a customer at 3.00. B: the warehouse is counting until 3.30; you can give half now.',
  'A: you need the driver to take one more box to Jaramana. B: the van is full; you can take it in the morning.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** did the _no_ have all **three** parts — sorry, reason, what you can do? Say which part was missing.'));
out.push(PHRASE_CARD(['Could you…, please?', 'When do you need it?', 'Of course.', 'I\'m afraid I can\'t…', 'Is that all right?', 'That\'s fine.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** real requests to three colleagues — something you really want (a pen, a telephone number, help with a sentence). Say **no** politely to at least one request made to you.'));
out.push(table(['Who', 'My request', 'Yes / No + reason'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one request:  _I asked _______ to _______. He / She said _______, because _______._'));
out.push(p('**Listener task:** write the politest sentence you hear today. Read it out at the end.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two short messages and answer the questions.'));
out.push(box(null, [
  '**1**  **To:** Nour   **From:** Nadia   **Subject:** Homs invoice numbers',
  'Dear Nour, Could you send me the invoice numbers for Homs before five today, please? The bank closes the day at five. One file is enough — number, date, amount. Thank you. Nadia',
  '**2**  **To:** Nadia   **From:** Nour   **Subject:** Re: Homs invoice numbers',
  'Dear Nadia, I\'m sorry, I can\'t send all of them today. Bassel is still sending orders. I can send the old numbers (about twenty) at half past four, and the new ones tomorrow before ten. Is that all right? Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What exactly does Nadia want, and when?'));
out.push(item('2', 'Why can Nour not do everything today?'));
out.push(item('3', 'What does Nour offer instead?'));
out.push(box('Writer\'s box', [
  '**A written request:** greeting → **Could you… , please?** → **when** you need it → **how** you want it → thank you → your name.',
  '**A written refusal:** greeting → _I\'m sorry, I can\'t…_ → the **reason** → what you **can** do, with a time → _Is that all right?_ → your name.',
  '**Give the deadline a reason.** _Before five_ is an order; _before five, because the bank closes the day at five_ is a colleague talking.',
  '⚠ Never write only _No_ or only _OK_. A one-word answer at work makes more email, not less.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write **a request** to a colleague (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Could you ______________, please? I need it ______________, because ______________. ______________ is enough. Thank you.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s request, then **write the reply** at the bottom — say no politely, with a reason and an offer.'));
out.push(table(['Checklist for the reply', '✓ / ✗'], [
  ['_I\'m sorry / I\'m afraid_', ''],
  ['A real reason', ''],
  ['What you **can** do, with a time', ''],
  ['_Is that all right?_ at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three pairs read the request and the reply together. The class says whether the reply is polite **and** useful.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a request to somebody **outside** your company — a supplier, a customer, an office (35 words or more). Say what you want, when, how, and why the date matters.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s request as the person who receives it. Write on a slip:  ★ _I would do this because…_   ✓ _Can you say when…?_   ? _one thing that is not clear_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the requests on the wall. Find the one you would answer **first** and tell the writer why.'));
out.push(box('Homework', ['Write your final request. Then write three different polite ways to refuse the same request, each with a different reason (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review & Mediate: what does the timetable say?'));
out.push(p('**Function:** telling a colleague, in simple words, what a timetable says   ·   **Review:** present simple · times and prepositions · frequency · present continuous · questions · requests'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _He ______ (not work) in the office on Sundays._',
  '**2** _at_, _on_ or _in_: ______ Tuesday · ______ half past eight · ______ the morning.',
  '**3** Where does _always_ go in _I check my email at nine_?',
  '**4** Two questions you can ask about somebody\'s working day.',
  '**5** The three parts of a polite _no_.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has changed?   **A** the Monday meeting   **B** the stock count   **C** both'));
out.push(p('**b**  Listen again. **1** What is the new time for the Monday meeting?   **2** What must the warehouse do before the meeting?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  The new timetable', [
  ['Abu Yasser', 'Nour, the new timetable is on the board. Small letters again. What does it say about me?'],
  ['Nour', 'It\'s from Mr Ayoub. It\'s about the week.'],
  ['Abu Yasser', 'The important thing first, please.'],
  ['Nour', 'The Monday meeting moves. It\'s at half past eight now, not at ten.'],
  ['Abu Yasser', 'Half past eight. That\'s before the counter opens.'],
  ['Nour', 'Yes — that\'s why they moved it. And it says the warehouse gives the stock numbers to accounts **before** the meeting, not after.'],
  ['Abu Yasser', 'Before. So I count on Sunday evening.'],
  ['Nour', 'That\'s what it means, yes. Nothing else changes — the counter and the warehouse keep the same hours.'],
  ['Abu Yasser', 'Good. One paper, two changes. I can keep two in my head.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – saying what a timetable says**',
  table(['To start', 'To give the change', 'To finish'], [
    ['It\'s about the week.  ·  It\'s the new timetable.', 'The meeting **moves** to…  ·  It\'s at… **now**, not at…', 'Nothing else changes.'],
    ['There are **two** changes.', 'Before, not after.  ·  From next week.', 'That\'s all.  ·  Anything else?'],
  ], [1.3, 2, 1.2]),
  '⚠ Give the **important thing first**, not the first line of the paper. A timetable is read from the top; a colleague is told the change first.',
  '⚠ Say what is **not** changing too: _Nothing else changes_ saves five questions.',
  '**Practise:** The notice says: _With effect from Sunday, the weekly stock report must be submitted to the accounts department prior to the management meeting._ Say it in easy English, in one sentence.',
  '**Useful phrases:**  It\'s about…  ·  There are two changes.  ·  It\'s at… now, not at…  ·  Before, not after.  ·  Nothing else changes.',
  '**Pronunciation – contrast stress.** 🔊 **Track 2.14** Listen. Make the two different words loud: _It\'s at **half past eight** now, not at **ten**._ · _**Before** the meeting, not **after**._ Repeat the four sentences.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads timetable 1 silently and tells B the changes. B closes the book. Then swap with timetable 2.'));
out.push(table(['Timetable 1 — for A', 'Timetable 2 — for B'], [[
  '**WEEK BEGINNING 7 APRIL.** Management meeting: Monday 08.30 (previously 10.00). Stock figures to accounts: Sunday, end of day. Trade counter: no change. Deliveries to Homs: Tuesday only.',
  '**WEEK BEGINNING 14 APRIL.** Office closed Thursday afternoon for the inventory. Trade counter closes 12.00 on Thursday. Warehouse works normal hours. Invoices to be signed by Wednesday 15.00.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their timetable for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one** thing you would have to do differently next week.'));
out.push(PHRASE_CARD(['It\'s about…', 'There are two changes.', '…now, not…', 'Before, not after.', 'Nothing else changes.', 'That\'s all.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a short timetable in formal English. Read it silently. Then tell **two** colleagues what changes for them. Do not show them the paper.'));
out.push(table(['Who I told', 'The change for them', 'Did they understand?'], [['', '', ''], ['', '', '']], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the timetable you mediated. This is the **second** unit of this book, and the mediation task comes back in every unit — so listen for what other people put first.'));
out.push(p('_It\'s about ______. There are ______ changes. The important one for us is ______. Nothing else changes._'));
out.push(p('**Listener task:** write the one action. Then say whether the speaker gave the **important** change first.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Meeting Monday 8.30 — NOT 10.00._   **A** The meeting is earlier. **B** The meeting is later. **C** There is no meeting.',
  '**2**  _Stock figures to accounts before the meeting, please._   **A** Send them after the meeting. **B** Send them on Monday morning. **C** Send them before Monday 8.30.',
  '**3**  _Office closed Thursday pm — inventory._   **A** The office is shut all Thursday. **B** The office shuts at midday Thursday. **C** The office is open on Thursday afternoon.',
  '**4**  _Nour — Mr Tarabishi coming Tuesday 10.00. — K.A._   **A** Telephone Mr Tarabishi on Tuesday. **B** Mr Tarabishi will visit on Tuesday morning. **C** Mr Tarabishi came on Tuesday.',
  '**5**  _Invoices signed by Wed 15.00._   **A** Sign the invoices before three on Wednesday. **B** The invoices arrive on Wednesday. **C** Wednesday is a holiday.',
  '**6**  _Counter closes 2 pm Thursdays from April._   **A** The counter is closed on Thursdays. **B** The counter shuts early on Thursdays. **C** The counter opens at 2 on Thursdays.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a **change of time**, the three points are nearly always: the **new** time · what it was **before** · what the person must **do**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Abu Yasser. Say: **(1)** the Monday meeting is at 8.30 now, **(2)** it was at 10.00 before, **(3)** he must give the stock figures to accounts on Sunday evening. Use the frame.'));
out.push(p('Dear Abu Yasser, ______________. It was ______________ before. Please ______________ on ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  The meeting is at 8.30 now', ''], ['2  It was at 10.00 before', ''], ['3  Stock figures on Sunday evening', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('Your English class moves to a new day and time. Write a message to a classmate who was absent (25 words or more). Say: **(1)** the new day and time, **(2)** where the class is now, **(3)** one thing to bring.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your classmate would send (20+ words), e.g. _Thanks! Is the new room on the same floor? I\'ll bring the dictionary._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  She ___ at four exactly.   a) finish   b) finishes   c) finishing',
  '2  He doesn\'t ___ in the office on Sundays.   a) works   b) work   c) working',
  '3  The lorry comes ___ Tuesday.   a) at   b) in   c) on',
  '4  I ___ check my email before nine.   a) always   b) every   c) twice',
  '5  Be quiet — Nadia ___ the month-end.   a) does   b) do   c) is doing',
  '6  What time ___ he leave?   a) do   b) does   c) is',
  '7  ___ you send it before five, please?   a) Could   b) Do   c) Are',
  '8  We count the whole stock ___ a month.   a) two   b) twice   c) second',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 2.15** Listen to a call about opening hours. Complete the note.   Place: ______   Opens: ______   Closes: ______   Closed on: ______   Visit: ______'));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Nour', 'Sham Trading, good afternoon. Nour speaking.'],
  ['Caller', 'Good afternoon. I\'d like to come to the trade counter. What time do you open?'],
  ['Nour', 'At half past eight, from Sunday to Thursday.'],
  ['Caller', 'And you close at four?'],
  ['Nour', 'At four — but at two on Thursday. We\'re closed on Friday and Saturday.'],
  ['Caller', 'Then I\'ll come on Wednesday, at about eleven.'],
]));
out.push(p('**C  Writing.** Write a short message to a colleague about a change of time (25+ words). Say the new time, the old time, and what he or she must do.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe my working day, hour by hour',
  '☐ ask and say when a place opens, closes and is closed',
  '☐ say how often I do something, and put the adverb in the right place',
  '☐ say what I am doing now and what I am working on this week',
  '☐ ask a colleague questions about his or her working day',
  '☐ ask politely for something, and say no politely with a reason',
  '☐ tell a colleague in easy English what a timetable says',
  '☐ write a working-day note, an opening-hours notice, a routine note, an update, an interview note and a request',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
