// Proactive Business English B1 · Syria Edition · Book 1 · Unit 2 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 2  Telling the Story of a Working Day'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit has one idea and it is in 2.1 and 2.7.** A story shortens from the front: the scene goes first, then the constraint, and what survives is the damage and the nearest name. Everything in between — the sequence, *while*/*when*, *used to*, the listening moves — is a tool for keeping the front of the story alive. If a class leaves with only that sentence, the unit has worked.',
  '⚠ **Where the grammar is a choice and not a rule.** *While* and *when* are both correct in both places (2.3) and so are *used to* and the past simple (2.4). Mark the **choice**: ask the learner which thing they wanted the reader to see as long. A learner who can answer that has understood something a rule would have hidden.',
  '⚠ **One thing to be careful about in 2.5 and 2.7.** These two cycles ask learners to notice that a retelling can accuse somebody. In a real workplace that may be about a real colleague and a real manager. Keep it on the role cards unless the learner takes it elsewhere themselves, and never press for the name.',
], C.grey, C.navy));

// ===================== 2.1 =====================
out.push(h2('2.1  Before anything happened'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most learners cannot do it on the first attempt: they get two or three words into the scene and jump to the event. That failure is the cycle and it is worth letting them feel it.'));
out.push(p('**b**  The second. Four clauses of scene tell you four people were occupied and two of them could not move, so the question *could it have been avoided* has an answer. The first version has no answer to it, which is why it reads as carelessness.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Because in that order the note would read as carelessness — and because she has to write it for somebody who was not there.  2 That two men were up a ladder and that the lorry was fifty minutes early. The first makes the hands unavailable; the second makes it nobody\'s plan.'));
out.push(p('**Language box – Practise (samples):**  1 _The yard was full — we were counting in a pallet and the bay was blocked — when the lorry arrived an hour early. Nobody could clear the bay without stopping the count._  2 _Nadia was at the bank and Hala was alone on the counter when the system went down. Nobody could leave the till._  3 _We were cashing up and the shutter was already half down when he came in at four minutes past. Nobody could reopen the till without breaking the cash-up._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'We lost the whole afternoon and now the count is half entered and nobody knows which half.'],
  ['B', 'Stop there. I am going to have to write this down, and in that order it reads as a mess we made. Start before it started. What was happening at two?'],
  ['A', 'We were entering the stock count. It was the first of the month, so the counter was busy.'],
  ['B', 'Good. Who is "we"?'],
  ['A', 'Me, on the system. And Hala was on the counter on her own, because Nadia had gone to the clinic — her boy.'],
  ['B', 'So at two o\'clock two people were in the building, one of them on a till that would not stop.'],
  ['A', 'Yes. And I am the only one who knows the stock screen.'],
  ['B', 'That is the story. Now the system.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the scene and the constraint, then say whether the thing now sounds avoidable. **Typical errors:** _we was counting_ · _when the lorry was coming, we counted_ (which reverses picture and event) · _at seven o\'clock we have been counting_ · and the content fault, which is a scene with no constraint — a picture with spare hands in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The scene', 'Who was where', 'The constraint', 'Then: the event'], [
  ['we were counting in the Homs order', 'Abu Yasser + Fadi, yard; two men on the roof', 'nobody comes off a ladder quickly in rain', 'the lorry came 50 min early'],
  ['the stock count was half entered', 'Nour on the system; Hala alone on the counter', 'only Nour knows the stock screen', 'the system went down'],
  ['we were cashing up, shutter half down', 'Hala alone', 'the till was already counted', 'a customer came in at 4.04'],
], [1.6, 1.2, 1.3, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"We were entering the stock count and Hala was alone on the counter because Nadia was at the clinic. Nobody could leave the till. Then the system went down."', '⚠ Collect the constraints on the board. In most classes two or three are the **same** constraint — one person who knows one thing, or one person alone on a counter — and that repetition is a finding the room has produced without being told.']));
out.push(stage('5', 'Read'));
out.push(p('1 Six, across two paragraphs, and they are the scene and the constraint — the half the reader cannot get anywhere else and the half nobody writes.  2 It refuses to assign blame: *I am not saying the driver was at fault and I am not saying our men were.*  3 That Jaber Freight telephone the yard before a lorry arrives outside its window — and it already knows they do it for two neighbours, which turns a request into a precedent.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**NOTE — the stock count half entered, Wednesday 19th, from about 2 p.m.**',
  '**What was happening before it.** I was entering the March stock count on the system, which has to be finished before the quarter closes on the 31st. It was the first of the month, so the trade counter was busy from one o\'clock. Nadia was not in — she had gone to the clinic with her son at half past twelve — so Hala was alone on the counter.',
  '**The constraint.** I am the only person here who has used the stock screen. Hala could not leave the till and I could not leave the screen without losing the half I had entered.',
  '**What happened.** At about two the system went down and stayed down until five to four. Of the four store rooms, three were entered and the fourth was not. The count sheets are all safe and initialled, so nothing is lost; what is lost is the two hours.',
  '**What I am not saying.** I am not saying the system is unreliable — this is the second time this year. I am saying that one person can enter a stock count and that person cannot also answer a telephone.',
  '**What I would like.** Half a day with Hala on the stock screen, so that there are two of us. I will ask Mr Ayoub on Sunday.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The scene, in the past continuous, before the event', '✓ – two paragraphs of it'],
  ['The constraint, in its own line', '✓ – one person who knows the screen'],
  ['The damage counted and split', '✓ – three rooms entered, one not; sheets safe'],
  ['A "what I am not saying", and one ask', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says count the damage and split it, and yours does — three rooms and the sheets safe. The line I would look at is *this is the second time this year*: that is in the paragraph where you say you are **not** blaming the system, and it is the only piece of evidence on the page that it is unreliable. Is it doing what you meant it to do there?"'));
out.push(note('⚠ That is a real editorial question and the honest answer is usually no — the writer wanted the fact on the page and did not want to own it. Both are defensible; the point is to choose.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the scenes only and have the class guess what happened next. Where they guess right, the scene is working: it has told them where the weak point was before anybody named it.'));
out.push(stage('7', 'Write freely – sample (≈134 words)'));
out.push(sample(null, ['The worst morning I remember began normally and that is what made it bad. The shutter was up at seven, I was pricing the new wrap, and the delivery from Aleppo was due at nine, which I had forgotten was the same morning as the tax inspection. Nobody had written the inspection anywhere except in my own diary, which was at home. So at nine o\'clock there was a lorry at the gate, two men from the office of finance in the shop, and one person — me — who could speak to either of them. I spoke to the inspectors, because you do, and the lorry waited fifty minutes and then left with half of it still on. I do not think I made a wrong decision at any point that morning. I think the morning was decided the week before, when the inspection went in one diary.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the morning was decided the week before, when the inspection went in one diary"_   ✓ _past continuous for the situation._   ? _Where would you put it now?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most of these texts the real trouble is in the **scene** and not the event: one diary, one person who knows something, one counter with nobody spare. Say so after the third text, not before.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Our note about the March short delivery began *the order went out two boxes short*. The missing first paragraph: it was the 31st, two of us were doing the quarter-end, and the afternoon counter was covered by somebody on his second day who had never seen a picking list.']));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  And then, and then, and then'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Three or four *and thens* in six sentences is normal and the counting is the point.'));
out.push(p('**b**  The first is a sequence — four steps, nothing at stake. The second is a story, because something is at risk in it and the last clause pays for the first.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 At *the third one wants to order* — the thing the story was for.  2 It is the point; and anything after it is travel, which belongs at the end as a **cost**, not in the middle as an event.'));
out.push(p('**Language box – Practise (samples):**  1 _I saw three shops in Homs. Two will reorder in the spring. The third wants an account — forty boxes a month. It cost me two hours on the road._  2 _The wrap went out two short. The picking list was wrong before it left the office. The customer has been credited. It cost us a day of my time and his good opinion for a week._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'So I went to the bank, and I queued for half an hour, and then the girl said I needed the other branch, so I went to Mezzeh 86, and then they said no, it is this branch, and I came back, and I queued again.'],
  ['B', 'And what came of it?'],
  ['A', 'The account can be opened. They need the lease.'],
  ['B', 'That is the end of your story and it arrived last. Tell it again in four sentences.'],
  ['A', 'The second account can be opened at our own branch. They need a copy of the lease. Nobody had mentioned the lease. The appointment is Tuesday at ten.'],
  ['B', 'And the two queues?'],
  ['A', 'It cost me a morning.'],
  ['B', 'Then it belongs at the end, as a cost — and it is the sentence that gets somebody to telephone ahead next time.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the last sentence they hear and compare it with the point. **Typical errors:** _after that I was going_ · six consecutive _and thens_ · _in the end finally_ · and the content fault, which is a story that ends at the journey home.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['What it was', 'Four sentences — the last is the point', 'The cost'], [
  ['the bank', 'The second account can be opened at our branch. They need the lease. Nobody had said so. Tuesday at ten.', 'a morning'],
  ['the short order', 'Fourteen went out as twelve. The picking list was wrong before the gate. He is credited. It shows the gate check cannot catch an office error.', 'a day'],
  ['the label proof', 'Tannous will not approve by telephone. The proof is with them since the 14th. Nothing is late until the 24th.', 'nothing yet'],
], [1, 3, 0.9]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Ask what each learner cut, and whether anything cut was the actual point. In about one case in four it was: the thing that looked like travel turns out to be the finding, usually because it happens every week.'));
out.push(stage('5', 'Read'));
out.push(p('1 Each item gives the state of it and then **if they telephone** / **if they have not by —**, so the colleague has a next action either way. Item 3 is different because it carries a **do not**: do not raise the order until the credit form is back.  2 Because an instruction with a scar on it gets followed: *which is what happened to me on the 9th*.  3 Telephoning the writer — and it is believed because it says which outcome the writer fears: *I would rather be telephoned on the Tuesday than find out on the Sunday after*.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**HANDOVER — the week of the 22nd, from Hala to Bassel. I am away Sunday to Wednesday.**',
  '**Three things are live.** Everything else can wait for me.',
  '**1 · The Haffar credit note.** Raised, not sent — it is in the tray with the gate sheet stapled to it. **If he telephones:** tell him it is raised and I will post it Thursday. **If he has not telephoned by Tuesday:** do nothing; he is not waiting on it.',
  '**2 · The Tannous proof.** With them since the 14th. **No approval by telephone, whatever they say** — if the proof comes, it waits for me, and nothing is late until the 24th. If they press you, the answer is that I am back Thursday.',
  '**3 · The Saturday counter at Baghdad Street.** I am not there this week and nobody else is. **Either the store opens late at ten or it does not open.** Mr Ayoub has to choose and he does not know yet. This is the only thing on this page that could cost us a customer.',
  '**What I am not leaving you.** The complaints book. There are two open items, both quiet, both mine, and I would rather pick them up on Thursday than have them answered twice.',
  '**If something happens that is not on this page**, telephone me in the evening. I would rather hear it on Monday than read it on Thursday.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Live items, and a line saying the rest can wait', '✓ – three'],
  ['An "if" either way on each', '✓'],
  ['One item named as the expensive one', '✓ – the Saturday counter'],
  ['What is *not* being handed over, and why', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says say which item could cost money, and yours says a customer rather than money, which is braver. The thing I would ask about is item 3 — you have written that Mr Ayoub has to choose. Does he know that? Because at the moment the only person who knows he has to choose is away from Sunday."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Ask whether the class could have spotted the expensive item unprompted. They usually can — it is the one with a person in it rather than a document.'));
out.push(stage('7', 'Write freely – sample (≈136 words)'));
out.push(sample(null, ['I came back from four days away last year to find that nothing had gone wrong and nobody had done anything either. The four items I had left were all exactly where I had left them, with my own handwriting on them. What had happened instead was a fifth thing, which was not on the page: a supplier had telephoned to say a price was going up on the first, and the person who took the call had written it on a slip and put it on my chair, and that was entirely correct of him. By the time I read it the first had passed and we had taken forty boxes at the new price without quoting it on. Nobody was at fault. What I write differently now is a line at the bottom: *anything with a date in it, telephone me, whatever it is about.*']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"anything with a date in it, telephone me"_   ✓ _the sequence stops at its point._   ? _Did the person who took the call ever know what it cost?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Separate *missing from the handover* from *in the handover and not read*. Both appear, and the second is commoner than anybody admits — which is the argument for four items rather than nine.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['Four live items, each with an "if": the credit note (if he telephones / if not by Tuesday), the proof (no telephone approval), the Saturday counter (Mr Ayoub must choose by Friday), the bank appointment (in my name — telephone first). The expensive one is the counter.']));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  While I was waiting'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect the *while* sentences to be about long dull things and the *when* sentences to be about moments — which is exactly right, and worth naming once they have done it.'));
out.push(p('**b**  The first is the natural one. The second is grammatical and makes the telephoning a point rather than a stretch of time. The third is wrong: *while* with the past simple of an action in progress reads as two completed events.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *While* for the long thing — the queue, the writing, the system being down; *when* for the moment something changed.  2 Because the hour and a half **is** the story: it is why three payments ended up on a pad, and *when I was queueing* shrinks it to a point and loses the reason.'));
out.push(p('**Language box – Practise (samples):**  1 _While I was at the bank, 800,000 came over the counter_ / _When I got back, there were three payments on paper._ — the first is better, because the absence is the point.  2 _While the system was down we wrote on a pad_ / _When the system came back we had three to enter._ — both good; the first explains, the second reports.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I was with the engineer at the machine for an hour and when I came out everything had gone wrong.'],
  ['B', 'Tell me in two halves. What were you doing, and what happened?'],
  ['A', 'While we were working on the limit switch, the power went.'],
  ['B', 'And the generator?'],
  ['A', 'While we were waiting for it, it did not start. That is the whole thing — it has never not started before.'],
  ['B', 'So two things were running and one interrupted the other.'],
  ['A', 'Three. While the generator was being bled, a delivery arrived and there was nobody at the gate.'],
  ['B', 'Say the last part with *when*.'],
  ['A', 'When the engineer finally packed up, the delivery had been standing at the gate for twenty minutes. By then the driver had telephoned his own office.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners draw the long line with ticks on it. **Typical errors:** _while I waited, he was arriving_ (both the wrong way round) · _when I was going to the bank, the system was going down_ (two continuous clauses and no event) · _during I was waiting_ · and the content fault, which is three things crammed into one sentence.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['While I was… (the long thing)', '…, (the moment)', 'Which is the story?'], [
  ['while I was at the bank', 'a customer paid 800,000 in cash', 'the long thing — the absence is why it went on a pad'],
  ['while the system was down', 'two more payments were taken', 'the long thing'],
  ['while I was up the ladder', 'the count sheet blew off the bench', 'the moment — the sheet is the problem'],
  ['while we were cashing up', 'he came in at four minutes past', 'the moment'],
], [1.8, 1.8, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Listen for sentences with the long thing and the moment reversed. It is common and it reverses the meaning: *when I was counting, the lorry was arriving* makes the count the interruption, which is the opposite of what the speaker means and the opposite of what the note should say.'));
out.push(stage('5', 'Read'));
out.push(p('1 From the day book and from what Hala and Nadia told her, written the same evening — and the heading says so because a log written from memory a week later is a different document and the reader is entitled to know which this is.  2 The money: *the money is right and was always right*.  3 A change to the system, and a second person on the counter — because both are larger arguments and a note that opens two arguments gets a meeting in three weeks instead of a 2,000 pad.'));
out.push(stage('6', 'Write with help – sample (131 words)'));
out.push(sample(null, [
  '**LOG — the morning the gate was blocked, Tuesday 11th. Written the same afternoon from the gate sheet and from what Fadi told me.**',
  table(['Time', 'What was running', 'What happened'], [
    ['7.00', 'shutter up; Fadi loading the Ghouta van', '—'],
    ['7.20', 'still loading; one bay free', 'a skip lorry parked across the gate'],
    ['7.20–8.05', 'the van half loaded and unable to leave', 'Fadi could not move either vehicle'],
    ['7.45', 'still blocked; the Ghouta drop due at nine', 'I telephoned the builders; no answer'],
    ['8.05', 'still blocked', 'the skip driver came back of his own accord'],
    ['8.40', 'the van loaded and away', 'the Ghouta drop arrived at 9.50'],
  ], [0.7, 2, 2.3]),
  '**What this log is for.** Nothing was damaged and nothing was lost. What we lost was fifty minutes at the start of the day, and the customer was told 9.50 at 9.40 rather than at 7.30, which is the part I would rather not repeat.',
  '**What I am asking for.** A telephone number for the builders on the card by the gate. ⚠ Not a complaint to the municipality and not a bollard: both are arguments and this was fifty minutes.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A "what was running" column in the past continuous', '✓'],
  ['Where the facts came from, in the heading', '✓'],
  ['What was never wrong', '✓ – nothing damaged or lost'],
  ['One cheap ask, big asks declined', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says say what was not wrong and yours does. The sentence I would look at is the one about telling the customer at 9.40 — that is the only thing on the page that was in your control, and it is in the paragraph headed *what this log is for* rather than in the ask. Where do you want it?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the middle columns only. A good middle column tells you the shape of the morning with no events at all — which is the test of whether the past continuous is doing its work.'));
out.push(stage('7', 'Write freely – sample (≈130 words)'));
out.push(sample(null, ['The week I was in Latakia the shutter motor burned out, and I did not hear about it until I came back on the Thursday. Nobody was hiding it. Hala telephoned Mr Ayoub, who sent for the fitter, and the fitter came the next morning, and by Wednesday it was working. What nobody did was telephone me, because what could I have done from Latakia? Nothing, which is true. But the motor was four months old and under guarantee, and the guarantee paper was in my drawer, and because nobody knew that we paid 180,000 for a repair we were entitled to free. I have put the guarantee papers in the office file since, and told everybody where they are, which is the only part of this that is actually my doing.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"what could I have done from Latakia? Nothing, which is true."_   ✓ _while and when chosen on purpose._   ? _Who would you want telephoned now, and about what?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count how many found out the same day. The slow ones are rarely concealment; they are almost always somebody deciding, reasonably, that the absent person could do nothing — and the cost is always a piece of information only the absent person had.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['My hour, logged: what was running — a stock count and one person on the counter — shows that of the five interruptions, four could have waited and one could not. A list of times would have shown five interruptions and no way of telling them apart.']));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  We used to do it the other way'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The second question is the useful one: in most workplaces two of the three changes were decided and one simply drifted, and nobody has ever separated them.'));
out.push(p('**b**  Right: _We used to deliver on Thursdays_ and _We would deliver on Thursdays_ (the second only inside a narrative already in the past). Wrong: _We are used to deliver_ — a different structure entirely, which is Book 2 Unit 17 — and _We use to deliver_.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 They used to sign the driver\'s note at the gate without counting; the new way costs twenty minutes a lorry and has found three errors this year.  2 A practice with a date on it is a **decision** and can be argued with; a practice with no date is a habit, and all anybody can do with a habit is ask why.'));
out.push(p('**Language box – Practise (samples):**  1 _We used to sign at the gate. He would hand it over and I would sign it. It costs twenty minutes a lorry now and has found three errors._  2 _We used to telephone orders through and write them on a pad. Whoever answered would write it down. It costs the time of typing an order now, and it has ended the arguments about box codes._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The fourteen-day price. The auditor is going to ask when it started.'],
  ['B', 'It started the year the price of imported wrap moved twice before March.'],
  ['A', 'Tell me what you used to do before that.'],
  ['B', 'We used to print a list in January and hold it all year. Customers would telephone, we would read the price off the list, and that was the price until the following January.'],
  ['A', 'And that worked, for how long?'],
  ['B', 'Years. It worked because the list was true for a year. When prices started moving twice a year we went on reading from it, and we sold about two months at a loss before anybody noticed.'],
  ['A', 'So the practice was fine and the circumstances moved.'],
  ['B', 'The practice was fine until it was not. Now a price is held fourteen days in writing. It costs us a re-quote and some customers do not like it.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the old practice, the turn and the cost of the new way. **Typical errors:** _we use to sign_ · _we didn\'t used to count_ · _we would sign at the gate_ with no *used to* in front of it, so the reader does not know it is the past · and the content fault, which is a change with no turn named.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['We used to…', 'It worked because…', 'The turn', 'The new way costs'], [
  ['sign at the gate', 'the same driver brought the same pallets', 'the haulier changed drivers twice', '20 min a lorry'],
  ['print one price list a year', 'prices held for a year', 'prices moved twice before March', 'a re-quote every 14 days'],
  ['take orders on a pad', 'one supplier, one person ordering', 'a second supplier with similar codes', 'typing every order'],
], [1.4, 1.4, 1.2, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(p('⚠ Write down every practice that changed with **no turn** — nobody can say what moved. Those are the ones most likely to be reversed by the next person, because there is nothing on the record to stop them.'));
out.push(stage('5', 'Read'));
out.push(p('1 Because that is exactly why they are worth recording: nothing went wrong **enough to force a change**, and the company changed anyway. A page that only records expensive failures teaches that nothing is worth fixing until it has cost money.  2 That nobody authorised it — the supervisor decided two hours a week of his own time was acceptable and it has never been reviewed. ⚠ And that the company is saying so rather than waiting to be asked.  3 It names the company\'s own gap before the auditor finds it, which is the only move in an audit that cannot be beaten — and in practice it is also how the gap gets fixed.'));
out.push(stage('6', 'Write with help – sample (145 words)'));
out.push(sample(null, [
  '**PRICES — the practice, how it used to be, and when it changed**',
  '**Before March 2025.** We used to print a price list in January and hold it to the following January. A customer would telephone, whoever answered would read the price off the list, and that was the price. This worked for as long as anybody here remembers and nobody thought about it, because for years the list was true for a year.',
  '**What changed.** In the first quarter of 2025 the imported wrap price moved twice before March. We went on reading from the list for about two months, and on wrap we sold at or below cost for that time. We do not know the exact figure, because we were not tracking it, which is itself part of what changed.',
  '**Since 1 April 2025.** A price is quoted in writing, with the date on it, and held fourteen days. After fourteen days we re-quote. Nothing is held longer, for anybody, including the three customers who have asked.',
  '**What it costs.** A re-quote on about one order in six, and a conversation with customers who liked the old way. Mr Ayoub decided it; the fourteen days was his figure and he chose it because it is one pay cycle.',
  '**What it has found.** Two orders this year that would have gone out below cost.',
  '**What we have not done.** We have never gone back and worked out what the two months of 2025 actually cost. We know roughly and we have never counted it.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_Used to_ and _would_ correct, and dated', '✓ – before March 2025 / since 1 April'],
  ['The turn, with what moved', '✓ – the price moved twice before March'],
  ['What it costs, and who decided', '✓ – Mr Ayoub, and why fourteen'],
  ['A "what we have not done"', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says record the near-miss, and your *we do not know the exact figure* line does something better — it records a gap in the middle of the history. The thing I would ask is in the last paragraph: you say you know roughly. What is roughly? Because the page would be stronger with a bad number in it than with none."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the "what we have not done" paragraphs. Ask which admission each writer was most tempted to leave out — and then ask what would have happened if an auditor had found it instead.'));
out.push(stage('7', 'Write freely – sample (≈138 words)'));
out.push(sample(null, ['Nobody has ever reviewed the way we file delivery notes. They go on a spike by the gate in the order they arrive, and at the end of the month the spike goes in a box, and the box goes on a shelf with the month written on it in marker. It has been like that since before I came, which is nine years. The man who started it has been dead for four of them. It works perfectly well until somebody asks for one note from eighteen months ago, which happens perhaps twice a year and takes an hour each time. The turn that would change it is an audit or a dispute big enough to need six notes at once. Until then nobody will touch it, and I include myself: I have known for nine years and the spike is still on the wall.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"the man who started it has been dead for four of them"_   ✓ _used to / would correct._   ? _What would the turn have to be?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts in which the person who decided has left. Where they have, nobody can say why the practice exists — and that, rather than laziness, is the commonest reason a poor practice survives a decade.'));
out.push(stage('HW', 'Homework – sample (≈50 words)'));
out.push(sample(null, ['I asked Abu Yasser what the gate sheet was the summer of. He said "the summer the three pallets went to Jaramana", and then gave me the year without hesitating: 2024, the second week of August. Nobody had written it down anywhere.']));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  Being the one who listens'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Most lists come back with three acknowledgements and one question, and the question is usually *why*.'));
out.push(p('**b**  Keeps it going: _Right. · Did he really? · And then what? · So you mean nobody signed._ Stops it: _Why didn\'t you telephone me?_ — however reasonably it is asked.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Hala stops and begins to account for herself — *I did not know until Friday* — and the account is over.  2 Nour names what she has just done, restarts, and then uses *mm*, *and then what* and the echo; Hala volunteers the picking list, which is the finding, and then arrives at *so it is mine* without being asked.'));
out.push(p('**Language box – Practise (sample):**  Four moves and no *why*: _"Mm." · "And then what?" · "So you mean the gate sheet was right and the order was not filled." · "And where does a picking list come from?"_ ⚠ The fourth is the only question with a question mark in it, and it is about a **document**, not a person.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The proof never came and we have lost a week.'],
  ['B', 'Mm. And then what?'],
  ['A', 'And then I telephoned them on the Thursday and they said they had sent it on the Friday before.'],
  ['B', 'So you mean it was sent and did not arrive.'],
  ['A', 'That is what I mean. And — this is the thing — he read the address back to me and it has an *l* in it that should not be there.'],
  ['B', 'Ah.'],
  ['A', 'Which means it bounced somewhere and nobody saw it, because the bounce went to their outbox, not ours.'],
  ['B', 'And where did they get the address from?'],
  ['A', 'From the order I typed.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners count the moves and write the sentence volunteered after the echo. There is almost always one and it is almost always the important one. **Typical errors:** _So you mean that nobody did not sign_ (a double negative the echo invites) · _And then what happened then?_ · and the content fault, which is a *why* in disguise: *and you did not think to check?*'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['My move', 'What they said', 'Volunteered, not asked for'], [
  ['And then what?', 'they said they had sent it the Friday before', '—'],
  ['So you mean it was sent and did not arrive.', 'that is what I mean', '"he read the address back and there is an *l* in it"'],
  ['Ah.', 'which means it bounced to their outbox', '—'],
  ['And where did they get the address from?', 'from the order I typed', 'the admission, unprompted'],
], [1.1, 2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Count the hands that wanted to ask *why did you not*. It is nearly everybody, and the honest reflection is that the question is not cruel — it is simply the fastest route to a defence instead of a fact.'));
out.push(stage('5', 'Read'));
out.push(p('1 Because it is a note of somebody else\'s account and not a verdict; four words of honesty cost nothing and change what the note is.  2 Whether the order was legible, whether Hala was alone, and whether the fourteen was a late telephone addition — and the writer refuses to write that it was Hala\'s fault until she knows. *Unfinished is better than wrong.*  3 **A gate check against the picking list cannot catch a picking list that is wrong.** It is not about Thursday and it is the more expensive of the two findings.'));
out.push(stage('6', 'Write with help – sample (137 words)'));
out.push(sample(null, [
  '**NOTE — the Tannous proof, a week lost. From a conversation with Bassel, Thursday. His account, not mine.**',
  '**What he found.** The proof was sent on the 15th and never arrived. He telephoned on the 21st and they read the address back to him.',
  '**The documents.** The **order** we sent carries the address with an extra letter in it. Their **sent items** show it going to that address. Our **mailbox** shows nothing, which is consistent.',
  '**Where the address comes from.** It is typed on the order by whoever raises it. On the 14th that was Bassel.',
  '**What he said about that, in his own words.** *From the order I typed.* He said it without being asked, having worked through the three documents himself.',
  '⚠ **What I am not writing.** I am not writing that the week is Bassel\'s fault, because I do not know whether the address was copied from an older order that already had the error, and I have not looked. I will look on Sunday and finish this note then.',
  '**What is already certain, whatever the answer.** We have no way of knowing that an email we send has not arrived, and a proof is the one document where a week of silence looks exactly like a week of work.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose account it is, in the heading', '✓'],
  ['The documents, and where each comes from', '✓'],
  ['Their own words where they are the finding', '✓ – *from the order I typed*'],
  ['What is not yet written, with a date — and the system point', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says separate the day from the system. Your last paragraph does it twice and the second half is the better one — *a week of silence looks exactly like a week of work*. Is that in the right place, or is it the thing the whole note is about?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read only the "certain whatever the answer" paragraphs and sort them: about a day, or about a system. The system ones are the reason to write the note at all; the day ones would have been obvious on the Friday.'));
out.push(stage('7', 'Write freely – sample (≈132 words)'));
out.push(sample(null, ['The best listening I ever had at work was from a foreman who said almost nothing. I had come to tell him that a batch was wrong and I was braced for an argument, because the batch had been signed off by his own man. He said "go on", and then "and then?", and then nothing at all for about ten seconds, which I filled by saying that actually the specification we had sent was ambiguous. I had not planned to say that. I had not even thought it until the silence. He said "then we will change the specification and we will both pay half", and that was the end of it, in four minutes. I have thought since that he did it on purpose and I have never had the courage to ask him.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"I had not even thought it until the silence"_   ✓ _the four moves, no accusation._   ? _Do you do this yourself, or only notice it?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In most of the texts where nobody listened, the unsaid thing turned out to matter — and it was paid for much later. That delay is the real cost of *why did you not*, and it is why the cycle sits here rather than in a unit about complaints.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I listened to Fadi about the Ghouta run using only the four moves. After the echo he volunteered that he has been leaving twenty minutes early for a year because of the Jaramana junction, and that nobody knows. The run is timed from the wrong number in our own planning.']));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  And that was the point'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open, and the *because* is often not what the teller expected — which is the most useful thing that happens in this stage.'));
out.push(p('**b**  A point: _so we are never going to accept a telephone approval again._ An ending: the other two. ⚠ _and in the end he paid_ is a result, not a point: nothing changes on Monday because of it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Nobody has ever been more careful because they were told to be; it is not dishonest but **unfinished**.  2 A change with a cost on it — the gate check against the order, five minutes a lorry — or, honestly, the nil return: *I cannot see a change that would have caught this.*'));
out.push(p('**Language box – Practise (sample, four sentences):**  _"Fourteen went out as twelve. What that shows is that a gate check against the picking list cannot catch an error made before it. So what I propose is checking against the order, with both documents at the gate. It would cost about five minutes a lorry and would have caught this one error this year."_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'So the lorry was hit by another lorry in the street, and the wrap went on the road, and we lost eleven boxes. We must all be more careful at that junction.'],
  ['B', 'No. What changes on Monday?'],
  ['A', '…Nothing. Our man was parked legally and somebody drove into him.'],
  ['B', 'Then say that.'],
  ['A', 'I cannot see a change that would have caught this.'],
  ['B', 'Good. That is a complete answer and I believe it. Write the first three sentences and that one, and we will leave it.'],
  ['A', 'It feels like giving up.'],
  ['B', 'It is the opposite. You have looked for a change and there is not one. If you invent a rule now, somebody will be obeying it in five years for no reason.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four sentences and vote. **Typical errors:** _What that shows that…_ · _I propose to checking_ · _It would cost five minutes and catch it_ with no figure for how often · and the content fault, which is three things it shows instead of one.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['What happened', 'What it shows', 'What I propose', 'Cost / what it catches'], [
  ['14 went as 12', 'the gate check cannot catch an office error', 'check against the order', '5 min a lorry / one error a year'],
  ['a proof approved by telephone', 'an approval with no number cannot be proved', 'proof number on every approval', 'nothing / every colour dispute'],
  ['a lorry hit in the street', '—', '**nil return** — I cannot see a change', '—'],
], [1.3, 1.4, 1.4, 1.4]));
out.push(note('⚠ The third row is a model answer, not a gap. A class in which nobody produces a nil return has learned to invent rules, which is a worse habit than the one this cycle set out to cure.'));
out.push(stage('4R', 'Report – sample'));
out.push(p('The class votes yes, no or *not yet*, and *not yet* must come with the missing question. ⚠ Write down every proposal with no cost stated: those get *not yet* every time, and should.'));
out.push(stage('5', 'Read'));
out.push(p('1 That the order was legible, Hala was alone, and the thirteenth and fourteenth boxes were a telephone addition at 4.40 **after** the picking list was typed — so it is not a picking error at all, and the note never says whose fault it is.  2 As a single sentence of arithmetic — *one error a year for about four hours a year of warehouse time* — and she concedes: *I think that is worth it and I can see that somebody might not.*  3 A rule about late telephone additions, because they are a quarter of the afternoon and the reason that customer is a customer.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**THE TANNOUS PROOF — what happened, what it shows, and what I propose**',
  '**What happened.** A proof was sent to us on 15 October and never arrived. The address on our order has an extra letter in it. Their sent items show the message leaving; our mailbox shows nothing. I have since checked the three previous orders and the error is on all of them, so it was copied forward and did not begin on the 14th.',
  '**What it shows.** One thing: **we have no way of knowing that an email we have sent has not arrived**, and the document where that matters most is a proof, because a week of silence looks exactly like a week of work.',
  '**What I propose.** Any proof not acknowledged within two working days is telephoned about. One telephone call, by whoever sent it.',
  '**What it would cost, and what it would catch.** Perhaps six telephone calls a year, two minutes each. It would have caught this and the two weeks we lost in March on the same thing without knowing it. ⚠ Twelve minutes a year against two lost weeks: I do not think that needs arguing.',
  '**What I am not proposing.** A read receipt on everything. We tried it in 2024, people turned it off, and it told us nothing we would have acted on.',
  '**And one thing I have already done.** The address is corrected on the template, and the three old orders are corrected in the file so nobody copies them forward again.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What happened, with the documents', '✓'],
  ['**One** thing it shows, not about the day', '✓'],
  ['Cost and catch in one sentence', '✓ – twelve minutes against two weeks'],
  ['Something not proposed, something already done', '✓'],
], [3, 2]));
out.push(p('**Sample band 3 feedback:** "The box says the cost and the catch go in one sentence so the reader can judge, and yours is the strongest arithmetic I have seen in this class. The line I would ask about is *the two weeks we lost in March on the same thing without knowing it* — is that certain, or is it what you now think happened in March?"'));
out.push(note('⚠ A good question: a proposal is strengthened by a second instance and destroyed if the second instance turns out to be a guess presented as a fact. That is Unit 9\'s subject and it is worth flagging forward.'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Read the cost-and-catch sentences and vote. A sentence that cannot be voted on is not finished — and that, rather than any grammar point, is the test this cycle sets.'));
out.push(stage('7', 'Write freely – sample (≈133 words)'));
out.push(sample(null, ['I was told to be more careful about the bank run after I left the bag in the car for ten minutes. The words were "you need to be more careful", and I agreed, and nothing changed, and nine months later somebody else left the bag in the car for twenty minutes and was told the same thing. What a proposal would have looked like: the bag goes in the safe before anything else, including the telephone, and whoever carries it says out loud where it is when they put it down. Thirty seconds, every time, and it catches exactly the thing that happened to both of us, which is not carelessness — it is a person coming through a door with a bag and a ringing telephone and one pair of hands.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _"one pair of hands"_   ✓ _the four sentences._   ? _Did it happen again?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Count the texts in which the same thing happened again. The room has just measured the success rate of *be more careful*, and the figure is worth writing on the board.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Four sentences to Mr Ayoub about the bank bag: what happened, that a person with a bag and a ringing telephone has one pair of hands, that the bag goes in the safe before the telephone is answered, and that it costs thirty seconds. He said yes in a minute and wrote it on the counter card.']));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: tell it the way the driver told it'));
out.push(stage('1', 'Get ready – Unit 2 quiz (answers)'));
out.push(p('**1** The **past continuous**, and the scene decides whether the thing was avoidable.  **2** At the thing it was for; everything after that is travel.  **3** *While* takes the **long** thing; *when* takes the **moment**.  **4** *Why did you not…?*  **5** It is unfinished — nobody has ever been more careful because they were told to be.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 He dropped the scene — four men, two up a ladder, rain, a lorry fifty minutes early — and Nour puts back the constraint and the early lorry.  2 **The constraint.** You may cut adjectives, weather and opinions of third parties; you may not cut the reason nobody acted, because without it the account accuses whoever was nearest.'));
out.push(p('**Language box – Practise (sample repair):**  _"One thing I should have said and did not: two of them were up a ladder in the rain and the lorry was fifty minutes early."_ — one sentence, flat, no emphasis, said before a decision is taken.'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['A', 'I told Mr Ayoub the counter was shut for twenty minutes on Tuesday.'],
  ['B', 'And what did he say?'],
  ['A', 'He said it must not happen again.'],
  ['B', 'Then he has heard that somebody wandered off. What had actually happened?'],
  ['A', 'A skip lorry was across the gate and Hala went out to find the driver, because Fadi was on the Ghouta run and Abu Yasser was not in.'],
  ['B', 'And she put a note on the door.'],
  ['A', 'She did. I did not mention the note.'],
  ['B', 'So the twenty minutes was her solving a blocked gate on her own, with a note on the door, and what he heard was an unmanned counter. What is your one sentence?'],
  ['A', '"She was out at the gate moving a skip lorry and she put a note on the door."'],
  ['B', 'Say it today. He has not decided anything yet.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one-sentence repair and say who it protects. ⚠ Then the harder question: whether that person will ever know it was needed. Usually not, which is worth sitting with for a moment.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Who I told', 'How I told it', 'Who they thought was at fault'], [
  ['a colleague, in 30 seconds', 'damage first, no scene', 'the warehouse'],
  ['a colleague, in two sentences', 'constraint first, then the damage', 'the booking — nobody here'],
], [1, 1.6, 1.8]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"I told Hala in thirty seconds and she thought the warehouse had been careless. I told Fadi in two sentences, starting with the ladder and the rain, and he said it sounded like a booking problem. What I had dropped the first time was the constraint — and I dropped it because it takes four clauses and the damage takes four words."']));
out.push(p('This is the **second** unit of this book, and the unwritten thing is the one the whole unit has been circling: **a story shortens from the front.** The scene goes first, then the constraint, then the proportion, and what survives is the damage and the nearest name — which is an accusation that nobody ever made. ⚠ It is worth saying out loud, because every learner in the room has both suffered from it and done it, usually in the same week.'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 4)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7'], [['Answer', 'B', 'A', 'B', 'A', 'C', 'A', 'C']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** B — the opposite is stated: nothing **was** counted against the order.  **2** A — *worked for several years*.  **3** B — *neither cost us money*.  **4** A — *about twenty minutes a lorry*.  **5** **C** — the notice says the check takes twenty minutes and says nothing about who decided that was acceptable. ⚠ This is the question learners get wrong, because the practice page in 2.4 *does* say the supervisor decided — they answer from the unit instead of from the text.  **6** A — *it is not on the system*.  **7** C — the haulier changed **drivers**; whether the haulier itself was changed is not stated.'));
out.push(note('⚠ Part 4 is the part of the examination that B1 candidates lose most marks on, and always for the same reason: **C is a statement about the text, not about the world.** Teach the question as *is this written here?* and not as *is this true?* Questions 5 and 7 are both there to produce that mistake in a lesson rather than in an examination.'));
out.push(stage('6', 'Write with help – exam sample (43 words)'));
out.push(sample(null, ['Half a pallet of wrap went onto the yard floor this morning: fourteen boxes, four water-marked. The lorry came fifty minutes early while two men were up a ladder. Please leave the four marked boxes in the small store and do not throw any away.']));
out.push(stage('6P', 'Check together'));
out.push(p('All three points: what happened (fourteen boxes, four marked) · the constraint (early lorry, two men on a ladder) · what to do (leave them, throw nothing away). Forty-three words. ⚠ The commonest fault is dropping the constraint to save words — which is the unit\'s own subject committed in the examination.'));
out.push(stage('7', 'Write freely – sample (≈136 words)'));
out.push(sample(null, ['At about half past one on the Wednesday I was entering the stock count and Hala was alone on the trade counter, because Nadia had gone to the clinic. It was the first of the month, so the counter had been busy since one. Nobody could leave either job. The system went down at about ten past, while Hala was writing an 800,000 cash payment into the day book; two more payments came in while it was down and went onto a pad; it came back at five to four; and all three were entered against the pad by half past. The money was right throughout. What it shows is one thing: for two hours and fifty minutes the only record of 800,000 was one line of handwriting, and the only person who had seen it paid was standing at the till.']));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I passed on the yard account to Mr Ayoub myself, keeping the ladder and the early lorry. He did not ask whose fault it was at all. He asked whether Jaber Freight telephone their other customers before a lorry arrives, which is the question I had put at the bottom of the note.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 2 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'a', 'b', 'b', 'a', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(p('**1** _were counting_ — the picture.  **2** _**While**_ + the long thing.  **3** _**When**_ + the moment.  **4** _used to_.  **5** _didn\'t **use** to_ — no *d*.  **6** _**would** hand it over_ — the repeated action inside the old practice.  **7** _you **mean**_.  **8** _what that **shows**_ — the third-person -s again.'));
out.push(note('⚠ Question 8 is the -s from Unit 1 in a new costume, and a learner who gets 6 of Unit 1 and misses 8 here has not transferred it. Expect that, and drill the chunk *what that shows is* rather than the rule.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['What was running', 'How many men, and where', 'The constraint', 'The lorry', 'The damage, counted'], [[
  'counting in the Homs order', 'four — two on the count, two on the roof', 'nobody comes off a ladder quickly in the rain', 'came 7.10, booked for eleven', '14 boxes; 4 water-marked, 10 sound',
]], [1.2, 1.4, 1.5, 1.2, 1.4]));
out.push(note('The fourth gap needs **both** numbers — arrived and booked. *Early* alone is the vivid half and not the fact; the fifty minutes is what makes the account about a booking. Accept any clear wording, but not *early*.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (64 words)', ['Fourteen boxes went out as twelve on the 20th; the picking list said twelve and the gate sheet matched it. What that shows is that a gate check against the picking list cannot catch an error made before the picking list. I propose checking against the order, with both documents at the gate. It would cost about five minutes a lorry and would have caught this.']));
out.push(box('Marking the Unit 2 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap, any clear wording.'],
    ['**C Writing**', '7', 'What happened, with a number (2) · **one** thing it shows (2) · a proposal (1) · its cost **and** what it catches (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ The two marks for *what it shows* are lost by anything that could be said of any incident. **_We must all be more careful_ scores 0 of 2**, as does *communication could be better*. Write the reason on the script once; it does not need writing twice.',
  '⚠ A **nil return** scores full marks for the proposal and the cost — *I cannot see a change that would have caught this* — provided the first two parts are done. Say so before they write, or the brave answer gets the cautious mark.',
  '⚠ Do not take marks off for a cost that is a guess, if it is labelled as one. *Perhaps five minutes* is a usable figure; *some time* is not.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 2**'));
out.push(p('**1 The scene told as an excuse.** Some learners, having been taught to put the scene first, will write four clauses of scene **in order to be forgiven**, and the register gives it away: *of course we were extremely busy and as you know we are short-staffed*. The repair is the 2.1 discipline — the scene is **facts with no adjectives**: who was where, what was running, what nobody could leave. ⚠ If an adjective is doing the work, the sentence is an excuse. Cut *extremely*, *terribly*, *as you know* and see whether anything is left.'));
out.push(p('**2 _Would_ without _used to_.** *He would hand it over at the gate* with nothing in front of it leaves a reader unsure whether this is the past or a hypothetical — and after Unit 8, when *would* becomes the conditional, the same sentence becomes genuinely ambiguous. So teach the pair as a pair from the start: **_used to_ opens, _would_ continues.** It costs nothing now and saves a real confusion in six weeks.'));
out.push(p('**3 The echo that becomes an interrogation.** 2.5 gives learners *so you mean…* and some will use it four times in a row, which stops being listening and becomes cross-examination. ⚠ The rule worth giving: **one echo per account**, placed where you think the speaker is about to find something. The rest of the listening is *mm* and *and then what*. A learner who echoes everything is not accused of anything by the harness or by the page, and will be told so by the first colleague they do it to.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 2 · Answer Key');
