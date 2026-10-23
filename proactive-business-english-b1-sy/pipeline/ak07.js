// Proactive Business English B1 · Syria Edition · Book 1 · Unit 7 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 7  Cause, Effect and the Written Explanation'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This is the unit with consequences outside the classroom.** 7.5 asks learners to choose between *caused*, *led to* and *contributed to* in documents that may be read by an insurer, a lawyer or a court, and 7.6 asks them to separate what they saw from what they were told. **Those are not stylistic choices.** The key marks them as the unit\'s substance and the teacher should say so on the first day.',
  '⚠ **Do not let the class hear _contributed to_ as the polite version.** Half of them will, because it is shorter and softer-sounding, and the correction is in the dialogue at 7.5: the weak verb is what **keeps the other two causes in the document**. A report that says *the late departure caused the loss* has also said, permanently, that the yard needs no cover.',
  '⚠ **The one cycle to protect if time is short is 7.6**, and the reason is the order of the paragraphs rather than the content. Learners can distinguish seeing from being told in conversation within a minute; what they cannot do unaided is put the inference **last**, where somebody can disagree with it cheaply.',
], C.grey, C.navy));

// ===================== 7.1 =====================
out.push(h2('7.1  Because, since, owing to'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Collect the three versions on the board in three columns before saying anything about register; most learners produce the internal version three times with different politeness.'));
out.push(p('**b**  *Because the lorry broke down* — internal, names the event plainly. *Owing to a vehicle breakdown* — the file, a noun and no agent. *As a result of a breakdown on the Homs road* — the customer, short, with the one detail they can use.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 *Because* names a person and a time and lets the three of them act; *owing to* gives a condition with no name, which is what the file needs.  2 **The cause.** The customer version is the **short** version, not the vague one — *people think the customer version means the vague version and it does not*.'));
out.push(note('⚠ The sentence to put on the board from this dialogue is Nadia\'s last: *We apologise for the inconvenience caused* has no cause in it at all, which is why it reads as an insult rather than an apology. ⚠ Ask the class how many such letters they have received. Then ask how many they have sent.'));
out.push(p('**Language box – Practise (samples):**  1 _because Fadi did not leave until 10.30 · owing to a late departure from the yard · as a result of a late departure from our yard_  2 _because Hala priced it from the list of the 5th · owing to a superseded price list in use at the counter · as a result of an out-of-date list at our counter_  3 _because nobody counted the second pallet · owing to an incomplete gate count · as a result of an incomplete count at our gate_  4 _because both counter staff were at lunch · owing to the counter being unattended between twelve and one · as a result of our telephone not being answered at midday_  5 _because the statement was not reconciled in August · owing to a reconciliation not performed during cover · as a result of an error in our own accounts, which is ours and not yours._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The invoice was 46,000 high because Hala priced it from the list of the 5th.'],
  ['B', 'True for us. Who else reads it?'],
  ['A', 'Mr Attar, and Mr Haffar gets a version.'],
  ['B', 'Then give me the file version — no name, still checkable.'],
  ['A', 'Owing to a superseded price list in use at the counter.'],
  ['B', 'And the customer\'s. What does he actually need?'],
  ['A', 'Your invoice was 46,000 high as a result of an out-of-date price list at our counter. One dated list is now printed on Fridays and the old copy is destroyed.'],
  ['B', '⚠ And notice what you did not do, which is leave the cause out.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write all three versions and ring the easiest to write and hardest to defend. **Typical errors:** _owing to the lorry broke down_ · _due to we had no driver_ (both take a noun) · _since of the delay_ · and the content fault, which is a customer version with the cause removed. ⚠ That last one will be produced by learners who think they are being tactful, and it should be named as the unit\'s central error rather than corrected quietly.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Internal — *because*', 'File — *owing to*', 'Customer — *as a result of*'], [
  ['because the list printed at 7.15', 'owing to a delay in picking', 'as a result of a late departure from our yard'],
  ['because Hala used the list of the 5th', 'owing to a superseded list at the counter', 'as a result of an out-of-date list at our counter'],
  ['because both staff were at lunch', 'owing to the counter being unattended', 'as a result of our telephone not being answered'],
  ['because the covered bay was locked', 'owing to a returned load held uncovered', 'as a result of our own handling after your refusal'],
], [2, 2, 2]));
out.push(note('⚠ The fourth row is the one to praise. *As a result of our own handling after your refusal* concedes something the customer could not have known, and it is the row a learner will try to leave out.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Internal: because the list printed at 7.15. File: owing to a delay in picking. Customer: as a result of a late departure from our yard, and from Monday the Ghouta list is printed the night before."', '⚠ Count how many in the room would have sent the **file** version to the customer. It is the commonest mistake in the cycle and it reads as evasion even when it is only habit — which is the thing to say, because nobody in the room is evasive and several of them write like it.']));
out.push(stage('5', 'Read'));
out.push(p('1 The internal version, because somebody has to act and the people are who would act.  2 **A measurement** — *lead time from order to departure: 17 hours against a stated 12*.  3 The **customer\'s**, because the internal version is for diagnosis and the file version is for the record, and only the customer has to decide whether to order again on Thursday.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**1 · Internal.** Thursday\'s counter run was two hours late because the van was still being loaded at nine, which was because the loading list is written out by hand from the order book after the counter opens.',
  '**2 · For the file.** The counter run of 14 November departed two hours late, owing to a loading list produced after the counter opened. Two drops were outside the stated window. **Loading time: 95 minutes against a usual 40.**',
  '**3 · To the customer.** Your order reached you at eleven rather than nine, and you were right to telephone about it. That happened as a result of a late departure from our yard, which happened because our loading list is written out after the counter opens and the two compete for the same pair of hands. ⚠ **From Monday the list is written the evening before.** Next week\'s order will be on the van by eight and I will telephone you when it leaves.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three versions, in three registers', '✓'],
  ['No names in the file version, and one measurement in it', '✓ 95 minutes against 40'],
  ['The change, in the customer\'s version only', '✓'],
  ['One personal undertaking', '✓ *I will telephone you when it leaves*'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Customer versions read out. **Ask which they would believe, then which they would have written before today.** ⚠ The gap between the two answers is the cycle, and it is worth letting the class see that the second answer is nearly always the file version.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'The bank wrote to us in March to say that a facility had been withdrawn with effect from the end of the month. It gave no reason at all. The whole letter was four lines and one of them was about how much they valued our custom.',
  'What we worked out, over about three weeks and two visits, was that the facility had been withdrawn from everybody in our category and that nothing about us had changed. Nobody at the counter would say so and the manager was not available either time.',
  '⚠ What I thought of them was not that they were hiding something — it was that nobody there had been allowed to tell us anything. **Which is worse in a way, because it means the four lines were written by somebody who knew they were useless and sent them anyway.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they worked out had happened_ — "withdrawn from a whole category; nothing about us had changed"   ✓ _because / owing to / as a result of in the right registers?_ — yes   ? _was the writer hiding something, or just lazy?_ — "neither: nobody there was allowed to say"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually none of the senders was hiding anything. ⚠ **The useful discovery is that the reader cannot tell laziness from evasion, so the cost is the same** — and a class that accepts this stops defending its own form letters, which no amount of instruction about tone achieves.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Three versions of the loading delay, and I sent the customer\'s one. He telephoned to say it was the first letter from a supplier that had told him what had actually happened. ⚠ He also said he had assumed the delay was about his order being small, which it was not and which I had not thought to deny.']));

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  So, therefore, which meant that'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question is the cycle: most learners can name the thing and cannot name the cost, and several will discover while speaking that nobody has ever added it up.'));
out.push(p('**b**  The second. *The list was printed late* is a fact about a printer; the second half is a decision somebody can make.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 It gets **filed** — *a cause with no consequence attached gets filed, and whoever filed it was me*.  2 Nine cartons written off, about 180,000 — and he says he would have made the decision in March.'));
out.push(note('⚠ Mr Ayoub takes the blame for filing it, in the same sentence in which he discovers the cost. ⚠ That matters pedagogically: the cycle is not *managers do not read reports*. It is that forty facts a week without consequences attached are unreadable by anybody, and the person who can fix that is the person writing them.'));
out.push(p('**Language box – Practise (samples):**  1 _…which meant that the Ghouta run left at 10.30 and nine cartons were written off — about 180,000._  2 _…which meant that a customer was invoiced 46,000 over and found it before we did._  3 _…which meant that four cartons went out unpaid for and the claim was settled at 120,000._  4 _…which meant that eleven calls went unreturned in October, of which four are customers who have since ordered elsewhere — about 900,000 of trade._  5 _…which meant that Ghouta went from four days to two and two customers halved their orders — about 400,000 a month for four months._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The counter telephone is not answered between twelve and one.'],
  ['B', 'It never has been.'],
  ['A', 'Which meant that in October eleven calls were not returned, four of those customers have since ordered from Maarouf, and one of them had ordered from us every week since 2019.'],
  ['B', 'Say that again from the beginning.'],
  ['A', 'Both staff take lunch together, so the telephone rings out, so the call is lost, so the customer telephones the next yard along.'],
  ['B', 'And what did it cost?'],
  ['A', 'About 900,000 of trade in one month, and we did not add it up until Tuesday.'],
  ['B', '⚠ Then why is this the first I have heard of it?'],
  ['A', 'It is not. It was in the report in June. It said "the counter telephone is not answered between twelve and one."'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the cause, the chain and the figure, then how long the cause had been known. **Typical errors:** _the list was late therefore the run was late_ (a comma splice with *therefore*; it needs a semicolon or a full stop) · _which meaned that_ · _so that the picking started late_ where plain *so* is wanted · and the content fault, which is a consequence with no number in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The cause (already known)', 'Which meant that…', 'The figure', 'Known since'], [
  ['the picking list prints at 7.15', 'four drops outside the window; one load returned; nine cartons damp', '180,000', 'March'],
  ['the counter telephone rings out at midday', 'eleven calls unreturned in October; four customers gone', '900,000/mo', 'June'],
  ['the second van is off the road', 'Ghouta halved; two customers halved their orders', '400,000/mo', 'August'],
  ['the fourth store room is unentered', 'no reconcilable stock figure for the largest room', '⚠ cannot value', 'August'],
], [1.6, 1.8, 0.8, 0.8]));
out.push(note('⚠ The fourth row is the one to make the class write. Three rows with figures and a fourth that says *cannot value* is a more honest table than four rows of numbers, and the fourth is the largest item on it.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The picking-list time has been known since March. It means four drops outside the window and nine cartons written off, which comes to about 180,000 on one day."', '⚠ Add up the room\'s figures and put the total on the board. Then ask how many of these causes have been reported before without a consequence. **Say plainly that nobody in the room was being dishonest** — the clause was missing, not the honesty, and a class that hears otherwise stops writing the figures down.']));
out.push(stage('5', 'Read'));
out.push(p('1 **The second half of each sentence** — the consequence. Every one of the three had been written down before, by the same writer, in reports that were read.  2 That the figures were **not calculated** rather than hidden, and that this is **worse**, because anybody could have calculated them and the person best placed was the writer.  3 That Mr Haffar has ordered since 2017 and his Thursday order has not come — reported **without** a figure, because the writer has no way of valuing it and will not invent one.'));
out.push(note('⚠ Question 2 is the move worth teaching. A reader will suspect concealment, and the only thing that stops them is the writer taking the **less flattering** of the two available explanations. ⚠ Learners find this strange — *why say it is worse?* — and the answer is that *not calculated* is both true and unflattering, and a reader who sees you choose it stops looking for a third explanation.'));
out.push(stage('6', 'Write with help – sample (140 words)'));
out.push(sample(null, [
  '**THINGS WE HAVE REPORTED BEFORE WITHOUT SAYING WHAT THEY COST.**',
  '**1 · The weighbridge ticket is written in pencil.** Reported in February. **Which meant that** when the haulier disputed a load in September we had a ticket that could not be read and settled at the haulier\'s figure, which was 230,000 more than ours. **About 230,000 on one load**, and the pencil has been the practice since the weighbridge was installed.',
  '**2 · The yard gate is unmanned after five.** Reported in February and in July. **Which meant that** three deliveries in October were left inside the gate unsigned, one was short by two cartons and we cannot show it. **About 90,000**, and the figure would have been nothing if anybody had been there.',
  '⚠ **What this note is not.** Not new information. What was missing was the second half of each sentence, and the figures were not calculated rather than hidden, which is worse, because I could have calculated them in an afternoon.',
  '⚠ **And one I cannot value.** The haulier now sends a different driver each week and will not say why.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Which meant that* + a chain, on every item', '✓'],
  ['A figure in bold on each', '✓'],
  ['When each was reported before', '✓ February, and February and July'],
  ['One consequence without a figure, and no invented number', '✓ the changing driver'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Unvalued consequences read out. **Ask whose is the largest thing on anybody\'s list.** ⚠ It usually is, and the reason is structural rather than psychological: a thing that can be counted gets counted eventually, and a thing that cannot stays invisible however much it matters.'));
out.push(stage('7', 'Write freely – sample (138 words)'));
out.push(sample(null, [
  'Everybody in our workshop knows that the big guillotine is set up for one thickness and has to be reset for the other, and that resetting takes about twenty-five minutes. Nobody has ever costed it.',
  'So I counted. In October we reset it fourteen times. Fourteen times twenty-five is about six hours, which at two men is twelve man-hours, which is about 300,000 a month in wages for a machine standing still.',
  'But the real figure is not the wages. Twice in October a job waited for the reset and went out a day late, and one of those customers now orders his thin sheet somewhere else. ⚠ **I cannot put a figure on that and I am not going to invent one**, but it is larger than the 300,000 and it is why the resetting has never been reported as a cost.',
]));
out.push(note('⚠ That sample does both halves of the cycle: it calculates the countable figure and then says plainly that the uncountable one is larger. Mark it as the model and note that the arithmetic is shown, which is what makes the 300,000 believable.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _the figure, and whether the arithmetic is shown_ — "300,000 a month, and the working is there"   ✓ _which meant that / therefore punctuated correctly?_ — yes   ? _who could have calculated this, and when?_ — "anybody in the workshop, any month for nine years"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost none of these figures had been calculated. ⚠ **Say that calculating one takes about ten minutes and is nobody\'s job** — that second clause is the whole explanation, and it is the one thing a learner can change on Monday by making it theirs.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I attached the figure to the weighbridge pencil and sent it to the person who had read the February report, which was me. ⚠ So I sent it to Mr Nassif instead, with the February report attached, and said that the fault in February was mine for stopping at the first half of the sentence.']));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  So late that the contract moved'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Many learners will offer something late with no threshold crossed, and that is useful — it is the second half of the cycle arriving first.'));
out.push(p('**b**  The second. *Very late* is a feeling; *so late that the shop had shut* is a line that was crossed and a fact the reader can check.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 How the writer **feels** about it.  2 A *so … that* sentence is right **when the second half names something that would not have happened at all if the first half had been smaller** — half an hour earlier and the shop is open and there is no incident.'));
out.push(p('**Language box – Practise (samples):**  1 _so late that the shop had shut_  2 _so far out of date that the customer\'s accounts department found the error before ours did_  3 _so short that the gate count could not be reconciled and the load was held_  4 _⚠ nothing was crossed: it was a bad week, four things went wrong and all four were put right the same day_  5 _such a long silence from the supplier that we bought the same goods twice_'));
out.push(note('⚠ Item 4 has no *so … that* available and that is deliberate. Learners will try to force one. ⚠ The correct answer is to refuse the construction, and a learner who writes *it was so bad a week that we were all tired* has produced exactly the drama the cycle warns about.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your report says the delivery was unacceptably late.'],
  ['A', 'It was forty minutes late.'],
  ['B', 'What crossed a line?'],
  ['A', 'The shop was open. He took the goods. He did not complain.'],
  ['B', 'So what do you write?'],
  ['A', '"The delivery was forty minutes late."'],
  ['B', 'And then?'],
  ['A', '…Nothing. That is the whole sentence.'],
  ['B', '⚠ That is the whole sentence. And it is harder to write than the dramatic one, because it looks as though you have not taken it seriously.'],
]));
out.push(note('⚠ Role card 2 is the harder performance and should be done in front of the class. The discomfort is real: a plain sentence about something that went wrong reads, to the writer, as indifference. ⚠ Name that feeling and then point out that the reader does not experience it at all.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the crossed line, or *nothing was crossed*. **Typical errors:** _it was so a long delay_ · _it was too late for be delivered_ · _it was such late that_ · and the content fault, which is a *so … that* whose second half is a feeling: *so late that everybody was annoyed*.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What went wrong', 'The line that was crossed, or *nothing crossed*', 'Would a smaller version have done it?'], [
  ['the Ghouta run', 'so late that the shop had shut', 'no — half an hour earlier, nothing'],
  ['the counter price list', 'so out of date that the customer found it first', 'no — two days and it is within the band'],
  ['the fourth store room', 'so long unentered that it cannot be reconciled', '⚠ crossed by doing nothing, and without a date'],
  ['a delivery 40 minutes late', '**nothing crossed**', '—'],
  ['two short orders found at the gate', '**nothing crossed — the control worked**', '—'],
], [1.5, 2.3, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It was so late that the shop had shut. If it had left half an hour earlier, none of it happens." And: "The delivery was forty minutes late, and nothing was crossed."', '⚠ Count how many of the room\'s five crossed nothing. It is usually three of five, **and those three have been described in writing as serious** — which is the finding, and it is about the writing and not about the events.']));
out.push(stage('5', 'Read'));
out.push(p('1 Not its size — 46,000 is a fortnight of counter takings — but that **it was found outside the company**, which has happened once before, in 2019.  2 It crossed **by doing nothing**, and it crossed **without a date**: there is no day on which anything happened.  3 Because a page that lists only the three **looks like a page where somebody chose the three** — eleven with the eight named and dismissed is a different document.'));
out.push(note('⚠ The clause about the two short orders found at the gate is worth five minutes: *which is the control working, and is in this list only because somebody will otherwise count it as a fault*. ⚠ Learners do not expect a success to need defending in a list of faults, and in practice it is the commonest way a working control gets dismantled.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**NINE THINGS WENT WRONG IN OCTOBER. TWO OF THEM CROSSED A LINE.**',
  '**1.** The guillotine reset was **so long** on the 14th **that** a job missed its promised day, and that customer has not ordered since. ⚠ Twenty minutes faster and he collects on the Thursday and none of this exists.',
  '**2.** The weighbridge ticket was **so faint that** it could not be read in the dispute, and we settled at the haulier\'s figure. The point is not the 230,000; **the point is that we had no document**, which has happened once before.',
  '**The other seven.** A late delivery, accepted. Two invoices queried and correct. A man off sick, covered. A sheet cut to the wrong size, recut the same morning. A supplier two days late, no customer affected. And one order stopped at the gate because the count did not agree — ⚠ **which is the control working and is listed only so that nobody counts it as a fault.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both counts in the heading', '✓ nine and two'],
  ['*so … that* only where a line was crossed', '✓'],
  ['A counterfactual on each', '✗ **missing on item 2** — would a slightly clearer ticket have done it?'],
  ['The ones that crossed nothing, named and dismissed', '✓ seven, one line each'],
], [5, 1]));
out.push(note('⚠ Leave that ✗: item 2 is a genuinely hard counterfactual, because a pencil ticket is either legible or it is not, and that is itself worth saying on the page.'));
out.push(stage('6R', 'Share'));
out.push(p('The crossed-by-doing-nothing lines read out. **Ask which of those had ever been reported.** Almost none — because nothing happened on any particular day, so there was never a morning on which anybody would have written anything.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'Our customer card index has been dying for three years and no day in those three years was the day it died.',
  'In 2022 it was complete and a man could find any customer in about ten seconds. Then two of us started putting names on the computer, and the cards stopped being written up, and the computer was never finished. There was a point — some time in 2023 — when the cards were six months out of date and could still have been caught up in a week.',
  '⚠ That week is now about three weeks of work, because the cards cannot simply be copied: the ones written since are in two hands and some are in the old addresses. **Nobody will ever be able to say which day it stopped being a week, and there was no incident on any of them to report.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _when it was still recoverable_ — "some time in 2023, at about a week of work"   ✓ _so … that / such … that used correctly?_ — yes, and correctly avoided where nothing crossed   ? _who would have noticed, and what would they have had to be looking at?_ — "anybody comparing the card dates with the system, which nobody does"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In all three there was a point at which it was recoverable cheaply, and on none of those days did anything happen. ⚠ **That is the lesson of 7.3\'s third item and it is worth stating as a rule:** a threshold crossed by inaction has no incident date, so it will never be reported by any system that waits for incidents.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Last month: eleven things, three crossed a line. The two counts went on the board in the workshop. ⚠ Two men came and argued that four had crossed a line, and one of them was right, so the figures are eleven and four. **The argument was the useful part and it took ten minutes.**']));

