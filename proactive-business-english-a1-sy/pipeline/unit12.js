// Proactive Business English A1 · Syria Edition · Book 2 · Unit 12 — Student's Book
// ⚠ This unit carries the END-OF-LEVEL block. It is appended with a spacer and a box, and
// NOT with a second top-level heading or a page break — so the unit keeps the house figures
// exactly.
//
// ⚠ AND A NOTE ABOUT THIS COMMENT. The first version of it named the two call sites in
// code form, and qa.js refused the unit: the house-figure check counts TEXT matches, so a
// comment that mentions a call is indistinguishable from the call. Prose about the harness,
// written inside a file the harness reads, is code as far as the harness is concerned.
// Second time a comment has broken a check in this series — the Series Bible was the first.
// Name call sites in words here, never in their code form.
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'note · to leave a note · who it is for · who it is from · I did · I did not · because · the next person · to hand over · handover · shift note · sign off · initials · done · not done · urgent · tomorrow morning · please read · the man after me · to explain · to remind · end of shift';
const AHEAD_AT_A2 = 'handover · sign off · urgent';

out.push(h1('Unit 12  The Note You Leave'));
out.push(p('_Proactive Business English · A1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  write the four-line note',
  '**12.2**  say who it is for',
  '**12.3**  say what you did',
  '**12.4**  say what you did NOT do, and why',
  '**12.5**  say what the next person must do',
  '**12.6**  sign it and date it',
  '**12.7**  Review: the note that saved a morning — and one problem to talk about together',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ The last unit, and the one everything has been for', [
  '**Twelve units ago you could not write your own name in English.** ⚠ **This unit asks you to write four lines that a man you may never meet will act on.**',
  '⚠ **Four lines. About thirty words.** **To · what I did · what I did not do and why · what you must do.** **And your name at the bottom.**',
  '⚠ **That is also the shape the examination asks for** — **four sentences in about thirty words** — **so the last thing this book teaches you is the thing the examiner wants.** **That is not a coincidence.**',
], C.lyellow, C.orange));

