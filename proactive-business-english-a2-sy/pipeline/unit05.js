// Proactive Business English A2 · Syria Edition · Book 1 · Unit 5 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'price · price list · cost · discount · cash · card · change · receipt · invoice · bill · pay · payment · deposit · balance · due · VAT · wholesale · retail · per kilo · free of charge · expensive · cheap · offer · quote · credit · in advance';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 5  Prices, Payment and Invoices'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**5.1**  ask a price and give one, at the counter and on the telephone',
  '**5.2**  compare two offers and say which is better, and why',
  '**5.3**  say which of several is the best, the cheapest or the nearest',
  '**5.4**  say that something is too expensive, and what would be enough',
  '**5.5**  say whose invoice, whose money and whose mistake it is',
  '**5.6**  take payment, give change and explain a receipt',
  '**5.7**  Review & Mediate: tell a customer what the invoice and the receipt say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Money at Sham Trading — before you start', [
  'Prices are in **Syrian pounds (SYP)**. In speech we say _pounds_: _one hundred and ninety-two thousand pounds_. In writing, figures: **192,000 SYP**.',
  '**Wholesale** is the price for a shop that buys a lot; **retail** is the price for one person at the counter. The wholesale price list is not shown to retail customers.',
  'Most counter customers pay **cash**. Shops with an account pay **30 days** after the invoice. Mr Ayoub signs anything over **500,000 SYP**, and anything on **credit**.',
  'Nadia sends the invoice; the **receipt** is what Nour gives at the counter. They are not the same paper, and this unit is partly about that.',
], C.lyellow, C.orange));

