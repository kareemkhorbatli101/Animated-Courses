// Proactive Business English A2 · Syria Edition · Book 1 · Unit 4 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 4  Stock, Orders and Quantities'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 4.1 =====================
out.push(h2('4.1  Two cartons, six rolls and a lot of tape'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Countable ✓: **box · roll · packet · item**.  Uncountable ✗: **paper · tape · water**.'));
out.push(p('**b**  a **packet / sheet / ream** of paper · a **roll** of tape · a **bottle / glass / litre** of water'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the stock list)   **b**  1 Thirty rolls.  2 Because _a paper_ means one sheet — the head office would send six sheets.'));
out.push(p('**Language box – Practise:**  1 How much (— thirty rolls)  2 How many (— forty big, about a hundred small)  3 How much (— six packets)  4 How many (— twelve pairs)  5 How much (— about two hours\' work)'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I\'m writing the stock list. Ink?'],
  ['B', 'Two cartridges. Not two inks — two cartridges of ink.'],
  ['A', 'Two cartridges. And paper?'],
  ['B', 'Paper you count in packets. Six packets.'],
  ['A', 'And staples?'],
  ['B', 'None. Write **none**, not nothing.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write five quantities with their units — one mark for the number, one for the unit. Typical errors: _two papers_ → _two packets of paper_; _how much boxes_ → _how **many**_; _a tape_ → _a **roll of** tape_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Place', 'Item', 'Quantity + unit'], [
  ['kitchen cupboard', 'rice', '2 kilos'],
  ['kitchen cupboard', 'oil', '1 bottle (5 litres)'],
  ['desk drawer', 'pens', '7'],
  ['desk drawer', 'tape', 'half a roll'],
], [1.2, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In Rasha\'s cupboard there are two kilos of rice and one bottle of oil. There\'s a lot of sugar and no tea."', 'Unit words a class often meets for the first time here: **sack, carton, ream, pair, sheet, length**.']));
out.push(stage('5', 'Read'));
out.push(p('1 Low: paper (6 packets, minimum 10). Out of stock: plastic wrap, wide.  2 Twenty-four pairs (2 cartons × 12).  3 That "about a hundred" is not a number — the small boxes must be counted properly on Sunday.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**STOCK CARD — kitchen cupboard**   Checked: Friday morning, by R.H.  Rice: 2 kilos · minimum 5 · **LOW — buy**.  Oil: 1 bottle (5 litres) · minimum 1 · in stock.  Sugar: 4 kilos · minimum 2 · in stock.  Tea: none · minimum 1 packet · **OUT OF STOCK — urgent**.  Note: the flour is open and I could not weigh it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every quantity has its unit', '✗ – _sugar: 4_ → _4 **kilos**_'],
  ['No empty spaces — _none_ written', '✓'],
  ['The state is in words', '✓'],
  ['Date and name of the checker', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I can see exactly what to buy. _Sugar: 4_ needs its unit — four what?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Tape: 30._  →  After: _Tape: 30 rolls._ (a number without a unit is not a quantity)'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['For the week I am away: there are four kilos of rice and two sacks of flour in the bottom cupboard. There are twelve cartons of milk in the fridge and a crate of water by the door. There is half a roll of tape in the drawer and no bin bags at all — buy a packet of fifty on Monday.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I could work from this — everything has a place and a number._   ✓ _Can you add the unit for the flour?_   ? _Where is the money for the bin bags?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A class of twenty usually collects between twelve and eighteen unit words: _roll, packet, carton, box, sack, crate, bottle, kilo, litre, pair, dozen, piece, sheet, bag, tin, jar, length, metre_.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Rice: 2 kilos · in stock. Lentils: 1 kilo · low. Sugar: 4 kilos · in stock. Salt: 1 packet · in stock. Tea: none · urgent. Coffee: 300 g · low. Oil: 1 bottle · in stock. Tins of tomatoes: 6 · in stock. Pasta: 3 packets · in stock. Bin bags: none · urgent.']));

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  How much have we got left?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _How many chairs are there? How many windows? How much light is there? How much room have we got?_'));
out.push(p('**b**  **none** → **not much / not many** → **a little / a few** → **a lot of** → **plenty of**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (Mr Ayoub)   **b**  1 Thirty rolls — enough for this order and the next.  2 Boxes (forty big and a hundred small).'));
out.push(p('**Language box – Practise:**  1 much  2 many  3 a lot of  4 a little  5 many'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The wedding is big. How many chairs have we got?'],
  ['B', 'Plenty of chairs — two hundred and sixty.'],
  ['A', 'And how much water?'],
  ['B', 'Forty boxes. That\'s enough for two hundred people.'],
  ['A', 'How many plates?'],
  ['B', 'A hundred and eighty. That isn\'t many for two hundred guests.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one thing there is not enough of (role card 1: plates — and the ice; role card 2: desks and pens). Typical errors: _how much chairs_; _we have much water_ → _a lot of water_; _few plates_ when they mean _a few_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What we need', 'How much / many?', 'Enough?'], [
  ['chairs for the lesson', '18 for 22 people', 'No — four short'],
  ['paper', 'a lot — two packets', 'Yes'],
  ['time', 'not much — forty minutes', 'No'],
], [1.4, 1.4, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"For the lesson we need chairs, paper and time. We\'ve got plenty of paper, but there isn\'t much time and there aren\'t many chairs — eighteen for twenty-two people."', 'The thing classes most often have not got enough of: **time**, and after that **chairs**.']));
out.push(stage('5', 'Read'));
out.push(p('1 Low: paper and gloves. Finished: plastic wrap.  2 The Homs order goes on Tuesday and Ms Shamsi only sends on Tuesdays.  3 Because she would rather he knew — the total is under 500,000 SYP, so it does not need his signature, but a manager should not learn about an order from the invoice.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Ayoub, We have plenty of bags and enough receipt rolls for this month. There isn\'t much change in the till: 40,000, and the minimum is 150,000. There is no small change at all. This one is urgent, because Saturday is the busiest day and the bank is closed. May I take 200,000 to the bank today? Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_much_ uncountable, _many_ countable', '✓'],
  ['Number **and** minimum on every low item', '✓'],
  ['The urgent one has a reason with a date', '✓'],
  ['A total at the end', '✗ – no total for the whole request'],
], [3, 2]));
out.push(p('Sample feedback: "The reason for today is the strongest part. Can you put the total at the end so he can say yes in one word?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The urgent sentence people act on is the one with a **date somebody else cares about**, not the one with the strongest adjective.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['For the journey on Thursday: we have plenty of water (two crates) and enough bread for the first day. There isn\'t much petrol — half a tank, and it is four hours to Latakia. There are no spare bulbs for the car at all. The petrol is the urgent one, because the station on the road is often closed in the afternoon.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _The petrol line made me check my own car._   ✓ _How many litres does half a tank give you?_   ? _Have you got a spare wheel?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The thing on most lists is usually **water**; the thing on only one is usually the one that matters most to that person — and it is worth asking them why.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['How much water do we use a day? About 200 litres. How much bread? Two loaves. How much sugar a month? Four kilos. How much electricity? Six hours.  How many rooms? Three. How many windows? Five. How many people live here? Six. How many keys to the door? Two.']));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  There\'s none left'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _I\'ve got some pens. I haven\'t got any money. There\'s none left in my bottle._'));
out.push(p('**b**  _There\'s **none at all**_ is the strongest — it closes the question. _We haven\'t got much_ is the weakest: it still leaves hope.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Thursday)   **b**  1 The small boxes — nineteen, not about a hundred.  2 She telephones Ms Shamsi now, because Ms Shamsi sends on Tuesdays and a call tomorrow would cost a week.'));
out.push(p('**Language box – Practise:**  1 any — None  2 any  3 some  4 None  5 some'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Bad news. The flour. I counted properly. There aren\'t twelve sacks. There are three.'],
  ['B', 'Three? But the card says twelve.'],
  ['A', 'Somebody took nine for the Eid order and wrote nothing.'],
  ['B', 'And we need nine for Saturday.'],
  ['A', 'So we\'ve got three and we need nine. That\'s six short.'],
  ['B', 'I\'ll telephone the mill now. From today, nobody takes a sack without writing it on the card.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two numbers and the difference. The performance fails if the pair says only _we have a problem_ — the number is the point. Typical errors: _we haven\'t got no flour_ (double negative); _there are none sacks_ → _there are **no** sacks_ / _there are **none**_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What ran out', 'How short?', 'What they did'], [
  ['Fadi', 'diesel, on the Homs road', 'about 20 km', 'bought from a village in a jerrycan'],
  ['Rasha', 'change in the till, on a Saturday', '150,000 SYP', 'borrowed from the shop next door'],
], [1, 1.4, 1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In Fadi\'s story the diesel ran out. He had enough for about eighty kilometres and he needed a hundred — twenty kilometres short. He bought diesel in a village, in a jerrycan."', 'The rule that would have stopped it: _fill the tank before you leave the yard, not on the road._']));
out.push(stage('5', 'Read'));
out.push(p('1 Forty-one short (19 against 60).  2 Because they leave Aleppo on Tuesday morning and reach Damascus on Tuesday afternoon — **after** the Homs lorry has gone.  3 Send the Homs order on Wednesday instead, or use big boxes for the small items (which cost more to send).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SHORTAGE NOTE — change for the till**   Saturday, 8.10 am.  What we have: 40,000 SYP in small notes. What we need: about 190,000 for a Saturday. **We are 150,000 short.** Why: the bank was closed on Thursday and nobody went on Wednesday. What I have done: borrowed 60,000 from the shop next door until Sunday. What I need from you: shall I close the till to card only until noon, or shall I go to the bank at nine and leave Hala alone for an hour? To stop it again: somebody goes to the bank every Wednesday, in the diary, not in anybody\'s head.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The shortage is one number', '✓ – 150,000'],
  ['Something already done', '✓ – borrowed 60,000'],
  ['A choice, not an open question', '✓'],
  ['A rule for next time', '✓ – in the diary'],
], [3, 2]));
out.push(p('Sample feedback: "This is a report, not a complaint — the borrowing line does that. The choice can be answered in three words."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('A good _What I need from you_ line is answerable in four words: _"Go at nine."_ A line that cannot be answered that quickly is really two questions, and should be split.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Last winter the diesel for the heater ran out on the coldest night. We had about ten litres and we needed forty for the week — thirty short. We burned wood for two days and bought diesel on Thursday at a bad price. Now I fill the tank in October, before the price rises, and I write the date on the kitchen calendar.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _The same thing happened to us — we also paid a bad price in the middle of winter._   ✓ _Can you say how many litres the tank holds?_   ? _Does the price really rise every year?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Rules learners bring are nearly always of one kind: **write it down at the moment it happens**. That is the rule for Sham Trading too, which is why 4.3 ends with it.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['**Rule:** Take the last one? Write it on the card — now, not later.  **Where:** on the shelf itself, at eye level, next to the thing that runs out, not on the office noticeboard where nobody stands.']));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  First we check it, then he signs it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  1 boil the water · 2 put the tea in · 3 pour the water · 4 wait three minutes · 5 drink it. _First you boil the water. Then you put the tea in. After that you pour the water and wait three minutes. Finally you drink it._'));
out.push(p('**b**  **Order:** first · then · after that · finally.  **Time:** at eight · on Tuesday.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (how an order is checked)   **b**  1 Nour, straight away.  2 Only for an order over 500,000 SYP.'));
out.push(p('**Language box – Practise:**  **First** the customer telephones. **Then** Abu Yasser checks the stock. **After that** I telephone the customer back. **Finally** Nadia sends the invoice.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Show me a delivery. What happens first?'],
  ['B', 'First the driver rings at the gate. Abu Yasser goes out to him.'],
  ['A', 'And then?'],
  ['B', 'Then he counts the boxes at the gate, not inside. He signs the driver\'s paper.'],
  ['A', 'And if a box is missing?'],
  ['B', 'If a box is missing, he writes it on the paper before he signs — the same minute. After that the boxes go on the shelves.'],
  ['A', 'When does the office know?'],
  ['B', 'Only when the numbers are on the stock card. Finally Nour tells accounts.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners number the steps 1–6. Typical errors: _After, the form comes back_ → _**After that**_; _he is checking the stock_ → present simple _he **checks**_; the condition put at the end instead of inside its step.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Process', 'How many steps?', 'Could they do it?'], [
  ['closing the shop at night', '6', 'Yes'],
  ['getting a document stamped at the municipality', '7', 'No — the queue number step was missing'],
], [2, 1, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"First you count the till and write the number in the book. Then you switch off the fridges at the wall, not at the plug. After that you check the back door and the gas. Finally you lock the shutter and take the key home — never leave it in the shop."']));
out.push(stage('5', 'Read'));
out.push(p('1 Straight away, when the order is written on the form — date and number, like 0407-3.  2 Abu Yasser writes it on the reorder list the same day.  3 The reference number: it is on every paper from the first to the last.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HOW THE SHOP IS CLOSED AT NIGHT** — for the new assistant.  **1  Count the till.** Count the notes twice and write the total in the book with the date.  **2  Switch off.** Switch off the fridges at the wall. If a fridge is full of milk, leave it on and write a note on the door.  **3  Check the back.** Check the back door, the gas and the water.  **4  Lock up.** Finally, lock the shutter and take the key home. The book stays in the shop and the key never does. That is the whole system.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbered steps with bold titles', '✓'],
  ['Every _if_ inside its own step', '✓ – the milk condition is in step 2'],
  ['Present simple all through', '✗ – _you are counting the notes_ in the first draft'],
  ['You could do the job from this page alone', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I could close the shop with this. The milk rule in step 2 is exactly where it should be."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Readers stop at a **missing step** far more often than at a missing word — usually a step so obvious to the writer that they do not see it (_unlock the till_, _take the paper out of the printer_).'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['**How to make good Arabic coffee.** 1 Measure the water in the cups you will serve — one cup each, no more. 2 Put the water and the sugar in the dallah and heat it slowly. 3 Add one spoon of coffee for each cup and stir once. 4 Watch it. If it rises, take it off the heat immediately, wait, and put it back. 5 Add the cardamom at the end, not at the beginning. 6 Pour slowly and keep the first cup for the oldest guest.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"Watch it" is the real instruction — everything else is just numbers._   ✓ _What happens if it rises twice?_   ? _How much sugar for medium?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Processes usually break at the step with a **judgement** in it (_until it is ready_, _if it looks wrong_). That step needs a sign the reader can see: _when it rises to the top of the pot_.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['**Three steps:** Count the till and write it in the book. Switch off the fridges and check the back. Lock the shutter and take the key.', '_Left out: the second count, the milk rule, the gas, the water. Safe to leave out for somebody who has done it a hundred times — not for a new person, who needs exactly the rules that experience has made invisible._']));

// ===================== 4.5 =====================
out.push(pb());
out.push(h2('4.5  I\'d like to order twelve rolls'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  With a supplier you have known for years: _**I\'d like** ten boxes, please_ — polite, normal and quick. _I want_ sounds blunt in English even between friends; _Can I have…?_ is fine in a shop, slightly informal on a business call.'));
out.push(p('**b**  twelve · twenty · thir**teen** · **thir**ty · fif**teen** · **fif**ty · **six**ty · six**teen** · five hundred thousand'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (wrap, paper and gloves — and sixty small boxes)   **b**  1 S-419.  2 It leaves Aleppo on Tuesday morning and reaches Damascus on Tuesday afternoon.'));
out.push(p('**Language box – Practise (samples):**  1 I\'d like six rolls of tape, please.  2 Can I have ten boxes, please?  3 I\'d like four cartons of gloves — large, please.  4 I\'d like twelve rolls of wide wrap. That one is urgent.  5 So: twelve wide wrap, ten A4, four cartons large gloves, reference S-419, Tuesday afternoon.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. Rasha Hamdan from Hamdan Stores. Can I place an order, please?'],
  ['B', 'Of course. Go ahead.'],
  ['A', 'I\'d like two thousand invoice forms, five hundred business cards and fifty folders with our name on them.'],
  ['B', 'Two thousand forms, five hundred cards, fifty folders. Which colour forms?'],
  ['A', 'White, please. And the cards are urgent — I need them for Sunday.'],
  ['B', 'The reference is P-two-two-seven. The total is one hundred and ten thousand. The cards reach you Saturday; the rest on Monday.'],
  ['A', 'P-227, one hundred and ten thousand, cards Saturday, the rest Monday. Thank you.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the order as the supplier would, then compare with the caller\'s book. Differences are almost always in **numbers** (13/30, 15/50) or in the **which one** (size, colour). Typical errors: _I want_; _five hundred card_ → _card**s**_; no read-back at the end.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I ordered', 'Reference', 'Total', 'Arrives'], [
  ['20 kg rice, 6 cartons oil, 40 kg sugar', 'F-118', '890,000', 'Monday morning'],
  ['2 tyres (185/65), 1 battery', 'G-45', '1,250,000', 'Thursday'],
], [2, 1, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I ordered twenty kilos of rice, six cartons of oil and forty kilos of sugar from Farouk Foods. The reference is F-118 and it arrives on Monday morning. The total is eight hundred and ninety thousand."', 'An order that is not read back can go wrong in the quantity, the size or the date — and nobody finds out until the lorry arrives.']));
out.push(stage('5', 'Read'));
out.push(p('1 To confirm it in writing — a telephone order has no record, and the reference, the total and the date are all things that can be misheard.  2 To the yard at Mezzeh; **not** to the trade counter.  3 Confirm that the small boxes leave on Tuesday morning, because Sham Trading must change its own Homs delivery if they do not.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Order F-118 — confirmation.  Dear Mr Farouk, Thank you for taking my order this morning. This email confirms it in writing:  **F-118 · 9 April**  ·  20 kg — rice, long grain  ·  6 cartons — sunflower oil, 5 litres each  ·  40 kg — sugar, white **(urgent)**.  Total: 890,000 SYP. Delivery: Monday 10 April, morning, to the shop in Zahra Street — not to the house. Please confirm the sugar comes on Monday, because Tuesday is the school order. Rasha Hamdan, 0988 450 176']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['One line per item, same order each time', '✓'],
  ['The urgent item marked in the list', '✓'],
  ['A total, a date **and** a place', '✓'],
  ['A telephone number', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The word most often missing is the one that says **which one**: _long grain_, _5 litres each_, _white_. Without it the supplier guesses, and a guess is right about half the time.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Dear Ms Shamsi, Please send: 6 rolls — wrap, **wide** (50 cm, not 30 cm) · 4 cartons — gloves, **large** (if you have no large, send medium and tell me first, do not send small) · 20 — boxes, **small** (the 30×20 cm one we had in March, reference B-30). Delivery to the yard, Tuesday afternoon. If any item is not available, telephone me before you load. Nour, extension 212']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _You stopped me at the gloves — I would have sent small._   ✓ _I could still send the wrong boxes if B-30 is not in your catalogue this year._   ? _You did not say how many of the 20 boxes must be the same batch._'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The order nobody can get wrong is usually **not** the shortest. It is the one that names the alternative and says what to do about it: _if you have no large, telephone me first_.'));
out.push(stage('HW', 'Homework – sample reply (≈35 words)'));
out.push(sample(null, ['Dear Nour, Thank you for your order S-419. The wrap, the paper and the boxes leave on Tuesday morning as you asked. We have no large gloves until the first week of May. We have medium in stock today, or large from another maker at a slightly higher price. Please tell me which you prefer and I will load it on Tuesday. Dima Shamsi']));

// ===================== 4.6 =====================
out.push(pb());
out.push(h2('4.6  Is that everything?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Really check: **Is that everything? · Have I got everything? · Shall I read it back?**  Only sound like checking: **OK? · Right? · Fine?** — they get _yes_ whatever the truth is.'));
out.push(p('**b**  Open — most learners get three of five on the first try and five of five after the read-back habit is taught. That is the point of the task.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the string)   **b**  1 She repeats the list, then asks _Have I missed anything from last month? You usually take string._  2 He adds two big rolls of string — and asks for the reference number.'));
out.push(p('**Language box – Practise (samples):**  1 Is that everything?  2 Have I missed anything?  3 All of them, or only the large ones?  4 Shall I read the whole order back?  5 Which size gloves?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'So: four kilos of coffee, two sacks of sugar and a hundred paper cups. Is that everything?'],
  ['B', 'That\'s everything.'],
  ['A', 'Have I missed anything from last time? You usually take the small spoons.'],
  ['B', 'Ah — the spoons. Yes. A thousand.'],
  ['A', 'A thousand small spoons. Anything else at all?'],
  ['B', 'No, that\'s all. How much is it?'],
  ['A', 'One moment. The total is six hundred and twenty thousand. Shall I read the whole order back?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('The question that finds the forgotten item is almost never _Is that everything?_ — it is _Have I missed anything?_ followed by **silence**, or the specific prompt _you usually take…_. Typical errors: _Is that all things?_ → _Is that everything?_; asking the check and then talking over the pause.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Order taker', 'How many checks?', 'Anything forgotten?'], [
  ['Rasha', '1', 'Yes — the bread was missed'],
  ['Fadi', '3', 'No'],
  ['Samir', '5', 'No, but the customer became impatient'],
], [1.2, 1.2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"When Fadi took my order he asked three times: he repeated the list, he asked if he had missed anything, and he read it back at the end. He found the thing I forgot."', '**Is more always better?** No. Three checks of different kinds beat five of the same kind: repeat → invite → read back. Five identical _OK?_s only annoy.']));
out.push(stage('5', 'Read'));
out.push(p('1 That Nour read the order back to the customer and he agreed it — so a later argument has a witness.  2 Telephone 011 612 4400 extension 212, within three days.  3 Quote the order number, 0704-2.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HAMDAN STORES** — front counter  ·  **Order 0409-4**  ·  9 April  ·  Served by: Rasha.  **Customer:** M. Khalil, Jaramana  ·  **Telephone:** 0944 702 118.  2 sacks — sugar, white  ·  4 kg — coffee, medium roast  ·  100 — paper cups, large.  **Total: 480,000 SYP**  ·  Paid: cash  ·  **Checked with the customer: ✓**. If anything is wrong, telephone 0988 450 176 within three days and quote 0409-4.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The order number appears twice', '✓'],
  ['The name of the person who served', '✓'],
  ['A total and how it was paid', '✓'],
  ['A time limit and a telephone number', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A worried customer can act on the last line only if it has all three: **what to do · by when · what to say**. Most real slips have one of the three.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['**What I would want on a repair slip.** The name of the person who took the machine, not only the shop. What exactly is broken, in their words, so I can see whether they understood me. What they will do first. A price, or a price they will telephone me about before they do the work. A date. And a line that says what happens if the repair does not hold — usually missing, and it is the only line that matters three weeks later.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"in their words, so I can see whether they understood me" — nobody ever writes that._   ✓ _Can you add what happens to the old part?_   ? _Would you pay more for a written guarantee?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The answer nearly every class gives: **a name**. People want to know who served them, and real slips print a till number instead.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['My receipt tells me: the shop, the date, the time, each item with its price, the total, and that I paid cash.  It does not tell me: who served me, whether I can bring something back, by when, or what to say if I do.']));

// ===================== 4.7 =====================
out.push(pb());
out.push(h2('4.7  Review & Mediate: the stock list and the order form'));
out.push(stage('1', 'Get ready – Unit 4 quiz'));
out.push(p('**1** Because _a paper_ means one sheet; paper as a material is uncountable and is counted in packets.  **2** How **much** tape? How **many** boxes?  **3** _We\'ve got nineteen and we need sixty — that\'s forty-one short._  **4** first · then · after that · finally.  **5** _Have I missed anything?_ — and then silence.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (what he must send on Tuesday)   **b**  1 Sixty.  2 The wrap — it is on the reorder list, coming **to** them, not going out.'));
out.push(p('**Language box – Practise (sample):**  _If a line has (R) next to it, don\'t pack it — it\'s something we are buying. Only send the lines with the order number at the top._'));
out.push(stage('3', 'Practise – sample mediation of form 1'));
out.push(sample(null, ['"It\'s order 0411-1, for Tarabishi Stores in Homs. It goes on Tuesday. I\'ll tell you only what you pack: sixty small boxes, ten packets of A4 paper, and four cartons of gloves — large, not medium. Don\'t send the wrap in the last line. It\'s on the same page, but it has (R) next to it, which means it\'s coming to us from Aleppo. The gloves are the line people get wrong."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write only what leaves the warehouse — the (R) line must not appear. A speaker who reads the whole form aloud, including _authorised_ and _dispatch_, has not mediated: send them back with the instruction _tell him only what he packs_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'Their part of the form', 'The line they could get wrong'], [
  ['Abu Yasser', 'sixty boxes, ten paper, four gloves — Tuesday', 'the (R) wrap line, and large vs medium'],
  ['Hala', 'the cards are urgent, Sunday', 'the rest of the order is Monday, not Sunday'],
], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s an order form. I told Abu Yasser only the three lines he packs and the day. The line people get wrong is the one with (R), because it is on the same page and looks exactly like the others, but it is a thing we are buying, not sending."']));
out.push(note('Fourth unit of the book, so the ordinal is "fourth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**Listener task answer:** the speaker left out the customer\'s address, the total and the authorisation line. That was right: none of them changes what the warehouse does, and every extra number is a chance to pack the wrong thing.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '30 is above the minimum of 20'],
  ['2', 'B', '"LOW — reorder" is an instruction'],
  ['3', 'B', '(R) + "do not dispatch" = it is coming in'],
  ['4', 'B', '"not required under 500,000"'],
  ['5', 'B', '"counted" — nineteen is the true number, not a dispatch'],
  ['6', 'B', 'three days, and quote the number'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Abu Yasser, Please pack sixty small boxes, ten packets of A4 paper and four cartons of large gloves for Tarabishi Stores in Homs. It leaves on Tuesday morning. Please **don\'t** send the twelve rolls of wrap in the last line — it is on the reorder list and it is coming to us from Aleppo. Thank you. Nour  _(56 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  What goes, and how many', '✓'],
  ['2  It leaves on Tuesday', '✓'],
  ['3  Don\'t send the wrap', '✓'],
  ['25 words or more', '✓ – 56 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Samir, Could you buy two kilos of rice and four cartons of milk? The shop under my building is cheapest — the one next to the barber\'s, not the big one on the corner. Please don\'t buy bread; my mother is making it today. Thank you! Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈30 words)'));
out.push(sample(null, ['I got everything except the big bag of rice — they only had one-kilo bags, so I bought two. The milk was the same price as always. No bread, as you said. See you at six.']));
out.push(stage('✓', 'Unit 4 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'c', 'c', 'a', 'b', 'a', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Item 1: **4 cartons of small bags** · Item 2: **2 boxes of labels** · Item 3: **6 rolls of tape** · Total: **140,000 SYP** · Reference: **0708-1**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Ms Shamsi, Please send 12 rolls of wide plastic wrap, 10 packets of A4 paper and 4 cartons of large gloves. The wrap is urgent — we pack the Homs order on Tuesday morning. Please deliver to the yard, not the counter. Thank you. Nour  _(45 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** three items, each with a **quantity and a unit** — one mark each. A quantity with no unit scores half.',
  '**Language (2):** _I\'d like / please send_, countable and uncountable handled correctly.',
  '**Organisation and length (2):** one line or clause per item; the urgent one marked; 25 words or more.',
  '⚠ Mark whether a supplier could **fill the order without telephoning back**. That is the real test, and it catches the missing size, colour and unit that grammar marking misses.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 4', [
  '**1  The missing unit.** _Tape: 30._ Learners hear the number as the answer. Make them say the unit **first** for a week — _rolls of tape: thirty_ — and the habit sticks.',
  '**2  _how much_ with a countable noun.** _How much boxes?_ Arabic does not split the two, so this is not carelessness; it needs the countable/uncountable sort in 4.1 done properly before 4.2, not after.',
  '**3  The polite check that checks nothing.** _OK?_ gets _yes_ every time. 4.6 is the most useful cycle in the unit for anybody who serves customers: drill _Have I missed anything?_ **plus the silence**. Learners find the silence much harder than the question.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 4 · Answer Key');
