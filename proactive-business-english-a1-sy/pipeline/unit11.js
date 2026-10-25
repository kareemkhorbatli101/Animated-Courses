// Proactive Business English A1 · Syria Edition · Book 2 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'customer · to greet · what would you like · price · price list · SYP · how much · altogether · to add up · change · receipt · to pay · cash · to give change · see you · come again · to wrap · bag · each · cheap · expensive · to cost';
const AHEAD_AT_A2 = 'price list · receipt · cash';

out.push(h1('Unit 11  The Customer at the Counter'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**11.1**  greet a customer',
  '**11.2**  ask what they want',
  '**11.3**  read a price aloud',
  '**11.4**  ask how many and how much',
  '**11.5**  give a receipt, and say what is on it',
  '**11.6**  close well — the last ten seconds',
  '**11.7**  Review: the price list — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ A customer is at the counter for about ninety seconds', [
  '**In that time you will say eight sentences and handle money.** ⚠ **Six of the eight are fixed and you will say them forty times a day.**',
  '⚠ **The two that are not fixed are the price and the total**, **and those are the two that cost money when they go wrong.** **Unit 2 was the count. Unit 5 was the note. This unit is the till.**',
], C.lyellow, C.orange));

// ======================= CYCLE 11.1 =======================
out.push(pb());
out.push(h2('11.1  Good morning. Can I help you?'));
out.push(p('**You can:** greet a customer   ·   **Grammar:** the fixed greeting   ·   **Sound:** the greeting that is not tired'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say to a customer now, when they come in? Say it in Arabic, then in English.'));
out.push(p('**b**  You have said the same greeting four hundred times this week. **Say it once more, as if it were the first time.** Can you?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Majd say first?   **A** yes?   **B** good morning   **C** nothing'));
out.push(p('**b**  Listen again.   **1** What two things are in his greeting?   **2** What does he say about the shop owner at eight o\'clock?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.1  Four hundred times a week', [
  ['Ammar', 'Majd. You say the same thing to everybody.'],
  ['Majd', 'Good morning. Can I help you? Two things. Every time.'],
  ['Ammar', 'Four hundred times a week.'],
  ['Majd', 'Four hundred times a week, and the customer hears it once.'],
  ['Ammar', 'So it has to sound like the first time.'],
  ['Majd', 'It has to sound like the first time. That is the only hard part of this job.'],
  ['Ammar', 'And the shop owner who comes at eight?'],
  ['Majd', 'Abu Fouad. Eleven years. He gets the same two things.'],
  ['Ammar', 'Even though he never answers?'],
  ['Majd', 'Even though he never answers. He would notice if I stopped.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Greeting a customer — two things, every time**',
  table(['', 'What you say', 'When'], [
    ['**1**', '**Good morning.** / **Good afternoon.**', 'before twelve / after twelve'],
    ['**2**', '**Can I help you?**', 'straight after, no gap'],
  ], [0.5, 2.6, 2.4]),
  '⚠ **Two things, and then STOP and let them talk.** **Same as the telephone in 6.1.** **The customer tells you what he wants if you give him two seconds.**',
  '⚠ **_Can I help you?_ — and not _What do you want?_** **_What do you want?_ is grammatical and it sounds like an accusation in any language.**',
  '⚠ **And the hard part is not the words.** **It is saying them for the four hundredth time as if it were the first.** **The customer hears it once.** **A greeting said flatly is worse than no greeting, because it tells him he is the four hundredth.**',
  '**Practise:** Write the greeting.',
  '1 It is nine in the morning. ______________. ______________?   2 It is three in the afternoon. ______________. ______________?',
  '**Useful words:**  Good morning.  ·  Good afternoon.  ·  Can I help you?  ·  the customer hears it once  ·  He would notice if I stopped.',
  '**Sound — the greeting that is not tired.** 🔊 **Track 11.2** Listen twice. **The first is tired; the second is not.** **The difference is the voice going UP at the end of _Can I help you?↗_ and a small stop after _morning_.** Say it four times, going up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is the customer. One greets. **Ten times each, and the tenth must sound like the first.**'));
out.push(dlg(null, [
  ['A', '_(comes in)_'],
  ['B', 'Good __________. Can I help you?'],
  ['A', '__________, please.'],
  ['B', '__________. How many?'],
  ['A', '__________.'],
  ['B', 'Of course. One moment.'],
]));
out.push(table(['Card 1', 'Card 2'], [['morning · Twenty bags · Twenty bags · Twenty', 'afternoon · Two kilos of sugar · Sugar · Two kilos']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**. **The greeter does it four times in a row.**'));
out.push(p('**Listener task:** which of the four sounded most tired? **Say the number.**'));
out.push(PHRASE_CARD(['Good morning.', 'Good afternoon.', 'Can I help you?', 'Of course.', 'One moment.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your own greeting. **Write it.** Then say it ten times and count how many felt real.'));
out.push(table(['My greeting', 'Said at', 'How many of ten felt real'], [['', '', ''], ['', '', '']], [2.6, 1.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class your greeting — **twice: once tired, once not**. Then: _I say this ______ times a day._'));
out.push(p('**Listener task:** could you hear the difference between the two? **Say which words changed.**'));
out.push(p('**Board clinic:** your teacher greets four students in a tired voice and four in a fresh one. The class says what changed.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the card by the till. Then answer.'));
out.push(box(null, [
  '**THE COUNTER — THE EIGHT SENTENCES**',
  '**1** _Good morning. Can I help you?_  ⚠ **After 12.00: good afternoon.**',
  '**2** _How many?_ / _How much?_',
  '**3** _That is ______ each._',
  '**4** _Altogether that is ______._',
  '**5** _Sorry, we have not got any. ______ instead?_  ⚠ **Unit 8.4.**',
  '**6** _Here is your receipt._',
  '**7** _Here is your change — ______._',
  '**8** _Thank you. See you._',
  '⚠ **Six of these eight never change. Two have numbers in them. The numbers are the dangerous part. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which two sentences have numbers in them?'));
out.push(item('2', 'Which sentence comes from Unit 8?'));
out.push(item('3', 'Why does Majd call the numbers the dangerous part?'));
out.push(box('Writer\'s box', [
  '**A counter card is the sentences in the ORDER THEY HAPPEN, numbered, with the words written out.**',
  '⚠ **In order, not in groups.** **A card that puts all the greetings together and all the money together is a card you have to search.** **A card in order is one you can follow down the page while a customer waits.**',
  '⚠ **And mark which ones have NUMBERS in them.** **Six sentences you can say half asleep. Two you cannot.** **Knowing which two is the difference between a safe counter and a short till.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a counter card for your own work (**15 words or more**). In order, and mark the ones with numbers.'));
out.push(p('**______________ — THE SENTENCES**   **1** _______________________._   **2** _______________________._   **3** _______________________._ ⚠   **4** _______________________._ ⚠   **5** _______________________._   **6** _______________________._   ⚠ **______________** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['The sentences in the order they happen', ''],
  ['Words you SAY, not ideas', ''],
  ['The number ones marked', ''],
  ['A line at the bottom about which are dangerous', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their card from 1 to the end. The class says if a new person could follow it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about your counter or your customers (**20 to 35 words**). How many people a day? What do you say to all of them? What do you never say?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Which customer is hardest?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many customers does this class serve in a day altogether? **Add it up on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** your own eight sentences, in order, and tape the card by your till (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.2 =======================
out.push(pb());
out.push(h2('11.2  What would you like?'));
out.push(p('**You can:** ask what the customer wants   ·   **Grammar:** _what would you like?_ as a chunk   ·   **Sound:** the chunk said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say _What would you like?_ four times, fast. **Do not take it apart. It is one word.**'));
out.push(p('**b**  Read the three questions. Which is best at a counter? _What do you want? · What would you like? · Yes?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the customer want?   **A** bread   **B** twenty bags and two kilos of sugar   **C** a receipt'));
out.push(p('**b**  Listen again.   **1** How does Majd check he heard right?   **2** What does he do about the second thing?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.3  Two things, and both read back', [
  ['Majd', 'Good morning. Can I help you?'],
  ['Customer', 'Twenty of the small bags. And two kilos of sugar.'],
  ['Majd', 'Twenty small bags and two kilos of sugar. Is that right?'],
  ['Customer', 'That is right.'],
  ['Majd', 'The bags I have. The sugar I must weigh. One moment.'],
  ['Customer', 'And is the sugar the white or the brown?'],
  ['Majd', 'Which would you like?'],
  ['Customer', 'White.'],
  ['Majd', 'Twenty small bags, two kilos of white sugar. Anything else?'],
  ['Customer', 'That is all.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking, and checking you heard right**',
  table(['Step', 'What you say'], [
    ['**1 ask**', '**What would you like?** — ⚠ **learn it whole, do not take it apart**'],
    ['**2 read it back**', '⚠ **Twenty small bags and two kilos of sugar. Is that right?**'],
    ['**3 if there is a choice**', '**Which would you like?** — _the white or the brown?_'],
    ['**4 before the money**', '**Anything else?**'],
  ], [1.6, 4]),
  '⚠ **READ THE ORDER BACK.** **Every time, even for two things.** **It is Unit 6.5 — a number nobody read back is a number nobody has** — **and an order nobody read back is an order you will wrap wrong.**',
  '⚠ **_What would you like?_ is four words that sound like one.** **At A1 you do not need to know why it is _would_.** **Say it fast and whole, forty times a day.**',
  '⚠ **And _Anything else?_ goes BEFORE you touch the till.** **Asked after, it is a second transaction and the queue grows.**',
  '**Practise:** Write the line.',
  '1 Ask what they want. ______________?   2 Read back two bags and one kilo. ______________. ______________?   3 Before the money. ______________?',
  '**Useful words:**  What would you like?  ·  Is that right?  ·  Which would you like?  ·  Anything else?  ·  That is all.',
  '**Sound — the chunk said as one word.** 🔊 **Track 11.4** Listen. _Whatwouldyoulike?↗_ **Four words, one sound, going up.** **Said slowly and separately it sounds like a question in an examination.** Say it four times, fast.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One orders two things. One reads the order back. Then change places.'));
out.push(dlg(null, [
  ['A', 'Good __________. Can I help you?'],
  ['B', '__________ of the __________. And __________ of __________.'],
  ['A', '__________ __________ and __________ of __________. Is that right?'],
  ['B', 'That is right.'],
  ['A', 'The __________ I have. The __________ I must __________.'],
  ['B', 'And is the __________ the __________ or the __________?'],
]));
out.push(table(['Card 1', 'Card 2'], [['morning · Twenty · small bags · two kilos · sugar · bags · sugar · weigh · white · brown', 'afternoon · Six · large bags · three kilos · rice · bags · rice · weigh · long · short']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**.'));
out.push(p('**Listener task:** write the order. **Then check it against the read-back. Did they match?**'));
out.push(PHRASE_CARD(['What would you like?', 'Is that right?', 'Which would you like?', 'Anything else?', 'That is all.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four real orders from your work. **Write it** and read each one back to your partner.'));
out.push(table(['The order', 'My read-back', 'Was I right?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 2, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _He wanted ______. I read back ______. It was right / wrong._'));
out.push(p('**Listener task:** count the orders that were wrong **before** the read-back caught them.'));
out.push(p('**Board clinic:** your teacher says four two-part orders fast. The class writes and reads back. **Compare.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the order book. Then answer.'));
out.push(box(null, [
  '**ORDERS TAKEN AT THE COUNTER — TUESDAY**',
  table(['Time', 'The order', 'Read back?', 'Right?'], [
    ['8.10', '20 small bags, 2kg white sugar', '✓', '✓'],
    ['8.40', '6 large bags, 3kg long rice', '✓', '⚠ **no — he said short rice. Caught.**'],
    ['9.15', '40 trays bread', '✗', '⚠ **no — 14 trays. Not caught.**'],
    ['10.00', '2 kilos cheese, 1 bag flour', '✓', '✓'],
  ], [0.9, 2.8, 1.1, 2]),
  '⚠ **Four orders. Three read back, and the one mistake was caught. One not read back, and we sent forty trays for fourteen. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many orders were read back?'));
out.push(item('2', 'Which mistake was caught, and which was not?'));
out.push(item('3', 'What is the difference between 14 and 40?'));
out.push(box('Writer\'s box', [
  '**An order book has four columns:** the time → the order → **read back?** → **right?**',
  '⚠ **The two tick columns are the whole page.** **Three read back, one mistake, caught. One not read back, one mistake, not caught.** **That is the argument for the read-back in one table and it needed four rows.**',
  '⚠ **And 14 against 40 is Unit 1.6 — the pair that sounds the same on a counter and across a yard.** **Nine units old, and it is still the most expensive pair of numbers in this book.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an order book for one morning at your work (**15 words or more**). Include one that was not read back.'));
out.push(table(['Time', 'The order', 'Read back?', 'Right?'], [
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
  ['', '', '', ''],
], [0.9, 2.8, 1.1, 2]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A read-back column, ticked or crossed', ''],
  ['A _right?_ column', ''],
  ['At least one not read back', ''],
  ['A line at the bottom comparing the two', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their not-read-back line. The class says what it cost.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about an order that went wrong at your work (**20 to 35 words**). What did they ask for? What did they get? Who found out?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did you read it back?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the order read back? **Count them. Then count how many of those went wrong.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** six orders from tomorrow with a read-back tick on each (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.3 =======================
out.push(pb());
out.push(h2('11.3  Eight hundred SYP each'));
out.push(p('**You can:** read a price aloud   ·   **Grammar:** numbers + SYP; _each_   ·   **Sound:** the price, in groups'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four prices from your work out loud. **With the currency, and with _each_ if it is each.**'));
out.push(p('**b**  Read the two lines. Which is a price? _Eight hundred · Eight hundred SYP each_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How much is one small bag?   **A** 800   **B** 8,000   **C** 80,000'));
out.push(p('**b**  Listen again.   **1** What does Majd always add to a price?   **2** What does the customer ask about?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.5  Each, or for all of them?', [
  ['Customer', 'How much are the small bags?'],
  ['Majd', 'Eight hundred SYP each.'],
  ['Customer', 'Each? Not for the twenty?'],
  ['Majd', 'Each. Twenty of them is sixteen thousand.'],
  ['Customer', 'Say it again.'],
  ['Majd', 'Eight hundred each. Twenty bags. Sixteen thousand altogether.'],
  ['Customer', 'And the big ones?'],
  ['Majd', 'Two thousand each. I always say _each_, because once a man heard eight hundred and thought it was for the box.'],
  ['Customer', 'What happened?'],
  ['Majd', 'He paid eight hundred and took twenty bags, and I found out on Thursday.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying a price**',
  table(['Not a price', 'A price'], [
    ['**eight hundred**', '**eight hundred SYP each**'],
    ['**two thousand**', '**two thousand SYP each**'],
    ['**sixteen thousand**', '**sixteen thousand SYP altogether**'],
    ['**the same**', '⚠ **four thousand SYP a kilo**'],
  ], [1.8, 3.4]),
  '⚠ **A price needs THREE parts: the number, the currency, and _each_ or _altogether_ or _a kilo_.** **Unit 5.3 said a number is not a quantity until it has a unit.** **A number is not a price until it says what it is the price OF.**',
  '⚠ **_each_ is the one that costs money.** **A man who hears _eight hundred_ and takes twenty bags has not cheated you — he has heard a price with a part missing.**',
  '⚠ **Say the big numbers in groups:** _sixteen thousand_ · _one hundred and twenty thousand_. **And if the customer asks, say it again, slowly, the same way.**',
  '**Practise:** Make it a price.',
  '1 Eight hundred. → ______________.   2 Sixteen thousand. → ______________.   3 Four thousand. → ______________ (a kilo).',
  '**Useful words:**  eight hundred SYP each  ·  altogether  ·  a kilo  ·  Say it again.  ·  I always say _each_.',
  '**Sound — the price, in groups.** 🔊 **Track 11.6** Listen. _eight HUNDRED … SYP … EACH._ **Three parts, with a small gap between.** ⚠ **The gap before _each_ is the most valuable silence in this unit.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks a price. One answers with all three parts. Then change places.'));
out.push(dlg(null, [
  ['A', 'How much are the __________?'],
  ['B', '__________ SYP each.'],
  ['A', 'Each? Not for the __________?'],
  ['B', 'Each. __________ of them is __________.'],
  ['A', 'Say it again.'],
  ['B', '__________ each. __________ __________. __________ altogether.'],
]));
out.push(table(['Card 1', 'Card 2'], [['small bags · Eight hundred · twenty · Twenty · sixteen thousand', 'large bags · Two thousand · six · Six · twelve thousand']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**.'));
out.push(p('**Listener task:** write the price AND whether it was each or altogether. **Two answers.**'));
out.push(PHRASE_CARD(['eight hundred SYP each', 'altogether', 'a kilo', 'Say it again.', 'I always say each.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Six prices from your work. **Write it** with all three parts.'));
out.push(table(['The thing', 'The number', 'Each / a kilo / altogether'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.4, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The ______ is ______ SYP ______._'));
out.push(p('**Listener task:** count the prices said with all THREE parts. **And the ones with only two.**'));
out.push(p('**Board clinic:** your teacher says six prices and leaves _each_ off three of them. The class says which three.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the price list. Then answer.'));
out.push(box(null, [
  '**PRICE LIST — FROM 1 APRIL**',
  table(['The thing', 'Price', 'Each / kilo / box'], [
    ['small bag', '800', '**each**'],
    ['large bag', '2,000', '**each**'],
    ['small bags, box of 50', '38,000', '⚠ **a box — cheaper than 50 each**'],
    ['white sugar', '4,000', '**a kilo**'],
    ['brown sugar', '4,500', '**a kilo**'],
    ['bread', '1,200', '**a tray of 10**'],
  ], [2.2, 1.2, 2.4]),
  '⚠ **Every line says each, a kilo or a box. A line with just a number on it is not a price. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How much is a kilo of brown sugar?'));
out.push(item('2', 'Is a box of 50 small bags cheaper or dearer than 50 single bags?'));
out.push(item('3', 'What does the line at the bottom say?'));
out.push(box('Writer\'s box', [
  '**A price list has three columns:** the thing → the number → ⚠ **each, a kilo, a box or a tray**.',
  '⚠ **THE THIRD COLUMN IS NOT OPTIONAL.** **A list with two columns is a list of numbers, and the customer and the counter will read them differently.** **Nine units ago Unit 2 said count twice; this is the same idea applied to money.**',
  '⚠ **Put the DATE at the top.** _From 1 April._ **A price list with no date on it is a list somebody will argue with you about** — **and they will be right, because they saw an older one.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a price list for your own work (**15 words or more**). Six lines, three columns, and a date.'));
out.push(table(['The thing', 'Price', 'Each / kilo / box'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [2.2, 1.2, 2.4]));
out.push(p('**PRICE LIST — FROM ______________**   ⚠ **______________** ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_each_ or _a kilo_ on EVERY line', ''],
  ['A date at the top', ''],
  ['A line where the box is cheaper than the singles', ''],
  ['A rule at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read one line aloud with all three parts. The class says if they could pay from it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about prices at your work (**20 to 35 words**). Who sets them? How often do they change? Who argues about them?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Is the list on the wall the real one?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many is the price list on the wall out of date? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** a price list for your work with a date and a third column on every line (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.4 =======================
out.push(pb());
out.push(h2('11.4  How many, and how much'));
out.push(p('**You can:** ask how many and how much, and add up   ·   **Grammar:** _how many / how much_   ·   **Sound:** the total, said twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four things you count at work and four things you weigh or measure. **Which take _how many_?**'));
out.push(p('**b**  Read the two questions. Which goes with sugar and which with bags? _How many? · How much?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the total?   **A** 16,000   **B** 24,000   **C** 25,200'));
out.push(p('**b**  Listen again.   **1** How does Majd add it up?   **2** What does he do before he says the total?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.7  Out loud, so he can hear it', [
  ['Majd', 'Twenty small bags and two kilos of white sugar. Anything else?'],
  ['Customer', 'That is all.'],
  ['Majd', 'Twenty bags at eight hundred is sixteen thousand.'],
  ['Customer', 'Sixteen.'],
  ['Majd', 'Two kilos of white at four thousand a kilo is eight thousand.'],
  ['Customer', 'Eight.'],
  ['Majd', 'Sixteen and eight is twenty-four thousand. Altogether twenty-four thousand.'],
  ['Customer', 'Twenty-four. Here is twenty-five.'],
  ['Majd', 'Twenty-five thousand. Your change is one thousand.'],
  ['Customer', 'You add up out loud.'],
  ['Majd', 'I add up out loud so you can hear it. If I am wrong you stop me before the money moves.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_how many_ and _how much_, and adding up**',
  table(['how many — things you count', 'how much — things you weigh or money'], [
    ['**How many** bags?', '**How much** sugar?'],
    ['**How many** trays?', '**How much** is that?'],
    ['**How many** kilos?  ⚠ **kilos are counted**', '**How much** cheese?'],
  ], [2.4, 2.8]),
  '⚠ **_how many_ + a plural thing. _how much_ + a thing with no plural — sugar, rice, bread, money.** **And _how much is that?_ is always _how much_, because it is about money.**',
  '⚠ **ADD UP OUT LOUD, line by line.** _Twenty at eight hundred is sixteen thousand. Two kilos at four thousand is eight thousand. Sixteen and eight is twenty-four._ **Three sentences, and the customer can stop you at any of them.**',
  '⚠ **And say the total TWICE:** _twenty-four thousand. Altogether twenty-four thousand._ **Before the money moves. After it moves it is an argument.**',
  '**Practise:** Write _how many_ or _how much_.',
  '1 ______ bags?   2 ______ sugar?   3 ______ is that?   4 ______ trays of bread?',
  '**Say it. Write it. Check it** — add up two lines out loud, write the total, then add it again and check the two agree.',
  '**Useful words:**  How many…?  ·  How much…?  ·  at eight hundred is…  ·  Altogether that is…  ·  before the money moves',
  '**Sound — the total, said twice.** 🔊 **Track 11.8** Listen. _Twenty-four thousand.↘ Altogether twenty-four thousand.↘_ **The same number twice, flat, with a small stop.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One orders two things. One adds up out loud. Then change places.'));
out.push(dlg(null, [
  ['A', '__________ __________ and __________ of __________.'],
  ['B', '__________ at __________ is __________.'],
  ['A', '__________.'],
  ['B', '__________ at __________ is __________.'],
  ['A', '__________.'],
  ['B', '__________ and __________ is __________. Altogether __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['twenty bags · two kilos · white sugar · Twenty · 800 · 16,000 · Two kilos · 4,000 · 8,000 · 16 · 8 · 24,000', 'six trays · three kilos · rice · Six · 1,200 · 7,200 · Three kilos · 6,000 · 18,000 · 7,200 · 18,000 · 25,200']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**.'));
out.push(p('**Listener task:** add it up yourself while you listen. **Did you get the same total?**'));
out.push(PHRASE_CARD(['How many…?', 'How much…?', 'at eight hundred is…', 'Altogether that is…', 'before the money moves']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four two-line orders from your work. **Write it** and add each one up out loud to your partner.'));
out.push(table(['Line 1', 'Line 2', 'Altogether', 'Did my partner agree?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.4, 1.2, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ at ______ is ______. ______ at ______ is ______. Altogether ______._'));
out.push(p('**Listener task:** check each total. **How many were wrong? Who caught them?**'));
out.push(p('**Board clinic:** your teacher adds up four orders out loud and gets one wrong on purpose. **Who stops them?**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two tills. Then answer.'));
out.push(box(null, [
  '**TWO TILLS, THE SAME MONTH**',
  '**A — Majd\'s till. He adds up out loud, every time.**',
  '_Short: once, 400 SYP. Customer arguments: none._',
  '**B — the evening counter. The total is said once, at the end.**',
  '_Short: nine times, 31,000 SYP altogether. Customer arguments: four._',
  '⚠ **Same shop. Same prices. Same customers. One man says the sum out loud and one says the answer. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How much was till B short altogether?'));
out.push(item('2', 'How many arguments did till A have?'));
out.push(item('3', 'What is the only difference between the two?'));
out.push(box('Writer\'s box', [
  '**A two-tills page compares the SAME job done two ways, and it needs four numbers:** **how often short, how much, how many arguments, and the one thing that is different.**',
  '⚠ **The last line must name ONE difference and no more.** _One man says the sum out loud and one says the answer._ **A comparison with three differences in it proves nothing** — **and this one has to prove something, because it is asking somebody to change a habit.**',
  '⚠ **And keep both columns honest.** **Till A was short once too.** **A page where one side is perfect is a page nobody believes.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a two-ways page for something at your own work (**15 words or more**). Four numbers, and ONE difference.'));
out.push(p('**TWO ______________, THE SAME ______________**   **A — ______________**   _______________________._   **B — ______________**   _______________________._   ⚠ **The one difference:** ______________ ______'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Numbers on both sides, not words', ''],
  ['ONE difference named, not three', ''],
  ['Both sides honest — neither is perfect', ''],
  ['The same job on both sides', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their one difference. The class says if it is really only one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about money going missing at your work (**20 to 35 words**). How often? How much? What does everybody think the reason is?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Has anybody counted how often?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many has somebody actually counted? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **add up five orders out loud** at work tomorrow and **write down** whether anybody stopped you (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.5 =======================
out.push(pb());
out.push(h2('11.5  Here is your receipt'));
out.push(p('**You can:** give a receipt and say what is on it   ·   **Grammar:** the nouns on a receipt   ·   **Sound:** the handover, two hands'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What is on a receipt from your work? **Name four things.**'));
out.push(p('**b**  Do you give a receipt to everybody? **Say it.** Who does not get one?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is missing from the receipt?   **A** the date   **B** the total   **C** the word _each_'));
out.push(p('**b**  Listen again.   **1** Why does it matter?   **2** What does Majd write on it by hand?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.9  Twenty bags, eight hundred each', [
  ['Majd', 'Here is your receipt. Twenty bags, two kilos of sugar, twenty-four thousand.'],
  ['Customer', 'It says 800 next to the bags.'],
  ['Majd', 'Eight hundred each. The machine does not print _each_.'],
  ['Customer', 'So next week somebody reads 800 for twenty bags.'],
  ['Majd', 'Somebody did. In February. The office rang me about it.'],
  ['Customer', 'And now?'],
  ['Majd', 'And now I write _each_ on it by hand. Every receipt with a price on it.'],
  ['Customer', 'By hand. Forty times a day.'],
  ['Majd', 'Forty times a day, four seconds each. It is better than one telephone call from the office.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**What is on a receipt**',
  table(['The word', 'What it is'], [
    ['**the date**', 'the day you bought it'],
    ['**the thing**', 'what you bought'],
    ['**the quantity**', 'how many — ⚠ **with its unit, Unit 5.3**'],
    ['**the price**', 'how much — ⚠ **and _each_, by hand if the machine will not print it**'],
    ['**the total**', '**altogether**'],
    ['**the change**', 'what you get back'],
  ], [1.4, 4]),
  '⚠ **Hand it over and SAY what is on it:** _Here is your receipt. Twenty bags, two kilos of sugar, twenty-four thousand._ **Three things in one sentence.** **A receipt handed over in silence is a piece of paper; a receipt read aloud is a second check.**',
  '⚠ **And if the machine will not print _each_, write it.** **Four seconds, forty times a day.** **Unit 11.3 said a number is not a price until it says what it is the price of** — **and a receipt is where that number goes to live for a month.**',
  '**Practise:** Write the line.',
  '1 Hand it over and say three things. ______________.   2 The machine printed 800 and you need _each_. ______________.',
  '**Useful words:**  Here is your receipt.  ·  the date  ·  the total  ·  the change  ·  I write _each_ by hand.',
  '**Sound — the handover, two hands.** 🔊 **Track 11.10** Listen. _Here is your receipt.↘ Twenty bags, two kilos of sugar, twenty-four thousand.↘_ **The receipt in one hand, the change in the other, and both named.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One hands over a receipt and reads it. One finds the missing word. Then change places.'));
out.push(dlg(null, [
  ['A', 'Here is your receipt. __________, __________, __________.'],
  ['B', 'It says __________ next to the __________.'],
  ['A', '__________ each. The machine does not print _each_.'],
  ['B', 'So next week somebody reads __________ for __________.'],
  ['A', 'Somebody did. In __________.'],
  ['B', 'And now?'],
]));
out.push(table(['Card 1', 'Card 2'], [['twenty bags · two kilos of sugar · twenty-four thousand · 800 · bags · Eight hundred · 800 · twenty bags · February', 'six trays · three kilos of rice · twenty-five thousand · 1,200 · trays · One thousand two hundred · 1,200 · six trays · January']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**.'));
out.push(p('**Listener task:** what was missing from the receipt, and what did he do about it?'));
out.push(PHRASE_CARD(['Here is your receipt.', 'the date', 'the total', 'the change', 'I write each by hand.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Look at a real receipt from your work, or draw one. **Write it.** What is on it, and what is missing?'));
out.push(table(['On the receipt', 'Missing', 'Could I write it by hand?'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Our receipt has ______. It does not have ______. I could write ______ by hand._'));
out.push(p('**Listener task:** what is missing from most receipts in this class? **Count the commonest missing thing.**'));
out.push(p('**Board clinic:** your teacher draws a receipt with the total missing. The class says what a customer would do with it.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the receipt. Then answer.'));
out.push(box(null, [
  '**BARADA STORES — 15 APRIL 2026 — 8.42**',
  table(['', 'Qty', 'Unit', 'Price', 'Line'], [
    ['small bags', '20', 'bags', '800 _(each — M.B.)_', '16,000'],
    ['white sugar', '2', 'kilos', '4,000 _(a kilo — M.B.)_', '8,000'],
  ], [1.6, 0.7, 0.9, 2, 1.1]),
  '**TOTAL: 24,000 SYP**   **PAID: 25,000**   **CHANGE: 1,000**',
  '**Served by: M. Bitar**',
  '⚠ **The two words in brackets are written by hand. The machine will not print them. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What time was it bought?'));
out.push(item('2', 'What are the two hand-written words?'));
out.push(item('3', 'Who served the customer?'));
out.push(box('Writer\'s box', [
  '**A receipt has the date AND THE TIME, a line for each thing with its quantity, unit and price, a total, what was paid, the change, and ⚠ WHO SERVED.**',
  '⚠ **_Served by_ is the line machines leave off and it is the one that matters a month later.** **A receipt with a problem on it and no name is a receipt the whole counter has to answer for** — **Unit 6.6 said the same thing about a message slip.**',
  '⚠ **And the hand-written words are the point.** **A machine that will not print _each_ is not a reason to leave it out.** **Four seconds with a pen beats a telephone call from the office.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a receipt for your own work (**15 words or more**). Date, time, two lines, total, paid, change, and who served.'));
out.push(p('**______________ — ______________ — ______**   **______________  ______  ______  ______ _(______)_  ______**   **______________  ______  ______  ______ _(______)_  ______**   **TOTAL:** ______  **PAID:** ______  **CHANGE:** ______   **Served by:** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A date AND a time', ''],
  ['_each_ or _a kilo_ on every price', ''],
  ['Total, paid and change — all three', ''],
  ['_Served by_, with a name', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their receipt. The class says if they could check it a month later.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a receipt that caused a problem (**20 to 35 words**). What was wrong with it? Who found out? How long afterwards?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Was there a name on it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was there a name on the receipt? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** everything your receipt does not say, and which of those you could write by hand (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.6 =======================
out.push(pb());
out.push(h2('11.6  The last ten seconds'));
out.push(p('**You can:** close well   ·   **Grammar:** _see you · come again · thank you_   ·   **Sound:** the goodbye that is not a dismissal'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you say to a customer as they leave? **Say it.** Anything?'));
out.push(p('**b**  Read the two endings. Which would bring you back? _(nothing) · Thank you. See you Thursday._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Majd add to _see you_?   **A** nothing   **B** a day   **C** a price'));
out.push(p('**b**  Listen again.   **1** Why a day?   **2** What does Nour say about the last ten seconds?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.11  See you Thursday', [
  ['Majd', 'Here is your change — one thousand. Thank you. See you Thursday.'],
  ['Customer', 'Thursday. Yes. _(leaves)_'],
  ['Ammar', 'Why Thursday?'],
  ['Majd', 'He comes Tuesday and Thursday. Eleven years.'],
  ['Ammar', 'And if you just said _see you_?'],
  ['Majd', 'Then it is a goodbye. _See you Thursday_ is an appointment.'],
  ['Nour', 'And the white sugar comes Wednesday. Tell him.'],
  ['Majd', 'Abu Fouad. The white sugar comes Wednesday — there will be plenty on Thursday.'],
  ['Customer', '_(from the door)_ Good.'],
  ['Nour', 'Ten seconds. And that is the only thing he has said to us today.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The last ten seconds**',
  table(['', 'What you say'], [
    ['**1 the change, named**', '**Here is your change — one thousand.**'],
    ['**2 thank you**', '**Thank you.**'],
    ['**3 the close**', '⚠ **See you Thursday.** — **with a DAY, if you know it**'],
    ['**4 if there is news**', '⚠ **The white sugar comes Wednesday.**'],
  ], [1.8, 4]),
  '⚠ **_See you_ is a goodbye. _See you Thursday_ is an appointment.** **Four extra letters, and the customer leaves with a date in his head.**',
  '⚠ **And the last ten seconds is where the NEWS goes.** **What is coming in, what is back in stock, what is cheaper next week.** **He is already holding his bag, so he is not deciding anything** — **he is just listening, which is the best moment of the whole ninety seconds.**',
  '⚠ **Name the change as you give it:** _your change — one thousand_. **Unit 11.4 said say the total before the money moves. This is the other end of the same rule.**',
  '**Practise:** Write the close.',
  '1 The change is 1,000 and he comes on Thursdays. ______________. ______________. ______________.   2 There is news about the sugar. ______________.',
  '**Useful words:**  Here is your change — …  ·  Thank you.  ·  See you Thursday.  ·  Come again.  ·  …comes Wednesday.',
  '**Sound — the goodbye that is not a dismissal.** 🔊 **Track 11.12** Listen twice. **The first ends flat and down; the second rises slightly on _Thursday_.** ⚠ **Down means the conversation is over. Up means see you then.** Say it four times, up.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One closes with a day and news. One leaves. Then change places.'));
out.push(dlg(null, [
  ['A', 'Here is your change — __________. Thank you. See you __________.'],
  ['B', '__________. Yes. _(leaves)_'],
  ['A', '__________ comes __________ — there will be plenty on __________.'],
  ['B', '_(from the door)_ Good.'],
  ['A', 'Ten seconds.'],
  ['B', 'Ten seconds, and he knows two things he did not know.'],
]));
out.push(table(['Card 1', 'Card 2'], [['one thousand · Thursday · Thursday · The white sugar · Wednesday · Thursday', 'five hundred · Sunday · Sunday · The long rice · Saturday · Sunday']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform for the class — **books closed**.'));
out.push(p('**Listener task:** what TWO things did the customer leave knowing? **Two.**'));
out.push(PHRASE_CARD(['Here is your change — …', 'Thank you.', 'See you Thursday.', 'Come again.', '…comes Wednesday.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four regular customers. **Write it.** Which day do they come, and what news could you give them?'));
out.push(table(['The customer', 'Which day', 'My close', 'News I could add'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ comes on ______. I say: thank you, see you ______. And I could tell him ______._'));
out.push(p('**Listener task:** how many people know which day their customers come? **Count them.**'));
out.push(p('**Board clinic:** your teacher says four closes. Two have no day. The class adds one to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the list Majd keeps under the counter. Then answer.'));
out.push(box(null, [
  '**REGULARS — WHO COMES WHEN, AND WHAT TO TELL THEM**',
  table(['Who', 'Days', 'What to tell them'], [
    ['Abu Fouad', 'Tue, Thu', '⚠ **white sugar Wednesdays — he buys ten kilos**'],
    ['the hotel man', 'Fri', 'bread trays are 1,200 from 1 April'],
    ['Umm Nadia', 'most days', '⚠ **nothing yet — I do not know what she buys**'],
    ['the school cook', 'Sun, Wed', 'the box of 50 is cheaper than 50 singles'],
  ], [1.6, 1.2, 3.4]),
  '⚠ **Four regulars. Three I can tell something. One I have served for a year and I do not know her name. M.B.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which days does the school cook come?'));
out.push(item('2', 'What can Majd not tell Umm Nadia, and why?'));
out.push(item('3', 'What is the last line really about?'));
out.push(box('Writer\'s box', [
  '**A regulars list has three columns:** who → **which days** → **what to tell them**.',
  '⚠ **The third column is the work.** **A name and a day is a list; a name, a day and one useful thing is a counter that keeps its customers.**',
  '⚠ **And keep the ones you know nothing about ON the list, with the gap showing.** _Nothing yet — I do not know what she buys._ **A list of only the customers you understand is a list that hides the ones you are losing.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a regulars list for your own work (**15 words or more**). Include one you know nothing about.'));
out.push(table(['Who', 'Days', 'What to tell them'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [1.6, 1.2, 3.4]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Days on every line', ''],
  ['One useful thing to tell each one', ''],
  ['At least one you know nothing about', ''],
  ['A line at the bottom counting them', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read the customer they know nothing about. The class says what they could ask them tomorrow.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a customer you know well (**20 to 35 words**). How long? What do they always buy? What do you say to them that you say to nobody else?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Do you know their name?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many regular customers does this class know by name? **And how many not? Two numbers.**'));
out.push(box('Homework', ['Finish your writing. Then **ask one customer their name tomorrow** and **write down** what happened (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 11.7 =======================
out.push(pb());
out.push(h2('11.7  Review: the price list'));
out.push(p('⚠ **This is the fifth unit of this book.** Greeting, asking, prices, totals, receipts and the close — and now a problem for the class to talk about together.'));
out.push(p('**You can:** work a whole counter   ·   **Review:** Units 11.1 to 11.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**11.1**  Greet a customer. Two things.', ''],
  ['**11.2**  Take a two-part order and read it back.', ''],
  ['**11.3**  Say a price. All three parts.', ''],
  ['**11.4**  Add up two lines out loud.', ''],
  ['**11.5**  Hand over a receipt and say what is on it.', ''],
  ['**11.6**  Close, with a day.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened?   **A** the customer paid too little   **B** he was given the old price and is right   **C** he did not pay'));
out.push(p('**b**  Listen again.   **1** What did the list on the wall say?   **2** What does Nour say about the week?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 11.13  The price on the wall', [
  ['Customer', 'Last week they were six hundred. The paper says six hundred.'],
  ['Majd', 'They went up on the first. Eight hundred each.'],
  ['Customer', 'The paper on your wall says six hundred. I read it when I came in.'],
  ['Majd', 'The paper on the wall is the old one. Somebody did not change it.'],
  ['Customer', 'Then I will pay six hundred.'],
  ['Nour', 'He is right. The paper says six hundred and he read it before he ordered.'],
  ['Majd', 'And the new list is in the office, where nobody can see it.'],
  ['Nour', 'The new list has been in the office since the first. Eleven days.'],
  ['Majd', 'Eleven days at two hundred a bag. I have been charging eight hundred all week and nobody argued until now.'],
  ['Nour', 'Nobody argued because nobody reads the wall. He reads the wall.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can say'], [
    ['**11.1**', '_Good morning. Can I help you?_ **Two things, then stop.**'],
    ['**11.2**', '_Twenty small bags and two kilos of sugar. Is that right?_'],
    ['**11.3**', '_Eight hundred SYP each._ **Three parts.**'],
    ['**11.4**', '_Twenty at eight hundred is sixteen thousand._ **Out loud.**'],
    ['**11.5**', '_Here is your receipt. Twenty bags, two kilos, twenty-four thousand._'],
    ['**11.6**', '_Thank you. See you Thursday._ **With a day.**'],
  ], [1, 5]),
  '⚠ **The new thing here: the customer is right and the shop is right, and the person who is wrong is not in the room.** **Majd has been charging the new price all week and nobody argued. The wall has said the old price for eleven days.** **And this customer read the wall.**',
  '**Useful words:**  the paper says  ·  the old one  ·  somebody did not change it  ·  eleven days  ·  nobody reads the wall',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Majd. One is the customer. Say why you are right.'));
out.push(table(['Majd says', 'The customer says'], [[
  'The price went up on the first. ⚠ **I have charged eight hundred all week and nobody argued.**',
  'The paper on your wall says six hundred and I read it before I ordered. ⚠ **That is your paper, not mine.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** who is right? Say _both_. **Then: who is wrong?** **Somebody who is not in the shop.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of something at your work that is out of date on a wall or a door. Tell your partner. **Write it.**'));
out.push(table(['What it says', 'What is true now', 'How long it has been wrong'], [['', '', ''], ['', '', '']], [1.8, 1.6, 1.8]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem.** The price went up on the first. The list in the office says eight hundred; the list on the wall still says six hundred, eleven days later. Majd has charged eight hundred all week and nobody argued. This customer read the wall before he ordered.'));
out.push(table(['Majd is right', 'The customer is right', 'So we do this'], [[
  'The price went up on the first and he has charged it correctly all week. ⚠ **And the new list was never given to him to put up.**',
  'The paper on the wall said six hundred and he read it before he ordered. ⚠ **A price on a wall is a price offered, and he accepted it.**',
  '⚠ **He pays six hundred today and Majd says why out loud: _the wall was wrong, that is ours, not yours._** **Then the new list goes on the WALL the same hour** — **and from now on a price change is not done until the wall is changed.** **The office list is the record; the wall is the price.**',
]], [1, 1, 1.5]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. So we _______._'));
out.push(p('⚠ **The words to keep:** _nobody argued because nobody reads the wall. He reads the wall._'));
out.push(p('⚠ **And the finding, which is the whole of Book 1 arriving at a counter:** **the price was changed in the place where it is RECORDED and not in the place where it is READ.** ⚠ **That is Abu Raed\'s gate book, Fouad\'s shelf map and the slip under the pad, all over again** — **a thing that is correct somewhere nobody looks.** **Eleven days, two hundred a bag, and the only person who noticed was the one man who reads the paper on the wall.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _PRICE LIST — FROM 1 APRIL_   **A** These prices are old.   **B** These prices start on 1 April.   **C** The shop opens on 1 April.',
  '**2**  _800 SYP EACH — NOT FOR THE BOX_   **A** The box costs 800.   **B** One costs 800.   **C** Nothing costs 800.',
  '**3**  _BOX OF 50 — CHEAPER THAN 50 SINGLES_   **A** Buying the box saves money.   **B** The box is dearer.   **C** Both cost the same.',
  '**4**  _ADD UP OUT LOUD_   **A** Say the total only.   **B** Say each line as you add it.   **C** Do not tell the customer.',
  '**5**  _PRICE CHANGED? CHANGE THE WALL FIRST_   **A** Tell the office first.   **B** The wall can wait.   **C** The price is not changed until the wall is.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **In a message about a price, the NUMBER and the _each_ go together, in the first sentence.**',
  '⚠ **And say WHEN the price starts.** _From 1 April._ **A price with no date is a price somebody will argue about.**',
  '**The shape:** who it is to → the new price, with _each_ → when it starts → what the reader must do.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a message about a price change (**four sentences, about 30 words**). The price with _each_, when it starts, and what the reader must do.'));
out.push(p('**To:** ______________   _The ______________ are ______ SYP ______ from ______________. The old price was ______. Please ______________. ______________._'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write a message about a price change at your work (**four sentences, about 30 words**). The new price with _each_, the date it starts, the old price, and what must be changed.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your message. Then write the **note you would put on the wall** (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  A customer comes in. You say: Good morning. ___   a) What do you want?   b) Yes?   c) Can I help you?',
  '2  ___ bags?   a) How much   b) How many   c) How long',
  '3  ___ sugar?   a) How many   b) How much   c) How long',
  '4  Eight hundred SYP ___.   a) each   b) all   c) every',
  '5  Twenty at eight hundred is ___.   a) 1,600   b) 16,000   c) 160,000',
  '6  Before the money moves you say the ___ twice.   a) price   b) total   c) change',
  '7  Here ___ your receipt.   a) is   b) are   c) it is',
  '8  A price change is not done until ___ is changed.   a) the office list   b) the receipt   c) the wall',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 11.15** Listen. Write the answer.   **1** The order: ______   **2** The price of one: ______   **3** The total: ______   **4** What she paid: ______   **5** The change: ______   **6** The day he will see her: ______'));
out.push(p('**C  Reading.** Read the two tills at 11.4 again. How much was till B short altogether? What is the only difference between the two?'));
out.push(p('**D  Writing.** Write four sentences about a price change (**about 30 words**). The new price with _each_, the date, the old price, and what must be changed.'));
out.push(...lines(4));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Majd', 'Good afternoon. Can I help you?'],
  ['Customer', 'Six of the large bags, please.'],
  ['Majd', 'Six large bags. Is that right?'],
  ['Customer', 'That is right. How much?'],
  ['Majd', 'Two thousand SYP each. Six at two thousand is twelve thousand. Altogether twelve thousand.'],
  ['Customer', 'Here is fifteen.'],
  ['Majd', 'Fifteen thousand. Your change is three thousand. Here is your receipt — six large bags, twelve thousand.'],
  ['Customer', 'Thank you.'],
  ['Majd', 'Thank you. See you Sunday.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**11.1**  greet a customer with two things, and make the four hundredth sound like the first',
  '**11.2**  take an order and read it back',
  '**11.3**  say a price with all three parts, including _each_',
  '**11.4**  ask _how many_ and _how much_, and add up out loud',
  '**11.5**  hand over a receipt and say what is on it',
  '**11.6**  close with a day, and put the news in the last ten seconds',
  '**11.7**  work a counter — and say why a price on a wall beats a price in an office',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business, in the prices and invoices unit.**',
  '**price list** — here it is a paper on a wall. **At A2 you send one to a customer by email and version it.**',
  '**receipt** — here you hand one over. **At A2 it is a document somebody queries three weeks later.**',
  '**cash** — here it is what is in the till. **At A2 it is one payment term among several, and the cheapest one to offer.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 11 · Student\'s Book');
module.exports = out;