// ======================= CYCLE 5.1 =======================
out.push(pb());
out.push(h2('5.1  How much is it?'));
out.push(p('**Function:** asking a price and giving one   ·   **Grammar:** price questions with _how much_   ·   **Pronunciation:** large numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask the price of five things in this room. Use three different questions: _How much is…? · How much are…? · How much does… cost?_'));
out.push(p('**b**  Say these prices out loud: _500 · 1,500 · 12,000 · 85,000 · 192,000 · 1,250,000_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer want to know?   **A** the price of boxes   **B** the opening hours   **C** the delivery date'));
out.push(p('**b**  Listen again. **1** How much is one small box?   **2** What is the price for a hundred?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.1  At the trade counter', [
  ['Customer', 'Good morning. How much are the small boxes?'],
  ['Nour', 'The small ones are eight hundred pounds each.'],
  ['Customer', 'Eight hundred. And if I take a hundred?'],
  ['Nour', 'For a hundred it\'s seven hundred each — seventy thousand for the hundred.'],
  ['Customer', 'Seventy thousand. How much does the tape cost?'],
  ['Nour', 'Tape is two thousand five hundred a roll. There\'s no discount on tape.'],
  ['Customer', 'And the plastic wrap?'],
  ['Nour', 'I\'m sorry, we\'ve got none today. It comes on Tuesday. Shall I write your number?'],
  ['Customer', 'Please. And is the price list free?'],
  ['Nour', 'Free of charge. Here you are — but that one is retail. If you have a shop, ask for the wholesale list.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – asking and giving a price**',
  table(['Question', 'Answer'], [
    ['**How much is** the box? (one thing)', 'It\'s **800 pounds**.'],
    ['**How much are** the boxes? (more than one)', 'They\'re **800 each**.'],
    ['**How much does** the tape **cost**?', 'It **costs** 2,500 **a roll**.'],
    ['**How much is** it **for** a hundred?', '**For** a hundred it\'s 700 **each** — 70,000 **for the hundred**.'],
    ['Is there a **discount**?', 'There\'s **no discount on** tape.'],
  ], [1.5, 1.6]),
  '**each · a roll · per kilo · for the hundred** — English always says **what the price is for**. A price with no unit is not an answer.',
  '⚠ _How much **does** it **cost**?_ — the verb has **no -s** after _does_: not ~~how much does it costs~~.',
  '⚠ _It\'s expensive_ is an opinion; _it\'s 800 each_ is a price. At a counter, give the number first.',
  '**Practise:** Write the question and the answer.',
  '1 box / 800 → ______  2 boxes / 800 each → ______  3 tape / cost / 2,500 a roll → ______  4 100 boxes / 70,000 → ______  5 discount on tape? → ______',
  '**Useful phrases:**  How much is…?  ·  …each  ·  …a roll  ·  for the hundred  ·  There\'s no discount on…  ·  Free of charge.',
  '**Pronunciation – large numbers.** 🔊 **Track 5.2** Listen and repeat: _eight hundred_ · _seventy thousand_ · _a hundred and ninety-two thousand_ · _one million two hundred and fifty thousand_. English puts **and** before the last part: _two hundred **and** fifty_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks prices at a counter; B answers from the role card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good morning. How much are the __________?'],
  ['B', 'The __________ are __________ each.'],
  ['A', '__________. And if I take __________?'],
  ['B', 'For __________ it\'s __________ each — __________ for the __________.'],
  ['A', 'How much does the __________ cost?'],
  ['B', '__________ is __________ a __________. There\'s no discount on __________.'],
]));
out.push(table(['Role card 1 — a stationery counter', 'Role card 2 — a food wholesaler'], [[
  'A4 paper 9,000 a packet (10+ packets: 8,000) · pens 500 each (box of 10: 4,200) · folders 1,200 each · no discount on folders · price list free',
  'rice 6,500 per kilo (sack of 25 kg: 150,000) · oil 38,000 a bottle (carton of 6: 210,000) · sugar 4,800 per kilo · no discount on sugar · delivery free over 500,000',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their counter scene for the class – **without the book**.'));
out.push(p('**Listener task:** write the four prices you hear, with their units. A price without a unit scores nothing.'));
out.push(PHRASE_CARD(['How much is…?', 'How much are…?', '…each', '…a roll / per kilo', 'And if I take…?', 'There\'s no discount on…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Ask **three** colleagues the price of things they really know — bread, a bus ticket, an hour of their work, a kilo of something. Write the prices with their units.'));
out.push(table(['Thing', 'Price', 'Per what?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A _______ costs _______ per _______. If you take _______, it\'s _______ each._'));
out.push(p('**Listener task:** write the price that surprised you most, and say why.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how much does it costs_ and prices with no unit. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the price note Nour sends a customer, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr F. Tarabishi   **From:** Nour Mansour, Sham Trading   **Subject:** Prices you asked for',
  'Dear Mr Tarabishi,',
  'Thank you for your visit this morning. These are the prices for the three items, **retail**:',
  'Small boxes: **800 SYP each**. For 100 or more: **700 each** (70,000 for a hundred).',
  'Tape, 48 mm: **2,500 SYP a roll**. There is no discount on tape.',
  'Plastic wrap, wide: **9,000 SYP a roll**, when it arrives. It comes on Tuesday afternoon.',
  'These prices are good until **the end of April**. VAT is included. Delivery inside Damascus is free of charge for orders over 300,000 SYP.',
  'If you open an account with us, I can send you the wholesale list, which is lower on the boxes.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'How much are 100 small boxes in total?'));
out.push(item('2', 'Until when are the prices good?'));
out.push(item('3', 'What does Nour offer at the end, and what would it get the customer?'));
out.push(box('Writer\'s box', [
  '**Shape of a price note:** thank them → say whether it is **retail or wholesale** → one line per item, with the price **and its unit** → the quantity price, if there is one → until when the prices are good → VAT and delivery → an offer.',
  'A price in writing needs four things: the **item**, the **number**, the **unit**, and **until when**. A price with no date is a promise you cannot keep.',
  'Say whether **VAT is included**. In speech people forget; in writing it is the first thing an accountant looks for.',
  '⚠ Never send one price list to a retail customer and a different one to a shop without saying which is which. Write **retail** or **wholesale** at the top, every time.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a price note for three things you could really sell or quote for (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Thank you for ______________. These are the prices, **______________**:  ______________: **______ SYP ______**. For ______ or more: **______ each**.  ______________: **______ SYP ______**. There is no discount on ______________.  These prices are good until ______________. VAT is ______________. Delivery ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "Every price has its unit — good. You didn\'t say until when. And is VAT in the 9,000 or not?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Read as the **customer** and look for the thing you would have to telephone about. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every price has its unit (_each · a roll · per kilo_)', ''],
  ['It says **retail** or **wholesale**', ''],
  ['A date: until when the prices are good', ''],
  ['VAT and delivery', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one price line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the price note for something you would sell yourself — a service, a repair, lessons, a product you make (35 words or more). Price it so that nobody has to telephone you to understand it.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as a customer with no money to waste. Write on a slip:  ★ _This is clear._   ✓ _Is… included?_   ? _the question I would telephone about_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notes on the wall. Find the one you would buy from and say which **sentence** made you decide.'));
out.push(box('Homework', ['Write your final price note. Then write down the prices of five things you bought this week, each with its unit, and say which one you think was too expensive (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.2 =======================
out.push(pb());
out.push(h2('5.2  Aleppo is cheaper, but Homs is nearer'));
out.push(p('**Function:** comparing two offers   ·   **Grammar:** comparatives   ·   **Pronunciation:** weak _than_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make the comparative: _cheap → ______ · near → ______ · big → ______ · easy → ______ · expensive → ______ · good → ______ · bad → _______'));
out.push(p('**b**  Compare two things in this room in three ways. Use _-er than_ and _more … than_.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they comparing?   **A** two customers   **B** two suppliers   **C** two lorries'));
out.push(p('**b**  Listen again. **1** Which supplier is cheaper?   **2** Why does Mr Ayoub not choose the cheaper one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.3  Two offers for the same boxes', [
  ['Nour', 'Mr Ayoub, I have two offers for the small boxes. Aleppo and Homs.'],
  ['Mr Ayoub', 'Tell me both.'],
  ['Nour', 'Shamsi in Aleppo: six hundred and fifty each for a thousand. Khalil in Homs: seven hundred and twenty.'],
  ['Mr Ayoub', 'So Aleppo is cheaper. How much cheaper, for a thousand?'],
  ['Nour', 'Seventy thousand cheaper.'],
  ['Mr Ayoub', 'And the delivery?'],
  ['Nour', 'That\'s the thing. Homs is nearer — two days. Aleppo is six days, and the road is slower in winter.'],
  ['Mr Ayoub', 'Six days. And if we are short on a Tuesday?'],
  ['Nour', 'Then Homs is better, even if it\'s more expensive. Khalil also gives thirty days; Shamsi wants half in advance.'],
  ['Mr Ayoub', 'Then it isn\'t really cheaper, is it? Write me both, side by side.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – comparatives**',
  table(['Adjective', 'Comparative', 'Example'], [
    ['short (1 syllable)', '+ **-er** + **than**', 'cheap**er than** · near**er than** · fast**er than**'],
    ['ending in -y', '-y → **-ier**', 'eas**ier than** · heav**ier than**'],
    ['short vowel + consonant', 'double it', 'bi**gg**er · ho**tt**er'],
    ['long (2+ syllables)', '**more** … **than**', '**more** expensive **than** · **more** difficult **than**'],
    ['irregular', '—', 'good → **better** · bad → **worse** · far → **further**'],
  ], [1.2, 1.2, 2]),
  '**How much cheaper?** — put the difference in front: _seventy thousand **cheaper**_ · _two days **faster**_.',
  '⚠ Never both: ~~more cheaper~~. Either _-er_ **or** _more_.',
  '⚠ _than_, not _from_: _cheaper **than** Homs_.',
  '**Practise:** Complete the sentences.',
  '1 Aleppo is ______ (cheap) than Homs.  2 Homs is ______ (near).  3 The road is ______ (slow) in winter.  4 Khalil\'s terms are ______ (good) than Shamsi\'s.  5 Aleppo is seventy thousand ______ (cheap) for a thousand boxes.',
  '**Useful phrases:**  Tell me both.  ·  How much cheaper?  ·  That\'s the thing.  ·  even if it\'s more expensive  ·  side by side  ·  Then it isn\'t really cheaper.',
  '**Pronunciation – weak _than_.** 🔊 **Track 5.4** Listen and repeat: _cheaper than Homs_ /ˈtʃiːpə ðən hɒms/ · _better than that_ /ˈbetə ðən ðæt/. _Than_ is never loud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has two offers; B asks the questions that find the real difference. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I have two offers for __________. __________ and __________.'],
  ['B', 'Tell me both.'],
  ['A', '__________: __________. __________: __________.'],
  ['B', 'So __________ is cheaper. How much cheaper?'],
  ['A', '__________ cheaper.'],
  ['B', 'And __________?'],
  ['A', 'That\'s the thing. __________ is __________ than __________.'],
  ['B', 'Then it isn\'t really cheaper, is it?'],
]));
out.push(table(['Role card 1 — two vans to buy', 'Role card 2 — two printers to use'], [[
  'Van A: 42 million, 180,000 km, diesel, six years old, parts easy.  Van B: 51 million, 90,000 km, petrol, three years old, parts from abroad.',
  'Printer A: 2,000 a page, next door, ready in two hours.  Printer B: 1,400 a page, across the city, ready in two days, better paper.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their comparison for the class – **without the book**.'));
out.push(p('**Listener task:** write the one thing that made the cheaper offer **not** the better one.'));
out.push(PHRASE_CARD(['Tell me both.', '…er than…', 'How much cheaper?', 'That\'s the thing.', 'even if…', 'Then it isn\'t really…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a real choice between **two** things — two shops, two routes to work, two telephone companies, two schools. Compare them for **three** colleagues, in three ways each.'));
out.push(table(['A vs B', 'A is …er', 'B is …er', 'Which I chose'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  ______ is cheaper and ______ than ______, but ______ is ______. I chose ______, because ______._'));
out.push(p('**Listener task:** write the **reason**, not the choice. Were any two reasons the same?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _more cheaper_ and _cheaper from_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the comparison Nour writes for Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**TWO OFFERS — small boxes, 1,000 units**   for Mr Ayoub, 12 April',
  'Shamsi (Aleppo): **650 each** = 650,000. Delivery 6 days. Half the money **in advance**. Winter road slower.',
  'Khalil (Homs): **720 each** = 720,000. Delivery 2 days. **30 days** to pay. Same boxes, same size.',
  'Shamsi is **70,000 cheaper** for a thousand — that is about ten per cent.',
  'But Khalil is **four days faster** and gives us 30 days, so the money stays with us for a month. Shamsi wants 325,000 today.',
  '**My reading:** Shamsi is cheaper on the paper and more expensive in the yard. If we run short on a Tuesday, two days is the difference between sending the Homs order and not sending it.',
  '**My recommendation:** Khalil for the regular boxes, Shamsi for a big order planned a month ahead.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'How much cheaper is Shamsi, and by what percentage?'));
out.push(item('2', 'What are the two advantages of Khalil?'));
out.push(item('3', 'What does Nour recommend, and when would she use the other supplier?'));
out.push(box('Writer\'s box', [
  '**Shape of a written comparison:** the two offers, **one line each**, in the same order of facts → the difference in **one number** → the thing the number does not show → **my reading** → **my recommendation**.',
  'Write the two offers in the **same order of facts** — price, delivery, payment — so the reader\'s eye compares straight down the page.',
  'Separate **the number** from **the judgement**. _70,000 cheaper_ is a fact; _cheaper on the paper and more expensive in the yard_ is your reading, and it must be labelled as yours.',
  '⚠ Always recommend. A comparison with no recommendation sends the decision back to the person who asked you to make it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a comparison of two real offers or choices (25 words or more). Use the frame.'));
out.push(p('**TWO OFFERS — ______________**   for ______________, ______.  ______________: **______** = ______. ______________. ______________.  ______________: **______** = ______. ______________. ______________.  ______________ is **______ cheaper** — about ______ per cent. But ______________ is ______________, so ______________.  **My reading:** ______________.  **My recommendation:** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read only the **two offer lines**. Can you compare them straight down the page? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both offers give their facts in the same order', ''],
  ['The difference is **one number**', ''],
  ['The reading is separate from the facts', ''],
  ['There is a recommendation', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their **recommendation**. The class says whether they could act on it without reading the rest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Compare two places you know well — two cities, two neighbourhoods, two workplaces (35 words or more). Use at least five comparatives, including one irregular.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The comparison I liked._   ✓ _Can you say how much…er?_   ? _a question about the one you chose_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find a comparison where the writer clearly prefers one place but says so **without** using the word _better_.'));
out.push(box('Homework', ['Write your final comparison. Then write six sentences comparing today with ten years ago in your town, using six different comparatives (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.3 =======================
out.push(pb());
out.push(h2('5.3  The cheapest is not always the best'));
out.push(p('**Function:** saying which of several is the best   ·   **Grammar:** superlatives   ·   **Pronunciation:** _the_ before a superlative'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Make the superlative: _cheap → ______ · near → ______ · easy → ______ · expensive → ______ · good → ______ · bad → _______'));
out.push(p('**b**  Who in this room lives the nearest? Who travels the furthest? Ask and find out.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many offers are there?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** Which is the cheapest?   **2** Which one does Nour choose, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.5  Three quotes for the printing', [
  ['Mr Ayoub', 'Three quotes for the invoice books. Which is the cheapest?'],
  ['Nour', 'Zahra Press — a hundred and ten thousand. Hamdan is a hundred and thirty-five. Noor Printing is a hundred and sixty.'],
  ['Mr Ayoub', 'So Zahra is the cheapest by a long way.'],
  ['Nour', 'It is. But it\'s also the slowest — ten days. Hamdan is the fastest: three days, and they\'re the nearest, in Jaramana.'],
  ['Mr Ayoub', 'And the most expensive one?'],
  ['Nour', 'Noor does the best paper. But we don\'t need the best paper for an invoice book.'],
  ['Mr Ayoub', 'True. So?'],
  ['Nour', 'Hamdan. Not the cheapest, but the best for us: three days, round the corner, and we know them.'],
  ['Mr Ayoub', 'The cheapest is not always the best. Write that on the wall.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – superlatives**',
  table(['Adjective', 'Superlative', 'Example'], [
    ['short', '**the** + **-est**', '**the** cheap**est** · **the** near**est** · **the** fast**est**'],
    ['ending in -y', '**the** + **-iest**', '**the** eas**iest** · **the** busi**est**'],
    ['long', '**the most** …', '**the most** expensive · **the most** difficult'],
    ['irregular', '—', 'good → **the best** · bad → **the worst** · far → **the furthest**'],
  ], [1.1, 1.3, 2]),
  '**the** is part of the superlative — it is almost never left out: _**the** cheapest_, not ~~cheapest~~.',
  '**by a long way** · **by far** = much more than the others: _Zahra is the cheapest **by a long way**._',
  '⚠ Two things → comparative (_cheaper_). Three or more → superlative (_the cheapest_). This is the mistake to watch.',
  '**Practise:** Comparative or superlative?',
  '1 Of the three quotes, Zahra is ______ (cheap).  2 Hamdan is ______ (near) than Zahra.  3 Noor does ______ (good) paper of the three.  4 Which is ______ (fast), Hamdan or Noor?  5 Thursday is ______ (busy) day of the week.',
  '**Useful phrases:**  Which is the cheapest?  ·  by a long way  ·  the best for us  ·  round the corner  ·  we know them  ·  not always the best',
  '**Pronunciation – the before a superlative.** 🔊 **Track 5.6** Listen and repeat: _the cheapest_ /ðə ˈtʃiːpɪst/ · _the easiest_ /ði ˈiːziɪst/. **the** is /ðə/ before a consonant sound and /ði/ before a vowel sound.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has three quotes; B asks which is the cheapest, the fastest and the best, and why. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Three quotes for __________. __________, __________ and __________.'],
  ['B', 'Which is the cheapest?'],
  ['A', '__________ — __________. It\'s the cheapest by a long way.'],
  ['B', 'And the fastest?'],
  ['A', '__________. They\'re also the nearest.'],
  ['B', 'And the most expensive?'],
  ['A', '__________ does the best __________. But we don\'t need the best __________ for __________.'],
  ['B', 'So which one?'],
  ['A', '__________. Not the cheapest, but the best for us.'],
]));
out.push(table(['Role card 1 — three builders for a wall', 'Role card 2 — three schools for a child'], [[
  'Hamdi 900,000, 3 weeks, far. Said 1,150,000, 10 days, near, did your neighbour\'s wall. Jamil 1,400,000, 5 days, best finish, never met him.',
  'School A: cheapest, biggest classes, 40 minutes away. School B: middle price, nearest, average results. School C: most expensive, best results, strictest.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the superlative that decided it. Was it _the cheapest_?'));
out.push(PHRASE_CARD(['Which is the cheapest?', 'the fastest', 'the nearest', 'by a long way', 'the best for us', 'we know them']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In **threes**, agree on the best, the worst, the cheapest, the nearest and the busiest of something you all know — markets, bus routes, months of the year, places to eat near here. You must agree, so you must argue.'));
out.push(table(['Superlative', 'Our answer', 'Who disagreed, and why'], [['the best', '', ''], ['the cheapest', '', ''], ['the busiest', '', ''], ['the worst', '', '']], [1.2, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We agreed that _______ is the _______, but _______ said _______ was the _______, because _______._'));
out.push(p('**Listener task:** write the superlative the class disagreed about most.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for a superlative used for two things, and a missing _the_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the quote summary Nour puts on one page, and answer the questions.'));
out.push(box(null, [
  '**THREE QUOTES — 500 invoice books**   13 April',
  'Zahra Press: **110,000** · 10 days · Qaboun · paper: ordinary · never used them',
  'Hamdan Printing: **135,000** · 3 days · Jaramana · paper: ordinary · used 4 times, no problems',
  'Noor Printing: **160,000** · 6 days · Mezzeh · paper: best · used once, very good',
  '**The cheapest** is Zahra, by 25,000. **The fastest and the nearest** is Hamdan. **The best paper** is Noor.',
  '**Recommendation: Hamdan.** An invoice book does not need the best paper. The 25,000 we save with Zahra costs us seven days and a printer we have never tried. Hamdan is three days and round the corner, and if a page is wrong we can walk there.',
  'If this were a catalogue and not an invoice book, I would say Noor.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which is the cheapest, and by how much?'));
out.push(item('2', 'Why does Nour not recommend the cheapest?'));
out.push(item('3', 'When would she recommend Noor?'));
out.push(box('Writer\'s box', [
  '**Shape of a quote summary:** one line per quote, always the **same facts in the same order** → a line of superlatives (cheapest / fastest / best at…) → **the recommendation, in bold, first** → the reason → when the answer would be different.',
  'Put the recommendation **before** the reason. The person reading has already seen the numbers; what they want is your sentence.',
  'Name what the cheapest one **costs you**: _the 25,000 we save costs us seven days and a printer we have never tried._ That is the sentence that wins the argument.',
  '⚠ End with _if this were ___, I would say ___._ It shows you chose for **this** job, not out of habit, and it saves the next conversation.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a three-quote summary for a real or invented job (25 words or more). Use the frame.'));
out.push(p('**THREE QUOTES — ______________**   ______.  ______________: **______** · ______ · ______ · ______.  ______________: **______** · ______ · ______ · ______.  ______________: **______** · ______ · ______ · ______.  **The cheapest** is ______________, by ______. **The fastest** is ______________. **The best ______** is ______________.  **Recommendation: ______________.** ______________. If this were ______________, I would say ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read **only the recommendation and the reason**. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Same facts in the same order on every line', ''],
  ['_the_ before every superlative', ''],
  ['The recommendation comes before the reason', ''],
  ['It says what the cheapest one would cost you', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last line (_if this were…_). The class says what it tells them about the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the best and the worst of something in your own life — jobs, journeys, meals, days (35 words or more). Use at least four superlatives and say **why**, not only **which**.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The best one made me smile / think._   ✓ _Can you say why it was the worst?_   ? _a question about it_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect the class\'s superlatives on the board. Which adjective was used most? Which was used only once?'));
out.push(box('Homework', ['Write your final text. Then write five superlative sentences about your country for somebody who has never been — the oldest, the busiest, the most beautiful, the hottest, the best (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.4 =======================
out.push(pb());
out.push(h2('5.4  It\'s too expensive for this order'));
out.push(p('**Function:** saying something costs too much, and what would be enough   ·   **Grammar:** _too / enough_   ·   **Pronunciation:** stress on _too_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Finish each one in two ways: _It\'s too expensive **for** ______ · It\'s too expensive **to** ______ · It isn\'t cheap **enough** ______'));
out.push(p('**b**  Which sentence means you will buy it? _It\'s too expensive. · It isn\'t cheap. · It\'s expensive, but it\'s good enough._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour want from Ms Shamsi?   **A** a faster delivery   **B** a better price   **C** different boxes'));
out.push(p('**b**  Listen again. **1** What price does Nour name?   **2** What does Ms Shamsi offer instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.7  Asking for a better price', [
  ['Nour', 'Ms Shamsi, about the wrap. Nine thousand a roll is too expensive for this order.'],
  ['Ms Shamsi', 'It\'s the wide one, Nour. The narrow is six.'],
  ['Nour', 'I know. But the narrow isn\'t strong enough for the heavy pallets — we tried it in March.'],
  ['Ms Shamsi', 'That\'s true. How many rolls?'],
  ['Nour', 'Twelve now, and about twelve every month after that.'],
  ['Ms Shamsi', 'Twelve a month is enough to give you a better price. Eight thousand two hundred.'],
  ['Nour', 'Eight thousand two hundred. That\'s better, but it isn\'t quite enough. Eight would make it work.'],
  ['Ms Shamsi', 'Eight for twelve rolls every month, paid in thirty days — not sixty.'],
  ['Nour', 'Thirty days. Agreed. Thank you, Ms Shamsi.'],
  ['Ms Shamsi', 'You argue like Abu Yasser. Write it in an email so I remember what I agreed to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – too and enough**',
  table(['Pattern', 'Meaning', 'Example'], [
    ['**too** + adjective', 'more than we can accept', 'It\'s **too expensive**.'],
    ['**too** + adj + **for** + noun', 'for this thing', 'too expensive **for this order**'],
    ['**too** + adj + **to** + verb', 'so that we cannot', 'too expensive **to buy** every month'],
    ['adjective + **enough**', 'at least what we need', 'strong **enough** · cheap **enough**'],
    ['**enough** + noun', 'at least the quantity we need', '**enough** rolls · **enough** money'],
    ['**enough to** + verb', 'it makes it possible', 'Twelve a month is **enough to** give you a better price.'],
  ], [1.3, 1.2, 1.8]),
  '⚠ **enough** goes **after** an adjective but **before** a noun: _strong **enough**_ · _**enough** rolls_.',
  '⚠ _It isn\'t quite enough_ is the most useful sentence in a negotiation: it says no **and** says you are still talking.',
  '**Practise:** Complete with _too_ or _enough_.',
  '1 Nine thousand is ___ expensive for this order.  2 The narrow wrap isn\'t strong ___.  3 Twelve a month is ___ to get a discount.  4 It\'s ___ far to go every week.  5 We haven\'t got ___ boxes for Tuesday.',
  '**Useful phrases:**  …is too expensive for…  ·  …isn\'t strong enough  ·  That\'s better, but…  ·  …would make it work.  ·  Agreed.  ·  Write it in an email.',
  '**Pronunciation – stress on _too_.** 🔊 **Track 5.8** Listen. _**TOO** expensive_ — the stress is on _too_, and the voice falls. Without the stress it sounds like _two_. Repeat the five sentences.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for a better price; B offers something in the middle. Neither may say only _yes_ or only _no_. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'About the __________. __________ is too expensive for __________.'],
  ['B', 'It\'s the __________ one. The __________ is __________.'],
  ['A', 'I know. But the __________ isn\'t __________ enough for __________.'],
  ['B', 'That\'s true. How many?'],
  ['A', '__________ now, and about __________ every __________.'],
  ['B', '__________ a __________ is enough to give you a better price. __________.'],
  ['A', 'That\'s better, but it isn\'t quite enough. __________ would make it work.'],
  ['B', '__________, but __________.'],
]));
out.push(table(['Role card 1 — a taxi for the month', 'Role card 2 — renting a store room'], [[
  'A needs a car every morning. B asks 25,000 a day. A wants 18,000 for 20 days a month. B can do 20,000 if paid weekly in advance.',
  'A wants the small store room. B asks 900,000 a month. A offers 700,000. B can do 800,000 for a year, or 850,000 for six months.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their negotiation for the class – **without the book**.'));
out.push(p('**Listener task:** write what each side **gave** to get what they wanted. If one side gave nothing, it was not a negotiation.'));
out.push(PHRASE_CARD(['too expensive for…', 'isn\'t… enough', 'How many?', 'enough to…', 'That\'s better, but…', 'Agreed.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Negotiate something real with **two** colleagues — a price, a deadline, who does which job, how long a lesson is. You must each give one thing. Make notes.'));
out.push(table(['What we negotiated', 'I wanted', 'They wanted', 'What we agreed'], [['', '', '', ''], ['', '', '', '']], [1.4, 1.2, 1.2, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I said _______ was too _______ for _______. He / She said _______. We agreed on _______, and I gave _______._'));
out.push(p('**Listener task:** write the sentence that moved the negotiation. It is usually not the first offer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _enough strong_ and _too much expensive_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the email Nour writes after the call, and answer the questions.'));
out.push(box(null, [
  '**To:** Shamsi Packaging — Ms Dima Shamsi   **From:** Nour Mansour   **Subject:** Wide wrap — price agreed today',
  'Dear Ms Shamsi,',
  'Thank you for the call. This is what we agreed, so that we both have it in writing:',
  '**Wide plastic wrap: 8,000 SYP a roll** (the list price is 9,000).',
  'In return, Sham Trading will take **12 rolls every month** and pay **within 30 days** of the invoice, not 60.',
  'The price holds while we take twelve a month. If we take fewer in a month, I understand that month returns to the list price, and I will telephone you before it happens.',
  'The first twelve rolls are on order S-419, Tuesday 11 April.',
  'If anything here is not what you remember, please tell me this week — it is easier to change now than on an invoice.',
  'Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the new price, and what is the list price?'));
out.push(item('2', 'What does Sham Trading give in return — two things?'));
out.push(item('3', 'What does Nour promise to do if they take fewer than twelve in a month?'));
out.push(box('Writer\'s box', [
  '**Shape of a "this is what we agreed" email:** thank them → _this is what we agreed, so that we both have it in writing_ → **what we get**, in bold → **what we give in return**, in bold → the condition, and what happens if it ends → where it starts → an invitation to correct it.',
  '**Write down both sides.** An email that records only what you won is not a record; it is a claim, and the other side will remember it differently.',
  'Say what happens **when the condition fails**, and promise to telephone **before** it does. That one sentence is worth more than the discount.',
  '⚠ End with _if anything here is not what you remember, tell me this week_. It is polite, it is honest, and it moves the argument from the invoice to today.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "this is what we agreed" email for a real or invented agreement (25 words or more). Use the frame.'));
out.push(p('Dear ______________, Thank you for ______________. This is what we agreed, so that we both have it in writing:  **______________: ______** (the usual is ______). In return, ______________ will ______________ and ______________. The price holds while ______________. If ______________, I understand ______________, and I will ______________ before it happens. If anything here is not what you remember, please tell me ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read it as the **other side**. Is anything written down that you would not have agreed to? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What we get **and** what we give', ''],
  ['The condition is clear', ''],
  ['What happens if the condition fails', ''],
  ['An invitation to correct it, with a date', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three pairs read the email and the other side\'s objection. Where they differ, find the sentence that was too comfortable for the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you decided was **too expensive** — and what you did instead (35 words or more). Say what price would have been enough, and why.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I would have done the same._   ✓ _What price would have been enough?_   ? _a question about what you did instead_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Find one where the writer paid more and was right to. What made it worth it?'));
out.push(box('Homework', ['Write your final text. Then write five sentences with _too_ and five with _enough_ about your own week — time, money, sleep, work, space (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.5 =======================
out.push(pb());
out.push(h2('5.5  Is this invoice ours or theirs?'));
out.push(p('**Function:** saying whose it is   ·   **Grammar:** possessive pronouns   ·   **Pronunciation:** _ours_, _yours_, _theirs_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Complete the pairs: _my → ______ · your → ______ · his → ______ · her → ______ · our → ______ · their → _______'));
out.push(p('**b**  Hold up something of yours and something of a colleague\'s. Say: _This is mine. That one is ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the problem?   **A** an invoice in the wrong file   **B** a missing payment   **C** a wrong price'));
out.push(p('**b**  Listen again. **1** Whose invoice is it?   **2** Whose mistake was it, in the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.9  Whose invoice is this?', [
  ['Nadia', 'Nour, this invoice. Is it ours or theirs?'],
  ['Nour', 'Let me see. Shamsi Packaging, twelve rolls… that\'s from them, so it\'s theirs — we pay it.'],
  ['Nadia', 'But it\'s in our outgoing file, with ours.'],
  ['Nour', 'Then somebody filed it wrong. Ours are the ones with the blue header; theirs are plain.'],
  ['Nadia', 'And this one? Hamdan Printing, five hundred invoice books.'],
  ['Nour', 'Blue header — that\'s ours. We sold them the folders last month.'],
  ['Nadia', 'No, Nour. Look at the bottom. That\'s their address, not ours.'],
  ['Nour', 'You\'re right. Somebody printed it on our paper. That\'s my mistake — I gave them a blue sheet to copy the layout.'],
  ['Nadia', 'Then the paper isn\'t the test. The address is.'],
  ['Nour', 'The address is. I\'ll tell Hala before she files anything else.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – possessive adjectives and pronouns**',
  table(['Adjective (+ noun)', 'Pronoun (alone)', 'Example'], [
    ['my invoice', '**mine**', 'That one is **mine**.'],
    ['your file', '**yours**', 'Is this **yours**?'],
    ['his / her desk', '**his** / **hers**', 'The blue one is **hers**.'],
    ['our price list', '**ours**', 'Is it **ours** or **theirs**?'],
    ['their address', '**theirs**', '**Theirs** are plain.'],
  ], [1.3, 1, 2]),
  '⚠ The pronoun has **no noun after it**: _It\'s **ours**_, not ~~it\'s ours invoice~~.',
  '⚠ No apostrophe: _**ours**_, _**yours**_, _**theirs**_ — never ~~our\'s~~, ~~their\'s~~. But a **name** does take one: _**Nadia\'s** desk_, _**the company\'s** address_.',
  '⚠ _It\'s_ = _it is_. _Its_ = belonging to it. _The company changed **its** address._',
  '**Practise:** Complete with a possessive pronoun.',
  '1 Is this invoice ours or ______?  2 That desk is ______ (Nadia).  3 These files are ______ (we).  4 Is this pen ______ (you)?  5 The blue header is ______ (we); the plain one is ______ (they).',
  '**Useful phrases:**  Is it ours or theirs?  ·  Let me see.  ·  Somebody filed it wrong.  ·  You\'re right.  ·  That\'s my mistake.  ·  …isn\'t the test.',
  '**Pronunciation – the -s.** 🔊 **Track 5.10** Listen and repeat: _ours_ /ˈaʊəz/ · _yours_ /jɔːz/ · _theirs_ /ðeəz/ · _hers_ /hɜːz/. The ending is /z/, never /s/.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A finds papers or things that may belong to several people; B works out whose. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'This __________. Is it ours or theirs?'],
  ['B', 'Let me see. __________ — that\'s from __________, so it\'s __________.'],
  ['A', 'But it\'s in __________ with __________.'],
  ['B', 'Then somebody __________ wrong. Ours are __________; theirs are __________.'],
  ['A', 'And this one?'],
  ['B', '__________. That\'s __________.'],
  ['A', 'No — look at __________. That\'s __________, not __________.'],
  ['B', 'You\'re right. That\'s my mistake. Then __________ isn\'t the test. __________ is.'],
]));
out.push(table(['Role card 1 — a shared office', 'Role card 2 — a shared flat'], [[
  'Two companies share one office. Ours: blue folders, extension 212. Theirs: green folders, extension 305. Both use the same printer and the same paper.',
  'Three people share. Yours: the blue cup, the shelf on the left. His: everything in the fridge door. Hers: the red towel and the small table.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **test** they found for telling whose is whose. Was the first test the right one?'));
out.push(PHRASE_CARD(['Is it ours or theirs?', 'Let me see.', 'Ours are…', 'Theirs are…', 'That\'s my mistake.', '…isn\'t the test.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Put five small things from the class on a table. In **threes**, say whose each one is, and how you know. Then add something nobody can identify and decide what to do with it.'));
out.push(table(['Thing', 'Whose?', 'How we know'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The _______ is _______. We knew because _______. But nobody knew whose the _______ was, so we _______._'));
out.push(p('**Listener task:** write the best way the class found of telling two similar things apart.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _their\'s_ and _it\'s_ for _its_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short note Nour puts in the filing cabinet, and answer the questions.'));
out.push(box(null, [
  '**OUR INVOICES AND THEIRS — how to tell**   (after the mix-up of 14 April)',
  '**Ours** (we are owed money): our address at the **bottom**, our account number, and the words _Sham Trading Co._ above the total. They go in the **green** file: _Money in_.',
  '**Theirs** (we owe money): **their** address at the bottom and **their** account number. They go in the **red** file: _Money out_.',
  '**The paper is not the test.** We gave Hamdan Printing a blue sheet to copy our layout, so one of theirs looks exactly like ours. **The address at the bottom is the test.** Read it every time, even when the top looks familiar.',
  'If you are not sure, put it in the **yellow** tray and ask Nadia. An invoice in the wrong file is found in June, and by June nobody remembers anything.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is the test for telling the two apart?'));
out.push(item('2', 'Why is the paper not the test?'));
out.push(item('3', 'What do you do if you are not sure?'));
out.push(box('Writer\'s box', [
  '**Shape of a "how to tell them apart" note:** what caused it → **ours**: the signs and where they go → **theirs**: the signs and where they go → **the test that does not work**, and why → **the test that does** → what to do when you are not sure.',
  'Name the **test that does not work** and the reason. A note that only gives the right rule leaves the old wrong rule in everybody\'s head.',
  'Give a **third place** for "not sure" — a tray, a shelf, a person. Without it, people guess, and a guess goes in a file.',
  '⚠ Say **when the mistake is found**. _An invoice in the wrong file is found in June_ is what makes somebody read the address today.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a "how to tell them apart" note for two things that get confused where you work or live (25 words or more). Use the frame.'));
out.push(p('**______________ AND ______________ — how to tell**   (after ______________).  **Ours / The first:** ______________. They go ______________.  **Theirs / The second:** ______________. They go ______________.  **______________ is not the test**, because ______________. **______________ is the test.** If you are not sure, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Your partner describes **one** item in words; using the note alone, say which it is. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A test that really separates the two', ''],
  ['A wrong test named, with its reason', ''],
  ['Somewhere for each one to go', ''],
  ['Somewhere for "not sure"', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their **test**. The class decides whether a tired person at five o\'clock could apply it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that was **nobody\'s** job and went wrong because of it — at work, at home, in a shared space (35 words or more). Use at least four possessive pronouns.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _This happens everywhere._   ✓ _Whose job is it now?_   ? _a question about how it was fixed_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Is there one thing that is nobody\'s job in **every** story? Say what it is.'));
out.push(box('Homework', ['Write your final text. Then write eight sentences about things in your home, four with a possessive adjective (_my, her, their_) and four with a pronoun (_mine, hers, theirs_) (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.6 =======================
out.push(pb());
out.push(h2('5.6  That\'s 192,000. Out of 200,000'));
out.push(p('**Function:** taking payment, giving change and explaining a receipt   ·   **Grammar:** _this / that / these / those_   ·   **Pronunciation:** counting change aloud'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Point and say: _**This** is… (near, one) · **These** are… (near, more) · **That** is… (far, one) · **Those** are… (far, more)_'));
out.push(p('**b**  Count the change aloud: the bill is 192,000 and the customer gives 200,000. How much change, and in which notes?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How does the customer pay?   **A** card   **B** cash   **C** on account'));
out.push(p('**b**  Listen again. **1** How much change does he get?   **2** What does Nour explain on the receipt?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.11  Paying at the counter', [
  ['Nour', 'So that\'s two cartons of small bags, one box of labels, six rolls of tape and two rolls of string. The total is a hundred and ninety-two thousand.'],
  ['Mr Tarabishi', 'A hundred and ninety-two. Here — two hundred.'],
  ['Nour', 'Thank you. A hundred and ninety-two thousand out of two hundred thousand… that\'s eight thousand change. Five, six, seven, eight.'],
  ['Mr Tarabishi', 'Thank you. And this paper?'],
  ['Nour', 'That\'s your receipt. These two lines at the top are the order number and the date. This line is the total, and **this** one says VAT is included.'],
  ['Mr Tarabishi', 'And those small words at the bottom?'],
  ['Nour', 'Those say that if anything is wrong, you telephone us within three days and give the order number.'],
  ['Mr Tarabishi', 'Three days. And is this the invoice?'],
  ['Nour', 'No — this is the receipt, for cash at the counter. The invoice is the paper Nadia sends to shops that pay in thirty days. You don\'t need one.'],
  ['Mr Tarabishi', 'Good. Keep the receipt book safe, my daughter. That book is your memory.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – this / that / these / those, and taking payment**',
  table(['', 'Near me', 'Over there'], [
    ['one', '**this** receipt', '**that** paper'],
    ['more than one', '**these** two lines', '**those** small words'],
  ], [1, 1.4, 1.4]),
  '**Taking payment, in order:** say the **total** → take the money and **say what you took** → say the **change** → **count it aloud** → hand the receipt and say **what it is**.',
  '_That\'s 192,000 **out of** 200,000 — that\'s 8,000 change._  Then count: _five, six, seven, eight._',
  '⚠ Count the change **aloud and into the hand**. It is not politeness: it is the only record of what passed across the counter.',
  '**Practise:** Complete with _this, that, these_ or _those_.',
  '1 ___ is your receipt. (in your hand)  2 ___ two lines are the order number. (on the paper in front of you)  3 ___ small words at the bottom say you have three days.  4 Is ___ the invoice? (pointing at a paper on the far desk)  5 ___ boxes over there are for Homs.',
  '**Useful phrases:**  The total is…  ·  …out of…  ·  …change.  ·  That\'s your receipt.  ·  VAT is included.  ·  within three days',
  '**Pronunciation – counting change.** 🔊 **Track 5.12** Listen. Each note gets its own beat, and the voice rises until the last one, which falls: _five ↗ six ↗ seven ↗ **eight** ↘_. Repeat with four different amounts.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A serves; B pays and asks about the paper. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'So that\'s __________. The total is __________.'],
  ['B', '__________. Here — __________.'],
  ['A', 'Thank you. __________ out of __________… that\'s __________ change. __________.'],
  ['B', 'Thank you. And this paper?'],
  ['A', 'That\'s your receipt. These lines are __________. This line is __________.'],
  ['B', 'And those small words at the bottom?'],
  ['A', 'Those say __________.'],
]));
out.push(table(['Role card 1 — a pharmacy', 'Role card 2 — a car repair'], [[
  'Total 47,500. Customer gives 50,000. Receipt: date, item, price, and a line saying medicines cannot be returned.',
  'Total 680,000. Customer gives 700,000. Receipt: job number, parts, labour, and a line saying the repair is guaranteed for one month.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their counter scene for the class – **without the book**.'));
out.push(p('**Listener task:** did the server **count the change aloud**? Write the change you heard, then check the arithmetic.'));
out.push(PHRASE_CARD(['The total is…', '…out of…', '…change.', 'That\'s your receipt.', 'VAT is included.', 'within three days']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take payment from **three** colleagues for something real or invented. Each time, say the total, count the change aloud, and explain **one** line of the receipt. Make notes.'));
out.push(table(['What they bought', 'Total', 'Given', 'Change'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ bought _______. The total was _______, out of _______, so the change was _______. The line I explained was _______._'));
out.push(p('**Listener task:** check one piece of arithmetic out loud. Was any change wrong?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _this_ used for something far away and _these_ with a singular noun. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes for Hala, who is new at the counter, and answer the questions.'));
out.push(box(null, [
  '**THE RECEIPT, LINE BY LINE** — for the counter',
  '**Top two lines:** the order number and the date. The order number is how we find anything later. Never hand over a receipt with no number.',
  '**The middle:** one line for each item — quantity, unit, what it is, the price. The customer should be able to read it without asking.',
  '**The total line:** the number you said out loud, in figures. It must be the same number. If you change the total, write a new receipt; never change a figure with a pen.',
  '**Under the total:** _VAT included_. Say it as well as printing it — half of all price arguments are about VAT.',
  '**The small print:** three days to report a problem, and quote the order number.',
  '**Not an invoice.** A receipt says _this person has paid_. An invoice says _this company owes us money_, and only Nadia sends those. If a customer asks for an invoice, take their company name and tell Nadia; do not write one at the counter.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What must you never do to a figure on a receipt?'));
out.push(item('2', 'Why should you say "VAT included" as well as printing it?'));
out.push(item('3', 'What is the difference between a receipt and an invoice?'));
out.push(box('Writer\'s box', [
  '**Shape of a "line by line" page:** go **down the paper in order**, top to bottom → a bold name for each part → what it is for → the rule that goes with it → at the end, the thing it is **not**.',
  'Follow the **physical order of the paper**. The reader is holding it; anything else makes them hunt.',
  'Each part gets **one rule**, and the rule should be the one somebody has already broken: _never change a figure with a pen_.',
  '⚠ End with what the document is **not**, and who does that instead. Most office mistakes are one document doing another document\'s job.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Explain a real document line by line — a receipt, a form, a payslip, a ticket, a prescription (25 words or more). Use the frame.'));
out.push(p('**______________, LINE BY LINE** — for ______________.  **Top:** ______________. ______________.  **The middle:** ______________.  **The ______ line:** ______________. Never ______________.  **At the bottom:** ______________.  **Not a ______________.** A ______________ says ______________; a ______________ says ______________, and only ______________ does those.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Hold an imaginary copy of the document and follow your partner\'s page with your finger. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The parts come in the order they appear on the paper', ''],
  ['Each part has one rule', ''],
  ['It says what the document is **not**', ''],
  ['Somebody new could use it today', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _not a…_ line. The class says which two documents get confused most often where they work.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Explain a document from **your** life that confuses people — a bill, a government form, a bank message, a school report (35 words or more). Write it for somebody who is holding it and worried.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as the worried person. Write on a slip:  ★ _This calmed me down._   ✓ _What does the line about… mean?_   ? _the thing I would still telephone about_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the pages on the wall. Which document does the class find hardest to understand in real life? Why do you think it is written that way?'));
out.push(box('Homework', ['Write your final page. Then take a real receipt or bill from home and write the **one line** you do not understand, and who you would ask (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 5.7 =======================
out.push(pb());
out.push(h2('5.7  Review & Mediate: the invoice and the receipt'));
out.push(p('**Function:** telling a customer, in simple words, what an invoice and a receipt say   ·   **Review:** prices · comparatives · superlatives · _too / enough_ · possessives · _this / that_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 5 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Three ways to ask a price, with three different verbs.',
  '**2** _cheap · good · expensive_ — comparative **and** superlative of each.',
  '**3** Where does _enough_ go with an adjective, and where with a noun?',
  '**4** _ours · theirs · yours_ — why is there no apostrophe?',
  '**5** The difference between a receipt and an invoice, in one sentence.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer think is wrong?   **A** the total   **B** the date   **C** the VAT'));
out.push(p('**b**  Listen again. **1** What was the customer really looking at?   **2** How much does he actually owe?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 5.13  "This invoice is wrong"', [
  ['Customer', 'Nour, this invoice is wrong. I paid. I have the paper here.'],
  ['Nour', 'Let me look at both. Ah — these are two different papers, Mr Khalil.'],
  ['Customer', 'Two? They have the same number.'],
  ['Nour', 'Yes, and that is why they look the same. This one is the **receipt** — it says you paid a hundred and ninety-two thousand in cash on the seventh.'],
  ['Customer', 'And the other?'],
  ['Nour', 'That one is the **invoice** for the second order, the one on the twelfth. It has the same reference because it is the same customer account, but it is a different order.'],
  ['Customer', 'So I owe money again.'],
  ['Nour', 'You owe the second one — three hundred and ten thousand, due at the end of the month. The first one is paid and finished.'],
  ['Customer', 'Why do they look the same?'],
  ['Nour', 'They shouldn\'t. I\'ll ask Nadia to put PAID across the receipt from now on. You were right to come in.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – explaining two documents to a customer**',
  table(['To separate them', 'To explain each', 'To finish'], [
    ['These are two different papers.', 'This one is the receipt — it says you paid…', 'That one is paid and finished.'],
    ['They look the same because…', 'That one is the invoice for…, due…', 'You owe the second one: ___ , by ___ .'],
  ], [1.4, 2, 1.5]),
  '⚠ When somebody comes in angry, **look at both papers first** and say what each one **is** before you say who is right. _Let me look at both_ buys the time you need.',
  '⚠ End with the **number and the date** they actually have to act on, and say clearly what is **finished**. A customer who leaves unsure comes back twice.',
  '⚠ If the mistake is ours, say so plainly and say what will change: _They shouldn\'t. I\'ll ask Nadia to put PAID across the receipt._',
  '**Practise:** The invoice says: _Payment due within 30 days of the date of issue. Interest may be charged on overdue accounts._ Say it in easy English for a customer at the counter.',
  '**Useful phrases:**  Let me look at both.  ·  These are two different papers.  ·  This one is…  ·  That one is…  ·  …is paid and finished.  ·  You were right to come in.',
  '**Pronunciation – contrast between two papers.** 🔊 **Track 5.14** Listen. _**THIS** one is the receipt; **THAT** one is the invoice._ The two words carry the whole explanation. Repeat the four pairs.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads document 1 silently and explains it to B, who is a customer and has not read it. Then swap with document 2.'));
out.push(table(['Document 1 — for A', 'Document 2 — for B'], [[
  '**INVOICE 0412-7** · Sham Trading Co. · To: Khalil & Sons · Date of issue 12/4 · Goods 260,000 · VAT 50,000 · **Total due 310,000 SYP** · _Payment due within 30 days of the date of issue. Interest may be charged on overdue accounts._',
  '**RECEIPT 0407-2** · Sham Trading Co. · From: F. Tarabishi · Date 7/4 · **192,000 SYP received, cash** · VAT included · _Discrepancies must be notified within three working days, quoting the reference above._',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs explain their document for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one** number and the **one** date the customer must remember.'));
out.push(PHRASE_CARD(['Let me look at both.', 'This one is…', 'That one is…', '…is paid and finished.', 'You owe…, by…', 'You were right to come in.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a bill, an invoice or an official letter in formal English. Read it silently. Then explain it to **two** colleagues who are worried about it. Do not show them the paper.'));
out.push(table(['Who I told', 'What they must pay or do', 'By when'], [['', '', ''], ['', '', '']], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the document you mediated. This is the **fifth** unit of this book, and the mediation task comes back in every unit — so listen for whether the speaker separated what is **finished** from what is **owed**.'));
out.push(p('_It\'s a ______. It says ______ owes ______. It must be paid by ______. The part people get wrong is ______._'));
out.push(p('**Listener task:** write the number and the date. Then say whether you would have understood if you were worried.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Small boxes 800 each. 100+: 700 each._   **A** A hundred boxes cost 80,000. **B** You pay less for each box if you take 100. **C** There is no discount.',
  '**2**  _Total due 310,000. Payment within 30 days of issue._   **A** Pay 310,000 within a month. **B** Pay 30,000 today. **C** The order takes 30 days.',
  '**3**  _192,000 received, cash. VAT included._   **A** 192,000 is still owed. **B** This money has been paid. **C** VAT must be added.',
  '**4**  _Delivery free of charge over 300,000._   **A** Delivery always costs money. **B** Big orders are delivered free. **C** Delivery costs 300,000.',
  '**5**  _Wholesale list — not for counter customers._   **A** Show this list to everybody. **B** These prices are for shops, not the public. **C** The counter is closed.',
  '**6**  _Report discrepancies within 3 working days, quote ref._   **A** Telephone about a mistake within three days and give the number. **B** Mistakes cannot be reported. **C** You have three weeks.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about **money**, the three points are usually: **how much** · **by when** · **how to pay** (or what to do if something is wrong).',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Mr Khalil. Say: **(1)** the first paper is a receipt and that order is paid, **(2)** the second is an invoice for 310,000, **(3)** it is due at the end of the month. Use the frame.'));
out.push(p('Dear Mr Khalil, The first paper is ______________, so ______________. The second is ______________ for ______________. It is due ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  The first order is paid', ''], ['2  The second is an invoice for 310,000', ''], ['3  Due at the end of the month', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('You lent a friend money for something. Write a message (25 words or more). Say: **(1)** how much it was and what for, **(2)** when you need it back, **(3)** one easy way to give it to you.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write the **reply** your friend would send (20+ words), e.g. _Sorry, I forgot completely! I can give you half on Thursday and the rest after the 15th. Is that all right?_'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 5 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  How much ___ the tape cost?   a) do   b) does   c) is',
  '2  Aleppo is ___ than Homs.   a) cheaper   b) more cheap   c) more cheaper',
  '3  Of the three quotes, Zahra is ___.   a) cheaper   b) the cheapest   c) most cheap',
  '4  The narrow wrap isn\'t strong ___.   a) too   b) enough   c) very',
  '5  Is this invoice ours or ___?   a) their   b) theirs   c) their\'s',
  '6  ___ small words at the bottom are important. (far away)   a) These   b) Those   c) That',
  '7  Nine thousand is ___ expensive for this order.   a) too   b) very much   c) enough',
  '8  The small boxes are 800 ___ .   a) each   b) every   c) per',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 5.15** Listen at the counter. Complete the note.   Total: ______   Given: ______   Change: ______   Paid by: ______   Report problems within: ______'));
out.push(dlg('Track 5.15  Audio script (read after the check)', [
  ['Nour', 'So that\'s four cartons of small bags and two boxes of labels. The total is a hundred and forty thousand.'],
  ['Customer', 'Here — a hundred and fifty.'],
  ['Nour', 'A hundred and forty out of a hundred and fifty… that\'s ten thousand change.'],
  ['Customer', 'Thank you. And the paper?'],
  ['Nour', 'That\'s your receipt — cash, VAT included. If anything is wrong, telephone us within three days.'],
]));
out.push(p('**C  Writing.** Write a short price note for two items (25+ words). Give the price with its unit, say until when it is good, and whether VAT is included.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 5)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ ask a price and give one, always with its unit',
  '☐ compare two offers and say how much cheaper or faster one is',
  '☐ say which of three or more is the best, and why it is best **for us**',
  '☐ say something is too expensive, and say what would be enough',
  '☐ say whose invoice, money or mistake it is',
  '☐ take payment, count change aloud and explain a receipt',
  '☐ tell a customer in easy English what an invoice and a receipt say',
  '☐ write a price note, a comparison, a quote summary, an agreement email, a "how to tell them apart" note and a line-by-line explanation',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 5 · Student\'s Book');
