// Proactive Business English A2 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'business trip · travel · flight · airport · departure · platform · single ticket · return ticket · luggage · hotel · front desk · single room · double room · reserve · reservation · check in · check out · breakfast included · Wi-Fi · expenses · exchange rate · per diem · itinerary · visa · border · currency';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 11  Business Travel'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  talk about what you are going to do on a trip',
  '**11.2**  reserve a room, and say exactly what you need',
  '**11.3**  talk about the weather, and plan around it',
  '**11.4**  ask what is and is not included',
  '**11.5**  recommend something to a visitor',
  '**11.6**  read and explain a timetable',
  '**11.7**  Review & Mediate: tell a colleague what the travel plan and the hotel page say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Travelling for Sham Trading — before you start', [
  'Bassel travels most: **Homs** every week, **Aleppo** once a month, **Latakia** when the coast order is big. He sleeps away about six nights a month.',
  'The company pays the room, the travel and a **per diem** for food — 60,000 SYP a day, no receipts needed for that. Everything else needs a receipt, and receipts go to Nadia **within a week**, not at the end of the month.',
  'Nour reserves the rooms and writes the **itinerary**: where, when, who, and what to do if something changes. She has never been on a business trip and she writes the best itineraries in the company, which Bassel says is not a coincidence.',
], C.lyellow, C.orange));

