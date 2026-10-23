// Proactive Business English A2 · Syria Edition · Book 2 · Unit 19 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'wholesaler · manufacturer · agent · distributor · quotation · supply contract · lead time · minimum order · bulk · unit price · trade price · credit limit · part payment · settlement · negotiate · counter-offer · reliable · dependable · prompt · long-standing · partner · sole supplier · rival · tender · sample · goodwill';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 19  Suppliers and Partners'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**19.1**  say where you buy from, and what from each',
  '**19.2**  ask for a better price, politely and specifically',
  '**19.3**  make a conditional offer',
  '**19.4**  describe a long relationship, and what it is worth',
  '**19.5**  describe a supplier: reliable, fair, slow, always on time',
  '**19.6**  agree terms, and write them down',
  '**19.7**  Review & Mediate: tell a colleague what the quotation says',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Negotiating in English at A2 — what is actually required', [
  'Nothing in this unit requires clever English. A negotiation at this level is four sentences: **what you want · what you can offer · what you will do if they say no · what you have both agreed.** The English for all four is in Units 14 and 15 already.',
  'What is required is **arithmetic and nerve**. The person who knows what a hundred rolls cost, what the lead time is, and what the second supplier charges can negotiate in bad English. The person who knows none of those cannot do it in any language.',
  '⚠ And one warning that runs through the unit. A long relationship is worth money and it is not free: **Sham Trading has bought from Ms Shamsi for eleven years, and that is a reason to ask her for a better price, not a reason not to.**',
], C.lyellow, C.orange));

