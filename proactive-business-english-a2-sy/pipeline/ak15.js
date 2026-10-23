// Proactive Business English A2 · Syria Edition · Book 2 · Unit 15 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 15  Problems and Solutions at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The passive arrives in 15.4 and it is the one structure in this book that can be used dishonestly.** Teach both halves: how to write a timeline that is fair, and how to notice when a sentence has had a person removed from it. The Student\'s Book says so in the opener and the free writing in 15.4 asks the learners what it felt like to write that way. Do not skip that question; it is the point.',
  '⚠ Several cycles ask learners to report real faults at their own workplace. Those reports are often the first time anybody has written the thing down, and a few of them get acted on. Mark the English and say so when a report is good enough to send.',
], C.grey, C.navy));

// ===================== 15.1 =====================
out.push(h2('15.1  The printer is jamming again'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and there is never a shortage. Accept small things — a door, a kettle, a light — the size does not matter for the practice.'));
out.push(p('**b**  The second. The first tells a repair man only that he must come; the second tells him what to bring, which turns one visit into one repair.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (it jams after about ten pages)   **b**  1 Since Thursday — twice then, four times today.  2 The back has been cleared three times and the other paper tried; it does it with both.'));
out.push(p('**Language box – Practise (sample, the printer):**  "It is jamming after about ten pages. The paper catches at the back, on the left. Since Thursday — twice then, four times today, so it is getting worse. I have cleared it three times and tried the other paper; it does it with both."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Fadi, the van is not working.'],
  ['B', 'It went to Homs on Monday. What is it doing?'],
  ['A', 'It is making a noise. When I turn right there is a knocking from the front left. Turning left, nothing.'],
  ['B', 'Since when?'],
  ['A', 'Since the rain last Tuesday. Four or five times a day now, and worse when it is loaded.'],
  ['B', 'And what have you tried?'],
  ['A', 'I have checked the tyre pressure and looked underneath. I have not changed anything.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick the five parts and name the missing one. Typical errors: _it is not work_ · _since two weeks_ (English needs _for_ two weeks or _since_ a point) · the present simple _it jams_, which claims the fault is permanent.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Doing what, where', 'Since', 'Worse?', 'Tried'], [
  ['printer', 'jams after ~10 pages, back left', 'Thu 12th', 'yes', 'cleared x3, other paper'],
  ['van', 'knocking, front left, turning right', 'last Tue', 'when loaded', 'tyre pressure'],
  ['order screen', 'will not save over 12 lines', 'the update', 'same every day', 'another computer'],
], [1, 1.6, 0.8, 0.7, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The order screen is losing everything over twelve lines, at the moment you save, since the update on the ninth. Four times today. We have tried a different computer and it does the same."', 'Ask which fault in the room has gone on longest, and why it has never been reported in five parts. The answer is nearly always that nobody knew it was worth the trouble.']));
out.push(stage('5', 'Read'));
out.push(p('1 "The paper catches at the back on the left-hand side and the amber light flashes twice" — with that, the engineer brings the rear feed roller.  2 Forty minutes a day of hand-written delivery notes and one wrong address; it is in the report because a nuisance is not booked in and a cost is.  3 An engineer **with the rear feed roller**, this week, and a confirmation of the day.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**FAULT REPORT — shutter, loading bay**', '**What it is doing.** It stops about a metre from the ground and will not go further down. It goes up normally.', '**Since when.** Sunday 9th. Once on Sunday, twice on Monday, four times today.', '**Getting worse.** Yes — it was once a day and it is now most times we close it.', '**What we have tried.** Cleaned the track; greased it; closed it slowly; closed it with the bay empty. The same every time.', '**What it stops.** We cannot lock the bay. Somebody has stayed late three nights to wait for the lorry, which is about six hours of overtime a week.', '**What we are asking for.** An engineer with the bottom limit switch, this week. Please confirm the day.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What it is doing, exactly where', '✓ – a metre from the ground'],
  ['A count, not an adjective', '✓ – once, twice, four times'],
  ['What has been tried', '✓ – four things'],
  ['What it stops, with a cost', '✓ – six hours of overtime'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says name the part if you know it, even if you are wrong. You have — the bottom limit switch. The line I would look at is _most times we close it_: how many times is that in a day?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what it stops" headings. The report with the cost in it is the one the class picks as first to be acted on, every time, and they are right.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The tap in the yard has leaked since before I came, which is more than a year. It does not drip; it runs, about the thickness of a pencil, all day and all night. Everybody has stopped seeing it. What we do instead is nothing: we walk past it. I worked out what it costs once, on the back of a delivery note, and it was more than the plumber would charge to come twice. I showed the note to two people and both of them laughed and agreed, and the tap is still running.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"about the thickness of a pencil" — that is a measurement, and it is what makes it real._   ✓ _there is a count and a cost._   ? _Who could ring the plumber this week?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Add up the weekly costs on the board. The total is always larger than anybody expects, and it is the first time most classes have seen the sum.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Given to the office manager on Sunday: the yard tap, running continuously since at least March last year, about a pencil of water, costing more in a month than two plumber\'s visits. Asked for: a plumber this week. He asked why nobody had written it down before.']));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  Why don\'t we send it with the Homs lorry?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Insist on three before any judgement — the instruction is the lesson.'));
out.push(p('**b**  _We could ask him_ and _Why don\'t we ask him?_ and _Shall we ask him?_ all invite an answer. _Ask him._ is an order.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (three)   **b**  1 Sending it unwrapped — his shop is a doorway and a counter, with nowhere to wrap it.  2 To telephone the customer and let him choose between Thursday and paying for local wrap.'));
out.push(p('**Language box – Practise (samples):**  _What about asking the service driver? · Why don\'t we split the order? · We could send half today. · Shall we telephone her now?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Fadi is ill and the Hama run is tomorrow. Four drops, one of them new. Three ideas.'],
  ['B', 'Why don\'t we send it with a service driver?'],
  ['A', 'We could, but the new customer has never seen us. The first delivery should be ours.'],
  ['B', 'Then what about moving the run to Thursday?'],
  ['A', 'That costs us the new customer\'s opening week. It is possible. Keep it.'],
  ['B', 'Or Abu Yasser could drive and we close the warehouse until eleven.'],
  ['A', 'Shall we telephone the new customer and ask whether Thursday morning is better for him than tomorrow afternoon?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write all three suggestions and then who chose. Typical errors: _Why we don\'t…?_ · _What about to buy_ · and the content fault of judging the first idea before the second has been said.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The problem', 'Suggestion 1', 'Suggestion 2', 'Suggestion 3'], [
  ['wrap arrives after the order goes', 'send unwrapped', 'buy twenty rolls locally', 'send Thursday with the Homs lorry'],
  ['driver ill on the Hama day', 'service driver', 'move to Thursday', 'Abu Yasser drives, warehouse opens late'],
], [1.2, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The problem was sixty boxes ordered and nineteen in stock. We could send nineteen now and the rest Thursday, or buy locally at a loss, or telephone and offer a different size at the same price. I would telephone, because he may not mind the size at all and we would never know."', 'Ask who reached a third suggestion they would not have reached without the first two. There is nearly always one, and it is often the one chosen.']));
out.push(stage('5', 'Read'));
out.push(p('1 Each gets what it is, what it costs, and what is wrong with it.  2 Option 1, and she names it and says plainly that she would not do it — leaving it out would look as if she had not thought of it.  3 It turns the message into a decision: without a deadline a busy manager agrees silently and nothing happens.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Hama run Wednesday — three options, and what I would do', 'Fadi is ill. The Hama run is due on Wednesday with four drops, one of them a first delivery to a new customer.', '**Option 1 — a service driver.** About 85,000 and it goes on time. But the new customer has never met us and the first delivery would be a stranger in a borrowed van. I would not do this for that drop.', '**Option 2 — move the whole run to Thursday.** No extra cost. Three customers will not mind; the new one opens on Wednesday.', '**Option 3 — Abu Yasser drives, warehouse opens at eleven.** No cost, but the morning picking stops and Thursday becomes heavy.', '**What I would do.** Telephone the new customer and ask whether Thursday morning suits him better than Wednesday afternoon. If it does, option 2 costs nothing at all.', 'If I do not hear from you by ten I will telephone him.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three options, numbered', '✓'],
  ['Each with a cost and a drawback', '✓'],
  ['The writer\'s own recommendation, with a reason', '✓'],
  ['A deadline for the reader to object', '✓ – by ten'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says every option carries a drawback. Option 2\'s is the new customer, and you have it. The sharper question is whether option 2 is the one you want chosen — if so, the deadline is doing a lot of work."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the last lines. A message that produces a decision today is rarer than it sounds, and the class can usually name a manager who never replies to anything without one.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The counter is busiest between eleven and one and we have one person on it. We could put a second person on for those two hours, which costs two hours a day and takes somebody off the orders. We could move the delivery collections to the afternoon, which would clear the queue but annoy four regular customers who come before noon. Or we could take telephone orders off the counter altogether and put them on the office line. I would try the third for a fortnight because it costs nothing to reverse. What I do not know is how many of the eleven-to-one people are collections.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"costs nothing to reverse" — that is the argument._   ✓ _all three have drawbacks._   ? _Could you count the collections next Thursday?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how often the third option is the best. It is a high proportion, and it is the whole case for making three before judging any.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['When the Homs round moved to Tuesday the only option on the table was moving it. The three should have been: move it; keep Monday and start an hour earlier; keep Monday and take the two small drops off the round. Nobody costed the third and it was the cheapest.']));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  If we wait, we will lose the order'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Samples: _If we do not telephone today, he will buy it elsewhere. · Unless the part arrives on Thursday, the repair waits a week. · If nobody answers by Sunday, I will go to the shop._'));
out.push(p('**b**  Yes, they are the same. _Unless_ **is** _if not_, which is why the verb after it stays positive.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the customer will buy elsewhere)   **b**  1 Eleven days.  2 He decides to quote; he refuses to make it a habit, because if it happens twice every quotation becomes a guess.'));
out.push(p('**Language box – Practise (samples):**  1 If we do not send the quotation this week, we will lose it; we lose a little margin, or we lose the customer.  2 Unless the part is ordered today, the machine stands another week — one day of hire, or a week of downtime.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Haffar has been forty days on 2.3 million. If we keep delivering, we will be carrying four million by June.'],
  ['B', 'How do you know?'],
  ['A', 'Because he has ordered twice since the invoice and paid nothing. Unless we stop at the next order, the debt grows faster than the trade.'],
  ['B', 'And if we stop, we may lose nine years of a customer who has always paid in the end.'],
  ['A', 'Then deliver the next one and tell him it is the last until something comes. If he pays, we lose nothing. If we say nothing, we lose four million and the customer anyway.'],
  ['B', 'Do it. But I am not going to make that a habit — if we do it twice, nobody here knows what our terms mean.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two outcomes and which was smaller. Typical errors: _unless we do not_ · _if we will wait_ · and the content fault of a warning with no number, which is the one that gets ignored.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What nobody has done', 'If nothing is done…', 'The small loss', 'The large loss'], [
  ['the Jaramana quotation', 'he buys elsewhere', '90,000 on one order', 'a 4-million-a-year shop'],
  ['the overdue 2.3 million', 'the debt doubles', 'one awkward call', 'four million'],
  ['the unanswered complaint', 'he tells other customers', 'two boxes replaced', 'the Hama accounts'],
], [1.3, 1.5, 1.1, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"If we do not quote by Sunday, we will lose the shelving order. If we quote without the Aleppo price we may lose about 90,000 on one order; if we say nothing we lose a customer worth about four million a year."', 'The warning most likely to be ignored is the one with no number in it. Point at the room\'s own examples.']));
out.push(stage('5', 'Read'));
out.push(p('1 About 90,000 at risk on this order, against a customer worth about 4 million a year.  2 Because the decision was an exception, and a note that does not say so becomes the precedent that makes every quotation a guess.  3 She would have told the customer that the delay was the supplier\'s and waited.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Note on file — Haffar account, 9 May**', 'Delivered order 0512 today although the account is forty days overdue at 2.3 million. The payment date is not confirmed.', '**Why I did not wait.** He has ordered twice since the invoice. Unless we had delivered and said plainly that it was the last until payment, the next conversation would have been a refusal with no warning.', '**What it risks.** If he does not pay by the 20th, we are carrying 2.9 million instead of 2.3. If he pays, we have kept nine years of trade for the price of one awkward sentence.', '**What it would have cost to wait.** He buys about 4 million a year and has always paid, late.', '**Why this is not a precedent.** This account is nine years old and has never gone unpaid. A new account at forty days would be stopped.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Dated, and says what was not known', '✓'],
  ['The conditional that justifies not waiting', '✓'],
  ['A number on both sides', '✓ – 2.9 million against 4 million a year'],
  ['A line about why it is not a precedent', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for a number in both halves and you have them. The line I would look at is _the price of one awkward sentence_ — it is the best phrase in the note and it is not a number. Can it have one next to it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "not a precedent" paragraphs. Ask which decisions the class would defend in six months with nothing but the note in front of them.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['We waited three months to replace the shutter motor because it was still working most days. In the third month it failed on a Thursday afternoon with the lorry half loaded, and we paid an emergency call-out, a night watchman and two days of a hired van, which came to about six times the quotation we had been sitting on. The warning would have been one sentence: if we wait for it to fail, we will pay for the repair at the worst possible hour, and the worst possible hour is always a Thursday afternoon.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the worst possible hour is always a Thursday afternoon"_   ✓ _if / unless correct._   ? _Did anybody say it at the time?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The group worth talking about is the one where somebody knew and said nothing. Ask what would have made it easier to say — it is usually a number and a shape, which is what this cycle supplies.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['If we do not replace the yard lighting before November, somebody will fall in the dark on the wet ramp. Replacing it costs about 400,000. One fall costs a week of somebody\'s work, an insurance claim and a conversation with the labour office.']));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  It was delivered on Tuesday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Almost nobody knows who delivered the post, and it almost never matters — which is the argument for the passive in one question.'));
out.push(p('**b**  _It was delivered on Tuesday._ · _The boxes were checked._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (what happened and when)   **b**  1 Taken Sunday afternoon; entered Sunday evening with one line missing; picked Monday; loaded Monday evening; delivered Tuesday morning.  2 Because three people touched the order and the system let all three through — so the place it could have been caught matters more than the name, and the name may turn out not to matter at all.'));
out.push(p('**Language box – Practise (sample, an order):**  "It was taken on Sunday. It was entered on Sunday evening. It was picked on Monday and loaded the same evening. It was delivered on Tuesday. The shortage was reported by the customer on Tuesday afternoon."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Tell me the order of it. Not who — what.'],
  ['B', 'The invoice was raised on the 2nd. It was raised at the old price, because the price list on the desk had not been changed.'],
  ['A', 'Go on.'],
  ['B', 'It was sent on the 3rd and received the same day. It was queried by the customer on the 9th.'],
  ['A', 'When was the query opened?'],
  ['B', 'On the 14th. It was in the shared folder from the 9th and it was not opened for five days.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the point where it could have been caught. There is nearly always more than one, and that plurality is the finding of the cycle. Typical errors: _it was deliver_ · _it was happened_ (happen is not passive) · _it was being delivered_ for a simple past event.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Day', 'What was done', 'Could it have been caught here?'], [
  ['Sun 14.20', 'the order was taken by telephone', 'yes — if it had been read back'],
  ['Sun 18.05', 'it was entered, one line missing', 'yes — if entry were checked against the call'],
  ['Mon 07.30', 'it was picked from the system', 'no — the picker had four lines and picked four'],
  ['Mon 17.40', 'it was loaded against the note', 'yes — if the load were checked against the order'],
], [0.7, 2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It was taken on Sunday, entered on Sunday evening and picked on Monday. It was delivered on Tuesday. It was noticed by the customer. It could have been caught at entry and at loading."', 'Count the hands in each story. Three or more is normal. It is the clearest argument there is for fixing the step rather than the person.']));
out.push(stage('5', 'Read'));
out.push(p('1 None.  2 Because the note was correct — checking the load against it could never find a missing line. The check was being done against the wrong document, which is a process fault, not a person\'s.  3 To stop three people who did nothing wrong from spending a week defending themselves.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**COMPLAINT 114 — what happened**', 'Thursday 16.10 — the complaint was taken by telephone and written on a slip.', 'Thursday 17.00 — the slip was left on the desk. The office closed.', 'Monday 09.20 — the slip was found and logged.', 'Tuesday 11.00 — it was sent to the supplier.', 'The following Monday — it was answered by the supplier in two days, but eleven days after the call.', '**Where it could have been caught:** at the end of Thursday (slips are not checked at closing); on Sunday morning (the log is not read against the slips).', '**What was not the cause:** the person who took the call, who wrote the slip correctly and completely, and the supplier, who answered in two days.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Day and time on every line', '✓'],
  ['Passive throughout; no names', '✓'],
  ['Two or more places it could have been caught', '✓'],
  ['A line saying what was not the cause', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says no names anywhere, and there are none. The line I would ask about is _the office closed_ — it is the only active verb in the timeline. Does it need to be there, or is it the most honest line in the report?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what was not the cause" lines and ask who each one protects. Most learners have never seen such a sentence in a report at their own workplace.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The wrong address was written on a delivery note. It was copied from the order, which had been taken by telephone, and the order had been written in the book with a four where a nine should have been. It was not checked at loading. It was delivered to a building where nobody was expecting it and it was left with a watchman. It was found on the Thursday.', 'Writing it like that is uncomfortable. I know exactly who wrote the four, and so does everybody, and the sentence that leaves them out is the one that makes it possible to say that the real fault was that nothing is ever read back.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the sentence that leaves them out is the one that makes it possible"_   ✓ _passive throughout._   ? _Would you show this to the person who wrote the four?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Both answers appear and both are right sometimes: the passive can be fair and it can hide. Ask for one example of each from the room, and let the class decide which is which.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['"Your order was cancelled." Removed: the person who cancelled it. The sentence tells the customer what happened and nothing about who decided, which is exactly why it is written that way.']));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  I am afraid your order is one line short'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The answer is nearly always the same: they said it in the first sentence, and then said what they were going to do about it.'));
out.push(p('**b**  _Bad news._ sounds worst; _I am afraid there is a problem_ and _Unfortunately_ are the working forms; _There is a problem_ is plain and fine between colleagues.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (one line short)   **b**  1 One — the news is in the first sentence.  2 He does not mind about the boxes; he minds that he heard it from his nephew and not from the company.'));
out.push(p('**Language box – Practise (sample, a two-day delay):**  "Mr Haffar, I am afraid the shelving will be two days late. The rest of your order is on today\'s van. It was our mistake — the order was placed a day after we told you it had been. The shelving is on Thursday\'s lorry and will be with you before noon. If Thursday is too late, I can send it by service driver on Tuesday and we pay."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mr Haffar, it\'s Hala at Sham Trading. I am afraid the shelving will be two days late. The rest of the order is on today\'s van.'],
  ['B', 'I know it is late. I told my own customer Tuesday.'],
  ['A', 'It was our mistake. The order was sent to Aleppo a day later than we told you.'],
  ['B', 'And?'],
  ['A', 'And it is on Thursday\'s lorry, with you before noon. If that is too late for your customer, I can send it by service driver on Tuesday afternoon, and we pay.'],
  ['B', 'Thursday is fine for me. The problem is the man I promised Tuesday to.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence where the customer says what the real complaint is. It is never about the goods — it is about who was told, and when. Typical errors: two or three softeners piled up; the news arriving in the third sentence; _sorry for the inconvenient_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The news', 'My fix, with a time', 'What they said they minded most'], [
  ['one line short', 'on the four o\'clock van', 'that he heard it from his nephew'],
  ['two days late', 'Thursday before noon', 'that he had promised his own customer'],
  ['two boxes damaged', 'replacements tomorrow a.m.', 'being asked for photographs'],
], [1.3, 1.6, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I told Mr Tarabishi his order was one line short. I offered the boxes on the four o\'clock van or a service driver within the hour at our cost. What he minded most was that he found out from his nephew."', 'Count the "minded most" answers that are about being told late. It is nearly all of them, in every class, in every trade.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the customer asked for it then: the next day she could only have said what she intended.  2 The loader checking against the **order** rather than the note — she says so: _that is the one that mattered_.  3 To his complaint that he heard it from his nephew — the promise is that he will hear it from her first.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Shelving order — delivered, and what we are changing', 'Dear Mr Haffar,', 'The shelving reached you on Thursday morning, two days later than we promised. Thank you for taking it as you did, and for telling me plainly that the problem was the promise and not the shelving.', '**What was wrong.** The order was sent to Aleppo a day after we told you it had gone, and nobody checked the sending date against what had been said on the telephone.', '**What we changed.** Orders over a million are now confirmed to the customer by message on the day they are actually sent — not the day they are written. Four have gone out that way since, and two of them were a day later than the office thought. That is the one that mattered.', 'If anything of yours slips again, you will hear it from me on the day, not from the lorry.', 'Best regards, Hala Mourad']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The fix reported with its time', '✓'],
  ['A thank-you for how they took it', '✓'],
  ['What changed, with the one that mattered named', '✓'],
  ['A last line about the real complaint', '✓ – the promise, not the shelving'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for a last line about what they actually minded, and yours is exactly that. The only thing I would ask is the number — _two of the four were a day later than the office thought_ is the proof, and it is buried in the middle."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the last lines. Ask whose customer would stay. The class is a reliable judge of this and the writers are usually surprised by which line wins.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A garage kept my car for nine days and told me nothing. Each time I telephoned, somebody said it would be ready tomorrow, and on the ninth day a different man told me the part had never been ordered. What I minded was not the nine days; it was that eight of those days somebody knew the part had not been ordered and said tomorrow anyway. One sentence would have changed all of it: the part is not ordered yet, I will order it today and telephone you when it has a date. I would have waited two weeks for that.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I would have waited two weeks for that"_   ✓ _the news is in the first line._   ? _Did you go back to that garage?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many ever heard what changed. Usually none — which is why the fortnight message in the Reading is both rare and worth more than it costs.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Sent to a customer whose delivery I lost in March: the goods went out the same week, and since April every collection is signed for on a numbered sheet. Two have been traced that way. You will not have to telephone me to find out where yours is.']));

// ===================== 15.6 =====================
out.push(pb());
out.push(h2('15.6  Let me check and telephone you back'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and worth doing in both languages: the Arabic version nearly always contains a time, and the English version nearly always does not. That is the gap this cycle closes.'));
out.push(p('**b**  The third keeps them. The first two leave the customer holding the problem.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (whether the wide wrap is in stock)   **b**  1 To telephone back within twenty minutes, on that number.  2 She gives two answers and one half-answer, says what she cannot confirm, refuses to promise Thursday, and sets a second time.'));
out.push(p('**Language box – Practise (samples):**  _Let me check the price list and I will telephone you back within ten minutes. · Let me look at the shelf — can I call you in a quarter of an hour on this number? · I will have to ask the manager; he is back at eleven and I will telephone you by half past._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'I need a price for three hundred rolls. Can you do better than the hundred price?'],
  ['A', 'Three hundred — let me put that to the manager and I will telephone you back by half past eleven. Is this number good for you?'],
  ['B', 'This number.'],
  ['A', 'Mr Samaan, it is Nour, twenty past. One answer and one half-answer. Three hundred is 6% below the hundred price, confirmed. The half-answer is delivery: three hundred will not go on one van, so it is two days unless we hire, and I have not been able to price the hire yet.'],
  ['B', 'And when will you know?'],
  ['A', 'By four o\'clock, and I will telephone you either way.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the promised time and the actual time. Early by a minute is the trick. Typical errors: _I will call you back after twenty minutes_ (English wants _within_ or _in_) · _let me to check_ · and the content fault of not calling back at all because there was nothing to say.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The question', 'Time I promised', 'What I had when I called back'], [
  ['40 m wide wrap, today?', 'within 20 minutes', '32 m, on the 3.30 van; 8 m not confirmed'],
  ['price for 300 rolls', 'by 11.30', '6% off, confirmed; delivery not priced'],
  ['is the motor under guarantee?', 'by 2 p.m.', 'invoice found, certificate not; asked the supplier'],
], [1.4, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"They asked whether we had forty metres of wide wrap for today. I said I would telephone back within twenty minutes. I telephoned at nineteen with two answers and one half-answer, and set a second time for four o\'clock."', 'Ask how many have ever telephoned back with nothing at all. It is the hardest call in the cycle and it buys more trust than any other single act in this book.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the promise was a time, and the two times together are the only proof it was kept.  2 Because it is the sentence that protects the company and the customer at the same time, and it is the one nobody thinks to write.  3 For whoever is in the office at four if she is not — it contains everything needed to make the call.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**CALL NOTE — Samaan Trading, 11.02 and 11.20**', '**Asked:** price for 300 rolls, and delivery.', '**Promised:** call back by 11.30. Called back at 11.20.', '**Answered:** 300 at 6% below the hundred price, confirmed by Mr Ayoub.', '**Not answered:** delivery. 300 will not fit on one van; two days unless we hire, and the hire is not priced. **I did not promise one delivery.**', '**Next:** I telephone him at 16.00 either way.', '**For whoever is here at 16.00 if I am not:** his number is on the quotation, the only open question is whether it is one delivery or two, and he is expecting the call. The hire price is with Fadi.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both call times', '✓'],
  ['What was answered and what was not', '✓'],
  ['What was **not** promised', '✓'],
  ['Enough for somebody else to make the next call', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for enough for somebody else to make the call, and yours has the open question and where the missing price is. The one thing missing is what to say if the hire price still is not there at four."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Have another student try to make the call from the note. The point at which they stop is exactly what the note is missing, and it teaches faster than any checklist.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I waited eleven days for a bank to telephone me back about a transfer. I telephoned four times and each time somebody took my number. What I did instead was go in twice, which took a morning each time, and in the end the answer was one sentence that anybody could have given me on the first day. One call would have saved me two mornings and the bank four conversations. I have never been able to decide whether nobody wrote my number down, or whether it was written down and nobody wanted to be the one to telephone with no news.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody wanted to be the one to telephone with no news"_   ✓ _no time was ever promised._   ? _Are you still with that bank?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many simply went elsewhere. Say the number out loud: it is the business case for the whole cycle and it comes from the class, not from the book.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['I telephoned a customer I owed a call to and told him I still had no date from the supplier. He said "thank you for telephoning" twice, which I did not expect, and then told me he had been about to order elsewhere.']));

// ===================== 15.7 =====================
out.push(pb());
out.push(h2('15.7  Review & Mediate: the problem report'));
out.push(stage('1', 'Get ready – Unit 15 quiz'));
out.push(p('**1** What it is doing · where exactly · since when, with a count · is it getting worse · what has been tried.  **2** _What about…? · Why don\'t we…? · We could… · Shall we…?_  **3** _Unless_ already means _if not_, so the verb after it stays positive.  **4** Because a timeline with names is read as an accusation and argued with line by line, and one without them is read as a sequence and fixed.  **5** What you will do · a time · a check of the number · and a call back, early, even with half an answer.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (that he is being blamed)   **b**  1 None.  2 To check the load against the **order** instead of the note, from Sunday.'));
out.push(p('**Language box – Practise (sample):**  "Count the names — there are none. Three people touched that order and the system let all three through. Look at the last paragraph: the driver was not the cause. The only thing it asks of you is to check the load against the order from Sunday, and that is a new instruction, not a complaint."'));
out.push(stage('3', 'Practise – sample with report 1'));
out.push(dlg(null, [
  ['B', 'I signed that gate record. It says fourteen boxes were recorded as received and were not on the shelf.'],
  ['A', 'Count the names.'],
  ['B', 'There are none.'],
  ['A', 'And read the last line: _not the cause — the gate, which recorded what arrived_. You are in that sentence, on the right side of it. The gate did its job; the fourteen boxes went somewhere between the gate and the shelf, and nobody checks that step at all.'],
  ['B', 'Then why is the gate in the report?'],
  ['A', 'Because it is where the trail starts and because your record is the only reason we know the boxes arrived. The thing it asks for is a second signature at the shelf, from Sunday.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that said what was being **asked**. Most reports contain exactly one and most readers stop at their own line before they reach it.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The line they saw themselves in', 'What it actually asks of them'], [
  ['Fadi', '"the load was checked against the note"', 'check against the order, from Sunday'],
  ['the gate keeper', '"the gate record was signed"', 'a second signature at the shelf'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a problem report about a short delivery. He saw himself in the loading line. There are no names in it at all. What it asks of him is to check the load against the order instead of the note, from Sunday."', '⚠ **The ordinal.** This is the **third** unit of Book 2, and the thing that matters most to the reader is again unwritten: that nobody is being blamed. A report in the passive can never quite say that, which is exactly why somebody has to.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _discrepancy · variance · root cause · escalate · workaround · contingency_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '_Out of order_ = not working; the notice sends you to the other printer.'],
  ['2', 'A', 'The passive with _without one line_: a line was left out at entry.'],
  ['3', 'B', '_Unless_ = if not. No part on Thursday → the repair waits.'],
  ['4', 'C', 'One line is missing and the rest has gone.'],
  ['5', 'B', '_Let me check and telephone you back_ — the speaker will make the call, soon.'],
  ['6', 'B', '_Not the cause_ names the three that are **not** to blame.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (30 words)'));
out.push(sample(null, ['Hi Nadia, the order screen is losing anything over twelve lines. I have tried another computer and reported it to the supplier. Could you enter the Homs order by hand before four?']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: what is wrong, in the first sentence ✓ · what has already been done ✓ · a request with a time ✓. Thirty words. ⚠ The commonest fault is a third point with no time — _could you have a look_ is not a request anybody can act on.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The order screen loses anything over twelve lines. It has been doing it since the update in January, two or three times a week. What is done each time is the same: the order is entered again in two halves, which takes about ten minutes and is sometimes forgotten, and twice a half has been lost. It was reported to the supplier in January and once more in March. What nobody has tried is counting it. If somebody wrote down every time it happened for a fortnight, the supplier would have a number instead of a complaint.']));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['FAULT REPORT — order screen. Doing: loses all lines over twelve, at save. Since: the January update. Count: 2–3 times a week, 14 recorded in a fortnight. Worse: no, steady. Tried: another computer, two reports. Stops: ten minutes each time; two half-orders lost. Asking for: a fix date.']));
out.push(pb());
out.push(stage('✓', 'Unit 15 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'c', 'a', 'b', 'a', 'c', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** A fault in progress takes the present continuous.  **2** _Why don\'t we_ + verb.  **3** _What about_ + **-ing**.  **4** _Unless_ = if not.  **5** Past simple passive: _was_ + past participle.  **6** _I am afraid_ + a clause.  **7** _Let me_ + bare verb.  **8** The agent takes **by**.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What it is doing', 'Where', 'Since', 'Getting worse', 'Tried'], [[
  'jamming after about ten pages', 'at the back, on the left', 'Thursday', 'yes — twice then, four times today', 'cleared it three times; other paper',
]], [1.3, 1.2, 0.9, 1.4, 1.4]));
out.push(note('Accept any clear wording. "It is broken" earns nothing for the first gap: the task is what it is **doing**.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (46 words)', ['Dear Mr Haffar, I am afraid two of the twenty boxes arrived crushed. The other eighteen are fine. It was our packing, not the carrier. Replacements are on tomorrow morning\'s van, with you before ten. If that is too late, I can send them today by service driver and we pay.']));
out.push(box('Marking the Unit 15 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'The news in the **first** sentence (2) · what is right (1) · ownership, plainly (1) · the fix **with a time** (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The first two marks are for **position**, not content. News in the third sentence scores 0 of 2 however well it is written, and saying so once is usually enough for a class to stop doing it for good.',
  '⚠ Do not take marks off for inventing the customer or the goods. Do take one off a fix with no time in it: a fix with no time is not a fix.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 15**'));
out.push(p('**1 The present simple for a fault in progress.** _It jams_ claims the machine always jams; _it is jamming_ says it is doing it now. The difference matters to a repair man and the learners can hear it once it is pointed at. Expect it back in Unit 20 with repairs.'));
out.push(p('**2 The double negative with _unless_.** _Unless we do not order_ says the opposite of what the speaker means and it survives correction. Drill it as a swap — _unless_ **is** _if not_, so take the _not_ out — and come back to it in Unit 19 with conditional offers.'));
out.push(p('**3 The passive used to avoid rather than to describe.** Watch for learners who discover that the passive hides the person and start using it for everything, including their own actions. The test is the one in 15.4: would the sentence be fairer or less fair with the name in it? Ask it every time, and let them answer.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 15 · Answer Key');
