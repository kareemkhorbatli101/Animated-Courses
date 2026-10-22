// Proactive English C1 · Syria Edition · Book 2 · Unit 15 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['WHAT I WROTE', 'WHAT I NO LONGER BELIEVE'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const dated = (rows) => table(['THE CHANGE', 'WHEN IT HAPPENED', 'THE EVIDENCE'], rows, [2, 1, 3]);
const clinic = '**Board clinic:** your teacher writes three sentences from the reports on the board. For each one the room says whether it is evidence or embarrassment.';
const slip = '**Peer review, C1 band 3.** ⚠ **Do not sign it.** **Name the reader you are being, name what is absent**, give the criterion **with the line copied** — and **hand it over unsigned.** **The writer answers in one line that must either concede or refuse with a reason.**';

out.push(h1('Unit 15  The Letter Whose Date Has Come'));
out.push(p('_Proactive English · C1 · Book 2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('What this unit is for', [
  '**Two years ago, at the end of the B2 course, twelve students sealed a letter to themselves.** ⚠ **Each of them set the date on the envelope and gave it to somebody who was not a friend.** **Two of those twelve are in this room.** **One of the two envelopes is now due.**',
  '**So this unit cannot open everybody\'s letter and it is not going to pretend to.** ⚠ **It is written for the person whose date has come** — **and 15.3 is written for the person whose has not, which is a harder task and not a consolation.** **The eight students who arrived at C1 have no envelope at all, and they have something nearly as good: their own _cannot yet_ list from 1.2, and the first document any of them wrote in September of last year.**',
  '**15.1** reads your own prose from two years ago as evidence rather than as embarrassment.   **15.2** says what you wrote and what you no longer believe, in one sentence each.   **15.3** reads a document of yours whose date has not come, and leaves it sealed.   **15.4** dates your own change: when it happened, and what the evidence is.   **15.5** writes to the person who kept the letter.   **15.6** writes the page that will be evidence to you in five years.   **15.7** mediates between the person who sealed it, the keeper, and the person who opened it.',
  '**Exam practice in 15.7:** C1 Advanced **Reading and Use of English Part 7** (gapped text), **Writing Part 1** (the essay) and **Listening Part 3** (a long interview).',
  '⚠ **Bring your oldest piece of your own writing, whoever you are.** **If you have an envelope and the date has come, bring it unopened and do not open it before the lesson.** **If the date has not come, bring the envelope and leave it sealed** — **15.3 is for you and it does not involve opening anything.** **If you have no envelope, bring your 1.2 list and the first thing you wrote in September of last year.**',
  '**And the warning the unit needs in its first minute.** ⚠ **Nothing in these seven cycles is about being embarrassed by your own prose.** **Embarrassment is the ordinary first reaction and it is useless**: it produces a verdict on the writer and no information about the writing. **Every cycle here turns the old document into evidence** — **and evidence is a thing with a date on it that can be checked by somebody else, which is 12.1 arriving two years late and in your own handwriting.**',
], C.lteal, C.teal));
out.push(p('**Seven cycles · 90 minutes each · Lesson A Speaking (45) + Lesson B Writing (45)**', { bold: true, color: C.navy }));

