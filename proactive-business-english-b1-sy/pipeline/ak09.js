// Proactive Business English B1 · Syria Edition · Book 1 · Unit 9 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 9  Deduction, Doubt and the Honest Estimate'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **Two cycles in this unit are habits rather than language, and they are the two that will change a learner\'s week.** **9.4** is a minute of looking before telephoning anybody, which answers about three questions in four. **9.5** is the cost of a word. Neither can be taught by explanation and both can be taught by counting, which is what the stages do.',
  '⚠ **The sentence to get into the class\'s hands early is _what would change my mind is…_** It appears in 9.1 and is marked again in the exam task at 9.7. A diagnosis that states its own overturning condition is the strongest form there is, almost nobody writes it, and a learner who leaves with that one sentence has gained more than the modals.',
  '⚠ **A warning about 9.5.** *Possibly* does honest work when the writer has looked and does not know, and dishonest work when it means *I have not looked* — **and nobody can tell which from the outside.** Do not treat the dishonest use as a character fault; it is the default behaviour of every busy person, and the repair is mechanical: one clause naming what has not been checked.',
], C.grey, C.navy));

// ===================== 9.1 =====================
out.push(h2('9.1  It can only have been a forklift'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Push for what could be told **from looking**; most first answers are about who was nearby, which is the fault the cycle exists to correct.'));
out.push(p('**b**  *Somebody must have dropped it* is a guess — nothing in it rests on a mark. The second is a deduction: the split base and sound top are the evidence and they are in the sentence.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 The base boards split across the middle with the top sound, and two tine marks 40 cm apart against the yard\'s own 90 cm.  2 **Whose** forklift — *that I do not know and I am not going to guess*; narrow tines are common, and half the yards in Mezzeh have a small forklift.'));
out.push(note('⚠ The last exchange carries the cycle\'s best finding and learners often miss it: *it was lifted **after** it was wrapped, because the wrap is torn at the tine marks and nowhere else.* ⚠ A detail that fixes the **order** of events is worth more than three that describe them — and in 9.7 this is the fact that produces the correction from Mr Haffar.'));
out.push(p('**Language box – Practise (samples):**  1 _It can only have been lifted from one side, because the middle base boards are split and the outer three are sound._  2 _It must have been crushed by something standing on one corner, because the crush is 10 cm up and the top is sound._  3 _The wrap was torn after it was applied, because the tear is at the tine marks and nowhere else._  4 _It must have been rained on rather than stood in water, because the top and sides are marked and the base is dry._  5 _The shelf must have carried a point load, because it is bowed at the centre and straight at the ends._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The carton from the Aleppo load. What happened to it?'],
  ['B', 'It was rained on from above, not stood in water. You can see it from two things. The top and three sides are damp and the base is dry, so the water came down and not up. And the damp stops about two thirds of the way down each side, which is where water running off a flat top would reach.'],
  ['A', 'So it must have been outside.'],
  ['B', 'It can only have been outside, uncovered, because a leaking roof would mark one side and a flooded floor would mark the base.'],
  ['A', 'In whose yard?'],
  ['B', 'That I do not know and I am not going to guess.'],
  ['A', 'It was transhipped at Homs.'],
  ['B', '⚠ And the useful one: the label is unmarked and perfectly legible, so it was labelled **after** it dried — which means somebody handled it dry, somewhere, and did not report it.'],
]));
out.push(note('⚠ The sequence fact in that sample is stronger than the deduction. It establishes that a person saw the carton dry and said nothing, which no amount of reasoning about rain could produce.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the deduction, the two marks, the stopping sentence and the sequence fact. **Typical errors:** _it must of been lifted_ (the sound is right; the spelling is not, and it should be corrected once and then ignored) · _it must have been happened in the yard_ · _it can only be a forklift_ for a past event · and the content fault, which is a deduction with no mark attached.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What was damaged', 'The deduction', 'The marks it rests on', 'Where I stop'], [
  ['a pallet', 'lifted from one side by a narrow-tine machine', 'middle base boards split, outer three sound; tines 40 cm against our 90', 'the machine; not the owner'],
  ['a carton', 'rained on from above, uncovered', 'top and sides damp, base dry; damp stops two thirds down', 'that it was outside; not whose yard'],
  ['a shelf', 'a point load in the centre', 'bowed at the centre, straight at the ends; paint scraped in a line', 'that it was dragged on; not by whom'],
  ['a roll of wrap', 'torn at the core before use', 'tear is radial from the core; the outer turns are sound', '⚠ nothing further — I cannot tell when'],
], [1.1, 1.4, 1.9, 1.2]));
out.push(note('⚠ The fourth row is the one to praise: the honest answer is that the deduction supports nothing about timing. A learner who writes *⚠ nothing further* in that column has understood the cycle better than one who fills it.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It can only have been lifted by a narrow-tine machine, because the middle base boards are split while the outer three are sound, and because the tine marks are 40 cm apart and ours are 90. Whose machine, I do not know."', '⚠ Count the deductions that stopped at the machine against those that went on to a person. **Then ask, of each of the second kind, what could be shown** — and the answer is usually proximity, which is not evidence at all.']));
out.push(stage('5', 'Read'));
out.push(p('1 It **can only have been** lifted by a narrow-tine machine (the 40 cm marks against the yard\'s 90); it **must have been** lifted after wrapping (the wrap torn at the tines and nowhere else); and it was **not** lifted on the vehicle (the straps fitted and intact on return).  2 **Whose machine it was** — narrow-tine forklifts are common, and *I am not going to narrow it by elimination because I have not been to look at anybody\'s forklift*.  3 Because *the credit is not in dispute and only the cause is*, and holding a 46,000 credit for a week to establish a cause nobody can establish is not a defensible use of anybody\'s time.'));
out.push(note('⚠ The *what would change this* paragraph is the one to teach from. It also contains a commercial point worth pausing on: *we do not sell him a pallet, we sell him cartons* — so even if the damage happened on his premises, the two crushed cartons are still the supplier\'s to credit. ⚠ Learners frequently assume that establishing fault settles the money, and in this case it does not.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**SHEET RETURNED FROM THE HOTEL SITE — inspection. 24 November, 7.40, in the yard, before it was moved.**',
  '**What is on it.** Six sheets of 2 mm, 2,440 by 1,220. Four are sound. Two are creased across the short dimension, about 300 mm from one end, the crease running the full width and about 15 mm deep. Both creases are at the same end and at the same distance. No other marking on any of the six; the protective film is intact on all six.',
  '**What that means.** The two **can only have been** bent over an edge, because a dropped sheet creases irregularly and these are straight and parallel to the end. They **must have been** bent while stacked together, because the creases are at the same distance from the same end on both. ⚠ **Two identical creases are a mechanism and one would have been an accident.**',
  '⚠ **What it does not mean.** We cannot say where. A lorry bed edge, a stillage edge and a forklift tine would all do this.',
  '⚠ **What would change this.** If the film were torn at the crease, it was bent after unwrapping; it is not, so it was bent in the bundle.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['When and where, before anything was moved', '✓'],
  ['Observations and deductions in separate paragraphs', '✓'],
  ['Measurements rather than adjectives', '✓ 300 mm, 15 mm, full width'],
  ['*What it does not mean* and *what would change this*', '✓ both'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what would change this* lines read out. ⚠ **Say the counter-intuitive thing explicitly: the deduction that is easiest to overturn is the one to trust most**, because its writer has told you how to test it. A deduction with no overturning condition has either not been thought about or is being defended.'));
out.push(stage('7', 'Write freely – sample (132 words)'));
out.push(sample(null, [
  'A pallet of tiles came back cracked in 2023 and everybody in the yard said it was Khalil, because Khalil had loaded it and Khalil had broken something the month before.',
  'What the pallet actually showed was that the cracks ran in one direction across the whole stack, every tile in the same place, which is what happens when a stack is lifted on tines that are too narrow and the middle takes the weight. Khalil loads with the pallet truck. The pallet truck has no tines.',
  '⚠ Nobody checked. Khalil was spoken to and the matter was closed in a morning, and the forklift with the narrow tines belongs to the yard next door, who had moved it for us as a favour because our forklift was off.',
  '**I only worked this out two years later, writing this.**',
]));
out.push(note('⚠ That last line will be produced by somebody in most classes and it should be received seriously rather than as a flourish. The exercise is capable of resolving a real injustice, and a teacher should be ready for a learner to be genuinely troubled by it.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what the marks actually showed_ — "cracks in one direction, every tile in the same place: a narrow-tine lift"   ✓ _must have been / can only have been, with the mark attached?_ — yes   ? _who made the assumption, and what was it based on?_ — "the yard, on the basis that he had broken something the month before"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In nearly every text the assumption rested on who had been near it, or on who had been blamed before. ⚠ **Proximity and prior blame are the evidence people actually use, and neither is evidence** — which is the finding to close the cycle on, and it needs no moralising because the texts supply it.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The bent gate post in our yard. Two marks: the bend is 400 mm up and the concrete at the base is cracked on the opposite side. So it was struck, not pushed over slowly. ⚠ Where I stop: a lorry and a forklift would both do it, and I cannot tell which.']));

// ===================== 9.2 =====================
out.push(pb());
out.push(h2('9.2  A batch fault, or one bad pallet'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. The useful answers involve finding something the two instances share and something they do not — a batch, a date, a shelf, a route.'));
out.push(p('**b**  The second. *Your wrap is faulty* is a complaint; the second gives the supplier a batch number, a comparison and something to do.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Four rolls: the two that tore are 8814, the two sound are 8790 and 8803.  2 ⚠ *You did not telephone me about two rolls; you telephoned me about a number that appears on four hundred rolls* — and *I would rather have this telephone call than a polite one in six weeks*.'));
out.push(note('⚠ *Two rolls is nothing. A batch number is everything.* ⚠ This is the sentence to put on the board, and it generalises: the value of a report is not the size of the problem reported but the size of the population it might apply to. A learner who grasps that will stop apologising for small reports.'));
out.push(p('**Language box – Practise (samples):**  1 _It may be the batch, and it is also possible that two rolls out of a hundred tore for no reason. The test: open an unused roll of the same batch and pull it at the core._  2 _It may be the haulier, and it is also possible that it is the Aleppo dock, where loads stand. The test: a sealed count sheet opened at the gate._  3 _It may be the price list, and it is also possible that two different people made the same mistake. The test: check which list each was priced from._  4 _It may be the heat, and it is also possible that the afternoon is when the long runs happen. The test: run a long job in the morning for a week._  5 _It may be the supplier, and it is also possible that both orders went in late from us. The test: compare the order dates with the promised lead times._'));
out.push(note('⚠ Items 4 and 5 both locate the possible fault **at home**, and that is the harder half of the cycle. ⚠ A learner who can only produce external possibilities should be asked, for each, *and what is the version where it is us?*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The small press stops about once a week. It may be the heat and I am not saying it is.'],
  ['B', 'What have you looked at?'],
  ['A', 'Six stoppages since September. All six were between one and four. All six were on jobs over about two hundred pieces.'],
  ['B', 'So it is possible that it is the heat, and it is also possible that it is the long runs.'],
  ['A', 'And the two cannot be separated, because the long runs are all in the afternoon.'],
  ['B', 'Then the test separates them. Run a two-hundred-piece job at eight in the morning, three days running.'],
  ['A', 'Nobody has done that because everybody knows it is the heat.'],
  ['B', '⚠ Everybody knows it because it stops in the afternoon, which is also when the long jobs are. **It takes three mornings to find out and it has been nine months.**'],
]));
out.push(note('⚠ Role card 2 is the one to perform. The confound — heat and long runs are perfectly correlated because the long runs happen in the afternoon — is a real and common shape, and the test that breaks it takes three mornings. ⚠ Ask the class for their own confounded pairs; most workshops have one.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both possibilities and the test, then which possibility the speaker would rather be true. **Typical errors:** _it must be a batch fault_ where there is no evidence (9.1\'s verb borrowed without 9.1\'s marks) · _it may to be the batch_ · _it is possible that is the batch_ · and the content fault, which is one possibility with a hedge in front of it. ⚠ That is an accusation wearing a hedge, and the class should learn to hear it as one.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What happened, twice or more', 'Possibility A', 'Possibility B', 'The test'], [
  ['two rolls torn at the core', 'batch 8814', 'two bad rolls out of a hundred', 'pull an unused 8814 at the core'],
  ['three short Aleppo deliveries', 'the haulier', 'the shared dock where loads stand', 'a sealed count sheet, opened at the gate'],
  ['the press stops weekly', 'heat', 'the long runs, which are all afternoon', 'a long job at eight, three mornings'],
  ['two wrong invoices in a week', 'the price list', '⚠ us — both were priced by the same person', 'check which list each was priced from'],
], [1.4, 1.3, 1.3, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It may be the heat and it is also possible that it is the long runs, and they cannot be separated because the long runs are all in the afternoon. The test is a long job at eight in the morning, and it takes three days."', '⚠ Count the tests that would take under an hour. Most of them. ⚠ **Then count how many have been done.** The two numbers are the cycle, and no further comment is needed.']));
out.push(stage('5', 'Read'));
out.push(p('1 Opening an unused roll of 8814 and pulling it at the core. **It did not tear** — and a second was opened, which also did not tear.  2 Because *I have tested two of seven and not seven of seven* — the arithmetic of the confidence, in one clause.  3 That both torn rolls were on **top of the stack by the yard door** and both sound ones in the middle: ⚠ sunlight from about two o\'clock. It emerged *while looking for a pattern that was not the batch*.'));
out.push(note('⚠ Two things to draw out. **First**, the letter reports a **negative** result in the same tone as a positive one, and that is what makes the next report credible. **Second**, the new possibility — that it is us — was found only because the writer was looking for a pattern that was not the batch. ⚠ Looking hard for one explanation is how the other one gets found, which is an argument for the search rather than for open-mindedness.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**To the press supplier. 25 November. The weekly stoppage — and the result of the test.**',
  '**What I reported.** The small press stopping about once a week, always between one and four. I said it might be heat and that I was not saying it was.',
  '**The test, and the result.** We ran a two-hundred-piece job at eight in the morning on three consecutive days. **It stopped on the second morning, at 8.40.** So it is not the time of day.',
  '**What I now think, and how sure.** ⚠ **Probably the run length and not the heat.** Three stoppages have now happened on long runs and none on a short one, morning or afternoon. I would put it no higher than *probably* because three is not many and we have not tried a long run with a cooling break in it.',
  '⚠ **One thing that has changed my mind about something else.** We have been running it with the guard panel off since the spring, for access. **It may be us** — the panel may be part of how it draws air, and I had not thought of that until the morning stoppage ruled out the heat.',
  '**And what I am not asking for.** Nothing yet.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The test and its result, reported either way', '✓ it stopped, which was not the expected result'],
  ['How sure, with the arithmetic of the confidence', '✓ three is not many'],
  ['The possibility that it is us', '✓ the guard panel'],
  ['A claim and a theory kept out of the same letter', '✓ *nothing yet*'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *it may be us* paragraphs read out. **Ask which was found by looking for something else.** ⚠ It usually is — and the mechanism is worth naming, because it means the way to find your own fault is not introspection but a serious search for somebody else\'s.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'For about a year we told our steel supplier that his 2 mm was coming in under thickness. We said it twice in writing and once on the telephone, and he sent a mill certificate both times, and we did not really believe the certificates.',
  'It was our micrometer. It had been dropped at some point and read about four hundredths low on everything, which nobody noticed because everything it measured was steel and all the steel read low.',
  'What found it was a man from the hotel site who put his own micrometer on the same sheet.',
  '⚠ We never told the supplier. I have thought about that several times and the reason is simply that there was no obvious moment, and a letter saying *the fault was ours all year* seemed worse than silence. **He still sends a certificate with every delivery.**',
]));
out.push(note('⚠ The last two sentences are the cost the cycle is about and the class should sit with them. The supplier is still, a year later, doing extra work because of an accusation nobody withdrew. ⚠ Ask what the letter would have cost to write — four lines — and let the class answer.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what it turned out to be_ — "our own micrometer, reading four hundredths low"   ✓ _may / might used for possibility, not must?_ — yes   ? _was the supplier ever told it was not them?_ — "no, and he still sends a certificate with every delivery"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the supplier was never told. ⚠ **That is the cost nobody counts: the supplier remembers being blamed and does not remember being cleared, because nobody cleared them.** ⚠ It is also the easiest thing in this unit to put right — four lines, any time — and the class should be invited to go and do it.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Two possibilities for the Thursday shortages: the haulier, or our own gate count at four o\'clock when one man is on. The test was a sealed sheet, which took ten minutes to set up. ⚠ It was the gate count. We have been short-counting our own loads out and telling the haulier about it.']));

// ===================== 9.3 =====================
out.push(pb());
out.push(h2('9.3  That cannot be the total'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question is the cycle: most people know a figure is wrong by feel and cannot say what makes it impossible.'));
out.push(p('**b**  The second. *That figure looks wrong* will be **checked**; the second names an impossibility and will be **investigated**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That she nearly wrote *the total looks wrong* — ⚠ which Nadia *would have checked and found to be right, because it is right*.  2 One of the two invoices is not theirs: it is for a customer called **Mansour**, and Nadia had been looking at her own colleague\'s surname on somebody else\'s invoice for four minutes without seeing it.'));
out.push(note('⚠ The mechanism in Nadia\'s last two speeches is the whole cycle and it is worth stating as a rule: **asked to check a total, a person adds it up, finds it correct and stops.** So a vague objection reliably produces a **false clearance** — which is worse than no objection, because the document now has a clean bill of health. ⚠ *A specific objection gets investigated; a vague one gets checked.*'));
out.push(p('**Language box – Practise (samples):**  1 _That cannot be the total, because it is less than the sum of two of its own lines and no credit appears._  2 _It couldn\'t have been signed on the 14th, because he was in Aleppo from the 12th to the 16th._  3 _The note cannot record the delivery, because it is timed before the gate sheet shows the load leaving._  4 _That cannot all be in the room, because the room holds about 900 and the figure is 1,400._  5 _The payment cannot have been against that invoice, because it was made nine days before the invoice was raised._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'That cannot be the delivery time on this note.'],
  ['B', 'Why not?'],
  ['A', 'Because it says 7.20 and the gate sheet shows the load leaving at 10.30. It cannot have been delivered before it left.'],
  ['B', 'No, it cannot. Good.'],
  ['A', 'I nearly wrote *the times do not look right*.'],
  ['B', 'Which I would have checked against the schedule and found to be right. ⚠ What is actually wrong is that the time is pre-printed — every note we issue carries the scheduled time, and has for two years.'],
  ['A', 'So no delivery note in the building records an actual time.'],
  ['B', 'Not one, since 2023. ⚠ And we have settled two claims using those times.'],
]));
out.push(note('⚠ *We have settled two claims using those times* is the finding and it arrives four lines after the objection. ⚠ The objection was about one note; the discovery is about every note for two years and two settled claims. That proportion — small objection, large finding — is the normal shape and it is the argument for making the objection at all.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the objection, what made it impossible, and what was actually found. ⚠ The third is never the second. **Typical errors:** _it must not be the total_ (which means something else entirely — a prohibition) · _it cannot have been sign on the 14th_ · _that can not be possible_ · and the content fault, which is an objection with no impossibility in it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The figure or document', 'What cannot be true', 'What makes it impossible'], [
  ['the Shamsi statement', 'the closing balance', 'it is less than two of its own invoices and no credit appears'],
  ['a delivery note', 'the delivery time', 'it is earlier than the gate sheet\'s departure time'],
  ['the stock card', '1,400 in that room', 'the room holds about 900'],
  ['a signed gate sheet', 'the signature date', 'the signer was in Aleppo from the 12th to the 16th'],
], [1.6, 1.6, 2.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"That cannot be the closing balance, because it is less than two of its own invoices and no credit appears. Which is not possible, so either a credit is missing from the page or one of the invoices is not ours."', '⚠ Count how many of the room\'s objections would have been phrased as *that looks wrong*. ⚠ **Then say, for each, what checking would have produced** — and in nearly every case it is a false clearance, which is the thing to be afraid of.']));
out.push(stage('5', 'Read'));
out.push(p('1 A closing balance cannot be less than the sum of two of its own invoices unless something has been credited, and no credit appears. It is **not** an arithmetic error because *the statement adds up correctly on its own figures, and that is why nobody has found it in two months*.  2 Added it up, found it right, and said so.  3 Whether the company has **paid 700,000 of somebody else\'s invoices** — two payments were made against the page totals in September and October.'));
out.push(note('⚠ The last paragraph is the one to teach. A query that examines only the other party is half a query, and the half about yourself is nearly always the expensive half. ⚠ Here the finding about Ms Shamsi\'s filing costs nothing and the finding about two payments may cost 700,000, and they are in the same document because the writer kept going.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**STOCK QUERY — the fourth store room. 26 November.**',
  '**What cannot be true.** The card shows 1,400 cartons in store 4. Store 4 is 6 by 4 metres with 2.4 metre racking and holds about 900 cartons stacked to the top with no gangway. **1,400 cannot be in that room, because they will not fit.** That is measurement and not an opinion.',
  '**Three things that would explain it, and the one that is true.** It could be a transposition, 1,400 for 1,040; it could be that 500 are somewhere else and counted here; or it could be that the card has not been reduced for issues. ⚠ **It is the second.** About 500 are in the yard container and have been counted in the store 4 figure since June.',
  '⚠ **What this is not.** It is not a counting error. Somebody asked to check store 4 would count the room, find about 900, and report a shortage of 500 that does not exist.',
  '**What I have not done.** I have not altered the card and I have not counted the container.',
  '⚠ **And one thing about us.** The container is unheated and has held 500 cartons since June. **I do not yet know whether they are saleable** and that is today\'s work.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What cannot be true, with the arithmetic stated', '✓ the room holds about 900'],
  ['The explanations, and which is true', '✓ three, and the second'],
  ['*What this is not*, and what checking would have produced', '✓ a shortage of 500 that does not exist'],
  ['The part that is about us', '✓ the unheated container'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Last paragraphs read out. **Ask which writer has found something expensive about their own side.** ⚠ The ones who have will often have found it in the last sentence they wrote, which is worth noticing: the part about yourself arrives only if you keep writing past the finding.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'Our wages sheet has been checked every month for eleven years and it is wrong.',
  'It adds up perfectly. Every line is correct, every total is correct, and the bank total matches the sheet total to the pound. What is wrong is that one man left in 2019 and his line is still on it, at nought, with his name and his number, and every month somebody checks that nought and it is correct.',
  '⚠ Checking cannot find it, because there is nothing inconsistent to find. **What would find it is somebody asking whether every name on the sheet works here**, which is a different question from whether the sheet is right, and nobody has ever been asked to do it.',
  'Who would have to look differently: whoever hands out the envelopes, who would notice in a second that there is no envelope for that name.',
]));
out.push(note('⚠ That text answers the cycle exactly and the last paragraph answers it best: the person who could find it in a second is not the person who checks it. ⚠ **A consistent document can only be falsified from outside itself**, and the class should leave with that.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _why checking does not find it_ — "there is nothing inconsistent to find"   ✓ _cannot be / couldn\'t have been used correctly?_ — yes   ? _who would have to look differently, and at what?_ — "whoever hands out the envelopes, at the names"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In all three the document is internally consistent and wrong. ⚠ **A document that contradicted itself would have been found years ago** — so every long-standing error is, necessarily, a consistent one. That is a reliable and slightly unsettling conclusion and it is the right place to end the cycle.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['The yard\'s diesel figure cannot be right: it shows 180 litres a week for two vehicles, and one of them has been off the road since August. ⚠ The arithmetic is that one van cannot use 180 litres on the Ghouta run, which is about 90 kilometres twice.']));

