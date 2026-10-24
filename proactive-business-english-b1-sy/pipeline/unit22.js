// Proactive Business English B1 · Syria Edition · Book 2 · Unit 22 — Student's Book
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, lesson, box, dlg, table, lines, item, bullet, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const LEXIS = 'an appraisal · a review meeting · a self-assessment · a probation period · a standard of work · a performance note · a job description · a notice period · a responsibility · an achievement · a shortcoming · a development need · a strength · a weakness · to take on · to grow into · a competency · a rating scale · a box to tick · a free-text box · a worked example · a checkable claim · to substantiate · evidence of · a referee · a probation review · to confirm in post · a training record · a career step · an interview panel';
const BACK_AT_B1 = 'interview · trainee · line manager';

// ---------- UNIT OPENER ----------
out.push(h1('Unit 22  Interviews, Appraisals and Self-Presentation'));
out.push(p('_Proactive Business English · B1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**22.1**  prepare four answers, and know the fifth you cannot prepare',
  '**22.2**  say which part of the work is the work',
  '**22.3**  give a number you cannot prove, honestly',
  '**22.4**  answer the question you hope will not be asked, before it is asked',
  '**22.5**  ask three questions back, and know what each one tells you',
  '**22.6**  write the page a stranger could check',
  '**22.7**  Review & Mediate: the three lines nobody can fail',
], C.lblue, C.navy));
out.push(sp());
out.push(box('⚠ Two interviews in one week, and both of them are ours', [
  '**It is 1 July. Lina Barakat has been here six months** and her probation review is on Thursday — ⚠ **the first one this company has ever held**, because Mr Attar asked in March who had agreed her duties and nobody could answer.',
  '⚠ **And on Monday we interview two people for the night marking.** The hundred-carton order of 26 March was done by one man on a generator between one and four, and if Ms Tannous takes eight hundred this year it cannot be done that way again.',
  '**So this unit is both sides of the same table.** ⚠ **The four prepared answers and the fifth that cannot be prepared; the question you hope will not be asked; the three questions to ask back** — ⚠ **and a self-appraisal written so that a stranger could check every line of it.**',
], C.lyellow, C.orange));

