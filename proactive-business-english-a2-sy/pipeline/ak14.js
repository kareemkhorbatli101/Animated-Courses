// Proactive Business English A2 · Syria Edition · Book 2 · Unit 14 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 14  Plans and Forecasts'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit teaches three futures and they are not interchangeable.** Mark for the right one, not only for the right form: _we are going to_ commits the company, _we will_ is a prediction or a promise made while speaking, _we may_ binds nobody. A learner who uses _will_ for a decided plan has made a business mistake, not a grammar one, and it is worth saying so in those words.',
  '⚠ Numbers are part of the answer in this unit. A prediction with no size, a recommendation with no figure and a percentage with no period are all marked down, and the Writer\'s boxes say so.',
], C.grey, C.navy));

// ===================== 14.1 =====================
out.push(h2('14.1  We are going to open a second counter'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Push for something **decided** — the first answer is often a hope, which is the whole point of the cycle.'));
out.push(p('**b**  Decided: _We are going to take on two drivers._ Idea: _We might take on two drivers._ Opinion: _I think we will take on two drivers._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a second counter)   **b**  1 The builder starts on the fourteenth.  2 That they are only seven people; the answer is that Hala takes the second counter from April and Nour trains her for three weeks first.'));
out.push(p('**Language box – Practise (samples):**  1 We are going to take on an assistant in June.  2 We are going to open at eight from Sunday.  3 We are going to hold a training day on the ninth.  4 Prices are going to rise on the first of the month.  5 That compressor is going to fail before the summer.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'One decision, and then the figures. We are going to take a second van. It arrives in six weeks.'],
  ['B', 'And where is the driver going to come from? We have one.'],
  ['A', 'Fadi is going to move to the lorry from June, and we are going to take on a van driver before that.'],
  ['B', 'And the cost? The van, the insurance, the wages.'],
  ['A', 'About nine million, and it is in the budget. I am not going to pretend it is nothing; I am going to tell you what it buys. Eleven deliveries were late last month and nine of them were one van doing two runs.'],
  ['B', 'Nine of eleven.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the number that says what the plan buys. Typical errors: _we will open_ for something already decided; _I going to_; _we are going to opening_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The plan', 'Starts', 'Who it affects', 'The number that justifies it'], [
  ['second counter', '14 April', 'Hala, Nour, the queue', 'eleven people waited over ten minutes; four left'],
  ['Saturday opening', 'June', 'two staff, by rota', 'the Saturday trade now going to Jaramana'],
  ['second van', 'six weeks', 'Fadi, a new driver', 'nine of eleven late deliveries'],
], [1.4, 0.8, 1.1, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We are going to open a second counter from the middle of April. It affects Hala, who takes it, and Nour, who trains her. It is worth it because eleven people waited more than ten minutes last Thursday and four of them left."', 'Keep the slips from the listener task. 14.7 comes back to the plan the class thought would not happen on time, and the class is usually right.']));
out.push(stage('5', 'Read'));
out.push(p('1 The queue is going to be longer, for three weeks, and worst in the week before Eid.  2 Two people on the counter from eight instead of half past; Nour and Hala taking turns on the door to tell people the wait before they join it.  3 Because inviting the hard question — _including whether it is worth it_ — moves the argument out of the corridor and into the office, where it can be answered.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**STAFF NOTICE — the store room floor**', 'From 3 June the store room floor is going to be re-laid. The work is going to take eight days.', '**What is going to happen.** Everything in the end bay is going to move into the yard under cover. Picking is going to be slower — about twice as slow — and it is going to be slowest in the week the Homs orders go out, which is the only week the contractor had.', '**What we are going to do about it.** Abu Yasser is going to pick the Homs orders the Friday before. Two extra hours on the Thursday, paid.', '**After.** A floor that can be washed, and no more standing water by the door.', 'Ask me anything, including whether eight days is really eight days. — K. Ayoub']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A start date and a length', '✓ – 3 June, eight days'],
  ['The bad part named, with a detail', '✓ – twice as slow, worst week'],
  ['What the company is going to do about it', '✓ – Friday picking, paid hours'],
  ['_going to_ throughout', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks you to name the bad part with its worst detail, and yours does — twice as slow in the Homs week. The last line invites the hard question too. The only thing I would ask is whether _about twice as slow_ could be a number of hours."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the bad part only. The class reliably picks the most honest notice as the one they would believe next time, which is the argument of the whole cycle and better made by them than by the teacher.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I am going to stop taking work home on Thursdays. It starts this week. It is going to be worse before it is better, because the Thursday work does not disappear — it is going to land on Sunday morning, which is already the worst morning of the week, and for about a month I am going to be behind on Sundays and calm on Thursday nights. I will know it has worked if I stop doing the invoices at eleven at night and nobody notices anything different except me.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"calm on Thursday nights" — that is the whole reason._   ✓ _really decided, with a start date._   ? _Who else needs to know on Sunday?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sort the texts into decided and wished-for. A plan with no start date is nearly always a wish, and saying so kindly is the most useful two minutes in the cycle.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['When we changed the delivery days nobody put up a notice. It should have said: from 1 March Homs goes out on Tuesday, not Monday; the Monday picking is going to be heavier for three weeks; and we are not going to change it back, so plan the stock for Tuesday.']));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  Sales will rise after Eid'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Nearly every trade in the country has the same shape — a rush, a stop, a rush — and the class will name it faster than the book can.'));
out.push(p('**b**  Three predictions with _will_, then the least certain one named. The naming is the skill; the predictions are the practice.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a quiet fortnight, then a rush)   **b**  1 Everybody orders at once, and four days do the work of a fortnight.  2 To telephone Ms Shamsi **this afternoon** — and to have the date written on the board.'));
out.push(p('**Language box – Practise (samples):**  Prediction: _Next week will be slow; it is the last week of the month._ Decision: _Then we will do the stock count on Tuesday instead._ Promise: _I will send you the figures before four today._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The figures. October was steady. November will be slower and then December will be very hard.'],
  ['B', 'Why December?'],
  ['A', 'The rain. The Homs road takes a day longer and nobody wants a delivery standing in the yard. Then everything that did not move in December moves in the first week of January, and we will have one week of what should be three.'],
  ['B', 'So we will be short of drivers again.'],
  ['A', 'Then we will book the hire lorry now. I will telephone the depot this afternoon — not in November, this afternoon, because I said this last year and booked it in December.'],
  ['B', 'You did.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the promise and its date. Typical errors: _I will to telephone_ · _he will comes_ · a promise with no date, which is the fault the cycle exists to prevent.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Prediction', 'How sure', 'My promise, with a date'], [
  ['the ten quiet days before Eid', 'very sure — it happens every year', 'order the boxes by 20 March'],
  ['the rush in the second week after', 'fairly sure — only one year of evidence', 'two people on the counter that week'],
  ['the wrap price rising', 'not sure — he has said it three times', 'ask for it in writing this week'],
], [1.6, 1, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I think the second week after Eid will be very busy, probably four days doing a fortnight\'s work. I am fairly sure — but it has only happened once. I will order the boxes by the twentieth of March."', 'The promise most likely to be kept is always the one with a date in it. Ask the class to find the exception; there usually is not one.']));
out.push(stage('5', 'Read'));
out.push(p('1 Fact: _March turnover 41.2 million, up 6%_ — it has happened and it has a figure. Prediction: _the first ten days will be quiet_ — it uses _will_ and a reason.  2 Order the boxes in March, and the wrap at the same time for the hundred-roll price: about 180,000 saved.  3 So that the reader knows how much weight to put on each half — and so that the uncertain part is flagged by the writer rather than discovered by the reader in May.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** October figures and what November will do', 'October: turnover 39.4 million, up 2% on September and up 7% on October last year. Two customers paid late; both have now paid.', '**What November will do.** The first fortnight will be normal. The second will be slower — the rain starts and the Homs road adds a day, so customers hold their orders.', '**What I would do about it.** Book the hire lorry for the first week of January now. If we book before 15 November we pay the old rate, which saves about 260,000.', 'I am sure about the Homs road; it has happened for four winters. I am less sure how much the orders will be held back — last year it was about a fifth, the year before almost nothing.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Facts and predictions in separate paragraphs', '✓'],
  ['A reason attached to the prediction', '✓ – the rain and the road'],
  ['A recommendation with a number', '✓ – 260,000'],
  ['A sentence saying how sure the writer is', '✓ – four winters against two years'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for a sentence on how sure you are, and yours does the hard version — sure about one half, not the other, with the evidence for both. I would only ask whether _about a fifth_ should be in the prediction paragraph as well."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the last paragraphs. The writer a class would ask again is always the one who said what they were not sure about, and they are usually surprised by that.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I think the price of everything we import will rise again before the summer, because it has risen every time the exchange rate has moved and the rate moved last month. I am fairly sure of that. What I am not sure about is whether our customers will buy less or just buy later — last time they bought later, which looked like a disaster in April and was fine by June. Either way I am going to keep four weeks of the fast lines in stock, which is worth doing whichever happens and which we did not do last time.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"looked like a disaster in April and was fine by June"_   ✓ _the hedge is honest._   ? _What would change your mind about the four weeks?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Keep the texts and put a date on the envelope. A class that reads its own predictions back in three months learns more about hedging in ten minutes than a unit can teach.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Sealed, dated 14 March: "By the end of June the wrap price will have risen at least once, and Ms Shamsi will have announced it twice before it happens. The second counter will open two weeks later than planned."']));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  The shipment may be late'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Anything genuinely uncertain: the power, a supplier, a member of staff, the road, a price.'));
out.push(p('**b**  Most to least certain: _it will be late_ → _it is going to be late_ → _it may be late_ → _it might be late_. The last two are close; the gap that matters is between the first pair and the second.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (the shipment may be late)   **b**  1 The lorries are waiting at the crossing and nobody will say how long.  2 She asks two questions — which lines are affected and what can be sent from stock — and has thirty rolls of wrap sent today.'));
out.push(p('**Language box – Practise (samples):**  1 The power may go to four hours a day — I will fill the generator on Sunday.  2 The road may be closed for a week — I will send the Hama order early.  3 He may pay late again — I will telephone before the due date, not after.  4 She may leave in the summer — I will start training the Saturday assistant now.  5 Prices may rise ten per cent — I will ask for it in writing this week.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Abu Yasser, I want to tell you before it becomes news. The estate may go to four hours of power a day next month. It may be nothing.'],
  ['B', 'Four hours by when, if it happens?'],
  ['A', 'From the first. Maybe the middle of the month. Nobody will say. It might be announced tomorrow and it might not.'],
  ['B', 'Then I will plan for the first. Can you tell me two things? Which hours, and can the generator be serviced before then?'],
  ['A', 'The hours are not decided. The generator takes two days and the man is free next week.'],
  ['B', 'Book him for next week and I will not be telephoning him in the dark on the first.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the action taken **today**. Typical errors: _it may to be late_ · _it mays_ · _it will may_. And the commonest content fault: a warning with no size.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What may happen', 'How big, if it does', 'What I can do this week'], [
  ['the Aleppo shipment is late', 'a week, maybe ten days', 'thirty rolls of wrap from her own stock'],
  ['four-hour power', 'the lift, the screens, the freezer', 'service the generator next week'],
  ['the counter assistant leaves', 'one person short from August', 'train the Saturday assistant now'],
], [1.5, 1.3, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The Aleppo shipment may be late, by about a week. It may be nothing. This week I am going to take thirty rolls of wrap out of Ms Shamsi\'s own stock, which covers us to the twenty-fourth whatever happens."', 'Ask the class to sort the room\'s possibilities into _act now_ and _watch_. Both are professional answers; pretending they are the same thing is what fills warehouses with things nobody needed.']));
out.push(stage('5', 'Read'));
out.push(p('1 Three times: in the subject line, in the first paragraph, and in _it may be nothing at all_.  2 Thirty rolls of wrap are on tonight\'s lorry; it covers the company to the twenty-fourth whatever happens.  3 To report on Thursday either way — **including if the answer is still "nobody knows"** — because otherwise silence starts to mean bad news and people stop waiting for the report.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Power supply — possible reduction, nothing certain', 'The estate office telephoned this morning. The supply **may** be cut to four hours a day from the first of next month. Nothing is certain and it may be nothing.', '**If it does happen**, it will be four hours, probably in the afternoon. The lift, the two screens and the cold store are affected.', '**What I have done today.** The generator service is booked for Tuesday. That covers the cold store whatever happens, which is the only thing we cannot do without.', '**What this means for you.** Abu Yasser: no picking in the end bay after three until we know. Nadia: do the bank run in the morning. Nothing else changes.', 'I will know more on Thursday and I will tell you either way, including if nobody knows.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Says it is not certain, more than once', '✓ – three times'],
  ['The size of it, if it happens', '✓ – four hours, afternoon'],
  ['Something already done today', '✓ – the generator booking'],
  ['At least two people named with an instruction', '✓ – Abu Yasser, Nadia'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says name the people, and you have two with instructions they can follow tomorrow. The one I would ask about is the cold store — you say it is the only thing we cannot do without. Does everybody know that?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what this means for you" sections. If a listener cannot say what they would do differently, the message has failed, however well written the rest is.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The landlord may not renew the lease on the yard next year. He has not said so and he may say nothing until the last month, which is what he did the time before. If it happens we would need somewhere with a gate wide enough for the lorry, within about fifteen minutes of here, and those are rare. What is worth doing either way is finding out what else is empty on this road — it costs me two afternoons and a few telephone calls, and if he does renew I will have learned what the yard is actually worth.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I will have learned what the yard is actually worth"_   ✓ _may / might, not will._   ? _How likely, honestly?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The best answers are the actions worth taking either way. Name them out loud; they are the professional habit this cycle is really teaching.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['I told Fadi the Homs run may move to Tuesday, by one day, and asked him to leave Tuesday afternoon free. He had already heard a version in the yard in which the run was cancelled, which is what happens when nobody says the size.']));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  If we order now, we will get it on Tuesday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Samples: _If we order today, it will come on Tuesday. · If the road is closed, the Homs order will be a day late. · If he pays on Thursday, we can pay Aleppo on Friday._'));
out.push(p('**b**  _If we **will order** now_ is wrong: after _if_, English uses the present simple. The future is carried by the **result** half only.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (order now)   **b**  1 It is the new price, about eleven per cent more.  2 That if the price does **not** rise on Thursday, he wants to be told — because the supplier has announced a rise three times this year.'));
out.push(p('**Language box – Practise (samples):**  1 If we order today, we will pay the old price.  2 If Abu Yasser clears the bay, they will fit — but only if the broken pallets go out.  3 If he pays on Thursday, we will take the discount; if he does not, tell me on Friday morning.  4 If the road is closed, Homs will be a day late.  5 If he is ill, Hala will cover the counter.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Three per cent off the Aleppo invoice if we pay within ten days — about 240,000.'],
  ['B', 'And if we pay early, what do we do about the wages on the twenty-eighth?'],
  ['A', 'If the Homs money comes in on the twentieth, there is no problem. He has paid on the twentieth for two years.'],
  ['B', 'Then pay it. But if the Homs money has not arrived by the twenty-second, I want to know that morning, not on the twenty-seventh.'],
  ['A', 'If it has not come by the twenty-second, I will tell you before ten and I will telephone him myself.'],
  ['B', 'Write both down. If this works we will do it every quarter; if it does not, we will know exactly which day it broke.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **second** condition — the one attached to the agreement. Typical errors: _will_ after _if_ (every time, in every class); a missing comma; and agreeing with no condition at all, which is a content fault, not a grammar one.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['If…', 'then…', 'The condition I would attach'], [
  ['we order the wrap today', 'we pay the old price', 'tell me on Thursday whether it actually rose'],
  ['we pay Aleppo early', 'we save 240,000', 'only if the Homs money is in by the 22nd'],
  ['we hire a lorry for Thursday', 'Homs arrives on time', 'only if the hire is less than a month of payments'],
], [1.4, 1.4, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If we pay Aleppo within ten days we will save about 240,000. I would agree, but only if the Homs money is in by the twenty-second — and I would want to know that morning, not at the end of the month."', 'Nearly every attached condition in the room asks for **information earlier**, not for money. Say so: it is the most transferable thing in the cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 Five: the price (if we order today / if we order Thursday), the space, the money, the risk, and the follow-up in the recommendation. Each one turns a choice into a number.  2 **Risk** — it argues against the recommendation, so that the reader does not have to find the weakness themselves and distrust the rest.  3 To record it in the supplier note, and to stop ordering on his announcements if it happens twice more without a rise.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Hire lorry for January — recommend booking now', 'The depot holds the old rate until 15 November. If we book now we pay 740,000 for the week. If we book in December it is about 1 million — 260,000 more, and in two of the last three years they had nothing left.', '**Time.** If we book the first week of January, the January rush is covered. If we book the second week, we cover nothing: the rush is over by the ninth.', '**Money.** If we pay the deposit now we are 200,000 short for the November wrap order, so the real saving is nearer 60,000 this side of the year.', '**Risk.** If January is quiet — and one of the last three was — we will have paid for a lorry we barely used. We could not sell the week on.', '**Recommendation.** Book it now, for the first week. If January is quiet I will record it, and if it is quiet twice we should stop booking ahead.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No _will_ after _if_, anywhere', '✓'],
  ['A number in every paragraph', '✓'],
  ['A paragraph that argues against', '✓ – the quiet January'],
  ['What the writer will do afterwards', '✓ – record it'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks what the decision costs somewhere else, and you have found it — the wrap order. That is the paragraph that makes this signable. Would the manager want the 60,000 figure in the first paragraph rather than the third?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the Risk paragraphs. The class signs the recommendation that argued against itself, every time, and they notice they are doing it.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['If I take the evening course, I will finish it in June and I will be able to do the monthly figures without Nadia. If I do not take it, I will be doing the same work in June that I am doing now, which is not terrible but is not anything either. The course is two evenings a week and my sister collects the children on one of them. I would do it, but only if the company pays half — and if they will not pay half, I will ask whether they will give me the Tuesday afternoon instead.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"not terrible but not anything either"_   ✓ _no "will" after "if"._   ? _Have you asked about the Tuesday?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many of the decisions are really about time rather than money. It is usually most of them, and people usually say money first.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['The decision to move Homs to Tuesday had no recommendation with it. It should have said: if we move it, Monday picking is heavier by about four hours; if we do not, the lorry waits for the Aleppo delivery; and the saving is one day of a hired driver a week.']));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  Sales went up by six per cent'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  _six per cent · eleven point five per cent · forty-one point two million · one point seven four million · a third · double_. Drill the stress: it falls on **cent** and on **million**, not on the number.'));
out.push(p('**b**  rose / fell / stayed the same / doubled. **by** + the size of the change; **to** + where it ended; **from … to …** for both ends.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (March, 41.2 million)   **b**  1 By six per cent.  2 That February contained two big Homs orders from one customer, so February was not really a February.'));
out.push(p('**Language box – Practise (sample):**  "Turnover rose every month, from 36.1 million in January to 41.2 in March. The biggest single rise was January to February, about eight per cent. That month had two large Homs orders from one customer in it, so it is better read as a good month than as a new level."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Three months. Fourteen complaints, nine, eleven.'],
  ['B', 'It fell and then rose again, but not evenly. From the first month to the second it fell by five. From the second to the third it rose by two. The trend is down and the second month is the odd one.'],
  ['A', 'Is eleven bad?'],
  ['B', 'Eleven is better than fourteen. Nine after fourteen is a question, not a triumph. The counter was shut for two weeks in that month, so fewer people came at all, which means nine is not really a nine.'],
  ['A', 'So what do I tell the meeting?'],
  ['B', 'Down three on the quarter, and say the quarter, not the month.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **explaining** sentence. Typical errors: _rose to six per cent_ · _increased with 6%_ · a percentage with no period attached, which is the one that misleads.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The three figures', 'Overall', 'Biggest change', 'What explains it'], [
  ['36.1 / 38.9 / 41.2 m', 'up every month', 'Jan–Feb, 8%', 'two large Homs orders, one customer'],
  ['14 / 9 / 11 complaints', 'down on the quarter', 'month 1–2, down 5', 'the counter was shut a fortnight'],
], [1.4, 1.1, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It went from 36.1 to 41.2 million. The biggest change was January to February, up by about eight per cent. That is because February had two large Homs orders from one customer in it."', 'Ask for the figure in the room that would mislead without its explanation. There is always one, and the person who brought it usually did not notice.']));
out.push(stage('5', 'Read'));
out.push(p('1 The first three: the rise across the quarter with both percentages; the biggest single rise; the Homs orders that explain it.  2 Because a fall in complaints means nothing if the counter was open fewer days — saying the days were the same is what makes the fall real.  3 April below 4%; and the second counter opening in May, which will change the figures either way.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Late deliveries — the three sentences, then the detail**', 'Late deliveries fell every month of the quarter, from eleven in January to seven in March — down 36% across the quarter and down 22% on the same quarter last year. The biggest single fall was January to February, four fewer. That is because the second van arrived in the first week of February and Fadi stopped doing two runs in one day.', '**Causes.** Of the seven in March, five were the Homs road and two were our own picking.', '**What I would watch.** Seven, then seven. The fall has stopped, and the five road delays are not ours to fix. If April is above nine I would want to look at the picking, because that is the part we control.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences for the whole picture', '✓'],
  ['_by_ and _to_ used correctly', '✓'],
  ['Every percentage with its period', '✓ – across the quarter; on the same quarter last year'],
  ['A number that would worry the writer', '✓ – above nine in April'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says give every percentage its period and both of yours have one. The sentence I would look at is _the fall has stopped_ — is two months enough to say that, after you wrote that one month is weather?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what I would watch" lines. A manager who is told the alarm number in advance never has to argue about it later, and the class can usually name a time somebody did argue.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The number that has changed most at my work is the time between an order and a delivery. A year ago it was four days; now it is two. It fell by half, and almost all of it came from one thing: we started picking the next day\'s orders the evening before, which was somebody\'s idea in a Monday meeting and cost nothing. I would not call it a trend yet. Two days is only three months old, and the test will be whether it survives the week before Eid, when everything else stops being true.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"which was somebody\'s idea in a Monday meeting and cost nothing"_   ✓ _by / to / from correct._   ? _Whose idea was it, and does anybody say so?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most explanations are known to everybody at that workplace and written down nowhere. Ask who could write the sentence down this week.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['From the radio: "prices up eleven per cent". No period was given anywhere in the item — not on the month, not on the year. The number is useless without it, and nobody telephoned in to say so.']));

// ===================== 14.6 =====================
out.push(pb());
out.push(h2('14.6  I think we will need a second lorry'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and worth the time. "I did not" is the commonest answer in a first-year class, and the reasons — no evidence ready, no phrase for being unsure — are both fixed by this cycle.'));
out.push(p('**b**  _I am sure we will_ → _I think we will_ → _we might_ → _I am not sure, but_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a second lorry)   **b**  1 Five late deliveries since January, four of them the same cause.  2 He agrees with the **problem** and disagrees only about the solution, and he brings a figure — the three-day hire in November.'));
out.push(p('**Language box – Practise (samples):**  _I think sales will be flat next month; the last two weeks have been. I may be wrong. · I think she will leave in the summer — she has asked twice about the Latakia branch. I am not certain._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Anything else before we finish?'],
  ['B', 'I think we will need another person on the counter by September. I am not certain, but I think so.'],
  ['A', 'Why?'],
  ['B', 'Because eleven people waited more than ten minutes last Thursday and four left. If the second counter brings the customers we are expecting, Thursday will be every day.'],
  ['C', 'I agree with the problem. I am not sure about another person. Thursday is eleven to one; the rest of the week is quiet by half past eleven.'],
  ['B', 'That is fair. Then maybe the question is not a person; it is who is on the counter between eleven and one.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence where somebody agreed in part, and what it made possible. Typical errors: _I am agree_ · _I think we will to need_ · and the content fault of disagreeing with the whole of something in order to disagree with a part.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['My opinion', 'How sure', 'My evidence', 'What I agreed with'], [
  ['we will need another counter person', 'not certain', 'eleven waited, four left', 'that the hours matter more than the number'],
  ['the store room will be too small', 'fairly sure', 'end bay full since March; two loads returned', 'that it is what is in it, not its size'],
], [1.3, 0.9, 1.5, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said I thought we would need another person on the counter by September. My evidence was the eleven people who waited last Thursday. I agreed with Abu Yasser that the problem is the hours between eleven and one, but not that it can be solved by moving a break."', 'Ask who changed their mind. In most meetings nobody does, and naming that out loud does more for the class\'s meetings than any phrase bank.']));
out.push(stage('5', 'Read'));
out.push(p('1 _What I am not sure about_ — so that the uncertainty is a heading rather than a hedge buried in a sentence, and so the meeting can go straight to it.  2 Abu Yasser, and he is described as **right**, with his figure attached.  3 A decision about what happens on the two days a week that do not fit — explicitly **not** about the lorry.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**For Monday\'s list — the counter between eleven and one**', '**What I think will happen.** I think the waiting time will get worse from September, even with the second counter. I am not certain; it depends on how many of the Thursday customers come on other days.', '**Why I think it.** Eleven people waited over ten minutes last Thursday and four left. Of the last six Thursdays, five had a queue at midday and one did not — that one was raining.', '**What I am not sure about.** Whether we need another person. Abu Yasser points out that the queue is only between eleven and one, and he is right — I have watched it for three weeks.', '**What I would like on Monday.** Ten minutes, the counter times for six Thursdays, and a decision about the hours between eleven and one — not about taking anybody on.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The opinion first, the evidence after', '✓'],
  ['A heading for what the writer is unsure about', '✓'],
  ['The colleague who disagrees named fairly', '✓ – "and he is right"'],
  ['A decision asked for, and a length of time', '✓ – ten minutes'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks you to ask for a decision about the right thing, and you have moved it from _a person_ to _the hours_, which is the harder and better question. The only thing missing is who you want in the room."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what I am not sure about" headings aloud. The writer the class would trust with a bigger question is always the one who wrote the longest uncertainty.'));
out.push(stage('7', 'Write freely – sample (≈100 words)'));
out.push(sample(null, ['I think we will lose the Hama customers within a year if nothing changes. I am fairly sure. We deliver there once a fortnight and the new company in Homs goes twice a week, and two of our four Hama accounts have halved their orders since January. What would change my mind is if the halving is the season — it was the same two accounts last spring. Nobody has said it because the Hama accounts are small and because saying it sounds like asking for a third van, which I am not, and which is probably why it has sat in my head since March.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"saying it sounds like asking for a third van, which I am not"_   ✓ _the hedge is there and it is specific._   ? _Who would need to hear this first?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts the reason it has not been said is that nobody asked. Ask whether anybody is going to say it this month, and write down who says yes.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['For the next staff meeting: "I think the Hama round will not be worth running by the autumn. Evidence: two of four accounts halved since January. I am not sure whether it is the season. I would like ten minutes and a decision about the frequency, not the van."']));

// ===================== 14.7 =====================
out.push(pb());
out.push(h2('14.7  Review & Mediate: the sales chart and the forecast note'));
out.push(stage('1', 'Get ready – Unit 14 quiz'));
out.push(p('**1** _We are going to open_ — the decision is already taken.  **2** After _if_, English uses the present simple: _if we order now_.  **3** _by_ is the size of the change; _to_ is where it ended. _Rose to six per cent_ says the figure itself is now six per cent.  **4** How big it would be, and what can be done today.  **5** It leaves the **solution** open while accepting the problem — which keeps the meeting on the problem.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (he thinks the company is doing badly)   **b**  1 It does not show what the figures mean for his own work.  2 That the second counter is **decided** and the rest of the note is _may_ and _I think_ — and that the work is going up, which the note never says.'));
out.push(p('**Language box – Practise (sample):**  "Slowing means it is going up less fast, not going down — look at the three numbers, every one is bigger than the last. The counter is decided; the builder starts on the fourteenth. The rest is what one person expects. For you it means more deliveries from May, not fewer."'));
out.push(stage('3', 'Practise – sample with document 1'));
out.push(dlg(null, [
  ['B', 'They are going to cut the drivers. It says costs rose nine per cent because of transport.'],
  ['A', 'Read the last line. _We do not expect any change to staffing._'],
  ['B', 'They always say that.'],
  ['A', 'Then sort it by the verbs. _We are going to review all delivery routes in June_ — that is decided, and it is about routes. _Margins may come under pressure_ — that is a possibility and it binds nobody. There is no _will_ anywhere about people.'],
  ['B', 'So what does it mean for me?'],
  ['A', 'It means your route may change in June and your job is not in this document at all. If you want to be useful before June, bring them the figures for the two drops that are always late.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that said what the document meant **for that person**. It is never a sentence from the document, which is the point of the whole mediation strand.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought it said', 'What it means for them'], [
  ['Fadi', 'that the company is going down', 'more runs from May, and the route review in June'],
  ['Hala', 'that complaints only fell because the counter shut', 'the fall is real; the days were the same'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a chart and a forecast note. He thought it said the company was going down. The verbs sort into one decided — the counter in May — two predicted and three possible. For him it means more work from May and a route review in June."', '⚠ **The ordinal.** This is the **second** unit of Book 2, and the document again leaves out the thing that matters most to its reader. Keep the claim in every cycle 7; the drift starts at the unit that leaves it out.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _turnover · margin · quarter · forecast · trend · under pressure_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '**Slowing** describes the **rate**, not the direction: still rising, less fast.'],
  ['2', 'B', '_on the same quarter last year_ names the period: the same three months a year ago.'],
  ['3', 'A', '_are going to_ = decided.'],
  ['4', 'C', '_may_ = possible, not certain, and not yet happened.'],
  ['5', 'B', 'The condition is the rise **not** happening; report only then.'],
  ['6', 'B', '_stayed the same except for_ — one exception, which is transport.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (31 words)'));
out.push(sample(null, ['Hi Fadi, I saw you looking at the chart. The figures went up every month — 36 to 41 million. The one decided thing is the second counter in May. I will explain the note to you on Sunday.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: what the figures show, with a number ✓ · the decided thing in _going to_ or equivalent ✓ · a promise with a day ✓. Thirty-one words. ⚠ The commonest fault is copying the worrying word — _slowing_ — into the message without its numbers, which frightens the reader the message was meant to calm.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Two years ago our turnover figure was read out at a meeting as "down eleven per cent" and half the room thought the company was in trouble. It was down eleven per cent on the previous month, which was the month of a single enormous order from one customer. On the year it was up. One sentence would have prevented it: "down on last month, which had the Tartous order in it; up seven on the year." Nobody said it, and two good people spent a weekend worrying and one of them started looking for another job.']));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['For the driver who does my round: the figures mean six runs a week from May instead of four, the same lorry, and a route review in June that nobody has decided anything about yet.']));
out.push(pb());
out.push(stage('✓', 'Unit 14 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'b', 'a', 'b', 'a', 'a']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** The builder has been booked, so the plan is decided.  **2** No _will_ after _if_.  **3** _by_ is the size of a change.  **4** _may_ for a possibility; _will_ and _going to_ both claim too much.  **5** _from … to …_ gives both ends.  **6** _think_ is not used in the continuous for an opinion.  **7** _might_ + bare verb.  **8** A finished period — _all quarter_ — takes the past simple.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Three months', 'Biggest rise', 'What explains it', 'What is decided', 'What may happen'], [[
  '36.1 / 38.9 / 41.2 million', 'January to February, 8%', 'two large Homs orders from one customer', 'the second counter opens in May', 'transport costs may rise with fuel',
]], [1.3, 1.2, 1.4, 1.2, 1.3]));
out.push(note('Accept "Homs orders" alone for the explanation. Do not accept "April below 4%" for _what may happen_: that is the writer\'s alarm number, not a prediction.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample three sentences (44 words)', ['Late deliveries fell every month, from eleven in January to seven in March — down 36% across the quarter. The biggest single fall was January to February, four fewer. That is because the second van arrived and one driver stopped doing two runs in a day.']));
out.push(box('Marking the Unit 14 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'Overall movement (2) · the biggest change **with its size** (2) · the explaining sentence (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The explaining sentence is worth two marks and is the one most often missing. A learner who writes three sentences of numbers has read the chart aloud, which is not the task.',
  '⚠ Take a mark off **within** the first two bands for _rose to six per cent_ where _by_ is meant. It is the error that survives longest and it changes the meaning.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 14**'));
out.push(p('**1 _Will_ after _if_.** It appears in every class in every country and it survives into B1. Drill it as a shape — _if_ + present, _will_ in the other half — and come back to it in Unit 15, where the first conditional carries the negative as well.'));
out.push(p('**2 The three futures used as synonyms.** A learner who says _we will open a second counter_ about a decided plan has not made a grammar mistake that anybody will correct in the street — they have told a manager that nothing is settled. Mark it as a business fault and say why; that is the only correction that sticks.'));
out.push(p('**3 Percentages with no period.** _Up eleven per cent_ on what? This is not an English problem and your learners will meet it in Arabic too, which makes it an easy point to win: ask the question in either language and the habit transfers.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 14 · Answer Key');
