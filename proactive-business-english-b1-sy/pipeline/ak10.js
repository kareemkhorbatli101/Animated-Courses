// Proactive Business English B1 · Syria Edition · Book 1 · Unit 10 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 10  Reporting What Was Said'));
out.push(p('_Proactive Business English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B1 answer – learners\' own answers will be different and that is correct.',
  '⚠ **10.4 is the most consequential cycle in Book 1 and the hardest to make a class believe.** *Said*, *reported*, *explained*, *admitted* and *pointed out* report identical words and make five different claims about a person — and three of those claims the person never made. A minute written with the livelier verbs **takes sides while appearing to record**, and the writer almost never intends it.',
  '⚠ **The argument that works is not about fairness; it is about permanence.** *In six months this will be the only record of that meeting that exists, and there is no other version.* ⚠ Give the class Hala\'s line rather than a principle, and the point lands in one minute.',
  '⚠ **And the discipline in 10.5 is what makes the rest safe.** Everybody interprets before they write, and the unit does not ask anybody to stop. It asks for the interpretation to sit in **its own sentence, in the writer\'s own name**, so that a reader can reject the reading and keep the report.',
], C.grey, C.navy));

// ===================== 10.1 =====================
out.push(h2('10.1  She said she had already sent it'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Collect the written versions and compare them with the spoken ones; the written version nearly always adds a word the speaker did not use.'));
out.push(p('**b**  *She said she **had** sent it.* The first fails to backshift; the third is possible only if *yesterday* was the speaker\'s own word and the writer knows the day meant.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ That *already* **moves the sending to before the saying** — and Nour does not know that; Ms Shamsi may have meant *I have put it in the post this morning*.  2 **The date of the call** — *a reported statement without the date of the reporting is a tense with nothing to measure from*.'));
out.push(note('⚠ The two-sentence note at the end of the dialogue is the model for the whole cycle and worth copying onto the board: *On 25 November Ms Shamsi said she had sent the September invoice. The post book shows nothing from her since 11 November.* ⚠ **One sentence hers, one ours, and the reader can see which is which.**'));
out.push(p('**Language box – Practise (samples):**  1 _On 25 November she said she had sent it. The post book shows nothing since the 11th._  2 _On Tuesday he said he would pay on Thursday. The bank shows nothing received on Thursday or Friday._  3 _On the 20th she said she was waiting for our order. The order book shows it placed on the 18th._  4 _On the 25th she said she could hold the price to the end of December. Nothing has come in writing._  5 _On the 26th he said he had never received the credit note. The credit book shows it issued on the 22nd and posted on the 23rd._'));
out.push(note('⚠ Item 5 is the one to mark carefully. *Never* is **his** word and belongs in the report — *he said he had never received it* — whereas *already* in the dialogue was **Nour\'s** addition. ⚠ The rule is not *avoid adverbs*; it is **report theirs and add none of your own.**'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Your note says Mr Jaber said he had just collected the Aleppo load.'],
  ['A', 'He did.'],
  ['B', 'When?'],
  ['A', 'This morning, about nine.'],
  ['B', 'And when did he say he had collected it?'],
  ['A', '…He did not say. I took *just* to mean a few minutes before he telephoned.'],
  ['B', 'Which is what *just* does, and he may have meant some time today. ⚠ Leave it out and put the time of the call in.'],
  ['A', 'And then my own finding, separately: the gate sheet shows no collection today at all.'],
  ['B', 'Then that is the note, and the two halves are visible.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two-sentence note, then the adverb left out and what it would have claimed. **Typical errors:** _she said she has sent it_ (no backshift — the commonest) · _she said me that she had sent it_ (*said* takes no object; *told me* does) · _she said that she had sent it already_ where *already* was the writer\'s · and the content fault, which is the speaker\'s claim and the writer\'s finding in one sentence.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Date and who', 'What they said (reported)', 'What I found (separate)'], [
  ['25 Nov, D. Shamsi', 'that she had sent the September invoice', 'the ledger shows it entered on 2 October'],
  ['26 Nov, Mr Haffar', 'that he had never received the credit note', 'the credit book shows it posted on the 23rd'],
  ['27 Nov, Mr Jaber', 'that he had collected the Aleppo load', 'the gate sheet shows no collection that day'],
  ['28 Nov, S. Haddad', 'that the committee had not met in November', '⚠ nothing to check it against'],
], [1.2, 2.3, 2.3]));
out.push(note('⚠ The fourth row\'s *nothing to check it against* is an honest and useful entry. Not every reported statement has a document behind it, and saying so is better than leaving the column blank, which reads as *not checked*.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"On 26 November Mr Haffar said he had never received the credit note. The credit book shows it issued on the 22nd and posted on the 23rd."', '⚠ Count the notes that put the claim and the finding in one sentence. ⚠ **Each of those has a conclusion built into it that nobody will be able to separate later** — and the conclusion is usually that somebody is not telling the truth, which is rarely what the writer believed.']));
out.push(stage('5', 'Read'));
out.push(p('1 **What she said · what she asked · what I said · what I have found since** — and the fourth is separate because it is the writer\'s work and not the caller\'s words.  2 That Ms Shamsi did not say when she had sent the invoice ⚠ **and that she did not ask**.  3 That *she had sent it* may have meant that morning rather than before the call — recorded because ⚠ *if this note is read in six months the distinction may matter and I would rather it were on the page than in my memory*.'));
out.push(note('⚠ Question 2 is worth five minutes. *She did not say when and I did not ask* is a gap **named**; the same gap left out becomes, to a later reader, a thing she did not mention — which blames her for the writer\'s omission. ⚠ Learners leave these out because they feel like admissions. They are the opposite: they are the only way the writer\'s own silence stays the writer\'s.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**NOTE OF A TELEPHONE CALL. The galvaniser to R. Nassif. Thursday 27 November, about 2.15. Written at 2.30.**',
  '**What he said.** He said the balustrade infills had gone into the tank that morning. He said they would be out on Friday and could be collected Friday afternoon. He said the tank had been down for two days the previous week and that he was behind. ⚠ **He did not say what time on Friday and I did not ask.**',
  '**What he asked.** Whether we could collect rather than have them delivered. Whether there would be more work in December.',
  '**What I said.** That we would collect. That there would be about the same again in December.',
  '**What I have found since, which is ours and not his.** Our own note of the drop-off says Tuesday, not Wednesday, so they have been there a day longer than he implied.',
  '⚠ **One thing I may be wrong about.** I took *that morning* to mean they had only just gone in. **It is equally possible he meant they had been in since Tuesday and came out that morning**, which would fit our drop-off note better than his account.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who, to whom, when, and when written', '✓'],
  ['The four headings, in order', '✓'],
  ['Something they did not say and you did not ask', '✓ what time on Friday'],
  ['One thing you may be wrong about', '✓ and it resolves in his favour'],
], [5, 1]));
out.push(note('⚠ Note that the *may be wrong* paragraph in that sample resolves in the **other** person\'s favour. ⚠ Learners expect the paragraph to be a hedge on their own case; here it undoes the writer\'s own finding, which is what makes it worth having.'));
out.push(stage('6R', 'Share'));
out.push(p('The *what I may be wrong about* paragraphs read out. **Ask which would matter in six months.** ⚠ The useful ones are nearly always about a word that moves time or quantity — *already*, *just*, *only*, *about*, *nearly* — rather than about anything substantive.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'In 2023 I wrote in a note that a supplier had said he could not supply before March. What he said was that he could not **guarantee** before March.',
  'I wrote *could not supply*. Those are different things and I did not notice the difference for about four months, by which time we had opened an account with somebody else and paid about 15 per cent more on two orders.',
  'He could have supplied in January. He told me so, without any complaint, when I telephoned him in March about something else — he said he had been expecting an order.',
  '⚠ The difference came from me and not from him, and it came from one word, and the word I dropped was the one that was doing all the work. **I had written the note in the car park, from memory, about twenty minutes after the call.**',
]));
out.push(note('⚠ The last sentence is the finding. ⚠ Almost every text in this stage will contain a note written from memory twenty minutes or two hours later, and the cost is a single word. The remedy is in stage 5\'s heading — *written at 2.30* — and the class should be asked to adopt it.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _where the difference came from_ — "one word: *guarantee*, dropped"   ✓ _backshift correct, and the date of the saying given?_ — yes   ? _was it a word they used or a word you added?_ — "a word he used and I removed, which is the other direction"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('In nearly every text the difference is one word, ⚠ **and usually an adverb or a modal: *already*, *just*, *never*, *only*, *guarantee*, *should*.** ⚠ Close the cycle on that: the risk in reporting is not forgetting the substance, which people remember, but losing the one word that qualified it.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Note of a call under the four headings, written eight minutes after it. ⚠ The *what they did not say* line was the useful one: he did not say whether the price included delivery, and I had assumed it did. I telephoned back and it did not, which is 40,000 a load.']));

// ===================== 10.2 =====================
out.push(pb());
out.push(h2('10.2  What the auditor asked, in order'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Most learners can remember three of four and cannot remember the order, which is the gap the cycle fills.'));
out.push(p('**b**  *He asked me **what I did**.* ⚠ A reported question takes **statement** word order, and the direct form is what the ear remembers, which is why this error survives so long.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 That all five questions walk towards *what happens to a difference*, and the answer is that nothing does — ⚠ *he was walking towards the last one from the first question*.  2 That she said she did not know and would count them, ⚠ **and wrote the question down in front of him** — *the question you cannot answer is the one you will forget by Monday, and it is also the one he will come back to*.'));
out.push(note('⚠ *The order of somebody\'s questions tells you what they already suspect, and it is the only part of an interview that nobody thinks to write down.* ⚠ This is the cycle in one sentence and it generalises past auditors: bank managers, customers and inspectors all do it, and the order is free information that disappears within an hour.'));
out.push(p('**Language box – Practise (answers):**  1 _He asked whether the count was against the order._  2 _He asked who signed it._  3 _He asked whether the signature went on before or after the count._  4 _He asked what happened to a difference._  5 _He asked whether the invoice was raised from the order or the sheet._ ⚠ **What the order suggests:** all five are steps towards four — and five confirms that the difference has nowhere to go. He had the gap before he asked question one.'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'What did the new customer ask? In the order, if you can.'],
  ['A', 'First he asked how long we had traded. Then he asked whether we held stock. Then he asked what our lead time was. Then he asked whether we had ever missed a promised day. And then he asked what we had done about it.'],
  ['B', 'Say that again and listen to it.'],
  ['A', '…The first four are all things he could have asked anybody.'],
  ['B', 'And the fifth?'],
  ['A', 'The fifth is the only one that tells him anything, because every supplier he asks will say yes to stock and give him a lead time.'],
  ['B', 'So what was he buying?'],
  ['A', '⚠ Not a lead time. **He was buying what happens when the lead time fails**, and I answered the first four carefully and the fifth in about six words.'],
]));
out.push(note('⚠ Role card 2 is the commercial half of this cycle and it is worth as much as the audit half. ⚠ A customer\'s last question is usually the real one, and most sellers spend their effort on the first four because those are the ones they have answers prepared for.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the five questions in order, the one sentence saying what they were walking towards, and the question nobody could answer. **Typical errors:** _he asked me what did I do_ · _he asked that whether the count was correct_ (*that* after *asked*) · _he asked me do I sign it_ · and the content fault, which is five questions reported in the order that makes the best story rather than the order they were asked.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['In order, as reported', 'What I answered'], [
  ['1 He asked whether the count was against the order.', 'the order'],
  ['2 He asked who signed the sheet.', 'whoever counted, by name'],
  ['3 He asked whether the signature went on before or after.', 'after'],
  ['4 He asked what happened to a difference.', 'seen by the coordinator before release'],
  ['5 He asked whether the invoice came from the order or the sheet.', '⚠ the order — which is the gap'],
], [3, 2.5]));
out.push(p('**What the order suggests they already suspected:** that a recorded difference never reaches the invoice — and that questions 1 to 4 were checking the rest of the procedure was sound enough for the gap to matter.'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['The five read in order, then: _"He was walking towards the invoice from the first question, and he never said so."_', '⚠ Ask in how many cases the asker said what they were after. Almost none. ⚠ **And in almost all of them the order made it clear** — which means the information was freely available and was thrown away by whoever wrote the questions down in a tidier sequence.']));
out.push(stage('5', 'Read'));
out.push(p('1 That he **had the gap before question one**: all seven walk towards question five, and six and seven are about how long it has been there and whether anybody noticed. Questions one to four were checking that the rest of the procedure was sound enough for the gap to matter.  2 Six and seven — she **did not know**, said so, wrote both down in front of him and read them back.  3 That her answer to seven (*I would expect to have been told*) was **more confident than the facts**: she would expect it, the procedure does not say it, and no line makes her the person told.'));
out.push(note('⚠ The correction convention is the thing to teach from this page: ⚠ **do not amend the answer — record it as given and put the correction beneath it.** The record of what you actually said has its own value, and a corrected answer destroys it. Learners will want to tidy the answer, and the reason not to is that somebody may later need to know what the auditor was told.'));
out.push(stage('6', 'Write with help – sample (141 words)'));
out.push(sample(null, [
  '**RECORD OF AN INTERVIEW. The bank\'s Mr Haddad with R. Nassif. 27 November, 11.00 to 11.35, at the bank. Written the same day.**',
  '**The questions, in the order asked.** **1** He asked who signed cheques. **2** He asked what the two-signature limit was. **3** He asked who had set it. **4** He asked when it had last been reviewed. **5** He asked whether anybody had ever signed above it.',
  '**What I answered.** 1 Samira and me. 2 Five hundred thousand. 3 My father. 4 ⚠ **I did not know — it has never been reviewed in my time.** 5 ⚠ **I did not know and said I would check the September payments.**',
  '⚠ **What the order tells us, which he did not say.** All five walk to question five. One to four establish that the limit exists, is old and is unreviewed, which is what makes a breach worth asking about. **He had question five before he asked question one.**',
  '**What I undertook to do.** Check every payment over 500,000 since January and send him the list. I wrote both questions down in front of him.',
  '⚠ **And one correction.** I answered that my father set the limit. **I do not actually know that** — Abu Yasser says so and my father is not here to ask.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Questions numbered in the order asked', '✓'],
  ['Answers numbered to match', '✓'],
  ['A paragraph on what the order reveals', '✓'],
  ['Any over-confident answer corrected beneath it, not replaced', '✓ the limit\'s origin'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what the order tells us* paragraphs read out. **Ask which asker had made up their mind before the first question.** ⚠ Usually most of them — and that is not a complaint about the askers: a prepared question sequence is good practice, and the point is that it is **readable**.'));
out.push(stage('7', 'Write freely – sample (132 words)'));
out.push(sample(null, [
  'The insurance man came in 2021 and asked me eleven questions about the workshop. I answered all eleven and thought it had gone well.',
  'The first nine were about the machines, the wiring and the extinguishers. The tenth was whether anybody slept on the premises. The eleventh was whether we had ever had a fire.',
  'We had — a small one in 2016, in a bin, put out in a minute, and I said so because it was true and it seemed trivial.',
  '⚠ I realised about two months later, when the premium came, that the first nine questions were the ones he had to ask and the last two were the ones he was there for. **If I had understood the order at the time I would have answered the eleventh the same way, but I would have had the 2016 report with me**, and the premium conversation would have been about a bin.',
]));
out.push(note('⚠ The ending is exactly right and should be praised: understanding the order would not have changed the **answer**, only the **preparation**. ⚠ A class that concludes this cycle is about concealment has misread it, and this sample is the corrective.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _when they realised_ — "two months later, when the premium came"   ✓ _reported questions with statement word order?_ — yes   ? _which single question was the real one?_ — "the eleventh; the first nine were obligatory"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the real question was the last one. ⚠ **And in the others it was the one the writer could not answer, which is the same thing from the other side** — the question you cannot answer is the one the asker came for, because the askable ones have answers everywhere.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Five questions from a customer, in order: price, lead time, minimum order, whether we deliver, and whether we would hold a price for a tender. ⚠ The fifth was the real one — he is bidding for something and needs a price he can rely on for weeks, and nothing in the first four would have told me.']));

// ===================== 10.3 =====================
out.push(pb());
out.push(h2('10.3  He told me to, and I have to'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ The second question is the cycle: in most cases the person did not know whose instruction it was, and often neither did the person passing it on by the time they passed it.'));
out.push(p('**b**  The first gives an obligation with no owner; the second names the asker, names what the writer undertook, and so tells the reader which part is negotiable.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 Whose it is (*that came from him and not from me*), what she undertook (*I have told him Monday is possible*) and what she has paid for it (*I have taken the Thursday counter off you*).  2 ⚠ She does **not** present her own deadline as his: *he asked how long it would take and I said Monday — so the Monday is mine and the count is his, and you should know which part to argue with.*'));
out.push(note('⚠ Nour\'s admission near the end is the cycle landing: *he did not say Monday, and I have been treating my own answer as his instruction for about an hour.* ⚠ This is extremely common and almost never dishonest — a figure given in a corridor hardens into an instruction within the hour, including for the person who gave it.'));
out.push(p('**Language box – Practise (samples):**  1 _Mr Attar has asked for the count; the Monday is mine. I have taken the Thursday counter off you._  2 _Mr Ayoub has asked for a stocktake; the weekend was my idea. I have put two men on it._  3 _Mr Ayoub has set the list from the 1st; the forty telephone calls are mine and nobody asked for them._  4 _Mr Ayoub has set the new signature rule; the date is his and the wording is mine._  5 _Mr Attar has asked for the controls history; I offered Friday and he had said no date at all._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Mr Nassif has set a new price list from the 1st. That is his. And I have undertaken that every trade customer will be told personally before then.'],
  ['B', 'How many is that?'],
  ['A', 'Forty-one.'],
  ['B', 'Did he ask for that?'],
  ['A', '…No. He said the list starts on the 1st. The forty-one calls are mine.'],
  ['B', 'Then I would argue with the calls and not with the list. A letter to forty-one and a call to the six who buy weekly would take a morning instead of three days.'],
  ['A', 'That is better and it was never his instruction, so I can simply change it.'],
  ['B', '⚠ Which you could not have done if you had passed it on as his.'],
]));
out.push(note('⚠ The last line is the practical payoff and learners should hear it plainly: **an undertaking you have labelled as your own is one you can change without going back to anybody.** Passing your own decisions on as somebody else\'s costs you the ability to improve them.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write whose the instruction is, whose the deadline is and what was paid, then which part the worker should argue with. **Typical errors:** _he told me that to count them_ · _he asked for that it be done_ · _he said me to do it_ · and the content fault, which is passing on the instruction with the writer\'s own deadline attached and unlabelled.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The instruction', 'Whose it is', 'What I undertook', 'What I paid for it'], [
  ['count every recorded difference', 'Mr Attar\'s', 'Monday — then Tuesday', 'the Thursday counter, all day'],
  ['a full stocktake', 'Mr Ayoub\'s', 'one weekend ⚠ (he did not ask)', 'two men; nothing taken off them'],
  ['tell trade customers of the new list', 'Mr Ayoub\'s', '41 personal calls ⚠ (mine)', 'three days of my own week'],
  ['send the controls history', 'Mr Attar\'s', 'Friday ⚠ (he gave no date)', 'nothing — which is why it slipped'],
], [1.6, 1, 1.4, 1.4]));
out.push(note('⚠ Three of those four undertakings were the writer\'s own and none of them was asked for. ⚠ That proportion is normal, and the fourth row shows the cost of an unfunded undertaking: *nothing — which is why it slipped.*'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Mr Attar has asked for the count. The count is his and the Monday was mine, and I have taken the Thursday counter off Hala to pay for it."', '⚠ Count the instructions passed on with no resource attached. ⚠ **Then ask whose week paid for each** — and the answer is always the person at the end of the chain, who was not consulted about the deadline either.']));
out.push(stage('5', 'Read'));
out.push(p('1 The **count** came from Mr Attar; the **Monday** was the writer\'s own — *he did not say Monday and he has not asked for Monday*.  2 Because *on Tuesday morning I can take something else off you and on Tuesday evening I can only apologise to him*.  3 That for about an hour she passed Monday on as though it were his — ⚠ *you would have argued with him through me and lost, when the thing to argue with was a figure I had invented in a corridor*.'));
out.push(note('⚠ The *mark the months you rush* paragraph is the hidden gem of this page and it is counter-intuitive enough to teach explicitly: **a count with four months marked *rushed* is worth more than a count with no marks**, because the reader can place their confidence correctly. ⚠ Learners assume marking rushed work invites criticism; in fact it is the only way a number arrives with its reliability attached.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**Khalil — the sheet audit. 28 November.**',
  '**What has been asked for, and by whom.** Mr Nassif has asked for every offcut over half a square metre to be measured and listed, with its thickness. **That is his and not mine.**',
  '**What I undertook, which is mine.** He asked whether it could be done this week and **I** said by Friday. He did not say Friday. ⚠ **So if Friday is wrong, the mistake is mine and it is correctable.**',
  '**What I have taken off you to pay for it.** The Thursday deliveries — Rami is doing those — and the Friday morning sweep-down. ⚠ **If a day and a half is not enough, tell me Thursday morning and not Thursday evening**, because on Thursday morning I can take something else off you and on Thursday evening I can only apologise to him.',
  '**What I would like you to do with the parts you rush.** Mark them. A list with the back rack marked *estimated* is worth more than a list with no marks, because he will measure three at random.',
  '⚠ **And the part I got wrong.** I told you Friday as though it were his. **It was mine.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Whose the instruction is, said plainly', '✓'],
  ['What the writer undertook, under its own heading', '✓'],
  ['What has been taken off the reader to pay for it', '✓ Thursday deliveries and the sweep-down'],
  ['A request to mark the rushed parts', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what I have taken off you* paragraphs read out. **Ask which notes passed on work with nothing attached.** ⚠ Those are the notes that produce late, resentful work, and the writer never finds out why — which is the practical case for the paragraph.'));
out.push(stage('7', 'Write freely – sample (136 words)'));
out.push(sample(null, [
  'In 2022 I was told that head office wanted the stock figures by the fifth of every month. I did them by the fifth for fourteen months, which meant two evenings every month because the month end is the fifth\'s worst week.',
  'In the fifteenth month I met the man at head office who used them. He said he reported in the third week and had never needed them before the tenth. The fifth had been invented by my own manager, who had told me it was theirs — I think genuinely believing it, because somebody had told him.',
  '⚠ What I would have argued with is the fifth, and I would have won in about a minute, because the person who needed the figures did not care. **I argued with nothing for fourteen months because I thought the date came from a building I had never been to.**',
]));
out.push(note('⚠ *I think genuinely believing it, because somebody had told him* is the generous and almost always correct reading. ⚠ Deadlines harden as they are passed along, and nobody in the chain is lying; each person received it as fixed. That is why the labelling in this cycle has to be done **at the point of passing on**, not reconstructed later.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they later learned_ — "the fifth was invented locally; the user did not need it before the tenth"   ✓ _told me to / asked for, with the owner named?_ — yes   ? _who would they have argued with, and would it have worked?_ — "their own manager, and it would have taken a minute"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually two of three deadlines belonged to the person who passed them on. ⚠ **And in none of them was it dishonesty** — only a figure given in a corridor and then defended as somebody else\'s. Say that plainly, because a class that reads this cycle as being about deceit will not use it on their own instructions.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I passed on the offcut list with the ask and the date separated. Khalil immediately argued with the date and not the ask, and he was right — Friday is the day the lorry comes. ⚠ It is now Monday, I have told Mr Nassif Monday, and he had never said Friday.']));

// ===================== 10.4 =====================
out.push(pb());
out.push(h2('10.4  Said, explained, admitted, pointed out'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Do this one aloud and in both orders; the change is audible and nobody needs it explained.'));
out.push(p('**b**  Only the first reports what she claimed. *Admitted* claims it was got out of her; *pointed out* claims she was right and somebody else was wrong.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 It made it sound as though somebody got it out of her — ⚠ *which is the opposite of what happened*, since she raised it in the first minute of the meeting before anybody asked her anything.  2 That she chose *admitted* because it felt like **a stronger word for a serious point**, ⚠ and *the strength went onto you instead of onto the point*.'));
out.push(note('⚠ Nour\'s explanation is the one to give a class, because it is what actually happens: nobody writes *admitted* to attack a colleague. They write it because the sentence feels weightier, and the weight lands on the person. ⚠ And Hala\'s closing line is the argument: *it is signed by you and nobody will ever read the other version, because there is no other version.*'));
out.push(p('**Language box – Practise (answers):**  1 **reported** — they brought it themselves, and *said* loses that fact.  2 **said** — a plain answer to a question needs nothing else.  3 **explained** — this is the one case where it is accurate: somebody had misunderstood.  4 **pointed out** — accurate only here, and ⚠ **name the person who was wrong**, or the implied loser is whoever was minuted last.  5 **said** — a figure needs no reporting verb with a claim in it.'));
out.push(note('⚠ Item 4 carries the rule that saves *pointed out*: if a correction really happened, **say who was corrected**. An unattributed *pointed out* always lands on whoever appears immediately before it, which may be somebody who said nothing of the kind.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'The minutes say I explained that the gate is unmanned after five.'],
  ['A', 'You said it.'],
  ['B', 'I said it. Nobody had asked and nobody was confused. I said it in the same voice I would say that it is Tuesday.'],
  ['A', 'And *explained* makes it sound like—'],
  ['B', 'Like the room had misunderstood something simple and I had to put them right. Which is a claim about everybody else in that meeting, not about me.'],
  ['A', 'I had not thought of it that way round.'],
  ['B', '*Said.* Or *reported*, because I brought it to the meeting and nobody asked me to.'],
]));
out.push(note('⚠ Role card 1 produces the insight that *explained* is a claim about **the room** rather than about the speaker, which is a direction learners never consider. ⚠ It is also the verb most used by well-meaning minute-takers, because it sounds respectful.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the verb used, what it claimed, and the verb that should have been used, then name the implied loser. **Typical errors:** _she admitted about the list_ · _he pointed out that was the gate_ · _she explained me that…_ · and the content fault, which is defending the verb on the grounds that the sentence is true. ⚠ It is true. That is not the test.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'The verb', 'What it claims', 'Would they sign it?'], [
  ['H. Mourad admitted the list was out of date', 'admitted', 'it was got out of her', '**no** — she raised it first'],
  ['N. Sayegh pointed out the invoice came from the order', 'pointed out', 'she corrected somebody', '**no** — nobody had said otherwise'],
  ['Y. Khalil explained the gate is unmanned after five', 'explained', 'the room had misunderstood', '**no** — nobody had asked'],
  ['K. Ayoub said the decision was his', 'said', '⚠ nothing', '**yes**'],
  ['H. Mourad reported that the list was dated the 5th', 'reported', 'she brought it herself', '**yes** — and it is a fact worth keeping'],
], [1.9, 0.8, 1.6, 1.1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It says she admitted the list was out of date. That claims it was got out of her, and she would not sign it — she raised it in the first minute."', '⚠ Count the *admitted*s and *pointed out*s in the room. ⚠ **Then ask who wrote each document and whether the people named have ever read it.** In most workplaces the answer to the second question is no, which is why nobody has ever objected.']));
out.push(stage('5', 'Read'));
out.push(p('1 Mrs Mourad raised it **herself, in the first minute, before any question**; *admitted* says the opposite and says it permanently. The writer chose it because *it felt stronger than said for a serious point*, and ⚠ *the strength attached itself to her rather than to the point*.  2 **Mrs Mourad** — the person minuted two lines earlier, and the only candidate.  3 Because *a record of what a minute said and why it was changed is worth more than a clean page*, and ⚠ *anybody who was at that meeting is entitled to see what I wrote about them*.'));
out.push(note('⚠ The last clause is the standard the series holds to and it is worth stating to a class as a rule of practice: **if you write a sentence about a colleague, they are entitled to read it.** ⚠ A minute-taker who applies that test before circulating will not need this cycle again.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**AMENDMENT TO THE MINUTE OF 17 NOVEMBER, item 2. Circulated 28 November by R. Nassif.**',
  '**What it said.** *Khalil admitted that the back rack had not been measured since 2023.*',
  '**What it now says.** *Khalil reported that the back rack had not been measured since 2023.*',
  '**Why, and by whom.** Asked for by Khalil, and he is right. **I wrote the original and the error was mine.**',
  '⚠ **What was wrong with _admitted_.** He raised it himself, in the first item, before anybody mentioned the rack. *Admitted* says it was got out of him, and it says so permanently: **this minute will outlast everybody\'s memory of the meeting, and there is no other version.** I used the word because the point was serious and I wanted the minute to carry that, and the weight went onto him instead of onto the rack.',
  '**What I am doing differently.** Minutes will use **said** unless there is a reason on the page for another verb, and **reported** where somebody raises a thing themselves.',
  '⚠ **And one thing I am not doing.** I am not destroying the original. It stays in the book with this attached, because anybody who was at that meeting is entitled to see what I wrote about them.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Both versions quoted in full', '✓'],
  ['The error owned in one sentence', '✓'],
  ['What the word claimed, and that it claimed it permanently', '✓'],
  ['The original kept, attached, with the reason', '✓'],
], [5, 1]));
out.push(stage('6R', 'Share'));
out.push(p('The *what was wrong with the word* paragraphs read out. **Ask which word had done the most damage.** ⚠ Expect *admitted* to win and *explained* to be the surprise, because its damage is to a whole room and nobody in the room ever objects on their own behalf.'));
out.push(stage('7', 'Write freely – sample (135 words)'));
out.push(sample(null, [
  'A report in 2020 said that I had *conceded* that the wiring had not been inspected. I had not conceded anything. I had been asked when it was last inspected and I had said 2017, which was the truth and which I had looked up before the meeting.',
  'What I had actually done was prepare. What the report said was that I had given ground.',
  'It was never corrected because it was a report to a committee I never saw, and I only learned what it said because a man on that committee mentioned it to me, kindly, about a year afterwards. ⚠ He said he had wondered at the time why I had been so defensive about the wiring.',
  '**I had not been defensive about the wiring. I had looked up a date.**',
]));
out.push(note('⚠ That text shows the full mechanism: one verb, a committee the writer never saw, a year\'s delay, and a reader who formed a view of the writer\'s character from a word the writer never said. ⚠ Read it aloud. It makes the case better than the Language box.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what they had actually said_ — "2017, looked up before the meeting"   ✓ _the reporting verbs named and their claims identified?_ — yes: *conceded*   ? _who would have had to change it, and were they asked?_ — "the report\'s author, and nobody ever asked because nobody knew"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Almost none was corrected, ⚠ **and in most the writer had intended nothing at all** — which is the point of the cycle. These words do their damage without anybody meaning them, and the only defence is a habit: **would the person named sign this sentence?**'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I went through last month\'s minutes. Four *pointed out*s and one *admitted*. ⚠ Three of the four *pointed out*s had no corrected person at all, so each one implied a loser who had said nothing. All five are now *said* or *reported*, with a note of the amendment.']));

// ===================== 10.5 =====================
out.push(pb());
out.push(h2('10.5  What was said and what was meant'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ Insist on both halves: the words, then the reading. Most learners give only the reading and believe they are reporting.'));
out.push(p('**b**  The second. The first joins the writer\'s conclusion to the speaker\'s words with *which means*, so that the two can never be separated again.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 That the conclusion may be right and ⚠ **is not a report** — *in April, when somebody reads this, they will not be able to tell what he said from what you thought*.  2 ⚠ **Its own sentence, in her own name** — *and then it can be argued with*.'));
out.push(note('⚠ Two things to draw out. **First**, reporting all three of the things he said produced a **better** reading than reporting one: *not refused but not before April* is more useful than *no*. **Second**, Mr Ayoub\'s closing formulation: *the discipline is not to stop deciding; it is to keep the decision in a sentence of its own, so that the next person can disagree with the decision without having to doubt the report.*'));
out.push(p('**Language box – Practise (samples):**  1 _He said they would review it in April. I understood that to mean it will not be considered before then._  2 _She said she would see what she could do. My reading is that she has not decided and does not want to be asked again this week._  3 _He said nobody had complained. ⚠ I understood that to mean nothing is known either way, because he also said he had sold four._  4 _She said it was not normally something they did. I understood that to mean it is possible and will cost more._  5 _He said to leave it with him. I may be wrong, but I read that as nothing happening before Friday, because he also said he was away until Thursday._'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['B', 'Your note says she said to leave it with her, which means she is sending a replacement.'],
  ['A', 'That is what it means.'],
  ['B', 'It may be. What did she say?'],
  ['A', 'To leave it with her.'],
  ['B', 'And nothing else?'],
  ['A', 'She said she was away until Thursday. And that the warehouse was being counted this week.'],
  ['B', 'So she said three things and your note has one of them and your conclusion fixed to it. ⚠ Now read the three together.'],
  ['A', '…Nothing will happen before Friday, and she has not said she will send one.'],
  ['B', 'Which is a different note, and a more useful one, and you got there by writing down the two things you had left out.'],
]));
out.push(note('⚠ The pattern is consistent across this cycle and worth naming: **the parts a writer leaves out are the parts that do not fit the reading** — and putting them back usually produces a better reading rather than no reading. ⚠ That is an argument from usefulness, which works where an argument from scruple does not.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the report and the interpretation as two sentences, then whether the fuller report produced a better reading. **Typical errors:** _he said he would review it which means no_ · _I understood that it means no_ (needs *to mean*) · _he made clear that…_ · and the content fault, which is reporting only the part that supports the reading.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What was actually said, in full', 'My reading, in my own name'], [
  ['that the committee had not met; that he would put it on the April list; that the figures were the right figures to send', 'I understood that to mean not refused, and not considered before April'],
  ['to leave it with her; that she was away until Thursday; that the warehouse was being counted', 'I understood that to mean nothing before Friday — and she has not said she will replace it'],
  ['that nobody had complained; that he had sold four; that two went to his brother', '⚠ I understood that to mean nothing is known either way'],
  ['that it was not normally something they did', 'My reading is that it is possible and will cost more. I may be wrong.'],
], [3, 2.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"He said the committee had not met, that he would put it on the April list, and that our figures were the right figures to send. I understood that to mean the application has not been refused and will not be considered before April, and I may be wrong because the committee not meeting is also what somebody says when a thing is going through."']));
out.push(note('⚠ Count how many readings changed once the full report was given. ⚠ **About half** — and in nearly all of those the new reading was better, not merely more cautious, which is the finding to give the class.'));
out.push(stage('5', 'Read'));
out.push(p('1 That he had received the letter of the 24th; that the credit committee had not met in November; that he would put the facility on the April list; that the quarterly figures were *the right figures to send*; and that he could not say anything about the outcome and would not be drawn.  2 ⚠ *The committee has not met* is also what somebody says when a thing is going through — and *I have read it as a delay because I expected a delay, and that is a reason to doubt my reading rather than a reason to trust it*.  3 That he **asked** whether the 14.2 covered the whole quarter: *he would not have asked that unless somebody is going to compare it with something* — it is **in the questions, not in the interpretation**.'));
out.push(note('⚠ Question 3 is 10.2 paying off inside 10.5 and it is worth naming as such. An inference from **which questions were asked** is grounded in a fact the writer witnessed; an inference about **intent** is not. ⚠ The two feel identical when writing and are completely different in value.'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**NOTE OF A CALL. R. Nassif to the hotel\'s purchasing manager. 28 November, 9.20. Written at 9.35.**',
  '**What he said, in order.** That our quotation had been received. That he was leaving at the end of the month. That the renewal would be decided by *whoever picks this up*. That our prices had been *about where we expected*. That he had not been asked to recommend anybody.',
  '**What he asked.** Whether we would hold the quotation into January. Whether we had worked with their Aleppo site.',
  '**What I said.** That we would hold it to 20 December, which is when our steel price is held to. That we have not worked with Aleppo.',
  '⚠ **My reading, which is mine and not his.** I understood the call to mean the decision has not been taken and will be taken by somebody who has never dealt with us. **He did not say that.**',
  '⚠ **Why I may be wrong.** *He had not been asked to recommend anybody* could equally mean the decision is already made and needs no recommendation. I have read it the first way because I want the contract, and that is a reason to doubt me.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Everything said, including what does not fit the reading', '✓ *about where we expected*'],
  ['The reading in its own paragraph, in the writer\'s name', '✓'],
  ['*They did not say that*', '✓'],
  ['The direction of the writer\'s own expectation, named', '✓ *because I want the contract*'],
], [5, 1]));
out.push(note('⚠ *Because I want the contract* is the strongest version of the bias clause: it names a motive rather than an expectation. ⚠ Learners will offer *I may be wrong* and should be pushed to *I may be wrong because I want X*, which is checkable by the reader.'));
out.push(stage('6R', 'Share'));
out.push(p('The *why I may be wrong* paragraphs read out. **Ask which writer has named a real bias rather than a polite doubt.** ⚠ The test is whether the reader could use it: *I may be wrong* cannot be used; *I expected a delay* and *I want the contract* can.'));
out.push(stage('7', 'Write freely – sample (134 words)'));
out.push(sample(null, [
  'In 2021 somebody told my father that the landlord had said he *would be looking at the rents*. What my father was told was that the rent was going up.',
  'We spent about six weeks looking at two other yards, and one of them we nearly took, which would have cost us the Mezzeh trade entirely. In the end the rent went up by about four per cent at the review, which is what it had done every year.',
  'What the landlord actually said has never been recovered, because the man who heard it left in 2022 and there was no note. ⚠ **What there was, was a sentence in a letter from him to my father that read "he says the rent is going up" — and the "he says" was doing work that nobody could check even then.**',
]));
out.push(note('⚠ The ending identifies the exact mechanism: *he says* attached to a paraphrase is indistinguishable from *he says* attached to a quotation. ⚠ That is why the unit asks for the words first, in their own paragraph — a paraphrase introduced by a reporting verb is the hardest kind of error to detect later.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _what was actually said_ — "unrecoverable; the only record was a paraphrase introduced by *he says*"   ✓ _report and reading in separate sentences?_ — yes, in the retelling   ? _could the original words still be recovered now?_ — "no; the witness left in 2022"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the original words cannot be recovered in any of the three, ⚠ **because the only record is a note that already contains the reading.** ⚠ Close on that: the report is not preserved anywhere else, so if the note merges the two, the words are gone for good — which is why the discipline is about the moment of writing and not about memory.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I split a sentence from my own note of the galvaniser call. Report: he said the tank had been down two days. Reading: I took that to mean our work was late because of the tank. ⚠ Bias named: I wanted it to be his fault rather than our late drop-off, and our own note says Tuesday.']));

// ===================== 10.6 =====================
out.push(pb());
out.push(h2('10.6  The Monday meeting, in one page'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ *Where is it written* is the question that does the work; in most workplaces the answer is nowhere, or in somebody\'s notebook.'));
out.push(p('**b**  The second. The first records a topic; the second records a decision, an owner and a date, which are the only three things a minute exists to carry.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 Cut it — ⚠ *keep one line of **reason** against each decision and throw the rest away*, because the question anybody asks later is *why did we decide that*.  2 ⚠ **An action without an owner is a wish and an action without a date is a wish with a plan** — and *agreed by everybody* means *agreed by nobody*.'));
out.push(note('⚠ The objection paragraph is the most valuable thing in this cycle: **a unanimous decision and a decision taken over an objection are different decisions**, and if the second goes wrong, the person who objected was right and should be asked next time. ⚠ Most minutes record everything as agreed — *written to make the meeting look calm* — which is precisely how that information is destroyed.'));
out.push(p('**Language box – Practise (samples):**  1 _Agreed: one price list, printed Fridays, dated and initialled. Owner: Nadia. By: 5 Dec. Reason: two undated lists in use; a credit of 46,000._  2 _Agreed: the 14 recorded differences to be traced. Owner: Hala. By: 8 Dec._  3 _Agreed: a full recount of store 4. Owner: Y. Khalil. By: 19 Dec. Reason: the shelves have moved, so no reconciliation is possible._  4 _Deferred to 15 Dec, pending the quotes. Owner: N. Mansour to circulate by 8 Dec._  5 _Agreed: Ghouta to Wednesday and Friday. Objection: Y. Khalil — Friday is wrap day. Not resolved; the chair decided._'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Four items and nothing was decided. What do the minutes say?'],
  ['A', 'They say we discussed the van, the store room, the Ghouta day and the price list.'],
  ['B', 'That is a list of what was on the table. What happened to each?'],
  ['A', 'Nothing. We ran out of time on three and nobody would decide the fourth.'],
  ['B', 'Then it is four *deferred* entries, and each needs a date for the decision.'],
  ['A', 'That looks like a bad meeting.'],
  ['B', '⚠ It was a bad meeting. A minute that says *discussed* four times looks like a good meeting and tells nobody anything — **and in three weeks somebody will ask what we decided about the van and there will be no answer and no date either.**'],
]));
out.push(note('⚠ Role card 2 is the uncomfortable one and should be performed. *Discussed* is the verb that makes an unproductive meeting disappear, and four honest *deferred* entries with dates are worth more than a page of it — ⚠ and they also create the pressure that makes the next meeting decide something.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write four actions with owners and dates, then the objection with its name and what it would be worth in six months. **Typical errors:** _agreed that to print one list_ · _it was decided by all of us_ · _deferred_ with no date · and the content fault, which is a page of discussion and four actions with no owners.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Noted / Agreed / Deferred', 'Owner', 'By', 'Reason, and any objection'], [
  ['Agreed: one price list, Fridays, dated and initialled', 'Nadia', '5 Dec', 'two undated lists in use; a credit of 46,000'],
  ['Agreed: trace the three unbilled differences', 'Hala', '8 Dec', 'a live exposure and the auditor has asked'],
  ['Agreed: Ghouta to Wednesday and Friday', 'Nour', '4 Dec', '⚠ Objection: Y. Khalil — Friday is wrap day. Not resolved'],
  ['Deferred to 15 Dec: the second van', 'Nour', '8 Dec (quotes)', 'the hire was 1.8m against a once-only 400,000'],
], [2, 0.8, 0.7, 2.1]));
out.push(stage('4R', 'Report – sample'));
out.push(p('Read back with the names and dates stressed. ⚠ **Count the actions in the room with no owner, and the objections recorded.** The second count is usually nought — and when the class is asked whether anybody objected in those meetings, the answer is usually yes.'));
out.push(stage('5', 'Read'));
out.push(p('1 **Objection: Y. Khalil — Friday is the day the wrap arrives and he cannot be at the gate and on the forklift. Not resolved; the chair took the decision.** ⚠ And then: *if this goes wrong it will go wrong on a Friday morning and Mr Khalil said so on 1 December*.  2 That the hire option was costed at 1.8 million against a once-only loss of about 400,000 **and was dropped** — so it is not proposed again in March.  3 About twenty minutes on the auditor\'s visit, which produced no decision and no action: ⚠ *nothing is lost by its absence and I am recording that it happened so that nobody looks for it*.'));
out.push(note('⚠ The *not minuted, and deliberately* entry solves a real problem nobody names: a twenty-minute gap between the stated times with no explanation is what makes a reader doubt a minute. ⚠ One line removes the doubt and costs nothing.'));
out.push(stage('6', 'Write with help – sample (142 words)'));
out.push(sample(null, [
  '**WORKSHOP MEETING, 1 DECEMBER. Those present: R. Nassif (chair), S. Nassif, Khalil, Rami. 7.30 to 8.00.**',
  '**1 · The offcut list.** **Noted:** the back rack has not been measured since 2023. **Agreed:** everything over half a square metre to be listed with its thickness. **Owner:** Khalil. **By:** 8 December. **Reason:** we are buying sheet we already own.',
  '**2 · Nights on the guillotine.** **Agreed:** five to nine, not six to ten, from 15 December. **Owner:** Rami. **By:** 12 December (the key). **Reason:** the bus at ten past ten and the spray booth on the generator. ⚠ **Objection: S. Nassif — the insurance may not cover unattended evening working.** Not resolved; the chair took the decision pending the policy being read. ⚠ **If this goes wrong it will go wrong at a claim, and Samira said so on 1 December.**',
  '**3 · The micrometer.** **Agreed:** two new ones, and the old one destroyed rather than kept as a spare. **Owner:** R. Nassif. **By:** 5 December. **Reason:** a spare that reads low is worse than no spare.',
  '⚠ **Not minuted, and deliberately.** About fifteen minutes on the hotel contract, which produced no decision.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Those present, the chair named, and the times', '✓'],
  ['An owner and a date on every action', '✓ all three'],
  ['One line of reason on each decision', '✓'],
  ['Any objection, with the name and when it will matter', '✓ *at a claim*'],
], [5, 1]));
out.push(note('⚠ *The old one destroyed rather than kept as a spare* with the reason *a spare that reads low is worse than no spare* is the best kind of one-line reason: it stops somebody helpfully retrieving the micrometer from a drawer in March.'));
out.push(stage('6R', 'Share'));
out.push(p('Objection lines read out. **Ask which objection each writer would want on the record if they had made it.** ⚠ Everybody wants their own objection recorded and almost nobody records other people\'s, which is the asymmetry to name.'));
out.push(stage('7', 'Write freely – sample (137 words)'));
out.push(sample(null, [
  'We moved to one supplier for sheet in 2022 to get a better price. Khalil said at the time that one supplier means one lorry and one breakdown, and he said it in a meeting with four people in it.',
  'Nothing was written down. The decision was recorded as agreed.',
  'In February 2024 their lorry was off for eleven days and we bought at retail for a week and a half, which cost about 1.4 million.',
  '⚠ Khalil was not asked. **He was not asked in 2024 and he was not asked when we reviewed it afterwards either, and the reason is simply that nobody remembered he had objected** — including, I think, Khalil, who did not say *I told you* once.',
  '**If one line had been written in 2022, he would have been the first person in the room in 2024.**',
]));
out.push(note('⚠ *Nobody remembered he had objected — including, I think, Khalil* is the detail that makes this text excellent. ⚠ The loss is not that somebody was denied credit; it is that the company could not find the person who had already thought about the problem. That is the argument for the extra line, and it is not about fairness at all.'));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _who objected_ — "Khalil, in 2022, in front of four people"   ✓ _the house format used, with owners and dates?_ — yes, in the retelling   ? _was the objection recorded, and were they asked next time?_ — "no, and no — and he had forgotten too"'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Usually the objection was not recorded, and usually the objector was not asked next time. ⚠ **The two answers are almost always the same**, which is the whole case for the line — and the sharpest version of it is that the objector often forgets as well, so the record is the only place the knowledge could have survived.'));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['Minuted Monday\'s meeting in the house format. Three actions, all with owners and dates, one objection with Samira\'s name on it, and a line saying what I had not minuted. ⚠ Rami asked why his name was on an action he had agreed to in passing. **Which is exactly what the owner line is for.**']));

