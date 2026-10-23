// Proactive Business English A2 · Syria Edition · Book 2 · Unit 20 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 20  Services and Repairs'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit turns on arithmetic the learners already have.** The shutter adjusted four times at 120,000 against a switch at 300,000; the regas twice a year against finding the leak. Every cycle has the same shape: the temporary repair is the expensive one, and nobody has added it up. Make them add it up.',
  '⚠ **The word to watch all the way through is _temporary_.** A temporary repair with no review date becomes a permanent one that nobody knows about. 20.4 makes the date part of the record and 20.6 makes somebody responsible for chasing it.',
], C.grey, C.navy));

// ===================== 20.1 =====================
out.push(h2('20.1  The shutter needs adjusting'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open — and "for a while" is the part that produces the useful answers.'));
out.push(p('**b**  Both are correct. _Needs adjusting_ is shorter and is what people say; _needs to be adjusted_ is not wrong.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (the shutter)   **b**  1 It has been adjusted four times since March, right for about a fortnight each time.  2 Because adjusting is what has been paid for four times and it is not what the shutter needs — the bottom limit switch needs replacing.'));
out.push(p('**Language box – Practise (samples):**  _The van pulls left under braking; it needs a brake hose; it has been checked three times. · The printer jams after ten pages; it needs a feed roller; it has been cleared four times this month._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I am writing the list for the garage. The van needs looking at.'],
  ['B', 'The van does not need looking at. It has been looked at three times since the rain in March.'],
  ['A', 'What does it need, then?'],
  ['B', 'A front brake hose. It pulls left under braking and it has done since March. A hose is about 180,000 and three inspections are about 240,000.'],
  ['A', 'Then why has nobody said that?'],
  ['B', 'I have said it. I have never written it down.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the arithmetic — the part against the repeated visits — and it is almost always the part that is cheaper. Typical errors: _it needs to fix_ · _it needs repair it_ · _it needs fixed_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'What it does', 'What it needs', 'How many times already'], [
  ['loading bay shutter', 'stops a metre from the ground', 'bottom limit switch', '4 since March, ~120,000 each'],
  ['air conditioner', 'cools 20 min, then warm', 'the leak found', 'regassed twice, 150,000 each'],
  ['van', 'pulls left under braking', 'a front brake hose', 'checked 3 times, nothing changed'],
  ['yard light', 'does not come on', 'unknown — not touched before', 'none'],
], [1, 1.4, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The air conditioner needs the leak found, not regassing. It cools for twenty minutes and then blows warm, every day since June, and it has been regassed twice at a hundred and fifty thousand each."', 'Ask what the part would have cost the first time. The answer is usually less than what has been spent on not fitting it, and the class works that out without help.']));
out.push(stage('5', 'Read'));
out.push(p('1 They show the **pattern** — about once a quarter, and getting closer together — which "four times" alone does not.  2 The van. It is there for information, so that the repair man knows the vehicle when something related comes up.  3 It asks for a permanent repair rather than a fifth temporary one, and it offers a telephone call if the price goes over 500,000.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**MAINTENANCE LIST — for the visit on Tuesday**', '**1 Cold store door.** Does not seal at the bottom; there is ice on the floor inside every morning. Since October. The seal has been **re-fitted twice** — 4 October, 19 November — and holds for about three weeks. **We believe the seal itself is worn.** Please bring one.', '**2 Yard tap.** Runs continuously, about the thickness of a pencil. Since before March last year. Never touched. **We believe it is the washer or the whole tap.**', '**3 Fire door, side.** Closes but does not latch. Not urgent for Tuesday, but it is a fire door, so it is on the list and it will stay on it.', '⚠ Item 1 has now been paid for twice. We are not asking for a third re-fit; if a new seal and fitting is more than 400,000 please telephone first.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_needs_ + -ing correct', '✓'],
  ['The symptom, exactly', '✓ – ice on the floor'],
  ['Dates of previous repairs', '✓ – 4 Oct, 19 Nov'],
  ['A limit with an offer to be telephoned', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says name the part if you know it, and item 1 does. Item 3 I would ask about — _it will stay on it_ is the strongest sentence on the page and it is doing no work, because there is no date on it."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read item 1 from several lists. The class picks the one that would get the part brought on the first visit, and they are right every time.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The office air conditioner has been regassed every June and every September for three years. That is six times at about a hundred and fifty thousand, which is nine hundred thousand, and every one of those visits took half a morning of somebody waiting in. A leak test and a new seal was quoted at four hundred thousand in the first year and nobody approved it because four hundred thousand was a lot and a hundred and fifty was not. That is how we spent nine hundred thousand to avoid spending four.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"we spent nine hundred thousand to avoid spending four"_   ✓ _needs + -ing correct._   ? _Who could approve the four hundred now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Add up what the room has spent on temporary repairs. It is always more than the permanent ones would have cost, and it is the only arithmetic lesson in this book that produces silence.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Found four invoices for the shutter: 118,000, 120,000, 125,000 and 125,000 — 488,000 in nine months. The switch is 300,000 and the motor, which we now know was the real fault, is 850,000. Nobody had put the four invoices next to each other before.']));

// ===================== 20.2 =====================
out.push(pb());
out.push(h2('20.2  When can you come?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners say nothing, which is why "next week" works on everybody.'));
out.push(p('**b**  Least to most useful: next week · Thursday · Thursday morning · Thursday between nine and one · Thursday at ten. ⚠ The last is the most useful **and the least likely to be true**, which is why the window is the real answer.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Thursday between nine and one)   **b**  1 A time — he cannot give one.  2 A window, plus a telephone call when he leaves the previous job and early bad news by nine; enough because the deliveries can be moved at nine and not at twelve.'));
out.push(p('**Language box – Practise (sample):**  "Could you make it a time? We have to close the bay. Between nine and one, then — and would you telephone when you leave the job before mine? And if it runs long, tell me by nine rather than at twelve."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'I can come on Tuesday.'],
  ['A', 'Tuesday is good. What time?'],
  ['B', 'In the afternoon, probably.'],
  ['A', 'Could you make it a time? The generator has to be off while you work, and that is the cold store, so I have to move stock to the neighbour.'],
  ['B', 'Between one and five. I cannot be closer.'],
  ['A', 'Between one and five, then. Would you telephone when you leave the job before mine, so that I have an hour? And if the earlier job runs long, would you tell me by eleven rather than at four?'],
  ['B', 'Nobody asks me that.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the early-bad-news question and note whether the other person had been asked it before. Typical errors: _when you can come?_ (word order in a question) · _at Thursday_ · _in nine and one_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who / what', 'The window I got', 'Why I needed it', 'The early-bad-news question'], [
  ['the shutter man', 'Thu 9–1', 'the bay is closed; three deliveries move', 'tell me by nine, not at twelve'],
  ['the generator service', 'Tue 1–5', 'the cold store goes off', 'tell me by eleven'],
  ['the Aleppo customer', 'Tue before noon', 'Mr Ayoub is at the bank in the morning', 'tell me Monday if it slips'],
], [1.1, 1, 1.4, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"He said next week. I asked for a time and got Thursday between nine and one. I asked him to tell me by nine if the earlier job runs long, because by twelve I will have moved three deliveries."', 'Count the people who have ever asked for early bad news. It is nearly always nobody, and it is the sentence from this unit most likely to be used on Monday.']));
out.push(stage('5', 'Read'));
out.push(p('1 So that the technician can reach somebody on the day — half of all missed visits are a man outside a gate telephoning a desk nobody is at.  2 It says when the thing can actually be worked on and why, which lets him choose the right slot rather than the first one.  3 That the company would rather pay once for the switch than four more times for adjustments.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SERVICE REQUEST — cold store door seal**', '**From:** Haddad Stores, Mezzeh. Contact: Rana, 011 ___ ____ (and 09__ ___ ___ on the day).', '**The fault.** The door does not seal at the bottom. Ice on the floor inside every morning. **Since** October. Seal re-fitted twice: 4 October, 19 November.', '**What we believe it needs.** A new seal, not another re-fit.', '**Access.** The store must be emptied before you work on it, which takes an hour. Tuesday between 13.00 and 17.00 is the only slot this week.', '**Before you come.** Please telephone when you leave the job before ours, so that we have an hour to empty it. If the earlier job runs long, tell us **by 11.00** — after that the stock has already moved and the morning is lost.', '**Cost.** Please telephone before starting if it will be more than 400,000. We have paid for two re-fits and would rather pay once for a seal.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Two telephone numbers', '✓'],
  ['The fault with dates', '✓'],
  ['Access, with the reason', '✓ – the hour to empty it'],
  ['A cost limit with a reason', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says access is not the same as the appointment, and yours shows exactly why — the hour of emptying. The line I would look at is the eleven o\'clock: it is the best sentence here and a reader in a hurry might take it for a second appointment time."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "before you come" sections. Ask the class which request they would answer first if they were the technician; it is always the one that respects their day.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A man came to service the generator on a day nobody had confirmed. He arrived at eight, the cold store was full, and we could not let him turn it off. He waited forty minutes, went away, and came back eleven days later. He was not at fault and neither were we: the date had been agreed by telephone with somebody who left in between. One sentence would have prevented it — a message the same day with the date in the subject line — and nobody wrote it because the call had gone well.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"nobody wrote it because the call had gone well"_   ✓ _was a window agreed?_   ? _Who confirms visits now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many failures were about the **time** rather than the work. Nearly all of them, which is the argument for the whole cycle.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Telephoned the garage about the hose. Got Wednesday between eight and eleven, a call when he leaves the job before, and a promise to tell me by eight if it slips. He sounded surprised and then said it was easier for him too.']));

// ===================== 20.3 =====================
out.push(pb());
out.push(h2('20.3  It is still not working'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most people stop at two calls, which is exactly one short.'));
out.push(p('**b**  _Still_ is stronger than the plain negative: it adds the time that has passed. _Has not worked since you came_ is stronger again, because it carries the visit in it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the same fault, after a repair)   **b**  1 He came on the 11th; it worked on the 11th and 12th; it failed on Sunday the 14th with the same fault.  2 Not an apology but an agreement about what happens next — plus the three questions.'));
out.push(p('**Language box – Practise (sample):**  "It is still not working. You came on the 3rd, it worked for nine days, and it has been warm since the 12th. I am not telephoning to complain; I am telephoning to agree what happens next. What do you think it is? What will it cost? And is the June gas covered?"'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Barakat, it is Nour. The order is short again — the same two lines as on the fourth. Short on the fourth, short on the eighteenth, the same two lines both times.'],
  ['B', 'I am sorry. I will send them today.'],
  ['A', 'Thank you. I am not telephoning to complain; I am telephoning to agree what happens next. Three things. What has changed in your picking since October? What will the credit be? And will the December order be checked against the sheet before it leaves you?'],
  ['B', 'Checked before it leaves. I will do it myself.'],
  ['A', 'Then December checked by you, the credit this week, and I will put that in a message so that we both have it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that said what the call was for, and whether the other person became defensive or helpful. It is almost always helpful, which surprises the class. Typical errors: _it is not working still_ (word order) · _since two weeks_ · an apology demanded instead of a plan agreed.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'The three facts', 'What I asked for', 'What I got'], [
  ['the shutter man', 'came 11th; worked 2 days; failed 14th, same fault', 'what now, what cost, is it covered', 'Wed 9–1, motor 900,000, no call-out'],
  ['the wholesaler', 'short 4th; short 18th; same two lines', 'what changed, the credit, a check in December', 'he will check December himself'],
], [0.9, 1.8, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The air conditioner is still not working. He came on the third, it worked for nine days, and it has blown warm since the twelfth. I asked what he thought it was now, what it would cost, and whether the June gas was covered — and half of it was."', 'Ask how many second calls got a better outcome than the first. It is usually most, and it is the reason to make the second call rather than start again somewhere else.']));
out.push(stage('5', 'Read'));
out.push(p('1 It carries the **agreement**: Wednesday 9–1, the motor at 900,000, no call-out — findable in six months without opening anything.  2 Because the telephone call is the agreement and the message is the record, and only the record exists in March.  3 It thanks him for the December warning that the switch might not be the only thing — which is why the second call was short, and which makes the next warning come earlier.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Cold store seal — same fault again, agreed Tuesday 1–5, new seal at 380,000, no call-out', 'Mr Rateb,', 'Thank you for the call. This is what we agreed, so that we both have it.', '**What has happened.** You re-fitted the seal on 19 November. It held until about 10 December. There has been ice on the floor every morning since — the same fault as in October.', '**What we agreed.** You come on Tuesday the 16th between 13.00 and 17.00 and fit a new seal, not a re-fit. The seal and fitting is about 380,000. No call-out, because it is the same fault within a month.', '**If it is not the seal**, please stop and telephone me before doing anything over 400,000.', 'If I have any of this wrong, one line back is enough.', 'Thank you — and thank you for saying in November that a re-fit might not hold a second time. You were right, and it is why this is a short message.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The agreement in the subject line', '✓'],
  ['Dates for what happened', '✓'],
  ['The money agreed, in figures', '✓ – 380,000'],
  ['A thank-you for an honest warning', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says put the agreement in the subject line and yours carries all three parts of it. The line I would look at is _it held until about 10 December_ — _about_ is doing a lot of work in a record. Could you find the day?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the subject lines alone. If the class can say what was agreed from the subject line, the message will still work in six months.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The fire door has not latched since August. It was reported in August, again in October, and again when the insurance man came in November and wrote it on his form. Each time somebody has said they will look at it. I have asked three times and I have never once asked the three questions — what do you think it is, what will it cost, and who is responsible for it — because it is not my door and not my budget. The next step is to tell Mr Ayoub, in writing, with the insurance man\'s form attached.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"with the insurance man\'s form attached"_   ✓ _still / since correct._   ? _Why has nobody above you been told?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts nobody above the writer has been told, and that is the next step. Say it plainly; it is not disloyalty, it is the third call.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Second call about the fire door. Three facts: reported in August, again in October, on the insurance form in November. Three questions: what is it, what will it cost, who approves it. Answer: a new latch, about 90,000, and Mr Ayoub, who did not know.']));

// ===================== 20.4 =====================
out.push(pb());
out.push(h2('20.4  It was repaired on Wednesday'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The third question — is it written down — is almost always no.'));
out.push(p('**b**  The switch **was replaced**. It **was not tested**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a record of the repair)   **b**  1 The motor replaced on the 17th by Rateb; the switch replaced on the 11th and it was not the fault; the wiring not replaced, twenty years old, recommended within twelve months.  2 Because a repair that leaves old wiring in place is temporary whether or not anybody uses the word — and a temporary repair with no date is one nobody will ever do.'));
out.push(p('**Language box – Practise (sample, a vehicle):**  "The brake hose was replaced on 3 March by Jaramana Motors. The pads were checked on 10 February and were not the fault. The second hose was not replaced and is the same age. Review: September."'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Right — the book. In October two tiles were replaced by the roofer from the market.'],
  ['B', 'And the gutter was cleared in August, by the same man, and it was not the cause.'],
  ['A', 'Should that go in? It did not fix it.'],
  ['B', 'Especially that. In two years somebody will say the gutter has never been looked at.'],
  ['A', 'And the flashing?'],
  ['B', 'Say it plainly: the flashing was **not** replaced. He said it has one more winter in it. That is a temporary repair whether he calls it one or not. Write September.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the "not done" line and the review date; both are missing from almost every real record. Typical errors: _it was repair_ · _it was replaced from the engineer_ (the agent takes **by**) · _it was happened_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What was done', 'By whom', 'What was NOT done', 'Review'], [
  ['motor replaced, 17 Dec', 'Rateb Engineering', 'the wiring — 20 years old, ~450,000', 'December'],
  ['two tiles replaced, October', 'the roofer from the market', 'the flashing — one more winter', 'September'],
  ['brake hose replaced, 3 March', 'Jaramana Motors', 'the second hose, same age', 'September'],
], [1.4, 1, 1.6, 0.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The motor was replaced on the seventeenth of December by Rateb Engineering. The wiring was not replaced; it is twenty years old and he recommended twelve months. Review: December."', 'Count how many of these records existed before today, and then ask who will keep the book. Somebody has to own it or it stops after a fortnight.']));
out.push(stage('5', 'Read'));
out.push(p('1 The 11 December switch — it is there so that nobody changes the switch again in two years believing it has never been done.  2 About 480,000; putting it in the record is what prevents the next four adjustments.  3 Who wrote it and **from what** — the invoice and Abu Yasser\'s account — so that a future reader knows how reliable each line is.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**REPAIR BOOK — cold store door**', '**16 Dec.** New seal fitted **by** Rateb Engineering. 380,000. No call-out (same fault within a month). Door checked closed and sealed; no ice on the morning of the 17th.', '**19 Nov.** Seal re-fitted by Rateb Engineering. 140,000. **This did not hold** — ice again from about 10 December.', '**4 Oct.** Seal re-fitted, same firm, 140,000. Held about six weeks.', '**Total spent on re-fitting before a new seal was bought: 280,000.** A new seal was 380,000 from the beginning.', '**Not done.** The door hinges were **not** adjusted. Rateb said the door is dropping slightly and that this will shorten the life of any seal. About 200,000. Not urgent.', '**Review: June** — or sooner if there is ice on any morning.', '_Written by Rana, 17 December, from the three invoices and Rateb\'s note on the last one._']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Passive with _by_ where it matters', '✓'],
  ['The failed repair recorded', '✓ – 19 Nov, "did not hold"'],
  ['A "not done" with a price and a timescale', '✓ – hinges, 200,000'],
  ['A review date, and who wrote it from what', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the running total prevents the next repair, and 280,000 against 380,000 is the whole argument in one line. The line I would look at is the hinges — _not urgent_ is somebody else\'s opinion. Whose, and does the review date cover it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "not done" lines. The class names which one will be the next expensive surprise, and they are usually right.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Three years ago somebody rewired the office lights after a fire scare. We do not know who. There is no invoice, no name and no date, and the only person who remembers is Abu Yasser, who says it was a man a neighbour recommended and that he did a good job. Nothing was left in writing about what was replaced and what was not. If we wanted to know now whether the old circuit is still behind the wall, we would have to pay an electrician to open it — about 200,000 to find out what one piece of paper would have told us free.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"200,000 to find out what one piece of paper would have told us free"_   ✓ _passive correct._   ? _Could Abu Yasser write what he remembers, now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most texts one person\'s memory holds the whole history, and that person is usually in the building and has never been asked to write it down. That is the homework, and it is urgent in a way the learners feel.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Started a repair book for the van. Four entries from the garage\'s invoices, newest first, with what was not done on each. Showed it to Fadi, who added two repairs that had no invoice because they were paid in cash at the roadside.']));

// ===================== 20.5 =====================
out.push(pb());
out.push(h2('20.5  How much will it cost?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and everybody has one. The story usually ends with the invoice being paid and the person not being used again.'));
out.push(p('**b**  The third. A range with "including" in it can be planned with; _about 900,000_ is a hope and _not expensive_ is nothing.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the price, what is included, and what happens if it is more)   **b**  1 Anything that takes it over a million — and originally the brackets.  2 He stops and telephones **before** doing it; and if nobody answers he does nothing and is paid for the visit.'));
out.push(p('**Language box – Practise (sample, a vehicle service):**  "How much will it cost? Does that include the filters? Is there anything else — brake work, the collection? If it goes over 500,000 will you stop and telephone me before doing it? And if I do not answer?"'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Before you start — how much will it cost?'],
  ['B', 'The repointing is about one million two.'],
  ['A', 'One point two including what?'],
  ['B', 'The work and the materials.'],
  ['A', 'And does it include the scaffolding, making good the paint, and taking the rubble away?'],
  ['B', 'The scaffolding is about two hundred. The paint is yours. The rubble, say fifty.'],
  ['A', 'Then one million four fifty, and the paint is ours. If anything takes it over one and a half, you stop and telephone me before you do it. And if I do not answer, you do nothing and we pay for the day.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write everything that was **not** in the first figure. The list is usually longer than the figure. Typical errors: _how much it will cost?_ · _it costs about to nine hundred_ · asking about money at the end instead of the beginning.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The job', 'The figure', 'What was NOT included', 'The limit agreed'], [
  ['shutter motor', '950,000', 'the wiring; anything over a million', 'telephone over 1,000,000'],
  ['vehicle service', '400,000', 'filters, brake work, collection', 'telephone over 500,000'],
  ['repointing', '1.2 m', 'scaffolding, paint, rubble', 'telephone over 1.5 m'],
], [1.1, 0.8, 1.9, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"They said one million two. It did not include the scaffolding, the paint or taking the rubble away, which is another two hundred and fifty. We agreed that over one and a half they stop and telephone before doing it."', 'Ask for the biggest thing left out of a first figure. In most rooms it is more than a quarter of the figure, which is why the question gets asked next time.']));
out.push(stage('5', 'Read'));
out.push(p('1 The motor (about 850,000), the fitting, and the brackets (about 50,000) — priced separately so that when the invoice comes you can see which part moved.  2 That the technician does nothing further and the company pays for the visit.  3 So that he is not out of pocket for obeying the limit — otherwise he will not obey it a second time.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Repointing the yard wall — agreed 1,450,000, stop and telephone over 1,500,000', 'Mr Deeb,', 'Confirming what we agreed this morning, before you start on Saturday.', '**Included at 1,450,000:** the repointing itself (1,200,000), the scaffolding (200,000) and taking the rubble away (50,000).', '**Not included:** making good the paint, which is ours, and anything structural if you find it.', '**The limit.** If the work is going to go over **1,500,000**, please stop and telephone me **before** doing it. 011 ___ ____ in the office, 09__ ___ ___ all day.', '**If you cannot reach me:** stop and we will pay for the day. I would rather pay for a Saturday than be surprised by an invoice, and I am putting that in writing so that you are not out of pocket for doing the right thing.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The limit in the subject line', '✓'],
  ['Parts priced separately inside the total', '✓'],
  ['Two telephone numbers', '✓'],
  ['What happens if nobody answers', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says protect the other person, and the last paragraph does it in the words that matter — _so that you are not out of pocket_. The line I would look at is _anything structural if you find it_: that is the most expensive sentence on the page and it has no number near it."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "if you cannot reach me" lines. Ask which technician would telephone next time; the class sees the mechanism immediately.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['A garage quoted four hundred thousand for a service and invoiced nine hundred and twenty. The extra was two tyres, a battery and an hour of diagnostics, and all three were probably needed. Nobody had asked what was included and nobody had set a limit, so the garage did what garages do and we paid it, because arguing afterwards would have cost the relationship and we were going to need them in the winter. What nobody said was the only sentence that mattered: telephone me before you spend more than five hundred. It would have taken four seconds.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"arguing afterwards would have cost the relationship"_   ✓ _the five questions._   ? _Did anybody say the sentence the next time?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the surprises that one sentence before the work would have prevented. It is nearly all of them, which is the cheapest lesson in this unit.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Asked the five questions before the printer service. The quoted 180,000 did not include the drum, which is 260,000 and which he said was "due". So the real decision was 440,000, not 180,000, and I could take it before he started.']));

// ===================== 20.6 =====================
out.push(pb());
out.push(h2('20.6  Thank you for coming so quickly'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the "why not" is usually that it is their job — which is also true of everybody who is thanked.'));
out.push(p('**b**  The second. The fact is what makes the thanks worth something, and it is what the person repeats at home.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (coming the same day, and the warning he gave)   **b**  1 The state of the job — what is done, what it cost, what is not done, and a review date.  2 A line for his reference file; she agrees and says she will include the December warning in it.'));
out.push(p('**Language box – Practise (sample):**  "Thank you for coming on the same day — the lorry went out at four because of it. And thank you for telling me in December that the switch might not be the only thing."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Thank you for telephoning in March before the shipment was late. Thirty rolls came by bus and no customer waited.'],
  ['B', 'It was nothing.'],
  ['A', 'It was not nothing; nobody else telephones before it is news. Thank you also for saying you did not know how long it would be, instead of guessing. That is why I planned for ten days.'],
  ['B', 'People do not usually remember that part.'],
  ['A', 'Then: the quarter\'s order is three hundred, the price is held to December, and the hundred-roll question is still open. I will come back to you on that in November.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the thing thanked that was **not** the work itself. Typical errors: _thank you for come_ · _thanks for you help_ · _thank you to tell me_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What they did', 'What it made possible', 'The warning or the honest thing'], [
  ['the technician', 'came the same day', 'the lorry went out at four', 'said in December the switch might not be it'],
  ['Ms Shamsi', 'telephoned before it was news', 'thirty rolls by bus; nobody waited', 'said she did not know how long'],
  ['Abu Yasser', 'kept the book for nine years', 'we traded through nine days', 'told Nadia the eleven minutes were worth it'],
], [0.8, 1.3, 1.5, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I thanked Ms Shamsi for telephoning before the delay was news. Because of it, thirty rolls came by bus and no customer waited. I also thanked her for saying she did not know how long it would be, instead of guessing."', 'Count how many had ever been thanked for that thing before. It is nearly always none, and the room usually goes quiet at that point too.']));
out.push(stage('5', 'Read'));
out.push(p('1 Coming the same day, and saying in December that the switch might not be the only thing — the second is unusual, because it is thanks for an unwelcome warning.  2 Nour will telephone about the wiring; the review is written as December.  3 The December warning — because that is the part that makes him worth telephoning, and saying so is both true and useful to him.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Cold store seal — done, 380,000, hinges open for June', 'Mr Rateb,', 'Thank you for coming on Tuesday afternoon. We did not lose any stock and the morning ice has stopped.', 'Thank you also for saying in November that a re-fit might not hold a second time. You were right, and because you had said it, nobody here argued about paying for a new seal.', '**Done:** new seal fitted 16 December, **380,000**, no call-out.', '**Not done:** the hinges. You said the door is dropping slightly and that it will shorten the life of any seal. About 200,000, not urgent. **I have written June in our book and I will telephone you in May.**', '**In return:** if anybody asks me for somebody who does cold store work, I will give them your number, and I will tell them about the November warning.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_thank you for_ + -ing with what it made possible', '✓'],
  ['The unwelcome warning thanked', '✓'],
  ['Done and not done, separately', '✓'],
  ['An owner and a month for the open item', '✓ – Rana, May'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says offer something back, and yours is the best kind — a recommendation with the reason attached. The line I would look at is _not urgent_: it is his word, and it is the one that will still be sitting there in two years."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the second thank-you — the one for the warning. Ask which supplier would come on the same day next time; the class answers without hesitating.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['The man who collects our cardboard has come every Thursday for seven years and nobody has ever thanked him. He is not a supplier and not a customer; he takes something away that we would otherwise pay to have removed, and he sorts it himself in the yard without being asked. Nobody says anything because he is not a company and there is nobody to write to. I would write to him by giving him the note in person, and it would say that in seven years he has not missed a Thursday, which is more than the lorry has managed.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"more than the lorry has managed"_   ✓ _thank you for + -ing._   ? _Will you give it to him on Thursday?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask who will send or give theirs this week. This is the cycle most likely in the whole book to produce something that happens outside the classroom — ask again in the next lesson.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Gave the note to the cardboard man on Thursday. He read it twice, put it in his coat and said nobody had ever written his name down. Then he asked whether we had any more pallets, which I think was him being embarrassed.']));

// ===================== 20.7 =====================
out.push(pb());
out.push(h2('20.7  Review & Mediate: the service request'));
out.push(stage('1', 'Get ready – Unit 20 quiz'));
out.push(p('**1** The shutter needs **adjusting** / needs **to be adjusted**.  **2** It is not a time; it cannot be planned around. Ask for a window.  **3** The date of the visit, how long it worked, and the date it failed again.  **4** The line that says what was **not** done.  **5** How much · what is included · what is not · the limit · and what happens if nobody answers.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (he thinks it covers everything)   **b**  1 Scheduled servicing and labour — four visits a year, about 600,000 of labour.  2 That _parts_ means everything the man fits, so the agreement pays for him to look and not for what he finds.'));
out.push(p('**Language box – Practise (sample):**  "Read the line under it. _Scheduled servicing and labour_ — labour is his time. _Parts chargeable_ — parts are everything he fits. So it pays for him to look and not for the hose. It is worth about 600,000 a year and it is not insurance. The word that misleads everybody is _all_."'));
out.push(stage('3', 'Practise – sample with agreement 1'));
out.push(dlg(null, [
  ['B', 'The shutter is guaranteed for twelve months, so anything that goes wrong with it is theirs.'],
  ['A', 'Read me the second sentence.'],
  ['B', '"The guarantee covers the replaced part and the labour of replacing it. It does not cover consequential damage, wear items, or faults arising from a different component."'],
  ['A', 'Then it covers the motor and fitting the motor. It does not cover the wiring, because that is a different component, and it does not cover the day we could not load, because that is consequential.'],
  ['B', 'So what is it worth?'],
  ['A', 'If the motor fails again before December, he fits another one free — that is 900,000. It is worth having and it is not cover for the shutter. The word that misleads everybody is _guaranteed_.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one word that did the damage and what the document is actually worth. Both halves matter: a mediation that only says what is **not** covered is half a mediation.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'What they thought it covered', 'The word that misled them'], [
  ['Fadi', 'any repair to the van', '"all servicing included"'],
  ['the counter', 'any shutter fault for a year', '"guaranteed"'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a maintenance agreement. He thought it covered the brake hose. The word was _all_. It actually covers scheduled servicing and labour — four visits a year, about 600,000 — which is worth having and is not insurance."', '⚠ **The ordinal.** This is the **eighth** unit of Book 2, and the unwritten thing is a single word. Every agreement has one word that everybody reads as more than it says, and the document never tells you which. Keep the claim in every cycle 7.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _labour · parts · consumables · scheduled · call-out · wear items_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'B', '_Chargeable_ means you are charged for them.'],
  ['2', 'B', '_Needs_ + -ing describes work that must be done.'],
  ['3', 'B', 'A window, not a fixed time and not the whole day.'],
  ['4', 'C', '_Still_ carries the repair and the continuing fault.'],
  ['5', 'B', 'Permission is required **before** exceeding the limit.'],
  ['6', 'B', 'Not replaced, and recommended inside a year.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (30 words)'));
out.push(sample(null, ['Do not use the loading bay shutter. It stops a metre from the ground. The technician is coming on Wednesday between nine and one. Use the side door until then.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: what is wrong ✓ · when somebody is coming, as a window ✓ · the negative imperative, first ✓. Thirty words. ⚠ The commonest fault is putting the instruction last, where a person in a hurry never reaches it.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Everybody believes the yard lighting is the landlord\'s. The lease says he is responsible for the structure and the supply, and that fittings and lamps are the tenant\'s. The lamps have not worked on the east wall since November and each side has been waiting for the other since then. If somebody fell on the ramp tomorrow, the question would not be who was responsible for the lamp; it would be who knew it was dark and did nothing, and the answer is written in three of our own emails.']));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['The word in our cleaning contract is _regular_. "Regular cleaning of communal areas" — regular is not a frequency, and when we asked, it turned out to mean twice a month, which everybody had assumed was weekly.']));
out.push(pb());
out.push(stage('✓', 'Unit 20 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'a', 'b', 'c', 'a', 'a', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _needs_ + **-ing**.  **2** _needs **to be** replaced_.  **3** _When can you come?_ — question word order.  **4** _between_ … and ….  **5** _still_ for a continuing problem.  **6** Past passive: _was replaced_.  **7** _How much will it cost?_ — the auxiliary comes before the subject.  **8** _thank you for_ + **-ing**.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What it needs', 'Day and window', 'Price, including', 'Not included', 'Limit'], [[
  'the motor, not the switch', 'Wednesday, 9 to 1', '950,000, fitting and brackets', 'the wiring (~450,000); no call-out', 'stop and telephone over 1,000,000',
]], [1.2, 1.1, 1.5, 1.5, 1.6]));
out.push(note('"No call-out" may be written under either the included or the not-included gap; both show the candidate heard it.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (52 words)', ['Included at 950,000: the motor, the fitting, and the brackets if they need changing. Not included: the wiring, which is separate and about 450,000. If the work goes over 1,000,000, please stop and telephone me before doing it. If you cannot reach me, do nothing and we will pay for the visit.']));
out.push(box('Marking the Unit 20 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'What is included (2) · what is **not** (2) · the limit, with **before** (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The limit must contain the word **before** or an equivalent. _Telephone me if it is more_ scores 1 of 2: in practice that call comes after the work is done.',
  '⚠ Accept invented figures. Do not accept a confirmation with no "not included" line — that is the half of the task that prevents the surprise.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 20**'));
out.push(p('**1 _needs to fix_ and _needs fixed_.** Two shapes, one meaning: _needs **fixing**_ and _needs **to be fixed**_. Drill both as chunks and let the learners choose; the error is always an attempt to merge them.'));
out.push(p('**2 Accepting a vague time.** Not a grammar fault. A learner who accepts "in the morning" will lose a morning, and no amount of English fixes it. Practise the single question — _could you make it a time?_ — until it is automatic, and then the window question behind it.'));
out.push(p('**3 Asking about money last, or not at all.** In much of the world asking the price early feels rude; in business English it is the opposite, and a learner who waits until the end will be surprised by an invoice. Say that plainly. The five questions in 20.5 are the whole defence and they take fifteen seconds.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 20 · Answer Key');
