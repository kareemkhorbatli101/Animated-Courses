// Proactive English B2 · Syria Edition · Book 1 · Unit 4 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';
const slip = '**Peer review, B2 band.** Name the criterion, then **copy the line you are marking** — the line itself and not a summary of it — and then say what you found. Three sentences, three criteria, three quoted lines.';

out.push(h1('Unit 4  Speculating at Range'));
out.push(p('_Proactive English · B2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'Last year you had three degrees of certainty: _sure_, _not sure_, and _definitely not_. **This unit gives you nine**, and then asks the harder question underneath them: **which of the things you are about to say do you know, and which have you worked out?**',
  '**4.1** is the nine steps.   **4.2** does the same for the past, and marks the evidence each one rests on.   **4.3** is **B2 Speaking Part 2** — a full minute on two photographs, and what they have in common that neither of them shows.   **4.4** is the thirty-second response to somebody else\'s pair, which is where candidates lose marks without ever being told why.   **4.5** is withdrawing a speculation in public without losing the point.   **4.6** is the page with three columns in it: what I know · what I infer · what I am guessing.   **4.7** explains a photograph to somebody who cannot see it, and then mediates two readings of it.',
  '**Exam practice in 4.7:** B2 First **Reading and Use of English Part 2** (open cloze), **Writing Part 2** (a letter or email) and **Listening Part 4** (multiple choice).',
  '⚠ **Bring two photographs** — on a telephone is fine — of **the same thing at two different times**: a form before and after a change, a room, a shelf, a street, a noticeboard. **4.3 runs on your pairs and not on mine.**',
  '**And bring the paragraph you rewrote in 2.7**, for the person it was about. 4.6 is where most of you will find you have been mixing what you know with what you have worked out.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 4.1 =====================
out.push(pb());
out.push(h2('4.1  Nine steps, not three'));
out.push(p('**Function:** saying how sure you are in nine steps instead of three   ·   **Grammar:** _must · may well · could conceivably · is unlikely to · cannot_   ·   **Pronunciation:** the modal is never stressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing about your work you are **completely** sure of, one you are **fairly** sure of, and one you have **no idea** about. Then your teacher asks the question of the middle one: **how fairly?** There is no good answer, and that is the cycle.'));
out.push(board('I think the sheet is probably wrong.', 'The sheet may well be wrong. · The sheet is unlikely to be right.'));
out.push(p('**b**  Put these in order, from most sure to least. **1** _may well be_  **2** _cannot be_  **3** _must be_  **4** _could conceivably be_  **5** _is unlikely to be_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many steps does Ms Huda put on the board, and what does she say the class has been using instead?   **A** five; the past simple   **B** nine; three — _sure_, _not sure_, _definitely not_ — with everything in the middle done by _I think_ and _maybe_   **C** three; nine'));
out.push(p('**b**  Listen again. **1** What does Mazen say about the word _probably_?   **2** What does Ms Huda say never carries the stress?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.1  Nine, and the one in the middle', [
  ['Ms Huda', 'Last year you had three: sure, not sure, definitely not. Everything between them you did with _I think_ and _maybe_, and you did a great deal with them. Tonight there are **nine**, and I shall write them in order.'],
  ['Omar', 'Nine words for one thing?'],
  ['Ms Huda', 'Nine positions, and they are not the same thing. **Must · will · may well · may · might · could conceivably · is unlikely to · will not · cannot.** Nine. Mr Hariri, where does _probably_ go?'],
  ['Mazen', 'Somewhere near _may well_.'],
  ['Ms Huda', 'Near it, and that is the trouble with it. _Probably_ is a word I would ask you to use less, and not because it is wrong. It is **imprecise in the one place where precision is cheap**: _may well_ and _might_ are two steps apart, and _probably_ sits across both of them, so a reader has to guess which you meant.'],
  ['Mazen', 'I use it about ninety times a month. It is in the fault book.'],
  ['Ms Huda', 'And what does it mean when you write it?'],
  ['Mazen', 'It means I have seen it before and I have not checked. Which is not what it says.'],
  ['Ms Huda', '⚠ **That is the finding of the cycle and it is not about vocabulary.** A hedge of the middle kind usually means _I have a reason and I have not checked it_, and the nine steps let you say which. _It may well be the fan_ — I have a reason. _It might be the fan_ — I am listing possibilities. _It could conceivably be the fan_ — I do not believe it and I am being complete.'],
  ['Hiba', 'So the bottom three are not degrees of doubt.'],
  ['Ms Huda', 'They are degrees of **distance from the claim**. ⚠ _Could conceivably_ is the most useful of the nine and the least used: it is how you put something on the record that you do not believe, which is a thing every one of you has needed and done badly.'],
  ['Nour', 'I would have said _it is possible that_.'],
  ['Ms Huda', 'Which is five words for one, and it puts the hedge in a clause of its own where it can be deleted by anybody. **Keep the hedge inside the verb** and it travels with the claim. That is Unit 2 again: a hedge in a separate clause is an optional person.'],
  ['Adnan', 'And the two at the bottom?'],
  ['Ms Huda', '_Will not_ is a prediction and _cannot_ is a deduction, and they are not interchangeable. _He will not be there_ — I expect his absence. _He cannot be there_ — I know something that rules it out. ⚠ Students use _cannot_ for emphasis, and an examiner hears a claim about evidence.'],
  ['Dima', 'And the stress?'],
  ['Ms Huda', 'Never on the modal. _It may **WELL** be the fan_ · _it is **UNlikely** to be the fan_. The modal carries the meaning and the stress goes to the word beside it — and a stressed modal, _it MAY be the fan_, means something else entirely: it means somebody has just said it is not.'],
]));
out.push(sp());
out.push(box('Language box – the nine steps', [
  '**The nine, in order.** **must** _(deduction: the only thing left)_ · **will** _(confident prediction)_ · **may well** _(I have a reason)_ · **may** _(open)_ · **might** _(one of several)_ · **could conceivably** _(I do not believe it and I am being complete)_ · **is unlikely to** _(a reason against)_ · **will not** _(prediction of absence)_ · **cannot** _(deduction: ruled out)_.',
  '⚠ **_Will not_ and _cannot_ are not interchangeable.** _He will not be there_ predicts an absence; _he cannot be there_ says you know something that rules it out. Students use _cannot_ for emphasis and an examiner hears a claim about evidence.',
  '**_Could conceivably_ is the most useful of the nine and the least used.** It is how you put something on the record that you do not believe — which everybody has needed and most people have done badly, usually by saying it as though they believed it.',
  '**Keep the hedge inside the verb.** _It may well be the fan_ (five words) against _it is possible that it is the fan_ (eight, and the hedge is in a clause of its own, where anybody can delete it). ⚠ That is Unit 2 again: **a hedge in a separate clause is an optional person.**',
  '**And a word about _probably_.** Not wrong — **imprecise where precision is cheap.** It sits across _may well_ and _might_, two steps apart, so the reader has to guess. What it usually means, when a writer examines it, is _I have a reason and I have not checked it_.',
  '**The three that take an infinitive and the six that do not.** _is unlikely **to** be_ · _is certain **to** be_ · _is bound **to** be_ take _to_; the modals do not. ⚠ _It may to be the fan_ is the commonest error in this cycle and it comes from exactly this mixture.',
  '**Two of the nine are about the speaker and not about the event, and students use them for the wrong job.** _I am sure it is the fan_ and _I am certain it is the fan_ report **your state of mind**; _it must be the fan_ reports **the evidence**. ⚠ In writing, the second is worth more and costs less: a reader can argue with a deduction and cannot argue with your confidence, so a page full of _I am sure_ is a page nobody can engage with.',
  '**Pronunciation.** 🔊 **Track 4.2** The modal is **never stressed**: _it may **WELL** be the fan_ · _it is **UNlikely** to be the fan_ · _it **CANNOT** be the fan_ — where even here the stress is on the negative and not on the ability. ⚠ A stressed modal means something else entirely: _it **MAY** be the fan_ implies that somebody has just said it is not, and a listener will hear the contradiction you did not intend.',
  '**Practise:** Say each at three different steps and name the step. **1** the cause of a fault  **2** why somebody has not replied  **3** where a missing form is  **4** what a figure means  **5** whether a date will be met',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a situation from the card. B says what they think, at a named step. A asks **why that step and not the one above it**. B answers, and then says the same thing at the step **two below**. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(situation)_ __________.'],
  ['B', '_(step: __________)_ It __________.'],
  ['A', 'Why that step and not __________?'],
  ['B', 'Because __________. _(two steps below)_ It __________ — and now I am saying __________ instead.'],
]));
out.push(table(['Card A – the situation', 'Card B – the situation'], [
  ['_A fault has come back for the third time._', '_A form has not been returned for a fortnight._'],
  ['_Somebody has not replied for nine days._', '_A figure is forty per cent higher than last month._'],
  ['_A date has been moved twice._', '_Two sites report the same problem in one week._'],
  ['_A consignment arrived warm._', '_A sheet has been signed by somebody who was away._'],
  ['_A machine has stopped at the same hour twice._', '_A supplier has telephoned instead of writing._'],
  ['_A report is missing one page._', '_A name has been crossed out and rewritten._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight steps chosen and the reason given for each. Then the finding: **six or seven of the eight are in the top three steps** — _must_, _will_, _may well_ — and almost nobody uses the bottom four. ⚠ A speaker with three steps sounds either certain or vague, and an examiner marks the range and not the certainty.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the _probably_ you use most often at work and say what it actually means: have you a reason, are you listing possibilities, or are you being complete about something you do not believe? Then say the sentence again at the right step.'));
out.push(p('**b**  Swap. Then each of you move your partner\'s sentence **one step up** and **one step down**, and say what the reader would do differently in each case.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Last year the class had three steps — sure, not sure, definitely not — and did everything in between with "I think" and "maybe". Tonight there are nine, in order: must, will, may well, may, might, could conceivably, is unlikely to, will not, cannot. Omar asked whether nine words for one thing is really necessary, and Ms Huda said they are nine positions and not the same thing. Then she asked Mazen where "probably" goes, and he said somewhere near "may well" — and near it is the trouble with it. Probably is not wrong; it is imprecise in the one place where precision is cheap, because "may well" and "might" are two steps apart and "probably" sits across both, so a reader has to guess which was meant. Mazen said he uses it about ninety times a month and it is in the fault book, and when Ms Huda asked what it means when he writes it, he said: it means I have seen it before and I have not checked — which is not what it says. Which is the finding of the cycle and is not about vocabulary: a hedge of the middle kind usually means "I have a reason and I have not checked it", and the nine steps let you say which. It may well be the fan — I have a reason. It might be the fan — I am listing possibilities. It could conceivably be the fan — I do not believe it and I am being complete. Hiba said so the bottom three are not degrees of doubt, and Ms Huda said they are degrees of distance from the claim, and that "could conceivably" is the most useful of the nine and the least used: it is how you put on the record something you do not believe. Nour said she would have said "it is possible that", and Ms Huda said that is five words for one and it puts the hedge in a clause of its own where anybody can delete it — keep the hedge inside the verb and it travels with the claim, which is Unit 2 again. And at the bottom, "will not" is a prediction and "cannot" is a deduction: he will not be there expects an absence, he cannot be there says you know something that rules it out._'));
out.push(p('**Listener task:** write your most-used _probably_ and the step it should have been.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mazen writes to the distributor about eleven handsets. Answer the questions.'));
out.push(model([
  '**ELEVEN OF FIFTEEN · what I know and how sure I am** · M. Hariri · 16 October',
  'This is a page about one model of handset and about nothing else. I have written the degree of certainty against every sentence on purpose, because the last three letters I sent you said _probably_ nine times and you cannot have known what any of them meant.',
  '**What must be the case.** All eleven of the returned units are from one batch. I have the serial numbers and they run consecutively from 4471-0312 to 4471-0348. **Must** — there is nothing else it can be.',
  '**What will be the case.** The remaining four will come back. **Will** — not a deduction but a prediction, and I shall be wrong about it if the fault is in the handling and not in the batch.',
  '**What may well be the case.** The fault is in the microphone housing and not in the board. **May well** — I have a reason: in nine of the eleven the housing is loose before the fault appears. I have not opened the other two.',
  '**What might be the case.** It is a storage fault from before the batch reached me. **Might** — one possibility among three, and I have no evidence for or against it.',
  '**What could conceivably be the case.** The eleven are not one fault at all but two, and the serial numbers are a coincidence. **Could conceivably** — I do not believe this and I am putting it in writing so that nobody has to be the person who raises it later.',
  '**What is unlikely.** That the counter staff are dropping them. **Unlikely** — I have watched for four weeks, and the two that were dropped did not develop this fault.',
  '**And what cannot be the case.** That the fifteen are from more than one batch. **Cannot** — the serial numbers are consecutive, and I am saying _cannot_ and not _will not_ because this one is settled and not predicted.',
  '**One thing I should say about the three letters before this one.** I counted the hedges in them last week: _probably_ nine times, _possibly_ four, _it may be that_ three. Sixteen hedges in three letters, and not one of them told you which of the nine positions I was in — so you have had sixteen chances to misread me and I have had none to be corrected.',
  '**What I am asking for, and it is one thing.** Somebody to open the two housings I have not opened. That turns the _may well_ into a _must_ or into nothing, and it is forty minutes of one person\'s time.',
]));
out.push(item('1', 'Why has he written the degree of certainty against every sentence?'));
out.push(item('2', 'Why does he put the _could conceivably_ sentence in writing at all?'));
out.push(item('3', 'What is he asking for, and what would it change?'));
out.push(writers([
  'A page with the certainty marked: **say what the page is about and why the steps are named** → **what must be the case, with the evidence** → **what will be** → **what may well be, with the reason** → **what might be** → **what could conceivably be** → **what is unlikely** → **what cannot be** → **and the one thing you are asking for, and which step it would move**.',
  '**Name the step after each claim, in brackets or in bold.** _**Must** — there is nothing else it can be._ A reader who has had nine _probablys_ from you cannot calibrate the tenth, and naming the steps is how you get your own hedges believed again.',
  '⚠ **Put the thing you do not believe in writing.** _I do not believe this and I am putting it in writing so that nobody has to be the person who raises it later._ That is what _could conceivably_ is for, and it is the one step that buys you something nothing else can.',
  '**Separate _cannot_ from _will not_ out loud.** _I am saying cannot and not will not because this one is settled and not predicted._ A reader who knows you make that distinction will trust both words; a reader who does not will discount them equally.',
  '⚠ And end on the request that **moves a step**. _Forty minutes turns the_ may well _into a_ must _or into nothing._ A request that cannot change your own certainty is a request for agreement, and it gets agreement and no action.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with the certainty marked (80 words or more).'));
out.push(p('**______________ · what I know and how sure I am** · ______________ · ______________   This is a page about ______________. I have written the degree of certainty against every sentence because ______________.   **What must be the case.** ______________. **Must** — ______________.   **What will be the case.** ______________. **Will** — not a deduction but ______________.   **What may well be the case.** ______________. **May well** — I have a reason: ______________.   **What might be the case.** ______________.   **What could conceivably be the case.** ______________. I do not believe this and ______________.   **What is unlikely.** ______________.   **And what cannot be the case.** ______________, and I am saying _cannot_ and not _will not_ because ______________.   **What I am asking for.** ______________, which turns ______________ into ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A step named against every claim',
  'A reason attached to the _may well_, and nothing attached to the _might_',
  'One thing put on the record that the writer does not believe',
  'A request that would move a claim from one step to another',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _could conceivably_ sentence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): what it is about and why the steps are named, the seven levels with their evidence, and the request that would move one of them.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a step named against every claim, a reason on the _may well_, one thing on the record you do not believe.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your _could conceivably_ sentence and nothing else.** They are the best sentences in the room and they are all things somebody has been afraid to say. Then the sentence to leave the cycle on, which is Mazen\'s: **it means I have seen it before and I have not checked — which is not what it says.** Ninety times a month, in a book other people read.'));
out.push(hw('Write the page (80+ words). Then count the hedges in one page you sent last month and write down, beside each, which of the nine steps you actually meant.'));

// ===================== 4.2 =====================
out.push(pb());
out.push(h2('4.2  It must have been the fourth night'));
out.push(p('**Function:** speculating about a past event and marking the evidence you are using   ·   **Grammar:** _must have · may have · needn\'t have · cannot have_   ·   **Pronunciation:** the swallowed _have_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing that happened at your work that nobody saw. Then say what you think happened, and then say **what you are going on** — the thing in front of you that made you think it.'));
out.push(board('Somebody must have signed it.', 'It must have been signed on the Thursday — the ink is the Thursday pen.'));
out.push(p('**b**  Which evidence? **1** _It must have been left open._  **2** _They may have been told and forgotten._  **3** _You needn\'t have waited._  **4** _It cannot have been checked._  **5** _He might have been on leave._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Rasha\'s figure turn out to rest on, and what does Ms Huda say _needn\'t have_ means that students always get wrong?   **A** a guess; that it was unnecessary   **B** the five errors on fourth nights; that the thing **was** done and did not need to be   **C** a rumour; that it did not happen'));
out.push(p('**b**  Listen again. **1** What is the difference between _did not need to_ and _needn\'t have_?   **2** What does Ms Huda say you must add to every past speculation?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.3  What are you going on?', [
  ['Ms Huda', 'Same nine steps, moved into the past, and one extra discipline: **every past speculation gets the evidence attached to it.** Not as a courtesy — because the form alone does not say whether you saw something or imagined it. Mrs Barakat sent me two sentences for tonight.'],
  ['Nour', 'She is not here. She is at the hospital.'],
  ['Ms Huda', 'She is, and she sent them anyway, and the second one is the reason this cycle exists. The first: _five of the seven errors must have happened on a fourth night._ What is she going on?'],
  ['Hiba', 'The count. She has a hundred and eighteen shifts and seven errors and she knows the dates.'],
  ['Ms Huda', 'So _must have_ is a deduction from a record, and it is the strongest kind of past claim available. Now the second: _the night staff may have been told about the trial and forgotten._'],
  ['Omar', 'And what is she going on there?'],
  ['Ms Huda', 'Nothing. That is her own sentence — she wrote _I am going on nothing at all; I have simply found it easier to believe than the alternative._'],
  ['Dima', 'Which is honest and a bit frightening.'],
  ['Ms Huda', '⚠ **It is the most useful sentence anybody has sent me this term.** _May have_ with nothing behind it is not a weak claim; it is a **guess wearing the clothes of an inference**, and it is the commonest dishonest sentence in professional writing — including mine. The discipline is one phrase: **what am I going on?**'],
  ['Adnan', 'And if the answer is nothing?'],
  ['Ms Huda', 'Then you say so, and the sentence becomes much stronger. _I may be wrong about this and I am going on nothing but the look of it_ is a sentence nobody can catch you out with. Now the one that is always got wrong. Mr Barghouti: _you needn\'t have waited_. What happened?'],
  ['Adnan', 'He did not wait.'],
  ['Ms Huda', 'He **did** wait. ⚠ **_Needn\'t have_ means the thing was done and did not need to be.** _You did not need to wait_ means it was unnecessary and we do not know whether you waited. Two forms, one difference, and about half of every class has them the wrong way round after a year of using both.'],
  ['Jad', 'So _needn\'t have_ is a reproach.'],
  ['Ms Huda', 'Or an apology, depending on who did the waiting. _I needn\'t have written nine drafts_ — Mr Hariri did write them, and they were not necessary, and that is a sentence about himself.'],
  ['Mazen', 'It is, and I have never been able to say it before tonight.'],
  ['Ms Huda', 'And _cannot have_ is the hardest of the four, because it is a deduction and not a denial. _It cannot have been checked_ means you know something that rules the checking out — a signature, a time, a locked door. ⚠ Students use it where they mean _I do not believe it was checked_, which is _is unlikely to have been_, three steps away.'],
  ['Rim', 'And the pronunciation?'],
  ['Ms Huda', 'The _have_ almost disappears. _It must\'ve been the fourth night_ · _it can\'t\'ve been checked_. A student who says _must HAVE_ with the full vowel sounds as though they are correcting somebody, and in Part 2 of the Speaking paper you will be doing this ten times a minute.'],
]));
out.push(sp());
out.push(box('Language box – the past, and the evidence', [
  '**The four shapes.** _**must have** been_ — a deduction from something you have. _**may / might have** been_ — a possibility. _**needn\'t have** done_ — it **was** done and did not need to be. _**cannot have** been_ — a deduction that rules it out.',
  '⚠ **_Needn\'t have_ against _did not need to_.** _You needn\'t have waited_ — **you waited**, and it was unnecessary. _You did not need to wait_ — it was unnecessary, and we are not told whether you waited. Half of every class has these the wrong way round, and the difference is the whole sentence.',
  '⚠ **_Cannot have_ is a deduction, not a denial.** _It cannot have been checked_ claims you know something that rules it out. Where you mean _I do not believe it was_, the form is **is unlikely to have been** — three steps away on the scale, and an examiner hears the difference.',
  '**And the discipline that makes the whole cycle work: _what am I going on?_** Attach it to every past speculation. _It must have been the fourth night — **the dates are in the ledger**._ _They may have been told and forgotten — **I am going on nothing at all**._',
  '**_May have_ with nothing behind it is a guess wearing the clothes of an inference**, and it is the commonest dishonest sentence in professional writing. The repair is not to delete it but to **say what is behind it, including when the answer is nothing**: _I am going on nothing but the look of it_ is a sentence nobody can catch you out with.',
  '**The continuous and the passive, because both appear in the exam.** _It must have **been being** repaired_ is grammatical and nobody says it; use _they must have been repairing it_. _It cannot have been signed_ is the passive and is extremely common in official writing — and it is where _cannot_ and _will not_ are most often confused.',
  '**Two more shapes for the past, both common in the exam and both usually missed.** _**should have** been done_ — an expectation that was not met, which is a judgement and not a speculation. _**was to have** been done_ — an arrangement that did not happen: _the third measurement was to have been taken on the fourth_. ⚠ Neither is a degree of certainty, and a candidate who puts them on the nine-step scale will use them where _must have_ or _cannot have_ belongs.',
  '**And a point about the evidence label itself.** _Going on_ is the plainest form and there are three others worth having: _on the strength of…_ · _judging by…_ · _which I take from…_ ⚠ Do not vary them inside one page. A reader who sees the same label four times reads down them and sees the shape of what you know; four different labels make them read the prose instead.',
  '**Pronunciation.** 🔊 **Track 4.4** The _have_ is **swallowed**: _it must\'ve been the fourth night_ · _it can\'t\'ve been checked_ · _you needn\'t\'ve waited_. ⚠ A full-vowel _must HAVE_ sounds like a correction of somebody else, and in Speaking Part 2 you will produce these ten times a minute — so the reduction is not optional polish, it is what makes a minute of speculation sound like speech.',
  '**Practise:** Say what happened and attach the evidence. **1** a form signed by somebody who was away  **2** a fault that came back  **3** a letter nobody answered  **4** a figure that changed  **5** a door found open',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a situation from the card. B speculates in one of the four past shapes and attaches **what they are going on**. A then asks for the same thing at a weaker step. B gives it, and says whether the evidence has changed or only the claim. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(situation)_ __________.'],
  ['B', 'It __________ have __________ — I am going on __________.'],
  ['A', 'Say it at a weaker step.'],
  ['B', 'It __________ have __________ — and the evidence is **the same / weaker**, because __________.'],
]));
out.push(table(['Card A – what was found', 'Card B – what was found'], [
  ['_A form signed by somebody who was on leave._', '_A door found open on a Monday morning._'],
  ['_A fault that came back after four days._', '_A figure that doubled in one month._'],
  ['_A letter that was never answered._', '_A sheet with two different pens on it._'],
  ['_A consignment that arrived warm._', '_A box that has been opened and taped again._'],
  ['_A machine stopped at the same hour twice._', '_A name crossed out and rewritten._'],
  ['_A page missing from a report._', '_A date changed after the signature._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight claims and the evidence each is going on. Then the count: in **three or four of the eight the honest answer is _nothing_** — and those are the ones to praise, because a speaker who can say it has stopped presenting guesses as inferences.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing at your work that nobody saw and say what must, may and cannot have happened — three sentences, each with its evidence attached. Say _nothing_ where that is the answer.'));
out.push(p('**b**  Swap. Then each of you find the one claim where your partner has given no evidence and has not said so, and ask the question: **what are you going on?**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Same nine steps moved into the past, with one extra discipline: every past speculation gets the evidence attached to it, because the form alone does not say whether you saw something or imagined it. Mrs Barakat is at the hospital and sent two sentences anyway. The first: five of the seven errors must have happened on a fourth night. Hiba said what she is going on is the count — a hundred and eighteen shifts, seven errors, and she knows the dates — so "must have" is a deduction from a record, which is the strongest past claim available. The second: the night staff may have been told about the trial and forgotten. Omar asked what she is going on there, and the answer is nothing: she wrote that she is going on nothing at all and has simply found it easier to believe than the alternative. Dima said that is honest and a bit frightening, and Ms Huda said it is the most useful sentence anybody has sent her this term — because "may have" with nothing behind it is not a weak claim but a guess wearing the clothes of an inference, and it is the commonest dishonest sentence in professional writing, including hers. The discipline is one phrase: what am I going on? Adnan asked what to do if the answer is nothing, and the answer is to say so, because the sentence then becomes much stronger: "I may be wrong about this and I am going on nothing but the look of it" is a sentence nobody can catch you out with. Then the one that is always got wrong. Asked what happened in "you needn\'t have waited", Adnan said he did not wait — and he did wait. Needn\'t have means the thing was done and did not need to be; did not need to means it was unnecessary and we do not know whether it happened. Jad said so it is a reproach, and Ms Huda said or an apology, depending on who did the waiting — "I needn\'t have written nine drafts" is Mazen about himself, and he said he has never been able to say it before tonight._'));
out.push(p('**Listener task:** write one claim of your own where the honest answer is _nothing_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Rasha sends from the hospital about the seven errors. Answer the questions.'));
out.push(model([
  '**THE SEVEN ERRORS · what I am going on** · R. Barakat · 17 October',
  'This is for the three of you on the night practice group, and it is one page because the minute of 1 June said I would report by October and I am two weeks late. Every sentence below has what I am going on attached to it. Where I am going on nothing, it says so.',
  '**What must have happened.** Five of the seven errors happened on a fourth consecutive night. **Going on:** the ledger. A hundred and eighteen shifts, seven errors, and the dates of all seven are written down. This is a deduction and not an impression, and the only sentence here I would defend in front of anybody.',
  '**What may well have happened.** The fourth night is the one on which the handover is done by somebody who has not been on the ward. **Going on:** the rota for five of the seven dates. I have not checked the other two, and I could in about twenty minutes.',
  '**What might have happened.** The errors are about the two people who are always on together by the fourth night, and not about tiredness. **Going on:** one possibility among three, and no evidence either way.',
  '**What could conceivably have happened.** My own count is wrong, because I compiled it from the ledger in April and I was on the fourth night myself twice that month. **Going on:** nothing but the possibility. I do not believe it and I am writing it down so that nobody else has to be the one who asks.',
  '**What I am going on nothing at all for.** That the night staff were told about the trial and forgot. I have said this twice out loud and I am ashamed of it in writing: **I am going on nothing. I have found it easier to believe than the alternative, which is that nobody told them.**',
  '**And what cannot have happened.** The seven are not spread evenly across the roster. **Going on:** the dates again. Five of seven on one kind of shift out of four is not a distribution anybody can call even, and I say _cannot_ and not _will not_ because this is settled.',
  '**What I needn\'t have done, and it is about the two years and not about the seven errors.** Said the sentence about the night staff out loud, twice, in front of people who could not check it. **I needn\'t have said it at all** — the count was enough to ask for the trial, and the sentence about forgetting took something from two colleagues who were not in the room.',
  '**What I am asking for.** Twenty minutes with the rota for the other two dates. That turns the _may well_ into a _must_ or empties it, and it is the only thing on this page that is cheap.',
]));
out.push(item('1', 'Which sentence is the only one she says she would defend in front of anybody, and why?'));
out.push(item('2', 'What is she going on for the claim about the night staff, and what does she say about having said it twice?'));
out.push(item('3', 'What is she asking for, and what would it change?'));
out.push(writers([
  'A page with the evidence attached: **say who it is for, why now, and that every sentence carries what you are going on** → **what must have happened, with the record** → **what may well have, with the partial evidence and what is missing** → **what might have** → **what could conceivably have** → **what you are going on nothing for, named as such** → **what cannot have** → **and the cheap request that would move a step**.',
  '**Attach the evidence in the same words every time.** _**Going on:** the ledger._ A page that explains its evidence differently each time makes the reader work out the pattern; a page that labels it lets them read down the labels and see the shape of what you know.',
  '⚠ **Name the claim you are going on nothing for, and name it as that.** _I am going on nothing. I have found it easier to believe than the alternative._ Two sentences, and they are worth more than the rest of the page: a reader who finds that admission will believe your _must have_ without checking it.',
  '**Say what is missing from the partial evidence and how long it would take.** _I have not checked the other two, and I could in about twenty minutes._ An unchecked claim with a price on the checking is a request; the same claim without it is an excuse.',
  '⚠ And keep the request to the thing that **moves a step**. _That turns the_ may well _into a_ must _or empties it._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page with the evidence attached (80 words or more).'));
out.push(p('**______________ · what I am going on** · ______________ · ______________   This is for ______________, and every sentence below has what I am going on attached to it.   **What must have happened.** ______________. **Going on:** ______________.   **What may well have happened.** ______________. **Going on:** ______________. I have not checked ______________, and I could in ______________.   **What might have happened.** ______________. **Going on:** ______________.   **What could conceivably have happened.** ______________. I do not believe it and ______________.   **What I am going on nothing at all for.** ______________. **I am going on nothing.** ______________.   **And what cannot have happened.** ______________, and I am saying _cannot_ because ______________.   **What I am asking for.** ______________, which turns ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Evidence attached in the same words after every claim',
  'One claim named as going on nothing, and named as that',
  'What is missing from the partial evidence, with a time against it',
  'A request that would move one claim from one step to another',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the claim they are going on nothing for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): who it is for, the claims at their steps with the evidence labelled, the one you are going on nothing for, and the request that would move a step.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: evidence labelled after every claim, one claim named as going on nothing, the request that moves a step.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the claim you are going on nothing for.** Nobody enjoys this and everybody has one. Then the sentence to leave the cycle on, which is Rasha\'s and is the hardest in the unit: **I have found it easier to believe than the alternative** — and the alternative was that nobody had told them.'));
out.push(hw('Write the page (80+ words). Then take one claim you have made twice out loud and write down what you are going on. If the answer is nothing, write **nothing** and the number of times you have said it.'));

// ===================== 4.3 =====================
out.push(pb());
out.push(h2('4.3  A full minute, and what neither picture shows'));
out.push(p('**Function:** describing two things and saying what they have in common that neither shows   ·   **Grammar:** **B2 Speaking Part 2** — the pair of photographs   ·   **Pronunciation:** the minute, and where the breath goes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Put your two photographs on the desk. Say **one sentence** about each — not a description, a difference. Then stop talking and let your partner time you: you have spoken for about eight seconds, and the exam wants sixty.'));
out.push(board('This is a photo of a form. This is another form.', 'Both forms are signed, and neither of them shows who signed first.'));
out.push(p('**b**  Which belongs in a Part 2 answer? **1** _In the first picture I can see a form._  **2** _Both of them have been filled in by somebody in a hurry._  **3** _The first one is older than the second._  **4** _Neither of them tells you who was there._  **5** _I like the second one better._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the examiner is **not** interested in, and what is the shape of the minute?   **A** the pictures; describe, compare, speculate, answer   **B** your opinion; name both in one sentence, the one difference that matters, what neither shows, and then the question   **C** the grammar; thirty seconds each'));
out.push(p('**b**  Listen again. **1** How long does Lubna speak on her first attempt, and where does she stop?   **2** What does Ms Huda say about the sentence _I can see_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.5  Sixty seconds, and the first twelve are the problem', [
  ['Ms Huda', 'Two photographs, one question, **one minute**, and nobody interrupts you. Miss Sweidan, yours are of the same scaffold in July and in October. Go.'],
  ['Lubna', '_In the first photograph I can see a scaffold on a building. In the second photograph I can see the same scaffold but there is a sheet over it. In the first one the weather is better…_'],
  ['Ms Huda', 'Stop. How long?'],
  ['Jad', 'Nineteen seconds.'],
  ['Ms Huda', 'Nineteen seconds of a minute, and she has forty-one left and nothing to say, because **she has described them**. ⚠ Describing two photographs takes about twenty seconds and then it is finished. The examiner is not interested in what is in them — they can see them. **The minute is spent on what is not in them.**'],
  ['Omar', 'So what do you do with the first twelve seconds?'],
  ['Ms Huda', 'You name both in **one sentence** and you move. _Both of these are the same scaffold, four months apart._ Eleven words, and you are into the minute. ⚠ The phrase _in the first photograph I can see_ costs you eight seconds and tells the examiner nothing except that you can see.'],
  ['Lubna', 'And then?'],
  ['Ms Huda', 'Then the shape, and it is four moves. **One: both of them, in one sentence.** **Two: the one difference that matters** — not three differences, one. **Three: what neither of them shows**, which is where the speculation lives and where the marks are. **Four: the question you were asked**, answered in the last fifteen seconds.'],
  ['Dima', 'What neither of them shows is a strange thing to be asked for.'],
  ['Ms Huda', 'It is the whole of Part 2, and it is why your own photographs are better than mine. Miss Sweidan — the two scaffolds. What does neither of them show?'],
  ['Lubna', '_Neither of them shows the joint. The sheet went up in August and the joint is behind it in both, and in July it was behind the boards. So in four months of photographs there is no picture of the thing the whole argument is about — and it must have been measurable on about three days in July, and nobody went up._'],
  ['Ms Huda', 'Thirty-one seconds, and every one of the nine steps is available in it. **That is Part 2.** And notice what happened: she stopped describing and started speculating, and the English went up two levels in one sentence.'],
  ['Hiba', 'Because she had something to say.'],
  ['Ms Huda', '⚠ **Because the task changed from _what is here_ to _what is missing_, and only the second one needs the grammar of this unit.** A candidate who describes for sixty seconds produces forty sentences of _there is_ and _I can see_, and the examiner marks the range they heard.'],
  ['Adnan', 'And the breath?'],
  ['Ms Huda', 'Four breaths in a minute, one at each move, and nowhere else. A candidate who breathes every eight seconds sounds as though they are reading a list. ⚠ Practise the **joins**: _both of these are the same scaffold, four months apart_ ‖ _and the difference that matters is_ ‖ _but neither of them shows_ ‖ _which is why I would say_.'],
  ['Rim', 'Sixty seconds is a long time.'],
  ['Ms Huda', 'It is eleven seconds longer than anybody in this room has ever spoken without being interrupted, and that is the only thing about Part 2 that cannot be fixed on the day. **We shall time it in every cycle from here to the test.**'],
]));
out.push(sp());
out.push(box('Language box – Speaking Part 2, the four moves', [
  '**One minute, nobody interrupts, and the first twelve seconds decide it.** **Move 1 — both, in one sentence** _(8–10 sec)_: _Both of these are the same scaffold, four months apart._ **Move 2 — the one difference that matters** _(12–15 sec)_: not three differences, one. **Move 3 — what neither of them shows** _(20–25 sec)_: where the speculation lives and where the marks are. **Move 4 — the question you were asked** _(12–15 sec)_.',
  '⚠ **_In the first photograph I can see…_ costs eight seconds and earns nothing.** The examiner can see them. Describing two photographs takes about twenty seconds and is then finished — and a candidate who describes for sixty produces forty sentences of _there is_ and _I can see_, which is the range the examiner marks.',
  '**Move 3 is the whole of Part 2.** _Neither of them shows the joint._ · _Neither of them tells you who was there._ · _What you cannot see in either is how long it had been like that._ ⚠ The task changes from **what is here** to **what is missing** — and only the second needs the grammar of this unit.',
  '**The language of the comparison, and it is four phrases.** _Both of these…_ · _Whereas the first…, the second…_ · _The difference that matters is…_ · _Neither of them shows…_ ⚠ Four phrases, and the fifth — _on the other hand_ — is worth avoiding: it takes a second and a half and signals a contrast you have usually already made.',
  '**Four breaths in a minute, one at each move.** Practise the **joins** and not the sentences: _…four months apart_ ‖ _and the difference that matters is…_ ‖ _but neither of them shows…_ ‖ _which is why I would say…_',
  '**And the figure nobody is told.** Sixty seconds is about **eleven seconds longer** than anybody in a B2 class has ever spoken without being interrupted. That is the one thing about Part 2 that cannot be fixed on the day, and it is why it is timed in every cycle from here to the test.',
  '**What to do when the two photographs are of completely unrelated things, which happens in the exam.** The question is never _what is the connection_ — it is always about **people** doing something, and the answer is in move three: what neither picture shows about **why** anybody is doing it. ⚠ Candidates lose Part 2 by hunting for a link between the objects; there usually is not one, and there does not need to be.',
  '**And the one phrase to have ready for a picture you cannot identify.** _I am not sure what the second one is, but whatever it is, somebody has…_ ⚠ Admitting it in six words costs nothing and is far better than guessing wrongly for twenty seconds, because an examiner is marking the speculation and not the identification.',
  '**Pronunciation.** 🔊 **Track 4.6** A full minute, with the four breaths marked, and the joins said at speed: _both of these are the same scaffold ‖ four months apart_. ⚠ Listen for what the speaker does **not** do — no pause after _and_, no restart, and no _er_ at a move boundary, because the join is a prepared phrase and not a decision.',
  '**Practise:** With your own pair, time a full minute. **1** both in one sentence  **2** the one difference  **3** what neither shows  **4** the question answered',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs **with a watch**. A has their own two photographs and the question from the card. A speaks for **one minute**; B says nothing and times it, marking where each of the four moves began. Swap.'));
out.push(dlg(null, [
  ['A', '_(0:00)_ Both of these are __________. _(0:10)_ The difference that matters is __________.'],
  ['A', '_(0:25)_ But neither of them shows __________, which must have __________.'],
  ['A', '_(0:45)_ So to answer the question, I would say __________, because __________.'],
  ['B', '_(timing)_ You reached move three at __________ and you stopped at __________.'],
]));
out.push(table(['Card A – the question with your pair', 'Card B – the question with your pair'], [
  ['_Why might the people have made these changes?_', '_What might be difficult about each of these?_'],
  ['_How might the people be feeling in each case?_', '_Why might each of these have been recorded?_'],
  ['_What might have happened between the two?_', '_Who might each of these be for?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the four move-times for each speaker. Then the finding, and it is the same in every class: **the speakers who ran out were the ones who reached move three after forty seconds**, and the speakers who filled the minute reached it before twenty-five. ⚠ Nobody runs out of things to say in Part 2. They run out of **minute**, having spent it on description.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  One minute on your own pair, timed, with the four moves. Then say which move you spent longest on, and whether it was the one you meant to.'));
out.push(p('**b**  Swap. Then each of you say what your partner\'s **move three** was, in your own words, and whether they used any of the nine steps in it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Two photographs, one question, one minute, and nobody interrupts. Lubna\'s are of the same scaffold in July and October, and her first attempt ran: in the first photograph I can see a scaffold on a building, in the second photograph I can see the same scaffold but there is a sheet over it, in the first one the weather is better. Ms Huda stopped her, and Jad said nineteen seconds — nineteen seconds of a minute, with forty-one left and nothing to say, because she had described them. Describing two photographs takes about twenty seconds and is then finished, and the examiner is not interested in what is in them because they can see them: the minute is spent on what is not in them. Omar asked what to do with the first twelve seconds, and the answer is to name both in one sentence and move — both of these are the same scaffold, four months apart. Eleven words. Then the shape, which is four moves: both of them in one sentence; the one difference that matters, not three; what neither of them shows, which is where the speculation lives and where the marks are; and the question you were asked, answered in the last fifteen seconds. Dima said what neither of them shows is a strange thing to be asked for, and Ms Huda said it is the whole of Part 2. So Lubna tried again: neither of them shows the joint — the sheet went up in August and the joint is behind it in both, and in July it was behind the boards, so in four months of photographs there is no picture of the thing the whole argument is about, and it must have been measurable on about three days in July, and nobody went up. Thirty-one seconds, with every one of the nine steps available in it. And what happened is that she stopped describing and started speculating, and the English went up two levels in one sentence — because the task changed from what is here to what is missing, and only the second needs the grammar of this unit. Hiba said it was because she had something to say, and Ms Huda said no — a candidate who describes for sixty seconds produces forty sentences of "there is" and "I can see", and the examiner marks the range they heard. And Rim said sixty seconds is a long time, which it is: about eleven seconds longer than anybody in the room has ever spoken without being interrupted, and the one thing about Part 2 that cannot be fixed on the day._'));
out.push(p('**Listener task:** write your own move three in one sentence, and the step you used in it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Lubna writes about the four months of photographs. Answer the questions.'));
out.push(model([
  '**FOUR MONTHS OF PHOTOGRAPHS AND NO PICTURE OF THE JOINT** · L. Sweidan · 18 October',
  'This is for Mr Rifai and for the practice, and it is about something I noticed while being timed in a classroom, which is not where I expected to notice it.',
  '**Both.** There are fourteen photographs of 14 Sharia al-Jalaa taken between July and October. All fourteen are of the same elevation and all fourteen are mine.',
  '**The difference that matters.** The sheet. It went up in the second week of August, and in the seven photographs after it the whole first floor is behind green mesh.',
  '**And what none of the fourteen shows.** The joint. In the seven before August it is behind the boards, and in the seven after it is behind the sheet. **Fourteen photographs of the thing the whole disagreement is about, and not one of them shows it.**',
  '**What must have been the case.** The joint was accessible and photographable in July. **Going on:** the boards were taken down on the ninth and the sheet went up on the eleventh of August, so there were two days, and the eighth, ninth and tenth are in the site diary as dry.',
  '**What I needn\'t have done.** Taken the other thirteen. **I needn\'t have taken fourteen photographs of a sheet**, and I did, and the reason I did is that I was photographing the scaffold because the scaffold is what I was arguing about — and the scaffold was never the question.',
  '**What I cannot now do.** Photograph it. **Going on:** the render goes back on the fourth of November and the sheet comes down after it.',
  '**What I am asking for, and it is small.** Somebody to go up with a camera before the fourth. Not a measurement — a photograph. If the third measurement never happens, a photograph of the bearing is the only thing that will still exist in five years, and nobody has to agree with me about it for it to be useful.',
  '**What may well be the case, and it is the reason I am writing rather than waiting.** That the sheet will not come down before the render goes back, because the two are done by the same men on the same day. **Going on:** the method statement, which has them in that order, and three conversations in which nobody has contradicted it.',
  '**And the thing about the classroom.** I was asked what neither of two photographs showed. I had fourteen and the answer was the same for all of them, and I had not asked the question in four months because **nobody asks what a photograph does not contain.**',
]));
out.push(item('1', 'What do none of the fourteen photographs show, and why not?'));
out.push(item('2', 'What does she say she needn\'t have done, and why did she do it?'));
out.push(item('3', 'What is she asking for, and why does she say nobody has to agree with her about it?'));
out.push(writers([
  'A page built on the four Part 2 moves: **both, in one sentence, with the count** → **the one difference that matters** → **what none of them shows** → **what must have been the case, with the evidence** → **what you needn\'t have done** → **what you cannot now do** → **the small request** → **and where you noticed it**.',
  '**Open with the count and the ownership.** _There are fourteen photographs … and all fourteen are mine._ The count makes the finding countable and the ownership stops the page being a complaint about somebody else.',
  '⚠ **The finding is an absence, so it has to be said as one.** _Fourteen photographs of the thing the whole disagreement is about, and not one of them shows it._ An absence stated as a shortage — _we do not have enough photographs_ — is not the same claim and will be answered with more photographs.',
  '**Use _needn\'t have_ about yourself, correctly.** _I needn\'t have taken fourteen photographs of a sheet, and I did._ The form says it was done and did not need to be, and it is the one shape in this unit that can only be used honestly.',
  '⚠ And make the request **cheap and agreement-free**. _Nobody has to agree with me about it for it to be useful._ A request that depends on your being right is refused by anybody who has not decided; a photograph survives either verdict.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page built on the four moves (80 words or more).'));
out.push(p('**______________** · ______________ · ______________   **Both.** There are ______ ______________ taken between ______________ and ______________. All ______ are ______________.   **The difference that matters.** ______________.   **And what none of them shows.** ______________. ______ ______________ of the thing ______________, and not one of them shows it.   **What must have been the case.** ______________. **Going on:** ______________.   **What I needn\'t have done.** ______________, and I did, and the reason is ______________.   **What I cannot now do.** ______________. **Going on:** ______________.   **What I am asking for, and it is small.** ______________. Nobody has to agree with me about it for ______________.   **And where I noticed it.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both named in one sentence, with a count',
  'One difference, not three',
  'The finding stated as an **absence** and not as a shortage',
  '_Needn\'t have_ used about the writer, and used correctly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _what none of them shows_ sentence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): both with the count, the one difference, the absence, what must have been the case with its evidence, what you needn\'t have done, what you cannot now do, the small request, and where you noticed it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: both named in one sentence with a count, the finding stated as an absence, _needn\'t have_ used correctly about yourself.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your absence sentence, and let the room say what a reader would do about it.** Half the absences will be answered with _take more photographs_, which is the wrong action and tells you the sentence was heard as a shortage. Then the sentence to leave the cycle on, which is Lubna\'s: **nobody asks what a photograph does not contain** — and she had fourteen of them and four months.'));
out.push(hw('Write the page (80+ words). Then speak for **one timed minute** on your pair, to somebody at home, and write down the time at which you reached move three.'));

// ===================== 4.4 =====================
out.push(pb());
out.push(h2('4.4  Thirty seconds, and do not summarise'));
out.push(p('**Function:** responding in thirty seconds to somebody else\'s pair without summarising it   ·   **Grammar:** the one-sentence answer with a reason attached   ·   **Pronunciation:** starting in the first second'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your partner speaks for one minute on their pair. You then have **thirty seconds** on a question about the same pair. Do it once, untimed and unprepared, and then your partner tells you how much of your thirty seconds you spent repeating what they had just said.'));
out.push(board('Well, as my partner said, the two forms are different…', 'For me it would be the second one, because nobody has to be asked for it.'));
out.push(p('**b**  Which belongs in a thirty-second answer? **1** _As my partner said, both of them are forms._  **2** _For me it would be the second, because it can be checked afterwards._  **3** _I agree with everything my partner said._  **4** _I would say the opposite, and the reason is the handover._  **5** _That is a difficult question._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How much of the thirty seconds does Jad spend on his first attempt before saying anything new, and what does Ms Huda say the answer has to contain?   **A** two seconds; a long explanation   **B** nineteen seconds; an answer in the first sentence and a reason attached to it   **C** none; an opinion'));
out.push(p('**b**  Listen again. **1** What does Ms Huda say _I agree with my partner_ is marked as?   **2** Why does she say thirty seconds is harder than sixty?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.7  The first second is yours', [
  ['Ms Huda', 'Mr Attar has had a minute on his pair. Mr Darwish, thirty seconds on the same pair, different question: which of the two would be more difficult to keep up? Go.'],
  ['Omar', '_Well, as Jad said, the first one is the old forum page and the second one is the new one with the rules on it, and he said the difference is the clause about sources, and I think that is right, and so… the second one._'],
  ['Ms Huda', 'Time?'],
  ['Hiba', 'Twenty-six seconds, and the answer is the last two words.'],
  ['Ms Huda', '⚠ **Nineteen of those seconds were a summary of something the examiner has just heard.** This is the part of the Speaking paper where marks are lost silently, because nothing has gone wrong: the English was correct, the candidate was polite, and they said almost nothing. Mr Darwish, again. **Answer in the first second.**'],
  ['Omar', '_The second one, because a rule about sources has to be applied by somebody and the old page did not need anybody to apply anything. Four editors applying one clause is four clauses, and keeping that up means keeping four people in agreement, which nobody has done for nine months._'],
  ['Ms Huda', 'Twenty-three seconds, and all of it is yours. **The answer, then the reason, then one piece of evidence, and stop.**'],
  ['Jad', 'And if I disagree with my partner?'],
  ['Ms Huda', 'Then say so in the first second, and it is better and not worse: _I would say the opposite, and the reason is…_ ⚠ A disagreement is **two speakers thinking**, which is exactly what the examiner is listening for. _I agree with my partner_ is marked as nothing at all — not as a fault, as an **absence**.'],
  ['Dima', 'Thirty seconds sounds easier than sixty.'],
  ['Ms Huda', 'It is much harder, and for two reasons. You have **no planning time** — your partner has just stopped talking — and you are being asked a question you have not seen, about pictures that are not yours. ⚠ **The remedy is the opening phrase**, prepared in advance and used every time: _For me it would be…_ · _I would say the opposite…_ · _It depends on…, and in this case…_ Three phrases, each about a second and a half, and they start you in the first second.'],
  ['Adnan', 'Is _it depends_ not a hedge?'],
  ['Ms Huda', 'It is a hedge, and it is permitted **once** and only with the second half attached: _it depends on who has to read it, and in this case nobody does._ ⚠ _It depends_ on its own is the single commonest thirty-second answer in a B2 examination and it earns nothing.'],
  ['Nour', 'And if I run out before thirty seconds?'],
  ['Hiba', 'And if I cannot think of a reason?'],
  ['Ms Huda', 'Then give the answer and one fact, and let the fact be the reason. _The second one. Four editors have applied that clause since January and two of them read it differently._ No _because_ in it at all, and the examiner hears a reason, because a fact in that position **is** one.'],
  ['Ms Huda', 'You will, and that is correct. **Twenty-three good seconds beat thirty with a summary in them.** The examiner is not timing you to thirty; they are listening for an answer, a reason and something behind the reason. ⚠ And then **stop**, which is a skill: a candidate who has finished and keeps talking takes their own marks back.'],
]));
out.push(sp());
out.push(box('Language box – the thirty seconds', [
  '**The shape, and it has three parts and a full stop.** **The answer, in the first second.** **The reason, attached to it.** **One piece of evidence.** **Stop.**',
  '⚠ **Do not summarise your partner.** _As my partner said…_ spends your seconds on something the examiner has just heard, and it is where marks are lost **silently** — nothing has gone wrong, the English is correct, the candidate was polite, and they said almost nothing.',
  '**The three prepared openings, each about a second and a half.** _For me it would be…_ · _I would say the opposite, and the reason is…_ · _It depends on…, and in this case…_ ⚠ Prepare them before the day. You have **no planning time**: your partner has just stopped talking, the question is new and the photographs are not yours.',
  '⚠ **Disagreeing is better and not worse.** _I would say the opposite_ is two speakers thinking, which is what the examiner is listening for. **_I agree with my partner_ is marked as nothing at all** — not as a fault, as an absence.',
  '**_It depends_ is permitted once, and only with the second half attached.** _It depends on who has to read it, and in this case nobody does._ On its own it is the commonest thirty-second answer in the examination and it earns nothing.',
  '**Twenty-three good seconds beat thirty with a summary in them** — and then **stop**. A candidate who has finished and keeps talking takes their own marks back, which is the one risk in this part that candidates never anticipate.',
  '**What the examiner is actually marking in these thirty seconds, which is not obvious.** Not the opinion — there is no right answer. **Interaction**: whether you have engaged with a question about somebody else\'s material and said something of your own about it. ⚠ A candidate who agrees and adds nothing has not interacted; a candidate who disagrees in four words has.',
  '**And the one thing to do if your mind is empty.** Give the answer and **one fact**, and let the fact be the reason: _The second one. Four editors have applied that clause since January and two of them read it differently._ There is no _because_ in it, and the examiner hears a reason, because a fact in that position **is** one.',
  '**Pronunciation.** 🔊 **Track 4.8** Three answers, each beginning **in the first second**, with no _er_, no _well_, and no in-breath before the opening phrase. ⚠ Listen to the third one, which ends at twenty-two seconds and stops cleanly: the silence after it is doing work, and the candidate does not fill it.',
  '**Practise:** Thirty seconds each, answer first. **1** which would be harder to keep up  **2** which would you rather be given  **3** which tells you more  **4** which would you change first  **5** which would somebody else notice',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs **with a watch**. A speaks one minute on their pair _(4.3)_. B then has **thirty seconds** on a question from the card about the **same** pair. A times it and marks the second at which B said anything that was not a summary. Swap.'));
out.push(dlg(null, [
  ['B', '_(0:01)_ For me it would be __________, because __________.'],
  ['B', '_(0:12)_ __________, and the one thing behind that is __________.'],
  ['B', '_(0:24)_ _(stop)_'],
  ['A', '_(timing)_ You said something that was yours at __________ and you stopped at __________.'],
]));
out.push(table(['Card A – the thirty-second question', 'Card B – the thirty-second question'], [
  ['_Which of these would be harder to keep up?_', '_Which of these would you rather be given?_'],
  ['_Which of these tells you more?_', '_Which would you change first?_'],
  ['_Which would somebody else notice?_', '_Which would be harder to explain?_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each thirty seconds, the second at which the speaker said something of their own. Then the finding: on a first run it is between **twelve and nineteen seconds**, which means more than a third of the answer has been spent on a summary. ⚠ And the second finding: the speakers who disagreed with their partner all reached their own material in under three seconds.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Thirty seconds on your partner\'s pair, answer in the first second, with one of the three prepared openings. Then say which opening you used and whether you would have found it without having prepared it.'));
out.push(p('**b**  Swap. Then each of you say whether your partner **stopped** or kept going after they had finished — and if they kept going, what they added and whether it helped.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Jad had his minute, and Omar was given thirty seconds on the same pair with a different question: which of the two would be more difficult to keep up? His first attempt began "as Jad said", went through the old forum page and the new one and the clause about sources, agreed that Jad was right, and arrived at "the second one" in the last two words. Hiba timed it at twenty-six seconds, and nineteen of them were a summary of something the examiner had just heard. Which is the part of the Speaking paper where marks are lost silently, because nothing has gone wrong: the English was correct, the candidate was polite, and he said almost nothing. So he went again, answering in the first second — the second one, because a rule about sources has to be applied by somebody and the old page did not need anybody to apply anything; four editors applying one clause is four clauses, and keeping that up means keeping four people in agreement, which nobody has done for nine months. Twenty-three seconds, all of it his. The answer, then the reason, then one piece of evidence, and stop. Jad asked what to do about disagreeing with his partner, and Ms Huda said say so in the first second, because a disagreement is two speakers thinking and that is what the examiner is listening for — while "I agree with my partner" is marked as nothing at all, not as a fault but as an absence. Dima said thirty seconds sounds easier than sixty, and Ms Huda said it is much harder: there is no planning time, because your partner has just stopped talking, and the question is one you have not seen about pictures that are not yours. The remedy is the opening phrase, prepared in advance and used every time. And Nour asked what happens if you run out before thirty seconds, and the answer is that you will, and it is correct: twenty-three good seconds beat thirty with a summary in them — and then you stop, which is a skill, because a candidate who has finished and keeps talking takes their own marks back._'));
out.push(p('**Listener task:** write the prepared opening you will use, and the second at which you reached your own material.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Omar writes to the eleven site managers after being timed. Answer the questions.'));
out.push(model([
  '**THIRTY SECONDS · what I have been doing in meetings for five years** · O. Darwish · 19 October',
  'This is a page about something I was told in an English class, and it is not about English. It is about the first nineteen seconds of every answer I have given in a meeting since 2020.',
  '**What I was doing.** Beginning every answer by repeating the question and summarising what the last person said. _As Mr Saqqal has just explained, the issue is the sheet, and I think that is right, and…_ Nineteen seconds of thirty, and the answer in the last two words.',
  '**Why I was doing it, which I had never examined.** Three reasons, and only one of them is respectable. **One:** it is polite, and in a room where I am the youngest it buys me something. **Two:** it gives me time to decide what I think — which is the honest one and the one I am ashamed of. **Three:** if the answer turns out to be wrong, the summary is the part I can stand behind.',
  '**What it costs, and I can put a figure on one of the three.** Of the eleven sites, I have asked six managers in the last fortnight what they thought I had said at the August meeting. **Four of the six could not tell me.** One remembered the summary and attributed it to Mr Saqqal.',
  '**What must have been happening.** The thing I actually wanted was in the last four seconds of a thirty-second answer, after the room had stopped listening. **Going on:** four of six, and the fact that the date field was raised by me in August and by somebody else in September and is being credited to September.',
  '**What I needn\'t have done.** Said the summary at all. **I needn\'t have spent nineteen seconds being polite to a man who was not listening to that part**, and I did it in every meeting for five years.',
  '**What I am going to do, and it is one thing.** Answer first. _The date field._ Two words, and then the reason, and then the one figure. If it is rude, somebody will tell me, and nobody has told me anything for five years.',
  '**What could conceivably be the case, and I do not believe it.** That the four who could not tell me what I had said were being tactful rather than truthful. **Going on:** nothing but the possibility, and I am writing it down because somebody will suggest it and it should be me.',
  '**And the thing I shall own.** The second reason is the real one. I was not being polite. **I was buying time to decide what I thought, in front of people, with a sentence that sounded like respect.**',
]));
out.push(item('1', 'What are his three reasons, and which does he say is the honest one?'));
out.push(item('2', 'What figure can he put on the cost, and what did the one manager remember?'));
out.push(item('3', 'What does he say he needn\'t have done, and for how long?'));
out.push(writers([
  'A page about a habit you have just seen: **what you were doing, quoted** → **why, in three reasons, with one named as the honest one** → **what it costs, with a figure on one of the three** → **what must have been happening, with the evidence** → **what you needn\'t have done** → **the one thing you are going to do** → **and the reason you are going to own**.',
  '**Quote the habit in your own words, with the timing.** _Nineteen seconds of thirty, and the answer in the last two words._ A habit described in general — _I tend to be too polite_ — cannot be changed because it cannot be found.',
  '⚠ **Three reasons, and name which is honest.** _Which is the honest one and the one I am ashamed of._ A page with one reason in it is a page that has not looked; a page with three and a ranking is a page that has.',
  '**Put a figure on whichever cost you can reach.** _Four of the six could not tell me._ Not all three reasons can be costed, and saying which one you have measured is better than pretending the figure covers all of them.',
  '⚠ And end on the reason rather than the remedy. _I was buying time to decide what I thought, in front of people, with a sentence that sounded like respect._ The remedy is two words long and nobody will remember it; the reason is what makes the remedy stick.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page about a habit you have just seen (80 words or more).'));
out.push(p('**______________ · what I have been doing ______________** · ______________ · ______________   **What I was doing.** ______________. _"______________"_ ______ seconds of ______, and ______________.   **Why I was doing it, which I had never examined.** **One:** ______________. **Two:** ______________ — which is the honest one. **Three:** ______________.   **What it costs.** ______________ of ______________ could not ______________.   **What must have been happening.** ______________. **Going on:** ______________.   **What I needn\'t have done.** ______________, and I did it ______________.   **What I am going to do, and it is one thing.** ______________.   **And the thing I shall own.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The habit quoted, with a timing or a count',
  'Three reasons, with one named as the honest one',
  'A figure against the cost you can actually reach',
  'The page ends on the reason, not on the remedy',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their honest reason.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the habit quoted and timed, the three reasons with the honest one named, the cost with a figure, what must have been happening, what you needn\'t have done, the one change, and the reason you own.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the habit quoted with a timing, the honest reason named among three, a figure against one cost.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your honest reason.** They are nearly all the same reason in different words, and the room should hear that. Then the sentence to leave the cycle on, which is Omar\'s: **I was buying time to decide what I thought, in front of people, with a sentence that sounded like respect** — for five years, in every meeting.'));
out.push(hw('Write the page (80+ words). Then answer **one** question at work with the answer in the first second, and write down what happened in the next ten.'));

// ===================== 4.5 =====================
out.push(h2('4.5  I may be wrong about the cause'));
out.push(p('**Function:** withdrawing a speculation in public without losing the point   ·   **Grammar:** _I may be wrong about the cause; I am not wrong about the figure_   ·   **Pronunciation:** the two halves, and the stress on what survives'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say one thing you have been wrong about at work, in public, in the last year. Then say what you did about it — and about half the room will find the answer is _nothing, and I hoped nobody would mention it again_.'));
out.push(board('I was wrong, sorry, forget what I said.', 'I may be wrong about the cause. I am not wrong about the figure.'));
out.push(p('**b**  Which withdrawal keeps the point? **1** _I was completely wrong, I apologise._  **2** _I may be wrong about the cause; the ninety-one are still uncounted._  **3** _Perhaps we should move on._  **4** _I withdraw the explanation and not the count._  **5** _I never actually said that._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say a total withdrawal costs you, and what are the two halves of the move?   **A** nothing; the apology and the reason   **B** the part of the claim that was right; _I may be wrong about X_ and _I am not wrong about Y_   **C** your reputation; a long explanation'));
out.push(p('**b**  Listen again. **1** What did Rim withdraw in September, and what went with it that should not have?   **2** What does Ms Huda say about the word _sorry_ in this move?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.9  Withdraw the cause and keep the figure', [
  ['Ms Huda', 'Tonight is a move nobody teaches and everybody needs: **how to be wrong in public without losing the part you were right about.** Mrs Shaaban, September.'],
  ['Rim', 'I wrote that four pallets had been left in the yard at Homs overnight. The supplier wrote back and said they had not — they went straight through, and he had the gate log. So I was wrong.'],
  ['Ms Huda', 'And what did you write back?'],
  ['Rim', '_I apologise unreservedly for the error and withdraw my letter._ Which was the end of it, and the four pallets were still eleven degrees over, and nobody has mentioned them since.'],
  ['Omar', 'So you gave away the figure as well.'],
  ['Rim', 'I gave away everything. I had one thing wrong out of three and I withdrew all three, because I did not know how to withdraw one.'],
  ['Ms Huda', '⚠ **That is the cycle, and it is a very expensive habit.** A total withdrawal is read as a total withdrawal: the reader does not go back and work out which parts were still standing, and why should they? **You have to say which part you are keeping, in the same breath.**'],
  ['Hiba', 'And the shape?'],
  ['Ms Huda', 'Two halves, and in this order. **_I may be wrong about the cause._** **_I am not wrong about the figure._** The concession first, the retained claim second, and the second one gets the stress. ⚠ Reverse them and it reads as a defence: _I am not wrong about the figure, though I may be wrong about the cause_ puts the concession in a subordinate clause, which is Unit 3 — **a buried concession reads as an excuse.**'],
  ['Mazen', 'Is that not just the concession from the essay?'],
  ['Ms Huda', 'It is the same grammar doing a harder job, because here you are conceding something you have **already said in public and been caught on**. Which is why the second half has to be **narrower** than the first. _I am not wrong about the figure_ — not _I am not wrong about the rest of it_, which concedes nothing and claims everything.'],
  ['Dima', 'What about _sorry_?'],
  ['Ms Huda', 'Once, early, and for the error and not for the letter. _I am sorry: the pallets did not stand in the yard._ ⚠ Four _sorrys_ is not more apology, it is less: a reader who is apologised to four times stops believing the first one, and in writing it reads as somebody managing a difficulty rather than correcting a fact.'],
  ['Adnan', 'And what do you do with the thing you got wrong?'],
  ['Ms Huda', '**You say where you got it from.** _I had it from the driver, who said they had stood; the gate log says otherwise and the gate log is better evidence than a driver._ That sentence costs you nothing and it is the one that stops the same error being made again — by anybody, including the person you are writing to.'],
  ['Nour', 'And if the thing you were wrong about was the only interesting part?'],
  ['Ms Huda', 'Then you withdraw it and you have a figure left, and a figure is not nothing. ⚠ But say that too: _what is left is narrower than what I wrote, and it is still unanswered._ A reader will respect the narrowing and ignore a claim that pretends to be the same size as before.'],
]));
out.push(sp());
out.push(box('Language box – withdrawing one half', [
  '**The shape, in this order and not the other.** **_I may be wrong about the cause._** **_I am not wrong about the figure._** Concession first, retained claim second, and the **stress goes on the second**.',
  '⚠ **Reversed, it reads as a defence.** _I am not wrong about the figure, though I may be wrong about the cause_ puts the concession in a subordinate clause — which is Unit 3 again: **a buried concession reads as an excuse.**',
  '**The retained half must be _narrower_ than the withdrawn one.** _I am not wrong about the figure_ — **not** _I am not wrong about the rest of it_, which concedes nothing and claims everything. ⚠ A reader can tell the difference in one reading, and the second version loses the whole page.',
  '**Say where you had the wrong thing from.** _I had it from the driver; the gate log says otherwise and the gate log is better evidence than a driver._ It costs you nothing and it is the sentence that stops the same error being repeated by anybody, including your reader.',
  '**_Sorry_ once, early, and for the error and not for the letter.** _I am sorry: the pallets did not stand in the yard._ ⚠ Four apologies is **less** apology, not more: a reader who is apologised to four times stops believing the first, and it reads as somebody managing a difficulty rather than correcting a fact.',
  '**And name the narrowing.** _What is left is narrower than what I wrote, and it is still unanswered._ A reader will respect a claim that admits it has shrunk and will ignore one that pretends to be the same size.',
  '**The other three shapes, for different sizes of withdrawal.** _I withdraw the explanation and not the count._ · _That part of it I take back; the date I do not._ · _I was wrong about why. I was not wrong that it happened._',
  '**The withdrawal that has to be made about somebody else, which is harder.** _Mr Ayoub may be wrong about the order; he is not wrong that nobody has turned a sheet over._ ⚠ Same shape, and one extra rule: **name the person for the half you are keeping and not for the half you are withdrawing.** _He may be wrong_ in front of a name is a public correction; _I may have taken that from him_ is a withdrawal.',
  '**And the thing to do before withdrawing anything: ask what else rested on it.** A claim that has been in three letters has been built on twice, and a withdrawal that does not say so leaves the two later letters standing on nothing. _I withdrew that in September and I should have said then that the October note depends on it._',
  '**Pronunciation.** 🔊 **Track 4.10** The two halves, with a clear stop between them and the stress on the **second**: _I may be wrong about the cause ‖ I am **NOT** wrong about the figure._ ⚠ Run them together and the listener hears one sentence with a _but_ in it, which is a defence; the stop is what makes the first half a real concession.',
  '**Practise:** Withdraw one half and keep the other. **1** a cause you guessed  **2** a date you had second-hand  **3** a name you were given  **4** a reason you inferred  **5** a figure somebody else supplied',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a claim from the card and the part of it that has turned out to be wrong. B withdraws that half and keeps the other, in the two-part shape, and says **where the wrong part came from**. A then asks whether the retained half is narrower than the original. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(the claim)_ __________. _(wrong part)_ __________.'],
  ['B', 'I am sorry: __________. I may be wrong about __________. I am not wrong about __________.'],
  ['B', 'I had it from __________, and __________ is better evidence.'],
  ['A', 'Is what is left narrower? __________, because __________.'],
]));
out.push(table(['Card A – the claim and the wrong part', 'Card B – the claim and the wrong part'], [
  ['_Four pallets stood overnight and were warm_ · the standing', '_The sheet was withdrawn by the depot in 2019_ · the depot'],
  ['_The fault is in the batch and eleven have returned_ · the batch', '_The form was changed in March and four sites ignored it_ · March'],
  ['_He was told in February and did nothing_ · the telling', '_The figure doubled because of the new rota_ · the rota'],
  ['_The joint is 60 mm and the drawing is wrong_ · the drawing', '_Nobody signed it because nobody was there_ · the absence'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each withdrawal, write what was given up and what was kept, and mark whether the kept half is **narrower**. Then the count: in **three or four of the eight the kept half is not narrower** — it is the same claim with one word removed, and those are the withdrawals a reader will refuse.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you were wrong about in public and write the two halves. Then say where you had the wrong part from, and whether you have ever said so.'));
out.push(p('**b**  Swap. Then each of you say whether your partner\'s kept half is narrower than the original claim — and if it is not, say which word is doing the pretending.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A move nobody teaches and everybody needs: how to be wrong in public without losing the part you were right about. Rim wrote in September that four pallets had been left in the yard at Homs overnight; the supplier wrote back to say they had gone straight through, and he had the gate log, so she was wrong. What she wrote back was: I apologise unreservedly for the error and withdraw my letter. Which was the end of it — and the four pallets were still eleven degrees over, and nobody has mentioned them since. Omar said so she gave away the figure as well, and Rim said she gave away everything: she had one thing wrong out of three and withdrew all three, because she did not know how to withdraw one. Which is the cycle, and it is a very expensive habit: a total withdrawal is read as a total withdrawal, because the reader does not go back and work out which parts were still standing, and why should they? You have to say which part you are keeping, in the same breath. The shape is two halves and in this order — I may be wrong about the cause; I am not wrong about the figure — concession first, retained claim second, and the second gets the stress. Reversed, it reads as a defence, because the concession ends up in a subordinate clause, which is Unit 3 again. Mazen asked whether that is not just the concession from the essay, and Ms Huda said it is the same grammar doing a harder job, because here you are conceding something you have already said in public and been caught on — which is why the kept half has to be narrower than the first: I am not wrong about the figure, and not I am not wrong about the rest of it, which concedes nothing and claims everything. Dima asked about "sorry", and the answer is once, early, and for the error and not for the letter, because four apologies is less apology and not more. And Adnan asked what you do with the thing you got wrong: you say where you had it from. I had it from the driver; the gate log says otherwise and the gate log is better evidence than a driver. That sentence costs nothing and it is the one that stops the same error being made again, by anybody. And Nour asked what happens if the thing you were wrong about was the only interesting part, and Ms Huda said then you withdraw it and a figure is left, which is not nothing — but say that too: what is left is narrower, and it is still unanswered._'));
out.push(p('**Listener task:** write your two halves, and mark whether the kept half is narrower.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Rim writes in October to the supplier she apologised to in September. Answer the questions.'));
out.push(model([
  '**CONSIGNMENT 4471 · one thing withdrawn and one thing not** · R. Shaaban · 20 October',
  'In September I wrote to you that four pallets from consignment 4471 had stood in the yard at Homs overnight. I then withdrew the whole of that letter, and I am writing again because withdrawing the whole of it was wrong.',
  '**What I am sorry about.** The pallets did not stand in the yard. You sent me the gate log and the gate log is clear: they went through at 21.40 and left at 22.05.',
  '**Where I had it from, which I should have said in September.** The driver. He told me on the telephone that they had stood, and I believed him because he had no reason to say it. **A gate log is better evidence than a driver**, and I did not weigh the two — I simply used the one that reached me first.',
  '**What I may still be wrong about.** The cause. If they did not stand at Homs then they were warm before Homs or warm after it, and I do not know which. **Going on:** nothing but the two readings I have, which are at loading and at arrival.',
  '**And what I am not wrong about.** The temperature. Four pallets were eleven degrees above the specified maximum when they arrived on 2 September, and that figure is from our own probe, read in front of your driver, and signed by both of us.',
  '**Why I am writing again rather than leaving it.** Because my September letter withdrew three things and only one of them was wrong, and the effect of that is that **the eleven degrees has not been mentioned by either of us for seven weeks.** I withdrew the figure by accident, and you were entitled to take the withdrawal at face value.',
  '**What is left, and it is narrower than what I wrote.** Not a claim about your yard. A claim about four pallets, a probe reading and a signature — and it is still unanswered.',
  '**What I needn\'t have done.** Written the September letter at all before I had the gate log. **I needn\'t have gone first** — the log existed, it was yours, and one line asking for it would have cost me nothing and saved both of us a withdrawal. I went first because the driver had telephoned me and the telephone arrives before the paper.',
  '**What I am asking for.** The loading temperature, if it was taken. If it was not taken, then say so and we are both looking at two readings and a gap, which is a different conversation and a shorter one.',
]));
out.push(item('1', 'What is she sorry about, and where did she have the wrong information from?'));
out.push(item('2', 'What may she still be wrong about, and what is she going on?'));
out.push(item('3', 'Why is she writing again, and what has the September withdrawal cost?'));
out.push(writers([
  'A letter that withdraws one half: **what you wrote and that you withdrew all of it** → **what you are sorry about, once** → **where you had the wrong part from** → **what you may still be wrong about, with the evidence or the absence of it** → **what you are not wrong about, with the evidence** → **why you are writing again** → **what is left, named as narrower** → **and the request**.',
  '**One apology, and it is for the fact.** _The pallets did not stand in the yard._ No adverbs, no _unreservedly_, and nothing about the letter — a reader who is apologised to for a letter rather than for a fact learns nothing they can use.',
  '⚠ **Say where the wrong part came from and rank the two kinds of evidence.** _A gate log is better evidence than a driver, and I used the one that reached me first._ That sentence is worth more than the apology: it is the only part that prevents a repetition.',
  '**Name what the over-withdrawal cost.** _The eleven degrees has not been mentioned by either of us for seven weeks._ Without that sentence the second letter looks like a reopening; with it, it is a repair of a mistake you made twice.',
  '⚠ And say the claim has shrunk, in the words of the shrinking. _Not a claim about your yard. A claim about four pallets, a probe reading and a signature._ A reader will respect a narrowed claim and refuse one that pretends to be the size it was.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter that withdraws one half (80 words or more).'));
out.push(p('**______________ · one thing withdrawn and one thing not** · ______________ · ______________   In ______________ I wrote that ______________. I then withdrew ______________, and I am writing again because ______________.   **What I am sorry about.** ______________.   **Where I had it from.** ______________. **______________ is better evidence than ______________**, and I did not weigh the two.   **What I may still be wrong about.** ______________. **Going on:** ______________.   **And what I am not wrong about.** ______________, and that figure is from ______________.   **Why I am writing again.** ______________, and the effect is that ______________.   **What is left, and it is narrower.** Not ______________. ______________ — and it is still unanswered.   **What I am asking for.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One apology, for the fact and not for the letter',
  'Where the wrong part came from, with the two kinds of evidence ranked',
  'The cost of having withdrawn too much, with a figure or a period',
  'What is left, named as narrower than what was written',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read the sentence that ranks their two kinds of evidence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (180 words or more): what you wrote and withdrew, the apology, where the wrong part came from, what you may still be wrong about, what you are not, why you are writing again, the narrowing, and the request.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: one apology for the fact, the two kinds of evidence ranked, the remaining claim named as narrower.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your two halves, in order, with the stop between them.** The room marks whether the kept half is narrower. Then the sentence to leave the cycle on, which is Rim\'s: **I had one thing wrong out of three and I withdrew all three, because I did not know how to withdraw one** — and seven weeks later nobody has mentioned the figure.'));
out.push(hw('Write the letter (80+ words) and send it if you can. Then write down **one** thing you have withdrawn in the past twelve months and what went with it that should not have.'));

// ===================== 4.6 =====================
out.push(pb());
out.push(h2('4.6  Three columns at paragraph scale'));
out.push(p('**Function:** writing the page that separates what you know from what you infer   ·   **Grammar:** the three columns, raised from 23.5 to paragraph scale   ·   **Pronunciation:** the change of voice between the columns'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Take the paragraph you rewrote in **2.7** and read it aloud. Then say, sentence by sentence: **know · infer · guess.** Most paragraphs turn out to have all three in them and to be written in one voice.'));
out.push(board('The sheet was never sent to four sites.', 'KNOW: four sites return the old sheet. INFER: two were never sent one. GUESS: nobody checked the list.'));
out.push(p('**b**  Which column? **1** _Eleven of fifteen have returned._  **2** _The fault is in the housing._  **3** _Nobody opened the other two._  **4** _They were warm before Homs._  **5** _The gate log shows 21.40._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say is wrong with the three columns as a **table**, and what does the paragraph version add?   **A** nothing; colour   **B** that a reader reads down one column and never crosses; a paragraph forces the inference to touch the evidence it rests on   **C** that it is too long; headings'));
out.push(p('**b**  Listen again. **1** What does Nour find when she sorts her own paragraph?   **2** What does Ms Huda say about a paragraph in which every sentence is in the _know_ column?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.11  The columns do not work as columns', [
  ['Ms Huda', 'Last year, in 23.5, you sorted a page into three columns: what I know, what I infer, what I am guessing. It worked and it taught you something, and tonight I am going to take the table away.'],
  ['Omar', 'Why? It was the clearest thing we did.'],
  ['Ms Huda', 'It was clear and it was easy to cheat, and the cheating is invisible. ⚠ **A reader reads down one column and never crosses.** They read your _know_ column, find it short and solid, and believe the page — and your inference in the second column is attached to nothing, because in a table nothing is attached to anything.'],
  ['Nour', 'Mine is attached to something.'],
  ['Ms Huda', 'Read your 2.7 paragraph and sort it out loud.'],
  ['Nour', '_"A field for the promise date has been requested, by me, in writing, four times since December."_ Know. _"The absence of such a field is what loses the promises."_ … Infer. _"Nobody has read the February note."_ Guess — and I have written all three in the same voice, in one paragraph, and the middle one is the whole reason I wrote it.'],
  ['Ms Huda', 'And what is the middle one attached to?'],
  ['Nour', 'The thirty-four of forty-one. Which is in a different paragraph.'],
  ['Ms Huda', '⚠ **That is the finding, and it is why the columns go.** At paragraph scale the rule is: **an inference goes in the same paragraph as the thing it rests on, in the sentence after it.** Not in a column, not on another page. _Thirty-four of the forty-one involved a promise that is in no note of ours. The absence of a field, rather than carelessness, is what loses them._ Evidence, then inference, touching.'],
  ['Hiba', 'And the guesses?'],
  ['Ms Huda', 'Their own paragraph, at the end, and **labelled**. _What I am guessing at, and going on nothing for:_ — and then one, or two, and not six. ⚠ A guess inside an evidence paragraph is the single most expensive sentence in professional writing, because it borrows the credit of the sentence before it.'],
  ['Dima', 'What about a paragraph that is all _know_?'],
  ['Ms Huda', 'It is a record, and records are useful and are not arguments. ⚠ **A page of pure _know_ has not said what any of it means**, and somebody else will supply the inference — which is exactly what happened to Mr Barghouti\'s four paragraphs and to Mrs Barakat\'s seven errors for two years.'],
  ['Adnan', 'So every paragraph needs one of each.'],
  ['Ms Huda', 'Every **evidence paragraph** needs its inference beside it. And then the shape of the whole page is three paragraphs and not three columns: **what I know, with each inference beside the thing it rests on** · **what follows from all of it** · **what I am guessing at, labelled.**'],
  ['Mazen', 'And the voice changes.'],
  ['Ms Huda', 'It does, and that is the pronunciation point: the evidence flat, the inference slower, the guess quicker and lighter. ⚠ Read all three in one voice and you have written a table in prose, which is the worst of both.'],
]));
out.push(sp());
out.push(box('Language box – three columns at paragraph scale, and this unit\'s two declared sets', [
  '⚠ **Why the table from 23.5 goes.** A reader **reads down one column and never crosses**: they find the _know_ column short and solid and believe the page, while the inference in column two is attached to nothing — because in a table nothing is attached to anything.',
  '**The rule at paragraph scale.** **An inference goes in the same paragraph as the thing it rests on, in the sentence after it.** _Thirty-four of the forty-one involved a promise that is in no note of ours. The absence of a field, rather than carelessness, is what loses them._ Evidence, then inference, **touching**.',
  '**The guesses get their own paragraph, at the end, labelled.** _What I am guessing at, and going on nothing for:_ — and then one or two, not six. ⚠ A guess inside an evidence paragraph is the most expensive sentence in professional writing, because it **borrows the credit of the sentence before it**.',
  '**And a page of pure _know_ is a record and not an argument.** It has not said what any of it means, so somebody else will supply the inference — which is what happened to four official paragraphs in Unit 2 and to seven errors for two years in 4.2.',
  '**The shape of the whole page: three paragraphs, not three columns.** **1** what I know, with each inference beside the thing it rests on · **2** what follows from all of it · **3** what I am guessing at, labelled.',
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _put down to · account for · pin down · read into · fall back on · take it that · go by · tell apart · narrow down · hold out for · bank on · square with_.',
  '**This unit\'s word-formation set** _(Reading Part 2 in 4.7 draws on this)_: _speculate → **speculation** · infer → **inference** · certain → **certainty** · likely → **likelihood** · evident → **evidence** · doubt → **doubtful** · reliable → **reliability** · deduce → **deduction** · probable → **probability**._',
  '**How long each paragraph should be, because the proportions carry a message of their own.** The evidence paragraph is the longest. The _what follows_ paragraph is the shortest — about forty words, because a conclusion drawn from everything above it needs no support. The guess paragraph is short and comes last. ⚠ A page whose guess paragraph is the longest has told the reader where the writer\'s interest really lies, whatever the labels say.',
  '**Pronunciation.** 🔊 **Track 4.12** The three voices: the **evidence flat and even**, the **inference slower**, the **guess quicker and lighter**. ⚠ Read in one voice and you have written a table in prose, which is the worst of both — the reader can neither scan it nor follow it.',
  '**Practise:** Sort each into the three and then write the evidence and its inference as touching sentences. **1** a fault  **2** a figure  **3** an absence  **4** a date  **5** a signature',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B says which column it belongs in and why. A then supplies **the sentence that would have to come before it** if it is an inference, or **the inference that should follow it** if it is evidence. B says whether they are now touching. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'That is **know / infer / guess**, because __________.'],
  ['A', 'Then the sentence beside it is __________.'],
  ['B', 'And they are touching **now / still not**, because __________.'],
]));
out.push(table(['Card A – the sentence', 'Card B – the sentence'], [
  ['_The fault is in the microphone housing._', '_They were warm before Homs._'],
  ['_Eleven of the fifteen have returned._', '_The gate log shows 21.40 and 22.05._'],
  ['_Nobody read the February note._', '_Two of the four were never sent a sheet._'],
  ['_Five of the seven were fourth nights._', '_The night staff were told and forgot._'],
  ['_Four editors read the clause differently._', '_The removal log records only the number._'],
  ['_Nineteen of thirty-one boxes are empty._', '_Six seconds is why they are empty._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the eight sentences with their columns. Then the two findings: the **know** sentences all contain a figure, a date or a document, and every one of the **guess** sentences is about **what somebody else did or did not do**. ⚠ That second pattern is worth writing on the board: a guess about a person is still a guess, and it is the kind that does the most damage.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your 2.7 paragraph and rewrite it so that each inference sits in the sentence after the thing it rests on. Then say which inference had nothing in the paragraph to rest on.'));
out.push(p('**b**  Swap. Then each of you find your partner\'s **guess** and say whether it is about a person — and if it is, what the paragraph would lose by taking it out.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Last year, in 23.5, the class sorted a page into three columns — what I know, what I infer, what I am guessing — and Ms Huda took the table away. Omar said it was the clearest thing they did, and she said it was clear and easy to cheat, and the cheating is invisible: a reader reads down one column and never crosses, so they read the know column, find it short and solid, and believe the page, while the inference in column two is attached to nothing, because in a table nothing is attached to anything. Nour said hers is attached to something, and was asked to sort her 2.7 paragraph aloud. "A field for the promise date has been requested, by me, in writing, four times since December" — know. "The absence of such a field is what loses the promises" — infer. "Nobody has read the February note" — guess. And she said she had written all three in the same voice, in one paragraph, and the middle one is the whole reason she wrote it. Asked what the middle one is attached to, she said the thirty-four of forty-one — which is in a different paragraph. Which is the finding, and why the columns go: at paragraph scale, an inference goes in the same paragraph as the thing it rests on, in the sentence after it. Not in a column and not on another page. Hiba asked about the guesses, and the answer is their own paragraph, at the end, labelled — one or two, not six — because a guess inside an evidence paragraph is the most expensive sentence in professional writing: it borrows the credit of the sentence before it. Dima asked about a paragraph that is all know, and Ms Huda said it is a record, and records are useful and are not arguments: a page of pure know has not said what any of it means, so somebody else will supply the inference, which is exactly what happened to Mr Barghouti\'s four paragraphs and to Mrs Barakat\'s seven errors for two years. Then Adnan said so every paragraph needs one of each, and Ms Huda said every evidence paragraph needs its inference beside it — and that the shape of the page is three paragraphs and not three columns. Mazen said the voice changes, and it does: the evidence flat, the inference slower, the guess quicker and lighter._'));
out.push(p('**Listener task:** write the inference from your own paragraph that had nothing to rest on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Nour rewrites with the inferences moved. Answer the questions.'));
out.push(model([
  '**THE PROMISE FIELD · what I know, what follows, and what I am guessing** · N. Sabbagh · 21 October',
  '**What I know, with what I draw from each thing beside it.** Of the forty-one escalation calls taken since 1 September, thirty-four involved a promise made to a customer that is in no note of ours; I have the dates and the eleven-digit case numbers for all thirty-four. **The absence of a field, rather than the carelessness of the people taking the calls, is therefore what loses them** — thirty-one of the thirty-four promises were reasonable things to say on the telephone, and the free-text box they could have gone in is not searchable. Separately, nine paragraphs about the template went out between December and July; five named somebody and were answered, and four named nobody and were not. **From which I take it that the four were read as descriptions rather than as requests**, and not that they were refused.',
  '**What follows from all of it.** One field with a date in it, before the October release. Not a review of the template, not training for the people on the telephone, and not a change to the free-text box. ⚠ **The narrowness of that request is the point of the page**: everything above it is evidence for a change of about four lines of code.',
  '**What I am guessing at, and going on nothing for.** That nobody has read the February note. **I am going on nothing.** The note went to a third person who has since moved, and I have assumed it stopped there because that is easier to believe than the alternative, which is that it arrived and was not thought worth answering. I have no evidence either way and I should not have let that sentence into three of the nine paragraphs.',
  '**What I had been doing wrong, in one line.** Writing all three of those paragraphs in one voice, so that the guess read like the evidence and the evidence read like an opinion.',
  '**What I am no longer going to do, and it is one thing.** Put a request and a guess in the same paragraph. Of the nine paragraphs, the four that failed all had both in them — the request in the first sentence and the guess in the last — and a reader who declines the guess has declined the paragraph. **Separating them is the whole of what this cycle has taught me**, and it is a matter of where the full stops go.',
  '**And the thing I notice about the three lengths.** The evidence paragraph is the longest and was the quickest to write. The guess paragraph is the shortest and took me an hour, because **naming a guess as a guess means deciding that you have been repeating it**.',
]));
out.push(item('1', 'What does she draw from the thirty-four, and what does she say it is not?'));
out.push(item('2', 'Why does she say the narrowness of the request is the point of the page?'));
out.push(item('3', 'What took her an hour, and why?'));
out.push(writers([
  'A page in three paragraphs: **what I know, with each inference in the sentence after the thing it rests on** → **what follows from all of it, and what it is not** → **what I am guessing at, labelled** → **what you had been doing wrong, in one line** → **and the thing about the three lengths**.',
  '**Put the inference immediately after its evidence, with a word that joins them.** _…for all thirty-four. **The absence of a field … is therefore what loses them**._ The word _therefore_ is doing structural work: it tells the reader that the sentence before it is the ground, and a reader who has to hunt for the ground will supply their own.',
  '⚠ **Label the guess paragraph in its heading and say _I am going on nothing_ inside it.** _What I am guessing at, and going on nothing for._ A guess that is merely softened — _it may be that nobody read it_ — is still borrowing credit from the paragraph above; the label is what stops it.',
  '**Say what the conclusion is not.** _Not a review of the template, not training, and not a change to the free-text box._ Three refusals, and they are what make the one request look small enough to grant.',
  '⚠ And end on the lengths, because the figures say what no sentence can. _The longest paragraph was the quickest to write; the shortest took an hour._ **Naming a guess as a guess means deciding that you have been repeating it.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page in three paragraphs (80 words or more).'));
out.push(p('**______________ · what I know, what follows, and what I am guessing** · ______________ · ______________   **What I know, with what I draw from each thing beside it.** ______________; I have ______________. **______________ is therefore ______________** — ______________. Separately, ______________. **From which I take it that ______________**, and not that ______________.   **What follows from all of it.** ______________. Not ______________, not ______________, and not ______________.   **What I am guessing at, and going on nothing for.** ______________. **I am going on nothing.** ______________.   **What I had been doing wrong, in one line.** ______________.   **And the thing about the three lengths.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every inference in the sentence after the thing it rests on',
  'A joining word — _therefore_, _from which_ — on each inference',
  'The guess paragraph labelled, with _I am going on nothing_ inside it',
  'Three refusals that make the one request look small',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their guess paragraph.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (180 words or more): the evidence with its inferences touching, what follows and what it is not, the labelled guess, what you had been doing wrong, and the three lengths.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: each inference touching its evidence, the guess paragraph labelled, three refusals around the one request.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read your guess paragraph and say how long it took.** It will be the shortest paragraph and the slowest, in almost every case. Then the sentence to leave the cycle on, which is Nour\'s: **naming a guess as a guess means deciding that you have been repeating it** — and she had let one into three of nine paragraphs.'));
out.push(hw('Write the page (80+ words). Then take any page you sent before this course and mark each sentence **know · infer · guess**. Write down the three counts.'));

// ===================== 4.7 =====================
out.push(h2('4.7  Review & Mediate: A photograph for somebody who cannot see it'));
out.push(p('**Function:** explaining a photograph to somebody who cannot see it, then mediating two readings of it   ·   **Recycling:** Unit 4   ·   **Exam practice:** B2 First Reading and Use of English Part 2 · Writing Part 2 (letter/email) · Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 4 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** It may to be the fan.  **2** You needn\'t waited — the form was signed on Tuesday.  **3** It will not have been checked: the door was locked all weekend.  **4** It is unlike to be the batch.  **5** It must of been the fourth night.  **6** The infer that nobody told them is one I am going on nothing for.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the two readings of one photograph, written by two people who have both seen it.'));
out.push(box(null, [
  '**ONE PHOTOGRAPH, TWO READINGS** _(the muster-room board, 14 October)_',
  '**Reading one** _(T. Ayoub)_ _"A board with a printed timetable on it and three sheets of paper pinned over the bottom half. Two of the three are curling at the corner, so they have been there a while. The 06.40 is visible above them. **Which must mean that the three were pinned up after the timetable and by somebody who did not mind covering it.**"_',
  '**Reading two** _(the depot office)_ _"A board with the current timetable on it and three notices. The notices are at eye level and the timetable is above them. **Which must mean that the notices are the things people are expected to read, and the timetable is where it has always been.**"_',
  '⚠ **Both readings are of the same photograph. Both use _must mean_. Neither is lying.**',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does Ms Huda say the two readings have in common, and what is the mediator\'s job?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 4.13  Both of them said must', [
  ['Ms Huda', 'Two readings of one photograph. Both of them say **must mean**. Mr Ayoub, is the depot office lying?'],
  ['Tareq', 'No. They are reading the same board and they are reading it the other way up.'],
  ['Ms Huda', 'Say what you mean by the other way up.'],
  ['Tareq', 'I read from the timetable down, because the timetable is the thing I need. They read from eye level up, because the notices are the thing they put there. ⚠ We are both reading **from the thing we are responsible for**.'],
  ['Ms Huda', '**That is the best sentence anybody has said in this unit.** And now the point of the cycle: what do the two readings have in common?'],
  ['Hiba', 'They both use _must_.'],
  ['Ms Huda', 'They both use _must_ for something that is not a deduction. ⚠ **A deduction rules alternatives out; neither of these does.** Mr Ayoub\'s reading is _may well_ — he has the curling corners, which is a reason. The depot\'s is _might_ — eye level is a reason for nothing, because everything on a board is at some height.'],
  ['Omar', 'So they are both one or two steps too high.'],
  ['Ms Huda', 'Both, and in the same direction, and that is what happens when a reading is about something you are responsible for. **You do not inflate your evidence. You inflate your modal.**'],
  ['Dima', 'And what is the mediator for?'],
  ['Ms Huda', 'Not to decide. ⚠ **The mediator\'s job is to say what each reading is going on, and to put both at their honest step** — and then, if anything is left, to name the one thing that would settle it. Mrs Khoury, mediate.'],
  ['Dima', '_Mr Ayoub is going on the curling corners, which is evidence of time and not of order, so his claim is "the three may well have gone up after the timetable". The office is going on eye level, which is evidence of nothing, so theirs is "the notices might be the things people are expected to read". And the thing that would settle it is on the back of the sheets: whoever pinned them up dated them, because everybody dates a notice._'],
  ['Tareq', 'They are dated. All three. I have never turned one over.'],
  ['Ms Huda', '⚠ **Which is the whole of mediation in one exchange.** Neither reading was wrong and neither was a deduction, and the thing that settles it was in the room the whole time, on the back of a sheet nobody had turned over — because both parties were busy reading the front of it from the direction they were responsible for.'],
  ['Adnan', 'That happens in a contracts office about once a week.'],
  ['Ms Huda', 'It happens everywhere, and the reason it is not noticed is that both sides sound certain. **Two people saying _must_ about the same object is not a disagreement about facts. It is two inferences with the modal turned up**, and nobody can see that from inside either one of them.'],
]));
out.push(sp());
out.push(box('Language box – mediating two readings', [
  '**What the two readings have in common.** Both say **must**, and neither is a deduction. ⚠ **A deduction rules alternatives out**; a reading that does not rule anything out is _may well_ at best and _might_ at worst, however certain it sounds.',
  '**The mechanism, and it is the finding of the whole unit.** _We are both reading from the thing we are responsible for._ **You do not inflate your evidence. You inflate your modal** — and nobody can see that from inside their own reading.',
  '**The mediator does three things and not four.** **1** Say what each reading is **going on**. **2** Put each at its **honest step**. **3** Name the **one thing that would settle it**. ⚠ **Not** decide between them: a mediator who decides has become a third reading.',
  '**The language of it.** _X is going on…, which is evidence of … and not of …, so the claim is…_ · _Y is going on…, which is evidence of nothing, so theirs is…_ · _And the thing that would settle it is…_',
  '⚠ **The thing that settles it is usually present and unexamined.** The sheets were dated, on the back, and neither party had turned one over — because both were reading the front from the direction they were responsible for. Look for the thing nobody has turned over before looking for new evidence.',
  '**And why this is not noticed in ordinary working life: both sides sound certain.** Two people saying _must_ about the same object is not a disagreement about facts. It is **two inferences with the modal turned up.**',
  '**Why both readings came out at _must_ rather than at different steps, which is the part worth taking slowly.** Neither party inflated the evidence: the corners really are curling and the notices really are at eye level. What each did was **choose the modal that matched their responsibility** rather than their evidence — and because responsibility feels like knowledge from the inside, the inflation is invisible to the person doing it and obvious to everybody else.',
  '**The three questions a mediator asks, and in this order.** **1** _What is in front of each of you?_ — the evidence, named. **2** _What kind of thing is it evidence of?_ — time, order, authorship, quantity. **3** _What would one of you have to find for the other to agree?_ ⚠ Question two is the one that does the work: the corners are evidence of **time** and the claim was about **order**, and that mismatch is the whole disagreement.',
  '**And a warning about mediating in writing rather than out loud.** A written mediation is read by both parties and by people who were not there, so it must quote both readings **in their own words**. A mediation that paraphrases will be disputed by whichever party reads their own position as having been softened — which, in practice, is both.',
  '**Pronunciation.** 🔊 **Track 4.14** The mediator\'s three moves, each at a different speed: **what each is going on, flat and quick**; **the honest step, slower and with the modal unstressed**; **the settling thing, slowest and last.** ⚠ A mediator who speeds up at the end sounds as though they are proposing a verdict, which is the one thing the role does not do.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has one of the pairs of readings below and does **not** show it. A reads both aloud once. B must say, for each: **what it is going on**, **its honest step**, and then **the one thing that would settle it**. Change roles with the other pair.'));
out.push(table(['Pair A – a ward noticeboard, two readings', 'Pair B – a stores shelf, two readings'], [
  ['_"Three handover sheets pinned over the rota, so the rota must be out of date."_', '_"Two boxes open at the front, so the stock must be moving."_'],
  ['_"The rota is on top and dated, so the sheets must have been pinned under it."_', '_"The dust is even across all of them, so nothing must have moved for weeks."_'],
  ['_(going on: the covering)_', '_(going on: the open boxes)_'],
  ['_(going on: the date on the rota)_', '_(going on: the dust)_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the four readings, its honest step. ⚠ On **both** sheets one reading is **_may well_** (evidence of the right kind) and the other **_might_** (evidence of a different kind) — and on both, **both said _must_**. The settling thing is the date on the sheets, and the delivery book.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **one** of your own two photographs. Describe it to your partner, who must **not** look at it, in forty seconds. Your partner then says what they take it to mean and what they are going on. Then you say what you take it to mean, and the two of you put both readings at their honest step and name the one thing that would settle it. Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what the two readings were and what would settle it:  _Two readings of one photograph of the muster-room board, both of them using "must mean". Asked whether the depot office was lying, Tareq said no — they are reading the same board the other way up: he reads from the timetable down, because the timetable is the thing he needs, and they read from eye level up, because the notices are the thing they put there. Both of them, he said, are reading from the thing they are responsible for. Then the point of the cycle: what the two readings have in common is that they both use "must" for something that is not a deduction, because a deduction rules alternatives out and neither of these does. Tareq\'s reading is "may well" — he has the curling corners, which is a reason. The depot\'s is "might" — eye level is a reason for nothing, because everything on a board is at some height. Omar said so they are both one or two steps too high, and Ms Huda said both, and in the same direction, and that is what happens when a reading is about something you are responsible for: you do not inflate your evidence, you inflate your modal. Dima asked what the mediator is for, and the answer is not to decide: the mediator says what each reading is going on, puts both at their honest step, and then names the one thing that would settle it. So Dima mediated. Mr Ayoub is going on the curling corners, which is evidence of time and not of order, so his claim is that the three may well have gone up after the timetable. The office is going on eye level, which is evidence of nothing, so theirs is that the notices might be the things people are expected to read. And the thing that would settle it is on the back of the sheets, because everybody dates a notice. Tareq said they are dated, all three, and he has never turned one over. Which is the whole of mediation in one exchange: neither reading was wrong, neither was a deduction, and the thing that settles it had been in the room the whole time on the back of a sheet nobody had turned over — because both parties were busy reading the front of it from the direction they were responsible for._'));
out.push(p('**Listener task:** write the one thing that would settle your partner\'s photograph, and whether it is already in the room.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B2 First Reading and Use of English Part 2)', 7));
out.push(p('For questions **1–8**, read the text and think of the word which best fits each gap. Use **only one word** in each gap.'));
out.push(box(null, [
  '**WHAT WE ARE GOING ON**',
  'Most of what passes **(1)** ______ knowledge in an office is in fact inference, and the difficulty is not that we speculate **(2)** ______ that we do not mark it. A claim **(3)** ______ no evidence behind it is not a weak claim; it is a guess **(4)** ______ the clothes of an inference, and it is believed for exactly as long as nobody asks.',
  'The remedy is four words long. It is to ask what one is going **(5)** ______ , and to answer honestly. Where the answer turns **(6)** ______ to be nothing, saying so costs very little and buys a great deal: once a reader has been told **(7)** ______ you distinguish between the two, they will believe both kinds of sentence from you.',
  'None of this is difficult, and by **(8)** ______ time the habit has been formed it costs no time at all. What makes it rare is that it has to be done in public, about one\'s own sentences, and usually after they have been written down.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of two readings (80 words or more).'));
out.push(p('**TWO READINGS OF ______________**   **Reading one** _(______________)_ "______________"   **Reading two** _(______________)_ "______________"   **What each is going on.** The first is going on ______________, which is evidence of ______________ and not of ______________. The second is going on ______________, which is evidence of ______________.   **At their honest steps.** The first is "______________". The second is "______________".   **What they have in common.** ______________.   **And the one thing that would settle it.** ______________ — which is ______________ and nobody has ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both readings quoted, not summarised',
  'What each is going on, and what kind of evidence that is',
  'Both put at an honest step, and neither at _must_',
  'One settling thing, with whether it is already available',
]));
out.push(stage('7', 'Write freely – exam practice (B2 First Writing Part 2: a letter or email)', 10));
out.push(box(null, [
  '⚠ **A letter or email in Part 2 has a named reader and a reason for writing, and both must be visible in the first two lines.** It is not an essay with a greeting on it: an essay holds a position for a reader who chose to read it, and a letter asks a particular person for something.',
  'You have received this email from a colleague in another office.',
  '_"I have seen the photograph of the board and I do not read it the way you do. As far as I am concerned the notices are what people are meant to read and the timetable is where it has always been. Before I take this any further, can you tell me what exactly you are going on, and what you want me to do about it?"_',
  'Write your **email** in reply, in **180–220 words**. Say what you are going on, put your own reading at its honest step, say what their reading is going on, and ask for the one thing that would settle it.',
], C.lorange, C.orange));
out.push(...lines(8));
out.push(pb());
out.push(stage('✓', 'Unit 4 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  It ___ be the fan: I have no evidence either way, and it is one of three possibilities.   a) must   b) might   c) cannot',
  '2  You waited two hours, and you ___ have: the form was signed on Tuesday.   a) needn\'t   b) mustn\'t   c) couldn\'t',
  '3  It ___ have been checked: the door was locked all weekend.   a) will not   b) may not   c) cannot',
  '4  It is ___ to be the batch, because the two that were dropped did not develop the fault.   a) unlikely   b) unlikely for   c) unlike',
  '5  I ___ be wrong about the cause; I am not wrong about the figure.   a) cannot   b) may   c) must',
  '6  The ___ that nobody told them is one I am going on nothing for.   a) infer   b) inferring   c) inference',
  '7  It must ___ been the fourth night — the dates are in the ledger.   a) have   b) of   c) has',
  '8  Neither photograph shows the joint, which ___ have been photographable in July.   a) can   b) must   c) will',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B2 First Listening Part 4 style – multiple choice).** 🔊 **Track 4.15** You will hear an interview with a teacher about how people say how sure they are. For questions **1–7**, choose the best answer (**A**, **B** or **C**).'));
[
  '**1**  What does she say most people have instead of nine steps?   **A** five   **B** three and two fillers   **C** none at all',
  '**2**  What does she say the word _probably_ usually means?   **A** that the speaker is being modest   **B** that the speaker is guessing   **C** that the speaker has a reason and has not checked it',
  '**3**  Why does she say _could conceivably_ is useful?   **A** it puts on the record something you do not believe   **B** it is polite   **C** it is short',
  '**4**  What does she say happens to a hedge in a clause of its own?   **A** it is more formal   **B** anybody can delete it   **C** it is easier to read',
  '**5**  What does she say about two people who both say _must_?   **A** one of them is lying   **B** both of them have inflated the evidence   **C** they are reading from the direction of what they are responsible for',
  '**6**  What does she say settles most disagreements of that kind?   **A** new evidence   **B** something already present that nobody has examined   **C** a decision by somebody senior',
  '**7**  What does she say is the hardest part for her students?   **A** saying that they are going on nothing   **B** the grammar   **C** speaking for a minute',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 4.15  Audio script (read after the check)', [
  ['Interviewer', 'You teach people to say how sure they are. Do they not already know how?'],
  ['Ms Huda', 'They have three positions and two fillers. Sure, not sure, definitely not — and then _I think_ and _maybe_ doing all the work in between, which is a great deal of work for two words.'],
  ['Interviewer', 'And _probably_?'],
  ['Ms Huda', 'I ask people what it means when they write it, and the answer is almost always the same once they have thought about it: it means I have a reason and I have not checked it. Which is a perfectly respectable position and is not what the word says.'],
  ['Interviewer', 'You are fond of one of the nine in particular.'],
  ['Ms Huda', '_Could conceivably._ It is the least used and the most useful, because it is how you put something on the record that you do not believe — so that nobody later has to be the person who raises it. Everybody has needed that and almost nobody has had the form for it.'],
  ['Interviewer', 'Why do you insist on the hedge being inside the verb?'],
  ['Ms Huda', 'Because a hedge in a clause of its own can be deleted by anybody who handles the page. _It is possible that_ comes off in one stroke and nobody notices. _May well_ cannot be removed without rewriting the sentence, so it travels with the claim.'],
  ['Interviewer', 'And when two people look at the same thing and both say it must mean something?'],
  ['Ms Huda', 'Then neither of them is lying and neither of them has made a deduction. They are reading it from the direction of the thing they are responsible for, and what they have done is not inflate the evidence — nobody does that — but inflate the modal. It is invisible from inside.'],
  ['Interviewer', 'How are those settled?'],
  ['Ms Huda', 'Nearly always by something that was in the room the whole time and that neither party had examined. A date on the back of a sheet. A delivery book. People look for new evidence and the answer is usually under their hand, unturned, because they were both busy reading the front.'],
  ['Interviewer', 'What do your students find hardest?'],
  ['Ms Huda', 'Writing down that they are going on nothing. The grammar takes a fortnight. Saying _I have found this easier to believe than the alternative_ about a sentence you have repeated for two years takes considerably longer, and one of them did it this term and it is the best thing anybody has handed me.'],
]));
out.push(p('**C  Writing.** Write the page in three paragraphs (180+ words): what you know with each inference beside the thing it rests on, what follows from all of it, and what you are guessing at, labelled.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 4)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ name the nine steps in order and move a claim up or down one',
  '☐ keep the hedge inside the verb rather than in a clause of its own',
  '☐ speculate about the past and attach **what I am going on** to each claim',
  '☐ use _needn\'t have_ correctly, about myself',
  '☐ speak for a **full minute** on two photographs, in the four moves',
  '☐ answer in the first second of a thirty-second turn, without summarising',
  '☐ withdraw one half of a claim and keep the other, narrower, half',
  '☐ put an inference in the sentence after the thing it rests on, and label a guess',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: UNIT 5 – NOT ONLY, BUT', [
  'Unit 4 was about how sure you are. **Unit 5** is about **word order**: which part of a sentence a reader meets first, and what that does to what they remember.',
  '**5.2 is inversion after a negative adverbial** — _not only … but also_, _at no point_, _rarely_, _under no circumstances_ — and it is the first grammar in this book that looks like a trick and is not. **5.4 takes the cleft from B1 22.2 and adds the other three shapes.**',
  '⚠ **Bring one sentence of yours that somebody quoted back to you** — in a meeting, in an email, in a minute — **and one that you expected to be quoted and that nobody noticed.** 5.5 is built on the pair, and the comparison only works if both are real.',
  '**And bring the 1.7 essay again.** It is not needed until Unit 12, but a class that has lost it by Unit 5 will have lost it by Unit 12, and the Mid-Book Test after Unit 6 is the last time anybody will remind you.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B2 · Book 1 · Syria Edition · Unit 4 · Student\'s Book');
