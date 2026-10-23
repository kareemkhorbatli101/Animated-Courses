// Proactive Business English A2 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'order · order form · quantity · unit · item · piece · packet · roll · carton · dozen · stock list · stock card · reorder · in stock · out of stock · shortage · reference number · total · sign off · check off · tick · minimum · spare · urgent · supplier code · each';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 4  Stock, Orders and Quantities'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**4.1**  count and say what you have, in the right words for each thing',
  '**4.2**  ask how much and how many, and answer with a quantity',
  '**4.3**  say what is finished, what is low and what you have none of',
  '**4.4**  describe a process in order, from first to finally',
  '**4.5**  place an order on the telephone',
  '**4.6**  check that an order is complete before you put the telephone down',
  '**4.7**  Review & Mediate: tell a colleague what the stock list and the order form say',
], C.lblue, C.navy));
out.push(sp());
out.push(box('How an order moves through Sham Trading', [
  '**1** The customer telephones or comes to the counter.   **2** Nour writes the order on the **order form** and gives it a **reference number**.   **3** Abu Yasser checks the **stock list** and ticks what is **in stock**.   **4** Mr Ayoub **signs off** anything over 500,000 SYP.   **5** The warehouse packs it and the driver takes it.   **6** Nadia sends the invoice.',
  'Anything the warehouse has **not** got goes on the **reorder** list the same day. Ms Shamsi in Aleppo sends on Tuesday — so a Wednesday telephone call costs a week.',
], C.lyellow, C.orange));

