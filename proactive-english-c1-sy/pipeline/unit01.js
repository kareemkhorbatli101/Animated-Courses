// Proactive English C1 · Syria Edition · Book 1 · Unit 1 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WE CAN SEE THE METHOD…', 'WE CANNOT…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board — **correct, and still visible.** The room says what gives each one away.';
const slip = '**Peer review, C1 band 1.** ⚠ **Name the reader you are being** — the insurer, the referee, the parent, the desk — **and mark only what that reader would notice.** Then the criterion, **with the line copied**, and what that reader would do about it. **Nothing you notice as a classmate goes on the slip.**';

out.push(h1('Unit 1  The Sentence Nobody Notices'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  'This is the first unit of the fourth book in this course, and it is about **the point at which your English stops being visible.** Everything in the three books below this one was taught in a form where a reader can see the method working. ⚠ **That is why it could be learned. It is also why it is not the finished article.**',
  '**1.1** says what a year of work changed, in sentences whose reason is inside them.   **1.2** reads other people\'s _cannot yet_ lists and says what each one tells you about its writer.   **1.3** puts a reason inside a news sentence in a form nobody can argue with.   **1.4** hangs a claim on a participle clause and keeps the main clause for the news.   **1.5** finds the evidence that a habit has become automatic.   **1.6** writes the half-page whose method cannot be seen.   **1.7** explains to somebody a year behind you why a sentence of theirs is correct and still visible.',
  '**Exam practice in 1.7:** C1 Advanced **Reading and Use of English Part 3** (word formation), **Writing Part 1** (the essay, two of three points) and **Listening Part 1** (three extracts, two questions each).',
  '⚠ **Bring two things to the first lesson.** **One:** anything you wrote in English about twelve months ago that somebody else acted on. **Two:** the list of things you could not yet do, **if you made one.** **Most of you did not, and 1.1 is partly about that.**',
  '**And one thing that changes about the room itself.** ⚠ **The peer-review slip no longer asks what you think of the writing.** **It asks which reader you are being, and it marks only what that reader would notice.** **At C1 the question is never _is this good English_ — it is _does this work on this reader_**, and a reviewer who has not said which reader they are cannot answer it.',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));
out.push(sp());
out.push(box('Room 14, September — and ten people, two of whom have been here before', [
  '**Class 5A, Room 14, Mondays and Thursdays, half past five to half past seven.** **This is Ms Huda Saleh\'s fifteenth year of teaching and the fourth book she has taught this course from.**',
  '⚠ **Two of you were in this room in June and eight of you were not.** **Mrs Khoury** sub-edits a pharmacists\' trade bulletin; **Mr Attar** answers questions on a technical forum under his own name and has done for three years. **The other eight have never met this method**, and three of them learned their English somewhere that taught it differently.',
  '⚠ **And one thing was said in this room in June that has to be dealt with on the first evening.** **The last book ended by saying there would be no course after it, and no teacher to tell anybody what to do next.** **That was true when it was said.** **Eight of the eleven people who heard it are not here.** ⚠ **Ms Huda has their eleven _cannot yet_ lists in a folder, and nine of the eleven belong to people who are not in this room** — **and 1.2 reads them, because they are the most useful thing this class has been given and nobody wrote them for us.**',
  '⚠ **One more change, and it is about the front of the room.** **Ms Huda: _I shall be saying less this year, and you will mind it._** **For three books the pattern has been that somebody asks and I answer, and then the box prints what I said.** **This year the box prints what one of you said.** **I shall still be here; I shall simply stop being the person the sentence comes from.**',
], C.lyellow, C.orange));

