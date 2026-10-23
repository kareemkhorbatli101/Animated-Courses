// Proactive Business English A2 · Syria Edition · Book 2 · Unit 19 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 19  Suppliers and Partners'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Nothing in this unit needs clever English.** A negotiation at A2 is four sentences and the grammar for all of them was taught in Units 14 and 15. What the unit really teaches is arithmetic and nerve: know the number before you open your mouth, and ask for something specific.',
  '⚠ Several tasks ask learners to go and ask a real supplier for something. Some of them do, and they come back with a result. Ask in the following lesson; those two minutes are the most valuable in the unit.',
], C.grey, C.navy));

// ===================== 19.1 =====================
out.push(h2('19.1  We buy the boxes from Aleppo'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Three things and three places; the lengths come in 19.4.'));
out.push(p('**b**  We buy them **from** Aleppo. She supplies us **with** boxes. They deliver **to** us **on** Tuesdays.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (four: Shamsi, a Damascus wholesaler, the Adra pallet man, and whoever is cheapest for paper)   **b**  1 Boxes and wrap from Aleppo; tape and labels from Damascus; pallets from Adra; paper from whoever is cheapest.  2 Nothing is wrong with buying from one place — the point is the opposite: the eleven-year relationship produced thirty rolls on a bus, and nobody does that for a customer who buys on price alone.'));
out.push(p('**Language box – Practise (samples):**  _We buy steel from a stockholder in Damascus, nine years. · They supply us with paint, two years. · The fixings come from whoever is cheapest — the only line we do that with._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I am making a list for the insurance. Where does everything come from?'],
  ['B', 'Steel from a stockholder in Damascus — nine years. Paint from a distributor in Homs, two years. Fixings from whoever is cheapest that month.'],
  ['A', 'And why the fixings?'],
  ['B', 'Because they are the same everywhere. It is the only line we do that with.'],
  ['A', 'Why not everything?'],
  ['B', 'Because the stockholder held a price for three weeks through a currency move last year. He did not have to and he did not mention it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the story that proves the relationship is worth something. Typical errors: _we buy from them boxes_ (the object follows the verb) · _they supply us boxes_ (needs **with**) · _we buy in Aleppo_ for _from_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'From where', 'How long', 'One fact'], [
  ['boxes, wrap', 'Shamsi, Aleppo', '11 years', 'thirty rolls on a bus when the road shut'],
  ['tape, labels', 'Barakat, Damascus', '2 years', 'same day if you telephone before ten'],
  ['pallets', 'Adra', '6 years', 'takes the broken ones back'],
  ['paper', 'whoever is cheapest', '—', 'the only line bought on price alone'],
], [1, 1.2, 0.8, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We buy boxes and wrap from Shamsi Packaging in Aleppo, for eleven years. The thing that proves it is worth it is that in March, when the road was closed, she telephoned us before we telephoned her."', 'Ask which workplace has only one supplier for something important, and what would happen next week if that supplier stopped. The room goes quiet, which is the right response.']));
out.push(stage('5', 'Read'));
out.push(p('1 Shamsi — "two weeks to find another and about a month to trust them".  2 They take the broken pallets back; without them it would cost about 90,000 a month to have them removed.  3 That nobody has tested a second wrap supplier, so the company is depending on Shamsi by default rather than by choice — and a decision not made is still a decision.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SUPPLIERS**', '**Nahhas Steel, Damascus.** Round bar, sheet and angle. Nine years. Lead time two days, and twice he has held a price through a currency move without being asked.  **Without them:** three other stockholders, but none that will hold a price — about 4% more and no certainty.', '**Homs Paint.** Primer and finish. Two years. Delivers Mondays only, which costs us a day when we finish a job on a Tuesday.  **Without them:** two others in Homs, same price, same day problem.', '**Fixings.** Whoever is cheapest. This is the only line we buy on price alone, because a screw is a screw.  **Without them:** no difficulty at all.', '⚠ Nahhas is a sole supplier for anything we need held at a price. We have never tested a second one.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_buy from_ / _supply with_ correct', '✓'],
  ['How long for every supplier', '✓'],
  ['A "without them" for every supplier', '✓'],
  ['A sole supplier named', '✓ – Nahhas'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give the lead time and one number, and the paint block has the day problem but no number — how much does that lost Tuesday cost in a month?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "without them" lines. The class identifies the workplace that would be in most trouble on Monday, and it is rarely the one the writer expected.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We depend on one man for the van. He is not a company; he is a mechanic with a yard in Jaramana and he has looked after our two vehicles for six years. Last winter he came out at eleven at night to the Homs road because Fadi was stuck, and he charged us for the parts and not the journey. If he stopped tomorrow we would be at a garage that does not know the vans, does not answer at night, and would charge us for the journey. Nobody has ever asked him whether he has a plan for retiring.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"charged us for the parts and not the journey"_   ✓ _buy from / supply with correct._   ? _How old is he, and has anybody asked?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the sole suppliers in the room and ask how many have ever been discussed out loud at those workplaces. The number is usually none, and that is the finding.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Real lead time from Shamsi: four working days, found on the last six delivery notes — ordered Sunday, arrived Thursday, five times out of six. The sixth was nine days, which was the road. Nobody in the office could say it before I counted.']));

// ===================== 19.2 =====================
out.push(pb());
out.push(h2('19.2  Could you do better on the hundred?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and expect "no". Most learners have never asked, which is the cycle.'));
out.push(p('**b**  The second. A specific number with an offer attached has to be answered with a number or a no; _can you give us a discount_ can be answered with "we will see".'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (5% on three hundred rolls, paid in ten days)   **b**  1 Payment within ten days instead of thirty.  2 That she asked for a number, offered something, took less than she asked for, and got one more thing at the end — and that in eleven years he had never asked for three per cent.'));
out.push(p('**Language box – Practise (sample, a bigger order):**  "I would rather ask plainly. We take sixty a month; if we took two hundred a quarter, could you do four per cent? We would pay on delivery. And if we agree, would you hold it until the summer?"'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Nahhas, I want to ask you something plainly. You have put the price up eleven per cent.'],
  ['B', 'How much better are you asking for?'],
  ['A', 'Half of it. And we would order twice a year instead of monthly, and take the four-metre lengths you cannot sell.'],
  ['B', 'Six per cent, not five and a half, and you take the four-metre lengths every time, not when it suits you.'],
  ['A', 'Six per cent, four-metre lengths every time, and would you hold that until the end of the quarter?'],
  ['B', 'Until the end of the quarter. I will put it in writing.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the fourth move — the extra thing asked for after the agreement. Most pairs forget it, and it is the cheapest thing in the cycle. Typical errors: _can you make a discount_ · _I want that you reduce_ · an ask with no number.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'My ask (a number)', 'What I offer', 'The extra thing at the end'], [
  ['Shamsi', '5% on 300 rolls', 'payment in 10 days', 'hold the price to December'],
  ['Nahhas', 'half the 11% rise', 'twice-yearly orders, odd lengths', 'hold to the end of the quarter'],
  ['the landlord', 'no rise this year', 'a two-year commitment', 'he repaints the front'],
], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would ask Shamsi for five per cent on three hundred rolls. I would offer payment in ten days. I would settle for three. At the end I would ask her to hold the price until December."', 'Count the people who have never asked a supplier for anything, then ask what a first ask would be worth in a year. The arithmetic is usually startling.']));
out.push(stage('5', 'Read'));
out.push(p('1 **What I am asking for · What we would offer · One more thing.**  2 A favour — she says she is asking whether three hundred is worth something to the supplier.  3 Thursday, because the quarter\'s order goes in on Friday: a reason outside the writer.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Enquiry — 200 reams a quarter, price and terms, reply by Tuesday please', 'Dear Mr Barakat,', 'We order about seventy reams a month from you. We are considering two hundred a quarter instead, on one delivery.', '**What I am asking for:** your price for two hundred reams on one delivery, and whether you would store half of it for a month.', '**What we would offer:** one order instead of three, and payment on delivery rather than thirty days.', '**One more thing:** if we agree a price, would you hold it for the calendar year?', 'We have bought from you for two years and I am not asking for a favour. I am asking whether one delivery instead of three is worth something to you. If it is not, say so and we will carry on monthly.', 'Could you reply by Tuesday? Our quarter order goes in on Wednesday.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A number in the ask', '✓ – 200 reams, one delivery'],
  ['Something offered in return', '✓ – one order, faster payment'],
  ['One more thing', '✓ – hold for the year'],
  ['An easy no, and a deadline with a reason', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give them an easy no, and _say so and we will carry on monthly_ is exactly that. The line I would look at is the storage — that is a second ask hiding inside the first. Is it the one you most want?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "one more thing" lines. The class usually agrees that all of them would be granted without argument, which is the finding: the cheapest thing in a negotiation is the thing asked for last.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I have never asked the landlord about the rent. We have paid the same since February 2023, which sounds like a good position until you remember that it means he has not looked at it for three years and one day he will. What I would ask for is a two-year agreement at the current rent plus something small, in writing. What I would offer is the two years and paying quarterly in advance. What has stopped me is the fear that asking reminds him, which is probably true and is also true of every month I do not ask.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"asking reminds him, which is probably true and is also true of every month I do not ask"_   ✓ _there is an offer._   ? _What is the worst he could say?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask the room what the worst outcome of asking would be. The answer is always "they say no", and hearing a dozen people say it is what gets somebody to ask.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Asked Barakat for 3% on a standing monthly order. He said 2% and free delivery on anything over fifty reams, which we had been paying for without noticing. The delivery is worth more than the 2%. He said nobody had ever asked him.']));

// ===================== 19.3 =====================
out.push(pb());
out.push(h2('19.3  If you order a hundred, we will reduce it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Push for things that cost nothing: a day, an hour, a size, a standing order, a telephone call.'));
out.push(p('**b**  Samples: _…we will do them at the hundred price · …we will take two per cent off · …we will put you on the lorry that already goes._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (three conditional offers)   **b**  1 The third — moving the delivery to Tuesday and putting him on a lorry that already passes.  2 The third, and he says it is worth more to him than the two per cent.'));
out.push(p('**Language box – Practise (sample, a restaurant):**  "If you put it on a standing order, we will never forget it. If you take delivery before eleven, we will put you on the first round. And if you tell us by Sunday, we will telephone you before the price list changes — that one costs us nothing."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your price is higher than the yard in Qaboun. I have been buying from you for four years and I would rather stay.'],
  ['A', 'Then let me put three things on the table and you choose. If you take a tonne instead of half, we will do it at the tonne price — about five per cent.'],
  ['B', 'I have nowhere to put a tonne.'],
  ['A', 'Then the second. If you pay inside fifteen days, we will take one and a half per cent off.'],
  ['B', 'Fifteen days is hard.'],
  ['A', 'Then the third, and it costs us nothing. If you take a fixed delivery day, we will keep your sizes in stock, and you will never wait for a cut.'],
  ['B', 'That one.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the free offer and whether the customer chose it — they usually do. Typical errors: _if you will take_ · _we will to reduce_ · and the content fault of making one offer instead of three.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Customer', 'Offer 1', 'Offer 2', 'Offer 3 (free)'], [
  ['a shop', '100 boxes at the hundred price', '2% for ten-day payment', 'Tuesday delivery on the lorry that passes'],
  ['a restaurant', 'a bigger standing order', '1% on monthly settlement', 'delivery before eleven'],
  ['a workshop', 'a tonne at the tonne price', '1.5% inside fifteen days', 'their sizes kept in stock'],
], [1, 1.3, 1.3, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If they take a hundred, we will do the hundred price. If they pay in ten days, we will take two per cent off. And if they move to Tuesday, we will put them on the lorry that already goes past — which costs us nothing."', 'Ask for the best free offer in the room, then ask whether that company has ever offered it to anybody. Almost never — because nobody has looked for it.']));
out.push(stage('5', 'Read'));
out.push(p('1 Justify the choice — any one of the three is theirs without explanation.  2 The third: _this one costs us nothing and we should have offered it two years ago_.  3 _Tell me none of them is enough and I will come and see you_ — a door rather than a close.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Three ways we can close the gap — you choose', 'Dear Mr Darwish,', 'You told me on Sunday that the Qaboun yard is cheaper and that you would rather not move. Here are three ways to close the gap. Any one of them is yours; you do not have to justify the choice.', '**1 — Quantity.** If you take a tonne instead of half a tonne, we will invoice at the tonne price. That is about 5%. You would need the room.', '**2 — Payment.** If you pay inside fifteen days, we will take 1.5% off every invoice.', '**3 — Stock.** If you take a fixed delivery day, we will keep your three sizes cut and ready. You would never wait. **This one costs us nothing and we should have offered it four years ago.**', 'Tell me which, or tell me none of them is enough and I will come to the yard.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three offers, each a first conditional', '✓'],
  ['A value on each', '✓ – 5%, 1.5%, never wait'],
  ['One that costs nothing, marked', '✓'],
  ['A door at the end', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks you to admit the free one should have been offered earlier, and you have. The offer I would look at is the stock one — _never wait_ is a promise about time. Could it have a number, like \'cut within the hour\'?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the free offers. Ask why nobody had offered them before; the answer is nearly always that nobody had asked what the customer actually wanted.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We lost a customer of six years last spring. He wanted a monthly invoice instead of one per delivery, because his own accounts are monthly, and the office said the system could not do it. The system could not do it; a person could have done it in ten minutes on the last day of the month. It cost us about nine million a year. Nobody asked him why he was leaving — we found out from another customer. The offer that would have kept him cost ten minutes a month and nobody ever put it on the table.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"ten minutes a month"_   ✓ _no will after if._   ? _Would he come back if you offered it now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many classes have ever asked a leaving customer why. It is the cheapest market research there is and it is almost never done.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Offered one customer a fixed Tuesday delivery on the lorry that already passes his street. He said yes immediately and then asked why nobody had mentioned it. It costs us nothing at all.']));

// ===================== 19.4 =====================
out.push(pb());
out.push(h2('19.4  We have bought from her for eleven years'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners know roughly and not exactly, which is the point of 16.4 coming before this.'));
out.push(p('**b**  **for** eleven years · **since** 2015 · it is eleven years **since** we started.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a reference for a supplier)   **b**  1 Eleven years since March 2015; about four hundred orders; the nine days when she put thirty rolls on a bus.  2 The word _reliable_ — because everybody writes it, it is free, and it is worth nothing.'));
out.push(p('**Language box – Practise (sample):**  "We have bought from them for nine years. We have placed about two hundred orders. In the winter of 2023 they held a price for three weeks through a currency move, without being asked."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The bank has asked me for a reference from a long-standing supplier. Would you write one?'],
  ['B', 'Gladly. What do they want to know?'],
  ['A', 'Whether I am real, I think.'],
  ['B', 'Then three facts, and no adjectives. You have bought from us for nine years, since 2017. About seventy million of trade. And the month you paid early, unasked, because you had heard we were short.'],
  ['A', 'You could say I am a good customer.'],
  ['B', 'Everybody writes good customer. The early payment cannot be invented.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the fact that could not have been invented. Typical errors: _we buy from her since eleven years_ · _we are buying from her since 2015_ · a reference made entirely of adjectives.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'How long', 'How much', 'The one event'], [
  ['Shamsi Packaging', '11 years, since Mar 2015', '~400 orders, ~310 m', 'thirty rolls by bus, unasked, March'],
  ['Haffar Stores', '9 years', '~70 m', 'paid early, unasked, when he heard we were short'],
  ['the mechanic', '6 years', 'two vehicles', 'came out at eleven at night, charged for parts only'],
], [1, 0.9, 1.1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We have bought from Shamsi Packaging for eleven years, since March 2015. In that time we have placed about four hundred orders. And in March, when the road was closed, she sent thirty rolls by bus before we asked."', 'Ask what event they would most like written about their own workplace — and then whether anybody outside would know it happened.']));
out.push(stage('5', 'Read'));
out.push(p('1 None.  2 Because a reference with no faults reads as one written by a friend; two faults in eleven years make the rest believable.  3 It says the writer has **no financial interest**, which is what turns a kind letter into something a bank can rely on.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TRADING REFERENCE — Haffar Stores, Jaramana**', 'To whom it may concern,', 'Haffar Stores has bought from Sham Trading Co. **since June 2017** — nine years. In that time they have placed about two hundred and forty orders, with a total value of about 70 million SYP.', 'Payment is on thirty-day terms. In nine years there have been **four** late payments, the longest by eleven days, and all four were paid without a reminder being necessary twice.', 'In 2022 Mr Haffar paid an invoice three weeks early, unasked, because he had heard from another customer that we were short that month. We had not told him.', 'We have no financial interest in Haffar Stores.', 'I am happy to answer any question by telephone.', 'Khaled Ayoub, Office Manager · 011 ___ ____ · 18 December']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['How long, with the exact month', '✓ – June 2017'],
  ['How much, in orders and value', '✓'],
  ['The failures, counted', '✓ – four, longest eleven days'],
  ['No adjectives; telephone number at the bottom', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says no adjectives and there are none. The sentence I would look at is the 2022 one — _we had not told him_ is the whole reference in four words, and it is the last line of the paragraph. Could it be the last line of the letter?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the one event from several references. The class sorts them instantly into the inventable and the uninventable, which is the lesson.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The longest I know of is between my uncle\'s bakery and the mill in Adra: thirty-one years, since before I was born. It started because the mill\'s lorry broke down outside the shop and my grandfather fed the driver. What has kept it is that neither side has ever asked the other for anything in writing, which is either beautiful or terrifying depending on the year. What proves it is 2013: the mill sent flour for four months without an invoice, and when the invoices came there was no interest and no mention of it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"either beautiful or terrifying depending on the year"_   ✓ _for / since correct._   ? _Does the mill know your family tells this story?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask whether the other side knows. In most cases they do not, and one sentence this week would change it — which is a homework worth setting even though it is not on the page.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['The three facts somebody would use about us: eleven years with the same packaging supplier; about four hundred orders; and that we telephone before a delivery is late rather than after. A colleague said the third one is the only one customers would mention.']));

// ===================== 19.5 =====================
out.push(pb());
out.push(h2('19.5  Reliable, fair, slow, always on time'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second half — what each word is based on — is where the cycle starts.'));
out.push(p('**b**  All of them can be proved with a number except _fair_ and _difficult_, which need an event instead. That is worth saying: some adjectives are proved by arithmetic and some by a story.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (which of two to use for a new line)   **b**  1 Cheaper by nine per cent, quick, and careless — three of the last ten deliveries had a fault.  2 A number.'));
out.push(p('**Language box – Practise (sample):**  "The carrier is cheap and careless: two lost consignments last year. The other has lost nothing in six years and telephones when a lorry is late. The two losses cost about 1.2 million and one customer, which is more than the fifteen per cent saves."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Two carriers for the Homs run. Tell me about them without using the word good.'],
  ['B', 'The first is cheaper by fifteen per cent. They are quick and they are careless — two consignments lost last year.'],
  ['A', 'And the other?'],
  ['B', 'Dearer, nothing lost in six years, and they telephone when a lorry is delayed instead of letting the customer telephone us.'],
  ['A', 'So one is cheap and careless and one is dear and certain.'],
  ['B', 'Yes. Fifteen per cent is about 700,000 a year. The two lost loads cost 1.2 million and a customer.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that put the saving and the cost of the faults side by side. Typical errors: _more cheaper_ · _they are always in time_ (English says **on** time) · an adjective with nothing behind it.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'The adjective', 'The number behind it', 'For something important?'], [
  ['Barakat', 'careless', '3 of the last 10 had a fault', 'no — our own boxes only'],
  ['Shamsi', 'dependable', '2 problems in 11 years', 'yes'],
  ['the cheap carrier', 'cheap', '15% less; 2 loads lost', 'no'],
  ['the printer', 'slow', '2 days longer, never wrong', 'yes, if there is time'],
], [1, 1, 1.8, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Barakat is careless, and the evidence is that three of their last ten deliveries had a fault. I would not use them for anything that goes straight to a customer, because the fault costs more than the nine per cent saves."', 'Ask which adjective was heard most often. It is _reliable_, and usually with no number behind it, which is the point of the whole cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 It is the decision in one sentence, with both numbers in it, so that a reader who stops after one sentence still has the answer.  2 Shamsi for customer boxes, Barakat for the company\'s own — because a wrong size costs an hour in one case and a customer in the other.  3 Six months of ten clean deliveries; she would move the customer boxes too, and she would tell Barakat that is the test.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Two carriers for the Homs run — and what I would do**', '**The sentence at the top:** Nassar is 15% cheaper, which is about 700,000 a year. They lost two consignments last year, which cost about 1.2 million and one customer. The cheaper carrier is the more expensive one.', '**Nassar Transport.** 15% below. Two days, usually. Two consignments lost in the last year, one never found. No telephone call when a lorry is late.', '**Dawoud Haulage.** 15% above. Two days, and it is two days. Nothing lost in six years. Telephones us before the customer telephones us.', '**What I would do.** Dawoud for anything that goes to a customer. Nassar for internal transfers between our own two stores, where a day lost costs nothing.', '**What would change my mind.** Six months with nothing lost and one telephone call when they are late, and I would give Nassar the Hama round as a test.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The decision in the first sentence', '✓'],
  ['Both numbers', '✓ – 700,000 against 1.2 million'],
  ['Faults counted, not described', '✓'],
  ['What would change the writer\'s mind', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says tell the supplier what the test is, and you have — the Hama round. The line I would look at is _one never found_: that is the worst fact in the note and it is in a subordinate clause."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the first sentences. If the class cannot say what the decision is, that sentence has not done its job — and this is a quick, merciless test.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Everybody here complains that the paper supplier is slow. I counted. Of the last twelve orders, nine arrived in two days, two in three and one in nine, and the nine-day one was the week of the holiday. What people mean by slow is that he does not answer the telephone before ten, so if you order at nine you wait an hour to know it is accepted. He is nine per cent cheaper than the alternative. The complaint does not survive the arithmetic, and it would disappear entirely if somebody told him to answer at eight.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it would disappear entirely if somebody told him"_   ✓ _adjective with evidence._   ? _Has anybody ever told him?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the complaints that survive the arithmetic. About half do not, and the half that do not are usually the loudest.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Counted the last ten deliveries from Barakat: three had a fault — one wrong size, two short. People in the office say "they are always wrong". Three in ten is not always, and it is still too many for a customer order.']));

// ===================== 19.6 =====================
out.push(pb());
out.push(h2('19.6  Let us agree on the day and the price'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The answer to "was it written down" is usually no, and by whom is usually nobody.'));
out.push(p('**b**  The third. The first two end a conversation; only the summary ends a negotiation.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (four: quantity, discount, payment terms, price held)   **b**  1 She says the closing summary aloud and writes it down as she says it.  2 The delivery day inside the first week — left open so that Ms Shamsi can use a lorry that is already coming, which makes it cheaper for both.'));
out.push(p('**Language box – Practise (sample):**  "Let us agree on four things. Monthly delivery. Payment inside fifteen days. The price held to the end of the quarter. And let us leave the hour open, because the round changes with the traffic."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Then let us agree on the four things. Four payments of six hundred thousand.'],
  ['B', 'Four payments of six hundred thousand.'],
  ['A', 'On the fifteenth of each month, starting in March.'],
  ['B', 'The fifteenth. If one is late, the arrangement does not end — but the last payment moves, it is not forgiven. I am not taking the plan away for one bad month.'],
  ['A', 'That is fair and I would have asked for the same. The plan runs to June and we review nothing before then.'],
  ['B', 'Agreed.'],
  ['A', 'And how you pay — shall we say by transfer?'],
  ['B', 'Let us leave that open. Some months cash is all I have, and a transfer I cannot make is worse than cash you did not want.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('The listener writes the four terms from the closing summary alone. If they cannot, the summary failed — and in real life that is a dispute in March. Typical errors: _let us agree about_ · _shall we to say_ · and no summary at all.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['With whom', 'The four terms', 'Left open, and why'], [
  ['Shamsi', '300/quarter · 3% · 10 days · held to Dec', 'the delivery day inside the week — her lorry'],
  ['a customer', '4 payments · the 15th · late moves the last · to June', 'the method — some months only cash'],
  ['a carrier', 'two runs a week · fixed rate · 30 days · reviewed in June', 'the hour — the round changes with traffic'],
], [1, 2.2, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We agreed three hundred a quarter, three per cent, payment in ten days, and the price held until December. We left the delivery day open, because she may have a lorry coming this way and then it costs us both less."', 'Ask for the best "left open" in the room. The good ones always have a reason that saves somebody money, and the bad ones are just things nobody got round to.']));
out.push(stage('5', 'Read'));
out.push(p('1 To be corrected — _I would rather be corrected today than in March_.  2 The late-payment condition protects the supplier; the price being held until December protects the buyer.  3 Because nobody replies to confirmations anyway: making silence mean agreement turns that into a feature instead of a risk.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Agreed on the telephone today — please correct anything I have wrong', 'Dear Mr Haffar,', 'Thank you for this morning. This is what I wrote down as we spoke. Please correct anything that is wrong — I would rather be corrected today than in June.', '**1 Amount.** Four payments of 600,000, total 2.4 million.', '**2 Dates.** The 15th of each month, starting 15 March.', '**3 If one is late.** The arrangement continues and the final payment moves. It is not forgiven and the plan is not withdrawn.', '**4 Deliveries.** Normal terms continue throughout. **The method of payment is yours to choose**, month by month, so that a bad month does not become a missed payment.', 'Everything else stays as it is.', 'If I have any of this wrong, one line back is enough. If it is all right, you do not need to reply.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Terms numbered and headed', '✓'],
  ['The thing left open, with its reason', '✓ – the method'],
  ['A condition against the writer', '✓ – the plan is not withdrawn'],
  ['Silence made to mean agreement', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says include the condition that is against you, and _the plan is not withdrawn_ is it. The term I would look at is 4 — deliveries continuing is the thing he is most worried about, and it is in the shortest sentence on the page."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read term 3 from several emails. Ask which agreement the class would rather be on the other side of; the answer tells the writer whether the balance is right.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Two years ago we agreed with the landlord that he would repaint the front and we would not ask about the rent for a year. Nothing was written. He remembers that the year started when he finished the painting, in October; we remember that it started when we agreed, in June. Four months is about 600,000. Neither of us is lying and both of us are sure. One email on the day, with two numbered lines in it, would have cost four minutes and prevented a conversation that we now both avoid having.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"neither of us is lying and both of us are sure"_   ✓ _terms listed one at a time._   ? _Could you still write it now, as a question?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most of these it is still possible to write the confirmation today, phrased as "this is what I remember — correct me". Somebody should, and it is a better homework than any on the page.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Sent a confirmation after agreeing the Thursday delivery change. Four numbered lines. Abu Yasser corrected one — the change starts next week, not this week — which is exactly the sort of thing that would have become an argument, and it took him nine words.']));

// ===================== 19.7 =====================
out.push(pb());
out.push(h2('19.7  Review & Mediate: the quotation'));
out.push(stage('1', 'Get ready – Unit 19 quiz'));
out.push(p('**1** She supplies us **with** boxes; we buy them **from** Aleppo.  **2** Say you are asking plainly · a specific number · what you offer · one more thing at the end.  **3** Because one offer is a yes-or-no and three turn the question into _which?_ — and the customer chooses.  **4** Everybody writes it, so it is free and it proves nothing; a fact cannot be invented.  **5** A summary said aloud and written down: _so, to confirm…_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (what "ex works" means)   **b**  1 Collection from Aleppo — a lorry, a day and a driver, about 600,000 a trip — and a minimum order of 500, which is five quarters of stock; and payment with order.  2 Whether the company is big enough yet — and this year the answer is no.'));
out.push(p('**Language box – Practise (sample):**  "It is not cheaper. _Ex works_ means we fetch it: a lorry, a day, a driver, 600,000. _Minimum 500_ means five quarters of stock standing in our yard. _Payment with order_ means our money and their goods for four days. Their 3,900 is the price of boxes in their yard; her 4,500 is the price of boxes in ours."'));
out.push(stage('3', 'Practise – sample with quotation 1'));
out.push(dlg(null, [
  ['B', 'That is two hundred a ream cheaper. Two hundred times two hundred reams is forty thousand.'],
  ['A', 'Read me the lines under the price.'],
  ['B', '"Ex works Homs. Minimum 200 reams. Payment with order. Price valid 7 days."'],
  ['A', 'Then it is not cheaper. Ex works Homs is a day of the van and a driver — call it 400,000. Minimum two hundred is four months of paper in a store room that has no room. Payment with order means we pay now and we have been paying in thirty days.'],
  ['B', 'And the seven days?'],
  ['A', 'Means we have to decide before we have counted anything, which is how these quotations work. It is a real offer to somebody with a lorry going to Homs anyway. That is not us.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the condition that cost the most. It is almost never the price and almost always a line nobody read.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought the price was', 'What it really costs'], [
  ['Fadi', '3,900 against 4,500', '3,900 + 600,000 a trip + 5 quarters of stock + paying in advance'],
  ['the office', '2,850 a ream', '2,850 + a day of the van + four months of paper + no thirty days'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a quotation for boxes. The price looked like 3,900 against 4,500. _Ex works_ means we collect from Aleppo, which costs about 600,000 a trip, and the minimum is five times what we use in a quarter. The real price is higher than the one we have."', '⚠ **The ordinal.** This is the **seventh** unit of Book 2 and the unwritten thing is the oldest one in trade: the number everybody reads is the one that matters least. Keep the claim in every cycle 7.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _ex works · minimum order · lead time · part payment · quotation valid until · credit limit_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', 'A minimum is a floor, not a fixed amount and not a schedule.'],
  ['2', 'B', '_Ex works_ = you collect it from them.'],
  ['3', 'A', 'Payment comes before dispatch.'],
  ['4', 'B', 'After seven days the quotation no longer binds them.'],
  ['5', 'B', 'A conditional offer: more units, lower price.'],
  ['6', 'A', 'Lead time is the gap between order and arrival.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (29 words)'));
out.push(sample(null, ['Mr Ayoub, the quotation for the new boxes is 3,900 each. It is only that price ex works, minimum 500, paid with the order. Could you decide by Thursday?']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: the price in figures ✓ · the condition that changes it ✓ · a decision with a date ✓. Twenty-nine words. ⚠ The commonest fault is explaining the conditions instead of naming them — in twenty-five words there is room for the names only, and the manager will ask.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We changed carriers on price in 2021. The new one was eighteen per cent cheaper and the quotation said nothing about who paid when a consignment was refused at the door. In the first six months three were refused — wrong paperwork, twice theirs — and each one came back to our yard and went out again, which is two journeys we paid for. By the time anybody counted, the eighteen per cent had become about four. We went back. What was learned is that the thing to read is not the rate; it is the paragraph about what happens when something goes wrong.']));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Priced every condition on a real quotation: 2,850 a ream, plus a van day at 400,000 over 200 reams is 2,000 a ream, plus four months of cash tied up. True cost about 3,100 against our current 3,050 delivered on thirty days.']));
out.push(pb());
out.push(stage('✓', 'Unit 19 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'a', 'b', 'b', 'a', 'a', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _buy … from_.  **2** _supply … with_.  **3** _Could you…?_ is the request form.  **4** The result half of a first conditional.  **5** _for_ + a length.  **6** _and it is four days_ — the subject is the lead time.  **7** _let us_ + bare verb.  **8** _to confirm_ — the infinitive after _to_.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Quantity', 'Discount', 'Payment', 'Price held until', 'Left open'], [[
  '300 rolls a quarter', '3% below the hundred price', 'within 10 days of invoice', 'the end of December (unless the rate moves >10%)', 'the delivery day inside the first week',
]], [1.2, 1.4, 1.3, 1.7, 1.4]));
out.push(note('Accept any clear wording. The fifth gap needs the **reason** or the thing itself; "the day" alone is enough.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (48 words)', ['Ms Shamsi, I would rather ask this plainly. We take a hundred rolls a quarter. If we took three hundred, could you do five per cent better than the hundred price? We would pay within ten days instead of thirty. And if we agree, would you hold the price until December?']));
out.push(box('Marking the Unit 19 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Says plainly that they are asking (1) · **a specific number** (2) · something offered in return (2) · one more thing at the end (1) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the number are the heart of it. _Could you give us a discount?_ scores 0 of 2 however polite it is.',
  '⚠ The fourth move — the extra thing after the agreement — is the one most often missing. It is worth one mark and in real life it is worth more than the discount.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 19**'));
out.push(p('**1 _supply us boxes_ and _buy from them boxes_.** Word order and the preposition, together. Drill the two whole phrases — _buy X **from** Y_, _supply Y **with** X_ — and do not explain them; there is nothing to understand.'));
out.push(p('**2 The ask with no number.** Not a grammar fault and the expensive one. A learner who says _could you give us a better price_ has made a request that cannot be answered. Send them back to say it again with a figure, every time, until the figure comes first.'));
out.push(p('**3 Adjectives without evidence.** _Reliable · good · professional._ The fix is mechanical and it works: every time an adjective is used about a supplier, ask "how many, out of how many?" After two lessons they stop reaching for the adjective at all.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 19 · Answer Key');
