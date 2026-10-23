// Proactive Business English A2 · Syria Edition · Book 2 · Unit 17 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'course · training · trainer · trainee · workshop · session · module · enrol · sign up · refresher · hands-on · demonstration · mentor · coach · shadow · manual · step by step · beginner · intermediate · advanced · competent · confident · tuition · fee · handout · syllabus';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 17  Training and Learning at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**17.1**  say what you would like to learn, and why',
  '**17.2**  talk about a course: how long, which days, what it costs',
  '**17.3**  say what somebody needs to do',
  '**17.4**  say that something is easy or hard — and for whom',
  '**17.5**  describe what you are good at and what you are not',
  '**17.6**  ask somebody to show you how to do something',
  '**17.7**  Review & Mediate: tell a colleague what the course notice says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('The two kinds of learning at work, and the English for both', [
  'The first kind is a **course**: a room, a timetable, a fee, a certificate. There is a vocabulary for it — _enrol, session, module, handout_ — and most of this unit\'s reading is about getting onto one and reporting back from it.',
  'The second kind is the one that actually teaches most people most of their job: **somebody shows you**. It has almost no vocabulary and it is never written down, which is why 17.6 is the most useful cycle in the unit.',
  '⚠ One rule runs through all seven cycles. **Say what you want to be able to do, not what you want to attend.** _I would like to do the accounts course_ is a request for three evenings. _I would like to be able to close the month without asking Nadia_ is a reason, and reasons get approved.',
], C.lyellow, C.orange));

