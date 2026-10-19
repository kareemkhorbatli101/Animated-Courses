// Proactive English C1 · Syria Edition · Book 1 · Unit 8 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHERE THEY APPEAR TO DIFFER', 'WHERE THEY ACTUALLY DIFFER'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const texts = (paras) => box('Four writers on one question', paras, C.grey, C.navy);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says whether it is a difference of claim or a difference of ground.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 8  Four People Who Disagree'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Four people write about one question and no two of them agree.** ⚠ **Almost none of what looks like disagreement between them is disagreement.** **Two of the four are writing about different things; one differs from another about a conclusion while agreeing about everything that leads to it; and one differs about the reason and arrives at the same place.**',
  '**8.1** reads four short texts and says which two are actually in dispute.   **8.2** tells a difference of claim from a difference of ground.   **8.3** attributes a position across a paragraph without a reporting verb in every sentence.   **8.4** says where a writer\'s reason, rather than their conclusion, differs from another\'s.   **8.5** writes the sentence that holds two writers\' positions in one place.   **8.6** writes the review that places a work among three others.   **8.7** mediates between four writers and a reader who wants to know who is right.',
  '**Exam practice in 8.7:** C1 Advanced **Reading and Use of English Part 6** (cross-text multiple matching), **Writing Part 2** (a review) and **Listening Part 4** (two tasks of five).',
  '⚠ **Bring four short texts to the first lesson of this unit** — **four different people on one question in your own field, a paragraph or two each.** **8.1 cannot be run without them and the finding of it is not available from texts somebody else chose.** **Two hundred words each is enough and four hundred is too many.**',
  '**And the examination part this unit carries is new at C1 and has no equivalent at B2.** ⚠ **Reading and Use of English Part 6 gives four texts on one subject and asks which writer shares another\'s opinion, and which differs.** **It is the only part of the paper that cannot be done by reading one text carefully**, and the skill it tests is the one Mrs Tarabishi has been doing for two years without a name for it.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 8.1 =====================