// ======================= CYCLE 22.1 =======================
out.push(pb());
out.push(h2('22.1  The four questions, and the fifth'));
out.push(p('**Function:** preparing the answers you can prepare   ·   **Grammar:** the prepared answer — _what I did · how · with what result_   ·   **Pronunciation:** a prepared answer that does not sound recited'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of the last time somebody asked you about your work in a formal way. Say what they asked first.'));
out.push(p('**b**  Which is an answer? _I am very hard-working. · I rewrote the gate sheet in my twelfth week and the shortage queries stopped._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the four questions?   **A** about money   **B** what you have done, how, with what result, and what went wrong   **C** about the future'));
out.push(p('**b**  Listen again. **1** What is the fifth question? **2** What does Nour say about preparing it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.1  "Four you can prepare and one you cannot"', [
  ['Lina', 'What will you ask me on Thursday?'],
  ['Nour', '⚠ **Four questions, and you can prepare all four.** What have you done. How you did it. What came of it. ⚠ **And what went wrong and what you did about it.**'],
  ['Lina', 'That is the one everybody dreads.'],
  ['Nour', '⚠ **It is the easiest of the four, because you have an answer and most people have none.** The nine scrap cartons were marked from stencils you did not choose, and you found it. ⚠ **You also sent the April date list a day late and Ms Tannous telephoned about it.**'],
  ['Lina', 'Should I say that?'],
  ['Nour', '⚠ **Say it before I do.** A shortcoming you raise yourself is information; ⚠ **the same shortcoming raised by me is a disagreement.**'],
  ['Lina', 'And the fifth question?'],
  ['Nour', '⚠ **I do not know what it is. That is what makes it the fifth.** ⚠ **It will be something I think of in the room, because of something you say** — and it is the only part of the hour that is not a performance.'],
  ['Lina', 'Then how do I prepare for it?'],
  ['Nour', '⚠ **You cannot, and you should not try.** ⚠ **What you can do is have the facts of your own six months in your head** — dates, numbers, what happened afterwards — **so that whatever I ask, you are not inventing.**'],
  ['Lina', 'Dates and numbers for everything?'],
  ['Nour', '⚠ **For four things, not forty.** ⚠ **Four examples with dates and figures will carry any interview in this trade**, and twenty examples with none will carry nothing. ⚠ **A prepared answer is not a speech; it is four facts you cannot be shaken off.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The four questions, and the fifth**',
  table(['The question', 'The shape of the answer'], [
    ['**what have you done?**', '**the thing, with a date**'],
    ['**how did you do it?**', 'the method, in one sentence'],
    ['**what came of it?**', '⚠ **a number, or what stopped happening**'],
    ['⚠ **what went wrong, and what did you do?**', '⚠ **one real failure, raised by you first**'],
    ['⚠ **the fifth**', '⚠ **unknowable — it comes out of something you say**'],
  ], [2.2, 3.3]),
  '⚠ **The fourth question is the easiest, because you have an answer and most people have none.** ⚠ **A shortcoming you raise yourself is information; the same shortcoming raised by the other person is a disagreement.**',
  '⚠ **The fifth question cannot be prepared and should not be attempted.** ⚠ **It comes out of something you say in the room** — and it is the only part of the hour that is not a performance.',
  '⚠ **What you prepare instead is the material: four examples with dates and numbers.** ⚠ **Four examples with figures will carry any interview in this trade; twenty with none will carry nothing.**',
  '⚠ **A prepared answer is not a speech; it is four facts you cannot be shaken off.** **Say the thing, the date, the method and the result, and then stop** — the stopping is half of it.',
  '⚠ **And an adjective is not an answer.** *I am very hard-working* can be said by anybody about anybody. ⚠ *I rewrote the gate sheet in my twelfth week and the shortage queries stopped* **can be checked**, and that is the only difference that matters.',
  '**Practise:** Prepare the four answers about your own work. ⚠ Put a date on each and a number on at least two.',
  '**Useful phrases:**  what I did was …  ·  the way I did it was …  ·  what came of it was …  ·  the thing that went wrong was …  ·  and what I did about it  ·  four facts, not a speech',
  '**Pronunciation – prepared, not recited.** 🔊 **Track 22.2** Listen to the same answer twice: _I rewrote the gate sheet in my twelfth week, and the shortage queries stopped._ ⚠ **The second time with a short pause before the result and no rise at the end.** **A recited answer has an even rhythm; a prepared one has a pause where the speaker is remembering.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the four questions; B answers with dates and numbers. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'What have you done?'],
  ['B', '__________, in __________.'],
  ['A', 'How?'],
  ['B', '__________.'],
  ['A', 'And what came of it?'],
  ['B', '⚠ __________ — __________.'],
  ['A', '⚠ And what went wrong?'],
  ['B', '⚠ __________, and what I did about it was __________.'],
]));
out.push(table(['Role card 1 — six months, four facts', 'Role card 2 — the shortcoming first'], [[
  'Lina\'s four: ⚠ **the gate-sheet line in her twelfth week** (the shortage queries stopped); the first-off report of 27 March (**three faults, two with one cause**); the four *unless* branches on the bench page; ⚠ **and asking where revision 1 came from, which produced the heading.**',
  'A asks nothing about failure. ⚠ B\'s job is to raise one anyway — **the April date list sent a day late, and Ms Tannous telephoned** — and to say what changed afterwards. ⚠ **A shortcoming raised by the candidate is information; raised by the interviewer it is a disagreement.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the four answers, and mark which carry a date and which a number. ⚠ Then say who raised the failure.'));
out.push(PHRASE_CARD(['what I did was …', 'the way I did it', 'what came of it', 'what went wrong', 'and what I did about it', 'four facts, not a speech']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Prepare your own four. Every line needs a date, and at least two need a number.'));
out.push(table(['', 'The answer', 'Date', 'Number'], [
  ['What I have done', '', '', ''],
  ['How I did it', '', '', ''],
  ['What came of it', '', '', ''],
  ['⚠ **What went wrong, and what I did**', '', '', ''],
], [1.9, 2.6, 0.8, 0.8]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _What I did was _______, in _______. What came of it was _______. What went wrong was _______, and I _______._'));
out.push(p('**Listener task:** count the answers in the room with a number in them. ⚠ Then count the failures that the speaker raised before anybody asked.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am a good communicator_ and a failure described without what was done about it. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**SIX MONTHS — THE FOUR THINGS, WITH THEIR DATES. 1 July. L. Barakat, for her probation review.**',
  table(['What I did', 'When', 'How', 'What came of it'], [
    ['found that the gate-sheet line said *items* and everybody wrote cartons', '⚠ **week 12, 24 March**', 'did exactly what the line said on my first gate sheet and got 360', '⚠ **two customer shortage queries a year stopped; the line now says cartons**'],
    ['the first-off report on the export carton', '27 March', 'made one carton exactly as written and looked at it', '⚠ **three faults found before ninety-nine cartons were made; two had one cause**'],
    ['the four *unless* branches on the bench page', '31 March', 'asked of each step what would be missing at two in the morning', 'nine hand-marked cartons will not happen again; ⚠ **the night shift now has a stop and a record**'],
    ['⚠ **asked four people where revision 1 came from**', '⚠ **26 April**', 'asked where they thought it came from, then who signed it', '⚠ **the heading now names the office and asks to be corrected**'],
  ], [2, 0.9, 2.1, 2.4]),
  '⚠ **And what went wrong.** The April date list went to Ms Tannous on the 21st and should have gone by the 20th. ⚠ **She telephoned on the 22nd, which is the only time she has ever telephoned about a date.** ⚠ **I now write the list on the 18th and it sits on the desk for two days.**',
  '⚠ **Four things in six months is not many and I have written only four.** ⚠ **I could have written eleven**, and the other seven are things anybody here would have done in the same week — **answering the telephone, typing what I was given, learning where things are.**',
  '⚠ **Every line above has a date and three of the four have a number**, so that anybody who wants to check one can: the gate sheet is in the file, the first-off carton is still on the shelf in the fourth store, and the bench page is on the bench.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What went wrong, and what was changed because of it?'));
out.push(item('2', 'Why has the writer written four things and not eleven?'));
out.push(item('3', 'How could a reader check the four claims?'));
out.push(box('Writer\'s box', [
  '**Six months in four things — four parts:** **a table: *what I did · when · how · what came of it*** → ⚠ **what went wrong, raised by you** → ⚠ **why you have written four and not eleven** → **how a reader could check each line.**',
  '⚠ **Four, with dates. Not eleven.** ⚠ **The other seven are things anybody would have done in the same week** — answering the telephone, typing what you were given, learning where things are — **and listing them makes the four invisible.**',
  '⚠ **Put the result as what stopped happening.** ⚠ *Two customer shortage queries a year stopped.* **A result that is a cessation is stronger than a result that is an activity**, and it is usually countable.',
  '⚠ **Raise the failure yourself and give the date and the consequence.** ⚠ *She telephoned on the 22nd, which is the only time she has ever telephoned about a date.* **Then say what you do differently now, in the present simple** — *I write the list on the 18th.*',
  '⚠ **Say how each claim could be checked.** ⚠ *The gate sheet is in the file, the first-off carton is on the shelf, the bench page is on the bench.* **A claim with a location is a different kind of sentence from a claim with an adjective.**',
  '⚠ **And no adjectives about yourself anywhere.** ⚠ **Not one line of this page says what the writer is like**, and a reader finishes it knowing exactly what she is like.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own *six months in four things* (**60 words or more**). Use the frame.'));
out.push(p('**______________ — THE FOUR THINGS, WITH THEIR DATES. ______________. ______________.**   ______________ | ⚠ **______________** | ______________ | ⚠ **______________**   ______________ | ______________ | ______________ | ⚠ **______________**   ______________ | ______________ | ______________ | ______________   ⚠ **______________** | ⚠ **______________** | ______________ | ⚠ **______________**   ⚠ **And what went wrong.** ______________. ⚠ ______________. ⚠ **I now ______________.**   ⚠ **______________ things in ______________ is not many and I have written only ______________.** ⚠ I could have written ______________, and the others are ______________.   ⚠ **Every line has ______________ and ______________ have ______________**, so that anybody who wants to check one can: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(box('Band 3 and one move — name the reader, then quote, ask, stop', [
  '"**I am reading this as a stranger who has to check one line of it by this afternoon.** The box says say how each claim could be checked. ⚠ **Your second line has no date and nothing I could look at — where would I go?**"',
  '⚠ In this unit the reader to name is ⚠ **a stranger with an hour and no knowledge of you** — an auditor, a new manager, somebody on an interview panel. ⚠ **Every rule in Unit 22 comes from that reader**, and a page written for somebody who already knows you will fail all of them.',
], C.grey, C.navy));
out.push(sp());
out.push(p('Swap books. Ask one question: **where would I go to check this?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Four things, not eleven', ''],
  ['A date on every line', ''],
  ['A result that is a number or a cessation', ''],
  ['The failure raised by the writer, with what changed', ''],
  ['Where each claim could be checked', ''],
  ['No adjectives about yourself', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what went wrong*. The class says what changed afterwards, and in which tense it is written.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a time you were asked about your own work formally (**140 to 180 words**). Say what you were asked, what you answered, what you had prepared, and what the unexpected question was.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there a date on every claim?_   ? _what was the question nobody could have prepared?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many did the unprepared question turn out to be the one that decided it? Usually two of three — ⚠ **and in both it came out of something the speaker had said.**'));
out.push(box('Homework', ['Write your final text. Then prepare your four answers about your own work, each with a date, two with a number, and one of them a failure (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.2 =======================
out.push(pb());
out.push(h2('22.2  It is the writing that takes the time'));
out.push(p('**Function:** saying which part of the work is the work   ·   **Grammar:** the cleft — _it is … that · what … is_   ·   **Pronunciation:** the stress that makes a cleft work'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a job of yours that other people describe wrongly. Say which part of it actually takes the time.'));
out.push(p('**b**  Complete: _______ takes the time is the writing. · _______ the job is not the marking, it is the checking._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour say her job actually is?   **A** typing   **B** writing, and the typing is what it looks like   **C** telephoning'));
out.push(p('**b**  Listen again. **1** What does Mr Attar think the job is? **2** How does Nour correct him without contradicting him?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.3  "It is the writing that takes the time"', [
  ['Mr Attar', 'For the record: what do you actually do here?'],
  ['Nour', '⚠ **It looks like typing and it is writing.**'],
  ['Mr Attar', 'Explain that.'],
  ['Nour', '⚠ **What takes the time is deciding what the sentence has to say and to whom.** The typing of a bench page is twenty minutes. ⚠ **The deciding is two days and a first-off.**'],
  ['Mr Attar', 'And how much of your week is that?'],
  ['Nour', '⚠ **About a day and a half of five.** The rest is the telephone, the orders and the gate.'],
  ['Mr Attar', 'Most people in your position would have said *administration*.'],
  ['Nour', '⚠ **Administration is the word for the desk and not for the work.** ⚠ *It is the writing that stops the nine cartons, not the filing* — and a job description that says administration cannot be used to hire anybody.'],
  ['Mr Attar', 'So what should it say?'],
  ['Nour', '⚠ ***Writes the instructions, the programmes and the letters that commit the company, and keeps the records that prove them.*** ⚠ **Nineteen words, and a stranger could tell from it what would go wrong if nobody did it.**'],
  ['Mr Attar', 'That is a test I had not thought of.'],
  ['Nour', '⚠ **It is the only one I use.** ⚠ **Read a job description and ask what breaks if this person is away for a month.** *Administration* breaks nothing you can name; ⚠ **the instructions and the letters break everything, in about nine days.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The cleft — saying which part is the work**',
  table(['Form', 'Example'], [
    ['**it is … that …**', '**It is** the writing **that** takes the time.'],
    ['**what … is …**', '**What** takes the time **is** deciding what the sentence has to say.'],
    ['**it looks like X and it is Y**', '⚠ **It looks like typing and it is writing.**'],
    ['**not X, but Y**', '*It is the writing that stops the nine cartons, **not** the filing.*'],
    ['⚠ **the test**', '⚠ **what breaks if this person is away for a month?**'],
  ], [2, 3.3]),
  '⚠ **A cleft puts one part of the work in the light and leaves the rest where it is.** ⚠ *It looks like typing and it is writing* **concedes the appearance and corrects the substance in nine words.**',
  '⚠ **Give the proportion of the week.** ⚠ *About a day and a half of five.* **A cleft without a figure is a claim about importance; a cleft with one is a description of a job.**',
  '⚠ **Refuse the word for the desk.** ⚠ *Administration is the word for the desk and not for the work* — **and a job description that says administration cannot be used to hire anybody.**',
  '⚠ **The test of any job description: what breaks if this person is away for a month?** ⚠ *Administration* breaks nothing you can name; ⚠ *the instructions and the letters* break everything, in about nine days.',
  '⚠ **One cleft at a time.** Two in a paragraph and neither is heard: **the form exists to point at one thing**, and pointing at three points at nothing.',
  '**Practise:** Write the cleft for each job. 1 your own 2 a storeman 3 a driver 4 a shop assistant 5 a teacher',
  '**Useful phrases:**  it is … that takes the time  ·  what … is …  ·  it looks like X and it is Y  ·  about a day and a half of five  ·  that is the word for the desk  ·  what breaks if I am away a month?',
  '**Pronunciation – the stress that makes a cleft work.** 🔊 **Track 22.4** Listen: _it is the WRITing that takes the time._ ⚠ **One heavy stress and everything after it flat.** **Stress *time* as well and the sentence says nothing** — the whole grammar is there to carry one stress. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A describes a job in one word; B finds the cleft. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'For the record: what do you actually do?'],
  ['B', '⚠ It looks like __________ and it is __________.'],
  ['A', 'Explain that.'],
  ['B', '⚠ What takes the time is __________. The __________ is __________. ⚠ The __________ is __________.'],
  ['A', 'And how much of your week?'],
  ['B', '⚠ About __________ of __________.'],
  ['A', 'Most people would have said __________.'],
  ['B', '⚠ That is the word for __________ and not for the work.'],
]));
out.push(table(['Role card 1 — typing and writing', 'Role card 2 — what breaks in a month'], [[
  '⚠ **It looks like typing and it is writing.** The typing of a bench page is twenty minutes; ⚠ **the deciding is two days and a first-off** — about a day and a half of five. The job description: *writes the instructions, the programmes and the letters that commit the company, and keeps the records that prove them.*',
  'A offers four one-word job descriptions. ⚠ B asks one question of each: ⚠ **what breaks if this person is away for a month?** ⚠ **If nothing breaks that can be named, the word is for the desk and not for the work** — and the real answer, with its nine days, is the job description.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the cleft and the proportion of the week. ⚠ Then write what would break in a month, with how long it would take to break.'));
out.push(PHRASE_CARD(['it is … that takes the time', 'what … is …', 'it looks like X and it is Y', 'a day and a half of five', 'the word for the desk', 'what breaks in a month?']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **four** jobs you know, including your own. Write the one-word version, the cleft, and what breaks.'));
out.push(table(['The job', 'The one-word version', 'The cleft', 'What breaks in a month'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.1, 1.2, 2, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _It looks like _______ and it is _______. What takes the time is _______, about _______ of five. If I were away a month, _______ would break, in about _______._'));
out.push(p('**Listener task:** count the clefts in the room with a proportion attached. ⚠ Then ask, for each one-word version, what it would break.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for two clefts in one sentence and a cleft with no figure. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the two job descriptions, and answer the questions.'));
out.push(box(null, [
  '**THE NIGHT MARKER — TWO VERSIONS OF THE SAME JOB. 2 July. N. Mansour.**',
  '**Version 1, as it was written in the advertisement in April.** _Required: a reliable worker for stencil marking. Must be hard-working, punctual and able to work without supervision. Some night work. Experience preferred._',
  '⚠ **What is wrong with it.** ⚠ **Every word of it is true and nothing in it is a job.** *Reliable, hard-working, punctual, able to work without supervision* — ⚠ **four adjectives, and no applicant will fail to claim all four.** ⚠ **It also hides the only hard thing about the work**, which is that the press runs on the generator from one until four and the person is alone in the building.',
  '**Version 2.**',
  table(['', 'The line'], [
    ['**the work**', '⚠ **Marks export cartons from a written instruction, between one and four in the morning, alone.**'],
    ['⚠ **what takes the time**', '⚠ **It looks like pressing and it is checking: the stencil against the code on the order, every carton, about four seconds each.**'],
    ['**the irreversible part**', '⚠ **A carton marked with the wrong code is scrap. There are nine in the fourth store from January.**'],
    ['**what breaks if nobody does it**', '⚠ **The export orders stop. There is no second press and no second shift.**'],
    ['**what we will teach**', 'the press, the branches on the page, and the handover note'],
    ['⚠ **what we cannot teach**', '⚠ **stopping. The page says stop in four places and the work pays nothing for stopping.**'],
  ], [1.6, 4.6]),
  '⚠ **Version 2 is forty words longer and it asks one question that version 1 could not ask**: ⚠ **can you stop, alone, at two in the morning, with ninety cartons left and nobody to telephone?**',
  '⚠ **Two of the three applicants withdrew when they read version 2**, and the third asked what happened to the man who marked the nine cartons in January. ⚠ **That question is the best thing either applicant said**, and it came from a sentence we nearly did not print.',
], 'FFFFFF', C.navy));
out.push(item('1', 'What is wrong with version 1, even though it is all true?'));
out.push(item('2', 'What question can version 2 ask that version 1 could not?'));
out.push(item('3', 'What happened when the applicants read version 2?'));
out.push(box('Writer\'s box', [
  '**Two versions of a job — four parts:** **version 1 as it stands** → ⚠ **what is wrong with it, with the adjectives counted** → **version 2 as a table: *the work · what takes the time · the irreversible part · what breaks · what we teach · what we cannot teach*** → ⚠ **what changed when people read it.**',
  '⚠ **Count the adjectives in version 1 and say that nobody will fail to claim them.** ⚠ *Four adjectives, and no applicant will fail to claim all four.* **An advertisement made of adjectives selects nobody.**',
  '⚠ **Use a cleft for the line nobody expects.** ⚠ *It looks like pressing and it is checking* — **four seconds a carton, every carton** — and the proportion makes it a description instead of a slogan.',
  '⚠ **Print the hard thing.** ⚠ *Between one and four in the morning, alone.* **The hard fact is what version 1 hid**, and hiding it buys an applicant who leaves in three weeks.',
  '⚠ **Separate what you will teach from what you cannot.** ⚠ *We cannot teach stopping. The page says stop in four places and the work pays nothing for stopping.* **That line is the whole of the job and it belongs in the advertisement.**',
  '⚠ **And record what the honesty cost and bought.** ⚠ *Two of three withdrew, and the third asked what happened to the man in January.* **Two withdrawals before the work is better than one resignation after it.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write two versions of a job at your work (**60 words or more**). Use the frame.'));
out.push(p('**______________ — TWO VERSIONS OF THE SAME JOB. ______________. ______________.**   **Version 1, as it stands.** _______________________   ⚠ **What is wrong with it.** ⚠ Every word is true and ______________. ______________ adjectives, and ⚠ **no applicant will fail to claim ______________.** ⚠ **It also hides ______________**, which is ______________.   **Version 2.**   **the work** | ⚠ **______________**   ⚠ **what takes the time** | ⚠ **It looks like ______________ and it is ______________: ______________**   **the irreversible part** | ⚠ **______________**   **what breaks if nobody does it** | ⚠ **______________**   **what we will teach** | ______________   ⚠ **what we cannot teach** | ⚠ **______________**   ⚠ **Version 2 asks one question version 1 could not**: ⚠ **______________?**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be somebody deciding whether to apply** — then ask one question: **what is the hard part, and have you printed it?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['The adjectives in version 1, counted', ''],
  ['A cleft with a proportion in version 2', ''],
  ['The hard fact printed, not hidden', ''],
  ['What breaks if nobody does it', ''],
  ['What you cannot teach', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what we cannot teach*. The class says whether they would apply.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a job that is described wrongly (**140 to 180 words**). Say what it looks like, what it is, what proportion of the week the real work is, and what would break in a month.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there one cleft with a figure?_   ? _what would break in a month, and how fast?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is the real work invisible from outside? Usually all three — ⚠ **and in two of three the person has never said so to anybody who could change the job description.**'));
out.push(box('Homework', ['Write your final text. Then rewrite your own job description in one sentence that would tell a stranger what breaks if you are away a month (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.3 =======================
out.push(pb());
out.push(h2('22.3  About, roughly, out of'));
out.push(p('**Function:** giving a number you cannot prove   ·   **Grammar:** _about · roughly · of the order of · X out of Y · in the region of_   ·   **Pronunciation:** the approximation said without apology'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a figure about your own work that you believe but cannot prove. Say it with *about*.'));
out.push(p('**b**  Which can be said in an interview? _I saved the company a great deal of money. · It stopped about two shortage queries a year; I have not costed them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Nour tell Lina about numbers she cannot prove?   **A** leave them out   **B** give them with *about*, and say what you have not counted   **C** round them up'));
out.push(p('**b**  Listen again. **1** What is wrong with *a great deal of money*? **2** What does *out of* do that a percentage does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.5  "About two a year, and I have not costed them"', [
  ['Lina', 'May I say that the gate-sheet change saved money? I am sure it did.'],
  ['Nour', 'How much?'],
  ['Lina', 'I have no idea. It stopped the shortage queries.'],
  ['Nour', '⚠ **Then say what you know and mark the edge of it.** *It stopped about two shortage queries a year; ⚠ **I have not costed them.***'],
  ['Lina', 'That sounds weak next to *saved the company money*.'],
  ['Nour', '⚠ **It sounds weak and it cannot be taken away from you.** *A great deal of money* invites one question — **how much?** — ⚠ **and the answer *I do not know* undoes the whole sentence and some of the ones round it.**'],
  ['Lina', 'How approximate may I be?'],
  ['Nour', '⚠ **As approximate as the truth is, and no more.** *About two a year* if you counted two in six months. ⚠ *Roughly* for a figure you have estimated. ⚠ *In the region of* for something somebody told you. **And never *approximately* about a thing you counted exactly.**'],
  ['Lina', 'And the three faults in the first-off?'],
  ['Nour', '⚠ **Three of three. You counted them.** ⚠ **Say *three*, flatly, with no *about* in front of it** — because an *about* in front of an exact figure makes a reader doubt the exact ones too.'],
  ['Lina', 'What about *out of*?'],
  ['Nour', '⚠ ***Out of* is the strongest form available to somebody with small numbers.** *Nine cartons out of a hundred.* *Two shortage queries out of about forty deliveries.* ⚠ **A percentage hides the size of the sample and *out of* shows it** — and at our size the sample is always the interesting half.'],
  ['Lina', 'Even when it makes the number look small?'],
  ['Nour', '⚠ **Especially then.** ⚠ **Four out of eleven is believable and thirty-six per cent of a year is not**, and the second one will be asked about for twenty minutes.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Approximation, honestly**',
  table(['Form', 'When'], [
    ['**about**', 'a figure you counted roughly, or counted once'],
    ['**roughly**', 'a figure you have estimated from something else'],
    ['**in the region of**', '⚠ **a figure somebody else gave you**'],
    ['⚠ **X out of Y**', '⚠ **small numbers — it shows the sample**'],
    ['⚠ **nothing at all**', '⚠ **a figure you counted exactly: say *three*, flatly**'],
  ], [1.9, 3.6]),
  '⚠ **Say what you know and mark the edge of it.** ⚠ *It stopped about two shortage queries a year; I have not costed them.* **The second half is what makes the first half usable.**',
  '⚠ ***A great deal of money* invites one question — how much? — and the answer *I do not know* undoes the whole sentence and some of the ones round it.** **An unquantified claim is a liability and not an advantage.**',
  '⚠ **Never put *about* in front of a figure you counted exactly.** ⚠ **An *about* on an exact figure makes a reader doubt the exact ones too** — *three of three; say three.*',
  '⚠ ***Out of* is the strongest form available to somebody with small numbers.** ⚠ **A percentage hides the size of the sample and *out of* shows it** — *nine out of a hundred; four out of eleven.*',
  '⚠ **And *out of* is best exactly when it makes the figure look small.** ⚠ **Four out of eleven is believable and thirty-six per cent of a year is not**, and the second will be asked about for twenty minutes.',
  '**Practise:** Give each honestly. 1 a saving you cannot cost 2 a figure you counted once 3 a figure somebody told you 4 a figure you counted exactly 5 a small proportion',
  '**Useful phrases:**  about two a year  ·  roughly  ·  in the region of  ·  four out of eleven  ·  I have not costed it  ·  three of three — say three',
  '**Pronunciation – the approximation without apology.** 🔊 **Track 22.6** Listen: _it stopped about two shortage queries a year; I have not costed them._ ⚠ **Both halves at the same speed and the same volume.** **Drop your voice on the second half and it becomes an apology** — and an apologised figure is heard as a weak one. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes an unquantified claim; B finds the honest figure. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'May I say that __________ saved __________?'],
  ['B', 'How much?'],
  ['A', 'I have no idea. It __________.'],
  ['B', '⚠ Then say what you know and mark the edge: *it __________ about __________; ⚠ **I have not __________.***'],
  ['A', 'That sounds weak.'],
  ['B', '⚠ It sounds weak and ⚠ **it cannot be taken away from you.** *__________* invites one question — __________?'],
  ['A', 'And the __________ I counted exactly?'],
  ['B', '⚠ Say __________, flatly, with no *about* in front of it.'],
]));
out.push(table(['Role card 1 — the gate sheet', 'Role card 2 — out of, not per cent'], [[
  '*It saved money* becomes ⚠ *it stopped about two shortage queries a year; I have not costed them.* And the first-off: ⚠ **three faults of three — counted, so no *about*.** ⚠ **The second half of each sentence is what makes the first half usable.**',
  'A gives four figures as percentages. ⚠ B converts each to *out of*: thirty-six per cent becomes ⚠ **four out of eleven**; nine per cent becomes **nine out of a hundred.** ⚠ **A percentage hides the sample and at our size the sample is the interesting half** — and the small-looking version is the believable one.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the claim before and after. ⚠ Then mark every figure *about*, *roughly*, *in the region of*, *out of* or **exact**.'));
out.push(PHRASE_CARD(['about two a year', 'roughly', 'in the region of', 'four out of eleven', 'I have not costed it', 'three of three — say three']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take **five** figures about your own work. Mark how you know each, and write it in the right form.'));
out.push(table(['The figure', 'How I know it', 'The form to use', 'What I have not counted'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.5, 1.4, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _The figure is _______. I know it because _______, so I say _______. What I have not counted is _______._'));
out.push(p('**Listener task:** count the figures in the room that carry *about* when they were counted exactly. ⚠ Then find any claim with no figure at all, and ask *how much?*'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _approximately three_ where three were counted, and a percentage of eleven. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE FIGURES IN MY SIX MONTHS, AND HOW I KNOW EACH ONE. 3 July. L. Barakat.**',
  table(['The figure', 'How I know it', 'How I write it', 'What I have not counted'], [
    ['**three faults in the first-off**', '⚠ **I counted them; there were three**', '⚠ **three — no *about***', '—'],
    ['**two shortage queries a year stopped**', 'two in the six months before the change; none since', '⚠ **about two a year**', '⚠ **what a query costs. I have not costed one.**'],
    ['**nine scrap cartons**', 'they are on the shelf and I counted them', '**nine out of a hundred**', '—'],
    ['**twenty faint marks on the second night**', '⚠ **Abu Yasser told me; he did not count them**', '⚠ **in the region of twenty**', 'whether any went out'],
    ['**forty minutes a day on flat cartons**', 'the warehouse supervisor timed it once', '**roughly forty minutes a day**', '⚠ **whether that day was typical. It was a Thursday.**'],
  ], [1.7, 1.9, 1.5, 2.1]),
  '⚠ **Five figures and five different forms, and the differences are the honest part of the page.** ⚠ **Two are exact and carry no hedge at all; two are second-hand or estimated and say so; one is mine and rough.**',
  '⚠ **The fourth column is the one I would have left out.** ⚠ **What I have not counted is the thing a reader would have asked about**, and answering it before it is asked costs four words and buys the whole line: *I have not costed one.*',
  '⚠ **And the last line has a date in it that undoes half of it.** ⚠ **The forty minutes was timed on a Thursday, which is the Ghouta day** — the day the store is emptiest — ⚠ **so the figure may be low, and saying so is more useful than the figure.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Which figures carry no hedge, and why?'));
out.push(item('2', 'What does the fourth column do?'));
out.push(item('3', 'What is wrong with the forty minutes, and why is saying so useful?'));
out.push(box('Writer\'s box', [
  '**The figures and how you know them — four parts:** **a table: *the figure · how I know it · how I write it · what I have not counted*** → ⚠ **how many forms you have used and why they differ** → ⚠ **the column you would have left out** → **the figure that undoes itself.**',
  '⚠ **Put *how I know it* beside every figure.** ⚠ **It is the column that decides the form**: counted, counted once, estimated, told by somebody, timed on one day. **A reader who sees the column stops testing the figures.**',
  '⚠ **Leave the exact figures bare.** ⚠ *Three — no *about*.* **A hedge on an exact figure spends the credit the exact figures earn.**',
  '⚠ **Write *what I have not counted*, and answer it before it is asked.** ⚠ *I have not costed one.* **Four words, and the line survives any question.**',
  '⚠ **Name the figure that undoes itself.** ⚠ *The forty minutes was timed on a Thursday, which is the Ghouta day* — **so it may be low, and saying so is more useful than the figure.** A page that corrects its own best number will be believed about the others.',
  '⚠ **And use *out of* wherever the numbers are small.** ⚠ *Nine out of a hundred.* **It shows the sample, and at our size the sample is the interesting half.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the figures and how I know each one* for your own work (**60 words or more**). Use the frame.'));
out.push(p('**THE FIGURES IN ______________, AND HOW I KNOW EACH ONE. ______________. ______________.**   **______________** | ⚠ **I counted them** | ⚠ **______________ — no *about*** | —   **______________** | ______________ | ⚠ **about ______________** | ⚠ **______________. I have not ______________.**   **______________** | ⚠ **______________ told me** | ⚠ **in the region of ______________** | ______________   **______________** | ______________ once | **roughly ______________** | ⚠ **whether that ______________ was typical. It was ______________.**   ⚠ **______________ figures and ______________ different forms**, and ⚠ **the differences are the honest part of the page.**   ⚠ **The fourth column is the one I would have left out.** ⚠ **What I have not counted is ______________**, and answering it first costs ______________ and buys ______________.   ⚠ **And the last line has ______________ in it that undoes half of it.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **how do you know that?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['*How I know it* beside every figure', ''],
  ['Exact figures with no hedge', ''],
  ['*Out of* where the numbers are small', ''],
  ['*What I have not counted*, answered first', ''],
  ['One figure that undoes itself, named', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what I have not counted*. The class says whether they would have asked about it.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a figure at your work that everybody uses and nobody has checked (**140 to 180 words**). Say where it came from, how it is used, and what it would take to count properly.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does every figure say how it is known?_   ? _which figure would not survive being counted?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many had the figure never been counted at all? Usually all three — ⚠ **and in two of three it is in a document that goes outside the company.**'));
out.push(box('Homework', ['Write your final text. Then take five figures you use about your own work and write beside each how you know it: counted, counted once, estimated, told, or timed on one day (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.4 =======================
out.push(pb());
out.push(h2('22.4  The question you hope will not be asked'));
out.push(p('**Function:** answering the weak question before it is asked   ·   **Grammar:** _you will want to know why … · the honest answer is …_   ·   **Pronunciation:** the weak answer said at the same speed as the strong ones'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of one question about your work you would rather not be asked. Say it aloud.'));
out.push(p('**b**  Which is better? _Wait and hope it is not asked. · Answer it in the third minute, before anybody asks._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is the question the applicant does not want asked?   **A** about money   **B** why he left the last place after five weeks   **C** about the night work'));
out.push(p('**b**  Listen again. **1** When does he answer it? **2** What does Nour say about the answer she was going to accept?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.7  "He answered it in the third minute"', [
  ['Nour', 'The second applicant had five weeks at a plastics works and six years before that at the tannery.'],
  ['Mr Ayoub', 'And the five weeks?'],
  ['Nour', '⚠ **He told me about the five weeks in the third minute, before I had looked at the dates.**'],
  ['Mr Ayoub', 'What did he say?'],
  ['Nour', '⚠ ***You will want to know why I left the plastics works after five weeks. The honest answer is that I was put on a machine I had not been shown and I made four hundred pieces wrong, and when I said so they said nothing, and I left on the Friday.*** ⚠ **Then he stopped.**'],
  ['Mr Ayoub', 'And you believed him.'],
  ['Nour', '⚠ **I believed him because he stopped.** ⚠ **The people who are lying keep going** — they add the manager\'s character, and the other workers, and the money. ⚠ **He gave me one sentence of fact and one of what was said to him, and then nothing.**'],
  ['Mr Ayoub', 'What would you have thought if you had found the five weeks yourself?'],
  ['Nour', '⚠ **I would have asked about it in the fortieth minute and he would have answered the same words, and I would not have believed a syllable of them.** ⚠ **The identical answer is worth two different things depending on who raised it.**'],
  ['Mr Ayoub', 'And the four hundred wrong pieces?'],
  ['Nour', '⚠ **They are the reason to hire him, and he does not know that.** ⚠ **A man who made four hundred pieces wrong from a page he had not been shown, and said so, is the man I want at the press at two in the morning** — because he is the one who will stop.'],
  ['Mr Ayoub', 'Did he ask anything?'],
  ['Nour', '⚠ **He asked what happened to the man who marked the nine cartons in January.** ⚠ **And when I told him that nobody had blamed him and the line he worked from was mine, he asked whether that was written down anywhere.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The question you hope will not be asked**',
  table(['', 'What to do'], [
    ['**when**', '⚠ **in the first few minutes, before it is found**'],
    ['**the form**', '⚠ **you will want to know why … · the honest answer is …**'],
    ['**the length**', '⚠ **one sentence of fact, one of what happened, then stop**'],
    ['~~the context~~', '⚠ **the people who are lying keep going**'],
    ['**the value**', '⚠ **the same answer is worth two different things depending on who raised it**'],
  ], [1.4, 4.4]),
  '⚠ **Answer it before it is found.** ⚠ **The identical answer is worth two different things depending on who raised it** — *I would have asked in the fortieth minute, he would have said the same words, and I would not have believed a syllable.*',
  '⚠ **Name the question in their words first.** ⚠ *You will want to know why I left after five weeks.* **Naming it shows you know what it looks like**, which is most of what the other person is testing.',
  '⚠ **Then one sentence of fact, one of what was said or done, and stop.** ⚠ **The stopping is the evidence.** **The people who are lying keep going** — they add the manager\'s character, the other workers, the money.',
  '⚠ **Do not offer blame and do not offer a villain.** *When I said so they said nothing, and I left on the Friday.* ⚠ **Two facts, no adjectives, and the listener draws their own conclusion** — which they will defend, because it is theirs.',
  '⚠ **And the thing you are ashamed of may be the reason you are hired.** ⚠ *A man who made four hundred pieces wrong from a page he had not been shown, and said so, is the man I want at the press at two in the morning* — **because he is the one who will stop.**',
  '**Practise:** Name your own question and answer it in two sentences. ⚠ Then cut anything that is about another person\'s character.',
  '**Useful phrases:**  you will want to know why …  ·  the honest answer is …  ·  and I left on the Friday  ·  then stop  ·  no villain  ·  it may be the reason I am hired',
  '**Pronunciation – the weak answer at the same speed.** 🔊 **Track 22.8** Listen: _you will want to know why I left the plastics works after five weeks. The honest answer is that I was put on a machine I had not been shown._ ⚠ **Same speed and same volume as any other answer, and a full stop at the end.** **Faster is heard as nerves and slower as drama.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A names a difficult question; B answers it in two sentences and stops. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'Tell me about __________.'],
  ['B', '⚠ You will want to know why __________. ⚠ **The honest answer is that __________, and __________.**'],
  ['A', '_(says nothing)_'],
  ['B', '_(says nothing)_'],
  ['A', '⚠ And what would you do differently?'],
  ['B', '__________.'],
  ['A', '⚠ Did you think of not telling me?'],
  ['B', '⚠ __________.'],
]));
out.push(table(['Role card 1 — the five weeks', 'Role card 2 — the ones who keep going'], [[
  '⚠ ***You will want to know why I left the plastics works after five weeks. The honest answer is that I was put on a machine I had not been shown and I made four hundred pieces wrong, and when I said so they said nothing, and I left on the Friday.*** ⚠ **Then stop.**',
  'A answers a difficult question and keeps talking: the manager, the other workers, the money, the family. ⚠ B\'s job is to cut everything that is about another person\'s character, ⚠ **until two sentences are left.** ⚠ **Then both say which version they would believe.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the two sentences. ⚠ Then count the words that are about another person, and say what the answer would be worth if the interviewer had raised it.'));
out.push(PHRASE_CARD(['you will want to know why …', 'the honest answer is …', 'and I left on the Friday', 'then stop', 'no villain', 'the same answer, two values']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write your own three difficult questions, and answer each in two sentences.'));
out.push(table(['The question I hope will not be asked', 'Sentence 1 — the fact', 'Sentence 2 — what happened'], [['', '', ''], ['', '', ''], ['', '', '']], [2, 2, 2]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _You will want to know why _______. The honest answer is that _______, and _______._ Then stop.'));
out.push(p('**Listener task:** count the answers in the room that stopped after two sentences. ⚠ Then listen for any villain, and say what the villain cost the answer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for an answer with a manager\'s character in it, and one that ends with *so it was not really my fault*. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE TWO APPLICANTS, AND WHAT EACH DID WITH THE DIFFICULT PART. 4 July. N. Mansour.**',
  table(['', 'Applicant A', 'Applicant B'], [
    ['the difficult part', 'nine months with no work, 2024', '⚠ **five weeks at a plastics works**'],
    ['⚠ **who raised it**', '⚠ **I did, in the thirty-fifth minute**', '⚠ **he did, in the third**'],
    ['the answer', 'that work was short everywhere, which is true', '⚠ **one sentence of fact and one of what was said to him, then silence**'],
    ['⚠ **length of the answer**', '⚠ **about four minutes, and three names in it**', '⚠ **about twenty seconds**'],
    ['what I believed', '⚠ **all of it, and none of it mattered**', 'all of it, ⚠ **and it decided the interview**'],
    ['the question he asked me', 'what the pay was, and whether the night work was permanent', '⚠ **what happened to the man who marked the nine cartons in January**'],
  ], [1.5, 2.2, 2.7]),
  '⚠ **Applicant A has done nothing wrong and told no lies, and I cannot remember a sentence of what he said.** ⚠ **The nine months were raised by me and explained truthfully in four minutes with three other people in them**, and the truth of it did not help him at all.',
  '⚠ **Applicant B made four hundred pieces wrong and told me so in the third minute**, and that is why he is being offered the job. ⚠ **He made them wrong from a page he had not been shown, he said so at the time, and nobody answered him** — ⚠ **which is exactly the situation our own night shift is in, and he is the only one of the two who has been in it.**',
  '⚠ **And his question is the thing I will remember for a year.** *What happened to the man who marked the nine cartons?* And then, when I had told him: ⚠ ***is that written down anywhere?*** ⚠ **It is, since 26 April, at the top of the bench page** — **and the fact that he asked is the whole interview.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'Who raised each difficult part, and when?'));
out.push(item('2', 'Why did Applicant A\'s truthful answer not help him?'));
out.push(item('3', 'What two questions did Applicant B ask, and why do they matter?'));
out.push(box('Writer\'s box', [
  '**The two applicants — four parts:** **a table: *the difficult part · who raised it · the answer · length · what I believed · the question he asked me*** → ⚠ **the one who did nothing wrong and is not remembered** → ⚠ **the one whose failure is the reason to hire him** → **the question that decided it.**',
  '⚠ **Record who raised it and in which minute.** ⚠ *I did, in the thirty-fifth* against *he did, in the third.* **It is the only column that distinguishes the two answers**, which are otherwise both true.',
  '⚠ **Record the length.** ⚠ *About four minutes, and three names in it* against *about twenty seconds.* **Length and other people\'s names are the two measurable signs of an answer that is defending itself.**',
  '⚠ **Say plainly that the truthful answer did not help.** ⚠ *Applicant A has done nothing wrong and told no lies, and I cannot remember a sentence of what he said.* **A page that pretends honesty is always rewarded teaches nothing.**',
  '⚠ **And name the failure that is the qualification.** ⚠ *He made four hundred pieces wrong from a page he had not been shown, said so, and nobody answered him — which is exactly the situation our night shift is in.* **The qualification is the experience and not the mistake.**',
  '⚠ **Record what they asked you.** ⚠ *What happened to the man who marked the nine cartons?* **What somebody asks tells you what they will do on a bad night**, and the pay question tells you nothing at all.',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the two applicants* for an interview at your work, or two people you have seen interviewed (**60 words or more**). Use the frame.'));
out.push(p('**THE TWO APPLICANTS, AND WHAT EACH DID WITH THE DIFFICULT PART. ______________. ______________.**   the difficult part | ______________ | ⚠ **______________**   ⚠ **who raised it** | ⚠ **______________, in the ______________ minute** | ⚠ **______________, in the ______________**   the answer | ______________ | ⚠ **______________, then silence**   ⚠ **length** | ⚠ **about ______________, and ______________ names in it** | ⚠ **about ______________**   the question asked of me | ______________ | ⚠ **______________**   ⚠ **______________ has done nothing wrong and told no lies, and ______________.**   ⚠ **______________ and told me so in the ______________ minute**, and that is why ______________. ⚠ ______________, **which is exactly the situation ______________.**   ⚠ **And the question is the thing I will remember.** ______________'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **who raised it, and in which minute?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Who raised the difficult part, and when', ''],
  ['The length of each answer', ''],
  ['That the truthful late answer did not help', ''],
  ['The failure that is the qualification', ''],
  ['What each of them asked you', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only the question the applicant asked them. The class says what it tells you.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about a difficult thing in your own record (**140 to 180 words**). Say what it is, how you would raise it, in which minute, and what you would not say about anybody else.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _does the answer stop after two sentences?_   ? _is there a villain in it, and what does the villain cost?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there a villain? Usually two of three — ⚠ **and in both the villain is the true explanation and still the wrong thing to say.**'));
out.push(box('Homework', ['Write your final text. Then write your own difficult question in the other person\'s words, answer it in two sentences, and cut every word about anybody else (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.5 =======================
out.push(pb());
out.push(h2('22.5  The three questions back'));
out.push(p('**Function:** asking an interviewer three questions   ·   **Grammar:** indirect and open questions, consolidated   ·   **Pronunciation:** a question that is not a test'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a question you have asked, or should have asked, at an interview. Say what the answer told you.'));
out.push(p('**b**  Which tells you most? _What are the prospects? · What happened to the last person who did this job? · Is there a pension?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are the three questions Lina is told to ask?   **A** about pay, hours and holidays   **B** what happened to the last person, what goes wrong most often, and who decides   **C** about training'));
out.push(p('**b**  Listen again. **1** What does each one tell you? **2** Why must the questions not sound like a test?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.9  "Three, and each one tells you something different"', [
  ['Lina', 'Should I ask anything on Thursday? It is my own review, not an interview.'],
  ['Nour', '⚠ **Ask three things, and in an interview ask the same three.** ⚠ **What happened to the person who did this job before. What goes wrong most often. And who decides.**'],
  ['Lina', 'What does the first one tell me?'],
  ['Nour', '⚠ **Whether they left, were promoted, or are still here and have been moved sideways** — and the answer comes out in the first four words, before anybody has arranged it. ⚠ **It is also the only question that cannot be answered with a policy.**'],
  ['Lina', 'And *what goes wrong most often*?'],
  ['Nour', '⚠ **It tells you whether they know.** A place that says *nothing really* either has no faults, which is impossible, ⚠ **or does not count them** — and you now know which of your six months it would have been like.'],
  ['Lina', 'And *who decides*?'],
  ['Nour', '⚠ **It tells you how long everything will take.** ⚠ **If the answer is one name, things take a day; if it is a committee or *we discuss it*, things take a month** — and that is the whole texture of the work, from a seven-word question.'],
  ['Lina', 'Will they not think I am interrogating them?'],
  ['Nour', '⚠ **They will if you ask all three in a row at the end.** ⚠ **Put each one where it belongs in the conversation** — the first when they describe the job, the second when they describe the difficulties, the third when they talk about a decision.'],
  ['Lina', 'And if the answers are bad?'],
  ['Nour', '⚠ **Then you have learned something before you start, which is the point.** ⚠ **The three questions are not to impress anybody; they are to find out whether you want the job** — and a candidate who asks them and listens to the answers is making a decision, not a display.'],
  ['Lina', 'What should I not ask?'],
  ['Nour', '⚠ **Anything you could read.** ⚠ **The hours, the pay scale, the holidays, what the company does** — *asking a question whose answer is printed is the one thing that counts against you*, because it says you did not read what you were sent.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Three questions, and what each one tells you**',
  table(['The question', 'What it tells you'], [
    ['⚠ **what happened to the person who did this job before?**', '⚠ **left, promoted, or moved sideways — and it cannot be answered with a policy**'],
    ['⚠ **what goes wrong most often?**', '⚠ **whether they count anything.** *Nothing really* is the answer that tells you most'],
    ['⚠ **who decides?**', '⚠ **how long everything will take.** One name: a day. A committee: a month'],
    ['~~what are the hours?~~', '⚠ **anything you could read counts against you**'],
    ['**where to put them**', '⚠ **each where it belongs, not three in a row at the end**'],
  ], [2.6, 3.4]),
  '⚠ **Three questions, each telling you something different, and each put where it belongs in the conversation.** ⚠ **Three in a row at the end is an interrogation**; the same three spread through an hour are a conversation.',
  '⚠ ***What happened to the person before* is the only one that cannot be answered with a policy**, and the answer comes out in the first four words, before anybody has arranged it.',
  '⚠ ***What goes wrong most often* tells you whether they count anything.** ⚠ **A place that says *nothing really* either has no faults, which is impossible, or does not count them.**',
  '⚠ ***Who decides* tells you how long everything will take.** ⚠ **One name: a day. A committee, or *we discuss it*: a month** — and that is the texture of the work, from seven words.',
  '⚠ **Never ask anything you could read.** ⚠ **The hours, the pay scale, the holidays, what the company does** — *asking a question whose answer is printed says you did not read what you were sent.*',
  '**Practise:** Write the three for a job you might apply for. ⚠ Then say where in the hour each one goes.',
  '**Useful phrases:**  what happened to the person who did this before?  ·  what goes wrong most often?  ·  who decides?  ·  nothing really  ·  one name or a committee  ·  anything I could read',
  '**Pronunciation – a question that is not a test.** 🔊 **Track 22.10** Listen: _what happened to the person who did this job before?_ ⚠ **Flat, mildly curious, falling at the end — not rising.** **A rise makes it a challenge; a fall makes it a question**, and the words are identical. Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A is the interviewer; B asks the three questions in the right places. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The job is mainly __________.'],
  ['B', '⚠ May I ask what happened to the person who did it before?'],
  ['A', '__________.'],
  ['B', '_(later)_  ⚠ And what goes wrong most often?'],
  ['A', '__________.'],
  ['B', '_(later, when a decision is mentioned)_  ⚠ Who decides that?'],
  ['A', '__________.'],
  ['B', '⚠ Thank you — that tells me __________.'],
]));
out.push(table(['Role card 1 — the three answers', 'Role card 2 — nothing really'], [[
  '**A answers:** the last person ⚠ **is still here and does something else now**; what goes wrong most often is ⚠ **the codes on the orders, about twice a month**; and who decides is ⚠ **Mr Ayoub, the same day.** ⚠ **B says what each answer tells them.**',
  'A answers *nothing really* to the second question. ⚠ B\'s job is to notice what that means: **either there are no faults, which is impossible, or nobody counts them.** ⚠ **Then B asks it again in a smaller form** — *what went wrong last week?* — **and sees whether an answer exists.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the three questions, the three answers, and what each answer tells you. ⚠ Then say which answer you would act on.'));
out.push(PHRASE_CARD(['what happened to the person before?', 'what goes wrong most often?', 'who decides?', 'nothing really', 'one name or a committee', 'anything I could read']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write the three questions for a job you might apply for, and say where each one goes.'));
out.push(table(['The question', 'Where in the hour', 'What a good answer sounds like', 'What a bad answer sounds like'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.6, 1.2, 1.7, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My three are _______, _______ and _______. The second one goes _______, and a bad answer to it would be _______._'));
out.push(p('**Listener task:** count the questions in the room whose answers are printed somewhere. ⚠ Then ask which single question would most change a decision.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _what are the prospects?_ and three questions asked in a row at the end. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page, and answer the questions.'));
out.push(box(null, [
  '**THE THREE QUESTIONS, AND WHAT THE ANSWERS TOLD HIM. 7 July. N. Mansour, writing down what I was asked.**',
  table(['His question', 'My answer', 'What it told him'], [
    ['⚠ **what happened to the man who marked the nine cartons in January?**', '⚠ **nothing happened to him. He marked them correctly from the stencils he was given and the fault was in a line I wrote.**', '⚠ **that a fault here is traced to a page and not to a man — and he asked next whether it was written down**'],
    ['**is that written down anywhere?**', '⚠ **yes, at the top of the bench page since 26 April, with my name on it**', '⚠ **that the page can be argued with, which is the only thing that matters at two in the morning**'],
    ['what goes wrong most often?', '⚠ **the codes. About twice a month an order comes without one, and we have to telephone Beirut.**', '**that we count things, and roughly how often**'],
    ['who decides whether to stop a run?', '⚠ **he does, alone, at two in the morning — and the page says so in four places**', '⚠ **that stopping is permitted, which is the thing he left his last place over**'],
  ], [2, 2.5, 2.5]),
  '⚠ **He asked four questions and three of them were about what happens when something goes wrong.** ⚠ **Not one was about pay, hours or prospects**, and he accepted the pay figure in the advertisement without discussion.',
  '⚠ **The second question is the one I had never been asked by anybody.** ⚠ ***Is that written down anywhere?*** — because a thing that is true and unwritten is true only while the person who knows it is in the building, **which is Unit 21 arriving at an interview.**',
  '⚠ **And the fourth question is really the first one again.** He left the plastics works because he said a page was wrong and nobody answered. ⚠ **He asked three different questions about the same thing**, and that is not a flaw in his preparation — **it is what somebody does when they have been hurt by one thing and intend not to be again.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'How many of his questions were about things going wrong?'));
out.push(item('2', 'Which question had the writer never been asked, and why does it matter?'));
out.push(item('3', 'Why are the fourth question and the first the same question?'));
out.push(box('Writer\'s box', [
  '**The three questions and the answers — four parts:** **a table: *the question · my answer · what it told him*** → ⚠ **how many were about things going wrong** → ⚠ **the question nobody had asked before** → **the question that is really an earlier one again.**',
  '⚠ **Write what the answer told them and not what you said.** ⚠ *That a fault here is traced to a page and not to a man.* **The third column is the whole page**, and it is the one a writer leaves out.',
  '⚠ **Count the questions about failure.** ⚠ *Three of four, and not one about pay, hours or prospects.* **What somebody asks about tells you what they expect to happen**, and it is a better measure than anything they say about themselves.',
  '⚠ **Name the question you had never been asked.** ⚠ ***Is that written down anywhere?*** **A thing that is true and unwritten is true only while the person who knows it is in the building.**',
  '⚠ **And notice when several questions are one question.** ⚠ *He asked three different questions about the same thing* — **which is what somebody does when they have been hurt by one thing and intend not to be again**, and it is information and not a flaw.',
  '⚠ **Record what they did not ask.** ⚠ *He accepted the pay figure without discussion.* **What somebody does not ask is as much of the page as what they do.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write *the three questions and what the answers told them* for an interview at your work (**60 words or more**). Use the frame.'));
out.push(p('**THE THREE QUESTIONS, AND WHAT THE ANSWERS TOLD ______________. ______________. ______________.**   ⚠ **______________?** | ⚠ **______________** | ⚠ **______________**   **______________?** | ⚠ **______________** | ⚠ **______________**   ______________? | ⚠ **______________** | ______________   ⚠ **______________ asked ______________ questions and ______________ of them were about ______________.** ⚠ **Not one was about ______________.**   ⚠ **The ______________ question is the one I had never been asked.** ⚠ **______________** — because ______________.   ⚠ **And the last question is really the first one again.** ______________, **which is what somebody does when ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being, then ask one question: **what did the answer tell them?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A *what it told them* column', ''],
  ['The questions about failure, counted', ''],
  ['What they did not ask', ''],
  ['The question nobody had asked before', ''],
  ['Several questions recognised as one', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only *what they did not ask*. The class says what that tells you.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write about three questions you would ask about a job (**140 to 180 words**). Say what each would tell you, where in the hour it goes, and what a bad answer would make you do.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _could any of these be answered from the advertisement?_   ? _which bad answer would stop you applying?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many would a bad answer actually stop the writer applying? Usually one of three — ⚠ **and the other two have written questions they do not intend to act on**, which is a display and not a decision.'));
out.push(box('Homework', ['Write your final text. Then ask one of the three questions about your own workplace, to somebody who has been there longer than you, and write down what the answer tells you (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.6 =======================
out.push(pb());
out.push(h2('22.6  The page a stranger could check'));
out.push(p('**Function:** writing a self-appraisal   ·   **Grammar:** the checkable claim — a number, a date, or a place to look   ·   **Pronunciation:** reading your own page aloud without defending it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Think of a claim you have made about your own work. Say how somebody could check it.'));
out.push(p('**b**  Which is checkable? _I improved communication with the warehouse. · The warehouse now gets the order by nine; it used to be after eleven, and the gate sheet shows it._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What is Nour\'s rule for her own self-appraisal?   **A** be modest   **B** every claim with a number, a date or a place to look   **C** be brief'));
out.push(p('**b**  Listen again. **1** What does Mr Attar say about the form\'s own questions? **2** What does Nour write instead?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.11  "Every claim with a number, a date, or a place to look"', [
  ['Mr Attar', 'The form has three boxes: communication, teamwork and commitment. Fill them in.'],
  ['Nour', '⚠ **May I write something else as well?** ⚠ **I can fill those three boxes with sentences that nobody could disagree with and nobody could check.**'],
  ['Mr Attar', 'Try the first one.'],
  ['Nour', '⚠ ***I communicate clearly with colleagues and customers.*** ⚠ **It is true, it is unfalsifiable, and it would be true of a worse administrator than me.**'],
  ['Mr Attar', 'And what would you write instead?'],
  ['Nour', '⚠ ***The warehouse gets the day\'s orders by nine; until February it was after eleven. The gate sheet shows the time.*** ⚠ **A stranger with an hour could check that.**'],
  ['Mr Attar', 'That is one claim. How many will you write?'],
  ['Nour', '⚠ **Six, and each one with a number, a date or a place to look.** ⚠ **And one of the six against me**, because a page of six good things is read as advertising and a page with one bad thing in it is read as a record.'],
  ['Mr Attar', 'Which bad thing?'],
  ['Nour', '⚠ **The nine cartons came from a line I wrote**, and I have put it in the fourth box with the date and where the post-mortem is filed. ⚠ **It is also the most useful thing on the page**, because the repair is written next to it.'],
  ['Mr Attar', 'Most people would not put that in writing.'],
  ['Nour', '⚠ **Most people are protecting the wrong thing.** ⚠ **A page nobody can check protects me from being contradicted and from being believed**, and I would rather be checked. ⚠ **And in two years somebody will read this page without me in the room** — **the only part of it that will still work then is the part with a number in it.**'],
]));
out.push(sp());
out.push(box('Language box', [
  '**The checkable claim**',
  table(['Instead of', 'Write'], [
    ['~~I communicate clearly~~', '⚠ **the warehouse gets the orders by nine; until February it was after eleven**'],
    ['~~I am well organised~~', 'the gate sheet is signed by name on every delivery since 8 March'],
    ['~~I work well in a team~~', '⚠ **a place to look** — *the gate sheet shows the time*'],
    ['⚠ **how many claims**', '⚠ **six, and one of them against you**'],
    ['⚠ **the test**', '⚠ **could a stranger with an hour check this?**'],
  ], [1.9, 3.6]),
  '⚠ **Every claim needs a number, a date, or a place to look** — and the best ones have all three. ⚠ **The test is one question: could a stranger with an hour check this?**',
  '⚠ **The form\'s own boxes cannot be failed.** ⚠ *I communicate clearly with colleagues and customers* **is true, unfalsifiable, and would be true of a worse administrator** — which means it says nothing about this one.',
  '⚠ **Put one claim against yourself, with its date and where it is filed.** ⚠ **A page of six good things is read as advertising; a page with one bad thing in it is read as a record** — and the bad one is the most useful line if the repair is written beside it.',
  '⚠ **A page nobody can check protects you from being contradicted and from being believed.** ⚠ **Most people are protecting the wrong thing.**',
  '⚠ **And write for the reader who will have the page without you.** ⚠ **In two years somebody will read it with you out of the room, and the only part that still works is the part with a number in it.**',
  '**Practise:** Take three claims about your own work and make each checkable. ⚠ Add the number, the date and the place to look.',
  '**Useful phrases:**  until February it was …  ·  the gate sheet shows it  ·  since 8 March  ·  could a stranger check this?  ·  one of the six against me  ·  the repair is written next to it',
  '**Pronunciation – reading your own page without defending it.** 🔊 **Track 22.12** Listen to the claim against the writer read aloud: _the nine cartons came from a line I wrote; the post-mortem is in the March file._ ⚠ **Same speed and volume as the other five, and no explanation afterwards.** **An explanation turns a record into a defence.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a form box; B makes it checkable. Use the skeleton, then the role cards.'));
out.push(dlg(null, [
  ['A', 'The box says __________. Fill it in.'],
  ['B', '⚠ May I write something else as well? ⚠ **I can fill it with a sentence nobody could disagree with and nobody could check.**'],
  ['A', 'Try it.'],
  ['B', '⚠ *__________.* ⚠ **True, unfalsifiable, and true of __________.**'],
  ['A', 'And instead?'],
  ['B', '⚠ *__________; until __________ it was __________. __________ shows it.*'],
  ['A', 'How many will you write?'],
  ['B', '⚠ __________, and ⚠ **one of them against me.**'],
]));
out.push(table(['Role card 1 — communication', 'Role card 2 — the one against you'], [[
  '*I communicate clearly with colleagues and customers* becomes ⚠ ***the warehouse gets the day\'s orders by nine; until February it was after eleven. The gate sheet shows the time.*** ⚠ **A stranger with an hour could check it**, which is the only test.',
  'A has written six good claims. ⚠ B\'s job is to ask for a seventh that is against A — **with its date and where it is filed** — and to say why: ⚠ **six good things is advertising and five good things with one bad one is a record.** ⚠ **And the repair goes beside it.**',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the exchange for the class – **without the book**.'));
out.push(p('**Listener task:** write the box, the unfalsifiable version and the checkable version. ⚠ Then write the claim against the writer, with its date.'));
out.push(PHRASE_CARD(['until February it was …', 'the gate sheet shows it', 'since 8 March', 'could a stranger check this?', 'one of the six against me', 'the repair beside it']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Write **six** claims about your own work. Five for you, one against. Every line needs a number, a date or a place to look.'));
out.push(table(['The claim', 'Number', 'Date', 'Where to look'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['⚠ **against me:**', '', '', '']], [2.6, 0.8, 0.9, 1.7]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _My claim is _______. The number is _______, the date is _______, and a stranger could check it by _______. The one against me is _______._'));
out.push(p('**Listener task:** count the claims in the room that a stranger could check in an hour. ⚠ Then count the pages that have one claim against the writer.'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board — look for _I am a good team player_ and a claim against the writer with an explanation attached. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the self-appraisal, and answer the questions.'));
out.push(box(null, [
  '**SELF-APPRAISAL — N. MANSOUR, ADMINISTRATION. 8 July. ⚠ Six claims. Five for me and one against. Every line has a number, a date or a place to look.**',
  table(['The claim', 'How it can be checked'], [
    ['**1** The warehouse has the day\'s orders by nine. Until February it was after eleven.', '⚠ **the gate sheet carries the time; February and July are in the file**'],
    ['**2** The gate sheet is counted against the order and signed by name on every delivery since 8 March.', 'about forty sheets; two are unsigned and both are 9 March'],
    ['**3** The export bench page has thirteen steps, one warning, four branches and a heading naming the office that wrote it.', '⚠ **it is on the bench in the press room**'],
    ['**4** ⚠ **The nine scrap cartons of January were marked correctly from stencils chosen against a line I wrote.** The line asked whether the stencils were on the bench and not whether they were the right ones.', '⚠ **the post-mortem is in the March file; the cartons are in the fourth store; the repaired line is step 2 of the bench page**'],
    ['**5** The Tannous arrangement runs for twelve months from 1 May at a held price. Six lines, of which the sixth has no price against it.', 'the agreed terms, 28 April'],
    ['**6** The date list reaches Beirut by the 20th of each month. In April it went on the 21st and she telephoned.', '⚠ **four lists in the file, with their dates**'],
  ], [3.3, 2.8]),
  '⚠ **The form asked me about communication, teamwork and commitment, and I have not used those words anywhere.** ⚠ **I could have filled all three boxes with true sentences that a worse administrator could also have written**, and they would have been read by nobody and have proved nothing.',
  '⚠ **Claim 4 is the most useful line on the page and it is the one against me.** ⚠ **It has three places to look and a repair**, and anybody who reads it knows more about how this company now works than claims 1, 2, 3, 5 and 6 together tell them.',
  '⚠ **And claim 2 contains the two unsigned sheets, both of 9 March.** ⚠ **I could have written *every delivery* and nobody would ever have found them** — **and then the one time somebody did find them, every other line on this page would have been worth nothing.**',
], 'FFFFFF', C.navy));
out.push(item('1', 'What words from the form has the writer not used, and why?'));
out.push(item('2', 'Which claim is the most useful, and what does it carry?'));
out.push(item('3', 'Why are the two unsigned sheets in claim 2?'));
out.push(box('Writer\'s box', [
  '**The self-appraisal — four parts:** **a heading saying how many claims and how they can be checked** → **the numbered claims, each with its *how it can be checked*** → ⚠ **why you have not used the form\'s own words** → ⚠ **the claim against you, and the exception inside a good claim.**',
  '⚠ **Say in the heading how many claims there are and that one is against you.** ⚠ *Six claims. Five for me and one against.* **A reader who knows the shape reads the page instead of scanning it.**',
  '⚠ **Put the exception inside the claim.** ⚠ *Signed by name on every delivery since 8 March — two are unsigned and both are 9 March.* **Writing the exception yourself is what makes the other five claims safe**; leaving it out risks all of them on one afternoon\'s checking.',
  '⚠ **Give the claim against you three places to look and a repair.** ⚠ *The post-mortem is in the March file; the cartons are in the fourth store; the repaired line is step 2 of the bench page.* **Then say nothing else about it.**',
  '⚠ **Refuse the form\'s words and say why in one sentence.** ⚠ *I could have filled all three boxes with true sentences that a worse administrator could also have written.* **That is a professional judgement and not a complaint about the form.**',
  '⚠ **And expect the honest claim to be the best one.** ⚠ *Anybody who reads it knows more about how this company works than the other five together tell them.* **The checkable failure is the most informative line anybody ever writes about themselves.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your own self-appraisal (**60 words or more**). Use the frame.'));
out.push(p('**SELF-APPRAISAL — ______________. ______________. ⚠ ______________ claims. ______________ for me and ______________ against. Every line has ______________.**   **1** ______________. | ⚠ **______________**   **2** ______________ since ______________. | ⚠ **______________; ______________ are not, and ______________**   **3** ______________. | ______________   **4** ⚠ **______________.** ______________. | ⚠ **______________; ______________; ______________**   **5** ______________. | ______________   ⚠ **The form asked me about ______________, and I have not used those words anywhere.** ⚠ I could have filled the boxes with ______________, **and they would have ______________.**   ⚠ **Claim ______________ is the most useful line and it is the one against me.** ⚠ It has ______________ and a repair, **and anybody who reads it knows more about ______________ than ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Name the reader you are being — **be a stranger with one hour and the files** — then ask one question: **which line can I check first?** Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['A heading saying how many claims, and that one is against you', ''],
  ['A number, a date or a place to look on every line', ''],
  ['The exception written inside a good claim', ''],
  ['The claim against you, with places to look and a repair', ''],
  ['None of the form\'s own words', ''],
  ['No explanation after the bad claim', ''],
], [5, 1]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read only their claim against themselves. ⚠ **Time the silence afterwards.** The class says whether an explanation was added.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your self-appraisal in full (**140 to 180 words**): six claims with their checks, the exception inside one good claim, the claim against yourself with its repair, and one sentence on why you have not used the form\'s words.'));
out.push(...lines(10));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s text. Write on a slip:  ★ _I am reading this as_ ______   ✓ _is there one claim against the writer?_   ? _which line could I not check, and what would I need?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Read three texts. ⚠ In how many is there a claim the writer could not survive being checked on? Usually one of three — ⚠ **and it is never the claim against themselves.**'));
out.push(box('Homework', ['Write your final text. Then take the three boxes of a real form at your work and write, beside each, one checkable claim with a number, a date and a place to look (60+ words).'], C.lblue, C.navy));

// ======================= CYCLE 22.7 =======================
out.push(pb());
out.push(h2('22.7  Review & Mediate: the three lines nobody can fail'));
out.push(p('**Function:** explaining a form to the people who must fill it in   ·   **Review:** the four questions and the fifth · the cleft · approximation · the weak answer first · the three questions back · the checkable claim'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 22 quiz', 6));
out.push(p('In pairs, answer from memory. Then check in the unit.'));
[
  '**1** What are the four questions, and why is the fourth the easiest?',
  '**2** What does a cleft need besides the grammar, and what is the test of a job description?',
  '**3** When do you put *about* in front of a figure, and when must you not?',
  '**4** Why is the same answer worth two different things?',
  '**5** What does *who decides?* tell you?',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Lina say about the review form?   **A** it is too long   **B** nobody can fail it   **C** it is in the wrong order'));
out.push(p('**b**  Listen again. **1** How many people have filled it in? **2** What two things on her review were not asked for by the form?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 22.13  "Nobody can fail these three lines"', [
  ['Lina', 'May I say something about the form? ⚠ **I have filled it in and I could have filled it in on my first day.**'],
  ['Nour', 'Go on.'],
  ['Lina', '⚠ **It has three lines: communication, teamwork, commitment.** ⚠ **There is no answer to any of them that would be wrong.** I wrote *I communicate clearly*, *I work well with others* and *I am committed to the company* — ⚠ **and all three are true, and none of them is about me.**'],
  ['Nour', 'The free-text box at the bottom is where the work goes.'],
  ['Lina', '⚠ **Then the form has one real question and three decorations**, and the one real question has four lines of space.'],
  ['Nour', 'What did you put in it?'],
  ['Lina', '⚠ **The gate-sheet line, in my twelfth week.** And the first-off. ⚠ **Neither of them is anything the form asked about.**'],
  ['Nour', 'And neither of them fits communication, teamwork or commitment.'],
  ['Lina', '⚠ **The gate sheet is the opposite of teamwork.** ⚠ **Everybody on the team knew the line meant cartons and I was the only person who did what it said** — and that is the entire value of what I did. ⚠ **A form that scored me on fitting in would have marked me down for the best week I have had here.**'],
  ['Nour', 'So what should the form ask?'],
  ['Lina', '⚠ **Three questions with wrong answers available.** *What have you changed, with its date? What has gone wrong, and what did you do? ⚠ **And what is on your page that a stranger could check?*** ⚠ **A question nobody can fail is a question nobody has answered.**'],
  ['Nour', 'And the three lines?'],
  ['Lina', '⚠ **Leave them, because somebody above us designed them and they cost four minutes.** ⚠ **But the file should not pretend they are the review** — *the review is the box at the bottom, and it should be at the top and have a page.*'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Mediating – the three lines nobody can fail**',
  table(['The form asks', 'What can be answered', 'Can it be failed?'], [
    ['communication', 'I communicate clearly', '⚠ **no**'],
    ['teamwork', 'I work well with others', '⚠ **no**'],
    ['commitment', 'I am committed to the company', '⚠ **no**'],
    ['⚠ **the free-text box, four lines**', '⚠ **the gate sheet, week 12; the first-off, 27 March**', '⚠ **yes — and it is the only part that is the review**'],
  ], [1.9, 2.4, 1.4]),
  '⚠ **A question nobody can fail is a question nobody has answered.** ⚠ *I could have filled it in on my first day* — **and all three answers are true, and none of them is about the person writing them.**',
  '⚠ **So the form has one real question and three decorations**, and the one real question has four lines of space while the decorations have a page.',
  '⚠ **And the best work may be marked down by the categories.** ⚠ **The gate sheet is the opposite of teamwork**: *everybody on the team knew the line meant cartons and I was the only person who did what it said* — ⚠ **and a form that scored her on fitting in would have marked her down for the best week she has had.**',
  '⚠ **The three questions that can be failed:** ⚠ **what have you changed, with its date? what has gone wrong, and what did you do? what is on your page that a stranger could check?**',
  '⚠ **Leave the three lines, because somebody above you designed them and they cost four minutes** — ⚠ **but do not let the file pretend they are the review.** *The review is the box at the bottom, and it should be at the top and have a page.*',
  '**Practise:** Take a form at your work. ⚠ Count the lines that cannot be failed, and find the one box where the work actually goes.',
  '**Useful phrases:**  nobody can fail it  ·  I could have filled it in on my first day  ·  true, and not about me  ·  one real question and three decorations  ·  a question nobody can fail  ·  it should be at the top and have a page',
  '**Pronunciation – the sentence that criticises a form without criticising its author.** 🔊 **Track 22.14** Listen: _somebody above us designed these and they cost four minutes; the review is the box at the bottom._ ⚠ **Even, unhurried, and no stress on *somebody above us*.** **Stress it and the sentence becomes about rank instead of about the form.** Repeat four.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a form\'s questions; B finds the ones that cannot be failed.'));
out.push(table(['Pair 1 — for A', 'Pair 2 — for B'], [[
  'Three lines — communication, teamwork, commitment — ⚠ **and four lines of free text where the whole review is.** ⚠ **The gate sheet and the first-off are in the free text and neither fits any of the three categories.** The replacement: three questions with wrong answers available.',
  'Take a form of your own. ⚠ B asks of each question: ⚠ **what would a wrong answer to this look like?** ⚠ **If there is none, the question is a decoration** — and then B finds the one box where the work actually goes, and measures how much space it has.',
]], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs act out the conversation for the class – **without the book**.'));
out.push(p('**Listener task:** write the lines that cannot be failed and the box where the work goes. ⚠ Then write the three questions that could be failed.'));
out.push(PHRASE_CARD(['nobody can fail it', 'true, and not about me', 'one real question, three decorations', 'what would a wrong answer look like?', 'the opposite of teamwork', 'it should be at the top']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Your teacher pairs you with somebody whose work you do not know. Take a form of theirs and find what cannot be failed.'));
out.push(table(['The question', 'What can be answered', 'Can it be failed?', 'What it should ask'], [['', '', '', ''], ['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [1.4, 1.6, 1, 2]));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what cannot be failed on their form. This is the **tenth** unit of this book, and the thing nobody writes down is this: **an appraisal form is written so that no answer to it can be wrong, because a form with wrong answers available would have to be defended by whoever designed it — so the three headed boxes collect three sentences that are true of everybody and the whole of the actual work is written in a four-line box at the bottom, and worse, the categories can mark down the best thing a person has done, because the most valuable act in a year is often the one that nobody else on the team was willing to perform.**'));
out.push(p('_The form asks _______, and nobody could fail it. The work went in _______. The question it should ask is _______._'));
out.push(p('**Listener task:** add to the Book 2 office-word list: _an appraisal · a self-assessment · a probation review · a development need · a checkable claim · to substantiate._'));
out.push(p('**Board clinic:** your teacher writes three mistakes on the board. Correct them together.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (B1 Business Preliminary Reading Part 1)', 10));
out.push(p('⚠ **This unit practises Part 1: short texts and notices.** Read each of the five and choose what it means.'));
out.push(box(null, [
  '**1**  _Line in an advertisement: Must be hard-working, punctual and able to work without supervision. Some night work._',
  '**2**  _Line in a self-appraisal: The gate sheet is signed by name on every delivery since 8 March. Two are unsigned and both are 9 March._',
  '**3**  _Said in the third minute of an interview: You will want to know why I left the plastics works after five weeks._',
  '**4**  _Line in a review form: I am committed to the company._',
  '**5**  _Note on a figure: Roughly forty minutes a day. Timed once, on a Thursday._',
], 'FFFFFF', C.navy));
[
  '**1**  This advertisement ___.   **A** describes the hard part of the job   **B** lists qualities every applicant will claim   **C** asks for experience',
  '**2**  The writer has ___.   **A** made a mistake in the claim   **B** given the exception before anybody could find it   **C** admitted the records are poor',
  '**3**  The speaker is ___.   **A** apologising   **B** answering the difficult question before it is asked   **C** asking for sympathy',
  '**4**  This line ___.   **A** cannot be contradicted by anybody   **B** shows commitment   **C** will be checked',
  '**5**  The second sentence ___.   **A** strengthens the figure   **B** warns the reader that the figure may be low   **C** gives the source',
].forEach(t => out.push(p(t + '', { indent: 200, after: 50 })));
out.push(box('Writer\'s box', [
  '**B1 Business Preliminary Writing Part 2 — business correspondence, 60 to 80 words.** Here: proposing a change to a form, to the person who has to approve it.',
  'The shape: ⚠ **what cannot be failed, with the count** · ⚠ **where the work actually goes, and how much space it has** · **the questions that could be failed** · **what you are not proposing to remove.**',
  '⚠ **In eighty words the count is what makes it a proposal instead of a complaint.** ⚠ *Three headed boxes that nobody can fail and four lines where the whole review goes* — **two numbers, and the case is made.**',
  '⚠ **Say what you are not proposing to remove.** ⚠ *I am not asking for the three boxes to go.* **A proposal that leaves somebody else\'s work standing is approved; one that deletes it is argued about for a year.**',
  '⚠ **And propose the questions as questions, not as principles.** ⚠ *What have you changed, with its date?* **A principle has to be agreed and a question can simply be printed.**',
], C.lyellow, C.orange));
out.push(stage('6', 'Write with help', 9));
out.push(p('**Exam task — Writing Part 2.** Write to whoever must approve a change to a form at your work (**60 to 80 words**). Give ⚠ **what cannot be failed, with the count**, ⚠ **where the work goes and how much space it has**, **the questions that could be failed**, and **what you are not proposing to remove.**'));
out.push(p('______________, about the ______________ form. ⚠ **It has ______________ headed boxes and I could have filled all ______________ on my first day** — ______________. ⚠ **The whole of the actual review goes in ______________, which has ______________.** ⚠ Could we add ______________ questions at the top: ______________? ______________? ______________? ⚠ **I am not asking for ______________ to go**; ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(p('Swap books. Count the four points and the words. Tick ✓ or cross ✗, and name the criterion each time.'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['What cannot be failed, with the count', ''],
  ['Where the work goes, and its space', ''],
  ['⚠ The questions that could be failed', ''],
  ['What you are not proposing to remove', ''],
  ['60 to 80 words — count them', ''],
], [5, 1]));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write your self-appraisal in full for a stranger (**140 to 180 words**): six claims each with a number, a date or a place to look, the exception inside one good claim, the claim against yourself with its repair, and one sentence on the form\'s own words.'));
out.push(...lines(8));
out.push(box('Homework', ['Write your final text. Then take a form at your work, count the questions that cannot be failed, and write one question for each that could be (60+ words).'], C.lblue, C.navy));
out.push(pb());
out.push(stage('✓', 'Unit 22 check', 15));
out.push(p('**A  Language.** Choose a, b or c.'));
[
  '1  Which is an answer?   a) I am very hard-working   b) I rewrote the gate sheet in my twelfth week and the shortage queries stopped   c) I always do my best',
  '2  The fourth question — what went wrong — is ___.   a) the hardest, and should be avoided   b) the easiest, because you have an answer and most people have none   c) not usually asked',
  '3  _It ___ typing and it is writing._   a) looks like   b) is like   c) seems',
  '4  You counted three faults, exactly. Write:   a) about three   b) three   c) approximately three',
  '5  Which is strongest for a small number?   a) thirty-six per cent   b) four out of eleven   c) over a third',
  '6  A difficult question should be answered ___.   a) when it is asked   b) in the first few minutes, by you   c) in writing afterwards',
  '7  _Who decides?_ tells you ___.   a) who is senior   b) how long everything will take   c) whether they are organised',
  '8  A claim nobody can check protects you from ___.   a) being contradicted   b) being contradicted and being believed   c) nothing',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening.** 🔊 **Track 22.15** Listen to the exchange. Complete the note.   Lines on the form: ______   Can any be failed: ______   Where the work goes: ______   What she put in it: ______   Why the gate sheet is the opposite of teamwork: ______'));
out.push(dlg('Track 22.15  Audio script (read after the check)', [
  ['Lina', 'I have filled the form in and I could have filled it in on my first day. It has three lines: communication, teamwork, commitment.'],
  ['Nour', 'And?'],
  ['Lina', 'There is no answer to any of them that would be wrong. I wrote that I communicate clearly, that I work well with others and that I am committed to the company, and all three are true, and none of them is about me.'],
  ['Nour', 'The free-text box at the bottom is where the work goes.'],
  ['Lina', 'Then the form has one real question and three decorations, and the real one has four lines of space. I put the gate-sheet line in it, from my twelfth week, and the first-off report.'],
  ['Nour', 'Neither of which the form asked about.'],
  ['Lina', 'And the gate sheet is the opposite of teamwork. Everybody on the team knew the line meant cartons and I was the only person who did what it said. A form that scored me on fitting in would have marked me down for the best week I have had here.'],
]));
out.push(p('**C  Writing.** Write three claims about your own work (**60 words or more**): two for you and one against, each with a number, a date or a place to look, and the repair beside the one against you.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 22)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ prepare four answers with dates and numbers, and leave the fifth alone',
  '☐ say which part of my work is the work, with a proportion',
  '☐ give a figure I cannot prove, in the right form, and say what I have not counted',
  '☐ answer the difficult question in the third minute and then stop',
  '☐ ask three questions back and know what each answer tells me',
  '☐ write a claim a stranger could check in an hour',
  '☐ see which questions on a form cannot be failed',
  '☐ write a self-appraisal, a job description and the record of an interview',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English B1 · Book 2 · Syria Edition · Unit 22 · Student\'s Book');