// ======================= CYCLE 19.1 =======================
out.push(pb());
out.push(h2('19.1  We buy the boxes from Aleppo'));
out.push(p('**Function:** saying where you buy from   ·   **Grammar:** _buy … from_, _supply_, prepositions of source   ·   **Pronunciation:** the stress on the new information'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name three things your workplace buys and where each one comes from.'));
out.push(p('**b**  Which preposition? _We buy them ______ Aleppo. · She supplies us ______ boxes. · They deliver ______ us ______ Tuesdays._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many suppliers are named?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What does the company buy from each one? **2** What is the problem with buying everything from one place?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.1  Where everything comes from', [
  ['Hala', 'I am making a list for the insurance. Where does everything come from?'],
  ['Nour', 'Boxes and wrap from Ms Shamsi in Aleppo — eleven years. Tape and labels from a wholesaler in Damascus, about twenty minutes away. Pallets from a man in Adra who also takes the broken ones back.'],
  ['Hala', 'And the paper?'],
  ['Nour', 'Paper we buy from whoever is cheapest that month. It is the only line we do that with.'],
  ['Hala', 'Why not everything?'],
  ['Nour', 'Because when the Aleppo road was closed for nine days in March, Ms Shamsi telephoned us before we telephoned her and put thirty rolls on a bus. Nobody does that for a customer who buys from whoever is cheapest that month.'],
  ['Hala', 'So the eleven years is worth something.'],
  ['Nour', 'The eleven years is worth about four per cent, which is what we are probably paying over the cheapest price. Write that in your list too — it is not a secret and Mr Ayoub knows it to the dinar.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – saying where things come from**',
  table(['Shape', 'Example'], [
    ['**buy** something **from** somebody', 'We **buy** the boxes **from** Ms Shamsi.'],
    ['**supply** somebody **with** something', 'She **supplies us with** boxes and wrap.'],
    ['**get / order** something **from**', 'We **order** the tape **from** a wholesaler.'],
    ['**deliver to** somebody **on** a day', 'They **deliver to us on** Tuesdays.'],
    ['**come from** a place', 'The pallets **come from** Adra.'],
  ], [1.7, 2.3]),
  '⚠ **From** for the source, **to** for the destination, **with** after _supply_. _She supplies us **with** boxes_ — never ~~supplies us boxes~~ and never ~~supplies boxes to us from~~.',
  '⚠ When you list suppliers, give each one **the thing, the place and how long**: _boxes and wrap from Aleppo, eleven years_. The length is not decoration; it is the part that tells a reader how much the relationship is worth.',
  '⚠ There is always one line a company buys on price alone. Know which one it is and know why, because that is the line a competitor will take first.',
  '**Practise:** Say where each comes from, with the thing, the place and the length. 1 your main raw material 2 your packaging 3 your vehicles or tools 4 your paper 5 the thing you buy on price alone',
  '**Useful phrases:**  We buy X from Y.  ·  She supplies us with…  ·  from whoever is cheapest that month  ·  It is the only line we do that with.  ·  worth about four per cent',
  '**Pronunciation – the new information takes the stress.** 🔊 **Track 19.2** Listen: _we buy the boxes from **Aleppo**_ against _we buy the **boxes** from Aleppo_. The first answers "where?", the second answers "what?". Repeat both.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is making a list; B gives the suppliers with the thing, the place and the length — and names the line bought on price alone. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'I am making a list for __________. Where does everything come from?'],
  ['B', '__________ from __________ — __________. __________ from __________, about __________ away. __________ from __________ who also __________.'],
  ['A', 'And __________?'],
  ['B', '__________ we buy from whoever is cheapest. It is the only line we do that with.'],
  ['A', 'Why not everything?'],
  ['B', 'Because when __________, __________ before we __________. Nobody does that for a customer who __________.'],
]));
out.push(table(['Role card 1 — a workshop', 'Role card 2 — a shop'], [[
  'Steel from a stockholder in Damascus, nine years. Paint from a distributor in Homs, two years. Fixings from whoever is cheapest. The stockholder once held a price for three weeks through a currency move.',
  'Stock from two wholesalers — one for food, eleven years; one for household, four. Bags and paper from whoever is cheapest. The food wholesaler delivers on a Thursday even when the order is small.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their list for the class – **without the book**.'));
out.push(p('**Listener task:** write the story that proves the relationship is worth something. Every long supply relationship has exactly one.'));
out.push(PHRASE_CARD(['We buy X from Y.', 'supplies us with', 'eleven years', 'from whoever is cheapest', 'the only line we do that with', 'worth about four per cent']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Make the supplier list for your own workplace: **four** lines, each with the thing, the place, how long, and one fact about the relationship.'));
out.push(table(['What', 'From where', 'How long', 'One fact'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.2, 0.8, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We buy _______ from _______ in _______, for _______ years. The thing that proves it is worth it is _______._'));
out.push(p('**Listener task:** write down which workplace in the room has only **one** supplier for something important. Ask what would happen next week if that supplier stopped.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we buy from them boxes_ and _they supply us boxes_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the supplier list, and answer the questions.'));
out.push(box(null, [
  '**SUPPLIERS — who, what, how long, and what we would do without them**',
  '**Shamsi Packaging, Aleppo.** Boxes and plastic wrap. Eleven years. Lead time normally four days; nine in March when the road was closed, and she put thirty rolls on a bus without being asked. We are probably paying about 4% over the cheapest price and we know it.  **Without her:** two weeks to find another and about a month to trust them.',
  '**Barakat Wholesale, Damascus.** Tape, labels, office paper. Two years. Twenty minutes away, delivers the same day if we telephone before ten.  **Without them:** three other wholesalers within an hour. No difficulty.',
  '**Adra Pallets.** Pallets, and they take the broken ones back, which is the whole reason we use them.  **Without them:** we would have to pay somebody to take broken pallets away, which is about 90,000 a month.',
  '**Paper for the counter printer.** Whoever is cheapest that month. This is the only line we buy on price alone.',
  '⚠ **One supplier, one risk.** Shamsi is a sole supplier for wrap. We have never tested a second one, and that is a decision we have taken by not taking it.',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which supplier would be hardest to replace, and how is that shown?'));
out.push(item('2', 'What is the real reason for using Adra Pallets?'));
out.push(item('3', 'What does the warning at the bottom mean by "a decision we have taken by not taking it"?'));
out.push(box('Writer\'s box', [
  '**A supplier list — one block per supplier:** name and place → what they supply → **how long** → one fact that shows what they are like → **what we would do without them**.',
  '**"Without them" is the useful column.** A list of names is an address book; a list with the replacement cost against each name is a document a manager can plan from.',
  'Give the **lead time** and one number: four days normally, nine in March, 4% over the cheapest, 90,000 a month. A supplier list without numbers tells nobody anything they did not know.',
  '⚠ End with the risk. A **sole supplier** for anything you cannot trade without is worth naming on the page, even — especially — when nobody wants to do anything about it.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the supplier list for your own workplace, with three suppliers (35 words or more). Use the frame.'));
out.push(p('**SUPPLIERS**   **______________, ______________.** ______________. ______________ years. ______________.  **Without them:** ______________.   **______________, ______________.** ______________. ______________. ______________.  **Without them:** ______________.   **______________.** ______________, which is ______________.  **Without them:** ______________.   ⚠ ______________ is a sole supplier for ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box asks for what you would do without each one. The second block has no answer — how long would it take to replace them?"',
  'Quote the box, ask the question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a manager plan from this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_buy from_ / _supply with_ used correctly', ''],
  ['How long, for every supplier', ''],
  ['A "without them" for every supplier', ''],
  ['A sole supplier named, if there is one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one "without them". The class says which workplace would be in the most trouble on Monday.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about one supplier your workplace depends on (60 to 100 words). Say what they supply, how long, one thing they did that nobody had to do, and what would happen if they stopped tomorrow.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the thing nobody had to do_   ✓ _buy from / supply with correct?_   ? _has anybody ever tested a second supplier?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Count the sole suppliers in the room. Ask how many have ever been discussed out loud at those workplaces.'));
out.push(box('Homework', ['Write your final text. Then find out your workplace\'s real lead time from its main supplier — in days, not "about a week" — and write where you found it (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.2 =======================
out.push(pb());
out.push(h2('19.2  Could you do better on the hundred?'));
out.push(p('**Function:** asking for a better price   ·   **Grammar:** _Could you…? / Would you…?_ with a specific ask   ·   **Pronunciation:** asking for money without apologising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Have you ever asked a supplier for a better price? What did you say, and what happened?'));
out.push(p('**b**  Which would you answer? _Can you give us a discount? · Could you do 5% on an order of three hundred, paid in ten days?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What exactly does Nour ask for?   **A** a discount   **B** 5% on three hundred rolls paid in ten days   **C** free delivery'));
out.push(p('**b**  Listen again. **1** What does she offer in return? **2** What does Mr Ayoub say afterwards about the way she asked?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.3  Her first negotiation', [
  ['Nour', 'Ms Shamsi, I want to ask you something and I would rather ask it plainly. We normally take a hundred rolls. If we took three hundred, could you do better than the hundred price?'],
  ['Ms Shamsi', 'How much better are you asking for?'],
  ['Nour', 'Five per cent. And we would pay within ten days instead of thirty.'],
  ['Ms Shamsi', 'Three per cent, and ten days. Five is the price I give the man who takes a thousand.'],
  ['Nour', 'Three per cent and ten days, and would you hold that price until the end of the year?'],
  ['Ms Shamsi', 'Until the end of the year, unless the exchange rate moves more than ten per cent. I will put that in writing because you will ask me for it anyway.'],
  ['Nour', 'I would have asked.'],
  ['Mr Ayoub', 'You asked for a number, you offered something, you took less than you asked for, and you got one more thing at the end. That is the whole of it. In eleven years I have never once asked her for three per cent.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for a better price – the four moves**',
  table(['Move', 'What to say'], [
    ['**1 Say you are asking**', 'I want to ask you something and I would rather ask it plainly.'],
    ['**2 The specific ask**', '**Could you do** 5% **on** three hundred rolls?'],
    ['**3 What you offer**', 'And we **would pay within ten days** instead of thirty.'],
    ['**4 One more thing**', 'And **would you hold** that price **until** the end of the year?'],
  ], [1.3, 2.7]),
  '⚠ **A number, not a word.** _Can you give us a discount?_ can be answered with "we will see". _Could you do five per cent on three hundred rolls?_ has to be answered with a number or a no.',
  '⚠ **Always offer something.** Quantity, speed of payment, a longer commitment, a quieter delivery day. A request with nothing attached is asking for a favour; a request with an offer is trade.',
  '⚠ **Ask for the extra thing after the agreement, not before.** The price is settled; then _would you hold it until the end of the year?_ It is the cheapest thing you will ever get and almost nobody asks for it.',
  '⚠ Taking less than you asked for is **not losing**. Three of five, with the ten days and the price held, is a better outcome than five with nothing attached.',
  '**Practise:** Make the four moves for each. 1 a bigger order 2 faster payment 3 a year\'s commitment 4 a first order from a new supplier 5 a price that has just risen',
  '**Useful phrases:**  I would rather ask it plainly.  ·  Could you do 5% on…?  ·  we would pay within ten days  ·  Would you hold that price until…?  ·  I would have asked.',
  '**Pronunciation – asking for money without apologising.** 🔊 **Track 19.4** Listen to the same question twice, once rising and apologetic, once level and short. The level one gets a number back. Repeat it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for a better price in four moves; B refuses the first number and offers a smaller one. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________, I want to ask you something and I would rather ask it plainly. We normally take __________. If we took __________, could you do better than __________?'],
  ['B', 'How much better are you asking for?'],
  ['A', '__________ per cent. And we would __________ instead of __________.'],
  ['B', '__________ per cent, and __________. __________ is the price I give __________.'],
  ['A', '__________ and __________, and would you __________ until __________?'],
  ['B', 'Until __________, unless __________. I will put that in writing.'],
]));
out.push(table(['Role card 1 — the new supplier', 'Role card 2 — the price that has risen'], [[
  'A first order from a wholesaler you have never used. You can offer: a trial of three months, payment on delivery, and a reference if it goes well. Ask for 4% and settle at 2% with payment terms after three months.',
  'Your supplier has raised prices 11%. You can offer: ordering twice a year instead of monthly, and taking a less popular size. Ask for the old price until the end of the quarter and settle for half the rise.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the negotiation for the class – **without the book**.'));
out.push(p('**Listener task:** write the **fourth** move — the thing asked for after the agreement. Note whether the pair remembered it; most forget.'));
out.push(PHRASE_CARD(['I would rather ask it plainly.', 'Could you do 5% on…?', 'we would pay within ten days', 'Would you hold that price…?', 'unless the rate moves', 'I will put that in writing.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Plan **three** real asks for your own workplace. For each: the specific number, what you would offer, what you would settle for, and the extra thing you would ask for at the end.'));
out.push(table(['Who', 'My ask (a number)', 'What I offer', 'The extra thing at the end'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I would ask _______ for _______ per cent on _______. I would offer _______. I would settle for _______. At the end I would ask for _______._'));
out.push(p('**Listener task:** count how many people in the room have never asked a supplier for anything. Then ask what the first ask would be worth in a year.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _can you make a discount_ and _I want that you reduce the price_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the enquiry email, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Enquiry — 300 rolls wide wrap, price and lead time, reply by Thursday please',
  'Dear Ms Shamsi,',
  'We normally order a hundred rolls of the wide wrap a quarter. We are considering three hundred at a time instead.',
  '**What I am asking for:** your price for three hundred rolls, and the lead time at that quantity.',
  '**What we would offer:** payment within ten days instead of thirty, and one order a quarter instead of three.',
  '**One more thing:** if we agree a price, would you hold it until the end of the year?',
  'We have bought from you for eleven years and I am not asking for a favour — I am asking whether three hundred is worth something to you. If it is not, tell me plainly and we will carry on at a hundred.',
  'Could you reply by Thursday? I have to put the quarter\'s order in on Friday.',
  'Thank you. Best regards, Nour Mansour · Sham Trading · 011 ___ ____',
], 'FFFFFF', C.navy));
out.push(item('1', 'What three things does the email separate into headings?'));
out.push(item('2', 'What does the writer say she is **not** asking for?'));
out.push(item('3', 'Why is there a deadline, and what is the reason given for it?'));
out.push(box('Writer\'s box', [
  '**An enquiry email — five parts:** the current position in one line → **what I am asking for** → **what we would offer** → **one more thing** → and a deadline with a reason outside yourself.',
  '**Put the ask and the offer under separate headings.** A reader who can see both in two seconds can answer in two minutes; the same words in a paragraph take a week.',
  '**Say what you are not asking for.** _I am not asking for a favour — I am asking whether three hundred is worth something to you._ It removes the awkwardness of a long relationship and it tells the supplier this is business, not sentiment.',
  '⚠ **Give them an easy no.** _If it is not, tell me plainly and we will carry on at a hundred._ Nobody ignores an email that is easy to answer, and an easy no is often followed by a small yes.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an enquiry email asking for a better price (35 words or more). Use the frame.'));
out.push(p('**Subject:** Enquiry — ______________, reply by ______________ please   Dear ______________,   We normally ______________. We are considering ______________.   **What I am asking for:** ______________.   **What we would offer:** ______________.   **One more thing:** ______________.   We have ______________ and I am not asking for ______________ — I am asking whether ______________. If it is not, ______________.   Could you reply by ______________? ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says give them an easy no. What happens here if they say no — does the writer say?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could the supplier answer this in two minutes?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number in the ask', ''],
  ['Something offered in return', ''],
  ['One more thing, after the main ask', ''],
  ['An easy no, and a deadline with a reason', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "one more thing". The class says which would be agreed to without an argument — it is usually all of them, which is the point.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a price you have never asked about (60 to 100 words). Say what it is, what you have been paying, what you would ask for, what you would offer, and what has stopped you so far.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the number they would ask for_   ✓ _is there an offer?_   ? _what is the worst that could happen?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask the room what the worst outcome of asking would be. It is always "they say no", and saying that out loud is the whole cycle.'));
out.push(box('Homework', ['Write your final text. Then ask one supplier for one specific thing, with a number and an offer, and write down what they said (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.3 =======================
out.push(pb());
out.push(h2('19.3  If you order a hundred, we will reduce it'));
out.push(p('**Function:** making a conditional offer   ·   **Grammar:** the first conditional from the seller\'s side   ·   **Pronunciation:** the two halves of an offer'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What could your workplace offer a customer who doubled their order? Name three things that cost you nothing.'));
out.push(p('**b**  Finish: _If you order a hundred, we ______. If you pay in ten days, we ______. If you take Tuesday instead of Thursday, we ______._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Hala offer?   **A** a lower price only   **B** three different conditional offers   **C** free delivery for a year'));
out.push(p('**b**  Listen again. **1** Which offer costs the company nothing? **2** What does the customer actually choose?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.5  Three offers, one customer', [
  ['Customer', 'Your price is higher than the place in Jaramana. I have been buying from you for two years and I would rather stay.'],
  ['Hala', 'Then let me put three things on the table and you choose. If you take a hundred boxes instead of sixty, we will do them at the hundred price — that is about six per cent.'],
  ['Customer', 'I have nowhere to keep a hundred.'],
  ['Hala', 'Then the second. If you pay within ten days, we will take two per cent off, and you can keep ordering sixty.'],
  ['Customer', 'Ten days is hard in a bad month.'],
  ['Hala', 'Then the third, and it costs us nothing. If you move your delivery from Thursday to Tuesday, we will put you on the lorry that already goes to Jaramana, and you will have it before the shop opens instead of at two in the afternoon.'],
  ['Customer', 'That one. That is worth more to me than the two per cent.'],
  ['Hala', 'I thought it might be. Nobody ever asks for it because nobody knows the lorry goes past.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Making a conditional offer**',
  table(['Shape', 'Example'], [
    ['**If** + present, **will** + verb', '**If you take** a hundred, we **will do** them at the hundred price.'],
    ['Three offers, one choice', 'Let me put three things on the table and **you choose**.'],
    ['An offer that costs nothing', '**If you move** to Tuesday, we **will put** you on the lorry that already goes.'],
    ['Naming the value', 'That is about **six per cent**.'],
    ['Accepting the refusal', '**Then** the second…'],
  ], [1.7, 2.6]),
  '⚠ Still **no _will_ after _if_** — and at this point in the book it is worth noticing that that rule has now done real work in three different units.',
  '⚠ **Three offers, not one.** A single offer is a yes-or-no and half the time it is no. Three offers turn the question from _will you?_ into _which?_, and the customer does the choosing.',
  '⚠ **Find the offer that costs you nothing.** A delivery day, an earlier slot, a different size, a standing order. There is nearly always one, and it is nearly always worth more to the customer than the money is.',
  '⚠ Say the **value** of each offer in a number or a time: _about six per cent_ · _before the shop opens instead of at two_.',
  '**Practise:** Make three conditional offers for each customer, one of them free. 1 a shop 2 a workshop 3 a regular who pays late 4 a new customer 5 a customer who is leaving',
  '**Useful phrases:**  Let me put three things on the table.  ·  If you take…, we will…  ·  it costs us nothing  ·  before the shop opens  ·  Nobody ever asks for it.',
  '**Pronunciation – the two halves of an offer.** 🔊 **Track 19.6** Listen: _if you take a hundred_ — rising, pause — _we will do them at the hundred price_ — falling. The pause is what tells the customer an offer is coming. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. B is thinking of leaving; A puts three offers on the table, one of which costs nothing. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['B', 'Your price is higher than __________. I have been buying from you for __________ and I would rather stay.'],
  ['A', 'Then let me put three things on the table and you choose. If you __________, we will __________ — that is about __________.'],
  ['B', 'I have nowhere to __________.'],
  ['A', 'Then the second. If you __________, we will __________, and you can keep __________.'],
  ['B', '__________ is hard in a bad month.'],
  ['A', 'Then the third, and it costs us nothing. If you __________, we will __________, and you will __________ instead of __________.'],
  ['B', 'That one.'],
]));
out.push(table(['Role card 1 — a restaurant', 'Role card 2 — a workshop'], [[
  'Buys twice a week, small amounts, always in a hurry. Free offers available: a standing order so nothing is ever forgotten; delivery before eleven instead of after two; a telephone call the day before the price list changes.',
  'Buys monthly, large amounts, always pays late. Free offers available: a fixed delivery day; keeping their size in stock so they never wait; an invoice dated the first of the month so it fits their own cycle.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the offer that cost nothing. Then write whether the customer chose it — in this cycle they usually do.'));
out.push(PHRASE_CARD(['Let me put three things on the table.', 'If you take…, we will…', 'it costs us nothing', 'you choose', 'Then the second…', 'Nobody ever asks for it.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('For **three** of your own customers, write three conditional offers each. At least one per customer must cost your company nothing.'));
out.push(table(['Customer', 'Offer 1', 'Offer 2', 'Offer 3 (free)'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1.3, 1.3, 1.5]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _If they _______, we will _______. If they _______, we will _______. And if they _______, we will _______ — which costs us nothing._'));
out.push(p('**Listener task:** write down the best free offer in the room. Ask whether that company has ever offered it to anybody.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _if you will take_ and _we will to reduce_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the offer letter, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Three ways we can hold your price — you choose',
  'Dear Mr Haffar,',
  'You told me on Tuesday that the Jaramana price is lower and that you would rather stay with us. Here are three ways to close the gap. Any one of them is yours; you do not have to justify the choice.',
  '**1 — Quantity.** If you take 100 boxes instead of 60, we will invoice at the hundred price. That is about 6%. You would need the room for forty more boxes.',
  '**2 — Payment.** If you pay within ten days, we will take 2% off every invoice, and nothing else changes.',
  '**3 — Delivery day.** If you move from Thursday to Tuesday, we will put you on the Jaramana lorry. You would have the goods before you open instead of at two in the afternoon. **This one costs us nothing and we should have offered it two years ago.**',
  'Tell me which, or tell me none of them is enough and I will come and see you.',
  'Best regards, Hala Mourad · Sham Trading',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the letter say the customer does not have to do?'));
out.push(item('2', 'Which offer has a sentence admitting something, and what does it admit?'));
out.push(item('3', 'What is the alternative offered at the end?'));
out.push(box('Writer\'s box', [
  '**An offer letter — the shape:** why you are writing, in the customer\'s own words → **three numbered offers**, each a first conditional with its value → the one that costs nothing, marked → and _tell me which, or tell me none of them is enough_.',
  '**Quote the customer back to themselves.** _You told me on Tuesday that the Jaramana price is lower._ It proves you listened and it stops the letter reading like a circular.',
  '**Say they do not have to justify the choice.** People refuse offers because they do not want to explain why they need one. Removing that is free and it works.',
  '⚠ **Admit the free one should have been offered earlier.** It costs nothing, it is true, and a customer who is told the truth about a small thing believes you about a large one.',
  '⚠ End with a door, not a close: _or tell me none of them is enough and I will come and see you._',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write an offer letter to a customer who is thinking of leaving (35 words or more). Use the frame.'));
out.push(p('**Subject:** Three ways ______________ — you choose   Dear ______________,   You told me ______________ that ______________. Here are three ways to ______________. Any one of them is yours; you do not have to justify the choice.   **1 — ______________.** If you ______________, we will ______________. That is about ______________.   **2 — ______________.** If you ______________, we will ______________.   **3 — ______________.** If you ______________, we will ______________. **This one costs us nothing.**   Tell me which, or ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says one of the three must cost you nothing. Which of these three is free, and is it marked?"',
  'If none is free, that is the real finding: look again, because there is nearly always one.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **would the customer answer, or go on thinking about it?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three offers, each a first conditional', ''],
  ['A value — a number or a time — on each', ''],
  ['One that costs nothing, marked', ''],
  ['A door at the end, not a close', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their free offer. The class says which customer would take it, and why nobody had offered it before.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a customer your workplace has lost, or nearly lost (60 to 100 words). Say what they wanted, what was offered, what could have been offered that cost nothing, and whether anybody asked them why they were going.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the free offer nobody made_   ✓ _no "will" after "if"_   ? _did anybody ask why they left?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many did anybody ask the customer why they were leaving? The number is usually very small, and it is the cheapest piece of market research there is.'));
out.push(box('Homework', ['Write your final text. Then find one thing your workplace could offer that costs nothing, and offer it to one customer this week (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.4 =======================
out.push(pb());
out.push(h2('19.4  We have bought from her for eleven years'));
out.push(p('**Function:** describing a long relationship   ·   **Grammar:** present perfect with _for_ and _since_, revisited for relationships   ·   **Pronunciation:** saying a long number of years'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Who is the oldest customer or supplier your workplace has? How long, exactly?'));
out.push(p('**b**  Say it three ways: _We have bought from them ______ eleven years. ______ 2015. It is eleven years ______ we started._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is being written?   **A** a letter of complaint   **B** a reference for a supplier   **C** an invoice'));
out.push(p('**b**  Listen again. **1** What three facts are chosen for the reference? **2** What does Nour refuse to write, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.7  Writing a reference', [
  ['Ms Shamsi', 'The bank has asked me for a reference from a long-standing customer. Would you write one?'],
  ['Nour', 'Gladly. What does the bank want to know?'],
  ['Ms Shamsi', 'Whether I am real, I think. They always say "a trading reference".'],
  ['Nour', 'Then three facts, and no adjectives. We have bought from you for eleven years, since March 2015. We have placed about four hundred orders in that time. And in March, when the Aleppo road was closed for nine days, you telephoned us before we telephoned you and put thirty rolls on a bus.'],
  ['Ms Shamsi', 'You could say I am reliable.'],
  ['Nour', 'Everybody writes reliable. It is worth nothing because it is free. The nine days cannot be invented and it is the only sentence the bank will remember.'],
  ['Ms Shamsi', 'And the four per cent?'],
  ['Nour', 'Is between us, and it is why I will say yes if you ever ask me for a reference again.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a long relationship – facts, not adjectives**',
  table(['Shape', 'Example'], [
    ['**have bought from** + **for / since**', 'We **have bought from** you **for** eleven years, **since** March 2015.'],
    ['How much, over the period', 'We **have placed** about four hundred orders.'],
    ['One thing that happened', 'In March, when the road was closed, **you telephoned us first**.'],
    ['No adjective where a fact will do', '~~reliable~~ → _nine days, thirty rolls, a bus_'],
    ['**It is … since**', '**It is** eleven years **since** we started.'],
  ], [1.9, 2.4]),
  '⚠ **One fact beats five adjectives.** _Reliable, fair, prompt, professional, honest_ costs nothing to write and is written about everybody. _She put thirty rolls on a bus_ cannot be invented.',
  '⚠ Give the relationship **three numbers**: how long, how much, and one event with its size. That is a reference, and the rest is decoration.',
  '⚠ A reference is a favour you will want back. Say so to yourself when you are deciding how long to spend on it.',
  '**Practise:** Describe three relationships your workplace has — a supplier, a customer, a service — in three facts each, with no adjectives at all.',
  '**Useful phrases:**  We have bought from them for…  ·  about four hundred orders  ·  when the road was closed, they…  ·  Everybody writes reliable.  ·  It is between us.',
  '**Pronunciation – long numbers of years.** 🔊 **Track 19.8** Listen: _eleven years · since March two thousand and fifteen · about four hundred orders_. Say the number slowly and the rest at speed; the number is the information. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for a reference; B gives three facts and refuses to write an adjective. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', '__________ has asked me for a reference from __________. Would you write one?'],
  ['B', 'Gladly. What do they want to know?'],
  ['A', 'Whether I am real, I think.'],
  ['B', 'Then three facts, and no adjectives. We have __________ for __________, since __________. We have __________ in that time. And in __________, when __________, you __________.'],
  ['A', 'You could say I am __________.'],
  ['B', 'Everybody writes __________. It is worth nothing because it is free. __________ cannot be invented.'],
]));
out.push(table(['Role card 1 — a customer\'s reference', 'Role card 2 — a landlord\'s reference'], [[
  'A customer of nine years wants a reference for a loan. Facts available: nine years; about 70 million of trade; and the month he paid early, unasked, because he had heard the company was short.',
  'A tenant of six years wants a reference for a new landlord. Facts available: six years; two rent rises accepted without argument; and the winter he repaired the roof himself and sent the receipt instead of a complaint.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the fact that could not have been invented. That is the whole reference.'));
out.push(PHRASE_CARD(['We have bought from them for…', 'about four hundred orders', 'Everybody writes reliable.', 'cannot be invented', 'It is between us.', 'since March 2015']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the three facts for **three** relationships your workplace has. No adjectives anywhere. Then say each one aloud to a colleague.'));
out.push(table(['Who', 'How long', 'How much', 'The one event'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 0.9, 1.1, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We have _______ from _______ for _______, since _______. In that time, _______. And in _______, when _______, they _______._'));
out.push(p('**Listener task:** write down the event you would most like somebody to write about your own workplace. Then ask whether anybody outside would know about it.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _we buy from her since eleven years_ and _we are buying from her since 2015_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the trading reference, and answer the questions.'));
out.push(box(null, [
  '**TRADING REFERENCE — Shamsi Packaging, Aleppo**',
  'To whom it may concern,',
  'Sham Trading Co. has bought packaging from Shamsi Packaging **since March 2015** — eleven years. In that time we have placed approximately four hundred orders, with a total value of about 310 million SYP.',
  'Deliveries normally arrive within four days of order. In the eleven years we have had **two** short deliveries, both corrected within a week.',
  'In March of this year the Aleppo road was closed for nine days. Ms Shamsi telephoned us before we telephoned her, and sent thirty rolls of wrap by bus at her own cost so that our own customers were not held up. We had not asked.',
  'We have no financial interest in Shamsi Packaging and we pay their invoices on standard terms.',
  'I am happy to answer any question by telephone.',
  'Khaled Ayoub, Office Manager, Sham Trading Co. · 011 ___ ____ · 14 December',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many adjectives describing the supplier are in this reference?'));
out.push(item('2', 'Why does it mention the two short deliveries?'));
out.push(item('3', 'What does the second-to-last paragraph do?'));
out.push(box('Writer\'s box', [
  '**A trading reference — six short paragraphs:** how long, with the exact month → **how much**, in orders and value → the normal performance, with a number of failures → **one event**, told plainly → a line saying you have **no financial interest** → and an offer to answer questions, signed with a telephone number and a date.',
  '**Include the failures.** _Two short deliveries in eleven years, both corrected within a week._ A reference with no faults in it reads as a reference written by a friend; two faults make the rest believable.',
  '**The "no financial interest" line** is the one that turns a kind letter into a document a bank can use. It costs nothing and almost nobody includes it.',
  '⚠ No adjectives. Not one. If you find yourself writing _excellent_ or _reliable_, you have not found the fact yet.',
  '⚠ Sign with a name, a position, a telephone number and a date. A reference that cannot be checked is not a reference.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a trading reference for a real supplier or customer (35 words or more). Use the frame.'));
out.push(p('**TRADING REFERENCE — ______________**   To whom it may concern,   ______________ has ______________ from ______________ **since ______________** — ______________ years. In that time ______________.   ______________ normally ______________. In ______________ years we have had ______________, ______________.   In ______________, ______________. We had not asked.   We have no financial interest in ______________ and ______________.   I am happy to ______________.   ______________ · ______________ · ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says include the failures. There are none here in eleven years — were there really none, or have they been left out?"',
  'Quote, question, stop. The answer is usually that there were two and they were forgotten, which is itself worth writing.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a bank use this?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How long, with the exact month', ''],
  ['How much, in orders or value', ''],
  ['The failures, counted', ''],
  ['No adjectives, and a telephone number at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their one event. The class says which could not have been invented.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about the longest business relationship you know of (60 to 100 words). Say how long, how it started, what has kept it, and one thing that happened that proves it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the fact that proves it_   ✓ _for / since correct?_   ? _does the other side know you would write this?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. Ask whether the other side knows. In most cases they do not, and one sentence this week would change that.'));
out.push(box('Homework', ['Write your final text. Then write the three facts about your workplace that somebody else would use in a reference about you — and ask a colleague whether they are the right three (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.5 =======================
out.push(pb());
out.push(h2('19.5  Reliable, fair, slow, always on time'));
out.push(p('**Function:** describing a supplier   ·   **Grammar:** adjectives of reliability and their evidence   ·   **Pronunciation:** the adjective that is really a complaint'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Describe your main supplier in three words. Now say what each word is based on.'));
out.push(p('**b**  Which of these can be proved with a number? _reliable · cheap · slow · fair · difficult · always on time_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are they deciding?   **A** which supplier to drop   **B** which of two to use for a new line   **C** how much to pay'));
out.push(p('**b**  Listen again. **1** What is said about the cheaper one? **2** What does Mr Ayoub say an adjective must have behind it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.9  Two suppliers, one line', [
  ['Mr Ayoub', 'Two quotations for the new size. Tell me about them without using the word good.'],
  ['Nour', 'Barakat is cheaper by nine per cent. They are quick — same day if you telephone before ten — and they are careless. Three of the last ten deliveries had something wrong: a wrong size once, short twice.'],
  ['Mr Ayoub', 'And the other?'],
  ['Nour', 'Shamsi is dearer and she has had two problems in eleven years. Her lead time is four days and it is four days. She has never been late without telephoning first.'],
  ['Mr Ayoub', 'So one is cheap and careless and one is dear and certain.'],
  ['Nour', 'Yes. And the nine per cent is about 400,000 a year on this line. Three wrong deliveries a year cost us more than that in telephone calls and a customer who waited.'],
  ['Mr Ayoub', 'Then you have answered it with a number rather than an adjective, which is what I asked for. Put both quotations in the file with that sentence at the top.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Describing a supplier – the adjective and the evidence behind it**',
  table(['Adjective', 'What proves it'], [
    ['**reliable / dependable**', 'two problems in eleven years'],
    ['**prompt / quick**', 'same day if you telephone before ten'],
    ['**careless**', 'three of the last ten deliveries had something wrong'],
    ['**slow**', 'lead time nine days against four'],
    ['**fair**', 'held the price through a currency move'],
    ['**difficult**', 'four telephone calls to settle one credit note'],
  ], [1.5, 2.5]),
  '⚠ **Every adjective in this box is a summary of a number.** Say the adjective if you like, but never without the number behind it, because the person listening has a different definition of _reliable_ from yours.',
  '⚠ **Cheap is not a quality; it is a price.** Put the saving and the cost of the problems side by side: _nine per cent is 400,000 a year; three wrong deliveries cost more than that._',
  '⚠ _Lead time four days **and it is four days**_ — the repetition is the point. A supplier whose stated lead time is the real one is rarer than a cheap one.',
  '**Practise:** Describe three suppliers with one adjective each and the number behind it. Then say which you would use for a new line and why.',
  '**Useful phrases:**  cheaper by nine per cent  ·  three of the last ten  ·  her lead time is four days and it is four days  ·  never late without telephoning first  ·  answered with a number rather than an adjective',
  '**Pronunciation – the adjective that is really a complaint.** 🔊 **Track 19.10** Listen: _they are **quick**_ and _they are **careless**_ said in the same flat voice. Describing a supplier\'s faults calmly is what makes you believed about their strengths. Repeat six.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks for two suppliers to be compared without the word _good_; B gives adjectives with numbers. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Two quotations for __________. Tell me about them without using the word good.'],
  ['B', '__________ is cheaper by __________. They are __________ — __________ — and they are __________. __________ of the last __________ had __________.'],
  ['A', 'And the other?'],
  ['B', '__________ is dearer and __________ in __________ years. Their lead time is __________ and it is __________.'],
  ['A', 'So one is __________ and one is __________.'],
  ['B', 'Yes. And the __________ per cent is about __________ a year. __________ cost us more than that.'],
]));
out.push(table(['Role card 1 — two carriers', 'Role card 2 — two printers'], [[
  'One is 15% cheaper and lost two consignments last year. The other has lost nothing in six years, costs more, and telephones when a lorry is delayed. The two lost consignments cost about 1.2 million and one customer.',
  'One is cheaper and the colour is never quite the same twice. The other matches every time, takes two days longer, and will reprint a bad job without an argument. Reprints last year: one, free.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the comparison for the class – **without the book**.'));
out.push(p('**Listener task:** write the sentence where the saving and the cost of the problems were put side by side. That sentence is the decision.'));
out.push(PHRASE_CARD(['cheaper by nine per cent', 'three of the last ten', 'four days and it is four days', 'never late without telephoning', 'cheap and careless', 'dear and certain']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Describe **four** suppliers or services your workplace uses: one adjective each, the number behind it, and whether you would use them for something important.'));
out.push(table(['Who', 'The adjective', 'The number behind it', 'For something important?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1, 1, 1.8, 1.3]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _______ is _______, and the evidence is _______. I _______ use them for something important, because _______._'));
out.push(p('**Listener task:** write down the adjective you heard most often. It is usually _reliable_, and usually without a number.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _more cheaper_ and _they are always in time_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note comparing two suppliers, and answer the questions.'));
out.push(box(null, [
  '**Two quotations for the new box size — and what I would do**',
  '**The sentence at the top:** Barakat is 9% cheaper, which is about 400,000 a year on this line. Three of their last ten deliveries had a fault. Three faults a year cost more than 400,000 once a customer has waited.',
  '**Barakat Wholesale.** Price 4,100 a box. Lead time: same day before ten, which is real. Last ten deliveries: one wrong size, two short. All three were put right, and all three took two telephone calls and a day.',
  '**Shamsi Packaging.** Price 4,500 a box. Lead time four days, and it is four days. Two problems in eleven years. Has never been late without telephoning first.',
  '**What I would do.** Shamsi for the boxes that go to customers. Barakat for the boxes we use ourselves, where a wrong size costs us an hour and not a customer.',
  '**What would change my mind.** If Barakat went six months with ten clean deliveries, I would move the customer boxes too, and I would tell them that is the test.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is "the sentence at the top" for?'));
out.push(item('2', 'What is the recommendation, and why is it not simply one supplier?'));
out.push(item('3', 'What would change the writer\'s mind, and what does she say she would do about it?'));
out.push(box('Writer\'s box', [
  '**A note comparing two suppliers — five parts:** **the sentence at the top** (the whole decision in one sentence, with both numbers) → each supplier, price, lead time and faults counted → **what I would do** → **what would change my mind**.',
  '**Put the decision first.** A reader who stops after one sentence should have the answer. Everything after it is evidence for somebody who wants to check.',
  '**Split the business if the risk is different.** Customer boxes and our own boxes are not the same decision; most "which supplier" questions are really two questions.',
  '⚠ **Tell the supplier what the test is.** _I would tell them that is the test._ A supplier who knows what would win the rest of the business often goes and wins it, which is a better outcome than either quotation.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a note comparing two suppliers or services (35 words or more). Use the frame.'));
out.push(p('**Two ______________ — and what I would do**   **The sentence at the top:** ______________ is ______________ cheaper, which is about ______________. ______________. ______________ cost more than ______________.   **______________.** Price ______________. Lead time ______________. ______________.   **______________.** Price ______________. Lead time ______________. ______________.   **What I would do.** ______________ for ______________. ______________ for ______________.   **What would change my mind.** If ______________, I would ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says the sentence at the top carries both numbers. Yours has the saving — what do the faults cost?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could a manager decide after reading one sentence?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The decision in the first sentence', ''],
  ['Both numbers — the saving and the cost of faults', ''],
  ['Faults counted, not described', ''],
  ['What would change the writer\'s mind', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their first sentence. The class says what the decision is. If they cannot, the sentence is not doing its job.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a supplier everybody at your work complains about (60 to 100 words). Say what the complaint is, what the number behind it actually is, what they are cheaper by, and whether the complaint survives the arithmetic.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _the number behind the complaint_   ✓ _adjectives with evidence?_   ? _has anybody told the supplier?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many does the complaint survive the arithmetic? In about half it does not, and that is worth knowing before the next argument about it.'));
out.push(box('Homework', ['Write your final text. Then count the last ten deliveries from one supplier and write how many had a fault. Compare the number with what people say about them (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.6 =======================
out.push(pb());
out.push(h2('19.6  Let us agree on the day and the price'));
out.push(p('**Function:** agreeing terms   ·   **Grammar:** _Let\'s agree on… · shall we say… · so, to confirm_   ·   **Pronunciation:** reading an agreement back'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last thing you agreed at work. Was it written down? By whom?'));
out.push(p('**b**  Which of these ends a negotiation properly? _Fine. · Good, thank you. · So, to confirm: three hundred rolls, three per cent, paid in ten days, price held until December._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things are agreed?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** What does Nour do at the end of the call? **2** What one thing is deliberately left open, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.11  To confirm', [
  ['Nour', 'Then let us agree on the four things. Three hundred rolls a quarter.'],
  ['Ms Shamsi', 'Three hundred a quarter.'],
  ['Nour', 'Three per cent off the hundred price, and we pay within ten days.'],
  ['Ms Shamsi', 'Within ten days. If a payment is late, the three per cent does not apply to that order — I am not taking it away for ever, only for that one.'],
  ['Nour', 'That is fair and I would have asked for the same. The price held until the end of December, unless the exchange rate moves more than ten per cent.'],
  ['Ms Shamsi', 'Agreed.'],
  ['Nour', 'And delivery — shall we say the first week of each quarter, and I will telephone you in the last week of the one before?'],
  ['Ms Shamsi', 'Let us leave the day open. Some quarters I have a lorry coming this way and some I do not. If you let me choose the day inside that week, you will get it cheaper and I will not have to charge you for a lorry that is half empty.'],
  ['Nour', 'Then that stays open, on purpose. So, to confirm — I am writing this down as I say it…'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Agreeing terms – and closing properly**',
  table(['Move', 'What to say'], [
    ['**Open the list**', '**Let us agree on** the four things.'],
    ['**One at a time**', 'Three hundred a quarter. · Within ten days.'],
    ['**Propose**', '**Shall we say** the first week of each quarter?'],
    ['**Leave something open on purpose**', '**Let us leave the day open**, because…'],
    ['**Close**', '**So, to confirm** — three hundred rolls, three per cent, ten days, held until December.'],
  ], [1.5, 2.6]),
  '⚠ **Agree one thing at a time and say each one back.** A negotiation that is settled in a paragraph is a negotiation that will be disagreed about in March.',
  '⚠ **Something should usually be left open, on purpose, with the reason.** _Let us leave the day open, because some quarters I have a lorry coming this way._ An agreement that fixes everything costs one side money, and they will want it back.',
  '⚠ **The closing summary is not politeness.** It is the moment the other person hears the whole thing and can say "no, I said ten days from the invoice, not from delivery" — which is exactly the sentence you want now and not in March.',
  '⚠ Say that you are writing it down. It is not rude. It is the reason the other side will say yes to the written version tomorrow.',
  '**Practise:** Agree four terms for each, say one back wrongly, and have your partner correct it. 1 a supply agreement 2 a delivery arrangement 3 a payment plan 4 a repair 5 a rota',
  '**Useful phrases:**  Let us agree on…  ·  Shall we say…?  ·  That is fair and I would have asked for the same.  ·  Let us leave that open.  ·  So, to confirm…  ·  I am writing this down as I say it.',
  '**Pronunciation – reading an agreement back.** 🔊 **Track 19.12** Listen: each item is separated by a short pause and the voice falls on every one. Repeat the four-item summary twice, slowly. A summary said quickly is a summary nobody can correct.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A agrees four terms one at a time and closes with a summary; B adds one condition and leaves one thing open. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Then let us agree on the four things. __________.'],
  ['B', '__________.'],
  ['A', '__________, and we __________.'],
  ['B', '__________. If __________, __________ — I am not taking it away for ever, only for that one.'],
  ['A', 'That is fair. __________ until __________, unless __________.'],
  ['B', 'Agreed.'],
  ['A', 'And __________ — shall we say __________?'],
  ['B', 'Let us leave __________ open, because __________.'],
]));
out.push(table(['Role card 1 — a delivery agreement', 'Role card 2 — a payment plan'], [[
  'Four terms: how often, how much, which day, who telephones whom. Leave open: the exact hour, because the driver\'s round changes with the traffic and a fixed hour would cost money.',
  'Four terms: the amount, the dates, what happens if one is late, how long the plan runs. Leave open: the method of payment, because the customer may want to pay cash in a bad month.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the agreement for the class – **without the book**. The listener writes the four terms from the closing summary alone.'));
out.push(p('**Listener task:** could you write all four terms from the summary? If not, the summary failed, and in real life that is a dispute in March.'));
out.push(PHRASE_CARD(['Let us agree on…', 'Shall we say…?', 'That is fair.', 'Let us leave that open.', 'So, to confirm…', 'I am writing this down.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Agree **three** sets of terms with colleagues — real or invented. Each set: four terms, one condition, one thing left open on purpose, and a closing summary.'));
out.push(table(['With whom', 'The four terms', 'Left open, and why'], [['', '', ''], ['', '', ''], ['', '', '']], [1, 2.2, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _We agreed _______, _______, _______ and _______. We left _______ open, because _______._'));
out.push(p('**Listener task:** write down the best "left open" in the room. The good ones always have a reason that saves somebody money.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _let us agree about_ and _shall we to say_. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the confirmation email, and answer the questions.'));
out.push(box(null, [
  '**Subject:** Agreed on the telephone today — please correct anything I have wrong',
  'Dear Ms Shamsi,',
  'Thank you for this morning. This is what I wrote down as we spoke. Please correct anything that is wrong — I would rather be corrected today than in March.',
  '**1 Quantity.** 300 rolls of wide wrap per quarter, one order.',
  '**2 Price.** 3% below the hundred price, held until 31 December, unless the exchange rate moves more than 10%.',
  '**3 Payment.** Within 10 days of invoice. If a payment is late, the 3% does not apply to **that order only**.',
  '**4 Delivery.** First week of each quarter. **The day inside that week is yours to choose**, so that you can use a lorry that is already coming. I will telephone you in the last week of the quarter before.',
  'Everything else stays as it is.',
  'If I have any of this wrong, one line back is enough. If it is all right, you do not need to reply.',
  'Thank you. Best regards, Nour Mansour · Sham Trading · 14 December',
], 'FFFFFF', C.navy));
out.push(item('1', 'What does the writer ask for in the first paragraph?'));
out.push(item('2', 'Which term protects the supplier, and which protects the buyer?'));
out.push(item('3', 'Why does the last line say a reply is not needed if it is all right?'));
out.push(box('Writer\'s box', [
  '**A confirmation email — the shape:** thanks in one line → **"this is what I wrote down; please correct anything wrong"** → the terms, **numbered and headed** → what is deliberately left open, with the reason → _everything else stays as it is_ → and an easy reply.',
  '**Send it the same day.** The value is entirely in the speed: a summary written while both people remember is a record; one written in March is an argument.',
  '**Number and head every term.** Quantity · Price · Payment · Delivery. A disagreement about term 3 can then be settled without reopening terms 1, 2 and 4.',
  '⚠ **"You do not need to reply."** Nobody replies to confirmations anyway, so say that silence means agreement and make the silence mean something. One line back is the only thing you are asking for.',
  '⚠ Include the condition that is **against** you — _if a payment is late, the 3% does not apply_. Writing down the other side\'s protection is what makes them trust your version of everything else.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a confirmation email for something you have agreed (35 words or more). Use the frame.'));
out.push(p('**Subject:** Agreed on ______________ — please correct anything I have wrong   Dear ______________,   Thank you for ______________. This is what I wrote down as we spoke. Please correct anything wrong — ______________.   **1 ______________.** ______________.   **2 ______________.** ______________, unless ______________.   **3 ______________.** ______________. If ______________, ______________.   **4 ______________.** ______________. **______________ is yours to choose**, so that ______________.   Everything else stays as it is.   If I have any of this wrong, ______________. If it is all right, ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 feedback — name the criterion', [
  '"The box says include the condition that is against you. Is there one here, and would the other side recognise their own protection in it?"',
  'Quote, question, stop.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **could this be argued about in March?** Tick ✓ or cross ✗.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Terms numbered and headed', ''],
  ['The thing left open, with its reason', ''],
  ['A condition that is against the writer', ''],
  ['Silence made to mean agreement', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their term 3. The class says which agreement they would rather be on the other side of.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something that was agreed at your work and never written down (60 to 100 words). Say what was agreed, who remembers it differently, what it has cost, and what one email would have prevented.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _what the email would have said_   ✓ _terms listed one at a time?_   ? _is it too late to write it now?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. In how many is it still possible to write the confirmation today? Usually most of them, and somebody should.'));
out.push(box('Homework', ['Write your final text. Then send one confirmation email about something agreed this week, with numbered terms, and write down whether anybody corrected anything (35+ words).'], C.lblue, C.navy));

// ======================= CYCLE 19.7 =======================
out.push(pb());
out.push(h2('19.7  Review & Mediate: the quotation'));
out.push(p('**Function:** telling a colleague what a quotation really says   ·   **Review:** buying from · asking for a price · conditional offers · long relationships · describing suppliers · agreeing terms'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 19 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** _She supplies us ______ boxes._ · _We buy them ______ Aleppo._',
  '**2** What are the four moves when you ask for a better price?',
  '**3** Why make three offers instead of one?',
  '**4** What is wrong with the word _reliable_ in a reference?',
  '**5** What should a negotiation always end with?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What has Fadi misread?   **A** the price   **B** what "ex works" means   **C** the quantity'));
out.push(p('**b**  Listen again. **1** What two things are not in the price? **2** What does Nour say the quotation is really asking?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 19.13  "This one is cheaper"', [
  ['Fadi', 'The new quotation is cheaper. Three thousand nine hundred against four thousand five hundred.'],
  ['Nour', 'Read me the three lines under the price.'],
  ['Fadi', '"Ex works. Minimum order 500. Payment with order."'],
  ['Nour', 'Then it is not cheaper. _Ex works_ means we collect it from Aleppo ourselves — that is a lorry, a day and a driver, about 600,000 a trip. _Minimum 500_ means we buy five times what we use in a quarter. And _payment with order_ means we pay before we have seen it.'],
  ['Fadi', 'So the price is not the price.'],
  ['Nour', 'The price is the price of the boxes standing in their yard. Shamsi\'s four thousand five hundred is the price of the boxes standing in **our** yard, a hundred at a time, paid thirty days later.'],
  ['Fadi', 'Then why send it at all?'],
  ['Nour', 'Because it is a real offer to a bigger company than us. It is not a trick; it is addressed to somebody else. What it is asking us is: are you big enough yet? And this year the answer is no.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – a quotation, where the price is the smallest part of it**',
  table(['To slow the reading', 'To price the conditions', 'To place the offer'], [
    ['Read me the three lines under the price.', '_Ex works_ means ___ — about ___ a trip.', 'It is addressed to somebody else.'],
    ['Then it is not cheaper.', '_Minimum 500_ means we buy ___ .', 'What it is asking us is: are you big enough yet?'],
  ], [1.8, 1.9, 1.7]),
  '⚠ **The terms under the price are the price.** _Ex works · minimum order · payment with order · lead time · price valid until_. Each of them has a cost in money or in risk, and a quotation is not read until all of them are priced.',
  '⚠ **Translate the terms into your own yard:** _ex works_ = a lorry, a day and a driver · _minimum 500_ = five quarters of stock · _payment with order_ = our money, their goods, for four days.',
  '⚠ **A cheaper quotation is often not a trick but a letter to a different company.** Saying so is kinder and more accurate than saying it is dishonest, and it leaves the door open for the year when the answer changes.',
  '**Practise:** The quotation says 3,900, ex works, minimum 500, payment with order. Explain to a colleague why it is not cheaper than 4,500 delivered, 100 at a time, 30 days.',
  '**Useful phrases:**  Read me the lines under the price.  ·  Then it is not cheaper.  ·  the price of the boxes standing in their yard  ·  It is addressed to somebody else.  ·  are you big enough yet?',
  '**Pronunciation – reading terms aloud.** 🔊 **Track 19.14** Listen: _ex works · minimum order five hundred · payment with order_ — each said flat, with a pause after it, as a list of three separate costs. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a quotation silently; B has seen only the price and thinks it is cheaper. A prices the conditions. Then swap.'));
out.push(table(['Quotation 1 — for A', 'Quotation 2 — for B'], [[
  '**QUOTATION.** _Paper, 2,850 per ream. Ex works Homs. Minimum order 200 reams. Payment with order. Price valid 7 days._  Current supplier: 3,050 delivered, any quantity, 30 days, price held since March.  **B says:** that is two hundred a ream cheaper.',
  '**QUOTATION.** _Pallets, 11,000 each delivered. Minimum 50. No returns of broken pallets. 50% deposit._  Current supplier: 12,500 delivered, any quantity, takes broken ones back, 30 days.  **A says:** fifteen hundred each is a lot.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out their exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the condition that cost the most. It is almost never the price and it is almost always a line nobody read.'));
out.push(PHRASE_CARD(['Read me the lines under the price.', 'Then it is not cheaper.', 'ex works means…', 'standing in our yard', 'addressed to somebody else', 'are you big enough yet?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher gives you a quotation. Read it silently. Then explain to **two** colleagues what it really costs, once every condition is priced.'));
out.push(table(['Who I told', 'What they thought the price was', 'What it really costs'], [['', '', ''], ['', '', '']], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about the quotation you mediated. This is the **seventh** unit of Book 2, and the unwritten thing here is the oldest trick in trade: the number everybody reads is the one that matters least, and the conditions under it are the real document.'));
out.push(p('_It\'s a ______. The price looked like ______. _______ means ______, which costs ______. The real price is ______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _ex works · minimum order · lead time · deposit · quotation valid until · credit limit_.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)', 10));
out.push(p('Read the six short workplace texts. For each one, choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _Minimum order 500 units._   **A** You may order any amount. **B** You cannot order fewer than 500. **C** You must order 500 every month.',
  '**2**  _Ex works._   **A** Delivery is included. **B** You collect the goods yourself. **C** The goods are free.',
  '**3**  _Payment with order._   **A** Pay before the goods are sent. **B** Pay thirty days later. **C** Pay on delivery.',
  '**4**  _Quotation valid for 7 days._   **A** The goods arrive in 7 days. **B** The price may change after 7 days. **C** You must pay within 7 days.',
  '**5**  _If you order 300, we will reduce the price by 3%._   **A** The price is already reduced. **B** A larger order earns a lower price. **C** The price rises with 300.',
  '**6**  _Lead time four days._   **A** It arrives four days after you order. **B** It lasts four days. **C** You have four days to pay.',
], 'FFFFFF', C.navy));
out.push(box('Writer\'s box', [
  '**A2 Key Writing Part 6 — a short message (25 words or more),** three points, all three present.',
  'For a message about a quotation or an offer, the three points are usually: **what the price is** · **the condition that changes it** · **what you want the reader to do, and when**.',
  '⚠ In twenty-five words you cannot explain a quotation. Give the price, give the one condition that matters most, and ask for the decision.',
  '⚠ Numbers and percentages go in **figures**, not words: _3%_, _300 rolls_, _4,500_. It is shorter and it is what a business reader is scanning for.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task.** You have received a quotation. Write a message to your manager (25 words or more). Say **the price**, **the condition that changes it**, and **what you want them to decide, and by when**.'));
out.push(p('______________, the quotation for ______________ is ______________. It is only that price if ______________. Could you decide by ______________? ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the three points. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The price, in figures', ''],
  ['The condition that changes it', ''],
  ['A decision asked for, with a date', ''],
  ['25 words or more', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time your workplace chose a supplier on price (60 to 100 words). Say what the price was, what the conditions under it were, what happened, and what anybody learned.'));
out.push(...lines(6));
out.push(box('Homework', ['Write your final text. Then take a real quotation and write the full cost of every condition under the price — a lorry, a minimum, a deposit — and compare the two numbers (35+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 19 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  We buy the boxes ___ Ms Shamsi.   a) from   b) at   c) of',
  '2  She supplies us ___ wrap and tape.   a) of   b) with   c) by',
  '3  ___ you do better than the hundred price?   a) Could   b) Should   c) Must',
  '4  If you order three hundred, we ___ reduce it.   a) would   b) will   c) are',
  '5  We have bought from her ___ eleven years.   a) since   b) for   c) during',
  '6  Their lead time is four days and ___ four days.   a) it is   b) there is   c) it has',
  '7  Let us ___ on the four things.   a) agree   b) to agree   c) agreeing',
  '8  So, to ___ : three hundred rolls, three per cent, ten days.   a) confirming   b) confirm   c) confirmed',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 19.15** Listen to the end of a negotiation. Complete the note.   Quantity: ______   Discount: ______   Payment: ______   Price held until: ______   Left open: ______'));
out.push(dlg('Track 19.15  Audio script (read after the check)', [
  ['Nour', 'So, to confirm — three hundred rolls a quarter, three per cent below the hundred price, and we pay within ten days of invoice.'],
  ['Ms Shamsi', 'And if a payment is late, the three per cent does not apply to that order — only to that one.'],
  ['Nour', 'Understood. The price held until the end of December, unless the exchange rate moves more than ten per cent.'],
  ['Ms Shamsi', 'And the delivery day inside the first week stays open, so that I can use a lorry that is already coming this way.'],
]));
out.push(p('**C  Writing.** Write the four moves of an ask to a supplier (35+ words): say you are asking plainly, the specific number, what you would offer, and one more thing at the end.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 19)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ say where we buy each thing from, with the place and how long',
  '☐ ask for a better price with a **number** and an offer attached',
  '☐ ask for one more thing after the agreement',
  '☐ make three conditional offers, one of which costs us nothing',
  '☐ describe a long relationship in facts instead of adjectives',
  '☐ describe a supplier with the number behind the adjective',
  '☐ agree terms one at a time and close with a summary',
  '☐ tell a colleague what a quotation really costs, once the conditions are priced',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 19 · Student\'s Book');
