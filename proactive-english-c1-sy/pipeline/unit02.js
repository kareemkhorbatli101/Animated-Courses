// Proactive English C1 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['THREE DRAFTS SAID…', 'ONE DRAFT SAYS…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room names the reader it works on and the reader it fails.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — and mark only what that reader would notice. Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';

out.push(h1('Unit 2  One Claim, Three Readers, One Draft'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'At B2 this class wrote **three drafts** of the same claim, one for a colleague, one for a stranger and one for a committee, and then chose which to send. ⚠ **This unit writes one.** **The single document that three different readers all act on is the hardest thing in the level and it is also the ordinary case**, because a letter is copied to people it was not written to and a page is forwarded within the hour.',
  '**2.1** states one claim and names the three readers it has to survive.   **2.2** finds the hedge that holds for all three and the one that holds for one.   **2.3** moves the weight of a sentence so that the claim arrives last.   **2.4** puts a whole clause where a noun would go.   **2.5** says what one draft costs that three drafts did not.   **2.6** writes the single letter all three readers act on.   **2.7** mediates between a letter and the reader who was copied in and not written to.',
  '**Exam practice in 2.7:** C1 Advanced **Reading and Use of English Part 4** (key word transformations), **Writing Part 2** (a letter or email) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring one thing to the first lesson of this unit.** **Something you have had to say to three different kinds of reader** — a parent, a ministry and a member of staff; a client, an insurer and a court; a donor, a field office and a board. **2.1 runs on it, and the cycle that hurts is 2.5.**',
  '**And one sentence from Unit 1 stays on the board for the whole of this unit:** ⚠ **a fact with a date cannot be argued with and a reason with a feeling can.** **Every claim in this unit has to survive three readers, and the only thing that survives all three is a fact.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 2.1 =====================
out.push(pb());
out.push(h2('2.1  One claim, and the three people it has to survive'));
out.push(p('**Function:** stating one claim and naming the three readers it has to survive   ·   **Grammar:** the claim written once · the reader\'s action named beside each   ·   **Pronunciation:** a claim said once, with no softening before it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the thing you brought — one claim, in one sentence, and then the three readers it has to survive, named.** ⚠ **Name the readers by what they do and not by their titles**: _the man who signs the cheque_, not _the finance director_. Your teacher writes the ten claims and the thirty readers on the board.'));
out.push(board('Three drafts: one warm, one formal, one short.', 'One claim, and three actions it has to be able to produce.'));
out.push(p('**b**  Which of these is one claim rather than three? **1** _The entry was never submitted, we are sorry, and we will do better next year._  **2** _Nine candidates were entered and the tenth entry was never submitted._  **3** _There appears to have been an administrative issue with one entry._  **4** _We have had a difficult term and one entry has suffered as a result._  **5** _The entry form for one candidate was signed on 3 February and was not sent._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the test of a single draft is?   **A** that all three readers like it   **B** **that each of the three readers can take the action that is theirs to take, and that none of the three needs a different sentence to do it**   **C** that it is short enough for all three'));
out.push(p('**b**  Listen again. **1** What three readers does Mr Tayara have for the same claim, and what action does each have to take?   **2** What does Mrs Oueidat say happens to a document written for one reader when a second reader gets it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  The tenth entry', [
  ['Ms Huda', 'Mr Tayara brought a claim with three readers. The claim first, please, and nothing else.'],
  ['Mr Tayara', '_The entry form for one candidate was signed on 3 February and was not sent._'],
  ['Ms Huda', 'And the three readers.'],
  ['Mr Tayara', '**The candidate\'s mother, who has to decide whether to sit him somewhere else in June.** **The examinations office at the directorate, who have to decide whether a late entry can be taken.** **And my own deputy, who signed it.**'],
  ['Mrs Rizk', 'Three completely different letters.'],
  ['Mr Tayara', '**That is what I wrote. Three letters, on the same evening, in February.** ⚠ **And the mother was sent the one for the directorate by somebody in the office.**'],
  ['Mr Shihabi', 'Which is what always happens.'],
  ['Mr Tayara', '⚠ **It is what always happens and I had not planned for it.** **The directorate letter says _an administrative oversight has been identified_, which is true and which is not a sentence you send to a mother.**'],
  ['Mrs Oueidat', 'May I say what that is from where I sit? ⚠ **A document written for one reader does not become a worse document when a second reader gets it. It becomes a different claim.**'],
  ['Dr Qabbani', 'Say more, because I think that is what happened to my paper.'],
  ['Mrs Oueidat', '⚠ **The words do not change and the reader supplies the rest.** _An administrative oversight has been identified_ **means, to the directorate, _we are telling you before you find out_.** **To the mother it means _somebody has decided not to tell me what happened_.** **Same eight words, two claims.**'],
  ['Mr Zahreddine', 'So what is the test for one draft?'],
  ['Mrs Khoury', '⚠ **Not that all three like it.** **That each of the three can take the action that is theirs** — **and that none of them needs a different sentence to do it.**'],
  ['Mrs Tarabishi', 'Which is three actions from one page.'],
  ['Mrs Khoury', '⚠ **Three actions, and you write them down before you write the page.** **The mother has to decide about June. The directorate has to decide about a late entry. The deputy has to say what he remembers about 3 February.** **If a sentence does not help one of those three, it is in the letter for somebody\'s comfort.**'],
  ['Mrs Ajouz', 'And if the actions conflict?'],
  ['Mrs Khoury', '**Then say so in the letter, which is what three drafts let you avoid.**'],
  ['Mr Tayara', '⚠ **In this case they do conflict.** **The directorate will not take a late entry if the school admits the form was signed and not sent** — **and that is exactly what the mother is entitled to know.**'],
  ['Jad', 'So one of the three readers has to be told something that costs you the thing the other one wants.'],
  ['Mr Tayara', '🔊 ⚠ **Yes, and that is the whole of it, and three drafts had let me not notice for eight months.** **A single draft makes you choose in advance, in writing, and once** — **and the thing I had been doing was choosing three times and never admitting that I had chosen at all.**'],
]));
out.push(sp());
out.push(box('Language box – one claim, three readers', [
  '**Write the claim once, as a fact.** _The entry form for one candidate was signed on 3 February and was not sent._ ⚠ **A fact survives a change of reader and a judgement does not** — which is Unit 1\'s finding doing a second job.',
  '**Name the three readers by the action they have to take, not by their titles.** _The mother, who has to decide about June._ _The directorate, who have to decide about a late entry._ _The deputy, who signed it._ ⚠ **Write the three actions down before you write the page.** **If a sentence does not help one of the three, it is in the letter for somebody\'s comfort.**',
  '⚠ **The test of a single draft is not that all three readers like it.** **It is that each of the three can take the action that is theirs, and that none of them needs a different sentence to do it.**',
  '⚠ **What happens when a document written for one reader reaches a second one, and it is not what anybody expects.** **It does not become a worse document. It becomes a different claim.** **The words do not change and the reader supplies the rest.** _An administrative oversight has been identified_ **means _we are telling you before you find out_ to one reader and _somebody has decided not to tell me_ to another.** **Eight words, two claims.**',
  '**And when the three actions conflict, say so in the letter.** ⚠ **That is the thing three drafts let a writer avoid**: _the directorate will not take a late entry if we admit the form was signed and not sent, and that is what you are entitled to know._ **One draft makes you choose in advance, in writing, and once.**',
  '**One practical consequence, and it is the reason this is not an academic exercise.** ⚠ **A letter written for one reader will reach a second one, and the second reader is usually the one with something to lose.** **Mr Tayara\'s mother was sent the directorate\'s letter by somebody in his own office.** **Assume the forwarding** — **it costs nothing to write for it and it costs eight months not to.**',
  '**The three readers that are almost always there, whatever the document.** ⚠ **The person it is about. The person who has to decide. The person who did it.** **Most letters are written to the second and are read by all three.**',
  '**Pronunciation.** 🔊 **Track 2.2** **Say the claim once, with nothing in front of it.** ⚠ **No _I am afraid that_, no _it appears that_, no _unfortunately_.** **A claim with a cushion in front of it tells the reader that you expect to be argued with** — **and a reader who is told that, argues.**',
  '**Practise:** State one claim and name three readers by their actions. **1** something that was not sent  **2** a figure that was wrong  **3** a date that cannot be met  **4** a decision somebody else took  **5** one where two of the three actions conflict — and say which',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a claim and its three readers from the card. B does one thing: **names the action each reader has to take, and then says which two of the three conflict.** ⚠ **Two rows on each card have no conflict at all** — and B must say so rather than inventing one, **because a writer who expects a conflict everywhere writes three drafts for ever.** Swap cards.'));
out.push(dlg(null, [
  ['A', 'Claim: __________.   Readers: __________ · __________ · __________.'],
  ['B', 'Actions: __________ · __________ · __________.'],
  ['B', 'Conflict: **none / __________ against __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_The form was signed on 3 February and not sent. Mother · directorate · deputy._', '_Four pallets were eleven degrees over. Customer · insurer · depot manager._'],
  ['_⚠ The 06.20 is printed as 06.40. Passengers · transport office · depot clerk._', '_⚠ Three results from 2023 are not in the system. Editor · laboratory · the three patients._'],
  ['_The second sample was taken in thirty-one of forty-one. Editor · referee · the unit._', '_The rota was amended by hand and not initialled. Pharmacist · the nine · whoever amended it._'],
  ['_⚠ The code was on no slip until 12 March. Distributor · our own office · the drivers._', '_⚠ 189 sheets account for 214 holdings. Supervisor · enumerators · the two villages._'],
  ['_The bolts measure M12 against a specified M16. Owner · contractor · insurer._', '_Nineteen were turned away on Saturdays. Donor · field office · the nineteen._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the thirty actions, and which pairs conflict. ⚠ **The four rows marked ⚠ have no conflict in them at all**, and the reason is worth two minutes: **in all four, nobody\'s interest is damaged by the claim being true.** **A printed timetable being wrong costs the transport office nothing to admit.** **That is the finding: a conflict between readers is not caused by having three readers — it is caused by one of them having something to lose.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own claim and write **the three readers and the three actions, in a column**, before you write anything else. ⚠ **Then mark the pair that conflicts, if there is one.** **If there is not, write _none_ and say what that tells you** — **it usually means the claim costs nobody anything, and those are the letters that take four minutes.**'));
out.push(p('**b**  Swap. Your partner reads your three actions and **writes the one sentence that only one of the three readers needs.** ⚠ Then the hard one: **they say which reader it is for, and you decide whether that sentence stays in a single draft.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara brought a claim with three readers: the entry form for one candidate was signed on 3 February and was not sent. His three readers are the candidate\'s mother, who has to decide whether to sit him somewhere else in June; the examinations office at the directorate, who have to decide whether a late entry can be taken; and his own deputy, who signed it. Mrs Rizk said that is three completely different letters, and it is what he wrote — three letters on the same evening in February — and the mother was sent the one for the directorate by somebody in the office. Mr Shihabi said that is what always happens, and it is what always happens and he had not planned for it: the directorate letter says an administrative oversight has been identified, which is true and is not a sentence you send to a mother. Then Mrs Oueidat said what that looks like from where she sits: a document written for one reader does not become a worse document when a second reader gets it, it becomes a different claim. Dr Qabbani asked her to say more, thinking it was what had happened to his paper, and the words do not change and the reader supplies the rest. An administrative oversight has been identified means, to the directorate, we are telling you before you find out; to the mother it means somebody has decided not to tell me what happened. Same eight words, two claims. Mr Zahreddine asked what the test for one draft is, and Mrs Khoury said not that all three like it: that each of the three can take the action that is theirs, and that none of them needs a different sentence to do it. Mrs Tarabishi said that is three actions from one page, and three actions written down before the page is written — the mother decides about June, the directorate decides about a late entry, the deputy says what he remembers about 3 February — and if a sentence does not help one of those three, it is in the letter for somebody\'s comfort. Mrs Ajouz asked what happens if the actions conflict, and then you say so in the letter, which is what three drafts let you avoid. In this case they do conflict: the directorate will not take a late entry if the school admits the form was signed and not sent, and that is exactly what the mother is entitled to know. And Mr Attar said so one of the three readers has to be told something that costs you the thing the other one wants — which is the whole of it, and three drafts had let Mr Tayara not notice for eight months. A single draft makes you choose in advance, in writing, and once; what he had been doing was choosing three times and never admitting that he had chosen at all._'));
out.push(p('**Listener task:** write your partner\'s three actions and the pair that conflicts.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the single page Mr Tayara wrote in October, after eight months. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _to Mrs Haddad; copied to the examinations office and to Mr Sabbagh_ · **7 October**',
  '**The entry form for Karam was signed by the deputy head on 3 February and was not sent.** It was found in the second drawer of the office desk on 29 September, with nine others that had been sent. **The nine were entered; Karam was not.**',
  '**What this means for June, which is the decision in front of you.** **The directorate will accept a late entry up to 30 November on payment of a second fee**, which this school will pay, **and will not accept one after that date in any circumstances.** **So there are two courses and no third**: the late entry, which I have begun and which needs your signature by the fourteenth, or an entry at the governorate centre in the spring, which I can arrange and which puts him in a hall of about four hundred.',
  '**What I am telling the directorate, and I would rather you read it here than hear it later.** **I am telling them that the form was signed and not sent, by this school, and that nobody noticed for seven months.** ⚠ **I am aware that this makes the late entry harder to obtain.** **The alternative was to describe it as an administrative oversight, which is what I wrote in February** — **and an oversight is something that happens to a school rather than something a school does.**',
  '**What the deputy head remembers, in his own words, which I have not edited.** _"I signed ten forms at about six in the evening and I am certain I put all ten in the external tray. I cannot account for one of them being in a drawer."_ **I have no reason to doubt it and no way of checking it.** **The external tray was emptied by three different people that week.** **Two of the three have left the school and the third does not remember the week at all**, which I record because it is the reason there will be no answer to the question of how the form reached a drawer. ⚠ **I am not going to leave that question open in this letter and then pursue it quietly afterwards.** **It cannot be answered and I shall not be asking anybody else about it.**',
  '**What has changed here since 29 September.** **Entry forms are now counted twice, against the register, by two people on the same morning**, and the count is initialled. **In February they were counted once, by whoever was in the office.** **That is the whole of the change and it would have caught this.**',
  '**What I am not doing.** **I am not naming the person who emptied the tray**, there being three and no record of which. ⚠ **And I am not going to tell you that this does not matter.** **It costs Karam a choice between a second fee in November and a hall of four hundred in the spring, and he did nothing.**',
  '**M. Tayara** · _Head_ · **telephone before Thursday if the fourteenth is not possible**',
]));
out.push(item('1', 'Who are the three readers, and what action does each of them have to take?'));
out.push(item('2', 'He says one sentence makes the late entry harder to obtain. Which, and why does he write it anyway?'));
out.push(item('3', 'What does he refuse to do, and what reason does he give for each refusal?'));
out.push(writers([
  'One page for three readers: **the claim, once, as a fact** → **what it means for the reader whose decision it is** → **what you are telling the second reader, said in front of the first** → **what the third reader says, unedited** → **what has changed since** → **what you are not doing** → **and one instruction with a date.**',
  '⚠ **Say what you are telling the other reader, in the letter the first reader is holding.** _I am telling them that the form was signed and not sent, by this school._ **That is the sentence three drafts exist to avoid**, and writing it once costs the writer the thing he wants and buys the only thing a reader of this kind remembers.',
  '**Quote the third reader without editing him.** ⚠ _"I signed ten forms at about six and I am certain I put all ten in the external tray."_ **An unedited quotation is the only way a reader can tell that you have not decided the question** — and _I have no reason to doubt it and no way of checking it_ **is eleven words that keep it undecided.**',
  '**Give the decision as a closed set.** ⚠ _There are two courses and no third._ **A reader deciding anything will look for a third course, and a letter that names the two and closes the set saves them a week of looking.**',
  '⚠ And **refuse to say that it does not matter.** _It costs Karam a choice between a second fee in November and a hall of four hundred in the spring, and he did nothing._ **Every version of this letter that softens that sentence is a letter written for the writer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a single page for three readers (120 words or more).'));
out.push(p('**______________** · _to _______________; copied to _______________ and to ________________ · **______________**   **______________ was ______________ on ______________ and was not ______________.** ______________.   **What this means for ______________, which is the decision in front of you.** **______________ will ______________ up to ______________**, **and will not ______________ after that date.** ⚠ **So there are two courses and no third**: ______________, which needs ______________ by ______________, or ______________, which ______________.   **What I am telling ______________, and I would rather you read it here than hear it later.** ⚠ **I am telling them that ______________.** **I am aware that this makes ______________ harder.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The claim once, as a fact, with no cushion in front of it',
  'Three readers and three actions, all three findable on the page',
  'What you are telling the second reader, written in front of the first',
  'No sentence over forty-five words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their claim sentence**, and the room names the three readers it would have to survive.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260 words or more), to the shape in the writer\'s box: the claim, the decision, what you are telling the second reader, the third reader unedited, what has changed, what you are not doing, and one instruction with a date.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the claim as a fact, three actions findable, the sentence that costs the writer something, and a closed set of courses.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their claim sentence twice: once with a cushion in front of it and once without.** ⚠ **The room says what the cushion did.** **It tells the reader the writer expects to be argued with**, and it is audible. Then the sentence the cycle ends on, which is Mr Tayara\'s: **I had been choosing three times and never admitting that I had chosen at all.**'));
out.push(hw('Take **the three letters you have most recently written about one thing** — or the three drafts you considered — and **write the single page instead.** ⚠ **Then do the part that costs something: find the sentence that only one of the three readers would want, and put it in anyway.** **In most cases it is a sentence that makes your own position worse**, which is why three drafts were comfortable. **Bring the single page and that one sentence, underlined.** **2.2 is about the hedge that survives the journey between readers**, and it starts from a word a translator cannot carry.'));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  The hedge that survives the journey'));
out.push(p('**Function:** finding the hedge that holds for all three readers and the one that holds for one   ·   **Grammar:** _appears to_ · _is likely to_ · _we have not established that_   ·   **Pronunciation:** a hedge said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one hedge you used this year, and what you were hedging against.** ⚠ **Name the risk, not the feeling**: _I did not know whether the second count had been done_, and not _I did not want to commit myself_. Your teacher writes the ten hedges on the board and the ten risks beside them.'));
out.push(p('**b**  Which of these would mean the same thing to a colleague, a stranger and a committee? **1** _It would appear that the figures may require revisiting._  **2** _The second count has not been done._  **3** _We are not entirely confident about the figures at this stage._  **4** _Thirty-one of the forty-one had a second sample; ten did not._  **5** _There are, perhaps, one or two small questions outstanding._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide separates a hedge that travels from one that does not?   **A** length   **B** **a hedge that names what is missing travels; a hedge that names the writer\'s state of mind does not** — because the second one changes meaning with every reader   **C** formality'));
out.push(p('**b**  Listen again. **1** What happens to _we are not entirely confident_ when Mrs Oueidat renders it in court?   **2** What does Dr Qabbani say he found when he replaced four hedges with one sentence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  Not entirely confident', [
  ['Ms Huda', 'Mrs Oueidat has brought a phrase she says she cannot carry.'],
  ['Mrs Oueidat', '_We are not entirely confident about the figures at this stage._ ⚠ **I have had that sentence in three documents this year and it has cost me about forty minutes each time.**'],
  ['Mr Shihabi', 'Why forty minutes?'],
  ['Mrs Oueidat', '**Because counsel asks what it means and I am not allowed to guess.** ⚠ **In Arabic I must choose between _we doubt the figures_ and _we have not checked the figures_** — **and those are two different documents with two different people at fault.**'],
  ['Mrs Rizk', 'And in English it is neither.'],
  ['Mrs Oueidat', '⚠ **In English it is whichever one the reader needs.** **The writer has kept both and handed the choice to the reader** — **and in court the reader is the person paid to take the worse one.**'],
  ['Mr Tayara', 'I write that sentence about four times a term.'],
  ['Dr Qabbani', 'May I bring the same thing from a journal? ⚠ **I had four hedges in a paragraph and a referee asked me to be clearer, and I was angry about it for a week.**'],
  ['Ms Huda', 'And then.'],
  ['Dr Qabbani', '**And then I replaced the four with one sentence: _the second sample was taken in thirty-one of the forty-one and not in ten._** ⚠ **The paragraph got shorter and the claim got weaker, which is what I had been avoiding** — **and the referee accepted it.**'],
  ['Mrs Tarabishi', 'Weaker and accepted.'],
  ['Dr Qabbani', '⚠ **Weaker and checkable.** **My four hedges were protecting a claim I had not measured.** **The one sentence says exactly what is missing and the reader can see the size of the hole.**'],
  ['Mr Zahreddine', 'Then the hedge that travels is the one with the number in it.'],
  ['Mrs Khoury', '⚠ **It is the one that names what is missing.** _The second count has not been done._ _Three sets of results are not in the system._ _I did not reach nine of the fifty positions._ **Every one of those means precisely the same thing to a colleague, a stranger and a committee** — **because none of them is about the writer.**'],
  ['Mrs Ajouz', 'And the ones that do not travel?'],
  ['Mrs Khoury', '⚠ **They are all about the writer\'s state of mind.** _We are not entirely confident._ _It would appear._ _We feel._ **Those are the hedges a reader decodes**, and a reader decodes them in their own favour.'],
  ['Jad', 'So _appears to_ is always wrong?'],
  ['Mrs Khoury', '**No, and that is worth getting right.** ⚠ _The fault appears to be in the handset and not in the line_ **is a hedge about the world and it travels.** _It would appear that there may be a fault_ **is a hedge about the writer and it does not.** **Same two words, two jobs.**'],
  ['Mr Shihabi', 'And how do you tell which you have written?'],
  ['Mrs Oueidat', '🔊 ⚠ **Ask what a hostile reader would have to disprove.** **With _the second count has not been done_ they would have to produce the count.** **With _we are not entirely confident_ they have nothing to disprove and nothing to produce** — **so they decide what you meant, and you have given them the pen.**'],
]));
out.push(sp());
out.push(box('Language box – the hedge that travels', [
  '**The hedge that travels names what is missing.** _The second count has not been done._ · _Three sets of results from 2023 are not in the system._ · _I did not reach nine of the fifty positions._ ⚠ **Every one of those means the same thing to a colleague, a stranger and a committee, because none of them is about the writer.**',
  '**The hedge that does not travel names the writer\'s state of mind.** _We are not entirely confident._ · _It would appear that._ · _We feel._ · _There are perhaps one or two questions outstanding._ ⚠ **Those are decoded by the reader, and a reader decodes in their own favour** — **in court, in the reader\'s favour means the worse of the two available meanings.**',
  '⚠ **The four-second test, and it is the one that settles all of them: what would a hostile reader have to disprove?** **With _the second count has not been done_, they must produce the count.** **With _we are not entirely confident_, there is nothing to produce** — **so they decide what you meant, and you have handed them the pen.**',
  '**_Appears to_ is not the problem; what it is attached to is.** ⚠ _The fault **appears to** be in the handset and not in the line_ — **a hedge about the world, and it travels.** _It **would appear that** there may be a fault_ — **a hedge about the writer, and it does not.** **Two words, two jobs.**',
  '**Four hedges in a paragraph usually mean one unmeasured claim.** ⚠ **Replacing them with a sentence that names what is missing makes the claim weaker and checkable**, and the second of those is what a referee, an insurer or a committee is actually looking for. **Weaker and checkable beats strong and undecodable, every time, with every reader.**',
  '**What a translator has to do with an undecodable hedge, and it is the clearest argument in the cycle.** ⚠ **There is no undecodable hedge in most languages**, so the hedge must be resolved to render it — **and whoever resolves it has written your sentence for you.**',
  '**One more kind, and it is the one professionals write most.** ⚠ **The hedge that names a procedure instead of a fact.** _The figures are subject to verification._ **That names neither what is missing nor the writer\'s state of mind: it names a process somebody else is responsible for** — **and the reader cannot tell whether verification has been attempted, scheduled or merely imagined.** **Replace it with the date:** _the figures will be verified on the ninth._',
  '**Pronunciation.** 🔊 **Track 2.4** **Say the hedge flat, in the middle of the sentence, with no apology round it.** ⚠ **A hedge delivered slowly, with a pause before and after, becomes an admission.** **_The second count has not been done_ is a fact; the same words said in three parts is a confession.**',
  '**Practise:** Replace a state-of-mind hedge with one that names what is missing. **1** a figure you have not checked  **2** a document you have not seen  **3** a person you have not asked  **4** a measurement you could not take  **5** one where naming what is missing makes your own position worse — and keep it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a hedged sentence from the card. B does two things: **says what a hostile reader would have to disprove, and then rewrites the hedge so that it names what is missing.** ⚠ **Two rows on each card already travel** — B must say so and leave them alone, **because rewriting a working hedge is the commonest fault in this cycle.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'A hostile reader would have to disprove: **__________ / nothing.**'],
  ['B', 'Rewritten: **__________** — or **already travels.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_We are not entirely confident about the figures at this stage._', '_It would appear that there may be an issue with one entry._'],
  ['_⚠ Three sets of results from 2023 are not in the system._', '_⚠ I did not reach nine of the fifty positions._'],
  ['_There are, perhaps, one or two small questions outstanding._', '_We have certain reservations about the April column._'],
  ['_⚠ The fault appears to be in the handset and not in the line._', '_⚠ The second count has not been done._'],
  ['_We feel that the arrangement has not been entirely satisfactory._', '_It is felt that a fresh approach might be beneficial._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what a hostile reader would have to disprove in each of the ten. ⚠ **The four rows marked ⚠ already travel and must be left alone.** **Then the finding: of the six that do not travel, five are about the writer and the sixth is about nobody.** _It is felt that a fresh approach might be beneficial_ **has no writer and no fact, and it is the one sentence of the ten that cannot be rewritten.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own hedge from Stage 1 and rewrite it so that it names what is missing. ⚠ **Then write, underneath, what a hostile reader would now have to produce in order to disprove it.** **If the answer is _nothing_, the rewriting has not worked and the hedge is still about you.**'));
out.push(p('**b**  Swap. Your partner is the hostile reader. ⚠ **They say what they would produce.** **Then the harder half: they say which of the two versions they would rather receive**, and almost everybody says the rewritten one — **including about half the people who would rather have sent the original.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat brought a phrase she says she cannot carry: we are not entirely confident about the figures at this stage. She has had it in three documents this year and it has cost her about forty minutes each time. Mr Shihabi asked why forty minutes, and because counsel asks what it means and she is not allowed to guess: in Arabic she must choose between we doubt the figures and we have not checked the figures, and those are two different documents with two different people at fault. Mrs Rizk said and in English it is neither, and in English it is whichever one the reader needs — the writer has kept both and handed the choice to the reader, and in court the reader is the person paid to take the worse one. Mr Tayara said he writes that sentence about four times a term. Then Dr Qabbani brought the same thing from a journal: he had four hedges in a paragraph, a referee asked him to be clearer, and he was angry about it for a week. And then he replaced the four with one sentence — the second sample was taken in thirty-one of the forty-one and not in ten. The paragraph got shorter and the claim got weaker, which is what he had been avoiding, and the referee accepted it. Mrs Tarabishi said weaker and accepted, and he said weaker and checkable: his four hedges were protecting a claim he had not measured, and the one sentence says exactly what is missing so the reader can see the size of the hole. Mr Zahreddine said then the hedge that travels is the one with the number in it, and Mrs Khoury said it is the one that names what is missing — the second count has not been done; three sets of results are not in the system; I did not reach nine of the fifty positions. Every one of those means precisely the same thing to a colleague, a stranger and a committee, because none of them is about the writer. Mrs Ajouz asked about the ones that do not travel, and they are all about the writer\'s state of mind: we are not entirely confident, it would appear, we feel — and a reader decodes those in their own favour. Mr Attar asked whether appears to is therefore always wrong, and no: the fault appears to be in the handset and not in the line is a hedge about the world and it travels, while it would appear that there may be a fault is a hedge about the writer and it does not. Same two words, two jobs. And asked how you tell which you have written, Mrs Oueidat gave the test: ask what a hostile reader would have to disprove. With the second count has not been done they would have to produce the count. With we are not entirely confident they have nothing to produce, so they decide what you meant, and you have given them the pen._'));
out.push(p('**Listener task:** write your partner\'s rewritten hedge and what a hostile reader would have to produce.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note Mrs Oueidat attaches to a certified translation. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT · CERTIFIED TRANSLATOR** · _covering note to the translation of 14 October_ · _to the instructing solicitor, the court office and the client_',
  '**Three sentences in the original cannot be rendered into Arabic without a choice being made, and I have made none of the three.** They are marked in the margin as **[1]**, **[2]** and **[3]**, and this note says what each choice is. **The translation is accurate; the note exists because accuracy in these three places is not possible without deciding something the original left open.**',
  '**[1]** _"We are not entirely confident about the April figures."_ **Arabic has no form that keeps both readings.** **The two available renderings are _we doubt the April figures_ and _we have not checked the April figures_** — **the first attributes a judgement to the writer and the second attributes an omission to the writer\'s office.** **I have rendered it as the second and marked it.** **If the instructing party intends the first, a corrected certificate can be issued the same day.**',
  '**[2]** _"It is felt that a fresh approach may be required."_ **This sentence has no subject and no agent.** **A rendering must supply one, and the three candidates are the board, the writer, and an unnamed third party.** **I have supplied none and have rendered the clause impersonally, which is unusual in Arabic and will read as deliberate.** ⚠ **It is deliberate. I am not able to identify who felt it.**',
  '**[3]** _"The delay was regrettable."_ **The English does not say by whom, to whom, or whether anybody is at fault.** **The Arabic forms available all carry one of those.** **I have used the narrowest** — **a statement that the delay occurred and was unwelcome** — **and it is narrower than the original.**',
  '**What I have not done, and would do on instruction.** **I have not resolved any of the three.** **I have not added a translator\'s gloss to the body of the translation**, a gloss in the body being a change to the document. **And I have not drawn the court\'s attention to the three places other than by this note**, which is the proper route.',
  '**One practical point about [1], which matters more than the other two.** **The April figures are referred to twice more in the original, on pages four and nine, and in both places the English is unambiguous: _the April figures have not been checked_.** ⚠ **So the reading I have used is the one the rest of the document supports.** **I record this because it is evidence and not because it is my opinion.**',
  '**One further point, about the note itself.** **This note is not part of the translation and is not certified.** **It is a record of three decisions and of the evidence for one of them**, and it should be read by whoever is deciding what the April figures mean and by nobody else. ⚠ **If the certificate is relied on in proceedings, the three marginal marks are in the certified text and this note is not** — **which is the arrangement the court office asked for in March and which I record here so that nobody has to ask again.**',
  '**M. Oueidat** · _certified 14 October_',
]));
out.push(item('1', 'Why does the covering note exist at all, if the translation is accurate?'));
out.push(item('2', 'What are the two possible renderings of **[1]**, and what does each one attribute to whom?'));
out.push(item('3', 'What evidence does she give for the reading she chose in **[1]**, and why does she say she is recording it?'));
out.push(writers([
  'A covering note on three undecodable sentences: **the claim that a choice is unavoidable, and that you have made none of them** → **each sentence quoted, with the two or three available readings and what each attributes to whom** → **which you used, and the marking** → **what you have not done** → **and any evidence in the document itself for the reading you chose.**',
  '⚠ **Name what each reading attributes, and to whom.** _The first attributes a judgement to the writer and the second attributes an omission to the writer\'s office._ **A reader cannot choose between two renderings described as _stronger_ and _weaker_**, and can choose at once between two that name who is at fault.',
  '**Say when a sentence has no agent, and refuse to supply one.** ⚠ _I have supplied none and have rendered the clause impersonally, which is unusual in Arabic and will read as deliberate. It is deliberate._ **Four words that stop a reader correcting you in the wrong direction.**',
  '**Tell the reader when your version is narrower than the original.** ⚠ _I have used the narrowest, and it is narrower than the original._ **A translator who says so has not made a mistake; a translator who does not has made a silent one.**',
  '⚠ And **separate evidence from opinion in the same sentence.** _So the reading I have used is the one the rest of the document supports. I record this because it is evidence and not because it is my opinion._ **The distinction is the whole professional claim of the note**, and it is made in nineteen words.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on an undecodable sentence (120 words or more).'));
out.push(p('**______________** · _covering note to _______________ · _to _______________, ______________ and _______________   **______________ sentences in the original cannot be ______________ without a choice being made, and I have made ______________.** ⚠ **The ______________ is accurate; the note exists because ______________.**   **[1]** _"______________"_ **The two available readings are ______________ and ______________** — **the first attributes ______________ to ______________ and the second attributes ______________ to ______________.** **I have used ______________ and marked it.**   **[2]** _"______________"_ ⚠ **This sentence has no ______________.** **A reading must supply one, and the candidates are ______________, ______________ and ______________.** **I have supplied none.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Each reading named by what it attributes, and to whom',
  'Every hedge in your own prose names what is missing, not your state of mind',
  'Where your version is narrower than the original, said so',
  'Evidence separated from opinion in one sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their rewritten hedge**, and the room says what a hostile reader would have to produce.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: three undecodable sentences, the readings each one allows, what you used, what you have not done, and the evidence from the document itself.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every reading named by what it attributes, no state-of-mind hedges in your own prose, narrowness declared, and evidence separated from opinion.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a hedge twice: once flat and in the middle of its sentence, and once slowly with a pause either side.** ⚠ **The room says what the pauses did.** **They turn a fact into a confession**, and the same four words do it every time. Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **you have given them the pen.**'));
out.push(hw('Find **four hedges in your own writing from this month** and sort them into the two kinds: **those that name what is missing and those that name your state of mind.** ⚠ **Rewrite the second kind**, and then do the test on each rewriting: **what would a hostile reader have to produce?** **If the answer is still _nothing_, you have rewritten the words and not the hedge.** **Bring the four and the four answers.** **2.3 is about where the claim arrives in a sentence**, and it starts from a subject four lines long.'));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  Where the claim arrives'));
out.push(p('**Function:** moving the weight of a sentence so that the claim arrives last   ·   **Grammar:** _it_-extraposition · end-focus · the subject that is four lines long   ·   **Pronunciation:** holding the voice up to the end of a long subject'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads out five sentences, each with a very long subject, **and stops at the verb.** ⚠ **For each one, say what you were holding in your head while you waited.** **Most people can hold two things and not four.** Your teacher writes the count beside each sentence.'));
out.push(board('Three drafts put the claim where each reader expects it.', 'One draft puts the claim at the end, where every reader looks.'));
out.push(p('**b**  Which of these makes the reader hold least before the verb? **1** _It is clear from the table that the second sample was taken in thirty-one of the forty-one and not in ten._  **2** _That the second sample was taken in thirty-one of the forty-one patients and not in the remaining ten is clear from the table._  **3** _The question whether the ten who had no second sample were comparable to the thirty-one who did remains open._  **4** _It was never established whether the April figures had been checked before circulation._  **5** _Whether the figures for April had been checked before they were circulated to the three offices concerned was never established._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a long subject does to a reader?   **A** it makes the sentence formal   **B** **it makes the reader hold several things before they are told why they are holding them** — and the number most readers can hold is two   **C** it makes the sentence unclear'));
out.push(p('**b**  Listen again. **1** What did the referee write about Dr Qabbani\'s first sentence?   **2** What does Mrs Khoury say the end of a sentence is for, and what did B2 teach about it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  Four lines before the verb', [
  ['Ms Huda', 'Dr Qabbani has brought one sentence and a referee\'s comment on it.'],
  ['Dr Qabbani', '_That the second sample was taken in thirty-one of the forty-one patients admitted during the study period and not in the remaining ten, who presented at night in eight cases, is apparent from Table 2._ **And the comment: _I had to read this three times._**'],
  ['Mr Shihabi', 'So did I, and I was listening for it.'],
  ['Dr Qabbani', '⚠ **It is not ungrammatical and there is no word in it I would change.**'],
  ['Mrs Tarabishi', 'May I say what happens to me reading it? ⚠ **I am holding thirty-one, forty-one, ten and the eight at night, and I do not yet know what any of them are for.** **Four things, and the verb is in line four.**'],
  ['Mr Tayara', 'How many can you hold?'],
  ['Mrs Tarabishi', '⚠ **Two.** **And I think that is not about me — I think two is what anybody holds** — **and a writer who asks for four is asking the reader to do the filing as well as the reading.**'],
  ['Mrs Rizk', 'And the fix is to turn it round.'],
  ['Dr Qabbani', '_It is apparent from Table 2 that the second sample was taken in thirty-one of the forty-one and not in ten._ ⚠ **Same facts. The reader is told what the sentence is for in six words.**'],
  ['Mrs Oueidat', '**And in Arabic it is a better sentence too**, which is unusual — ⚠ **most of what I have to repair in English documents gets worse when it is tidied.**'],
  ['Mrs Ajouz', 'Why does _it_ help? There is nothing in it.'],
  ['Mrs Khoury', '⚠ **Because it holds the subject\'s place and lets the long material come after the verb**, where the reader already knows what it is for. **The word means nothing and does the whole of the work.**'],
  ['Mr Zahreddine', 'And the end of the sentence?'],
  ['Mrs Khoury', '⚠ **The end of the sentence is where the reader looks for the new thing, and that is the half of this nobody is taught.** **B2 taught us to put emphasis where we wanted it** — _it was the roller that failed_ — **and that is choosing.** **This is not choosing: the end is where attention lands whether you have chosen or not.**'],
  ['Jad', 'So if the claim is not at the end, something else is being emphasised by accident.'],
  ['Mrs Khoury', '⚠ **Something always is.** **In the original, the last thing before the verb is _who presented at night in eight cases_** — **which is a detail from the limitations and is sitting where the claim should be.**'],
  ['Dr Qabbani', '**Nobody has ever said that to me about my writing.**'],
  ['Mr Shihabi', 'My desk says it every week by doing it. ⚠ **They move the last clause to the front and the first one to the end, and they do not explain, and the paragraph is better.**'],
  ['Mrs Ajouz', 'Does this work on a sentence that is not about figures? Mine are all about people.'],
  ['Mrs Khoury', '⚠ **It works on anything a reader has to hold.** _That the pharmacist who signed for the third consignment in April has since left and cannot be asked is the reason the figure stands._ **Four things again, and not one of them a number.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **Then the test is to read your own sentence and stop at the verb, out loud, and count what you are holding.** **Three or more and it has to be turned round.** **It takes four seconds and I have never once done it.**'],
]));
out.push(sp());
out.push(box('Language box – where the claim arrives', [
  '**The long subject, and what it costs.** _**That the second sample was taken in thirty-one of the forty-one admitted during the study period and not in the remaining ten, who presented at night in eight cases,** is apparent from Table 2._ ⚠ **A reader holds thirty-one, forty-one, ten and the eight before being told what any of them are for.** **Four things, and the verb is in line four.**',
  '⚠ **Most readers hold two.** **A writer who asks for four is asking the reader to do the filing as well as the reading** — and the referee\'s comment on that sentence was _I had to read this three times._',
  '**The repair: _it_-extraposition.** _**It is apparent from Table 2 that** the second sample was taken in thirty-one of the forty-one and not in ten._ ⚠ **_It_ holds the subject\'s place and lets the long material come after the verb, where the reader already knows what it is for.** **The word means nothing and does the whole of the work.**',
  '**The frames that do this, and they are worth learning as frames.** _It is apparent / clear / not in dispute / unlikely / no longer possible **that**…_ · _It was never established **whether**…_ · _It does not follow **that**…_ · _It is for the committee to decide **whether**…_',
  '⚠ **And the second half, which is the part nobody is taught.** **The end of a sentence is where a reader looks for the new thing** — **not because you have chosen it, but because that is where attention lands.** **B2 taught emphasis as a choice: _it was the roller that failed_.** **This is not a choice. If your claim is not at the end, something else is being emphasised by accident** — **in the sentence above it is _who presented at night in eight cases_, a detail from the limitations sitting where the claim should be.**',
  '**And it is not only about figures.** ⚠ _That the pharmacist who signed for the third consignment in April has since left and cannot be asked is the reason the figure stands._ **Four things to hold and not one of them a number** — **a reader holding a person, a month, a consignment and a departure is doing exactly the work the frames exist to save.**',
  '**The four-second test.** ⚠ **Read your own sentence aloud and stop at the verb.** **Count what you are holding.** **Three or more and the sentence has to be turned round.**',
  '**Pronunciation.** 🔊 **Track 2.6** **If a long subject has to stay, hold the pitch up all the way to the verb and do not drop at any comma.** ⚠ **Every drop tells the listener a sentence has ended, and a listener who has been told that four times has stopped counting.** **Then come down once, on the claim.**',
  '**Practise:** Turn a long subject round with _it_. **1** a claim about a figure  **2** a question that was never settled  **3** something that does not follow  **4** something for somebody else to decide  **5** one where the long subject should stay — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card **and stops at the verb.** B does two things: **says how many things they were holding, and then turns the sentence round with _it_.** ⚠ **Two rows on each card should not be turned round** — the subject is short and the weight is already at the end — **and B must say so, because turning a working sentence round is this cycle\'s standing fault.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads to the verb and stops)_ __________ …'],
  ['B', 'I was holding __________ things.'],
  ['B', 'Turned round: **It __________ that __________.** — or **leave it: the weight is already at the end.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_That the form was signed on 3 February and not sent is not in dispute._', '_Whether the April figures had been checked before circulation was never established._'],
  ['_⚠ The roller has been out since 6 March._', '_⚠ Three sets of results are not in the system._'],
  ['_That the bolts as installed measure M12 against a specified M16 at all forty-one reachable positions is apparent from the note of 4 August._', '_The question whether the ten who had no second sample were comparable to the thirty-one who did remains open._'],
  ['_That nineteen of the fifty-one self-presentations recorded in the referral book arrived on a Saturday and were turned away is the whole of the case for the change._', '_Whether the tray was emptied by the deputy, the clerk or the caretaker cannot now be established._'],
  ['_⚠ The code was on every slip twelve days later._', '_⚠ The rota was amended by hand and not initialled._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the counts, and which two rows on each card should be left alone. ⚠ **The four rows marked ⚠ are all short and all end on the new thing** — _since 6 March_, _not in the system_, _twelve days later_, _not initialled_. **That is the finding: a sentence whose claim is already last does not need a frame**, and _it is the case that the roller has been out since 6 March_ **is eight words longer and says less.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the longest sentence you have written this month** and read it to yourself, stopping at the verb. ⚠ **Write down what you were holding.** **Then turn it round with a frame, and write what is now at the end of the sentence** — **and say whether that is your claim or something that got there by accident.**'));
out.push(p('**b**  Swap. Your partner reads your original **to the verb only** and says what they were holding. ⚠ Then the useful half: **they say what was at the end of your original sentence.** **In about half of these it is not the claim**, and nobody has ever told the writer.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani brought one sentence and a referee\'s comment on it: that the second sample was taken in thirty-one of the forty-one patients admitted during the study period and not in the remaining ten, who presented at night in eight cases, is apparent from Table 2. The comment was: I had to read this three times. Mr Shihabi said so did he, and he was listening for it. Dr Qabbani said it is not ungrammatical and there is no word in it he would change. Then Mrs Tarabishi said what happens to her reading it: she is holding thirty-one, forty-one, ten and the eight at night, and does not yet know what any of them are for — four things, and the verb is in line four. Mr Tayara asked how many she can hold, and two, and she thinks that is not about her: two is what anybody holds, and a writer who asks for four is asking the reader to do the filing as well as the reading. Mrs Rizk said the fix is to turn it round, and Dr Qabbani gave it: it is apparent from Table 2 that the second sample was taken in thirty-one of the forty-one and not in ten. Same facts, and the reader is told what the sentence is for in six words. Mrs Oueidat said in Arabic it is a better sentence too, which is unusual, because most of what she has to repair in English documents gets worse when it is tidied. Mrs Ajouz asked why it helps, since there is nothing in the word, and Mrs Khoury said because it holds the subject\'s place and lets the long material come after the verb, where the reader already knows what it is for: the word means nothing and does the whole of the work. Mr Zahreddine asked about the end of the sentence, and the end of the sentence is where the reader looks for the new thing, which is the half of this nobody is taught. B2 taught them to put emphasis where they wanted it — it was the roller that failed — and that is choosing; this is not choosing, because the end is where attention lands whether you have chosen or not. Mr Attar said so if the claim is not at the end, something else is being emphasised by accident, and something always is: in the original the last thing before the verb is who presented at night in eight cases, which is a detail from the limitations sitting where the claim should be. Dr Qabbani said nobody has ever said that to him about his writing. Mr Shihabi said his desk says it every week by doing it — they move the last clause to the front and the first to the end, they do not explain, and the paragraph is better. And Mrs Tarabishi gave the test: read your own sentence and stop at the verb, out loud, and count what you are holding. Three or more and it has to be turned round. It takes four seconds and she has never once done it._'));
out.push(p('**Listener task:** write what was at the end of your partner\'s original sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the abstract Dr Qabbani rewrote after the referee\'s comment. Answer the questions.'));
out.push(model([
  '**CULTURE-NEGATIVE ENDOCARDITIS IN A DAMASCUS TEACHING UNIT, 2023–2026: A RETROSPECTIVE REVIEW OF FORTY-ONE ADMISSIONS**',
  '**Background.** **It is not in dispute that serological testing adds diagnoses in culture-negative endocarditis**, and two earlier series from this region have said so. **What has not been established is how much of that gain survives in units where the second blood sample is taken inconsistently.** **This unit is one of them.**',
  '**Method.** Forty-one consecutive admissions were identified from the admissions book and not from the laboratory record. **It was recorded for each admission whether a second sample had been taken before antibiotics were started.** **Thirty-one had; ten had not.** Results were retrieved for thirty-eight of the forty-one; **three sets from 2023 are not in the system and are not in the paper archive.**',
  '**Results.** **In the eleven admissions for which the second sample was available and the first was not, a serological diagnosis was reached in seven.** **It does not follow that the second sample produced the diagnosis**, the eleven having been identified from the admissions book and the sampling decision having been made at the bedside and not recorded. **Four deaths occurred, all in patients over sixty-eight.** **It is not possible to say from these records whether any of the four had a second sample**, two of the four having been admitted in 2023 and their results being among the three sets that are missing.',
  '**What the series cannot show.** **It cannot show a survival difference**, four events across groups of this size being uninterpretable whichever way they fall. ⚠ **It was never established whether the ten who had no second sample were comparable to the thirty-one who did**, eight of the ten having presented at night and two of the eight having arrived on antibiotics from another unit.',
  '**What was recorded and what was not.** **It was recorded in every case whether a second sample was taken**, that being a line on the admissions sheet. **What was not recorded anywhere is why it was not taken in the ten**, the decision having been made at the bedside by eleven different registrars over three years. ⚠ **It was never established whether the night presentations are the explanation or a coincidence**, eight of the ten being a small number and the unit admitting about a third of all its patients at night.',
  '**Conclusion.** **It is for a prospective study to settle whether the second sample changes management**, and this one cannot. **What this series does show is the size of the gap between a recommendation and a ward: in a unit that accepts the recommendation, a quarter of admissions over three years did not have the sample taken.** ⚠ **That figure, and not the seven, is the one we should like read.**',
  '**Eleven of forty-one is a small number.** **It is in this abstract rather than in the discussion because it is where a reader decides whether the rest is worth an afternoon.**',
]));
out.push(item('1', 'Find four sentences that begin with _it_. What does each one let the writer put at the end?'));
out.push(item('2', 'The conclusion names a figure he would rather have read than the main result. Which, and why?'));
out.push(item('3', 'Why does he say the eleven of forty-one is in the abstract rather than in the discussion?'));
out.push(writers([
  'An abstract whose claims arrive last: **the undisputed background in an _it_-frame, so that the open question lands at the end** → **the method with what was and was not recorded** → **the result, with the inference you are not drawing** → **what the work cannot show** → **and a conclusion that names the figure you want read.**',
  '⚠ **Use the frame to put the open question at the end.** _It is not in dispute that serological testing adds diagnoses. **What has not been established is** how much of that gain survives where the second sample is taken inconsistently._ **The reader reaches the end of two sentences holding one thing, and it is yours.**',
  '**Block the inference in the sentence that reports the result.** ⚠ _It does not follow that the second sample produced the diagnosis._ **Seven words in a frame, and they stop the one reading that would make the paper wrong.**',
  '**Put the limitation in a frame too, so that the reason lands last.** ⚠ _It was never established whether the ten were comparable_, **eight of the ten having presented at night.** **The construction from Unit 1 and the frame from this cycle in one sentence** — which is what a C1 paragraph is.',
  '⚠ And **name the figure you want read, and say so.** _That figure, and not the seven, is the one we should like read._ **Most writers leave a reader to work out which number matters, and most readers choose the biggest.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a summary whose claims arrive last (120 words or more).'));
out.push(p('**______________**   **Background.** **It is not in dispute that ______________**, and ______________ have said so. ⚠ **What has not been established is ______________.** **______________ is one of them.**   **Method.** ______________ were identified from ______________ and not from ______________. **It was recorded for each ______________ whether ______________.** **______________ had; ______________ had not.**   **Results.** **In the ______________ for which ______________, ______________.** ⚠ **It does not follow that ______________**, the ______________ having been ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No subject longer than about two things before the verb',
  'An _it_-frame wherever the long material would otherwise come first',
  'The claim at the end of its sentence, and nothing there by accident',
  'The inference you are not drawing, blocked in one sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the last five words of each of their sentences**, in order, and the room says whether those five words are the claims.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole summary (260 words or more), to the shape in the writer\'s box: the background in a frame, the method, the result with its blocked inference, what it cannot show, and the figure you want read.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: nothing over two things held before a verb, a frame where it is needed, the claim last, and the inference blocked.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their longest sentence to the verb and stops; the room calls out how many things it is holding.** ⚠ **Anything over two and the room says _turn it round_, in chorus.** Then the sentence the cycle ends on, which is Mrs Tarabishi\'s, and it is about every test in this book: **it takes four seconds and I have never once done it.**'));
out.push(hw('Take **the last page you wrote** and underline **the last five words of every sentence.** ⚠ **Read the underlinings in order, on their own.** **They should read as the spine of the page**, and in most pages about a third of them are details that arrived at the end by accident. **Then turn round the three worst offenders.** **Bring the underlined page and the three rewritten sentences.** **2.4 puts a whole clause where a noun would go**, which is the other way of keeping a long thing out of the subject.'));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  A clause where a noun would go'));
out.push(p('**Function:** putting a whole clause where a noun would go   ·   **Grammar:** nominal _that_- and _wh_-clauses — _what the committee agreed was that…_   ·   **Pronunciation:** the pause before _was_ and nowhere else'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing that was agreed, decided or refused where you cannot name it in a noun.** ⚠ **Say it as a clause**: not _the committee\'s decision_, but _what the committee decided was that the figures would be recounted_. Your teacher writes the ten and marks the ones that could have been a noun after all.'));
out.push(p('**b**  Which of these could **not** be said with a noun instead? **1** _What the committee agreed was that the April figures would be recounted._  **2** _What they refused was the second fee._  **3** _What matters is whether the second count was done before or after the circulation._  **4** _What I object to is the delay._  **5** _What nobody has established is who emptied the tray._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the nominal clause is for?   **A** making a sentence longer   **B** **saying exactly what was agreed when no noun exists for it** — and the noun that does exist usually hides the disagreement   **C** emphasis'));
out.push(p('**b**  Listen again. **1** What does Mrs Tarabishi find when she tries to replace a clause with a noun in her literature review?   **2** What does Mr Zahreddine say the word _agreement_ did in one of his meetings?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  No noun for it', [
  ['Ms Huda', 'Mrs Tarabishi has four authors who disagree and one sentence she cannot write.'],
  ['Mrs Tarabishi', '**Two of them agree about the finding and disagree about what it shows.** ⚠ **And there is no noun for that.** **_Their disagreement_ suggests they disagree about the finding, which they do not.**'],
  ['Mrs Khoury', 'So say it as a clause.'],
  ['Mrs Tarabishi', '_What the two of them disagree about is not the fall in input spending but whether holding size explains it._ ⚠ **Twenty words, and it is the only accurate sentence I have written about them.**'],
  ['Dr Qabbani', 'A referee would call that long.'],
  ['Mrs Tarabishi', '⚠ **A referee would call _their disagreement_ wrong**, and the choice is not between long and short. **It is between a clause that is accurate and a noun that is not.**'],
  ['Mr Zahreddine', 'May I bring a case where the noun did harm? ⚠ **A minute of mine says _agreement was reached on the specification_.**'],
  ['Mr Tayara', 'Which sounds like the end of a problem.'],
  ['Mr Zahreddine', '⚠ **What was agreed was that the specification would be reissued.** **What was not agreed was who paid for the forty-one bolts already in the frame** — **and that is the thing the meeting was about.** **The noun _agreement_ covered both and we lost four months.**'],
  ['Mrs Oueidat', '**And in Arabic the noun would have had to be resolved**, which is the one case where translation improves a document.'],
  ['Mrs Ajouz', 'So is the rule never to use the noun?'],
  ['Mrs Khoury', '**No.** ⚠ _What they refused was the second fee_ **is a clause doing a noun\'s job for nothing.** _They refused the second fee_ **is shorter and loses nothing at all.** **The clause earns its length only when no noun is accurate.**'],
  ['Mr Shihabi', 'And how do you tell?'],
  ['Mrs Khoury', '⚠ **Write the noun and ask whether it hides a disagreement.** **_Agreement_ hid one. _Disagreement_ hid one. _The delay_ hides nothing** — **so _what I object to is the delay_ is four words of scaffolding.**'],
  ['Jad', 'The nouns that hide things are the ones made out of verbs.'],
  ['Mrs Khoury', '⚠ **Usually, and that is Unit 2 of the last book arriving with a new job.** **At B2 we learned to take the person out of a sentence by making a noun of the verb.** **Here we are learning when that noun has taken something else out with the person.**'],
  ['Mrs Rizk', 'Mine is _the refusal_. Four pallets, and _the refusal_ hides whether I refused the batch or the paperwork.'],
  ['Mr Shihabi', 'My desk deletes _what_-clauses on sight. Every one, every week.'],
  ['Mrs Tarabishi', '⚠ **Then your desk is right four times out of five and wrong once**, and the once is the sentence that was holding the only accurate thing in the paragraph. **A rule applied by somebody who has not read the meeting is a rule that is right most of the time.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **Then the test is the one Mr Zahreddine\'s minute failed: put the noun in front of a person who was in the room and ask what it covers.** **If two different people would answer differently, the noun is doing the hiding and the clause has to be written.**'],
]));
out.push(sp());
out.push(box('Language box – a clause where a noun would go', [
  '**The shapes.** _**What the committee agreed was that** the April figures would be recounted._ · _**What has not been established is whether** the second count was done before circulation._ · _**What nobody has established is who** emptied the tray._ · _**That** the form was signed and not sent **is** not in dispute._',
  '⚠ **The clause earns its length only when no noun is accurate.** _What they refused was the second fee_ **is a clause doing a noun\'s job for nothing** — _they refused the second fee_ **is shorter and loses nothing.** **Write the clause when the noun would hide something.**',
  '⚠ **The nouns that hide things are usually the ones made out of verbs, and this is B2 Unit 2 arriving with a new job.** **There we learned to take the person out by making a noun of the verb.** **Here we learn when that noun took something else out as well.** _Agreement_ · _disagreement_ · _the refusal_ · _the oversight_ · _the delay_ — **the first three hide something and the last two may not.**',
  '**The worked case, and it cost four months.** **A minute read _agreement was reached on the specification_.** ⚠ **What was agreed was that the specification would be reissued. What was not agreed was who paid for the forty-one bolts already in the frame** — **and that was what the meeting was about.** **The noun covered both.**',
  '⚠ **The test: put the noun in front of somebody who was in the room and ask what it covers.** **If two people who were both there would answer differently, the noun is doing the hiding and the clause has to be written.**',
  '**And the accuracy case, which is the commoner one.** **Two writers can agree about a finding and disagree about what it shows, and there is no noun for that.** _What the two of them disagree about is not the fall in input spending but whether holding size explains it._ ⚠ **Twenty words, and the four-word noun was simply false.**',
  '**Pronunciation.** 🔊 **Track 2.8** **One pause only, immediately before _was_ or _is_.** ⚠ **The _what_-clause is a single block and must be said as one.** **A pause inside it — _what the committee agreed // was that_ — makes the listener start the sentence again**, and the sentence has no second start in it.',
  '**Practise:** Write the noun first, then decide. **1** something agreed that hides something not agreed  **2** something refused where the noun is accurate  **3** a question nobody has settled  **4** a disagreement about what a finding shows  **5** one where you keep the noun — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a noun phrase from the card. B does two things: **asks what it covers, and then writes the clause if the noun hides something.** ⚠ **Two rows on each card hide nothing** — and B must keep the noun, **because a page of _what_-clauses is as unreadable as a page of nouns.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'What does it cover? __________ and __________.'],
  ['B', 'Clause: **What __________ was that __________.** — or **keep the noun.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_Agreement was reached on the specification._', '_Their disagreement about the input figures._'],
  ['_⚠ They refused the second fee._', '_⚠ The form was signed on 3 February._'],
  ['_An administrative oversight has been identified._', '_The refusal of the four pallets._'],
  ['_A review of the April figures has been undertaken._', '_The non-submission of the entry._'],
  ['_⚠ The roller has been out since 6 March._', '_⚠ Nineteen were turned away on Saturdays._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what each noun covers, and the four rows where the noun should stay. ⚠ **Every noun that hides something on these cards is made out of a verb** — _agreement_, _disagreement_, _oversight_, _refusal_, _review_, _non-submission_ — **and every one that is safe is not.** **That is the finding and it is mechanical: when a noun has a verb inside it, ask what the verb\'s missing parts were.** _Refusal_ **has neither object nor agent.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a noun made out of a verb from your own writing** — _agreement_, _delay_, _refusal_, _review_, _oversight_ — and write down **what it covers.** ⚠ **Then write the clause.** **If the clause is no more accurate than the noun, keep the noun and write _kept_ beside it.**'));
out.push(p('**b**  Swap. Your partner is somebody who was in the room. ⚠ **They say what your noun covers.** **If their answer and yours differ, the noun was hiding something** — **and that difference, found in forty seconds, is what cost one person in this room four months.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has four authors who disagree and one sentence she could not write: two of them agree about the finding and disagree about what it shows, and there is no noun for that — their disagreement suggests they disagree about the finding, which they do not. Mrs Khoury said so say it as a clause, and she did: what the two of them disagree about is not the fall in input spending but whether holding size explains it. Twenty words, and the only accurate sentence she has written about them. Dr Qabbani said a referee would call that long, and a referee would call their disagreement wrong — the choice is not between long and short but between a clause that is accurate and a noun that is not. Then Mr Zahreddine brought a case where the noun did harm: a minute of his says agreement was reached on the specification. Mr Tayara said that sounds like the end of a problem, and what was agreed was that the specification would be reissued; what was not agreed was who paid for the forty-one bolts already in the frame, which is the thing the meeting was about. The noun covered both and they lost four months. Mrs Oueidat said in Arabic the noun would have had to be resolved, which is the one case where translation improves a document. Mrs Ajouz asked whether the rule is never to use the noun, and no: what they refused was the second fee is a clause doing a noun\'s job for nothing, and they refused the second fee is shorter and loses nothing at all. The clause earns its length only when no noun is accurate. Mr Shihabi asked how you tell, and you write the noun and ask whether it hides a disagreement: agreement hid one, disagreement hid one, the delay hides nothing, so what I object to is the delay is four words of scaffolding. Mr Attar said the nouns that hide things are the ones made out of verbs, and usually they are — which is Unit 2 of the last book arriving with a new job: there they learned to take the person out of a sentence by making a noun of the verb, and here they are learning when that noun has taken something else out with the person. Mrs Rizk said hers is the refusal: four pallets, and the refusal hides whether she refused the batch or the paperwork. And Mrs Tarabishi gave the test the minute failed: put the noun in front of somebody who was in the room and ask what it covers. If two people who were both there would answer differently, the noun is doing the hiding and the clause has to be written._'));
out.push(p('**Listener task:** write what your partner said your noun covers, and whether it differs from your own answer.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Mrs Tarabishi wrote about four authors who disagree. Answer the questions.'));
out.push(model([
  '**WHERE THE FOUR OF THEM ACTUALLY DIFFER** _(R. Tarabishi · literature review, section 2.3 · 11 November)_',
  '**What all four agree about is the fall.** Input spending per hectare fell in the national series between 2019 and 2024, and none of the four disputes the figure or the direction. ⚠ **Their disagreement is not about the fall and describing it as a disagreement about the fall, which two reviews have done, puts the whole question in the wrong place.**',
  '**What Hadid and Sayigh disagree about is whether holding size explains any of it.** Hadid treats size as the explanation and the price index as noise; Sayigh treats the price index as the explanation and size as a consequence of it. ⚠ **What neither of them does is report the deflator used**, and until one of them does, **the two positions cannot be told apart by anybody reading either paper.**',
  '**What Mansour disagrees with is the question.** **She holds that spending per hectare is not a measurement of anything, hectares under cultivation having been recorded by the holder in three of the five years**, and that the series therefore records reporting behaviour. **That is a different kind of objection**: Hadid and Sayigh disagree about a cause, and Mansour disagrees that there is anything there to have a cause.',
  '**What the fourth author adds is a figure and not a position.** **Dabbagh reports the deflator for two governorates and does not use it**, and his appendix is the only place in the four papers where the number appears at all.** ⚠ **What he does not do is say why he has not used it**, and that omission is the only thing in his paper which cannot be checked against something.',
  '**What follows for this study.** ⚠ **It is not possible to choose between Hadid and Sayigh on the published evidence**, and this study does not try. **What it does is apply Dabbagh\'s deflator to Hadid\'s own data** — **which is the one test none of the four has run** — **and report what happens to the size effect when the price effect is removed.**',
  '**What this study cannot settle is Mansour\'s objection.** **If hectares are reported rather than measured, every paper in this section including this one is describing reporting behaviour**, and no amount of deflating will show it, and that last sentence is about this study and not about hers. **That is stated here rather than in the limitations**, the objection being prior to the method and not a weakness of it. ⚠ **What can be done about it is one thing and not two.** **The 2026 round recorded hectares from the cadastral map for one governorate**, and comparing those with the holders’ own returns for the same year would settle whether the gap is large enough to matter. **That comparison is not in this study and is not difficult**, and somebody should run it before another paper in this section is written.',
]));
out.push(item('1', 'What do all four authors agree about, and what has been described wrongly as a disagreement about it?'));
out.push(item('2', 'What kind of objection does Mansour make, and how does it differ from Hadid\'s and Sayigh\'s disagreement?'));
out.push(item('3', 'Why is Mansour\'s objection stated in the body of the section rather than in the limitations?'));
out.push(writers([
  'A paragraph on four writers who disagree: **what all of them agree about** → **what two of them actually disagree about, named as a clause** → **what neither of the two does** → **the one who disagrees with the question, and why that is a different kind of objection** → **the one who adds a figure and not a position** → **and what follows for your own work.**',
  '⚠ **Name the disagreement as a clause when no noun is accurate.** _What Hadid and Sayigh disagree about is whether holding size explains any of it._ **_Their disagreement_ says they differ about the fall, and they do not** — **and two published reviews have made exactly that mistake.**',
  '**Say what neither of them does.** ⚠ _What neither of them does is report the deflator used, and until one of them does, the two positions cannot be told apart._ **A shared omission is the most useful thing a review can find and the thing reviews least often look for.**',
  '**Separate a disagreement about a cause from a disagreement about the question.** ⚠ _Hadid and Sayigh disagree about a cause, and Mansour disagrees that there is anything there to have a cause._ **Those are not two positions on a scale and a review that ranks them has misread one of them.**',
  '⚠ And **put the objection that is prior to your method in the body and not in the limitations.** _The objection being prior to the method and not a weakness of it._ **A limitation is something your study has; an objection of this kind is something your whole section may not survive**, and burying it at the end is the one move a careful reader always checks for.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a paragraph on people who disagree (120 words or more).'));
out.push(p('**______________** · ______________   **What all ______________ agree about is ______________.** ______________, and none of them disputes ______________. ⚠ **Their disagreement is not about ______________, and describing it as ______________ puts the question in the wrong place.**   **What ______________ and ______________ disagree about is whether ______________.** ______________ treats ______________ as ______________; ______________ treats ______________ as ______________. ⚠ **What neither of them does is ______________**, and until one of them does, ______________.   **What ______________ disagrees with is the question.** **______________ holds that ______________**, and that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A clause only where no noun is accurate — and the nouns kept elsewhere',
  'The shared omission named',
  'A disagreement about a cause kept separate from one about the question',
  'Any objection prior to your method in the body, not in the limitations',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _what_-clauses**, one after another, and the room says which of them a noun could have carried.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole paragraph (260 words or more), to the shape in the writer\'s box: the agreement, the real disagreement as a clause, the shared omission, the objection to the question, the figure without a position, and what follows for you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: clauses only where no noun is accurate, the shared omission named, the two kinds of objection kept apart, and the prior objection in the body.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a _what_-clause twice: once as one block with a single pause before _is_, and once with a pause in the middle of the clause.** ⚠ **The room says what the second reading did.** **It makes the listener start the sentence again**, and a sentence with a second start in it has lost its claim. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **the noun covered both and we lost four months.**'));
out.push(hw('List **six nouns made out of verbs** from your own writing of the last month — _agreement_, _refusal_, _review_, _delay_, _oversight_, _submission_. ⚠ **Against each, write what it covers.** **Then take the two where you cannot answer in one go and write the clause.** **In most cases one of the two turns out to cover something nobody has agreed**, which is the finding this cycle exists for. **Bring the six and the two clauses.** **2.5 asks what a single draft costs**, and the answer is not comfortable.'));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  What one draft costs'));
out.push(p('**Function:** saying what one draft costs that three drafts did not, and deciding to pay it   ·   **Grammar:** the cost named in the document · _I am aware that this makes ___ harder_   ·   **Pronunciation:** naming a cost without a sigh in front of it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you have said differently to two different people, both times honestly.** ⚠ **Nobody is being accused of anything** — the rule is that both versions must be true. Your teacher writes the ten pairs on the board and the room looks for the ones where the two versions could not both be in the same letter.'));
out.push(p('**b**  Which of these is a cost rather than an excuse? **1** _Saying that the form was signed and not sent makes the late entry harder to obtain._  **2** _This has been a difficult matter for everybody._  **3** _Naming the eleven days tells the pharmacist that my own book was started late._  **4** _We regret that circumstances have not permitted an earlier reply._  **5** _It is unfortunate that the position is as it is._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide three drafts were really protecting?   **A** the three readers   **B** **the writer\'s not having to know which version of their own position they hold** — because three drafts let all three be true at once and a single draft does not   **C** the writer\'s time'));
out.push(p('**b**  Listen again. **1** What did Mrs Rizk find when she put her three donor letters side by side?   **2** What does Mr Tayara say the eight months cost him, and what did they buy?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  Three letters, three positions', [
  ['Ms Huda', 'Mrs Rizk put three of her own letters side by side. Mrs Rizk.'],
  ['Mrs Rizk', '**Same refusal, three readers: the donor, the field office and the nineteen people who were turned away.** ⚠ **And I had three different positions on whose fault it was.**'],
  ['Mr Shihabi', 'In writing?'],
  ['Mrs Rizk', '⚠ **In writing, in the same week, all three true.** **To the donor: the Saturday cover ended at nine because of the rota.** **To the field office: the referral book had been left in the vehicle.** **To the nineteen: we were not able to see you and I am sorry.**'],
  ['Mrs Tarabishi', 'And none of the three is false.'],
  ['Mrs Rizk', '⚠ **None of the three is false and the three together are not a position.** **Nine of the nineteen were the rota and ten were the book, and the book is ours.** **No letter said that, because no letter had to.**'],
  ['Dr Qabbani', 'Then what did the three letters cost?'],
  ['Mrs Rizk', '**Nothing at all, which is why I wrote them for four years.**'],
  ['Mr Tayara', 'May I say what mine cost? ⚠ **Eight months of not knowing what I thought had happened.** **I had written _an administrative oversight_ to the directorate and _something has gone wrong in the office_ to the mother, and I did not decide between them until October.**'],
  ['Mrs Oueidat', 'And what did the eight months buy?'],
  ['Mr Tayara', '⚠ **They bought me not having to tell the directorate that my school signed a form and lost it.** **Which I then had to tell them anyway, with eight months on top.**'],
  ['Mrs Ajouz', 'So the single draft is simply more expensive.'],
  ['Mrs Khoury', '⚠ **It is more expensive once and three drafts are more expensive every time.** **But that is not the interesting cost.**'],
  ['Mr Zahreddine', 'What is?'],
  ['Mrs Khoury', '⚠ **Three drafts let a writer keep three versions of their own position and never find out which one they hold.** **Mrs Rizk had three accounts of whose fault it was for four years and all three were true.** **The single draft makes you find out, and that is what it costs** — **and it is not a cost to the reader at all.**'],
  ['Jad', 'So the reader is not who three drafts were protecting.'],
  ['Mrs Khoury', '⚠ **The reader never needed protecting. Each of the three readers only ever wanted the one sentence that was theirs.**'],
  ['Mrs Rizk', '**I wrote the single letter in October and it has one sentence in it I would not have written in any of the three.** _Ten of the nineteen were turned away because our own referral book was in the vehicle._'],
  ['Mr Shihabi', 'And the donor\'s reply?'],
  ['Mrs Rizk', '🔊 ⚠ **Funded for nine months.** **And the officer wrote one line at the bottom by hand, which I have kept: _the second half of your third paragraph is why._** **Four years of three letters and nobody had ever written to me by hand.**'],
]));
out.push(sp());
out.push(box('Language box – the cost of one draft', [
  '**Three drafts cost nothing at the time, which is why people write them for years.** ⚠ **What they buy is that all three accounts can be true at once and the writer never has to decide which one they hold.** _To the donor: the rota._ _To the field office: the book._ _To the nineteen: we are sorry._ **All three true; the three together are not a position.**',
  '⚠ **The cost of one draft is that you find out what you think, in writing, once** — **and it is not a cost to the reader at all.** **Each of the three readers only ever wanted the one sentence that was theirs.**',
  '**Name the cost inside the document.** _I am aware that this makes the late entry harder to obtain._ · _Naming the eleven days tells you that my own book was started late._ ⚠ **A cost named is a cost the reader does not have to find.** **A cost unnamed is a cost the reader finds later, with your name on it.**',
  '**And tell a cost from an excuse, because they use the same vocabulary.** ⚠ **A cost is something the sentence does to you.** _Saying the form was signed and not sent makes the late entry harder to obtain._ **An excuse is something the situation did to everybody.** _This has been a difficult matter for all concerned._ **The first names a consequence and a sufferer; the second names neither.**',
  '**The arithmetic, which is the dull half and is still true.** ⚠ **One draft is more expensive once; three drafts are more expensive every time** — three documents, three filings, and the certainty that one reader will be sent another reader\'s letter. **Mr Tayara\'s mother was sent the directorate\'s.**',
  '⚠ **And the thing that has to be said about delay, because this cycle is really about it.** **Eight months of three drafts bought one person not having to tell a directorate that his school had signed a form and lost it** — **which he then told them anyway, with eight months on top.** **A postponed sentence is not a cheaper sentence.**',
  '**One test for whether you have actually paid it.** ⚠ **Ask what the sentence would have cost you if you had written it in the first letter rather than the fourth.** **If the answer is _the same_, the delay bought nothing and you have been paying interest on a cost you were always going to meet.** **If the answer is _less_, the delay made it worse** — **which is the ordinary case and is what the eight months were.**',
  '**Pronunciation.** 🔊 **Track 2.10** **Name the cost flat, with nothing in front of it.** ⚠ **No _I am afraid_, no _sadly_, and above all no audible breath.** **A cost announced with a sigh asks the reader to say it does not matter** — **and a reader who has been asked that twice stops reading costs altogether.**',
  '**Practise:** Name a cost, in one sentence, as something the sentence does to you. **1** a concession that weakens your case  **2** a figure that makes your office look slow  **3** a fact that helps the other side  **4** something you have postponed saying  **5** one where the cost is only to you and not to your organisation — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B does one thing: **says whether it names a cost or makes an excuse, and if it is a cost, who pays it.** ⚠ **Two rows on each card are costs that the writer has named and is not paying** — somebody else is — **and B has to say who.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'Cost or excuse: **__________.**   Paid by: **__________.**'],
  ['B', 'If an excuse: **what would the cost version say?** __________'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_Saying the form was signed and not sent makes the late entry harder to obtain._', '_Ten of the nineteen were turned away because our own book was in the vehicle._'],
  ['_⚠ The delay has been regrettable for all concerned._', '_⚠ Circumstances have not permitted an earlier reply._'],
  ['_Naming the eleven days tells you my own book was started late._', '_I did not reach nine of the fifty positions and the certificate covers none of the fifty._'],
  ['_⚠ It costs Karam a second fee in November, and he did nothing._', '_⚠ The three of us who signed it have all left the department._'],
  ['_Reporting thirty-eight of forty-one makes the denominator smaller than the title suggests._', '_The figure we gave you in February was true and was useless._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** cost or excuse, and who pays. ⚠ **The four rows marked ⚠ split two and two, and the split is the lesson.** **_Regrettable for all concerned_ and _circumstances have not permitted_ are excuses: nobody pays.** **_It costs Karam a second fee_ and _the three of us who signed it have all left_ are costs paid by somebody else** — **and the second of the two is the one to watch: it reads as a cost and works as an excuse.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own pair from Stage 1 and write **the one sentence that could not be in both letters.** ⚠ **Then write, underneath, what putting it in a single letter costs you, and who else pays.** **If nobody else pays, say so** — **those are the sentences that get written, and the ones where somebody else pays are the ones that wait eight months.**'));
out.push(p('**b**  Swap. Your partner reads your cost sentence and says **whether they would send it.** ⚠ Then the harder half: **they say what they would send instead**, and you decide which of the two you are going to write. **The answer is yours and the room does not vote.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk put three of her own letters side by side: the same refusal, three readers — the donor, the field office and the nineteen people who were turned away — and she had three different positions on whose fault it was. Mr Shihabi asked whether that was in writing, and in writing, in the same week, all three true. To the donor: the Saturday cover ended at nine because of the rota. To the field office: the referral book had been left in the vehicle. To the nineteen: we were not able to see you and I am sorry. Mrs Tarabishi said and none of the three is false, and none of the three is false and the three together are not a position: nine of the nineteen were the rota and ten were the book, and the book is theirs, and no letter said so because no letter had to. Dr Qabbani asked what the three letters cost, and nothing at all, which is why she wrote them for four years. Then Mr Tayara said what his cost: eight months of not knowing what he thought had happened. He had written an administrative oversight to the directorate and something has gone wrong in the office to the mother, and he did not decide between them until October. Mrs Oueidat asked what the eight months bought, and they bought him not having to tell the directorate that his school signed a form and lost it — which he then had to tell them anyway, with eight months on top. Mrs Ajouz said so the single draft is simply more expensive, and Mrs Khoury said it is more expensive once and three drafts are more expensive every time, but that is not the interesting cost. Asked what is, she said three drafts let a writer keep three versions of their own position and never find out which one they hold: Mrs Rizk had three accounts of whose fault it was for four years and all three were true. The single draft makes you find out, and that is what it costs — and it is not a cost to the reader at all. Mr Attar said so the reader is not who three drafts were protecting, and the reader never needed protecting: each of the three only ever wanted the one sentence that was theirs. Mrs Rizk said she wrote the single letter in October and it has one sentence in it she would not have written in any of the three — ten of the nineteen were turned away because our own referral book was in the vehicle. And asked about the donor\'s reply: funded for nine months, with one line written at the bottom by hand, which she has kept — the second half of your third paragraph is why. Four years of three letters and nobody had ever written to her by hand._'));
out.push(p('**Listener task:** write your partner\'s cost sentence and who else pays for it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the single letter Mrs Rizk sent in October, and the three it replaced. Answer the questions.'));
out.push(model([
  '**NOTE ON THE SATURDAY CLINIC** · _to the donor; copied to the field office and to the governorate_ · **H. Rizk** · **17 October**',
  '**Nineteen people were turned away from the Saturday clinic at Deir Atiyah between January and June.** **Nine were turned away before half past nine, the Saturday cover having ended at nine since the rota was amended in March.** ⚠ **Ten were turned away because our own referral book was in the vehicle**, and that is ours and not the rota\'s.',
  '**What I told you in February, and what was wrong with it.** **I reported eighty-two self-presentations across four districts and asked for four districts.** **The district column was in the referral book and had not been read.** **Separated, it is fifty-one in Deir Atiyah and thirty-one across the other three** — **and the request in front of you asks for Deir Atiyah only, which is what the figures had always said.**',
  '**What the ten cost, and I would rather set it out than be asked.** **Two of the ten presented at the governorate hospital within a fortnight.** **We do not know what happened to the other eight and we are not going to claim that we do.** ⚠ **I am aware that this paragraph makes the application harder to fund than the February one did.** **It is also the only paragraph in it that is about us.**',
  '**What has changed since July.** **The referral book is signed out and signed in by name at the start and end of every Saturday**, and the vehicle carries a second blank book. **Between July and the end of September, nobody was turned away for want of the book.** **Four were turned away before half past nine, which is the rota and is not ours to fix.** **The four are in the new book with the times against them**, and the book is the reason I can give you a figure for the quarter at all. **Before July I could have told you only that people had been turned away.**',
  '**What I am asking the field office to do, since this is copied to them.** **Nothing about the book, which is done.** **One thing about the rota: to put the nine o\'clock finish in writing to the governorate**, there being no document that says it and three people who remember it differently.',
  '**And one thing I am not doing.** ⚠ **I am not naming the person who left the book in the vehicle.** **It was left there on at least four separate Saturdays by at least two people**, and a letter that named one of them would be describing a habit as an individual.',
  '**H. Rizk** · _grants office_ · **the nine-month figures are attached and the referral books can be seen at Deir Atiyah on any Tuesday**. **One last thing, which belongs to this letter and not to the attachment.** **The February application and this one ask for different things, and the difference is not a change of plan.** ⚠ **It is that somebody read a column that had been in the book since 2023**, and the nine months in front of you are the first request this office has made that rests on figures nobody had to go and collect.',
]));
out.push(item('1', 'What is the one sentence in this letter that was in none of the three it replaced?'));
out.push(item('2', 'What cost does she name, and what does she say about the paragraph that carries it?'));
out.push(item('3', 'Why does she refuse to name the person who left the book in the vehicle?'));
out.push(writers([
  'A single letter that replaces three: **the fact, split so that each part has its own cause** → **what you told the reader before, and what was wrong with it** → **the cost, named, with the sentence that says you know it costs you** → **what has changed, with a figure since** → **what each other reader is being asked to do** → **and what you are not doing.**',
  '⚠ **Split the fact so that each part carries its own cause.** _Nine were turned away before half past nine, the cover having ended at nine since March. Ten were turned away because our own referral book was in the vehicle._ **Three drafts kept those two sentences in two different letters**, and the split is the whole of what a single draft buys the reader.',
  '**Name the cost and then say what the paragraph is.** ⚠ _I am aware that this paragraph makes the application harder to fund than the February one did. It is also the only paragraph in it that is about us._ **Two sentences: the first is the cost and the second is the reason for paying it.**',
  '**Give each other reader one instruction, and tell them what they are not being asked to do.** ⚠ _Nothing about the book, which is done. One thing about the rota._ **A copied-in reader given no action writes to ask what is wanted.**',
  '⚠ And **refuse to name a person when the fact is a habit.** _It was left there on at least four Saturdays by at least two people, and a letter that named one of them would be describing a habit as an individual._ **That sentence protects the writer\'s judgement and not the person.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a single letter replacing three (120 words or more).'));
out.push(p('**______________** · _to _______________; copied to _______________ and to _______________ · **______________**   **______________ were ______________ between ______________ and ______________.** **______________ were ______________, the ______________ having ______________ since ______________.** ⚠ **______________ were ______________ because ______________**, and that is ours and not ______________.   **What I told you in ______________, and what was wrong with it.** **I reported ______________ and asked for ______________.** **______________ had not been read.** **Separated, it is ______________** — **and the request in front of you asks for ______________.**   **What ______________ cost.** ⚠ **I am aware that this paragraph makes ______________ harder than ______________ did.** **It is also the only paragraph in it that is about ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The fact split so that each part carries its own cause',
  'The cost named, with the sentence that says you know it costs you',
  'One instruction for each copied-in reader, and one thing they are not asked to do',
  'No person named where the fact is a habit',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their cost sentence**, and the room says who pays it besides the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the split fact, what was wrong with your earlier account, the cost named, what has changed, each reader\'s instruction, and what you are not doing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the fact split by cause, the cost named as a cost and not an excuse, an instruction for each reader, and no individual named for a habit.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their cost sentence twice: once flat and once with a breath in front of it.** ⚠ **The room says what the breath asked for.** **It asks the reader to say it does not matter**, and somebody always does. Then the sentence the cycle ends on, which is the donor officer\'s, written by hand: **the second half of your third paragraph is why.**'));
out.push(hw('Take **the last thing you wrote in two versions for two readers** and **write the sentence that could not be in both.** ⚠ **Then write two lines: what putting it in one letter costs you, and who else pays.** **Then decide, and write the decision down with a date** — **because the thing this cycle is really about is not the sentence but the eight months.** **Bring the sentence and the two lines.** **2.6 writes the whole single letter for three readers**, and it is the hardest piece of writing in the unit.'));

// ===================== 2.6 =====================
out.push(h2('2.6  The letter all three of them act on'));
out.push(p('**Function:** writing the single letter three readers will all act on   ·   **Grammar:** the whole of Unit 2 on one page   ·   **Pronunciation:** reading a letter aloud as each of its three readers'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the three actions on your own page, and the order they will be read in.** ⚠ **Not the order you wrote them in** — the order each reader will reach them. **Most readers read the first paragraph and the last.** Your teacher writes the ten first-and-last pairs on the board.'));
out.push(p('**b**  Which of these first paragraphs would give all three readers the action that is theirs? **1** _I am writing with reference to the above matter._  **2** _We cannot certify the frame; the bolts measure M12 against a specified M16 at all forty-one reachable positions, and nothing can be certified until the remaining nine are measured._  **3** _Further to our recent correspondence and subsequent telephone discussions, I thought it might be helpful to set out the position._  **4** _There are a number of issues arising from the inspection of 7 August._  **5** _I hope you will not mind my writing to all three of you at once._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the first paragraph of a three-reader letter has to do?   **A** be polite to all three   **B** **give every one of the three the action that is theirs, in the first four lines, because two of the three will read no further**   **C** explain that there are three readers'));
out.push(p('**b**  Listen again. **1** Why does Mr Zahreddine say the insurer is the reader who decides the letter\'s shape?   **2** What does Mrs Oueidat say about the sentence that is in the letter for nobody?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  Owner, contractor, insurer', [
  ['Ms Huda', 'Mr Zahreddine has one letter and three readers, and he says one of the three decides its shape.'],
  ['Mr Zahreddine', '**The owner, the main contractor and the insurer.** ⚠ **And it is the insurer, who is the only one of the three who will not telephone me.**'],
  ['Mr Shihabi', 'Why does that decide the shape?'],
  ['Mr Zahreddine', '⚠ **Because the other two will ring and ask.** **The insurer reads the letter in eighteen months with a claim in front of him and asks nobody anything.** **Whatever is not in the letter is not in the world.**'],
  ['Mrs Rizk', 'So you write for the reader who cannot ask.'],
  ['Mr Zahreddine', '⚠ **You write the facts for the reader who cannot ask and the actions for the two who can.** **That is the shape and I arrived at it by losing an argument in 2021.**'],
  ['Mrs Tarabishi', 'And the first paragraph?'],
  ['Mr Zahreddine', '**All three actions, in four lines.** ⚠ **The owner has to decide about Monday, the contractor has to find the requisition, and the insurer has to know that nothing was certified.** **If any of the three is not in the first four lines, that reader has not been written to.**'],
  ['Mr Tayara', 'Two of my three never read past the first paragraph.'],
  ['Mrs Khoury', '⚠ **Two of everybody\'s three never do.** **Which is why the last paragraph is the other place anything can go** — **first and last, and the middle is for the reader who cannot ask.**'],
  ['Mrs Oueidat', 'May I name the thing I find most often in these letters? ⚠ **The sentence that is in it for nobody.**'],
  ['Dr Qabbani', 'Give one.'],
  ['Mrs Oueidat', '_I hope you will not mind my writing to all three of you at once._ ⚠ **No reader acts on that.** **It is in the letter because the writer is uncomfortable about having three readers** — **and it is the first sentence a reader uses to decide what kind of document this is.**'],
  ['Mrs Ajouz', 'So the test is the one from 2.1: does it help one of the three actions?'],
  ['Mrs Khoury', '⚠ **And at the end of the unit it is harder than it was in 2.1**, because by now the letter has a cost paragraph, a what-changed paragraph and a refusal in it, **and every one of those has to be traceable to one of the three actions.**'],
  ['Jad', 'Mine would fail. My cost paragraph is for me.'],
  ['Mrs Khoury', '⚠ **Then it goes where the reader it is for will read it**, which is the last paragraph and not the middle. **A cost named in the middle of a page is a cost the two readers who matter will never see** — **and a cost nobody sees was not paid.**'],
  ['Mr Zahreddine', '**My 2021 letter had the whole of the cost in the fourth paragraph.**'],
  ['Mrs Ajouz', 'And if the three readers never read the same letter at all? Mine are in two countries.'],
  ['Mr Zahreddine', '⚠ **Then they will read it in different years, which is worse and is the same problem.** **The one who reads it last is the one who cannot ask** — **and the letter has to have been written for that reader before anybody knew who it would be.**'],
  ['Mrs Oueidat', '🔊 ⚠ **Then read it aloud three times, once as each reader, and stop reading where that reader would stop.** **Twice you will not reach the fourth paragraph.** **It is four minutes and it is the only proof-reading that has ever worked on a letter with three readers.**'],
]));
out.push(sp());
out.push(box('Language box – the single letter for three readers', [
  '**Write the facts for the reader who cannot ask and the actions for the two who can.** ⚠ **In Mr Zahreddine\'s letter the insurer reads it in eighteen months with a claim in front of him and asks nobody anything** — **whatever is not in the letter is not in the world.** **The owner and the contractor telephone.**',
  '**The first paragraph carries all three actions, in four lines.** _The owner has to decide about Monday; the contractor has to find the requisition; the insurer has to know that nothing was certified._ ⚠ **If one of the three is not in the first four lines, that reader has not been written to** — **and two of every three readers read no further.**',
  '⚠ **First and last are the two places anything can go.** **The middle of the page is for the reader who cannot ask.** **A cost named in the middle is a cost the two readers who matter will never see — and a cost nobody sees was not paid.**',
  '**The sentence that is in the letter for nobody, and every letter with three readers has one.** ⚠ _I hope you will not mind my writing to all three of you at once._ **No reader acts on it.** **It is there because the writer is uncomfortable about having three readers** — **and it is the first sentence a reader uses to decide what kind of document this is.**',
  '**The 2.1 test, harder now.** ⚠ **Does this sentence help one of the three actions?** **By the end of the unit the letter has a cost paragraph, a what-changed paragraph and a refusal in it, and every one of those has to be traceable to one of the three actions.** **A paragraph that is for the writer is not forbidden — it is placed last.**',
  '**And when the three readers will never read it at the same time.** ⚠ **They read it in different years, which is the same problem and harder.** **The one who reads it last is the one who cannot ask** — **so the letter has to have been written for that reader before anybody knew who it would be.** **That is what the middle of the page is for, and it is why the facts go there and not the feelings.**',
  '**Pronunciation.** 🔊 **Track 2.12** **Read the letter aloud three times, once as each reader, and stop where that reader would stop.** ⚠ **Twice you will not reach the fourth paragraph.** **Four minutes, and it is the only proof-reading that has ever worked on a letter with three readers.**',
  '**Practise:** Write a first paragraph carrying three actions in four lines. **1** a refusal with three readers  **2** a correction of your own earlier figure  **3** a change of date  **4** a finding somebody has to act on by Monday  **5** one where the third reader\'s action is only to know something — and keep it in',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a first paragraph from the card. B does one thing: **names the three actions it carries, and says which reader has not been written to.** ⚠ **Two rows on each card carry all three** — B must say so, **because the point of the cycle is that it can be done in four lines and usually is not.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads the first paragraph)_ __________.'],
  ['B', 'Actions carried: __________ · __________ · __________.'],
  ['B', 'Not written to: **nobody / __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_⚠ We cannot certify the frame; the bolts measure M12 against a specified M16 at forty-one positions; nothing can be certified until the nine are measured._', '_⚠ Nineteen were turned away; nine were the rota and ten were our own book; the request is for Deir Atiyah only._'],
  ['_I am writing with reference to the above matter._', '_Further to our recent correspondence, I thought it might be helpful to set out the position._'],
  ['_There are a number of issues arising from the inspection of 7 August._', '_I hope you will not mind my writing to all three of you at once._'],
  ['_The entry form was signed on 3 February and not sent; a late entry is possible until 30 November; the directorate is being told what happened._', '_Three sets of results are missing; thirty-eight of forty-one are reported; the table says so._'],
  ['_It has been a difficult term and one entry has suffered._', '_I should be grateful for your early consideration of this matter._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the actions carried and the readers missed. ⚠ **The four rows marked ⚠ carry all three actions and none of them is longer than four lines**, which is the finding. **Then the count on the other six: between them they carry no actions at all.** **Every one of the six is about the letter rather than about the thing**, and not one reader in six paragraphs has been told what to do.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the first paragraph of your own three-reader letter**, in four lines, carrying all three actions. ⚠ **Then write the last paragraph**, and put in it anything that is for you rather than for them. **Do not write the middle.**'));
out.push(p('**b**  Swap. Your partner reads your first paragraph **as each of your three readers in turn** and says, for each, what they would now do. ⚠ Then the test: **they say which reader would telephone you anyway, and what about.** **If all three would telephone, the paragraph has four lines and no actions in it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine has one letter and three readers — the owner, the main contractor and the insurer — and he says it is the insurer who decides its shape, because the insurer is the only one of the three who will not telephone him. Mr Shihabi asked why that decides the shape, and because the other two will ring and ask: the insurer reads the letter in eighteen months with a claim in front of him and asks nobody anything, so whatever is not in the letter is not in the world. Mrs Rizk said so you write for the reader who cannot ask, and you write the facts for the reader who cannot ask and the actions for the two who can — which is the shape, and he arrived at it by losing an argument in 2021. Mrs Tarabishi asked about the first paragraph, and all three actions go in it, in four lines: the owner has to decide about Monday, the contractor has to find the requisition, and the insurer has to know that nothing was certified. If any of the three is not in the first four lines, that reader has not been written to. Mr Tayara said two of his three never read past the first paragraph, and Mrs Khoury said two of everybody\'s three never do — which is why the last paragraph is the other place anything can go: first and last, and the middle is for the reader who cannot ask. Then Mrs Oueidat named the thing she finds most often in these letters: the sentence that is in it for nobody. Dr Qabbani asked for one, and she gave it — I hope you will not mind my writing to all three of you at once. No reader acts on that: it is in the letter because the writer is uncomfortable about having three readers, and it is the first sentence a reader uses to decide what kind of document this is. Mrs Ajouz said so the test is the one from 2.1, does it help one of the three actions, and it is harder now than it was in 2.1, because by now the letter has a cost paragraph, a what-changed paragraph and a refusal in it, and every one of those has to be traceable to one of the three actions. Mr Attar said his would fail, because his cost paragraph is for him, and then it goes where the reader it is for will read it, which is the last paragraph and not the middle — a cost named in the middle of a page is a cost the two readers who matter will never see, and a cost nobody sees was not paid. Mr Zahreddine said his 2021 letter had the whole of the cost in the fourth paragraph. And Mrs Oueidat gave the proof-reading: read it aloud three times, once as each reader, and stop reading where that reader would stop. Twice you will not reach the fourth paragraph. It is four minutes and it is the only proof-reading that has ever worked on a letter with three readers._'));
out.push(p('**Listener task:** write which of your three readers would telephone you anyway, and what about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mr Zahreddine wrote to three readers at once. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE · CONSULTING ENGINEER** · _to the site owner; copied to the main contractor and to the insurer_ · **12 August**',
  '**Nothing on the east elevation has been certified and nothing can be certified on Monday.** **The bolts as installed measure M12 against a specified M16 at all forty-one positions I was able to reach**; nine positions at the third level are behind a sheeted scaffold and are unmeasured. **The owner has a decision about Monday and I set out the two courses below.** **The contractor is asked to produce the file copy of the purchase requisition of 19 July.** **The insurer is asked for nothing and should note that no certificate has been issued for this frame at any stage.**',
  '**Monday, which is the owner\'s decision and the only one in this letter.** **The two courses are to leave the elevation unloaded, or to strike the scaffold at the third level on Saturday so that the nine can be measured and a decision taken on Monday afternoon.** **There is no third course.** **I cannot issue a partial certificate**, a frame being certified as a frame and not as forty-one of fifty positions.',
  '**What I measured and what I did not.** **Forty-one positions with a vernier between half past seven and ten past nine on 7 August**, two readings at each and the lower recorded: thirty-nine at 12.0 and two at 12.1. **I did not examine the welds, the grout or the anchor positions below the second level.** **I have not seen the mill certificates for any of the fifty**, those not being in the site file on either visit.',
  '**The requisition, which is the contractor\'s part.** **The supplier has confirmed in writing that the order they hold is for M12.** **The requisition of 19 July in the site file has been amended by hand after it was raised and the amendment is not initialled.** **I have asked for the file copy twice, on the ninth and the tenth, and shall ask once more in writing and then stop asking.**',
  '**What this letter does not say, and I would rather say it than be asked.** ⚠ **It does not say that the frame will fail.** **The design load for this elevation is below the strength M12 at these spacings would give**, and that calculation has not been done and is not my instruction. **It says that the frame does not meet the specification it was built to**, which is a statement about a contract.',
  '⚠ **And one thing that is in this letter for me.** **I was asked on site on 7 August to leave the bolt sizes out of my note and to raise them separately.** **I declined, and I am recording that I declined**, because a letter that did not mention the request would be the second document this week that leaves something out.',
  '**F. Zahreddine** · **telephone before Thursday if Saturday is not possible, and in writing if the decision is to leave the elevation unloaded**',
]));
out.push(item('1', 'How does the first paragraph give each of the three readers the action that is theirs?'));
out.push(item('2', 'What is in the letter for the writer himself, and where has he put it?'));
out.push(item('3', 'What does he say the letter does **not** say, and why does he say so?'));
out.push(writers([
  'One letter for three readers: **a first paragraph carrying all three actions in four lines** → **the one decision, with a closed set of courses** → **the facts, for the reader who cannot ask** → **the second reader\'s part** → **what the letter does not say** → **and anything that is in the letter for you, placed last.**',
  '⚠ **Name each reader\'s action in the first paragraph, including the reader whose action is only to know something.** _The insurer is asked for nothing and should note that no certificate has been issued at any stage._ **Eighteen words, and the reader who will not telephone has been written to.**',
  '**Put the facts in the middle and the actions at the ends.** ⚠ **The measurements, the scope and the requisition history are for the reader reading this in eighteen months.** **The two who can telephone need the first paragraph and the last.**',
  '**Say what the letter does not say before anybody asks.** ⚠ _It does not say that the frame will fail._ **A reader deciding about Monday will read the worst available meaning into a refusal**, and one sentence closes it off.',
  '⚠ And **put what is in the letter for you at the end, and say that it is.** _One thing that is in this letter for me: I was asked to leave the bolt sizes out and I declined._ **A paragraph for the writer is not forbidden; it is placed where the readers who matter have already finished.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first paragraph and the last of your three-reader letter (120 words or more).'));
out.push(p('**______________** · _to _______________; copied to _______________ and to _______________ · **______________**   **______________ and ______________.** **______________ measure ______________ against ______________.** **______________ has a decision about ______________ and I set out the courses below.** **______________ is asked to ______________.** ⚠ **______________ is asked for nothing and should note that ______________.**   _(the middle is not written in this task)_   ⚠ **And one thing that is in this letter for me.** **I was asked ______________.** **I declined, and I am recording that I declined**, because ______________.   **______________** · **telephone before ______________ if ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three actions in the first four lines, including the reader who is only to know',
  'A closed set of courses for the one decision',
  'Facts in the middle, actions at the ends',
  'Anything that is for you placed last, and said to be',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first paragraph**, and the room names the three actions and says whether any reader has been missed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the three actions first, the one decision, the facts, the second reader\'s part, what it does not say, and what is in it for you.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: three actions in four lines, a closed set of courses, facts in the middle, and the writer\'s own paragraph placed last.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Each student reads their own letter aloud three times, once as each reader, and stops where that reader would stop.** ⚠ **Say out loud, each time, where you stopped.** **Most people stop twice in the first paragraph and once at the end**, which is the whole design of the page tested in four minutes. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **whatever is not in the letter is not in the world.**'));
out.push(hw('Write **your own three-reader letter in full**. ⚠ **Then do Mrs Oueidat\'s proof-reading: read it aloud three times, once as each reader, stopping where that reader would stop, and write down where you stopped each time.** **If anything important is below the lowest of your three stopping points, move it.** **Bring the letter and the three stopping points marked on it.** **2.7 is the unit check and the examination cycle**, and it mediates between a letter and the reader who was copied in and not written to.'));

// ===================== 2.7 =====================
out.push(h2('2.7  Review & Mediate: The reader who was copied in'));
out.push(p('**Function:** mediating between a letter and the reader who was copied in and not written to   ·   **Recycling:** Unit 2   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 4 · Writing Part 2 (a letter or email) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It is apparent that the second sample was taken in thirty-one, which the table shows it.  **2** What the committee agreed was the figures would be recounted.  **3** We are not entirely confident, which names what is missing.  **4** The roller having been out, we cannot print, and the reason is that.  **5** Their disagreement about whether holding size explains it are not about the fall.  **6** I am aware that this makes the entry more harder to obtain.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the letter, and the two readings of it that reached Room 14 in the same week.'));
out.push(box(null, [
  '**ONE LETTER, TWO READINGS** _(one page, two readers — and one of them was only copied in)_',
  '**The letter.** _"Dear Mrs Haddad, I am writing about your son\'s examination entry. An administrative oversight has been identified in relation to one entry and the matter is being addressed with the directorate. I shall write again once the position is clearer. Copied to: the examinations office; Mr Sabbagh."_',
  '**The first reader — Mrs Haddad.** _"It is a polite letter and it tells me nothing. I do not know what happened, I do not know what I have to do, and I do not know by when."_',
  '**The second reader — Mr Sabbagh, the deputy head, who was copied in.** _"It tells me a great deal. It tells me that nobody is going to say I signed it."_',
  '⚠ **Both readers are right about the letter and neither of them is right about what to do next.**',
  '**And the thing neither of them said.** **The examinations office was also copied in, and the letter gives them nothing to act on at all** — **no date, no candidate number and no request.**',
  '**The question for the cycle.** _What do you say to the person who wrote it?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does the room decide a copied-in reader is, and what is the one thing worth saying to the writer?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  Copied to', [
  ['Ms Huda', 'Two readings of one letter. Mrs Rizk — which reader is right?'],
  ['Mrs Rizk', 'Both. ⚠ **And the second reading is the one that matters, because it is about a sentence that is not in the letter.**'],
  ['Mr Shihabi', 'Say that again.'],
  ['Mrs Rizk', '⚠ **_An administrative oversight has been identified_ does not say who signed it.** **The deputy read the letter and found out that he was safe.** **Nobody wrote that and he is not wrong to have read it.**'],
  ['Mrs Oueidat', 'A copied-in reader reads for what is missing. ⚠ **Always. It is the only reading available to somebody who was not written to.**'],
  ['Mr Tayara', 'I wrote that letter and I had not thought about Mr Sabbagh reading it at all.'],
  ['Mrs Tarabishi', 'But he is on the copy line.'],
  ['Mr Tayara', '⚠ **He is on the copy line because he signed the form.** **I put him there to be fair to him and the letter told him he was in the clear**, which is the opposite of fair to Mrs Haddad.'],
  ['Dr Qabbani', 'And the third reader has nothing at all.'],
  ['Mrs Khoury', '⚠ **The examinations office was copied in and given no date, no candidate number and no request.** **A copy line with nothing on it for the reader is a copy line that creates a file and no action** — **and in eight months nobody there did anything, which is exactly what the letter asked of them.**'],
  ['Mrs Ajouz', 'So what do you say to the writer? He is in the room.'],
  ['Ms Huda', 'Mr Zahreddine.'],
  ['Mr Zahreddine', '⚠ **Nothing about the oversight sentence, which is where everybody will want to start.** **Ask him one question: what does each of the three people on this letter do on Tuesday?**'],
  ['Mr Tayara', '**Two of them do nothing and one of them telephones me.**'],
  ['Mr Zahreddine', '⚠ **Then that is the finding and he has produced it himself**, which is the only way it ever sticks.'],
  ['Jad', 'And the thing not to do?'],
  ['Mrs Oueidat', '⚠ **Do not tell him what the oversight sentence means to the deputy.** **He will hear it as an accusation about his own fairness** — **and it is not, because he put the deputy on the copy line out of decency and the decency is what did the damage.**'],
  ['Mrs Khoury', '**Which is the hard part of mediating a document.** ⚠ **The fault is almost never where the writer\'s intention was.** **His intention was to be fair to the deputy and the result was a letter that cleared the deputy and told a mother nothing.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the three moves are the ones from Unit 1 with one word changed.** **Say what is correct. Ask what each reader does on Tuesday. And stop.** **The sentence that fixes the letter is the one he will write himself, in the silence.**'],
]));
out.push(sp());
out.push(box('Language box – mediating a letter with a copy line', [
  '**The three moves.** ⚠ **1 Say what is correct, and mean it.** **2 Ask the one question: _what does each of these readers do on Tuesday?_** **3 Stop.**',
  '⚠ **A copied-in reader reads for what is missing, always.** **It is the only reading available to somebody who was not written to.** _An administrative oversight has been identified_ **does not say who signed the form** — **so the deputy, reading it, found out that he was safe.** **Nobody wrote that and he is not wrong to have read it.**',
  '⚠ **A copy line with nothing on it for the reader creates a file and no action.** **The examinations office was copied in and given no date, no candidate number and no request** — **and in eight months nobody there did anything, which is exactly what the letter asked of them.**',
  '**The hard part of mediating any document.** ⚠ **The fault is almost never where the writer\'s intention was.** **He put the deputy on the copy line out of decency, and the decency produced a letter that cleared the deputy and told a mother nothing.** **A mediator who names the intention is heard to be attacking it.**',
  '**So do not explain the sentence; ask about the readers.** ⚠ _What does each of these three do on Tuesday?_ **_Two of them do nothing and one of them telephones me_ is the finding, and the writer produced it** — **which is the only way a finding about somebody\'s own letter ever sticks.**',
  '**And the repair is always the same shape.** **Every name on a copy line gets one action or comes off the line.** ⚠ **There is no third option**, and a letter that cannot give a copied-in reader an action has told you that the reader was there for the writer\'s comfort.',
  '**Pronunciation.** 🔊 **Track 2.14** **Ask the question and then stop, for as long as it takes.** ⚠ **The silence after _what does each of them do on Tuesday?_ runs to eight or nine seconds**, and what the writer says at the end of it is the whole value of the mediation. **A mediator who fills it has answered their own question.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a letter and two readings and does **not** show them. A reads the letter, then both readings. B makes the three moves: **says what is correct, asks what each reader does on Tuesday, and stops.** ⚠ **In one of the two pairs a copied-in reader has been given an action that is not theirs to take.** Change roles with the other pair.'));
out.push(table(['Pair A – the entry', 'Pair B – the four pallets'], [
  ['_First reader: "polite, and it tells me nothing."_', '_First reader: "I know what to do — send them back."_'],
  ['_Second reader (copied in): "nobody is going to say I signed it."_', '_⚠ Second reader (copied in, the depot): "it says we are to re-test them."_'],
  ['_The letter: "an administrative oversight has been identified."_', '_The letter: "the batch should be re-tested before any decision is taken."_'],
  ['_⚠ The third name on the copy line is given nothing at all._', '_⚠ The depot has no thermometer and never has had._'],
  ['_⚠ The fault is not in the sentence; it is in the copy line._', '_⚠ An action has been given to the one reader who cannot take it._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what each reader does on Tuesday, in both letters. ⚠ **Pair B is the one with the misplaced action**: _the batch should be re-tested_ **gives the work to a depot with no thermometer**, and the passive is what hid it — **nobody is named, so everybody assumes somebody else.** **That is the finding: an action in the passive is an action nobody has been given.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a letter of your own with a copy line** and write, against every name on it, **the action that name has on Tuesday.** ⚠ **Any name with no action comes off the line or gets one.** **Write which you are going to do.**'));
out.push(p('**b**  Swap and do the three moves on your partner\'s letter, out loud, in order. ⚠ **After the question, say nothing and count.** **Most people take eight or nine seconds**, and what they say at the end of it is the repair.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say to the person who wrote it:  _Two readings of one letter. Asked which reader is right, Mrs Rizk said both — and the second reading is the one that matters, because it is about a sentence that is not in the letter. Mr Shihabi asked her to say that again: an administrative oversight has been identified does not say who signed it, so the deputy read the letter and found out that he was safe. Nobody wrote that and he is not wrong to have read it. Mrs Oueidat said a copied-in reader reads for what is missing, always, because it is the only reading available to somebody who was not written to. Mr Tayara said he wrote that letter and had not thought about Mr Sabbagh reading it at all. Mrs Tarabishi pointed out that he is on the copy line, and he is on the copy line because he signed the form: Mr Tayara put him there to be fair to him, and the letter told him he was in the clear, which is the opposite of fair to Mrs Haddad. Dr Qabbani said and the third reader has nothing at all, and Mrs Khoury said the examinations office was copied in and given no date, no candidate number and no request — a copy line with nothing on it for the reader creates a file and no action, and in eight months nobody there did anything, which is exactly what the letter asked of them. Mrs Ajouz asked what you say to the writer, since he is in the room, and Mr Zahreddine said nothing about the oversight sentence, which is where everybody will want to start: ask him one question — what does each of the three people on this letter do on Tuesday? Mr Tayara answered it himself: two of them do nothing and one of them telephones me. Which is the finding, produced by the writer, and that is the only way it ever sticks. Mr Attar asked about the thing not to do, and Mrs Oueidat said do not tell him what the oversight sentence means to the deputy: he will hear it as an accusation about his own fairness, and it is not, because he put the deputy on the copy line out of decency and the decency is what did the damage. Mrs Khoury said that is the hard part of mediating a document — the fault is almost never where the writer\'s intention was, and his intention was to be fair to the deputy while the result was a letter that cleared the deputy and told a mother nothing. And Mrs Rizk said the three moves are the ones from Unit 1 with one word changed: say what is correct, ask what each reader does on Tuesday, and stop. The sentence that fixes the letter is the one he will write himself, in the silence._'));
out.push(p('**Listener task:** write the name on your own copy line that has no action, and what you are going to do about it.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 4)', 7));
out.push(p('For questions **1–6**, complete the second sentence so that it has a similar meaning to the first, using the word given. **Do not change the word given.** You must use **between three and eight words**, including the word given.'));
out.push(box(null, [
  '**1**  The committee did not agree about who would pay for the forty-one bolts.   **WHAT**',
  '______________________________________ was who would pay for the forty-one bolts.',
  '**2**  I am not confident about the April figures.   **CHECKED**',
  'The April figures ______________________________________.',
  '**3**  Nobody has ever established whether the ten were comparable to the thirty-one.   **NEVER**',
  'It ______________________________________ whether the ten were comparable to the thirty-one.',
  '**4**  The roller has been out since 6 March, so we cannot print the order.   **HAVING**',
  'We cannot print the order, ______________________________________ since the sixth of March.',
  '**5**  We cannot issue a partial certificate, because a frame is certified as a frame and not in parts.   **BEING**',
  'We cannot issue a partial certificate, ______________________________________ as a frame and not in parts.',
  '**6**  She refused to leave the bolt sizes out of her note.   **DECLINED**',
  'She ______________________________________ the bolt sizes out of her note.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a letter and its copy line (120 words or more).'));
out.push(p('**ONE LETTER, TWO READINGS** · ______________   **The letter.** _"______________"_   **The first reader.** _"______________"_   **The second reader, who was copied in.** _"______________"_   **Which is right?** ⚠ **______________**, and the second reading matters because ______________.   **What a copied-in reader does.** ⚠ **______________ for what is ______________**, because ______________.   **The copy line.** ______________ has ______________; ______________ has ______________; ⚠ **______________ has ______________ at all.**   **The three moves.** ⚠ **1 ______________. 2 ______________. 3 ______________.**   **And what I am not going to say.** ⚠ **______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What is correct, said first and meant',
  'One question about Tuesday, and no explanation of the sentence',
  'Every name on the copy line given an action or taken off it',
  'The writer\'s intention not named anywhere',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: a letter or email)', 10));
out.push(box(null, [
  '⚠ **Part 2 at C1 gives you a choice of four tasks and you write one.** **This is the letter, and the thing to notice is the reader: the task tells you who they are and what they already know, and every sentence that tells them what they already know is a sentence that loses a mark.**',
  'You are a member of a parents\' committee at a school. **The school has written to all parents announcing that the school day will begin ten minutes later from the end of September.** The letter did not say what would happen to pupils who arrive early, and several families drop children at two schools in the same fifteen minutes.',
  '**Write a letter to the head teacher.** You should: **say which part of the announcement works and why**, **set out the one problem the letter does not deal with, with a figure**, and **propose one change, naming what it would cost the school.** Write **220–260 words**.',
  '⚠ **Three things and no more, each in its own paragraph.** **The head has read about forty letters this week and will read your first paragraph and your last.** **A paragraph that praises the announcement at length has spent your best space on the thing he already believes.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  ___ the committee agreed was that the figures would be recounted.   a) Which   b) That   c) What',
  '2  ___ is apparent from the table that the second sample was taken in thirty-one.   a) It   b) That   c) This',
  '3  The hedge that travels is the one that names what ___.   a) is missed   b) is missing   c) misses',
  '4  A document written for one reader does not become worse; it becomes a different ___.   a) claiming   b) claimant   c) claim',
  '5  The letter was pitched ___ a reader who already had the file.   a) at   b) to   c) for',
  '6  Every name on a copy line gets one action or comes ___ the line.   a) out   b) off   c) away',
  '7  It was never ___ who emptied the external tray.   a) establish   b) establishing   c) established',
  '8  The two accounts ___ badly with each other and the reader had to choose.   a) sat   b) set   c) sit',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 2.15** You will hear a records officer at a directorate talking about letters with more than one reader. For questions **1–8**, complete the sentences with **a word or short phrase**.'));
[
  '**1**  The speaker says a copy line usually exists because the writer is being ________________.',
  '**2**  In her office, a letter that gives a copied-in reader no action is filed and nobody ________________.',
  '**3**  The phrase she sees most often in these letters is careful, true, and has no ________________.',
  '**4**  Of the letters she handled last year, ________________ had more than one reader.',
  '**5**  The letter she describes in detail was copied to ________________ people.',
  '**6**  She says the reader who acts fastest is the one whose action appears in the ________________.',
  '**7**  Her own rule is that every name on the copy line must have ________________ beside it.',
  '**8**  She says the sentence that does the most damage is the one that tells a reader they are ________________.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 2.15  Audio script (read after the check)', [
  ['Records officer', 'I have been in the records office at the directorate for nineteen years and I handle about four hundred letters a month, so I am going to say something about copy lines that nobody in a school ever hears. A copy line usually exists because the writer is being fair. That is not a criticism; it is a description. Somebody puts a second name on a letter because that person is involved and ought to know, and the trouble is that being told and being asked are different things, and the copy line does not distinguish between them.'],
  ['', 'What happens in my office is simple. A letter that gives a copied-in reader no action is filed and nobody reads it. Not nobody acts on it — nobody reads it. It goes into the candidate file and the next person who opens the file is looking for something else. Last year I handled a little over four thousand eight hundred letters and I would say about two thirds had more than one reader, and of those, perhaps one in five gave the second reader anything to do.'],
  ['', 'The phrase I see most often in them is an oversight has been identified. I could show you two hundred of those. It is a true sentence, it is a careful sentence, and it has no subject, which is the whole of its usefulness to the person writing it.'],
  ['', 'There is one letter I think about. It came to us in February about an examination entry and it was copied to four people, including me. It gave none of the four anything to do. Nobody at this office did anything about it for eight months, and I want to be clear that we were not being idle: the letter did not ask us for anything. In October the same school wrote again with a candidate number and a date in the first paragraph, and the late entry was processed in nine days.'],
  ['', 'If you want the one thing that makes a difference, it is where the action sits. The reader who acts fastest is the one whose action appears in the first paragraph. Not the one whose action is most urgent, and not the one who is named first — the one whose action is in the first paragraph. My own rule, for what it is worth, is that every name on the copy line must have a verb beside it, even if the verb is only to note something.'],
  ['', 'And the sentence that does the most damage is not the vague one. It is the one that tells a reader they are not at fault, when nobody has asked. Those letters produce no action of any kind, because the only reader with an interest in the thing has just been told that he has not got one.'],
]));
out.push(p('**C  Writing.** Write the letter (220–260 words): the part that works, the problem with a figure, and one change with its cost named.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ state one claim as a fact and name the three readers it has to survive',
  '☐ name a reader by the action they have to take rather than by their title',
  '☐ tell a hedge that travels between readers from one that names my own state of mind',
  '☐ turn a long subject round with a frame so that the claim arrives last',
  '☐ write a clause where a noun would hide a disagreement — and keep the noun where it would not',
  '☐ name what a single draft costs me, as a cost and not as an excuse',
  '☐ write a first paragraph that gives three readers three actions in four lines',
  '☐ mediate a letter by asking what each reader does on Tuesday, and then stopping',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _pitch at · talk down to · read across · hold good · smooth over · paper over · hedge about · chime with · jar with · sit badly with · go down well · carry through to_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 2.7 draws on this)_: _claim → **claimant** · assert → **assertion** · receive → **recipient** · address → **addressee** · caution → **cautious** · tentative → **tentatively** · categorical → **categorically** · neutral → **neutrality** · emphasis → **emphatic**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _ask for_ **→ _a sentence that asks for an argument_**, where at B1 it was asking for a form · _go back_ **→ _go back on_** what you wrote to another reader, which is what three drafts let you do without noticing · _come in_ **→ _come in for_**, of a document that attracts criticism it was not written to attract.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
