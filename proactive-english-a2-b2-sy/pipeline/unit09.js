// Proactive English A2 · Syria Edition · Book 1 · Unit 9 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 9  Work & Study'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**9.1**  describe what you have to do in your job or studies',
  '**9.2**  explain the rules of a workplace',
  '**9.3**  ask for permission at work',
  '**9.4**  talk about your skills and experience',
  '**9.5**  take and leave phone messages',
  '**9.6**  write polite requests to colleagues',
  '**9.7**  Review & Mediate: pass on a phone message',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**TechCare** – Omar\'s IT company in Al-Hamra Street (manager: **Mr Fouad**).',
  '**Medica Trading** – Lina\'s company in Mezzeh (manager: **Mr Khaled**; her colleague: **Rana**).',
  '**Nour** – a new trainee at TechCare, in her first week.',
], C.lyellow, C.orange));

// ======================= 9.1 =======================
out.push(pb());
out.push(h2('9.1  I have to check the machines'));
out.push(p('**Function:** describing job duties   ·   **Grammar:** _have to / has to_   ·   **Pronunciation:** _have to_ /hæftə/, _has to_ /hæstə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you do every day at work or at college? What is the first thing you do? Your teacher writes the class\'s ideas on the board.'));
out.push(board('I have to check my emails first.', 'I\'m responsible for the stock.'));
out.push(p('**b**  Which jobs? Who has to: _wear a uniform · work at night · use a computer all day · talk to customers · carry heavy things_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Nour?   **A** a customer   **B** a new trainee   **C** the manager'));
out.push(p('**b**  Listen again. **1** What does Omar have to do every morning?   **2** What doesn\'t Nour have to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.1  First day at TechCare', [
  ['Omar', 'Welcome, Nour! Let me explain the work. Every morning I have to check the machines in the workshop – which ones are ready, which ones are waiting for parts.'],
  ['Nour', 'Do I have to do that too?'],
  ['Omar', 'No, you don\'t. In your first month you\'re responsible for the small repairs: phones, chargers, keyboards.'],
  ['Nour', 'OK. And the customers?'],
  ['Omar', 'Rami on the desk talks to them. But you have to write a note for every repair – what the problem is, what you did, and how long it took.'],
  ['Nour', 'Every repair? Even a charger?'],
  ['Omar', 'Even a charger. Mr Fouad reads all the notes on Thursday.'],
  ['Nour', 'And what time do I have to start?'],
  ['Omar', 'We open at half past eight, but the technicians have to be here at eight – we prepare the machines first.'],
  ['Nour', 'Do I have to work on Saturdays?'],
  ['Omar', 'Only one Saturday a month. And you don\'t have to come on Fridays – nobody does!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – have to / has to (something is necessary)**',
  table(['+', '–', '?'], [
    ['I / you / we / they **have to** write a note.', 'I **don\'t have to** work on Fridays.\n(= it isn\'t necessary – I can if I want)', '**Do** you **have to** work on Saturdays?\n– Yes, I do. / No, I don\'t.'],
    ['He / she **has to** be here at eight.', 'She **doesn\'t have to** wear a uniform.', '**Does** he **have to** start at eight?\n– Yes, he does. / No, he doesn\'t.'],
  ], [1.2, 1.3, 1.3]),
  '**have to** + **base verb**: _I have to **check**…_, not ~~have to checking~~, not ~~have to checks~~.',
  '⚠ **don\'t have to** = it isn\'t necessary (you can choose).  It is **not** the same as **mustn\'t** = don\'t do it! (see 9.2)',
  '**Job words:** be responsible for · check · prepare · repair · write a report / a note · deal with customers · work shifts',
  '**Practise:** Complete with the correct form of _have to_.  1 She ______ wear a uniform in the hospital.  2 I ______ (–) work on Fridays.  3 ______ you ______ travel for your job?  4 He ______ be at the site at seven.  5 We ______ (–) pay for the training – the company pays.',
  '**Useful phrases:** Let me explain the work. · You\'re responsible for… · Even a charger? · Nobody does!',
  '**Pronunciation.** 🔊 **Track 9.2** _have to_ = /hæftə/ (with an **f** sound!) · _has to_ = /hæstə/ (with an **s** sound). _I have to check._ · _She has to start at eight._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the experienced worker, B is new. Explain the job on the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Welcome! Let me explain the work. Every morning I have to __________.'],
  ['B', 'Do I have to do that too?'],
  ['A', 'No, you don\'t. You\'re responsible for __________.'],
  ['B', 'OK. And __________?'],
  ['A', '__________ does that. But you have to __________.'],
  ['B', 'What time do I have to start?'],
  ['A', 'We open at __________, but you have to be here at __________.'],
  ['B', 'Do I have to work __________?'],
  ['A', 'Yes, you do. / No, you don\'t.'],
]));
out.push(table(['Job card A – a pharmacy', 'Job card B – a hotel reception'], [[
  'morning: check the fridge temperature · new person: the shelves and the prices · the pharmacist talks to patients · write the delivery book every day · open 8.00, staff 7.45 · Saturdays yes, Fridays afternoon only',
  'morning: read the night book · new person: the keys and the breakfast list · the manager deals with problems · wear a uniform · open 24 hours, shifts 7–3, 3–11, 11–7 · one weekend a month free']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **two** things the new person has to do and **one** thing they don\'t have to do.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about **your real job or studies**: what do you have to do every day? What do you have to do once a week or once a month? What **don\'t** you have to do (lucky you!)? Your partner asks **three** questions. Then swap and change partners.'));
out.push(table(['Every day', 'Every week', 'Every month', 'I don\'t have to…'], [['', '', '', '']], [1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s work:  _Rasha has to prepare her lessons every evening and she has to write reports every month. She has to be at school at half past seven. She doesn\'t have to wear a uniform, but she has to wear something smart._'));
out.push(p('**Listener task:** whose job has the most duties? Who starts the earliest?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the job description from the TechCare file. Answer the questions.'));
out.push(model([
  '**TECHCARE – JOB DESCRIPTION**   **Position:** Junior Technician   **Reports to:** Omar Darwish',
  '**Main duties**',
  'The junior technician is responsible for small repairs: phones, chargers, keyboards and cables. He or she has to write a repair note for every job, with the problem, the solution and the time.',
  'The junior technician also has to keep the workshop clean and check the small parts box every Thursday.',
  '**Hours**',
  'Technicians have to be in the workshop at 8.00, thirty minutes before we open. The junior technician has to work one Saturday a month. Nobody works on Fridays.',
  '**Not part of this job**',
  'The junior technician doesn\'t have to deal with customers at the desk, and doesn\'t have to answer the company phone.',
]));
out.push(item('1', 'What must be in every repair note?'));
out.push(item('2', 'What happens every Thursday?'));
out.push(item('3', 'Name two things this person doesn\'t have to do.'));
out.push(writers([
  'A job description: **position + who you report to** → **main duties** (_is responsible for… has to…_) → **hours** → **not part of this job** (_doesn\'t have to…_).',
  'Write about the position, not a person: _The junior technician **has to**…_ (he / she + -s!).',
  'The "not part of this job" section stops arguments later – always include it!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – JOB DESCRIPTION**   **Position:** ______________   **Reports to:** ______________   **Main duties:** The ______________ is responsible for ______________. He or she has to ______________. He or she also has to ______________.   **Hours:** ______________.   **Not part of this job:** The ______________ doesn\'t have to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_has to_ + base verb (he / she!)', '_doesn\'t have to_ for the things that aren\'t necessary', 'All parts: position, duties, hours, not part of the job']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one duty before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a job description for **your own job**, a job you know, or a job you would like (60 words or more). Include at least **four** duties and **two** things the person doesn\'t have to do.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s description as **someone applying for the job**. ★ _This sounds interesting!_  ✓ _Can you add the salary?_  ? _Do I have to…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two descriptions are read aloud. Which job does the class want? Which has the hardest hours?'));
out.push(hw('Write a short email to apply for your partner\'s job (30+ words): say why you want it and ask **one** question about the duties.'));

// ======================= 9.2 =======================
out.push(pb());
out.push(h2('9.2  You mustn\'t use that door'));
out.push(p('**Function:** explaining rules   ·   **Grammar:** _must / mustn\'t / don\'t have to_   ·   **Pronunciation:** _mustn\'t_ /ˈmʌsnt/ (silent t!)'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What rules are there at your work, your college or your building? Which rule is the most annoying? Make a class list.'));
out.push(board('You mustn\'t smoke in the building.', 'Staff must wear ID badges.'));
out.push(p('**b**  Necessary, forbidden or free? _wear a seat belt · park in front of the gate · come to the meeting · bring your own lunch_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour do wrong?   **A** she arrives late   **B** she uses the wrong door   **C** she breaks a machine'));
out.push(p('**b**  Listen again. **1** Why is that door a problem?   **2** What must she do with her badge?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.3  The rules at TechCare', [
  ['Mr Fouad', 'Nour! Not that door, please.'],
  ['Nour', 'Oh! I\'m sorry. Is it broken?'],
  ['Mr Fouad', 'No, but you mustn\'t use the back door. It\'s the emergency exit – it has to stay closed. Everyone comes in through reception.'],
  ['Nour', 'I understand. Sorry, it\'s my second day.'],
  ['Mr Fouad', 'Don\'t worry. Let me tell you the important rules. First, you must wear your badge – always, even in the workshop.'],
  ['Nour', 'It\'s here, in my bag…'],
  ['Mr Fouad', 'In your bag is not on your shirt! Second, you mustn\'t take customers\' machines out of the building. Never – not even to help a friend.'],
  ['Nour', 'Of course not.'],
  ['Mr Fouad', 'Third, you must write your name in the parts book when you take something from the box.'],
  ['Nour', 'And the kitchen? Do I have to bring my own lunch?'],
  ['Mr Fouad', 'No, you don\'t have to – there\'s a restaurant next door. But you mustn\'t eat near the machines. That one is serious.'],
  ['Nour', 'Badge on, back door no, machines stay here, name in the book, no food in the workshop. Did I forget anything?'],
  ['Mr Fouad', 'No! And welcome to TechCare.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – must / mustn\'t / don\'t have to**',
  table(['Form', 'Meaning', 'Example'], [
    ['**must** + base verb', 'It\'s necessary. Do it!', 'You **must wear** your badge.'],
    ['**mustn\'t** + base verb', 'It\'s forbidden. Don\'t do it!', 'You **mustn\'t use** the back door.'],
    ['**don\'t have to** + base verb', 'It isn\'t necessary. You can choose.', 'You **don\'t have to bring** lunch.'],
  ], [1.2, 1.3, 1.4]),
  '⚠ **The big difference:**  _You **mustn\'t** take the machines home._ (forbidden!)  ≠  _You **don\'t have to** bring lunch._ (it\'s your choice)',
  '**must** has no -s and no _do_: _He **must** wear it._ · _**Must** I wear it?_ (or more usually: _Do I **have to** wear it?_)',
  'In writing, rules often use **must** and **mustn\'t**. When we speak, we often use **have to** and **can\'t**.',
  '**Practise:** _mustn\'t_ or _don\'t have to_?  1 You ______ smoke here – it\'s a hospital.  2 You ______ come on Friday; the office is closed.  3 You ______ tell anybody the password.  4 You ______ wear a tie, but you can if you want.  5 Visitors ______ enter the workshop.',
  '**Useful phrases:** Let me tell you the important rules. · First,… Second,… Third,… · Of course not. · That one is serious. · Did I forget anything?',
  '**Pronunciation.** 🔊 **Track 9.4** _mustn\'t_ = /ˈmʌsnt/ – **don\'t say the first t**: _mus-nt_. Compare: _You must **wear** it._ /məst/ (weak) and _You **mustn\'t**._ (strong). Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A explains the rules on the card to B, who is new. B asks **two** questions and repeats the rules at the end. Then swap.'));
out.push(dlg(null, [
  ['A', 'Let me tell you the important rules. First, you must __________.'],
  ['B', 'OK. And __________?'],
  ['A', 'You mustn\'t __________. Never.'],
  ['B', 'Do I have to __________?'],
  ['A', 'No, you don\'t have to. But you mustn\'t __________.'],
  ['B', 'So: __________, __________, __________. Did I forget anything?'],
]));
out.push(table(['Rules card A – a laboratory', 'Rules card B – a children\'s nursery'], [[
  'must: wear a white coat and glasses · mustn\'t: eat or drink inside, touch other people\'s samples · don\'t have to: work after 4',
  'must: wash your hands when you arrive, sign the children in and out · mustn\'t: take photos of the children, give any food without asking · don\'t have to: wear a uniform']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write one **must**, one **mustn\'t** and one **don\'t have to** rule you hear.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Explain the **real rules** of your workplace, college or building to your partner. Give at least **two** things people must do, **two** things they mustn\'t do and **one** thing they don\'t have to do.'));
out.push(p('**b**  Now discuss: which of your partner\'s rules is the most sensible? Which rule would you change?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s rules:  _At Fadi\'s workshop everybody must wear boots, and they mustn\'t use the machines alone. They don\'t have to wear a uniform. Fadi says the best rule is "no phones near the machines" – he saw an accident last year._'));
out.push(p('**Listener task:** which place has the strictest rules? Which rule would you change?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page from the TechCare staff handbook. Answer the questions.'));
out.push(model([
  '**TECHCARE – STAFF RULES**',
  '**1 Badges.** All staff must wear their badge during working hours, in the office and in the workshop.',
  '**2 Doors.** Everyone must enter through reception. Staff mustn\'t use the back door; it is an emergency exit and must stay closed.',
  '**3 Customers\' machines.** Machines mustn\'t leave the building for any reason. If a repair needs a special part, tell your manager.',
  '**4 Parts.** You must write your name and the date in the parts book when you take anything from the box.',
  '**5 Food.** You mustn\'t eat or drink near the machines. Please use the kitchen. You don\'t have to bring lunch – there is a restaurant next door.',
  '**6 Phones.** Personal phones must be on silent in the workshop. You don\'t have to leave them at reception, but please don\'t answer calls while you are repairing.',
  'Thank you for helping us work safely. – Fouad Al-Saleh, Manager',
]));
out.push(item('1', 'Where must staff wear their badge?'));
out.push(item('2', 'What must you do before you take a part from the box?'));
out.push(item('3', 'What is the rule about personal phones?'));
out.push(writers([
  'Written rules: **numbered sections with a short title** (Badges, Doors, Food…) → the rule with **must / mustn\'t** → sometimes **a reason** or **what to do instead**.',
  'Add **Please…** and a **thank-you line** at the end so the rules don\'t sound angry.',
  'Give the **reason** for the strange rules: _it is an emergency exit_. People follow rules they understand.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – RULES**   **1 ______________.** All ______________ must ______________.   **2 ______________.** You mustn\'t ______________, because ______________.   **3 ______________.** You must ______________.   **4 ______________.** You don\'t have to ______________, but please ______________.   Thank you for ______________. – ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'must / mustn\'t / don\'t have to + base verb', 'A reason for at least one rule', 'Numbered sections with titles + a friendly ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one rule before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the rules for a **real place**: your workplace, a shared flat, a computer room, a family car, a children\'s playroom (60 words or more). Write **five** numbered rules with at least one reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s rules as a **new person there**. ★ _Clear and fair!_  ✓ _Can you add why for rule 3?_  ? _What happens if I forget?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the rules on the wall. Which place would you like to work in? Which rule is the funniest?'));
out.push(hw('Write a short message to your partner (25+ words): say which rule you don\'t understand, and suggest **one** new rule for their place.'));

// ======================= 9.3 =======================
out.push(pb());
out.push(h2('9.3  Is it OK if I leave early?'));
out.push(p('**Function:** asking for permission   ·   **Grammar:** _Can I…? Could I…? Is it OK if I…?_   ·   **Pronunciation:** polite, rising then falling intonation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you ask your manager or teacher for? (leave early, take a day off, change a shift, use a room…) What do they answer?'));
out.push(board('Could I leave early today?', 'Dear Mr Khaled, I would like to ask…'));
out.push(p('**b**  Order them from least polite to most polite: _I\'m leaving early. · Can I leave early? · Could I possibly leave early? · Is it OK if I leave early?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina ask for?   **A** a day off   **B** to leave early   **C** a different desk'));
out.push(p('**b**  Listen again. **1** Why does she need it?   **2** What does she offer to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.5  In Mr Khaled\'s office', [
  ['Lina', 'Mr Khaled, have you got a minute?'],
  ['Mr Khaled', 'Yes, Lina, come in. What is it?'],
  ['Lina', 'Is it OK if I leave at three on Thursday? My niece has a small operation and I\'d like to be at the hospital with my brother.'],
  ['Mr Khaled', 'Of course. I hope everything goes well. Is it serious?'],
  ['Lina', 'No, thank you – it\'s small, but she\'s only three.'],
  ['Mr Khaled', 'Then of course you must go. What about the supplier report?'],
  ['Lina', 'I\'ll finish it on Wednesday evening, and Rana has all the files if anybody needs them.'],
  ['Mr Khaled', 'Perfect. And could you tell Rana about the Thursday call too?'],
  ['Lina', 'Yes, of course. One more thing – could I possibly take Friday morning as well, if the operation is late?'],
  ['Mr Khaled', 'Friday isn\'t a working day, Lina.'],
  ['Lina', '(laughs) Of course. I\'m tired already!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking for permission**',
  table(['Less formal', 'More polite', 'Most polite / a big request'], [
    ['**Can I** leave early?', '**Could I** leave early? · **Is it OK if I** leave early?', '**Could I possibly** take Friday off? · **Would it be possible to** change my shift?']], [1, 1.4, 1.4]),
  '**Is it OK if I** + **present simple**: _Is it OK if I **leave** at three?_  ·  **Could I** + **base verb**: _Could I **take** Thursday off?_',
  '**Answers:** 😀 Of course. · Yes, that\'s fine. · No problem.   🙁 I\'m afraid not. · Sorry, not this week – we have the audit. · Can we talk about it tomorrow?',
  '**Good manners at work:** give a **reason**, and say **how you will solve the problem**: _I\'ll finish the report on Wednesday · Rana has all the files._',
  '**Practise:** Make polite requests.  1 (leave at four today / dentist)  2 (take Monday off / family wedding)  3 (change my shift with Fadi / exam)  4 (use the meeting room at two / online interview)',
  '**Useful phrases:** Have you got a minute? · What is it? · I hope everything goes well. · One more thing… · Of course you must go.',
  '**Pronunciation.** 🔊 **Track 9.6** Permission questions go **up** then **down**: _Is it OK if I leave at three?_ ↗↘  A flat voice sounds like you are telling, not asking! Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the manager (B) for the things on the card. **Always give a reason and a solution.** B says yes to one and no to one. Then swap.'));
out.push(dlg(null, [
  ['A', '__________, have you got a minute?'],
  ['B', 'Yes, come in. What is it?'],
  ['A', 'Is it OK if I __________? __________.'],
  ['B', 'Of course. / I\'m afraid not this week, because __________.'],
  ['A', 'I\'ll __________, and __________ has everything if anybody needs it.'],
  ['B', 'Perfect. / Then let\'s say __________ instead.'],
  ['A', 'Thank you very much.'],
]));
out.push(table(['Requests card A', 'Requests card B'], [[
  'leave at 2 on Sunday (your son starts school) · take a week off in December (your brother is coming from abroad)',
  'change your Saturday shift with a colleague (an exam) · work from home on Wednesday (the plumber is coming)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** did the person give a **reason** and a **solution**? Did the manager say yes or no?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three real things** you would like to ask your manager, your teacher or your family for. Ask your partner (they are the manager / teacher / parent). They must say **yes** to one, **no** to one, and **"let\'s talk about it"** to one – with reasons. Then swap.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba asked me for three days off in December to visit her sister in Beirut. I said yes, because she finished the project early. She also asked to change her Tuesday class, but I said no – the room isn\'t free._'));
out.push(p('**Listener task:** who asked the most politely? Whose reason was the strongest?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s email to her manager. Answer the questions.'));
out.push(model([
  '**To:** k.ahmad@medicatrading.sy   **Subject:** Request – leaving early on Thursday 23rd',
  'Dear Mr Khaled,',
  'I am writing to ask if I could leave the office at 3 pm on Thursday 23 October. My niece has a small operation that afternoon and I would like to be at the hospital with my family.',
  'I will finish the supplier report on Wednesday evening and send it to you before I leave. Rana has all the files, and she can join the call with the Turkish supplier at 4 pm.',
  'If Thursday is difficult, I could work on Saturday morning instead.',
  'Thank you very much for considering my request.',
  'Best regards,',
  'Lina Haddad · Accounts · Medica Trading',
]));
out.push(item('1', 'What exactly is Lina asking for?'));
out.push(item('2', 'What three things has she organised?'));
out.push(item('3', 'What does she offer if the answer is no?'));
out.push(writers([
  'A request email: **a clear subject line** (Request – what, when) → _Dear Mr / Ms + family name,_ → **the request** (_I am writing to ask if I could…_) → **the reason** → **how you solved the problem** → **an alternative** → **thank you** → _Best regards,_ → name + department.',
  'Work emails are **more formal** than messages: write _I am_, _I will_, _I would like_ – not _I\'m_, _I\'ll_, _I\'d_.',
  'Never ask without offering a **solution**. That is the difference between a good request and a problem for your manager.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Subject:** Request – ______________   Dear ______________,   I am writing to ask if I could ______________ on ______________. ______________.   I will ______________ before I leave. ______________ has ______________ and ______________.   If ______________ is difficult, I could ______________ instead.   Thank you very much for considering my request.   Best regards,   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Formal forms (I am / I will / I would like)', 'A clear subject line with the date', 'All parts: request, reason, solution, alternative, thanks']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your request sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a **real** request email to a manager, a teacher or an office (60 words or more): time off, a change of shift, a day to study, working from home, a different class time.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s email as the **manager**. ★ _Well organised!_  ✓ _Can you add who will cover your work?_  ? _Can you do it another day?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two emails are read aloud. The class decides: would the manager say yes?'));
out.push(hw('Write the **manager\'s reply** to your partner\'s email (30+ words): say yes, no or "yes, but…", give a reason, and say what the person must do before they go.'));

// ======================= 9.4 =======================
out.push(pb());
out.push(h2('9.4  I can use Excel and I worked as a cashier'));
out.push(p('**Function:** talking about skills and experience   ·   **Grammar:** _can_ + past simple (recycle)   ·   **Pronunciation:** word stress in long words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What skills do employers want? (languages, computers, driving, working with people…) Which do you have? Make a class list.'));
out.push(board('I can use Excel quite well.', 'Skills: Arabic, English, Excel, driving licence'));
out.push(p('**b**  Skill or experience? _I worked in a hotel for two years. · I can type fast. · I studied accounting. · I speak three languages._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What job is Nour applying for?   **A** a permanent job at TechCare   **B** a job at a hotel   **C** a university place'));
out.push(p('**b**  Listen again. **1** What did she do before TechCare?   **2** What can\'t she do yet?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.7  The interview', [
  ['Mr Fouad', 'So, Nour, your training finishes next month. Tell me about your experience before TechCare.'],
  ['Nour', 'I studied IT at the institute for two years and I finished in June. Before that, I worked in my uncle\'s phone shop for three summers.'],
  ['Mr Fouad', 'What did you do there?'],
  ['Nour', 'I sold phones and accessories, and I changed screens and batteries. I learned a lot about customers – some of them were… difficult!'],
  ['Mr Fouad', 'Ha! And your computer skills?'],
  ['Nour', 'I can repair hardware quite well, and I can install Windows and Linux. I can use Excel for the parts lists, but I\'m not very good at it yet.'],
  ['Mr Fouad', 'And English? Our manuals are in English.'],
  ['Nour', 'I can read technical English quite well. Speaking is harder – but I started classes at Al-Yasmin in September.'],
  ['Mr Fouad', 'Good. One last question: what can you do that your colleagues can\'t?'],
  ['Nour', 'I think… I listen. People explain their problem badly, and I ask questions until I understand. My uncle taught me that.'],
  ['Mr Fouad', 'That\'s a very good answer.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Talking about skills and experience**',
  table(['Skills now (can)', 'Experience (past simple)', 'Level'], [
    ['I **can** use Excel. · I **can** drive. · I **can** read technical English.',
     'I **worked** in a shop for three summers. · I **studied** IT for two years. · I **learned** a lot about customers.',
     'quite well · very well · not very well · I\'m not very good at it **yet** · Speaking is harder.']], [1.2, 1.4, 1.2]),
  '**for** + a period: _for two years · for three summers_   **in** + year: _in June_',
  '**Be honest and positive:** _I\'m not very good at it **yet**, but I **started** a course._ – this is much better than "I can\'t".',
  '**Useful interview questions:** Tell me about your experience. · What did you do there? · What are your computer skills? · What can you do that others can\'t?',
  '**Practise:** _can_ or past simple?  1 I ______ (work) in a hotel last summer.  2 I ______ (use) Photoshop quite well.  3 She ______ (study) at the institute for two years.  4 He ______ (drive), but he hasn\'t got a car.  5 We ______ (learn) a lot in that job.',
  '**Pronunciation.** 🔊 **Track 9.8** Stress in long words: ex**PE**rience · **TECH**nical · com**PU**ter · ac**COUNT**ing · uni**VER**sity · **IN**terview · qualifi**CA**tions. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the interviewer, B is the candidate on the card. Ask about experience, skills and languages. Then swap.'));
out.push(dlg(null, [
  ['A', 'Tell me about your experience.'],
  ['B', 'I studied __________ and I finished in __________. Before that, I worked __________ for __________.'],
  ['A', 'What did you do there?'],
  ['B', 'I __________ and I __________. I learned __________.'],
  ['A', 'And your skills?'],
  ['B', 'I can __________ quite well. I can __________, but I\'m not very good at it yet.'],
  ['A', 'What can you do that others can\'t?'],
  ['B', 'I think… __________.'],
]));
out.push(table(['Candidate card A – hotel receptionist', 'Candidate card B – primary teacher'], [[
  'studied tourism 2 years · worked in a travel agency 1 year · can use booking systems, speak English and some Russian · not good at complaints yet · special: remembers every face',
  'studied education 4 years · taught in a village school 3 years · can teach reading, can make materials from nothing · not good at computers yet · special: very patient with difficult children']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **two** skills and **one** piece of experience. Would you give this person the job?'));
out.push(stage('4', 'Your turn – the mini interview', 9));
out.push(p('**a**  Write your own answers: your studies · your work experience (any work – including at home or helping family) · three things you can do · one thing you can\'t do **yet** · one special thing about you.'));
out.push(p('**b**  Interview your partner for a job they really want. Ask **six** questions. Then swap. Then change partners and do it again – faster and more confidently!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner:  _Tareq studied economics and he worked at a bank for five years. He can use all the bank systems and he can explain difficult things simply. He isn\'t very good at presentations yet, but he started an English course. His special thing: customers always ask for him._'));
out.push(p('**Listener task:** who would you employ? Why?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Nour\'s skills profile. Answer the questions.'));
out.push(model([
  '**NOUR ABBAS**  ·  Junior IT Technician  ·  Damascus  ·  0956 441 207  ·  nour.abbas@mail.sy',
  '**Profile**',
  'IT technician with practical experience in hardware repair and customer service. I finished my IT diploma in June and I am now training at TechCare.',
  '**Experience**',
  '2026 (June–now) · TechCare, Damascus · Trainee technician: small repairs (phones, chargers, keyboards), repair notes, parts box.',
  '2023–2025 (summers) · Abbas Phones, Damascus · Shop assistant: sold phones and accessories, changed screens and batteries, dealt with customers.',
  '**Education**',
  '2024–2026 · Diploma in Information Technology, Technical Institute, Damascus.',
  '**Skills**',
  'Hardware repair (very good) · Windows and Linux installation (good) · Excel (basic, improving) · Arabic (mother tongue) · English (reading good, speaking improving – classes at Al-Yasmin since September).',
]));
out.push(item('1', 'When did Nour finish her diploma?'));
out.push(item('2', 'What did she do at Abbas Phones?'));
out.push(item('3', 'How does she describe her English?'));
out.push(writers([
  'A skills profile / CV: **name + job title + contacts** → **profile** (two sentences: who you are now) → **experience** (newest first! dates · place · what you did) → **education** → **skills** with honest levels.',
  'In the experience list, start with a **past verb**: _sold, changed, dealt with, repaired_. No "I" – the list style is enough.',
  'Give **honest levels**: very good · good · basic, improving. Everybody writes "excellent" – honesty is more believable.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________**  ·  ______________  ·  ______________  ·  ______________   **Profile:** ______________ with experience in ______________. I ______________ and I am now ______________.   **Experience:** ______ · ______________ · ______________: ______________, ______________.   **Education:** ______ · ______________.   **Skills:** ______________ (______) · ______________ (______) · Arabic (mother tongue) · English (______).'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (names, places, months) and full stops', 'Past verbs in the experience list (sold, worked, taught)', 'Newest experience first, with dates', 'Honest skill levels']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one experience line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **your own** skills profile (60 words or more). Include all four sections. Count **any** experience: family business, volunteering, helping at home, a course project.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s profile as an **employer**. ★ _I would call this person!_  ✓ _Can you add what you did at…?_  ? _How good is your English, really?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Keep your profile – you can use it for a real job! Two profiles are read aloud. Which one is the clearest?'));
out.push(hw('Write a short covering message for your profile (30+ words): _I am writing to apply for the position of… I am interested because… My profile is attached._'));

// ======================= 9.5 =======================
out.push(pb());
out.push(h2('9.5  Can I take a message?'));
out.push(p('**Function:** phone messages   ·   **Grammar:** _I\'ll_ for instant decisions; _Could you tell him…?_   ·   **Pronunciation:** spelling names and saying numbers slowly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say when you answer the phone at work? What do you say when the person isn\'t there? Make two lists.'));
out.push(board('Can I take a message?', 'Mr Chen called at 10.15.'));
out.push(p('**b**  Match: _Who\'s calling, please? · Hold on, please. · I\'m afraid he\'s in a meeting. · Could you spell that? · I\'ll give him the message._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who does the caller want?   **A** Lina   **B** Mr Khaled   **C** Rana'));
out.push(p('**b**  Listen again. **1** Why can\'t he speak to Mr Khaled?   **2** What does the caller want him to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.9  A call for Mr Khaled', [
  ['Lina', 'Good morning, Medica Trading.'],
  ['Caller', 'Good morning. Could I speak to Mr Khaled Ahmad, please?'],
  ['Lina', 'I\'m afraid he\'s in a meeting until twelve. Who\'s calling, please?'],
  ['Caller', 'This is Yusuf Haddadin from Delta Medical in Amman.'],
  ['Lina', 'Sorry, could you spell your family name?'],
  ['Caller', 'H-A-D-D-A-D-I-N. Haddadin.'],
  ['Lina', 'Thank you. Can I take a message?'],
  ['Caller', 'Yes, please. It\'s about the order of December. We can\'t send the full quantity this month – only half. I need to know if that\'s OK, or if he prefers to wait until January.'],
  ['Lina', 'I see. So: half the quantity this month, or everything in January.'],
  ['Caller', 'Exactly. Could you ask him to call me back today? It\'s a little urgent.'],
  ['Lina', 'Of course. What\'s your number?'],
  ['Caller', 'Zero-zero-nine-six-two, seven-nine-five, four-one-two, eight-double-three.'],
  ['Lina', 'Let me read that back: 00962 795 412 833.'],
  ['Caller', 'That\'s right. Thank you very much.'],
  ['Lina', 'You\'re welcome. I\'ll give him the message as soon as he finishes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**On the phone at work**',
  table(['Answering', 'The person isn\'t free', 'Taking the message'], [
    ['Good morning, **[company]**. · How can I help you?',
     'I\'m afraid he **\'s** in a meeting / **isn\'t** in the office today. · He\'ll be back at…',
     'Who\'s calling, please? · Could you spell that? · Can I take a message? · What\'s your number? · Let me read that back. · **I\'ll** give him the message.']], [1, 1.2, 1.5]),
  '**I\'ll** (= I will) for a decision **now**: _**I\'ll** give him the message. · **I\'ll** call you back. · **I\'ll** tell her._',
  '**Asking for action:** Could you **ask him to call me back**? · Could you **tell her** the meeting is at three? · Please ask him to **send** the file.',
  '**Numbers on the phone:** 0 = "zero" or "oh" · 33 = "double three" · say the number in **small groups**: 0944 – 318 – 260. **Always read it back!**',
  '**Practise:** Complete the phone phrases.  1 Who\'s ______, please?  2 Could you ______ that?  3 Can I ______ a message?  4 I\'m ______ he\'s in a meeting.  5 Let me ______ that back.',
  '**Pronunciation.** 🔊 **Track 9.10** Say names and numbers **slowly, in groups**, and **read them back**: _H-A-D-D-A-D-I-N_ · _00962 — 795 — 412 — 833_. Listen and repeat. Then practise with your own number.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back** (you can\'t see your partner – like a real phone call!). A answers the phone, B is the caller on the card. A writes the message. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good morning, __________.'],
  ['B', 'Could I speak to __________, please?'],
  ['A', 'I\'m afraid __________. Who\'s calling, please?'],
  ['B', 'This is __________ from __________.'],
  ['A', 'Could you spell your family name? … Can I take a message?'],
  ['B', 'Yes, please. __________. Could you ask him / her to __________?'],
  ['A', 'Of course. What\'s your number?'],
  ['B', '__________.'],
  ['A', 'Let me read that back: __________. I\'ll give him / her the message.'],
]));
out.push(table(['Caller card A', 'Caller card B'], [[
  'Samar Khoury from Zenith Pharma · the delivery will arrive Tuesday, not Monday · wants a call back before 2 · 0991 223 447',
  'Walid Nassif from the bank · the documents are missing one signature · wants them by Thursday · 011 556 7788 ext. 214']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform (back to back). **Listener task:** write the message: who called, from where, what about, what they want, the number.'));
out.push(stage('4', 'Your turn – the noisy office', 9));
out.push(p('**a**  Write a message you want to leave: who you are, your company, the problem, what you want, your **real or invented** phone number.'));
out.push(p('**b**  In pairs, back to back, make the call. **The class makes noise!** You must spell your name, repeat the number, and your partner must read it back. Then swap. Then change partners and call again.'));
out.push(table(['MESSAGE FOR:', ''], [['From', ''], ['Company', ''], ['About', ''], ['Action needed', ''], ['Phone', ''], ['Time of call', '']], [1, 2], { headFill: C.navy }));
out.push(stage('4R', 'Report', 6));
out.push(p('Give the message to the class:  _Rasha called at half past eleven. She\'s from Al-Noor School. The projector in room 4 isn\'t working and she needs it for Sunday. She wants a technician before Saturday. Her number is 0947 220 518._'));
out.push(p('**Listener task:** check the number with the person who called. Is it right?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message slip Lina left on Mr Khaled\'s desk. Answer the questions.'));
out.push(table(['TELEPHONE MESSAGE', ''], [
  ['For', 'Mr Khaled Ahmad'], ['From', 'Yusuf Haddadin'], ['Company', 'Delta Medical, Amman'], ['Date / time', 'Thursday 23 October, 10.15 am'],
  ['Message', 'About the December order. They can only send **half** the quantity this month. The other option is to wait and receive everything in January.'],
  ['Action', 'Please call him back **today** – he says it\'s a little urgent.'],
  ['Phone', '00962 795 412 833'], ['Taken by', 'Lina'],
], [1, 3], { headFill: C.navy }));
out.push(sp());
out.push(item('1', 'What are the two options?'));
out.push(item('2', 'When must Mr Khaled call?'));
out.push(item('3', 'Who took the message?'));
out.push(writers([
  'A message slip has **eight** parts: For · From · Company · Date and time · Message · Action · Phone · Taken by.',
  'The **Message** says *what happened*; the **Action** says *what the person must do*. Never mix them!',
  'Write the **time of the call** – your manager needs to know if it was two hours ago or two minutes ago.',
  'Use **bold** or capitals for the most important word: _only **half**_, _call him back **today**_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the message slip for **caller card A** from Stage 3.'));
out.push(table(['TELEPHONE MESSAGE', ''], [['For', ''], ['From', ''], ['Company', ''], ['Date / time', ''], ['Message', ''], ['Action', ''], ['Phone', ''], ['Taken by', '']], [1, 3], { headFill: C.navy }));
out.push(stage('6P', 'Check together', 5));
out.push(check(['All eight parts are complete', 'The Message and the Action are separate', 'The number is correct (check with your partner!)', 'Capital letters for names and companies']));
out.push(stage('6R', 'Share', 3));
out.push(p('Compare slips with the person who made the call. What is missing or wrong?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **two** message slips: one for the call you received in Stage 4, and one for a **real** message you took recently (at work, at home, for a family member). 60 words or more in total.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s slip as the **person who receives it**. ★ _I know exactly what to do!_  ✓ _Can you add the time?_  ? _Did they say which order?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two slips are read aloud. Which message could you act on immediately?'));
out.push(hw('Write the **email** Mr Khaled sends after he reads the message (30+ words): answer Mr Haddadin, choose one of the two options, and give a reason.'));

// ======================= 9.6 =======================
out.push(pb());
out.push(h2('9.6  Could you send me the file?'));
out.push(p('**Function:** polite requests at work   ·   **Grammar:** _Could you…? Would you mind…?_; _Thanks in advance_   ·   **Pronunciation:** _Could you_ /kʊdʒə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you ask colleagues for every week? (a file, a signature, help, information, a change of time…) What do you write in those emails?'));
out.push(board('Could you send me the file?', 'Thanks in advance!'));
out.push(p('**b**  Which is the most polite? _Send me the file. · Can you send me the file? · Could you send me the file, please? · Would you mind sending me the file?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things does Rana ask Omar for?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** What is the problem with the laptop?   **2** When can Omar come?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.11  A call between two companies', [
  ['Omar', 'TechCare, good afternoon.'],
  ['Rana', 'Hello, this is Rana from Medica Trading. Is that Omar?'],
  ['Omar', 'Yes, speaking. How can I help?'],
  ['Rana', 'We\'ve got a problem with one of the laptops – the one in the accounts office. It turns on, but the screen stays black.'],
  ['Omar', 'Hmm. Could you try one thing before I come? Press and hold the power button for ten seconds, then start it again.'],
  ['Rana', 'OK, wait… No, the same.'],
  ['Omar', 'Fine. I\'ll come tomorrow morning at nine.'],
  ['Rana', 'Thank you. And would you mind bringing a spare screen? Lina needs that laptop for the end-of-month accounts.'],
  ['Omar', 'No problem. Could you send me the model number before five? It\'s on a sticker under the laptop.'],
  ['Rana', 'Of course. I\'ll send it by email in ten minutes.'],
  ['Omar', 'Perfect. One more thing – could you ask reception to make me a visitor badge? Last time I waited twenty minutes at the door!'],
  ['Rana', 'Ha! I remember. I\'ll do it today. Thanks in advance, Omar.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – polite requests at work**',
  table(['Request', 'Form', 'Example'], [
    ['**Could you** + base verb', 'the normal polite request', '**Could you send** me the file?'],
    ['**Would you mind** + **-ing**', 'extra polite (a bigger favour)', '**Would you mind bringing** a spare screen?'],
    ['**Could you ask** + person + **to** + verb', 'a request through someone', '**Could you ask** reception **to make** a badge?'],
  ], [1.3, 1.3, 1.6]),
  '⚠ _Would you mind **bringing**…?_ – **-ing**, not ~~to bring~~.  And the answer is confusing! _Would you mind…?_ → **No, not at all** = yes, I\'ll do it. 😀',
  '**Softening a request:** _Could you possibly…? · If you have time… · before five, if possible · Sorry to ask, but…_',
  '**Thanking in advance:** _Thanks in advance. · Thank you for your help. · I appreciate it._',
  '**Practise:** Make the requests more polite.  1 Send me the report. → ______  2 Change the meeting to three. → ______  3 Help me with this machine. → ______  4 Tell Mr Fouad I called. → ______',
  '**Useful phrases:** Yes, speaking. · How can I help? · Could you try one thing before I come? · No problem. · One more thing… · I remember!',
  '**Pronunciation.** 🔊 **Track 9.12** _Could you_ /kʊdʒə/ and _Would you_ /wʊdʒə/ – fast and linked: _Could‿you send me the file?_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A phones B with the problem on the card and makes **three** requests (use a different form each time!). Then swap.'));
out.push(dlg(null, [
  ['B', '__________, good afternoon.'],
  ['A', 'Hello, this is __________ from __________.'],
  ['B', 'Yes, speaking. How can I help?'],
  ['A', 'We\'ve got a problem with __________. __________.'],
  ['B', 'Could you try __________ before I come?'],
  ['A', 'OK, wait… __________.'],
  ['B', 'Fine. I\'ll come __________.'],
  ['A', 'Thank you. And would you mind __________? One more thing – could you ask __________ to __________?'],
  ['B', 'No problem. Thanks in advance!'],
]));
out.push(table(['Problem card A', 'Problem card B'], [[
  'the office printer prints everything grey · you need 60 copies for a meeting tomorrow at 10 · ask: come today, bring ink, send the price first',
  'the air conditioning in the shop is very noisy · customers are complaining · ask: come before the weekend, bring a quiet machine to show you, call before coming']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the request forms you hear.'));
out.push(PHRASE_CARD(['Could you…?', 'Would you mind …-ing?', 'Could you ask … to…?', 'Could you possibly…?', 'Thanks in advance.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three real requests** you need to make this week – at work, at college, at home, or to a shop or office. Ask your partner (they play the person). They say yes to two and "not this week" to one. Then swap. Change partners and make your requests again, more politely each time!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fadi asked me to send him the photos from the trip, to change our study day to Sunday, and to ask my brother about a car part. I said yes to the photos and the car part, but I can\'t study on Sunday – I\'m working._'));
out.push(p('**Listener task:** whose request was the most polite? Which request would you refuse?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two work emails. Answer the questions.'));
out.push(model([
  '**1 · From Rana to Omar**',
  '**Subject:** Laptop – accounts office (model number)',
  'Dear Omar,',
  'Thank you for your help on the phone. As promised, here is the model number of the laptop: **Dell Latitude 5420, serial DL-5420-77Q**. The sticker is under the machine.',
  'Could you bring a spare screen tomorrow? Lina needs this laptop for the end-of-month accounts on Thursday.',
  'I have asked reception to prepare your visitor badge, so you won\'t wait at the door this time!',
  'Thanks in advance.',
  'Best regards, Rana Haddad · Medica Trading',
  '**2 · From Omar to Rana**',
  '**Subject:** RE: Laptop – accounts office (model number)',
  'Dear Rana,',
  'Thank you for the information. I will come tomorrow (Wednesday) at 9 am with a spare screen and the tools.',
  'Would you mind asking somebody to back up the important files before I arrive? If we change the screen it is usually safe, but it is better to be careful.',
  'If Lina needs the laptop urgently, I could also bring a machine she can use for two days.',
  'Best regards, Omar Darwish · TechCare',
]));
out.push(item('1', 'What information did Rana send?'));
out.push(item('2', 'What does Omar ask them to do before he comes?'));
out.push(item('3', 'What does Omar offer?'));
out.push(writers([
  'A work email: **clear subject** → _Dear + name,_ → **thank you / the reason you write** → **the information** → **your request** (Could you…? / Would you mind …-ing?) → **an offer or an extra** → _Thanks in advance._ → _Best regards,_ → **name · company**.',
  'Use **RE:** and keep the same subject when you reply.',
  'Put **important details in bold**: model numbers, dates, times.',
  'One email = **one subject**. If you have two different subjects, write two emails!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Subject:** ______________   Dear ______________,   Thank you for ______________. Here is ______________: **______________**.   Could you ______________? ______________ needs ______________ for ______________.   I have ______________, so ______________.   Thanks in advance.   Best regards, ______________ · ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Could you… / Would you mind …-ing', 'A clear subject line and important details in bold', 'All parts: reason, information, request, extra, ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your request sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a **real** work or study email (60 words or more): ask a colleague, a supplier, a teacher or an office for **two** things. Then give your email to your partner – they write the reply in 7P.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Write the **reply** to your partner\'s email (not just a slip!): thank them, answer **both** requests, and add **one** request of your own.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two pairs read their email + reply aloud. Which pair sounds the most professional?'));
out.push(hw('Write a short **follow-up** email (25+ words): three days later, the person didn\'t answer. Ask again – politely! _I am writing to follow up on my email of…_'));

// ======================= 9.7 =======================
out.push(pb());
out.push(h2('9.7  Review & Mediate: Mr Saleh called'));
out.push(p('**Function:** passing on a phone message   ·   **Recycling:** Units 1–9   ·   **Exam practice:** A2 Key Reading Part 5, Writing Part 6, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 9 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I must to wear a badge.  **2** She have to work on Saturday.  **3** You don\'t must smoke here.  **4** Would you mind to send the file?  **5** Can I to leave early?  **6** He doesn\'t has to come.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the message Nour wrote during a very busy morning.'));
out.push(box(null, [
  '**message on a piece of paper, in a hurry:**',
  'Mr Saleh — Zenith — 11.40',
  'machine 3 — not working again — same problem as last month',
  'he is angry!!! waited 2 weeks last time',
  'wants technician TODAY or tomorrow morning latest',
  'if nobody comes he will call another company',
  'tel 0988 442 150 — ask for him NOT the office',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. How does Omar tell Mr Fouad about this message?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 9.13  Passing on the message', [
  ['Omar', 'Mr Fouad, have you got a minute? There\'s a message from this morning.'],
  ['Mr Fouad', 'Go ahead.'],
  ['Omar', 'Mr Saleh from Zenith called at twenty to twelve. Machine three isn\'t working again – he says it\'s the same problem as last month.'],
  ['Mr Fouad', 'Again? We repaired it in September.'],
  ['Omar', 'That\'s the problem. He isn\'t happy: he says he waited two weeks last time.'],
  ['Mr Fouad', 'I understand. What does he want?'],
  ['Omar', 'He wants a technician today, or tomorrow morning at the latest. And he said that if nobody comes, he\'ll call another company.'],
  ['Mr Fouad', 'Hmm. We mustn\'t lose Zenith – they have eight machines. Who\'s free?'],
  ['Omar', 'Nour and I can go this afternoon. We have to finish two small repairs first, but we can be there at three.'],
  ['Mr Fouad', 'Do that. And call him **now**, don\'t wait – tell him you\'re coming at three.'],
  ['Omar', 'Of course. He asked for him directly, not the office – his number is 0988 442 150.'],
  ['Mr Fouad', 'Good. Thank you, Omar.'],
]));
out.push(sp());
out.push(box('Language box – passing on a message', [
  'Turn the notes into **full sentences**, in this order:',
  '**1 Who / when:** _Mr Saleh from Zenith called at twenty to twelve._',
  '**2 The problem:** _Machine three isn\'t working again – he says it\'s the same problem as last month._',
  '**3 The feeling (carefully!):** _He isn\'t happy: he says he waited two weeks last time._  (Not "He is angry!!!" – be professional.)',
  '**4 What he wants:** _He wants a technician today, or tomorrow morning at the latest._',
  '**5 The warning:** _He said that if nobody comes, he\'ll call another company._',
  '**6 How to contact him:** _He asked for him directly, not the office – his number is…_',
  '**Useful phrases:** Have you got a minute? · There\'s a message from this morning. · Go ahead. · He says… · He asked for… · at the latest',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the notes on the card (don\'t show them!). A passes the message to B (the manager) in full sentences, in the right order. B asks **two** questions and decides what to do. Then swap.'));
out.push(table(['Notes card A', 'Notes card B'], [
  ['Dr Samar — Al-Noor Clinic — 9.15', 'Umm Yazan — building owner — 4.50 pm'],
  ['delivery came — 3 boxes missing', 'water pump broken — no water on floors 4–6'],
  ['needs them before Sunday (clinic closed Fri/Sat)', 'two families with small children!'],
  ['not angry, but worried', 'wants a plumber tonight if possible'],
  ['call back after 2 — she is with patients until then', 'she is at her sister\'s — call her mobile 0955 318 204'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the six parts: who, when, problem, feeling, what they want, contact.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real message** you had to pass on recently (at work, at home, for a neighbour or a family member) – or invent one. Tell your partner the notes quickly. Your partner passes the message on to you **properly**, in full sentences. Then swap. Then change partners and pass on **your partner\'s** message.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Pass the message to the class:  _Hiba\'s neighbour called her mother yesterday evening. The electricity in the building goes off every night at nine and the company says it isn\'t their problem. The neighbours want to meet on Friday after prayers to decide what to do. They want one person from every flat._'));
out.push(p('**Listener task:** is any important information missing? Ask for it!   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 5)', 7));
out.push(p('Read the text. Write **ONE** word for each gap.'));
out.push(model([
  '**A NEW JOB**',
  'My name is Nour and I started work at TechCare in June. In my first week I (1) ______ to learn a lot of rules: I must wear my badge, and I mustn\'t use the back door because it is an emergency exit.',
  'Every day I repair phones and chargers, and I (2) ______ to write a note for every repair. I don\'t (3) ______ to talk to customers at the desk – Rami does that – but last week the manager asked me (4) ______ explain a problem to a customer, and I did it in English!',
  'My English is not perfect (5) ______, but I started classes in September. Next year I hope (6) ______ be a full technician.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the email Omar sends to Mr Saleh after the conversation in Track 9.13.'));
out.push(p('**Subject:** ______________   Dear Mr Saleh,   Thank you for your call this ______________. I am very sorry that ______________ again.   My colleague and I ______________ at ______ this afternoon. We ______________ a spare part with us.   Could you ______________ before we arrive? ______________.   Again, I apologise for ______________. ______________.   Best regards, Omar Darwish · TechCare'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['An apology and the time of the visit', 'A request (Could you…? / Would you mind …-ing?)', 'Formal forms (I am, we will) – no contractions', 'A clear subject line and a professional ending']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You cannot go to your English class next week because of your work. Write an email to your teacher, **Ms Huda**.',
  'In your email:  •  say **why** you can\'t come  •  ask **what the homework is**  •  ask her **to send you something**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 9 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ wear a uniform at work.   a) have   b) have to   c) has to',
  '2  She ___ work on Fridays – the office is closed.   a) mustn\'t   b) doesn\'t have to   c) don\'t have to',
  '3  You ___ smoke here. It\'s forbidden.   a) mustn\'t   b) don\'t have to   c) haven\'t to',
  '4  ___ I leave at three today?   a) Could   b) Must   c) Have',
  '5  Would you mind ___ me the file?   a) send   b) to send   c) sending',
  '6  Could you ask him ___ me back?   a) call   b) to call   c) calling',
  '7  I ___ in a phone shop for three summers.   a) work   b) worked   c) have to work',
  '8  "Can I take a ___?" – "Yes, please. Tell him Samar called."   a) message   b) note   c) call',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 2 style).** 🔊 **Track 9.14** Listen and complete the message slip.'));
out.push(table(['TELEPHONE MESSAGE', ''], [['From', '1 ______'], ['Company', '2 ______'], ['About', 'the order of **3** ______ boxes'], ['Action: call back before', '4 ______ pm'], ['Phone', '5 0944 ______']], [2, 1], { headFill: C.navy }));
out.push(dlg('Track 9.14  Audio script (read after the check)', [
  ['Receptionist', 'Good afternoon, Medica Trading.'],
  ['Caller', 'Good afternoon. Could I speak to Mr Khaled, please?'],
  ['Receptionist', 'I\'m afraid he\'s with a client. Can I take a message?'],
  ['Caller', 'Yes, please. This is Samar Khoury – that\'s K-H-O-U-R-Y – from Zenith Pharma.'],
  ['Receptionist', 'Thank you, Ms Khoury. What\'s the message?'],
  ['Caller', 'It\'s about our order. We asked for forty boxes, but we only need thirty now. Could you ask him to call me back before five o\'clock? After five I\'m travelling.'],
  ['Receptionist', 'Of course. What\'s your number?'],
  ['Caller', 'It\'s 0944 762 310.'],
  ['Receptionist', 'Let me read that back: 0944 762 310. I\'ll give him the message.'],
]));
out.push(p('**C  Writing.** Write an email to a colleague (35+ words). Ask them for **two** things you need for a meeting, say when you need them, and thank them.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 9)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe what I have to do in my job or studies',
  '☐ explain rules with _must / mustn\'t / don\'t have to_',
  '☐ ask for permission politely, with a reason and a solution',
  '☐ talk about my skills and experience',
  '☐ answer the phone, take a message and read a number back',
  '☐ write polite requests to colleagues',
  '☐ pass on a message in full sentences, in the right order',
  '☐ write a job description, staff rules, a request email, a skills profile, a message slip and a work email',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 9 · Student\'s Book');
