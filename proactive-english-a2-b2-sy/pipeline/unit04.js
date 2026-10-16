// Proactive English A2 · Syria Edition · Book 1 · Unit 4 — Student's Book
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

out.push(h1('Unit 4  Food & Eating Out'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  talk about food you like and don\'t like',
  '**4.2**  order food in a café or restaurant',
  '**4.3**  ask about quantities and prices',
  '**4.4**  give instructions for a recipe',
  '**4.5**  invite people and accept or refuse',
  '**4.6**  compliment and thank a host',
  '**4.7**  Review & Mediate: explain a menu to a visitor',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Beit Al-Yasmin Restaurant** – a small restaurant in the Old City, near Bab Sharqi.   ·   **Abu Hassan** – a vegetable seller in the souq.',
  '**Mr Peter Lang** – a German visitor; he buys medical equipment from Lina\'s company.',
], C.lyellow, C.orange));

// ======================= 4.1 =======================
out.push(pb());
out.push(h2('4.1  I love olives, but I don\'t eat meat'));
out.push(p('**Function:** talking about food preferences   ·   **Grammar:** countable and uncountable nouns; _my favourite… / I prefer…_   ·   **Pronunciation:** /ɪ/ and /iː/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you eat for breakfast, lunch and dinner? What food do you love? What food do you hate? Your teacher writes your ideas on the board.'));
out.push(board('I love olives.', 'My favourite dish is kibbeh.'));
out.push(p('**b**  Put the food in groups: _bread · rice · chicken · fish · cheese · eggs · olives · apples · tomatoes · beans · milk · yoghurt_.   **Fruit and vegetables:** ______   **Meat and fish:** ______   **Dairy (from milk):** ______   **Other:** ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are Lina and Omar?   **A** at a restaurant   **B** in the centre café   **C** at Omar\'s flat'));
out.push(p('**b**  Listen again. **1** What does Lina have for breakfast?   **2** What is Omar\'s favourite dish?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  At the centre café', [
  ['Omar', 'You\'re only having tea, Lina? Aren\'t you hungry?'],
  ['Lina', 'Not really. I have a big breakfast every day – bread, cheese, olives, eggs and some tea.'],
  ['Omar', 'That\'s a good breakfast! I only have coffee in the morning. I eat a lot at lunch.'],
  ['Lina', 'What\'s your favourite dish? Kibbeh, right?'],
  ['Omar', 'Yes, I love kibbeh – my mother\'s kibbeh is the best. And I love rice with chicken. What about you?'],
  ['Lina', 'My favourite dish is mujaddara – rice and lentils with onions. I don\'t eat much meat.'],
  ['Omar', 'Really? Do you eat fish?'],
  ['Lina', 'Yes, I love fish. And I eat a lot of fruit and vegetables. I prefer apples to oranges.'],
  ['Omar', 'And sweets?'],
  ['Lina', 'Oh, I love sweets! Especially baklava. But only on Fridays!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – countable and uncountable nouns**',
  table(['Countable (you can count them)', 'Uncountable (you can\'t count them)'], [
    ['an apple – two apples · an egg – six eggs · an olive – some olives · a tomato – three tomatoes', 'bread · rice · cheese · meat · fish · milk · water · tea · coffee · fruit · food'],
    ['Use **a / an**, numbers, and plural **-s**: _I eat **an** egg. I love **olives**._', 'No **a / an**, no **-s**: _I love **bread**._ (not ~~a bread~~, not ~~breads~~)'],
  ], [1, 1]),
  'With both: **some** (+), **any** (– / ?), **a lot of**: _some eggs / some cheese · a lot of vegetables / a lot of rice_. Note: **fruit** and **food** are usually uncountable.',
  '**Talking about preferences:** My favourite dish / food is… · I prefer apples **to** oranges. · I love / like / don\'t like / hate… · I don\'t eat (much) meat.',
  '**Practise:** Correct the mistakes.  1 I have a bread and a cheese for breakfast.  2 I love apple.  3 Do you eat many rice?  4 I prefer tea than coffee.  5 There are some milks in the fridge.',
  '**Useful phrases:** Aren\'t you hungry? · Not really. · …, right? · Especially…',
  '**Pronunciation.** 🔊 **Track 4.2** /ɪ/ (short) and /iː/ (long): _chicken · fish · milk · dish_  /  _cheese · meat · beans · eat_. Listen and repeat. Then: _He eats fish. She eats cheese._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'What do you have for breakfast?'],
  ['B', 'I usually have __________ and __________.'],
  ['A', 'What\'s your favourite dish?'],
  ['B', 'My favourite dish is __________. What about you?'],
  ['A', 'I love __________, but I don\'t eat __________.'],
  ['B', 'Do you prefer __________ or __________?'],
  ['A', 'I prefer __________ to __________.'],
]));
out.push(table(['Card A', 'Card B'], [['breakfast: foul and bread · favourite: shish barak · doesn\'t eat: fish · prefers tea to coffee', 'breakfast: yoghurt and fruit · favourite: fattoush · doesn\'t eat: sweets · prefers coffee to tea']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write each speaker\'s favourite dish and one thing they don\'t eat.'));
out.push(stage('4', 'Your turn – class food map', 9));
out.push(p('Ask **three** classmates about their real food habits: breakfast, favourite dish, food they hate, sweet or salty? Note the answers. With your third classmate, try to finish in two minutes.'));
out.push(table(['Name', 'Breakfast', 'Favourite dish', 'Hates', 'Sweet or salty?'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [1, 1.3, 1.3, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one classmate:  _Fadi has a big breakfast – foul, bread and some tea. His favourite dish is shish barak. He hates fish. He prefers salty food to sweet food._'));
out.push(p('**Listener task:** what is the most popular dish in the class?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes on a food blog. Read and answer.'));
out.push(model([
  '**What I eat in a day – Lina, Damascus**',
  'I\'m an accountant and my days are long, so breakfast is very important for me. I have bread, white cheese, some olives and two eggs. I drink a lot of tea – four or five cups a day! At work I usually have a salad or a cheese sandwich for lunch. In the evening I cook something simple: my favourite is mujaddara with yoghurt. I don\'t eat much meat, but I love fish. I prefer fruit to sweets – except on Fridays, when my mother makes baklava!',
]));
out.push(item('1', 'How many cups of tea does Lina drink a day?'));
out.push(item('2', 'What does she usually have for lunch?'));
out.push(item('3', 'When does she eat sweets?'));
out.push(writers([
  'A food blog post: **who you are** → **breakfast** → **lunch** → **dinner** → **likes and dislikes** → **one special detail** (a family dish, a weekend habit).',
  'Use **a lot of / some / a little** with food. Check: no **a / an** and no **-s** with uncountable food (_bread, cheese, rice_).',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**What I eat in a day – ______, ______**   I\'m a / an ______________. For breakfast I have ______________. I drink ______________. For lunch I usually have ______________. In the evening I ______________. My favourite dish is ______________. I don\'t eat ______________, but I love ______________. I prefer ______________ to ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'A verb in every sentence', 'Countable / uncountable: no _a bread_, no _cheeses_', 'All parts: breakfast, lunch, dinner, likes, one special detail']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your own blog post "What I eat in a day" (60 words or more). Add one food memory from your family.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I want to try…_   ✓ _Can you add…?_   ? _Who cooks…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their posts. The class votes: whose day of food do you want to try?'));
out.push(hw('Write a comment on your partner\'s post (25+ words): _Your breakfast sounds great! I love… too. Do you…?_'));

// ======================= 4.2 =======================
out.push(pb());
out.push(h2('4.2  I\'d like the fattoush, please'));
out.push(p('**Function:** ordering food   ·   **Grammar:** _I\'d like… / Could I have…? / Would you like…?_   ·   **Pronunciation:** _I\'d_ /aɪd/; _Would you…?_ /wʊdʒə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What does a waiter say? What do customers say? What do people write when they order food online? Make lists.'));
out.push(board('Can I have the menu, please?', 'Order: 2 chicken sandwiches, 1 salad'));
out.push(p('**b**  Put the meal in order: _the bill · a dessert · a starter (mezze) · the main course · a drink_'));
out.push(stage('2', 'Listen and read', 12));
out.push(box('BEIT AL-YASMIN RESTAURANT – MENU', [
  table(['Starters (mezze)', 'Main courses', 'Desserts', 'Drinks'], [['hummus 15,000 · fattoush 18,000 · muhammara 20,000 · kibbeh (4 pieces) 30,000', 'grilled chicken with rice 55,000 · shish barak 50,000 · grilled fish (day\'s price) · mujaddara 30,000', 'muhallabiyeh 15,000 · fruit plate 20,000 · baklava (small plate) 25,000', 'water 5,000 · fresh juice 15,000 · tea 6,000 · Arabic coffee 8,000 · ayran 7,000']], [1, 1, 1, 1]),
], C.lyellow, C.orange));
out.push(sp());
out.push(p('**a**  **Books closed.** Listen. How many people are eating together?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What does Maya order to drink?   **2** What does Rami order for his main course?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  After class at Beit Al-Yasmin', [
  ['Waiter', 'Good evening. Are you ready to order?'],
  ['Rami', 'Yes, I think so. Can we have some hummus and a fattoush to share, please?'],
  ['Waiter', 'Of course. And for your main course?'],
  ['Maya', 'I\'d like the grilled chicken with rice, please.'],
  ['Waiter', 'And you, sir?'],
  ['Rami', 'Could I have the shish barak, please?'],
  ['Waiter', 'Certainly. Would you like anything to drink?'],
  ['Maya', 'I\'d like a fresh orange juice, please.'],
  ['Rami', 'And a bottle of water for me.'],
  ['Waiter', 'Would you like a dessert?'],
  ['Maya', 'Not now, thanks. Maybe later.'],
  ['Rami', '(later) Excuse me – could we have the bill, please?'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – would like / could**',
  table(['Customer', 'Waiter'], [['**I\'d like** (I would like) the grilled chicken, please. · **Could I have** the menu / the bill, please? · **Can we have** some hummus?', '**Would you like** anything to drink? · **Would you like** a dessert? · Are you ready to order? · Anything else?']], [1, 1]),
  '**I\'d like** = I want (but more polite).  ⚠ _I\'d like **a** juice_ – not ~~I like a juice~~ (= I enjoy juice in general).',
  '**Would you like…?** – Yes, please. / No, thanks. (not ~~Yes, I would like.~~)',
  '**Practise:** Complete with _I\'d like, Would you like, Could I have_.  1 ______ anything to drink, sir?  2 ______ the bill, please?  3 ______ a table for four, please.  4 ______ some bread with your soup?  5 ______ a glass of water, please?',
  '**Useful phrases:** Are you ready to order? · Yes, I think so. · … to share · Certainly. · Not now, thanks. Maybe later. · Excuse me – …',
  '**Pronunciation.** 🔊 **Track 4.4** _I\'d like_ /aɪd laɪk/ – don\'t drop the /d/! · _Would you like…?_ /wʊdʒə laɪk/ – fast and linked. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three: a waiter and two customers. Use the menu and the skeleton. Then change roles.'));
out.push(dlg(null, [
  ['Waiter', 'Good evening. Are you ready to order?'],
  ['A', 'Yes. Can we have __________ to share, please?'],
  ['Waiter', 'Of course. And for your main course?'],
  ['A', 'I\'d like the __________, please.'],
  ['B', 'Could I have the __________, please?'],
  ['Waiter', 'Would you like anything to drink?'],
  ['A / B', 'I\'d like __________. / __________ for me, please.'],
  ['Waiter', 'Would you like a dessert?'],
  ['A / B', 'Yes, please. __________. / Not now, thanks.'],
]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** you are the cook! Write the order.'));
out.push(table(['Starters', 'Main courses', 'Drinks', 'Desserts'], [['', '', '', '']], [1, 1, 1, 1]));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** restaurant, café or sandwich shop you like. Write a short menu (six items with prices) on a piece of paper. Your partner orders from it – they must order **a full meal** with a drink. Then swap. Change partners and do it again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what your partner ordered and the total price:  _Hiba ordered a falafel sandwich, some fries and a lemon and mint juice from Abu Shaker\'s. The total was 35,000 pounds._ (Learn _ordered_ as a phrase.)'));
out.push(p('**Listener task:** who ordered the biggest meal? Who spent the most?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Maya orders lunch for the pharmacy team on WhatsApp. Read and answer.'));
out.push(model([
  '**To: Abu Shaker Sandwiches**',
  'Good morning! I\'d like to order lunch for four people, please:',
  '• 2 chicken shawarma sandwiches (one with no garlic, please)',
  '• 1 falafel sandwich',
  '• 1 large fattoush',
  '• 4 bottles of water',
  'Could you deliver it at 1.30 pm, please? The address is Al-Shifa Pharmacy, corner of Al-Ward Street and Al-Jalaa Street, Mezzeh. I\'ll pay in cash. Thank you!',
  'Maya – 0933 427 815',
]));
out.push(item('1', 'How many people is the lunch for?'));
out.push(item('2', 'What is special about one sandwich?'));
out.push(item('3', 'How will Maya pay?'));
out.push(writers([
  'An order message: **greeting** → **I\'d like to order… for…** → **a list** (number + item + special request) → **time** (_Could you deliver it at…?_) → **address** → **payment** → **thanks + name + phone**.',
  'Lists don\'t need full sentences, but the rest of the message does.',
  'Plural after numbers: _2 sandwich**es**, 4 bottles of water_ (not ~~4 waters~~ in writing).',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**To: ______________**   Good ______! I\'d like to order ______ for ______ people, please:   • ______________   • ______________   • ______________   Could you deliver it at ______, please? The address is ______________. I\'ll pay ______________. Thank you!   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Plural -s after numbers; countable / uncountable', 'Polite forms: I\'d like… / Could you…?', 'All parts: list, time, address, payment, name + phone']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Your family or your office is having a lunch party. Write an order message to a real restaurant or shop you know (40 words or more). Include at least one special request.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s order as the **restaurant**. ★ _Clear order!_  ✓ _Can you add the address?_  ? _Small or large?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two orders are read aloud. The class checks: is anything missing?'));
out.push(hw('Write the restaurant\'s **reply** to your partner\'s order (25+ words): confirm the order and the time, give the total price, and say one thing that isn\'t available.'));

// ======================= 4.3 =======================
out.push(pb());
out.push(h2('4.3  How much are the tomatoes?'));
out.push(p('**Function:** asking about quantities and prices   ·   **Grammar:** _How much / How many; a kilo of, a bottle of…; a lot of_   ·   **Pronunciation:** weak _of_ /əv/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you buy every week? Where? What do people say in the market? What do they write on a shopping list?'));
out.push(board('How much is the cheese?', '1 kg tomatoes'));
out.push(p('**b**  Match: a **kilo** of / a **bottle** of / a **packet** of / a **bag** of / a **piece** of / a **can** of  →  water · rice · cheese · tomatoes · tuna · biscuits'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Omar buying?   **A** fruit   **B** vegetables   **C** meat'));
out.push(p('**b**  Listen again. **1** How many lemons does Omar want?   **2** How much does he pay in total?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  In the souq', [
  ['Abu Hassan', 'Good morning! What would you like?'],
  ['Omar', 'Good morning. How much are the tomatoes?'],
  ['Abu Hassan', 'Eight thousand a kilo. They\'re very fresh – from Daraa.'],
  ['Omar', 'OK, I\'d like two kilos, please. And a kilo of cucumbers.'],
  ['Abu Hassan', 'Here you are. Anything else?'],
  ['Omar', 'Yes. Have you got any parsley?'],
  ['Abu Hassan', 'Of course. How much do you need?'],
  ['Omar', 'Three bunches, please. I\'m making fattoush for a lot of people.'],
  ['Abu Hassan', 'And lemons? How many would you like?'],
  ['Omar', 'Six, please. How much is that altogether?'],
  ['Abu Hassan', 'Tomatoes sixteen, cucumbers seven, parsley six, lemons five… that\'s thirty-four thousand.'],
  ['Omar', 'Here you are. Thanks a lot!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – How much? / How many? / containers**',
  table(['How many + countable plural', 'How much + uncountable', 'How much + price'], [['How **many** lemons would you like? – Six.', 'How **much** parsley do you need? – Three bunches.', 'How much **is** the cheese? – 40,000 a kilo. · How much **are** the tomatoes? · How much is that **altogether**?']], [1, 1, 1.2]),
  '**Containers and quantities:** a **kilo** of tomatoes · half a kilo of cheese · a **bottle** of water · a **packet** of biscuits · a **bag** of rice · a **can** of tuna · a **bunch** of parsley · a **piece** of cake · a **loaf** of bread',
  '**a lot of** (+ / – / ?) with both: _a lot of people · a lot of rice_. In questions and negatives we often use **much / many**: _I don\'t buy many sweets. Do you drink much coffee?_',
  '**Practise:** Complete with _much_ or _many_.  1 How ______ eggs do you need?  2 How ______ is a bottle of water?  3 How ______ sugar do you take in your tea?  4 We haven\'t got ______ bread.  5 How ______ people are coming?',
  '**Useful phrases:** What would you like? · They\'re very fresh. · Anything else? · That\'s… altogether. · Here you are. · Thanks a lot!',
  '**Pronunciation.** 🔊 **Track 4.6** _of_ is weak /əv/ and links: _a kilo‿of tomatoes_ /ə ˈkiːləʊ əv/ · _a bottle‿of water_ · _a bunch‿of parsley_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the seller (use the price list). B is the customer (use the shopping list). Then swap.'));
out.push(dlg(null, [
  ['A', 'Good morning! What would you like?'],
  ['B', 'How much is / are the __________?'],
  ['A', '__________ a kilo / a bottle / a packet.'],
  ['B', 'I\'d like __________, please. And __________.'],
  ['A', 'Here you are. Anything else?'],
  ['B', 'How much is that altogether?'],
  ['A', 'That\'s __________.'],
]));
out.push(table(['Seller\'s price list', 'Shopping list A', 'Shopping list B'], [['tomatoes 8,000/kg · potatoes 6,000/kg · cheese 40,000/kg · eggs 2,000 each · rice 15,000/bag · water 5,000/bottle · biscuits 4,000/packet', '2 kg potatoes · 6 eggs · half a kilo of cheese', '1 bag of rice · 3 bottles of water · 2 packets of biscuits']], [1.4, 1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** calculate the total. Is the seller right?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Plan a real meal for **six** guests. Make a shopping list with quantities. Then go "shopping": your partner is the seller and invents prices (realistic!). Then swap. Who has the cheapest meal?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s meal and shopping:  _Tareq is making mansaf for six people. He needs two kilos of meat, a big bag of rice and a lot of yoghurt. It costs about 450,000 pounds._'));
out.push(p('**Listener task:** which meal is the most expensive? The easiest to cook?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar leaves a shopping list and a note for Rami. Read and answer.'));
out.push(model([
  'Rami – I\'m cooking for the class on Friday! Can you go to the souq on Thursday after work? Here\'s the list:',
  '• 2 kg tomatoes  • 1 kg cucumbers  • 3 bunches of parsley  • 6 lemons  • 1 bag of rice  • 2 loaves of Arabic bread (big ones!)  • a bottle of pomegranate molasses',
  'Abu Hassan has the best vegetables – his shop is next to the spice shop. Don\'t buy the tomatoes from the man on the corner – they\'re never fresh. There\'s 60,000 in the drawer – it\'s enough for everything. Thanks!',
  'Omar',
]));
out.push(item('1', 'When does Omar want Rami to go shopping?'));
out.push(item('2', 'Where is Abu Hassan\'s shop?'));
out.push(item('3', 'How much money is there in the drawer?'));
out.push(writers([
  'A shopping note: **why** → **the request** → **the list** (quantity + item) → **where to buy / what not to buy** → **money** → **thanks + name**.',
  'Write quantities in a list with numbers and abbreviations: _2 kg, 1 bag, 3 bunches_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('______ – I\'m ______________ on ______! Can you go to ______________? Here\'s the list:   • ______________  • ______________  • ______________  • ______________   ______________ has the best ______________. Don\'t buy ______________. There\'s ______ in ______________. Thanks!   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Quantity + of + food (_a bag of rice_)', 'Plural -s after numbers', 'All parts: reason, request, list, where to buy, money']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a shopping note for a family member or flatmate for the meal you planned in Stage 4 (50 words or more). Include at least **six** items with quantities.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as the **shopper**. ★ _Clear list!_  ✓ _Can you add how much…?_  ? _Which shop?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two notes are read aloud. The class guesses the dish!'));
out.push(hw('Write a **text message** reply from the shopper (20+ words): _I\'m at the souq. There aren\'t any… Shall I buy… instead? How many…?_'));

// ======================= 4.4 =======================
out.push(pb());
out.push(h2('4.4  First, cut the bread'));
out.push(p('**Function:** giving instructions (a recipe)   ·   **Grammar:** imperatives + _first, then, after that, finally_   ·   **Pronunciation:** /tʃ/ and /ʃ/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What dishes can you cook? What do we do in a kitchen? Make a class list of cooking verbs.'));
out.push(board('First, wash the vegetables.', 'Ingredients: 2 tomatoes, 1 onion…'));
out.push(p('**b**  Match the verb and the picture word: _cut · mix · fry · boil · add · wash_  →  a knife · a pan with oil · water + 100°C · a spoon · put in more · water from the tap'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Omar teaching Maya to make?   **A** kibbeh   **B** fattoush   **C** hummus'));
out.push(p('**b**  Listen again. **1** What do you do with the bread?   **2** What do you add at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  A video call from the kitchen', [
  ['Maya', 'OK, Omar, I\'m in the kitchen. What do I do first?'],
  ['Omar', 'First, cut the bread into small squares and fry it in a little oil until it\'s brown. Or put it in the oven – it\'s healthier.'],
  ['Maya', 'OK, the bread is in the oven. Then?'],
  ['Omar', 'Then wash the vegetables and cut them: tomatoes, cucumbers, a little onion and some lettuce.'],
  ['Maya', 'How small?'],
  ['Omar', 'Not too small – about one centimetre. Put them in a big bowl. After that, chop the parsley and the mint and add them.'],
  ['Maya', 'And the dressing?'],
  ['Omar', 'Mix some olive oil, lemon juice, salt, sumac and a spoon of pomegranate molasses in a cup.'],
  ['Maya', 'Do I add it now?'],
  ['Omar', 'No! Don\'t add the dressing or the bread now. Wait. Finally, just before you eat, add the dressing and the bread and mix everything.'],
  ['Maya', 'Why just before?'],
  ['Omar', 'Because the bread needs to be crunchy!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – imperatives and sequencers**',
  'Imperative = base verb: **Cut** the bread. **Wash** the vegetables. **Mix** everything. **Don\'t add** the dressing now.',
  'Order: **First,** … → **Then** … → **After that,** … → **Next,** … → **Finally,** …',
  '**until** + result: _Fry it **until** it\'s brown._  **for** + time: _Boil it **for** ten minutes._',
  '**Cooking verbs:** cut · chop · wash · peel · mix · add · fry · boil · bake · put… in · wait · serve',
  '**Practise:** Put the instructions for Arabic tea in order.  ___ Finally, add sugar if you like.  ___ First, boil some water.  ___ After that, wait for three minutes.  ___ Then put the tea in the pot and add the water.  ___ Next, pour the tea into small glasses.',
  '**Useful phrases:** What do I do first? · Then? · How small? · Not too… · about one centimetre · Just before you eat…',
  '**Pronunciation.** 🔊 **Track 4.8** /tʃ/ (like "t" + "sh"): _chop · chicken · cheese · lunch · kitchen_  /ʃ/: _fresh · dish · wash · sugar_. Listen and repeat. Then: _Chop the fresh chicken in the kitchen._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a recipe card. A explains the recipe step by step. B asks questions and repeats to check. Then swap with card B.'));
out.push(dlg(null, [
  ['B', 'What do I do first?'],
  ['A', 'First, __________.'],
  ['B', '__________. OK. Then?'],
  ['A', 'Then __________. After that, __________.'],
  ['B', 'How long / How much / How small?'],
  ['A', '__________.'],
  ['B', 'And then?'],
  ['A', 'Finally, __________. Don\'t __________!'],
]));
out.push(table(['Card A – Hummus', 'Card B – Shakshuka (eggs with tomatoes)'], [[
  '1 boil chickpeas for 1 hour (or use a can) · 2 put chickpeas, tahini, lemon juice, garlic and salt in a blender · 3 mix until smooth · 4 add a little cold water · 5 serve with olive oil on top · don\'t add too much garlic!',
  '1 cut 1 onion and fry it in oil for 5 minutes · 2 add 4 chopped tomatoes and salt · 3 cook for 10 minutes · 4 make 4 small holes and break an egg into each one · 5 cover and cook until the eggs are white · don\'t mix the eggs!']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the sequencers you hear in order.'));
out.push(PHRASE_CARD(['First', 'Then', 'After that', 'Next', 'Finally', 'Don\'t…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a dish you can make (it can be very simple – a sandwich, tea, an omelette, or a family dish). Teach it to your partner in **five steps**. Your partner writes the steps. Then check: are they right? Change partners and teach it again – without notes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s recipe:  _Hiba\'s grandmother\'s lentil soup: first, wash the lentils. Then fry an onion in oil. After that, add the lentils and water and boil them for thirty minutes…_'));
out.push(p('**Listener task:** which recipe is the easiest? Which one do you want to try?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar writes his fattoush recipe for the class cookbook. Read and answer.'));
out.push(model([
  '**Omar\'s Fattoush** (for 4 people · 20 minutes)',
  '**Ingredients:** 2 loaves of Arabic bread · 3 tomatoes · 2 cucumbers · 1 small onion · some lettuce · 1 bunch of parsley · a little mint · **Dressing:** 4 spoons of olive oil, the juice of 1 lemon, 1 spoon of pomegranate molasses, 1 teaspoon of sumac, salt',
  '**Method:**  First, cut the bread into small squares and bake it in the oven until it\'s brown. Then wash the vegetables and cut them into small pieces. Put them in a big bowl. After that, chop the parsley and the mint and add them to the bowl. Next, mix the oil, lemon juice, pomegranate molasses, sumac and salt in a cup. Finally, just before you eat, add the dressing and the bread and mix well. Don\'t add the bread early – it needs to be crunchy!',
  '**Omar\'s tip:** add some fried halloumi cheese for a bigger meal.',
]));
out.push(item('1', 'How many people is the recipe for?'));
out.push(item('2', 'What do you mix in a cup?'));
out.push(item('3', 'What can you add for a bigger meal?'));
out.push(writers([
  'A recipe: **title** (+ people, time) → **Ingredients** (a list with quantities) → **Method** (steps with First, Then, After that, Next, Finally) → **a warning** (_Don\'t…_) → **a tip**.',
  'Each step starts with a **verb**. Use **until** and **for** for exact instructions.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______\'s ______________** (for ______ people · ______ minutes)   **Ingredients:** ______________   **Method:**  First, ______________. Then ______________. After that, ______________. Next, ______________. Finally, ______________. Don\'t ______________!   **Tip:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Each step starts with a base verb', 'Sequencers in order: First… Finally', 'All parts: ingredients with quantities, method, warning, tip']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one step before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the recipe for the dish you taught in Stage 4 – or for a family dish – for the class cookbook (60 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s recipe as a **cook**. ★ _I can make this!_  ✓ _Can you add how long…?_  ? _Can I use… instead of…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put all the recipes together: this is the **Class 4B Cookbook**! Each student chooses one recipe to try at home this week.'));
out.push(hw('Make the recipe you chose (or imagine you made it). Write a message to the writer (25+ words): _I made your… on Friday. It was… My family… One question:…_'));

// ======================= 4.5 =======================
out.push(pb());
out.push(h2('4.5  Would you like to come for dinner?'));
out.push(p('**Function:** inviting and responding   ·   **Grammar:** _Would you like to…? / I\'d love to. / I\'m afraid I can\'t._   ·   **Pronunciation:** polite intonation in invitations'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When do you invite people to your home? What do you say? How do you say no politely? Make two lists.'));
out.push(board('Would you like to come for dinner?', 'You\'re invited! Dinner at our flat'));
out.push(p('**b**  Which are **yes** and which are **no**? _I\'d love to. · I\'m afraid I can\'t. · That sounds great! · Sorry, I\'m busy. · Thanks, I\'d like that. · Maybe another time._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. When is the dinner?   **A** Thursday   **B** Friday   **C** Saturday'));
out.push(p('**b**  Listen again. **1** Why can\'t Maya come?   **2** What does Lina offer to bring?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  An invitation', [
  ['Omar', 'Lina, Maya – would you like to come for dinner at our flat on Friday? I\'m cooking for the class.'],
  ['Lina', 'Oh, I\'d love to! Thank you. What time?'],
  ['Omar', 'About seven o\'clock. Rami is making the dessert – so don\'t expect too much!'],
  ['Lina', 'Ha! Shall I bring something?'],
  ['Omar', 'You don\'t need to bring anything.'],
  ['Lina', 'I\'ll bring some fruit, then.'],
  ['Omar', 'Great. Maya, can you come?'],
  ['Maya', 'I\'m really sorry, Omar, I\'m afraid I can\'t. I\'m going to Latakia this weekend – it\'s my father\'s birthday.'],
  ['Omar', 'Oh, that\'s a shame. Never mind – maybe next time.'],
  ['Maya', 'Yes, definitely. Thank you for inviting me. Have a great evening!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – invitations**',
  table(['Inviting', 'Saying yes', 'Saying no politely'], [['**Would you like to** come for dinner? · **Do you want to** come to…? · Can you come to…?', '**I\'d love to.** · That sounds great! · Thanks, I\'d like that. · What time?', '**I\'m (really) sorry, I\'m afraid I can\'t.** + reason · Thank you for inviting me. · Maybe next time.']], [1, 1, 1.2]),
  '**Would you like to + base verb** = an invitation: _Would you like **to come**…?_  ⚠ Not ~~Would you like coming~~.',
  'Compare: _Would you like **a** coffee?_ (an offer of a thing) – _Would you like **to** come?_ (an invitation to do something).',
  'Always give a **reason** when you say no: _I\'m afraid I can\'t. I\'m going to Latakia this weekend._',
  '**Practise:** Complete.  1 Would you like ______ (go) to the cinema on Saturday?  2 – I\'d love ______! What\'s on?  3 I\'m ______ I can\'t. I\'m working late.  4 Thank you for ______ (invite) me.  5 Oh, that\'s a ______. Maybe next time.',
  '**Useful phrases:** Shall I bring something? · You don\'t need to bring anything. · That\'s a shame. · Never mind. · Definitely. · Have a great evening!',
  '**Pronunciation.** 🔊 **Track 4.10** Invitations go **up** at the end ↗ – they sound friendly: _Would you like to come for dinner?_ ↗  A flat voice → sounds bored! Saying no: start high and warm: _I\'m really sorry…_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton and the cards. A invites. B says yes to one invitation and no to the other.'));
out.push(dlg(null, [
  ['A', 'Would you like to __________ on __________?'],
  ['B', 'Oh, I\'d love to! What time? / I\'m really sorry, I\'m afraid I can\'t. I\'m __________.'],
  ['A', 'About __________. / Oh, that\'s a shame. Never mind – maybe next time.'],
  ['B', 'Shall I bring something? / Thank you for inviting me.'],
  ['A', 'You don\'t need to bring anything. / Have a great __________!'],
]));
out.push(table(['Card A invites to…', 'Card B invites to…'], [['lunch at my mother\'s house · Friday 2 pm · B: yes', 'a picnic in Tishreen Park · Saturday morning · A: no (working)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Would you like to…?', 'I\'d love to.', 'I\'m afraid I can\'t.', 'That\'s a shame.', 'Shall I bring something?', 'Thank you for inviting me.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Plan a **real** small event: a dinner, a lunch, a walk in the Old City, a football match, a coffee after class. Walk around and invite **four** classmates. Answer **their** invitations honestly – yes or no, with a real reason. Write down who is coming.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I invited four people to a walk in the Old City on Saturday. Fadi and Hiba are coming, and Hiba is bringing her camera. Tareq can\'t come because he\'s working, and Rasha is visiting her aunt._'));
out.push(p('**Listener task:** whose event is the most popular?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar sends an invitation to the class WhatsApp group, and Maya replies. Read and answer.'));
out.push(model([
  '**Omar:** Hi everyone! Would you like to come for dinner at our flat on Friday at 7 pm? I\'m cooking fattoush, kibbeh and rice with chicken, and Rami is making the dessert (good luck to us all!). The address is Building 12, Al-Akram Street, Mezzeh, 3rd floor. Please let me know by Wednesday so I can buy enough food. Omar 🙂',
  '**Maya:** Thank you so much for the invitation, Omar! I\'m really sorry, but I\'m afraid I can\'t come. I\'m going to Latakia on Thursday evening for my father\'s birthday. Can you save me some kibbeh? 😄 Have a wonderful evening, everyone!',
]));
out.push(item('1', 'What is Rami making?'));
out.push(item('2', 'Why does Omar need to know by Wednesday?'));
out.push(item('3', 'What does Maya ask Omar to do?'));
out.push(writers([
  'An invitation: **greeting** → **the invitation** (_Would you like to…?_) → **what, when, where** → **one fun detail** → **reply by…** → name.',
  'A reply: **thanks** → **yes / no** → **a reason** (if no) or **an offer** (if yes) → **a friendly ending**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Invitation:**  Hi ______! Would you like to ______________ on ______ at ______? We\'re ______________. The address is ______________. Please let me know by ______. ______'));
out.push(p('**Reply:**  Thank you so much for the invitation, ______! I\'d love to come. / I\'m really sorry, but I\'m afraid I can\'t come. I\'m ______________. Shall I bring ______? / Have a wonderful ______! ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Would you like to + base verb', 'What, when, where + reply date', 'Reply: thanks + yes / no + reason or offer']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your invitation sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an invitation to the **real** event you planned in Stage 4 (40 words or more). Then give it to a partner – they write a reply on the same page (yes **or** no – their choice!).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read the reply to **your** invitation. ★ _Thanks for your kind reply!_  ✓ _Can you tell me… ?_  ? _Can you come next time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two invitations + replies are read aloud. Class: is the reply polite?'));
out.push(hw('Write a **second** reply to your partner\'s invitation – the opposite answer this time (if you said yes, now say no politely with a reason; if you said no, now say yes and offer to bring something). 25+ words.'));

// ======================= 4.6 =======================
out.push(pb());
out.push(h2('4.6  This is delicious!'));
out.push(p('**Function:** complimenting and thanking   ·   **Grammar:** _very / really / so_ + adjective; _What a…!_   ·   **Pronunciation:** stress and feeling in compliments'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You\'re a guest at dinner. What do you say to the host? What does the host say? What do you write after the dinner?'));
out.push(board('This is delicious!', 'Thank you for a wonderful evening.'));
out.push(p('**b**  Food adjectives: put them in two groups, 😀 and 🙁 – _delicious · tasty · salty · spicy · fresh · burnt · too sweet · amazing · cold · perfect_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina think of the dessert?   **A** It\'s burnt.   **B** It\'s too sweet.   **C** It\'s really good.'));
out.push(p('**b**  Listen again. **1** What does Lina want from Omar?   **2** What did Rami make?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  Dinner at Omar and Rami\'s flat', [
  ['Omar', 'Please, help yourselves. There\'s a lot of food!'],
  ['Lina', 'Omar, this kibbeh is delicious! It\'s really crispy.'],
  ['Omar', 'Thank you! It\'s my mother\'s recipe.'],
  ['Lina', 'Can I have the recipe? My kibbeh is never so good.'],
  ['Omar', 'Of course. I\'ll send it to you.'],
  ['Sara', 'And the fattoush is so fresh. What a lovely dinner!'],
  ['Omar', 'You\'re very kind. Have some more rice!'],
  ['Lina', 'No, thank you – I\'m full. Everything was perfect.'],
  ['Rami', 'Wait – there\'s dessert! Muhallabiyeh. I made it myself.'],
  ['Lina', '(tastes it) Mmm! Rami, this is really good! You said you can\'t cook!'],
  ['Rami', 'I can\'t cook – but I can follow a video!'],
  ['Lina', 'Thank you both for a wonderful evening. Your flat is so nice.'],
  ['Omar', 'Thank you for coming. Our door is always open!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – compliments**',
  '**very / really / so** + adjective: _This is **very** good. It\'s **really** crispy. The fattoush is **so** fresh!_  (_so_ = strong feeling)',
  '**What a / an** + adjective + noun! _**What a** lovely dinner! **What a** beautiful flat! **What an** amazing view!_',
  'Answering compliments: _Thank you! · You\'re very kind. · I\'m glad you like it. · It\'s my mother\'s recipe._',
  'Thanking: **Thank you for** + noun / -ing: _Thank you **for** a wonderful evening. Thank you **for coming / inviting** me._',
  '**Practise:** Make compliments.  1 (the soup / hot and tasty) → _This soup is really tasty!_  2 (a nice garden)  3 (the cake / soft)  4 (an interesting book)  5 (your English / good)',
  '**Useful phrases:** Please, help yourselves. · Have some more… · No, thank you – I\'m full. · Everything was perfect. · I made it myself. · Our door is always open!',
  '**Pronunciation.** 🔊 **Track 4.12** Stress and feeling: _This is de**LI**cious!_ · _It\'s **REAL**ly good!_ · _What a **LOVE**ly dinner!_ Go high on the stressed word – show you mean it! Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the host, B is the guest. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Please, help yourself.'],
  ['B', 'This __________ is __________! It\'s really __________.'],
  ['A', 'Thank you! It\'s __________.'],
  ['B', 'What a __________!'],
  ['A', 'You\'re very kind. Have some more __________!'],
  ['B', 'No, thank you – I\'m full. Thank you for __________.'],
  ['A', 'Thank you for coming!'],
]));
out.push(table(['Card A – lunch at a friend\'s house', 'Card B – coffee at a colleague\'s flat'], [['food: mansaf (rich, tasty) · grandmother\'s recipe · house: big, beautiful garden', 'food: homemade cake (soft, not too sweet) · from a video · flat: amazing view of Qasioun']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform – with feeling! **Listener task:** write two compliments you hear. Did they sound real?'));
out.push(stage('4', 'Your turn – the compliment circle', 9));
out.push(p('Stand in a circle. Each student shows a photo on their phone (food they cooked, their home, their city, a hobby) or talks about it. Everyone gives **one** compliment with _really / so / What a…!_ The owner answers. Then pairs: tell your partner about a real meal you enjoyed at someone\'s home.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Fadi showed a photo of his mother\'s maqluba. Everyone said "What a beautiful dish!" Hiba said the colours were amazing._ (Learn _said / showed_ as phrases.)'));
out.push(p('**Listener task:** which photo got the most compliments?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes a thank-you message to Omar and Rami. Read and answer.'));
out.push(model([
  'Dear Omar and Rami,',
  'Thank you so much for a wonderful evening on Friday! The food was amazing – the kibbeh was so crispy, and the fattoush was really fresh. And Rami, your muhallabiyeh was a big surprise! It was a lovely evening with great friends. Omar, please don\'t forget to send me your mother\'s recipe. Next time, I\'d like to invite you all to my place – I\'ll cook mujaddara!',
  'Thanks again,',
  'Lina',
]));
out.push(item('1', 'What two dishes does Lina compliment?'));
out.push(item('2', 'What does she ask Omar to do?'));
out.push(item('3', 'What is her plan for next time?'));
out.push(writers([
  'A thank-you note: _Dear + names,_ → **Thank you (so much) for…** → **two or three compliments** (very / really / so) → **one memory or detail** → **a request or a plan** → _Thanks again, / With love,_ → name.',
  'Note: we write about the dinner in the **past**: _The food was amazing. It was a lovely evening._ (Learn **was** as a phrase now – more in Unit 8.)',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______,   Thank you so much for ______________! The ______ was ______ – the ______ was so ______, and the ______ was really ______. It was ______________. Next time, I\'d like to ______________!   Thanks again,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'very / really / so + adjective', 'Thank you for + noun / -ing', 'All parts: thanks, compliments, detail, plan, ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one compliment before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Think of a real meal or visit at someone\'s home (a relative, a friend, a neighbour). Write them a thank-you message (50 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **host**. ★ _What a kind message!_  ✓ _Can you add…?_  ? _When is the next time?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. The class says which compliment is the best.'));
out.push(hw('Write the **host\'s reply** to your partner\'s message (25+ words): _Thank you for your lovely message! I\'m glad you liked… You\'re always welcome…_'));

// ======================= 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review & Mediate: Does this have nuts in it?'));
out.push(p('**Function:** explaining a menu to a visitor   ·   **Recycling:** Units 1–4   ·   **Exam practice:** A2 Key Reading Part 1, Writing Part 6, Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** I have a bread for breakfast.  **2** How many sugar do you want?  **3** I like a coffee, please. (in a café)  **4** Would you like come to dinner?  **5** First, to cut the bread.  **6** Thank you for invite me.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the menu at Beit Al-Yasmin. Look at the symbols.'));
out.push(box('BEIT AL-YASMIN – TODAY\'S SPECIALS', [
  '**(V)** = vegetarian (no meat or fish)   **(N)** = contains nuts   **(D)** = contains dairy (milk, cheese, yoghurt)   **🌶** = spicy',
  table(['Dish', 'Description', 'Price'], [
    ['Muhammara (V)(N)🌶', 'red pepper and walnut dip with bread', '20,000'],
    ['Fattoush (V)', 'fresh salad with crispy bread', '18,000'],
    ['Shish barak (D)', 'small meat dumplings in hot yoghurt', '50,000'],
    ['Mujaddara (V)', 'rice and lentils with fried onions', '30,000'],
    ['Grilled fish', 'today\'s fish from Tartus, with rice', '70,000'],
    ['Muhallabiyeh (D)(N)', 'milk pudding with pistachios', '15,000'],
  ], [1.2, 2, 0.7]),
  'All our meat is halal. Ask your waiter about allergies.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lina explains the menu to Mr Lang. What two things can\'t he eat?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  Lunch with a visitor', [
  ['Mr Lang', 'This menu looks wonderful, Lina, but I need your help. I\'m allergic to nuts, and I don\'t eat meat.'],
  ['Lina', 'No problem. Let me look… OK, the muhammara is vegetarian, but it has walnuts in it – so not for you.'],
  ['Mr Lang', 'What\'s that? Walnuts?'],
  ['Lina', 'They\'re a kind of nut. The fattoush is fine – it\'s a fresh salad with crispy bread. No meat and no nuts.'],
  ['Mr Lang', 'Great. And a main course?'],
  ['Lina', 'The shish barak has meat in it. But the mujaddara is vegetarian – it\'s rice and lentils with fried onions. It\'s my favourite!'],
  ['Mr Lang', 'Do you eat fish? The fish looks good too.'],
  ['Lina', 'I do, but you said no meat – do you eat fish?'],
  ['Mr Lang', 'Yes, I eat fish. But today I\'ll try your favourite. And dessert?'],
  ['Lina', 'The muhallabiyeh is a milk pudding, but it has pistachios on top – they\'re nuts too. Let\'s ask the waiter for a fruit plate.'],
  ['Mr Lang', 'Perfect. Thank you, Lina – you\'re a great guide!'],
]));
out.push(sp());
out.push(box('Language box – explaining a menu', [
  'Explain the symbols and the dish in **simple words**:',
  '_(N)_ → **It has nuts in it.** / **It contains nuts.**   _(V)_ → **It\'s vegetarian – there\'s no meat in it.**   _(D)_ → **It has milk / cheese / yoghurt in it.**',
  'Explain unknown words: **It\'s a kind of…** · **It\'s like…** · **It\'s made with…**',
  'Give advice: **It\'s fine for you.** · **It\'s not for you.** · **Let\'s ask the waiter.**',
  '**Useful phrases:** I\'m allergic to… · I don\'t eat… · Let me look… · …, so not for you. · It\'s my favourite! · You\'re a great guide!',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is a visitor with a card. B explains the menu above and recommends a starter, a main course and a dessert. Then swap.'));
out.push(table(['Visitor card A', 'Visitor card B'], [['vegetarian · can\'t eat dairy · loves spicy food', 'eats everything · allergic to fish · doesn\'t like spicy food']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three dishes recommended. Are they safe for the visitor?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three** real Syrian dishes a visitor might not know. Your partner is a foreign visitor (they choose: vegetarian / allergic to something / doesn\'t like spicy food…). Explain each dish: what it is, what\'s in it, and if it\'s good for them.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained:  _Tareq explained kibbeh nayyeh to me. It\'s raw meat with bulgur, so it\'s not for vegetarians. He recommended yalanji – vine leaves with rice – because there\'s no meat in it._'));
out.push(p('**Listener task:** which dish is the most difficult to explain?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 7));
out.push(p('For each text, choose the correct answer **A**, **B** or **C**.'));
out.push(model(['**1**  _ABU SHAKER SANDWICHES – Free delivery for orders over 50,000 SYP. Delivery 11 am – 11 pm._']));
out.push(p('**A** You pay for delivery if your order is small.   **B** Delivery is free all day and night.   **C** You can only order after 11 pm.', { indent: 200 }));
out.push(model(['**2**  _Omar – the soup is in the fridge. Heat it for 5 minutes, but don\'t boil it! Mum_']));
out.push(p('**A** Omar must cook the soup for a long time.   **B** Omar needs to warm the soup, not boil it.   **C** The soup is on the cooker.', { indent: 200 }));
out.push(model(['**3**  _CAFÉ NOTICE: Please order and pay at the counter. We bring your food to your table._']));
out.push(p('**A** A waiter takes your order at your table.   **B** You pay after you eat.   **C** You go to the counter first.', { indent: 200 }));
out.push(model(['**4**  _Lina – I\'m bringing the drinks on Friday, so don\'t buy any. Can you bring some fruit? Maya_']));
out.push(p('**A** Maya wants Lina to buy drinks.   **B** Lina should bring fruit.   **C** Maya can\'t come on Friday.', { indent: 200 }));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Sami is vegetarian and he doesn\'t eat dairy. He wants to eat at Beit Al-Yasmin. Write him a message. Use the menu.'));
out.push(p('Hi Sami,   You can eat at Beit Al-Yasmin! The ______ is vegetarian – ______________. The ______ is also fine – ______________. Don\'t order the ______ because ______________, and the ______ has ______ in it. For dessert, ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Two safe dishes, explained', 'Two dishes to avoid + reasons', 'Dessert advice', 'Own words – not a copy of the menu']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend, Emma, is coming to dinner at your home on Saturday. Write an email to Emma.',
  'In your email:  •  say **what time** to come  •  tell her **what you\'re going to cook**  •  ask her **what food she doesn\'t eat**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I have ___ for breakfast.   a) a bread   b) breads   c) bread',
  '2  How ___ eggs do you need?   a) much   b) many   c) lot',
  '3  ___ the grilled chicken, please.   a) I like   b) I\'d like   c) I\'m like',
  '4  Can I have a ___ of water, please?   a) bottle   b) bunch   c) loaf',
  '5  ___, cut the bread into small squares.   a) Finally   b) First   c) After',
  '6  Would you like ___ for dinner on Friday?   a) come   b) coming   c) to come',
  '7  I\'m afraid I ___ come. I\'m working.   a) can\'t   b) don\'t   c) not',
  '8  What ___ lovely dinner!   a) –   b) a   c) the',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 1 style).** 🔊 **Track 4.14** You will hear five short conversations. Choose **A**, **B** or **C**.'));
['1  What does the woman order to drink?   A tea   B orange juice   C water',
 '2  How much does the man pay?   A 12,000   B 20,000   C 22,000',
 '3  What time is the dinner?   A 6.30   B 7.00   C 7.30',
 '4  What does the man need to buy?   A rice   B bread   C eggs',
 '5  What does the woman think of the soup?   A It\'s too salty.   B It\'s cold.   C It\'s delicious.'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 4.14  Audio script (read after the check)', [
  ['1  Waiter', 'Would you like tea or coffee?'],
  ['   Woman', 'Hmm, no, thanks. Could I have an orange juice, please? Not water – I have some.'],
  ['2  Man', 'How much is that altogether?'],
  ['   Seller', 'The cheese is twelve and the olives are eight – that\'s twenty thousand.'],
  ['   Man', 'Twenty. Here you are.'],
  ['3  Woman', 'Is dinner at seven?'],
  ['   Man', 'No, half past seven. My brother finishes work at seven.'],
  ['4  Woman', 'We\'ve got rice and eggs. Can you get some bread on your way home?'],
  ['   Man', 'Sure. Two loaves?'],
  ['5  Man', 'How\'s the soup? Is it too salty?'],
  ['   Woman', 'No, it\'s perfect. It\'s really delicious!'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words) inviting them to eat at your favourite restaurant or café. Say what food is good there and when you want to go.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ talk about food I like and don\'t like',
  '☐ order food in a café or restaurant',
  '☐ ask about quantities and prices',
  '☐ give instructions for a recipe',
  '☐ invite people and accept or refuse politely',
  '☐ compliment and thank a host',
  '☐ explain a menu to a visitor in my own words',
  '☐ write a food blog post, an order message, a shopping note, a recipe, an invitation and reply, and a thank-you note',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