// ===================== 9.4 =====================
out.push(pb());
out.push(h2('9.4  The one-minute check'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Almost every answer is *something* — and the useful follow-up is *where is that document kept?*, because the answer explains the habit better than willingness does.'));
out.push(p('**b**  The second. It lets the other person correct the reading of a document rather than answer a question that need not have been asked.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 The order book (taken on the 22nd for forty), the picking list (forty), the gate sheet (thirty-eight out, two held back, noted in Abu Yasser\'s hand) — so the only open question is whether the two go out on Thursday.  2 That she would have looked at the same three documents **after** the call rather than before it, and it would have cost her four minutes and a walk to the warehouse — ⚠ *three of those four questions had answers in this building and only one of them needed me*.'));
out.push(note('⚠ Hala\'s *it also means I asked you one question instead of four* is the line that converts this from a time-saving tip into something worth doing. ⚠ The minute saves the asker a minute and the answerer four, and it replaces four interruptions with one — which is the figure to put on the board.'));
out.push(p('**Language box – Practise (samples):**  1 _Before I telephoned you I looked at the order book, the picking list and the gate sheet. The only thing I cannot see is whether the two held back are booked for Thursday._  2 _…the invoice, the order form and the price list of that week. The only thing I cannot see is whether the quotation reference was ever entered._  3 _…the purchase ledger, both payment runs and the bank statement. The only thing I cannot see is whether it was held deliberately._  4 _…the stock card, the count sheet and the container note. The only thing I cannot see is whether the container stock is saleable._  5 _…the complaints book, the credit book and the customer\'s file. The only thing I cannot see is whether anybody telephoned him back._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The Shamsi September invoice. Before I telephoned you I looked at three things.'],
  ['B', 'Go on.'],
  ['A', 'The purchase ledger, which shows it entered on 2 October. Both October payment runs, which do not include it. And the bank statement, which shows no payment.'],
  ['B', 'So the question is why it was not paid.'],
  ['A', 'That is not quite my question, because the ledger has a pencil mark against it that I think is yours. The only thing I cannot see is whether it was held deliberately.'],
  ['B', 'It was. The delivery was two rolls short and nobody noted it anywhere except that pencil mark.'],
  ['A', 'Then the thing to fix is not the payment, it is that a held invoice has no reason written against it.'],
  ['B', '⚠ Which is a better finding than the one you telephoned about.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three checks and the one question, then the three questions that were **not** asked. **Typical errors:** _before I telephoned to you_ · _I looked three things_ · _the only thing I cannot to see_ · and the content fault, which is reporting the three checks and then still asking all four questions.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The question I was going to ask', 'Check 1', 'Check 2', 'Check 3', 'What I now need to ask'], [
  ['Has the Shamsi wrap come?', 'order book', 'gate/goods-in sheet', 'stock card', '⚠ nothing — it came on the 21st'],
  ['Why has this not been paid?', 'purchase ledger', 'payment runs', 'bank statement', 'was it held deliberately?'],
  ['Where are the two cartons?', 'order book', 'picking list', 'gate sheet note', 'are they booked for Thursday?'],
  ['Is the stock figure wrong?', 'stock card', 'count sheet', 'container note', 'is the container stock saleable?'],
], [1.4, 1, 1, 1, 1.4]));
out.push(note('⚠ The first row is the important one: the question disappeared entirely. ⚠ About half of a class\'s questions do, and the teacher should collect that figure out loud rather than letting each learner discover it privately.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I was going to ask whether the wrap had come. I looked at the order book, the goods-in sheet and the stock card, and it came on the 21st and was put away. **I do not need to ask anything.**"', '⚠ Count how many questions disappeared entirely. Usually about half. ⚠ That figure is the cycle and it is more persuasive than any instruction, so put it on the board and leave it there for the rest of the unit.']));
out.push(stage('5', 'Read'));
out.push(p('1 Whether the order was **ever written down** — *most "missing" orders are orders that were never written down, and this is the only document that can show that*.  2 Because the three documents live in three places, so doing the check means walking about forty metres and telephoning means walking none: ⚠ **the check is the slower thing to start and the faster thing to finish, which is the worst possible shape for a habit.**  3 That the check will sometimes show that the answer is in a document and **the document is wrong** — which is *the only way anybody ever finds out that a document is wrong*, and it has happened twice this month.'));
out.push(note('⚠ Question 2 is the most useful paragraph in the unit for anybody who manages people. ⚠ The habit does not fail because of laziness; it fails because of its **shape** — slow to start, fast to finish. The remedy is to change the shape (put the three documents in one place) rather than to exhort anybody, and a learner who sees that has learned something that transfers to every habit in a workplace.'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**THE ONE-MINUTE CHECK — for the workshop and the office.**',
  '**What this is.** Three documents, in this order, before you ask anybody about a job. About a minute, and in roughly three cases out of four it answers the question.',
  '**1 · The job book.** What was taken, when, for whom, and the promised day. ⚠ **Most "lost" jobs were never written in it**, and nothing else can show that.',
  '**2 · The cutting list.** What was cut against the job, and the sheet it came from. If the list differs from the job, the question is about the list and nobody needs to go to the saw.',
  '**3 · The collection sheet.** What went out, when, and signed by whom — including anything held back. Those notes answer about a third of all queries on their own.',
  '**Then ask: what can I not see from these three?**',
  '⚠ **Why this is written down.** Not because anybody is lazy. The job book is at the counter, the cutting list is at the saw and the collection sheet is by the door — about thirty metres — so the check is slower to start and faster to finish than asking, which is the worst shape a habit can have.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The documents numbered, in order', '✓'],
  ['What each one uniquely shows', '✓'],
  ['A question, not an action, as the last step', '✓'],
  ['Why the habit is hard, in physical terms', '✓ thirty metres'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *why the habit is hard* paragraphs read out. **Separate the real obstacles from the ones about willingness.** ⚠ A distance, a locked door or a document kept in somebody else\'s drawer can be fixed this week; *people should care more* cannot, and a class that learns to tell them apart will fix two or three things.'));
