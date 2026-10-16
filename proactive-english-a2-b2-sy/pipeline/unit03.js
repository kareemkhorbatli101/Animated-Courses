// Proactive English A2 · Syria Edition · Book 1 · Unit 3 — Student's Book
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

out.push(h1('Unit 3  Home & Neighbourhood'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**3.1**  describe a home',
  '**3.2**  say where things are',
  '**3.3**  talk about your neighbourhood',
  '**3.4**  ask for and give directions',
  '**3.5**  describe things (size, shape, colour, material)',
  '**3.6**  make and accept offers',
  '**3.7**  Review & Mediate: tell a friend about a flat for rent',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Lama Nasser** (19) – Maya\'s younger sister. She is starting university in Damascus (English literature) and needs a flat.',
  '**Abu Nabil** – a landlord in Baramkeh.   ·   **Mr Bassam** – receptionist at Al-Yasmin Language Centre.',
], C.lyellow, C.orange));

// ======================= 3.1 =======================
out.push(pb());
out.push(h2('3.1  There\'s a big kitchen'));
out.push(p('**Function:** describing a home   ·   **Grammar:** _there is / there are_; _a / an / some / any_   ·   **Pronunciation:** /ð/ _there, this_ and /θ/ _bathroom, third_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What rooms and furniture are there in a home? What do flat ads say? Your teacher writes the class\'s ideas on the board.'));
out.push(board('There\'s a big kitchen.', 'FLAT FOR RENT – 2 bedrooms'));
out.push(p('**b**  Which room? Write the room for each thing: _a bed · a fridge · a sofa · a shower · a desk · a cooker_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is looking for a flat?   **A** Maya   **B** Maya\'s sister   **C** Lina'));
out.push(p('**b**  Listen again. **1** How many bedrooms are there?   **2** Is there any furniture in the living room?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  A flat in Baramkeh', [
  ['Abu Nabil', 'Come in, come in. This is the flat.'],
  ['Maya', 'Thank you. Lama, look – it\'s very bright.'],
  ['Lama', 'Yes, it is! How many bedrooms are there?'],
  ['Abu Nabil', 'There are two bedrooms. There\'s a big bed in this one and there\'s a desk in the small one.'],
  ['Lama', 'Great – I need a desk for my studies. Is there a balcony?'],
  ['Abu Nabil', 'Yes, there is. It\'s next to the kitchen. There are some plants on it.'],
  ['Maya', 'And the kitchen? Is there a fridge?'],
  ['Abu Nabil', 'Yes, there\'s a fridge and a cooker, but there isn\'t a washing machine, I\'m sorry.'],
  ['Lama', 'Are there any chairs in the living room?'],
  ['Abu Nabil', 'There\'s a sofa, but there aren\'t any chairs. And the bathroom is here – there\'s a shower.'],
  ['Maya', 'And it\'s ten minutes from the university. What do you think, Lama?'],
  ['Lama', 'I love it!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – there is / there are; a / an / some / any**',
  table(['', 'singular', 'plural'], [
    ['+', 'There\'s (there is) **a** fridge.', 'There are **some** plants.'],
    ['–', 'There isn\'t **a** washing machine.', 'There aren\'t **any** chairs.'],
    ['?', 'Is there **a** balcony? – Yes, there is. / No, there isn\'t.', 'Are there **any** chairs? – Yes, there are. / No, there aren\'t.'],
  ], [0.3, 1.4, 1.4]),
  'Use **some** in positive sentences and **any** in negatives and questions (plural or uncountable): _There\'s some water. Is there any milk?_',
  '⚠ Say _There are two bedrooms_ – not ~~It has two bedrooms~~ when you describe what is in a place. (Both are possible, but practise _there is / are_!) And not ~~There is two bedrooms~~.',
  '**Practise:** Complete with _There\'s, There are, Is there, Are there, There isn\'t, There aren\'t_.  1 ______ a big window in the kitchen.  2 ______ any shops near the flat? – Yes, there are.  3 ______ three chairs on the balcony.  4 ______ a garden. – No, there isn\'t.  5 ______ any pictures on the walls – they\'re empty.  6 ______ a lift in the building, so we use the stairs.',
  '**Useful phrases:** Come in. · It\'s very bright. · What do you think? · I love it! · It\'s ten minutes from…',
  '**Pronunciation.** 🔊 **Track 3.2** /ð/ (voice on): _there, this, the, they_ · /θ/ (no voice): _bathroom, third, thanks, three_. Put your tongue between your teeth – don\'t say /z/ or /d/! Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the landlord, B wants to rent. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Come in. This is the flat.'],
  ['B', 'Thank you. How many bedrooms are there?'],
  ['A', 'There are / There\'s __________.'],
  ['B', 'Is there a __________?'],
  ['A', 'Yes, there is. / No, there isn\'t, I\'m sorry.'],
  ['B', 'Are there any __________?'],
  ['A', 'Yes, there are some __________. / No, there aren\'t any __________.'],
  ['B', 'What do you think? / I love it!'],
]));
out.push(table(['Card A – flat in Mezzeh', 'Card B – house in Jaramana'], [['1 bedroom · balcony ✓ · washing machine ✗ · chairs ✓ (4) · lift ✓', '3 bedrooms · garden ✓ · fridge ✓ · beds ✗ · shops near ✓']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** tick ✓ or cross ✗ for each thing you hear about.'));
out.push(PHRASE_CARD(['bedrooms', 'balcony', 'garden', 'fridge', 'washing machine', 'chairs']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw a simple plan of **your home** (or a home you know well – you can invent!). Don\'t show it. Describe it to your partner. Your partner draws it. Compare the two drawings. Then change partners and describe it again – faster.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s home:  _There are three bedrooms in Fadi\'s house. There\'s a big garden with some orange trees, but there isn\'t a garage._'));
out.push(p('**Listener task:** who has got the biggest balcony or garden?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the ad for the flat in Baramkeh. Answer the questions.'));
out.push(model([
  '**FLAT FOR RENT – BARAMKEH**',
  'Bright two-bedroom flat on the third floor, 10 minutes\' walk from Damascus University. There\'s a living room with a sofa, a kitchen with a fridge and a cooker, and a bathroom with a shower. There\'s a small balcony with some plants. There isn\'t a washing machine, but there\'s a laundry next to the building. Quiet street with some shops and a bakery.',
  '**Rent:** 900,000 SYP a month (water included).   **Call:** Abu Nabil, 0955 300 214 (after 4 pm).',
]));
out.push(item('1', 'Which floor is the flat on?'));
out.push(item('2', 'What can you do without a washing machine?'));
out.push(item('3', 'When can you call Abu Nabil?'));
out.push(writers([
  'A flat ad: **headline** (FLAT FOR RENT + area) → **size + location** → **rooms and furniture** (_There\'s… There are…_) → **one problem + solution** (_There isn\'t…, but…_) → **the street / area** → **rent + contact**.',
  'Use **adjectives** to sell the flat: _bright, quiet, big, modern, sunny_.',
  'Use **with**: _a kitchen **with** a fridge_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**FLAT FOR RENT – ______________**   ______________ flat on the ______ floor, ______ minutes from ______________. There\'s a ______________ with ______________ and ______________. There are ______________. There isn\'t ______________, but ______________. ______________ street with ______________.   **Rent:** ______ a month.   **Call:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'there is / there are – singular and plural correct', 'a / some / any used correctly', 'All parts: headline, rooms, problem + solution, area, rent, contact']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an ad for **your home** or your **dream home** (50 words or more). Make it sound great – but be honest about one problem!'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s ad as **someone who wants to rent**. ★ _I like…_  ✓ _Can you add the rent?_  ? _Is there a…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the ads on the wall. Walk around. Put a sticky note on the home you want to rent: _I want this flat because…_'));
out.push(hw('Write an email to the person whose ad you chose (30+ words). Say you are interested and ask **two** questions: _Is there a lift? Are there any schools near the flat?_'));

// ======================= 3.2 =======================
out.push(pb());
out.push(h2('3.2  Where are my keys?'));
out.push(p('**Function:** saying where things are   ·   **Grammar:** prepositions of place; _something / anything / somewhere / anywhere_   ·   **Pronunciation:** word stress: _beTWEEN, beHIND, OPposite_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What things do people often lose at home? Where do you keep them? Make two lists.'));
out.push(board('My keys are on the table.', 'Your keys are in the drawer.'));
out.push(p('**b**  Draw a box on the board. Your teacher puts a pen **in, on, under, next to, behind, in front of** the box. Say where it is.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Rami looking for?   **A** his phone   **B** his keys   **C** his wallet'));
out.push(p('**b**  Listen again. **1** Where does Rami usually put them?   **2** Where are they in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  Late for work', [
  ['Rami', 'Omar! Have you seen my keys? I can\'t find them anywhere!'],
  ['Omar', 'Aren\'t they on the shelf next to the door? You usually put them there.'],
  ['Rami', 'No, they aren\'t. There\'s nothing on the shelf.'],
  ['Omar', 'Are they in your jacket?'],
  ['Rami', 'No… there\'s something in my pocket, but it\'s only a pen.'],
  ['Omar', 'What about under the sofa? Things often fall there.'],
  ['Rami', 'Hmm… no, there isn\'t anything under the sofa. Only dust!'],
  ['Omar', 'Look in the kitchen. You were there this morning. Are they behind the coffee pot?'],
  ['Rami', 'Wait… yes! They\'re between the coffee pot and the bread. Thanks, Omar!'],
  ['Omar', 'You\'re welcome. Now go – you\'re late!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – prepositions of place**',
  table(['in', 'on', 'under', 'next to', 'between', 'behind', 'in front of', 'opposite'], [['in the drawer', 'on the shelf', 'under the sofa', 'next to the door', 'between the pot and the bread', 'behind the pot', 'in front of the TV', 'opposite the bakery']], [1, 1, 1, 1, 1.3, 1, 1, 1]),
  '**something / anything / nothing; somewhere / anywhere**',
  '+  There\'s **something** in my pocket. · They\'re **somewhere** in the kitchen.',
  '–  There **isn\'t anything** under the sofa. · I can\'t find them **anywhere**.  (= There\'s **nothing** under the sofa.)',
  '?  Is there **anything** in the box? · Are my keys **anywhere** in the car?',
  '⚠ Don\'t use two negatives: ~~There isn\'t nothing~~ → _There isn\'t anything_ or _There\'s nothing_.',
  '**Practise:** Choose the correct word.  1 Is there (_something / anything_) in the fridge?  2 I\'m sure my phone is (_somewhere / anywhere_) in this room.  3 There\'s (_anything / nothing_) on the shelf.  4 I can\'t see my glasses (_somewhere / anywhere_).  5 There\'s (_something / anything_) under the bed – a shoe!',
  '_Note: Have you seen…? – learn this as a phrase (Unit 1). We study it in Book 2._',
  '**Useful phrases:** I can\'t find… anywhere! · What about…? · Look in… · Wait… yes! · Now go – you\'re late!',
  '**Pronunciation.** 🔊 **Track 3.4** Stress: be**TWEEN** · be**HIND** · **OP**posite · **NEXT** to · in **FRONT** of. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has lost something. B helps. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'I can\'t find my __________ anywhere!'],
  ['B', 'Aren\'t they / Isn\'t it __________? You usually put it / them there.'],
  ['A', 'No, there\'s nothing __________.'],
  ['B', 'What about __________?'],
  ['A', 'Hmm… no, there isn\'t anything __________.'],
  ['B', 'Look __________.'],
  ['A', 'Wait… yes! It\'s / They\'re __________. Thanks!'],
]));
out.push(table(['Card A – glasses', 'Card B – phone charger'], [['usually: on the desk · not: in the bag, under the bed · found: behind the TV', 'usually: next to the bed · not: in the drawer, on the sofa · found: between the books on the shelf']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** where is the thing in the end? Write it.'));
out.push(stage('4', 'Your turn – hide and find', 9));
out.push(p('Draw a room with **ten** things in it (a table, a lamp, a bag, books, a cup…). Your partner draws the same room **empty**. Tell your partner where everything is. They draw it. Then hide **one** small thing (a key, a coin) in your picture – your partner asks _Is it in / on / under…?_ to find it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class where your partner\'s hidden thing was and how you found it:  _Hiba\'s coin was under the cup. There wasn\'t anything in the bag, and there was nothing on the shelf._ (Learn _was / wasn\'t_ as phrases here.)'));
out.push(p('**Listener task:** who found the hidden thing in the fewest questions?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar leaves a note for Rami before a trip to Aleppo. Read and answer.'));
out.push(model([
  'Rami,',
  'I\'m in Aleppo until Sunday. A few things: the spare keys are in the small drawer next to the fridge. The electricity bill is on my desk, under the green folder – can you pay it on Thursday? There\'s some kibbeh in the freezer for you (you\'re welcome!). Please don\'t touch anything on my desk – my computer parts are everywhere. If there\'s a problem, I\'m on WhatsApp.',
  'Omar',
]));
out.push(item('1', 'Where are the spare keys?'));
out.push(item('2', 'What does Omar want Rami to do on Thursday?'));
out.push(item('3', 'Why can\'t Rami touch anything on the desk?'));
out.push(writers([
  'A note to a housemate or family member: **name,** → **why you write** → **where things are** (one thing per sentence) → **a request** → **contact** → your name.',
  'Be exact: _in the small drawer **next to** the fridge_, not just _in the kitchen_.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('______,   I\'m ______________ until ______. A few things: the ______________ is / are ______________. The ______________ is ______________ – can you ______________? There\'s some ______________ in ______________. Please don\'t ______________. If there\'s a problem, ______________.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Prepositions of place are exact', 'something / anything / nothing used correctly', 'All parts: reason, where things are, a request, contact']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('You\'re going away for a week. Write a note to a family member or friend who is staying in your home (50 words or more). Tell them where **four** important things are and ask them to do **one** thing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as the **person staying in the home**. ★ _Very clear!_  ✓ _Can you add…?_  ? _Where is the…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two notes are read aloud. The class says: "I can find everything!" or asks a question.'));
out.push(hw('Write a reply text message to your partner\'s note (20+ words): _No problem! I found the keys in… But I can\'t find… anywhere!_'));

// ======================= 3.3 =======================
out.push(pb());
out.push(h2('3.3  Is there a bakery near here?'));
out.push(p('**Function:** talking about your neighbourhood   ·   **Grammar:** adjective + noun; _near / far from_   ·   **Pronunciation:** /v/ and /f/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What places are there in a neighbourhood? Which are important for you? Make a class list.'));
out.push(board('Is there a pharmacy near here?', 'There\'s a good bakery on my street.'));
out.push(p('**b**  Where do you go to…? buy bread → ______  pray → ______  post a parcel → ______  buy medicine → ______  play football → ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Lama meets…   **A** a new classmate   **B** a new neighbour   **C** a shop owner'));
out.push(p('**b**  Listen again. **1** Where is the bakery?   **2** Is there a gym near the building?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  On the stairs', [
  ['Umm Ziad', 'Hello! Are you the new girl in Flat 7?'],
  ['Lama', 'Yes, I am. I\'m Lama. I\'m a student at the university.'],
  ['Umm Ziad', 'Welcome! I\'m Umm Ziad, from Flat 5. Do you need anything?'],
  ['Lama', 'Thank you. Is there a bakery near here?'],
  ['Umm Ziad', 'Yes, there\'s a very good bakery on the corner, opposite the mosque. Go early – the bread is still hot at seven!'],
  ['Lama', 'Great. And is there a supermarket?'],
  ['Umm Ziad', 'There\'s a small supermarket next to the bakery, and there\'s a big one on the main street, five minutes from here.'],
  ['Lama', 'Is there a gym in the area? I like running.'],
  ['Umm Ziad', 'No, there isn\'t a gym near here, but there\'s a lovely park ten minutes away. Lots of young people run there in the evening.'],
  ['Lama', 'That\'s perfect. Thank you so much!'],
  ['Umm Ziad', 'You\'re welcome. Knock on my door any time!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – adjective + noun; near / far from**',
  'The adjective comes **before** the noun: _a **good** bakery · a **small** supermarket · a **lovely** park_.  ⚠ Not ~~a bakery good~~. Adjectives never take -s: _two **big** parks_, not ~~bigs parks~~.',
  'With _be_, the adjective comes after: _The bread **is hot**. The park **is lovely**._',
  'Distance: _It\'s **near** here. · It\'s **far from** my house. · It\'s **five minutes from** here. · It\'s **ten minutes away**. · It\'s **on the corner / on the main street**._',
  '**Practise:** Correct the mistakes.  1 There\'s a restaurant cheap on my street.  2 There are two schools bigs near my house.  3 The park is near from here.  4 My office is far my home.  5 There\'s a mosque beautiful opposite the bakery.',
  '**Useful phrases:** Are you the new… ? · Welcome! · Do you need anything? · Go early. · That\'s perfect. · Knock on my door any time!',
  '**Pronunciation.** 🔊 **Track 3.6** /v/ (teeth on lip + voice) and /f/ (no voice): _very / ferry · van / fan · five · lovely · office · favourite_. Listen and repeat. Don\'t say /f/ for /v/!',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is new in the building, B is a neighbour. Use the skeleton and the map card. Then swap.'));
out.push(dlg(null, [
  ['B', 'Hello! Are you the new __________ in Flat __________?'],
  ['A', 'Yes, I am. I\'m __________.'],
  ['B', 'Welcome! Do you need anything?'],
  ['A', 'Thank you. Is there a __________ near here?'],
  ['B', 'Yes, there\'s a __________ __________ on / opposite / next to __________.'],
  ['A', 'And is there a __________?'],
  ['B', 'No, there isn\'t, but there\'s a __________ __________ minutes from here.'],
  ['A', 'That\'s perfect. Thank you!'],
]));
out.push(table(['Map card – Al-Ward Street', ''], [['On the corner: a small bakery (very good bread)', 'Opposite the bakery: a pharmacy (open late)'], ['Next to the pharmacy: a cheap restaurant', 'No supermarket – a big one is 10 minutes away'], ['No gym – a sports club is 15 minutes by bus', 'At the end of the street: a beautiful old church']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the adjective you hear with each place: a ______ bakery, a ______ restaurant, a ______ church.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw a simple map of the street or area where you live (or a street you know well). Your partner is a new neighbour. They ask about **four** places. Answer with adjectives and _near / far from / opposite / on the corner_. Then change partners.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s neighbourhood:  _Tareq lives in a quiet area in Dummar. There\'s a big park near his house, and there\'s a good falafel restaurant on the corner. But the supermarket is far from his building._'));
out.push(p('**Listener task:** which neighbourhood do you want to live in? Why?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes about her neighbourhood for the class page. Read and answer.'));
out.push(model([
  '**My neighbourhood – Lina Haddad**',
  'I live in Shaalan, in the centre of Damascus. It\'s a busy area with lots of shops, cafés and restaurants. My building is on a small street near the main road. There\'s a great juice shop on the corner – I have a fresh orange juice there every Saturday. There\'s also an old bookshop opposite my building. The owner, Abu Samir, knows every book in the shop! The only problem is the traffic: it\'s very noisy in the evening. But I love my neighbourhood because everything is near.',
]));
out.push(item('1', 'Where is Shaalan?'));
out.push(item('2', 'What does Lina do every Saturday?'));
out.push(item('3', 'What is the problem in her neighbourhood?'));
out.push(writers([
  'Describing a place: **where it is** → **general description** (_a busy / quiet area_) → **two or three special places** (with adjectives and locations) → **one problem** → **why you like it**.',
  'Use **also** to add an idea and **but** for a contrast: _The only problem is… But I love…_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('I live in ______________, in ______________. It\'s a ______ area with ______________. My building / house is ______________. There\'s a ______ ______________ on / opposite / next to ______________. There\'s also ______________. The only problem is ______________. But I love my neighbourhood because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters (places!) and full stops', 'Adjective before the noun; no -s on adjectives', 'there is / there are correct', 'All parts: where, description, special places, problem, why you like it']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write "My neighbourhood" (60 words or more). Describe **three** places with adjectives and say where they are. Include one problem.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I want to visit…_   ✓ _Can you add…?_   ? _Is there a… near your house?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their texts. The class votes: the best neighbourhood for **families**, for **students**, for **food lovers**.'));
out.push(hw('Write a reply to your partner (25+ words): _Your neighbourhood sounds lovely! Is the juice shop expensive? In my area there\'s…_'));

// ======================= 3.4 =======================
out.push(pb());
out.push(h2('3.4  Turn left at the pharmacy'));
out.push(p('**Function:** asking for and giving directions   ·   **Grammar:** imperatives for directions   ·   **Pronunciation:** stress on the important words'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How do people give directions? What do we say? What do we write in a message? Make two lists.'));
out.push(board('Go straight on.', 'Take the first street on the left.'));
out.push(p('**b**  Draw arrows for: _turn left · turn right · go straight on · go past · cross the road · it\'s on your right_'));
out.push(stage('2', 'Listen and read', 12));
out.push(box('Route map – from the bus stop on Mezzeh Highway', [
  '**START:** the bus stop on Mezzeh Highway. Walk along **Al-Ward Street** to **Al-Shifa Pharmacy** on the corner.',
  '**Straight on along Al-Ward Street (don\'t turn):**  the bakery → **the mosque** (at the end of the street).',
  '**Turn LEFT at the pharmacy into Al-Jalaa Street** and walk ↓',
  table(['On your LEFT', 'Al-Jalaa Street ↓', 'On your RIGHT'], [
    ['the bank', 'traffic lights', 'the café'],
    ['a school', '', 'the supermarket'],
    ['**AL-YASMIN LANGUAGE CENTRE**', '', '**the post office** (opposite Al-Yasmin)'],
  ], [1.3, 1, 1.3]),
], C.grey, C.navy));
out.push(p('**a**  **Books closed.** Listen. Who is lost?   **A** Lama   **B** Sara, a new student   **C** a tourist'));
out.push(p('**b**  Listen again. **1** Where does Sara turn left?   **2** What is opposite the centre?'));
out.push(p('**c**  **Books open.** Listen and read. Follow the route on the map.'));
out.push(dlg('Track 3.7  Sara is lost', [
  ['Sara', 'Hi Maya, it\'s Sara. Sorry, I\'m lost! I\'m at the bus stop on Mezzeh Highway. How do I get to Al-Yasmin?'],
  ['Maya', 'No problem, it\'s easy. Can you see a pharmacy on the corner?'],
  ['Sara', 'Yes, I can – Al-Shifa Pharmacy.'],
  ['Maya', 'That\'s my pharmacy! OK, walk to the pharmacy and turn left into Al-Jalaa Street.'],
  ['Sara', 'Turn left at the pharmacy. OK.'],
  ['Maya', 'Then go straight on. Go past the traffic lights and the bank. Don\'t turn right at the lights!'],
  ['Sara', 'Go past the traffic lights… and then?'],
  ['Maya', 'The centre is on your left, next to a school. It\'s opposite the post office. It\'s about five minutes from the bus stop.'],
  ['Sara', 'On the left, opposite the post office. Thanks, Maya!'],
  ['Maya', 'See you in class!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – imperatives for directions**',
  '**Go** straight on. · **Turn** left / right **at** the pharmacy. · **Take** the first / second street **on the** left. · **Go past** the café. · **Cross** the road. · **Don\'t turn** right!',
  'Where is it? It\'s **on your left / right**. · It\'s **at the end of** the street. · It\'s **on the corner of** X Street and Y Street.',
  'Asking: Excuse me, how do I get to…? · Where\'s the nearest…? · Is it far? – No, it\'s about five minutes on foot.',
  '**Practise:** Look at the map. Start at the bus stop. Where are you?  1 Turn left at the pharmacy. Go straight on to the traffic lights. It\'s on your left. → ______  2 Walk along Al-Ward Street. Go past the pharmacy and the bakery. It\'s at the end of the street. → ______  3 Turn left at the pharmacy. Go past the traffic lights and the supermarket. It\'s on your right, opposite Al-Yasmin. → ______',
  '**Useful phrases:** Sorry, I\'m lost! · How do I get to…? · It\'s easy. · Can you see…? · (repeat to check) _Turn left at the pharmacy. OK._',
  '**Pronunciation.** 🔊 **Track 3.8** Stress the important words: _Turn **LEFT** at the **PHAR**macy._ · _Go **PAST** the **CA**fé._ · _It\'s on your **RIGHT**._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the map. A is at the bus stop and asks for a place. B gives directions. A repeats to check. Then swap.'));
out.push(dlg(null, [
  ['A', 'Excuse me, how do I get to the __________?'],
  ['B', 'It\'s easy. Walk to __________ and turn __________.'],
  ['A', 'Turn __________ at __________. OK.'],
  ['B', 'Then go __________. Go past __________.'],
  ['A', 'And then?'],
  ['B', 'The __________ is on your __________, next to / opposite __________.'],
  ['A', 'Thanks a lot!'],
]));
out.push(table(['A asks for…', 'B asks for…'], [['the post office · the mosque', 'the café · the supermarket']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** follow the route on the map with your finger. Do you arrive at the right place?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** route: from this centre to your home, to a good restaurant, or to a bus stop. Give your partner directions. Your partner draws the route as you speak. Then check: is the drawing right? Change partners.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s route:  _From here to Fadi\'s favourite shawarma place: turn right, go straight on to the big roundabout, take the second street on the left. It\'s next to a bank._'));
out.push(p('**Listener task:** can you guess the place? Do you know it?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lama sends her friend directions to her new flat. Read and answer.'));
out.push(model([
  'Hi Rasha! Here are the directions to my flat for Thursday. Take the minibus to Baramkeh and get off at the university gate. Cross the road and walk towards the big hotel. Take the first street on the right – it\'s next to a juice shop. Go straight on for about 200 metres. My building is on the left, opposite a small mosque. It\'s the blue door. I\'m on the third floor, Flat 7. Don\'t take the lift – it\'s broken! Call me if you get lost: 0938 551 207. See you at 5!',
]));
out.push(item('1', 'Where does Rasha get off the minibus?'));
out.push(item('2', 'What is opposite Lama\'s building?'));
out.push(item('3', 'Why can\'t Rasha take the lift?'));
out.push(writers([
  'Directions message: **transport** → **start point** → **steps in order** (one step per sentence) → **landmarks** (next to, opposite) → **the building / door / floor** → **a warning** → **phone number**.',
  'Imperatives start with the **base verb**: _Take… Cross… Go…_ Use **then** and **after that** to link steps.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______! Here are the directions to ______________. Take ______________ and get off at ______________. ______________ and walk ______________. Take the ______ street on the ______. Go straight on ______________. My ______________ is on the ______, opposite ______________. It\'s ______________. Call me if you get lost: ______. See you at ______!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Each step starts with a verb (imperative)', 'Landmarks: next to / opposite / on the left', 'Steps in the right order + building details + phone']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one step before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Invite a classmate to your home (or to a place you love). Write the directions from this centre or from a well-known place (60 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s directions and draw the route. ★ _Easy to follow!_  ✓ _Can you add a landmark?_  ? _Is it far from…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their directions. The class listens and says the last landmark.'));
out.push(hw('Write a reply to your partner\'s invitation (25+ words): say yes, check one step (_So I turn right at the juice shop?_) and say what time you can come.'));

// ======================= 3.5 =======================
out.push(pb());
out.push(h2('3.5  It\'s small and made of leather'));
out.push(p('**Function:** describing things   ·   **Grammar:** adjective order (size – shape/age – colour – material); _made of_   ·   **Pronunciation:** word stress in adjectives'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher holds up a bag, a cup, a phone. Describe them. What words do we use? Make groups.'));
out.push(table(['size', 'shape', 'colour', 'material'], [['big, small, long…', 'round, square…', 'black, dark blue…', 'leather, plastic…'], ['', '', '', ''], ['', '', '', '']], [1, 1, 1, 1]));
out.push(p('**b**  What is it made of? a window → ______  a scarf → ______  a bottle → ______  a table → ______  a ring → ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did Lina lose?   **A** a scarf   **B** a bag   **C** a phone'));
out.push(p('**b**  Listen again. **1** What colour is it?   **2** What\'s inside it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  At reception', [
  ['Mr Bassam', 'Good evening, Lina. Can I help you?'],
  ['Lina', 'I hope so! I think I left my bag in the café on Thursday.'],
  ['Mr Bassam', 'OK, we\'ve got some bags here. What does it look like?'],
  ['Lina', 'It\'s a small brown leather bag.'],
  ['Mr Bassam', 'Is it round or square?'],
  ['Lina', 'It\'s square, with a long thin strap. And there\'s a small silver key ring on it – it\'s a star.'],
  ['Mr Bassam', 'What\'s inside it?'],
  ['Lina', 'My glasses in a red case, some keys, and a notebook.'],
  ['Mr Bassam', 'Let me look… Is this it?'],
  ['Lina', 'No, that one\'s black and it\'s made of plastic. Oh – that\'s it! Next to the umbrella!'],
  ['Mr Bassam', 'Here you are. Can you sign here, please?'],
  ['Lina', 'Of course. Thank you so much!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing things**',
  '**Adjective order:** size → shape / age → colour → material → **noun**',
  table(['size', 'shape / age', 'colour', 'material', 'noun'], [['a small', 'square', 'brown', 'leather', 'bag'], ['a long', 'old', 'blue', 'wool', 'scarf'], ['a big', 'round', 'white', 'plastic', 'box']], [1, 1, 1, 1, 1]),
  'Usually use only **two or three** adjectives: _a small brown bag · an old wooden box_.',
  '**made of:** _It\'s **made of** leather / glass / metal / wood / plastic / cotton / wool / silver / gold._  Questions: _What\'s it made of? What does it look like? What colour is it?_',
  '**Practise:** Put the words in order.  1 bag / black / big / a  2 a / ring / silver / small  3 scarf / cotton / white / a  4 a / table / round / wooden  5 an / phone / old / grey',
  '_Note: I left… / I think I left… – learn as phrases here (past simple comes in Unit 8)._',
  '**Useful phrases:** I hope so! · What does it look like? · Let me look… · Is this it? · That\'s it! · Can you sign here, please?',
  '**Pronunciation.** 🔊 **Track 3.10** Word stress: **LEA**ther · **PLAS**tic · **ME**tal · **SIL**ver · **WOO**den · **SQUARE** · **YEL**low. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has lost the thing on the card. B is the receptionist. Use the skeleton. Then swap.'));
out.push(dlg(null, [
  ['B', 'Good afternoon. Can I help you?'],
  ['A', 'I hope so! I think I left my __________ here.'],
  ['B', 'What does it look like?'],
  ['A', 'It\'s a __________ __________ __________.'],
  ['B', 'What\'s it made of?'],
  ['A', 'It\'s made of __________. And __________.'],
  ['B', 'Is this it?'],
  ['A', 'No, that one\'s __________. / Yes, that\'s it! Thank you!'],
]));
out.push(table(['Card A – umbrella', 'Card B – phone'], [['long · black · red handle · made of plastic and metal', 'small · old · grey · in a green leather case · a crack on the screen']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the three adjectives you hear in the right order.'));
out.push(stage('4', 'Your turn – guessing game', 9));
out.push(p('Think of an object in this room or in your bag – don\'t say it! Describe it: size, shape, colour, material, what you use it for. Your partner guesses. Then describe something **special** you own (a gift, a family object) – your partner asks three questions about it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s special object:  _Omar has got an old silver watch. It\'s round and it\'s made of silver. It was his grandfather\'s. He wears it on Fridays._'));
out.push(p('**Listener task:** ask one question: _What colour is…? Is it heavy?_   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice on the board at Al-Yasmin. Answer the questions.'));
out.push(model([
  '**LOST – PLEASE HELP!**',
  '**What:** a blue cotton pencil case',
  'It\'s long and thin, with a small yellow star on the front. Inside there are some pens, a USB stick (black, made of metal) and a small photo of my daughter. The photo is very important to me!',
  '**Where:** I think I left it in Room 12 or in the café on Tuesday evening.',
  'If you find it, please give it to Mr Bassam at reception or call me: **Rasha, 0991 445 360**. Thank you!',
]));
out.push(item('1', 'What is the pencil case made of?'));
out.push(item('2', 'Why is it important to Rasha?'));
out.push(item('3', 'What can you do if you find it?'));
out.push(writers([
  'A lost-item notice: **LOST** (headline) → **What** (2–3 adjectives in order) → **details** (what\'s inside, special marks) → **why it\'s important** → **Where / When** → **what to do + contact** → _Thank you!_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**LOST!**   **What:** a ______ ______ ______ ______.   It\'s ______________, with ______________. Inside there is / are ______________. It\'s important to me because ______________.   **Where:** I think I left it ______________ on ______.   If you find it, please ______________ or call me: ______________. Thank you!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Adjective order: size – shape – colour – material', 'made of used correctly', 'All parts: what, details, why important, where, contact']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your "What" line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a lost **or found** notice for a real or invented object (50 words or more). Describe it so well that the owner can recognise it!'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as **someone who found something**. ★ _Very clear!_  ✓ _Can you add the colour?_  ? _Is it big or small?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall. Your teacher describes an object – find the matching notice!'));
out.push(hw('Write a message to the person who wrote the notice (25+ words): _Hi Rasha, I think I found your pencil case! Is there a… on it? It was…_'));

// ======================= 3.6 =======================
out.push(pb());
out.push(h2('3.6  Shall I help you?'));
out.push(p('**Function:** making and accepting offers   ·   **Grammar:** _Shall I…? / I\'ll… / Can I help?_   ·   **Pronunciation:** weak _shall_ /ʃəl/; _I\'ll_ /aɪl/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  When do people offer help? (moving house, guests, a heavy bag…) What do they say? What do they write? Make two lists.'));
out.push(board('Shall I carry that?', 'Let me know if you need anything!'));
out.push(p('**b**  Match the offer to the situation.  1 Your friend has got three heavy bags.  2 Your guest looks cold.  3 Your colleague can\'t find a word.  →  A _I\'ll close the window._  B _Shall I check the dictionary?_  C _Shall I take one?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Lama is…   **A** moving into her flat   **B** cleaning her flat   **C** leaving her flat'));
out.push(p('**b**  Listen again. **1** What does Rami offer to do?   **2** Who is going to make the coffee?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  Moving day', [
  ['Maya', 'OK, everyone, this is the last box from the car!'],
  ['Rami', 'That box looks heavy, Maya. Shall I carry it?'],
  ['Maya', 'Yes, please! It\'s Lama\'s books. Can you take it to the small bedroom?'],
  ['Rami', 'Sure. I\'ll put it next to the desk.'],
  ['Lina', 'Lama, shall I put the cups in the kitchen?'],
  ['Lama', 'That\'s very kind of you, Lina, thank you. The cupboard next to the fridge is empty.'],
  ['Lina', 'No problem. And I\'ll wash them first – they\'re dusty.'],
  ['Lama', 'You\'re all wonderful. I\'ll make some coffee for everyone!'],
  ['Maya', 'No, no, you sit down. I\'ll make the coffee. Where\'s the coffee pot?'],
  ['Lama', 'Er… I think it\'s in one of the boxes!'],
  ['Rami', 'Don\'t worry. I\'ll go to the bakery and get some ka\'ak. Do you want anything else?'],
  ['Lama', 'No, thanks. Just some ka\'ak is perfect!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – offers**',
  table(['Offer as a question', 'Offer as a promise', 'Answers'], [['**Shall I** carry it? · **Can I** help? · Do you want me to…? (phrase)', '**I\'ll** (I will) put it next to the desk. · **I\'ll** make the coffee.', 'Yes, please! · That\'s very kind of you. · Thanks, that\'s great.  No, thanks. I\'m fine. · No, no – you sit down.']], [1.2, 1.2, 1.4]),
  '**Shall I** / **I\'ll** + base verb: _Shall I **carry**…? I\'ll **make**…_  ⚠ Not ~~Shall I to carry~~ or ~~I\'ll making~~.',
  '**I\'ll** = a decision **now**, at the moment of speaking: _(The box looks heavy.) I\'ll carry it._',
  '**Practise:** Make an offer with _Shall I…?_ or _I\'ll…_  1 It\'s hot in here. → ______  2 Your friend\'s phone battery is dead. → ______  3 The guests are hungry. → ______  4 Your mother is tired after work. → ______  5 Your colleague doesn\'t understand the email. → ______',
  '**Useful phrases:** That looks heavy. · That\'s very kind of you. · You sit down. · Don\'t worry. · Do you want anything else? · Just… is perfect.',
  '**Pronunciation.** 🔊 **Track 3.12** _Shall I…?_ is weak and fast: /ʃəl aɪ/ · _I\'ll_ /aɪl/ – one syllable: _I\'ll make the coffee. I\'ll go._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the host or the person who needs help. B makes offers. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['B', 'That looks __________. Shall I __________?'],
  ['A', 'Yes, please! Can you __________?'],
  ['B', 'Sure. I\'ll __________.'],
  ['A', 'That\'s very kind of you.'],
  ['B', 'And shall I __________?'],
  ['A', 'No, thanks. I\'m fine. / No, no – I\'ll __________.'],
]));
out.push(table(['Card A – guests are coming', 'Card B – at the office'], [['heavy shopping bags · put them in the kitchen · offer: make the salad – no (A will do it)', 'a big pile of papers · take them to Mr Khaled · offer: print the report – yes']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Shall I…?', 'I\'ll…', 'Yes, please!', 'That\'s very kind of you.', 'No, thanks.', 'You sit down.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('You are hosting guests at your **real** home. Your partner is a guest who wants to help. They offer **three** things (_Shall I…?_). You accept two and refuse one politely. Then swap. Then do it again with a new partner – but now **you** offer things to your guest (_I\'ll get you some juice. Shall I open the window?_).'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what your partner offered:  _Fadi offered to wash the dishes and to bring some chairs from his flat. I said yes. He offered to cook, but I said no – I love cooking!_ (Learn _offered to_ as a phrase.)'));
out.push(p('**Listener task:** who is the best guest in the class?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lama puts a note under the doors of her new neighbours. Read and answer.'));
out.push(model([
  'Dear neighbours,',
  'My name is Lama Nasser and I\'m your new neighbour in Flat 7. I\'m a student at Damascus University. I\'m sorry about the noise on Friday – we were moving my furniture! I\'d like to say hello properly, so I\'ll be at home on Saturday afternoon and I\'ll make some coffee and maamoul. Please come and visit! If you need any help with English or with your computer, just knock on my door – I\'ll be happy to help.',
  'Best wishes,',
  'Lama (Flat 7)',
]));
out.push(item('1', 'Why does Lama say sorry?'));
out.push(item('2', 'What will she do on Saturday afternoon?'));
out.push(item('3', 'What two things does she offer to help with?'));
out.push(writers([
  'A note to neighbours: _Dear neighbours,_ → **who you are** → **an apology or a reason** → **an invitation** → **an offer of help** (_I\'ll… / If you need…, just…_) → _Best wishes,_ → name + flat number.',
  'Use **I\'ll** for promises and offers in writing: _I\'ll be happy to help._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear neighbours,   My name is ______________ and I\'m your new neighbour in ______________. I\'m ______________. I\'m sorry about ______________. I\'d like to ______________, so I\'ll ______________ on ______________. Please ______________! If you need any help with ______________, just ______________ – I\'ll ______________.   Best wishes,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'I\'ll / Shall I + base verb', 'An invitation and an offer of help', 'All parts: who you are, apology / reason, invitation, offer, ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read your offer sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Choose one: **(a)** you are new in a building – write to your neighbours; **(b)** a new family moves into your building – write a welcome note to them and offer help (50 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as the **neighbour**. ★ _What a kind note!_  ✓ _Can you add your flat number?_  ? _What time on Saturday?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two notes are read aloud. The class answers the invitation: _Thank you! I\'ll come at…_'));
out.push(hw('Write a **reply** as the neighbour (25+ words). Accept the invitation or the offer, and offer something back: _Welcome! I\'ll bring some… / Shall I show you…?_'));

// ======================= 3.7 =======================
out.push(pb());
out.push(h2('3.7  Review & Mediate: I saw a great flat!'));
out.push(p('**Function:** telling a friend about a rental ad   ·   **Recycling:** Units 1–3   ·   **Exam practice:** A2 Key Reading Part 3, Writing Part 6, Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** There is two bedrooms.  **2** Are there some chairs?  **3** I can\'t find my keys somewhere.  **4** It\'s a bag leather brown.  **5** The park is near from here.  **6** Shall I to carry your bag?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the ad on Omar\'s phone.'));
out.push(box(null, [
  '**FLAT FOR RENT – MEZZEH 86**',
  'One-bedroom flat, 4th floor (there\'s a lift). Kitchen with fridge and cooker, new washing machine. Big balcony – great view of the city! Furnished: bed, sofa, table and 2 chairs.',
  '**Near:** bus stop (2 min), supermarket, bakery, pharmacy.  **Not near:** park.',
  '**Rent:** 750,000 SYP a month + electricity.  **Available:** from 1 November.',
  '**Contact:** Abu Rabih, WhatsApp only, 0944 870 155.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Omar tells his cousin Nabil about the ad. What is Nabil\'s question about the balcony?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  A flat for Nabil', [
  ['Omar', 'Nabil, I saw a great flat for you! It\'s in Mezzeh 86.'],
  ['Nabil', 'Really? How many bedrooms are there?'],
  ['Omar', 'Just one, but it\'s furnished – there\'s a bed, a sofa, a table and two chairs.'],
  ['Nabil', 'Is there a washing machine? I don\'t want to go to the laundry every week.'],
  ['Omar', 'Yes, there\'s a new one. And there\'s a big balcony with a great view.'],
  ['Nabil', 'Nice! Is the balcony sunny?'],
  ['Omar', 'The ad doesn\'t say. You need to ask. It\'s on the fourth floor, but there\'s a lift.'],
  ['Nabil', 'Good. And what\'s near it?'],
  ['Omar', 'A bus stop – just two minutes away – and a supermarket, a bakery and a pharmacy. But there isn\'t a park near it.'],
  ['Nabil', 'That\'s OK. How much is it?'],
  ['Omar', 'Seven hundred and fifty thousand a month, but you pay for electricity too. It\'s free from the first of November.'],
  ['Nabil', 'Perfect – I start my new job on the fifth! How can I call the owner?'],
  ['Omar', 'You can\'t call him – you need to send a WhatsApp message. I\'ll send you the number.'],
]));
out.push(sp());
out.push(box('Language box – telling someone about an ad', [
  'Turn the short ad into **full sentences**:',
  '_4th floor (there\'s a lift)_ → **It\'s on the fourth floor, but there\'s a lift.**   _Not near: park_ → **There isn\'t a park near it.**   _+ electricity_ → **You pay for electricity too.**',
  'If the ad doesn\'t answer a question, say so: **The ad doesn\'t say. You need to ask.**',
  '**Useful phrases:** I saw a great… for you! · It\'s furnished. · It\'s free / available from… · You pay for… too. · The ad doesn\'t say. · I\'ll send you the number.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads ad A, B reads ad B. **Don\'t show it!** Tell your partner about your ad. Your partner asks **four** questions. If the ad doesn\'t say, say so! Then decide together: which flat is better for a student?'));
out.push(table(['Ad A – Mezzeh', 'Ad B – Jaramana'], [[
  '2 bedrooms · 1st floor · no lift · garden 🌳 · not furnished · near: school, park · rent 1,000,000 SYP (water + electricity included) · free now',
  'studio (1 room + kitchen) · 6th floor · lift ✓ · furnished (bed, desk) · near: university bus, cafés · rent 600,000 SYP + water + electricity · free from 1 December']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the rent and one good thing about each flat. Which flat does the class prefer?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Look for a **real** ad on your phone (a flat, a car, a job, a course) – or remember one. Tell your partner about it in full sentences. Your partner asks questions and decides: _I\'m interested because… / It\'s not for me because…_'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about your **partner\'s** ad, in your own words:  _Hiba saw an ad for a used car. It\'s a small white Kia, and it\'s ten years old. It costs…, and the owner lives in Muhajireen. The ad doesn\'t say…_'));
out.push(p('**Listener task:** which ad is the best offer?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 3)', 7));
out.push(p('Read the text. For each question, choose the correct answer **A**, **B** or **C**.'));
out.push(model([
  '**My street in the Old City – by Nadia Haddad**',
  'I live in a small street in Bab Touma, in the Old City of Damascus. My house is two hundred years old. It hasn\'t got a garden, but there\'s a lovely courtyard in the middle with a fountain and a lemon tree. In summer we sit there every evening because it\'s cool.',
  'The street is too narrow for cars, so it\'s very quiet. There\'s a small grocery shop at the end of the street, and my neighbour, Abu Elias, has a workshop where he makes wooden boxes. Tourists often stop to watch him work.',
  'The only problem is that the houses are old and they need a lot of work. Last winter water came through our kitchen ceiling! But I never want to leave. My grandmother says the street is like one big family – and she\'s right.',
]));
['1  Nadia\'s family sits in the courtyard in summer because   A it\'s near the kitchen.   B it isn\'t hot there.   C the garden is small.',
 '2  The street is quiet because   A cars can\'t go there.   B there aren\'t any shops.   C tourists never come.',
 '3  Abu Elias   A sells food.   B is a tourist guide.   C makes things from wood.',
 '4  What happened last winter?   A The family moved.   B There was a problem with the kitchen.   C They built a new ceiling.',
 '5  What does Nadia think about her street?   A She wants to live somewhere new.   B It\'s friendly.   C It\'s too old.'].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Sami needs a flat. Write him a message about the Mezzeh 86 flat. Use the ad.'));
out.push(p('Hi Sami,   I saw a great flat for you in ______! There\'s one ______ and it\'s ______ (bed, sofa…). It\'s on the ______ floor, but ______. There\'s ______ and a big ______. Near the flat there\'s ______, but there isn\'t ______. The rent is ______ a month and you pay for ______ too. It\'s free from ______. You need to send a WhatsApp message to ______.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Size, floor and furniture', 'What\'s near / not near', 'Rent + extra costs + date', 'Full sentences – not a copy of the ad']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You want to rent **Ad B (the studio in Jaramana)**. Write an email to the owner, Mr Fares.',
  'In your email:  •  say **who you are**  •  ask **one question** about the flat  •  say **when you can visit**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ two bathrooms in the house.   a) There is   b) There are   c) It is',
  '2  Are there ___ shops near your flat?   a) some   b) any   c) a',
  '3  I can\'t find my phone ___.   a) somewhere   b) anywhere   c) nowhere',
  '4  The bank is ___ the post office.   a) opposite   b) next   c) between',
  '5  It\'s a ___ bag.   a) leather small black   b) black small leather   c) small black leather',
  '6  The bags look heavy. ___ I carry one?   a) Will   b) Shall   c) Do',
  '7  Go ___ the café and turn left.   a) past   b) on   c) at',
  '8  We wash clothes in a ___.   a) fridge   b) cooker   c) washing machine',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 3 style).** 🔊 **Track 3.14** Listen to Lama and Maya talking about Lama\'s new flat. Choose **A**, **B** or **C**.'));
['1  Lama\'s favourite room is the   A kitchen.   B balcony.   C bedroom.',
 '2  What does Lama need to buy?   A a desk   B chairs   C a washing machine',
 '3  Where is the nearest supermarket?   A on the corner   B next to the bakery   C on the main street',
 '4  What is wrong with the flat?   A It\'s noisy.   B The lift is broken.   C It\'s dark.',
 '5  What will Maya do on Saturday?   A bring a plant   B clean the flat   C cook dinner'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 3.14  Audio script (read after the check)', [
  ['Maya', 'So, Lama, how\'s the new flat?'],
  ['Lama', 'I love it! The bedroom is nice and the kitchen is OK, but the balcony is my favourite room. I study there every morning.'],
  ['Maya', 'Do you need anything?'],
  ['Lama', 'Yes – there\'s a sofa in the living room, but there aren\'t any chairs. I need two chairs for the table. The desk is fine.'],
  ['Maya', 'And the shops? Is the supermarket far?'],
  ['Lama', 'The small one next to the bakery is closed now, so I go to the big one on the main street.'],
  ['Maya', 'Is everything OK with the building?'],
  ['Lama', 'It\'s quiet and bright, but the lift doesn\'t work! I walk up to the third floor every day.'],
  ['Maya', 'Good exercise! I\'ll come on Saturday and I\'ll bring you a plant for the balcony.'],
  ['Lama', 'Thank you! And I\'ll cook dinner for us.'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words) describing your favourite room at home. Say what there is in it, where things are, and why you like it.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe a home with _there is / there are_',
  '☐ say where things are',
  '☐ talk about my neighbourhood',
  '☐ ask for and give directions',
  '☐ describe things: size, shape, colour, material',
  '☐ make and accept offers',
  '☐ tell a friend about an ad in my own words',
  '☐ write an ad, a note to a housemate, a description of my area, directions, a lost notice and a note to neighbours',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