// ===================== 7.4 =====================
out.push(pb());
out.push(h2('7.4  The chain, and where to stop'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Four *whys* will take most learners to the currency, the war or 1998. Let it happen; the cycle depends on it happening.'));
out.push(p('**b**  The printing time, or the second counter assistant — those are the last links anybody in the building can pull, and they cost different amounts. The economy is true and useless.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **Stop at the last link somebody in this building can pull.**  2 It becomes *a thing that could not be helped*, and the true, fixable links stop being read — ⚠ *the longest true chain is how you understand it; the chain you write is the one that ends where somebody can act*.'));
out.push(note('⚠ Nadia\'s treatment of the 2021 vacancy is the subtle part and learners miss it. It is **true**, it is **not a link**, and it goes in **once as background** because it explains why the printing time was reported twice and never changed. ⚠ A learner who promotes it to a link has written a chain that ends in a hiring decision nobody will make this month.'));
out.push(p('**Language box – Practise (samples):**  1 _the printing time — free, Monday_  2 _the lunch cover on the counter telephone — free_  3 _one dated price list and destruction of the old — free_  4 _who performs the paper stock count during cover — free, and nobody has asked_  5 _the second van: a repair quote, which is the last link anybody here can pull_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'We lost him because four calls were not returned, which was because the telephone rings out at lunch, which was because both staff go together, which is because there is nobody to cover, which is because we are one short since 2021, which is because of the last four years.'],
  ['B', 'Where did you get to?'],
  ['A', 'The last four years.'],
  ['B', 'And what can anybody here do about that?'],
  ['A', 'Nothing.'],
  ['B', 'Then that link is true and useless. ⚠ Stop at the last link somebody here can pull.'],
  ['A', 'The lunch cover. They could go at twelve and one instead of together.'],
  ['B', 'Which costs nothing at all. Or a diverted line, which costs a little. ⚠ Give both and say which you would do.'],
]));
out.push(note('⚠ Role card 1 is the one to perform because the pullable link costs **nothing** — the two staff take lunch together by habit, not by necessity. ⚠ A chain that ran to the economy had a free fix four links earlier, and that is the cycle in one example.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the chain, ring where it should stop, and then write the **next** link. **Typical errors:** _which lead to_ for *which led to* · _and that in turn it put the departure back_ (a repeated subject) · _which led to picking started late_ (needs a gerund or a clause: *picking starting late* / *picking began late*) · and the content fault, which is a chain ending in something nobody present can change.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The chain, in full', 'Stop here', 'What I would do, and what it costs'], [
  ['the list prints at 7.15, which led to picking at 9.40, which led to a 10.30 departure, which led to the shop being shut, the load returning and the write-off. Behind that: one person at opening, the 2021 vacancy, the economy.', 'the list at 7.15', 'print the Ghouta list the night before — free, Monday'],
  ['both staff lunch together, which led to the telephone ringing out, which led to four calls unreturned, which led to a standing order placed elsewhere. Behind that: no cover, the 2021 vacancy, the economy.', 'both at lunch', 'stagger lunch, twelve and one — free, this week'],
  ['the second site opened in June, which moved the man who did the paper count, which led to the count stopping in August, which led to a store room that cannot be reconciled.', 'who does the paper count', 'name a person for it during cover — free, and nobody has asked'],
], [2.6, 1, 1.9]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['The whole chain read out, then: _"I stopped at the lunch hour, because that is the last thing anybody in that building can change, and it costs nothing."_', '⚠ Count how many chains in the room would have run to the economy, the currency or the war if they had been allowed to. **Nearly all of them.** Then point out that in most of those chains the free fix was four links before the end.']));
out.push(stage('5', 'Read'));
out.push(p('1 At the **printing time** — because it is the last link anybody in the building can pull, and because a report that ends at the economy is a report that ends.  2 A **solution** — *it does not fix the other two mornings and I am not going to describe it as a solution*.  3 Used **once, as background**, as the reason the printing time was reported in March and June and never changed; **not** used as a link in the chain.'));
out.push(note('⚠ Question 2 is the move most worth taking to the class\'s own work. The cheap fix gets adopted and then believed to have solved the problem, and the only moment at which that can be prevented is the moment it is proposed. ⚠ After adoption, saying *it was never a solution* sounds like excuse-making for a new failure.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**LOSS OF A WEEKLY CUSTOMER — report.**',
  '**The chain.** Four telephone calls were not returned between 6 and 20 October, **which led to** the customer telephoning the yard on the next street, **and that in turn** led to a standing order being placed there. Ultimately a customer of six years\' standing has not ordered since 20 October.',
  '**Where this report stops, and why.** The chain continues: the telephone rings out because both counter staff take lunch together, because there is nobody to cover the counter, because we have been one short since 2021, because of what everybody knows. ⚠ All of that is true and this report stops at the lunch hour, because that is the last link anybody here can pull.',
  '**Two things could be pulled.** **a)** Stagger the lunch hour, twelve and one. Costs nothing, can start this week. ⚠ It does not help on the two days when only one person is in. **b)** Divert the line to the warehouse at midday. About 40,000 to set up.',
  '**What I would do.** (a) this week and (b) as well, because together they cover every day and separately neither does.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A chain with *which led to* and *and that in turn*', '✓'],
  ['Where the report stops, stated, with the next link named', '✓'],
  ['Two pullable links, each with a cost and a date', '✓ free/this week and 40,000'],
  ['The cheap fix not called a solution', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *where this report stops* paragraphs read out. **Ask which chain the class would have extended, and to what.** ⚠ If nobody can extend it, the writer has stopped one link too late.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'Every delay in our workshop for two years has been explained by the electricity, and every one of those explanations has been true.',
  'The generator runs from one until four and the mains is on and off either side of that. So a job that needs the big press has a window, and the window moves, and nothing can be promised for a particular hour. That is all accurate and nobody has invented any of it.',
  '⚠ What stopped being discussed is the order the jobs are done in. Within any window we do the jobs in the order they were taken, which means a two-minute job can sit behind a forty-minute one. **Nobody has proposed changing that for two years, because every conversation about a late job ends at the electricity, which is true, and then the conversation is over.**',
]));
out.push(note('⚠ That is the strongest kind of answer to cycle 4: the unchangeable explanation is completely true, and it has concealed a free change for two years. ⚠ Learners frequently conclude that such explanations are excuses. They are not, and the sample should be read aloud partly to prevent that reading.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what stopped being discussed_ — "the order the jobs are done in"   ✓ _which led to / and that in turn?_ — yes   ? _which link could somebody there have pulled?_ — "the sequencing, free, by whoever takes the job in"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In all three the unchangeable explanation was true. ⚠ **The point to land: the sentence that ends a discussion is almost never a lie, and that is exactly what makes it effective.** A class that leaves with that will stop arguing about whether such explanations are honest and start asking what they have displaced.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The electricity chain, to its end, and then the two links we can pull: sequence the jobs inside the window, free, and buy a second small press, about four million. ⚠ I had never written the second one down because it is expensive, and writing it down made the first one obvious.']));