// ===================== 10.7 =====================
out.push(pb());
out.push(h2('10.7  Review & Mediate: telling the person who was not in the room'));
out.push(stage('1', 'Get ready – Unit 10 quiz'));
out.push(p('**1** **The date of the saying** — the backshifted tense is measured from it and without it there is nothing to measure from.  **2** ⚠ **What they already suspect** — and it is the only part of an interview nobody writes down.  **3** Whose the **instruction** is, whose the **deadline** is, and what you have **paid** for it.  **4** *Admitted* claims it was got out of them, against their interest. The test: ⚠ **would they sign this sentence?**  **5** In **its own sentence, in your own name** — so that a reader can reject the reading and keep the report.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A   **b**  1 That Abu Yasser objected, what he said, that it is in the minutes with his name on it, and ⚠ **that it was not resolved — Mr Ayoub took the decision**.  2 That the Friday run is the one with the two Harasta drops at the far end, because they are shut on Wednesdays — ⚠ *so Friday is the long run and it is also the morning with no forklift*.'));
out.push(note('⚠ Fadi\'s line is the unit\'s finding: *nobody in that room drives it* — and then, better, *I would not have known about the wrap either, so between us the objection is twice as bad as he made it sound.* ⚠ **Two partial objections from two people who each hold half are a complete objection**, and they will never meet unless somebody carries one to the other.'));
out.push(p('**Language box – Practise (sample):**  _"You were not in the meeting and it is your Friday. Abu Yasser objected: he said he cannot be at the gate and on the forklift on a Friday morning. It is in the minutes with his name on it and it was not resolved. What do you know about Fridays that I do not?"_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'It was agreed on Monday that all complaints must be in writing. You were not there and you take them.'],
  ['B', 'Did anybody object?'],
  ['A', 'Nadia did. She said a written requirement would slow a settlement. Not resolved; the chair decided.'],
  ['B', 'There is a number nobody has. We settle about a dozen a year on the telephone, same day, and I have never written one of them up.'],
  ['A', 'A dozen.'],
  ['B', 'So from Monday either a dozen settlements a year are irregular, or they stop happening and a dozen customers wait a week. ⚠ **Nadia said it would slow things down. She did not know it would make last year\'s dozen look like a dozen breaches.**'],
  ['A', 'Then that is the half she did not have, and I will put both to him.'],
]));
out.push(note('⚠ Note the shape: Nadia\'s objection was about **speed** and B\'s half is about **the status of past settlements** — a different and larger problem. ⚠ Learners often expect the absent person to confirm the objection; far more often they supply a different objection that only they can see.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the decision, the recorded objection and the absent person\'s half, then whether the two halves together change the decision. **Typical errors:** _you were not there and it is you Friday_ · _X objected it is in the minutes_ (comma splice) · _he said he cannot to be at the gate_ · and the content fault, which is reporting the decision without the objection — ⚠ which leaves the absent person unable to tell a considered decision from a careless one.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'What was decided and who objected', 'Their half of it', 'What the two halves add up to'], [
  ['Fadi', 'Ghouta to Wed and Fri; Y. Khalil objected (wrap day, not resolved)', 'Friday is the long run — two Harasta drops, shut Wednesdays', 'the long run on the morning with no forklift'],
  ['Hala', 'complaints in writing; N. Sayegh objected (slows settlement)', 'about a dozen a year are settled by telephone the same day', 'either a dozen irregular settlements or a dozen customers waiting'],
], [1, 1.6, 1.4, 1.6]));
out.push(stage('4R', 'Report – mediation'));
out.push(sample('Sample mediation', [
  '"The minute recorded that Abu Yasser could not be at the gate and on the forklift on a Friday. Fadi added that Friday is the long run, because the two Harasta drops are shut on Wednesdays — which nobody in the room knew, because nobody in the room drives it. Together they mean the long run falls on the morning with no forklift."',
  '⚠ **The unit\'s mediation, named as the tenth unit of this book:** an objection in a meeting is almost always **half** an objection, because the person in the room knows half of it — **and the other half belongs to somebody who was not invited, so the two halves never meet unless somebody carries one to the other.**',
  '⚠ And the second half of the finding, from the dialogue: *if he decides to do it anyway, it will be on the record that two people said what would break and what it would cost, and in February nobody will be looking for somebody to blame — they will be looking at the minute.*',
]));
out.push(stage('5', 'Read – exam practice (Reading Part 5)'));
out.push(table(['Q', '1', '2', '3', '4', '5'], [['Answer', 'B', 'C', 'A', 'B', 'C']], [1, 0.9, 0.9, 0.9, 0.9, 0.9]));
out.push(note('⚠ Q1 is the item that tests the unit: *recorded and the decision was taken anyway* is the whole purpose of minuting an objection, and a learner who answers A has read *objection* as *objection upheld*. ⚠ Q3 rewards reading the last clause of item 3, which most candidates will treat as commentary rather than content — in this format it is the prediction, and it is the most testable sentence on the page.'));
out.push(stage('6', 'Write with help – sample (73 words)'));
out.push(sample('Exam task — Writing Part 2 (60 to 80 words)', [
  'Fadi — Ghouta moves to Wednesday and Friday from 8 December. You were not in the meeting and it is your Friday. Abu Yasser objected: he cannot be at the gate and on the forklift on a Friday morning, because that is when the wrap comes. It is in the minutes with his name on it and it was not resolved. What do you know about Fridays that nobody in that room would?',
]));
out.push(note('⚠ That sample is 73 words and keeps all three points. ⚠ The economy comes from dropping the reason for the change entirely — the reader does not need the Saturday road closure, and a candidate who includes it will lose either the objection or the question, both of which are marked.'));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What was decided, and when it starts', '✓'],
  ['Who objected, and that it was not resolved', '✓'],
  ['A question asking what they know', '✓'],
  ['60 to 80 words — count them', '✓ 73'],
], [5, 1]));
out.push(stage('7', 'Write freely – sample (138 words)'));
out.push(sample(null, [
  '**THURSDAY MEETING, 4 DECEMBER. Those present: R. Nassif (chair), S. Nassif, Khalil. 7.30 to 7.55.**',
  '**1 · The insurance schedule.** **Noted:** the cash-on-premises limit is 300,000, which is less than a Thursday\'s takings. **Agreed:** banking twice weekly rather than weekly, from 11 December. **Owner:** S. Nassif. **By:** 11 December. **Reason:** the limit, which nobody had read since 2019.',
  '**2 · Evening working.** **Deferred to 18 December**, pending the policy wording on unattended machines. **Owner:** R. Nassif (to telephone the broker). **Reason:** the schedule may exclude it and nobody knows.',
  '**3 · The offcut list.** **Agreed:** the back rack to be marked *estimated* where it has been. **Owner:** Khalil. **By:** 8 December. ⚠ **Objection: S. Nassif — an estimated figure in a stock list will be treated as a count by anybody who reads it later.** Not resolved; the chair decided to mark it and review in January.',
  '⚠ **Not minuted, and deliberately.** Ten minutes on the hotel renewal, which produced no decision.',
]));
out.push(stage('HW', 'Homework – sample (≈55 words)'));
out.push(sample(null, ['I told Rami about the evening-working decision and the insurance objection. He said the spray booth extraction is on the same circuit as the guillotine, which nobody at the meeting knew and which means running both in the evening may not be possible at all. ⚠ That is the second half of Samira\'s objection and it arrived in twenty seconds.']));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 10 check – answers and marking'));
out.push(p('**A  Language** (8 marks — one each)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'b', 'c', 'a', 'b', 'c', 'b', 'c']], [1, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7, 0.7]));
out.push(note('⚠ Questions 3, 4 and 5 are the reported-question group and should be marked together: *whether* for a yes-or-no question, **statement word order** for a wh-question, and *not to* + infinitive for a negative instruction. ⚠ Q4 is the one that persists longest, because *what did I do* is what the ear remembers.'));
out.push(note('⚠ Questions 6, 7 and 8 are the unit. **6** is the neutral verb; **7** rewards *reported* over *admitted* for something raised unprompted; **8** is 10.5 in one line. ⚠ A learner who gets 6 and misses 7 has learned to avoid *admitted* and has not yet seen that *said* also loses a fact worth keeping.'));
out.push(p('**B  Listening** (5 marks — one each)'));
out.push(table(['Decided, and from when', 'Who objected, and what he said', 'Resolved?', 'What Fadi adds', 'What Nour will do'], [[
  'Ghouta to Wednesday and Friday, from Monday week', 'Abu Yasser — he cannot be at the gate and on the forklift on a Friday, when the wrap comes',
  'no — the chair decided', 'Friday is the long run: two Harasta drops, shut Wednesdays', 'put both halves to Mr Ayoub and say it came from both of them',
]], [1.3, 1.8, 0.8, 1.6, 1.6]));
out.push(note('⚠ Gap 3 is one word and is the one most often left blank, because *not resolved* sounds like an absence rather than a fact. ⚠ It is the most important fact in the exchange: a decision taken over an unresolved objection is a different decision, and the absent person is entitled to know which kind they are carrying.'));
out.push(p('**C  Writing** (7 marks)'));
out.push(sample('Sample (61 words)', ['**1 · The offcut list.** Agreed: everything over half a square metre listed with its thickness. Owner: Khalil. By: 8 December. Reason: we are buying sheet we already own. **2 · Evening working.** Deferred to 18 December, pending the policy. Owner: R. Nassif. **3 · Marking estimates.** Agreed: the back rack marked *estimated*. Objection: S. Nassif — an estimate will be read later as a count.']));
out.push(box('Marking the Unit 10 check (20 marks)', [
  table(['', 'Marks', 'What earns them'], [
    ['**A Language**', '8', 'One per question. No half marks.'],
    ['**B Listening**', '5', 'One per gap. Gap 3 is one word and is required.'],
    ['**C Writing**', '7', 'Three items using **noted / agreed / deferred** (2) · an **owner** on every action (2) · a **date** on every action (1) · one line of reason (1) · ⚠ an **objection with its name** (1).'],
  ], [1.2, 0.7, 4]),
  '⚠ **The two marks for owners are this check\'s version of the series\' running demand** — Unit 4\'s numbers, Unit 5\'s sources, Unit 6\'s figures, Unit 7\'s first-hand paragraph, Unit 9\'s overturning condition. **An action with no owner scores nothing for that action**, however well minuted: *agreed by everybody* means agreed by nobody.',
  '⚠ Give the objection mark for an objection **with a name attached**, even if the writer agrees with the decision. ⚠ Do **not** give it for *some concern was expressed*, which is the agentless passive of Unit 5 arriving in a minute, and which protects nobody and preserves nothing.',
  '⚠ Where a learner has honestly written three *deferred* entries because nothing was decided, **give full marks** and say so. They have minuted a bad meeting accurately, which is harder than minuting a good one.',
], C.lyellow, C.orange));
out.push(p('**Teacher\'s note — the three faults to watch in Unit 10**'));
out.push(p('**1 The claim and the finding in one sentence.** *She said she had sent it but the post book shows nothing* reads as a report and is an accusation: the *but* does the work and nobody can take it out later. ⚠ The repair is mechanical and should be drilled from 10.1 — **two sentences, one theirs and one yours** — and the argument for it is not fairness but recoverability: in six months the only record is the note, and a merged sentence cannot be unmerged.'));
out.push(p('**2 The reporting verb chosen for weight.** Nobody writes *admitted* to attack a colleague; they write it because the sentence feels more serious, and the seriousness lands on the person. ⚠ Do not moralise. Give the class the two facts from the dialogues: ⚠ **the minute is permanent and there is no other version**, and ⚠ **anybody you write a sentence about is entitled to read it.** Then give them the one-question test — *would they sign this sentence?* — and have them apply it to a document they wrote last month. ⚠ Expect at least one learner to find something they will want to amend, and let them.'));
out.push(p('**3 The interpretation reported as a statement.** *Which means*, *effectively*, *made it clear that* — all the same move, all invisible to the writer. ⚠ The thing to insist on is not caution but **completeness**: report everything that was said, including the parts that do not fit the reading, and the reading usually improves. ⚠ That is the finding from 10.5 stage 3 and it is the only version of this instruction a busy person will adopt, because it offers them something rather than taking something away.'));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 1 · Syria Edition · Unit 10 · Answer Key');