// ===================== 15.1 =====================
out.push(pb());
out.push(h2('15.1  Your own prose, two years on'));
out.push(p('**Function:** reading your own prose from two years ago as evidence rather than as embarrassment   ·   **Grammar:** the old sentence quoted exactly, and then one finding   ·   **Pronunciation:** reading your own old sentence aloud without a tone'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the oldest piece of your own writing in front of you, its date, and who has kept it.** ⚠ **Three facts and no comment on the writing.** **In this class one envelope is due, one is not, and eight students have a list and a September document** — **and your teacher writes the ten dates on the board, oldest first, because the order is going to matter in 15.4.**'));
out.push(board('I wrote that the desk would never run my copy.', 'And it ran unchanged on 11 June.'));
out.push(p('**b**  Which two are readings of an old document as evidence? **1** _I cannot believe I wrote that._  **2** _I wrote that I would never be able to file eighty words; the desk ran eighty-six unchanged on 11 June, so the sentence was wrong and I can date when._  **3** _It is embarrassing, but I suppose everybody starts somewhere._  **4** _I wrote that the forum would not answer somebody from here; I have had four answers since March, and the earliest is dated._  **5** _Reading it back, I was much less confident then._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the old document is?   **A** a record of how far somebody has come   **B** **evidence** — a dated claim by a named writer, which can be shown to be right or wrong by something outside them   **C** a private matter'));
out.push(p('**b**  Listen again. **1** What did Mr Attar\'s letter say, and who had kept it?   **2** What does Mrs Khoury say embarrassment produces, and what it does not?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.1  A dated claim, by a named writer', [
  ['Ms Huda', 'Mr Attar — the envelope. The date was the first of December.'],
  ['Mr Attar', '⚠ **And Mr Deeb at the registry had kept it for two years and three months.** **He gave it to me on the first, unopened, and he had written the date of handing it over on the back.**'],
  ['Mrs Tarabishi', 'What did it say?'],
  ['Mr Attar', '⚠ **Four sentences.** **The third one is _nobody from here gets an answer on that forum and I do not expect that to change_.**'],
  ['Mrs Khoury', '⚠ **And the room should notice what kind of sentence that is, because it is the whole cycle.** **It is a prediction with a date on it, made by a named writer, about something that can be counted** — **and that is evidence and not a feeling.**'],
  ['Dr Qabbani', 'And it was wrong.'],
  ['Mr Attar', '⚠ **It was wrong and I can date when.** **Four answers since March, and the earliest is the nineteenth** — **and I had stopped expecting them to matter by about May, which is a second change and a different one.**'],
  ['Mrs Oueidat', 'The first reaction in this room was laughter.'],
  ['Mrs Khoury', '⚠ **It always is, and it is the thing to get past in the first four minutes.** **Embarrassment produces a verdict on the writer and no information about the writing** — **and a student who reads their own old page as an embarrassment has learnt nothing from a document they spent an evening on.**'],
  ['Mr Tayara', 'How do you stop it?'],
  ['Mrs Oueidat', '⚠ **Read the sentence aloud, exactly, with no tone at all.** **Not slowly and not kindly.** **A sentence read without a tone is a sentence somebody wrote** — **and the moment you put a tone on it you have started commenting instead of reading.**'],
  ['Mrs Rizk', 'Mine is not a letter. It is my September list.'],
  ['Mrs Khoury', '⚠ **It is the same object and it is sixteen months old, which is enough.** **Eight people in this room have a list and a September document and no envelope**, and the list has the better property: it is a set of dated claims about what its writer could not do, **and every one of them can now be checked.**'],
  ['Mrs Ajouz', 'And my first letter to the officer.'],
  ['Mr Attar', '⚠ **Which was returned in eleven days, so it has a date and an outcome** — **and an outcome is worth more than any number of claims, because somebody else supplied it.**'],
  ['Mr Zahreddine', 'Mine is three years old and I have read it four times.'],
  ['Mrs Khoury', '⚠ **Then you have read it four times as a writer and not once as evidence, which is the commonest position in this room.** **Reading it again changes nothing.** **Asking what in it was a claim, and whether anything since has settled it, changes everything** — **and the second question takes about four minutes.**'],
  ['Mr Shihabi', 'What if the old sentence turns out to be right?'],
  ['Mrs Oueidat', '⚠ **Then say so, and it is the rarer and more useful result.** **In this class three of the ten old documents contained a claim that has held** — **and all three writers had expected to be embarrassed and were not, which is a finding about the reaction and not about the prose.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is the back of the envelope.** **Mr Deeb wrote the date he handed it over, which nobody asked him to do** — **and the two dates together are the only thing in this that nobody could have arranged afterwards.**'],
]));
out.push(sp());
out.push(box('Language box – the old document as evidence', [
  '**Quote the old sentence exactly and then give one finding.** ⚠ _I wrote that nobody from here gets an answer on that forum. Four answers since March, and the earliest is the nineteenth._ **Two sentences.** **The first is the claim and the second is what settled it** — **and nothing between them is needed.**',
  '**What makes a sentence evidence rather than a feeling.** ⚠ **A date, a named writer, and something that can be counted.** **_I was less confident then_ has none of the three.** **_Nobody from here gets an answer_ has all three** — **and a prediction is the most checkable thing anybody writes about themselves.**',
  '**Embarrassment produces a verdict on the writer and no information about the writing.** ⚠ **It is the ordinary first reaction and it is useless.** **A student who reads their own old page as an embarrassment has learnt nothing from a document they spent an evening on.**',
  '**Read it aloud with no tone at all.** ⚠ **Not slowly and not kindly.** **A sentence read without a tone is a sentence somebody wrote** — **and the moment you put a tone on it you have started commenting instead of reading.**',
  '**A list is the same object as a letter and often better.** ⚠ **A _cannot yet_ list is a set of dated claims about what its writer could not do**, and every one of them can now be checked. **A September document that came back is better still** — **because the outcome was supplied by somebody else.**',
  '**And the result nobody expects.** ⚠ **Sometimes the old sentence was right.** **Three of the ten old documents in this class contained a claim that has held** — **and all three writers had expected to be embarrassed and were not, which is a finding about the reaction and not about the prose.**',
  '**Pronunciation.** 🔊 **Track 15.2** **Read your oldest sentence twice: once as you feel about it, and once flat.** ⚠ **The room says which one it could hear the words of.** **It is the flat one** — **and a tone on an old sentence is the sound of a writer defending somebody who is not in the room, which is themselves two years ago.**',
  '**Practise:** Quote it, then one finding. **1** a prediction that was wrong  **2** one that was right  **3** an item from a list, checked  **4** a document with an outcome somebody else supplied  **5** one you have read four times as a writer',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the old sentence from the card. B gives **the finding that settles it**, in one sentence, with a date. ⚠ **Two rows on each card are not claims at all** — **and there B says so.** Change cards.'));
out.push(table(['Card A – the old sentence', 'Card B – the old sentence'], [
  ['_Nobody from here gets an answer on that forum._', '_I shall never be able to file eighty words._'],
  ['_⚠ I find formal English very difficult._', '_⚠ My writing is not good enough yet._'],
  ['_I cannot state a degree of certainty I would defend._', '_I cannot refuse a referee\'s point._'],
  ['_⚠ I hope to improve over the next two years._', '_⚠ I should like to be more confident._'],
  ['_The officer will never accept a hand-kept book._', '_This office will never refuse the regional director._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the finding, and whether it has a date in it. ⚠ **Rows 2 and 4 on both cards are not claims** — **a difficulty, a hope, a wish and a comparative** — **and nothing can settle any of the four, which is why they were useless when they were written and are useless now.** **Rows 5 are the strongest on either card**: both are predictions about other people, both are checkable, and one of them has held.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Open **your own oldest document** and find **the one sentence in it that is a claim.** ⚠ **A date, a writer, and something countable.** **Read it aloud to your partner, flat, and then give the finding.** **In this class two students could not find a claim anywhere in their old document** — **and that is itself the finding, because a page of hopes cannot be checked by anybody, including its writer.**'));
out.push(p('**b**  Swap. Your partner reads **only your old sentence** and says **what would settle it.** ⚠ **If they cannot name anything, it was never a claim.** **Then they ask the harder question: has it held?** — **and three of ten in this class said yes.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar\'s envelope was dated the first of December and Mr Deeb at the registry had kept it for two years and three months, and he gave it over unopened with the date of handing it over written on the back. Mrs Tarabishi asked what it said, and four sentences, of which the third is that nobody from here gets an answer on that forum and he did not expect that to change. Mrs Khoury said the room should notice what kind of sentence that is, because it is a prediction with a date on it, made by a named writer, about something that can be counted, and that is evidence and not a feeling. Dr Qabbani said and it was wrong, and it was wrong and he can date when: four answers since March, the earliest the nineteenth, and he had stopped expecting them to matter by about May, which is a second change and a different one. Mrs Oueidat said the first reaction in the room was laughter, and Mrs Khoury said it always is and it is the thing to get past in the first four minutes, because embarrassment produces a verdict on the writer and no information about the writing. Mr Tayara asked how you stop it, and Mrs Oueidat said read the sentence aloud, exactly, with no tone at all, because a sentence read without a tone is a sentence somebody wrote. Mrs Rizk said hers is not a letter but her September list, and it is the same object and sixteen months old, and the list has the better property: it is a set of dated claims about what its writer could not do. Mrs Ajouz mentioned her first letter to the officer, and Mr Attar said it was returned in eleven days so it has a date and an outcome, and an outcome is worth more than any number of claims because somebody else supplied it. Mr Zahreddine said his is three years old and he has read it four times, and then he has read it four times as a writer and not once as evidence. Mr Shihabi asked what happens if the old sentence turns out to be right, and then say so, and three of the ten old documents contained a claim that has held. And Mr Attar said the thing he will take away is the back of the envelope: Mr Deeb wrote the date he handed it over, which nobody asked him to do, and the two dates together are the only thing in this that nobody could have arranged afterwards._'));
out.push(p('**Listener task:** write your partner\'s old sentence and the finding that settles it.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Attar wrote on the evening he opened the envelope. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _note on the envelope of 1 December_ · _four sentences, two years and three months_ · **1 December**',
  '**The envelope was sealed on 14 September two years ago and the date I wrote on it was 1 December.** ⚠ **Mr Deeb at the registry kept it, I have spoken to him twice in two years and neither time about the letter, and he handed it over unopened with the date of handing it over written on the back in his own hand.** **Nobody asked him to do that.**',
  '**The four sentences, in the order I wrote them.** **One: _I am twenty and I write code and I do not write English._** **Two: _the thing I want is to be read by people who do not know me._** **Three: _nobody from here gets an answer on that forum and I do not expect that to change._** **Four: _if this is still true in two years I shall stop asking._**',
  '**The third sentence is the only one of the four that is evidence, and it is wrong.** **Four answers since March; the earliest is the nineteenth of March and I have the thread.** ⚠ **So the prediction failed and I can date the failure, which is the most useful thing in the whole envelope.**',
  '**The first sentence is now false in a way I had not expected.** **I do write English, and I write about nine hundred words of it a week, and almost none of it is for people who do not know me.** **It is release notes, support replies and a proposal to my own team lead** — **so the thing in the second sentence has not happened, and the first sentence stopped being true in a direction I did not predict.**',
  '**The fourth sentence is the one I am going to keep.** ⚠ **_If this is still true in two years I shall stop asking._** **It is a condition, with a date, and a consequence** — **and it is the only thing in the letter that would have told me what to do if the prediction had held.** **I did not know at twenty that this was the valuable sentence and I think I wrote it to sound decided.**',
  '**What I notice about the writing itself, and it is not what I expected to notice.** **The four sentences are short and none of them hedges.** ⚠ **I would hedge two of them now and I am not sure I should.** **_I do not expect that to change_ is a plain prediction and it was checkable because it was plain** — **and the version I would write today, _it seems unlikely to change in the short term_, could not have been wrong.**',
  '**And the thing that is not about the letter.** **Two years and three months is long enough for a prediction about other people to be settled and short enough for me to remember the evening I wrote it.** ⚠ **The interval was mine to set and I set it almost at random.** **The next one I shall set at five years, because the two sentences that have not been settled by this one are both about what kind of writer I am**, and that was never going to be answered by December.',
]));
out.push(item('1', 'Which of the four sentences is evidence, and what settled it?'));
out.push(item('2', 'In what way is the first sentence now false, and why was that unexpected?'));
out.push(item('3', 'Which sentence does he say he will keep, and what does he now think about hedging?'));
out.push(writers([
  'A note on an old document of your own: **the sealing date, the date you set, and who kept it** → **the sentences quoted exactly, in order** → **which of them is evidence, and what settled it** → **which has become false in an unexpected direction** → **the one you will keep, and why** → **what you notice about the writing itself** → **and the interval, and whether you would set it again.**',
  '⚠ **Quote the old sentences exactly, in the order written.** **Not summarised, not tidied, not corrected.** **A note that paraphrases its own evidence has destroyed it** — **and the order shows what the writer thought mattered most.**',
  '**Name the one sentence that is evidence, and accept that most are not.** ⚠ **One of Mr Attar\'s four.** **A date, a writer, and something countable** — **and a note that treats all four as findings has mistaken a letter for a measurement.**',
  '**Say what has become false in a direction you did not predict.** ⚠ _I do write English, and almost none of it is for people who do not know me._ **This is the most valuable paragraph in the genre, because it is the one thing the old writer could not have arranged** — **and it is always about a thing that happened rather than a thing that improved.**',
  '⚠ And **end on the interval and not on the letter.** _Two years and three months is long enough for a prediction about other people to be settled and short enough for me to remember the evening I wrote it._ **The interval was the writer\'s own decision and almost nobody thinks about it** — **and 15.6 asks you to set the next one on purpose.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note on your own oldest document (120 words or more).'));
out.push(p('**______________** · _note on _______________ · _______________ · **______________**   **The ______________ was written on ______________ and ______________.** ⚠ **______________ kept it and ______________.**   **The ______________ sentences, in the order I wrote them.** **One: _______________._** **Two: _______________._** **Three: _______________._**   **The ______________ sentence is the only one that is evidence, and it is ______________.** **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The old sentences quoted exactly, in order',
  'One named as evidence, and the others not',
  'What settled it, with a date',
  'The interval, and whether you would set it again',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their old sentences**, flat, and the room says which one is evidence.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the dates and the keeper, the sentences, the evidence, the unexpected falsehood, the sentence you keep, the writing itself, and the interval.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: the old sentences quoted exactly, one named as evidence, and no verdict on the writer anywhere.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their oldest sentence twice: once as they feel about it and once flat.** ⚠ **The room says which version it could hear the words of.** **It is the flat one, and the room will be surprised by how much it had not heard.** **Then the sentence this cycle ends on, which is Mr Attar\'s: Mr Deeb wrote the date he handed it over, and nobody asked him to.**'));
out.push(hw('**Quote your oldest claim exactly** and write **the finding that settles it, with a date.** ⚠ **Two sentences, and nothing between them.** **Then do the harder half: count how many sentences in the old document are claims at all.** **In this class the counts have run between none and four out of a page** — **and the two students who found none had written a page of hopes.** **Bring both.** **15.2 says what you wrote and what you no longer believe, in one sentence each**, so bring the one you would now write differently.'));

// ===================== 15.2 =====================
out.push(pb());
out.push(h2('15.2  What I wrote, and what I no longer believe'));
out.push(p('**Function:** saying what you wrote and what you no longer believe, in one sentence each   ·   **Grammar:** _I wrote ___ and I no longer ___ , because ____   ·   **Pronunciation:** the two halves at the same weight, with the reason unstressed'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence you wrote and no longer believe.** ⚠ **The old sentence, and then stop.** Your teacher writes the ten on the board and leaves the second column empty. **In most classes six of the ten first answers give the old sentence and a feeling about it** — **and the empty column is where the cycle lives.**'));
out.push(board('I wrote that nobody from here gets an answer.', 'I no longer believe it, because four came since March.'));
out.push(p('**b**  Which two are complete? **1** _I wrote that nobody from here gets an answer and I no longer believe it, because four came between March and November and I have the dates._  **2** _I wrote some things I would not write now._  **3** _I wrote that I could not refuse a referee\'s point and I no longer believe it, because point five of the May letter is a refusal with the office named._  **4** _Looking back, I was wrong about quite a lot of it._  **5** _I wrote that and I think differently now._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the sentence needs?   **A** an apology for the old view   **B** **three parts** — what you wrote, what you no longer believe, and the _because_ that is a fact and not a reason   **C** a judgement on which version was better'));
out.push(p('**b**  Listen again. **1** What does Mrs Khoury say the _because_ has to be?   **2** What does Mrs Oueidat say about the case where you still believe it?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.3  Three parts, and the third is a fact', [
  ['Ms Huda', 'The form is three parts. Mrs Khoury — the third.'],
  ['Mrs Khoury', '⚠ **The _because_, and it has to be a fact and not a reason.** **_Because four answers came between March and November_ is a fact.** **_Because I have more confidence now_ is a reason, and a reason is a thing you supply about yourself.**'],
  ['Mr Attar', 'And if there is no fact?'],
  ['Mrs Khoury', '⚠ **Then you still believe it and the honest sentence says so.** **_I wrote it, I still believe it, and nothing since has tested it_** — **which is the entry three people in this room have and nobody expected to be allowed.**'],
  ['Mrs Oueidat', 'That is the harder half of this cycle.'],
  ['Mrs Oueidat', '⚠ **Because the whole shape of the exercise invites a change of mind.** **A student who has not changed their mind will invent a change rather than write the third sentence** — **and an invented change is the only thing in this unit that cannot be checked by anybody.**'],
  ['Mrs Tarabishi', 'My old sentence was about myself, not the world.'],
  ['Mrs Khoury', '⚠ **And those are the two kinds and they need different facts.** **A sentence about the world is settled by what happened** — _four answers came_. **A sentence about yourself is settled by a document you have written since** — _point five of the May letter is a refusal with the office named_, **which is 12.1 and the room has done it before.**'],
  ['Dr Qabbani', 'Mine is about myself and I cannot find the document.'],
  ['Mrs Oueidat', '⚠ **Then look for the absence instead, which is the third form.** **_Nobody has asked me about my search since June, for the first time in four submissions_** — **a negative with a denominator, which is the strongest of the three and the one nobody reaches for.**'],
  ['Mr Tayara', 'And the weight of the two halves?'],
  ['Mrs Khoury', '⚠ **Equal, and the reason unstressed.** **A student who leans on _no longer_ has announced a conversion** — **and a conversion is a thing the room congratulates, which costs the sentence its evidence exactly as a rise did in 12.1.**'],
  ['Mrs Ajouz', 'Mine changed and then changed back.'],
  ['Mrs Khoury', '⚠ **Then write both dates and the sentence is better for it.** **_I wrote it, I stopped believing it in April, and I believe it again since the file was returned in September_** — **and two dates on one belief is the most honest entry anybody has produced in this unit.**'],
  ['Mr Zahreddine', 'Is it ever three sentences instead of one?'],
  ['Mrs Oueidat', '⚠ **One sentence, and the discipline is the point.** **Three sentences let you explain, and explaining is what the room does instead of fixing a date** — **and in this class the one-sentence versions have all had a date in them and about half the three-sentence versions have not.**'],
  ['Mr Shihabi', 'What about the ones that were right?'],
  ['Mrs Khoury', '⚠ **They get the same form with the middle clause reversed.** **_I wrote it, I still believe it, and the desk has not changed a first paragraph of mine since 11 June._** **Nothing in this cycle requires you to have been wrong** — **and a room that thinks it does will produce ten changes of mind and three of them will be false.**'],
  ['Mrs Tarabishi', '🔊 ⚠ **And the thing I shall take away is the two kinds.** **My list was nine sentences about myself and not one about the world**, and every one of them needs a document I have written since — **which means the list was always going to be checked by my own writing and I did not know that when I wrote it.**'],
]));
out.push(sp());
out.push(box('Language box – the three-part sentence', [
  '**One sentence, three parts.** ⚠ _I wrote ___ , and I no longer believe it, because ____ ._ **What you wrote, what you no longer believe, and a _because_ that is a fact.** **One sentence, because three sentences let you explain and explaining is what a room does instead of fixing a date.**',
  '**The _because_ is a fact and not a reason.** ⚠ **_Because four answers came between March and November_ is a fact.** **_Because I have more confidence now_ is a reason, and a reason is something you supply about yourself** — **which is the whole distinction this unit rests on.**',
  '**Two kinds of old sentence, and they need different facts.** ⚠ **A sentence about the world is settled by what happened.** **A sentence about yourself is settled by a document you have written since** — **and the second is 12.1, which the room has done before and will not recognise here.**',
  '**And a third form, for a sentence about yourself with no document behind it.** ⚠ **The absence with a denominator.** _Nobody has asked me about my search since June, for the first time in four submissions._ **The strongest of the three and the one nobody reaches for.**',
  '**Where you still believe it, say so, and the form does not change.** ⚠ _I wrote it, I still believe it, and the desk has not changed a first paragraph of mine since 11 June._ **Nothing in this cycle requires you to have been wrong** — **and a room that thinks it does will produce ten changes of mind, of which three will be false.**',
  '**And where it changed and changed back, give both dates.** ⚠ _I wrote it, I stopped believing it in April, and I believe it again since the file was returned in September._ **Two dates on one belief is the most honest entry available** — **and it is also the only one that cannot have been arranged.**',
  '**Pronunciation.** 🔊 **Track 15.4** **Say the sentence with equal weight on the two halves and the _because_ unstressed.** ⚠ **Leaning on _no longer_ announces a conversion**, and a conversion is a thing the room congratulates — **which costs the sentence its evidence exactly as a rise did in 12.1.**',
  '**Practise:** One sentence, three parts. **1** about the world  **2** about yourself, with a document  **3** about yourself, with an absence  **4** one you still believe  **5** one that changed and changed back',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the old sentence from the card. B gives **the three-part sentence**, in one sentence, with a fact in the _because_. ⚠ **Two rows on each card are still believed** — **and there B keeps the form and reverses the middle clause.** Change cards.'));
out.push(table(['Card A – the old sentence', 'Card B – the old sentence'], [
  ['_Nobody from here gets an answer on that forum._', '_I cannot refuse a referee\'s point._'],
  ['_⚠ The inspectorate will never accept a hand-kept book._', '_⚠ This office will never refuse the regional director._'],
  ['_I cannot state a degree of certainty I would defend._', '_I cannot read my own abstract against my body._'],
  ['_⚠ I shall never write a covering note of three hundred words._', '_⚠ I cannot find a calque in my own writing._'],
  ['_I shall never be able to file eighty words._', '_The desk will always rewrite my first paragraph._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the three parts, and whether the _because_ is a fact. ⚠ **Rows 2 and 4 on both cards are still believed and the form does not change** — **the inspectorate has not accepted one, the office has not refused one, the notes are still four hundred words, the calques are still found by other people.** **Rows 3 are settled by documents the writer has produced; rows 5 by what somebody else did.** **The listener says which of the three forms was used.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your old sentence** and write the three-part version. ⚠ **One sentence, and the _because_ must be a fact somebody else could check.** **Then read it to your partner, who writes down only the _because_** — **and in this class a third of first versions have produced a _because_ that is a reason, and the writer has not noticed.**'));
out.push(p('**b**  Swap. Your partner asks **the one question that tests the whole cycle**: _would you have written this sentence if you had not changed your mind?_ ⚠ **If the answer is yes, the change is invented.** **In this class two students found that out here**, and both rewrote the sentence as _I still believe it_.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury said the third part is the because and it has to be a fact and not a reason: because four answers came between March and November is a fact, and because I have more confidence now is a reason, and a reason is a thing you supply about yourself. Mr Attar asked what happens if there is no fact, and then you still believe it and the honest sentence says so: I wrote it, I still believe it, and nothing since has tested it, which is the entry three people in the room have and nobody expected to be allowed. Mrs Oueidat said that is the harder half of the cycle, because the whole shape of the exercise invites a change of mind, and a student who has not changed their mind will invent a change rather than write the third sentence, and an invented change is the only thing in this unit that cannot be checked by anybody. Mrs Tarabishi said her old sentence was about herself and not the world, and Mrs Khoury said those are the two kinds and they need different facts: a sentence about the world is settled by what happened, and a sentence about yourself by a document you have written since. Dr Qabbani said his is about himself and he cannot find the document, and then look for the absence instead, which is the third form: nobody has asked me about my search since June, for the first time in four submissions, a negative with a denominator. Mr Tayara asked about the weight of the two halves, and equal, with the reason unstressed, because a student who leans on no longer has announced a conversion and a conversion is a thing the room congratulates. Mrs Ajouz said hers changed and then changed back, and then write both dates and the sentence is better for it. Mr Zahreddine asked whether it is ever three sentences, and one sentence, because three sentences let you explain and explaining is what the room does instead of fixing a date. Mr Shihabi asked about the ones that were right, and they get the same form with the middle clause reversed, and nothing in the cycle requires anybody to have been wrong. And Mrs Tarabishi said the thing she will take away is the two kinds: her list was nine sentences about herself and not one about the world, so every one of them needs a document she has written since. Mrs Khoury said that is a finding about the list and not about the year, because a list of nine sentences about yourself has set a narrower test than its writer intended. And Mrs Ajouz said the thing she will take away is the still-believed group, because she had assumed the exercise required her to have changed her mind about everything._'));
out.push(p('**Listener task:** write your partner\'s _because_ and say whether it is a fact.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the sheet Mrs Tarabishi wrote against her own September list. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _the list of 14 September, two years on_ · _nine sentences, three forms_ · **4 December**',
  '**Nine sentences, and every one of them is about me.** ⚠ **Not one is about the world.** **I had not noticed that in sixteen months of marking it** — **and it means the whole list was always going to be settled by documents I wrote myself, which is a narrower test than I thought I was setting.**',
  '**Four settled by a document I have written since.** **_I wrote that I could not state a degree of certainty I would defend, and I no longer believe it, because section 4.6 of 2 May states nine findings at four degrees._** **_I wrote that I could not refuse a referee\'s point, and I no longer believe it, because point five of the letter of 12 May is refused with the office named._** **_I wrote that I could not put a limitation under its claim, and I no longer believe it, because chapter 4 of 18 May carries five boundaries in five findings\' own sentences._** **_I wrote that I could not read my abstract against my body, and I no longer believe it, because I did it on 10 May in eleven minutes and removed two sentences._**',
  '**Two settled by an absence, which is the form I had to be taught.** **_I wrote that referees would always ask about my search, and I no longer believe it, because nobody has asked since June, for the first time in four submissions._** ⚠ **_I wrote that the desk would always query my covering notes, and I no longer believe it, because none of the last four has been queried._** **Neither of those is a thing I did.** **They are things that stopped happening, and a stopping needs a denominator or it is a hope.**',
  '**Three I still believe, and the form does not change.** **_I wrote that I could not write a covering note of three hundred words, I still believe it, and the last three ran to 380, 392 and 381._** **_I wrote that I could not find a calque in my own writing, I still believe it, and six have been found by other people and none by me._** **_I wrote that I could not hold a hedge across a language, I still believe it, and the one attempt of 6 July produced two sentences signed by nobody._**',
  '**What I nearly did and did not do.** ⚠ **I nearly wrote that the third group had improved.** **It has not.** **The figures are 380, 392 and 381 against a figure of 300, and a note that is eighty words over instead of a hundred is not an improvement, it is the same note** — **and the sheet invites a change of mind at every line, which is the one thing to resist.**',
  '**And the thing that is not about the list.** **Sixteen months ago I thought the list was a statement of what I could not do.** ⚠ **It was a statement of what I could not do and a prediction about what would be hard, and the two halves have come out differently**: the four I crossed off were the four I was most worried about, and the three that remain are the three I mentioned least.',
]));
out.push(item('1', 'What does she notice about all nine sentences, and what follows from it?'));
out.push(item('2', 'What are the two sentences settled by an absence, and what does an absence need?'));
out.push(item('3', 'What did she nearly write, and why did she not?'));
out.push(writers([
  'A sheet against your own old list: **the count, and one thing true of all of them** → **those settled by a document you wrote, each in the three-part form** → **those settled by an absence, with its denominator** → **those you still believe, in the same form** → **what you nearly wrote and did not** → **and the thing that is not about the list.**',
  '⚠ **Every entry in the three-part form, and no entry in any other.** _I wrote ___ , and I no longer believe it, because ____ ._ **The sameness is the discipline** — **and a sheet with three shapes on it has let the writer explain somewhere, which is where the dates stop.**',
  '**Group them by what settles them and label the groups.** ⚠ **A document I wrote. An absence. Still believed.** **Three groups, counted** — **and the counts are the finding: four, two and three is a different year from eight, one and nought.**',
  '**Give every absence a denominator.** ⚠ _Nobody has asked since June, for the first time in four submissions._ **A stopping without a denominator is a hope** — **and this is the form a room has to be taught, because nobody arrives with it.**',
  '⚠ And **write down what you nearly claimed.** _I nearly wrote that the third group had improved. It has not._ **The sheet invites a change of mind at every line** — **and the paragraph naming the invitation is the only protection against it, in this sheet and in the next one.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a sheet against your own old document (120 words or more).'));
out.push(p('**______________** · _the _______________ of _______________, _______________ on_ · _______________ sentences, _______________ forms_ · **______________**   **______________ sentences, and every one of them is ______________.** ⚠ **______________.**   **______________ settled by a document I have written since.** **_I wrote that _______________, and I no longer believe it, because _______________._** **_I wrote that _______________, and I no longer believe it, because _______________._**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every entry in the three-part form',
  'Groups labelled by what settles them, and counted',
  'Every absence with a denominator',
  'What you nearly claimed, and did not',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their three counts** — settled by a document, settled by an absence, still believed — and the room says which group it expected to be largest.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole sheet (260 words or more), to the shape in the writer\'s box: the count, the three groups in the three-part form, what you nearly claimed, and the thing that is not about the list.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every _because_ a fact, every absence with a denominator, and the still-believed group present.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One question round the room and three numbers on the board: settled by a document, settled by an absence, still believed.** ⚠ **In this class the third number has never been nought** — **and the two students who wrote nought in a first draft both found an invented change when their partner asked the test question.** **Then Mrs Tarabishi\'s sentence: the four she crossed off were the four she was most worried about, and the three that remain are the three she mentioned least.**'));
out.push(hw('Write **every sentence of your own old document in the three-part form**, and then do the count: ⚠ **how many are settled by a document you wrote, how many by an absence, and how many you still believe.** **Then ask yourself the test question about each change: would you have written this if you had not changed your mind?** **Bring the three counts.** **15.3 reads a document whose date has not come and leaves it sealed**, so bring an envelope that is not due, or the thing you would seal today.'));

// ===================== 15.3 =====================
out.push(pb());
out.push(h2('15.3  The one you do not open'));
out.push(p('**Function:** reading a document of your own whose date has not come, and leaving it sealed   ·   **Grammar:** writing about a document you may not read   ·   **Pronunciation:** saying what you think is in it without a hedge'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **the document of yours whose date has not come, and the date.** ⚠ **If you have no envelope, the document is the one you will write in 15.6 and the date is the one you will set.** **In this room one envelope is not due until June in two years** — **and eight students are going to set a date for the first time in their lives, which is harder than opening one.**'));
out.push(board('What do you think is in it?', 'Three sentences, no hedges, written down.'));
out.push(p('**b**  Which two are useful things to do with a sealed document? **1** _Open it early; two years is an arbitrary interval anyway._  **2** _Write down what you think is in it, in three sentences, and seal that with it._  **3** _Ask the keeper what it feels like._  **4** _Write what you would want it to say, and keep the two apart._  **5** _Forget about it until the date._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the task is?   **A** to wait   **B** **to write down what you think is in it, unhedged, and seal that with it** — so that the opening settles two documents and not one   **C** to ask the keeper for a hint'));
out.push(p('**b**  Listen again. **1** Why does Mrs Khoury refuse to open hers?   **2** What does Mr Attar say his own prediction would have been worth?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.5  The second envelope', [
  ['Ms Huda', 'Mrs Khoury — yours is not due.'],
  ['Mrs Khoury', '⚠ **The first of June in two years, and my keeper is a woman at the pharmacy who has never asked me about it.** **I set the date myself and I am not going to move it.**'],
  ['Mr Shihabi', 'You could open it. Nobody would know.'],
  ['Mrs Khoury', '⚠ **I would know, and the date is the only part of the exercise that was mine.** **The letter is a prediction and a prediction opened early is not a prediction** — **it is a document I have read, which is a different and much commoner object.**'],
  ['Mrs Oueidat', 'So what is the task?'],
  ['Mrs Khoury', '⚠ **Write what I think is in it, in three sentences, with no hedges, and seal that with it.** **Then the opening settles two documents** — **the letter, and my guess about the letter, which is four years newer and tells me something the letter cannot.**'],
  ['Dr Qabbani', 'What does the guess tell you?'],
  ['Mr Attar', '⚠ **I can answer that, because I did not write one and I wish I had.** **I spent two years and three months occasionally remembering that there was a letter and never once writing down what I thought was in it** — **and when I opened it I was wrong about three of the four sentences.**'],
  ['Mrs Tarabishi', 'Wrong how?'],
  ['Mr Attar', '⚠ **I expected it to be about code and about the forum, and it is about being read by people who do not know me**, which is a thing I would not have said I cared about at twenty. **A guess written down in September would have shown me that I had forgotten what I wanted** — **and the letter alone cannot show me that, because the letter is what I wanted.**'],
  ['Mr Tayara', 'And the hedges?'],
  ['Mrs Oueidat', '⚠ **No hedges, which is the whole discipline of the guess.** **_I think it probably mentions the forum_ cannot be wrong.** **_It mentions the forum_ can** — **and a guess that cannot be wrong is a guess that will teach nobody anything, which is 9.1 arriving in a place nobody expected it.**'],
  ['Mrs Ajouz', 'I have no envelope at all.'],
  ['Mrs Khoury', '⚠ **Eight of you have none, and you have the harder half of this cycle: you set a date for the first time.** **The date is not a formality** — **Mr Attar\'s two years and three months settled a prediction about other people and settled nothing about what kind of writer he is, and he set it almost at random.**'],
  ['Mrs Rizk', 'How do you choose an interval?'],
  ['Mrs Oueidat', '⚠ **By asking what the sentence is about.** **A prediction about other people needs about two years.** **A prediction about yourself needs five** — **and a sentence about what kind of writer you are may need ten, which is longer than this course and longer than most jobs.**'],
  ['Mr Zahreddine', 'Mine would be about insurers and I know the answer already.'],
  ['Mrs Khoury', '⚠ **Then write the sentence you do not know the answer to, and that is the test of a letter worth sealing.** **A letter containing only things you can already settle is a diary** — **and in this class the three best sentences in the sealed letters were all about things the writer could not have checked at the time.**'],
  ['Mrs Khoury', '🔊 ⚠ **And the thing I shall take away is that I nearly opened it in October.** **I had a bad month and I wanted to know whether I had predicted it** — **and wanting to know is exactly the state in which the letter is worth least, because I would have read it as a comment on October.**'],
]));
out.push(sp());
out.push(box('Language box – the document you do not open', [
  '**The task is not waiting.** ⚠ **Write what you think is in it, in three sentences, and seal that with it.** **Then the opening settles two documents: the letter, and your guess about the letter** — **and the guess is years newer and tells you something the letter cannot.**',
  '**What the guess tells you that the letter cannot.** ⚠ **Whether you have forgotten what you wanted.** **The letter is what you wanted; the guess is what you now think you wanted** — **and Mr Attar was wrong about three of his four sentences, which is a finding no letter alone produces.**',
  '**No hedges in the guess.** ⚠ **_I think it probably mentions the forum_ cannot be wrong.** **_It mentions the forum_ can.** **A guess that cannot be wrong will teach nobody anything** — **which is 9.1 arriving where nobody expected it.**',
  '**A prediction opened early is not a prediction.** ⚠ **It is a document you have read, which is a different and much commoner object.** **The date is the only part of the exercise the writer chose** — **and moving it destroys the one thing that was theirs.**',
  '**Choose the interval by asking what the sentence is about.** ⚠ **A prediction about other people needs about two years.** **One about yourself needs five.** **One about what kind of writer you are may need ten** — **longer than this course and longer than most jobs, and that is not a reason to shorten it.**',
  '**And the test of a letter worth sealing.** ⚠ **Write the sentence you do not know the answer to.** **A letter containing only things you can already settle is a diary** — **and the three best sentences in this class\'s sealed letters were all about things the writer could not have checked at the time.**',
  '**Pronunciation.** 🔊 **Track 15.6** **Say your three guesses with no hedge and no rise.** ⚠ **Then say them again with _I think_ at the front of each, and hear what goes.** **What goes is the possibility of being wrong** — **and in this cycle that is the whole value, so the flat version is not a style, it is the exercise.**',
  '**Practise:** Guess, unhedged. **1** what it says about your work  **2** what it says about other people  **3** what it asks you to do  **4** what you think you have forgotten  **5** the interval, and why that one',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the guess from the card. B says **whether it could be wrong**, and if it could not, **rewrites it so that it can be.** ⚠ **Two rows on each card are already unhedged** — **and there B says what it would take to settle them.** Change cards.'));
out.push(table(['Card A – the guess', 'Card B – the guess'], [
  ['_I think it probably mentions the forum._', '_I expect there is something about the desk in it._'],
  ['_⚠ It names three things I wanted and none of them is a job._', '_⚠ It says I shall stop asking if nothing has changed._'],
  ['_It may well be quite short._', '_It is probably about my English rather than my work._'],
  ['_⚠ It gives a date and a condition in the last sentence._', '_⚠ It mentions my brother and not my supervisor._'],
  ['_I suspect I was more hopeful then than I remember._', '_I imagine it is a bit embarrassing._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** could it be wrong, and what would settle it. ⚠ **Rows 2 and 4 on both cards are already unhedged and checkable** — **three things and none a job, a date and a condition, a named person** — **and opening the envelope settles all four in a second.** **Rows 1, 3 and 5 all contain a hedge and the listener names it**: _probably_, _expect_, _may well_, _suspect_, _imagine_. **Five words, and each one makes a guess unfalsifiable.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **three guesses about your sealed document**, unhedged, and seal them with it. ⚠ **If you have no envelope, write the three sentences you will put in the one you seal in 15.6 and the date you will set** — **and write why that interval and not another.** **In this class the eight students without envelopes produced intervals between two and ten years**, and the ten-year one was about what kind of writer the student is.'));
out.push(p('**b**  Swap. Your partner reads your three guesses and says **which one you will most want to have been right about.** ⚠ **That is usually the one to be most careful of**, because a guess you are invested in is a guess you will remember having made differently.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Khoury\'s envelope is not due until the first of June in two years, her keeper is a woman at the pharmacy who has never asked her about it, and she set the date herself and will not move it. Mr Shihabi said she could open it and nobody would know, and she would know, and the date is the only part of the exercise that was hers: a prediction opened early is not a prediction, it is a document she has read, which is a different and much commoner object. Mrs Oueidat asked what the task is, and to write what she thinks is in it, in three sentences, with no hedges, and seal that with it, so that the opening settles two documents. Dr Qabbani asked what the guess tells you, and Mr Attar said he can answer that because he did not write one and wishes he had: he spent two years and three months occasionally remembering there was a letter and never writing down what he thought was in it, and when he opened it he was wrong about three of the four sentences. Mrs Tarabishi asked wrong how, and he expected it to be about code and about the forum and it is about being read by people who do not know him, which is a thing he would not have said he cared about at twenty. Mr Tayara asked about hedges, and no hedges, because I think it probably mentions the forum cannot be wrong and it mentions the forum can. Mrs Ajouz said she has no envelope at all, and eight of them have none and they have the harder half: they set a date for the first time. Mrs Rizk asked how you choose an interval, and by asking what the sentence is about: a prediction about other people needs about two years, one about yourself needs five, and one about what kind of writer you are may need ten. Mr Zahreddine said his would be about insurers and he knows the answer already, and then write the sentence you do not know the answer to. And Mrs Khoury said the thing she will take away is that she nearly opened it in October: she had a bad month and wanted to know whether she had predicted it, and wanting to know is exactly the state in which the letter is worth least. Mrs Oueidat said that is the argument for a keeper who is not a friend, because a friend would have handed it over in October and been kind about it. And Mr Tayara said the thing he will take away is the interval, because he had assumed two years was the length of such a thing and nobody had told him it was a decision._'));
out.push(p('**Listener task:** write your partner\'s three guesses and the one they most want to be right about.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mrs Khoury sealed with her unopened envelope. Answer the questions.'));
out.push(model([
  '**D. KHOURY** · _to be opened with the envelope of 1 June_ · _three guesses, unhedged_ · **8 December**',
  '**This page is sealed with a letter I wrote two years and three months ago and have not read.** ⚠ **The date on the envelope is the first of June in two years and I set it myself.** **Mrs Hallak at the pharmacy has kept it since September and has never mentioned it.**',
  '**Guess one: it names the trade bulletin and says I shall still be sub-editing it.** **No hedge, and it can be wrong in two ways** — **the bulletin may not be named, or the prediction may have been about leaving.** ⚠ **I think I was content and I am not certain I was, which is the kind of thing a letter settles and memory does not.**',
  '**Guess two: it contains the phrase _the four-second test_ and nothing else from the course.** **I remember writing one technical thing down and I remember choosing which.** **If a second one is in there I have forgotten something I decided was worth keeping** — **and that forgetting is more interesting than the phrase.**',
  '**Guess three: it does not mention anybody by name.** ⚠ **This is the guess I am least sure of and the one I have written most plainly.** **I do not put names in anything I expect to be read by one person** — **and if there is a name in it, the letter was written to somebody and not to me, which would change what the whole exercise was.**',
  '**What I shall want to have been right about, and it is guess three.** **I am aware of that and I am leaving all three as they are** — **because a guess you are invested in is a guess you will remember having made differently**, and this page exists so that I cannot.',
  '**Why I have not opened it, which I am writing down because I nearly did.** **In October I had a bad month and I wanted to know whether I had predicted it.** ⚠ **Wanting to know is exactly the state in which the letter is worth least**, because I should have read it as a comment on October and not as a prediction made in September two years earlier.',
  '**And the interval, which is the part I would now set differently.** **Four years and nine months is too long for the bulletin and about right for the third guess.** ⚠ **If I were sealing it today I should write two letters with two dates** — **one at two years about the work, and one at ten about what kind of writer I am** — **and the second is the one nobody in this room has thought of, including me, until Mrs Oueidat said it in the lesson.**',
  '**One more thing I have decided about the arrangement itself, which is not in the letter and is in this page.** **I am not going to tell Mrs Hallak what the date is for.** ⚠ **She has had it for two years and three months and has never asked, and I have realised that I do not know whether she knows there is a date on it at all** — **because I handed it over in a chemist\'s shop in September and said four words about it.** **If she asks, I shall tell her; and the fact that she has not asked is the only thing I know about her part in this, and it is more than I knew about Mr Deeb before December.**',
]));
out.push(item('1', 'Which guess is she least sure of, and how has she written it?'));
out.push(item('2', 'Why does she leave all three as they are?'));
out.push(item('3', 'What would she do differently about the interval?'));
out.push(writers([
  'A page sealed with an unopened document: **the document, its date, and who keeps it** → **three guesses, unhedged, each with how it could be wrong** → **which one you will want to have been right about** → **why you have not opened it** → **and the interval, and what you would set now.**',
  '⚠ **Every guess unhedged, and say for each how it could be wrong.** _It can be wrong in two ways: the bulletin may not be named, or the prediction may have been about leaving._ **A guess with its failure conditions attached is the only kind worth sealing** — **and writing them out is what stops the hedge creeping back in.**',
  '**Name the guess you are invested in, and change nothing.** ⚠ _I am aware of that and I am leaving all three as they are._ **A guess you want to be right about is one you will remember having made differently** — **and the page exists so that you cannot.**',
  '**Say why you have not opened it, especially if you nearly did.** ⚠ _In October I had a bad month and I wanted to know whether I had predicted it._ **Wanting to know is the state in which the document is worth least** — **and a page that does not record the near miss has left out the only test the writer has actually faced.**',
  '⚠ And **end on the interval, and set the next one on purpose.** _Two years about the work and ten about what kind of writer I am._ **Mr Attar set his almost at random and it settled one of four sentences** — **and the interval is the only part of a sealed letter that cannot be revised afterwards.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the page you seal with your own document (120 words or more).'));
out.push(p('**______________** · _to be opened with _______________ · _three guesses, unhedged_ · **______________**   **This page is sealed with ______________ and ______________.** ⚠ **The date is ______________ and I set it myself.** **______________ has kept it since ______________.**   **Guess one: ______________.** **No hedge, and it can be wrong in ______________ ways** — **______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Three guesses, and not a hedge in any of them',
  'How each one could be wrong',
  'The guess you are invested in, named and unchanged',
  'The interval, with the reason for that one',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their three guesses**, and the room says which one could not be wrong.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260 words or more), to the shape in the writer\'s box: the document and its keeper, the three guesses with their failure conditions, the one you are invested in, why you have not opened it, and the interval.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: no hedge in any guess, a failure condition on each, and the interval justified.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One student reads their three guesses twice: once as written and once with _I think_ at the front of each.** ⚠ **The room says what goes.** **What goes is the possibility of being wrong** — **and the room will hear the second version as more careful, which is exactly the trap.** **Then Mrs Khoury\'s October: wanting to know is the state in which the letter is worth least.**'));
out.push(hw('Write **three unhedged guesses** about your sealed document, with a failure condition on each, **and seal them with it.** ⚠ **If you have no envelope, write the date you will set and the reason for that interval and not another.** **In this class the intervals ran from two years to ten** — **and the two students who chose ten were both answering a question about what kind of writer they are.** **Bring the date and the reason.** **15.4 dates your own change**, so bring a change you believe in and cannot date.'));

// ===================== 15.4 =====================
out.push(pb());
out.push(h2('15.4  Putting a date on your own change'));
out.push(p('**Function:** putting a date on your own change: when it happened, and what the evidence is   ·   **Grammar:** the change with an occasion attached, not a feeling   ·   **Pronunciation:** a date given as a date, with no rise'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one change you believe in and cannot date.** ⚠ **The change, and then say _I cannot date it_ out loud.** **In most classes eight of the ten first answers are undatable** — **and the two that are dated are usually dated by something somebody else did, which is the finding of the cycle and should not be given away yet.**'));
out.push(board('When did you stop apologising in letters?', 'The last apology is dated. Find it.'));
out.push(p('**b**  Which two changes are dated? **1** _I stopped apologising at some point last year._  **2** _My last apology is in a letter of 4 March; there have been eleven letters since and none has one._  **3** _I have gradually become more direct._  **4** _The desk stopped changing my first paragraph on 11 June; before that it changed about one word a paragraph._  **5** _I think the change happened around the spring._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide dates a change?   **A** the month you noticed it   **B** **the last instance of the old behaviour, or the first of the new** — and the second is almost always easier to find   **C** the end of the course'));
out.push(p('**b**  Listen again. **1** What does Mrs Ajouz find when she looks for her last apology?   **2** What does Mrs Khoury say about a change dated by somebody else\'s act?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.7  The last instance', [
  ['Ms Huda', 'Mrs Ajouz — you said you had stopped apologising.'],
  ['Mrs Ajouz', '⚠ **I said it and I could not date it, and then I went through the correspondence file.** **My last apology is in a letter of the fourth of March.**'],
  ['Mr Shihabi', 'And since?'],
  ['Mrs Ajouz', '⚠ **Eleven letters, and not one of them has one.** **Which is a count and a denominator, and I had thought the change was a feeling I developed in the autumn.**'],
  ['Mrs Khoury', '⚠ **Which is 12.1 arriving nine months later and in a file, and the room should be made to notice that it is the same technique.** **Nobody notices the day they stop.** **The way to date a stopping is to find the last time you did it** — **and the search is the work, not the remembering.**'],
  ['Dr Qabbani', 'Mine is a starting, not a stopping.'],
  ['Mrs Oueidat', '⚠ **Then it is easier and it is also less interesting.** **A starting has a first instance and you usually remember it** — **a stopping has no event at all, and the file is the only place it exists.**'],
  ['Mrs Tarabishi', 'My date came from somebody else.'],
  ['Mrs Khoury', '⚠ **And those are the strongest dates there are, which is worth saying slowly.** **The desk stopped changing Mr Shihabi\'s first paragraph on the eleventh of June** — **and he did not do that, somebody else did, and a change dated by somebody else\'s act is the only kind that cannot be arranged by the person claiming it.**'],
  ['Mr Tayara', 'Is there a case where there is no date at all?'],
  ['Mrs Oueidat', '⚠ **Yes, and the honest entry says so.** **_I believe this changed and I cannot date it_** — **and in this class three such entries turned out, on being looked for, to be changes that had not happened: the student believed in a change because they had learnt about it.**'],
  ['Mrs Rizk', 'How long does the search take?'],
  ['Mrs Ajouz', '⚠ **Mine took forty minutes and I have a file.** **In this class the searches have run between twenty minutes and two hours and none has failed when there was a file** — **and the two that failed were students with no file of their own writing at all, which is a different problem and is not about finding a date.**'],
  ['Mrs Oueidat', 'And the ones with no file?'],
  ['Mrs Khoury', '⚠ **They have somebody else\'s file, which they have not thought of.** **Mrs Ajouz\'s eleven letters are in the officer\'s file as well as hers.** **Mr Attar\'s four answers are on the forum** — **and a writer who cannot date their own change can usually date it in a record kept by the person they wrote to.**'],
  ['Mr Zahreddine', 'Three years of opinions and I have never looked at them in order.'],
  ['Mrs Khoury', '⚠ **Then the order is the exercise and it will take an afternoon.** **Nobody reads their own documents chronologically** — **and the one thing a chronological reading produces that nothing else does is the date on which a habit changed, which is invisible in any single document.**'],
  ['Mrs Ajouz', '🔊 ⚠ **And the thing I shall take away is the eleven.** **I thought I had become less apologetic.** **What actually happened is that I wrote eleven letters without an apology and did not notice doing it** — **and the fourth of March is a date I now have for something I would have dated to the autumn.**'],
]));
out.push(sp());
out.push(box('Language box – putting a date on a change', [
  '**Two ways to date it, and only one of them is usually available.** ⚠ **The first instance of the new behaviour, or the last instance of the old.** **A starting has an event and you usually remember it.** **A stopping has no event at all** — **and the file is the only place it exists.**',
  '**The way to date a stopping is to find the last time you did it.** ⚠ _My last apology is in a letter of 4 March; there have been eleven letters since and none has one._ **A date and a denominator.** **Nobody notices the day they stop** — **so the search is the work and the remembering is worthless.**',
  '**A change dated by somebody else\'s act is the strongest kind.** ⚠ **The desk stopped changing a first paragraph on 11 June.** **The writer did not do that** — **and a date supplied by somebody else cannot be arranged by the person claiming the change.**',
  '**Where there is no date, say so.** ⚠ _I believe this changed and I cannot date it._ **In this class three such entries turned out, on being looked for, to be changes that had not happened** — **the student believed in a change because they had learnt about it, which is the commonest false entry in the whole level.**',
  '**And where you have no file of your own, use somebody else\'s.** ⚠ **The letters are in the officer\'s file as well as yours.** **The answers are on the forum.** **The queries are in the night editor\'s log** — **and a writer who cannot date their own change can usually date it in a record kept by the person they wrote to.**',
  '**The search takes between twenty minutes and two hours and it does not fail.** ⚠ **Nobody reads their own documents in order.** **A chronological reading produces one thing that nothing else does** — **the date on which a habit changed, which is invisible in any single document.**',
  '**Pronunciation.** 🔊 **Track 15.8** **Give the date as a date, flat, with no rise and no _I think_.** ⚠ _The fourth of March._ **Then say it with a rise and hear the room offer to agree with you.** **A date is the one thing in this unit that cannot be improved by anybody\'s assent** — **and a rise asks for it.**',
  '**Practise:** Date it. **1** a stopping, by its last instance  **2** a starting, by its first  **3** one dated by somebody else\'s act  **4** one you cannot date, said so  **5** one you would date in somebody else\'s file',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the change from the card. B says **which kind of date it needs and where to look for it.** ⚠ **Two rows on each card cannot be dated from the writer\'s own papers** — **and there B names the other person\'s record.** Change cards.'));
out.push(table(['Card A – the change', 'Card B – the change'], [
  ['_I stopped apologising in letters._', '_I stopped varying the reporting verb._'],
  ['_⚠ The desk stopped changing my first paragraph._', '_⚠ Referees stopped asking about my search._'],
  ['_I started putting the denominator in the same sentence._', '_I started reading the body before the abstract._'],
  ['_⚠ The inspectorate stopped returning the file._', '_⚠ The forum started answering me._'],
  ['_I became less willing to trade a fact._', '_I stopped describing the day-book as maintained._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the kind of date, and where to look. ⚠ **Rows 2 and 4 on both cards are dated by somebody else\'s act and cannot be found in the writer\'s own papers** — **a desk, a referee, an inspectorate, a forum** — **and all four are the strongest dates available.** **Rows 5 are the hardest**: both are stoppings of a habit of mind rather than of a phrase, and only a chronological reading will find them.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your undatable change** and decide **which search would find it**: your last instance, your first instance, or somebody else\'s record. ⚠ **Then say out loud how long you think the search will take.** **In this class the estimates have averaged about ten minutes and the searches have averaged about fifty** — **and the gap is why the search does not get done.**'));
out.push(p('**b**  Swap. Your partner asks **the question that settles whether the change happened at all**: _what would I find in the file if it had not?_ ⚠ **If the answer is _the same thing_, there was no change.** **Three students in this class found that out at this stage**, and all three had believed in a change because they had been taught the move.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Ajouz said she had stopped apologising and could not date it, and then she went through the correspondence file: her last apology is in a letter of the fourth of March. Mr Shihabi asked and since, and eleven letters and not one of them has one, which is a count and a denominator, and she had thought the change was a feeling she developed in the autumn. Mrs Khoury said that is 12.1 arriving nine months later and in a file, because nobody notices the day they stop, and the way to date a stopping is to find the last time you did it, so the search is the work and not the remembering. Dr Qabbani said his is a starting and not a stopping, and Mrs Oueidat said then it is easier and also less interesting, because a starting has a first instance you usually remember and a stopping has no event at all. Mrs Tarabishi said her date came from somebody else, and Mrs Khoury said those are the strongest dates there are: the desk stopped changing Mr Shihabi\'s first paragraph on the eleventh of June, and he did not do that, somebody else did. Mr Tayara asked whether there is a case with no date at all, and yes, and the honest entry says so, and three such entries in this class turned out on being looked for to be changes that had not happened. Mrs Rizk asked how long the search takes, and Mrs Ajouz said hers took forty minutes and she has a file, and the searches in the class have run between twenty minutes and two hours and none has failed when there was a file. Mrs Oueidat asked about the ones with no file, and they have somebody else\'s file, which they have not thought of: the eleven letters are in the officer\'s file as well as hers. Mr Zahreddine said three years of opinions and he has never looked at them in order, and then the order is the exercise and it will take an afternoon. And Mrs Ajouz said the thing she will take away is the eleven: she thought she had become less apologetic, and what actually happened is that she wrote eleven letters without an apology and did not notice doing it. Mrs Khoury said the not noticing is the finding and not the eleven, because a change you noticed is a decision and a change you find in a file is a habit. Mrs Oueidat said the two are worth different amounts to a September teacher, and the second one is worth more. And Mr Shihabi said the thing he will take away is that his own date came from the desk and not from him._'));
out.push(p('**Listener task:** write your partner\'s change and which search would find its date.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mrs Ajouz wrote after the search. Answer the questions.'));
out.push(model([
  '**N. AJOUZ** · _note for my own file_ · _four changes, dated_ · **11 December**',
  '**Four changes, three of them now dated and one of which I can say nothing.** ⚠ **The search took forty minutes and I have had a correspondence file since 2019 and had never read it in order.**',
  '**One: I stopped apologising.** **My last apology is in a letter of 4 March — _we apologise for the inconvenience caused by the delay in returning the file_.** **Eleven letters since and not one has an apology in it.** ⚠ **I would have dated this to the autumn.** **It is nine months earlier than I believed and the belief was about a feeling.**',
  '**Two: the inspectorate stopped returning the file.** **The last return is dated 2 October and the file of 4 August was accepted.** ⚠ **This date is not mine.** **Somebody else supplied it, which makes it the strongest of the four** — **and it is also the only one I could not have arranged, because a return is a thing done to me.**',
  '**Three: I started naming the absent thing.** **The first instance is the note of 11 August about the register** — **and I remember writing it, which is the mark of a starting and the reason startings are the least interesting of the three kinds.**',
  '**Four, which I cannot date and shall not pretend to.** **I believe I have stopped reading the inspectorate\'s letters as personal.** ⚠ **There is nothing in the file that would show it either way.** **No sentence of mine records how I read anything** — **and a change nobody can see from outside is a change I may have learnt about rather than made.**',
  '**What the chronological reading produced that no single letter does.** **The order.** **Reading forty-one letters in sequence, the apologies stop in March and the register is first named in August** — **five months apart, and I had assumed they were the same change, because they feel like the same change.** ⚠ **They are not: one is a stopping and one is a starting, and nothing connects them except that I did both.**',
  '**And the thing that is not about the four.** **I have kept a correspondence file for six years in order to answer questions about individual letters.** ⚠ **Read in order, the same file answers a different question, which is what I am like** — **and the second use costs forty minutes and had not occurred to me in six years.**',
  '**What the search did not produce, which I want on the record.** **No date for the fourth change and no date for two of the nine items on my September list.** ⚠ **The file is forty-one letters and it is complete, so the absence is not a gap in the record** — **it is a gap in what a record of letters can show, and that is a different and more useful finding.** **A correspondence file holds what I sent and nothing about how I read what came back** — **and three of the changes I most believe in are about reading and not about writing.**',
  '**And one figure I shall want in five years.** **Forty-one letters in six years, nine returns, and the last return on 2 October.** ⚠ **I am writing the three numbers down together because none of them is interesting alone and the three of them are the shape of six years** — **and I have never had them on one line before, in six years of keeping the file that contains them.**',
]));
out.push(item('1', 'Which of the four is the strongest date, and why?'));
out.push(item('2', 'What does she refuse to date, and what is her reason?'));
out.push(item('3', 'What did the chronological reading produce, and what had she assumed?'));
out.push(writers([
  'A note putting dates on your own changes: **the count, how many are dated, and how long the search took** → **each stopping, by its last instance, with a denominator** → **each date supplied by somebody else, named as theirs** → **each starting, by its first instance** → **what you cannot date, said plainly** → **what the order produced** → **and the thing that is not about the changes.**',
  '⚠ **Quote the last instance of a stopping, not just its date.** _My last apology is in a letter of 4 March — "we apologise for the inconvenience caused by the delay"._ **The words are what make it checkable** — **and a date with no quotation behind it is a date the writer has chosen.**',
  '**Mark the dates that are not yours as not yours.** ⚠ _This date is not mine. Somebody else supplied it._ **A return, a query, an answer, an acceptance** — **and these are the strongest entries in any such note, because they are the only ones the writer could not have arranged.**',
  '**Refuse to date what cannot be dated, and say what that means.** ⚠ _A change nobody can see from outside is a change I may have learnt about rather than made._ **This is the sentence that makes the other three believable** — **and in this class three such entries turned out to be changes that had not happened.**',
  '⚠ And **report what the order produced, because it is the whole argument for the search.** _The apologies stop in March and the register is first named in August — five months apart, and I had assumed they were the same change._ **No single document contains an order** — **and the order is the only thing a chronological reading gives you.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of a note putting dates on your own changes (120 words or more).'));
out.push(p('**______________** · _note for _______________ · _______________ changes, dated_ · **______________**   **______________ changes, ______________ of them now dated and ______________ of which I can say nothing.** ⚠ **The search took ______________.**   **One: I stopped ______________.** **My last ______________ is in ______________ of ______________ — _______________._** **______________ since and not one has ______________.**   **Two: ______________ stopped ______________.** ⚠ **This date is not mine.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every stopping with its last instance quoted',
  'Every denominator present',
  'Dates supplied by others marked as theirs',
  'What cannot be dated, refused plainly',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their dates**, and the room says which of them was supplied by somebody else.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: the count and the search, the stoppings, the dates that are not yours, the startings, what you cannot date, what the order produced, and the thing that is not about the changes.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: every stopping quoted, every date attributed, and at least one change refused as undatable.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Two numbers round the room and both on the board: how long you thought the search would take, and how long it took.** ⚠ **In this class the estimates averaged about ten minutes and the searches about fifty.** **The gap is the reason the search never gets done** — **and it is also the reason nobody has ever dated a change of their own before this cycle.** **Then Mrs Ajouz\'s eleven letters: she wrote them without an apology and did not notice doing it.**'));
out.push(hw('**Do the search.** ⚠ **Read your own documents in order** — **twenty minutes to two hours, and it does not fail if you have a file** — **and date one stopping by its last instance, with the words quoted.** **Then look for one date that somebody else supplied: a return, a query, an answer, an acceptance.** **Bring both, and bring the time it took.** **15.5 writes to the person who kept the letter**, so bring the name of your keeper, or of the person who holds the file you have just read.'));

// ===================== 15.5 =====================
out.push(pb());
out.push(h2('15.5  The note to the keeper'));
out.push(p('**Function:** writing to the person who kept the letter and telling them what was in it   ·   **Grammar:** a note to somebody who carried something unread for two years   ·   **Pronunciation:** thanks given once, at the end, and not in the first line'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **your keeper, who they are to you, and how many times they mentioned the letter.** ⚠ **Three facts.** **In this room the two keepers are a registry clerk and a woman at a pharmacy, and neither mentioned the letter once in two years** — **and the eight students without envelopes name the person who holds the file they read in 15.4, which is the same relationship in a different shape.**'));
out.push(board('What does the keeper get told?', 'What was in it. Not what it meant.'));
out.push(p('**b**  Which two belong in a note to a keeper? **1** _Thank you so much for keeping it all this time; it meant a great deal to me._  **2** _The third of the four sentences was a prediction that nobody from here gets an answer on that forum; four answers came between March and November._  **3** _You will be pleased to know it was a very useful exercise._  **4** _You wrote the date of handing it over on the back, which nobody asked you to do, and the two dates together are the only part of this that could not have been arranged afterwards._  **5** _I hope it was not too much trouble._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the keeper is owed?   **A** thanks, at length   **B** **the content** — what was in the letter and what has settled it, because a keeper who carried a document for two years has a claim on knowing what it said   **C** nothing: the letter was private'));
out.push(p('**b**  Listen again. **1** What does Mr Attar say Mr Deeb did that nobody asked for?   **2** What does Mrs Oueidat say is wrong with a note that is only thanks?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.9  What the keeper is owed', [
  ['Ms Huda', 'Mr Attar — Mr Deeb kept it for two years and three months. What do you write to him?'],
  ['Mr Attar', '⚠ **I thought thanks, and I was wrong.** **Mrs Oueidat asked me what I was thanking him for and I could not answer it in a way that was about him.**'],
  ['Mrs Oueidat', '⚠ **Because thanks for keeping a letter is thanks for not reading it, which is not a service anybody can be congratulated for.** **What he actually did was two things: he kept it where he could find it, and he wrote the date of handing it over on the back.**'],
  ['Dr Qabbani', 'And the second one nobody asked for.'],
  ['Mr Attar', '⚠ **Nobody asked and he did not mention it.** **He wrote the date in his own hand and gave it to me without comment** — **and the two dates together are the only part of this exercise that could not have been arranged afterwards, and he supplied one of the two.**'],
  ['Mrs Khoury', '⚠ **So the note tells him what was in it, which is the thing the room will find hardest to accept.** **A keeper who has carried a document for two years has a claim on knowing what it said** — **and a note that thanks them and does not tell them has treated a person as a safe.**'],
  ['Mrs Tarabishi', 'All four sentences?'],
  ['Mrs Oueidat', '⚠ **The one that was evidence, and what settled it.** **Not all four, and not a summary of the writer.** _The third sentence was a prediction that nobody from here gets an answer; four answers came between March and November._ **Twenty-three words** — **and Mr Deeb now knows what he was carrying, which is what he is owed.**'],
  ['Mr Tayara', 'Is he not entitled to the private ones?'],
  ['Mrs Khoury', '⚠ **He is entitled to nothing and this is a judgement and not a rule.** **The test is whether a sentence was a claim.** **A claim was always going to be settled by the world and a keeper is part of the world** — **and the sentences about what the writer wanted are nobody\'s business, including, in a sense, the writer\'s.**'],
  ['Mrs Ajouz', 'Where do the thanks go?'],
  ['Mrs Oueidat', '⚠ **Once, at the end, and for the specific thing.** _You wrote the date on the back and nobody asked you to._ **Thanks in the first line is a note about the writer\'s feelings** — **and thanks at the end for a named act is a note about what somebody did.**'],
  ['Mrs Rizk', 'Mine is a clerk who holds a file and does not know I read it.'],
  ['Mrs Khoury', '⚠ **Then the note is better and harder: you tell her what the file showed.** **Eleven letters with no apology, and the date of the last one** — **and she has had that information in a drawer for nine months without knowing it was information.**'],
  ['Mrs Tarabishi', 'And if the keeper has read it?'],
  ['Mrs Khoury', '⚠ **Then the exercise is over and the note says so without blaming anybody.** **A keeper who has read a sealed letter has usually done it by accident, in a clearout** — **and a note that accuses them has lost both the letter and the only person who was ever party to it.**'],
  ['Mr Zahreddine', 'Does anybody reply to these?'],
  ['Mr Attar', '⚠ **Mr Deeb replied in two lines and I did not expect it.** **He said he had wondered what was in it and had decided not to ask** — **which means he had the question for two years and three months and did not put it, and nothing in the exercise required that of him either.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is that he had wondered.** **I had thought of him as a place I had put something.** **He is the only other person who knew the letter existed** — **and for two years he was the only one, because I had forgotten about it for most of them.**'],
]));
out.push(sp());
out.push(box('Language box – the note to the keeper', [
  '**The keeper is owed the content and not the thanks.** ⚠ **A keeper who has carried a document for two years has a claim on knowing what it said** — **and a note that thanks them and does not tell them has treated a person as a safe.**',
  '**Tell them the sentence that was evidence, and what settled it.** ⚠ _The third sentence was a prediction that nobody from here gets an answer; four answers came between March and November._ **Twenty-three words.** **Not all four sentences and not a summary of the writer** — **the claim, and its outcome.**',
  '**Which sentences they get, and it is a judgement and not a rule.** ⚠ **The test is whether a sentence was a claim.** **A claim was always going to be settled by the world and a keeper is part of the world** — **and the sentences about what the writer wanted are nobody\'s business.**',
  '**Thanks once, at the end, for a named act.** ⚠ _You wrote the date on the back and nobody asked you to._ **Thanks in the first line is a note about the writer\'s feelings.** **Thanks at the end for a named act is a note about what somebody did** — **and only one of the two is readable by the person who did it.**',
  '**Where the keeper holds a file rather than an envelope, the note is better and harder.** ⚠ **You tell them what the file showed.** _Eleven letters with no apology, and the date of the last._ **They have had that information in a drawer without knowing it was information** — **and a note that gives it back is the only thanks that has any content in it.**',
  '**And expect a reply you did not expect.** ⚠ **Mr Deeb said he had wondered what was in it and had decided not to ask.** **He had the question for two years and three months and did not put it** — **and nothing in the exercise required that of him either.**',
  '**Pronunciation.** 🔊 **Track 15.10** **Read the note aloud and stop at the thanks.** ⚠ **If it arrives before the content, move it.** **Then say the thanks once, flat, with the named act in it** — **and the room will hear that a flat thanks for a specific thing sounds more grateful than a warm thanks for nothing in particular.**',
  '**Practise:** Write to the keeper. **1** the claim, and what settled it  **2** the act nobody asked for  **3** thanks, once, at the end  **4** a keeper who holds a file  **5** a sentence you are not going to tell them',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the line from the card. B says **whether it belongs in a note to a keeper, and why.** ⚠ **Two rows on each card are thanks with no content.** **B must say what they are thanks for.** Change cards.'));
out.push(table(['Card A – a line from a draft', 'Card B – a line from a draft'], [
  ['_The third sentence was a prediction; four answers came since March._', '_The last apology is dated 4 March and eleven letters have followed it._'],
  ['_⚠ Thank you so much for keeping it all this time._', '_⚠ I hope it was not too much trouble._'],
  ['_You wrote the date of handing it over on the back._', '_You have had the file in a drawer for nine months._'],
  ['_⚠ It meant a great deal to me._', '_⚠ You will be pleased to know it was useful._'],
  ['_One sentence was about what I wanted and I am not going to tell you it._', '_The prediction failed and I can date the failure._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** belongs or not, and what the thanks are for. ⚠ **Rows 2 and 4 on both cards are thanks with no content** — **_all this time_, _too much trouble_, _meant a great deal_, _you will be pleased_** — **and the room should be made to say what act each one names, which is none.** **Rows 5 are the ones to spend time on**: one declares a withheld sentence and one reports a dated failure, and both are more respectful than any of the four thanks.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **the one sentence that tells your keeper what was in it**, or what the file showed. ⚠ **Twenty-five words or fewer, with a date in it.** **Then write the thanks, once, for a named act** — **and if you cannot name an act, write no thanks at all, which is the honest version and nine of ten students will resist it.**'));
out.push(p('**b**  Swap. Your partner reads your note and says **what the keeper actually did.** ⚠ **If they cannot tell, the note has no act in it and the thanks are decoration.** **Then they ask whether you have withheld a sentence, and whether you have said that you have.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mr Attar thought the note to Mr Deeb should be thanks and he was wrong, and Mrs Oueidat asked him what he was thanking him for and he could not answer it in a way that was about Mr Deeb. Mrs Oueidat said thanks for keeping a letter is thanks for not reading it, which is not a service anybody can be congratulated for, and what he actually did was two things: he kept it where he could find it, and he wrote the date of handing it over on the back. Dr Qabbani said and the second one nobody asked for, and nobody asked and he did not mention it: he wrote the date in his own hand and gave it over without comment, and the two dates together are the only part of the exercise that could not have been arranged afterwards. Mrs Khoury said so the note tells him what was in it, because a keeper who has carried a document for two years has a claim on knowing what it said, and a note that thanks them and does not tell them has treated a person as a safe. Mrs Tarabishi asked whether all four sentences, and the one that was evidence and what settled it, not all four and not a summary of the writer. Mr Tayara asked whether he is not entitled to the private ones, and he is entitled to nothing and it is a judgement and not a rule: the test is whether a sentence was a claim. Mrs Ajouz asked where the thanks go, and once, at the end, and for the specific thing. Mrs Rizk said hers is a clerk who holds a file and does not know she read it, and then the note is better and harder, because she tells her what the file showed. Mr Zahreddine asked whether anybody replies, and Mr Deeb replied in two lines and said he had wondered what was in it and had decided not to ask. And Mr Attar said the thing he will take away is that he had wondered: he had thought of Mr Deeb as a place he had put something, and he is the only other person who knew the letter existed. Mrs Khoury said that is the sentence the cycle is for, because a keeper is a party to the exercise and every draft in the room had treated one as a container. Mrs Oueidat said the two notes that went were both answered and both replies contained something the writer had not known. And Mrs Rizk said the thing she will take away is that her clerk has had the information in a drawer for nine months without knowing it was information._'));
out.push(p('**Listener task:** write your partner\'s one content sentence and the act their thanks names.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the note Mr Attar sent Mr Deeb. Answer the questions.'));
out.push(model([
  '**J. ATTAR** · _to Mr Deeb, at the registry_ · _the envelope of 1 December_ · **3 December**',
  '**You kept an envelope of mine for two years and three months and handed it over on the first unopened, and you had written the date of handing it over on the back.** ⚠ **Nobody asked you to do that and you did not mention it.**',
  '**What was in it, since you carried it.** **Four sentences, written on 14 September two years ago.** **One of the four was a claim and the rest were about what I wanted.**',
  '**The claim, and what has settled it.** _Nobody from here gets an answer on that forum and I do not expect that to change._ ⚠ **Four answers have come since March; the earliest is the nineteenth and the thread is public.** **So the prediction failed, and the date of its failing is the nineteenth of March, which is the only useful fact the whole letter produced.**',
  '**The other three I am not going to tell you, and I want to say that rather than leave it out.** **They are about what I wanted at twenty and one of them has not happened.** ⚠ **They were not claims about the world and nothing could have settled them** — **so they are of no use to you, and a note that handed them over would be asking you to be interested in me rather than in what you were holding.**',
  '**What the two dates together do, which I had not understood until I had both.** **The fourteenth of September is mine and the first of December is yours.** ⚠ **Either one alone is a date I could have written at any time.** **The two together, in two hands, are the only part of this that cannot have been arranged afterwards** — **and that is a property of your handwriting and not of my letter.**',
  '**Thank you for writing the date on the back.** **That is the thing I am thanking you for and it is the only one.**',
  '**And one question, which you need not answer.** ⚠ **Did you wonder what was in it?** **I have realised, working through this, that for most of two years you were the only other person who knew the letter existed** — **because I had forgotten about it from about the following spring until the end of November.**',
  '**One thing I should add about the other three sentences, since I have told you there are three and not what they are.** **They are not private in the sense of being embarrassing.** ⚠ **They are private in the sense of being useless to anybody who is not me**: a want recorded at twenty, with no date it could be settled by and no way for the world to disagree with it. **If one of them had been a claim I should have sent it, and the test is not whether I mind you reading it** — **it is whether you could do anything with it, and you could not.**',
  '**And a figure, because you may want it and nobody will give it to you otherwise.** **Of twelve people who sealed a letter at the end of that course, I know of two who have opened one.** ⚠ **Mine is one of the two.** **I do not know what happened to the other ten and neither, I imagine, do their keepers** — **and if any of the ten was left at your registry, it is still in your cabinet and the date has probably passed.**',
]));
out.push(item('1', 'What does he tell Mr Deeb, and what does he withhold?'));
out.push(item('2', 'What do the two dates together do, and whose property is it?'));
out.push(item('3', 'What is he thanking Mr Deeb for, and where does the thanks come?'));
out.push(writers([
  'A note to the keeper: **what they did, including the thing nobody asked for** → **what was in it, in outline** → **the claim and what settled it, with dates** → **what you are withholding, and that you are** → **what their part of it did that yours could not** → **thanks once, for the named act** → **and one question they need not answer.**',
  '⚠ **Say what you are withholding rather than omitting it silently.** _The other three I am not going to tell you._ **A note that gives one sentence of four without saying so has edited itself** — **and the keeper cannot tell a short letter from a short extract.**',
  '**Name what their part did that yours could not.** ⚠ _Either date alone I could have written at any time; the two together, in two hands, cannot have been arranged._ **It is the sentence that makes the note about them** — **a statement about evidence and not a compliment, which is why it reads as one.**',
  '**Thanks once, at the end, for the named act, and say that it is the only one.** ⚠ _That is the thing I am thanking you for and it is the only one._ **A note that thanks somebody for several things has thanked them for nothing** — **and in this class nine of ten first drafts opened with thanks and named no act at all.**',
  '⚠ And **ask one question, giving them permission not to answer.** _Did you wonder what was in it?_ **The keeper has been a party to this for two years with no part in it** — **and the question is the only thing in the note that treats them as somebody who was there.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of the note to your keeper (120 words or more).'));
out.push(p('**______________** · _to _______________ · _______________ · **______________**   **You kept ______________ for ______________ and ______________.** ⚠ **Nobody asked you to ______________.**   **What was in it, since you carried it.** **______________.**   **The claim, and what has settled it.** _______________. ⚠ **______________.** **So ______________, and the date of its ______________ is ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The act nobody asked for, named',
  'The claim and its outcome, with dates',
  'What is withheld, said rather than omitted',
  'Thanks once, at the end, for one named act',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their thanks**, and the room says what act it names.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole note (260 words or more), to the shape in the writer\'s box: what they did, the outline, the claim and its outcome, what you withhold, what their part did, the thanks, and the question.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: an act named, the withholding declared, and the thanks once and at the end.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**One question round the room and one number on the board: how many first drafts opened with thanks?** ⚠ **In this class, nine of ten** — **and not one of the nine named an act.** **Then Mr Attar\'s sentence: he had thought of Mr Deeb as a place he had put something, and Mr Deeb is the only other person who knew the letter existed.** **Do not soften it into gratitude.** **It is a finding about who else was in the exercise.**'));
out.push(hw('**Send the note.** ⚠ **To your keeper, or to the person who holds the file you read in 15.4.** **One content sentence with a date, the withholding declared if there is one, and thanks once at the end for a named act.** **Then write down what came back, if anything.** **In this class two notes went and both were answered** — **and both replies contained something the writer had not known.** **Bring the note and the reply.** **15.6 writes the page that will be evidence to you in five years**, and it is the one document in Book 2 with no reader but you.'));

// ===================== 15.6 =====================
out.push(h2('15.6  The page that will be evidence in five years'));
out.push(p('**Function:** writing the page that will be evidence to you in five years   ·   **Grammar:** 260–300 words · and no instruction to the future reader anywhere in it   ·   **Pronunciation:** reading your own prediction aloud without softening it'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room: **one sentence about yourself or your work that you do not know the answer to.** ⚠ **Not a hope and not a plan.** **A claim whose truth you cannot establish today.** **In most classes four of the ten first answers are plans** — **and a plan is settled by whether you carried it out, which tells you about your diary and not about the world.**'));
out.push(board('What will be checkable in five years?', 'A claim you cannot settle today.'));
out.push(p('**b**  Which two belong on such a page? **1** _I intend to publish two papers in the next five years._  **2** _No referee will ask me about a search again, because the habit is now in the chapter and not in me._  **3** _I hope to be more confident by then._  **4** _The branch will have a printed register, and it will have come from the governorate\'s four and not from a new allocation._  **5** _I shall try to write shorter covering notes._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does the room decide the page must not contain?   **A** anything about the writer\'s feelings   **B** **an instruction to the person who opens it** — because the future reader is the writer, and a writer who instructs themselves has written a resolution and not evidence   **C** any date'));
out.push(p('**b**  Listen again. **1** What does Mrs Oueidat say is wrong with _remember that you were right about this_?   **2** What does Mrs Khoury say about a page made of plans?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.11  No instruction to the reader', [
  ['Ms Huda', 'The one rule for this page. Mrs Oueidat.'],
  ['Mrs Oueidat', '⚠ **Nothing in it may instruct the person who opens it.** **No _remember_, no _do not forget_, no _I hope you will have_.**'],
  ['Mr Shihabi', 'Why not? I shall be the one reading it.'],
  ['Mrs Oueidat', '⚠ **Which is exactly why.** **An instruction to yourself in five years is a resolution, and a resolution tells the person who opens it what the writer wanted** — **and they already know that, because they are the writer.** **What they do not know is what was true.**'],
  ['Mrs Khoury', '⚠ **And a page made of plans has the same fault in a politer form, which the room should be made to see.** **_I intend to publish two papers_ is settled by whether you did** — **which is a fact about your diary and tells the reader nothing they could not get from a calendar.**'],
  ['Dr Qabbani', 'So the page is predictions.'],
  ['Mrs Khoury', '⚠ **Predictions about things you cannot settle today, and the test is one question: could I find out the answer this afternoon?** **If you could, it does not go on the page** — **and about half of what this room wrote first could have been settled in an afternoon.**'],
  ['Mrs Tarabishi', 'Mine is about referees and I have no idea.'],
  ['Mrs Oueidat', '⚠ **Then it is the best kind.** _No referee will ask me about a search again, because the habit is now in the chapter and not in me._ **It names a mechanism and it can be wrong** — **and the mechanism is what makes it interesting, because a prediction with a reason attached fails informatively.**'],
  ['Mr Tayara', 'A reason attached? That sounds like a hedge.'],
  ['Mrs Khoury', '⚠ **It is the opposite and this is the distinction worth the time.** **A hedge makes a prediction unfalsifiable.** **A mechanism makes it falsifiable twice** — **once on the prediction and once on the reason, and if the prediction holds and the reason is wrong you have learnt something nobody could have told you.**'],
  ['Mrs Ajouz', 'Mine is about an office and not about me.'],
  ['Mrs Oueidat', '⚠ **And those are the ones that come out best, which the room should expect by now.** **_The branch will have a printed register and it will have come from the governorate\'s four_** — **two claims, both about other people, both checkable, and one of them about a mechanism.**'],
  ['Mrs Rizk', 'How many sentences?'],
  ['Mrs Khoury', '⚠ **Three hundred words is the band and the shape is not three hundred words of prediction.** **Two or three claims, the mechanism for each, the state of things today so that the reader knows what was true when you wrote** — **and a date, which is yours to set, and a keeper, who must not be a friend.**'],
  ['Mr Zahreddine', 'Why not a friend?'],
  ['Mrs Khoury', '⚠ **Because a friend will give it back early if you ask**, and you will ask. **Mr Deeb kept an envelope for two years and three months and Mrs Hallak has kept one for longer** — **and neither of them would have handed it over in October, when Mrs Khoury wanted it.**'],
  ['Mrs Oueidat', '🔊 ⚠ **And the thing to say about this page at the end of the lesson and not before.** **It is the only document in Book 2 with no reader but you** — **and the whole of the rest of this course has been about writing for somebody who can refuse you, so writing one page for a reader who cannot is harder than it looks.**'],
]));
out.push(sp());
out.push(box('Language box – the page that will be evidence', [
  '**Nothing in it may instruct the person who opens it.** ⚠ **No _remember_, no _do not forget_, no _I hope you will have_.** **An instruction to yourself in five years is a resolution** — **and it tells the reader what the writer wanted, which they already know, because they are the writer.**',
  '**Not plans.** ⚠ **_I intend to publish two papers_ is settled by whether you did**, which is a fact about your diary. **Four of ten first answers in this class were plans** — **and a page of plans is a calendar with feelings in it.**',
  '**The test, in one question.** ⚠ **Could I find out the answer this afternoon?** **If you could, it does not go on the page.** **About half of what this room wrote first could have been settled in an afternoon** — **and that half is not a prediction, it is a thing the writer had not looked up.**',
  '**Attach a mechanism, and it is not a hedge.** ⚠ _No referee will ask me about a search again, because the habit is now in the chapter and not in me._ **A hedge makes a prediction unfalsifiable; a mechanism makes it falsifiable twice** — **and if the prediction holds and the reason is wrong, you have learnt something nobody could have told you.**',
  '**Claims about other people come out best.** ⚠ **An office, a referee, a desk, a committee.** **Two claims, both about other people, both checkable, one about a mechanism** — **and a page entirely about the writer will be settled by the writer, which is the narrowest test available.**',
  '**The shape, and the keeper.** ⚠ **Two or three claims, a mechanism for each, the state of things today, a date you set, and a keeper who is not a friend.** **A friend will give it back early if you ask, and you will ask** — **and the keeper is the only part of the arrangement that protects the date.**',
  '**Pronunciation.** 🔊 **Track 15.12** **Read your claims aloud and stop at every softener.** ⚠ **_Probably_, _I think_, _it seems likely_, _in all probability_.** **Strike each one and read it again.** **The second version can be wrong** — **and being able to be wrong is the entire purpose of the page.**',
  '**Practise:** One claim, one mechanism. **1** about an office  **2** about a reader  **3** about yourself, with a mechanism  **4** a plan — so remove it  **5** one you could settle this afternoon — so remove it',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the sentence from the card. B applies the test — **could I settle this today** — and says whether it belongs. ⚠ **Two rows on each card are plans and two could be settled this afternoon.** Change cards.'));
out.push(table(['Card A – a candidate sentence', 'Card B – a candidate sentence'], [
  ['_No referee will ask me about a search again._', '_The desk will not change a first paragraph of mine again._'],
  ['_⚠ I intend to publish two papers in five years._', '_⚠ I shall try to write shorter covering notes._'],
  ['_The branch will have a register from the governorate\'s four._', '_The forum will still be answering people from here._'],
  ['_⚠ The regulation does not define register._', '_⚠ The governorate holds four printed registers._'],
  ['_This office will have refused the regional director once._', '_The inspectorate will have published something on hand-kept records._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** belongs or not, and why. ⚠ **Rows 2 on both cards are plans** — _I intend_, _I shall try_ — **and both are settled by the writer\'s diary.** **Rows 4 on both cards could be settled this afternoon**: the regulation can be read and the governorate can be telephoned, **and a sentence you have not looked up is not a prediction.** **Rows 5 are the strongest on either card**: both are about other people, both are five-year questions, and neither can be looked up.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Write **two claims and a mechanism for each**, and then apply the test to both: ⚠ **could I settle this this afternoon?** **In this class about half of all first claims failed it** — **and every one that failed was about a document or a figure the writer had simply not asked for.**'));
out.push(p('**b**  Swap. Your partner reads your claims and strikes **every softener**. ⚠ **Then they ask the one question that matters: who is your keeper, and are they a friend?** **If they are a friend, the arrangement has no date in it** — **because a friend will give it back in October, and you will ask in October.**'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Mrs Oueidat said the one rule is that nothing in the page may instruct the person who opens it: no remember, no do not forget, no I hope you will have. Mr Shihabi asked why not, since he will be the one reading it, and Mrs Oueidat said that is exactly why: an instruction to yourself in five years is a resolution, and a resolution tells the person who opens it what the writer wanted, and they already know that because they are the writer, and what they do not know is what was true. Mrs Khoury said a page made of plans has the same fault in a politer form, because I intend to publish two papers is settled by whether you did, which is a fact about your diary. Dr Qabbani said so the page is predictions, and predictions about things you cannot settle today, and the test is one question: could I find out the answer this afternoon? Mrs Tarabishi said hers is about referees and she has no idea, and then it is the best kind, and the mechanism is what makes it interesting because a prediction with a reason attached fails informatively. Mr Tayara said a reason attached sounds like a hedge, and Mrs Khoury said it is the opposite: a hedge makes a prediction unfalsifiable and a mechanism makes it falsifiable twice. Mrs Ajouz said hers is about an office and not about her, and those are the ones that come out best. Mrs Rizk asked how many sentences, and three hundred words is the band and the shape is two or three claims, the mechanism for each, the state of things today, a date, and a keeper. Mr Zahreddine asked why not a friend, and because a friend will give it back early if you ask, and you will ask. And Mrs Oueidat said the thing to say at the end and not before: it is the only document in Book 2 with no reader but you, and the whole of the rest of the course has been about writing for somebody who can refuse you. Mrs Khoury said that is why it is harder and not easier, because a reader who cannot refuse you cannot correct you either, and every protection the course has built is a protection against a reader who will answer back. Mrs Tarabishi said the mechanism is the only protection left, because a claim with a mechanism can be wrong in two places and a claim without one cannot be wrong usefully at all. And Mrs Oueidat said the thing she will take away is the keeper, because the keeper is the only part of the arrangement that protects the date from the person who set it._'));
out.push(p('**Listener task:** write your partner\'s two claims and the softeners you struck.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Mrs Tarabishi sealed. Answer the questions.'));
out.push(model([
  '**R. TARABISHI** · _to be opened on 1 December in five years_ · _two claims, and the state of things_ · **15 December**',
  '**The state of things today, so that whoever opens this knows what was true when it was written.** **The thesis is submitted and not examined; chapter four has nine findings at four degrees; the second-group denominator is in a register held outside the department and the chapter cites the register without saying so.** ⚠ **Three referees have asked me about my search in four submissions and none has asked since June.**',
  '**Claim one.** **No referee will ask me about a search again.** **The mechanism: the search is now described in the chapter at 3.2 and not supplied on request** — **so there is nothing to ask for, and the question was always a request for a document rather than a doubt about the method.**',
  '**Claim two.** **The department will hold the register itself, and it will have been moved because somebody outside the department asked for it and not because anybody inside asked.** ⚠ **The mechanism: four people in this department cite a register they cannot produce, and none of us has written to the graduate school about it** — **and an office that is asked once by an outsider moves faster than one asked four times by its own.**',
  '**What I cannot establish today and have therefore not written.** **Whether I shall still be doing research.** **It is the question I most want answered and it is a question about my own diary** — **and a page that asks it would be settled by what I did, which whoever opens this will already know.**',
  '**The softeners I struck, and I am recording them because they came back twice.** ⚠ **_Probably_ from claim one, and _I think_ from claim two, and _in all likelihood_ from the state of things.** **Each one made a sentence that could not be wrong** — **and a sentence that cannot be wrong is the only kind this page has no use for.**',
  '**The date and the keeper.** **The first of December in five years, which is longer than I wanted and is the right interval for claim two**: an office moves in years and not in months. ⚠ **The keeper is Mr Deeb at the registry**, who has done this once before for somebody in this room and who is not a friend of mine and has never met me.',
  '**And one sentence about the writing of this page, which is the only such sentence in it.** ⚠ **I have written nothing here to the person who opens it.** **No instruction, no encouragement, nothing about what I hope they will have done** — **because the only thing they will not know is what was true in December, and everything else on this page is for them to check and not to be told.**',
  '**What I expect to find wrong when this is opened, written now so that the expectation is on the record too.** ⚠ **Claim two, and not the prediction in it but the mechanism.** **I have said that an office moves faster when an outsider asks** — **and I believe that because of one case in another department, which is a denominator of one, and I have written it as though it were a rule.** **If the register has moved and it moved because somebody inside asked, the claim held and the reason failed, and that is the result I should most like to have.**',
]));
out.push(item('1', 'What is the mechanism attached to claim two?'));
out.push(item('2', 'What has she not written, and why?'));
out.push(item('3', 'Which softeners did she strike, and what did each one do?'));
out.push(writers([
  'A page that will be evidence to you: **the state of things today, in facts** → **each claim, with its mechanism** → **what you cannot establish today and have therefore not written** → **the softeners you struck** → **the date and the keeper, with the reason for the interval** → **and one sentence saying that the page contains no instruction.**',
  '⚠ **The state of things comes first and is made of facts.** _Three referees have asked me about my search in four submissions and none has asked since June._ **The reader in five years will not remember what was true** — **and a claim without the state of things behind it cannot be judged, only agreed with.**',
  '**A mechanism on every claim.** ⚠ _The search is now described in the chapter and not supplied on request, so there is nothing to ask for._ **A prediction with a mechanism fails twice over and informatively** — **and a prediction with no mechanism, when it fails, teaches nothing at all.**',
  '**Record the softeners you struck.** ⚠ _"Probably" from claim one and "I think" from claim two._ **They come back twice in every draft** — **and a page that names them has given the reader in five years the measure of how hard the writer found it to be falsifiable, which is itself a finding.**',
  '⚠ And **say that there is no instruction in it, in one sentence, at the end.** _I have written nothing here to the person who opens it._ **The reader will be the writer** — **and the only thing they will not know is what was true, so everything else is for them to check and not to be told.**',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the first half of your own page (120 words or more).'));
out.push(p('**______________** · _to be opened on _______________ in _______________ years_ · _______________ claims, and the state of things_ · **______________**   **The state of things today, so that whoever opens this knows what was true.** **______________.** ⚠ **______________.**   **Claim one.** **______________.** **The mechanism: ______________** — **______________.**   **Claim two.** **______________.** ⚠ **The mechanism: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The state of things, in facts and not impressions',
  'A mechanism on every claim',
  'No plan anywhere, and nothing settleable today',
  'No instruction to the reader',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read **only their claims**, and the room applies the test: could this be settled this afternoon?'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the whole page (260 to 300 words — and this is a band and not a minimum), to the shape in the writer\'s box: the state of things, the claims with mechanisms, what you have not written, the struck softeners, the date and the keeper, and the one sentence about the page.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p(slip + ' Criteria for this cycle: a mechanism on every claim, no instruction to the reader, and the keeper named and not a friend.'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Every student reads their claims aloud and the room strikes every softener it hears.** ⚠ **In this class the softeners averaged three a page and came back in the second draft in six of ten cases.** **Then one question and one number: how many keepers are friends?** **Any number above nought is a problem and should be fixed before the page is sealed** — **a friend will give it back in October and you will ask in October.** **Then Mrs Oueidat\'s sentence, at the end and not before.**'));
out.push(hw('**Write the page, 260 to 300 words, and seal it.** ⚠ **Set the date yourself and give it to somebody who is not a friend.** **Then do the two checks that make it evidence rather than a letter: read it aloud and strike every softener, and read it again for any sentence that instructs the person who opens it.** **In this class the second check found something in four of ten pages.** **Bring the date, the keeper\'s name, and the number of softeners you struck.** **15.7 mediates between the person who sealed it, the keeper and the person who opened it**, and carries **Reading Part 7**, **Writing Part 1** and **Listening Part 3**.'));

// ===================== 15.7 =====================
out.push(h2('15.7  Review & Mediate: the sealer, the keeper, and the opener'));
out.push(p('**Function:** mediating between the person who sealed it, the keeper, and the person who opened it   ·   **Recycling:** Unit 15   ·   **Exam practice:** C1 Advanced Reading and Use of English Part 7 · Writing Part 1 (the essay) · Listening Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 15 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I no longer believe it, although four answers came since March.  **2** My last apology is in a letter in 4 March.  **3** The date in the envelope was the first of December.  **4** He handed it over not opened, with the date written on the back.  **5** It is a document which I have read it.  **6** Had I were sealing it today, I should write two letters.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the three accounts and the question.'));
out.push(box(null, [
  '**ONE ENVELOPE, THREE ACCOUNTS** _(the letter of 14 September two years ago, opened on 1 December)_',
  '**The person who sealed it, in his own fourth sentence.** _"If this is still true in two years I shall stop asking."_',
  '**The keeper, Mr Deeb, in his reply of 5 December.** _"I wondered what was in it and decided not to ask. I wrote the date on the back because the registry writes the date on everything it hands over."_',
  '**The person who opened it, in his note of 1 December.** _"Nobody asked him to write the date on the back."_',
  '**Mr Attar.** _"I thanked him for a thing that is his office\'s routine, and he told me so, politely, and I had made it the centre of the note."_',
  '⚠ **All three accounts are true and one of them rests on a mistake about somebody else.**',
  '**And the thing none of the three has noticed.** **The fourth sentence set a condition** — _if this is still true in two years I shall stop asking_ — **and the condition did not arise, because the prediction failed.** **So the instruction in the letter was never triggered and nobody has mentioned it**, and it is the only sentence of the four that was written to be acted on.',
  '**The question for the cycle.** _What do you say, and to whom, and what must not be said?_',
], C.grey, C.navy));
out.push(p('**b**  **Books closed.** Listen. The room decides one thing must not be said. What, and why?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 15.13  A routine, mistaken for a kindness', [
  ['Ms Huda', 'Who gets the letter?'],
  ['Mrs Khoury', '⚠ **Mr Deeb, and it is two lines.** **He has already corrected the record himself, politely, and the only thing owed to him is that the correction be accepted in writing.**'],
  ['Mr Attar', 'And what must not be said is that it was still a kindness.'],
  ['Mrs Khoury', '⚠ **That is exactly it, and the room should see why it is tempting.** **It was not a kindness, it was his office\'s routine** — **and a reply that insists on the kindness has told a man that his account of his own work is wrong because the writer prefers a different version.**'],
  ['Mrs Oueidat', 'The writer made it the centre of the note.'],
  ['Mr Attar', '⚠ **The centre, and a whole paragraph about two hands and two dates.** **The paragraph is still true** — **the two dates in two hands cannot have been arranged** — **and the reason I gave for it was wrong, because I said nobody asked him to do it and the registry asks him to do it to everything.**'],
  ['Dr Qabbani', 'So the finding stands and the reason falls.'],
  ['Mrs Khoury', '⚠ **Which is 15.6 arriving one cycle early and from the opposite direction.** **A prediction with a mechanism fails twice over** — **and here a finding with a mechanism has had its mechanism fail and the finding has held, which is the other half of the same lesson and nobody expected to meet it.**'],
  ['Mrs Tarabishi', 'What goes in the two lines?'],
  ['Mrs Oueidat', '⚠ **The correction accepted, and the finding restated without the wrong reason.** _You are right that it is the registry\'s practice; the two dates in two hands are still the only part of this that cannot have been arranged, and that is now a fact about your office and not about you._ **Thirty-four words.**'],
  ['Mr Tayara', 'That is better for him than the first version.'],
  ['Mrs Khoury', '⚠ **It is better for him and it is also truer, which is usually the way round in this book.** **A routine that produces unforgeable evidence for everybody who uses the registry is a larger thing than one clerk being thoughtful** — **and Mr Deeb is the person who could have told him that and did.**'],
  ['Mrs Ajouz', 'And the fourth sentence? Nobody has mentioned it.'],
  ['Mrs Oueidat', '⚠ **Which is the finding of the cycle and it took three accounts and a week to surface.** _If this is still true in two years I shall stop asking._ **The condition did not arise, so the instruction was never triggered** — **and it is the only sentence of the four that was written to be acted on, and it has been read by two people and acted on by nobody.**'],
  ['Mr Shihabi', 'Does that matter? It did not need to be acted on.'],
  ['Mrs Khoury', '⚠ **It matters because it is the sentence the writer got right, and he has spent a week on the three he got wrong.** **A conditional instruction that lapses because its condition failed is a correctly written sentence** — **and 15.6 forbids instructions to the future reader, which this room should now be able to distinguish from a condition about the world.**'],
  ['Mr Zahreddine', 'Is there anybody at fault in this at all?'],
  ['Mrs Oueidat', '⚠ **Nobody, and this is the second time in Book 2.** **The sealer wrote four sentences, one of which was evidence and one of which was a correctly conditional instruction.** **The keeper did his job and then told the truth about it.** **The opener was wrong about a reason and right about a finding** — **and the only thing that has gone wrong is that a man was thanked for the wrong thing, which he fixed himself in two lines.**'],
  ['Mr Attar', '🔊 ⚠ **And the thing I shall take away is that he corrected me.** **A registry clerk read a note from a stranger, found one sentence in it that was wrong about his own office, and wrote two lines** — **and that is the behaviour this whole course has been describing, from somebody who has not had a day of it.**'],
]));
out.push(sp());
out.push(box('Language box – mediating among three accounts', [
  '**The three moves, unchanged since 1.7, and here there are three parties and not two.** ⚠ **1 Say what is correct, and mean it.** **2 Show the writer their own sentence.** **3 Ask one question, and stop.**',
  '**What is new: one account rests on a mistake about somebody else\'s work.** ⚠ **Not about a fact and not about a document** — **about what another person\'s job involves.** **And the person who made the mistake is the one who can least check it**, which is why the correction had to come from the keeper and not from the room.',
  '**Accept a correction in writing when it is given in writing.** ⚠ _You are right that it is the registry\'s practice._ **Eight words.** **A reply that argues the kindness has told a man his account of his own work is wrong because the writer prefers a different version** — **and that is the one thing that must not be said.**',
  '**The finding stands and the mechanism falls, which is 15.6 from the other direction.** ⚠ **The two dates in two hands still cannot have been arranged.** **The reason given for it was wrong.** **A finding whose mechanism fails and which still holds is better evidence than before** — **because it has now survived a correction.**',
  '**And the sentence nobody mentioned, which is the finding of the cycle.** ⚠ _If this is still true in two years I shall stop asking._ **A conditional instruction whose condition did not arise is a correctly written sentence that lapsed** — **and the room has to be able to tell it from the instructions 15.6 forbids, which are addressed to the reader and not to the world.**',
  '**Nobody is at fault, for the second time in Book 2.** ⚠ **A man was thanked for the wrong thing and fixed it himself in two lines.** **That is the whole of what went wrong** — **and a mediation that finds a culprit here has invented one.**',
  '**Pronunciation.** 🔊 **Track 15.14** **Say _you are right that it is the registry\'s practice_ with no stress on _right_.** ⚠ **Stress on _right_ makes the acceptance a concession and the man a winner.** **Flat, it is a statement about a practice** — **and the sentence after it has to be the finding, immediately, or the acceptance reads as the whole of the reply.**',
], C.lteal, C.teal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the three accounts from the card. B names **which account rests on a mistake about somebody else\'s work**, gives the two-line reply, and names **the sentence nobody has mentioned.** ⚠ **On one of the two cards no account is mistaken and the three simply differ.** **B must find that.** Change roles with the other pair.'));
out.push(table(['Pair A – the envelope and the registry', 'Pair B – the file and the officer'], [
  ['_The sealer: "If this is still true in two years I shall stop asking."_', '_The writer: "The officer has never explained a return."_'],
  ['_The keeper: "The registry writes the date on everything it hands over."_', '_The officer: "A return carries the reason on the slip; three words."_'],
  ['_⚠ The opener: "Nobody asked him to write the date on the back."_', '_⚠ The clerk: "The slip is printed and the officer writes on it."_'],
  ['_⚠ Mistaken: the opener, about the registry\'s practice._', '_⚠ Mistaken: nobody. Three true accounts of one slip._'],
  ['_⚠ Unmentioned: the fourth sentence, a condition that lapsed._', '_⚠ Unmentioned: nothing. The accounts are complete._'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('**Listener task:** the mistaken account, the two-line reply, and the unmentioned sentence. ⚠ **On Pair B no account is mistaken**: the writer never read the slip, the officer writes three words on it, the clerk says the slip is printed, and all three are true of the same object. **The room will look for a culprit** — **and the finding is that a writer who has not read a document is not mistaken about it, only uninformed, and the repair is to read it.**'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take **your own note to your keeper from 15.5** and write **what the keeper would say about it**, in two sentences, as they would write it. ⚠ **Then find the sentence in your note that rests on a mistake about their work.** **In this class six of ten found one** — **and in four of the six it was a sentence of thanks.**'));
out.push(p('**b**  Swap. Your partner reads both and names **the sentence in your note that nobody has mentioned.** ⚠ **In this class that sentence has been, eight times in ten, the one the writer worked hardest on.**'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class:  _Mrs Khoury said Mr Deeb gets the letter and it is two lines, because he has already corrected the record himself, politely, and the only thing owed to him is that the correction be accepted in writing. Mr Attar said what must not be said is that it was still a kindness, and that is exactly it: it was not a kindness, it was his office\'s routine, and a reply that insists on the kindness has told a man that his account of his own work is wrong because the writer prefers a different version. Mrs Oueidat said the writer made it the centre of the note, and Mr Attar said the centre, and a whole paragraph about two hands and two dates, and the paragraph is still true and the reason he gave for it was wrong. Dr Qabbani said so the finding stands and the reason falls, and Mrs Khoury said that is 15.6 arriving one cycle early and from the opposite direction: a prediction with a mechanism fails twice over, and here a finding with a mechanism has had its mechanism fail and the finding has held. Mrs Tarabishi asked what goes in the two lines, and the correction accepted and the finding restated without the wrong reason. Mr Tayara said that is better for him than the first version, and it is better for him and also truer, because a routine that produces unforgeable evidence for everybody who uses the registry is a larger thing than one clerk being thoughtful. Mrs Ajouz asked about the fourth sentence, which nobody has mentioned, and that is the finding of the cycle and it took three accounts and a week to surface. Mr Shihabi asked whether it matters, since it did not need to be acted on, and it matters because it is the sentence the writer got right and he has spent a week on the three he got wrong. Mr Zahreddine asked whether anybody is at fault at all, and nobody, and this is the second time in Book 2. And Mr Attar said the thing he will take away is that Mr Deeb corrected him: a registry clerk read a note from a stranger, found one sentence that was wrong about his own office, and wrote two lines, and that is the behaviour this whole course has been describing, from somebody who has not had a day of it. Mrs Khoury said the room should sit with that rather than be charmed by it, because the moves in this course are not a course’s property and a registry has been making unforgeable records since before anybody here was born. And Mrs Oueidat said the thing she will take away is the fourth sentence, because it was correctly written, it lapsed as it was built to, and three people read the letter and none of them mentioned it._'));
out.push(p('**Listener task:** write the two-line reply and the sentence nobody mentioned.'));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read – exam practice (C1 Advanced Reading and Use of English Part 7)', 7));
out.push(p('You are going to read an article about documents people write to themselves. **Five** paragraphs have been removed. Choose from the paragraphs **A–F** the one which fits each gap **(1–5)**. There is one extra paragraph which you do not need to use.'));
out.push(box(null, [
  '**THE LETTER THAT SETTLES TWO THINGS**',
  'The practice of writing a letter to oneself and sealing it for a term of years is old, sentimental and almost entirely useless as it is normally carried out. The reason is not that people write badly to themselves. It is that they write the wrong kind of sentence.',
  '**(1)** ______',
  'What survives the interval is a sentence that can be shown to be wrong. A prediction about other people is the best of these, because the writer cannot influence the outcome and will not remember having been uncertain. A prediction about oneself is second best and needs a document to settle it. Everything else — the hopes, the resolutions, the descriptions of a mood — is unfalsifiable and therefore cannot inform anybody, including the person who wrote it.',
  '**(2)** ______',
  'The second common failure is the instruction. Writers address the person who will open the letter and tell them to remember something, or not to forget, or to be proud. This is understandable and it is worthless, because the only thing the future reader does not already know is what was true at the time of writing. An instruction tells them what the writer wanted, which they know, and nothing about the world, which they do not.',
  '**(3)** ______',
  'There is one practice that transforms the exercise and almost nobody follows it. Before the envelope is opened, the writer writes down what they think is in it, unhedged, and seals that with it. The opening then settles two documents rather than one.',
  '**(4)** ______',
  'The arrangements around the letter matter as much as its contents, and the most important of them is the choice of keeper. A friend will return the envelope early if asked, and the writer will ask, usually at a bad moment and for the worst reason: wanting to know whether they predicted it. The question is therefore what kind of keeper does not do this, and the answer has nothing to do with character.',
  '**(5)** ______',
  '**A**  The guess is years newer than the letter and tells the writer something the letter cannot: whether they have forgotten what they wanted. One man in a class of ten opened a four-sentence letter and found he had been wrong about three of the four, having expected it to be about his work and finding it was about being read by strangers.',
  '**B**  The remedy is institutional rather than personal. An office that hands things over and writes the date on everything it hands over produces, as a by-product of its routine, a document in two hands that nobody could have arranged afterwards — and that is worth more than any amount of care from an individual.',
  '**C**  Almost everything people put in such a letter is a hope, a plan or a description of how they felt that week. None of the three can be checked. A hope is not settled by anything; a plan is settled only by whether the writer carried it out, which is a fact about their diary; and a mood two years old cannot be recovered even by the person who was in it.',
  '**D**  Opening it early is the commonest fault of all, and it is usually done in a month when the writer is unhappy. The letter is then read as a comment on that month rather than as a prediction made at a particular time, which is the one use it has.',
  '**E**  The distinction worth drawing is between an instruction to a reader and a condition about the world. _If this is still true in two years I shall stop asking_ instructs nobody: it states a condition, and when the condition fails the sentence lapses correctly, which is what a well-written conditional does.',
  '**F**  A prediction with a reason attached is better still. It can fail in two places, and a prediction that holds while its stated mechanism fails has taught the writer something that no observer could have told them.',
], C.grey, C.navy));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the two-line reply to Mr Deeb (120 words or more, including the working).'));
out.push(p('**The correction, accepted.** **You are right that ______________.**   **The finding, restated without the wrong reason.** ⚠ **______________ are still ______________, and that is now a fact about ______________ and not about ______________.**   **And the working, which does not go in the reply.** **The sentence nobody mentioned: ______________.** **Why it matters: ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The correction accepted in eight words or fewer',
  'The finding restated, with the wrong reason gone',
  'Nothing arguing that it was a kindness',
  'The unmentioned sentence identified in the working',
]));
out.push(stage('7', 'Write freely – exam practice (C1 Advanced Writing Part 1: the essay)', 10));
out.push(box(null, [
  '⚠ **Name the two in the first paragraph with the ground for choosing them, and do not mention the third again.**',
  'Your class has read an article about documents people write to themselves. **Write an essay discussing two of the points raised.** You should explain **which two you have chosen and why**, and give **reasons** for your view. Write **220–260 words**.',
  '_"Three things are said about a letter sealed for a term of years. **First**, that the only sentence worth sealing is one that can be shown to be wrong. **Second**, that the writer should record what they think is in it before opening it. **Third**, that the keeper matters more than the contents."_',
  '**Points to discuss: 1** the falsifiable sentence   **2** the guess sealed with it   **3** the keeper',
  '⚠ **One of the three is harder to defend than it looks.** **Say so if you take it.**',
], C.lorange, C.orange));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 15 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I no longer believe it, ___ four answers came since March.   a) so   b) although   c) because',
  '2  My last apology is in a letter ___ 4 March.   a) in   b) of   c) since',
  '3  The date ___ the envelope was the first of December.   a) at   b) in   c) on',
  '4  He handed it over ___ , with the date written on the back.   a) not opened   b) unopened   c) unopening',
  '5  A prediction opened early is a document ___ .   a) I have read it   b) which I have read it   c) I have read',
  '6  ___ I were sealing it today, I should write two letters.   a) If   b) Had   c) Were',
  '7  Nothing in it may instruct the person ___ opens it.   a) which   b) who   c) whom',
  '8  He had wondered what was in it and had decided ___ .   a) not to ask   b) to not ask   c) not asking',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (C1 Advanced Listening Part 3 style – a long interview).** 🔊 **Track 15.15** You will hear an interview with a woman who keeps documents for other people. For questions **1–6**, choose the answer (**A**, **B**, **C** or **D**) which fits best.'));
[
  '**1**  What does she say about the dates written on the back of documents?   **A** she began the practice herself   **B** it is a rule of the registry   **C** she does it only for sealed envelopes   **D** the owner usually asks for it',
  '**2**  Why does she say people are wrong to thank her for it?   **A** she finds thanks awkward   **B** it takes no time   **C** she is not allowed to accept thanks   **D** she would do it whoever brought the document',
  '**3**  What does she say about people who ask for a document back early?   **A** she refuses them   **B** she has never been asked   **C** they almost always ask in a bad month   **D** the rules do not allow it',
  '**4**  What does she say she has learnt from twenty years of this?   **A** that most people forget what they left   **B** that the arrangement protects the writer from themselves   **C** that the documents are rarely important   **D** that friends are better keepers than offices',
  '**5**  What does she say about the one envelope that was never collected?   **A** it is still in the registry   **B** she destroyed it after ten years   **C** she wrote to the owner   **D** the owner collected it late',
  '**6**  What is her view of the whole practice?   **A** it is sentimental and harmless   **B** it works only where the keeper is an office   **C** it is useful for a reason the writers do not intend   **D** it should be more widely known',
].forEach(t => out.push(p(t, { indent: 200, after: 60 })));
out.push(dlg('Track 15.15  Audio script (read after the check)', [
  ['Interviewer', 'You have kept sealed documents for people for twenty years. How did that start?'],
  ['Woman', 'It did not start. It is what a registry does. Anything handed in is handed back, and the date of handing back goes on it. That is a rule, written in the office, and it applies to a sealed envelope exactly as it applies to a licence or a receipt.'],
  ['Interviewer', 'People must be grateful.'],
  ['Woman', 'They thank me and they are thanking me for the wrong thing, and I usually tell them so. A young man wrote to me in December about it, a long note, and he had made the date on the back the centre of it. I wrote two lines back. I would write the date for anybody who brought me anything, and that is the point of it: it is not my care, it is the office\'s practice, and the practice is worth more than my care would be because it does not depend on me.'],
  ['Interviewer', 'Does anyone ask for a document back before the date?'],
  ['Woman', 'Two or three a year, and I have noticed something about when. It is never a good month. They have had a disappointment, or a success they did not expect, and they want to know whether they predicted it. That is the worst reason there is, because a letter read like that is a comment on the month and not a prediction from two years before.'],
  ['Interviewer', 'And you refuse?'],
  ['Woman', 'I have no power to refuse anything. I say what the date is and I say why they set it, and about half of them go away. The other half take it, and I write the date on the back, and I have never heard what was in any of them.'],
  ['Interviewer', 'What have twenty years taught you?'],
  ['Woman', 'That the arrangement protects people from themselves and that none of them knows that is what it is for. They think they are arranging to be reminded of something. What they have actually arranged is to be prevented from reading it in October. A friend could not do that. A friend would hand it over, kindly, and the letter would be worth nothing.'],
  ['Interviewer', 'Has anything ever not been collected?'],
  ['Woman', 'One envelope, from 2011. The date was 2016 and nobody came. It is in the cabinet. I am not permitted to open it and not permitted to destroy it, and I have no address for the man who left it. I think about it more than he does.'],
  ['Interviewer', 'So is the whole thing worth doing?'],
  ['Woman', 'It is worth doing and not for the reason people do it. They do it to send themselves a message. What it actually produces is a document with two dates on it in two hands, which nobody could have arranged afterwards. That is evidence, and they did not mean to make any.'],
]));
out.push(p('**C  Writing.** Write the page that will be evidence to you in five years (220–260 words): the state of things today, two claims with their mechanisms, the date and the keeper.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 15)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ read my own old prose as evidence and not as an embarrassment',
  '☐ quote an old sentence exactly and give the finding that settles it',
  '☐ write the three-part sentence: what I wrote, what I no longer believe, and a fact',
  '☐ say _I still believe it_ where that is the true answer',
  '☐ write three unhedged guesses about a document I may not open',
  '☐ date a stopping by its last instance, with a denominator',
  '☐ name a date that somebody else supplied, as theirs',
  '☐ write to a keeper: the content, and thanks once for a named act',
  '☐ write a page of falsifiable claims with no instruction to its reader',
], C.lblue, C.navy));
out.push(sp());
out.push(box('Vocabulary of this unit', [
  '**This unit\'s phrasal verbs** _(declared, and not repeated in another unit)_: _cast back · hark back to · date from · cling to · lay aside · dig out · come to light · come across · bring back · live with · grow past · put behind_.',
  '**This unit\'s word-formation set** _(Reading Part 7 in 15.7 draws on this unit\'s lexis)_: _seal → **sealed** · archive → **archival** · custody → **custodian** · elapse → **elapsed** · retrospect → **retrospective** · nostalgia → **nostalgic** · prophesy → **prophetic** · endure → **endurance** · lapse → **lapsed**._',
  '**Back at C1** _(met at A2 or B1 — and taught here for a sense it did not then have)_: _give back_ **→ _the registry gives back everything it is handed_**, which is returning under a rule, where at A2 it was giving back a book · _look up_ **→ _I looked up the last apology in the file_**, which is searching a record, where at A2 it was looking up at the sky · _think of_ **→ _I had thought of him as a place I had put something_**, which is regarding somebody as, where at A2 it was thinking of an answer.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English C1 · Book 2 · Syria Edition · Unit 15 · The Letter Whose Date Has Come');
