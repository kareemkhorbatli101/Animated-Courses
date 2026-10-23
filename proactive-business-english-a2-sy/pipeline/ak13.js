// Proactive Business English A2 · Syria Edition · Book 2 · Unit 13 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 13  Experience and the CV'));
out.push(p('_Proactive Business English · A2 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Book 2 changes three things and this key marks all three.** Free writing is **60 to 100 words**, not 35 to 60. The peer-review slip is at **band 3**: the reviewer names the criterion from the Writer\'s box, and a slip that only says what to change is not yet band 3. And the mediation task carries something the document does not say outright — in this unit, that an advertisement\'s requirements and its duties are written by two different people.',
  '⚠ **This unit is about the learners\' own working lives.** Several tasks ask them to write their own CV. Correct the English and leave the facts alone; a learner who undersells themselves on paper is giving you a teaching moment, not a mistake.',
], C.grey, C.navy));

// ===================== 13.1 =====================
out.push(h2('13.1  I have worked here for eleven years'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Listen for the shape, not the number: _I have worked here for six years_ / _since 2020_. The commonest first attempt is _I am working here since…_ and it is worth writing on the board before the dialogue, not after.'));
out.push(p('**b**  **since** 2019 · **for** eleven years · **since** March · **for** six months · **since** I left school.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Abu Yasser — nineteen years there, thirty-one in the trade)   **b**  1 Eleven years, since March 2015.  2 That the form cannot tell the difference between a man who has done one year thirty-one times and a man who has done thirty-one years.'));
out.push(p('**Language box – Practise (samples):**  1 I have worked here for two years / since 2024.  2 I have lived in Jaramana for nine years / since 2017.  3 I have had this number for four years / since the old one stopped.  4 I have been with this company for a year / since last March.  5 I have studied English for six years / since school.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Nadia, the form wants the years. How long have you worked here?'],
  ['B', 'Eleven years. Since 2015 — no, since March 2015, so eleven in the spring.'],
  ['A', 'Eleven years. And Abu Yasser?'],
  ['B', 'Here, nineteen. In the trade, thirty-one.'],
  ['A', 'I have worked here for one year.'],
  ['B', 'You have worked here for one year and you have already filled in a form that two of us got wrong.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners collect every _for_ and _since_. Typical errors: _since eleven years_ · _I am working here since 2015_ · _from March_. All three are the same mistake — a length treated as a point, or a present treated as a perfect.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'What', 'for…', 'since…'], [
  ['Nadia', 'this job', 'for eleven years', 'since March 2015'],
  ['Fadi', 'the drive from Jaramana', 'for six years', 'since he bought the van'],
  ['Hala', 'living in Latakia', 'for twenty-seven years', 'since she was born'],
], [1, 1.4, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Nadia has worked here for eleven years — since March 2015. The longest in this room is Abu Yasser: thirty-one years in the trade."', 'Add the years up with the class. A room of nine people usually comes to well over a hundred years, and the number changes how the rest of the unit sounds.']));
out.push(stage('5', 'Read'));
out.push(p('1 _I have worked at Sham Trading since March 2015_ and _I have handled the accounts through two system changes_ — both are still true now.  2 _Before that I worked for three years at a construction supplier in Homs_ — that job is finished.  3 "I have handled the accounts through two system changes and one move of premises without a month being closed late."'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**FADI SAEED** · Driver · Jaramana, Damascus · 09__ ___ ___ · fadi.saeed@shamtrading.sy', '**Profile**', 'Driver with six years in distribution. I have driven for Sham Trading since 2020, where I am responsible for the small van, the lorry and the delivery notes for about forty drops a week. Before that I drove for a bakery for two years.', 'I have not had a delivery refused for bad packing or a wrong count in three years, and I check every note with the customer before he signs it.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Present perfect for the job they still have', '✓ – _I have driven … since 2020_'],
  ['Past simple for the job they left', '✓ – _I drove for a bakery_'],
  ['At least two numbers', '✓ – six years, forty drops, three years'],
  ['One sentence of evidence nobody else could write', '✓ – the refused delivery'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The Writer\'s box asks for one sentence of evidence nobody else could write. Yours is the last one, and it is the strongest thing on the page — would it be even harder if you said how many drops that is?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the evidence sentences only. The test is whether the sentence could have been written by anybody else in the room; _hard-working and reliable_ fails it in every case, and learners hear that faster from each other than from a teacher.'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample(null, ['I have taken the same bus to work since 2017 — nine years, the 7.15 from Jaramana. In that time the fare has gone up eleven times, the route has changed twice and the driver has changed three times. What has not changed is that I read on it, which is forty minutes a day, which is two hundred hours a year. I learned most of my English on that bus and I have never once said that to anybody, because it sounds like an excuse for not going to a school.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"two hundred hours a year" — keep that line._   ✓ _for / since correct throughout._   ? _What are you reading now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The longest thing and the most surprising thing are rarely the same text. Ask the class which one they would put on a CV, and then ask why they would not put the other one — the answer is usually that nobody ever asked.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['I asked my neighbour. He has repaired shoes in the same shop for thirty-four years — since 1992, in the same street, three doors from where he started. He said the street has changed and the shoes have not.']));

// ===================== 13.2 =====================
out.push(pb());
out.push(h2('13.2  Have you ever used this system?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. A show of hands is enough; the point is that everybody in the room has done some of these and nobody has done all of them.'));
out.push(p('**b**  Samples: _Have you ever taken a complaint? — No, never. I have never taken one on the telephone._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (who to interview)   **b**  1 She has never worked in an office.  2 That she had never used their system either, and that was one year ago.'));
out.push(p('**Language box – Practise (samples):**  Have you ever trained somebody? · Have you ever taken a complaint in English? · Have you ever signed for a delivery you had not counted? — _No, never._ · _I have never used an accounts system._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Three for the driver post. Have you read them?'],
  ['B', 'Twice. Have you ever noticed that they all say the same four words?'],
  ['A', 'Hard-working, reliable, motivated, team player. Which one has done the work?'],
  ['B', 'The first one has never driven a lorry over three tonnes. He has driven for a bakery for six years — forty stops before nine in the morning, and no complaints.'],
  ['A', 'Has he ever driven at night?'],
  ['B', 'He has started at four for six years. Not the same, but it is closer than any of the others.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence that turned a _never_ into an argument **for** the person. Typical errors: _Have you ever used it yesterday?_ (a finished time needs the past simple) and _I haven\'t never used it_ (one negative is enough).'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who', 'Has ever…', 'Has never…', 'Why it would not matter'], [
  ['Hala', 'kept a stock card for 90 lines', 'worked in an office', 'a counter is harder than a desk and faster'],
  ['Fadi', 'taught the new delivery notes', 'used a computer system', 'he learned the notes in two days'],
  ['Nour', 'taken a six-item order by telephone', 'worked anywhere else', 'she has trained the person who has'],
], [1, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Hala has never worked in an office. But she has served a hundred people a day for four years, which is a queue, a telephone and a stock card at the same time, and an office is only one of those three."', 'Count the _nevers_ in the room that would really stop an appointment. There are usually none, and saying so out loud is the point of the cycle.']));
out.push(stage('5', 'Read'));
out.push(p('1 That she has never worked in an office and never used an order system — and she puts it **in the middle**, in her own words, before the reader can find it.  2 The sentence that answers it: four years on a stock system, learned in a week.  3 "Both are still there." It is the shortest and it answers the question nobody asked out loud — whether the people she trained lasted.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Mourad Bakery, Latakia — counter and deliveries, 2018 to 2021 (three years)**', 'I opened the shop at five, served until nine, and took the bread to four shops on a motorcycle before the heat. I did the accounts on Fridays and I counted the money twice because I was tired, not because I did not trust it.', 'I have never used a till system and I have never worked to a written procedure. I have balanced a cash drawer to the pound every Friday for three years, and I learned the whole price list in a fortnight because asking slows the queue.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The work described, not the job title', '✓ – the five o\'clock opening'],
  ['At least one number', '✓ – four shops, three years, a fortnight'],
  ['The gap named by the writer, not hidden', '✓'],
  ['A sentence after the _never_ that answers it', '✓ – the cash drawer'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "Move three — the sentence after the _never_ — is doing its job here. The till system is answered by the cash drawer. Could the written procedure be answered too, or do you want to leave it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The test is whether the sentence under the _never_ answers it. Most first drafts name the gap and then stop, which is worse than not naming it at all.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['I have never taken a complaint in English. I have taken about two hundred in Arabic, and most of them are not really about the thing in the complaint — they are about being made to wait and then being told it is normal. The English I would need is not difficult: I am sorry, I understand, let me check, I will telephone you back at four. I already say all of those in Arabic a dozen times a day. What I would need in the first week is somebody to listen to the first three calls.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"most of them are not about the thing in the complaint" — that is the line._   ✓ _never used correctly._   ? _Who would you want listening to the first three?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Give the class ten seconds per text, which is about what a real reader gives. The texts that survive ten seconds are the ones with a number and an answer under the gap.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['From a notice at the Chamber: Have you ever used an inventory system? Have you ever been responsible for cash? Have you ever trained a new member of staff? I can answer yes to two and the third is the one I would be asked about.']));

// ===================== 13.3 =====================
out.push(pb());
out.push(h2('13.3  I have already sent it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Three things in order — most learners name the email, the list and the meeting.'));
out.push(p('**b**  _I have **already** sent it._ · _Have you sent it **yet**?_ · _She has **just** telephoned — one minute ago._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the Homs delivery note)   **b**  1 She has just come back to it: Fadi has just returned and the signature is in the van; she has printed the note.  2 Because the list is not better than the memory — it **is** the memory, standing where you can see it.'));
out.push(p('**Language box – Practise (samples):**  1 I have already sent it.  2 Not yet — it leaves at two.  3 Yes, I have already booked it.  4 She has just replied.  5 No, not yet; I am still waiting for the counter to close.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Monday list. Invoices?'],
  ['B', 'Sent. I have already sent them — Friday, not this morning.'],
  ['A', 'The supplier price list?'],
  ['B', 'Not yet. I have asked twice and I am still waiting. I have written again and I am waiting for Wednesday.'],
  ['A', 'And the interview letters?'],
  ['B', 'Done. I have printed them and I have put them on your desk, because last time one went out with the old address on it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick _already_, _just_ and _yet_ and check the word order. Typical errors: _I have sent already it_ · _Have you yet sent it?_ · _I have not finished already_.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['The six things', 'already / just / not yet', 'If not yet: what is it waiting for?'], [
  ['the Aleppo price list', 'not yet', 'Ms Shamsi — telephone Wednesday if nothing'],
  ['the Thursday room', 'already', '—'],
  ['Fadi\'s signed note', 'just', 'it came back at 9.35'],
], [1.6, 1.2, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I have already booked the room. I have just had the signed note back from Fadi. I haven\'t had the Aleppo price list yet, because I am waiting on Ms Shamsi — if nothing comes by Wednesday I will telephone instead of writing again."', 'The items waiting on somebody outside the company are the ones that need a telephone call. A list cannot chase anybody.']));
out.push(stage('5', 'Read'));
out.push(p('1 It tells the reader why the note exists — _before you ask_ — so the manager knows it is information, not a request.  2 The Aleppo price list; the plan is to telephone Ms Shamsi on Wednesday rather than write a third time.  3 Because it saves the reader deciding whether to act: _nothing here needs you yet_.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Tuesday, 8.50 — nothing here needs you**', 'Bank letter: Nadia has already taken it; she went at opening.', 'Lorry service: not yet. The garage has just telephoned and they want it on Thursday instead of Wednesday. I will confirm before noon.', 'Badges for the two new staff: done. I have ordered three — the spare is because we waited six days last time.', 'Aleppo wrap: I have asked twice and I am still waiting. If there is nothing by Thursday I will telephone.', 'Nothing here needs you. — F.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Status word first on every line', '✓'],
  ['_already_, _just_, _yet_ in the right place', '✓'],
  ['Every _not yet_ with a time or a condition', '✓ – before noon; by Thursday'],
  ['A last line that says what the reader must do', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box says every _not yet_ carries a time or a condition. Both of yours do. The one I would look at is the badges line — it is done, so why is the reason there? Does your manager need it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the last lines only. _Nothing here needs you yet_ is the one that makes a manager read the next note you send.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I have been waiting since February for a letter from the electricity office. I have already been there twice, I have already given them the same two documents twice, and I have just been told that the man who signs it is on leave. Nothing has happened yet. What I have not done is go at seven in the morning, which is what everybody says works and what I keep not doing because of the bus. If it has not come by the end of the month I am going to go at seven, and I will take the documents a third time.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"what I keep not doing because of the bus" — honest._   ✓ _every "not yet" has a plan._   ? _Could somebody else go at seven for you?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Ask how many of the waits could end this week with one telephone call. In most classes it is more than half, and somebody usually makes the call.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Tomorrow: bank letter (not yet — needs Nadia\'s signature, before ten). Stock count (already done Friday). Fadi\'s route (just changed, Thursday now). Badges (not yet — waiting on head office, telephone Thursday).']));

// ===================== 13.4 =====================
out.push(pb());
out.push(h2('13.4  I worked there in 2019'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Finished: _in 2019 · last Tuesday · yesterday_. Not finished: _this year · since March_. _This morning_ is finished or not depending on the time of day — at ten o\'clock it is not, at six in the evening it is.'));
out.push(p('**b**  Samples: _I worked at a school for two years._ / _I have worked here since 2021._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a wrong tense)   **b**  1 At a bakery.  2 That the tense is doing the work of a sentence: it tells the reader whether the person is still there.'));
out.push(p('**Language box – Practise (answers):**  1 have worked  2 left  3 have not had  4 telephoned  5 have been'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'It says he has driven for a building company since 2019. And he has driven for a bakery in 2016.'],
  ['B', 'Not _has driven_. He **drove** for a bakery in 2016.'],
  ['A', 'It is the same work. Why is it a different tense?'],
  ['B', 'Because 2016 is finished and he is not there. _He has driven since 2019_ — still there. _He drove in 2016_ — left.'],
  ['A', 'So if I write _has driven_ for the bakery, it looks as if he has two jobs.'],
  ['B', 'For three seconds. Then it looks as if nobody read the dates.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the **reason**, not the correction. _Because 2016 is finished_ is a reason; _because it is past simple_ is only a name for the answer.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Where', 'From / to', 'Tense, and why'], [
  ['a school in Homs', '2014 to 2017', 'past simple — finished'],
  ['a hotel in Latakia', '2017 to 2021', 'past simple — finished'],
  ['Sham Trading', 'since 2021', 'present perfect — still there'],
], [1.4, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I worked at a school in Homs from 2014 to 2017 and at a hotel from 2017 to 2021. I have worked at Sham Trading since 2021."', 'When a learner uses the wrong tense, do not name it — say what the sentence accidentally meant. _So you have two jobs now?_ corrects faster than _present perfect_ does.']));
out.push(stage('5', 'Read'));
out.push(p('1 The pharmacy — she is still there until the end of the month, so _I have served since 2021_ and the present for the duties.  2 The bakery — finished in 2021, so _I worked_, _I opened_, _I did_.  3 That she worked while she studied, started at five, and did accounts — it shows what she is like, which the pharmacy entry alone does not.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Sham Trading Co., Damascus — administrative assistant — March 2025 to now**', 'I have worked here since March 2025 and I am responsible for the telephone, the orders and the customer files. I take orders of up to six items, raise invoices and check them against the delivery notes.', '**Al Mahabba School, Damascus — office assistant — 2023 to 2025**', 'I worked at the school for two years. I kept the register, telephoned parents and typed the reports at the end of each term.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Newest first', '✓'],
  ['Present perfect only in the current job', '✓'],
  ['Past simple everywhere else', '✓'],
  ['Dates to the month', '✓ – March 2025; 2023 to 2025 would be better with months'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for dates to the month and the school entry only has years. Which month did you start there? A reader who finds one vague date starts looking for others."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read one entry each and ask the class, from the tense alone, whether that person is still there. When the class gets it wrong, the CV is wrong.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['I worked at a hotel in Latakia from 2017 to 2021, on reception, mostly at night. I learned to write everything down at the moment it was said, because at three in the morning nobody remembers anything and the only thing that survives until the day shift is the book. I still do it. I left because the hotel closed for two seasons and I could not wait for the third. The sentence that is not past simple is this one: I still do it.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the only thing that survives until the day shift is the book"_   ✓ _all finished time in past simple._   ? _Does anybody at work know where that habit came from?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The thing people still use is usually learned in a job they were glad to leave. Say so; it changes how the class writes about its own history.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['2014–2017 Al Mahabba School, Homs — office assistant (worked). 2017–2021 Hotel Amrit, Latakia — reception (worked). Since March 2025 Sham Trading, Damascus — administrative assistant (have worked). Every verb checked: one perfect, two past.']));

// ===================== 13.5 =====================
out.push(pb());
out.push(h2('13.5  What I can put on a CV after one year'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Push for three **specific** things; the first answer is nearly always "my English", which is true and useless until it is said as a task.'));
out.push(p('**b**  Say something: _good with numbers · fluent in English · can use the stock system_. Say nothing: _hard-working · reliable · motivated_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the word _hard-working_, and the two with it)   **b**  1 Take a four-item telephone order and read it back; raise an invoice and find the mistake first; train Fadi on the delivery notes.  2 Could somebody test it in ten minutes with a telephone and a screen?'));
out.push(p('**Language box – Practise (samples):**  1 I have not missed a Monday deadline in a year.  2 I take about seventy people a day at a counter and nobody has asked for somebody else.  3 I keep the stock card for ninety lines and it has balanced every month.  4 I deal with two suppliers in English by email and telephone.  5 I trained two new assistants; both are still here.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'If I had to write a CV today, I would have one year in a warehouse and nothing to say.'],
  ['B', 'Read me what you would write.'],
  ['A', 'Hard-working, reliable, good team player.'],
  ['B', 'Those are three things that cannot be checked. Only write what somebody could test in ten minutes.'],
  ['A', 'I can count a shelf of ninety lines against the screen in an hour. I found a difference of fourteen boxes in March and traced it to the gate. I have never had a delivery refused for bad packing.'],
  ['B', 'That is a year. And every one of them could be tested with a shelf and an hour.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('For each skill, listeners write the ten-minute test. If they cannot think of one, the skill is decoration and the class has just proved it without the teacher saying so. Typical errors: _good in English_ · _I have experience in use the system_ · _I am good at numbers_ is fine; _I am good in numbers_ is not.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Skill, as first written', 'How it could be checked', 'Skill, rewritten'], [
  ['good communication', 'put me on a call', 'I take telephone orders in Arabic and English and read every number back'],
  ['good with computers', 'sit me at the screen', 'I use the stock system and the invoicing screen daily; I learned both in a week'],
  ['organised', '—', 'I have not missed a Monday deadline in a year'],
], [1.5, 1.6, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I wrote _organised_. My partner asked how it could be checked and neither of us could say. Now it says: I have not missed a Monday deadline in a year."', 'Ask the class twice: what was the strongest skill in the room, and did the person who said it sound as if they believed it? The second question is the one worth the time.']));
out.push(stage('5', 'Read'));
out.push(p('1 _I am slower at writing long letters._ It makes the CV **stronger**: one honest limit buys belief in the other four lines.  2 Any two of: deals with suppliers in English by telephone; uses the stock system and invoicing screen; takes six-item orders and reads the numbers back; checks an invoice against the order and the note.  3 Because admitting that three of the four errors were ours is the proof that she looks at her own side first — a cautious writer would have deleted it, and it is the best line on the page.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Skills**', '**Languages** — Arabic (first language). English: I take telephone orders and write short emails to two Aleppo suppliers; I read price lists and invoices. I am slower at writing long letters and I would want a draft checked for a formal one.', '**Systems** — Stock system and invoicing screen, daily for one year. I learned both in a week and I have trained one colleague on the delivery notes.', '**Telephone** — I take orders of up to six items and read every number back. No order of mine has been returned for a wrong quantity.', '**Numbers** — I check every invoice against the order and the delivery note before it goes. I found four pricing errors last year, three of them ours.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four or five headings a reader can scan', '✓'],
  ['What you do, not what you are', '✓'],
  ['A number under at least two headings', '✓ – six items, four errors, one year'],
  ['One honest limit', '✓ – long letters'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "The box asks for one honest limit and yours is in the right place — at the end of the strongest heading, where it is read as confidence. Would you take a telephone call in English tomorrow with no warning? If yes, say that too."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the honest limits aloud. The class almost always finds that the limit made the rest more believable, which is the opposite of what they expect before they hear it.'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample(null, ['I can tell when a customer is about to complain before he says anything, and I can usually stop it with one sentence. I learned it at the bakery, where the queue was the whole business and a man who waited eleven minutes would not come back. It is useful every day: I go to the person who is standing differently, before he reaches the counter. It is never in an advertisement because nobody has a word for it, and if they wrote _good with people_ I would not know that was what they meant.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the person who is standing differently" — that is the whole skill in six words._   ✓ _could be checked by watching one hour._   ? _Who taught you to look for it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The unlisted skills are the ones employers say they cannot find. Ask which one the class would most want in a colleague, and then ask how it would ever get onto a CV.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['Old CV: "Excellent communication skills." Rewritten: "I take telephone orders of up to six items in Arabic and English, read every number back, and have had no order returned for a wrong quantity in a year."']));

// ===================== 13.6 =====================
out.push(pb());
out.push(h2('13.6  Tell me about yourself'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  It is nearly always the first question. The interviewer wants three things: can you organise an answer, do you know what the job is, and do you stop when you have finished.'));
out.push(p('**b**  Time it. Twenty seconds means the Then and Next moves are missing; three minutes means the Now move has turned into a life story.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the question she asked at the end)   **b**  1 Now (the pharmacy, with numbers), Then (the bakery and what it taught her), Next (why this work).  2 She stopped, said "that is me", and waited.'));
out.push(p('**Language box – Practise:** time each other. The move that is missing is almost always **Next**, and the fault is almost always that Next is said about the title (_I want a better position_) instead of about the work (_I want the customer to come back, not pass through_).'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Tell me about yourself.'],
  ['B', 'Now: I am an administrative assistant at a trading company in Mezzeh, and I have been there a year. I take the telephone orders — about fifteen a day — and I raise the invoices.'],
  ['B', 'Then: before that I was at a school office for two years, where I learned that if you do not write it down when the parent says it, it did not happen.'],
  ['B', 'Next: I want to do the whole of an order instead of the first half of it. That is me.'],
  ['A', 'Thank you. Anything you want to ask?'],
  ['B', 'Could I ask you one thing? What is the hardest week of the year here?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('The class times the answer and measures the silence at the end. Two seconds feels like ten to the person who is speaking, and that is the point of the exercise.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The move they remembered', 'What I will change'], [
  ['Nadia', 'Now — the fifteen orders a day', 'nothing; keep the number'],
  ['Fadi', 'Then — the school office line', 'move it earlier'],
  ['Hala', 'nothing from Next', 'say it about the work, not the job'],
], [1, 1.6, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"All three remembered the fifteen orders a day. Nobody remembered my Next, so I am going to say it about the work: I want to finish an order instead of starting one."', 'Count how many in the room found that Next was the forgotten move. It is usually most of them, and it is the move interviewers are actually listening for.']));
out.push(stage('5', 'Read'));
out.push(p('1 The second paragraph — the pharmacy with its numbers, then the bakery and what it taught her.  2 In paragraph three, and she puts the stock system, the four years and the week it took her to learn it immediately after.  3 When she can start, and an offer to come in and be tested on anything in the letter.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Warehouse and logistics assistant — Fadi Saeed', 'Dear Sir or Madam,', 'I am writing to apply for the warehouse and logistics assistant post advertised at the Chamber of Commerce. My CV is attached.', 'I have driven for Sham Trading since 2020, about forty drops a week, and I check the quantities against the note with the customer before he signs. Before that I drove for a bakery for two years, where I learned that a delivery argued about at the gate is a delivery nobody pays for.', 'I have never worked inside a warehouse and I have never used a stock screen. I have checked goods in and goods out at the gate every working day for six years, and I learned the new delivery notes in two days and then taught them to the warehouse supervisor.', 'I can start after two weeks. I would be glad to come in and be tested on anything in this letter.', 'Thank you for your time. Best regards, Fadi Saeed · Jaramana · 09__ ___ ___']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four paragraphs, no more', '✓'],
  ['Numbers in the Now paragraph', '✓ – forty drops a week'],
  ['The gap named, then answered', '✓ – the gate, six years, two days'],
  ['A practical close with an offer', '✓'],
], [3, 2]));
out.push(p('Sample band 3 feedback: "Paragraph three does what the box asks — the gap first, then the answer. The one I would look at is paragraph two: it is strong, but does it repeat the CV? The box says delete anything that does."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read paragraph three only. Ask whether the answer was stronger than the gap. When it is not, the letter is working against the writer.'));
out.push(stage('7', 'Write freely – sample (≈100 words)'));
out.push(sample(null, ['Now: I am an administrative assistant at a trading company in Mezzeh and I have been there a year. I take about fifteen telephone orders a day, raise the invoices and check them against the delivery notes before they go out.', 'Then: before that I worked for two years in a school office, where I learned to write down what a parent said while they were still saying it.', 'Next: I want to be responsible for a whole order, from the telephone to the signature, instead of the first half of it. That is me.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"from the telephone to the signature"_   ✓ _all three moves present._   ? _What would you ask them at the end?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Read three aloud with a watch running. The one closest to sixty seconds is rarely the one that makes you want to ask a second question — say which was which, and why.'));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['I said it to my sister. An hour later she remembered the fifteen orders a day and nothing else. She said the last part sounded like something I had read, which is exactly what it was, so I have rewritten it.']));

// ===================== 13.7 =====================
out.push(pb());
out.push(h2('13.7  Review & Mediate: what the advertisement is really asking for'));
out.push(stage('1', 'Get ready – Unit 13 quiz'));
out.push(p('**1** since March · for eleven years · since I left school.  **2** _already_ goes between **have** and the verb; _yet_ goes at the end, in questions and negatives.  **3** Because _in 2019_ is a finished time, so the verb must be past simple: _she worked_.  **4** Could somebody check the claim in ten minutes with a telephone, a screen and one question?  **5** Now, Then, Next — and then a **stop**, and one question of your own at the end.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (that the advertisement is not for people like him)   **b**  1 That somebody had to write a number; the four duties underneath are what the company actually wants.  2 The four duties, in the advertisement\'s own words, with his numbers in them.'));
out.push(p('**Language box – Practise (samples):**  _minimum two years in a similar role_ = have you done these duties? · _computer literate_ = can you be taught a screen without a month of help? · _excellent communication skills_ = can you be put on the telephone to a customer tomorrow?'));
out.push(stage('3', 'Practise – sample with advertisement 1'));
out.push(dlg(null, [
  ['B', 'I have no degree and I have never used accounting software. It says degree preferred and proficient in accounting software.'],
  ['A', 'Read me the duties.'],
  ['B', 'Entering invoices, checking supplier statements, chasing late payments by telephone, preparing the monthly figures.'],
  ['A', 'You have done three of those four for five years on paper and on a stock screen. _Preferred_ is not _required_ — it is there so they can choose between two people who are otherwise the same. And _proficient in accounting software_ means they do not want to teach you what an invoice is.'],
  ['B', 'So what do I put first?'],
  ['A', 'Their four duties, in their words, with your numbers in them.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the requirement that frightened the person and the duty that answered it. They are almost never the same line, and seeing that is the whole of the mediation.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The requirement that stopped them', 'The duty that answered it'], [
  ['Fadi', '"minimum two years in a similar role"', 'checking quantities against the note — six years, daily'],
  ['Hala', '"fluent English essential"', 'keeping customers informed of delays — she does it in two languages'],
], [1, 1.8, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s a notice for a warehouse and logistics assistant. The line that stopped him was _minimum two years in a similar role_. The duties underneath asked for checking goods in and out against the note, and he has done that at the gate for six years."', '⚠ **The ordinal.** This is the **first** unit of Book 2 and the mediation now carries something the document does not say outright: that the requirements and the duties were written by two different people. Keep the claim in every cycle 7 — the drift starts at the unit that leaves it out.']));
out.push(p('**Listener task:** the Book 2 office-word list starts here: _candidate · applicant · vacancy · desirable · essential · liaise_. Keep it on the board all term; it is added to in every unit.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '"Close Thursday 5 p.m." and late applications are not considered — so send it before Thursday evening.'],
  ['2', 'B', '**Desirable** is the key word: wanted, not required. _Essential_ is the one that means you must.'],
  ['3', 'B', 'A **referee** is a person who can be asked about you, not a letter and not a visitor.'],
  ['4', 'C', 'A **probation period** is a trial at the start of a permanent post, not the length of the job.'],
  ['5', 'B', '"Candidates shortlisted … will be contacted" — only those chosen for interview hear anything.'],
  ['6', 'A', 'A **notice period** is what you must give your employer before leaving.'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – exam sample (28 words)'));
out.push(sample(null, ['Hi Rasha, thanks for sending it. I am going to apply for the stock assistant post. The duties say checking quantities against the note, and I have done that for six years. I will send my CV on Sunday.']));
out.push(stage('6P', 'Check together'));
out.push(p('Count the three points: the post named ✓ · one matching duty in the advertisement\'s own words ✓ · what will be sent and when ✓. Twenty-eight words, so the length is met. ⚠ The commonest fault here is using a better word than the advertisement\'s — _stock control_ instead of _checking quantities against the note_. The reader is scanning for their own words.'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample(null, ['Two years ago I did not apply for an office job at a shipping agent because the notice said _minimum three years of administrative experience_ and I had one. I read it again last week. Underneath the requirements it asked for someone to answer the telephone, keep a filing system and chase documents — and I had done all three for a year, every day, and two of them better than the person who got it. The three years was a requirement. The telephone and the files were the job.']));
out.push(stage('HW', 'Homework – sample (≈40 words)'));
out.push(sample(null, ['First line of the application I would send now: "I am writing to apply for the post of administrative assistant advertised on 3 March. I have answered the telephone, kept the filing system and chased documents for a year, every working day."']));
out.push(pb());
out.push(stage('✓', 'Unit 13 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'a', 'c', 'b', 'b', 'b', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _since_ + a point in time.  **2** _for_ + a length.  **3** _ever_ is the question word; _yet_ goes at the end and _already_ means it is done.  **4** _yet_ at the end of a negative.  **5** _in 2019_ is finished, so past simple.  **6** _just_ = a moment ago, and it goes inside the verb.  **7** _good **at**_ + noun or -ing.  **8** _Before that_ names a finished job.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Now', 'For how long', 'Then', 'What it taught her', 'Next'], [[
  'counter assistant at a pharmacy (Latakia)', 'since 2021 — four years in January', 'three years at her uncle\'s bakery', 'to count money accurately at five in the morning', 'the same work where the customer comes back',
]], [1.3, 1.2, 1.2, 1.4, 1.3]));
out.push(note('Accept any clear wording. Do not accept "a pharmacy" alone for Now: the task asks what she does, not where.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample Now move (41 words)', ['I am an administrative assistant at a trading company in Mezzeh, and I have been there since March last year. I take about fifteen telephone orders a day, raise the invoices and check them against the delivery notes before they go out.']));
out.push(box('Marking the Unit 13 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'What they do (2) · where (1) · how long, with _for_ or _since_ (2) · **one number** (1) · 35 words or more (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ The number is worth a mark on its own, and it is the mark most often lost. A Now move with no number is a sentence anybody in the room could have written.',
  '⚠ Mark **C** on the five things above and nothing else. This is not the place to correct a CV; it is the place to check that _for_ and _since_ have arrived.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 13**'));
out.push(p('**1 The present continuous doing the perfect\'s work.** _I am working here since 2021._ Arabic has no present perfect and the continuous is the natural reach. Drill the two chunks — **for** + length, **since** + point — as whole phrases, and expect the fault back in Unit 16 when _used to_ arrives.'));
out.push(p('**2 A finished time word with the present perfect.** _I have worked there in 2019._ Teach the test, not the rule: is the **time** finished? _This morning_ changes tense at lunchtime, which sounds like a trick and is the clearest demonstration you will get.'));
out.push(p('**3 Decoration on the CV.** _Hard-working, reliable, motivated._ These are not grammar mistakes and they are the reason good people are not interviewed. The ten-minute test is the fix, and it works because the learner applies it themselves: nobody argues with a question they cannot answer.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 2 · Syria Edition · Unit 13 · Answer Key');
