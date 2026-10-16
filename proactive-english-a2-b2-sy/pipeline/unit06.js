// Proactive English A2 · Syria Edition · Book 1 · Unit 6 — Student's Book
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

out.push(h1('Unit 6  Getting Around'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**6.1**  ask how to get to places',
  '**6.2**  buy tickets',
  '**6.3**  ask for travel information (how long, how far)',
  '**6.4**  give reasons and say why you do things',
  '**6.5**  make and answer suggestions',
  '**6.6**  explain signs and rules',
  '**6.7**  Review & Mediate: explain a station announcement',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Al-Amir Travel** – the bus company at the Damascus garage (Damascus → Homs, Aleppo, Latakia).',
  '**Jamal** – a minibus (service) driver on the Mezzeh line.   ·   **Nadia** – Rami\'s colleague at the Kafr Sousa school site.',
], C.lyellow, C.orange));

// ======================= 6.1 =======================
out.push(pb());
out.push(h2('6.1  How do I get to the university?'));
out.push(p('**Function:** asking about transport   ·   **Grammar:** _by bus / on foot_; _take / get / catch_   ·   **Pronunciation:** /əʊ/ _go, don\'t, road_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you travel in your city? How do people travel between cities? Your teacher writes the class\'s ideas on the board.'));
out.push(board('I go to work by minibus.', 'Take the number 5 bus.'));
out.push(p('**b**  Which word? _bus · minibus (service) · taxi · train · car · bicycle · on foot_   Which is the cheapest in your city? Which is the fastest?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does Lama want to go?   **A** to the university   **B** to the Old City   **C** to the airport'));
out.push(p('**b**  Listen again. **1** How much is the minibus?   **2** Why doesn\'t Lama walk?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.1  At the minibus stop', [
  ['Lama', 'Excuse me, does this minibus go to the Old City?'],
  ['Woman', 'No, it doesn\'t. This one goes to Mezzeh. You need the Bab Touma service.'],
  ['Lama', 'Oh. Where do I get it?'],
  ['Woman', 'Cross the road and wait at the second stop. The driver shouts "Bab Touma!" – you can\'t miss it.'],
  ['Lama', 'How much is it?'],
  ['Woman', 'Two thousand. Have the money ready – you give it to the driver.'],
  ['Lama', 'Thank you. How long does it take?'],
  ['Woman', 'About twenty-five minutes, but at this time maybe forty. The traffic is terrible.'],
  ['Lama', 'Can I walk?'],
  ['Woman', 'You can, but it\'s a long way – about an hour on foot. And it\'s very hot today!'],
  ['Lama', 'You\'re right. I\'ll take the service. Thank you so much!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – talking about transport**',
  table(['by + transport', 'on foot', 'verbs'], [['**by** bus / minibus / taxi / train / car / bike  ⚠ no _the_, no _a_: _I go **by bus**._', 'I go **on foot**. / I **walk**.', '**take** the bus · **get** the number 5 · **catch** the train (= be in time for it) · **miss** the bus']], [1.3, 0.8, 1.6]),
  'Questions: _**Does** this bus **go to** the Old City?_ · _**How do I get to** the university?_ · _**Where do I get** it?_ · _How much **is** it?_',
  '⚠ _get **to**_ a place: _How do I get **to** the station?_  But: _get **on** / **off**_ a bus.',
  '**Practise:** Complete with _by, on, to_ or _–_.  1 I go to work ______ minibus.  2 How do I get ______ the airport?  3 She goes ______ foot every day.  4 We usually take ______ the number 7 bus.  5 My brother comes ______ car.',
  '**Useful phrases:** Does this bus go to…? · Where do I get it? · You can\'t miss it. · Have the money ready. · The traffic is terrible. · It\'s a long way. · You\'re right.',
  '**Pronunciation.** 🔊 **Track 6.2** /əʊ/ – your lips move from "o" to "u": _go · don\'t · road · slow · nobody · home_. Listen and repeat: _I don\'t go home on the slow road._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about transport, B is a local person with the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Excuse me, does this __________ go to __________?'],
  ['B', 'No, it doesn\'t. This one goes to __________. You need __________.'],
  ['A', 'Where do I get it?'],
  ['B', '__________.'],
  ['A', 'How much is it? And how long does it take?'],
  ['B', '__________. About __________ minutes.'],
  ['A', 'Thank you so much!'],
]));
out.push(table(['Card A – to the airport', 'Card B – to Tishreen Park'], [['airport bus from the garage · 15,000 SYP · 45 minutes · taxi 100,000 and faster', 'number 7 bus from the main street · 2,000 SYP · 20 minutes · or 30 minutes on foot']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the transport, the price and the time.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner **how you get to this class** – every step: on foot, by minibus, by car? How long does each step take? Then ask them about their journey. Then find a new partner and ask how to get from here to **their** home.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s journey:  _Hiba walks for ten minutes to the main street. Then she takes the Mezzeh service – it costs two thousand. She gets off at the pharmacy and walks for five minutes. It takes about forty minutes._'));
out.push(p('**Listener task:** who has the longest journey? Who comes on foot?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Omar\'s message to a new colleague. Answer the questions.'));
out.push(model([
  'Hi Samer! Welcome to TechCare. Here\'s how to get to the office from the bus garage.',
  'Take the Mezzeh service – it leaves from the first platform and costs 2,000. Tell the driver you want Al-Hamra Street. The journey takes about 25 minutes, but in the morning it can take 40, so leave early!',
  'Get off at the big pharmacy on the corner. Then walk up Al-Hamra Street for about five minutes. Our building is on the left, opposite a bank. We\'re on the fourth floor – there\'s a lift.',
  'If the traffic is very bad, a taxi from the garage is about 35,000 and takes 15 minutes.',
  'See you on Sunday! Omar',
]));
out.push(item('1', 'Where does the Mezzeh service leave from?'));
out.push(item('2', 'Why should Samer leave early?'));
out.push(item('3', 'What is the other option?'));
out.push(writers([
  'A travel instructions message: **greeting** → **which transport** (+ where it leaves from, price) → **how long** → **where to get off** → **the last part on foot** → **another option** → **friendly ending**.',
  'Use **imperatives** (Unit 3): _Take… Tell… Get off… Walk…_',
  'Give a **warning** about time or traffic: _…so leave early!_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______! Here\'s how to get to ______________ from ______________.   Take ______________ – it ______________ and costs ______. The journey takes about ______, but ______________, so ______________.   Get off at ______________. Then walk ______________. ______________ is ______________.   If ______________, a taxi is about ______ and takes ______.   See you ______! ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_by bus / on foot_ used correctly', 'Each instruction starts with a verb', 'All parts: transport, price, time, where to get off, other option']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('A friend from another city is coming to visit you. Write a message explaining how to get from the bus garage (or station) to your home or workplace (60 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **visitor**. ★ _Very clear!_  ✓ _Can you add the price?_  ? _What if I arrive at night?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Listeners say: could you find the place?'));
out.push(hw('Write the visitor\'s reply (25+ words): say when you arrive, ask **one** question about the journey, and ask the person to meet you if you get lost.'));

// ======================= 6.2 =======================
out.push(pb());
out.push(h2('6.2  A return to Aleppo, please'));
out.push(p('**Function:** buying tickets   ·   **Grammar:** _single / return_; _I\'d like… / How much is…?_ (recycle)   ·   **Pronunciation:** sentence stress in prices and times'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What tickets do you buy? (bus, train, cinema, match…) What do you ask when you buy a bus ticket?'));
out.push(board('A return to Homs, please.', 'Ticket: Damascus – Homs · 20,000 SYP'));
out.push(p('**b**  Match: _single · return · platform · seat number · luggage_  →  the number of your place · a bag or suitcase · one way only · there and back · where the bus waits'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When does Rami travel?   **A** today   **B** tomorrow morning   **C** Friday'));
out.push(p('**b**  Listen again. **1** Single or return?   **2** How much does he pay?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.3  At the Al-Amir Travel desk', [
  ['Clerk', 'Good morning. Where are you travelling to?'],
  ['Rami', 'Aleppo, please. Have you got a bus tomorrow morning?'],
  ['Clerk', 'Yes, we have buses at seven, nine and eleven.'],
  ['Rami', 'The nine o\'clock one, please. A single or a return… how much is a return?'],
  ['Clerk', 'A single is forty-five thousand and a return is eighty thousand.'],
  ['Rami', 'A return, then. I\'m coming back on Sunday.'],
  ['Clerk', 'Sunday at what time? The last bus from Aleppo leaves at six.'],
  ['Rami', 'Six is fine. Can I change the time later?'],
  ['Clerk', 'Yes, but you must call us one day before. Here\'s your ticket – seat 14, platform 3.'],
  ['Rami', 'Thank you. Is there a place for luggage?'],
  ['Clerk', 'Yes, under the bus. Please be here twenty minutes early.'],
  ['Rami', 'OK. Thanks a lot.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Buying a ticket**',
  table(['Customer', 'Clerk'], [['A **single** to Homs, please. · A **return** to Aleppo, please. · Two tickets for the nine o\'clock bus. · How much is a return? · Can I change the time? · Is there a place for luggage?', 'Where are you travelling to? · When would you like to travel? · Single or return? · Seat 14, platform 3. · Please be here twenty minutes early.']], [1.2, 1]),
  '**single** = one way (→)   **return** = there and back (→ ←)',
  '**must** = it\'s necessary (a rule): _You **must call** us one day before._ (more in Unit 9)',
  '**Practise:** Put the conversation in order.  ___ A return, please.  ___ Where are you travelling to?  ___ Here\'s your ticket. Platform 2.  ___ Latakia, please.  ___ Single or return?  ___ Thank you!',
  '**Useful phrases:** Have you got a bus at…? · The nine o\'clock one, please. · …, then. · Can I change it later? · Thanks a lot.',
  '**Pronunciation.** 🔊 **Track 6.4** Stress the important information: _A re**TURN** to a**LEP**po, please._ · _**SEAT** four**TEEN**, platform **THREE**._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the clerk with the timetable, B is the customer with the card. Then swap.'));
out.push(table(['AL-AMIR TRAVEL – PRICES', ''], [['Damascus – Homs', 'single 20,000 · return 35,000 · buses 7:00, 9:30, 12:00, 15:00, 18:30'], ['Damascus – Aleppo', 'single 45,000 · return 80,000 · buses 7:00, 9:00, 11:00, 22:00'], ['Damascus – Latakia', 'single 30,000 · return 55,000 · buses 8:00, 11:00, 14:00, 17:00']], [1, 2.4], { headFill: C.orange }));
out.push(dlg(null, [
  ['A', 'Good morning. Where are you travelling to?'],
  ['B', '__________, please. Have you got a bus __________?'],
  ['A', 'Yes, we have buses at __________.'],
  ['B', 'The __________ one, please. How much is a return?'],
  ['A', 'A single is __________ and a return is __________.'],
  ['B', '__________, then. I\'m coming back __________.'],
  ['A', 'Here\'s your ticket – seat __________, platform __________.'],
  ['B', 'Thank you!'],
]));
out.push(table(['Customer card A', 'Customer card B'], [['Latakia · tomorrow afternoon · return, coming back Friday · asks about luggage', 'Homs · today, the earliest bus · single · asks how long it takes']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the destination, the time, single or return, and the price.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Plan a **real** trip for next month: where, when, how? Your partner is the ticket clerk and invents the times and prices. Buy your ticket. Then swap. Change partners and buy a different ticket – this time something is a problem (no seats on that bus, the price went up, the bus leaves at 5 am…).'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq wants to go to Suwayda for his cousin\'s wedding. He bought a return for sixty thousand. The bus leaves at eight on Friday and comes back on Sunday evening. There were no seats on the morning bus, so he takes the afternoon one._'));
out.push(p('**Listener task:** who is going the furthest? Who had a problem?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Rami\'s booking confirmation message. Answer the questions.'));
out.push(model([
  '**AL-AMIR TRAVEL – BOOKING CONFIRMED**',
  '**Passenger:** Rami Khoury   **Booking number:** AM-4471',
  '**Out:** Damascus → Aleppo · Saturday 18 October · 09:00 · Platform 3 · Seat 14',
  '**Back:** Aleppo → Damascus · Sunday 19 October · 18:00 · Seat 22',
  '**Price:** 80,000 SYP (return) – PAID',
  'Please arrive 20 minutes before the bus leaves. One suitcase is free; extra luggage costs 5,000. To change your ticket, call 011 334 5566 at least one day before. We do not give money back after the bus leaves.',
]));
out.push(item('1', 'What is Rami\'s seat number on the way back?'));
out.push(item('2', 'How much is extra luggage?'));
out.push(item('3', 'What happens if you miss the bus?'));
out.push(writers([
  'A booking confirmation: **title** → **passenger + booking number** → **Out / Back** (place, date, time, platform, seat) → **price + paid** → **rules** (arrive early, luggage, changes, refunds).',
  'Information lines are **short** (no full sentences), but the rules at the end are **full sentences**.',
  'Dates: _Saturday 18 October_. Times: 09:00 or 9 am.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – BOOKING CONFIRMED**   **Passenger:** ______________   **Booking number:** ______________   **Out:** ______ → ______ · ______________ · ______ · Seat ______   **Back:** ______ → ______ · ______________ · ______   **Price:** ______ – PAID   Please ______________. ______________ is free; ______________ costs ______. To change your ticket, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days, months) and full stops', 'Short information lines + full sentences for the rules', 'Dates and times are clear', 'All parts: passenger, number, out, back, price, rules']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a booking confirmation for the trip you planned in Stage 4 – for a bus, a train or a flight (50 words or more). Add **two** rules of your own.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s confirmation as the **passenger**. ★ _Everything is clear!_  ✓ _Can you add the platform?_  ? _Can I take two bags?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two confirmations are read aloud. The class finds one piece of missing information.'));
out.push(hw('Write a message to the travel company (25+ words): you want to **change** your ticket. Say your booking number, the problem and the new day or time you want.'));

// ======================= 6.3 =======================
out.push(pb());
out.push(h2('6.3  How long does it take?'));
out.push(p('**Function:** asking for travel information   ·   **Grammar:** _How long / How far / How often_; _It takes…_   ·   **Pronunciation:** 13 / 30 stress'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How long is your journey to work or college? How far is it? Make a class list of questions travellers ask.'));
out.push(board('How long does it take?', 'Journey time: about 2 hours'));
out.push(p('**b**  Which question? _How long…? · How far…? · How often…? · How much…?_   → every 20 minutes · 45 kilometres · 90 minutes · 30,000 SYP'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Mr Lang going?   **A** to Aleppo   **B** to Palmyra   **C** to Bosra'));
out.push(p('**b**  Listen again. **1** How far is it?   **2** How long does the visit take?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.5  Planning a day trip', [
  ['Mr Lang', 'Lina, I have a free day on Friday. I\'d like to see something outside Damascus.'],
  ['Lina', 'Then you should visit Bosra. The Roman theatre there is amazing.'],
  ['Mr Lang', 'How far is it from Damascus?'],
  ['Lina', 'About a hundred and thirty kilometres, in the south.'],
  ['Mr Lang', 'And how long does it take?'],
  ['Lina', 'About two hours by car, maybe two and a half by bus.'],
  ['Mr Lang', 'How often do the buses go?'],
  ['Lina', 'Every hour in the morning, I think. But for one day, a taxi is easier. The driver waits for you.'],
  ['Mr Lang', 'How much does that cost?'],
  ['Lina', 'About two hundred thousand for the whole day. You can share it with someone.'],
  ['Mr Lang', 'And how long do people usually stay there?'],
  ['Lina', 'Two or three hours is enough for the theatre and the old city. So you can leave at eight and be back at four.'],
  ['Mr Lang', 'Perfect. Would you like to come?'],
  ['Lina', 'I\'d love to! Let\'s ask Maya too.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – travel questions**',
  table(['Question', 'Answer'], [
    ['**How long** does it take?', 'It **takes** about two hours. / About 25 minutes.'],
    ['**How far** is it (from Damascus)?', 'It\'s about 130 kilometres. / It\'s 20 minutes away.'],
    ['**How often** do the buses go?', '**Every** hour. / Three times a day.'],
    ['**How much** does it cost?', 'It costs about 200,000.'],
    ['**What time** does it leave / arrive?', 'It leaves at 8 and arrives at 10.'],
  ], [1, 1.4]),
  '**It takes** + time: _It **takes** two hours **by** bus._  With a person: _It takes **me** forty minutes to get to work._',
  '**leave** (= go away from a place) ≠ **arrive** (= come to a place): _The bus **leaves** Damascus at 8 and **arrives in** Aleppo at 12._  ⚠ arrive **in** a city, arrive **at** a station / the airport.',
  '**Practise:** Write the question.  1 ______? – It takes about an hour.  2 ______? – It\'s 45 kilometres.  3 ______? – Every twenty minutes.  4 ______? – It arrives at half past six.  5 ______? – Thirty thousand pounds.',
  '**Useful phrases:** I have a free day on… · You should visit… · …, I think. · for the whole day · That\'s enough for… · Would you like to come?',
  '**Pronunciation.** 🔊 **Track 6.6** Stress: **THIR**teen (13) / **THIR**ty (30) · four**TEEN** (14) / **FOR**ty (40) · fif**TEEN** (15) / **FIF**ty (50). Listen: is it 13 or 30? Then say the numbers to your partner.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about the trip on the card, B answers. Then swap.'));
out.push(dlg(null, [
  ['A', 'I\'d like to visit __________. How far is it?'],
  ['B', 'About __________ kilometres.'],
  ['A', 'How long does it take?'],
  ['B', 'About __________ by __________.'],
  ['A', 'How often do the buses go?'],
  ['B', '__________.'],
  ['A', 'And how much does it cost?'],
  ['B', '__________.'],
]));
out.push(table(['Trip card A – Maaloula', 'Trip card B – Krak des Chevaliers'], [['56 km north · 1 hour by car · buses every 2 hours · 15,000 single · stay 3 hours', '160 km from Damascus · 2.5 hours by car · no direct bus (go to Homs first) · taxi 250,000 for the day · stay 2 hours']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the distance, the time and the price.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask your partner about **three real journeys**: home → work/college · home → the city centre · your city → another city. Ask _How long? How far? How much? How often?_'));
out.push(p('**b**  Now plan a **day trip** together to a real place. Agree: where, how, what time to leave, how long to stay, how much it costs.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your plan:  _We want to go to Maaloula. It\'s fifty-six kilometres from Damascus and it takes about an hour by car. We\'re leaving at eight and staying three hours. It costs about fifteen thousand each by bus._'));
out.push(p('**Listener task:** which trip is the cheapest? Which is the longest?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Hiba\'s paragraph about her journey to work. Answer the questions.'));
out.push(model([
  '**My journey to work**',
  'I live in Jaramana and I work in Mezzeh, so my journey is long. It\'s about twelve kilometres, but it takes me more than an hour in the morning!',
  'First, I walk for ten minutes to the main street. Then I take a service to the city centre – it costs 2,000 and takes about thirty minutes, but in the morning it can take fifty. After that, I change and take a second service to Mezzeh. Finally, I walk for five minutes to my office.',
  'I usually leave home at seven and arrive at work at a quarter past eight. The journey home is faster because I leave at four. On Fridays I don\'t work, so I stay in bed!',
]));
out.push(item('1', 'How far is Hiba\'s journey?'));
out.push(item('2', 'How many times does she change?'));
out.push(item('3', 'Why is the journey home faster?'));
out.push(writers([
  'Describing a journey: **where you live and work** → **total distance and time** → **the steps** (First, Then, After that, Finally) → **leave / arrive times** → **one extra detail** (the journey home, Fridays, a problem).',
  'Use _It takes **me**…_ for your own journey and give **times and prices** for each step.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**My journey to ______________**   I live in ______________ and I ______________ in ______________. It\'s about ______ kilometres and it takes me ______________.   First, I ______________. Then I ______________ – it costs ______ and takes ______. After that, ______________. Finally, ______________.   I usually leave at ______ and arrive at ______. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_It takes (me)…_ used correctly', 'leave / arrive (+ in / at) correct', 'All parts: distance, steps in order, times, extra detail']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about **your** journey to work, college or this class (60 words or more) – or about a long journey you often make between cities.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I didn\'t know it was so far!_   ✓ _Can you add the price?_   ? _Why don\'t you…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their texts. Who has the longest journey in the class? Who pays the most each month?'));
out.push(hw('Write a reply to your partner (25+ words): compare their journey with yours (_My journey is shorter, but…_) and give **one** piece of advice.'));

// ======================= 6.4 =======================
out.push(pb());
out.push(h2('6.4  I take the bus because it\'s cheaper'));
out.push(p('**Function:** giving reasons and purpose   ·   **Grammar:** _because_; _to_ + verb (purpose)   ·   **Pronunciation:** weak _because_ /bɪˈkəz/, _to_ /tə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Why do people choose the bus, a taxi, a car, or walking? Make two lists: good things and bad things about each.'));
out.push(board('I take the bus because it\'s cheaper.', 'I walk to save money and to keep fit.'));
out.push(p('**b**  Finish the sentences: I take a taxi when ______ · I never drive in the centre because ______ · I walk to ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who drives to work every day?   **A** Rami   **B** Nadia   **C** nobody'));
out.push(p('**b**  Listen again. **1** Why doesn\'t Rami drive to the site?   **2** Why does Nadia drive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.7  At the building site in Kafr Sousa', [
  ['Nadia', 'Rami, do you want a lift home? I\'ve got the car today.'],
  ['Rami', 'Thanks, Nadia, but I take the service because it\'s much cheaper. And honestly, it\'s faster at this time.'],
  ['Nadia', 'That\'s true. The traffic on the highway is terrible.'],
  ['Rami', 'Why do you drive? You live near the centre, don\'t you?'],
  ['Nadia', 'I drive to take my daughter to school first. The school is in the other direction, so I need the car.'],
  ['Rami', 'Ah, I understand. Does she like school?'],
  ['Nadia', 'She loves it! But she gets up at six to be there at half past seven. Poor girl.'],
  ['Rami', 'I get up at six too – to go running!'],
  ['Nadia', 'Running? Why?'],
  ['Rami', 'Because I sit in meetings all day. I run to keep fit and to think about my problems!'],
  ['Nadia', 'Hmm. I think I prefer the traffic.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – because and to + verb**',
  table(['because + subject + verb (a reason)', 'to + base verb (a purpose = why)'], [['I take the service **because** it\'s cheaper. · She gets up early **because** her school is far.', 'I run **to keep** fit. · I drive **to take** my daughter to school. · She gets up at six **to be** there at 7.30.']], [1, 1]),
  '⚠ _**to** keep fit_, not ~~for keep fit~~, not ~~for to keep fit~~.  (We say _**for** exercise_ + noun, but _**to** keep fit_ + verb.)',
  'Answering **Why?**: _**Because** it\'s cheaper._ (a full reason) or _**To** save money._ (a purpose)',
  '**so** = the result (opposite order): _The school is in the other direction, **so** I need the car._',
  '**Practise:** Join the sentences with _because_, _to_ or _so_.  1 I walk to work. I want to save money. (to)  2 I don\'t drive in the centre. There\'s no parking. (because)  3 It was raining. We took a taxi. (so)  4 She studies English. She wants a better job. (to)  5 I like the train. It\'s comfortable. (because)',
  '**Useful phrases:** Do you want a lift? · That\'s true. · Honestly,… · Ah, I understand. · Poor girl! · I prefer…',
  '**Pronunciation.** 🔊 **Track 6.8** Weak forms: _because_ /bɪˈkəz/ · _to_ /tə/: _I run to‿keep fit._ /tə kiːp/ · _…because it\'s cheaper._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks _Why…?_ about each thing on the card. B answers with **because** or **to**. Then swap.'));
out.push(dlg(null, [
  ['A', 'Why do you __________?'],
  ['B', 'Because __________. / To __________.'],
  ['A', 'Really? And why don\'t you __________?'],
  ['B', 'Because __________.'],
  ['A', 'That\'s true. I __________ because __________.'],
]));
out.push(table(['Card A – ask about…', 'Card B – ask about…'], [['walk to work · get up early · use a bicycle in the city', 'take a taxi at night · study English · live near your work']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write two reasons with _because_ and two with _to_.'));
out.push(stage('4', 'Your turn – the "Why?" game', 9));
out.push(p('**a**  Your partner asks **Why?** about five true things in your life: your job, your city, your transport, your English class, your free time. Answer every time with _because_ or _to_ – never "I don\'t know"!'));
out.push(p('**b**  Now discuss: what is the best way to travel in your city – and why? Agree on **three** reasons.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s reasons:  _Tareq comes to this class to get a better job at his bank. He takes the service because parking in the centre is impossible. He thinks the best transport in Damascus is the service because it\'s cheap and it goes everywhere._'));
out.push(p('**Listener task:** how many people gave the same reason as you?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the opinion post on a city page. Answer the questions.'));
out.push(model([
  '**Why I don\'t drive in Damascus – by Maya N.**',
  'I\'ve got a driving licence, but I don\'t drive in the city, and people always ask me why.',
  'The first reason is parking. There isn\'t enough space near my pharmacy, so I spend twenty minutes every morning looking for a place. The second reason is money: petrol, repairs and the car itself are very expensive.',
  'But the most important reason is time. I take the service to work because it\'s faster in the morning traffic. And I walk home in the evening to get some exercise and to think.',
  'Of course, a car is better for families or for people who work far away. But for me, in the centre of Damascus, two feet and a service are enough!',
]));
out.push(item('1', 'What is Maya\'s first reason?'));
out.push(item('2', 'Why does she walk home?'));
out.push(item('3', 'Who does she think needs a car?'));
out.push(writers([
  'An opinion post: **title + your position** → **reason 1** → **reason 2** → **the most important reason** → **the other side** (_Of course,…_) → **a short, strong ending**.',
  'Order your reasons: **The first reason is… The second reason is… But the most important reason is…**',
  'Use **because**, **to** + verb and **so** in each paragraph.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Why I ______________**   I ______________, and people always ask me why.   The first reason is ______________. ______________, so ______________. The second reason is ______________: ______________.   But the most important reason is ______________. I ______________ because ______________. And I ______________ to ______________.   Of course, ______________. But for me, ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', '_because_ + subject + verb; _to_ + base verb', 'Reasons in order (first, second, most important)', 'All parts: position, three reasons, the other side, ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one reason sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an opinion post with **three reasons**: _Why I walk / drive / take the service_, _Why I live in my city_, _Why I\'m learning English_, or _Why I love my job_ (60 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Good reasons!_   ✓ _Can you add an example?_   ? _What about in winter?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two posts are read aloud. The class votes on the strongest reason.'));
out.push(hw('Write a comment on your partner\'s post (25+ words): agree or disagree and give **your** reason with _because_ or _to_.'));

// ======================= 6.5 =======================
out.push(pb());
out.push(h2('6.5  Why don\'t we go on Friday?'));
out.push(p('**Function:** making and answering suggestions   ·   **Grammar:** _Let\'s… / Why don\'t we…? / Shall we…? / How about + -ing?_   ·   **Pronunciation:** _Shall we_ /ʃəl wi/, _Let\'s_ /lets/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do you and your friends decide where to go? What do you say? What do you write in the group chat?'));
out.push(board('Let\'s go to the park!', 'How about Friday morning?'));
out.push(p('**b**  Yes or no? _Good idea! · I\'m not sure. · Why not? · Let\'s do that. · I\'d rather not. · That sounds great!_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do they decide to do?   **A** go to Bosra   **B** go to Maaloula   **C** stay in Damascus'));
out.push(p('**b**  Listen again. **1** Why not Saturday?   **2** How do they decide to travel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.9  Planning the trip', [
  ['Lina', 'So, Mr Lang has a free day. Shall we take him to Bosra?'],
  ['Maya', 'Hmm, Bosra is a long way – about two hours each way. How about Maaloula? It\'s closer.'],
  ['Omar', 'Good idea. And the road is beautiful.'],
  ['Lina', 'OK, Maaloula. Let\'s go on Friday, then.'],
  ['Maya', 'Why don\'t we go on Saturday? On Friday everything is busy and the restaurants are full.'],
  ['Lina', 'Saturday is a working day for me, I\'m afraid.'],
  ['Omar', 'Friday is fine. Let\'s leave early – at seven – to miss the traffic.'],
  ['Maya', 'Seven! Shall we say eight?'],
  ['Omar', 'OK, eight. And how about taking my car? Four people, one car – it\'s cheaper.'],
  ['Lina', 'Perfect. And let\'s take some food with us.'],
  ['Maya', 'I\'ll make sandwiches. Omar, why don\'t you bring the tea?'],
  ['Omar', 'Deal!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – suggestions**',
  table(['Suggestion', 'Form', 'Example'], [
    ['**Let\'s** + base verb', 'Let\'s go!', '**Let\'s leave** at eight.'],
    ['**Shall we** + base verb?', 'question', '**Shall we take** him to Bosra?'],
    ['**Why don\'t we / you** + base verb?', 'question', '**Why don\'t we go** on Saturday?'],
    ['**How about** + -ing / noun?', '-ing!', '**How about taking** my car? · **How about** Friday?'],
  ], [1.3, 0.8, 1.6]),
  '⚠ **How about** + **-ing**: _How about **going**…?_, not ~~How about to go~~.  **Let\'s** / **Shall we** / **Why don\'t we** + **base verb**.',
  '**Answering:** 😀 Good idea! · That sounds great! · Why not? · Let\'s do that. · Perfect. · Deal!   😐 Hmm, I\'m not sure. · I\'d rather not. · …, I\'m afraid. · Shall we say…? (= a different suggestion)',
  '**Practise:** Make suggestions.  1 (go / cinema / tonight) – Let\'s ______  2 (take / the bus) – Shall we ______?  3 (meet / at six) – Why don\'t we ______?  4 (go / by taxi) – How about ______?  5 (leave early) – Let\'s ______',
  '**Useful phrases:** It\'s a long way. · It\'s closer. · …, I\'m afraid. · Shall we say eight? · Deal!',
  '**Pronunciation.** 🔊 **Track 6.10** _Shall we_ /ʃəl wi/ – fast and weak. _Let\'s_ /lets/ – one syllable. _How about_ /haʊ əˈbaʊt/. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Plan the day on the card. **Rule:** you must use a different suggestion form each time, and you must disagree at least once. Then swap cards.'));
out.push(dlg(null, [
  ['A', 'Shall we __________?'],
  ['B', 'Hmm, I\'m not sure. How about __________?'],
  ['A', 'Good idea. Let\'s __________, then.'],
  ['B', 'Why don\'t we __________?'],
  ['A', '__________, I\'m afraid. Shall we say __________?'],
  ['B', 'Perfect. And let\'s __________.'],
  ['A', 'Deal!'],
]));
out.push(table(['Card A – a day out with a visitor', 'Card B – a surprise for a colleague'], [['where to go · what time to leave · how to travel · what to take', 'what present · when to give it · where to meet · who pays']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the suggestion forms you hear.'));
out.push(PHRASE_CARD(['Let\'s…', 'Shall we…?', 'Why don\'t we…?', 'How about…?', 'Good idea!', 'I\'m not sure.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In groups of three or four, plan a **real** class trip or class party: where, when, how to travel, what to bring, how much money. Everyone must make at least **two** suggestions, and the group must **agree** on everything.'));
out.push(table(['Question', 'Our decision', 'Who suggested it?'], [['Where?', '', ''], ['When?', '', ''], ['How do we travel?', '', ''], ['What do we bring?', '', ''], ['How much?', '', '']], [1, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('One person from each group reports:  _We\'re going to Tishreen Park on Friday morning. Hiba suggested the park because it\'s free. We\'re meeting at the main gate at ten. Fadi is bringing his guitar, and we\'re all bringing food._'));
out.push(p('**Listener task:** which plan do you want to join? Which group has the best idea?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the group chat. Answer the questions.'));
out.push(model([
  '**Class 4B – Trip group**',
  '**Lina:** Hi everyone! Mr Lang has a free day on Friday. Shall we take him to Maaloula? It\'s only an hour away. 🚗',
  '**Omar:** Good idea! Let\'s leave at eight to miss the traffic. How about taking my car? There\'s room for four.',
  '**Maya:** Perfect. I\'ll make sandwiches. Omar, why don\'t you bring tea in a flask?',
  '**Fadi:** Sorry, I can\'t come on Friday – I\'m working. Have a great day! Take photos! 📸',
  '**Lina:** That\'s a shame, Fadi. Next time!',
  '**Omar:** So: Friday, 8 am, outside the centre. Bring a hat – it\'s sunny up there. See you! ☀️',
]));
out.push(item('1', 'Whose car are they taking?'));
out.push(item('2', 'What is Maya bringing?'));
out.push(item('3', 'Why can\'t Fadi come?'));
out.push(writers([
  'A group chat plan: **the suggestion** (what + why) → **others add ideas** (time, transport, food) → **someone can\'t come** (sorry + reason + friendly line) → **a final message with all the information** (day, time, place, what to bring).',
  'The last message is the most important – it repeats **everything**.',
  'Chat messages are short. Emojis are OK here, but **not** in a formal email!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the chat for a class or family plan. Four messages:'));
out.push(p('**You:** Hi everyone! Shall we ______________? ______________.   **Friend 1:** Good idea! Let\'s ______________. How about ______________?   **Friend 2:** Sorry, I can\'t come because ______________. ______________!   **You:** So: ______, ______, ______________. Bring ______________. See you!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'A different suggestion form in each message', 'The polite refusal has a reason', 'The last message has day, time, place and what to bring']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one suggestion before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the group chat for the trip or party your group planned in Stage 4 (60 words or more, at least five messages). Include **one** person who can\'t come and **one** change of plan.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s chat as a **group member**. Write one more message: agree, suggest one thing, or ask a question.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two chats are read aloud with different students reading each person. Is the final plan clear?'));
out.push(hw('Write the **final message** for your partner\'s chat (25+ words): put **all** the information in one message so nobody is confused.'));

// ======================= 6.6 =======================
out.push(pb());
out.push(h2('6.6  You can\'t park here'));
out.push(p('**Function:** explaining signs and rules   ·   **Grammar:** _can / can\'t_; _must / mustn\'t_ (intro)   ·   **Pronunciation:** _can_ /kən/ vs _can\'t_ /kɑːnt/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What signs do you see every day – in the street, at work, in a bus? Draw three on the board. What do they mean?'));
out.push(board('You can\'t park here.', 'NO PARKING'));
out.push(p('**b**  Match the sign and the meaning: _NO ENTRY · NO SMOKING · KEEP OFF THE GRASS · QUIET PLEASE · EXIT · NO PHOTOS_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are Lina and Mr Lang?   **A** at the airport   **B** at a museum   **C** at the bus station'));
out.push(p('**b**  Listen again. **1** What can\'t he do inside?   **2** What must he do with his bag?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.11  At the National Museum', [
  ['Mr Lang', 'Lina, what does that sign mean? I can see a camera with a line through it.'],
  ['Lina', 'It means "no photos". You can\'t take photos inside this room because of the old paintings.'],
  ['Mr Lang', 'I see. Can I take photos in the garden?'],
  ['Lina', 'Yes, you can. The garden is fine – everybody takes photos there.'],
  ['Mr Lang', 'Good. And this sign? "Please leave bags at the desk."'],
  ['Lina', 'You must leave your bag with the guard. Big bags aren\'t allowed inside.'],
  ['Mr Lang', 'OK. Is my laptop bag too big?'],
  ['Lina', 'I think so. Let\'s ask… Excuse me, can he take this bag inside?'],
  ['Guard', 'No, I\'m sorry. Bags must stay here. But you can keep your phone and your wallet.'],
  ['Mr Lang', 'No problem. And can we eat in the garden?'],
  ['Guard', 'You can drink water, but you mustn\'t eat near the old stones. There\'s a café outside the gate.'],
  ['Mr Lang', 'Thank you. Lina, your English lessons are working – I understood everything!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – can / can\'t, must / mustn\'t**',
  table(['', 'Meaning', 'Example'], [
    ['**can**', 'it\'s OK / allowed', 'You **can** take photos in the garden.'],
    ['**can\'t**', 'it isn\'t allowed', 'You **can\'t** park here.'],
    ['**must**', 'it\'s necessary – do it!', 'You **must** leave your bag at the desk.'],
    ['**mustn\'t**', 'don\'t do it! (it\'s forbidden)', 'You **mustn\'t** eat near the old stones.'],
  ], [0.8, 1.2, 1.8]),
  'All of them + **base verb**: _You must **leave**…_, not ~~must to leave~~. No -s: _He **can**_, not ~~He cans~~.',
  '**Explaining a sign:** It means… · It\'s not allowed. · You have to… (Unit 9) · You can keep…',
  '**Practise:** Complete with _can, can\'t, must_ or _mustn\'t_.  1 You ______ park here – look at the sign!  2 Children ______ swim here, but an adult must be with them.  3 You ______ show your ticket to the driver.  4 You ______ smoke in the hospital. It\'s forbidden.  5 ______ I take a photo of you?',
  '**Useful phrases:** What does that sign mean? · It means… · I see. · Is it too big? · Let\'s ask. · No problem.',
  '**Pronunciation.** 🔊 **Track 6.12** _can_ is weak /kən/: _You can‿take photos._  _can\'t_ is strong and long /kɑːnt/: _You **can\'t** park here._ Listen: can or can\'t? Then practise with your partner.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor who asks about the signs on the card. B explains with _can / can\'t / must / mustn\'t_. Then swap.'));
out.push(dlg(null, [
  ['A', 'What does that sign mean?'],
  ['B', 'It means __________. You __________ here.'],
  ['A', 'I see. Can I __________?'],
  ['B', 'Yes, you can. / No, you can\'t, because __________.'],
  ['A', 'And this one?'],
  ['B', 'You must __________.'],
]));
out.push(table(['Signs card A – at the park', 'Signs card B – on the bus'], [['KEEP OFF THE GRASS · NO BICYCLES · PARK CLOSES AT SUNSET · PLEASE USE THE BINS', 'NO EATING OR DRINKING · KEEP YOUR TICKET · PRIORITY SEATS FOR OLDER PEOPLE · DON\'T TALK TO THE DRIVER']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write two things you **can** do and two things you **mustn\'t** do.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think of **four real rules** where you work, study or live (or in a place you know: a mosque, a hospital, a gym, a library). Explain them to your partner, who is a foreign visitor. They ask questions.'));
out.push(p('**b**  Now make three rules for **our classroom** together. Be serious – or funny!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s rules:  _At Hiba\'s university you must show your student card at the gate. You can eat in the garden, but you mustn\'t eat in the library. And you can\'t use your phone in an exam – of course!_'));
out.push(p('**Listener task:** which place has the strictest rules?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice in the minibus. Answer the questions.'));
out.push(model([
  '**AL-MEZZEH SERVICE – FOR YOUR COMFORT AND SAFETY**',
  '• Please have the exact money ready. The driver can\'t always give change.',
  '• You must tell the driver before your stop. Say "على جنب – here, please" in good time.',
  '• Please give the front seats to older people and mothers with children.',
  '• You mustn\'t eat or drink in the minibus. Please keep it clean.',
  '• Children under six travel free, but they must sit on an adult\'s knee.',
  '• No smoking. Thank you for travelling with us!',
]));
out.push(item('1', 'Why should you have the exact money?'));
out.push(item('2', 'Who travels free?'));
out.push(item('3', 'Name two things you mustn\'t do.'));
out.push(writers([
  'A rules notice: **title** (+ a friendly reason: _for your comfort and safety_) → **a short list** → **a thank-you line**.',
  'Mix **Please…** (polite), **You must…** (necessary) and **You mustn\'t…** (forbidden). Too many _mustn\'t_ lines sound unfriendly!',
  'One rule per line, starting with a **bullet point**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – ______________**   • Please ______________.   • You must ______________.   • Please ______________.   • You mustn\'t ______________.   • ______________ can ______________, but ______________.   • Thank you ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'can / can\'t / must / mustn\'t + base verb', 'A mix of Please / must / mustn\'t (not only mustn\'t!)', 'All parts: title, rules list, thank-you line']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one rule before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a rules notice for a **real place**: your workplace, a classroom, a gym, a shared flat, a family car (50 words or more). Make at least **five** rules and keep them friendly.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as a **user of that place**. ★ _Clear and friendly!_  ✓ _Can you add a rule about…?_  ? _What happens if I…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall. Which place has the friendliest rules? Which has the strictest?'));
out.push(hw('Write a short message to the manager of the place in your partner\'s notice (25+ words): ask about **one** rule you don\'t understand and suggest **one** new rule.'));

// ======================= 6.7 =======================
out.push(pb());
out.push(h2('6.7  Review & Mediate: What did they say?'));
out.push(p('**Function:** explaining a station announcement   ·   **Recycling:** Units 1–6   ·   **Exam practice:** A2 Key Listening Part 1, Reading Part 1, Writing Part 6'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 6 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I go to work with bus.  **2** How long takes it?  **3** I walk for save money.  **4** How about to go on Friday?  **5** You must to show your ticket.  **6** The bus arrives to Aleppo at twelve.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the departures board at the Damascus bus garage.'));
out.push(table(['DEPARTURES', '', '', ''], [
  ['**Destination**', '**Time**', '**Platform**', '**Note**'],
  ['Homs', '12:00', '3', 'ON TIME'],
  ['Aleppo', '12:30', '5', 'DELAYED – 13:15'],
  ['Latakia', '13:00', '2', 'PLATFORM CHANGED → now 7'],
  ['Tartus', '13:30', '4', 'ON TIME'],
  ['Suwayda', '14:00', '1', 'CANCELLED – next bus 16:00'],
], [1.2, 0.8, 0.8, 1.6], { headFill: C.orange }));
out.push(p('**b**  **Books closed.** Listen. Mr Lang is at the garage. What is the problem with his bus?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 6.13  An announcement at the garage', [
  ['Announcement', 'Attention please. The twelve thirty bus to Aleppo is delayed. It will now leave at thirteen fifteen from platform five. The one o\'clock bus to Latakia will leave from platform seven, not platform two. Passengers for Suwayda: the two o\'clock bus is cancelled. The next bus to Suwayda is at four o\'clock. We are sorry for the delay.'],
  ['Mr Lang', 'Lina, I understood "Aleppo" and some numbers… What did they say?'],
  ['Lina', 'Your bus is late, I\'m afraid. It leaves at a quarter past one now, not half past twelve.'],
  ['Mr Lang', 'Forty-five minutes! Is the platform the same?'],
  ['Lina', 'Yes, platform five – that\'s the same. But the Latakia bus is moving to platform seven.'],
  ['Mr Lang', 'And the woman next to us looks worried.'],
  ['Lina', 'Because the Suwayda bus is cancelled. She must wait until four o\'clock. Poor woman.'],
  ['Mr Lang', 'So we have time for a coffee!'],
  ['Lina', 'Good idea. But let\'s stay near the platform. Sometimes the bus leaves early when the road is clear!'],
]));
out.push(sp());
out.push(box('Language box – explaining an announcement', [
  'Say it in **simple words**, with the important information **first**:',
  '_DELAYED – 13:15_ → **Your bus is late. It leaves at a quarter past one now.**   _PLATFORM CHANGED_ → **The platform is different now – it\'s number seven.**   _CANCELLED_ → **There\'s no bus at two. The next one is at four.**',
  'Compare with what the person expects: _…**not** half past twelve._ · _That\'s **the same**._',
  '**Useful phrases:** What did they say? · Your bus is late, I\'m afraid. · It leaves at… now. · It\'s the same. · …is moving to platform… · She must wait until… · So we have time for…',
  '_Note: will leave / it will now leave – learn as a phrase here. We study_ **will** _in Book 2._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A can read the board; B can\'t (close your book!). B asks about their bus; A explains. Then swap.'));
out.push(table(['B travels to…', 'B travels to…'], [['Latakia (expects 13:00, platform 2)', 'Suwayda (expects 14:00, platform 1)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the new time and platform for each traveller.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** announcement or message you heard recently: at work, at a bus stop, at the university, in a mosque, on the radio, or a message in a group chat. Tell your partner what it said in your own words. Your partner asks **three** questions.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner heard:  _At Hiba\'s university there was an announcement on Sunday. The exams are moving from the big hall to the new building because the hall is closed. Students must bring their cards and arrive thirty minutes early._'));
out.push(p('**Listener task:** which announcement is the most important? Which is the most confusing?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 7));
out.push(p('For each text, choose the correct answer **A**, **B** or **C**.'));
out.push(model(['**1**  _TICKETS: Buy your ticket before you get on the bus. Passengers without tickets pay double._']));
out.push(p('**A** You can pay the driver the normal price.   **B** You pay more if you buy a ticket on the bus.   **C** Tickets are free for some passengers.', { indent: 200 }));
out.push(model(['**2**  _Rami – the Aleppo bus is delayed by 45 min. Don\'t come to the garage before 1. Maya_']));
out.push(p('**A** Rami should arrive later than he planned.   **B** The bus is cancelled.   **C** Maya is on the bus.', { indent: 200 }));
out.push(model(['**3**  _PLATFORM 7 – LATAKIA (CHANGED FROM PLATFORM 2)_']));
out.push(p('**A** There are two buses to Latakia.   **B** The Latakia bus leaves from a different platform today.   **C** Platform 7 is closed.', { indent: 200 }));
out.push(model(['**4**  _Children under six travel free but must sit with an adult._']));
out.push(p('**A** Small children can\'t travel on this bus.   **B** Small children pay half.   **C** A child of five doesn\'t need a ticket.', { indent: 200 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Nabil is meeting the Aleppo bus. Write him a message with the new information from the board.'));
out.push(p('Hi Nabil,   Bad news – the bus to Aleppo is ______________. It leaves at ______ now, not ______. The platform is ______________. We arrive in Aleppo about ______________ later than the plan, so ______________. The Suwayda bus is ______________, so the garage is very busy. Let\'s ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['The new time and the old time', 'The platform information', 'What it means for Nabil (arrive later)', 'Own sentences – not a copy of the board']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You are travelling to another city tomorrow to visit your English friend, Jack. Write an email to Jack.',
  'In your email:  •  say **how you are travelling**  •  say **what time you arrive**  •  ask Jack **to meet you** somewhere.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 6 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I usually go to work ___ minibus.   a) by   b) on   c) with',
  '2  How long ___ to get to Homs?   a) it takes   b) does it take   c) takes it',
  '3  I walk to work ___ money.   a) for save   b) to save   c) for saving',
  '4  ___ we leave at eight?   a) Shall   b) Let\'s   c) How about',
  '5  How about ___ the early bus?   a) take   b) to take   c) taking',
  '6  You ___ smoke here. It\'s forbidden.   a) mustn\'t   b) don\'t must   c) can',
  '7  A ___ to Homs, please. I\'m coming back tomorrow.   a) single   b) return   c) platform',
  '8  The bus ___ in Aleppo at twelve.   a) arrives   b) arrives to   c) leaves',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 1 style).** 🔊 **Track 6.14** You will hear five short conversations. Choose **A**, **B** or **C**.'));
['1  How does the woman travel to work?   A by car   B by service   C on foot',
 '2  What time does the bus leave now?   A 10:00   B 10:30   C 11:00',
 '3  How much is a return to Homs?   A 20,000   B 35,000   C 55,000',
 '4  Which platform does the Latakia bus leave from?   A 2   B 5   C 7',
 '5  What does the sign mean?   A You can park for one hour.   B You can\'t park here.   C You must pay to park.'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 6.14  Audio script (read after the check)', [
  ['1  Man', 'Do you drive to work?'],
  ['   Woman', 'I\'ve got a car, but I leave it at home. There\'s no parking, so I take the service.'],
  ['2  Clerk', 'The ten o\'clock bus is full, I\'m afraid. The next one is at half past ten.'],
  ['   Man', 'Half past ten is fine.'],
  ['3  Woman', 'A return to Homs, please. How much is it?'],
  ['   Clerk', 'A single is twenty thousand and a return is thirty-five.'],
  ['4  Announcement', 'The bus to Latakia will leave from platform seven today, not platform two.'],
  ['5  Visitor', 'What does that sign mean? One hour?'],
  ['   Friend', 'No – it means no parking at any time. The one hour is for stopping to put things in your car.'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words). Suggest a trip somewhere this weekend. Say how you can travel, how long it takes, and suggest a time to meet.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 6)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask how to get to places',
  '☐ buy a ticket (single / return, seat, platform)',
  '☐ ask how long, how far and how often',
  '☐ give reasons with _because_ and _to_',
  '☐ make and answer suggestions',
  '☐ explain signs and rules with _can / can\'t / must / mustn\'t_',
  '☐ explain an announcement to someone in my own words',
  '☐ write travel instructions, a booking confirmation, a journey description, an opinion post, a group chat and a rules notice',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: MID-BOOK TEST (Units 1–6)', [
  'Your teacher will give you the **Mid-Book Test**: a half-length A2 Key paper (Reading, Writing, Listening and Speaking). Before the test, look again at the **"I can…"** lists in Units 1–6 and the **Language boxes**.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 6 · Student\'s Book');
