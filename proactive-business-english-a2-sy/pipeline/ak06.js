// Proactive Business English A2 · Syria Edition · Book 1 · Unit 6 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 6  Deliveries and Transport'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 6.1 =====================
out.push(h2('6.1  It goes by lorry, not by van'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check the form: _I come **by** service · **by** car · **on foot**._'));
out.push(p('**b**  **foot** — it takes _on_, not _by_: **on foot**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (which vehicle to use)   **b**  1 The van is 1.5 tonnes and the load is nearly two.  2 With a service driver — 5,000 SYP, there in two hours, to the garage in Hama, then two streets on foot.'));
out.push(p('**Language box – Practise:**  1 by  2 on  3 by  4 with  5 to … by … on'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Forty boxes of medicine for Latakia. Refrigerated van or hired lorry?'],
  ['B', 'Can it go by hired lorry?'],
  ['A', 'It can. It shouldn\'t. A lorry isn\'t cold and this is medicine.'],
  ['B', 'Then by refrigerated van.'],
  ['A', 'By refrigerated van. And the van only goes when it has two drops, so we put the Tartous fridge unit on the same trip.'],
  ['B', 'And the small box for Homs?'],
  ['A', 'One box doesn\'t travel by van. It goes with a service driver.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write each item and how it travels. The "expensive way" is usually sending one small item by a whole vehicle. Typical errors: _by a van_; _by foot_; _it goes in lorry_ → _**by** lorry_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'How it travelled', 'Right choice?'], [
  ['my diploma from Aleppo', 'with a service driver, 5,000', 'Yes — two hours, and the garage telephoned me'],
  ['a fridge from the shop', 'by pick-up, 60,000', 'No — the shop delivers free over 500,000 and I did not ask'],
  ['money to my brother', 'with a cousin who was travelling', 'Yes, but I would not do it with a large sum'],
], [1.4, 1.6, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha sent her diploma from Aleppo with a service driver. It took two hours and cost five thousand. She says it was the right choice, because the garage telephoned her when it arrived."', 'The cheapest way a class has ever sent something is nearly always **with somebody who was going anyway**.']));
out.push(stage('5', 'Read'));
out.push(p('1 By lorry, registration 445621, driver F. Saeed.  2 Count the four items before signing.  3 A telephone call afterwards — damage must be written on the note before signing.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HAMDAN PRINTING — DELIVERY NOTE**  ·  **No. 0418-2**  ·  18 April.  **To:** Sham Trading Co., Mezzeh yard  ·  **Tel:** 011 612 4400 ext. 212.  **By:** pick-up (reg. 118394), driver M. Khalil  ·  **Leaves:** Wednesday 09.00  ·  **Expected:** Wednesday 09.40.  2,000 — invoice forms, white  ·  50 — folders, printed  ·  500 — business cards.  **3 items on this note. Please count them before you sign.**  Received by: ______  Signature: ______.  Anything damaged or missing must be written on this note before signing.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_by_ + transport, with vehicle and driver', '✓'],
  ['Number of items on its own line', '✓'],
  ['A leaving time **and** an expected time', '✓'],
  ['Damage rule says _before signing_', '✗ – the first draft said "report any damage"'],
], [3, 2]));
out.push(p('Sample feedback: "Everything is there. _Report any damage_ is too soft — say **write it on this note before you sign**."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Please report any damage._  →  After: _Anything damaged must be written on this note **before signing**._ (the words that decide a dispute three weeks later)'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['My grandmother\'s sewing machine came from Aleppo in three stages. First it went by lorry to the depot in Homs, because my uncle knew the driver. Then it waited a week. Then it came to Damascus by pick-up with a man who was taking furniture anyway, and from the street to the third floor it went on foot — four of us, forty minutes and one broken tile.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"four of us, forty minutes and one broken tile" — I could see the stairs._   ✓ _How long did the whole journey take?_   ? _Does the machine still work?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The journey with the most changes is usually the one that cost least: every change of transport is a saving and a risk.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['The water comes by tanker twice a week and goes to the roof by pump. The bread comes on foot, from the bakery on the corner. The post comes by motorbike. The electricity comes by cable, when it comes. News comes by telephone before it comes by television. Visitors come by service and walk the last street.']));

// ===================== 6.2 =====================
out.push(pb());
out.push(h2('6.2  How long does it take to Aleppo?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check both forms appear: _It\'s about ___ kilometres_ and _It takes ___ ._'));
out.push(p('**b**  _About 160 kilometres_ → **How far…?**  ·  _Two hours_ → **How long…?**  ·  _Twice a week_ → **How often…?**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a new driver)   **b**  1 About 350 kilometres.  2 Seven hours — and never in the dark.'));
out.push(p('**Language box – Practise (samples):**  1 How far is it to Homs?  2 How long does it take?  3 How long is the stop at the checkpoint?  4 How long does it take you?  5 How often do you go?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I\'ve done Suwayda, but never Tartous. How far is it?'],
  ['B', 'About two hundred and fifty on the motorway.'],
  ['A', 'And how long does it take?'],
  ['B', 'Three and a half hours if the road is good. Four and a half in summer, because of the traffic to the coast.'],
  ['A', 'And how long is the stop?'],
  ['B', 'That depends. Twenty minutes at the halfway café, longer on a Friday.'],
  ['A', 'So Tartous is more than twice as far as Suwayda.'],
  ['B', 'More than twice. Leave early, not after nine.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write distance, normal time and bad-day time, and note whether the condition was given. Typical errors: _how long is it to Homs?_ (meaning distance) → _how **far**_; _it takes two hours **to me**_ → _it takes **me** two hours_; _how long does it takes_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Journey', 'How far', 'How long', 'Advice'], [
  ['Damascus → my village in Deraa', '90 km', '1.5 h, 3 h on a Thursday', 'go before seven or after seven'],
  ['home → the hospital', '6 km', '20 min, 50 min at eight', 'walk the last part; parking is impossible'],
], [1.4, 1, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Damascus to my village is about ninety kilometres. It takes an hour and a half, or three hours if you go on a Thursday afternoon, because everybody travels then. The advice is to go before seven in the morning."', 'The best advice in a class is usually about **when**, not about the road.']));
out.push(stage('5', 'Read'));
out.push(p('1 Two hours longer (5 empty, 7 in winter).  2 Because the station at the halfway point is often closed in the afternoon.  3 Telephone first and think afterwards — nobody has ever been shouted at for telephoning too early.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**ROUTE SHEET — DAMASCUS to DERAA**   for a loaded pick-up.  **Distance:** about 100 km.  **Normal time:** 1 h 30.  **Bad day:** 3 h on a Thursday afternoon, when everybody travels.  **Leave:** before 07.00, because the first checkpoint is quick before eight.  **Fuel:** fill in Damascus, not on the road — the stations on this route take cash only and often have queues.  **Stops:** one stop at the big café after the junction, 15 minutes.  **On arrival:** telephone the shop before you unload. If anything changes, telephone first and think afterwards.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A distance **and** a time', '✓'],
  ['Normal time **and** bad-day time', '✓'],
  ['At least one rule with its reason', '✓ – fuel, and why'],
  ['What to do when something goes wrong', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A nervous new person telephones early only if the sheet says, in words, that they will not be blamed for it. _Telephone first and think afterwards_ does that; _inform the office of any delay_ does not.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['The longest journey I have made was Damascus to Qamishli in winter. It is about seven hundred kilometres and it should take ten hours. It took nineteen. The road was closed near Deir ez-Zor, we went round, and we waited four hours at a checkpoint in the dark with no food. Next time I would take bread and water for two days, not for one, and I would not travel in January.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"bread and water for two days, not for one" — the whole lesson in one line._   ✓ _How far was the diversion?_   ? _Did you sleep in the bus?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The longest journey is almost never the hardest one. The hardest is usually a short journey with a child, a heavy bag, or no information.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['How far is the market? About 1 km. How far is the hospital? 6 km. How far is the border? 60 km. How far is the nearest bakery? 200 metres. How far is your work? 11 km.  How long does it take to walk to the market? Fifteen minutes. … to get to work? Forty minutes. … to cook rice? Twenty minutes. … to fill the tank? An hour, with the queue. … to get a document stamped? Two visits.']));

// ===================== 6.3 =====================
out.push(pb());
out.push(h2('6.3  You mustn\'t park at the loading door'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Useful follow-up: which of their rules has a reason they can state, and which does not?'));
out.push(p('**b**  Rules: _You mustn\'t smoke here._ · _You must wear the jacket._  Advice: _You shouldn\'t carry it alone._ · _It\'s better to come early._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a driver from another company)   **b**  1 At the loading door — the forklift comes out every four minutes.  2 The yellow high-visibility jacket, on the hook inside the gate.'));
out.push(p('**Language box – Practise:**  1 must  2 mustn\'t  3 don\'t have to  4 must  5 mustn\'t'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Before you start — three rules. You mustn\'t put anything on the floor near the fryer.'],
  ['B', 'But that\'s where the boxes come in.'],
  ['A', 'That\'s where the hot oil goes if somebody turns. You put the boxes on the steel table, and we take them from there.'],
  ['B', 'Fine. And?'],
  ['A', 'You must wash your hands before you touch any food. The sink is by the door, not the one at the back.'],
  ['B', 'And the third?'],
  ['A', 'You mustn\'t leave the back door open. If you need air, open the window — the cats come in through the door.'],
  ['B', 'All right.'],
  ['A', 'And one thing that isn\'t a rule: tie your hair back. Nobody will tell you to, but everybody does.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three rules and one reason. The rule people forget first is the one with **no reason given**. Typical errors: _you mustn\'t help us_ when they mean _you don\'t have to_; _must to wear_; _he must wears_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Place', 'Rule', 'Reason'], [
  ['my office', 'you must sign the visitors\' book', 'the fire list is made from it'],
  ['my office', 'you mustn\'t prop the back door open', 'it is the only locked door at night'],
  ['my building', 'you don\'t have to take your shoes off, but everybody does', '—'],
], [1.2, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"At my office you must sign the visitors\' book, because the fire list is made from it. You mustn\'t prop the back door open. You don\'t have to take your shoes off, but most people do."', 'The rule nearly every workplace has: something about a **door** — closing it, locking it, not blocking it.']));
out.push(stage('5', 'Read'));
out.push(p('1 Wear a high-visibility jacket, and have the delivery note in hand before the goods come off.  2 On the left, next to the wall; the warehouse brings a trolley to the vehicle.  3 Help unload, and wait inside (there is tea in the small room and they will call you).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**VISITORS — PLEASE READ BEFORE YOU COME IN**   Al-Noor Clinic.  **1  You must sign the book at the desk.** The fire list is made from it, and in an emergency we count from that page.  **2  You mustn\'t use the stairs at the back.** They are the way out for stretchers. Use the main stairs or the lift; it is thirty seconds longer.  **3  You mustn\'t take photographs in the corridor.** Other people\'s families are there. If you need a photograph of a document, ask at the desk and we will do it for you.  You **don\'t have to** switch off your telephone, and you don\'t have to wait standing — there are chairs by the window.  Questions: the desk, or extension 4.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Every _mustn\'t_ has an _instead_', '✓'],
  ['Every rule has a reason', '✓'],
  ['A _don\'t have to_ list', '✓'],
  ['Somebody to ask', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Typical objections: _it\'s only for a minute_ · _nobody else does_ · _I\'m in a hurry_. A notice answers them with a number (_thirty seconds longer_) or a person (_ask at the desk_), never with _please comply_.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['In our building you mustn\'t hang washing on the front balcony. The reason was that the owner thought it looked bad from the street, forty years ago. Now six families live here and one small back balcony has to dry everything. I would change it: hang what you like, but take it in by evening. The real problem is not the washing; it is that nobody has asked about the rule since the owner died.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody has asked about the rule since the owner died" — that is most rules._   ✓ _What would happen if one family just did it?_   ? _Who decides the rules now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A rule whose reason nobody remembers should stay only if somebody can state what would go wrong without it. If nobody can, it is a habit wearing a rule\'s clothes.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Must: sign in · wear the badge · lock the cupboard · tell the office if you leave early · put the key back.  Mustn\'t: prop the door · take files home · park in the yellow bay · use the back stairs · smoke on the balcony.  Don\'t have to: wear a tie · answer the telephone after five · eat in the canteen.']));

// ===================== 6.4 =====================
out.push(pb());
out.push(h2('6.4  Why don\'t we send it on Wednesday?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check the forms: _Let\'s **start** · Why don\'t we **start**? · Shall we **start**?_ — and _How about **starting**?_'));
out.push(p('**b**  Samples: name the obstacle (_we can\'t — he opens on Wednesday_), or offer an alternative (_what about Tuesday evening?_). Both say no; neither uses the word.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the boxes arrive after the lorry leaves)   **b**  1 Sending the whole order on Wednesday.  2 Buying sixty boxes from Khalil in Homs, just this once, for about 4,000 SYP more — and telephoning Mr Tarabishi before ordering.'));
out.push(p('**Language box – Practise (samples):**  1 Let\'s split the order.  2 Why don\'t we ask Khalil?  3 Shall we telephone first?  4 How about sending it by service?  5 Sixty boxes won\'t fit in a service. Shall we buy them in Homs instead?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The oven has broken and two hundred people eat on Saturday.'],
  ['B', 'So we can\'t cook here.'],
  ['A', 'Why don\'t we use the neighbour\'s oven?'],
  ['B', 'It\'s too small — it does twelve trays, and we need ninety.'],
  ['A', 'Then let\'s hire one.'],
  ['B', 'Hiring takes a week. It won\'t come before Tuesday.'],
  ['A', 'You\'re right. Shall we cook at the restaurant at night, just this once, and pay the owner?'],
  ['B', 'Now that is an idea. Do that. And speak to him today, so he can tell his staff.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three suggestions and say why the first two failed — the reason should be a **fact** (too small, takes a week), never _no_. Typical errors: _how about send_ → _how about **sending**_; _let\'s to go_; refusing with no reason, which stops the scene dead.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The problem', 'Suggestions made', 'What we agreed'], [
  ['two of us have the same exam and the same shift', 'swap with Hala · ask for the early shift · split the shift in half', 'split the shift; one does 8–12, the other 12–4'],
  ['nobody can collect the parcel before Thursday', 'ask the neighbour · pay for redelivery · collect at the depot on Friday', 'the neighbour, with a written note'],
], [1.4, 2, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The problem was that two of us had the same exam and the same shift. We said swap with Hala, and ask for the early shift, but Hala is away and the early shift is full. In the end we agreed to split the shift."']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the plan has changed and the customer should hear it from Sham Trading, not discover it.  2 Paper and gloves by the company lorry in the morning; sixty boxes bought from Khalil, at the branch at 4 pm.  3 Sham Trading pays, and she says so because a change that costs the customer nothing should be said plainly — it is the cheapest goodwill there is.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Mrs Haddad, Congratulations again on the new flat. I am writing before you ask, because the plan has changed and you should hear it from us. **The problem:** the glass for the balcony door comes from Homs on Thursday, and our fitter is only free on Wednesday. **What we are doing:** we are fitting the two windows on Wednesday as planned, and bringing a second fitter on Saturday morning for the door. **What it costs you:** nothing — the second visit is ours. If Saturday morning does not suit you, telephone me today and we will find another day.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The problem is clear in two sentences', '✓'],
  ['The new plan has a day **and** a time', '✓'],
  ['It says who pays', '✓'],
  ['An escape, with a deadline', '✗ – "telephone today" but no hour'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The message people trust next time is the one that says **nothing — it is ours** without being asked. Customers remember who volunteered the cost.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Dear Aunt Suad, I am very sorry, but I can\'t come on Friday after all — my sister\'s results come out that day and she wants me with her. Why don\'t I come on Saturday instead, and stay the night? Or if Saturday is difficult, I can come the following Friday and bring the children. Tell me which is better for you; either is easy for me.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _Two real choices, and the reason is a family one — I wouldn\'t mind at all._   ✓ _Can you say what time on Saturday?_   ? _Will your sister come too?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The message that makes it easiest to say **no** is the one with two real alternatives and no pressure. People say yes to it more often, because saying no is cheap and so agreeing costs nothing.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['Let\'s take the early bus and sleep on the way.  Why don\'t we go the night before and stay with my cousin?  How about hiring a car between the five of us and leaving at six?']));

// ===================== 6.5 =====================
out.push(pb());
out.push(h2('6.5  We send the small van to save the fuel'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _We leave at five **because the road is empty** / **to miss the traffic**. · I came early **because I wanted a seat** / **to get a seat**._'));
out.push(p('**b**  **Why:** because the road is closed · because it is cheaper.  **What for:** to save fuel · to tell the customer.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the choice of vehicle and day)   **b**  1 Because it is only four boxes and the lorry drinks fuel; the van also does two more drops on the same trip.  2 To put the Hama pallets on the same load as Homs — one journey instead of two. (And the customer preferred Tuesday anyway.)'));
out.push(p('**Language box – Practise:**  1 to  2 because  3 to  4 for  5 because'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'You\'ve booked one big bus. Why not two small ones?'],
  ['B', 'Because one big bus is cheaper per child, and one driver watches everybody.'],
  ['A', 'Good. And you\'ve put the trip on Thursday, not Saturday.'],
  ['B', 'Yes — to get the museum free. It\'s free on Thursdays and it\'s quiet.'],
  ['A', 'And the parents agreed?'],
  ['B', 'I telephoned to ask first. Two said Thursday was better, because Saturday is the family day.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two reasons and label them. Typical errors: _for save fuel_ → _**to** save fuel_; _because cheaper_ → _because **it is** cheaper_; _for to ask_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['My decision', 'Because…', 'To…'], [
  ['I take the earlier service', 'because the later one is always full', 'to get a seat and read'],
  ['we buy bread twice a week, not daily', 'because the bakery is twenty minutes away', 'to save the walk on work days'],
  ['I pay the electricity in person', 'because the online receipt never arrives', 'to have a stamped paper'],
], [1.4, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi takes the earlier service, because the later one is always full, and to get a seat so he can read."', 'A decision where the two reasons pull apart: _I buy the cheaper phone because I have no money, but I wanted the other one to last five years._ Those are worth discussing — they are where real decisions live.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because it is four boxes and the lorry uses three times the fuel — and the van does three drops on one trip.  2 To put them on the same load as Homs (one journey instead of two), and because Tuesday suits the customer better.  3 Because in six months the thing nobody can explain is the thing that did **not** happen — and if the customer complains, the reason is already written.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**DECISION SHEET — the shop, week of 18 April**   Rasha Hamdan.  **Bread order cut from 60 to 45 a day.** Because we threw away about fifteen every evening last week. To stop paying for bread the street does not buy.  **Opening an hour later on Fridays.** To give the staff the morning. I asked the five regular morning customers first; four said they come after eleven anyway.  **Not done: a second fridge.** We decided against it, because the first one is only three-quarters full and the electricity is off four hours a day. If the summer order grows, this is why we will think again in June.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one _because_ and one _to_', '✓'],
  ['_to_ + verb, never _for_ + verb', '✓'],
  ['Something you did to check', '✓ – asked five customers'],
  ['A "not done" line', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A "not done" line stops an argument when it names **the condition that would change the answer**: _if the summer order grows, we will think again in June_. Without that, it reads as a refusal rather than a decision.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I left my first job after four months and I still explain it. The reason I give is that the pay was low. The real reason is that I was the only woman in the office and nobody spoke to me for six weeks. The reason I give is true, and it is easier for everybody, and I have never once been asked a second question about it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"it is easier for everybody" — honest about not being honest._   ✓ _Can you say what you would want a manager to do?_   ? _Would you give the real reason now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The real reason is almost always **simpler** than the one people give — and usually about a person rather than a number.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Because: I came early because the service was empty · I stayed late because the figures were wrong · I telephoned because she had not answered the message · I bought two because the price rises in May · I walked because the road was closed.  To: I came early to finish the list · I went to the bank to change notes · I wrote it down to remember it · I telephoned to confirm the time · I left at four to collect my sister.']));

// ===================== 6.6 =====================
out.push(pb());
out.push(h2('6.6  It\'s arriving at four, not at two'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The accepted reasons are nearly always the ones **outside** the company (a closed road, a checkpoint, weather) **and** given with a new time. _The driver didn\'t come_ is true and useless.'));
out.push(p('**b**  Best → worst: **The road is closed at Nasiriyah; it\'s arriving at four instead of two.** → _I\'m sorry, there\'s a delay._ → _It\'s late._ → _The driver didn\'t come._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a closed road at Nasiriyah)   **b**  1 Four o\'clock, instead of two.  2 To unload the boxes at the customer\'s brother\'s shop and bring the rest the next morning — and to telephone when the driver leaves the diversion, and again at four whether he has arrived or not.'));
out.push(p('**Language box – Practise:**  **1** I\'m telephoning about today\'s delivery. **2** I\'m sorry. **3** The road is closed and the lorry is going round. **4** It\'s arriving at four, not at two. **5** If that\'s too late, we can…'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mr Nasser, good afternoon. It\'s Samir from Al-Sharq. I\'m telephoning about your machine.'],
  ['B', 'It was Tuesday. It\'s Tuesday now.'],
  ['A', 'I know, and I\'m sorry. The part came from the supplier in the wrong size and we sent it back this morning.'],
  ['B', 'And when is it ready?'],
  ['A', 'Thursday afternoon, not Tuesday. The supplier confirmed the new part an hour ago.'],
  ['B', 'Thursday. I have work waiting.'],
  ['A', 'If Thursday is too late, we can lend you the old machine until then, free. I can bring it this evening.'],
  ['B', 'Bring it. And telephone me on Thursday morning.'],
  ['A', 'I will — and I\'ll telephone on Thursday morning whether the part has come or not.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick the six parts. The two most often missing are **how you know** (_the supplier confirmed an hour ago_) and the **call you promise even with no news**. Typical errors: _it will arrive at four_ for a fixed arrangement; apologising after the explanation instead of before.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I called', 'The delay', 'New time', 'Alternative offered'], [
  ['Hala', 'the report is not signed — Mr Ayoub is at the bank', 'four o\'clock today', 'the unsigned copy now, signed one tomorrow'],
  ['my mother', 'the service broke down at Qudsaya', 'an hour later', 'eat without me, I\'ll take the food cold'],
  ['the customer', 'the fitter is ill', 'Saturday morning', 'another fitter on Thursday, if she will accept him'],
], [1, 1.6, 1, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I telephoned Hala about the report. I said it was arriving at four, not at two, because Mr Ayoub is at the bank. I offered her the unsigned copy now, and she took it."', 'The explanation a class will not accept is the one with **no new time** — people forgive the delay and not the uncertainty.']));
out.push(stage('5', 'Read'));
out.push(p('1 So that the customer\'s staff have it too — a telephone call reaches one person.  2 One when the driver leaves the old road, and one at 4 pm whether he has arrived or not.  3 By 3 pm.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Machine repair 118 — new date Thursday pm.  Dear Mr Nasser, Following our call, in writing so that your workshop has it too:  **What happened:** the part came from the supplier in the wrong size and went back this morning.  **New date: Thursday afternoon** (it was Tuesday). The supplier confirmed the replacement at 10.40 today.  **What we are doing:** I am bringing the old machine to you this evening, free, until yours is ready. I will also telephone you on Thursday morning whether the part has arrived or not.  **If Thursday does not work:** we can fit a second-hand part tomorrow and change it later. Tell me by this evening.  I am sorry for the lost days. Samir']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['New time in the subject line', '✓'],
  ['New time against the old one', '✓'],
  ['A promised call even with no news', '✓'],
  ['Alternative with a deadline', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('On a bad day people open the subject line that contains a **time**. _Delivery update_ is opened last; _new time 4 pm_ is opened first.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['I waited five hours at a government office for a paper that was ready in the first twenty minutes. Nobody said anything. At two o\'clock a man came out and read six names, and mine was the second. The one sentence that would have fixed it: "Your paper is signed; we are waiting for the stamp, and the stamp comes at two." Five hours of not knowing cost them nothing and cost me a day.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"Five hours of not knowing cost them nothing" — that is exactly it._   ✓ _What did they finally say when you got it?_   ? _Did anybody ask?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most classes the "one sentence" is the same sentence in different words: **tell me when, and tell me how you know**. That is the whole cycle.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Dear Ms Mansour, Following your visit: your paper was signed this morning. **It will be stamped at 2 pm today** (we told you 10 am). The stamp officer returns at two; the office confirmed at 11.15. We will call your number when it is stamped. If you cannot wait, come tomorrow between 9 and 11 and ask at desk 3 — your file is there under your name.']));

// ===================== 6.7 =====================
out.push(pb());
out.push(h2('6.7  Review & Mediate: the delivery note and the road signs'));
out.push(stage('1', 'Get ready – Unit 6 quiz'));
out.push(p('**1** **by** lorry · **on** foot · **by** service.  **2** _How far is it?_ · _How long does it take?_  **3** _You mustn\'t_ = it is forbidden; _you don\'t have to_ = it is not necessary, but you may.  **4** _Let\'s send it on Wednesday. · Why don\'t we send it on Wednesday? · Shall we send it on Wednesday?_ (also _How about sending it…?_)  **5** **to** save fuel.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (what he must do at the other end)   **b**  1 Have the delivery note in his hand, and count the four items with the customer.  2 Give away the pink copy.'));
out.push(p('**Language box – Practise (sample):**  _If anything is damaged or missing, write it on the note before he signs. If he says he will telephone the office later, that is no good — write it yourself and ask him to sign next to it._'));
out.push(stage('3', 'Practise – sample mediation of document 1'));
out.push(sample(null, ['"It\'s the delivery note for the Homs load. I\'ll tell you only what you do with it. Before anything comes off the lorry, you have it in your hand and you count the items with the customer. If a box is damaged or missing, write it on the note **before** he signs — a telephone call afterwards is no good. Then he signs. White stays with him, yellow comes back to me, pink you keep in the cab for a month. Never give away the pink one — it is your proof that you delivered."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the actions **in order** and should be able to do the job. A learner who says _discrepancies_, _annotated_ or _consignee_ has not mediated — those are the words being translated away. Send them back with: _tell him what he does, in the order he does it._'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The actions, in order', 'What I told them never to do'], [
  ['Fadi', 'jacket on at the gate → see the supervisor → park left by the wall → note in hand → count → sign', 'never walk across the yellow square'],
  ['Hala', 'take the yellow copy → file it the same day → tell Nadia the number', 'never file a note with no signature'],
], [1, 2, 1.6]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a site notice for drivers. The first thing you do is put the jacket on at the gate. Then you find the supervisor before you unload anything. If you need to cross the yard, you go round by the wall before you step anywhere near the yellow square. Never walk through it — the forklift driver cannot see you behind a pallet."']));
out.push(note('Sixth unit of the book, so the ordinal is "sixth". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', 'a diversion sends you another way'],
  ['2', 'A', '"mandatory" = you must'],
  ['3', 'B', 'carrier = the driver; retain = keep'],
  ['4', 'B', 'before signing, in writing'],
  ['5', 'A', '4 pm instead of 2 pm is two hours later'],
  ['6', 'B', '"before unloading" = see him first'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Fadi, The load leaves at seven o\'clock on Tuesday, by lorry. Please have the delivery note in your hand before anything comes off, and count the items with the customer. Don\'t give away the pink copy — you keep that one in the cab for a month. Thank you. Nour  _(49 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  Leaves 7 am Tuesday, by lorry', '✓'],
  ['2  Note in hand before unloading', '✓'],
  ['3  Don\'t give away the pink copy', '✓'],
  ['25 words or more', '✓ – 49 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈45 words)'));
out.push(sample(null, ['Hi Samir, Come by service from the big garage — it takes about two hours and they leave every half hour. I\'ll meet you at the bakery on the corner of our street, not at the garage; it\'s easier to find. Don\'t take the night one: it arrives at four in the morning and nothing is open. See you Friday!']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thanks! Is the service from the big garage or the small one behind the market? I won\'t take the night bus. I\'ll message you when I leave.']));
out.push(stage('✓', 'Unit 6 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'b', 'a', 'b', 'a', 'b', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Old time: **11.00** · New time: **1.00** · Reason: **a diversion at Nasiriyah; the lorry is going round by the old road** · How she knows: **the driver telephoned fifteen minutes ago** · Alternative: **leave it at the customer\'s brother\'s and bring the rest tomorrow morning**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Mr Tarabishi, Your order leaves at seven on Tuesday morning by lorry and arrives at about ten. Please count the four items with the driver before you sign the note. If anything is damaged, write it on the note before signing. Nour  _(42 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** when it leaves and how it travels · when it arrives · one thing the person must do — one mark each.',
  '**Language (2):** _by_ + transport; present continuous or present simple used consistently for the arrangement.',
  '**Organisation and length (2):** one idea per sentence; 25 words or more.',
  '⚠ Mark whether the reader would **do the right thing at the door**. A message that is correct and leaves the customer signing without counting has failed the task it was set.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 6', [
  '**1  _mustn\'t_ for _don\'t have to_.** The two are opposites and learners treat them as the same negative. Teach them from the **consequence**: what happens if I do it? Nothing (don\'t have to) or trouble (mustn\'t). Never teach them in the same minute as _must_.',
  '**2  _for_ + verb.** _For save fuel._ Arabic and English differ here and the error is almost universal at A2. The repair is a reflex, not a rule: **what for? → to + verb**. Drill it for thirty seconds at the start of every lesson in this unit.',
  '**3  The delay with no new time.** This is not a grammar fault and it is the one that costs money. In 6.6, refuse to accept a performance that has an apology, an explanation and no number. A customer forgives a late lorry; nobody forgives not knowing.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 6 · Answer Key');
