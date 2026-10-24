// Proactive Business English B2 · Syria Edition · Book 1 · Unit 2 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 2  Taking Yourself Out of the Sentence'));
out.push(p('_Proactive Business English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open, the key gives a **full sample answer**. Samples show one good B2 answer – learners\' own answers will be different and that is correct.',
  '⚠ **This unit is the one where the grammar and the ethics are the same lesson, and you cannot teach half of it.** **The passive, nominalisation and hedging are the three things every B2 syllabus covers and they are usually taught as style.** ⚠ **Here they are taught as consequences**: who ends up in a sentence, who ends up carrying it, and who finds out from a driver three weeks later.',
  '⚠ **Do not let the class leave with the rule *avoid the passive*.** **It is wrong, this unit says so four times, and a learner who adopts it will de-passivise *the order was accepted on the 14th* and make the page worse.** ⚠ **The rule is: ask *by whom?* and then ask what the space is doing.** **Two questions, every time, and the answer decides.**',
  '⚠ **The unit has a victim and he is a character the class already knows.** **Abu Yasser has been in this course since A2 Unit 6, he is fifty-six, he has never put a wet carton in a rack, and in 2.7 he says the sentence the whole unit exists for: *the worst part is not being blamed; it is being blamed by a page you cannot reply to.*** **Some learners will recognise themselves as the writer and some as Abu Yasser**, and both recognitions are useful.',
  '⚠ **Word counts.** Stage 6 asks for **80 words or more** and stage 7 for **200 to 240**. ⚠ **Cycle 7\'s exam task is Writing Part 2 and asks for 120 to 140 words**, because that is what B2 Business Vantage Writing Part 2 asks for, and it carries **20 marks against Part 1\'s 10**. **Unit 1 practised Part 1 at 40–50 words; the two alternate through the book.**',
  '⚠ **And the exam practice is Reading Part 5, error correction, which is 12 questions.** **Three things lose marks and all three are taught in the Writer\'s box: a correct line is answered CORRECT and not left blank · the extra word must be grammatically wrong and not merely unnecessary · answers go in capital letters.** ⚠ **The second is the one learners get wrong**: they hunt for flabby words, and the task is hunting for ungrammatical ones.',
], C.grey, C.navy));

