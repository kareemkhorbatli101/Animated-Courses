// Proactive English A2 · Syria Edition · Book 1 · Unit 6 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, stage, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const ck = (rows) => table(['Checklist', '✓ / ✗'], rows, [3, 2]);
const boardT = (rows) => table(['We SAY…', 'We WRITE…'], rows, [1, 1]);

out.push(h1('Answer Key · Unit 6  Getting Around'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(p('_Every task has an answer or a full sample answer. Samples show one good A2 answer; learners\' own answers will differ._', { color: '595959' }));

// ===== 6.1 =====
out.push(h2('6.1  How do I get to the university?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I go to work by minibus.', 'Take the number 5 bus.'], ['Does this bus go to…?', 'Get off at the pharmacy.'], ['How much is it?', 'Journey: about 25 minutes'], ['It\'s a long way on foot.', 'The traffic is terrible in the morning.']]));
out.push(p('**b**  Students\' own answers. Typical: the service (minibus) is the cheapest; a taxi is the fastest (but the service can be faster in heavy traffic).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (to the Old City)   **b**  1 Two thousand pounds.  2 Because it\'s about an hour on foot and it\'s very hot.'));
out.push(p('**Language box – Practise:**  1 by  2 to  3 on  4 –  5 by'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'Excuse me, does this bus go to the airport?'], ['B', 'No, it doesn\'t. This one goes to the centre. You need the airport bus from the garage.'], ['A', 'Where do I get it?'], ['B', 'At the garage – platform one.'], ['A', 'How much is it? And how long does it take?'], ['B', 'Fifteen thousand. About forty-five minutes. A taxi is a hundred thousand, but it\'s faster.'], ['A', 'Thank you so much!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: airport bus, 15,000, 45 minutes. Card B: number 7 bus, 2,000, 20 minutes (or 30 minutes on foot). Typical board-clinic errors: _I go with bus_ → _by bus_; _How I get to…?_ → _How do I get to…?_'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"I walk for ten minutes to the main street. Then I take the Mezzeh service – it costs 2,000 and takes about twenty minutes. I get off at the pharmacy and walk for five minutes to the centre. The whole journey takes about forty minutes."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Hiba walks for ten minutes to the main street. Then she takes the Mezzeh service – it costs two thousand. She gets off at the pharmacy and walks for five minutes. It takes about forty minutes."']));
out.push(stage('5', 'Read'));
out.push(p('1 From the first platform (at the bus garage).  2 Because in the morning the journey can take 40 minutes instead of 25.  3 A taxi from the garage – about 35,000, 15 minutes.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Hi Lana! Here\'s how to get to my flat from the bus garage.   Take the Jaramana service – it leaves from the third platform and costs 2,500. The journey takes about 30 minutes, but in the evening it can take 50, so leave early.   Get off at the Al-Zahra bakery. Then walk down the small street for about three minutes. My building is on the right, next to a pharmacy. I\'m on the second floor.   If it\'s late, a taxi is about 40,000 and takes 20 minutes.   See you on Friday! Hiba']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['by bus / on foot', '✗ – _with the service_ → _by service / take the service_'], ['Instructions start with a verb', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _You go with the service to Jaramana._  →  After: _Take the Jaramana service._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample(['Hi Khaled! I\'m so happy you\'re coming on Thursday. Here\'s how to get to my house from the Damascus garage.', 'Take the Qudsaya service – it leaves from platform four and costs 3,000. Tell the driver you want the last stop. The journey takes about 35 minutes, but after 3 pm the highway is very slow, so try to come earlier.', 'Get off at the small square with the fountain. Then walk up the hill for five minutes. My house is the one with the blue gate, opposite a bakery.', 'If you arrive late, take a taxi (about 60,000) and call me. See you soon! Tareq']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Very clear – I like the blue gate!   ✓ Can you add the price of the taxi from the airport?   ? What if I arrive at night – is there a service after 9 pm?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Listeners agree the clearest messages give a landmark **and** a price for each option.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Thanks, Tareq! My bus arrives at the garage at 2.15, so I\'ll take the service before the traffic. One question: do the services go every ten minutes, or do I have to wait? If I get lost at the square, can you come and find me?']));

// ===== 6.2 =====
out.push(pb());
out.push(h2('6.2  A return to Aleppo, please'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['A return to Homs, please.', 'Ticket: Damascus – Homs · 20,000'], ['Single or return?', 'Seat 14 · Platform 3'], ['Can I change the time?', 'Please arrive 20 minutes early.'], ['Is there a place for luggage?', 'One suitcase free']]));
out.push(p('**b**  single – one way only · return – there and back · platform – where the bus waits · seat number – the number of your place · luggage – a bag or suitcase'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (tomorrow morning, the nine o\'clock bus)   **b**  1 A return.  2 Eighty thousand.'));
out.push(p('**Language box – Practise (order):**  1 Where are you travelling to?  2 Latakia, please.  3 Single or return?  4 A return, please.  5 Here\'s your ticket. Platform 2.  6 Thank you!'));
out.push(stage('3', 'Practise – sample with customer card A'));
out.push(dlg(null, [['A', 'Good morning. Where are you travelling to?'], ['B', 'Latakia, please. Have you got a bus tomorrow afternoon?'], ['A', 'Yes, we have buses at two and at five.'], ['B', 'The two o\'clock one, please. How much is a return?'], ['A', 'A single is thirty thousand and a return is fifty-five.'], ['B', 'A return, then. I\'m coming back on Friday. Is there a place for luggage?'], ['A', 'Yes, under the bus. Here\'s your ticket – seat 9, platform 2.'], ['B', 'Thank you!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: Latakia, 14:00, return, 55,000. Card B: Homs, 07:00 (the earliest), single, 20,000; journey about 2 hours.'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Tareq', 'A return to Suwayda, please, for Friday morning.'], ['Clerk', 'I\'m sorry, the eight o\'clock bus is full. There are seats on the two o\'clock.'], ['Tareq', 'OK, the two o\'clock, then. How much is it?'], ['Clerk', 'Sixty thousand return. When are you coming back?'], ['Tareq', 'Sunday evening, please.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq wants to go to Suwayda for his cousin\'s wedding. He bought a return for sixty thousand. The bus leaves at eight on Friday and comes back on Sunday evening. There were no seats on the morning bus, so he takes the afternoon one."']));
out.push(stage('5', 'Read'));
out.push(p('1 Seat 22.  2 5,000 SYP.  3 You don\'t get your money back (no refunds after the bus leaves).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**SHAM AIR – BOOKING CONFIRMED**   **Passenger:** Hiba Khalil   **Booking number:** SA-9032   **Out:** Damascus → Cairo · Monday 3 November · 07:40 · Gate 6 · Seat 18A   **Back:** Cairo → Damascus · Sunday 9 November · 21:00 · Seat 12C   **Price:** 2,400,000 SYP – PAID   Please arrive at the airport three hours early. One suitcase of 23 kg is free; extra luggage costs 300,000. To change your ticket, call 011 998 7766 at least two days before.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals (days, months) and full stops', '✗ – _monday 3 november_ → _Monday 3 November_'], ['Short lines + full sentences for rules', '✓'], ['Dates and times clear', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _out: damascus to cairo monday 3 november_  →  After: _**Out:** Damascus → Cairo · Monday 3 November · 07:40_'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(['**AL-AMIR TRAVEL – BOOKING CONFIRMED**', '**Passenger:** Tareq Mansour   **Booking number:** AM-5512', '**Out:** Damascus → Suwayda · Friday 24 October · 14:00 · Platform 1 · Seat 7', '**Back:** Suwayda → Damascus · Sunday 26 October · 18:30 · Seat 15', '**Price:** 60,000 SYP (return) – PAID', 'Please arrive 20 minutes before the bus leaves. One bag is free. **Our rules:** no food on the bus, and children under six must sit with an adult. To change your ticket, call 011 334 5566 one day before.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Everything is clear!   ✓ Can you add the platform for the return bus?   ? Can I take two small bags instead of one big one?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Missing information (typical): the platform for the return journey, or the arrival time.'));
out.push(stage('HW', 'Homework – sample message'));
out.push(sample(['Dear Al-Amir Travel, My booking number is AM-5512 (Damascus–Suwayda, Friday 24 October at 14:00). I have a meeting on Friday afternoon, so I would like to change my ticket to the Saturday morning bus. Is there a seat at 8 am? My phone number is 0947 220 518. Thank you. Tareq Mansour']));

// ===== 6.3 =====
out.push(pb());
out.push(h2('6.3  How long does it take?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['How long does it take?', 'Journey time: about 2 hours'], ['How far is it?', 'Distance: 130 km'], ['How often do the buses go?', 'Every hour'], ['What time does it leave?', 'Departure 08:00 · Arrival 10:00']]));
out.push(p('**b**  How often…? – every 20 minutes · How far…? – 45 kilometres · How long…? – 90 minutes · How much…? – 30,000 SYP'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (Bosra)   **b**  1 About 130 kilometres.  2 Two or three hours is enough.'));
out.push(p('**Language box – Practise (sample questions):**  1 How long does it take?  2 How far is it?  3 How often do the buses go?  4 What time does it arrive?  5 How much does it cost?'));
out.push(stage('3', 'Practise – sample with trip card A'));
out.push(dlg(null, [['A', 'I\'d like to visit Maaloula. How far is it?'], ['B', 'About fifty-six kilometres, in the north.'], ['A', 'How long does it take?'], ['B', 'About an hour by car.'], ['A', 'How often do the buses go?'], ['B', 'Every two hours.'], ['A', 'And how much does it cost?'], ['B', 'Fifteen thousand for a single.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: 56 km, 1 hour, 15,000 single. Card B: 160 km, 2.5 hours, taxi 250,000 for the day.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"We want to go to Maaloula. It\'s fifty-six kilometres from Damascus and it takes about an hour by car. The buses go every two hours and a single is fifteen thousand. Let\'s leave at eight and stay three hours, so we\'re back at two."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"We want to go to Maaloula. It\'s fifty-six kilometres from Damascus and it takes about an hour by car. We\'re leaving at eight and staying three hours. It costs about fifteen thousand each by bus."']));
out.push(stage('5', 'Read'));
out.push(p('1 About twelve kilometres.  2 Once (she changes to a second service).  3 Because she leaves at four (there is less traffic).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**My journey to college**   I live in Dummar and I study in the centre. It\'s about eight kilometres and it takes me fifty minutes.   First, I walk for five minutes to the bus stop. Then I take the number 11 bus – it costs 2,000 and takes thirty minutes. After that, I walk through the park. Finally, I arrive at the gate.   I usually leave at seven and arrive at ten to eight. On rainy days I take a taxi because the bus is full.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['It takes (me)…', '✗ – _It takes to me_ → _It takes me_'], ['leave / arrive (in / at)', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _It takes to me fifty minutes._  →  After: _It takes me fifty minutes._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(['**My journey to work**', 'I live in Jaramana and I work at a bank in Baramkeh. It\'s only nine kilometres, but it takes me more than an hour in the morning.', 'First, I walk for eight minutes to the main road. Then I take a service to the Abbasid Square – it costs 2,500 and takes about twenty-five minutes, but after 7.30 it can take forty-five. After that, I change and take a second service to Baramkeh. Finally, I walk for four minutes to the bank.', 'I leave home at seven and arrive at ten past eight. The journey home is faster, but on Thursdays everybody travels, so I read a book and wait!']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I didn\'t know Jaramana was so far in the morning!   ✓ Can you add how much you pay every month?   ? Why don\'t you leave at half past six?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Longest journey (sample): 70 minutes each way; monthly cost about 100,000 SYP.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['My journey is shorter than yours – about twenty-five minutes – but I change twice, so it isn\'t easy. My advice: leave at half past six for one week and see the difference. I did it last year and I arrived relaxed every day!']));

// ===== 6.4 =====
out.push(pb());
out.push(h2('6.4  I take the bus because it\'s cheaper'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I take the bus because it\'s cheaper.', 'I walk to save money and keep fit.'], ['Why do you drive?', 'There isn\'t enough parking.'], ['Because the traffic is terrible.', 'Petrol is very expensive.'], ['To take my daughter to school.', 'So I need the car.']]));
out.push(p('**b**  Students\' own answers. Typical: _I take a taxi when it\'s late / when I have heavy bags._ · _I never drive in the centre because there\'s no parking._ · _I walk to get some exercise._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Nadia)   **b**  1 Because the service is much cheaper (and faster at that time).  2 To take her daughter to school first – the school is in the other direction.'));
out.push(p('**Language box – Practise:**  1 I walk to work to save money.  2 I don\'t drive in the centre because there\'s no parking.  3 It was raining, so we took a taxi.  4 She studies English to get a better job.  5 I like the train because it\'s comfortable.'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'Why do you walk to work?'], ['B', 'To save money – and because the traffic is terrible in the morning.'], ['A', 'Really? And why don\'t you take the service?'], ['B', 'Because it\'s always full at eight o\'clock.'], ['A', 'That\'s true. I get up early to go to the gym before work.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners should find two _because_ reasons and two _to_ purposes, e.g. _because there\'s no parking_ / _to save money_.'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Hiba', 'Why do you come to this class?'], ['Tareq', 'To get a better job at my bank. We work with foreign companies.'], ['Hiba', 'Why do you take the service?'], ['Tareq', 'Because parking in the centre is impossible.'], ['Hiba', 'What\'s the best transport in Damascus?'], ['Tareq', 'The service, because it\'s cheap and it goes everywhere.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq comes to this class to get a better job at his bank. He takes the service because parking in the centre is impossible. He thinks the best transport in Damascus is the service because it\'s cheap and it goes everywhere."']));
out.push(stage('5', 'Read'));
out.push(p('1 Parking – there isn\'t enough space near her pharmacy.  2 To get some exercise and to think.  3 Families and people who work far away.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Why I walk to work**   I walk to work every day, and my colleagues always ask me why.   The first reason is the traffic. The buses are full at eight, so I wait twenty minutes for a place. The second reason is money: a service twice a day costs a lot every month.   But the most important reason is my health. I walk because I sit at a desk all day. And I walk to start my morning slowly and think about my work.   Of course, in the rain it isn\'t fun. But for me, thirty minutes on foot is the best part of my day!']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['because + subject + verb; to + base verb', '✗ – _for save money_ → _to save money_'], ['Reasons in order', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I walk for save money._  →  After: _I walk to save money._'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(['**Why I\'m learning English at thirty-five**', 'People sometimes ask me why I study English now, with a full-time job and two children.', 'The first reason is my work. I\'m an IT technician, and all the manuals and videos are in English. I read them slowly with a dictionary, so I lose a lot of time.', 'The second reason is my children. My daughter asks me English questions and I want to help her.', 'But the most important reason is for me. I want to understand films without subtitles and talk to people from other countries.', 'Of course, it isn\'t easy after a long day. But every lesson I understand a little more – and that feeling is worth it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Good reasons – especially the children!   ✓ Can you add an example of a difficult manual?   ? How many hours do you study every week?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Strongest reason (class vote, sample): learning English to help your children.'));
out.push(stage('HW', 'Homework – sample comment'));
out.push(sample(['I agree with you about work. I\'m a nurse and the medicine information is always in English, so I study for the same reason. But for me the most important thing is travelling – I want to go to Jordan and talk to people without my brother!']));

// ===== 6.5 =====
out.push(pb());
out.push(h2('6.5  Why don\'t we go on Friday?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Let\'s go to the park!', 'How about Friday morning?'], ['Shall we take the bus?', 'Meeting at the main gate at 10.'], ['Why don\'t we leave early?', 'Bring a hat – it\'s sunny.'], ['Good idea!', 'Sorry, I can\'t come – I\'m working.']]));
out.push(p('**b**  Yes: Good idea! · Why not? · Let\'s do that. · That sounds great!   No / not sure: I\'m not sure. · I\'d rather not.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Maaloula)   **b**  1 Because Saturday is a working day for Lina.  2 In Omar\'s car (four people, one car – cheaper).'));
out.push(p('**Language box – Practise:**  1 Let\'s go to the cinema tonight.  2 Shall we take the bus?  3 Why don\'t we meet at six?  4 How about going by taxi?  5 Let\'s leave early.'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'Shall we take him to the Old City?'], ['B', 'Hmm, I\'m not sure – it\'s very hot at midday. How about going to the museum first?'], ['A', 'Good idea. Let\'s meet at nine, then.'], ['B', 'Why don\'t we meet at half past nine? The museum opens at ten.'], ['A', 'Nine is better for me, I\'m afraid – I have to be home early. Shall we say a quarter past nine?'], ['B', 'Perfect. And let\'s take some water with us.'], ['A', 'Deal!']]));
out.push(stage('3R', 'Perform'));
out.push(p('All six phrases appear if the pair uses a different form each time and disagrees once.'));
out.push(stage('4', 'Your turn – sample group plan'));
out.push(table(['Question', 'Our decision', 'Who suggested it?'], [['Where?', 'Tishreen Park', 'Hiba'], ['When?', 'Friday at 10 am', 'Fadi'], ['How do we travel?', 'by service, meet at the main gate', 'Tareq'], ['What do we bring?', 'food, tea, a ball, Fadi\'s guitar', 'everyone'], ['How much?', 'about 10,000 each', 'Rasha']], [1, 1.4, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"We\'re going to Tishreen Park on Friday morning. Hiba suggested the park because it\'s free. We\'re meeting at the main gate at ten. Fadi is bringing his guitar, and we\'re all bringing food. It costs about ten thousand each."']));
out.push(stage('5', 'Read'));
out.push(p('1 Omar\'s car.  2 Sandwiches.  3 Because he\'s working on Friday.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample([
  '**You:** Hi everyone! Shall we have a picnic in Tishreen Park on Friday? The weather is beautiful this week. 🌳',
  '**Friend 1:** Good idea! Let\'s meet at ten at the main gate. How about bringing food together – everyone brings one thing?',
  '**Friend 2:** Sorry, I can\'t come because my sister is arriving from Homs on Friday. Have a great day! 📸',
  '**You:** So: Friday, 10 am, the main gate of Tishreen Park. Bring food, water and a hat. See you!',
]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['A different suggestion form each time', '✗ – two messages both use _Let\'s_'], ['Refusal has a reason', '✓'], ['Final message has day, time, place, what to bring', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Let\'s meet at ten. Let\'s bring food._  →  After: _Let\'s meet at ten. How about bringing food together?_'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  '**Class 4B – Trip group**',
  '**Hiba:** Hi everyone! Shall we go to Maaloula next Friday? It\'s only an hour away. 🚐',
  '**Tareq:** Good idea! How about renting a small bus? For eight people it\'s cheaper than taxis.',
  '**Rasha:** Perfect. Why don\'t we leave at eight to miss the traffic?',
  '**Fadi:** Sorry, I can\'t come on Friday – I\'m working until two. Can we go on Saturday?',
  '**Hiba:** Saturday is difficult for Tareq, I\'m afraid. Fadi, shall we do the next trip on a Saturday for you?',
  '**Fadi:** Deal! Have a great day and send photos.',
  '**Hiba:** So: Friday, 8 am, outside the centre. Bring water, a hat and 25,000 for the bus. See you! ☀️',
]));
out.push(stage('7P', 'Respond – sample extra message'));
out.push(p('_"Great! Shall I bring a big flask of tea? And is there a shop in Maaloula or do we take all our food?"_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Class check: the plan is clear if the last message answers **where, when, what to bring and how much**.'));
out.push(stage('HW', 'Homework – sample final message'));
out.push(sample(['Final plan: Friday 24 October. Meet outside Al-Yasmin Centre at 7.50 – the bus leaves at 8.00! Bring water, a hat, your lunch and 25,000 SYP. We arrive in Maaloula at about 9.30 and we leave at 2.00. We\'ll be back in Damascus at about 3.30. Fadi can\'t come this time, so we\'re eight people. Any questions, call Hiba: 0936 145 870.']));

// ===== 6.6 =====
out.push(pb());
out.push(h2('6.6  You can\'t park here'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['You can\'t park here.', 'NO PARKING'], ['What does that sign mean?', 'KEEP OFF THE GRASS'], ['You must leave your bag at the desk.', 'Please leave bags at the desk.'], ['It\'s not allowed.', 'No smoking. Thank you!']]));
out.push(p('**b**  NO ENTRY – you can\'t go in · NO SMOKING – you mustn\'t smoke · KEEP OFF THE GRASS – you mustn\'t walk on the grass · QUIET PLEASE – you must be quiet · EXIT – the way out · NO PHOTOS – you can\'t take photos'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (at a museum)   **b**  1 Take photos (in that room) and eat near the old stones.  2 He must leave it at the desk with the guard.'));
out.push(p('**Language box – Practise:**  1 can\'t  2 can  3 must  4 mustn\'t  5 Can'));
out.push(stage('3', 'Practise – sample with signs card A'));
out.push(dlg(null, [['A', 'What does that sign mean?'], ['B', 'It means "keep off the grass". You can\'t walk or sit there.'], ['A', 'I see. Can I have a picnic in the park?'], ['B', 'Yes, you can, but only on the stones near the trees.'], ['A', 'And this one?'], ['B', 'You must leave the park at sunset – it closes then. And you mustn\'t bring your bicycle inside.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A – can: have a picnic on the stones, use the bins; mustn\'t: walk on the grass, bring bicycles. Card B – can: sit anywhere if the bus is empty, keep your ticket; mustn\'t: eat, drink, talk to the driver.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"At my university you must show your student card at the gate. You can eat in the garden, but you mustn\'t eat in the library. You can\'t use your phone in an exam, and you must arrive before the teacher – after that the door is closed!"']));
out.push(p('**b  Sample class rules:** We must speak English in pair work. · You can use your phone to check a word, but you mustn\'t answer calls. · If you arrive late, you must bring sweets for everyone!'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"At Hiba\'s university you must show your student card at the gate. You can eat in the garden, but you mustn\'t eat in the library. And you can\'t use your phone in an exam – of course!"']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the driver can\'t always give change.  2 Children under six.  3 You mustn\'t eat or drink in the minibus, and you mustn\'t smoke.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**AL-YASMIN LANGUAGE CENTRE – CLASSROOM RULES**   • Please arrive five minutes early.   • You must bring your workbook to every lesson.   • Please speak English in pair work – it\'s why we are here!   • You mustn\'t eat in the classroom, but you can drink water or tea.   • Students can use their phones to check a word, but they must put them away in tests.   • Thank you for helping us keep the room clean!']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['can / must / mustn\'t + base verb', '✗ – _You must to bring_ → _You must bring_'], ['A friendly mix (not only mustn\'t)', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _You must to bring your workbook._  →  After: _You must bring your workbook._'));
out.push(stage('7', 'Write freely – sample (≈70 words)'));
out.push(sample(['**TECHCARE OFFICE – HOW WE WORK TOGETHER**', '• Please arrive before 8.30 so we can start the day together.', '• You must write your name on the board when you take a tool from the workshop.', '• You can listen to music, but please use headphones.', '• You mustn\'t eat near the computers. There\'s a table in the kitchen – use it!', '• If you can\'t come to work, you must call Omar before 8.00, not send a message.', '• Visitors can use the Wi-Fi: ask at the desk for the password.', 'Thank you – a tidy office is a happy office!']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Clear and friendly – I like the music rule!   ✓ Can you add a rule about the kitchen (washing cups)?   ? What happens if I\'m late because of the traffic?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Friendliest notice: one that says _Please…_ and gives a reason. Strictest: one with four or more _mustn\'t_ lines.'));
out.push(stage('HW', 'Homework – sample message'));
out.push(sample(['Dear Omar, I read the office rules and I have one question: must we call before eight even on days when we work from home? Also, could I suggest a new rule? Everyone washes their own cup – the kitchen is full of cups every evening! Thank you. Hiba']));

// ===== 6.7 =====
out.push(pb());
out.push(h2('6.7  Review & Mediate: What did they say?'));
out.push(stage('1', 'Get ready – quiz'));
out.push(p('1 I go to work by bus.  2 How long does it take?  3 I walk to save money.  4 How about going on Friday?  5 You must show your ticket.  6 The bus arrives in Aleppo at twelve.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**b**  His bus (the 12:30 to Aleppo) is delayed – it now leaves at 13:15.'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [['B (Latakia)', 'My bus is at one o\'clock from platform two. Is that right?'], ['A', 'The time is the same – one o\'clock – but the platform is different now. It leaves from platform seven, not two.'], ['B', 'Oh! Where is platform seven?'], ['A', 'At the end, next to the café. You have twenty minutes, so you\'re fine.']]));
out.push(p('**Suwayda traveller:** _"I\'m sorry – your bus is cancelled. There\'s no bus at two o\'clock. The next one is at four. You must wait two hours, or take a service to Daraa and change."_'));
out.push(stage('3R', 'Perform'));
out.push(p('Latakia: 13:00, platform 7 (changed from 2). Suwayda: 14:00 cancelled, next bus 16:00.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"On Sunday there was an announcement at my university. The exams are moving from the big hall to the new building because the hall is closed for repairs. Students must bring their university cards and arrive thirty minutes early. The times are the same."']));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(['"At Hiba\'s university there was an announcement on Sunday. The exams are moving from the big hall to the new building because the hall is closed. Students must bring their cards and arrive thirty minutes early."']));
out.push(stage('5', 'Read – A2 Key Reading Part 1'));
out.push(p('1 B  2 A  3 B  4 C'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Hi Nabil,   Bad news – the bus to Aleppo is delayed. It leaves at a quarter past one now, not half past twelve. The platform is the same – number five. We arrive in Aleppo about forty-five minutes later than the plan, so please don\'t come to the garage early. The Suwayda bus is cancelled, so the garage is very busy. Let\'s meet at the café near the station instead.   Omar']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['New time and old time', '✓'], ['Platform information', '✗ – say that it is the **same**'], ['What it means for Nabil', '✓'], ['Own sentences', '✓']]));
out.push(stage('7', 'Write freely – A2 Key Writing Part 6 sample (≈45 words)'));
out.push(sample(['Hi Jack,', 'I\'m coming to Aleppo tomorrow by bus. The bus leaves Damascus at nine and arrives at about one o\'clock. Can you meet me at the bus garage? I don\'t know the city and my phone battery is always empty!', 'See you tomorrow,', 'Rami']));
out.push(p('_Marking note: all three content points (how you travel, arrival time, asking to be met) must be present for full content marks._', { color: '595959' }));
out.push(stage('✓', 'Unit 6 check'));
out.push(p('**A**  1 a  2 b  3 b  4 a  5 c  6 a  7 b  8 a'));
out.push(p('**B**  1 B  2 B  3 B  4 C  5 B'));
out.push(p('**C  Sample message (≈50 words):**'));
out.push(sample(['Hi Lama! Shall we go to Maaloula on Friday? It\'s only fifty-six kilometres and it takes about an hour by bus. The buses go every two hours and a single is fifteen thousand. Why don\'t we meet at the garage at eight to miss the traffic? Let me know!  Maya']));
out.push(p('_Scoring guide: A = 8 marks, B = 5 marks, C = 5 marks (content 2, organisation 1, language 2). Total 18. 13+ = ready for the Mid-Book Test._', { color: '595959' }));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 6 · Answer Key');
