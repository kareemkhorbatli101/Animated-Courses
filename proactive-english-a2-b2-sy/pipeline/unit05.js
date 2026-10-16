// Proactive English A2 · Syria Edition · Book 1 · Unit 5 — Student's Book
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

out.push(h1('Unit 5  Shopping & Money'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  ask for things in a shop',
  '**5.2**  compare two products',
  '**5.3**  say which is the best',
  '**5.4**  pay and use services (bank, post office, pharmacy)',
  '**5.5**  return something that doesn\'t work',
  '**5.6**  say what people are wearing',
  '**5.7**  Review & Mediate: explain an online order page',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**Al-Hamra Centre** – a shopping centre in Damascus with clothes shops, a phone shop and a post office.',
  '**Samira** – a shop assistant at Moda Clothes.   ·   **Ziad Haddad** – Lina\'s brother (32, dentist). His daughter **Jana** is three.',
], C.lyellow, C.orange));

// ======================= 5.1 =======================
out.push(pb());
out.push(h2('5.1  Have you got this in a larger size?'));
out.push(p('**Function:** asking for things in a shop   ·   **Grammar:** _this / that / these / those_; possessive pronouns (_mine, yours…_)   ·   **Pronunciation:** /ɜː/ _shirt, skirt, first_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What clothes do you wear to work, to a wedding, at home? What do you say in a clothes shop? Your teacher writes your ideas on the board.'));
out.push(board('Have you got this in blue?', 'Size: medium · Colour: black'));
out.push(p('**b**  Clothes or not? _shirt · shoes · trousers · scarf · jacket · dress · gloves · towel · socks_   Which are **always plural** in English?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rami want to buy?   **A** trousers   **B** a jacket   **C** a shirt'));
out.push(p('**b**  Listen again. **1** What size does he take?   **2** What colour does he choose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  At Moda Clothes, Al-Hamra Centre', [
  ['Samira', 'Good afternoon. Can I help you?'],
  ['Rami', 'Yes, please. I\'m looking for a shirt for a wedding.'],
  ['Samira', 'Of course. We\'ve got these white ones here, and those blue shirts are new.'],
  ['Rami', 'I like this one. Have you got it in a larger size? I take a large.'],
  ['Samira', 'Let me check… Yes, here you are. Would you like to try it on?'],
  ['Rami', 'Yes, please. Where\'s the changing room?'],
  ['Samira', 'It\'s over there, next to those jackets.'],
  ['Rami', '(later) It fits well, but I\'m not sure about the colour. Have you got it in light blue?'],
  ['Samira', 'Yes, we have. Here.'],
  ['Rami', 'That\'s better. I\'ll take this one. Oh – is this scarf yours? It was in the changing room.'],
  ['Samira', 'No, it isn\'t mine. Maybe it\'s the customer\'s before you. Thank you!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – this / that / these / those**',
  table(['', 'near me', 'not near me'], [['singular', '**this** shirt (this one)', '**that** shirt (that one)'], ['plural', '**these** shirts (these ones)', '**those** shirts (those ones)']], [0.6, 1, 1]),
  '**Possessive pronouns:** my → **mine** · your → **yours** · his → **his** · her → **hers** · our → **ours** · their → **theirs**',
  '_Is this scarf **yours**? – No, it isn\'t **mine**._   ⚠ No noun after a possessive pronoun: _It\'s **mine**_, not ~~It\'s mine scarf~~. And no apostrophe: _**yours**_, not ~~your\'s~~.',
  '**Always plural:** trousers, jeans, shoes, socks, gloves, glasses → _**They\'re** nice. · a **pair of** trousers_',
  '**Practise:** Complete.  1 I like ______ shoes here on my feet. (this / these)  2 How much are ______ jackets over there? (that / those)  3 Is this bag ______? – No, it isn\'t ______. (you / your / yours · my / mine)  4 Those trousers ______ very nice. (is / are)',
  '**Useful phrases:** I\'m looking for… · Have you got it in…? · I take a large / medium / small. · Would you like to try it on? · It fits well. · I\'m not sure about… · I\'ll take this one.',
  '**Pronunciation.** 🔊 **Track 5.2** /ɜː/ – a long sound, mouth relaxed: _shirt · skirt · first · third · work · Thursday · her_. Listen and repeat. Don\'t say /ʃiːrt/ for _shirt_!',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the shop assistant, B is the customer. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good afternoon. Can I help you?'],
  ['B', 'Yes, please. I\'m looking for __________ for __________.'],
  ['A', 'Of course. We\'ve got these __________ here, and those __________ are new.'],
  ['B', 'I like this one. Have you got it in __________?'],
  ['A', 'Let me check… Yes, here you are. Would you like to try it on?'],
  ['B', 'Yes, please. (later) It __________, but I\'m not sure about __________.'],
  ['A', 'We\'ve got it in __________ too.'],
  ['B', 'That\'s better. I\'ll take __________.'],
]));
out.push(table(['Card A – customer', 'Card B – customer'], [['a jacket for work · size medium · doesn\'t like the grey one · wants dark blue', 'shoes for a wedding · size 42 · too small · wants black, not brown']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write the item, the size and the colour the customer buys.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Put three or four things on your desk (a pen, a phone, a book, a bag, a scarf…). Mix them with your partner\'s things. Now ask: _Is this pen yours? Are these keys yours?_ Answer: _Yes, it\'s mine. / No, it isn\'t mine – I think it\'s Hiba\'s._ Then: tell your partner about the last clothes you bought. Where? What size? How much? Change partners and tell the story again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s shopping:  _Hiba bought a long grey coat at Al-Hamra Centre. She takes a medium. It was 400,000 pounds – she says it was expensive, but it\'s very warm._ (Learn _bought / was_ as phrases here.)'));
out.push(p('**Listener task:** who found the best thing? Who paid the most?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the online ad for a jacket. Answer the questions.'));
out.push(model([
  '**MEN\'S WINTER JACKET – MODA CLOTHES**',
  'A warm jacket for cold days. It\'s made of thick cotton, with a soft wool collar. There are four pockets – two inside and two outside. It\'s perfect for work or for the weekend.',
  '**Colours:** dark blue, black, dark green   **Sizes:** S, M, L, XL (the sizes are small – please order one size larger)',
  '**Price:** 480,000 SYP.  **Free delivery** in Damascus for orders over 300,000 SYP.',
  'Message us on WhatsApp with your size and colour: 0955 112 340.',
]));
out.push(item('1', 'What is the collar made of?'));
out.push(item('2', 'What is the problem with the sizes?'));
out.push(item('3', 'When is delivery free?'));
out.push(writers([
  'A product ad: **title** (what + where) → **description** (what it\'s made of, details) → **who it\'s for** → **colours and sizes** → **price and delivery** → **how to order**.',
  'Use adjectives in the right order: _a **warm winter** jacket · a **soft wool** collar_ (Unit 3).',
  'Give the customer a **warning or tip**: _the sizes are small…_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – ______________**   A ______________ for ______________. It\'s made of ______________, with ______________. There ______________. It\'s perfect for ______________.   **Colours:** ______________   **Sizes:** ______________ (______________)   **Price:** ______________.  **Delivery:** ______________.   Message us on ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Adjective order; made of', 'this / these used correctly if you use them', 'All parts: description, colours, sizes, price, how to order']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an ad for something you want to sell (clothes, a phone, a bike, furniture) – real or invented (50 words or more). Be honest about one problem!'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s ad as a **customer**. ★ _I like…_  ✓ _Can you add the size?_  ? _Is it new or used?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the ads on the wall: this is our class shop! Walk around and write your name on the thing you want to buy.'));
out.push(hw('Write a WhatsApp message to the seller of the thing you chose (25+ words): ask **two** questions and say when you can collect it.'));

// ======================= 5.2 =======================
out.push(pb());
out.push(h2('5.2  This one\'s cheaper'));
out.push(p('**Function:** comparing two products   ·   **Grammar:** comparative adjectives   ·   **Pronunciation:** weak _than_ /ðən/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You want to buy a phone. What is important for you? Make a class list: price, battery, camera…'));
out.push(board('This one\'s cheaper than that one.', 'Phone A: 2,500,000 · Phone B: 3,900,000'));
out.push(p('**b**  Opposites: cheap – ______ · big – ______ · old – ______ · fast – ______ · heavy – ______ · good – ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is buying a phone?   **A** Omar   **B** Omar\'s cousin   **C** Lina'));
out.push(p('**b**  Listen again. **1** Which phone has a better camera?   **2** Which phone does Nabil choose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  In the phone shop', [
  ['Nabil', 'Omar, you know about technology. Which phone is better?'],
  ['Omar', 'Let me see. This one is newer and the camera is better, but it\'s more expensive.'],
  ['Nabil', 'How much more?'],
  ['Omar', 'It\'s one million more than that one.'],
  ['Nabil', 'That\'s a lot! Is the battery better too?'],
  ['Omar', 'Actually, no. The battery in the cheaper one is bigger. And it\'s lighter.'],
  ['Nabil', 'Hmm. I use my phone for work all day, so the battery is more important for me than the camera.'],
  ['Omar', 'Then the cheaper one is better for you. It\'s also easier to repair – I can fix it myself!'],
  ['Nabil', 'And the screen?'],
  ['Omar', 'The screen is a little smaller, but it\'s not bad.'],
  ['Nabil', 'OK, I\'ll take the cheaper one. Thanks, Omar – you saved me a million pounds!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparative adjectives (+ than)**',
  table(['Adjective type', 'Rule', 'Examples'], [
    ['short (1 syllable)', '+ **-er**', 'cheap → cheap**er** · small → small**er** · light → light**er**'],
    ['ending in -e', '+ **-r**', 'nice → nice**r** · large → large**r**'],
    ['short vowel + consonant', 'double + **-er**', 'bi**g** → big**ger** · ho**t** → hot**ter** · thi**n** → thin**ner**'],
    ['ending in -y', '-y → **-ier**', 'easy → eas**ier** · heavy → heav**ier** · happy → happ**ier**'],
    ['long (2+ syllables)', '**more** + adjective', '**more** expensive · **more** comfortable · **more** important'],
    ['irregular', '—', 'good → **better** · bad → **worse** · far → **further**'],
  ], [1, 1, 2]),
  'Use **than** to compare two things: _This one is cheaper **than** that one._  ⚠ Not ~~more cheaper~~, not ~~cheaper that~~.',
  '**A little / much** + comparative: _a little smaller · much more expensive_',
  '**Practise:** Write the comparative.  1 big ______  2 expensive ______  3 easy ______  4 good ______  5 light ______  6 comfortable ______   Then: 7 This bag is ______ (cheap) than that one.  8 My new phone is ______ (good) than my old one.',
  '**Useful phrases:** Which one is better? · Let me see. · How much more? · That\'s a lot! · Actually,… · It\'s not bad. · You saved me…!',
  '**Pronunciation.** 🔊 **Track 5.4** _than_ is weak /ðən/ and links to the next word: _cheaper‿than‿that one_ · _bigger‿than mine_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A wants to buy; B is the friend who knows. Compare the two products on the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Which __________ is better?'],
  ['B', 'Let me see. This one is __________ and __________, but it\'s __________.'],
  ['A', 'How much more?'],
  ['B', 'It\'s __________ more than that one.'],
  ['A', 'Is the __________ better too?'],
  ['B', 'Actually, no. The __________ in the cheaper one is __________.'],
  ['A', 'OK, I\'ll take __________.'],
]));
out.push(table(['Card A – two fridges', 'Card B – two cars'], [[
  'Fridge 1: 4,500,000 · big · new model · noisy   Fridge 2: 3,200,000 · smaller · old model · quiet, uses less electricity',
  'Car 1: 10 years old · cheap · comfortable · uses a lot of petrol   Car 2: 4 years old · expensive · small · cheap to run']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write two comparative sentences you hear. Which product would **you** buy?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Compare **two real things** with your partner: your city and another city, two shops you know, your phone and your partner\'s phone, winter and summer, two cafés. Use at least **five** comparatives. Then change partners and compare two different things.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class what your partner thinks:  _Tareq says Suwayda is quieter and cleaner than Damascus, but Damascus is more interesting and the shops are better. He says the air is colder in Suwayda in winter._'));
out.push(p('**Listener task:** do you agree with your classmate? Put up your hand!   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar writes a comparison post for a technology page. Read and answer.'));
out.push(model([
  '**Which phone for a student? Two good options**',
  'Last week my cousin asked me to help him choose a phone, so I compared two popular models.',
  'The **Nova 7** is newer and it looks nicer. The camera is much better – the photos are clearer, especially at night. But it\'s more expensive: it costs one million pounds more than the other phone.',
  'The **Star X** is cheaper and lighter. The battery is bigger, so it works all day. It\'s also easier to repair, and the parts are cheaper in Syria. The screen is a little smaller, but it isn\'t bad.',
  'For a student, I think the Star X is the better choice. The camera is less important than the battery and the price. But if you love photography, buy the Nova 7!',
]));
out.push(item('1', 'Which phone has a better camera?'));
out.push(item('2', 'Why is the Star X easier to repair?'));
out.push(item('3', 'Who should buy the Nova 7?'));
out.push(writers([
  'A comparison text: **introduction** (why you compared them) → **product 1** (good points + one bad point) → **product 2** → **your opinion** (_I think… is better for…_) → **one exception** (_But if you…_).',
  'Use **but** for a contrast and **so** for a result: _The battery is bigger, **so** it works all day._',
  'Write a new **paragraph** for each product.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Which ______________?**   Last week I compared two ______________.   The ______________ is ______________ and ______________. But it\'s ______________.   The ______________ is ______________ and ______________, so ______________. It\'s a little ______________, but ______________.   I think the ______________ is better for ______________. But if you ______________, buy the ______________!'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Comparatives: -er / more + adjective (not both!)', '_than_ after the comparative', 'All parts: introduction, two products, opinion, exception']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one comparison sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Compare **two real things** for someone who has to choose: two phones, two shops, two neighbourhoods, two schools, two cars (60 words or more). End with your advice.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Good advice!_   ✓ _Can you add the price?_   ? _Which one have you got?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their comparisons. The class says: do you agree with the advice?'));
out.push(hw('Write a reply to your partner\'s comparison (25+ words): agree or disagree and give **one** reason: _I agree with you, but for me…_'));

// ======================= 5.3 =======================
out.push(pb());
out.push(h2('5.3  It\'s the cheapest shop in town'));
out.push(p('**Function:** saying which is the best   ·   **Grammar:** superlative adjectives   ·   **Pronunciation:** _the_ before a vowel /ðiː/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Where do you buy clothes, food, phones, presents? Which shops are good? Which are expensive? Make a class list.'));
out.push(board('It\'s the cheapest shop in town.', 'The best shop for shoes is…'));
out.push(p('**b**  Make the superlative: cheap → the ______ · big → the ______ · easy → the ______ · expensive → the ______ · good → the ______ · bad → the ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina need to buy?   **A** a present for a child   **B** clothes for work   **C** a phone'));
out.push(p('**b**  Listen again. **1** Which shop is the most expensive?   **2** Where does Lina decide to go?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  Where to buy a present', [
  ['Lina', 'Maya, it\'s Jana\'s birthday on Saturday. She\'s three. Where\'s the best place to buy a toy?'],
  ['Maya', 'Hmm. Al-Hamra Centre has the biggest choice, but it\'s also the most expensive.'],
  ['Lina', 'What about the shops in Souq Al-Hamidiyah?'],
  ['Maya', 'They\'re the cheapest, but the quality isn\'t always the best. For a small child, I\'d buy something safe.'],
  ['Lina', 'True. What\'s the most popular present for a three-year-old?'],
  ['Maya', 'Books and wooden toys. There\'s a lovely little shop near the university – it\'s not the cheapest, but it has the nicest wooden toys in Damascus.'],
  ['Lina', 'That sounds perfect. Is it far?'],
  ['Maya', 'No, it\'s the easiest shop to find – it\'s opposite the main gate. Ask for Abu Yarub.'],
  ['Lina', 'Thanks, Maya! You always know the best places.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – superlative adjectives (the …est / the most …)**',
  table(['Adjective type', 'Rule', 'Examples'], [
    ['short', '**the** + -**est**', 'cheap → **the cheapest** · small → the small**est**'],
    ['ending in -e', '**the** + -**st**', 'nice → **the nicest** · large → the large**st**'],
    ['short vowel + consonant', 'double + -**est**', 'big → **the biggest** · hot → the hot**test**'],
    ['ending in -y', '-y → -**iest**', 'easy → **the easiest** · happy → the happ**iest**'],
    ['long', '**the most** + adjective', '**the most expensive** · the most popular'],
    ['irregular', '—', 'good → **the best** · bad → **the worst**'],
  ], [1, 1, 2]),
  'Always with **the**: _It\'s **the** cheapest shop._   After a superlative use **in** (a place) or **of** (a group): _the best shop **in** town · the youngest **of** my brothers_.',
  '**Practise:** Complete with the superlative.  1 Souq Al-Hamidiyah is ______ (cheap) place in Damascus.  2 This is ______ (good) café in my area.  3 It\'s ______ (expensive) phone in the shop.  4 February is ______ (short) month.  5 That was ______ (bad) film of the year!',
  '**Useful phrases:** Where\'s the best place to…? · It has the biggest choice. · The quality isn\'t always the best. · True. · That sounds perfect. · You always know the best places!',
  '**Pronunciation.** 🔊 **Track 5.6** _the_ before a consonant = /ðə/: _the cheapest_. Before a vowel sound = /ðiː/: _the easiest · the oldest · the most expensive_. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for advice; B answers with superlatives from the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Where\'s the best place to buy __________?'],
  ['B', '__________ has the biggest choice, but it\'s the most expensive.'],
  ['A', 'What about __________?'],
  ['B', 'It\'s the cheapest, but __________.'],
  ['A', 'What\'s the most popular __________?'],
  ['B', '__________. There\'s a __________ shop in __________ – it\'s got the best __________ in the city.'],
  ['A', 'Thanks! That sounds perfect.'],
]));
out.push(table(['Card A – buying a bicycle', 'Card B – buying sweets for a wedding'], [[
  'Big shop in Mezzeh: biggest choice, most expensive · street market: cheapest, bad quality · small shop in Qassaa: best repairs, good prices',
  'Famous shop in the centre: the most famous, most expensive · supermarket: cheapest, not fresh · family shop near the mosque: freshest, best baklava']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write three superlatives you hear.'));
out.push(stage('4', 'Your turn – class guide', 9));
out.push(p('In groups of four, make a "Best of our city" list. Agree on: the best place for cheap clothes · the best café · the best place for a family day out · the most beautiful street · the worst traffic. You must **all** agree – explain why!'));
out.push(table(['Category', 'Our choice', 'Why'], [['best cheap clothes', '', ''], ['best café', '', ''], ['best family day out', '', ''], ['most beautiful street', '', ''], ['worst traffic', '', '']], [1.2, 1, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('One person from each group reports:  _For cheap clothes, the best place is Souq Al-Hamidiyah. The best café is Al-Nawfara because it\'s the oldest in Damascus. The worst traffic is on the Mezzeh highway at five o\'clock!_'));
out.push(p('**Listener task:** does another group have a different answer? Say why you think yours is better.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Maya\'s recommendation on a city page. Answer the questions.'));
out.push(model([
  '**The best shop for presents in Damascus**',
  'If you need a present for a child, go to Abu Yarub\'s little shop opposite the main gate of Damascus University.',
  'It isn\'t the cheapest shop in the city, and it isn\'t the biggest. But it has the nicest wooden toys in Damascus, and everything is safe for small children. Abu Yarub makes many of the toys himself, so they are stronger than the plastic toys in the big centres.',
  'The best thing about the shop is Abu Yarub: he asks about the child, then he chooses the perfect present for you. He also wraps it beautifully – for free!',
  '**My tip:** go in the morning. It\'s the quietest time, and he has more time to help you.',
]));
out.push(item('1', 'Where is the shop?'));
out.push(item('2', 'Why are the toys stronger than other toys?'));
out.push(item('3', 'Why is the morning the best time to go?'));
out.push(writers([
  'A recommendation: **title** → **who it\'s for** (_If you need…_) → **what it isn\'t** (be honest!) → **what\'s special** (superlatives) → **the best thing about it** → **a tip**.',
  'Use **the best thing about… is…** and **My tip:…**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**The best ______________ in ______________**   If you need ______________, go to ______________.   It isn\'t the ______________, and it isn\'t the ______________. But it has the ______________, and ______________.   The best thing about ______________ is ______________.   **My tip:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Superlatives: the + -est / the most (+ in / of)', 'Honest: one thing it isn\'t', 'All parts: who it\'s for, what\'s special, best thing, tip']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one superlative sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a recommendation for a **real** shop, café, market or place in your city (60 words or more). Use at least **three** superlatives and end with a tip.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I want to go!_   ✓ _Can you add the address?_   ? _Is it open on Fridays?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the recommendations together: this is our **Class 4B City Guide**. Which place does the class want to visit first?'));
out.push(hw('Write a short reply to your partner\'s recommendation (25+ words): say if you know the place and add **one** of your own: _I know this shop! For books, the best place is…_'));

// ======================= 5.4 =======================
out.push(pb());
out.push(h2('5.4  Can I pay by card?'));
out.push(p('**Function:** paying and using services   ·   **Grammar:** _can / could_ for requests and possibility; _by card / in cash_   ·   **Pronunciation:** numbers and prices'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which services do you use? (bank, post office, pharmacy, phone shop, electricity office…) What do you ask there?'));
out.push(board('Can I pay by card?', 'Please keep your receipt.'));
out.push(p('**b**  Where do you go to…? send a parcel → ______  change money → ______  buy medicine → ______  pay your internet bill → ______'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina want to do at the post office?   **A** collect a parcel   **B** send a parcel   **C** buy stamps'));
out.push(p('**b**  Listen again. **1** How long does the parcel take?   **2** How does Lina pay?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  At the post office, Al-Hamra Centre', [
  ['Clerk', 'Next, please. How can I help you?'],
  ['Lina', 'Hello. I\'d like to send this parcel to Dubai, please.'],
  ['Clerk', 'OK. Can you put it on the scale? … It\'s two kilos. What\'s in it?'],
  ['Lina', 'Clothes and some sweets – a present for my friend.'],
  ['Clerk', 'Fine. Could you fill in this form, please? Your name and address here, and your friend\'s address here.'],
  ['Lina', 'Of course. How long does it take?'],
  ['Clerk', 'Normal post takes about two weeks. Express takes four or five days, but it\'s more expensive.'],
  ['Lina', 'How much is express?'],
  ['Clerk', 'One hundred and eighty thousand.'],
  ['Lina', 'That\'s fine. It\'s her birthday soon. Can I pay by card?'],
  ['Clerk', 'I\'m sorry, our machine isn\'t working today. Can you pay in cash?'],
  ['Lina', 'Yes, no problem. Here you are.'],
  ['Clerk', 'Thank you. Here\'s your receipt – please keep it. You can follow your parcel online with this number.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – can / could for services**',
  table(['Asking (customer)', 'Asking politely (staff)', 'Answering'], [['**Can I** pay by card? · **Could I** have a receipt? · **Can you** send it today?', '**Can you** put it on the scale? · **Could you** fill in this form, please?', 'Yes, of course. · I\'m sorry, you can\'t… · Our machine isn\'t working.']], [1.2, 1.2, 1]),
  '**Paying:** pay **by** card · pay **in** cash · pay **online** · in instalments · Here you are. · Keep the change. · Here\'s your receipt.',
  '**Services:** send a parcel · fill in a form · change money · pay a bill · open an account · collect something · follow / track it online',
  '**Practise:** Complete with _Can I_ or _Can you_.  1 ______ pay by card? (customer)  2 ______ sign here, please? (staff)  3 ______ have a bag, please? (customer)  4 ______ wait two minutes, please? (staff)  5 ______ change this money? (customer)',
  '**Useful phrases:** Next, please. · How can I help you? · What\'s in it? · How long does it take? · That\'s fine. · No problem. · Please keep it.',
  '**Pronunciation.** 🔊 **Track 5.8** Big numbers: _one hundred and eighty thousand_ · _two hundred and fifty_ · _a million_. Stress: **EIGH**teen (18) / **EIGH**ty (80), **THIR**teen (13) / **THIR**ty (30). Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the customer with the card, B is the clerk. Then swap.'));
out.push(dlg(null, [
  ['B', 'Next, please. How can I help you?'],
  ['A', 'Hello. I\'d like to __________, please.'],
  ['B', 'OK. Could you __________, please?'],
  ['A', 'Of course. How long does it take? / How much is it?'],
  ['B', '__________.'],
  ['A', 'Can I pay __________?'],
  ['B', 'Yes, of course. / I\'m sorry, you can\'t. Can you __________?'],
  ['A', 'No problem. Here you are.'],
  ['B', 'Here\'s your receipt. Please keep it.'],
]));
out.push(table(['Card A – at the bank', 'Card B – at the pharmacy'], [['change 200 dollars · fill in a form · takes 10 minutes · card not accepted', 'buy medicine for a cough · show the prescription · 45,000 SYP · card accepted']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['How can I help you?', 'I\'d like to…', 'Could you…, please?', 'How long does it take?', 'Can I pay by card?', 'Here\'s your receipt.']));
out.push(stage('4', 'Your turn – the service circuit', 9));
out.push(p('Make four "desks" in the classroom: **bank · post office · pharmacy · phone shop**. Half the class are staff, half are customers. Customers: visit **three** desks and do a real task (change money, send a parcel, buy medicine, pay your phone bill). Then swap roles. At each desk, ask about the price and how to pay!'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your visits:  _At the bank I changed a hundred dollars. It took ten minutes and I had to fill in a form. At the post office the machine wasn\'t working, so I paid in cash. The pharmacy was the fastest!_ (Learn _changed / took / had to / wasn\'t_ as phrases.)'));
out.push(p('**Listener task:** which service was the slowest? Where was there a problem?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice in the post office. Answer the questions.'));
out.push(model([
  '**AL-HAMRA POST OFFICE – INFORMATION FOR CUSTOMERS**',
  '**Opening hours:** Sunday – Thursday 8 am – 3 pm · Saturday 9 am – 1 pm · Friday closed',
  '**Sending a parcel:** Please do not close your parcel before you come. Staff must see what is inside. Fill in the green form with your address and the address of the person who receives the parcel.',
  '**Prices:** Normal post (2 weeks): from 90,000 SYP · Express (4–5 days): from 180,000 SYP',
  '**Payment:** cash or card. **Important:** keep your receipt – you need the number on it to follow your parcel online.',
  'Questions? Ask at Window 3 or call 011 223 4455.',
]));
out.push(item('1', 'When is the post office closed?'));
out.push(item('2', 'Why must you not close your parcel at home?'));
out.push(item('3', 'Why do you need your receipt?'));
out.push(writers([
  'An information notice: **title** → **short sections with headings** (Opening hours, Prices, Payment) → **an important warning** → **where to ask questions**.',
  'Use **Please do not…** and **Important:…** for rules and warnings.',
  'Keep sentences **short**: one piece of information in each.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**______________ – INFORMATION FOR CUSTOMERS**   **Opening hours:** ______________   **______________:** ______________   **Prices:** ______________   **Payment:** ______________. **Important:** ______________.   Questions? ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Short sections with headings', 'A clear warning (Please do not… / Important:…)', 'All parts: hours, service, prices, payment, contact']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an information notice for a **real** service you know: your workplace, a clinic, a mobile phone office, a laundry, a school office (60 words or more).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as a **customer**. ★ _Very clear!_  ✓ _Can you add the price for…?_  ? _Can I pay by card?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two notices are read aloud. The class asks one question that the notice **doesn\'t** answer.'));
out.push(hw('Write an email to the service in your partner\'s notice (25+ words): ask the question the notice doesn\'t answer, and ask one more.'));

// ======================= 5.5 =======================
out.push(pb());
out.push(h2('5.5  It doesn\'t work'));
out.push(p('**Function:** returning something   ·   **Grammar:** negatives; _too_ + adjective / not + adjective + _enough_   ·   **Pronunciation:** _doesn\'t_ /ˈdʌznt/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What problems do people have with things they buy? What do you say in the shop? What do you write in a complaint?'));
out.push(board('It doesn\'t work.', 'I would like a refund, please.'));
out.push(p('**b**  Match the problem: _It\'s broken. · It doesn\'t work. · It\'s too small. · There\'s a hole in it. · It\'s the wrong colour._  →  a kettle · a shirt · shoes · a screen · an online order'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem with the kettle?   **A** It\'s broken.   **B** It\'s too small.   **C** It\'s the wrong colour.'));
out.push(p('**b**  Listen again. **1** When did Maya buy it?   **2** What does she get in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  At the customer service desk', [
  ['Maya', 'Excuse me, I bought this kettle here last week, but it doesn\'t work.'],
  ['Assistant', 'I\'m sorry to hear that. What exactly is the problem?'],
  ['Maya', 'The water doesn\'t get hot enough. It\'s warm, but it never boils.'],
  ['Assistant', 'I see. Have you got the receipt?'],
  ['Maya', 'Yes, here it is.'],
  ['Assistant', 'Thank you. Did you use it with a stabiliser?'],
  ['Maya', 'Yes, I did. The problem isn\'t the electricity – my other things are fine.'],
  ['Assistant', 'OK. I can change it for a new one, or you can have your money back.'],
  ['Maya', 'I\'d prefer a new one, please – but a different model. This one is too small for my family anyway.'],
  ['Assistant', 'Of course. This one is bigger and it\'s only twenty thousand more.'],
  ['Maya', 'That\'s fine. Thank you for your help.'],
  ['Assistant', 'You\'re welcome. I\'m very sorry about the problem.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing problems**',
  'Negatives: _It **doesn\'t** work. · It **isn\'t** the right size. · The light **doesn\'t** come on. · They **don\'t** fit._',
  table(['too + adjective (= a problem: more than good)', 'not + adjective + enough (= a problem: less than good)'], [['It\'s **too** small for my family. · These shoes are **too** tight. · It\'s **too** expensive.', 'The water isn\'t hot **enough**. · The bag isn\'t big **enough**. · It isn\'t strong **enough**.']], [1, 1]),
  '⚠ **enough** comes **after** the adjective: _hot **enough**_, not ~~enough hot~~. **too** comes **before**: _**too** hot_.',
  '**Problems:** It\'s broken. · There\'s a hole / a mark / a crack in it. · It\'s the wrong size / colour. · A piece is missing. · It doesn\'t fit.',
  '**Solutions:** change it for a new one · have your money back (a refund) · repair it · give you a discount',
  '**Practise:** Complete with _too_ or _enough_.  1 I can\'t wear these shoes – they\'re ______ small.  2 The soup isn\'t hot ______.  3 This bag isn\'t big ______ for my laptop.  4 The music is ______ loud!  5 He isn\'t old ______ to drive.',
  '**Useful phrases:** I bought this here last week. · I\'m sorry to hear that. · What exactly is the problem? · Have you got the receipt? · I\'d prefer… · I\'m very sorry about the problem.',
  '**Pronunciation.** 🔊 **Track 5.10** _doesn\'t_ /ˈdʌznt/ – two syllables, clear /z/: _It doesn\'t work._ · _It doesn\'t fit._ · _She doesn\'t like it._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the customer with the problem card, B is the assistant. B offers a solution. Then swap.'));
out.push(dlg(null, [
  ['A', 'Excuse me, I bought this __________ here __________, but __________.'],
  ['B', 'I\'m sorry to hear that. What exactly is the problem?'],
  ['A', 'It\'s too __________. / It isn\'t __________ enough.'],
  ['B', 'I see. Have you got the receipt?'],
  ['A', 'Yes, here it is.'],
  ['B', 'I can __________, or you can __________.'],
  ['A', 'I\'d prefer __________, please.'],
]));
out.push(table(['Problem card A', 'Problem card B'], [['a jacket · bought 3 days ago · there\'s a hole in the pocket · wants a refund', 'headphones · bought yesterday · one side doesn\'t work · wants a new pair']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the problem and the solution. Was the customer happy?'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** problem you had with something you bought (or invent one). Tell your partner: what you bought, where, when, and what was wrong. Your partner is the shop – they offer a solution. Are you happy with it? Then swap. Change partners and tell the story again.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your partner\'s story:  _Fadi bought a phone charger in the market. It worked for two days and then it stopped. He went back, but the shop didn\'t change it because he didn\'t have the receipt. Now he always keeps his receipts!_'));
out.push(p('**Listener task:** whose story has the worst ending? What is the lesson?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Maya writes to an online shop. Read and answer.'));
out.push(model([
  '**To: orders@beitstore.sy   Subject: Problem with order 4471**',
  'Dear Sir or Madam,',
  'I ordered a blue cotton dress (size M) from your website on 3 October. The parcel arrived yesterday, but there are two problems. First, the dress is green, not blue. Second, it is too small – it isn\'t a medium, it\'s a small.',
  'I would like to return the dress and receive the correct one in blue, size M. If you haven\'t got it in blue, I would prefer a refund.',
  'My order number is 4471 and my phone number is 0933 427 815. Could you tell me how to return the dress, please?',
  'Yours faithfully,',
  'Maya Nasser',
]));
out.push(item('1', 'What two problems are there?'));
out.push(item('2', 'What does Maya want?'));
out.push(item('3', 'What does she want to know?'));
out.push(writers([
  'A complaint email: **Subject** (short + order number) → _Dear Sir or Madam,_ → **what you bought and when** → **the problem(s)** (_First,… Second,…_) → **what you want** → **your details** → **a question** → _Yours faithfully,_ → your full name.',
  'Be **polite and clear** – not angry. Use **I would like… / I would prefer…**',
  'Use _Dear Sir or Madam_ → _Yours faithfully_. Use _Dear Mr Khaled_ → _Yours sincerely_ (or _Best regards_ in less formal emails).',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Subject:** ______________   Dear Sir or Madam,   I ordered ______________ from ______________ on ______________. ______________ arrived ______________, but there ______________. First, ______________. Second, ______________.   I would like ______________. If ______________, I would prefer ______________.   My order number is ______ and my phone number is ______. Could you tell me ______________, please?   Yours faithfully,   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Polite forms: I would like / Could you…?', 'too + adjective / not + adjective + enough used correctly', 'All parts: what, when, problems, what you want, details, question']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one problem sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a complaint email about something you bought – real or invented (60 words or more). Give **two** problems and say what you want.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s email as the **shop**. ★ _Clear and polite!_  ✓ _Can you add the order number?_  ? _When did it arrive?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two emails are read aloud. The class decides: would the shop help this customer?'));
out.push(hw('Write the **shop\'s reply** to your partner\'s email (30+ words): say sorry, offer a solution, and explain what the customer must do next.'));

// ======================= 5.6 =======================
out.push(pb());
out.push(h2('5.6  She\'s wearing a blue jacket'));
out.push(p('**Function:** saying what people are wearing   ·   **Grammar:** present continuous (recycle) with clothes   ·   **Pronunciation:** /dʒ/ _jacket, jeans_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do people wear to work? To a wedding? At home? Is it different in summer and winter? Make a class list.'));
out.push(board('He\'s wearing a dark suit.', 'Please wear comfortable shoes.'));
out.push(p('**b**  Wear or carry? _a bag · a jacket · an umbrella · glasses · a scarf · a box_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why is Lina at the airport?   **A** She\'s travelling.   **B** She\'s meeting a visitor.   **C** She\'s collecting a parcel.'));
out.push(p('**b**  Listen again. **1** What is Mr Lang wearing?   **2** What is he carrying?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  At the airport', [
  ['Lina', 'Hello, Mr Lang? This is Lina Haddad from Medica Trading. I\'m at the airport, but I can\'t see you!'],
  ['Mr Lang', 'Hello, Lina! I\'m just outside Gate 2. There are a lot of people here.'],
  ['Lina', 'What are you wearing?'],
  ['Mr Lang', 'I\'m wearing a grey jacket and jeans, and I\'ve got glasses. I\'m carrying a black suitcase and a laptop bag.'],
  ['Lina', 'Hmm, I see two men with grey jackets…'],
  ['Mr Lang', 'I\'m quite tall, and I\'m wearing a red scarf. My wife says it\'s too bright!'],
  ['Lina', 'Ah – I can see you! You\'re standing next to the coffee shop, right? I\'m waving.'],
  ['Mr Lang', 'Yes! Are you the lady in the long black coat?'],
  ['Lina', 'That\'s me. Welcome to Damascus, Mr Lang!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – wear / be wearing**',
  '_I **wear** a suit to work every day._ (routine – present simple)   _Today I **\'m wearing** jeans._ (now – present continuous)',
  '**wear** clothes, shoes, glasses, a watch, perfume · **carry** a bag, a suitcase, an umbrella (in your hand) · **have got** glasses / a beard',
  'Describing a person: **size** (tall, short) + **hair** + **clothes** + **carrying**: _He\'s quite tall, with short dark hair. He\'s wearing a grey jacket and he\'s carrying a black suitcase._',
  '_quite_ = a little: _quite tall_. _very_ = a lot: _very tall_.',
  '**Practise:** Choose the correct form.  1 Rami usually (_wears / is wearing_) a shirt to work.  2 Look at Maya! She (_wears / is wearing_) a beautiful dress today.  3 I (_carry / \'m carrying_) two bags – can you help me?  4 My grandfather always (_wears / is wearing_) a hat.',
  '**Useful phrases:** What are you wearing? · I can\'t see you! · I\'m quite tall. · I\'m waving. · Are you the lady / man in…? · That\'s me!',
  '**Pronunciation.** 🔊 **Track 5.12** /dʒ/ – like "d" + "j": _jacket · jeans · January · orange · jumper_. Don\'t say /ʒ/ or /ʃ/! Listen and repeat: _He\'s wearing a jacket and jeans in January._',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is at the airport / station; B is meeting them. Describe yourself so B can find you. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Hello? I\'m at __________, but I can\'t see you!'],
  ['B', 'I\'m just __________. What are you wearing?'],
  ['A', 'I\'m wearing __________ and __________. I\'m carrying __________.'],
  ['B', 'Hmm, I see two people with __________…'],
  ['A', 'I\'m quite __________, and I\'ve got __________.'],
  ['B', 'Ah – I can see you! You\'re standing next to __________, right?'],
  ['A', 'That\'s me!'],
]));
out.push(table(['Card A', 'Card B'], [['short · long dark hair · black coat, white scarf · carrying a big bag and a plant', 'tall · glasses, short grey beard · brown jacket, dark trousers · carrying a suitcase and an umbrella']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** draw a quick picture of the person. Compare with the card!'));
out.push(stage('4', 'Your turn – who is it?', 9));
out.push(p('**a**  Secretly choose a person in the class. Describe what they are wearing – **don\'t** use their name or hair. Your partner guesses. Then swap.'));
out.push(p('**b**  Describe what you usually wear to work or college, and what you are wearing today. Is it different? Why?'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner:  _Hiba usually wears a long skirt and a jacket to college, but today she\'s wearing jeans because she has no classes – only our English lesson!_'));
out.push(p('**Listener task:** who is the most comfortable in class today? Who is the most elegant?   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Lina\'s message to her colleague Rana at the office. Answer the questions.'));
out.push(model([
  'Rana – I\'m still at the airport. Mr Lang\'s plane was late, but he\'s here now and we\'re on our way.',
  'He\'s quite tall, about fifty, with glasses and short grey hair. He\'s wearing a grey jacket, jeans and a bright red scarf – you can\'t miss him! He\'s carrying a black suitcase and a laptop bag.',
  'Please tell Mr Khaled that we\'ll be at the office at about 11.30. Can you make sure the meeting room is ready? Mr Lang doesn\'t drink coffee – he prefers tea with no sugar.',
  'Thanks! Lina',
]));
out.push(item('1', 'How old is Mr Lang, about?'));
out.push(item('2', 'What will make him easy to recognise?'));
out.push(item('3', 'What does he like to drink?'));
out.push(writers([
  'A message describing a person: **the situation** → **description** (age, size, hair, glasses) → **clothes now** (_He\'s wearing…_) → **what they\'re carrying** → **practical information** (time, a request, a detail).',
  'Use **quite / very / about**: _quite tall · about fifty_.',
  'Order: **wearing** first, then **carrying**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('______ – I\'m ______________. ______________.   He / She is quite ______________, about ______, with ______________. He / She is wearing ______________. He / She is carrying ______________.   Please ______________. Can you ______________? ______________.   Thanks! ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'is wearing / is carrying (not _wearing_ alone)', 'Adjective order in the clothes description', 'All parts: situation, description, clothes, carrying, practical information']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one description sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('A friend is meeting someone you know at the station or airport, but they have never met. Write a message describing that person (50 words or more) and add two pieces of practical information.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s message as the **person meeting them**. ★ _I can find them!_  ✓ _Can you add what they\'re carrying?_  ? _How tall exactly?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two messages are read aloud. Draw the person as you listen. Compare your drawings!'));
out.push(hw('Write the reply from the person at the station (25+ words): _I found him! He was… We\'re on our way…_ or _I can\'t see him. Is he wearing…?_'));

// ======================= 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review & Mediate: How do I order online?'));
out.push(p('**Function:** explaining an online order page   ·   **Recycling:** Units 1–5   ·   **Exam practice:** A2 Key Reading Part 5, Writing Part 6, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** This shoes are too small.  **2** My phone is more cheaper than yours.  **3** It\'s the most big shop in town.  **4** Is this bag your\'s?  **5** The water isn\'t enough hot.  **6** Today she wears jeans.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the online order page.'));
out.push(box('BEIT STORE – HOW TO ORDER', [
  table(['Step', 'What to do'], [
    ['1  Choose', 'Click on the product. Choose your **size** and **colour**. Click "Add to basket".'],
    ['2  Basket', 'Click the basket icon (top right). Check your items. You can change the number or remove an item here.'],
    ['3  Delivery', 'Write your name, phone number and address. Choose: **standard** (3–5 days, 25,000 SYP) or **fast** (24 hours, 60,000 SYP). Free standard delivery for orders over 500,000 SYP.'],
    ['4  Payment', 'Choose: **card online** or **cash on delivery** (+10,000 SYP).'],
    ['5  Confirm', 'Click "Confirm order". You get a message with your order number. **Keep this number.**'],
  ], [0.9, 3]),
  '**Returns:** you can return an item in 14 days if it isn\'t used. Call 011 556 7788 first.',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Lina helps her mother order online. What does her mother worry about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  Ordering with Mum', [
  ['Mum', 'Lina, I like this jacket on the website, but I don\'t understand how to buy it.'],
  ['Lina', 'It\'s easy, Mum. First, click on the picture. Now choose your size – you take a medium – and the colour.'],
  ['Mum', 'Dark blue. And then?'],
  ['Lina', 'Then click "Add to basket". Now click the little basket at the top. Can you see it? That\'s everything you want to buy.'],
  ['Mum', 'Yes. It says one jacket, 480,000.'],
  ['Lina', 'Good. Now write your name, phone number and address. Then choose the delivery: standard takes three to five days and costs twenty-five thousand, or fast comes tomorrow for sixty.'],
  ['Mum', 'Standard is fine. I\'m not in a hurry. But Lina – I don\'t want to put my card number on the internet.'],
  ['Lina', 'You don\'t have to. Choose "cash on delivery" – you pay the driver. It\'s ten thousand more.'],
  ['Mum', 'Oh, that\'s better! And if it doesn\'t fit?'],
  ['Lina', 'You can return it in fourteen days, but call them first. And Mum – keep the order number they send you.'],
  ['Mum', 'Thank you, habibti. Now I can do it myself next time!'],
]));
out.push(sp());
out.push(box('Language box – explaining a website or a process', [
  'Explain each step with an **imperative** (Unit 4): _**Click** on the picture. **Choose** your size. **Write** your address._',
  'Explain the **options** and what they mean: _Standard **takes** three to five days and **costs** 25,000._',
  'Answer worries with **You don\'t have to… / You can…**: _You **don\'t have to** use a card. You **can** pay the driver._',
  '**Useful phrases:** It\'s easy. · First,… Then… Now… · Can you see it? · That\'s everything you want to buy. · I\'m not in a hurry. · …, but call them first. · Keep the order number.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has the page, B is a person who doesn\'t use websites much. B asks the questions on the card; A explains. Then swap.'));
out.push(table(['B\'s questions – set 1', 'B\'s questions – set 2'], [[
  'How do I choose the size? · Where do I see what I\'m buying? · How much is delivery? · Is standard delivery ever free?',
  'Can I pay when the driver comes? · How much more is that? · What if the size is wrong? · What must I keep?']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the answers to the four questions.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** app or website you use (a delivery app, a bank app, a bus booking site, a shopping page). Explain to your partner how to use it, step by step. Your partner is a beginner – they ask at least **three** questions, including one worry (_Is it safe? What if…?_).'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained:  _Tareq explained the Yalla delivery app. First you choose the restaurant, then you add food to the basket. You can pay in cash. The delivery costs about fifteen thousand, and you can follow the driver on the map._'));
out.push(p('**Listener task:** which app sounds the easiest? Which do you want to try?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 5)', 7));
out.push(p('Read the text. Write **ONE** word for each gap.'));
out.push(model([
  '**SHOPPING IN DAMASCUS**',
  'Souq Al-Hamidiyah is the biggest and (1) ______ famous market in Damascus. It is more (2) ______ a thousand metres long, and the roof is made (3) ______ metal. The shops here are usually cheaper (4) ______ the shops in the modern centres, but you must look carefully at the quality.',
  'If you want clothes, there (5) ______ many small shops at the end of the souq. Don\'t forget to ask for a discount – it is normal here! Many visitors say the (6) ______ thing about the souq is the famous ice cream shop in the middle.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Ziad wants to order from Beit Store, but he\'s worried about paying online. Write him a message. Use the "How to order" page.'));
out.push(p('Hi Ziad,   It\'s easy to order from Beit Store! First, ______________. Then ______________. After that, write ______________ and choose your delivery: standard ______________ or fast ______________. Don\'t worry about your card – you can ______________, but it costs ______________ more. Finally, ______________ and keep ______________. If something is wrong, you can ______________, but ______________ first.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Steps in the right order with imperatives', 'Both delivery options with times and prices', 'The answer to his worry (cash on delivery)', 'Returns information']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'You bought a jacket from an online shop, but there is a problem with it. Write an email to the shop.',
  'In your email:  •  say **what you bought** and **when**  •  explain **the problem**  •  say **what you want the shop to do**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Look at ___ shoes over there. They\'re nice.   a) this   b) these   c) those',
  '2  Is this phone ___?   a) your   b) yours   c) your\'s',
  '3  My bag is ___ than yours.   a) more big   b) bigger   c) biggest',
  '4  It\'s ___ shop in the city.   a) the cheapest   b) cheapest   c) the most cheap',
  '5  These shoes are ___ small for me.   a) enough   b) too   c) very much',
  '6  The water isn\'t hot ___.   a) too   b) enough   c) more',
  '7  Today she ___ a long black coat.   a) wears   b) wear   c) is wearing',
  '8  Can I pay ___ card?   a) by   b) in   c) with the',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 4 style).** 🔊 **Track 5.14** Listen to Samira talking about her shop. Choose **A**, **B** or **C**.'));
['1  The shop is   A new.   B 20 years old.   C the oldest in the centre.',
 '2  The most popular thing in winter is   A jackets.   B scarves.   C shoes.',
 '3  Prices are   A higher than last year.   B the same as last year.   C lower than last year.',
 '4  Customers can return an item in   A 7 days.   B 14 days.   C 30 days.',
 '5  Samira says the best time to shop is   A Saturday morning.   B Thursday evening.   C Sunday morning.'].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 5.14  Audio script (read after the check)', [
  ['Samira', 'Hello! I\'m Samira and I work at Moda Clothes in Al-Hamra Centre. My family opened the shop twenty years ago – it isn\'t the oldest shop in the centre, but we know all our customers! In winter, everyone asks for jackets, and we sell a lot of them, but the thing people buy the most is scarves – they\'re cheaper and they make a nice present. Our prices this year are a little lower than last year, because we buy from a new company. You can return anything in fourteen days with the receipt, but please don\'t wear it first! And my advice: come on Sunday morning. Saturday is the busiest day and Thursday evening is terrible – you can\'t move in here!'],
]));
out.push(p('**C  Writing.** Write a message to a friend (35+ words). Recommend a shop in your city. Say why it\'s good, compare it with another shop, and give one tip.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask for things in a shop (size, colour, try on)',
  '☐ compare two products',
  '☐ say which is the best and why',
  '☐ pay and use services: bank, post office, pharmacy',
  '☐ return something and explain the problem',
  '☐ describe what people are wearing',
  '☐ explain an online order page to someone in my own words',
  '☐ write a product ad, a comparison, a recommendation, an information notice, a complaint email and a description of a person',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