// ===================== 2.1 =====================
out.push(h2('2.1  The passive that hides and the passive that clarifies'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The second half is the one to press: did you mind?** **Most learners did not mind at all**, which is the right answer and is the evidence that the agentless passive is often correct.'));
out.push(p('**b**  *The order was accepted on the 14th* **clarifies** — the actor is noise. *It was felt that the figures needed review* **hides** — somebody has an opinion and has stepped out of the sentence.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Ask *by whom?* out loud, and then ask what the space is doing.**  2 Because *felt* is somebody\'s opinion, and the sentence gives it ⚠ **the authority of the building and the cost of nobody.**'));
out.push(p('⚠ **The last exchange of the track is the one to replay.** **Nour asks what is wrong with *the nine cartons were found to be damp* and Nadia answers with a question: *found by whom?*** ⚠ **Nour found them, on two dates, and had taken herself out of a sentence where she belonged.** **Nadia\'s image is the one learners remember: *a hole the shape of a person, and a building reading that sentence will put somebody in it — and it will not put you in it, because you wrote it.*** **That asymmetry is the whole unit and it is in the second track.**'));
out.push(p('**Language box – Practise (sample, five passives):**  _"**1** *The account was opened in July.* By the bank — the actor is noise, and the space is empty. **2** *It was decided not to open on Fridays.* ⚠ **By Mr Ayoub, in the yard, in August — vacated, and the building has filled it with nobody at all, which is why the question keeps coming back.** **3** *The gate sheet is signed by name.* By whoever counted — empty, and the phrase *by name* does the work. **4** *It has been suggested that the Ghouta run be reviewed.* ⚠ **By me — vacated, and I borrowed the building\'s coat.** **5** *Nine cartons were found to be damp.* ⚠ **By me, twice — vacated, and the building put Abu Yasser in it.**"_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The nine cartons in the fourth store were found to be damp.'],
  ['B', 'Who will the building put in that space?'],
  ['A', 'Nobody. There is no name in it.'],
  ['B', 'Who racks the fourth store?'],
  ['A', '…Abu Yasser. One man.'],
  ['B', 'Then the building has a name and you have supplied the shape for it.'],
  ['A', 'That is not what I meant by the sentence.'],
  ['B', 'It never is. Write it with the finder in it and read it back to me.'],
  ['A', 'I counted the fourth store twice, on the 8th and the 11th, and found nine damp cartons in the north corner.'],
  ['B', 'Now nobody is in the space, because there is no space.'],
]));
out.push(p('⚠ **The last line of that sample is the one to put on the board.** ⚠ **The remedy is not a kinder space; it is no space** — **and the only way to have no space is for somebody real to be in the sentence.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write each sentence, the answer to *by whom?*, and **empty** or **vacated**. **Typical errors:** marking everything vacated, which is the overcorrection this cycle is written against · ⚠ **and the content fault, which is a learner who cannot name who the building would supply**, usually because they are thinking about the sentence rather than about their workplace. **Ask who is physically nearest the thing; the answer arrives at once.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The sentence', 'By whom?', 'Empty or vacated', 'Who the building would put in it'], [
  ['*The account was opened in July.*', 'the bank', '**empty**', '—'],
  ['*It was decided not to open on Fridays.*', '⚠ **Mr Ayoub, in August**', '⚠ **vacated**', '⚠ **nobody — and so the question reopens twice a year**'],
  ['*It has been suggested that the run be reviewed.*', '⚠ **me**', '⚠ **vacated**', 'somebody senior, which is what I wanted'],
  ['*Three cartons were mismarked on the 12th.*', 'the man on the second rack', '**empty, on purpose**', 'Fadi — ⚠ **and that is why the remedy sentence must be beside it**'],
  ['*Nine cartons were found to be damp.*', '⚠ **me, on two dates**', '⚠ **vacated**', '⚠ **Abu Yasser, and it was**'],
], [2, 1.2, 1.2, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my five, two were empty and three were vacated. The worst was *nine cartons were found to be damp*, and the building would put Abu Yasser in it, and the building did."', '⚠ **Count the vacated spaces on the board and then ask the second question: how many had the writer standing just outside?** **It is usually most of them, and naming that is the moment the cycle lands** — ⚠ **the writer is the one person who can never be put in the hole, because the hole is visibly theirs.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** Version 1: **41 words, three passives, nought actors.** Version 2: **58 words, seventeen more, four actors** — *me, me, us-and-me, and nobody-and-nobody.*  **2** ⚠ **The third row, *it has been noted*.** **It was her, noticing, in that sentence, for the first time: there was no note, no noter and no noting**, and the words were chosen because they made the observation sound as though it came from further up the building than her own desk.  **3** *The roof has not been inspected* **reads as a failure**, which somebody owns. ⚠ *Nobody has inspected it and nobody was asked to* **reads as a gap** — **and a gap belongs to whoever draws up the list of what gets inspected, which is the writer.**'));
out.push(stage('6', 'Write with help – sample (134 words)'));
out.push(sample(null, [
  '**THE FRIDAY NOTE, PARAGRAPH 2 — TWO VERSIONS OF ONE PARAGRAPH. 5 February. H. Mourad.**',
  '**What I wrote.** _The Saturday figures were taken from the daily sheet. It is understood that the trade counter may be included. The Friday proposal was postponed in August pending the resolution of the generator question._',
  '⚠ **Three passives, and one actor — and the one actor is a sheet. Thirty-four words and nobody in them.**',
  '**What I should have written.** _I took the Saturday figures from the daily sheet. I do not know whether the trade counter is in them and I have not asked Lina, who would know. Mr Ayoub put the Friday proposal off in August until the generator was sorted out, and it was sorted out in the first week of September._',
  '⚠ **Fifty-six words, twenty-two more, and four actors: me, me-and-Lina, Mr Ayoub, and the generator.**',
  table(['The sentence', 'Who was in the space', 'What happened'], [
    ['*were taken from the daily sheet*', '⚠ **me**', 'read as a property of the sheet'],
    ['*it is understood that*', '⚠ **me, guessing**', '⚠ **read as a shared understanding that does not exist**'],
    ['*was postponed pending the resolution*', '⚠ **Mr Ayoub, in August**', '⚠ **read as a condition that is still running** — it stopped running on 7 September'],
  ], [1.7, 1.7, 2.6]),
  '**The sentence I am least able to defend is the second.** *It is understood* was me, guessing, and there is no understanding anywhere: I have not asked the one person who knows.',
  '**And the two versions differ most at the third.** The first reads as a condition still in force; the second reads as a condition met four months ago — and a met condition belongs to whoever noticed, which is me, and I noticed in September.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Actors counted, not passives', '✓ ⚠ **and the one actor in version 1 is a sheet, which is the best line in the sample**'],
  ['Both word counts, with the honest version longer', '✓ 34 and 56'],
  ['The sentence that borrowed somebody else\'s authority', '✓ *it is understood*'],
  ['A failure distinguished from a gap', '✗ ⚠ **the third row is a condition, not a gap** — **the distinction is right and the label is not**'],
  ['At least one passive left exactly as it was', '✗ ⚠ **all three were rewritten** — *were taken from the daily sheet* **could have stayed**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: at least one passive left as it was. The line I am marking is **_I took the Saturday figures from the daily sheet._** What I found: nothing was wrong with the passive version. Where the figures came from matters and who fetched them does not, and you have spent a word on yourself to prove a point about honesty."_ ⚠ **That review is correct and it is the one to read out**, because the overcorrection is the fault this cycle produces.'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the sentence they can least defend. ⚠ **The class answers one question: who would the building have put in the space?** ⚠ **Where the answer is *somebody senior*, the writer was borrowing authority; where it is a colleague\'s name, the writer was displacing blame.** **Both are worth naming out loud and they are different faults.**'));
out.push(stage('7', 'Write freely – sample (221 words)'));
out.push(sample(null, [
  'The sentence was eleven words long and it was about a stock discrepancy in a shop I had left two months earlier.',
  'What it said was *a discrepancy of some 40,000 was identified in the March count*. It was written by an accountant who had never been to the shop, and it was true. What it did not say was that the discrepancy was identified by me, in writing, in January, and that I had put it in a note which was read and not acted on because the only remedy was to close the counter for a day.',
  'I heard about the sentence from a cousin who works in the same company. By the time I heard it, it had been read by five people, one of whom had interviewed me for a job in that company six weeks before and had not given it to me.',
  'I said nothing, because there was nothing to say to. My name was not in the sentence. Writing to an accountant to explain that an unnamed discrepancy was identified by me would have sounded like a man answering a charge nobody had made.',
  'What the sentence should have said is *the discrepancy was identified by the shop in January and reported in writing*. Eight words longer. The accountant did not know, and nobody who knew ever told him, and he is not the person at fault in this story.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: who was in the space and who got put there. The line I copied is **_Writing to an accountant to explain that an unnamed discrepancy was identified by me would have sounded like a man answering a charge nobody had made._** What I found: that is the trap stated exactly — the sentence cannot be answered without appearing to confess to it."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three subjects to have heard from somebody else, and expect two of three writers never to have found out.** ⚠ **That is the mechanism to name at the end of the cycle: the writer never learns the sentence landed, so the next one is written the same way** — **which is the sentence in 2.7\'s mediation task, and the class will meet it again there.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part is the transferable one and it is quick**: *by whom?* of every passive on one page, each space marked empty or vacated. ⚠ **Collect the ratio.** **A page with no empty spaces at all has been overcorrected and a page with no vacated ones has not been read properly.**',
], C.lblue, C.navy));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  It was decided — and by whom'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect at least one learner to realise, out loud, that they do not know who took a decision they have been administering for years.** **That is the cycle working before it has started.**'));
out.push(p('**b**  **First distance:** *Mr Ayoub decided on 1 October.*  **Middle:** *it was decided by Mr Ayoub on 1 October.*  **Bare:** *it was decided on 1 October.* ⚠ **The bare one fails the test** — you cannot add *and nobody needs to know who*.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **When a reader has to go and ask about it** — **a sentence that says *it was decided* and nothing else is a sentence a reader cannot act on**, and he goes to whoever is nearest.  2 ⚠ **For when the actor is owed and the sentence is not about them** — *the 500,000 limit was set by Mr Ayoub in 2019*, where the limit is still the subject and the reader is looking at the limit.'));
out.push(p('⚠ **The fact to make the class sit with is the ten months.** **Abu Yasser has apologised to two Ghouta customers for a change he could not trace, and he has never named anybody, because he did not know either.** ⚠ **An untraceable decision is carried by whoever is standing in front of the person who minds** — **and that is never the person who took it.**'));
out.push(p('**Language box – Practise (sample, four):**  _**1** *It was decided to stop Saturday deliveries.* → ⚠ **first distance: Mr Ayoub stopped Saturday deliveries in 2021** — the drivers have been explaining it for two years. **2** *The signing limit was raised.* → **middle: the limit was raised to 500,000 by Mr Ayoub in 2019** — the limit is what the reader wants. **3** *It was decided to close on the first Friday of each month.* → **bare is correct: and nobody needs to know who.** **4** *It was agreed that the plater\'s increase would be paid.* → ⚠ **first distance: Bassel and I agreed to pay the plater\'s twelve per cent in March** — **because the export price list still does not reflect it and somebody will ask why.**_'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'The note says the Ghouta days were changed in March.'],
  ['B', 'Changed by whom?'],
  ['A', 'By me. On 1 March.'],
  ['B', 'Is anybody else carrying it?'],
  ['A', 'Abu Yasser has been apologising for it for ten months.'],
  ['B', 'Does he know whose it was?'],
  ['A', '…No. He has never asked and I have never said.'],
  ['B', 'Then the name goes in, and not for credit. Which distance?'],
  ['A', 'The first. *I moved the Ghouta run to Mondays and Wednesdays on 1 March.* Because a reader who minds has to know where to go, and at the moment they go to the yard.'],
  ['B', 'And can you say *and nobody needs to know who*?'],
  ['A', 'No. Two customers need to know who, and one of them has been told by the wrong man for ten months.'],
]));
out.push(p('⚠ **The question to insist on is *does he know whose it was?*** **Learners assume the carrier knows and resents it.** ⚠ **Usually the carrier does not know, which is worse: they have been apologising without being able to explain, and some of them have assumed it was their own fault.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence at all three distances and ring the right one. **Typical errors:** the middle form used where the person is the point (*the Ghouta run was moved by Nour* keeps the run as subject when the reader needs the person) · a bare form defended with *everybody knows anyway*, which is the opposite of the test · ⚠ **and the content fault, which is a learner who chooses the first distance for everything** because naming feels honest. **Ask what the reader is looking at.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The decision, as reported', 'Who actually took it', 'Who has been carrying it', 'Distance, and why'], [
  ['*the Ghouta days were changed*', 'me, 1 March', '⚠ **Abu Yasser, ten months**', '**first** — the reader must know where to go'],
  ['*the signing limit was raised*', 'Mr Ayoub, 2019', 'nobody', '**middle** — the limit is the subject'],
  ['*it was decided to close on first Fridays*', 'the company', 'nobody', '**bare** — nobody needs to know who'],
  ['*the plater\'s increase was accepted*', 'Bassel and me, March', '⚠ **Hala, who quotes the old price**', '⚠ **first** — she has been apologising to customers'],
  ['*the store was turned over to overflow*', 'me, June', '⚠ **Abu Yasser again**', '**first** — and it is in the January count paper now'],
], [1.7, 1.2, 1.4, 1.7]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"It is reported as *the plater\'s increase was accepted*. It was taken by Bassel and me in March. Hala has been carrying it for ten months, because she quotes from a price list that does not have it in. I would write it at the first distance: *Bassel and I accepted the plater\'s twelve per cent in March, and the export list has not been revised since.*"', '⚠ **Count the decisions in the room that somebody is carrying who did not take them, and then ask how many of those carriers know whose it was.** **The second number is always much smaller than the first**, and the gap between the two numbers is the content of this cycle.']));
out.push(stage('5', 'Read'));
out.push(p('**1** A reader of version 1 ⚠ **supplies the man nearest the shelf, which is what happened** — and it cost Abu Yasser a fortnight of being looked at.  **2** ⚠ **Because the actor is at the end of a passive, where it reads as a boast or a defence.** **A name added at the end of a passive is a name that has been added under pressure**, and version 3 puts it at the front where it is simply the subject.  **3** ⚠ *Which was my arrangement.* **Nobody asked for it, nobody would have found it, and it converts a report about damp cartons into a report that includes a decision of the writer\'s** — ⚠ **and version 4 is the only one in which Abu Yasser does not appear at all.**'));
out.push(stage('6', 'Write with help – sample (139 words)'));
out.push(sample(null, [
  '**THE OLD PRICE LIST — THE SAME EVENT, WRITTEN FOUR WAYS. 6 February. H. Mourad. For Mr Ayoub, with the fourth recommended.**',
  table(['', 'The version', 'What a reader does with it'], [
    ['**1**', '*Some customers have been quoted the old export price.*', '⚠ **supplies the counter, which is Lina, three weeks in**'],
    ['**2**', '*Some customers have been quoted the old export price by me.*', 'reads as a confession tacked on'],
    ['**3**', '*I have quoted eleven customers the old export price since March.*', 'acts on it — the figure and the date'],
    ['**4**', '⚠ **_I have quoted eleven customers the old export price since March, because the list I quote from is revision 2 of 1 April and the plater\'s twelve per cent was accepted on 1 March and has never been put on it. The eleven are listed overleaf. Nobody asked for the list to be revised, and asking is mine._**', '⚠ **cannot blame Lina, and does not need to blame anybody**'],
  ], [0.6, 3.4, 2]),
  '**Version 1 is what I wrote in January and it has had Lina checking her own arithmetic for three weeks.** Version 2 is the mistake you make when you are told to put yourself in: the name goes on the end and reads as a confession.',
  '**Version 4 is the one I am sending**, because version 3 answers who quoted and version 4 answers the question Mr Ayoub will ask next, which is how a price list stayed eleven months out of date in an office with a price list on the wall.',
  '**The last clause was hard to write.** *Asking is mine.* Nobody has ever told me that revising the list is my job, and it is not in anything written down, and it is obviously true.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four versions, genuinely different', '✓'],
  ['A version with the actor tacked on the end, shown as a fault', '✓ *by me*'],
  ['The version that answers the reader\'s next question', '✓ and the next question is named'],
  ['A decision of the writer\'s, volunteered', '✗ ⚠ **_asking is mine_ is a duty, not a decision** — **the decision was to go on quoting from a list she knew was old**'],
  ['One version recommended, with a reason', '✓'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review, and it is the sharpest in the unit:** _"Criterion: a decision of the writer\'s, volunteered. The line I am marking is **_Nobody asked for the list to be revised, and asking is mine._** What I found: that is a duty you have accepted, which is admirable and is not the decision. The decision was to carry on quoting for eleven months from a list you knew was wrong, and that sentence is not in any of your four versions."_ ⚠ **Read it out.** **The difference between accepting a duty and naming a decision is the hardest thing in Unit 2 and a peer found it.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read versions 1 and 4 only. ⚠ **The class answers one question: who disappears between them?** ⚠ **In a well-made pair the answer is a colleague** — **Lina, Abu Yasser, the night man** — **and the writer appears in their place.** **If nobody disappears, version 1 was not an agentless passive about a one-person place and the exercise has not bitten.**'));
out.push(stage('7', 'Write freely – sample (234 words)'));
out.push(sample(null, [
  'My father has been apologising for a decision of his employer\'s since about 1998.',
  'He ran the counter of a builders\' merchant for thirty-one years. Some time in the nineties the owner stopped stocking a brand of cement that half the small builders in the district preferred, because the margin on it was thin and a cheaper brand had just come in. Nobody announced it. There was no notice, no note to customers, and no reason given to anybody who asked.',
  'So for twenty years my father stood at a counter and told men he had known since school that we did not have that cement, and they asked why, and he said he did not know, which was true. Some of them stopped coming. Two of them told him to his face that he had got above himself. He has never once said that it was not his decision, because saying so would have been passing it upward in front of a customer, and he does not do that.',
  'The owner died in 2011 and I do not think he ever knew. Why would he? Nobody wrote it down and nobody carried it to him. He made a margin decision in an office and a man he liked spent twenty years absorbing it at a counter nine metres away.',
  'The sentence that would have ended it is nineteen words on a card by the till, with a name on it.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: does the carrier know whose decision it was? The line I copied is **_He has never once said that it was not his decision, because saying so would have been passing it upward in front of a customer, and he does not do that._** What I found: he knew, which is rarer than not knowing, and he carried it anyway — so the remedy was never his to apply. It was the owner\'s, and nobody told the owner."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three carriers not to know whose decision it was, and expect at least one to have assumed it was their own fault.** ⚠ **The third case — a carrier who knows and absorbs it out of loyalty — is the one worth most class time**, because it cannot be fixed by informing anybody. **It is fixed only by the decision-taker writing their own name down, which is the first distance, which is this cycle.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks the learner to write one decision at the first distance and give it to the person who has been carrying it.** **Some will.** ⚠ **Collect what happened**: the usual report is that the carrier was not grateful and was not resentful, but visibly relieved, and that they had assumed for years it was somebody\'s opinion of them.',
], C.lblue, C.navy));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  Nominalisation, and what it costs'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect *the implementation of*, *the provision of*, *the completion of*, *the utilisation of*** — and expect at least one from a job title or a form heading, which is where they breed.'));
out.push(p('**b**  *The delay in signing the terms* is **shorter** (five words to seven) and has **no person in it**. ⚠ **The shorter one is shorter because it has thrown away the who and the when.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **It lets you put an event in the subject of a sentence and do something to it** — *the delay cost us nine days of yard space*, which you cannot say with a verb without a long detour.  2 ⚠ **Because *has created difficulties for the warehouse* is the second half of the same trick.** **Two nominalisations in nine words, and the sentence is about nobody doing nothing to no one.**'));
out.push(p('⚠ **Hala\'s formulation is the one to put on the board and keep there for the rest of the book:** ⚠ **a verb has a who and a when inside it and a noun does not.** **Everything else in this cycle follows from it, including the legitimate uses.**'));
out.push(p('**Language box – Practise (sample, four):**  _**1** *the implementation of the new gate sheet* → ⚠ **rebuild: we started using the new gate sheet on 1 June** (lost: us, and the date). **2** *the delay cost us nine days of yard space* → ⚠ **keep: the event is the subject and it is doing something.** **3** *the provision of overtime* → **rebuild: we paid overtime, twice, in January** (lost: us, twice, and January). **4** *the non-availability of the second press* → ⚠ **rebuild: the second press was down for four days in February** — **and note that the rebuild is itself a passive, correctly, because who repaired it is noise.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'The change to Mondays has halved the complaints.'],
  ['B', 'That is a nominalisation. Rebuild it with a verb.'],
  ['A', 'We changed the run to Mondays and the complaints halved.'],
  ['B', 'And is that better?'],
  ['A', '…No. It is two things joined by *and*, and it does not say the first caused the second.'],
  ['B', 'Try again.'],
  ['A', 'Because we changed the run to Mondays, the complaints have halved.'],
  ['B', 'Longer, and it now argues for a cause it cannot prove. What does the noun version do?'],
  ['A', 'It puts the change in the subject and lets it act. One event doing one thing.'],
  ['B', 'So the noun is correct here, and you can say why — which is the whole of this role card.'],
]));
out.push(p('⚠ **Role card 2 is the half of the cycle teachers skip and it must not be skipped.** **A class that has only rebuilt nominalisations leaves believing nouns are a fault.** ⚠ **The test for keeping one is specific: is the event in the subject, doing something?** **If yes, keep it; if it is sitting in the middle of a sentence as an object or after a preposition, rebuild it.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write both versions and the word difference, then say which role card they heard. **Typical errors:** a rebuild that joins two clauses with *and* and loses the causation · a rebuild that is itself nominalised (*the making of the change*) · ⚠ **and the content fault, which is a learner who rebuilds a noun that was doing real work** and cannot say what was gained.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The phrase', 'What it loses', 'Rebuild, or keep?', 'Words added if rebuilt'], [
  ['*the implementation of the gate sheet*', 'us, and 1 June', '**rebuild**', '**+3**'],
  ['*the delay cost us nine days*', 'nothing — the event is the subject', '⚠ **keep**', '—'],
  ['*the provision of overtime*', 'us, twice, January', '**rebuild**', '**+4**'],
  ['*the non-availability of the second press*', 'four days, February', '**rebuild**', '**+5**'],
  ['*the postponement of the Friday proposal*', '⚠ **Mr Ayoub, August, and that it was a choice**', '⚠ **rebuild — this is the important one**', '**+6**'],
  ['*the change to Mondays has halved the complaints*', 'nothing', '⚠ **keep**', '—'],
], [1.8, 1.5, 1.3, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my six, four should be rebuilt and two should be kept. The worst was *the postponement of the Friday proposal*, which lost Mr Ayoub, August, and the fact that it was a choice. Rebuilt it costs six words."', '⚠ **Total the room\'s added words** — it is usually fifty to a hundred — ⚠ **and then ask the harder question: were the kept ones kept for the right reason?** **The right reason is an event in the subject doing something. *We have always written it that way* is not a reason and will be offered.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** As written: **28 words, six nominalisations, nought actors, nought dates, nought figures.** As it should read: **41 words, thirteen more, four actors, three dates or figures, one recovered decision.**  **2** ⚠ **It made a decision look like a condition of the weather.** *The postponement of the collection arrangements* **was her, deciding, on a Tuesday** — ⚠ **and a reader cannot argue with a postponement, while he can argue with *I put off*, and he should be able to.**  **3** ⚠ **It was standing in front of a man.** **A warehouse is a building and has not been inconvenienced by anything; Abu Yasser has moved nine hundred cartons twice.** ⚠ **Institutions in the object position are usually people in hiding.**'));
out.push(stage('6', 'Write with help – sample (146 words)'));
out.push(sample(null, [
  '**THE GATE NOTE, PARAGRAPH 1 — WHAT THE NOUNS COST. 7 February. B. Nassif.**',
  '**As written.** _The introduction of the revised counting procedure has resulted in an improvement in accuracy, although the continuation of handwritten entries at night remains an obstacle to the achievement of a full reconciliation._',
  '⚠ **Thirty-one words. Six nominalisations. Nought actors, nought dates, nought figures.**',
  table(['The noun', 'The verb under it', 'What was lost'], [
    ['*the introduction of*', '*we started using*', '⚠ **us, and 1 June**'],
    ['*has resulted in an improvement*', '*the errors fell*', '⚠ **a figure — from nine a week to two**'],
    ['*the continuation of handwritten entries*', '*the night men still write by hand*', '⚠ **the night men, and that they still do**'],
    ['*the achievement of a full reconciliation*', '*we cannot reconcile the gate book with the racks*', '⚠ **we, and the fact that it is us who cannot**'],
  ], [1.8, 2.1, 2.1]),
  '**As it should read.** _We started using the revised counting sheet on 1 June and the errors fell from about nine a week to two. The night men still write their entries by hand, and until that changes we cannot reconcile the gate book with the racks._',
  '⚠ **Forty-four words against thirty-one, so the honest version costs thirteen words.** **It contains three actors, two figures, one date, and one admission.**',
  '**The row I want to point at is the fourth.** *The achievement of a full reconciliation* was *we cannot reconcile*. Turning it into a noun made our failure look like a target not yet reached.',
  '**And the third is the one nobody notices.** *The continuation of handwritten entries* is four men, still writing by hand at two in the morning under one bulb, and the noun has removed all four of them from a sentence that is about them.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The verb under each noun, in its own column', '✓'],
  ['What each noun lost, specifically', '✓ ⚠ **_from nine a week to two_ is the model answer for this column**'],
  ['A decision of the writer\'s, recovered from a noun', '✗ ⚠ **none recovered** — **and there is one: somebody decided not to print the night codes, and the fourth row hides it**'],
  ['An institution found standing in front of a person', '✗ ⚠ **the third row finds four people, which is better** — **but no institution was named as the screen**'],
  ['The extra words counted, and not apologised for', '✓ 13'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: a decision of the writer\'s recovered from a noun. The line I am marking is **_until that changes we cannot reconcile the gate book with the racks._** What I found: *until that changes* has no actor and it is the one place a decision is hiding. Somebody decided not to print the codes, and the honest clause is *until we print the codes*."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the noun that hid a decision of theirs. ⚠ **The class answers one question: what can the reader now argue with that they could not before?** ⚠ **The answer should name a person and a choice.** **If it names only a fact, the noun was hiding information and not a decision, which is a smaller finding and should be said to be one.**'));
out.push(stage('7', 'Write freely – sample (228 words)'));
out.push(sample(null, [
  'The phrase in our office is *the reconciliation process*, and I have asked four people what it is and had four answers.',
  'The verb under it is *somebody compares the gate book with the racks and writes down where they differ*. That is one person, doing one thing, taking about ninety minutes. Nobody has done it since October.',
  'What the phrase has done is turn a ninety-minute job into a system. A system can be under review, can be ongoing, can be subject to improvement; it cannot be done on a Tuesday afternoon by one named person. In our last three monthly meetings *the reconciliation process* has been mentioned by somebody in each, and in all three it was mentioned in a sentence with no actor in it: *the reconciliation process needs to be looked at*.',
  'I said the verb version out loud in the January meeting. I said: nobody has compared the gate book with the racks since October, and it takes about ninety minutes, and I am not doing it because nobody has told me it is mine. There was a pause of about four seconds and then Mr Attar said he had assumed the warehouse did it, and Abu Yasser said he had assumed the office did.',
  'It is now mine, on a Tuesday, in the first week of the month. The phrase has not been used in a meeting since.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: what verb is under the phrase, and who is in it. The line I copied is **_A system can be under review, can be ongoing, can be subject to improvement; it cannot be done on a Tuesday afternoon by one named person._** What I found: that is the cost of the noun stated better than the unit states it, and your four-second pause is the evidence."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect all three phrases to be used by people who could not say who does the thing, and expect at least one to be in a job title or on a form.** ⚠ **A nominalisation in a job title is the hardest case**, because the post was created to hold the noun and rebuilding it is a question about the post. **Say so and leave it there; it is not this unit\'s to solve.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part — the verb under every noun on one page — produces the unit\'s best homework and takes about twenty minutes.** ⚠ **Ask for the count of actors recovered, not the count of nouns found.** **Four or five recovered actors on one page is normal, and one of them is usually the writer.**',
], C.lblue, C.navy));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  A fault without a culprit, and a fault with one'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **The third part of the question is the one that produces silence: who decided which was which?** **In most workplaces nobody decided — the form was chosen by how annoyed the writer was**, and saying that out loud is the cycle\'s starting point.'));
out.push(p('**b**  Open, and both answers are defensible. ⚠ **The useful follow-up is: which would you want written about you in a file that somebody reads in June when they are deciding about you?** **That reframing changes about half the answers.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **Mr Ayoub must telephone the plater and possibly stop using him, so the name is the whole content of the sentence** — without it the sentence is unusable.  2 ⚠ **Naming nobody and writing it so that everybody knows who** — *by the new man on the second rack* — **which is a name without the courtesy of being a name, and the only one of the three that is cowardly.**'));
out.push(p('⚠ **The test to drill is Bassel\'s, and it is not the obvious one.** **It is not how serious the fault is and not how senior the person is.** ⚠ **It is: what does the reader have to do?** **Act on a person → the name is content. Act on a system → the name is decoration, and the decoration costs the person something.**'));
out.push(p('**Language box – Practise (sample, four faults):**  _**1** A supplier sent the wrong gauge. ⚠ **Reader acts on a person — name him.** **2** A night marker mismarked three cartons on a first night. ⚠ **Reader acts on a bulb and a printed sheet — no name, remedy in the sentence.** **3** A driver took the wrong turning and lost two hours. **Reader acts on nothing; it is not worth a page.** **4** The counter quoted an eleven-month-old price list. ⚠ **Reader acts on the list — no name, and the writer\'s own duty to revise it goes in the same paragraph.**_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'Three cartons were mismarked on the night of the 12th by the new man on the second rack.'],
  ['B', 'Say his name out loud.'],
  ['A', 'Fadi.'],
  ['B', 'Now which is kinder on paper — *Fadi* or *the new man on the second rack*?'],
  ['A', '…*The new man*. Obviously.'],
  ['B', 'How many people in your building would know who *the new man on the second rack* is?'],
  ['A', 'All of them. There is one.'],
  ['B', 'And if the page said *Fadi*, what could Fadi do?'],
  ['A', 'Come and tell me the codes are handwritten and the light is one bulb.'],
  ['B', 'And with *the new man*?'],
  ['A', 'Nothing. He is not in it. He cannot see that he has been written about, and everybody else can.'],
]));
out.push(p('⚠ **That exchange is the one to perform in front of the class if only one is performed.** ⚠ **The paradox is counter-intuitive and learners resist it until they count the people who would decode the description**: **a name is answerable and a description is not, so the description is the crueller form while feeling like the kinder one.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners mark each fault *name* or *no name* and write the remedy that makes the nameless one honest. **Typical errors:** a nameless fault with no remedy, which is a nameless accusation and worse than a named one · a name used because the fault was serious rather than because the reader must act on the person · ⚠ **and the content fault, which the whole class will produce at least once: an identifying description offered as the tactful option.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The fault', 'What the reader must act on', 'Name or no name', 'The remedy, if no name'], [
  ['the plater\'s wrong gauge', '⚠ **a person — whether we keep him**', '**name**', '—'],
  ['three cartons mismarked at night', 'a system', '**no name**', '⚠ **a printed code sheet and a second bulb, both ordered**'],
  ['eleven customers quoted an old price', 'the price list', '**no name**', '⚠ **revision 3 of the list, and the duty to revise it is mine**'],
  ['a delivery left at the wrong gate', 'the gate signage', '**no name**', 'a painted number on each gate'],
  ['a count signed without being made', '⚠ **a person — this one cannot be a system**', '⚠ **name, and it is the hardest one on the page**', '—'],
], [1.6, 1.6, 1.1, 1.7]));
out.push(p('⚠ **The fifth row is the one to discuss.** **A count signed without being made cannot be written as a system fault**, because the system did what it should: it asked for a signature and got one. ⚠ **There are faults where the name is unavoidable, and a class that has learned the nameless form will try to apply it here.** **Naming it is the honest act and the unit has to say so.**'));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Of my five, two need a name because the reader must act on a person. Three do not, and the remedies are a printed sheet and a bulb, a revised price list, and a painted gate number. And one of them is currently written as *somebody on the night shift*, which is a name with the protection taken off it."', '⚠ **Count the identifying descriptions in the room, and then ask the question that lands: has the person described ever seen the page?** **The usual answer is no**, which is the whole asymmetry: **the subject cannot read the accusation and everybody else can.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **Because Mr Ayoub must act on the plater and will act on a system for the marking.** **The plater\'s name is the content; the marker\'s name is decoration and would cost him something.**  **2** ⚠ *By the man on the second rack.* **The writer wrote it, read it, and understood that eleven people would know who it was and he would not know he had been written about** — ⚠ **a description that identifies one person is a name with the protection taken off it.**  **3** ⚠ *The decision about him is yours and not small.* **Naming the plater is easy and not free — he is the only man in Aleppo who plates to their standard** — **and a page that names him without saying that has handed Mr Ayoub half a file.**'));
out.push(stage('6', 'Write with help – sample (152 words)'));
out.push(sample(null, [
  '**TWO FAULTS, WEEK ENDING 8 FEBRUARY. B. Nassif. One with a name in it and one without, and the reason for each.**',
  '**1  The steel.** **Haddad Metals delivered sixty sheets at 1.2 mm against an order for 1.5 mm on 2 February, and the delivery note says 1.5.** We cut nine before the foreman caught it. ⚠ **The name is in this sentence because there is nothing else in it you can act on**, and because the note and the steel do not agree, which is a different kind of problem from a mistake. They have supplied us for nine years without an error of this kind, and the decision about them is yours.',
  '**2  The nine cut sheets.** **Nine sheets were cut to the wrong thickness before the error was found on the morning of the 3rd.** ⚠ **Incoming steel is gauged at the rack and not at the gate, the gate sheet has no gauge column, and the man cutting had the delivery note in front of him saying 1.5.** **No part has shipped. The remedy is a gauge column on the gate sheet, and I have had one ruled in by hand until the sheet is reprinted.**',
  table(['', 'Fault 1', 'Fault 2'], [
    ['**the reader must act on**', '⚠ **a person — a nine-year supplier**', '⚠ **a form — a missing column**'],
    ['**so the name is**', '⚠ **the content**', '⚠ **decoration, and it would cost him**'],
    ['**who could be harmed**', '⚠ **Haddad Metals, and they have earned the risk**', '⚠ **nobody, which is the point**'],
  ], [1.8, 2.1, 2.1]),
  '**The sentence I took out of fault 2 was *by the man on the long saw*.** There is one long saw.',
  '**And the sentence I put into fault 1 is the last one.** Nine years without an error is worth saying in the paragraph that names them, or I have handed you half a file.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The reason the name is there, said in the page', '✓ and a second reason — the note and the steel disagree'],
  ['The nameless fault has its remedy, ordered', '✓ ⚠ **ruled in by hand, which is better than ordered** — it is already working'],
  ['No description that identifies one person', '✓ taken out, and the removal shown'],
  ['The named person priced in the same paragraph', '✓ nine years'],
  ['A harm column, answered for both', '✓'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: the nameless fault has its remedy. The line I am marking is **_the man cutting had the delivery note in front of him saying 1.5._** What I found: that is not a remedy, it is an exculpation, and it is the best line in the paragraph — it says the cutter did the right thing with the information he had. Keep it, and say that is what it is."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only the sentence they took out. ⚠ **The class estimates how many people in that workplace would have decoded it.** ⚠ **The number is almost always *everybody*, and hearing it said about somebody else\'s page is what makes a learner go back and check their own.**'));
out.push(stage('7', 'Write freely – sample (232 words)'));
out.push(sample(null, [
  'A woman I worked with in 2017 is in a file as *the member of staff responsible for the reception log*, and she is still there.',
  'What happened was that a visitor signed in on a Tuesday and did not sign out, and a month later there was a question about when he had left the building, and the log could not answer it. The sentence written at the time said that the log had not been maintained in accordance with the procedure by the member of staff responsible for it. It is eighteen words and there is no name in it and there was one receptionist.',
  'The procedure, when somebody finally read it, required visitors to sign themselves out at a desk that is not visible from reception, which is why about a third of them did not, which is why the log had never answered that question for anybody in four years.',
  'She was not disciplined. Nothing happened at all, which is the part people find hard to believe matters. The sentence sat in a file, and eleven months later she applied for a post in another department and was not shortlisted, and nobody will ever be able to say whether the two facts are connected.',
  'With her name in it she would have seen it and answered it in a morning. Without her name in it she never saw it, and it is still true, and it is still there.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: was the page read later for something else? The line I copied is **_nobody will ever be able to say whether the two facts are connected._** What I found: that is the real cost and it is unprovable, which is why nobody ever counts it. The page was written to avoid harming her and it is the only part of the story that lasted."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three pages to have been read months later by somebody deciding about the person, and expect all three writers not to have been thinking about that reader.** ⚠ **Name the general fact: a fault lasts weeks and a page lasts years**, and the form you choose is chosen for the wrong reader unless you think about it on purpose.'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the reason for the choice written at the foot of the page, and that is the piece to insist on.** **A learner who chooses the form well and writes no reason has made the right decision by instinct and will not repeat it.** ⚠ **The written reason is what transfers to the next page.**',
], C.lblue, C.navy));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  Hedged agency'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect a verbal instruction, a conversation on a yard or a telephone call.** **The second half of the question is the whole cycle: what would you *write*?**'));
out.push(p('**b**  The **first** claims more. ⚠ **The second claims exactly what the evidence supports and puts the gap in the same sentence as the claim**, which is what makes it honest rather than merely cautious.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ *Was not approved* **is a finding about the world;** *is not recorded as approved* **is a finding about the file.** **You can make the second from your desk and you cannot make the first.**  2 ⚠ **Because a stacked hedge does not claim less — it claims nothing, and it tells a reader you are frightened**, which is information the writer did not mean to give.'));
out.push(p('⚠ **The sentence to put on the board is Nadia\'s:** ⚠ **a finding about a file dressed as a finding about the world is the commonest dishonest sentence in any office, and it is almost never written dishonestly on purpose.** **The last clause is what makes it teachable** — nobody in the room needs to feel accused in order to learn it.'));
out.push(p('**Language box – Practise (sample, four):**  _**1** I believe Mr Attar approved the overtime. **File:** nothing in writing; Hala says he nodded in a meeting. ⚠ **Write: *is not recorded as approved; Hala states that Mr Attar agreed to it in the meeting of the 14th.*** **2** I believe the roof has never been inspected. **File:** no inspection record since 2019 and no list that includes it. ⚠ **Write: *no inspection of that corner is recorded since 2019, and it is not on the inspection list.*** **3** I believe the second store opened on 8 June. **File:** the lease, the gate sheet and the first day\'s takings. **Write it flat: *the second store opened on 8 June.*** **4** I believe the plater warned us about the gauge. **File:** two accounts that differ. ⚠ **Write: *is recorded as mentioned in Bassel\'s note of the 3rd and does not appear in the plater\'s letter of the 4th.***_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['A', 'It would appear that the overtime may possibly have been approved informally.'],
  ['B', 'Count the hedges.'],
  ['A', '*Would appear* … *may* … *possibly* … *informally*. Four.'],
  ['B', 'In eleven words. What are you frightened of?'],
  ['A', '…That Mr Attar will say he never approved it and I will have written that he did.'],
  ['B', 'Then say that, and nothing else. What does the file hold?'],
  ['A', 'Nothing. Hala says he agreed in the meeting of the 14th.'],
  ['B', 'So: *is not recorded as approved; Hala states that Mr Attar agreed to it in the meeting of the 14th.*'],
  ['A', 'That is more exposed than what I wrote.'],
  ['B', 'It is more exact. What you wrote protected you from Mr Attar and told your reader nothing, and your reader is also Mr Attar.'],
]));
out.push(p('⚠ **The question *what are you frightened of?* produces a specific person every time, and the answer is often the reader.** ⚠ **That is the finding: the stacked hedge is addressed to the person it is hiding from, who is also the person reading it**, and once a learner sees that, the hedges come out without argument.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the claim as made and as the file supports it, count the hedges, and mark it *file* or *world*. **Typical errors:** *was not* where only *is not recorded as* is available · a hedge with no evidence beside it, which is a mood · ⚠ **and the content fault, which is a learner who hedges a well-evidenced claim out of symmetry**, so that the page no longer tells the reader which parts are solid.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['What I believe', 'What the file actually holds', 'The claim, exactly', 'File or world?'], [
  ['Mr Attar approved the overtime', 'nothing; one account', '*is not recorded as approved; Hala states he agreed on the 14th*', '**file**'],
  ['the roof has never been inspected', 'no record since 2019; not on the list', '*no inspection is recorded since 2019, and it is not on the list*', '**file**'],
  ['the store opened on 8 June', 'lease, gate sheet, takings', '*the second store opened on 8 June*', '⚠ **world, and provable**'],
  ['the plater warned us', 'two accounts that differ', '*is recorded in Bassel\'s note and not in the plater\'s letter*', '**file**'],
  ['nobody checked the gauge', '⚠ **no record, and no box on the form**', '⚠ **_is not recorded as checked, and the form has no line for it_**', '**file**'],
], [1.4, 1.6, 2, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I believe nobody checked the gauge. The file holds no record and the form has no line for one. So the claim is *is not recorded as checked, and the release form has no line for a gauge check*, which is a finding about the file."', '⚠ **Count the claims that had to move from world to file.** **It is usually most of them.** ⚠ **Then ask for the plain sentence underneath each one** — *there is nothing on the file, and he says he was told* — **because a learner who cannot say the plain sentence has not understood the claim they wrote.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **The release on 14 January — there is a gate sheet signed by name**, so it is written flat, with no hedge, and the page thereby tells the reader which parts are solid.  **2** **(i)** *nobody checked the gauge* — **a finding about eleven people on a Tuesday, and she was not there.** **(ii)** *it is not clear whether the gauge was checked* — **claims nothing; a mood.** **(iii)** ⚠ *the gauge was not checked, as far as can be established* — **a finding about the world with a hedge hung on the end, and a reader will quote the first eight words.** **(iv)** ⚠ **the honest one, which adds *the bench page has no line for a gauge check*** — **so the absence of a record is explained by the absence of a box, and the finding is about a page she is responsible for.**  **3** ⚠ **The plain sentence** — *there is nothing on the file, and Abu Yasser says he was told on the yard* — **and she would rather he asked for it than that she buried it in four hedges.**'));
out.push(stage('6', 'Write with help – sample (143 words)'));
out.push(sample(null, [
  '**THE OVERTIME IN JANUARY — WHAT THE FILE SUPPORTS. 10 February. H. Mourad. Four claims, and the evidence for each.**',
  table(['Claim', 'Evidence', 'So I have written'], [
    ['overtime was worked on the 14th and 21st', '⚠ **both gate sheets, signed by name**', '⚠ **_was worked on the 14th and 21st_** — flat'],
    ['Mr Attar approved it', '⚠ **nothing written; I heard him agree**', '⚠ **_is not recorded as approved; I heard Mr Attar agree to it in the meeting of the 14th_**'],
    ['the rate was the night rate', '**no rate is stated anywhere**', '⚠ **_no rate is recorded for either night, and the payroll sheet has no column for a night rate_**'],
    ['the men have not been paid for the 21st', '**the February payroll**', '**_were not paid for the 21st_**'],
  ], [1.8, 2.1, 2.1]),
  '⚠ **The second row I have rewritten three times.** **My first was *Mr Attar approved it*, which I cannot write because there is nothing on the file.** **My second was *it is understood that approval was given*, which claims nothing.** ⚠ **My third says *I heard him agree*, and that is the honest one, because I did, and because a first-hand account is evidence and I should put my own name to it rather than hide behind *it is understood*.**',
  '⚠ **And the plain sentence I am keeping in reserve: there is nothing in writing, I was in the room, and two men are owed for a night in January.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A well-evidenced claim written flat', '✓ two of them'],
  ['The rejected versions shown, including the dangerous third', '✗ ⚠ **the three shown are first-person versions** — **the dangerous *as far as can be established* form is not among them and should be, as the one rejected**'],
  ['The absence of a record explained', '✓ *the payroll sheet has no column for a night rate*'],
  ['No claim hedged into a mood', '✓'],
  ['The plain sentence, kept in reserve', '✓ ⚠ **and it ends with the two men, which is the right place to end it**'],
], [3.2, 2.8]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: no claim hedged into a mood. The line I am marking is **_I heard Mr Attar agree to it in the meeting of the 14th._** What I found: that is not a hedge at all, it is a first-hand account with your name on it, and it is stronger than the row above it suggests. Say in one clause that you were in the room, because a reader skimming the *is not recorded* will miss it."_'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read their third version and their fourth. ⚠ **The class quotes the first eight words of the third aloud and says what travels.** ⚠ **The demonstration is the point: a hedge on the end of a finding about the world does not travel with the finding**, and hearing eight words read out of a sentence is more convincing than being told.'));
out.push(stage('7', 'Write freely – sample (226 words)'));
out.push(sample(null, [
  'A line in an audit letter about the company I worked for in 2015 said that stock records *had not been maintained during the period under review*.',
  'What was true was that the stock system had been changed in March, the old records stopped in March and the new ones started in May, and there were eight weeks in the middle covered by a spreadsheet that four people had access to and that nobody had been told to keep. The auditor had the spreadsheet. He had asked for it and been given it.',
  'The sentence he wrote is a finding about the world: records were not maintained. The finding he could make from his own file is that records for eight weeks exist in a form the company has not adopted and cannot certify. Those are not the same sentence, and the second one has a remedy in it.',
  'What happened with the first one is that the finance director read it as a finding about his department and spent three weeks establishing who had failed to maintain records, and the answer was nobody, because nobody had been given the job. By the time that was established, the audit was signed and the sentence was in it.',
  'Nobody acted dishonestly anywhere in this. A man wrote a sentence about the world when he could only see a file, and it cost a department three weeks and a man his temper.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: a finding about the file or about the world? The line I copied is **_Those are not the same sentence, and the second one has a remedy in it._** What I found: you have given the reason the distinction matters practically and not only morally, which the unit does not quite say. The file version tells somebody what to do on Monday."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three over-claims to be a finding about a file read as a finding about the world, and expect at least one in which nobody has ever gone back to look at the file.** ⚠ **Close on the practical point the sample review found: the file version carries a remedy and the world version carries a verdict**, and that is why the exact claim is the useful one and not merely the honest one.'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part — mark every claim on a live page *file* or *world* — is the quickest high-value task in the unit.** ⚠ **Ask for the count of mislabelled ones.** **Two or three on a page is normal; a page with none has usually been written entirely in hedges, which is its own fault and the checklist will catch it.**',
], C.lblue, C.navy));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  Restoring the actor on request'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. ⚠ **Expect *I would have to check* and *I am not sure I should say*, which are both retreats.** **Expect one learner to have given the name immediately and been glad of it.**'));
out.push(p('**b**  The **second** answers. ⚠ **The first retreats, and *at this stage* is the clause that gives it away** — it promises a later stage that will never be named.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **She does not retreat, and she does not write *Mr Ayoub approved it* either** — she offers the form she could write, *Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January*, dated.  2 ⚠ **That the record is missing because the release form has never had a line for it, that Mr Attar asked for one in 2019 and was refused, and that the missing record is therefore his and predates her.**'));
out.push(p('⚠ **The end of the track is the cycle\'s whole argument and it is practical, not moral.** ⚠ **A fault written with a name in it stops being investigated the moment the name is read.** **If the paragraph had said *the night man did not check the gauge*, Mr Attar would have agreed, and the form would still have no line on it.** ⚠ **A fault written as a gap keeps being read until somebody recognises it** — **and in this case the person who recognised it was the person whose gap it was.**'));
out.push(p('**Language box – Practise (sample, the four moves):**  _"**The name.** Abu Yasser says Mr Ayoub told him on the yard. There is nothing written. **The reason for the page.** I was not there and the file is not; that sentence would be on the file for ever on the strength of one conversation I did not hear. **The distinction.** Leaving a name out of a page is not refusing to say it — you asked, and you are entitled to it. **The writable form.** *Abu Yasser states that Mr Ayoub authorised the release on the yard on 14 January*, and I would date the sentence. ⚠ **What I would not write is *Mr Ayoub approved it*, because that is still not something I know.**"_'));
out.push(stage('3', 'Practise – sample with role card 2'));
out.push(dlg(null, [
  ['B', 'Your note says the gauge is not recorded as checked. Who did not check it?'],
  ['A', 'I do not know. Nothing on the release form records a check, and there is no line for one.'],
  ['B', 'You could have asked the men on that shift.'],
  ['A', 'I could. I would still only be able to write that they say they did or did not, which is a different sentence from whether they did.'],
  ['B', 'And if I asked you to find out?'],
  ['A', 'Then I would ask them, and I would write *the three men on that shift state that no gauge check was made*, with the date I asked them.'],
  ['B', 'Then I will tell you something. There has never been a line on that form for it. I asked for one in 2019 and was told it would slow the gate.'],
  ['A', 'I did not know that.'],
  ['B', 'Nobody did, because nobody ever wrote the absence down. Put a line on the form and put my name on the request.'],
]));
out.push(p('⚠ **Role card 2 has a rule in it that teachers should enforce: B gives the information only if A answers the first question properly.** ⚠ **If A retreats, B says nothing** — **which is what happens in a real office and is the point of the card.** **Run it twice with the same pair, once with a retreat and once without, and the difference in what A ends up knowing is the lesson.**'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the four moves and say what the asker gave back. **Typical errors:** *I would rather not say at this stage* · a writable form that is actually the unwritable one (*Y approved it* offered as the compromise) · a form with no date on it · ⚠ **and the content fault, which is a learner who gives the name and then apologises for the page**, which concedes that the page was wrong when it was right.'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['The statement', 'The name, and how I know', 'The reason the page is as it is', 'The form I could write'], [
  ['*is not recorded as approved*', 'Mr Ayoub, from Abu Yasser', 'I was not there and the file is not', '*Abu Yasser states that Mr Ayoub authorised it on 14 January*'],
  ['*three cartons were mismarked*', 'Fadi, I saw the sheet', '⚠ **nothing turns on his name; the remedy is a bulb and a sheet**', '*Fadi marked them; it was his first night and the codes are handwritten*'],
  ['*eleven customers were quoted the old price*', 'Lina, and me before her', '⚠ **the list is the fault and the list is mine**', '*Lina quoted nine and I quoted two, from revision 2*'],
  ['*the gauge is not recorded as checked*', '⚠ **nobody — there is no line for it**', 'there is no record to have', '*the three men on that shift state that no check was made, asked on the 5th*'],
], [1.5, 1.5, 1.6, 1.8]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The statement is *eleven customers were quoted the old price*. The name is Lina, and mine before hers. The page is as it is because the fault is the list and the list is mine. And the form I could write is *Lina quoted nine and I quoted two, both from revision 2 of 1 April*."', '⚠ **Count the prepared answers that include a dated *X states that Y* form** — **it is the move learners forget** — ⚠ **and then ask which of the four they would be frightened to say out loud.** **The answer is usually the one where the name is their own.**']));
out.push(stage('5', 'Read'));
out.push(p('**1** ⚠ **She did not say *I would rather not say at this stage*, which was her first instinct and would have ended the conversation.** **She answered everything she was asked.**  **2** ⚠ **That the release form has never had a line for a gauge check, that Mr Attar asked for one in 2019 and was told it would slow the gate** — **so the request is nine years old and in nobody\'s writing.**  **3** ⚠ **Mr Attar would have agreed with her and the form would still have no line on it.** **A fault with a name in it stops being investigated the moment the name is read.**'));
out.push(stage('6', 'Write with help – sample (156 words)'));
out.push(sample(null, [
  '**THE OLD PRICE LIST — THE NOTE AFTER THE CONVERSATION. 11 February. H. Mourad. For the file, and copied to Mr Ayoub.**',
  '**What was asked.** **Mr Ayoub asked on the 10th who had quoted the old export price.**',
  '**What I said.** **Lina quoted nine and I quoted two, all from revision 2 of 1 April, which is the list on the wall.**',
  '**What I did not say.** ⚠ **That Lina is three weeks in. It was my first instinct and it would have moved the whole conversation onto her.** **She quoted from the list that is up, which is what she was told to do.**',
  '**What I was given.** ⚠ **Revision 3 was drafted in April and never printed, because the plater\'s increase had not been settled and Mr Ayoub did not want two lists in a month.** ⚠ **The draft is in his drawer. It has been there for ten months and it has the twelve per cent in it.**',
  table(['', 'Before the conversation', 'After it'], [
    ['**what the fault was**', 'eleven wrong quotations', '⚠ **a printed list ten months behind a drafted one**'],
    ['**whose it was**', '⚠ **the counter\'s, and read as Lina\'s**', '⚠ **a decision in April not to print, and nobody\'s since**'],
    ['**the remedy**', 'tell the counter the new price', '⚠ **print revision 3 this week**'],
    ['**what it cost to find**', '—', '**one question, answered without moving it onto Lina**'],
  ], [1.8, 2.1, 2.1]),
  '**The sentence I keep coming back to is that the draft has been in a drawer for ten months.** A thing that exists and is not issued leaves no trace of not being issued.',
  '**And the nameless version did what a named one could not.** If I had written *the counter has been quoting the old price*, Mr Ayoub would have spoken to Lina and the drawer would still be shut.',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What was asked, with its date', '✓'],
  ['Your first instinct, recorded and not followed', '✓ ⚠ **and it is the best line in the note** — *it would have moved the whole conversation onto her*'],
  ['What you were given, which is why the note exists', '✓ a draft in a drawer since April'],
  ['A before-and-after table with a *what it cost to find* row', '✓'],
  ['What the named version would have cost', '✓ *the drawer would still be shut*'],
], [3.4, 2.6]));
out.push(p('⚠ **Sample band-4 review:** _"Criterion: what you were given. The line I am marking is **_The draft is in his drawer. It has been there for ten months and it has the twelve per cent in it._** What I found: you have the fact and not the consequence. If the draft has the twelve per cent in it, then revision 3 was correct in April and every export quotation since has been under-priced, which is a figure and belongs in this note."_ ⚠ **That review is right and it is the kind of finding band 4 exists to produce**: **the reviewer has read the copied line and followed it one step further than the writer did.**'));
out.push(stage('6R', 'Share'));
out.push(p('Two or three read only *what I was given*. ⚠ **The class answers one question: how long had that fact existed in nobody\'s writing?** ⚠ **Ten months, nine years, four years.** **The number is always larger than the class expects, and the reason is always the same: a thing that is missing, or shut in a drawer, leaves no record of being missing.**'));
out.push(stage('7', 'Write freely – sample (230 words)'));
out.push(sample(null, [
  'I was asked once, in a room with four people in it, who had authorised a payment, and the honest answer was that I had.',
  'The payment was for a repair to a roller door that had been jammed open for two days in February, which in that building meant the whole floor was at the outside temperature. The man who came to fix it wanted cash and I had no authority to spend anything without a purchase order and the person who signed purchase orders was on leave. I paid him out of the petty cash and wrote it in the book.',
  'What I nearly said was that the circumstances had been exceptional and the position had been unclear, which is two nominalisations and a passive and means I paid a man cash.',
  'What I said was: I did, on the 14th, out of petty cash, because the door was open and nobody with a signature was in the building. I put it in the book the same hour. If that was wrong, it was wrong when I did it and not because you are asking now.',
  'The finance manager said that the petty cash limit had been raised to cover exactly that case in 2019 and that nobody had ever told the office staff. He was not pleased with me. He was less pleased with himself.',
  'Four people in the room learned the limit that morning.',
]));
out.push(stage('7P', 'Respond'));
out.push(p('⚠ **Sample:** _"Criterion: what did answering properly get them? The line I copied is **_If that was wrong, it was wrong when I did it and not because you are asking now._** What I found: that is the sentence that made the rest possible. It refuses the retreat and it refuses the apology, and it is eighteen words."_'));
out.push(stage('7R', 'Share'));
out.push(p('⚠ **Expect two of three full answers to have produced a fact the writer did not have, and expect at least one text in which the retreat was taken and nothing came back.** ⚠ **Put both columns on the board.** **The pattern is reliable enough to teach as a rule: an answer at the volume of the question is paid for, and a retreat is not.**'));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part asks for the four moves prepared and the dated *X states that Y* form written out.** **The form is the piece to check.** ⚠ **A learner who writes *Y approved it* has not understood 2.5 and should be sent back to it**, not to this cycle.',
], C.lblue, C.navy));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: the sentence that cost somebody a reputation'));
out.push(stage('1', 'Get ready – Unit 2 quiz'));
out.push(p('**1** ⚠ **_By whom?_ and _what is the space doing?_**  **2** *X decided* (somebody else is carrying it, or a reader must go and ask) · *it was decided by X* (the actor is owed and the sentence is not about them) · *it was decided* — ⚠ **and the test is whether you can add *and nobody needs to know who*.**  **3** ⚠ **A verb has a who and a when inside it**; a noun lets you ⚠ **put an event in the subject of a sentence and do something to it.**  **4** ⚠ **What the reader has to do** — act on a person, and the name is content; act on a system, and it is decoration.  **5** ⚠ *Was not approved* **is a finding about the world and you cannot make it from your desk;** *is not recorded as approved* **is a finding about the file and you can.**  **6** ⚠ **Because a fault with a name in it stops being investigated the moment the name is read.**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B   **b**  1 ⚠ **From Jaber\'s driver, who had it from somebody in the office, three weeks earlier.**  2 ⚠ **_The worst part is not being blamed. It is being blamed by a page you cannot reply to._**'));
out.push(p('⚠ **Two things in this track are the unit, and both are Abu Yasser\'s.** **First: *a sentence with no name in it about a place with one man in it is a sentence with his name in it.*** **Second, and it is the one learners have never heard said: *a sentence with a name in it can be argued with; a sentence with a hole in it cannot.*** ⚠ **He also answers the question the writer is really asking — why did you say nothing? — with *who do I say it to? The page is yours and I am not in it.***'));
out.push(p('⚠ **And the last exchange is the marking standard for the whole cycle.** **Nour says the honest version is four sentences longer; Abu Yasser says it is three weeks late.** ⚠ **A learner who prices the fix in words has not understood what was broken.**'));
out.push(p('**Language box – Practise (sample):**  _"I wrote a sentence in January that I need to tell you about. *Nine cartons in the fourth store were found to be damp.* — How did you hear? — Who would you have said it to? — What was the worst part? — I found them myself, on the 8th and the 11th. The store has been overflow since June because I arranged it. The roof above that corner is not on any inspection list and the list is mine. ⚠ **And I am sending that to everybody who read the first one, not to you.**"_'));
out.push(stage('3', 'Practise – sample with pair 2'));
out.push(dlg(null, [
  ['A', 'I wrote something in December that was read as being about you.'],
  ['B', 'The late collections.'],
  ['A', 'You knew.'],
  ['B', 'There is one driver on that run. *Collections were late on four occasions in November* is a sentence about me with my name taken out.'],
  ['A', 'And you said nothing.'],
  ['B', 'To whom? I am not in it. If it had said my name I would have brought you the gate book, because two of the four were the customer\'s gate being locked and one was the bridge.'],
  ['A', 'That is three of the four.'],
  ['B', 'Yes. And nobody asked, because there was nobody to ask about.'],
  ['A', 'Who else read it?'],
  ['B', 'Mr Attar read it out in the December meeting. That is how it reached the yard.'],
]));
out.push(p('⚠ **The question A is dreading — *who else has read it?* — must be asked in the role play**, because it is the question that turns the exercise from an apology into a correction. ⚠ **The answer determines where the second version goes**, and a correction that does not go where the first version went is not a correction.'));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the sentence as published and as it should have read, how the subject heard, and how long they said nothing. **Typical errors:** an opening that names a feeling rather than the sentence (*I think there may have been a misunderstanding*) · a correction offered only to the subject · ⚠ **and the content fault, which is a writer who explains the grammar to the person it landed on.** **Abu Yasser does not need to be told about the agentless passive.**'));
out.push(stage('4', 'Your turn – sample table'));
out.push(table(['Who I told', 'What they thought it said about them', 'What the sentence actually was', 'What I will send instead'], [
  ['the person it reads as being about', '⚠ **that they had let stock get damp in a store they rack**', '*nine cartons were found to be damp* — ⚠ **and I was the finder**', '⚠ **the version with the finder, the dates, the arrangement and the inspection list in it, to everybody who read the first**'],
  ['the person who will act on it', 'that a man needed watching', '⚠ **a report about a roof that is on no list**', '**the same version, and a line added to the inspection list this week**'],
], [1, 1.5, 1.5, 1.8]));
out.push(stage('4R', 'Report – mediation'));
out.push(p('⚠ **The unwritten thing, in full:** **the agentless passive is written to avoid accusing anybody and it accuses the person nearest the thing, who cannot reply to it, who hears about it from somebody outside the building, and who says nothing** — ⚠ **so the writer never learns that the sentence landed at all, and writes the next one the same way.**'));
out.push(sample(null, ['"The sentence said nine cartons were found to be damp. It was read as being about Abu Yasser, who heard it from Jaber\'s driver three weeks ago. What it should have said is that I counted the store twice and found them, that the store is overflow because I arranged it, and that the roof is on no inspection list and the list is mine. And I am sending it to everybody who read the first one."', '⚠ **The loop in the unwritten thing is the thing to leave the class with, and it is closed by one habit and not by better grammar.** **Ask what the habit is.** ⚠ **The answer the class should reach is: find out where your sentences landed** — **because the writer is the only person in the chain who never finds out, and the only one who could fix it.**']));
out.push(p('**The paper-and-decision word list, Unit 2\'s six:** _an agentless passive · a nominalisation · a culprit · a finding · an institutional voice · a named individual_. ⚠ **Twelve items now.** **It runs to Unit 12 and is collected in the Unit 12 key.**'));
out.push(stage('5', 'Read – exam practice'));
out.push(table(['Line', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'], [['**Answer**', 'CORRECT', 'TO', 'CORRECT', 'BEEN', 'CORRECT', 'CORRECT', 'THEM', 'CORRECT', 'CORRECT', 'THAT', 'TO', 'CORRECT']], [0.9, 0.95, 0.5, 0.95, 0.6, 0.95, 0.95, 0.6, 0.95, 0.95, 0.6, 0.5, 0.95]));
out.push(p('⚠ **Six errors and six correct lines, which is about the exam\'s own proportion.** **Why each:** **2** *for to a gauge check* — **the preposition is doubled.**  **4** *it was been refused* — **a passive cannot take *was been*.**  **7** *have since gone them to Beirut* — ***gone* is intransitive and cannot take an object.**  **10** *knowing without that opening* — ***that* has nothing to introduce.**  **11** *you could to approve* — **a modal is followed by the bare infinitive.**'));
out.push(p('⚠ **The marking note, and all three points lose real marks.** ⚠ **A correct line must be answered CORRECT** — **a learner who leaves blanks for the six right lines scores six out of twelve on a paper they understood.** ⚠ **The extra word must be grammatically wrong and not merely unnecessary**, which is Cambridge\'s own note: **learners cross out *since* in line 7 or *further* in line 5 because the prose would survive without them, and both are grammatical and both are wrong answers.** **And answers go in capital letters.**'));
out.push(p('⚠ **The distractor to discuss is line 7.** **Most learners find the fault and answer SINCE rather than THEM**, because *since* reads as the flabbier word. ⚠ **Ask them to read the line without *since* and then without *them*.** **Both read; only one is grammatical.**'));
out.push(stage('6', 'Write with help – sample exam answer (131 words)'));
out.push(sample(null, [
  '**REPORT: STEEL RECEIVED AT THE WRONG GAUGE. B. Nassif, 8 February.**',
  '**What happened.** Sixty sheets were delivered on 2 February at 1.2 mm against an order for 1.5 mm. The delivery note states 1.5. Nine sheets were cut before the error was found on the morning of the 3rd. No part has shipped.',
  '**What made it possible.** Incoming steel is gauged at the rack and not at the gate, and the gate sheet has no column for a gauge. The man cutting worked from the delivery note, which was wrong.',
  '**What it has cost.** Nine sheets, about 14,000, and half a day of the long saw.',
  '**Recommendation.** A gauge column on the gate sheet. I have ruled one in by hand until the sheet is reprinted. ⚠ **The reprint needs your signature, and the supplier needs a telephone call from you rather than from me.**',
  '⚠ **One hundred and thirty-one words. No *I think*, and it still says who did what.**',
]));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['No *I think* — and still says who did what', '✓ ⚠ **_the man cutting worked from the delivery note, which was wrong_ is the model clause**'],
  ['What happened, dated', '✓ two dates'],
  ['What made it possible, not who to blame', '✓ a missing column'],
  ['A recommendation with a person attached to it', '✓ and the person is the reader, which is correct and uncomfortable'],
  ['120 to 140 words — count them', '✓ 131'],
], [3.4, 2.6]));
out.push(p('⚠ **Marking the exam task.** **Content: four points, all present (8).** **Organisation: headed sections, and the recommendation last (4).** **Language: report register, no first-person opinion, passive used where the actor is noise and active where it is not (4).** **Range and accuracy (4).** ⚠ **Length is a band, not a target: 118 words loses content and 155 loses organisation**, and both are commoner than a report inside the band. **Count the words with the class the first three times.**'));
out.push(stage('7', 'Write freely – sample (236 words)'));
out.push(sample(null, [
  'The sentence was *the handover file was found to be incomplete*, and it was about me, and I read it in my own leaving file eight months after I had left.',
  'I had asked for it under the company\'s own policy because I was applying for something that wanted a reference. The file had four pages in it and that was one of eleven lines.',
  'What had happened was that I left on a Thursday and my replacement started on the following Monday, and the two days in between were a weekend, and the handover file I wrote covered every live job except two that came in on the Thursday afternoon after I had finished writing it. I telephoned on the Monday and told my replacement about both. She told me later that she had never had any difficulty.',
  'There was nobody to reply to. The man who wrote the sentence had left as well. The woman I handed over to was not asked, and would have said there was no problem, and nobody has ever asked her.',
  'What the sentence should have said is that two jobs that arose on the last afternoon were handed over by telephone on the Monday. Nineteen words, and the file would have been complete.',
  'I am the only person who has ever read that line, eight months late, and I am the only person it could ever affect. I have never been able to think of anything to do about it.',
]));
out.push(box('Homework – marking note', [
  'The final text is marked for the content.',
  '⚠ **The second part is the hardest homework in Book 1 and some of the class will not do it**: find the sentence in your own last report that would be read as being about one person, and send the version with the facts in it to everybody who read the first one. ⚠ **Collect the outcomes without pressing.** **The usual report, from those who do it, is that nobody minded and that the subject had known for weeks.**',
], C.lblue, C.navy));