out.push(stage('7', 'Write freely – sample (133 words)'));
out.push(sample(null, [
  'In October I telephoned the steel supplier to ask whether our order had been dispatched. He told me it had, on the 14th, and that he had sent the dispatch note by email.',
  'The email was in our own inbox, from the 14th, and had been there for eleven days. I had not looked because I do not think of the inbox as a document — I think of it as a thing that interrupts me.',
  '⚠ What stopped me looking was not habit and not distance. **It was that nobody has ever told me the email account is part of the goods-in record**, and it is: about a third of our dispatch notes arrive there and nowhere else.',
  'So the one-minute check in our yard has three documents and one of them is a screen, and until this week nobody had written that down.',
]));
out.push(note('⚠ That text produces the third category and it is worth collecting separately: not distance, not habit, but **not knowing a document is a document**. ⚠ It is the only one of the three a written procedure fixes immediately.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _where the answer was_ — "in our own inbox, eleven days"   ✓ _what they checked, reported with what each showed?_ — yes   ? _what actually stopped them looking?_ — "not knowing the inbox counts as a record"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually one writer in three did not know the document existed, or did not know it counted. ⚠ **That one is not a habit problem at all** and should be separated out: it is solved by listing the documents, which is exactly what stage 6 just made them do.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Three things I would have telephoned about. The check answered two outright — one order had never been written down and one had gone out on the Tuesday. The third needed one question instead of three. ⚠ Total time: about four minutes. I have made four interruptions into one.']));

