// Proactive English C1 · Syria Edition · Book 1 · Unit 3 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WE SAID ALL THREE…', 'WE TOOK TWO…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says what has been left out and whether the writer said so.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — and mark only what that reader would notice. Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';
const pics = (a, b, c) => box('Speaking Part 2 — three photographs (described)', [a, b, c], C.lteal, C.teal);

out.push(h1('Unit 3  Choosing What Not to Say'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Two tasks in the C1 Advanced examination begin with the same decision, and no earlier book in this course has taught it. ⚠ **Speaking Part 2 gives you three photographs and asks you to talk about two.** **Writing Part 1 gives you three points and asks you to discuss two.** **The choice is the first thing you are marked on, and a candidate who covers all three has not followed the instruction.**',
  '**3.1** chooses two of three things to speak about and says nothing about the third.   **3.2** compares two things on a criterion you never state.   **3.3** takes the long turn: **three photographs, two chosen, one minute.**   **3.4** answers in thirty seconds about your partner\'s pair without summarising it.   **3.5** chooses two of three bullet points and justifies the choice in the first paragraph.   **3.6** writes the essay that leaves a point out and says so once.   **3.7** mediates between an essay and a reader who wants the third point.',
  '**Exam practice in 3.7:** C1 Advanced **Reading and Use of English Part 1** (multiple-choice cloze), **Writing Part 1** (the essay) and **Listening Part 3** (a long interview).',
  '⚠ **Bring one thing to the first lesson of this unit.** **Something you decided not to say this year, at work, in writing** — **and whether anybody noticed.** **3.1 runs on it, and the finding is about the ones nobody noticed.**',
  '**And one warning about this unit, printed because every class needs it.** ⚠ **Leaving something out is not the same as hiding it.** **A declared omission tells a reader where the edge of the document is; a silent one leaves them to find the edge themselves.** **Both are choices and only one of them is yours to defend.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 3.1 =====================
out.push(pb());
out.push(h2('3.1  Two of the three'));
out.push(p('**Function:** choosing two of three things to speak about, and saying nothing about the third   ·   **Grammar:** the declared omission against the silent one   ·   **Pronunciation:** the stop after the second thing'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the thing you decided not to say, and whether anybody noticed.** ⚠ **Two answers only: _noticed_ or _not noticed_** — and no explanation of the decision. Your teacher writes the ten on the board in two columns and counts them.'));
out.push(board('Three strands, forty minutes, eighty words, and the desk cut it.', 'Two strands, and the third named in one clause.'));
out.push(p('**b**  Which of these is a declared omission? **1** _There are a number of other considerations which I shall not go into here._  **2** _I have not costed the third option, because the second is already cheaper than doing nothing._  **3** _I shall confine myself to the two main points._  **4** _Space does not permit a full treatment of the subject._  **5** _The welds were not examined and the certificate does not cover them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide separates a declared omission from a silent one?   **A** politeness   **B** **a declared omission names the thing left out and gives one reason; a formula like _space does not permit_ names nothing and is a silent omission with a sentence in front of it**   **C** length'));
out.push(p('**b**  Listen again. **1** What happened to Mr Shihabi\'s eighty words when he tried to carry three strands?   **2** What does Mrs Ajouz say about the examination instruction, and what did her previous school tell her to do?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.1  Eighty words, three strands', [
  ['Ms Huda', 'Mr Shihabi has two versions of one paragraph, filed four hours apart.'],
  ['Mr Shihabi', '**Eighty words about a water main, and three things happened: the closure, the cost, and a dispute about who ordered it.** ⚠ **I put all three in.**'],
  ['Mrs Rizk', 'In eighty words?'],
  ['Mr Shihabi', '⚠ **About twenty-six each, which is not enough for any of them.** **The desk cut the dispute, and the cut version is better, and I have been annoyed about that for three weeks.**'],
  ['Mrs Tarabishi', 'Why annoyed, if it is better?'],
  ['Mr Shihabi', '⚠ **Because the desk chose and I had not.** **I had written three strands at twenty-six words because I could not decide**, and a cut made by somebody who has not been to the site is a cut made on length.'],
  ['Dr Qabbani', 'And if you had chosen?'],
  ['Mr Shihabi', '**Then the second version would have forty words on the closure and thirty-five on the cost** ⚠ **and one clause saying the ordering is disputed and is not in this piece.**'],
  ['Mrs Oueidat', 'That clause is the whole difference.'],
  ['Mrs Ajouz', 'May I say something about the examination? ⚠ **Because my previous school told me to cover all three and to be brief about each.**'],
  ['Ms Huda', 'Go on.'],
  ['Mrs Ajouz', '**The instruction says discuss two of the following three points.** ⚠ **I was taught that covering three shows range.** **It does not; it shows that you did not read the instruction** — **and I sat the examination once already and I have the band scores.**'],
  ['Mr Tayara', 'What did they say?'],
  ['Mrs Ajouz', '⚠ **Content, three out of five.** **Nothing else was below four.** **I had written about all three points and about seventy words on each.**'],
  ['Mr Zahreddine', 'So the mark was for choosing.'],
  ['Mrs Ajouz', '⚠ **The mark was for doing what was asked**, and what was asked was to choose. **Three out of five is not a mark for weak English and nobody at my school could tell me what it was for.**'],
  ['Jad', 'And what do you say about the one you leave out? Nothing at all?'],
  ['Mrs Khoury', '⚠ **One clause, with a reason, and then never again.** _I have not costed the third option, because the second is already cheaper than doing nothing._ **That is a declared omission and a reader can check it.**'],
  ['Mrs Tarabishi', 'As against _space does not permit a full treatment_.'],
  ['Mrs Khoury', '⚠ **Which names nothing.** **It is a silent omission with a sentence in front of it, and it is worse than silence**, because it tells the reader there is something there and refuses to say what.'],
  ['Mr Shihabi', '🔊 ⚠ **And the stop is the hard part.** **One clause and then nothing.** **My instinct after naming the dispute is to say a little about it**, and the little is the twenty-six words again.'],
]));
out.push(sp());
out.push(box('Language box – the declared omission', [
  '**The shape: name the thing, give one reason, stop.** _I have not costed the third option, **because the second is already cheaper than doing nothing**._ · _The welds were not examined **and the certificate does not cover them**._ · _The ordering is disputed **and is not in this piece**._',
  '⚠ **A declared omission names what is missing and can be checked.** **A formula names nothing:** _there are a number of other considerations_ · _space does not permit_ · _I shall confine myself to the two main points_. **Those are silent omissions with a sentence in front of them** — **and that is worse than silence, because the reader is told something is there and refused the name of it.**',
  '**The reason has to be about the thing and not about the document.** ⚠ _because the second is already cheaper_ **is about the options.** _because space does not permit_ **is about the page.** **A reader can argue with the first and can do nothing at all with the second.**',
  '⚠ **Why three strands at twenty-six words each is not modesty but indecision.** **Eighty words divided by three gives nothing enough to stand up**, and a reader with three unfinished strands has been handed the choice the writer refused to make. **If you do not choose, somebody who has not been to the site will choose on length.**',
  '**And the examination does this on purpose.** ⚠ **_Discuss two of the following three points_ is marked on the choosing.** **A candidate who covers all three loses on content and not on English** — **and a band three for content with nothing else below four is the signature of exactly that mistake.**',
  '**The stop, which is the hardest part.** ⚠ **One clause, and then never again.** **The instinct after naming the thing you have left out is to say a little about it**, and the little is the twenty-six words coming back.',
  '**Pronunciation.** 🔊 **Track 3.2** **Come down at the end of the second thing and stop.** ⚠ **A rise after the second item promises a third**, and a listener who has been promised a third waits for it — **in Speaking Part 2 that wait is the thirty seconds your partner needed.**',
  '**Practise:** Say two of three things and declare the third in one clause. **1** three faults, two reported  **2** three reasons, two given  **3** three options, two costed  **4** three findings, two written up  **5** one where the thing you leave out is the most interesting — and leave it out anyway',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a row from the card: **three things, and A speaks about two for forty seconds.** B does one thing: **says which was left out and whether A declared it.** ⚠ **Two rows on each card cannot be reduced to two** — all three are needed and the row is a trap — **and B has to say so.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(two of the three, forty seconds)_ __________ … __________ …'],
  ['A', '_(the declared omission, one clause)_ **__________, because __________.**'],
  ['B', 'Left out: __________.   Declared: **yes / no.**   Reducible: **yes / no.**'],
]));
out.push(table(['Card A – three things', 'Card B – three things'], [
  ['_The closure · the cost · who ordered it._', '_The bolts · the welds · the mill certificates._'],
  ['_⚠ The dose · the patient · the date._', '_⚠ The figure · the denominator · the date it was taken._'],
  ['_The rota · the referral book · the vehicle._', '_The deflator · the holding size · the reporting._'],
  ['_⚠ The claim · the reader · the action._', '_⚠ The sentence · the reading · the attribution._'],
  ['_The form · the drawer · the tray._', '_Nine o\'clock · half past nine · the sign-out book._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the omissions and whether each was declared. ⚠ **The four rows marked ⚠ cannot be reduced, because in all four the three things are one fact in three parts.** **A dose without a patient and a date is not a dose.** ⚠ **You can choose between topics and not between the parts of one fact.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own thing from Stage 1 and write **the two you kept, the one you dropped, and the declaring clause.** ⚠ **Then check the reason: is it about the thing or about the document?** **If it is about the document, write it again.**'));
out.push(p('**b**  Swap. Your partner reads your declaring clause and says **whether they could check it.** ⚠ Then the harder half: **they say whether they would now ask you about the thing you left out.** **A declared omission that provokes a question has worked**; one that closes the subject has hidden something.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Shihabi brought two versions of one paragraph, filed four hours apart: eighty words about a water main, in which three things happened — the closure, the cost, and a dispute about who ordered it — and he put all three in. Mrs Rizk asked whether that was in eighty words, and about twenty-six each, which is not enough for any of them. The desk cut the dispute, the cut version is better, and he has been annoyed about that for three weeks. Mrs Tarabishi asked why annoyed if it is better, and because the desk chose and he had not: he had written three strands at twenty-six words because he could not decide, and a cut made by somebody who has not been to the site is a cut made on length. Dr Qabbani asked what he would have done if he had chosen, and then the second version would have forty words on the closure and thirty-five on the cost, and one clause saying the ordering is disputed and is not in this piece. Mrs Oueidat said that clause is the whole difference. Then Mrs Ajouz said something about the examination, because her previous school told her to cover all three points and to be brief about each: the instruction says discuss two of the following three, and she was taught that covering three shows range. It does not — it shows that you did not read the instruction, and she has sat the examination once already and has the band scores. Asked what they said: content, three out of five, with nothing else below four, having written about all three points and about seventy words on each. Mr Zahreddine said so the mark was for choosing, and the mark was for doing what was asked, and what was asked was to choose — three out of five is not a mark for weak English, and nobody at her school could tell her what it was for. Mr Attar asked what you say about the one you leave out, and Mrs Khoury said one clause, with a reason, and then never again: I have not costed the third option, because the second is already cheaper than doing nothing. That is a declared omission and a reader can check it. Mrs Tarabishi offered the alternative — space does not permit a full treatment — which names nothing: a silent omission with a sentence in front of it, and worse than silence, because it tells the reader there is something there and refuses to say what. And Mr Shihabi said the stop is the hard part: one clause and then nothing, because his instinct after naming the dispute is to say a little about it, and the little is the twenty-six words again._'));
out.push(p('**Listener task:** write your partner\'s declaring clause and whether you could check it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two paragraphs Mr Shihabi filed four hours apart, and the desk\'s version. Answer the questions.'));
out.push(model([
  '**FIRST FILING** _(18.40, eighty-one words)_',
  '_"The Mezzeh water main was closed for three mornings in June, affecting about four hundred households and two schools. The work cost an estimated eleven million pounds, about a third of the directorate\'s maintenance budget for the quarter. The order for the work is disputed: the directorate says the municipality raised it and the municipality says the directorate did. Residents said they had no notice on two of the three mornings. The main is expected to be in service by the end of July."_',
  '**THE DESK\'S VERSION** _(19.10, fifty-four words, the dispute cut)_',
  '_"The Mezzeh water main was closed for three mornings in June, affecting about four hundred households and two schools. Residents said they had no notice on two of the three mornings. The work cost an estimated eleven million pounds, about a third of the quarter\'s maintenance budget. The main should be in service by the end of July."_',
  '**SECOND FILING** _(22.55, seventy-nine words, written after the desk\'s version had gone out)_',
  '_"Residents of four streets off the Mezzeh highway were given no notice of water-main closures on two of the three mornings in June, and about four hundred households were affected. The directorate\'s own notice for 11 June was dated the eleventh. The work cost an estimated eleven million pounds, a third of the quarterly maintenance budget, and the directorate confirmed the figure on Tuesday. **The order for the work is disputed between the directorate and the municipality and is not in this report.**"_',
  '**What is in the second and not in the first.** **The date on the notice** — _the directorate\'s own notice for 11 June was dated the eleventh_ — **which is one clause and is the only new fact in any of the three versions.** **It was in his notebook at six o\'clock.**',
  '**What the desk could not have done.** **The desk cut the dispute because it was the third of three and the paragraph was long.** ⚠ **It kept the cost, which is a figure anybody can get from the directorate, and cut the date on the notice, which nobody had.** **That date was not in the first filing at all: there was no room for it.**',
  '**What the dispute would have needed, and this is the arithmetic of the cycle.** **Two claims, two sources, and the document each side says exists** — **about fifty words, and there is no honest version of it in twenty-six.** ⚠ **A disputed order reported in twenty-six words says that two bodies disagree and tells a reader nothing about which of them has a piece of paper.** **It is the one strand of the three that cannot be done short**, and it is therefore the one to declare and come back to.',
  '**And what happened to it.** **The date on the notice ran on the Thursday under his name, and the dispute ran eleven days later as a separate piece with the requisition numbers in it** — **because by then he had asked both bodies for the document and one of them had sent it.**',
]));
out.push(item('1', 'What is the only new fact in any of the three versions, and which version has it?'));
out.push(item('2', 'What did the desk keep and what did it cut, and why does he say the desk could not have done otherwise?'));
out.push(item('3', 'How does the second filing deal with the dispute, and how many words does it take?'));
out.push(writers([
  'A short report that has chosen: **the two strands, each with enough room to stand up** → **the fact nobody else has, in its own clause** → **the figure, with who confirmed it and when** → **and the third strand declared in one sentence, with no detail attached.**',
  '⚠ **Give each kept strand enough words to be checkable.** **Eighty divided by three gives twenty-six, and twenty-six words will not carry a figure, its source and its date.** **Two strands at forty will.**',
  '**Put the fact nobody else has in its own clause, early.** ⚠ _The directorate\'s own notice for 11 June was dated the eleventh._ **Fourteen words, and it is the only sentence in three versions that a competitor cannot also file.** **In the first version there was no room for it.**',
  '**Declare the third strand in one sentence and attach nothing.** ⚠ _The order for the work is disputed between the directorate and the municipality and is not in this report._ **Seventeen words.** **The instinct is to add six more saying who claims what, and those six words are the indecision coming back.**',
  '⚠ And **notice which strand a stranger would cut.** **A reader who has not been to the site cuts on length, and what survives is whatever anybody could have got.** **The thing you went and found always looks optional, because it has no obvious source attached** — **and a strand with forty words round it does not look optional at all, which is the practical reason for choosing two.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a report that has chosen (120 words or more).'));
out.push(p('**______________** _(______________ words)_   **______________ were ______________ on ______________, and ______________ were affected.** ⚠ **______________ for ______________ was ______________ the ______________.** **The ______________ cost an estimated ______________, ______________, and ______________ confirmed the figure on ______________.** ⚠ **______________ is disputed between ______________ and ______________ and is not in this ______________.**   **What is in this version and not in the first.** ______________ — **which is one clause and is the only ______________ in any version.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two strands only, each with enough words to be checkable',
  'The fact nobody else has, in its own clause',
  'The third strand declared in one sentence, with nothing attached',
  'Every reason about the thing and not about the document',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their declaring sentence**, and the room says whether it could be checked and whether it invites a question.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole report (260 words or more), to the shape in the writer\'s box: two strands with room, the fact nobody else has, the figure with its source, and the third strand declared once.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: two strands only, the unique fact in its own clause, the omission declared and checkable, and no reason about the document.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their two strands and the declaring clause, and then stops — with the room timing the silence.** ⚠ **Anybody who adds a word about the third strand is stopped at once.** **The addition is always about six words long and it is the same six words every time.** Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **three out of five is not a mark for weak English.**'));
out.push(hw('Take **the last thing you wrote that carried three strands** and rewrite it with two. ⚠ **Then do the part that is uncomfortable: work out which strand a stranger would have cut, and whether it is the one you went and found.** **In most cases it is**, because the thing you went and found is the thing that has no obvious source attached to it. **Bring both versions and that one line.** **3.2 compares two things on a criterion you never state**, and it begins with two registration routes and a woman with a deadline.'));

// ===================== 3.2 =====================
out.push(pb());
out.push(h2('3.2  The criterion you never state'));
out.push(p('**Function:** comparing two things on a criterion you never state   ·   **Grammar:** the comparison whose ground the listener supplies   ·   **Pronunciation:** the comparison said once, with no _whereas_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **two things from your own work, compared in one sentence, with the criterion left out.** ⚠ **The room then says what criterion they supplied.** Your teacher writes the ten sentences and, beside each, the criterion the room guessed.'));
out.push(p('**b**  Which of these leaves its criterion to the reader? **1** _The second route takes eleven months and the first takes four._  **2** _The second route is cheaper than the first._  **3** _The second route is better than the first in terms of overall value._  **4** _The first route needs a registration number and the second needs a supervisor._  **5** _I shall take the second route._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide happens when a comparison has no stated criterion?   **A** the reader is confused   **B** **the reader supplies the criterion they already use, so an unstated comparison is a bet on who is reading** — and it pays when you know the reader and loses when you do not   **C** nothing: the facts speak for themselves'));
out.push(p('**b**  Listen again. **1** What two routes is Mrs Ajouz comparing, and what criterion did the room supply?   **2** What does Mr Zahreddine say an insurer supplies when a comparison has no criterion in it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.3  Eleven months and four', [
  ['Ms Huda', 'Mrs Ajouz has two routes and one sentence.'],
  ['Mrs Ajouz', '**Two ways of getting a pharmacy registration recognised.** _The second route takes eleven months and the first takes four._ ⚠ **That is the whole sentence.**'],
  ['Mr Shihabi', 'Then the first one is better.'],
  ['Mrs Ajouz', '⚠ **That is what everybody says and it is not in the sentence.** **The first takes four months and requires a supervisor who will sign for two years.** **The second takes eleven and requires nobody.**'],
  ['Mrs Tarabishi', 'So you supplied _time_ because the sentence had two numbers in it.'],
  ['Mr Shihabi', '**I supplied time because I have a deadline every evening.**'],
  ['Mrs Khoury', '⚠ **And that is the finding, and Mr Shihabi has just demonstrated it on himself.** **A reader with no stated criterion supplies the one they already use** — **so an unstated comparison is a bet on who is reading it.**'],
  ['Mr Tayara', 'Which pays if you know them.'],
  ['Mrs Khoury', '⚠ **It pays very well if you know them and it loses completely if you do not** — **and in a document with three readers you do not.**'],
  ['Mr Zahreddine', 'May I say what an insurer supplies? ⚠ **Cost. Always cost, and never safety.**'],
  ['Dr Qabbani', 'Even in an engineering opinion?'],
  ['Mr Zahreddine', '⚠ **Especially there.** _The replacement bolts are M16 and the installed bolts are M12._ **An engineer reads a specification, an owner reads a delay and an insurer reads a figure** — **and I wrote that sentence for eleven years before anybody told me that three people were reading three different sentences.**'],
  ['Mrs Oueidat', 'In court the criterion is always supplied by whoever speaks first.'],
  ['Mrs Rizk', 'So the rule is to state it.'],
  ['Mrs Khoury', '⚠ **No, and this is the cycle.** **Stating it is the B2 move and it is often worse.** _The second route is better than the first in terms of overall value_ **states a criterion and the criterion is empty** — **and a reader cannot check _overall value_ against anything.**'],
  ['Mrs Tarabishi', 'Then what?'],
  ['Mrs Khoury', '⚠ **Give both facts for both things and let the criterion be visible without being named.** _The first takes four months and needs a supervisor for two years; the second takes eleven and needs nobody._ **The criterion is now in the reader\'s hands and the reader can see what it is.**'],
  ['Jad', 'That is longer.'],
  ['Mrs Ajouz', '⚠ **It is nineteen words and it is the first version of this I have written that a second reader could use.** **My sister asked me which route and I gave her the two-number sentence, and she said _take the four months_** — **and she has no supervisor either.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the delivery is the part I shall take away.** **Say it once, with no _whereas_ and no _on the other hand_.** **Those two words tell a listener which half you prefer** — **and the whole point of leaving the criterion out is that you have not told them.**'],
]));
out.push(sp());
out.push(box('Language box – the comparison whose criterion is not stated', [
  '⚠ **A reader with no stated criterion supplies the one they already use.** **Mr Shihabi read _eleven months against four_ as a comparison about time, because he has a deadline every evening.** **An insurer supplies cost, always, and never safety.** **A comparison with no criterion is a bet on who is reading it** — **and it pays very well if you know them and loses completely if you do not.**',
  '⚠ **And stating the criterion is not the repair, which is the surprise of this cycle.** _The second route is better than the first in terms of overall value_ **states a criterion and the criterion is empty.** **A reader cannot check _overall value_, _efficiency_ or _suitability_ against anything** — **and the B2 habit of naming your ground produces exactly those three words.**',
  '**The repair is to give both facts for both things.** ⚠ _The first takes four months and needs a supervisor for two years; the second takes eleven and needs nobody._ **Nineteen words, no criterion named, and the criterion is now visible: a reader can see that the choice is between time and dependence** — **which is the real choice and is not what either number says on its own.**',
  '**The test.** ⚠ **Give your sentence to two readers with different jobs and ask each what it is comparing.** **If they answer differently, you have made a bet.** **If they answer the same and you did not expect it, you have found out what your own document is about.**',
  '**What a one-sided comparison does.** ⚠ _The second route takes eleven months_ — **with no figure for the first — reads as a complaint about the second.** **A reader given one number invents the other**, and the invented one is always flattering to whichever side the reader already prefers.',
  '**Pronunciation.** 🔊 **Track 3.4** **Say the comparison once, with no _whereas_ and no _on the other hand_.** ⚠ **Both of those tell a listener which half you prefer** — **and the whole point of leaving the criterion out is that you have not told them.** **One sentence, one breath, and the two halves at the same pitch.**',
  '**Practise:** Compare two things by giving both facts for both, with no criterion named. **1** two routes  **2** two suppliers  **3** two dates  **4** two candidates  **5** one where you know your reader and want the bet — and say what you are betting on',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a comparison from the card. B does two things: **says what criterion they supplied, and then says what a reader with a different job would have supplied.** ⚠ **Two rows on each card state a criterion and the criterion is empty** — B has to name it and say what it cannot be checked against. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'I supplied: __________.   A different reader would supply: __________.'],
  ['B', 'Empty criterion: **no / __________, which cannot be checked against __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_The second route takes eleven months and the first takes four._', '_The installed bolts are M12 and the specified bolts are M16._'],
  ['_⚠ The second supplier offers better overall value._', '_⚠ The first candidate is the more suitable of the two._'],
  ['_The first supplier delivers in nine days and holds no stock; the second in twenty-one and holds four weeks._', '_The deflator is published for two governorates and the size data for all fourteen._'],
  ['_⚠ The January date is preferable from an operational standpoint._', '_⚠ The second option represents the more efficient approach._'],
  ['_Saturday cover ends at nine and weekday cover at half past five._', '_Thirty-one had a second sample and ten did not._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the criteria supplied, and the four empty ones. ⚠ **_Overall value_, _more suitable_, _operational standpoint_ and _more efficient_ cannot be checked against anything** — and the finding is that all four were produced by naming a criterion rather than by leaving one out. **Stating your ground badly is worse than not stating it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own two things and write **both facts for both of them**, in one sentence, with no criterion named. ⚠ **Then write what your sentence is really comparing** — **and check it is not what either figure says on its own.**'));
out.push(p('**b**  Swap, and give your sentence to **two partners with different jobs.** ⚠ **Each says what it is comparing.** **If the two answers differ, write down both** — **you have found the bet, and in a three-reader document you cannot afford it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz brought two ways of getting a pharmacy registration recognised and one sentence: the second route takes eleven months and the first takes four. Mr Shihabi said then the first one is better, which is what everybody says and is not in the sentence — the first takes four months and requires a supervisor who will sign for two years, and the second takes eleven and requires nobody. Mrs Tarabishi said so he supplied time because the sentence had two numbers in it, and Mr Shihabi said he supplied time because he has a deadline every evening. Mrs Khoury said that is the finding, demonstrated by Mr Shihabi on himself: a reader with no stated criterion supplies the one they already use, so an unstated comparison is a bet on who is reading it. Mr Tayara said which pays if you know them, and it pays very well if you know them and loses completely if you do not — and in a document with three readers you do not. Then Mr Zahreddine said what an insurer supplies: cost, always cost, and never safety. Dr Qabbani asked whether that holds even in an engineering opinion, and especially there: the replacement bolts are M16 and the installed bolts are M12 — an engineer reads a specification, an owner reads a delay and an insurer reads a figure, and he wrote that sentence for eleven years before anybody told him that three people were reading three different sentences. Mrs Oueidat said in court the criterion is always supplied by whoever speaks first. Mrs Rizk said so the rule is to state it, and Mrs Khoury said no, and this is the cycle: stating it is the B2 move and it is often worse. The second route is better than the first in terms of overall value states a criterion and the criterion is empty, and a reader cannot check overall value against anything. Mrs Tarabishi asked then what, and the answer is to give both facts for both things and let the criterion be visible without being named: the first takes four months and needs a supervisor for two years; the second takes eleven and needs nobody. The criterion is now in the reader\'s hands and the reader can see what it is. Mr Attar said that is longer, and Mrs Ajouz said it is nineteen words and it is the first version she has written that a second reader could use — her sister asked her which route, was given the two-number sentence, and said take the four months, and she has no supervisor either. And Mr Shihabi said the delivery is the part he will take away: say it once, with no whereas and no on the other hand, because those two words tell a listener which half you prefer, and the whole point of leaving the criterion out is that you have not told them._'));
out.push(p('**Listener task:** write the two different answers your two partners gave about what your sentence compares.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Ajouz wrote for two members of her own family. Answer the questions.'));
out.push(model([
  '**THE TWO ROUTES** _(N. Ajouz · for Rana and for my cousin in Homs · 3 November)_',
  '**Route one takes about four months and needs a registered pharmacist who will countersign your practice record for two years.** **Route two takes about eleven months and needs nobody.** **Both end in the same registration and neither can be begun while the other is open.**',
  '**What route one asks of you.** **Twenty-two months of supervised practice, countersigned monthly.** **The countersignatory must be registered throughout the two years and must not change** — **if they leave, retire or let their own registration lapse, the record restarts.** **Of the four people I know who took route one, three finished in between four and five months and one restarted in the eighth month and is still going.**',
  '**What route two asks of you.** **Three written examinations, sat in April, August and December**, with a fee each time and no limit on attempts. **The practice record is not required.** **Of the three people I know who took route two, two finished in eleven months and one in twenty-three, having failed the August paper twice.**',
  '**What is the same in both.** **The fee for the final certificate, which is the same figure on both routes and is payable at the end.** **The two references, which must be from outside your own pharmacy and must be dated within three months of the application.** **The six-week wait after the certificate is issued, which nobody can shorten and which four of the seven people I know did not know about until they were in it.**',
  '**What neither route tells you until you are in it.** **Route one\'s countersignatory is also the person who decides whether a month counts** — **and two of the four I know had a month refused.** **Route two\'s April paper is the only one of the three that is marked externally**, which is why the pass rate for August and December is published and April\'s is not.** **And route one\'s two years run from the first countersigned month and not from the date you begin**, so a month spent finding a countersignatory is a month before the clock starts; **two of the four I know spent between three and five months looking.**',
  '**The figures I could not get.** **How many restart route one each year.** **How many abandon route two after one failure.** ⚠ **I asked the council for both in September and was told neither is compiled.** **I record that because it means the comparison above rests on seven people I happen to know, and seven is not a number.**',
  '**And one thing I am not going to do.** ⚠ **I am not going to tell either of you which to take.** **Rana has a registered aunt who has worked in the same pharmacy for nineteen years, and my cousin has nobody** — **and that single fact decides it in both cases without anything on this page being weighed at all.**',
]));
out.push(item('1', 'What does she give for each route, and what does she never say about either of them?'));
out.push(item('2', 'What two figures could she not get, and why does she record that she asked?'));
out.push(item('3', 'What single fact decides it for each reader, and where does it appear?'));
out.push(writers([
  'A comparison with no criterion named: **both facts for both things, in one pair of sentences** → **what each one asks of the reader, with the figures you have** → **what is the same in both** → **what neither tells you until you are in it** → **the figures you could not get, and that you asked** → **and the one fact that decides it, named last and not weighed.**',
  '⚠ **Give both facts for both.** _Route one takes four months and needs a countersignatory for two years; route two takes eleven and needs nobody._ **Nineteen words with no criterion in them, and the real choice — time against dependence — is now visible to a reader who has never thought about either.**',
  '**Say how many people your figures rest on.** ⚠ _The comparison above rests on seven people I happen to know, and seven is not a number._ **A writer who names the size of their own evidence has not weakened the comparison; they have told the reader how far to push it.**',
  '**Record the figure you asked for and could not get.** ⚠ _I asked the council in September and was told neither is compiled._ **That sentence is worth more than the figure would have been**, because it tells the reader that the gap is in the world and not in the writing.',
  '⚠ And **name the fact that actually decides it, and refuse to weigh anything.** _Rana has a registered aunt and my cousin has nobody, and that single fact decides it in both cases without anything on this page being weighed at all._ **A comparison that ends by admitting one fact outranks all of it is the only honest kind there is.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a comparison with no criterion named (120 words or more).'));
out.push(p('**______________** _(______________ · for ______________ · ______________)_   **______________ takes about ______________ and needs ______________.** **______________ takes about ______________ and needs ______________.** **Both end in ______________ and neither can ______________.**   **What ______________ asks of you.** ______________. ⚠ **______________ must ______________ and must not ______________** — **if ______________, ______________.** **Of the ______________ people I know who took it, ______________ finished in ______________ and ______________.**   **What is the same in both.** ______________. ______________. ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both facts given for both things, and no criterion named',
  'No empty criterion anywhere — no _overall value_, _suitability_ or _efficiency_',
  'The size of your own evidence named',
  'Any figure you asked for and could not get, recorded',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their opening pair of sentences**, and the room says what the comparison is really about.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole comparison (260 words or more), to the shape in the writer\'s box: both facts for both, what each asks, what is the same, what neither tells you, the figures you could not get, and the one fact that decides it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both facts for both things, no empty criterion, the size of the evidence named, and the deciding fact left unweighed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their comparison twice: once as one sentence at one pitch, and once with _whereas_ inserted in the middle.** ⚠ **The room says which half the second version preferred.** **They always know, and the writer usually did not mean it.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **an unstated comparison is a bet on who is reading it.**'));
out.push(hw('Take **a comparison you have written this year** and give it to **two people with different jobs**, separately, asking only what it is comparing. ⚠ **Write down both answers.** **If they differ, you made a bet; if they agree and the answer surprises you, you have found out what your document was about.** **Then rewrite it giving both facts for both things.** **Bring the two answers and the rewritten sentence.** **3.3 is the long turn: three photographs, and you take two.**'));

// ===================== 3.3 =====================
out.push(pb());
out.push(h2('3.3  Three photographs, two chosen'));
out.push(p('**Function:** taking the long turn — three photographs, two chosen, one minute   ·   **Grammar:** **Speaking Part 2 at C1** · the choice announced in one clause   ·   **Pronunciation:** one minute, ending on a full stop'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  ⚠ **Speaking Part 2 at C1 is not the B2 task made longer and the difference is one word.** **At B2 you were given two photographs and compared both.** **At C1 you are given three and you talk about two of them**, for one minute, and then your partner speaks for thirty seconds about yours. **Round the room: in one sentence, what is the new decision?**'));
out.push(p('**b**  Which of these openings does the task ask for? **1** _These three pictures all show people at work._  **2** _I shall talk about the first and the third, because both show somebody waiting for a decision that is not theirs._  **3** _The first picture shows a man at a counter, the second shows a woman with a file, and the third shows a queue._  **4** _I find the second one the most interesting._  **5** _I shall leave the second aside; it is the only one with nobody waiting in it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the examiner is listening for in the first ten seconds?   **A** description   **B** **which two were chosen and on what ground, in one clause** — because the ground is what the remaining fifty seconds has to be about   **C** vocabulary'));
out.push(p('**b**  Listen again. **1** What did Mrs Ajouz do in her own examination, and what did the examiner\'s report say?   **2** What does Mr Shihabi say a picture desk does with three photographs, and how long does it take?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.5  One minute, two pictures', [
  ['Ms Huda', 'Mrs Ajouz has done this in the room where it counts. Mrs Ajouz.'],
  ['Mrs Ajouz', '⚠ **I described all three.** **Twenty seconds each, and I ran out of time before I had compared anything.**'],
  ['Mrs Tarabishi', 'And the report?'],
  ['Mrs Ajouz', '_Range of vocabulary good; discourse management limited; did not develop a line of argument._ ⚠ **I had no line of argument because I had three subjects and a minute.**'],
  ['Mr Zahreddine', 'The same arithmetic as the eighty words.'],
  ['Mrs Ajouz', '⚠ **Exactly the same, and nobody at my school connected the two.** **I was taught the writing task and the speaking task by two different teachers and neither mentioned that the first decision is identical.**'],
  ['Mr Shihabi', 'A picture desk does this forty times a day. ⚠ **Three photographs come in and two go out, and the choosing takes about nine seconds.**'],
  ['Dr Qabbani', 'On what ground?'],
  ['Mr Shihabi', '⚠ **On what the two of them together say that neither says alone.** **That is the whole of it, and it is not about which photograph is best.**'],
  ['Mrs Oueidat', 'Give the room one.'],
  ['Mr Shihabi', '**A queue at a gate, a man reading a notice, and a child asleep on a wall.** ⚠ **The queue and the notice together say that nobody told them.** **The queue and the child together say that it went on a long time.** **The notice and the child say nothing at all.**'],
  ['Mr Tayara', 'So two of the three pairs work and one does not.'],
  ['Mr Shihabi', '⚠ **Usually two of the three**, and finding out which is the nine seconds. **A candidate who picks the two best photographs has picked on the wrong thing** — **it is the pair that has to do the work.**'],
  ['Mrs Rizk', 'And you say the ground in the first clause.'],
  ['Mrs Khoury', '⚠ **In one clause, at the start, and then you spend fifty seconds on it.** _I shall talk about the first and the third, because both show somebody waiting for a decision that is not theirs._ **Seventeen words, and the rest of the minute now has a subject.**'],
  ['Jad', 'And the third picture?'],
  ['Mrs Khoury', '⚠ **Nothing.** **No _I shall leave the second aside_, no explanation, no apology.** **The instruction is to talk about two** — **saying why you have not chosen the third is a declared omission in a task where the omission is the instruction.**'],
  ['Mrs Ajouz', '**That is the opposite of 3.1.**'],
  ['Mrs Khoury', '⚠ **It is, and the difference is who set the limit.** **In 3.1 you chose to leave something out and the reader did not know it existed.** **Here the examiner put three pictures in front of you and knows exactly what you have left.** **A declaration tells them something they already know and costs you four seconds of the fifty.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the ending is the thing I shall practise.** **One minute, and it ends on a full stop.** **Mine ended on _and the third one also shows…_ with the examiner saying thank you over the top of it**, **and that is on the recording.**'],
]));
out.push(sp());
out.push(box('Language box – the long turn at C1', [
  '**The task.** **Three photographs. You talk about two, for one minute. Your partner then speaks for thirty seconds about your two.** ⚠ **The new decision is the choosing, and it is the same decision as the essay\'s _two of the following three points_.**',
  '**The opening clause carries the choice and the ground.** ⚠ _I shall talk about the first and the third, **because both show somebody waiting for a decision that is not theirs**._ **Seventeen words, and the remaining fifty seconds now has a subject.**',
  '⚠ **Choose on what the two together say that neither says alone** — **not on which two photographs are best.** **A queue at a gate and a man reading a notice together say that nobody told them.** **The queue and a child asleep on a wall together say it went on a long time.** **The notice and the child say nothing.** **Usually two of the three pairs work and one does not, and finding out which is the whole of the preparation.**',
  '⚠ **Say nothing at all about the third picture.** **No _I shall leave the second aside_, no reason, no apology.** **The examiner put three in front of you and knows exactly what you have left** — **a declaration tells them something they already know and costs four seconds of the fifty.**',
  '**And note that this is the opposite of 3.1, on purpose.** ⚠ **There you declared the omission because the reader did not know the thing existed.** **Here the limit was set by the person listening.** **The rule is about who set the limit and not about honesty.**',
  '**What the fifty seconds is for.** ⚠ **Not description.** **The ground, applied to both pictures in turn, with one speculation about each and one sentence saying which of the two shows it more plainly.** **A candidate who describes for fifty seconds has answered the B2 task.**',
  '**Pronunciation.** 🔊 **Track 3.6** **One minute, ending on a full stop.** ⚠ **Practise stopping at fifty-five seconds with a finished sentence**, because an answer that is still running when the examiner says _thank you_ loses the last thing you said. **It is the commonest avoidable loss in the paper and it is a matter of practice and not of English.**',
  '**Practise:** Take three described pictures, choose two, and give the opening clause in seventeen words or fewer. **1** three workplaces  **2** three queues  **3** three documents  **4** three meetings  **5** one where only one pair works — and say which pair does not',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs with the described photographs below. A chooses two, gives the opening clause, and speaks for one minute. B times it and then speaks for thirty seconds about A\'s pair. ⚠ **B\'s thirty seconds must not summarise A** — **it adds one thing A did not say.** Change sets and swap roles.'));
out.push(pics(
  '**Set One — A.** _A covered pavement outside a government office. About twenty people, most of them standing, two sitting on a low wall. A woman near the front is holding a plastic folder against her chest with both arms. Nobody is talking. The shadow puts the time at about eight in the morning._',
  '**Set One — B.** _A man of about fifty in front of a noticeboard behind glass. One sheet on the board, typed, with a handwritten line added at the bottom. He is photographing it with a telephone held at arm\'s length. There is nobody else in the frame._',
  '**Set One — C.** _A boy of about nine asleep sitting up on a wall, a satchel on his knees, in full sun. Behind him, out of focus, a line of adults. A plastic bottle, nearly empty, beside his foot._'
));
out.push(pics(
  '**Set Two — A.** _A counter in a dispensary. A pharmacist in a white coat is looking at two sheets of paper side by side, one of them creased. Her hand is flat on the older-looking sheet. A customer\'s hands are visible at the edge of the frame, holding a prescription._',
  '**Set Two — B.** _A desk with eleven identical brown folders in two stacks, one stack noticeably shorter. A pair of spectacles on the shorter stack. A window behind, dark; the lamp is on._',
  '**Set Two — C.** _Two men on a flat roof, one kneeling with a steel rule against a bolt head, one standing with a clipboard and not looking at him. Scaffolding, partly sheeted, at the far end. The light is low and from the side._'
));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** the pair chosen, the ground in the opening clause, and whether the turn ended on a full stop. ⚠ **In Set One the pair that fails is B and C** — a man with a telephone and a sleeping child say nothing to each other. **In Set Two it is A and C.** **About half of any class chooses a non-working pair and finds out at about twenty seconds** — **which is what the nine seconds exists to prevent.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the set you have not used. ⚠ **Spend forty seconds and no more deciding**, and write only the opening clause. **Then the harder half: write down the pair you rejected and what it would have been about.** **If it would have been about nothing, that is the right rejection.**'));
out.push(p('**b**  Perform the minute to a partner who holds a watch and says _stop_ at sixty seconds. ⚠ **Whatever you were saying is lost.** **Do it twice.** **The second time almost everybody finishes at about fifty-four seconds, and that is the skill.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz has done this in the room where it counts, and she described all three: twenty seconds each, and she ran out of time before she had compared anything. The report said range of vocabulary good, discourse management limited, did not develop a line of argument — and she had no line of argument because she had three subjects and a minute. Mr Zahreddine said that is the same arithmetic as the eighty words, and it is exactly the same, and nobody at her school connected the two: she was taught the writing task and the speaking task by two different teachers and neither mentioned that the first decision is identical. Mr Shihabi said a picture desk does this forty times a day — three photographs come in and two go out, and the choosing takes about nine seconds. Dr Qabbani asked on what ground, and on what the two of them together say that neither says alone, which is the whole of it and is not about which photograph is best. Mrs Oueidat asked for one, and he gave it: a queue at a gate, a man reading a notice, and a child asleep on a wall. The queue and the notice together say that nobody told them. The queue and the child together say that it went on a long time. The notice and the child say nothing at all. Mr Tayara said so two of the three pairs work and one does not, and usually two of the three, and finding out which is the nine seconds — a candidate who picks the two best photographs has picked on the wrong thing, because it is the pair that has to do the work. Mrs Rizk said and you say the ground in the first clause, and Mrs Khoury said in one clause, at the start, and then you spend fifty seconds on it: I shall talk about the first and the third, because both show somebody waiting for a decision that is not theirs. Seventeen words, and the rest of the minute now has a subject. Mr Attar asked about the third picture, and nothing: no I shall leave the second aside, no explanation, no apology, because the instruction is to talk about two and saying why you have not chosen the third is a declared omission in a task where the omission is the instruction. Mrs Ajouz said that is the opposite of 3.1, and it is, and the difference is who set the limit: in 3.1 you chose to leave something out and the reader did not know it existed, and here the examiner put three pictures in front of you and knows exactly what you have left. And she said the ending is the thing she will practise — one minute, ending on a full stop, because hers ended on and the third one also shows with the examiner saying thank you over the top of it, and that is on the recording._'));
out.push(p('**Listener task:** write the pair you rejected and what it would have been about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Shihabi sends with three photographs to a picture desk. Answer the questions.'));
out.push(model([
  '**PICTURE NOTE** _(T. Shihabi · Mezzeh water main · three frames filed, two recommended)_',
  '**Run A and C together.** **A is the queue outside the directorate at about eight in the morning, twenty-odd people, nobody talking, a woman at the front holding a folder against her chest with both arms.** **C is a boy of about nine asleep sitting up on a wall with his satchel on his knees, in full sun, a line of adults out of focus behind him.** **Together they say the thing the words cannot: that this took all morning and that people brought their children.**',
  '**Why not B.** **B is a man photographing the notice through the glass.** **It is the best single frame of the three and it is the one I would print if we were running one.** **With A it repeats** — two pictures of people waiting at a building — **and with C it says nothing, because a man with a telephone and a sleeping child have no relation at all.**',
  '**The caption I should like on A, if there is room for one.** _"Outside the directorate\'s offices, 11 June. The notice of closure for that morning was dated the eleventh."_ **The second sentence is the story and it is not visible in the frame**, which is the only argument for a caption of two sentences rather than one.',
  '**What the pair will be used for that I did not intend.** **A and C together will be read as a picture about children**, and two of the four newspapers that take our service will crop C to the boy and drop A. ⚠ **I would rather they did not and they will.** **If the desk wants to prevent it, the only thing that works is filing C at a width that cannot be cropped square.**',
  '**What is not in any of the three frames.** **The main itself, which is behind hoarding.** **Anybody from the municipality or the directorate.** **The disputed order**, which is paper and cannot be photographed, **and which is the reason this is a story at all.**',
  '**One practical matter.** **A was taken from the pavement opposite and nobody in it is identifiable at that distance.** **C is a child and he is identifiable.** **His mother is the woman third from the left in the out-of-focus line and she was asked and agreed**, and I have her name and the time she agreed in my notebook. **If the desk wants the agreement in writing before it runs, that will take until Thursday.**',
  '**And one thing about the third frame that is not a picture question.** **B is the only frame in which a document appears**, and the document is the notice dated the eleventh. **The notice is legible at full size and is not legible at the width the service files at.** ⚠ **So the single most important fact I have cannot be carried by the only photograph that contains it**, and that is the reason the caption on A has to have two sentences in it. **If the desk can run B small alongside A and C, the caption can go back to one.**',
]));
out.push(item('1', 'Why does he recommend A and C rather than B, and what does he say about B\'s quality?'));
out.push(item('2', 'What does he say will happen to the pair that he did not intend, and what is the only way to prevent it?'));
out.push(item('3', 'What is not in any of the three frames, and which of those absences is the reason the story exists?'));
out.push(writers([
  'A note recommending two of three: **the pair, with what the two together say that neither says alone** → **why not the third, including an honest word about its quality** → **what you want in the caption, and which sentence is the story** → **what the pair will be used for that you did not intend** → **what is in none of the frames** → **and any practical matter the desk has to decide.**',
  '⚠ **Choose on what the pair does, and say so in one sentence.** _Together they say the thing the words cannot: that this took all morning and that people brought their children._ **Nothing in that sentence is about which photograph is better.**',
  '**Say the rejected one is good, if it is.** ⚠ _B is the best single frame of the three and it is the one I would print if we were running one._ **A recommendation that pretends the rejected item is weak is a recommendation nobody believes twice**, and the real reason is in the next clause: with A it repeats and with C it says nothing.',
  '**Name the use you did not intend and the one thing that prevents it.** ⚠ _Two of the four newspapers will crop C to the boy and drop A. I would rather they did not and they will._ **Then the remedy, or the admission that there is none.**',
  '⚠ And **list what is in none of the frames, and mark the one that matters.** _The disputed order, which is paper and cannot be photographed, and which is the reason this is a story at all._ **A note that says what the pictures cannot show has told the desk where the words have to do the work.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note recommending two of three (120 words or more).'));
out.push(p('**______________** _(______________ · ______________ · three ______________, two recommended)_   **Run ______________ and ______________ together.** **______________ is ______________.** **______________ is ______________.** ⚠ **Together they say ______________, which ______________ alone does not.**   **Why not ______________.** **______________ is ______________.** ⚠ **It is the best ______________ of the three and it is the one I would ______________ if ______________.** **With ______________ it ______________, and with ______________ it ______________.**   **What I should like in ______________.** _"______________"_ **The second sentence is ______________ and it is not ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The pair chosen on what the two together do, not on quality',
  'An honest word about the rejected one',
  'The unintended use named, with its remedy or the admission there is none',
  'What is in none of the items, with the one that matters marked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their _together they say_ sentence**, and the room says whether it could be true of either item alone.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the pair and what it does, why not the third, the caption, the unintended use, what is in none of them, and the practical matter.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the pair chosen on what it does, the rejected item treated honestly, the unintended use named, and the absences listed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Each student performs one timed minute on the set they have not used, with a partner saying _stop_ at sixty seconds.** ⚠ **The room counts how many finished on a full stop.** **First time round it is two or three of ten; second time round it is most of them.** Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **that is on the recording.**'));
out.push(hw('Find **three photographs of one thing** — on your telephone, in a newspaper, anywhere — and **write the note: which two, what they say together, and why not the third.** ⚠ **Then do the part the examination does not let you do: write what the rejected pair would have been about.** **If it would have been about nothing, your rejection was right; if it would have been about something, you made a choice and should know what it was.** **Bring the note.** **3.4 is your partner\'s thirty seconds**, and the rule is that it must not summarise you.'));

// ===================== 3.4 =====================
out.push(pb());
out.push(h2('3.4  Thirty seconds that do not summarise'));
out.push(p('**Function:** answering in thirty seconds about somebody else\'s pair without summarising it   ·   **Grammar:** the one thing added · _what neither of them shows is_   ·   **Pronunciation:** beginning without _so_ and without _as you said_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads out five thirty-second answers to the same pair of photographs. ⚠ **For each one, say whether it added anything or repeated the speaker.** Your teacher writes the five verdicts on the board and the room counts how many added nothing.'));
out.push(p('**b**  Which of these adds something? **1** _So as you said, both of them show people waiting._  **2** _I agree with everything my partner said about the queue._  **3** _What neither of them shows is anybody from the directorate._  **4** _The first one is more striking than the second, I think._  **5** _The woman with the folder is holding it the way people hold a thing they have been told to bring._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the thirty seconds is marked on?   **A** agreement with the partner   **B** **one thing the partner did not say, about their pair, developed for the whole thirty seconds**   **C** fluency'));
out.push(p('**b**  Listen again. **1** What did the referee do with Dr Qabbani\'s three limitations, and what did Dr Qabbani do about it?   **2** What does Mrs Oueidat say the worst opening to thirty seconds is, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.7  The one the referee left', [
  ['Ms Huda', 'Dr Qabbani has had this done to him in writing.'],
  ['Dr Qabbani', '**I listed three limitations and the referee wrote about two of them.** ⚠ **For three weeks I read that as the referee being lazy.**'],
  ['Mrs Tarabishi', 'And now?'],
  ['Dr Qabbani', '⚠ **He chose the two that could be acted on.** **The third — that the series is retrospective — cannot be answered by anything I do to the paper.** **He left it because there was nothing for me to do with it.**'],
  ['Mr Zahreddine', 'That is a choice with a reason in it.'],
  ['Dr Qabbani', '**And he did not state the reason, and I spent three weeks angry.** ⚠ **One clause would have cost him nine words.**'],
  ['Mrs Khoury', 'Which is the lesson for the thirty seconds, and it is the other way round. ⚠ **You are answering about your partner\'s pair and your job is to add one thing, not to say why you agree.**'],
  ['Mrs Ajouz', 'In my examination I said _I agree with my partner and I would add that both pictures are quite modern_.'],
  ['Mr Shihabi', 'Thirty seconds of nothing.'],
  ['Mrs Ajouz', '⚠ **Twenty-two seconds of nothing and then eight seconds of silence**, which is on the recording too.'],
  ['Mrs Rizk', 'So what is the one thing?'],
  ['Mrs Khoury', '⚠ **The shapes are three and they are all short.** **What neither of them shows.** **What one of them shows that the other does not.** **Or one speculation about a person in the pair your partner did not mention.**'],
  ['Mr Tayara', 'Give the room the first one.'],
  ['Mrs Khoury', '_What neither of them shows is anybody from the directorate._ ⚠ **Seven words, and it is about the pair rather than about the partner** — **and it opens thirty seconds with something to say.**'],
  ['Mrs Oueidat', 'May I give the worst opening, because I hear it in interpreted evidence constantly?'],
  ['Ms Huda', 'Please.'],
  ['Mrs Oueidat', '⚠ _So as you said…_ **Three words, and both of them are fatal.** **_So_ makes it a continuation of somebody else\'s turn, and _as you said_ hands the content back to them.** **I have to render it and there is nothing under it.**'],
  ['Jad', 'And _I agree_?'],
  ['Mrs Oueidat', '⚠ **_I agree_ is not an answer to anything that was asked.** **Nobody asked whether you agreed.**'],
  ['Mr Shihabi', 'A desk does this to me in reverse. ⚠ **They never say which two of my three strands they kept and they never say why.**'],
  ['Dr Qabbani', 'And you spend three weeks angry.'],
  ['Mr Shihabi', '🔊 ⚠ **Three years, in my case.** **And the whole thing would have been nine words at the bottom of a message** — **which is what I shall put at the bottom of every piece I file from now on, because I have been on both ends of it in one evening.**'],
]));
out.push(sp());
out.push(box('Language box – the thirty seconds', [
  '**You are answering about your partner\'s pair, and the mark is for one thing they did not say.** ⚠ **Not agreement, not a summary, not an opinion about which picture is better.**',
  '**The three shapes, and all of them are short.** ⚠ _**What neither of them shows is** anybody from the directorate._ · _**What the first one shows and the second does not is** how long it went on._ · _**The woman with the folder is holding it the way people hold a thing they have been told to bring**_ — **one speculation about a person your partner did not mention.**',
  '⚠ **The worst opening is three words and both halves are fatal.** _So as you said…_ **_So_ makes your turn a continuation of somebody else\'s, and _as you said_ hands the content back to them.** **And _I agree_ is not an answer to anything that was asked: nobody asked whether you agreed.**',
  '**Begin with the content, in the first four words.** ⚠ _What neither of them shows…_ · _The woman with the folder…_ · _The second one has no…_ **Thirty seconds is six sentences at most, and an opening that spends four of them on your partner has spent a fifth of the turn.**',
  '⚠ **And the same thing in writing, which is where this cycle came from.** **A referee chose two of three limitations and did not say why, and the author read it as laziness for three weeks.** **The third limitation could not be acted on and that was the reason** — **and one clause would have cost nine words.** **When you choose two of somebody\'s three, say which and why, in a clause.**',
  '**The symmetry worth noticing.** ⚠ **3.3 says to say nothing about the picture you left, because the examiner set the limit and knows.** **This says to say which of your partner\'s points you are taking up, because they do not know.** **The rule is always the same: declare the choice to whoever did not set the limit.**',
  '**Pronunciation.** 🔊 **Track 3.8** **Start on the content word and come down at the end of the thirty seconds.** ⚠ **Practise stopping at twenty-six seconds with a finished sentence.** **Twenty-two seconds of nothing and eight of silence is the commonest shape of this task in the room where it counts**, and one of the ten people here has that on a recording.',
  '**Practise:** Answer about a pair in thirty seconds, beginning on the content word. **1** with _what neither of them shows_  **2** with _what the first shows and the second does not_  **3** with a speculation about one person  **4** without the words _I_ or _agree_  **5** one where you genuinely disagree with your partner\'s ground — and say so in a clause',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs with the sets from 3.3. A takes a minute on a pair; B takes thirty seconds **and must not use the words _I_, _agree_, _so_ or _as you said_.** ⚠ **In one of each four attempts B will run out at about twenty seconds** — **that is the task working: the shapes are short and the development is the difficulty.** Swap and change sets.'));
out.push(dlg(null, [
  ['A', '_(one minute on two pictures)_ __________'],
  ['B', '_(thirty seconds, beginning on the content word)_ **What neither of them __________.**'],
  ['B', '_(or)_ **The __________ in the __________ is __________ the way people __________.**'],
]));
out.push(table(['Card A – openings that work', 'Card B – openings that do not'], [
  ['_What neither of them shows is…_', '_⚠ So as you said, both of them…_'],
  ['_What the first shows and the second does not is…_', '_⚠ I agree with everything about the queue._'],
  ['_The woman with the folder is holding it the way…_', '_⚠ The first one is more striking, I think._'],
  ['_The second one has no adults in focus at all, which…_', '_⚠ Those are two very interesting photographs._'],
  ['_Both of them are morning pictures, and the thing that…_', '_⚠ To add to what my partner has already said…_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** B\'s opening four words, and whether anything was added. ⚠ **Every opening on Card B contains either a reference to the partner or an opinion**, and the four marked ones are the four that cannot be rescued: once _I agree_ is out, the next sentence has to disagree or repeat. **The finding is mechanical: an opening that mentions the other speaker has to be followed by something about the other speaker.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **three openings** for a pair you have not spoken about: one with _what neither of them shows_, one with _what the first shows and the second does not_, and one speculation about a person. ⚠ **Then mark which of the three you could develop for thirty seconds**, and be honest: **usually one of the three has nothing behind it.**'));
out.push(p('**b**  Perform the thirty seconds to a partner who holds a watch. ⚠ **They write down your first four words and whether you added anything.** **Then the hard half: they say what you could have added and did not.** **In most cases it is a person in the picture that nobody has mentioned.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani has had this done to him in writing: he listed three limitations and the referee wrote about two of them, and for three weeks he read that as the referee being lazy. Mrs Tarabishi asked and now, and now he sees that the referee chose the two that could be acted on — the third, that the series is retrospective, cannot be answered by anything he does to the paper, so the referee left it because there was nothing for him to do with it. Mr Zahreddine said that is a choice with a reason in it, and the referee did not state the reason, and Dr Qabbani spent three weeks angry: one clause would have cost nine words. Mrs Khoury said that is the lesson for the thirty seconds and it is the other way round — you are answering about your partner\'s pair and your job is to add one thing, not to say why you agree. Mrs Ajouz said in her examination she said she agreed with her partner and would add that both pictures were quite modern. Mr Shihabi said thirty seconds of nothing, and Mrs Ajouz said twenty-two seconds of nothing and then eight seconds of silence, which is on the recording too. Mrs Rizk asked what the one thing is, and the shapes are three and all short: what neither of them shows; what one of them shows that the other does not; or one speculation about a person in the pair that the partner did not mention. Mr Tayara asked for the first, and Mrs Khoury gave it — what neither of them shows is anybody from the directorate. Seven words, about the pair rather than about the partner, and it opens thirty seconds with something to say. Then Mrs Oueidat gave the worst opening, which she hears in interpreted evidence constantly: so as you said. Three words, and both halves are fatal — so makes it a continuation of somebody else\'s turn and as you said hands the content back to them, and she has to render it and there is nothing under it. Mr Attar asked about I agree, and I agree is not an answer to anything that was asked, because nobody asked whether you agreed. Mr Shihabi said a desk does this to him in reverse: they never say which two of his three strands they kept and they never say why. Dr Qabbani said and you spend three weeks angry, and Mr Shihabi said three years in his case — and the whole thing would have been nine words at the bottom of a message, which is what he will put at the bottom of every piece he files from now on, having been on both ends of it in one evening._'));
out.push(p('**Listener task:** write the thing your partner says you could have added and did not.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Dr Qabbani\'s reply to the referee, written after he had read the report a fourth time. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _reply to Referee 2_ · **2 December**',
  '**You have written about two of the three limitations and I am taking both.** **I had read the omission of the third as an oversight and it was not: the retrospective design cannot be answered by anything I do to this manuscript**, and you were right to spend your page on the two that can.',
  '**On the denominator.** **You ask why thirty-eight and not forty-one, and the table says so in a footnote where you could not be expected to look.** **Three sets of results from 2023 are not in the laboratory system and were not in the paper archive.** **I have moved that sentence into the Method, where it belongs**, and the three patients are now named in the table as _no result_ rather than being absent from it.',
  '**On the eleven.** **You ask whether the eleven were a subgroup identified in advance and they were not.** **They are the admissions for which the second sample was available and the first was not, and I found them by reading the admissions book.** ⚠ **I have written that sentence into the Results in those words**, because any shorter version of it reads as though the subgroup had been planned.',
  '**What I am not going to change, and I should rather say so than appear to have missed it.** **You suggest reporting the seven as a proportion.** **Seven of eleven is sixty-four per cent and the percentage is the one figure in this paper I will not print**, a proportion of eleven being a number that invites comparison with proportions of four hundred. **I have put _seven of the eleven_ in the abstract and in the Results and nowhere have I written sixty-four.**',
  '**On the limitation you did not write about.** **The design is retrospective and I have not corrected for it and cannot.** **What I have done is move the sentence from the end of the Discussion to the second paragraph**, so that a reader meets it before the result rather than after. **That is not an answer to the objection; it is the only thing available.**',
  '**One matter of fact that is not in your report.** **You refer twice to _the Damascus series_ in the singular.** **There are two earlier regional series and the second one asked for exactly the figure this paper reports.** ⚠ **I mention it because if the second is the one you have in mind, your second paragraph is about a different comparison from the one I thought you were making**, and I should want to answer that one instead.',
  '**Two small matters, both of which I have simply done.** **The figure in Table 2 was transposed — 12.0 for 21.0 in the fourth row** — which nobody had caught and which I found while answering your third point. **And the two references you say are missing are present and are numbered 14 and 15**, the numbering having restarted at the second appendix, which is a formatting fault and is corrected.',
  '**What I should like from the next round, if there is one.** ⚠ **One line saying which of your points you regard as blocking and which you do not.** **I have treated all of them as blocking, and the retrospective design cannot be answered** — **so if that one is blocking there is nothing for me to send.**',
]));
out.push(item('1', 'What does he say about the limitation the referee did not write about, and what has he done with it?'));
out.push(item('2', 'What is the one thing he refuses to change, and what reason does he give?'));
out.push(item('3', 'What matter of fact does he raise that the referee did not, and why does he raise it?'));
out.push(writers([
  'A reply that takes two of three: **the choice acknowledged in the first sentence, with the reason the third was left** → **each taken point, with what you have actually changed** → **the one thing you will not change, and why** → **what you have done about the point they did not raise** → **and any matter of fact in their own report.**',
  '⚠ **Acknowledge their choice and supply the reason they did not give.** _I had read the omission of the third as an oversight and it was not: the retrospective design cannot be answered by anything I do to this manuscript._ **It costs one sentence and it stops the reply being a defence.**',
  '**Say what you changed, in the document\'s own words.** ⚠ _I have written that sentence into the Results in those words, because any shorter version reads as though the subgroup had been planned._ **A reply that says _this has been clarified_ has told the referee nothing and will be read twice.**',
  '**Refuse one thing and give the reason as a fact about the world.** ⚠ _A proportion of eleven is a number that invites comparison with proportions of four hundred._ **Then the evidence that you have done it: _nowhere have I written sixty-four._**',
  '⚠ And **raise the matter of fact in their report, as a question about what they meant.** _If the second is the one you have in mind, your second paragraph is about a different comparison from the one I thought you were making._ **That is not a correction and it is not a complaint: it asks which of two objections you are being asked to answer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a reply that takes two of three (120 words or more).'));
out.push(p('**______________** · _reply to _______________ · **______________**   **You have written about ______________ of the ______________ and I am taking ______________.** ⚠ **I had read the omission of ______________ as ______________ and it was not: ______________ cannot be answered by ______________**, and you were right to ______________.   **On ______________.** **You ask why ______________, and ______________.** **______________.** **I have moved ______________ into ______________, where it belongs.**   **On ______________.** **You ask whether ______________ and ______________.** ⚠ **I have written that sentence into ______________ in those words**, because any shorter version reads as though ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Their choice acknowledged and the reason for it supplied',
  'Each change given in the document\'s own words, not as _clarified_',
  'One refusal, with a reason that is a fact about the world',
  'No sentence beginning _so_, _as you said_ or _I agree_',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says whether it acknowledges a choice or begins a defence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole reply (260 words or more), to the shape in the writer\'s box: the choice acknowledged, each point taken with its change, the one refusal, the point they did not raise, and the matter of fact in their report.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: their choice acknowledged with its reason, changes in the document\'s own words, one refusal with a world-fact reason, and nothing added about agreement.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Each student performs thirty seconds on a partner\'s pair, and the room writes down the first four words.** ⚠ **Any turn beginning with _so_, _I_ or _as_ is stopped and restarted.** **Most people need two restarts and then never do it again.** Then the sentence the cycle ends on, which is Mr Shihabi\'s: **three years, in my case.**'));
out.push(hw('Find **a piece of feedback you received this year in which somebody dealt with some of your points and not all of them.** ⚠ **Write the clause they did not write: which they took, and why they left the rest.** **Then do the other half, which is the one that changes your own work: find something you returned to somebody with two of their three points answered**, and write the nine words you owed them. **Bring both clauses.** **3.5 is the essay\'s first decision**, and it is the same decision as the photographs.'));

// ===================== 3.5 =====================
out.push(pb());
out.push(h2('3.5  Two of the three points, and why those two'));
out.push(p('**Function:** choosing two of three bullet points and justifying the choice in the first paragraph   ·   **Grammar:** _of the three, the first and the third are the ones that ___   ·   **Pronunciation:** the justification said in one breath'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads out three points on one question. ⚠ **Round the room: which two, and the ground, in one sentence each.** **No two students may give the same ground.** Your teacher writes the ten grounds on the board; the room then says which of the ten it would read.'));
out.push(p('**b**  Which of these is a ground rather than a preference? **1** _I shall take the first and the third because they interest me most._  **2** _Of the three, the first and the third are the only two that can be tested against anything._  **3** _I have chosen the second and third as the most important._  **4** _The first and the second are the two about which there is published evidence; the third is a matter of opinion._  **5** _I shall deal with points one and two in the time available._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide makes a ground usable?   **A** that it is interesting   **B** **that it names a property the two chosen points share and the third does not** — so a reader can check the choice rather than agree with it   **C** that it is short'));
out.push(p('**b**  Listen again. **1** What three questions was Mr Tayara asked by the ministry, and which two did he answer?   **2** What does Mrs Tarabishi say happens to a ground made out of _importance_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.9  Two of three, and the ground', [
  ['Ms Huda', 'Mr Tayara has been asked three questions by people who will not meet him.'],
  ['Mr Tayara', '**A circular, to all heads, with three questions and a page and a half.** ⚠ **How the ten extra minutes affect teaching time. How many families are affected. And whether the change should be adopted across the governorate.**'],
  ['Mrs Rizk', 'And a page and a half for three.'],
  ['Mr Tayara', '⚠ **Which is five hundred words, and the third question cannot be answered in a hundred and sixty.** **It is a policy question and I run one school.**'],
  ['Dr Qabbani', 'So you answered two.'],
  ['Mr Tayara', '**Two, and I said which two in the first sentence**, and the ground was the thing I had to think about for an evening.'],
  ['Mrs Khoury', 'Give the room the first version.'],
  ['Mr Tayara', '⚠ _I shall deal with the first and second questions, which are the most important._ **That is what I wrote at nine o\'clock and it is useless.**'],
  ['Mrs Tarabishi', '**_Importance_ is the worst ground there is.** ⚠ **It is not a property of the questions at all; it is an opinion about them** — **and a reader who disagrees has nothing to disagree with, which means they simply think you chose the easy two.**'],
  ['Mr Shihabi', 'Which he did.'],
  ['Mr Tayara', '⚠ **Which I did, and the second version says so without apologising.** _Of the three questions, the first two can be answered from this school\'s own records and the third cannot be answered by a head teacher at all._'],
  ['Mrs Oueidat', 'That names a property.'],
  ['Mrs Khoury', '⚠ **It names a property the two chosen questions share and the third does not** — **answerable from records** — **and a reader can check it.** **That is the difference between a ground and a preference: a ground can be wrong.**'],
  ['Mrs Ajouz', 'And in the examination the three points are not questions, they are statements.'],
  ['Mrs Khoury', '**The grounds are the same four.** ⚠ **The two that can be tested against something.** **The two that are about the same thing.** **The two where you have evidence and the third is opinion.** **Or the two that disagree with each other, which is the strongest and the rarest.**'],
  ['Jad', 'Why is that one the strongest?'],
  ['Mrs Khoury', '⚠ **Because an essay about two points that pull in opposite directions has an argument built into it before you write a word.** **Two points that agree give you four hundred words of saying the same thing twice.**'],
  ['Mrs Tarabishi', 'And the one you leave out — one clause, as in 3.1?'],
  ['Mrs Khoury', '⚠ **One clause, in the first paragraph, and never again.** **_The third cannot be answered by a head teacher at all_ is eleven words** — **and the examiner has your ground and your omission before the end of paragraph one.**'],
  ['Mr Tayara', '🔊 ⚠ **And it has to be said in one breath, which I found out reading it to my wife.** **The first version had three commas in it and she asked me what I was apologising for.**'],
]));
out.push(sp());
out.push(box('Language box – the ground for choosing two', [
  '**The shape, and it goes in the first paragraph.** _**Of the three, the first and the third are the ones that** can be tested against something._ · _**Of the three questions, the first two can be answered from this school\'s own records and the third cannot be answered by a head teacher at all.**_',
  '⚠ **A ground names a property the two chosen points share and the third does not.** **A preference names your own state of mind.** _The most important_ · _the most interesting_ · _the two I shall deal with in the time available_ — **none of those is a property of anything**, and a reader who disagrees has nothing to disagree with, so they conclude you took the easy two.',
  '⚠ **The test: can the ground be wrong?** **_Answerable from records_ can be wrong — somebody may show you that the third is answerable too.** **_The most important_ cannot be wrong and therefore cannot be checked.** **A ground that cannot be wrong is a preference with a long word in front of it.**',
  '**The four grounds that work, and they cover almost every set of three.** **1 The two that can be tested against something.** **2 The two that are about the same thing.** **3 The two where you have evidence and the third is opinion.** ⚠ **4 The two that disagree with each other** — **which is the strongest and the rarest, because an essay about two points pulling in opposite directions has an argument in it before you write a word.** **Two points that agree give you four hundred words of saying the same thing twice.**',
  '**The omission: one clause, in the first paragraph, and never again.** ⚠ _..., and the third cannot be answered by a head teacher at all._ **Eleven words, and the examiner has your ground and your omission before paragraph two.**',
  '**And the thing that makes this different from 3.1.** ⚠ **Here the reader set the limit and knows the third point exists**, so the clause is not telling them something new — **it is telling them that the omission is a decision and not a failure to notice.** **Four seconds of their reading, and it is the four seconds the content mark turns on.**',
  '**Pronunciation.** 🔊 **Track 3.10** **One breath, no commas you do not need.** ⚠ **A ground with three commas in it sounds like an apology** — **one writer in this room read his first version to his wife and she asked him what he was apologising for.** **Say it flat, in one go, and move on to the first point.**',
  '**Practise:** Choose two of three and give the ground as a property. **1** the two that can be tested  **2** the two about the same thing  **3** the two with evidence  **4** the two that disagree  **5** one where all three are testable — and say what you chose on instead',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads three points from the card. B chooses two and gives **the ground as a property, in one sentence, with the omission in one clause.** ⚠ **In one set on each card all three points are testable**, so the four grounds do not apply — **and B has to say what they are choosing on instead and admit that it is a preference.** Swap cards.'));
out.push(dlg(null, [
  ['A', 'Three points: __________ · __________ · __________.'],
  ['B', '**Of the three, __________ and __________ are the ones that __________,** and __________ __________.'],
  ['B', 'Ground: **property / preference.** If a preference: **I am choosing on __________.**'],
]));
out.push(table(['Card A – three points', 'Card B – three points'], [
  ['_Qualifications prove a standard · experience is unverifiable · training makes a skill visible._', '_Written work shows care · interviews show speed · references show nothing._'],
  ['_⚠ Cities are cheaper to serve · villages have older populations · the two should be funded alike._', '_⚠ Examinations measure recall · coursework measures persistence · both measure teaching._'],
  ['_Public transport is subsidised · private transport is taxed · neither is counted properly._', '_Translation adds certainty · interpretation adds speed · both add a person._'],
  ['_Teaching time is fixed · arrival time is not · parents are affected by both._', '_The figures are published quarterly · the method is not published · the comparison is annual._'],
  ['_⚠ Three published series disagree · the deflator is unpublished · the data are self-reported._', '_⚠ Specifications can be failed · criteria often cannot · panels prefer the second._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the grounds, and whether each is a property or a preference. ⚠ **The four rows marked ⚠ have three testable points each**, so none of the four grounds applies and the choice is genuinely a preference. **The finding is the honest one: sometimes there is no ground, and then the thing to do is choose the two that disagree with each other and say that is why.** **A preference admitted in four words beats a property invented in twelve.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take three points from a card you have not used and write **your first paragraph only**: the ground as a property, the omission in one clause, and nothing else. ⚠ **Then count the commas in your ground.** **More than one and read it aloud.**'));
out.push(p('**b**  Swap. Your partner reads your ground and says **whether it could be wrong.** ⚠ Then the harder half: **they try to make it wrong** — _the third is answerable from records too, because…_ **A ground that survives one attempt is a ground.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara has been asked three questions by people who will not meet him: a circular to all heads with three questions and a page and a half — how the ten extra minutes affect teaching time, how many families are affected, and whether the change should be adopted across the governorate. Mrs Rizk said a page and a half for three, and that is five hundred words, and the third question cannot be answered in a hundred and sixty: it is a policy question and he runs one school. Dr Qabbani said so he answered two, and two, and he said which two in the first sentence, and the ground was the thing he had to think about for an evening. Mrs Khoury asked for the first version, and it was: I shall deal with the first and second questions, which are the most important. That is what he wrote at nine o\'clock and it is useless. Mrs Tarabishi said importance is the worst ground there is — it is not a property of the questions at all but an opinion about them, and a reader who disagrees has nothing to disagree with, which means they simply think you chose the easy two. Mr Shihabi said which he did, and Mr Tayara said which he did, and the second version says so without apologising: of the three questions, the first two can be answered from this school\'s own records and the third cannot be answered by a head teacher at all. Mrs Oueidat said that names a property, and Mrs Khoury said it names a property the two chosen questions share and the third does not — answerable from records — and a reader can check it. That is the difference between a ground and a preference: a ground can be wrong. Mrs Ajouz said that in the examination the three points are not questions but statements, and the grounds are the same four: the two that can be tested against something; the two that are about the same thing; the two where you have evidence and the third is opinion; or the two that disagree with each other, which is the strongest and the rarest. Mr Attar asked why that one is strongest, and because an essay about two points that pull in opposite directions has an argument built into it before you write a word, where two points that agree give you four hundred words of saying the same thing twice. Mrs Tarabishi asked about the one left out — one clause, as in 3.1 — and one clause, in the first paragraph, and never again: the third cannot be answered by a head teacher at all is eleven words, and the examiner has the ground and the omission before the end of paragraph one. And Mr Tayara said it has to be said in one breath, which he found out reading it to his wife: the first version had three commas in it and she asked him what he was apologising for._'));
out.push(p('**Listener task:** write your partner\'s attempt to make your ground wrong, and whether it survived.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the reply Mr Tayara sent to the ministry. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _reply to circular 311/4, three questions_ · **21 November**',
  '**Of the three questions, the first two can be answered from this school\'s own records and the third cannot be answered by a head teacher at all.** **I have answered the first two in full and I say at the end what would be needed to answer the third.**',
  '**On teaching time, which is the first question.** **The teaching day has not changed.** **The ten minutes come out of the form period, which ran from twenty past eight to half past, and the second bell is where it was.** **The register now closes at half past eight instead of twenty-five past.** ⚠ **Form period is not teaching time in the ministry\'s own definition** — circular 118/2 of 2019, paragraph four — **so the answer to the question as asked is that teaching time is unaffected.** **The answer to the question as meant may be different and I give it below.**',
  '**What the question as meant might be, and this is the part worth your reading.** **Form period is where attendance, uniform, notes from home and anything a pupil needs to say to an adult all happen.** **Ten minutes of thirty is a third of it.** **In the three weeks since the change, the number of pupils seen individually in form period has fallen from about nineteen a week to about eleven**, which I did not predict and which I am recording because nobody asked for it.',
  '**On families, which is the second question.** **Two hundred and forty-one families.** **Twelve drop two children at two schools inside the same fifteen minutes, and four of the twelve have a second school that also starts at twenty past eight.** **Those four cannot comply and I have written to them separately.** **The eleven I wrote about in September are a different eleven**, being the families on the parents\' committee list, and the overlap between the two groups is three.',
  '**On the third question.** **Whether this should be adopted across the governorate cannot be answered from one school\'s records**, and an answer from me would be one head\'s opinion with a figure attached to make it look otherwise. **What would be needed is the form-period figure from four schools that have made the change and four that have not**, over one term. ⚠ **I have the figure for this school and would send it to whoever is collecting them.** **If nobody is collecting them, that is the answer to the third question.**',
  '**Two things about the first question that I should have put in the first paragraph and did not.** **The ten minutes were taken from form period because the alternative was the first lesson**, and the ministry\'s own circular forbids that. **So the change the ministry is asking about is the only change its own rules allow**, which is worth knowing before the governorate decides anything. ⚠ **And the form-period figure above is three weeks long.** **It is the only figure in this reply that will look different in March**, and I shall send it again then whether it is asked for or not.',
]));
out.push(item('1', 'What ground does he give for answering two of the three, and is it a property or a preference?'));
out.push(item('2', 'What is the difference between the question as asked and the question as meant, and how does he handle both?'));
out.push(item('3', 'What does he say would be needed to answer the third question, and what does he say if nobody is collecting it?'));
out.push(writers([
  'A reply that answers two of three: **the ground as a property, in the first sentence, with the omission in one clause** → **the first answer, with the definition it turns on** → **the question as meant, if it differs** → **the second answer, with the figures and any overlap with earlier figures** → **and what would be needed to answer the third.**',
  '⚠ **Give the ground as a property of the questions.** _The first two can be answered from this school\'s own records and the third cannot be answered by a head teacher at all._ **It can be wrong, which is what makes it a ground** — **_the most important_ cannot be wrong and is therefore worthless.**',
  '**Answer the question as asked and then the question as meant.** ⚠ _The answer to the question as asked is that teaching time is unaffected. The answer to the question as meant may be different and I give it below._ **A reader who wanted the second gets both; a reader who wanted the first is not made to read an argument.**',
  '**Reconcile your own earlier figures.** ⚠ _The eleven I wrote about in September are a different eleven, and the overlap between the two groups is three._ **Two numbers that look the same and are not will be noticed by somebody with a file, and the reconciliation costs one clause.**',
  '⚠ And **say what would answer the question you have not answered, and then the sting.** _If nobody is collecting them, that is the answer to the third question._ **Fourteen words, and they are the only sentence in the letter that is about the ministry rather than about the school.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a reply that answers two of three (120 words or more).'));
out.push(p('**______________** · _reply to _______________, three questions_ · **______________**   **Of the three questions, ______________ can be answered from ______________ and ______________ cannot be answered by ______________ at all.** **I have answered ______________ in full and I say at the end what would be needed to answer ______________.**   **On ______________, which is the first question.** **______________ has not changed.** **______________ come out of ______________.** ⚠ **______________ is not ______________ in ______________\'s own definition** — ______________ — **so the answer to the question as asked is that ______________.** **The answer to the question as meant may be different and I give it below.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The ground a property that could be wrong, in the first sentence',
  'The omission in one clause, and never mentioned again',
  'The question as asked and the question as meant, both answered',
  'Any earlier figure of your own reconciled with this one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their ground**, and the room tries to make each one wrong.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole reply (260 words or more), to the shape in the writer\'s box: the ground, the first answer with its definition, the question as meant, the second answer with its figures, and what would answer the third.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a ground that could be wrong, the omission in one clause, both versions of the question answered, and earlier figures reconciled.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their ground twice: once in one breath and once with the commas observed.** ⚠ **The room says which version sounded like an apology.** **It is always the second and the difference is about half a second.** Then the sentence the cycle ends on, which is Mr Tayara\'s wife\'s: **what are you apologising for?**'));
out.push(hw('Take **three questions or three points you have been given this year** — in a form, a circular, a brief, a review — and write **the first paragraph that answers two.** ⚠ **Then test your own ground by trying to make it wrong**, in writing, in one sentence. **If you cannot make it wrong, it is a preference and the paragraph has to be written again.** **Bring the paragraph and the attempt.** **3.6 writes the whole essay**, and two of your classmates will choose a different pair from the same three points.'));

// ===================== 3.6 =====================
out.push(h2('3.6  The essay that leaves one out'));
out.push(p('**Function:** writing the essay that leaves a point out and says so once   ·   **Grammar:** the four-paragraph shape with the ground in paragraph one   ·   **Pronunciation:** reading your own conclusion without raising the voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the pair you chose in 3.5 and the pair you did not.** ⚠ **Count the pairs on the board.** **In a room of ten there are usually two or three different pairs from the same three points**, and the room reads the grounds and decides which pair has an argument in it.'));
out.push(p('**b**  Which of these conclusions follows from an essay and adds one thing? **1** _On balance, then, the question is not whether experience counts but whether it can be made checkable._  **2** _In conclusion, both points are clearly very important._  **3** _To sum up, I have discussed two of the three points above._  **4** _For the reasons given, the first consideration outweighs the second._  **5** _What follows is practical rather than a matter of opinion: the stage of visible method is a condition to be left and not a fault to be avoided._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about two essays on the same three points?   **A** one of them must be better   **B** **two different pairs produce two different essays and both can be band five** — because the mark is for what you do with the pair and not for which pair you took   **C** the examiner prefers one pair'));
out.push(p('**b**  Listen again. **1** What pairs did Mrs Ajouz and Mrs Tarabishi take, and what did each essay turn out to be about?   **2** What does Mr Zahreddine say about the paragraph that only exists so that the next one can work?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.11  The same three points, two essays', [
  ['Ms Huda', 'Two essays on the three points about expertise. Mrs Ajouz first.'],
  ['Mrs Ajouz', '**I took the first and the third** — _the best work looks easy_ and _training makes a skill visible before it makes it automatic_. ⚠ **And by the third paragraph I found that the second one explains the first.**'],
  ['Mrs Tarabishi', '**I took the first and the second** — _looks easy_ and _experts misjudge their own competence_ — **and mine turned into an essay about evidence.**'],
  ['Dr Qabbani', 'From the same three sentences.'],
  ['Mrs Tarabishi', '⚠ **From the same three sentences, and neither of us is wrong.** **Mine is about why nobody can assess themselves and hers is about why the method has to be shown first.**'],
  ['Mrs Khoury', '**Which is the point of the cycle.** ⚠ **The mark is for what you do with the pair and not for which pair you took.** **Two different pairs produce two different essays and both can be band five.**'],
  ['Mr Shihabi', 'And if you take the two that agree?'],
  ['Mrs Ajouz', '⚠ **Then you write four hundred words twice**, which is what I did in the examination with three. **The pair that argues is the one that writes itself.**'],
  ['Mr Zahreddine', 'May I ask about a paragraph in Mrs Ajouz\'s? ⚠ **The second one says almost nothing new.**'],
  ['Mrs Ajouz', '**It says that visible effort is not rewarded either.**'],
  ['Mr Zahreddine', '⚠ **Which I already believed, and the paragraph is still doing something** — **because without it the third paragraph has nothing to stand on.** **I have written structures like that and never written a paragraph like that.**'],
  ['Mrs Khoury', '⚠ **It is the load-bearing paragraph and it is Unit 23 in the second book.** **A paragraph whose only job is to let the next one work is not padding**, and the test is whether the next paragraph survives its removal.'],
  ['Mr Tayara', 'And the conclusion?'],
  ['Mrs Khoury', '⚠ **Follows from the two paragraphs and adds one thing.** _What follows is practical rather than a matter of opinion: the stage of visible method is a condition to be left and not a fault to be avoided._ **The one thing is _practical rather than a matter of opinion_** — **nothing above it said that.**'],
  ['Mrs Oueidat', 'As against _in conclusion, both points are clearly very important_.'],
  ['Mrs Khoury', '⚠ **Which adds nothing and follows from nothing.** **It is the sentence a candidate writes when the four hundred words have not decided anything**, and an examiner has read it eleven times that morning.'],
  ['Jad', 'And the third point — one clause in paragraph one and nothing after?'],
  ['Mrs Ajouz', '⚠ **Nothing after, and I wanted to put something.** **My second paragraph had _as I said, I am not dealing with the second point_ in it and I took it out at the end.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the conclusion goes down and not up.** **I read mine aloud and the last four words went up, as though I were asking whether it would do.** **Which is exactly what I was doing.**'],
]));
out.push(sp());
out.push(box('Language box – the essay that leaves one out', [
  '**The shape, four paragraphs, one job each.** **1 The position, with the ground for your pair and the omission in one clause.** **2 The first point, taken at its strongest.** **3 The second point, and the place where the two pull against each other.** **4 The conclusion, which follows from 2 and 3 and adds one thing.**',
  '⚠ **The mark is for what you do with the pair and not for which pair you took.** **Two students took different pairs from the same three points: one essay became about why nobody can assess themselves and the other about why a method has to be shown first.** **Neither is wrong and both can be band five.**',
  '⚠ **Take the pair that argues.** **Two points that agree give you four hundred words of saying the same thing twice** — **which is what a candidate writes when they have chosen on interest.** **The pair that pulls in two directions has an argument in it before the first word.**',
  '**The load-bearing paragraph, and it is allowed.** ⚠ **A paragraph whose only job is to let the next one work is not padding.** _Visible effort is not rewarded either_ **may be something the reader already believes, and without it the third paragraph has nothing to stand on.** **The test is whether the next paragraph survives its removal.**',
  '**The conclusion follows from the two paragraphs and adds one thing.** ⚠ _What follows is practical rather than a matter of opinion: the stage of visible method is a condition to be left and not a fault to be avoided._ **The added thing is _practical rather than a matter of opinion_, and nothing above it said that.** **Against:** _in conclusion, both points are clearly very important_ — **which adds nothing, follows from nothing, and an examiner has read it eleven times that morning.**',
  '⚠ **And the third point is not mentioned again, anywhere.** **One clause in paragraph one.** **The instinct in paragraph two is to write _as I said, I am not dealing with the second point_**, and it has to come out at the end — **one writer in this room did exactly that and took it out.**',
  '**Pronunciation.** 🔊 **Track 3.12** **Read your own conclusion with the last four words going down.** ⚠ **A conclusion read with a rise is a conclusion offered for approval** — _as though I were asking whether it would do_ — **and in the Speaking paper the same rise invites the examiner to take the turn back.**',
  '**Practise:** Write a conclusion that follows and adds one thing. **1** adding a consequence  **2** adding a cost  **3** adding what would change your view  **4** adding what the two points have in common that neither states  **5** one where you have nothing to add — and say so in the conclusion rather than padding it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a conclusion from the card. B does two things: **says what it adds, and says which two paragraphs it must have followed.** ⚠ **Two rows on each card add nothing** — B has to say what they would add instead, **using the two paragraphs A describes.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'It adds: __________.   It follows paragraphs about __________ and __________.'],
  ['B', 'Adds nothing: **instead, __________.**'],
]));
out.push(table(['Card A – conclusions', 'Card B – conclusions'], [
  ['_On balance the question is not whether experience counts but whether it can be made checkable._', '_What follows is practical: the stage of visible method is a condition to be left._'],
  ['_⚠ In conclusion, both points are clearly very important._', '_⚠ To sum up, I have discussed two of the three points above._'],
  ['_The two together suggest that the real difficulty is not assessment but who is doing it._', '_Neither point survives the other, which is why the choice between them is the wrong question._'],
  ['_⚠ For these reasons I believe my view is the correct one._', '_⚠ All things considered, there are arguments on both sides._'],
  ['_What would change my view is a figure nobody has yet collected._', '_The cost of accepting both is one that falls entirely on the person being assessed._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what each conclusion adds. ⚠ **The four rows marked ⚠ add nothing and they fail in two different ways.** **_Both points are clearly very important_ and _there are arguments on both sides_ decide nothing.** **_I have discussed two of the three points above_ and _I believe my view is correct_ describe the essay instead of concluding it** — **which is the metatext of 1.6 arriving in the one place a C1 candidate is most likely to write it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your own first paragraph and conclusion only**, for the pair you chose in 3.5. ⚠ **Then test the conclusion: cover the first paragraph and read the conclusion alone.** **If it still makes sense, it is not following from anything.**'));
out.push(p('**b**  Swap with somebody who chose **a different pair from the same three points.** ⚠ **Each of you says what the other\'s essay is going to be about.** **If you can both say it in one sentence, both essays have an argument in them.** **If one of you cannot, that pair agrees.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two essays on the three points about expertise. Mrs Ajouz took the first and the third — the best work looks easy, and training makes a skill visible before it makes it automatic — and by the third paragraph she found that the second one explains the first. Mrs Tarabishi took the first and the second — looks easy, and experts misjudge their own competence — and hers turned into an essay about evidence. Dr Qabbani said from the same three sentences, and from the same three sentences, and neither of them is wrong: Mrs Tarabishi\'s is about why nobody can assess themselves and Mrs Ajouz\'s is about why the method has to be shown first. Mrs Khoury said that is the point of the cycle — the mark is for what you do with the pair and not for which pair you took, and two different pairs produce two different essays and both can be band five. Mr Shihabi asked what happens if you take the two that agree, and Mrs Ajouz said then you write four hundred words twice, which is what she did in the examination with three: the pair that argues is the one that writes itself. Mr Zahreddine then asked about a paragraph in Mrs Ajouz\'s essay, because the second one says almost nothing new. She said it says that visible effort is not rewarded either, and he said which he already believed, and the paragraph is still doing something, because without it the third paragraph has nothing to stand on — and he has written structures like that and never written a paragraph like that. Mrs Khoury said it is the load-bearing paragraph and it is Unit 23 in the second book: a paragraph whose only job is to let the next one work is not padding, and the test is whether the next paragraph survives its removal. Mr Tayara asked about the conclusion, and it follows from the two paragraphs and adds one thing — what follows is practical rather than a matter of opinion: the stage of visible method is a condition to be left and not a fault to be avoided. The one thing is practical rather than a matter of opinion, and nothing above it said that. Mrs Oueidat offered the alternative, in conclusion both points are clearly very important, which adds nothing and follows from nothing: the sentence a candidate writes when the four hundred words have not decided anything, and an examiner has read it eleven times that morning. Mr Attar asked about the third point — one clause in paragraph one and nothing after — and nothing after, and Mrs Ajouz wanted to put something: her second paragraph had as I said, I am not dealing with the second point in it, and she took it out at the end. And Mrs Tarabishi said the conclusion goes down and not up: she read hers aloud and the last four words went up, as though she were asking whether it would do, which is exactly what she was doing._'));
out.push(p('**Listener task:** write what your partner\'s essay is going to be about, in one sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two essays on the same three points. Answer the questions.'));
out.push(model([
  '**ESSAY ONE** _(N. Ajouz · points one and three)_',
  '**Of the three claims, the first and the third are the two that explain each other, and the second is a claim about psychology that neither of them needs.** **Good work looking easy and training having to make a method visible are not two observations; they are one process seen from each end.**',
  '**That the best work looks easy is half true and the wrong half is usually quoted.** Work that looks easy is harder to charge for: a translation nobody notices, a frame that is simply certified. **But the claim assumes that visible effort is rewarded instead, and it is not** — a document that advertises its own care is read as defensive. **Neither kind of work is rewarded for its effort, because readers cannot see effort at all.**',
  '**The third claim explains why the first is unavoidable.** **A method must be made visible to be taught, so every competent person passes through a stage of producing work that announces its own structure** — and the announcement is the only part of the process a reader ever sees. **Some stay there, not because they have stopped learning but because nobody has told them that the scaffolding comes down.**',
  '**What follows is practical rather than a matter of opinion.** **The visible stage is a condition to be left and not a fault to be avoided**, and the only reliable sign of having left it is that other people stop being able to describe how the work was done.',
  '**ESSAY TWO** _(R. Tarabishi · points one and two)_',
  '**Of the three claims, the first and the second are the two that can be tested against something, and the third is a claim about teaching that this essay does not need.** **Both are claims about who can see what, and together they make the third unnecessary.**',
  '**That the best work looks easy is a claim about readers and not about work.** It says that readers cannot see effort, which is testable and appears to be true: the same page, presented as a first draft and as a fifth, is judged differently. **The inference usually drawn — that easy-looking work is undervalued — does not follow, because visible effort is punished too.**',
  '**That experts misjudge their own competence is the same claim turned inwards, and it is the stronger of the two.** **If readers cannot see effort, a worker has no instrument for judging their own except the reactions of readers who cannot see it.** ⚠ **The objection is that experts have their results, and the answer is that results are slow, noisy and attributed to other causes.**',
  '**On balance the question is not whether people misjudge themselves but who is in a position to tell them.** **The two claims together leave only one answer, which is a reader who has been shown what to look at** — **and that is a claim about training, which is where the third point was and why I have not needed it.**',
]));
out.push(item('1', 'What ground does each writer give, and what does each say about the point she leaves out?'));
out.push(item('2', 'Which paragraph of Essay One is load-bearing, and what would the next paragraph lose without it?'));
out.push(item('3', 'Essay Two ends by arriving at the point it left out. Is that a fault? What does the last clause do about it?'));
out.push(writers([
  'An essay that leaves one point out: **the ground for your pair and the omission, both in paragraph one** → **the first point at its strongest, with the inference you refuse** → **the second point, and the place the two pull against each other** → **and a conclusion that follows and adds one thing.**',
  '⚠ **Put the ground and the omission in the same sentence.** _Of the three claims, the first and the third are the two that explain each other, and the second is a claim about psychology that neither of them needs._ **Twenty-nine words, and the examiner has the choice, the ground and the omission before the second sentence.**',
  '**Take each point at its strongest and then refuse the inference.** ⚠ _The inference usually drawn — that easy-looking work is undervalued — does not follow, because visible effort is punished too._ **An essay that agrees with its own points has nowhere to go in paragraph four.**',
  '**Let a paragraph be load-bearing.** ⚠ **Essay One\'s second paragraph says something most readers already accept, and the third paragraph cannot stand without it.** **The test is removal, not novelty.**',
  '⚠ And **if your argument arrives at the point you left out, say so in the last clause.** _..., which is a claim about training, which is where the third point was and why I have not needed it._ **That is not a fault and it is the strongest possible ending**: the omission has been justified by the essay instead of by the first paragraph.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your first paragraph and one body paragraph (120 words or more).'));
out.push(p('**Of the three claims, ______________ and ______________ are the two that ______________, and ______________ is ______________ that ______________.** **______________ and ______________ are not two ______________; they are ______________.**   **That ______________ is ______________ and the wrong half is usually quoted.** ______________. ⚠ **But the claim assumes that ______________, and it is not** — ______________. **______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The ground and the omission in paragraph one, in one sentence',
  'The third point not mentioned anywhere after that',
  'Each point taken at its strongest, with the inference you refuse',
  'A conclusion that follows from the body and adds one thing',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their conclusion**, and the room says what it adds and which two paragraphs it must have followed.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole essay (260 words or more), to the shape in the writer\'s box: the ground and the omission, the two points at their strongest, the place they pull against each other, and a conclusion that adds one thing.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the ground and omission in paragraph one, no later mention of the third point, an inference refused, and a conclusion that adds one thing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their conclusion twice: once with the last four words going down and once with them going up.** ⚠ **The room says what the rise asked for.** **Approval, every time.** Then the sentence the cycle ends on, which is Mrs Tarabishi\'s, and it is the most honest four words in the unit: **which is exactly what I was doing.**'));
out.push(hw('Write **the whole essay** for your pair. ⚠ **Then do the thing two people in this room did by accident: find somebody who took a different pair from the same three points and read each other\'s.** **Write one line saying what their essay is about, and one saying what yours is about, and check that the two lines are different.** **If they are the same, one of you chose on interest.** **Bring the essay and the two lines.** **3.7 is the unit check**, and the mediation is between an essay and a reader who wants the third point.'));

// ===================== 3.7 =====================
out.push(h2('3.7  Review & Mediate: The reader who wants the third point'));
out.push(p('**Function:** mediating between an essay and a reader who wants the point it left out   ·   **Recycling:** Unit 3   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 1 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 3 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Of the three, the first and the third are the ones which can be tested them.  **2** I shall talk about the first and the third, because both of them shows somebody waiting.  **3** Space does not permit, which names what is missing.  **4** The second route takes eleven months, whereas on the other hand the first takes four.  **5** What neither of them show is anybody from the directorate.  **6** She passed on the chance of the four-months route, that needed a supervisor.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the essay and the two readings of it that reached Room 14 in the same week.'));
out.push(box(null, [
  '**ONE ESSAY, TWO READINGS** _(the writer is a student a year behind this class and asked for comments)_',
  '**The essay\'s first paragraph.** _"Of the three claims, the first and the second are the two that can be tested against something, and the third is a claim about teaching that this essay does not need. Both are claims about who can see what."_',
  '**The first reader.** _"This is very good, but she has not dealt with the third point at all. She should add a paragraph on it. The essay would then be complete."_',
  '**The second reader.** _"She has done exactly what was asked. There is nothing to add. I would not change a word."_',
  '⚠ **Both readers have read the instruction and neither of them is being useful to the writer.**',
  '**And the thing neither of them noticed.** **Her last paragraph arrives at the third point** — _which is a claim about training, which is where the third point was_ — **and she does not say so.**',
  '**The question for the cycle.** _What do you say to the person who wrote it?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does the room decide the one useful thing to say is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 3.13  The reader who wants the third point', [
  ['Ms Huda', 'Two readings of one essay. Mr Shihabi — which reader is right?'],
  ['Mr Shihabi', 'The second. ⚠ **And the second reader is the less useful of the two, which is the awkward part.**'],
  ['Mrs Tarabishi', 'Why less useful? He is correct.'],
  ['Mr Shihabi', '⚠ **He says there is nothing to add and there is one thing to add**, and it is in her own last paragraph. **A reader who approves has stopped reading at the same point as a reader who objects.**'],
  ['Dr Qabbani', 'And the first reader is simply wrong.'],
  ['Mrs Khoury', '⚠ **The first reader is wrong about the instruction and right about something else, and that is worth four minutes.** **He has noticed that the essay is about the third point.** **He has read it as an omission because the essay never admits it.**'],
  ['Mr Tayara', 'So the fault is hers after all.'],
  ['Mrs Khoury', '⚠ **It is not a fault.** **It is nine words she has not written.** _..., which is where the third point was and why I have not needed it._ **Her argument arrives at the thing she set aside and she does not say so** — **and the one reader who noticed concluded she had forgotten it.**'],
  ['Mrs Ajouz', 'In my examination nobody told me anything at all. I had a number.'],
  ['Mrs Oueidat', '⚠ **Which is the whole reason this cycle exists.** **An examiner gives a band and a colleague gives an opinion**, and neither of them tells you the nine words.'],
  ['Mrs Rizk', 'And what do you actually say to her?'],
  ['Mr Zahreddine', '⚠ **Read her her own last clause and ask what the third point was.** **That is the whole mediation.**'],
  ['Mrs Tarabishi', 'Not _add nine words_?'],
  ['Mr Zahreddine', '⚠ **No, because then they are my nine words.** **Read the clause, ask the question, and the nine words will be hers and she will remember writing them.**'],
  ['Jad', 'That is the same move as 1.7.'],
  ['Mrs Khoury', '⚠ **It is exactly the same move and the class should notice.** **Say what is correct. Show the writer their own sentence. Ask one question. Stop.** **Three units and three cycles and it has not changed.**'],
  ['Mrs Ajouz', 'And the first reader — do you tell him he has misread the instruction?'],
  ['Mrs Oueidat', '⚠ **Not unless he asks.** **He is not the person who has to write anything.** **A mediator who corrects the reader has spent the cycle on the easier of the two people in front of them.**'],
  ['Mr Shihabi', '🔊 ⚠ **And the thing I shall take away is that a reader who praises you is as little use as one who objects.** **Both of them stopped at the same place.** **The only reader who was any use is the one who noticed something and got the reason wrong.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between an essay and a reader', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**Here the sentence is her last clause and the question is four words.** _..., which is a claim about training._ ⚠ **_What was the third point?_** **The nine words she needs will then be hers, and she will remember writing them.**',
  '⚠ **Do not supply the nine words.** _..., which is where the third point was and why I have not needed it._ **If you write them, they are your nine words** — **and a writer who is given a sentence keeps the sentence and loses the move.**',
  '⚠ **The first reader is wrong about the instruction and right about something else.** **He noticed that the essay arrives at the third point, and read it as an omission because the essay never admits it.** **A reader who notices something and gets the reason wrong is the most useful reader there is.**',
  '⚠ **And the reader who approves is as little use as the reader who objects.** **_There is nothing to add_ is correct and there was one thing to add.** **Both readers stopped at the same place, and the one who approved stopped more comfortably.**',
  '**Do not correct the reader unless they ask.** ⚠ **The first reader has nothing to write and the writer has.** **A mediator who spends the cycle explaining the instruction to the reader has chosen the easier of the two people in front of them** — **and the reader will be quite happy to be corrected, which is why it is tempting.**',
  '**Pronunciation.** 🔊 **Track 3.14** **Read the writer her own clause, ask the four words, and stop.** ⚠ **The silence here is shorter than in 1.7 — about four seconds — because the answer is in front of her.** **What she says is almost always _oh_, and then the nine words.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has an essay\'s first and last paragraphs and two readings, and does **not** show them. A reads all four. B makes the three moves: **says what is correct, reads the writer their own last clause, asks one question, and stops.** ⚠ **In one of the two pairs the essay does not arrive at the third point at all** — **and B must say so and ask a different question.** Change roles with the other pair.'));
out.push(table(['Pair A – expertise', 'Pair B – transport'], [
  ['_First reader: "very good, but she has not dealt with the third point."_', '_First reader: "he has ignored the second point completely."_'],
  ['_Second reader: "exactly what was asked; nothing to add."_', '_⚠ Second reader: "the essay is about the second point from paragraph two onwards."_'],
  ['_Last clause: "…which is a claim about training."_', '_Last clause: "…and the figure nobody collects is the whole of the difficulty."_'],
  ['_⚠ The essay arrives at the third point and does not say so._', '_⚠ The essay does not arrive at the second point at all._'],
  ['_⚠ Nine words are missing._', '_⚠ Nothing is missing; the second reader has misremembered._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each pair\'s question and the writer\'s answer. ⚠ **Pair B is the one where nothing is missing**, and the useful question there is not about the essay at all: **_which paragraph did you think was about the second point?_** — **asked of the reader, who has misremembered.** **That is the one case in the cycle where the reader is the person who needs mediating.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own essay from 3.6** and read its last paragraph. ⚠ **Ask yourself the four words: what was the third point?** **If your argument arrives at it, write the nine words.** **If it does not, write one line saying what your essay is about instead** — **and check that it is not the ground you gave in paragraph one, because then you have written the first paragraph twice.**'));
out.push(p('**b**  Swap and do the three moves on a partner\'s essay. ⚠ **Read them their own last clause and ask the four words.** **Count the silence.** **It is about four seconds and what they say first is almost always _oh_.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say to the person who wrote it:  _Two readings of one essay. Asked which reader is right, Mr Shihabi said the second — and the second reader is the less useful of the two, which is the awkward part. Mrs Tarabishi asked why less useful, since he is correct, and because he says there is nothing to add and there is one thing to add, and it is in her own last paragraph: a reader who approves has stopped reading at the same point as a reader who objects. Dr Qabbani said so the first reader is simply wrong, and Mrs Khoury said the first reader is wrong about the instruction and right about something else, which is worth four minutes — he has noticed that the essay is about the third point, and he has read it as an omission because the essay never admits it. Mr Tayara said so the fault is hers after all, and it is not a fault: it is nine words she has not written — which is where the third point was and why I have not needed it. Her argument arrives at the thing she set aside and she does not say so, and the one reader who noticed concluded she had forgotten it. Mrs Ajouz said that in her examination nobody told her anything at all, she had a number, and Mrs Oueidat said that is the whole reason this cycle exists: an examiner gives a band and a colleague gives an opinion, and neither of them tells you the nine words. Mrs Rizk asked what you actually say to her, and Mr Zahreddine said read her her own last clause and ask what the third point was, which is the whole mediation. Mrs Tarabishi asked whether that is not simply telling her to add nine words, and no, because then they are his nine words: read the clause, ask the question, and the nine words will be hers and she will remember writing them. Mr Attar said that is the same move as 1.7, and Mrs Khoury said it is exactly the same move and the class should notice — say what is correct, show the writer their own sentence, ask one question, stop. Three units and three cycles and it has not changed. Mrs Ajouz asked whether you tell the first reader he has misread the instruction, and Mrs Oueidat said not unless he asks: he is not the person who has to write anything, and a mediator who corrects the reader has spent the cycle on the easier of the two people in front of them. And Mr Shihabi said the thing he will take away is that a reader who praises you is as little use as one who objects — both of them stopped at the same place, and the only reader who was any use is the one who noticed something and got the reason wrong._'));
out.push(p('**Listener task:** write your own nine words, or the line saying what your essay is about instead.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 1)', 7));
out.push(p('For questions **1–8**, read the text below and decide which answer (**A**, **B**, **C** or **D**) best fits each gap.'));
out.push(box(null, [
  '**WHAT A PICTURE DESK DOES IN NINE SECONDS**',
  'Three photographs arrive and two of them will run. The decision takes about nine seconds and nobody on a desk has ever been asked to **(1)** ______ how it is made.',
  'The temptation is to choose the two best frames. Experienced picture editors **(2)** ______ that temptation almost without noticing, because the question is not which photographs are strongest but which pair says something neither of them says alone.',
  'A queue and a notice, run together, tell a reader that nobody was told. A queue and a sleeping child tell them it went on all morning. A notice and a child say nothing whatever, and a desk that has **(3)** ______ the wrong pair finds out within a day, when the caption has to do all the work.',
  'None of this can be **(4)** ______ to a formula, which is why it is taught by sitting beside somebody. The reasoning does not **(5)** ______ good once it is written down: most of what an editor knows about a pair of photographs is knowledge about readers, and readers are not in the frame.',
  'There is one rule that **(6)** ______ true, and it is about the frame nobody runs. If the rejected photograph is the best of the three, the desk has almost certainly chosen correctly, because the single strongest image is the one most likely to **(7)** ______ with its partner rather than add to it.',
  'Editors who come to the work from writing find this hardest. They **(8)** ______ the pair at the wrong thing — its subject — as though it were a paragraph, and a pair of photographs is not a paragraph: it is one statement made twice from two positions, and the second position is the whole of the point.',
  '**1**  **A** account for   **B** answer for   **C** stand for   **D** vouch for',
  '**2**  **A** pass up   **B** hold with   **C** brush aside   **D** light upon',
  '**3**  **A** trimmed down   **B** plumped for   **C** waved away   **D** shrugged off',
  '**4**  **A** trimmed down   **B** cut back   **C** pared away   **D** reduced',
  '**5**  **A** hold   **B** read   **C** carry   **D** stand',
  '**6**  **A** reads   **B** shows   **C** rings   **D** stands',
  '**7**  **A** chime   **B** sit   **C** line up   **D** clash',
  '**8**  **A** trim   **B** pitch   **C** plump   **D** pass',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an essay and its reader (120 words or more).'));
out.push(p('**ONE ESSAY, TWO READINGS** · ______________   **The first paragraph.** _"______________"_   **The first reader.** _"______________"_   **The second reader.** _"______________"_   **Which is right?** ⚠ **______________**, and the ______________ is the less useful of the two, because ______________.   **What the first reader noticed.** ⚠ **______________**, and read it as ______________ because ______________.   **The three moves.** ⚠ **1 ______________. 2 ______________. 3 ______________.**   **What I am not going to do.** ⚠ **______________**, because then ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What is correct, said first and meant',
  'The writer\'s own last clause read back, and not a rule',
  'One question, and the nine words left for the writer to supply',
  'The reader not corrected unless they asked',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Second essay of the course, and the instruction is the one Unit 3 is about.** **Three points, two discussed, both named in the first paragraph with the ground for the choice** — **and the third not mentioned again anywhere.**',
  'Your class has read an article about how people are chosen for work. **Write an **essay** discussing **two** of the points raised.** You should **explain which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about selection. **First**, that written work shows how carefully somebody thinks and an interview shows only how quickly. **Second**, that references tell a panel almost nothing, because nobody writes an honest one. **Third**, that a panel can only ever assess what a candidate chooses to show it."_',
  '**Points to discuss: 1** written work against interviews   **2** references tell a panel nothing   **3** a panel assesses only what is shown',
  '⚠ **Take the pair that pulls in two directions.** **Two points that agree will give you four hundred words of saying the same thing twice** — **and of these three, one pair argues, one pair agrees and one pair has nothing to say to the other.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 3 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Of the three, the first and the third are the ones ___ can be tested.   a) that   b) what   c) which they',
  '2  I shall talk about the first and the third, because both ___ somebody waiting.   a) shows   b) showing   c) show',
  '3  She ___ up the four-month route, which needed a supervisor for two years.   a) gave   b) passed   c) took',
  '4  What neither of them ___ is anybody from the directorate.   a) shows   b) show   c) showing',
  '5  The ground he gave was a property of the questions and could therefore be ___.   a) wronged   b) wrongful   c) wrong',
  '6  The two accounts ___ with each other, which is why the pair has an argument in it.   a) jars   b) jar   c) jarred',
  '7  Her ___ of the second point is declared in one clause and never mentioned again.   a) exclusion   b) exclude   c) excluding',
  '8  The figure was ___ reported, which is why the comparison rests on seven people.   a) sparse   b) sparseness   c) sparsely',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style – a long interview).** 🔊 **Track 3.15** You will hear an interview with a picture editor. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best.'));
[
  '**1**  What does she say is the commonest mistake made by people new to a picture desk?   **A** choosing too slowly   **B** choosing the two strongest frames   **C** relying on captions   **D** rejecting the best photograph',
  '**2**  She says the nine seconds is spent   **A** comparing all three photographs   **B** reading the captions   **C** looking for a reason to reject one   **D** working out which pair says something new',
  '**3**  What happened with the water-main photographs?   **A** the pair she chose was cropped by two newspapers   **B** the best single frame was unusable at the filed width   **C** the photographer disagreed with her choice   **D** the caption had to be rewritten twice',
  '**4**  She says a two-sentence caption is justified when   **A** the photograph is weak   **B** the subject is unfamiliar   **C** the story is not visible in the frame   **D** the desk has run only one picture',
  '**5**  What does she say about the frame that is rejected?   **A** it is often the best of the three   **B** it is usually the one the photographer prefers   **C** it should be filed again later   **D** it is rarely missed by readers',
  '**6**  What has changed in her twenty-two years?   **A** the number of frames filed   **B** the time available to choose   **C** the weight given to captions   **D** the fact that readers now crop pictures themselves',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 3.15  Audio script (read after the check)', [
  ['Interviewer', 'You have been on a picture desk for twenty-two years. What do people get wrong when they start?'],
  ['Editor', 'They pick the two best photographs. Every single one of them, and I did it myself for about a year. It feels like the obvious thing and it is the wrong question. The question is never which two are strongest, it is which pair says something that neither of them says on its own.'],
  ['Interviewer', 'And that takes nine seconds, you said.'],
  ['Editor', 'About nine, and the nine seconds are not spent comparing the three. They are spent trying the pairs — this one with that one, that one with the other — and looking for the pair that produces a third statement. Two of the three pairs usually do. One almost never does.'],
  ['Interviewer', 'Can you give an example?'],
  ['Editor', 'We had three frames from a water main in Mezzeh in June. A queue outside the directorate, a man photographing the notice through glass, and a boy asleep on a wall. The queue and the boy ran. Together they say it took all morning and people brought their children, and neither says that alone.'],
  ['Interviewer', 'And the notice?'],
  ['Editor', 'The notice was the best photograph of the three and it was the only one with a document in it, and the document was dated the eleventh, which was the story. And it was illegible at the width our service files at. So the single most important fact we had could not be carried by the only picture that contained it.'],
  ['Interviewer', 'Which is why you ran a long caption.'],
  ['Editor', 'Two sentences instead of one, and I would only ever do that for one reason: when the story is not visible in the frame. Not because a picture is weak, not because people will not recognise the place. Only when the thing the reader has to know cannot be seen.'],
  ['Interviewer', 'Is the rejected photograph usually the weakest?'],
  ['Editor', 'It is often the best of the three, and that is the rule I would give anybody. If the one you have left out is the strongest single image, you have probably chosen right, because the strongest image is the one most likely to clash with its partner rather than add to it. It takes up the whole frame of the reader\'s attention.'],
  ['Interviewer', 'What has changed since you started?'],
  ['Editor', 'The frames arrive faster and there are more of them, and none of that matters. What matters is that readers crop now. They do it themselves, on a telephone, and a pair you have chosen carefully will be cropped to one picture by somebody at a bus stop. Twenty-two years ago the pair I chose was the pair that was seen. I have not worked out what to do about it and I am not sure there is anything.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the ground, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 3)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ speak about two of three things and declare the third in one clause',
  '☐ tell a declared omission from a formula that names nothing',
  '☐ compare two things by giving both facts for both, with no criterion stated',
  '☐ take the long turn on two photographs of three, and finish on a full stop',
  '☐ answer in thirty seconds about somebody else\'s pair, adding one thing',
  '☐ give a ground for choosing two points that could be wrong',
  '☐ write an essay that leaves one point out and says so once',
  '☐ mediate by reading a writer their own clause and asking one question',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _pass up · plump for · set aside · cut back on · brush aside · wave away · shrug off · seize on · pounce on · light upon · trim down · hold with_.',
  '**This unit\'s word-formation set** _(Reading Part 1 in 3.7 draws on this unit\'s lexis)_: _exclude → **exclusion** · arbitrary → **arbitrarily** · salient → **salience** · ground → **groundless** · state → **overstatement** · narrow → **narrowly** · confine → **confinement** · sparse → **sparsely** · minimal → **minimally**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _take away_ **→ _what a listener takes away_**, which is not what you said but what the pair of things said · _carry on_ **→ _carry on from_** a previous speaker, which is the thirty seconds you must not do · _set up_ **→ _set up a comparison_**, where at A2 it was setting up a room.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 3 · Student\'s Book');
