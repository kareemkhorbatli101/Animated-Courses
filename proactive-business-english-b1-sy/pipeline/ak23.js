// Proactive Business English B1 · Syria Edition · Book 2 · Unit 23 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 23  Trade News and What Is Actually Known'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **The unit is one rumour, followed for a week.** Four lines of trade news on 20 July nearly produce a forty-million purchase of board; ⚠ **one telephone call of twenty minutes stops it**, and the rest of the unit is the apparatus that makes the call happen and keeps its result. **Teach it as one week and the class will see why each cycle exists.**',
  '⚠ **The hardest habit to install is reading the sentence instead of its meaning.** ⚠ *Read me the sentence again — the sentence, not what it means* **is the instruction of the whole unit**, and it works on anything: a report, a message, a letter from a solicitor, a line in a contract.',
  '⚠ **Expect the class to think the grading is bureaucracy, and show them the arithmetic instead.** ⚠ **One item of six confirmed is normal**, and a workplace that treats all six as equally certain is making every decision on the weakest. **23.5 is the cycle to spend time on if time is short.**',
], C.grey, C.navy));

// ===================== 23.1 =====================
out.push(h2('23.1  The word that decided you'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Push for the sentence rather than the subject: **not *I read about the border* but *which sentence made you do it?***'));
out.push(p('**b**  ⚠ ***The mill has closed* is the strongest claim**; *has suspended deliveries* is weaker and narrower; *is to close* is a future with somebody\'s intention behind it, ⚠ **and a learner who ranks *is to close* strongest has read the certainty and not the tense.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That the mill had closed.**  2 ⚠ **Who says so (*it is understood that* has no source in it at all); which grade (*deliveries* — we buy one of five); and it does not say *never*** — *in about three weeks is in the same sentence as the suspension.*'));
out.push(note('⚠ The instruction to drill is the first one: ⚠ **read me the sentence again — the sentence, not what it means.** **Most of a decision disappears when somebody reads the line aloud a second time**, and the technique costs nothing and works on everything.'));
out.push(p('⚠ And the second half of the cycle is as important as the first: ⚠ **record a failure to find out as a finding.** ⚠ *Telephoned 21 July, no answer, twice.* **That is a line in a file and it is worth more than the report**, because in September it tells a reader exactly how hard anybody tried.'));
out.push(p('**Language box – Practise (samples):**  1 *prices are to rise* — ⚠ **whose prices, by how much, from when, and who says so.**  2 *the border is closed* — ⚠ **to what: lorries, people, or one crossing of three.**  3 *it is understood that the contract has been awarded* — ⚠ **to whom, and by whom, and there is no source.**  4 *deliveries have been suspended* — ⚠ **of which grade, by whom, and for how long.**  5 *sources say the plant is for sale* — ⚠ **how many sources, and how many of them are the same man.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The border is closed. We should hold the consignment.'],
  ['B', '⚠ Read me the sentence.'],
  ['A', '*It is reported that the crossing is closed to commercial traffic.*'],
  ['B', '⚠ **Which crossing?** There are three we use.'],
  ['A', '…It does not say.'],
  ['B', '⚠ And *commercial traffic* — is a lorry of ours commercial traffic when it is empty?'],
  ['A', 'I do not know.'],
  ['B', '⚠ **Then there are two calls, and the consignment is not held until we have made them.**'],
]));
out.push(note('⚠ **Role card 2 shows the third question doing the work**: ⚠ ***to what?*** — *which crossing, and does an empty lorry count?* **The missing element is nearly always the product or the scope**, because a reader supplies it from their own situation without noticing.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence as reported and as read. **Typical errors:** paraphrasing the line and then analysing the paraphrase · and the content error, which is acting before the call. ⚠ **The telephone call is the only action in the room that produces a fact**, and it takes four minutes.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence, as written', 'What has happened', 'Who says so', 'To what — and the call'], [
  ['it is understood that the mill at Hama has suspended deliveries', 'deliveries stopped for now', '⚠ **no source at all**', '⚠ **grade not stated. Call the Hama sales office — four minutes.**'],
  ['board prices are expected to rise in the autumn', '⚠ **nothing has happened yet**', '*it is believed in the trade*', 'which board. Call two merchants and ask where they heard it'],
  ['a Homs works is to reopen', 'nothing yet; an intention', '⚠ **sources say**', '⚠ **drive past it. We did, on 2 July: no roof.**'],
  ['the plater has given notice of twelve per cent', '⚠ **a notice has been given**', '⚠ **his circular of 22 January — a document**', 'all grades. No call needed; read the circular'],
], [2, 1.2, 1.3, 1.7]));
out.push(note('⚠ **Only the fourth line needs no telephone call, and it is the only one with a document behind it.** ⚠ **That correspondence is not a coincidence** — a line with a document answers *who says so* in advance, which is most of what a call is for.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The sentence says *it is understood that the mill at Hama has suspended deliveries*. What it does not say is who says so, or which grade. The call that would settle it is to the Hama sales office, and it would take four minutes."', '⚠ **Then count how many lines could be settled by one call of under ten minutes.** ⚠ **It is usually most of them**, and the class realises that the obstacle was never difficulty.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Four assumptions, made in the four seconds it takes to read the line at normal speed.**  2 ⚠ **That the suspension is on two grades and not ours; that it is the heavy brown, because the slitter is being rebuilt; and *about a fortnight*, which he volunteered.**  3 ⚠ **Because it is part of the record and not a complaint** — *in September it will tell us how much weight the line can carry.*'));
out.push(note('⚠ **The *what was assumed* column is the one to teach.** ⚠ **It is never written and it is the only column that explains the decision** — *that somebody reliable had said it; that the mill has closed; that it is our grade; that there is no period at all.* **Four assumptions, none of them stated, all of them acted on.**'));
out.push(p('⚠ And the unprompted detail is evidence: ⚠ *he said *about a fortnight* without being asked.* **An unasked-for figure is worth more than an answered one** — and a reader can only tell the difference if the note says which it was.'));
out.push(stage('6', 'Write with help – sample (124 words)'));
out.push(sample(null, [
  '**THE BORDER LINE, WORD BY WORD. 24 July. F. Saeed. ⚠ One line, and two lorries standing in the yard on the strength of it.**',
  '**The line, in full.** _It is reported that the crossing is closed to commercial traffic until further notice._',
  '**it is reported that** | ⚠ **nothing. No source.** | ⚠ **that it was official**',
  '**the crossing** | ⚠ **one crossing, unnamed** | ⚠ **that it was ours. We use three.**',
  '**closed to commercial traffic** | that something is not passing | ⚠ **that an empty lorry counts as commercial traffic**',
  '**until further notice** | ⚠ **that nobody has given an end date** | ⚠ **that it is indefinite, which is not the same thing**',
  '⚠ **Four groups of words and four assumptions**, and two lorries stood for a day and a half.',
  '⚠ **What the telephone calls produced.** The agent at eight on the 25th: ⚠ **the closure is at one crossing and it is not the one we use**, and empty vehicles are passing at all three.',
  '⚠ **What is in the file: *25 July, telephoned the agent, he named the crossing, says empties passing at all three; he would not say how long.***',
]));
out.push(note('⚠ **The sample finds the same shape in a different sentence and the fourth row is the sharpest**: ⚠ ***until further notice* means nobody has given an end date, which is not the same as indefinite.** **A reader converts the first into the second in the time it takes to read it**, and the conversion costs a day and a half of two lorries.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The line quoted in full', '✓'],
  ['A *what was assumed* column', '✓ four assumptions'],
  ['The assumptions counted', '✓ four'],
  ['The call, with the time and the office', '✓ eight on the 25th, the agent'],
  ['A file note with the date and what the person would not say', '✓ would not say how long'],
], [5, 1]));
out.push(note('⚠ **Band 3 and one move:** the reader to name here is ⚠ **somebody two months later who must decide how much weight a source can carry.** ⚠ **The one question is *how much weight can this line carry in September?*** — and it makes the class write the source and the refusals rather than only the answer.'));
out.push(stage('6R', 'Share'));
out.push(p('*What was assumed* only. ⚠ **Then ask which assumption would have cost most** — ⚠ **and it is nearly always the one about scope**, not the one about certainty: *that it was our grade*, *that it was our crossing*, *that an empty lorry counts.*'));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  'My cousin bought eleven tonnes of cement in 2022 because of one word in a message, and the word was *stopping*.',
  '⚠ **The message in the trade group said that the plant at Tartous was stopping for maintenance in September.** He read *stopping* and bought eleven tonnes in August, at a price he was pleased with for about three weeks.',
  '⚠ **What it said, when I made him find it again, was *stopping one kiln of three for maintenance, two weeks*.** The words *one kiln of three* were in the message. He had read them and not seen them.',
  'The price did not move at all. ⚠ **Eleven tonnes of cement sat under plastic for five months and about a tonne of it was spoiled by the rain in January.**',
  '⚠ **He is not a careless man and he has been in the trade for nineteen years.** ⚠ **He read a message at speed on a telephone, and at speed *stopping* is one word and *one kiln of three* is scenery.**',
  '⚠ **What he does now is read anything that would cost money aloud, to his wife, who knows nothing about cement and asks what the words mean.**'],
));
out.push(note('⚠ **The sample\'s last line is the technique of 23.1 invented independently by somebody who paid for it** — ⚠ **read it aloud to somebody who does not know the trade.** *She asks what the words mean*, which is the same as *read me the sentence again*, and it is worth offering to a class as the practical version.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "his wife, hearing it read aloud"   ✓ _is the line quoted or paraphrased?_ — "quoted, after he was made to find it again"   ? _which word decided it?_ — "*stopping* — and *one kiln of three* was in the message and not seen"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually one word did the deciding in all three texts, ⚠ **and in two of three it was a verb read as a stronger verb** — *stopping* for *stopped*, *suspended* for *closed*, *reviewing* for *cancelling*. **The scope words are present in the original almost every time and are simply not seen at reading speed.**'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **The line: *it is reported that the crossing is closed to commercial traffic until further notice.*** ⚠ **What has happened: one crossing is closed to something.** ⚠ **Who says so: nobody — there is no source in the sentence.** ⚠ **To what: not stated, and we use three crossings and have empty vehicles as well as loaded ones.**']));

// ===================== 23.2 =====================
out.push(pb());
out.push(h2('23.2  Said, claimed, admitted, denied'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Most people will not remember which verb they used, which is the point: **the verb is chosen without being noticed and acted on without being noticed.**'));
out.push(p('**b**  ⚠ **All three take a position except the first.** *Said* reports; ⚠ *claimed* says the writer is not vouching for it; ⚠ *admitted* says it was against his interest and was extracted.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **That the writer does not believe him — without saying so and without being answerable for it.**  2 ⚠ **Two things: that the fact is against the speaker\'s interest, and that somebody had to get it out of him** — ⚠ **and he volunteered the fortnight, so *admitted* is simply wrong.**'));
out.push(note('⚠ The argument that lands with a class is the one about cost: ⚠ **a reader who sees *claimed* telephones the source himself** — ⚠ *which says, in writing, in a file, that we did not believe our own source.* **The verb produces work and the work is visible to the person you doubted.**'));
out.push(p('**Language box – Practise (samples):**  1 **he volunteered a fortnight** → ⚠ *said, unprompted* — **never *admitted*.**  2 **against his own company, after four questions** → ⚠ *admitted, after four questions* — **and say that it took four.**  3 **he would say nothing** → ⚠ *declined to comment*, which is a fact; **not *would not say*, which is a verdict.**  4 **the opposite of a written circular** → ⚠ *claimed, though the circular of the 4th says otherwise* — **and the reason is in the same sentence.**  5 **answered an accusation nobody made** → ⚠ **not *denied*** — *said, without being asked, that…*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'I have written *he admitted that it was only a fortnight*.'],
  ['B', '⚠ Did he volunteer it or was it got out of him?'],
  ['A', 'He volunteered it. I had not asked.'],
  ['B', '⚠ **Then *admitted* is wrong twice over**, because it also says a fortnight is against his interest.'],
  ['A', 'Is it not? He wants us to think it is short.'],
  ['B', '⚠ **Then *a fortnight* is in his interest, which makes *admitted* the opposite of what happened.**'],
  ['A', 'So *said*.'],
  ['B', '⚠ ***He said about a fortnight, without being asked* — and the *without being asked* is the evidence.**'],
]));
out.push(note('⚠ **Role card 2 catches both halves of *admitted* at once** — extracted, and against interest — ⚠ **and shows that a learner can get it wrong in two directions in one word.** The useful substitute is *said, without being asked*, **where the four extra words do the whole job honestly.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence with all four verbs and what each would make a reader do. **Typical errors:** *denied* where nobody accused · *admitted* for something volunteered · and *claimed* with no reason attached. ⚠ **Every *claimed* must be finishable as *claimed, though …***'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What was said', 'Who said it', 'The verb', 'Why that verb'], [
  ['the suspension is on two grades', 'the Hama sales office', '⚠ **said**', '⚠ **I believe him and I have no reason to signal otherwise**'],
  ['the delivery left on Tuesday', 'the supplier\'s clerk', '⚠ **claimed**', '⚠ **the gate sheet shows it arriving on Friday — and the reason goes in the sentence**'],
  ['the labels were cut by hand', 'the night man', '⚠ **said, unprompted**', 'he raised it himself before anybody asked'],
  ['the invoice was never received', 'the customer', '**said**', '⚠ **no evidence either way; *claimed* would be me taking a side I cannot defend**'],
  ['nothing about the grades', 'the second merchant', '**declined to comment**', 'a fact, not a verdict'],
], [1.9, 1.1, 1, 2.1]));
out.push(note('⚠ **The fourth row is the one to dwell on**: ⚠ **with no evidence either way, *claimed* is the writer taking a side they cannot defend.** *Said* is not weakness; **it is the only honest verb available when you do not know**, and it leaves the reader free.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The supplier\'s clerk claimed the delivery left on Tuesday, though the gate sheet shows it arriving on Friday. I have used *claimed* because there is a document against it, and the document is in the same sentence."', '⚠ **Then find any *admitted* in the room where the speaker volunteered the information.** ⚠ **There is nearly always one**, and it is usually about somebody the writer dislikes.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Only the first is true**; the other three ⚠ **are not lies, they are positions**, and each sends the next reader off to do something different.  2 ⚠ **A fortnight of somebody\'s time looking for a second mill, and it would have told Hama we were shopping.**  3 ⚠ **In its own sentence beside the report** — *he would not give his name* — ⚠ **where *claimed* would have put the same doubt inside the report and made it unusable.**'));
out.push(note('⚠ **The test to take away is *what does a reader do with it?*** ⚠ *Nothing further · telephones Hama himself · starts looking for a second mill · a different fact altogether.* **A reporting verb is an instruction to the next reader**, and that is the only basis on which to choose one.'));
out.push(stage('6', 'Write with help – sample (121 words)'));
out.push(sample(null, [
  '**THE SAME CONVERSATION, WRITTEN FOUR WAYS. 25 July. L. Barakat. ⚠ One doorstep conversation of four minutes.**',
  '**1** The driver **said** he had been at the gate at seven and nobody came down. | ⚠ **nothing further. We look at why nobody came down.**',
  '**2** The driver **claimed** he had been at the gate at seven. | ⚠ **somebody checks the gate book, and the driver knows we checked**',
  '**3** The driver **admitted** he had been at the gate at seven. | ⚠ **reads as though being there at seven were a fault — the opposite of the facts**',
  '**4** The driver **declined to comment** on what time he arrived. | ⚠ **a disciplinary matter, out of a four-minute conversation in which he answered everything**',
  '⚠ **the conversation itself** | ⚠ **he answered at once, gave the time without being asked, and said he had not telephoned because his telephone was out of credit**',
  '⚠ **Only the first is true and the other three are positions.** ⚠ **Sentence 3 would have been read as an admission of lateness when he was early**, and sentence 4 would have started something that did not exist.',
  '⚠ **The one reservation belongs in its own sentence: *he has been late twice this month, on the 9th and the 17th.*** ⚠ **A fact beside the report, not a doubt inside the verb.**',
]));
out.push(note('⚠ **The sample\'s third row is the most instructive**: ⚠ ***admitted* reads as though being at the gate at seven were a fault, when he was early.*** **A wrong reporting verb can invert the facts entirely**, and it does so without any false statement in the sentence.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['All four versions written out', '✓'],
  ['Each judged by what a reader does', '✓'],
  ['Which one is true, said plainly', '✓ only the first'],
  ['What the wrong verb would have cost', '✓ a disciplinary matter that did not exist'],
  ['The reservation in its own sentence', '✓ late twice, with the dates'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('Sentence 3 only. ⚠ **Ask what it would send the reader off to do** — and the class will see that the three wrong verbs produce three different pieces of unnecessary work, ⚠ **all of them visible to the person who was reported.**'));
out.push(stage('7', 'Write freely – sample (170 words)'));
out.push(sample(null, [
  'The word that cost my old employer a supplier of nine years was *claimed*, in a letter nobody thought twice about.',
  'A consignment was short by four cases. ⚠ **The supplier\'s manager telephoned the same morning, said the four cases had been loaded, and offered to come and look at the pallet himself.**',
  '⚠ **The letter our office sent back said: *you claim that the four cases were loaded.*** Two words.',
  '⚠ **He telephoned about the letter and not about the cases.** He said he had been in the trade thirty-one years and had never been written to in that way, and that if we wanted the pallet looked at we could look at it ourselves.',
  'The four cases were found, eleven days later, behind a pallet of something else in our own store. ⚠ **He had been right and he had offered to help on the first morning.**',
  '⚠ **He still supplies the shop next door and he has not quoted us since 2021.**',
  '⚠ **Nobody in the office remembers choosing the word.** ⚠ **It was in a form of words somebody had copied from an older letter**, which is how most reporting verbs are chosen.'],
));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the supplier, reading the letter at his desk"   ✓ _does every *claimed* carry a reason?_ — "none at all; there was evidence the other way"   ? _did anybody choose the word?_ — "no — it was copied from an older letter"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the verb was chosen by accident in all three texts, ⚠ **and in two of three it was copied from a form of words somebody else had used.** **That is the real mechanism** — not malice and not judgement, **but a template**, which is why the four-way exercise in 6 is worth doing once properly.'));
out.push(stage('HW', 'Homework – sample (≈60 words)'));
out.push(sample(null, ['Five sentences from the trade sheet of 20 July. ⚠ **Two *it is understood*, one *sources say*, one *is believed*, and one *the circular states*.** ⚠ **Only the last has a position the writer can be held to.** ⚠ **The other four leave the writer free and leave the reader to supply the certainty**, which the reader always does.']));

// ===================== 23.3 =====================
out.push(pb());
out.push(h2('23.3  It is understood that'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect *I do not know* about half the time, which is the finding: **the phrase survives in internal documents precisely because nobody can answer the question.**'));
out.push(p('**b**  ⚠ **The second**: *the plater\'s letter of 22 January says prices will rise* — **a document, a date, and an actor.** **The first has none of the three.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Protecting a source who would be dismissed; one source the writer cannot verify; and something heard in a yard.**  2 ⚠ **Only the first** — ⚠ **and only if the writer says that is what they are doing.**'));
out.push(note('⚠ The sentence to put on the board is ⚠ **the phrase reads like a consensus and means a man on a telephone.** **That is the whole of the cycle**, and the second half of Mr Attar\'s answer is the rule: ⚠ **in an internal note, never — because the one honest reason for the phrase is exactly what a file exists to record.**'));
out.push(p('⚠ And the honest version is twelve words: ⚠ ***a man who would be dismissed for telling me this says…*** **The reader then knows the source is real and protected and can weigh the whole thing**, which the impersonal passive never allows.'));
out.push(p('**Language box – Practise (samples):**  1 *the plater\'s circular of 22 January says prices will rise from 1 March.*  2 *the freight agent told me on 24 July that one crossing is closed.*  3 ⚠ *Ms Shamsi\'s clerk telephoned on the 9th to say the order is cancelled.*  4 *Fadi says the lorry did not arrive; the gate book has no entry for Tuesday.*  5 ⚠ *a man who would be dismissed for telling me this says the plant is for sale* — **where the source must be protected, say so.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your note says *we have been told the order is cancelled*. ⚠ By whom, and when?'],
  ['A', 'Ms Shamsi\'s clerk. On the 9th, on the telephone.'],
  ['B', '⚠ Then write that. How many words did it cost?'],
  ['A', '…Eight.'],
  ['B', '⚠ And what did the old version cost?'],
  ['A', 'Five.'],
  ['B', '⚠ **Three words, and a reader in October knows whose clerk and which day.**'],
]));
out.push(note('⚠ **Role card 2 makes the price explicit and the price is the argument**: ⚠ **between three and twelve words** to replace an impersonal passive with a source and a date. **A class that has counted the words once stops treating it as a style preference.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence with its source and date and count the words it cost. **Typical errors:** a source with no date · and the content error, which is leaving *it is understood* in an internal note because the trade paper uses it. ⚠ **A newspaper protects sources and a file records them.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence as it stands', 'By whom', 'When', 'The sentence rewritten'], [
  ['it is understood that the suspension is on two grades', 'the Hama sales office', '21 July', '⚠ **the Hama sales office told me on 21 July that the suspension is on two grades**'],
  ['we have been told the order is cancelled', 'Ms Shamsi\'s clerk', '9 July', 'Ms Shamsi\'s clerk telephoned on 9 July to cancel the order'],
  ['it seems the lorry did not arrive', '⚠ **Fadi, and the gate book**', 'Tuesday', '⚠ **Fadi says the lorry did not arrive; the gate book has no entry for Tuesday**'],
  ['prices are expected to rise', '⚠ **nobody. The trade sheet.**', '20 July', '⚠ **the trade sheet of 20 July says prices are expected to rise; it gives no source**'],
], [1.8, 1.2, 0.8, 2.4]));
out.push(note('⚠ **The fourth row is the honest one and the hardest to write**: ⚠ *it gives no source.* **Where the source is that there is no source, say so** — and the sentence is then usable, because a reader knows exactly what weight to put on it.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The sentence said *it seems the lorry did not arrive*. The source was Fadi, and the gate book, on Tuesday. Rewritten it reads *Fadi says the lorry did not arrive; the gate book has no entry for Tuesday* — and it cost nine words."', '⚠ **Then find any sentence whose source nobody can now name at all.** ⚠ **There is usually one, and it is usually in something that goes outside the company.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One of four** — the plater\'s circular of 22 January.  2 ⚠ **That the trade read the sheet**: *two of the three people we telephoned said they had read it in this sheet*, ⚠ **so the sheet is quoting a belief it created the week before.**  3 ⚠ **The plural.** ⚠ ***Sources say* turned three men in a yard into a plural noun**, and the plural carries all the authority of the sentence.'));
out.push(note('⚠ **The second finding is the one worth a whole lesson if the class is interested**: a trade paper reporting a trade belief ⚠ **is often reporting its own last issue.** **Finding one instance of it changes how a reader reads for years**, and the method is simply to ask each contact where they heard it.'));
out.push(p('⚠ And the physical check is the cheapest verification in the book: ⚠ *the works has no roof — we drove past it on 2 July.* **One observation with a date outweighs any number of attributions**, and it usually costs a detour.'));
out.push(stage('6', 'Write with help – sample (119 words)'));
out.push(sample(null, [
  '**WHAT THE FIVE LINES OF THE JULY CIRCULAR HAD IN THEM. 27 July. B. Nassif. ⚠ Five lines, and one document.**',
  'the mill at Hama has suspended deliveries | ⚠ **it is understood that** | ⚠ **two grades, not ours — the sales office, named department, no name**',
  'cement is short in the south | ⚠ **it is believed** | ⚠ **three merchants telephoned; all three said they had heard it from each other**',
  'a new carton works is opening in Adra | ⚠ **sources close to the project** | ⚠ **the project is a planning application. There is no building.**',
  'the plater has given notice of twelve per cent | **his circular of 22 January** | ⚠ **true. A document, and an invoice at the new rate.**',
  'lorry hire is up a third | ⚠ **hauliers say** | ⚠ **one haulier, who is quoting us next week**',
  '⚠ **One line of five carried a document.** ⚠ **The second line is three merchants who are one source**, and the fifth is a man with an interest in the figure he is giving.',
  '⚠ **And the third is a planning application with a grammar on it**: *sources close to the project* **makes a building out of a form.**',
]));
out.push(note('⚠ **The sample\'s fifth row adds something the model does not have and it is worth promoting to the class**: ⚠ **the source with an interest.** *One haulier, who is quoting us next week.* **A source who benefits from the belief is not a source**, and the detail goes in the attribution column where a reader will see it.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The attribution in its own column, in the writer\'s words', '✓ all five'],
  ['The lines with a document, counted', '✓ one of five'],
  ['A belief traced back to its own circulation', '✓ the three merchants'],
  ['A plural taken apart', '✓ *hauliers say* is one haulier'],
  ['One thing checked physically, with a date', '⚠ **✗ — the Adra building is checked on paper, not visited**'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The line with a document only. ⚠ **Ask what the document is and how old** — ⚠ **and expect one in three to be more than six months old**, which is a different kind of problem: *confirmed, and out of date*, which belongs under *not known* until it is re-checked.'));
out.push(stage('7', 'Write freely – sample (172 words)'));
out.push(sample(null, [
  'For six weeks in 2024 everybody in our trade knew that the Jaramana works had been sold, and nobody had been told it by anybody who had anything to do with it.',
  '⚠ **I can name the four people I heard it from and all four heard it from the same man**, who sells us polythene and had heard it from a driver.',
  '⚠ **Two customers asked me about it. One of them changed a price because of it.**',
  'What happened was that the owner had taken his son into the business and the son had changed the name over the door. ⚠ **The works was never for sale and never sold.**',
  '⚠ **The name over the door is the whole of it**, and the driver who saw the new sign is not a liar and never claimed anything.',
  '⚠ **What it cost: one customer\'s price, six weeks of being asked about it, and about four telephone calls of mine.** ⚠ **What would have settled it: telephoning the works, which I did on the 4th of July and which took three minutes.**',
  '⚠ **Nobody had telephoned them in six weeks, because everybody had heard it from somebody who had heard it from somebody.**'],
));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "the owner\'s son, who changed the sign"   ✓ _is there a document anywhere?_ — "none; the whole thing is a sign over a door"   ? _how many sources are the same person?_ — "four, all from one polythene salesman"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the sources turn out to be one person in two of three texts, ⚠ **and in one of three that person had read it in the same paper.** **The sample has the purest version** — four people, one salesman, one driver, one sign — **and three minutes on the telephone would have ended it at any point in six weeks.**'));
out.push(stage('HW', 'Homework – sample (≈63 words)'));
out.push(sample(null, ['Four lines and their attributions. ⚠ ***It is understood* (no source) · *it is believed* (three merchants who heard it from each other) · *sources close to the project* (a planning application) · and *his circular of 22 January* (a document).*** ⚠ **One of four carries a document**, and it is the only line we have spent money on.']));

// ===================== 23.4 =====================
out.push(pb());
out.push(h2('23.4  Three sentences'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the third sentence to be missing from every first attempt, and say so cheerfully: **it is missing from almost everything anybody writes at work.**'));
out.push(p('**b**  ⚠ **The third: what is not known** — *it is not known whether the fortnight runs from the 21st or from the start of the suspension.*'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The reader thinks everything else is known, telephones nobody, and in a fortnight is surprised by something that was never in the note at all.**  2 ⚠ **That it is the only part that tells anybody to do anything**: *the first two sentences close the subject and the third opens it.*'));
out.push(note('⚠ Lina\'s observation is the structural insight of the cycle and it explains the order: ⚠ **put *what is not known* first and it reads as a note from somebody who knows nothing; put it last and it reads as a list of work.** **Same words, two documents.**'));
out.push(p('⚠ And the shape is worth stating as a proportion: ⚠ **one line of fact, one line of source, and a paragraph of what is not known.** **The third sentence is usually longer than the other two together**, and a class that expects that will stop apologising for it.'));
out.push(p('**Language box – Practise (samples):**  1 **a price rise** — *the plater has given notice of twelve per cent from 1 March. His circular of 22 January, in the file. It is not known whether it applies to the export grade, whether it is negotiable at volume, or whether the March invoices are already at the new rate.*  2 **a late delivery** — ⚠ *the Tuesday load did not arrive. Fadi, and the gate book has no entry. It is not known whether it left at all, whether the driver telephoned anybody, or whether the customer has been told.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have two sentences. Here is the third I would write — now count the words.'],
  ['A', 'Twenty-two, twenty-seven and fifty-six.'],
  ['B', '⚠ So the third is longer than the other two together.'],
  ['A', 'It looks as though I know nothing.'],
  ['B', '⚠ **It looks as though you know where the edges are**, which is different. ⚠ **How many telephone calls is it?**'],
  ['A', '…Four.'],
  ['B', '⚠ **Then it is not a confession, it is Monday morning.**'],
]));
out.push(note('⚠ **Role card 2 ends on the line to give a class**: ⚠ **it is not a confession, it is Monday morning.** **The third sentence is a work list**, and counting the calls in it converts it from an admission of ignorance into the most useful part of the note.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three sentences, count the words and count the calls. **Typical errors:** no third sentence · the third sentence put first · and the content error, which is writing the third sentence as an apology. ⚠ **No *unfortunately* and no *I am afraid*** — *it is not known whether* is the whole of it.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['1 What', '2 Who says so, and when', '3 What is not known'], [
  ['the suspension is on two grades, not ours', '⚠ **the Hama sales office, 21 July, no name**', '⚠ **whether the fortnight runs from the 21st · whether the rebuild has a date · whether a heavy brown shortage pulls our grade forward**'],
  ['the Tuesday load did not arrive', 'Fadi; the gate book has no entry', 'whether it left · whether the driver telephoned · whether the customer has been told'],
  ['Ms Shamsi has cancelled', 'her clerk, 9 July, by telephone', '⚠ **whether it is the whole order or the second half · whether she has gone elsewhere · whether the goods are already made**'],
], [1.6, 1.9, 2.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Ms Shamsi has cancelled. Her clerk telephoned on 9 July. It is not known whether it is the whole order or the second half, whether she has gone elsewhere, or whether the goods are already made — and the third one is the one that costs us, because they are."', '⚠ **Then count the calls in each third sentence.** ⚠ **Three is the usual number**, and the class sees that a week\'s work has just been written in one sentence.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **Note A is thirteen words and would have cost forty million; Note B is a hundred and five words and cost twenty minutes on the telephone.**  2 ⚠ **Four calls, and two were made on the 25th** — the fortnight runs from the 18th, and the rebuild has no completion date.  3 ⚠ **Because in September the question will not be *what did we know* but *when did we know it*** — ⚠ **and a file with only the final note in it cannot answer that at all.**'));
out.push(note('⚠ **The first answer is the only argument about note-writing that has ever persuaded anybody**: ⚠ **thirteen words against forty million, and a hundred and five words against twenty minutes.** **Put both figures on the board and the rest of the unit teaches itself.**'));
out.push(stage('6', 'Write with help – sample (126 words)'));
out.push(sample(null, [
  '**THE SAME INFORMATION, WITH AND WITHOUT THE THIRD SENTENCE. 28 July. L. Barakat.**',
  '**Note A, as it was first written.** _Ms Shamsi has cancelled. We should stop the job._',
  '**Note B, written after two calls.**',
  '**1 what** | Ms Shamsi has cancelled the second half of the April order, four hundred of the eight hundred. | 18',
  '**2 who says so** | ⚠ **Her clerk, by telephone on 9 July. He gave the figure without being asked. He would not say why and said Ms Shamsi would write.** | ⚠ **29**',
  '⚠ **3 what is not known** | ⚠ **Whether the written confirmation has been sent. Whether the four hundred are already printed — they are, which is the one that costs us. Whether she has ordered elsewhere. Whether the April price still stands on the first four hundred. And whether the clerk was authorised to cancel at all.** | ⚠ **59**',
  '⚠ **Note A is ten words and would have stopped a job that was half finished.** ⚠ **Note B is a hundred and six words and cost two telephone calls**, and the third sentence is more than half of it.',
  '⚠ **Five things are not known and two were answered on the 10th.** ⚠ **Both notes are in the file, with their dates.**',
]));
out.push(note('⚠ **The sample\'s fifth unknown is the best thing in it**: ⚠ ***whether the clerk was authorised to cancel at all.*** **Nobody thinks of that one**, and it is the question that would have changed the whole handling — which is what a numbered list of unknowns is for.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Three sentences, in the right order', '✓'],
  ['Word counts printed', '✓ 18 · 29 · 59'],
  ['What each version cost', '✓ a half-finished job against two calls'],
  ['The unknowns numbered, with which are answered', '✓ five, two answered'],
  ['The unknown that would cost most, marked', '✓ the four hundred already printed'],
  ['The earlier note kept, with its date', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The third sentence only, ⚠ **and count the telephone calls in it.** ⚠ **Three or four is normal**, and the useful follow-up is: *which of them would you make first, and why?* — **which is the ranking the model asks for.**'));
out.push(stage('7', 'Write freely – sample (171 words)'));
out.push(sample(null, [
  '**THE SOUTHERN ORDER — WHAT IS KNOWN, 29 July. B. Nassif.**',
  '⚠ **What.** The customer in Deraa has not paid the invoice of 2 June, which is 1,340,000, and has taken two further deliveries since.',
  '⚠ **Who says so.** Our own ledger, and Nadia, who telephoned the office twice in July. ⚠ **The second time she was told the cheque was signed; it has not arrived. She was not given a cheque number.**',
  '⚠ **What is not known.** Whether the cheque exists. Whether the man she spoke to is the man who signs. ⚠ **Whether the two later deliveries were authorised by anybody here, which is the one that costs us, because if they were not then somebody has been taking orders without checking the ledger and the exposure is three invoices and not one.** Whether anybody else in the trade is unpaid by him. And whether he has told us anything in writing at all since June.',
  '⚠ **Five things, five telephone calls, and the third one is internal.** ⚠ **I would make that one first, because it is the only one that does not depend on him answering.**'],
));
out.push(note('⚠ **The sample\'s last line is the ranking rule discovered from the inside**: ⚠ **make the call that does not depend on the other side answering.** **Three of the five calls here cannot be made without the debtor\'s co-operation and one can be made in the next room** — and it is the one that reveals the real size of the problem.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Mr Ayoub, deciding whether to deliver again"   ✓ _is the third sentence the longest?_ — "much the longest, and it has the exposure in it"   ? _which unknown costs most?_ — "whether the later deliveries were authorised — marked"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the third sentence is the longest in two of three texts, ⚠ **and in the third it is written as an apology** — *unfortunately we do not yet know* — **which is the form to correct.** *It is not known whether* **is a neutral list and needs no softening at all.**'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **What.** The Thursday van came back with two drops undone. ⚠ **Who says so.** Fadi, on the day; the notes are unsigned in the folder. ⚠ **What is not known.** Whether the customers were told. ⚠ **Whether the goods are still on the van, which is the one that costs us.** Whether anybody has invoiced them. And whether the same two drops failed last Thursday.']));

// ===================== 23.5 =====================
out.push(pb());
out.push(h2('23.5  Confirmed, claimed, not known'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Expect the three to be graded wrongly and let them be: **the grading is corrected by the definitions, not by argument.**'));
out.push(p('**b**  ⚠ **Confirmed: the plater\'s circular of 22 January** (a document). ⚠ **Claimed: a man in a yard on the Homs works.** ⚠ **Not known: whether the border will be open on Monday.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **A document you could put in front of somebody, or two independent people who have not read each other.**  2 ⚠ **The reader acts on all three equally** — which is to say, acts on the weakest of them as though it were the strongest.'));
out.push(note('⚠ The definition of *confirmed* has a second half that the class will skip: ⚠ **two people who have *not read each other*.** **Two merchants who read the same trade sheet are one source** — and that one clause is what catches the commonest false confirmation in any trade.'));
out.push(p('⚠ And the rule about promotion is the one that protects a file over years: ⚠ **when a grade changes, write when it moved and why.** ⚠ **A grade that moves silently is how a yard story becomes a fact in about six weeks**, and *nobody can trace it, because the sentence that promoted it was never written.*'));
out.push(p('**Language box – Practise (samples):**  1 **a circular** — ⚠ **confirmed.**  2 **one man on a telephone** — **claimed.**  3 **two people who both read the same paper** — ⚠ **claimed, and say why: one source, not two.**  4 **something you saw yourself** — ⚠ **confirmed, with the date you saw it.**  5 **something nobody has mentioned for a month** — ⚠ **not known, and worth saying so: silence is not agreement.**'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'You have moved the Homs reopening from *not known* to *claimed*. ⚠ When did it move, and what moved it?'],
  ['A', 'Two more people mentioned it this month.'],
  ['B', '⚠ Where did they hear it?'],
  ['A', '…One of them from the polythene man. The other I did not ask.'],
  ['B', '⚠ **Then nothing has moved except the number of people saying it.**'],
  ['A', 'That is something.'],
  ['B', '⚠ **It is the one thing it is not.** ⚠ **A story repeated is still one story, and the repetition is what makes it feel confirmed.**'],
]));
out.push(note('⚠ **Role card 2 names the mechanism of every false promotion**: ⚠ **repetition feels like corroboration.** **A story repeated is still one story** — and the only defence is the question *where did you hear it?*, asked of each person, which takes about a minute each.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three headings with their items. **Typical errors:** two grades in one paragraph · *denied* where nobody accused · and the content error, which is grading by how plausible something is rather than by what is behind it. ⚠ **Plausibility is not a grade.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The thing', 'Grade', 'The source', 'What would promote it'], [
  ['the plater\'s twelve per cent', '⚠ **confirmed**', 'circular + invoice at the new rate', '—'],
  ['the Hama suspension, two grades', 'claimed', 'one man, no name, twice', '⚠ **a second person at Hama who has not spoken to him**'],
  ['the autumn board rise', 'claimed', '⚠ **the trade sheet; two contacts read it there**', 'a merchant\'s own quotation above the June list'],
  ['the Homs reopening', 'not known', '⚠ **no roof on 2 July**', 'a roof, or a planning notice'],
  ['the heavy brown pulling our grade', '⚠ **not known**', '⚠ **no source at all — the costly one**', 'one call to Hama and one to a merchant'],
  ['lorry hire up a third', 'claimed', '⚠ **one haulier, who quotes us next week**', 'two quotations from hauliers with no interest'],
], [1.9, 0.9, 1.6, 1.9]));
out.push(note('⚠ **The *what would promote it* column is where the work is**, and it should be read aloud: ⚠ **a second person at Hama who has not spoken to him · a merchant\'s own quotation · a roof · two quotations from hauliers with no interest.** **Each one is a specific act, and that is what distinguishes this column from a wish.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The autumn rise is claimed, because the source is the trade sheet and two of the three contacts had read it there. It would become confirmed if a merchant quoted us above the June list in writing."', '⚠ **Then find any item promoted with no reason written.** ⚠ **There is usually one in every file older than a year**, and nobody can say when it moved.']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **One of six** — and *confirmed* cost ⚠ **a document and an independent confirmation**: the circular of 22 January and the invoice of 4 March at the new rate.  2 ⚠ **Because it looked like three sources until Thursday**: two of the three contacts had read it in the same sheet, ⚠ **so it is one source, and the note says so in the source column rather than leaving the reader to work it out.**  3 ⚠ **Whether a heavy brown shortage will pull our grade forward** — ⚠ **and nobody has asked because it is the only question on the page that requires somebody to admit they do not know something.**'));
out.push(note('⚠ **The third answer is the most human line in the unit and it explains a great deal of what is missing from files everywhere**: ⚠ **the unasked question is the one whose answer would be *I do not know*.** **It is first on the list for Monday**, and naming why it was not asked is what gets it asked.'));
out.push(stage('6', 'Write with help – sample (123 words)'));
out.push(sample(null, [
  '**THE FLOUR POSITION, GRADED. 30 July. H. Mourad. ⚠ Six items. One confirmed, two claimed, three not known.**',
  '⚠ **CONFIRMED** | The mill price is up 9 per cent from 1 August. | ⚠ **their letter of 18 July, and the August delivery note at the new rate**',
  '**CLAIMED** | The second mill will hold its price to September. | ⚠ **their driver, 22 July. He is not in sales and was not asked.**',
  '**CLAIMED** | Bread flour will be short after the harvest. | ⚠ **three bakers. All three had it from the same wholesaler, so one source and not three.**',
  '**NOT KNOWN** | ⚠ **Whether our own contract price is protected until September.** | ⚠ **nobody has read the contract. This is the item that would cost us and it is in the drawer.**',
  '**NOT KNOWN** | Whether the second mill will deliver to us at all. | they have never quoted us',
  '**NOT KNOWN** | Whether the shortage talk has moved any prices yet. | two calls to make',
  '⚠ **One item of six is confirmed and it is the only one we have changed a price for.** ⚠ **And the costly unknown is the only one that needs no telephone call at all: it is in the drawer and it would take ten minutes.**',
]));
out.push(note('⚠ **The sample\'s costly unknown is better than the model\'s because it is free to answer**: ⚠ *nobody has read the contract; it is in the drawer and it would take ten minutes.* **The class should be asked how many of their own *not known* items are in a drawer** — **it is usually at least one, and it is always the one that matters.**'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The counts in the heading', '✓ 1 · 2 · 3'],
  ['Source and date in the same cell', '✓'],
  ['Apparent multiple sources collapsed into one', '✓ the three bakers'],
  ['The costly item marked, even under *not known*', '✓ the contract'],
  ['Evidence against distinguished from a denial', '⚠ **n/a — there is no evidence against anything here**'],
  ['No paragraph with two grades in it', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *confirmed* items only. ⚠ **Ask what document is behind each and how old it is** — ⚠ **and expect at least one to be more than six months old.** **A confirmed item on an old document is *confirmed as at its date***, and it belongs back under *not known* until somebody re-checks it.'));
out.push(stage('7', 'Write freely – sample (174 words)'));
out.push(sample(null, [
  '**THE BOARD POSITION, GRADED. 26 July. N. Mansour. ⚠ Six items. One confirmed, two claimed, three not known.**',
  '⚠ **CONFIRMED.** The plater has given notice of twelve per cent from 1 March. ⚠ **His circular of 22 January is in the file, and the invoice of 4 March is at the new rate** — a document and an independent confirmation.',
  '**CLAIMED.** The Hama suspension is on the heavy brown and one other grade, not ours, for about a fortnight from the 18th. ⚠ **A man in the Hama sales office, 21 and 25 July, who would not give his name and volunteered the fortnight.**',
  '**CLAIMED.** Board prices are expected to rise in the autumn. ⚠ **The trade sheet of 20 July. Two of three contacts had read it in the same sheet, so this is one source and not three.**',
  '⚠ **NOT KNOWN.** Whether a heavy brown shortage will pull our grade forward. ⚠ **No source. Two calls not returned. This is the item that would cost us, and it is the one nobody has asked.**',
  '**NOT KNOWN.** Whether the Homs works will reopen. ⚠ **It had no roof on 2 July, which is evidence against and not a denial.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Mr Attar in September, deciding what we knew"   ✓ _confirmed on two sources that read each other?_ — "no; a circular and an invoice"   ? _which item costs most?_ — "the heavy brown pull-forward, marked, no source"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually only one item of six or more is confirmed in all three texts, ⚠ **and in two of three the thing everybody at that workplace treats as certain turns out to be in the claimed column.** **Ask which item the workplace argues from most often** — it is almost never the confirmed one.'));
out.push(stage('HW', 'Homework – sample (≈64 words)'));
out.push(sample(null, ['Six things, graded. ⚠ **One confirmed (the mill letter and the delivery note).** ⚠ **Two claimed, and for each what would promote it: a second person at the mill who has not spoken to the first; a written quotation above the June list.** ⚠ **Three not known, and the costly one is in the drawer** — *nobody has read our own contract.*']));

// ===================== 23.6 =====================
out.push(pb());
out.push(h2('23.6  The short market note'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ One sentence only, and hold the class to one: **the discipline of the whole cycle is length.**'));
out.push(p('**b**  ⚠ **All four belong** — *what has changed*, *who says so*, *what you have not found out*, and ⚠ **what you think, provided it is at the bottom with your name on it.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **The date and the one line that has changed since the last note.**  2 ⚠ **At the bottom, under its own heading, with the writer\'s name against it, and never mixed into the graded table.**'));
out.push(note('⚠ The reason for one page is commercial and not aesthetic: ⚠ **the value of a market note is entirely in its being read twelve times.** **A two-page note is read once, in the first month** — and a note read once is worse than none, because it establishes a belief nobody updates.'));
out.push(p('⚠ And the four lines of opinion end with the line that makes the rest worth reading: ⚠ **the one thing that would change my mind.** ⚠ **Anybody can give an opinion; almost nobody will say in advance what would overturn it** — *and when it happens you have a note that tells you to change, in your own handwriting.*'));
out.push(p('**Language box – Practise (samples):**  **Top line:** *Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.*  **Bottom four:** ⚠ *I would buy nothing forward. I would not reopen the Tannous price before the autumn. The one thing that would change my mind: Hama quoting a second fortnight, or any quotation for our grade more than five per cent above the June list. Fadi sees every quotation at the gate and has been asked to tell me.*'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The one thing that would change my mind is if things get worse.'],
  ['B', '⚠ Worse how? Who would see it?'],
  ['A', 'The market. Everybody would see it.'],
  ['B', '⚠ **Then nobody will.** ⚠ **Give me a figure and a place.**'],
  ['A', '…Any quotation for our grade more than five per cent above the June list.'],
  ['B', '⚠ And where does a quotation arrive?'],
  ['A', 'At the gate, with the drivers. ⚠ **Fadi sees all of them.**'],
  ['B', '⚠ **Then tell Fadi, and write the date you told him.**'],
]));
out.push(note('⚠ **Role card 2 is the most portable thing in the cycle**: ⚠ **a figure and a place, and then a person.** ⚠ *If things get worse* **is watched for by nobody**; *five per cent above the June list, at the gate, by Fadi* **is a control** — and the last step, telling him, is the one everybody omits.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the top line and the four bottom lines. **Typical errors:** an opinion inside the graded table · *if things get worse* · and the content error, which is an overturning condition the writer alone could observe and will not be present to see.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['', 'What I have put there'], [
  ['The date, and what has changed', '⚠ **Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.**'],
  ['Confirmed', 'one: the plater\'s twelve per cent'],
  ['Claimed', 'two: the Hama suspension; the autumn rise'],
  ['Not known', '⚠ **three, and the costly one is the heavy brown pull-forward**'],
  ['⚠ **What I would do**', '⚠ **buy nothing forward**'],
  ['⚠ **What I would not do**', '⚠ **reopen the Tannous price before the autumn**'],
  ['⚠ **What would change my mind**', '⚠ **a second fortnight from Hama, or any quotation for our grade more than five per cent above the June list — Fadi watches the gate**'],
], [2.6, 3.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Since 26 June: the Hama suspension, and the twelve per cent now in an invoice. I would buy nothing forward, I would not reopen the Tannous price before the autumn, and the one thing that would change my mind is any quotation for our grade more than five per cent above the June list — which Fadi sees at the gate."', '⚠ **Then ask who would notice each condition and whether they know they are supposed to.** ⚠ **Usually one in three has been told.**']));
out.push(stage('5', 'Read'));
out.push(p('1 ⚠ **The Hama suspension, and the twelve per cent now in an invoice as well as a circular.**  2 ⚠ **Hama quoting a second fortnight, or any quotation for our grade more than five per cent above the June list** — ⚠ **and Fadi, who sees every quotation at the gate and has been asked to tell her.**  3 ⚠ **Because an overturning condition that nobody is watching for is a sentence and not a control.**'));
out.push(note('⚠ **The note is eighty-one words of opinion against a table of five items**, and the proportions are worth pointing at. ⚠ **The last line is the only one that asks anybody else to do anything** — and it names the person, the place and the figure, which is what makes it an instruction rather than a hope.'));
out.push(stage('6', 'Write with help – sample (128 words)'));
out.push(sample(null, [
  '**FLOUR AND BREAD — MARKET NOTE. 30 July. H. Mourad. One page. ⚠ Since 28 June: the mill\'s 9 per cent, now in a delivery note as well as a letter; and the shortage talk, which is one wholesaler.**',
  '⚠ **CONFIRMED** | mill price up 9 per cent from 1 August | ⚠ **their letter of 18 July; August delivery note at the new rate**',
  '**CLAIMED** | the second mill holding price to September | ⚠ **their driver, 22 July, not in sales, not asked**',
  '**CLAIMED** | bread flour short after the harvest | ⚠ **three bakers, all from one wholesaler. One source.**',
  '**NOT KNOWN** | ⚠ **whether our contract price is protected to September** | ⚠ **nobody has read the contract. In the drawer. Ten minutes.**',
  '**WHAT I WOULD DO. H. Mourad.**',
  '⚠ **I would read the contract before Monday** and change nothing until I have.',
  '⚠ **I would not put the bread up in August.** The 9 per cent on flour is about 2 per cent on a loaf and the Friday customers count in loaves.',
  '⚠ **The one thing that would change my mind: a second mill quoting above the August list, or the wholesaler putting a figure in writing.** ⚠ **Nadia opens the post and has been asked to show me any price list.**',
]));
out.push(note('⚠ **The sample\'s first line of opinion is the best kind**: ⚠ *I would read the contract before Monday and change nothing until I have.* **An action for the writer, with a date, and a refusal to act until it is done** — and it answers the *not known* item at no cost.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The change since the last note, in the heading', '✓ two clauses'],
  ['The graded table with sources and dates', '✓'],
  ['The opinion outside the table, with a name', '✓'],
  ['What you would *not* do, with a reason', '✓ about 2 per cent on a loaf'],
  ['An observable overturning condition with a figure', '✓ above the August list'],
  ['The person who would notice it', '✓ Nadia, who opens the post'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('*The one thing that would change my mind* only. ⚠ **Then ask the two follow-up questions every time: who would see it happen, and have they been told?** ⚠ **The second answer is usually no**, and the homework exists to fix exactly that.'));
out.push(stage('7', 'Write freely – sample (176 words)'));
out.push(sample(null, [
  '**BOARD AND CARTON — MARKET NOTE. 26 July. N. Mansour. One page. ⚠ Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.**',
  '⚠ **CONFIRMED** | the plater, twelve per cent from 1 March | ⚠ **circular 22 Jan; invoice 4 Mar at the new rate**',
  '**CLAIMED** | Hama suspension, two grades, not ours, about a fortnight from the 18th | ⚠ **Hama sales office, 21 and 25 July, no name, volunteered the fortnight**',
  '**CLAIMED** | autumn board rise | ⚠ **trade sheet 20 July. One source, not three.**',
  '**NOT KNOWN** | ⚠ **whether a heavy brown shortage pulls our grade forward** | ⚠ **no source. Two calls not returned. The costly one.**',
  '**NOT KNOWN** | Homs works reopening | no roof on 2 July — evidence against, not a denial',
  '**WHAT I WOULD DO. N. Mansour.**',
  '⚠ **I would buy nothing forward.** One item of five is confirmed and it is already in our prices.',
  '⚠ **I would not reopen the Tannous price before the autumn**, because the only rise we can evidence was in the price when we held it.',
  '⚠ **The one thing that would change my mind: Hama quoting a second fortnight, or any quotation for our grade more than five per cent above the June list. Fadi sees every quotation at the gate and has been asked.**',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I am reading this as_ — "Mr Ayoub, with four seconds"   ✓ _can the condition be observed?_ — "yes: five per cent above the June list, at the gate"   ? _has Fadi been told?_ — "yes, and the note says so"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('⚠ Usually the person who would notice has been told in one of three texts, ⚠ **and in the other two the writer is the only person watching for a thing they will not be present to see.** **That is the gap between a note and a control**, and it costs one conversation.'));
out.push(stage('HW', 'Homework – sample (≈61 words)'));
out.push(sample(null, ['⚠ **I told Fadi on 27 July what to watch for: any quotation for our grade more than five per cent above the June list, which he will see at the gate with the drivers.** ⚠ **He asked what the June list figure was, which nobody had thought to give him**, and it is now written on the inside of the gate book.']));

// ===================== 23.7 =====================
out.push(pb());
out.push(h2('23.7  Review & Mediate: one story, four kinds of sentence'));
out.push(stage('1', 'Get ready – Unit 23 quiz'));
out.push(p('**1** ⚠ **What has happened, who says so, and to what** — ⚠ **and *to what* is the one usually unanswered**, because the reader supplies it from their own situation.  **2** ⚠ ***Claimed*: he says this and I am not vouching for it. *Admitted*: it is against his interest AND it was extracted.**  **3** ⚠ **Protecting a source who would be dismissed; one unverified source; something heard in a yard** — ⚠ **and only the first is honest, and only if you say so.**  **4** ⚠ **What · who says so · what is not known** — and the third goes last ⚠ **because first it reads as ignorance and last it reads as a list of work.**  **5** ⚠ **A document, or two people who have not read each other.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Four of the five.**  2 ⚠ **Nowhere** — three in Nour\'s head and one in Fadi\'s; *the June note still says *not known* about four things that were settled in July.*'));
out.push(note('⚠ The mechanism is the thing to teach, and it is psychological rather than procedural: ⚠ **the confirmed items get written down because they were surprises; the answered unknowns do not, because by then they are obvious.** ⚠ **Obviousness is what stops a fact being recorded**, and nothing else — not laziness, not time.'));
out.push(p('⚠ And the repair is one line in the right place: ⚠ ***answered since the last note*, with its date and who said it, directly under the top line and before the table** — **because a reader with four seconds should see the new facts and not the old grades.**'));
out.push(p('**Language box – Practise (sample):**  _"The June note listed five things as not known. Four are known now and none is written down. The repair is one line: answered since the last note — the fortnight runs from the 18th, Hama sales office, 25 July."_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['B', 'Which actions in these minutes were completed?'],
  ['A', 'Three of five. The tyres, the alarm contract and the gate light.'],
  ['B', '⚠ And where is the result of each written?'],
  ['A', 'The invoice for the tyres is in the file.'],
  ['B', '⚠ And the alarm contract, and the light?'],
  ['A', '…In my head. The alarm man said our contract covers the yard; the light needs a new fitting, not a bulb.'],
  ['B', '⚠ **Then next year somebody will telephone the alarm man again and buy another bulb.**'],
]));
out.push(note('⚠ **Pair 2 produces the same result on any minutes anybody brings in**: ⚠ **the completed action whose result is in somebody\'s head.** **And it will be a surprise to the person that this is a problem**, because *to them the answer is now obvious* — which is precisely the finding.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the unknowns that were answered and where each answer lives. **Typical errors:** treating the question as a criticism of the person · and the content error, which is proposing a new form rather than one line. ⚠ **One line, in the existing note, above the table.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The question that was open', 'Answered?', 'Where the answer is now', 'The line that would keep it'], [
  ['whether the fortnight runs from the 21st', '⚠ **yes, on the 25th**', '⚠ **in Nour\'s head**', '⚠ **answered since the last note: it runs from the 18th — Hama sales office, 25 July**'],
  ['whether the slitter rebuild has a date', 'yes, on the 25th', 'in Nour\'s head', 'answered: no completion date given — same source, same day'],
  ['whether the alarm contract covers the yard', '⚠ **yes, in May**', '⚠ **in the manager\'s head**', '⚠ **answered: it does — the alarm engineer, 14 May**'],
  ['whether the gate light needs a bulb', 'yes', 'in the manager\'s head', 'answered: a fitting, not a bulb — the electrician, 2 June'],
], [1.8, 1, 1.4, 2.2]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"Their note said four things were not known. Three were answered within a month — by a telephone call, a visit and an engineer — and all three answers are in one person\'s head. The line that would have kept them is *answered since the last note*, with the date and who said it, above the table."',
  '⚠ **The unit\'s mediation, named as the eleventh unit of this book:** the part of any note that lists what is not known is the only part that makes anybody do anything, **because it is a list of telephone calls** — ⚠ **and it is the only part whose results are never recorded, since a fact that has just been established feels obvious to the person who established it and therefore does not feel like news** — ⚠ **so the file keeps every surprise it was ever told and loses every answer it ever went out and got.**',
  '⚠ **And the half that makes it fixable**: the repair is not a new form or a new discipline. ⚠ **It is one line above the table, four lines long in a busy month**, and it changes what the file is: *the only part that says what we found out rather than what we were told.*',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 2)'));
out.push(table(['Question', '1', '2', '3', '4', '5'], [['Line', 'A', 'C', 'D', 'B', 'E']], [1.2, 0.8, 0.8, 0.8, 0.8, 0.8]));
out.push(note('⚠ **Item 1 is A and not B**: two contacts who read the same sheet is a question about ⚠ **how to grade it**, and A is the line that defines *confirmed* as **two people who have not read each other.** ⚠ **B is about attribution and would tempt a learner who sees the word *source*** — **Part 2 rewards matching the decision to be made, not the vocabulary.**'));
out.push(note('⚠ Item 2 is **C**: a volunteered fact is a question about the ⚠ **reporting verb** — *admitted only where the fact was extracted* — ⚠ **and a learner who chooses A has matched *bad news about his own company* to the grading line.** **The question in each item is *which rule do I need?*, and the nouns are deliberately shared between lines.**'));
out.push(stage('6', 'Write with help – sample (42 words)'));
out.push(sample('Exam task — Writing Part 1 (35 to 45 words)', [
  'Fadi — one thing to watch for. ⚠ **If any quotation for our board grade is more than five per cent above the June list**, or if Hama quote a second fortnight, that matters. ⚠ **You will see it at the gate with the drivers.** Bring it to me the same day.',
]));
out.push(note('⚠ **That is 42 words and the figure is what makes it watchable.** ⚠ *More than five per cent above the June list* — **not *anything unusual*, which nobody has ever noticed in the history of trade.** **And the place is named**, because a thing to watch for with no place attached is watched for nowhere.'));
out.push(note('⚠ The omission to expect is the reasoning. ⚠ **Forty words cannot carry why it matters, and the man at the gate does not need to know** — *bring it to me the same day* is the whole instruction. ⚠ **A learner who spends fifteen words explaining the board market has written a worse note**, however well.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['⚠ What to watch for, with a figure', '✓ five per cent above the June list'],
  ['Where they will see it', '✓ at the gate with the drivers'],
  ['What to do, with a name', '✓ bring it to me the same day'],
  ['35 to 45 words — count them', '✓ 42'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (175 words)'));
out.push(sample(null, [
  '**BOARD AND CARTON — MARKET NOTE. 26 July. N. Mansour. One page. ⚠ Since 26 June: the Hama suspension, and the twelve per cent now in an invoice as well as a circular.**',
  '⚠ **ANSWERED SINCE THE LAST NOTE.**',
  '⚠ **The fortnight runs from the 18th, not the 21st — Hama sales office, 25 July.**',
  '⚠ **The slitter rebuild has no completion date — same man, same day.**',
  '⚠ **The Homs works had no roof on 2 July — seen from the road, B. Nassif.**',
  '⚠ **The autumn-rise story is one source: two of three contacts had read it in the trade sheet — asked on 23 July.**',
  '⚠ **CONFIRMED** | the plater, twelve per cent from 1 March | circular 22 Jan; invoice 4 Mar at the new rate',
  '**CLAIMED** | Hama suspension, two grades, not ours, a fortnight from the 18th | Hama sales office, 21 and 25 July, no name',
  '**NOT KNOWN** | ⚠ **whether a heavy brown shortage pulls our grade forward** | ⚠ **no source. Two calls not returned. The costly one.**',
  '**WHAT I WOULD DO. N. Mansour.** ⚠ **Buy nothing forward. Not reopen the Tannous price before the autumn. And the one thing that would change my mind: a second fortnight from Hama, or any quotation for our grade more than five per cent above the June list — Fadi watches the gate and has been told.**',
]));
out.push(note('⚠ **That is the unit\'s whole output in one page, and the *answered since the last note* block is the part that did not exist in any earlier draft.** ⚠ **Four lines, each with a date and a source, and four telephone calls that will never be made twice** — which is the mediation turned into a document.'));
out.push(stage('HW', 'Homework – sample (≈62 words)'));
out.push(sample(null, ['⚠ **Three answers written back into the May minutes.** ⚠ **The alarm contract covers the yard — the alarm engineer, 14 May.** ⚠ **The gate light needs a fitting and not a bulb — the electrician, 2 June.** And the second crossing takes empty vehicles — the agent, 25 July. ⚠ **All three were known by somebody and written by nobody.**']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 23 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'a', 'b', 'b', 'c', 'b', 'a', 'b']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Question 3 is the two-sided item: he volunteered the news, so ⚠ **b, *said, unprompted*** — **not *admitted*, which claims it was extracted, and not *confirmed*, which claims there was something to confirm.** ⚠ **It is the most-missed item in the paper** and worth re-reading the 23.2 dialogue for.'));
out.push(note('⚠ Question 5 is **c, one source**, and ⚠ **a learner who chooses a has counted people rather than sources.** ⚠ Question 6 is **b**: evidence against a rumour goes under *not known*, **because *denied* needs an accuser** — *a roof is not a denial.* **Both items are about the same habit: counting what is in front of you rather than what it rests on.**'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Unknowns in June', 'Known now', 'Where the answers are', 'Why never written', 'The repair'], [[
  '**five**', '⚠ **four**', '⚠ **three in Nour\'s head, one in Fadi\'s**', '⚠ **by the time she wrote the July note she knew them and they did not feel like news**', '⚠ **one line: *answered since the last note*, with the date and who said it, under the top line**',
]], [1.1, 0.8, 1.5, 2.2, 2.2]));
out.push(note('⚠ Gap 4 is the mark that separates understanding from transcription. ⚠ **The answer is about obviousness, not about time or carelessness** — *they did not feel like news* — and a learner who writes *because she was busy* has missed the whole mediation. ⚠ Gap 5 needs **where the line goes**: *under the top line*, **because the position is half the repair.**'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (72 words)', [
  '⚠ **CONFIRMED.** The mill price is up nine per cent from 1 August. ⚠ **Their letter of 18 July, and the August delivery note is at the new rate.**',
  '**CLAIMED.** The second mill will hold its price to September. ⚠ **Their driver, 22 July. He is not in sales and was not asked.**',
  '⚠ **NOT KNOWN.** Whether our own contract price is protected until September. ⚠ **Nobody has read the contract. It is in the drawer and it would take ten minutes. This is the one that would cost us.**',
]));
out.push(box('Marking the Unit 23 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap; gap 4 needs obviousness, gap 5 needs the position of the line.'],
    ['**C Writing**', '7', '⚠ **one confirmed item with a document** (2) · **one claimed item with source and date** (2) · ⚠ **one *not known* item marked as the costly one** (3).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for *confirmed* need a document or two independent people.** ⚠ **A confirmed item supported by *everybody says* scores 0 of the 2**, however true it is — and the mark is for what is behind the claim, not for the claim.',
  '⚠ **The two marks for *claimed* need the date as well as the source.** ⚠ *Their driver* earns one; ⚠ ***their driver, 22 July, not in sales*** earns both — **and the last clause is what a reader in October needs.**',
  '⚠ **The three marks for the *not known* item need it to be marked as costly and to be a real gap.** ⚠ **A learner who writes *whether prices will rise in general* has written a wish and not a gap**; *whether our own contract is protected* is a gap with a drawer behind it.',
  '⚠ **Deduct for two grades in one paragraph**, and for *it is understood that* anywhere. ⚠ **Both appear in about a third of a class\'s first attempts**, and both are the habits the unit exists to remove.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 23**'));
out.push(p('**1 Reading the meaning instead of the sentence.** It is the fault the whole unit is built on and it comes back in every cycle. ⚠ **The remedy is one instruction, used aloud, twenty times: *read me the sentence again — the sentence, not what it means.*** ⚠ **Make somebody else read it**, because a writer cannot hear their own paraphrase. **The cement story in the 23.1 key is the one to read aloud if a class is sceptical: eleven tonnes, five months under plastic, and the words *one kiln of three* were in the message all along.**'));
out.push(p('**2 Counting people instead of sources.** *Three merchants*, *everybody in the trade*, *four people have told me*. ⚠ **The question that fixes it is *where did you hear it?*, asked of each person separately**, and it takes about a minute each. ⚠ **Expect the answer to collapse to one man in most cases**, and expect one case where the one man read it in the paper that is now reporting the belief. **A class that has seen that once reads trade news differently for good.**'));
out.push(p('**3 Treating 23.7 as filing.** It is the most practical cycle in the unit and the only one that will change a document at the learner\'s work tomorrow. ⚠ **The finding is psychological, not procedural**: *a fact that has just been established feels obvious to the person who established it.* ⚠ **Nobody is being careless, which is why telling people to be careful has never worked.** If a cycle must be cut, ⚠ **cut 23.2 and keep 23.7**: the reporting verbs can be taught in twenty minutes inside 23.3, ⚠ **and the question *which of these was answered, and where is the answer?* cannot be taught except by being asked of a real file.** **Bring minutes; any minutes will do.**'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 23 · Answer Key');
