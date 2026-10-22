// Proactive English C1 · Syria Edition · Book 2 · Unit 14 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE TWO SIDES DISAGREE ABOUT', 'WHICH KIND OF DIFFERENCE IT IS'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const kinds = (rows) => table(['THE DIFFERENCE', 'FACT OR INTEREST', 'WHAT FOLLOWS'], rows, [3, 1, 2]);
const clinic = '**Board clinic:** your teacher writes three trades from the reports on the board. For each one the room says whether it was stated as a principle or as a price.';
const slip = '**Peer review, C1 band 3.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and **hand it over unsigned.** **The writer answers in one line that must either concede or refuse with a reason.**';

out.push(h1('Unit 14  Negotiating When Both Sides Are Right'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Unit 13 put you in front of a reader who could refuse you.** ⚠ **This unit gives that reader interests of their own** — **and the first finding is that most of what feels like a disagreement is not negotiable at all, because it is a difference about what is the case.**',
  '**A difference of fact is settled by a document.** **A difference of interest is settled by a trade.** ⚠ **Telling them apart is half the work of any negotiation and almost nobody does it first**, which is why meetings about facts run for an hour and meetings about interests run for three.',
  '**14.1** tells a difference of interest from a difference of fact.   **14.2** states a trade as a principle rather than as a price.   **14.3** names your alternative without it sounding like a threat.   **14.4** concedes the thing the other side cannot move, before they defend it.   **14.5** says what you will not trade, and why it is not negotiable.   **14.6** writes the report of a negotiation in which both parties were reasonable.   **14.7** mediates between two reasonable accounts of the same meeting.',
  '**Exam practice in 14.7:** C1 Advanced **Reading and Use of English Part 6** (cross-text multiple matching), **Writing Part 2** (a report) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring one negotiation to the first lesson, and it does not have to have gone well.** **Something you asked for, or were asked for, where the other party had a reason of their own.** **Not a refusal and not an argument** — **a case where both of you wanted something reasonable.** **If you cannot think of one, bring the last request you made that was answered with a condition**, because a condition is a trade offered in the wrong register.',
  '**And the warning, which is about the unit\'s title.** ⚠ **_Both sides are right_ does not mean both sides get what they want.** **It means neither party is being unreasonable, which is the ordinary case and the hard one** — **and a negotiator who needs the other side to be wrong before trading has only one move and will use it on people who have done nothing.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 14.1 =====================
out.push(pb());
out.push(h2('14.1  Two kinds of difference'));
out.push(p('**Function:** telling a difference of interest from a difference of fact   ·   **Grammar:** only one of the two is negotiable, and saying which is half the work   ·   **Pronunciation:** naming the kind of difference without naming a winner'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your negotiation, in one sentence, and what the other party wanted.** ⚠ **Both wants, and no account of who was right.** Your teacher writes the ten pairs on the board. **In most classes six or seven turn out to contain a difference of fact that nobody had separated out** — **and the board is worth keeping to the end of the unit, because 14.7 reads two accounts of one of them.**'));
out.push(board('They say the figure is forty; we say it is twenty-six.', 'Fact. A document settles it.'));
out.push(p('**b**  Which two are differences of interest? **1** _They say the consignment left on the fourth; our gate log says the sixth._  **2** _They want the inspection in October and we want it in March._  **3** _They say the day-book is not a register; the regulation does not define register._  **4** _They want the figure published and we would rather it went in an annexe._  **5** _They say four pallets were over temperature; our instrument says one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide to do first?   **A** decide which side has the better case   **B** **sort the differences into the two kinds** — and say out loud which kind each one is, before anything is offered   **C** find out what the other side will accept'));
out.push(p('**b**  Listen again. **1** What were the four things in dispute, and how did they sort?   **2** What does Mrs Khoury say happens when a difference of fact is traded?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.1  Sorting before trading', [
  ['Ms Huda', 'Mrs Rizk — the meeting with the regional office. How many things were in dispute?'],
  ['Mrs Rizk', '⚠ **Four, and we spent two hours on them.** **I now think two of the four were not in dispute at all.**'],
  ['Mr Shihabi', 'Not in dispute?'],
  ['Mrs Rizk', '⚠ **They were differences about what is the case.** **They had a figure of forty files and we had twenty-six, and we argued about it for forty minutes** — **and the regional return for March settles it and neither of us had asked for the return.**'],
  ['Mrs Khoury', '⚠ **Which is the general rule and the room should hear it in its own words.** **A difference of fact is settled by a document.** **A difference of interest is settled by a trade** — **and the only way to tell is to ask, out loud, which kind this is, before anybody offers anything.**'],
  ['Dr Qabbani', 'And if you trade a fact?'],
  ['Mrs Khoury', '⚠ **You have bought something that was already true, and paid for it.** **Mrs Rizk could have conceded forty and been given the October date she wanted** — **and the return would have arrived in April and said twenty-six, and the concession would have cost her a number she never owed.**'],
  ['Mrs Oueidat', 'Which is worse than losing the point.'],
  ['Mrs Rizk', '⚠ **It is worse, because a traded fact stays traded.** **The figure goes in a minute as agreed at forty, and the return says twenty-six, and now there are two records** — **and the one with agreement on it is the one that gets quoted.**'],
  ['Mr Tayara', 'So the other two were interests.'],
  ['Mrs Rizk', '⚠ **October against March, and whether the uptake figure is published or annexed.** **Both are negotiable, both took twenty minutes, and both were settled** — **and the two hours went on the forty and twenty-six.**'],
  ['Mrs Ajouz', 'How do you say it without sounding clever?'],
  ['Mrs Oueidat', '⚠ **You say which kind it is and not who is right.** _That is a question about what the return says, and we can both read it._ **Fourteen words, no winner named** — **and the other party is not being told they are wrong, they are being told where the answer lives.**'],
  ['Mr Zahreddine', 'And the ones that look like both?'],
  ['Mrs Khoury', '⚠ **There are more of those than this room expects and they are the interesting ones.** _Is a hand-kept book a register?_ **The regulation does not define _register_, so there is no document to settle it** — **and a difference that looks factual and has no document behind it is an interest wearing a fact\'s clothes.**'],
  ['Mr Attar', 'What do you do with those?'],
  ['Mrs Khoury', '⚠ **Name the absence first.** _There is no definition, so this is a question about what we each want the word to cover._ **Then it is negotiable and everybody knows it is** — **and in this class five of the ten negotiations had one of these in them and none of the five had been named.**'],
  ['Mrs Tarabishi', 'Mine was entirely facts.'],
  ['Mrs Oueidat', '⚠ **Then it was not a negotiation and you were in the wrong room.** **Four referee points, all about what the paper says, and all settled by the paper** — **and the time went on it because nobody said at the start that there was nothing to trade.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the return.** **It existed in March, it answers the question in one line, and two people in a room argued for forty minutes about a number that was written down three streets away.**'],
]));
out.push(sp());
out.push(box('Language box – sorting the differences', [
  '**Two kinds, and only one of them is negotiable.** ⚠ **A difference of fact is settled by a document.** **A difference of interest is settled by a trade.** **Sort before you offer anything** — **and say the sorting out loud, because a sort nobody has heard is a sort that will not hold at minute forty.**',
  '**Name the kind and not the winner.** ⚠ _That is a question about what the return says, and we can both read it._ **Fourteen words.** **The other party is not being told they are wrong; they are being told where the answer lives** — **and nobody defends a position when they have been handed a document instead.**',
  '**Never trade a fact.** ⚠ **You have bought something that was already true, and paid for it.** **And a traded fact stays traded**: the minute records it as agreed, the document arrives later and says otherwise, **and the record with agreement on it is the one that gets quoted.**',
  '**The difference that looks factual and has no document behind it is an interest in a fact\'s clothes.** ⚠ _Is a hand-kept book a register?_ **The regulation does not define the word.** **Name the absence first** — _there is no definition, so this is a question about what we each want the word to cover_ — **and then it is negotiable and both parties know it.**',
  '**And the case where everything is a fact.** ⚠ **Then it is not a negotiation.** **Say so at the start**: _I think all four of these are settled by the paper, so there is nothing for us to trade._ **A meeting that is told this in the first minute takes twenty minutes** — **and one that is not takes two hours and ends in the same place.**',
  '**Pronunciation.** 🔊 **Track 14.2** **Say the sorting sentence with no stress on _we can both_.** ⚠ **Stress there makes it a challenge** — _we can **both** read it_ — **and the other party hears an accusation of not having read it.** **Flat, and then stop: the next move is theirs, and it has to be, or the sort is an instruction.**',
  '**Practise:** Sort it, out loud. **1** a difference of fact  **2** a difference of interest  **3** one with no document behind it  **4** a meeting where everything is a fact  **5** one you traded and should not have',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the difference from the card. B says **which kind it is and where the answer lives**, in one sentence, naming no winner. ⚠ **Two rows on each card have no document behind them** — **and there B names the absence first.** Change cards.'));
out.push(table(['Card A – the difference', 'Card B – the difference'], [
  ['_They say forty files; we say twenty-six._', '_They say the consignment left on the fourth; our log says the sixth._'],
  ['_⚠ They say a hand-kept book is not a register._', '_⚠ They say three queries at a counter are not entries._'],
  ['_They want October; we want March._', '_They want the figure published; we want it annexed._'],
  ['_⚠ They say the delay was unreasonable._', '_⚠ They say the note was discourteous._'],
  ['_They say four pallets were over temperature; our instrument says one._', '_They say the request was never received._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the kind, and where the answer lives. ⚠ **Rows 2 and 4 on both cards have no document behind them** — **_register_, _entry_, _unreasonable_ and _discourteous_ are undefined** — **and the move is to name the absence and then treat it as an interest.** **Rows 5 are facts with documents and the room will want to trade them.** **Refuse that out loud.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own negotiation** and write the differences in a column. ⚠ **Against each one write _fact_, _interest_, or _no document_, and against every _fact_ write the document that settles it and whether anybody asked for it.** **In this class the commonest entry in that last column has been _nobody asked_** — **and in four of ten the document existed before the meeting.**'));
out.push(p('**b**  Swap. Your partner reads **only your sort** and says **how long the meeting should have taken.** ⚠ **They will usually say less than it did.** **Then they ask the harder question: which of your facts did you trade?** — **and in this class six of ten had traded at least one.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk had four things in dispute with the regional office and spent two hours on them, and she now thinks two of the four were not in dispute at all: they were differences about what is the case. They had a figure of forty files and she had twenty-six, and they argued for forty minutes, and the regional return for March settles it and neither of them had asked for the return. Mrs Khoury said a difference of fact is settled by a document and a difference of interest is settled by a trade, and the only way to tell is to ask out loud which kind this is before anybody offers anything. Dr Qabbani asked what happens if you trade a fact, and you have bought something that was already true and paid for it: Mrs Rizk could have conceded forty and been given the October date, and the return would have arrived in April saying twenty-six. Mrs Oueidat said that is worse than losing the point, and Mrs Rizk said it is worse because a traded fact stays traded: the figure goes in a minute as agreed at forty, the return says twenty-six, and the record with agreement on it is the one that gets quoted. Mr Tayara said so the other two were interests, and October against March and whether the uptake figure is published or annexed, both negotiable, both settled in twenty minutes. Mrs Ajouz asked how you say it without sounding clever, and Mrs Oueidat said you say which kind it is and not who is right: that is a question about what the return says, and we can both read it, fourteen words and no winner named. Mr Zahreddine asked about the ones that look like both, and Mrs Khoury said there are more of those than the room expects: is a hand-kept book a register, where the regulation does not define register, so a difference that looks factual and has no document behind it is an interest wearing a fact\'s clothes. Mr Attar asked what you do with those, and you name the absence first, and then it is negotiable and everybody knows it is: five of the ten negotiations had one and none of the five had been named. Mrs Tarabishi said hers was entirely facts, and then it was not a negotiation and she was in the wrong room. And Mrs Rizk said the thing she will take away is the return: it existed in March, it answers the question in one line, and two people argued for forty minutes about a number written down three streets away._'));
out.push(p('**Listener task:** write your partner\'s sort and the one fact they traded.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Rizk wrote before the second meeting. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _note before the meeting of 4 February_ · _the four differences, sorted_ · **1 February**',
  '**Four things were in dispute on 14 January and two of them are not differences of interest.** ⚠ **I am writing the sort down because last time I did it in my head and it did not survive the first forty minutes.**',
  '**One: the number of files returned.** **They say forty and we say twenty-six.** **This is a difference of fact and the regional return for March settles it.** ⚠ **Neither party asked for the return.** **I have asked for it this morning and it should be here by Thursday, and I shall not discuss the figure until it is.**',
  '**Two: the number of pallets above the stated limit.** **They say four and our instrument says one.** **Also fact.** **The instrument\'s calibration certificate and the four readings are at annexe A of this note** — **and I am sending the annexe in advance, because a fact produced in a meeting is heard as an argument and a fact sent beforehand is heard as information.**',
  '**Three: October or March for the inspection.** **This is an interest and it is the one I shall trade.** **They want October because their regional cycle closes in November.** **We want March because the cold-chain line is rebuilt in February** — **and both reasons are good, which is what makes it a trade rather than a dispute.**',
  '**Four: whether the uptake figure is published or annexed.** **Interest, and smaller than it looks.** ⚠ **Their reason is that a published figure can be quoted in their own report.** **Ours is that a figure without its denominator will be quoted without it** — **so the trade available is publication with the denominator in the same sentence, which neither side has proposed.**',
  '**What I shall say in the first minute, and it is the whole purpose of this note.** _Two of these four are questions about what the records say, and I have asked for the return. The other two are ours to settle._ ⚠ **Twenty-six words.** **Last time the sort was in my head and by minute forty we were trading the number of files.**',
  '**One thing I got wrong on 14 January that is not about sorting.** **I let the figure of forty into the minute as _the regional office\'s figure_.** **That is accurate and it is worse than useless**: a minute that records a figure without recording that it is disputed has recorded the figure.',
  '**And the thing I shall not write in the note of the meeting.** ⚠ **That the regional office was wrong about the forty.** **The return will say what it says.** **A note that announces a correction has made the correction a victory** — **and the next four things we disagree about will be negotiated by somebody who has lost one.**',
  '**And the one figure that is not in the sort and belongs in the meeting.** **The branch has asked the regional office for nothing in eleven months.** ⚠ **Four requests have come the other way in the same period and all four were answered within a fortnight.** **That is not a bargaining point and I shall not use it as one** — **but a party that has asked for nothing and answered everything has standing of a kind that does not appear in any of the four differences, and a meeting that opens with the sort and never mentions it has left something true on the table.**',
]));
out.push(item('1', 'Which two of the four are differences of fact, and what settles each?'));
out.push(item('2', 'Why does she send the annexe in advance?'));
out.push(item('3', 'What did she get wrong in January that is not about sorting?'));
out.push(writers([
  'A note sorting a negotiation: **the count, and how many are not interests** → **each fact, with the document and whether anybody asked for it** → **each interest, with both parties\' reasons** → **the trade nobody has proposed** → **the sentence you will say in the first minute** → **one thing you got wrong that is not about sorting** → **and what you will not write afterwards.**',
  '⚠ **Give both parties\' reasons for every interest, and give theirs first.** _They want October because their regional cycle closes in November. We want March because the line is rebuilt in February._ **Both reasons are good** — **and a note that records only your own reason has prepared you to be surprised.**',
  '**Send the facts in advance, and say why in the note.** ⚠ _A fact produced in a meeting is heard as an argument and a fact sent beforehand is heard as information._ **This is the one procedural sentence in the genre and it is worth more than any wording** — **the same annexe does opposite work depending on when it arrives.**',
  '**Name the trade neither side has proposed.** ⚠ _Publication with the denominator in the same sentence._ **An interest that looks like two positions usually has a third available** — **and the party who names it is not conceding, which is why it is worth looking for before the meeting rather than during it.**',
  '⚠ And **write the sentence you will not write afterwards.** _That the regional office was wrong about the forty._ **A note that announces a correction has made it a victory** — **and the next four disagreements will be negotiated by somebody who has lost one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note sorting your own negotiation (120 words or more).'));
out.push(p('**______________** · _note before the meeting of _______________ · _the _______________ differences, sorted_ · **______________**   **______________ things were in dispute on ______________ and ______________ of them are not differences of interest.**   **One: ______________.** **They say ______________ and we say ______________.** **This is a difference of fact and ______________ settles it.** ⚠ **______________ asked for it.**   **Two: ______________.** **Interest.** **They want ______________ because ______________.** **We want ______________ because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every fact with its document, and whether anybody asked',
  'Every interest with both reasons, theirs first',
  'The first-minute sentence, counted',
  'One thing you got wrong that is not about sorting',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first-minute sentence**, and the room says how long the meeting should now take.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the count, the facts, the interests with both reasons, the unproposed trade, the first-minute sentence, your own error, and what you will not write.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every fact with its document, both reasons on every interest, and no sentence naming a winner.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One question round the room and two numbers on the board: how many of your differences were facts, and how many of those did you trade?** ⚠ **In this class the second number has been at least one for six of the ten.** **Then the sentence the cycle ends on, which is Mrs Rizk\'s: two people argued for forty minutes about a number written down three streets away.**'));
out.push(hw('**Sort your own negotiation in writing** and then do the one thing that makes the sort real: ⚠ **for every difference you have marked _fact_, find out whether the document exists and ask for it.** **In this class the document existed in four of ten cases and nobody had asked in any of the four.** **Bring the sort and what you asked for.** **14.2 states a trade as a principle rather than a price**, so bring a trade you have actually made.'));

// ===================== 14.2 =====================
out.push(pb());
out.push(h2('14.2  The trade stated as a principle'));
out.push(p('**Function:** stating a trade as a principle rather than as a price   ·   **Grammar:** _in return for which_ · the principle both sides can apply next time   ·   **Pronunciation:** the trade said in one breath, so that neither half can be taken alone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one trade you have actually made, in the words you made it in.** ⚠ **The words, not a summary.** **In most classes eight of the ten come out as a price** — _we will do X if you do Y_ — **and two come out as a principle, and the two are usually from people who have been doing the job longest.**'));
out.push(board('We will accept October if you fund the rebuild.', 'A price. It expires with the meeting.'));
out.push(p('**b**  Which two are principles rather than prices? **1** _We will take October this year if you pay for the February work._  **2** _Inspections should follow the rebuild rather than precede it, in return for which we will work to your regional cycle in any year when nothing is rebuilt._  **3** _We can live with October if you can live with the annexe._  **4** _A figure goes out with its denominator in the same sentence, in return for which we have no objection to publication._  **5** _Give us March and we will stop asking about the forty._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a principle does that a price does not?   **A** cost less   **B** **survive the meeting** — it tells both sides what to do next year, when neither of them is in the room   **C** sound more professional'));
out.push(p('**b**  Listen again. **1** What was Mrs Rizk\'s trade as a price, and as a principle?   **2** What does Mrs Oueidat say the test of a principle is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.3  What survives the meeting', [
  ['Ms Huda', 'Mrs Rizk — the October trade. How did you put it?'],
  ['Mrs Rizk', '⚠ **_We will accept October if you fund the February rebuild._** **And they accepted it, and I thought that was a good afternoon.**'],
  ['Mrs Tarabishi', 'It sounds like one.'],
  ['Mrs Rizk', '⚠ **It was, for eleven months.** **This year there is no rebuild and they have asked for October again, and the trade I made last year gives me nothing to say** — **because what I sold was a date and what I bought was a payment, and both of them are spent.**'],
  ['Mrs Khoury', '⚠ **Which is what a price is, and the room should hear the definition.** **A price is an exchange that completes.** **A principle is a rule that both sides can apply next time, when neither of them is in the room** — **and the second one costs exactly the same to say.**'],
  ['Mrs Oueidat', 'The same words, almost.'],
  ['Mrs Rizk', '⚠ **_Inspections should follow the rebuild rather than precede it, in return for which we will work to your regional cycle in any year when nothing is rebuilt._** **Twenty-eight words, and it answers this year without anybody having to meet.**'],
  ['Dr Qabbani', 'That is longer.'],
  ['Mrs Khoury', '⚠ **It is longer by eleven words and it lasts four years, and the arithmetic there is worth saying out loud.** **A price takes six words and is spent on the day.** **A principle takes twenty-eight and is quoted by the other side in your absence** — **which is the only form of agreement that works when you are not there.**'],
  ['Mr Tayara', 'And _in return for which_?'],
  ['Mrs Oueidat', '⚠ **It is the phrase that joins them without making either half conditional.** **_If_ makes the whole thing a price: _if you do X we will do Y_ is an offer that lapses.** **_In return for which_ states a rule and then states its consideration** — **and the two halves are one sentence, which is why neither can be taken alone.**'],
  ['Mrs Ajouz', 'Could they take the first half and refuse the second?'],
  ['Mrs Khoury', '⚠ **They can try, and this is the test.** **Read the sentence and ask whether the first half is worth having on its own.** **If it is, you have written a concession with a request attached** — **and _inspections should follow the rebuild_ on its own is worth having, so the sentence needs the second half in the same breath and not in the next one.**'],
  ['Mr Shihabi', 'What makes a principle a good one?'],
  ['Mrs Oueidat', '⚠ **That the other side would apply it against you and it would still be right.** **That is the test, in one question.** **_Inspections follow rebuilds_ applies to them as much as to us** — **and a principle that only ever helps the party who proposed it is a price with a long sentence round it.**'],
  ['Mr Zahreddine', 'Insurers do this to me every year.'],
  ['Mrs Khoury', '⚠ **They do it because it works and because they wrote it down first.** **In this class nine of ten trades were prices**, and the one principle came from the student who has negotiated with the same three insurers for twenty years — **which is not a coincidence and is not a compliment to the insurers.**'],
  ['Mr Attar', 'And you write it into the minute.'],
  ['Mrs Rizk', '⚠ **In the minute, in the sentence, and not in the summary.** **A principle in a covering note is a wish.** **A principle in the minute is the thing the next meeting starts from** — **and nobody has to remember it, which is the whole point of the twenty-eight words.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the eleven months.** **I had a good afternoon and I bought eleven months with it**, and the sentence that would have bought four years was available and eleven words longer.'],
]));
out.push(sp());
out.push(box('Language box – the trade as a principle', [
  '**A price completes. A principle recurs.** ⚠ **A price is an exchange that is spent on the day.** **A principle is a rule both sides can apply next time, when neither of them is in the room** — **and it costs about eleven more words to say.**',
  '**_In return for which_, and not _if_.** ⚠ **_If you do X we will do Y_ is an offer and it lapses.** **_X should happen, in return for which we will Y_ states a rule and then its consideration** — **and the two halves are one sentence, which is what stops either being taken alone.**',
  '**The test of the join.** ⚠ **Read the sentence and ask whether the first half is worth having on its own.** **If it is, you have written a concession with a request attached** — **and the second half has to arrive in the same breath and not in the next sentence.**',
  '**The test of the principle itself, in one question.** ⚠ **Would the other side apply it against you, and would it still be right?** **_Inspections follow rebuilds_ applies to them as much as to us.** **A principle that only ever helps the party who proposed it is a price with a long sentence round it** — **and a competent other party will say so.**',
  '**It goes in the minute, in the sentence, and not in the summary.** ⚠ **A principle in a covering note is a wish.** **A principle in the minute is what the next meeting starts from** — **and nobody has to remember it, which is what the extra words buy.**',
  '**And the arithmetic, which is the argument for all of it.** ⚠ **Six words, spent on the day.** **Twenty-eight words, quoted by the other side in your absence.** **In this class nine of ten trades were prices** — **and the one principle came from the student who has negotiated with the same three insurers for twenty years.**',
  '**Pronunciation.** 🔊 **Track 14.4** **Say the whole trade in one breath, with no pause before _in return for which_.** ⚠ **A pause there offers the first half on its own** — **and a competent other party will accept it and stop.** **Mark where you ran out of air and shorten the first half, never the second.**',
  '**Practise:** State it as a principle. **1** a date against a payment  **2** a figure against its denominator  **3** one that would apply against you  **4** one where the first half is worth having alone — so repair it  **5** a price you have already made, restated',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the price from the card. B restates it **as a principle, in one sentence, using _in return for which_.** ⚠ **Two rows on each card cannot be made into principles** — **and there B says why.** Change cards.'));
out.push(table(['Card A – the price', 'Card B – the price'], [
  ['_We will accept October if you fund the February rebuild._', '_We will annexe the figure if you drop the publication point._'],
  ['_⚠ We will agree the figure is forty if you give us March._', '_⚠ We will accept four pallets if you accept the October date._'],
  ['_We will take the hand-kept book if you send an inspector._', '_We will file by the fourth if you reply within ten days._'],
  ['_⚠ We will stop asking about the return if you fund the rebuild._', '_⚠ We will not mention the delay if you approve the annexe._'],
  ['_We will give you the denominator if you publish the figure._', '_We will supply the log if you accept the gate times._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the principle, and whether it would apply against the speaker. ⚠ **Rows 2 and 4 on both cards cannot become principles because they trade a fact** — **the forty, the four pallets, the return, the delay** — **and a principle made out of a fact is an agreement to misrecord something every year instead of once.** **Rows 5 are the ones to spend time on**: both are genuine principles about how a figure or a record travels, and both would apply against the speaker.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your trade from Stage 1** and restate it as a principle. ⚠ **One sentence, _in return for which_, and then apply the two tests out loud**: is the first half worth having alone, and would the other side apply it against you? **In this class the second test has killed about a third of first attempts** — **and a principle that fails it is a price that has been made to sound general.**'));
out.push(p('**b**  Swap. Your partner reads your principle and says **what it tells both parties to do next year.** ⚠ **If they cannot say, it is still a price.** **Then they read it aloud and you count the breaths** — **and anybody who needs two has a first half that is too long.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk put the October trade as we will accept October if you fund the February rebuild, and they accepted it, and she thought it was a good afternoon. Mrs Tarabishi said it sounds like one, and it was, for eleven months: this year there is no rebuild and they have asked for October again, and the trade she made gives her nothing to say, because what she sold was a date and what she bought was a payment and both are spent. Mrs Khoury said a price is an exchange that completes and a principle is a rule both sides can apply next time when neither of them is in the room, and the second one costs exactly the same to say. Mrs Oueidat said the same words almost, and Mrs Rizk gave the principle: inspections should follow the rebuild rather than precede it, in return for which we will work to your regional cycle in any year when nothing is rebuilt, twenty-eight words, and it answers this year without anybody having to meet. Dr Qabbani said that is longer, and Mrs Khoury said it is longer by eleven words and it lasts four years: a price takes six words and is spent on the day, and a principle is quoted by the other side in your absence, which is the only form of agreement that works when you are not there. Mr Tayara asked about in return for which, and Mrs Oueidat said it is the phrase that joins them without making either half conditional: if makes the whole thing a price, and in return for which states a rule and then its consideration. Mrs Ajouz asked whether they could take the first half and refuse the second, and they can try, and the test is to read the sentence and ask whether the first half is worth having on its own. Mr Shihabi asked what makes a principle a good one, and that the other side would apply it against you and it would still be right. Mr Zahreddine said insurers do this to him every year, and Mrs Khoury said they do it because it works and because they wrote it down first: nine of ten trades in the class were prices and the one principle came from the student who has negotiated with the same three insurers for twenty years. Mr Attar said and you write it into the minute, and in the minute, in the sentence, and not in the summary, because a principle in a covering note is a wish. And Mrs Rizk said the thing she will take away is the eleven months: she had a good afternoon and bought eleven months with it, and the sentence that would have bought four years was eleven words longer._'));
out.push(p('**Listener task:** write your partner\'s principle and what it tells both sides to do next year.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the minute Mrs Rizk drafted for the February meeting. Answer the questions.'));
out.push(model([
  '**MINUTE · the branch and the regional office** · _meeting of 4 February_ · **drafted 4 February, circulated 5 February**',
  '**Present.** **Four, named at the foot.** **Papers before the meeting: the regional return for March, requested on 1 February and received on 3 February; the instrument calibration certificate and four readings, sent with the note of 1 February.**',
  '**1 · The number of files returned.** **The return gives twenty-six for the twelve months to March.** ⚠ **Both parties accept the return.** **No figure is agreed and none needs to be: the return is the record.**',
  '**2 · The number of pallets above the stated limit.** **The certificate and the four readings give one.** **Both parties accept the readings.** ⚠ **The regional office\'s figure of four was arrived at before the tolerance was excluded and the office says so.** **Nothing further arises.**',
  '**3 · The timing of inspections.** **Agreed as a principle, in these words:** _inspections should follow a rebuild rather than precede it, in return for which the branch will work to the regional cycle in any year when nothing is rebuilt._ ⚠ **Both parties noted that this applies in either direction and that neither will need to meet about it.**',
  '**4 · Publication of the uptake figure.** **Agreed as a principle:** _a figure is published with its denominator in the same sentence, in return for which the branch has no objection to publication._ **Proposed by neither party before the meeting and arrived at in about four minutes.**',
  '**5 · One thing not agreed, recorded as not agreed.** **Whether a hand-kept day-book is a register within the meaning of the regulation.** ⚠ **The regulation does not define the word.** **The parties disagree, the disagreement is about what each wants the word to cover, and it is recorded here so that neither side has to discover it again.**',
  '**6 · Actions.** **The regional office to supply the governorate\'s allocation figures for printed registers, by 20 February.** **The branch to send the February readings on the day of the rebuild.** **No other action.**',
  '**And one sentence about this minute rather than about the meeting.** **The two principles are in the minute and not in a covering note.** ⚠ **A principle in a covering note is a wish** — **and the February meeting began with the sort, took thirty-five minutes, and the January meeting took two hours and settled less.**',
  '**Circulation, and it is the reason this minute exists in this form.** **Copies to the four present, to the regional director, and to the branch file.** ⚠ **The January minute went to the four present only**, and the regional director read the figure of forty in a summary his own office prepared from it. **A minute that reaches one office and a summary that reaches another are two records**, and the second one is the one that is quoted. **The February minute goes to both, on the same day, in the same words.**',
  '**One procedural thing agreed in the last two minutes and not in any item.** **That each party sends its papers four clear days before a meeting and that neither raises a figure on the day.** ⚠ **It is not a principle and it has no consideration attached**, so it is recorded here as a working arrangement and not under item 3 — **and it is the arrangement that will do more work than either principle, because the two hours in January were produced by a figure nobody had seen.**',
]));
out.push(item('1', 'How are items 1 and 2 recorded, and why is no figure agreed?'));
out.push(item('2', 'What do both parties note about the principle in item 3?'));
out.push(item('3', 'Why is item 5 in the minute at all?'));
out.push(writers([
  'A minute of a negotiation where both sides were reasonable: **the papers that were before the meeting, with their dates** → **each fact, recorded as a document and not as an agreement** → **each interest, agreed as a principle in the words used** → **the principle neither side proposed** → **what was not agreed, recorded as not agreed** → **actions with names and dates** → **and one sentence about the minute.**',
  '⚠ **Never record a fact as agreed.** _The return gives twenty-six. Both parties accept the return. No figure is agreed and none needs to be._ **A figure recorded as agreed is a figure that stays agreed** — **and the document it contradicts arrives later and loses.**',
  '**Quote the principle in the words it was agreed in, and note that it runs both ways.** ⚠ _Both parties noted that this applies in either direction and that neither will need to meet about it._ **That second clause is what makes it a principle in the record and not merely in the room.**',
  '**Record what was not agreed, as not agreed.** ⚠ _The regulation does not define the word, and it is recorded here so that neither side has to discover it again._ **An unrecorded disagreement is rediscovered at the next meeting by both parties, at full length** — **and recording it costs three sentences.**',
  '⚠ And **give the other party their own correction.** _The regional office\'s figure of four was arrived at before the tolerance was excluded and the office says so._ **They said it; the minute records that they said it.** **A minute in which only one party corrects anything is a minute the other party will dispute** — **and this is the sentence that makes the whole record acceptable to both.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the minute of your own negotiation (120 words or more).'));
out.push(p('**MINUTE · ______________** · _meeting of _______________ · **______________**   **Present.** **______________.** **Papers before the meeting: ______________.**   **1 · ______________.** **______________ gives ______________.** ⚠ **Both parties accept ______________.** **No figure is agreed and none needs to be.**   **2 · ______________.** **Agreed as a principle, in these words:** _______________, in return for which _______________._ ⚠ **Both parties noted that this applies in either direction.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No fact recorded as agreed',
  'Every principle quoted in the words used',
  'The both-directions clause present',
  'What was not agreed, recorded as not agreed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their principles**, and the room says which of them would apply against the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole minute (260 words or more), to the shape in the writer\'s box: papers and dates, facts as documents, interests as principles, the unproposed principle, what was not agreed, actions, and one sentence about the minute.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no fact agreed, every principle in the words used, and the other party\'s own correction recorded as theirs.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their principle and the room applies it against them**, out loud, in one sentence. ⚠ **If it still holds, it is a principle.** **In this class about a third have failed this and all of them were prices in general language.** **Then the arithmetic, which is the argument for the whole cycle: six words spent on the day, or twenty-eight quoted in your absence.**'));
out.push(hw('**Restate your trade as a principle** and then do the harder half: ⚠ **write the sentence the other party would use if they applied it against you**, and decide whether you would accept it. **If you would not, it is not a principle and the homework is to find one that survives.** **Bring both sentences.** **14.3 names an alternative without it sounding like a threat**, so bring the thing you would do if the negotiation failed.'));

// ===================== 14.3 =====================
out.push(pb());
out.push(h2('14.3  The alternative that is not a threat'));
out.push(p('**Function:** naming your alternative without it sounding like a threat   ·   **Grammar:** the alternative in the subordinate clause, and never in the main one   ·   **Pronunciation:** the alternative said at lower stress than the request'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **what you would actually do if your negotiation failed.** ⚠ **The real thing, not the thing you would say.** **In most classes four of the ten have no alternative at all** — **and knowing that about yourself before a meeting is worth more than any form of words, because a party with no alternative must not name one.**'));
out.push(board('And if we cannot agree?', 'The alternative, in a subordinate clause.'));
out.push(p('**b**  Which two name an alternative without threatening? **1** _If you cannot fund February, we shall go to the governorate._  **2** _Since the February work has to be done either way, we shall be asking the governorate about it, and I would rather ask you first._  **3** _We have other options._  **4** _The rebuild is scheduled whatever happens, so the question is only who is told about it first, and I am asking you._  **5** _You should know that we are not without alternatives here._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does the room decide the alternative goes?   **A** at the end, as a warning   **B** **in a subordinate clause, with the request in the main one** — so that the sentence is about what you are asking for   **C** nowhere: it should never be mentioned'));
out.push(p('**b**  Listen again. **1** What is Mr Zahreddine\'s alternative, and how did he use to name it?   **2** What does Mrs Khoury say an alternative in the main clause becomes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.5  In the subordinate clause', [
  ['Ms Huda', 'Mr Zahreddine — the insurer who would not accept the exclusion. Your alternative?'],
  ['Mr Zahreddine', '⚠ **A second opinion from a different engineer, which the policy allows and which costs them.** **I have named it badly for twenty years.**'],
  ['Mr Shihabi', 'How did you name it?'],
  ['Mr Zahreddine', '⚠ **_If you will not accept the exclusion, I shall ask for a second opinion._** **Which is a threat, and I did not hear it as one until a loss adjuster told me.**'],
  ['Mrs Khoury', '⚠ **It is a threat because the alternative is in the main clause, and the room should see the grammar of it.** **The main clause is what a sentence is about.** _I shall ask for a second opinion_ **is the sentence** — **and the request has been demoted to a condition on it.**'],
  ['Mrs Oueidat', 'So you swap them.'],
  ['Mr Zahreddine', '⚠ **_Since a second opinion is available under the policy and would take six weeks, I am asking you to accept the exclusion on the readings I have._** **The alternative is in the _since_ clause, the request is the sentence, and nobody has been threatened.**'],
  ['Dr Qabbani', 'The alternative is still there.'],
  ['Mrs Khoury', '⚠ **It is still there and that is the point: an alternative nobody knows about buys you nothing.** **What changes is what the sentence is for.** **In the subordinate clause it is a fact about the world; in the main clause it is something you are going to do to somebody** — **and the same alternative, in the same words, does both.**'],
  ['Mrs Tarabishi', 'And if you have no alternative?'],
  ['Mrs Oueidat', '⚠ **Then you name nothing, and this is the harder discipline.** **Four of ten in this room have no alternative at all** — **and a party who invents one is committed to it the moment the other side says _do that, then_, which in this class has happened twice.**'],
  ['Mrs Ajouz', 'What do you say instead?'],
  ['Mrs Khoury', '⚠ **You say what the cost of not agreeing is, which is not the same thing.** _If this is not settled by March the line stands idle for a month, and that is our cost and not yours._ **A cost is a fact about you.** **An alternative is an action against them** — **and a party with no alternative still has costs, and the costs are true.**'],
  ['Mr Tayara', 'Does _since_ always work?'],
  ['Mr Zahreddine', '⚠ **_Since_, _as_, _given that_ — and the test is whether the clause could be deleted and leave a complete request.** **_I am asking you to accept the exclusion_ stands alone** — **and if deleting the clause leaves nothing, the alternative has become the sentence again.**'],
  ['Mr Attar', 'And the voice?'],
  ['Mrs Oueidat', '⚠ **Lower on the alternative than on the request, which is the opposite of what everybody does.** **A raised voice on the subordinate clause reinstates the threat the grammar removed** — **and the room should hear both versions, because the words are identical.**'],
  ['Mrs Rizk', 'Mine is a regulation and not an action.'],
  ['Mrs Khoury', '⚠ **Then it is the strongest kind and it needs the least stress.** **A regulation is not something you would do to anybody** — **and a party who reads a regulation out slowly has made a rule sound like a decision, which is the one way to spoil it.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is twenty years.** **The same alternative, the same policy clause, the same six weeks** — **and I had put it in the main clause every time since 2004, which is about forty opinions.**'],
]));
out.push(sp());
out.push(box('Language box – the alternative in its place', [
  '**The main clause is what the sentence is about.** ⚠ **Put the request there and the alternative in a subordinate clause.** _Since a second opinion is available under the policy and would take six weeks, I am asking you to accept the exclusion on the readings I have._ **The alternative is a fact about the world; the request is the sentence.**',
  '**The same alternative does both jobs, in the same words.** ⚠ **In the main clause it is something you are going to do to somebody.** **In the subordinate clause it is a condition that exists.** **Nothing has been softened and nothing has been hidden** — **only the grammar has moved, and the grammar is what a reader hears.**',
  '**_Since_, _as_, _given that_ — and the deletion test.** ⚠ **Delete the clause and see whether a complete request is left.** **_I am asking you to accept the exclusion_ stands alone.** **If deleting the clause leaves nothing, the alternative has become the sentence again** — **which is the commonest repair this cycle needs.**',
  '**Where you have no alternative, name none.** ⚠ **Four of ten in this room have none.** **A party who invents one is committed to it the moment the other side says _do that, then_** — **and in this class that has happened twice, both times to somebody who had nothing to do next.**',
  '**What a party with no alternative has instead, and it is true.** ⚠ **A cost.** _If this is not settled by March the line stands idle for a month, and that is our cost and not yours._ **A cost is a fact about you; an alternative is an action against them** — **and the second half of that sentence is what keeps it from being a plea.**',
  '**The strongest alternative is a rule and not an act.** ⚠ **A regulation is not something you would do to anybody.** **It needs the least stress of all** — **and a party who reads a regulation out slowly has made a rule sound like a decision, which is the one way to spoil it.**',
  '**Pronunciation.** 🔊 **Track 14.6** **Say the sentence twice: once with the stress on the subordinate clause and once with it on the request.** ⚠ **The words are identical.** **The room will hear the first as a threat** — **and the rule is lower on the alternative than on the request, which is the opposite of what everybody does.**',
  '**Practise:** Put the alternative in its place. **1** an action the policy allows  **2** a regulation  **3** a case with no alternative — so give the cost  **4** one where deleting the clause leaves nothing  **5** one you have named as a threat before',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the threat from the card. B restates it **with the alternative in a subordinate clause** and applies the deletion test out loud. ⚠ **Two rows on each card have no alternative behind them at all** — **and there B gives a cost instead.** Change cards.'));
out.push(table(['Card A – the threat', 'Card B – the threat'], [
  ['_If you will not accept the exclusion, I shall ask for a second opinion._', '_If the file is refused again we shall write to the governorate._'],
  ['_⚠ If you cannot fund February we shall find another way._', '_⚠ If this is not resolved we shall have to consider our position._'],
  ['_If the figure is published without the denominator we shall object formally._', '_If the inspection is in October we shall report the line as unavailable._'],
  ['_⚠ You should know we are not without options here._', '_⚠ There are other avenues open to us._'],
  ['_If the day-book is rejected the regulation requires a written reason._', '_If the request is not answered in ten days the rule treats it as granted._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the request in the main clause, and whether the deletion test passed. ⚠ **Rows 2 and 4 on both cards are empty** — _another way_, _consider our position_, _not without options_, _other avenues_ — **and the move is to give a cost instead, in a sentence ending _and that is our cost and not yours_.** **Rows 5 are regulations and need the least stress of anything on either card.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own alternative** and write one sentence with the request in the main clause. ⚠ **Then delete the subordinate clause and read what is left.** **If it is not a complete request, rewrite it.** **In this class the deletion test has failed on about half of first attempts** — **and every failure had the word _unless_ in it, which is the surest sign that an alternative has become the sentence.**'));
out.push(p('**b**  Swap. Your partner reads your sentence aloud **twice, stressing the clause and then the request**, and tells you which one they would have refused. ⚠ **Then the honest question: do you actually have this alternative?** **Four of ten do not** — **and your partner is not going to believe it, so say it plainly.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine\'s alternative is a second opinion from a different engineer, which the policy allows and which costs the insurer, and he has named it badly for twenty years. Mr Shihabi asked how, and he used to say if you will not accept the exclusion I shall ask for a second opinion, which is a threat, and he did not hear it as one until a loss adjuster told him. Mrs Khoury said it is a threat because the alternative is in the main clause: the main clause is what a sentence is about, so I shall ask for a second opinion is the sentence and the request has been demoted to a condition on it. Mrs Oueidat said so you swap them, and Mr Zahreddine gave the repaired version: since a second opinion is available under the policy and would take six weeks, I am asking you to accept the exclusion on the readings I have. Dr Qabbani said the alternative is still there, and it is still there and that is the point, because an alternative nobody knows about buys you nothing: what changes is what the sentence is for. Mrs Tarabishi asked what happens if you have no alternative, and then you name nothing, and four of ten in the room have none, and a party who invents one is committed to it the moment the other side says do that, then. Mrs Ajouz asked what you say instead, and you say what the cost of not agreeing is, which is a fact about you and not an action against them. Mr Tayara asked whether since always works, and since, as and given that, with the test being whether the clause could be deleted and leave a complete request. Mr Attar asked about the voice, and lower on the alternative than on the request, which is the opposite of what everybody does. Mrs Rizk said hers is a regulation and not an action, and then it is the strongest kind and needs the least stress, because a party who reads a regulation out slowly has made a rule sound like a decision. And Mr Zahreddine said the thing he will take away is twenty years: the same alternative, the same policy clause, the same six weeks, and he had put it in the main clause every time since 2004, which is about forty opinions. Mrs Khoury said the figure is worth keeping, because forty opinions is not a habit but a practice, and a practice is changed by a sentence and not by a resolution. And Mrs Oueidat said the thing she will take away is the deletion test, because it takes four seconds and settles what half an hour of reading cannot._'));
out.push(p('**Listener task:** write your partner\'s sentence and say whether the deletion test passed.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Zahreddine\'s letter to the insurer. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _to the claims office_ · _the east elevation exclusion, readings of 7 August_ · **12 February**',
  '**Since a second opinion is available under clause 14 of the policy and would take about six weeks, I am asking you to accept the exclusion on the readings I have.**',
  '**The readings.** **Fifty-five positions of fifty-six, each with its date and its tolerance.** **The position not reached is behind sheeted scaffold and is named at 2.1 of the opinion.** ⚠ **The fifty-five exclude a specified-grade frame at all but one position**, which is a statement about what the readings rule out and not about what they show.',
  '**What is not in dispute, and I want to put it first because the file has run for four months.** **Your office has never disputed the instrument, the tolerance or the dates.** **The whole of the difference is whether fifty-five of fifty-six will support an exclusion** — **and that is a question about what the policy requires and not about my readings.**',
  '**Where I think the policy stands, and I may be wrong about it.** **Clause 9 requires a reasonable basis.** ⚠ **It does not require every position, and it does not define _reasonable_** — **so this is a question about what we each want the word to cover, and I would rather settle that than have two engineers measure the same bolts.**',
  '**What a second opinion would and would not produce.** **It would produce the same fifty-five readings, because the scaffold is still up.** **It would cost your office the fee and six weeks, and it would cost me nothing** — ⚠ **and I am saying that plainly rather than leaving it to be inferred, because an alternative that is hinted at is a threat and one that is costed is a fact.**',
  '**What I am prepared to put in writing, in return for acceptance.** _An exclusion stated on fewer than all positions names the positions not reached, in the sentence that carries the exclusion._ **That is a principle and it applies to me in every future opinion for your office** — **and it is more than the file is asking for.**',
  '**What I will not do.** **I will not state the exclusion on all fifty-six.** ⚠ **One position was not reached and the opinion says so** — **and an exclusion that covers a position nobody measured is the one thing in this trade that is not mine to give.**',
  '**And one sentence about the four months.** **Two of them are mine.** **My November letter put the second opinion in the main clause and your office replied to that and not to the readings** — **which was a reasonable reply to the letter I actually sent.**',
  '**And a figure for the file, which neither of us has had before.** **Four months, two of them mine, one letter in November that was answered on its own terms, and one clause of the policy that has never been tested in this office.** ⚠ **Clause 9 has been cited in eleven of my opinions for your office since 2019 and has never been disputed until this one** — **which is a figure about your office and mine together, and the reason I would rather settle what _reasonable_ covers than have two engineers measure the same bolts for the eleventh time.**',
]));
out.push(item('1', 'Where is the alternative in the first sentence, and what is the main clause?'));
out.push(item('2', 'What does he say a second opinion would produce, and why does he cost it openly?'));
out.push(item('3', 'What does he refuse, and whose two months does he claim?'));
out.push(writers([
  'A letter with an alternative in it: **the request in the main clause, the alternative in a subordinate one** → **the evidence** → **what is not in dispute, said early** → **where the rule stands, with your own doubt** → **what the alternative would and would not produce, costed** → **the principle offered in return** → **what you will not do** → **and the share of the delay that is yours.**',
  '⚠ **Cost the alternative openly.** _It would cost your office the fee and six weeks, and it would cost me nothing._ **A hinted alternative is a threat and a costed one is a fact** — **and _it would cost me nothing_ is the half nobody writes.**',
  '**Say where the rule stands and admit you may be wrong about it.** ⚠ _Clause 9 requires a reasonable basis. It does not define reasonable, so this is a question about what we each want the word to cover._ **Which is 14.1: an undefined word is an interest in a fact\'s clothes, and naming it is what makes it tradable.**',
  '**Name what you will not do, with its reason in the same breath.** ⚠ _An exclusion covering a position nobody measured is not mine to give._ **A refusal with its reason attached is 14.5 arriving early** — **and a letter with no such sentence reads as a party who would trade anything.**',
  '⚠ And **claim your own share of the delay.** _Two of the four months are mine. My November letter put the second opinion in the main clause and your office replied to that._ **This is the sentence that makes the rest credible** — **and it is also the clearest statement of this cycle\'s finding that anybody in this class has written.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter with your alternative in it (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **Since ______________ and would ______________, I am asking you to ______________.**   **The ______________.** **______________.** ⚠ **______________.**   **What is not in dispute, and I want to put it first.** **______________.** **The whole of the difference is ______________.**   **Where I think ______________ stands, and I may be wrong about it.** ⚠ **______________ does not define ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The request in the main clause; delete the clause and it still stands',
  'The alternative costed on both sides',
  'What is not in dispute, before what is',
  'What you will not do, with its reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room deletes the subordinate clause out loud and says whether a request is left.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the request and the alternative, the evidence, what is not in dispute, where the rule stands, the costing, the principle, the refusal, and your share of the delay.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the deletion test passed, the alternative costed both ways, and your own share of the delay claimed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their first sentence twice, stressing the clause and then the request.** ⚠ **The room says which one it would have refused.** **It is the first, every time.** **Then one number: how many in the room have no alternative at all?** **In this class, four of ten** — **and all four had written one into a draft before Stage 4b.** **Then Mr Zahreddine\'s twenty years.**'));
out.push(hw('Write **your request with the alternative in a subordinate clause**, and then do the two tests: ⚠ **delete the clause and check that a request is left**, and **cost the alternative on both sides in one sentence.** **If the cost to you is nothing, say so** — **that sentence is the one nobody writes and the one that turns a threat into a fact.** **Bring the sentence and both costs.** **14.4 concedes the thing the other side cannot move**, so bring the thing they were never going to give you.'));

// ===================== 14.4 =====================
out.push(pb());
out.push(h2('14.4  Conceding what they cannot move'));
out.push(p('**Function:** conceding the thing the other side cannot move, before they defend it   ·   **Grammar:** the pre-emptive concession and what it buys   ·   **Pronunciation:** a concession offered first, at the speed of an ordinary sentence'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing the other party was never going to give you.** ⚠ **The thing, and why they could not move it.** **In most classes seven of the ten turn out to be fixed by somebody who was not in the room** — **a cycle, a regulation, a budget year** — **and the board is the evidence that the immovable thing is usually not a position at all.**'));
out.push(board('What were they never going to give?', 'And who fixed it, outside the room?'));
out.push(p('**b**  Which two are pre-emptive concessions? **1** _I know you will not move on the November cycle; it closes your year and nobody in this room set it._  **2** _I suppose the cycle is difficult for you._  **3** _Before we start: the governorate\'s allocation is not yours to change and I shall not ask you to._  **4** _We understand you have constraints._  **5** _I realise this may be awkward for your office._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a pre-emptive concession buys?   **A** goodwill   **B** **the time the other party would have spent defending it** — and the right to be believed about what you do still want   **C** a better final offer'));
out.push(p('**b**  Listen again. **1** What did Mrs Ajouz concede first, and what had she done the year before?   **2** What does Mrs Oueidat say is the difference between this and sympathy?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.7  Said first, and not asked for', [
  ['Ms Huda', 'Mrs Ajouz — the inspectorate. What were they never going to give you?'],
  ['Mrs Ajouz', '⚠ **A printed register.** **The governorate holds four and has allocated none since 2018, and the inspector cannot allocate one.**'],
  ['Mr Shihabi', 'And last year you asked for one.'],
  ['Mrs Ajouz', '⚠ **Twice, in writing, and I spent most of a meeting being told why it was not possible** — **by somebody who agreed with me and could do nothing.**'],
  ['Mrs Khoury', '⚠ **Which is the cost the room should put a number on.** **Twenty minutes of a forty-minute meeting spent on a thing nobody in it could change** — **and the party doing the explaining is the one whose help you came for.**'],
  ['Mrs Oueidat', 'So you say it first.'],
  ['Mrs Ajouz', '⚠ **_The governorate\'s allocation is not yours to change and I shall not ask you to._** **Fifteen words, in the first minute, and the meeting went to the thing I actually wanted.**'],
  ['Dr Qabbani', 'That is sympathy with extra steps.'],
  ['Mrs Oueidat', '⚠ **It is the opposite and the difference is one word: _ask_.** **_We understand you have constraints_ is sympathy and costs nothing and is worth nothing.** **_I shall not ask you to_ is a commitment** — **and a commitment is a thing the other party can rely on, which is why it buys the twenty minutes.**'],
  ['Mrs Tarabishi', 'What do you get for it?'],
  ['Mrs Khoury', '⚠ **Two things, and the second is the one people miss.** **The time, which is obvious.** **And the right to be believed about what you do still want** — **because a party who has given up the impossible thing is not asking for everything, and the next request is heard as a real one.**'],
  ['Mr Tayara', 'And you have to mean it.'],
  ['Mrs Ajouz', '⚠ **You have to mean it for the rest of the year.** **A concession made in the first minute and reopened in the fortieth is worse than never making it** — **and in this class one student did exactly that and the other party stopped answering letters.**'],
  ['Mrs Rizk', 'How do you know it is really immovable?'],
  ['Mrs Oueidat', '⚠ **One question: who fixed it, and are they in the room?** **A cycle, a regulation, a budget year, an allocation** — **seven of ten in this class were fixed by somebody absent.** **The other three were positions the party could have moved and chose not to**, and those must never be conceded in advance.'],
  ['Mr Zahreddine', 'Mine was a policy clause and the adjuster wrote it.'],
  ['Mrs Khoury', '⚠ **Then it is movable and conceding it first would have given away the whole file.** **This is the distinction the cycle turns on**: a thing the other party cannot change, and a thing they do not want to change. **The first is free to concede and the second is the negotiation.**'],
  ['Mr Attar', 'And the tone?'],
  ['Mrs Ajouz', '⚠ **Ordinary.** **No sympathy in the voice and no pause before it.** **A pre-emptive concession said kindly is heard as a manoeuvre** — **and said flatly, in the first minute, it is heard as information, which is what it is.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is who was explaining.** **The inspector spent twenty minutes telling me why he could not help me**, and he was the person I had come to for help, and I had put him there.'],
]));
out.push(sp());
out.push(box('Language box – the pre-emptive concession', [
  '**The form, and _ask_ is the word that carries it.** ⚠ _The governorate\'s allocation is not yours to change and I shall not ask you to._ **Fifteen words, in the first minute.** **_We understand you have constraints_ is sympathy; it costs nothing and is worth nothing** — **and a commitment is a thing the other party can rely on.**',
  '**It buys two things.** ⚠ **The time they would have spent defending it** — **twenty minutes of forty, in Mrs Ajouz\'s case.** **And the right to be believed about what you do still want**, because a party who has given up the impossible thing is not asking for everything.',
  '**The test, in one question.** ⚠ **Who fixed it, and are they in the room?** **A cycle, a regulation, a budget year, an allocation.** **Seven of ten in this class were fixed by somebody absent** — **and the other three were positions the party could have moved and chose not to.**',
  '**The distinction the cycle turns on.** ⚠ **A thing the other party cannot change is free to concede.** **A thing they do not want to change is the negotiation.** **Concede the second in advance and you have given away the file** — **and the two look identical from across a table, which is why the question is about who fixed it and not about how firm they sound.**',
  '**You have to mean it for the rest of the year.** ⚠ **A concession made in the first minute and reopened in the fortieth is worse than never making it.** **In this class one student did exactly that and the other party stopped answering letters** — **which is a cheap lesson at somebody else\'s expense.**',
  '**And the tone is ordinary.** ⚠ **No sympathy in the voice, no pause before it.** **Said kindly it is heard as a manoeuvre.** **Said flatly, in the first minute, it is heard as information** — **which is what it is.**',
  '**Pronunciation.** 🔊 **Track 14.8** **Say the concession at the speed of an ordinary sentence and then say it slowly and warmly.** ⚠ **The room will prefer the second and the other party would not.** **Flat, fast, first, and then straight into what you do want** — **and no pause between the two, because the pause is where the manoeuvre lives.**',
  '**Practise:** Concede it first. **1** a cycle fixed outside the room  **2** a regulation  **3** an allocation held elsewhere  **4** a position they could move — so do not concede it  **5** one you conceded and then reopened',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the immovable thing from the card. B applies the test out loud — **who fixed it, and are they here** — and then either concedes it in the first minute or refuses to. ⚠ **Two rows on each card are movable positions.** **B must not concede them.** Change cards.'));
out.push(table(['Card A – what they will not give', 'Card B – what they will not give'], [
  ['_The November cycle closes their year._', '_The governorate has allocated no registers since 2018._'],
  ['_⚠ The adjuster will not accept fifty-five of fifty-six._', '_⚠ The desk will not run a note over three hundred words._'],
  ['_The regulation does not define register._', '_The handbook requires two readers who do not meet._'],
  ['_⚠ The chair prefers the figure published._', '_⚠ The supervisor will not read drafts before a deadline._'],
  ['_The budget year ends in March._', '_The form has one line for a reason._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the test applied out loud, and the route taken. ⚠ **Rows 2 and 4 on both cards are positions the party could move** — **an adjuster\'s judgement, a desk\'s practice, a chair\'s preference, a supervisor\'s habit** — **and conceding any of them in the first minute gives away the negotiation.** **Rows 1, 3 and 5 are fixed outside the room and all six are free to concede.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your immovable thing** and write the concession in fifteen words or fewer, with _ask_ in it. ⚠ **Then apply the test and be honest**: who fixed it, and were they in the room? **In this class three of ten found that the thing they had treated as immovable was a position** — **and all three had spent a meeting conceding it.**'));
out.push(p('**b**  Swap. Your partner says the concession back to you **slowly and warmly**, and then **flat and fast.** ⚠ **You say which one you would have trusted.** **It is the second, and the room never predicts that.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz said the inspectorate were never going to give her a printed register, because the governorate holds four and has allocated none since 2018 and the inspector cannot allocate one. Mr Shihabi said and last year she asked for one, and twice, in writing, and she spent most of a meeting being told why it was not possible by somebody who agreed with her and could do nothing. Mrs Khoury said that is the cost to put a number on: twenty minutes of a forty-minute meeting spent on a thing nobody in it could change, and the party doing the explaining is the one whose help you came for. Mrs Oueidat said so you say it first, and Mrs Ajouz gave it: the governorate\'s allocation is not yours to change and I shall not ask you to, fifteen words, in the first minute, and the meeting went to the thing she actually wanted. Dr Qabbani said that is sympathy with extra steps, and Mrs Oueidat said it is the opposite and the difference is one word, ask: we understand you have constraints is sympathy and costs nothing, and I shall not ask you to is a commitment. Mrs Tarabishi asked what you get for it, and two things: the time, and the right to be believed about what you do still want, because a party who has given up the impossible thing is not asking for everything. Mr Tayara said and you have to mean it, and you have to mean it for the rest of the year, because a concession made in the first minute and reopened in the fortieth is worse than never making it. Mrs Rizk asked how you know it is really immovable, and one question: who fixed it, and are they in the room? Mr Zahreddine said his was a policy clause and the adjuster wrote it, and then it is movable and conceding it first would have given away the whole file. Mr Attar asked about the tone, and ordinary, with no sympathy in the voice and no pause before it. And Mrs Ajouz said the thing she will take away is who was explaining: the inspector spent twenty minutes telling her why he could not help her, and he was the person she had come to for help, and she had put him there. Mrs Khoury said that is the sentence to carry out of the cycle, because the cost of asking for the impossible thing is paid by the person who cannot give it, and they are usually the only person in the room who wants to help you. And Mrs Tarabishi said the thing she will take away is the test, which is one question and not a judgement: who fixed it, and are they here._'));
out.push(p('**Listener task:** write your partner\'s concession and who fixed the thing it concedes.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Ajouz sent the inspectorate before the February visit. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _to the governorate inspectorate_ · _before the visit of 18 February_ · **11 February**',
  '**The governorate\'s allocation of printed registers is not the inspector\'s to change and I shall not ask him to.** ⚠ **I asked twice last year and most of a meeting went on why it was not possible**, which was twenty minutes of the inspector\'s time spent explaining a decision taken somewhere else.',
  '**What I am asking for instead, and it is one thing.** **That the hand-kept day-book be accepted for the period in which no register has been allocated, and that the acceptance be stated in the visit report rather than in correspondence.** **One sentence, and it is the only request in this note.**',
  '**Why the report and not a letter.** ⚠ **A letter is read once by one person.** **The visit report is what the next inspector reads before arriving** — **and this branch has had four inspectors in six years, each of whom began by asking about the day-book.**',
  '**What the branch has done that is not asked for.** **The nine entries since 2019 are now at the head of every file with their dates.** **Three queries dealt with at the counter are named as absent from the book.** ⚠ **Nothing in the regulation requires either** — **and I am saying so, because a branch that claims compliance it does not owe will be held to it.**',
  '**Where the regulation stands, and I may be wrong.** **It requires a register and does not define one.** **No branch in this governorate has had a hand-kept book accepted and none has had one refused in writing with a reason** — **so there is no practice to follow and no refusal to appeal.**',
  '**What I shall accept, in return for acceptance.** _A record kept by hand carries the date of every entry and the name of the person who made it, in the entry itself._ **That is a principle and it applies to this branch whether or not a register is ever allocated** — **and it is more than the regulation asks.**',
  '**And the thing I shall not ask for, although it is the thing I want most.** ⚠ **One of the four registers the governorate holds.** **It is not his to give and I have said so in the first line** — **and a note that concedes it at the top and asks for it at the bottom is a note the next inspector will read with the top paragraph discounted.**',
  '**One more thing that is not a request and should be in the report.** **The branch has had four inspectors in six years.** ⚠ **Each of the four opened by asking about the day-book, and each was told the same three facts, and none of the four left a written note of having been told.** **That is not a criticism of any of them** — **it is the reason this note asks for the acceptance to be stated in the report rather than in correspondence, and it is the only argument in the note that is about the inspectorate\'s own time rather than about this branch.**',
]));
out.push(item('1', 'What does she concede in the first line, and what did it cost her last year?'));
out.push(item('2', 'Why does she want the acceptance in the visit report rather than in a letter?'));
out.push(item('3', 'What does she refuse to ask for, and why does that matter to the next inspector?'));
out.push(writers([
  'A note with a pre-emptive concession: **the concession in the first line, with _ask_ in it** → **what it cost last time** → **the one thing you are asking for** → **why in that form and not another** → **what you have done that is not required, said as not required** → **where the rule stands** → **the principle offered in return** → **and the thing you will not ask for, named.**',
  '⚠ **The concession is the first line and nothing comes before it.** _The allocation is not the inspector\'s to change and I shall not ask him to._ **A concession that arrives in paragraph three has already been defended** — **and the twenty minutes it was meant to buy have been spent.**',
  '**Cost the last meeting in the other party\'s time.** ⚠ _Twenty minutes of the inspector\'s time spent explaining a decision taken somewhere else._ **Not your time: theirs.** **A reader who sees their own time costed reads the rest as a note from somebody who has thought about them.**',
  '**Say what you have done that is not required, as not required.** ⚠ _Nothing in the regulation requires either, and a branch that claims compliance it does not owe will be held to it._ **It stops goodwill becoming an obligation** — **and nobody writes it untaught.**',
  '⚠ And **name the thing you will not ask for, at the end, and say why.** _A note that concedes it at the top and asks for it at the bottom is a note the next inspector will read with the top paragraph discounted._ **The concession is only worth the twenty minutes if the note contains no trace of the request** — **and naming it is how you prove there is none.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note with a pre-emptive concession in it (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ is not ______________ to change and I shall not ask ______________ to.** ⚠ **I asked ______________ and ______________ went on why it was not possible.**   **What I am asking for instead, and it is one thing.** **______________.** **One sentence, and it is the only request in this note.**   **Why ______________ and not ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The concession in the first line, with _ask_ in it',
  'Their time costed, not yours',
  'One request only, and labelled as the only one',
  'The thing you will not ask for, named at the end',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first line**, and the room says who fixed the thing being conceded and whether they are the reader.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the concession, last time\'s cost, the one request, its form, the unrequired work, the rule, the principle, and what you will not ask for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the concession first, their time costed, one request only, and nothing asked for that was conceded.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One question round the room and one number on the board: how many found that their immovable thing was a position after all?** ⚠ **In this class, three of ten** — **and all three had spent a meeting conceding something the other party could have given.** **Then Mrs Ajouz\'s sentence: the inspector spent twenty minutes telling her why he could not help her, and she had put him there.**'));
out.push(hw('Write **the concession in fifteen words**, with _ask_ in it, and then test it: ⚠ **name the person who fixed the thing, and say whether they will be in the room.** **If they will be, it is not a pre-emptive concession and you have nearly given away your negotiation.** **Bring the sentence and the name.** **14.5 says what you will not trade and why it is not negotiable**, so bring the one thing you would walk out over.'));

// ===================== 14.5 =====================
out.push(pb());
out.push(h2('14.5  What you will not trade'));
out.push(p('**Function:** saying what you will not trade, and why it is not negotiable   ·   **Grammar:** the limit declared in advance, which is the only honest form of it   ·   **Pronunciation:** a limit said once, with no emphasis added the second time'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the one thing in your negotiation you would not trade.** ⚠ **And then the harder half: why not.** **In most classes five of the ten give a reason that is about themselves** — _I would not be comfortable_ — **and five give a reason about a document or a person who is not in the room, and only the second kind holds.**'));
out.push(board('And the exclusion on all fifty-six positions?', 'Not mine to give. One position was not measured.'));
out.push(p('**b**  Which two limits are not negotiable, as stated? **1** _I would not be comfortable agreeing the figure of forty._  **2** _The exclusion cannot cover a position nobody measured; the opinion says it was not reached._  **3** _I am not prepared to drop the denominator._  **4** _A figure published without its denominator would be quoted without it, and I cannot undertake that it would not._  **5** _That is simply not something I am willing to do._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a real limit rests on?   **A** the negotiator\'s firmness   **B** **something outside the negotiator** — a document, a measurement, a person who is not present   **C** the importance of the point'));
out.push(p('**b**  Listen again. **1** What is Mrs Oueidat\'s limit, and what does it rest on?   **2** What does Mrs Khoury say happens to a limit stated twice with more emphasis?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.9  Declared once, and not reinforced', [
  ['Ms Huda', 'Mrs Oueidat — the one thing you will not trade.'],
  ['Mrs Oueidat', '⚠ **I will not render a covering line as though the court had heard it.** **It was filed and not read, and the record is the record.**'],
  ['Mr Shihabi', 'Has anybody asked you to?'],
  ['Mrs Oueidat', '⚠ **Twice, and neither time as a request.** **Both times it was offered as a convenience** — _it would be simpler if the summary said the line was before the court_ — **and simpler is exactly what it would be.**'],
  ['Mrs Khoury', '⚠ **And the room should notice what makes her limit hold, because it is not that she feels strongly.** **The limit rests on something outside her: the record.** **_I would not be comfortable_ rests on her** — **and a limit that rests on the negotiator can be worn down by the negotiation, which is what a negotiation is for.**'],
  ['Dr Qabbani', 'So you give the reason.'],
  ['Mrs Oueidat', '⚠ **Once, in advance, and in the same sentence.** _I will not render it as heard; the record says it was filed and not read._ **Sixteen words.** **The reason is not a justification, it is the limit** — **and a limit without its reason is a preference.**'],
  ['Mrs Tarabishi', 'In advance? Before anybody asks?'],
  ['Mrs Khoury', '⚠ **In advance, and this is the part the room will resist.** **A limit declared at the start is information.** **A limit produced at minute thirty-five is a refusal** — **and the same sentence does both, which the class has now seen four times in two units.**'],
  ['Mr Tayara', 'And if they come back to it?'],
  ['Mrs Oueidat', '⚠ **The same words, and no more emphasis.** **Not _as I said_, not _as I have already explained_** — **those are both complaints about the other party\'s memory, and a party who is accused of forgetting defends the forgetting.**'],
  ['Mrs Ajouz', 'What does more emphasis do?'],
  ['Mrs Khoury', '⚠ **It converts the limit into a position, and positions are negotiable.** **A limit stated twice, the second time harder, has told the other side that pressure changes something** — **and the thing it changes is your voice, which is the first thing to change and never the last.**'],
  ['Mr Zahreddine', 'Mine is a position and I know it.'],
  ['Mrs Oueidat', '⚠ **Then say so and trade it late, which is honest and is also better tactics.** **A party who declares two limits and one of them is really a preference will lose both** — **because the other side finds the soft one and then tests the hard one in the same way.**'],
  ['Mr Attar', 'How many limits can you have?'],
  ['Mrs Khoury', '⚠ **One is credible, two is defensible, three is a list of demands.** **In this class the students with one limit kept it and the two students with three kept none** — **and that is not a rule about generosity, it is about what a limit means: the thing that is not on the table, and a table with three things off it is not a table.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is _simpler_.** **Nobody has ever asked me to misrender anything.** **Twice somebody has offered me a simplification, kindly, in a corridor** — **and both times the simpler version was a sentence the court never heard.**'],
]));
out.push(sp());
out.push(box('Language box – the declared limit', [
  '**A limit rests on something outside you.** ⚠ **A document, a measurement, a person who is not present.** _The record says it was filed and not read._ **_I would not be comfortable_ rests on you** — **and a limit that rests on the negotiator can be worn down by the negotiation, which is what a negotiation is for.**',
  '**The reason is the limit and not a justification for it.** ⚠ _I will not render it as heard; the record says it was filed and not read._ **Sixteen words, one sentence.** **A limit without its reason is a preference** — **and a preference is a thing a reasonable party expects to be traded.**',
  '**Declare it in advance.** ⚠ **A limit declared at the start is information.** **A limit produced at minute thirty-five is a refusal** — **and the same sentence does both, depending only on when it arrives.**',
  '**When they come back to it, the same words and no more emphasis.** ⚠ **Not _as I said_, not _as I have already explained_** — **both are complaints about the other party\'s memory, and a party accused of forgetting defends the forgetting.** **More emphasis converts a limit into a position**, and positions are negotiable.',
  '**One is credible, two is defensible, three is a list of demands.** ⚠ **In this class the students with one limit kept it and the two with three kept none.** **A limit is the thing that is not on the table** — **and a table with three things off it is not a table.**',
  '**And where your limit is really a preference, say so and trade it late.** ⚠ **A party who declares two limits and one of them is a preference will lose both**, because the other side finds the soft one and then tests the hard one the same way.',
  '**Pronunciation.** 🔊 **Track 14.10** **Say the limit, then say it again a minute later at the same volume and speed.** ⚠ **Record it.** **The second version is almost always louder and slower**, and both changes read as a position being defended. **Same words, same speed, and then stop** — **the stop is what makes it a limit.**',
  '**Practise:** Declare the limit, with its reason. **1** one resting on a record  **2** one resting on a measurement  **3** one resting on somebody absent  **4** a preference, named as one  **5** the same limit restated, with nothing added',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A offers the convenience from the card. B declares the limit **with its reason, in one sentence**, and then restates it unchanged when A asks again. ⚠ **Two rows on each card are preferences dressed as limits** — **and there B names them as preferences and trades them late.** Change cards.'));
out.push(table(['Card A – the convenience offered', 'Card B – the convenience offered'], [
  ['_It would be simpler if the summary said the line was before the court._', '_It would be easier if the exclusion covered all fifty-six positions._'],
  ['_⚠ It would help if the figure went out without the annexe._', '_⚠ It would be tidier if the three counter queries were not mentioned._'],
  ['_Could the return figure just be given as about forty?_', '_Could the date be given as the fourth rather than the sixth?_'],
  ['_⚠ Could the covering note lose the second absence?_', '_⚠ Could the note go out under the branch\'s name rather than yours?_'],
  ['_Could the register be described as maintained?_', '_Could the day-book be called a register in the report?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** what the limit rests on, and whether the restatement changed. ⚠ **Rows 2 and 4 on both cards are preferences** — **an annexe, a mention, an absence, a name on a note** — **and all four are tradable and should be named as tradable, late.** **Rows 1, 3 and 5 all rest on records or measurements and all six are limits.** **The listener counts the words of each restatement**: any increase is a position.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your one thing** and write the limit with its reason in one sentence. ⚠ **Then test the reason: does it rest on you, or on something outside you?** **In this class five of ten first versions rested on the writer** — **and the repair is always to find the document, the measurement or the absent person that the feeling is actually about.**'));
out.push(p('**b**  Swap. Your partner offers the convenience **three times**, each time more reasonably. ⚠ **You give the same sentence three times and then stop.** **They will tell you which restatement grew** — **and if none did, they tell you whether the third refusal sounded like the first, because in this class it rarely has.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat will not render a covering line as though the court had heard it, because it was filed and not read and the record is the record. Mr Shihabi asked whether anybody has asked her to, and twice, and neither time as a request: both times it was offered as a convenience, that it would be simpler if the summary said the line was before the court, and simpler is exactly what it would be. Mrs Khoury said what makes her limit hold is not that she feels strongly: the limit rests on something outside her, which is the record, and I would not be comfortable rests on her, and a limit that rests on the negotiator can be worn down by the negotiation. Dr Qabbani said so you give the reason, and once, in advance, and in the same sentence: I will not render it as heard, the record says it was filed and not read, sixteen words, and the reason is not a justification but the limit itself. Mrs Tarabishi asked in advance, before anybody asks, and in advance, because a limit declared at the start is information and a limit produced at minute thirty-five is a refusal. Mr Tayara asked what happens if they come back to it, and the same words and no more emphasis, not as I said and not as I have already explained, because those are complaints about the other party\'s memory. Mrs Ajouz asked what more emphasis does, and Mrs Khoury said it converts the limit into a position, and positions are negotiable: a limit stated twice, the second time harder, has told the other side that pressure changes something. Mr Zahreddine said his is a position and he knows it, and then say so and trade it late, which is honest and better tactics. Mr Attar asked how many limits you can have, and one is credible, two is defensible, three is a list of demands: the students with one limit kept it and the two with three kept none. And Mrs Oueidat said the thing she will take away is the word simpler: nobody has ever asked her to misrender anything, and twice somebody has offered her a simplification, kindly, in a corridor, and both times the simpler version was a sentence the court never heard. Mrs Khoury said the word is the whole of the cycle, because nobody in a corridor thinks they are asking for a misrendering, and a limit that has to assume bad faith will not survive a kind offer. And Mrs Rizk said the thing she will take away is that her own limit rested on herself, and she had not noticed until it was said out loud._'));
out.push(p('**Listener task:** write your partner\'s limit and what it rests on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat filed with the registry. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note to the registrar_ · _what a rendering will and will not state_ · **14 February**',
  '**I will not render a covering line as though it had been read into the record; the record states that it was filed.** ⚠ **That is the one thing in my work that is not negotiable and I am writing it down in advance rather than producing it when it is next asked for.**',
  '**What has actually been asked, twice, and in neither case as a request.** **Both times it was offered as a convenience, in a corridor, kindly** — _it would be simpler if the summary said the line was before the court_. **And it would be simpler.** **The summary would be shorter, the parties would not have to be told, and nobody would be misled on purpose.**',
  '**Why it still cannot be done.** **The record is the only thing in a court that outlasts everybody in it.** ⚠ **A summary that says a line was before the court is evidence that it was** — **and in eighteen months a different judge reads the summary and not the file, which is the whole reason a covering line is worth filing at all.**',
  '**What is negotiable, and I want it in the same note so that the limit is not read as a general refusal.** **The length of a summary.** **Whether a covering line is quoted or paraphrased.** **Whether it goes at the head or the foot.** **Which of two renderings of a disputed term is used, where both are defensible.** ⚠ **Four things, all of them real, and I have traded three of the four this year.**',
  '**The principle I would offer in return for acceptance of the limit.** _A covering line is summarised in the words of the file and its status is given in the same sentence._ **Which gives the registry a shorter summary than it has now** — **and states the status, which is the whole of what I will not give up.**',
  '**One thing about myself that belongs in this note.** ⚠ **I have twice said _I would not be comfortable_ when asked about this**, and that is a bad answer and it nearly cost me the point: a comfort can be argued with, accommodated and eventually worn through. **The record cannot.**',
  '**And what I am not going to write, although the registrar\'s note invites it.** **That the suggestion was improper.** ⚠ **It was not.** **It was offered by somebody trying to shorten a document** — **and a note that treats a convenience as a professional complaint will produce an apology and no change in practice.**',
  '**What I should like the registry to take from this, if anybody reads it.** **Nothing about me.** ⚠ **One procedural fact: a covering line that is filed and not circulated produces a question at a hearing between eighteen and twenty-four months later**, and the file is the only place that interval is visible. **The limit above is mine and the interval is the registry\'s** — **and of the two, the interval is the one that can be fixed by somebody other than the person who wrote the line.**',
]));
out.push(item('1', 'What has actually been asked of her, and in what form?'));
out.push(item('2', 'What does she say is negotiable, and why is it in the same note?'));
out.push(item('3', 'What does she record about her own earlier answers, and why is it a bad answer?'));
out.push(writers([
  'A note declaring a limit: **the limit and its reason in the first sentence** → **what has actually been asked, and in what form** → **why it still cannot be done, with the time-scale** → **what is negotiable, in the same note** → **the principle offered in return** → **one thing about yourself** → **and what you are not going to write.**',
  '⚠ **Put what is negotiable in the same note as the limit.** _Four things, all of them real, and I have traded three of the four this year._ **A note containing only a limit is read as a general refusal** — **and the list of what is tradable is what proves the limit is a limit and not a temperament.**',
  '**Concede that the convenience was reasonable.** ⚠ _And it would be simpler. The summary would be shorter, and nobody would be misled on purpose._ **A limit that has to pretend the other party acted badly is a weak limit** — **and this paragraph is what makes the rest unanswerable.**',
  '**Give the time-scale, because it is what the reader has not thought about.** ⚠ _In eighteen months a different judge reads the summary and not the file._ **A limit about a record needs the interval in it**, or it reads as a point of procedure rather than a point about what survives.',
  '⚠ And **record your own bad answer.** _I have twice said "I would not be comfortable", and that is a bad answer and it nearly cost me the point._ **A comfort can be argued with, accommodated and worn through; a record cannot** — **and a note that reports the writer\'s own weak version is the only kind anybody learns the strong version from.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note declaring your own limit (120 words or more).'));
out.push(p('**______________** · _note to _______________ · _______________ · **______________**   **I will not ______________; ______________.** ⚠ **That is the one thing in my work that is not negotiable and I am writing it down in advance.**   **What has actually been asked, and in neither case as a request.** **______________.** **And it would be ______________.**   **Why it still cannot be done.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The limit and its reason in one sentence',
  'The reason rests on something outside you',
  'What is negotiable, in the same note',
  'The convenience conceded as reasonable',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their limit**, and the room says what it rests on and whether that thing is outside the writer.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the limit and its reason, what was asked, why not, what is negotiable, the principle, your own bad answer, and what you refuse to write.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reason outside the writer, the tradable list present, and the convenience conceded as reasonable.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student declares their limit and the room offers the convenience three times, each time more reasonably.** ⚠ **The room counts the words of each restatement.** **Any increase is a position.** **In this class the third version has grown in seven of ten cases, always by a clause of justification.** **Then Mrs Oueidat\'s word: nobody has ever asked her to misrender anything, and twice somebody has offered her a simplification, kindly, in a corridor.**'));
out.push(hw('Write **your limit and its reason in one sentence**, and then do the test that matters: ⚠ **underline the thing the reason rests on and say whether it is outside you.** **If it is not, find the document, the measurement or the absent person the feeling is about** — **and if there is none, the limit is a preference and the honest thing is to say so.** **Bring both versions.** **14.6 writes the report of a negotiation in which both parties were reasonable**, so bring your own minute or your own notes.'));

// ===================== 14.6 =====================
out.push(h2('14.6  The report in which nobody is the villain'));
out.push(p('**Function:** writing the report of a negotiation in which both parties were reasonable   ·   **Grammar:** **Writing Part 2 (report)** · neither side made the villain   ·   **Pronunciation:** reading a report of your own meeting without defending yourself'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **who reads the report of your negotiation, and what they will do with it.** ⚠ **The reader and the action.** **In most classes eight of the ten reports go to somebody who was not at the meeting and who will decide something** — **and two go to a file, which is a different genre and 14.6b names it.**'));
out.push(board('Who reads this, and what do they decide?', 'And which party are they not?'));
out.push(p('**b**  Which two sentences belong in a report where both parties were reasonable? **1** _The regional office eventually accepted the return figure._  **2** _The regional office\'s figure of four was arrived at before the tolerance was excluded, and the office said so._  **3** _Despite some initial resistance, agreement was reached._  **4** _Both parties came with a reason for the date they wanted, and the reasons are set out at 3 below._  **5** _It became clear that our position was the stronger one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the report must not do?   **A** take sides   **B** **make either party the one who gave way** — because the reader will act on the report and not on the meeting, and a party recorded as having given way will not give way again   **C** record disagreements'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say the three words to strike are?   **2** What does Mr Tayara say he found in his own first draft?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.11  Nobody gave way', [
  ['Ms Huda', 'Mrs Khoury — the report of a negotiation. What is the first thing to strike?'],
  ['Mrs Khoury', '⚠ **Three words, and they are in almost every first draft.** **_Eventually_, _despite_ and _accepted_.**'],
  ['Mr Attar', 'Those are neutral words.'],
  ['Mrs Khoury', '⚠ **None of the three is neutral and the room should take them one at a time.** **_Eventually_ says somebody held out.** **_Despite_ says somebody resisted.** **_Accepted_ says somebody was right and somebody came round** — **and a reader who was not in the room learns from those three words which party gave way.**'],
  ['Mrs Oueidat', 'And why does that matter to the reader?'],
  ['Mrs Khoury', '⚠ **It does not matter to the reader at all, which is the point.** **It matters to the next meeting.** **A party recorded as having given way will not give way again** — **and the report is read by their office before the next negotiation, which is the only audience that will act on the word _eventually_.**'],
  ['Mr Tayara', 'My first draft had all three.'],
  ['Mr Tayara', '⚠ **And something worse.** **I had written _the directorate conceded the arithmetic_** — **and the directorate did not concede anything: they read the annexe and it was right, which is not a concession, it is reading.**'],
  ['Dr Qabbani', 'So what goes in instead?'],
  ['Mrs Oueidat', '⚠ **What each party had, and where it is.** _Both parties came with a reason for the date they wanted, and the reasons are set out at 3._ **No verb of surrender anywhere** — **and a reader who wants to know who was right can read paragraph 3 and decide, which is what a reader is for.**'],
  ['Mrs Tarabishi', 'That sounds evasive.'],
  ['Mrs Khoury', '⚠ **It is the opposite, and the test settles it.** **An evasive report leaves out what happened.** **This one records everything that happened and no opinion about who deserved it** — **and the room should notice that the second is harder to write and shorter.**'],
  ['Mrs Rizk', 'What about a correction? Theirs was wrong about the four pallets.'],
  ['Mrs Oueidat', '⚠ **Record that they corrected it, and record that they corrected it.** _The office\'s figure of four was arrived at before the tolerance was excluded, and the office said so._ **The second clause is the one that costs nothing and buys the next meeting** — **and leaving it out turns a correction into a defeat.**'],
  ['Mrs Ajouz', 'And where nobody corrected anything?'],
  ['Mrs Khoury', '⚠ **Then the disagreement is recorded as a disagreement, which is 14.2 and is the easiest paragraph in the genre.** **Both positions, the absence of a definition, and no resolution** — **and a reader who finds that in a report trusts the rest of it.**'],
  ['Mr Zahreddine', 'Is there ever a villain?'],
  ['Mrs Oueidat', '⚠ **There is sometimes a system, and never a party.** **_The covering line was filed and not circulated_ names a practice and nobody\'s judgement** — **and in this class the five reports that named a system were acted on and the three that named a party produced replies about the naming.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is _conceded_.** **I used it about a directorate that had simply read my annexe**, and if the report had gone as drafted, somebody in that office would have read it before our next meeting.'],
]));
out.push(sp());
out.push(box('Language box – the report with no villain', [
  '**Three words to strike, and they are in almost every first draft.** ⚠ **_Eventually_ says somebody held out.** **_Despite_ says somebody resisted.** **_Accepted_ says somebody was right and somebody came round.** **None is neutral, and a reader who was not there learns from them which party gave way.**',
  '**It does not matter to your reader and it matters to the next meeting.** ⚠ **A party recorded as having given way will not give way again** — **and the report is read by their office before the next negotiation, which is the only audience that will act on _eventually_.**',
  '**What goes in instead: what each party had, and where it is.** ⚠ _Both parties came with a reason for the date they wanted, and the reasons are set out at 3._ **No verb of surrender anywhere.** **A reader who wants to know who was right reads paragraph 3 and decides** — **which is what a reader is for.**',
  '**_Read_ is not _conceded_.** ⚠ **A party who reads your annexe and finds it right has not conceded anything.** **This is the commonest single error in the genre** — **and it is worth striking in the first draft of every report in this class, because the verb arrives automatically.**',
  '**Record a correction twice: the correction, and that they made it.** ⚠ _The office\'s figure of four was arrived at before the tolerance was excluded, and the office said so._ **The second clause costs nothing and buys the next meeting** — **and leaving it out turns a correction into a defeat.**',
  '**There is sometimes a system and never a party.** ⚠ _The covering line was filed and not circulated._ **That names a practice and nobody\'s judgement.** **In this class the five reports that named a system were acted on and the three that named a party produced replies about the naming** — **which is the arithmetic of the whole cycle.**',
  '**Pronunciation.** 🔊 **Track 14.12** **Read your own report aloud and stop at every verb.** ⚠ **Say each one on its own, flat, and ask whether it has a winner in it.** **_Accepted_, _conceded_, _agreed to_, _came round_, _was persuaded_** — **five verbs, and a report containing any of them has a villain in it whether the writer intended one or not.**',
  '**Practise:** Rewrite it without a villain. **1** _eventually accepted_  **2** _despite resistance_  **3** _conceded the arithmetic_  **4** a correction the other party made  **5** a disagreement that was not resolved',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B rewrites it **with no verb of surrender**, out loud. ⚠ **Two rows on each card have no villain in them already** — **and there B says so and changes nothing.** Change cards.'));
out.push(table(['Card A – from a first draft', 'Card B – from a first draft'], [
  ['_The regional office eventually accepted the return figure._', '_Despite initial resistance, agreement was reached on the date._'],
  ['_⚠ Both parties came with a reason for the date they wanted._', '_⚠ The regulation does not define register and the parties disagree._'],
  ['_The directorate conceded the arithmetic._', '_The inspector came round to the branch\'s view._'],
  ['_⚠ The office\'s figure was arrived at before the tolerance was excluded, and the office said so._', '_⚠ The covering line was filed and not circulated._'],
  ['_It became clear that our position was the stronger._', '_The branch was obliged to concede the point about the counter queries._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the verb that was struck, and what replaced it. ⚠ **Rows 2 and 4 on both cards are already clean** — **two reasons, an undefined word, a correction attributed to its maker, and a practice named without a judgement** — **and B changes nothing.** **Rows 5 are the worst on either card and the room will try to soften them**: the repair is not a gentler verb but a different sentence, which says what each party had.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own notes of the meeting** and write the first paragraph of the report. ⚠ **Then read it aloud and stop at every verb**, and strike any that has a winner in it. **In this class the first paragraph has lost between one and four verbs** — **and the commonest single word struck has been _accepted_, which nobody in the room wrote on purpose.**'));
out.push(p('**b**  Swap. Your partner reads your paragraph and says **which party gave way.** ⚠ **If they can tell, the paragraph is not finished.** **If they cannot tell and can still say what each party wanted, it is.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury said the first thing to strike in the report of a negotiation is three words that are in almost every first draft: eventually, despite and accepted. Mr Attar said those are neutral words, and none of the three is neutral: eventually says somebody held out, despite says somebody resisted, and accepted says somebody was right and somebody came round, and a reader who was not in the room learns from them which party gave way. Mrs Oueidat asked why that matters to the reader, and it does not matter to the reader at all, which is the point: it matters to the next meeting, because a party recorded as having given way will not give way again, and the report is read by their office before the next negotiation. Mr Tayara said his first draft had all three, and something worse: he had written that the directorate conceded the arithmetic, and the directorate did not concede anything, they read the annexe and it was right, which is not a concession but reading. Dr Qabbani asked what goes in instead, and Mrs Oueidat said what each party had and where it is: both parties came with a reason for the date they wanted, and the reasons are set out at 3, with no verb of surrender anywhere. Mrs Tarabishi said that sounds evasive, and it is the opposite, because an evasive report leaves out what happened and this one records everything and no opinion about who deserved it. Mrs Rizk asked about a correction, since theirs was wrong about the four pallets, and record that they corrected it and record that they corrected it: the second clause costs nothing and buys the next meeting. Mrs Ajouz asked about where nobody corrected anything, and then the disagreement is recorded as a disagreement, with both positions, the absence of a definition and no resolution. Mr Zahreddine asked whether there is ever a villain, and there is sometimes a system and never a party: the five reports in this class that named a system were acted on and the three that named a party produced replies about the naming. And Mr Tayara said the thing he will take away is the word conceded: he used it about a directorate that had simply read his annexe, and if the report had gone as drafted somebody in that office would have read it before their next meeting. Mrs Khoury said that is the audience nobody writes for, because a report is written for the reader who decides and read by the party it describes. And Mrs Oueidat said the thing she will take away is that the verb arrives by itself: nobody chooses conceded, and the only defence is to stop at every verb and say it out loud._'));
out.push(p('**Listener task:** write the verb your partner struck and the sentence that replaced it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the report Mr Tayara sent the school board. Answer the questions.'));
out.push(model([
  '**REPORT · the timetable meeting of 4 February** · _for the school board_ · **6 February**',
  '**1 · What the meeting was for.** **To settle whether the afternoon session can be timetabled in two rooms, and to establish what the directorate requires before it will consider an amendment.** **Both questions were reached, and the meeting ran for fifty minutes against an hour allowed, with the sort put in the first minute and the governorate figure produced in the thirty-first.**',
  '**2 · The papers before the meeting.** **The arithmetic of the double session, sent on 4 January.** **The two requests of 2017, supplied at the directorate\'s request on 26 January.** ⚠ **The governorate figure for second-session pupils, which the directorate holds and which was produced in the meeting itself.**',
  '**3 · What each party wanted, and why.** **The school wants two rooms used in sequence, because four hundred and ten pupils and two rooms is the whole of the constraint.** **The directorate wants the governorate figure in any submission, because its own cycle requires a governorate comparison.** ⚠ **Neither reason was known to the other party before the meeting and both are good.**',
  '**4 · What was settled, as a principle.** _A school submission carries the governorate comparison where the directorate supplies the figure, in return for which the directorate will consider an amendment on the school\'s own arithmetic alone._ **Both parties noted that this works in either direction.**',
  '**5 · The arithmetic.** **The directorate read the annexe and agrees the figures.** ⚠ **It had not previously had them in that form.** **The governorate figure, produced in the meeting, is four thousand one hundred and eighty across the governorate** — **and the school\'s four hundred and ten is nine point eight per cent of it, which neither party had calculated.**',
  '**6 · What was not settled.** **Whether a double session counts as one session for the purposes of the cycle.** **The regulation does not define _session_.** **The parties disagree, the disagreement is about what each wants the word to cover, and it is recorded so that the next meeting does not rediscover it.**',
  '**7 · Actions.** **The directorate to supply the governorate figure annually by 1 December.** **The school to submit on its own arithmetic by 1 February.** **No other action.**',
  '**8 · One sentence about this report.** ⚠ **An earlier draft said the directorate conceded the arithmetic.** **It did not: it read the annexe, which it had not previously been sent in that form** — **and the difference between those two sentences is what the next meeting will start from.**',
  '**9 · One thing the board should have that was not on the agenda.** **The governorate figure the directorate produced in the meeting has never been sent to this school and is not published anywhere.** ⚠ **Four thousand one hundred and eighty, for the year to September.** **The directorate holds it annually and item 7 now requires it by 1 December**, which means the school can compare itself with the governorate for the first time in nine years — **and that is worth more to the board than the amendment this meeting was called about.**',
]));
out.push(item('1', 'What does paragraph 3 do that most reports of a negotiation do not?'));
out.push(item('2', 'What is recorded in paragraph 6, and why?'));
out.push(item('3', 'What does paragraph 8 correct, and what does he say the difference amounts to?'));
out.push(writers([
  'A report where both parties were reasonable: **what the meeting was for** → **the papers, with dates and who produced each** → **what each party wanted and why, with both reasons called good** → **what was settled, as a principle** → **the arithmetic, with any figure neither party had** → **what was not settled** → **actions with names and dates** → **and one sentence about the report itself.**',
  '⚠ **Say that both reasons are good, in those words.** _Neither reason was known to the other party before the meeting and both are good._ **That sentence is the whole genre in fourteen words** — **and a report without it will be read as neutral prose hiding a verdict, because that is what most reports are.**',
  '**Name who produced each paper and when.** ⚠ _The governorate figure, which the directorate holds and which was produced in the meeting itself._ **A paper produced in a meeting and one sent beforehand do different work** — **and a report that records only the papers hides the fact that explains the first twenty minutes.**',
  '**Record the figure neither party had.** ⚠ _Nine point eight per cent, which neither party had calculated._ **A negotiation that produces a new figure has produced something** — **and the board reading this report now has an arithmetic nobody in the meeting arrived with.**',
  '⚠ And **correct your own draft in the report.** _An earlier draft said the directorate conceded the arithmetic. It did not: it read the annexe._ **This is the one place in the series where a writer prints their own struck verb** — **and it is here because the verb arrives automatically and the reader of the next report needs to know that.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the report of your own negotiation (120 words or more).'));
out.push(p('**REPORT · ______________** · _for _______________ · **______________**   **1 · What the meeting was for.** **______________.**   **2 · The papers before the meeting.** **______________.** ⚠ **______________, which was produced in the meeting itself.**   **3 · What each party wanted, and why.** **______________ wants ______________, because ______________.** **______________ wants ______________, because ______________.** ⚠ **Neither reason was known to the other party before the meeting and both are good.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both reasons given, and both called good',
  'No verb of surrender anywhere',
  'Each paper with who produced it and when',
  'What was not settled, recorded as not settled',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only paragraph 3**, and the room says which party it would have decided for, and whether it can tell.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole report (260 to 300 words — and this is a band and not a minimum), to the shape in the writer\'s box: purpose, papers, both reasons, the principle, the arithmetic, what was not settled, actions, and one sentence about the report.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both reasons called good, no verb of surrender, and the new figure recorded.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Every student reads their own first paragraph aloud, stopping at every verb.** ⚠ **The room says, for each verb, whether it has a winner in it.** **In this class the first paragraphs have lost between one and four verbs and the commonest word struck has been _accepted_.** **Then Mr Tayara\'s sentence: he used _conceded_ about a directorate that had simply read his annexe, and somebody in that office would have read it before their next meeting.**'));
out.push(hw('Write **the whole report, 260 to 300 words**, and then do the verb pass: ⚠ **read it aloud, stop at every verb, and strike any that has a winner in it.** **Then give it to somebody who was not at the meeting and ask them which party gave way.** **If they can tell you, the report is not finished.** **Bring the report and what they said.** **14.7 mediates between two reasonable accounts of the same meeting**, and carries **Reading Part 6**, **Writing Part 2** and **Listening Part 2**.'));

// ===================== 14.7 =====================
out.push(h2('14.7  Review & Mediate: two reasonable accounts of one meeting'));
out.push(p('**Function:** mediating between two reasonable accounts of the same meeting   ·   **Recycling:** Unit 14   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 6 · Writing Part 2 (a report) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 14 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Inspections should follow the rebuild, in return of which we will work to your cycle.  **2** Since a second opinion is available, I am asking you accept the exclusion.  **3** The allocation is not yours to change and I shall not ask you.  **4** I will not render it as heard; the record says that it was filed and not read it.  **5** Both parties came with a reason for the date which they wanted.  **6** The office figure of four was arrived before the tolerance was excluded.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two accounts and the question.'));
out.push(box(null, [
  '**TWO ACCOUNTS OF THE MEETING OF 4 FEBRUARY** _(the branch and the regional office; both were written on 5 February, neither has seen the other)_',
  '**The branch\'s account.** _"The sort was put in the first minute and the meeting took thirty-five minutes. Two of the four differences were settled by documents the branch had requested. Two principles were agreed, both of which apply in either direction."_',
  '**The regional office\'s account.** _"The branch had asked for the March return before the meeting, which meant the figure could not be discussed until it arrived. Of the two principles recorded, one was proposed by this office in the meeting and is recorded as arrived at by neither party."_',
  '**Mrs Rizk.** _"Both of those are true and the second one is a complaint."_',
  '**The regional officer, afterwards.** _"It is not a complaint. We proposed the publication principle and the minute gives us no credit for it, and the minute is what my director reads."_',
  '⚠ **Both accounts are accurate and neither is complete.**',
  '**And the thing neither party has noticed.** **The minute says the publication principle was _proposed by neither party before the meeting_, which is true and reads as though nobody proposed it at all.** **The regional office proposed it in the meeting, in about four minutes** — **and the branch wrote the clause to avoid claiming credit and produced a sentence that denies it to everybody.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 14.13  The clause that denies it to everybody', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **Nobody.** **The minute gets an amendment, and it is one clause.**'],
  ['Mrs Rizk', 'Not a letter to the officer?'],
  ['Mrs Khoury', '⚠ **A letter would explain a sentence to the person who is complaining about it, and the sentence is in a document his director reads.** **The complaint is about the record** — **and a complaint about a record is answered by the record.**'],
  ['Mrs Oueidat', 'So the clause goes.'],
  ['Mrs Rizk', '⚠ **_Proposed by neither party before the meeting_ becomes _proposed by the regional office in the meeting_.** **Eight words for eight words, and his director reads the second one.**'],
  ['Dr Qabbani', 'Why was the first version written at all?'],
  ['Mrs Rizk', '⚠ **Because I was trying not to claim it.** **I knew it was not mine and I wrote a clause that said so** — **and _by neither party before the meeting_ is accurate, and it denies the credit to everybody including the party that earned it.**'],
  ['Mrs Khoury', '⚠ **Which is the finding of the cycle and it is not about modesty.** **A report that avoids claiming credit has not thereby given it to anybody.** **Credit is a positive act in a record** — **and a writer who only declines to take it leaves the record saying that nothing happened.**'],
  ['Mr Tayara', 'And the branch\'s own account is incomplete too.'],
  ['Mrs Oueidat', '⚠ **It says two differences were settled by documents the branch had requested, which is true and leaves out that requesting them delayed the figure by three days.** **The regional office\'s account carries that and the branch\'s does not** — **and neither party is being unfair: each has written down what they did.**'],
  ['Mrs Tarabishi', 'So both accounts need the other.'],
  ['Mrs Khoury', '⚠ **Both accounts are what each party can see, and that is not a failing of either.** **The useful move is not to reconcile them** — **it is to find the one sentence in the record that is wrong because of what neither party could see.** **There is one, and it is the clause.**'],
  ['Mrs Ajouz', 'And the delay? Does that go in?'],
  ['Mrs Rizk', '⚠ **It goes in because it is mine.** _The return was requested on 1 February and received on 3 February, and the figure was not discussed before it arrived._ **Which is 14.6: the paper, who produced it, and when** — **and it records a three-day delay that was my decision and a good one.**'],
  ['Mr Zahreddine', 'Does the officer come out of it well?'],
  ['Mrs Oueidat', '⚠ **He comes out of it as the party who proposed the principle and said so when the record did not.** **Nobody had to tell Mrs Rizk that** — **and a writer who amends a minute on being told has made the next correction easy to give.**'],
  ['Mr Attar', 'Is an amendment not an admission?'],
  ['Mrs Khoury', '⚠ **An amendment within a fortnight is a correction and an amendment after six months is an admission, and that is the whole difference.** **The minute was circulated on 5 February and this is the eighth** — **and a record corrected in three days is a record both parties will trust for four years.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is that I was being careful.** **I wrote the clause to avoid taking credit I had not earned**, and the careful version denied it to the man who had.'],
]));
out.push(sp());
out.push(box('Language box – mediating between two accounts', [
  '**The three moves, unchanged since 1.7, and here they apply to a record rather than to a person.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Both accounts are what each party could see, and that is not a failing of either.** ⚠ **Do not try to reconcile them.** **Find the one sentence in the record that is wrong because of what neither party could see** — **and in this case there is exactly one, and it is a clause of eight words.**',
  '**Declining credit is not giving it.** ⚠ _Proposed by neither party before the meeting_ **is accurate and denies the credit to everybody.** **Credit is a positive act in a record** — **and a writer who only declines to take it has left the record saying that nothing happened.**',
  '**A complaint about a record is answered by the record.** ⚠ **Not by a letter.** **A letter explains a sentence to the person complaining about it, and the sentence stays where his director reads it** — **so the amendment is the answer and the letter is a courtesy at most.**',
  '**Put your own delay in, because it is yours.** ⚠ _The return was requested on 1 February and received on 3 February, and the figure was not discussed before it arrived._ **That records a three-day delay that was a decision and a good one** — **and a record that carries only the writer\'s good decisions is a record the other party will annotate.**',
  '**And the arithmetic of timing.** ⚠ **An amendment within a fortnight is a correction; after six months it is an admission.** **Three days is a correction** — **and a record corrected in three days is one both parties will trust for four years.**',
  '**Pronunciation.** 🔊 **Track 14.14** **Say _proposed by the regional office in the meeting_ with no stress on _regional office_.** ⚠ **Stress there makes the amendment a concession to somebody.** **Flat, it is a fact about who proposed what** — **and the amendment is a record and not an apology, which is why it does not need a voice.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the two accounts from the card. B names **the one sentence in the record that is wrong because of what neither party could see**, gives the amendment, and says **what goes in that is the writer\'s own.** ⚠ **On one of the two cards the record is already right and the two accounts simply differ.** **B must find that.** Change roles with the other pair.'));
out.push(table(['Pair A – the branch and the regional office', 'Pair B – the school and the directorate'], [
  ['_"Two principles were agreed, both of which apply in either direction."_', '_"The directorate read the annexe and agrees the figures."_'],
  ['_"One was proposed by this office in the meeting."_', '_"The annexe had not previously been supplied in that form."_'],
  ['_⚠ The record says: proposed by neither party before the meeting._', '_⚠ The record says: it had not previously had them in that form._'],
  ['_⚠ Amendment: proposed by the regional office in the meeting._', '_⚠ No amendment. Both accounts are in the record already._'],
  ['_⚠ The writer\'s own: the three-day delay in requesting the return._', '_⚠ The writer\'s own: the governorate figure was produced in the meeting._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the wrong sentence, the amendment, and the writer\'s own addition. ⚠ **On Pair B there is nothing wrong**: the directorate read the annexe, the annexe had not been supplied in that form, and the record says both. **The two accounts differ and the record contains each.** **The room will amend it anyway**, because two accounts that differ feel like a fault — **and the finding is that a record carrying both accounts needs no amendment at all.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own report from 14.6** and write **the other party\'s account of the same meeting**, in three sentences, as they would write it. ⚠ **Then find the sentence in your report that is wrong because of what you could not see.** **In this class seven of ten found one** — **and in four of the seven it was a clause the writer had put in to be fair.**'));
out.push(p('**b**  Swap. Your partner reads **both accounts and your report** and says **which party the report reads as.** ⚠ **If it reads as yours, the report has a villain in it somewhere** — **and they will find the verb.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said nobody gets the letter: the minute gets an amendment and it is one clause. Mrs Rizk asked whether not a letter to the officer, and a letter would explain a sentence to the person complaining about it, and the sentence is in a document his director reads, so a complaint about a record is answered by the record. Mrs Oueidat said so the clause goes, and Mrs Rizk gave the amendment: proposed by neither party before the meeting becomes proposed by the regional office in the meeting, eight words for eight words, and his director reads the second one. Dr Qabbani asked why the first version was written at all, and because she was trying not to claim it: she knew it was not hers and wrote a clause that said so, and by neither party before the meeting is accurate and denies the credit to everybody including the party that earned it. Mrs Khoury said a report that avoids claiming credit has not thereby given it to anybody, because credit is a positive act in a record, and a writer who only declines to take it leaves the record saying that nothing happened. Mr Tayara said the branch\'s own account is incomplete too, and Mrs Oueidat said it leaves out that requesting the documents delayed the figure by three days, and neither party is being unfair: each has written down what they did. Mrs Tarabishi said so both accounts need the other, and both are what each party can see, and the useful move is not to reconcile them but to find the one sentence in the record that is wrong because of what neither party could see. Mrs Ajouz asked about the delay, and it goes in because it is hers. Mr Zahreddine asked whether the officer comes out of it well, and he comes out as the party who proposed the principle and said so when the record did not. Mr Attar asked whether an amendment is not an admission, and an amendment within a fortnight is a correction and after six months it is an admission. And Mrs Rizk said the thing she will take away is that she was being careful: she wrote the clause to avoid taking credit she had not earned, and the careful version denied it to the man who had. Mrs Oueidat said that is the finding of the unit and not of the cycle, because every move in these seven has been a way of giving the other party something true. And Mr Tayara said the thing he will take away is the eighth of February, because an amendment in three days cost nothing and the same amendment in June would have been an admission._'));
out.push(p('**Listener task:** write the amended clause and the writer\'s own addition.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 6)', 7));
out.push(p('You are going to read four extracts in which negotiators give their views on agreements that last. For questions **1–4**, choose from the extracts **A–D**. The extracts may be chosen more than once.'));
out.push(box(null, [
  '**A**  Almost everything people call a negotiation is a search for a document. Two parties disagree about a figure, a date or a sequence, and the answer is written down somewhere that neither of them has asked for. I now spend the first minute of every meeting sorting the differences into those that a record settles and those that a trade settles, out loud, and the meetings that used to take two hours take thirty-five minutes. What I would warn against is the belief that this makes you clever. It makes the meeting shorter, which the other party notices and is grateful for, and it does nothing at all about the differences that are genuinely about what each side wants.',
  '**B**  The form of words matters more than the generosity behind it. A trade stated as a price is spent on the day it is made; the same trade stated as a rule is quoted by the other side when you are not in the room, which is the only kind of agreement that works. The extra cost is about eleven words. I would add that the test of such a rule is whether the other party could apply it against you and be right — and most of what passes for principle in my trade fails that test, which is why it is renegotiated every year by people who believe they settled it.',
  '**C**  I am less interested in what is agreed than in what the record says was agreed. A party written down as having given way will not give way again, and the report is read by their office before the next meeting, which is the only audience that acts on words like _eventually_. The discipline is therefore negative: strike every verb with a winner in it. What I have not managed to teach anybody is that declining to claim credit is not the same as giving it — the modest clause and the dishonest one produce the same record, which is a record in which nothing happened.',
  '**D**  My own difficulty has always been the thing I am not prepared to trade. For years I said that I would not be comfortable doing what was asked, which is a statement about me and can be worn through in an afternoon; now I say what the record requires, which cannot. I would say against the current enthusiasm for stating positions early that one limit is credible and three are a list of demands — and a party who declares three will lose all of them, because the other side finds the soft one and then tests the others in the same way.',
  '**1**  Which negotiator says that a practice meant to settle something permanently in fact has to be repeated?',
  '**2**  Which negotiator shares **B**\'s view that the words used outlast the occasion they were used on?',
  '**3**  Which negotiator takes a different view from the others on what most disagreements are actually about?',
  '**4**  Which negotiator, unlike the others, is concerned with a limit they place on themselves?',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the amendment and the covering note to the officer (120 words or more).'));
out.push(p('**AMENDMENT TO THE MINUTE OF ______________** · **______________**   **Item ______________, the clause reading _______________, is replaced by _______________.**   **One sentence is added to item ______________.** ⚠ **______________.**   **And to the officer, in two lines.** **______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The amendment is a clause, not a letter',
  'Credit given as a positive act',
  'The writer\'s own delay added',
  'Nothing in the note that explains the old clause',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the report)', 10));
out.push(box(null, [
  '⚠ **The report, and this time the reader was not in the room.** **No verb with a winner in it, both reasons called good, and the figure neither party had.**',
  'Your organisation asked you to attend a meeting with another body and to report on it. **Write a report.** Write **220–260 words**. You should: **say what each party wanted and why**; **say what was settled and in what form**; and **say what was not settled.**',
  '⚠ **One instruction that is not in the examination rubric and is in this book: no party in your report gave way.** **If one did, you have written the wrong document.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 14 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Inspections should follow the rebuild, in return ___ which we will work to your cycle.   a) of   b) for   c) to',
  '2  Since a second opinion is available, I am asking you ___ the exclusion.   a) to accept   b) accept   c) accepting',
  '3  The allocation is not yours to change and I shall not ask you ___ .   a) it   b) for   c) to',
  '4  I will not render it as heard; the record says it was filed and not ___ .   a) read it   b) read   c) reading',
  '5  Both parties came with a reason for the date ___ wanted.   a) they   b) which they   c) what they',
  '6  The office\'s figure of four was arrived ___ before the tolerance was excluded.   a) to   b) on   c) at',
  '7  One limit is credible; three ___ a list of demands.   a) is   b) are   c) be',
  '8  A party recorded as ___ given way will not give way again.   a) having   b) have   c) had',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 14.15** You will hear a grants officer talking about a negotiation. For questions **1–8**, complete the sentences with **a word or a number**.'));
[
  '**1**  Of the four differences, ______________ were settled by a document.',
  '**2**  The regional return gives ______________ files for the twelve months to March.',
  '**3**  She says a traded fact stays ______________ .',
  '**4**  The price she made last year bought her ______________ months.',
  '**5**  The version that would have lasted was about eleven words ______________ .',
  '**6**  She asked for the return on the ______________ of February.',
  '**7**  The clause she wrote denied the credit to ______________ .',
  '**8**  She says an amendment within a ______________ is a correction.',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 14.15  Audio script (read after the check)', [
  ['Woman', 'There were four things in dispute and we spent two hours on them in January, and I now think two of the four were never in dispute at all. They were questions about what the records say. Two of the four were settled by a document, and in both cases the document existed before the meeting and neither party had asked for it.'],
  ['Woman', 'The regional return gives twenty-six files for the twelve months to March. We had been arguing about forty. And the thing I had not understood is that a traded fact stays traded: if I had agreed forty in exchange for the date I wanted, the minute would say forty was agreed, and the return would arrive in April saying twenty-six, and the record with agreement on it is the one that gets quoted.'],
  ['Woman', 'The year before that I made what I thought was a good trade. We will accept October if you fund the February rebuild. It bought me eleven months. This year there is no rebuild and they have asked for October again and I have nothing to say, because what I sold was a date and what I bought was a payment and both of them are spent. The version that would have lasted was about eleven words longer. Inspections should follow a rebuild rather than precede it, in return for which we work to your cycle in any year when nothing is rebuilt.'],
  ['Woman', 'This February I did it properly. I asked for the return on the first and it came on the third, and I would not discuss the figure until it arrived, and that is a three-day delay that was my decision and I put it in the minute because it is mine.'],
  ['Woman', 'And I made one mistake, which is the one I shall remember. One of the two principles was proposed by the regional office in the meeting, and I wrote it into the minute as proposed by neither party before the meeting. That is accurate. I wrote it that way because I did not want to claim something that was not mine. And it denied the credit to everybody, including the man who had earned it, and his director reads that minute. He told me so, which he did not have to do, and I amended it on the eighth. An amendment within a fortnight is a correction. After six months it is an admission.'],
]));
out.push(p('**C  Writing.** Write the report (220–260 words): what each party wanted and why, what was settled and in what form, and what was not settled.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 14)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ sort differences into fact and interest, out loud, before offering anything',
  '☐ name an undefined word as an interest in a fact\'s clothes',
  '☐ state a trade as a principle, with _in return for which_',
  '☐ test a principle by asking whether the other side could apply it against me',
  '☐ put an alternative in a subordinate clause and pass the deletion test',
  '☐ give a cost instead of an alternative when I have none',
  '☐ concede in the first minute what nobody in the room can change',
  '☐ declare one limit, resting on something outside me, and restate it unchanged',
  '☐ write a report in which no party gave way',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _haggle over · hold out against · wring from · beat down · push back on · split the difference · come to terms with · work up to · hold firm on · play up · back off · yield to_.',
  '**This unit\'s word-formation set** _(Reading Part 6 in 14.7 draws on this unit\'s lexis)_: _mediate → **mediation** · reciprocate → **reciprocal** · bilateral → **bilaterally** · bargain → **bargaining** · compromise → **uncompromising** · intransigent → **intransigence** · entrench → **entrenched** · adversary → **adversarial** · equitable → **inequitable**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _come on_ **→ _come on to item four_**, which is moving through an agenda, where at A2 it was come on, we are late · _put on_ **→ _put the figure on the record_**, which is entering something, where at A2 it was putting on a coat · _look after_ **→ _look after the branch\'s interests_**, which is representing, where at A2 it was looking after a child.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 14 · Negotiating When Both Sides Are Right');
