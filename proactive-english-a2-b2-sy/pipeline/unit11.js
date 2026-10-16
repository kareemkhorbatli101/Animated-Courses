// Proactive English A2 · Syria Edition · Book 1 · Unit 11 — Student's Book
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

out.push(h1('Unit 11  Travel & Holidays'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  talk about your holiday plans',
  '**11.2**  book a hotel room',
  '**11.3**  ask about facilities and compare hotels',
  '**11.4**  talk about the weather',
  '**11.5**  write a holiday message',
  '**11.6**  recommend places to a visitor',
  '**11.7**  Review & Mediate: explain a tourist leaflet',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Hotel Al-Bahr** – a small family hotel on the sea road in Latakia (owner: **Abu Ziad**).',
  '**Blue Coast Hotel** – a bigger, more modern hotel in Latakia.   ·   **Mr Peter Lang** – the German visitor (Units 4–6) comes back in the spring.',
], C.lyellow, C.orange));

// ======================= 11.1 =======================
out.push(pb());
out.push(h2('11.1  We\'re going to spend a week in Latakia'));
out.push(p('**Function:** talking about plans   ·   **Grammar:** _be going to_   ·   **Pronunciation:** _going to_ /ˈɡənə/ in fast speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where do people in your city go for a holiday? What do they do there? Your teacher writes the class\'s ideas on the board.'));
out.push(board('We\'re going to visit my uncle.', 'Summer plans: one week in Latakia'));
out.push(p('**b**  Holiday activities: _swim · walk in the mountains · visit relatives · see old places · rest · eat fish · take photos_. Which three are the most popular in this class?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When are they going?   **A** next week   **B** next month   **C** in the summer'));
out.push(p('**b**  Listen again. **1** Who is going?   **2** What isn\'t Rami going to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  Planning the trip', [
  ['Maya', 'So it\'s decided: we\'re going to spend a week in Latakia next month.'],
  ['Lina', 'A whole week! Who\'s going?'],
  ['Maya', 'Me, Lama, and you if you come. Omar is going to join us for the weekend only – he can\'t take a week off.'],
  ['Lina', 'And Rami?'],
  ['Maya', 'Rami says he\'s going to work. He isn\'t going to take a holiday this year.'],
  ['Lina', 'Of course he isn\'t. What are we going to do there?'],
  ['Maya', 'Nothing! That\'s the plan. We\'re going to swim every morning, eat fish, and sleep.'],
  ['Lina', 'I love this plan. Where are we going to stay?'],
  ['Maya', 'My parents\' house is small, so we\'re going to book a hotel near the sea. I\'m going to call two of them tomorrow.'],
  ['Lina', 'How are we going to travel?'],
  ['Maya', 'By bus. It\'s four hours, but it\'s cheap and I can sleep.'],
  ['Lina', 'Perfect. I\'m going to ask Mr Khaled for the days tomorrow morning.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – be going to (plans and decisions you made before now)**',
  table(['+', '–', '?'], [
    ['I **\'m going to** book a hotel. · She **\'s going to** join us. · We **\'re going to** travel by bus.',
     'He **isn\'t going to** take a holiday. · We **aren\'t going to** fly.',
     '**Are** you **going to** stay a week? – Yes, I am. / No, I\'m not.  ·  **What are** you **going to** do? · **Where are** we **going to** stay?'],
  ], [1.3, 1.1, 1.5]),
  '**going to** + **base verb**: _I\'m going to **book**_, not ~~I\'m going to booking~~ or ~~I going to book~~ (don\'t forget _am / is / are_!).',
  'Compare the three futures you know:',
  '_We **\'re going to** book a hotel._ = a plan or decision (this unit)  ·  _I **\'m meeting** Maya at seven._ = an arrangement with a person, with a time (Unit 7)  ·  _The bus **leaves** at eight._ = a timetable (Unit 7)',
  '**Future time words:** tomorrow · next week / month / summer · in August · at the weekend · soon',
  '**Practise:** Make sentences with _going to_.  1 (I / visit / my cousins / next month) ______  2 (she / not take / a holiday) ______  3 (what / you / do / in the summer?) ______  4 (we / travel / by bus) ______  5 (they / not fly / it\'s too expensive) ______',
  '**Useful phrases:** So it\'s decided. · Who\'s going? · A whole week! · That\'s the plan. · Of course he isn\'t.',
  '**Pronunciation.** 🔊 **Track 11.2** In fast speech _going to_ = /ˈɡənə/ ("gonna"): _What are you gonna do?_ Listen and repeat – but **write** _going to_ always! Then say it slowly and clearly: _We\'re **going to** swim every morning._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Plan the trip on the card together. Use **going to** at least six times. Then swap.'));
out.push(dlg(null, [
  ['A', 'So it\'s decided: we\'re going to __________ in __________.'],
  ['B', 'Who\'s going?'],
  ['A', '__________. __________ is going to join us for __________ only.'],
  ['B', 'What are we going to do there?'],
  ['A', 'We\'re going to __________ and __________.'],
  ['B', 'Where are we going to stay?'],
  ['A', 'We\'re going to __________.'],
  ['B', 'And how are we going to travel?'],
  ['A', '__________.'],
]));
out.push(table(['Trip card A', 'Trip card B'], [[
  'three days in Bludan in August · you + two cousins · your brother joins on Friday · walk in the mountains, drink tea outside, sleep · stay in your uncle\'s house · travel by car',
  'a weekend in Aleppo in the spring · you + your wife/husband · nobody else · see the citadel, eat kebab, visit the souq · a small hotel near the centre · travel by bus']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **four** plans you hear with _going to_.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about a **real plan**: your next holiday, a trip to see family, a free weekend, or something you want to do next year. Say at least **five** things with _going to_, including **one thing you aren\'t going to do**. Your partner asks **three** questions. Then change partners and tell it again, faster.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s plan:  _Fadi is going to visit his family in Tartus in August. He\'s going to stay for ten days with his parents. He\'s going to swim every day and help his father in the shop. He isn\'t going to take his laptop – he says he needs a real holiday._'));
out.push(p('**Listener task:** whose plan sounds the best? Who has no plans at all?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Maya\'s message to the group. Answer the questions.'));
out.push(model([
  '**Latakia – the plan 🌊**',
  'Hi everyone! Here\'s the plan for next month, so you can ask for your days off.',
  'We\'re going to travel on Saturday 15 November on the morning bus (it leaves at eight and arrives at about twelve). We\'re going to come back on Saturday 22nd in the evening.',
  'We\'re going to stay in a small hotel near the sea – I\'m going to call two hotels tomorrow and tell you the prices. It\'s about 300,000 a night for two people, I think.',
  'In the week we\'re going to swim, walk on the sea road, visit my parents one evening, and do absolutely nothing else. Lama is going to show us her favourite fish restaurant.',
  'We aren\'t going to plan every day – that\'s the point of this holiday!',
  'Can everybody confirm by Thursday? I need to book.',
  'Maya 🐟',
]));
out.push(item('1', 'When are they going to travel, and when are they coming back?'));
out.push(item('2', 'What is Maya going to do tomorrow?'));
out.push(item('3', 'What aren\'t they going to do?'));
out.push(writers([
  'A plan message: **a friendly title** → **why you\'re writing** → **travel** (date, time, how) → **where you\'re going to stay** (+ price) → **what you\'re going to do** → **what you aren\'t going to do** → **what you need from people** (confirm by…) → your name.',
  'Give **dates and times**, not just "next month". People can\'t book days off from "next month".',
  'End with **one clear action**: _Can everybody confirm by Thursday?_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________**   Hi everyone! Here\'s the plan for ______________.   We\'re going to travel on ______________ (______________) and come back on ______________.   We\'re going to stay ______________. It\'s about ______ a night.   We\'re going to ______________, ______________ and ______________. We aren\'t going to ______________.   Can everybody ______________ by ______________?   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days, months) and full stops', '_am / is / are + going to + base verb_', 'Dates, times and prices are there', 'All parts: travel, stay, do, not do, what you need from people']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a plan message to friends or family about a **real or invented** trip (60 words or more): a holiday, a family visit, a day out, a trip for work or study.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s plan as **somebody invited**. ★ _I\'m coming!_  ✓ _Can you add the price?_  ? _What time does the bus leave?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two plans are read aloud. Which trip would the class join? Which plan is the clearest?'));
out.push(hw('Write a **reply** to your partner\'s plan (30+ words): say yes or no with a reason, ask **one** question, and offer to organise **one** thing.'));

// ======================= 11.2 =======================
out.push(pb());
out.push(h2('11.2  I\'d like to book a double room'));
out.push(p('**Function:** booking a room   ·   **Grammar:** _I\'d like to…_; dates (recycle)   ·   **Pronunciation:** saying dates and numbers clearly'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you ask when you book a hotel? What does the hotel ask you? Make two lists.'));
out.push(board('Have you got a room for three nights?', 'Booking: 15–22 Nov, 1 double room'));
out.push(p('**b**  Match: _single room · double room · twin room · half board · full board · breakfast included_  →  two separate beds · one big bed · one bed for one person · breakfast only · breakfast and dinner · all three meals'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many rooms does Maya book?   **A** one   **B** two   **C** three'));
out.push(p('**b**  Listen again. **1** How much is a room with a sea view?   **2** What does Abu Ziad give them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  Phoning Hotel Al-Bahr', [
  ['Abu Ziad', 'Hotel Al-Bahr, good morning.'],
  ['Maya', 'Good morning. I\'d like to book two rooms, please, from Saturday the 15th of November to Saturday the 22nd.'],
  ['Abu Ziad', 'Seven nights. What kind of rooms?'],
  ['Maya', 'One double and one twin, please. Have you got anything with a sea view?'],
  ['Abu Ziad', 'Let me look… Yes, I have two rooms on the second floor, both with a balcony and a sea view.'],
  ['Maya', 'How much are they?'],
  ['Abu Ziad', 'The rooms with a sea view are 350,000 a night. Without a view they\'re 280,000. Breakfast is included.'],
  ['Maya', 'And for seven nights?'],
  ['Abu Ziad', 'For a week I can give you a better price: 320,000 a night for the sea view rooms. That\'s for both rooms together… no, sorry – that\'s for each room.'],
  ['Maya', 'OK. Is breakfast really included?'],
  ['Abu Ziad', 'My wife makes it. Nobody leaves hungry.'],
  ['Maya', '(laughs) Then we\'ll take the sea view. Can I pay when we arrive?'],
  ['Abu Ziad', 'Of course. Can I take your name and a phone number?'],
  ['Maya', 'Maya Nasser, 0933 427 815. What time can we check in?'],
  ['Abu Ziad', 'From two o\'clock. And check-out is at twelve. See you in November!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Booking a room**',
  table(['You', 'The hotel'], [
    ['I\'d like to **book** a room, please. · **from** the 15th **to** the 22nd · Have you got anything **with a sea view**? · How much **is it per night**? · Is breakfast **included**? · Can I pay **when we arrive**? · What time can we **check in**?',
     'What kind of room? · For how many nights? · Let me look… · I can give you a better price. · Can I take your name? · Check-in is **from** two, check-out is **at** twelve.'],
  ], [1.4, 1.2]),
  '**Rooms:** a **single** room (one person) · a **double** room (one big bed) · a **twin** room (two beds) · a room **with a balcony / a sea view**',
  '**Prices:** 350,000 **a night** (= per night) · breakfast **included** · **half board** (breakfast + dinner) · **full board** (all meals)',
  '**Dates:** **from** Saturday the 15th **to** Saturday the 22nd = seven nights. ⚠ Count the **nights**, not the days!',
  '**Practise:** Complete.  1 I\'d like to book a room ______ three nights.  2 It\'s 300,000 ______ night.  3 We\'re staying ______ Monday ______ Friday.  4 Is breakfast ______?  5 What time can we ______ in?',
  '**Useful phrases:** What kind of rooms? · Let me look… · Nobody leaves hungry. · Then we\'ll take… · See you in November!',
  '**Pronunciation.** 🔊 **Track 11.4** Say dates and big numbers **slowly** and repeat them back: _from the fifteenth to the twenty-second_ · _three hundred and twenty thousand a night_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, **back to back**. A phones the hotel; B is the receptionist with the card. Book the room and write down the details. Then swap.'));
out.push(dlg(null, [
  ['B', '__________, good morning.'],
  ['A', 'Good morning. I\'d like to book __________, please, from __________ to __________.'],
  ['B', '__________ nights. What kind of room?'],
  ['A', '__________. Have you got anything with __________?'],
  ['B', 'Let me look… __________.'],
  ['A', 'How much is it per night?'],
  ['B', '__________. Breakfast __________.'],
  ['A', 'Can I pay __________? What time can we check in?'],
  ['B', 'Check-in is from __________ and check-out is at __________.'],
]));
out.push(table(['Hotel card A – Hotel Al-Qalaa, Aleppo', 'Hotel card B – Cham Guesthouse, Bludan'], [
  ['single 180,000 · double 250,000 · with balcony +40,000', 'double 200,000 · family room (4 people) 350,000'],
  ['breakfast included · dinner 60,000 extra', 'half board only · no single rooms'],
  ['check-in from 14:00 · check-out 12:00', 'check-in from 16:00 · check-out 11:00'],
  ['pay on arrival, cash only', 'pay 50% now by transfer'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform (back to back). **Listener task:** write the booking: dates, kind of room, price per night, total nights, check-in time.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Plan a **real or invented** trip and phone your partner\'s hotel. Book it: dates, kind of room, price, meals, payment, check-in.'));
out.push(p('**b**  Phone again – something has changed! (You need one more night / one more person / you have to cancel one room.) Sort it out politely.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I booked a double room in Aleppo from the 3rd to the 6th – three nights, 250,000 a night with breakfast. Then my brother decided to come, so I phoned again and changed it to a family room for 350,000. Check-in is at two._'));
out.push(p('**Listener task:** who got the best price? Who had the most difficult hotel?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the booking email and the hotel\'s reply. Answer the questions.'));
out.push(model([
  '**1 · Maya → Hotel Al-Bahr**',
  '**Subject:** Booking request – 15–22 November (2 rooms)',
  'Dear Sir,',
  'I would like to book two rooms at your hotel from Saturday 15 November to Saturday 22 November – seven nights.',
  'We would like one double room and one twin room, both with a sea view if possible. There are four of us: two sisters and two friends.',
  'Could you confirm the price per night and tell me if breakfast is included? We would also like to know if we can pay when we arrive.',
  'My phone number is 0933 427 815.',
  'Thank you very much.',
  'Best regards, Maya Nasser',
  '**2 · Hotel Al-Bahr → Maya**',
  '**Subject:** RE: Booking request – 15–22 November (2 rooms)',
  'Dear Ms Nasser,',
  'Thank you for your email. We are happy to confirm two rooms (one double, one twin) on the second floor, both with a balcony and a sea view, from 15 to 22 November.',
  'The price is 320,000 SYP per room per night, and breakfast is included. You can pay when you arrive, in cash.',
  'Check-in is from 2 pm and check-out is at 12 noon. If you arrive early, you can leave your bags with us.',
  'We look forward to welcoming you.',
  'Best regards, Ziad Mansour · Hotel Al-Bahr · Latakia · 041 556 200',
]));
out.push(item('1', 'How many people are travelling?'));
out.push(item('2', 'What three questions does Maya ask?'));
out.push(item('3', 'What can they do if they arrive before 2 pm?'));
out.push(writers([
  'A booking email: **subject with dates** → _Dear Sir / Madam,_ → **what you want to book** (dates + number of nights) → **what kind of rooms + how many people** → **your questions** (price, breakfast, payment) → **your phone number** → _Best regards,_ + name.',
  'The hotel\'s reply: **thank you** → **confirm everything** → **price and what\'s included** → **check-in / check-out** → **one helpful extra** → **we look forward to welcoming you**.',
  'Always write the dates **twice**: _from 15 November to 22 November – seven nights._ This stops expensive mistakes!',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Subject:** Booking request – ______________   Dear Sir or Madam,   I would like to book ______________ from ______________ to ______________ – ______ nights.   We would like ______________. There are ______ of us.   Could you confirm ______________ and tell me if ______________? We would also like to know ______________.   My phone number is ______________.   Thank you very much.   Best regards, ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (months!) and full stops', 'Formal forms (I would like, no contractions)', 'Dates written twice: from… to… – X nights', 'All parts: rooms, people, questions, phone number']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your booking sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a booking email for a **real or invented** trip (60 words or more). Then give it to your partner – they write the hotel\'s reply in 7P.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Write the **hotel\'s reply** to your partner\'s email: confirm the booking, give the price, answer their questions, and add one helpful thing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two pairs read their email + reply aloud. Which hotel would you book?'));
out.push(hw('Write a **third** email (25+ words): two weeks later, you need to change the booking (one night more, or a different room). Be polite and give the new dates clearly.'));

// ======================= 11.3 =======================
out.push(pb());
out.push(h2('11.3  Is there a lift?'));
out.push(p('**Function:** asking about facilities and comparing   ·   **Grammar:** _Is there…? / Are there…? / Does it have…?_; comparatives (recycle)   ·   **Pronunciation:** linking _Is there…_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is important for you in a hotel? Put these in order 1–8: _price · breakfast · Wi-Fi · a view · air conditioning · a quiet room · near the sea / the centre · parking_'));
out.push(board('Is there a lift?', 'Facilities: Wi-Fi, parking, restaurant'));
out.push(p('**b**  _Is there…?_ or _Are there…?_  ______ a restaurant? · ______ any shops near the hotel? · ______ air conditioning in the rooms? · ______ towels in the room?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which hotel do they choose?   **A** Al-Bahr   **B** Blue Coast   **C** they can\'t decide'));
out.push(p('**b**  Listen again. **1** Which hotel is cheaper?   **2** Why is the other one better for Lama?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  Two hotels', [
  ['Lina', 'OK, Maya, you called both hotels. Tell us.'],
  ['Maya', 'Hotel Al-Bahr first. It\'s a small family hotel on the sea road. Is there a lift? No. Our rooms are on the second floor.'],
  ['Lama', 'Second floor is fine.'],
  ['Maya', 'There\'s a balcony with a sea view, breakfast is included, and it\'s 320,000 a night.'],
  ['Lina', 'And the other one?'],
  ['Maya', 'The Blue Coast is newer and bigger. It has a lift, a swimming pool and a restaurant. But it\'s 480,000 a night and breakfast isn\'t included.'],
  ['Lama', 'Does it have Wi-Fi? I have to send my university work.'],
  ['Maya', 'Both have Wi-Fi, but Abu Ziad said, "The internet is good when the electricity is good." Honest man!'],
  ['Lina', 'Ha! Is the Blue Coast nearer the centre?'],
  ['Maya', 'Yes, it\'s five minutes from the restaurants. Al-Bahr is quieter, but it\'s twenty minutes on foot.'],
  ['Lama', 'I prefer quiet. And I\'d rather spend the money on fish than on a swimming pool.'],
  ['Lina', 'Agreed. Al-Bahr. And we can walk twenty minutes – it\'s a holiday, not a meeting!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking about facilities**',
  table(['Is there…? (singular)', 'Are there…? (plural)', 'Does it have…? / Has it got…?'], [
    ['**Is there** a lift / a pool / air conditioning / parking?', '**Are there** any shops / restaurants near the hotel?', '**Does it have** Wi-Fi? · **Has it got** a balcony?'],
  ], [1.2, 1.2, 1.3]),
  '**Hotel facilities:** a lift · a swimming pool · a restaurant · parking · air conditioning (AC) · heating · Wi-Fi · a balcony · a sea view · a safe · hot water 24 hours',
  '**Comparing (Unit 5):** It\'s **cheaper than** the other one. · The Blue Coast is **newer** and **bigger**. · Al-Bahr is **quieter**. · It\'s **nearer** the centre. · **The best thing about** Al-Bahr is the breakfast.',
  '**Practise:** Write the questions.  1 (a lift?) ______  2 (any shops near the hotel?) ______  3 (Wi-Fi in the rooms?) ______  4 (parking?) ______  5 (the rooms / air conditioning?) ______',
  '**Useful phrases:** Tell us. · …first. · Honest man! · I prefer quiet. · It\'s a holiday, not a meeting!',
  '**Pronunciation.** 🔊 **Track 11.6** Link the words: _Is‿there‿a lift?_ /ɪzðərə/ · _Are‿there‿any shops?_ /ɑːðərəni/. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the two hotels on the card. B asks **six** questions about facilities, then they choose together – and give **two** reasons. Then swap roles with the other card.'));
out.push(table(['Compare card A', 'Hotel 1 – City Inn', 'Hotel 2 – Garden House'], [
  ['Price a night', '200,000', '300,000'],
  ['Where', 'in the centre, noisy street', '15 min from the centre, quiet garden'],
  ['Facilities', 'lift, AC, Wi-Fi, no breakfast', 'no lift, AC, Wi-Fi, breakfast included, parking'],
  ['Rooms', 'small, 4th floor', 'big, ground floor, balcony'],
], [1.2, 1.4, 1.4]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write their choice and the two reasons. Do you agree?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Think about a place you stayed in (a hotel, a guesthouse, a relative\'s house) – or invent one. Your partner asks **eight** questions about the facilities and the price.'));
out.push(p('**b**  Now compare it with your partner\'s place: which is better for a family? For students? For an older person? Agree together.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Hiba stayed in a guesthouse in Bludan. There isn\'t a lift and the rooms are small, but there\'s a big garden and the breakfast is famous. It\'s cheaper than my hotel in Tartus, but my hotel is nearer the sea. We decided: the guesthouse is better for families and my hotel is better for young people._'));
out.push(p('**Listener task:** which place do you want to stay in?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the hotel description from a travel page. Answer the questions.'));
out.push(model([
  '**HOTEL AL-BAHR, LATAKIA**  ⭐⭐⭐  **Our review: 8/10**',
  'Hotel Al-Bahr is a small family hotel on the sea road, twenty minutes on foot from the centre of Latakia. The Mansour family has had it for thirty years, and Abu Ziad knows every guest by name after one day.',
  '**The rooms** are simple but very clean. Most have a balcony and a sea view, and all of them have air conditioning and good hot water. There isn\'t a lift, so ask for the first floor if you don\'t want stairs.',
  '**Breakfast** is included and it is the best thing about this hotel: fresh bread, olives, cheese, eggs, and tea on the terrace. Nobody leaves hungry.',
  '**What isn\'t here:** there\'s no swimming pool, no restaurant in the evening, and the Wi-Fi is slow when the electricity is weak.',
  '**Price:** from 280,000 SYP a night (320,000 with a sea view).',
  '**Perfect for:** families and people who want a quiet holiday near the sea.  **Not for:** people who want a modern hotel with a pool.',
]));
out.push(item('1', 'How far is the hotel from the centre?'));
out.push(item('2', 'What is the best thing about the hotel?'));
out.push(item('3', 'Who is it not for?'));
out.push(writers([
  'A hotel review: **name + stars + your score** → **where it is + who runs it** → **The rooms** → **Breakfast / food** → **What isn\'t here** (be honest!) → **Price** → **Perfect for… / Not for…**',
  'Use **there is / there are** and **it has** for facilities, and **comparatives** when you compare.',
  'A review people trust always says **what is missing**. "Everything is perfect" helps nobody.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________**  ⭐⭐⭐  **Our review: ___/10**   ______________ is a ______________ in ______________, ______________ from ______________.   **The rooms** are ______________. There is / isn\'t ______________.   **Breakfast** ______________.   **What isn\'t here:** there\'s no ______________ and ______________.   **Price:** from ______ a night.   **Perfect for:** ______________.  **Not for:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'there is / there are / it has used correctly', 'An honest "what isn\'t here" section', 'All parts: where, rooms, food, missing, price, who it\'s for']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a review (60 words or more) of a **real** place you stayed in, or of a place in your city a visitor could stay. Be honest – include what isn\'t there.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s review as a **traveller choosing a hotel**. ★ _I trust this review!_  ✓ _Can you add if there\'s parking?_  ? _Is it noisy at night?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the reviews on the wall. Which place would the class book for a family? For students?'));
out.push(hw('Write a short review of the **same place** for a different person (30+ words): if you wrote for families, write for a business traveller – what changes?'));

// ======================= 11.4 =======================
out.push(pb());
out.push(h2('11.4  It\'s going to rain'));
out.push(p('**Function:** talking about the weather   ·   **Grammar:** _going to_ from evidence; weather adjectives   ·   **Pronunciation:** /eə/ _there, wear, air_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What\'s the weather like today? What is it like in your city in each season? Make a class weather map.'));
out.push(board('It\'s going to rain.', 'Tomorrow: sunny, 24°'));
out.push(p('**b**  Weather words: _sunny · cloudy · rainy · windy · hot · cold · warm · cool · wet · dry_. Which three describe today?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** the weather is bad in Latakia   **B** the bus is cancelled   **C** the hotel is full'));
out.push(p('**b**  Listen again. **1** What\'s the weather going to be like at the weekend?   **2** What does Lama decide to take?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  The day before', [
  ['Lama', 'Maya, have you seen the sky? Those clouds are very dark.'],
  ['Maya', 'I know. It\'s going to rain, I think.'],
  ['Lama', 'In November, in Latakia? Of course it is. I checked the forecast: Saturday and Sunday are going to be wet and windy, and then it\'s going to be sunny all week.'],
  ['Maya', 'So two bad days and five good ones. That\'s fine.'],
  ['Lama', 'But what are we going to do on Saturday if it rains all day?'],
  ['Maya', 'We\'re going to sit on the balcony with tea and watch the sea. Rain on the sea is beautiful.'],
  ['Lama', 'You always have an answer. OK – then I\'m going to take a jacket and my book.'],
  ['Maya', 'Take an umbrella too. And don\'t take five pairs of shoes like last time.'],
  ['Lama', 'That was ONE extra pair!'],
  ['Maya', 'It was four. How cold is it going to be?'],
  ['Lama', 'About eighteen in the day, twelve at night. Warmer than here.'],
  ['Maya', 'Perfect. Sea, rain, tea, books. I can\'t wait.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – going to for predictions with evidence**',
  'When you can **see** something now, use **going to**: _Look at those clouds – it**\'s going to rain**._ · _The sky is clear – it**\'s going to be** a beautiful day._',
  '**Talking about the weather:**',
  table(['Asking', 'Answering', 'Temperature'], [
    ['What\'s the weather like? · What\'s it going to be like tomorrow? · How cold is it going to be?',
     'It\'s **sunny / cloudy / windy / wet**. · It\'s **raining**. (now) · It\'s going to be **cold** at the weekend.',
     'It\'s about **eighteen degrees**. · Eighteen in the day, twelve **at night**. · It\'s **warmer than** here.'],
  ], [1.3, 1.3, 1.3]),
  '⚠ _It\'s **raining**_ = now, it\'s falling.  _It\'s **rainy**_ = that kind of weather.  _It\'s **going to** rain_ = not yet, but soon!',
  '**Seasons:** in spring · in summer · in autumn · in winter',
  '**Practise:** Complete with _going to_ and the verb.  1 Look at the sky – it ______ (snow)!  2 The clouds are black. I think it ______ (rain).  3 It ______ (be) very hot tomorrow – forty degrees.  4 Take a jacket. It ______ (be) cold tonight.  5 It ______ (not / rain) this week.',
  '**Useful phrases:** Have you seen the sky? · I checked the forecast. · You always have an answer. · I can\'t wait.',
  '**Pronunciation.** 🔊 **Track 11.8** /eə/: _there · wear · air · where · chair · their_. Listen and repeat: _Wear a jacket – there\'s cold air out there._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A and B are travelling tomorrow. Look at the forecast card and decide **what to take** and **what to do** on the bad days. Then swap cards.'));
out.push(table(['Forecast card A – Aleppo, next week', 'Forecast card B – Bludan, next week'], [
  ['Mon: sunny, 22°', 'Mon: cold and windy, 8°'],
  ['Tue: cloudy, 19°', 'Tue: snow!, 2°'],
  ['Wed: rain all day, 15°', 'Wed: sunny but cold, 6°'],
  ['Thu–Fri: sunny, 24°', 'Thu–Fri: cloudy, 10°'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **three** things they\'re going to take and **one** plan for a bad day.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Describe the weather in your city in the four seasons to your partner. Which is your favourite? Why?'));
out.push(p('**b**  Now: your partner is coming to visit you next month. What\'s the weather going to be like? What should they bring? What are you going to do if it rains?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq says Suwayda is beautiful in spring – warm in the day, cool at night. In winter it\'s very cold and sometimes it snows. If I visit him in December, I\'m going to need a heavy coat, and he says we\'re going to sit by the stove and eat all day._'));
out.push(p('**Listener task:** which city has the best weather? The worst?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the weather page. Answer the questions.'));
out.push(table(['LATAKIA – THIS WEEK', '', '', ''], [
  ['**Day**', '**Weather**', '**Day / Night**', '**Note**'],
  ['Saturday', 'rain and wind', '17° / 12°', 'Take an umbrella!'],
  ['Sunday', 'cloudy, some rain', '18° / 12°', 'Good day for the museum'],
  ['Monday', 'sunny', '21° / 13°', 'Perfect beach weather'],
  ['Tuesday', 'sunny', '22° / 14°', ''],
  ['Wednesday', 'cloudy', '20° / 14°', 'Warm sea – still good for swimming'],
  ['Thursday–Friday', 'sunny', '23° / 15°', 'The best days of the week'],
], [1, 1.2, 0.9, 1.6], { headFill: C.orange }));
out.push(sp());
out.push(p('**And the message Lama sent with it:**'));
out.push(model([
  'Hi everyone! Here\'s the forecast for our week. 🌦',
  'The first two days are going to be wet – Saturday is the worst: rain, wind and only 17 degrees. But from Monday it\'s going to be sunny all week, between 21 and 23 in the day.',
  'So: bring a jacket and an umbrella for the first two days, and your swimming things for the rest of the week. The sea is still warm in November!',
  'And don\'t worry about Saturday. We\'re going to sit on the balcony with tea and watch the rain on the sea. Maya says it\'s beautiful. She\'s usually right.',
]));
out.push(item('1', 'Which is the worst day?'));
out.push(item('2', 'What should people bring?'));
out.push(item('3', 'What are they going to do on Saturday?'));
out.push(writers([
  'A weather message: **the bad days first** (be honest) → **the good days** (with temperatures) → **what to bring** → **a plan for the bad weather** → a friendly ending.',
  'Give **numbers**: _only 17 degrees_, _between 21 and 23_. "Quite warm" means nothing to somebody packing a bag!',
  'Use **going to** for the forecast and for your plans.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi everyone! Here\'s the forecast for ______________.   The first ______ days are going to be ______________ – ______ is the worst: ______________. But from ______ it\'s going to be ______________, between ______ and ______ degrees.   So: bring ______________ for ______________, and ______________ for ______________.   And don\'t worry about ______. We\'re going to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (days!) and full stops', '_going to_ + base verb for the forecast', 'Temperatures and numbers are there', 'All parts: bad days, good days, what to bring, a plan']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one forecast sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a weather message (60 words or more) for someone visiting **your city** next week – real weather if you know it, or typical weather for this month. Include what to bring and a plan for bad weather.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Now I know what to pack!_   ✓ _Can you add the temperature at night?_   ? _Do I need a coat or just a jacket?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Could you pack your bag from them?'));
out.push(hw('Write the visitor\'s **reply** (25+ words): say what you\'re going to bring, ask **one** question about the weather, and suggest one thing to do on a rainy day.'));

// ======================= 11.5 =======================
out.push(pb());
out.push(h2('11.5  We\'re having a great time!'));
out.push(p('**Function:** writing a holiday message   ·   **Grammar:** present continuous (now) + past simple (yesterday)   ·   **Pronunciation:** contractions in fast speech'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When you travel, who do you send photos and messages to? What do you write? Make a class list.'));
out.push(board('We\'re having a great time!', 'Wish you were here! 🌊'));
out.push(p('**b**  Now or yesterday? _I\'m sitting on the balcony. · We swam this morning. · The sun is going down. · We ate the best fish._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Maya doing while she talks?   **A** swimming   **B** sitting outside   **C** walking to the hotel'));
out.push(p('**b**  Listen again. **1** What did they do yesterday?   **2** Why is Rami laughing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  A video call from Latakia', [
  ['Rami', 'Maya! Where are you? I can hear the sea.'],
  ['Maya', 'I\'m sitting on the hotel balcony. Look – can you see?'],
  ['Rami', 'Oh, that\'s beautiful. And warm?'],
  ['Maya', 'Twenty-two degrees. Lama is swimming right now – in November!'],
  ['Rami', 'And how is it? Tell me everything.'],
  ['Maya', 'It\'s perfect. We\'re having a wonderful time. Yesterday we walked on the sea road for two hours and we ate at a tiny fish restaurant – the best fish of my life, Rami. Lama\'s friend took us.'],
  ['Rami', 'Stop. I\'m eating a sandwich at my desk.'],
  ['Maya', '(laughing) This morning we visited my parents, and my mother gave us food for three days.'],
  ['Rami', 'Of course she did.'],
  ['Maya', 'Tonight we\'re going to the old port. What are you doing?'],
  ['Rami', 'I\'m working. Then I\'m going to work. And after that – more work.'],
  ['Maya', 'Rami. Next year you\'re coming with us. That isn\'t a question.'],
  ['Rami', '(laughing) Yes, boss.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – mixing the tenses in a holiday message**',
  table(['NOW (present continuous)', 'YESTERDAY / THIS MORNING (past simple)', 'TONIGHT / TOMORROW (going to / present continuous)'], [
    ['I**\'m sitting** on the balcony. · Lama **is swimming**. · We**\'re having** a wonderful time.',
     'Yesterday we **walked** on the sea road and **ate** at a fish restaurant. · This morning we **visited** my parents.',
     'Tonight we**\'re going** to the old port. · Tomorrow we**\'re going to** take a boat.'],
  ], [1.2, 1.4, 1.4]),
  'A good holiday message uses **all three**: what you\'re doing **now**, what you **did**, and what you\'re going to do **next**.',
  '**Holiday phrases:** We\'re having a wonderful / great time. · The weather is perfect. · It\'s the best … of my life. · Wish you were here! · See you soon!',
  '**Practise:** Choose the correct form.  1 Right now I (_sit / \'m sitting_) in a café.  2 Yesterday we (_visit / visited_) the old city.  3 Tonight we (_\'re going / go_) to a concert.  4 The sun (_shines / is shining_) and it\'s beautiful.  5 This morning I (_swam / swim_) for an hour.',
  '**Useful phrases:** Tell me everything. · Stop – I\'m at my desk! · Of course she did. · That isn\'t a question. · Yes, boss.',
  '**Pronunciation.** 🔊 **Track 11.10** Contractions in fast speech: _we\'re having_ /wɪəˈhævɪŋ/ · _I\'m sitting_ · _she\'s swimming_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is on holiday in the place on the card, B is at home. Make a video call. A must say **three** things: now, yesterday, tonight. Then swap.'));
out.push(dlg(null, [
  ['B', 'Where are you? What can I hear?'],
  ['A', 'I\'m __________. Look – can you see?'],
  ['B', 'How is it? Tell me everything.'],
  ['A', 'It\'s __________. We\'re having __________. Yesterday we __________ and we __________.'],
  ['B', '__________!'],
  ['A', 'This morning we __________. Tonight we\'re __________.'],
  ['B', 'And what\'s the weather like?'],
  ['A', '__________.'],
]));
out.push(table(['Holiday card A – Aleppo', 'Holiday card B – Bludan'], [
  ['now: in a café in the old souq', 'now: on the balcony, mountains everywhere'],
  ['yesterday: visited the citadel, walked 5 hours', 'yesterday: walked to the village, drank tea with a family'],
  ['this morning: ate the famous kebab', 'this morning: slept until ten!'],
  ['tonight: meeting an old friend', 'tonight: a barbecue with the cousins'],
  ['weather: sunny, 24°', 'weather: cold at night, 8°'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write one thing for **now**, one for **yesterday** and one for **tonight**.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Imagine you are on holiday **today** – anywhere you like (a real place you know or a dream place). Your partner phones you. Tell them: where you are and what you\'re doing now, what you did yesterday and this morning, and what you\'re going to do tonight. Your partner asks **four** questions. Then swap.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s "holiday":  _Hiba is in Aleppo. Right now she\'s sitting in a café in the souq. Yesterday she visited the citadel and walked for five hours. This morning she ate the famous kebab, and tonight she\'s meeting an old friend from university._'));
out.push(p('**Listener task:** whose holiday sounds the best? Who is doing nothing at all?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the postcard and the message. Answer the questions.'));
out.push(model([
  '**1 · A postcard to Teta (Maya\'s grandmother)**',
  'Dear Teta,',
  'Greetings from Latakia! Lama and I are sitting on the balcony and the sea is in front of us. The weather is beautiful – twenty-two degrees in November!',
  'Yesterday we walked on the sea road and we ate at a small fish restaurant. This morning we visited Mum and Dad, and Mum gave us food for three days (of course).',
  'Tonight we\'re going to the old port with Lama\'s friends.',
  'We\'re thinking of you and we\'re going to bring you something from the market.',
  'With all our love, Maya and Lama 🌊',
  '**2 · A message to the class group**',
  'Hi 4B! 🌊 We\'re having a wonderful time. Right now Lama is swimming (in NOVEMBER) and I\'m watching from the balcony with tea.',
  'Yesterday: five hours walking, the best fish of my life, and I slept nine hours.',
  'Tomorrow we\'re going to take a boat if the weather stays like this.',
  'Rami – we talked about you. Next year you\'re coming. 😄 See you all on Sunday!',
]));
out.push(item('1', 'Who are the two texts for? How is the language different?'));
out.push(item('2', 'What are they going to do tomorrow?'));
out.push(item('3', 'What are they going to bring Teta?'));
out.push(writers([
  'A holiday message: **greeting** → **where you are and what you\'re doing NOW** → **what you DID yesterday / this morning** → **what you\'re GOING TO do tonight / tomorrow** → **a warm line for the reader** (_We\'re thinking of you_) → your name.',
  'A **postcard to an older relative** is warmer and more complete. A **group message** is shorter, with jokes and emojis.',
  'The best holiday messages give **one small detail**, not a list: _Mum gave us food for three days_ is better than "we had a nice time".',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______,   Greetings from ______________! I\'m ______________ and ______________. The weather is ______________.   Yesterday we ______________ and we ______________. This morning ______________.   Tonight we\'re ______________.   We\'re thinking of you and ______________.   With love, ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'NOW = present continuous; YESTERDAY = past simple', 'TONIGHT / TOMORROW = going to or present continuous', 'All parts: now, yesterday, next, a warm line']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write **two** holiday texts (60 words or more in total) from the "holiday" you invented in Stage 4: **(a)** a postcard to an older relative and **(b)** a short group message to friends. Make the two sound different!'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s postcard as the **relative**. ★ _This made my day!_  ✓ _Can you add how the food is?_  ? _When are you coming home?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two pairs of texts are read aloud. What is different between the postcard and the group message?'));
out.push(hw('Write the **relative\'s reply** (30+ words): say you\'re happy, ask two questions, and tell them one piece of news from home.'));

// ======================= 11.6 =======================
out.push(pb());
out.push(h2('11.6  You should visit the old city'));
out.push(p('**Function:** recommending places   ·   **Grammar:** _should_ (recycle) + superlatives (recycle)   ·   **Pronunciation:** stress on the important word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  A foreign visitor has three days in Syria. Where should they go? Make a class top five.'));
out.push(board('You should visit the Old City.', 'Three days in Damascus: a short guide'));
out.push(p('**b**  Finish: The most beautiful place in my city is ______. · The best food is ______. · The thing visitors always love is ______.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When is Mr Lang coming back?   **A** next month   **B** in the spring   **C** next year'));
out.push(p('**b**  Listen again. **1** What does Lina recommend for the first day?   **2** What does she say about the market?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  A visitor is coming back', [
  ['Mr Lang', 'Lina, good news – I\'m coming back to Damascus in April, and this time I\'m going to stay five days, not two.'],
  ['Lina', 'That\'s wonderful! April is the best month – warm, but not hot.'],
  ['Mr Lang', 'So, tell me honestly: what should I do with five days?'],
  ['Lina', 'Two days in Damascus, and then you should go outside the city. Here in Damascus you should start early in the Old City – before nine, when the streets are empty and the light is beautiful.'],
  ['Mr Lang', 'And the souq?'],
  ['Lina', 'Souq Al-Hamidiyah, yes, but go in the afternoon, when it\'s full of people. That\'s the real experience. And eat the ice cream – everybody does.'],
  ['Mr Lang', 'What about outside Damascus?'],
  ['Lina', 'Maaloula is only an hour away, and Bosra has the most beautiful Roman theatre I\'ve seen. If you have one more day, Krak des Chevaliers is amazing, but it\'s a long drive.'],
  ['Mr Lang', 'And where should I eat?'],
  ['Lina', 'Not in the hotel! You should eat in the small places in the Old City. Ask for fattoush and makdous. And shawarma from a street place, not a restaurant.'],
  ['Mr Lang', 'You\'re a very good guide. Shall I book a hotel in the centre?'],
  ['Lina', 'Yes – and ask for a room away from the street. Damascus is beautiful, but it isn\'t quiet!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Recommending places**',
  table(['Recommending', 'Warning / practical advice', 'Giving a reason'], [
    ['You **should visit / go / try / eat**… · You **must see**… · **Don\'t miss**… · The **best** thing is… · My **favourite** place is…',
     'Go **early** – it\'s quieter. · **Don\'t** eat in the hotel. · **Ask for** a room away from the street. · It\'s a long drive.',
     '…**because** it\'s the oldest in the city. · …**when** the light is beautiful. · It\'s only an hour **away**.'],
  ], [1.4, 1.3, 1.3]),
  '**Superlatives (Unit 5):** the **best** month · the **most beautiful** theatre · the **oldest** café · the **cheapest** place to eat',
  '**Good recommendations have three parts:** the **place** + **when / how** to go + **why**.  _Go to the souq **in the afternoon**, **when it\'s full of people** – that\'s the real experience._',
  '**Practise:** Make recommendations with the three parts.  1 (the Old City / early / quiet)  2 (the park / Friday / families and music)  3 (the fish restaurant / book first / very popular)',
  '**Useful phrases:** Tell me honestly. · That\'s the real experience. · Everybody does. · You\'re a very good guide. · …, but it isn\'t quiet!',
  '**Pronunciation.** 🔊 **Track 11.12** Stress the **important** word: _Go in the **AF**ternoon._ · _Don\'t eat in the **HO**tel._ · _It\'s the **BEST** month._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor with the card, B recommends places in **their own city**. Give at least **four** recommendations with a reason, and **two** warnings. Then swap.'));
out.push(table(['Visitor card A', 'Visitor card B'], [[
  'two days only · loves old buildings and photography · doesn\'t like crowds · travelling alone',
  'four days · with two children (6 and 9) · likes food and markets · can\'t walk long distances']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four places and one reason for each. Is the advice right for that visitor?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Your partner is coming to **your** city or village for three days. Plan it with them: what to see, when to go, where to eat, what to avoid. Give a reason every time.'));
out.push(p('**b**  Now your partner does the same for their place. Which trip do you want to make?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s recommendations:  _Fadi says I should go to Tartus in June, not August, because August is too crowded. I should eat fish at the port, but in a small place, not the big restaurants. And I shouldn\'t drive – he says the parking is impossible._'));
out.push(p('**Listener task:** which place do you want to visit now?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the guide Lina wrote for Mr Lang. Answer the questions.'));
out.push(model([
  '**FIVE DAYS IN SYRIA – a short guide for Peter**',
  '**Day 1 · Old Damascus.** Start early – before nine the streets are empty and the light is perfect for photos. Walk down Straight Street to Bab Sharqi. In the afternoon, go to Souq Al-Hamidiyah when it\'s full of people, and don\'t leave without the ice cream.',
  '**Day 2 · Museums and modern Damascus.** The National Museum in the morning (closed on Tuesdays!), then walk in Shaalan and have coffee where the students go.',
  '**Day 3 · Maaloula.** Only an hour from the city. Go early, take a hat, and stay for lunch in the village.',
  '**Day 4 · Bosra.** Two hours south. The Roman theatre is the most beautiful I\'ve ever seen. It\'s hot, so take water.',
  '**Day 5 · Rest and the market.** Buy your presents on the last day, not the first – you don\'t want to carry them for a week!',
  '**Eating:** small places, not hotels. Fattoush, makdous, shawarma from a street place. Ask the people around you what they are eating and order that.',
  '**One last thing:** people are going to invite you for coffee. Say yes. That\'s the best part of Syria.',
]));
out.push(item('1', 'Why should Peter start early on Day 1?'));
out.push(item('2', 'Why should he buy presents on the last day?'));
out.push(item('3', 'What is "the best part of Syria" for Lina?'));
out.push(writers([
  'A short guide: **a title with the number of days** → **a section for each day** (place + when/how + why) → **a food section** → **one last personal tip**.',
  'Each day needs **one main place**, not five. Visitors who try to see everything see nothing.',
  'The best guides include **practical warnings**: _closed on Tuesdays · take water · take a hat · don\'t carry presents for a week_.',
  'End with **something personal** – that\'s what a guidebook can\'t say.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______ DAYS IN ______________ – a short guide for ______________**   **Day 1 · ______________.** ______________ – ______________ because ______________.   **Day 2 · ______________.** ______________.   **Day 3 · ______________.** ______________. Take ______________.   **Eating:** ______________.   **One last thing:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (places!) and full stops', '_should_ + base verb; superlatives correct', 'Each day: place + when / how + why', 'A food section and a personal last tip']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one recommendation before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a **three-day guide** to your city, your region or your village for a foreign visitor (70 words or more). Include practical warnings and one personal tip.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s guide as the **visitor**. ★ _I want to do all of this!_  ✓ _Can you add how to travel between them?_  ? _Is Day 2 too much for one day?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the guides together: this is our **Class 4B Guide to Syria**. Which day sounds the best in the whole book?'));
out.push(hw('Write the **visitor\'s reply** (30+ words): thank them, choose the day you\'re most excited about, and ask **two** practical questions.'));

// ======================= 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review & Mediate: What does the leaflet say?'));
out.push(p('**Function:** explaining a tourist leaflet   ·   **Recycling:** Units 1–11   ·   **Exam practice:** A2 Key Reading Part 2, Writing Part 6, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I going to visit my uncle.  **2** We\'re going to booking a hotel.  **3** Is there any shops near the hotel?  **4** Look at the clouds – it will rain now.  **5** Yesterday we are walking on the sea road.  **6** You should to visit the Old City.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the leaflet from the hotel reception.'));
out.push(box(null, [
  '**LATAKIA – BOAT TRIPS WITH ABU JAMAL**',
  '**Trip 1 · The coast (2 hours)** · Every day at 10:00 and 16:00 · 60,000 SYP per person · children under 10 half price',
  '**Trip 2 · Sunset trip (1 hour)** · Every day at 18:00 · 40,000 SYP · tea and coffee included',
  '**Trip 3 · The island (all day, 7 hours)** · Fridays only, 08:00 · 150,000 SYP · bring your own food and water',
  '**Information:** All trips leave from the old port, next to the fish market. Book one day before at the hotel reception or call 041 338 900. Minimum 6 people – if there are fewer, we change the trip to the next day. Life jackets for everybody. **Trips do not go if the weather is bad** – in that case you get your money back.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lama explains the leaflet to her friends. Which trip do they choose, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  Choosing a boat trip', [
  ['Lama', 'OK, I asked at reception. There are three boat trips.'],
  ['Lina', 'Tell us.'],
  ['Lama', 'The first one goes along the coast. It takes two hours and it\'s sixty thousand each. There are two every day – ten in the morning and four in the afternoon.'],
  ['Maya', 'And the others?'],
  ['Lama', 'The second is a sunset trip – only one hour, forty thousand, and they give you tea and coffee. It leaves at six.'],
  ['Lina', 'Oh, that sounds beautiful.'],
  ['Lama', 'The third is the big one: all day to the island, seven hours, a hundred and fifty thousand. But it\'s only on Fridays and you have to take your own food.'],
  ['Maya', 'Friday is our last full day. Seven hours on a boat…'],
  ['Lina', 'With no food unless we carry it. Hmm.'],
  ['Lama', 'And one more thing: you have to book one day before, and they need at least six people. If there are fewer, they move the trip to the next day.'],
  ['Maya', 'Then the island trip is risky – we\'re going home on Saturday.'],
  ['Lina', 'Let\'s do the sunset trip. One hour, beautiful light, tea – and if the weather is bad, we get our money back.'],
  ['Lama', 'Agreed. I\'m going to book it for Wednesday.'],
]));
out.push(sp());
out.push(box('Language box – explaining a leaflet and deciding', [
  'Explain each option with **how long · how much · when**:',
  '_2 hours · 60,000 · 10:00 and 16:00_ → **It takes two hours and it\'s sixty thousand each. There are two every day.**',
  'Explain the **conditions** – this is where people make mistakes:',
  '_Minimum 6 people_ → **They need at least six people. If there are fewer, they move it to the next day.**   _Book 1 day before_ → **You have to book one day before.**   _No trips in bad weather – money back_ → **If the weather is bad, the trip doesn\'t go and you get your money back.**',
  'Then **decide together** with reasons: _Then the island trip is risky, because… · Let\'s do the sunset trip – one hour, beautiful light, and…_',
  '**Useful phrases:** I asked at reception. · The first one… the second… the third… · And one more thing: … · …is risky. · Agreed.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has the leaflet card (don\'t show it!). A explains the three options; B and C ask questions and then the group decides, with reasons. Then change roles with the other card.'));
out.push(table(['Leaflet card A – Bus tours, Aleppo', 'Leaflet card B – Cooking courses, Damascus'], [
  ['Tour 1 · City centre, 3 h, daily 9:00, 50,000', 'Course 1 · Mezze, 3 h, Saturdays 10:00, 90,000'],
  ['Tour 2 · Citadel + museum, 5 h, Tue & Thu 9:00, 90,000 (entrance included)', 'Course 2 · Sweets, 2 h, Mondays 17:00, 70,000'],
  ['Tour 3 · Villages outside the city, all day, Fridays 8:00, 140,000 (lunch included)', 'Course 3 · Full day: market + cooking + lunch, Fridays 9:00, 200,000'],
  ['Book 2 days before · minimum 8 people · no tours in the rain', 'Book 3 days before · maximum 6 people · you take the food home'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the three options with prices, and the group\'s decision and reason.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** leaflet, offer or list of options you know: courses at a centre, phone packages, gym memberships, school trips, delivery services. Explain the options to your partner. They ask questions about the **conditions** (how long, how much, when, what if…?) and then choose one, with a reason.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you chose:  _Tareq explained three phone packages. The cheapest is twenty thousand a month with five gigabytes. The middle one is thirty-five thousand with fifteen gigabytes and free calls at night. The big one is sixty thousand with unlimited internet. I chose the middle one because I don\'t need unlimited, but five gigabytes isn\'t enough for me._'));
out.push(p('**Listener task:** did your partner explain all the conditions? What did they forget?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 2)', 7));
out.push(p('Read about three travellers. For each question, choose **A**, **B** or **C**.'));
out.push(table(['A  Nabil and his wife', 'B  Dalia', 'C  The Haddad family'], [[
  'Nabil and his wife are both over seventy. They want a quiet week by the sea, and they can\'t walk far or climb stairs. They go to bed early and they like a big breakfast. They aren\'t interested in museums or markets.',
  'Dalia is a student. She has very little money and five free days. She loves old buildings and photography, and she doesn\'t mind walking all day. She wants to meet other young people, and she can sleep anywhere.',
  'The Haddads have three children (4, 7 and 11). They want everybody to be happy: the children need space to run, and the parents want to see something interesting. They have a car and they can spend a normal amount of money.']], [1, 1, 1]));
out.push(sp());
[
  '**1**  Who should ask for a hotel with a lift, or a room on the ground floor?     A     B     C',
  '**2**  Who should stay in a cheap guesthouse where other young travellers stay?     A     B     C',
  '**3**  Who should spend the afternoon in a big park with a café?     A     B     C',
  '**4**  Who should walk round the old city early in the morning with a camera?     A     B     C',
  '**5**  Who should drive to Bosra and have lunch in a village?     A     B     C',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a message to a friend in Damascus about the boat trips (use the leaflet in Stage 2).'));
out.push(p('Hi ______!   There are three boat trips here. The coast trip takes ______ hours and costs ______ each – there are two every day, at ______ and ______. The sunset trip is only ______ hour and it\'s ______, with tea and coffee. The island trip is ______ hours, but it\'s ______ only and you ______________.   We\'re going to take ______________ because ______________. You have to book ______________, and they need at least ______ people. If the weather is bad, ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['All three trips with time and price', 'The booking condition and the minimum number', 'What happens if the weather is bad', 'Your choice with a reason – in your own words']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You are on holiday. Write an email to your English friend, **Sam**.',
  'In your email:  •  say **where you are** and **what the weather is like**  •  say **what you did yesterday**  •  say **what you are going to do tomorrow**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  We ___ going to stay for a week.   a) are   b) is   c) –',
  '2  She isn\'t going ___ a holiday this year.   a) take   b) to take   c) taking',
  '3  ___ there a lift in the hotel?   a) Is   b) Are   c) Does',
  '4  ___ it have Wi-Fi?   a) Is   b) Has   c) Does',
  '5  Look at those clouds! It ___ rain.   a) is going to   b) goes to   c) going to',
  '6  I\'d like to book a room ___ the 5th ___ the 9th.   a) from / to   b) in / to   c) at / until',
  '7  Right now I ___ on the balcony.   a) sit   b) am sitting   c) sat',
  '8  You ___ visit the Old City early in the morning.   a) should   b) should to   c) shoulds',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 4 style).** 🔊 **Track 11.14** Listen to a man talking about his hotel. Choose **A**, **B** or **C**.'));
['1  Where is the hotel?   A in the centre   B near the sea   C in the mountains',
 '2  What does he like most?   A the rooms   B the breakfast   C the swimming pool',
 '3  What is the problem with the hotel?   A there\'s no lift   B it\'s expensive   C it\'s noisy',
 '4  How did he travel there?   A by car   B by bus   C by plane',
 '5  What is he going to do next year?   A go to a different hotel   B go to the same hotel   C stay at home'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 11.14  Audio script (read after the check)', [
  ['Man', 'Last month we spent a week at a small hotel on the sea road in Latakia – not in the centre, about twenty minutes on foot. We took the bus from Damascus; four hours, but it was cheap and comfortable. The rooms were simple and clean, nothing special, and there isn\'t a swimming pool, which my children didn\'t like. But the breakfast! Every morning the owner\'s wife made fresh bread, eggs, olives and cheese on the terrace, and nobody left the table hungry. That\'s the thing I remember. The only real problem is the stairs – there\'s no lift, and our room was on the third floor, which was hard for my mother. Next year we\'re going back, but we\'re going to ask for a room on the first floor.'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words) who is going to visit your city. Say what the weather is going to be like, what they should bring, and recommend **one** place with a reason.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ talk about my plans with _going to_',
  '☐ book a hotel room on the phone and by email',
  '☐ ask about facilities and compare two places',
  '☐ talk about the weather and say what to bring',
  '☐ write a holiday message using now, yesterday and tomorrow',
  '☐ recommend places with a reason and a practical warning',
  '☐ explain a leaflet and its conditions, and help people decide',
  '☐ write a plan message, a booking email, a hotel review, a weather message, a postcard and a short guide',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