// ======================= CYCLE 12.1 =======================
out.push(pb());
out.push(h2('12.1  Four lines'));
out.push(p('**You can:** write a four-line note   ·   **Grammar:** the shape   ·   **Sound:** reading your note aloud before you leave it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Does anybody leave you a note at your work? **Say it.** What is on it?'));
out.push(p('**b**  Think of the last thing you wanted to tell the next person and did not. **Say it** in one sentence.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many lines does Abu Yasser want?   **A** two   **B** four   **C** as many as you need'));
out.push(p('**b**  Listen again.   **1** What are the four?   **2** Why four and not six?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.1  Four lines, and the last one is the point', [
  ['Abu Yasser', 'Ammar. From Sunday you are on the early shift and Samih is on the late one.'],
  ['Ammar', 'So we will not see each other.'],
  ['Abu Yasser', 'You will not see each other. You leave him a note. Four lines.'],
  ['Ammar', 'Four?'],
  ['Abu Yasser', 'Who it is for. What you did. What you did not do, and why. What he must do.'],
  ['Ammar', 'And that is enough?'],
  ['Abu Yasser', 'That is enough. Unit nine said three sentences at a shift change and you remembered all three.'],
  ['Ammar', 'So why four now?'],
  ['Abu Yasser', 'Because now you are writing it instead of saying it, and a written note needs a name on the top. Three things plus who it is for.'],
  ['Ammar', 'And the last line?'],
  ['Abu Yasser', 'The last line is the point. The other three tell him what happened. The last one tells him what to do.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four lines, in this order**',
  table(['', 'The line', 'Why'], [
    ['**1**', '**To: ______**', 'so he knows it is his'],
    ['**2**', '**I did ______**', 'so he does not do it again'],
    ['**3**', '**I did not ______ because ______**', '⚠ **so he knows what is left**'],
    ['**4**', '⚠ **Please ______**', '⚠ **so something happens**'],
  ], [0.5, 2.6, 2.6]),
  '⚠ **Four lines. About thirty words. And the LAST one is the point.** **The first three tell him what happened; the fourth tells him what to do.** **A note with no fourth line is a story.**',
  '⚠ **This is Unit 9.6 written down.** **Three sentences at a shift change becomes four when it is on paper**, **because paper needs a name on the top.** **Same three things plus _who it is for_.**',
  '⚠ **And read it aloud before you leave it.** **If you cannot say it in one breath it is too long for a note.** **Unit 7.6 said the same about a damage line.**',
  '**Practise:** Write the four line headings.',
  '1 ______________   2 ______________   3 ______________   4 ______________',
  '**Useful words:**  To:  ·  I did…  ·  I did not… because…  ·  Please…  ·  four lines',
  '**Sound — reading your note aloud before you leave it.** 🔊 **Track 12.2** Listen. **Four lines, a clear stop after each, about thirty words in all.** **Say your own four lines four times.**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One explains the four lines. One asks why four. Then change places.'));
out.push(dlg(null, [
  ['A', 'From __________ you are on the __________ shift. You leave a note. __________ lines.'],
  ['B', '__________?'],
  ['A', 'Who it is for. What you __________. What you __________ __________, and why. What he __________ __________.'],
  ['B', 'And that is enough?'],
  ['A', 'That is enough.'],
  ['B', 'And the last line?'],
]));
out.push(table(['Card 1', 'Card 2'], [['Sunday · early · four · Four · did · did not do · must do', 'Monday · late · four · Four · did · did not do · must do']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** write the four headings. **Four, in order.**'));
out.push(PHRASE_CARD(['To:', 'I did…', 'I did not… because…', 'Please…', 'four lines']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your last shift, in four lines. **Write it.** Then count the words.'));
out.push(table(['', 'The line', 'Words'], [['**To**', '', ''], ['**I did**', '', ''], ['**I did not**', '', ''], ['**Please**', '', '']], [1.2, 4, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Read your four lines to the class. **Then say the word count.**'));
out.push(p('**Listener task:** which line was longest? **It should not be the first.**'));
out.push(p('**Board clinic:** your teacher writes a note with three lines. The class says which one is missing. **It is always the fourth.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Ammar left. Then answer.'));
out.push(box(null, [
  '**To: Samih**',
  '**I did** rows one to three and the Aleppo cartons.',
  '**I did not** do row four, because the ladder was in the yard.',
  '**Please** do row four when Hani brings the ladder back. It is the packets.',
  '**A. Zreik, Sunday, 16.00**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did Ammar do?'));
out.push(item('2', 'Why did he not do row four?'));
out.push(item('3', 'What extra information is in the last line, and why is it useful?'));
out.push(box('Writer\'s box', [
  '**A four-line note has a name at the top, three lines, and a signature with a day and a TIME.**',
  '⚠ **The last line carries one extra fact if you have one:** _It is the packets._ **Four words that save the next man opening a carton to find out what he is looking for.**',
  '⚠ **And the time on the signature matters more than the day.** **_Sunday 16.00_ tells Samih the note is six hours old when he reads it at ten.** **_Sunday_ on its own does not.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a four-line note for your own work (**15 words or more**).'));
out.push(p('**To:** ______________   **I did** ______________.   **I did not** ______________, because ______________.   **Please** ______________. ______________.   **______, ______________, ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['A name at the top', ''],
  ['A _because_ on line three', ''],
  ['A _Please_ on line four', ''],
  ['A day AND a time at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their note. The class says what the next person would do first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about notes at your work (**20 to 35 words**). Who leaves them? Who reads them? What is usually missing?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Does anybody ever answer a note?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many does anybody ever write back? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write your four-line note for tomorrow** and leave it for a real person (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.2 =======================
out.push(pb());
out.push(h2('12.2  To: Samih'));
out.push(p('**You can:** name your reader   ·   **Grammar:** _To: _______   ·   **Sound:** the name, said as you write it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Who comes after you at your work? **Say the name.** If you do not know it, say so.'));
out.push(p('**b**  Read the two tops. Which note gets read? _NOTE · To: Samih_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What happened to the note with no name?   **A** Samih read it   **B** nobody read it for two days   **C** it was thrown away'));
out.push(p('**b**  Listen again.   **1** Where was it?   **2** What does Nour say about two words?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.3  Two words at the top', [
  ['Nour', 'There was a note on the bench for two days. Nobody picked it up.'],
  ['Ammar', 'I wrote that. On Tuesday.'],
  ['Nour', 'It says NOTE at the top. Just NOTE.'],
  ['Ammar', 'Everybody who comes in the morning reads the bench.'],
  ['Nour', 'Everybody who comes in the morning looked at it and thought it was for somebody else.'],
  ['Ammar', 'All four of them.'],
  ['Nour', 'All four of them. A note for everybody is a note for nobody. Unit seven.'],
  ['Ammar', 'The four men and the crushed cartons.'],
  ['Nour', 'The same thing. Write _To: Samih_ and Samih picks it up in four seconds.'],
  ['Ammar', 'Two words.'],
  ['Nour', 'Two words. And if you do not know who, write _To: whoever opens the back store first_. That is still a name.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Naming your reader**',
  table(['Weak', 'Strong'], [
    ['**NOTE**', '**To: Samih**'],
    ['**For the next shift**', '**To: Samih** — ⚠ **a person, not a shift**'],
    ['**To whom it may concern**', '⚠ **To: whoever opens the back store first**'],
  ], [2, 3.4]),
  '⚠ **A note for everybody is a note for nobody.** **Unit 7.7 again — four men saw the crushed cartons and each assumed another had written it down.** **Four men read a note headed NOTE and each assumed it was for another.**',
  '⚠ **If you do not know the name, describe the person by what they will DO:** _whoever opens the back store first_. **That is still a name, because exactly one person will do it.**',
  '⚠ **And write the name FIRST, before the rest of the note.** **Two words at the top, before you have decided what to say.** **A note with a reader has to be written to somebody, and it comes out shorter.**',
  '**Practise:** Write the top line.',
  '1 You know it is Samih. ______________   2 You do not know who. ______________   3 It is for two people. ______________',
  '**Useful words:**  To: ______  ·  whoever ______ first  ·  a note for everybody  ·  a note for nobody  ·  two words',
  '**Sound — the name, said as you write it.** 🔊 **Track 12.4** Listen. _To … Samih._ **Said out loud as the pen writes it.** **A reader you have said aloud is a reader you write to.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One wrote a note nobody read. One explains why. Then change places.'));
out.push(dlg(null, [
  ['A', 'There was a note on the __________ for __________ days. Nobody picked it up.'],
  ['B', 'I wrote that. On __________.'],
  ['A', 'It says __________ at the top. Just __________.'],
  ['B', 'Everybody who comes in the morning reads the __________.'],
  ['A', 'Everybody looked at it and thought it was for __________.'],
  ['B', 'All __________ of them.'],
]));
out.push(table(['Card 1', 'Card 2'], [['bench · two · Tuesday · NOTE · NOTE · bench · somebody else · four', 'counter · three · Monday · IMPORTANT · IMPORTANT · counter · somebody else · five']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** how many people looked at the note and did not pick it up? **And what would have fixed it?**'));
out.push(PHRASE_CARD(['To: ______', 'whoever ______ first', 'a note for everybody', 'a note for nobody', 'two words']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four notes you could leave at your work. **Write the TOP LINE of each**, and say who exactly will read it.'));
out.push(table(['The note is about', 'To:', 'How I know it is them'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 1.6, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My note is about ______. It says To: ______. I know it is them because ______._'));
out.push(p('**Listener task:** how many top lines named a PERSON? **How many named a shift or nobody?**'));
out.push(p('**Board clinic:** your teacher writes four top lines. Two are _NOTE_ or _FOR THE NEXT SHIFT_. Fix them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the board Nour put above the bench. Then answer.'));
out.push(box(null, [
  '**NOTES ON THIS BENCH — WHO READS WHAT**',
  table(['Top line', 'Who picked it up', 'How long'], [
    ['**To: Samih**', 'Samih', '⚠ **four seconds**'],
    ['**To: whoever opens the back store**', 'Samih', 'one minute'],
    ['**To: the late shift**', '⚠ **nobody — there are three of them**', 'one day'],
    ['**NOTE**', '⚠ **nobody**', '⚠ **two days**'],
  ], [2.4, 2.2, 1.6]),
  '⚠ **A name: four seconds. A job: one minute. A shift: one day. Nothing: two days. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which top line was picked up fastest?'));
out.push(item('2', 'Why did nobody pick up the one addressed to the late shift?'));
out.push(item('3', 'What is the pattern in the third column?'));
out.push(box('Writer\'s box', [
  '**A who-reads-what table needs the TIME in the third column, not a tick.**',
  '⚠ **Four seconds, one minute, one day, two days.** **The pattern is only visible as times.** **A column of ticks and crosses would say that two of the four worked** — **and the real finding is that all four are different.**',
  '⚠ **And the order matters: a NAME, then a JOB, then a SHIFT, then nothing.** **The more people a note is addressed to, the longer it waits.** **That is 7.7 measured in hours.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a who-reads-what table for your own work (**15 words or more**). Times in the third column.'));
out.push(table(['Top line', 'Who picked it up', 'How long'], [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
], [2.4, 2.2, 1.6]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['Times, not ticks, in the third column', ''],
  ['One line addressed to a person', ''],
  ['One line addressed to nobody', ''],
  ['A line at the bottom naming the pattern', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their table. The class says which top line they would use tomorrow.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a note at your work that nobody read (**20 to 35 words**). What did it say at the top? How long did it sit there? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Who did you think would read it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. How many unread notes were addressed to nobody in particular? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** the names of the four people who come after you, and what each one would need to know (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.3 =======================
out.push(pb());
out.push(h2('12.3  I did rows one to three'));
out.push(p('**You can:** say what you did   ·   **Grammar:** the past simple, from Unit 9   ·   **Sound:** the done list, flat'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say four things you finished yesterday. **Past verbs, from Unit 9.**'));
out.push(p('**b**  Read the two lines. Which does the next man believe? _I did the shelves · I did rows one to three_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is wrong with Ammar\'s first version?   **A** it is too short   **B** _the shelves_ could mean anything   **C** it has no verb'));
out.push(p('**b**  Listen again.   **1** How many rows are there?   **2** What does Samih have to do if the note says _the shelves_?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.5  Which shelves?', [
  ['Samih', 'Your note says _I did the shelves_.'],
  ['Ammar', 'I did the shelves.'],
  ['Samih', 'There are four rows and four shelves in each. Sixteen.'],
  ['Ammar', 'I did rows one to three. Twelve of the sixteen.'],
  ['Samih', 'Then write that. _I did the shelves_ means I have to check all sixteen.'],
  ['Ammar', 'How long does that take?'],
  ['Samih', 'Twenty minutes. Which is longer than it took you to write the note.'],
  ['Ammar', 'Rows one to three. Six words.'],
  ['Samih', 'Six words, and I start at row four.'],
  ['Ammar', 'And if I had written nothing at all?'],
  ['Samih', 'Then I check sixteen and I do not know whether you came in.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Saying what you did**',
  table(['Vague — the next man checks everything', 'Exact — the next man starts work'], [
    ['**I did the shelves.**', '**I did rows one to three.**'],
    ['**I counted some of it.**', '**I counted the back store. Not the yard.**'],
    ['**I finished most of it.**', '⚠ **I did twelve of the sixteen.**'],
  ], [2.4, 3]),
  '⚠ **Say WHERE YOU GOT TO, not what you worked on.** **_I did the shelves_ tells Samih what you spent your afternoon on.** **_I did rows one to three_ tells him where to start.**',
  '⚠ **_Most_ and _some_ are Unit 7.3 again:** **a vague quantity makes the next man do the work twice.** **Twelve of the sixteen is six words and saves twenty minutes.**',
  '⚠ **And the past verbs are Unit 9\'s fifteen.** _did · counted · checked · wrote · took · gave · finished._ **Nothing new here — this is where you use them.**',
  '**Practise:** Make it exact.',
  '1 I did the shelves. → ______________.   2 I counted some of it. → ______________.   3 I finished most of it. → ______________.',
  '**Useful words:**  I did rows one to three.  ·  twelve of the sixteen  ·  not the yard  ·  where I got to  ·  six words',
  '**Sound — the done list, flat.** 🔊 **Track 12.6** Listen. _I did rows one to three and the Aleppo cartons.↘_ **Flat, no pride in it.** **A done list read as a boast is a done list somebody checks.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One reads a vague note. One asks what it means. Then change places.'));
out.push(dlg(null, [
  ['A', 'Your note says _I did the __________._'],
  ['B', 'I did the __________.'],
  ['A', 'There are __________ and __________. __________.'],
  ['B', 'I did __________. __________ of the __________.'],
  ['A', 'Then write that. _I did the ___________ means I have to check all __________.'],
  ['B', 'How long does that take?'],
]));
out.push(table(['Card 1', 'Card 2'], [['shelves · shelves · four rows · four shelves in each · Sixteen · rows one to three · Twelve · sixteen · shelves · sixteen', 'trays · trays · eight racks · ten trays on each · Eighty · racks one to five · Fifty · eighty · trays · eighty']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** how much did the vague note cost in minutes? **Say the number.**'));
out.push(PHRASE_CARD(['I did rows one to three.', 'twelve of the sixteen', 'not the yard', 'where I got to', 'six words']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you finished yesterday. **Write them vaguely, then exactly.** Count the extra words.'));
out.push(table(['Vague', 'Exact', 'Extra words'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [2, 2.6, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class both versions. Then: _The exact one is ______ words longer and it saves ______ minutes._'));
out.push(p('**Listener task:** add up the extra words and the saved minutes for the whole class. **Two totals.**'));
out.push(p('**Board clinic:** your teacher writes four vague done-lines. The class makes each one exact.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two done-lines. Then answer.'));
out.push(box(null, [
  '**THE SAME AFTERNOON, WRITTEN TWO WAYS**',
  '**A** _I did the shelves and some of the cartons._',
  '**What Samih had to do:** check all sixteen shelves and open every carton. **Twenty-five minutes.**',
  '**B** _I did rows one to three. I did the eight Aleppo cartons, not the four from Homs._',
  '**What Samih had to do:** start at row four and open four cartons. **Nothing to check.**',
  '⚠ **A is eleven words. B is twenty-two. The eleven extra words saved twenty-five minutes. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many words longer is B?'));
out.push(item('2', 'How many minutes did it save?'));
out.push(item('3', 'How many cartons were from Homs?'));
out.push(box('Writer\'s box', [
  '**A done-line names what is FINISHED and what is NOT, in the same sentence.**',
  '⚠ **_The eight Aleppo cartons, not the four from Homs._** **The second half of that is doing as much work as the first.** **It is what stops the next man opening the Homs cartons to check.**',
  '⚠ **And count the words when you are deciding whether to be exact.** **Eleven extra words against twenty-five minutes.** **Written down like that, nobody chooses the short version.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a done-line for your own work two ways (**15 words or more**).'));
out.push(p('**A** _______________________._   **What the next person has to do:** ______________. ______ minutes.   **B** _______________________._   **What the next person has to do:** ______________.   ⚠ **A is ______ words. B is ______. The extra words saved ______ minutes.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['B names what is finished AND what is not', ''],
  ['Numbers, not _some_ or _most_', ''],
  ['The minutes saved, as a number', ''],
  ['The word counts for both', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read version A and version B. The class says how many minutes B saved.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you had to check work somebody said they had done (**20 to 35 words**). What did they write? How long did checking take?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Had they actually done it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. **Add up the minutes this class has spent checking work that was already done.** Put the total on the board.'));
out.push(box('Homework', ['Finish your writing. Then **write down** four exact done-lines from today, each naming what is NOT done too (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.4 =======================
out.push(pb());
out.push(h2('12.4  I did not, because'));
out.push(p('⚠ **The hardest line in the book, and the most useful.**'));
out.push(p('**You can:** say what you did not do and why   ·   **Grammar:** _I did not ______ because _______   ·   **Sound:** the flat admission'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Name one thing you did not finish yesterday. **And say why.** Both halves.'));
out.push(p('**b**  Read the two lines. Which helps? _I did not do row four · I did not do row four because the ladder was in the yard_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Samih do with the _I did not_ line?   **A** complains   **B** starts there   **C** tells Abu Yasser'));
out.push(p('**b**  Listen again.   **1** Why was row four not done?   **2** What does Samih say about the _because_?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.7  The because is for me, not for you', [
  ['Samih', 'Row four. You did not do it.'],
  ['Ammar', 'I did not do row four because the ladder was in the yard.'],
  ['Samih', 'Good. So I bring the ladder in first, before I start.'],
  ['Ammar', 'I thought you would be annoyed.'],
  ['Samih', 'Why? You told me where to start and what I need.'],
  ['Ammar', 'The _because_ felt like an excuse when I wrote it.'],
  ['Samih', 'The _because_ is not for you. It is for me. Without it I come in, go to row four, and walk back out to the yard.'],
  ['Ammar', 'Two walks.'],
  ['Samih', 'Two walks and four minutes, because you did not write eight words.'],
  ['Ammar', 'So the excuse is the useful part.'],
  ['Samih', 'It is not an excuse. It is the next thing I need to know.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**_I did not ______ because _______**',
  table(['Half a line', 'A whole line'], [
    ['**I did not do row four.**', '**I did not do row four because the ladder was in the yard.**'],
    ['**I did not count it.**', '**I did not count it because there was no light.**'],
    ['**I did not ring him.**', '**I did not ring him because the number on the slip is wrong.**'],
  ], [2.2, 3.6]),
  '⚠ **_did not_ + the bare verb, from Unit 9.4.** _I did not **do**_, **not** ~~I did not did~~.',
  '⚠ **The _because_ is NOT AN EXCUSE. It is the next thing the other man needs to know.** **Without it Samih walks to row four and back out to the yard.** **Two walks and four minutes, for eight words.**',
  '⚠ **And this is the fourth time the book has asked for this line.** **Unit 5.6 — what you did not check. Unit 7.4 — I have not opened it. Unit 9.4 — I did not count it, no light.** **Here it goes in a note that somebody acts on.**',
  '**Practise:** Add the because.',
  '1 I did not do row four ______________.   2 I did not count it ______________.   3 I did not ring him ______________.',
  '**Useful words:**  I did not… because…  ·  the ladder was in the yard  ·  there was no light  ·  two walks  ·  eight words',
  '**Sound — the flat admission.** 🔊 **Track 12.8** Listen. _I did not do row four↘ because the ladder was in the yard.↘_ ⚠ **Flat, both halves, no apology in the voice.** **Said apologetically it sounds like an excuse; said flat it sounds like a fact.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One has not done something. One shows why the _because_ helps. Then change places.'));
out.push(dlg(null, [
  ['A', '__________. You did not do it.'],
  ['B', 'I did not do __________ because __________.'],
  ['A', 'Good. So I __________ first, before I start.'],
  ['B', 'I thought you would be annoyed.'],
  ['A', 'Why? You told me where to __________ and what I __________.'],
  ['B', 'The _because_ felt like an excuse when I wrote it.'],
]));
out.push(table(['Card 1', 'Card 2'], [['Row four · row four · the ladder was in the yard · bring the ladder in · start · need', 'The cold room · the cold room · the key was with Hala · get the key · start · need']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** what will the next man do FIRST because of the _because_? **One thing.**'));
out.push(PHRASE_CARD(['I did not… because…', 'the ladder was in the yard', 'there was no light', 'two walks', 'eight words']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four things you did not finish. **Write both halves.** Then say what the next person would do differently.'));
out.push(table(['I did not', 'because', 'So the next person…'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.6, 1.8, 2.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I did not ______ because ______. So the next person ______._'));
out.push(p('**Listener task:** in how many reports did the _because_ change what the next person does? **Count them. It should be all of them.**'));
out.push(p('**Board clinic:** your teacher writes four half-lines with no _because_. The class adds one to each **and says what it saves.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Nour kept. Then answer.'));
out.push(box(null, [
  '**THE "BECAUSE" LINES — AND WHAT THE NEXT MAN DID WITH THEM**',
  table(['The line', 'What the next man did'], [
    ['_I did not do row four because the ladder was in the yard._', '⚠ **brought the ladder in first. Saved two walks.**'],
    ['_I did not count it because there was no light._', '**counted it at seven in daylight. Found two short.**'],
    ['_I did not ring him because the number on the slip is wrong._', '⚠ **rang the office for the right number before he started.**'],
    ['_I did not do row four._', '⚠ **went to row four, found no ladder, walked to the yard.**'],
  ], [3.2, 2.8]),
  '⚠ **Three lines with a because. One without. The one without cost four minutes and the man was annoyed. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What did the next man do about the ladder?'));
out.push(item('2', 'What was found when it was counted in daylight?'));
out.push(item('3', 'What is the difference between the first line and the last?'));
out.push(box('Writer\'s box', [
  '**A because-lines sheet has two columns:** the line → **what the next man DID with it**.',
  '⚠ **The second column is the proof.** **Three _becauses_ changed what somebody did first; the one without them sent a man on two walks.** **That is the argument for the hardest line in the book, and it is four rows long.**',
  '⚠ **And the last row is deliberately the same job as the first.** **Same work, same man, same morning** — **and the only difference is eight words.** **Keep that pairing when you write your own.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a because-lines sheet for your own work (**15 words or more**). Include one line with no _because_.'));
out.push(table(['The line', 'What the next person did'], [
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
], [3.2, 2.8]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['_because_ on at least three lines', ''],
  ['One line with no _because_', ''],
  ['The second column says what somebody DID', ''],
  ['A line at the bottom with the cost in it', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their line with no _because_. The class says what it cost.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you did not finish and did explain (**20 to 35 words**). What did you write? What did the next person do?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Was anybody annoyed?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. ⚠ **In how many was anybody annoyed about an _I did not_ with a reason on it?** **Count them. It is usually none.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four _I did not… because…_ lines from today, with what each one saves (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.5 =======================
out.push(pb());
out.push(h2('12.5  Please do row four'));
out.push(p('**You can:** say what the next person must do   ·   **Grammar:** _please_ + the verb; _must_ from Unit 10   ·   **Sound:** the ask that is not an order'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You want the next person to do one thing. **Say it** in four words.'));
out.push(p('**b**  Read the three lines. Which would you write to a man you work with? _Do row four · Please do row four · You must do row four_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Which does Ammar use?   **A** _do_   **B** _please_   **C** _must_'));
out.push(p('**b**  Listen again.   **1** When does Abu Yasser say to use _must_?   **2** What is wrong with writing nothing on line four?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.9  Please, and when it is must', [
  ['Ammar', 'Line four. Do I write _please do row four_ or _you must do row four_?'],
  ['Abu Yasser', 'Please. He is a man you work with, not a man you give orders to.'],
  ['Ammar', 'And when is it _must_?'],
  ['Abu Yasser', 'When somebody will get hurt. _You must not open the paint store alone._ That is Unit ten, and it stays _must_.'],
  ['Ammar', 'So _please_ for work and _must_ for safety.'],
  ['Abu Yasser', 'Please for work. Must for safety. And nothing at all is the worst of the three.'],
  ['Ammar', 'Nothing at all?'],
  ['Abu Yasser', 'A note that says what happened and does not say what to do. He reads it, he knows, and he does nothing.'],
  ['Ammar', 'Because nobody asked him.'],
  ['Abu Yasser', 'Because nobody asked him. And then on Tuesday you ask him why row four is not done.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Line four: what the next person must do**',
  table(['You write', 'When'], [
    ['**Please do row four.**', '⚠ **work — this is the house form**'],
    ['**Please ring Beirut before ten.**', 'work, with a time'],
    ['**You must not open the paint store alone.**', '⚠ **safety only — Unit 10**'],
    ['**(nothing)**', '⚠ **the worst of the three — he reads it and does nothing**'],
  ], [3, 2.6]),
  '⚠ **_Please_ + the bare verb, for work.** **_Must_ only for safety.** **And NEVER nothing** — **a note that says what happened and not what to do is a note that gets read and ignored, and nobody is at fault.**',
  '⚠ **Put a TIME on it if there is one:** _please ring Beirut before ten._ **Unit 6.6 again: a promise with a time is a plan.** **An ask with a time is one too.**',
  '⚠ **And ONE thing, not three.** **A fourth line with three asks in it is a fourth line where the next man picks the easiest.**',
  '**Practise:** Write line four.',
  '1 You want row four done. ______________.   2 You want Beirut rung before ten. ______________.   3 Nobody must go in the paint store alone. ______________.',
  '**Useful words:**  Please do…  ·  Please ring… before…  ·  You must not…  ·  one thing, not three  ·  nobody asked him',
  '**Sound — the ask that is not an order.** 🔊 **Track 12.10** Listen. _Please do row four.↘_ **Flat and short.** **Not rising like a question and not loud like an order.** **A written ask read aloud flat is how it will sound in the other man\'s head.** Say it four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One asks which to use. One decides and says why. Then change places.'));
out.push(dlg(null, [
  ['A', 'Line four. Do I write _please ___________ or _you must ___________?'],
  ['B', '__________. He is a man you work with.'],
  ['A', 'And when is it _must_?'],
  ['B', 'When somebody will get __________.'],
  ['A', 'So _please_ for __________ and _must_ for __________.'],
  ['B', 'And nothing at all is the __________ of the three.'],
]));
out.push(table(['Card 1', 'Card 2'], [['do row four · do row four · Please · hurt · work · safety · worst', 'wash the trays · wash the trays · Please · hurt · work · safety · worst']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** when is it _must_? **And what is the worst of the three?**'));
out.push(PHRASE_CARD(['Please do…', 'Please ring… before…', 'You must not…', 'one thing, not three', 'nobody asked him']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four line-fours for your own work. **Write it.** Mark which are _please_ and which are _must_.'));
out.push(table(['Line four', 'Please or must?', 'Why', 'A time on it?'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1.2, 1.4, 1.2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My line four is: ______. It is _please_ / _must_ because ______._'));
out.push(p('**Listener task:** how many were _must_? ⚠ **If more than one or two, ask whether somebody would really get hurt.**'));
out.push(p('**Board clinic:** your teacher writes four notes with no line four. The class adds one to each.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four notes on the bench. Then answer.'));
out.push(box(null, [
  '**FOUR NOTES, ONE WEEK — AND WHAT HAPPENED**',
  table(['Line four', 'What happened'], [
    ['_Please do row four when the ladder comes back._', '✓ **done by 7.30**'],
    ['_Please ring Beirut before ten about the short carton._', '✓ **rung at 9.20, credit agreed**'],
    ['_You must not open the paint store alone._', '✓ **two men went in together**'],
    ['_(no line four)_', '⚠ **✗ nothing. He read it, he knew, and he did nothing.**'],
  ], [3.4, 2.6]),
  '⚠ **Three notes asked for something and got it. One did not ask, and nothing happened. Nobody is at fault for the fourth. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which note got a credit agreed?'));
out.push(item('2', 'Which note used _must_, and why?'));
out.push(item('3', 'Who is at fault for the fourth note?'));
out.push(box('Writer\'s box', [
  '**A four-notes page is the line four and what happened, nothing else.**',
  '⚠ **The fourth row is the one that teaches, and the last line of the box says the hard part:** _nobody is at fault for the fourth._ **The man read the note and knew everything in it.** **He did nothing because he was not asked, and that is not a failure of his.**',
  '⚠ **Keep the _must_ row.** **One in four is about right** — **a page where everything is _must_ is a page from somebody who has not read Unit 10.2.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a four-notes page for your own work (**15 words or more**). One _must_, one with no line four.'));
out.push(table(['Line four', 'What happened'], [
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
], [3.4, 2.6]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['One _must_, and it is about safety', ''],
  ['One with no line four, and what happened', ''],
  ['A time on at least one ask', ''],
  ['A line at the bottom about fault', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their no-line-four row. The class says whose fault it was. **Nobody\'s.**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about something you knew and did nothing about because nobody asked you (**20 to 35 words**). What was it? Who knew you knew?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Would you have done it if they had asked?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many would the person have done it if asked? **Count them. It is nearly all of them.**'));
out.push(box('Homework', ['Finish your writing. Then **write down** four line-fours for your work, each with one thing and a time (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.6 =======================
out.push(pb());
out.push(h2('12.6  A. Zreik, Sunday, 16.00'));
out.push(p('**You can:** sign and date a note   ·   **Grammar:** initials, day, time   ·   **Sound:** the three parts of a signature'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Say your own initials. **Write them.** Could somebody at your work read them?'));
out.push(p('**b**  Read the two bottoms. Which is better? _A.Z. · A. Zreik, Sunday, 16.00_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What was wrong with the note?   **A** no name   **B** no time   **C** both'));
out.push(p('**b**  Listen again.   **1** Why does the time matter?   **2** How old was the note when Samih read it?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.11  Six hours old', [
  ['Samih', 'Your note says _A.Z._ and nothing else.'],
  ['Ammar', 'You know it is me.'],
  ['Samih', 'I know it is you. I do not know when you wrote it.'],
  ['Ammar', 'Does it matter?'],
  ['Samih', 'The note says the ladder is in the yard. If you wrote it at eight this morning, it is still there. If you wrote it at four, Hani has brought it in.'],
  ['Ammar', 'I wrote it at four.'],
  ['Samih', 'Then the ladder came in at half past four and your note is already wrong.'],
  ['Ammar', 'So the time tells you how much to believe it.'],
  ['Samih', 'The time tells me how old it is. A note six hours old is news. A note two days old is history.'],
  ['Ammar', 'A. Zreik, Sunday, sixteen hundred.'],
  ['Samih', 'Three things. And now I know to check the yard before I believe you.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The bottom of the note — three things**',
  table(['', 'What you write', 'Why'], [
    ['**1**', '**A. Zreik**', 'so he can ask you'],
    ['**2**', '**Sunday**', 'which day'],
    ['**3**', '⚠ **16.00**', '⚠ **how old it is**'],
  ], [0.5, 2, 3.4]),
  '⚠ **The TIME is the one people leave off and it is the one that tells the reader how much to believe.** **A note six hours old is news. A note two days old is history.**',
  '⚠ **24-hour time, from Unit 9.2.** **_16.00_, not _4.00_.** **A note that crosses a night needs it.**',
  '⚠ **And initials are enough for the name if everybody knows them** — **but a FULL surname is better, because the new man does not know who A.Z. is.** **Unit 1.1 was your name; this is the last place in the book you write it.**',
  '**Practise:** Write the bottom line.',
  '**Say it. Write it. Check it** — read your bottom line aloud, then look at it and ask what a reader could still not work out.',
  '1 Your name, today, and the time now. ______________',
  '2 The same, with initials only. ______________',
  '**Useful words:**  A. Zreik  ·  Sunday  ·  16.00  ·  six hours old  ·  news, not history',
  '**Sound — the three parts of a signature.** 🔊 **Track 12.12** Listen. _A. Zreik … Sunday … sixteen hundred._ **Three parts, three small stops.** Say your own four times.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One wrote a note with no time. One explains why it matters. Then change places.'));
out.push(dlg(null, [
  ['A', 'Your note says _____________ and nothing else.'],
  ['B', 'You know it is me.'],
  ['A', 'I know it is you. I do not know __________ you wrote it.'],
  ['B', 'Does it matter?'],
  ['A', 'The note says __________. If you wrote it at __________, it is still there. If you wrote it at __________, __________.'],
  ['B', 'So the time tells you __________.'],
]));
out.push(table(['Card 1', 'Card 2'], [['A.Z. · when · the ladder is in the yard · eight · four · Hani has brought it in · how much to believe it', 'H.M. · when · the water is off · five · nine · it came back on · how much to believe it']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the lines for the class — **books closed**.'));
out.push(p('**Listener task:** how old was the note? **And was it still true?**'));
out.push(PHRASE_CARD(['A. Zreik', 'Sunday', '16.00', 'six hours old', 'news, not history']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Four notes you have left or could leave. **Write the bottom line of each**, with a time.'));
out.push(table(['The note says', 'My bottom line', 'How long it stays true'], [['', '', ''], ['', '', ''], ['', '', ''], ['', '', '']], [1.8, 1.8, 1.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My note says ______. I signed it ______, ______, ______. It stays true for about ______._'));
out.push(p('**Listener task:** which note goes out of date fastest? **Say how long.**'));
out.push(p('**Board clinic:** your teacher writes four bottom lines. Two have no time. The class says what the reader cannot work out.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the four bottoms. Then answer.'));
out.push(box(null, [
  '**FOUR NOTES, FOUR BOTTOMS**',
  table(['The bottom line', 'What the reader knew'], [
    ['_A. Zreik, Sunday, 16.00_', '⚠ **who, when, and how old. Everything.**'],
    ['_A. Zreik, Sunday_', 'who and which day. **Not whether the ladder had come back.**'],
    ['_A.Z._', 'who, if you know him. ⚠ **Nothing about when.**'],
    ['_(nothing)_', '⚠ **nothing at all — and nobody to ask.**'],
  ], [2.6, 3.2]),
  '⚠ **Four notes. The first took four seconds longer to sign than the last. N.M.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which bottom line tells the reader everything?'));
out.push(item('2', 'What could the second reader not work out?'));
out.push(item('3', 'How much longer did the first take to write?'));
out.push(box('Writer\'s box', [
  '**A four-bottoms page is the signature and ⚠ WHAT THE READER KNEW, which is not the same as what the writer wrote.**',
  '⚠ **The second column is the test.** **_A. Zreik, Sunday_ looks complete and is not** — **the reader still cannot tell whether the ladder has come back.** **A signature is judged by what it leaves the reader unable to work out.**',
  '⚠ **And the last line is the whole page:** **four seconds.** **Everything this unit asks for costs seconds, and the book has now said so four times** — **the pen by the telephone, _each_ by hand, the read-back, the time on a signature.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write a four-bottoms page for your own work (**15 words or more**).'));
out.push(table(['The bottom line', 'What the reader knew'], [
  ['', ''],
  ['', ''],
  ['', ''],
  ['', ''],
], [2.6, 3.2]));
out.push(p('⚠ **______________** ______ _(your initials)_'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.**'));
out.push(table(['Check', '✓ / ✗'], [
  ['One bottom with all three parts', ''],
  ['One with no time', ''],
  ['The second column says what the reader could NOT work out', ''],
  ['The seconds, at the bottom', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two students read their best bottom line. The class says what a new man would know from it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a note or paper at your work with no name on it (**20 to 35 words**). What did it say? Who did people ask? What happened?'));
out.push(...lines(5));
out.push(stage('7P', 'Respond', 5));
out.push(p('**Read** your partner\'s work. **Ask your partner:** _Did anybody ever find out who wrote it?_ Write the answer.'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three papers. In how many was the writer never found? **Count them on the board.**'));
out.push(box('Homework', ['Finish your writing. Then **sign and time every note you leave this week** and **write down** whether anybody mentioned it (20 words or more).'], C.lblue, C.navy));

// ======================= CYCLE 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review: the note that saved a morning'));
out.push(p('⚠ **This is the sixth unit of this book and the last of the course.** The four lines, the reader, the done, the not-done, the ask and the signature — and one last problem for the class to talk about together.'));
out.push(p('**You can:** write a whole handover note   ·   **Review:** Units 12.1 to 12.6   ·   **Exam practice:** A2 Key Reading Part 1 and Writing Part 6, at A1 length'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(table(['Say it in English', '✓'], [
  ['**12.1**  The four lines, in order.', ''],
  ['**12.2**  Your top line. A name, not a shift.', ''],
  ['**12.3**  What you did, exactly — where you got to.', ''],
  ['**12.4**  What you did not do, and the because.', ''],
  ['**12.5**  Line four. _Please_ or _must_, and why.', ''],
  ['**12.6**  Your bottom line. Three parts.', ''],
], [5, 1]));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What did the note save?   **A** ten minutes   **B** a morning   **C** a customer'));
out.push(p('**b**  Listen again.   **1** Who actually read it?   **2** Who was it written to?'));
out.push(p('**c**  **Books open.** Read. Then listen again.'));
out.push(dlg('Track 12.13  The man it was not written to', [
  ['Nour', 'Ammar\'s note on Sunday. It saved us a morning.'],
  ['Abu Yasser', 'Which note?'],
  ['Nour', '_To: Samih. I did rows one to three. I did not do row four because the ladder was in the yard. Please do row four when the ladder comes back. A. Zreik, Sunday, 16.00._'],
  ['Abu Yasser', 'Four lines. And?'],
  ['Nour', 'Samih was ill on Monday. Hani came in instead.'],
  ['Ammar', 'Hani cannot read English.'],
  ['Nour', 'Hani cannot read English. He brought it to me at ten past six and I read it to him.'],
  ['Hani', 'I knew it was a note with a name on it, so I knew it mattered.'],
  ['Nour', 'And he brought the ladder in before he started. Row four was done by seven.'],
  ['Ammar', 'But I wrote it to Samih. Samih was not there.'],
  ['Abu Yasser', 'You wrote it to Samih and it worked for Hani. Say why.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Review — the six things from this unit**',
  table(['Cycle', 'You can write'], [
    ['**12.1**', '**To · I did · I did not, because · Please.** **Four lines, about thirty words.**'],
    ['**12.2**', '_To: Samih._ **A person, not a shift.**'],
    ['**12.3**', '_I did rows one to three._ **Where you got to.**'],
    ['**12.4**', '_I did not do row four because the ladder was in the yard._'],
    ['**12.5**', '_Please do row four when the ladder comes back._'],
    ['**12.6**', '_A. Zreik, Sunday, 16.00._ **Three parts.**'],
  ], [1, 5]),
  '⚠ **The new thing here: the note worked for a man who was not its reader and cannot read English.** **Hani brought it to Nour BECAUSE it had a name at the top** — **a note with a name looks like it matters.** **And the four lines were short enough for Nour to read aloud in twenty seconds.**',
  '**Useful words:**  it saved us a morning  ·  he was ill  ·  he brought it to me  ·  a note with a name on it  ·  done by seven',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. One is Ammar. One is Abu Yasser. Say why the note worked for the wrong man.'));
out.push(table(['Ammar says', 'Abu Yasser says'], [[
  'I wrote it to Samih and Samih was not there. ⚠ **I could not have known Hani would come in.**',
  'It had a name on it, so Hani knew it mattered. ⚠ **And it was four lines, so Nour could read it to him in twenty seconds.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs say the two sides for the class — **books closed**.'));
out.push(p('**Listener task:** name the TWO things about the note that made it work for a man who could not read it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a paper at your work that would work even for somebody who was not meant to read it. **Write it.** What makes it work?'));
out.push(table(['The paper', 'Who it is for', 'Why it would work for anybody'], [['', '', ''], ['', '', '']], [1.4, 1.4, 2.4]));
out.push(stage('4R', 'Report – everybody is right', 9));
out.push(p('**The problem — and this time it is not a problem.** Ammar wrote four lines to Samih. Samih was ill. Hani came in, cannot read English, took the note to Nour, and row four was done by seven.'));
out.push(table(['Ammar is right', 'Abu Yasser is right', 'And here is why it worked'], [[
  'He wrote it to one named person and could not have known who would come in. ⚠ **Naming Samih was correct — 12.2 says a note for everybody is a note for nobody.**',
  'It worked for a man who was not named on it and cannot read it. ⚠ **So something about the note was doing more work than the name.**',
  '⚠ **TWO things.** **One: a name at the top made it look like a note that mattered, so Hani picked it up instead of walking past.** **Two: four lines was short enough for Nour to read aloud in twenty seconds.** ⚠ **A name makes a note get picked up. Four lines make it get passed on.**',
]], [1, 1, 1.5]));
out.push(p('**Then tell the class:**  _______ is right because _______. _______ is right because _______. And it worked because _______._'));
out.push(p('⚠ **The words to keep:** _I knew it was a note with a name on it, so I knew it mattered._'));
out.push(p('⚠ **And this is the last finding in the course, so it is the one that is not a warning.** **Eleven units have shown you things going wrong with nobody at fault** — **Abu Raed\'s gate book, Hani\'s eleven swaps, the roll behind the door, Fouad\'s shelf map, a slip under a pad, four men and an empty sheet, two true sheets and a two-hour hole, a rule everybody breaks, a price on a wall.** ⚠ **This one went RIGHT, with nobody expecting it, for a man who could not read it.**'));
out.push(p('⚠ **That is what the four lines are for.** **A note short enough to be read aloud by somebody else, with a name on it so it gets picked up, and a _please_ at the end so something happens.** **It is the smallest thing in this book and it is the only one that has ever saved anybody a morning.**'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1, at A1 length)', 10));
out.push(p('Read the five notices. What does each one say? Choose **A**, **B** or **C**.'));
out.push(box(null, [
  '**1**  _NOTES: PUT A NAME AT THE TOP_   **A** Sign at the bottom only.   **B** Say who the note is for.   **C** Do not write notes.',
  '**2**  _SAY WHERE YOU GOT TO, NOT WHAT YOU WORKED ON_   **A** "I did the shelves" is enough.   **B** Say which rows you finished.   **C** Do not say anything.',
  '**3**  _"I DID NOT" NEEDS A BECAUSE_   **A** Do not admit it.   **B** Give the reason with it.   **C** Tell somebody instead.',
  '**4**  _PLEASE FOR WORK. MUST FOR SAFETY._   **A** Use must for everything.   **B** Use please for everything.   **C** Two words for two different things.',
  '**5**  _SIGN WITH A DAY AND A TIME_   **A** Initials are enough.   **B** The reader needs to know how old it is.   **C** Do not sign notes.',
]));
out.push(box('Writer\'s box', [
  '**Exam practice — A2 Key Writing Part 6, at A1 length.** **Four sentences, about 30 words.**',
  '⚠ **This is the last exam task in the book and it is the four-line note itself.** **The shape the examination wants and the shape a handover needs are the SAME SHAPE.**',
  '⚠ **To · I did · I did not, because · Please.** **About thirty words. A name and a time at the bottom.**',
  '**That is what you have been writing for twelve units.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 8));
out.push(p('Write a handover note (**four sentences, about 30 words**). All four lines, and sign it with a day and a time.'));
out.push(p('**To:** ______________   _I did ______________. I did not ______________ because ______________. Please ______________._   **______, ______________, ______**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Change books. **Point at the line. Read it aloud. Say the one thing that is missing.** Count the sentences: four.'));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6, at A1 length)', 12));
out.push(p('Write the handover note you will actually leave tomorrow (**four sentences, about 30 words**). A name at the top, where you got to, what you did not do and why, one ask, and your signature with a time.'));
out.push(...lines(5));
out.push(box('Homework', ['Finish your note. ⚠ **Then leave it for a real person tomorrow** and write down what they did (20 words or more).'], C.lblue, C.navy));
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Words.** Choose a, b or c.'));
[
  '1  A note has ___ lines.   a) two   b) four   c) six',
  '2  The top line is ___.   a) NOTE   b) To: a name   c) For the next shift',
  '3  Which is exact?   a) I did the shelves   b) I did most of it   c) I did rows one to three',
  '4  I did not do row four ___ the ladder was in the yard.   a) but   b) because   c) so',
  '5  I did not ___ row four.   a) did   b) do   c) done',
  '6  For work you write ___.   a) you must   b) please   c) nothing',
  '7  For safety you write ___.   a) please   b) you must not   c) nothing',
  '8  The bottom line needs a name, a day and ___.   a) nothing else   b) a time   c) your job',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 12.15** Listen. Write the answer.   **1** Who it is to: ______   **2** What she did: ______   **3** What she did not do: ______   **4** Why not: ______   **5** What she asks: ______   **6** The time she signed it: ______'));
out.push(p('**C  Reading.** Read the four bottoms at 12.6 again. Which one tells the reader everything? What could the second reader not work out?'));
out.push(p('**D  Writing.** Write a four-line handover note (**about 30 words**). To, what you did, what you did not do and why, one ask, and sign it with a day and a time.'));
out.push(...lines(4));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Hala', '_(reading her note aloud)_  To Samih. I did the morning bake, eighty loaves. I did not wash the trays, because the water went off at half past five. Please wash them before you start, and put the eighty loaves out at seven. H. Mourad, Friday, 09.15.'],
  ['Samih', 'Four lines and a time.'],
  ['Hala', 'Four lines and a time. And if you are not in, whoever is will take it to Nour.'],
  ['Samih', 'Because it has a name on it.'],
  ['Hala', 'Because it has a name on it.'],
]));
out.push(sp());
out.push(box('I can…  (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '**12.1**  write a four-line note in about thirty words',
  '**12.2**  put a name at the top — a person, not a shift',
  '**12.3**  say exactly where I got to, not what I worked on',
  '**12.4**  say what I did not do AND why, flat, with no apology',
  '**12.5**  ask for one thing, with _please_ for work and _must_ for safety',
  '**12.6**  sign it with my name, the day and the TIME',
  '**12.7**  write a note that works even for the man it was not written to',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Ahead at A2 — three words you will meet again', [
  '⚠ **' + AHEAD_AT_A2 + '** — **all three come back at A2 Business.**',
  '**handover** — here it is four lines on a bench. **At A2 it is a document you write before a week off, with cover arranged.**',
  '**sign off** — here it is your initials and a time. **At A2 it is approving somebody else\'s work and taking responsibility for it.**',
  '**urgent** — here it is a word you might use on line four. **At A2 you have to justify it, because at A2 everybody writes it.**',
], C.lteal));
out.push(sp());
out.push(p('**Words in this unit (22):** ' + LEXIS, { size: 18, color: '595959' }));
out.push(p('**Ahead at A2 (3):** ' + AHEAD_AT_A2, { size: 18, color: '595959' }));
out.push(sp());
out.push(box('The end of Book 2, and of A1', [
  '**Twelve units. Eighty-four cycles. One hundred and eighty hours.** **In Unit 1 you could not write your own name in English. In Unit 12 you wrote four lines that a man who cannot read English took to somebody who could, and row four was done by seven.**',
  '⚠ **Eleven of the twelve review cycles showed you something going wrong with nobody at fault.** **Abu Raed\'s gate book. Hani\'s eleven swaps. The roll behind the door. Fouad\'s shelf map. A slip under a pad. The driver and the four minutes. Four men and an empty sheet. The customer who never says please. Two true sheets and a two-hour hole. A rule everybody breaks. A price on a wall.** **The twelfth went right.**',
  '⚠ **If you keep one thing from this course, keep this:** **say the number, say where you got to, say what you did not do and why, name the person, and put a time on it.** **None of that is grammar.** **All of it is why the grammar was worth learning.**',
  '**Next: the End-of-Course Test** — Reading, Writing, Listening and Speaking, one hundred marks, over all twelve units, in the shape of the examination you will sit at the end of the next course. ⚠ **To prepare, go through the "I can…" box at the end of every unit and find the lines you ticked 😐.** **Those lines are your week. The rest of the book you already have.**',
  '⚠ **And then A2 Business, where you meet Nour and Abu Yasser again** — **and where the delivery note you learned to sign in Unit 5 becomes an email you have to write about it.**',
], C.lorange, C.orange));

if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A1 · Book 2 · Syria Edition · Unit 12 · Student\'s Book');
module.exports = out;