// ===================== 9.5 =====================
out.push(pb());
out.push(h2('9.5  Definitely, probably, possibly'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The difference people name is usually *how likely*; steer them towards *what I have checked*, which is the cycle\'s basis.'));
out.push(p('**b**  *Definitely* = checked and arranged. *Probably* = more likely than not, plan for both. *Possibly* = looked and do not know — ⚠ or, far too often, *have not looked*.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The word itself** — *the next time I say definitely nobody believes it*, which Mr Attar calls the expensive part.  2 **_Possibly_** — *the most misused word in business writing, because it is free*.'));
out.push(note('⚠ The repair offered is one clause and it is mechanical: *possibly, and what I have not checked is the carrier\'s schedule*. ⚠ **A hedge with its reason attached cannot be hidden behind**, and it also tells the reader what to go and do. Teach the clause, not the virtue.'));
out.push(p('**Language box – Practise (samples):**  1 _Definitely, if the garage has confirmed in writing; probably otherwise. Cost if wrong: the word._  2 _Probably. Cost: almost nothing — the reader has been told to plan for both._  3 _Possibly, and what I have not checked is whether it was serviced in 2024._  4 _Possibly, and what I have not checked is whether he has ordered from anybody else._  5 ⚠ _Probably — a figure added once is probably right, and *definitely* needs it added twice by two people._'));
out.push(note('⚠ Item 5 is worth dwelling on. *Definitely* about a figure means two people have added it, and most learners will have used *definitely* about figures they added once, on a Thursday, at speed.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The goods will possibly arrive before Thursday.'],
  ['B', 'What does *possibly* cost if it turns out wrong?'],
  ['A', 'Nothing. I have hedged it.'],
  ['B', 'And what have you checked?'],
  ['A', '…Nothing. I have not telephoned the carrier.'],
  ['B', 'So the true sentence is not *possibly*. What is it?'],
  ['A', '*I have not asked the carrier and I will do so this morning.*'],
  ['B', '⚠ Which is a worse-looking sentence and a better one, because somebody reading *possibly* would have planned around it and somebody reading yours will wait twenty minutes and get a real answer.'],
]));
out.push(note('⚠ Role card 2 is the one to perform and the discomfort is the point: the honest sentence makes the writer look unprepared and the hedge makes them look careful. ⚠ A class that feels that asymmetry will remember it, and the teacher should name it rather than pretending the honest version is also the comfortable one.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write each adverb with its cost, then find the *possibly* that means *I have not looked* and write the repair. **Typical errors:** _it will definitely to arrive_ · _possibly it will maybe arrive_ (two hedges, which halve each other) · _definitely probably_ · and the content fault, which is a *possibly* with no unchecked thing named.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I said', 'The word I used', 'What it would cost if wrong', 'The word I should have used'], [
  ['the van will be back Monday', 'definitely', 'the word — and a run planned around it', '**definitely**, correctly: the garage confirmed in writing'],
  ['the credit will clear this week', 'definitely', 'nothing operationally; the word', '**probably**'],
  ['the auditor will want the yard notes', 'definitely', 'an afternoon of unnecessary work', '**probably**'],
  ['the wrap will arrive before Thursday', 'possibly', 'nothing — which is why I used it', '⚠ **not a hedge at all**: I have not asked the carrier'],
  ['the fourth room will be done by the year end', 'possibly', 'nothing, and it has hidden a task for three weeks', '⚠ **not started; it will be done by the 10th**'],
], [1.6, 0.9, 1.8, 1.3]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I said the credit would definitely clear this week. If it had not, nothing would have happened operationally — but I would have spent the word, and the real word was *probably*."', '⚠ Count the room\'s *definitely*s for one month. The Language box says four a year; most people manage four a week. ⚠ **Do not present that as a failing** — it is how the word is used in ordinary English, and the unit is asking for a professional usage that is narrower than the ordinary one.']));
out.push(stage('5', 'Read'));
out.push(p('1 **Three**, and *I have used the word once in this document*.  2 The insurance schedule: ⚠ *I said "possibly" about this three weeks ago and what I meant was that I had not looked at it* — and the honest entry is **not started, nobody else is waiting on me for it, and it will be done by the 10th**.  3 Because *the three groups need three different things from you*: the first needs nothing, the second needs the reader not to ask again until Friday, ⚠ and the third needs them to know *I may be about to tell you something worse than what is on the page*.'));
out.push(note('⚠ The third group\'s warning is the most sophisticated thing in this cycle. A status page usually tries to look settled; this one warns that one item may get **worse** on Thursday, and says that is better coming now. ⚠ Learners will not produce it unprompted and it is worth asking them to add it.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**THE HOTEL SNAG LIST — where each item stands. 28 November.**',
  '**Definitely done, and you can test these today.** The forty-two brackets are cut, drilled and in the yard, counted twice by two people. The stair rail is welded and the certificate is with it. ⚠ **Two items, and I have used the word once in this note.**',
  '**Probably done by Friday.** The balustrade infills are cut and need galvanising; the galvaniser has them and has promised Thursday, which he has met eleven times out of twelve this year.',
  '**Possibly, and here is exactly what I have not checked.** The handrail returns. ⚠ *Possibly by Friday* — **and what I have not checked is whether the site has finished the blockwork they go into.** If they have not, it is not a cutting job, it is a remeasure, and I will know when I go on Wednesday.',
  '⚠ **And one item I am taking off the list rather than hedging.** The fire-door frames. I said *possibly* about these a fortnight ago and what I meant was that I had not measured the openings. **Not started, nobody is waiting on me, and they will be measured on Wednesday and cut by the 8th.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*Definitely* items testable today, and the word counted', '✓ two items, one use'],
  ['*Probably* items with a date and what is outstanding', '✓ eleven of twelve this year'],
  ['Every *possibly* with the unchecked thing named', '✓ the blockwork'],
  ['One item converted from a hedge into an uncompleted task', '✓ the fire-door frames'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Converted items read out. **Ask which hedge had been hiding a task the longest.** ⚠ Three weeks and a fortnight are typical; six months appears in about one class in three, and it is always something nobody else was waiting for, which is exactly why it survived.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'In 2022 the man at the galvanisers told me a batch would definitely be ready on the Thursday. I had a lorry booked, two men waiting and a site expecting the rail on the Friday morning.',
  'It was ready on the Monday. What I did because I believed him was send the lorry, pay for it, send the men home at eleven, and telephone the site to say the rail was coming, which it was not.',
  'The cost of the lorry was about 90,000 and the cost of the telephone call was four months of being asked, every time, whether I was sure.',
  '⚠ I still use him, because he is the best galvaniser in Damascus. **But I have not believed a date from him since, and when he says Thursday I plan for Monday — which means his word is worth nothing to me and he does not know it.**',
]));
out.push(note('⚠ The last clause is the price of the word, stated better than the book states it: *he does not know it*. ⚠ The person who spends *definitely* carelessly is never told that they have stopped being believed, so the cost is invisible to them and permanent.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they did because they believed it_ — "a lorry, two men, and a promise to a site"   ✓ _definitely / probably / possibly used with their real weights?_ — yes   ? _do they believe that person now, and about what?_ — "not about dates, and he does not know"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most writers still do not believe that person, ⚠ **and usually about everything rather than only about the thing that failed** — which is the real price. ⚠ Close the cycle there: the word is cheap to spend and the loss is both total and silent.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I found a *possibly* in a note from last month about the insurance schedule. I had not read it. ⚠ I have now, and the cash-on-premises limit is 300,000, which is less than a Thursday\'s takings — so the hedge had been hiding a task that turned out to matter.']));