// ======================= CYCLE 4.1 =======================
out.push(pb());
out.push(h2('4.1  Two cartons, six rolls and a lot of tape'));
out.push(p('**Function:** counting and saying what you have   ·   **Grammar:** countable and uncountable nouns   ·   **Pronunciation:** plural endings'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which can you count **one, two, three**? Tick them.'));
out.push(table(['Can count ✓', 'Word'], [
  ['', 'box'], ['', 'paper'], ['', 'roll'], ['', 'tape'], ['', 'packet'], ['', 'water'], ['', 'item'],
], [1, 3]));
out.push(p('**b**  How do you count the ones you cannot count? _______ of paper · _______ of tape · _______ of water'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour writing?   **A** an invoice   **B** the stock list   **C** a letter'));
out.push(p('**b**  Listen again. **1** How many rolls of tape are there?   **2** Why does Abu Yasser not say "two papers"?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  Filling in the stock list', [
  ['Nour', 'Abu Yasser, I\'m writing the stock list. Tape?'],
  ['Abu Yasser', 'Thirty rolls. Not thirty tapes — thirty **rolls** of tape.'],
  ['Nour', 'Thirty rolls. And paper?'],
  ['Abu Yasser', 'Paper you count in packets. Six packets. Write six packets, not six papers.'],
  ['Nour', 'Six packets. Why not six papers?'],
  ['Abu Yasser', 'Because a paper is one sheet. If the head office reads six papers, they send six sheets.'],
  ['Nour', 'I understand. Boxes?'],
  ['Abu Yasser', 'Forty big, about a hundred small. And two cartons of gloves — twelve pairs in each carton.'],
  ['Nour', 'Two cartons. A dozen pairs each. And the wrap?'],
  ['Abu Yasser', 'No wrap. Write nothing in the box — write **none**. Nothing looks like you forgot.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – countable and uncountable**',
  table(['Countable (one, two, three)', 'Uncountable (no number in front)'], [
    ['a box – two box**es**  ·  a roll – six roll**s**', 'tape  ·  paper  ·  water  ·  money  ·  work'],
    ['**How many** boxes?', '**How much** tape?'],
    ['a few boxes  ·  not many boxes', 'a little tape  ·  not much tape'],
  ], [1.4, 1.4]),
  '**To count an uncountable thing, use a container or a unit:** a **roll** of tape · a **packet** of paper · a **carton** of gloves · a **bottle** of water · a **kilo** of sugar · a **piece** of wood',
  '⚠ _a paper_ = one sheet, or a newspaper. **Not** the material. For the material, say _some paper_ or _a packet of paper_.',
  '**Practise:** _How much_ or _how many_? Then answer with a unit.',
  '1 ___ tape have we got?  2 ___ boxes are there?  3 ___ paper do you need?  4 ___ gloves are in a carton?  5 ___ work is left?',
  '**Useful phrases:**  Thirty rolls of…  ·  Six packets of…  ·  a dozen  ·  twelve in each carton  ·  Write **none**, not nothing.',
  '**Pronunciation – plural endings.** 🔊 **Track 4.2** Listen and repeat: /s/ _packets, units, items_ · /z/ _rolls, cartons, orders_ · /ɪz/ _boxes, pieces, prices_',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A fills in a stock list; B gives the numbers with the right unit. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I\'m writing the stock list. __________?'],
  ['B', '__________ __________. Not __________ — __________ __________ of __________.'],
  ['A', '__________. And __________?'],
  ['B', '__________ you count in __________. __________ __________.'],
  ['A', 'And __________?'],
  ['B', 'None. Write **none**, not nothing.'],
]));
out.push(table(['Role card 1 — the stationery cupboard', 'Role card 2 — the café store'], [[
  'paper: 6 packets · ink: 2 cartridges · pens: 4 boxes of 10 · envelopes: about 300 · staples: none',
  'coffee: 8 kilos · sugar: 3 sacks · milk: 24 cartons · water: 60 bottles · tea: none',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the five quantities with their units. One mark for the number, one for the unit.'));
out.push(PHRASE_CARD(['How many…?', 'How much…?', 'rolls of…', 'packets of…', 'a dozen', 'none']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make a stock list of **one** real place — your kitchen cupboard, your desk drawer, the store at work. Then tell **two** colleagues and write theirs down.'));
out.push(table(['Place', 'Item', 'Quantity + unit'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.2, 1.4, 1.4]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______\'s _______ there are _______ of _______ and _______ of _______. There\'s a lot of _______ and no _______._'));
out.push(p('**Listener task:** write the unit word you had not heard before.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _two papers_ and _how much boxes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the stock card Abu Yasser keeps for one shelf, and answer the questions.'));
out.push(box(null, [
  '**STOCK CARD — Shelf C, packaging**   Checked: Thursday, 4.15 pm, by A.Y.',
  'Tape (48 mm): **30 rolls**   ·   minimum 20   ·   in stock',
  'Paper (A4, white): **6 packets**   ·   minimum 10   ·   **LOW — reorder**',
  'Boxes, big: **40**   ·   Boxes, small: **about 100**   ·   in stock',
  'Gloves: **2 cartons** (12 pairs in each)   ·   minimum 1   ·   in stock',
  'Plastic wrap, wide: **none**   ·   minimum 6 rolls   ·   **OUT OF STOCK — urgent**',
  'Note: count the small boxes properly on Sunday. "About a hundred" is not a number.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which item is low, and which is out of stock?'));
out.push(item('2', 'How many pairs of gloves are there in total?'));
out.push(item('3', 'What does Abu Yasser say about "about a hundred"?'));
out.push(box('Writer\'s box', [
  '**Shape of a stock card:** what shelf and when it was checked, and by whom → one line per item → quantity **with its unit** → the minimum → the state: _in stock · low · out of stock_ → a note about anything you could not do properly.',
  'Every quantity needs its **unit**: _30 rolls_, not _30_. A number alone on a stock card is an argument waiting to happen.',
  'Mark the **state** in words, not only by the number. The person reading it is in a hurry and will read the last column first.',
  '⚠ Write **none**, never an empty space. An empty space means _I did not check_, and somebody will have to walk to the shelf again.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a stock card for a real shelf, cupboard or drawer (25 words or more). Use the frame.'));
out.push(p('**STOCK CARD — ______________**   Checked: ______________, by ______.  ______________: ______ ______  ·  minimum ______  ·  ______________.  ______________: ______ ______  ·  minimum ______  ·  ______________.  Note: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('How to give good feedback (we use this all year)', [
  '**Not helpful:** "Good." / "Bad." / "Many mistakes."',
  '**Helpful:** "Every line has its unit — that\'s right. _Tape: 30_ needs _rolls_. Can you add the minimum for the boxes?"',
  'Be kind, be clear, and point to **one** thing to fix.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every quantity has its unit', ''],
  ['No empty spaces — _none_ is written where there is none', ''],
  ['The state is in words (_in stock · low · out of stock_)', ''],
  ['The date and the name of the person who checked', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one line **before** and **after** the fix. The class says what changed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the stock list you would leave for somebody who takes over your work, your kitchen or your shop for a week (35 words or more). Use at least five different unit words.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s list as the person taking over. Write on a slip:  ★ _I could work from this._   ✓ _Can you add the unit for…?_   ? _one thing I still don\'t know_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Walk and read. Collect every unit word the class used on one page of the board. How many are there?'));
out.push(box('Homework', ['Write your final list. Then open one cupboard at home and write ten lines of a stock card, each with a quantity, a unit and a state (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.2 =======================
out.push(pb());
out.push(h2('4.2  How much have we got left?'));
out.push(p('**Function:** asking about quantity and answering   ·   **Grammar:** _much / many / a lot of_   ·   **Pronunciation:** _a lot of_ linking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Ask your partner four questions about this room, two with **how much** and two with **how many**.'));
out.push(p('**b**  Put the quantity words from small to big: _a lot of · none · a little / a few · not much / not many · plenty of_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is asking the questions?   **A** Mr Ayoub   **B** Nadia   **C** a customer'));
out.push(p('**b**  Listen again. **1** How much tape is there?   **2** What is there plenty of?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  Before the Homs order', [
  ['Mr Ayoub', 'Nour, the Homs order is big. How many boxes have we got?'],
  ['Nour', 'Plenty of boxes — forty big and a hundred small.'],
  ['Mr Ayoub', 'And how much tape?'],
  ['Nour', 'Thirty rolls. That\'s enough for this order and the next one.'],
  ['Mr Ayoub', 'Good. How many pairs of gloves?'],
  ['Nour', 'Twenty-four. Two cartons.'],
  ['Mr Ayoub', 'That isn\'t many for a month.'],
  ['Nour', 'No, but we don\'t use many in the winter. In the summer we use a lot.'],
  ['Mr Ayoub', 'And paper? Nadia says there isn\'t much.'],
  ['Nour', 'Six packets, and the minimum is ten. It\'s on the reorder list.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – much / many / a lot of**',
  table(['', 'Countable (boxes)', 'Uncountable (tape)'], [
    ['**?**', '**How many** boxes?', '**How much** tape?'],
    ['**–**', 'not **many** boxes', 'not **much** tape'],
    ['**+**', '**a lot of** / **plenty of** boxes', '**a lot of** / **plenty of** tape'],
    ['small', 'a **few** boxes', 'a **little** tape'],
  ], [0.7, 1.5, 1.5]),
  '⚠ In a **+** sentence we say **a lot of**, not _much_ or _many_: _We\'ve got **a lot of** boxes._ (~~We\'ve got many boxes~~ is unusual in speech.)',
  '⚠ _a few_ = a small number, but **enough**. _few_ (no _a_) = almost none, and it is a complaint. Same with _a little_ and _little_.',
  '**Practise:** Complete with _much, many, a lot of, a few_ or _a little_.',
  '1 How ___ tape have we got?  2 There aren\'t ___ gloves.  3 We\'ve got ___ boxes — forty big ones.  4 There\'s only ___ paper left — six packets.  5 How ___ orders came today?',
  '**Useful phrases:**  How much / many…?  ·  Plenty of…  ·  That\'s enough for…  ·  That isn\'t many for…  ·  It\'s on the reorder list.',
  '**Pronunciation – linking.** 🔊 **Track 4.4** Listen and repeat: _a lot of boxes_ /ə ˈlɒtəv ˈbɒksɪz/ · _plenty of tape_ /ˈplentiəv teɪp/ · _not much paper_ /nɒt mʌtʃ ˈpeɪpə/',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks before a big job; B answers with a quantity and says whether it is enough. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The __________ is big. How many __________ have we got?'],
  ['B', 'Plenty of __________ — __________ and __________.'],
  ['A', 'And how much __________?'],
  ['B', '__________. That\'s enough for __________.'],
  ['A', 'How many __________?'],
  ['B', '__________. That isn\'t many for __________.'],
]));
out.push(table(['Role card 1 — a wedding of 200 people', 'Role card 2 — a school of 300 children'], [[
  'chairs: plenty (260) · plates: 180, not enough · water: a lot (40 boxes) · ice: a little · cooks: a few (3)',
  'books: a lot (1,200) · desks: not many (120) · paper: plenty · pens: few (20) · teachers: enough (18)',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **one** thing there is not enough of.'));
out.push(PHRASE_CARD(['How many…?', 'How much…?', 'Plenty of…', 'That\'s enough for…', 'That isn\'t many for…', 'a few / a little']));
out.push(stage('4', 'Your turn', 9));
out.push(p('You are organising something real — a lesson, a journey, a meal, a delivery. Ask **three** colleagues _how much_ and _how many_ questions about what they would need. Make notes.'));
out.push(table(['What we need', 'How much / many?', 'Enough?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.4, 1.4, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _For _______ we need _______. We\'ve got plenty of _______, but there isn\'t much _______ and there aren\'t many _______._'));
out.push(p('**Listener task:** write the thing the class most often has **not** got enough of.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _how much boxes_ and _we have much tape_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reorder list Nour sends to Mr Ayoub, and answer the questions.'));
out.push(box(null, [
  '**To:** Mr Ayoub   **From:** Nour   **Subject:** Reorder list — week of 7 April',
  'Dear Mr Ayoub,',
  'We have plenty of boxes (40 big, about 100 small) and enough tape (30 rolls) for this month.',
  'There isn\'t much paper: six packets, and the minimum is ten. There aren\'t many pairs of gloves either — twenty-four, and the summer starts next month, when we use a lot.',
  'There is no plastic wrap at all. This one is urgent: the Homs order goes on Tuesday and Ms Shamsi only sends on Tuesdays.',
  'May I order twelve rolls of wide wrap, ten packets of paper and four cartons of gloves? The total is about 310,000 SYP, so it does not need your signature — but I would rather you knew.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two things are low, and which one is finished?'));
out.push(item('2', 'Why is the wrap urgent?'));
out.push(item('3', 'Why does Nour write to Mr Ayoub, if the order does not need his signature?'));
out.push(box('Writer\'s box', [
  '**Shape of a reorder list:** what is **fine** (one short line) → what is **low**, with the number and the minimum → what is **finished**, and why it is urgent → what you want to order → the total → a question or an offer.',
  'Give the **number and the minimum together**. _Six packets_ means nothing; _six packets, minimum ten_ is a decision.',
  'Say **why** it is urgent with a date somebody else cares about: _the Homs order goes on Tuesday_.',
  '⚠ End with the **total** and say whether it needs a signature. A manager reading a list is really asking one question: _do I have to do anything?_',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a reorder list for your own workplace or home (25 words or more). Use the frame.'));
out.push(p('Dear ______________, We have plenty of ______________ and enough ______________. There isn\'t much ______________: ______, and the minimum is ______. There is no ______________ at all. This one is urgent, because ______________. May I order ______________? The total is about ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_much_ with uncountable, _many_ with countable', ''],
  ['Every low item has a number **and** a minimum', ''],
  ['The urgent one has a reason with a date', ''],
  ['A total at the end', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the **urgent** sentence. The class says which one they would act on today.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the list of what is needed for something in your own life — a journey, a party, the start of a school year, winter (35 words or more). Use _how much_ / _how many_ thinking: plenty, enough, not much, not many, none.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s list. Write on a slip:  ★ _The urgent one is clear._   ✓ _How much / many…?_   ? _one thing I think you forgot_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the lists on the wall. Find the thing that appears on the most lists — and the thing that appears on only one.'));
out.push(box('Homework', ['Write your final list. Then write eight questions about your home, four with _how much_ and four with _how many_, and answer them (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.3 =======================
out.push(pb());
out.push(h2('4.3  There\'s none left'));
out.push(p('**Function:** saying what is low, what is finished and what you have none of   ·   **Grammar:** _some / any / none_   ·   **Pronunciation:** sentence stress on the bad news'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say these three sentences about your own bag: _I\'ve got some ______. I haven\'t got any ______. There\'s none left._'));
out.push(p('**b**  Which is the strongest? _We haven\'t got much. · We haven\'t got any. · There\'s none left. · There\'s none at all._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What day is it?   **A** Sunday   **B** Thursday   **C** Tuesday'));
out.push(p('**b**  Listen again. **1** What has finished?   **2** What does Nour do about it, and why today?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  The Thursday shortage', [
  ['Abu Yasser', 'Nour. Bad news on a Thursday — the worst day for bad news.'],
  ['Nour', 'What is it?'],
  ['Abu Yasser', 'The small boxes. I counted properly, like I said. There aren\'t a hundred. There are nineteen.'],
  ['Nour', 'Nineteen? But the card says about a hundred.'],
  ['Abu Yasser', 'The card says about. That\'s why I don\'t like about. Somebody took four pallets for the Hama job and wrote nothing.'],
  ['Nour', 'And the Homs order needs sixty small boxes on Tuesday.'],
  ['Abu Yasser', 'It does. So we\'ve got nineteen and we need sixty. That\'s forty-one short.'],
  ['Nour', 'I\'ll telephone Ms Shamsi now. She sends on Tuesday — if I call tomorrow we get them next week.'],
  ['Abu Yasser', 'Call now. And from today, nobody takes a pallet without writing it on the card. Nobody.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – some / any / none, and how short you are**',
  table(['Meaning', 'How to say it'], [
    ['we have a quantity', 'We\'ve got **some** left.  ·  There are **some** on shelf C.'],
    ['we have zero (–)', 'We **haven\'t got any**.  ·  There **isn\'t any** left.'],
    ['we have zero (short answer)', '**None.**  ·  There\'s **none** left.  ·  **None at all.**'],
    ['we have some, but not enough', 'We\'ve got nineteen and we need sixty — that\'s **forty-one short**.'],
  ], [1.2, 2.6]),
  '**none** stands alone, with no noun after it: _How many are there? – **None**._  Compare: _There aren\'t **any** boxes._ (with the noun)',
  '⚠ _We are **short of** boxes_ · _We are **forty-one short**_. This is the sentence a manager needs: not _there is a problem_ but **how big** the problem is.',
  '**Practise:** Complete with _some, any_ or _none_.',
  '1 Have we got ___ small boxes? – ___ at all.  2 There aren\'t ___ left on shelf C.  3 I found ___ in the yard — about ten.  4 How much tape is there? – ___.  5 We\'ve got ___ , but not enough.',
  '**Useful phrases:**  There\'s none left.  ·  None at all.  ·  We need…  ·  That\'s ___ short.  ·  I\'ll telephone now.  ·  From today, nobody…',
  '**Pronunciation – stress the number.** 🔊 **Track 4.6** Listen. The two numbers carry the sentence: _We\'ve got **nineteen** and we need **sixty**._ Repeat the four sentences, making both numbers loud.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A brings bad news about a quantity; B works out how short they are and what to do. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Bad news. The __________. I counted properly. There aren\'t __________. There are __________.'],
  ['B', '__________? But the card says __________.'],
  ['A', 'Somebody took __________ and wrote nothing.'],
  ['B', 'And we need __________ on __________.'],
  ['A', 'So we\'ve got __________ and we need __________. That\'s __________ short.'],
  ['B', 'I\'ll __________ now. From today, nobody __________.'],
]));
out.push(table(['Role card 1 — a bakery', 'Role card 2 — a clinic'], [[
  'flour: card says 12 sacks, really 3 · Saturday needs 9 · the supplier delivers on Monday',
  'gloves: card says 20 boxes, really 6 · the week needs 15 · the next delivery is in ten days',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the two numbers and the difference. Did the speakers say how short they were?'));
out.push(PHRASE_CARD(['There\'s none left.', 'None at all.', 'We need…', 'That\'s ___ short.', 'I\'ll telephone now.', 'From today, nobody…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a time something ran out at work or at home. Tell **two** colleagues: what finished, how short you were, what you did. Then listen and make notes.'));
out.push(table(['Who', 'What ran out', 'How short?', 'What they did'], [['', '', '', ''], ['', '', '', '']], [1, 1.4, 1, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _In _______\'s story, the _______ ran out. They had _______ and they needed _______ — _______ short. They _______._'));
out.push(p('**Listener task:** write the rule that would have stopped it happening.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we haven\'t got no_ and _there are none boxes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the shortage note Nour writes the same afternoon, and answer the questions.'));
out.push(box(null, [
  '**SHORTAGE NOTE — small boxes**   Thursday, 4.40 pm',
  '**What we have:** 19 small boxes (counted this afternoon by A.Y.).',
  '**What we need:** 60 for the Homs order, Tuesday. **We are 41 short.**',
  '**Why:** four pallets went to the Hama job on 2 April and nobody wrote it on the stock card. The card still said "about 100".',
  '**What I have done:** telephoned Ms Shamsi at 4.30 today. She sends on Tuesdays, so 60 boxes leave Aleppo on Tuesday morning and reach us Tuesday afternoon — after the Homs lorry.',
  '**What I need from you:** may we send the Homs order on Wednesday instead, or shall we use big boxes for the small items? Big boxes cost more to send.',
  '**To stop it happening again:** nobody takes a pallet without writing it on the stock card, the same hour.',
  'Nour',
], 'FFFFFF', C.navy));
out.push(item('1', 'How short are they, exactly?'));
out.push(item('2', 'Why will the new boxes not solve the problem?'));
out.push(item('3', 'What are the two choices Nour gives her manager?'));
out.push(box('Writer\'s box', [
  '**Shape of a shortage note:** what we have → what we need → **how short**, in one number → why it happened → what I have **already** done → what I need from you, as a **choice** → the rule that stops it happening again.',
  'The number of the shortage is the whole note. _We are 41 short_ is a fact a manager can act on; _we have a problem with boxes_ is not.',
  'Write **what you have already done** before **what you need**. It changes the note from a complaint into a report.',
  '⚠ Give a **choice**, not an open question. _Shall we send on Wednesday, or use big boxes?_ can be answered in four words; _what shall we do?_ cannot.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a shortage note about something that ran out, real or invented (25 words or more). Use the frame.'));
out.push(p('**SHORTAGE NOTE — ______________**   ______________.  What we have: ______________. What we need: ______________. **We are ______ short.** Why: ______________. What I have done: ______________. What I need from you: ______________ or ______________? To stop it again: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Tick ✓ or cross ✗. Underline **one** thing to fix.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The shortage is **one number**', ''],
  ['Something you have **already** done', ''],
  ['A choice, not an open question', ''],
  ['A rule for next time', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _What I need from you_ line. The class answers it in **four words or fewer**. If they cannot, the line needs rewriting.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time something ran out in your own life — at home, on a journey, at a family event (35 words or more). Say how short you were, what you did, and what you do differently now.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _The same thing happened to me when…_   ✓ _Can you say how short you were?_   ? _a question about what you did_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Collect the rules people made afterwards. Which rule would work at Sham Trading?'));
out.push(box('Homework', ['Write your final text. Then write the one-line rule you would put on a wall to stop the same shortage happening, and say where exactly you would put it (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.4 =======================
out.push(pb());
out.push(h2('4.4  First we check it, then he signs it'));
out.push(p('**Function:** describing a process in order   ·   **Grammar:** _first, then, after that, finally_   ·   **Pronunciation:** pausing after the order word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put the steps of making tea in order. Then say them with _first, then, after that, finally_.'));
out.push(table(['Order', 'Step'], [['', 'pour the water'], ['', 'boil the water'], ['', 'put the tea in'], ['', 'wait three minutes'], ['', 'drink it']], [1, 3]));
out.push(p('**b**  Which words tell you the **order**, and which tell you the **time**? _first · at eight · then · on Tuesday · after that · finally_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour explaining?   **A** how to use the telephone   **B** how an order is checked   **C** how to count the stock'));
out.push(p('**b**  Listen again. **1** Who gives the order a reference number?   **2** When does Mr Ayoub sign?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  Teaching the new person', [
  ['Hala', 'Nour, show me the order. What happens first?'],
  ['Nour', 'First the customer telephones, or comes to the counter. I write the order on the form.'],
  ['Hala', 'And the number on the top?'],
  ['Nour', 'That\'s the reference number. I give it one straight away — then everybody can find it.'],
  ['Hala', 'Then?'],
  ['Nour', 'Then the form goes to Abu Yasser. He checks the stock list and ticks what is in stock.'],
  ['Hala', 'And if something isn\'t in stock?'],
  ['Nour', 'He writes it on the reorder list the same day. After that the form comes back to me and I telephone the customer.'],
  ['Hala', 'When does Mr Ayoub sign?'],
  ['Nour', 'Only over five hundred thousand. Finally the warehouse packs it and Nadia sends the invoice.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – describing a process in order**',
  table(['Word', 'Where it goes', 'Example'], [
    ['**First**', 'the first step', '**First** the customer telephones.'],
    ['**Then** / **Next**', 'the step after', '**Then** the form goes to the warehouse.'],
    ['**After that**', 'a step, with a small pause', '**After that** the form comes back to me.'],
    ['**Finally** / **At the end**', 'the last step', '**Finally** Nadia sends the invoice.'],
    ['**When** / **If**', 'a condition inside the process', '**If** something isn\'t in stock, he writes it on the list.'],
  ], [1, 1.3, 2]),
  '⚠ The order word goes at the **start** of the step, then a comma or a small pause: _**After that**, the form comes back._',
  '⚠ Use the **present simple** all through a process, even for something that happened once: _he **checks**_, not _he is checking_.',
  '**Practise:** Put the order words in: _first · then · after that · finally_.',
  '___ the customer telephones.  ___ Abu Yasser checks the stock.  ___ I telephone the customer back.  ___ Nadia sends the invoice.',
  '**Useful phrases:**  What happens first?  ·  Then?  ·  And if…?  ·  straight away  ·  the same day  ·  only over…',
  '**Pronunciation – pause after the order word.** 🔊 **Track 4.8** Listen. There is a small stop after the order word: _First ‖ the customer telephones._ · _After that ‖ the form comes back._ Repeat the five steps.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks how something is done; B explains it in order. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Show me __________. What happens first?'],
  ['B', 'First __________.'],
  ['A', 'And then?'],
  ['B', 'Then __________. He / She __________.'],
  ['A', 'And if __________?'],
  ['B', 'If __________, __________ the same day. After that __________.'],
  ['A', 'When does __________?'],
  ['B', 'Only when __________. Finally __________.'],
]));
out.push(table(['Role card 1 — a delivery arrives', 'Role card 2 — a customer returns something'], [[
  'driver rings at the gate → Abu Yasser counts the boxes at the gate → he signs the paper → the boxes go on the shelves → he writes the new numbers on the stock card → Nour tells accounts',
  'customer comes to the counter → Nour looks for the reference number → she checks the item is ours → Mr Ayoub signs if it is over 100,000 → the money goes back the same day → Nadia writes it in the book',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs explain their process for the class – **without the book**.'));
out.push(p('**Listener task:** write the steps as numbers 1–6. Did any step come in the wrong place?'));
out.push(PHRASE_CARD(['What happens first?', 'First…', 'Then…', 'After that…', 'Finally…', 'If… , …']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Explain **one** process from your own work or home to two colleagues — how you close the shop, cook a dish, start a machine, get a document stamped. They must be able to do it afterwards.'));
out.push(table(['Process', 'How many steps?', 'Could they do it?'], [['', '', ''], ['', '', '']], [2, 1, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Explain one colleague\'s process to the class in **four** steps only. Use _first, then, after that, finally_.'));
out.push(p('**Listener task:** write the step you think is easiest to forget.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _after_ used alone instead of _after that_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour writes for Hala, and answer the questions.'));
out.push(box(null, [
  '**HOW AN ORDER IS CHECKED AND SIGNED** — for the new person at the counter',
  '**1  Take the order.** The customer telephones or comes to the counter. Write it on the order form. Give it a reference number straight away — the date and a number, like 0407-3.',
  '**2  Check the stock.** The form goes to the warehouse. Abu Yasser ticks every item that is in stock. If something is not in stock, he writes it on the reorder list the **same day**.',
  '**3  Tell the customer.** The form comes back. Telephone the customer and say what is in stock and when it goes.',
  '**4  Get the signature.** Mr Ayoub signs off anything over 500,000 SYP. Under that, you do not need a signature.',
  '**5  Pack and send.** The warehouse packs it. The driver takes it and the customer signs.',
  '**6  Invoice.** Finally, Nadia sends the invoice, with the same reference number.',
  'The reference number is on every paper, from the first to the last. That is the whole system.',
], 'FFFFFF', C.navy));
out.push(item('1', 'When is the reference number given?'));
out.push(item('2', 'What happens if an item is not in stock?'));
out.push(item('3', 'What does the last line say is the whole system?'));
out.push(box('Writer\'s box', [
  '**Shape of a written process:** a numbered step for each stage → a **bold title** for each step → one or two sentences inside it → the conditions (_if…_) inside the step they belong to → a last line with the one thing that holds it all together.',
  'Spoken processes use _first, then, after that_. **Written** processes use **numbers** — a reader who is doing the job needs to find step 4 again without reading steps 1 to 3.',
  'Put the exception **inside** its step, not at the end: _If something is not in stock, he writes it on the reorder list._',
  '⚠ Write it for somebody who is holding the paper and does not know what to do next. Read it back and ask at each step: _and now?_',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a numbered process for **your** workplace or home (25 words or more). Use the frame for each step.'));
out.push(p('**HOW ______________** — for ______________.  **1  ______________.** ______________.  **2  ______________.** ______________. If ______________, ______________.  **3  ______________.** ______________.  **4  ______________.** Finally, ______________.  ______________ is on every ______________. That is the whole system.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s process and **do it in your head**, step by step. Stop at the first place where you do not know what to do next. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbered steps with bold titles', ''],
  ['Every _if_ is inside the step it belongs to', ''],
  ['Present simple all through', ''],
  ['You could do the job from this page alone', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students say where they stopped in their partner\'s process. The class decides whether it was a missing step or a missing word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write how to do something you are good at, for somebody who has never done it (35 words or more). Six steps or fewer. Put at least one _if_ inside a step.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s process. Write on a slip:  ★ _I could do this._   ✓ _What happens if…?_   ? _the step I would get wrong_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Choose one process and have the class do it, step by step, with a pen and paper or by miming. Where does it break?'));
out.push(box('Homework', ['Write your final process. Then write the **same** process in only three steps, for somebody who already knows the job (20+ words). What did you leave out, and why was it safe to?'], C.lblue, C.navy));

// ======================= CYCLE 4.5 =======================
out.push(pb());
out.push(h2('4.5  I\'d like to order twelve rolls'));
out.push(p('**Function:** placing an order on the telephone   ·   **Grammar:** _Can I…? / I\'d like…_   ·   **Pronunciation:** _I\'d like_ and numbers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say these three in a shop, then on the telephone: _I want ten boxes. · I\'d like ten boxes, please. · Can I have ten boxes, please?_ Which would you use with a supplier you have known for years?'));
out.push(p('**b**  Say the numbers out loud: _12 · 20 · 13 · 30 · 15 · 50 · 60 · 16 · 500,000_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour order?   **A** wrap and paper   **B** wrap, paper and gloves   **C** boxes only'));
out.push(p('**b**  Listen again. **1** What is the reference number?   **2** When will the order arrive?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  The call to Aleppo', [
  ['Ms Shamsi', 'Shamsi Packaging, good morning.'],
  ['Nour', 'Good morning, Ms Shamsi. Nour Mansour from Sham Trading in Damascus. Can I place an order, please?'],
  ['Ms Shamsi', 'Of course, Nour. Go ahead.'],
  ['Nour', 'I\'d like twelve rolls of the wide plastic wrap, ten packets of A4 paper and four cartons of gloves.'],
  ['Ms Shamsi', 'Twelve wide wrap, ten A4, four cartons of gloves. Which size gloves?'],
  ['Nour', 'Large, please. And sixty small boxes — that one is urgent.'],
  ['Ms Shamsi', 'Sixty small boxes. Six-zero?'],
  ['Nour', 'Six-zero, yes. Sixty.'],
  ['Ms Shamsi', 'Good. The reference is S-four-one-nine. The total is three hundred and forty thousand. It leaves here Tuesday morning and reaches you Tuesday afternoon.'],
  ['Nour', 'S-419, three hundred and forty thousand, Tuesday afternoon. Thank you, Ms Shamsi.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – placing an order**',
  table(['Step', 'What you say'], [
    ['Say who you are', 'This is ___ from ___ in ___.'],
    ['Ask', '**Can I** place an order, please?'],
    ['Order', '**I\'d like** twelve rolls of…  ·  **Can I have** sixty…?'],
    ['Say which one', 'The **wide** one, please.  ·  **Large**, please.'],
    ['Mark the urgent one', 'That one is **urgent**.'],
    ['Read it back', 'S-419, three hundred and forty thousand, Tuesday afternoon.'],
  ], [1.1, 2.4]),
  '⚠ **I\'d like** = _I would like_. It is the polite, normal way to order. _I want_ is not rude in Arabic, but it **is** direct in English — use _I\'d like_ with a supplier.',
  '⚠ Always **read the order back** at the end: the quantity, the reference and the date. This is the one habit that stops most order mistakes.',
  '**Practise:** Make the order polite and complete.',
  '1 I want tape. → ______  2 Give me ten boxes. → ______  3 I need gloves. (which size?) → ______  4 Order wrap, quickly. → ______  5 (read back) ______',
  '**Useful phrases:**  Can I place an order?  ·  Go ahead.  ·  I\'d like…  ·  Which size?  ·  That one is urgent.  ·  Six-zero?',
  '**Pronunciation – 13 or 30?** 🔊 **Track 4.10** Listen. _thir**TEEN**_ (stress at the end) · _**THIR**ty_ (stress at the start). On the telephone, say the digits: _six-zero_ for 60. Repeat the pairs: 13/30 · 14/40 · 15/50 · 16/60.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, back to back. A places the order; B takes it, asks one question and gives a reference and a date. Then swap.'));
out.push(dlg(null, [
  ['A', 'Good morning. __________ from __________. Can I place an order, please?'],
  ['B', 'Of course. Go ahead.'],
  ['A', 'I\'d like __________, __________ and __________.'],
  ['B', '__________. Which __________?'],
  ['A', '__________, please. And __________ — that one is urgent.'],
  ['B', 'The reference is __________. The total is __________. It reaches you __________.'],
  ['A', '__________, __________, __________. Thank you.'],
]));
out.push(table(['Role card 1 — order from a printer', 'Role card 2 — order from a food supplier'], [[
  '2,000 invoice forms (white) · 500 business cards · 50 folders with the company name · the cards are urgent, for Sunday',
  '20 kilos of rice · 6 cartons of oil (5 litres each) · 40 kilos of sugar · the oil is urgent, the shop is empty',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs make their call for the class – **without the book**.'));
out.push(p('**Listener task:** write the order as the supplier would. Then check it against the caller\'s book. Any differences?'));
out.push(PHRASE_CARD(['Can I place an order?', 'I\'d like…', 'Which size?', 'That one is urgent.', 'The reference is…', 'It reaches you…']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Order something you really need — for your work, your home, a journey. Telephone **two** different colleagues (back to back). Each time, read the order back at the end.'));
out.push(table(['What I ordered', 'Reference', 'Total', 'Arrives'], [['', '', '', ''], ['', '', '', '']], [2, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I ordered _______ from _______. The reference is _______ and it arrives _______. The total is _______._'));
out.push(p('**Listener task:** write one order that was **not** read back, and say what could go wrong.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I want_ and for 13/30 confusions. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the order Nour sends by email after the call, and answer the questions.'));
out.push(box(null, [
  '**To:** Shamsi Packaging — Ms Dima Shamsi   **From:** Nour Mansour, Sham Trading   **Subject:** Order S-419 — confirmation',
  'Dear Ms Shamsi,',
  'Thank you for taking my order this morning. This email confirms it in writing:',
  '**S-419 · 7 April**   ·   12 rolls — plastic wrap, **wide**   ·   10 packets — A4 paper, white   ·   4 cartons — gloves, **large** (12 pairs each)   ·   60 — small boxes **(urgent)**',
  'Total: **340,000 SYP**. Delivery: Tuesday 11 April, afternoon, to the yard at Mezzeh — not to the trade counter.',
  'Please confirm the small boxes leave on Tuesday morning. If they cannot, telephone me today on 011 612 4400, extension 212, because we must change our own delivery to Homs.',
  'Thank you,',
  'Nour Mansour',
], 'FFFFFF', C.navy));
out.push(item('1', 'Why does Nour write, when she has already telephoned?'));
out.push(item('2', 'Where must the delivery go, and where must it **not** go?'));
out.push(item('3', 'What does Nour ask Ms Shamsi to do today, and why?'));
out.push(box('Writer\'s box', [
  '**Shape of a written order:** thank them for the call → _this email confirms it in writing_ → the reference and the date → **one line per item**: quantity — unit — what it is — which one → the total → the delivery date **and place** → what you want them to confirm, with a reason → your name and number.',
  'One line for each item, in the same order every time: **quantity → unit → item → which one**. A supplier reading twenty orders a day finds the mistake in a list, never in a paragraph.',
  'Mark the urgent one **in the list**, not in a sentence underneath. Sentences underneath do not get read.',
  '⚠ Say where the delivery goes **and where it does not**. Half of all wrong deliveries are right goods at the wrong door.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the email that confirms an order you placed (25 words or more). Use the frame.'));
out.push(p('**Subject:** Order ______ — confirmation.  Dear ______________, Thank you for taking my order ______________. This email confirms it in writing:  **______ · ______**  ·  ______ ______ — ______________  ·  ______ ______ — ______________ **(urgent)**.  Total: ______________. Delivery: ______________, to ______________ — not to ______________. Please confirm ______________, because ______________.  ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Read your partner\'s order as the **supplier** and write what you would send. Compare. Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One line per item: quantity — unit — item — which one', ''],
  ['The urgent item marked in the list', ''],
  ['A total, a date **and** a place', ''],
  ['A telephone number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three pairs show the order and what the supplier would have sent. Where they differ, find the missing word.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an order for something with **options** — a size, a colour, a date, a quantity you are not sure about (35 words or more). Make it impossible for the supplier to get it wrong.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s order as a supplier who wants to send the **wrong** thing. Write on a slip:  ★ _You stopped me here._   ✓ _I could still send…_   ? _one thing you did not say_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Find the order nobody could get wrong. Count its words. Is it the longest one?'));
out.push(box('Homework', ['Write your final order. Then write the supplier\'s **reply**: confirm three items, say one is not available until next month, and offer something else (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.6 =======================
out.push(pb());
out.push(h2('4.6  Is that everything?'));
out.push(p('**Function:** checking that an order is complete   ·   **Grammar:** questions with _all / any_   ·   **Pronunciation:** the rising check question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which of these really check, and which only sound like checking? _Is that everything? · OK? · Have I got everything? · Right? · Shall I read it back? · Fine?_'));
out.push(p('**b**  Your partner says a list of five things quickly. Read it back. How many did you get?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was nearly forgotten?   **A** the string   **B** the tape   **C** the labels'));
out.push(p('**b**  Listen again. **1** How does Nour check?   **2** What does Mr Tarabishi add at the end?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  At the trade counter', [
  ['Mr Tarabishi', 'So: two cartons of the small bags, one box of labels, and the usual tape.'],
  ['Nour', 'Two cartons of small bags, one box of labels, and six rolls of tape. Is that everything?'],
  ['Mr Tarabishi', 'That\'s everything.'],
  ['Nour', 'Have I missed anything from last month? You usually take string.'],
  ['Mr Tarabishi', 'Ah — string. Yes. Two of the big ones. You see, this is why I come here and not to the other place.'],
  ['Nour', 'Two big rolls of string. Anything else at all?'],
  ['Mr Tarabishi', 'No, that\'s all. How much is it?'],
  ['Nour', 'One moment. The total is one hundred and ninety-two thousand.'],
  ['Mr Tarabishi', 'And the reference, for when I telephone?'],
  ['Nour', 'Zero-seven-zero-four, dash two. Shall I read the whole order back?'],
  ['Mr Tarabishi', 'Read it back. My memory is not what it was.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – checking with all and any**',
  table(['Question', 'When you use it'], [
    ['Is that **everything**?', 'the normal check, at the end of a list'],
    ['Is that **all**?', 'the same — but it can sound impatient; use a warm voice'],
    ['Have I **missed anything**?', 'the strong check: it invites them to add'],
    ['**Anything else** at all?', 'the last chance, after they have said no once'],
    ['**All** of them, or only the large ones?', 'checking **which** ones'],
    ['Shall I **read it back**?', 'the check that finds real mistakes'],
  ], [1.4, 2.2]),
  '⚠ _Is that everything?_ gets _yes_ even when it is not. _Have I missed anything?_ and a small silence get the string. Ask the second one when the order matters.',
  '⚠ _any_ in questions: _Is there **any**thing else?_  ·  _all_ for the whole group: _**All** of them?_',
  '**Practise:** Write the check question.',
  '1 You have written four items. → ______  2 They said "no" once, but you think there is more. → ______  3 You want to be sure of the quantity. → ______  4 It is a big order. → ______  5 They said "the gloves" but not which size. → ______',
  '**Useful phrases:**  Is that everything?  ·  Have I missed anything?  ·  Anything else at all?  ·  One moment.  ·  Shall I read it back?  ·  That\'s all.',
  '**Pronunciation – the rising check.** 🔊 **Track 4.12** Listen. A real check **rises** and then **stops**, so the other person must speak: _Have I missed any↗thing?_ ‖ (silence). Repeat the five checks, and leave the silence.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes an order at a counter; B gives it in pieces and forgets one thing on purpose. A must find it. Then swap.'));
out.push(dlg(null, [
  ['A', 'So: __________, __________ and __________. Is that everything?'],
  ['B', 'That\'s everything.'],
  ['A', 'Have I missed anything from last time? You usually take __________.'],
  ['B', 'Ah — __________. Yes. __________.'],
  ['A', '__________. Anything else at all?'],
  ['B', 'No, that\'s all. How much is it?'],
  ['A', 'One moment. The total is __________. Shall I read the whole order back?'],
]));
out.push(table(['Role card 1 — B is a café owner', 'Role card 2 — B is a builder'], [[
  'Asks for: 4 kilos of coffee, 2 sacks of sugar, 100 paper cups. Forgets: the small spoons (takes 1,000 every month).',
  'Asks for: 20 bags of cement, 3 rolls of wire. Forgets: the gloves (always takes 2 cartons with cement).',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their counter scene for the class – **without the book**.'));
out.push(p('**Listener task:** write the question that found the forgotten item. Was it _Is that everything?_ or something stronger?'));
out.push(PHRASE_CARD(['Is that everything?', 'Have I missed anything?', 'Anything else at all?', 'One moment.', 'Shall I read it back?', 'That\'s all.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('In **threes**: one takes an order, one gives it, one listens and counts the checks. Give a real order — a shopping list, a list of jobs, a list of documents. Change roles three times.'));
out.push(table(['Order taker', 'How many checks?', 'Anything forgotten?'], [['', '', ''], ['', '', ''], ['', '', '']], [1.2, 1.2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _When _______ took my order, he / she asked _______ times. He / She found _______ / missed _______._'));
out.push(p('**Listener task:** write the number of checks in the best performance. Is more always better?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _Is that all things?_ Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the counter slip Nour gives Mr Tarabishi, and answer the questions.'));
out.push(box(null, [
  '**SHAM TRADING CO.** — trade counter   ·   **Order 0704-2**   ·   7 April   ·   Served by: Nour',
  '**Customer:** F. Tarabishi, Souq al-Hamidiyeh   ·   **Telephone:** 0955 612 043',
  '2 cartons — small bags   ·   1 box — labels   ·   6 rolls — tape   ·   2 rolls — string, large',
  '**Total: 192,000 SYP**   ·   Paid: cash   ·   **Checked with the customer: ✓**',
  'If anything is missing or wrong, telephone 011 612 4400 extension 212 **within three days** and quote the order number 0704-2.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the tick next to "Checked with the customer" mean?'));
out.push(item('2', 'What must the customer do if something is wrong, and by when?'));
out.push(item('3', 'What must he say when he telephones?'));
out.push(box('Writer\'s box', [
  '**Shape of a counter slip:** the company and the counter → the order number and the date → **who served** → the customer and a telephone number → one line per item → the total and how it was paid → the **check mark** → what to do if something is wrong, with a **time limit** and the number to quote.',
  'The order number appears **twice**: at the top, and again in the last line. People read the last line when something has gone wrong, and that is when they need it.',
  '**Who served** matters. A slip with a name on it is a slip somebody is answerable for, and the mistakes go down.',
  '⚠ Give a **time limit** for complaints. Without one, a customer comes back in August about an order from April, and nobody can check anything.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a counter slip for an order — real or invented (25 words or more). Use the frame.'));
out.push(p('**______________** — ______________  ·  **Order ______**  ·  ______  ·  Served by: ______.  **Customer:** ______________  ·  **Telephone:** ______________.  ______ ______ — ______________  ·  ______ ______ — ______________.  **Total: ______**  ·  Paid: ______  ·  **Checked with the customer: ______**. If anything is wrong, telephone ______________ within ______ and quote ______.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Be the customer three days later with a problem. Can you do everything the slip tells you to? Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The order number appears twice', ''],
  ['The name of the person who served', ''],
  ['A total and how it was paid', ''],
  ['A time limit and a telephone number', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the **last line** of their slip. The class says whether a worried customer could act on it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the slip, receipt or note you would want to **receive** after something important — a repair, a document, a payment, a hospital visit (35 words or more). What would you want on it that is usually missing?'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s slip. Write on a slip:  ★ _I would feel safe with this._   ✓ _Can you add…?_   ? _what I would still telephone about_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Collect on the board everything the class wanted that real slips usually leave out. There is usually one answer everybody gives.'));
out.push(box('Homework', ['Write your final slip. Then look at a real receipt you have at home and write five sentences about what it tells you and what it does not (20+ words).'], C.lblue, C.navy));

// ======================= CYCLE 4.7 =======================
out.push(pb());
out.push(h2('4.7  Review & Mediate: the stock list and the order form'));
out.push(p('**Function:** telling a colleague, in simple words, what a stock list and an order form say   ·   **Review:** countable and uncountable · _much / many_ · _none_ · process order · ordering · checking'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** Why do we write _six packets of paper_ and not _six papers_?',
  '**2** _How much_ or _how many_: ______ tape? ______ boxes?',
  '**3** We have nineteen and we need sixty. Say it in one sentence with _short_.',
  '**4** The four order words for a process, in order.',
  '**5** The check question that is stronger than _Is that everything?_',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Abu Yasser want to know?   **A** the total   **B** what he must send on Tuesday   **C** the customer\'s name'));
out.push(p('**b**  Listen again. **1** How many small boxes must go?   **2** What must he **not** send?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  Reading the order form together', [
  ['Abu Yasser', 'Nour, this form. Numbers everywhere, small letters, three columns. What must I send on Tuesday?'],
  ['Nour', 'It\'s order 0411-1, for Homs. I\'ll tell you only what you pack.'],
  ['Abu Yasser', 'Only what I pack. Good.'],
  ['Nour', 'Sixty small boxes, ten packets of A4 paper, and four cartons of gloves — large.'],
  ['Abu Yasser', 'Sixty, ten, four. And the wrap in the last line?'],
  ['Nour', 'Don\'t send the wrap. The wrap comes **to** us from Aleppo on Tuesday — it\'s on the same page, but it\'s the reorder list, not the order.'],
  ['Abu Yasser', 'Two lists on one page. That is how mistakes are made.'],
  ['Nour', 'I know. The order has the reference at the top; the reorder list has no reference.'],
  ['Abu Yasser', 'So: reference at the top, I pack it. No reference, it is coming to me.'],
  ['Nour', 'Exactly that. And the gloves are large, not medium — that is the line people get wrong.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – saying what a form says**',
  table(['To start', 'To give only what matters', 'To warn'], [
    ['It\'s order ___ , for ___ .', 'I\'ll tell you only what you ___ .', 'Don\'t send the ___ .'],
    ['It\'s the ___ list, not the ___ .', 'Sixty, ten, four.', 'That is the line people get wrong.'],
  ], [1.4, 1.6, 1.6]),
  '⚠ With a **form**, say **which form it is** first, then give only the part that belongs to the listener. A form read from top to bottom is useless to somebody who only packs.',
  '⚠ Then give the **one line people get wrong**. Every form has one. Naming it is the most useful thing a mediator does.',
  '**Practise:** The form says: _Items marked (R) are for reorder and are not to be dispatched. Dispatch only items bearing the order reference._ Say it in easy English for a warehouse worker.',
  '**Useful phrases:**  It\'s order ___ , for ___ .  ·  I\'ll tell you only…  ·  Don\'t send…  ·  It\'s on the same page, but…  ·  That is the line people get wrong.',
  '**Pronunciation – grouping numbers.** 🔊 **Track 4.14** Listen. A list of quantities is said in one group with a fall at the end: _Sixty, ten, **four**._ Repeat the four lists.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads form 1 silently and tells B only what B must do. B closes the book. Then swap with form 2.'));
out.push(table(['Form 1 — for A', 'Form 2 — for B'], [[
  '**ORDER 0411-1** · Customer: Tarabishi Stores, Homs · Dispatch Tuesday 11/4 · 60 ea small boxes · 10 pkt A4 paper · 4 ctn gloves (L) · **(R) 12 rl wrap, wide — reorder, do not dispatch** · Total 340,000 SYP · Authorised: K.A.',
  '**ORDER 0412-3** · Customer: Hamdan Printing, Jaramana · Dispatch Wednesday 12/4 · 2,000 ea invoice forms · 50 ea folders, printed · 500 ea cards **(urgent — Sunday)** · **(R) 3 ctn ink — reorder, do not dispatch** · Total 185,000 SYP · Authorised: not required under 500,000',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs mediate their form for the class – **without the book**.'));
out.push(p('**Listener task:** write only the things that leave the warehouse. Did the speaker warn you about the (R) line?'));
out.push(PHRASE_CARD(['It\'s order…, for…', 'I\'ll tell you only…', 'Don\'t send…', 'It\'s on the same page, but…', 'That\'s the line people get wrong.', 'Exactly that.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a form in formal English. Read it silently. Then tell **two** colleagues only the part that is theirs. Do not show them the paper.'));
out.push(table(['Who I told', 'Their part of the form', 'The line they could get wrong'], [['', '', ''], ['', '', '']], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the form you mediated. This is the **fourth** unit of this book, and the mediation task comes back in every unit — so listen for what the speaker left **out**.'));
out.push(p('_It\'s a ______. I told ______ only ______. The line people get wrong is ______, because ______._'));
out.push(p('**Listener task:** write what the speaker left out on purpose. Was it right to leave it out?'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Tape: 30 rolls. Minimum 20. In stock._   **A** Order more tape. **B** There is enough tape. **C** There is no tape.',
  '**2**  _Paper: 6 pkt. Minimum 10. LOW — reorder._   **A** There is plenty of paper. **B** Order paper. **C** Paper has finished.',
  '**3**  _(R) 12 rl wrap — do not dispatch._   **A** Send twelve rolls of wrap. **B** The wrap is coming to us. **C** There are no rolls of wrap.',
  '**4**  _Authorised: not required under 500,000._   **A** The manager must sign. **B** No signature is needed. **C** The order is over 500,000.',
  '**5**  _Nour — 19 small boxes only. Counted. — A.Y._   **A** There are about a hundred boxes. **B** Nineteen boxes were counted. **C** Nineteen boxes were sent.',
  '**6**  _Report faults within 3 days, quote 0704-2._   **A** Telephone any time with the order number. **B** Telephone in the first three days and give the number. **C** The order takes three days.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more).** The task gives you **three** things to write about. All three must be there, or you lose marks even if your English is perfect.',
  '**Shape:** greeting → the three points, one short sentence each → a friendly close and your name.',
  'For a message about an **order**, the three points are usually: **what** and **how many** · **when** · **one warning**.',
  '⚠ Count the three points **before** you write, and tick them off **after**.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message to Abu Yasser about order 0411-1. Say: **(1)** what goes to Homs and how many, **(2)** that it leaves on Tuesday, **(3)** that the wrap in the last line must **not** be sent. Use the frame.'));
out.push(p('Dear Abu Yasser, Please pack ______________ for ______________. It leaves on ______________. Please **don\'t** send ______________ — it is ______________. Thank you.   ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count your partner\'s three points. Tick each one.'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [['1  What goes, and how many', ''], ['2  It leaves on Tuesday', ''], ['3  Don\'t send the wrap', ''], ['25 words or more', '']], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 12));
out.push(p('A friend is buying things for you while you are away. Write a message (25 words or more). Say: **(1)** what to buy and how much, **(2)** where to buy it, **(3)** one thing **not** to buy.'));
out.push(...lines(5));
out.push(box('Homework', ['Write your final message. Then write your friend\'s **reply** (20+ words), e.g. _I got everything except the big bag of rice — they only had small ones. I bought three. Is that enough?_'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  We\'ve got six ___ of paper.   a) papers   b) packets   c) pieces of packet',
  '2  How ___ tape have we got?   a) many   b) much   c) lot',
  '3  There are ___ small boxes — nineteen only.   a) much   b) a lot of   c) not many',
  '4  How many are left? — ___.   a) No   b) Any   c) None',
  '5  ___ the warehouse packs it and Nadia sends the invoice.   a) Finally   b) At last   c) After',
  '6  ___ twelve rolls of the wide wrap, please.   a) I want   b) I\'d like   c) I\'m liking',
  '7  Have I ___ anything?   a) missed   b) lost   c) forgot',
  '8  We\'ve got nineteen and we need sixty — that\'s forty-one ___.   a) less   b) short   c) few',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 4.15** Listen to an order at the counter. Complete the slip.   Item 1: ______   Item 2: ______   Item 3: ______   Total: ______   Reference: ______'));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Customer', 'Four cartons of the small bags and two boxes of labels, please.'],
  ['Nour', 'Four cartons of small bags, two boxes of labels. Is that everything?'],
  ['Customer', 'That\'s everything.'],
  ['Nour', 'Have I missed anything? You usually take tape.'],
  ['Customer', 'Ah — six rolls of tape. Yes.'],
  ['Nour', 'Six rolls of tape. The total is one hundred and forty thousand. The reference is 0708-1.'],
]));
out.push(p('**C  Writing.** Write a short message ordering three things from a supplier (25+ words). Give the quantity and unit for each, and say which one is urgent.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ count things with the right unit word, and say _none_ when there is none',
  '☐ ask _how much_ and _how many_, and answer with a real quantity',
  '☐ say what is low, what is finished, and exactly how short we are',
  '☐ describe a process in order, in speech and in numbered steps',
  '☐ place an order on the telephone and read it back',
  '☐ check that an order is complete before I finish',
  '☐ tell a colleague in easy English what a stock list and an order form say',
  '☐ write a stock card, a reorder list, a shortage note, a written process, an order email and a counter slip',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
