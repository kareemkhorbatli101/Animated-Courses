// Proactive Business English A2 · Syria Edition · Book 2 · Unit 17 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 17  Training and Learning at Work'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **17.6 is the cycle that matters most in this unit and it produces real documents.** Learners ask a colleague to show them something for ten minutes, write the steps, and leave them where the next person will find them. In most workplaces that step sheet is the first time the task has ever been written down. Ask for them in the following lesson and read two aloud.',
  '⚠ The unit asks learners to name weaknesses. Mark the English and never the weakness, and watch for the one in 17.5: almost everybody names a smaller strength for themselves than a colleague names for them, and hearing that said out loud is half the cycle.',
], C.grey, C.navy));

// ===================== 17.1 =====================
out.push(h2('17.1  I would like to learn the accounts system'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Push for an **ability**, not a course — the instruction says so and learners will still name a course first.'));
out.push(p('**b**  The third. _I want_ is too blunt for a request upwards; _I would like to do the course_ asks for three evenings; _I would like to be able to close the month on my own_ asks for a result and gives a reason.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (to learn the accounts system)   **b**  1 Nadia is away twice a year for a fortnight and last September the month closed four days late.  2 _What would it take?_ — she has already worked out both options.'));
out.push(p('**Language box – Practise (samples):**  _I would like to be able to run the stock report when Abu Yasser is away. It could be an afternoon with him, or the two-day course at the Chamber._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Mr Ayoub, can I ask you something about the spring? I would like to learn the forklift properly.'],
  ['B', 'You work next to it every day.'],
  ['A', 'I stand next to it. I would like to be able to move pallets when Samir is away, and to do it with a licence rather than because nobody is looking.'],
  ['B', 'And when is he away?'],
  ['A', 'About three weeks a year, and last year the picking stopped twice for half a day.'],
  ['B', 'What would it take?'],
  ['A', 'A two-day course with a test, 600,000, or a licensed man supervising me for a month. The course costs money and the month costs his time.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **cost of not training** — days, stoppages, money. Typical errors: _I would like learn_ · _I want that you show me_ · and the content fault of asking for a course with no reason attached.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['I\'d like to be able to…', 'What it costs us now', 'Way 1', 'Way 2'], [
  ['close the month alone', '4 days late last September', 'Chamber course, 420,000', 'an hour a week with Nadia'],
  ['move pallets', 'picking stopped twice', 'two-day course, 600,000', 'a month of supervision'],
  ['take the Aleppo calls', '4 calls a week passed on', 'evening class, 10 weeks', 'half an hour a day with Hala'],
], [1.5, 1.4, 1.1, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I would like to be able to close the month on my own. At the moment two weeks of the year depend on one person, and last September that cost four days and two wrong statements. It could be the Chamber course or an hour a week with Nadia."', 'Ask which request the class would approve if the money were theirs. It is reliably the one with the number in it, and they will say so before the teacher does.']));
out.push(stage('5', 'Read'));
out.push(p('1 An ability — _to close the month on my own_ — not a course.  2 Option 1: 420,000 and six early departures, paid by the company and by the rota. Option 2: no fee, but twelve hours of Nadia\'s time.  3 Because the deadline has a reason outside the writer: enrolment closes a fortnight before 4 March.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Request — forklift licence, two options', 'Dear Mr Ayoub,', 'I would like to be able to move pallets when Samir is not here.', '**Why.** He is away about three weeks a year. Last year picking stopped twice for half a day, and in August a lorry waited ninety minutes in the yard.', '**Option 1 — the two-day course with the test.** Saturday and Sunday, 8.00–15.00, 600,000 including the licence application. I would not be here on those two days.', '**Option 2 — a month supervised by Samir.** No fee. It costs him about an hour a day for four weeks, and it gives no licence, which means I still could not drive it when he is away — which is the whole point.', '**What I would do.** Option 1, because option 2 does not solve the problem it is for.', 'Could you let me know by the 10th? The next course is on the 24th and they close bookings a fortnight before.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The ability asked for, not the course', '✓'],
  ['The cost of not having it, with a number', '✓ – two half-days, ninety minutes'],
  ['Two options with full costs', '✓ – including Samir\'s hours'],
  ['A deadline with an outside reason', '✓ – bookings close'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks you to name what the cheap option does not cover, and yours is the sharpest version of that — option 2 does not give a licence, so it does not solve the problem. The only thing I would add is what the two days away cost the warehouse."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "why" paragraphs. The request the class approves is always the one where **not** training already costs something this year.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I have wanted to learn to type properly since 2019. What stops me is that I can already type badly enough to get through a day, so it never becomes urgent, and the course is in the evening and I have two children. If I could type properly I would get about forty minutes of my evening back, which over a year is the same as a fortnight of evenings. The smallest first step is not a course at all: it is ten minutes a day with a free programme, and I know that and I have not started.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I can already type badly enough to get through a day"_   ✓ _would like to + verb._   ? _Could the ten minutes be at work, before everybody arrives?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the obstacles: money, time, and "nobody has ever asked". The third is commoner than the class expects and it is the one a teacher can do something about.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Given to the office manager: I would like to be able to run the monthly stock report. It costs us about half a day each month waiting for Abu Yasser. Two ways: an afternoon with him, or the Chamber\'s one-day course at 180,000. I would take the afternoon.']));

// ===================== 17.2 =====================
out.push(pb());
out.push(h2('17.2  Three weeks, Tuesdays and Thursdays, five to seven'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and harder than it looks: most people cannot say their own week in a way a partner can write down.'));
out.push(p('**b**  _for_ three weeks · _on_ Tuesday · _from_ five _to_ seven · twice _a_ week · _on_ 4 March.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (three weeks)   **b**  1 Three weeks, Tuesdays and Thursdays, 17.00–19.00, six sessions, starting 4 March; fee 420,000 including handouts; test on the last evening; certificate about three weeks later.  2 Whether there is a session on the year-end, and what happens if she misses an evening.'));
out.push(p('**Language box – Practise:** have the partner write the timetable down and read it back. Any difference is a part that was said too fast, and that is the whole exercise.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. I am telephoning about the forklift course. Could you give me the details?'],
  ['B', 'It runs for two days, Saturday and Sunday, from eight to three. The test is at the end of the second day.'],
  ['A', 'Two days, Saturday and Sunday, eight to three, test on the Sunday. And the fee?'],
  ['B', 'Six hundred thousand, including the licence application.'],
  ['A', 'Two things that are not on the notice. Can the test be retaken, and is the licence accepted outside Damascus?'],
  ['B', 'The test can be retaken once, with a later group, for a quarter of the fee. The licence is national.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the timetable from what they hear and compare. Typical errors: _during three weeks_ · _in Tuesdays_ · _at five to seven_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Course', 'How long / which days / what time', 'Fee', 'The two answers'], [
  ['accounts systems', '3 weeks, Tue & Thu, 17.00–19.00', '420,000', 'year-end is session 5; one miss allowed, not the test'],
  ['forklift', '2 days, Sat & Sun, 8.00–15.00', '600,000', 'retake once at a quarter; licence is national'],
], [1.1, 1.7, 0.7, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It runs for ten weeks, on Mondays and Wednesdays, from six to half past seven. It costs 350,000 and the handouts are extra. What is not on the notice is that you can join in the first fortnight but not after, and that the class is mixed-level."', 'Ask what would stop each learner taking the course they chose. It is nearly always the day of the week, which is worth knowing before anybody designs a timetable.']));
out.push(stage('5', 'Read'));
out.push(p('1 Beginners — _not a beginners\' course_, for people who already use a system daily.  2 Session 5, the year-end.  3 The start, 4 March, and the close of enrolment, 18 February.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**SHAM TRADING — IN-HOUSE: THE ORDER SCREEN, END TO END**', '**When:** two weeks — Mondays and Wednesdays, 16.00–17.00. Four sessions. Begins Monday 7 April.', '**Where:** the small meeting room.', '**Fee:** none. Enrolment closes 31 March (so that handouts can be printed).', '**Sessions:** 1 taking the order and reading it back · 2 entering it, including the trap with the twelfth line · 3 picking lists and what the warehouse actually sees · 4 the three ways an order goes wrong, and who to tell.', '**For:** anybody who takes orders, including the counter and the drivers. Not for people who only deliver them.', '**Attendance:** sessions 1 and 2 must be taken in order. 3 and 4 can be taken with the next group.', '**Certificate:** none. The steps sheet is yours to keep.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days in the plural, times _from … to …_', '✓'],
  ['Both dates', '✓ – 7 April and 31 March'],
  ['A list of sessions', '✓'],
  ['A "For" line saying who it is not for', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says the \'For\' line is the most useful line, and yours includes the drivers, which most notices would not. The one I would ask about is the enrolment date — _so that handouts can be printed_ is a real reason, and most notices do not give one."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "For" lines. The class says instantly whether they are in or out, and how fast they knew — which is the test the heading exists to pass.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I did a two-day first-aid course in 2023, eight to four, with twelve people from four companies. What was worth the money was the half-hour on burns, because we have a kettle, a heater and a loading bay, and in nine years there have been three burns and no plan. What the notice did not tell me is that the certificate expires after three years, which I found out from somebody else on the course, and which means mine runs out this autumn and the company does not know.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"three burns and no plan"_   ✓ _the timetable is complete._   ? _Does anybody else\'s certificate expire this year?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Collect on the board everything the notices did not say. It is the most practical ten minutes in the unit and it is written by the class.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['From a notice at the institute: what level is the class actually at? Is the fee per module or for all six? What happens if the group is too small to run — is the fee returned, and when?']));

// ===================== 17.3 =====================
out.push(pb());
out.push(h2('17.3  You need to bring your badge'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Three is usually enough to reveal that nobody has ever written it down.'));
out.push(p('**b**  _You need **to** bring your badge._ · _The door needs **fixing**._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (her identity card and the receipt)   **b**  1 To be there at twenty to five; identity card; the fee receipt; a pen and paper; to tell Abu Yasser twice.  2 A laptop — she does not need one.'));
out.push(p('**Language box – Practise (sample, a first day):**  "You need to arrive at half past seven, you need an identity card and you need flat shoes. You do not need lunch. The badge needs photographing, and that takes two days."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'I start on Sunday. What do I need?'],
  ['B', 'You need to be at the gate by half past seven, not at eight — the gate man leaves at eight and after that you wait. You need your identity card and you need flat shoes if you go into the warehouse at all.'],
  ['A', 'I have the card. Do I need lunch?'],
  ['B', 'You do not need lunch. You need nothing else; there is a canteen and a notebook is given to you.'],
  ['A', 'And do I need to tell anybody about Thursday afternoons?'],
  ['B', 'You need to tell Abu Yasser, not the office, because he does the rota. Tell him now and again on the first Wednesday.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the thing that is **not** needed and the thing that **needs doing**. Typical errors: _you need bring_ · _the door needs to fix_ · _you don\'t need to a laptop_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What they are doing', 'They need…', 'They do not need…', 'What needs doing'], [
  ['first day', 'ID card, flat shoes, 7.45 at the gate', 'lunch, a notebook, a letter', 'the badge photograph — two days'],
  ['site visit', 'hard hat, boots, the name of the host', 'a visitor\'s letter', 'the gate telephone — broken, knock'],
  ['first evening class', 'receipt, pen, to be twenty minutes early', 'a laptop', 'tell the rota in advance'],
], [1.2, 1.5, 1.2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"You need to be at the gate by a quarter to eight and you need your identity card. You do not need lunch or a notebook. And the badge needs photographing, which takes two days, so for two days somebody has to sign you in."', 'Ask for the most useful "you do not need". New people carry, worry about and apologise for a surprising number of things nobody requires.']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the gate cannot sign anybody in — the counter can, and sending somebody to the wrong person is worse than not telling them.  2 A laptop, a notebook, their own pens, lunch; and a letter from anybody. Listing them removes a week of unnecessary worry.  3 It gives permission to ask twice and names the real cost — asking in the third week about something from the first.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**YOUR FIRST WEEK**', '**Before you arrive.** You need your identity card and a photograph for the badge. The badge takes two days, so for the first two days the counter signs you in — ask at the counter, not at the gate.', '**Every day.** You need to be at the gate by 7.45 on the early rota. You need flat shoes for the warehouse, including if you are only asking a question.', '**What you do not need.** You do not need a laptop, a notebook, your own pens, or lunch. You do not need a letter from anybody.', '**What needs doing by you.** Bank details to Nadia. An emergency number to Mr Ayoub. Your name on the tea list.', '**Who to tell what.** Hours and days: Abu Yasser, because he does the rota. Money: Nadia. Anything you are unsure about: anybody at all.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_need to_ + verb and _need_ + noun correct', '✓'],
  ['A "do not need" list', '✓ – five items'],
  ['Something that _needs doing_', '✓ – the badge'],
  ['A person attached to every requirement', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says attach a person to every requirement, and the last heading does it properly. The one I would ask about is the tea list — it is a joke until somebody explains that it is how the kettle is paid for. Is that explanation on the page?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "do not need" lists. Ask which line each learner wishes somebody had told them on their own first day; several will name the same one.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['In my first week I brought my own stapler every day in a bag because nobody had said whether there was one. There was, on every desk. What I actually needed and did not know was that the kitchen door is locked at two and that the key is with whoever is on the counter. I asked nobody, because by Wednesday I had decided I should already know. Nobody told me that the man who does the rota is in the warehouse and not in the office, and I spent three days telling the wrong person my hours.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"by Wednesday I had decided I should already know"_   ✓ _need to / need correct._   ? _Does the next new person know about the rota?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Collect on the board everything nobody told anybody. That board is the first draft of a real induction note; ask who will keep it.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Five things for the first hour: the gate closes at eight; flat shoes for the warehouse; Abu Yasser does the rota, not the office; the kitchen key is on the counter; and nobody minds being asked twice in the first fortnight.']));

// ===================== 17.4 =====================
out.push(pb());
out.push(h2('17.4  It is easy once you have done it twice'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Press for the **reason** it is hard; the first answer is usually "it just is".'));
out.push(p('**b**  _It is easy to use._ The verb after the adjective takes **to**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (three buttons that all look like Save)   **b**  1 Easy once you have done it twice.  2 She refuses to let "badly made" and "hard" be the same sentence.'));
out.push(p('**Language box – Practise (sample):**  "The stock screen is easy once you have used it for a fortnight. It is confusing at first for a reason: the search finds the code and not the name, and the code is on the shelf label, not on the box. It is impossible for somebody who has not been told that."'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Is the stock screen difficult?'],
  ['B', 'It is easy once you have used it for a fortnight. The first week it is confusing, and it is confusing for a reason: the search finds the code, not the name.'],
  ['A', 'Where is the code?'],
  ['B', 'On the shelf label. Not on the box, and not on the delivery note.'],
  ['A', 'That is not difficult. That is hidden.'],
  ['B', 'It is hidden and it is easy once you know. Two different sentences — and if we only say the second one, nobody ever puts the code on the boxes.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **reason** it is confusing. Typical errors: _it is easy using_ · _it is difficult for understand_ · and the content fault of calling a design problem a training problem.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What', 'Easy / hard for whom', 'After how long', 'The reason — and is it badly made?'], [
  ['invoice screen', 'easy for Nadia, hard for a new person', 'about six invoices', 'three buttons look like Save — badly labelled'],
  ['stock search', 'easy after a fortnight', 'a fortnight', 'searches the code, not the name — badly made'],
  ['matching credits', 'hard for everybody', 'about a month', 'it is genuinely accounts — not badly made'],
], [1, 1.3, 0.9, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The invoice screen is easy for anybody who has done six and hard for the first week. It is hard because three buttons all look like Save. It is badly made, and it is easy once you know — and those are two different sentences."', 'Ask which badly made thing would be easiest to fix. There is nearly always one that needs a label and nothing else, and somebody in the room could do it on Sunday.']));
out.push(stage('5', 'Read'));
out.push(p('1 A labelling problem (the three buttons) and a real difficulty (matching credits to invoices when a customer pays a round number).  2 A strip of paper taped under the screen saying **middle = save** — it costs nothing.  3 Because forty minutes for every new person for nine years is a decision, and one person\'s forty minutes is a complaint.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**The stock search — what is actually hard about it**', 'It is easy once you have used it for a fortnight. It is hard for the first week, for one reason that has nothing to do with stock.', '**The search field.** It finds the item code and not the item name. If you type "wrap" you get nothing at all — not an error, nothing — and a new person concludes that we do not stock it.', '**What this costs.** In my first week I told two customers we had no wide wrap. We had forty rolls.', '**What would fix it.** A line taped to the screen: **search by code — the code is on the shelf label.** It is not a training problem; it is a one-line problem.', '**What is genuinely difficult**, and no label will fix: knowing which of four similar products a customer actually means when they describe it rather than name it. That takes months and it is the job.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_it is … to …_ with a person and a time', '✓'],
  ['The hard thing named exactly', '✓ – the search field'],
  ['A cost with a number', '✓ – two customers, forty rolls'],
  ['The genuinely difficult part kept separate', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for the cost with a number, and _we had forty rolls_ is the sentence that will get this fixed. The one I would look at is _not an error, nothing_ — that is the actual fault and it is inside a dash."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Pick the fix that could be done this week. Then ask who will do it. Somebody usually does, and they report back the following lesson.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Everybody here says the delivery note book is difficult. It is not difficult. The carbon is the wrong way round in about one book in five, so the middle copy comes out blank and the person filling it in thinks they pressed too lightly and writes the whole thing again. It would be fixed by looking at the first page of each new book before it is used — four seconds. Nobody has fixed it because the people who use the books are drivers, and the person who orders them has never filled one in.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the person who orders them has never filled one in"_   ✓ _easy / hard with a person attached._   ? _Could you show the ordering clerk one blank copy?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts whose answer is "the people who find it hard are new and the people who could fix it are not". Write that sentence on the board; it explains most of this cycle.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Made and stuck on the screen at the counter: "SEARCH BY CODE — the code is on the shelf label, not the box." Hala used it on the second day and said nothing, which I am counting as a success.']));

// ===================== 17.5 =====================
out.push(pb());
out.push(h2('17.5  I am good at numbers and bad at letters'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and insist on the ban: no _hard-working_, no _reliable_. The ban forces a real answer.'));
out.push(p('**b**  good **at** numbers · good **at** talking to customers · better **at** this **than** that.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (remembering routes and people)   **b**  1 Writing; he has started drawing a little map at the bottom of the note for the next driver.  2 That being bad at something and good at solving it is the rarer pair, and that the map only makes sense if the other half is written down too.'));
out.push(p('**Language box – Practise (samples):**  _I am good at the telephone and at remembering what people ordered last time. I am not very good at long written English, so I keep ten standard sentences on a card._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The training list asks what everybody is good at. What would you put?'],
  ['B', 'Put nothing. I stack pallets.'],
  ['A', 'You can tell by the sound whether a pallet is badly stacked. Nobody else in this building can do that.'],
  ['B', 'That is not a skill. That is just years.'],
  ['A', 'It is a skill that takes years, which is a different thing. What are you bad at?'],
  ['B', 'The screen. I photograph the shelf label instead of writing the code down, because I get the digits the wrong way round.'],
  ['A', 'Then you are bad at the screen and good at working round it, and the second one is rarer.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the strength the person refused to call a strength. Typical errors: _good in English_ · _good at to drive_ · _I am good for numbers_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What they said', 'What I say', 'Bad at — and what they do about it'], [
  ['Fadi', '"nothing, I am a driver"', 'every shopkeeper on four rounds; no wrong gate in six years', 'written notes — draws a map on the note'],
  ['Hala', '"the counter, I suppose"', 'complaints; she remembers last orders', 'the invoice screen — an hour a week with Nadia'],
  ['Abu Yasser', '"counting"', 'hearing a bad pallet; thirty-one years of variance', 'the screen — photographs the label'],
], [0.8, 1.3, 1.3, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi says he is good at nothing. I say he knows the name of every shopkeeper on four rounds and has never gone to the wrong gate in six years. He is not good at written notes, and he has started drawing a map at the bottom for the next driver."', 'Count how many named a smaller strength for themselves than a colleague named for them. It is nearly everybody, and saying the number out loud is the cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 Being away — because a company where one person is the only one who can do something has a training problem whether or not that person needs training.  2 Every entry has a strength with evidence, a weakness, and **what the person does about it**.  3 Fadi\'s — nothing formal, and instead: _should be asked before any route changes_, which is a use of his strength rather than a fix for his weakness.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**WHO CAN DO WHAT**', '**Samir (warehouse).** Good at: the forklift; nine years with no damaged pallet. Not good at: reading the picking list on the screen. **What he does about it:** has the list printed each morning. **Learning:** nothing formal; the printing works.', '**Rana (counter).** Good at: regular customers, and noticing when somebody stops coming. Not good at: the ordering screen, yet — two months in. **Learning:** twenty minutes a day with Hala until the end of April.', '**Me (office).** Good at: chasing and writing things down. Not good at: the year-end, and saying no to a customer. **Learning:** the Chamber course in March; nothing for the second one, and I do not know what training for it would even look like.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_good at_ + noun or -ing', '✓'],
  ['Evidence after every strength', '✓ – nine years, two months'],
  ['A second half after every weakness', '✓'],
  ['Somebody who is the only one who can do something', '✓ – Samir and the forklift'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says every weakness gets a second half, and the honest _I do not know what training for it would look like_ is a real second half. The entry I would look at is Samir — if he is the only forklift driver, is _nothing formal_ the right line for the company?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask whether each person would sign their own line. Where the answer is no, the fix is a better second half, not a kinder first one.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I am not good at saying no to a customer. I know because I agreed to a Thursday delivery three times last month when Thursday was already full, and twice somebody else had to telephone and move it. What I do instead is say "let me check and telephone you back", which buys me the twenty minutes I need to find the courage. I would rather get better at it than keep the workaround, because the workaround costs a telephone call every time and it only works when I remember to use it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"buys me the twenty minutes I need to find the courage"_   ✓ _good at / bad at + noun or -ing._   ? _Who here is good at saying no, and would they show you?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many workarounds exist only in one person\'s head. Those are what the company loses on the day that person leaves, and 17.6 is the answer to it.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Asked Nadia. She said: "You are good at making people telephone you back." I disagreed and she said it is why the Aleppo supplier answers me and not her. Written down in her words, as instructed.']));

// ===================== 17.6 =====================
out.push(pb());
out.push(h2('17.6  Could you show me how to do it?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the "why not" is the point: most people stop asking after their first few months because they think the window has closed.'));
out.push(p('**b**  The second. The first is a complaint; the third makes the other person manage your embarrassment as well as teach you.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (directly, with a length of time)   **b**  1 She does it herself and writes the steps as she goes.  2 To do one more and read the five steps back — and then put them in the folder, so neither of them has to do this again.'));
out.push(p('**Language box – Practise (sample):**  _Could you show me how to raise a credit note? Ten minutes, any time this week. May I do it while you watch?_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Abu Yasser, could you show me how to book goods in? Ten minutes, any time before Thursday.'],
  ['B', 'Now. Sit here. Do not watch me — do it, and I will tell you when you are wrong.'],
  ['A', 'I am writing the steps. One: take the delivery number from the note.'],
  ['B', 'Not from the box.'],
  ['A', 'Two: the box code is not the delivery number — if you enter it you make a second record that nobody can delete. Three: count before you enter, not after.'],
  ['B', 'That is the one that catches everybody.'],
  ['A', 'Four: enter the count, not the quantity on the note. Five: print and sign the sheet.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **trap**. Typical errors: _Can you show me how to doing it_ · _explain me_ (English needs _explain to me_) · and the content fault of watching instead of doing, which produces notes that cannot be followed.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['What I asked to be shown', 'Who', 'Number of steps', 'The trap'], [
  ['putting a credit against an invoice', 'Nadia', '5', 'the amount goes in without the minus sign'],
  ['booking goods in', 'Abu Yasser', '5', 'the box code is not the delivery number'],
], [1.6, 0.8, 0.9, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked Nadia to show me how to put a credit against an invoice. There were five steps. The one that catches everybody is the third: the amount goes in without a minus sign, because the screen adds it."', 'Count how many of these step lists existed anywhere before today. It is almost always none — say the number aloud, because it is the argument for the whole cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 Hala wrote it, Nadia showed it, 14 November — so that the next reader knows how old it is and whom to ask if it is wrong.  2 Step 3, marked with ⚠ and the words _this is the one that catches everybody_.  3 Somebody repeating a step that seemed not to work and creating a second credit, which is much harder to remove than one.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**BOOKING GOODS IN — five steps**', '_Written by Fadi, shown by Abu Yasser, 21 November. If this is wrong, correct it and put your name on it._', '**1** Take the delivery number from the **note**, not from the box. (The box code is a different number.)', '**2** Open **Goods In**, not Stock Adjust — Stock Adjust leaves no record of where it came from.', '**3** **Count the pallet before you enter anything.** ⚠ **This is the one that catches everybody.** Everyone enters the quantity on the note and counts afterwards, and then the two numbers never meet.', '**4** Enter what you counted, not what the note says. If they differ, enter the count and tell the office the same day.', '**5** Print the sheet and sign it. The signature is what lets the office pay the invoice.', '_If the screen will not accept the delivery number, do not try a second time with the box code — ask. A second record cannot be removed._']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who wrote it, who showed it, the date', '✓'],
  ['One line per step, reason in brackets', '✓'],
  ['The trap marked', '✓ – step 3'],
  ['A line about what to do when it goes wrong', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says mark the trap and you have. The step I would look at is 4 — _tell the office the same day_ is a second instruction hiding inside step 4. Should it be step 5?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Swap sheets between pairs and try to follow one. The step where the reader stops is the step that needs rewriting, and nothing teaches that faster.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['Only Nadia can close the month. If she were away for a month we would not know what we were owed until she came back, which means we would not chase anybody, which in a bad month is four or five million sitting in other people\'s accounts. Writing it down would take about three hours of her time spread over four sessions, and the reason it has not happened is not that she refuses — it is that nobody has ever asked her for a specific ten minutes on a specific day, which is the only way anything gets written down here.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"four or five million sitting in other people\'s accounts"_   ✓ _you could ask for ten minutes._   ? _Which ten minutes, which day?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Add up the hours to write them all down and compare it with one person being away for a month. Say both numbers; the comparison is always absurd and always news.'));
out.push(stage('HW', 'Homework – sample (≈45 words)'));
out.push(sample(null, ['Asked Nadia for ten minutes on the bank reconciliation. Four steps, one trap: the date on the screen is the date of entry and not the date of the transfer, which is why last month looked wrong. Steps written and put in the blue folder.']));

// ===================== 17.7 =====================
out.push(pb());
out.push(h2('17.7  Review & Mediate: the course notice'));
out.push(stage('1', 'Get ready – Unit 17 quiz'));
out.push(p('**1** Because it asks for a result a manager can weigh, not for attendance he can only allow or refuse.  **2** _On Tuesday_ is one particular Tuesday; _on Tuesdays_ is every Tuesday.  **3** You need **to** bring your badge. The door needs **fixing**.  **4** Samples: _once you have done it twice_ · _impossible for somebody who has not been shown_.  **5** Ask directly with a length of time · do it rather than watch · write the steps as you go · read them back and keep them.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the words on the notice)   **b**  1 _For those already working at an intermediate level_ — and the word _systems_.  2 Counting: he has been doing the first and last sessions for thirty-one years, and he invented the reporting form at Sham Trading.'));
out.push(p('**Language box – Practise (sample):**  "Read the sessions: counting methods, cycle counting, reconciling, reporting discrepancies. You have done three of those four for thirty-one years. _Intermediate_ is there to stop somebody who has never counted anything. The word that stops you is _systems_, and it only means the room has screens in it."'));
out.push(stage('3', 'Practise – sample with notice 1'));
out.push(dlg(null, [
  ['B', 'It says _for staff with a good working level of English_. Mine is not good. It is just enough.'],
  ['A', 'Read me the sessions.'],
  ['B', 'Taking a complaint, apologising and offering, explaining a delay, following up in writing, telephone practice.'],
  ['A', 'You took eleven complaints last month and four of them were in English. _A good working level_ means somebody who can already have the conversation badly — that is what the course is for. If your English were good you would not need it.'],
  ['B', 'And the writing one?'],
  ['A', 'That is the session you would get the most from, and it is the one you would not have gone for.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the word that stopped the person and the session line that answered it. They are never the same line, which is the whole mediation.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The word that stopped them', 'The session that answered it'], [
  ['Abu Yasser', '"systems" / "intermediate"', 'counting methods; reporting discrepancies'],
  ['Hala', '"a good working level of English"', 'taking a complaint — she took eleven last month'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a course notice for a stock course. The word that stopped him was _systems_. The session list is counting, cycle counting, reconciling and reporting — and he has done three of the four for thirty-one years."', '⚠ **The ordinal.** This is the **fifth** unit of Book 2. The unwritten thing this time is the most human of the five: a notice says who a course is for, and never says who it is **not** meant to frighten away.']));
out.push(p('**Listener task:** add to the Book 2 office-word list: _enrol · session · module · refresher · syllabus · competent_.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', 'Tuesdays **and** Thursdays over three weeks = twice a week.'],
  ['2', 'B', 'Two dates: enrol by 18 February, course begins 4 March.'],
  ['3', 'A', '_Not a beginners\' course_ = some experience is assumed.'],
  ['4', 'C', 'No laptop needed; handouts are given out.'],
  ['5', 'B', 'One session may be made up; the test may not.'],
  ['6', 'A', 'A direct request with a length of time attached.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (32 words)'));
out.push(sample(null, ['Hi Samir, there is a stock course at the Chamber, two Saturdays in March. One session is reporting discrepancies, which is what you do every month. You need to enrol by the 18th.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: what it is and when ✓ · why it is for them, with evidence ✓ · what to do and by when ✓. Thirty-two words. ⚠ The commonest fault is giving the start date instead of the enrolment date — and the start date is the one that loses people their place.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I would send Fadi on a two-day course in reading and writing delivery documentation. He is the person who knows what a note should say and the only one who cannot write it quickly. If he went, three things would change: the notes would be readable by whoever follows him on a round, the maps he draws would become a standard and not a private habit, and he would stop believing that the thing he is worst at is the only thing anybody sees. The last one would change the most and it is not on any syllabus.']));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Told Fadi. He said "that is not for me" before I had finished the sentence, which is exactly what the unit said he would say. I read him the session list and he asked how much it cost.']));
out.push(pb());
out.push(stage('✓', 'Unit 17 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'b', 'a', 'b', 'c', 'a']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _would like_ + **to** + verb.  **2** _for_ + a length of time.  **3** _from … to …_ for a span of clock time.  **4** _need_ + **to** + verb.  **5** A thing _needs_ + **-ing**.  **6** _It is_ + adjective + **to** + verb.  **7** _good **at**_.  **8** _how **to** do it_.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['How long', 'Days', 'Time', 'Sessions', 'Starts'], [[
  'three weeks', 'Tuesdays and Thursdays', 'five to seven (17.00–19.00)', 'six', '4 March',
]], [1, 1.4, 1.5, 0.8, 1]));
out.push(note('Accept the 24-hour or the spoken form for the time. Do not accept "a fortnight before" for _starts_: that is the enrolment date, which is the trap in the recording and the point of 17.2.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (47 words)', ['I would like to be able to run the monthly stock report when Abu Yasser is away. He is away about three weeks a year and last year the figures went out four days late twice. It could be an afternoon with him, or the Chamber course at 180,000.']));
out.push(box('Marking the Unit 17 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'An **ability**, not a course (2) · the cost of not having it, **with a number** (2) · **two** ways (2) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ A request that names a course and no ability scores 0 of 2 on the first point however well written. That is the whole teaching point of the unit and it is worth being strict about once.',
  '⚠ Accept an invented workplace and invented numbers. Do not accept a cost with no number: _it causes problems_ is not a cost.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 17**'));
out.push(p('**1 The missing _to_.** _You need bring_ · _I would like learn_ · _how to doing_. All three are the same fault and all three respond to the same drill: say the whole chunk — _need to bring_, _would like to learn_ — rather than the rule.'));
out.push(p('**2 _good in_ for _good at_.** Arabic and French both push towards _in_, and it is almost impossible to hear as wrong. Write the four phrases on the board and leave them there for the rest of Book 2: _good at · bad at · better at … than · interested in_ — the last one is the exception that makes the other three hard.'));
out.push(p('**3 Asking with an apology.** Not a grammar fault, and the most expensive one in the unit. A learner who says _sorry to bother you, it is probably obvious_ will stop asking within a month. Practise the level version in 17.6 until it stops feeling rude, and tell them plainly that it will feel rude at first.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 17 · Answer Key');
