// Proactive English C1 · Syria Edition · Book 1 · Unit 11 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE ORIGINAL SAID', 'WHAT THE READER OF THE OTHER VERSION GOT'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const absences = (rows) => table(['WHAT HAS NO EQUIVALENT', 'WHAT A READER WILL SUPPLY INSTEAD', 'WHAT YOU WRITE'], rows, [2, 2, 3]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says what a reader of the other version would supply, and what the writer should have written instead.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 11  Saying the Same Thing in Another Language\'s Shape'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Mediation is on the C1 examination and it is the thing this class does for a living.** ⚠ **Not translation: mediation.** **Taking a document written inside one system and making it usable by a reader inside another** — **and the first thing that work produces is not a version of the document. It is a list of what has no equivalent.**',
  '**11.1** renders a document for a reader in another system and names what has no equivalent.   **11.2** tells a calque from an equivalent in your own writing.   **11.3** carries a hedge across a language, and says when it cannot be done.   **11.4** says what a translation added that the original did not have.   **11.5** mediates a document whose form, and not whose content, is the problem.   **11.6** writes the covering note that makes an untranslatable document usable.   **11.7** mediates between a document, its translation, and the reader who has only the translation.',
  '**Exam practice in 11.7:** C1 Advanced **Reading and Use of English Part 4** (key word transformations), **Writing Part 1** (the essay, for the sixth time) and **Listening Part 3** (a long interview).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a document from your own work that somebody in another system has to use — a form, a certificate, a letter, a protocol, a reference. **Two:** anything of yours that has been translated, in both versions if you have them. **11.1 runs on the first and 11.4 cannot be run without the second.**',
  '**And one warning, because this unit is about other people\'s languages and is not a translation course.** ⚠ **Nothing here asks you to translate anything.** **Everything here asks you to write English that survives being translated by somebody you will never meet** — **and the measure of success is the number of decisions you have taken off their desk, which is a number you can count.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 11.1 =====================