// ===================== UNIT CHECK =====================
out.push(pb());
out.push(stage('✓', 'Unit 2 check'));
out.push(p('**A  Language.**'));
out.push(table(['**Q**', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'a', 'a', 'c', 'a', 'b', 'c', 'b', 'b']], [1.2, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('⚠ **Q6 is the one that separates the class.** *The delay cost us nine days* — **the past simple of *cost* is *cost***, and *costed* exists but means something else (to work out the cost of a job). ⚠ **Q2 is the middle form of 2.2 in a single question**: *was set by Mr Ayoub* keeps the limit as the subject, and a learner who answers *set* has produced an active sentence with the wrong subject. **Q8 is the unit\'s image, and the participle is the whole of it: *a name with the protection taken off it*.**'));
out.push(p('**B  Listening (Track 2.15).**   **The sentence:** *nine cartons in the fourth store were found to be damp*.   **Who it was read as being about:** ⚠ **Abu Yasser — one man racks that store.**   **How they heard:** ⚠ **from Jaber\'s driver, who had it from somebody in the office.**   **How long they said nothing:** ⚠ **three weeks.**   **Why they said nothing:** ⚠ **there was nothing to answer — he is not in the sentence, so he could not reply to it.**   **What the writer is sending, and to whom:** ⚠ **the version with the finder, the dates, the overflow arrangement and the inspection list in it, to everybody who read the first one** — **because sending it only to him would be an apology, and an apology is not a correction.**'));
out.push(p('**C  Reading.**  ⚠ **Version 2 is worse than version 3 because the actor is at the end of a passive, where a name reads as a boast or a defence** — **a name added at the end of a passive is a name that has been added under pressure, and version 3 puts it at the front where it is simply the subject.** ⚠ **The hard clause in version 4 is *which was my arrangement*:** **nobody asked for it, nobody would have found it, and it turns a report about damp cartons into a report that includes a decision of the writer\'s.** **It is also the clause that makes version 4 the only one Abu Yasser does not appear in.**'));
out.push(p('**D  Writing – sample (96 words).**'));
out.push(sample(null, [
  '**The sentence.** *Three cartons were mismarked on the night of the 12th.*',
  '**Actor at the front.** *Fadi mismarked three cartons on the night of the 12th.*',
  '**Middle form.** *Three cartons were mismarked by Fadi on the night of the 12th.*',
  '**No actor, with a remedy.** *Three cartons were mismarked on the night of the 12th. The night codes are handwritten and the light at the second rack is one bulb. A printed code sheet and a second bulb are ordered.*',
  '⚠ **I would send the third.** **Nothing that happens next depends on Fadi\'s name, it was his first night, and the two sentences that follow are the only part of it anybody can act on.**',
]));
out.push(box('Marking the unit check', [
  '**A  Language — 8 marks**, one each.',
  '**B  Listening — 6 marks**, one for each gap. ⚠ **Give the mark for *why they said nothing* only if the answer is about being unable to reply, not about reluctance.** *He did not want to make trouble* **is the wrong answer and is what half the class will write.**',
  '**C  Reading — 4 marks:** the name at the end of a passive reads as boast or defence (1) · added under pressure, so it goes at the front (1) · *which was my arrangement* identified (1) · what it changes, including that Abu Yasser disappears (1).',
  '**D  Writing — 7 marks:** three versions, correctly formed (3) · a remedy in the nameless one (1) · a choice made (1) · ⚠ **a reason for the choice that refers to what happens next and not to kindness (2)**. **No marks for *because it is fairer to Fadi*** — **the unit\'s test is what the reader has to do.**',
  '**Total 25.** ⚠ **The profile to expect is strong A and B, weak D** — **and the weakness is always the same one: a learner who chooses the nameless form for the right reason and justifies it with a kind one.** **The kindness is a consequence, not a criterion, and the distinction is worth two marks because it is worth the whole unit.**',
], C.lteal, C.navy));
out.push(note('Teacher\'s note. Three faults to watch, and the remedy for each. First, the overcorrection: a learner leaves this unit believing the passive is a fault and de-passivises everything, including the sentences the unit holds up as correct. The remedy is in 2.1 and 2.3 and must be taught as hard as the main point — make the class defend a passive and keep a nominalisation, in writing, at stage 4 of each cycle, and mark down a page with no empty spaces in it. Second, the kindness criterion: learners decide whether to name somebody by how harsh it feels rather than by what the reader must do, and they will produce the identifying description — "the new man on the second rack" — as the tactful compromise. The remedy is the count: ask how many people in that building would decode it, and the answer is always everybody. Third, and this is the one that matters outside the classroom: the unit can make a learner feel accused. Most of the room has written an agentless passive that landed on somebody, and 2.7 is a scene in which a decent person discovers she has cost a colleague a fortnight of being looked at. Keep the diagnosis on the sentence and off the writer, use Nour as the one who got it wrong — the book has her getting it wrong on purpose, in January, in writing, so that no learner has to volunteer — and let the role cards carry any case a learner does not want to own. What the class should leave with is not guilt and not a style rule. It is two questions they will ask of a passive for the rest of their working lives, and the habit of finding out where their sentences landed.'));
out.push(sp());
out.push(p('_Unit 3 — **The Case Against a Decision Already Half-Taken**: the concession that costs you something, the other side put better than they put it, and the one figure that decides it._', { color: '7F7F7F' }));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B2 · Book 1 · Syria Edition · Unit 2 · Answer Key');
module.exports = out;
