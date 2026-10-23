// Proactive Business English A2 · Syria Edition · Book 1 · Unit 10 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'first aid · first-aid kit · accident · injury · cut · burn · sprain · back pain · headache · fever · ache · painkiller · plaster · bandage · clinic · doctor · nurse · prescription · rest · heavy lifting · bend · strain · guard · goggles · helmet · hazard';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 10  Health and Safety at Work'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**10.1**  say what is wrong, at work and at the clinic',
  '**10.2**  give advice about lifting, screens and breaks',
  '**10.3**  give and understand instructions for medicine',
  '**10.4**  make an appointment at a clinic',
  '**10.5**  give a safety instruction at the moment it matters',
  '**10.6**  say the right thing to somebody who is ill or hurt',
  '**10.7**  Review & Mediate: tell a colleague what the safety notice says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Health and safety at Sham Trading — before you start', [
  'The **first-aid kit** is on the wall inside the warehouse door, at head height, with a green cross on it. Abu Yasser checks it on the fifteenth of every month and writes the date on the lid.',
  'The clinic the company uses is in **Mezzeh**, eight minutes on foot. It opens 8.00–2.00 and 4.00–7.00, and it is closed on Friday.',
  'Nobody at Sham Trading has ever been seriously hurt. Abu Yasser says that is not luck and not a reason to relax, and he has said it every month for thirty years.',
], C.lyellow, C.orange));

