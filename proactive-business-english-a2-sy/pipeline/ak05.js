// Proactive Business English A2 · Syria Edition · Book 1 · Unit 5 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 5  Prices, Payment and Invoices'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 5.1 =====================
out.push(h2('5.1  How much is it?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check the three forms: _How much **is** the board? · How much **are** the chairs? · How much **does** a pen **cost**?_'));
out.push(p('**b**  five hundred · one thousand five hundred · twelve thousand · eighty-five thousand · a hundred and ninety-two thousand · one million two hundred and fifty thousand'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the price of boxes)   **b**  1 Eight hundred pounds.  2 Seven hundred each — seventy thousand for the hundred.'));
out.push(p('**Language box – Practise (samples):**  1 How much is the box? – It\'s 800.  2 How much are the boxes? – They\'re 800 each.  3 How much does the tape cost? – It costs 2,500 a roll.  4 How much is it for a hundred? – 70,000 for the hundred.  5 Is there a discount on tape? – No, there\'s no discount on tape.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. How much are the folders?'],
  ['B', 'The folders are one thousand two hundred each.'],
  ['A', 'Twelve hundred. And if I take fifty?'],
  ['B', 'The same, I\'m afraid — there\'s no discount on folders.'],
  ['A', 'How much does the paper cost?'],
  ['B', 'Paper is nine thousand a packet. For ten packets or more it\'s eight thousand.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write four prices **with their units**; a price with no unit scores nothing. Typical errors: _how much does it costs_; _it is 800_ with no _each_; _the price is 800 for one box_ (correct but slow — teach _each_).'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Thing', 'Price', 'Per what?'], [
  ['bread', '2,000', 'a bundle'],
  ['a service to the centre', '1,500', 'per person'],
  ['an hour of electrical work', '40,000', 'an hour, plus parts'],
  ['tomatoes', '7,000', 'per kilo'],
], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"A kilo of tomatoes costs seven thousand. If you take a box of ten kilos, it\'s six thousand a kilo."', 'The price that usually surprises a class is the hourly one — people know the price of goods and not the price of time.']));
out.push(stage('5', 'Read'));
out.push(p('1 Seventy thousand (100 × 700).  2 Until the end of April.  3 An account — which would get him the wholesale list, lower on the boxes.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Khalil, Thank you for your call. These are the prices, **retail**: A4 paper: **9,000 SYP a packet**. For 10 packets or more: **8,000 each**. Folders: **1,200 SYP each**. There is no discount on folders. These prices are good until the end of May. VAT is included. Delivery inside Damascus is free of charge over 300,000. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every price has its unit', '✓'],
  ['**retail** or **wholesale** stated', '✓'],
  ['A date: until when', '✗ – in the first draft there was no date'],
  ['VAT and delivery', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "Every price has its unit — good. Add until when, or you will have to honour it in September."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Paper 9,000._  →  After: _A4 paper: 9,000 SYP a packet, VAT included, until 31 May._ (unit, tax and date added — the three things a customer telephones about)'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['**English lessons — prices from May.**  One to one: **60,000 SYP an hour**, at my home or yours inside Mezzeh. Groups of three or four: **25,000 each an hour**. A block of ten hours, paid in advance: **10 per cent less**. Books are not included; a Key book costs about 90,000 and I can buy it for you at cost. Prices hold until the end of August. Lessons cancelled less than four hours before cost half.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _The cancellation line is clear and fair — most people hide it._   ✓ _Is travel outside Mezzeh extra?_   ? _Can two people share the one-to-one price?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The sentence that usually decides is not the price: it is the one that answers the fear — _I can buy it for you at cost_, or _cancelled less than four hours before costs half_.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Bread 2,000 a bundle · tomatoes 7,000 per kilo · a service ride 1,500 per person · a phone card 15,000 each · a haircut 25,000.  Too expensive: the haircut — twenty minutes\' work for the price of three kilos of tomatoes.']));

// ===================== 5.2 =====================
out.push(pb());
out.push(h2('5.2  Aleppo is cheaper, but Homs is nearer'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  cheap → **cheaper** · near → **nearer** · big → **bigger** · easy → **easier** · expensive → **more expensive** · good → **better** · bad → **worse**'));
out.push(p('**b**  Open. Sample: _The window is bigger than the door. The board is cleaner than the floor. This chair is more comfortable than that one._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (two suppliers)   **b**  1 Shamsi in Aleppo — 650 against 720 each.  2 Because Homs is four days nearer, Khalil gives thirty days to pay, and Shamsi wants half in advance — so the cheaper price costs more in the yard.'));
out.push(p('**Language box – Practise:**  1 cheaper  2 nearer  3 slower  4 better  5 cheaper'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I have two offers for the van. A and B.'],
  ['B', 'Tell me both.'],
  ['A', 'A: forty-two million, a hundred and eighty thousand kilometres, six years old. B: fifty-one million, ninety thousand kilometres, three years old.'],
  ['B', 'So A is cheaper. How much cheaper?'],
  ['A', 'Nine million cheaper.'],
  ['B', 'And the parts?'],
  ['A', 'That\'s the thing. A is diesel and the parts are easy here. B is petrol and the parts come from abroad.'],
  ['B', 'Then it isn\'t really cheaper, is it?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one thing that made the cheaper offer not the better one (role card 1: parts from abroad; role card 2: two days\' wait, or the distance). Typical errors: _more cheaper_; _cheaper from_ → _cheaper **than**_; _more easy_ → _easier_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['A vs B', 'A is …er', 'B is …er', 'Which I chose'], [
  ['two routes to work', 'shorter (25 min)', 'cheaper (one service, not two)', 'the cheaper one'],
  ['two phone companies', 'cheaper per minute', 'better signal in Mezzeh', 'the better signal'],
  ['two bakeries', 'nearer', 'better bread', 'the better bread'],
], [1.4, 1.2, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The north route is shorter and faster than the east one, but the east one is cheaper because it is one service and not two. I chose the cheaper one, because twenty minutes a day is worth less to me than the fare twice a day."', 'Reasons repeat far more than choices: most of a class says **money** or **time**, and the interesting answers are the other ones.']));
out.push(stage('5', 'Read'));
out.push(p('1 70,000 cheaper for a thousand — about ten per cent.  2 Four days faster, and thirty days to pay (so the money stays with Sham Trading for a month).  3 Khalil for the regular boxes; Shamsi for a big order planned a month ahead.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**TWO OFFERS — a van for the shop**   for my father, 14 April.  Abu Samir: **42,000,000** = diesel, 180,000 km, six years, parts easy here.  Al-Sharq Garage: **51,000,000** = petrol, 90,000 km, three years, parts from abroad.  Abu Samir is **9,000,000 cheaper** — about eighteen per cent. But Al-Sharq is half the kilometres, so it will last longer.  **My reading:** the nine million is one year of repairs on the older van, and the parts for the newer one are the real risk — a week waiting for a part is a week with no deliveries.  **My recommendation:** Abu Samir, and put two million aside for repairs.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Same facts in the same order', '✓'],
  ['The difference is one number', '✓ – 9,000,000'],
  ['Reading separate from facts', '✓'],
  ['There is a recommendation', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I can compare straight down the page. The line about a week with no deliveries is the one that decides it — it could go first."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('A recommendation you can act on alone names the **choice** and the **condition**: _Abu Samir, and put two million aside for repairs._ A bare _I recommend Abu Samir_ sends the reader back to the numbers.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['Latakia is smaller and quieter than Damascus, and the air is better. Damascus is busier, and work is much easier to find — that is why my brother is there and I am here. Rent in Latakia is lower, but food is more expensive in the summer, when the city is full. The sea is the best thing; the winter is worse than people think, because everything closes.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the winter is worse than people think" — nobody says that about the coast._   ✓ _How much lower is the rent?_   ? _Would you move back to Damascus for work?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Preference without _better_: _that is why my brother is there and I am here_ · _the sea is the best thing_ · _everything closes_. Comparison shows a choice more honestly than a judgement does.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['The traffic is worse than ten years ago. Bread is more expensive. The buses are fewer. The internet is faster. The streets are quieter at night. People are more patient than I expected.']));

// ===================== 5.3 =====================
out.push(pb());
out.push(h2('5.3  The cheapest is not always the best'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  cheap → **the cheapest** · near → **the nearest** · easy → **the easiest** · expensive → **the most expensive** · good → **the best** · bad → **the worst**'));
out.push(p('**b**  Open — a survey task. Check the question form: _Who lives **the nearest**? Who travels **the furthest**?_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (three)   **b**  1 Zahra Press — 110,000.  2 Hamdan: not the cheapest, but three days, the nearest, and a printer they already know.'));
out.push(p('**Language box – Practise:**  1 the cheapest  2 nearer  3 the best  4 faster  5 the busiest'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Three quotes for the wall. Hamdi, Said and Jamil.'],
  ['B', 'Which is the cheapest?'],
  ['A', 'Hamdi — nine hundred thousand. He\'s the cheapest by a long way.'],
  ['B', 'And the fastest?'],
  ['A', 'Jamil, five days. But Said is the nearest, and he did my neighbour\'s wall.'],
  ['B', 'And the most expensive?'],
  ['A', 'Jamil does the best finish. But we don\'t need the best finish for a garden wall.'],
  ['B', 'So which one?'],
  ['A', 'Said. Not the cheapest, but the best for us — I can see his work from my window.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('The superlative that decides is almost never _the cheapest_: it is _the nearest_, _the best for us_, or an unspoken one — _the one we know_. Typical errors: a superlative used for two things (_the cheapest of the two_ → _the cheaper_); the missing _the_; _more cheapest_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Superlative', 'Our answer', 'Who disagreed, and why'], [
  ['the best', 'the Friday market', 'Samir — too crowded to be the best'],
  ['the cheapest', 'the market at the end of the day', 'nobody'],
  ['the busiest', 'Thursday evening', 'Rasha — Sunday morning is worse'],
  ['the worst', 'August', 'Fadi — February, because of the heating'],
], [1.2, 1.2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We agreed that the Friday market is the cheapest, but Samir said the end of the day at any market was cheaper, because they want to go home."', 'The superlative a class disagrees about most is **the worst** — it is the one that is really about the person, not the thing.']));
out.push(stage('5', 'Read'));
out.push(p('1 Zahra Press, by 25,000.  2 An invoice book does not need the best paper, and the 25,000 saved costs seven days and an untried printer.  3 If the job were a catalogue rather than an invoice book.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THREE QUOTES — painting the shop**   16 April.  Hamdi: **400,000** · 4 days · Mezzeh · own ladders · never used him.  Khader: **520,000** · 2 days · next street · own ladders · painted the shop next door.  Nabil: **650,000** · 3 days · Jaramana · best finish · used once, very good.  **The cheapest** is Hamdi, by 120,000. **The fastest and the nearest** is Khader. **The best finish** is Nabil.  **Recommendation: Khader.** The shop must close while the work is done, and every closed day costs more than the difference. If this were the flat and not the shop, I would say Nabil.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Same facts in the same order', '✓'],
  ['_the_ before every superlative', '✓'],
  ['Recommendation before the reason', '✓'],
  ['Says what the cheapest would cost you', '✓ – two extra closed days'],
], [3, 2]));
out.push(p('Sample feedback: "The closed-day argument is the whole note. Could you put a number on a closed day? Then nobody can argue."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The _if this were…_ line shows the writer chose for **this** job. A writer who cannot finish that sentence has usually chosen out of habit.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['The best job I ever had was the summer in my uncle\'s workshop. The pay was the worst of any work I have done, but I learned the most and nobody watched the clock. The worst was two months in a call centre: the easiest work, the cleanest office, and the longest days of my life, because I said the same eleven sentences four hundred times.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the same eleven sentences four hundred times" — that is the whole job in one line._   ✓ _Can you say why you left the workshop?_   ? _Would you go back to either?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The adjective used most in a class is usually **good / best**; the ones used once are the memorable ones — _the quietest, the longest, the strictest, the hottest_. Collect them as the unit\'s extra vocabulary.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Damascus is the oldest city in the world that people have never stopped living in. The Hamidiyeh is the busiest street in the country. Palmyra is the most beautiful place in the desert. The Jazira is the hottest region in summer. Our bread is the best in the region, and every neighbour will tell you so.']));

// ===================== 5.4 =====================
out.push(pb());
out.push(h2('5.4  It\'s too expensive for this order'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _too expensive **for a small order** · too expensive **to buy every month** · it isn\'t cheap **enough to use for packing**_'));
out.push(p('**b**  _It\'s expensive, but it\'s good enough_ — that is the one where you buy it. _Too expensive_ closes the deal; _it isn\'t cheap_ is only a comment.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a better price)   **b**  1 Eight thousand — she says 8,200 "isn\'t quite enough" and eight "would make it work".  2 8,200 first, then 8,000 on condition of twelve rolls a month and payment within thirty days.'));
out.push(p('**Language box – Practise:**  1 too  2 enough  3 enough  4 too  5 enough'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'About the car. Twenty-five thousand a day is too expensive for every morning.'],
  ['B', 'That\'s the normal price, and the petrol is mine.'],
  ['A', 'I know. But a service isn\'t fast enough for me — I must be at the shop before seven.'],
  ['B', 'That\'s true. How many days?'],
  ['A', 'Twenty days a month, every month.'],
  ['B', 'Twenty days is enough to give you a better price. Twenty-two thousand.'],
  ['A', 'That\'s better, but it isn\'t quite enough. Twenty would make it work.'],
  ['B', 'Twenty, if you pay on Sunday for the whole week.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what each side **gave**. If one side gave nothing it was not a negotiation — send them back. Typical errors: _enough strong_ → _strong **enough**_; _too much expensive_ → _**too** expensive_; _it is too cheap_ meaning _cheap enough_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What we negotiated', 'I wanted', 'They wanted', 'What we agreed'], [
  ['who writes the report', 'not to write it', 'not to write it', 'I write it, they collect the figures'],
  ['the deadline', 'Thursday', 'Tuesday', 'Wednesday noon, draft only'],
], [1.4, 1.2, 1.2, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said Tuesday was too early for the whole report. He said Thursday was too late for the meeting. We agreed on Wednesday noon for a draft, and I gave him the figures a day early."', 'The sentence that moves a negotiation is almost always the one that **splits the thing being argued about** — here, a draft instead of the whole report.']));
out.push(stage('5', 'Read'));
out.push(p('1 8,000 SYP a roll; the list price is 9,000.  2 Twelve rolls every month, and payment within thirty days instead of sixty.  3 Telephone Ms Shamsi **before** it happens, and accept that month at the list price.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Abu Samir, Thank you for the call this morning. This is what we agreed, so that we both have it in writing: **The car: 20,000 SYP a day** (the usual is 25,000). In return, I will take it **twenty days a month** and pay **every Sunday for the whole week**, in advance. The price holds while I take twenty days a month. If I take fewer in a month, I understand that month returns to 25,000, and I will telephone you before it happens. If anything here is not what you remember, please tell me this week. Rasha']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What we get **and** what we give', '✓'],
  ['The condition is clear', '✓'],
  ['What happens if the condition fails', '✓'],
  ['An invitation to correct it, with a date', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The sentence that is too comfortable for the writer is usually the one about **what happens if things go wrong** — it is written so that the writer loses nothing. Reading it as the other side finds it in ten seconds.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Last year I wanted a washing machine with a dryer. It was one million eight hundred, and that was too expensive for one winter of rain. I bought the machine without the dryer for nine hundred and fifty, and a rack for the balcony. About one million three would have been enough, because the dryer saves two days a week in January and nothing at all in June.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I would have done the same — the dryer is a January machine._   ✓ _What price would have been enough?_   ? _Do you regret it in winter?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What makes paying more worth it is nearly always **time** or **risk**, not quality: _it came the same day_, _I could walk there if it broke_. That is the sentence to look for.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Too: the bus is too full at eight · it is too hot to sleep in August · the rent is too high for one salary · my week is too short · the shop is too far to walk to with bags.  Enough: I sleep enough at the weekend · there is enough bread for three days · the room is big enough for two desks · I earn enough to save a little · the light is good enough to read by.']));

// ===================== 5.5 =====================
out.push(pb());
out.push(h2('5.5  Is this invoice ours or theirs?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  my → **mine** · your → **yours** · his → **his** · her → **hers** · our → **ours** · their → **theirs**'));
out.push(p('**b**  Open. Check there is **no noun** after the pronoun: _That one is **hers**_, not ~~that one is hers pen~~.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (an invoice in the wrong file)   **b**  1 The Shamsi invoice is **theirs** — Sham Trading pays it.  2 Nour\'s: she gave Hamdan Printing a blue sheet to copy, so one of theirs looks like one of hers.'));
out.push(p('**Language box – Practise:**  1 theirs  2 Nadia\'s  3 ours  4 yours  5 ours … theirs'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'This folder. Is it ours or theirs?'],
  ['B', 'Let me see. Green — that\'s from the other company, so it\'s theirs.'],
  ['A', 'But it\'s in our cupboard with ours.'],
  ['B', 'Then somebody put it back wrong. Ours are blue; theirs are green.'],
  ['A', 'And this one?'],
  ['B', 'Blue. That\'s ours.'],
  ['A', 'No — look at the extension number inside. That\'s 305, not 212.'],
  ['B', 'You\'re right. That\'s my mistake. Then the colour isn\'t the test. The extension is.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the test. The first test is usually the **visible** one (colour, paper) and the right one is usually the **written** one (an address, a number) — that is the point of the cycle. Typical errors: _their\'s_, _our\'s_; _it\'s_ for _its_; _ours invoice_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Thing', 'Whose?', 'How we know'], [
  ['the black pen', 'Rasha\'s', 'she wrote her initial on the clip'],
  ['the blue notebook', 'mine', 'my handwriting on page one'],
  ['the grey charger', 'nobody knew', 'left in the drawer with a date on a note'],
  ['the red cup', 'Fadi\'s', 'he is the only one who drinks tea here'],
], [1.2, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The black pen is Rasha\'s. We knew because she writes her initial on the clip. But nobody knew whose the grey charger was, so we put it in the drawer with a note and a date — if nobody claims it in a month, it is the office\'s."', 'The best way a class finds of telling two similar things apart is nearly always **a mark the owner made**, not a difference the manufacturer made.']));
out.push(stage('5', 'Read'));
out.push(p('1 The address at the bottom.  2 Because Sham Trading gave Hamdan Printing a blue sheet to copy the layout, so one of Hamdan\'s invoices looks exactly like one of theirs.  3 Put it in the yellow tray and ask Nadia.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**FULL CYLINDERS AND EMPTY ONES — how to tell**   (after we sent an empty one to a customer).  **Full:** the seal on the valve is unbroken and there is a white tag. They go **against the back wall**.  **Empty:** no seal, no tag. They go **by the door**, ready for the lorry.  **The weight is not the test**, because a half cylinder feels full to a tired arm at five o\'clock. **The seal is the test.** Look at it every time. If there is no seal and no tag, treat it as empty and tell Abu Yasser — never guess, because a customer finds out at home in the middle of cooking.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A test that really separates the two', '✓ – the seal'],
  ['A wrong test named, with its reason', '✓ – the weight, and why'],
  ['Somewhere for each one to go', '✓'],
  ['Somewhere for "not sure"', '✓ – treat as empty, tell A.Y.'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A tired person at five o\'clock can apply a test that is **one look at one place**. Any test that needs two comparisons, or lifting something, fails at five o\'clock.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['The light on our stairs was nobody\'s job. It was not the owner\'s, because the stairs are shared; it was not ours, because the switch is on their landing; it was not theirs, because the bulb is above our door. For two years everybody climbed in the dark with bags. In the end my father bought a bulb and said nothing. Now it is his job for ever, and he knows it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"Now it is his job for ever" — that is exactly why nobody starts._   ✓ _Whose job is the bulb now, officially?_   ? _Did the neighbours ever offer to share the cost?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The thing that is nobody\'s job in nearly every story is the **shared space**: the stairs, the corridor, the yard, the kitchen at work. It belongs to everybody, which means it belongs to nobody.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Adjectives: This is **my** room. That is **her** chair. **Their** balcony is bigger. **Our** water tank is on the roof.  Pronouns: The blue towel is **mine**. The red one is **hers**. The two bicycles are **theirs**. The key on the hook is **yours**.']));

// ===================== 5.6 =====================
out.push(pb());
out.push(h2('5.6  That\'s 192,000. Out of 200,000'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — a pointing drill. Check: **this/these** for near, **that/those** for far; **this/that** singular, **these/those** plural.'));
out.push(p('**b**  8,000 change. In notes: one 5,000 and three 1,000 — or 5 + 2 + 1. Count aloud whichever way you hand it over.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (cash)   **b**  1 Eight thousand.  2 The top two lines (order number and date), the total line, the VAT line, and the small print — three days to report a problem, quoting the order number.'));
out.push(p('**Language box – Practise:**  1 This  2 These  3 Those  4 that  5 Those'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'So that\'s the tablets and the cream. The total is forty-seven thousand five hundred.'],
  ['B', 'Forty-seven five. Here — fifty.'],
  ['A', 'Thank you. Forty-seven five out of fifty… that\'s two thousand five hundred change. Two, two five.'],
  ['B', 'Thank you. And this paper?'],
  ['A', 'That\'s your receipt. These lines are the date and the two items. This line is the total.'],
  ['B', 'And those small words at the bottom?'],
  ['A', 'Those say that medicines can\'t be returned, so please check the box before you leave.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners check whether the change was counted **aloud** — most pairs forget on the first attempt — and then check the arithmetic. Typical errors: _this_ for something across the room; _these paper_; handing the change silently.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What they bought', 'Total', 'Given', 'Change'], [
  ['2 kg coffee, 1 box of cups', '94,000', '100,000', '6,000'],
  ['a tyre, fitted', '310,000', '350,000', '40,000'],
  ['bread and cheese', '12,500', '20,000', '7,500'],
], [2, 1, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi bought two kilos of coffee and a box of cups. The total was ninety-four thousand out of a hundred thousand, so the change was six thousand. The line I explained was the one about VAT being included."', 'In a class of twenty, one or two changes are usually wrong — which is the argument for counting aloud, made better than any teacher can make it.']));
out.push(stage('5', 'Read'));
out.push(p('1 Never change a figure with a pen — write a new receipt.  2 Because half of all price arguments are about VAT, and people do not read.  3 A receipt says _this person has paid_; an invoice says _this company owes us money_, and only Nadia sends those.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE PAYSLIP, LINE BY LINE** — for new staff.  **Top:** your name, your number and the month. The number is how the office finds you; use it in every question.  **The middle:** the basic salary, then anything added — overtime, transport — then anything taken away.  **The "taken away" lines:** tax and insurance. Never read only the bottom number; if a line here changes, ask the same month, not in December.  **At the bottom:** what goes into your hand or your account.  **Not a contract.** A payslip says what you were paid; a contract says what you are owed, and only the office keeps those.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Parts in the order they appear on the paper', '✓'],
  ['Each part has one rule', '✓'],
  ['It says what the document is **not**', '✓'],
  ['Somebody new could use it today', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The two documents confused most often in a class are usually **receipt and invoice**, or **quote and bill** — in both pairs, one says _this is what it will cost_ and the other says _this is what happened_.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['**THE ELECTRICITY BILL.** The big number in the box is not what you owe this month; it is the meter reading. What you owe is the smaller number underneath, next to the date. The line above it is last month, and it is there so you can see whether something in your house has started drinking. If the two readings are very different and nothing has changed, the meter was estimated — the letter E is next to it — and you can ask for a real reading. Take the bill with you; nobody can help you without the account number at the top.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"whether something in your house has started drinking" — now I will look at that line._   ✓ _What does the E mean exactly?_   ? _Where do I go to ask for a real reading?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Classes usually name an official form or a bill. They are written that way because they are written **for the office that files them**, not for the person holding them — which is exactly why this genre is worth practising.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['The line I do not understand on my phone bill says "balance brought forward". I do not know whether it is money I owe or money I have paid. I would ask at the company office, with the bill in my hand, not on the telephone.']));

// ===================== 5.7 =====================
out.push(pb());
out.push(h2('5.7  Review & Mediate: the invoice and the receipt'));
out.push(stage('1', 'Get ready – Unit 5 quiz'));
out.push(p('**1** _How much **is** the box? · How much **are** the boxes? · How much **does** it **cost**?_  **2** cheaper / the cheapest · better / the best · more expensive / the most expensive.  **3** **After** an adjective (_strong enough_), **before** a noun (_enough boxes_).  **4** Because they are already pronouns, not short forms of anything — an apostrophe would mean _ours is_.  **5** A receipt says a person has **paid**; an invoice says a company **owes** money.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the total — he thinks he is being charged twice)   **b**  1 Two different papers with the same reference: the receipt for the 7th and the invoice for the 12th.  2 310,000, due at the end of the month.'));
out.push(p('**Language box – Practise (sample):**  _You have thirty days from the date on this paper to pay. After that they can add interest, so pay before the end of the month._'));
out.push(stage('3', 'Practise – sample mediation of document 1'));
out.push(sample(null, ['"This is an invoice from us to Khalil & Sons, dated the twelfth of April. The goods are two hundred and sixty thousand, and the VAT is fifty thousand, so the total is three hundred and ten thousand. You have thirty days from the twelfth, so the end of the month. If it is later than that, they can add interest — so pay before the end of the month and nothing else happens."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write **one number and one date**. A mediation that gives five numbers has failed, even if all five are right. Send back anybody who says _date of issue_, _discrepancies_ or _overdue accounts_: those are the words being mediated **away**.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they must pay or do', 'By when'], [
  ['Fadi', 'pay 310,000', 'end of the month'],
  ['Hala', 'nothing — it is a receipt, already paid', '—'],
], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s an invoice. It says Khalil & Sons owes three hundred and ten thousand. It must be paid by the end of the month. The part people get wrong is the VAT line — they read the goods price, two hundred and sixty, and think that is the total."']));
out.push(note('Fifth unit of the book, so the ordinal is "fifth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '700 each instead of 800 for 100 or more'],
  ['2', 'A', '"due" + "within 30 days"'],
  ['3', 'B', '"received" = already paid'],
  ['4', 'B', '"free of charge over 300,000"'],
  ['5', 'B', 'wholesale = for shops, not the counter'],
  ['6', 'A', 'three days, and quote the reference'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mr Khalil, The first paper is a receipt, so that order is paid and finished. The second is an invoice for three hundred and ten thousand pounds. It is due at the end of the month. Thank you for coming in. Nour  _(44 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  The first order is paid', '✓'],
  ['2  The second is an invoice for 310,000', '✓'],
  ['3  Due at the end of the month', '✓'],
  ['25 words or more', '✓ – 44 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Samir, Do you remember the 60,000 I lent you for the taxi to the airport? I need it back before the end of the month, if you can. The easiest way is to give it to my brother at the shop — he is there every evening. Thanks! Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Sorry, I forgot completely! I can give your brother half on Thursday and the rest after the fifteenth. Is that all right? Thank you for not asking in front of everybody.']));
out.push(stage('✓', 'Unit 5 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'b', 'b', 'b', 'a', 'a']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Total: **140,000** · Given: **150,000** · Change: **10,000** · Paid by: **cash (VAT included)** · Report problems within: **three days**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Mr Tarabishi, The small boxes are 800 SYP each, and 700 each if you take a hundred or more. Tape is 2,500 SYP a roll; there is no discount on tape. These prices are good until the end of April and VAT is included. Nour  _(44 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** two prices, each with its **unit**, plus the date and the VAT line — one mark each for the two priced items, one for date-and-VAT together.',
  '**Language (2):** price questions and answers formed correctly; comparatives if used.',
  '**Organisation and length (2):** one line per item; 25 words or more.',
  '⚠ A price with no unit scores **half**. This is the habit the whole unit exists to build, and marking is where it is learned.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 5', [
  '**1  The price with no unit.** _It\'s 800._ The learner has answered the question and said nothing. Insist on _each · a roll · per kilo_ from 5.1 onwards, and take the mark off every time.',
  '**2  The double comparative.** _More cheaper._ It is a sign the learner has learned the two patterns separately and not the rule that chooses between them. Sort adjectives by length on the board once, and keep the list on the wall for Unit 5 and 6.',
  '**3  Comparative for three things.** _Zahra is the cheaper of the three._ Learners often get the form right and the count wrong. Make the number of things explicit in every exercise: **two → -er, three or more → the -est**.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 5 · Answer Key');
