// Proactive Business English A2 · Syria Edition · Book 1 · Unit 11 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 11  Business Travel'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 11.1 =====================
out.push(h2('11.1  I\'m going to visit the Homs branch'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The third one — the thing they have been putting off — is the useful one, and most learners will write it last.'));
out.push(p('**b**  **Plans:** _I\'m going to telephone him tomorrow._ · _We\'re going to open a second branch._  **Decisions made now:** _I\'ll get it._ · _I\'ll help you._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (two nights)   **b**  1 Three shops in the old city in the morning, two new ones on the Idlib road in the afternoon.  2 See the Jabr brothers — they owe money since February, and that is a call from Nadia, not a visit from him.'));
out.push(p('**Language box – Practise:**  1 \'m going to leave  2 \'s going to see  3 aren\'t going to stay  4 are … going to do  5 aren\'t going to visit'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Palmyra. I need the plan before I reserve the bus.'],
  ['B', 'I\'m going to leave Friday at six and get there about eleven.'],
  ['A', 'Two nights or three?'],
  ['B', 'Two. Friday we\'re going to settle in and do nothing. Saturday we\'re going to be at the site at seven, and we\'re going to be out of it by eleven.'],
  ['A', 'Eleven? That\'s short.'],
  ['B', 'Eleven is when it stops being short and starts being dangerous. If anybody is tired I\'m going to take them back early.'],
  ['A', 'What aren\'t you going to do?'],
  ['B', 'I\'m not going to do the museum in the afternoon. It\'s forty minutes of looking and three hours of heat — that\'s a different trip, not a longer day.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the "not going to" and the reason. Typical errors: _I going to_; _I will leave on Sunday_ for a plan made last week; _we\'re going to don\'t do the museum_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Going to…', 'Not going to…', 'Why not'], [
  ['Rasha', 'repaint the shop front, change the supplier for bread', 'open on Fridays', 'the one quiet day she has'],
  ['Fadi', 'take the lorry test, move nearer the depot', 'buy a car this year', 'the money is for the test'],
  ['Samir', 'finish the shopfront, take a week in Latakia', 'take the second school job', 'two jobs is how his brother\'s marriage ended'],
], [1, 1.5, 1.3, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Samir is going to finish the shopfront and take a week in Latakia. He isn\'t going to take the second school job, because two jobs is how his brother\'s marriage ended."', 'A good "not going to" **protects the rest of the plan**: it is the thing that would have eaten the time the other plans need.']));
out.push(stage('5', 'Read'));
out.push(p('1 Until 20.00.  2 Drop the second new shop and telephone instead — they have already been told he may.  3 Everything except food; food is the per diem. To Nadia by Friday 26.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**ITINERARY — Hala Mourad, Homs, Tuesday 30 May**  **Tuesday.** Leave Pullman station 07.30 (ticket bought Monday). Arrive 10.00. **10.30** Khalil & Sons, the market shop — ask for Mr Mazen, not the son. **13.00** lunch; the per diem covers it. **14.00** the two new shops on the Hama road. If the first visit runs past twelve, drop the second new shop and telephone — I have told them you may.  **Coming back.** The 13.00 if you finish early, otherwise the 17.00. Both are fine; nobody is waiting for you here.  **Not on this trip:** the Jabr account. Nadia is telephoning them herself.  **If anything changes:** telephone me, extension 212. One person, not three.  **Receipts:** everything except food, to Nadia by Friday.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Times, in order, on every day', '✓'],
  ['An _if_, decided in advance', '✓'],
  ['A _not on this trip_ line', '✓'],
  ['**One** person to telephone', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "I could travel on this. _Nobody is waiting for you here_ is the kindest line in it — she will not rush the last visit."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('An _if_ is followed on the road when it names **what to drop**, not what to decide. _If it runs late, use your judgement_ is not an _if_.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['Next spring I\'m going to take my mother to see her sister in Latakia. We\'re going to go by bus, early, and stay four nights — three is not enough for two women who have not sat together since 2019. I\'m not going to plan anything else. If it rains the whole time, they will sit in the kitchen, which is what they would do anyway.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"which is what they would do anyway" — the best travel plan I have read._   ✓ _What are you not going to do?_   ? _Will you stay too, or come back?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The plan with the most room in it is nearly always the one with the fewest items. Ask the class whether that is a plan or a lack of one; it is worth arguing about.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['Going to: finish the stock card · telephone the two customers I have been avoiding · take Thursday afternoon off · fix the shelf · write to my cousin.  Not going to: start the summer order before the price list comes · agree to the Saturday shift · buy anything new for the shop this month.']));

// ===================== 11.2 =====================
out.push(pb());
out.push(h2('11.2  A single room for two nights'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  The dates · the number of nights · single or double · the name, spelled · who is paying · what time you will arrive. Often also: a quiet room, and how you want the invoice.'));
out.push(p('**b**  **a** single room · **an** hour · **an** early check-in · **a** receipt · **an** extra bed'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a quiet room — she has to ask for it)   **b**  1 Two nights: Sunday 21 and Monday 22 May.  2 Can they hold the room until eight; and a quiet room, not on the street side. (And at the end, for the confirmation by message.)'));
out.push(p('**Language box – Practise (sample for 1):**  _I\'d like to reserve a double room for three nights, please — the fourteenth, fifteenth and sixteenth of June. In the name of Khalil, K-H-A-L-I-L. Is breakfast included, and can you send me the confirmation by message?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Hotel Al-Bahr, good afternoon.'],
  ['A', 'Good afternoon. I\'d like to reserve a single room for two nights, please — Thursday the eighth and Friday the ninth.'],
  ['B', 'Two nights. In which name?'],
  ['A', 'Rasha Hamdan, H-A-M-D-A-N. It\'s a company reservation — Hamdan Stores.'],
  ['B', 'We have a single at forty thousand a night.'],
  ['A', 'Is breakfast included?'],
  ['B', 'Breakfast is eight thousand extra.'],
  ['A', 'Then without breakfast, thank you. Two things. I arrive late — can you hold the room until six? And a room away from the sea side, if you have one; I hear it\'s noisy in summer.'],
  ['B', 'Until six, and I can give you the back. The Wi-Fi is only in the lobby, I should say.'],
  ['A', 'Good to know. So: Rasha Hamdan, two nights, the eighth and ninth, single, forty thousand, no breakfast, held until six, back of the building. Could you send me that by message?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what was **not** included and whether the caller was told or had to ask. In both role cards the hotel tells only when asked, which is realistic. Typical errors: _a hour_; _I want a room_; naming "two nights from Thursday" instead of the dates.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Dates / times', 'The two extras I asked for', 'In writing?'], [
  ['a hotel room', '8–9 June', 'held until six; away from the sea side', 'yes, by message'],
  ['a table for eight', 'Friday 20.30', 'not near the door; a high chair', 'no — they refused'],
  ['a car service', 'Tuesday morning', 'a price before starting; the old parts kept', 'yes, written on the job sheet'],
], [1, 1.2, 1.8, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I reserved a car service for Tuesday morning. I asked for a price before they start and for the old parts to be kept. They wrote both on the job sheet."', 'The best extra a class produces is usually _keep the old parts_ or _tell me before you do anything over X_ — both are about what happens **after** the agreement, which is where surprises live.']));
out.push(stage('5', 'Read'));
out.push(p('1 Breakfast and Wi-Fi.  2 Because he needs the paper for the company accounts, and an emailed invoice to the hotel\'s own list does not reach Nadia.  3 Tell her **this week**, rather than on the day.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Reservation — Hamdan, 8–9 June (2 nights), confirmation.  Dear colleagues, Thank you for the room. In writing, so that we both have the same page:  **Guest:** Rasha Hamdan  **Company:** Hamdan Stores, Damascus.  **Nights:** Thursday 8 and Friday 9 June — **two nights**, checking out Saturday 10 in the morning.  **Room:** single, 40,000 SYP a night, **without breakfast**. Back of the building, away from the sea side. Wi-Fi in the lobby only, as you said.  **Arrival:** late — please hold the room until 18.00.  **Payment:** the company pays; invoice to Hamdan Stores, on paper at check-out.  If anything here is different from your record, please tell me before Tuesday rather than on the day.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dates, nights **and** check-out day', '✓'],
  ['What is included, named', '✓ – including what is not'],
  ['Who pays and how the invoice is given', '✓'],
  ['A deadline for corrections', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A subject line that can be filed without opening carries the **name, the dates and the word "confirmation"**. Anything beginning _Re:_ cannot.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['We stayed in a guest house near Safita that cost almost nothing and included everything, including a grandmother who fed us twice as much as we wanted. Nothing was written down anywhere. The one thing that was not included was hot water after nine, and nobody mentioned it because to them it was obvious. Next time I would ask what time the water goes off, which I would never have thought to ask before.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"to them it was obvious" — that is what is never written down._   ✓ _What would you ask next time?_   ? _Would you go back?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The questions nobody would have thought of are the whole point of the stage. Copy the class list and keep it: it is better than any checklist in a book.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['1 What is **not** included in that price?  2 Until what time will you hold it?  3 Can I have that in writing?  4 Who do I ask for when I arrive?  5 What time does the hot water / the heating / the kitchen stop?']));

// ===================== 11.3 =====================
out.push(pb());
out.push(h2('11.3  It\'s very cold in Aleppo in January'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Check the subject: **it**, every time.'));
out.push(p('**b**  Aleppo in January → **cold, sometimes snow** · Deir ez-Zor in July → **very hot, 45°** · Latakia in November → **wet and grey** · Damascus in April → **dry and pleasant**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the weather)   **b**  1 Rain all day, two or three degrees at night, and fog on that road when it is cold and wet.  2 He leaves at five instead of six, and takes the big coat.'));
out.push(p('**Language box – Practise (samples):**  1 It\'s going to rain all day — I\'ll take the covered load, not the open one.  2 It\'s going to be forty-five degrees — we\'ll start at five and stop at eleven.  3 It\'s going to be foggy until nine — I\'m going to leave at five and be past Hama before it.  4 It\'s going to snow on the Aleppo road — we\'re going to send it on Thursday instead.  5 It\'s going to be windy on the coast — the tent sides come down.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I\'ve looked at the weather for Saturday. It\'s going to be thirty-eight degrees.'],
  ['B', 'Heat we can manage. There is shade.'],
  ['A', 'It isn\'t only the heat. It\'s going to be windy in the evening — thirty or forty kilometres an hour from about six.'],
  ['B', 'The wind is the problem, not the heat.'],
  ['A', 'That\'s what I thought.'],
  ['B', 'Then we\'re going to move the tables under the trees, not into the open. The trees break the wind and give shade all afternoon.'],
  ['A', 'And the lights?'],
  ['B', 'The lights come down. A string of lights in that wind is a fire, and nobody looks at the lights anyway.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write which part of the weather was the real problem; in both role cards it is the **second** thing mentioned, not the obvious one. Typical errors: _is very cold today_ with no subject; _it\'s rain_; _it will be rain_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'The weather', 'What it stops', 'What they change'], [
  ['Rasha', 'the August heat', 'the afternoon trade entirely', 'opens 7–12 and 5–9 in summer'],
  ['Fadi', 'fog on the mountain road', 'any early start in winter', 'leaves at nine, not six, from November'],
  ['Samir', 'rain', 'fitting glass outside', 'does the workshop jobs on wet days and keeps a list of them'],
], [1, 1.2, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"When it rains, Samir can\'t fit glass outside. He keeps a list of workshop jobs and does those instead, so a wet day is not a lost day."', 'The month most classes name is **August**, not January — but the January answers are more interesting, because cold stops specific things and heat stops everything.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the fog lifts about nine; leaving at five means two hours in fog instead of four, on an empty road.  2 So that Ms Shamsi waits in her office instead of going out — _will be late_ would send her out.  3 Stop, telephone from wherever he stops, and let Nour move the 14.30 to 16.00.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WEATHER — Saturday 10 June, the wedding.**  **What is forecast.** Thirty-eight degrees in the afternoon. Wind from about six in the evening, thirty to forty kilometres an hour.  **What that changes.** The tables move from the open ground to under the trees. The lights come down. The food comes out at seven, not six — in that heat nothing stands for an hour.  **What it does not change.** The time. We start at six as invited. I have told the families it will be hot, not that it may be cancelled, because somebody will repeat whatever I say and by Thursday it will be a cancellation.  **Take:** water in the car, and the second tablecloth — the first one will go in the wind whatever we do.  **If the wind is worse than forecast:** everything comes inside and we eat in two rooms. Do not try to hold the tent down with people. Tell me and we move.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Numbers and times', '✓'],
  ['What changes **and** what does not', '✓'],
  ['What to take', '✓'],
  ['Permission to stop, plainly', '✓ – "do not hold the tent down with people"'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The sections that make somebody actually stop are the ones that name **the thing people do instead of stopping**: driving on in fog, holding a tent down, finishing the last delivery. Name it and forbid it.'));
out.push(stage('7', 'Write freely – sample (≈65 words)'));
out.push(sample(null, ['In January it is cold and wet and everything is grey, and the electricity is worst then, so people go to bed early. February is the same but shorter. April is the best month and everybody knows it. In July and August nothing happens between eleven and five; the city empties and then fills again at seven and stays awake until two. October is the second best month and nobody says so.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"October is the second best month and nobody says so."_   ✓ _What do people do in August between eleven and five?_   ? _Is the electricity really worse in winter?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The useful texts describe **what the weather does to people**, not the weather. A visitor can read a forecast; they cannot read that the city empties at eleven.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['This summer I\'m going to start at six instead of eight. I\'m going to do the deliveries before eleven. I\'m going to close the shutters at ten, not at noon. I\'m not going to plan anything for the afternoon. I\'m going to buy a second fan for the back room. I\'m going to keep water in the car. I\'m going to stop promising Thursday afternoons. And I\'m going to take the first week of August off, which I say every year.']));

// ===================== 11.4 =====================
out.push(pb());
out.push(h2('11.4  Is breakfast included?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _Is breakfast included? · Is there Wi-Fi in the room? · Is parking included? · Is there hot water all day? · Is there a lift?_'));
out.push(p('**b**  _What\'s included?_ gets more **in theory** and a shorter answer in practice — people list two things and stop. _Is X included?_ asked five times gets five real answers. Ask the open one **and then** the specific ones.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (at the front desk)   **b**  1 Parking — the hotel car park is full until Tuesday.  2 Park in the street in front of the hotel, under the camera, because the paid car park\'s key-holder is not there before six.'));
out.push(p('**Language box – Practise (samples):**  1 Is there Wi-Fi in the room, or only in the lobby?  2 Is breakfast included, or is it extra?  3 Is parking included, or is there a charge?  4 Is there hot water all day, or only morning and evening?  5 Do you give a company invoice, or only a receipt?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Flat 6, third floor. Here are the keys.'],
  ['A', 'Thank you. A few questions. Is water included?'],
  ['B', 'Water is included.'],
  ['A', 'Is the electricity included, or do I pay it?'],
  ['B', 'You pay the electricity, and the gas.'],
  ['A', 'Is there internet, or do I arrange my own?'],
  ['B', 'Your own.'],
  ['A', 'Is the water on all day?'],
  ['B', 'All day, but the pump is off between one and four.'],
  ['A', 'That is an honest answer. Does the cleaner come every week?'],
  ['B', 'Once a week, Mondays. But she does the stairs, not inside the flat — people think it is both.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the "yes, but" and whether a silence was left for it. The useful information nearly always comes **after** the answer, and only if nobody fills the gap. Typical errors: _Is included the breakfast?_; _It has Wi-Fi?_ with no auxiliary; a vague _yes_ accepted without the _or_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What they pay for', 'What is included', 'What they thought was included'], [
  ['the flat', 'water, the stairs cleaned', 'the flat cleaned — it is only the stairs'],
  ['the internet package', '50 GB', 'the router — it was 85,000 extra'],
  ['the school fees', 'books, one trip', 'the uniform and the second trip'],
], [1.3, 1.5, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi pays for an internet package. Fifty gigabytes is included, but the router isn\'t — he only found out when the bill came with eighty-five thousand on it."', 'The thing most often not included is nearly always **the thing that makes the rest work**: the router, the fitting, the delivery, the installation.']));
out.push(stage('5', 'Read'));
out.push(p('1 In the street in front, under the camera — because the paid car park\'s key-holder is not there before six and he leaves early.  2 Ask for a receipt **at the time**: that hotel will not give a company invoice, so he pays and claims.  3 Because the things that are not included are learned once and forgotten by the next person — and a page that stops being updated starts going out of date.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SUPPLIERS WE USE — what is actually included** · kept by Rasha, updated after every order.  **Farouk Foods** — delivery ✓ over 500,000. Unloading ✗ — the driver stays in the cab; have somebody ready or it sits in the street. Invoice ✓, on paper, if you ask **at the time**. Good for big regular orders.  **Al-Sham Dairy** — delivery ✓, daily. Returns ✓ on unopened boxes, **but only within 24 hours** — after that it is yours. Cold chain: they are good in winter and I would not trust August. Good for everything except August.  **Jabr Paper** — delivery ✗ (we collect). Cheapest by a long way. **They will not take a telephone order** — somebody has to go. Good when we are passing anyway.  _Add to this page after every order, even when nothing went wrong._']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Ticks and crosses for the basics', '✓'],
  ['Every cross says what to do instead', '✓'],
  ['At least one "yes, but"', '✓ – the 24 hours'],
  ['What each one is good for', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The detail nobody would discover for a year is usually about **timing**: the 24 hours, the key-holder at six, the pump between one and four.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['The washing machine was nine hundred thousand and the price was not the price. Delivery was forty, carrying it up three floors was another forty because the lift was broken, and fitting it was sixty because the old tap did not match. Nine hundred became a million and forty. Now I ask one question before I buy anything big: what else will I pay before it works?']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"what else will I pay before it works?" — I am writing that down._   ✓ _What would you ask now?_   ? _Did they tell you about the tap, or did you find out?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Build the class list and copy it. _What else will I pay before it works?_ belongs at the top.'));
out.push(stage('HW', 'Homework – sample (≈25 words)'));
out.push(sample(null, ['Not included in my electricity bill: the meter rental, the standing charge, and anything about the shared stair light, which comes separately and which nobody in the building can explain.']));

// ===================== 11.5 =====================
out.push(pb());
out.push(h2('11.5  You should see the old city'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Ask for the **why** on each one, and for a time of day.'));
out.push(p('**b**  The second. The first is a guidebook; the second is a friend — it tells them **when** and **why then**, which is the part they cannot get anywhere else.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (one evening)   **b**  1 Walking in the old city at about six, starting at Bab Antakya.  2 Try to do the citadel as well — it deserves a morning.'));
out.push(p('**Language box – Practise (samples):**  1 You should go to the market early, about seven, when they are setting out and nobody is pushing.  2 You should eat at the place with no sign on the corner; the one with pictures of the food is for people leaving tomorrow.  3 You should walk along the river in the evening, not at midday — there is no shade at all.  4 It\'s worth getting up for the view at six; by nine the air is white and you see nothing.  5 You should buy the olive oil, not the sweets — the sweets are everywhere and that oil is from one village.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'A customer is coming from Aleppo. He has one evening and no car. What should he do?'],
  ['B', 'One evening. Then I\'d do one thing properly, not three badly.'],
  ['A', 'Which one thing?'],
  ['B', 'He should walk in Souq al-Hamidiyeh at about half past five — not at three, it\'s airless, and not at eight, the shutters are coming down. Go in from the Citadel end and come out at the Umayyad. The walking is the thing.'],
  ['A', 'And to eat?'],
  ['B', 'He should eat in one of the small places behind the souq, where there is no menu at all and they tell you what there is. Anything with photographs of the food, he should walk past.'],
  ['A', 'That is a rule I will remember.'],
  ['B', 'And one thing he shouldn\'t do: he shouldn\'t try to add the museum. It closes at four anyway, and he would spend the walk looking at his watch.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the time and the reason, then the thing not to do. A recommendation with no time has not done the task. Typical errors: _you should to go_; _it\'s worth to see_; a list of five places, which is the fault the cycle exists to cure.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Name', 'Their town', 'The one thing, with a time', 'Not to do'], [
  ['Rasha', 'Damascus', 'the souq at half past five, in from the Citadel end', 'add the museum'],
  ['Fadi', 'Jaramana', 'the Friday market at seven, before it fills', 'go on a Saturday'],
  ['Samir', 'Safita', 'the tower at six, walk up the back way', 'drive up; you see nothing from a car'],
], [1, 1, 2, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"In Safita you should walk up to the tower at about six, and go the back way on foot. You shouldn\'t drive up — you see nothing from a car and the walk is the whole thing."']));
out.push(stage('5', 'Read'));
out.push(p('1 It deserves a whole morning and is not worth forty minutes with one eye on the time — and coming back is not a bad thing.  2 Buy one thing, not six: what you buy in a hurry you give away; what you spend twenty minutes choosing you keep for thirty years.  3 Not for safety — so that somebody at home can picture you.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**IF YOU HAVE ONE EVENING IN DAMASCUS** · written by somebody who has lived here all her life and still walks it.  **Do one thing.** One evening is one thing. Three is a list you will not remember by Tuesday.  **The one thing: walk Souq al-Hamidiyeh, at about half past five.** Not three — it is airless and half-shuttered. Not eight — the shutters are coming down and the light has gone. Go in at the Citadel end and come out at the Umayyad, slowly. There is nothing to arrive at, and that is the point.  **Eat behind the souq**, in a place with no menu, where they tell you what there is. Anywhere with photographs of the food is for people who are leaving tomorrow.  **What not to do:** don\'t add the museum. It shuts at four, and you would walk the souq looking at your watch. Come back for it.  **And:** wear shoes you have walked in, take water, and buy the ice cream even though everybody tells you to.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A principle, not only a list', '✓'],
  ['A time, with why not earlier and later', '✓'],
  ['One thing not to do, with its reason', '✓'],
  ['Something only a local would know', '✓ – the two ends of the souq'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The sentence that decides a vote is almost never the place. It is the **time and the why**: _not at three, it is airless_.'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I would send anybody to Maaloula, and I would tell them two things first. Go on a weekday, because on Friday the road is a queue and the quiet is the whole reason to go. And speak to somebody — anybody, the woman selling candles will do. Half of that place is in what people tell you, and if you only look at it you have seen a hillside.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"if you only look at it you have seen a hillside."_   ✓ _What time of year?_   ? _Is it hard to get there without a car?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Specific is not always useful: a recommendation can be so precise that it only works on the writer\'s own Tuesday. The best ones give a **principle plus one specific** — _go on a weekday, and speak to somebody._'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['With three days the places barely change — the souq, the old city, one trip out. **The advice changes.** With one evening I say do one thing; with three days I say leave one day with nothing in it, because the thing you will remember is not on any list and it needs an empty afternoon to happen in.']));

// ===================== 11.6 =====================
out.push(pb());
out.push(h2('11.6  The bus leaves at seven'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  **leaves** (timetable) · **\'m meeting** (my own arrangement) · **\'s going to rain** (a forecast).'));
out.push(p('**b**  _oh six forty-five_ · _thirteen twenty_ · _seventeen oh five_ · _twenty-two thirty_ · _double oh fifteen_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the 07.30)   **b**  1 Two and a half hours — it arrives at ten.  2 The 06.00 leaves before the garage opens and he cannot leave the keys.'));
out.push(p('**Language box – Practise (sample for 1):**  _It leaves at six and arrives at a quarter past eight. It takes two and a quarter hours. It\'s direct — it doesn\'t stop._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I\'m going on Thursday. Is there a train in the morning?'],
  ['B', 'There are two. The first leaves at eight and arrives at half past eleven.'],
  ['A', 'Eight is too early — I can\'t get there before half past seven.'],
  ['B', 'Then the second. It leaves at a quarter past nine and takes four and a half hours — it arrives at a quarter to two.'],
  ['A', 'Four and a half? The first one takes three and a half.'],
  ['B', 'The first is direct. The quarter past nine stops twice.'],
  ['A', 'A quarter to two is still all right.'],
  ['B', 'And coming back: six in the morning or four in the afternoon, nothing else.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four facts for the chosen service. The quickest one is usually **not** chosen, which is the point. Typical errors: _the bus is leaving at seven_ for a timetable; _it takes at two hours_; giving two facts and stopping.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The service', 'Leaves / opens', 'Takes', 'The advice not in the timetable'], [
  ['the Jaramana service', 'every few minutes, 6 am–11 pm', '25 min, 50 at five', 'at five o\'clock walk to the second stop; the first one is full'],
  ['the passport office', 'opens 8.00', '—', 'the queue starts at 6.30; after 10.00 you will not be seen'],
], [1.2, 1.2, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The passport office opens at eight. What the timetable doesn\'t say is that the queue starts at half past six, and if you arrive after ten you will not be seen that day."', 'The unwritten advice is the whole value of asking a person. Collect it; it is the most useful page any class produces.']));
out.push(stage('5', 'Read'));
out.push(p('1 It is direct and quicker, but it leaves before the garage opens and he cannot leave the keys.  2 In the middle, on the left — the back is noisier and the front has the sun on that road all morning.  3 Telephone Nour before buying a 17.00 ticket; there is sometimes a service going back empty at about two, and it costs less.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**GETTING TO DERAA AND BACK — Sunday 4 June**  **Going.** The 07.00 from the garage. It takes an hour and a half (direct) and arrives at 08.30. The office opens at nine, so you have half an hour and the walk is ten minutes — sit down and eat something, because there is nowhere to afterwards.  **Not the 06.00.** It is the same journey and it puts you there at half past seven with nothing open and nowhere to sit.  **Coming back.** 13.00, in at 14.30; or 16.30, in at 18.00. **Take the 13.00 if the papers are stamped by noon.** If they are not, do not rush them — the 16.30 is fine and nobody needs you here.  **Tickets** at the garage, not on the bus. On a Sunday there is no queue.  **What the timetable does not say:** the 07.00 goes round by the villages for the first twenty minutes even though it is called direct. It is not late; that is the route.  **If the office sends you to a second building:** telephone me before you go. Half of those errands can be done from here with a number.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four facts', '✓'],
  ['The arithmetic done for the reader', '✓ – the half hour and the ten-minute walk'],
  ['Why **not** the obvious option', '✓'],
  ['Something the timetable does not say', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The detail people are gladdest to have is usually one that stops them **worrying**: _it is not late; that is the route._'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I have done the Mezzeh road twice a day for six years. What is written nowhere: the second service from the roundabout is always emptier than the first, because everybody runs for the first one. The driver with the blue beads stops where you ask; the others stop where they stop. And after rain, the left side of the road near the bridge floods and the service goes the long way without telling anybody. My neighbour told me all three in my first week, and I have never had to learn them.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the driver with the blue beads" — I will use that._   ✓ _How did you find out about the flooding?_   ? _Do you still see that neighbour?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most unwritten knowledge comes **from a person, in the first week**. The rest is learned the hard way, once each. That is an argument for telling new people things.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['**GETTING TO ME FROM DAMASCUS.** The service from the Baramkeh garage leaves when it is full, about every twenty minutes, and takes forty minutes. Get off at the pharmacy, not at the roundabout — the roundabout is one stop too far and it is uphill back. What the timetable does not say: after four o\'clock they fill at the garage and will not stop for you on the road.']));

// ===================== 11.7 =====================
out.push(pb());
out.push(h2('11.7  Review & Mediate: the travel plan and the hotel page'));
out.push(stage('1', 'Get ready – Unit 11 quiz'));
out.push(p('**1** A plan made yesterday → **going to**. A decision made now → **will**.  **2** The dates, the name spelled, and what is included (plus: hold until, and in writing).  **3** Because _or_ makes a vague yes impossible.  **4** A **time** and a **reason** — and, best of all, one thing **not** to do.  **5** Leaves · arrives · takes · stops (or direct).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (Hala)   **b**  1 That it is not money she has to account for **and** not money she has to spend — if she eats for twenty, the rest is hers.  2 Every receipt except food, in one envelope, to Nadia by Friday.'));
out.push(p('**Language box – Practise (sample):**  _You get sixty thousand a day for food and you don\'t have to keep any receipts for that — it\'s yours whether you spend it or not. Everything else you do keep receipts for, and they have to be in within a week of coming back, or you don\'t get the money._'));
out.push(stage('3', 'Practise – sample mediation of document 1'));
out.push(sample(null, ['"I\'ll tell you the four things. One: the travel is paid, all of it, but keep the ticket. Two: you get sixty thousand a day for food — you don\'t have to show receipts for that, and if you spend less, the rest is yours. That\'s what per diem means and nobody ever explains it. Three: the hotel is paid by the office, so you never see a bill for the room. And four, the only one you can get wrong: every other receipt, the original, in within a week of getting back. If there\'s no receipt there\'s no money, and that part they really do mean."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write four numbered things and mark the one that can go wrong. A speaker who says _subsistence_, _reimbursed_ or _supported by original receipts_ has not mediated. The test is whether the listener could repeat all four without the paper.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'My four things', 'The one that can go wrong'], [
  ['Hala', 'bus 07.30 · breakfast and Wi-Fi in, parking out · per diem 60,000 · receipts', 'the receipts, in one envelope, by Friday'],
  ['Fadi', 'check-in from two, held to eight · breakfast 6.30–10 · Wi-Fi in the room · ask for the invoice **on arrival**', 'asking for the invoice on arrival, not at check-out'],
], [1, 2.4, 1.6]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s the hotel page. Four things. One: you can check in from two and they hold the room until eight. Two: breakfast is included, half past six to ten, downstairs. Three: there\'s Wi-Fi in the room, not just the lobby. And four, the only one you can get wrong: if you need an invoice for the company, you have to ask when you arrive — not when you leave."']));
out.push(note('Eleventh unit of the book, so the ordinal is "eleventh". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(p('**The office-word list, continued from Units 7 to 10:** _per diem_ (a daily amount for food, no receipts) · _subsistence_ (food and drink) · _reimburse_ (pay you back) · _expenditure_ (money spent) · _invoiced to the company_ (the company is billed, not you) · _complimentary_ (free) · _standard class_ (the ordinary ticket) · _notify reception_ (tell the desk) · _unless otherwise arranged_ (unless you ask) · _original receipts_ (the paper, not a photograph).'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', 'check-in from 14.00, held to 20.00 — a window'],
  ['2', 'B', 'breakfast in, parking out'],
  ['3', 'B', '"receipts not required for this element"'],
  ['4', 'A', '"within seven days of return"'],
  ['5', 'B', 'direct = no stops'],
  ['6', 'A', '"notify reception on arrival"'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Hala, Your bus is at 7.30 and you arrive at ten. At the hotel, breakfast and Wi-Fi are included, but parking isn\'t — you haven\'t got a car, so forget it. Please keep every receipt except food, in one envelope, and give them to Nadia by Friday. Nour  _(53 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  The bus and the arrival time', '✓'],
  ['2  What is and is not included', '✓'],
  ['3  Receipts, except food, in one envelope', '✓'],
  ['25 words or more', '✓ – 53 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈40 words)'));
out.push(sample(null, ['Hi Samir, I\'m coming on Thursday — the seven thirty bus, so I\'ll be at the station about ten. I\'m going to stay two nights and go back on Saturday morning. The one thing I\'d really like is to walk in the old city in the evening, if you have time. Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['I\'ll meet you at the station. Two nights isn\'t long — let\'s do the old city on Thursday evening, before you are tired, and keep Friday for whatever you feel like.']));
out.push(stage('✓', 'Unit 11 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'b', 'a', 'b', 'b', 'a']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Name: **Bassel Nassif (N-A-S-S-I-F)** · Nights: **two — Sunday 21 and Monday 22** · Room: **single, 35,000 a night** · Included: **breakfast and Wi-Fi** · Held until: **8 pm**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Mr Ayoub, I\'m travelling to Homs on Tuesday on the 7.30 bus and arriving at ten. I\'m staying one night at the Al-Waha. Could you sign the Khalil order before Monday evening, so I can take it with me? Thank you. Nour  _(44 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** how and when travelling · where staying · one thing needed — one mark each.',
  '**Language (2):** _going to_ or the present continuous used correctly for the plan; times and prepositions.',
  '**Organisation and length (2):** greeting and name; 25 words or more.',
  '⚠ Accept **either** _I\'m travelling_ or _I\'m going to travel_. Both are right here, and a learner who can use either has understood Units 7 and 11 together.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 11', [
  '**1  _will_ for a plan already made.** It came back in 11.1 after being taught in 7.3, and it will come back again. It is not ungrammatical, so it survives correction; the only thing that shifts it is asking **when did you decide?** every single time.',
  '**2  The missing _it_.** _Is very cold today._ Arabic has no dummy subject, so the learner is not being careless — there is nothing in their first language for _it_ to translate. Drill it as a chunk: _It\'s hot. It\'s cold. It\'s raining._ Never explain it.',
  '**3  The recommendation with no time.** _You should see the old city._ This is the cycle learners enjoy most and do least well, because the task looks easy. Refuse any recommendation without a **time** and a **why not earlier, why not later** — those two clauses are the entire difference between a guidebook and a person.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 11 · Answer Key');