// ===================== 1.1 =====================
out.push(pb());
out.push(h2('1.1  The year the work stopped showing'));
out.push(p('**Function:** saying what a year of work changed, in sentences whose reason is inside them   ·   **Grammar:** the news and the reason in one sentence   ·   **Pronunciation:** holding a sentence to the end without a reset'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing your work in English changed in the last twelve months**, in **one** sentence, **with the reason inside it and not after it.** ⚠ **Nobody is allowed a second sentence.** Your teacher writes the ten on the board and marks the ones that needed two.'));
out.push(board('We changed the form. The reason was that nobody could find the date.', 'We changed the form, the date having been in three places on it since 2019.'));
out.push(p('**b**  Which of these could a reader argue with? **1** _We cannot certify the frame because we think the bolts may be wrong._  **2** _We cannot certify the frame, the bolts having been supplied to the wrong specification._  **3** _Unfortunately we are unable to certify the frame at this stage._  **4** _We cannot certify the frame, which is disappointing for everybody._  **5** _We cannot certify the frame, the specification on the delivery note of 4 August reading M16 and the bolts measuring M12._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the difference is between a B2 sentence and a C1 sentence?   **A** the C1 one is longer   **B** **the B2 one is not wrong — it is visible**, and a reader can see the writer deciding what order to put things in   **C** the C1 one has fewer mistakes'));
out.push(p('**b**  Listen again. **1** What was Mr Attar told to do in June, and what did he do?   **2** What did Mrs Khoury do, and what does she say she has found out from it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.1  Two people who were here in June', [
  ['Ms Huda', 'Ten of you, and I am going to say very little this evening, which is deliberate and which I shall explain at the end. Mr Attar — you were in this room in June. What were you told to do?'],
  ['Jad', 'Keep a list. Take three models out of the last book and write, for each one, what the harder version would have to hold.'],
  ['Ms Huda', 'And?'],
  ['Jad', '⚠ **I did not keep it.** I asked the question — _is there anything to do now?_ — and I was given the answer and I did nothing with it. **I have been thinking about that since about the middle of July.**'],
  ['Dr Qabbani', 'May I ask why? You asked the question.'],
  ['Jad', '⚠ **Because asking it was the part that felt like work.** **I think I believed that having asked was most of it.**'],
  ['Mrs Khoury', 'I kept mine. ⚠ **And the useful thing was not the list, it was the question I had to ask about every item on it** — _is the B2 version automatic for me?_ — **because the answer was no eight times out of eleven.**'],
  ['Mr Zahreddine', 'Eight out of eleven sounds like a bad result.'],
  ['Mrs Khoury', '⚠ **It is the only good result available.** **If I had written _yes_ to all eleven I would have had a page of eleven things to practise and no idea which three to start with.** **Three noes are a syllabus. Eleven yeses are a mood.**'],
  ['Ms Huda', 'Mr Attar, you have both papers in front of you now. Read the two sentences.'],
  ['Jad', '_We cannot print the order by 2 April._ Full stop. _The roller has been out since 6 March._ That is what I would have written in June. ⚠ And the other one: _we cannot print the order by 2 April, the roller having been out since the sixth of March._'],
  ['Mrs Oueidat', 'The second one is not shorter. It is one word longer.'],
  ['Jad', '⚠ **No, and that is the thing.** **It is one word longer and it cannot be answered.** **In the first version the reason is a separate sentence, so a reader can take the first sentence and argue with it on its own.**'],
  ['Mr Tayara', 'I send about forty letters a term to parents and I have never once thought about that.'],
  ['Mrs Khoury', '⚠ **It is worse than not arguing with it.** **In the two-sentence version a reader can see you deciding what order to put things in** — **and once a reader can see you deciding, the decision is something they can have an opinion about.**'],
  ['Mrs Ajouz', 'So the first version is wrong.'],
  ['Mrs Khoury', '⚠ **It is not wrong at all. It is visible.** **That is the whole of the difference and it took me a year to be able to say it.**'],
  ['Mr Shihabi', 'My desk editor rewrites me every week and I have never understood on what principle. That might be it.'],
  ['Ms Huda', 'Mrs Rizk, you have been writing it down.'],
  ['Mrs Rizk', '⚠ **_A fact with a date cannot be argued with and a reason with a feeling can._** **That is what I have written, and I think it is the test.** _Since 6 March_ is a date. _Unfortunately_ is a feeling.'],
  ['Mrs Tarabishi', 'And a reason you cannot argue with is a reason nobody answers. Which is either very useful or slightly dishonest.'],
  ['Mrs Rizk', '🔊 ⚠ **It is useful when the fact is true and dishonest when it is arranged.** **Both of those are available and the sentence looks the same from outside** — **which is the thing I shall be watching for in my own writing this year.**'],
]));
out.push(sp());
out.push(box('Language box – the news and the reason in one sentence', [
  '**At B2 you wrote two sentences and were taught to keep them apart.** _We cannot print the order by 2 April._ _The roller has been out since 6 March._ ⚠ **At C1 the reason goes inside the news sentence:** _we cannot print the order by 2 April, **the roller having been out since the sixth of March.**_',
  '⚠ **The B2 version is not wrong. It is visible.** **In the two-sentence version a reader can take the first sentence and argue with it on its own — and can see you deciding what order to put things in.** **Once a reader can see you deciding, the decision is something they can have an opinion about.**',
  '**The test, and Mrs Rizk\'s is the shortest form of it.** ⚠ **A fact with a date cannot be argued with and a reason with a feeling can.** _Since the sixth of March_ · _the delivery note of 4 August reading M16_ · _eleven of the forty_. Against: _unfortunately_ · _we felt_ · _it seemed best_ · _at this stage_.',
  '**The three shapes, and Unit 1 teaches all three.** **1** _..., the roller **having been** out since 6 March._ **2** _..., the specification on the note **reading** M16._ **3** _**Having been refused twice on the same ground**, we have changed the ask._ ⚠ **All three put the reason in a part of the sentence a reader cannot answer separately**, because none of the three is a sentence.',
  '⚠ **And the warning, which belongs here and not at the end of the unit.** **A reason you cannot argue with is a reason nobody answers** — **which is useful when the fact is true and dishonest when it has been arranged.** **Both are available and the sentence looks identical from outside.** **That is the thing to watch in your own writing, not in anybody else\'s.**',
  '**What it is not.** ⚠ **It is not a longer sentence.** The two-sentence version above is sixteen words and the joined one is seventeen. **Length is the commonest thing mistaken for this**, and a forty-five-word sentence with the reason inside it is worse than two short ones.',
  '**Pronunciation.** 🔊 **Track 1.2** **Hold the sentence to the end without resetting.** ⚠ **There is a point about two-thirds through — just after the comma — where the voice wants to start again**, and the reset is where the sentence becomes two again. **Say it once with the reset and once without, and listen to what the reset does to the reason.**',
  '**Practise:** Join the news and the reason, in one sentence, with a fact that has a date in it. **1** a delivery you cannot make  **2** a date you cannot meet  **3** a figure you have had to change  **4** something you can now do that you could not in September  **5** a decision somebody else made that you have to pass on',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A takes a row from the card and gives **the two-sentence version first and the joined version second.** B does one thing only: **says which of the two they could argue with, and how.** ⚠ **Two rows on each card cannot be joined at all**, because the reason in them is a feeling and not a fact — **and B has to say so rather than accepting a joined sentence that only sounds joined.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(two sentences)_ __________. __________.   _(joined)_ __________, __________ __________.'],
  ['B', 'I could argue with __________, because __________.'],
  ['B', 'Joinable: **yes / no** — and if no, **the reason is a feeling and not a fact.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_The schedule has slipped eleven days. The older machine carries a fifth, not a third._', '_We cannot take the batch. Four pallets were eleven degrees over._'],
  ['_⚠ We have changed the form. It seemed best._', '_⚠ The post has been filled. We felt you would not be happy in it._'],
  ['_The timetable was corrected in February. The 06.20 had been printed as 06.40 since 2019._', '_The paper was returned. The reason given was language._'],
  ['_⚠ I am not applying. The whole thing is rather daunting._', '_⚠ We have withdrawn the offer. There were various considerations._'],
  ['_Nine of the forty went out incomplete. The refusal code was on no slip until 12 March._', '_The frame cannot be certified. The delivery note of 4 August reads M16 and the bolts measure M12._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the ten rows, whether the joined version can be argued with, and where the fact\'s date is. Then the count: **the four rows marked ⚠ produced no joinable sentence**, all four having a reason made of a feeling — _it seemed best_ · _we felt_ · _rather daunting_. ⚠ **A reason with no fact in it cannot go inside a news sentence, and a writer who tries produces a sentence that sounds joined and is not.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own sentence from Stage 1 and write it twice: **the two-sentence version and the joined one.** ⚠ **Underline the fact and circle its date.** **If there is no date, the sentence will not join**, and the work is to go and find the date before you try again.'));
out.push(p('**b**  Swap. Your partner reads **only your joined sentence** aloud, **once with a reset after the comma and once without**, and says what the reset did to the reason. ⚠ Then the hard one: **your partner tries to argue with your joined sentence.** **If they can, the reason is still a feeling.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda said she would be saying very little, which was deliberate, and asked Mr Attar what he had been told to do in June. Keep a list: take three models out of the last book and write, for each, what the harder version would have to hold. He did not keep it. He asked the question — is there anything to do now? — was given the answer, and did nothing with it, and he has been thinking about that since the middle of July. Dr Qabbani asked why, since he had asked the question, and because asking it was the part that felt like work: he thinks he believed that having asked was most of it. Mrs Khoury kept hers, and the useful thing was not the list but the question she had to ask about every item on it — is the B2 version automatic for me? — because the answer was no eight times out of eleven. Mr Zahreddine said eight out of eleven sounded like a bad result, and it is the only good result available: eleven yeses would have left her with eleven things to practise and no idea which three to start with. Three noes are a syllabus and eleven yeses are a mood. Then Mr Attar read the two sentences. We cannot print the order by 2 April, full stop, the roller has been out since 6 March — which is what he would have written in June. And the other: we cannot print the order by 2 April, the roller having been out since the sixth of March. Mrs Oueidat pointed out that the second is not shorter but a word longer, and that is the thing: it is a word longer and it cannot be answered, because in the first version the reason is a separate sentence and a reader can take the first sentence and argue with it on its own. Mr Tayara said he sends about forty letters a term to parents and has never once thought about that. Mrs Khoury said it is worse than not arguing with it: in the two-sentence version a reader can see you deciding what order to put things in, and once a reader can see you deciding, the decision is something they can have an opinion about. Mrs Ajouz asked whether the first version is therefore wrong, and it is not wrong at all — it is visible, and that is the whole of the difference, and it took Mrs Khoury a year to be able to say it. Mr Shihabi said his desk editor rewrites him every week and he has never understood on what principle, and that might be it. Then Mrs Rizk, who had been writing it down: a fact with a date cannot be argued with and a reason with a feeling can. Since 6 March is a date; unfortunately is a feeling. Mrs Tarabishi said that a reason you cannot argue with is a reason nobody answers, which is either very useful or slightly dishonest — and it is useful when the fact is true and dishonest when it has been arranged, and both are available, and the sentence looks the same from outside._'));
out.push(p('**Listener task:** write your partner\'s joined sentence and mark where its fact\'s date is.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mr Tayara sent to parents in September. Answer the questions.'));
out.push(model([
  '**AL-MAHABBA SCHOOL, MEZZEH** · _to parents of pupils in years 7 to 9_ · **14 September**',
  '**Dear parents,** **the school day will begin at twenty past eight from 28 September, the gate having been closed by the municipality on three mornings in June for work on the water main and the queue having reached the junction on each of them.** The ten minutes are not a change to teaching time; they are a change to the arrival window, and the second bell stays where it was.',
  '**Three things follow from it and I would rather set them out now than answer them one at a time.** **Buses booked through the school will run ten minutes later, the operator having agreed the change in writing on 9 September.** **Pupils who arrive before ten past eight will be admitted to the hall rather than kept at the gate, which is what happened in June and is the part I am least satisfied with.** And **the register will close at half past eight, five minutes later than at present, the five minutes having been taken from the form period and not from the first lesson.**',
  '**I am aware that twelve families drop two children at two schools in the same fifteen minutes.** **I have written separately to the four of you whose other school starts at twenty past eight as well**, because the arithmetic does not work for those four and I am not going to pretend from this letter that it does. **If you are one of the twelve and you have not had a separate letter by Thursday, the fault is mine and a telephone call will fix it the same day.**',
  '**On the June mornings themselves.** **Forty-one pupils were marked late on 4 June, thirty-six on the eleventh and nineteen on the eighteenth.** **None of the ninety-six marks has been kept**, the cause having been outside the pupils\' control and outside ours; the register shows the three mornings as closed rather than as late. **Where a late mark from June has already been mentioned to you in a report, that report is wrong and the form tutor will say so in writing.**',
  '**What I am not doing, and one parent has already asked.** **I am not moving the end of the day**, the afternoon buses being booked against a timetable four other schools share. **And I am not opening the gate earlier than ten past eight**, there being nobody on duty before that and no sum of money this term that would put somebody there. **If either becomes possible in January I shall write again and say so.**',
  '**One request.** **Tell your son or daughter about the twenty past eight before the twenty-eighth and not on it.** **Sixty-odd pupils heard about the June closures from the queue itself**, and the ones who had been told the night before were the ones who arrived in a usable condition to start a lesson.',
  '**Yours sincerely,** **M. Tayara** · _Head_',
]));
out.push(item('1', 'Find three sentences in which the reason is inside the news. What kind of fact does each reason use?'));
out.push(item('2', 'Which two things does he say he is **not** doing, and what reason does he give for each?'));
out.push(item('3', 'He says one part of what happened in June is the part he is least satisfied with. Which, and why does saying so help the letter?'));
out.push(writers([
  'A letter whose news carries its reasons: **the change with its reason inside the same sentence** → **what follows from it, each with its own fact** → **the people for whom it does not work, named and written to separately** → **the figures from what went wrong** → **what you are not doing, with a reason that is also a limit** → **and one request to the reader.**',
  '⚠ **Put the reason inside the news and make it a fact with a date.** _..., the gate having been closed by the municipality on three mornings in June._ **A reason that is a feeling will not join** — _it seemed best_ produces a sentence that only sounds joined.',
  '**Give the figures for the thing that went wrong, not for the thing that went well.** _Forty-one on 4 June, thirty-six on the eleventh, nineteen on the eighteenth._ ⚠ **A reader given the bad count stops looking for it; a reader given a total starts.**',
  '**Name the people the change does not work for, and say you are not pretending it does.** ⚠ _The arithmetic does not work for those four and I am not going to pretend from this letter that it does._ **Then give them a deadline and take the fault in advance:** _if you have not had a letter by Thursday, the fault is mine._',
  '⚠ And **the refusals carry reasons that are also limits.** _..., there being nobody on duty before that and no sum of money this term that would put somebody there._ **A refusal whose reason is a fact about the world cannot be met by a better request** — **the kindest form of no, because it stops the reader working on one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter whose news carries its reasons (120 words or more).'));
out.push(p('**______________** · _to _______________ · **______________**   **Dear ______________,** **______________ will ______________ from ______________, ______________ having ______________ on ______________.** ______________.   **Three things follow from it.** **______________, ______________ having ______________ in writing on ______________.** **______________, which is ______________ and is the part I am least satisfied with.** And **______________, the ______________ having been taken from ______________ and not from ______________.**   **I am aware that ______________.** ⚠ **I have written separately to ______________**, because **______________ and I am not going to pretend from this letter that it does.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The reason inside the news sentence, not in a sentence of its own',
  'Every reason a fact, and every fact with a date, a figure or a document',
  'The people it does not work for, named — and no pretence that it does',
  'No sentence over forty-five words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room says what fact the reason rests on and where its date is.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the news with its reason inside it, what follows, the people it does not work for, the figures from what went wrong, what you are not doing, and one request.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the reason inside the news, every reason a fact with a date, the people it fails named, and the refusal\'s reason also a limit.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their opening sentence aloud twice — once with a reset after the comma and once without — and the room says what the reset did to the reason.** ⚠ **Then somebody who has not read tries to argue with the version that had no reset.** **If they can, the reason was a feeling.** Then the sentence the cycle ends on, which is Mrs Khoury\'s: **it is not wrong at all; it is visible.**'));
out.push(hw('Take **the thing you brought** — something you wrote in English about a year ago that somebody acted on — and **rewrite its first two sentences as one.** ⚠ **Then do the harder half: write down what fact the reason now rests on, and whether you had that fact a year ago.** **In about half of these the fact was available and was not used**, which is a finding about habit and not about grammar. **Bring both versions and the one line about the fact.** **1.2 reads nine lists written by people who are not in this room**, and the thing to notice about them is the same thing: **what each writer had and did not use.**'));

// ===================== 1.2 =====================
out.push(pb());
out.push(h2('1.2  Nine lists, written by people who are not here'));
out.push(p('**Function:** reading somebody else\'s _cannot yet_ list and saying what it tells you about the writer   ·   **Grammar:** _I cannot yet ___ without ____ · the condition that makes a limitation testable   ·   **Pronunciation:** reading somebody else\'s limitation aloud with no commentary'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads out **one line from each of nine lists** and nothing else — no names, no jobs. ⚠ **Say nothing about the English.** For each line, one guess only: **what kind of work does this person do?** Your teacher writes the nine guesses on the board beside the nine lines.'));
out.push(board('This one is quite weak at listening, I think.', 'This one works somewhere two people talk to him at once.'));
out.push(p('**b**  Which of these could somebody set up and watch? **1** _I cannot yet follow two people arguing on a telephone line at the same time._  **2** _I cannot yet read a sixty-page contract in a morning without a note from somebody else._  **3** _My listening is still weak._  **4** _I cannot yet take a minute in the room and have it readable without rewriting it afterwards._  **5** _I cannot yet stop hearing three words that were written about me in November._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room find out about **eight** of the nine lists, and what is different about the ninth?   **A** eight are too short   **B** **eight name a condition — _without_, _at the same time_, _in a morning_ — and are therefore testable; the ninth names a feeling**, and it was written by the strongest writer in that room   **C** eight are about listening'));
out.push(p('**b**  Listen again. **1** What does Mrs Tarabishi say you can only name a limitation in?   **2** What does Mr Attar say about his own list, which he did not write?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.3  The folder', [
  ['Ms Huda', 'There are eleven lists in this folder. Two of them belong to people in this room. Nine do not. I have not read them aloud to anybody and I am not going to summarise them. Mrs Oueidat, read the first line of the one in front of you.'],
  ['Mrs Oueidat', '_I cannot yet follow two people arguing on a telephone line at the same time._'],
  ['Mr Shihabi', 'That is somebody who takes calls for a living and has been losing one of the two speakers.'],
  ['Mrs Oueidat', '⚠ **And it is a sentence you could test in four minutes with two colleagues and a handset.** **That is not an accident. It has _at the same time_ in it.**'],
  ['Mr Tayara', 'Mine says: _I cannot yet read a sixty-page contract in a morning without a note from somebody else._ ⚠ **_Without_ is doing the same job as _at the same time_.**'],
  ['Mrs Tarabishi', 'Mine too. _I cannot yet take a minute in the room and have it readable without rewriting it afterwards._ ⚠ **Every one of these has a condition in it, and the condition is what makes it watchable.**'],
  ['Dr Qabbani', 'Mine has no condition. _I cannot yet stop hearing three words that were written about me in November._'],
  ['Ms Huda', 'Read it again, please, and stop there.'],
  ['Dr Qabbani', '_I cannot yet stop hearing three words that were written about me in November._ ⚠ **Nobody can set that up and watch it.** **It is the only one of the nine that is not testable.**'],
  ['Mrs Rizk', 'And is it the weakest list?'],
  ['Mrs Khoury', '⚠ **It is the only one written by somebody who had been assessed against published criteria and had to sign the assessment.** **She spent a year not understanding three words.** **I would not call it the weakest; I would call it the one that does not belong on this kind of paper.**'],
  ['Mrs Tarabishi', '⚠ **Which is the part I want to say out loud, because it is about all nine.** **You can only name a limitation in the terms you already work in.** **A man who takes calls names it in speakers; a woman who takes minutes names it in minutes; somebody who was assessed names it in the three words of the assessment.**'],
  ['Mr Zahreddine', 'Then the list tells you the method and not the gap.'],
  ['Mrs Tarabishi', '⚠ **It tells you both, and the gap you cannot see is the one that has no term in it.** **None of these nine mentions anything they have never had a word for** — **and that is not a fault in the lists; it is the shape of the exercise.**'],
  ['Mrs Ajouz', 'May I say something as the person who did not take this course? ⚠ **I have never in my life been asked to write one of these.** **I have been asked what level I am about nine times.**'],
  ['Mr Shihabi', 'And what did you answer?'],
  ['Mrs Ajouz', '⚠ **B2, which is on a certificate and is true and tells nobody anything.** **I could not have written any of these nine lines and I have been working in English for eleven years.**'],
  ['Jad', 'Mine is in that folder and I did not write a _cannot yet_ list in June. I wrote the one the lesson asked for and then I did not keep the other paper.'],
  ['Ms Huda', 'Read yours, please.'],
  ['Jad', '_I cannot yet answer a question on the forum without reading my own answer four times._ ⚠ **Which is true, and the condition is _without reading it four times_, and the number is still four.**'],
  ['Mrs Khoury', '🔊 ⚠ **And that is the use of these nine.** **Eight of us in this room have never written one** — **and eight lines written by strangers are easier to learn from than one line written by yourself, because nobody is defending any of them.**'],
]));
out.push(sp());
out.push(box('Language box – reading a limitation as data', [
  '**The shape that makes a limitation testable, and eight of the nine have it.** ⚠ **A condition.** _I cannot yet follow two people arguing on a line **at the same time**._ · _..._ **_without_** _a note from somebody else._ · _..._ **_in a morning_**_._ · _..._ **_and have it readable without rewriting it afterwards_**_._ **The condition is what somebody else could set up and watch.**',
  '**And the one that has none.** _I cannot yet stop hearing three words that were written about me in November._ ⚠ **Nobody can set that up and watch it** — **and it was written by the only person in that room who had been assessed against published criteria and had to sign the assessment.** **It is not the weakest list. It is the one that does not belong on this kind of paper.**',
  '⚠ **The finding, and Mrs Tarabishi\'s words are the ones to keep: you can only name a limitation in the terms you already work in.** **A man who takes calls names it in speakers; a woman who takes minutes names it in minutes; somebody who was assessed names it in the three words of the assessment.** **So the list tells you the writer\'s method as well as the writer\'s gap.**',
  '⚠ **And therefore the gap you cannot see is the one that has no term in it.** **None of the nine mentions anything its writer has never had a word for.** **That is not a fault in the lists; it is the shape of the exercise** — **and it is the reason the other half of your own list has to come from somebody else.**',
  '**What a reader of one of these does, and does not do.** ⚠ **Does:** name the condition · say what the writer\'s terms are · say what could be set up and watched. ⚠ **Does not:** say anything about the English, rank the lists, or guess at the person. **A list is evidence about work, not a report on a learner.**',
  '**Why nine strangers\' lists are more use than your own one.** ⚠ **Nobody in the room is defending any of them.** **Eight of the ten people here have never written one at all** — and **a line written by a stranger can be read for its shape, which is impossible with your own.**',
  '**Pronunciation.** 🔊 **Track 1.4** **Read somebody else\'s limitation flat, at ordinary speed, and stop at the full stop.** ⚠ **Do not add _which is quite common_ or _I think that is about speed_.** **The commentary is where a reading turns into a verdict**, and the owner of the line is not in the room to answer it.',
  '**Practise:** Read a line and name its condition in four words. **1** one with _without_ in it  **2** one with _at the same time_  **3** one with a unit of time  **4** one with a number in it  **5** one with no condition at all — and say what could be done about that',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, each with four lines from the folder and **no names.** A reads one line; B does three things and nothing else: **names the condition, says what the writer\'s terms are, and says how it could be set up and watched.** ⚠ **One line on each card has no condition in it**, and B must say so and then do the harder thing — **supply a condition that would make it testable, and say whether it is still the same limitation.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads a line)_ __________.'],
  ['B', 'Condition: __________.   Terms: __________.   Watchable by __________.'],
  ['B', 'No condition — **a version with one would be __________, and that is / is not the same limitation.**'],
]));
out.push(table(['Card A – four lines from the folder', 'Card B – four lines from the folder'], [
  ['_…follow two people arguing on a line at the same time._', '_…read a sixty-page contract in a morning without a note._'],
  ['_…answer a question on the forum without reading it four times._', '_…take a minute in the room and have it readable without rewriting it._'],
  ['_…refuse a batch in writing without softening the first sentence._', '_…chair a meeting in English when two of the four outrank me._'],
  ['_⚠ …stop hearing three words written about me in November._', '_⚠ …feel confident when the other person is a native speaker._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the eight conditions, and the two lines that have none. ⚠ **The two conditionless lines are not the same as each other**, and that is the finding: _three words written about me in November_ **is specific and untestable**, while _feel confident when the other person is a native speaker_ **is neither.** **One is a real thing in the wrong document; the other is the sentence this course has spent four years removing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **your own three lines**, each with a condition in it, each one somebody could set up and watch. ⚠ **Then mark your terms**: the words your three lines are made of — _speakers_, _slips_, _batches_, _clauses_, _paragraphs_ — **and ask what you have no word for.**'));
out.push(p('**b**  Swap with somebody whose work is not like yours. ⚠ **Your partner adds a fourth line for you, in their terms and not in yours**, and you say whether it is true. **About half of these turn out to be true and are the half of the list nobody can see for themselves.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _There were eleven lists in the folder, two belonging to people in the room and nine not, and Ms Huda neither read them aloud nor summarised them. Mrs Oueidat read the first line of hers: I cannot yet follow two people arguing on a telephone line at the same time. Mr Shihabi said that is somebody who takes calls for a living and has been losing one of the two speakers, and Mrs Oueidat said it is a sentence you could test in four minutes with two colleagues and a handset, which is not an accident, because it has at the same time in it. Mr Tayara\'s said: I cannot yet read a sixty-page contract in a morning without a note from somebody else — and without is doing the same job as at the same time. Mrs Tarabishi\'s was the minute that is not readable without rewriting, and she said every one of these has a condition in it and the condition is what makes it watchable. Then Dr Qabbani said his had no condition: I cannot yet stop hearing three words that were written about me in November. Asked to read it again and stop there, he said nobody can set that up and watch it, and it is the only one of the nine that is not testable. Mrs Rizk asked whether it is the weakest list, and Mrs Khoury said it is the only one written by somebody who had been assessed against published criteria and had to sign the assessment, and who spent a year not understanding three words — not the weakest, but the one that does not belong on that kind of paper. Then Mrs Tarabishi said the thing that is about all nine: you can only name a limitation in the terms you already work in. A man who takes calls names it in speakers, a woman who takes minutes names it in minutes, somebody who was assessed names it in the three words of the assessment. Mr Zahreddine said the list therefore tells you the method and not the gap, and it tells you both — and the gap you cannot see is the one that has no term in it, because none of the nine mentions anything its writer has never had a word for, which is the shape of the exercise and not a fault in the lists. Mrs Ajouz, who did not take this course, said she has never been asked to write one of these and has been asked what level she is about nine times; her answer is B2, which is on a certificate and is true and tells nobody anything, and she could not have written any of the nine lines. Mr Attar said his is in the folder and he did not write a cannot yet list in June — he wrote the one the lesson asked for and did not keep the other paper. His line: I cannot yet answer a question on the forum without reading my own answer four times, and the number is still four. And Mrs Khoury said that is the use of the nine: eight people in the room have never written one, and eight lines written by strangers are easier to learn from than one line written by yourself, because nobody is defending any of them._'));
out.push(p('**Listener task:** write the fourth line your partner wrote for you, and whether it is true.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read four of the nine lists, as they came out of the folder. Answer the questions.'));
out.push(model([
  '**FROM THE FOLDER** _(four of nine · names withheld until Stage 6 · one side of paper each)_',
  '**ONE.** _You are being given this instead of my certificate. The certificate says B2 and tells you nothing about where to start._ **1 I cannot yet take a telephone handover from a site manager and act on it without ringing back for one thing.** You could watch this: eleven sites, about ninety faults a month, and the ring-back is almost always the model number. **2 I cannot yet write to eleven people in one letter and have all eleven act.** Two of them never got the new sheet and I did not find out for five months. **3 I cannot yet tell, in the first minute of a call, whether the fault is the machine or the person.** That is not English and I am writing it anyway, because the two calls need different first questions and I ask the same one.',
  '**TWO.** **1 I cannot yet refuse a batch in writing without softening the first sentence.** Four pallets eleven degrees over, and my letter of three withdrawals buried it so well that neither side mentioned it for seven weeks. **2 I cannot yet put a figure in a refusal and leave it alone.** I give it and then I give a second reason, and the second reason is always the weaker one. **3 I cannot yet write a criterion that somebody could fail.** I have written forty and two of them can be failed. The other thirty-eight were approved in eleven minutes, which is how long it takes to approve a page nobody can argue with.',
  '**THREE.** **1 I cannot yet rewrite a clause for the person it is about and keep it a clause.** Nineteen years, and nobody had ever asked me to until last October. **2 I cannot yet write four lines that are an argument rather than four lines.** My first essay in the last book was four lines and I did not know what an essay was; I know now, and I still have the four lines. **3 I cannot yet read my own paragraph as somebody who is going to be refused by it.** I have tried four times. Each time I read it as the man who wrote it and found nothing wrong, and each time somebody at a counter found the thing in about nine seconds.',
  '**FOUR.** **1 I cannot yet stop hearing three words that were written about me in November.** _Range not demonstrated._ Second observation, first year. **2 I cannot yet write an observation on somebody else without putting the three words in my own hand into it somewhere.** **3 I cannot yet sign an assessment I disagree with and say so on the same sheet.** I have signed four and said so on none. There is a box on the form for it and the box is eleven lines deep, so somebody intended it to be used.',
  '⚠ **One of these four is not like the other three, and the difference is not quality.**',
]));
out.push(item('1', 'Which three of the four lists are testable throughout, and what makes each line testable?'));
out.push(item('2', 'List FOUR is the odd one. What is each of its three lines about, and why can none of them be watched?'));
out.push(item('3', 'Two of the lists contain a line their writer says is not about English. Find them, and say why they were written down anyway.'));
out.push(writers([
  'Four lines, in the shape the folder uses: **a line saying why this and not a certificate** → **three items, each with a condition** → **the evidence beside each one, as a figure or a date** → **one item marked as not being about English** → **and the word _yet_ in every line.**',
  '⚠ **Put the condition in, and the condition is the whole of it.** _..._ **_without ringing back for one thing_**_._ **A line with no condition cannot be watched**, and a line nobody can watch is a line the next reader can only agree with.',
  '**Give the evidence as a figure or a date, immediately after the line.** _Eleven sites, about ninety faults a month, and the ring-back is almost always the model number._ ⚠ **A limitation with a figure beside it is a record; the same limitation alone is a confession**, and the two are read quite differently.',
  '**Mark the item that is not about English, and write it anyway.** ⚠ _That is not English and I am writing it anyway._ **About half of what people put on these lists belongs to an organisation and not to a language** — **and a reader who is told which half is which can act on both.**',
  '⚠ And **keep the word _yet_ in every line.** _I cannot do it yet_ has a date in it somewhere; _I cannot do it_ is a description of a person. **One word, and it is the only one in the document that is doing any comforting.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own list, in the folder\'s shape (120 words or more).'));
out.push(p('**FOR WHOEVER TEACHES ME NEXT** · ______________ · _one side of paper_   **You are being given this instead of ______________.** **The certificate says ______________ and tells you ______________.**   **1  I cannot yet ______________ without ______________.** ⚠ **You could watch this: ______________.**   **2  I cannot yet ______________ at the same time as ______________.** **The evidence is ______________.**   **3  I cannot yet ______________ in ______________.** ⚠ **I can ______________, so this is a ______________ problem and not a ______________ problem.**   **And one that is not about English.** ⚠ **______________, and I am writing it anyway.**   **The order I would do them in.** ⚠ **______ first, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'A condition in every line — _without_, _at the same time as_, a unit of time, a number',
  'Evidence beside each line, as a figure or a date',
  'One item marked as not being about English',
  'The word _yet_ in every line, and no sentence over forty-five words',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their conditions** — _without ringing back_, _at the same time as_, _in a morning_ — and the room says what terms each writer works in.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full list (260 words or more), to the shape in the writer\'s box: the line about the certificate, three items with conditions and evidence, one item that is not about English, and the order you would do them in.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a condition in every line, evidence as a figure or a date, one item marked as not about English, and _yet_ throughout.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Each student reads one line of somebody else\'s list aloud — flat, at ordinary speed, with no commentary — and the room names the condition in four words.** ⚠ **Anybody who adds _which is quite common_ or _that is about speed_ is stopped at once**, because the owner of the line is not in the room to answer it. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **nobody is defending any of them.**'));
out.push(hw('Write **your own list** — three items with conditions, evidence beside each, one item that is not about English, _yet_ in every line. ⚠ **Then do the part you cannot do alone: give it to the person you work most closely with and ask them for a fourth line in their terms.** **About half of those fourth lines are true**, and the half that are true are the half of your own list that is invisible from where you are standing. **Bring the fourth line, whether you accept it or not.** **1.3 is about the reason a reader cannot answer**, and it starts from the three words of a delivery note.'));

// ===================== 1.3 =====================
out.push(pb());
out.push(h2('1.3  The reason a reader cannot answer'));
out.push(p('**Function:** putting a reason inside a news sentence in a form nobody can argue with   ·   **Grammar:** the absolute construction — _the bolts having been supplied to the wrong specification_   ·   **Pronunciation:** the comma that is not a full stop'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one piece of news you have had to give at work this year, and the fact it rested on.** ⚠ **The fact must have a date, a figure or a document in it.** Your teacher writes the ten facts on the board — **the news is not written down at all** — and the room reads the ten facts and guesses the ten pieces of news.'));
out.push(board('We cannot certify it. The bolts look wrong to me.', 'The delivery note of 4 August reads M16 and the bolts measure M12.'));
out.push(p('**b**  Which of these could go inside a news sentence? **1** _it being a difficult situation for all concerned_  **2** _the roller having been out since 6 March_  **3** _the specification on the note of 4 August reading M16_  **4** _the matter having been considered carefully_  **5** _nine of the forty having gone out with the paperwork incomplete_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the construction will and will not carry?   **A** it carries anything if the grammar is right   **B** **it will carry a fact and it will not carry a judgement** — and a judgement put inside it reads as smuggling, because the reader cannot answer it separately   **C** it only works in letters'));
out.push(p('**b**  Listen again. **1** What happened to Mr Zahreddine\'s first note about the bolts?   **2** What does Mrs Oueidat say she has to do with these in court, and why is it the test?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.5  Twelve millimetres', [
  ['Ms Huda', 'Mr Zahreddine, you brought a note from August.'],
  ['Mr Zahreddine', 'Two notes about the same bolts. The first one said: _we are unable to certify the frame at this stage. The bolts appear to be of the wrong specification._ I had a telephone call about it the next morning that lasted fifty minutes.'],
  ['Mrs Rizk', 'About the word _appear_.'],
  ['Mr Zahreddine', '⚠ **About every word of it.** _At this stage_ — when, then? _Appear_ — to whom? **He had two sentences and he could argue with each of them separately, and he did, for fifty minutes.**'],
  ['Ms Huda', 'And the second note.'],
  ['Mr Zahreddine', '_We cannot certify the frame, the delivery note of 4 August reading M16 and the bolts measuring M12._ ⚠ **No telephone call. A fax asking who had ordered them.**'],
  ['Mr Tayara', 'Which is a different conversation entirely.'],
  ['Mr Zahreddine', '⚠ **It is the conversation I wanted in the first place.** **The first note made the question _is Zahreddine sure_; the second made it _who ordered M12_.**'],
  ['Mrs Tarabishi', 'May I try one that I think fails? _We cannot fund the second year, the application having been weaker than we had hoped._'],
  ['Mrs Khoury', '⚠ **That is not a fact in there. That is a verdict wearing the clothes of a fact.**'],
  ['Mrs Tarabishi', 'But it is grammatical.'],
  ['Mrs Khoury', '⚠ **Perfectly. And that is the danger, not the defence.** **The construction puts the reason in a part of the sentence that is not a sentence, so there is nothing for a reader to disagree with** — **and if what you have put in there is a judgement, you have hidden a judgement where it cannot be answered.**'],
  ['Mrs Oueidat', '⚠ **This is the part I want to say, because I have to do it in a room where somebody is paid to object.** **I translate these into Arabic in court, and the test is the one I use every week: can I render it as a clause with a verb and a subject and have it still be true?**'],
  ['Dr Qabbani', 'And the weak one?'],
  ['Mrs Oueidat', '⚠ _The application was weaker than we had hoped_ — **and the moment it is a clause, counsel asks who hoped, and what the hope was, and whether it is written down anywhere.** **It was not a fact; it was only shaped like one.**'],
  ['Mr Shihabi', 'And the bolts one survives that.'],
  ['Mrs Oueidat', '⚠ **_The delivery note of 4 August read M16 and the bolts measured M12._** **Nobody asks who hoped.** **The note either reads M16 or it does not.**'],
  ['Mrs Ajouz', 'So the rule is: unroll it into a clause and see whether it still holds.'],
  ['Mrs Oueidat', '🔊 ⚠ **Unroll it, and if a question opens up that was not there before, you were smuggling.** **It is a four-second test and it is the only one I have ever needed.**'],
  ['Jad', 'And it works on your own writing, which is the hard part.'],
  ['Mrs Oueidat', '⚠ **It works best on your own writing**, because the sentences you smuggle in are the ones you cannot see — **you put them there precisely because you did not want them opened.**'],
]));
out.push(sp());
out.push(box('Language box – the absolute construction', [
  '**The shape.** **A noun phrase + a participle, set off by a comma, with no conjunction.** _We cannot certify the frame, **the delivery note of 4 August reading M16 and the bolts measuring M12.**_ · _We cannot print by 2 April, **the roller having been out since the sixth of March.**_ · _We have no figure for June, **the count having been taken on three mornings only.**_',
  '**Two forms, and the difference is time.** ⚠ **_having been_ + past participle** for something finished before the news — _the roller **having been** out since March_. ⚠ **_-ing_** for something still true as the news is given — _the note **reading** M16_. **A finished cause in the _-ing_ form reads as careless; a continuing one in the _having been_ form reads as evasive.**',
  '**What it will carry.** ⚠ **A fact: a date, a figure, a document, a measurement, a count.** _the delivery note of 4 August_ · _nine of the forty_ · _since the sixth of March_ · _M12_.',
  '**What it will not carry, and this is the whole of the cycle.** ⚠ **A judgement.** _..., the application having been weaker than we had hoped._ **That is grammatical, and being grammatical is the danger and not the defence.** **The construction puts the reason where no reader can answer it** — **so a judgement put in there is a judgement hidden where it cannot be answered.**',
  '⚠ **The test, and Mrs Oueidat does it in a room where somebody is paid to object: unroll it into a clause with a subject and a verb, and see whether it still holds.** _The delivery note of 4 August read M16_ — **nobody asks who hoped.** _The application was weaker than we had hoped_ — **and at once: who hoped, what was the hope, is it written down?** **If unrolling opens a question that was not there before, you were smuggling.**',
  '**And it works best on your own writing.** ⚠ **The sentences you smuggle are the ones you cannot see, because you put them there precisely to stop them being opened.** **Unroll your own three before you unroll anybody else\'s.**',
  '**Pronunciation.** 🔊 **Track 1.6** **The comma before the construction is not a full stop.** ⚠ **Keep the pitch up across it and come down only at the end.** **A reader who hears a full stop there hears two sentences** — and **two sentences is the B2 version, which you can already do.**',
  '**Practise:** Give the news with the fact inside it, then unroll the fact and check. **1** a date you cannot meet  **2** a batch you cannot accept  **3** a figure you have had to change  **4** a request you cannot grant  **5** one where the unrolling opens a question — and say what the question is',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a joined sentence from the card. B does one thing: **unrolls the construction into a clause with a subject and a verb, out loud**, and says whether a new question has opened. ⚠ **Two rows on each card open a question when unrolled**, and B has to name the question rather than simply saying the sentence is weak. Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________, __________ __________.'],
  ['B', 'Unrolled: **__________ __________ __________.**'],
  ['B', 'New question: **none / __________ ?**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_…, the roller having been out since the sixth of March._', '_…, the note of 4 August reading M16 and the bolts measuring M12._'],
  ['_⚠ …, the response having been disappointing._', '_⚠ …, the matter having been given careful consideration._'],
  ['_…, nine of the forty having gone out incomplete._', '_…, the count having been taken on three mornings only._'],
  ['_⚠ …, the candidate not having been quite what we were looking for._', '_⚠ …, it being felt that a fresh approach was needed._'],
  ['_…, the municipality having closed the gate on three mornings in June._', '_…, the operator having agreed the change in writing on 9 September._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the ten unrolled clauses, and the four that open a question. ⚠ **The four are _disappointing_, _careful consideration_, _not quite what we were looking for_ and _it being felt_** — and the last is the worst of the four, **because _it being felt_ has removed the person as well as the fact.** **Unrolled it is _it was felt_, and unrolled again there is nobody there at all.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own news and fact from Stage 1 and write the joined sentence. ⚠ **Then unroll your own construction into a clause, in writing, underneath it** — **and write the question it opens, if it opens one.** **If it opens one, the fact was a judgement and the work is to go and find a real fact.**'));
out.push(p('**b**  Swap. Your partner unrolls your sentence **without seeing your unrolling** and writes the question they find. ⚠ Then compare: **the two of you found the same question about a third of the time**, and where you did not, your partner\'s is the one to trust.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine brought two notes about the same bolts. The first said: we are unable to certify the frame at this stage; the bolts appear to be of the wrong specification. He had a telephone call about it the next morning that lasted fifty minutes. Mrs Rizk said it was about the word appear, and it was about every word of it: at this stage — when, then? appear — to whom? The client had two sentences and could argue with each of them separately, and did, for fifty minutes. The second note said: we cannot certify the frame, the delivery note of 4 August reading M16 and the bolts measuring M12. No telephone call — a fax asking who had ordered them. Mr Tayara said that is a different conversation entirely, and it is the conversation Mr Zahreddine wanted in the first place: the first note made the question is Zahreddine sure, and the second made it who ordered M12. Mrs Tarabishi then offered one she thought failed: we cannot fund the second year, the application having been weaker than we had hoped. Mrs Khoury said that is not a fact in there, that is a verdict wearing the clothes of a fact. Mrs Tarabishi said it is grammatical, and it is perfectly grammatical, and that is the danger rather than the defence: the construction puts the reason in a part of the sentence that is not a sentence, so there is nothing for a reader to disagree with, and a judgement put in there is a judgement hidden where it cannot be answered. Then Mrs Oueidat, who does this in a room where somebody is paid to object, gave the test she uses every week: can I render it as a clause with a verb and a subject and have it still be true? Dr Qabbani asked about the weak one, and unrolled it becomes the application was weaker than we had hoped — and the moment it is a clause, counsel asks who hoped, what the hope was, and whether it is written down anywhere. It was not a fact; it was only shaped like one. Mr Shihabi said the bolts one survives that, and it does: the delivery note of 4 August read M16 and the bolts measured M12, and nobody asks who hoped, because the note either reads M16 or it does not. Mrs Ajouz put the rule as unroll it into a clause and see whether it still holds, and the finding is that if a question opens up that was not there before, you were smuggling — a four-second test and the only one Mrs Oueidat has ever needed. And Mr Attar said it works on your own writing, which is the hard part, and it works best there, because the sentences you smuggle are the ones you cannot see: you put them there precisely because you did not want them opened._'));
out.push(p('**Listener task:** write your partner\'s unrolled clause and the question it opened, if any.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Zahreddine\'s second note, and the two paragraphs he added after the fax. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE · CONSULTING ENGINEER** · _to the site owner, copy to the main contractor_ · **11 August**',
  '**We cannot certify the steel frame to the east elevation, the delivery note of 4 August reading M16 and the bolts as installed measuring M12 at all forty-one positions I was able to reach.** Nine positions at the third level I could not reach and have not measured; the certificate will be withheld for all fifty until those nine are measured or replaced.',
  '**What this does and does not say.** **It does not say that the frame will fail**, the load case for the east elevation having a margin I have not yet exhausted on paper. **It says that I cannot certify it**, which is a statement about the document and not about the steel, and the distinction matters to whoever has to decide what happens on Monday.',
  '**What I measured, and how.** **Forty-one positions, with a vernier, between half past seven and ten past nine on 7 August**, two readings at each position and the lower recorded. **Thirty-nine read 12.0 and two read 12.1.** **No position read above 12.2 and none read 15 or over.** The delivery note is in the site file and I have a photograph of it; **the bolts themselves are in the frame and can be measured again by anybody with a vernier in about ninety minutes.**',
  '**What I did not examine.** The welds. The grout. The anchor positions below the second level. **The bolts at the nine positions at the third level**, those having been behind a sheeted scaffold on the day and still being behind it on the ninth. **I have not seen the mill certificates for any of the fifty**, those not being in the site file on either visit. **I have not calculated the frame on the installed sizes**, no instruction to do so having been given and the calculation taking about a day and a half.',
  '**Since the fax of the ninth, two things have changed and one has not.** **The supplier has confirmed in writing that the order they hold is for M12**, the purchase requisition of 19 July having been amended by hand after it was raised and the amendment not having been initialled. **The main contractor has told me by telephone that the original requisition said M16** and has agreed to send the file copy, which has not arrived. **I have asked twice, on the ninth and on the tenth**, the second request having gone to the contracts office rather than to the site. **I shall ask once more in writing and then stop asking**, a note of the three requests being of more use to whoever decides this than a fourth request would be.',
  '**And what has not changed is the position on Monday.** **Nothing can be certified until the nine positions are measured.** ⚠ **I am not able to recommend a partial certificate**, a frame being certified as a frame and not as forty-one of fifty positions. **There is no form of words available to me that would let the east elevation be loaded on Monday on the information I hold today.**',
  '**F. Zahreddine** · _signed_',
]));
out.push(item('1', 'Find four absolute constructions. What kind of fact is inside each one?'));
out.push(item('2', 'What does he say the note does **not** say, and why does he say so at all?'));
out.push(item('3', 'Which of his sentences is a refusal, and what makes its reason also a limit?'));
out.push(writers([
  'A note whose reasons are inside it: **the news, with the fact in an absolute construction** → **what it does not say, and why that matters to the reader\'s decision** → **what you measured, and how** → **what you did not examine** → **what has changed and what has not** → **and the refusal, with a reason that is also a limit.**',
  '⚠ **Put the measurement in the construction, not the opinion.** _..., the delivery note of 4 August reading M16 and the bolts as installed measuring M12._ **Unroll your own before you send it:** _the note read M16_ **opens nothing**; _the work having been unsatisfactory_ **opens three questions in four seconds.**',
  '**Say what the news does not say.** ⚠ _It does not say that the frame will fail._ **A reader deciding what to do on Monday will read the worst available meaning into a refusal**, and a sentence spent closing that off is the cheapest sentence in the document.',
  '**Separate what you examined from what you did not, and put the second one in its own paragraph.** ⚠ _The welds. The grout. The anchor positions below the second level._ **A scope paragraph is not a disclaimer** — **it is the thing that makes the finding usable**, because a reader now knows exactly how far it reaches.',
  '⚠ And **make the refusal\'s reason a limit.** _..., a frame being certified as a frame and not as forty-one of fifty positions._ **A refusal whose reason is a fact about the world cannot be met by a better request**, which is why it ends the correspondence instead of starting it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note whose reasons are inside it (120 words or more).'));
out.push(p('**______________** · _to _______________ · **______________**   **We cannot ______________, the ______________ of ______________ reading ______________ and the ______________ measuring ______________.** ______________.   **What this does and does not say.** ⚠ **It does not say ______________**, the ______________ having ______________. **It says ______________**, which is a statement about ______________ and not about ______________.   **What I measured, and how.** **______________ positions, with ______________, between ______________ and ______________ on ______________.** **______________ read ______________ and ______________ read ______________.**   **What I did not examine.** ______________. ⚠ **______________, those having been ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every absolute construction unrolls into a clause with no new question',
  'A date, a figure, a document or a measurement inside each construction',
  'A paragraph saying what the note does not say',
  'A scope paragraph naming what was not examined',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their construction**, and the room unrolls it aloud and says whether a question opened.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the news with its fact inside, what it does not say, what you measured, what you did not examine, what has changed, and the refusal whose reason is a limit.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every construction unrolls cleanly, a fact and not a judgement inside each, the scope paragraph present, and the refusal\'s reason also a limit.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their opening sentence; the room unrolls the construction out loud, in chorus, into a clause with a subject and a verb.** ⚠ **If a question opens, the room says it rather than the writer.** Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **the sentences you smuggle are the ones you cannot see.**'));
out.push(hw('Take **three sentences of your own from the last month** and rewrite each with its reason inside it. ⚠ **Then unroll all three, in writing, and write the question each one opens.** **Expect one of the three to open a question**, and expect it to be the sentence you were most pleased with — **because a construction that hides a judgement feels like good writing from the inside, which is exactly what it is for.** **Bring the three and the questions.** **1.4 is the same move with the subject in front**, and it has a trap in it that is grammatically wrong rather than merely dishonest.'));

// ===================== 1.4 =====================
out.push(pb());
out.push(h2('1.4  Having been refused twice'));
out.push(p('**Function:** hanging a claim on a participle clause and keeping the main clause for the news   ·   **Grammar:** _having been refused twice on the same ground, we have changed the ask_   ·   **Pronunciation:** the front clause said without a pause before the subject'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you have asked for twice and not been given.** ⚠ **One sentence, beginning with the history and ending with what you did next** — _having asked twice in eleven months, I…_ Your teacher writes the ten openings on the board and marks the ones where the person at the front of the sentence is not the person who acted.'));
out.push(board('We asked twice and were refused. So then we changed the form.', 'Having been refused twice on the same ground, we changed the ask and not the argument.'));
out.push(p('**b**  Which of these is correctly built? **1** _Having read the specification, the bolts were found to be M12._  **2** _Having read the specification, I found the bolts to be M12._  **3** _Having been refused twice, the application was rewritten._  **4** _Having been refused twice, we rewrote the application._  **5** _Having waited eleven months, the code finally appeared on the slips._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room find out about the commonest fault in this construction?   **A** it is too formal   **B** **the participle has to belong to the subject of the main clause, and when it does not, a reader cannot find who did it** — and a reader who cannot find who did it assumes you did not want them to   **C** it should not start a sentence'));
out.push(p('**b**  Listen again. **1** What did Mrs Rizk change between the second application and the third, and what did she not change?   **2** What does Mr Tayara say about his own four letters?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.7  The third application', [
  ['Ms Huda', 'Mrs Rizk, three applications for the same thing.'],
  ['Mrs Rizk', 'Two refused and the third funded, and the difference is about nine words. ⚠ **The second one said: _we have applied twice before. We are applying again because the need has not changed._**'],
  ['Mrs Tarabishi', 'Which invites the obvious answer.'],
  ['Mrs Rizk', '⚠ **It invites the answer they had already given me twice.** **I had put my own history in the main clause, so the history was the news** — and **the news was that I was applying again, which is not news to anybody.**'],
  ['Ms Huda', 'And the third.'],
  ['Mrs Rizk', '_Having been refused twice on the same ground, we have changed the ask and not the argument._ ⚠ **The history is in front, where it cannot be answered, and the main clause carries the one thing that is actually new.**'],
  ['Mr Shihabi', 'That is a lead. That is exactly what a lead is.'],
  ['Mrs Rizk', '⚠ **Then I have been writing eleven years of second paragraphs.**'],
  ['Mr Tayara', 'May I bring four of mine? Because I think three of the four are broken. _Having considered the matter carefully, the start of the day will move to twenty past eight._'],
  ['Mrs Khoury', '⚠ **The start of the day did not consider anything.**'],
  ['Mr Tayara', 'No. I did. ⚠ **And I have written that sentence, or one like it, about forty times.**'],
  ['Mrs Oueidat', 'I see this constantly and I cannot translate it. ⚠ **There is no subject for the participle, so when I render it into Arabic I have to invent one** — **and whichever one I invent, I have put somebody in the document who was not in it.**'],
  ['Mr Tayara', '⚠ **Which is a real consequence and not a grammatical one.** **Say more, because this is the part I did not know.**'],
  ['Mrs Oueidat', '**If I supply _the school_, the school considered it. If I supply _the head_, you considered it.** ⚠ **Those are two different documents and the English version does not choose.** **In court that is the first thing counsel reaches for.**'],
  ['Mr Zahreddine', 'So the test is: who is the subject of the main clause, and did that person do the participle?'],
  ['Mr Tayara', '⚠ **And the finding is the part after it, which is what I shall take away.** **When the participle does not belong to the subject, a reader cannot find who did it** — **and a reader who cannot find who did it assumes you did not want them to.**'],
  ['Dr Qabbani', 'Mine are all in the passive for exactly that reason. _Having been reviewed, the data were re-analysed._'],
  ['Mrs Khoury', '⚠ **That one is correctly built and it is still hiding somebody.** **The data were reviewed by whom?** **Correct and invisible are not the same thing as correct and honest.**'],
  ['Mrs Ajouz', 'And how many of these can you put in one letter?'],
  ['Mrs Rizk', '🔊 ⚠ **Two. Three becomes a tic and a tic is visible.** **My third application has two and my fourth draft had five, and the fifth reads like somebody doing an exercise** — **which is the whole thing this year is about.**'],
]));
out.push(sp());
out.push(box('Language box – the participle clause in front', [
  '**The shape.** **_Having_ + past participle, comma, then the main clause with its own subject.** _**Having been refused twice on the same ground,** we have changed the ask and not the argument._ · _**Having asked twice in eleven months,** I sent the batch numbers with the third letter._',
  '**What the front position buys.** ⚠ **It puts the history where a reader cannot answer it, and leaves the main clause for the one thing that is new.** **Mrs Rizk\'s second application put the history in the main clause** — _we are applying again because the need has not changed_ — **so the news was that she was applying again, which was not news to anybody.**',
  '⚠ **The rule, and it is the commonest fault in this construction at every level: the participle belongs to the subject of the main clause.** _**Having considered the matter carefully,** the start of the day will move to twenty past eight._ **The start of the day considered nothing.** ✓ _**Having considered the matter,** I am moving the start of the day._',
  '⚠ **And the consequence is not grammatical.** **When the participle has no subject, a reader cannot find who did it** — **and a reader who cannot find who did it assumes you did not want them to.** **A translator has to invent the subject**, and whichever one is invented puts somebody in the document who was not in it. _If I supply the school, the school considered it; if I supply the head, the head did._ **Two different documents, and the English chose neither.**',
  '**Correct is not the same as honest.** ⚠ _Having been reviewed, the data were re-analysed._ **That is correctly built and it is still hiding somebody: reviewed by whom?** **A passive participle attached to a passive main clause is grammatical and agentless, and at C1 the question is whether you meant it to be.**',
  '**How many in one document.** ⚠ **Two.** **Three becomes a tic, and a tic is visible** — which is the one thing the construction exists to avoid. **Count them before sending.**',
  '**Pronunciation.** 🔊 **Track 1.8** **No pause between the comma and the subject of the main clause.** ⚠ **The front clause and the main clause are one breath.** **A pause there makes the history sound like a complaint**, and the whole point of putting it in front was that it would not.',
  '**Practise:** Put the history in front and the news in the main clause, with the subject doing the participle. **1** something refused twice  **2** something you asked for and got late  **3** something you have measured twice  **4** a decision somebody else took  **5** one with a passive participle — and say who it is hiding',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B does two things: **names the subject of the main clause, and says whether that subject did the participle.** ⚠ **Three rows on each card are broken** — the participle belongs to nobody in the sentence — **and B has to supply the two possible subjects and say what difference each one makes to the document.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ Having __________, __________ __________.'],
  ['B', 'Subject of the main clause: __________.   Did it do the participle? **yes / no**'],
  ['B', 'If no: it could be __________ or __________ — **and the difference is __________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_Having been refused twice, we changed the ask._', '_Having read the note of 4 August, I measured forty-one positions._'],
  ['_⚠ Having considered the matter, the start of the day will move._', '_⚠ Having reviewed the file, the application was declined._'],
  ['_Having waited eleven months, I sent the batch numbers again._', '_Having closed the gate three times, the municipality has agreed a meeting._'],
  ['_⚠ Having been assessed in November, the three words have never gone._', '_⚠ Having counted on eleven mornings, the timetable was corrected._'],
  ['_⚠ Having filed at ten at night, the paragraph went out unrevised._', '_⚠ Having been translated twice, counsel objected to the wording._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the ten main-clause subjects, and the six that did not do the participle. ⚠ **Five of the six are the ordinary fault and the sixth is different**: _having been assessed in November, the three words have never gone_ — **the three words were not assessed, but the sentence is doing something the others are not.** **It is hiding the writer from herself**, and that is worth the two minutes it will take.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own history from Stage 1 and write it with the participle in front. ⚠ **Then do one thing in writing: circle the subject of your main clause and draw a line to the participle.** **If the line does not join two things that go together, the sentence is broken** — and the repair is to change the main clause, not the participle.'));
out.push(p('**b**  Swap. Your partner reads your sentence and writes **the two subjects a translator would have to choose between**, if there are two. ⚠ Then the hard one: **they say which of the two you meant**, and you say whether they are right.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk brought three applications for the same thing: two refused and the third funded, and the difference is about nine words. The second said we have applied twice before, we are applying again because the need has not changed. Mrs Tarabishi said that invites the obvious answer, and it invites the answer they had already given twice — because the history was in the main clause, so the history was the news, and the news was that she was applying again, which is not news to anybody. The third said: having been refused twice on the same ground, we have changed the ask and not the argument. The history is in front, where it cannot be answered, and the main clause carries the one thing that is actually new. Mr Shihabi said that is a lead, that is exactly what a lead is, and Mrs Rizk said then she has been writing eleven years of second paragraphs. Mr Tayara then brought four of his own, thinking three were broken: having considered the matter carefully, the start of the day will move to twenty past eight. Mrs Khoury said the start of the day did not consider anything. No — he did, and he has written that sentence, or one like it, about forty times. Mrs Oueidat said she sees this constantly and cannot translate it: there is no subject for the participle, so rendering it into Arabic means inventing one, and whichever one she invents puts somebody in the document who was not in it. Mr Tayara asked her to say more, and if she supplies the school, the school considered it; if she supplies the head, he did — two different documents, and the English version does not choose, which is the first thing counsel reaches for. Mr Zahreddine put the test as: who is the subject of the main clause, and did that person do the participle? And Mr Tayara gave the finding he was taking away: when the participle does not belong to the subject, a reader cannot find who did it, and a reader who cannot find who did it assumes you did not want them to. Dr Qabbani said his are all passive for exactly that reason — having been reviewed, the data were re-analysed — and Mrs Khoury said that one is correctly built and still hiding somebody, because the data were reviewed by whom, and correct and invisible are not the same as correct and honest. Mrs Ajouz asked how many can go in one letter, and two: three becomes a tic and a tic is visible. Mrs Rizk\'s third application has two, her fourth draft had five, and the fifth reads like somebody doing an exercise._'));
out.push(p('**Listener task:** write the two subjects a translator would choose between in your partner\'s sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note Mrs Rizk sent with the third application. Answer the questions.'));
out.push(model([
  '**COVERING NOTE** · _with application 24-SY-311, third submission_ · **H. Rizk** · **3 October**',
  '**Having been refused twice on the same ground, we have changed the ask and not the argument.** The ground given on both occasions was that the activity duplicates provision already funded in the governorate. **We accept that it did.** The application in front of you asks for something the two earlier ones did not ask for, and this note is one page so that the change can be found without reading the form.',
  '**What was asked for before.** Twelve months of a mobile clinic, two days a week, across four districts. **Funded provision already covers three of the four**, as your own assessor said in February and again in July, **and we did not establish the fourth separately in either submission.**',
  '**What is asked for now.** **Nine months in one district only — Deir Atiyah — and the two days are Tuesday and Saturday**, Saturday being the day the funded provision does not run and the day on which the referral book shows fifty-one of the eighty-two self-presentations we recorded between January and June.',
  '**What has changed in the evidence.** **Having gone back to the referral books for the first six months**, we can now separate the four districts: 51 of 82 in Deir Atiyah, 14 in Jubb al-Jarrah, 11 and 6 in the other two. **The figure we gave you in February — eighty-two across four districts — was true and was useless**, the district column having been in the book all along and not having been read.',
  '**What we are not asking for.** **Not the three districts the funded provision covers.** **Not the weekday clinic.** **Not vehicle replacement**, the vehicle having eleven months left on its certificate and no case for renewal before August.',
  '**The cost of the thing continuing as it is.** **Fifty-one self-presentations in six months, of which nineteen arrived on a Saturday and were turned away**, and the two we know about afterwards both presented at the governorate hospital within a fortnight. **We do not know what happened to the other seventeen** and we are not going to claim that we do. **Nine of the nineteen were turned away before half past nine**, the Saturday cover having ended at nine since the rota changed in March, **and the remaining ten were turned away because the referral book had been left in the vehicle.** That second group is ours and not yours, and it has been fixed since July.',
  '**One request about process.** **If this is refused again, we should like the ground in one sentence and the district column mentioned in it**, so that a fourth submission either answers it or is not made. **Two refusals on the same ground cost your assessor about four hours and cost us about three weeks.** **Neither refusal mentioned a district**, both having been written against the form and not against the referral evidence, **and a third of that kind would be of no use to either of us.**',
]));
out.push(item('1', 'What does the front clause of the first sentence do that a separate sentence would not?'));
out.push(item('2', 'She says one of her own figures was true and useless. Which, and what made it useless?'));
out.push(item('3', 'What does she ask for about the process, and what reason does she give?'));
out.push(writers([
  'A covering note with the history in front: **the participle clause carrying what has happened, and the main clause carrying what is new** → **what was asked before, and what you concede** → **what is asked now, with the figure that separates it** → **what has changed in the evidence** → **what you are not asking for** → **the cost of things continuing** → **and one request about process.**',
  '⚠ **Put the history in front and keep the main clause for the news.** _Having been refused twice on the same ground, we have changed the ask and not the argument._ **With the history in the main clause the news becomes _we are applying again_**, which is not news to anybody who has the file.',
  '**Concede the ground in three words and move.** ⚠ _We accept that it did._ **A concession that takes a paragraph reads as an argument**, and a reader who is still reading your defence has not yet reached what changed.',
  '**Separate the figure that was true from the figure that is useful.** ⚠ _Eighty-two across four districts was true and was useless, the district column having been in the book all along and not having been read._ **Naming your own unread column costs one clause and buys the reader\'s confidence in the rest.**',
  '⚠ And **say what you do not know, and refuse to claim it.** _We do not know what happened to the other seventeen and we are not going to claim that we do._ **Two participles in this note and no more** — **three is a tic, and a tic is the one thing a note like this cannot afford.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a covering note with the history in front (120 words or more).'));
out.push(p('**COVERING NOTE** · _with _______________ · **______________** · **______________**   **Having been ______________ on ______________, we have changed ______________ and not ______________.** **The ground given was that ______________.** ⚠ **We accept that ______________.**   **What was asked for before.** ______________. **______________ already covers ______________**, as ______________ said in ______________, **and we did not establish ______________ in either submission.**   **What is asked for now.** **______________ only — ______________ — and ______________**, ______________ being the ______________ on which ______________ shows ______________ of the ______________ we recorded between ______________ and ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The participle belongs to the subject of the main clause',
  'No more than two participle clauses in the whole document',
  'The concession in one short sentence, not a paragraph',
  'One figure named as true and useless, with the reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their first sentence**, and the room names the subject of the main clause and says whether it did the participle.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the history in front, the concession, what is asked now, what has changed, what you are not asking for, the cost of things continuing, and one request about process.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the participle belongs to the main clause\'s subject, no more than two in the document, the concession short, and one figure named as true and useless.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their first sentence in one breath, with no pause after the comma; a second student reads it again with a pause there.** ⚠ **The room says what the pause did to the history.** **It turns it into a complaint**, every time, and it is audible from the back. Then the sentence the cycle ends on, which is Mrs Rizk\'s: **the fifth draft reads like somebody doing an exercise.**'));
out.push(hw('Find **four sentences of your own** that begin with a participle — in anything you have written in the last year — and **mark the subject of each main clause.** ⚠ **Expect at least one to be broken**, and expect it to be in a document that was read by somebody who said nothing about it. **Then write the two subjects a translator would have to choose between, and say which you meant.** **Bring the four.** **1.5 is about evidence that a habit has become automatic**, and the evidence will not be in the sentences you revised.'));

// ===================== 1.5 =====================
out.push(pb());
out.push(h2('1.5  The evidence that it has become automatic'));
out.push(p('**Function:** finding the evidence that a habit has become automatic   ·   **Grammar:** _I did ___ without ___ , which is the evidence_   ·   **Pronunciation:** saying a figure about yourself without raising the voice at the end'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one thing you did in English in the last month without thinking about it, which you would have had to think about two years ago.** ⚠ **The rule is that there must be a document or an occasion, with a date.** Your teacher writes the ten on the board and marks the ones with no date in them.'));
out.push(board('I am much more confident with hedging now, I would say.', 'The letter of 2 September has four hedges in it and I revised the first paragraph only.'));
out.push(p('**b**  Which of these is evidence? **1** _The eighty words I filed at ten at night have the figure in the first sentence and I did not put it there on purpose._  **2** _I feel much more fluent._  **3** _My writing has improved a lot this year._  **4** _I have stopped saying "unfortunately" and I noticed last Tuesday that I had stopped._  **5** _I am generally more aware of register now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where does the room decide the evidence of an automatic habit is to be found?   **A** in your best work   **B** **in the part you did not revise** — the late draft, the quick reply, the eighty words filed at ten at night   **C** in what other people say about you'));
out.push(p('**b**  Listen again. **1** What does Mr Shihabi say about the two kinds of paragraph he writes?   **2** What does Dr Qabbani find when he looks at his own covering letter?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.9  The part nobody revised', [
  ['Ms Huda', 'Mrs Khoury, you asked a question of every item on your list in June. One question.'],
  ['Mrs Khoury', '_Is the B2 version automatic for me?_ ⚠ **And the trouble with it, which I did not see in June, is that I answered it by remembering.**'],
  ['Mrs Tarabishi', 'Which is the worst available instrument.'],
  ['Mrs Khoury', '⚠ **It is worse than that. I answered _yes_ for the three I am proudest of**, and being proud of something is exactly the sign that it is still taking effort.'],
  ['Mr Shihabi', 'May I say where I think it is? ⚠ **Because I write two completely different kinds of paragraph and I had never put them side by side.**'],
  ['Ms Huda', 'Please.'],
  ['Mr Shihabi', '**There is the one I file at six, which I have looked at four times.** **And there is the one I file at ten at night with forty minutes gone and the desk waiting.** ⚠ **I have always assumed the first one was the better one.**'],
  ['Mrs Oueidat', 'And it is not.'],
  ['Mr Shihabi', '⚠ **It is better written and it is worse evidence.** **The six o\'clock one has whatever I have decided to put in it. The ten o\'clock one has whatever I actually do.** **The figure is in the first sentence of the late ones and I did not put it there on purpose.**'],
  ['Mr Tayara', 'So the evidence is in the part you did not revise.'],
  ['Mr Shihabi', '⚠ **The evidence is in the part nobody revised**, and that is the whole of it. **A revised sentence tells you what I know. An unrevised one tells you what I do.**'],
  ['Dr Qabbani', 'I have one here and I am not comfortable with it. My covering letter to the journal, written in about twenty minutes in July.'],
  ['Ms Huda', 'What is in it?'],
  ['Dr Qabbani', '⚠ **Four hedges, and all four are in the right place.** _Consistent with._ _We are unable to exclude._ _Does not establish._ _In the eleven patients for whom the second sample was available._ **I did not choose any of those four.**'],
  ['Mrs Rizk', 'Then you have the thing you have been trying to prove.'],
  ['Dr Qabbani', '⚠ **And the letter was returned with _language_ given as the reason.** **Which I have been angry about for three months and am now less sure of**, because if the hedges are automatic, the problem is somewhere I have not looked.'],
  ['Mrs Khoury', '⚠ **Say that again, because it is the most useful sentence anybody has said this evening.**'],
  ['Dr Qabbani', '**If the thing I was blamed for is the thing I can now do without thinking, then the fault is somewhere else and I have spent three months defending the wrong ground.**'],
  ['Jad', 'Mine is four. I still read my own answer four times before I post it.'],
  ['Mrs Khoury', '🔊 ⚠ **Then your evidence is a number and not a feeling, which is better than most of ours.** **Count it again in June.** **If it is four in June, nothing has become automatic and we shall both know; if it is two, you will not have noticed it happening** — **and not noticing is the only reliable sign there is.**'],
]));
out.push(sp());
out.push(box('Language box – the evidence of an automatic habit', [
  '**You cannot tell from the inside, and this is why the question has to be asked of a document rather than of yourself.** ⚠ **Asking _is this automatic for me?_ and answering from memory produces _yes_ for the three things you are proudest of** — **and being proud of something is the sign that it still takes effort.**',
  '⚠ **The evidence is in the part nobody revised.** **The late draft, the quick reply, the eighty words filed at ten at night with forty minutes gone.** **A revised sentence tells a reader what you know; an unrevised one tells them what you do.**',
  '**So the shape of the claim is: a document, a date, and a thing you did not do on purpose.** _The eighty words I filed at ten at night have the figure in the first sentence **and I did not put it there on purpose.**_ · _The covering letter of 14 July has four hedges in it, **all four in the right place, and I chose none of them.**_',
  '**A number beats a feeling, and a number you can count again beats both.** ⚠ _I still read my own answer four times before I post it._ **Count it again in June.** **If it is four, nothing has moved. If it is two, you will not have noticed it happening** — **and not noticing is the only reliable sign there is.**',
  '⚠ **And the finding that makes this cycle worth ninety minutes.** **If the thing you were blamed for is the thing you can now do without thinking, the fault is somewhere else** — **and you may have spent months defending the wrong ground.** **An automatic habit is not only a credit; it is a way of finding out what the real complaint was.**',
  '**What is not evidence.** ⚠ _I feel more fluent_ · _my writing has improved_ · _I am more aware of register_. **None of the three has a document, a date or an occasion in it**, and all three would be said with equal confidence by somebody who had done nothing for a year.',
  '**Pronunciation.** 🔊 **Track 1.10** **Say the figure about yourself flat, and come down at the end.** ⚠ **A figure about your own work said with the voice rising is a figure offered for agreement**, and the room will supply it. **_Four times._** **Down, and stop.**',
  '**Practise:** Name a habit, then the document that is the evidence, then the thing you did not do on purpose. **1** something in a late draft  **2** something with a number you can count again  **3** something somebody else noticed first  **4** something you were once blamed for  **5** one where the evidence says it is _not_ automatic yet',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a habit and offers the evidence. B does one thing: **says whether the evidence is a document or a feeling, and if it is a document, whether it was revised.** ⚠ **Two rows on each card offer revised work as evidence** — and B has to say so and then ask the one useful question: **what is in the unrevised version?** Swap cards.'));
out.push(dlg(null, [
  ['A', 'Habit: __________.   Evidence: __________, dated __________.'],
  ['B', 'Document or feeling: __________.   Revised: **yes / no**'],
  ['B', 'If revised: **what is in the unrevised version?** __________'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_The eighty words filed at ten at night, with the figure first._', '_The covering letter of 14 July, four hedges, none chosen._'],
  ['_⚠ The essay I rewrote five times for this class._', '_⚠ The report I spent a weekend on in March._'],
  ['_I read my own answer four times — still four, counted in September._', '_I stopped writing "unfortunately" and noticed on a Tuesday._'],
  ['_⚠ My best letter of the year, which I am rather proud of._', '_⚠ The page I asked three people to look at._'],
  ['_The note I dictated in the car, which has the date in the first clause._', '_The reply I sent in four minutes, which named what I had not examined._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** for each of the ten, document or feeling, and revised or not. ⚠ **The four rows marked ⚠ all offer heavily revised work**, and three of the four are described with pride — _rather proud of_, _spent a weekend_, _rewrote five times_. **That is the finding: pride and revision arrive together, and neither of them is evidence of anything except effort.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take your own habit from Stage 1 and name **the unrevised document that is its evidence.** ⚠ **Then read that document and write what is in it that you did not put there on purpose.** **If you cannot find anything, write that down instead** — **it is the more useful of the two answers and it is the one nobody volunteers.**'));
out.push(p('**b**  Swap. Your partner reads your unrevised document and writes **one thing in it you did not mention.** ⚠ Then the hard one: **they say whether they think it is automatic or careful**, and you say which it was.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury was asked about the one question she put to every item on her list in June — is the B2 version automatic for me? — and said the trouble with it, which she did not see in June, is that she answered it by remembering. Mrs Tarabishi said that is the worst available instrument, and it is worse than that: she answered yes for the three she is proudest of, and being proud of something is exactly the sign that it is still taking effort. Mr Shihabi then said where he thinks the evidence is, because he writes two completely different kinds of paragraph and had never put them side by side: the one he files at six, which he has looked at four times, and the one he files at ten at night with forty minutes gone and the desk waiting. He has always assumed the first was the better one. Mrs Oueidat said it is not, and it is better written and worse evidence: the six o\'clock one has whatever he has decided to put in it, and the ten o\'clock one has whatever he actually does. The figure is in the first sentence of the late ones and he did not put it there on purpose. Mr Tayara said so the evidence is in the part you did not revise, and the evidence is in the part nobody revised, and that is the whole of it: a revised sentence tells you what he knows and an unrevised one tells you what he does. Dr Qabbani then brought his covering letter to the journal, written in about twenty minutes in July, and said he was not comfortable with it. In it: four hedges, all four in the right place — consistent with, we are unable to exclude, does not establish, in the eleven patients for whom the second sample was available — and he did not choose any of the four. Mrs Rizk said then he has the thing he has been trying to prove, and he said the letter was returned with language given as the reason, which he has been angry about for three months and is now less sure of, because if the hedges are automatic the problem is somewhere he has not looked. Mrs Khoury asked him to say it again, and he said: if the thing I was blamed for is the thing I can now do without thinking, then the fault is somewhere else and I have spent three months defending the wrong ground. Mr Attar said his is four — he still reads his own answer four times before posting it — and Mrs Khoury said his evidence is a number and not a feeling, which is better than most, and he should count it again in June: if it is four, nothing has become automatic and they will both know, and if it is two, he will not have noticed it happening, and not noticing is the only reliable sign there is._'));
out.push(p('**Listener task:** write the one thing your partner found in your unrevised document that you had not mentioned.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering letter Dr Qabbani sent with his paper in July, written in about twenty minutes and never revised. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _to the Editor_ · **14 July**',
  '**Dear Editor,** we submit for your consideration a retrospective review of forty-one patients admitted to our unit with culture-negative endocarditis between January 2023 and March 2026, **of whom thirty-one had a second blood sample taken before antibiotics were started and ten did not.**',
  '**What we report.** In the eleven patients for whom the second sample was available and the first was not, **a serological diagnosis was reached in seven.** **This is consistent with the finding of two earlier series from the region** and we are unable to exclude a sampling effect, the eleven having been identified from the admissions book rather than from the laboratory record. **We do not claim that the second sample changed management**, management having been recorded in the notes for only twenty-six of the forty-one.',
  '**What the series cannot show.** It cannot show a survival difference. **Four deaths occurred, all in patients over sixty-eight**, and a difference of four events across two groups of this size would not be interpretable whichever way it fell. **It cannot show that the ten who had no second sample were comparable to the thirty-one who did**, those ten having presented at night in eight cases and two of the eight having been transferred from another unit with antibiotics already running. **And it cannot show anything about the proportion of culture-negative cases in the region**, the unit taking referrals from four governorates and keeping no denominator of its own.',
  '**On the laboratory record.** **The record was retrieved for thirty-eight of the forty-one.** Three sets of results from 2023 are not in the system and were not found in the paper archive, the laboratory having changed its reporting software in October of that year and the migration having been incomplete for about five weeks. **The three patients are named in the admissions book and their notes exist**, so the gap is in the results and not in the identification. **We have reported the thirty-eight and said so in the table**, rather than carrying three patients with no results into a denominator.',
  '**Why we are submitting it to this journal.** Both of the earlier regional series appeared here, in 2019 and 2022, and **the second of them asked for exactly the figure we are reporting** — the proportion of serological diagnoses where only the second sample was available. **We can supply the admissions-book extract and the laboratory export on request**, both having been kept. **We have not sent them with this submission**, the extract carrying ward numbers that would have to be removed first and the removal taking about a day.',
  '**Two things we should like to say about the limitations before a reviewer raises them.** **The series is retrospective and we have not attempted to correct for it.** **And the eleven is a small number** — it is eleven of forty-one, which we have put in the abstract rather than in the discussion, **the abstract being where a reader decides whether the number is worth their afternoon.**',
  '**Yours faithfully,** **H. Qabbani**',
]));
out.push(item('1', 'Find four hedges. What does each one do that a plain statement would not?'));
out.push(item('2', 'What does he say the series **cannot** show, and what reason does he give in each case?'));
out.push(item('3', 'Why does he put the figure eleven of forty-one in the abstract rather than in the discussion?'));
out.push(writers([
  'A covering letter whose calibration is not commented on: **what is submitted, with the figures that split the group** → **what you report, hedged to the strength of the evidence** → **what the work cannot show, each with its reason** → **what is missing from the record, and what you did about it** → **why this reader** → **and the two limitations you would rather state than be asked about.**',
  '⚠ **Hedge to the strength of the evidence and no further.** _Consistent with_ · _we are unable to exclude_ · _we do not claim that_ · _in the eleven for whom the second sample was available_. **Each one marks a different distance from the claim**, and a letter that uses the same hedge four times has calibrated nothing.',
  '**Say what the work cannot show, and give the reason, not the apology.** ⚠ _A difference of four events across two groups of this size would not be interpretable whichever way it fell._ **A limitation with its arithmetic attached is a finding**; the same limitation alone is a hedge about a hedge.',
  '**Report the denominator you actually have.** ⚠ _We have reported the thirty-eight and said so in the table, rather than carrying three patients with no results into a denominator._ **The sentence costs nineteen words and removes the one objection a reader would otherwise make first.**',
  '⚠ And **state the limitation that would be raised anyway, and put the uncomfortable figure where it will be read.** _It is eleven of forty-one, which we have put in the abstract rather than in the discussion._ **A number moved towards the reader reads as confidence; the same number moved away reads as management.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a covering letter whose calibration is not commented on (120 words or more).'));
out.push(p('**______________** · _to _______________ · **______________**   **Dear ______________,** we submit ______________ of ______________ between ______________ and ______________, **of whom ______________ and ______________ did not.**   **What we report.** **In the ______________ for whom ______________, ______________.** **This is consistent with ______________** and we are unable to exclude ______________, the ______________ having been ______________ rather than ______________. ⚠ **We do not claim that ______________**, ______________ having been ______________ for only ______________.   **What it cannot show.** **It cannot show ______________.** ______________, **and ______________ would not be interpretable whichever way it fell.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Four different hedges, each at a different distance from the claim',
  'Every limitation with its reason or its arithmetic, not an apology',
  'The denominator you actually have, and what you did about the gap',
  'No sentence commenting on the writing itself',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their four hedges**, one after another, and the room says whether the four are at four different distances or the same one four times.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: what is submitted, what you report, what it cannot show, what is missing, why this reader, and the two limitations you state first.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: four hedges at four distances, each limitation with its reason, the real denominator, and no sentence about the writing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Each student says one figure about their own work — flat, coming down at the end, and then stopping.** ⚠ **The room listens for the rise.** **A figure about your own work said with the voice going up is a figure offered for agreement**, and somebody will supply it. Then the sentence the cycle ends on, which is Dr Qabbani\'s: **I have spent three months defending the wrong ground.**'));
out.push(hw('Find **the least revised thing you have written in English this month** — the quick reply, the late draft, the note dictated in a car — and **read it as evidence.** ⚠ **Write down two things in it you did not put there on purpose, and one thing that is missing that you would have put in if you had had an hour.** **The two are what has become automatic; the one is what has not.** **Then do the part Dr Qabbani did: ask whether the thing you have been blamed for is on the first list.** **If it is, the complaint was about something else.** **Bring all three lines.** **1.6 writes the half-page whose method cannot be seen**, and it is the only cycle in this book where you are allowed to explain your own writing.'));

// ===================== 1.6 =====================
out.push(h2('1.6  The half-page whose method cannot be seen'));
out.push(p('**Function:** writing the half-page whose method cannot be seen   ·   **Grammar:** taking out every sentence that is about the writing   ·   **Pronunciation:** reading a stripped page aloud without filling the gaps'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  ⚠ **This is the one cycle in this book in which you are allowed to explain your own writing, and the Answer Key says so.** Round the room: **one sentence you have written this year whose only job was to explain another sentence.** Your teacher writes the ten on the board — **and then crosses out the ones the document would have survived without.**'));
out.push(board('I am writing these down to find out which has no figure in it.', '— _(nothing: the sentence comes out and the four answers stand)_'));
out.push(p('**b**  Which of these would a document survive without? **1** _Why I am writing these down at all._  **2** _Nine of our forty consignments left with the paperwork incomplete._  **3** _The delivery note of 4 August reads M16._  **4** _What I would change: I would have conceded in February._  **5** _And the thing all four have in common, which I did not see until they were on one sheet._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Mrs Ajouz find when she takes the explaining sentences out?   **A** the page becomes unclear   **B** **every sentence she removed was a sentence explaining a sentence** — and she had been taught, at a different school, to write all of them   **C** the page becomes shorter and nothing else changes'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say the explaining sentences were for?   **2** Why does the room agree that one page a year should keep them?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.11  What came out', [
  ['Ms Huda', 'Mrs Ajouz has done something I asked her to do in the second week, which was to take one of her own pages and remove every sentence that is about the writing.'],
  ['Mrs Ajouz', 'Half a page about a stock discrepancy, for the regional pharmacist. ⚠ **Four sentences came out and the page is better.** **And I am not comfortable, because I was taught to write all four.**'],
  ['Mr Tayara', 'Which four?'],
  ['Mrs Ajouz', '_I am setting this out in three parts so that it can be followed._ _The figures below are the ones I have been able to verify._ _I hope this is clear._ ⚠ And the worst one: _I have deliberately not drawn a conclusion from the second column._'],
  ['Mrs Tarabishi', 'That last one is doing something, though. It is telling the reader not to draw one either.'],
  ['Mrs Ajouz', '⚠ **It is telling the reader there is a conclusion there that I have decided not to draw**, which is the opposite of what I wanted. **I took it out and put in the reason the column is short.** **Five words instead of eleven and nobody has asked.**'],
  ['Mr Shihabi', 'My desk takes those out without telling me. Every single week.'],
  ['Mrs Oueidat', 'And in court they are the only sentences I can never render, ⚠ **because there is nothing underneath them.** _I hope this is clear_ **has no content at all. It has a tone.**'],
  ['Jad', 'But the four sentences were useful to somebody. They were useful to her when she was writing it.'],
  ['Ms Huda', 'Mrs Khoury.'],
  ['Mrs Khoury', '⚠ **They were, and that is exactly what they are for.** **_I am setting this out in three parts_ is a note the writer leaves for herself while she works out that there are three parts.** **The fault is not writing it; the fault is not taking it out.**'],
  ['Mrs Rizk', 'So it is scaffolding.'],
  ['Mrs Khoury', '⚠ **It is scaffolding, and the whole of the last three books is scaffolding.** **Every model we have read for four years explains its own method in about four sentences** — _why I am writing these down_, _what I would change_, _the thing they have in common that I did not see_. **That is why we could learn from them.**'],
  ['Mr Zahreddine', 'Then we were taught to write something we now have to stop writing.'],
  ['Mrs Khoury', '⚠ **We were taught to write it so that we could see it.** **A page that explains its own method is how you learn, and it is not how you write.**'],
  ['Dr Qabbani', 'And how do you know which sentences they are? Mine do not announce themselves.'],
  ['Mrs Ajouz', '⚠ **One test and it worked on all four of mine.** **Cover the sentence and ask whether anything in the document is now unknown.** **If nothing is unknown, the sentence was about the writing and not about the stock.**'],
  ['Mr Attar', 'And the ones that are left?'],
  ['Mrs Ajouz', '🔊 ⚠ **The ones that are left are the document.** **Mine is five sentences shorter and I have had one reply instead of two** — **and the reply answered the thing I asked rather than asking me what I meant by part three.**'],
]));
out.push(sp());
out.push(box('Language box – taking the method out', [
  '**What comes out.** ⚠ **Every sentence whose only job is to explain another sentence.** _I am setting this out in three parts so that it can be followed._ · _The figures below are the ones I have been able to verify._ · _I hope this is clear._ · _I have deliberately not drawn a conclusion from the second column._',
  '⚠ **The test, and it is four seconds: cover the sentence and ask whether anything in the document is now unknown.** **If nothing is unknown, the sentence was about the writing and not about the thing.** **If something is unknown, it stays** — **and about one in five turns out to stay.**',
  '**The worst kind, because it looks like honesty.** ⚠ _I have deliberately not drawn a conclusion from the second column._ **That tells a reader there is a conclusion you have decided not to draw**, which is the opposite of what it was for. **Replace it with the reason the column is short:** _the second column covers eleven days, the book having been started on the twentieth._ **Five words instead of eleven, and nobody asks.**',
  '**And the sentence with no content at all.** ⚠ _I hope this is clear._ **A translator cannot render it, because there is nothing underneath it: it has a tone and no content.** **A desk editor removes it without mentioning it.**',
  '⚠ **Why you were taught to write them, and this is the part that matters.** **They are scaffolding** — _I am setting this out in three parts_ **is a note the writer leaves herself while she works out that there are three parts.** **The fault is not writing it; the fault is not taking it out.** **A page that explains its own method is how you learn, and it is not how you write.**',
  '⚠ **And therefore one page a year keeps them, on purpose.** **This cycle is that page, and so is 24.1 in the second book.** **When you have to make an invisible habit visible again — to teach it, to defend it, or to find out whether you still have it — the explaining sentences come back, and they come back deliberately.**',
  '**Pronunciation.** 🔊 **Track 1.12** **Read a stripped page aloud without filling the gaps.** ⚠ **The voice wants to put _so_ and _of course_ and _as I say_ into the spaces where the scaffolding was.** **Those are the same sentences arriving through the mouth instead of the pen.** **Leave the spaces.**',
  '**Practise:** Take a sentence out and say what, if anything, is now unknown. **1** one that announces a structure  **2** one that hopes  **3** one that says what you have not done  **4** one that says why you are writing  **5** one that must stay — and say what would be unknown without it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a sentence from the card. B covers it and says **what in the document is now unknown.** ⚠ **Two rows on each card must stay**, because covering them removes a fact — **and B has to name the fact rather than ruling on the sentence.** Swap cards.'));
out.push(dlg(null, [
  ['A', '_(reads)_ __________.'],
  ['B', 'Covered, what is unknown: **nothing / __________.**'],
  ['B', 'Verdict: **out / stays** — and if it stays, the fact is **__________.**'],
]));
out.push(table(['Card A', 'Card B'], [
  ['_I am setting this out in three parts so that it can be followed._', '_I hope the above is clear._'],
  ['_⚠ The second column covers eleven days, the book having been started on the twentieth._', '_⚠ Three sets of results from 2023 are not in the system._'],
  ['_The figures below are the ones I have been able to verify._', '_I have deliberately not drawn a conclusion from the second column._'],
  ['_What I would change: I would have conceded in February._', '_And the thing all four have in common, which I did not see._'],
  ['_⚠ Nine of the forty left with the paperwork incomplete._', '_⚠ The delivery note of 4 August reads M16._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the ten verdicts, and the four rows that stay. ⚠ **Every one of the four that stays contains a figure, a date or a document** — _eleven days_, _2023_, _nine of the forty_, _4 August_ — **and every one that goes contains none.** **That is the finding and it is mechanical: a sentence with no fact in it is almost always a sentence about the writing.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **half a page of your own** and cross out every sentence that fails the covering test. ⚠ **Count what you removed and count what is left.** **Then do the part Mrs Ajouz did: for the one you most want to keep, write the five-word replacement that carries the fact instead of the tone.**'));
out.push(p('**b**  Swap. Your partner reads your stripped half-page aloud. ⚠ **You listen for the gaps being filled** — _so_, _of course_, _as I say_ — **and write down every one they put in.** **Most readers put in two or three, and they are the same sentences arriving through the mouth.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz had taken one of her own pages and removed every sentence that is about the writing: half a page about a stock discrepancy, for the regional pharmacist. Four sentences came out and the page is better, and she is not comfortable, because she was taught to write all four. Asked which four: I am setting this out in three parts so that it can be followed; the figures below are the ones I have been able to verify; I hope this is clear; and the worst one, I have deliberately not drawn a conclusion from the second column. Mrs Tarabishi said that last one is doing something, because it is telling the reader not to draw one either. Mrs Ajouz said it is telling the reader there is a conclusion there that she has decided not to draw, which is the opposite of what she wanted: she took it out and put in the reason the column is short, five words instead of eleven, and nobody has asked. Mr Shihabi said his desk takes those out without telling him, every single week. Mrs Oueidat said in court they are the only sentences she can never render, because there is nothing underneath them: I hope this is clear has no content at all, it has a tone. Mr Attar said the four sentences were useful to somebody — they were useful to her when she was writing it. Mrs Khoury said they were, and that is exactly what they are for: I am setting this out in three parts is a note the writer leaves for herself while she works out that there are three parts, and the fault is not writing it, the fault is not taking it out. Mrs Rizk said so it is scaffolding, and it is scaffolding, and the whole of the last three books is scaffolding: every model read for four years explains its own method in about four sentences, which is why they could be learned from. Mr Zahreddine said then they were taught to write something they now have to stop writing, and they were taught to write it so that they could see it — a page that explains its own method is how you learn and it is not how you write. Dr Qabbani asked how you know which sentences they are, since his do not announce themselves, and Mrs Ajouz gave one test that worked on all four of hers: cover the sentence and ask whether anything in the document is now unknown, and if nothing is unknown, the sentence was about the writing and not about the stock. Mr Attar asked about the ones that are left, and the ones that are left are the document: hers is five sentences shorter and she has had one reply instead of two, and the reply answered the thing she asked rather than asking her what she meant by part three._'));
out.push(p('**Listener task:** write the words your partner put into the gaps while reading your stripped page aloud.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mrs Ajouz\'s two drafts and the note she wrote underneath them. ⚠ **The note is the one piece of writing in this book that is allowed to be about writing.** Answer the questions.'));
out.push(model([
  '**DRAFT ONE** _(as sent in May)_ · **N. Ajouz** · _to the regional pharmacist_',
  '_I am setting this out in three parts so that it can be followed. First, the discrepancy itself. Second, what I have checked. Third, what I have not. The figures below are the ones I have been able to verify. There is a discrepancy of 340 units of one item between the delivery record and the shelf count. I counted the shelf twice, on the ninth and the eleventh, and got the same figure both times. The delivery record shows three consignments in April and the third is not initialled. I have not spoken to the driver. I have deliberately not drawn a conclusion from the second column. I hope this is clear and I am happy to go through it._',
  '**DRAFT TWO** _(the same half-page, five sentences shorter)_',
  '_There is a discrepancy of 340 units of one item between the delivery record and the shelf count. **I counted the shelf twice, on the ninth and the eleventh, and got 1,860 both times.** The delivery record shows three consignments in April, **the third of which is not initialled and is for 340.** **I have not spoken to the driver**, he having been on the Homs run since the twelfth and back on the twenty-second. **The second column covers eleven days only, the book having been started on the twentieth.** **The shelf count, the delivery record and the April book are all in the dispensary and can be looked at together in about twenty minutes.**_',
  '**THE NOTE** _(for myself, and this is the part that is about the writing)_',
  '**Four sentences came out and one came in.** The four were the three-parts sentence, the verified-figures sentence, the no-conclusion sentence and the hope sentence. ⚠ **The one that came in is the eleven days**, which is the fact the no-conclusion sentence had been standing in front of.',
  '**What I notice about the four.** **None of them contained a figure, a date or a document.** **All four of them told the reader something about me** — that I am organised, that I am careful, that I am restrained, that I am willing. ⚠ **And the second draft tells the reader the same four things without saying any of them**, because counting twice is careful and naming the eleven days is restrained.',
  '**What I got wrong, which I would not have found without doing it.** **I thought the no-conclusion sentence was the honest one.** ⚠ **It was the least honest of the four**: it told the pharmacist that there was a conclusion available and that I had chosen not to give it to him. **The eleven days is the whole of what I meant and it is not an accusation.**',
  '**And the result, which is one reply instead of two.** **Draft one got a reply asking what I meant by part three.** **Draft two got a reply asking who was on the Homs run in April.** ⚠ **The second question is the question.**',
]));
out.push(item('1', 'What are the four sentences that came out, and what does she say they have in common?'));
out.push(item('2', 'Which sentence came **in**, and what had been standing in front of that fact?'));
out.push(item('3', 'She says the second draft tells the reader the same four things about her without saying any of them. How?'));
out.push(writers([
  'Two drafts and a note: **the page as you wrote it** → **the same page with every sentence about the writing removed** → **one fact put in where a sentence about the writing had been standing** → **what the removed sentences had in common** → **the one you were most wrong about** → **and the result, in replies.**',
  '⚠ **Use the covering test on every sentence.** **Cover it; if nothing in the document is now unknown, it goes.** **About one in five stays**, and the ones that stay have a figure, a date or a document in them.',
  '**Put the fact in where the sentence about the writing was standing.** ⚠ _The second column covers eleven days only, the book having been started on the twentieth._ **A sentence announcing restraint stands in front of a fact; take it away and the fact is what you had meant all along.**',
  '**Notice what the removed sentences were telling the reader about you.** ⚠ _That I am organised, careful, restrained, willing._ **The stripped draft says all four and says none of them**, because counting twice is careful and naming the eleven days is restrained — **and a reader who works it out believes it, where a reader who is told it does not.**',
  '⚠ And **report the result as a difference in replies, not as a feeling.** _Draft one got a reply asking what I meant by part three; draft two got a reply asking who was on the Homs run in April._ **The second question is the question** — **which is the only measure of a document there has ever been.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your two drafts and the note (120 words or more in total).'));
out.push(p('**DRAFT ONE** _(as sent)_   _______________.   **DRAFT TWO** _(the same page, ______ sentences shorter)_   **______________.** **______________**, ______________ having ______________. ⚠ **______________ only, the ______________ having been ______________.**   **THE NOTE** _(for myself)_   **______ sentences came out and ______ came in.** **The ones that came out were ______________.** ⚠ **The one that came in is ______________**, which is the fact ______________ had been standing in front of.   **What I notice about them.** ⚠ **None of them contained ______________.** **All of them told the reader ______________** — and **the second draft tells the reader the same thing without saying it, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every sentence in draft two survives the covering test',
  'One fact put in where a sentence about the writing had been standing',
  'The note says what the removed sentences had in common',
  'The result reported as a difference in replies',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only the sentence that came in**, and the room says which kind of removed sentence it was standing behind.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write both drafts and the note in full (260 words or more in total), to the shape in the writer\'s box: the page as sent, the page stripped, the fact that came in, what the removals had in common, the one you were most wrong about, and the result in replies.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: draft two survives the covering test throughout, one fact in place of one removed sentence, the common property named, and the result given as replies.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their draft two aloud; the room counts the words the reader puts into the gaps.** ⚠ **_So_, _of course_, _as I say_, _obviously_ — write them down.** **Those are the removed sentences coming back through the mouth**, and the count is usually two or three. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **a page that explains its own method is how you learn, and it is not how you write.**'));
out.push(hw('Take **the document you are least pleased with from this year** and strip it. ⚠ **Count what came out, and for the one sentence you most want to keep, write the fact it has been standing in front of.** **Then the hard half, which is Mrs Ajouz\'s: write down what each removed sentence was telling the reader about you**, and check whether the stripped version still says it. **Bring both drafts and the list.** ⚠ **And note that this is the last time in this book you will be asked to write about your own writing** — **1.7 goes back to the room, and from Unit 2 the models are silent about themselves.**'));

// ===================== 1.7 =====================
out.push(h2('1.7  Review & Mediate: The correct sentence that is still visible'));
out.push(p('**Function:** explaining to somebody a year behind you why a sentence of theirs is correct and still visible   ·   **Recycling:** Unit 1   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 3 · Writing Part 1 · Listening Part 1'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 1 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Having considered the matter, the start of the day will move.  **2** We cannot certify it, the work having been unsatisfactory.  **3** I cannot yet follow two people arguing, which is quite weak.  **4** The evidence is in the part which I revised it.  **5** Four sentences came out and the page is more better.  **6** He has written forty criterions and two can be failed.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the paragraph a student a year behind this class sent in, and the two readings of it that reached Room 14 in the same week.'));
out.push(box(null, [
  '**ONE PARAGRAPH, TWO READINGS** _(the writer is in the second year of B2 and asked for comments)_',
  '**The paragraph.** _"We are unable to supply the four pallets ordered on 2 September. The reason is that the cold store has been at eleven degrees over since the eighteenth of August. We are sorry about this and we understand that it is inconvenient. We hope to be able to supply by the end of the month."_',
  '**The first reader.** _"There is nothing wrong with it. The grammar is correct, the facts are there, the date is there, it is polite. I would send it."_',
  '**The second reader.** _"It is four sentences and it should be one and a half. Sentences three and four do nothing. It reads like a form."_',
  '⚠ **Both readers have been taught by this method and both of them are wrong about the paragraph.**',
  '**And the thing neither of them said.** **The reason is in the second sentence, beginning _the reason is that_** — **and that is the part a reader can answer separately.**',
  '**The question for the cycle.** _What do you say to the person who wrote it?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. What does the room decide you must **not** say to the writer, and what is the one thing worth saying?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 1.13  What you say to the person who wrote it', [
  ['Ms Huda', 'Two readings of one paragraph, both by people who learned English the way this class did. Mrs Oueidat — which reader is right?'],
  ['Mrs Oueidat', 'Neither. ⚠ **The first one has marked it as a classmate and the second has marked it as an editor**, and the writer did not ask either of them for that.'],
  ['Ms Huda', 'Mr Shihabi.'],
  ['Mr Shihabi', '⚠ **The second reader is nearly right and is right for the wrong reason.** **Sentences three and four do indeed do nothing — but cutting them is a length argument**, and the writer will cut them and still be writing B2 paragraphs in June.'],
  ['Mrs Tarabishi', 'So what is actually wrong with it?'],
  ['Mr Shihabi', '⚠ **Nothing is wrong with it.** **It is correct and it is visible**, and the visible part is six words long: _the reason is that_.'],
  ['Dr Qabbani', 'Six words that announce a reason is coming.'],
  ['Mr Shihabi', '⚠ **Six words that put the reason in its own sentence**, where the customer can take it and argue with it on its own — **and the customer will, because eleven degrees over is exactly the kind of fact somebody rings up about.**'],
  ['Mrs Rizk', 'I have written that sentence. I wrote it for seven weeks about four pallets.'],
  ['Mr Tayara', 'And the joined version?'],
  ['Mrs Khoury', '_We are unable to supply the four pallets ordered on 2 September, the cold store having been eleven degrees over since the eighteenth of August._ ⚠ **One sentence, the fact inside it, and nothing to telephone about except the pallets.**'],
  ['Mrs Ajouz', 'But we have been told all year not to tell people what to do with their own writing.'],
  ['Ms Huda', 'Mrs Ajouz has put her finger on the whole cycle. Mr Zahreddine.'],
  ['Mr Zahreddine', '⚠ **Then do not tell her anything. Show her her own two sentences joined, and stop.**'],
  ['Mrs Tarabishi', 'And if she asks what was wrong with hers?'],
  ['Mr Zahreddine', '⚠ **Say that nothing was wrong with it, which is true**, and that the joined one cannot be answered, **which is also true and is the only thing in this that she can check for herself.**'],
  ['Jad', 'May I say the thing I would have wanted said to me? ⚠ **Because I was that writer in June and somebody did tell me, and I did nothing about it.**'],
  ['Ms Huda', 'Go on.'],
  ['Jad', '⚠ **Do not give her the rule.** **Give her her own sentence and one question: what would the customer telephone about now?** **I was given a rule and I kept the rule and lost the paper.**'],
  ['Mrs Khoury', '⚠ **Which is the mediation, and it is three moves.** **One: say what is correct, and mean it.** **Two: join her own two sentences in front of her and stop.** **Three: ask what is left to telephone about.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing not to do, which both readers did.** **Do not rank the sentences.** **_Sentences three and four do nothing_ is a verdict on a document she is going to send tomorrow**, and a writer who has been ranked defends the ranking instead of reading the joined sentence.'],
]));
out.push(sp());
out.push(box('Language box – mediating between a correct sentence and a C1 reader', [
  '**The three moves.** ⚠ **1 Say what is correct, and mean it.** **2 Join the writer\'s own two sentences in front of them, and stop.** **3 Ask the one question: _what is left to telephone about?_**',
  '⚠ **The paragraph in this cycle is not wrong.** **It is correct and it is visible, and the visible part is six words: _the reason is that_.** **Those six words put the reason in its own sentence, where a reader can take it and argue with it alone** — **and _eleven degrees over_ is exactly the kind of fact somebody telephones about.**',
  '**What both readers got wrong, and they got it wrong in opposite directions.** ⚠ **The first marked it as a classmate** — _there is nothing wrong with it, I would send it_ — **which is true about the grammar and silent about the reader.** ⚠ **The second marked it as an editor** — _it should be one and a half sentences_ — **which is a length argument, and a writer who acts on it cuts two sentences and is still writing B2 paragraphs in June.**',
  '⚠ **Do not rank the writer\'s sentences.** **_Sentences three and four do nothing_ is a verdict on a document that is going out tomorrow**, and a writer who has been ranked defends the ranking instead of reading the joined version.',
  '**Do not give the rule.** ⚠ **Give the writer their own sentence and one question.** **A rule is kept and the paper is lost** — which is what happened to one person in this room in June, who says so himself.',
  '**And the sentence to hand over, built out of her own words.** _We are unable to supply the four pallets ordered on 2 September, **the cold store having been eleven degrees over since the eighteenth of August.**_ ⚠ **One sentence, the fact inside it, and nothing to telephone about except the pallets.**',
  '**Pronunciation.** 🔊 **Track 1.14** **Read the writer\'s joined sentence to her in one breath, and then say nothing at all.** ⚠ **The silence is where she compares it with her own.** **A mediator who fills it has taken the comparison away** — and the comparison is the only part of this that is hers.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a paragraph and two readings and does **not** show them. A reads the paragraph, then both readings. B makes the three moves: **says what is correct, joins the writer\'s own two sentences aloud, and asks what is left to telephone about.** ⚠ **In one of the two pairs one of the readings is not honest** — a reader has described a fault that is not in the paragraph. Change roles with the other pair.'));
out.push(table(['Pair A – the four pallets', 'Pair B – the nine consignments'], [
  ['_First reader: "nothing wrong with it — I would send it."_', '_First reader: "the figures are muddled."_'],
  ['_Second reader: "four sentences, should be one and a half."_', '_⚠ Second reader: "there are no figures in it at all."_'],
  ['_The paragraph: "…The reason is that the cold store has been at eleven degrees over…"_', '_The paragraph: "Nine of the forty went out incomplete. This was because the code was on no slip."_'],
  ['_⚠ Both readings are honest and both miss the six words._', '_⚠ One reader has described a fault that is not there._'],
  ['_⚠ The visible part is "the reason is that"._', '_⚠ The visible part is "this was because"._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the six words that are visible in each paragraph, and each pair\'s joined sentence. ⚠ **Pair B is the one with the dishonest reading** — _there are no figures in it at all_, and there are two, _nine_ and _forty_. **The distinction is the one the cycle rests on: missing the six words is honest and inventing a fault is not.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a paragraph **you** wrote a year ago and find its six visible words — _the reason is that_ · _this was because_ · _due to the fact that_ · _I am writing to inform you that_. ⚠ **Write the joined version underneath, and then write the one question: what is left to telephone about?**'));
out.push(p('**b**  Swap with a partner and do the three moves on **their** paragraph, out loud, in order. ⚠ **Say nothing after the joined sentence until they speak.** **Count the seconds.** **Most people take between four and nine, and what they say at the end of it is the lesson.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say to the person who wrote it:  _Two readings of one paragraph, both by people who learned English the way this class did. Asked which reader is right, Mrs Oueidat said neither: the first has marked it as a classmate and the second as an editor, and the writer did not ask either of them for that. Mr Shihabi said the second reader is nearly right and is right for the wrong reason — sentences three and four do indeed do nothing, but cutting them is a length argument, and the writer will cut them and still be writing B2 paragraphs in June. Mrs Tarabishi asked what is actually wrong with it, and nothing is wrong with it: it is correct and it is visible, and the visible part is six words long, the reason is that. Dr Qabbani said six words that announce a reason is coming, and six words that put the reason in its own sentence, where the customer can take it and argue with it on its own — and the customer will, because eleven degrees over is exactly the kind of fact somebody rings up about. Mrs Rizk said she has written that sentence, for seven weeks, about four pallets. Mr Tayara asked for the joined version, and Mrs Khoury gave it: we are unable to supply the four pallets ordered on 2 September, the cold store having been eleven degrees over since the eighteenth of August. One sentence, the fact inside it, and nothing to telephone about except the pallets. Then Mrs Ajouz said they have been told all year not to tell people what to do with their own writing, which is the whole cycle, and Mr Zahreddine said then do not tell her anything: show her her own two sentences joined, and stop. Asked what to do if she asks what was wrong with hers, he said to say that nothing was wrong with it, which is true, and that the joined one cannot be answered, which is also true and is the only thing in it she can check for herself. Then Mr Attar said what he would have wanted said to him, because he was that writer in June and somebody did tell him and he did nothing about it: do not give her the rule — give her her own sentence and one question, what would the customer telephone about now? He was given a rule, kept the rule and lost the paper. Mrs Khoury put the mediation as three moves: say what is correct and mean it; join her own two sentences in front of her and stop; ask what is left to telephone about. And Mrs Oueidat gave the thing not to do, which both readers did: do not rank the sentences. Sentences three and four do nothing is a verdict on a document she is going to send tomorrow, and a writer who has been ranked defends the ranking instead of reading the joined sentence._'));
out.push(p('**Listener task:** write the six visible words from your own old paragraph, and your joined version.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 3)', 7));
out.push(p('For questions **1–8**, use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line. Write your answer **in capitals**.'));
out.push(box(null, [
  '**THE WRITING YOU CANNOT SEE**',
  'Ask a hundred readers what makes a piece of prose good and very few will mention the one quality that the best writers work hardest for. Good prose has almost no **(1)** ______________ features.   **NOTICE**',
  'This is awkward for anybody who has to teach it. A method has to be shown before it can be learned, and showing it means accepting a degree of **(2)** ______________ that no good writer wants.   **VISIBLE**',
  'The result is a kind of writing that is useful in a classroom and slightly embarrassing outside one. Nothing about its structure escapes **(3)** ______________, which is exactly what its author intended and exactly what a real reader does not want.   **OBSERVE**',
  'The step that follows is not a matter of learning more words. It is a matter of turning a set of decisions into something **(4)** ______________, so that they are taken without being thought about and therefore without being displayed.   **HABIT**',
  'None of this amounts to **(5)** ______________. A writer who buries an argument is doing something quite different from a writer who declines to narrate one, and readers tell the two apart with some accuracy.   **CONCEAL**',
  'The difference is easy to describe and hard to apply. An **(6)** ______________ artless sentence may have cost its author three drafts, while a sentence that advertises its own care may have cost one.   **APPARENT**',
  'What a careful reader finds **(7)** ______________ is not the effort but the announcement of it. Phrases such as _the reason is that_ and _it should be noted that_ are the fingerprints.   **DETECT**',
  'The grammar that does most of the work is the grammar of **(8)** ______________: the reason tucked into a clause that is not a sentence, the history carried in front, the claim left in the main clause where the reader will find it without being directed there.   **SUBORDINATE**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of a correct sentence and its C1 reader (120 words or more).'));
out.push(p('**ONE PARAGRAPH, TWO READINGS** · ______________   **The paragraph.** _"______________"_   **The first reader.** _"______________"_   **The second reader.** _"______________"_   **Which is right?** ⚠ **______________**, and the fault neither named is ______________.   **The visible words:** _______________. ⚠ **They put the reason ______________, where ______________.**   **The joined version, in her own words.** _______________, ______________ having ______________.   **The three moves.** ⚠ **1 ______________. 2 ______________. 3 ______________.**   **And what I am not going to do.** ⚠ **______________**, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What is correct, said first and meant',
  'The writer\'s own two sentences joined — her words, not yours',
  'One question at the end, and no rule given',
  'No ranking of the writer\'s sentences anywhere',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **The first essay of the C1 course, and the instruction is not the one you had at B2.** **At B2 the task gave three notes and said _use all the notes_.** **At C1 it gives three points and says to discuss _two_ of them.** **Choosing is the first thing you are marked on**, and an essay that covers all three has not followed the instruction.',
  'Your class has read an article about how professional skill is recognised. **Write an **essay** discussing **two** of the points raised.** You should **explain which two points you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about expertise. **First**, that the best work in any field looks easy, which is why it is undervalued. **Second**, that experts are poor judges of their own competence. **Third**, that training has to make a skill visible before it can make it automatic — and some learners never get past the visible stage."_',
  '**Points to discuss: 1** the best work looks easy   **2** experts misjudge their own competence   **3** training makes a skill visible before it can make it automatic',
  '⚠ **Two only, both named in your first paragraph with the reason for the choice** — **and no mention of the third after that.** **A paragraph that does two jobs loses the organisation mark, and a third point mentioned anywhere loses the content mark.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 1 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  We cannot certify the frame, the delivery note ___ M16.   a) read   b) reading   c) reads',
  '2  ___ been refused twice, we have changed the ask.   a) Having   b) Have   c) Had',
  '3  The evidence is in the part ___ nobody revised.   a) what   b) whom   c) which',
  '4  I cannot yet take a minute ___ rewriting it afterwards.   a) without   b) not   c) except',
  '5  She let ___ that the column covered eleven days only.   a) slipped   b) slip   c) slipping',
  '6  What a careful reader finds ___ is not the effort but the announcement of it.   a) detect   b) detection   c) detectable',
  '7  Nothing about the structure of the page escaped ___.   a) observation   b) observe   c) observant',
  '8  His four hedges were all in the right place, ___ he had chosen none of them.   a) despite   b) although   c) however',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 1 style – three extracts, two questions each).** 🔊 **Track 1.15** You will hear three different extracts. For questions **1–6**, choose the answer (**A**, **B** or **C**) which fits best according to what you hear.'));
[
  '**Extract One.** _You hear two colleagues talking about a letter one of them has sent._',
  '**1**  What does the man say made the difference to the second letter?   **A** it was shorter   **B** the reason went inside the news sentence   **C** he apologised earlier in it',
  '**2**  The woman is surprised that   **A** nobody telephoned about the second letter   **B** the second letter was longer than the first   **C** the client replied at all',
  '**Extract Two.** _You hear a translator talking to a colleague about a document she is working on._',
  '**3**  She says the problem with the sentence is that   **A** it is too long   **B** the vocabulary is technical   **C** she has to invent a subject for it',
  '**4**  What does she say happens in court?   **A** counsel objects to the translation   **B** counsel asks who performed the action   **C** the document is set aside',
  '**Extract Three.** _You hear a journalist talking about two paragraphs he wrote on the same day._',
  '**5**  He says the paragraph he filed late is   **A** better evidence of what he actually does   **B** better written than the early one   **C** the one his desk editor prefers',
  '**6**  What had he always assumed before?   **A** that the desk editor changed his work at random   **B** that his late work was careless   **C** that the paragraph he had looked at four times was the one that told him most about himself',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 1.15  Audio script (read after the check)', [
  ['Extract One', '_(woman)_ You sent the second one on the Monday, did you not? _(man)_ Monday morning, and the whole of the difference is that the reason went inside the first sentence instead of standing in its own. It is one word longer than the first letter, which nobody believes until they count it. _(woman)_ And he did not ring. _(man)_ He did not ring at all. _(woman)_ That is the part I find hard to credit — the first one had him on the telephone for fifty minutes about a word. _(man)_ About _appear_, yes. There was nothing in the second one to ring about except the pallets themselves.'],
  ['Extract Two', '_(woman)_ It is this one. _Having reviewed the file, the application was declined._ _(man)_ Which is grammatical. _(woman)_ Perfectly grammatical, and I cannot render it, because there is no subject anywhere for the participle. I have to supply one. If I put in the committee, the committee reviewed it; if I put in the officer, the officer did. _(man)_ And it matters which. _(woman)_ In court it is the first thing counsel reaches for. They do not object to my Arabic — they ask who reviewed the file, and the English version has declined to say.'],
  ['Extract Three', '_(man)_ Two paragraphs on the same day. One at six, which I had been over four times, and one at ten at night with the desk waiting. _(woman)_ And the six o\'clock one is the better piece of writing. _(man)_ It is better written and it is worse evidence, and I had it the wrong way round for about eleven years. The early one contains whatever I have decided to put in. The late one contains whatever I actually do — and the figure is in the first sentence of every single late one, and I have never once put it there on purpose. _(woman)_ So you have been judging yourself on the wrong paragraph. _(man)_ I assumed the one I had looked at four times was the one that said something about me.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the reason for the choice, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 1)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ put the reason inside the news sentence, as a fact with a date',
  '☐ tell a fact from a judgement by unrolling the construction into a clause',
  '☐ put the history in front and keep the main clause for what is new',
  '☐ check that a participle belongs to the subject of its main clause',
  '☐ read somebody else\'s _cannot yet_ list as data, and name its condition',
  '☐ find the evidence of an automatic habit in the part nobody revised',
  '☐ take out every sentence whose only job is to explain another sentence',
  '☐ tell a writer their sentence is correct and still visible, without giving them a rule',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _slip past · blend in · give away · creep in · shade into · harden into · sink in · dawn on · lie behind · ring true · let slip · show through_.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 1.7 draws on this)_: _notice → **noticeable** · visible → **visibility** · observe → **observation** · habit → **habitual** · conceal → **concealment** · apparent → **apparently** · detect → **detectable** · discern → **discernible** · subordinate → **subordination**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _go on_ **→ _go on to say_**, which marks the second claim as the one you are holding, where _and she also says_ flattens both · _fill in_ **→ _fill in what a sentence leaves out_**, which is what a reader does without noticing they have done it · _look at_ **→ _we are looking at about eleven days_**, an estimate that commits to nothing and is not a hedge.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 1 · Student\'s Book');
