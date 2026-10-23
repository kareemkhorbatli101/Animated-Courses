// Proactive Business English A2 · Syria Edition · Book 2 · Unit 23 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 23  The Company and the City'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **No grammar in this unit is new.** _Since_ and the past simple, _there is/are_, comparatives, the passive, _because of_ — all of it has been met. The unit is a consolidation disguised as a topic, and it is worth saying so to a class that will otherwise wonder why it feels easy and reads hard.',
  '⚠ **The unit\'s real subject is credibility.** A company profile and a paragraph about your own city are the two documents learners will write most often outside this room, and both go wrong in the same two ways: the brochure and the complaint. Every Writer\'s box in the unit is aimed at the third thing — a page a stranger could check.',
  '⚠ 23.5 will produce real feeling in a Syrian classroom. Let it. The cycle does not ask anybody to pretend the difficulties are small; it asks for the sentence that comes after each one, and that sentence is usually already true of their workplace and has simply never been written down.',
], C.grey, C.navy));

// ===================== 23.1 =====================
out.push(h2('23.1  We were founded in 1998'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners know the joining year exactly and the founding year roughly, which is itself worth noticing.'));
out.push(p('**b**  Right: _We were founded in 1998_ and _We have been here since 1998_. Wrong: _We are founded_ (the founding is finished) and _We work here since_ (_since_ needs the present perfect).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 _Since_ takes a point in time, _for_ takes a length — both with _have been_.  2 Because a long-standing customer knew the old shop, and a stranger reads a move as a company that has survived something.'));
out.push(p('**Language box – Practise (samples):**  1 _We were founded in 1998._  2 _I joined in 2014._  3 _We moved to Mezzeh in 2011._  4 _We have been in this district for fifteen years._  5 _It started as a workshop with four people and one machine._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'For the profile: "Nassif Brothers are founded in 1974."'],
  ['B', 'Were founded. The founding happened once, in 1974, and it is finished.'],
  ['A', 'And then "We are here since 40 years."'],
  ['B', '_We have been here for forty years._ _Since_ needs a point — _since 1974_ — and _for_ needs a length. Both take _have been_.'],
  ['A', 'Since the year, for the number.'],
  ['B', 'Exactly that. And put the two moves in — a company that has moved twice and is still trading has told the reader something no adjective can.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the dates and say which told them most; it is nearly always the move, not the founding. Typical errors: _is founded_ · _since forty years_ · _we are here since 2011_ · and _we have founded in 1998_, which is a third, rarer mixture.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What happened', 'When', 'The sentence'], [
  ['founded', '1998', 'Sham Trading was founded in 1998.'],
  ['moved to Mezzeh', '2011', 'We moved to Mezzeh in 2011.'],
  ['second store opened', '2019', 'We opened a second store in Homs in 2019.'],
  ['second store closed', '2021', 'We closed it in 2021.'],
  ['I joined', '2014', 'I have been with the company for twelve years.'],
], [1.2, 0.7, 2.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We were founded in 1998. We moved to Mezzeh in 2011. We have been here for fifteen years."', 'Ask the oldest company in the room what it started as. The answer is almost always smaller than the present business and it is the best sentence in any profile.']));
out.push(stage('5', 'Read'));
out.push(p('1 Six: 1998, the move in 2011, _since then_, the Homs opening in 2019, its closing in 2021, and _since 1998_ for the two staff.  2 Because everybody local knows it closed, so hiding it buys nothing and costs the whole page its credibility.  3 That people stay — which can be checked, cannot be said by a competitor, and is three words shorter.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**NASSIF BROTHERS — who we are**', 'Nassif Brothers was founded in 1974 as a tin workshop in Qanawat, with two brothers and a hand press. We moved to the industrial zone in 1996 and have been in the same unit since then. We opened a shop front in Jaramana in 2016 and closed it in 2020.', 'We employ eleven people. Six have been with the company for more than ten years; one has been here since 1981.', 'We make and sell metal boxes and shelving — to about ninety trade customers in Damascus, and to walk-in customers from the industrial-zone unit.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Was founded_, not _is founded_', '✓'],
  ['Three or four dates', '✓ – five'],
  ['Something that closed or stopped', '✓ – the Jaramana shop'],
  ['Numbers in place of adjectives', '✓ – eleven, six, ninety'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says replace every adjective with a number, and you have done it everywhere but one place: _a hand press_ is lovely and I cannot check it. Do you know what it made in a day?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Count dates against adjectives on the board. A good first paragraph runs about five dates and numbers to one adjective; a brochure runs the other way round.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['There is a glass shop two streets from us that was founded in 1952 by a man whose grandson now runs it. It started as one room cutting window glass by hand and it still cuts window glass, in the same room, with a machine bought in the eighties. It has survived three currencies, two wars and the arrival of four competitors, all four of which have closed. When people ask the grandson how, he says that he has never once been out of stock of the one thing everybody comes for, which is plain 4mm glass.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"he has never once been out of stock of the one thing everybody comes for"_   ✓ _since / for used correctly._   ? _What has it survived that nearly closed it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('What the survivors share is rarely the product. It is usually one unglamorous reliability — never out of stock, always open at seven, the same price all day — and learners find this out for themselves if the question is asked.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['The registration says 1998, which is two years later than the family says. I am using 1998, because that is the year somebody can check, and the two years are not worth the one day we would lose arguing about them.']));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  There is a generator, but there is no lift'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect four _there is_ sentences and no _there is no_ — which is the cycle in one observation.'));
out.push(p('**b**  _There are two offices._ is right. _It has two offices_ is grammatical but reads as a brochure. The other two are wrong.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That it saves somebody a wasted journey, and that it is what makes the first half believable.  2 Because it matters more than the loading bay or the lift in July.'));
out.push(p('**Language box – Practise (samples):**  1 _There are six desks and there is no second door._  2 _There are two store rooms; there aren\'t any windows._  3 _There is parking for three cars and there is no shade._  4 _There are eleven steps and there is no lift._  5 _There is a bank two streets away; there isn\'t a cash machine in the district._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The engineer asked what the workshop is like. I said it is very good.'],
  ['B', 'Which tells him nothing. What is there?'],
  ['A', 'There are three machines, there is a yard, and there is a generator.'],
  ['B', 'That is a workshop. Now what is there not?'],
  ['A', 'Why would I tell him that?'],
  ['B', 'Because the gate is too narrow for a lorry and there is no telephone line. If he finds that out on Tuesday with a lorry at the gate, we have cost him the morning.'],
  ['A', 'So: there is no telephone line, there is no shade in the yard, and the gate takes a van but not a lorry.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two halves in two columns. Typical errors: _there is two_ · _there are no lift_ · _there is not any steps_ · and the content fault of a note with no absences in it at all.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['There is / there are…', 'There is no / there aren\'t any…'], [
  ['There is parking for three cars in front.', 'There is no loading bay.'],
  ['There are two store rooms on the ground floor.', 'There is no lift to the first floor.'],
  ['There is a generator from one until four.', 'There is no water in the upstairs room.'],
  ['There are three places to eat on the corner.', 'There isn\'t a hotel in the district.'],
], [1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"There is parking for three cars and there are two store rooms. There is no lift, so bring a second person if you have more than ten boxes."', 'The most useful "there is no" is nearly always something nobody thinks to mention, because the people who work there stopped noticing it years ago.']));
out.push(stage('5', 'Read'));
out.push(p('1 _There is no lift — eleven steps, and everything is carried. If you are bringing more than ten boxes, bring a second person._  2 Because it turns an absence into a plan: unload before eleven and the problem does not exist.  3 It gives a person and a number — which is what a visitor standing in the street with a van actually needs.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**COMING TO THE INDUSTRIAL-ZONE UNIT — what to expect**', '**Getting here.** There is space for two cars inside the gate. There is no sign on the street: we are the third gate after the bakery, with a green door.', '**The building.** There is a workshop on the ground floor and an office above it. There is no lift — fourteen steps, and the office is where the paperwork is signed. If you are bringing samples, leave them downstairs.', '**Power and water.** There is a generator and it runs from eight until two. There is water in the yard but there is none upstairs.', '**Nearby.** There is a bakery on the corner and there are two mechanics. There isn\'t anywhere to park a lorry; lorries unload at the gate and leave.', '**Ask for** Bassel in the workshop, or telephone 011 ___ ____ from the gate.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_There is_ / _there are_ agreeing correctly', '✓'],
  ['At least three "there is no"', '✓ – four'],
  ['A consequence next to each absence', '✗ – the water has no consequence'],
  ['A name and a telephone number at the end', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says put the consequence next to the absence. _There is no sign on the street_ has one — the green door — and that is the best line on the page. _There is none upstairs_ has none: what should I do about it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask which workplace the class could find and enter without telephoning. Usually one or two, and the difference is always a landmark rather than an address.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['I once drove to a factory in Adra with a car full of samples and found the gate locked, because it was the last Thursday of the month and the whole zone closes at one. Everybody there knew it. Nobody had thought to say it, because for them it is simply what Thursday is. I lost a day and about 90,000 in fuel and the man I was going to see was apologetic in a way that made it clear he had heard this before from other people.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"for them it is simply what Thursday is"_   ✓ _there is / there are correct._   ? _Had it happened to somebody else before you?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In nearly every story somebody knew and did not say, and it is not unkindness; it is familiarity. The fix is the note from stage 6, written once by somebody who has not worked there long.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['There is no sign on the street. There is no lift. There is no water upstairs, so wash downstairs before you come up. There isn\'t anywhere for a lorry, so lorries unload at the gate.']));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  Cheaper than Damascus, further from the port'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Listen for bare comparatives — _nicer_, _better_ — and let 23.3 arrive on its own.'));
out.push(p('**b**  Right: _cheaper · more expensive · as cheap as_. Wrong: _more cheap · expensiver · cheaper as_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 None on its own — he wants three, with at least one against.  2 It is an opinion wearing a comparative: _better_ with nothing after it says only that the speaker has already decided.'));
out.push(p('**Language box – Practise (samples):**  1 _The rent is about forty per cent cheaper than in Mezzeh._  2 _It is two hours instead of five._  3 _The market is perhaps three times smaller._  4 _The traffic is worse than in the old city, but only after four._  5 _There are four competitors instead of eleven._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'For the second supplier, Latakia is much better than Aleppo.'],
  ['B', 'Better in what way? _Better_ with nothing after it is an opinion wearing a comparative.'],
  ['A', 'Latakia is nearer the port.'],
  ['B', 'How much nearer?'],
  ['A', 'It is the port — nothing to road at all, against four hours from Aleppo.'],
  ['B', 'Now that is a comparison. What else?'],
  ['A', 'The price is about the same. But the choice is narrower, and my cousin works there, which I should have said first.'],
  ['B', 'So it is nearer, the same price, narrower, and you have an interest. Now I can decide — and the last part is what makes me trust the first three.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three comparisons and the one against. Typical errors: _more cheaper_ · _cheaper as_ · _more far_ for _further_ · and the content fault of four comparisons all pointing the same way.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Dimension', 'Place A', 'Place B', 'The sentence'], [
  ['rent', 'Homs 1,200', 'Aleppo 2,000', 'Homs is about forty per cent cheaper for the same area.'],
  ['distance', '2 hours', '5 hours', 'Homs is two hours by lorry instead of five.'],
  ['market size', '~1x', '~3x', 'Aleppo is perhaps three times bigger — the argument against Homs.'],
  ['competitors', '4', '11', 'There are four of our kind in Homs and eleven in Aleppo.'],
], [1, 0.8, 0.8, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Homs is about forty per cent cheaper than Aleppo for the same floor area. It is also two hours instead of five. But the market is perhaps three times smaller. On balance I would choose Homs."']));
out.push(stage('5', 'Read'));
out.push(p('1 **The market** — Aleppo is three times bigger, and the note says plainly that this is the strongest argument against the writer\'s own choice.  2 The rent and the distance are certain while the market size is a guess; being sure of the Aleppo market would reverse it.  3 _as far as we can count from the directory_ — and again in the final paragraph, where the market size is called a guess.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**A SECOND WORKSHOP — Jaramana or the industrial zone**', '**Rent.** Jaramana is about a third cheaper for the same area: 800 against 1,200 a month for 150 square metres.', '**Access.** The industrial zone takes a lorry to the door. In Jaramana a lorry stops on the main road and everything is carried eighty metres, which is about forty minutes a delivery.', '**Customers.** Jaramana is where two thirds of our walk-in customers live. This is the strongest argument against the industrial zone and it should not be buried.', '**Power.** The industrial zone has about three hours more supply a day. That is certain; I have asked four people in the zone.', '**On balance I would choose the industrial zone**, because the lorry access and the power are certain and the walk-in figure is from memory, not from a count. If somebody counts the walk-ins for a month and I am wrong, I would say the opposite.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A measure in every comparison', '✓'],
  ['The strongest argument against, named as such', '✓ – the walk-in customers'],
  ['Certain numbers separated from guesses', '✓ – the walk-in figure is from memory'],
  ['_On balance_, and what would change it', '✓ – a month\'s count'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says end with what would change your mind, and yours names an actual test — a month\'s count. The only thing I would ask is who is going to do the counting, because at the moment the sentence is safe precisely because nobody is."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "argument against" paragraphs. Ask the class whether each one would change their mind; a paragraph that would not is usually not the strongest argument, only the safest one.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A friend chose a shop by rent, floor area and the width of the street, and compared four locations carefully on all three. He did not compare where people walk. The street he chose is wide and cheap and nobody walks down it, because it has no bank and no bakery and no reason to be on it. He closed in fourteen months. The dimension he forgot was countable: he could have stood on each of the four streets for an hour on a Tuesday and counted.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"he could have stood on each street for an hour and counted"_   ✓ _than / as used correctly._   ? _Did anybody suggest it at the time?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most forgotten dimensions were knowable at the time and cheap to measure. That is uncomfortable and it is the most useful thing in the cycle.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Our district against the next one: rent about a quarter higher; twice as many of our kind of business; four minutes further from the ring road; and, as far as I can judge, three times the passing traffic on foot.']));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  It is made here and sent to Beirut'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The instruction "without naming a person" is the whole cycle and most learners manage it immediately in speech.'));
out.push(p('**b**  Right: _The boxes are made in Homs._ and _The boxes were sent yesterday._ Wrong: _make in Homs_ (no _be_) and _are maked_ (wrong third form).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 When the person **is** the point — _a mistake was made_ is the Unit 15 fault and this cycle does not undo it.  2 _Make_ is irregular: the third form is **made**.'));
out.push(p('**Language box – Practise (samples):**  1 _The boxes are made in Homs._  2 _The wrap is imported through Latakia._  3 _The order was sent on Tuesday._  4 _Wrap is not made locally; it is imported._  5 _The note is signed by the person who checked it._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'For the report: "A delivery note was signed and the load went to the wrong address."'],
  ['B', 'Signed by whom?'],
  ['A', 'That is the problem — nobody knows.'],
  ['B', 'Then the passive is hiding the only fact that matters. Write what you know: _the note has no name on it, so we cannot tell who checked the load._'],
  ['A', 'That sounds worse.'],
  ['B', 'It is worse, and it is true, and it points at the fix. _Was signed_ points at nothing. The passive is for processes; this is not a process, it is a gap.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the passives and mark the one that should not have been one. Typical errors: _is make_ · _was maked_ · _are sended_ · and the content fault of a passive used to avoid a name that the reader needs.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'The passive sentence', 'Does the doer matter?'], [
  ['boxes', 'The boxes are made in Homs and delivered flat.', 'no'],
  ['wrap', 'The wrap is imported through Latakia.', 'no'],
  ['labels', 'Short runs are printed here the same day.', 'no'],
  ['long runs', 'Anything over five thousand is sent to Homs.', 'no'],
  ['the gate check', 'The note is signed by the person who checked it, by name.', 'yes — this is the one'],
], [1, 2.2, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The boxes are made in Homs and delivered to us flat. The one that needs a name is the gate check, because that is the step where a load goes to the wrong address and somebody has to be able to ask who checked it."']));
out.push(stage('5', 'Read'));
out.push(p('1 Five: _are delivered_ (twice), _is checked_, _is loaded_, _is signed_.  2 Because the gate check is the one step that can go wrong in a way somebody must answer for; everything else is a process.  3 Wrap stiffens — so nothing is kept more than six weeks.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**NASSIF BROTHERS — what we sell and where it comes from**', '**Sheet metal.** Bought in Damascus from two merchants we have used since 1996. Delivered in sheets and cut here to order.', '**Paint.** Imported and stored in the yard shed. Nothing is kept for more than three months, because the colours separate and a separated tin is a complaint waiting to happen.', '**Shelving.** Pressed and welded here. Standard sizes are made in batches of twenty and kept in stock; anything else is made to order in four days.', '**Delivery.** Orders taken before ten are delivered the same day inside Damascus. Everything is counted against the order at the gate before it is loaded, and the gate sheet is signed by the person who counted it, by name.', '⚠ The gate sheet is the only place a name appears. Everything above it is a process; the count is the step that goes wrong.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Be_ + the third form throughout', '✓'],
  ['A reason attached to each rule', '✓ – the colours separate'],
  ['One named role, at the step that matters', '✓ – the gate sheet'],
  ['No passive hiding a person', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give a reason for each rule. The three-month paint rule has a good one. _Four days_ for a made-to-order job has none — is four days the pressing, the welding, or waiting for the metal?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Listen for the one named role and ask whether it is at the right step. Where a class puts the name, nine times out of ten, is the goods inwards or the gate — which is almost always correct.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The bread we eat every morning is baked about four hundred metres from the house. The flour is delivered before five, the dough is mixed in one machine that has been there longer than the owner, and the loaves are fired in a gas oven in batches of about sixty. It is all process and none of it needs a name — except the counting at the door, where the trays are handed out and the money is taken, and that is always the same man, because the one time it was somebody else half a tray went missing and everybody still remembers it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the one time it was somebody else half a tray went missing"_   ✓ _be + third form._   ? _How much of the process did you watch, and how much did you assume?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how much of each process the writer has actually seen. The honest half is always the more interesting one, and admitting the assumed half is exactly the habit 23.6 is about to need.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['The metal is bought in Damascus. The paint is imported. The shelving is pressed and welded here. Standard sizes are kept in stock. The gate sheet is signed, by name, by whoever counted the load.']));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  Because of the power cut, not because we forgot'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect power, roads and paperwork first; press for the fourth, which is usually the exchange rate or the time a licence takes.'));
out.push(p('**b**  Right: _because of the traffic_ (noun) and _because it was late_ (clause). Wrong: _because the traffic_ · _because of it was late_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 What we do about it — the answer half, in the same sentence.  2 That _the situation_ means nothing to a stranger and everything to us, which is the worst combination in a document somebody else will read.'));
out.push(p('**Language box – Practise (samples):**  1 _Because of the power cuts, we run a generator from one until four._  2 _Because the roads are slow, we deliver to the Ghouta on two fixed days._  3 _Because of the exchange rate, a price is held for fourteen days in writing._  4 _Because a licence takes nine weeks, we start the paperwork before the first order._  5 _Because of the shortage, we hold six weeks of wrap and no more._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The paragraph: "Because of the circumstances, everything is difficult. Because of the situation, we cannot plan."'],
  ['B', 'Every sentence is grammatically right and the paragraph is useless. Name one of them.'],
  ['A', 'The electricity.'],
  ['B', 'Good. There are cuts; what do we do?'],
  ['A', 'We run the press in the morning and do the paperwork in the afternoon.'],
  ['B', 'So: because of the cuts, the press runs in the morning and the paperwork is done in the afternoon. Now name the second one.'],
  ['A', 'The licence. It takes nine weeks.'],
  ['B', 'And so?'],
  ['A', 'And so we start it before the first order, not after it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four completed sentences. Typical errors: _because of it was late_ · _because the traffic_ · _because of_ with a whole clause after it · and the content fault of a difficulty with no answer, which is the one worth most attention.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The difficulty, named', 'What we do about it'], [
  ['power cuts, every afternoon', 'a generator from one until four, so the counter and the label machine do not stop'],
  ['roads: an hour for twenty minutes', 'the Ghouta on Tuesdays and Thursdays only, promised and kept'],
  ['the exchange rate', 'a price held fourteen days in writing, then re-quoted'],
  ['a licence takes six to nine weeks', 'the paperwork is started before the first order'],
  ['people leaving for work abroad', 'no answer yet — two left this year and we have not replaced either'],
], [1.4, 2]));
out.push(note('The honest last row is the most valuable one in the table. A class that writes "no answer yet" on one line has understood the cycle; a class with five tidy answers has written a brochure with better grammar.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Because of the power cuts, we run a generator from one until four. Because the roads are slow, we deliver to the Ghouta on two fixed days. The one with no answer yet is people leaving — two went this year and we have replaced neither."']));
out.push(stage('5', 'Read'));
out.push(p('1 It promises four difficulties and that all four have answers — and it keeps the promise: power, roads, prices, paperwork, each with what is done.  2 That it cannot be done, and that a price withdrawn is worse than a price that was honest about its date.  3 A difficulty is planned around; an excuse is offered instead of a plan.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**DOING BUSINESS WITH US IN DAMASCUS — what to expect**', 'There are four things a new customer should know, and all four have answers.', '**Power.** There are cuts every afternoon. Because of them the press runs from eight until two and the paperwork is done in the afternoon, so an order placed in the morning is pressed the same day.', '**Roads.** A delivery across the city takes an hour. Because of that we deliver to one half of the city on Mondays and Wednesdays and the other half on Tuesdays and Thursdays, and we keep those days.', '**Prices.** A price is held for twenty-one days, in writing, with the date on it. We do not pretend a price can be held for a season, because it cannot, and a withdrawn price costs more trust than an honest date.', '**Paperwork.** A new trade account takes about three weeks to open. Because of that we will quote and deliver against a proforma while the account is being opened.', 'None of these four is going to be solved by us. All four are planned around, and that is the difference between a difficulty and an excuse.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A first line promising the structure', '✓'],
  ['Every difficulty named, not "the situation"', '✓'],
  ['An answer in every paragraph', '✓'],
  ['A closing line about planning', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says every difficulty needs what you do about it. All four of yours have one. The one I would push on is the roads — you say you keep the days; what happens on the week you cannot?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask which company the class would place a first order with. The answer is reliably the page with the most difficulties on it, provided every one has an answer — and saying that out loud is the moment the unit lands.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Our difficulty was the afternoon. For two years we simply lost it: the power went at one, the machines stopped, and five people sat until four. We tried a second shift at night, which nobody wanted and which cost more in tea than it made. What works now is dull — the machines run from eight until two and every afternoon is for paperwork, cutting lists, telephoning customers and cleaning. The afternoon is not a problem any more because we stopped pretending it was a morning.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"we stopped pretending it was a morning"_   ✓ _because of + noun, because + clause._   ? _Could anybody else use this?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Collect every answer that could be copied onto one sheet and photocopy it. This is usually the most valuable page the class produces all term and it is produced in four minutes.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Because of the cuts, we work from eight until two. Because the roads are slow, each half of the city has two fixed days. Because of the exchange rate, a price lasts twenty-one days. Because an account takes three weeks, we deliver against a proforma meanwhile.']));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  Did you read about the new rule?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. In most classes the honest answer is a traders\' group on a telephone, which is exactly why the cycle exists.'));
out.push(p('**b**  _It says in the paper that…_ is the strongest; the other three all need checking before they are repeated upwards, and _somebody told me_ needs naming the somebody.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 So the hearer knows how much to believe before they hear the content.  2 She separates it into a second sentence: what he read, and then what he thinks.'));
out.push(p('**Language box – Practise (samples):**  1 _It says in the traders\' group that imported packaging must be labelled in Arabic from June. I have not seen the gazette. If it is true, a third of what we import needs a new label._  2 _Apparently — a customer told me — imported wrap rises thirty per cent in September. If it is true, our fourteen-day price promise is the thing to look at._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Did you read about the wrap price? It is going up thirty per cent in September.'],
  ['B', 'Where did you read it?'],
  ['A', 'A customer told me this morning. He heard it from his importer.'],
  ['B', 'Then say that first. _Apparently — a customer heard it from his importer — imported wrap rises thirty per cent in September._ Now I know how much to believe.'],
  ['A', 'It might be in the trade press too. I am not sure.'],
  ['B', 'Then that is two things: what you were told, and what you think. Keep them apart.'],
  ['A', 'And what does it mean for us?'],
  ['B', 'That is the third sentence and it is the one I need: every price we are holding for fourteen days is a price we may be filling at the new cost.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write source, content and consequence in three columns. Typical errors: _Did you read about of_ · _It says that is_ · _Apparently that…_ · and the content fault of a consequence with no number in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Source', 'What it says', 'What it means for us'], [
  ['traders\' group, 6 May', 'imported packaging must carry an Arabic label from 1 June', 'about a third of our imports, sold retail — labels and a week of setting up'],
  ['a customer, this morning', 'imported wrap up thirty per cent in September', 'the fourteen-day prices we are holding now'],
  ['the municipality notice board', 'the Mezzeh road closes for three weeks from the 1st', 'the Tuesday and Thursday Ghouta runs, rerouted or moved'],
], [1, 1.8, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Apparently — it was in the traders\' group on the sixth — imported packaging has to carry an Arabic label from June. I have not seen the gazette myself. If it is true, it means about a third of what we import needs a label, and about a week of somebody\'s time to set up, once."']));
out.push(stage('5', 'Read'));
out.push(p('1 **What I think** — and it is the shortest of the five, which is correct.  2 Because four weeks is enough to label the retail stock, so nothing is lost by waiting for the gazette number — which is what prevents an expensive decision taken on a group message.  3 Found the gazette, and asked the chamber.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**NOTE — thirty per cent rise in imported wrap (unconfirmed)**', '**What I have seen.** Nothing written. A customer told me on 9 May that his importer expects imported wrap to rise about thirty per cent in September.', '**What I have not seen.** Any price list, any letter from our own supplier, anything in the trade press. I have not telephoned Ms Shamsi to ask.', '**What I think.** Something will rise; thirty per cent and September are both likely to be wrong in detail. A customer repeating an importer is two people away from the decision.', '**What it would mean for us.** We are holding about forty prices on fourteen-day terms. At thirty per cent, filling them all at the new cost would cost roughly a month of margin on wrap.', '**What I suggest.** I telephone Ms Shamsi tomorrow and ask her directly. Until she answers we change nothing, because our prices are only held fourteen days and a September rise cannot reach a price written in May.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The source, with a date', '✓ – a customer, 9 May'],
  ['A "what I have not seen" paragraph', '✓'],
  ['A number for the consequence', '✓ – forty prices, a month of margin'],
  ['A suggestion, and why waiting is safe', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says show that waiting is safe if it is, and your last sentence does it properly — fourteen days cannot reach September. That is the sentence that stops a panic, and I would put it first."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "what I have not seen" paragraphs. Ask whether the class now trusts the rest more or less. It is reliably more, and that result is worth naming out loud.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['In 2021 a message went round that a particular import licence was about to be withdrawn. Four shops in our street bought a year of stock in nine days, at the top of the price, on a message nobody had traced. It was not true; a form had changed, not a licence. Two of the four still had that stock eighteen months later and one of them sold it at a loss. The whole thing could have been settled by one telephone call to the chamber, and I know of nobody who made it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"a form had changed, not a licence"_   ✓ _apparently / it says that used correctly._   ? _Who could have made the call?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('One telephone call would usually have settled it, and usually nobody was willing to make it — because making it means admitting you do not know, in front of people who are already acting. That is the real finding and it is not a language problem.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Source: the traders\' group, 6 May, no gazette number. Content: Arabic labels on imported packaging sold retail, from 1 June. For us: about a third of imports, 0.5 a unit and one week of setting up, once.']));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: the local business page'));
out.push(stage('1', 'Get ready – Unit 23 quiz (answers)'));
out.push(p('**1** _were_ founded.  **2** a **length** of time.  **3** _There **are** two store rooms._  **4** cheaper **than** Aleppo.  **5** _Because **of** the power cuts_ — _of_, because a noun follows.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 To say exactly which things are difficult and what is done about each — not to say it is easy.  2 That the one sentence to take away is the last: none of the four will be solved by us, and all four are planned around.'));
out.push(p('**Language box – Practise (sample mediation):**  _"It is difficult — you are right, and the page says so. What the page is for is the other half. Cuts every afternoon, so the generator runs one until four. Slow roads, so the Ghouta is Tuesdays and Thursdays and only those. Prices held fourteen days in writing, and not a day longer. Nine weeks for a licence, so we start it before your first order. None of that is going to be solved by us. All of it is planned around."_'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'The other distributor sent me a page saying they are the leading supplier in Syria and everything is excellent. Yours sent me four problems.'],
  ['B', 'It is a fair reaction. Ask yourself one question about their page: what will they do in August when the power goes at one?'],
  ['A', 'Presumably the same as you.'],
  ['B', 'Possibly. But they have not written it down, which means nobody in their office has had to agree what it is. Ours is written down, so Hala and the driver and I all give you the same answer.'],
  ['A', 'And if I ask them and they have a good answer?'],
  ['B', 'Then take them. I am not asking you to prefer the pessimist. I am asking you to compare the answers, not the adjectives — and only one of the two pages has any answers on it to compare.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four answers and the one sentence they would take away. The sentence they choose is almost always the last line of the difficulties page, which is why it is written as a line and not as a clause.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'What they objected to', 'What I said'], [
  ['the Lebanese supplier', 'it sounds difficult; the other page sounds confident', 'compare the answers, not the adjectives — only one page has answers'],
  ['the engineer', 'it sounds like excuses', 'an excuse replaces a plan; each of these has a plan after it — bring two men and come at nine'],
], [1, 1.5, 2]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"The page said four things were difficult and gave an answer to each. The visitor thought it sounded worse than the company that said everything was excellent. I said that the difficulties are everybody\'s and the answers are not, and that only one of the two pages had anything on it he could check. The sentence I left him with was: none of these four is going to be solved by us, and all four are planned around."']));
out.push(p('This is the **eleventh** unit of Book 2, and the unwritten thing is the one the whole unit turns on: a difficulty with an answer beside it is a qualification, and a page with no difficulties in it has not been written by anybody who has to deliver anything. Learners feel this before they can say it, because they have all been on the receiving end of the excellent page.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '_Was founded_ — one finished act in 1998.'],
  ['2', 'B', '_Have been … since_ joins 2011 to today.'],
  ['3', 'A', 'No loading bay, so a van unloads on the street.'],
  ['4', 'B', '_For the same floor area_ — the space is equal, the price is not.'],
  ['5', 'B', 'The passive: Homs does the printing, Beirut receives.'],
  ['6', 'B', 'The difficulty **and** the answer, in one sentence.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (32 words)'));
out.push(sample(null, ['Dear Mr Jaber, we are at 14 Mezzeh Street, the third gate after the bakery. There is no loading bay, so please come before eleven. Ask for Hala at the counter, or telephone 011 ___ ____.']));
out.push(stage('6P', 'Check together'));
out.push(p('All three points present: where it is (with a landmark, which is better than an address) · one _there is no_ with its consequence · a name and a number. Thirty-two words. ⚠ The commonest fault is describing the building instead of naming the absence; in twenty-five words, _there is no loading bay, so come before eleven_ is worth four sentences of description.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Doing business here is slower than you would like and more certain than you would expect. The power goes every afternoon, so everybody works mornings and nobody is surprised by it. A price is good for two or three weeks, not a season, and anybody who tells you otherwise is guessing. Paperwork takes about twice as long as it should. Against that: people answer their telephones, debts of twenty years are still paid, and a supplier you have used since 2013 will send you goods on a message. None of the four difficulties is solved. All four are planned around.']));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['The sentence: we plan around what we cannot fix, and we write the plan down so that everybody here gives you the same answer. I would want that taken away because it is the one claim on our page that a stranger can test in a week.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 23 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'b', 'b', 'a', 'b', 'b', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _**was** founded_ — finished past.  **2** _**have been** … since_.  **3** _**for** fifteen years_ — a length.  **4** _there **are** two_ — the verb agrees with what follows.  **5** _there is **no** lift_.  **6** _cheaper **than**_.  **7** _the labels **are** printed_.  **8** _**Because of** the power cuts_ — a noun follows.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Founded', 'Moved to Mezzeh', 'People employed', 'There is no', 'Generator hours'], [[
  '1998', '2011', 'nineteen', 'lift (eleven steps, everything carried)', 'one until four',
]], [0.8, 1.2, 1.2, 2, 1.2]));
out.push(note('The fourth gap takes _lift_ alone. Learners who write the eleven steps as well have heard the consequence, which is the habit 23.2 was built to produce — give the mark and say so.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (54 words)', ['Nassif Brothers was founded in 1974 as a tin workshop in Qanawat. We moved to the industrial zone in 1996. We employ eleven people and six of them have been here more than ten years. There is no sign on the street, so look for the third gate after the bakery, with a green door.']));
out.push(box('Marking the Unit 23 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', '_Was founded_ + a year (2) · a second date (1) · a number in place of an adjective (2) · one _there is no_ **with its consequence** (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for the number are lost by any adjective doing a number\'s work — _a large workforce_, _a long history_, _many customers_. Take them off cleanly; it is the fault the whole of 23.1 is built against.',
  '⚠ The _there is no_ marks are **one for the absence and one for the consequence**. _There is no lift_ alone scores 1 of 2, and saying so before they write saves the mark.',
  '⚠ Give nothing extra for a superlative, however well spelled. _The leading supplier in Damascus_ earns no marks in this check and should be crossed through, with the reason written once.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 23**'));
out.push(p('**1 _Since_ with the present simple.** _We work here since 2011_ is the most persistent error in the unit, because it is correct in the home language and the English alternative has three words in it. Drill the chunk, not the rule: _we have been here since…_ · _we have been here for…_ Say it twenty times in a week and it stops being a decision.'));
out.push(p('**2 The brochure and the complaint.** These are not grammar faults and they are what the unit is for. The brochure learner writes _a leading supplier with excellent service_; the complaint learner writes four sentences beginning _because of_ and no answers. Both are afraid of the same thing — that the truth is not good enough — and both are answered by the same instruction: give the number, then give the answer. Keep one example of each on the wall for the rest of the course.'));
out.push(p('**3 The passive used to hide a person.** 23.4 teaches the passive for processes and Unit 15 forbade it for mistakes, and some learners will leave 23.4 believing the earlier rule has been repealed. It has not. When you see _a mistake was made_ in a Unit 23 text, do not treat it as this unit\'s grammar; take it back to Unit 15 and ask who, by name, and watch the sentence rewrite itself.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 23 · Answer Key');
