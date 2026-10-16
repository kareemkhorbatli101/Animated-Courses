// Proactive English A2 · Syria Edition · Book 1 · Unit 11 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, item, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 11  Travel & Holidays — Answer Key'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework. Samples are models of what a good A2 student can produce – not the only right answer.',
  'Where students invent their own content, accept any answer that uses the target language correctly and answers the task.',
], C.lblue, C.navy));

// 11.1
out.push(pb());
out.push(h2('11.1  We\'re going to spend a week in Latakia'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Typical board answers: _the sea (Latakia, Tartus, Banias) · the mountains (Bludan, Slunfeh, Kassab) · relatives in another city · the village in the summer · Damascus or Aleppo for a few days._ Accept any place with a reason.'));
out.push(A('**b** Open. In most classes the top three are **visit relatives · swim · rest**. Accept the class\'s own result.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – next month.'));
out.push(A('**b** 1 Maya, Lama and Lina (Omar comes for the weekend only).   2 Rami isn\'t going to take a holiday this year – he\'s going to work.'));
out.push(S('Language box · Practise'));
out.push(A('1 I **\'m going to visit** my cousins next month.   2 She **isn\'t going to take** a holiday.   3 **What are you going to do** in the summer?   4 We **\'re going to travel** by bus.   5 They **aren\'t going to fly** – it\'s too expensive.'));
out.push(S('Stage 3 · Practise (sample – Trip card A)'));
out.push(SAMPLE([
  '**A:** So it\'s decided: we\'re going to spend three days in Bludan in August.',
  '**B:** Who\'s going?',
  '**A:** Me and my two cousins. My brother is going to join us for Friday only.',
  '**B:** What are we going to do there?',
  '**A:** We\'re going to walk in the mountains and drink tea outside.',
  '**B:** Where are we going to stay?',
  '**A:** We\'re going to stay in my uncle\'s house.',
  '**B:** And how are we going to travel?',
  '**A:** By car.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_going to spend three days in Bludan · going to walk in the mountains · going to stay in my uncle\'s house · going to travel by car._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  'In July I\'m going to visit my family in Tartus. I\'m going to stay for ten days. I\'m going to swim every morning and help my father in the shop in the afternoon. My cousins are going to come from Homs for the last weekend. I\'m not going to take my laptop – I need a real holiday.',
  '_Partner\'s questions:_ How are you going to travel? Who are you going to stay with? Are you going to see your old school friends?',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fadi is going to visit his family in Tartus in July. He\'s going to stay for ten days with his parents. He\'s going to swim every morning and help his father in the shop. His cousins are going to come for the last weekend. He isn\'t going to take his laptop, because he says he needs a real holiday.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I going to visit → ✓ I **\'m** going to visit.   ✗ We going to booking → ✓ We\'re going to **book**.   ✗ He don\'t going to come → ✓ He **isn\'t** going to come.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 They\'re going to travel on Saturday 15 November on the morning bus (it leaves at eight), and come back on Saturday 22nd in the evening.'));
out.push(A('2 She\'s going to call two hotels and tell them the prices.'));
out.push(A('3 They aren\'t going to plan every day.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Aleppo – two days 🏛**',
  'Hi everyone! Here\'s the plan for the first weekend in March.',
  'We\'re going to travel on Friday morning (the 6th) and come back on Saturday evening.',
  'We\'re going to stay in a small hotel near the centre. It\'s about 250,000 a night.',
  'We\'re going to see the citadel, walk in the souq and eat kebab. We aren\'t going to visit five museums in two days.',
  'Can everybody confirm by Monday?',
  'Rana',
]));
out.push(S('Stage 7 · Write freely (sample, 78 words)'));
out.push(SAMPLE([
  '**A day in Maaloula 🚐**',
  'Hi all! Here\'s the plan for Friday.',
  'We\'re going to leave from the university gate at seven in the morning in Samir\'s car and come back at about eight in the evening.',
  'We aren\'t going to book a hotel – it\'s one day only.',
  'We\'re going to visit the old churches, walk up to the top, and have lunch in the village. In the afternoon we\'re going to sit and drink tea.',
  'We aren\'t going to run from place to place.',
  'Can everybody tell me by Wednesday? I need to know how many we are.',
  'Nour',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ I\'m coming! The timing is perfect.   ✓ Can you add how much the petrol is going to cost each?   ? What time are we going to be back exactly – I have a class at nine.'));
out.push(S('Homework (sample reply, 41 words)'));
out.push(SAMPLE(['Hi Nour, yes, I\'m coming! Friday is free for me and I love Maaloula. Are we going to take our own food or buy lunch in the village? I\'m going to bring tea, cups and water for everybody – that\'s my job.']));

// 11.2
out.push(pb());
out.push(h2('11.2  I\'d like to book a double room'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** _You ask:_ Have you got a room? How much is it? Is breakfast included? Have you got parking / Wi-Fi? Can I pay when I arrive? What time is check-in?   _The hotel asks:_ For how many nights? What kind of room? How many people? Can I take your name and phone number?'));
out.push(A('**b** single = one bed for one person · double = one big bed · twin = two separate beds · half board = breakfast and dinner · full board = all three meals · breakfast included = breakfast only.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – two rooms.'));
out.push(A('**b** 1 320,000 a night (for a week; the normal price is 350,000).   2 Breakfast – made by his wife, and "nobody leaves hungry". (Accept: a better price for a week.)'));
out.push(S('Language box · Practise'));
out.push(A('1 **for** three nights.   2 300,000 **a** night.   3 **from** Monday **to** Friday.   4 Is breakfast **included**?   5 What time can we **check** in?'));
out.push(S('Stage 3 · Practise (sample – Hotel card A)'));
out.push(SAMPLE([
  '**B:** Hotel Al-Qalaa, good morning.',
  '**A:** Good morning. I\'d like to book a double room, please, from the 3rd of May to the 6th.',
  '**B:** Three nights. What kind of room?',
  '**A:** A double, please. Have you got anything with a balcony?',
  '**B:** Let me look… Yes, I have one on the third floor.',
  '**A:** How much is it per night?',
  '**B:** 250,000, and 40,000 more for the balcony – so 290,000. Breakfast is included.',
  '**A:** Can I pay when I arrive? What time can we check in?',
  '**B:** Cash on arrival, please. Check-in is from two and check-out is at twelve.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_3–6 May, 3 nights · double room with balcony · 290,000 a night · breakfast included · check-in from 14:00 · pay cash on arrival._'));
out.push(S('Stage 4 · Your turn (sample for b – something changes)'));
out.push(SAMPLE([
  '**A:** Hello, this is Rana Khoury. I booked a double room for the 3rd to the 6th of May. I\'m very sorry, but can I change it? We need one more night – to the 7th.',
  '**B:** Let me look… Yes, that\'s fine. The 3rd to the 7th, four nights.',
  '**A:** Is the price the same?',
  '**B:** Yes, 290,000 a night.',
  '**A:** Thank you very much. See you in May.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['I booked a double room with a balcony in Aleppo from the 3rd to the 6th of May – three nights, 290,000 a night with breakfast. Then my brother decided to come, so I phoned again and added one night. Check-in is at two and I\'m going to pay cash when I arrive.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I want book a room → ✓ I\'d like **to** book a room.   ✗ from 15 until 22 → ✓ **from** the 15th **to** the 22nd.   ✗ How much the room? → ✓ How much **is** the room?   ✗ I stay 7 days = 6 nights – always count the **nights**.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Four – two sisters and two friends.'));
out.push(A('2 The price per night; whether breakfast is included; whether she can pay on arrival.'));
out.push(A('3 They can leave their bags at the hotel.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**Subject:** Booking request – 3–6 May (1 room)',
  'Dear Sir or Madam,',
  'I would like to book one double room from Friday 3 May to Monday 6 May – three nights.',
  'We would like a room with a balcony if possible. There are two of us.',
  'Could you confirm the price per night and tell me if breakfast is included? We would also like to know if we can pay when we arrive.',
  'My phone number is 0944 312 876.',
  'Thank you very much.',
  'Best regards, Rana Khoury',
]));
out.push(S('Stage 7 · Write freely (sample, 86 words)'));
out.push(SAMPLE([
  '**Subject:** Booking request – 12–15 August (2 rooms)',
  'Dear Sir or Madam,',
  'I would like to book two rooms at your guesthouse from Monday 12 August to Thursday 15 August – three nights.',
  'We would like one double room and one twin room. There are four of us: my wife, our two children and me. The children are nine and twelve.',
  'Could you confirm the price per room per night and tell me if breakfast is included? We would also like to know if there is parking for one car.',
  'My phone number is 0955 220 441.',
  'Thank you very much.',
  'Best regards, Samer Haddad',
]));
out.push(S('Stage 7P · Respond – the hotel\'s reply (sample)'));
out.push(SAMPLE([
  '**Subject:** RE: Booking request – 12–15 August (2 rooms)',
  'Dear Mr Haddad,',
  'Thank you for your email. We are happy to confirm one double room and one twin room from 12 to 15 August, three nights.',
  'The price is 230,000 SYP per room per night and breakfast is included. There is free parking in front of the guesthouse.',
  'Check-in is from 2 pm and check-out is at 11 am. The children can use the garden at any time.',
  'We look forward to welcoming you.',
  'Best regards, Hala Ibrahim · Cham Guesthouse · 043 221 700',
]));
out.push(S('Homework (sample, 38 words)'));
out.push(SAMPLE([
  '**Subject:** Change to our booking (12–15 August)',
  'Dear Ms Ibrahim,',
  'I am sorry to write again. Could we stay one more night, from 12 August to 16 August – four nights? Everything else is the same.',
  'Thank you very much. Best regards, Samer Haddad',
]));

// 11.3
out.push(pb());
out.push(h2('11.3  Is there a lift?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open – the class\'s own order. A common result: price · breakfast · a quiet room · near the centre · Wi-Fi · air conditioning · a view · parking.'));
out.push(A('**b** **Is there** a restaurant? · **Are there** any shops near the hotel? · **Is there** air conditioning in the rooms? · **Are there** towels in the room?'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – Hotel Al-Bahr.'));
out.push(A('**b** 1 Al-Bahr is cheaper (320,000 against 480,000).   2 The Blue Coast is nearer the centre and has a lift, a pool and a restaurant – but Lama prefers quiet, and she would rather spend the money on fish than on a pool.'));
out.push(S('Language box · Practise'));
out.push(A('1 Is there a lift?   2 Are there any shops near the hotel?   3 Is there Wi-Fi in the rooms?   4 Is there parking?   5 Do the rooms have air conditioning? (or: Is there air conditioning in the rooms?)'));
out.push(S('Stage 3 · Practise (sample – Compare card A)'));
out.push(SAMPLE([
  '**B:** Is there a lift in the City Inn?   **A:** Yes, there is. The rooms are on the fourth floor.',
  '**B:** Is breakfast included?   **A:** No, it isn\'t. In the Garden House it is.',
  '**B:** Are there any quiet rooms in the City Inn?   **A:** Not really – it\'s on a noisy street.',
  '**B:** Does the Garden House have parking?   **A:** Yes, it does.',
  '**B:** Is there a lift in the Garden House?   **A:** No, but the rooms are on the ground floor.',
  '**B:** Which is cheaper?   **A:** The City Inn – 200,000 against 300,000.',
  '**Decision:** We choose the Garden House. First, the rooms are bigger and quieter, and they\'re on the ground floor. Second, breakfast is included, so it isn\'t really more expensive.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Garden House: (1) quieter and bigger rooms on the ground floor, (2) breakfast included so the real price is similar._'));
out.push(S('Stage 4 · Your turn (sample for b)'));
out.push(SAMPLE([
  '**A:** Your guesthouse has no lift but the rooms are on the ground floor, so it\'s fine for an older person. Mine is on the fourth floor with a lift.',
  '**B:** But your hotel is in the centre, so students can walk everywhere and spend nothing on taxis.',
  '**A:** And mine has no garden. For a family with children, your guesthouse is better.',
  '**Together:** Families → the guesthouse. Students → the city hotel. Older people → the guesthouse, ground floor.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba stayed in a guesthouse in Bludan. There isn\'t a lift and the rooms are small, but there\'s a big garden and the breakfast is famous. It\'s cheaper than my hotel in Tartus, but my hotel is nearer the sea. We decided that the guesthouse is better for families and my hotel is better for young people.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Is there shops? → ✓ **Are** there **any** shops?   ✗ Have it Wi-Fi? → ✓ **Does it have** Wi-Fi? / **Has it got** Wi-Fi?   ✗ It\'s more cheap → ✓ It\'s **cheaper**.   ✗ more quiet → ✓ **quieter**.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Twenty minutes on foot.   2 The breakfast (fresh bread, olives, cheese, eggs, tea on the terrace).   3 People who want a modern hotel with a swimming pool.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**GARDEN HOUSE, BLUDAN** ⭐⭐ **Our review: 7/10**',
  'Garden House is a small guesthouse in Bludan, fifteen minutes from the centre.',
  '**The rooms** are big and quiet, on the ground floor, with air conditioning. There isn\'t a lift, but you don\'t need one.',
  '**Breakfast** is included and there is a lot of it.',
  '**What isn\'t here:** there\'s no restaurant in the evening and the Wi-Fi is slow.',
  '**Price:** from 300,000 a night.',
  '**Perfect for:** families with children.  **Not for:** people who want to go out at night.',
]));
out.push(S('Stage 7 · Write freely (sample, 95 words)'));
out.push(SAMPLE([
  '**AL-MADINA HOTEL, HOMS** ⭐⭐⭐ **Our review: 7/10**',
  'Al-Madina is a medium-sized hotel five minutes on foot from the clock tower, in the middle of everything.',
  '**The rooms** are clean and warm in winter, and they all have air conditioning and good Wi-Fi. There is a lift. Ask for a room at the back: the rooms on the street are noisy until midnight.',
  '**Breakfast** is simple – bread, cheese, jam and tea – but it starts at six, which is good if you have an early bus.',
  '**What isn\'t here:** there\'s no parking, no restaurant and no hot water between two and four in the afternoon.',
  '**Price:** from 190,000 SYP a night.',
  '**Perfect for:** people travelling for work and for one or two nights.  **Not for:** families with small children.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ I trust this review – you say what is wrong!   ✓ Can you add if there is parking near the hotel?   ? Is it noisy on Friday night too?'));
out.push(S('Homework (sample, 42 words)'));
out.push(SAMPLE(['**Al-Madina Hotel – for a family.** The hotel is clean and in the centre, but I don\'t recommend it for a family. The rooms are small, there is no garden and no parking for your car, and the street is noisy until midnight. Choose a hotel outside the centre.']));

// 11.4
out.push(pb());
out.push(h2('11.4  It\'s going to rain'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Typical: _Damascus – hot and dry in summer (35–40°), cold at night in winter, a little rain. Latakia – warm and wet. Bludan and Slunfeh – snow in winter. Deir ez-Zor – very hot._'));
out.push(A('**b** Open – the class\'s own three words for today.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – the weather is going to be bad in Latakia (at the weekend).'));
out.push(A('**b** 1 Saturday and Sunday are going to be wet and windy; then sunny all week.   2 A jacket, her book – and (on Maya\'s advice) an umbrella.'));
out.push(S('Language box · Practise'));
out.push(A('1 it**\'s going to snow**   2 it**\'s going to rain**   3 it**\'s going to be**   4 it**\'s going to be**   5 it**isn\'t going to rain** (= it\'s not going to rain)'));
out.push(S('Stage 3 · Practise (sample – Forecast card A, Aleppo)'));
out.push(SAMPLE([
  '**A:** It\'s going to be sunny on Monday, twenty-two degrees. We don\'t need jackets.',
  '**B:** But look at Wednesday – rain all day, fifteen degrees.',
  '**A:** So we\'re going to need an umbrella and something warm for Wednesday.',
  '**B:** What are we going to do on Wednesday? We can\'t walk round the citadel in the rain.',
  '**A:** We\'re going to go to the museum in the morning and sit in a café in the afternoon.',
  '**B:** Good. And on Thursday and Friday it\'s going to be sunny and twenty-four, so we\'re going to do the old city then.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Take: an umbrella, a warm jacket, comfortable shoes. Bad-day plan: the museum in the morning and a café in the afternoon._'));
out.push(S('Stage 4 · Your turn (sample for a)'));
out.push(SAMPLE(['In my city, spring is the best season: it\'s warm in the day and cool at night, and everything is green. Summer is very hot and dry – about thirty-eight degrees – so people go out in the evening. Autumn is short and beautiful. In winter it\'s cold, about five degrees at night, and it rains, but it doesn\'t snow. My favourite is spring, because you can sit outside all day.']));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq says Suwayda is beautiful in spring – warm in the day and cool at night. In winter it\'s very cold and sometimes it snows. If I visit him in December, I\'m going to need a heavy coat and good shoes, and he says we\'re going to sit by the stove and eat all day.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ It\'s rainy now, look! → ✓ It\'s **raining** now.   ✗ Tomorrow it rains → ✓ Tomorrow it**\'s going to rain**.   ✗ There is cold → ✓ It**\'s** cold.   ✗ twenty degree → ✓ twenty **degrees**.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Saturday – rain, wind and only 17 degrees.   2 A jacket and an umbrella for the first two days, and swimming things for the rest of the week.   3 They\'re going to sit on the balcony with tea and watch the rain on the sea.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Hi everyone! Here\'s the forecast for our weekend in Bludan.',
  'The first day is going to be cold – Friday is the worst: wind and only eight degrees. But from Saturday it\'s going to be sunny, between twelve and fifteen degrees.',
  'So: bring a heavy jacket and a hat for Friday, and good shoes for the walk on Saturday.',
  'And don\'t worry about Friday. We\'re going to stay inside, play cards and cook.',
]));
out.push(S('Stage 7 · Write freely (sample, 82 words)'));
out.push(SAMPLE([
  'Hi Sara! Here\'s the weather for your week in Damascus. ☀️',
  'The first two days are going to be the difficult ones – Monday and Tuesday are going to be very hot, about thirty-eight degrees, and dry. From Wednesday it\'s going to be cooler, between thirty and thirty-two, with some wind in the evening.',
  'So: bring light clothes, a hat and a bottle of water for every day. The nights are about twenty degrees, so you don\'t need a jacket.',
  'And don\'t worry about the hot days. We\'re going to stay inside between twelve and four, and go out in the evening like everybody here.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ Now I know what to pack!   ✓ Can you add the temperature at night?   ? Do I need a coat or just a jacket in the evening?'));
out.push(S('Homework (sample, 34 words)'));
out.push(SAMPLE(['Thanks! I\'m going to bring light clothes, a hat and my big water bottle. Is it going to be windy? And if it\'s too hot one afternoon, can we go to a museum or a café with air conditioning?']));

// 11.5
out.push(pb());
out.push(h2('11.5  We\'re having a great time!'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Typical: _my mother (she worries!) · the family group · close friends · the class group._ People usually send a photo, where they are, the weather, the food, and "we miss you".'));
out.push(A('**b** NOW: I\'m sitting on the balcony · The sun is going down.   YESTERDAY: We swam this morning · We ate the best fish.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – she\'s sitting on the hotel balcony.'));
out.push(A('**b** 1 They walked on the sea road for two hours and ate at a small fish restaurant.   2 Because Maya says, "Next year you\'re coming with us. That isn\'t a question." (He answers "Yes, boss.")'));
out.push(S('Language box · Practise'));
out.push(A('1 **\'m sitting**   2 **visited**   3 **\'re going**   4 **is shining**   5 **swam**'));
out.push(S('Stage 3 · Practise (sample – Holiday card A, Aleppo)'));
out.push(SAMPLE([
  '**B:** Where are you? What can I hear?',
  '**A:** I\'m sitting in a café in the old souq. Look – can you see the ceiling?',
  '**B:** How is it? Tell me everything.',
  '**A:** It\'s wonderful. We\'re having a great time. Yesterday we visited the citadel and we walked for five hours.',
  '**B:** Five hours!',
  '**A:** This morning we ate the famous kebab. Tonight we\'re meeting an old friend from university.',
  '**B:** And what\'s the weather like?',
  '**A:** Sunny, twenty-four degrees. Perfect.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Now: sitting in a café in the souq. Yesterday: visited the citadel, walked five hours. Tonight: meeting an old friend._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE(['I\'m in Tartus. Right now I\'m walking on the corniche and the sun is going down – it\'s orange on the water. Yesterday we took a boat to Arwad and we ate fish on the island. This morning I slept until ten, which never happens at home. Tonight we\'re going to my aunt\'s house for dinner, and tomorrow we\'re going to the old city.']));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Hiba is in Tartus. Right now she\'s walking on the corniche and watching the sunset. Yesterday she took a boat to Arwad and ate fish on the island. This morning she slept until ten, and tonight she\'s going to her aunt\'s house for dinner.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Now I sit on the balcony → ✓ Now I**\'m sitting**.   ✗ Yesterday we are walking → ✓ Yesterday we **walked**.   ✗ I am having a sister → ✓ I **have** a sister (but _We\'re having a great time_ is correct!).   ✗ We eat fish yesterday → ✓ We **ate** fish yesterday.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Text 1 is for Teta (an older relative) – warmer, complete sentences, _Dear… With all our love_. Text 2 is for the class group – short lines, jokes, capital letters for emphasis (NOVEMBER), emojis, no _Dear_.'));
out.push(A('2 They\'re going to take a boat, if the weather stays good.'));
out.push(A('3 Something from the market.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  'Dear Grandma,',
  'Greetings from Tartus! I\'m sitting on the corniche and the sun is going down. The weather is warm and there is a light wind.',
  'Yesterday we took a boat to Arwad and we ate fish on the island. This morning I slept until ten.',
  'Tonight we\'re going to Aunt Nadia\'s house for dinner.',
  'We\'re thinking of you and we\'re going to bring you sweets from the old city.',
  'With love, Hiba',
]));
out.push(S('Stage 7 · Write freely (sample, 112 words for the two texts)'));
out.push(SAMPLE([
  '**(a) Postcard to my grandmother**',
  'Dear Teta,',
  'Greetings from Tartus! I\'m sitting on the corniche with a cup of tea and the sun is going down over the sea. It\'s twenty-four degrees, warm but not hot.',
  'Yesterday we took the boat to Arwad and we ate fish on the island. This morning I slept until ten – don\'t tell my mother!',
  'Tonight we\'re going to Aunt Nadia\'s house, and tomorrow we\'re going to walk in the old city.',
  'We\'re thinking of you every day and we\'re going to bring you sweets.',
  'With all our love, Hiba',
  '**(b) Group message to friends**',
  'Hi everyone! 🌊 We\'re having the best time. Right now I\'m on the corniche, sun going down, tea in my hand, zero problems.',
  'Yesterday: Arwad, fish, sunburn. 😎 This morning: slept till TEN.',
  'Tonight: dinner at my aunt\'s (= too much food). Tomorrow: old city.',
  'Rami, we talked about you again. Next year you\'re coming. See you Sunday! 😄',
]));
out.push(S('Stage 7P · Respond (sample slip, as the relative)'));
out.push(A('★ This made my day – I can see the sea from your words!   ✓ Can you add how the food is and if you are eating enough?   ? When are you coming home?'));
out.push(S('Homework (sample reply, 44 words)'));
out.push(SAMPLE(['My dear Hiba, your card made me very happy. I read it twice. Are you sleeping well? And is the sea cold now? Here everything is quiet. Your uncle painted the kitchen and now the whole house smells of paint. Come back safely. Teta']));

// 11.6
out.push(pb());
out.push(h2('11.6  You should visit the old city'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. A typical class top five: _Old Damascus and the Umayyad Mosque · Palmyra · Aleppo citadel · Krak des Chevaliers · Maaloula / Bosra / the coast._'));
out.push(A('**b** Open – accept any superlative that is formed correctly.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **B** – in the spring (April).'));
out.push(A('**b** 1 Start early in the Old City, before nine, when the streets are empty and the light is beautiful; the souq in the afternoon.   2 Go to Souq Al-Hamidiyah in the afternoon, when it\'s full of people – that\'s the real experience – and eat the ice cream.'));
out.push(S('Language box · Practise (samples)'));
out.push(A('1 You should go to the Old City early in the morning, because it\'s quiet and the light is good for photos.'));
out.push(A('2 You should go to the park on Friday, when there are families and music.'));
out.push(A('3 You should book the fish restaurant first, because it\'s very popular at the weekend.'));
out.push(S('Stage 3 · Practise (sample – Visitor card A: two days, old buildings, no crowds, alone)'));
out.push(SAMPLE([
  'You should start in the Old City very early – before eight the streets are empty and the light is perfect for photos.',
  'You should see the Umayyad Mosque, but go when it opens, not at midday.',
  'You shouldn\'t go to the souq on Thursday evening – it\'s the busiest time of the week.',
  'On the second day you should go to Maaloula. It\'s only an hour away and it\'s very quiet.',
  'You should eat in the small places in the Old City, because you can sit alone and nobody disturbs you.',
  'And don\'t carry your big camera in a crowd – use the small one.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Old City (early, empty streets) · Umayyad Mosque (at opening time) · Maaloula (quiet, one hour away) · small restaurants (calm). Yes – the advice fits a photographer who doesn\'t like crowds._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  'Day 1: you should walk in the old market in the morning, when the shops are opening and everybody is friendly. You shouldn\'t go in the afternoon – it\'s too hot and too full.',
  'Day 2: you should take a car to the villages outside the city. The view from the hill is the best in our region.',
  'Day 3: you should rest, buy presents and eat in my aunt\'s restaurant – it\'s the cheapest good food in the city.',
  'And you shouldn\'t drive in the centre. There is nowhere to park.',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Fadi says I should go to Tartus in June, not August, because August is too crowded. I should eat fish at the port, but in a small place, not in the big restaurants. On the second day I should take the boat to Arwad early in the morning. And he says I shouldn\'t drive, because the parking is impossible.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ You should to visit → ✓ You should **visit**.   ✗ the most old city → ✓ the **oldest** city.   ✗ the more beautiful place → ✓ the **most beautiful** place.   ✗ You should going → ✓ You should **go**.'));
out.push(S('Stage 5 · Read'));
out.push(A('1 Because before nine the streets are empty and the light is perfect for photos.'));
out.push(A('2 So that he doesn\'t have to carry them for a week.'));
out.push(A('3 People inviting you for coffee – and saying yes.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**THREE DAYS IN HOMS – a short guide for Anna**',
  '**Day 1 · The city centre.** Start at the clock tower in the morning, because the cafés are full and it\'s the best place to see normal life here.',
  '**Day 2 · Krak des Chevaliers.** One hour by car. Go early and stay for lunch in the village below.',
  '**Day 3 · The market and the river.** Take a hat – there is no shade.',
  '**Eating:** small places, not hotels. Ask for kibbeh and ask the people next to you what they are eating.',
  '**One last thing:** say yes when somebody invites you for coffee. That\'s the real visit.',
]));
out.push(S('Stage 7 · Write freely (sample, 138 words)'));
out.push(SAMPLE([
  '**THREE DAYS IN LATAKIA – a short guide for a visitor**',
  '**Day 1 · The city and the sea road.** Start with a walk on the sea road before the heat, then have breakfast in a small place near the port. In the afternoon you should sit in a café and do nothing – that\'s what people here do. Don\'t try to see "everything" on the first day.',
  '**Day 2 · The old port and the market.** Go to the fish market early, at about seven, when the boats come back. The market in the afternoon is the best place for presents, but it\'s crowded, so keep your bag in front of you.',
  '**Day 3 · Kassab and the mountains.** One hour by car. Take a jacket – it\'s cooler up there even in summer – and stay for lunch in a village restaurant.',
  '**Eating:** fish at the port, but choose the small places. Ask the owner what is fresh today and order that.',
  '**One last thing:** don\'t plan every hour. People are going to invite you for tea, and you should say yes.',
]));
out.push(S('Stage 7P · Respond (sample slip, as the visitor)'));
out.push(A('★ I want to do all of this, especially Day 3!   ✓ Can you add how to travel from the city to Kassab and how much it costs?   ? Is the fish market open on Fridays?'));
out.push(S('Homework (sample reply, 41 words)'));
out.push(SAMPLE(['Thank you so much for this! I\'m most excited about Day 3 in the mountains – I love walking and cool air. Two questions: how do I get to Kassab without a car, and is there anywhere to stay there for one night?']));

// 11.7
out.push(pb());
out.push(h2('11.7  Review & Mediate: What does the leaflet say?'));
out.push(S('Stage 1 · Unit 11 quiz'));
out.push(A('1 I **\'m** going to visit my uncle.   2 We\'re going to **book** a hotel.   3 **Are** there **any** shops near the hotel?   4 Look at the clouds – it**\'s going to** rain.   5 Yesterday we **walked** on the sea road.   6 You should **visit** the Old City.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** They choose the **sunset trip** (Trip 2). Reasons: it\'s only one hour; the light is beautiful; tea and coffee are included; it\'s cheap; and the island trip is risky because it only runs on Fridays, needs at least six people, and they travel home on Saturday.'));
out.push(S('Stage 3 · Practise (sample – Leaflet card A, bus tours in Aleppo)'));
out.push(SAMPLE([
  '**A:** There are three tours. The first one is the city centre. It takes three hours, it\'s every day at nine, and it costs fifty thousand.',
  '**B:** And the second?',
  '**A:** The citadel and the museum – five hours, but only Tuesday and Thursday at nine. It\'s ninety thousand, and the entrance tickets are included.',
  '**C:** What about the third?',
  '**A:** That\'s the big one: the villages outside the city, all day, Fridays only at eight. A hundred and forty thousand, with lunch.',
  '**B:** Is there anything we have to do first?',
  '**A:** Yes – you have to book two days before, and they need at least eight people. And if it rains, the tour doesn\'t go.',
  '**C:** Then let\'s take the citadel tour on Thursday. The entrance is included, so it isn\'t really more expensive, and five hours is enough for us.',
]));
out.push(S('Stage 3R · Perform – listener task (sample)'));
out.push(A('_Tour 1: 3 h, daily, 50,000 · Tour 2: 5 h, Tue & Thu, 90,000 with entrance · Tour 3: all day, Fridays, 140,000 with lunch. Decision: Tour 2, because the entrance tickets are included and five hours is enough._'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  'There are three phone packages. The first is twenty thousand a month with five gigabytes. The second is thirty-five thousand with fifteen gigabytes and free calls at night. The third is sixty thousand with unlimited internet.',
  'You have to pay at the beginning of the month, and if you finish your gigabytes you can buy more, but it\'s expensive. You can change the package after three months, not before.',
]));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Tareq explained three phone packages. The cheapest is twenty thousand a month with five gigabytes. The middle one is thirty-five thousand with fifteen gigabytes and free calls at night. The big one is sixty thousand with unlimited internet. You have to pay at the beginning of the month and you can only change after three months. I chose the middle one, because I don\'t need unlimited internet, but five gigabytes isn\'t enough for me.']));
out.push(NOTE('**Mediation – what to assess here.** Did the student (1) give **all** the options, (2) explain the **conditions** (book before, minimum number, what happens if…), (3) use their **own words** rather than reading the card, and (4) give a **reason** for the decision? Students very often forget the conditions – that is the main teaching point of this cycle.'));
out.push(S('Stage 5 · Exam practice – A2 Key Reading Part 2'));
out.push(A('**1 A**  (Nabil and his wife are over seventy and can\'t climb stairs.)'));
out.push(A('**2 B**  (Dalia has very little money, wants to meet other young people and can sleep anywhere.)'));
out.push(A('**3 C**  (The children need space to run and the parents can sit in the café.)'));
out.push(A('**4 B**  (Dalia loves old buildings and photography and doesn\'t mind walking all day.)'));
out.push(A('**5 C**  (The Haddads have a car and want to see something interesting; Bosra is a long drive.)'));
out.push(S('Stage 6 · Write with help (completed)'));
out.push(SAMPLE([
  'Hi Lina!',
  'There are three boat trips here. The coast trip takes **two** hours and costs **60,000** each – there are two every day, at **10:00** and **16:00**. The sunset trip is only **one** hour and it\'s **40,000**, with tea and coffee. The island trip is **seven** hours, but it\'s **on Fridays** only and you **have to take your own food and water**.',
  'We\'re going to take **the sunset trip** because **it\'s short, it\'s cheap and the light on the sea is beautiful**. You have to book **one day before, at the hotel reception**, and they need at least **six** people. If the weather is bad, **the trip doesn\'t go and we get our money back**.',
  'Maya',
]));
out.push(S('Stage 7 · Write freely – A2 Key Writing Part 6 (samples)'));
out.push(SAMPLE([
  '**Strong sample (42 words)**',
  'Hi Sam! I\'m in Latakia with my sister. The weather is beautiful – twenty-two degrees and sunny. Yesterday we walked on the sea road and ate the best fish of my life. Tomorrow we\'re going to take a boat trip at sunset. Wish you were here!',
]));
out.push(SAMPLE([
  '**Weaker sample (26 words) – why it only just passes**',
  'Hi Sam. I am in Latakia. The weather is good. Yesterday I go to the sea. Tomorrow I visit my friend. Bye.',
  '_It answers all three points and is long enough, so it passes – but: **I go** should be **I went**; **I visit** should be **I\'m going to visit**; "the weather is good" gives no information; and there is no friendly opening or closing. Show students the difference between **answering** the three points and **writing well**._',
]));
out.push(S('Unit 11 check · A  Grammar and vocabulary'));
out.push(A('**1 a** are   **2 b** to take   **3 a** Is   **4 c** Does   **5 a** is going to   **6 a** from / to   **7 b** am sitting   **8 a** should'));
out.push(S('Unit 11 check · B  Listening (Track 11.14)'));
out.push(A('**1 B** near the sea   **2 B** the breakfast   **3 A** there\'s no lift   **4 B** by bus   **5 B** go to the same hotel'));
out.push(NOTE('The full audio script for Track 11.14 is printed in the Student\'s Book **after** the questions, so students can read it when they check. If there is no audio in your class, read it aloud **twice** at normal speed.'));
out.push(S('Unit 11 check · C  Writing (sample, 48 words)'));
out.push(SAMPLE(['Hi Anna! Next week in Homs it\'s going to be hot – about thirty-four degrees in the day and twenty at night. You should bring light clothes, a hat and good shoes for walking. You should visit the old market early in the morning, because it\'s cooler and the sellers have time to talk to you.']));
out.push(S('"I can…" checklist'));
out.push(A('Students tick for themselves. If several students tick 😐 for the same line, take five minutes at the start of the next lesson: the two lines that usually need it are **_going to_ for plans** (Stage 1 of 11.1) and **explaining the conditions in a leaflet** (11.7, Stage 3).'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 11 · Answer Key');