// ======================= CYCLE 17.1 =======================
out.push(pb());
out.push(h2('17.1  I would like to learn the accounts system'));
out.push(p('**Function:** saying what you want to learn   ·   **Grammar:** _would like to_, _I\'d like to be able to_   ·   **Pronunciation:** the contracted _I\'d_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you would like to be able to do at work that you cannot do now. Not a course — a thing.'));
out.push(p('**b**  Which is stronger in a request? _I want to do the course._ / _I would like to do the course._ / _I would like to be able to close the month on my own._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour ask for?   **A** a pay rise   **B** to learn the accounts system   **C** two days off'));
out.push(p('**b**  Listen again. **1** What reason does she give? **2** What does Mr Ayoub ask her that she has already answered?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.1  Asking for the course', [
  ['Nour', 'Mr Ayoub, can I ask you something about next year? I would like to learn the accounts system properly.'],
  ['Mr Ayoub', 'You use it every day.'],
  ['Nour', 'I use four screens of it. I would like to be able to close the month without asking Nadia three questions, and to do it when she is away.'],
  ['Mr Ayoub', 'And when is she away?'],
  ['Nour', 'Twice a year for a fortnight, and last September the month closed four days late because of it.'],
  ['Mr Ayoub', 'What would it take?'],
  ['Nour', 'There is a course at the Chamber — three weeks, Tuesdays and Thursdays, five to seven. Or Nadia could show me, an hour a week, for about three months. The course costs money and the hour costs her time.'],
  ['Mr Ayoub', 'You have already decided which one you want.'],
  ['Nour', 'The course. But I would take the hour, and I thought you should have both to choose from.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for training – the shapes that get a yes**',
  table(['Shape', 'Example'], [
    ['**I would like to** + verb', '**I would like to learn** the accounts system.'],
    ['**I\'d like to be able to** + verb', '**I\'d like to be able to close** the month on my own.'],
    ['Giving the reason as a **cost**', 'Last September the month closed **four days late**.'],
    ['Offering **two** ways', 'A course, **or** an hour a week with Nadia.'],
    ['Saying which you prefer, honestly', 'I have decided, **but** I would take the other.'],
  ], [1.6, 2.4]),
  '⚠ **_Would like_ is not a softer _want_; it is the form used at work.** _I want_ in a request to a manager sounds like a child in most of the world\'s offices, including English ones.',
  '⚠ **Ask for the ability, not for the course.** _To be able to close the month without asking three questions_ is a sentence a manager can weigh. _To do the course_ is a sentence he can only say yes or no to.',
  '⚠ **Bring two options.** One option is a request; two options is a decision, and managers say yes to decisions much more often. Say which you prefer when asked — not before.',
  '**Practise:** Turn each into a request with a reason and two options. 1 a system 2 a language 3 driving 4 a safety certificate 5 something only one person can do',
  '**Useful phrases:**  I would like to…  ·  I\'d like to be able to…  ·  What would it take?  ·  The course costs money and the hour costs her time.  ·  I thought you should have both to choose from.',
  '**Pronunciation – _I\'d_.** 🔊 **Track 17.2** Listen: _I\'d like to · I\'d rather · I\'d take_. The contraction is one short sound and leaving it out sounds formal to the point of stiffness. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks to learn something; B asks what it would take; A offers two ways. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, can I ask you something about __________? I would like to __________ properly.'],
  ['B', 'You __________ every day.'],
  ['A', 'I __________. I would like to be able to __________ without __________, and to do it when __________.'],
  ['B', 'And when is that?'],
  ['A', '__________, and last __________ it cost us __________.'],
  ['B', 'What would it take?'],
  ['A', 'There is __________ — __________. Or __________ could __________, __________. __________ costs __________ and __________ costs __________.'],
]));
out.push(table(['Role card 1 — the forklift licence', 'Role card 2 — English for the telephone'], [[
  'You would like to be able to move pallets when the one licensed driver is away. He is away about three weeks a year and last year work stopped twice. Two ways: a two-day course with a test, or a licensed colleague supervising you for a month.',
  'You would like to be able to take the Aleppo supplier\'s calls instead of passing them on. They come about four times a week. Two ways: an evening class, twice a week for ten weeks, or half an hour a day with a colleague who already does it.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their request for the class – **without the book**.'));
out.push(p('**Listener task:** write the **cost of not training** — the days, the stoppages, the money. That is the sentence the request turns on.'));
out.push(PHRASE_CARD(['I would like to…', 'I\'d like to be able to…', 'What would it take?', 'Or … could show me.', 'both to choose from', 'it closed four days late']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** real training requests to colleagues. Each one: the ability, the cost of not having it, and two ways of getting it.'));
out.push(table(['I\'d like to be able to…', 'What it costs us now', 'Way 1', 'Way 2'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.5, 1.4, 1.1, 1.1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would like to be able to _______. At the moment _______ costs us _______. It could be _______ or _______._'));
out.push(p('**Listener task:** write down which request you would approve if the money were yours. Say why — it is nearly always the one with the number in it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I would like learn_ and _I want that you show me_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the request Nour sends, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Request — accounts system training, two options',
  'Dear Mr Ayoub,',
  'I would like to be able to close the month on my own, and to do it in the fortnights when Nadia is away.',
  '**Why.** Nadia is away twice a year for two weeks. Last September the month closed four days late and two customer statements went out wrong. I can do four screens of the system; closing the month needs eleven.',
  '**Option 1 — the Chamber course.** Three weeks, Tuesdays and Thursdays, 17.00–19.00. Fee 420,000. It ends with a test and a certificate. I would leave at half past four on six days.',
  '**Option 2 — an hour a week with Nadia.** No fee. About three months. It costs Nadia twelve hours and it does not cover the year-end, which the course does.',
  '**What I would do.** Option 1, because of the year-end. But option 2 is real and I would take it.',
  'Could you let me know by the end of the month? The next course starts on 4 March and enrolment closes a fortnight before.',
  'Thank you. Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer ask for in the very first sentence — a course, or something else?'));
out.push(item('2', 'What does each option cost, and who pays each cost?'));
out.push(item('3', 'Why is the last paragraph there?'));
out.push(box('Writer\'s box', [
  '**A training request — six short parts:** the **ability** you want → **why**, with the cost of not having it → **option 1**, with its full cost → **option 2**, with its cost → which you would choose and why → **a deadline, with the reason for the deadline**.',
  '**Cost means every cost, including other people\'s.** The fee, the hours you are away, the hours a colleague gives up. A request that hides the cost to somebody else is refused the second time, when the colleague says so.',
  '**Name the thing the cheap option does not cover.** _It does not cover the year-end, which the course does._ That sentence is why the expensive option gets approved, and leaving it out is why requests fail.',
  '⚠ The deadline must have a **reason outside you**: _enrolment closes a fortnight before 4 March_. A deadline that is only your own impatience is ignored, and should be.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a training request for yourself (35 words or more). Use the frame.'));
out.push(p('**Subject:** Request — ______________, two options   Dear ______________, I would like to be able to ______________.   **Why.** ______________. Last ______________ it cost ______________.   **Option 1 — ______________.** ______________. Fee ______________. ______________.   **Option 2 — ______________.** ______________. It costs ______________ and it does not cover ______________.   **What I would do.** ______________, because ______________.   Could you let me know by ______________? ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says name the thing the cheap option does not cover. Both of yours look equal here — what can the course do that the colleague cannot?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could your manager decide from this without asking anything?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The ability asked for, not the course', ''],
  ['The cost of not having it, with a number', ''],
  ['Two options, each with its full cost', ''],
  ['A deadline with a reason outside the writer', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "why". The class says which request they would approve, and the answer is reliably the one that costs the company something today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you have wanted to learn for a long time and have not (60 to 100 words). Say what it is, what stops you, what it would let you do, and what the smallest first step would be.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the smallest first step_   ✓ _would like to + verb?_   ? _who could show you an hour of it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the obstacle money, and in how many is it that nobody has ever been asked? Count both.'));
out.push(box('Homework', ['Write your final text. Then write the real request — the ability, the cost, two options — and give it to the person who could say yes (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.2 =======================
out.push(pb());
out.push(h2('17.2  Three weeks, Tuesdays and Thursdays, five to seven'));
out.push(p('**Function:** talking about a course   ·   **Grammar:** duration and schedule — _for_, _every_, _from … to_, _a week_   ·   **Pronunciation:** saying a timetable so it can be written down'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your own working week aloud as a timetable: days, hours, breaks. Could somebody write it down from what you said?'));
out.push(p('**b**  Fill in: _three weeks · ______ Tuesday · ______ five ______ seven · twice ______ week · ______ 4 March_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long is the course?   **A** three weeks   **B** six weeks   **C** three months'));
out.push(p('**b**  Listen again. **1** Write the full timetable. **2** What two things does Nour ask that are not on the notice?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.3  Telephoning the Chamber', [
  ['Nour', 'Good morning. I am telephoning about the accounts systems course. Could you give me the details?'],
  ['Woman', 'It runs for three weeks, Tuesdays and Thursdays, from five to seven in the evening. Six sessions. It starts on the fourth of March.'],
  ['Nour', 'Three weeks, Tuesdays and Thursdays, five to seven, six sessions, starting the fourth of March. And the fee?'],
  ['Woman', 'Four hundred and twenty thousand, including the handouts. The test is on the last evening and the certificate comes about three weeks later.'],
  ['Nour', 'Two things that are not on the notice. Is there a session on the year-end, and what happens if I miss one evening?'],
  ['Woman', 'The year-end is the fifth session, which is the one most people come for. If you miss an evening you can take it with the next course, but not the test — you must do the test with your own group.'],
  ['Nour', 'So I can miss one evening but not the last one. Thank you — that is exactly what I needed and neither of them is on the notice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Talking about a course – the words a timetable needs**',
  table(['', 'Shape', 'Example'], [
    ['How long', '**for** + length · **runs for**', 'It **runs for** three weeks.'],
    ['Which days', '**on** + day, plural for a habit', '**on Tuesdays and Thursdays**'],
    ['What time', '**from … to …**', '**from five to seven**'],
    ['How often', '**twice a week** · **every** Tuesday', '**twice a week**'],
    ['When it starts', '**on** + date', '**on** the fourth of March'],
    ['How many', '**sessions · modules**', 'six **sessions**'],
  ], [0.9, 1.6, 1.6]),
  '⚠ **Days in the plural mean a habit:** _on Tuesdays_ = every Tuesday. _On Tuesday_ means one particular Tuesday, and on a course notice that difference is the whole timetable.',
  '⚠ **Read the whole timetable back.** _Three weeks, Tuesdays and Thursdays, five to seven, six sessions, starting the fourth of March._ It takes four seconds and it is the habit this book has been building since Unit 1.',
  '⚠ **Ask the two questions that are never on the notice.** They are usually: _what is actually in it?_ and _what happens if I miss one?_ Every course has an answer to both and almost no notice prints them.',
  '**Practise:** Say each timetable so a partner can write it down, then have them read it back.',
  '1 an evening class  2 a two-day course  3 a weekly session  4 a three-month programme  5 your own working week',
  '**Useful phrases:**  It runs for…  ·  on Tuesdays and Thursdays  ·  from five to seven  ·  six sessions  ·  Two things that are not on the notice…  ·  with your own group',
  '**Pronunciation – saying a timetable to be written down.** 🔊 **Track 17.4** Listen. Each part is separated by a tiny pause — _three weeks · Tuesdays and Thursdays · five to seven_ — and the voice falls at the end of each. Repeat, and resist running them together.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones about a course; B gives the timetable; A reads it back and asks the two questions that are not on the notice. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Good morning. I am telephoning about __________. Could you give me the details?'],
  ['B', 'It runs for __________, __________, from __________ to __________. __________ sessions. It starts on __________.'],
  ['A', '__________, __________, __________, __________, starting __________. And the fee?'],
  ['B', '__________, including __________. __________ is on __________ and __________ comes __________.'],
  ['A', 'Two things that are not on the notice. __________, and __________?'],
  ['B', '__________. If you miss __________ you can __________, but not __________.'],
]));
out.push(table(['Role card 1 — a forklift course', 'Role card 2 — an English class'], [[
  'Two days, Saturday and Sunday, 8.00 to 15.00, with a test at the end of the second day. Fee 600,000 including the licence application. Not on the notice: whether the test can be retaken, and whether the licence is accepted outside Damascus.',
  'Ten weeks, Mondays and Wednesdays, 18.00 to 19.30, twenty sessions, starting 11 January. Fee 350,000, handouts extra. Not on the notice: the level of the class, and whether you can join after it starts.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the call for the class – **without the book**.'));
out.push(p('**Listener task:** write the timetable down from what you hear. Then compare with your partner. Any difference is a sentence that was said too fast.'));
out.push(PHRASE_CARD(['It runs for…', 'on Tuesdays and Thursdays', 'from five to seven', 'six sessions', 'not on the notice', 'with your own group']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Find **three** real courses — at a chamber, an institute, online, anywhere. Get the full timetable for each and the answers to the two questions that are not on the notice.'));
out.push(table(['Course', 'How long / which days / what time', 'Fee', 'The two answers'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.7, 0.7, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It runs for _______, on _______, from _______ to _______. It costs _______. What is not on the notice is _______._'));
out.push(p('**Listener task:** write down the course you would take. Then write what would stop you. The second answer is usually the day of the week.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _during three weeks_ and _in Tuesdays_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the course notice, and answer the questions.'));
out.push(box(null, [
  '**DAMASCUS CHAMBER OF COMMERCE — ACCOUNTS SYSTEMS FOR SMALL COMPANIES**',
  '**When:** three weeks — Tuesdays and Thursdays, 17.00–19.00. Six sessions. Begins Tuesday 4 March.',
  '**Where:** Chamber building, second floor, room 4.',
  '**Fee:** 420,000 SYP, including handouts. Payable at enrolment. Enrolment closes 18 February.',
  '**Sessions:** 1 the ledger and the chart of accounts · 2 entering invoices and credits · 3 reconciling the bank · 4 customer statements · 5 **the year-end** · 6 test and review.',
  '**For:** people who already use an accounts system daily and want to work in it unsupervised. Not a beginners\' course.',
  '**Attendance:** one session may be made up with a later group. The test must be taken with your own group.',
  '**Certificate:** issued about three weeks after the test, by post.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who is this course **not** for?'));
out.push(item('2', 'Which session would most interest somebody who closes a month?'));
out.push(item('3', 'What are the two dates a reader must not confuse?'));
out.push(box('Writer\'s box', [
  '**A course notice — the headings a reader looks for, in this order:** When · Where · Fee · **Sessions** · For · Attendance · Certificate.',
  '**The "For" line is the most useful line on any notice** and it is the one most often missing. _Not a beginners\' course_ saves the wrong person a fee and the right person a doubt.',
  '**List the sessions.** A notice with no contents is a notice nobody can argue for to their manager — the list is what a training request quotes.',
  '⚠ Two dates, never one: when it **begins** and when **enrolment closes**. Readers who see only the first miss the second by about a week, reliably, and a notice that prints only the start date causes that.',
  '⚠ Say what happens if somebody misses a session. It is the question everybody asks and almost nobody prints.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a course notice — for a real course, or one your workplace should run (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________**   **When:** ______________. ______________ sessions. Begins ______________.   **Where:** ______________.   **Fee:** ______________. Enrolment closes ______________.   **Sessions:** 1 ______________ · 2 ______________ · 3 ______________ · 4 ______________.   **For:** ______________. Not ______________.   **Attendance:** ______________.   **Certificate:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says two dates, never one. Yours has the start — when does enrolment close?"',
  'Quote, question, stop. This is the fault that costs real people real places on real courses.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could I decide whether this course is for me?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days in the plural, with times _from … to …_', ''],
  ['Both dates — start and enrolment', ''],
  ['A list of the sessions', ''],
  ['A "For" line that says who it is not for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "For" line. The class says, for each, whether they are in it or out of it — and how quickly they knew.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a course you have been on, or one somebody told you about (60 to 100 words). Say the timetable, what was in it, what was worth the money, and what the notice did not tell you.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what was worth the money_   ✓ _timetable complete?_   ? _what should the notice have said?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Make a list on the board of everything the notices did not say. It is the most practical ten minutes in the unit.'));
out.push(box('Homework', ['Write your final text. Then find a real course notice and write the three questions you would have to telephone and ask (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.3 =======================
out.push(pb());
out.push(h2('17.3  You need to bring your badge'));
out.push(p('**Function:** saying what is needed   ·   **Grammar:** _need to_, _you need_, _it needs_ + -ing   ·   **Pronunciation:** _need to_ in connected speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What does a visitor to your workplace need to do before they can come in? Name three things.'));
out.push(p('**b**  Which is right? _You need bring your badge._ / _You need to bring your badge._ / _The door needs fixing._ / _The door needs to fix._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala need to do before Tuesday?   **A** pay the fee   **B** bring two documents   **C** telephone the trainer'));
out.push(p('**b**  Listen again. **1** List everything she needs. **2** What does Nour tell her she does **not** need?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.5  Before the first session', [
  ['Hala', 'The course starts on Tuesday. What do I need?'],
  ['Nour', 'You need to be there at twenty to five, not at five — the room is on the second floor and the lift is slow. You need your identity card for the door, and you need the receipt for the fee.'],
  ['Hala', 'I have the receipt. Do I need a laptop?'],
  ['Nour', 'You do not need a laptop. You need a pen and something to write on, and the handouts are given out there.'],
  ['Hala', 'And do I need to tell the counter I am leaving early on Tuesdays?'],
  ['Nour', 'You need to tell Abu Yasser, not the counter, because he does the rota. Tell him once now and once again on the first Monday, because he will have written it down and forgotten which Tuesday it starts.'],
  ['Hala', 'Anything else?'],
  ['Nour', 'The lift needs a coin sometimes. Take the stairs.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – _need_ in its three shapes**',
  table(['Shape', 'Example'], [
    ['**need to** + verb', 'You **need to be** there at twenty to five.'],
    ['**need** + noun', 'You **need** your identity card.'],
    ['**do not need to / do not need**', 'You **do not need** a laptop.'],
    ['**needs** + **-ing** (a thing)', 'The door **needs fixing**. The lift **needs a coin**.'],
    ['Question', '**Do I need to** tell the counter?'],
  ], [1.5, 2.3]),
  '⚠ _Need_ takes **to** before a verb and nothing before a noun: _you need **to** bring your badge_ · _you need your badge_. The commonest mistake is dropping the _to_.',
  '⚠ **_Needs + -ing_ is for things, not people:** _the door needs fixing_ · _the lift needs a coin_. It is short, idiomatic, and extremely common at work.',
  '⚠ **Say what is not needed.** _You do not need a laptop._ Half of what a new person worries about is things nobody requires, and the sentence that removes one is worth two that add one.',
  '⚠ **Name the right person.** _You need to tell Abu Yasser, not the counter, because he does the rota._ A requirement with the wrong person attached is worse than none.',
  '**Practise:** For each, say three things somebody needs, one thing they do not, and one thing that needs doing. 1 a first day 2 a visitor 3 a delivery 4 a course 5 a meeting',
  '**Useful phrases:**  You need to…  ·  You do not need…  ·  Do I need to…?  ·  It needs a coin.  ·  Tell him once now and once again on the first Monday.',
  '**Pronunciation – _need to_.** 🔊 **Track 17.6** In speech the two **d/t** sounds run together: /ˈniːtə/. Listen and repeat six: _you need to be · you need to tell · I need to ask_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is about to start something new; B lists what is needed, what is not, and what needs doing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ starts on __________. What do I need?'],
  ['B', 'You need to __________, not __________ — because __________. You need __________, and you need __________.'],
  ['A', 'I have __________. Do I need __________?'],
  ['B', 'You do not need __________. You need __________, and __________ are given __________.'],
  ['A', 'And do I need to tell __________?'],
  ['B', 'You need to tell __________, not __________, because __________. Tell them __________ and __________.'],
]));
out.push(table(['Role card 1 — a first day', 'Role card 2 — a site visit'], [[
  'Needs: to arrive at half past seven for the gate, an identity card, flat shoes. Does not need: lunch (there is a canteen) or a notebook (one is given). Needs doing: the badge photograph, which takes two days.',
  'Needs: a hard hat, boots, the name of the person expecting you, and to sign in at the gate. Does not need: a visitor\'s letter any more. Needs doing: the gate telephone, which has been broken for a month — knock instead.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their briefing for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing that is **not** needed, and the thing that needs doing. Those two are what a new person never finds out.'));
out.push(PHRASE_CARD(['You need to…', 'You do not need…', 'Do I need to…?', 'It needs a coin.', 'not the counter — he does the rota', 'Take the stairs.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Brief **three** colleagues on something they are about to do for the first time. Each briefing: three things needed, one not needed, one thing that needs doing, and the right person to tell.'));
out.push(table(['What they are doing', 'They need…', 'They do not need…', 'What needs doing'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.5, 1.2, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _You need to _______, and you need _______. You do not need _______. And _______ needs _______._'));
out.push(p('**Listener task:** write down the most useful "you do not need" you heard. New people spend a surprising amount of worry on things nobody requires.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you need bring_ and _the door needs to fix_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note that is given to everybody on their first day, and answer the questions.'));
out.push(box(null, [
  '**YOUR FIRST WEEK — what you need, and what you do not**',
  '**Before you arrive.** You need your identity card for the gate and a photograph for the badge. The badge takes two days, so for the first two days you need to be signed in by somebody — ask at the counter, not at the gate.',
  '**Every day.** You need flat shoes if you go into the warehouse at all, including to ask a question. You need to be at the gate by 7.45 if you are on the early rota.',
  '**What you do not need.** You do not need a laptop, a notebook, your own pens, or lunch. All four are here. You do not need a letter from anybody.',
  '**What needs doing by you, in the first week.** Your bank details to Nadia. Your emergency number to Mr Ayoub. Your name on the tea list — this is not a joke; the list is how the kettle is paid for.',
  '**Who to tell what.** Hours and days: Abu Yasser, because he does the rota. Money: Nadia. Anything you are not sure about: anybody. Nobody here minds being asked twice; everybody minds being asked in the third week about something from the first.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does it say "ask at the counter, not at the gate"?'));
out.push(item('2', 'Find the four things that are not needed. Why list them at all?'));
out.push(item('3', 'What is the point of the last line?'));
out.push(box('Writer\'s box', [
  '**A "what you need" note — five headings:** before you arrive · every day · **what you do not need** · what needs doing by you · **who to tell what**.',
  '**The "do not need" heading is half the value of the page.** A new person arrives carrying things, worrying about things, and apologising for things nobody requires. Four lines remove all of it.',
  '**Attach the person to every requirement.** _Hours and days: Abu Yasser, because he does the rota._ Without the names the note tells somebody what to do and not who to do it with, and they will ask the wrong person once and then stop asking.',
  '⚠ Say the thing about asking. _Nobody here minds being asked twice; everybody minds being asked in the third week about something from the first._ Every workplace believes it; almost none writes it down, and new people spend a month finding out.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the "what you need" note for a new person at your own workplace (35 words or more). Use the frame.'));
out.push(p('**YOUR FIRST WEEK**   **Before you arrive.** You need ______________. ______________, so ______________.   **Every day.** You need to ______________. You need ______________.   **What you do not need.** You do not need ______________, ______________, or ______________.   **What needs doing by you.** ______________. ______________.   **Who to tell what.** ______________: ______________, because ______________. ______________: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says attach a person to every requirement. _Tell the office about your hours_ — which person in the office, and why that one?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would a new person know who to ask?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_need to_ + verb and _need_ + noun both correct', ''],
  ['A "do not need" list', ''],
  ['Something that _needs doing_', ''],
  ['A person attached to every requirement', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "do not need" list. The class says which line they wish somebody had told them on their own first day.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your own first week somewhere (60 to 100 words). Say what you needed, what you worried about that you did not need, who you should have asked, and what nobody told you.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what nobody told them_   ✓ _need to / need correct?_   ? _does the next new person know it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Collect on the board everything nobody told anybody. That board is the first draft of a real induction note, and somebody in the room should keep it.'));
out.push(box('Homework', ['Write your final text. Then write the five things a new person at your work needs to know in their first hour, and give them to whoever does the inductions (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.4 =======================
out.push(pb());
out.push(h2('17.4  It is easy once you have done it twice'));
out.push(p('**Function:** saying something is easy or hard   ·   **Grammar:** _it is_ + adjective + _to_ + verb, _easy for me / hard for a beginner_   ·   **Pronunciation:** the stress that carries the real message'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing at your work that is easy for you and hard for a new person. Why is it hard?'));
out.push(p('**b**  Which is right? _It is easy to use._ / _It is easy using it._ / _It is easy for use._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is hard about the invoice screen?   **A** the screen itself   **B** knowing which of three buttons   **C** the password'));
out.push(p('**b**  Listen again. **1** What does Nadia say is easy, and after how long? **2** What does she refuse to say?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.7  "Is it difficult?"', [
  ['Hala', 'Is the invoice screen difficult?'],
  ['Nadia', 'It is easy once you have done it twice. The first time it is confusing, and it is confusing for a reason: there are three buttons that all look like Save and only one of them is.'],
  ['Hala', 'Which one?'],
  ['Nadia', 'The middle one. The left one saves a draft that nobody ever looks at again, and the right one closes without saving and asks you nothing.'],
  ['Hala', 'That is not easy. That is badly made.'],
  ['Nadia', 'It is badly made and it is easy once you know. Those are two different sentences and people say the first when they mean the second, and then nobody asks for it to be fixed.'],
  ['Hala', 'So is it hard or not?'],
  ['Nadia', 'It is hard for one week and easy for ever. And it is impossible for somebody who has not been shown, which is not the same as hard.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – easy, hard, and for whom**',
  table(['Shape', 'Example'], [
    ['**It is** + adj + **to** + verb', '**It is easy to use.**'],
    ['**for** + person', 'It is easy **for me** and hard **for a beginner**.'],
    ['**once** + clause', 'It is easy **once you have done it twice**.'],
    ['**hard / confusing for a reason**', 'It is confusing **for a reason**: three buttons look the same.'],
    ['Degrees', 'easy · straightforward · fiddly · confusing · hard · impossible'],
  ], [1.6, 2.4]),
  '⚠ **_It is easy to use_** — the verb takes **to**, never _-ing_ and never _for_.',
  '⚠ **Always say for whom and after how long.** _Easy_ with nothing attached is almost meaningless at work: easy for the person who built it, hard for the person on their first week. _Hard for one week and easy for ever_ is information.',
  '⚠ **Separate "badly made" from "hard".** They are two different sentences, and calling a badly made thing hard is how badly made things stay. Say both: _it is badly made, and it is easy once you know._',
  '⚠ _Impossible for somebody who has not been shown_ is a category of its own, and most of a workplace is in it. It is the argument for 17.6.',
  '**Practise:** Describe each one with _it is … to …_, a person, and a length of time. 1 a system 2 a machine 3 a form 4 a journey 5 a conversation nobody wants to have',
  '**Useful phrases:**  It is easy once you have…  ·  hard for a beginner  ·  confusing for a reason  ·  badly made and easy once you know  ·  hard for a week and easy for ever',
  '**Pronunciation – the stress that carries the message.** 🔊 **Track 17.8** Listen: _it is **easy** once you know_ and _it is easy **once you know**_. The first reassures; the second warns. Repeat both and say what each one is really telling you.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks whether something is difficult; B gives the honest answer in three parts — easy for whom, hard why, and badly made or not. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Is __________ difficult?'],
  ['B', 'It is easy once you have __________. The first time it is __________, and it is __________ for a reason: __________.'],
  ['A', '__________?'],
  ['B', '__________. __________ and __________.'],
  ['A', 'That is not easy. That is __________.'],
  ['B', 'It is __________ and it is easy once you know. Those are two different sentences.'],
  ['A', 'So is it hard or not?'],
  ['B', 'It is hard for __________ and easy for __________. And it is impossible for __________.'],
]));
out.push(table(['Role card 1 — the stock screen', 'Role card 2 — the paper delivery note'], [[
  'Easy after a fortnight. Confusing at first because the search finds the code and not the name, and nobody tells you that the code is on the shelf label and not on the box.',
  'Easy after three. Confusing at first because the top copy goes to the customer, the middle to accounts and the bottom stays in the book — and the carbon is the wrong way round in about one book in five.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the **reason** it is confusing. A reason can be fixed; "it is confusing" cannot.'));
out.push(PHRASE_CARD(['It is easy once you have…', 'confusing for a reason', 'hard for a beginner', 'badly made and easy once you know', 'impossible for somebody who has not been shown', 'two different sentences']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe **three** things at your work honestly: easy or hard, for whom, after how long, and for what reason. Say which of them are badly made.'));
out.push(table(['What', 'Easy / hard for whom', 'After how long', 'The reason — and is it badly made?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 0.9, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It is _______ for _______ and _______ for _______. It is hard for _______ because _______. It _______ badly made._'));
out.push(p('**Listener task:** write down the badly made thing that would be easiest to fix. There is usually one that needs a label and nothing else.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _it is easy using_ and _it is difficult for understand_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Hala writes after her first week on the invoice screen, and answer the questions.'));
out.push(box(null, [
  '**The invoice screen — what is actually hard about it**',
  'It is easy once you have done about six. It is hard for the first week, and it is hard for one reason that has nothing to do with accounts.',
  '**The three buttons.** There are three buttons at the bottom and they all look like Save. The middle one saves. The left one saves a draft, which nobody ever opens again. The right one closes without saving and asks nothing.',
  '**What this costs.** In my first week I lost two invoices and re-entered them. Nadia says everybody loses two.',
  '**What would fix it.** A strip of paper taped under the screen that says: **middle = save**. That is all. It is not a training problem; it is a labelling problem, and it has cost every new person about forty minutes for nine years.',
  '**What is genuinely difficult**, and no label will fix: knowing which credits go against which invoice when a customer pays a round number for three invoices. That is accounts, and it takes a month.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer separate into two different kinds of difficulty?'));
out.push(item('2', 'What is the proposed fix, and what does it cost?'));
out.push(item('3', 'Why is "nine years" in the note?'));
out.push(box('Writer\'s box', [
  '**A "what is actually hard" note — four parts:** easy after how much practice → **the one thing that is hard, named exactly** → what it costs, with a number → **what would fix it** → and separately, **what is genuinely difficult** and cannot be fixed with a label.',
  'The whole value is in the separation. Most "difficult" at work is a **labelling problem** wearing the costume of a training problem, and nobody separates the two because the person who finds it hard assumes it is them.',
  '**Put the years in.** _It has cost every new person about forty minutes for nine years._ One person\'s forty minutes is a complaint; nine years of everybody\'s is a decision.',
  '⚠ End with what really is difficult. It protects the note from being read as "everything would be fine if you labelled things", and it tells a manager where training is genuinely needed.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what is actually hard" note about something at your work (35 words or more). Use the frame.'));
out.push(p('**______________ — what is actually hard about it**   It is easy once you have ______________. It is hard for ______________, for one reason: ______________.   **______________.** ______________. ______________.   **What this costs.** ______________. ______________.   **What would fix it.** ______________. It is not a ______________ problem; it is a ______________ problem.   **What is genuinely difficult**, and no ______________ will fix: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks you to separate the labelling problem from the real difficulty. This note has only the first — is there anything here that would still be hard with a perfect label?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could somebody fix this on Sunday with a pen and a piece of paper?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_it is … to …_ with a person and a time', ''],
  ['The hard thing named exactly', ''],
  ['A cost with a number in it', ''],
  ['The genuinely difficult part, kept separate', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what would fix it". The class picks the one that could be done this week — and somebody should do it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something everybody at your work calls difficult that is not (60 to 100 words). Say what it really is, why people call it hard, what would fix it, and why nobody has.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the real reason_   ✓ _easy / hard with a person attached?_   ? _why has nobody fixed it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is the answer "because the people who find it hard are new, and the people who could fix it are not"? That sentence is worth writing on the board.'));
out.push(box('Homework', ['Write your final text. Then make one label, one strip of paper, one sign at your workplace — and write what it says and where you put it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.5 =======================
out.push(pb());
out.push(h2('17.5  I am good at numbers and bad at letters'));
out.push(p('**Function:** describing strengths and weaknesses   ·   **Grammar:** _good at / bad at_ + noun or -ing, _better at … than_   ·   **Pronunciation:** the weak _at_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What are you good at, at work? Say it without the words _hard-working_ or _reliable_.'));
out.push(p('**b**  Fill in: _good ______ numbers · good ______ talking to customers · better ______ this ______ that_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Fadi good at?   **A** writing   **B** remembering routes and people   **C** the computer'));
out.push(p('**b**  Listen again. **1** What is he bad at, and what has he done about it? **2** What does Nour say about the pairing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.9  Good at, bad at', [
  ['Nour', 'The training list asks what everybody is good at and bad at. What would you put?'],
  ['Fadi', 'Put nothing. I am a driver.'],
  ['Nour', 'Fadi. You know the name of every shopkeeper on four rounds and you have never once gone to the wrong gate in six years.'],
  ['Fadi', 'That is not a skill. That is just knowing.'],
  ['Nour', 'It is the most valuable thing in the yard. What are you bad at?'],
  ['Fadi', 'Writing. My notes are short and when somebody reads them later they do not understand. I have started drawing instead — a little map at the bottom of the note for the next driver.'],
  ['Nour', 'Then you are bad at writing and good at solving it, and the second one is rarer. I am going to put both, in your words.'],
  ['Fadi', 'Put the map. Do not put that I am bad at writing.'],
  ['Nour', 'I am putting both, because the map only makes sense if the other half is there.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – strengths and weaknesses**',
  table(['Shape', 'Example'], [
    ['**good at** + noun', 'I am **good at numbers**.'],
    ['**good at** + **-ing**', 'I am **good at talking** to customers.'],
    ['**bad at / not very good at**', 'I am **not very good at** writing long letters.'],
    ['**better at … than …**', 'I am **better at** the telephone **than** at email.'],
    ['What you have done about it', 'I **have started** drawing a map instead.'],
  ], [1.6, 2.4]),
  '⚠ **_At_, always** — not ~~good in~~ and not ~~good on~~. And after _at_, a noun or an **-ing** form, never an infinitive: ~~good at to write~~.',
  '⚠ **Name the weakness with what you have done about it.** _I am bad at writing, and I have started drawing a map at the bottom of the note._ A weakness alone is a confession; a weakness with a workaround is a professional.',
  '⚠ **Other people are better at naming your strengths than you are.** _That is not a skill, that is just knowing_ is what almost everybody says about the thing they are best at. Ask a colleague; write down what they say.',
  '**Practise:** Say three things you are good at and one you are not, with what you have done about it. Then say the same about the person next to you.',
  '**Useful phrases:**  I am good at…  ·  I am not very good at…  ·  better at … than …  ·  That is just knowing.  ·  I have started … instead.  ·  in your words',
  '**Pronunciation – the weak _at_.** 🔊 **Track 17.10** Listen: _good at **numbers**_ — _at_ is /ət/ and almost disappears; the noun takes the stress. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks B what they are good at; B says "nothing"; A names it for them. Then swap. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ asks what everybody is good at and bad at. What would you put?'],
  ['B', 'Put nothing. I am __________.'],
  ['A', '__________. You __________ and you have never once __________.'],
  ['B', 'That is not a skill. That is just __________.'],
  ['A', 'It is __________. What are you bad at?'],
  ['B', '__________. __________. I have started __________ instead.'],
  ['A', 'Then you are bad at __________ and good at __________, and the second one is rarer.'],
]));
out.push(table(['Role card 1 — the counter', 'Role card 2 — the warehouse'], [[
  'B remembers what every regular customer buys and notices when somebody stops coming. B is bad at written English and has started keeping a card of ten standard sentences by the telephone.',
  'B can tell by the sound whether a pallet is badly stacked. B is bad at the screen and has started photographing the shelf label instead of writing the code down.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write down the strength the person refused to call a strength. Every pair will have one.'));
out.push(PHRASE_CARD(['I am good at…', 'not very good at…', 'better at … than …', 'That is just knowing.', 'I have started … instead.', 'the second one is rarer']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview **three** colleagues. Write what each says they are good at, then what **you** say they are good at. Then ask what they are bad at and what they have done about it.'));
out.push(table(['Who', 'What they said', 'What I say', 'Bad at — and what they do about it'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [0.8, 1.3, 1.3, 1.9]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ says they are good at _______. I say they are good at _______. They are not very good at _______, and they have started _______._'));
out.push(p('**Listener task:** count how many people named a smaller strength than their colleague named for them. It is nearly everybody, in every class.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _good in English_ and _good at to drive_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the training plan, and answer the questions.'));
out.push(box(null, [
  '**WHO CAN DO WHAT — and who is learning what**',
  '**Fadi (driver).** Good at: routes, gates, and the name of every shopkeeper on four rounds; six years with no wrong address. Not good at: written notes. **What he does about it:** draws a map at the bottom of the note for the next driver. **Learning:** nothing formal. Should be asked before any route changes.',
  '**Hala (customer service).** Good at: the counter, complaints, remembering what a customer bought last time. Not good at: the invoice screen, yet — six weeks in. **Learning:** an hour a week with Nadia.',
  '**Nour (administration).** Good at: telephone orders, chasing, writing things down. Not good at: the year-end. **Learning:** Chamber course, March, 420,000, approved.',
  '**Nadia (accounts).** Good at: everything in accounts. Not good at: being away. **Learning:** nothing — she is teaching two people, which is the plan for the fortnights she is not here.',
  '⚠ Every line says what the person **does about** the weakness. A list of weaknesses with no second half is a list nobody will agree to put their name on.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is Nadia "not good at", and why is it in a training plan?'));
out.push(item('2', 'What does every entry have in common?'));
out.push(item('3', 'Which entry has no formal training, and what does it say instead?'));
out.push(box('Writer\'s box', [
  '**A who-can-do-what page — one line per person:** **good at**, with the evidence · **not good at**, honestly · **what they do about it** · **what they are learning**.',
  'Keep the evidence short and factual: _six years with no wrong address_ · _six weeks in_. A strength without evidence looks like a compliment; with it, it is a fact the person can be asked about.',
  '**Every weakness gets a second half.** Without it, nobody will agree to have their name on the page, and a training plan that people refuse to sign is a plan nobody follows.',
  '⚠ Include the person who is good at everything in their area. _Not good at: being away._ It is the most useful line on the page, because it names the real risk — a company where one person is the only one who can do something.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a who-can-do-what page for your own team, with three people (35 words or more). Use the frame.'));
out.push(p('**WHO CAN DO WHAT**   **______________ (______________).** Good at: ______________; ______________. Not good at: ______________. **What they do about it:** ______________. **Learning:** ______________.   **______________ (______________).** Good at: ______________. Not good at: ______________, yet. **Learning:** ______________.   **______________ (______________).** Good at: ______________. Not good at: ______________. **Learning:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says every weakness gets a second half. The third person\'s does not — what do they do about it, or what would they need?"',
  'Quote, question, stop. And if there is genuinely nothing, that is the finding.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would each person sign their own line?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_good at_ + noun or -ing throughout', ''],
  ['Evidence after every strength', ''],
  ['A second half after every weakness', ''],
  ['Somebody who is the only one who can do something', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one entry. The class says whether that person would sign it. Where the answer is no, the entry needs a better second half, not a kinder first one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you are not good at, at work (60 to 100 words). Say what it is, how you know, what you do instead, and whether you would rather get better at it or keep the workaround.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the workaround_   ✓ _good at / bad at + noun or -ing?_   ? _would the workaround survive you leaving?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many of the workarounds exist only in that person\'s head? Those are the ones the company would lose on the day they leave.'));
out.push(box('Homework', ['Write your final text. Then ask one colleague what **you** are good at. Write their answer down in their words, even if you disagree with it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.6 =======================
out.push(pb());
out.push(h2('17.6  Could you show me how to do it?'));
out.push(p('**Function:** asking somebody to show you   ·   **Grammar:** _Could you show me how to…?_, sequencing what you were shown   ·   **Pronunciation:** asking for help without apologising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When did you last ask somebody at work to show you something? If it was a long time ago, why?'));
out.push(p('**b**  Which would you rather be asked? _I don\'t understand this. · Could you show me how to do it? · Sorry to bother you, it\'s probably obvious, but…_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does Hala ask?   **A** she apologises first   **B** she asks directly and says how long she needs   **C** she asks somebody else'));
out.push(p('**b**  Listen again. **1** What does Hala do **while** she is being shown? **2** What does Nadia ask her to do at the end, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.11  Ten minutes, not an hour', [
  ['Hala', 'Nadia, could you show me how to put a credit against an invoice? Ten minutes, any time before Thursday.'],
  ['Nadia', 'Now is fine. Sit here. Do not watch me — do it, and I will tell you when you are wrong.'],
  ['Hala', 'I am writing the steps as I go. One: find the invoice by number, not by name.'],
  ['Nadia', 'Why not by name?'],
  ['Hala', 'Because there are three Haddads. Two: open credits. Three: the amount goes in without the minus sign; the screen adds it.'],
  ['Nadia', 'That is the one that catches everybody.'],
  ['Hala', 'Four: save with the middle button. Five: check the statement, because the credit shows on the statement and not on the invoice.'],
  ['Nadia', 'Now do one more while I am here, and then read your five steps back to me. If they are right, put them in the folder — the next person will have them and neither of us will have to do this again.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Being shown something – the four moves**',
  table(['Move', 'What to say'], [
    ['**Ask directly, with a length**', '**Could you show me how to** …? **Ten minutes**, any time before Thursday.'],
    ['**Do it, do not watch**', 'May I do it while you watch?'],
    ['**Write the steps as you go**', 'One: … Two: … Three: …'],
    ['**Read them back and keep them**', 'Let me read the five steps back.'],
  ], [1.4, 2.6]),
  '⚠ **Do not apologise.** _Sorry to bother you, it is probably obvious_ makes the other person manage your embarrassment as well as teach you, and it makes a ten-minute favour feel like an imposition.',
  '⚠ **Say how long you need.** _Ten minutes_ gets a yes now; _could you show me the system_ gets a yes next week. Keep to the ten minutes, and people say yes the second time.',
  '⚠ **Writing the steps while you are shown is the whole technique.** It makes you do it rather than watch, it shows the person teaching you exactly where you went wrong, and it leaves a document behind.',
  '⚠ **Put the steps where the next person will find them.** The thing you were shown has now been written down once in the history of the company, and you are the one who did it.',
  '**Practise:** Ask to be shown each, with a length of time, then list the steps back. 1 a screen 2 a machine 3 a form 4 a route 5 something only one person knows',
  '**Useful phrases:**  Could you show me how to…?  ·  Ten minutes, any time before Thursday.  ·  Let me do it and tell me when I am wrong.  ·  Let me read the steps back.  ·  put them in the folder',
  '**Pronunciation – asking without apologising.** 🔊 **Track 17.12** Listen to the same request twice — once apologetic and rising, once level and short. Repeat the level one until it feels normal. It will feel rude at first and it is not.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks to be shown something; B shows it and makes A do it; A writes and reads back the steps. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, could you show me how to __________? __________ minutes, any time before __________.'],
  ['B', 'Now is fine. __________. Do not watch me — do it, and I will tell you when you are wrong.'],
  ['A', 'I am writing the steps as I go. One: __________.'],
  ['B', 'Why __________?'],
  ['A', 'Because __________. Two: __________. Three: __________.'],
  ['B', 'That is the one that catches everybody.'],
  ['A', 'Four: __________. Five: __________.'],
  ['B', 'Now do one more, and read your steps back. If they are right, __________.'],
]));
out.push(table(['Role card 1 — the goods-in screen', 'Role card 2 — the end-of-day cash'], [[
  'Five steps, one trap: the delivery number is on the note and not on the box, and entering the box code instead creates a second record that nobody can delete.',
  'Six steps, one trap: the float is counted out before the takings, not after, and the two numbers must be written in different columns or the morning count will be wrong.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class – **without the book**. The person being shown must read the steps back at the end.'));
out.push(p('**Listener task:** write the **trap** — the step that catches everybody. Every task in every workplace has one.'));
out.push(PHRASE_CARD(['Could you show me how to…?', 'Ten minutes, before Thursday.', 'Let me do it.', 'One… Two… Three…', 'read the steps back', 'the one that catches everybody']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **two** colleagues to show you something, for ten minutes each. Write the steps as you go, read them back, and keep them. Bring the written steps to the next lesson.'));
out.push(table(['What I asked to be shown', 'Who', 'Number of steps', 'The trap'], [['', '', '', ''], ['', '', '', '']], [1.6, 0.8, 0.9, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked _______ to show me _______. There were _______ steps. The one that catches everybody is _______._'));
out.push(p('**Listener task:** count how many of these step lists existed anywhere before today. The number is almost always zero, and it is the point of the cycle.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Can you show me how to doing it_ and _explain me_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the steps Hala wrote and put in the folder, and answer the questions.'));
out.push(box(null, [
  '**PUTTING A CREDIT AGAINST AN INVOICE — five steps**',
  '_Written by Hala, shown by Nadia, 14 November. If this is wrong, correct it and put your name on it._',
  '**1** Find the invoice **by number**, not by name. (There are three Haddads.)',
  '**2** Open **Credits** from the menu at the top, not the button on the invoice — the button makes a draft.',
  '**3** Enter the amount **without the minus sign.** The screen adds it. ⚠ **This is the one that catches everybody.**',
  '**4** Save with the **middle** button of the three.',
  '**5** Check the **statement**, not the invoice. The credit shows on the statement.',
  '_If the credit does not appear, do not do it again — look on the statement first. Two credits are much harder to remove than one._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who wrote it, who showed it, and when — and why does it say so?'));
out.push(item('2', 'Which step is marked as the trap, and how is it marked?'));
out.push(item('3', 'What does the last line prevent?'));
out.push(box('Writer\'s box', [
  '**A steps sheet — the shape:** a title with the number of steps → **who wrote it, who showed it, the date** → numbered steps, each one line → the **trap** marked → a last line about what to do when it goes wrong.',
  '**One line per step, and the reason in brackets.** _(There are three Haddads.)_ The reason is what stops the next person inventing their own, worse, method.',
  '**Mark the trap.** Every procedure has one step that catches everybody, and the person who has just learned it is the only one who still knows which. By next month you will have forgotten, which is why this is written **now**.',
  '⚠ The last line matters more than it looks: _do not do it again — look first_. The commonest way a small error becomes a large one is somebody repeating a step that did seem to work.',
  '⚠ _If this is wrong, correct it and put your name on it._ A procedure nobody is allowed to change is a procedure that goes out of date and is then ignored.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a steps sheet for something you have been shown (35 words or more). Use the frame.'));
out.push(p('**______________ — ______________ steps**   _Written by ______________, shown by ______________, ______________._   **1** ______________. (______________.)   **2** ______________, not ______________ — ______________.   **3** ______________. ⚠ **This is the one that catches everybody.**   **4** ______________.   **5** ______________.   _If ______________, do not ______________ — ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says mark the trap. Which of these five catches everybody? If none does, have you written the easy task instead of the one you needed shown?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could I do this from the sheet alone, tomorrow?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who wrote it, who showed it, the date', ''],
  ['One line per step, with the reason in brackets', ''],
  ['The trap marked', ''],
  ['A line about what to do when it goes wrong', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Swap sheets with another pair and try to follow one. The step where you stop is the step that needs rewriting, and nothing else teaches that as fast.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something at your work that only one person knows how to do (60 to 100 words). Say what it is, who knows it, what would happen if they were away for a month, and what it would take to write it down.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the risk in one sentence_   ✓ _could you ask to be shown?_   ? _how long would writing it down take?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Add up the hours it would take to write them all down. Compare that with one person being away for a month. Say both numbers out loud.'));
out.push(box('Homework', ['Write your final text. Then ask to be shown one of those things for ten minutes, write the steps, and put them where the next person will find them (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 17.7 =======================
out.push(pb());
out.push(h2('17.7  Review & Mediate: the course notice'));
out.push(p('**Function:** telling a colleague what a course notice says — and whether it is for them   ·   **Review:** would like to · timetables · need to · easy and hard · good at · being shown'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 17 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Why is _I\'d like to be able to…_ stronger than _I\'d like to do the course_?',
  '**2** What is the difference between _on Tuesday_ and _on Tuesdays_?',
  '**3** _You need ______ bring your badge._ · _The door needs ______._',
  '**4** Finish honestly: _It is easy once ______, and it is impossible for ______._',
  '**5** What are the four moves when somebody shows you something?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does Abu Yasser think the course is not for him?   **A** the fee   **B** the words on the notice   **C** the days'));
out.push(p('**b**  Listen again. **1** Which line stops him? **2** What does Nour say the course actually teaches?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 17.13  "Not a beginners\' course"', [
  ['Abu Yasser', 'The notice on the board. Stock control systems, two days. It says _for those already working at an intermediate level_. That is not me.'],
  ['Nour', 'Read me the session list.'],
  ['Abu Yasser', 'Counting methods and variance · cycle counting · reconciling the count to the record · reporting discrepancies.'],
  ['Nour', 'Abu Yasser, you have been doing the first and the last of those for thirty-one years. You invented the reporting here — there was no form until you made one.'],
  ['Abu Yasser', 'On paper. It says systems.'],
  ['Nour', 'It says systems because the room will have screens in it. The thing being taught is counting, and you are the person other people in that room will ask at the break.'],
  ['Abu Yasser', 'And _intermediate level_?'],
  ['Nour', 'It means not a beginner. It is there to stop somebody coming who has never counted anything. It is not there to stop you. The word that would stop you is not on the notice at all — it is in your head, and it is the word _systems_.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a course notice, where the words keep out the people it is for**',
  table(['To find the real content', 'To match the person', 'To name the real obstacle'], [
    ['Read me the session list.', 'You have been doing ___ for ___ years.', 'The word that would stop you is not on the notice.'],
    ['It says ___ because ___ ; the thing being taught is ___ .', 'You are the person others will ask at the break.', 'It is there to stop ___ , not to stop you.'],
  ], [1.8, 1.8, 1.8]),
  '⚠ **The session list is the course; the description is advertising.** Read the list first, always. Half the people who decide a course is not for them have read only the heading.',
  '⚠ **Translate the level words:** _beginners_ = has never done it · _intermediate_ = does it already, not confidently · _advanced_ = teaches others. They describe what you do, not what you were taught.',
  '⚠ **Name the real obstacle.** It is usually one word — _systems_, _advanced_, _certificate_ — and it is usually about what somebody thinks of themselves rather than what the course requires. Say that out loud, kindly, with the evidence underneath it.',
  '**Practise:** The notice says _for those already working at an intermediate level_ and lists four sessions. Explain it to somebody with thirty-one years of doing the work on paper.',
  '**Useful phrases:**  Read me the session list.  ·  The thing being taught is…  ·  It is there to stop…, not to stop you.  ·  the word is in your head  ·  the person others will ask at the break',
  '**Pronunciation – saying the uncomfortable sentence kindly.** 🔊 **Track 17.14** Listen: _it is in your head, and it is the word systems._ Flat, unhurried, no emphasis on _your_. Stressing _your_ turns it into an accusation. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a notice silently; B has decided it is not for them. A reads the session list, matches B to it, and names the real obstacle. Then swap.'));
out.push(table(['Notice 1 — for A', 'Notice 2 — for B'], [[
  '**CUSTOMER SERVICE IN ENGLISH.** _Ten evenings. For staff with a good working level of English._ Sessions: taking a complaint · apologising and offering · explaining a delay · following up in writing · telephone practice.  **B says:** my English is not good, it is just enough.',
  '**BASIC BOOKKEEPING.** _Six sessions. No previous experience required; certificate on completion._ Sessions: what the figures are for · recording money in and out · reading a statement · what an accountant needs from you.  **A says:** I have done the books for nine years, it would be a waste.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the one word on the notice that stopped the person, and the line in the session list that answered it.'));
out.push(PHRASE_CARD(['Read me the session list.', 'The thing being taught is…', 'not to stop you', 'you have been doing it for…', 'the word is in your head', 'ask you at the break']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a real course notice. Read it silently. Then explain to **two** colleagues what is actually taught, who it is for, and whether it is for them.'));
out.push(table(['Who I told', 'The word that stopped them', 'The session that answered it'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the notice you mediated. This is the **fifth** unit of Book 2, and the unwritten thing this time is the most human of them: a notice says who a course is for, and it never says who it is **not** meant to frighten away.'));
out.push(p('_It\'s a ______. The word that stopped them was ______. The session list says ______. They have been doing ______ for ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _enrol · session · module · refresher · syllabus · competent_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _The course runs for three weeks, on Tuesdays and Thursdays._   **A** Three weeks, twice a week. **B** Three weeks, every day. **C** Two weeks, three times a week.',
  '**2**  _Enrolment closes 18 February; the course begins 4 March._   **A** You can enrol on 4 March. **B** You must enrol by 18 February. **C** The course ends on 18 February.',
  '**3**  _Not a beginners\' course._   **A** You need some experience already. **B** Beginners only. **C** Anybody may come.',
  '**4**  _You do not need a laptop; handouts are provided._   **A** Bring a laptop. **B** Bring nothing but yourself. **C** No laptop needed, and papers are given out.',
  '**5**  _One session may be made up with a later group; the test must be taken with your own group._   **A** You may miss the test. **B** You may miss one evening but not the test. **C** You may miss nothing.',
  '**6**  _Could you show me how to do it? Ten minutes, any time before Thursday._   **A** A request with a time limit. **B** A complaint. **C** An offer to teach.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about training, the three points are usually: **what the course is and when** · **why it is useful to the reader** · **what they need to do, and by when**.',
  '⚠ The third point carries the date, and it is the **enrolment** date, not the start date. Every real course has two and the message must use the earlier one.',
  '⚠ Use the notice\'s own words for the sessions. The reader is deciding whether it is for them, and the words they will match against are the ones on the notice.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** A colleague would be good at a course you have seen. Write them a message (25 words or more). Say **what it is and when**, **why it is for them**, and **what they must do and by when**.'));
out.push(p('Hi ______________, there is ______________ on ______________. The sessions include ______________, which you ______________. You need to ______________ by ______________. ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it is, and when it runs', ''],
  ['Why it is for this person, with evidence', ''],
  ['The enrolment date, not the start date', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a course or a piece of training you would send somebody else on (60 to 100 words). Say who, what, why them, and what you think would change at work if they went.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then tell that person. Write down what they said, especially if the first thing they said was that it is not for them (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 17 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I would like ___ the accounts system.   a) learn   b) to learn   c) learning',
  '2  The course runs ___ three weeks.   a) during   b) for   c) since',
  '3  It is on Tuesdays ___ five to seven.   a) from   b) at   c) in',
  '4  You need ___ your badge.   a) bring   b) to bring   c) bringing',
  '5  The door needs ___ .   a) fixing   b) to fix   c) fix',
  '6  It is easy ___ once you have done it twice.   a) using   b) to use   c) for use',
  '7  She is good ___ talking to customers.   a) in   b) on   c) at',
  '8  Could you show me how ___ it?   a) to do   b) doing   c) do',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 17.15** Listen to a course being described on the telephone. Complete the note.   How long: ______   Days: ______   Time: ______   Sessions: ______   Starts: ______'));
out.push(dlg('Track 17.15  Audio script (read after the check)', [
  ['Woman', 'It runs for three weeks, on Tuesdays and Thursdays, from five to seven in the evening. Six sessions in all. It starts on the fourth of March.'],
  ['Woman', 'The fee is four hundred and twenty thousand including the handouts, and enrolment closes a fortnight before it begins.'],
  ['Woman', 'The test is on the last evening, and you must take it with your own group.'],
]));
out.push(p('**C  Writing.** Write a request to learn something at work (35+ words): the ability you want, what not having it costs, and two ways of getting it.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 17)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask to be **able to do** something, not just to attend something',
  '☐ give the cost of not being trained, with a number',
  '☐ say and write a timetable so that somebody can write it down',
  '☐ say what somebody needs, what they do not need, and who to tell',
  '☐ say that something is easy or hard — for whom, after how long, and why',
  '☐ name what I am good at with evidence, and what I am not with a workaround',
  '☐ ask to be shown something in ten minutes, write the steps, and leave them for the next person',
  '☐ tell a colleague whether a course notice is really for them',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 17 · Student\'s Book');