// ======================= CYCLE 11.1 =======================
out.push(pb());
out.push(h2('11.1  I\'m going to visit the Homs branch'));
out.push(p('**Function:** talking about plans   ·   **Grammar:** _going to_   ·   **Pronunciation:** _going to_ /ˈɡənə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write three things you are **going to** do this month — one at work, one at home, one you have been putting off.'));
out.push(p('**b**  Which is a **plan** and which is a **decision made now**? _I\'m going to telephone him tomorrow. · The telephone is ringing — I\'ll get it. · We\'re going to open a second branch. · It\'s heavy — I\'ll help you._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How long is the trip?   **A** one night   **B** two nights   **C** three nights'));
out.push(p('**b**  Listen again. **1** What is Bassel going to do on the second day?   **2** What is he **not** going to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  Planning the Aleppo trip', [
  ['Nour', 'Bassel, the Aleppo trip. I need the plan before I reserve anything.'],
  ['Bassel', 'I\'m going to leave Sunday at six and get there about midday.'],
  ['Nour', 'Two nights or three?'],
  ['Bassel', 'Two. Sunday afternoon I\'m going to see Ms Shamsi — that\'s the wrap price and the new boxes. Monday I\'m going to do the three shops in the old city, and in the afternoon the two new ones on the Idlib road.'],
  ['Nour', 'Five customers in one day.'],
  ['Bassel', 'Five is a lot. If the morning is slow I\'m going to drop the second new one and telephone instead.'],
  ['Nour', 'And Tuesday?'],
  ['Bassel', 'Tuesday I\'m going to leave early and be back here by three, because Mr Ayoub wants the figures the same day.'],
  ['Nour', 'What aren\'t you going to do?'],
  ['Bassel', 'I\'m not going to see the Jabr brothers. They owe us since February and I\'m not going to sit in their office drinking tea about it. That\'s a telephone call from Nadia, not a visit from me.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – going to**',
  table(['+', '–', '?'], [
    ['I**\'m going to** leave at six.', 'I**\'m not going to** see them.', '**Are** you **going to** stay two nights?'],
    ['He**\'s going to** do three shops.', 'She**isn\'t going to** telephone.', 'What **are** you **going to** do on Monday?'],
    ['We**\'re going to** open a branch.', 'They **aren\'t going to** come.', 'What **aren\'t** you **going to** do?'],
  ], [1.4, 1.3, 1.5]),
  '**going to** = a plan you have already made. **will** = a decision you make as you speak: _The telephone\'s ringing — I\'**ll** get it._',
  '⚠ The present continuous (Unit 7) and _going to_ overlap for arrangements. Use the **present continuous** when a time and a person are fixed (_I\'m seeing Ms Shamsi at two_) and **going to** for the shape of a plan (_I\'m going to do the old city on Monday_).',
  '⚠ Say what you are **not** going to do. In a plan, that sentence is often the most useful one in the room.',
  '**Practise:** Complete with _going to_.',
  '1 I ______ (leave) on Sunday at six.  2 He ______ (see) five customers on Monday.  3 We ______ (not stay) three nights.  4 What ______ you ______ (do) on Tuesday?  5 They ______ (not visit) the Jabr brothers.',
  '**Useful phrases:**  I need the plan before I…  ·  Two nights or three?  ·  If the morning is slow, I\'m going to…  ·  What aren\'t you going to do?  ·  That\'s a telephone call, not a visit.',
  '**Pronunciation – going to.** 🔊 **Track 11.2** Listen and repeat: _going to_ /ˈɡənə/ · _I\'m going to leave_ /aɪm ˈɡənə liːv/ · _what are you going to do?_ /wɒtʃə ˈɡənə duː/. Said in full it is correct and slow; said as /ˈɡənə/ it is normal.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A needs a plan; B gives it day by day, including what they are **not** going to do. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. I need the plan before I __________.'],
  ['B', 'I\'m going to leave __________ at __________ and get there about __________.'],
  ['A', '__________ nights or __________?'],
  ['B', '__________. __________ I\'m going to __________. __________ I\'m going to __________, and in the afternoon __________.'],
  ['A', '__________ in one day.'],
  ['B', '__________ is a lot. If __________, I\'m going to __________ instead.'],
  ['A', 'What aren\'t you going to do?'],
  ['B', 'I\'m not going to __________. __________ — that\'s __________, not __________.'],
]));
out.push(table(['Role card 1 — a school trip', 'Role card 2 — a family move'], [[
  'Three days to Palmyra and back. Day 1: travel, settle. Day 2: the site, morning only (heat). Day 3: travel back early. Not going to: the museum in the afternoon, or let anybody walk alone.',
  'Moving a flat over a weekend. Friday: pack the kitchen. Saturday: the van, two trips. Sunday: clean the old flat, hand over the keys. Not going to: move the fridge themselves, or paint before moving in.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their planning for the class – **without the book**.'));
out.push(p('**Listener task:** write the thing they are **not** going to do, and the reason.'));
out.push(PHRASE_CARD(['I\'m going to…', 'Two nights or three?', 'If… , I\'m going to…', 'What aren\'t you going to do?', 'That\'s a… , not a…', 'be back by…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell **three** colleagues your plan for a real trip, weekend or project. Three things you are going to do, one thing you are **not**, and why.'));
out.push(table(['Name', 'Going to…', 'Not going to…', 'Why not'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.5, 1.3, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is going to _______ and _______. He / She isn\'t going to _______, because _______._'));
out.push(p('**Listener task:** write the best "not going to". A good one protects the rest of the plan.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I going to_ and _I will go to Homs on Sunday_ for a fixed plan. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the itinerary Nour writes, and answer the questions.'));
out.push(box(null, [
  '**ITINERARY — Bassel Nassif, Aleppo, Sunday 21 to Tuesday 23 May**',
  '**Sunday.** Leave Mezzeh 06.00 (own car). Arrive about 12.00. Hotel Barron Street, room reserved in your name, check in from 14.00 — they will hold it until 20.00 and I have their number. **14.30** Ms Shamsi, at her office. Wrap price and the new box size.',
  '**Monday.** Morning: three shops in the old city (list attached, in walking order). **13.00** lunch — the per diem covers it. Afternoon: two new shops on the Idlib road. If the morning runs late, drop the second new one; I have told them you may telephone instead.',
  '**Tuesday.** Leave Aleppo by 08.00. Back in Mezzeh by 15.00 — Mr Ayoub has the figures meeting at 16.00.',
  '**Not on this trip:** Jabr Brothers. Nadia is telephoning them on Monday about February.',
  '**If anything changes:** telephone me, not the hotel. My mobile is on this page; if I don\'t answer, extension 212.',
  '**Receipts:** everything except food. Food is the per diem. Give them to Nadia by Friday 26.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Until when will the hotel hold the room?'));
out.push(item('2', 'What should Bassel do if Monday morning runs late?'));
out.push(item('3', 'Which receipts does he need to keep, and by when?'));
out.push(box('Writer\'s box', [
  '**Shape of an itinerary:** a heading per day → **times on the left**, in order → what is **already arranged**, and by whom → the **if** for each day, decided in advance → **not on this trip** → who to telephone when something changes → the money rules.',
  'Decide the **if** before the trip, not during it. _If the morning runs late, drop the second new one_ is a decision made calmly in an office; the same decision made in a car at one o\'clock is made badly.',
  'Say what has **already been done for them**: the room is reserved, the shops have been told. A traveller who has to arrange anything from the road arranges it worse.',
  '⚠ **Telephone me, not the hotel.** One point of contact. A trip with three people to ring is a trip where nobody is rung.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an itinerary for a trip, real or invented (25 words or more). Use the frame.'));
out.push(p('**ITINERARY — ______________, ______________ to ______________**  **______________.** Leave ______ ( ______ ). Arrive about ______. ______________, reserved ______________. **______** ______________.  **______________.** Morning: ______________. Afternoon: ______________. If ______________, ______________.  **______________.** Leave by ______. Back by ______.  **Not on this trip:** ______________.  **If anything changes:** ______________.  **Receipts:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "I could travel on this. There\'s no _if_ for Monday — what happens if the first shop takes two hours?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Be the traveller, at six in the morning. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Times, in order, on every day', ''],
  ['At least one _if_, decided in advance', ''],
  ['A _not on this trip_ line', ''],
  ['**One** person to telephone', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _if_ lines. The class says which one would actually be followed on the road.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a journey you are going to make, or would like to make (35 words or more). Say what you are going to do, what you are not going to do, and what you would change if the weather or the money were different.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I would come with you._   ✓ _What are you not going to do?_   ? _a question about the trip_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Whose plan has the most room in it for something to go wrong?'));
out.push(box('Homework', ['Write your final text. Then write your real plan for the next seven days: five things you are going to do and three you are deliberately not (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.2 =======================
out.push(pb());
out.push(h2('11.2  A single room for two nights'));
out.push(p('**Function:** reserving a room   ·   **Grammar:** _a / an_, numbers, nights   ·   **Pronunciation:** confirming a reservation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you have to say to reserve a room? Write six things.'));
out.push(p('**b**  _a_ or _an_? _______ single room · ______ hour · ______ early check-in · ______ receipt · ______ extra bed'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour ask for that the hotel does not offer at first?   **A** breakfast   **B** a quiet room   **C** a receipt'));
out.push(p('**b**  Listen again. **1** How many nights, and which?   **2** What two things does Nour ask at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  Reserving the room', [
  ['Hotel', 'Hotel Barron Street, good afternoon.'],
  ['Nour', 'Good afternoon. I\'d like to reserve a single room for two nights, please — Sunday the twenty-first and Monday the twenty-second.'],
  ['Hotel', 'Two nights, checking out Tuesday morning. In which name?'],
  ['Nour', 'Bassel Nassif. N-A-S-S-I-F. It\'s a company reservation — Sham Trading, Damascus.'],
  ['Hotel', 'We have a single at thirty-five thousand a night.'],
  ['Nour', 'Is breakfast included?'],
  ['Hotel', 'Breakfast is included. Wi-Fi as well.'],
  ['Nour', 'Thank you. Two things. He arrives about midday — can you hold the room until eight in the evening if he\'s late?'],
  ['Hotel', 'Until eight, yes. Write it on the reservation.'],
  ['Nour', 'And a quiet room, if you have one. Not on the street side — he has an early start on Tuesday.'],
  ['Hotel', 'I can give you the fourth floor, at the back.'],
  ['Nour', 'The fourth floor at the back. So: Bassel Nassif, two nights, the twenty-first and twenty-second, single, thirty-five thousand, breakfast included, held until eight, quiet side. Could you send me that by message?'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – reserving a room**',
  table(['Step', 'What you say'], [
    ['The ask', 'I\'d like to **reserve a single room for two nights**, please.'],
    ['Which nights', '**Sunday the 21st and Monday the 22nd** — not "two nights from Sunday".'],
    ['The name', '**In the name of** Bassel Nassif. N-A-S-S-I-F.'],
    ['Who is paying', 'It\'s a **company reservation** — Sham Trading.'],
    ['What is included', '**Is breakfast included?** Is there Wi-Fi?'],
    ['The two extras', 'Can you **hold the room until** eight? A **quiet** room, if you have one.'],
    ['The record', 'Could you **send me that by message**?'],
  ], [1.1, 2.4]),
  '⚠ Name the **dates**, not the number of nights alone. "Two nights from Sunday" is read differently by different people, and the argument happens at midnight.',
  '⚠ **a** before a consonant **sound**, **an** before a vowel **sound**: _a single room_ · _an hour_ · _an early check-in_ · _a receipt_.',
  '⚠ Ask for the confirmation **in writing**. A reservation that exists only in a telephone call exists only for one of the two people.',
  '**Practise:** Reserve each one in three sentences.',
  '1 a double room, three nights, 14–16 June  2 a single, one night, tonight, late arrival  3 two singles, same floor, Thursday  4 a room with an extra bed for a child  5 a quiet room, a week, company reservation',
  '**Useful phrases:**  I\'d like to reserve…  ·  In which name?  ·  Is breakfast included?  ·  Can you hold the room until…?  ·  if you have one  ·  Could you send me that by message?',
  '**Pronunciation – confirming a reservation.** 🔊 **Track 11.4** Listen. The confirmation is said as **one long list with small stops**, falling only at the end: _Bassel Nassif ‖ two nights ‖ the twenty-first and twenty-second ‖ single ‖ breakfast included ‖ held until eight._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A reserves; B offers the basic room and must be asked for the extras. Then swap.'));
out.push(dlg(null, [
  ['B', '__________, good __________.'],
  ['A', 'Good __________. I\'d like to reserve __________ for __________, please — __________ and __________.'],
  ['B', '__________. In which name?'],
  ['A', '__________. __________. It\'s a company reservation — __________.'],
  ['B', 'We have __________ at __________ a night.'],
  ['A', 'Is __________ included?'],
  ['B', '__________.'],
  ['A', 'Thank you. Two things. __________ — can you __________? And __________, if you have one.'],
  ['B', 'I can give you __________.'],
  ['A', 'So: __________. Could you send me that by message?'],
]));
out.push(table(['Role card 1 — a small hotel in Latakia', 'Role card 2 — a guest house in Homs'], [[
  'Singles 40,000, doubles 55,000. Breakfast 8,000 extra (not included). Wi-Fi only in the lobby. Will hold a room until 18.00 if asked. Sea side is noisy at night in summer.',
  'One price, 30,000, everything included. No single rooms — only doubles, used as singles. Hot water 6–9 am and 6–10 pm only. Will send a message if asked twice.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write what was **not** included. Was the caller told, or did they have to ask?'));
out.push(PHRASE_CARD(['I\'d like to reserve…', 'In which name?', 'Is breakfast included?', 'Can you hold it until…?', 'if you have one', 'send me that by message']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Reserve **three** things with three colleagues (back to back) — a room, a table, a repair appointment. Each time ask **two** extras and ask for it in writing.'));
out.push(table(['What', 'Dates / times', 'The two extras I asked for', 'In writing?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.8, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I reserved _______ for _______. I asked for _______ and _______. They _______ send it in writing._'));
out.push(p('**Listener task:** write the best "extra" anybody asked for. Would you have thought of it?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _a hour_ and _I want a room_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the confirmation email Nour sends to the hotel, and answer the questions.'));
out.push(box(null, [
  '**To:** Hotel Barron Street   **From:** Nour Mansour, Sham Trading   **Subject:** Reservation — Nassif, 21–22 May (2 nights), confirmation',
  'Dear colleagues,',
  'Thank you for the room. In writing, so that we both have the same page:',
  '**Guest:** Bassel Nassif (N-A-S-S-I-F)   **Company:** Sham Trading Co., Damascus',
  '**Nights:** Sunday 21 and Monday 22 May — **two nights**, checking out Tuesday 23 in the morning.',
  '**Room:** single, 35,000 SYP a night. Breakfast and Wi-Fi included. Fourth floor, back of the building (quiet side).',
  '**Arrival:** about midday. Please **hold the room until 20.00** if he is delayed on the road.',
  '**Payment:** the company pays. Please make the invoice to Sham Trading Co. and give it to Mr Nassif on paper at check-out — we need it for our accounts.',
  'If anything here is different from your record, please tell me this week rather than on the day.',
  'Nour Mansour, extension 212',
], 'FFFFFF', C.navy));
out.push(item('1', 'What two things are included in the price?'));
out.push(item('2', 'Why does Nour want the invoice on paper at check-out?'));
out.push(item('3', 'What does she ask the hotel to do if their record is different?'));
out.push(box('Writer\'s box', [
  '**Shape of a reservation confirmation:** a subject line with the **name, dates and nights** → _in writing, so that we both have the same page_ → guest and company → **nights, spelled out as dates** → room and price, with what is **included** → arrival and how long it is held → **who pays and how the invoice is to be given** → an invitation to correct it, with a date.',
  'Write the number of nights **and** the check-out day. Most hotel arguments are one of the two parties counting nights and the other counting days.',
  'Say **how you want the invoice**: paper or email, to whom, and when. An expense claim without the right paper is a month of messages.',
  '⚠ _Tell me this week rather than on the day._ A reservation that is wrong is cheap to fix on Tuesday and expensive to fix at eleven at night in another city.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reservation confirmation, real or invented (25 words or more). Use the frame.'));
out.push(p('**Subject:** Reservation — ______________, ______ to ______ ( ______ nights), confirmation.  Dear ______________, Thank you for ______________. In writing, so that we both have the same page:  **Guest:** ______________  **Company:** ______________.  **Nights:** ______________ — ______ nights, checking out ______________.  **Room:** ______________. ______________ included.  **Arrival:** ______________. Please hold until ______.  **Payment:** ______________.  If anything is different, please tell me ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the hotel, with fifty reservations. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dates **and** number of nights **and** check-out day', ''],
  ['What is included, named', ''],
  ['Who pays, and how the invoice is given', ''],
  ['A deadline for corrections', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their subject lines. The class says which could be filed without opening.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a place you have stayed — good or bad (35 words or more). Say what was included, what was not, and what you would ask before reserving it again.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I would / wouldn\'t stay there._   ✓ _What would you ask next time?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect on the board the questions people would ask next time. Which of them would you never have thought of before you needed it?'));
out.push(box('Homework', ['Write your final text. Then write the five questions you will ask the next time you reserve anything — a room, a car, a hall, a table (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.3 =======================
out.push(pb());
out.push(h2('11.3  It\'s very cold in Aleppo in January'));
out.push(p('**Function:** talking about the weather, and planning around it   ·   **Grammar:** _it\'s_ + adjective   ·   **Pronunciation:** weather words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe the weather where you are, right now, in three sentences. Then describe it in August.'));
out.push(p('**b**  Match: _Aleppo in January · Deir ez-Zor in July · Latakia in November · Damascus in April_   →   _wet and grey · very hot, 45° · cold, sometimes snow · dry and pleasant_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with the trip?   **A** the hotel   **B** the weather   **C** the customer'));
out.push(p('**b**  Listen again. **1** What is the weather going to be like?   **2** What does Bassel change?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  The weather on the Aleppo road', [
  ['Nour', 'Bassel, I\'ve looked at the weather for Sunday. It\'s going to rain all day in the north.'],
  ['Bassel', 'Rain I can drive in.'],
  ['Nour', 'It isn\'t only rain. It\'s going to be very cold at night — two or three degrees — and it\'s foggy on that road when it\'s cold and wet.'],
  ['Bassel', 'The fog is the problem, not the rain.'],
  ['Nour', 'That\'s what I thought.'],
  ['Bassel', 'Then I\'m going to leave at five, not six. The fog lifts at about nine; if I\'m past Hama by then I\'m in it for two hours instead of four.'],
  ['Nour', 'In the dark?'],
  ['Bassel', 'In the dark on an empty road is better than at nine on a full one in fog. And I\'m going to take the big coat — the hotel is old and the heating in those buildings is a decoration.'],
  ['Nour', 'I\'ll tell Ms Shamsi you may be late for half past two.'],
  ['Bassel', 'Tell her I may be late. Don\'t tell her I will be — she\'ll go out.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – talking about the weather**',
  table(['Pattern', 'Example'], [
    ['**It\'s** + adjective', '**It\'s** cold. · **It\'s** foggy. · **It\'s** very hot.'],
    ['**It\'s** + verb**-ing**', '**It\'s raining**. · **It\'s snowing**.'],
    ['**It\'s going to** + verb', '**It\'s going to rain** all day.'],
    ['**It\'s going to be** + adjective', '**It\'s going to be** very cold at night.'],
    ['Temperature', 'two or three **degrees** · forty-five **degrees**'],
    ['**What\'s the weather like**…?', 'What\'s it **like** in Aleppo in January?'],
  ], [1.5, 2.2]),
  '⚠ The subject is **it**, always, and it cannot be left out: _**It**\'s cold_, not ~~is cold~~.',
  '⚠ _rain_ is both a noun and a verb: _**It\'s raining**_ (verb) · _I can drive in **the rain**_ (noun). Do not say ~~it\'s rain~~.',
  '⚠ At work, weather is only interesting when it **changes a plan**. Say the weather, then say what you are going to do about it.',
  '**Practise:** Say the weather, then the change of plan.',
  '1 rain all day  2 very hot, 45°  3 fog in the morning  4 snow on the Aleppo road  5 wind on the coast',
  '**Useful phrases:**  I\'ve looked at the weather.  ·  It\'s going to be…  ·  The fog is the problem, not the rain.  ·  Then I\'m going to…  ·  the heating is a decoration  ·  I may be late — not I will be.',
  '**Pronunciation – weather words.** 🔊 **Track 11.6** Listen and repeat: _weather_ /ˈweðə/ · _whether_ — the same sound · _foggy_ /ˈfɒɡi/ · _degrees_ /dɪˈɡriːz/ · _thunder_ /ˈθʌndə/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reports the weather; B works out which part is the real problem and changes the plan. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I\'ve looked at the weather for __________. It\'s going to __________.'],
  ['B', '__________ I can __________.'],
  ['A', 'It isn\'t only __________. It\'s going to be __________ — __________ — and __________.'],
  ['B', '__________ is the problem, not __________.'],
  ['A', 'That\'s what I thought.'],
  ['B', 'Then I\'m going to __________, not __________. __________; if __________ then __________.'],
  ['A', '__________?'],
  ['B', '__________ is better than __________. And I\'m going to take __________.'],
]));
out.push(table(['Role card 1 — a wedding outdoors', 'Role card 2 — a delivery to the coast'], [[
  'Forecast: hot, 38°, and windy in the evening. The heat is survivable with shade; the wind will take the lights and the tent sides. Change: move the tables under the trees and drop the tent sides.',
  'Forecast: heavy rain on the mountain road, clear on the coast. The rain is fine; the problem is that the load is paper and the cover is torn. Change: a new cover, or go the long way on the dry road.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write which part of the weather was the **real** problem. Was it the obvious one?'));
out.push(PHRASE_CARD(['I\'ve looked at the weather.', 'It\'s going to be…', '…is the problem, not…', 'Then I\'m going to…', 'if… then…', 'I may be late.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues what the weather does to their work — the heat, the rain, the wind, the cold. Find out what they change because of it.'));
out.push(table(['Name', 'The weather', 'What it stops', 'What they change'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.2, 1.4, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When it\'s _______, _______ can\'t _______. He / She _______ instead._'));
out.push(p('**Listener task:** write the month that is hardest for most of the class. Is it the hot one or the wet one?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _is very cold today_ with no _it_, and _it\'s rain_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Nour adds to the itinerary, and answer the questions.'));
out.push(box(null, [
  '**ADDED TO THE ITINERARY — weather, Sunday 21 May**',
  '**What is forecast.** Rain all day in the north. Two to three degrees at night. Fog on the Hama–Aleppo road between about five and nine in the morning.',
  '**What that changes.** Departure moves from 06.00 to **05.00**. Two hours in fog instead of four, and the road is empty in the dark.',
  '**What it does not change.** The Shamsi meeting stays at 14.30. I told her you **may** be late — not that you will be — so she will wait rather than go out.',
  '**Take:** the big coat — the hotel is old and the heating in those buildings is a decoration. And something waterproof for Monday: the old city is all alleys.',
  '**If the fog is worse than forecast:** stop. Telephone me from wherever you stop, and I will move the 14.30 to 16.00. Do not drive in fog to keep an appointment that I can move in one telephone call.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does the departure move an hour earlier?'));
out.push(item('2', 'Why did Nour say "may be late" rather than "will be late"?'));
out.push(item('3', 'What is the instruction if the fog is worse than forecast?'));
out.push(box('Writer\'s box', [
  '**Shape of a weather note:** **what is forecast**, with numbers and times → **what that changes** → **what it does not change** → **what to take** → **if it is worse than forecast**, with a clear instruction.',
  'Separate **what changes** from **what does not**. A weather warning that does not say what stays the same makes people re-plan everything.',
  'Be precise about what you have told other people: _she may be late, not will be_. The difference decides whether somebody waits in an office or goes out.',
  '⚠ The last section is the only one that matters on the day: **give permission to stop**. _Do not drive in fog to keep an appointment that I can move in one telephone call_ is the whole note.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a weather note for a trip or an event (25 words or more). Use the frame.'));
out.push(p('**WEATHER — ______________**  **What is forecast.** ______________.  **What that changes.** ______________ moves from ______ to ______. ______________.  **What it does not change.** ______________. I have told ______________ that ______________.  **Take:** ______________.  **If it is worse than forecast:** ______________. Do not ______________ to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the person travelling, at five in the morning in bad weather. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbers and times in the forecast', ''],
  ['What changes **and** what does not', ''],
  ['What to take', ''],
  ['Permission to stop, in plain words', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last section. The class says which one would make somebody actually stop.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the weather in your own town, month by month, for somebody who has never been (35 words or more). Say which month is hardest and what people do about it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _Now I know when not to come._   ✓ _What do people do in…?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Do people describe the weather, or what the weather does to them? Which is more useful to a visitor?'));
out.push(box('Homework', ['Write your final text. Then write eight sentences about what you are going to do differently this summer because of the heat (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.4 =======================
out.push(pb());
out.push(h2('11.4  Is breakfast included?'));
out.push(p('**Function:** asking what is and is not included   ·   **Grammar:** yes/no questions   ·   **Pronunciation:** rising yes/no questions'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Write five _Is there…?_ / _Is… included?_ questions you would ask about a hotel room.'));
out.push(p('**b**  Which question gets more? _Is breakfast included?_ or _What\'s included?_ Say both out loud and decide.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Bassel?   **A** at the front desk   **B** on the telephone   **C** in a shop'));
out.push(p('**b**  Listen again. **1** What is **not** included?   **2** What does the receptionist suggest instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  At the front desk', [
  ['Receptionist', 'Mr Nassif. Room 412, fourth floor, at the back as requested.'],
  ['Bassel', 'Thank you. A few questions. Is breakfast included?'],
  ['Receptionist', 'Included. Six thirty to ten, ground floor.'],
  ['Bassel', 'Six thirty — good. Is there Wi-Fi in the room, or only downstairs?'],
  ['Receptionist', 'In the room. The password is on the card.'],
  ['Bassel', 'Is there hot water all day?'],
  ['Receptionist', 'All day, but it is better in the morning than at eleven at night.'],
  ['Bassel', 'That is an honest answer and I will remember it. Is parking included?'],
  ['Receptionist', 'The car park is full until Tuesday. There is a paid one behind the building — four thousand a night.'],
  ['Bassel', 'Is it safe?'],
  ['Receptionist', 'It is. But if you leave at five, the man with the key is not there before six. Park in the street in front; it is under the camera and I am at this desk all night.'],
  ['Bassel', 'That is the most useful thing anybody has told me today.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking what is included**',
  table(['Question', 'Why it matters'], [
    ['**Is breakfast included?**', 'the commonest extra charge'],
    ['**Is there** Wi-Fi in the room, or only downstairs?', 'the _or_ makes a vague yes impossible'],
    ['**Is there** hot water all day?', 'the honest answer is usually "yes, but…"'],
    ['**Is parking included?**', 'often the biggest surprise on the invoice'],
    ['**Is it safe?**', 'ask it plainly; people answer it plainly'],
    ['**What time is check-out?**', 'ask before you need to know'],
  ], [1.6, 2]),
  '⚠ Add **or** to a yes/no question and you cannot be given a vague yes: _Is there Wi-Fi **in the room, or only downstairs**?_',
  '⚠ The useful information usually comes **after** the answer: _yes, but it is better in the morning_ · _it is safe, but the man with the key is not there before six._ Leave a silence after the answer and it arrives.',
  '**Practise:** Ask each one with **or**, so that a vague yes is impossible.',
  '1 Wi-Fi  2 breakfast  3 parking  4 hot water  5 the invoice',
  '**Useful phrases:**  A few questions.  ·  Is… included?  ·  Is there…, or only…?  ·  That is an honest answer.  ·  Is it safe?  ·  That is the most useful thing anybody has told me today.',
  '**Pronunciation – rising yes/no questions.** 🔊 **Track 11.8** Listen. A yes/no question **rises** at the end: _Is breakfast in↗cluded?_ A question with _or_ rises on the first part and **falls** on the second: _in the ↗room, or only ↘downstairs?_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks six questions at a desk; B answers honestly, including one "yes, but". Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', '__________. __________, as requested.'],
  ['A', 'Thank you. A few questions. Is __________ included?'],
  ['B', '__________. __________.'],
  ['A', 'Is there __________, or only __________?'],
  ['B', '__________.'],
  ['A', 'Is there __________ all day?'],
  ['B', 'All day, but __________.'],
  ['A', 'That is an honest answer. Is __________ included?'],
  ['B', '__________. There is __________ — __________.'],
  ['A', 'Is it safe?'],
  ['B', 'It is. But __________.'],
]));
out.push(table(['Role card 1 — a rented flat', 'Role card 2 — a car hire'], [[
  'Included: water, the cleaner once a week. Not included: electricity, gas, the internet. Yes-but: the water is on all day, but the pump is off between one and four.',
  'Included: insurance, one driver. Not included: the second driver, fuel, crossing the border. Yes-but: the spare wheel is there, but there is no jack and nobody checks.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the "yes, but". Did the asker leave a silence long enough for it to arrive?'));
out.push(PHRASE_CARD(['A few questions.', 'Is… included?', 'Is there…, or only…?', 'All day, but…', 'Is it safe?', 'That\'s an honest answer.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Interview **three** colleagues about something they pay for — a flat, a service, a subscription. Find **one** thing they thought was included and is not.'));
out.push(table(['What they pay for', 'What is included', 'What they thought was included'], [['', '', ''], ['', '', ''], ['', '', '']], [1.3, 1.5, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ pays for _______. _______ is included, but _______ isn\'t — and he / she only found out when _______._'));
out.push(p('**Listener task:** write the thing most often **not** included. Is it the same thing everywhere?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Is included the breakfast?_ and _It has Wi-Fi?_ Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour keeps and updates after every trip, and answer the questions.'));
out.push(box(null, [
  '**HOTELS WE USE — what is actually included**   ·   kept by Nour, updated after every trip',
  '**Barron Street, Aleppo** — single 35,000. Breakfast ✓ (6.30–10). Wi-Fi ✓ in the room. Parking ✗ — 4,000 behind the building, but the key-holder is not there before six; park in the street under the camera instead. Hot water: better in the morning. **Invoice on paper at check-out if you ask.** Good for an early start.',
  '**Al-Waha, Homs** — single 28,000. Breakfast ✗ (7,000 extra; the café opposite is 3,000 and better). Wi-Fi ✓ lobby only. Parking ✓. Quiet. **They will not give a company invoice** — Bassel pays and claims. Remember to ask for a receipt **at the time**.',
  '**Sea View, Latakia** — single 45,000 (June–Sept 70,000). Breakfast ✓. Wi-Fi ✓. Parking ✓. **The sea side is noisy until two in summer** — ask for the back.',
  '_Add to this page after every trip, even when nothing went wrong. The things that are not included are learned once and forgotten by the next person._',
], 'FFFFFF', C.navy));
out.push(item('1', 'Where should you park at the Barron Street hotel, and why?'));
out.push(item('2', 'What must Bassel remember to do at the Homs hotel?'));
out.push(item('3', 'Why does the page ask to be updated even when nothing went wrong?'));
out.push(box('Writer\'s box', [
  '**Shape of a "what is actually included" page:** one block per place → price → each thing with **✓ or ✗** → the **yes-but** in words → what to do about it → one line on what the place is good for.',
  'Ticks and crosses are read in two seconds; sentences are not. Use them, and put the explanation **after** the cross, not instead of it.',
  'Record **what to do**, not only what is wrong: _park in the street under the camera instead_. A list of complaints is not a useful page.',
  '⚠ Update it when **nothing** went wrong. The whole value of a page like this is that it is written by somebody who has just learned something, for somebody who has not — and the day it stops being updated it starts going out of date.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "what is actually included" page for places or services you know (25 words or more). Use the frame.'));
out.push(p('**______________ — what is actually included**  ·  ______________.  **______________** — ______________. ______________ ✓. ______________ ✗ — ______________, but ______________; ______________ instead. **______________.** Good for ______________.  **______________** — ______________. ______________ ✗ ( ______________ ). **______________.** Remember to ______________.  _Add to this page ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be somebody using it for the first time, tonight. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Ticks and crosses, not sentences, for the basics', ''],
  ['Every cross says what to do instead', ''],
  ['At least one "yes, but"', ''],
  ['A line on what each place is good for', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one block. The class says which detail they would not have discovered for a year.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you paid for where the price was not the price (35 words or more). Say what was not included, how you found out, and what you would ask now.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The same thing happened to me._   ✓ _What would you ask now?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the questions on the board. Build the class\'s own "ask before you pay" list, and copy it.'));
out.push(box('Homework', ['Write your final text. Then take one real bill or contract you have at home and write down everything that is **not** included in it (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.5 =======================
out.push(pb());
out.push(h2('11.5  You should see the old city'));
out.push(p('**Function:** recommending something   ·   **Grammar:** _You should…_ for recommendations   ·   **Pronunciation:** the enthusiastic recommendation'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A visitor has **one free evening** in your town. Where do you send them, and why? Write three sentences.'));
out.push(p('**b**  Which recommendation is more useful? _You should see the old city._ or _You should walk through the old city at about six, when the shops are open and it isn\'t hot._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How much free time has the visitor got?   **A** an evening   **B** a day   **C** a weekend'));
out.push(p('**b**  Listen again. **1** What does Bassel recommend first?   **2** What does he tell her **not** to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  One free evening in Aleppo', [
  ['Ms Shamsi', 'My cousin is coming from Damascus on Thursday. She has one evening. What should she do?'],
  ['Bassel', 'One evening. Then I\'d do one thing properly, not three things badly.'],
  ['Ms Shamsi', 'Which one thing?'],
  ['Bassel', 'She should walk in the old city at about six — not at four, it\'s still hot, and not at eight, half the shops are shutting. Start at Bab Antakya and walk slowly. The walking is the thing; there is nothing to go and see at the end of it.'],
  ['Ms Shamsi', 'And to eat?'],
  ['Bassel', 'She should eat where the people who live there eat. Anywhere with a menu in three languages, she should walk past.'],
  ['Ms Shamsi', 'That is a rule I will remember.'],
  ['Bassel', 'And one thing she shouldn\'t do: she shouldn\'t try to do the citadel as well. It deserves a morning, and she would be looking at her watch the whole time.'],
  ['Ms Shamsi', 'Better to come back.'],
  ['Bassel', 'Better to come back. Tell her: one evening, one place, walk slowly.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – recommending**',
  table(['Pattern', 'Example'], [
    ['**You should** + verb', '**You should walk** in the old city.'],
    ['**You shouldn\'t** + verb', '**You shouldn\'t try** to do the citadel as well.'],
    ['**I\'d** + verb (= I would)', '**I\'d do** one thing properly, not three badly.'],
    ['**It\'s worth** + **-ing**', '**It\'s worth getting** up early for it.'],
    ['**Don\'t miss…**', '**Don\'t miss** the bread shop on the corner.'],
    ['The useful addition: **when** and **why**', 'at about six — not at four, it\'s still hot',],
  ], [1.5, 2.2]),
  '⚠ A recommendation without a **time** and a **reason** is a name on a list. _You should see the old city_ is a guidebook; _at about six, when the shops are open and it isn\'t hot_ is a friend.',
  '⚠ Add **one thing not to do**. It is usually more useful than the recommendation, and people remember it.',
  '**Practise:** Recommend each one with a time and a reason.',
  '1 a market  2 a place to eat  3 a walk  4 a view  5 something to buy',
  '**Useful phrases:**  What should she do?  ·  I\'d do one thing properly.  ·  not at four — it\'s still hot  ·  …she should walk past  ·  one thing she shouldn\'t do  ·  Better to come back.',
  '**Pronunciation – the enthusiastic recommendation.** 🔊 **Track 11.10** Listen. A real recommendation has a **wider voice** than ordinary speech — it goes up and comes down further. Flat, it sounds like duty. Repeat the five, twice: once flat, once meaning it.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a visitor with limited time; B recommends **one** thing properly, with a time, a reason and one thing not to do. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ is coming from __________. He / She has __________. What should he / she do?'],
  ['B', '__________. Then I\'d do __________, not __________.'],
  ['A', 'Which one thing?'],
  ['B', 'He / She should __________ at about __________ — not at __________, __________, and not at __________, __________. __________ is the thing.'],
  ['A', 'And to eat?'],
  ['B', 'He / She should __________. Anything __________, he / she should __________.'],
  ['A', 'That is a rule I will remember.'],
  ['B', 'And one thing he / she shouldn\'t do: __________. __________, and __________.'],
]));
out.push(table(['Role card 1 — one evening in your town', 'Role card 2 — one day with children'], [[
  'A business visitor with one evening and no car. They want to see something real, not a monument, and to eat well without a long journey.',
  'A family with two children, aged six and nine, one day, in the heat of July. They need shade, water, and something the children can touch.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **time** and the **reason**. Then write the thing not to do.'));
out.push(PHRASE_CARD(['What should she do?', 'I\'d do one thing properly.', 'at about six — not at four', '…she should walk past', 'one thing she shouldn\'t do', 'Better to come back.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Recommend **your** town to three colleagues: one thing, with a time and a reason, and one thing not to do. Then listen and write down the best three recommendations in the room.'));
out.push(table(['Name', 'Their town', 'The one thing, with a time', 'Not to do'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1, 2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______ you should _______ at about _______, because _______. You shouldn\'t _______._'));
out.push(p('**Listener task:** write the one place in the room you would most like to go, and say which sentence decided it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _you should to go_ and _it\'s worth to see_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the half-page Bassel writes for visiting customers, and answer the questions.'));
out.push(box(null, [
  '**IF YOU HAVE ONE EVENING IN ALEPPO**   ·   written by a man who has had about forty of them',
  '**Do one thing.** One evening is one thing. Three things in one evening is a photograph album and no memory.',
  '**The one thing: walk in the old city, starting about six.** Not four — still hot, and shuttered. Not eight — half of it is closing. Start at Bab Antakya and go slowly, with no destination. There is nothing to arrive at. The walking is the thing.',
  '**Eat where the people who live there eat.** A menu in three languages is a menu for people who are leaving tomorrow. Ask somebody who works nearby, not somebody at a hotel desk.',
  '**Buy one thing, not six.** What you buy in a hurry you give away; what you spend twenty minutes choosing you keep for thirty years.',
  '**What not to do:** don\'t add the citadel. It is worth a whole morning and it is not worth forty minutes with one eye on the time. Come back for it; there are worse reasons to return to a city.',
  '**And:** take water, wear shoes you have walked in before, and tell somebody where you are going — not for safety, but so that somebody at home can picture you.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does Bassel say not to add the citadel?'));
out.push(item('2', 'What does he say about buying things?'));
out.push(item('3', 'Why should you tell somebody where you are going?'));
out.push(box('Writer\'s box', [
  '**Shape of a recommendation page:** the **principle** first (_do one thing_) → **the one thing**, with the time and the reasons for and against other times → one rule about food → one rule about money → **what not to do**, with the reason → the practical last lines.',
  'Give the **principle**, not only the list. _One evening is one thing_ is worth more than ten places, because it tells the reader how to use their own judgement.',
  'Say **why not** at the other times. _Not four — still hot. Not eight — half of it is closing._ That is local knowledge, and it is the only thing a visitor cannot get from anywhere else.',
  '⚠ The last line should be human. _So that somebody at home can picture you_ is why people keep a page like this, and why they pass it on.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write "if you have one evening in ___" for your own town (25 words or more). Use the frame.'));
out.push(p('**IF YOU HAVE ONE ______ IN ______________**  ·  ______________.  **Do one thing.** ______________.  **The one thing: ______________, at about ______.** Not ______ — ______________. Not ______ — ______________. ______________ is the thing.  **Eat ______________.** ______________.  **What not to do:** don\'t ______________. ______________, and ______________.  **And:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be a visitor who arrives this evening with no plan. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A principle, not only a list', ''],
  ['A **time**, with why not earlier and why not later', ''],
  ['One thing not to do, with its reason', ''],
  ['Something only a local would know', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "one thing". The class votes on where they would go, and says which sentence decided them.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about somewhere you have been that you would send somebody to, or somewhere you would warn them away from (35 words or more). Say what you would tell them before they went.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I want to go._   ✓ _What time of year?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the pages on the wall. Which recommendation was most specific? Is specific the same as useful?'));
out.push(box('Homework', ['Write your final page. Then write the same recommendation for somebody who has **three days** instead of one evening (20+ words). What changes — the places, or the advice?'], C.lblue, C.navy));

// ======================= CYCLE 11.6 =======================
out.push(pb());
out.push(h2('11.6  The bus leaves at seven'));
out.push(p('**Function:** reading and explaining a timetable   ·   **Grammar:** present simple for timetables   ·   **Pronunciation:** times in a timetable'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which tense? _The bus ______ (leave) at seven every morning. · I ______ (meet) Ms Shamsi at two on Tuesday. · It ______ (rain) all day on Sunday._'));
out.push(p('**b**  Read these aloud: _06.45 · 13.20 · 17.05 · 22.30 · 00.15_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which bus does Bassel choose?   **A** the 06.00   **B** the 07.30   **C** the 13.00'));
out.push(p('**b**  Listen again. **1** How long does the 07.30 take?   **2** Why does he not take the first one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  Reading the bus timetable', [
  ['Bassel', 'Nour, the car is at the garage until Thursday. Is there a bus to Homs on Tuesday?'],
  ['Nour', 'There are four. The first leaves at six and arrives at eight fifteen.'],
  ['Bassel', 'Six is before the garage opens — I can\'t leave the keys.'],
  ['Nour', 'Then the second. It leaves at half past seven and takes two and a half hours — it arrives at ten.'],
  ['Bassel', 'Two and a half? The first one takes two and a quarter.'],
  ['Nour', 'The first is the direct one. The half past seven stops at Nabk.'],
  ['Bassel', 'Ten o\'clock is fine. My first customer opens at ten thirty.'],
  ['Nour', 'And coming back: there\'s one at one and one at five. The one o\'clock gets in at quarter past three; the five o\'clock gets in at quarter past seven.'],
  ['Bassel', 'The one o\'clock. If I finish early I\'ll wait at the station rather than miss it — and if I don\'t finish, I take the five.'],
  ['Nour', 'I\'ll write both on the sheet. Tickets at the station, or do they sell on the bus?'],
  ['Bassel', 'At the station, and on a Tuesday you don\'t have to come early.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple for timetables**',
  table(['Use the **present simple** for', 'Example'], [
    ['buses, trains, flights, opening hours', 'The bus **leaves** at seven. · It **arrives** at ten.'],
    ['anything on a printed schedule', 'The shop **opens** at eight. · The film **starts** at nine.'],
    ['**not** for your own arrangements', '_I\'m meeting her at two_ (Unit 7), not ~~I meet her at two~~.'],
  ], [1.6, 2.2]),
  '**The four facts of any timetable:** **leaves** · **arrives** · **takes** (how long) · **stops** (or _direct_).',
  '⚠ _It takes two and a half hours_ — _take_ for duration, _leave_ and _arrive_ for the ends.',
  '⚠ The **direct** one is not always the quickest and the first is not always the best. Read all four facts before choosing.',
  '**Practise:** Make the four sentences for each service.',
  '1 06.00 → 08.15, direct  2 07.30 → 10.00, stops at Nabk  3 13.00 → 15.15, direct  4 17.00 → 19.15, direct  5 the shop, 08.30–16.00, Thursday to 14.00',
  '**Useful phrases:**  Is there a bus to…?  ·  It leaves at… and arrives at…  ·  It takes…  ·  It stops at…  ·  Tickets at the station?  ·  you don\'t have to come early',
  '**Pronunciation – times in a timetable.** 🔊 **Track 11.12** Listen and repeat: _06.45_ _oh six forty-five_ · _13.20_ _thirteen twenty_ · _17.05_ _seventeen oh five_ · _00.15_ _double oh fifteen_. In speech people also say _quarter to seven_ and _twenty past one_; both are right, but on a timetable read the digits.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A needs to travel; B reads the timetable and gives all four facts for each option. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________. Is there a __________ to __________ on __________?'],
  ['B', 'There are __________. The first leaves at __________ and arrives at __________.'],
  ['A', '__________ is __________ — I can\'t __________.'],
  ['B', 'Then the second. It leaves at __________ and takes __________ — it arrives at __________.'],
  ['A', '__________? The first one takes __________.'],
  ['B', 'The first is the direct one. The __________ stops at __________.'],
  ['A', '__________ is fine. __________.'],
  ['B', 'And coming back: there\'s one at __________ and one at __________.'],
]));
out.push(table(['Role card 1 — a train timetable', 'Role card 2 — a ferry and a bus'], [[
  '08.00→11.30 direct · 09.15→13.45 stops twice · 14.00→17.30 direct · 18.30→23.00 stops four times, cheapest. Return: 06.00 and 16.00 only.',
  'Ferry 07.00 (1 h), then bus from the port at 08.30 (2 h). Or the long bus all the way, 06.30, 5 h, no change. Last ferry back 18.00; last bus 20.00.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the four facts for the service they chose. Was the quickest one chosen?'));
out.push(PHRASE_CARD(['Is there a bus to…?', 'It leaves at…', 'It arrives at…', 'It takes…', 'It stops at…', 'the direct one']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain a real timetable you know — a bus, a service route, a shop, a clinic — to **two** colleagues. Give all four facts, and one piece of advice that is not in the timetable.'));
out.push(table(['The service', 'Leaves / opens', 'Takes', 'The advice not in the timetable'], [['', '', '', ''], ['', '', '', '']], [1.2, 1.2, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ leaves at _______ and arrives at _______. It takes _______. What the timetable doesn\'t say is _______._'));
out.push(p('**Listener task:** write the advice that is not in any timetable. That is the whole value of asking a person.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _the bus is leaving at seven_ for a timetable. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the travel page Nour writes for the trip, and answer the questions.'));
out.push(box(null, [
  '**GETTING TO HOMS AND BACK — Tuesday 30 May**   ·   the car is at the garage',
  '**Going.** The 07.30 from the Pullman station. It takes two and a half hours (it stops at Nabk) and arrives at 10.00. Your first customer opens at 10.30, so you have thirty minutes and the station is ten minutes from the market.',
  '**Not the 06.00.** It is direct and it is quicker, but it leaves before the garage opens and you cannot leave the keys.',
  '**Coming back.** Two buses: 13.00, in at 15.15; or 17.00, in at 19.15. **Take the 13.00 if you can.** If you finish at 12.15, wait at the station — waiting forty minutes is better than the 17.00, which puts you home at eight.',
  '**Tickets** at the station, not on the bus. On a Tuesday you do not need to come early; on a Thursday you would.',
  '**What the timetable does not say:** the back is noisier and the front has the sun on that road all morning. Sit in the middle, on the left.',
  '**If you miss the 13.00:** telephone me before you buy a 17.00 ticket. There is sometimes a service going back empty at about two, and it costs less.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why is the 06.00 not an option, even though it is quicker?'));
out.push(item('2', 'Where should Bassel sit, and why?'));
out.push(item('3', 'What should he do if he misses the 13.00?'));
out.push(box('Writer\'s box', [
  '**Shape of a travel page:** **going**, with all four facts and the connection at the other end → **why not the obvious one** → **coming back**, with a recommendation and the reason → tickets → **what the timetable does not say** → **if it goes wrong**.',
  'Do the **arithmetic for the reader**: _arrives at 10.00, your customer opens at 10.30, the station is ten minutes away_. A timetable gives times; a travel page gives the thirty minutes.',
  'Say **why not** the option they would otherwise choose. Without that line they will take the 06.00 and find the garage shut.',
  '⚠ _What the timetable does not say_ is the section that could not be written by anybody who has not done the journey. Where you have that knowledge, it is the most valuable thing on the page.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a travel page for a journey you know (25 words or more). Use the frame.'));
out.push(p('**GETTING TO ______________ AND BACK — ______________**  **Going.** The ______ from ______________. It takes ______ ( ______________ ) and arrives at ______. ______________, so ______________.  **Not the ______.** ______________, but ______________.  **Coming back.** ______ or ______. **Take the ______ if you can.** ______________.  **Tickets** ______________.  **What the timetable does not say:** ______________.  **If ______________:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be somebody making the journey tomorrow for the first time. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four facts: leaves, arrives, takes, stops', ''],
  ['The arithmetic done for the reader', ''],
  ['Why **not** the obvious option', ''],
  ['Something the timetable does not say', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what the timetable does not say". The class says which they would be most glad to have known.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a journey you have made many times (35 words or more). Say what you know about it that is not written anywhere, and who told you.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I will use that._   ✓ _How did you find that out?_   ? _a question about the journey_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the unwritten knowledge on the board. How much of it was learned from a person, and how much the hard way?'));
out.push(box('Homework', ['Write your final text. Then write a travel page for somebody coming to visit **you**, from the nearest big city, with all four facts and one thing the timetable does not say (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review & Mediate: the travel plan and the hotel page'));
out.push(p('**Function:** telling a colleague, in simple words, what a travel plan and a hotel page say   ·   **Review:** _going to_ · reservations · weather · included · recommending · timetables'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _going to_ or _will_: a plan you made yesterday, and a decision you make now.',
  '**2** Three things to ask when you reserve a room.',
  '**3** Why add _or_ to a yes/no question?',
  '**4** What must a recommendation have besides the place?',
  '**5** The four facts of a timetable.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is travelling for the first time?   **A** Hala   **B** Fadi   **C** Nadia'));
out.push(p('**b**  Listen again. **1** What does Hala not understand about the per diem?   **2** What is the one thing she must not forget?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  Hala\'s first trip', [
  ['Hala', 'Nour, you\'ve written me two pages and I\'ve read them three times. Can you just tell me?'],
  ['Nour', 'I can. The two pages are for when you\'re there. Now I\'ll tell you the four things.'],
  ['Hala', 'Four. Good.'],
  ['Nour', 'One: the bus is the 07.30, you arrive at ten, and the hotel holds your room until eight at night, so nothing can go wrong with the arriving.'],
  ['Hala', 'Two?'],
  ['Nour', 'Two: breakfast is included, Wi-Fi is included, parking isn\'t — but you haven\'t got a car, so forget parking.'],
  ['Hala', 'Three?'],
  ['Nour', 'Three: the per diem. Sixty thousand a day for food. It isn\'t money you have to account for and it isn\'t money you have to spend — if you eat for twenty, the rest is yours. That\'s what "per diem" means, and nobody ever explains it.'],
  ['Hala', 'Nobody ever explained it to me.'],
  ['Nour', 'And four, the only one you can get wrong: **every receipt except food**, in one envelope as you get them. Nadia wants them by Friday.'],
  ['Hala', 'One envelope, by Friday.'],
  ['Nour', 'Everything else on those two pages is so that you don\'t have to telephone me — not so that you have to read it.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a long document for somebody who is nervous**',
  table(['To reduce it', 'To explain the money word', 'To mark the one that matters'], [
    ['The two pages are for when you\'re there. Now I\'ll tell you the ___ things.', '"___" means ___ . Nobody ever explains it.', 'And ___ , which is the only one you can get wrong: ___ .'],
    ['One: ___ . Two: ___ .', 'It isn\'t money you have to ___ and it isn\'t money you have to ___ .', 'Everything else is there so that you don\'t have to telephone me.'],
  ], [1.6, 1.8, 1.8]),
  '⚠ **Number them.** A nervous person can hold four numbered things and cannot hold two pages. Say how many there are **before** you start.',
  '⚠ Explain the **money word** honestly and completely. _Per diem_, _expenses_, _advance_ and _allowance_ are the words people are most afraid to ask about, because asking sounds like asking about money.',
  '⚠ Name the **one that can go wrong** and say so plainly. If everything is equally important, nothing is remembered.',
  '**Practise:** The sheet says: _A per diem of 60,000 SYP is payable for subsistence; receipts are not required. All other expenditure must be supported by receipts, submitted within seven days._ Say it in easy English for somebody travelling for the first time.',
  '**Useful phrases:**  Now I\'ll tell you the four things.  ·  One:… Two:…  ·  …and nobody ever explains it.  ·  the only one you can get wrong  ·  so that you don\'t have to telephone me',
  '**Pronunciation – numbering out loud.** 🔊 **Track 11.14** Listen. Each number is said **clearly, with a stop after it**: _One. ‖ The bus is the seven thirty._ The stop is what makes it countable. Repeat the four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads document 1 silently and reduces it to four numbered things for B, who is nervous. B closes the book. Then swap with document 2.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**TRAVEL AND SUBSISTENCE POLICY.** _Standard class travel is reimbursed in full on production of receipts. A per diem of 60,000 SYP is payable for subsistence; receipts are not required for this element. Accommodation is booked centrally and invoiced to the company. All other expenditure must be supported by original receipts, submitted within seven days of return. Expenditure not supported by receipts will not be reimbursed._',
  '**HOTEL INFORMATION.** _Check-in is from 14.00; rooms held until 20.00 unless otherwise arranged. Check-out by 12.00. Breakfast is served 06.30–10.00 and is included in the room rate. Complimentary Wi-Fi is available in all rooms. Parking is not included; a public car park is located to the rear. Guests requiring an invoice for company purposes must notify reception on arrival._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their document for the class – **without the book**.'));
out.push(p('**Listener task:** write the four things, numbered, and mark the one that can go wrong.'));
out.push(PHRASE_CARD(['I\'ll tell you the four things.', 'One:…', '"___" means…', 'nobody ever explains it', 'the only one you can get wrong', 'so you don\'t have to telephone me']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a long document in formal English. Read it silently. Then reduce it to **four numbered things** for two colleagues. Do not show them the paper.'));
out.push(table(['Who I told', 'My four things', 'The one that can go wrong'], [['', '', ''], ['', '', '']], [1, 2.4, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document you reduced. This is the **eleventh** unit of this book, and the mediation task comes back in every unit — so listen for the number said at the start.'));
out.push(p('_It\'s a ______. There are four things. One: ______. Two: ______. Three: ______. And four, the only one you can get wrong: ______._'));
out.push(p('**Listener task:** add the new office words to the class list from Units 7 to 10.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Check-in from 14.00; rooms held until 20.00._   **A** You must arrive at two. **B** You can arrive any time between two and eight. **C** The hotel closes at eight.',
  '**2**  _Breakfast included. Parking not included._   **A** You pay for breakfast. **B** You pay for parking, not breakfast. **C** Both are free.',
  '**3**  _Per diem 60,000 — receipts not required for this element._   **A** Keep food receipts. **B** No receipts needed for food. **C** Food is not paid for.',
  '**4**  _Receipts must be submitted within seven days of return._   **A** Hand them in within a week of coming back. **B** Keep them for seven days. **C** Receipts are not needed.',
  '**5**  _The 06.00 is direct; the 07.30 stops at Nabk._   **A** The 07.30 is quicker. **B** The 06.00 does not stop on the way. **C** Both are direct.',
  '**6**  _Guests requiring an invoice must notify reception on arrival._   **A** Ask for the invoice when you arrive. **B** The invoice comes by email. **C** No invoices are given.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about **travel**, the three points are usually: **when and how you are travelling** · **where you are staying** · **one thing you need or will do**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Hala before her first trip. Say: **(1)** the bus is at 7.30 and she arrives at ten, **(2)** breakfast and Wi-Fi are included but parking is not, **(3)** she must keep every receipt except food, in one envelope. Use the frame.'));
out.push(p('Dear Hala, Your bus is at ______ and you ______________ at ______. At the hotel, ______________ and ______________ are included, but ______________ isn\'t. Please keep ______________ — ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  The bus and the arrival time', ''], ['2  What is and is not included', ''], ['3  Receipts, except food, in one envelope', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('You are going to visit a friend in another city. Write a message (25 words or more). Say: **(1)** when you are arriving and how, **(2)** how long you are going to stay, **(3)** one thing you would like to do there.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _I\'ll meet you at the station. Two nights isn\'t long — we should do the old city on the first evening, before you are tired._'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  I ___ leave on Sunday at six.   a) going to   b) \'m going to   c) will going to',
  '2  We ___ stay three nights — only two.   a) aren\'t going to   b) don\'t going to   c) not going to',
  '3  I\'d like to reserve ___ single room.   a) an   b) a   c) the',
  '4  It ___ very cold at night.   a) going to be   b) \'s going to be   c) will be going',
  '5  ___ breakfast included?   a) Is   b) Does   c) Has',
  '6  You ___ walk in the old city at about six.   a) should to   b) should   c) shoulds',
  '7  The bus ___ at seven every morning.   a) is leaving   b) leaves   c) going to leave',
  '8  It ___ two and a half hours.   a) takes   b) is taking   c) makes',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 11.15** Listen to a reservation call. Complete the note.   Name: ______   Nights: ______   Room: ______   Included: ______   Held until: ______'));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Hotel', 'Hotel Barron Street, good afternoon.'],
  ['Nour', 'Good afternoon. I\'d like to reserve a single room for two nights, please — Sunday the twenty-first and Monday the twenty-second.'],
  ['Hotel', 'In which name?'],
  ['Nour', 'Bassel Nassif, N-A-S-S-I-F. A company reservation.'],
  ['Hotel', 'A single is thirty-five thousand a night.'],
  ['Nour', 'Is breakfast included?'],
  ['Hotel', 'Breakfast and Wi-Fi.'],
  ['Nour', 'Can you hold the room until eight in the evening? He arrives about midday but the road is long.'],
  ['Hotel', 'Until eight. I\'ll write it on the reservation.'],
]));
out.push(p('**C  Writing.** Write a short travel message to a colleague (25+ words). Say how and when you are travelling, where you are staying, and one thing you need from them.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say what I am going to do, and what I am deliberately not going to do',
  '☐ reserve a room, ask for two extras and get it in writing',
  '☐ talk about the weather, and say what I am going to change because of it',
  '☐ ask what is included, with _or_, so that a vague yes is impossible',
  '☐ recommend one thing properly, with a time and a reason',
  '☐ read a timetable and give all four facts',
  '☐ reduce a long travel document to four numbered things for a nervous colleague',
  '☐ write an itinerary, a reservation confirmation, a weather note, an "actually included" page, a recommendation page and a travel page',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
