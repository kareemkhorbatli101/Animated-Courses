// Proactive English C1 · Syria Edition · Book 2 · Unit 16 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT I AM ABLE TO ASSESS', 'WHAT FALLS OUTSIDE IT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const grounds = (rows) => table(['THE JUDGEMENT', 'THE GROUND IT COULD BE APPEALED ON', 'WHO COULD JUDGE IT'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three verdicts from the reports on the board. For each one the room says which judgement the competence clause is attached to, and whether it is attached to anything at all.';
const slip = '**Peer review, C1 band 3.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and **hand it over unsigned.** **The writer answers in one line that must either concede or refuse with a reason.**';

out.push(h1('Unit 16  Judging Work You Could Not Do Yourself'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Everybody in this room is asked, several times a year, to pass judgement on work they could not have done.** ⚠ **A headmaster appraises a physics lesson.** **A grants officer scores a water scheme.** **A sub-editor passes a surgeon\'s article.** **A structural engineer sits on a panel that is choosing a sound design.** **None of them is pretending to expertise they have not got** — **and all of them sign something that has power over somebody else.**',
  '**So the axis this unit turns is the last one Book 2 has.** ⚠ **In Unit 13 the reader could refuse you.** **In Unit 14 the reader had interests of their own.** **In Unit 15 the reader was you, and would not remember being uncertain.** **Here the reader cannot refuse you at all**: your verdict goes into their file. **The only limit left is the one you put there yourself, in writing, where a stranger can see it.**',
  '**16.1** declares the limit of your own competence inside the verdict, and settles where that clause goes.   **16.2** judges against criteria you did not write, and says which one you distrust.   **16.3** separates what you cannot judge from what nobody could.   **16.4** gives a verdict that can be appealed, and names the ground in advance.   **16.5** says what would change the verdict, specifically.   **16.6** writes the review of work in a field that is not yours.   **16.7** mediates between a judge, the judged, and a reader who shares neither field.',
  '**Exam practice in 16.7:** C1 Advanced **Reading and Use of English Part 8** (multiple matching), **Writing Part 2** (the review) and **Listening Part 4** (multiple matching).',
  '⚠ **Bring something you have signed, or will have to sign, about somebody else\'s work.** **An appraisal, a score sheet, a referee\'s report, a tender assessment, a reading report, a note on a colleague\'s draft.** **If you have signed nothing, bring the form you would have to use** — **because half the work of this unit is on criteria that somebody else wrote, and the form is where they live.**',
  '**And the warning this unit needs in its first minute.** ⚠ **Declaring a limit is not modesty and it is not a defence.** **A clause that says you may be wrong about everything has told the reader to discount everything, which is useless to them and costs you nothing.** **A clause that names one judgement and says you could not assess it has given a stranger something to act on** — **and that is the difference the whole unit is about.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 16.1 =====================
out.push(pb());
out.push(h2('16.1  The limit named inside the verdict'));
out.push(p('**Function:** declaring the limit of your own competence inside a verdict, and where the clause goes   ·   **Grammar:** _within the limits of what I am able to assess_ — attached to one judgement   ·   **Pronunciation:** the clause said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you have judged that you could not have done, and the one part of it you could not assess.** ⚠ **Two facts, and the second is a part and not a proportion.** **In this class seven of ten first answers named a proportion**, **and your teacher writes the ten parts on the board for 16.3.**'));
out.push(board('That the lesson\'s six stages ran to the minute.', 'Whether the demonstration showed what he said it showed.'));
out.push(p('**b**  Which two declare a limit a reader can act on? **1** _I am not an expert in this field and my comments should be read with that in mind._  **2** _Item 4 is the laboratory demonstration; I could not assess whether it showed what he said it showed, and the physics adviser should._  **3** _I may well be wrong about a good deal of this._  **4** _On item 2 I am reporting what I counted and not what I judged: forty-one of fifty-two were asked a question by name._  **5** _Of course, I speak as a layman throughout._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does the room decide the clause goes?   **A** at the head of the document, so that it covers everything   **B** **on the one judgement it limits**, in the item where that judgement is made   **C** at the end, after the verdict'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say a clause at the head of a document does?   **2** What does Mrs Oueidat say the reader of an appraisal actually needs?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.1  The clause, and where it goes', [
  ['Ms Huda', 'Mr Tayara has appraised a physics lesson. He is a teacher of Arabic literature.'],
  ['Mr Tayara', '⚠ **Twenty-two years of it, and the form has six criteria that I did not write.** **Five of the six I can assess.** **The sixth is _makes effective use of the laboratory_** — **and I watched a demonstration for eleven minutes and I do not know whether it showed what he said it showed.**'],
  ['Mrs Khoury', 'And what did you write the first time?'],
  ['Mr Tayara', '⚠ **A paragraph at the top.** _As I am not a specialist in the sciences, the following should be read with that limitation in mind._ **Thirty-one words, and I was rather pleased with it.**'],
  ['Mrs Khoury', '⚠ **And it limits everything, which means it limits nothing.** **A reader who is told to discount the whole document has been told to discount the five judgements that are good** — **and in practice they discount none of it, because a clause at the head of a page is read as a manner and not as information.**'],
  ['Mrs Oueidat', 'What does the reader actually need?'],
  ['Mrs Oueidat', '⚠ **To know which line to stop at.** **An inspector reads an appraisal to decide whether to act** — **and the one thing they cannot get anywhere else is which of the six judgements the judge was not competent to make.** **That belongs in item 6 and nowhere else.**'],
  ['Mr Attar', 'So the clause moves down the page.'],
  ['Mr Tayara', '⚠ **It moved into item 6 and it lost nineteen words on the way.** _Within the limits of what I am able to assess, the demonstration ran for eleven minutes and every pupil was at a bench; whether it showed what he said it showed, I cannot judge, and the physics adviser should._'],
  ['Dr Qabbani', 'That is longer, not shorter.'],
  ['Mrs Khoury', '⚠ **It is longer and it is one item instead of a whole page.** **And look at what it does that the first version could not: it gives the reader two facts he can use, admits one thing he cannot judge, and names the person who could** — **which is three pieces of work in a clause that was pure manner before.**'],
  ['Mrs Rizk', 'Is it ever right at the head?'],
  ['Mrs Oueidat', '⚠ **When the limit is the whole document and you should not be signing it.** **If four of six criteria fall outside what you can assess, a clause will not save the appraisal** — **and the honest move is to say so to the person who asked you and stop, which is 16.3.**'],
  ['Mr Zahreddine', 'On a tender panel we are told to defer to the specialist member.'],
  ['Mrs Khoury', '⚠ **And deferring is a decision that has to appear in the record, with the name.** **_We defer to the acoustic member on item 3_ is a judgement** — **and a panel that defers silently has produced a verdict that reads as unanimous and was not.**'],
  ['Mrs Tarabishi', 'Mine is a thesis chapter in a field next to mine.'],
  ['Mrs Khoury', '⚠ **Which is the hardest case in the room, because the periphery is where a judge is least able to tell what they cannot do.** **You can read every sentence and follow every step** — **and still not know whether the step everybody in that field would have taken is missing.**'],
  ['Mrs Ajouz', 'And the tone of the clause?'],
  ['Mrs Oueidat', '⚠ **Flat, and it is not an apology.** **_I cannot judge whether the demonstration showed what he said it showed_ is a fact about the division of labour** — **and said with an apology in it, it invites the reader to be kind about the whole page, which is the one thing it was written to prevent.**'],
  ['Mr Shihabi', 'Does anybody ever thank you for it?'],
  ['Mr Tayara', '🔊 ⚠ **The inspector wrote back in four lines and the fourth is the reason I am telling the room.** _Item 6 has been sent to the physics adviser._ **Nobody had ever acted on a sentence of mine before** — **and the sentence they acted on was the one that said I could not do my job.**'],
]));
out.push(sp());
out.push(box('Language box – the competence clause', [
  '**The clause attaches to the judgement it limits, inside the item where that judgement is made.** ⚠ _Within the limits of what I am able to assess, the demonstration ran for eleven minutes; whether it showed what he said it showed, I cannot judge._ **Item 6, and nowhere else on the page.**',
  '**A clause at the head limits everything and therefore limits nothing.** ⚠ **A reader told to discount the whole document has been told to discount the judgements that were good.**',
  '**A clause at the end is an apology after the verdict has done its work.** ⚠ **The reader has already acted on item 6 by the time they reach it.** **The order of a document is the order it is used in.**',
  '**The complete clause does three things and only the first is modesty.** ⚠ **It gives the facts you did observe, it names the one judgement you cannot make, and it names who could make it.** **_The physics adviser should._** **Three words that turn a confession into a referral.**',
  '**Deferring is a judgement and it goes in the record with the name.** ⚠ _We defer to the acoustic member on item 3._ **A panel that defers silently has produced a verdict that reads as unanimous and was not.**',
  '**And the hardest case is the field next to your own.** ⚠ **You can follow every step and still not know whether the step everybody in that field would have taken is missing** — **and 16.3 is about exactly that.**',
  '**Pronunciation.** 🔊 **Track 16.2** **Say _whether it showed what he said it showed, I cannot judge_ flat, with no fall on _cannot_.** ⚠ **A fall on _cannot_ makes it an apology, which is the one thing the clause was written to prevent.**',
  '**Practise:** Attach the clause to one judgement. **1** a demonstration you watched  **2** a drawing you could not read  **3** a figure you counted but did not judge  **4** a step that may be missing  **5** a judgement you are deferring, with the name',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the limit from the card. B puts it **inside one item**, with the facts observed, the judgement refused, and the person who could make it. ⚠ **Two rows on each card are proportions and not parts** — **and there B says so and asks for the part.** Change cards.'));
out.push(table(['Card A – the limit as first written', 'Card B – the limit as first written'], [
  ['_I could not assess the laboratory demonstration._', '_I could not assess the acoustic calculations._'],
  ['_⚠ I am not a specialist and much of this is beyond me._', '_⚠ A good deal of the submission is outside my field._'],
  ['_I counted the questions but did not judge their difficulty._', '_I read the drawings but cannot say whether the detail is standard._'],
  ['_⚠ My comments should be read with my limitations in mind._', '_⚠ I speak throughout as a layman._'],
  ['_I do not know whether a step is missing from the method._', '_I do not know whether the omitted test is normally done._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the item, the facts observed, the judgement refused, the person named. ⚠ **Rows 2 and 4 on both cards are proportions**, and a proportion tells a reader to discount an unknown share of an unknown page. **Rows 5 are the strongest on either card**: both name a possible absence, which is the one thing a judge outside the field cannot see and can still report.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the form or the document you brought** and find **the one item you could not assess.** ⚠ **Write the clause inside that item**, with the facts you did observe, the judgement you refuse, and the name of the person who could make it. **In this class six of ten could name a person and four could not** — **and the four are the more useful half, because a limit with nobody behind it is a gap in the organisation and not in the judge.**'));
out.push(p('**b**  Swap. Your partner reads **the whole item** and says whether the clause limits **that judgement or the whole page.** ⚠ **Then the harder question: if your clause were deleted, what would the reader do differently?** — **and if the answer is nothing, the clause was manner.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara has appraised a physics lesson and he is a teacher of Arabic literature with twenty-two years of it, and the form has six criteria that he did not write. Five of the six he can assess, and the sixth is makes effective use of the laboratory, and he watched a demonstration for eleven minutes and does not know whether it showed what the man said it showed. Mrs Khoury asked what he wrote the first time, and a paragraph at the top: as he is not a specialist in the sciences, the following should be read with that limitation in mind, thirty-one words, and he was rather pleased with it. And Mrs Khoury said it limits everything, which means it limits nothing, because a reader told to discount the whole document has been told to discount the five judgements that are good, and in practice they discount none of it, since a clause at the head of a page is read as a manner and not as information. Mrs Oueidat asked what the reader actually needs, and to know which line to stop at: an inspector reads an appraisal to decide whether to act, and the one thing they cannot get anywhere else is which of the six judgements the judge was not competent to make. Mr Attar said so the clause moves down the page, and it moved into item 6 and lost nineteen words on the way. Dr Qabbani said that is longer and not shorter, and Mrs Khoury said it is longer and it is one item instead of a whole page, and it gives the reader two facts he can use, admits one thing the judge cannot judge, and names the person who could. Mrs Rizk asked whether it is ever right at the head, and when the limit is the whole document and you should not be signing it at all. Mr Zahreddine said that on a tender panel they are told to defer to the specialist member, and deferring is a decision that has to appear in the record with the name, because a panel that defers silently has produced a verdict that reads as unanimous and was not. Mrs Tarabishi said hers is a thesis chapter in a field next to her own, which is the hardest case in the room, because the periphery is where a judge is least able to tell what they cannot do. Mrs Ajouz asked about the tone, and flat, and it is not an apology. And Mr Tayara said the inspector wrote back in four lines and the fourth is the reason he is telling the room: item 6 has been sent to the physics adviser, and nobody had ever acted on a sentence of his before, and the sentence they acted on was the one that said he could not do his job._'));
out.push(p('**Listener task:** write the item number, the judgement refused, and the person named.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the appraisal Mr Tayara signed on the second attempt. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _appraisal of a lesson, form AP/6_ · _physics, second year, thirty-one pupils_ · **9 March**',
  '**Item 1 · Planning.** **The lesson had six stages and the plan gives a time for each.** **Five ran within a minute of the plan and the fifth ran four minutes over, which the teacher recovered by shortening the last.** **I can assess this and I do: the planning is the strongest thing in the lesson.**',
  '**Item 2 · Questioning.** **I counted.** ⚠ **Forty-one of the fifty-two questions were put to a named pupil and eleven to the room.** **Of the forty-one, nine went to the four pupils in the front row.** **I am reporting what I counted here and not what I judged** — **the distribution is a fact and whether nine of forty-one is a fault is a matter for the department.**',
  '**Item 3 · Pupil work.** **Twenty-nine of thirty-one notebooks carry the day\'s heading and the diagram.** **Two do not and both pupils arrived after the first stage.**',
  '**Item 4 · Explanation.** **The explanation of the first result was given twice, in different words, and the second version used no term that had not been defined in the lesson.** ⚠ **I can assess that, because it is a question about English and about order, and it is well done.**',
  '**Item 5 · Management.** **No pupil was out of place and the two late arrivals were seated without a word being said to the class.**',
  '**Item 6 · Use of the laboratory.** ⚠ **Within the limits of what I am able to assess: the demonstration ran for eleven minutes, every pupil was at a bench, and each of the four benches had the apparatus the plan names.** **Whether the demonstration showed what the teacher said it showed, I cannot judge, and I am not going to guess.** **The physics adviser should assess item 6 and I have asked for it.**',
  '**A note on item 6 that does not belong in the box.** **I have signed eleven appraisals on this form and nine of them had a sentence at the head saying that I am not a specialist.** ⚠ **That sentence covered every item and was acted on in none** — **and I now think it was there to protect me and not to inform anybody.**',
  '**A second note, on the counting.** **Item 2 took me the whole lesson and a page of tally marks, and it is the only item I am certain of.** ⚠ **A count is the one thing a judge from outside the subject can produce that nobody will argue with** — **and I had counted nothing in nine previous appraisals, because the form does not ask for a number and I had read that as permission not to supply one.**',
  '**And one thing that falls outside the form altogether.** **The form has no item for what a teacher does when an answer is wrong.** **Three answers were wrong this morning and all three pupils were asked a second question immediately** — **and I have put it here because there is nowhere else to put it, and because it is the thing I would tell another headmaster about this lesson.**',
]));
out.push(item('1', 'On item 2, what does he say he is doing, and what is he not doing?'));
out.push(item('2', 'What does the clause in item 6 do, beyond declaring a limit?'));
out.push(item('3', 'What does he now think the sentence at the head of his earlier appraisals was for?'));
out.push(writers([
  'An appraisal on a form you did not write: **item by item, in the form\'s order** → **what you can assess, assessed** → **what you counted, marked as counted** → **the one item where the clause goes, with the facts, the refusal and the name** → **a note on your own earlier practice** → **and one thing that falls outside the form.**',
  '⚠ **Keep the form\'s order and the form\'s numbers.** **A reader of an appraisal reads item 4 because a rule sends them to item 4** — **and a judge who reorders the form to suit their argument has made the document unusable by the person it was written for.**',
  '**Mark what you counted as counted.** ⚠ _I am reporting what I counted here and not what I judged._ **A count is the one thing a judge outside the field can supply that nobody will dispute** — **and a count dressed as a verdict loses that advantage and gains nothing.**',
  '**Put the clause in its item, with all three parts.** ⚠ **The facts you did observe, the judgement you refuse, and the person who could make it.** **_The physics adviser should assess item 6 and I have asked for it._** **The last six words are what turn a refusal into an action** — **and without them the reader has a hole and no way to fill it.**',
  '⚠ And **end on what the form has no box for.** _The form has no item for what a teacher does when an answer is wrong._ **Every form leaves out the thing its author did not think of** — **and the judge is the only person in a position to notice, which makes the paragraph a service and not a complaint.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write three items of an appraisal on a form you did not write (120 words or more).'));
out.push(p('**______________** · _appraisal of _______________ · _______________ · **______________**   **Item ___ · ______________.** **I can assess this and I do: ______________.**   **Item ___ · ______________.** ⚠ **I am reporting what I counted here and not what I judged** — **______________ of ______________.**   **Item ___ · ______________.** ⚠ **Within the limits of what I am able to assess: ______________.** **Whether ______________, I cannot judge.** **______________ should assess item ___ and I have ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The form\'s own order and numbers kept',
  'What was counted marked as counted',
  'The clause inside one item, not at the head',
  'The person who could judge it named, and asked',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their item with the clause in it**, and the room says what the reader would do next.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole appraisal (260 words or more), to the shape in the writer\'s box: the items in the form\'s order, the counts marked as counts, the clause in its item with all three parts, the note on your own earlier practice, and the thing the form has no box for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the clause inside one item, a person named, and no proportion anywhere on the page.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One number on the board: how many students put the clause at the head of the page in their first draft?** ⚠ **In this class seven of ten, and all seven were pleased with the sentence.** **Then one more: how many could name the person who could make the judgement?** **Six** — **and the four who could not have found a gap in an organisation and not in themselves.** **Then Mr Tayara\'s fourth line.**'));
out.push(hw('**Write the clause for one item of something you have actually signed**, with the facts, the refusal and the name. ⚠ **Then do the harder half: go back to the last three things you signed and count the sentences that limited the whole document.** **In this class the count has run between none and nine** — **and Mr Tayara\'s nine were all written to protect him.** **Bring both.** **16.2 judges against criteria you did not write and names the one you distrust**, so bring the form itself and read the six criteria before the lesson.'));

// ===================== 16.2 =====================
out.push(pb());
out.push(h2('16.2  Criteria you did not write'));
out.push(p('**Function:** judging against criteria you did not write, and saying which one you distrust   ·   **Grammar:** the criterion marked as doubted, and still applied   ·   **Pronunciation:** the doubt and the score in one breath'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one criterion on a form you use that you do not trust, and the score you gave against it anyway.** ⚠ **The criterion in its own words, then the score.** **Not your opinion of the form.** **In this class nine of ten could name a criterion and four had quietly stopped scoring it** — **and your teacher writes the ten criteria on the board, exactly as the forms word them.**'));
out.push(board('That the proposal names a maintenance budget.', 'Whether the budget is the right size for the scheme.'));
out.push(p('**b**  Which two mark a doubt and still apply the criterion? **1** _Criterion 4 is a poor criterion and I have left it blank._  **2** _Criterion 4 asks for community ownership; I score it 3 of 5 on the two letters supplied, and I distrust the criterion because a letter is what a proposal can always produce._  **3** _The form is not fit for purpose in my view._  **4** _Criterion 2 asks whether the design is innovative; I score it 4 of 5 against the panel\'s own note of 2019, and I distrust the word, because nobody on the panel has defined it._  **5** _I have given everything a 3 as the criteria are unclear._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide you do with a criterion you distrust?   **A** leave it blank and say why   **B** **score it, and record the doubt beside the score**, with the ground   **C** score it and say nothing'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say a blank in a scoring form becomes?   **2** What does Mrs Khoury say the ground of a doubt must be?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.3  Scored, and doubted, in the same line', [
  ['Ms Huda', 'Mrs Rizk scores proposals against six criteria she did not write.'],
  ['Mrs Rizk', '⚠ **Nine schemes this year and criterion 4 is the one I distrust.** _Evidence of community ownership._ **What a proposal supplies for it is two letters, and a letter is what a proposal can always produce.**'],
  ['Mr Attar', 'So you leave it out?'],
  ['Mrs Rizk', '⚠ **I left it blank twice in 2023 and I shall not do it again.** **A blank in a scoring form becomes a zero at the next desk** — **and the two schemes I meant to protect came out below schemes I thought worse, and nobody could see why.**'],
  ['Mrs Khoury', '⚠ **Which is the whole of this cycle in one example.** **A doubt that is expressed by withholding a score has been expressed to nobody.** **The arithmetic goes on without you** — **and the only person who knows there was a doubt is the person who had it.**'],
  ['Mrs Oueidat', 'So the doubt goes beside the score.'],
  ['Mrs Rizk', '⚠ **In the same line and in one breath.** _Criterion 4: 3 of 5 on the two letters supplied. I distrust this criterion, because a letter is what a proposal can always produce, and the two schemes that failed on it in 2023 both had letters._'],
  ['Dr Qabbani', 'And the ground is the last clause.'],
  ['Mrs Khoury', '⚠ **The ground is a fact about the criterion and not a preference about forms.** **_A letter is what a proposal can always produce_ is a fact.** **_It is a poor criterion_ is a verdict, and a verdict on a criterion is exactly what a scorer has no standing to give** — **because they did not write it and do not know what it was for.**'],
  ['Mr Zahreddine', 'On the tender form criterion 2 is innovation and nobody has defined it.'],
  ['Mrs Oueidat', '⚠ **Then the ground is the absence of the definition and you say where you looked.** _I distrust criterion 2 because the panel has no written definition of it; I have scored against the note of 2019, which is the nearest thing._ **An absence with a place attached is evidence** — **and an absence with nowhere attached is a complaint.**'],
  ['Mrs Tarabishi', 'Does a doubt not lower the weight of your score?'],
  ['Mrs Khoury', '⚠ **It lowers the weight of that score and it raises the weight of the other five, which is what you want.** **A scorer who distrusts one criterion and says so has told the reader exactly how far the total can be relied on** — **and a scorer who distrusts one and says nothing has handed over a total that is wrong in a direction nobody can find.**'],
  ['Mr Tayara', 'And where does it go on the form?'],
  ['Mr Zahreddine', '⚠ **In the box for that criterion, which is 16.1 again and the room will see it.** **Not in the overall comment at the end.** **The person who later reads only the scores reads them line by line** — **and a doubt in the overall comment has been filed somewhere nobody with a calculator will ever look.**'],
  ['Mrs Ajouz', 'May you distrust more than one?'],
  ['Mrs Rizk', '⚠ **Two at most, and if it is three you are declining the whole form.** **That is a different document and it goes to the person who sent you the form, not into the scores** — **and in nine years I have written it once.**'],
  ['Mr Shihabi', 'What did the desk do with yours?'],
  ['Mrs Rizk', '🔊 ⚠ **Criterion 4 was reworded for this year\'s round and the wording is mine.** _Evidence of community ownership other than correspondence._ **Six words added by a committee that has never met me** — **and the doubt I had been expressing by leaving a box empty had reached nobody for two years.**'],
]));
out.push(sp());
out.push(box('Language box – the criterion marked as doubted', [
  '**Score it, then mark the doubt, in the same line.** ⚠ _Criterion 4: 3 of 5 on the two letters supplied. I distrust this criterion, because a letter is what a proposal can always produce._ **The score first, because the score is what the form is for** — **and the doubt second, because the doubt is what only you can supply.**',
  '**A blank is not a doubt.** ⚠ **A blank in a scoring form becomes a zero at the next desk, and the arithmetic goes on without you.** **The two schemes a blank was meant to protect came out below schemes the scorer thought worse** — **and the only person who knew there was a doubt was the person who had it.**',
  '**The ground is a fact about the criterion, not a verdict on the form.** ⚠ **_A letter is what a proposal can always produce_ is a fact.** **_It is a poor criterion_ is a verdict** — **and a verdict on a criterion is the one thing a scorer has no standing to give, because they did not write it and do not know what it was for.**',
  '**Where the criterion is undefined, the ground is the absence, with the place you looked.** ⚠ _The panel has no written definition of innovation; I have scored against the note of 2019, which is the nearest thing._ **An absence with a place attached is evidence; an absence with nowhere attached is a complaint.**',
  '**It goes in the box for that criterion and not in the overall comment.** ⚠ **The person who reads only the scores reads them line by line** — **and a doubt at the end of the form has been filed where nobody with a calculator will look.**',
  '**Two at most.** ⚠ **If you distrust three of six you are declining the whole form**, and that is a different document addressed to the person who sent it — **not a row of scores with three apologies in it.**',
  '**Pronunciation.** 🔊 **Track 16.4** **Say the score and the doubt in one breath, with no pause before _I distrust_.** ⚠ **A pause turns the doubt into an aside** — **and an aside is what a reader skips, which puts you back where the blank box left you.**',
  '**Practise:** Score it, then doubt it, with the ground. **1** a criterion met by a letter  **2** one nobody has defined  **3** one that asks for a proportion  **4** one you have quietly stopped scoring  **5** one you distrust and will still score 5 of 5',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the criterion from the card. B gives **a score, then the doubt with its ground.** ⚠ **Two rows on each card are verdicts on the form and not grounds** — **and there B says so and supplies a fact instead.** Change cards.'));
out.push(table(['Card A – the criterion, as the form words it', 'Card B – the criterion, as the form words it'], [
  ['_Evidence of community ownership._', '_Innovation in the proposed design._'],
  ['_⚠ The form is not fit for purpose._', '_⚠ These criteria are unclear throughout._'],
  ['_Makes effective use of the laboratory._', '_Demonstrates value for money._'],
  ['_⚠ Criterion 4 is a poor criterion._', '_⚠ Nobody could score criterion 2 fairly._'],
  ['_Fidelity to the register of the original._', '_Appropriate use of the glossary._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the score, the doubt, and whether the ground is a fact. ⚠ **Rows 2 and 4 on both cards are verdicts on the form**, and a scorer has no standing to give one. **Rows 5 are the hardest on either card**: both are criteria about register and both are met by a judgement the scorer does share — **so the honest answer is that there is no doubt to record, and the room will try to find one anyway.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the form you brought** and read its criteria in order. ⚠ **Score the one you distrust, then write the doubt with its ground.** **A fact about the criterion, and not a view about the form.** **In this class four students had quietly stopped scoring a criterion altogether** — **and all four discovered that the box had been read as a zero by somebody downstream.**'));
out.push(p('**b**  Swap. Your partner reads **the line** and says whether the ground is a fact or a preference. ⚠ **Then the harder question: if your doubt were acted on, what would the form say next year?** — **and Mrs Rizk\'s answer to that question is six words that a committee has now printed.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk scores proposals against six criteria she did not write, nine schemes this year, and criterion 4 is the one she distrusts: evidence of community ownership, for which a proposal supplies two letters, and a letter is what a proposal can always produce. Mr Attar asked whether she leaves it out, and she left it blank twice in 2023 and will not do it again, because a blank in a scoring form becomes a zero at the next desk, and the two schemes she meant to protect came out below schemes she thought worse and nobody could see why. Mrs Khoury said that is the whole of the cycle in one example, because a doubt expressed by withholding a score has been expressed to nobody: the arithmetic goes on without you, and the only person who knows there was a doubt is the person who had it. Mrs Oueidat said so the doubt goes beside the score, and in the same line and in one breath: criterion 4, three of five on the two letters supplied, and the criterion distrusted because a letter is what a proposal can always produce, and the two schemes that failed on it in 2023 both had letters. Dr Qabbani said the ground is the last clause, and Mrs Khoury said the ground is a fact about the criterion and not a preference about forms, because a verdict on a criterion is exactly what a scorer has no standing to give: they did not write it and do not know what it was for. Mr Zahreddine said that on the tender form criterion 2 is innovation and nobody has defined it, and Mrs Oueidat said then the ground is the absence of the definition and you say where you looked, because an absence with a place attached is evidence and an absence with nowhere attached is a complaint. Mrs Tarabishi asked whether a doubt does not lower the weight of the score, and it lowers the weight of that score and raises the weight of the other five, which is what you want. Mr Tayara asked where it goes on the form, and Mr Zahreddine said in the box for that criterion and not in the overall comment at the end, because the person who reads only the scores reads them line by line. Mrs Ajouz asked whether you may distrust more than one, and two at most, and if it is three you are declining the whole form, which is a different document. And Mrs Rizk said criterion 4 was reworded for this year\'s round and the wording is hers: evidence of community ownership other than correspondence, six words added by a committee that has never met her, and the doubt she had been expressing by leaving a box empty had reached nobody for two years._'));
out.push(p('**Listener task:** write the score, the doubt and the ground, and say whether the ground is a fact.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the score sheet Mrs Rizk filed on the ninth scheme. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _scheme 9 of 9, spring round_ · _score sheet, six criteria_ · **21 March**',
  '**Criterion 1 · Technical soundness of the scheme.** **4 of 5.** **The pump specification matches the yield figure in annexe B and the two were produced by different people.** ⚠ **I am not an engineer and I have not assessed the specification; I have assessed that two independent documents agree, which is a different thing and is what I can do.**',
  '**What I checked before scoring criterion 1.** **The yield figure appears in annexe B and again in the covering letter, and the two agree to the litre.** ⚠ **I cannot assess a pump specification and I can read two documents against each other, which took four minutes and is the whole of my technical contribution to this round.**',
  '**Criterion 2 · Cost per household.** **5 of 5.** **The figure is given with its denominator in the same sentence, which four of the nine schemes do not do.**',
  '**Criterion 3 · Maintenance arrangements.** **2 of 5.** **A named person is given but no interval and no budget line.** **The scheme stops short of saying who pays for a replacement part in year three.**',
  '**Criterion 4 · Evidence of community ownership.** ⚠ **3 of 5 on the two letters supplied, and I distrust this criterion.** **The ground is that a letter is what a proposal can always produce: all nine schemes supplied letters, the two that failed on this criterion in 2023 supplied letters, and no scheme in four rounds has ever supplied anything else.** **I am scoring it because a blank becomes a zero at the next desk.**',
  '**Criterion 5 · Fit with the governorate plan.** **4 of 5.** **Two of the plan\'s three water objectives are named and the third is not mentioned.**',
  '**Criterion 6 · Timetable.** **3 of 5.** **Eleven months, and the two months given to the dry season are the two the governorate\'s own plan marks as unworkable.**',
  '**And a figure the form does not ask for.** **This is the ninth scheme of the round and the fourth to give a cost per household without its denominator.** ⚠ **Four of nine is a fact about the round and not about this scheme** — **and I am putting it here because the round has nowhere else to put it, and because the pattern cannot be seen from inside any single sheet.**',
  '**The total, and what it is worth.** **21 of 30.** ⚠ **Five of the six scores I would defend to anybody.** **The fourth rests on a criterion I distrust, so a reader who wanted to be careful should read the total as 18 of 25 and the fourth separately** — **and I would rather say that than hand over a number that is wrong in a direction nobody can find.**',
  '**And one note that is not a score.** **Criterion 4 could be met by something other than correspondence** — **a minute of a village meeting, a register of contributions, a maintenance roster with names.** ⚠ **None of the nine schemes supplied any of the three, and I do not think any of them has been asked.** **This paragraph is for the people who write the form and not for the people who are scored by it.**',
]));
out.push(item('1', 'On criterion 1, what does she say she has assessed, and what has she not?'));
out.push(item('2', 'Why does she score criterion 4 rather than leave it blank?'));
out.push(item('3', 'Who is the last paragraph addressed to, and what does it supply?'));
out.push(writers([
  'A score sheet on criteria you did not write: **criterion by criterion, in the form\'s order** → **the score, then the one fact it rests on** → **on the criterion you distrust, the score and then the ground** → **the total, and what it is worth** → **and a closing note addressed to the people who write the form.**',
  '⚠ **The score comes first in every line.** **The form exists to produce a number and the number is what the next desk uses** — **and a line that gives a paragraph and then a score has made the reader hunt for the only part they came for.**',
  '**Give the one fact the score rests on, and no more.** ⚠ _A named person is given but no interval and no budget line._ **One fact is checkable and three are an argument** — **and a scorer who argues has begun to defend a number instead of reporting one.**',
  '**On the doubted criterion, the ground is a fact about the criterion.** ⚠ _All nine schemes supplied letters, and no scheme in four rounds has ever supplied anything else._ **That is a count across rounds, which is the strongest form the ground can take** — **and it is available only to somebody who has scored more than one round.**',
  '⚠ And **end with the note for the people who write the form.** _Criterion 4 could be met by something other than correspondence._ **Name the alternatives and say that nobody has been asked for them.** **This is the paragraph that changes a form** — **and Mrs Rizk\'s changed one, two years later, by six words.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write three criteria of a score sheet, including the one you distrust (120 words or more).'));
out.push(p('**______________** · _______________ · _score sheet, ___ criteria_ · **______________**   **Criterion ___ · ______________.** **___ of ___.** **______________.**   **Criterion ___ · ______________.** **___ of ___.** **______________.**   **Criterion ___ · ______________.** ⚠ **___ of ___, and I distrust this criterion.** **The ground is that ______________.** **I am scoring it because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The score first in every line',
  'One checkable fact under each score',
  'The ground a fact about the criterion, not about the form',
  'Nothing left blank',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the doubted line**, and the room says whether the ground is a fact or a preference.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole score sheet (260 words or more), to the shape in the writer\'s box: the criteria in the form\'s order, a fact under each score, the ground on the doubted one, the total and what it is worth, and the closing note to the people who write the form.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the score before the comment, a fact as the ground, and no box left blank.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One question round the room: how many of you have left a box blank to express a doubt?** **In this class four, and all four found the blank had been read as a zero.** **Then one number on the board: how many doubts have ever reached the people who write the form?** **One, and it took two years and arrived as six printed words.** **Then Mrs Rizk\'s last line.**'));
out.push(hw('**Write the doubted line in full** — **score, fact, ground** — **for a criterion on a real form.** ⚠ **Then do the harder half: count how many rounds of that form you have scored, and whether your ground can be stated as a count across them.** **In this class the counts have run between one round and nine** — **and only the counts above three produced a ground a committee could act on.** **Bring both.** **16.3 separates what you cannot judge from what nobody could**, so bring one judgement of each kind and do not sort them in advance.'));

// ===================== 16.3 =====================
out.push(pb());
out.push(h2('16.3  What I cannot judge, and what nobody could'));
out.push(p('**Function:** separating what you cannot judge from what nobody could   ·   **Grammar:** two sentences — _I cannot judge ___ , and ___ could_ · _nobody can judge ___ , because ____   ·   **Pronunciation:** the second sentence with no weight on _nobody_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one judgement you could not make, and the name of somebody who could.** ⚠ **If you cannot name a person, say so and stop there** — **that is the second kind and the cycle is about telling them apart.** **In this class six of ten named a person at once, three found one in a minute, and one could not** — **and the one is the interesting case.**'));
out.push(board('Whether the term is the one the profession uses.', 'Whether the witness meant the beam or the slab.'));
out.push(p('**b**  Which two are the second kind? **1** _I cannot say whether the rendering is faithful to the engineering term._  **2** _Nobody can say what the witness meant by it, because he said it once and the recording stops before the clarification._  **3** _I could not judge the acoustic calculation._  **4** _Nobody can say whether the pupil would have answered differently, because the question was never put again._  **5** _I am not able to assess the pump specification._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the test is?   **A** how confident the judge feels   **B** **whether a person can be named**, and if not, what makes the thing unknowable   **C** how important the judgement is'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say happens when a personal limit is reported as unknowable?   **2** What does Mrs Khoury say happens the other way round?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.5  Two sentences, and only one is about you', [
  ['Ms Huda', 'Mrs Oueidat has assessed an interpreter\'s work in a construction case.'],
  ['Mrs Oueidat', '⚠ **Fourteen hours of recording and two findings, and they are different kinds of thing.** **One is about me.** **The other is about the world, and it took me three days to see that it was not about me.**'],
  ['Mr Attar', 'The one about you first.'],
  ['Mrs Oueidat', '⚠ **He rendered a term twice in two ways and I cannot say which the profession uses.** _I cannot judge whether the second rendering is the term the profession uses, and a structural engineer could._ **One sentence, and it names a kind of person.**'],
  ['Mrs Khoury', 'And you can name one in this room.'],
  ['Mr Zahreddine', '⚠ **She asked me and I answered in four minutes, and the answer was that both are used and one is used in the regulation.** **Which turns her limit into a two-line note** — **and a judge who names the kind of person has usually found the person inside a week.**'],
  ['Dr Qabbani', 'And the second finding?'],
  ['Mrs Oueidat', '⚠ **The witness said _it_ once, about either the beam or the slab, and the recording stops because the session was adjourned.** **He was not asked again and he has left the country.** _Nobody can say which he meant, because the word was said once and the clarification was never put._'],
  ['Mrs Khoury', '⚠ **And that is the harder sentence to write, because it looks like a bigger admission and is a smaller one.** **The first sentence is about the judge.** **The second is about the record** — **and a reader who cannot tell them apart will go looking for an expert who does not exist.**'],
  ['Mrs Rizk', 'How long would that take?'],
  ['Mrs Oueidat', '⚠ **Six weeks, in a case I know of, and the expert they found gave an opinion about what the witness probably meant.** **That opinion is now in a file** — **and it was produced because somebody wrote _I cannot determine_ where the honest sentence was _it cannot be determined_.**'],
  ['Mr Tayara', 'And the other way round?'],
  ['Mrs Khoury', '⚠ **The other way round is the commoner and the more flattering.** **A judge who cannot do something says that nobody could** — **and in this class three of ten first answers did it, and all three were about a judgement a named colleague makes every week.**'],
  ['Mrs Tarabishi', 'So the test is the name.'],
  ['Mrs Oueidat', '⚠ **The test is whether you can name a person or a kind of person, and if you cannot, the second test: what makes it unknowable?** **A word said once, a document that was never written, a question never put, a person who cannot be found** — **and if you cannot finish that sentence either, you have not found the limit yet.**'],
  ['Mrs Ajouz', 'Mine is a cold-chain reading from a device that was not calibrated.'],
  ['Mr Zahreddine', '⚠ **Second kind, and it is the cleanest example in the room.** **An uncalibrated reading is not a reading anybody can correct afterwards** — **and the sentence is _nobody can say what the temperature was, because the device was not calibrated_, which is about the device and not about you.**'],
  ['Mr Shihabi', 'Does the second kind not look like an excuse?'],
  ['Mrs Khoury', '⚠ **It looks like one and it is the opposite, because it closes a line of enquiry that would otherwise be opened at somebody\'s expense.** **_It cannot be determined_ stops six weeks of work** — **and the stress goes on the reason and not on _nobody_, or the sentence sounds like a man defending himself.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the three days.** **I had the second finding on the first evening and I spent three days looking for somebody to refer it to** — **and the reason I looked is that a limit with a name attached is comfortable and a limit with nothing behind it is not.**'],
]));
out.push(sp());
out.push(box('Language box – two limits, two sentences', [
  '**The first kind is about you and it names a person or a kind of person.** ⚠ _I cannot judge whether the second rendering is the term the profession uses, and a structural engineer could._ **One sentence, and the second clause is the whole value of it** — **because a judge who names the kind of person has usually found the person inside a week.**',
  '**The second kind is about the record and it gives what makes the thing unknowable.** ⚠ _Nobody can say which he meant, because the word was said once and the clarification was never put._ **A word said once, a document never written, a question never put, a device not calibrated, a person who cannot be found.**',
  '**Reporting the second kind as the first costs six weeks.** ⚠ **_I cannot determine_ sends the organisation looking for an expert who does not exist** — **and in one case it found one, who gave an opinion about what a witness probably meant, and that opinion is now in a file.**',
  '**Reporting the first kind as the second is commoner and more flattering.** ⚠ **Three of ten first answers in this class did it, and all three were about a judgement a named colleague makes every week** — **so the test is the name, and it is asked first.**',
  '**The second test, when no name can be found.** ⚠ **What makes it unknowable?** **If you cannot finish that sentence, you have not found the limit yet** — **and what you have is a judgement you have not thought about for long enough.**',
  '**And the second kind is not an excuse; it is a closure.** ⚠ **_It cannot be determined_ stops work that would otherwise be done at somebody\'s expense** — **and it is the only sentence in this unit that saves a stranger from a bill.**',
  '**Pronunciation.** 🔊 **Track 16.6** **Say _nobody can say which he meant, because the word was said once_ with the weight on _once_ and none on _nobody_.** ⚠ **Weight on _nobody_ makes it a defence of the judge.** **Weight on the reason makes it a fact about the record** — **and the reader acts on the second and argues with the first.**',
  '**Practise:** Two sentences, and say which kind. **1** a term you cannot check  **2** a word said once  **3** a reading from an uncalibrated device  **4** a step that may be missing  **5** a question that was never put again',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the limit from the card. B says **which kind it is**, gives the sentence, and either **names the kind of person** or **says what makes it unknowable.** ⚠ **Two rows on each card are the first kind dressed as the second** — **and there B names the colleague who does it every week.** Change cards.'));
out.push(table(['Card A – the limit as stated', 'Card B – the limit as stated'], [
  ['_Nobody could say whether that term is standard._', '_Nobody could read a drawing like that._'],
  ['_⚠ Nobody can tell what a pupil would have answered._', '_⚠ Nobody can say what the temperature was._'],
  ['_I cannot say what the witness meant by it._', '_I cannot say what the figure in the margin refers to._'],
  ['_⚠ Nobody could judge the acoustic calculation._', '_⚠ Nobody could score that criterion fairly._'],
  ['_I cannot say whether a step is missing._', '_I cannot say whether the omitted test is normal._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the kind, the sentence, and the name or the reason. ⚠ **Rows 1 and 4 on both cards are the first kind dressed as the second**, and each has a colleague who does it weekly. **Rows 2 are genuinely the second kind on both cards.** **Rows 3 and 5 are the trap**: _I cannot_ is correct in form and the room must still say which kind each is, **because two of the four are about the record and the pronoun is wrong.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the **two judgements you brought** and write **one sentence for each**, in the right form. ⚠ **Name a person or a kind of person for the first.** **Say what makes the second unknowable.** **In this class two students found that both of theirs were the first kind** — **and that is a good result and not a failure, because both were referred within the week.**'));
out.push(p('**b**  Swap. Your partner reads **only your second sentence** and tries to name somebody who could judge it. ⚠ **If they can, it was the first kind and you had flattered yourself.** **Then the harder question: what would somebody do with your sentence if they believed it?** — **and the answer for the second kind is _stop_, which is the point of it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat has assessed an interpreter\'s work in a construction case, fourteen hours of recording and two findings, and they are different kinds of thing: one is about her, and the other is about the world, and it took her three days to see that it was not about her. Mr Attar asked for the one about her first, and he rendered a term twice in two ways and she cannot say which the profession uses, so the sentence names a kind of person: a structural engineer could. Mrs Khoury said she can name one in this room, and Mr Zahreddine said she asked him and he answered in four minutes, and the answer was that both are used and one is used in the regulation, which turns her limit into a two-line note. Dr Qabbani asked for the second finding, and the witness said it once, about either the beam or the slab, and the recording stops because the session was adjourned, and he was not asked again and has left the country, so nobody can say which he meant. Mrs Khoury said that is the harder sentence to write because it looks like a bigger admission and is a smaller one: the first sentence is about the judge and the second is about the record, and a reader who cannot tell them apart will go looking for an expert who does not exist. Mrs Rizk asked how long that would take, and six weeks in a case she knows of, and the expert they found gave an opinion about what the witness probably meant, and that opinion is now in a file, produced because somebody wrote I cannot determine where the honest sentence was it cannot be determined. Mr Tayara asked about the other way round, and Mrs Khoury said that is the commoner and the more flattering: a judge who cannot do something says that nobody could, and three of ten first answers in the class did it, and all three were about a judgement a named colleague makes every week. Mrs Tarabishi said so the test is the name, and the test is whether you can name a person or a kind of person, and if you cannot, the second test is what makes it unknowable. Mrs Ajouz mentioned a cold-chain reading from a device that was not calibrated, and Mr Zahreddine said second kind, and the cleanest example in the room. Mr Shihabi asked whether the second kind does not look like an excuse, and it looks like one and is the opposite, because it closes a line of enquiry that would otherwise be opened at somebody\'s expense. And Mrs Oueidat said the thing she will take away is the three days: she had the second finding on the first evening and spent three days looking for somebody to refer it to, and the reason she looked is that a limit with a name attached is comfortable and a limit with nothing behind it is not._'));
out.push(p('**Listener task:** write the two sentences and mark which kind each is.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two findings as Mrs Oueidat filed them. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _assessment of interpretation, construction case_ · _fourteen hours of recording_ · **2 April**',
  '**What I was asked.** **Whether the interpretation of eleven sessions is fit to be relied on.** **It is, with two reservations, and the reservations are different kinds of thing.** ⚠ **The distinction is the whole of this report and I have put it in the first paragraph rather than the last.**',
  '**What I did with the fourteen hours.** **I listened to all eleven sessions and transcribed the four passages in which a technical term is rendered more than one way.** ⚠ **The transcription is annexed, with the recording times, so that an engineer can read the four passages without listening to anything** — **and that is the form a limit should take when you already know who will have to close it.**',
  '**The first reservation, and it is about me.** **At session 4 and again at session 9 the interpreter rendered one term in two different ways.** ⚠ _I cannot judge whether the second rendering is the term the profession uses, and a structural engineer could._ **I have asked one and he answered in four minutes: both are in use and one of the two appears in the regulation.** **So the reservation is now a two-line note and not a reservation at all.**',
  '**The second reservation, and it is about the record.** **At session 7 the witness used the pronoun _it_ once, of either the beam or the slab, and the two readings carry different consequences.** **The session was adjourned at that point, the question was not put again, and the witness has since left the country.** ⚠ _Nobody can say which he meant, because the word was said once and the clarification was never put._',
  '**Why the pronoun in that sentence matters.** ⚠ **If I write _I cannot determine_, the file goes to somebody else and somebody else will be found.** **I know of a case in which six weeks were spent and an expert was engaged, and what he produced was an opinion about what a witness probably meant.** **That opinion is in a file and it will be read as evidence by somebody who was not there.**',
  '**What the second sentence is for.** **It closes a line of enquiry.** ⚠ **It is the only sentence in this assessment that saves anybody money** — **and it is the one I spent three days avoiding, because I was looking for a person to refer it to, and a limit with a name attached is comfortable.**',
  '**And the thing I would say to anybody doing this work.** **Ask the name question first and ask it out loud.** **Three of ten judgements people call unknowable are judgements a named colleague makes every week** — **and the other seven need the second question, which is what makes this one unknowable, in one clause.**',
  '**Conclusion.** **The interpretation of the eleven sessions is fit to be relied on.** **One rendering is settled by the note at annexe A.** **One pronoun cannot be settled by anybody and should not be sent anywhere further.**',
]));
out.push(item('1', 'What happened to the first reservation, and how long did it take?'));
out.push(item('2', 'Why does she say the pronoun in the second sentence matters?'));
out.push(item('3', 'What does she say she spent three days doing, and why?'));
out.push(writers([
  'Two limits in one assessment: **what you were asked, answered in a line** → **the first limit, with a kind of person named** → **what happened when you asked one** → **the second limit, with what makes it unknowable** → **why the pronoun matters** → **and a conclusion that says where each limit should go next.**',
  '⚠ **Answer the question you were asked in the first three lines.** **An assessment that opens on its reservations has buried the verdict** — **and the reader who has to act will read the reservations as the answer, which is the one misreading a judge cannot afford.**',
  '**On the first limit, name the kind of person and then go and ask one.** ⚠ _I have asked one and he answered in four minutes._ **A limit you have already closed is worth more than a limit you have declared** — **and most of the first kind can be closed inside a week by somebody who tries.**',
  '**On the second limit, the clause after _because_ is the whole sentence.** ⚠ _Because the word was said once and the clarification was never put._ **Name the mechanism of the unknowability** — **a word said once, a question never put, a device not calibrated** — **and a reader who has that clause will not commission anybody.**',
  '⚠ And **end by saying where each limit goes.** _One rendering is settled by the note at annexe A. One pronoun cannot be settled by anybody and should not be sent anywhere further._ **The last six words are an instruction to the organisation and the only one this genre allows** — **because they close something rather than asking for it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two reservations of an assessment of your own (120 words or more).'));
out.push(p('**______________** · _assessment of _______________ · _______________ · **______________**   **What I was asked.** **______________.**   **The first reservation, and it is about me.** ⚠ **I cannot judge ______________, and ______________ could.** **I have asked one and ______________.**   **The second reservation, and it is about the record.** ⚠ **Nobody can say ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The question answered in the first three lines',
  'A kind of person named on the first limit',
  'A mechanism of unknowability on the second',
  'Each limit sent somewhere, or closed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their second reservation**, and the room tries to name somebody who could judge it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole assessment (260 words or more), to the shape in the writer\'s box: the question answered, the first limit with its person and what came of asking, the second limit with its mechanism, why the pronoun matters, and the conclusion that places both.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the verdict in the first three lines, a kind of person on the first limit, and a mechanism on the second.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two numbers on the board.** **How many second-kind limits did the room produce, and how many survived a partner trying to name somebody?** **In this class seven were claimed and four survived.** **Then the three days: ask who has spent time looking for a person to refer something to that nobody can settle.** **Then Mrs Oueidat\'s last line, and not before.**'));
out.push(hw('**Write your two sentences in their final form** — **one with a kind of person, one with a mechanism.** ⚠ **Then do the harder half: go and ask the person.** **In this class six of the ten first-kind limits were closed within the week and three of the six took under ten minutes.** **Bring the answer and the time it took.** **16.4 gives a verdict that can be appealed and names the ground in advance**, so bring something you have signed that somebody might want to appeal.'));

// ===================== 16.4 =====================
out.push(pb());
out.push(h2('16.4  The verdict that can be appealed'));
out.push(p('**Function:** giving a verdict that can be appealed, and naming the ground in advance   ·   **Grammar:** _this assessment may be appealed on the ground that ____   ·   **Pronunciation:** the ground read as a route and not as a warning'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one verdict you have signed, and the one thing somebody could appeal it on.** ⚠ **The ground, in their words and not yours.** **In this class eight of ten gave a ground that defended the verdict** — **and your teacher writes the ten grounds on the board and crosses out every one that begins with _although_.**'));
out.push(board('That five of the six items are soundly assessed.', 'That item 6 was assessed by somebody who said he could not.'));
out.push(p('**b**  Which two name a ground the other party could actually use? **1** _I have been as fair as possible throughout._  **2** _This assessment may be appealed on the ground that item 6 was scored by a judge who records that he could not assess it._  **3** _If the teacher disagrees he is welcome to say so._  **4** _The scheme may contest criterion 4 on the ground that the criterion is met in four rounds by correspondence alone, which the scorer records as a doubt._  **5** _Any appeal would of course be considered on its merits._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the ground must be?   **A** the strongest argument for the verdict   **B** **the best argument against it**, written by the person who signed it   **C** an invitation to disagree'));
out.push(p('**b**  Listen again. **1** What does Mr Zahreddine say a panel loses by not naming the ground?   **2** What does Mrs Khoury say about the word _although_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.7  The best argument against your own verdict', [
  ['Ms Huda', 'Mr Zahreddine\'s panel rejected a submission last month.'],
  ['Mr Zahreddine', '⚠ **Three of us, four submissions, and we rejected the one I would have chosen on the structure alone.** **It fell on criterion 3, which is acoustic, and I deferred to the member who could judge it.**'],
  ['Mrs Khoury', 'And the letter?'],
  ['Mr Zahreddine', '⚠ **The letter now carries a paragraph that I did not know how to write a year ago.** _This decision may be appealed on the ground that criterion 3 was decided by one member of three and the other two record that they could not assess it._ **Which is the best argument against us and we wrote it.**'],
  ['Mr Attar', 'Why give them that?'],
  ['Mrs Khoury', '⚠ **Because they will find it, and when they find it themselves it is a scandal, and when you print it it is a procedure.** **The same fact arrives twice and the two arrivals are not the same event** — **and the second one costs the panel nothing and costs the appellant six weeks of suspicion.**'],
  ['Mrs Oueidat', 'And what does a panel lose by leaving it out?'],
  ['Mr Zahreddine', '⚠ **The chance to answer it.** **An appeal that names its own ground is answered on the ground; an appeal that has had to dig for one arrives with a theory about why we hid it** — **and in two of the three appeals I have seen, the theory was the whole of the appeal and the ground was barely argued.**'],
  ['Dr Qabbani', 'How do you find the best argument against yourself?'],
  ['Mrs Khoury', '⚠ **You ask what the other party will show a stranger.** **Not what they will feel: what they will put in front of somebody who has read nothing.** **_One member of three decided it and the other two say they could not_ is a sentence a stranger understands in four seconds** — **and that is the test of a ground.**'],
  ['Mrs Rizk', 'And the word _although_?'],
  ['Mrs Khoury', '⚠ **It is the mark of a ground that is really a defence.** **_Although criterion 3 was decided by one member, the panel is satisfied that_** — **and everything after _although_ is the verdict again.** **Eight of ten first answers in this room began with _although_ or ended with a clause that took the ground back.**'],
  ['Mr Tayara', 'Mine is an appraisal and the teacher can appeal to the directorate.'],
  ['Mrs Oueidat', '⚠ **And your ground is already written, in item 6, which is the useful accident of 16.1.** **A clause that says you could not assess something is a ground of appeal in the plainest words available** — **and a judge who writes one honest limit has written the appellant\'s first paragraph for them.**'],
  ['Mrs Tarabishi', 'Does naming it not invite an appeal that would not have come?'],
  ['Mr Zahreddine', '⚠ **It invites the appeal that should come and deters the other kind.** **Of the four decisions we have written this way, one was appealed on our own ground and upheld with the acoustic member\'s reasons annexed** — **and three were not appealed at all, which I had not expected.**'],
  ['Mrs Ajouz', 'Why would printing the ground stop an appeal?'],
  ['Mrs Khoury', '⚠ **Because most appeals are about being treated as if the decision were obvious.** **A party who reads the one weak point of a verdict, in the verdict, has been told that somebody thought about them** — **and about half of what looks like a dispute over substance is a dispute about that.**'],
  ['Mr Shihabi', 'And the tone of the paragraph?'],
  ['Mrs Oueidat', '⚠ **It is a route and not a warning.** **Say where to send it, by when, and to whom** — **and a ground with no address attached is a confession, which is a worse document than either a defence or a route.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is the one that was appealed.** **They used our sentence, word for word, as their first paragraph** — **and the acoustic member\'s reasons went to the appeal body in four pages that nobody had asked him to write before, which is the only reason anybody now knows how he judges.**'],
]));
out.push(sp());
out.push(box('Language box – the ground named in advance', [
  '**The ground is the best argument against your own verdict, written by you.** ⚠ _This decision may be appealed on the ground that criterion 3 was decided by one member of three and the other two record that they could not assess it._ **Not the strongest argument for the verdict, and not an invitation to disagree.**',
  '**The test is what the other party will show a stranger.** ⚠ **Not what they will feel: what they will put in front of somebody who has read nothing.** **A ground a stranger understands in four seconds is a ground** — **and anything that needs the file explained first is a defence wearing a ground\'s clothes.**',
  '**_Although_ is the mark of a defence.** ⚠ **_Although criterion 3 was decided by one member, the panel is satisfied that_** — **and everything after _although_ is the verdict again.** **Eight of ten first answers either begin with it or end with a clause that takes the ground back.**',
  '**The same fact arrives twice and the two arrivals are different events.** ⚠ **Found by the appellant, it is a scandal.** **Printed by the panel, it is a procedure** — **and the second costs the panel nothing and saves the other party six weeks of suspicion.**',
  '**A ground is a route and it carries an address.** ⚠ **Where to send it, by when, to whom.** **A ground with no address is a confession** — **which is a worse document than a defence, because it admits the fault and withholds the remedy.**',
  '**And the result nobody predicts.** ⚠ **Naming the ground deters appeals rather than inviting them**: three of four decisions written this way were not appealed at all. **Most appeals are about being treated as if the decision were obvious** — **and a party who reads the weak point inside the verdict has been told that somebody thought about them.**',
  '**Pronunciation.** 🔊 **Track 16.8** **Read the ground flat, as you would read an address, with no fall at the end.** ⚠ **A fall at the end turns a route into a warning** — **and a warning is answered with an argument, whereas a route is answered with a letter to the body named in it.**',
  '**Practise:** Name the ground, then the address. **1** one member decided it  **2** a criterion you recorded as doubted  **3** an item you could not assess  **4** a count somebody else would dispute  **5** a figure that came from one document only',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the verdict from the card. B gives **the ground of appeal in the other party\'s words**, then the address. ⚠ **Two rows on each card are defences and begin with _although_** — **and there B strikes the first word and finds the real ground.** Change cards.'));
out.push(table(['Card A – the verdict', 'Card B – the verdict'], [
  ['_Rejected; it fell on criterion 3._', '_Appraisal: satisfactory in five of six items._'],
  ['_⚠ Although the acoustic member alone decided it, we are satisfied._', '_⚠ Although item 6 was not assessed, the lesson was sound._'],
  ['_Scored 21 of 30; fourth in the round._', '_Rendering fit to be relied on, with two reservations._'],
  ['_⚠ Although criterion 4 is doubted, the ranking stands._', '_⚠ Although the recording stops, the finding is safe._'],
  ['_Not recommended; the maintenance arrangement is unfunded._', '_Chapter returned; the search is not reported._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the ground in the other party\'s words, and the address. ⚠ **Rows 2 and 4 on both cards are defences**, and the test is that everything after _although_ repeats the verdict. **Rows 5 are the hardest on either card**: both verdicts rest on an absence, and the ground is that an absence was read as a fault **when nobody had asked for the thing that is absent.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the verdict you brought** and write **the ground of appeal as the other party would write it**, then the address. ⚠ **No _although_, and no clause that takes it back.** **In this class eight of ten first versions defended the verdict** — **and the two that did not had both been appealed before, which is how their writers learnt it.**'));
out.push(p('**b**  Swap. Your partner reads **only the ground** and says whether a stranger would understand it in four seconds. ⚠ **Then the harder question: if they used your ground, would you still be right?** — **and in this class three students found that they would not, which is the cycle\'s best outcome and the one nobody wants.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine\'s panel rejected a submission last month: three of them, four submissions, and they rejected the one he would have chosen on the structure alone, because it fell on criterion 3, which is acoustic, and he deferred to the member who could judge it. Mrs Khoury asked about the letter, and the letter now carries a paragraph he did not know how to write a year ago: the decision may be appealed on the ground that criterion 3 was decided by one member of three and the other two record that they could not assess it, which is the best argument against them and they wrote it. Mr Attar asked why give them that, and Mrs Khoury said because they will find it, and when they find it themselves it is a scandal and when you print it it is a procedure, and the same fact arrives twice and the two arrivals are not the same event. Mrs Oueidat asked what a panel loses by leaving it out, and the chance to answer it, because an appeal that names its own ground is answered on the ground, and an appeal that has had to dig for one arrives with a theory about why it was hidden, and in two of the three appeals he has seen the theory was the whole of the appeal. Dr Qabbani asked how you find the best argument against yourself, and Mrs Khoury said you ask what the other party will show a stranger: not what they will feel, but what they will put in front of somebody who has read nothing. Mrs Rizk asked about the word although, and it is the mark of a ground that is really a defence, because everything after although is the verdict again, and eight of ten first answers in the room began with it. Mr Tayara said his is an appraisal and the teacher can appeal to the directorate, and Mrs Oueidat said his ground is already written in item 6, which is the useful accident of the first cycle. Mrs Tarabishi asked whether naming it does not invite an appeal that would not have come, and it invites the appeal that should come and deters the other kind: of four decisions written this way, one was appealed on their own ground and upheld, and three were not appealed at all. Mrs Ajouz asked why printing the ground would stop an appeal, and Mrs Khoury said because most appeals are about being treated as if the decision were obvious. Mr Shihabi asked about the tone, and it is a route and not a warning, so say where to send it, by when, and to whom. And Mr Zahreddine said the thing he will take away is the one that was appealed: they used his sentence word for word as their first paragraph, and the acoustic member\'s reasons went to the appeal body in four pages that nobody had asked him to write before._'));
out.push(p('**Listener task:** write the ground in the other party\'s words and the address under it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the decision letter Mr Zahreddine\'s panel sent. Answer the questions.'));
out.push(model([
  '**TENDER PANEL · DECISION** · _four submissions, school rebuild, phase 2_ · _three members_ · **17 February**',
  '**The decision.** **Submission C is recommended.** **Submission A, which is the subject of this letter, is not recommended.** **It was ranked second of four, and the gap between second and first is one criterion.** ⚠ **The panel has set out below which criterion that was and how it was decided, because the ranking cannot be understood without it.**',
  '**Where it was strongest.** **Criterion 1, structure.** ⚠ **The frame is the only one of the four that carries the hall without an internal column, and the calculation is set out in annexe 2 in a form the panel could follow.** **It scored higher on criterion 1 than any submission the panel has seen in three rounds.**',
  '**Where it fell.** **Criterion 3, acoustic performance.** **The reverberation figure for the hall is given without the assumption it rests on, and the panel\'s acoustic member judged that the figure cannot be reproduced from the drawings supplied.**',
  '**How criterion 3 was decided, since this matters more than the score.** ⚠ **It was decided by one member of three.** **The other two record that they could not assess it: one is a structural engineer and one is an administrator, and both have signed a note to that effect.**',
  '**The ground of appeal.** ⚠ _This decision may be appealed on the ground that criterion 3, which decided the outcome, was assessed by one member of three, the other two having recorded that they could not assess it._ **An appeal is sent to the directorate\'s tender review clerk within twenty-one days of this letter, in writing, and it may be sent by hand.**',
  '**What the panel will supply if an appeal is made.** **The acoustic member\'s reasons in full, which run to four pages and are not annexed to this letter.** ⚠ **They were written for the appeal body and not for the submitter.** **The panel has decided not to send a summary: a summary of a technical judgement by two people who could not make it would be the fault again in a shorter form.**',
  '**What the panel did assess on criterion 3, since it assessed something.** **The figure is given, the method is named, and the drawings are the drawings the figure is said to come from.** ⚠ **All three of us checked that much, which is a check on the paperwork and not on the acoustics** — **and it is worth saying, because an appellant who reads that one member decided criterion 3 may assume that the other two never opened the annexe.**',
  '**What is not a ground.** **The ranking.** **Submission A was second and the ranking rests on criteria 1, 2, 4 and 5, on which all three members assessed and agreed.**',
  '**And one thing the panel owes the submitter.** **The reverberation figure may be right.** ⚠ **The finding is that it cannot be reproduced from what was supplied, which is a finding about the submission and not about the building** — **and a resubmission that supplies the assumption would be assessed on criterion 3 by the same member and might score full marks.**',
]));
out.push(item('1', 'How was criterion 3 decided, and why does the letter say this matters more than the score?'));
out.push(item('2', 'Why does the panel decline to send a summary of the acoustic member\'s reasons?'));
out.push(item('3', 'What does the last paragraph say the finding is about, and what is it not about?'));
out.push(writers([
  'A decision letter with its own ground of appeal: **the decision in three lines** → **where the submission was strongest, with the evidence** → **where it fell** → **how that criterion was decided, and by how many** → **the ground of appeal in the appellant\'s words, with the address and the time limit** → **what is not a ground** → **and what the finding is about.**',
  '⚠ **Give the strongest part before the fault, and give it in detail.** **A letter that opens on the fault reads as a letter written for faults** — **and the detail is what proves otherwise: _the only one of the four that carries the hall without an internal column_ cannot be written by somebody who skimmed.**',
  '**Say how the deciding criterion was decided, and by how many.** ⚠ _It was decided by one member of three._ **This is the sentence the whole letter exists to carry** — **and a panel that withholds the arithmetic of its own competence has published a number and hidden the one fact about it that matters.**',
  '**The ground carries an address and a time limit.** ⚠ _Sent to the directorate\'s tender review clerk within twenty-one days, in writing, and it may be sent by hand._ **A ground with no address is a confession** — **and the last four words are there because the clerk is in the same building.**',
  '⚠ And **end on what the finding is about.** _The figure may be right; the finding is that it cannot be reproduced from what was supplied._ **This is the difference between rejecting a submission and rejecting a design** — **and the sentence that says a resubmission might score full marks is the only part of the letter the submitter will act on.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the decision and the ground of appeal (120 words or more).'));
out.push(p('**______________** · _______________ · _______________ · **______________**   **The decision.** **______________.**   **Where it was strongest.** **______________.** **______________.**   **Where it fell.** **______________.**   **How ______________ was decided.** ⚠ **It was decided by ______________ of ______________.**   **The ground of appeal.** ⚠ **This decision may be appealed on the ground that ______________.** **An appeal is sent to ______________ within ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The decision in the first three lines',
  'The strongest part before the fault, in detail',
  'The ground in the appellant\'s words, with no _although_',
  'An address and a time limit under the ground',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their ground and address**, and the room says whether a stranger would understand it in four seconds.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole decision letter (260 words or more), to the shape in the writer\'s box: the decision, the strongest part, the fault, how the deciding criterion was decided, the ground with its address, what is not a ground, and what the finding is about.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the ground in the other party\'s words, an address under it, and no _although_ on the page.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count on the board: how many first versions began with _although_ or ended with a clause that took the ground back?** **In this class eight of ten.** **Then the question that decides the cycle: ask the three students who found that their verdict would not survive its own ground to say what they are going to do about it.** **Then Mr Zahreddine\'s four pages** — **and the fact that nobody had asked for them before.**'));
out.push(hw('**Write the ground of appeal for something you have signed**, in the other party\'s words, with the address and the time limit. ⚠ **Then do the harder half: ask whether your verdict survives it.** **In this class three of ten did not survive** — **and all three verdicts rested on a criterion the writer had recorded as doubted in 16.2, which is the two cycles meeting.** **Bring both.** **16.5 says what would change your verdict, specifically**, so bring the verdict and one thing you could be shown tomorrow.'));

// ===================== 16.5 =====================
out.push(pb());
out.push(h2('16.5  What would change this assessment'));
out.push(p('**Function:** saying what would change your verdict, specifically   ·   **Grammar:** _this would be a different assessment if ___ _ — one testable condition   ·   **Pronunciation:** the condition said as a commitment, not a hedge'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one verdict of yours, and the one thing somebody could put in front of you tomorrow that would change it.** ⚠ **A thing, and tomorrow.** **Not a feeling and not next year.** **In this class five of ten first answers named something nobody could ever produce** — **and your teacher writes the ten conditions on the board and asks the room which could be met by Thursday.**'));
out.push(board('That four of eleven patients could restate it.', 'That the translation renders the original faithfully.'));
out.push(p('**b**  Which two are testable conditions? **1** _I would change my view if I were persuaded that the form is clear._  **2** _This would be a different assessment if seven of the eleven patients could state, in their own words, what the third paragraph asks them to agree to._  **3** _More evidence would of course be welcome._  **4** _This would be a different assessment if the acoustic assumption were supplied in writing, in any form, by the submitter._  **5** _If the position changes I shall reconsider._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a condition must have?   **A** a date by which it would be reviewed   **B** **a method and a threshold**, both of which somebody else could apply   **C** the judge\'s agreement that it had been met'));
out.push(p('**b**  Listen again. **1** What does Dr Qabbani say happened when he wrote the condition before the verdict went out?   **2** What does Mrs Khoury say an unmeetable condition is for?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.9  A condition somebody else can apply', [
  ['Ms Huda', 'Dr Qabbani assessed a consent form that had been translated for the hospital.'],
  ['Dr Qabbani', '⚠ **And the first thing to say is what I did not assess.** **Whether it renders the original faithfully, which Mrs Oueidat could and I cannot.** **What I assessed is whether a patient can tell what they are agreeing to**, which is the thing the form exists to do.'],
  ['Mrs Khoury', 'And the verdict?'],
  ['Dr Qabbani', '⚠ **Not fit for use, on the third paragraph.** **Eleven patients read it with me and four could state what they were agreeing to.** **Four of eleven, and the form has been in use for two years.**'],
  ['Mrs Oueidat', 'And the condition?'],
  ['Dr Qabbani', '⚠ **Written before the verdict went out, and this is the part I want the room to hear.** _This would be a different assessment if seven of the eleven could state, in their own words, what the third paragraph asks them to agree to._ **A method and a threshold, and anybody can apply both.**'],
  ['Mr Attar', 'Why seven?'],
  ['Dr Qabbani', '⚠ **Because I had to choose a number and defend it, and seven is the number the ward uses for its own teaching checks.** **A threshold I invented would have been mine and arguable** — **and one that comes from somebody else\'s practice is a threshold the hospital already lives with.**'],
  ['Mrs Khoury', '⚠ **And notice what the committee can now do without him.** **They can rewrite the paragraph, read it to eleven patients, count, and act** — **which is a verdict that has handed over its own test, and that is the only kind that gets acted on.**'],
  ['Mrs Rizk', 'You said writing it first changed something.'],
  ['Dr Qabbani', '⚠ **It changed the verdict on the fifth paragraph.** **I had marked it not fit for use, I wrote the condition, and the condition was already met: nine of eleven could restate it.** **So the fifth paragraph came out of my report before anybody saw it** — **and I had been about to condemn it on a feeling.**'],
  ['Mr Tayara', 'How often does that happen?'],
  ['Mrs Khoury', '⚠ **In this class three of ten found a condition that was already met**, which is the most useful thing in the cycle and nobody arrives expecting it. **A condition written after the verdict defends it.** **A condition written before the verdict tests it** — **and the order is the whole discipline.**'],
  ['Mrs Tarabishi', 'And the conditions nobody could meet?'],
  ['Mrs Khoury', '⚠ **They are a defence with a kind face.** **_If I were persuaded that the form is clear_ cannot be met by anybody but the writer, who has already decided** — **and five of ten first answers in this room were of that shape, which is a comfortable place to stand.**'],
  ['Mr Zahreddine', 'Ours is simpler. The assumption, in writing, in any form.'],
  ['Mrs Oueidat', '⚠ **And _in any form_ is the three words that make it a real condition.** **A condition that specifies a format the other party cannot produce has been written to fail** — **and a panel that would accept a sheet of working in pencil has said so in three words and lost nothing.**'],
  ['Mrs Ajouz', 'May there be more than one?'],
  ['Dr Qabbani', '⚠ **One for each verdict, and not one for the report.** **A report with a single condition at the end has told the reader nothing about which of its findings is soft** — **and a report with a condition under every finding has said exactly where it would give way.**'],
  ['Mr Shihabi', 'And the tone?'],
  ['Mrs Khoury', '⚠ **It is a commitment and not a hedge, so it does not get a falling tone and it does not get a _perhaps_.** **You are promising to change your mind on a stated count** — **and a judge who hedges the condition has reserved the right to argue when it is met, which is worse than having written none.**'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is the fifth paragraph.** **I condemned it in my head in about four seconds and the condition saved it in about four minutes** — **and if I had written the condition last, as I have done for nine years, that paragraph would have been rewritten by somebody for no reason at all.**'],
]));
out.push(sp());
out.push(box('Language box – the testable condition', [
  '**One condition under each verdict, with a method and a threshold.** ⚠ _This would be a different assessment if seven of the eleven could state, in their own words, what the third paragraph asks them to agree to._ **Both halves must be applicable by somebody who is not you.**',
  '**The threshold comes from somebody else\'s practice where it can.** ⚠ **Seven of eleven is the ward\'s own figure for a teaching check.** **A threshold you invent is yours and arguable** — **and one the organisation already lives with is a threshold nobody can dispute without disputing their own rule.**',
  '**Write the condition before the verdict goes out, not after.** ⚠ **A condition written after the verdict defends it; a condition written before it tests it.** **Three of ten in this class found a condition that was already met** — **and in one case a paragraph came out of a report that was about to be condemned on a feeling.**',
  '**The unmeetable condition is a defence with a kind face.** ⚠ **_If I were persuaded_ can be met by nobody but the writer, who has decided already.** **Five of ten first answers were of that shape** — **and it is the most comfortable sentence in the whole of this unit.**',
  '**_In any form_ does more work than any other three words in the cycle.** ⚠ **A condition that specifies a format the other party cannot produce has been written to fail.** **A panel that would accept a sheet of working in pencil says so** — **and loses nothing by it.**',
  '**One condition per verdict and not one per report.** ⚠ **A single condition at the end tells the reader nothing about which finding is soft** — **and a condition under every finding has said exactly where the judge would give way.**',
  '**Pronunciation.** 🔊 **Track 16.10** **Say the condition with no fall at the end and no _perhaps_ anywhere in it.** ⚠ **You are promising to change your mind on a stated count.** **A judge who hedges the condition has reserved the right to argue when it is met** — **which is worse than having written no condition at all.**',
  '**Practise:** One condition, with method and threshold. **1** a count of readers  **2** a document in any form  **3** a test the other side can run  **4** a figure from somebody else\'s rule  **5** a condition that is already met',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the verdict from the card. B gives **one condition**, with a method and a threshold, and says **who would apply it.** ⚠ **Two rows on each card already carry a condition nobody could meet** — **and there B says so and writes a real one.** Change cards.'));
out.push(table(['Card A – the verdict', 'Card B – the verdict'], [
  ['_The third paragraph is not fit for use._', '_The maintenance arrangement is unfunded._'],
  ['_⚠ Unless I am persuaded otherwise, it stands._', '_⚠ I shall reconsider if the position changes._'],
  ['_Criterion 3 cannot be assessed from the drawings._', '_Item 6 was not assessed by a competent member._'],
  ['_⚠ More evidence would of course be welcome._', '_⚠ I remain open to argument on this._'],
  ['_The chapter does not report the search._', '_The day-book is not a register for this purpose._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the method, the threshold, and who applies it. ⚠ **Rows 2 and 4 on both cards are unmeetable and the room must say who would decide that they had been met, which is the writer.** **Rows 5 are the hardest on either card**: both verdicts rest on a definition, and a condition on a definition has to name the document the definition would come from — **and on Card B that document does not exist, which is 16.3.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your verdict and your one thing** and write the condition: **method, threshold, and who applies it.** ⚠ **Then check the threshold against somebody else\'s practice** — **a rule, a form, a standing figure your organisation already uses.** **In this class four thresholds came from an existing rule and six were invented** — **and all four of the first kind survived their partner, and two of the six did not.**'));
out.push(p('**b**  Swap. Your partner asks the only question that matters: **could this be met by Thursday, and by whom?** ⚠ **Then the harder one: go and check whether it is met already.** **Three of ten in this class found that it was** — **and one verdict was withdrawn in the lesson.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani assessed a consent form that had been translated for the hospital, and the first thing to say is what he did not assess: whether it renders the original faithfully, which Mrs Oueidat could and he cannot. What he assessed is whether a patient can tell what they are agreeing to, which is the thing the form exists to do. The verdict was not fit for use, on the third paragraph: eleven patients read it with him and four could state what they were agreeing to, four of eleven, and the form has been in use for two years. Mrs Oueidat asked about the condition, and it was written before the verdict went out: this would be a different assessment if seven of the eleven could state, in their own words, what the third paragraph asks them to agree to, which is a method and a threshold that anybody can apply. Mr Attar asked why seven, and because he had to choose a number and defend it, and seven is the number the ward uses for its own teaching checks, so it is a threshold the hospital already lives with. Mrs Khoury said notice what the committee can now do without him: rewrite the paragraph, read it to eleven patients, count, and act. Mrs Rizk said he had mentioned that writing it first changed something, and it changed the verdict on the fifth paragraph, which he had marked not fit for use, and the condition was already met, because nine of eleven could restate it, so the fifth paragraph came out of his report before anybody saw it. Mr Tayara asked how often that happens, and Mrs Khoury said three of ten in the class found a condition that was already met, and a condition written after the verdict defends it while a condition written before it tests it. Mrs Tarabishi asked about the conditions nobody could meet, and they are a defence with a kind face, because if I were persuaded cannot be met by anybody but the writer, who has already decided. Mr Zahreddine said theirs is simpler, the assumption in writing in any form, and Mrs Oueidat said in any form is the three words that make it a real condition. Mrs Ajouz asked whether there may be more than one, and one for each verdict and not one for the report. Mr Shihabi asked about the tone, and it is a commitment and not a hedge. And Dr Qabbani said the thing he will take away is the fifth paragraph: he condemned it in his head in about four seconds and the condition saved it in about four minutes._'));
out.push(p('**Listener task:** write the condition, the threshold, and the name of the person who would apply it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Dr Qabbani\'s report to the committee. Answer the questions.'));
out.push(model([
  '**H. QABBANI** · _report on the translated consent form_ · _six paragraphs read with eleven patients_ · **4 May**',
  '**What I assessed, and what I did not.** ⚠ **I did not assess whether the form renders the original faithfully; that is a question for a translator and I have asked one.** **I assessed whether a patient can state what they are agreeing to, which is what the form exists to do and is a question about English and about patients.**',
  '**Method.** **Eleven patients, consecutive, on two mornings.** **Each read one paragraph and was then asked to say in their own words what it asked them to agree to.** ⚠ **I recorded the answers as stated and did not help.**',
  '**Who read with me, and who did not.** **Eleven patients, each of whom was told that the form was being assessed and not their reading of it.** ⚠ **Two declined and are not among the eleven, and I have counted the eleven who agreed rather than the thirteen who were asked** — **because a count whose denominator moves is not a count.**',
  '**Paragraph 3.** **Four of eleven could state it.** **Not fit for use.** ⚠ _This would be a different assessment if seven of the eleven could state, in their own words, what the third paragraph asks them to agree to._ **Seven is the figure the ward uses for its own teaching checks and I have taken it rather than invent one.**',
  '**Paragraph 5.** **Nine of eleven could state it.** **Fit for use.** ⚠ **I had marked this paragraph not fit for use before I began, on the length of its second sentence, and the count settled it against me** — **and I am recording that because it is the only part of this report that was decided by the method rather than by me.**',
  '**Paragraph 1, 2, 4 and 6.** **Eight, ten, seven and nine of eleven.** **All fit for use, and paragraph 4 is at the threshold and should be read again after any rewriting elsewhere.**',
  '**What the committee can do without me.** **Rewrite paragraph 3, read it to eleven patients on two mornings, count, and act.** ⚠ **The condition is the whole of my authority in this and I have handed it over** — **and if seven state it, the paragraph is fit for use whatever I think of the sentence.**',
  '**One thing I could not test and nobody could.** **Whether a patient who can restate a paragraph has understood what will happen to them.** ⚠ **Restating is what I can count.** **Understanding is not, and no method in this report reaches it** — **and I would rather say so than let a count of eleven stand in for it.**',
  '**And the thing that falls outside the committee\'s question.** **The form is read by patients in a corridor, standing, in about ninety seconds.** **Nobody asked me about the corridor** — **and two of the seven failures on paragraph 3 asked me to read it to them, which is a fact about the corridor and not about the paragraph.**',
]));
out.push(item('1', 'What is his method, and what did he not do while applying it?'));
out.push(item('2', 'What happened to paragraph 5, and why does he record it?'));
out.push(item('3', 'What does he say he could not test, and what will he not let a count stand in for?'));
out.push(writers([
  'A report whose verdicts each carry a condition: **what you assessed and what you did not** → **the method, in three lines** → **each verdict with its count and its condition** → **the verdict the method settled against you** → **what the reader can now do without you** → **what nobody could test** → **and the thing that falls outside the question you were asked.**',
  '⚠ **Give the method before the first verdict.** **A count without a method is a number somebody has to take on trust** — **and _I recorded the answers as stated and did not help_ is the clause that makes the whole report reproducible by a stranger.**',
  '**Put a condition under each verdict and take the threshold from somebody else.** ⚠ _Seven is the figure the ward uses for its own teaching checks._ **A threshold borrowed from the organisation cannot be disputed without disputing its own rule** — **and one you invent will be argued about instead of the paragraph.**',
  '**Record the verdict the method settled against you, and say that it did.** ⚠ _I had marked this paragraph not fit for use before I began, and the count settled it against me._ **This is the single most persuasive paragraph available in the genre** — **and it is available only to a judge who wrote the condition first.**',
  '⚠ And **end outside the question.** _Nobody asked me about the corridor._ **A judge sees the conditions the work is used in and the person who set the question usually does not** — **and two of the seven failures asked to have it read aloud, which is a fact about the corridor and not about the paragraph.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the method and two verdicts with their conditions (120 words or more).'));
out.push(p('**______________** · _report on _______________ · _______________ · **______________**   **What I assessed, and what I did not.** ⚠ **I did not assess ______________; that is a question for ______________.**   **Method.** **______________.** ⚠ **I recorded ______________ and did not ______________.**   **______________.** **___ of ___.** **______________.** ⚠ **This would be a different assessment if ______________.** **______________ is the figure ______________ uses and I have taken it rather than invent one.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The method stated before the first verdict',
  'A condition under each verdict, with a threshold',
  'The threshold traced to somebody else\'s rule',
  'One verdict the method settled against you, if there is one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only one condition**, and the room says who could apply it and by when.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole report (260 words or more), to the shape in the writer\'s box: what you did and did not assess, the method, the verdicts with their conditions, the one the method settled against you, what the reader can do without you, what nobody could test, and the thing outside the question.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a condition under each verdict, a threshold from somebody else\'s practice, and nothing that only the writer could decide had been met.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many conditions could be met by Thursday, and how many thresholds came from an existing rule?** **In this class five and four.** **Then the question the cycle turns on: who found a condition that was already met?** **Three** — **and one verdict was withdrawn in the lesson, which the room should be told is the best outcome of the ninety minutes.** **Then Dr Qabbani\'s fifth paragraph.**'));
out.push(hw('**Write the condition under one verdict of yours**, with its method, its threshold and the name of the person who would apply it. ⚠ **Then do the harder half: go and see whether it is met.** **In this class three of ten conditions were met already and one verdict came back off the file.** **Bring the count and the date you took it.** **16.6 writes the review of work in a field that is not yours**, so bring something you have read that was written for people like you by somebody who is not.'));

// ===================== 16.6 =====================
out.push(pb());
out.push(h2('16.6  The review of work in a field that is not yours'));
out.push(p('**Function:** writing the review of work in a field that is not yours   ·   **Grammar:** the field named, the limit declared, and the recommendation kept   ·   **Pronunciation:** the recommendation after the limit, with no drop in weight'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you have read that was written for people like you by somebody from another field, and whether you could use it.** ⚠ **Could use it, and for what.** **Not whether you liked it.** **In this class six of ten named a handbook or a guidance note** — **and your teacher writes the ten uses on the board, because 16.6 reviews a book against its own claim about its readers.**'));
out.push(board('That a non-specialist can use it, which I am.', 'Whether its figures are right, which I cannot tell.'));
out.push(p('**b**  Which two review the work against the claim it makes? **1** _As a layman I am in no position to judge a technical handbook._  **2** _The book claims to let a non-specialist read a water report; I am one, I read three reports with it, and I could place every figure but one._  **3** _It is well written and clearly a labour of love._  **4** _The handbook says a reader needs no mathematics; chapter 4 asks the reader to compare two rates, and I could not do it without help._  **5** _Experts will no doubt find it useful._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the reviewer\'s competence is?   **A** none, and the review should say so and stop   **B** **being the reader the work claims to serve**, which is a competence and not a borrowed one   **C** general literary judgement'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say she tested, and with what?   **2** What does Mrs Oueidat say a review must still do, after the limit?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.11  Reviewing against the claim', [
  ['Ms Huda', 'Mrs Khoury has reviewed a handbook on water-quality reports. She is a sub-editor.'],
  ['Mrs Khoury', '⚠ **And I cannot tell you whether a single figure in it is correct.** **What I can tell you is the one thing the book itself puts on its first page**: that a reader with no training can use it to read a water report. **I am that reader, and that claim is a claim about me.**'],
  ['Mr Attar', 'So you tested the claim.'],
  ['Mrs Khoury', '⚠ **With three real reports from three governorates, on a Saturday, with the book open.** **I could place every figure but one, and the one is the turbidity line, which the book mentions twice and never defines.** **That is a review and not an opinion.**'],
  ['Mrs Oueidat', 'And the limit still has to be in it.'],
  ['Mrs Khoury', '⚠ **In the second paragraph, in one sentence, and then not again.** _I cannot say whether the handbook\'s figures are right._ **A review that returns to its own limit three times has reviewed the reviewer** — **and the reader of a review wants to know whether to buy the thing.**'],
  ['Mrs Oueidat', '⚠ **Which is the part a declared limit most often destroys.** **A review must still recommend, and recommend to somebody named.** **_For a reporter who has to read one water report a year, yes_** — **and a review that ends in a limit has refused to do the one thing the genre is for.**'],
  ['Dr Qabbani', 'Does being the target reader not make you easy to please?'],
  ['Mrs Khoury', '⚠ **It makes me the only honest witness to the one question and no witness at all to the others.** **I cannot say the chemistry is sound.** **I can say that chapter 4 asks me to compare two rates and tells me on page 3 that I shall need no mathematics** — **and that is a contradiction inside the book, which anybody can see and only its reader will find.**'],
  ['Mrs Rizk', 'That is the strongest kind of finding in this cycle.'],
  ['Mr Zahreddine', '⚠ **And it is available to an outsider and to nobody else.** **I have read six handbooks in my own field and I did not notice that one of them assumed a term it never defines** — **because I knew the term, so the gap was invisible to me.** **The reader who does not know it is the only instrument that detects it.**'],
  ['Mr Tayara', 'How do you keep it from becoming a complaint?'],
  ['Mrs Oueidat', '⚠ **By counting and by naming the page.** _The book mentions turbidity twice and defines it nowhere; the index has no entry for it._ **A count and a page number are a finding** — **and _I found it confusing_ is a report on the reviewer, which is the fault of nine reviews in ten.**'],
  ['Mrs Tarabishi', 'And the things you liked?'],
  ['Mrs Khoury', '⚠ **They go in, with the same discipline.** **The best thing in the book is a two-page table that lets you find which authority publishes which figure** — **and I used it three times on the Saturday and once at work on the Monday, which is why I know it is the best thing in the book.**'],
  ['Mrs Ajouz', 'May you review something that is not for you at all?'],
  ['Mrs Khoury', '⚠ **You may say so and decline, and that is the honest review.** **A handbook for public-health engineers reviewed by a sub-editor is a review of nothing** — **and the test is on the book\'s own first page, which almost always names its reader.**'],
  ['Mr Shihabi', 'And if the book names no reader?'],
  ['Mrs Oueidat', '⚠ **Then that is the review, and it is a short one.** **A handbook that does not say who it is for cannot be tested by anybody** — **and a reviewer who supplies the missing reader has invented the standard and then marked the work against it, which is the worst thing in this unit.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is the turbidity line.** **I wrote to the author about it and he replied that it is defined in his first book** — **which is true, and is the most complete demonstration I have ever been given that a specialist cannot see the hole in his own page.**'],
]));
out.push(sp());
out.push(box('Language box – reviewing from outside the field', [
  '**Your competence is being the reader the work claims to serve.** ⚠ **The claim is on the book\'s first page and it is a claim about you.** **_A reader with no training can use it to read a water report_** — **and testing that is a review, where an opinion about the chemistry would be a performance.**',
  '**Test the claim with real material and count.** ⚠ _Three reports from three governorates, with the book open; I could place every figure but one._ **A test with a number in it survives the author\'s reply** — **and a judgement without one does not.**',
  '**Declare the limit once, in the second paragraph, and never again.** ⚠ _I cannot say whether the handbook\'s figures are right._ **A review that returns to its own limit three times has reviewed the reviewer** — **and the reader of a review wants to know whether to buy the thing.**',
  '**Recommend, and recommend to somebody named.** ⚠ _For a reporter who has to read one water report a year, yes._ **A review that ends in a limit has refused to do the one thing the genre exists for** — **and the limit is what makes the recommendation worth reading, not a substitute for it.**',
  '**The finding only an outsider can make is the undefined term.** ⚠ **A specialist cannot see the hole in their own page, because they know the word.** **_The book mentions turbidity twice, defines it nowhere, and the index has no entry for it_** — **a count and a page, which is a finding, where _I found it confusing_ is a report on the reviewer.**',
  '**And where no reader is named, say so and stop.** ⚠ **A work that does not say who it is for cannot be tested by anybody** — **and a reviewer who supplies the missing reader has invented the standard and then marked the work against it.**',
  '**Pronunciation.** 🔊 **Track 16.12** **Read the limit and the recommendation as one movement, with no drop in weight on the recommendation.** ⚠ **A drop makes the recommendation an afterthought** — **and a reader who hears it as an afterthought has been given a review with no verdict in it, which is where this genre fails most often.**',
  '**Practise:** Test the claim and then recommend. **1** a handbook for non-specialists  **2** a term it never defines  **3** a chapter that breaks its own promise  **4** the best thing in it, with the times you used it  **5** a work that names no reader',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B says **how to test it**, with real material and a count, and then **recommends, to somebody named.** ⚠ **Two rows on each card are opinions about the field and not tests of the claim** — **and there B says so and finds the claim.** Change cards.'));
out.push(table(['Card A – the work\'s claim about its reader', 'Card B – the work\'s claim about its reader'], [
  ['_A reader with no training can read a water report._', '_No mathematics is needed beyond addition._'],
  ['_⚠ The chemistry in chapter 2 is out of date._', '_⚠ The acoustic section is thin for a professional._'],
  ['_A head teacher can appraise a science lesson with it._', '_A clerk can register a file without the regulation._'],
  ['_⚠ Specialists will find the later chapters useful._', '_⚠ It is clearly a labour of many years._'],
  ['_This guide assumes no legal training._', '_(no reader is named anywhere in the book)_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the test, the count, and the named reader in the recommendation. ⚠ **Rows 2 and 4 on both cards are opinions about the field**, and the reviewer has no standing for any of the four. **Row 5 on Card B is the one to spend time on**: no reader is named, **so the review is three lines long and says that the work cannot be tested by anybody, which the room will refuse to accept as a review.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the work you brought** and find **its claim about its reader**, on its first page or in its introduction. ⚠ **Then say how you would test it, with what material, and what you would count.** **In this class two students found that their work names no reader at all** — **and both reviews became three lines, which is the correct length.**'));
out.push(p('**b**  Swap. Your partner reads **your test** and asks whether somebody else could run it. ⚠ **Then the harder question: what is the undefined term?** — **and in this class seven of ten found one, and five of the seven were terms the writer of the work would have called obvious.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury has reviewed a handbook on water-quality reports and she is a sub-editor, and she cannot tell anybody whether a single figure in it is correct. What she can tell them is the one thing the book itself puts on its first page: that a reader with no training can use it to read a water report, and that claim is a claim about her. Mr Attar said so she tested the claim, and with three real reports from three governorates, on a Saturday, with the book open, and she could place every figure but one, and the one is the turbidity line, which the book mentions twice and never defines. Mrs Oueidat said the limit still has to be in it, and in the second paragraph, in one sentence, and then not again, because a review that returns to its own limit three times has reviewed the reviewer. And Mrs Oueidat said that is the part a declared limit most often destroys, because a review must still recommend, and recommend to somebody named: for a reporter who has to read one water report a year, yes. Dr Qabbani asked whether being the target reader does not make her easy to please, and it makes her the only honest witness to the one question and no witness at all to the others: she cannot say the chemistry is sound, and she can say that chapter 4 asks her to compare two rates after telling her on page 3 that she will need no mathematics. Mrs Rizk said that is the strongest kind of finding in the cycle, and Mr Zahreddine said it is available to an outsider and to nobody else, because he has read six handbooks in his own field and did not notice that one of them assumed a term it never defines, since he knew the term and the gap was invisible to him. Mr Tayara asked how you keep it from becoming a complaint, and Mrs Oueidat said by counting and by naming the page, because a count and a page number are a finding and I found it confusing is a report on the reviewer. Mrs Tarabishi asked about the things she liked, and they go in with the same discipline: the best thing in the book is a two-page table, and she used it three times on the Saturday and once at work on the Monday. Mrs Ajouz asked whether you may review something that is not for you at all, and you may say so and decline, and that is the honest review. Mr Shihabi asked what happens if the book names no reader, and then that is the review and it is a short one. And Mrs Khoury said the thing she will take away is the turbidity line: she wrote to the author and he replied that it is defined in his first book, which is true, and is the most complete demonstration she has had that a specialist cannot see the hole in his own page._'));
out.push(p('**Listener task:** write the claim, the test, the count, and the named reader in the recommendation.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the review Mrs Khoury wrote for the paper\'s staff bulletin. Answer the questions.'));
out.push(model([
  '**READING A WATER REPORT** · _a handbook for the general reader_ · _reviewed by D. Khoury, sub-editor_ · **18 May**',
  '**The claim, which is the book\'s own.** **The first page says that a reader with no training in chemistry or engineering can use the book to read a water-quality report.** ⚠ **That is a claim about me, and I am the only kind of person who can test it.**',
  '**What I cannot tell you.** **Whether the figures and the chemistry are right.** ⚠ **I have not the training to say and I shall not mention it again.**',
  '**The test.** **Three reports, from three governorates, on a Saturday, with the book open beside them.** **I could place every figure but one.** **The one is the turbidity line, which the book mentions twice and defines nowhere, and for which the index has no entry.**',
  '**Where the book breaks its own promise.** **Page 3 tells the reader that no mathematics beyond addition is needed.** ⚠ **Chapter 4 asks the reader to compare two rates expressed on different bases, and I could not do it without asking an engineer** — **and a promise broken in the reader\'s own chapter is a worse fault than a difficult passage, because it was made in writing.**',
  '**The best thing in it, and the reason I know.** **A two-page table of which authority publishes which figure.** ⚠ **I used it three times on the Saturday and once at work on the Monday** — **and I would have paid for the two pages on their own.**',
  '**What a specialist would not have found.** **The turbidity line.** **I wrote to the author, who replied that the term is defined in his earlier book.** ⚠ **He is right, and the reply is the whole case for reviews of this kind: a writer who knows a word cannot see the hole where it is not defined, and only the reader it was written for can.**',
  '**One thing I did not test.** **The three worked examples in chapter 6, because none of the three reports I had was in the format the examples use.** ⚠ **So the chapter may be the best in the book and I cannot say** — **and a reviewer who reports on a chapter they could not use has stopped testing and started summarising.**',
  '**The recommendation.** ⚠ **For a reporter who has to read one water report a year, yes, and for the table alone.** **For a desk that handles them weekly, buy the author\'s earlier book first and this one second.** **For a public-health engineer, no: it is not written for you and does not claim to be.**',
  '**And one thing that is not the book\'s fault.** **The reports themselves are published in three different formats by three authorities, and the book has to teach all three.** **It says so on page 2 and then proceeds as if there were one.** **I mention it because the next edition could carry three worked examples instead of one** — **and that is a request and not a complaint.**',
]));
out.push(item('1', 'What does she say the book\'s own claim is, and why can she test it?'));
out.push(item('2', 'What did the author reply about the turbidity line, and what does she conclude from it?'));
out.push(item('3', 'Who does she recommend the book to, and who does she advise against it?'));
out.push(writers([
  'A review of work in a field that is not yours: **the work\'s claim about its reader, quoted** → **what you cannot tell the reader, once** → **the test, with real material and a count** → **where the work breaks its own promise** → **the best thing in it, with the times you used it** → **the recommendation, to named kinds of reader** → **and one thing that is not the work\'s fault.**',
  '⚠ **Quote the claim from the work\'s own first page.** **A review that supplies its own standard has invented the test and then marked the work against it** — **and the claim is almost always printed, because a work for non-specialists has to say so to be bought.**',
  '**Declare the limit once and keep the promise.** ⚠ _I have not the training to say and I shall not mention it again._ **And then do not** — **because a review that keeps returning to its own limits has made the reviewer the subject.**',
  '**Prove the best part by use, not by praise.** ⚠ _I used it three times on the Saturday and once at work on the Monday._ **A count of uses is the only kind of praise an outsider can give that an author cannot discount** — **and _I would have paid for the two pages on their own_ is a price and therefore a measurement.**',
  '⚠ And **recommend to named kinds of reader, and name the one you would advise against.** _For a public-health engineer, no: it is not written for you and does not claim to be._ **Three named readers and three answers.** **A review with one verdict for everybody has not used its only advantage** — **knowing exactly which reader it is.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the claim, the limit, the test and the recommendation (120 words or more).'));
out.push(p('**______________** · _______________ · _reviewed by _______________ · **______________**   **The claim, which is the work\'s own.** **______________.** ⚠ **That is a claim about me.**   **What I cannot tell you.** **______________.** ⚠ **I shall not mention it again.**   **The test.** **______________.** **______________.**   **The recommendation.** ⚠ **For ______________, ______________.** **For ______________, ______________.** **For ______________, ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The claim quoted from the work itself',
  'The limit declared once and not repeated',
  'A test with real material and a count',
  'Three named kinds of reader in the recommendation',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their recommendation**, and the room says whether a named reader could act on it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole review (260 words or more), to the shape in the writer\'s box: the claim, the limit once, the test with its count, the broken promise, the best part proved by use, the recommendation to named readers, and the thing that is not the work\'s fault.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the claim quoted, the limit declared once only, and a recommendation to at least two named kinds of reader.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count on the board: how many reviews mentioned the reviewer\'s limit more than once?** **In this class six of ten, and three mentioned it four times.** **Then the undefined term: go round the room and collect the ten, and ask how many the writer of the work would have called obvious.** **Five of seven** — **and then Mrs Khoury\'s letter and the author\'s reply, which is where the cycle ends.**'));
out.push(hw('**Write the review of the work you brought** — **claim, limit once, test with a count, recommendation to named readers.** ⚠ **Then do the harder half: write to the author about the undefined term.** **In this class seven found a term and two wrote, and one had a reply within the week** — **and the reply said the term is defined in an earlier book, which is the finding and not the excuse.** **Bring the letter or the reason you did not send it.** **16.7 mediates between a judge, the judged, and a reader who shares neither field** — **and the judged has written an appeal on the ground you printed.**'));

// ===================== 16.7 =====================
out.push(h2('16.7  Review & Mediate: a judge, the judged, and a reader who shares neither field'));
out.push(p('**Function:** mediating between a judge, the judged, and a reader who shares neither field   ·   **Recycling:** Unit 16   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 8 · Writing Part 2 (the review) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 16 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** This decision may be appealed on the ground of that criterion 3 was decided by one member.  **2** Nobody can say which he meant, because the word said once.  **3** I distrust this criterion, because a letter is what a proposal can always produce it.  **4** The sixth criterion falls outside of what I am able to assess.  **5** If I known the figure, I should have scored it differently.  **6** The other two record that they could not to assess it.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the three accounts and the question.'));
out.push(box(null, [
  '**ONE APPRAISAL, THREE ACCOUNTS** _(form AP/6 of 9 March, appealed 18 March)_',
  '**The judge, Mr Tayara, in item 6.** _"Within the limits of what I am able to assess … whether the demonstration showed what the teacher said it showed, I cannot judge. The physics adviser should assess item 6 and I have asked for it."_',
  '**The judged, Mr Sabbagh, in his appeal of 18 March.** _"Item 6 was assessed by a man who records that he could not assess it. I ask that the appraisal be set aside."_',
  '**The reader, the directorate inspector, in four lines of 12 March.** _"Item 6 has been sent to the physics adviser."_',
  '**The physics adviser, in his note of 2 April, which none of the three has seen.** _"The demonstration showed what he said it showed. The finding in this lesson is in item 2: nine of forty-one questions went to four pupils in the front row."_',
  '⚠ **All four are accurate.** **The appeal is right about its ground and wrong about its remedy, and those are two different answers.**',
  '**And the thing none of the three has noticed.** **The remedy had already happened six days before the appeal was written** — **and nobody told Mr Sabbagh, who spent a fortnight preparing a document asking for something he had already been given.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 16.13  Right about the ground, wrong about the remedy', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **The inspector, and it is three lines.** **The appeal is against a document the inspector holds, the remedy is already in train, and the only person who can tell Mr Sabbagh that is the office that sent item 6 away on the twelfth.**'],
  ['Mr Tayara', 'And what must not be said is that the appeal was unnecessary.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is the most tempting sentence in the cycle.** **He used the ground that Mr Tayara printed, in the words Mr Tayara printed it in** — **and a reply that calls it unnecessary has punished a man for taking the route the judge laid out for him.**'],
  ['Mrs Oueidat', 'Right about the ground and wrong about the remedy.'],
  ['Mr Zahreddine', '⚠ **Which are two answers and the appeal gets both.** **Item 6 was assessed by somebody who recorded that he could not: granted, and already acted on.** **Setting the whole appraisal aside: refused, because the other five items were assessed by a competent judge and nobody has said otherwise** — **and an appeal answered with one word for two questions has answered neither.**'],
  ['Dr Qabbani', 'He spent a fortnight on it.'],
  ['Mrs Oueidat', '⚠ **A fortnight on a document asking for a thing he had been given six days before he started.** **And the fault there is not his and not Mr Tayara\'s: the office acted and told nobody** — **which is the cheapest failure in this unit and the commonest.**'],
  ['Mrs Rizk', 'Should the adviser\'s note go to him?'],
  ['Mrs Khoury', '⚠ **It should, and this is where the room will want to stop and should not.** **The note says the demonstration showed what he said it showed, so item 6 is now in his favour** — **and it also says the finding of the lesson is in item 2, which nobody has mentioned and which is not in his favour at all.**'],
  ['Mr Attar', 'So the good news and the bad news are in one document.'],
  ['Mr Tayara', '⚠ **And it is the item I counted.** **Nine of forty-one questions to four pupils in the front row, and I wrote that I was reporting what I counted and not what I judged** — **and the adviser, who can judge it, says that is the finding of the lesson.**'],
  ['Mrs Khoury', '⚠ **Which is the unit arriving at its own point from the opposite end.** **The judge outside the field supplied a count he could not interpret.** **The specialist interpreted it** — **and neither of them could have produced the finding alone, which is what the division of labour is for and almost nobody writes it down.**'],
  ['Mrs Tarabishi', 'Does Mr Tayara come out of this well?'],
  ['Mrs Oueidat', '⚠ **He comes out of it as the man who wrote the ground of the appeal against himself and then turned out to have supplied the finding.** **Neither was intended** — **and the room should notice that both came from the same habit, which is declaring exactly what he could and could not do.**'],
  ['Mrs Ajouz', 'Is anybody at fault?'],
  ['Mr Zahreddine', '⚠ **The office, for acting and not writing.** **Nobody else, and that is the third time in Book 2.** **The judge declared his limit, the judged used it, the adviser answered the question** — **and a fortnight was spent because a clerk sent a file and did not send a line.**'],
  ['Mr Shihabi', 'And the three lines to the inspector?'],
  ['Mrs Khoury', '⚠ **The ground is granted and already acted on; the remedy is refused and here is why; the adviser\'s note goes to Mr Sabbagh entire.** **Entire is the word that matters** — **a note sent in summary would arrive as the good half, and the man would learn about item 2 from somebody else in a year.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is that he quoted me.** **The sentence in which I said I could not do my job is now the first line of a document asking for my appraisal to be set aside** — **and I would write it again tomorrow, because the alternative was a page nobody could appeal and an item nobody would ever have sent to the adviser.**'],
]));
out.push(sp());
out.push(box('Language box – mediating among three accounts', [
  '**The three moves, and here the three parties are in three different fields.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**What is new: an appeal can be right about its ground and wrong about its remedy.** ⚠ **Two questions, two answers.** _Granted, and already acted on; refused, and here is why._ **An appeal answered with one word for two questions has answered neither** — **and the party will appeal again, correctly, on the half you did not address.**',
  '**What must not be said: that the appeal was unnecessary.** ⚠ **He used the ground the judge printed, in the judge\'s own words.** **A reply that calls it unnecessary has punished a man for taking the route laid out for him** — **and it teaches everybody who hears of it that the printed ground is a trap.**',
  '**The specialist\'s note goes entire and not in summary.** ⚠ **It carries one finding in his favour and one that is not.** **A summary arrives as the good half** — **and the man then learns the other half from somebody else in a year, which is a worse injury than the appraisal.**',
  '**And the division of labour, written down for once.** ⚠ **The judge outside the field supplied a count he could not interpret.** **The specialist interpreted it.** **Neither could have produced the finding alone** — **and this is what a declared limit is for, which is a larger claim than modesty and the whole case for the unit.**',
  '**Nobody is at fault but the office that acted and did not write.** ⚠ **A fortnight was spent because a clerk sent a file and did not send a line.** **It is the cheapest failure in this unit and the commonest** — **and a mediation that goes looking for a villain among the three parties has invented one.**',
  '**Pronunciation.** 🔊 **Track 16.14** **Say _granted, and already acted on_ with no rise at the end and no pause before _and_.** ⚠ **A rise invites the reader to hear a concession and wait for the _but_.** **Flat, it is a report of something that happened on the twelfth** — **and the refusal of the remedy then stands on its own reasons and not on a contrast.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the three accounts from the card. B names **which party is right about the ground and wrong about the remedy**, gives the two answers, and names **what must not be said.** ⚠ **On one of the two cards the appeal is wrong about the ground as well**, and B must find that. Change roles with the other pair.'));
out.push(table(['Pair A – the appraisal and the adviser', 'Pair B – the scheme and the score sheet'], [
  ['_The judge: "whether it showed what he said it showed, I cannot judge."_', '_The scorer: "criterion 4: 3 of 5, and I distrust the criterion."_'],
  ['_The judged: "item 6 was assessed by a man who could not. Set the appraisal aside."_', '_The scheme: "criterion 4 is unfair. Set the ranking aside."_'],
  ['_⚠ The reader: "item 6 has been sent to the physics adviser."_', '_⚠ The reader: "the ranking rests on five criteria, not on criterion 4."_'],
  ['_⚠ Right about the ground; wrong about the remedy._', '_⚠ Wrong about both: the doubt was recorded and the ranking does not turn on it._'],
  ['_⚠ Must not be said: that the appeal was unnecessary._', '_⚠ Must not be said: that the scheme has not read the sheet._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the ground, the remedy, and what must not be said. ⚠ **On Pair B the appeal is wrong about the ground too**, because the doubt was recorded in the box and the ranking rests on five criteria the scheme has not challenged. **The room will still want to concede something** — **and the finding is that the reply concedes the one true thing, which is that criterion 4 is weak, and refuses the remedy, and says both in the same three lines.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the verdict you printed a ground for in 16.4** and write **the appeal the other party would make**, in three sentences, as they would write it. ⚠ **Then separate it: which part is the ground and which part is the remedy?** **In this class seven of ten appeals asked for more than the ground supports** — **and in five of the seven the remedy was _set the whole thing aside_.**'));
out.push(p('**b**  Swap. Your partner writes **the two answers** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, nine times in ten, some form of _this was not necessary_.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said the inspector gets the letter and it is three lines, because the appeal is against a document the inspector holds, the remedy is already in train, and the only person who can tell Mr Sabbagh that is the office that sent item 6 away on the twelfth. Mr Tayara said what must not be said is that the appeal was unnecessary, and that is exactly it and it is the most tempting sentence in the cycle, because he used the ground that Mr Tayara printed, in the words Mr Tayara printed it in, and a reply that calls it unnecessary has punished a man for taking the route the judge laid out for him. Mrs Oueidat said right about the ground and wrong about the remedy, and Mr Zahreddine said those are two answers and the appeal gets both: item 6 was assessed by somebody who recorded that he could not, granted and already acted on, and setting the whole appraisal aside, refused, because the other five items were assessed by a competent judge and nobody has said otherwise. Dr Qabbani said he spent a fortnight on it, and a fortnight on a document asking for a thing he had been given six days before he started, and the fault there is not his and not Mr Tayara\'s: the office acted and told nobody. Mrs Rizk asked whether the adviser\'s note should go to him, and it should, and the note says the demonstration showed what he said it showed, so item 6 is in his favour, and it also says the finding of the lesson is in item 2, which nobody has mentioned and which is not in his favour at all. Mr Attar said so the good news and the bad news are in one document, and Mr Tayara said it is the item he counted: nine of forty-one questions to four pupils in the front row, and he wrote that he was reporting what he counted and not what he judged, and the adviser, who can judge it, says that is the finding of the lesson. Mrs Khoury said that is the unit arriving at its own point from the opposite end, because the judge outside the field supplied a count he could not interpret and the specialist interpreted it, and neither could have produced the finding alone. Mrs Tarabishi asked whether Mr Tayara comes out of this well, and he comes out as the man who wrote the ground of the appeal against himself and then turned out to have supplied the finding, and both came from the same habit. Mrs Ajouz asked whether anybody is at fault, and the office, for acting and not writing, and nobody else. Mr Shihabi asked about the three lines, and the ground is granted and already acted on, the remedy is refused and here is why, and the adviser\'s note goes to Mr Sabbagh entire. And Mr Tayara said the thing he will take away is that he quoted him: the sentence in which he said he could not do his job is now the first line of a document asking for his appraisal to be set aside, and he would write it again tomorrow._'));
out.push(p('**Listener task:** write the two answers and the sentence that must not be written.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 8)', 7));
out.push(p('You are going to read four accounts by people who assess work outside their own field. For questions **1–10**, choose from the people **A–D**. The people may be chosen more than once.'));
out.push(box(null, [
  '**FOUR PEOPLE WHO JUDGE WORK THEY COULD NOT DO**',
  '**A · a newspaper sub-editor**',
  'I pass copy on medicine, engineering and law, and for nine years I wrote the same note at the head of every piece I was doubtful about: _not my field; please check_. Nobody ever acted on it. The note covered the whole article, so it pointed at nothing, and the specialists read it as a manner. What I do now is put one sentence beside the clause I cannot vouch for, in the margin, with a name in it. The other thing I have learnt is that I am the only person on the floor who can find a term the writer has not defined, because I am the only one who does not know it already. A surgeon cannot see the hole where _ejection fraction_ is left unexplained; I can see nothing else. I keep a count for each article of the figures that appear without their denominators, and I send the number with the proof.',
], C.grey, C.navy));
out.push(box(null, [
  '**B · a grants officer**',
  'Six criteria, nine schemes a round, four rounds a year, and I did not write any of the criteria. For two years I expressed my doubt about the fourth by leaving the box empty, which I now know became a zero at the next desk, so the schemes I meant to protect ranked below schemes I thought worse. The doubt had reached nobody. What makes a doubt usable is that it rests on a fact about the criterion rather than on my view of the form, and the strongest fact available to me is one no single round could give: in four rounds, no scheme has ever supplied anything but letters for that criterion. The wording was changed this spring and six of the words are mine, added by a committee I have never met.',
], C.grey, C.navy));
out.push(box(null, [
  '**C · a court translator**',
  'I assess interpretation, and the hardest part of the work is telling my own limits from the record\'s. If an interpreter renders a technical term in two ways, I cannot say which the profession uses, and an engineer can; that is a limit of mine and it has a name attached to it, which makes it comfortable. If a witness says _it_ once and the session is adjourned before the clarification, nobody can say what he meant; that is a limit of the record and it has nobody attached to it at all. I once wrote the second kind in the words of the first, and a case went to an expert for six weeks, and what came back was an opinion about what a witness probably meant, which is now in a file. I spent three days on the next one looking for somebody to send it to before I admitted there was no such person.',
], C.grey, C.navy));
out.push(box(null, [
  '**D · an engineer on tender panels**',
  'We are three, and on anything acoustic I defer to the member who can judge it. For years we deferred silently, which produced decisions that read as unanimous and were not. Now the letter says which criterion was decided by one member of three and prints the ground of appeal in the appellant\'s own words. The same fact arrives either way: found by the submitter it is a scandal, printed by us it is a procedure. Of four decisions written like this, one was appealed, on our sentence, and three were not appealed at all, which I had not expected and still cannot entirely explain. The appeal had one good effect: the acoustic member wrote four pages of reasons that nobody had ever asked him for, so we now know how he judges.',
], C.grey, C.navy));
out.push(box(null, [
  '**Which person mentions**',
  '**1** ______  a doubt that was expressed by leaving something out of a document.',
  '**2** ______  a general statement of their limits that changed nobody\'s behaviour.',
  '**3** ______  decisions that appeared more united than they were.',
  '**4** ______  writing about a limit of the record as though it were a limit of their own competence.',
  '**5** ______  a fact that could only be established by looking at more than one occasion.',
  '**6** ______  a gap in a text that is invisible to the person who wrote it.',
  '**7** ______  finding it comfortable to have somebody to refer a question to.',
  '**8** ______  an absence of objections that they cannot fully account for.',
  '**9** ______  where on the page a statement of limits belongs.',
  '**10** ______  work that was written for the first time because a decision was challenged.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the three lines to the inspector (120 words or more, including the working).'));
out.push(p('**The ground.** ⚠ **______________ is granted, and ______________ on ______________.**   **The remedy.** **______________ is refused, because ______________.**   **The adviser\'s note.** ⚠ **It goes to ______________ entire, because ______________.**   **And the working, which does not go in the letter.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Two answers for two questions',
  'A date under the granted ground',
  'Nothing suggesting the appeal was unnecessary',
  'The specialist\'s note sent entire, and the reason',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the review)', 10));
out.push(box(null, [
  '⚠ **Name the field, declare your limit once, and recommend to at least two named kinds of reader.**',
  'An international magazine is running a series called **_Written for the rest of us_** and has asked readers to review a handbook, guide or manual written for non-specialists in a field that is not their own. **Write your review**, explaining **what the work claims about its readers**, **how far it keeps that claim**, and **who should and should not buy it.** Write **220–260 words**.',
  '**You should include:** the claim in the work\'s own words   ·   one sentence on what you cannot judge   ·   a test you carried out, with a count   ·   the best thing in it, and how you know   ·   and your recommendation.',
  '⚠ **A review that mentions its own limit more than once has made the reviewer the subject.** **One sentence, and then the work.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 16 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  This decision may be appealed on the ground ___ criterion 3 was decided by one member.   a) of   b) for   c) that',
  '2  Nobody can say which he meant, because the word ___ once.   a) said   b) was said   c) has said',
  '3  I distrust this criterion, because a letter is what a proposal can always ___ .   a) produce   b) produce it   c) be produced',
  '4  The sixth criterion falls ___ what I am able to assess.   a) outside of   b) out of   c) outside',
  '5  ___ I known the figure, I should have scored it differently.   a) If   b) Had   c) Were',
  '6  The other two record that they ___ assess it.   a) could not   b) could not to   c) can not',
  '7  An appeal is sent to the clerk ___ twenty-one days.   a) in   b) by   c) within',
  '8  I am reporting what I counted here and not what I ___ .   a) judge   b) judged   c) was judging',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 4 style – multiple matching).** 🔊 **Track 16.15** You will hear five people talking about assessing work outside their own field. **Task One:** for questions **1–5**, choose from the list **A–H** what each speaker says they could **not** assess. **Task Two:** for questions **6–10**, choose from the list **A–H** what each speaker says made their verdict useful. Use each letter once only.'));
out.push(p('**Task One — what the speaker could not assess.**   **A** whether a calculation was correct   **B** whether a term was the one the profession uses   **C** whether the figures in a book were right   **D** whether a demonstration showed what was claimed   **E** whether a translation was faithful   **F** whether a drawing met a standard   **G** whether a criterion was met by anything but a letter   **H** whether a reading from a device was accurate', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(p('**Task Two — what made the verdict useful.**   **A** naming the person who could make the judgement   **B** handing over a test that anybody could run   **C** printing the ground of appeal   **D** quoting the work\'s own claim about its reader   **E** recording a count instead of an opinion   **F** taking a threshold from an existing rule   **G** declining to score at all   **H** saying that nothing could settle the question', { indent: 200, after: 60 }));
out.push(p('**Speaker 1** ______   **Speaker 2** ______   **Speaker 3** ______   **Speaker 4** ______   **Speaker 5** ______', { indent: 200, after: 80 }));
out.push(dlg('Track 16.15  Audio script (read after the check)', [
  ['Speaker 1', 'I am a head teacher and my subject is literature, and twice a year I appraise a science lesson on a form with six criteria. Five of them I can do. The sixth is the laboratory, and I watched a demonstration for eleven minutes and I could not tell you whether it showed what the man said it showed. What I did, for the first time, was to write that inside item 6 and then write the words the physics adviser should assess item 6. Nine previous appraisals had carried a general apology at the top and not one of them was ever acted on. This one was acted on in three days, and the only new thing in it was that I had put a person\'s post in a sentence.'],
  ['Speaker 2', 'I score water schemes against six criteria that somebody else wrote, and the fourth of them asks for evidence of community ownership. What a proposal supplies for that is two letters. I cannot tell whether the criterion is ever met by anything else, because nothing else has ever been supplied. I used to leave the box blank, and a blank becomes a zero at the next desk. So now I score it and I write the ground beside the score, and the ground is a number I am the only person in a position to produce: in four rounds and thirty-six schemes, not one has supplied anything but correspondence. That sentence changed the form, eventually, and nothing I said about the form ever did.'],
  ['Speaker 3', 'I sit on a hospital committee and I am a physician. We had a consent form that had been translated, and I was asked whether it was fit for use. I could not assess the translation; whether it is faithful to the original is a question for a translator and I asked one. What I could do was read it with eleven patients and ask each of them to say, in their own words, what they were agreeing to. Four of eleven could, on the third paragraph. And the useful part of the report is not the four: it is the sentence that says the paragraph is fit for use if seven of eleven can state it, because the committee can now run that test every time it rewrites, and it does not need me.'],
  ['Speaker 4', 'I review handbooks for a magazine, and the one I have just finished is about water-quality reports. I have no idea whether its figures are right and I said so once, in the second paragraph, and then not again. The thing I could do was read its own first page, which says that a reader with no training can use the book to read a report. That is a claim about me. So I took three real reports and tested it, and the review is the test. The only thing that made it worth printing was that the standard was the book\'s own and not mine. People write to tell me I have no business reviewing it, and the answer is that I am the only person it was written for.'],
  ['Speaker 5', 'There are three of us on the panel and I am a structural engineer. The submission that decided last month\'s round decided on the acoustic criterion, and I cannot do an acoustic calculation; I deferred to the member who can. What is new in our letters is that we now print the ground of appeal ourselves, in the appellant\'s own words, with the address and the time limit under it. One of the four decisions written that way was appealed, and they used our sentence as their first line, and the decision was upheld with the acoustic member\'s reasons annexed. Three were not appealed at all. I would not have predicted that and I still cannot entirely explain it.'],
]));
out.push(p('**C  Writing.** Write the three lines to the inspector and the working beneath them (120 words or more): the ground granted with its date, the remedy refused with its reason, the specialist\'s note sent entire, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 16)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put the competence clause inside the one item it limits',
  '☐ name the person or the kind of person who could make the judgement',
  '☐ score a criterion I distrust, and give a fact as the ground of the doubt',
  '☐ tell a limit of my own from a limit of the record, and write each in its own form',
  '☐ print the ground on which my own verdict could be appealed, with an address',
  '☐ write one testable condition under each verdict, with a method and a threshold',
  '☐ review work in a field that is not mine, against the claim it makes about its readers',
  '☐ answer an appeal that is right about its ground and wrong about its remedy',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _fall outside · come within · speak to · defer to · stop short of · take on trust · go beyond · lay claim to · pass judgement on · set store by · draw the line at · hold out as_.',
  '**This unit\'s word-formation set** _(Reading Part 8 in 16.7 draws on this unit\'s lexis)_: _scrutinise → **scrutiny** · appraise → **appraisal** · adjudicate → **adjudication** · impartial → **impartiality** · arbiter → **arbitration** · expert → **expertise** · discipline → **disciplinary** · peripheral → **periphery** · jurisdiction → **jurisdictional**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _talk about_ **→ _item 6 talks about the laboratory and not about the physics_**, which is a document treating of a subject, where at A2 it was people talking about a film · _sit down_ **→ _the panel sat down on the Tuesday_**, which is convening formally, where at A2 it was sitting down on a chair · _get in_ **→ _I got one sentence in about what I could not judge_**, which is managing to include something, where at A2 it was getting in a car.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 16 · Judging Work You Could Not Do Yourself');