out.push(pb());
out.push(h2('8.1  Which two are actually in dispute'));
out.push(p('**Function:** reading four short texts and saying which two are actually in dispute   ·   **Grammar:** **Reading Part 6 at C1** · the dispute against the difference of subject   ·   **Pronunciation:** reading two positions aloud without taking a side'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your four texts, and who you think disagrees with whom.** ⚠ **Names only, no reasons.** Your teacher writes the ten sets of pairings on the board and leaves them there until 4R. **In most classes the first answer is _all of them_**, and by the end of the cycle the average is one pair in four texts.'));
out.push(board('A says repayment is high and B says it is low.', 'A counts loans and B counts borrowers.'));
out.push(p('**b**  Which two of these are in dispute? **1** _Repayment rates are above eighty per cent._  **2** _Repayment rates are about sixty per cent._  **3** _The question is not the rate but who is excluded before the loan is made._  **4** _Repayment is high because the lender selects borrowers who will repay._  **5** _Repayment cannot be measured from administrative records at all._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about four texts on one question?   **A** they disagree   **B** **most of what looks like disagreement is a difference of subject or of method** — and real disputes are about one claim, with both writers meaning the same thing by it   **C** one of them is wrong'));
out.push(p('**b**  Listen again. **1** What did Mrs Tarabishi find when she went back to her own four authors?   **2** What does Mrs Oueidat say about two people who use the same word?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.1  One pair in four', [
  ['Ms Huda', 'Mrs Tarabishi — four authors and a literature review. How many of them disagree?'],
  ['Mrs Tarabishi', '⚠ **Two, and I had written the review as though all four did.** **Eleven pages of _however_ and _by contrast_, and one actual dispute in the whole of it.**'],
  ['Mrs Khoury', 'Say what the other three turned out to be.'],
  ['Mrs Tarabishi', '⚠ **One is a difference of subject: he is counting loans and she is counting borrowers.** **One is a difference of method: administrative records against household surveys.** **And one is not a difference at all** — **they agree, and he says it in a sentence she would not have written.**'],
  ['Dr Qabbani', 'That last one must be the hardest to see.'],
  ['Mrs Tarabishi', '⚠ **It took me two months and a supervisor.** **I had put them in opposite columns because one writes _the evidence is reassuring_ and the other writes _the evidence does not justify alarm_.** **Those are the same sentence in two temperaments.**'],
  ['Mrs Oueidat', '⚠ **And the commonest false dispute in any field is two people using one word for two things.** _Repayment_ **means a loan repaid in full to one of them and a loan not in arrears at twelve months to the other.** **Neither says so, because in each of their worlds it is obvious.**'],
  ['Mr Shihabi', 'How do you test it?'],
  ['Mrs Tarabishi', '⚠ **One question: could both be true at once?** **If both can be true, it is not a dispute.** **The loans and the borrowers can both be true. The two definitions of repayment can both be true. The administrative records and the surveys can both be true.**'],
  ['Mr Tayara', 'And the real one?'],
  ['Mrs Tarabishi', '⚠ **Cannot both be true: one says selection explains the rate and the other says selection has been tested for and does not.** **Same word, same measure, same population, opposite answers.** **That is a dispute and it is the only one in my four.**'],
  ['Mrs Ajouz', 'Eleven pages for one dispute seems a poor return.'],
  ['Mrs Khoury', '⚠ **The eleven pages are not wasted and they are mis-labelled.** **Three of the four comparisons were real and useful and none of them was a disagreement** — **and a review that says _these two are measuring different things_ is doing more work than one that says _however_.**'],
  ['Jad', 'Does the examination ask for the dispute or for the agreement?'],
  ['Mrs Tarabishi', '⚠ **Both, and that is Part 6.** **Four texts, and the questions ask which writer shares another\'s opinion and which differs from them** — **and about half the marks are on the sharing, which candidates find harder.**'],
  ['Mrs Rizk', 'Why harder? Agreement sounds easier.'],
  ['Mr Shihabi', 'And what does a reader do with four texts and one dispute?'],
  ['Mrs Tarabishi', '⚠ **Reads the five non-disputes, because four of them are usable and the dispute is not.** **A dispute two authors could not settle in 2021 will not be settled by anybody reading me in 2026.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **Because two people who agree almost never agree in the same words**, and a candidate looking for matching words finds the two who are both using _repayment_ and misses the two who are saying one thing in two vocabularies.'],
]));
out.push(sp());
out.push(box('Language box – the dispute and the three things that look like one', [
  '**The test, and it is one question.** ⚠ **Could both be true at once?** **If both can be true, it is not a dispute** — **and in four texts on one question, three of the comparisons usually pass that test.**',
  '**One: a difference of subject.** ⚠ **He is counting loans and she is counting borrowers.** **Both figures are right and they are about different things.** **This is the easiest to find and the one a reader is most likely to report as a disagreement.**',
  '**Two: a difference of method.** ⚠ **Administrative records against household surveys.** **Neither is wrong and the two will not produce the same number, ever** — **and a review that says so has told the reader more than a review that reports a range.**',
  '**Three: the same position in two temperaments.** ⚠ _The evidence is reassuring_ **against** _the evidence does not justify alarm_. **The same claim, written by two people with different dispositions**, and this is the hardest of the three to see and takes outside help.',
  '**And the real dispute.** ⚠ **Same word, same measure, same population, opposite answers.** **One says selection explains the rate and the other says selection has been tested for and does not.** **Both cannot be true, and that is the whole definition.**',
  '**The commonest false dispute is one word used for two things.** ⚠ _Repayment_ **meaning a loan repaid in full, and _repayment_ meaning a loan not in arrears at twelve months.** **Neither writer says which they mean, because in each of their worlds it is obvious** — **and a reader who does not check the definition has found a disagreement that does not exist.**',
  '**Pronunciation.** 🔊 **Track 8.2** **Read two opposed positions aloud without taking a side.** ⚠ **The giveaway is the second one: a reader who has a view lifts the pitch slightly on the position they hold and flattens the other.** **Read both flat and at the same speed.** **In a viva, a committee or a seminar, that flatness is what makes the comparison believed.**',
  '**Practise:** Say which it is, and why. **1** a difference of subject  **2** a difference of method  **3** the same position in two temperaments  **4** one word for two things  **5** a real dispute — and say what makes it one',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair of positions from the card. B applies the test — **could both be true at once?** — and names which of the four it is. ⚠ **One row on each card is a real dispute.** **B must find it and say what makes it one.** Change cards.'));
out.push(table(['Card A – two positions', 'Card B – two positions'], [
  ['_Repayment is above eighty per cent._ · _Repayment is about sixty per cent, by household survey._', '_The delay averages nine days, from the diary._ · _The delay averages four days, from the clerks\' log._'],
  ['_⚠ Selection explains the rate._ · _Selection has been tested for and does not explain it._', '_⚠ The sentence caused the fall in queries._ · _The sentence cannot have caused it: the clerks changed._'],
  ['_The evidence is reassuring._ · _The evidence does not justify alarm._', '_The file is adequate._ · _The file contains nothing that would justify a return._'],
  ['_He counts loans._ · _She counts borrowers._', '_Nine of the eleven came from paper._ · _Paper carries a fifth of the volume._'],
  ['_Eleven of a hundred and four._ · _About one in nine of a month._', '_Four of the twelve certificates are missing._ · _A third of the twelve are unaccounted for._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each row, which of the four it is. ⚠ **Row 2 on both cards is the real dispute** — **same measure, same population, opposite answers** — **and every other row passes the both-can-be-true test.** **Row 5 on both cards is the one the room argues about**: two numbers that are the same number said two ways, which is not even a comparison. **Rows 4 are differences of subject and rows 3 are the same position in two temperaments.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your four texts** and make **six pairings** — A with B, A with C, A with D, B with C, B with D, C with D. ⚠ **Apply the test to each and label it.** **Six pairings, and in most sets one is a dispute and five are not.** **Write the label beside each, in one word: _subject_, _method_, _temperament_, _definition_, or _dispute_.**'));
out.push(p('**b**  Swap. Your partner reads **only your labels** and says **which pairing they would want to read about.** ⚠ **It is almost never the dispute.** **A reader wants the pairing labelled _definition_**, because that is the one that tells them something they can use, and the dispute usually cannot be settled by anybody in the room.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi has four authors and a literature review, and two of them disagree: she had written it as though all four did, eleven pages of however and by contrast, and one actual dispute in the whole of it. Mrs Khoury asked what the other three turned out to be. One is a difference of subject, because he is counting loans and she is counting borrowers. One is a difference of method, administrative records against household surveys. And one is not a difference at all: they agree, and he says it in a sentence she would not have written. Dr Qabbani said that last one must be the hardest to see, and it took two months and a supervisor — she had put them in opposite columns because one writes the evidence is reassuring and the other writes the evidence does not justify alarm, and those are the same sentence in two temperaments. Mrs Oueidat said the commonest false dispute in any field is two people using one word for two things: repayment means a loan repaid in full to one of them and a loan not in arrears at twelve months to the other, and neither says so, because in each of their worlds it is obvious. Mr Shihabi asked how you test it, and one question: could both be true at once? If both can be true it is not a dispute — the loans and the borrowers can both be true, the two definitions can both be true, the records and the surveys can both be true. Mr Tayara asked about the real one, and it cannot both be true: one says selection explains the rate and the other says selection has been tested for and does not. Same word, same measure, same population, opposite answers. Mrs Ajouz said eleven pages for one dispute seems a poor return, and Mrs Khoury said the eleven pages are not wasted but mis-labelled: three of the four comparisons were real and useful and none was a disagreement, and a review that says these two are measuring different things is doing more work than one that says however. Mr Attar asked whether the examination asks for the dispute or the agreement, and both, and that is Part 6: four texts, and the questions ask which writer shares another\'s opinion and which differs, and about half the marks are on the sharing, which candidates find harder. Mr Shihabi asked what a reader does with four texts and one dispute, and reads the five non-disputes, because four of them are usable and the dispute is not: a dispute two authors could not settle in 2021 will not be settled by anybody reading her in 2026. And Mrs Rizk asked why harder, and because two people who agree almost never agree in the same words._'));
out.push(p('**Listener task:** write your six labels, in one word each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section Mrs Tarabishi rewrote. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _review of the literature on smallholder credit_ · _section 3: where the four authors stand_ · **20 March**',
  '**Of the six pairings among these four authors, one is a dispute and five are not.** **Saying which is which is the work of this section and it is not a courtesy to anybody.**',
  '**Haddad and Mansour are not in dispute: they are counting different things.** **Haddad reports repayment by loan and Mansour by borrower, and a borrower with four loans and one default appears once in Mansour and four times in Haddad.** **Their figures — eighty-four and sixty-one — are both correct and neither is a rate of the same thing.** **Neither of them says which he is counting and both say it clearly enough in their tables.**',
  '**Mansour and Darwish are not in dispute either: they are using different instruments.** **Mansour has the lenders\' administrative records and Darwish has a household survey of nine hundred and twelve families.** ⚠ **The two will never produce the same number**, because a family that has repaid by borrowing elsewhere is a repayment in the records and a default in the survey. **Darwish\'s nine hundred and twelve families hold about two thousand two hundred loans between them.**',
  '**Haddad and Darwish appear to be in dispute and are not.** **Haddad writes that the evidence is reassuring and Darwish that the evidence does not justify alarm.** **I had these two in opposite columns for two months.** **They are the same claim written by two temperaments, and nothing in either paper contradicts anything in the other.** **My supervisor found it in four minutes, by asking what either of them would have had to write for the other to object.**',
  '**The dispute is between Darwish and Khalil, and it is about selection.** **Khalil holds that the rate is explained by lenders choosing borrowers who would have repaid anyway.** **Darwish holds that selection has been tested for, by comparing applicants accepted and refused in the same villages in the same season, and does not explain it.** ⚠ **Both cannot be true.** **They use the same word, the same measure and the same population, and they arrive at opposite answers.** **Khalil\'s population is the same four governorates and the same two seasons.**',
  '**What the dispute turns on, which neither of them says.** **Darwish\'s test rests on the refused applicants being comparable to the accepted ones.** **Khalil\'s objection is that the refusal is itself the selection.** **Neither paper addresses the other\'s sentence and both were published in 2021.**',
  '**And one thing about the other five pairings.** **Four of them are more useful to a reader than the dispute is.** **A reader who learns that _repayment_ means two things has something to do on Monday**, and the dispute between Darwish and Khalil cannot be settled by anybody reading this review. **The sixth pairing, Haddad with Khalil, is a difference of method and is the least interesting of the six.**',
]));
out.push(item('1', 'What are the three kinds of non-dispute here, and which authors are in each?'));
out.push(item('2', 'What makes the Darwish and Khalil disagreement a dispute?'));
out.push(item('3', 'What does she say about the other five pairings, and why?'));
out.push(writers([
  'A section that places four writers: **say how many of the pairings are disputes before naming any** → **each non-dispute with the reason it is not one** → **the dispute, with the four things that make it one** → **what the dispute turns on that neither writer says** → **and which pairings are more useful to the reader than the dispute.**',
  '⚠ **Give the arithmetic of the pairings first.** _Of the six pairings among these four authors, one is a dispute and five are not._ **A reader who has that sentence reads the rest as a map**, and a reader who does not reads it as a series of quarrels.',
  '**Name the mechanism and not the position.** ⚠ _A borrower with four loans and one default appears once in Mansour and four times in Haddad._ **The sentence explains both figures at once and takes a side against neither** — **and no amount of _however_ would have done it.**',
  '**Say when you were wrong, and for how long.** ⚠ _I had these two in opposite columns for two months._ **It is the sentence that makes a reader trust the other five labels**, and it costs eleven words.',
  '⚠ And **say which pairings are more useful than the dispute.** _A reader who learns that repayment means two things has something to do on Monday._ **A dispute that nobody reading your review can settle is the least useful thing in it**, however interesting, and saying so is a service and not a modesty.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a section placing four writers (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **Of the ______________ pairings among these ______________, ______________ is a dispute and ______________ are not.**   **______________ and ______________ are not in dispute: they are ______________.** **______________ reports ______________ and ______________ reports ______________.** **Their figures — ______________ and ______________ — are both correct and ______________.**   **______________ and ______________ are not in dispute either: they are ______________.** ⚠ **The two will never produce the same number**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The arithmetic of the pairings, before any name',
  'A mechanism given for each non-dispute',
  'The dispute, with same word, measure and population',
  'An occasion on which you had it wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says how many disputes it expects to meet.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole section (260 words or more), to the shape in the writer\'s box: the arithmetic, the non-disputes with their mechanisms, the dispute, what it turns on, and which pairings are more useful.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the arithmetic of the pairings first, a mechanism for each non-dispute, the dispute with its four tests, and the occasion you had it wrong.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads two opposed positions aloud and the room says which of the two the reader holds.** ⚠ **The room is usually right, and the reader is usually surprised.** **The pitch lifts slightly on the position held and flattens on the other**, and nobody can hear themselves doing it. Then the sentence the cycle ends on, which is Mrs Tarabishi\'s: **two people who agree almost never agree in the same words.**'));
out.push(hw('Take **your four texts** and write **the six labels**: subject, method, temperament, definition, or dispute. ⚠ **Then write the mechanism for each non-dispute in one sentence** — **not that they differ, but why both are right.** **Bring the six labels and the five mechanisms.** **8.2 tells a difference of claim from a difference of ground**, which is the pairing you will have found hardest to label.'));

// ===================== 8.2 =====================
out.push(pb());
out.push(h2('8.2  A difference of claim, a difference of ground'));
out.push(p('**Function:** telling a difference of claim from a difference of ground   ·   **Grammar:** two writers who agree on the finding and disagree about what it shows   ·   **Pronunciation:** the shared half said once and not twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a disagreement at your own work, and whether the two sides agree about what happened.** ⚠ **Two words: _they do_ or _they do not_.** Your teacher counts. **In most classes seven or eight of the ten say _they do_**, which means seven or eight of the disagreements in this room are about ground and not about claim.'));
out.push(board('They disagree about the Saturday figures.', 'They agree about the figures and disagree about what caused them.'));
out.push(p('**b**  Which pair differ about the ground rather than the claim? **1** _Both say the fall is real; one says it is the ten minutes and one says it is the new timetable._  **2** _One says the fall is eight conversations and one says it is three._  **3** _One says repayment is high and one says it is low._  **4** _Both say the printed route explains the eleven; one says the flag and one says the four-day-old sheets._  **5** _One says the evidence is thin and one says it is adequate._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about a difference of ground?   **A** it is a smaller disagreement   **B** **it is a disagreement in which both sides already agree about everything that can be checked** — so it is settled by naming what would distinguish the two grounds, not by argument   **C** it is not a real disagreement'));
out.push(p('**b**  Listen again. **1** What happened at Dr Qabbani\'s committee over the eight unaccounted admissions?   **2** What does Mrs Khoury say two people who agree about the facts are really arguing about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.3  Agreeing about everything that can be checked', [
  ['Ms Huda', 'Dr Qabbani — the committee and the eight.'],
  ['Dr Qabbani', '⚠ **Forty minutes, and at the end of them everybody agreed about every number in the paper.** **Thirty-one, ten, eight at night, two on antibiotics.** **Nobody disputed a figure and the room was divided.**'],
  ['Mrs Tarabishi', 'Divided about what?'],
  ['Dr Qabbani', '⚠ **About what the eight at night mean.** **Half the room says it is staffing and half says night admissions are sicker on arrival.** **Both are consistent with every figure I have.**'],
  ['Mrs Khoury', '⚠ **Which is a difference of ground and not of claim, and the two need completely different treatment.** **A difference of claim is settled by a measurement.** **A difference of ground is settled by naming what would distinguish the two grounds** — **and if nothing would, by saying so.**'],
  ['Mr Shihabi', 'And in that case something would.'],
  ['Dr Qabbani', '⚠ **Two lines on the admissions sheet, for eighteen months.** **A staffing explanation predicts the eight cluster where cover is thinnest.** **A sickness explanation predicts they do not.** **One figure separates them and nobody in the room could have reasoned their way to it.**'],
  ['Mr Tayara', 'Why did the forty minutes not get there?'],
  ['Mrs Oueidat', '⚠ **Because everybody was arguing for a ground and nobody was describing one.** **A ground argued for sounds like a position.** **A ground described produces a prediction, and a prediction can be checked.**'],
  ['Mrs Ajouz', 'That is a different kind of meeting.'],
  ['Mrs Khoury', '⚠ **It is a different question asked at the same meeting.** _What would we see if you were right?_ **Four seconds to ask and it ends most of these.**'],
  ['Mrs Rizk', 'And the ones it does not end?'],
  ['Dr Qabbani', '⚠ **Where both grounds predict the same thing.** **Then there is nothing to measure and the disagreement is about which explanation is preferred**, which is temperament and should be named as temperament rather than argued for another forty minutes.'],
  ['Jad', 'Is that not giving up?'],
  ['Mrs Oueidat', '⚠ **It is the opposite.** **A disagreement named as unresolvable stops costing anybody anything**, and the two sides can then act on the half they agree about, which in Dr Qabbani\'s committee was the whole of the arithmetic.'],
  ['Mr Zahreddine', 'Mine are all of this kind. The measurements are never disputed.'],
  ['Mrs Khoury', '⚠ **Then your week is spent on grounds, and everything any of us was ever trained to do is about claims.** **Support the claim with evidence, and the evidence settles it.** **Nobody is taught what to do when both sides agree the evidence on the first page.**'],
  ['Mrs Tarabishi', 'Which is my four authors. Three of the non-disputes were grounds and I had labelled them all _however_.'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is that we agreed about every number for forty minutes.** **I had written the paper to make the numbers unarguable and succeeded**, and nothing in it told the room what to do with a ground.'],
]));
out.push(sp());
out.push(box('Language box – claim and ground', [
  '**The two kinds.** ⚠ **A difference of claim is about what is the case and is settled by a measurement.** **A difference of ground is about what it shows and is settled by naming what would distinguish the two explanations** — **and if nothing would, by saying so.**',
  '**The question that ends most of them.** ⚠ _What would we see if you were right?_ **Four seconds to ask.** **A ground argued for sounds like a position; a ground described produces a prediction, and a prediction can be checked.**',
  '**The shape of the sentence that holds both.** ⚠ _Both hold that the fall is real; they differ about what produced it._ **The shared half once, the differing half once, and no _however_** — **and the reader has the whole of the disagreement in twelve words.**',
  '**When nothing distinguishes the grounds.** ⚠ **Say so, and name the disagreement as a preference between explanations.** **It stops costing anybody anything** — **and both sides can then act on the half they agree about, which is usually all the arithmetic.**',
  '**And why this matters more at C1 than anywhere else in the series.** ⚠ **Almost every disagreement in a professional life is of this kind.** **The measurements are not disputed.** **Seven or eight of the ten in this room said their two sides agree about what happened**, and a writer who can tell a ground from a claim is settling most of what crosses their desk.',
  '**The commonest error, and it is a drafting error.** ⚠ **Reporting a difference of ground as though it were a difference of claim.** _They disagree about the Saturday figures_ **where the truth is** _they agree about the figures and differ about what caused them_. **The first sends a reader to check the arithmetic and the arithmetic is not in dispute.**',
  '**Pronunciation.** 🔊 **Track 8.4** **Say the shared half once and flatly, and give the stress to the differing half.** ⚠ _Both hold that the fall is **real**; they differ about what **produced** it._ **A speaker who stresses the shared half is heard as arguing with it**, and the room then spends ten minutes on the thing everybody agrees about.',
  '**Practise:** Say whether it is claim or ground, and what would distinguish them. **1** two figures  **2** two explanations of one figure  **3** two explanations that predict the same thing  **4** a difference of ground reported as one of claim  **5** one where the ground is settled by a document somebody holds',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the disagreement from the card. B says **claim or ground**, and for a ground gives **what would distinguish the two.** ⚠ **Two rows on each card are grounds that predict the same thing.** **B must say so rather than inventing a test.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Both agree eight of the ten came at night; one says staffing and one says sicker arrivals._', '_Both agree nine of eleven came from paper; one says the flag and one says old sheets._'],
  ['_⚠ Both agree the review is fair; one says it is thorough and one says it is careful._', '_⚠ Both agree the minute was ambiguous; one says carelessness and one says haste._'],
  ['_One says the fall is eight conversations and one says it is three._', '_One says four certificates are missing and one says three._'],
  ['_⚠ Both agree the queries fell; one says the sentence and one says the clerks._', '_⚠ Both agree applications rose; one says the notice and one says January._'],
  ['_Both agree the bolts are M12; one says a part delivery and one says an amendment._', '_Both agree the box is missing; one says the move and one says the signing-out._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** claim or ground, and the test. ⚠ **Rows 2 on both cards are grounds that predict nothing different** — _thorough_ against _careful_, _carelessness_ against _haste_ — **and the honest answer is that these are preferences between words and cost nothing to leave unresolved.** **Rows 4 are the ones with a real test**: the four districts that never carried the sentence, and the three months before January. **Rows 3 are differences of claim and are settled by counting.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the disagreement you brought** and write **the shared half and the differing half** in one sentence each. ⚠ **Then ask the four-second question of each ground: what would we see if you were right?** **Write the two predictions.** **If they are the same prediction, write that down** — **it is the finding and it is not a failure of the exercise.**'));
out.push(p('**b**  Swap. Your partner reads **only your two predictions** and says **which measurement would separate them.** ⚠ **In about half of cases they name something nobody has thought of.** **In the other half they say _nothing would_, and the two of you have just saved somebody a meeting.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani\'s committee spent forty minutes and at the end of them everybody agreed about every number in the paper — thirty-one, ten, eight at night, two on antibiotics. Nobody disputed a figure and the room was divided. Mrs Tarabishi asked divided about what, and about what the eight at night mean: half the room says it is staffing and half says night admissions are sicker on arrival, and both are consistent with every figure he has. Mrs Khoury said that is a difference of ground and not of claim, and the two need completely different treatment — a difference of claim is settled by a measurement, and a difference of ground is settled by naming what would distinguish the two grounds, and if nothing would, by saying so. Mr Shihabi said and in that case something would, and two lines on the admissions sheet for eighteen months: a staffing explanation predicts the eight cluster where cover is thinnest and a sickness explanation predicts they do not, and one figure separates them and nobody in the room could have reasoned their way to it. Mr Tayara asked why the forty minutes did not get there, and Mrs Oueidat said because everybody was arguing for a ground and nobody was describing one — a ground argued for sounds like a position, and a ground described produces a prediction, and a prediction can be checked. Mrs Ajouz said that is a different kind of meeting, and Mrs Khoury said it is a different question asked at the same meeting: what would we see if you were right? Four seconds to ask, and it ends most of these. Mrs Rizk asked about the ones it does not end, and where both grounds predict the same thing there is nothing to measure and the disagreement is about which explanation is preferred, which is temperament and should be named as temperament rather than argued for another forty minutes. Mr Attar asked whether that is not giving up, and Mrs Oueidat said it is the opposite: a disagreement named as unresolvable stops costing anybody anything, and the two sides can then act on the half they agree about. Mr Zahreddine said his are all of this kind and the measurements are never disputed, and Mrs Khoury said that then his week is spent on grounds while everything any of them was ever trained to do is about claims: support the claim with evidence and the evidence settles it, and nobody is taught what to do when both sides agree the evidence on the first page. Mrs Tarabishi said that is her four authors, and three of the non-disputes were grounds that she had labelled however. And Dr Qabbani said the thing he will take away is that they agreed about every number for forty minutes: he had written the paper to make the numbers unarguable and succeeded, and nothing in it told the room what to do with a ground._'));
out.push(p('**Listener task:** write your two predictions, and whether they differ.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Dr Qabbani circulated after the committee. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _to the clinical governance committee_ · _the eight: what we agreed and what we did not_ · **22 March**',
  '**The committee agreed about every figure in the paper and divided about one explanation.** **This note separates the two so that the second does not spend another forty minutes.**',
  '**What is not in dispute.** **Forty-one culture-negative admissions in three years; thirty-one with a second sample and ten without; eight of the ten presenting between eight in the evening and eight in the morning; two of the eight arriving with antibiotics already running.** **No member questioned any of these and the arithmetic is on one sheet at the back.**',
  '**What divided the room.** **Half held that the eight are a staffing effect: at night there is one registrar and a second sample is four minutes she has not got.** **Half held that night admissions are sicker on arrival and that a second sample is more often clinically unavailable rather than skipped.**',
  '**What would distinguish the two, which is the part the meeting did not reach.** ⚠ **A staffing explanation predicts that the omissions cluster on the nights with the thinnest cover.** **A sickness explanation predicts that they do not, and that they track severity at presentation instead.** **The two lines on the admissions sheet give both of those in about eighteen months, and neither can be had any other way.**',
  '**What the two lines are, so that the committee is not agreeing to a project.** **One column on the admissions sheet for the registrar on duty, and one for the hour at which the decision about a second sample was taken.** **Neither is a new form and neither adds a signature.** **The clerk who files the sheet enters both from what is already written at the top of it**, and the eighteen months is the time it takes to accumulate enough nights rather than the time it takes to begin.',
  '**What we lose by not doing it.** ⚠ **Nothing for eighteen months, and then this discussion again with the same two explanations and three further years of admissions behind it.** **The committee has had the question twice, in 2021 and in 2023, and resolved on both occasions to keep it under review.** **Keeping a question under review is the form of words we use for collecting no evidence about it.**',
  '**What both explanations already agree about, and what follows from it.** **Both hold that the eight are not a failure of attention.** **On either view the registrar did the right thing with what she had**, and the committee can therefore agree the two lines without agreeing about the eight.',
  '**What I am not asking the committee to decide.** **I am not asking which explanation is right.** ⚠ **It cannot be decided from anything we hold, and a vote on it would produce a minute recording a position nobody can support.**',
  '**And one thing about the paper rather than the question.** **I wrote it to make the figures unarguable and it worked: nobody questioned one of them.** **Nothing in it told the committee what to do with an explanation**, and the forty minutes were spent on the only thing the paper had left open.',
]));
out.push(item('1', 'What does the committee agree about, and what divided it?'));
out.push(item('2', 'What would distinguish the two explanations, and how long would it take?'));
out.push(item('3', 'What does he refuse to ask the committee to decide, and why?'));
out.push(writers([
  'A note that separates claim from ground: **say at the top that the figures were agreed and one explanation was not** → **list what is not in dispute** → **the two grounds, one sentence each** → **what would distinguish them, with a prediction for each** → **what both grounds already agree about** → **what you are not asking anybody to decide** → **and what the paper left open.**',
  '⚠ **List the agreed figures before the disagreement, and say nobody questioned them.** **A reader arriving at a divided committee assumes the division is about the arithmetic**, and four lines of agreed figures stop that in the first paragraph.',
  '**Give each ground a prediction and not a position.** ⚠ _A staffing explanation predicts that the omissions cluster on the nights with the thinnest cover._ **A ground argued for sounds like a side; a ground described produces something that can be looked for** — **and the look costs eighteen months and nothing else.**',
  '**Say what both explanations already agree about.** ⚠ _Both hold that the eight are not a failure of attention._ **This is the sentence that lets a divided committee act**, because it is the half of the question that is settled and nobody had said it out loud.',
  '⚠ And **refuse the vote.** _A vote on it would produce a minute recording a position nobody can support._ **A committee asked to decide an undecidable question will decide it**, and the minute then has the authority of a decision and the content of a preference.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note separating claim from ground (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ agreed about ______________ and divided about ______________.** **This note separates the two so that ______________.**   **What is not in dispute.** **______________; ______________; ______________.** **No ______________ questioned any of these.**   **What divided ______________.** **Half held that ______________.** **Half held that ______________.**   **What would distinguish the two.** ⚠ **______________ predicts that ______________. ______________ predicts that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The agreed figures listed before the disagreement',
  'Each ground given a prediction and not a position',
  'What both grounds already agree about',
  'The undecidable question refused, with the reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their two predictions**, and the room says what it would have to count.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the agreed figures, the two grounds, the predictions, the shared half, the refused vote, and what your own document left open.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the agreed figures first, a prediction for each ground, the shared half named, and the vote refused.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads the sentence that holds both positions, once with the stress on the shared half and once on the differing half.** ⚠ **The room says what each version is about.** **The first is heard as an argument with the shared half** — which nobody is having — and the second is the sentence. Then the sentence the cycle ends on, which is Dr Qabbani\'s: **I wrote the paper to make the figures unarguable and it worked.**'));
out.push(hw('Take **a disagreement you are in** and write **the agreed half, the two grounds, and a prediction for each.** ⚠ **Then take the two predictions to one of the two people and ask which they would expect.** **Do not argue.** **In this class the conversation has lasted under four minutes every time and has ended about half of the disagreements.** **Bring the predictions and what they said.** **8.3 attributes a position across a paragraph without a reporting verb in every sentence.**'));

// ===================== 8.3 =====================
out.push(pb());
out.push(h2('8.3  Attribution without a verb in every sentence'));
out.push(p('**Function:** attributing a position across a paragraph without a reporting verb in every sentence   ·   **Grammar:** _on this view_ · _the same objection_ · one verb and three pronouns   ·   **Pronunciation:** the attributed sentence said in the other voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **read out four consecutive sentences of your own in which you report somebody else\'s position.** ⚠ **Count the reporting verbs aloud.** Your teacher writes the counts on the board. **In most classes the count is three or four out of four**, and the room will think that is careful until it hears the paragraph read back.'));
out.push(board('Khalil argues… Khalil states… Khalil maintains… Khalil concludes…', 'Four verbs, one position, and a reader counting.'));
out.push(p('**b**  Which sentence carries attribution without a reporting verb? **1** _Khalil argues that selection explains the rate._  **2** _According to Khalil, selection explains the rate._  **3** _On this view, the refusal is itself the selection._  **4** _Khalil states that the test is circular._  **5** _The same objection applies to the 2019 figures._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the four verbs do?   **A** make the attribution clear   **B** **make the reader count them instead of reading the position** — one verb opens the attribution and the paragraph keeps it until something closes it   **C** show that the writer disagrees'));
out.push(p('**b**  Listen again. **1** What did the court say about Mrs Oueidat\'s four-verb paragraph?   **2** What does Mrs Khoury say closes an attribution?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.5  One verb and three pronouns', [
  ['Ms Huda', 'Mrs Oueidat — the paragraph with four verbs in it.'],
  ['Mrs Oueidat', '⚠ **A judge stopped me and asked whose opinion the third sentence was.** **All four sentences were the expert\'s and I had written _states_, _maintains_, _goes on to say_ and _concludes_.**'],
  ['Mrs Tarabishi', 'Then it was perfectly clear.'],
  ['Mrs Oueidat', '⚠ **It was clear and it was not readable, which are different things.** **Four verbs in four sentences tell a reader that something might change between them**, so they read each sentence asking whose it is instead of reading what it says.'],
  ['Mrs Khoury', '⚠ **An attribution is opened once and stays open until something closes it.** _Khalil holds that selection explains the rate. On this view, the refusal is itself the selection, and the comparison Darwish offers is circular._ **One verb, and the position runs to the end of the paragraph.**'],
  ['Mr Shihabi', 'What closes it?'],
  ['Mrs Khoury', '⚠ **A paragraph break, a contrasting attribution, or your own voice arriving with a marker.** _On the evidence as published, neither of these can be tested._ **_On the evidence as published_ is yours and the reader knows it.**'],
  ['Dr Qabbani', 'And if nothing closes it?'],
  ['Mrs Oueidat', '⚠ **Then your own next paragraph is read as his**, which is the one real danger of the technique and the reason the markers have to be learnt as a set. _On this view_ · _the same objection_ · _for him_ · _on that account_ **keep it open.** _In fact_ · _on the evidence_ · _what neither says_ **close it.**'],
  ['Mr Tayara', 'That is a small vocabulary for a large job.'],
  ['Mrs Khoury', '⚠ **It is about eight phrases and it is the whole of academic and legal prose.** **A reader of either has been trained on them since university and will follow them without noticing** — **which is why nobody teaches them and why half this room has been writing four verbs a paragraph for years.**'],
  ['Mrs Ajouz', 'Is it safe in a registration file?'],
  ['Mrs Oueidat', '⚠ **Safer than the four verbs, and the test is the same: read the paragraph and ask whose the last sentence is.** **If an officer can answer in under a second, it works.**'],
  ['Jad', 'And in a forum answer, where people quote half of you?'],
  ['Mrs Khoury', '⚠ **There you close it early and often**, because anything quoted out of an open attribution arrives as yours. **Which is 5.7 and 6.5 again, and the class should be tired of hearing it by now.**'],
  ['Mr Zahreddine', 'My opinions carry their limits inside the findings. Does that close it?'],
  ['Mrs Oueidat', '⚠ **It closes it every second sentence, which is why yours are the easiest documents in the file to quote safely.** **An engineer who puts his limits in a closing paragraph has written three pages that can all be lifted without them** — **and I have had to quote the two of you differently for that reason and say so.**'],
  ['Mrs Rizk', 'And a funder who reads only the first paragraph of each section?'],
  ['Mrs Khoury', '⚠ **Then every section opens with its own verb.** **An attribution does not survive a heading.** **A reader who comes back after one has forgotten whose the position was** — **and three words at the top of the section cost less than the query that follows.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the judge\'s question.** **He did not ask what the sentence meant.** **He asked whose it was, and I had answered that question four times and still not told him.**'],
]));
out.push(sp());
out.push(box('Language box – attribution across a paragraph', [
  '**The rule.** ⚠ **Open the attribution once and let it run.** _Khalil holds that selection explains the rate. On this view, the refusal is itself the selection, and the comparison Darwish offers is circular._ **One verb, three sentences, and no doubt anywhere about whose they are.**',
  '**Why four verbs is worse than one.** ⚠ **Four verbs in four sentences tell a reader that something might change between them**, so they read each sentence asking whose it is instead of reading what it says. **It is clear and it is not readable, and those are different things.**',
  '**The markers that keep it open.** ⚠ _On this view_ · _on that account_ · _for him_ · _the same objection_ · _as he has it_. **About five, and a reader of academic or legal prose has been trained on them since university and follows them without noticing.**',
  '**The markers that close it.** ⚠ _In fact_ · _on the evidence as published_ · _what neither of them says_ · _the difficulty with this_. **Your own voice arriving with a flag on it** — **and an attribution that is never closed makes your next paragraph his.**',
  '**The test, and it takes a second.** ⚠ **Read the paragraph and ask whose the last sentence is.** **If a reader can answer in under a second, the attribution works.** **If they have to go back to the first sentence, it does not** — **and the repair is a closing marker and not another verb.**',
  '**Where to close early.** ⚠ **Anywhere you will be quoted in pieces.** **A sentence lifted out of an open attribution arrives as yours**, which is 5.7\'s summariser and 6.5\'s quoter in a third costume — **and in a forum answer, a wire story or a minute, the attribution should close at the end of every second sentence.**',
  '**Pronunciation.** 🔊 **Track 8.6** **Read an open attribution aloud and keep the other person\'s voice for all three sentences.** ⚠ **The giveaway is a return to your own pitch on the second sentence**, which tells a listener the attribution has closed when it has not. **Hold the voice until the closing marker, and then change it audibly.**',
  '**Practise:** Attribute across three sentences with one verb. **1** opening with _holds that_  **2** keeping it open with _on this view_  **3** keeping it open with _the same objection_  **4** closing with your own voice marked  **5** one where it must close after the first sentence — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four-verb paragraph from the card. B rewrites it aloud with **one verb and the markers**, and says **where the attribution closes.** ⚠ **Two rows on each card must close after the first sentence.** **B must say why.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Khalil argues… Khalil states… Khalil maintains… Khalil concludes…_', '_Darwish claims… Darwish adds… Darwish observes… Darwish ends by saying…_'],
  ['_⚠ Four sentences, the last of which is the writer\'s own objection._', '_⚠ Four sentences, the third of which quotes a figure the writer disputes._'],
  ['_Three sentences of one position, then a paragraph break._', '_Two sentences of one position, then a contrasting attribution._'],
  ['_⚠ A paragraph that will appear in a minute, two sentences at a time._', '_⚠ A forum answer that will be quoted in pieces._'],
  ['_A literature review paragraph summarising one author\'s argument._', '_An opinion summarising what a standard requires._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the rewritten paragraph, and where the attribution closes. ⚠ **Rows 2 and 4 on both cards must close after the first sentence** — **rows 2 because the writer\'s own voice arrives immediately, and rows 4 because the paragraph will be taken in pieces.** **Collect the closing markers the room produces** and check each one is a flag and not a verb: **_in fact_ closes and _he then says_ does not, because another verb reopens the same question.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your four sentences from Stage 1** and rewrite them with **one verb and the markers.** ⚠ **Then count the words saved.** **It is usually between twelve and twenty in four sentences**, and the saving is not the point: read both versions and notice which one you can follow at speed.'));
out.push(p('**b**  Swap. Your partner reads your rewritten paragraph and says **whose the last sentence is**, timed. ⚠ **Under a second and it works.** **If they go back to the first sentence, the attribution needed closing and the repair is a marker** — **and the commonest wrong repair, which they will suggest, is another reporting verb.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat was stopped by a judge who asked whose opinion the third sentence was. All four sentences were the expert\'s and she had written states, maintains, goes on to say and concludes. Mrs Tarabishi said then it was perfectly clear, and it was clear and it was not readable, which are different things: four verbs in four sentences tell a reader that something might change between them, so they read each sentence asking whose it is instead of reading what it says. Mrs Khoury said an attribution is opened once and stays open until something closes it — Khalil holds that selection explains the rate; on this view, the refusal is itself the selection, and the comparison Darwish offers is circular. One verb, and the position runs to the end of the paragraph. Mr Shihabi asked what closes it, and a paragraph break, a contrasting attribution, or your own voice arriving with a marker: on the evidence as published, neither of these can be tested, where on the evidence as published is yours and the reader knows it. Dr Qabbani asked what happens if nothing closes it, and Mrs Oueidat said then your own next paragraph is read as his, which is the one real danger of the technique and the reason the markers have to be learnt as a set: on this view, the same objection, for him and on that account keep it open, and in fact, on the evidence and what neither says close it. Mr Tayara said that is a small vocabulary for a large job, and Mrs Khoury said it is about eight phrases and it is the whole of academic and legal prose — a reader of either has been trained on them since university and will follow them without noticing, which is why nobody teaches them and why half the room has been writing four verbs a paragraph for years. Mrs Ajouz asked whether it is safe in a registration file, and safer than the four verbs, and the test is the same: read the paragraph and ask whose the last sentence is, and if an officer can answer in under a second it works. Mr Attar asked about a forum answer where people quote half of you, and there you close it early and often, because anything quoted out of an open attribution arrives as yours. Mr Zahreddine asked whether an opinion that carries its limits inside the findings closes the attribution, and it closes it every second sentence, which is why his are the easiest documents in the file to quote safely: an engineer who puts his limits in a closing paragraph has written three pages that can all be lifted without them, and Mrs Oueidat has had to quote the two of them differently for that reason and say so. Mrs Rizk asked about a funder who reads only the first paragraph of each section, and then every section opens with its own verb, because an attribution does not survive a heading and a reader who comes back after one has forgotten whose the position was. And Mrs Oueidat said the thing she will take away is the judge\'s question: he did not ask what the sentence meant, he asked whose it was, and she had answered that question four times and still not told him._'));
out.push(p('**Listener task:** write your own rewritten paragraph\'s closing marker.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section Mrs Oueidat now writes into every expert summary. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _summary of expert evidence for the court_ · _the two engineers on the east elevation_ · **24 March**',
  '**Mr Zahreddine holds that the frame does not meet the specification it was built to.** **On his account the measurement is of fifty-six positions on two dates, fifty-five of them reading between 12.0 and 12.2 against a specified M16, and the single reading of 15.9 is the only exception on the frame.** **For him the question of failure is separate and open: he has not calculated the frame on the installed sizes and says so.**',
  '**Mr Barakat holds that nothing follows for the frame\'s safety from any of this.** **On that account the specification is a procurement document and not a design limit, and the design load for a classroom floor at these spacings is below the strength M12 would give.** **The same objection applies, as he has it, to the single M16: one bolt of a different grade is a supply fact and not a structural one.**',
  '**On the evidence as it stands, the two are not in dispute about anything that has been measured.** ⚠ **Neither has calculated the frame.** **Both accept the fifty-six readings and both accept the two dates.**',
  '**What neither of them says, and the court may wish to know, is what the calculation would cost.** **Mr Zahreddine puts it at about a day and a half.** **Mr Barakat has not been asked.**',
  '**Two matters of translation which the court should have from me and not from either expert.** **Mr Zahreddine uses one word throughout for what the drawings call a specification and the contract calls a schedule, and he means the drawings.** **Mr Barakat writes in English and uses _nominal_ in the sense of _as designated_ and not in the sense of _in name only_**, and those two readings point in opposite directions on his central sentence. ⚠ **I have rendered each word as its writer uses it and I flag both here**, because a reader meeting either of them cold would take the other sense.',
  '**What I am not in a position to say.** **Whether fifty-five readings between 12.0 and 12.2 are consistent with a bolt of one grade rather than another is a question for an engineer.** ⚠ **Both experts answer it the same way, and I record that they agree without recording that it is so.**',
  '**The disagreement that remains is about what a specification is for.** **For Mr Zahreddine it records what was agreed and departure from it is a finding whatever the consequence.** **On Mr Barakat\'s account it is one of several documents and is superseded by a calculation.** ⚠ **Nothing that can be measured distinguishes these two positions**, and I record them as positions.',
  '**One matter of form rather than of evidence.** **Mr Zahreddine\'s opinion carries its limits inside its findings and Mr Barakat\'s carries them in a closing paragraph.** **I have had to quote them differently for that reason** and I say so because the difference will be visible in this summary and is not a difference of care.',
  '**M. Oueidat** · _court-appointed translator and interpreter_',
]));
out.push(item('1', 'How many reporting verbs open the two positions, and what keeps each one open?'));
out.push(item('2', 'Where does her own voice arrive, and what marks it?'));
out.push(item('3', 'What does she say about the two experts\' limits, and why does she mention it?'));
out.push(writers([
  'A summary that attributes without counting verbs: **one verb to open each position** → **_on his account_, _for him_, _the same objection_ to keep it running** → **your own voice arriving with a flag** → **what neither of them says** → **the part that nothing can distinguish, recorded as positions** → **and anything about the form of the documents that will show in your summary.**',
  '⚠ **One verb a position, and never a second.** _Mr Zahreddine holds…_ · _Mr Barakat holds…_ **Everything after each is carried by markers** — **and a reader can answer _whose is this sentence_ in under a second at any point.**',
  '**Flag your own voice the moment it arrives.** ⚠ _On the evidence as it stands…_ **Three words, and the paragraph after them is unmistakably yours.** **An attribution that is never closed makes your next paragraph the expert\'s**, and in a court summary that is not a stylistic fault.',
  '**Record an undistinguishable disagreement as positions.** ⚠ _Nothing that can be measured distinguishes these two positions, and I record them as positions._ **Which is 8.2 arriving inside a document**, and it tells a court what it can and cannot resolve.',
  '⚠ And **say when the two documents differ in form rather than in care.** _One carries its limits inside its findings and the other in a closing paragraph._ **A summariser who does not say this produces a comparison of two writers\' habits and calls it a comparison of two opinions.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a summary of two positions (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **______________ holds that ______________.** **On his account ______________.** **For him ______________.**   **______________ holds that ______________.** **On that account ______________.** **The same objection applies, as he has it, to ______________.**   **On the evidence as it stands, ______________.** ⚠ **Neither ______________.** **Both accept ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One reporting verb a position and no second',
  'Markers carrying the attribution across the sentences',
  'Your own voice flagged where it arrives',
  'What neither of them says',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their last attributed sentence**, and the room says whose it is, timed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole summary (260 words or more), to the shape in the writer\'s box: the two positions with one verb each, the markers, your own voice flagged, what neither says, the undistinguishable part, and the difference of form.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one verb a position, markers carrying the rest, your own voice flagged, and the undistinguishable part recorded as positions.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an open attribution of three sentences, holding the other voice throughout.** ⚠ **The room says where the voice came back.** **It comes back on the second sentence in most first attempts**, which tells a listener the attribution has closed when it has not — and the written equivalent is a reader going back to the first sentence. Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **he asked whose it was, and I had answered that question four times.**'));
out.push(hw('Take **a page of your own in which you report somebody else\'s position** and count **the reporting verbs**. ⚠ **Rewrite it with one verb a position and the markers**, and then apply the test to every paragraph: **whose is the last sentence, answered in under a second.** **Bring both versions and the count.** **8.4 says where a writer\'s reason, rather than their conclusion, differs from another\'s**, which is the comparison Part 6 asks for and the one nobody practises.'));

// ===================== 8.4 =====================
out.push(pb());
out.push(h2('8.4  Where the reason differs, not the conclusion'));
out.push(p('**Function:** saying where a writer\'s reason, rather than their conclusion, differs from another\'s   ·   **Grammar:** _on different grounds_ · _arrives there by_ · the shared conclusion stated once   ·   **Pronunciation:** the agreement said once and the reasons twice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **somebody who agrees with your conclusion for a reason you do not hold.** ⚠ **One sentence for the conclusion and one for their reason.** Your teacher writes the ten reasons on the board. **In most classes two or three of the ten turn out to be reasons the student would argue with**, and they have been counting that person as an ally for years.'));
out.push(board('Both reviewers rejected the proposal.', 'One for the missing beneficiary count, one for the staffing share.'));
out.push(p('**b**  Which two agree about the conclusion and differ about the reason? **1** _One says return the file and one says accept it._  **2** _Both say return it; one for the uncheckable sentence and one for the missing count._  **3** _Both say the frame is M12, and both measured it._  **4** _One says the rate is high and one says it is low._  **5** _Both would refuse the proposal; one because it names no beneficiary and one because it costs too much._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a shared conclusion does in a minute?   **A** records agreement   **B** **hides two different objections behind one sentence** — so the person who has to act on it repairs one of them and is refused again   **C** saves space'));
out.push(p('**b**  Listen again. **1** Why was the proposal in Mrs Rizk\'s office rejected twice by the same two people?   **2** What does Mrs Khoury say half the marks in Part 6 are for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.7  Rejected twice by the same two people', [
  ['Ms Huda', 'Mrs Rizk — the proposal that was rejected twice.'],
  ['Mrs Rizk', '⚠ **Two reviewers, both of whom said no, and I minuted it as _the panel was not persuaded_.** **The applicant read that, repaired one thing and sent it back.** **It was refused again by the same two people.**'],
  ['Mrs Tarabishi', 'Because the second objection was still in it.'],
  ['Mrs Rizk', '⚠ **Because the second objection had never been written down.** **One reviewer refused it for having no beneficiary count and the other for a staffing line that is a third of the budget.** **Those are not the same objection and they have different repairs.**'],
  ['Mrs Khoury', '⚠ **And a shared conclusion is the most dangerous sentence in a minute**, because it looks like agreement and it is two documents. **The thing the applicant needed was the part nobody recorded.**'],
  ['Mr Shihabi', 'We do it every day. _Four governments condemned the decision._'],
  ['Mrs Khoury', '⚠ **Four governments condemned it for four reasons and two of them want opposite things done about it.** **A reader who has only the condemnation has been told there is a bloc**, and the correction is nine words and nobody writes them.'],
  ['Mr Tayara', 'How long does the correction take?'],
  ['Mrs Rizk', '⚠ **Eleven words, and I write them in now.** _Not persuaded: one on the beneficiary count, one on the staffing share._ **The applicant then has two repairs and a choice about which to make first.**'],
  ['Dr Qabbani', 'That is my committee the other way round.'],
  ['Mrs Oueidat', '⚠ **It is 8.2 in a mirror.** **There they agreed about the finding and differed about the ground.** **Here they agree about the conclusion and differ about the reason** — **and the second one is harder to see, because the conclusion is the part that gets written down.**'],
  ['Mrs Ajouz', 'Does Part 6 ask for this?'],
  ['Mrs Khoury', '⚠ **It asks for it more than anything else.** **Two of the four texts reach one view by different routes and the question asks whether those writers share an opinion** — **and they share the conclusion and not the ground, and the paper wants you to have read the ground.**'],
  ['Jad', 'How many of the marks?'],
  ['Mrs Khoury', '⚠ **About half, and it is the half candidates lose.** **They match the conclusions, because conclusions are what a skim gives you**, and two writers who sound alike in the last sentence can differ in every sentence before it.'],
  ['Mrs Tarabishi', 'My review has three places where I have written _both authors find no effect_.'],
  ['Mrs Oueidat', '⚠ **And one of them found no effect in ninety cases and the other in four thousand.** **_Both find no effect_ is true and it is the one sentence a reader cannot use**, because the two findings are not worth the same and nothing in yours says so.'],
  ['Mr Zahreddine', 'Mine are signed by one person, so it does not arise.'],
  ['Mrs Oueidat', '⚠ **It arises the moment a tribunal holds two of them.** **Both engineers may say the frame is adequate, one from the calculation and one from twenty years of frames like it** — **and only one of those two survives a question from the other side.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the eleven words.** **That applicant lost four months because my minute recorded what the two reviewers had in common**, which was the only part of their reading that was of no use to anybody.'],
]));
out.push(sp());
out.push(box('Language box – the same conclusion, two reasons', [
  '**The rule.** ⚠ **State the shared conclusion once and then separate the reasons.** _Both reviewers would refuse it: one on the beneficiary count, one on the staffing share._ **Eleven words, and the person who has to act now knows there are two repairs.**',
  '**Why the shared conclusion is the dangerous part.** ⚠ **It is the part that gets written down, because it is the part everybody said.** **A minute that records only what two readers had in common has recorded the only half of their reading that nobody can act on.**',
  '**The phrases that do it.** ⚠ _on different grounds_ · _one on X, one on Y_ · _arrives there by_ · _reaches the same view from_ · _for reasons that do not sit together_. **And the reason they are worth learning is that each of them forces you to supply two things where _both_ asks for none.**',
  '**The warning the phrases carry.** ⚠ **Two reasons for one conclusion may be incompatible.** **A proposal refused for having no count and refused for costing too much cannot be repaired by one change** — **and in about a third of cases one repair makes the other objection worse.**',
  '**And the examination.** ⚠ **Reading Part 6 asks which writer shares another\'s opinion.** **Two of the four normally reach one view by different routes**, and a candidate who matches conclusions will mark them as sharing. **About half the marks are on the ground and that is the half the paper is testing.**',
  '**The commonest error, and it is in everybody\'s writing.** ⚠ _Both authors find no effect._ **One found no effect in ninety cases and the other in four thousand, and the sentence is true and unusable.** **Where the two reasons are not worth the same, say which is which** — **the sentence costs six more words.**',
  '**Pronunciation.** 🔊 **Track 8.8** **Say the shared conclusion once and flatly, and give both reasons their own stress.** ⚠ _Both would **refuse** it — one on the **count**, one on the **staffing**._ **A speaker who stresses _both_ is heard as reporting agreement**, and the second reason then arrives as an afterthought nobody acts on.',
  '**Practise:** State a shared conclusion once and separate the reasons. **1** two reviewers  **2** four governments  **3** two authors with samples of different sizes  **4** two engineers, one calculating and one remembering  **5** one where the two repairs are incompatible — and say which to make first',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the shared conclusion from the card. B says it again **with the two reasons separated**, and then says **whether the two repairs sit together.** ⚠ **Two rows on each card have repairs that do not.** **B must say which repair to make first and why.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Both reviewers were not persuaded: no beneficiary count; staffing a third of the budget._', '_Both readers returned the file: an uncheckable sentence; a missing date._'],
  ['_⚠ Both would shorten the report: one wants the annexes out; one wants the method in full._', '_⚠ Both would delay the pour: one for the service log; one to re-measure the frame._'],
  ['_Both authors find no effect: in ninety cases; in four thousand._', '_Both inspectors passed the batch: by certificate; by measurement._'],
  ['_⚠ Both object to the sentence: one says it is unsupported; one says it is obvious._', '_⚠ Both want the figure out: one because it is wrong; one because it will be quoted._'],
  ['_Both governments condemned it: one wants it reversed; one wants it enforced properly._', '_Both committees approved the rota: one on cover; one on cost._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two reasons, and whether the repairs sit together. ⚠ **Rows 2 on both cards are incompatible** — **you cannot cut the annexes and print the method in full** — **and the answer is to make the repair the senior reader asked for and say in the covering note that the other objection stands.** **Rows 4 are the cruel ones: _unsupported_ is repaired by evidence and _obvious_ by deletion**, and doing either makes the other objection worse.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the person you named in Stage 1** and write **the shared conclusion once and the two reasons separately.** ⚠ **Then ask whether you would still agree with them if their reason were the only reason on the table.** **Write yes or no.** **In this class the answer has been no about a third of the time**, and that third is where a shared conclusion has been doing damage quietly.'));
out.push(p('**b**  Swap. Your partner reads **only the two reasons** and says **what one repair would do to the other objection.** ⚠ **In about a third of cases it makes it worse.** **Those are the pairs where somebody has to be told which objection is the one being answered**, and the telling is a sentence in a covering note.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk had two reviewers, both of whom said no, and she minuted it as the panel was not persuaded. The applicant read that, repaired one thing and sent it back, and it was refused again by the same two people. Mrs Tarabishi said that was because the second objection was still in it, and because the second objection had never been written down: one reviewer refused it for having no beneficiary count and the other for a staffing line that is a third of the budget, and those are not the same objection and have different repairs. Mrs Khoury said a shared conclusion is the most dangerous sentence in a minute, because it looks like agreement and it is two documents, and the thing the applicant needed was the part nobody recorded. Mr Shihabi said they do it every day — four governments condemned the decision — and Mrs Khoury said four governments condemned it for four reasons and two of them want opposite things done about it, so a reader who has only the condemnation has been told there is a bloc, and the correction is nine words that nobody writes. Mr Tayara asked how long the correction takes, and eleven words, which Mrs Rizk now writes in: not persuaded, one on the beneficiary count, one on the staffing share, and the applicant then has two repairs and a choice about which to make first. Dr Qabbani said that is his committee the other way round, and Mrs Oueidat said it is 8.2 in a mirror — there they agreed about the finding and differed about the ground, and here they agree about the conclusion and differ about the reason, and the second is harder to see because the conclusion is the part that gets written down. Mrs Ajouz asked whether Part 6 asks for this, and it asks for it more than anything else: two of the four texts reach one view by different routes and the question asks whether those writers share an opinion, and they share the conclusion and not the ground. Mr Attar asked how many of the marks, and about half, and it is the half candidates lose, because they match the conclusions and conclusions are what a skim gives you. Mrs Tarabishi said her review has three places where she has written both authors find no effect, and Mrs Oueidat said one of them found no effect in ninety cases and the other in four thousand: both find no effect is true and is the one sentence a reader cannot use. Mr Zahreddine said his are signed by one person so it does not arise, and it arises the moment a tribunal holds two of them, because both engineers may say the frame is adequate, one from the calculation and one from twenty years of frames like it, and only one of those survives a question from the other side. And Mrs Rizk said the thing she will take away is the eleven words: that applicant lost four months because her minute recorded what the two reviewers had in common, which was the only part of their reading that was of no use to anybody._'));
out.push(p('**Listener task:** write the shared conclusion and the two reasons, and whether the repairs sit together.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Mrs Rizk now writes when a panel refuses an application. Answer the questions.'));
out.push(model([
  '**GRANTS PANEL** · _minute of the meeting of 14 March_ · _application 2026/041: mobile vaccination support, three districts_ · **H. Rizk, grants office**',
  '**The panel was not persuaded, and the two members who read the application were not persuaded for the same reason.** **This minute records the conclusion once and the two reasons separately, because the applicant has two repairs to make and not one.**',
  '**What both readers accept.** **That the need is established; that the three districts are correctly identified; that the applicant has run two comparable projects and accounted for both on time.** ⚠ **Neither reader raised a question about any of this and the applicant should not spend a paragraph defending it.**',
  '**The first reason, Dr Shaheen\'s.** **The application gives no count of beneficiaries, in either direction: no figure for the children expected and no figure for those currently reached by the fixed clinics.** **On this reading the proposal cannot be compared with anything, including itself a year later.** **The repair is two numbers and a note of where each comes from.**',
  '**The second reason, Mr Bitar\'s.** **The staffing line is thirty-four per cent of the budget and no post is described.** **On that account the panel is being asked to fund three salaries it cannot identify.** **The repair is a schedule of posts, or a reduction.**',
  '**What neither reason is.** **Neither reader questioned the cost of the vehicle, which is the largest single item in the budget and the one the applicant expected to defend.** ⚠ **Both read the vehicle costing and both accepted it**, and the covering letter the applicant has already drafted answers an objection nobody made. **This is the commonest shape of a second version in this office: three pages on the item the applicant was afraid of and nothing on the two the panel wrote down.**',
  '**Whether the two repairs sit together, which is the part the applicant will need.** ⚠ **They do not sit together comfortably.** **A beneficiary count that rises makes the staffing share easier to defend and the budget larger; a staffing reduction makes the share defensible and the count harder to reach.** **The panel\'s view is that the count comes first**, because the second objection cannot be answered at all until somebody knows how many children are involved.',
  '**What the panel does not say.** **It does not say the application is weak.** ⚠ **Two readers who refuse an application on different grounds have not agreed that it is a poor application; they have agreed that it cannot be funded as drafted**, and those are not the same finding.',
  '**And one note about this office rather than about the application.** **Until this year a refusal of this kind was minuted as _not persuaded_ and nothing else.** **One applicant repaired one of two objections and was refused a second time by the same two readers**, four months after the first refusal — **and the four months were the cost of a sentence eleven words shorter than it should have been.**',
]));
out.push(item('1', 'What do both readers accept, and what follows for the applicant?'));
out.push(item('2', 'Why does the panel say the beneficiary count comes first?'));
out.push(item('3', 'What does the panel refuse to say about the application, and why?'));
out.push(writers([
  'A minute that separates two reasons for one conclusion: **the conclusion once** → **what both readers accept, so that nobody defends it** → **the first reason, named to its reader, with its repair** → **the second reason, named to its reader, with its repair** → **whether the two repairs sit together, and which comes first** → **what the panel does not say** → **and anything about your own office\'s habits that produced the problem.**',
  '⚠ **State the conclusion once and never again.** _The panel was not persuaded, and the two members were not persuaded for the same reason._ **The second clause is the whole of the technique** — **and without it a reader repairs the objection they happen to have understood.**',
  '**Put what is accepted before what is refused.** ⚠ _Neither reader raised a question about any of this and the applicant should not spend a paragraph defending it._ **A refused applicant will defend everything unless told not to**, and the defending is about a fifth of the second version.',
  '**Give each reason a repair, in one sentence.** ⚠ _The repair is two numbers and a note of where each comes from._ **A reason without a repair is a complaint**, and the applicant then guesses — which is how one objection gets answered twice and the other not at all.',
  '⚠ And **say whether the two repairs sit together.** _A staffing reduction makes the share defensible and the count harder to reach._ **Where they do not, name the one that comes first and why.** **This is the paragraph nobody writes and the only one that saves anybody a second refusal.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a minute separating two reasons for one conclusion (120 words or more).'));
out.push(p('**______________** · _minute of _______________ · _______________ · **______________**   **______________ was not ______________, and the two ______________ were not ______________ for the same reason.** **This minute records the conclusion once and the two reasons separately, because ______________.**   **What both ______________ accept.** **That ______________; that ______________; that ______________.** ⚠ **Neither ______________ raised a question about any of this.**   **The first reason, ______________\'s.** **______________.** **The repair is ______________.**   **The second reason, ______________\'s.** **______________.** **The repair is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The shared conclusion stated once, with the second clause',
  'What both readers accept, placed before the refusal',
  'A repair given for each reason, in one sentence',
  'Whether the two repairs sit together, and which comes first',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their two reasons and their two repairs**, and the room says whether one repair damages the other objection.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole minute (260 words or more), to the shape in the writer\'s box: the conclusion once, what is accepted, the two reasons with their repairs, whether the repairs sit together, what you do not say, and the habit of your own office that produced the problem.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the conclusion stated once, what is accepted placed first, a repair for each reason, and the compatibility of the two repairs addressed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a shared conclusion twice: once with the stress on _both_ and once with the stress on each of the two reasons.** ⚠ **The room says, after each reading, how many repairs it heard.** **After the first version the answer is one**, every time, which is the whole finding of the cycle in eight seconds. Then the sentence the cycle ends on, which is Mrs Rizk\'s: **my minute recorded what the two reviewers had in common.**'));
out.push(hw('Take **a decision at your own work that two people reached for different reasons** and write **the conclusion once and the two reasons separately, each with its repair.** ⚠ **Then ask whether the two repairs sit together.** **Bring the minute and your answer.** **8.5 writes the one sentence that holds two writers\' positions in a single place**, which is what a reader with four minutes actually reads.'));

// ===================== 8.5 =====================
out.push(pb());
out.push(h2('8.5  The sentence that holds two positions'));
out.push(p('**Function:** writing the one sentence that holds two writers\' positions in a single place   ·   **Grammar:** _where X reads … Y reads …_ · the shared part once and the two halves parallel   ·   **Pronunciation:** the two halves given equal weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the one sentence of yours that a reader with four minutes actually reads.** ⚠ **Read it aloud and say who the reader is.** Your teacher writes the ten readers on the board. **In most classes six or seven of the ten sentences carry one position and the document carries two**, and nobody has noticed because they wrote the second one four lines later.'));
out.push(board('A says the fall is seasonal. However, B disagrees.', 'Both put the fall at eleven per cent; they differ about twelve months.'));
out.push(p('**b**  Which two hold both positions in one sentence? **1** _Where Haddad reads the fall as seasonal, Mansour reads the same twelve months as the end of a trend._  **2** _Haddad says the fall is seasonal. However, Mansour disagrees._  **3** _Both put the fall at eleven per cent; they differ about whether twelve months is long enough to call it a trend._  **4** _Haddad argues that the fall is seasonal._  **5** _There is disagreement about the fall._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about a disagreement written across two sentences?   **A** it is clearer   **B** **it can be cut in half by anybody** — a desk, a quoter or a reader with four minutes keeps the first sentence, which carries one position   **C** it is too long'));
out.push(p('**b**  Listen again. **1** What did the desk do with Mr Shihabi\'s four paragraphs?   **2** What does Mrs Oueidat say about the length of the two halves?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.9  Thirty-one words and both of them', [
  ['Ms Huda', 'Mr Shihabi — the thirty-one words.'],
  ['Mr Shihabi', '⚠ **I filed four paragraphs on a disagreement and the desk ran the first one.** **Which is what a desk does and I knew it when I filed.** **The first paragraph had one position in it and the second had the other.**'],
  ['Mrs Khoury', '⚠ **So the wire carried half a disagreement under a headline about a disagreement.** **I have made that cut myself, on a newspaper, perhaps two hundred times** — **and the cut is never wrong, because the first paragraph was.**'],
  ['Mrs Tarabishi', 'Then what goes in the first paragraph?'],
  ['Mr Shihabi', '⚠ **Both of them, in one sentence, with the shared part said once.** _The two studies put repayment at about eighty-one per cent and differ about whether the lender\'s selection explains it._ **Thirty-one words when I file it, and it has not been cut since.**'],
  ['Dr Qabbani', 'And _however_?'],
  ['Mrs Khoury', '⚠ **_However_ needs two sentences and a desk keeps one.** **_Where_ and the semicolon hold both halves inside a single sentence** — _where Haddad reads the fall as seasonal, Mansour reads the same twelve months as the end of a trend_ — **and a sentence cannot be half cut.**'],
  ['Mrs Oueidat', 'The court form is the same. One sentence, or it is quoted in halves.'],
  ['Mr Tayara', 'Is that not simply a long sentence?'],
  ['Mr Shihabi', '⚠ **It is about thirty words and it does the work of a hundred.** **The length is not the cost.** **The cost is that the shared part has to be stated once, and most of us state it twice** — **once inside each position, which is where the hundred words come from.**'],
  ['Mrs Ajouz', 'What is the shared part in mine?'],
  ['Mrs Khoury', '⚠ **Whatever both of them accept, and it is usually a number.** **Find it first and write it once, flatly.** **Then the two halves are short and they are parallel** — **and the parallel is what lets a reader see the difference without being told that it is one.**'],
  ['Mrs Rizk', 'Parallel how far?'],
  ['Mrs Oueidat', '⚠ **Same shape, same length, same grammar on both sides.** _one on the beneficiary count, one on the staffing share._ **Six words each.** **A reader meets an asymmetry as a judgement**, and the longer half is read as the one you hold.'],
  ['Jad', 'Even where you hold neither?'],
  ['Mrs Khoury', '⚠ **Especially there.** **Length is the quietest way of taking a side that exists** — **and the only defence is to count the words on the two halves, which takes four seconds and nobody does it.**'],
  ['Mr Zahreddine', 'Mine would be: both accept the readings; they differ about what a specification is for.'],
  ['Mrs Oueidat', '⚠ **Which is the sentence I spent two pages reaching.** **Say it at the top and the two pages become evidence rather than argument** — **and that is the difference between a summary a court can use and one it has to read twice.**'],
  ['Mrs Tarabishi', 'My review has eleven pages before anybody meets that sentence.'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is that the desk was right.** **I had filed four paragraphs each of which was true, and the first of them was a position** — **and a reader with one paragraph is entitled to the disagreement and not to half of it.**'],
]));
out.push(sp());
out.push(box('Language box – one sentence, two positions', [
  '**The rule.** ⚠ **The shared part once, flatly; then the two differing halves, parallel.** _The two studies put repayment at about eighty-one per cent and differ about whether the lender\'s selection explains it._ **Thirty-one words, and it cannot be cut in half.**',
  '**Why two sentences is not an option.** ⚠ **Anybody may keep the first and drop the second: a desk, a quoter, a reader with four minutes.** **A disagreement written across two sentences arrives as whichever position came first** — **and under a headline about a disagreement, which is worse than silence.**',
  '**The structures that hold both.** ⚠ _where X reads … Y reads …_ · _both put … and differ about …_ · _A on the grounds that …, B on the grounds that …_ · **the semicolon**. **Four of them, and each one makes a single sentence out of what you were about to write as two.**',
  '**Say the shared part once.** ⚠ **Most writers state it twice, once inside each position, and that is where a thirty-word sentence becomes a hundred.** **Find what both accept** — **it is usually a number** — **and put it in front, before either name.**',
  '**Make the two halves parallel, and count the words.** ⚠ _one on the beneficiary count, one on the staffing share._ **Same shape, same length, same grammar.** **A reader meets an asymmetry as a judgement and reads the longer half as the one you hold**, which is the quietest way of taking a side there is.',
  '**And where to put the sentence.** ⚠ **First.** **Mrs Oueidat reached hers on the second page and Mrs Tarabishi on the eleventh.** **Put it at the top and everything after it is evidence; leave it to the end and everything before it is argument** — **and a reader who stops early has read the argument and not the finding.**',
  '**Pronunciation.** 🔊 **Track 8.10** **Say the shared part flat and give the two halves equal weight and equal time.** ⚠ _Both put repayment at **eighty-one** per cent and differ about whether **selection** explains it._ **Time the two halves with a watch if you have one** — **the half you hold comes out about a fifth longer and the room hears it every time.**',
  '**Practise:** Hold two positions in one sentence. **1** two studies and a shared figure  **2** _where … , …_  **3** two refusals on different grounds  **4** two engineers and one set of readings  **5** one where you hold one of the two positions — and keep the halves the same length',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two-sentence version from the card. B says it again **as one sentence**, with **the shared part once** and **the halves the same length.** ⚠ **Two rows on each card have no shared part stated anywhere** — **B must supply it or say that it is missing.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Haddad says the fall is seasonal. However, Mansour says it is a trend._', '_Dr Shaheen wants a beneficiary count. Mr Bitar wants the staffing cut._'],
  ['_⚠ One expert says the frame is adequate. The other disagrees._', '_⚠ The first reader returned the file. The second accepted it._'],
  ['_Both put the rate at sixty-one per cent. One calls it high; one calls it low._', '_Both agree the queries fell. One says the sentence; one says the clerks._'],
  ['_⚠ The ward says pharmacy instructed them. Pharmacy says it recommended._', '_⚠ The minute says agreed. Two members say discarded._'],
  ['_Both accept the fifty-six readings. They differ about what a specification is for._', '_Both accept the eight at night. They differ about staffing and severity._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the one sentence, and the number of words in each half. ⚠ **Rows 2 and 4 on both cards have no shared part in them at all** — **and the honest repair is to say so rather than to invent one**, because _one says adequate and the other disagrees_ is a sentence with nothing in it. **Collect the word counts**: on about half the sentences one half is a fifth longer, and it is the speaker\'s own view.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the sentence you read out in Stage 1** and rewrite it to hold **both** positions. ⚠ **Shared part once, in front, before either name.** **Then count the words in the two halves and write both numbers in the margin.** **If one half is a fifth longer, it is the one you hold** — **and the repair is to cut it, not to lengthen the other.**'));
out.push(p('**b**  Swap. Your partner reads **only your sentence** and says **which position you hold.** ⚠ **They are right about three-quarters of the time**, and the thing that gives it away is almost never a word: it is the length, the order, or which half got the number.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi filed four paragraphs on a disagreement and the desk ran the first one, which is what a desk does and he knew it when he filed: the first paragraph had one position in it and the second had the other. Mrs Khoury said so the wire carried half a disagreement under a headline about a disagreement, and she has made that cut herself on a newspaper perhaps two hundred times, and the cut is never wrong because the first paragraph was. Mrs Tarabishi asked what goes in the first paragraph then, and both of them, in one sentence, with the shared part said once: the two studies put repayment at about eighty-one per cent and differ about whether the lender\'s selection explains it, thirty-one words, and it has not been cut since. Dr Qabbani asked about however, and Mrs Khoury said however needs two sentences and a desk keeps one, while where and the semicolon hold both halves inside a single sentence, and a sentence cannot be half cut. Mrs Oueidat said the court form is the same: one sentence, or it is quoted in halves. Mr Tayara asked whether that is not simply a long sentence, and it is about thirty words and does the work of a hundred: the length is not the cost, and the cost is that the shared part has to be stated once and most of us state it twice, once inside each position. Mrs Ajouz asked what the shared part is in hers, and whatever both of them accept, and it is usually a number: find it first and write it once, flatly, and then the two halves are short and parallel. Mrs Rizk asked parallel how far, and Mrs Oueidat said same shape, same length, same grammar on both sides, six words each, because a reader meets an asymmetry as a judgement and the longer half is read as the one you hold. Mr Attar asked even where you hold neither, and especially there, because length is the quietest way of taking a side that exists and the only defence is to count the words on the two halves. Mr Zahreddine said his would be that both accept the readings and they differ about what a specification is for, and Mrs Oueidat said that is the sentence she spent two pages reaching: say it at the top and the two pages become evidence rather than argument. Mrs Tarabishi said her review has eleven pages before anybody meets that sentence. And Mr Shihabi said the thing he will take away is that the desk was right: he had filed four paragraphs each of which was true and the first of them was a position, and a reader with one paragraph is entitled to the disagreement and not to half of it._'));
out.push(p('**Listener task:** write your one sentence, and the word count of each half.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the copy Mr Shihabi filed the second time. Answer the questions.'));
out.push(model([
  '**SYRIA / ECONOMY** · _two studies of small-loan repayment_ · **T. Shihabi** · _filed 06:00, 26 March_',
  '**Two studies published this month put repayment on small agricultural loans at about eighty-one per cent and differ about whether the figure tells anybody anything about agricultural lending.**',
  '**Where Dr Haddad reads the rate as evidence that the loans are well designed, Dr Mansour reads the same rate as evidence that the applicants were well chosen.** **Neither disputes the other\'s arithmetic: both use the same administrative series for 2019 to 2024 and both report eighty-one per cent to the nearest point.**',
  '**The two studies also differ about what would settle the question, and here the difference is practical.** **Dr Haddad holds that the design can be tested against the three districts where the terms were varied in 2022; Dr Mansour holds that nothing can be tested without the records of applicants who were refused.** **Those records exist and are not published.**',
  '**On one point the two are closer than their conclusions suggest.** **Both accept that the published rate cannot be compared with the rates reported by the two commercial lenders**, because those count a loan as repaid at a different moment. **Dr Haddad puts the resulting gap at four points and Dr Mansour at nine**, and neither claims the comparison is usable.',
  '**A third paper, by Dr Darwish, is cited by both and supports neither.** **It reports that the refusal rate fell from thirty-one per cent to nine over the same period** — which Dr Haddad treats as a change in the terms and Dr Mansour as a change in the selection. **The paper itself says the two cannot be separated from the data it holds.**',
  '**What neither study reports is the number of applicants.** ⚠ **Both count loans.** **A fall in refusals and a rise in applications would produce the same series**, and no figure in either paper distinguishes them.',
  '**Neither study has been peer-reviewed and both are circulating as working papers.** **Dr Haddad\'s is due in a journal in the autumn; Dr Mansour\'s has been submitted and not placed.** **Both authors supplied copies on request and neither asked for any figure to be withheld.**',
  '**A fourth paper, withdrawn in 2023, reported a rate of sixty-four per cent on the same series and is cited by neither study.** ⚠ **Its author told this agency on Monday that the figure came from a file which counted arrears twice.** **The withdrawal notice says only that the paper contained an error of calculation**, and both of the studies published this month use the corrected series.',
  '**Two districts are missing from the series altogether.** **Dr Haddad says the omission is recorded in the source and does not affect the rate; Dr Mansour has recalculated without them and reports the same eighty-one per cent.**',
  '**The lender has not commented on either study.** **A spokesman said on Tuesday that the 2026 terms were settled in November and that neither paper was before the board.**',
  '**Dr Haddad and Dr Mansour both teach at the same faculty and have published together twice.** **Asked whether they disagree, Dr Mansour said they agree about every number and differ about one word**, which is _designed_.',
]));
out.push(item('1', 'What do the two studies share, and where is it stated?'));
out.push(item('2', 'What does each of them say would settle the question?'));
out.push(item('3', 'What does the copy say neither study reports, and why does it matter?'));
out.push(writers([
  'Copy that holds two positions from the first line: **the shared figure and the disagreement in one sentence** → **_where X reads …, Y reads …_, with the arithmetic conceded** → **what each says would settle it** → **the point on which they are closer than they look** → **the paper both cite and neither owns** → **what neither of them reports** → **and the sentence one of them will give you if asked.**',
  '⚠ **The first sentence carries both positions or the first sentence is a position.** **Anybody may keep it and drop the rest** — a desk, a reader with four minutes, somebody quoting you — **and under a headline about a disagreement, half a disagreement is worse than nothing.**',
  '**Concede the arithmetic early and in one clause.** ⚠ _Neither disputes the other\'s arithmetic: both use the same administrative series._ **A reader who is not told this assumes the two are arguing about the numbers**, and will then read the whole piece looking for the number that is wrong.',
  '**Keep the halves the same length.** ⚠ _Dr Haddad puts the gap at four points and Dr Mansour at nine._ **Eleven words and ten.** **The longer half is read as yours**, and in copy filed under your own name that is a fault you cannot explain away afterwards.',
  '⚠ And **end on the sentence one of them will give you.** _They agree about every number and differ about one word._ **Ask the question that produces it** — _do you two disagree?_ — **and file the answer whole, because it is the only line in the piece that is not yours and it does the work of your last three paragraphs.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a piece holding two positions (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **______________ put ______________ at ______________ and differ about whether ______________.**   **Where ______________ reads ______________, ______________ reads ______________.** **Neither disputes ______________: both ______________.**   **The two also differ about what would settle the question.** **______________ holds that ______________; ______________ holds that ______________.**   **On one point the two are closer than their conclusions suggest.** **Both accept that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both positions inside the first sentence',
  'The shared part stated once, before either name',
  'The two halves the same length, counted',
  'What each says would settle the question',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says which position the writer holds and what gave it away.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole piece (260 words or more), to the shape in the writer\'s box: both positions in the first sentence, the arithmetic conceded, what would settle it, the point of closeness, the work both cite, what neither reports, and a line you were given.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both positions in the first sentence, the shared part once, the halves of equal length, and what each says would settle it.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their first sentence twice, timing the two halves.** ⚠ **The room says which half took longer.** **It is the writer\'s own position in about three readings out of four**, and the timing finds it where the counting of words did not, because a held position is also read more slowly. Then the sentence the cycle ends on, which is Mr Shihabi\'s: **the desk was right, and the first paragraph was a position.**'));
out.push(hw('Take **the longest thing you have written this year** and find **the sentence that holds both positions.** ⚠ **Write down which page it is on.** **In this class it has been page two, page five and page eleven, and three people found that they had never written it at all.** **Then move it to the first paragraph and read what is now underneath it.** **8.6 writes the review that places a work among three others**, which is the examination\'s second genre for this unit.'));

// ===================== 8.6 =====================
out.push(h2('8.6  The review that places a work among three others'));
out.push(p('**Function:** writing the review that places a work among three others   ·   **Grammar:** **Writing Part 2 at C1: the review** · _of the four, the only one that_ · comparison without ranking   ·   **Pronunciation:** praise that does not sound like advertising'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the last thing you recommended to somebody, and what they were choosing between.** ⚠ **If you do not know what the other options were, say so.** Your teacher writes the ten answers in two columns. **In most classes seven of the ten recommendations were made without knowing the alternatives**, which means seven of them asked the reader to do the only difficult part.'));
out.push(board('An excellent book. Strongly recommended.', 'Of the four, the only one that assumes no mathematics.'));
out.push(p('**b**  Which two place the work among others? **1** _It is an excellent book and I recommend it._  **2** _The best of the four._  **3** _I enjoyed it very much._  **4** _Of the four introductions in common use, it is the only one that assumes no mathematics beyond the second year._  **5** _It covers in sixty pages what the standard text covers in four hundred, and leaves out the two chapters a student in industry will need by the third month._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a review is for?   **A** judging a thing   **B** **placing a thing among the things a reader is choosing between** — so a review that names no alternatives has left the reader the only hard part   **C** saying whether you enjoyed it'));
out.push(p('**b**  Listen again. **1** What was asked underneath Mr Attar\'s review?   **2** What does Mrs Khoury say is the cure for praise that reads like advertising?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.11  The only one of the four', [
  ['Ms Huda', 'Mr Attar — the review that was of no use to anybody.'],
  ['Jad', '⚠ **Four hundred words saying the book was excellent.** **Somebody answered underneath asking which of the four he ought to buy.** **I had reviewed one book and he was holding four.**'],
  ['Mrs Khoury', '⚠ **Which is what a review is for, and nobody is taught it.** **A review is not a judgement of a thing.** **It is a placing of a thing among the things a reader is choosing between**, and everything else in it is decoration.'],
  ['Mrs Tarabishi', 'Even where you have not read the other three?'],
  ['Mrs Khoury', '⚠ **Then you name the three and say which of them you have read.** **A review that does not name the alternatives has handed the reader the only difficult part of the job** — **and the reader has fewer afternoons than you do.**'],
  ['Dr Qabbani', 'And the examination?'],
  ['Mrs Khoury', '⚠ **Writing Part 2, and the review is the task candidates do worst.** **They describe, they evaluate, and they forget the reader** — **and the rubric names the reader in every question it asks.** _For a student magazine. For a website used by people choosing._'],
  ['Mr Tayara', 'What does naming the reader change?'],
  ['Jad', '⚠ **Everything about which facts belong in it.** **The sixty pages matter to a final-year student and not at all to a practising engineer.** **I rewrote the review for one named person, and it lost a hundred words and answered the question.**'],
  ['Mrs Oueidat', 'And ranking? Do you say which is best?'],
  ['Mrs Khoury', '⚠ **You say which is best for whom, which is a different sentence.** _Of the four, the only one that assumes no mathematics beyond the second year._ **That is a placing and a recommendation at once**, and it ranks nothing.'],
  ['Mrs Ajouz', 'Is that not avoiding the question?'],
  ['Mr Shihabi', '⚠ **A rank is one position and a placing is four.** **A reader who is told _the best_ has to trust you.** **A reader who is told what distinguishes the four can choose against your advice** — **and that is the reader who comes back.**'],
  ['Mrs Rizk', 'And praise? Mine reads like advertising.'],
  ['Mrs Khoury', '⚠ **Praise that costs nothing reads like advertising, and the cure is a cost.** _It covers in sixty pages what the standard text covers in four hundred, and leaves out the two chapters you will need by the third month._ **The second half of that sentence is what makes the first half believable.**'],
  ['Mr Zahreddine', 'That is the limit inside the claim again.'],
  ['Mrs Oueidat', '⚠ **It is 4.5 in a fourth costume, and the class should count the doors this one instruction has come through.** **A limit inside the claim survives a hostile reader, a quoter, a summariser** — **and now a reader choosing between four things, who is the least patient of the four.**'],
  ['Mrs Tarabishi', 'My literature review is a review in this sense and I had not seen it.'],
  ['Mrs Khoury', '⚠ **It is exactly this, at eleven pages instead of three hundred words.** **_Of the four, only Khalil tests the selection_ is a placing** — **and it is the sentence a reader of any review is hunting for on every page you give them.**'],
  ['Jad', '🔊 ⚠ **And the thing I shall take away is the question underneath.** **He was not asking me whether the book was good.** **He was asking me to spend my afternoon so that he would not have to spend his**, and four hundred words of praise had not done it.'],
]));
out.push(sp());
out.push(box('Language box – the review at C1', [
  '**What a review is.** ⚠ **Not a judgement of a thing but a placing of it among the things your reader is choosing between.** **Name the alternatives** — **three is enough** — **and say which of them you have read.** **A review that names none has given the reader the only hard part.**',
  '**Name the reader, because the rubric does.** ⚠ _For a student magazine. For a website used by people choosing a first course._ **The sixty pages matter to a final-year student and not to a practising engineer**, and which facts belong in the review is decided entirely by who is reading it.',
  '**Place without ranking.** ⚠ _Of the four, the only one that assumes no mathematics beyond the second year._ **A rank is one position and a placing is four.** **_Best_ asks the reader to trust you; a placing lets them choose against you** — **and that reader comes back.**',
  '**Praise with a cost in it.** ⚠ _It covers in sixty pages what the standard text covers in four hundred, and leaves out the two chapters you will need by the third month._ **Praise that costs nothing reads like advertising.** **The second half of the sentence is what makes the first half believable.**',
  '**And the structure, which is four paragraphs and not five.** ⚠ **The reader and what they are choosing between** → **what the work does that the others do not** → **what it leaves out, and to whom that matters** → **the recommendation, addressed to the named reader and to nobody else.**',
  '**The commonest error at C1, and it is not a language error.** ⚠ **A review written to the thing instead of to the reader.** **Everything in it is true, the English is good, and a reader finishes it not knowing whether to buy.** **The test is one question: could somebody act on this?**',
  '**Pronunciation.** 🔊 **Track 8.12** **Read a praising sentence aloud and then read it again with the cost attached.** ⚠ **The first reads at an even pitch, which is the pitch of advertising.** **The second has a fall on the cost** — _and leaves out the two **chapters**_ — **and the room believes the second and not the first.**',
  '**Practise:** Place a work among three others for a named reader. **1** _of the four, the only one that_  **2** praise with a cost attached  **3** what it leaves out and to whom that matters  **4** a recommendation addressed to one named reader  **5** one where you have read only two of the four — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the praise from the card. B says it again **with a cost attached** and **for a named reader.** ⚠ **Two rows on each card name no alternatives at all** — **B must supply three or say that the recommendation cannot be made.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_An excellent introduction. Strongly recommended._', '_The clearest book on the subject I have read._'],
  ['_⚠ The best course available anywhere._', '_⚠ A superb reference. Every office should have one._'],
  ['_Covers the subject in sixty pages._', '_Four hundred pages and nothing left out._'],
  ['_⚠ I enjoyed it more than the others._', '_⚠ Much better than it looks._'],
  ['_Of the four, the only one with worked examples._', '_Of the three, the only one revised since 2019._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the cost, and the named reader. ⚠ **Rows 2 and 4 on both cards name nothing to compare with** — **_the best available anywhere_ and _better than it looks_ are both unplaceable** — **and the honest answer is that no recommendation can be made from them.** **Rows 3 are the useful ones:** sixty pages and four hundred pages are each a cost to somebody, and the room should say to whom.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the recommendation you made in Stage 1** and write it again: **the reader named, three alternatives named, one sentence of praise with a cost in it.** ⚠ **Then strike every sentence that would be true of all four.** **In this class that is usually between a third and a half of what was written**, and what is left is the review.'));
out.push(p('**b**  Swap. Your partner reads **only your recommendation** and says **whether they could act on it today.** ⚠ **Not whether they agree: whether they could act.** **The answer is no about half the time**, and the reason is almost always that the reader was not named.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar had written four hundred words saying the book was excellent, and somebody answered underneath asking which of the four he ought to buy: he had reviewed one book and the reader was holding four. Mrs Khoury said that is what a review is for and nobody is taught it — a review is not a judgement of a thing but a placing of a thing among the things a reader is choosing between, and everything else in it is decoration. Mrs Tarabishi asked even where you have not read the other three, and then you name the three and say which of them you have read, because a review that does not name the alternatives has handed the reader the only difficult part of the job. Dr Qabbani asked about the examination, and it is Writing Part 2, and the review is the task candidates do worst: they describe, they evaluate, and they forget the reader, when the rubric names the reader in every question it asks. Mr Tayara asked what naming the reader changes, and everything about which facts belong in it, because the sixty pages matter to a final-year student and not at all to a practising engineer, and Mr Attar rewrote the review for one named person and it lost a hundred words and answered the question. Mrs Oueidat asked about ranking, and you say which is best for whom, which is a different sentence: of the four, the only one that assumes no mathematics beyond the second year is a placing and a recommendation at once, and it ranks nothing. Mrs Ajouz asked whether that is not avoiding the question, and Mr Shihabi said a rank is one position and a placing is four — a reader who is told the best has to trust you, and a reader who is told what distinguishes the four can choose against your advice, and that is the reader who comes back. Mrs Rizk said her praise reads like advertising, and praise that costs nothing does, and the cure is a cost: it covers in sixty pages what the standard text covers in four hundred, and leaves out the two chapters you will need by the third month. Mr Zahreddine said that is the limit inside the claim again, and Mrs Oueidat said it is 4.5 in a fourth costume, and a limit inside the claim survives a hostile reader, a quoter, a summariser and now a reader choosing between four things, who is the least patient of the four. Mrs Tarabishi said her literature review is a review in this sense and she had not seen it, and it is exactly this at eleven pages instead of three hundred words. And Mr Attar said the thing he will take away is the question underneath: the reader was not asking whether the book was good, but asking him to spend his afternoon so that the reader would not have to spend his._'));
out.push(p('**Listener task:** write your named reader and your one sentence of praise with its cost.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Attar\'s second version, written for a faculty careers site. Answer the questions.'));
out.push(model([
  '**Four ways into embedded systems, and which of them is yours** · _a review for the faculty careers pages_ · **J. Attar** · **28 March**',
  '**This is written for one reader: a final-year student with no industrial experience who has one term and wants to arrive at a first interview able to answer a question about a real device.** **If that is not you, the fourth paragraph says what to read instead.**',
  '**Four books are in common use here and I have read three of them.** **Mansour\'s _Embedded Design_ is the standard text and is on every reading list; Khalil\'s _Small Systems_ is the sixty-page introduction; Darwish\'s _Practical Interfacing_ is the laboratory manual most of us borrowed and nobody owns; and Haddad\'s _Architecture and Constraint_ I have not read and am told is the one the research students use.**',
  '**What Khalil does that the other three do not is get a reader to a working device in a fortnight.** **Sixty pages, four projects, and no mathematics beyond the second year.** **It is the only one of the four that assumes you have never held a soldering iron**, and it says so on the second page rather than discovering it on the ninetieth.',
  '**What it leaves out, and to whom that matters.** ⚠ **There is nothing on timing analysis and nothing on power.** **Mansour gives sixty pages to the first and forty to the second, and those are the two chapters you will want by the third month of a job** — **so Khalil is a book you finish and then replace, and at the price of the standard text that is a real cost and not a small one.**',
  '**Where it is weakest is the part nobody reviews.** **The four projects all use the same board, which is the board the faculty happens to hold**, and a student who starts work somewhere with a different one has to do the translation unaided. **Darwish does that translation in an appendix and is worth borrowing for it alone**, and it is the only place I have found the three boards set out side by side.',
  '**And one thing about all four which is not any author\'s fault.** **None of them was revised after 2021**, and the toolchain all four describe has changed twice since. **Khalil suffers least from this because it teaches so little of it; Mansour suffers most, and about thirty pages of the standard text now describe a program nobody runs.** **Nobody appears to have told the faculty and the reading list is unchanged.**',
  '**The recommendation, for the reader named at the top.** ⚠ **Buy Khalil, borrow Darwish for its appendix, and read the two chapters of Mansour that Khalil leaves out in the library rather than buying it.** **That is one purchase and two afternoons.** **If you have two terms rather than one, reverse it: start with Mansour and keep Khalil beside it for the projects**, because the order matters more than the choice.',
]));
out.push(item('1', 'Who is the review written for, and where is that said?'));
out.push(item('2', 'What does the review say Khalil leaves out, and to whom does it matter?'));
out.push(item('3', 'What does he recommend, and how does the recommendation change for a different reader?'));
out.push(writers([
  'A review that places a work among others: **the reader named in the first line, and what to read if it is not you** → **the alternatives named, with which of them you have read** → **what this work does that the others do not** → **what it leaves out, and to whom that matters** → **where it is weakest** → **what is true of all of them and is nobody\'s fault** → **and a recommendation addressed to the named reader, with one variant.**',
  '⚠ **Name the reader in the first line and name them precisely.** _A final-year student with no industrial experience who has one term._ **Then add the escape clause** — _if that is not you, the fourth paragraph says what to read instead_ — **which costs eleven words and keeps every other reader reading.**',
  '**Name the alternatives and say which you have read.** ⚠ _Four books are in common use here and I have read three of them._ **An unnamed alternative is one the reader has to find**, and a reviewer who will not say what they have not read has made the review unweighable.',
  '**Give the praise a cost in the same paragraph.** ⚠ _Khalil is a book you finish and then replace, and at the price of the standard text that is a real cost._ **Praise without a cost reads as advertising** — **and the cost also tells a reader whether it is theirs.**',
  '⚠ And **put the variant at the end, for one other reader only.** _If you have two terms rather than one, reverse it._ **One variant, not four.** **A review that branches twice has stopped being a recommendation and become a table** — **and the reader who wanted the table did not need you.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a review placing a work among three others (120 words or more).'));
out.push(p('**______________** · _a review for _______________ · **______________**   **This is written for one reader: ______________.** **If that is not you, ______________.**   **______________ are in common use and I have read ______________.** **______________; ______________; ______________; and ______________, which I have not read.**   **What ______________ does that the other three do not is ______________.** **It is the only one of the four that ______________.**   **What it leaves out, and to whom that matters.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reader named in the first line, precisely',
  'Three alternatives named, and which you have read',
  'Praise with a cost in the same paragraph',
  'A recommendation addressed to the named reader',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their first line and their recommendation**, and the room says whether the two are addressed to the same person.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole review (260 words or more), to the shape in the writer\'s box: the named reader, the alternatives, what this work does that the others do not, what it leaves out, where it is weakest, what is true of all of them, and the recommendation with one variant.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reader named precisely, three alternatives named, the praise costed, and the recommendation addressed to the named reader.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a praising sentence twice: once bare and once with its cost attached.** ⚠ **The room says which one it believes.** **It is the second, every time, and the room should notice that the second sentence is less flattering to the work and more useful about it** — which is the whole of the genre. Then the sentence the cycle ends on, which is Mr Attar\'s: **he was asking me to spend my afternoon so that he would not have to spend his.**'));
out.push(hw('Write **a review of 220–260 words** of something you know well, **for a reader you name in the first line**, placing it among **three** named alternatives. ⚠ **Then give it to somebody who is actually choosing** and ask one question: **could you act on this today?** **Bring the review and the answer.** **8.7 mediates between four writers and a reader who wants to know which of them is right**, and carries **Reading Part 6**, **Writing Part 2** and **Listening Part 4**.'));

// ===================== 8.7 =====================
out.push(h2('8.7  Review & Mediate: Four writers and a reader who wants to know who is right'));
out.push(p('**Function:** mediating between four writers and a reader who wants to know which of them is right   ·   **Recycling:** Unit 8   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 6 · Writing Part 2 (a review) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 8 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** The two are not in dispute about nothing that has been measured.  **2** Khalil holds that selection explains the rate. On this view, he says the refusal is itself the selection.  **3** Both reviewers was not persuaded, one on the count and one on the staffing.  **4** Where Haddad reads the fall as seasonal, but Mansour reads it as a trend.  **5** Of the four, it is the only one which assumes not mathematics.  **6** A difference of ground is settle by naming what would distinguish the two.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four positions and the question the director has asked.'));
out.push(box(null, [
  '**FOUR WRITERS AND A READER WHO WANTS TO KNOW WHO IS RIGHT** _(the four are the authors of Mrs Tarabishi\'s review; the reader is a director of the lending agency, who has a board meeting on Thursday)_',
  '**The reader\'s question.** _"I have four papers on my desk and a board on Thursday. Which of them is right?"_',
  '**Haddad.** _Repayment on the small agricultural loans runs at about eighty-one per cent, which shows the loans are well designed._',
  '**Mansour.** _Repayment runs at about eighty-one per cent, which shows the applicants were well chosen. The design is untested._',
  '**Darwish.** _The refusal rate fell from thirty-one per cent to nine over the same period. Nothing in the published data separates a change in the terms from a change in the selection._',
  '**Khalil.** _The question is not the rate. It is who is excluded before a loan is made, and the administrative records cannot answer it._',
  '⚠ **There are six pairings among four writers and one of them is a dispute.** **Haddad and Mansour agree about every figure and differ about what it shows.** **Darwish agrees with both and settles neither.** **Khalil is answering a different question from the other three.**',
  '**And the thing the director has not been told.** **Five of the six pairings are not disagreements, and four of those five produce something that can be said to a board on Thursday.**',
  '**The question for the cycle.** _What do you put in front of the director, and what do you refuse to put?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the director\'s question cannot be answered as asked. What does it give her instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 8.13  Six pairings, one dispute', [
  ['Ms Huda', 'Mrs Tarabishi — the director wants to know which of the four is right.'],
  ['Mrs Tarabishi', '⚠ **And the honest answer is that three of them are right and the fourth is answering a different question.** **Which is no use to her at all on Thursday.**'],
  ['Mrs Khoury', '⚠ **It is no use because it is an answer to the question she asked.** **She asked the wrong question and she is entitled to** — **she has four papers and ten minutes, and sorting them is the work she is paying somebody else to do.**'],
  ['Dr Qabbani', 'So what goes in front of her?'],
  ['Mrs Tarabishi', '⚠ **The four things the four of them agree about, first, with the figure stated once.** **Then the one dispute, named, with the document that would settle it and the name of whoever holds it.** **Then the pairing that is not a dispute at all and looks most like one.**'],
  ['Mr Shihabi', 'Which is Khalil against the other three.'],
  ['Mrs Oueidat', '⚠ **Khalil is 8.1: a difference of subject.** **The other three are counting repayment and he is counting exclusion**, and a director who thinks he is disagreeing with them will discount him, when he is the only one of the four who has told her something about the people who did not get a loan.'],
  ['Mr Tayara', 'And Haddad against Mansour?'],
  ['Mrs Tarabishi', '⚠ **That is the dispute, and it is 8.2: they agree about every number and differ about the ground.** **It is settled by the records of the refused applicants, which exist and are not published** — **and the agency the director works for is the body that holds them.**'],
  ['Mrs Ajouz', 'So the answer to her question is a request.'],
  ['Mrs Khoury', '⚠ **The answer to her question is four usable findings and one request**, and the request is nine words long and she can grant it on Thursday. **A mediation between four writers always ends in somebody\'s filing cabinet, and it is usually the reader\'s own.**'],
  ['Mrs Rizk', 'What do you refuse to put in front of her?'],
  ['Mrs Tarabishi', '⚠ **A ranking.** **She would act on it, and it would be my temperament with four names underneath it.** **I have no basis for preferring Haddad to Mansour and nothing I have read gives me one.**'],
  ['Jad', 'Does she not simply ask again?'],
  ['Mrs Oueidat', '⚠ **She asks once more and then stops.** **What she wants is a decision on Thursday and not a ranking** — **and a sheet with four agreed findings and one request is a decision, which is why she stops asking.**'],
  ['Mr Zahreddine', 'The tribunal does the same with two engineers.'],
  ['Mrs Khoury', '⚠ **Every reader of a disagreement does the same, and the request to rank is not dishonest.** **It is what a reader asks for when they have been given a disagreement and no arithmetic** — **and the arithmetic is the thing we have spent seven cycles learning to supply.**'],
  ['Mr Tayara', 'And the fifth pairing? Darwish against the other two.'],
  ['Mrs Khoury', '⚠ **Darwish agrees with both of them and settles neither, which sounds like a wasted paper and is the most useful of the four.** **He is the one who says that nothing published separates the terms from the selection** — **and that sentence is why the request for the refusal records is a request and not a whim.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the six pairings.** **I spent two years reading four authors as four opinions**, and they are six relationships, of which one is a disagreement and five are information.'],
]));
out.push(sp());
out.push(box('Language box – mediating between four writers', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new here, because there are four of them and a reader who must act.** ⚠ **Count the pairings before you answer.** **Four writers make six relationships and six is the number that matters**, not four — **and in a well-read field one or two of the six are disputes and the rest are information.**',
  '**The order on the page, and it is not the order of the papers.** ⚠ **What all of them agree about, with the figure stated once** → **the one dispute, with the document that would settle it and the name of whoever holds it** → **the pairing that is not a dispute and looks most like one** → **and the paper that settles nothing and is the reason the request is reasonable.**',
  '**Refuse the ranking, and say why in one sentence.** ⚠ _I have no basis for preferring Haddad to Mansour and nothing I have read gives me one._ **A reader who is given a ranking will act on it**, and a ranking without a basis is your temperament with four names underneath it.',
  '**But do not refuse and stop.** ⚠ **A refusal with nothing beside it is the answer Mrs Tarabishi gave first, and it was no use on Thursday.** **Four usable findings and one request is a decision** — **and a reader who is handed a decision stops asking for a ranking.**',
  '**Where the request goes, and who holds the document.** ⚠ **A mediation between four writers ends in somebody\'s filing cabinet, and it is usually the reader\'s own.** **Say whose.** _The records of the refused applicants exist and are not published, and this agency holds them._ **Nine words, and it can be granted in a meeting.**',
  '**And the thing to say about the writer who sounds least useful.** ⚠ **The paper that settles nothing is often the one that makes the request reasonable.** **Darwish agrees with both and settles neither** — **and without his sentence the request for the records is a preference, and with it the request is the only way forward anybody has.**',
  '**Pronunciation.** 🔊 **Track 8.14** **Say _I have no basis for preferring one of them to the other_ flat, with no stress on _no_.** ⚠ **Stress on _no_ makes it a refusal and the reader hears evasion.** **Flat, it is a statement of what the evidence will carry** — **and the sentence that follows it has to be the request, immediately, or the flatness is wasted.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four positions from the card and does **not** show them. B **counts the six pairings**, says **which is the dispute**, and makes the three moves and the refusal. ⚠ **On one of the two cards there is no dispute among the six at all**, and B must say so and give the reader something else. Change roles with the other pair.'));
out.push(table(['Pair A – the repayment papers', 'Pair B – the night admissions'], [
  ['_Haddad: eighty-one per cent, the design works._', '_A: the eight at night are a staffing effect._'],
  ['_Mansour: eighty-one per cent, the applicants were chosen._', '_B: night arrivals are sicker, so a sample is unavailable._'],
  ['_Darwish: refusals fell; nothing separates terms from selection._', '_⚠ C: the eight are not a failure of attention on any view._'],
  ['_Khalil: the question is exclusion, not the rate._', '_⚠ D: the figure to look at is the thirty-one, not the ten._'],
  ['_⚠ One dispute: Haddad against Mansour, on the ground._', '_⚠ No dispute: two grounds, one agreement and one different question._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the number of pairings, which is the dispute, and the document. ⚠ **Pair B has no dispute in it**: A and B are two grounds the admissions sheet separates, C agrees with both, and D answers a different question. **The move there is to say that nothing in the four is in dispute and that the reader has been reading four agreements as a quarrel** — **the commonest finding of this cycle and the one readers least enjoy.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your four texts from 8.1** and write **the six pairings**, each in one line, labelled: dispute, subject, method, definition, temperament, or agreement. ⚠ **Then write the one sheet you would put in front of a reader who has ten minutes** — **the agreements first, the dispute with its document, and the refusal of the ranking.**'));
out.push(p('**b**  Swap. Your partner reads **only your sheet** and says **what they would do on Thursday.** ⚠ **If they cannot name an action, the sheet has failed** — **and the repair is almost never more findings.** **It is the document and the name of whoever holds it.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you put in front of the director:  _Asked which of the four is right, Mrs Tarabishi said the honest answer is that three of them are right and the fourth is answering a different question, which is no use to the director at all on Thursday. Mrs Khoury said it is no use because it is an answer to the question she asked, and she asked the wrong question and is entitled to: she has four papers and ten minutes, and sorting them is the work she is paying somebody else to do. Dr Qabbani asked what goes in front of her, and the four things the four of them agree about, first, with the figure stated once; then the one dispute, named, with the document that would settle it and the name of whoever holds it; then the pairing that is not a dispute at all and looks most like one. Mr Shihabi said that is Khalil against the other three, and Mrs Oueidat said Khalil is 8.1, a difference of subject: the other three are counting repayment and he is counting exclusion, and a director who thinks he is disagreeing with them will discount him when he is the only one of the four who has told her anything about the people who did not get a loan. Mr Tayara asked about Haddad against Mansour, and that is the dispute, and it is 8.2: they agree about every number and differ about the ground, and it is settled by the records of the refused applicants, which exist and are not published, and the agency the director works for holds them. Mrs Ajouz said so the answer to her question is a request, and Mrs Khoury said the answer is four usable findings and one request, and the request is nine words long and she can grant it on Thursday. Mrs Rizk asked what you refuse to put in front of her, and a ranking: she would act on it, and it would be Mrs Tarabishi\'s temperament with four names underneath it. Mr Attar asked whether she does not simply ask again, and Mrs Oueidat said she asks once more and then stops, because what she wants is a decision and not a ranking. Mr Zahreddine said the tribunal does the same with two engineers, and Mrs Khoury said every reader of a disagreement does, and the request to rank is not dishonest: it is what a reader asks for when they have been given a disagreement and no arithmetic. Mr Tayara asked about Darwish, and Darwish agrees with both and settles neither, which sounds like a wasted paper and is the most useful of the four. And Mrs Tarabishi said the thing she will take away is the six pairings: she spent two years reading four authors as four opinions, and they are six relationships, of which one is a disagreement and five are information._'));
out.push(p('**Listener task:** write the six pairings in your own four texts, and the one sheet.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 6)', 7));
out.push(p('You are going to read four extracts in which academics give their views on **what a review of a field is for**. For questions **1–4**, choose from the extracts **A–D**. ⚠ **This part cannot be done by reading one extract carefully.** **Read all four before you answer anything.**'));
out.push(texts([
  '**A** A reviewer is not a judge and should not pretend to be one. Our business is to describe the shape of a disagreement, not to end it, and a review that announces a winner has borrowed an authority nobody gave it. I say that as somebody who has twice been named the winner and found it embarrassing. What troubles me is the escape that has grown up in place of adjudication. It has become fashionable to report that two authors are measuring different things, and the phrase is now doing a great deal of work that it has not earned: four times in five, where I have gone back to the papers, the two authors are measuring the same thing and the reviewer has preferred a comfortable finding to an uncomfortable one. Where a disagreement cannot be settled from anything published, say so in those words and leave it there; a reader is not harmed by being told that a question is open. And then do the one thing a reviewer can do that nobody else is placed to do, which is to name the measurement that would settle it. That is a contribution. Telling four authors they are all talking past one another is, nine times in ten, a way of not reading them.',
  '**B** The single most valuable sentence a review can contain is the one that says two authors are not in dispute because they are not measuring the same quantity. I have spent a career finding those sentences and I have never regretted one. Adjudication, by contrast, is not ours to do: a reviewer who declares a winner has made a judgement that belongs to the next study, and every reviewer I know who has done it has been overtaken within five years. Where I part company with most of my colleagues is over what to print when a dispute cannot be settled. The convention is to write that the question remains unresolved, and I have come to think that sentence does active harm: to a reader who must act, _unresolved_ reads as evasion, and it tells them nothing about what either side expects to see. Print the two predictions instead. Set out what the first position implies will be observed and what the second implies, side by side, and let the reader hold both. And name the measurement that would separate them — which is, in my view, the chief reason for writing a review at all, and the part of my own reviews that has actually changed what anybody did next.',
  '**C** The argument about whether reviewers should adjudicate was settled long ago and settled correctly: they should not. We summarise, we place, we point out what has been overlooked, and we leave the deciding to people with new data. The most useful service a review performs — more useful than anything else in it — is to show that two authors who appear to be quarrelling are counting different things. I would put that above every other function, and I have seen a single paragraph of it save a field four years. What I cannot accept is the newer fashion for reviewers who go on to specify the study that would settle the dispute. That is not reviewing. A reviewer who writes out the measurement to be taken has become a proposer, and the authority of a review rests entirely on its not being a party to the argument. Leave the design of the next study to the people who will have to defend it at a funding panel. Where a disagreement cannot be resolved from the published record, record it as unresolvable in exactly those terms, with the reasons; that is honest and it is also, for once, final.',
  '**D** Most of my colleagues hold that a reviewer should never say which of two authors is right, and I think they are wrong, and that the position has become a comfortable one. Where the published evidence settles a question, the reviewer who refuses to say so has written a bibliography and called it a review. We are the only people who have read all of it; declining to use that is not modesty. I would add at once that this applies to rather few disagreements, and that the rest must be handled with great care. Reporting that two authors are measuring different things is genuinely valuable and I would not have anybody discouraged from it. Where nothing in the record can settle a dispute, say that it is unsettleable on the present evidence and say why, which is a finding and not a failure. And name the measurement that would settle it, with the name of whoever holds the data — that last clause is the one most reviewers leave out, and it is the difference between a review a committee can act on and a review a committee files.',
  '**Which writer:**',
  '**1**  expresses a different view from the others about whether a reviewer should say which of two authors is right?',
  '**2**  has a different opinion from C about the usefulness of reporting that two authors are measuring different things?',
  '**3**  takes a different view from the others on how a disagreement that cannot be settled should appear in print?',
  '**4**  has a different view from B about whether naming the measurement that would settle a dispute belongs in a review?',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the sheet you put in front of a reader who has four writers and ten minutes (120 words or more).'));
out.push(p('**FOUR PAPERS ON ______________** · _for _______________, ahead of ______________   **What all four accept.** **______________, which all four report as ______________.** **______________.** **______________.**   **The one dispute.** ⚠ **______________ and ______________ agree about ______________ and differ about ______________.** **It is settled by ______________, which ______________ holds.**   **The pairing that is not a dispute and looks most like one.** **______________.**   **What I am not able to give you.** ⚠ **A ranking.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The six pairings counted before anything is written',
  'The agreements first, with the figure stated once',
  'The dispute with its document and whoever holds it',
  'The ranking refused, with the reason, and something given instead',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the review)', 10));
out.push(box(null, [
  '⚠ **The review is the Part 2 genre this unit teaches, and it is the task candidates do worst.** **A review places a work among the things your reader is choosing between.** **Name the reader, name three alternatives, cost the praise, and address the recommendation to one person.**',
  'An international website is collecting reviews of **the reference works people rely on when they enter your profession.** **Write a review** of one such work. You should **explain what it does that the alternatives do not**, **say to whom it is suited and to whom it is not**, and **recommend whether the website should list it.** Write **220–260 words**.',
  '⚠ **The rubric names your reader for you: somebody choosing, on a website, who has not entered the profession yet.** **Every fact in the review is selected by that person and not by the work.**',
  '**And the trap, which costs more marks than any language error in this paper.** ⚠ **A review written to the work instead of to the reader.** **Everything in it true, the English good, and a reader who finishes it still does not know whether to buy** — **so finish, read it once, and ask the single question: could somebody act on this today?**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 8 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  The two are not in dispute about anything that ___ measured.   a) has   b) have   c) has been',
  '2  Khalil holds that selection explains the rate. ___ this view, the refusal is itself the selection.   a) On   b) In   c) By',
  '3  They agree about every number in the paper and differ ___ what it shows.   a) from   b) about   c) with',
  '4  Haddad reads the fall as seasonal, ___ Mansour reads the same twelve months as a trend.   a) whereas   b) despite   c) in spite of',
  '5  A difference of ground is ___ by naming what would distinguish the two.   a) settle   b) settling   c) settled',
  '6  Of the four, it is the only one ___ assumes no mathematics beyond the second year.   a) which it   b) that   c) what',
  '7  The same objection ___ , as he has it, to the single bolt of a different grade.   a) applies   b) apply   c) applying',
  '8  She reports that the two experts agree without ___ that it is so.   a) record   b) to record   c) recording',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching, two tasks).** 🔊 **Track 8.15** You will hear five people talking about a disagreement they had to report. **You must complete both tasks as you listen.**'));
out.push(p('**TASK ONE – what the disagreement turned out to be.** For questions **1–5**, choose from the list (**A–H**) what each speaker says it was.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** two people counting different things   **B** agreement about the figures and a difference about what caused them   **C** one conclusion reached for two incompatible reasons   **D** a disagreement that nothing could settle   **E** one word being used in two senses   **F** a difference that existed only in the summary of it   **G** two findings of very different weight reported as one   **H** a position that nobody had actually held', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**TASK TWO – what they do now.** For questions **6–10**, choose from the list (**A–H**) what each speaker says they do differently now.', { bold: true, color: C.navy, before: 120 }));
out.push(p('**A** I state the shared part once, before either name   **B** I write both reasons into the minute, each with its repair   **C** I name what would distinguish the two explanations   **D** I define the term the first time it appears, in the document itself   **E** I say so where nothing can distinguish the two   **F** I open one reporting verb and let the markers carry the position   **G** I name the reader before I recommend anything   **H** I put the whole disagreement into one sentence', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 8.15  Audio script (read after the check)', [
  ['Speaker 1', 'I am a planning officer and two neighbours objected to the same application. Both wanted it refused and I minuted it as two objections received. The applicant came back with a drawing that moved the extension two metres from the first neighbour\'s boundary, and the second neighbour objected again, because her objection had never been about the boundary at all. It was about the loss of the parking space. Those two objections cannot be answered by the same drawing, and one of them could not have been answered by any drawing that keeps the extension. Six weeks, and the six weeks were mine as much as his. Now every refusal from this office carries both reasons separately, and beside each one the thing that would answer it, even where that is a drawing nobody can draw. The applicant then knows which of the two to argue with.'],
  ['Speaker 2', 'I clerk for a hospital audit committee and I have sat through the same meeting perhaps thirty times. Everybody agrees the numbers. Nobody disputes a figure in the paper and the room is still divided at the end of an hour, and for two years I wrote divided in the minute and nothing else. What was happening was that the division was never about the figures. It was about what produced them, and the two explanations in the room were both perfectly consistent with every number on the page. Now I stop the meeting and ask one question, which I was told to ask by somebody on an English course of all places: what would we see if you were right? It takes four seconds. The two answers go into the minute, and about half the time somebody notices that one line on an existing form would separate them.'],
  ['Speaker 3', 'I handle corrections for a newspaper. The worst one I have dealt with was not an error of fact anywhere in the piece. Every sentence was accurate. The headline said two authorities were at odds over a road scheme and the first paragraph gave one authority\'s position, and the second gave the other\'s, four lines down. Both authorities telephoned, separately, to say they were not at odds, and when I read it again they were not: they had answered two different questions put to them by two of our reporters. The disagreement existed in my summary of it and nowhere else. That is the only correction I have printed that was about a structure rather than a fact. Now nothing goes through this desk with a disagreement spread over two sentences. One sentence holds both positions or the piece does not run.'],
  ['Speaker 4', 'I administer a research fund and I send everything to two referees. One scored a proposal highly for its sustainability and the other scored it badly for the same thing, and I spent a fortnight believing I had a real disagreement on my hands and a panel to brief. They had each used the word in the sense ordinary in their own field. For the first it meant that the activity would continue after the grant ended; for the second it meant the environmental sense, which the proposal barely touched. Neither of them had done anything wrong and neither had said which sense they meant, because in each of their worlds there is only one. Our forms now define the word on the page where the referee first meets it. Three lines, and I have not had the argument since.'],
  ['Speaker 5', 'I prepare evidence summaries for people who have to make decisions with them, which is a job that did not exist in this office ten years ago. I used to write that the evidence was mixed, and I used to think that was careful. Then somebody on a committee asked me how mixed, and I went back and found that of the four studies I had balanced against each other, one had ninety cases in it and one had rather more than four thousand. Both reported no effect. Writing both find no effect is true and it is useless, because it tells a committee that two things of equal weight are pointing the same way, and they are not of equal weight at all. Now I put the thing they share once, before either name, and then the two sizes, in the same sentence.'],
]));
out.push(p('**C  Writing.** Write the review (220–260 words): the reader named, three alternatives named, the praise costed, and a recommendation addressed to the named reader.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 8)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ read four short texts and say which two of them are actually in dispute',
  '☐ tell a difference of claim from a difference of ground, and name what would distinguish the grounds',
  '☐ attribute a position across a paragraph with one reporting verb and the markers',
  '☐ say where a writer\'s reason, rather than their conclusion, differs from another\'s',
  '☐ hold two positions in a single sentence, with the shared part once and the halves of equal length',
  '☐ write a review that places a work among three others for a named reader',
  '☐ count the six pairings among four writers before answering anything about them',
  '☐ refuse a ranking and give a reader something they can act on instead',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _differ from · clash with · conflict with · coincide with · overlap with · accord with · fit with · part from · break with · fall out with · go against · run counter to_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 8.7 draws on this unit\'s lexis)_: _dispute → **disputable** · concur → **concurrence** · diverge → **divergence** · reconcile → **reconciliation** · cite → **citation** · common → **commonality** · contend → **contention** · rival → **rivalry** · contrast → **contrastive**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _come down_ **→ _come down on one side_**, which is taking a position, where at B1 it was coming down one floor · _work out_ **→ _the two positions work out the same_**, which is amounting to, where at B1 it was working out what to say · _come out_ **→ _how the six pairings come out_**, which is turning out, where at B1 it was a name coming out in print.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 8 · Student\'s Book');
