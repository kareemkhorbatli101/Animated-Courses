// Proactive English C1 · Syria Edition · Book 2 · Unit 18 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE FORM ASKS', 'WHAT IS TRUE'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const habits = (rows) => table(['THE HABIT', 'AN EXAMPLE FROM THE REGISTER', 'WHAT IT IS FOR'], rows, [2, 2, 2]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says whether it borrows the system\'s register, mocks it, or adopts one of its claims.';
const slip = '**Peer review, C1 band 3.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and **hand it over unsigned.** **The writer answers in one line that must either concede or refuse with a reason.**';

out.push(h1('Unit 18  Writing to a System You Do Not Belong To'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Everybody in this room has a file somewhere in a system they do not work for.** ⚠ **A registration directorate.** **A graduate school registry.** **A syndicate, a licensing board, an accreditation office, an education directorate.** **And at some point every one of them has had to write a letter that the system\'s forms have no field for** — **about a case the system has no category for.**',
  '**So the axis turns to the last position it can reach.** ⚠ **In Unit 16 the reader could not refuse you.** **In Unit 17 the reader was senior, in the room, and could refuse you in front of other people.** **Here the reader has no rank, no interest and no view: the reader is a rule, applied by somebody who did not make it** — **and the person applying it will lose nothing whatever you write and may lose something if they agree with you.**',
  '**18.1** reads an institution\'s own prose as a system and names three of its habits.   **18.2** writes the request that fits a form with no field for it.   **18.3** says what a rule is for, in order to ask for an exception to it.   **18.4** writes to the person who has to apply a rule they did not make.   **18.5** puts your case in the system\'s words without adopting its claims.   **18.6** writes the letter into an institution that has no category for you.   **18.7** mediates between the applicant, the clerk, and the rule.',
  '**Exam practice in 18.7:** C1 Advanced **Reading and Use of English Part 3** (word formation), **Writing Part 2** (the letter or email) and **Listening Part 2** (sentence completion).',
  '⚠ **Bring a form you have had to fill in for a body you do not work for, and anything that body has written to you.** **A circular, a refusal, a letter of acknowledgement, a page of a register.** **18.1 reads that prose and it cannot be done on a memory of it** — **and the worse the prose is, the more useful it will be in the lesson.**',
  '**And the warning this unit needs in its first minute.** ⚠ **Nothing here is about defeating a bureaucracy, and nothing here mocks one.** **A letter that is pleased with itself about official language has told the only person who can help you that you think their working life is absurd.** **Every cycle in this unit does the opposite: it reads the system\'s prose as prose that does a job, borrows the parts that do the job, and refuses only the claims** — **which is a harder discipline than contempt and the only one that has ever opened a file.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 18.1 =====================
out.push(pb());
out.push(h2('18.1  Reading a system\'s prose as a system'));
out.push(p('**Function:** reading an institution\'s own prose from outside it and naming three of its habits   ·   **Grammar:** the habit named, with an example and what it is for   ·   **Pronunciation:** reading official prose aloud without a tone of mockery'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence from the official prose you brought, read aloud exactly, with no tone.** ⚠ **Exactly, and flat.** **In this class eight of ten first readings carried a tone and four of the eight got a laugh** — **and your teacher writes the ten sentences on the board, because the cycle is about what each one is for.**'));
out.push(board('Field 7: previous school', 'There is no previous school on record.'));
out.push(p('**b**  Which two name a habit rather than complain about one? **1** _They cannot write a plain sentence to save their lives._  **2** _It never gives a purpose, only a procedure: eleven circulars and not one says what the certificate is for._  **3** _It is deliberately obscure so that nobody can argue._  **4** _It describes people by the document they hold — the holder of a current certificate, not the pharmacist — which lets one rule cover people in four different trades._  **5** _Nobody there has ever written for a human being._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the official prose is?   **A** bad writing by people who cannot write   **B** **writing that does a job**, whose habits can be named and borrowed   **C** a deliberate obstacle'));
out.push(p('**b**  Listen again. **1** What does Mrs Ajouz say she found when she looked for a purpose?   **2** What does Mrs Khoury say a letter that mocks the register has told its reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.1  Prose that does a job', [
  ['Ms Huda', 'Mrs Ajouz has read eleven circulars from the registration directorate.'],
  ['Mrs Ajouz', '⚠ **Eleven, in order, in one evening, which I had never done in nine years.** **And the first thing I looked for was the purpose of the certificate** — **and there is no sentence anywhere in the eleven that says what it is for.**'],
  ['Mrs Khoury', 'That is the first habit.'],
  ['Mrs Ajouz', '⚠ **Procedure and no purpose.** **Who may apply, what must accompany the application, what happens if it is late, how long it is valid** — **and nothing at all about why the thing exists, which took me two hours to be sure of because I kept assuming I had missed it.**'],
  ['Mr Attar', 'Why would they leave that out?'],
  ['Mrs Oueidat', '⚠ **Because a purpose can be argued with and a procedure cannot.** **The moment a circular says what a rule is for, every applicant whose case meets the purpose and not the procedure has a letter to write** — **which is 18.3, and the room will see that the habit is a defence against the very thing this unit teaches.**'],
  ['Dr Qabbani', 'And the second habit?'],
  ['Mrs Ajouz', '⚠ **It describes people by the document they hold.** **_The holder of a current certificate._** **Not the pharmacist, not the owner, not the person** — **and I was annoyed by that for about an hour and then saw what it is for: one rule covers four trades and a dozen kinds of premises, and it covers them because it never names any of them.**'],
  ['Mrs Khoury', '⚠ **Which is the moment the cycle turns, and the room should notice it happening.** **An hour of annoyance and then a use.** **_The holder of_ is not evasion: it is how one page does the work of twelve** — **and a letter that uses the phrase correctly has told the reader that the writer has read the circular.**'],
  ['Mrs Rizk', 'The third?'],
  ['Mrs Ajouz', '⚠ **Every sentence is written to be read by somebody who will have to defend it.** **_May be accepted_ · _is not ordinarily required_ · _shall be determined by the directorate_.** **No actor, and a door left open in every clause** — **and when I wrote back using _may be accepted_ about my own file, the reply used it too, which had never happened in nine years of my writing _please accept_.**'],
  ['Mr Tayara', 'So you imitated it.'],
  ['Mrs Khoury', '⚠ **She borrowed it, which is not the same and the difference is the whole unit.** **Imitating means adopting the claims as well as the words.** **Borrowing means taking the register and refusing the premise** — **which is 18.5, and it is the hardest cycle in this book.**'],
  ['Mr Shihabi', 'What happens if you make fun of it instead?'],
  ['Mrs Khoury', '⚠ **You have told the only person who can help you that you think their working life is absurd.** **A clerk reads forty letters a week and about six of them are pleased with themselves about official language** — **and all six go to the bottom of the pile, not out of spite, but because a letter that is performing has not asked for anything a clerk can do.**'],
  ['Mrs Tarabishi', 'Mine is a registry and the prose is quite different.'],
  ['Mrs Oueidat', '⚠ **Then name its habits and not these.** **The three are not universal and the method is: read the prose in order, look for a purpose, see how it names people, and see who is being defended in every clause** — **and in a registry\'s prose the third habit is usually about dates rather than actors.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the two hours.** **I spent two hours looking for a sentence that said what the certificate was for, and the reason I could not find it is that there is not one** — **and nine years of being irritated by those circulars had never once made me read eleven of them in order.**'],
]));
out.push(sp());
out.push(box('Language box – naming a system\'s habits', [
  '**A habit is named with an example and a use, in that order.** ⚠ _It never gives a purpose, only a procedure: eleven circulars and not one says what the certificate is for._ **Habit, count, and then what the habit is for** — **and a habit with no use attached is a complaint with a number in it.**',
  '**Habit one, in most systems: procedure and no purpose.** ⚠ **Who may apply, what must accompany it, what happens if it is late, how long it lasts** — **and nothing about why the thing exists.** **A purpose can be argued with and a procedure cannot, which is exactly what 18.3 is for.**',
  '**Habit two: people are described by the documents they hold.** ⚠ **_The holder of a current certificate_, not the pharmacist.** **It is not evasion: it is how one page does the work of twelve** — **and a letter that uses the phrase correctly has told the reader that the writer has read the circular.**',
  '**Habit three: every clause is written to be defended later.** ⚠ **_May be accepted_ · _is not ordinarily required_ · _shall be determined by the directorate_.** **No actor and a door left open** — **and the door is the thing you are going to walk through in 18.3.**',
  '**Borrowing is not imitating.** ⚠ **Imitating takes the words and the claims.** **Borrowing takes the register and refuses the premise** — **and the difference is the subject of 18.5, which is the hardest cycle in this book.**',
  '**And mockery costs you the only reader you have.** ⚠ **A clerk reads forty letters a week and about six are pleased with themselves about official language.** **All six go to the bottom of the pile** — **not out of spite, but because a letter that is performing has not asked for anything a clerk can do.**',
  '**Pronunciation.** 🔊 **Track 18.2** **Read one official sentence twice: once as you feel about it, and once flat.** ⚠ **The room says which one it could hear the words of.** **It is the flat one** — **and this is 15.1\'s exercise applied to somebody else\'s prose, which the room should be told, because the two cycles are the same move in opposite directions.**',
  '**Practise:** Name the habit, give the example, say what it is for. **1** no purpose anywhere  **2** people named by documents  **3** no actor in any clause  **4** a habit about dates  **5** a habit your own trade has',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the official sentence from the card, flat. B names **the habit**, gives **the count or the example**, and says **what the habit is for.** ⚠ **Two rows on each card are complaints and not habits** — **and there B says so and finds the habit underneath.** Change cards.'));
out.push(table(['Card A – the official sentence', 'Card B – the official sentence'], [
  ['_The holder of a current certificate may apply._', '_Applications shall be determined by the directorate._'],
  ['_⚠ They cannot write a plain sentence._', '_⚠ It is deliberately obscure._'],
  ['_A transfer certificate is not ordinarily required._', '_Late submission may be accepted._'],
  ['_⚠ Nobody there writes for a human being._', '_⚠ They hide behind the passive._'],
  ['_Registration shall take effect from the date of determination._', '_Field 7: previous school._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the habit, the example, and what it is for. ⚠ **Rows 2 and 4 on both cards are complaints and the room must find the habit under each**, which is in every case one of the three. **Rows 5 are the strongest on either card**: one is a habit about dates and one is a form field with no alternative, **and both are the doors that 18.2 and 18.3 go through.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the official prose you brought** and read it in order. ⚠ **Name three habits, each with an example and a use.** **Then look for a sentence that says what the thing is for.** **In this class two students found one and eight did not** — **and the two who found one had brought prose from a body that had been reorganised in the last three years, which the room should notice.**'));
out.push(p('**b**  Swap. Your partner reads **only your three habits** and says whether each has a use attached. ⚠ **Then the harder question: which habit could you use in a letter tomorrow?** — **and in this class the answer was the second one, seven times in ten.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz has read eleven circulars from the registration directorate, in order, in one evening, which she had never done in nine years, and the first thing she looked for was the purpose of the certificate, and there is no sentence anywhere in the eleven that says what it is for. Mrs Khoury said that is the first habit, and procedure and no purpose: who may apply, what must accompany the application, what happens if it is late, how long it is valid, and nothing at all about why the thing exists, which took her two hours to be sure of because she kept assuming she had missed it. Mr Attar asked why they would leave that out, and Mrs Oueidat said because a purpose can be argued with and a procedure cannot, since the moment a circular says what a rule is for, every applicant whose case meets the purpose and not the procedure has a letter to write. Dr Qabbani asked about the second habit, and it describes people by the document they hold: the holder of a current certificate, not the pharmacist, not the owner, not the person, and she was annoyed by that for about an hour and then saw what it is for, because one rule covers four trades and a dozen kinds of premises and it covers them because it never names any of them. Mrs Khoury said that is the moment the cycle turns: an hour of annoyance and then a use, because the holder of is not evasion but how one page does the work of twelve. Mrs Rizk asked for the third, and every sentence is written to be read by somebody who will have to defend it: may be accepted, is not ordinarily required, shall be determined by the directorate, with no actor and a door left open in every clause, and when she wrote back using may be accepted about her own file the reply used it too, which had never happened in nine years of her writing please accept. Mr Tayara said so she imitated it, and Mrs Khoury said she borrowed it, which is not the same, because imitating means adopting the claims as well as the words and borrowing means taking the register and refusing the premise. Mr Shihabi asked what happens if you make fun of it instead, and you have told the only person who can help you that you think their working life is absurd. Mrs Tarabishi said hers is a registry and the prose is quite different, and then name its habits and not these, because the three are not universal and the method is. And Mrs Ajouz said the thing she will take away is the two hours she spent looking for a sentence that said what the certificate was for, and the reason she could not find it is that there is not one._'));
out.push(p('**Listener task:** write your partner\'s three habits with the use attached to each.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Ajouz wrote after reading the eleven circulars. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _note on eleven circulars of the registration directorate_ · _read in order, one evening_ · **3 June**',
  '**What I was looking for.** **The purpose of the certificate.** ⚠ **There is no sentence in the eleven circulars that says what it is for, and it took me two hours to be sure of that, because I kept assuming I had missed it.**',
  '**Habit one · Procedure and no purpose.** **Who may apply, what must accompany an application, what happens when it is late, how long it remains valid.** ⚠ **Four kinds of sentence and all four are about the handling of paper.** **What it is for: a purpose can be argued with and a procedure cannot** — **and the directorate is a body that is asked to explain itself upwards about twice a year.**',
  '**Habit two · People are named by the documents they hold.** _The holder of a current certificate._ **Not the pharmacist, not the owner of the premises, not a person at all.** ⚠ **I was annoyed by this for about an hour.** **What it is for: one rule covers four trades and a dozen kinds of premises, and it covers them because it names none of them** — **and I now think it is the best-made thing in the eleven.**',
  '**Habit three · Every clause is written to be defended later.** _May be accepted_ · _is not ordinarily required_ · _shall be determined by the directorate_. ⚠ **No actor anywhere, and a door left open in each one.** **What it is for: the person who wrote it will be asked, in two years, by somebody senior, why a thing was done** — **and _may_ is what makes the answer survivable.**',
  '**The use of habit three, which is the reason I wrote this note.** **In April I wrote _please accept the day-book_ and had a refusal in eleven days.** ⚠ **In May I wrote _the day-book may be accepted under the terms of circular 4 of 2019, in which it is not ordinarily required that the register be printed_** — **and the reply used _may be accepted_ back at me and asked for a photograph of the page.**',
  '**What I am not going to do with any of this.** **Make fun of it.** ⚠ **Nine years of being irritated by these circulars produced no letters at all, and one evening of reading them in order produced a sentence that got an answer** — **and the irritation was doing nothing except making me feel like the reasonable party.**',
  '**One more habit, which is not among my three.** **The circulars never refer to one another by date.** ⚠ **Circular 4 of 2019 restates most of circular 2 of 2016 and does not say so** — **and the use of that is immediate: a provision you cannot find in the current circular is often in an older one that was never withdrawn.**',
  '**One thing I could not place.** **Circular 7 of 2021 contains a single sentence that gives a reason: _in order that a branch may be identified by its stock._** ⚠ **It is the only purpose in eleven documents and it is about stock and not about people** — **and I do not yet know whether it is a mistake or the thing the whole system is actually for.**',
]));
out.push(item('1', 'How long did it take her to be sure there was no statement of purpose, and why so long?'));
out.push(item('2', 'What changed between her April letter and her May letter, and what came of it?'));
out.push(item('3', 'What does she say nine years of irritation produced, and what did one evening produce?'));
out.push(writers([
  'A note on an institution\'s own prose: **what you were looking for, and whether it is there** → **three habits, each with examples and what the habit is for** → **the use you made of one of them, with the two letters and their outcomes** → **what you are not going to do with it** → **and one thing you could not place.**',
  '⚠ **Give each habit a use and not a verdict.** _A purpose can be argued with and a procedure cannot._ **A habit named without a use is a complaint with a number in it** — **and the use is what makes the habit available to you in a letter, which is the only reason to name it.**',
  '**Record your own annoyance and then record what it turned into.** ⚠ _I was annoyed by this for about an hour._ **That sentence is what stops the note being either a complaint or a piece of flattery** — **and the turn from annoyance to use is the thing the reader of your note most needs to be able to make themselves.**',
  '**Prove the use with two letters and two outcomes.** ⚠ _In April I wrote please accept and had a refusal in eleven days; in May I wrote may be accepted under the terms of circular 4 and the reply used may be accepted back at me._ **One pair of letters with dates beats any amount of analysis.**',
  '⚠ And **end on the thing you could not place.** _The only purpose in eleven documents is about stock and not about people._ **A note that explains everything has stopped reading** — **and the unplaceable sentence is usually where the system\'s real purpose is.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on official prose you have read in order (120 words or more).'));
out.push(p('**______________** · _note on _______________ · _read in order_ · **______________**   **What I was looking for.** **______________.** ⚠ **______________.**   **Habit one · ______________.** **______________.** ⚠ **What it is for: ______________.**   **Habit two · ______________.** **______________.** ⚠ **I was annoyed by this for ______________.** **What it is for: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three habits, each with an example',
  'A use attached to every habit',
  'Your own annoyance recorded, and what it became',
  'One thing you could not place',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one official sentence flat and then the habit under it**, and the room says what the habit is for.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: what you were looking for, three habits with their uses, the use you made of one, what you will not do with it, and the thing you could not place.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a use under every habit, nothing that mocks the prose, and one sentence you could not place.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **One count on the board: how many students found a statement of purpose in the prose they brought?** **Two of ten** — **and both had brought prose from a body reorganised in the last three years, which the room should be asked to explain.** **Then read two official sentences aloud, once with a tone and once flat, and let the room hear which one it can hear the words of.** **Then Mrs Ajouz\'s two hours.**'));
out.push(hw('**Read your official prose in order and name three habits, each with an example and a use.** ⚠ **Then do the harder half: find the sentence that says what the thing is for, and if there is none, say how long you looked.** **In this class the searches ran from twenty minutes to two hours and eight of ten found nothing** — **and the two who found something found it in a document issued after a reorganisation.** **Bring the three habits and the time.** **18.2 writes the request that fits a form with no field for it**, so bring a form with a field you cannot honestly complete.'));

// ===================== 18.2 =====================
out.push(pb());
out.push(h2('18.2  The form with no field for it'));
out.push(p('**Function:** writing the request that fits a form with no field for it   ·   **Grammar:** the covering line that names the field, the entry and the reason   ·   **Pronunciation:** the covering line read as a caption, not as a plea'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the field you cannot honestly complete, its number, and what you have put in it.** ⚠ **The field number, and the words you put in the box.** **In this class six of ten had left the field empty, three had written something untrue, and one had written _see attached_ with nothing attached** — **and your teacher writes the ten field numbers on the board, because the covering line names one of them.**'));
out.push(board('Field 7: previous school', '_Not on record_ — and the reason at paragraph 2.'));
out.push(p('**b**  Which two give the clerk something to do? **1** _I am afraid the form does not really cover my situation._  **2** _Field 7 (previous school) reads “not on record”. The reason is at paragraph 2 of this note, which you may attach to the form._  **3** _Please see the attached letter for an explanation of my circumstances._  **4** _Field 4 (date of first registration) is left blank. There is no date: the entry the directorate holds is a transfer in 2019 with no origin. Paragraph 3 gives the two documents I do have._  **5** _I hope you will understand that my case is unusual._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the covering line must do?   **A** explain the applicant\'s circumstances   **B** **name the field, say what is in it, and give the clerk a sentence they may attach**   **C** apologise for not fitting the form'));
out.push(p('**b**  Listen again. **1** What does Mr Tayara say the clerk did with his paragraph?   **2** What does Mrs Oueidat say an empty field becomes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.3  Field seven, and the sentence they may attach', [
  ['Ms Huda', 'Mr Tayara has a pupil the form cannot register.'],
  ['Mr Tayara', '⚠ **Nine years old, two years out of school, and no transfer certificate, because there is no record of a previous school anywhere.** **Field 7 of form ED/2 asks for the previous school.** **There is no field for _no previous school on record_, and the form will not go through without field 7.**'],
  ['Mrs Khoury', 'What did you put in it the first time?'],
  ['Mr Tayara', '⚠ **Nothing, which I thought was honest.** **The form came back in nine days with field 7 ringed in red and no letter** — **and I had not understood that an empty field is not a statement, it is a gap that somebody has to close before the file can move.**'],
  ['Mrs Oueidat', '⚠ **And nobody can close it except the person who left it empty.** **An empty field becomes a letter the clerk has to write** — **and a clerk with forty files on a Tuesday does not write a letter, they ring the field and send the form back, which costs everybody nine days and is nobody\'s fault.**'],
  ['Mr Attar', 'So what goes in field 7?'],
  ['Mr Tayara', '⚠ **Three words: _not on record_.** **And then the covering line, clipped to the front, which is the whole of this cycle.** _Field 7 (previous school) reads "not on record". The reason is at paragraph 2 of this note, which you may attach to the form._'],
  ['Dr Qabbani', 'Why _which you may attach_?'],
  ['Mrs Khoury', '⚠ **Because that is the clause that does the work and nobody writes it.** **The clerk cannot invent a reason and cannot accept a gap** — **but a clerk may attach a document, which is a thing their own procedure provides for.** **You are not asking them to agree with you: you are handing them a piece of paper that makes the file complete.**'],
  ['Mrs Rizk', 'And paragraph 2 has to be attachable.'],
  ['Mr Tayara', '⚠ **Which changed how I wrote it entirely.** **It is four sentences, it names the boy by his file number and not his name, and it contains nothing about how long he has been out of school** — **because a paragraph that will sit in a file has to be readable by somebody who has never heard of either of us, in two years.**'],
  ['Mr Shihabi', 'Nothing about the two years? That is the part that matters.'],
  ['Mrs Oueidat', '⚠ **It matters to the boy and not to field 7, and that is the discipline.** **The covering line answers the field.** **The two years go in the letter of 18.6, which is a different document to a different person** — **and a covering line that argues the case has stopped being a caption and become a plea, which the clerk cannot attach to anything.**'],
  ['Mrs Tarabishi', 'Mine is a registry field about a start date I do not have.'],
  ['Mr Tayara', '⚠ **Then the same three parts and your own words.** **Field number, what is in the box, where the reason is** — **and the reason has to be a fact about a record and not about you: _the entry the registry holds is a transfer in 2019 with no origin_ is attachable, and _I have never been able to establish it_ is not.**'],
  ['Mrs Ajouz', 'How long should the covering line be?'],
  ['Mrs Khoury', '⚠ **One sentence for each field you cannot complete, and no more than three fields.** **A form with four impossible fields is the wrong form** — **and that is a sentence to the person who designs forms and not to the clerk, which is 18.4 and 18.6 respectively.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is what the clerk did with paragraph 2.** **She attached it, initialled it, and wrote one word in the margin of field 7: _see attached, initialled_.** **The file went through in four days** — **and the only difference between February and April was that in April I gave her something she was allowed to do.**'],
]));
out.push(sp());
out.push(box('Language box – the covering line', [
  '**Three parts, in this order.** ⚠ **The field number with its name; what is in the box, quoted; and where the reason is, with permission to attach it.** _Field 7 (previous school) reads "not on record". The reason is at paragraph 2 of this note, which you may attach to the form._',
  '**An empty field is not a statement.** ⚠ **It is a gap somebody has to close before the file can move** — **and a clerk with forty files on a Tuesday does not write a letter about a gap, they ring the field and send the form back, which costs nine days and is nobody\'s fault.**',
  '**_Which you may attach_ is the clause that does the work and almost nobody writes it.** ⚠ **A clerk cannot invent a reason and cannot accept a gap, and a clerk may attach a document** — **because attaching is a thing their own procedure provides for.** **You are not asking them to agree: you are handing them paper that makes the file complete.**',
  '**So the paragraph has to be attachable.** ⚠ **Four sentences, the file number rather than the name, and nothing that is only true today.** **A paragraph that will sit in a file must be readable by somebody who has never heard of either of you, in two years.**',
  '**The reason is a fact about a record, not about you.** ⚠ **_The entry the registry holds is a transfer in 2019 with no origin_ is attachable.** **_I have never been able to establish it_ is not** — **and the second is truer and useless, which is the hardest sentence in the cycle.**',
  '**One sentence per impossible field, and no more than three fields.** ⚠ **A form with four impossible fields is the wrong form** — **and that is something to say to whoever designs forms, not to the clerk who is holding this one.**',
  '**Pronunciation.** 🔊 **Track 18.4** **Read the covering line as a caption: flat, with a small pause at each full stop and no rise anywhere.** ⚠ **A rise on _which you may attach_ turns permission into a request for a favour** — **and a caption is read in four seconds while a plea is read twice and then set aside.**',
  '**Practise:** Name the field, the entry, the reason. **1** a previous school that is not on record  **2** a start date that does not exist  **3** a category with no box for it  **4** a figure you can only give as a range  **5** a field that asks for a document nobody issues',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the field from the card. B gives **the covering line**: the field, the entry quoted, and where the reason is. ⚠ **Two rows on each card are pleas and not captions** — **and there B says so and writes the caption.** Change cards.'));
out.push(table(['Card A – the field', 'Card B – the field'], [
  ['_Field 7: previous school._', '_Field 4: date of first registration._'],
  ['_⚠ The form does not really cover my situation._', '_⚠ I hope you will understand that my case is unusual._'],
  ['_Field 11: register number of the printed register._', '_Field 2: name of the certifying body._'],
  ['_⚠ Please see the attached letter for my circumstances._', '_⚠ I should be most grateful for your consideration._'],
  ['_Field 9: number of staff, which varies between two and five._', '_Field 6: a document the directorate stopped issuing in 2017._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the field number, the entry, and where the reason is. ⚠ **Rows 2 and 4 on both cards are pleas, and the room must say what a clerk could do with each, which is nothing.** **Rows 5 are the strongest on either card**: one gives a range with its denominator and one names a document the body itself has stopped issuing — **and the second is the only entry on either card that the clerk can close without anybody\'s permission.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the field you cannot complete** and write **the covering line**: field number and name, the entry in quotation marks, and where the reason is. ⚠ **Then write the paragraph it points to, in four sentences, using a file number rather than a name.** **In this class seven of ten first paragraphs contained something about the writer\'s feelings** — **and all seven were unattachable for that reason alone.**'));
out.push(p('**b**  Swap. Your partner reads **only the paragraph** and says whether it could be attached to a file and read by a stranger in two years. ⚠ **Then the harder question: does your covering line give them permission to attach it?** — **and in this class three of ten had the words _you may attach_ and seven did not.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara has a pupil the form cannot register: nine years old, two years out of school, and no transfer certificate, because there is no record of a previous school anywhere, and field 7 of form ED/2 asks for the previous school and the form will not go through without it. Mrs Khoury asked what he put in it the first time, and nothing, which he thought was honest, and the form came back in nine days with field 7 ringed in red and no letter, and he had not understood that an empty field is not a statement but a gap that somebody has to close before the file can move. Mrs Oueidat said nobody can close it except the person who left it empty, because an empty field becomes a letter the clerk has to write, and a clerk with forty files on a Tuesday does not write a letter, they ring the field and send the form back. Mr Attar asked what goes in field 7, and three words, not on record, and then the covering line clipped to the front, which is the whole of the cycle. Dr Qabbani asked why which you may attach, and Mrs Khoury said because that is the clause that does the work and nobody writes it: the clerk cannot invent a reason and cannot accept a gap, but a clerk may attach a document, which is a thing their own procedure provides for. Mrs Rizk said and paragraph 2 has to be attachable, and that changed how he wrote it entirely: four sentences, the boy named by his file number and not his name, and nothing about how long he has been out of school. Mr Shihabi said nothing about the two years, which is the part that matters, and Mrs Oueidat said it matters to the boy and not to field 7, and that is the discipline, because the covering line answers the field and the two years go in the letter of 18.6. Mrs Tarabishi said hers is a registry field about a start date she does not have, and then the same three parts and her own words, and the reason has to be a fact about a record and not about her. Mrs Ajouz asked how long the covering line should be, and one sentence for each field you cannot complete and no more than three fields. And Mr Tayara said the thing he will take away is what the clerk did with paragraph 2: she attached it, initialled it, and wrote see attached, initialled in the margin of field 7, and the file went through in four days, and the only difference between February and April was that in April he gave her something she was allowed to do._'));
out.push(p('**Listener task:** write your partner\'s covering line and say whether it gives permission to attach.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note Mr Tayara clipped to form ED/2 in April. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _covering note to form ED/2_ · _file ED/2-4471_ · **11 April**',
  '**1 · The form and the fields.** **Form ED/2 for file 4471 is enclosed, completed except as set out below.** ⚠ **Two fields cannot be completed from the record and each is dealt with in one line.**',
  '**2 · Field 7 (previous school) reads "not on record".** **The reason is at paragraph 5 of this note, which you may attach to the form.**',
  '**3 · Field 4 (date of first registration) is left blank.** ⚠ **There is no date to give: the only entry held in the governorate is an admission in 2019 at a school that closed in the same year and whose records were not transferred.** **The reason is at paragraph 6, which you may also attach.**',
  '**4 · What is enclosed.** **Form ED/2; the birth certificate; the governorate\'s own list of school closures for 2019, at page 3 of which the school appears; and this note in two copies, one for attachment.**',
  '**5 · The reason for field 7, for attachment.** **No previous school is on record for file 4471.** ⚠ **The school at which the pupil was admitted in 2019 appears at page 3 of the governorate\'s closure list for that year.** **No transfer of records from that school is recorded in the governorate\'s register.** **A transfer certificate cannot therefore be produced by any party.**',
  '**6a · The form of the second copy.** **The sheet at paragraph 5 is typed on one side, carries the file number at its head, and has no salutation and no signature block.** ⚠ **It is written so that it can be initialled and filed by somebody who has never read this note** — **and the first version I sent was a page of a letter, which the office could not use and returned with the form.**',
  '**7 · The reason for field 4, for attachment.** **The only admission entry held for file 4471 is dated 2019 and gives no origin.** ⚠ **The directorate\'s own guidance at circular 11 of 2020 provides that where an origin is not held, the date of determination is entered on registration.** **Field 4 is left blank for that reason and not for want of a document.**',
  '**8 · What is not in this covering note, and why.** **That the pupil has been out of school for two years.** ⚠ **It is the most important fact about file 4471 and it has no bearing on field 7** — **and a covering note that carries it has stopped being a caption and become a plea, which cannot be attached to anything.** **It is in my letter of 19 April, which is addressed to the section and not to the form.**',
  '**9 · If a paragraph is wrong.** **I shall send a corrected sheet on the day I am told, carrying the same file number and the date of the correction.** ⚠ **Nothing in either paragraph rests on my own account of anything.**',
  '**10 · What I am not asking for.** **No exception and no discretion.** ⚠ **Both fields are closed by documents the directorate itself holds** — **and if either paragraph is wrong about the directorate\'s records, the correction is the directorate\'s and I shall supply whatever follows from it.**',
]));
out.push(item('1', 'How many fields cannot be completed, and how is each one dealt with?'));
out.push(item('2', 'What do paragraphs 5 and 6 rest on, and why does that matter?'));
out.push(item('3', 'What does paragraph 7 say he is not asking for?'));
out.push(writers([
  'A covering note to a form: **the form, the file, and how many fields cannot be completed** → **one line per field: the number, the name, the entry quoted, and where the reason is** → **what is enclosed, listed** → **the reasons themselves, written for attachment** → **and what you are not asking for.**',
  '⚠ **Give one line to each impossible field and put the reasons at the end.** **A covering note that explains as it goes cannot be read in four seconds** — **and the clerk reads the first page to find out what to do and the last pages only if they are going to attach them.**',
  '**Write the attachable paragraphs as if you were not in them.** ⚠ _No previous school is on record for file 4471._ **File numbers, documents, dates and the body\'s own lists** — **and no sentence that would need either of you present to be understood.**',
  '**Rest every reason on a document the institution itself holds.** ⚠ _The governorate\'s own closure list for 2019, at page 3._ **A reason resting on your own account asks the clerk to believe you; a reason resting on their list asks them to look** — **and looking is a thing a clerk may do and believing is not.**',
  '⚠ And **end by saying what you are not asking for.** _No exception and no discretion._ **Most covering notes are read as requests for discretion and refused on that ground before anybody reads the documents** — **and a note that disclaims discretion in six words has removed the commonest reason for refusal.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the covering note\'s first half (120 words or more).'));
out.push(p('**______________** · _covering note to _______________ · _file _______________ · **______________**   **1 · The form and the fields.** **______________ is enclosed, completed except as set out below.** ⚠ **______________ fields cannot be completed from the record.**   **2 · Field ___ (______________) reads "______________".** **The reason is at paragraph ___ of this note, which you may attach to the form.**   **3 · What is enclosed.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'One line per impossible field, with the entry quoted',
  'Permission to attach, in those words',
  'Every reason resting on a document the body holds',
  'A sentence saying what you are not asking for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their covering line**, as a caption, and the room says what the clerk may now do.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole covering note (260 words or more), to the shape in the writer\'s box: the form and the count of fields, a line per field, the enclosures, the attachable reasons, and what you are not asking for.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: permission to attach, every reason on the body\'s own document, and nothing in the attachable paragraphs that needs you present.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many covering lines contained the words _you may attach_?** **Three of ten.** **How many attachable paragraphs contained something about the writer\'s feelings?** **Seven** — **and all seven were unattachable for that reason alone, which is a sentence to say rather than explain.** **Then Mr Tayara\'s four days, and the three words the clerk wrote in the margin.**'));
out.push(hw('**Write the covering line for your impossible field and the paragraph it points to**, in four sentences, for attachment. ⚠ **Then do the harder half: find the document the body itself holds that your reason can rest on.** **In this class six of ten found one, and four of the six found it in a list the body publishes** — **and the four reasons that rested on the writer\'s own account were all refused in the role-play.** **Bring the document reference.** **18.3 says what a rule is for in order to ask for an exception to it**, so bring a rule you want an exception to and read it twice before the lesson.'));

// ===================== 18.3 =====================
out.push(pb());
out.push(h2('18.3  What the rule is for'));
out.push(p('**Function:** saying what a rule is for, in order to ask for an exception to it   ·   **Grammar:** the purpose stated, then the case measured against the purpose   ·   **Pronunciation:** the purpose read as a statement of fact about the rule'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the rule you want an exception to, and what you think it is for.** ⚠ **What it is for, in one sentence, and not what it does.** **In this class nine of ten gave what the rule does and one gave a purpose** — **and your teacher writes the ten on the board and strikes every sentence that begins _it stops people from_ without saying why that is worth stopping.**'));
out.push(board('A transfer certificate is required.', 'So that no pupil is registered twice in one year.'));
out.push(p('**b**  Which two argue from the rule\'s purpose? **1** _The rule is unfair in a case like this._  **2** _The certificate exists so that no pupil is registered twice in one year. File 4471 cannot be registered twice: the governorate\'s own list shows no other registration._  **3** _Surely an exception can be made for a nine-year-old._  **4** _The deadline exists so that the round can be scored against a single set of figures. The figures for this scheme were published by the governorate on 2 March, after the deadline, and no other scheme used a later set._  **5** _I am sure the directorate did not intend this result._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the exception must be argued from?   **A** the hardship of the case   **B** **the rule\'s own purpose**, with the case measured against it   **C** the intention of the people who made the rule'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say about arguing from hardship?   **2** What does Mrs Khoury say you must do if the purpose is not written down anywhere?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.5  The purpose, and the case measured against it', [
  ['Ms Huda', 'Mr Tayara wants an exception to the transfer certificate rule.'],
  ['Mr Tayara', '⚠ **And my first letter was about the boy.** **Nine, two years out of school, nobody\'s fault** — **and it was refused in three lines and the three lines were right, because I had asked a clerk to weigh a child against a regulation and she has no instrument for that.**'],
  ['Mrs Oueidat', '⚠ **Which is the thing to say first and plainly: hardship is not an argument to a system.** **It is an argument to a person, and the person reading your letter is not permitted to be one** — **and a letter that asks them to be a person has asked for the one thing they cannot give and has given them no ground for the thing they can.**'],
  ['Mrs Khoury', 'So the argument is the purpose.'],
  ['Mr Tayara', '⚠ **What the certificate is for, and it is one sentence: so that no pupil is registered at two schools in one year.** **And then the case against the purpose: file 4471 cannot be registered twice, because the governorate\'s own list shows no other registration in the governorate** — **and that is not a request for discretion, it is a demonstration that the purpose is already met.**'],
  ['Mr Attar', 'Where did you get the purpose? The circulars do not give one.'],
  ['Mrs Khoury', '⚠ **Which is 18.1 arriving with a consequence, and here is what you do.** **You derive it, you state it as a derivation, and you invite correction in the same sentence.** _The certificate appears to exist in order that no pupil is registered at two schools in one year; if that is not its purpose, I should be glad to be corrected._'],
  ['Dr Qabbani', 'Does that not weaken it?'],
  ['Mrs Oueidat', '⚠ **It is the strongest form available and the room will not believe that until it hears the refusals.** **A stated purpose that invites correction cannot be dismissed: the clerk either lets it stand, in which case your case is measured against it, or corrects it** — **and a correction is a written statement of purpose, which is the thing you could not find in eleven circulars.**'],
  ['Mrs Rizk', 'So either way you get the purpose.'],
  ['Mrs Khoury', '⚠ **Either way you get it, and that is the whole architecture of this cycle.** **In this class four students wrote the derivation and two had it corrected** — **and both corrections were more useful than the derivation, because both came back with a circular number attached.**'],
  ['Mr Shihabi', 'What if the purpose is met in your case and the rule still bites?'],
  ['Mrs Oueidat', '⚠ **Then you have found an anomaly rather than a hardship, and you say so in the system\'s own word.** **_The requirement appears to be anomalous in this case_** — **and an anomaly is a thing a directorate will fix, because an anomaly is a fault in a rule and a hardship is a fault in the world, and only one of the two is theirs.**'],
  ['Mrs Tarabishi', 'And if the purpose is not met in your case?'],
  ['Mr Tayara', '⚠ **Then you do not have an exception and you should not ask for one.** **Two of the ten rules on the board are rules whose purpose the writer\'s own case fails** — **and both writers had been preparing to argue for two months, which is the most useful four minutes in the cycle.**'],
  ['Mrs Ajouz', 'Do you still mention the boy?'],
  ['Mrs Khoury', '⚠ **Once, in a clause, as a fact and not as an argument.** **_File 4471, a pupil of nine_** — **and nothing about the two years, which is 18.2\'s discipline again and will be the whole of 18.6.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is the three lines that refused me.** **I have them still and they are a good document: they say that the certificate is a requirement, that the directorate has no power to waive it, and that the file will be considered on resubmission.** **Every word is true** — **and nothing in my letter had given her anything to put in a fourth line.**'],
]));
out.push(sp());
out.push(box('Language box – the exception argued from the purpose', [
  '**Hardship is not an argument to a system.** ⚠ **It is an argument to a person, and the person reading your letter is not permitted to be one** — **and a letter that asks them to be a person has asked for the one thing they cannot give and has offered no ground for the thing they can.**',
  '**State the purpose in one sentence, then measure the case against it.** ⚠ _The certificate exists so that no pupil is registered at two schools in one year. File 4471 cannot be registered twice: the governorate\'s own list shows no other registration._ **Not a request for discretion: a demonstration that the purpose is already met.**',
  '**Where no purpose is written down, derive it and invite correction in the same sentence.** ⚠ _The certificate appears to exist in order that no pupil is registered at two schools in one year; if that is not its purpose, I should be glad to be corrected._',
  '**And that is the strongest form, not the weakest.** ⚠ **The reader either lets the purpose stand, in which case your case is measured against it, or corrects it** — **and a correction is a written statement of purpose, which is the thing nobody could find in eleven circulars.** **Either way you get the purpose.**',
  '**Where the purpose is met and the rule still bites, you have an anomaly and not a hardship.** ⚠ **Say so in the system\'s own word: _the requirement appears to be anomalous in this case._** **An anomaly is a fault in a rule and a hardship is a fault in the world** — **and only one of the two belongs to the body you are writing to.**',
  '**And where the purpose is not met in your case, you have no exception to ask for.** ⚠ **Two of ten rules on the board are of that kind, and both writers had been preparing an argument for two months** — **which is four minutes well spent and nobody enjoys them.**',
  '**Pronunciation.** 🔊 **Track 18.6** **Read the purpose sentence as a statement of fact about the rule, flat, with no stress on _exists_ and none on _so that_.** ⚠ **Stress makes it a claim you are advancing.** **Flat, it is a description of the reader\'s own instrument** — **and the reader\'s first question then is whether the description is right, which is exactly where you want them.**',
  '**Practise:** State the purpose, measure the case. **1** a certificate against double registration  **2** a deadline for a single set of figures  **3** a definition protecting a count  **4** a purpose you must derive  **5** a case whose purpose is not met',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the rule from the card. B states **the purpose** in one sentence and **measures the case against it.** ⚠ **Two rows on each card are hardship arguments** — **and there B says so and asks for the purpose instead.** Change cards.'));
out.push(table(['Card A – the rule and the case', 'Card B – the rule and the case'], [
  ['_A transfer certificate is required; there is no previous school on record._', '_Applications close on 1 March; the figures were published on the second._'],
  ['_⚠ Surely an exception can be made for a child._', '_⚠ The rule is unfair in a case like this._'],
  ['_A printed register is required; the branch keeps a day-book._', '_A certifying body must be named; the body closed in 2017._'],
  ['_⚠ I am sure nobody intended this result._', '_⚠ I should be grateful for your sympathetic consideration._'],
  ['_Two years’ continuous registration is required; mine is in two parts._', '_A degree from a recognised institution; mine is recognised in three countries and not here._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the purpose, and whether the case meets it. ⚠ **Rows 2 and 4 on both cards are hardship and the room must say what a clerk can do with each, which is refuse it kindly.** **Rows 5 are the pair the cycle turns on**: on Card A the purpose of continuous registration is probably met and on Card B it probably is not — **and the room must reach the second answer and say that there is no exception to ask for.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the rule you brought** and write **its purpose in one sentence.** ⚠ **If no document states it, write the derivation with the invitation to correct it.** **Then measure your own case against the purpose, in one sentence, resting on a document the body holds.** **In this class six cases met the purpose, two did not, and two could not be decided without a document nobody had.**'));
out.push(p('**b**  Swap. Your partner reads **only your purpose sentence** and says whether it is a purpose or a description of what the rule does. ⚠ **Then the harder question: does your case meet it?** — **and if the honest answer is no, your partner says so and the letter is not written, which happened twice in this class.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara wants an exception to the transfer certificate rule, and his first letter was about the boy: nine, two years out of school, nobody\'s fault, and it was refused in three lines, and the three lines were right, because he had asked a clerk to weigh a child against a regulation and she has no instrument for that. Mrs Oueidat said that is the thing to say first and plainly: hardship is not an argument to a system, it is an argument to a person, and the person reading your letter is not permitted to be one. Mrs Khoury said so the argument is the purpose, and what the certificate is for, in one sentence: so that no pupil is registered at two schools in one year. And then the case against the purpose: file 4471 cannot be registered twice, because the governorate\'s own list shows no other registration, which is not a request for discretion but a demonstration that the purpose is already met. Mr Attar asked where he got the purpose, since the circulars do not give one, and Mrs Khoury said you derive it, state it as a derivation, and invite correction in the same sentence. Dr Qabbani asked whether that does not weaken it, and Mrs Oueidat said it is the strongest form available: a stated purpose that invites correction cannot be dismissed, because the clerk either lets it stand, in which case the case is measured against it, or corrects it, and a correction is a written statement of purpose. Mrs Rizk said so either way you get the purpose, and Mrs Khoury said either way, and that is the whole architecture of the cycle: four students wrote the derivation, two had it corrected, and both corrections were more useful than the derivation. Mr Shihabi asked what happens if the purpose is met and the rule still bites, and then you have found an anomaly rather than a hardship and you say so in the system\'s own word, because an anomaly is a fault in a rule and a hardship is a fault in the world. Mrs Tarabishi asked what happens if the purpose is not met, and then you do not have an exception and you should not ask for one. Mrs Ajouz asked whether he still mentions the boy, and once, in a clause, as a fact and not as an argument. And Mr Tayara said the thing he will take away is the three lines that refused him, which are a good document: every word is true, and nothing in his letter had given her anything to put in a fourth line._'));
out.push(p('**Listener task:** write your partner\'s purpose sentence and whether their case meets it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Tayara\'s second letter to the directorate. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _to the registration section, education directorate_ · _file ED/2-4471_ · **19 April**',
  '**1 · What this letter is.** **It is not a request for discretion.** ⚠ **It asks whether a requirement applies to a case in which its purpose is already met, and it rests entirely on records the directorate holds.**',
  '**2 · The requirement.** **Form ED/2 requires a transfer certificate from the previous school.** **File 4471 is a pupil of nine for whom no previous school is on record.**',
  '**3 · The purpose, as I understand it.** ⚠ **The certificate appears to exist in order that no pupil is registered at two schools in the same year.** **If that is not its purpose, I should be glad to be corrected, and I shall write again on whatever purpose the directorate states.**',
  '**4 · The case measured against the purpose.** **The governorate\'s register shows no registration for this pupil at any school in the governorate.** ⚠ **The only entry is an admission in 2019 at a school that appears at page 3 of the directorate\'s own closure list for that year.** **Double registration is therefore not possible, and the purpose of the requirement is met without the certificate.**',
  '**5 · What follows, in the directorate\'s own terms.** **The requirement appears to be anomalous in this case: it is a safeguard against something the record shows cannot occur.** ⚠ **I am not asking for the requirement to be waived.** **I am asking whether it applies.**',
  '**6 · What I can supply.** **The birth certificate, the closure list page, and a statement from this school that the pupil has attended since 6 March.** **If the directorate requires a declaration in any form that no other registration is held, I shall make it.**',
  '**8 · The three documents this letter rests on, and where each is held.** **The governorate register, held by the directorate.** **The closure list for 2019, published by the directorate and held at this school.** ⚠ **And this school\'s attendance register for the current term, which the directorate may inspect at any time and without notice.** **Nothing in this letter rests on a document that only I hold.**',
  '**9 · What I have not written.** **I have not written that the pupil has been out of school for two years.** ⚠ **It is true, it is the reason I am writing at all, and it bears on no part of the question I have asked** — **and a letter that carries it has asked the directorate to weigh a child against a regulation, which no section is equipped to do.**',
  '**10 · One request about the reply.** ⚠ **If the answer is that the requirement applies, I should be grateful for the paragraph or circular number under which it does** — **so that my next letter about this file is about the right provision.**',
  '**11 · What I accept.** **If the purpose of the certificate is other than I have stated, this letter falls.** ⚠ **And if the directorate has no power to determine the question at section level, I should be grateful to be told to whom it is properly addressed** — **and I shall address it there rather than above anybody\'s head.**',
]));
out.push(item('1', 'What does the letter say it is not, and what does it ask instead?'));
out.push(item('2', 'What does paragraph 3 do that an ordinary request would not?'));
out.push(item('3', 'What two things does paragraph 7 accept?'));
out.push(writers([
  'A letter asking whether a requirement applies: **what the letter is not** → **the requirement and the case, in two lines** → **the purpose, stated or derived, with the invitation to correct it** → **the case measured against the purpose, on the body\'s own records** → **the word _anomalous_, and the question _whether it applies_** → **what you can supply** → **and what you accept, including where the question properly goes.**',
  '⚠ **Open by disclaiming discretion.** _It is not a request for discretion._ **Most such letters are refused as requests for discretion before the documents are read** — **and seven words at the top remove the commonest ground of refusal.**',
  '**State the purpose as a derivation and invite correction in the same sentence.** ⚠ _If that is not its purpose, I should be glad to be corrected, and I shall write again on whatever purpose the directorate states._ **The second clause makes the invitation real** — **and it converts a refusal into a usable statement of purpose.**',
  '**Ask whether it applies, not for it to be waived.** ⚠ **A waiver is a power most clerks do not have and an application is a question they answer forty times a week** — **and _I am asking whether it applies_ puts your letter inside their job rather than above it.**',
  '⚠ And **end by naming the two ways you lose.** _If the purpose is other than I have stated, this letter falls._ **And ask where the question properly goes, saying that you will address it there** — **which is the sentence that distinguishes a letter from a threat, and it is the hinge of 18.4.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the letter (120 words or more).'));
out.push(p('**______________** · _to _______________ · _file _______________ · **______________**   **1 · What this letter is.** **It is not a request for discretion.** ⚠ **It asks whether ______________.**   **2 · The requirement.** **______________.**   **3 · The purpose, as I understand it.** ⚠ **______________ appears to exist in order that ______________.** **If that is not its purpose, I should be glad to be corrected.**   **4 · The case measured against the purpose.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Discretion disclaimed in the first line',
  'The purpose in one sentence, with the invitation to correct',
  'The case measured on the body\'s own records',
  '_Whether it applies_, not _that it be waived_',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their purpose sentence**, flat, and the room says whether it is a purpose or a description.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: what it is not, the requirement and the case, the purpose with its invitation, the measurement, the anomaly, what you can supply, and what you accept.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: discretion disclaimed, the purpose stated with an invitation to correct it, and no hardship anywhere in the letter.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two numbers on the board.** **How many cases meet the purpose of their rule?** **Six of ten, with two that do not and two that cannot be decided.** **Then ask the two whose cases do not meet the purpose how long they had been preparing to argue** — **two months each, and neither will write the letter now, which is the most useful outcome in the cycle.** **Then Mr Tayara\'s three lines of refusal, read flat.**'));
out.push(hw('**Write the purpose sentence for your rule and measure your case against it.** ⚠ **Then do the harder half: write the derivation with the invitation to correct it and send it.** **In this class four sent one and two had the purpose corrected** — **and both corrections came back with a circular number attached, which is a document that did not exist before somebody asked.** **Bring the reply or the date you sent it.** **18.4 writes to the person who has to apply a rule they did not make**, so bring the name or the post of the person who will read your letter.'));

// ===================== 18.4 =====================
out.push(pb());
out.push(h2('18.4  The person who has to apply the rule'));
out.push(p('**Function:** writing to the person who has to apply a rule they did not make   ·   **Grammar:** the sentence they can put in the file, and the question _what do you need_   ·   **Pronunciation:** the question asked without a rise and then left alone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the post of the person who will read your letter, and one thing you know about their position.** ⚠ **Their position, not their character.** **In this class eight of ten could name the post and two of the eight could say what the post is permitted to decide** — **and your teacher writes the ten posts on the board with a blank beside each, because the blank is what 18.4 fills.**'));
out.push(board('What the clerk can decide.', 'What only the section head can decide.'));
out.push(p('**b**  Which two address the reader as somebody with a job? **1** _I hope you will see your way to helping me._  **2** _If the question is above section level, I should be grateful to be told to whom it is properly addressed, and I shall write there._  **3** _I am sure you have the power to sort this out if you want to._  **4** _What would you need from me in order to attach a statement to field 7? I shall supply it in any form you can use._  **5** _If this cannot be resolved I shall have to take it further._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the letter must offer the clerk?   **A** sympathy for their position   **B** **a sentence they can put in the file, and a question about what they need**   **C** a reason to make an exception'));
out.push(p('**b**  Listen again. **1** What does Mrs Rizk say about _I shall have to take it further_?   **2** What does Mrs Khoury say the clerk is risking?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.7  A sentence they can put in the file', [
  ['Ms Huda', 'Mr Tayara knows who reads form ED/2 at the directorate.'],
  ['Mr Tayara', '⚠ **A registration clerk, and the post is permitted to accept a file, return it, or refer it up.** **Three things, and I had spent two months writing to her as though she had a fourth** — **which was to decide that a regulation did not apply.**'],
  ['Mrs Khoury', 'What is the fourth worth to her?'],
  ['Mrs Khoury', '⚠ **Nothing, and that is the sentence the room should take.** **If she accepts the file she gains nothing; if she accepts it wrongly she is the person who did** — **and a clerk who refuses forty files a week is never criticised for any of them, which is the position of almost every reader in this unit.**'],
  ['Mrs Oueidat', 'So what can she be given?'],
  ['Mr Tayara', '⚠ **A sentence she can put in the file, which is 18.2\'s paragraph, and a question.** **_What would you need from me in order to attach a statement to field 7?_** **And then nothing** — **no suggestion of what she might need, because a suggestion is a thing she has to refuse before she can answer.**'],
  ['Mr Attar', 'Did she answer?'],
  ['Mr Tayara', '⚠ **In six days, in two lines, and she asked for something I had not thought of: a declaration that no other registration is held, signed by me as head and not by the family.** **It took four minutes to write** — **and in two months of arguing about regulations I had never once asked her what she needed.**'],
  ['Mrs Rizk', 'And the threat? _I shall take it further._'],
  ['Mrs Oueidat', '⚠ **It is the worst sentence available and the room will find it the most natural.** **It tells a clerk that whatever she does, somebody senior will now read her file** — **so the safe thing becomes the refusal, in writing, with the regulation quoted, because that is the version that survives being read by her section head.**'],
  ['Mrs Khoury', '⚠ **Which is the mechanism worth saying twice.** **A threat does not make a clerk more likely to help; it makes the refusal more carefully written** — **and you will then have a well-drafted refusal instead of a conversation, and well-drafted refusals are very hard to reopen.**'],
  ['Dr Qabbani', 'What about asking where it should go instead?'],
  ['Mr Tayara', '⚠ **That is the opposite move and it is the one sentence that distinguishes a letter from a threat.** _If the question is above section level, I should be grateful to be told to whom it is properly addressed, and I shall write there._ **You have said that you will go over nobody\'s head** — **and you have also said that you intend to continue, which is the whole content of the threat without any of its cost.**'],
  ['Mr Shihabi', 'Is that not the same thing more politely?'],
  ['Mrs Khoury', '⚠ **It is a different act and the difference is who chooses.** **A threat says that you will go above her.** **The question says that she may send you above her** — **and a clerk who refers a file up has done her job, where a clerk whose file is taken up has had it taken.**'],
  ['Mrs Tarabishi', 'And sympathy? May I say I know her position is difficult?'],
  ['Mrs Oueidat', '⚠ **No, and this is the one place where kindness is a mistake.** **A sentence about her difficult position tells her that you have formed a view of her working life** — **and she has forty files, a procedure, and no wish to be understood by an applicant.** **What she wants is a complete file.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is the six days and the four minutes.** **Two months of letters about a regulation, and then one question about what she needed, answered in six days** — **and what she needed was a declaration that took me four minutes and that nobody in my two months of arguing had ever mentioned.**'],
]));
out.push(sp());
out.push(box('Language box – writing to the person who applies the rule', [
  '**Find out what the post is permitted to decide.** ⚠ **A registration clerk may accept a file, return it, or refer it up.** **Three powers, and the one most letters ask for is a fourth that does not exist** — **which is to decide that a regulation does not apply.**',
  '**Nothing in the system rewards a yes.** ⚠ **A clerk who accepts a file gains nothing; a clerk who accepts it wrongly is the person who did** — **and a clerk who refuses forty files a week is never criticised for any of them.** **Every move in this cycle is designed around that arithmetic.**',
  '**So offer two things: a sentence for the file, and a question.** ⚠ _What would you need from me in order to attach a statement to field 7?_ **And then stop** — **no suggestion of what they might need, because a suggestion is a thing they must refuse before they can answer.**',
  '**_I shall have to take it further_ is the worst sentence available.** ⚠ **It tells the reader that somebody senior will now read their file, so the safe course becomes a refusal in writing with the regulation quoted** — **and you will have a well-drafted refusal instead of a conversation.**',
  '**The opposite move is one sentence and it is the hinge of the unit.** ⚠ _If the question is above section level, I should be grateful to be told to whom it is properly addressed, and I shall write there._ **You have said you will go over nobody\'s head and that you intend to continue** — **which is the content of the threat without its cost.**',
  '**And no sympathy.** ⚠ **A sentence about their difficult position tells them you have formed a view of their working life.** **They have forty files, a procedure, and no wish to be understood by an applicant** — **and what they want is a complete file.**',
  '**Pronunciation.** 🔊 **Track 18.8** **Ask _what would you need from me?_ with no rise at the end and nothing after it.** ⚠ **A rise makes it a plea and anything after it is a suggestion** — **and a suggestion has to be refused before the real answer can be given, which costs you a letter and about nine days.**',
  '**Practise:** The sentence for the file, then the question. **1** a clerk who may attach  **2** a clerk who may only refer  **3** a post you cannot identify  **4** a refusal already received  **5** a case where the answer is to write elsewhere',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the reader from the card. B gives **the sentence for the file** and **the question**, and names **what the post can decide.** ⚠ **Two rows on each card are threats or sympathy** — **and there B says which, and what it will produce.** Change cards.'));
out.push(table(['Card A – the reader', 'Card B – the reader'], [
  ['_A registration clerk who may accept, return or refer._', '_A registry officer who may accept a late form with a reason._'],
  ['_⚠ If this cannot be resolved I shall take it further._', '_⚠ I know your position must be difficult._'],
  ['_A section head who may determine whether a rule applies._', '_A syndicate secretary who may put a case to the board._'],
  ['_⚠ I am sure you can sort this out if you want to._', '_⚠ I appreciate that your hands are tied._'],
  ['_A clerk who has already refused you in three lines._', '_A post you cannot identify from any document._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the sentence for the file, the question, and the post\'s powers. ⚠ **Rows 2 and 4 on both cards are threats or sympathy, and the room says what each produces**: a carefully drafted refusal, and a reader who has been told you have a view of their working life. **Rows 5 are the hardest**: one has already refused you, so the question becomes _what would have to be different_, and one cannot be identified, **so the letter asks who deals with it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the post you brought** and write **what it is permitted to decide**, in three powers or fewer. ⚠ **Then write your question: what would they need from you?** **In this class two of ten could name the powers at the start of the lesson and nine could by the end** — **and seven found the powers in a document they already had.**'));
out.push(p('**b**  Swap. Your partner reads **your question** and says whether anything follows it. ⚠ **If a suggestion follows, strike it.** **Then the harder question: which of the three powers are you actually asking them to use?** — **and in this class four students discovered they were asking for a power the post does not have.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Tayara knows who reads form ED/2: a registration clerk, and the post is permitted to accept a file, return it, or refer it up. Three things, and he had spent two months writing to her as though she had a fourth, which was to decide that a regulation did not apply. Mrs Khoury asked what the fourth is worth to her, and nothing, and that is the sentence the room should take: if she accepts the file she gains nothing, if she accepts it wrongly she is the person who did, and a clerk who refuses forty files a week is never criticised for any of them. Mrs Oueidat asked what she can be given, and a sentence she can put in the file and a question: what would you need from me in order to attach a statement to field 7, and then nothing, because a suggestion is a thing she has to refuse before she can answer. Mr Attar asked whether she answered, and in six days, in two lines, asking for something he had not thought of: a declaration that no other registration is held, signed by him as head and not by the family, which took four minutes to write. Mrs Rizk asked about the threat, and Mrs Oueidat said it is the worst sentence available and the room will find it the most natural, because it tells a clerk that whatever she does somebody senior will now read her file, so the safe thing becomes the refusal in writing with the regulation quoted. Mrs Khoury said that is the mechanism worth saying twice: a threat does not make a clerk more likely to help, it makes the refusal more carefully written. Dr Qabbani asked about asking where it should go instead, and that is the opposite move and the one sentence that distinguishes a letter from a threat. Mr Shihabi asked whether it is not the same thing more politely, and Mrs Khoury said it is a different act and the difference is who chooses. Mrs Tarabishi asked about sympathy, and no, and this is the one place where kindness is a mistake. Mr Zahreddine asked whether the question is not a little passive, and Mrs Oueidat said it is the opposite, because a question with nothing after it obliges an answer, where a suggestion can be refused in one line and often is. And Mr Tayara said the thing he will take away is the six days and the four minutes: two months of letters about a regulation, and then one question about what she needed, answered in six days, and what she needed took him four minutes to write and nobody in two months of arguing had ever mentioned it._'));
out.push(p('**Listener task:** write the post\'s three powers and the question your partner asked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the short letter Mr Tayara sent to the registration clerk. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _to the registration clerk, education directorate_ · _file ED/2-4471_ · **26 April**',
  '**1 · This letter is to you and not above you.** **Form ED/2 for file 4471 is with your section and the question on it is one your section deals with.** ⚠ **Nothing in this letter asks you to decide that a regulation does not apply.**',
  '**2 · The sentence for the file.** **If it is of use, the following may be attached to field 7, and it rests on the directorate\'s own records.** _No previous school is on record for file 4471. The school at which the pupil was admitted in 2019 appears at page 3 of the directorate\'s closure list for that year. No transfer of records from that school is recorded._',
  '**3 · The question.** ⚠ **What would you need from me in order to attach a statement to field 7?**',
  '**4 · What I am not doing.** **I am not suggesting what you might need and I am not proposing a form of words beyond the paragraph above.** ⚠ **If the paragraph is in the wrong form, I shall write it in whatever form you use.**',
  '**5 · If this is not yours.** **If the question is above section level, I should be grateful to be told to whom it is properly addressed, and I shall write there.** ⚠ **I shall not write to anybody above you about a question that is yours, and I shall not write to you about one that is not.**',
  '**6 · The pupil, once.** **File 4471 is a pupil of nine who has attended this school since 6 March.** ⚠ **That sentence is in this letter because the file number alone does not tell you that there is a child in a classroom** — **and it is the only sentence of its kind, and it is not an argument.**',
  '**6a · What I am not sending you.** **I am not sending my letter of 19 April about the purpose of the requirement.** ⚠ **That letter is for the section and it argues; this one asks a question and encloses a sheet** — **and a clerk who receives both on the same morning has to decide which of them to answer, which is a decision I have no business giving you.**',
  '**6b · If the paragraph is in the wrong form.** **Tell me the form your section uses and I shall send it again the same day.** ⚠ **I do not need the reason.**',
  '**6c · A declaration, if one is wanted.** **If a declaration that no other registration is held would complete the field, I shall sign one as head of this school in whatever form the section uses** — **and I shall sign it rather than ask the family to, because the family has no access to the governorate register and this school has.**',
  '**7 · What is enclosed.** **Form ED/2, the birth certificate, page 3 of the closure list, and the paragraph above on a separate sheet in two copies.** **The separate sheet is so that you can attach it without attaching this letter.**',
]));
out.push(item('1', 'What does paragraph 1 say the letter does not ask her to do?'));
out.push(item('2', 'What does paragraph 4 refuse to do, and what does it offer instead?'));
out.push(item('3', 'Why is the paragraph for the file on a separate sheet?'));
out.push(writers([
  'A letter to the person who applies the rule: **why you are writing to them and not above them** → **the sentence for the file, resting on the body\'s own records** → **the question, alone** → **what you are not doing** → **where the question goes if it is not theirs** → **the human fact, once, named as not an argument** → **and the enclosures, with the file paragraph on its own sheet.**',
  '⚠ **Say in the first line that you are not asking them to decide that a rule does not apply.** **That is the power they do not have and the one most letters ask for** — **and a reader who is asked for it drafts a refusal, which is the only safe document available to them.**',
  '**Ask the question and put nothing after it.** ⚠ _What would you need from me in order to attach a statement to field 7?_ **A suggestion must be refused before the real answer can be given** — **and in Mr Tayara\'s case the real answer was a declaration he had not thought of, which took four minutes and ended two months.**',
  '**Name the human fact once and say that it is not an argument.** ⚠ _File 4471 is a pupil of nine who has attended this school since 6 March._ **One sentence only; a second turns the letter into the hardship letter 18.3 refuses.**',
  '⚠ And **put the file paragraph on its own sheet, and say why.** _The separate sheet is so that you can attach it without attaching this letter._ **A clerk who must photocopy a page of your argument to complete a file will not do it, and a clerk with a clean sheet will.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the letter (120 words or more).'));
out.push(p('**______________** · _to _______________ · _file _______________ · **______________**   **1 · Why I am writing to you and not above you.** **______________.** ⚠ **Nothing in this letter asks you to decide that ______________.**   **2 · The sentence for the file.** **If it is of use, the following may be attached to ______________, and it rests on ______________.** **______________.**   **3 · The question.** ⚠ **What would you need from me in order to ______________?**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The power you are not asking for, disclaimed first',
  'The question, with nothing after it',
  'No threat and no sympathy anywhere',
  'The file paragraph on its own sheet, with the reason',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their question**, flat, and the room says whether anything follows it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: why them, the file sentence, the question, what you are not doing, where it goes if not theirs, the human fact once, and the enclosures.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the question with nothing after it, no threat and no sympathy, and the human fact in exactly one sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts and one discovery.** **How many students could name the post\'s powers at the start?** **Two of ten; nine by the end, and seven found them in a document they already had.** **Then the discovery: four students found they had been asking for a power the post does not have** — **ask those four how long they had been writing to that person.** **Then Mr Tayara\'s six days and four minutes.**'));
out.push(hw('**Write your question and the sentence for the file, on separate sheets.** ⚠ **Then do the harder half: send the question and nothing else.** **In this class five sent it, four had an answer inside nine days, and three of the four answers asked for something the writer had not thought of** — **and one of the three took four minutes to supply.** **Bring the answer.** **18.5 puts your case in the system\'s words without adopting its claims**, so bring one sentence of the system\'s prose that contains a claim you do not accept.'));

// ===================== 18.5 =====================
out.push(pb());
out.push(h2('18.5  Borrowing the register, refusing the premise'));
out.push(p('**Function:** putting your own case in the system\'s words without adopting its claims   ·   **Grammar:** the register borrowed, the premise refused in your own words   ·   **Pronunciation:** the borrowed clause said without irony'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence of the system\'s prose that contains a claim you do not accept.** ⚠ **Read it flat, then name the claim in your own words.** **In this class seven of ten named a tone rather than a claim** — **and your teacher writes the ten claims on the board, because a claim can be refused and a tone cannot.**'));
out.push(board('_The applicant is not eligible under paragraph 4._', 'He is nine, and nobody has said he may not attend.'));
out.push(p('**b**  Which two borrow the register and refuse the claim? **1** _I object to being called an applicant._  **2** _I write as the holder of a current certificate, and the day-book may be accepted under circular 4; I do not accept that a hand-kept record is incomplete, and no circular says that it is._  **3** _This officious language is beneath the directorate._  **4** _File 4471 is not eligible for registration under paragraph 4, as paragraph 4 is presently applied. He is nine years old and has attended since 6 March, and no provision has been cited that prevents his attending._  **5** _I shall use plain language even if you will not._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide you borrow, and what you refuse?   **A** borrow the words and accept the terms   **B** **borrow the register and refuse the claims**, keeping your own words for the facts that matter   **C** refuse both, and write plainly throughout'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say the difference is between a register and a claim?   **2** What does Mrs Khoury say happens to a writer who refuses the register as well?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.9  The register borrowed, the claim refused', [
  ['Ms Huda', 'Mrs Oueidat works between two registers every day.'],
  ['Mrs Oueidat', '⚠ **And the first thing a court translator learns is that a register is not a claim.** **_The deponent states_ carries no opinion about whether the deponent is telling the truth** — **and a translator who renders it as _he claims_ has put a view into a document that had none, which is the only kind of mistake in my work that cannot be corrected later.**'],
  ['Mrs Khoury', 'So the register can be borrowed safely.'],
  ['Mrs Oueidat', '⚠ **The register is a set of empty shapes and the claims are what is poured into them.** **_May be accepted_ is a shape.** **_The applicant is not eligible under paragraph 4_ is a claim** — **and the two look identical on the page, which is why the room will refuse both or accept both.**'],
  ['Mr Attar', 'Show us the difference in one sentence.'],
  ['Mr Tayara', '⚠ **Mine, after four drafts.** _File 4471 is not eligible for registration under paragraph 4, as paragraph 4 is presently applied._ **The register is theirs — _eligible_, _under paragraph 4_.** **The refusal is in four words: _as presently applied_** — **and those four words say that the paragraph could be applied otherwise without saying that the directorate is wrong.**'],
  ['Mrs Khoury', '⚠ **Which is the most economical sentence in this book.** **It concedes the whole of the register and refuses the whole of the claim** — **and a clerk reading it finds nothing to object to, because every word of the objection is a word about the application of a paragraph and not about her.**'],
  ['Mrs Rizk', 'And where do your own words go?'],
  ['Mr Tayara', '⚠ **On the facts that the register has no shape for.** **_He is nine years old and has attended since 6 March._** **No register has a form for a nine-year-old in a classroom** — **and if I write that in their words it becomes _the pupil is in attendance_, which is true and tells nobody anything.**'],
  ['Dr Qabbani', 'What happens if you refuse the register too?'],
  ['Mrs Khoury', '⚠ **You are answered in the register anyway, and you have lost the only thing you could have borrowed.** **A letter written entirely in plain language is replied to in paragraph numbers** — **and the reply is correct, and you have now to translate it, and you have given the clerk no sentence she can lift into a file.**'],
  ['Mr Shihabi', 'Is there a point at which borrowing becomes adopting?'],
  ['Mrs Oueidat', '⚠ **Yes, and it is a precise point: when you use one of their words about a person rather than about a procedure.** **_The applicant_ is a procedural word and I use it.** **_An ineligible applicant_ is a word about a person and I do not** — **and the test is whether the word would still be true if the procedure changed tomorrow.**'],
  ['Mrs Tarabishi', 'That is a good test.'],
  ['Mrs Khoury', '⚠ **It is the test of the cycle and the room should write it down.** **If the word survives a change in the procedure, it is a claim about a person and you refuse it.** **If it stops being true, it is a shape and you may borrow it** — **and _ineligible_ stops being true the day paragraph 4 is amended, which is exactly why it must not be left standing unqualified.**'],
  ['Mrs Ajouz', 'And irony? May the borrowing be slightly ironic?'],
  ['Mrs Oueidat', '⚠ **Not by a syllable, and it is the hardest instruction in the unit for an educated person to follow.** **An ironic _may be accepted_ is mockery with a licence** — **and the reader hears it, every time, and what they hear is that you think the shape is funny.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is the four words.** **Four drafts to arrive at _as paragraph 4 is presently applied_** — **and the reply quoted them back at me and then asked a question about the closure list, which is the first question anybody at the directorate had asked me in three months.**'],
]));
out.push(sp());
out.push(box('Language box – the register borrowed, the premise refused', [
  '**A register is a set of empty shapes; the claims are what is poured into them.** ⚠ **_May be accepted_ is a shape.** **_The applicant is not eligible under paragraph 4_ is a claim** — **and they look identical on the page, which is why most writers refuse both or accept both.**',
  '**The refusal can be four words long.** ⚠ _File 4471 is not eligible for registration under paragraph 4, as paragraph 4 is presently applied._ **The register is theirs; the refusal is _as presently applied_** — **and those words say the paragraph could be applied otherwise without saying that anybody is wrong.**',
  '**Your own words go on the facts the register has no shape for.** ⚠ **_He is nine years old and has attended since 6 March._** **Rendered in their words it becomes _the pupil is in attendance_, which is true and tells nobody anything** — **and that loss is the thing to show the room, because it cannot be argued, only heard.**',
  '**Refuse the register as well and you are answered in it anyway.** ⚠ **A letter written entirely in plain language is replied to in paragraph numbers, correctly** — **and you must then translate the reply, and you have given the clerk no sentence she can lift into a file.**',
  '**The test for borrowing: would the word still be true if the procedure changed tomorrow?** ⚠ **_The applicant_ stops being true when the file is determined, so it is a shape and you may use it.** **_An ineligible applicant_ survives any change, so it is a claim about a person and you refuse it.**',
  '**And no irony, by a syllable.** ⚠ **An ironic _may be accepted_ is mockery with a licence** — **and the reader hears it every time, and what they hear is that you think the shape is funny.**',
  '**Pronunciation.** 🔊 **Track 18.10** **Say _the day-book may be accepted under circular 4 of 2019_ with no stress anywhere and no lift on _may_.** ⚠ **A lift on _may_ is irony and the reader will hear it.** **Flat, it is a sentence from their own world said correctly** — **and a correctly said borrowed clause is the nearest thing in this book to a credential.**',
  '**Practise:** Borrow the shape, refuse the claim. **1** _not eligible under paragraph 4_  **2** _a hand-kept record is incomplete_  **3** _the applicant has no entitlement_  **4** a fact the register has no shape for  **5** a word that survives a change of procedure',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the system\'s sentence from the card. B **borrows the shape and refuses the claim**, and then says **one fact in their own words.** ⚠ **Two rows on each card refuse the register itself** — **and there B says what the reply will be written in.** Change cards.'));
out.push(table(['Card A – the system\'s sentence', 'Card B – the system\'s sentence'], [
  ['_The applicant is not eligible under paragraph 4._', '_A hand-kept record is incomplete for registration purposes._'],
  ['_⚠ I object to being called an applicant._', '_⚠ This officious language is beneath the directorate._'],
  ['_Late submission may be accepted at the discretion of the office._', '_The holder of a current certificate may apply._'],
  ['_⚠ I shall write plainly even if you will not._', '_⚠ Let us drop the paragraph numbers and talk sensibly._'],
  ['_The applicant has no entitlement under the present scheme._', '_No provision exists for a case of this kind._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the borrowed shape, the refused claim, and the fact in your own words. ⚠ **Rows 2 and 4 on both cards refuse the register itself, and the room says what the reply will be written in, which is paragraph numbers.** **Rows 5 are the hardest**: both sentences are claims dressed as procedure, and the refusal in each is a qualifier of four or five words — **_under the present scheme_ and _as the provisions are presently drawn_ — and no word of indignation goes into either.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the claim you brought** and write **one sentence that borrows the shape and refuses the claim.** ⚠ **Then write one fact in your own words that the register has no shape for.** **In this class four students could not find a borrowable shape in their system\'s prose at all** — **and in three of the four the prose was plain, which is a finding worth four minutes.**'));
out.push(p('**b**  Swap. Your partner applies the test: **would any word in your borrowed clause still be true if the procedure changed tomorrow?** ⚠ **If one would, it is a claim and you have adopted it.** **Then the harder question: read your sentence aloud and let your partner say whether they heard any irony** — **and in this class six of ten were heard to be ironic and four of the six had not intended it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat works between two registers every day, and the first thing a court translator learns is that a register is not a claim: the deponent states carries no opinion about whether the deponent is telling the truth, and a translator who renders it as he claims has put a view into a document that had none. Mrs Khoury said so the register can be borrowed safely, and the register is a set of empty shapes and the claims are what is poured into them: may be accepted is a shape, and the applicant is not eligible under paragraph 4 is a claim, and the two look identical on the page. Mr Attar asked for the difference in one sentence, and Mr Tayara gave his, after four drafts: file 4471 is not eligible for registration under paragraph 4, as paragraph 4 is presently applied. The register is theirs and the refusal is in four words, as presently applied, and those four words say that the paragraph could be applied otherwise without saying that the directorate is wrong. Mrs Khoury said that is the most economical sentence in the book, because it concedes the whole of the register and refuses the whole of the claim. Mrs Rizk asked where his own words go, and on the facts the register has no shape for: he is nine years old and has attended since 6 March. Dr Qabbani asked what happens if you refuse the register too, and Mrs Khoury said you are answered in the register anyway and you have lost the only thing you could have borrowed. Mr Shihabi asked whether there is a point at which borrowing becomes adopting, and Mrs Oueidat said yes, and it is precise: when you use one of their words about a person rather than about a procedure. Mrs Tarabishi said that is a good test, and Mrs Khoury said it is the test of the cycle: if the word survives a change in the procedure it is a claim about a person. Mrs Ajouz asked about irony, and not by a syllable, and it is the hardest instruction in the unit for an educated person to follow. Mr Zahreddine asked whether a clerk notices any of this, and Mrs Oueidat said a clerk notices it the way anybody notices somebody speaking their own language correctly, which is to say immediately and without comment. And Mr Tayara said the thing he will take away is the four words: four drafts to arrive at as paragraph 4 is presently applied, and the reply quoted them back at him and then asked a question about the closure list, which is the first question anybody at the directorate had asked him in three months._'));
out.push(p('**Listener task:** write your partner\'s borrowed clause, the refusal inside it, and the fact in their own words.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat wrote for the group on borrowing a register. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note for the terminology group_ · _on borrowing a register and refusing a claim_ · **14 June**',
  '**Why a translator should write this and not a lawyer.** **A translator moves a sentence from one register to another forty times a day and is the only party in a courtroom who is not allowed to have a view.** ⚠ **_The deponent states_ carries no opinion about whether the deponent is telling the truth** — **and rendering it as _he claims_ puts a view into a document that had none, which is the one mistake in my work that cannot be corrected afterwards.**',
  '**The distinction, in the shortest form I can give it.** **A register is a set of empty shapes.** **The claims are what has been poured into them.** ⚠ **_May be accepted_ is a shape; _the applicant is not eligible_ is a claim** — **and on the page they are indistinguishable, which is why most writers either refuse both or swallow both.**',
  '**The test, which I use in my own work.** **Would the word still be true if the procedure changed tomorrow?** ⚠ **_The applicant_ stops being true the day the file is determined: a shape, and you may use it.** **_An ineligible applicant_ survives any amendment: a claim about a person, and you refuse it.**',
  '**How the refusal is done, and it is shorter than anybody expects.** ⚠ _Not eligible under paragraph 4, as paragraph 4 is presently applied._ **Five words of qualification.** **The paragraph could be applied otherwise; nobody has been called wrong; and the whole of the register has been conceded in the same sentence.**',
  '**Where your own words go.** **On the facts the register has no shape for.** ⚠ **_He is nine years old and has attended since 6 March._** **Put that in their words and it becomes _the pupil is in attendance_** — **which is true, and which tells a reader nothing at all, and the loss cannot be argued, only heard.**',
  '**Why refusing the register is the expensive mistake.** **You will be answered in it anyway, and correctly.** ⚠ **You must then translate the reply, and you have given the clerk no sentence she can lift into a file** — **and the sentence she can lift is the only thing in your letter that will still exist in two years.**',
  '**One further point, about tone rather than words.** **A borrowed clause said correctly is the nearest thing an outsider has to a credential.** ⚠ **When Mrs Ajouz wrote _may be accepted under the terms of circular 4 of 2019_, the reply used the same words back at her** — **and the reply came from an office that had refused her twice in plainer language, which is not a coincidence and is not a matter of politeness.**',
  '**And the rule I would put above all the others.** **No irony, by a syllable.** ⚠ **An ironic _may be accepted_ is mockery with a licence, and the reader hears it every time** — **and educated writers are the worst offenders, because an educated writer can hear the shape and cannot resist showing that they can.**',
]));
out.push(item('1', 'Why does she say a translator should write the note rather than a lawyer?'));
out.push(item('2', 'What is her test, and how does it work on the two words she gives?'));
out.push(item('3', 'What does she say is lost by putting your own facts into the system\'s words?'));
out.push(writers([
  'A note on borrowing a register: **why you are in a position to write it** → **the distinction between a shape and a claim** → **the test, with a word on each side of it** → **how the refusal is done, in its shortest form** → **where your own words go** → **why refusing the register is the expensive mistake** → **and the rule about irony.**',
  '⚠ **Give the distinction before any example.** **A register is a set of empty shapes and the claims are what has been poured into them** — **and the sentence after it must say that the two are indistinguishable on the page, because a reader who thinks they can tell will not use the test.**',
  '**Make the test a question, not a principle.** ⚠ _Would the word still be true if the procedure changed tomorrow?_ **A question can be applied to a word in four seconds** — **and a principle about procedural and substantive language cannot be applied to anything by anybody.**',
  '**Show the refusal at its real length.** ⚠ _As paragraph 4 is presently applied._ **Five words.** **Readers expect a paragraph and will write one** — **and a paragraph of refusal has become an argument about whether the body is wrong, which is the one subject you cannot win on.**',
  '⚠ And **put the irony rule last and say who breaks it.** _Educated writers are the worst offenders, because an educated writer can hear the shape and cannot resist showing that they can._ **This is the sentence the room needs, because the room is made of educated writers** — **and the instruction is not about politeness: an ironic borrowed clause tells the reader that you think their working life is funny.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on borrowing a register (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _on _______________ · **______________**   **The distinction.** **A register is ______________.** **The claims are ______________.** ⚠ **______________ is a shape; ______________ is a claim.**   **The test.** ⚠ **Would the word still be true if ______________?** **______________ stops being true ______________: a shape.** **______________ survives any amendment: a claim.**   **How the refusal is done.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The distinction before any example',
  'The test as a question, with a word on each side',
  'The refusal at its real length — five words or so',
  'The irony rule, with who breaks it',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their borrowed clause**, flat, and the room says whether it heard any irony.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: your position, the distinction, the test, the refusal, where your own words go, the expensive mistake, and the rule about irony.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the test stated as a question, a refusal of five words or so, and no irony anywhere in the borrowed clauses.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **How many borrowed clauses were heard as ironic?** **Six of ten, and four of the six had not intended it** — **so have those four read their clause again, flat, and let the room hear the difference.** **Then the four students who found no borrowable shape at all: three of their systems write plainly, which is worth four minutes.** **Then Mr Tayara\'s four words and the first question anybody had asked him in three months.**'));
out.push(hw('**Write your borrowed clause with its refusal inside it**, and one fact in your own words beside it. ⚠ **Then do the harder half: read the clause aloud to somebody who does not know the case and ask whether they heard irony.** **In this class six of ten were heard to be ironic** — **and the test cannot be done on yourself, which is the reason this homework needs another person.** **Bring the clause and the verdict.** **18.6 writes the letter into an institution that has no category for you**, so bring the case the category does not exist for.'));

// ===================== 18.6 =====================
out.push(pb());
out.push(h2('18.6  The institution with no category for you'));
out.push(p('**Function:** writing the letter into an institution that has no category for you   ·   **Grammar:** the nearest category named, and the single difference stated   ·   **Pronunciation:** the difference read as one fact among several'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the body, its categories, and which one is nearest to you.** ⚠ **Name them, and then name the nearest.** **In this class seven of ten could list the categories and three said their case fell outside all of them without having read the list** — **and your teacher writes the ten nearest categories on the board, because the letter is written about one of them.**'));
out.push(board('Register categories A, B and C.', 'Nearest is B. One difference: the awarding body.'));
out.push(p('**b**  Which two name the nearest category and the single difference? **1** _I do not fit any of your categories._  **2** _The nearest category is B. My case differs from B in one respect: the awarding institution is not on the schedule, although the degree is of the same length and content._  **3** _I think you need a new category for people like me._  **4** _The nearest is category 2. The one difference is that my registration is in two parts of fourteen and ten months, where category 2 requires twenty-four continuous._  **5** _My situation is really quite unusual and does not lend itself to classification._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the letter must not ask for?   **A** an exception   **B** **a new category** — and must instead name the nearest and the single difference   **C** a decision at a higher level'));
out.push(p('**b**  Listen again. **1** What does Mr Attar say he asked for in his first letter?   **2** What does Mrs Khoury say about the word _unprecedented_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.11  The nearest category, and one difference', [
  ['Ms Huda', 'Mr Attar has applied to a syndicate that has three categories and none of them is his.'],
  ['Mr Attar', '⚠ **A, B and C, and I read the schedule properly for the first time in March.** **And my first letter asked for a fourth** — **which I now see is the one request a register cannot grant, because a category is a line in a schedule and a schedule is amended by a committee that meets twice a year.**'],
  ['Mrs Khoury', 'What does a fourth category cost them?'],
  ['Mrs Oueidat', '⚠ **Eighteen months and a committee paper, and the paper has to be written by the person you are writing to.** **You have asked a secretary to put a proposal to a board about a schedule, on behalf of one applicant** — **and the honest answer to that is no, and it was given to Mr Attar in eleven lines.**'],
  ['Mr Attar', '⚠ **Eleven lines, and the last of them is the useful one.** _The schedule provides three categories and your qualification has not been considered under any of them._ **Which told me what I had not seen: nobody had looked at B** — **because I had not asked them to.**'],
  ['Mrs Khoury', 'So the second letter names B.'],
  ['Mr Attar', '⚠ **Names it, and then names one difference.** _The nearest category is B. My case differs from B in one respect: the awarding institution is not on the schedule, although the degree is of the same length and content._ **One respect, and the rest of the paragraph is what is the same.**'],
  ['Dr Qabbani', 'Why does naming what is the same matter?'],
  ['Mrs Oueidat', '⚠ **Because a category is a set of conditions and most of them are met.** **A letter that says _I do not fit_ has asked the reader to check every condition from the beginning** — **and a letter that says _nine of the ten conditions are met and here is the tenth_ has done nine tenths of the reader\'s work, which is the only kind of letter a secretary can act on in an afternoon.**'],
  ['Mrs Rizk', 'And if there are two differences?'],
  ['Mrs Khoury', '⚠ **Then take them in two letters or accept that you are asking for an exception, which is 18.3.** **Two differences from the nearest category is a different animal** — **and a letter with two is read as a general plea, because the reader cannot tell which one you would give up.**'],
  ['Mr Shihabi', 'What about precedent? Has anybody been registered like this before?'],
  ['Mr Attar', '⚠ **That is the question I had never asked and it is in the second letter in one sentence.** _I should be grateful to know whether a case of this kind has been determined before, and if the register holds no such case I shall say so in any further correspondence._ **And they had one, from 2016** — **and the secretary found it in two days and told me the category it went into, which was B.**'],
  ['Mrs Tarabishi', 'So the precedent did the whole thing.'],
  ['Mrs Khoury', '⚠ **The precedent did it and the question produced the precedent, and the room should see the order of those two facts.** **A body with a precedent will use it, because a precedent is the safest document in any institution** — **and nobody will go looking for one on behalf of an applicant who has not asked whether one exists.**'],
  ['Mrs Ajouz', 'And the word _unprecedented_?'],
  ['Mrs Khoury', '⚠ **Never use it about yourself, and this is worth a minute.** **_My case is unprecedented_ tells a body that nothing it has ever done can help you** — **which is both a boast and a request for the eighteen-month committee, and it is wrong about four times in five, because almost nothing is unprecedented in an institution that is forty years old.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the two days.** **I had been writing to that syndicate for five months about a category that did not exist** — **and one sentence asking whether anybody had been registered like me produced a file from 2016 in two days, and the file had been there the whole time.**'],
]));
out.push(sp());
out.push(box('Language box – the letter with no category for you', [
  '**Never ask for a new category.** ⚠ **A category is a line in a schedule and a schedule is amended by a committee that meets twice a year** — **and you have asked the person you are writing to to write a committee paper on behalf of one applicant, to which the honest answer is no.**',
  '**Name the nearest category and one difference.** ⚠ _The nearest category is B. My case differs from B in one respect: the awarding institution is not on the schedule, although the degree is of the same length and content._',
  '**Then name what is the same, at length.** ⚠ **A category is a set of conditions and most of them are met.** **_I do not fit_ asks the reader to check every condition from the beginning; _nine of the ten conditions are met and here is the tenth_ has done nine tenths of their work** — **which is the only kind of letter that can be acted on in an afternoon.**',
  '**One difference, not two.** ⚠ **Two differences is a general plea, because the reader cannot tell which one you would give up** — **and if there are genuinely two, take them in two letters or accept that you are asking for an exception, which is 18.3.**',
  '**Ask whether a case of this kind has been determined before.** ⚠ _And if the register holds no such case I shall say so in any further correspondence._ **A body with a precedent will use it, because a precedent is the safest document in any institution** — **and nobody goes looking for one on behalf of an applicant who has not asked whether one exists.**',
  '**And never call your own case unprecedented.** ⚠ **It tells a body that nothing it has ever done can help you, which is a boast and a request for the committee at once** — **and it is wrong about four times in five, because almost nothing is unprecedented in an institution that is forty years old.**',
  '**Pronunciation.** 🔊 **Track 18.12** **Read the difference sentence as one fact among several, with no stress on _one_ and none on _not_.** ⚠ **Stress on _one_ makes it a plea for tolerance; stress on _not_ makes it an accusation about the schedule** — **and flat, it is the tenth condition of a category, which is a thing a secretary can check.**',
  '**Practise:** Nearest category, one difference, what is the same. **1** an awarding body not on a schedule  **2** a registration in two parts  **3** a qualification of the right length and wrong name  **4** the precedent question  **5** a case with two differences',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the case from the card. B names **the nearest category**, states **one difference**, and gives **the precedent question.** ⚠ **Two rows on each card ask for a new category or call the case unprecedented** — **and there B says what each costs the reader.** Change cards.'));
out.push(table(['Card A – the case', 'Card B – the case'], [
  ['_A degree of the right length from an institution not on the schedule._', '_Registration in two parts of fourteen and ten months._'],
  ['_⚠ I think you need a new category for people like me._', '_⚠ My case is unprecedented._'],
  ['_A qualification of the right content and a different name._', '_A certificate from a body that closed in 2017._'],
  ['_⚠ My situation does not lend itself to classification._', '_⚠ I do not fit any of your categories._'],
  ['_A case with two differences: the body and the length._', '_A case where the nearest category is not the one you want._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the nearest category, the single difference, and the precedent question. ⚠ **Rows 2 and 4 ask for a committee or claim to be beyond classification, and the room says what each costs the reader.** **Rows 5 are the pair that matter**: one has two differences and must be split or conceded as an exception, **and one is the case where the nearest category is not the one the writer wants** — **the only honest reason for naming a category you would rather not be in.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your case** and name **the nearest category and one difference.** ⚠ **Then list what is the same, and count it.** **In this class the counts ran from four conditions met out of six to nine out of ten** — **and the three students who had said they fell outside every category all turned out to meet most of the conditions of one.**'));
out.push(p('**b**  Swap. Your partner reads **only your difference** and says whether it is one difference or two. ⚠ **Then the harder question: have you asked whether a case like yours has been determined before?** — **and in this class nobody had, and four found a precedent within a week of asking.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar has applied to a syndicate that has three categories and none of them is his: A, B and C, and he read the schedule properly for the first time in March, and his first letter asked for a fourth, which he now sees is the one request a register cannot grant, because a category is a line in a schedule and a schedule is amended by a committee that meets twice a year. Mrs Khoury asked what a fourth category costs them, and Mrs Oueidat said eighteen months and a committee paper, and the paper has to be written by the person you are writing to, so you have asked a secretary to put a proposal to a board about a schedule on behalf of one applicant. Mr Attar said he was refused in eleven lines and the last of them is the useful one: the schedule provides three categories and your qualification has not been considered under any of them, which told him what he had not seen, that nobody had looked at B, because he had not asked them to. Mrs Khoury said so the second letter names B, and names it and then names one difference, and the rest of the paragraph is what is the same. Dr Qabbani asked why naming what is the same matters, and Mrs Oueidat said because a category is a set of conditions and most of them are met, so a letter that says nine of the ten conditions are met and here is the tenth has done nine tenths of the reader\'s work. Mrs Rizk asked about two differences, and Mrs Khoury said then take them in two letters or accept that you are asking for an exception, because a letter with two is read as a general plea. Mr Shihabi asked about precedent, and that is the question he had never asked and it is in the second letter in one sentence, and they had one from 2016, and the secretary found it in two days and told him the category it went into, which was B. Mrs Tarabishi said so the precedent did the whole thing, and Mrs Khoury said the precedent did it and the question produced the precedent. Mrs Ajouz asked about the word unprecedented, and never use it about yourself. And Mr Attar said the thing he will take away is the two days, because he had been writing to that syndicate for five months about a category that did not exist, and one sentence produced a file from 2016 that had been there the whole time._'));
out.push(p('**Listener task:** write the nearest category, the one difference, and the count of conditions met.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Attar\'s second letter to the syndicate. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _to the secretary, registration schedule_ · _application 2019/411_ · **22 June**',
  '**1 · What I am asking.** **I am asking under which of the three existing categories application 2019/411 falls.** ⚠ **I am not asking for a fourth category and I withdraw the request made in my letter of 14 March.**',
  '**2 · The nearest category.** **Category B.** **Of the ten conditions in the schedule for category B, my application meets nine.**',
  '**3 · The nine.** **Length of study, four years.** **Content, as set out in the transcript at annexe 1, which the schedule requires to include the six subjects listed, and does.** ⚠ **Supervised practice, eighteen months, certified at annexe 2.** **Examination in the final year, written and oral.** **And five further conditions on fees, references, age and residence, all met and evidenced in the application as filed.**',
  '**4 · The one respect in which it differs.** **The awarding institution is not on the schedule\'s list.** ⚠ **The degree is of the same length and the same content as those awarded by the two institutions that are listed, which the transcript shows** — **and the institution is not on the list because it was established in 2014, after the list was last revised.**',
  '**5 · The question I should have asked in March.** ⚠ **Has a case of this kind been determined before?** **If the register holds no such case, I shall say so in any further correspondence and shall not describe my application as unusual again.**',
  '**6 · What I can supply.** **A certified transcript, the institution\'s own founding instrument, and a comparison of its syllabus with the two listed institutions, prepared by me and therefore of whatever weight the syndicate gives it.**',
  '**6a · What I have not asked you to do.** **I have not asked you to put a paper to the board.** ⚠ **That is eighteen months and a committee paper written by your office on behalf of one applicant, and my letter of 14 March asked for exactly that** — **which is why it was properly refused.**',
  '**6b · One matter for the schedule and not for me.** ⚠ **The list of institutions was last revised before 2014, and at least one institution established since then awards a degree of the same length and content as those listed.** **That is a matter for whoever revises the schedule; it forms no part of my application; and I raise it here because I shall not raise it again once my own file is determined.**',
  '**6c · The two listed institutions, for comparison.** **Both award a four-year degree, both require eighteen months of supervised practice, and both examine in the final year.** ⚠ **The transcript at annexe 1 and the syllabus comparison at annexe 3 set my own degree against each of those three conditions, side by side, in a single table** — **and the table is on one sheet so that it can be read without reading this letter.**',
  '**7 · What I accept.** **If the schedule\'s list of institutions is a condition and not a guide, my application fails under category B and I shall not press it.** ⚠ **And if the question is for the board and not for your office, I should be grateful to be told, and I shall write to the board rather than ask you to.**',
]));
out.push(item('1', 'What does he ask in paragraph 1, and what does he withdraw?'));
out.push(item('2', 'Why is the awarding institution not on the schedule\'s list?'));
out.push(item('3', 'What does he accept in paragraph 7, and what does he undertake not to ask the secretary to do?'));
out.push(writers([
  'A letter to a body with no category for you: **what you are asking, and what you withdraw** → **the nearest category, and the count of conditions met** → **the conditions themselves, listed with their evidence** → **the one respect in which the case differs, with the reason for the difference** → **the precedent question** → **what you can supply, with its weight stated honestly** → **and what you accept, including where the question goes.**',
  '⚠ **Withdraw your earlier request if you made the wrong one.** _I withdraw the request made in my letter of 14 March._ **A file holding a request for a new category and a request to be considered under B holds two inconsistent applications** — **and a reader answers the one that is easiest to refuse.**',
  '**Count the conditions and then list them.** ⚠ _Of the ten conditions for category B, my application meets nine._ **The count is the claim and the list is the evidence** — **and a reader who has the count can decide how much of the letter to read.**',
  '**Give the reason for the difference, not only the difference.** ⚠ _The institution is not on the list because it was established in 2014, after the list was last revised._ **A difference with a date behind it is an administrative fact and a difference with no reason is a defect in you** — **and the first can be fixed by a revision the body owes itself.**',
  '⚠ And **state the weight of your own evidence.** _A comparison prepared by me and therefore of whatever weight the syndicate gives it._ **A writer who values their own document correctly can be trusted about the others** — **and one who presents their own comparison as authoritative has made every annexe suspect.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the letter (120 words or more).'));
out.push(p('**______________** · _to _______________ · _application _______________ · **______________**   **1 · What I am asking.** **I am asking under which of the ______________ existing categories ______________ falls.** ⚠ **I am not asking for ______________.**   **2 · The nearest category.** **______________.** **Of the ______________ conditions for ______________, my application meets ______________.**   **3 · The ______________.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No request for a new category anywhere',
  'The nearest category named, with the count before the list',
  'One difference, with the reason for it',
  'The precedent question, in one sentence',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their difference sentence**, flat, and the room says whether it is one difference.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: what you ask and withdraw, the nearest category with its count, the conditions met, the one difference with its reason, the precedent question, what you can supply, and what you accept.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no request for a new category, one difference with a reason behind it, and the precedent question present.'));
out.push(stage('7R', 'Share', 4));
out.push(p('⚠ **Two counts on the board.** **The conditions met: from four of six to nine of ten** — **and the three students who had said they fell outside every category met most of the conditions of one, which is the finding.** **Then: how many had asked whether a case like theirs had been determined before?** **Nobody** — **and four found a precedent within a week of asking.** **Then Mr Attar\'s five months and two days.**'));
out.push(hw('**Write your nearest category, your one difference with its reason, and the precedent question.** ⚠ **Then do the harder half: send the precedent question on its own, in three lines.** **In this class six sent it, four had an answer inside nine days, and two found a precedent** — **and one of the two precedents was eleven years old and had gone into the category the writer had been told was closed to them.** **Bring the answer.** **18.7 mediates between the applicant, the clerk and the rule**, so bring the refusal you have been most annoyed by and read it twice before the lesson.'));

// ===================== 18.7 =====================
out.push(h2('18.7  Review & Mediate: the applicant, the clerk, and the rule'));
out.push(p('**Function:** mediating between the applicant, the clerk, and the rule   ·   **Recycling:** Unit 18   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 3 · Writing Part 2 (the letter or email) · Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 18 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Field 7 reads not on record, which you may attach it to the form.  **2** The certificate exists in order that no pupil to be registered twice.  **3** If the question is above section level, I should be grateful to told to whom it is addressed.  **4** I am not asking for the requirement to be waive.  **5** Had I asked her what she needed, the file would go through in February.  **6** No provision exists for a case of this kind, as the provisions are present drawn.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the four accounts and the question.'));
out.push(box(null, [
  '**ONE FILE, FOUR ACCOUNTS** _(file ED/2-4471: refused 2 February, registered 4 May)_',
  '**The applicant, Mr Tayara.** _"Three letters and a refusal in three lines. Then one question about what she needed, answered in six days, and the file went through in four."_',
  '**The clerk.** _"He never asked me what the section accepts. A declaration by a head of school is not in any circular; it is a thing we do, and nobody outside the section knows it."_',
  '**The rule, paragraph 4 and circular 4 of 2019.** _"A transfer certificate from the previous school shall accompany form ED/2."_ **Nothing in either document provides for a declaration.**',
  '**The section\'s internal list of 2017, which none of the three has mentioned.** _"Acceptable alternatives where records are not held: (a) a declaration by a head of school; (b) a governorate closure list entry; (c) ..."_ **It exists, it is not published, and it has never been asked for.**',
  '⚠ **All four are accurate, and the thing that solved the case was written down eight years ago in a document the applicant could not have known about and the clerk had never been asked to produce.**',
  '**And the thing none of the three has noticed.** **Nothing here is anybody\'s fault, and there is a remedy that belongs to neither of them** — **and it is for the next applicant and not for this one.**',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 18.13  A list from 2017 that nobody had asked for', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **Two letters, and the first is one line.** **The clerk gets a thank-you that names an act: she asked for the declaration, which nobody outside her section knew existed.** **And then the section head gets the real letter** — **which is about publishing the 2017 list and is written for the next applicant.**'],
  ['Mr Tayara', 'And what must not be said is that she could have told me in February.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and it is true, which is the whole difficulty.** **She could have told you in February and she did not, because you had never asked** — **and a letter that points that out has turned a two-line thank-you into a complaint about the one person who ended three months of difficulty in six days.**'],
  ['Mrs Oueidat', 'Is anybody at fault?'],
  ['Mr Attar', '⚠ **Nobody, and this is the fifth time in Book 2 and the clearest.** **The applicant did not know the list existed.** **The clerk was never asked.** **The rule says nothing about declarations and was not written to.** **And the list is eight years old and does what everybody needed** — **so the fault is in none of the four and is in the gap between the third and the fourth.**'],
  ['Mrs Rizk', 'Then who can close the gap?'],
  ['Mrs Khoury', '⚠ **The person who can publish the list, and that is a section head and not a clerk.** **So the second letter goes there, and it asks for one thing: that the 2017 list be published or attached to form ED/2** — **and it says, in its first line, that the writer\'s own file is closed.**'],
  ['Dr Qabbani', 'Why say that first?'],
  ['Mrs Oueidat', '⚠ **Because a letter from a man whose file is open is read as a continuation of his case, however it is worded.** **_File 4471 was registered on 4 May and I am asking for nothing in relation to it_** — **and after those words the rest of the letter is about a form and not about him, which is the only footing on which anybody reads a suggestion about a form.**'],
  ['Mr Shihabi', 'Does a letter like that ever work?'],
  ['Mrs Khoury', '⚠ **Sometimes, and slowly, and that is not the reason to send it.** **The reason is that the next applicant is a head of school who has not read this unit** — **and the list has been sitting in a drawer for eight years because every applicant who got through it stopped writing on the day their own file went through.**'],
  ['Mrs Tarabishi', 'That is an uncomfortable sentence.'],
  ['Mrs Oueidat', '⚠ **It is the finding of the unit and it is about us and not about the directorate.** **Every move in these seven cycles is a way of getting your own file through a system** — **and the last of them is the only one that costs you something after your file has gone through, which is why it is the one almost nobody makes.**'],
  ['Mrs Ajouz', 'Should the letter name the list?'],
  ['Mr Tayara', '⚠ **It names it exactly, with its date and the clause I was given under it, and it says where I learnt of it.** _I learnt of the list from the clerk who applied it, on 18 April, in answer to a question about what she needed._ **No hint and no anonymity** — **because a letter that reports an internal document without saying how it reached the writer has made the clerk a source, which is the one thing she cannot afford.**'],
  ['Mr Zahreddine', 'And the thanks? One line is very little.'],
  ['Mrs Khoury', '⚠ **One line, and it names the act, which is 15.5 arriving three units later.** _You asked for a declaration by the head of school; nobody outside your section knew that was available._ **That is an act and not a quality** — **and a longer letter would be about the writer\'s gratitude, which she has no use for and no way to file.**'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is the eight years.** **A list that answers my question has been in that section since 2017, and it answered it in six days once somebody asked** — **and what I had been doing for three months instead was reading a regulation very carefully, which is what an intelligent person does when they have not thought to ask a question.**'],
]));
out.push(sp());
out.push(box('Language box – mediating between an applicant, a clerk and a rule', [
  '**Two letters and the first is one line.** ⚠ **The clerk gets a thank-you that names an act: _you asked for a declaration by the head of school; nobody outside your section knew that was available._** **The section head gets the real letter.**',
  '**What must not be said: that she could have told you in February.** ⚠ **It is true.** **She could have, and she did not, because nobody asked** — **and saying it turns a two-line thank-you into a complaint about the one person who ended three months of difficulty in six days.**',
  '**Nobody is at fault and the gap is between the rule and the list.** ⚠ **The applicant did not know the list existed; the clerk was never asked; the rule says nothing about declarations.** **The fault is in none of the four accounts and in the space between two of them.**',
  '**Say in the first line that your own file is closed.** ⚠ _File 4471 was registered on 4 May and I am asking for nothing in relation to it._ **A letter from a man whose file is open is read as a continuation of his case however it is worded** — **and after those words the letter is about a form.**',
  '**Name the internal document and say how you learnt of it.** ⚠ _I learnt of the list from the clerk who applied it, on 18 April, in answer to a question about what she needed._ **No hint and no anonymity** — **because a letter that reports an internal document without saying how it reached the writer has made the clerk a source, which is the one thing she cannot afford.**',
  '**And the finding of the unit, which is about the writer and not the institution.** ⚠ **The list has been in a drawer for eight years because every applicant who got through it stopped writing on the day their own file went through** — **and this is the only move in the unit that costs you something after you have what you wanted.**',
  '**Pronunciation.** 🔊 **Track 18.14** **Read the one-line thanks flat, and stop.** ⚠ **A warm tone on _nobody outside your section knew_ turns a fact into a compliment** — **and a compliment is a thing a clerk cannot put in a file, where a sentence naming what she did can go in it and be read by her section head in two years.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the four accounts from the card. B names **where the gap is**, gives **the two letters**, and names **what must not be said.** ⚠ **On one of the two cards the gap is in the rule itself and there is no internal document**, and B must find that. Change roles with the other pair.'));
out.push(table(['Pair A – the file and the unpublished list', 'Pair B – the scheme and the deadline'], [
  ['_The applicant: "three letters and a refusal."_', '_The applicant: "the figures were published after the deadline."_'],
  ['_The clerk: "he never asked what the section accepts."_', '_The officer: "the deadline is in the scheme rules and I cannot move it."_'],
  ['_⚠ The rule: nothing about declarations._', '_⚠ The rule: a fixed date, with no provision for late figures._'],
  ['_⚠ The list of 2017: a declaration by a head of school._', '_⚠ No internal document exists; the gap is in the rule._'],
  ['_⚠ The gap: between the rule and an unpublished list._', '_⚠ The gap: in the rule, which has no provision for its own supplier being late._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the gap, the two letters, and what must not be said. ⚠ **On Pair B there is no internal document and the gap is in the rule itself** — **so there is no clerk to thank and only one letter, which goes to whoever can amend the rules, for next year\'s applicants.** ⚠ **And the finding is that a rule with no provision for its own supplier being late is a defect and not an anomaly, and the remedy is an amendment.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the refusal you brought** and write **the four accounts**: yours, the clerk\'s as they would write it, the rule\'s own words, and one document you have not looked for. ⚠ **Then name the gap in one clause.** **In this class six of ten gaps were between a rule and an unpublished practice, three were in the rule itself, and one was in the applicant\'s own reading of the rule.**'));
out.push(p('**b**  Swap. Your partner writes **the two letters in one line each** and names **the sentence you must not write.** ⚠ **In this class that sentence has been, nine times in ten, a true statement about something the clerk could have said earlier.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said there are two letters and the first is one line: the clerk gets a thank-you that names an act, because she asked for the declaration, which nobody outside her section knew existed, and then the section head gets the real letter, which is about publishing the 2017 list and is written for the next applicant. Mr Tayara said what must not be said is that she could have told him in February, and that is exactly it and it is true, which is the whole difficulty: she could have told him and she did not, because he had never asked, and a letter that points that out has turned a two-line thank-you into a complaint about the one person who ended three months of difficulty in six days. Mrs Oueidat asked whether anybody is at fault, and Mr Attar said nobody, and this is the fifth time in Book 2 and the clearest: the applicant did not know the list existed, the clerk was never asked, the rule says nothing about declarations, and the list is eight years old and does what everybody needed. Mrs Rizk asked who can close the gap, and Mrs Khoury said the person who can publish the list, and that is a section head and not a clerk, so the second letter goes there and asks for one thing. Dr Qabbani asked why the letter should say first that his own file is closed, and Mrs Oueidat said because a letter from a man whose file is open is read as a continuation of his case however it is worded. Mr Shihabi asked whether a letter like that ever works, and sometimes, and slowly, and that is not the reason to send it: the reason is that the next applicant is a head of school who has not read this unit. Mrs Tarabishi said that is an uncomfortable sentence, and Mrs Oueidat said it is the finding of the unit and it is about us and not about the directorate, because every move in these seven cycles is a way of getting your own file through a system and the last of them is the only one that costs you something after your file has gone through. Mrs Ajouz asked whether the letter should name the list, and it names it exactly, with its date and the clause he was given under it, and it says where he learnt of it. Mr Zahreddine asked about the thanks, and one line, and it names the act. And Mr Tayara said the thing he will take away is the eight years: a list that answers his question has been in that section since 2017, and what he had been doing for three months instead was reading a regulation very carefully, which is what an intelligent person does when they have not thought to ask a question._'));
out.push(p('**Listener task:** write the gap in one clause and the two letters in one line each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 3)', 7));
out.push(p('For questions **1–8**, read the text below. Use the word given in capitals at the end of some of the lines to form a word that fits in the gap in the same line.'));
out.push(box(null, [
  '**WHY THE FILE TOOK THREE MONTHS**',
  'Most difficulties with a public body are **(1)** ______________ rather than personal.   **INSTITUTE**',
  'The applicant believes he is up against a **(2)** ______________ temperament, and in fact he is up against a schedule, a form and a clerk with forty files on her desk.   **BUREAUCRACY**',
  'The usual error is to argue about **(3)** ______________ before establishing what the rule is for.   **ELIGIBLE**',
  'The **(4)** ______________ framework is rarely the difficulty: the difficulty is an empty field that a clerk cannot close, and almost nobody asks what a complete file needs.   **REGULATE**',
  'Nor do they ask whether a case of their kind has been dealt with before, and almost nothing is **(5)** ______________ in a body that is forty years old.   **PRECEDENT**',
  'Where a requirement is **(6)** ______________ it cannot be waived by a section at all, and a letter asking for a waiver is refused on that ground before the documents are read.   **STATUTE**',
  'Where it is not, and its purpose is already met, the requirement is **(7)** ______________ in that case — a safeguard against something the record shows cannot occur.   **ANOMALY**',
  'And the remedy is often sitting in a drawer: an internal list of acceptable alternatives, drawn up years earlier to make exactly this kind of **(8)** ______________ possible, and never published.   **ACCOMMODATE**',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two letters (120 words or more in total, including the working).'));
out.push(p('**To the clerk, one line.** ⚠ **You asked for ______________; nobody outside your section knew ______________.**   **To the section head.** **File ______________ was registered on ______________ and I am asking for nothing in relation to it.** ⚠ **I learnt of ______________ from ______________, on ______________, in answer to a question about ______________.** **I am asking that ______________.**   **And the working, which goes in neither letter.** **The sentence that must not be written: ______________.** **Why: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The thanks one line, naming an act',
  'Your own file said to be closed, in the first line',
  'The internal document named, with how you learnt of it',
  'One request, for the next applicant and not for you',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 2: the letter or email)', 10));
out.push(box(null, [
  '⚠ **Say in the first line that your own case is closed, and ask for one thing.**',
  'You have recently had a matter settled by a public body after a long delay, and you have learnt that an internal document which would have settled it at once is not published. **Write a letter to the head of the section**, explaining **what happened**, **how you learnt of the document**, and **what you are asking for.** Write **220–260 words**.',
  '**You should include:** that your own case is closed   ·   the dates   ·   the document, named exactly   ·   how you learnt of it   ·   one request   ·   and what you are not asking for.',
  '⚠ **Nothing in the letter may criticise the person who helped you.** **Name what she did, once, as a fact.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 18 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Field 7 reads "not on record", ___ you may attach to the form.   a) which it   b) what   c) which',
  '2  The certificate exists in order that no pupil ___ at two schools.   a) to be registered   b) is registered   c) registering',
  '3  I should be grateful ___ to whom it is properly addressed.   a) to be told   b) to told   c) being told',
  '4  I am not asking for the requirement ___ .   a) to be waive   b) waiving   c) to be waived',
  '5  Had I asked her what she needed, the file ___ through in February.   a) would go   b) would have gone   c) will have gone',
  '6  No provision exists, as the provisions are ___ drawn.   a) presently   b) present   c) presence',
  '7  The day-book ___ under circular 4 of 2019.   a) may accept   b) may be accept   c) may be accepted',
  '8  Nothing ___ until the file has a category.   a) switches   b) switches on   c) is switched',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 2 style – sentence completion).** 🔊 **Track 18.15** You will hear a retired registration clerk talking about how files get through. Complete the sentences with **a word or short phrase**.'));
[
  '**1**  She worked in the registration section for ______________ years.',
  '**2**  On a Tuesday there were about ______________ files on her desk.',
  '**3**  She says the worst thing an applicant can do in a letter is to ______________ .',
  '**4**  Almost nobody asked her what a complete ______________ needed.',
  '**5**  The section kept an internal ______________ of acceptable alternatives.',
  '**6**  In the end the file was completed by a declaration signed by a ______________ .',
  '**7**  What made a letter easy to use was having the paragraph on a ______________ sheet.',
  '**8**  In twenty-six years she was never criticised for any of her ______________ .',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 18.15  Audio script (read after the check)', [
  ['Clerk', 'I was in the registration section for twenty-six years and I left in the spring. On a Tuesday there would be forty files on the desk, and the whole of the job is deciding which of them is complete.'],
  ['Clerk', 'People write in and they are angry, which I understand, and the angry ones are easy because they tell you what they want. The difficult ones are the ones who threaten. The moment somebody says they will take it further, the file has to be perfect, because my section head is going to read it. So I write the refusal properly, with the paragraph quoted, and that is the end of it. A refusal written like that is almost impossible to reopen. I never once in twenty-six years helped anybody who had threatened me, not out of spite, but because the only safe document left was the refusal.'],
  ['Clerk', 'And in all that time almost nobody asked me what a complete file needed. They argued about the regulation. They sent me three pages about the regulation. The regulation is not the difficulty: the difficulty is that a field is empty and I cannot close it.'],
  ['Clerk', 'We kept an internal list of acceptable alternatives, drawn up in 2017, for cases where the records are not held. It is not published and I have no idea why not; it was written by somebody who had the same problem forty times. A head of school, for instance, can sign a declaration that no other registration is held, and that completes the field. I gave that to a head of school in April who asked me what I needed, and his file went through in four days, and he had been writing to us since February.'],
  ['Clerk', 'The other thing that helps, and it sounds very small, is when the paragraph I am meant to attach comes on a separate sheet. If it is in the middle of a letter arguing with me, I cannot attach it: I should have to copy out a page of somebody\'s argument and put it in a file. On its own sheet I can initial it and it is done.'],
  ['Clerk', 'And I will tell you the thing nobody believes. In twenty-six years nobody ever asked me why I had refused a file, and nobody was ever critical of any of my refusals. It is the acceptances that are looked at.'],
]));
out.push(p('**C  Writing.** Write the two letters and the working beneath them (120 words or more): the one-line thanks naming an act, the letter to the section head with your own file closed, the document named with how you learnt of it, one request, and the sentence that must not be written.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 18)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ read an institution\'s prose in order and name three of its habits, each with a use',
  '☐ write a covering line that names the field, quotes the entry and gives permission to attach',
  '☐ write a paragraph that can sit in a file and be read by a stranger in two years',
  '☐ state what a rule is for, and measure my case against its purpose',
  '☐ ask whether a requirement applies, rather than asking for it to be waived',
  '☐ ask the person applying the rule what they need, and put nothing after the question',
  '☐ borrow a register in five words and refuse the claim inside it',
  '☐ name the nearest category, the one difference, and ask the precedent question',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _fit into · fall under · come under · slot into · work round · get past · put through · send in · write in to · press one\'s case · go over the head of · let in on_.',
  '**This unit\'s word-formation set** _(Reading Part 3 in 18.7 is built on this unit\'s lexis)_: _institute → **institutional** · bureaucracy → **bureaucratic** · eligible → **eligibility** · applicant → **application** · precedent → **unprecedented** · statute → **statutory** · anomaly → **anomalous** · regulate → **regulatory** · accommodate → **accommodation**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _listen to_ **→ _the directorate will listen to a reason it can write on a form_**, which is a body giving a thing consideration, where at A2 it was listening to music · _hand in_ **→ _he handed in his notice rather than ask for the exception_**, which is resigning a post, where at A2 it was handing in homework · _switch on_ **→ _nothing switches on until the file has a category_**, which is a provision coming into effect, where at A2 it was switching on a lamp.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 18 · Writing to a System You Do Not Belong To');