// ===================== 7.5 =====================
out.push(pb());
out.push(h2('7.5  Caused, led to, contributed to'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Expect four or five factors for anything real. ⚠ A learner who names one has not finished the question.'));
out.push(p('**b**  The second. *The rain caused the write-off* is defensible only if nothing else was needed, and something else always was — in this case the load being outside.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 *Caused* claims that but for this, nothing; *led to* claims this started the sequence; *contributed to* claims this made it worse or more likely and is not sufficient on its own.  2 ⚠ That the weaker verb is **not the softer one** — it is the one that **keeps the other two causes in the document**, so that the yard\'s missing cover is still on the record in two years.'));
out.push(note('⚠ Mr Attar\'s point about two years is the one to repeat. *If you write the late departure caused the loss, then Fadi caused the loss, and in two years when somebody reads the file that is what it will say — and the yard will still have no cover.* ⚠ Two consequences in one sentence: a person wrongly blamed and a defect never fixed. Learners accept the second argument faster than the first.'));
out.push(p('**Language box – Practise (answers):**  1 the rain — **caused**.  2 the late departure — **led to**.  3 no cover on the north side — **contributed to**.  4 the packaging — **not a factor**, and it should be cleared positively: it was within specification and two cartons under the tarpaulin are dry.  5 the shop\'s closing time — ⚠ **not a factor**: the customer was entitled to close at four. **A condition that was always going to be true is not a contributory factor**, and treating it as one is how a report starts blaming a customer.'));
out.push(note('⚠ Item 5 is the most valuable item in the cycle. The shop\'s closing time is in the causal chain and is **not** a contributory factor, because nothing about it was unusual or avoidable. ⚠ Learners will put it under *contributed to* and the correction teaches more than any of the other four.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', '"The lunch hour caused us to lose the customer." Can you prove that?'],
  ['A', 'Four calls went unreturned and he went elsewhere.'],
  ['B', 'And if the calls had been returned?'],
  ['A', '…He would probably have stayed. Probably.'],
  ['B', 'So it did not cause it. What caused it?'],
  ['A', 'He placed a standing order elsewhere. That is the thing that lost him.'],
  ['B', 'And the calls?'],
  ['A', 'Led to it. And the lunch hour contributed, and so did having no answering machine, and so did a competitor two hundred metres away.'],
  ['B', 'And price?'],
  ['A', 'Not a factor — he has said so in writing.'],
  ['B', '⚠ Then get that in the report before somebody assumes it, because price is what everybody will assume.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four lines — caused, led to, contributed, not a factor. **Typical errors:** _it was contributed to the damage_ (no passive) · _the rain was caused the write-off_ · _it conducted to the damage_ · and the content fault, which is the **missing fourth line**. ⚠ Nobody writes *not a factor* unprompted, and it is the line that protects people.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Incident', 'Caused', 'Led to', 'Contributed to', 'Not a factor'], [
  ['nine cartons written off', 'rain overnight', 'the late departure', 'no cover; no overnight step in the returns procedure; the bay locked after six', 'the packaging; Fadi\'s hours and route; the shop\'s closing time'],
  ['a customer lost', 'a standing order placed elsewhere', 'four unreturned calls', 'the shared lunch hour; no diverted line; a competitor nearby', 'price — he has said so in writing'],
], [1, 1.2, 1.2, 1.4, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rain caused it. The late departure led to it. Three things contributed. And the packaging, the driver\'s hours and the customer\'s closing time were not factors."', '⚠ Count how many would have written *caused* for a contributory factor — most of the room. **Then ask, for each, who that sentence would have named.** It is a short exercise and it is the one that makes the cycle stick, because in nearly every case the answer is a person in the room or somebody they know.']));
out.push(stage('5', 'Read'));
out.push(p('1 *No person caused this damage* — because the next three paragraphs are about people and decisions and **they will be read as blame if that sentence is missing**.  2 No cover on the north side (in the yard notes since 2019); the returns procedure has no overnight step; and the load came back at 6.40 after the warehouse closed at 6.00, with nothing saying who to telephone.  3 Because each of the three will otherwise be investigated by somebody, two of them are people, and **clearing a person positively costs four lines now and saves them a conversation in a year**.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**DISPUTED LOAD, 12 SEPTEMBER — attribution.**',
  '**What caused the loss.** A weighbridge ticket that could not be read, which meant we had no figure to put against the haulier\'s. But for the illegible ticket we would have had a document. ⚠ **No person caused this**, and that sentence belongs in the file because what follows is about people.',
  '**What led to it.** The ticket was written in pencil, as every ticket has been since the weighbridge was installed, and this one was rained on in a cab.',
  '**What contributed.** **One:** there is no carbon or duplicate of a weighbridge ticket. **Two:** the ticket is not entered anywhere until the end of the day, so there was no second record. **Three:** nobody checks a ticket for legibility at the point of signing.',
  '**What was not a factor.** The weighbridge itself, which was calibrated in June and has its certificate. The gateman\'s count, which matched our own loading sheet exactly. And the haulier, who produced his figure promptly and has not disputed anything else in nine years.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four categories, in order', '✓'],
  ['*Caused* used only where but-for holds', '✓'],
  ['Contributory factors numbered', '✓ three'],
  ['People cleared positively, with the evidence named', '✓ the loading sheet; nine years'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('*Not a factor* paragraphs read out. **Ask who each one protects, and from what.** ⚠ In most cases the person protected does not know the paragraph exists, which is the point: it will be doing its work in a year, in a conversation the writer is not in.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'In 2021 a report said that a load had gone short because the loader had not counted it. The loader was a man who had worked there eleven years and he was moved to the yard gate four months later, and nobody has ever said the two things were connected.',
  'What had actually happened was that the order had been amended by telephone after the picking list was printed, and nobody told him. He counted what was on his list, correctly, and the list was wrong.',
  '⚠ The report said *the shortage was caused by an incomplete count*. Every word of that is true and it is the wrong sentence: the count was complete against the document he had. **It has never been corrected, and the only record of what happened is that report.**',
]));
out.push(note('⚠ The last sentence is the cycle landing hardest: a wrong attribution becomes the only evidence of the event it describes. ⚠ Ask the class, carefully, whether anything like this has happened where they work. Expect silence and then one answer, and do not press for more.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _who carried the blame_ — "a loader of eleven years, moved four months later"   ✓ _caused / led to / contributed to used for the right claims?_ — yes, and the error is quoted deliberately   ? _was the document ever corrected, and could it be now?_ — "no; and a note could be added to the file today"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost none was corrected. ⚠ **The mechanism is worth naming: by the time anybody notices, the only evidence of what happened is the document itself** — so the wrong attribution is not merely uncorrected, it has become unfalsifiable. That is why the verb is chosen before the file closes and not afterwards.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Four categories for the disputed load. The *not a factor* paragraph names the calibration certificate and the loading sheet. ⚠ Writing it took four minutes and it clears the gateman, who had been asked about it twice by two different people and had no document to point at either time.']));