// ======================= CYCLE 10.1 =======================
out.push(pb());
out.push(h2('10.1  My back hurts'));
out.push(p('**Function:** saying what is wrong   ·   **Grammar:** _hurt_ · _have got a…_ · _feel_   ·   **Pronunciation:** _ache_ words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Match the problem with the part: _a headache · back pain · a cut · a burn · a sprain_   →   _hand · ankle · head · back · finger_'));
out.push(p('**b**  Three ways to say the same thing: _My back ______. · I\'ve got ______ in my back. · My back ______ sore._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Abu Yasser?   **A** his back   **B** his hand   **C** a headache'));
out.push(p('**b**  Listen again. **1** When did it start?   **2** What does he refuse to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.1  Abu Yasser\'s back', [
  ['Nour', 'Abu Yasser, you\'re walking strangely. What\'s wrong?'],
  ['Abu Yasser', 'Nothing. My back hurts a little.'],
  ['Nour', 'A little. Since when?'],
  ['Abu Yasser', 'Since Tuesday. The pallet with the tiles. It isn\'t the first time and it won\'t be the last.'],
  ['Nour', 'Tuesday is four days. Have you got pain when you stand, or when you lift?'],
  ['Abu Yasser', 'When I bend. Standing is fine.'],
  ['Nour', 'Then you should see somebody at the clinic.'],
  ['Abu Yasser', 'For a back? They will tell me to rest for a week and I will not rest for a week.'],
  ['Nour', 'They might tell you something else. And if they tell you to rest, you can decide not to — but at least you\'ll be deciding with information.'],
  ['Abu Yasser', 'You argue like my daughter.'],
  ['Nour', 'Your daughter is right. I\'ll telephone them at four.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – saying what is wrong**',
  table(['Pattern', 'Example'], [
    ['**My ___ hurts.** (one part)', 'My back **hurts**. · My hand **hurts**.'],
    ['**My ___ ache.** (plural)', 'My legs **ache**. · My eyes **ache**.'],
    ['**I\'ve got a ___ache.**', 'I\'ve got a **headache** · **backache** · **toothache**.'],
    ['**I\'ve got (a) ___ .**', 'I\'ve got **a cut**, **a burn**, **a temperature**, **flu**.'],
    ['**I feel ___ .**', 'I **feel** sick / dizzy / tired / better.'],
    ['**Since when?** → **since** / **for**', '**Since** Tuesday. · **For** four days.'],
  ], [1.4, 2.2]),
  '⚠ **since** + a point in time (_since Tuesday, since this morning_) · **for** + a length of time (_for four days, for an hour_).',
  '⚠ _I have pain in my back_ is understood but not natural. Say _my back hurts_ or _I\'ve got backache_.',
  '⚠ _I feel sick_ in British English means you may vomit — not that you are generally unwell. For that, say _I don\'t feel well_.',
  '**Practise:** Say each one two ways.',
  '1 head  2 back  3 a cut on the finger  4 eyes, after a screen  5 a temperature since this morning',
  '**Useful phrases:**  What\'s wrong?  ·  Since when?  ·  It isn\'t the first time.  ·  when I bend  ·  You should see somebody.  ·  at least you\'ll be deciding with information',
  '**Pronunciation – ache.** 🔊 **Track 10.2** Listen and repeat: _ache_ /eɪk/ — the **ch** is /k/, not /tʃ/. _headache_ /ˈhedeɪk/ · _backache_ /ˈbækeɪk/ · _toothache_ /ˈtuːθeɪk/ · _stomach_ /ˈstʌmək/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A notices something; B says what is wrong and resists; A gives one good reason. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'You\'re __________. What\'s wrong?'],
  ['B', 'Nothing. My __________ hurts a little.'],
  ['A', 'A little. Since when?'],
  ['B', 'Since __________. __________. It isn\'t the first time.'],
  ['A', '__________ is __________ days. Have you got pain when you __________, or when you __________?'],
  ['B', 'When I __________. __________ is fine.'],
  ['A', 'Then you should __________.'],
  ['B', 'For a __________? They will tell me to __________.'],
  ['A', 'They might tell you something else.'],
]));
out.push(table(['Role card 1 — a driver', 'Role card 2 — a cook'], [[
  'B: right shoulder, since the long Aleppo run ten days ago. Hurts when he turns to reverse; fine when driving forward. Will not stop driving.',
  'B: a burn on the forearm from Monday, covered with a cloth. Hurts when it touches the oven door. Says a cook with a burn is a cook, and will not go to the clinic.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write how long it has gone on, and the argument that worked.'));
out.push(PHRASE_CARD(['What\'s wrong?', 'Since when?', 'My… hurts.', 'when I bend', 'You should see somebody.', 'It isn\'t the first time.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues about an ache or pain they get from their work. Find out how long, when it is worse, and what they do about it.'));
out.push(table(['Name', 'What hurts', 'Since / for', 'What they do'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______\'s _______ hurts. It\'s been _______ since _______. It\'s worse when _______, and he / she _______._'));
out.push(p('**Listener task:** write the part of the body that most of the class mentioned. What does that say about the work they do?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _since four days_ and _I have pain in my head_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the absence message Abu Yasser finally sends, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr Ayoub   **From:** Y. Khalil   **Sent:** Sunday 7.10 am',
  'Mr Ayoub,',
  'I am not coming in this morning. My back has been bad since Tuesday and the clinic saw me yesterday. They say it is a strain, not anything worse, but I must not lift anything for ten days.',
  'I will come in tomorrow and I will be in the warehouse, but Fadi or one of the boys must do the lifting. I can count, write and tell people what to do, which is most of the job and the part I am worst at.',
  'The stock count on the fifteenth: I can do it if somebody moves the boxes. If that is difficult, move it to the twenty-second and tell me now, not on the fourteenth.',
  'I am telephoning you at half past seven as well. This is so you have it in writing.',
  'Y. Khalil',
], 'FFFFFF', C.navy));
out.push(item('1', 'What exactly did the clinic say?'));
out.push(item('2', 'What can Abu Yasser still do, and what can he not do?'));
out.push(item('3', 'Why does he write **and** telephone?'));
out.push(box('Writer\'s box', [
  '**Shape of an absence or restriction message:** when you are not coming → **what is wrong**, in one line, without detail → **what a doctor said**, if one has → **what you can still do** → **what somebody else must do** → one thing that needs a decision, with a date → whether you have also telephoned.',
  'Say **what you can still do**. An absence message that only says what is impossible makes somebody else plan the whole day; one that says _I can count and write_ gives them half the answer.',
  'Name the **decision somebody else now has to make**, and when you need it. Here it is the stock count — and _tell me now, not on the fourteenth_ is the whole value of the message.',
  '⚠ One line about the illness is enough. Nobody needs the symptoms, and a long description makes a colleague feel they are being asked for sympathy rather than cover.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an absence or restriction message, real or invented (25 words or more). Use the frame.'));
out.push(p('______________, I am not ______________ this ______________. ______________ since ______________. The clinic ______________. I can ______________, but ______________ must ______________. ______________: I can ______________ if ______________. If that is difficult, ______________ and tell me ______________, not ______________. I am telephoning you as well.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "I know what you can and can\'t do, which is what I need. Check _since four days_. And when exactly do you need the answer about Thursday?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Be the manager reading it at ten past seven. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_since_ + a point, _for_ + a length', ''],
  ['What you **can** still do', ''],
  ['Who must do the rest', ''],
  ['A decision needed, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what I can still do_ line. The class says which message makes the morning easiest to plan.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a pain or an injury that changed the way you work or live (35 words or more). Say when it started, what you were told, and what you do differently now.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I should do that too._   ✓ _How long did it take?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. How many people waited more than a week before telling anybody? Why?'));
out.push(box('Homework', ['Write your final text. Then write five sentences with _since_ and five with _for_, about real things in your life (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.2 =======================
out.push(pb());
out.push(h2('10.2  You shouldn\'t lift that alone'));
out.push(p('**Function:** giving advice   ·   **Grammar:** _should / shouldn\'t_   ·   **Pronunciation:** advice, not an order'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Give advice for three of these: _a colleague who stares at a screen all day · somebody carrying a box down stairs · somebody who never takes a break · somebody with a headache every afternoon_'));
out.push(p('**b**  Which is advice and which is a rule? _You should take a break. · You must wear goggles. · You shouldn\'t lift that alone. · You mustn\'t walk in the yellow square._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Fadi doing wrong?   **A** lifting badly   **B** lifting alone   **C** both'));
out.push(p('**b**  Listen again. **1** What three things does Abu Yasser tell him?   **2** What does Abu Yasser admit about himself?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.3  Teaching Fadi to lift', [
  ['Abu Yasser', 'Fadi. Put it down. Put it down now.'],
  ['Fadi', 'It isn\'t heavy.'],
  ['Abu Yasser', 'It is forty kilos and your back is bent like a question mark. You shouldn\'t lift that alone, and you shouldn\'t lift it like that even with two people.'],
  ['Fadi', 'How should I lift it?'],
  ['Abu Yasser', 'Three things. You should bend your knees, not your back. You should keep it close to you — a box held away from the body is three times the weight. And you should turn with your feet, not your shoulders.'],
  ['Fadi', 'Knees, close, feet.'],
  ['Abu Yasser', 'Knees, close, feet. And if it is awkward, not heavy — awkward — you should get somebody even if you can lift it.'],
  ['Fadi', 'Did somebody teach you that?'],
  ['Abu Yasser', 'Nobody taught me anything. I learned it from my own back, at thirty-one, and I have paid for that lesson every winter since. You get it free.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – should / shouldn\'t**',
  table(['Form', 'Use', 'Example'], [
    ['**should** + plain verb', 'advice — a good idea', 'You **should bend** your knees.'],
    ['**shouldn\'t** + plain verb', 'advice against', 'You **shouldn\'t lift** that alone.'],
    ['**Should I…?**', 'asking for advice', '**How should I lift** it?'],
    ['**must / mustn\'t**', 'a **rule**, not advice', 'You **must** wear goggles.'],
  ], [1.3, 1.4, 1.8]),
  '⚠ No **to**: _you should **bend**_, not ~~should to bend~~. No **-s**: _he should **bend**_.',
  '⚠ **should ≠ must.** Advice can be refused; a rule cannot. Using _must_ for everything makes a workplace where nothing is really compulsory.',
  '⚠ Good advice at work has **three parts at most** and a word to remember it by: _knees, close, feet_.',
  '**Practise:** Give the advice, then the reason.',
  '1 lifting a heavy box  2 a screen all day  3 no break since eight  4 a cut on the hand  5 standing all day',
  '**Useful phrases:**  Put it down.  ·  How should I…?  ·  Three things.  ·  …not your back  ·  even with two people  ·  You get it free.',
  '**Pronunciation – advice, not an order.** 🔊 **Track 10.4** Listen to the same sentence twice: as an **order** (loud, falling hard) and as **advice** (softer, falling gently). Advice that sounds like an order is argued with. Repeat the five, the second way.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is doing something badly; B stops them and gives three pieces of advice with one memorable word. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. Stop. Stop now.'],
  ['B', 'It isn\'t __________.'],
  ['A', 'It is __________ and __________. You shouldn\'t __________, and you shouldn\'t __________ even __________.'],
  ['B', 'How should I __________?'],
  ['A', 'Three things. You should __________. You should __________ — __________. And you should __________, not __________.'],
  ['B', '__________, __________, __________.'],
  ['A', 'And if it is __________, you should __________ even if you can.'],
]));
out.push(table(['Role card 1 — a ladder', 'Role card 2 — a screen and a desk'], [[
  'A is on a ladder leaning right out to reach. Advice: move the ladder, three points of contact, somebody at the bottom. Word: _move, three, hold_.',
  'A has worked four hours without looking up. Advice: twenty seconds every twenty minutes looking far away, the screen at arm\'s length, feet flat. Word: _far, arm, flat_.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the three-word reminder. Could you repeat the advice tomorrow from those three words alone?'));
out.push(PHRASE_CARD(['Put it down.', 'You shouldn\'t…', 'How should I…?', 'Three things.', '…not your back', 'even if you can']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Teach **two** colleagues the right way to do something physical from your own work or home — lifting, carrying, cutting, cleaning, standing. Three pieces of advice and one three-word reminder.'));
out.push(table(['What I taught', 'My three pieces of advice', 'My three-word reminder'], [['', '', ''], ['', '', '']], [1.2, 2.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Teach the class in thirty seconds:  _You shouldn\'t _______. You should _______, _______ and _______. Remember: _______, _______, _______._'));
out.push(p('**Listener task:** write the piece of advice you will actually follow. Why that one?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _should to_ and _must_ where _should_ is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card Nour prints for the warehouse wall, and answer the questions.'));
out.push(box(null, [
  '**LIFTING — KNEES, CLOSE, FEET**   ·   on the wall by the loading door',
  '**Before you lift, look.** How heavy? How awkward? Where is it going? Is the way clear? Most bad lifts are decided before anybody bends.',
  '**Knees.** Bend your knees, not your back. If you cannot bend your knees because of what is around the box, move the box, not your back.',
  '**Close.** Keep the load against your body. A box held at arm\'s length is about three times the weight on your back.',
  '**Feet.** Turn with your feet. Never twist while you are carrying. Twisting with a load is how most backs go, and it does not feel dangerous at the time.',
  '**Two people, or none.** Anything over 25 kg, anything awkward, anything above shoulder height, anything you cannot see over: get somebody. "Awkward" counts even when it is light.',
  '**If it has already happened.** Stop. Do not finish the job first. Tell Abu Yasser, and sit down — the first ten minutes decide the next ten days.',
], 'FFFFFF', C.navy));
out.push(item('1', 'When is most of a bad lift decided?'));
out.push(item('2', 'What four things mean "get somebody"?'));
out.push(item('3', 'What must you not do if you have hurt yourself?'));
out.push(box('Writer\'s box', [
  '**Shape of a safety card:** a **title that is the reminder** → a "before you start, look" section → one short section per piece of advice, with the **reason** → the rule for getting help, with the limits spelled out → **what to do if it has already happened**.',
  'Make the title do the work: **KNEES, CLOSE, FEET** is read from across the warehouse and remembered. _Manual handling guidance_ is read by nobody.',
  'Put a **number** on the limit: _over 25 kg_, _above shoulder height_. A card that says _if it is too heavy_ leaves everybody to decide for themselves, which is how it was before the card.',
  '⚠ The last section is the one that saves most: **what to do when it has already gone wrong**. People hide an injury for the same reason they hid the shortage in Unit 4 — because stopping feels worse than continuing.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a safety card for something at your own work or home (25 words or more). Use the frame.'));
out.push(p('**______________ — ______, ______, ______**  ·  ______________.  **Before you start, look.** ______________.  **______________.** ______________, not ______________.  **______________.** ______________, because ______________.  **______________.** Never ______________.  **Two people, or none.** Anything ______________, anything ______________: ______________.  **If it has already happened.** ______________. Do not ______________ first.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as somebody in a hurry who has done the job for years. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A title that is also the reminder', ''],
  ['Every piece of advice has a reason', ''],
  ['A number on at least one limit', ''],
  ['What to do when it has already gone wrong', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their titles. The class says which one they would still remember next month.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the advice you would give somebody starting your job tomorrow — about their body, not their work (35 words or more). What will hurt in ten years, and what can they do now?'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Nobody told me this._   ✓ _What would you have done differently?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the advice on the board. How much of it did anybody receive when **they** started?'));
out.push(box('Homework', ['Write your final text. Then write eight sentences of advice with _should_ and _shouldn\'t_ for somebody who sits at a desk all day (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.3 =======================
out.push(pb());
out.push(h2('10.3  Twice a day, after meals'));
out.push(p('**Function:** giving and understanding instructions for medicine   ·   **Grammar:** frequency + time expressions   ·   **Pronunciation:** reading an instruction back'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do these mean? _twice a day · every eight hours · before meals · after meals · as needed · finish the course_'));
out.push(p('**b**  Which two of them do people most often get wrong, and what happens if they do?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is explaining to whom?   **A** a pharmacist to Abu Yasser   **B** Nour to Abu Yasser   **C** a doctor to Nour'));
out.push(p('**b**  Listen again. **1** How often must he take the tablets?   **2** What must he not do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.5  Reading the prescription', [
  ['Abu Yasser', 'Nour, the paper from the clinic. The writing is a doctor\'s writing.'],
  ['Nour', 'Let me look. Two things. The white tablets: one tablet, twice a day, after food — morning and evening.'],
  ['Abu Yasser', 'After food. Not on an empty stomach.'],
  ['Nour', 'Never on an empty stomach; it says so twice. And you must finish all of them, ten days, even if your back is fine after four.'],
  ['Abu Yasser', 'Why, if I am better?'],
  ['Nour', 'Because this one is not only for the pain. If you stop at four days the swelling comes back, and it comes back worse.'],
  ['Abu Yasser', 'And the second thing?'],
  ['Nour', 'A cream, three times a day, on the skin only — not near your eyes. And it says here: no heavy lifting for ten days. That isn\'t the tablets. That\'s the doctor.'],
  ['Abu Yasser', 'Ten days. Read me the first one again.'],
  ['Nour', 'One white tablet, twice a day, after food, for ten days, all of them. Say it back to me.'],
  ['Abu Yasser', 'One, twice a day, after food, ten days, all of them. You make everybody repeat everything.'],
  ['Nour', 'I do. It works on telephone numbers and it works on your back.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – medicine instructions**',
  table(['How often', 'When', 'How long'], [
    ['**once / twice / three times a day**', '**before** / **after** food', '**for** ten days'],
    ['**every** eight hours', '**with** water · **on** an empty stomach', '**until** the course is finished'],
    ['**as needed**, up to ___ a day', '**morning and evening**', '**all of them**, even if you feel better'],
  ], [1.4, 1.4, 1.4]),
  '⚠ _twice a day_ and _every twelve hours_ are not the same thing. The first lets you choose; the second does not.',
  '⚠ **as needed** has a limit, and the limit is the important half: _as needed, **up to four a day**_.',
  '⚠ Always **ask for it to be said back**, and say it back yourself. It is the same habit as reading a telephone number back — and the cost of getting it wrong is higher.',
  '**Practise:** Explain each instruction in plain words, then ask for it to be repeated.',
  '1 1 tab bd pc × 10/7  2 2 tabs every 8 hours, max 6  3 apply tds, skin only  4 before meals, 30 min  5 complete the course',
  '**Useful phrases:**  Let me look.  ·  Two things.  ·  Never on an empty stomach.  ·  even if you feel better  ·  That isn\'t the tablets, that\'s the doctor.  ·  Say it back to me.',
  '**Pronunciation – reading an instruction back.** 🔊 **Track 10.6** Listen. The instruction is said in **four small groups**, with a stop after each: _One tablet ‖ twice a day ‖ after food ‖ for ten days._ Repeat the four instructions in groups.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a prescription they cannot read; B explains it and makes them repeat it. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, the paper from __________. The writing is __________.'],
  ['B', 'Let me look. Two things. The __________: __________, __________ a day, __________.'],
  ['A', '__________. Not __________.'],
  ['B', 'Never __________; it says so twice. And you must __________, even if __________.'],
  ['A', 'Why, if __________?'],
  ['B', 'Because __________. If you stop at __________, __________.'],
  ['A', 'And the second thing?'],
  ['B', '__________, __________ times a day, __________ only — not __________. Say it back to me.'],
]));
out.push(table(['Role card 1 — a chest infection', 'Role card 2 — an eye problem'], [[
  'Capsules: one, three times a day, with water, for seven days, all of them. Syrup: 10 ml at night only, may cause sleepiness — do not drive.',
  'Drops: one drop in the left eye only, four times a day, for five days. Wash hands before and after. Do not touch the dropper to the eye. Throw the bottle away after the course.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the instruction in four groups. Then check it against the role card.'));
out.push(PHRASE_CARD(['Let me look.', 'twice a day', 'after food', 'for ten days', 'even if you feel better', 'Say it back to me.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain a real instruction to **three** colleagues — medicine, a machine, a recipe, a document. Make each of them say it back in groups. Note where it went wrong.'));
out.push(table(['What I explained', 'Did they repeat it right?', 'The part that went wrong'], [['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I explained _______. _______ repeated it and got _______ wrong. The part people lose is _______._'));
out.push(p('**Listener task:** write the kind of detail most often lost — the number, the time, the condition, or the length?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _two times in the day_ and _since ten days_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour writes out for Abu Yasser to keep in his pocket, and answer the questions.'));
out.push(box(null, [
  '**ABU YASSER — the ten days**   ·   written out by Nour, 8 May',
  '**White tablets.** ONE tablet, TWICE a day, AFTER food. Morning and evening. **All ten days**, even if your back is fine on day four. Never on an empty stomach.',
  '**Cream.** THREE times a day, on the skin only. Not near the eyes. Wash your hands afterwards.',
  '**No heavy lifting for ten days.** This is from the doctor, not from the tablets. It does not stop on day four either.',
  '**If it gets worse, or if you get pain down your leg:** go back to the clinic the same day. Do not wait until Thursday because Thursday is quiet.',
  '**Day ten is 18 May.** I have written it on the warehouse calendar in pencil.',
  '_I know you will read this once and put it in a pocket. That is why the important words are in capitals._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why are some words in capitals?'));
out.push(item('2', 'What would make him go back to the clinic the same day?'));
out.push(item('3', 'What has Nour written on the calendar, and why in pencil?'));
out.push(box('Writer\'s box', [
  '**Shape of a written instruction for somebody else:** one heading per thing → **the numbers in capitals** → the condition people break (_even if you feel better_) → what is **not** from the medicine → **when to go back** → the end date, written as a date.',
  'Write the **end date**, not the length. _Ten days_ requires arithmetic on day six; _18 May_ does not.',
  'Separate **what the medicine says** from **what the doctor said**. People stop the second when the first runs out.',
  '⚠ Say the thing you know about the reader: _I know you will read this once and put it in a pocket._ Instructions written for a real person, with their habits in mind, are followed; instructions written for a general patient are not.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write out an instruction for somebody who will read it once (25 words or more). Use the frame.'));
out.push(p('**______________ — ______________**  ·  ______________.  **______________.** ______ , ______ a day, ______________. **All ______ days**, even if ______________.  **______________.** ______ times a day, ______________ only. Not ______________.  **______________.** This is from ______________, not from ______________.  **If ______________:** ______________ the same day.  **Day ______ is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it once, close it, and say it back from memory. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The numbers stand out', ''],
  ['The condition people break is named', ''],
  ['An end **date**, not a length', ''],
  ['When to come back / ask again', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three pairs say what they remembered after one reading. Which formatting choice survived?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you or somebody you know did not follow an instruction (35 words or more). Say which part was not followed, why, and what happened.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Everybody does that._   ✓ _What would have made you follow it?_   ? _a question about what happened_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Is the instruction people break usually the hardest one, or the one with no reason attached?'));
out.push(box('Homework', ['Write your final text. Then take a real packet of medicine or a real appliance instruction and rewrite it for somebody who will read it once (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.4 =======================
out.push(pb());
out.push(h2('10.4  I\'d like to make an appointment'));
out.push(p('**Function:** making an appointment at a clinic   ·   **Grammar:** _have got_ + appointment; times   ·   **Pronunciation:** spelling and confirming'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you have to give when you telephone a clinic? Write five things.'));
out.push(p('**b**  Which of these would you say on the telephone, and which only at the desk? _I\'d like to make an appointment. · It\'s for my back. · Have you got anything this week? · Here\'s my card._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When is the appointment in the end?   **A** today at five   **B** tomorrow at nine   **C** Thursday'));
out.push(p('**b**  Listen again. **1** What does the clinic ask for?   **2** Why does Nour not take the Thursday appointment?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.7  Telephoning the clinic', [
  ['Clinic', 'Mezzeh Clinic, good afternoon.'],
  ['Nour', 'Good afternoon. I\'d like to make an appointment, please — not for me, for a colleague.'],
  ['Clinic', 'Of course. What\'s the name?'],
  ['Nour', 'Yasser Khalil. K-H-A-L-I-L.'],
  ['Clinic', 'Khalil. And what\'s it about?'],
  ['Nour', 'His back. It\'s been bad since Tuesday and it hurts when he bends.'],
  ['Clinic', 'I can give you Thursday at eleven.'],
  ['Nour', 'Thursday is four more days. Have you got anything earlier? He\'s fifty-two and he lifts for a living.'],
  ['Clinic', 'Let me look… there\'s a space tomorrow at nine, if he can come early.'],
  ['Nour', 'He\'s awake at five. Tomorrow at nine, please.'],
  ['Clinic', 'Tomorrow at nine, Yasser Khalil. Can he bring his identity card and any old X-rays?'],
  ['Nour', 'Identity card and old X-rays. Tomorrow at nine. Thank you very much.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – making an appointment**',
  table(['Step', 'What you say'], [
    ['Open', 'I\'d like to make an appointment, please.'],
    ['Say who it is for', 'Not for me — for a colleague. / It\'s for my son.'],
    ['Spell the name', 'Yasser Khalil. K-H-A-L-I-L.'],
    ['Say what it is about', 'His back. It\'s been bad **since** Tuesday.'],
    ['Push for earlier, with a reason', '**Have you got anything earlier?** He lifts for a living.'],
    ['Confirm everything back', 'Tomorrow at nine. Identity card and old X-rays.'],
  ], [1.2, 2.4]),
  '⚠ **Have you got anything earlier?** is the most useful sentence in this cycle. The first time offered is rarely the only time, and a short reason makes a space appear surprisingly often.',
  '⚠ Spell the family name **without being asked**. It saves the whole call being under the wrong name.',
  '**Practise:** Make the call in six steps.',
  '1 for your mother, her knee, since last month  2 for yourself, a cough, two weeks  3 for a child, a temperature since last night  4 for a colleague, a burn, yesterday  5 for yourself, a check, no hurry',
  '**Useful phrases:**  I\'d like to make an appointment.  ·  It\'s for…  ·  It\'s been bad since…  ·  Have you got anything earlier?  ·  Let me look…  ·  Can he bring…?',
  '**Pronunciation – spelling and confirming.** 🔊 **Track 10.8** Listen. The name is spelled with a small stop between letters, and everything is repeated back at the end. Repeat: _K-H-A-L-I-L_ · _tomorrow at nine_ · _identity card and old X-rays_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A telephones the clinic; B offers a late appointment first. A must ask for earlier, with a reason. Then swap.'));
out.push(dlg(null, [
  ['B', '__________ Clinic, good __________.'],
  ['A', 'Good __________. I\'d like to make an appointment, please — __________.'],
  ['B', 'Of course. What\'s the name?'],
  ['A', '__________. __________.'],
  ['B', 'And what\'s it about?'],
  ['A', '__________. It\'s been __________ since __________.'],
  ['B', 'I can give you __________ at __________.'],
  ['A', '__________ is __________ days. Have you got anything earlier? __________.'],
  ['B', 'Let me look… there\'s a space __________.'],
  ['A', '__________, please.'],
]));
out.push(table(['Role card 1 — a dentist', 'Role card 2 — a government office'], [[
  'B offers in two weeks. A\'s reason: the tooth has kept them awake for three nights. B then finds a cancellation tomorrow at 7.30 am.',
  'B offers the 28th. A\'s reason: the papers expire on the 25th. B then finds that mornings before nine take people without an appointment.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the reason that made the earlier appointment appear. Was it the urgency or the detail?'));
out.push(PHRASE_CARD(['I\'d like to make an appointment.', 'It\'s for…', 'since…', 'Have you got anything earlier?', 'Let me look…', 'Can he bring…?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make **three** appointments, back to back with three colleagues — a clinic, a repair, an office. Always spell the name, always ask for earlier, always confirm back.'));
out.push(table(['Where', 'For what', 'First offered', 'Got'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.2, 1.6, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I telephoned _______ for _______. They offered _______. I said _______, and in the end I got _______._'));
out.push(p('**Listener task:** count how many people got something earlier by asking. What does that tell you?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I want an appointment_ and _since two weeks_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour leaves for Abu Yasser, and answer the questions.'));
out.push(box(null, [
  '**ABU YASSER — your appointment**',
  '**Tomorrow, Tuesday 9 May, 9.00 am.** Mezzeh Clinic, the one on the corner opposite the bakery — not the new one by the roundabout.',
  '**In the name of:** Yasser Khalil. They have spelled it K-H-A-L-I-L; if they call "Khaleel" at the desk, that is you.',
  '**Bring:** your identity card, and the old X-rays from 2019 if you still have them. If you cannot find them, come anyway.',
  '**Tell them:** it started on Tuesday with the tile pallet; it hurts when you bend and not when you stand; you lift for a living and you are not going to stop, so you need to know what you **can** do, not only what you can\'t.',
  'The warehouse is covered: Fadi opens the gate at 7.30 and I have the key for the store room. Do not come in first "for half an hour". I know you, and half an hour is two hours and a pallet.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which clinic is it, and which is it not?'));
out.push(item('2', 'What should Abu Yasser tell the doctor about his work?'));
out.push(item('3', 'What does Nour tell him not to do, and why?'));
out.push(box('Writer\'s box', [
  '**Shape of an appointment note for somebody else:** **date and time** in bold → **where**, with what it is **not** → the **name** it is booked under, and how it may be mispronounced → **what to bring**, and what to do if they cannot → **what to tell them** → what is covered at work → one line that knows the person.',
  'Write **what to tell the doctor**. Most people describe the pain and not the life; _I lift for a living and I am not going to stop_ changes the advice they get.',
  'Say **what is covered**. The commonest reason people miss an appointment is not forgetting; it is thinking the place cannot manage without them.',
  '⚠ Include the line that knows the reader — _half an hour is two hours and a pallet_. It is not a joke; it is the sentence that gets him to the clinic.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an appointment note for somebody else, real or invented (25 words or more). Use the frame.'));
out.push(p('**______________ — your appointment.**  **______________, ______ at ______.** ______________, ______________ — not ______________.  **In the name of:** ______________. ______________.  **Bring:** ______________. If you cannot ______________, ______________.  **Tell them:** ______________; ______________; and ______________.  ______________ is covered: ______________. Do not ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person it is for, at seven in the morning. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Date, time and which place — with what it is **not**', ''],
  ['What to bring, and what if they cannot', ''],
  ['What to tell them about the life, not only the problem', ''],
  ['What is covered while they are away', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "one line that knows the person". The class says which would actually work on that person.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you made somebody go to a doctor, or somebody made you (35 words or more). Say how, what the argument was, and whether it was right.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _You were right to push._   ✓ _What finally worked?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. What argument actually moves somebody who does not want to go — the pain, the family, or the work?'));
out.push(box('Homework', ['Write your final text. Then write out the telephone call you would make to book something you have been putting off, in eight lines (20+ words). Then make it.'], C.lblue, C.navy));

// ======================= CYCLE 10.5 =======================
out.push(pb());
out.push(h2('10.5  Don\'t lift that alone!'));
out.push(p('**Function:** giving a safety instruction at the moment it matters   ·   **Grammar:** negative imperatives   ·   **Pronunciation:** the urgent voice, and the voice after'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You have **two seconds** to stop somebody doing something dangerous. What do you say? Write three.'));
out.push(p('**b**  Put these in order, from the most urgent to the least: _Don\'t touch that. · You shouldn\'t touch that. · I wouldn\'t touch that. · Stop!_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What nearly happens?   **A** a fall   **B** a cut   **C** a fire'));
out.push(p('**b**  Listen again. **1** What does Abu Yasser say first?   **2** What does he say afterwards, and why does it matter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.9  Two seconds in the warehouse', [
  ['Abu Yasser', 'STOP. Don\'t move.'],
  ['Hala', 'What? What is it?'],
  ['Abu Yasser', 'Don\'t step back. There\'s a strap on the floor behind your heel and a pallet edge behind that. Look down. Now step **forward**, towards me.'],
  ['Hala', 'Oh.'],
  ['Abu Yasser', 'Yes. Oh.'],
  ['Hala', 'I\'m sorry.'],
  ['Abu Yasser', 'Don\'t be sorry — you didn\'t put it there. I\'m not angry with you and I want you to hear that, because the next time you see something on the floor I want you to say it out loud even if it isn\'t yours.'],
  ['Hala', 'All right.'],
  ['Abu Yasser', 'And one thing for the future. When somebody shouts stop in this warehouse, don\'t turn round to look. Stop first, ask after. Turning round is how people fall.'],
  ['Hala', 'Stop first, ask after.'],
  ['Abu Yasser', 'Stop first, ask after. Now help me pick up every strap in this aisle, and then we will both have a glass of tea, because my heart is going like a lorry.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – negative imperatives, and what comes after**',
  table(['The two seconds', 'The next twenty seconds'], [
    ['**Stop!** · **Don\'t move.** · **Don\'t touch that.**', 'There\'s a ___ behind you. Look down.'],
    ['**Don\'t step back.**', 'Now step **forward**, towards me.'],
    ['**Watch out!** · **Mind your head.**', 'You didn\'t put it there. I\'m not angry with you.'],
  ], [1.5, 2]),
  '**The shape:** **stop it happening** (two words) → **say why** → **say what to do instead** → **take the blame off the person** → **one rule for next time**.',
  '⚠ The imperative has **no _you_** and no _please_ in an emergency. _Don\'t move_ is two syllables; _could you please not move_ is eight, and the eight syllables are the accident.',
  '⚠ The sentence that matters most is the one **afterwards**: _don\'t be sorry — you didn\'t put it there_. A person who is shouted at and then blamed stops reporting hazards, and the next one is worse.',
  '**Practise:** Give the two-second instruction, then the sentence that comes after.',
  '1 somebody stepping back towards a pallet  2 a hand near a moving belt  3 somebody about to lift alone  4 a child near a hot pan  5 somebody walking into the forklift area',
  '**Useful phrases:**  Stop!  ·  Don\'t move.  ·  Look down.  ·  Step forward, towards me.  ·  You didn\'t put it there.  ·  Stop first, ask after.',
  '**Pronunciation – the urgent voice, and the voice after.** 🔊 **Track 10.10** Listen. The instruction is **short, low and loud**; the sentence afterwards is **quiet and slow**. The change between them is what tells the person they are not in trouble. Repeat both parts of all five.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A nearly does something dangerous; B stops them in two words and then says the four things that come after. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'STOP. Don\'t __________.'],
  ['A', 'What? What is it?'],
  ['B', 'Don\'t __________. There\'s __________ and __________. Look __________. Now __________, towards me.'],
  ['A', 'Oh. I\'m sorry.'],
  ['B', 'Don\'t be sorry — you didn\'t __________. I\'m not angry with you, because __________.'],
  ['A', 'All right.'],
  ['B', 'And one thing for the future. When somebody __________, don\'t __________. __________ first, __________ after.'],
]));
out.push(table(['Role card 1 — a kitchen', 'Role card 2 — a building site'], [[
  'A is about to pick up a pan handle that has been over the flame. Rule for next time: turn handles in, every time, even for a second.',
  'A is walking under a load on a crane while looking at a telephone. Rule for next time: look up before you cross the yard, and never cross while reading.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the moment for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence that took the blame off the person. Did the pair remember it at all?'));
out.push(PHRASE_CARD(['Stop!', 'Don\'t move.', 'Look down.', 'Step forward.', 'You didn\'t put it there.', 'Stop first, ask after.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a real hazard at your workplace or home. Tell **two** colleagues: the two-second instruction, the reason, and the rule for next time. Then listen to theirs.'));
out.push(table(['The hazard', 'The two-second instruction', 'The rule for next time'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _At _______ the danger is _______. You say "_______". The rule is _______._'));
out.push(p('**Listener task:** write the hazard that exists in more than one workplace. Is it the floor?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you don\'t move_ and _please don\'t to touch_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the near-miss note Abu Yasser asks Nour to write, and answer the questions.'));
out.push(box(null, [
  '**NEAR MISS — aisle 3, Tuesday 9 May, 11.20 am**   ·   written by N. Mansour, dictated by Y. Khalil',
  '**What nearly happened.** Hala stepped backwards towards a pallet edge with a loose strap on the floor behind her heel. She was called to stop and she stopped. Nobody was hurt and nothing was damaged.',
  '**Why the strap was there.** Straps are cut off incoming pallets and dropped, and somebody sweeps them up at the end of the day. That has been how it works for years and it has never been written down anywhere, which is why nobody thought it was a problem.',
  '**What we have changed, today.** A bin for cut straps at the end of every aisle. Straps go in the bin as they are cut, not at the end of the day.',
  '**What we have not changed.** Nobody is being blamed and nobody is being told to work more slowly. The pallets are cut where they are cut; only the straps move.',
  '**Note from Y. Khalil.** I shouted. I want it written down that I shouted, and that she did nothing wrong, so that nobody hears about this and thinks she was careless. She stopped when she was told to stop, which is the only thing that mattered in that second.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What was the real cause — the person or the system?'));
out.push(item('2', 'What changed, and what deliberately did not?'));
out.push(item('3', 'Why does Abu Yasser want it written down that he shouted?'));
out.push(box('Writer\'s box', [
  '**Shape of a near-miss note:** **what nearly happened**, plainly → **why it was there**, with the habit behind it → **what we have changed, today** → **what we have not changed**, including who is not being blamed → a note from the person who was there.',
  'Write about **the system, not the person**: _straps are cut off and dropped_ — not _Hala was careless_. A near-miss note that blames somebody is the last one anybody reports.',
  'Change **one thing, today**. A near miss followed by a meeting next month is a near miss followed by an accident.',
  '⚠ If somebody shouted, say so, and say why. Shouting is right in two seconds and frightening afterwards; writing it down turns it from an embarrassment into the reason nobody was hurt.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a near-miss note, real or invented (25 words or more). Use the frame.'));
out.push(p('**NEAR MISS — ______________, ______________**  ·  ______________.  **What nearly happened.** ______________. Nobody was hurt.  **Why it was there.** ______________. That is how it has worked for ______________, and ______________.  **What we have changed, today.** ______________.  **What we have not changed.** Nobody is being blamed. ______________.  **Note from ______________.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person who nearly got hurt, reading it on the noticeboard. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['It describes the system, not a person\'s character', ''],
  ['The habit behind the hazard is named', ''],
  ['One change, made **today**', ''],
  ['A line that clears the person involved', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what we have not changed" line. The class says why that section exists at all.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a near miss you remember — at work, in a car, at home (35 words or more). Say what the real cause was, and whether anything changed afterwards.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _That was close._   ✓ _Did anything change?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did anything change afterwards? In how many was somebody blamed instead?'));
out.push(box('Homework', ['Write your final text. Then walk round your workplace or home and write down **three** hazards nobody has written down, with one change for each (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.6 =======================
out.push(pb());
out.push(h2('10.6  Get well soon — and take your time'));
out.push(p('**Function:** saying the right thing to somebody who is ill or hurt   ·   **Grammar:** fixed phrases   ·   **Pronunciation:** warmth without weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say to somebody who is ill? Write four. Then mark which ones you would say to a **manager** and which to a **close colleague**.'));
out.push(p('**b**  Which of these is unhelpful, and why? _Get well soon. · Take your time. · We really need you back. · Let me know if you need anything._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who telephones Abu Yasser?   **A** Mr Ayoub   **B** Nour   **C** both'));
out.push(p('**b**  Listen again. **1** What does Mr Ayoub tell him **not** to think about?   **2** What does Nour offer that is actually useful?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.11  Two telephone calls', [
  ['Mr Ayoub', 'Abu Yasser. How is it?'],
  ['Abu Yasser', 'It is a back. It will be a back tomorrow as well.'],
  ['Mr Ayoub', 'Take your time. I mean that — don\'t come back and do it again in June.'],
  ['Abu Yasser', 'The stock count is on the fifteenth.'],
  ['Mr Ayoub', 'The stock count has been on the fifteenth for thirty years and it will be there next month too. Don\'t think about the warehouse. That is an instruction, and it is the only one I will give you this year.'],
  ['Abu Yasser', 'Hm.'],
  ['Mr Ayoub', 'Get well soon. And telephone me if the clinic says anything you don\'t like.'],
  ['Nour', 'Abu Yasser? It\'s Nour. Two things, quickly, and then I\'ll go.'],
  ['Abu Yasser', 'Say them.'],
  ['Nour', 'One: Fadi is doing the gate and I have written down everything you told me about the night deliveries, so nobody is guessing. Two: I\'m going past the pharmacy at five. Do you need anything?'],
  ['Abu Yasser', 'The cream, if they have the big one.'],
  ['Nour', 'The big one. I\'ll leave it with your daughter. Take care — and don\'t tidy anything.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – what to say, and what to offer**',
  table(['Warm and empty (fine, but small)', 'Warm and useful (better)'], [
    ['Get well soon.', 'Don\'t think about the warehouse — Fadi is doing the gate.'],
    ['Take care.', 'I\'m going past the pharmacy at five. Do you need anything?'],
    ['I hope you feel better.', 'Take your time — don\'t come back and do it again in June.'],
    ['Let me know if you need anything.', 'I\'ll leave it with your daughter.'],
  ], [1.6, 2]),
  '⚠ _Let me know if you need anything_ puts the work on the ill person. _I\'m going past the pharmacy at five — do you need anything?_ does the work yourself. Both are kind; only one is used.',
  '⚠ Never say _we really need you back_ to somebody who is hurt. It is meant as a compliment and heard as pressure, and it is why people come back too early.',
  '⚠ Tell them **what is covered**. The thing an ill person worries about is not their health; it is what is happening without them.',
  '**Practise:** Turn each warm sentence into a useful one.',
  '1 Let me know if you need anything.  2 Get well soon.  3 Don\'t worry about work.  4 Tell me if I can help.  5 Hope you\'re better soon.',
  '**Useful phrases:**  How is it?  ·  Take your time.  ·  Don\'t think about…  ·  Do you need anything?  ·  I\'ll leave it with…  ·  Take care.',
  '**Pronunciation – warmth without weight.** 🔊 **Track 10.12** Listen. These phrases are said **lightly and quickly**, not slowly and heavily. Said too slowly, _get well soon_ sounds like somebody is dying. Repeat the six, lightly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A telephones somebody who is ill; B is worried about work. A must take the worry away and offer **one** concrete thing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. How is it?'],
  ['B', 'It is __________. It will be __________ tomorrow as well.'],
  ['A', 'Take your time. I mean that — don\'t __________.'],
  ['B', '__________ is on __________.'],
  ['A', '__________ has been on __________ for __________ and it will be there __________. Don\'t think about __________.'],
  ['B', 'Hm.'],
  ['A', 'Two things, quickly. One: __________, so nobody is guessing. Two: I\'m going past __________ at __________. Do you need anything?'],
]));
out.push(table(['Role card 1 — a colleague with flu', 'Role card 2 — a neighbour after an operation'], [[
  'B is worried about the Thursday report and about a customer who only deals with him. A: the report is moved, and the customer has been told who to ask for.',
  'B is worried about the children getting to school and about nobody watering the plants. A: two neighbours have the school run between them; the plants are done every evening.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the **concrete** thing that was offered. Was it an offer or a question?'));
out.push(PHRASE_CARD(['How is it?', 'Take your time.', 'Don\'t think about…', 'Do you need anything?', 'I\'ll leave it with…', 'Take care.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Telephone **three** colleagues who are "ill". Each time, take one worry away with a fact, and offer one concrete thing you are doing anyway. No empty offers.'));
out.push(table(['Who', 'Their worry', 'The fact I gave', 'What I offered'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ was worried about _______. I told him / her _______, and I offered _______._'));
out.push(p('**Listener task:** write the most useful offer you heard. Was it big or small?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _get well soon_ said to somebody who is not ill, and _I hope you are better soon_ in a work email where _take your time_ is meant. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message the office sends Abu Yasser, and answer the questions.'));
out.push(box(null, [
  '**To:** Y. Khalil   **From:** the office   **Subject:** Nothing you need to do',
  'Abu Yasser,',
  'This message needs no reply. We are writing so that you know what is happening and can stop thinking about it.',
  '**The gate:** Fadi, 7.30 every morning. Nour has written down what you told her about the night deliveries and he is following it.',
  '**The stock count:** moved to the 22nd. Mr Ayoub moved it, not you, and nobody asked him to.',
  '**The Homs load:** went on Tuesday, complete, signed at the other end.',
  '**What we need from you:** nothing until the 18th. If the clinic says something you do not like, telephone Mr Ayoub.',
  'Hala says to tell you that she has not stepped backwards once since Tuesday, and that there is a bin at the end of every aisle now.',
  'Take your time. The warehouse will be here, and so will the mess, which we are leaving for you on purpose.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the message say "this message needs no reply"?'));
out.push(item('2', 'What does the last line mean?'));
out.push(item('3', 'Why is Hala\'s sentence in the message?'));
out.push(box('Writer\'s box', [
  '**Shape of a message to somebody who is off ill:** **a subject line that removes the worry** → _this needs no reply_ → each thing they are worrying about, with **who is doing it** → **what we need from you: nothing, until ___** → something from a person, not the company → a close that does not push.',
  'Put _nothing you need to do_ in the **subject line**. The person is reading on a telephone, in bed, and that line is the whole message.',
  'Answer the worries they have **not** written down. You know what they are; they are the three things that person always does.',
  '⚠ The joke at the end — _the mess, which we are leaving for you on purpose_ — says _your job is still yours_ better than any sentence that says it directly. That is the one thing an ill person is really afraid of.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to somebody who is off ill, real or invented (25 words or more). Use the frame.'));
out.push(p('**Subject:** Nothing you need to do.  ______________, This message needs no reply. We are writing so that ______________.  **______________:** ______________.  **______________:** ______________. ______________ did it, not you.  **What we need from you:** nothing until ______________. If ______________, ______________.  ______________ says to tell you ______________.  Take your time. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person reading it in bed, on a telephone. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A subject line that removes the worry', ''],
  ['Each worry answered with a **name**', ''],
  ['_what we need from you: nothing until…_', ''],
  ['Something from a person, not the company', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line. The class says which one would make somebody rest instead of worrying.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were ill or hurt and somebody said or did exactly the right thing — or exactly the wrong one (35 words or more).'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _That was the right thing._   ✓ _What did you need that nobody offered?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect on the board the things people **needed** and nobody offered. How many of them were small?'));
out.push(box('Homework', ['Write your final text. Then write a real message to somebody who is ill, with one fact and one concrete offer, and **send it** (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 10.7 =======================
out.push(pb());
out.push(h2('10.7  Review & Mediate: what does the safety notice say?'));
out.push(p('**Function:** telling a colleague, in simple words, what a safety notice says   ·   **Review:** symptoms · advice · instructions · appointments · imperatives · good wishes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 10 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _since_ or _for_: ______ Tuesday · ______ four days.',
  '**2** The three things to remember about lifting, in three words.',
  '**3** What does _as needed_ always need after it?',
  '**4** The sentence that gets you an earlier appointment.',
  '**5** The sentence that comes **after** you shout "stop".',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Fadi think the notice means?   **A** that he must stop lifting   **B** that he has done something wrong   **C** that there was an accident'));
out.push(p('**b**  Listen again. **1** What is the 25 kg number really for?   **2** What does Nour say about "report immediately"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 10.13  The new safety notice', [
  ['Fadi', 'Nour, there\'s a new notice by the door with numbers on it. Twenty-five kilos. Does that mean I can\'t lift the cement any more?'],
  ['Nour', 'No. Let me tell you what it actually says.'],
  ['Fadi', 'Please.'],
  ['Nour', 'Twenty-five kilos isn\'t a limit on you. It\'s the weight at which you stop lifting **alone**. Over twenty-five, you get somebody — that\'s all it means.'],
  ['Fadi', 'And if nobody is there?'],
  ['Nour', 'Then you wait, or you split the load. Waiting four minutes is cheaper than Abu Yasser\'s ten days, and he could lift anything at your age.'],
  ['Fadi', 'And this line — "report immediately". Report to who? It sounds like trouble.'],
  ['Nour', 'It isn\'t trouble. It means tell Abu Yasser the same hour, not the next morning — because the first ten minutes decide the next ten days. Nobody writes your name anywhere.'],
  ['Fadi', 'Nobody writes my name.'],
  ['Nour', 'Nobody writes your name. The only thing that gets written is what was on the floor and what we changed. We did it last week for Hala and nobody was blamed.'],
  ['Fadi', 'All right. Over twenty-five, get somebody. Hurt, tell him the same hour.'],
  ['Nour', 'That\'s the whole notice. The rest is for the head office.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a safety notice that sounds like a threat**',
  table(['To correct the fear', 'To explain the number', 'To leave them with it'], [
    ['No — let me tell you what it actually says.', 'It isn\'t a limit on **you**. It\'s the weight at which ___ .', 'That\'s the whole notice.'],
    ['It isn\'t trouble. It means ___ .', 'Over ___ , you ___ . That\'s all it means.', 'The rest is for the head office.'],
  ], [1.6, 1.8, 1.5]),
  '⚠ A safety number is nearly always read as a **judgement on the person** — _can\'t I lift that any more?_ Say what the number is **for** before you say what it is.',
  '⚠ _Report immediately_ sounds like discipline to anybody who did not write it. Say **who to**, **when**, and explicitly **what is not** written down.',
  '⚠ End with the **two things that are really theirs**, and say so: _that\'s the whole notice; the rest is for the head office_. It is honest, and it is why they will read the next one.',
  '**Practise:** The notice says: _Manual handling operations exceeding 25 kg require assistance. All injuries, however minor, must be reported immediately to the supervisor._ Say it in easy English for somebody loading a lorry.',
  '**Useful phrases:**  Let me tell you what it actually says.  ·  It isn\'t a limit on you.  ·  That\'s all it means.  ·  It isn\'t trouble.  ·  Nobody writes your name.  ·  That\'s the whole notice.',
  '**Pronunciation – taking the threat out.** 🔊 **Track 10.14** Listen. The correcting sentence is **light and quick**, as if the worry were obviously unnecessary; the instruction afterwards is normal. Said heavily, _it isn\'t trouble_ sounds like it is. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads notice 1 silently and explains it to B, who thinks it is about them. B closes the book. Then swap with notice 2.'));
out.push(table(['Notice 1 — for A', 'Notice 2 — for B'], [[
  '**SAFETY NOTICE — MANUAL HANDLING.** _Manual handling operations involving loads exceeding 25 kg require assistance. Loads which are awkward, unstable or above shoulder height require assistance irrespective of weight. All injuries, however minor, must be reported immediately to the supervisor._',
  '**SAFETY NOTICE — PERSONAL PROTECTIVE EQUIPMENT.** _High-visibility clothing must be worn in all yard areas. Eye protection is mandatory when cutting or grinding. Failure to use provided protective equipment may invalidate insurance cover in the event of an incident._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their notice for the class – **without the book**.'));
out.push(p('**Listener task:** write the **two** things that are really yours. Did the speaker take the threat out of the long sentence at the end?'));
out.push(PHRASE_CARD(['what it actually says', 'It isn\'t a limit on you.', 'That\'s all it means.', 'It isn\'t trouble.', 'Nobody writes your name.', 'That\'s the whole notice.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a safety notice in formal English. Read it silently. Then explain it to **two** colleagues who think it is a criticism. Do not show them the paper.'));
out.push(table(['Who I told', 'What they thought it meant', 'What it actually said'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the notice you mediated. This is the **tenth** unit of this book, and the mediation task comes back in every unit — so listen for the moment the fear was taken out.'));
out.push(p('_It\'s a ______. He / She thought it meant ______. It actually means ______. The two things that are really his / hers are ______ and ______._'));
out.push(p('**Listener task:** add the new office words to the class list from Units 7, 8 and 9.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Loads over 25 kg require assistance._   **A** Do not lift over 25 kg at all. **B** Get somebody to help you with anything over 25 kg. **C** 25 kg is the most anybody can carry.',
  '**2**  _One tablet, twice a day, after food. Complete the course._   **A** Take them until you feel better. **B** Two a day with meals, and finish all of them. **C** Take two tablets after food.',
  '**3**  _Report all injuries, however minor, to the supervisor immediately._   **A** Only report serious injuries. **B** Tell the supervisor about any injury straight away. **C** Report injuries at the end of the week.',
  '**4**  _Abu Yasser — no lifting for 10 days. Can count and write. — clinic_   **A** He cannot come to work. **B** He can work but not lift. **C** He must rest at home for ten days.',
  '**5**  _Eye protection mandatory when cutting or grinding._   **A** Wear goggles for those two jobs. **B** Wear goggles all day. **C** Goggles are optional.',
  '**6**  _Appointment: Tues 9 May 9.00. Bring ID and old X-rays._   **A** Bring papers to a Tuesday morning appointment. **B** The X-rays will be taken there. **C** The appointment is in the afternoon.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about **health**, the three points are usually: **what is wrong** · **what you can or can\'t do** · **what somebody else should do**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Fadi from Abu Yasser. Say: **(1)** his back is strained and he can\'t lift for ten days, **(2)** Fadi must do the lifting, **(3)** Fadi mustn\'t lift anything over 25 kg alone either. Use the frame.'));
out.push(p('Fadi, My back ______________ and the clinic says ______________ for ______ days. Please ______________ while I ______________. And ______________ — don\'t ______________ alone, ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  What is wrong, and for how long', ''], ['2  Fadi does the lifting', ''], ['3  Not over 25 kg alone', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('A friend has hurt themselves and cannot come to something you planned. Write a message (25 words or more). Say: **(1)** that you are sorry and they should rest, **(2)** what you will do about the plan, **(3)** one thing you will bring or do for them.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _Thank you — I feel stupid. Don\'t cancel on my account; go without me and tell me everything._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 10 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  My back ___.   a) hurt   b) hurts   c) is hurting me',
  '2  It\'s been bad ___ Tuesday.   a) for   b) since   c) from',
  '3  You ___ lift that alone.   a) shouldn\'t   b) don\'t should   c) shouldn\'t to',
  '4  One tablet, ___ a day, after food.   a) two times   b) twice   c) second time',
  '5  ___ move!   a) Don\'t   b) You don\'t   c) Not',
  '6  I\'d like to ___ an appointment.   a) do   b) make   c) take',
  '7  Have you got anything ___?   a) more early   b) earlier   c) early more',
  '8  Take your ___.   a) time   b) rest   c) hour',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 10.15** Listen to a call to a clinic. Complete the note.   Name: ______   What\'s wrong: ______   Since: ______   First offered: ______   Appointment: ______'));
out.push(dlg('Track 10.15  Audio script (read after the check)', [
  ['Clinic', 'Mezzeh Clinic, good afternoon.'],
  ['Nour', 'Good afternoon. I\'d like to make an appointment, please — for a colleague. Yasser Khalil, K-H-A-L-I-L.'],
  ['Clinic', 'And what\'s it about?'],
  ['Nour', 'His back. It\'s been bad since Tuesday.'],
  ['Clinic', 'I can give you Thursday at eleven.'],
  ['Nour', 'Have you got anything earlier? He lifts for a living.'],
  ['Clinic', 'There\'s a space tomorrow at nine.'],
  ['Nour', 'Tomorrow at nine, please. Thank you.'],
]));
out.push(p('**C  Writing.** Write a short message to a colleague who is off ill (25+ words). Say one thing that is covered, offer one concrete thing, and tell them to take their time.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 10)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what is wrong, with _since_ and _for_ used correctly',
  '☐ give advice about the body, in three parts with a word to remember',
  '☐ give and check an instruction for medicine, and make somebody say it back',
  '☐ make an appointment, and ask for an earlier one with a reason',
  '☐ stop somebody in two seconds, and say the right thing afterwards',
  '☐ say something useful, not only something kind, to somebody who is ill',
  '☐ tell a colleague in easy English what a safety notice really means for them',
  '☐ write an absence message, a safety card, a written instruction, an appointment note, a near-miss note and a message to somebody off ill',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 10 · Student\'s Book');
