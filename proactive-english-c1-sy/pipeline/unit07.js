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
out.push(sp());
out.push(p('**What a marked page looks like.** ⚠ **Nobody in this class has seen one, and the marking is the whole of the method.** Three sentences from Mr Zahreddine\'s opinion, with what he wrote beside each:', { before: 120 }));
out.push(table(['The sentence, as written', 'What he wrote in the margin, in the reader\'s voice'], [
  ['_Fifty-five of the fifty-six positions are below the specified grade._', '_You measured forty-one in August and fifteen in January, and the frame has been loaded in between._ ⚠ **Good objection. Smaller claim.**'],
  ['_Both documents can be true if the order was amended after a part delivery._', '_You have no evidence of a part delivery and have invented a mechanism that helps your client._ ⚠ **Good objection. Not a smaller claim: a sentence saying I have no evidence of it.**'],
  ['_I was asked to leave the bolt sizes out and I declined._', '_This is here to make you look honest._ ⚠ **Thought about for two days. It stays, and the repair is to say why it is there.**'],
], [1.4, 2]));
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

// ===================== 7.2 =====================
out.push(pb());
out.push(h2('7.2  The concession that closes'));
out.push(p('**Function:** conceding the strongest objection in a form that closes it   ·   **Grammar:** _even allowing for_ · _on that assumption_ · the costed concession   ·   **Pronunciation:** a concession said without a rise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one concession you have made in writing, read out exactly, and what the reader did next.** ⚠ **Two sentences.** Your teacher writes the concessions in one column and what happened in the other. **In most classes six or seven of the ten were followed by the reader pressing the point harder**, which is the opposite of what the writer intended and is the cycle.'));
out.push(board('Admittedly the sample is small, but the finding stands.', 'How small? Which month? Why that one?'));
out.push(p('**b**  Which of these closes the objection? **1** _It is true that the sample was one month. However, the figure is eleven._  **2** _Even allowing for the whole of October being unrepresentative, nine of the eleven came from paper._  **3** _Admittedly the sample is small, but I think the finding stands._  **4** _Some might say that the sample is too small._  **5** _If the eleven were all from the worst week of the month, the printed route would still carry seven of them._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide makes a concession close?   **A** making it early   **B** **costing it: saying what the objection would do to the figure, and showing the conclusion standing on the worse number** — not acknowledging it   **C** making it shorter'));
out.push(p('**b**  Listen again. **1** What happened to the concession Mrs Khoury put in a correction?   **2** What does Mr Zahreddine say about the word _however_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.3  Admittedly, and then eleven more letters', [
  ['Ms Huda', 'Mrs Khoury — the correction with the concession in it.'],
  ['Mrs Khoury', '⚠ **Four words: _admittedly the sample is small_.** **We had eleven further letters, and nine of them were about the sample.** **Before the correction we had two.**'],
  ['Mrs Tarabishi', 'Because you admitted it.'],
  ['Mrs Khoury', '⚠ **Because I admitted it and did nothing with it.** **A concession that is only acknowledged is an invitation**: it tells the reader that the writer thinks this is the weak point and has no answer to it.'],
  ['Dr Qabbani', 'And the version that would have closed it?'],
  ['Mrs Oueidat', '⚠ **Cost it.** _Even if every one of the eleven came from the worst week of the month, the printed route still carries seven of them._ **Now the objection has been granted at its strongest and the conclusion is standing on the worse number.**'],
  ['Mr Shihabi', 'So you give them more than they asked for.'],
  ['Mrs Oueidat', '⚠ **You give them the whole of it, on purpose, and then do the arithmetic in front of them.** **A reader who has been given the extreme version of their own objection has nothing left to press with.**'],
  ['Mr Tayara', 'What if the conclusion does not survive the worse number?'],
  ['Mrs Khoury', '⚠ **Then you have found that out in your own office instead of in the letters**, which is worth the afternoon. **A concession you cannot cost is not a concession: it is a finding you have not made yet.**'],
  ['Mr Zahreddine', 'The word I have taken out of everything I write is _however_.'],
  ['Mrs Oueidat', 'Say why, because the room will think it is a connective like any other.'],
  ['Mr Zahreddine', '⚠ **_However_ after a concession tells the reader a fight is coming and the concession was tactical.** **_Even allowing for_ and _on that assumption_ do not** — **they keep the objection inside the sentence that disposes of it, and there is nowhere for the reader to put a _but_ of their own.**'],
  ['Mrs Ajouz', 'Is _admittedly_ ever right?'],
  ['Mrs Khoury', '⚠ **Once a document, where the thing conceded is genuinely fatal to part of your case and you are saying so.** **Used for anything smaller it is a signal that the writer is managing the reader**, and readers in this class can all feel it.'],
  ['Mrs Rizk', 'And the donors who read two hundred proposals can feel it in four seconds.'],
  ['Jad', 'What about conceding something they have not raised?'],
  ['Mrs Khoury', '⚠ **That is 7.5 and the answer is: only if you can write their sentence.** **A concession to an objection nobody has made and nobody would make is the straw version**, and it costs you the reader\'s trust in the other three.'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is the arithmetic of it.** **Two letters before and eleven after, and four words in between.**'],
]));
out.push(sp());
out.push(box('Language box – the costed concession', [
  '**What makes a concession close.** ⚠ **Costing it.** **Say what the objection would do to the figure, take the worst version of it, and show the conclusion standing on the worse number.** **Acknowledging an objection does not close it** — **it tells the reader that this is the weak point and that you have no answer.**',
  '**The forms that close.** ⚠ _Even allowing for_ · _even if_ · _on that assumption_ · _taking the objection at its strongest_. **Each keeps the objection inside the sentence that disposes of it**, and leaves nowhere for the reader to put a _but_ of their own.',
  '**The forms that open.** ⚠ _Admittedly X, but Y_ · _It is true that X. However, Y._ · _Of course X_. **_However_ after a concession tells the reader that a fight is coming and the concession was tactical** — **and a reader who has been told that reads everything before it again.**',
  '**Give the objection its strongest version, not its likeliest.** ⚠ _Even if every one of the eleven came from the worst week of the month…_ **Nobody has claimed that and it is the extreme case** — **and a reader who has been handed the extreme version of their own objection has nothing left to press with.**',
  '**And the thing to do when the conclusion does not survive the worse number.** ⚠ **You have found it out in your own office instead of in the correspondence.** **A concession you cannot cost is not a concession: it is a finding you have not made yet**, and the repair is a smaller claim and not a better sentence.',
  '**_Admittedly_, once a document, and only where the thing conceded is genuinely fatal to part of your case.** ⚠ **Used for anything smaller it is a signal that the writer is managing the reader**, and the readers in this room — a donor with two hundred proposals, a referee, a desk — can all feel it in about four seconds.',
  '**Pronunciation.** 🔊 **Track 7.4** **Say a costed concession flat, with no rise anywhere in it.** ⚠ _Even allowing for the whole of October being unrepresentative, nine of the eleven came from paper._ **A rise on _October_ turns the concession into a question about October**, and the reader answers the question instead of reading the arithmetic.',
  '**Practise:** Concede at the strongest and cost it. **1** about a sample  **2** about a date  **3** about a comparison  **4** where the conclusion does not survive — and say so  **5** one where _admittedly_ is right — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim and the objection from the card. B writes **the costed concession in one sentence** and says **what the conclusion is now standing on.** ⚠ **Two rows on each card are objections the conclusion does not survive.** **B must say so, and give the smaller claim instead.** Change cards.'));
out.push(table(['Card A – claim and objection', 'Card B – claim and objection'], [
  ['_Eleven of a hundred and four were against superseded sheets._ → _one month only_', '_Applications rose from forty to fifty-one._ → _the quarters are not comparable_'],
  ['_⚠ Seven of eleven reached a diagnosis._ → _eleven is a small number_', '_⚠ Conversations fell from nineteen to eleven._ → _one term, one school_'],
  ['_Nine of the nineteen arrived after the rota ended._ → _three Saturdays only_', '_Fifty-five of fifty-six are below grade._ → _measured on two dates five months apart_'],
  ['_⚠ The second sample carries diagnostic weight._ → _you have not separated the night admissions_', '_⚠ The sentence caused the fall in queries._ → _two districts changed clerks_'],
  ['_Four of twelve certificates are missing._ → _the post room moved in July_', '_Twenty-two records against an average of thirty-one._ → _a nineteen-day vacancy in April_'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each costed concession, and the number the conclusion now stands on. ⚠ **Rows 2 and 4 on both cards do not survive**, and the smaller claim is the repair: _seven of eleven_ becomes _in the eleven cases where the two samples disagreed_, and _the second sample carries diagnostic weight_ becomes _the ten with no second sample are the group that would answer it._ **The class should notice that both repairs make the claim smaller and neither makes it weaker.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the strongest objection from your 7.1 list** and write **the costed concession.** ⚠ **Give the objection its extreme version, not its likely one, and then do the arithmetic.** **If the conclusion does not survive, write the smaller claim instead and keep both versions** — **the pair is the most useful thing in your notebook this week.**'));
out.push(p('**b**  Swap. Your partner reads **only your concession sentence** and says **what they would write back.** ⚠ **A closed concession produces nothing to write back.** **An open one produces a question about the thing you conceded**, which is exactly what happened to Mrs Khoury eleven times.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury put four words into a correction — admittedly the sample is small — and had eleven further letters, nine of them about the sample, where before the correction there had been two. Mrs Tarabishi said that was because she admitted it, and it was because she admitted it and did nothing with it: a concession that is only acknowledged is an invitation, because it tells the reader that the writer thinks this is the weak point and has no answer to it. Dr Qabbani asked what version would have closed it, and Mrs Oueidat said cost it — even if every one of the eleven came from the worst week of the month, the printed route still carries seven of them — because now the objection has been granted at its strongest and the conclusion is standing on the worse number. Mr Shihabi said so you give them more than they asked for, and you give them the whole of it on purpose and then do the arithmetic in front of them: a reader who has been given the extreme version of their own objection has nothing left to press with. Mr Tayara asked what happens if the conclusion does not survive the worse number, and then you have found that out in your own office instead of in the letters, which is worth the afternoon — a concession you cannot cost is not a concession but a finding you have not made yet. Mr Zahreddine said the word he has taken out of everything he writes is however, and asked to say why, since the room will think it a connective like any other: however after a concession tells the reader a fight is coming and the concession was tactical, where even allowing for and on that assumption do not, because they keep the objection inside the sentence that disposes of it and leave nowhere for the reader to put a but of their own. Mrs Ajouz asked whether admittedly is ever right, and once a document, where the thing conceded is genuinely fatal to part of your case and you are saying so; used for anything smaller it is a signal that the writer is managing the reader, and readers in this class can all feel it. Mrs Rizk said the donors who read two hundred proposals can feel it in four seconds. Mr Attar asked about conceding something they have not raised, and that is 7.5, and the answer is only if you can write their sentence: a concession to an objection nobody has made and nobody would make is the straw version, and it costs you the reader\'s trust in the other three. And Mrs Khoury said the thing she will take away is the arithmetic of it — two letters before and eleven after, and four words in between._'));
out.push(p('**Listener task:** write your own costed concession, and the number the conclusion stands on.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the letter Mrs Khoury wrote the second time. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _to the correspondence editor_ · _the dispensing piece of 2 February: a second note_ · **24 February**',
  '**The first note conceded that the sample was one month and did nothing else.** **This one does the arithmetic.** **Eleven letters have come in since, and this note is for the desk and not for publication.**',
  '**The objection, at its strongest.** **Not that October may be unrepresentative, which is what the letters say, but that October was the worst month of the year for superseded sheets and that no other month would show anything at all.** **Nobody has claimed this and it is the extreme version.**',
  '**What the piece says on that assumption.** **Eleven of a hundred and four is about one in nine.** **Even if October carried twice the error rate of any other month, the year would run at about one in eighteen**, which is six hundred and seventy dispensings against a superseded sheet across the four branches. **The piece claimed that the printed route is where the failures sit, and that claim is untouched: nine of the eleven came from paper on any assumption about which month it was.** **The one in nine is from the branch count sheets, and the hundred and four is every dispensing recorded at the Mezzeh branch in October and not a sample of it.**',
  '**What does not survive the extreme version.** **The sentence in the eighth paragraph about a dose change reaching a patient.** ⚠ **That rested on seven of eleven and seven of eleven is a small number in a month that may be the worst of twelve.** **It should not have been in the piece and I should not defend it.** **Seven of eleven was in it because it is the most striking figure in the paper, and I knew that when I put it there.**',
  '**What I propose.** **A two-line correction on the eighth paragraph only, saying that the seven-of-eleven figure is from one month and that no inference about patients was available from it.** **Not a correction to the piece as a whole**, which stands on the one-in-nine and on the nine-from-paper. **The correction should carry the date of the piece and the paragraph number, so that anybody holding a cutting can find it.**',
  '**On the eleven letters.** **Nine of the eleven are about the sample and all nine quote the words _admittedly the sample is small_.** **They are quoting the concession and not the piece**, which is the thing I should like the desk to notice: **the four words produced more correspondence than the figures did.** **Two of the nine are from pharmacists and each gives a month of their own, which is the first new evidence anybody has produced.**',
  '**And one thing that is mine.** **I wrote _admittedly_ because I knew the sample was the weak point and wanted to be seen to have noticed.** ⚠ **Being seen to have noticed is not an argument and the readers were right to press.**',
]));
out.push(item('1', 'What is the objection at its strongest, and who has made it?'));
out.push(item('2', 'What survives the extreme version and what does not?'));
out.push(item('3', 'What does she say about the nine letters, and what does she admit about the word _admittedly_?'));
out.push(writers([
  'A letter that costs its concession: **what the first version did** → **the objection at its strongest, named as the extreme version** → **the arithmetic on that assumption** → **what survives** → **what does not, said plainly** → **what you propose** → **and your own reason for the first version.**',
  '⚠ **Take the objection past where anybody has taken it.** _Not that October may be unrepresentative, but that October was the worst month of the year._ **Nobody has claimed it, and saying so stops the sentence reading as a concession of something true** — **it is a concession of something worse than true.**',
  '**Do the arithmetic in front of the reader.** ⚠ _Even if October carried twice the error rate of any other month, the year would run at about one in eighteen._ **A costed concession is a sum with a number at the end**, and a reader who can follow the sum is a reader with nothing left to press with.',
  '**Say what does not survive, in the same document.** ⚠ _That rested on seven of eleven, and seven of eleven is a small number in a month that may be the worst of twelve._ **A letter that concedes nothing is not believed**, and the thing to concede is whatever the arithmetic has just shown you cannot keep.',
  '⚠ And **give your own reason for the sentence you are withdrawing.** _I wrote "admittedly" because I knew the sample was the weak point and wanted to be seen to have noticed._ **Being seen to have noticed is not an argument** — **and a writer who can name that in their own prose will not write it again.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a letter that costs its concession (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **The first ______________ conceded that ______________ and did nothing else.** **This one does the arithmetic.**   **The objection, at its strongest.** **Not that ______________, which is what ______________ say, but that ______________.** **Nobody has claimed this and it is the extreme version.**   **What ______________ says on that assumption.** **______________ is about ______________.** **Even if ______________, ______________ would run at about ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The objection at its strongest, named as the extreme version',
  'The arithmetic done, with a number at the end',
  'What does not survive, said plainly',
  'No _however_ and no _admittedly_ anywhere',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their concession sentence**, and the room says what it would write back.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole letter (260 words or more), to the shape in the writer\'s box: the first version, the objection at its strongest, the arithmetic, what survives, what does not, your proposal, and your own reason.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the objection at its strongest, the arithmetic with a number at the end, what does not survive, and no _however_.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their concession twice: once with a rise on the conceded thing and once flat.** ⚠ **The room says which version it would answer.** **The rising one, and the answer is about the thing conceded** — which is the eleven letters, produced in one syllable. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **two letters before and eleven after, and four words in between.**'));
out.push(hw('Take **the concession you read out in Stage 1** and cost it. ⚠ **Write the objection at its strongest — past where anybody has taken it — and then do the arithmetic.** **If the conclusion does not survive, write the smaller claim and keep both.** **Then look back at what your reader did after the original concession**, and say whether a costed version would have produced it. **Bring the original, the costed version and your answer.** **7.3 marks the step your own argument does not take.**'));

// ===================== 7.3 =====================
out.push(pb());
out.push(h2('7.3  The step the argument does not take'));
out.push(p('**Function:** marking the step your own argument does not take   ·   **Grammar:** _it does not follow that_ · _nothing in this establishes_ · _I make no claim about_   ·   **Pronunciation:** a refusal said as information'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one conclusion somebody drew from something you wrote that you had not drawn yourself.** ⚠ **What you wrote, and what they took.** Your teacher writes both columns. **In most classes eight of the ten have one**, and in six of the eight the reader\'s version is a step further than the writer\'s and sounds like the same thing.'));
out.push(board('The bolts measure M12 against a specified M16.', 'So the building is unsafe.'));
out.push(p('**b**  Which sentence marks a step the argument does not take? **1** _It does not follow that the frame will fail._  **2** _The frame may well be safe._  **3** _Nothing in this establishes when the roller went out of service._  **4** _Of course, more work would be needed._  **5** _I am not an expert on loading._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the refusal does?   **A** protects the writer   **B** **stops a reader taking a step the evidence does not support, by naming the step** — which no amount of hedging the claim itself will do   **C** makes the writing more modest'));
out.push(p('**b**  Listen again. **1** What did Dr Qabbani\'s abstract produce in a conference programme?   **2** What does Mrs Oueidat say about _I am not an expert_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.5  The step nobody took but everybody read', [
  ['Ms Huda', 'Dr Qabbani — the abstract and the conference programme.'],
  ['Dr Qabbani', '⚠ **My abstract said that in seven of eleven cases a serological diagnosis was reached.** **The programme said: second samples improve diagnosis.** **The programme was not wrong about my words and it was not what I had written.**'],
  ['Mrs Tarabishi', 'But that is what seven of eleven means.'],
  ['Dr Qabbani', '⚠ **No, and this is the step.** **Seven of eleven is a count of what happened in eleven cases where the first sample failed.** **_Improve diagnosis_ is a claim about what would happen if you took more second samples**, which requires the ten who had none, and I have nothing about the ten.'],
  ['Mrs Khoury', '⚠ **And hedging the claim would not have stopped it.** **_Seven of eleven cases possibly reached a diagnosis_ is a weaker sentence and the programme would have written the same line.** **The repair is not a weaker claim: it is a named step.**'],
  ['Mr Shihabi', 'What does a named step look like?'],
  ['Dr Qabbani', '⚠ _It does not follow that taking more second samples would raise the diagnosis rate; the ten with no second sample are the group that would answer that and I have nothing about them._ **Twenty-eight words, and the programme could not have written its line.**'],
  ['Mr Tayara', 'Is that not just saying what you do not know?'],
  ['Mrs Oueidat', '⚠ **It is saying what the reader must not do, which is different.** **_I do not know what the ten would show_ is a statement about the writer.** **_It does not follow that more second samples would help_ is a statement about the inference**, and the inference is what the reader is about to make.'],
  ['Mrs Ajouz', 'So _I am not an expert on loading_ is the wrong form.'],
  ['Mrs Oueidat', '⚠ **It is the wrong form and it is worse than nothing.** **It tells a reader that the writer has no standing**, which invites them to find somebody who has and to ignore the finding they were given. **Name the step, not yourself.**'],
  ['Mr Zahreddine', 'I write three of these in every opinion and I had never thought of it that way.'],
  ['Mrs Khoury', '⚠ **Say the three.**'],
  ['Mr Zahreddine', '⚠ _It does not follow that the frame will fail._ _Nothing in this establishes when the roller went out of service._ _I make no claim about the welds, which I have not examined._ **Three sentences, about forty words, and they are the only part of the opinion nobody has ever argued with.**'],
  ['Mrs Rizk', 'Does a donor read those?'],
  ['Mr Zahreddine', '⚠ **A donor skips them and a lawyer reads nothing else.** **Which is the arithmetic of it: they cost forty words on the readers who skip and they are the whole document to the reader who matters.**'],
  ['Jad', 'How many is too many?'],
  ['Dr Qabbani', '🔊 ⚠ **Three in a paper and one in an abstract, in my experience.** **More than that and you have written an argument you do not believe** — **and the right repair then is not another refusal but a smaller claim.**'],
]));
out.push(sp());
out.push(box('Language box – naming the step', [
  '**What a named step is.** ⚠ **A sentence that says what the reader must not infer, in the reader\'s direction and not in yours.** _It does not follow that taking more second samples would raise the diagnosis rate._ **It is a statement about the inference and not about the writer.**',
  '**Why hedging the claim does not do it.** ⚠ **_Seven of eleven cases possibly reached a diagnosis_ is a weaker sentence and produces the same headline.** **A reader takes the step because the step is available, not because the claim was strong** — **and the only thing that closes a step is naming it.**',
  '**The three forms.** ⚠ _It does not follow that…_ **(the inference)** · _Nothing in this establishes…_ **(the fact nobody has)** · _I make no claim about…_ **(the territory you have not entered)**. **Each names something outside the finding, and none of them weakens the finding itself.**',
  '**The form that is worse than nothing.** ⚠ _I am not an expert on loading._ **It tells a reader the writer has no standing**, which invites them to find somebody who has and to disregard the finding they were given. **Name the step, not yourself.**',
  '**Who reads them.** ⚠ **A donor skips them and a lawyer reads nothing else.** **They cost forty words on the readers who skip, and they are the whole document to the reader who matters** — **and the only documents in which they are wasted are the ones nobody will ever rely on.**',
  '**Where the named step goes.** ⚠ **In the paragraph that carries the claim, and not in a section of its own.** **A page of limitations at the end of a document is a page a reader meets after they have taken every step you were trying to close** — **and a reader who has already taken a step does not untake it.** **One sentence, beside the claim, every time.**',
  '**How many.** ⚠ **Three in a paper, one in an abstract.** **More than three and you have written an argument you do not believe**, and the repair then is not another refusal but a smaller claim — **which is 7.1\'s finding arriving from the other side.**',
  '**Pronunciation.** 🔊 **Track 7.6** **Say a refusal as information, at the speed of the sentence before it.** ⚠ _It does not follow that the frame will fail._ **With a stress on _not_ it becomes a denial and the reader hears somebody defending themselves.** **Flat, it is a fact about an inference**, and the reader files it and goes on.',
  '**Practise:** Name a step the argument does not take. **1** with _it does not follow that_  **2** with _nothing in this establishes_  **3** with _I make no claim about_  **4** where the honest repair is a smaller claim instead  **5** one where naming the step is unnecessary — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the finding from the card. B says **the step a reader would take** and writes **the sentence that names it.** ⚠ **Two rows on each card need no refusal at all** — **the finding has nowhere further to go** — **and B must say so.** Change cards.'));
out.push(table(['Card A – the finding', 'Card B – the finding'], [
  ['_In seven of eleven cases a serological diagnosis was reached._', '_Nine of the eleven came from a printed sheet._'],
  ['_⚠ The box was signed for on 26 June and has not been seen since._', '_⚠ The rota ends at nine and nine of the nineteen arrived after nine._'],
  ['_The bolts measure M12 against a specified M16._', '_Applications rose from forty a month to fifty-one._'],
  ['_⚠ Four of the twelve certificates are not in the file._', '_⚠ The form has not asked whether the applicant is the occupier since 2021._'],
  ['_Conversations fell from nineteen a week to eleven after the ten minutes went._', '_Eleven queries in the first quarter and two in the second._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the step, and the sentence that names it. ⚠ **Rows 2 and 4 on both cards need no refusal**, because each is a count or an absence with no inference attached to it — **and a refusal there reads as a writer apologising for a fact.** **The four that do need one divide evenly**: two take _it does not follow that_ and two take _nothing in this establishes_, and the class should say which is which and why.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own strongest finding** and write **the step a reader would take from it.** ⚠ **In their words, as in 7.1.** **Then write the sentence that names the step**, choosing between the three forms. **If you need more than three for one document, stop and make the claim smaller instead.**'));
out.push(p('**b**  Swap. Your partner reads **your finding without the refusal** and says what they conclude; then reads it **with** the refusal and says what they conclude. ⚠ **The second answer should be the same as your finding, word for word.** **If it is not, the refusal has named the wrong step.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Dr Qabbani\'s abstract said that in seven of eleven cases a serological diagnosis was reached, and the conference programme said: second samples improve diagnosis. The programme was not wrong about his words and it was not what he had written. Mrs Tarabishi said that is what seven of eleven means, and it is not, and this is the step: seven of eleven is a count of what happened in eleven cases where the first sample failed, and improve diagnosis is a claim about what would happen if you took more second samples, which requires the ten who had none, and he has nothing about the ten. Mrs Khoury said hedging the claim would not have stopped it — seven of eleven cases possibly reached a diagnosis is a weaker sentence and the programme would have written the same line — and the repair is not a weaker claim but a named step. Mr Shihabi asked what a named step looks like, and it does not follow that taking more second samples would raise the diagnosis rate; the ten with no second sample are the group that would answer that and I have nothing about them. Twenty-eight words, and the programme could not have written its line. Mr Tayara asked whether that is not just saying what you do not know, and Mrs Oueidat said it is saying what the reader must not do, which is different: I do not know what the ten would show is a statement about the writer, and it does not follow that more second samples would help is a statement about the inference, and the inference is what the reader is about to make. Mrs Ajouz said so I am not an expert on loading is the wrong form, and it is the wrong form and worse than nothing, because it tells a reader the writer has no standing, which invites them to find somebody who has and to ignore the finding they were given: name the step, not yourself. Mr Zahreddine said he writes three of these in every opinion and had never thought of it that way, and gave the three: it does not follow that the frame will fail; nothing in this establishes when the roller went out of service; I make no claim about the welds, which I have not examined. Three sentences, about forty words, and the only part of the opinion nobody has ever argued with. Mrs Rizk asked whether a donor reads those, and a donor skips them and a lawyer reads nothing else, which is the arithmetic of it. Mr Attar asked how many is too many, and Dr Qabbani said three in a paper and one in an abstract: more than that and you have written an argument you do not believe, and the right repair then is not another refusal but a smaller claim._'));
out.push(p('**Listener task:** write the step a reader would take from your own finding, in their words.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the abstract Dr Qabbani rewrote. Answer the questions.'));
out.push(model([
  '**Dr H. Qabbani** · _abstract submitted to the spring meeting_ · _second samples in culture-negative admissions_ · **26 February**',
  '**Forty-one culture-negative admissions were recorded at one teaching hospital in the three years to March 2026.** **Thirty-one had a second blood sample taken before antibiotics and ten did not.** **The hospital admits through one department and has about four hundred beds, and all three years are complete.**',
  '**In eleven of the thirty-one, the second sample was available and the first was not.** **In seven of those eleven a serological diagnosis was reached.** **Eleven is every admission in which the two samples disagreed and there were no others.** **The eleven are drawn from the same three years and the same two wards and were not selected by me.**',
  '**It does not follow that taking more second samples would raise the diagnosis rate.** ⚠ **The ten with no second sample are the group that would answer that, and this series has nothing about them beyond the hour of arrival.** **The ten are not a comparison group: they are the admissions in which nobody took a second sample, and why nobody did is the thing this series cannot say.**',
  '**Nothing in this series establishes why the ten were not taken.** **Eight of the ten presented at night and two of those arrived with antibiotics already running from another unit, in which case a pre-antibiotic second sample was not available to anybody.** **Night is taken as between eight in the evening and eight in the morning, which is a shift boundary and not a clinical one.** **The two who arrived with antibiotics came from the same unit and on the same night.** **The remaining eight are unaccounted for and no reason is recorded for any of them.**',
  '**I make no claim about cost.** **The additional venepuncture is about four minutes and the bottles are on the trolley**, and four minutes at two in the morning on a registrar with one pair of hands is a figure this series has not weighed and is not competent to weigh. **One registrar put the two lines at eight seconds for the time and twelve for the question, and she had counted them; that figure is hers and not mine.**',
  '**What would answer the question this abstract does not answer.** **Two lines on the admissions sheet from January: the time, and whether the first sample had already gone to the laboratory.** **About eighteen months of those two lines, which would give about twenty admissions: a small number, and more than this series has.**',
  '**And one sentence about the series rather than its findings.** **The three years of records were kept to answer this question and cannot answer it**, because the note that asked for a second sample named no decider and produced no reasons. **Thirty-one and ten, and nothing about why.** **The note is reproduced in full in the paper and is eleven words long.**',
]));
out.push(item('1', 'How many named steps are there in the abstract, and which form does each use?'));
out.push(item('2', 'What does he say about cost, and why?'));
out.push(item('3', 'What does the last paragraph say the three years of records cannot do, and why?'));
out.push(writers([
  'An abstract that names its steps: **the counts first** → **the finding, with the denominator inside it** → **the step the reader would take, named** → **the fact nobody has, named** → **the territory you have not entered, named** → **what would answer the question** → **and one sentence about the series itself.**',
  '⚠ **Name the step in the reader\'s direction, not in yours.** _It does not follow that taking more second samples would raise the diagnosis rate._ **A statement about the inference, not about the writer** — **and the inference is what the reader is about to make and what a programme or a desk will print.**',
  '**Use each of the three forms once and no form twice.** ⚠ _It does not follow that…_ · _Nothing in this series establishes…_ · _I make no claim about…_ **Three in a paper and one in an abstract**, and a fourth tells a reader that the writer does not believe the argument.',
  '**Say what would answer the question you are refusing.** ⚠ _Two lines on the admissions sheet from January._ **A refusal with a remedy attached reads as a finding about a gap; a refusal on its own reads as a disclaimer** — **and the difference is one sentence.**',
  '⚠ And **do not say what you are not an expert in.** _I make no claim about cost_ **names a territory.** _I am not a health economist_ **names a person**, and a reader who has been told the writer has no standing goes and finds somebody who has.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of an abstract that names its steps (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **______________ were recorded at ______________ in ______________.** **______________ and ______________.**   **In ______________, ______________.** **In ______________ of those ______________, ______________.** **______________ is every ______________ and there were no others.**   **It does not follow that ______________.** ⚠ **______________ are the group that would answer that, and ______________ has nothing about them.**   **Nothing in this ______________ establishes ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The step named in the reader\'s direction, not the writer\'s',
  'Each of the three forms used once and none twice',
  'A remedy attached to at least one refusal',
  'No sentence about what you are not an expert in',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their named steps**, and the room says what each one stops a reader doing.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole abstract (260 words or more), to the shape in the writer\'s box: the counts, the finding, the three named steps, the remedy, and one sentence about the work itself.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the step named in the reader\'s direction, three forms used once each, a remedy attached, and no sentence about standing.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their finding without the refusal and the room says what it concludes; then with the refusal, and the room says again.** ⚠ **The second answer should be the finding, word for word.** **Where it is not, the refusal has named the wrong step** — and the class should be asked which step it named instead. Then the sentence the cycle ends on, which is Mr Zahreddine\'s: **a donor skips them and a lawyer reads nothing else.**'));
out.push(hw('Take **the thing somebody concluded from your writing that you had not concluded**, from Stage 1, and write **the sentence that would have stopped them.** ⚠ **Then check it against the test: read the finding with the sentence to somebody and ask what they conclude.** **It should be your finding, word for word.** **Bring the original, the named step and what your reader said.** **7.4 states the limit of your evidence before anybody asks for it.**'));

// ===================== 7.4 =====================
out.push(pb());
out.push(h2('7.4  The limit stated before anybody asks'));
out.push(p('**Function:** stating the limit of your evidence before anybody asks for it   ·   **Grammar:** the evidence inventory · _this rests on_ · the limit as the opening move   ·   **Pronunciation:** a limit read at the speed of the finding'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the last time somebody asked you what your evidence rested on, and whether the answer was in the document.** ⚠ **Two words again: _in it_ or _not in it_.** Your teacher counts. **In most classes seven or eight of the ten say _not in it_**, and every one of those seven had the answer ready in about four seconds.'));
out.push(board('Every effort has been made to be comprehensive.', 'Which journals? How many did you read?'));
out.push(p('**b**  Which of these states a limit before it is asked for? **1** _This review covers the four journals held by the university and no others._  **2** _A fuller search would of course be desirable._  **3** _Every effort has been made to be comprehensive._  **4** _Of the sixty-one papers identified, I read fifty-three; eight were not obtainable and are listed._  **5** _The literature in this field is very large._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide a pre-emptive limit does?   **A** apologises in advance   **B** **takes the question away from the reader by answering it first, in a countable form** — and a reader who has been given the inventory stops looking for one   **C** makes the claim smaller'));
out.push(p('**b**  Listen again. **1** What happened to Mrs Tarabishi\'s first literature review?   **2** What does Mrs Khoury say about the difference between a limit and an apology?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.7  Sixty-one, fifty-three, eight', [
  ['Ms Huda', 'Mrs Tarabishi — the first review and what came back.'],
  ['Mrs Tarabishi', '⚠ **Four pages of comments and the first one was: what did you search?** **I had written _every effort has been made to be comprehensive_.**'],
  ['Mrs Khoury', 'Which is a sentence no evidence could contradict, and 6.6 said what that means.'],
  ['Mrs Tarabishi', '⚠ **It means it is not information, and I had put it there to stop exactly the question it produced.** **The second version has three numbers in it and that comment has not come back in two years.**'],
  ['Dr Qabbani', 'Give the three.'],
  ['Mrs Tarabishi', '⚠ _Of the sixty-one papers identified, I read fifty-three; eight were not obtainable and are listed at the end._ **Sixty-one, fifty-three, eight.** **A reader who has those three numbers has the whole of my search and can argue with it.**'],
  ['Mr Shihabi', 'And you want them to be able to argue with it.'],
  ['Mrs Tarabishi', '⚠ **I want them to be able to and not to need to.** **The eight are listed, so the only argument left is whether the eight matter** — **and two of my examiners looked at the list and neither said anything.**'],
  ['Mrs Oueidat', '⚠ **Which is the whole return on it.** **A reader who is handed the inventory stops looking for one.** **A reader who is told that every effort was made starts.**'],
  ['Mr Tayara', 'What is the difference between that and an apology?'],
  ['Mrs Khoury', '⚠ **An apology is about the writer and a limit is about the evidence.** _A fuller search would of course be desirable_ **is the writer wishing.** _Eight were not obtainable and are listed_ **is a fact with a page reference.** **One invites sympathy and the other invites checking, and only one of them is useful.**'],
  ['Mrs Ajouz', 'In a registration file the limit has to be first. They read the first page and stop.'],
  ['Mrs Oueidat', '⚠ **Which is the other half of this cycle and it is about position, not wording.** **A limit at the end of a document is a limit a reader meets after they have formed their view**, and 5.7 said what happens to the end of anything.'],
  ['Mr Zahreddine', 'Mine is in the first paragraph and it took me nineteen years.'],
  ['Mrs Rizk', 'Donors do not read limits at all.'],
  ['Mrs Khoury', '⚠ **Donors do not read them and donors\' lawyers do, eighteen months later, and the lawyer is the reader the sentence is for.** **Every document in this unit has two readers and the limit is written to the second.**'],
  ['Jad', 'And if the limit is severe?'],
  ['Mrs Tarabishi', '🔊 ⚠ **Then it goes first and it goes in numbers.** **The worse the limit, the earlier it belongs** — **because a reader who finds a severe limit on page four reads the first three pages again, and a reader who finds it on page one reads the rest knowing what it is.**'],
]));
out.push(sp());
out.push(box('Language box – the limit stated first', [
  '**What a pre-emptive limit is.** ⚠ **The answer to _what does this rest on_, given before the question is asked, in a countable form.** _Of the sixty-one papers identified, I read fifty-three; eight were not obtainable and are listed._ **Three numbers, and a reader who has them has the whole of the search.**',
  '**The difference between a limit and an apology.** ⚠ **An apology is about the writer; a limit is about the evidence.** _A fuller search would of course be desirable_ **is the writer wishing.** _Eight were not obtainable and are listed_ **is a fact with a page reference** — **one invites sympathy and the other invites checking.**',
  '**Where it goes, and this is the half that is about position.** ⚠ **The worse the limit, the earlier it belongs.** **A reader who finds a severe limit on page four reads the first three pages again**; **a reader who finds it on page one reads the rest knowing what it is.**',
  '**The inventory, which is the form that works.** ⚠ **What was identified, what you looked at, what you did not, and where the list of the last is.** **Four parts, usually one sentence**, and the fourth part is the one everybody leaves out and the one that stops the argument.',
  '**And the arithmetic of it, which is the reason to do it at all.** ⚠ **A reader who is handed the inventory stops looking for one.** **A reader who is told that every effort was made starts looting the document for what the effort missed** — **and the sentence that was put there to prevent the question is what produced it.**',
  '**The two readers.** ⚠ **A donor does not read limits and a donor\'s lawyer does, eighteen months later.** **An examiner skims and a second examiner checks.** **The limit is written to the second of each pair**, and it costs the first of them about fifteen words.',
  '**Pronunciation.** 🔊 **Track 7.8** **Read the limit at the speed of the finding, in the same voice.** ⚠ _Of the sixty-one papers identified, I read fifty-three._ **A limit read slowly or quietly tells a listener it is the difficult part** — **and in a viva or a hearing that is the sentence they will come back to, for no reason except that you marked it.**',
  '**Practise:** State a limit before it is asked for. **1** with an inventory of four parts  **2** where the list goes at the end  **3** where the limit is severe — so it goes first  **4** turning an apology into a limit  **5** one where there is no limit to state — and say why',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the apology from the card. B turns it into **a limit with an inventory**, and says **where in the document it belongs.** ⚠ **Two rows on each card are not apologies and not limits either** — **they are claims, and B must say so rather than converting them.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_Every effort has been made to be comprehensive._', '_A fuller search would of course be desirable._'],
  ['_⚠ Of the forty-one admissions, thirty-one had a second sample._', '_⚠ Eleven of the hundred and four were against a superseded sheet._'],
  ['_It was not possible to consult all the relevant files._', '_Time did not permit a full reconciliation._'],
  ['_⚠ Nine of the nineteen arrived after the rota ended at nine._', '_⚠ Fifty-five of the fifty-six positions are below grade._'],
  ['_Some material was unavailable at the time of writing._', '_Regrettably the September figures could not be obtained._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each inventory, and where it belongs. ⚠ **Rows 2 and 4 on both cards are claims and not apologies**, and a student who converts one has turned a finding into a limitation — **which is the commonest over-application of this cycle, and worth naming now.** **Four of the six real apologies convert into an inventory and two cannot**, because the writer does not know what they did not see: **_I do not know how many files exist_ is itself the inventory.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the longest thing you have written this year** and write **the four-part inventory for it**: what was identified, what you looked at, what you did not, and where the list of the last is. ⚠ **If you cannot produce the fourth part, make it** — **it is usually a page and it is the part that ends the argument.**'));
out.push(p('**b**  Swap. Your partner reads **only your inventory** and writes **the one question they would still ask.** ⚠ **A complete inventory produces no question.** **In most pairs the first attempt produces one**, and it is almost always about the list the fourth part promised and did not locate.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Tarabishi had four pages of comments on her first literature review and the first comment was: what did you search? She had written every effort has been made to be comprehensive. Mrs Khoury said that is a sentence no evidence could contradict, and 6.6 said what that means — it means it is not information, and she had put it there to stop exactly the question it produced. The second version has three numbers in it and that comment has not come back in two years. Dr Qabbani asked for the three, and they are: of the sixty-one papers identified, I read fifty-three; eight were not obtainable and are listed at the end. Sixty-one, fifty-three, eight — and a reader who has those three numbers has the whole of the search and can argue with it. Mr Shihabi said so you want them to be able to argue with it, and she wants them to be able to and not to need to: the eight are listed, so the only argument left is whether the eight matter, and two of her examiners looked at the list and neither said anything. Mrs Oueidat said that is the whole return on it — a reader who is handed the inventory stops looking for one, and a reader who is told that every effort was made starts. Mr Tayara asked what the difference is between that and an apology, and Mrs Khoury said an apology is about the writer and a limit is about the evidence: a fuller search would of course be desirable is the writer wishing, and eight were not obtainable and are listed is a fact with a page reference, and one invites sympathy and the other invites checking. Mrs Ajouz said that in a registration file the limit has to be first, because they read the first page and stop, and Mrs Oueidat said that is the other half of the cycle and it is about position and not wording: a limit at the end of a document is one a reader meets after they have formed their view. Mr Zahreddine said his is in the first paragraph and it took him nineteen years. Mrs Rizk said donors do not read limits at all, and Mrs Khoury said donors do not read them and donors\' lawyers do, eighteen months later, and the lawyer is the reader the sentence is for: every document in this unit has two readers and the limit is written to the second. And Mr Attar asked what happens if the limit is severe, and Mrs Tarabishi said then it goes first and it goes in numbers — the worse the limit, the earlier it belongs, because a reader who finds a severe limit on page four reads the first three pages again, and a reader who finds it on page one reads the rest knowing what it is._'));
out.push(p('**Listener task:** write your own four-part inventory, and the question your partner still asked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the opening of Mrs Tarabishi\'s second review. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _review of the literature on smallholder credit, 1998 to 2024_ · _opening section_ · **28 February**',
  '**What this review rests on.** **Of the sixty-one papers identified by the search described below, I read fifty-three in full.** **Eight were not obtainable and are listed with their titles and the reason in Appendix A.** **No paper was excluded on grounds of quality or of conclusion.**',
  '**The search.** **Four journals held by the university, two regional databases, and the reference lists of every paper read.** **Arabic and English only.** **The reference lists were followed to one level only and not iteratively, which is a choice and not an omission.** ⚠ **French and Turkish material exists and is not in this review, and I do not know how much of it there is**, which is the largest limit here and is the reason it is in the first paragraph.',
  '**The eight.** **Three are conference papers never issued as proceedings.** **Two are theses held in one library that did not answer three requests.** **Two are behind a subscription the university does not hold.** **One exists only as a working paper cited by four others and I have never seen a copy.** **All eight are cited in the review with a note that I have not read them.**',
  '**What the eight would change if they all said the same thing.** **The review finds that the evidence on repayment rates is divided and that the division follows the method and not the region.** ⚠ **Eight papers all finding the opposite would not overturn that: they would make the division narrower and leave the method finding untouched.** **Thirty-one against twenty-two becomes thirty-one against thirty if all eight go the other way, and the method split is untouched, because none of the eight uses administrative records.** **I have done that arithmetic rather than asserting it.**',
  '**What I am not reviewing.** **Not the grey literature of the ministries, which is uncatalogued.** **Not material after June 2024.** **Not anything on urban credit, which is a different question with its own literature.** **And not the two papers published after I closed the search in July, which I know exist and have not read.**',
  '**On the division I report.** **Thirty-one of the fifty-three find repayment above eighty per cent and twenty-two below.** **All thirty-one use administrative records and nineteen of the twenty-two use household surveys.** **The twenty-two are not a minority position: they are a different measurement, and the review says so in its title.** **That is the finding of this review and it is a finding about method.**',
  '**And one sentence about the first version of this review.** **It opened with _every effort has been made to be comprehensive_.** ⚠ **The first comment I received asked what I had searched**, and the sentence had been put there to prevent that question. **It is the only sentence I have ever deleted and then watched produce the thing it was there to prevent.**',
]));
out.push(item('1', 'What are the four parts of the inventory, and where is the list of the eight?'));
out.push(item('2', 'What does she say about the French and Turkish material, and why is it in the first paragraph?'));
out.push(item('3', 'What would the eight change if they all said the same thing, and how does she know?'));
out.push(writers([
  'An opening that states its limits: **what was identified** → **what you read** → **what you did not, with the list located** → **the search itself** → **the largest limit, in the first paragraph if it is severe** → **what the missing material would change, costed** → **what you are not reviewing** → **and the finding.**',
  '⚠ **Give the inventory four parts and locate the list.** _Sixty-one identified, fifty-three read, eight not obtainable and listed in Appendix A._ **The fourth part is the one everybody leaves out** — **and a reader who can turn to the list has no argument left except whether the eight matter.**',
  '**Put the largest limit first and say that is why it is there.** ⚠ _French and Turkish material exists and is not in this review, and I do not know how much of it there is._ **A limit the writer cannot quantify is still a limit**, and _I do not know how much_ is the inventory for it.',
  '**Cost the missing material instead of asserting that it would not matter.** ⚠ _Eight papers all finding the opposite would make the division narrower and leave the method finding untouched._ **This is 7.2\'s costed concession applied to an absence**, and it is the only way of saying _the eight do not change it_ that a reader can check.',
  '⚠ And **list what you are not reviewing, as territory and not as apology.** _Not the grey literature of the ministries, which is uncatalogued._ **Three sentences of boundary at the front save a reader the whole of the review spent wondering**, and each one names a thing and a reason.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the opening of a document that states its limits (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **What this ______________ rests on.** **Of the ______________ identified by the search described below, I ______________.** **______________ were not ______________ and are listed with ______________ in ______________.** **______________ was excluded on grounds of ______________.**   **The search.** **______________.** ⚠ **______________ exists and is not in this ______________, and I do not know ______________**, which is the largest limit here and is the reason it is in the first paragraph.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'An inventory of four parts, with the list located',
  'The largest limit in the first paragraph, and said to be so',
  'The missing material costed, not asserted away',
  'No sentence that no evidence could contradict',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their inventory sentence**, and the room writes the one question it would still ask.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole opening (260 words or more), to the shape in the writer\'s box: the inventory, the search, the largest limit, the list, the costing, the boundaries and the finding.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a four-part inventory with the list located, the largest limit first, the absence costed, and no uncontradictable sentence.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their limit twice: once at the speed of the sentence before it and once slowly.** ⚠ **The room says which version it would ask a question about.** **The slow one** — because a limit read slowly has been marked by its writer as the difficult part, and a reader in a viva or a hearing goes to whatever the writer marked. Then the sentence the cycle ends on, which is Mrs Tarabishi\'s: **the worse the limit, the earlier it belongs.**'));
out.push(hw('Take **the longest thing you have written this year** and write **the four-part inventory** for it. ⚠ **Then find the list that the fourth part promises.** **If it does not exist, make it, and time yourself** — **it is usually under an hour and it is the hour that ends the argument.** **Bring the inventory and the list.** **7.5 answers an objection you have not been given, without inventing one.**'));

// ===================== 7.5 =====================
out.push(pb());
out.push(h2('7.5  The objection you have not been given'));
out.push(p('**Function:** answering an objection you have not yet been given, without inventing one   ·   **Grammar:** the real objection against the straw one · the four-second test   ·   **Pronunciation:** an objection quoted in somebody else\'s voice'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one objection you answered in writing before anybody made it, and whether anybody then made it.** ⚠ **Two words: _they did_ or _they did not_.** Your teacher counts the columns. **In most classes the _did not_ column is much longer**, and about half of that column is objections nobody was ever going to make.'));
out.push(board('Some might argue that counting is reductive.', 'Nobody said that. Who is "some"?'));
out.push(p('**b**  Which of these is a real objection rather than a straw one? **1** _Some might argue that counting is reductive._  **2** _It could be said that more research is needed._  **3** _A reader who holds the 2019 file will say the costing was done then and rejected._  **4** _Critics may claim the figures are meaningless._  **5** _The branch pharmacist who covered August will say she had one pair of hands._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the test is?   **A** whether the objection is strong   **B** **whether you can name the person who would make it and write their sentence in four seconds** — and if you cannot, it is a straw objection and costs you the others   **C** whether it has been made before'));
out.push(p('**b**  Listen again. **1** What happened to the proposal in which Mrs Rizk answered three objections?   **2** What does Mrs Oueidat say _some might argue_ does to a reader?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.9  Some might argue', [
  ['Ms Huda', 'Mrs Rizk — the proposal with three objections answered in it.'],
  ['Mrs Rizk', '⚠ **Two of the three were real and one was _some might argue that a vehicle is not the best use of the money_.** **The donor\'s reply dealt with my straw objection at length and did not mention the other two.**'],
  ['Mrs Tarabishi', 'Why would they do that?'],
  ['Mrs Oueidat', '⚠ **Because it was the only one with no name on it.** **_Some might argue_ tells a reader that the writer is arguing with nobody**, and a reader who has been handed an argument with nobody will join it, because it is free.'],
  ['Dr Qabbani', 'And the two real ones went unanswered.'],
  ['Mrs Rizk', '⚠ **Unanswered and unmentioned.** **The straw one used the whole of the reply.** **It cost me the two that mattered and I had put it in to look thorough.**'],
  ['Mr Shihabi', 'What is the test? I cannot always tell.'],
  ['Mrs Khoury', '⚠ **Four seconds.** **Name the person who would make the objection and write their sentence.** **If you cannot do both inside four seconds, it is a straw objection.** **Not a weak one — a straw one, with nobody behind it.**'],
  ['Mr Tayara', 'Four seconds seems arbitrary.'],
  ['Mrs Khoury', '⚠ **It is arbitrary and it works, and the reason it works is that a real objection comes with a face.** **You have heard the person say something like it.** **A straw objection has to be constructed, and constructing takes longer than four seconds.**'],
  ['Mrs Ajouz', 'Mine come with a face. The registration officer who returned my file in March.'],
  ['Mrs Oueidat', '⚠ **Then write her sentence and answer it**, and the answer is worth four of _some might argue_. **A named objection also tells the reader you have talked to somebody**, which is the one thing a document cannot fake.'],
  ['Mr Zahreddine', 'Is it ever right to answer something nobody has said?'],
  ['Mrs Khoury', '⚠ **Constantly, and that is the whole of this cycle.** **The objection has not been made yet and the person who will make it exists.** **What is never right is answering an objection whose maker does not exist.**'],
  ['Jad', 'How do you phrase it without naming them to their face?'],
  ['Mrs Oueidat', '⚠ **You name the position and not the person.** _A reader who holds the 2019 file will say the costing was done then and rejected._ **The 2019 file is a thing and whoever holds it will recognise themselves**, and nobody else is accused of anything.'],
  ['Mrs Tarabishi', 'And if the person exists but you cannot talk to them?'],
  ['Mrs Rizk', '⚠ **You write their sentence anyway and say you have not spoken to them.** **A constructed objection with a name on it is honest; a constructed objection with nobody on it is the straw one.**'],
  ['Mrs Rizk', '🔊 ⚠ **And the thing I shall take away is the arithmetic of the reply.** **Four paragraphs on the objection nobody had, and silence on the two that had names.**'],
]));
out.push(sp());
out.push(box('Language box – the real objection and the straw one', [
  '**The four-second test.** ⚠ **Name the person who would make the objection and write their sentence.** **If you cannot do both inside four seconds, it is a straw objection** — **not a weak one, a straw one, with nobody behind it.**',
  '**Why four seconds works.** ⚠ **A real objection comes with a face**: you have heard somebody say something like it. **A straw objection has to be constructed**, and constructing takes longer than four seconds, which is why the test is a clock and not a judgement.',
  '**What a straw objection costs.** ⚠ **It is the only one in your document with nobody behind it, so it is the one a reader joins** — **because joining it is free.** **And the reply then deals with it at length and does not mention the real ones**, which is what happened to Mrs Rizk and is the shape of it every time.',
  '**_Some might argue_ · _it could be said_ · _critics may claim_.** ⚠ **All three say: I am arguing with nobody.** **A reader who has been handed an argument with nobody will supply the somebody**, and they will supply themselves.',
  '**How to name without accusing.** ⚠ **Name the position, not the person.** _A reader who holds the 2019 file will say the costing was done then and rejected._ **The file is a thing; whoever holds it recognises themselves; and nobody else has been accused of anything.**',
  '**The objector who will never read the document.** ⚠ **Name them anyway.** **The 2019 file\'s holder may have retired and the objection is still live**, because whoever holds the file now will make it. **The four-second test asks whether a person would say it, not whether that person is in the building.**',
  '**And what answering a real unmade objection buys.** ⚠ **It tells the reader you have talked to somebody**, which is the one thing a document cannot fake. **Four of these are worth less than one with a name on it**, and the four cost the one.',
  '**Pronunciation.** 🔊 **Track 7.10** **Read a quoted objection in the other person\'s voice and then answer it in your own.** ⚠ **The change of voice has to be audible or the reader hears you arguing with yourself.** **In writing the same change is done with the naming** — _a reader who holds the 2019 file will say_ — **and a sentence without it is a sentence in one voice throughout.**',
  '**Practise:** Produce a real objection in four seconds. **1** from somebody who holds a document  **2** from somebody who did the work before  **3** from somebody who will pay   **4** where no name comes in four seconds — so do not answer it  **5** one you have actually been given before — and say who gave it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card and starts a watch. B has **four seconds** to name the person who would object and give their sentence. ⚠ **If B cannot, the objection is not answered in the document and B must say so.** **Two rows on each card have no objector at all.** Change cards.'));
out.push(table(['Card A – the claim', 'Card B – the claim'], [
  ['_A second Saturday vehicle, at four hundred thousand a year._', '_A printer on the dispensing bench, at two hundred thousand._'],
  ['_⚠ The ten minutes go back to the form period from 6 January._', '_⚠ The rota is to be amended to end at half past twelve._'],
  ['_Clause 7.4 should read shall and not should._', '_The field asking whether the applicant is the occupier should be restored._'],
  ['_⚠ The review covers four journals and two databases._', '_⚠ The abstract claims nothing about the ten who had no second sample._'],
  ['_The eighth paragraph of the piece should be corrected._', '_The minute should name the thing it decides in every operative sentence._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each objector, named by position, and their sentence. ⚠ **Rows 2 and 4 on both cards produce no objector inside four seconds**, and the class should say why: **in rows 2 the thing proposed costs nobody anything, and in rows 4 the claim is about what the document does and not about the world.** **Nobody objects to an inventory.** **A student who produces an objector there has constructed one**, which is the fault this cycle exists to catch.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own strongest claim** and produce **three objectors in four seconds each**, naming each by position and writing their sentence. ⚠ **Keep only the ones that arrive inside the four seconds.** **Most people get two of three**, and the one that does not arrive is the one that would have cost them the other two.'));
out.push(p('**b**  Swap. Your partner reads your three and says **which one they would answer if they were the reader.** ⚠ **They will choose the weakest.** **That is not a fault in them: it is what readers do**, and it is why the weakest one has to come out rather than be strengthened.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Rizk answered three objections in a proposal and two of the three were real: the third was some might argue that a vehicle is not the best use of the money. The donor\'s reply dealt with the straw objection at length and did not mention the other two. Mrs Tarabishi asked why they would do that, and Mrs Oueidat said because it was the only one with no name on it — some might argue tells a reader that the writer is arguing with nobody, and a reader who has been handed an argument with nobody will join it, because it is free. Dr Qabbani said so the two real ones went unanswered, and unanswered and unmentioned: the straw one used the whole of the reply, and it cost her the two that mattered and she had put it in to look thorough. Mr Shihabi asked what the test is, since he cannot always tell, and Mrs Khoury said four seconds: name the person who would make the objection and write their sentence, and if you cannot do both inside four seconds it is a straw objection — not a weak one, a straw one, with nobody behind it. Mr Tayara said four seconds seems arbitrary, and it is arbitrary and it works, and the reason it works is that a real objection comes with a face: you have heard the person say something like it, where a straw objection has to be constructed and constructing takes longer than four seconds. Mrs Ajouz said hers come with a face, the registration officer who returned her file in March, and Mrs Oueidat said then write her sentence and answer it, and the answer is worth four of some might argue — a named objection also tells the reader you have talked to somebody, which is the one thing a document cannot fake. Mr Zahreddine asked whether it is ever right to answer something nobody has said, and constantly, and that is the whole of the cycle: the objection has not been made yet and the person who will make it exists, and what is never right is answering an objection whose maker does not exist. Mr Attar asked how you phrase it without naming them to their face, and you name the position and not the person — a reader who holds the 2019 file will say the costing was done then and rejected — because the file is a thing and whoever holds it will recognise themselves, and nobody else is accused of anything. And Mrs Tarabishi asked what happens if the person exists but you cannot talk to them, and you write their sentence anyway and say you have not spoken to them: a constructed objection with a name on it is honest, and a constructed objection with nobody on it is the straw one. And Mrs Rizk said the thing she will take away is the arithmetic of the reply: four paragraphs on the objection nobody had, and silence on the two that had names._'));
out.push(p('**Listener task:** write your three objectors, and strike the one that arrived late.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the proposal section Mrs Rizk rewrote. Answer the questions.'));
out.push(model([
  '**H. RIZK** · _to the governorate health office_ · _Saturday clinic proposal: the objections section_ · **2 March**',
  '**Three people will object to this and I have talked to two of them.** **None of the three has seen this document and all three will.**',
  '**One. The officer who holds the 2019 transport file will say that a second vehicle was costed in 2019 and refused.** **It was, and the costing was for a vehicle five days a week at about four and a half million.** **This proposal is for eleven Saturdays at about four hundred thousand, which is a different thing with the same name**, and the 2019 file says nothing about Saturdays because nobody asked it to. **I have read the costing and have attached the two pages that deal with vehicles.**',
  '**Two. The clinician who covers Deir Atiyah on Saturdays will say that nineteen in six months does not justify a vehicle.** ⚠ **She is right about the nineteen and the proposal does not rest on it: it rests on the proportion, which is one in three of Saturday arrivals against one in ninety on a weekday.** **I have put that to her and she accepts the proportion and still thinks the sum is wrong, and that disagreement is a real one and is not resolved by this document. **Her objection is to the sum and not to the figures, and the sum is the governorate\'s to make.** **The nineteen are counted from the refusal page and the proportion from the arrival log.****',
  '**Three. The finance officer will ask what happens in April.** **I do not know.** **The proposal is for eleven Saturdays and stops, and if the pattern continues the same arithmetic will be in front of this office in March with three more months in it. **April is the fourth Saturday of the funded provision\'s own quarter, and the two calendars have never been aligned.****',
  '**What I am not answering.** **I have not written a paragraph about whether vehicles are the best use of health money in general.** ⚠ **Nobody in this office has said that to me and I could not name anybody who would**, and a paragraph answering it would be the longest thing in this proposal and would be addressed to nobody. **If anybody in this office does hold that view, I should like to hear it and shall answer it in writing.**',
  '**On the two I have talked to.** **The clinician on 18 February and the transport officer on the twenty-first.** **Neither conversation changed the ask and both changed how it is written**, and the second produced the 2019 costing, which I had not seen. **I have not spoken to the finance officer, whose objection I have constructed from two earlier files.**',
  '**And one thing about the previous version.** **It answered an objection beginning _some might argue_.** **The reply I received answered that paragraph and nothing else.** **It was a hundred and ten words long and is not in this version.**',
]));
out.push(item('1', 'How many objectors are named, and how are they identified?'));
out.push(item('2', 'What does she say about the second objector\'s disagreement?'));
out.push(item('3', 'What is she not answering, and what reason does she give?'));
out.push(writers([
  'An objections section with nobody invented: **say how many will object and how many you have talked to** → **each objector named by position** → **their sentence** → **your answer, or the admission that there is none** → **what you are not answering, with the reason** → **the dates of the conversations** → **and what the previous version did.**',
  '⚠ **Name the position and let them recognise themselves.** _The officer who holds the 2019 transport file._ **Nobody is accused, the objection has a face, and the reader who holds the file reads it knowing it was written to them.**',
  '**Let one of them stay unresolved.** ⚠ _She accepts the proportion and still thinks the sum is wrong, and that disagreement is a real one and is not resolved by this document._ **A section in which every objection is answered is a section nobody believes** — **and the unresolved one is what makes the other two credible.**',
  '**Say what you are not answering and why.** ⚠ _Nobody in this office has said that to me and I could not name anybody who would._ **This is the four-second test, written down** — **and it tells a reader that the absence of that paragraph was a decision.**',
  '⚠ And **give the dates of the conversations.** _The clinician on 18 February and the transport officer on the twenty-first._ **A named objector with a date behind them cannot be read as a rhetorical device**, and the two dates cost eleven words.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the objections section of your own document (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **______________ people will object to this and I have talked to ______________ of them.**   **One. ______________ will say that ______________.** **______________, and ______________.** **This ______________ is for ______________, which is ______________.**   **Two. ______________ will say that ______________.** ⚠ **She is right about ______________ and ______________ does not rest on it: it rests on ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every objector named by position, with their own sentence',
  'At least one objection left unresolved',
  'What you are not answering, with the four-second reason',
  'The dates of the conversations',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their objectors\' sentences**, and the room says which one it would answer first.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole section (260 words or more), to the shape in the writer\'s box: the count, each objector by position with their sentence, your answers, the unresolved one, what you are not answering, and the dates.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: objectors named by position, one left unresolved, the unanswered objection explained, and the conversation dates given.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads an objection in the objector\'s voice and then their own answer in their own.** ⚠ **The room says whether it heard two people.** **Where it heard one, the objection has been written in the writer\'s voice** — and the room should be asked what would have to change, which is the naming and not the wording. Then the sentence the cycle ends on, which is Mrs Rizk\'s: **four paragraphs on the objection nobody had.**'));
out.push(hw('Take **the document you are working on** and write **the objections section**, with every objector named by position and the four-second test applied to each. ⚠ **Then do the part nobody does: talk to one of them.** **Write down the date.** **In this class the conversation has never once changed the ask and has always changed how it is written.** **Bring the section and the date.** **7.6 writes the page whose first hostile reader finds nothing to take.**'));

// ===================== 7.6 =====================
out.push(h2('7.6  The page with nothing to take'));
out.push(p('**Function:** writing the page whose first hostile reader finds nothing to take   ·   **Grammar:** every claim the size of its evidence · the limit in the same paragraph as the claim   ·   **Pronunciation:** a page read aloud by somebody looking for a handle'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one page of yours that was returned, and the sentence the reader quoted back.** ⚠ **The sentence exactly, and nothing about what you meant.** Your teacher writes the ten sentences on the board. **In most classes eight of the ten contain a word that is doing more work than the evidence allows**, and the room can find it without being told which.'));
out.push(board('The dispensary has operated without incident since 2019.', 'Define incident. Who decides? Where is the record?'));
out.push(p('**b**  Which paragraph gives a hostile reader nothing to take? **1** _The dispensary has operated without incident since 2019._  **2** _Of the one hundred and four October dispensings, eleven were against a superseded sheet; October is the only month examined._  **3** _Four of the twelve 2025 certificates are not in the file; all four were issued and the contractor holds copies._  **4** _Standards here are clearly high._  **5** _No patient has ever been harmed._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the page needs?   **A** fewer claims   **B** **every claim the size of its evidence, with its limit in the same paragraph** — which is not the same as claiming less   **C** more hedging'));
out.push(p('**b**  Listen again. **1** What happened to Mrs Ajouz\'s registration file in March?   **2** What does Mr Zahreddine say about the difference between hedging and sizing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.11  Nothing to take', [
  ['Ms Huda', 'Mrs Ajouz — the file that came back in March.'],
  ['Mrs Ajouz', '⚠ **One sentence was quoted and nothing else was mentioned.** _The dispensary has operated without incident since 2019._ **The officer asked what an incident is, who decides, and where the record is.**'],
  ['Mrs Tarabishi', 'All three are fair questions.'],
  ['Mrs Ajouz', '⚠ **All three are fair and I could answer none of them from any document I hold.** **The sentence was true and it was not mine to make** — **_without incident_ is a finding by somebody with a definition and a register, and I have neither.**'],
  ['Mr Zahreddine', 'And the repair is not to hedge it.'],
  ['Mrs Ajouz', '⚠ **The repair was to say what I actually have.** _The incident book has nine entries since 2019, of which six are cold-chain and three are labelling; it is kept by the branch pharmacist and I have copied it._ **Longer, specific, and nothing in it to take.**'],
  ['Mr Shihabi', 'Say the difference between that and hedging, because the room will hear them as the same.'],
  ['Mr Zahreddine', '⚠ **Hedging makes a claim vaguer and sizing makes it smaller.** _The dispensary has operated largely without incident_ **is hedged and still unanswerable.** _Nine entries, six and three_ **is small and completely answerable** — **and a reader can check it, which is what takes the handle away.**'],
  ['Dr Qabbani', 'So the page gets longer.'],
  ['Mrs Ajouz', '⚠ **About a third longer, and the second version was accepted in eleven days.** **The first had been out for seven weeks.**'],
  ['Mrs Khoury', '⚠ **And the arithmetic the class should hear: four of her six paragraphs were already fine.** **A page with nothing to take is not a rewritten page.** **It is a page with two sentences repaired.**'],
  ['Mr Tayara', 'How do you find the two?'],
  ['Mrs Oueidat', '⚠ **7.1, and it takes eleven minutes.** **The two sentences are always the ones with a word in them that somebody else would have to define** — _incident_, _satisfactory_, _appropriate_, _adequate_, _in good order_.'],
  ['Mrs Rizk', 'My donors\' forms are made of those words.'],
  ['Mrs Oueidat', '⚠ **Their forms ask for them and their lawyers cannot use them.** **Answer the form\'s word and then give the count underneath** — **_satisfactory: nine entries since 2019, six cold-chain and three labelling_.**'],
  ['Jad', 'Is there a page where nothing can be done?'],
  ['Mrs Tarabishi', 'And a page where every claim is already a count?'],
  ['Mrs Ajouz', '⚠ **Then there is nothing to do and the room should hear that too.** **Four of my six paragraphs needed nothing at all, and I nearly rewrote them because the file had come back.**'],
  ['Mrs Ajouz', '🔊 ⚠ **A page where the claim is larger than anything you have counted.** **Then the repair is not in the writing at all**, and the only honest page is the smaller claim — **which is 7.1 again and is where this unit keeps arriving.**'],
]));
out.push(sp());
out.push(box('Language box – the page with nothing to take', [
  '**The rule, and it is one sentence.** ⚠ **Every claim the size of its evidence, with its limit in the same paragraph.** **Not fewer claims and not vaguer ones** — **a page with nothing to take is usually longer than the page it replaces, and in this class it has been about a third longer every time.**',
  '**Hedging against sizing.** ⚠ **Hedging makes a claim vaguer; sizing makes it smaller.** _Largely without incident_ **is hedged and still unanswerable.** _Nine entries since 2019, six cold-chain and three labelling_ **is small and completely answerable** — **and answerable is what takes the handle away.**',
  '**The words that give a reader a handle.** ⚠ _incident_ · _satisfactory_ · _appropriate_ · _adequate_ · _in good order_ · _without difficulty_. **Each is a finding made by somebody with a definition and a register**, and a writer who has neither is making somebody else\'s finding.',
  '**And what to do when a form asks for one of them.** ⚠ **Answer the form\'s word and put the count underneath.** _Satisfactory: nine entries since 2019, six cold-chain and three labelling._ **The form is satisfied and the reader who matters has the number.**',
  '**The scale of the repair.** ⚠ **Two sentences in six paragraphs, in this class, every time.** **A page with nothing to take is not a rewritten page**: it is a page where the adversarial read of 7.1 found two sentences and both were repaired by sizing.',
  '**And the page where nothing can be done.** ⚠ **One where the claim is larger than anything you have counted.** **The repair is not in the writing at all** — **it is a smaller claim, or a count you have not made yet**, and no amount of care with the sentence will produce either.',
  '**Pronunciation.** 🔊 **Track 7.12** **Hand your page to somebody and ask them to read it aloud looking for a handle.** ⚠ **They will slow down at the unanswerable word.** **It is the same slowing as 7.1 and it is somebody else doing it**, which is why this one works on the sentences your own read missed.',
  '**Practise:** Size a claim instead of hedging it. **1** replacing _satisfactory_  **2** replacing _without incident_  **3** replacing _adequate_  **4** where the form demands the word — so answer it and count underneath  **5** one where the claim is larger than the count — and say what you would have to count',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B gives **the sized version**, and says **what a reader could now check.** ⚠ **Two rows on each card are already sized** — **every word in them is answerable** — **and B must say so.** Change cards.'));
out.push(table(['Card A', 'Card B'], [
  ['_The dispensary has operated without incident since 2019._', '_Record-keeping at the branch is satisfactory._'],
  ['_⚠ Eleven of the hundred and four October dispensings were against a superseded sheet._', '_⚠ Four of the twelve 2025 certificates are not in the file._'],
  ['_Arrangements for cold-chain storage are adequate._', '_The building has been maintained in good order._'],
  ['_⚠ Nine of the nineteen arrived after the rota ended at nine._', '_⚠ Of the sixty-one papers identified, I read fifty-three._'],
  ['_Staff are appropriately trained._', '_The migration was completed without difficulty._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** each sized version, and what a reader can now check. ⚠ **Rows 2 and 4 on both cards are already sized.** **The six that are not all contain a word somebody else would have to define**, and the class should collect them: _incident_, _satisfactory_, _adequate_, _in good order_, _appropriately_, _without difficulty_. **Each sized version is longer than the original** — **and the room should be asked by how much, because the answer is about eight words and the handle is gone.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **the page you brought** and mark **every word a reader would have to define.** ⚠ **Then size each claim: what you have counted, over what period, kept by whom.** **Three parts.** **If you cannot produce the third part, that is the finding** — **the record exists somewhere and you have not named its keeper.**'));
out.push(p('**b**  Swap. Your partner reads your page aloud **looking for a handle** and you mark where they slow. ⚠ **Compare their marks with the words you found.** **They will find one you did not**, and in most pairs it is a word the writer had stopped seeing because it is on a form they fill in every month.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz had a registration file returned in March with one sentence quoted and nothing else mentioned: the dispensary has operated without incident since 2019. The officer asked what an incident is, who decides, and where the record is. Mrs Tarabishi said all three are fair questions, and all three are fair and she could answer none of them from any document she holds — the sentence was true and it was not hers to make, because without incident is a finding by somebody with a definition and a register, and she has neither. Mr Zahreddine said the repair is not to hedge it, and the repair was to say what she actually has: the incident book has nine entries since 2019, of which six are cold-chain and three are labelling; it is kept by the branch pharmacist and she has copied it. Longer, specific, and nothing in it to take. Mr Shihabi asked for the difference between that and hedging, because the room will hear them as the same, and hedging makes a claim vaguer and sizing makes it smaller: the dispensary has operated largely without incident is hedged and still unanswerable, and nine entries, six and three is small and completely answerable, and a reader can check it, which is what takes the handle away. Dr Qabbani said so the page gets longer, and about a third longer, and the second version was accepted in eleven days where the first had been out for seven weeks. Mrs Khoury gave the arithmetic the class should hear: four of her six paragraphs were already fine, so a page with nothing to take is not a rewritten page but a page with two sentences repaired. Mr Tayara asked how you find the two, and Mrs Oueidat said 7.1, and it takes eleven minutes: the two sentences are always the ones with a word in them that somebody else would have to define — incident, satisfactory, appropriate, adequate, in good order. Mrs Rizk said her donors\' forms are made of those words, and their forms ask for them and their lawyers cannot use them: answer the form\'s word and then give the count underneath. Mrs Tarabishi asked about a page where every claim is already a count, and then there is nothing to do and the room should hear that too: four of her six paragraphs needed nothing at all, and she nearly rewrote them because the file had come back. And Mr Attar asked whether there is a page where nothing can be done, and Mrs Ajouz said a page where the claim is larger than anything you have counted — then the repair is not in the writing at all, and the only honest page is the smaller claim._'));
out.push(p('**Listener task:** write the word your partner slowed at that you had not marked.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mrs Ajouz sent the second time. Answer the questions.'));
out.push(model([
  '**N. AJOUZ · PHARMACIST** · _registration file, section 4: premises and records_ · _second submission_ · **4 March**',
  '**Section 4.1, incidents.** **The incident book has nine entries since January 2019.** **Six are cold-chain — a refrigerator alarm, five of them out of hours — and three are labelling.** **The book is kept by the branch pharmacist on duty and a copy of all nine entries is at Appendix C.** **Each entry carries a date, a time, the name of the pharmacist on duty and what was done.** **The book runs from January 2019 to 29 February 2026 and has no gaps in its pagination.** **No entry has been removed.**',
  '**Section 4.2, what the nine do not cover.** **The book records what the pharmacist on duty entered.** ⚠ **An incident nobody entered is not in it, and I have no way of knowing how many of those there have been.** **The only check available is the cold-chain log, which is automatic, and its alarms and the book agree on all six. **The loggers run continuously and are not switched off, and their record is at Appendix G.****',
  '**Section 4.3, records.** **Four hundred and twelve dispensing records for the quarter, all four weeks reconciled.** **Eleven of October\'s one hundred and four were made against a superseded sheet; October is the only month in which I have examined this and the eleven are at Appendix D.** **The eleven are listed by date, by the sheet they were dispensed against and by the sheet current that day.** **I did not examine September or November and they exist.**',
  '**Section 4.4, cold-chain storage.** **Two refrigerators, both with continuous loggers, both calibrated on 14 January 2026 by the supplier, certificates at Appendix E.** **Temperature out of range on five occasions in the quarter, all five out of hours, all five within the ninety minutes the loggers record as tolerated. **Neither refrigerator has been moved or replaced during the quarter.****',
  '**Section 4.5, staff.** **Three pharmacists and two technicians.** **All five have the qualification the register requires and the certificates are at Appendix F.** **Two of the five joined during the quarter and their certificates are dated before they started.** ⚠ **I make no claim about whether the staffing is sufficient**, which is a judgement about volume and hours that this file does not have the figures for.',
  '**Section 4.6, what is not in this file.** **The electronic record, to which I have no access.** **The locum rota before October 2025, which the previous pharmacist held.** **The 2019 to 2021 incident entries, which are in a book that was closed and is at the directorate; I have asked for it twice, on 3 and 24 February.**',
  '**Section 4.7, one matter the officer raised in March.** **The first version of this file said the dispensary had operated without incident since 2019.** **That was not a finding I was in a position to make** — **the incident book is a record of what was entered and I do not define what an incident is. **I have not used the word in anything since.****',
]));
out.push(item('1', 'How is section 4.1 sized, and what does section 4.2 say about it?'));
out.push(item('2', 'Which claim does she decline to make, and what reason does she give?'));
out.push(item('3', 'What does 4.7 say about the first version, and why was that sentence not hers to make?'));
out.push(writers([
  'A page with nothing to take: **every claim as a count, over a period, kept by somebody named** → **what the count does not cover, in the next sentence** → **the appendix where the record is** → **the claim you decline to make, with the reason** → **what is not in the file at all** → **and the sentence from the earlier version that was not yours to make.**',
  '⚠ **Size the claim and put the keeper in it.** _Nine entries since January 2019, kept by the branch pharmacist on duty, copied at Appendix C._ **A count, a period and a keeper** — **and a reader who has all three has nothing left to ask.**',
  '**Say what the count does not cover, immediately.** ⚠ _An incident nobody entered is not in it, and I have no way of knowing how many of those there have been._ **The limit goes in the same section as the claim, not at the end of the document** — **which is 5.7 and 7.4 arriving together.**',
  '**Decline the judgement that is not yours.** ⚠ _I make no claim about whether the staffing is sufficient._ **It names the territory and not the writer**, and it tells a registration officer that the absence was a decision and not an oversight.',
  '⚠ And **say what the earlier version claimed and why it was not yours.** _The incident book is a record of what was entered and I do not define what an incident is._ **A file that explains its own correction is read differently from one that quietly contains it** — **and this officer has both versions.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a page with nothing to take (120 words or more).'));
out.push(p('**______________** · _______________ · **______________**   **Section 1, ______________.** **The ______________ has ______________ since ______________.** **______________ are ______________ and ______________ are ______________.** **The ______________ is kept by ______________ and a copy is at ______________.**   **Section 2, what the ______________ do not cover.** **The ______________ records ______________.** ⚠ **______________ is not in it, and I have no way of knowing ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every claim a count, over a period, with a keeper named',
  'What the count does not cover, in the same section',
  'The record located, by appendix or by name',
  'The judgement that is not yours, declined',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **one section each**, and the room says what it would ask. **Nothing, if the section is sized.**'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260 words or more), to the shape in the writer\'s box: the sized claims, the limits beside them, the records located, the declined judgement, what is not in the file, and the earlier version.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: claims sized with a keeper, limits in the same section, records located, and the declined judgement named.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Two students exchange pages and each reads the other\'s aloud looking for a handle.** ⚠ **The room counts the places the voice slowed.** **Then the writers say how many of those words they had already marked themselves.** **In most pairs it is all but one**, and the one is on a form they fill in every month and have stopped seeing. Then the sentence the cycle ends on, which is Mrs Khoury\'s: **a page with nothing to take is a page with two sentences repaired.**'));
out.push(hw('Take **the page you brought** and write the sized version of **every claim with a definable word in it.** ⚠ **A count, a period, a keeper.** **Then count the words you have added.** **In this class it has been between twenty and forty on a page, and the page has been accepted every time.** **Bring both versions and the word count.** **7.7 is the unit check**, and the mediation is between an author and somebody who disagrees in good faith.'));

// ===================== 7.7 =====================
out.push(h2('7.7  Review & Mediate: Two people who both read it properly'));
out.push(p('**Function:** mediating between an author and somebody who disagrees in good faith   ·   **Recycling:** Unit 7   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 8 · Writing Part 1 · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 7 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** Even allowing for October being unrepresentative, nine of the eleven came from paper, however.  **2** It does not follow that the frame will fail from this.  **3** Nothing in this establish when the roller went out of service.  **4** Of the sixty-one papers identified, I read fifty-three, eight were not obtainable.  **5** Some might argue that a vehicle is not the best use of the money.  **6** I am not an expert on loading.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the finding and the two readings of it.'));
out.push(box(null, [
  '**ONE FINDING, TWO READERS WHO BOTH READ IT PROPERLY** _(the author is Dr Qabbani; the reader is a colleague on the same committee)_',
  '**The finding.** _"In eleven of the thirty-one, the second sample was available and the first was not, and in seven of those eleven a serological diagnosis was reached. It does not follow that taking more second samples would raise the diagnosis rate."_',
  '**The reader.** _"The refusal in the second sentence is right and it does not go far enough. Seven of eleven is quoted in your own abstract, and once it is quoted the refusal is not travelling with it. The figure should not be in the abstract at all."_',
  '**The author.** _"The figure is the finding. If I take it out there is no paper. The refusal is the repair and I have written it."_',
  '⚠ **Both of them are right about what they are right about, and they are not arguing about the same thing.**',
  '**And the thing neither of them has said.** **The reader is talking about what survives quotation.** **The author is talking about what the paper found.** **Neither has noticed that those are different questions.**',
  '**The question for the cycle.** _What do you say, and to which of them?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides neither of them is wrong. What are they disagreeing about?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 7.13  Not the same question', [
  ['Ms Huda', 'Mrs Oueidat — which of the two is wrong?'],
  ['Mrs Oueidat', 'Neither, and they are not disagreeing. ⚠ **The reader is talking about what survives quotation and the author is talking about what the paper found, and those are two questions.**'],
  ['Mrs Tarabishi', 'But they are using the same words.'],
  ['Mrs Khoury', '⚠ **Which is why it looks like a disagreement and why it can go on for months.** **The first move in this cycle is not to say who is right: it is to say that there are two questions and to name them.**'],
  ['Dr Qabbani', 'And then?'],
  ['Mrs Oueidat', '⚠ **Then each of them answers their own.** **The author: does the paper find it? Yes, and the refusal is correctly placed.** **The reader: does the figure survive being quoted alone? No, and 6.5 says why — the hedge is the part a quoter drops.**'],
  ['Mr Shihabi', 'Both answers are yes and no and neither of them moves.'],
  ['Mrs Khoury', '⚠ **Both answers are correct and the two together produce the repair, which neither of them could reach alone.** **Put the refusal inside the sentence that carries the figure.** _In seven of the eleven cases where the two samples disagreed — a count and not a rate — a serological diagnosis was reached._'],
  ['Mr Tayara', 'That is 4.5.'],
  ['Mrs Oueidat', '⚠ **It is 4.5, and the class should notice that the whole of this unit keeps arriving at Unit 4.** **A limit inside the claim is what survives a hostile reader, a quoter and a summariser**, and those are three different people with one repair between them.'],
  ['Mrs Ajouz', 'So you do not take a side at all.'],
  ['Mrs Khoury', '⚠ **You take a side on the question and not on the person**, and here there are two questions and each of them owns one. **That is the only mediation in this book in which the two parties are answering two different questions.**'],
  ['Mrs Rizk', 'What do you actually say first?'],
  ['Mr Zahreddine', '⚠ **_You are answering two different questions._** **Five words, and then stop and let them work out which is which.** **In my experience they do it in about twenty seconds and one of them is annoyed.**'],
  ['Jad', 'Why annoyed?'],
  ['Mr Zahreddine', '⚠ **Because the person who has been arguing hardest has usually been answering the easier question**, and the twenty seconds is when they notice.'],
  ['Mrs Tarabishi', 'And if both of them refuse to see it?'],
  ['Mrs Khoury', '⚠ **Then you write the two questions down and give each of them the one that is theirs, in writing, and say nothing else.** **Nobody has ever argued with a question they were handed in writing**, in my experience, and that is the whole of the fourth move here.'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing I shall take away is that it is not a disagreement at all.** **Two people read the same eleven words properly and took two different questions away**, and the document gave them no way of telling.'],
]));
out.push(sp());
out.push(box('Language box – mediating between two people who are both right', [
  '**The three moves, unchanged since 1.7.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**And the move that is new here, because neither party is wrong.** ⚠ **Say that there are two questions, and name them.** _You are answering two different questions._ **Five words, and then stop** — **they work out which is which in about twenty seconds, and the one who has been arguing hardest is usually the one answering the easier question.**',
  '**The two questions in this case.** ⚠ **_Does the paper find it?_ belongs to the author and the answer is yes.** **_Does the figure survive being quoted alone?_ belongs to the reader and the answer is no.** **Both answers are correct, and the repair comes from having both.**',
  '**The repair, which neither could reach alone.** ⚠ **Put the refusal inside the sentence that carries the figure.** _In seven of the eleven cases where the two samples disagreed — a count and not a rate — a serological diagnosis was reached._ **Which is 4.5, and the whole of Unit 7 keeps arriving there.**',
  '**And the finding worth having from the unit.** ⚠ **A limit inside the claim is what survives a hostile reader, a quoter and a summariser.** **Three different people, one repair between them** — **and a writer who has done Units 4, 5, 6 and 7 has been given the same instruction four times from four directions.**',
  '**Take a side on the question, not on the person.** ⚠ **This is the only mediation in Book 1 in which the two parties are answering two different questions**, and each of them is right about the one they are answering. **A mediator who picks one of them has turned two true answers into one.**',
  '**When one of the two is senior to you.** ⚠ **The naming of the two questions is still available and the fourth move is not.** **_You are answering two different questions_ is an observation and anybody may make it.** **Handing each of them their question in writing is an allocation**, and a junior who allocates has taken a side on the person after all — **so write the two questions and give both to both, and let them choose.**',
  '**Pronunciation.** 🔊 **Track 7.14** **Say _you are answering two different questions_ flat, with no stress on _two_.** ⚠ **Stress on _two_ makes it a correction and both of them defend.** **Flat, it is an observation**, and the silence after it is about twenty seconds and belongs to them.',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has a finding and two readings of it, and does **not** show them. A reads all three. B says **whether the two are disagreeing or answering different questions**, names the two questions if they are, and makes the three moves. ⚠ **In one of the two pairs they really are disagreeing**, and B must say so and do something different. Change roles with the other pair.'));
out.push(table(['Pair A – the diagnosis figure', 'Pair B – the printed sheets'], [
  ['_Finding: "seven of eleven reached a diagnosis."_', '_Finding: "nine of the eleven came from a printed sheet."_'],
  ['_Reader: "it will be quoted without the refusal."_', '_⚠ Reader: "the screen route carries a fifth of the volume, so nine of eleven proves nothing."_'],
  ['_Author: "the figure is the finding."_', '_Author: "nine of eleven is nine of eleven."_'],
  ['_⚠ Two questions: what it finds, and what survives quotation._', '_⚠ One question, and they disagree about the answer._'],
  ['_⚠ The repair is the limit inside the claim._', '_⚠ The repair is a denominator nobody has._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** the two questions, or the one. ⚠ **Pair B is a real disagreement**: the reader says nine of eleven proves nothing without the volume of each route and the author says a count is a count, **and both are talking about what the figure shows.** **The move there is to find what would settle it** — **the share of dispensings printed rather than screened, which nobody has.** **An unresolved disagreement named as unresolved is a result.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **a disagreement you are in** and write **the two questions**, one in each party\'s words. ⚠ **If you can write both and they are different, it is not a disagreement.** **If you can only write one, it is.** **Most people find that about half of what they have been arguing about this year is the first kind.**'));
out.push(p('**b**  Swap and run the move on a partner\'s disagreement. ⚠ **Say _you are answering two different questions_ and then count the silence.** **It is about twenty seconds** — **the longest in this book — and what comes back is almost always the name of the easier question.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what you say, and to whom:  _Asked which of the two is wrong, Mrs Oueidat said neither, and they are not disagreeing: the reader is talking about what survives quotation and the author is talking about what the paper found, and those are two questions. Mrs Tarabishi said but they are using the same words, and Mrs Khoury said that is why it looks like a disagreement and why it can go on for months — the first move in this cycle is not to say who is right but to say that there are two questions and to name them. Dr Qabbani asked and then, and then each of them answers their own: the author, does the paper find it, yes, and the refusal is correctly placed; the reader, does the figure survive being quoted alone, no, and 6.5 says why, because the hedge is the part a quoter drops. Mr Shihabi said both answers are yes and no and neither of them moves, and Mrs Khoury said both answers are correct and the two together produce the repair, which neither could reach alone: put the refusal inside the sentence that carries the figure. Mr Tayara said that is 4.5, and Mrs Oueidat said it is 4.5, and the class should notice that the whole of this unit keeps arriving at Unit 4 — a limit inside the claim is what survives a hostile reader, a quoter and a summariser, and those are three different people with one repair between them. Mrs Ajouz said so you do not take a side at all, and Mrs Khoury said you take a side on the question and not on the person, and here there are two questions and each of them owns one: that is the only mediation in this book in which the two parties are answering two different questions. Mrs Rizk asked what you actually say first, and Mr Zahreddine said you are answering two different questions — five words, and then stop and let them work out which is which, and in his experience they do it in about twenty seconds and one of them is annoyed. Mr Attar asked why annoyed, and because the person who has been arguing hardest has usually been answering the easier question, and the twenty seconds is when they notice. Mrs Tarabishi asked what happens if both of them refuse to see it, and Mrs Khoury said then you write the two questions down and give each of them the one that is theirs, in writing, and say nothing else: nobody has ever argued with a question they were handed in writing, in her experience, and that is the whole of the fourth move here. And Mrs Oueidat said the thing she will take away is that it is not a disagreement at all: two people read the same eleven words properly and took two different questions away, and the document gave them no way of telling._'));
out.push(p('**Listener task:** write the two questions in your own disagreement, one in each party\'s words.   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 8)', 7));
out.push(p('You are going to read four accounts of being disagreed with. For questions **1–10**, choose from the accounts **A–D**. The accounts may be chosen more than once.'));
out.push(box(null, [
  '**FOUR PEOPLE WHO WERE TOLD THEY WERE WRONG**',
  '**A** _An engineer._ The letter came from somebody I have never met, acting for the other side, and it ran to nine pages. Eight of them were about my method and one was about a sentence. The one was right. I had written that the frame does not meet the specification, and I had not said that I measured it on two dates five months apart with the frame in use in between. Nobody had asked me to. I added eleven words and sent it again, and the eight pages about my method were never mentioned by anybody, including the person who wrote them. What I learnt was not about the sentence. It was that nine-tenths of an attack is usually noise, and that the tenth is worth the whole afternoon it costs to find it. I have since read two other letters of that kind and both had the same shape: length where there was nothing, and one paragraph in the middle that somebody had thought about.',
  '**B** _A doctoral candidate._ My supervisor wrote one line on the first draft: _what did you search?_ I had put in a sentence saying every effort had been made, which I now understand was the thing that produced the question. The second version had three numbers in it and nobody has asked since. What I did not expect was how much easier the writing became once the numbers were there. I had been defending a search I could not describe, in every paragraph, without knowing I was doing it — and the defending was about a fifth of the words. The review is shorter now and says more, and the two facts are the same fact. I have since gone back through two chapters written before the correction and found the same defending in both, about the same length, in paragraphs I had thought were about the subject.',
  '**C** _A pharmacist._ A registration officer returned my file quoting one sentence of it. I was angry for a day and a half, because the sentence was true. It took me that long to see that true was not the question: the question was whether it was mine to say, and it was not, because the word in it is defined by somebody else and the record is kept by somebody else. I have not used that word since, in anything. The file came back accepted in eleven days and the thing I think about is the seven weeks the first one sat somewhere while nobody could do anything with it. Seven weeks of a deadline, for one sentence that I could have repaired in an afternoon if anybody had told me which kind of sentence it was.',
  '**D** _A grants officer._ The donor answered the one objection in my proposal that had nobody behind it and ignored the two that had names. I had put the third one in to look thorough. What I understand now is that it was the only paragraph in the document that invited an argument, because it was the only one that was not about anybody — and a reader with four minutes will always spend them on the paragraph where nothing is at stake for a real person. The two with names needed answers and would have got them. The one without a name got four paragraphs and a refusal. I have the reply in front of me and I have counted: three hundred and ten words on the objection nobody held, and not one on the two who have names and telephone numbers.',
  '**Which account mentions:**',
  '**1**  a word whose definition belongs to somebody else?',
  '**2**  an attack in which most of the content did not matter?',
  '**3**  realising that effort had been going into defending something?',
  '**4**  a delay caused by the first version?',
  '**5**  a reader choosing the part of a document with least at stake?',
    '**6**  being angry before understanding an objection?',
  '**7**  a repair of fewer than fifteen words?',
  '**8**  a piece of writing becoming shorter and stronger at once?',
  '**9**  something put into a document to appear thorough?',
  '**10**  answering a question nobody had asked for?',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the mediation of an author and a reader who disagrees in good faith (120 words or more).'));
out.push(p('**ONE FINDING, TWO READERS** · ______________   **The finding.** _"______________"_   **The reader.** _"______________"_   **The author.** _"______________"_   **What is correct.** ⚠ **Both of them, and ______________.**   **The two questions.** ⚠ **______________ belongs to ______________ and the answer is ______________. ______________ belongs to ______________ and the answer is ______________.**   **The repair, which neither reached alone.** ⚠ **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Both parties told what they are right about',
  'The two questions named, one to each',
  'The repair that comes from having both answers',
  'No side taken on the person',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Fourth essay of the course and the instruction has not changed.** **Three points, two discussed, both named in the first paragraph with the ground, and the third not mentioned again.**',
  'Your class has read an article about disagreement at work. **Write an **essay** discussing **two** of the points raised.** You should **explain which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about being disagreed with. **First**, that most of any attack on a piece of work is noise and the useful part is small. **Second**, that two people who appear to disagree are often answering different questions. **Third**, that writing for a hostile reader produces worse writing, because it is defensive."_',
  '**Points to discuss: 1** most of an attack is noise   **2** two questions, not one disagreement   **3** writing for a hostile reader is defensive',
  '⚠ **This unit has given you evidence about the first two and an argument against the third.** **Taking the third requires you to argue against your own week**, which is allowed and is harder than it looks.',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 7 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Even allowing ___ October being unrepresentative, nine of the eleven came from paper.   a) for   b) that   c) of',
  '2  It does not follow ___ this that the frame will fail.   a) of   b) from   c) with',
  '3  Nothing in this ___ when the roller went out of service.   a) establish   b) establishing   c) establishes',
  '4  I make no ___ about the welds, which I have not examined.   a) claiming   b) claim   c) claimed',
  '5  The review covers the four journals ___ by the university and no others.   a) hold   b) holding   c) held',
  '6  His ___ of the strongest objection is what closes it.   a) concession   b) concede   c) conceding',
  '7  A reader who holds the 2019 file ___ say the costing was done then.   a) would have   b) will have   c) will',
  '8  The finding is ___ because every claim is the size of its evidence.   a) robust   b) robustness   c) robustly',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style – a long interview).** 🔊 **Track 7.15** You will hear an interview with a woman who assesses registration files. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best.'));
[
  '**1**  What does she say she does first with a file?   **A** reads it through   **B** looks for a claim she cannot check   **C** checks the appendices   **D** counts the pages',
  '**2**  Why does she say one sentence is often enough to return a file?   **A** it suggests the rest is unreliable   **B** the rules require it   **C** it is usually the only error   **D** it saves her time',
  '**3**  What does she say about the word _satisfactory_?   **A** it is forbidden in the guidance   **B** she has never seen it used well   **C** it is acceptable if a count follows it   **D** it belongs to the applicant',
  '**4**  What does she say surprised her about second submissions?   **A** they are usually shorter   **B** they contain new claims   **C** they are rarely different   **D** they are usually longer and accepted faster',
  '**5**  What does she say about applicants who argue with a return?   **A** they are usually right   **B** they rarely change her mind but often improve the file   **C** they delay themselves by months   **D** she does not read their letters',
  '**6**  What has changed in her own practice?   **A** she now quotes two sentences rather than one   **B** she telephones first   **C** she gives a reason for the quotation   **D** she returns fewer files',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 7.15  Audio script (read after the check)', [
  ['Interviewer', 'How do you start with a file? At the beginning?'],
  ['Assessor', 'No. I go through it once looking for a claim I cannot check. Not an error — I am not reading for errors. A sentence where somebody has told me something and there is no way for me to find out whether it is so. In a file of forty pages there are usually two.'],
  ['Interviewer', 'And two is enough to send it back?'],
  ['Assessor', 'One is enough, and people find that hard. It is not that the sentence is the only thing wrong. It is that a sentence I cannot check tells me the writer has not thought about who reads this, and if they have not thought about that once, I do not know where else they have not.'],
  ['Interviewer', 'What about a word like satisfactory? Is that banned?'],
  ['Assessor', 'Nothing is banned. Our own forms ask for it, which is awkward of us. What I want is the word and then the count underneath. Satisfactory, colon, nine entries since 2019, six of them cold-chain. Then the form is answered and I have something I can look at. The applicants who do that get through.'],
  ['Interviewer', 'Are the second submissions better?'],
  ['Assessor', 'They are longer, almost always, and they come through faster. That surprised me for about two years and it does not now. A longer file with counts in it takes me forty minutes and a short one with claims in it takes me a week, because the week is spent writing to them and waiting.'],
  ['Interviewer', 'Do people argue with you?'],
  ['Assessor', 'Some do, and they almost never change my mind, and the file nearly always improves. They write me two pages about why the sentence was true, and in the course of writing it they produce the count, and the count goes into the next version. I have stopped minding the two pages.'],
  ['Interviewer', 'Has anything changed in how you do it?'],
  ['Assessor', 'One thing. I used to quote the sentence and leave it there, and about half the time I got back the same sentence with an adverb in it. Now I quote it and say what I cannot check about it — who defines this, where is the record, who keeps it. It takes me one extra line and it has about halved the number of files I see twice.'],
]));
out.push(p('**C  Writing.** Write the essay (220–260 words): **two** of the three points, both named in the first paragraph with the ground, and no mention of the third.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 7)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ read my own paragraph as somebody looking for the gap in it',
  '☐ tell an objection that produces a sentence from an anxiety that does not',
  '☐ concede at the strongest and cost it',
  '☐ name a step my argument does not take, in the reader\'s direction',
  '☐ state the limit of my evidence in a four-part inventory',
  '☐ apply the four-second test and strike the straw objection',
  '☐ size a claim instead of hedging it',
  '☐ mediate between two people who are both right about something',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _pick holes in · pull apart · knock down · shoot down · fend off · brush off · stand firm · hold together · give way · hit back · hang together · bear down on_.',
  '**This unit\'s word-formation set** _(Reading Part 8 in 7.7 draws on this unit\'s lexis)_: _rebut → **rebuttal** · vulnerable → **vulnerability** · robust → **robustness** · tenable → **untenable** · arguable → **arguably** · contest → **contestable** · hostile → **hostility** · fragile → **fragility** · counter → **counterargument**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _pick up_ **→ _pick up on_** an inconsistency, which is noticing and not lifting, where at A2 it was picking up a bag · _go over_ **→ _go over an argument_**, which is examining it, where at A2 it was going over a bridge · _put up_ **→ _put up an argument_**, which is offering one, where at A2 it was putting up a notice.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 1 · Syria Edition · Unit 7 · Student\'s Book');