// ===================== 7.6 =====================
out.push(pb());
out.push(h2('7.6  What I saw, what I was told, what I infer'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Most learners will say *most of it* and then revise downwards while speaking. Let them revise; the revision is the lesson.'));
out.push(p('**b**  Only the first — *the cartons are damp* — is something a writer can have seen. The second is almost always told; the third is an inference.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **One sentence out of fourteen.**  2 It reads as an observation, ⚠ and then *an inference that turns out wrong looks like a lie rather than a mistake*.'));
out.push(note('⚠ The exchange about the gate sheet is the part learners resist: *it is a document* / *written by somebody. A good T, and still a T.* ⚠ A class that accepts this has gained the only mechanism by which a wrong document can ever be flagged — if documents are S, there is no category left for the day one is wrong.'));
out.push(p('**Language box – Practise (answers):**  1 **S** — the writer looked at them.  2 **T** — a document, written by somebody.  3 **T** — Fadi said so.  4 **I** — nobody has said they did not telephone; it is an inference from the load being outside.  5 ⚠ **I**, or **T** if somebody told them — and most learners will mark it S because rain is visible. **The writer was at the other site and did not see the rain start**, which is exactly the trap.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Mark every sentence. S, T or I.'],
  ['A', 'Four calls were not returned — T, the telephone log. He went to Maarouf — T, he said so in his letter. The staff were both at lunch — T, Hala told me.'],
  ['B', 'How much is S?'],
  ['A', 'None of it. I was at the other site every time.'],
  ['B', 'And the sentence that says the calls are why he left?'],
  ['A', '…That is an inference. His letter says he has moved his standing order. It does not say why.'],
  ['B', '⚠ So the central claim of your report is the one thing in it that nobody has stated.'],
  ['A', 'He would say so if I asked him.'],
  ['B', 'Then ask him, and it becomes a T with a name on it. ⚠ Until you do, it goes in the last paragraph with *I infer* in front of it.'],
]));
out.push(note('⚠ Role card 2 produces the best moment in the cycle: a report whose S count is **nought** and whose central claim is an unlabelled inference. ⚠ It is still a report worth writing, and saying so matters — the fix is one telephone call, and the learner can see exactly which one.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners count the S, T and I sentences. **Typical errors:** _I was told by the gate sheet_ (a document *records*; a person *tells*) · _I infer that the cartons are damp_ where the writer looked at them · _it is inferred that_ (an agentless passive hiding whose inference it is — ⚠ which is Unit 5 and Unit 7 colliding, and worth naming) · and the content fault, which is an I paragraph that comes first.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'S / T / I', 'If T, who told you. If I, from what.'], [
  ['The nine cartons were damp to the base.', '**S**', 'examined 8.15, 12 Nov'],
  ['The load returned at 6.42.', '**T**', 'the gate sheet'],
  ['The covered bay was locked.', '**T**', 'Abu Yasser, 8.05'],
  ['The shop had shut at four.', '**T**', 'Fadi'],
  ['Nobody telephoned a keyholder.', '**I**', 'nobody has said they did'],
  ['The rain began after the load was placed.', '**I**', 'the top surfaces are marked, the base soaked'],
  ['Two cartons were dry.', '**S**', 'examined; under a tarpaulin'],
  ['The tarpaulin was over them by chance.', '**I**', 'it was positioned over another pallet'],
], [2.2, 0.7, 2.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of eight sentences, two were S, four were T and two were I. The one I was most surprised about was the gate sheet — I had thought a time on a document was something I knew."', '⚠ Put the room\'s S counts on the board. Then ask how many of these reports had presented all three kinds **in the same voice**. It is nearly all of them, and nobody intended it, which is the sentence to say out loud before anybody feels accused.']));
out.push(stage('5', 'Read'));
out.push(p('1 **One paragraph**, and the writer says *that is the whole of what I saw* — the clause that makes the paragraph trustworthy.  2 Fadi says he telephoned and the office log shows no call. Two explanations: either the call was not made, **or the log is incomplete** — and the second is **at least as likely**, because the log is filled in from memory at the end of the day.  3 **Resolve it by preferring one of them.** It stays in the report unresolved and is the one thing the writer asks somebody else to look at.'));
out.push(note('⚠ Question 2 is the cycle\'s ethical centre and it is a small, concrete point: preferring the document over the person feels neutral and is not, because somebody fills the document in from memory. ⚠ In the mediation at 7.7 Fadi turns out to be right, and the only reason that correction can arrive is that this page refused to resolve the conflict against him.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**ILLEGIBLE WEIGHBRIDGE TICKET, 12 SEPTEMBER — evidence.**',
  '**What I saw.** I examined the ticket on 13 September in the office. The figures were in pencil and the first two digits were legible; the third was not, and the paper was cockled over about a third of its area. I photographed it and the photograph is attached. ⚠ That is the whole of what I saw.',
  '**What I was told, and by whom.** The gateman told me, on the 13th, that it rained into the cab on the 12th and that he put the ticket on the dashboard. The haulier\'s office gave me their figure, 14.2 tonnes, by telephone on the 14th. Our loading sheet records 13.1 tonnes and was signed by the loader. ⚠ **The two figures cannot both be right and I have no third document.**',
  '**What I infer.** **One:** that the illegible digit was a 3, because the loading sheet says 13.1 and our sheets have never been out by a tonne. **Two:** that the ticket was wet before it was signed, because the signature is also blurred.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three paragraphs, S then T then I', '✓'],
  ['The S paragraph first-hand only, with a time and a place', '✓'],
  ['Every T attributed to a person or a named document', '✓'],
  ['The inferences numbered and labelled, and one conflict left unresolved', '✓ the two tonnages'],
], [5, 1]));
out.push(note('⚠ Note what the first inference does **not** do: it does not conclude that the haulier was wrong. It says what the digit probably was, and the tonnage dispute stays unresolved in the T paragraph. ⚠ That separation is the hardest thing in the unit to teach and the sample is there to be imitated rather than explained.'));
out.push(stage('6R', 'Share'));
out.push(p('S paragraphs read out alone. **Ask whether anything in each was actually told to the writer.** ⚠ There usually is one, and it is usually a time or a quantity — the two things we most readily believe we have seen.'));
out.push(stage('7', 'Write freely – sample (132 words)'));
out.push(sample(null, [
  'For two years I believed that our Tuesday van left at seven, because the departure book said seven every Tuesday for two years.',
  'It left at seven about half the time. The book is filled in on Wednesday morning by whoever is at the desk, from the previous day\'s run sheet, which has no times on it. So *seven* is not a record of anything; it is the time the van is supposed to leave, written down after the fact by somebody who was not there.',
  '⚠ I only found out because a customer said his delivery had been early, and I went to prove him wrong. **What would have made me doubt it at the time is the thing that should have made me doubt it: two years of identical entries, in the same hand, for a vehicle in traffic.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _who had filled the document in_ — "whoever was at the desk on Wednesday, from a sheet with no times"   ✓ _S, T and I kept apart?_ — yes   ? _what would have made you doubt it at the time?_ — "two years of identical entries for a vehicle in traffic"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually two of three documents were filled in from memory at the end of the day. ⚠ **Ask how their own logs are filled in.** It is the same way, and the class will say so, and the point of 7.6 is then made by them rather than by the book.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Eighteen sentences in a report I sent in October. Two S, eleven T, five I — and three of the five I had written as plain statements. ⚠ One of those three is now wrong, and I would have had no way of explaining the difference between being mistaken and being untruthful.']));