// ===================== 9.6 =====================
out.push(pb());
out.push(h2('9.6  A photograph, in words'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The things they will leave out are position and size, every time, in that order.'));
out.push(p('**b**  The second. *Badly damaged* cannot be drawn; a crush on one lower corner, 10 cm in from each edge, with a sound top, can.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 **Where**, **how big**, and **what it is next to**.  2 ⚠ *Damaged* is *a conclusion wearing the clothes of a description* — it reports a decision and not what can be seen: *split, crushed, torn, bent, soaked — those I can draw. Damaged I cannot.*'));
out.push(note('⚠ Two further points from the dialogue. **First**, record what is sound: *in six months it will be the sentence that matters, because somebody will claim the whole pallet.* **Second**, and best: *about ten centimetres on both* — ⚠ **two identical marks are a mechanism and one is an accident**, so *both* is often the most valuable word in a description.'));
out.push(p('**Language box – Practise (samples):**  1 _The middle two of five base boards are split across the width, about 40 cm each, starting within 5 cm of the centre; the outer three and all top boards are sound._  2 _Crushed at one lower outer corner, about 10 cm up and 8 cm across; the top and three sides are sound; the label is unmarked._  3 _Torn at two points on the underside, each about 12 cm, in line with the marks beneath; the top sheet is unmarked and there is no tear at the corners._  4 _Bowed about 3 cm over a 120 cm span at the centre; the ends and uprights are straight; the paint is scraped along 40 cm of the top surface._  5 _A water mark on the top and the upper two thirds of all four sides; the base and the lower third are dry; the label is legible._'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [
  ['A', 'It is a carton. One lower corner is crushed, about 10 cm up.'],
  ['B', 'Where does it start?'],
  ['A', 'At the corner itself, running about 8 cm along each of the two faces that meet there.'],
  ['B', 'And what is sound?'],
  ['A', 'The top, the other three corners and all four sides above the crush.'],
  ['B', 'Is the mark on one or on both?'],
  ['A', '⚠ On one corner only. There is a 15 cm tear in the wrap over that corner and nowhere else.'],
  ['B', 'Now I can draw it.'],
]));
out.push(note('⚠ Note that the sample answers *on one corner only* — and the honest *only one* is as informative as *both*, in the opposite direction. ⚠ One mark is an accident; two identical ones are a mechanism; and saying which you have is the whole value of the question.'));
out.push(stage('3R', 'Perform'));
out.push(p('The class draws from the description. **Compare three drawings and find the sentence that allowed two readings** — ⚠ it is always a missing position or a missing measurement, never an unclear word. **Typical errors:** _the carton is damaged in the corner_ · _the split is in the middle of the near board approximately_ (the hedge attached to the wrong element) · _it is about 40 cm, maybe more_ · and the content fault, which is a description of the damage with nothing about the sound parts.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'Where', 'How big', 'What is sound'], [
  ['a pallet', 'middle two of five base boards', '40 cm splits, from the centre line', 'outer three base boards; all five top boards; both blocks'],
  ['a carton', 'one lower outer corner', '10 cm up, 8 cm across', 'top, three sides, label, three other corners'],
  ['a shelf', 'centre of a 120 cm span', 'bowed about 3 cm', 'both ends, both uprights, the fixings'],
], [1.2, 1.8, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(p('One description read aloud and drawn by the class, then compared with the object. ⚠ **Where a drawing is wrong, the fault is in the description** — and finding the word that did it is the whole exercise. The commonest culprit is a preposition: *on*, *in*, *at* and *near* are not interchangeable in a description.'));
out.push(stage('5', 'Read'));
out.push(p('1 About **twelve** — the two 40 cm splits, the 5 cm from the centre line, 8 cm mark width, 40 cm apart, 90 cm and 10 cm for the yard\'s own tines, four turns of wrap, 12 cm tears, 30 cm buckle positions, 48 cartons in four layers of twelve, 10 cm up and 8 cm across on the crushes.  2 In every paragraph: the outer three base boards and all five top boards; the blocks; the unmarked top sheet; both straps; forty-six sound cartons; *no other carton is marked at any corner*.  3 Because ⚠ *an insurer reading only the damage cannot tell whether I looked for anything else*.'));
out.push(note('⚠ The absences paragraph is what makes the document worth more than the six photographs, and it is worth saying so directly: a photograph shows what is there and cannot show that somebody looked for water, oil, scuffing and label damage and found none.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**CONSIGNMENT 1181 — written description for the insurer. Written at the Homs depot at 11.20 on 26 November, before the load was broken down; photographs 1–4 attached, taken at the same time.**',
  '**The load.** Twenty-four cartons on one pallet, four layers of six, shrink-wrapped, two straps.',
  '**The top.** The upper surface of the wrap bears a water mark across its whole area, with a tide line about 6 cm down each side. **Below that line the wrap is dry and clear on all four sides.** No tear anywhere in the wrap.',
  '**The cartons.** The six top-layer cartons are water-marked on their upper faces, the marking extending about 4 cm down each side. **The eighteen cartons in the lower three layers are dry and unmarked.** All twenty-four labels are legible.',
  '**The pallet.** Sound. No splits, no tine marks other than ours at 90 cm, blocks intact.',
  '⚠ **What is not here.** No crushing on any carton or corner. No oil, no scuffing, no label damage, no strap damage. **The base of the load was dry throughout.** I am recording the absences because a reader who sees only the water marking cannot tell whether anything else was looked for.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['When and where, and what else was taken at the time', '✓'],
  ['Where, how big, and next to what, in every line', '✓ the tide line does the work'],
  ['What is sound, in every paragraph', '✓ all four'],
  ['The absences, with the reason for recording them', '✓'],
], [5, 1]));
out.push(note('⚠ The tide line in that sample is the detail to praise: *a tide line about 6 cm down each side* establishes that water came from above and stood briefly, which the deduction cycles can then use. ⚠ One measured observation doing two jobs is what a good description looks like.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what is not here* paragraphs read out. **Ask which absence would matter most in six months.** ⚠ It is usually the one that forecloses a different claim — *no crushing* in a water claim, *no water* in a crush claim — because that is the claim that gets added later.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'The wooden bench top in our workshop is 3,000 by 800 and was flat in 2016.',
  'It now dips about 12 mm over the middle metre, measured with a straight edge and a rule. The dip is not central: it is about 1,100 mm from the left-hand end, which is where the vice is. The surface is scored over roughly the left-hand third, with cuts up to about 2 mm deep running mostly across the width. **The right-hand third is unscored and still flat.** The legs and rails are sound and the bench does not rock.',
  '⚠ In 2016 it was a new 50 mm beech top, flat, unmarked and oiled. **What has worn is a third of it, around one fixed point, and the measurement that matters is the 12 mm, which nobody has ever taken before and which I only know because I took it this morning.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what is still sound_ — "the right-hand third, the legs and rails"   ✓ _verbs you can draw, and no "damaged"?_ — yes: dips, scored, cuts   ? _what measurement is missing?_ — "how deep the dip was last year — there is no earlier figure"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually only one text contains a measurement. ⚠ **Slow wear is exactly the case where measurements matter**, because nobody can remember last year — and the sample\'s closing point is the one to repeat: the figure exists only because somebody took it this morning, and next year it will be the only evidence of what this year was like.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I described the bent gate post and my brother drew it from the description. He drew the bend the wrong way round, because I wrote *bent towards the yard* and he did not know which side the yard is on. ⚠ The missing element was *what it is next to*, exactly as the box says.']));

// ===================== 9.7 =====================
out.push(pb());
out.push(h2('9.7  Review & Mediate: what do you think happened to this pallet?'));
out.push(stage('1', 'Get ready – Unit 9 quiz'));
out.push(p('**1** **The mark it rests on** — in the same sentence.  **2** **Two possibilities** and **the test** that would settle it.  **3** Because somebody asked to check a total **adds it up, finds it correct and stops** — so a vague objection produces a false clearance.  **4** Where it was recorded, where it was actioned and where it left; and the last step is a **question**: *what can I not see from these three?*  **5** ⚠ **Nothing** — which is why it is misused, and why it needs the clause *and what I have not checked is…*'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 She can say the machine (tines about 40 cm against their 90), the sequence (lifted after wrapping, from the wrap torn only at the tines) and that it was not lifted on their vehicle (straps fitted and intact). ⚠ She **cannot** say whose machine, and says so: *I cannot say and I am not going to.*  2 That the pallet **went to the market first** because the driver had another drop, and was lifted off and on there — ⚠ and that he only asked his driver **because she had said *after wrapping***.'));
out.push(note('⚠ Mr Haffar\'s last line is the whole unit: *I would not have gone and asked him at all if you had told me it was my man, because I would have paid it and been annoyed with him for a month.* ⚠ An attribution she could not prove would have bought a payment and cost the information — **and would also have cost his driver a month of unfairness for something he did not do.**'));
out.push(p('**Language box – Practise (sample):**  _"I can tell you three things and the third is the one you want. … Whose machine, I cannot say and I am not going to; there is one in the market and at least two on your street. And the credit is going out either way."_'));
out.push(note('⚠ *The credit is going out either way* is doing specific work and learners should be told what: without it, the refusal to attribute looks like a negotiating position being held open. With it, the refusal is visibly free of self-interest.'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'Three things about the short delivery. Our gate count agrees with the order at forty. Your goods-in sheet shows thirty-eight. And the seal number on your sheet is 4471 and the seal on our gate sheet is 4468.'],
  ['B', 'So somebody opened it.'],
  ['A', 'A seal was changed between our gate and your door. Who changed it, I cannot say and I am not going to.'],
  ['B', 'It went on a shared lorry.'],
  ['A', 'That is the first thing anybody has told me that I could not have found here.'],
  ['B', 'And it was tipped at Harasta, because the other load was for Harasta. ⚠ I know that because our sheet has the driver\'s second name on it and he is not the man who left your yard.'],
]));
out.push(note('⚠ Notice the shape: A gives three findings and refuses the attribution; B then supplies two facts — a shared lorry and a second driver\'s name — that A had no access to. ⚠ **The refusal is what buys the facts**, and that is the point to land before the mediation report.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three findings and the refusal, then what the other person contributed and why only they could. **Typical errors:** _I can tell you three thing_ · _whose machine I cannot to say_ · _it was lifted after it was wrap_ · and the content fault, which is a performer who completes the attribution because the other person invites them to.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'My three findings', 'Where I stopped', 'What they contributed'], [
  ['Mr Haffar', 'narrow tines; after wrapping; not on our vehicle', 'the machine, not the owner', 'it went to the market first, and was lifted there'],
  ['the haulier', 'count agrees; their sheet differs; the seal number changed', 'that a seal was changed, not who', 'a shared lorry, tipped at Harasta, a second driver'],
], [1, 1.6, 1.2, 1.6]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"I could have said it was his man with the forklift and he would probably have accepted it. Instead I stopped at the machine, and he came back with the fact that the pallet went to the market first — which only he could find, because only he could ask his own driver."',
  '⚠ **The unit\'s mediation, named as the ninth unit of this book:** an attribution you cannot prove buys you a payment and costs you the information, **because the person who would have gone and asked stops asking the moment you blame them.**',
  '⚠ And the second cost, which the dialogue states and the mediation should repeat: his driver would have had a month of being blamed for something he did not do, and nobody would ever have corrected it — because the payment would have closed the file.',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 4)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'A', 'B', 'B', 'C', 'B']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q1 is **Right**: *can only have been* is certainty about the **kind** of machine, and the text is explicit. Learners who answer C have confused the certainty about the machine with the stated uncertainty about the owner — ⚠ which is the distinction the whole unit teaches, arriving in an examination question.'));
out.push(note('⚠ Q2 is **Wrong**, not *doesn\'t say*: the text states *I have not been to look at anybody\'s machine*. ⚠ An explicit statement that something was **not** done makes the opposite claim wrong, and treating it as an absence of information is the commonest Part 4 error in this book — it is the same fault as Q7 in the Mid-Book Test, and the two should be taught together.'));
out.push(note('⚠ Q4 is the only *doesn\'t say*: the text says the credit is being raised, and says nothing about whether the customer asked. ⚠ Learners answer A because a credit implies a request in their experience, which is inference and not reading.'));
out.push(stage('6', 'Write with help – sample (42 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Hala — on the torn rolls: I can say both are batch 8814 and that two others from the same batch passed a pull test. I cannot say it is not the batch. What would change this is another roll failing — if one does, stop using 8814 and tell me.',
]));
out.push(note('⚠ That sample is 48 words and must be cut. ⚠ The cut is *and that two others from the same batch passed a pull test*, which is evidence rather than finding — and in forty words the **overturning condition** is what must survive, because a diagnosis without one will be acted on as settled.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What the writer can say, with the evidence in a clause', '✓'],
  ['What the writer cannot say', '✓ *I cannot say it is not the batch*'],
  ['What would change it', '✓ another roll failing'],
  ['35 to 45 words — count them', '✗ 48 at the first attempt'],
], [5, 1]));
out.push(note('⚠ The second line is the one learners omit, and it is not the same as hedging: *I cannot say it is not the batch* states the limit of the finding, while *it may or may not be the batch* states nothing at all. ⚠ Mark the difference explicitly, because in forty words the two look alike and only one of them tells the reader what to do.'));
out.push(stage('7', 'Write freely – sample (139 words)'));
out.push(sample(null, [
  '**BENT SHEETS FROM THE HOTEL SITE — inspection and diagnosis.**',
  '**Description.** Six sheets, 2,440 by 1,220 by 2 mm. Two are creased across the short dimension about 300 mm from one end, each crease running the full width and about 15 mm deep, **both at the same end and the same distance.** The other four are flat. The protective film is intact on all six.',
  '**The deduction.** They **can only have been** bent over an edge, because a dropped sheet creases irregularly and these are straight and parallel. They **must have been** bent while bundled, because the two creases coincide.',
  '**What it does not mean.** We cannot say where or on what. A lorry bed, a stillage and a tine would all do it.',
  '**How sure I am.** ⚠ *Probably* bent in transit rather than here, because our own stillage has no 300 mm edge — and *probably* rather than *definitely* because I have not looked at the lorry.',
  '⚠ **What would change my mind.** The film being torn at a crease. It is not, so they were bent in the bundle.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I gave the sheet diagnosis to the driver and stopped at *bent over an edge, we cannot say what*. He said the bundle was stood on its end against the headboard for the Homs leg, which puts a 300 mm step exactly where the creases are. ⚠ He volunteered it in about ten seconds.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 9 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'c', 'a', 'b', 'c', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 1\'s distractor **c** is *must of been*, which should be marked wrong and corrected **once**: the pronunciation in Track 9.2 is exactly *must of*, so the spelling error is a consequence of hearing the language correctly and is not worth a second mention.'));
out.push(note('⚠ Questions 4 and 5 are the ruling-out pair. *Must not be* in Q4 is a prohibition, not an impossibility, and learners choose it because it feels stronger. ⚠ Q6 tests whether the class read the wrap evidence as a **sequence** fact; a learner who answers *before* has reversed the inference and should be shown the sentence again rather than told the answer.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Finding 1', 'Finding 2', 'Finding 3', 'What the speaker will not say', 'What the other person adds'], [[
  'tines about 40 cm apart; ours are 90', 'lifted after wrapping — the wrap is torn only at the tine marks', 'not lifted on our lorry — straps fitted and intact',
  'whose machine it was', 'it went to the market first and was lifted off and on there',
]], [1.2, 1.6, 1.4, 1.1, 1.7]));
out.push(note('⚠ Findings 2 and 3 each need **the evidence as well as the claim** for the mark: *lifted after wrapping* alone scores, but a learner who adds *because the wrap is torn only at the tines* has done what the unit asks and should be told so in writing. ⚠ The fifth gap scores for the market; the detail that he asked his driver **because of the wrapping point** is a bonus to praise and not a requirement.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (66 words)', ['The two middle base boards are split across the width, about 40 cm each; the outer three and all five top boards are sound. Two tine marks on the underside are 40 cm apart and ours are 90. So it can only have been lifted by a narrow-tine machine. What would change my mind is the wrap being torn elsewhere — it is torn only at the marks.']));
out.push(box('Marking the Unit 9 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gaps 2 and 3 are stronger with their evidence but score without it.'],
    ['**C Writing**', '7', 'Two measurements (2) · ⚠ what is **sound**, stated (1) · a deduction with the mark it rests on, in the same sentence (2) · ⚠ *what would change my mind* (2).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for *what would change my mind* are this check\'s version of Unit 4\'s numbers, Unit 5\'s sources, Unit 6\'s figures and Unit 7\'s first-hand paragraph.** A description and a deduction with no overturning condition score 5 of 7 at most, and that is the whole point of the unit.',
  '⚠ The *sound* mark is one mark and is lost by almost everybody on a first attempt, because damage is what feels worth describing. ⚠ Give the feedback in the dialogue\'s own terms: in six months it is the sentence that matters, because somebody will claim the whole thing.',
  '⚠ Do **not** award the deduction marks for a deduction whose evidence is in a different sentence. *The base is split. It must have been lifted from one side.* is two sentences and scores 1; joining them with *because* scores 2. ⚠ That looks pedantic and is not: a reader who meets the claim first has already formed a view before the evidence arrives.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 9**'));