out.push(pb());
out.push(h2('11.1  The list of absences'));
out.push(p('**Function:** rendering a document for a reader in another system, and naming what has no equivalent   ·   **Grammar:** mediation proper · the absence stated before the version   ·   **Pronunciation:** a term read aloud and then glossed without a pause'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your document, and the reader in another system who has to use it.** ⚠ **Name the reader, not the system.** Your teacher writes the ten readers on the board. **In most classes six or seven of the ten readers are a person who has no equivalent of the thing the document is about** — **a registrar, a form tutor, a second sample, a grants panel.**'));
out.push(board('Attach a reference from your form tutor.', 'A reference from somebody who does not exist.'));
out.push(p('**b**  Which two have no equivalent in another system? **1** _The reading was 8.4 degrees._  **2** _A reference from the form tutor._  **3** _Nine of the eleven queries._  **4** _A second sample._  **5** _The 2019 circular._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide mediation produces first?   **A** a version of the document   **B** **a list of what has no equivalent** — because a reader in another system supplies something in place of every absence, and the writer can choose what they supply   **C** a translation'));
out.push(p('**b**  Listen again. **1** What happened to the student whose file asked for a reference from a form tutor?   **2** What does Mrs Khoury say a reader does with an absence?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.1  What has no equivalent', [
  ['Ms Huda', 'Mrs Oueidat — the reference that could not be obtained.'],
  ['Mrs Oueidat', '⚠ **A university abroad asked a student for a reference from his form tutor.** **There is no form tutor in his school.** **He sent one from the headmaster, who had never taught him, and the university read it as a reference from somebody who did not know him.**'],
  ['Mr Tayara', 'Which it was.'],
  ['Mrs Oueidat', '⚠ **Which it was, and the document was not the problem.** **The form had a field for a thing that does not exist here**, and nobody on either side had written down that it does not exist. **The mediation was never a translation: it was one sentence saying what we have instead.**'],
  ['Mrs Khoury', '⚠ **And this is the whole shape of the unit.** **A reader in another system does not stop at an absence** — **they supply something.** **Something from their own system, confidently, and nothing in your document tells them they have done it.**'],
  ['Mrs Tarabishi', 'So the list comes before the version.'],
  ['Mrs Oueidat', '⚠ **Always, and it is usually three or four items long.** **What has no equivalent, what the reader will supply instead, and what you write.** **Three columns, and in ten years I have never produced a useful version of a document before writing the three columns.**'],
  ['Dr Qabbani', '_Second sample_ has no equivalent?'],
  ['Mrs Oueidat', '⚠ **Not in a system where the first is taken twice as a matter of course.** **A reader there will read _second sample_ as _repeat test_** — **which is a different act with a different purpose, and your eight at night then look like eight repeat tests nobody ordered.**'],
  ['Mr Shihabi', 'A desk abroad does this to our copy every day.'],
  ['Mrs Khoury', '⚠ **And the copy that survives has the gloss inside the sentence.** _the governorate health office, which runs the clinics_. **Six words.** **A desk will cut a footnote and keep six words that are doing work** — **which is 10.5 and it is now the whole unit rather than one cycle of it.**'],
  ['Mrs Ajouz', 'My registration file is read in two systems and I had not thought of it as two.'],
  ['Mrs Oueidat', '⚠ **It is read in three: the inspectorate, the manufacturer and the regional office, and the three use _excursion_ differently.** **Which means the list of absences is not about foreign countries at all.** **Another office is another system** — **and most of what this unit teaches never crosses a border.**'],
  ['Mrs Rizk', 'What do I write in the third column?'],
  ['Mrs Oueidat', '⚠ **The absence, named, and then what you have instead.** _There is no form tutor in Syrian secondary schools; the attached reference is from the teacher who taught the subject for three years._ **Twenty-two words, and the reader stops supplying.**'],
  ['Jad', 'And if I do not know what their system has?'],
  ['Mrs Khoury', '⚠ **You do not need to.** **You need to know what yours has and say so exactly.** **A reader who is told precisely what you have will do their own mapping** — **and the mapping they do with your twenty-two words is better than any guess you could make about their system from here.**'],
  ['Mr Zahreddine', 'My opinions go to insurers in three countries and I have never written a list.'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is the boy\'s headmaster.** **He wrote a careful reference about a student he had never taught, because the form asked for one and because nobody had said what we have instead** — **and the student was refused, and nothing in the file was false.**'],
]));
out.push(sp());
out.push(absences([
  ['**a _form tutor_**', 'a teacher who knows the pupil personally', '_there is no form tutor in Syrian secondary schools; this reference is from the teacher who taught the subject for three years_'],
  ['**a _second sample_**', 'a repeat test, ordered because of doubt', '_a second sample is taken as a matter of routine at admission, not because the first is doubted_'],
  ['**a _grants panel_**', 'a committee with a chair and minutes', '_two readers assess each application separately and do not meet_'],
  ['**an _excursion_**', 'a reading outside the limit', '⚠ _an excursion here means a reading above the stated limit; the inspectorate adds the instrument tolerance and the manufacturer does not_'],
]));
out.push(sp());
out.push(box('Language box – the list of absences', [
  '**The list comes before the version, always.** ⚠ **Three columns: what has no equivalent, what the reader will supply instead, and what you write.** **Three or four items is a usual length** — **and the third column is the only part that leaves your desk.**',
  '**Why a reader does not stop at an absence.** ⚠ **They supply something, from their own system, confidently** — **and nothing in your document tells them they have done it.** **A university read a headmaster\'s reference as a reference from somebody who did not know the student, which it was.**',
  '**What goes in the third column.** ⚠ **The absence, named, and then what you have instead.** _There is no form tutor in Syrian secondary schools; the attached reference is from the teacher who taught the subject for three years._ **Twenty-two words, and the reader stops supplying.**',
  '**You do not need to know their system.** ⚠ **You need to know yours and say it exactly.** **A reader told precisely what you have will do their own mapping** — **and their mapping is better than any guess you could make about their system from here.**',
  '**The gloss goes inside the sentence and is about six words.** ⚠ _the governorate health office, which runs the clinics_. **A desk will cut a footnote and keep six words that are doing work** — **which is 10.5 arriving as the whole method rather than as one of four groups.**',
  '**And another office is another system.** ⚠ **Mrs Ajouz\'s file is read by an inspectorate, a manufacturer and a regional office, and the three use _excursion_ differently.** **Most of what this unit teaches never crosses a border** — **and the list of absences is the same list whether the reader is in Hama or in Hamburg.**',
  '**Pronunciation.** 🔊 **Track 11.2** **Read a term aloud and then its gloss with no pause between them.** ⚠ _the form tutor the teacher responsible for the attendance record_. **A pause turns the gloss into an aside and a listener discards it.** **No pause, and it is part of the term** — **which is also why the gloss is written inside the sentence and not between brackets.**',
  '**Practise:** Name the absence and write the third column. **1** a role that does not exist  **2** a routine act read as an exceptional one  **3** a body with no equivalent shape  **4** a word used differently by three readers  **5** one where the absence is in your own office and not abroad',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B says **what a reader in another system will supply** and writes **the third column.** ⚠ **Two rows on each card have an exact equivalent and need nothing.** **B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_A reference from the form tutor._', '_A second sample at admission._'],
  ['_⚠ The reading was 8.4 degrees._', '_⚠ Nine of the eleven queries arose against a printed sheet._'],
  ['_The grants panel was not persuaded._', '_The registrar discontinued the antibiotic._'],
  ['_⚠ The 2019 circular, issued in March._', '_⚠ Fifty-five of the fifty-six positions read 12.0 to 12.2._'],
  ['_An excursion was recorded._', '_The file was returned by the inspectorate._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the absence, what is supplied, and the third column. ⚠ **Rows 2 and 4 on both cards need nothing** — **a measurement, a count with a denominator, a dated document and five numbers all go into any system unchanged.** **Rows 3 are the institutional roles**, and each third column is about six words. **Rows 5 are hardest: _excursion_ and _returned_ are acts whose meaning is set by the reader\'s own procedure**, and the third column must say whose procedure yours follows.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your document** and write **the three columns.** ⚠ **The middle column is the one that is skipped and it is the one that does the work** — **what will the reader supply?** **Write it in their words and not in yours.** **In this class a document has produced between two and six absences**, and nobody has produced none.'));
out.push(p('**b**  Swap. Your partner reads **only your middle column** and says **whether they would have supplied the same thing.** ⚠ **They disagree about a third of the time**, and the disagreement is the finding: if two readers in this room supply two different things, a reader in another system will supply a third.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _A university abroad asked a student for a reference from his form tutor, and there is no form tutor in his school: he sent one from the headmaster, who had never taught him, and the university read it as a reference from somebody who did not know him. Mr Tayara said which it was, and which it was, and the document was not the problem: the form had a field for a thing that does not exist here, and nobody on either side had written down that it does not exist. Mrs Khoury said this is the whole shape of the unit — a reader in another system does not stop at an absence but supplies something, from their own system, confidently, and nothing in your document tells them they have done it. Mrs Tarabishi said so the list comes before the version, and always, and it is usually three or four items long: what has no equivalent, what the reader will supply instead, and what you write. Dr Qabbani asked whether second sample has no equivalent, and not in a system where the first is taken twice as a matter of course: a reader there will read second sample as repeat test, which is a different act with a different purpose. Mr Shihabi said a desk abroad does this to their copy every day, and the copy that survives has the gloss inside the sentence, about six words, because a desk will cut a footnote and keep six words that are doing work. Mrs Ajouz said her registration file is read in two systems and she had not thought of it as two, and it is read in three — the inspectorate, the manufacturer and the regional office — and the three use excursion differently, which means the list of absences is not about foreign countries at all. Mrs Rizk asked what goes in the third column, and the absence, named, and then what you have instead. Mr Attar asked what happens if he does not know what their system has, and you do not need to: you need to know what yours has and say so exactly. Mr Zahreddine said his opinions go to insurers in three countries and he has never written a list, and Mrs Khoury said that is worth eleven minutes of his afternoon and he will not get the eleven minutes back from any other exercise in this book. And Mrs Oueidat said the thing she will take away is the boy\'s headmaster, who wrote a careful reference about a student he had never taught, and the student was refused, and nothing in the file was false._'));
out.push(p('**Listener task:** write your three columns, and the disagreement your partner found.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Oueidat wrote for the student\'s file. Answer the questions.'));
out.push(model([
  '**M. OUEIDAT** · _note for the file of A. Haddad, application to the University of _______ · _what the Syrian school system has in place of the things the form asks for_ · **2 July**',
  '**This note names four things the application form asks for which do not exist in the Syrian secondary system, and says what exists instead.** ⚠ **It is written because a reader who meets an absence supplies something**, and the four things supplied last year were all wrong in the same direction.',
  '**One: the form tutor\'s reference.** **There is no form tutor in a Syrian secondary school.** **A class has a supervising teacher who takes an attendance register and does not teach the class.** **The enclosed reference is from the teacher who taught the applicant mathematics for three years and set his two internal examinations**, and is the closest thing the system holds to what the form describes.',
  '**Two: the predicted grade.** **Nothing in the system produces one.** **Marks are recorded after examination and are not forecast.** ⚠ **The three figures enclosed are actual marks for the two internal examinations and the first public examination**, with the dates of each, and no figure in this file is a prediction.',
  '**Three: the personal statement countersignature.** **No school officer countersigns a pupil\'s statement, and no form exists for it.** **The headmaster has written a separate letter confirming that the applicant wrote the statement himself and that it was submitted on 14 June**, which is the only confirmation the system can produce.',
  '**Four: the grading scale.** **The scale runs to 240 and not to 100, and the pass mark is 120.** **A reader converting by proportion will produce a figure about four points below the correct one**, because the two public examinations are weighted differently; **the conversion table from the ministry is at annexe B.**',
  '**Five: the two-year gap in the record.** **The applicant\'s school was closed for eleven months in 2020 and the register for that period is held centrally and not by the school.** ⚠ **A reader who meets a gap in an attendance record supplies an absence from school**, and this was a closure: **the ministry\'s confirmation of the closure dates is at annexe C and covers every pupil in the governorate.**',
  '**What this note does not do.** ⚠ **It does not say what any of these things is equivalent to in the university\'s own system.** **I do not know that system and a guess from here would be worse than the absence** — **the university\'s admissions office can map what is described above, and this note exists so that they map it rather than assume it.**',
  '**What happened without this note.** **Last year an applicant from the same school sent a reference from his headmaster, who had never taught him.** **It was read as a reference from somebody who did not know the applicant, which it was**, and the application was refused. **Nothing in that file was false.** **The refusal letter gave the reference as the reason and gave no other.**',
  '**M. Oueidat** · _court-appointed translator and interpreter_ · _instructed by the applicant\'s family_',
]));
out.push(item('1', 'Why does she say the note is written, and what happened last year?'));
out.push(item('2', 'What does she say about the grading scale, and why is a proportion wrong?'));
out.push(item('3', 'What does the note expressly not do, and why?'));
out.push(writers([
  'A note that names absences: **say how many there are and that a reader supplies something** → **each absence, named** → **what the system has instead, described exactly** → **the enclosure that stands for it** → **what the note does not do** → **and what happened without it.**',
  '⚠ **Name the absence before describing the substitute.** _There is no form tutor in a Syrian secondary school._ **A note that begins with the substitute reads as an excuse** — **and a reader who has not been told the thing does not exist assumes it does and that you could not get it.**',
  '**Describe your own system and not theirs.** ⚠ _A class has a supervising teacher who takes an attendance register and does not teach the class._ **Exact, and about what you have.** **A guess at their equivalent is worse than the absence**, because a wrong mapping is harder to undo than no mapping.',
  '**Refuse the equivalence expressly.** ⚠ _I do not know that system and a guess from here would be worse than the absence._ **This is the sentence that makes the rest of the note usable** — **it tells the reader that the mapping is theirs and that you have given them the material for it.**',
  '⚠ And **end with what happened without the note.** _It was read as a reference from somebody who did not know the applicant, which it was._ **One case, with its outcome.** **A note that only explains is filed; a note with a refused application in it is read twice.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note naming absences (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _______________ · **______________**   **This note names ______________ things ______________ asks for which do not exist in ______________, and says what exists instead.** ⚠ **It is written because ______________.**   **One: ______________.** **There is no ______________ in ______________.** **______________.** **The enclosed ______________ is ______________**, and is the closest thing the system holds to what ______________ describes.   **Two: ______________.** **Nothing in the system produces one.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The absence named before the substitute',
  'Your own system described exactly, not theirs guessed at',
  'The equivalence expressly refused',
  'One case with its outcome',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their middle column**, and the room says whether it would have supplied the same thing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the count of absences, each one named with its substitute and its enclosure, what the note does not do, and what happened without it.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the absence named first, your own system described exactly, the equivalence refused, and one case with its outcome.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads a term and its gloss twice: once with a pause between them and once with none.** ⚠ **The room says which version it heard as part of the term.** **It is the second** — **a pause turns a gloss into an aside and a listener discards it**, which is also why the gloss goes inside the sentence and not between brackets. Then the sentence the cycle ends on, which is Mrs Oueidat\'s: **nothing in that file was false.**'));
out.push(hw('Take **your document** and write **the three columns in full.** ⚠ **Then show the middle column to two people and ask what they would supply.** **Where the two of them differ, mark the row** — **a reader in another system will supply a third thing.** **Bring the three columns and the marked rows.** **11.2 tells a calque from an equivalent in your own writing**, which is the fault that produces English nobody has ever spoken.'));

// ===================== 11.2 =====================
out.push(pb());
out.push(h2('11.2  The calque and the equivalent'));
out.push(p('**Function:** telling a calque from an equivalent in your own writing   ·   **Grammar:** the phrase that is English word by word and English nowhere else   ·   **Pronunciation:** a calque read aloud to somebody who does not expect it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the opening sentence of the last formal letter or message you sent in English.** ⚠ **The opening sentence, word for word.** Your teacher writes the ten openings on the board. **In most classes four or five of the ten contain a phrase that is English word by word and is used nowhere in English** — **and every one of those four or five was written by somebody who knew exactly what they meant.**'));
out.push(board('I would like to draw your kind attention to the attached.', 'The file is attached. It shows nine of eleven.'));
out.push(p('**b**  Which two are calques? **1** _I would like to draw your kind attention to the attached file._  **2** _The file is attached._  **3** _Nine of the eleven queries arose against a printed sheet._  **4** _I should be grateful for a correction._  **5** _Please be informed that the necessary has been done._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the room decide a calque is hard to find in your own writing?   **A** it is a rare mistake   **B** **because it means exactly what you intend it to mean** — the fault is not in the sense but in the fact that no reader has met the phrase before   **C** because it is grammatically correct'));
out.push(p('**b**  Listen again. **1** What happened to Mr Attar\'s forum answer, and which sentence caused it?   **2** What does Mrs Khoury say the test is?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.3  English word by word', [
  ['Ms Huda', 'Mr Attar — the answer nobody read.'],
  ['Jad', '⚠ **Four hundred words of working code and a first sentence that said _kindly be informed that the problem has been solved by the needful change_.** **Two replies, both about the sentence.** **Nobody tried the code.**'],
  ['Mrs Khoury', '⚠ **Because the first sentence told them you were not one of them.** **Every word in it is English and the phrase is used nowhere in English** — **and the reader\'s attention goes to the oddity and stays there.**'],
  ['Mrs Tarabishi', 'But it means what he meant.'],
  ['Jad', '⚠ **It means exactly what I meant, which is why I cannot see it.** **A calque is not a mistake of sense.** **It is a phrase built on the shape of one language out of the words of another** — **and to the writer it is transparent, because the shape is the shape they think in.**'],
  ['Mrs Oueidat', '⚠ **And it is the one error nobody will tell you about.** **A reader does not correct it: they discount you and answer somebody else.** **In eleven years I have never had a correspondent point one out to me, and I have had letters go unanswered for it.**'],
  ['Dr Qabbani', 'So what is the test?'],
  ['Mrs Khoury', '⚠ **Has a reader ever met this phrase in something they did not translate?** **Not _is it correct_, which it is, and not _is it clear_, which it usually is.** **_Has anybody met it._** **And the way to answer that is to read it to somebody who is not expecting it.**'],
  ['Mr Tayara', 'How do I do that from here?'],
  ['Mrs Khoury', '⚠ **You read it aloud to this room and watch the faces.** **Four of us will not react and four will, and the four who react are the test** — **because the four who do not have the same shape in their heads that you have.** **That is the whole value of a class of ten over a dictionary.**'],
  ['Mrs Ajouz', 'Mine are in the letters I was given to copy.'],
  ['Mrs Oueidat', '⚠ **Which is where almost all of them come from.** _We would like to inform your good selves._ _Kindly do the needful._ _Please find attached herewith._ **These were in a template in 1974 and have been copied forward ever since** — **and a writer copying them is not making an error: they are inheriting one.**'],
  ['Mrs Rizk', 'And the equivalent? What do I write instead?'],
  ['Jad', '⚠ **Less, almost always.** _The file is attached._ _The problem is fixed; the change is at line 41._ **A calque is long because it is doing work that the shape of the other language does with grammar** — **and in English the grammar does it, so the words are not needed.**'],
  ['Mr Shihabi', 'A desk cuts them and says nothing.'],
  ['Mrs Khoury', '⚠ **A desk cuts them and forms a view.** **The cut costs four seconds and the view lasts a career** — **and the writer never learns of either, which is the one thing that makes this worse than the other faults in this book.**'],
  ['Mr Zahreddine', 'My opinions have one. _The said frame._'],
  ['Jad', '🔊 ⚠ **And the thing I shall take away is that both replies were about the sentence.** **Four hundred words of code that worked, and the thread is about eight words of politeness** — **and I had written the eight words to be polite, which is what they are for in the language I was thinking in.**'],
]));
out.push(sp());
out.push(box('Language box – the calque', [
  '**What a calque is.** ⚠ **A phrase built on the shape of one language out of the words of another.** **Every word is English and the phrase is used nowhere in English** — **and to its writer it is transparent, because the shape is the shape they think in.**',
  '**Why you cannot find it yourself.** ⚠ **It means exactly what you intend.** **The fault is not in the sense and not in the grammar: it is that no reader has met the phrase before** — **and your own ear cannot supply a reader who has not met it.**',
  '**The test, and it is one question.** ⚠ _Has a reader ever met this phrase in something they did not translate?_ **Not _is it correct_ and not _is it clear_.** **The way to answer it is to read it aloud to somebody who is not expecting it** — **and about four in ten will not react, which is why ten readers are worth more than a dictionary.**',
  '**The commonest ones, and where they come from.** ⚠ _We would like to inform your good selves._ _Kindly do the needful._ _Please find attached herewith._ _I draw your kind attention to._ **These were in office templates fifty years ago and have been copied forward since** — **a writer using them is inheriting an error and not making one.**',
  '**The equivalent is almost always shorter.** ⚠ _The file is attached._ **A calque is long because it is doing with words what the other language does with grammar** — **and in English the grammar does it, so the words are not needed.** **This is the one fault in the book whose repair makes a document shorter.**',
  '**And why it matters more than its size.** ⚠ **A reader does not correct a calque: they discount the writer and answer somebody else.** **A desk cuts it in four seconds and forms a view that lasts a career**, and the writer learns of neither — **which is what makes this worse than any error of fact, all of which somebody will tell you about.**',
  '**Pronunciation.** 🔊 **Track 11.4** **Read your opening sentence aloud to the room and watch the faces.** ⚠ **Four will not react and four will.** **The four who react are the test.** **The four who do not have the same shape in their heads that you have** — **and both groups are useful, because the second group tells you which of your phrases are shared inside this room and still not shared outside it.**',
  '**Practise:** Find it and write the equivalent. **1** an opening sentence  **2** a phrase inherited from a template  **3** a politeness formula  **4** one where the equivalent is three words  **5** one that four people in the room do not react to — and say what that tells you',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **whether a reader has met the phrase** and writes **the equivalent, counting the words saved.** ⚠ **Two rows on each card are ordinary English and need nothing.** **B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_I would like to draw your kind attention to the attached file._', '_Kindly be informed that the needful has been done._'],
  ['_⚠ The file is attached and the figures are at annexe A._', '_⚠ I should be grateful for a correction._'],
  ['_We would like to inform your good selves of the decision._', '_Please find attached herewith the said document._'],
  ['_⚠ Nine of the eleven queries arose against a printed sheet._', '_⚠ The reading was 8.4 degrees at 09:20._'],
  ['_It is hereby notified that the same has been actioned._', '_Thanking you in advance for your kind cooperation._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** met or not met, the equivalent, and the words saved. ⚠ **Rows 2 and 4 on both cards are ordinary English** — **and _I should be grateful for a correction_ is worth dwelling on, because it looks like a calque and is not: it is formal English that a desk uses.** **Count the words saved on the others**: in this class the equivalents have run at a third of the originals, which is the arithmetic that persuades.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the last three formal messages you sent** and read **their opening sentences aloud to the room.** ⚠ **Count the faces that react.** **Then write the equivalent of every sentence that produced a reaction, and count both lengths.** **In this class the equivalents have been between a quarter and a third as long.**'));
out.push(p('**b**  Take **the sentences that produced no reaction at all** and write them on the board. ⚠ **These are the ones shared inside this room and possibly nowhere else.** **They are the dangerous group**, because this room cannot test them — and the honest answer is to mark them and ask somebody outside it.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar had four hundred words of working code and a first sentence that said kindly be informed that the problem has been solved by the needful change: two replies, both about the sentence, and nobody tried the code. Mrs Khoury said that is because the first sentence told them he was not one of them — every word in it is English and the phrase is used nowhere in English, and the reader\'s attention goes to the oddity and stays there. Mrs Tarabishi said but it means what he meant, and it means exactly what he meant, which is why he cannot see it: a calque is not a mistake of sense but a phrase built on the shape of one language out of the words of another, and to the writer it is transparent because the shape is the shape they think in. Mrs Oueidat said it is the one error nobody will tell you about, because a reader does not correct it but discounts you and answers somebody else, and in eleven years she has never had a correspondent point one out. Dr Qabbani asked what the test is, and has a reader ever met this phrase in something they did not translate — not is it correct, which it is, and not is it clear, which it usually is. Mr Tayara asked how to do that from here, and you read it aloud to this room and watch the faces: four will not react and four will, and the four who react are the test. Mrs Ajouz said hers are in the letters she was given to copy, and that is where almost all of them come from: we would like to inform your good selves, kindly do the needful, please find attached herewith, all of them in a template fifty years ago. Mrs Rizk asked what to write instead, and less, almost always, because a calque is long because it is doing with words what the other language does with grammar. Mr Shihabi said a desk cuts them and says nothing, and Mrs Khoury said a desk cuts them and forms a view: the cut costs four seconds and the view lasts a career. Mr Zahreddine said his opinions have one, the said frame, and Mrs Oueidat said that one is different because it is a term of art in English law and a reader of a tribunal bundle has met it, which is the exception that proves the test. And Mr Attar said the thing he will take away is that both replies were about the sentence._'));
out.push(p('**Listener task:** write the number of faces that reacted to each of your three openings.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mr Attar\'s answer as he posted it the second time. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _reply on the embedded-systems forum_ · _thread: watchdog resets on the third board revision_ · **4 July**',
  '**The problem is the watchdog timeout, and the fix is at line 41.** **Set it to 2048 milliseconds rather than 512, and the resets stop.**',
  '**Why 512 fails on this revision and not on the previous one.** **The third revision moves the sensor read into the same loop as the display refresh.** **On the two boards I have here, the loop takes between 600 and 900 milliseconds when the display is redrawn in full, and 512 is inside that range.** **The previous revision redrew the display from a separate timer and never exceeded 300.**',
  '**What I have measured and what I have not.** **Two boards, both revision three, over about forty hours.** ⚠ **I have not tested with the optional second sensor fitted**, and anybody running that should expect the loop to be longer and may need 4096.',
  '**Why I am not suggesting moving the sensor read out of the loop, which is the other fix.** **It works and it is a larger change.** **The timeout is one line and can be undone in four seconds; moving the read touches three files and the interrupt priorities** — **and a reader who has a board resetting tonight wants the one line.**',
  '**What to set it to if 2048 is too long for your application.** **The resets stop anywhere above about 1000 on the two boards here, and 2048 is chosen for margin rather than because it is a threshold.** **If the watchdog has to catch a hang inside a second, 1200 works and leaves about 300 milliseconds of margin** — **and at 1024 one of my two boards reset twice in forty hours and the other did not, which is the figure that decided me against it.**',
  '**What is on the forum already and does not work.** **Three answers suggest disabling the watchdog while the display redraws.** **It works and it means the watchdog is off for two-thirds of every loop**, which is the whole of what it was fitted for. **I would rather have a longer timeout than a watchdog that is asleep when the hang happens.**',
  '**What the datasheet says, and where it is silent.** **The datasheet gives the watchdog range and says nothing about the display refresh cost.** **The 600 to 900 figure is mine and nobody else has published it** — **so treat it as two boards and not as a specification.**',
  '**One thing about the previous thread on this.** **The answer that says 1024 is enough is right on revision two and wrong on revision three**, and the thread does not say which revision it was written for. **I have said so there as well.**',
  '**If this does not fix it.** **Post the loop timing with the display redraw forced, and the revision number from the silkscreen.** **Those two things will tell anybody reading whether it is this problem or a different one** — **and without them the thread will produce four guesses, which is what happened the first time I asked.**',
]));
out.push(item('1', 'Where is the fix, and what does he say about the alternative?'));
out.push(item('2', 'What has he not tested, and what follows for a reader who has that configuration?'));
out.push(item('3', 'What does he ask a reader to post if the fix does not work, and why?'));
out.push(writers([
  'An answer that reads as one of the room: **the fix, in the first sentence, with its line number** → **why it fails here and not elsewhere, with measurements** → **what you measured and what you did not** → **why you are not proposing the larger fix** → **what the datasheet says and where it is silent** → **a correction to the earlier thread** → **and what to post if it does not work.**',
  '⚠ **No opening formula at all.** **The first sentence is the fix.** **A reader on a forum has met _the problem is X and the fix is at line Y_ a thousand times** — **and has never met _kindly be informed that the problem has been solved_, which is the whole of why nobody tried the code.**',
  '**Give the measurement and its scope in the same clause.** ⚠ _On the two boards I have here, the loop takes between 600 and 900 milliseconds._ **Two boards is a scope and not an apology** — **and it is 9.3\'s boundary doing duty in four words.**',
  '**Say why you are not proposing the larger fix.** ⚠ _A reader who has a board resetting tonight wants the one line._ **This is the sentence that makes the answer usable by a reader in a hurry** — **and it is also the sentence that stops three people proposing the larger fix underneath you.**',
  '⚠ And **correct the earlier thread and say that you have.** _The answer that says 1024 is right on revision two and wrong on revision three._ **A forum answer that fixes the thread it is in and leaves the wrong one standing has helped one reader** — **and the sentence costs eleven words.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of an answer with no opening formula (120 words or more).'));
out.push(p('**______________** · _______________ · _______________ · **______________**   **The problem is ______________, and the fix is ______________.** **______________.**   **Why ______________ fails here and not ______________.** **______________.** **On ______________, ______________.** **______________.**   **What I have measured and what I have not.** **______________.** ⚠ **I have not ______________**, and anybody ______________ should expect ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'No opening formula; the first sentence is the answer',
  'The measurement and its scope in the same clause',
  'What you did not test, and what follows',
  'The reason the larger fix is not proposed',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their first sentence**, and the room says whether it has met that shape before.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole answer (260 words or more), to the shape in the writer\'s box: the fix, the reason, the scope, the larger fix refused, the silence in the documentation, the correction to the earlier thread, and what to post if it fails.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no opening formula, the measurement with its scope, the untested configuration named, and the larger fix refused with a reason.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an opening sentence aloud and the room counts the faces that react.** ⚠ **Four will and four will not, and both numbers are the finding.** **The four who react have tested the phrase; the four who do not share the writer\'s shape** — **and those are the phrases to mark and take to somebody outside this room.** Then the sentence the cycle ends on, which is Mr Attar\'s: **both replies were about the sentence.**'));
out.push(hw('Take **the last five formal messages you sent in English** and copy out **their opening and closing sentences.** ⚠ **Read all ten aloud to one person who is not in this class** and mark the ones that produce a pause. **Then write the equivalent of each marked sentence and count both lengths.** **In this class the equivalents have been about a quarter as long.** **Bring the ten sentences, the marks and the two counts.** **11.3 carries a hedge across a language and says when it cannot be done**, which is the group Mrs Oueidat called the hardest in 10.5.'));

// ===================== 11.3 =====================
out.push(pb());
out.push(h2('11.3  The hedge that will not cross'));
out.push(p('**Function:** carrying a hedge across a language, and saying when you cannot   ·   **Grammar:** the hedge that lives in English grammar · the covering line that replaces it   ·   **Pronunciation:** _may well_ said as one word'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a hedged sentence of yours, read aloud, and then the same sentence with the hedge removed.** ⚠ **Both versions, with nothing said between them.** Your teacher writes the ten pairs on the board. **In most classes three or four of the ten lose nothing when the hedge goes** — **and in the other six or seven the second version says something the writer would refuse to sign.**'));
out.push(board('The staffing may well explain the eight.', 'The staffing explains the eight.'));
out.push(p('**b**  Which two hedges have no grammar to live in elsewhere? **1** _It is possible that the staffing explains it._  **2** _The evidence is consistent with a staffing explanation._  **3** _The staffing may well explain it._  **4** _One would not expect the eight to cluster if staffing were the cause._  **5** _Nothing in the data excludes a staffing explanation._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about the hedges that live in grammar?   **A** they are untranslatable and must be avoided   **B** **they cannot be carried, so the hedge has to be moved out of the grammar and into a sentence of its own** — which any language can hold   **C** they are a matter of style'));
out.push(p('**b**  Listen again. **1** What did Dr Qabbani\'s paper say in translation, and what had he written?   **2** What does Mrs Oueidat say the covering line does?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.5  Where a hedge has nowhere to live', [
  ['Ms Huda', 'Dr Qabbani — the paper in two languages.'],
  ['Dr Qabbani', '⚠ **I had written that the night staffing _may well_ explain the eight.** **The version that was circulated said that the night staffing explains the eight.** **One phrase, and a conclusion I had refused to draw.**'],
  ['Mrs Tarabishi', 'Was it a bad translation?'],
  ['Mrs Oueidat', '⚠ **It was a good one.** **_May well_ is a hedge made of two grammatical words and it has no grammar to live in elsewhere** — **and a translator who renders it as _possibly_ has made the sentence weaker than it was, and one who drops it has made it stronger.** **There is no third option inside the sentence.**'],
  ['Mrs Khoury', '⚠ **Which is the finding and it has a repair.** **Move the hedge out of the grammar and into a sentence of its own.** _The night staffing explains the eight on one of two readings of the data. The other is that night admissions are sicker on arrival._ **Two sentences, and any language can hold both.**'],
  ['Dr Qabbani', 'That is longer.'],
  ['Mrs Khoury', '⚠ **Eleven words longer and it survives being read by anybody.** **A hedge in the grammar is cheap and fragile.** **A hedge in a sentence of its own is dearer and cannot be lost** — **and the arithmetic is the same as 9.3\'s: a boundary beside the claim rather than a mood over the document.**'],
  ['Mr Shihabi', 'Which hedges are the fragile ones?'],
  ['Mrs Oueidat', '⚠ **The ones made of grammar rather than of words.** _may well_ · _would not expect_ · _tends to_ · _is unlikely to_ · _appears to_ · **the conditional entire.** **_It is possible that_ and _nothing excludes_ are made of words and travel** — **which is why 9.1 and 9.2 are the two cycles whose sentences cross a border unchanged.**'],
  ['Mr Tayara', 'And the conditional? Nothing of mine survives without it.'],
  ['Mrs Oueidat', '⚠ **The conditional is the worst of them and it is the commonest.** _One would not expect the eight to cluster if staffing were the cause._ **Three grammatical hedges in one sentence, and a translator will produce either a prediction or an assertion.** **Written out, it is: _a staffing explanation predicts that the eight cluster where cover is thinnest. They do not._**'],
  ['Mrs Ajouz', 'That is 8.2.'],
  ['Mrs Khoury', '⚠ **It is exactly 8.2, and the class should notice what has happened.** **The repair for an untranslatable hedge is the same move as the repair for a difference of ground** — **describe the prediction instead of arguing the position.** **Two units, two problems, one sentence shape.**'],
  ['Mrs Rizk', 'And where the hedge is the whole point and cannot be written out?'],
  ['Mrs Oueidat', '⚠ **Then the covering line, and it goes to the reader and not into the document.** _The English original hedges this finding with a construction that has no equivalent in Arabic; the finding is offered as one of two readings and not as a conclusion._ **One line, outside the text** — **and a reader who has it stops reading the translation as a flat statement.**'],
  ['Jad', 'Does anybody actually write that line?'],
  ['Mrs Oueidat', '⚠ **I ask for it four or five times a year and receive it about twice.** **When I have it, the hearing goes differently** — **because I can read the line into the record, and a court that has heard it does not need me to decide anything.**'],
  ['Mr Zahreddine', 'I would rather write the two sentences than rely on anybody\'s line.'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is the committee that read the circulated version.** **Eleven people decided something on the strength of a conclusion I had refused to draw**, and I was in the room, and I did not know for four months — **because the version I read was mine and the version they read was not.**'],
]));
out.push(sp());
out.push(box('Language box – the hedge that will not cross', [
  '**The two kinds of hedge.** ⚠ **Made of words:** _it is possible that_ · _nothing excludes_ · _the evidence is consistent with_ · _we are unable to exclude_. **These travel.** **Made of grammar:** _may well_ · _tends to_ · _is unlikely to_ · _appears to_ · _would not expect_ · **the conditional entire.** **These do not.**',
  '**What happens to a grammatical hedge.** ⚠ **A translator has two choices inside the sentence and both are wrong.** **Render it and the sentence is weaker than you wrote; drop it and it is stronger.** **There is no third option** — **and the good translator and the bad one produce the same two errors.**',
  '**The repair: move the hedge out of the grammar and into a sentence of its own.** ⚠ _The night staffing explains the eight on one of two readings of the data. The other is that night admissions are sicker on arrival._ **Eleven words longer, and any language can hold both.**',
  '**And the repair is 8.2\'s repair.** ⚠ **Describe the prediction instead of arguing the position.** _A staffing explanation predicts that the eight cluster where cover is thinnest. They do not._ **Two units, two problems, one sentence shape** — **which is worth four minutes of anybody\'s attention.**',
  '**Where the hedge cannot be written out, the covering line.** ⚠ **It goes to the reader and not into the document.** _The English original hedges this finding with a construction that has no equivalent in Arabic; the finding is offered as one of two readings and not as a conclusion._ **One line, outside the text.**',
  '**Why it is worth asking for even though you will usually not get it.** ⚠ **Mrs Oueidat asks four or five times a year and receives it about twice** — **and when she has it she can read it into the record, and a court that has heard it does not need her to decide anything.**',
  '**The cost of not doing either.** ⚠ **Eleven people decided something on the strength of a conclusion Dr Qabbani had refused to draw.** **He was in the room and did not know for four months** — **because the version he read was his and the version they read was not.**',
  '**Pronunciation.** 🔊 **Track 11.6** **Say _may well_ as one word, with the stress on _may_ and none on _well_.** ⚠ **Said as two words it is heard as _may, and well…_**, which a listener takes as hesitation rather than as a degree. **One word, and then the sentence** — **and if you cannot say it as one word, the hedge is not in your grammar and should be written out instead.**',
  '**Practise:** Write the hedge out of the grammar. **1** _may well_  **2** the conditional  **3** _tends to_  **4** one where the hedge loses nothing and can simply go  **5** one where it cannot be written out — and write the covering line',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B says **whether the hedge is made of words or of grammar** and **writes it out of the grammar**, or says that it cannot be and gives the covering line. ⚠ **Two rows on each card have a hedge that loses nothing and can simply go.** **B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The night staffing may well explain the eight._', '_The frame would appear to be below specification._'],
  ['_⚠ The results were, in the main, broadly as expected._', '_⚠ The record has, to all intents and purposes, been maintained._'],
  ['_One would not expect the eight to cluster if staffing were the cause._', '_Uptake tends to be lower where no fixed clinic exists._'],
  ['_⚠ It is possible that the covering note explains the fall._', '_⚠ Nothing in the register excludes an uptake of sixty per cent._'],
  ['_The applicant is unlikely to have seen the amended sheet._', '_The second sample appears to carry diagnostic weight._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** words or grammar, and the written-out version. ⚠ **Rows 2 on both cards lose nothing when the hedge goes** — **_in the main_, _broadly_ and _to all intents and purposes_ are 10.4\'s padding and not hedges at all**, which is the distinction to insist on. **Rows 4 are made of words and travel unchanged.** **Rows 1, 3 and 5 are grammatical** — **and on row 5 of Card B the written-out version must name two readings, because _appears to_ hides a choice and not a doubt.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your ten pairs from Stage 1** and sort them: ⚠ **hedge made of words, hedge made of grammar, or padding that loses nothing.** **Then write the grammatical ones out into two sentences each.** **In this class the three groups have come out at about two, five and three** — **and the five are the ones that have been crossing borders as assertions.**'));
out.push(p('**b**  Swap. Your partner reads **your written-out versions** and says **whether they would sign the second sentence.** ⚠ **If they would not, the hedge has been written out wrongly** — **and the commonest fault is to write out the doubt and lose the claim**, which produces two sentences that say nothing instead of one that said something carefully.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani had written that the night staffing may well explain the eight, and the version that was circulated said that the night staffing explains the eight: one phrase, and a conclusion he had refused to draw. Mrs Tarabishi asked whether it was a bad translation, and Mrs Oueidat said it was a good one — may well is a hedge made of two grammatical words and it has no grammar to live in elsewhere, and a translator who renders it as possibly has made the sentence weaker than it was, and one who drops it has made it stronger, and there is no third option inside the sentence. Mrs Khoury said that is the finding and it has a repair: move the hedge out of the grammar and into a sentence of its own, and the night staffing explains the eight on one of two readings of the data, the other being that night admissions are sicker on arrival. Dr Qabbani said that is longer, and eleven words longer and it survives being read by anybody, because a hedge in the grammar is cheap and fragile and a hedge in a sentence of its own is dearer and cannot be lost. Mr Shihabi asked which hedges are the fragile ones, and the ones made of grammar rather than of words: may well, would not expect, tends to, is unlikely to, appears to, and the conditional entire. Mr Tayara said nothing of his survives without the conditional, and the conditional is the worst of them and the commonest. Mrs Ajouz said that is 8.2, and it is exactly 8.2: the repair for an untranslatable hedge is the same move as the repair for a difference of ground. Mrs Rizk asked about the case where the hedge cannot be written out, and then the covering line, which goes to the reader and not into the document. Mr Attar asked whether anybody actually writes that line, and Mrs Oueidat asks for it four or five times a year and receives it about twice. Mr Zahreddine said he would rather write the two sentences than rely on anybody\'s line, and Mrs Khoury said that is the right answer and the covering line is what you ask for when the document has already gone. And Dr Qabbani said the thing he will take away is the committee that read the circulated version: eleven people decided something on the strength of a conclusion he had refused to draw, and he was in the room, and he did not know for four months._'));
out.push(p('**Listener task:** write your three groups and your written-out versions.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the section Dr Qabbani rewrote for the version that is circulated in two languages. Answer the questions.'));
out.push(model([
  '**H. QABBANI** · _culture-negative admissions_ · _section 6: the eight, written to be read in two languages_ · **6 July**',
  '**This section carries no hedge that lives in grammar.** ⚠ **Every limit in it is a sentence**, because the version circulated to the committee is a translation and the earlier version lost a hedge on the way into it.',
  '**What is not in dispute.** **Eight of the ten admissions without a second sample presented between eight in the evening and eight in the morning.** **No member has questioned the figure and the arithmetic is at annexe 1.**',
  '**The two readings of it, each in its own sentence.** **On the first reading the eight are a staffing effect: at night there is one registrar, and a second sample is four minutes she has not got.** **On the second the eight are a severity effect: night admissions are sicker on arrival and a second sample is more often clinically unavailable than skipped.**',
  '**What each reading predicts, which is what the earlier version hedged instead of saying.** **A staffing explanation predicts that the omissions cluster on the nights with the thinnest cover.** **A severity explanation predicts that they do not, and that they track severity at presentation.** ⚠ **Two lines on the admissions sheet give both in about eighteen months.**',
  '**What this section does not say.** **It does not say which reading is right.** **I am not able to say, and no figure I hold distinguishes the two** — **and the earlier version of this section said _the night staffing may well explain the eight_, which was intended as one of two readings and was circulated as a conclusion.**',
  '**A third reading, which the earlier version did not mention and which one member raised.** **That the eight are an artefact of how the admission time is recorded: the clock on the admissions sheet is set by hand and two wards are known to run it late.** ⚠ **This reading predicts that the eight disappear when the times are taken from the laboratory system instead**, which can be checked for the whole three years in about a fortnight and has not been. **It is the cheapest of the three tests and the only one that could have been done before this paper was written.**',
  '**What both readings already agree about.** **That the eight are not a failure of attention.** **On either reading the registrar did the right thing with what she had**, and the committee can agree the two lines without agreeing about the eight.',
  '**One note on the wording of this section, for anybody translating it.** **There is no construction here that has to be rendered rather than carried.** ⚠ **Every degree of certainty is stated as a clause and not as a verb form** — **so there is nothing in this section that a translator has to decide about, and that is the only reason it has been rewritten.**',
  '**H. Qabbani** · _and the earlier version is at annexe 4 for comparison_',
]));
out.push(item('1', 'Why does the section carry no hedge that lives in grammar?'));
out.push(item('2', 'What did the earlier version say, and how was it read?'));
out.push(item('3', 'What does the note to the translator say?'));
out.push(writers([
  'A section written to be read in two languages: **say at the top that every limit is a sentence, and why** → **what is not in dispute** → **the two readings, each in its own sentence** → **what each predicts** → **what the section does not say, with the earlier version quoted** → **what both readings agree about** → **and a note to whoever translates it.**',
  '⚠ **Declare it at the top.** _This section carries no hedge that lives in grammar._ **A reader who is not told reads the flatness as confidence** — **and the whole point of the rewrite is that the flatness is the carefulness, moved from the verbs into the clauses.**',
  '**Give each reading its own sentence and its own prediction.** ⚠ _A staffing explanation predicts that the omissions cluster on the nights with the thinnest cover._ **Which is 8.2 arriving in a translated document** — **and a prediction is the one form of a hedge that no language can lose.**',
  '**Quote the earlier version.** ⚠ _The earlier version said "the night staffing may well explain the eight", which was intended as one of two readings and was circulated as a conclusion._ **This is the sentence that makes the rewrite believable**, and it costs the writer something, which is why it works.',
  '⚠ And **write the note to the translator into the document.** _There is nothing in this section that a translator has to decide about._ **It is a claim that can be checked and it invites checking** — **and a translator who finds it true will read the rest of the paper faster and with more trust than any covering letter could buy.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a section with no grammatical hedge in it (120 words or more).'));
out.push(p('**______________** · _______________ · _______________ · **______________**   **This section carries no hedge that lives in grammar.** ⚠ **Every limit in it is a sentence**, because ______________.   **What is not in dispute.** **______________.** **______________.**   **The two readings of it, each in its own sentence.** **On the first reading ______________.** **On the second ______________.**   **What each reading predicts.** **______________ predicts that ______________.** **______________ predicts that ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The absence of grammatical hedges declared at the top',
  'Each reading in its own sentence',
  'A prediction for each reading',
  'The earlier version quoted, with how it was read',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their two readings**, and the room says whether either could be dropped without the other changing meaning.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole section (260 words or more), to the shape in the writer\'s box: the declaration, the undisputed figure, the two readings, the two predictions, what the section does not say with the earlier version quoted, the shared half, and the note to the translator.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the declaration at the top, a sentence and a prediction for each reading, the earlier version quoted, and the note to the translator.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student says _may well_ twice: once as two words and once as one, with the stress on _may_.** ⚠ **The room says what each version sounded like.** **Said as two words it is heard as hesitation and not as a degree** — **and a writer who cannot say it as one word does not have the hedge in their grammar and should write it out.** Then the sentence the cycle ends on, which is Dr Qabbani\'s: **the version I read was mine and the version they read was not.**'));
out.push(hw('Take **a document of yours that has been or will be translated** and mark **every hedge in it.** ⚠ **Sort them into three groups: made of words, made of grammar, and padding.** **Write the grammatical ones out into two sentences each, and count the words added.** **In this class it has been between eight and fifteen words a hedge.** **Bring the three groups and the count.** **11.4 says what a translation added that the original did not have** — **and it is the cycle that needs both versions of something of yours, so bring them.**'));

// ===================== 11.4 =====================
out.push(pb());
out.push(h2('11.4  What the translation added'));
out.push(p('**Function:** saying what a translation added that the original did not have   ·   **Grammar:** the addition nobody intended: certainty, warmth or a threat   ·   **Pronunciation:** a neutral sentence read in three tones'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your two versions, read one after the other.** ⚠ **Nobody says which is which and nobody comments.** Your teacher writes on the board, for each pair, **one word: _stronger_, _warmer_, _harder_, or _same_.** **In most classes _same_ appears twice out of ten** — **and the other eight have had something added that nobody intended and nobody chose.**'));
out.push(board('The consignment has been released.', 'We are pleased to confirm the consignment has been released.'));
out.push(p('**b**  Which two have had something added? **1** _We are pleased to confirm that the consignment has been released._  **2** _The consignment has been released._  **3** _You are required to produce the certificate within eleven days._  **4** _The certificate is needed within eleven days._  **5** _The reading was 8.4 degrees._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Why does the room decide a translation adds rather than loses?   **A** translators are careless   **B** **because the other language may have no neutral form at that point** — so the rendering is marked for certainty, warmth or obligation, and the marking was never chosen by anybody   **C** because the original was unclear'));
out.push(p('**b**  Listen again. **1** What had been added to the letter Mrs Ajouz received, and what did she do about it?   **2** What does Mrs Oueidat say about the three things that get added?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.7  The three things that get added', [
  ['Ms Huda', 'Mrs Ajouz — the letter that was friendlier than it was meant to be.'],
  ['Mrs Ajouz', '⚠ **The inspectorate wrote four lines in Arabic and the English version I was sent began _we are pleased to confirm_.** **The Arabic says the consignment is released and says nothing about anybody being pleased.** **I replied as though I had been done a favour.**'],
  ['Mrs Tarabishi', 'Which cost nothing.'],
  ['Mrs Ajouz', '⚠ **It cost me the next letter.** **Three weeks later I had to challenge a reading and I had already written to them as somebody who was grateful** — **and a file that opens with gratitude is a file in which a challenge arrives as ingratitude.**'],
  ['Mrs Oueidat', '⚠ **And three things get added, in my experience, and only three.** **Certainty, warmth, and obligation.** **A hedge goes and the sentence is stronger; a neutral opening is rendered with a formula and the sentence is warmer; and a statement of need becomes a requirement.** **Nobody chooses any of the three.**'],
  ['Mrs Khoury', '⚠ **Because the other language has no neutral form at that point.** **English has a flat way of saying that a certificate is needed.** **Where a language has only _you are required_ and _if you would be so kind_, a translator must pick one** — **and both of them are marked, and the marking is now in your document.**'],
  ['Dr Qabbani', 'Obligation is the one that frightens me.'],
  ['Mrs Oueidat', '⚠ **It should.** _The certificate is needed within eleven days_ **becoming** _you are required to produce the certificate within eleven days_ **has turned an administrative fact into a direction** — **and a reader who receives a direction from somebody with no power to give one either complies or complains, and both are expensive.**'],
  ['Mr Tayara', 'My letters to parents are read in both languages.'],
  ['Mrs Khoury', '⚠ **And the first letter is the one to watch, because its whole design is to be unmarked.** **_Non-attendance triggers this letter_ is flat on purpose** — **and rendered into a language with no flat form it becomes either an accusation or an apology, and the school has written neither.**'],
  ['Mr Shihabi', 'Can you find it without both versions?'],
  ['Mrs Oueidat', '⚠ **Not reliably, and that is why the homework for this cycle is both versions.** **With one version you can guess where the risk is; with two you can count.** **Four of this room brought both and four of the eight pairs had something added.**'],
  ['Mrs Rizk', 'And what do I do about it? I cannot control the translation.'],
  ['Mrs Oueidat', '⚠ **You can write the sentence that has no unmarked rendering out of the document.** **Where English is doing something with flatness that another language cannot do, say the thing instead of being flat about it.** _The certificate is needed by 14 July. This is a statement of what the file needs and not a direction to anybody._ **Eighteen words, and nothing in it can be marked.**'],
  ['Jad', 'That sounds strange in English.'],
  ['Mrs Khoury', '⚠ **It is slightly strange in English and it is identical in four languages, and that is the trade.** **A document written for one reader should sound right.** **A document written for a reader you will never meet should be unmarkable** — **and the two are not the same document, which is the finding of the unit.**'],
  ['Mr Zahreddine', 'Mine go to three insurers and I have never seen a translated version of one.'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the reply I sent.** **I wrote four lines of thanks for a release that was nobody\'s favour**, and the file now contains them — **and the next letter in that file is mine, challenging a reading, and it reads like somebody who has changed their mind.**'],
]));
out.push(sp());
out.push(box('Language box – the three additions', [
  '**The three, and there are only three.** ⚠ **Certainty** — a hedge goes and the sentence is stronger. **Warmth** — a neutral opening is rendered with a formula and the sentence is friendlier. **Obligation** — a statement of need becomes a requirement. **Nobody chooses any of the three.**',
  '**Why a translation adds rather than loses.** ⚠ **The other language may have no neutral form at that point.** **Where it has only _you are required_ and _if you would be so kind_, a translator must pick one** — **and both are marked, and the marking is now in your document and carries your name.**',
  '**Obligation is the expensive one.** ⚠ _The certificate is needed within eleven days_ → _you are required to produce the certificate within eleven days._ **An administrative fact has become a direction** — **and a reader who receives a direction from somebody with no power to give one either complies or complains, and both cost.**',
  '**Warmth is the one that is not free either.** ⚠ **A file that opens with gratitude is a file in which a later challenge arrives as ingratitude.** **Mrs Ajouz thanked an inspectorate for a release that was nobody\'s favour** — **and the next letter in that file is her challenge, which now reads as a change of mind.**',
  '**You cannot control the translation and you can write the sentence out.** ⚠ **Where English is doing something with flatness that another language cannot do, say the thing instead of being flat about it.** _The certificate is needed by 14 July. This is a statement of what the file needs and not a direction to anybody._',
  '**And the trade, which has to be made knowingly.** ⚠ **That sentence is slightly strange in English and identical in four languages.** **A document for one reader should sound right.** **A document for a reader you will never meet should be unmarkable** — **and they are not the same document.**',
  '**Finding it needs both versions.** ⚠ **With one you can guess where the risk is; with two you can count.** **Four pairs in this room and something added in four of the eight** — **and nobody who brought only one version found anything at all.**',
  '**Pronunciation.** 🔊 **Track 11.8** **Read _the certificate is needed within eleven days_ three times: flat, then warmly, then as an instruction.** ⚠ **The words do not change.** **The room will hear three different letters** — **and that is what a translator is choosing between when the target language has no flat form, except that they are choosing with words and not with a voice.**',
  '**Practise:** Name what was added and write the unmarkable version. **1** certainty  **2** warmth  **3** obligation  **4** one where nothing was added  **5** one where English\'s flatness is doing the work — and say what to write instead',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the pair of versions from the card. B names **what was added** and writes **the unmarkable version of the original.** ⚠ **Two rows on each card have had nothing added.** **B must say so.** Change cards.'));
out.push(table(['Card A – original, then version', 'Card B – original, then version'], [
  ['_The consignment has been released._ · _We are pleased to confirm the release._', '_The certificate is needed within eleven days._ · _You are required to produce the certificate._'],
  ['_⚠ The reading was 8.4 degrees at 09:20._ · _The reading was 8.4 degrees at 09:20._', '_⚠ Nine of the eleven queries arose against a printed sheet._ · _Nine of eleven arose against a printed sheet._'],
  ['_The staffing may well explain the eight._ · _The staffing explains the eight._', '_The frame appears to be below specification._ · _The frame is below specification._'],
  ['_⚠ The 2019 circular gives a limit and no tolerance._ · _The 2019 circular gives a limit and no tolerance._', '_⚠ Four of the twelve certificates are missing._ · _Four of twelve certificates are missing._'],
  ['_Non-attendance triggers this letter._ · _We regret to inform you of your son\'s absence._', '_The file was returned._ · _We have been obliged to return the file._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** what was added, and the unmarkable version. ⚠ **Rows 2 and 4 on both cards have had nothing added** — **measurements, counts and dated documents arrive unmarked in every language, which is the fourth time this book has said so and the last.** **Rows 3 are certainty, rows 1 are warmth and rows 5 are both at once**: _we regret to inform you_ adds warmth and _we have been obliged_ adds obligation, and neither was in four flat words.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your two versions** and mark every sentence **_stronger_, _warmer_, _harder_ or _same_.** ⚠ **Count the _sames_.** **Then take the three worst and write the unmarkable version of each original.** **In this class the unmarkable versions have been about a third longer** — **and every one of them has had a sentence added saying what the first sentence is.**'));
out.push(p('**b**  Swap. Your partner reads **only your unmarkable versions** and says **whether they sound slightly strange.** ⚠ **If they do not, the sentence is probably still markable.** **The strangeness is the price and it has to be paid out loud**, so that nobody writes it believing it is good English and then quietly puts the flatness back.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The inspectorate wrote four lines in Arabic and the English version Mrs Ajouz was sent began we are pleased to confirm: the Arabic says the consignment is released and says nothing about anybody being pleased, and she replied as though she had been done a favour. Mrs Tarabishi said that cost nothing, and Mrs Ajouz said it cost her the next letter: three weeks later she had to challenge a reading, and she had already written to the same office as somebody grateful for something that had not been a favour, which is a position no file recovers from quickly — and a file that opens with gratitude is a file in which a challenge arrives as ingratitude. Mrs Oueidat said three things get added and only three: certainty, warmth and obligation, and nobody chooses any of the three. Mrs Khoury said that is because the other language has no neutral form at that point: where a language has only you are required and if you would be so kind, a translator must pick one, and both are marked, and the marking is now in your document. Dr Qabbani said obligation is the one that frightens him, and it should, because the certificate is needed within eleven days becoming you are required to produce the certificate has turned an administrative fact into a direction. Mr Tayara said his letters to parents are read in both languages, and the first letter is the one to watch because its whole design is to be unmarked. Mr Shihabi asked whether you can find it without both versions, and not reliably, which is why the homework for this cycle is both versions: with one you can guess where the risk is and with two you can count. Mrs Rizk said she cannot control the translation, and you can write the sentence that has no unmarked rendering out of the document. Mr Attar said that sounds strange in English, and Mrs Khoury said it is slightly strange in English and identical in four languages, and that is the trade. Mr Zahreddine said his go to three insurers and he has never seen a translated version of one, and Mrs Oueidat said that is the position almost everybody in the room is in, which is why the three additions go unnoticed for whole careers: nobody is shown the document the reader actually received. And Mrs Ajouz said the thing she will take away is the reply she sent: four lines of thanks for a release that was nobody\'s favour._'));
out.push(p('**Listener task:** write your four marks and your count of _sames_.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mrs Ajouz now writes to the inspectorate. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _to the inspectorate_ · _consignment 2026/411: what this letter is_ · **8 July**',
  '**This letter records three facts and asks for one thing.** ⚠ **It is not a complaint and it is not a request for a favour**, and it is written flatly on purpose, because it will be read in two languages and the flatness is the only part of it that does not survive translation.',
  '**The three facts.** **A reading of 8.4 degrees was recorded at 09:20 on 14 April and a reading of 4.1 degrees at 10:00.** **The day-book is the only record of either and this branch holds it.** **The probe\'s calibration certificate is dated 2022 and is held by the regional engineering office.**',
  '**What is asked.** **A copy of the calibration certificate, or the engineering office\'s confirmation of the probe\'s tolerance at the date of the reading.** **Either answers the question and neither requires a visit.**',
  '**What is not asked.** **Nothing is asked about the release of 2 May, which was correct and is not in question.** ⚠ **The release was not a favour and this letter does not thank anybody for it**, which is said here because an earlier letter from this branch did, and the thanks have made a later challenge look like a change of mind.',
  '**One note on the wording of this letter.** **Three sentences in it would be marked in translation if they were written in the ordinary way.** **_The certificate is needed_ becomes a requirement; _we would be grateful_ becomes a petition; and a hedge on the 8.4 would be lost entirely.** ⚠ **So this letter asks in one unmarked sentence, thanks nobody, and hedges nothing** — **and if it reads coldly in English, that is the cost and it has been paid deliberately.**',
  '**One further fact, which is given because it bears on the first three and not because it is in question.** **The cabinet at this branch is of the older pattern and its probe sits at the door.** ⚠ **The door is about a degree warmer than the shelf for the first four minutes after a delivery**, and the 09:20 reading was taken inside those four minutes. **The times of all twenty-two readings that month are on the enclosed page.**',
  '**What this branch has done in the meantime.** **The consignment is in the cabinet and has not been dispensed.** **It will remain there until either document arrives or until 31 July, whichever is the earlier**, and on 31 July it will be referred to the regional pharmacist with this letter attached.',
  '**And one thing for the inspectorate rather than for the file.** **The English versions of your letters are rendered by somebody who adds a formula at the opening.** ⚠ **Two of the four letters this branch has received this year began _we are pleased to confirm_, and the Arabic of neither said anything of the kind** — **which this branch mentions because it has twice replied to a courtesy that was not offered.**',
  '**N. Ajouz** · _second dispensary_ · _the day-book page is enclosed_',
]));
out.push(item('1', 'Why is the letter written flatly, and what does the writer say that costs?'));
out.push(item('2', 'What is expressly not asked, and why is that said?'));
out.push(item('3', 'What does she tell the inspectorate about its own English versions?'));
out.push(writers([
  'A letter written to survive translation: **say what the letter is and is not** → **the facts, each with its holder** → **what is asked, in one unmarked sentence** → **what is not asked, and why that is said** → **a note on the wording and what the flatness costs** → **what you have done in the meantime, with a date** → **and one thing for the reader rather than for the file.**',
  '⚠ **Say at the top that the flatness is deliberate.** _It is written flatly on purpose, because it will be read in two languages._ **A reader who is not told reads coldness as displeasure** — **and the one sentence that explains it is worth more than every softening you could have put in.**',
  '**Thank nobody for anything that was not a favour.** ⚠ _The release was not a favour and this letter does not thank anybody for it._ **Gratitude in a file is not free**: a later challenge from the same writer arrives as a change of mind, and the earlier thanks are quoted back.',
  '**Name the sentences that would be marked, and say how.** ⚠ _The certificate is needed becomes a requirement; we would be grateful becomes a petition._ **This is the paragraph that makes the whole letter legible to its reader** — **and it is the only place in Book 1 where a writer explains their own register to the person reading it.**',
  '⚠ And **put the date you will act on.** _Until either document arrives or until 31 July, whichever is the earlier._ **A flat letter with no date in it is read as patience.** **A flat letter with a date is read as a process** — **and a process gets an answer.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter written to survive translation (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **This letter records ______________ and asks for ______________.** ⚠ **It is not ______________ and it is not ______________**, and it is written flatly on purpose, because ______________.   **The ______________ facts.** **______________.** **______________.** **______________.**   **What is asked.** **______________.** **Either ______________ and neither ______________.**   **What is not asked.** **Nothing is asked about ______________.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The flatness declared as deliberate, with the reason',
  'Nothing thanked for that was not a favour',
  'The sentences that would be marked, named with how',
  'A date on which you will act',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their asking sentence**, and the room says whether it could be rendered as a requirement.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: what it is and is not, the facts with their holders, the ask, what is not asked, the note on wording, what you have done and by when, and one thing for the reader.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the flatness declared, no thanks for a non-favour, the markable sentences named, and a date to act on.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads _the certificate is needed within eleven days_ three times: flat, warmly, and as an instruction.** ⚠ **The words do not change and the room hears three different letters.** **That is what a translator chooses between when the target language has no flat form** — **except that they choose with words, and the choice is then in your document under your name.** Then the sentence the cycle ends on, which is Mrs Ajouz\'s: **four lines of thanks for a release that was nobody\'s favour.**'));
out.push(hw('Take **both versions of something of yours** and mark every sentence **_stronger_, _warmer_, _harder_ or _same_.** ⚠ **Count the four groups.** **Then write the unmarkable version of the three worst originals, and give all three to somebody who will say whether they sound strange.** **They will.** **Bring the four counts, the three versions and what your reader said.** **11.5 mediates a document whose form, and not whose content, is the problem** — **which is the half of this work that no amount of good writing can touch.**'));

// ===================== 11.5 =====================
out.push(pb());
out.push(h2('11.5  The form with no field for it'));
out.push(p('**Function:** mediating a document whose form, and not whose content, is the problem   ·   **Grammar:** the form with no field for the thing being asked   ·   **Pronunciation:** reading a field heading aloud and hearing what it assumes'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **a field or a box on a form you fill in that does not fit what you have to put in it.** ⚠ **The heading of the field, word for word, and then what you actually have.** Your teacher writes the ten headings on the board. **In most classes eight of the ten are a field that assumes one of something** — **one date, one reference, one reason, one decision — where the thing being recorded has two.**'));
out.push(board('Date of qualification:', 'Awarded in two stages, 2019 and 2021.'));
out.push(p('**b**  Which two are problems of form rather than of content? **1** _The applicant\'s English is not good enough for the course._  **2** _The form has one box for a reference and the system produces two different documents._  **3** _The report\'s conclusion is not supported by its figures._  **4** _The word "excursion" is used in two senses in the file._  **5** _The field headed "date of qualification" allows one date and the qualification was awarded in two stages._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide about a form with no field for the thing?   **A** the form should be changed   **B** **it cannot be changed and the writer has to put the second thing somewhere a reader will meet it** — which is not the box and not a footnote   **C** the thing should be left out'));
out.push(p('**b**  Listen again. **1** What did Mr Tayara\'s school write in the box, and what happened?   **2** What does Mrs Oueidat say about where the second thing goes?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.9  One box, two things', [
  ['Ms Huda', 'Mr Tayara — the box with one date in it.'],
  ['Mr Tayara', '⚠ **_Date of qualification._** **One line, and our certificate is awarded in two stages: the written papers in one year and the practical in the next.** **We put the later date, which is what the ministry does.**'],
  ['Mrs Tarabishi', 'And the university?'],
  ['Mr Tayara', '⚠ **Read it as a two-year gap in his education and asked what he had been doing.** **Nothing we wrote was wrong.** **The form had one line and the thing has two dates, and the box took the one it could hold.**'],
  ['Mrs Oueidat', '⚠ **Which is the commonest kind of problem in this work and the one nobody prepares for.** **It is not a problem of content and no amount of good writing touches it.** **The form cannot be changed, you are not going to be asked, and the second thing has to go somewhere a reader will actually meet it.**'],
  ['Mrs Khoury', '⚠ **And that is not the box and not a footnote.** **Three places work: the covering letter\'s first paragraph, a sentence inside an adjacent free-text field, or a separate sheet that the box itself points to.** _See attached note_ **in the box, and the note on top of the bundle.**'],
  ['Mrs Ajouz', 'Our forms have a field headed _Reason for return_ and one line.'],
  ['Mrs Oueidat', '⚠ **And a file is almost always returned for two reasons, which is 8.4 arriving as a stationery problem.** **One line and two reasons means the second reason is never written down anywhere** — **and the applicant repairs the one they were given and comes back.**'],
  ['Dr Qabbani', 'Our drug chart has one box for the decision and the decision has a time.'],
  ['Mrs Khoury', '⚠ **Then the time goes in the box with the decision, in four characters, and the room should notice what has just happened.** **A field heading is a sentence somebody wrote about what they expected** — **and reading it aloud tells you what it assumes.** _Date of qualification_ **assumes one date.** _Reason for return_ **assumes one reason.**'],
  ['Mr Shihabi', 'Our copy-filing system has one field for a source.'],
  ['Mrs Khoury', '⚠ **And every story has two or none.** **I filled that field for six years with the first source I spoke to** — **and the archive now says that about nine hundred stories came from one person each, which is not true of any of them.**'],
  ['Mrs Rizk', 'What do I do when the form is a donor\'s and cannot be touched?'],
  ['Mrs Oueidat', '⚠ **Write in the box what the box can hold, and point.** _Three districts; see covering note, paragraph 2._ **Six words in a field designed for three** — **and nobody has ever rejected a form for pointing out of it, in my experience, where a great many have been returned for a box that answered half a question.**'],
  ['Jad', 'And a web form with a character limit?'],
  ['Mr Tayara', '⚠ **The hardest case, because you cannot point.** **Then the shortest true thing goes in the box and the whole of it goes in the first field that has room** — **and if there is no such field, in the first sentence of whatever the form sends with it.** **A character limit is somebody\'s assumption with a number on it.**'],
  ['Mr Zahreddine', 'My opinions are not on forms.'],
  ['Mr Tayara', '🔊 ⚠ **And the thing I shall take away is that the box was answered correctly.** **We wrote the date the ministry writes, and the university asked a reasonable question about a gap that was not a gap** — **and the only person in the whole exchange who could have prevented it was me, with eleven words in a covering letter nobody had asked me for.**'],
]));
out.push(sp());
out.push(box('Language box – the form that cannot hold it', [
  '**What kind of problem this is.** ⚠ **Not a problem of content, and no amount of good writing touches it.** **The form cannot be changed, you will not be asked, and the second thing has to go somewhere a reader will meet it** — **which is not the box and not a footnote.**',
  '**Read the field heading aloud and hear what it assumes.** ⚠ _Date of qualification_ **assumes one date.** _Reason for return_ **assumes one reason.** _Source_ **assumes one source.** **A heading is a sentence somebody wrote about what they expected**, and most of them expected one of something.',
  '**The three places that work.** ⚠ **The covering letter\'s first paragraph.** **A sentence inside an adjacent free-text field.** **A separate sheet that the box itself points to** — _see attached note_ **in the box, and the note on top of the bundle.**',
  '**Writing in the box and pointing out of it.** ⚠ _Three districts; see covering note, paragraph 2._ **Six words in a field designed for three.** **Nobody has ever rejected a form for pointing out of it** — **and a great many have been returned for a box that answered half a question.**',
  '**The hardest case is a character limit, because you cannot point.** ⚠ **The shortest true thing goes in the box and the whole of it goes in the first field that has room.** **If no field has room, it goes in the first sentence of whatever the form sends with it.** **A character limit is somebody\'s assumption with a number on it.**',
  '**And the thing to notice about the boxes you have been filling for years.** ⚠ **Mr Shihabi filled a one-source field with the first source he spoke to for six years.** **The archive now says nine hundred stories had one source each**, which is not true of any of them — **and nothing in the system records that it is not.**',
  '**Pronunciation.** 🔊 **Track 11.10** **Read three field headings aloud, slowly, and say after each what it assumes.** ⚠ **The assumption is audible and is almost never visible.** **_Date of qualification_ · one date.** **_Reason for return_ · one reason.** **_Name of referee_ · one person, who knows you, and who exists.**',
  '**Practise:** Name the assumption and say where the second thing goes. **1** one date, two stages  **2** one reason, two readers  **3** one source, two people  **4** one referee, no such role  **5** a character limit — and say what goes in the box',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the field heading and what the student actually has. B names **the assumption** and says **which of the three places the second thing goes**, with the words for the box. ⚠ **Two rows on each card are fields that fit perfectly well.** **B must say so.** Change cards.'));
out.push(table(['Card A – heading, then what you have', 'Card B – heading, then what you have'], [
  ['_Date of qualification._ · _Awarded in two stages, 2019 and 2021._', '_Name of referee._ · _No form tutor exists; a subject teacher of three years._'],
  ['_⚠ Date of birth._ · _14 March 1998._', '_⚠ Governorate._ · _Hama._'],
  ['_Reason for return._ · _An uncheckable sentence and a missing date._', '_Source._ · _Two offices, neither of which would be named._'],
  ['_⚠ Number of districts._ · _Three._', '_⚠ Reading, degrees Celsius._ · _8.4._'],
  ['_Reason for discontinuation._ · _A decision taken at 02:40 by the night registrar._', '_Uptake, per cent._ · _No figure exists and the register cannot produce one._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the assumption, the place, and the words for the box. ⚠ **Rows 2 and 4 on both cards fit perfectly well** — **a date of birth, a governorate, a count and a measurement are each one of one thing**, which are the four kinds of fact that travel across languages. **Rows 5 are hardest**: a decision with a time goes in the box entire, and a field wanting a figure that does not exist takes _none; see note 3_ **and not a nought.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your field heading from Stage 1** and write **the assumption it makes, in the form _this heading assumes…_** ⚠ **Then write the words for the box and the sentence for the place the box points to.** **The box words are usually between four and eight and the sentence is about twenty.** **Count both.**'));
out.push(p('**b**  Swap. Your partner reads **only your box words** and says **whether they would look for the note.** ⚠ **If they would not, the pointing has failed.** **_See attached_ is not enough** — **the box has to say what is attached, in two words, or a reader files the bundle and reads the top sheet later or never.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The box said date of qualification, one line, and Mr Tayara\'s certificate is awarded in two stages: the written papers in one year and the practical in the next, and the school put the later date, which is what the ministry does. Mrs Tarabishi asked about the university, and it read the entry as a two-year gap in his education and asked what he had been doing: nothing the school wrote was wrong, and the form had one line and the thing has two dates. Mrs Oueidat said that is the commonest kind of problem in this work and the one nobody prepares for — it is not a problem of content, no amount of good writing touches it, the form cannot be changed, you are not going to be asked, and the second thing has to go somewhere a reader will actually meet it. Mrs Khoury said that is not the box and not a footnote, and three places work: the covering letter\'s first paragraph, a sentence inside an adjacent free-text field, or a separate sheet that the box itself points to. Mrs Ajouz said their forms have a field headed Reason for return with one line, and a file is almost always returned for two reasons, which is 8.4 arriving as a stationery problem. Dr Qabbani said their drug chart has one box for a decision and the decision has a time, and then the time goes in the box with the decision, in four characters. Mrs Khoury said a field heading is a sentence somebody wrote about what they expected, and reading it aloud tells you what it assumes. Mr Shihabi said their filing system has one field for a source, and every story has two or none, and the archive now says about nine hundred stories came from one person each, which is not true of any of them. Mrs Rizk asked what to do when the form is a donor\'s, and write in the box what the box can hold, and point. Mr Attar asked about a character limit, and that is the hardest case because you cannot point. Mr Zahreddine said his opinions are not on forms, and Mrs Khoury said the insurer\'s claim summary is a form and he has been filling in somebody\'s one-cause field for twenty years. And Mr Tayara said the thing he will take away is that the box was answered correctly: the only person who could have prevented it was him, with eleven words in a covering letter nobody had asked him for._'));
out.push(p('**Listener task:** write the assumption, the box words and the sentence.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering letter Mr Tayara now sends with every application form. Answer the questions.'));
out.push(model([
  '**M. TAYARA** · _to the admissions office_ · _application of A. Haddad: four entries on the form that need a sentence each_ · **10 July**',
  '**This letter is about the form and not about the applicant.** ⚠ **Four of its fields assume one of something where the Syrian system produces two, or none**, and this letter gives the second thing in each case. **Nothing in it contradicts anything in the boxes.**',
  '**Field 7, _date of qualification_: the form allows one date and the certificate is awarded in two stages.** **The written papers were taken in June 2019 and the practical in May 2021.** **The box gives 2021, which is the date the ministry records.** ⚠ **It is not a two-year gap in the applicant\'s education**, and the enclosed transcript shows attendance in both years.',
  '**Field 11, _name of referee_: the form assumes a teacher who knows the pupil personally and whose role is to know them.** **There is no such role in a Syrian secondary school.** **The referee named is the teacher who taught the applicant mathematics for three years and set both internal examinations**, which is the closest the system holds.',
  '**Field 14, _predicted grade_: the system produces none.** **Marks are recorded after examination and are never forecast.** **The box reads _none; see letter_** — **and the three figures in the transcript are actual marks with the dates of the examinations that produced them.**',
  '**Field 19, _reason for any interruption of study_: the form allows one line and there were two interruptions of different kinds.** **The school was closed for eleven months in 2020 by ministerial order, which affected every pupil in the governorate.** **The applicant was also absent for three weeks in March 2021.** ⚠ **The first is at annexe C with the ministry\'s dates; the second is at annexe D with a medical certificate.**',
  '**Field 22, _highest qualification of parent or guardian_: the form allows one entry and the applicant\'s file holds none.** **No Syrian secondary school records it and no pupil is asked.** **The box is left blank rather than filled with a guess**, and the blank is deliberate: ⚠ **an office that reads a blank as an omission may write and ask, and an office that reads a guess as a fact cannot.**',
  '**What this letter does not do.** **It does not say what any of these things is equivalent to in your own system.** **I do not know that system**, and a guess from here would be harder to undo than the absence.',
  '**Why the letter exists at all, which may be useful to your office.** **Last year an applicant from this school answered field 7 exactly as this one has, with no letter.** ⚠ **The entry was read as a two-year gap and the applicant was asked about it, and the exchange took five weeks** — **and the eleven words that would have prevented it are the second sentence of the paragraph above.**',
  '**M. Tayara** · _headmaster_ · _four annexes, lettered A to D, and a transcript_',
]));
out.push(item('1', 'What does the letter say it is about, and how many fields does it cover?'));
out.push(item('2', 'What goes in field 14\'s box, and what stands in place of the thing asked for?'));
out.push(item('3', 'Why does the letter exist, and what did its absence cost last year?'));
out.push(writers([
  'A covering letter about a form: **say that the letter is about the form and not about the person** → **the number of fields that assume one of something** → **each field by number, with its assumption named** → **what the box says, and the second thing** → **what the letter does not do** → **and why the letter exists, with what its absence cost.**',
  '⚠ **Name the field by number and quote its heading.** _Field 7, date of qualification._ **An admissions officer with four hundred applications does not read a letter and then find the box** — **they read the box and then look for the paragraph, and the number is what they look for.**',
  '**Name the assumption before giving the second thing.** ⚠ _The form assumes a teacher who knows the pupil personally and whose role is to know them._ **A letter that gives the substitute without naming the assumption reads as an excuse** — **and 11.1\'s whole method is that the absence is stated first.**',
  '**Put the pointer in the box and say so in the letter.** ⚠ _The box reads none; see letter._ **A box with nothing in it is read as an omission and a box with a nought in it is read as a figure** — **and the three words in the box are what make the letter get read at all.**',
  '⚠ And **say what the absence of the letter cost, with a figure.** _The exchange took five weeks._ **An admissions office that is told this will keep the letter on file** — **and the figure costs the writer nothing, because the five weeks were not the office\'s fault and the letter says so by not saying otherwise.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a covering letter about a form (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **This letter is about the form and not about ______________.** ⚠ **______________ of its fields assume one of something where ______________ produces two, or none.** **Nothing in it contradicts anything in the boxes.**   **Field ___, _______________: the form allows ______________ and ______________.** **______________.** **The box gives ______________.** ⚠ **______________.**   **Field ___, _______________: the form assumes ______________.** **There is no such ______________.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The letter declared to be about the form',
  'Each field named by number and heading',
  'The assumption named before the second thing',
  'A pointer in the box, quoted in the letter',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **their box words**, and the room says whether it would look for the letter.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the declaration, the count of fields, each field with its assumption and its second thing, what the letter does not do, and why it exists.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the letter about the form, fields by number, assumptions named first, and a pointer in every box.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads three field headings aloud, slowly, and says after each what it assumes.** ⚠ **The room checks each assumption against the heading.** **_Name of referee_ assumes one person, who knows you, and who exists** — **three assumptions in three words, and all three are audible and none is visible.** Then the sentence the cycle ends on, which is Mr Tayara\'s: **the only person who could have prevented it was me.**'));
out.push(hw('Take **the form you fill in most often** and read **every field heading aloud**, writing after each one what it assumes. ⚠ **Mark the fields where your own thing has two of something, or none.** **Then write the box words and the sentence for each marked field.** **In this class a form of twenty fields has produced between three and seven marks.** **Bring the headings, the assumptions and the marks.** **11.6 writes the covering note that makes an untranslatable document usable** — **and it is the genre this unit has been building towards since 11.1.**'));

// ===================== 11.6 =====================
out.push(h2('11.6  The covering note that makes it usable'));
out.push(p('**Function:** writing the covering note that makes an untranslatable document usable   ·   **Grammar:** 260–300 words · three absences named · one instruction to the reader   ·   **Pronunciation:** an instruction to a reader given without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the covering note or email you last sent with a document, read aloud.** ⚠ **The whole of it, however short.** Your teacher writes the length of each on the board, in words. **In most classes seven or eight of the ten are under forty words and contain nothing but a greeting and the word _attached_** — **and every one of those seven accompanied a document that needed three sentences it did not get.**'));
out.push(board('Please find attached the application. Kind regards.', 'Three things in it have no equivalent here. Read 4 before 2.'));
out.push(p('**b**  Which two belong in a covering note? **1** _The document is attached for your kind consideration._  **2** _We trust this will be satisfactory._  **3** _There is no equivalent of a grants panel in this system: two readers assess each application separately and do not meet._  **4** _Please contact us should you require anything further._  **5** _Read paragraph 4 before paragraph 2: the figures in 2 are the ones paragraph 4 says cannot be compared._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a covering note is for?   **A** politeness   **B** **the three absences and one instruction about how to read the document** — which is work the document itself cannot do for a reader in another system   **C** summarising the document'));
out.push(p('**b**  Listen again. **1** What did Mrs Rizk\'s forty-word covering email cost, and what is in the note now?   **2** What does Mrs Khoury say about the instruction to the reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.11  Three absences and one instruction', [
  ['Ms Huda', 'Mrs Rizk — the email of forty words.'],
  ['Mrs Rizk', '⚠ **_Dear colleagues, please find attached our application for the three districts. We look forward to hearing from you._** **Thirty-one words.** **The application had four things in it with no equivalent in the donor\'s system and I had written none of them down.**'],
  ['Mrs Tarabishi', 'And the donor read it cold.'],
  ['Mrs Rizk', '⚠ **Cold, and supplied four things from their own world.** **They read _governorate_ as a province with a budget, _fixed clinic_ as a building with staff, and _two comparable projects_ as projects comparable to this one** — **which they are not: they were comparable to each other.**'],
  ['Mrs Khoury', '⚠ **And this is the genre the whole unit has been building towards.** **Three absences and one instruction.** **Not a summary — the document summarises itself — and not politeness, which costs words and buys nothing from a reader who has four hundred applications.**'],
  ['Mrs Oueidat', '⚠ **The instruction is the part nobody writes and it is the part I would keep if I could keep only one.** _Read paragraph 4 before paragraph 2._ **Twenty-eight characters, and it stops a reader forming a view from figures that the document itself refuses to compare.**'],
  ['Dr Qabbani', 'Is an instruction to a reader not presumptuous?'],
  ['Mrs Khoury', '⚠ **It is presumptuous when it is about what to think and useful when it is about the order.** _Read 4 before 2_ **is about the order.** _Please note that our figures are robust_ **is about what to think, and that is the sentence nobody may write** — **which is the whole distinction and it takes four seconds to apply.**'],
  ['Mr Tayara', 'How long should the note be?'],
  ['Mrs Rizk', '⚠ **Between two hundred and sixty and three hundred words.** **Three absences at about sixty words each, one instruction, and one sentence saying what the note is.** **Shorter than that and an absence has been left out** — **and longer and it has become a summary, which the reader will then read instead of the document.**'],
  ['Mrs Ajouz', 'Three is a strange number to insist on.'],
  ['Mrs Oueidat', '⚠ **Three is what a reader will carry.** **I have sent notes with seven absences in them and watched a court use two.** **The three to choose are the ones where a reader will supply something confidently** — **not the three largest, and not the three hardest to explain.**'],
  ['Mr Shihabi', 'So you leave the fourth absence out.'],
  ['Mrs Rizk', '⚠ **You leave it out of the note and put it in the document, at the place where it arises.** **Which is 11.1\'s third column.** **The note carries the three that cannot wait and the document carries the rest** — **and nothing is left unwritten anywhere.**'],
  ['Jad', 'And if the document is somebody else\'s?'],
  ['Mrs Khoury', '⚠ **Then the note is the only thing you control and it is worth four times what it would be worth otherwise.** **Mrs Oueidat\'s covering lines are exactly this: somebody else\'s document, three absences, one instruction** — **and she is not permitted to touch a word of the thing she is covering.**'],
  ['Mr Zahreddine', 'Mine are opinions and they carry their own.'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the two comparable projects.** **I wrote _two comparable projects_ and meant comparable to each other**, and the donor read it as comparable to this one and asked why the uptake figures were not attached — **and there are no uptake figures, and the question took eleven weeks to answer with a sentence I could have written in the covering email.**'],
]));
out.push(sp());
out.push(box('Language box – the covering note', [
  '**What it is for.** ⚠ **Three absences and one instruction.** **Not a summary — the document summarises itself — and not politeness, which costs words and buys nothing from a reader with four hundred applications.**',
  '**The length, and it is the genre\'s own.** ⚠ **Two hundred and sixty to three hundred words.** **Three absences at about sixty words each, one instruction, and one sentence saying what the note is.** **Shorter and an absence has been left out; longer and it has become a summary the reader will read instead of the document.**',
  '**Why three.** ⚠ **Three is what a reader will carry.** **A note with seven absences in it produces a court that uses two.** **The three to choose are the ones where a reader will supply something confidently** — **not the three largest and not the three hardest to explain.**',
  '**The fourth absence is not left unwritten.** ⚠ **It goes into the document at the place where it arises**, which is 11.1\'s third column. **The note carries what cannot wait and the document carries the rest.**',
  '**The instruction, which is the part nobody writes.** ⚠ _Read paragraph 4 before paragraph 2._ **Twenty-eight characters, and it stops a reader forming a view from figures the document itself refuses to compare.**',
  '**And the line between an instruction and a presumption.** ⚠ **An instruction about the order is useful.** **An instruction about what to think is not permitted.** _Read 4 before 2_ **against** _please note that our figures are robust_ — **and the test takes four seconds.**',
  '**Where the document is somebody else\'s, the note is all you have.** ⚠ **Mrs Oueidat\'s covering lines are this genre exactly**: somebody else\'s document, three absences, one instruction, and not a word of the thing itself to be touched. **The note is then worth four times what it is worth otherwise.**',
  '**Pronunciation.** 🔊 **Track 11.12** **Read your instruction aloud with no apology in the voice.** ⚠ _Read paragraph 4 before paragraph 2._ **A rise at the end turns it into a request and a reader may decline a request.** **Fall, and stop** — **and do not add _if you would_, which is four words and gives the order back.**',
  '**Practise:** Write the absence and the instruction. **1** a role with no equivalent  **2** a word read differently  **3** a figure that cannot be compared  **4** the instruction about the order  **5** one where the instruction would be about what to think — and say why it may not be written',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the item from the card. B says **whether it belongs in the note or in the document**, and writes it. ⚠ **Two rows on each card are instructions about what to think.** **B must refuse them and say why.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_There is no grants panel; two readers assess separately and do not meet._', '_There is no form tutor; the referee taught the subject for three years._'],
  ['_⚠ Our figures are robust and may be relied upon._', '_⚠ We trust the committee will find the application satisfactory._'],
  ['_Read paragraph 4 before paragraph 2._', '_Read annexe C before field 19._'],
  ['_⚠ The uptake projection is conservative._', '_⚠ The applicant is an exceptional candidate._'],
  ['_The two comparable projects are comparable to each other and not to this one._', '_The grading scale runs to 240 and the pass mark is 120._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** note or document, and the refusals. ⚠ **Rows 2 and 4 on both cards are instructions about what to think and may not be written** — **_robust_, _satisfactory_, _conservative_ and _exceptional_ are four readings asked for and none of them is an absence.** **Rows 5 are the ones to praise**: both are absences stated as facts about the writer\'s own system, and both prevent a confident supply.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your three columns from 11.1** and choose **the three absences for the note.** ⚠ **The three where a reader will supply something confidently** — **not the largest and not the hardest.** **Then write the one instruction about the order.** **In this class the instruction has been between six and fourteen words every time.**'));
out.push(p('**b**  Swap. Your partner reads **only your instruction** and says **whether it is about the order or about what to think.** ⚠ **About a third of first attempts are about what to think**, and the giveaway is an adjective: _carefully_, _properly_, _in context_. **An instruction about the order has a number in it.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk\'s email ran to thirty-one words: dear colleagues, please find attached our application for the three districts, we look forward to hearing from you. The application had four things in it with no equivalent in the donor\'s system and she had written none of them down. Mrs Tarabishi said the donor read it cold, and cold, and supplied four things from their own world: they read governorate as a province with a budget, fixed clinic as a building with staff, and two comparable projects as projects comparable to this one, which they are not, because they were comparable to each other. Mrs Khoury said this is the genre the whole unit has been building towards — three absences and one instruction, not a summary, because the document summarises itself, and not politeness, which costs words and buys nothing from a reader with four hundred applications. Mrs Oueidat said the instruction is the part nobody writes and the part she would keep if she could keep only one: read paragraph 4 before paragraph 2, twenty-eight characters. Dr Qabbani asked whether an instruction to a reader is not presumptuous, and it is presumptuous when it is about what to think and useful when it is about the order. Mr Tayara asked how long the note should be, and between two hundred and sixty and three hundred words. Mrs Ajouz said three is a strange number to insist on, and Mrs Oueidat said three is what a reader will carry: she has sent notes with seven absences and watched a court use two. Mr Shihabi said so you leave the fourth absence out, and you leave it out of the note and put it in the document at the place where it arises. Mr Attar asked what happens if the document is somebody else\'s, and then the note is the only thing you control. Mr Zahreddine said his are opinions and carry their own, and Mrs Khoury said the covering letter to the insurer is the note and he writes three lines of it, and the three lines are a greeting, an enclosure and a signature, which is the thirty-one words of Mrs Rizk\'s email with a different letterhead on it, and the room should notice that he has been doing without the genre for twenty years and not once been told so. And Mrs Rizk said the thing she will take away is the two comparable projects: she meant comparable to each other and the donor read them as comparable to this one, and the question took eleven weeks to answer with a sentence she could have written in the covering email._'));
out.push(p('**Listener task:** write your three absences and your one instruction.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the covering note Mrs Rizk now sends with every application. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _to the programme office_ · _covering note to application 2026/041_ · **12 July**',
  '**This note is not a summary of the application and does not repeat anything in it.** ⚠ **It names three things in the application that have no equivalent in your own system, and gives one instruction about the order of reading.**',
  '**One: _governorate_.** **A Syrian governorate is an administrative division with a health office and no budget of its own.** **It does not commission services and it cannot co-fund.** ⚠ **A reader who takes it as a province with a budget will ask what the governorate is contributing**, and the answer is that it contributes the clinics and the staff it already runs, which is at paragraph 6, and nothing in cash.',
  '**Two: _fixed clinic_.** **A fixed clinic in this governorate is a building open two or three days a week, staffed from a rota that covers four buildings.** **It is not a permanently staffed facility.** **Three districts having no fixed clinic therefore means that no building in them opens at all**, and not that a building is understaffed — **which changes what a mobile service is being compared with.**',
  '**Three: _two comparable projects_.** **The two projects named at paragraph 9 are comparable to each other and not to this one.** ⚠ **Both were run in districts that already had a fixed clinic.** **They are offered as evidence that this office can run and account for a mobile service, and not as evidence of what uptake would be** — **and there are no uptake figures for a district with no clinic, which is said at paragraph 11.**',
  '**The instruction.** **Read paragraph 11 before paragraph 9.** **Paragraph 11 says that nothing in the 2024 register excludes an uptake of ten per cent or of sixty.** **Paragraph 9 gives the two projects\' figures** — **and a reader who meets 9 first will carry those figures into 11 and read the refusal as modesty.**',
  '**What is not in this note and is in the application.** **A fourth thing has no equivalent: the grading of districts by access, which is done differently here.** **It is explained at paragraph 4 where it arises**, because it does not change how anything else is read and three is what a note can carry.',
  '**One matter of form rather than of content.** **Your application template has one field for a co-funding contribution and this office has none in cash to enter.** **The field reads _in kind: clinics and rota staff already running; see paragraph 6_** — **nine words in a field designed for a figure** — ⚠ **and it is written that way because a blank in that field has twice been read as an omission and once as a nought.**',
  '**The length of this note, because it is the genre\'s own and not a convenience.** **Two hundred and ninety-four words to this point.** ⚠ **Three absences at about sixty words each, the instruction and its reason at thirty, and the rest the two sentences saying what the note is and what it leaves out.**',
  '**And why this note exists.** **The first version of this application was sent with a covering email of thirty-one words.** ⚠ **The office asked why the uptake figures for the two comparable projects were not attached.** **There are none, and the question took eleven weeks** — **and the answer is the third paragraph above.**',
]));
out.push(item('1', 'What does the note say it is not, and what does it do instead?'));
out.push(item('2', 'What is the instruction, and what would a reader do without it?'));
out.push(item('3', 'What is the fourth absence, and where is it dealt with?'));
out.push(writers([
  'A covering note of 260 to 300 words: **say what the note is not** → **three absences, about sixty words each, each with what a reader would supply** → **one instruction about the order, with the reason** → **the fourth absence and where it is dealt with instead** → **and why the note exists, with what its absence cost.**',
  '⚠ **Say what the note is not, first.** _This note is not a summary of the application and does not repeat anything in it._ **A reader who thinks it is a summary reads it instead of the document** — **which is the one failure mode of the genre and it costs you the whole application.**',
  '**Give each absence what a reader would supply.** ⚠ _A reader who takes it as a province with a budget will ask what the governorate is contributing._ **The absence alone is information; the absence with the wrong supply named is a correction that arrives before the error** — **which is 11.1\'s middle column doing the work it was written for.**',
  '**One instruction, about the order, with its reason.** ⚠ _Read paragraph 11 before paragraph 9… a reader who meets 9 first will carry those figures into 11._ **The reason is what makes the instruction obeyed.** **An instruction with no reason is read as a preference about where to start.**',
  '⚠ And **name the fourth absence and say where it is.** _It is explained at paragraph 4 where it arises, because three is what a note can carry._ **This sentence does two things: it keeps the note to three, and it tells the reader that the count is deliberate** — **so that a reader who finds a fourth absence does not conclude the note was careless.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a covering note (120 words or more).'));
out.push(p('**______________** · _to _______________ · _covering note to _______________ · **______________**   **This note is not a summary of ______________ and does not repeat anything in it.** ⚠ **It names ______________ things in ______________ that have no equivalent in ______________, and gives one instruction about the order of reading.**   **One: _______________.** **______________.** **It is not ______________.** ⚠ **A reader who takes it as ______________ will ______________**, and the answer is ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'What the note is not, said first',
  'Three absences, each with what a reader would supply',
  'One instruction about the order, with its reason',
  'The fourth absence named, and where it is dealt with',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their instruction and its reason**, and the room says whether it would obey it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (**260–300 words**, which is the genre\'s own length), to the shape in the writer\'s box: what it is not, the three absences, the instruction with its reason, the fourth absence, and why the note exists.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: what the note is not, three absences each with the wrong supply named, one instruction about the order with its reason, and the fourth absence placed.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their instruction twice: once with a rise at the end and once falling.** ⚠ **The room says which one it could decline.** **It is the rise, which turns an instruction into a request** — **and the written form of that rise is _if you would_, four words that give the order back.** **Fall, and stop.** Then the sentence the cycle ends on, which is Mrs Rizk\'s: **a sentence I could have written in the covering email.**'));
out.push(hw('Write **the covering note for your own document, 260 to 300 words**: three absences, each with what a reader would supply, one instruction about the order with its reason, and the fourth absence placed. ⚠ **Then send it with the document** — **actually send it** — **and note what the first reply asks about.** **In this class the first reply has asked about one of the three absences twice, and about something else eight times**, which is itself a finding about which three to choose. **Bring the note and the reply.** **11.7 mediates between a document, its translation, and the reader who has only the translation**, and carries **Reading Part 4**, **Writing Part 1** and **Listening Part 3**.'));

// ===================== 11.7 =====================
out.push(h2('11.7  Review & Mediate: a document, its translation, and the reader who has only the translation'));
out.push(p('**Function:** mediating between a document, its translation, and the reader who has only the translation   ·   **Recycling:** Unit 11   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 4 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 11 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** There is no equivalent for this role in the Syrian system, and we have not one.  **2** A reader who meet an absence supplies something from their own system.  **3** The hedge may well explains the eight, which cannot be carry into Arabic.  **4** We are pleased to confirm that the consignment it has been released.  **5** The field assume one date and the qualification was awarded in two stages.  **6** Read the paragraph 4 before the paragraph 2.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the three documents and the question the reader has asked.'));
out.push(box(null, [
  '**ONE DOCUMENT, TWO VERSIONS, THREE PARTIES** _(the author is Dr Qabbani; the translator is Mrs Oueidat; the reader is a ministry committee which has only the Arabic)_',
  '**What the English says.** _"The night staffing may well explain the eight. The two lines on the admissions sheet would distinguish the two readings in about eighteen months."_',
  '**What the Arabic says.** _"The night staffing explains the eight. Two lines on the admissions sheet are to be added for eighteen months."_',
  '**The author.** _"I did not write either sentence. The first is a conclusion I refused and the second is an instruction I have no power to give."_',
  '**The translator.** _"_May well_ has no equivalent and I chose the stronger reading, which is what I always do and said so in my covering line. The second sentence had _would_ in it and Arabic has no flat conditional there; I chose the instruction because the alternative read as a wish."_',
  '**The reader.** _"We have resolved to add the two lines and to record that the staffing is the cause. The paper was clear."_',
  '⚠ **All three are right about what they are right about, and the committee has decided two things the author refused to assert.**',
  '**And the thing none of the three has noticed.** **The covering line exists.** **It was sent, it was filed, and the committee was not given it** — **so the one document that would have prevented all of this is in the file and has not been read.**',
  '**The question for the cycle.** _What do you write, and to whom?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides the letter goes to one of the three. Which, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 11.13  The line that was in the file', [
  ['Ms Huda', 'Mrs Khoury — who gets the letter?'],
  ['Mrs Khoury', '⚠ **The committee, and nobody else is even a candidate.** **They are the only party that has acted** — **and the author and the translator have each written to the person who already agrees with them, which is the seventh time this book has said so and the last.**'],
  ['Dr Qabbani', 'I would rather write to the translator.'],
  ['Mrs Oueidat', '⚠ **And I would rather not receive it.** **I did what the covering line says I do and the line was sent.** **A letter to me produces an apology and changes nothing** — **the committee has resolved two things, and a resolution is undone by a committee and not by a translator.**'],
  ['Mrs Tarabishi', 'So what does the letter say?'],
  ['Mrs Khoury', '⚠ **Four sentences and no history.** **What the English says, what the Arabic says, that the difference is a construction with no equivalent, and what the committee\'s two resolutions therefore rest on.** **Then the request: that the second resolution be withdrawn and the first reworded.**'],
  ['Mr Shihabi', 'Two requests is one too many.'],
  ['Mrs Khoury', '⚠ **It is two requests about one error and they are not separable.** **The resolution to add the two lines is useful and should stand** — **and the words _and to record that the staffing is the cause_ are the whole of what has to go.** **One sentence, and the committee keeps the half it was right about.**'],
  ['Mrs Ajouz', 'And the covering line that was in the file?'],
  ['Mrs Oueidat', '⚠ **That is the sentence that goes in the letter and it is the one nobody will enjoy.** _A covering line stating that the English hedges this finding was filed on 4 July and was not before the committee._ **It is a fact, it belongs to nobody\'s fault, and it tells a secretariat what to change** — **which is more than any of the three parties has produced in two months.**'],
  ['Mr Tayara', 'Does the secretariat not come out of this badly?'],
  ['Mrs Khoury', '⚠ **It comes out of it as the only party that can fix the system rather than the instance.** **Say the fact and do not say whose fault it was** — **because the instance is worth one correction and the system is worth every future paper, and a secretariat that is blamed will correct the instance and stop.**'],
  ['Mrs Rizk', 'What do you refuse to write?'],
  ['Mrs Oueidat', '⚠ **That the translation was wrong.** **It was not, and saying so would be the one sentence in the letter that could be answered** — **and a letter with an answerable sentence in it gets a reply about that sentence and no resolution withdrawn.**'],
  ['Jad', 'And if the committee does not withdraw it?'],
  ['Dr Qabbani', '⚠ **Then the minute stands and the paper carries a note saying what the paper says.** **Which is 9.4: concede the method and hold the result.** **I cannot undo a resolution and I can make sure no reader of the paper ever meets it unattended.**'],
  ['Mr Zahreddine', 'Eighteen months of two lines is a cheap outcome for an error.'],
  ['Mrs Khoury', '⚠ **Which the letter should say.** **The committee was right about the measurement and wrong about the cause** — **and a letter that says the first before it says the second will be read to the end.** **This is 7.2 and the class should be able to see it coming by now.**'],
  ['Dr Qabbani', '🔊 ⚠ **And the thing I shall take away is that the line was in the file.** **Mrs Oueidat wrote it, sent it and filed it, and the committee never saw it** — **and the whole of this unit is about absences, and the absence that did the damage was an absence of circulation and not of language.**'],
]));
out.push(sp());
out.push(box('Language box – mediating across a translation', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And what is new: the letter goes to whoever has acted.** ⚠ **Not to the author and not to the translator.** **A resolution is undone by the body that passed it** — **and the author and the translator have each written to the party that already agrees with them, which is why nothing has moved in two months.**',
  '**Never write that the translation was wrong.** ⚠ **It was not.** **It is the one sentence in such a letter that can be answered** — **and a letter with an answerable sentence in it produces a reply about that sentence and no resolution withdrawn.**',
  '**Say what was right before what was wrong.** ⚠ _The committee was right about the measurement and wrong about the cause._ **Which is 7.2\'s concession at the strongest point, arriving for the last time in Book 1** — **and a letter in that order is read to the end.**',
  '**Separate the two resolutions and keep the useful one.** ⚠ **The resolution to add the two lines should stand.** **The words _and to record that the staffing is the cause_ are the whole of what has to go** — **and a letter that asks for both to be withdrawn loses the eighteen months of data as well.**',
  '**The fact about circulation, said without blame.** ⚠ _A covering line stating that the English hedges this finding was filed on 4 July and was not before the committee._ **A secretariat that is blamed corrects the instance and stops.** **A secretariat that is told a fact can fix the system** — **which is worth every future paper.**',
  '**And where the request fails.** ⚠ **The minute stands and the paper carries a note saying what the paper says.** **Which is 9.4: concede the method and hold the result.** **You cannot undo a resolution and you can make sure no reader meets it unattended.**',
  '**Pronunciation.** 🔊 **Track 11.14** **Say _the committee was right about the measurement and wrong about the cause_ with equal weight on _measurement_ and _cause_.** ⚠ **Stress on _wrong_ and the sentence is an accusation with a courtesy in front of it.** **Equal weight, and it is an account** — **and the difference is audible to anybody and invisible on the page, which is why it is drilled aloud.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has two versions of a sentence, three parties and an action taken, and does **not** show them. A reads all of it. B says **who gets the letter**, writes **the four sentences**, and says **what must not be written.** ⚠ **On one of the two cards nothing has been acted on yet**, and B must say so and write to a different party. Change roles with the other pair.'));
out.push(table(['Pair A – the eight at night', 'Pair B – the consignment'], [
  ['_English: the staffing may well explain the eight._', '_Arabic: the consignment is released._'],
  ['_Arabic: the staffing explains the eight._', '_English: we are pleased to confirm the release._'],
  ['_The committee has resolved two things._', '_⚠ Nobody has acted; the letter has been filed._'],
  ['_⚠ The covering line was filed and not circulated._', '_⚠ The next letter from the branch is a challenge._'],
  ['_⚠ Do not write that the translation was wrong._', '_⚠ Do not write that the inspectorate was insincere._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the recipient, the four sentences, and the refusal. ⚠ **On Pair B nothing has been acted on**, so there is no body to write to and the letter is a note to the branch\'s own file: the English versions carry a formula the Arabic does not, so the next letter out is not a reply to a courtesy. **The refusal there is harder** — **_insincere_ is not available, because the formula is the translator\'s.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own two versions** and ask: **has anybody acted on the second one?** ⚠ **If they have, write the four sentences to them.** **If they have not, write the note to your own file instead** — **and in this class six of the ten have been in the second position, which is the lucky one and the one nobody uses.**'));
out.push(p('**b**  Swap. Your partner reads **your four sentences** and marks **anything that could be answered.** ⚠ **An answerable sentence is a sentence about somebody\'s competence.** **A sentence about what two documents say cannot be answered**, and that is the whole technique: the letter is made of two quotations, a fact about a construction, and a request.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you write, and to whom:  _Asked who gets the letter, Mrs Khoury said the committee, and nobody else is even a candidate: they are the only party that has acted, and the author and the translator have each written to the person who already agrees with them. Dr Qabbani said he would rather write to the translator, and Mrs Oueidat said she would rather not receive it: she did what the covering line says she does and the line was sent, and a letter to her produces an apology and changes nothing, because a resolution is undone by a committee and not by a translator. Mrs Tarabishi asked what the letter says, and four sentences and no history: what the English says, what the Arabic says, that the difference is a construction with no equivalent, and what the committee\'s two resolutions therefore rest on. Mr Shihabi said two requests is one too many, and Mrs Khoury said it is two requests about one error and they are not separable: the resolution to add the two lines is useful and should stand, and the words and to record that the staffing is the cause are the whole of what has to go. Mrs Ajouz asked about the covering line that was in the file, and Mrs Oueidat said that is the sentence that goes in the letter and the one nobody will enjoy — a covering line stating that the English hedges this finding was filed on 4 July and was not before the committee. Mr Tayara asked whether the secretariat does not come out of this badly, and it comes out of it as the only party that can fix the system rather than the instance. Mrs Rizk asked what you refuse to write, and that the translation was wrong, because it was not, and saying so would be the one sentence in the letter that could be answered. Mr Attar asked what happens if the committee does not withdraw it, and Dr Qabbani said then the minute stands and the paper carries a note saying what the paper says, which is 9.4. Mr Zahreddine said eighteen months of two lines is a cheap outcome for an error, and Mrs Khoury said the letter should say so, because the committee was right about the measurement and wrong about the cause, and a letter in that order is read to the end. And Dr Qabbani said the thing he will take away is that the line was in the file: the whole of this unit is about absences, and the absence that did the damage was an absence of circulation and not of language._'));
out.push(p('**Listener task:** write your four sentences and the one thing you refuse to write.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 4)', 7));
out.push(p('For questions **1–6**, complete the second sentence so that it has a similar meaning to the first, **using the word given.** ⚠ **Do not change the word given.** You must use **between three and six words**, including the word given. **Two marks each.**'));
out.push(box(null, [
  '**0** _Example:_  The form had no field for a second date.   **ROOM**   The form **had no room for** a second date.',
  '**1**  The translation did not lose anything that the original had.   **NOTHING**',
  '    There ______________________________ the original that the translation lost.',
  '**2**  The officer never said that the file was incomplete.   **POINT**',
  '    At ______________________________ that the file was incomplete.',
  '**3**  The recommendation was recorded as an instruction because the form had no field for it.   **ACCOUNT**',
  '    The recommendation was recorded as an instruction ______________________________ the form having no field for it.',
  '**4**  The translator had no choice but to decide.   **FORCED**',
  '    The translator ______________________________ a decision.',
  '**5**  The note arrived and the branch telephoned immediately.   **SOONER**',
  '    No ______________________________ than the branch telephoned.',
  '**6**  It was impossible to take the hedge across into the other language.   **CARRY**',
  '    The hedge ______________________________ the other language.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the four sentences to the party that has acted (120 words or more).'));
out.push(p('**To ______________** · _______________ · **______________**   **______________ was right about ______________ and ______________ about ______________.**   **The English of the paper reads: _"______________"_.** **The ______________ version reads: _"______________"_.**   **The difference is ______________, which ______________.**   **______________ therefore rests on ______________.**   **I should be grateful if ______________ were ______________, and if ______________ were allowed to stand.**   ⚠ **A ______________ stating ______________ was filed on ______________ and was not before ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Addressed to the party that has acted',
  'What was right said before what was wrong',
  'Made of two quotations, a fact and a request',
  'No sentence that can be answered',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Sixth essay of the course and the last in Book 1.** **Three points, two discussed, both named in the first paragraph with the ground, and the third not mentioned again.**',
  'Your class has read an article about working across languages. **Write an **essay** discussing **two** of the points raised.** You should **explain which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about documents that cross between systems. **First**, that the useful work is done before the translation and consists of naming what has no equivalent. **Second**, that a translation is more likely to add something than to lose it. **Third**, that a writer who keeps to counts, dates and documents has nothing to fear from any translator."_',
  '**Points to discuss: 1** the work is done before the translation   **2** a translation adds rather than loses   **3** counts and dates are translator-proof',
  '⚠ **The third point is the one this unit has half proved and half contradicted, which makes it the interesting choice.** **Counts and dates do travel** — **and 11.4\'s three additions landed on sentences that had nothing wrong with them, and 11.5\'s field headings defeated a document made entirely of dates.** **A candidate who takes the third point has to say which half is true.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 11 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  There is no equivalent for this role in the Syrian system, and we ___ one.   a) do not have   b) have not   c) are not having',
  '2  A reader who ___ an absence supplies something from their own system.   a) meet   b) meeting   c) meets',
  '3  The hedge cannot ___ into Arabic.   a) carry   b) be carried   c) be carry',
  '4  We are pleased to confirm that the consignment ___ released.   a) it has been   b) has been it   c) has been',
  '5  The field ___ one date and the qualification was awarded in two stages.   a) assumes   b) assume   c) assuming',
  '6  Read ___ paragraph 4 before paragraph 2.   a) the   b) —   c) a',
  '7  Three things in the application have no equivalent ___ your own system.   a) to   b) with   c) in',
  '8  The covering line was filed and ___ before the committee.   a) was not   b) not was   c) was not been',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style – a long interview).** 🔊 **Track 11.15** You will hear an interview with a woman who assesses applications from education systems she does not know. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best.'));
[
  '**1**  What does she say she does first with an application from an unfamiliar system?   **A** compares it with a similar one   **B** looks for anything the form has forced into the wrong shape   **C** reads the references   **D** checks the grades',
  '**2**  What does she say about applicants who explain their own system?   **A** they are usually over-anxious   **B** they take longer to assess   **C** they are more often wrong about her system   **D** they save her the guess she would otherwise make',
  '**3**  What surprised her about covering notes?   **A** how few of them name what has no equivalent   **B** how long they are   **C** that schools write them at all   **D** that they repeat the application',
  '**4**  Why does she prefer a blank box to a nought?   **A** a nought is harder to read   **B** her system records blanks separately   **C** a blank can be asked about and a nought cannot   **D** a nought suggests dishonesty',
  '**5**  What does she say about politeness formulas in applications?   **A** she has learnt to disregard them entirely   **B** they make a file harder to assess   **C** they have become less common   **D** they tell her something about the applicant',
  '**6**  What has changed in her own practice?   **A** she asks for fewer documents   **B** she telephones schools   **C** she now assesses in pairs   **D** she writes to the school when a form has forced an answer',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 11.15  Audio script (read after the check)', [
  ['Interviewer', 'You see applications from about forty systems. Where do you start?'],
  ['Assessor', 'Not with the content. I go through the form looking for places where our own boxes have squeezed something into a shape it does not fit. One date where there were two. One referee where there is no such person. A predicted grade from a system that does not predict. Our form does more damage than any applicant I have ever assessed.'],
  ['Interviewer', 'Do applicants help you with that?'],
  ['Assessor', 'About one in nine does, and those are the easy ones. Not because the explanation is flattering — half of them tell me something that makes the application weaker. It is that they have taken the guess off my desk. If nobody tells me what a certificate awarded in two stages looks like, I guess, and I guess from my own system, and I am confident when I do it. That is the dangerous part. I am not uncertain. I am wrong and comfortable.'],
  ['Interviewer', 'What do the good covering letters have in them?'],
  ['Assessor', 'Very few of them have anything. That is what surprised me when I started: nine letters in ten are a greeting and the word attached. The ones that work name three or four things that do not exist in our system and say what exists instead. Three is about what I can hold while I read. Seven, and I use two of them.'],
  ['Interviewer', 'You said once that you would rather have an empty box than a nought.'],
  ['Assessor', 'Always. A blank is a question I can ask. A nought is an answer I have been given, and I will believe it, and nobody will ever find out that it was a guess by a sixteen-year-old about what we wanted. I have refused applications on noughts that turned out to mean nothing at all.'],
  ['Interviewer', 'And the formulas? _We are pleased to confirm_, and so on.'],
  ['Assessor', 'I used to think they told me about the applicant and they do not. They tell me about whoever did the English. I have had two letters from the same school in one month, one of them effusive and one of them curt, and the difference was which of two people translated it. So I have stopped reading them for anything, which took me about four years.'],
  ['Interviewer', 'Has your own practice changed?'],
  ['Assessor', 'One thing. When a form has clearly forced an answer out of shape, I write to the school and ask. Four lines. I used to assess what was in front of me and decline it, which was defensible and cost somebody a year. The letter takes me two minutes and about a third of the time the answer changes the decision. I should have been doing it from the beginning and nobody told me I could.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the ground, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 11)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ write the three columns of absences before I write a version of anything',
  '☐ name what a reader in another system will supply, in their words',
  '☐ find a calque in my own writing by reading it aloud to ten people',
  '☐ tell a hedge made of words from a hedge made of grammar',
  '☐ write a grammatical hedge out into two sentences, with a prediction in each',
  '☐ name what a translation added: certainty, warmth or obligation',
  '☐ say what a field heading assumes, and where the second thing goes',
  '☐ write a covering note of 260 to 300 words: three absences and one instruction',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _render into · turn into · carry into · map on to · lapse into · fall into · stand proxy for · carry off · bring off · pull off · get the hang of · take to_.',
  '**This unit\'s word-formation set** _(Reading Part 4 in 11.7 draws on this unit\'s lexis)_: _translate → **translatable** · adapt → **adaptation** · correspond → **correspondence** · explicit → **explicitly** · implicit → **implication** · culture → **cultural** · convention → **conventional** · euphemism → **euphemistic** · nuance → **nuanced**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _bring in_ **→ _bring in a reading the original did not have_**, which is introducing, where at A2 it was bringing in the washing · _hold on_ **→ _the hedge does not hold on in translation_**, which is surviving, where at A2 it was holding on to a rail · _put off_ **→ _a formula that puts off a reader_**, which is alienating, where at B1 it was putting off a meeting.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 11 · Student\'s Book');