// ===================== 7.7 =====================
out.push(pb());
out.push(h2('7.7  Review & Mediate: what does this report say caused it?'));
out.push(stage('1', 'Get ready – Unit 7 quiz'));
out.push(p('**1** *Because* — internal, names people. *Owing to* — the file, a condition with no name. *As a result of* — the customer, short, ⚠ **with the cause still in it**.  **2** It gets **filed**, and whoever filed it was reading forty facts a week.  **3** The second half must name something that **would not have happened at all** if the first half had been smaller.  **4** At **the last link somebody in this building can pull**.  **5** *Caused* claims that but for this, **nothing** — and so it also removes the other causes from the document for ever.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That rain caused the damage, that no person caused it, that the tachograph shows his route and hours were correct, and that his driving, hours and route **were not a factor**. The late departure *led to* the load standing out, and his name is not in that sentence — the printing time is.  2 That he telephoned **the counter, not the office** — a different number that would never appear in the office log — ⚠ **and that there has never been a log on the counter at all**, which is the number painted on the side of his van.'));
out.push(note('⚠ This is the strongest mediation in Book 1 and it is worth taking slowly. Three pages of careful work, written by somebody competent, with a hole in it that the named person finds in forty seconds. ⚠ **The finding only arrives because page three said the discrepancy was unresolved instead of resolving it against him.** Had the report concluded *Fadi did not telephone*, he would have had nothing to correct and no reason to think correction was wanted.'));
out.push(p('**Language box – Practise (sample):**  _"I will read you the four lines that are about you. … Your name is not in that sentence and the printer is. … What can you see that I cannot?"_ ⚠ And then **stop talking**, which is the hard part.'));
out.push(stage('3', 'Practise – sample with pair 1'));
out.push(dlg(null, [
  ['B', 'There is a report about the pricing. Is it about me?'],
  ['A', 'Sit down. Four lines are about you. "The counter copy was dated the 5th." "The trade band had been raised on the 8th and the counter copy had not been replaced." "The arithmetic on order 0914 was correct throughout." "She reported it on the Friday, before the customer telephoned."'],
  ['B', 'It does not say I priced it wrongly?'],
  ['A', 'It says the list was wrong. You priced correctly from the document you had.'],
  ['B', 'There is something. There were two copies. The second was in the van, because we take one to the Baghdad Street counter on Thursdays.'],
  ['A', '…So there were two copies dated the 5th, and one of them is still in a van.'],
  ['B', 'It is still there now.'],
  ['A', 'That is a bigger finding than the one I wrote up.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what the named person found and why only they could find it. **Typical errors:** _I read you the lines_ for *I will read you* · _your name is not in this sentence, the printer is in_ · and the content fault, which is a performer who **summarises** the report instead of reading it. ⚠ Stop that one immediately: the thing the named person is afraid of is the wording.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'The lines about them', 'What they corrected', 'Why only they could see it'], [
  ['Fadi', 'rain caused it; no person caused it; hours and route not a factor', 'he telephoned the counter, not the office — and the counter has no log', 'it is the number on his own van'],
  ['Hala', 'the list was wrong; her arithmetic was correct; she reported it first', 'there were two copies dated the 5th and one is in the van', 'she is the one who takes a copy to the other site'],
], [1, 1.4, 1.4, 1.4]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"The report said the office log showed no call. Fadi pointed out that he telephoned the counter, which has a different number and no log at all — which nobody could have known except the man whose van has that number painted on it."',
  '⚠ **The unit\'s mediation, named as the seventh unit of this book:** a report is written by whoever has the documents and corrected by whoever was there, and **the correction only ever arrives if the report left something unresolved instead of resolving it against them.**',
  '⚠ Ask the class the harder follow-up: how many reports have they written that resolved a discrepancy against the person who was not in the room? ⚠ Not as an accusation — it is the normal thing to do, it feels like completing the work, and the cost is invisible because the correction that never arrives leaves no trace.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 7)'));
out.push(table(['INCIDENT FORM', 'Answer'], [
  ['Date of incident', '11 November (the 11th / 11–12 November)'],
  ['Scheduled departure', '7.00'],
  ['Actual departure', '10.30'],
  ['Time of return to yard', '6.42'],
  ['Where the load was placed', 'on the north side (of the yard)'],
  ['Number of cartons written off', 'nine'],
  ['Value of write-off', 'about 180,000'],
  ['Immediate cause', 'the rain'],
  ['Contributory factor', 'the absence of cover on the north side'],
  ['Stated as not a factor', 'the packaging'],
], [2, 3]));
out.push(note('⚠ The two items learners get wrong are *number of cartons* and *immediate cause*. The text says **nine of a consignment of twenty-four**, and a learner who writes 24 has taken the first number in the sentence. ⚠ And *immediate cause* is **the rain**, not the late departure — the text uses the exact phrase, and a learner who writes the departure has answered from their sense of what caused it rather than from the page. **Both are Part 7 faults rather than content faults**, and the habit to teach is to find the form\'s own wording in the text.'));
out.push(stage('6', 'Write with help – sample (77 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Abu Yasser — there is a report about the cartons and I would rather you heard it from me than in the yard. It says: "No person caused this damage." The sentence about the load standing out names the locked bay and the returns procedure, not you. One thing I could not resolve is who had a key after six. What can you see that I cannot?',
]));
out.push(note('⚠ That sample is 71 words and well inside the band. ⚠ The thing to mark is the last sentence: a letter that only reassures invites no correction, and the correction is the reason for writing. **A candidate who ends with reassurance has written a kind letter and failed the task.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least one line quoted exactly', '✓'],
  ['Which sentence their name is not in', '✓'],
  ['A question that invites a correction', '✓'],
  ['60 to 80 words — count them', '✓ 71'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (137 words)'));
out.push(sample(null, [
  '**SHORT LOAD, 3 NOVEMBER — report.**',
  'Two cartons were missing from a load of forty. The gate count recorded forty against the order, **which led to** the sheet being signed, **and that in turn** meant the shortage was found by the customer rather than by us. ⚠ This report stops at the gate count: the chain continues to there being one man on the gate at four o\'clock, which is a staffing decision and not mine.',
  '**What caused it** is not established. **What contributed:** a count made while a second lorry was waiting, and a sheet signed before the tailgate was closed.',
  '**Not a factor:** the picking, which the list and the warehouse copy both show as forty-two, two of which were correctly held back.',
  '**What I saw:** nothing — I was at Mezzeh. **What I was told:** the count, by Abu Yasser. **What I infer:** that the two held-back cartons were counted, and that is an inference.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I read the short-load report to Abu Yasser. He said the two held-back cartons were on the floor by the gate, not on the lorry, and that he counted the lorry. ⚠ So my inference was wrong and the count was right, and the shortage happened somewhere else entirely. **Forty seconds, again.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 7 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'b', 'a', 'b', 'c', 'a']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 1 and 2 are one point in two costumes and should be marked as a pair: *because* takes a clause and *owing to* takes a noun. A learner who gets one and misses the other has the register and not the grammar. ⚠ Question 4 is the punctuation item — *therefore* after a semicolon, never spliced with a comma — and it is the error that survives longest.'));
out.push(note('⚠ Question 7 is the unit. *The rain caused the damage; the late departure led to the load standing out.* A learner who chooses b has used *contributed to* for the but-for cause, which is the opposite of the fault the unit warns about and is worth a line of feedback rather than a mark: **over-hedging is a real error too, and it is the one a nervous learner makes.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Caused', 'Led to', 'Contributed', 'Not a factor', 'What Fadi points out'], [[
  'the rain (and: no person caused it)', 'the late departure', 'no cover since 2019; no overnight step; the bay locked after six', 'his driving, hours and route — the tachograph shows all three',
  'he telephoned the counter, a different number, and the counter has never had a log',
]], [1.2, 1, 1.6, 1.4, 1.6]));
out.push(note('⚠ The third gap wants **two** of the three contributory factors for the mark. ⚠ The fifth wants **both** halves of Fadi\'s point — the different number **and** that no log exists — because the first alone explains the discrepancy and only the second is a finding.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (64 words)', ['**What I saw.** I examined nine cartons at 8.15 on the 12th in the yard. All nine were damp to the base. **What I was told.** Abu Yasser told me at 8.05 that the load returned at 6.40 and was placed on the north side because the bay was locked; the gate sheet records 6.42. **What I infer.** That nobody telephoned a keyholder, because nobody has said they did.']));
out.push(box('Marking the Unit 7 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gaps 3 and 5 need two elements each.'],
    ['**C Writing**', '7', 'Three paragraphs in the order S, T, I (2) · the S paragraph **first-hand only**, with a time or a place (2) · every T attributed to a person or a named document (2) · the inference labelled (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for a first-hand S paragraph are this check\'s version of Unit 4\'s numbers, Unit 5\'s sources and Unit 6\'s figures.** An S paragraph containing anything the learner was told scores 0 of those 2, however well written. Say so before they write.',
  '⚠ Give the attribution marks for **a person with a name, or a document with a name**. *I was told* scores nothing; *Abu Yasser told me* scores; *the gate sheet records* scores. ⚠ *It was reported that* scores nothing and is worth a circle and one word: *who?*',
  '⚠ The inference mark is for the **label**, not the quality of the inference. A labelled wrong inference earns it and an unlabelled right one does not, and that is the correct incentive — the habit is what protects a writer on the day the obvious inference is wrong.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 7**'));
out.push(p('**1 The customer version with the cause removed.** It will appear in 7.1 and it will be produced by the most considerate people in the room, who believe they are being tactful. ⚠ Do not treat it as a register error. Read them *we apologise for any inconvenience caused* and ask what it tells them, then ask how many such letters they have received and how they felt about the sender. **The class corrects itself in about two minutes and the correction holds**, which no amount of explanation about register achieves.'));
out.push(p('**2 _Contributed to_ heard as the polite option.** Half the class will reach for the weakest verb to be kind, and the other half will reach for *caused* to sound decisive; both are choosing by tone. ⚠ The repair is the but-for test, asked out loud every time: *if this had not happened, would nothing have happened?* ⚠ And the argument that persuades is not about fairness to the person named — it is Mr Attar\'s second point, that *caused* **deletes the other causes from the record**, so the yard still has no cover in two years. Learners accept the record-keeping argument immediately.'));
out.push(p('**3 Documents treated as observations.** *The gate sheet shows 10.30* feels like knowledge and is testimony. ⚠ This is the most consequential habit in the unit and the hardest to shift, because every document in a workplace is designed to look like a fact. The drill that works is the one in 7.6 stage 3: take a report the learner has already sent, mark every sentence S, T or I, and count. ⚠ **Expect an S count of one or two in fifteen, and say before the counting starts that this is normal** — a class that thinks a low S count is a criticism will defend its reports instead of marking them.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 7 · Answer Key');