out.push(p('**1 The deduction that runs on to a person.** The machine is deducible and the owner is not, and the two are one sentence apart. ⚠ Learners will complete the attribution because it feels like finishing the work, and the correction is not about fairness — it is 9.7\'s finding, which is **practical**: an attribution you cannot prove buys a payment and costs the information, because the person who would have gone and asked their own driver stops asking the moment you blame them. ⚠ Give them Mr Haffar\'s line, not a principle.'));
out.push(p('**2 *Possibly* standing in for *I have not looked*.** It is free, it is invisible from outside, and every busy person in the room does it. ⚠ **Do not treat it as dishonesty**, or the class will defend itself and nothing will change. Treat it as a formatting problem with a mechanical fix: the clause *and what I have not checked is…*, which cannot be hidden behind and which also tells the reader what to do. ⚠ Then ask the class to find one in their own writing from last month, which they will, within two minutes.'));
out.push(p('**3 Description as verdict.** *Damaged*, *badly affected*, *unusable* — all conclusions wearing the clothes of observation, and all produced by people trying to be helpful about severity. ⚠ The drill that works is the back-to-back drawing in 9.6 stage 3, because the failure is visible and belongs to the describer: the drawing is wrong and the word that did it can be found. ⚠ And insist on **what is sound** in every paragraph from the first attempt. It is the half of the description that pays, and it is the half nobody writes, because at the moment of writing the sound parts are the boring ones.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 9 · Answer Key');
