// Proactive English C1 · Syria Edition · Book 1 · Unit 7 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT THE WRITER MEANT', 'WHAT A HOSTILE READER TAKES'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says what a hostile reader would take from it, and what is missing that would stop them.';
const slip = '**Peer review, C1 band 2.** ⚠ **Name the reader you are being**, and then **name what is absent** — the thing that reader would have expected and did not find. **An absence and not an error.** Then the criterion, **with the line copied**, and what that reader would do about it.';

out.push(h1('Unit 7  The Opinion That Has to Survive a Hostile Reader'));
out.push(p('_Proactive English · C1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Everything in Units 1 to 6 was written for a reader who wanted to understand you.** ⚠ **This unit is written for the other kind.** **Not a dishonest reader — a reader in good faith who disagrees with your conclusion and is looking for the place where your argument does not reach it.**',
  '**7.1** reads your own paragraph as somebody looking for the gap in it.   **7.2** concedes the strongest objection in a form that closes it.   **7.3** marks the step your own argument does not take.   **7.4** states the limit of your evidence before anybody asks for it.   **7.5** answers an objection you have not been given, without inventing one.   **7.6** writes the page whose first hostile reader finds nothing to take.   **7.7** mediates between an author and somebody who disagrees in good faith.',
  '**Exam practice in 7.7:** C1 Advanced **Reading and Use of English Part 8** (multiple matching), **Writing Part 1** (the essay) and **Listening Part 3** (a long interview).',
  '⚠ **Bring two things to the first lesson of this unit.** **One:** a paragraph of your own that somebody could disagree with. **Two:** the name of the person most likely to argue with it, and one sentence saying what they would say. **7.5 runs on the second and it is the half most people cannot produce**, which is itself the finding.',
  '**And the warning, because this unit can be read as teaching defensiveness and does not.** ⚠ **A page with nothing to take from it is not a page that claims nothing.** **It is a page in which every claim is the size of its evidence** — **and the commonest way of producing one is not to hedge more, but to write a smaller claim and give it the whole of the room.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 7.1 =====================
out.push(pb());
out.push(h2('7.1  Reading your own paragraph against yourself'));
out.push(p('**Function:** reading your own paragraph as somebody looking for the gap in it   ·   **Grammar:** the adversarial read, done on yourself and in writing   ·   **Pronunciation:** reading your own sentence as somebody who does not believe it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the paragraph you brought, the person most likely to argue with it, and what they would say.** ⚠ **The third part in one sentence, in their words.** Your teacher writes the ten objections on the board. **In most classes three or four students cannot produce the third part at all**, and those three or four are the ones this unit is for.'));
out.push(board('Eleven of the hundred and four were against superseded sheets.', 'One month. One branch. He chose the month.'));
out.push(p('**b**  Which of these is a gap a hostile reader would take? **1** _Eleven of the hundred and four October dispensings were against a superseded sheet._  **2** _The October figures show that the printed route is the problem._  **3** _Nine of the eleven came from a printed sheet._  **4** _This demonstrates that the system is not fit for purpose._  **5** _The screen route carries about a fifth of the volume._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the adversarial read is?   **A** looking for mistakes   **B** **looking for the step the argument does not take, and writing it down in the hostile reader\'s words** — not checking the English   **C** being pessimistic about your own work'));
out.push(p('**b**  Listen again. **1** What did Mr Zahreddine find when he did it to his own opinion?   **2** What does Mrs Khoury say about doing it in your head?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.1  Three things a stranger would take', [
  ['Ms Huda', 'Mr Zahreddine read his own opinion as a hostile reader. What came out of it?'],
  ['Mr Zahreddine', '⚠ **Three things, and all three were in sentences I had written on purpose.** **Not errors.** **Places where somebody could stop and say: that does not follow.**'],
  ['Mrs Tarabishi', 'Give us one.'],
  ['Mr Zahreddine', '⚠ _Fifty-five of the fifty-six positions are below the specified grade._ **True, and I measured all fifty-six.** **A reader in good faith says: you measured forty-one in August and fifteen in January, and the frame has been in use in between.**'],
  ['Mrs Khoury', 'Which is a real objection and you had not seen it.'],
  ['Mr Zahreddine', '⚠ **I had not seen it in four months of looking at the document.** **I saw it in eleven minutes when I wrote at the top of the page: _I do not believe this and I am looking for why._**'],
  ['Dr Qabbani', 'So it is a change of instruction and not of effort.'],
  ['Mrs Khoury', '⚠ **It is entirely a change of instruction, and the instruction has to be written down.** **Doing it in your head does not work and the reason is not weakness of character.** **You cannot hold your own argument and the objection to it at the same time** — **the argument is in the way.**'],
  ['Mr Shihabi', 'A desk does this to copy all day and nobody calls it hostile.'],
  ['Mrs Oueidat', '⚠ **Which is the useful comparison.** **A hostile reader is not an enemy: they are a reader who does not already agree.** **Everybody in this room writes for one, most weeks, and almost nobody writes to one.**'],
  ['Mr Tayara', 'How do you stop it becoming an exercise in doubting everything?'],
  ['Mrs Khoury', '⚠ **You write the objection in the reader\'s words and in one sentence.** **If you cannot write the sentence, there is no objection there** — **and about half of what people worry about in their own writing produces no sentence at all.**'],
  ['Mrs Ajouz', 'That is a relief and I had not expected it.'],
  ['Mrs Rizk', '⚠ **It is the part nobody believes until they do it.** **I found four gaps in a proposal and two of them disappeared the moment I tried to write what the budget holder would say.** **They were my anxieties and not his.**'],
  ['Jad', 'And the ones that survive?'],
  ['Mr Zahreddine', '⚠ **The ones that survive are the unit.** **7.2 to 7.5 are four things you can do with an objection that produced a sentence**, and nothing can be done with the ones that did not.'],
  ['Mrs Tarabishi', 'Eleven minutes seems very short for a four-page document.'],
  ['Mrs Khoury', '⚠ **It is short on purpose.** **An adversarial read that takes an hour has turned into a rewrite, and a rewrite is the author\'s voice again.** **One pass, timed, and then stop.**'],
  ['Mr Zahreddine', '🔊 ⚠ **And the thing I shall take away is that I wrote the three sentences in the margin in my own hand.** **Four months of reading it as the author found none of them**, and eleven minutes of reading it as somebody else found all three.'],
]));
out.push(sp());
out.push(box('Language box – the adversarial read', [
  '**What it is.** ⚠ **Reading your own page as somebody who does not already agree with the conclusion, and writing down in their words the place where the argument does not reach it.** **Not an error hunt.** **Not a check of the English.** **The step that is not taken.**',
  '**The instruction has to be written at the top of the page.** ⚠ _I do not believe this and I am looking for why._ **Doing it in your head does not work and the reason is structural rather than moral**: **you cannot hold an argument and the objection to it at the same time, because the argument is in the way.**',
  '**The test that keeps it from becoming anxiety.** ⚠ **Write the objection in the reader\'s words, in one sentence.** **If you cannot write the sentence, there is no objection there** — **and about half of what a writer worries about in their own work produces no sentence at all, because it was the writer\'s anxiety and not the reader\'s objection.**',
  '**A hostile reader is not an enemy.** ⚠ **It is a reader who does not already agree**, and everybody in this room writes for one most weeks and almost nobody writes to one. **A desk editor does this to copy all day and calls it reading.**',
  '**What the read produces, and it is a short list.** ⚠ **Three or four sentences, in somebody else\'s voice, in the margin.** **They are the material for the rest of the unit**: 7.2 concedes one, 7.3 marks the step, 7.4 states the limit, 7.5 answers one you have not been given. **Nothing can be done with an objection that produced no sentence.**',
  '**And the thing that makes it bearable.** ⚠ **The gaps are almost never errors.** **They are places where a true sentence does more work than its evidence allows**, and the repair is usually to make the claim smaller rather than to find more evidence.',
  '**Pronunciation.** 🔊 **Track 7.2** **Read one of your own sentences aloud as somebody who does not believe it.** ⚠ **The voice does one thing: it slows down at the word that is doing too much work.** **Listen for where you slow.** **That word is the claim**, and in most sentences it is a verb — _shows_, _demonstrates_, _establishes_ — and the sentence round it is fine.',
  '**Practise:** Write a hostile reader\'s objection in one sentence. **1** about a sample  **2** about a date  **3** about a comparison  **4** about a word that claims too much  **5** one where no sentence can be written — and say so',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads a claim from the card. B writes **the hostile reader\'s objection in one sentence, in the reader\'s words**, and then says **whether the repair is more evidence or a smaller claim.** ⚠ **Two rows on each card produce no objection at all.** **B must say so rather than inventing one.** Change cards.'));
out.push(table(['Card A – the claim', 'Card B – the claim'], [
  ['_The October figures show that the printed route is the problem._', '_The eleven-to-two fall shows that the sentence caused it._'],
  ['_⚠ Eleven of the hundred and four were against a superseded sheet._', '_⚠ Nineteen were turned away between January and June._'],
  ['_Fifty-five of the fifty-six positions are below the specified grade._', '_Three sets of results from 2023 are not in the system._'],
  ['_⚠ The rota ends at nine and nine of the nineteen arrived after nine._', '_⚠ The box was signed for on 26 June and has not been seen since._'],
  ['_The second sample carries diagnostic weight._', '_The form period lost ten minutes and conversations fell by eight._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each objection, and whether the repair is evidence or a smaller claim. ⚠ **Rows 2 and 4 on both cards produce nothing**, because the claim is already the size of its evidence: a count, a date and a denominator with no verb doing extra work. **Of the six that do produce an objection, five are repaired by a smaller claim and one by more evidence** — and the class should be asked to find the one.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own paragraph** and write at the top of it: _I do not believe this and I am looking for why._ ⚠ **Then read it once, slowly, and write in the margin every place where somebody could stop.** **Give yourself eleven minutes and no more.** **Most people find three or four**, and the ones who find none have not written the instruction at the top.'));
out.push(p('**b**  Swap. Your partner writes **one objection to your paragraph in their own words**, and you compare it with your three or four. ⚠ **Count how many of yours they found.** **It is usually one or two of three** — **and the one they found that you did not is the most valuable sentence you will get this week.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Zahreddine read his own opinion as a hostile reader and found three things, all of them in sentences he had written on purpose. Not errors: places where somebody could stop and say that does not follow. Mrs Tarabishi asked for one, and it was fifty-five of the fifty-six positions are below the specified grade — true, and he measured all fifty-six, and a reader in good faith says that he measured forty-one in August and fifteen in January and the frame has been in use in between. Mrs Khoury said that is a real objection and he had not seen it, and he had not seen it in four months of looking at the document: he saw it in eleven minutes when he wrote at the top of the page, I do not believe this and I am looking for why. Dr Qabbani said so it is a change of instruction and not of effort, and Mrs Khoury said it is entirely a change of instruction and the instruction has to be written down — doing it in your head does not work, and the reason is not weakness of character: you cannot hold your own argument and the objection to it at the same time, because the argument is in the way. Mr Shihabi said a desk does this to copy all day and nobody calls it hostile, and Mrs Oueidat said that is the useful comparison, because a hostile reader is not an enemy but a reader who does not already agree, and everybody in the room writes for one most weeks and almost nobody writes to one. Mr Tayara asked how you stop it becoming an exercise in doubting everything, and you write the objection in the reader\'s words and in one sentence: if you cannot write the sentence there is no objection there, and about half of what people worry about in their own writing produces no sentence at all. Mrs Ajouz said that is a relief and she had not expected it, and Mrs Rizk said it is the part nobody believes until they do it — she found four gaps in a proposal and two disappeared the moment she tried to write what the budget holder would say, because they were her anxieties and not his. Mr Attar asked about the ones that survive, and the ones that survive are the unit: 7.2 to 7.5 are four things you can do with an objection that produced a sentence, and nothing can be done with the ones that did not. Mrs Tarabishi said eleven minutes seems very short for a four-page document, and Mrs Khoury said it is short on purpose: an adversarial read that takes an hour has turned into a rewrite, and a rewrite is the author\'s voice again. One pass, timed, and then stop. And Mr Zahreddine said the thing he will take away is that he wrote the three sentences in the margin in his own hand: four months of reading it as the author found none of them, and eleven minutes of reading it as somebody else found all three._'));
out.push(p('**Listener task:** write the objection your partner found that you had not.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Zahreddine wrote to himself before sending his opinion. Answer the questions.'));
out.push(model([
  '**F. ZAHREDDINE** · _note to file, not sent_ · _east elevation: the adversarial read_ · **20 February**',
  '**Instruction at the top of the page: I do not believe this and I am looking for why.** **Eleven minutes, one pass, three sentences in the margin.**',
  '**One. _Fifty-five of the fifty-six positions are below the specified grade._** **The objection, in their words: you measured forty-one in August and fifteen in January, and the frame has been loaded in between.** **It is a good objection.** **The repair is a smaller claim: _fifty-five of the fifty-six positions measured on 7 August and 14 January are below the specified grade, and no position has been measured twice._** **The new sentence is nine words longer and says what I did rather than what is true of the frame.**',
  '**Two. _Both documents can be true if the order was amended after a part delivery._** **The objection: you have no evidence of a part delivery and have invented a mechanism to dissolve a contradiction that helps your client.** ⚠ **Also a good objection, and the repair is not a smaller claim: it is a sentence saying that I have no evidence of a part delivery and offer it as one explanation of two documents, not as a finding.** **A part delivery would be recorded on the supplier\'s despatch note, which I have not asked for and shall ask for on Monday.**',
  '**Three. _I was asked to leave the bolt sizes out and I declined._** **The objection: this is in the opinion to make you look honest.** **I have thought about this one for two days.** **It stays, and the repair is to say why it is there** — **an insurer reading this in eighteen months will want to know whether anything was withheld, and the sentence answers a question that cannot be asked later.** **Two of the four people I showed it to read it as self-protection, and neither of them has ever been quoted.**',
  '**What produced no sentence at all.** **Four things I had been uneasy about.** **The single M16 — I tried to write the objection and it is already answered in the document.** **The nine-week gap before the service log was asked for — not my gap.** **The absence of the mill certificates — stated twice.** **And the length of the opinion, which is my anxiety and nobody else\'s.** **I have kept the four on the same sheet, because a list of things that produced nothing is the only cure I know for not being able to begin.**',
  '**What the read cost and what it produced.** **Eleven minutes, and two of the three repairs are one sentence each.** **The third is a decision I had already made without ever writing down why.** **The whole of it fits on one side of a sheet.**',
  '**And one observation for next time.** **All three objections are to sentences I was pleased with.** ⚠ **Not one of them is to a sentence I had doubts about while writing** — **and the four things I had doubts about produced nothing.**',
]));
out.push(item('1', 'What instruction does he write at the top, and what does the read produce?'));
out.push(item('2', 'How does the repair for the second objection differ from the repair for the first?'));
out.push(item('3', 'What produced no sentence at all, and what does he observe about where the three objections fell?'));
out.push(writers([
  'An adversarial read, written down: **the instruction at the top, in the reader\'s voice** → **one pass, timed** → **each objection in the reader\'s words, in one sentence** → **a verdict on each: good objection or not** → **the repair, and which kind it is** → **what produced no sentence at all** → **and where the objections fell.**',
  '⚠ **Write the objection as the reader would say it, not as you would describe it.** _You measured forty-one in August and fifteen in January, and the frame has been loaded in between._ **A described objection is already half answered**, and the describing is done in your own voice, which is the voice the exercise is trying to escape.',
  '**Say which kind of repair each objection needs.** ⚠ **A smaller claim, more evidence, or a sentence that names what you do not have.** **Most are the first.** **The second is the rarest and the most expensive, and a writer who reaches for it first will stop doing adversarial reads within a month.**',
  '**List what produced no sentence.** ⚠ _Four things I had been uneasy about._ **This is the half of the exercise that makes it bearable and it is the half everybody leaves out** — **an unease that cannot be written as somebody else\'s sentence is yours, and it can be put down.**',
  '⚠ And **say where the objections fell.** _All three are to sentences I was pleased with._ **That observation is worth more than the three repairs**, because it is the only thing in the exercise that will change what you do while writing rather than after it.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of an adversarial read of your own paragraph (120 words or more).'));
out.push(p('**______________** · _note to file_ · _______________ · **______________**   **Instruction at the top of the page: I do not believe this and I am looking for why.** **______________ minutes, one pass, ______________ sentences in the margin.**   **One. _"______________."_** **The objection, in their words: ______________.** **It is ______________.** **The repair is ______________: _"______________."_**   **Two. _"______________."_** **The objection: ______________.** ⚠ **The repair is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The instruction written at the top, in the reader\'s voice',
  'Each objection in the reader\'s words, in one sentence',
  'A verdict on each objection, and the kind of repair',
  'What produced no sentence at all',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one objection each, in the reader\'s words**, and the room says whether it is a good one.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the instruction, the timed pass, each objection with its verdict and repair, the list that produced nothing, and where the objections fell.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the objections in the reader\'s words, a verdict on each, the kind of repair named, and the list that produced nothing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads one of their own sentences twice: once as themselves and once as somebody who does not believe it.** ⚠ **The room says where the voice slowed.** **It slows at the word doing too much work**, and that word is almost always a verb. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **four months as the author found none of them, and eleven minutes as somebody else found all three.**'));
out.push(hw('Do the adversarial read on **the longest thing you have written this year**, with the instruction at the top and a watch running. ⚠ **Eleven minutes, one pass.** **Write the objections in the reader\'s words and keep the list of things that produced no sentence** — **that second list is the one to look at when you cannot start.** **Bring both lists.** **7.2 is the concession that closes an objection instead of opening it.**'));
