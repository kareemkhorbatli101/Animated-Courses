// Proactive English B1 · Syria Edition · Book 1 · Unit 12 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 12  Opinions and Agreement'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**12.1**  give an opinion and support it',
  '**12.2**  agree and disagree politely',
  '**12.3**  concede a point',
  '**12.4**  ask for somebody\'s view and build on it',
  '**12.5**  reach a decision together',
  '**12.6**  write a balanced paragraph',
  '**12.7**  Review & Mediate: explain both sides and say where you stand',
], C.lblue, C.navy));
out.push(sp());
out.push(box('New in this unit', [
  '**The word that turns a preference into an argument.** _I don\'t think it will last_ is a preference. _I don\'t think it will last, because the only person checking it is the person it is about_ is an argument. One word, and everything after it.',
  '**Conceding is not losing.** _Admittedly · mind you · although · I\'ll give you that._ A speaker who concedes a point is believed about the rest; a speaker who concedes nothing is believed about nothing. **12.3** is the cycle most students find hardest and it is the one that changes how they are heard.',
  '**The last part of the examination.** **12.5** teaches B1 Preliminary **Speaking Part 3** — two candidates, one page of pictures, two minutes to decide something together. After 12.5 you have met every part of the examination.',
  '**And the envelopes are opened.** Four things were written in this book and put away: the introductions pinned up in **1.1**, the vote in **1.2**, the sealed notes from **1.4**, and the two homework pages from **3.3** and **3.6**. They are opened in **12.6**, and the question is not whether you were right.',
], C.lyellow, C.orange));

// ======================= 12.1 =======================
out.push(pb());
out.push(h2('12.1  I\'d say, and this is why'));
out.push(p('**Function:** giving an opinion and supporting it   ·   **Grammar:** _I think · I\'d say · in my view_ + _because_   ·   **Pronunciation:** the stress falls after _because_'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher reads out six opinions collected from this class over the last eleven units. For each one the class asks one question: **what was the reason?** Your teacher has the answers written down. Four of the six had no reason attached at the time.'));
out.push(board('I\'d say it will last, because somebody else is now checking it.', 'opinion + because + the reason'));
out.push(p('**b**  Opinion or argument? **1** _I think the trial will work._  **2** _I think the trial will work, because somebody is counting something for the first time._  **3** _Writing things down is better._  **4** _Writing things down is better, because a number can be argued with and a feeling cannot._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Ms Huda say the class has been doing for eleven units?   **A** giving opinions with no reason attached   **B** agreeing too easily   **C** refusing to give opinions at all'));
out.push(p('**b**  Listen again. **1** What is the difference Omar draws between a preference and an argument?   **2** What reason does Jad give, and why does Ms Huda say it is a good one?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.1  Because', [
  ['Ms Huda', 'Here is a question and I want an answer from everybody. Will the things you started in April still be happening in December? Omar.'],
  ['Omar', 'No.'],
  ['Ms Huda', 'That is a vote, not an answer. There are eleven units behind us and I have been writing down what this class says. Forty-one opinions, and twenty-nine of them had no reason attached to them at all.'],
  ['Omar', 'All right. No, I do not think they will, because every one of them is something a person decided on their own and nobody else is checking.'],
  ['Ms Huda', 'That is an argument. What was the first one?'],
  ['Omar', 'A preference. The difference is that you can disagree with an argument and you cannot disagree with a preference, you can only have a different one.'],
  ['Jad', 'I would say some of them will last and some will not, and the ones that will last are the ones that somebody else has started using.'],
  ['Ms Huda', 'Give me the example.'],
  ['Jad', 'Mazen\'s fault book. He started it for himself in September and in April the manager asked him for a copy of it. It is not his any more, which is why it will still exist in December, and my own counting is still mine and nobody has ever asked me for it.'],
  ['Ms Huda', 'That is the best answer this class has given in eleven units, and I want you to notice why. It is not because he is right. It is because the reason is **about something that happened** — a manager asked for a copy — and not about how he feels.'],
  ['Tareq', 'So an opinion with a date in it.'],
  ['Ms Huda', 'An opinion with a date in it, and from today nobody in this room gives me one without the second half.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Giving an opinion**',
  table(['you say', 'how strong'], [
    ['_I think… · I don\'t think…_', 'the ordinary one; use it most'],
    ['_I\'d say… · I would say…_', 'slightly careful: an opinion offered, not announced'],
    ['_In my view… · It seems to me…_', 'more formal; good in writing and in a meeting'],
    ['_From what I have seen…_', 'tells the listener what your opinion is **made of**'],
    ['_I\'m fairly sure… · I\'m convinced…_', 'strong — keep it for when you have the evidence'],
  ], [2.4, 2.2]),
  '**The rule for this unit: an opinion is half a sentence.** The other half begins _because_, _since_ or _given that_, and without it you have given a preference. _I don\'t think it will last_ → _…because nobody else is checking it._',
  '**The best reasons are things that happened.** _A manager asked him for a copy._ _Two of the four buses were damaged._ A reason that is about an event can be checked; a reason that is about a feeling can only be shared.',
  '⚠ ~~I think that is depend on the situation~~ → _I think it **depends** on the situation_ — and then say what it depends on, or the sentence says nothing.',
  '⚠ **Do not open with _In my opinion_ in every sentence.** Once in a paragraph is plenty; English marks opinion with _I think_ and then stops marking it, because the reader already knows whose page it is.',
  '⚠ ~~I am agree~~ · ~~I am think~~ → _I agree_ · _I think_. Both are plain present-simple verbs.',
  '**Useful phrases:** that is a vote, not an answer · an opinion with a date in it · you can disagree with an argument and you cannot disagree with a preference · from what I have seen.',
  '**Practise:** Add a reason that is about something that happened.  1 _I think the fault book will still exist in December._  2 _I don\'t think the forms will be changed._  3 _I\'d say she was right to ask._  4 _In my view the definitions page should be read first._  5 _I don\'t think I will telephone anybody._',
  '**Pronunciation.** 🔊 **Track 12.2** In an opinion with a reason, the weight of the sentence falls **after** _because_, not on the opinion: _I don\'t think it will last, because nobody else is CHECKing it._ Students stress the opinion and swallow the reason, which makes a good argument sound like a complaint. Listen to six and mark the stressed word.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the statement from the card. B gives an opinion about it **with** a reason that is about something that happened. A then asks the only question: _is that a reason or a feeling?_ Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I\'d say __________, because __________.'],
  ['A', 'Is that a reason or a feeling?'],
  ['B', 'A reason — __________ happened in __________.'],
  ['A', 'And what would change your mind?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the statements', 'Card B – the statements'], [
  ['Writing things down changes what happens.', 'People do what they are asked to do in writing.'],
  ['Most records are kept by the person they are about.', 'A number is worth more than a description.'],
  ['Nobody reads the page before the conditions.', 'Nine out of ten complaints are about the same thing.'],
  ['Asking for one thing works better than asking for three.', 'The people who ask the most questions get the most done.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each reason and mark it _event_ or _feeling_. In a first run about half are feelings dressed as reasons — _because people are like that_, _because it is normal here_ — and the test is whether you could go and check it.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Give your opinion on the question Ms Huda asked: **will the thing you started in this book still be happening in December?** Opinion, then _because_, then an event with a date in it.'));
out.push(p('**b**  Swap. Then each of you say what would have to happen for the other one to be wrong.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda asked whether the things we started in April will still be happening in December, and Omar said no, and she told him that was a vote and not an answer — she has been writing down what this class says for eleven units, and of forty-one opinions, twenty-nine had no reason attached. So Omar said it again with the reason: no, because every one of them is something a person decided on their own and nobody else is checking. And he said the difference is that you can disagree with an argument and you cannot disagree with a preference, you can only have a different one. Jad said some will last and some will not, and the ones that last are the ones somebody else has started using: Mazen started the fault book for himself in September and in April the manager asked him for a copy, so it is not his any more, which is why it will still exist in December — and Jad\'s own counting is still his and nobody has ever asked him for it. Ms Huda said that was the best answer this class has given in eleven units, and not because he is right: because the reason is about something that happened, a manager asking for a copy, and not about how anybody feels. Tareq said so an opinion with a date in it, and she said yes, and that from now on nobody gives her one without the second half._'));
out.push(p('**Listener task:** write one opinion from this room with a date in its reason.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read Mazen\'s answer to a question he was asked at work. Answer the questions.'));
out.push(model([
  '**WILL THE FAULT BOOK STILL BE KEPT NEXT YEAR?** · asked by the manager · answered in writing · M. Hariri',
  'You asked me whether the book is worth keeping and I would rather answer it on paper than at the counter.',
  '**My view.** It will still be kept next year, and I am fairly sure of it, but not for the reason you might expect.',
  '**The reason.** It is not because it found the bad batch, although it did. It is because on 2 April you asked me for a copy of it. From that day it stopped being a notebook belonging to one repairer and became a thing somebody else expects to see, and the three weeks I did not write in it were the three weeks before that.',
  '**What that means for the question you actually asked.** If you want the other two counters to keep one, asking them to is not enough: somebody has to ask them for a copy of it in April. I kept mine for seven months with nobody looking at it and I nearly stopped twice.',
  '**And what I am not claiming.** I am not claiming the book is why the batch was found. Fifteen handsets of one model would have been noticed by somebody eventually, and I cannot prove that it would not have been noticed sooner by a repairer with no book at all.',
]));
out.push(item('1', 'What reason does he give, and what reason does he reject?'));
out.push(item('2', 'What does he say the manager should do about the other two counters?'));
out.push(item('3', 'What does he refuse to claim?'));
out.push(writers([
  'An opinion in writing: **your view, stated in one line** → **the reason, which is an event with a date** → **what that means for the question you were actually asked** → **and what you are _not_ claiming**.',
  'Put the **date** in the reason. _On 2 April you asked me for a copy_ is worth more than three sentences about motivation, and the reader can check it.',
  'Answer the question **behind** the question. He was asked whether a book is worth keeping; what the manager wants to know is how to get three of them kept.',
  '⚠ End with the claim you are not making. _I am not claiming the book is why the batch was found._ An opinion with a limit on it is read as careful; an opinion with no limit is read as sales.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your answer to a question you have been asked, or should have been asked, at work or at home (50 words or more).'));
out.push(p('**______________?** · asked by ______________ · answered in writing   You asked me whether ______________ and I would rather answer it on paper.   **My view.** ______________, and I am ______________ of it, but not for the reason you might expect.   **The reason.** It is not because ______________, although ______________. It is because on ______________ you ______________. From that day ______________.   **What that means for the question you actually asked.** If you want ______________, ______________ is not enough: somebody has to ______________.   **And what I am not claiming.** I am not claiming ______________. ______________ and I cannot prove ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'An opinion in one line, with _I think_, _I\'d say_ or _in my view_',
  'A reason that is an event, with a date in it',
  'The question behind the question, answered',
  'A last paragraph saying what you are not claiming',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their reason only — the sentence after _because_.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full answer (100 words or more) to the hardest question anybody has asked you this year about something you do. Your view, the reason with a date in it, what it means for them, and what you are not claiming.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who asked the question**. ★ _The reason I could go and check._  ✓ _One reason that is a feeling._  ? _What are you not claiming?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many of the reasons in this room have a date in them?** Count. Then count the pages that say what they are not claiming. The second number is always smaller, and it is the one that makes a page believable.'));
out.push(hw('Write your answer to a question you have been asked about something you do (50+ words), with a reason that is an event with a date, and one paragraph saying what you are not claiming.'));

// ======================= 12.2 =======================
out.push(pb());
out.push(h2('12.2  Up to a point'));
out.push(p('**Function:** agreeing and disagreeing politely   ·   **Grammar:** _I see what you mean, but… · up to a point · I\'m not sure about that_   ·   **Pronunciation:** the fall that softens a disagreement'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Your teacher makes six statements, some of them deliberately wrong. Nobody in this room is allowed to say _no_, _yes_ or _I disagree_. Every answer must begin with four words that are not a verdict, and your teacher will count how many of you reach for _no_ first.'));
out.push(board('I see what you mean, but the date is the part that matters.', 'agree first · then but'));
out.push(p('**b**  Agreeing, disagreeing, or half and half? **1** _Up to a point._  **2** _Absolutely._  **3** _I\'m not sure about that._  **4** _I see what you mean, but…_  **5** _That is true of the first one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are Tareq and Lubna disagreeing about?   **A** whether to write to the depot or telephone   **B** whether the depot was told at all   **C** who should write'));
out.push(p('**b**  Listen again. **1** What does Lubna concede, and how does she then disagree?   **2** What does Ms Huda say about the words _you are wrong_?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.3  I see what you mean, but', [
  ['Tareq', 'If the road is closed, you telephone. You do not write. By the time anybody has read an email the buses are on the road.'],
  ['Lubna', 'I see what you mean, and for the first hour I think you are right. But a telephone call to a depot at six in the morning is a conversation with whoever happens to be standing near the telephone, and in May that was nobody.'],
  ['Tareq', 'So you would write.'],
  ['Lubna', 'I would do both, and I would say so in the call: I am sending this in writing as well. Up to a point your way is faster — and the part where it stops being faster is the second time it happens.'],
  ['Tareq', 'Why the second time?'],
  ['Lubna', 'Because the first time, the only thing that matters is the buses. The second time, somebody is going to ask who was told, and a telephone call at six in the morning is not an answer to that question.'],
  ['Omar', 'I am not sure about that. Nobody at our office reads anything.'],
  ['Lubna', 'Then nobody at your office reads anything **and** the email exists, which is two things, and the second one is still true in September.'],
  ['Ms Huda', 'Notice what neither of you has said. Nobody in this conversation has said _you are wrong_, and the disagreement is as sharp as any we have had.'],
  ['Tareq', 'I nearly said it.'],
  ['Ms Huda', 'Everybody nearly says it. _You are wrong_ ends the conversation and leaves you with the same opinion you came in with, and I would rather you had Lubna\'s four words: I see what you mean, and for the first hour I think you are right. She has conceded the whole of his point and taken nothing back.'],
  ['Tareq', 'And I am going to do both from now on, which means she won.'],
  ['Ms Huda', 'She did not win. You changed what you do, which is the only thing a disagreement is for.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Agreeing, half-agreeing, disagreeing**',
  table(['you say', 'what it does'], [
    ['_Absolutely. · Exactly. · That is true._', 'full agreement'],
    ['_Up to a point. · That is true of the first one._', 'agrees with part and marks the part'],
    ['_I see what you mean, but… · I take your point, but…_', 'concedes, then disagrees — the standard move'],
    ['_I\'m not sure about that. · I\'m not convinced._', 'disagreement, softened'],
    ['_I\'m afraid I don\'t agree. · I think that is wrong._', 'strong; keep it for when it is needed'],
  ], [2.5, 2.1]),
  '**Agree first, and mean it.** _I see what you mean, and for the first hour I think you are right_ is not politeness: it names the part of the other person\'s case that is good, which is the part they will listen for.',
  '**_Up to a point_ is the most useful phrase in the unit**, because it is honest. Most disagreements are about **how far** something is true, not about whether it is true, and English has a phrase for exactly that.',
  '⚠ **Avoid _you are wrong_.** It ends the conversation and leaves both people where they started. It is not forbidden; it is simply the least effective sentence available.',
  '⚠ ~~I am not agree~~ · ~~I disagree with you about that, this is wrong~~ → _I don\'t agree_ · _I\'m not sure about that_.',
  '⚠ ~~Yes, but~~ on its own, repeatedly, is heard as disagreeing with everything. Say **what** you agree with: _yes — the first hour. But…_',
  '**Useful phrases:** I see what you mean, and for the first hour I think you are right · up to a point, and the part where it stops · that is two things, and the second one is still true in September · you changed what you do, which is the only thing a disagreement is for.',
  '**Practise:** Half-agree, then disagree.  1 _Nobody reads anything you send._  2 _Telephoning is always faster._  3 _Records are a waste of time._  4 _It is better to ask for everything at once._  5 _People here do not do things in writing._',
  '**Pronunciation.** 🔊 **Track 12.4** _I see what you mean_ falls at the end, and the voice then **rises slightly on _but_** and goes on without a gap. A pause after _but_ turns a disagreement into an announcement. Listen to six and mark the ones where the speaker pauses after _but_; those are the ones that sound rude.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the statement from the card. B half-agrees, says **which part** is true, and then disagrees with a reason. A may not say _no_. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'I see what you mean, and __________ is true. But __________, because __________.'],
  ['A', 'Up to what point?'],
  ['B', 'Up to __________. After that __________.'],
]));
out.push(table(['Card A – the statements', 'Card B – the statements'], [
  ['Nobody reads anything you send.', 'Telephoning is always faster.'],
  ['Keeping records is a waste of time.', 'It is better to ask for everything at once.'],
  ['People here do not do things in writing.', 'A trial of three months proves nothing.'],
  ['You should never put a complaint in writing.', 'The person who shouts loudest gets dealt with first.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the part each speaker **agreed** with. The strongest disagreements in the room are the ones where the agreement is longest, and that is the finding — a speaker who concedes two sentences is heard; a speaker who concedes nothing is argued with.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take a disagreement you are actually in at the moment, at work or at home. Say the other person\'s case first, properly, and then say up to what point you agree with it.'));
out.push(p('**b**  Swap. Then each of you say whether the other person has stated their opponent\'s case fairly, or made it weaker than it is.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq said that if the road is closed you telephone, you do not write, because by the time anybody has read an email the buses are on the road. Lubna said she saw what he meant and that for the first hour he is right — but that a telephone call to a depot at six in the morning is a conversation with whoever happens to be standing near the telephone, and in May that was nobody. She would do both, and she would say so in the call. Up to a point his way is faster, and the part where it stops being faster is the second time it happens: the first time the only thing that matters is the buses, and the second time somebody is going to ask who was told, and a call at six in the morning is not an answer to that question. Omar said he was not sure, because nobody at his office reads anything, and Lubna said then nobody reads anything and the email exists, which is two things, and the second is still true in September. Then Ms Huda said to notice what neither of them had said: nobody had said "you are wrong", and the disagreement was as sharp as any we have had. Tareq said he nearly said it, and she said everybody nearly says it, and that it ends the conversation and leaves you with the opinion you came in with. He said he is going to do both from now on, which means she won — and Ms Huda said she did not win: he changed what he does, which is the only thing a disagreement is for._'));
out.push(p('**Listener task:** write the sentence where somebody agreed with their opponent properly.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Tareq sent the depot manager after the conversation. Answer the questions.'));
out.push(model([
  '**TO: the depot manager · CC: the night supervisor · 6 June**',
  '**Subject:** The morning of 12 May, and one change I am asking for',
  'You and I have disagreed about this twice and I want to put my own position in writing, including the part of yours that I think is right.',
  '**What you say, as I understand it.** That when a road closes the only thing that matters is the buses, that a telephone call takes forty seconds and an email takes four minutes, and that in an emergency a man writing an email is a man not making a call. I agree with all of that for the first hour, and I have been making the call for nine years because of it.',
  '**Where I think it stops being true.** On 12 May I made the call at 06.10 to a telephone in an empty office. Nobody was told, four buses went out, and the first anybody knew was at 09.40. Three weeks later I was asked who had been told and I had nothing to show, and the only honest answer I could give was that I had telephoned somebody who was not there.',
  '**What I am asking for.** Not that we stop telephoning. That we do both, and that the call says the words "I am sending this in writing as well", which takes four seconds.',
  '**What I am not asking for.** I am not asking for a form, a procedure or a new system, and I am not asking anybody to read the email at six in the morning. I am asking that it exist.',
]));
out.push(item('1', 'How much of the manager\'s case does Tareq agree with, and for how long?'));
out.push(item('2', 'What happened on 12 May that his own method did not cover?'));
out.push(item('3', 'What does he say he is not asking for?'));
out.push(writers([
  'A written disagreement: **say that you have disagreed** → **state the other person\'s case as well as they would, and say what you agree with** → **where you think it stops being true, with the date** → **what you are asking for** → **and what you are _not_ asking for**.',
  'State their case **properly**. The paragraph beginning _What you say, as I understand it_ is the whole letter: a reader who finds their own argument well put reads the next paragraph, and a reader who finds it made weak stops.',
  'Make the ask **small** and name its cost: _four seconds_. Unit 8 taught asking for one thing; this is the same discipline in a disagreement.',
  '⚠ End on what you are not asking for. No form, no procedure, no new system. Most disagreements at work are lost because the other person imagines the ask is bigger than it is.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the letter about a disagreement you are in (50 words or more).'));
out.push(p('**To:** ______________   **Subject:** ______________, and one change I am asking for   You and I have disagreed about this ______________ and I want to put my own position in writing, including the part of yours that I think is right.   **What you say, as I understand it.** That ______________, and that ______________. I agree with ______________ for ______________.   **Where I think it stops being true.** On ______________, ______________. ______________, and the only honest answer I could give was ______________.   **What I am asking for.** Not that ______________. That ______________, which takes ______________.   **What I am not asking for.** I am not asking for ______________. I am asking that ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The other person\'s case stated as well as they would state it',
  'What you agree with, and for how long or how far',
  'A date in the paragraph where you disagree',
  'A small ask, with its cost — and what you are not asking for',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their "what you say, as I understand it" paragraph only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full letter (100 words or more) to somebody you disagree with about something you both have to do. Then write underneath whether you would be happy for them to read your version of their case.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s letter as **the person it is addressed to**. ★ _The place where you put my case better than I would._  ✓ _One place where my case is made weaker than it is._  ? _What are you not asking for?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Would the other person recognise their own case in your letter?** Hands. Then the harder question: how many of you found, writing their case out properly, that it was better than you had been treating it? That number is the point of the cycle.'));
out.push(hw('Write the other person\'s case in a disagreement you are in — as well as they would write it (50+ words) — and then one paragraph saying up to what point you agree with it, with a date.'));

// ======================= 12.3 =======================
out.push(pb());
out.push(h2('12.3  Admittedly'));
out.push(p('**Function:** conceding a point   ·   **Grammar:** _although · even though · mind you · admittedly_   ·   **Pronunciation:** the concession said quickly and low'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Round the room. Each student says one thing they have been arguing for in this book, and then one true thing that **weakens** their own case. Your teacher writes the second halves on the board and nothing else.'));
out.push(board('Admittedly it is one ward, one nurse and three months.', 'although · even though · mind you · admittedly'));
out.push(p('**b**  Which word? **1** _It worked, ___ it only ran for three months._  **2** _It is one ward. ___, nobody has ever counted anything there before._  **3** ____ he had been told twice, he issued the form._  **4** _It is two days a month. ___, it is in writing._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Bassel concede?   **A** that the ministry was right about one of the eleven conditions   **B** that he should not have signed   **C** that his men were right'));
out.push(p('**b**  Listen again. **1** What does Fares concede about September?   **2** What does Ms Huda say happens to a speaker who concedes nothing?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.5  The part where I was wrong', [
  ['Ms Huda', 'Every one of you has been arguing for something since April. Today you give me the true thing that weakens your own case. Bassel.'],
  ['Bassel', 'I crossed nine of the eleven conditions out and I have said in this room that all nine were unreasonable. Admittedly, one of the nine was not. Condition four says the finished work must not leave the premises without a signed order, and I crossed it out because of the yard — and the definitions page says the yard is the premises, so the condition was never about the yard at all. It was about the street, and about the street it is right.'],
  ['Ms Huda', 'So you crossed out a condition you agree with.'],
  ['Bassel', 'I crossed out a condition I agree with, because I had not read the page before it. Eight unreasonable conditions is still eight, mind you, and it is enough.'],
  ['Ms Huda', 'Fares.'],
  ['Fares', 'September. Two days a month, written, for a year. Admittedly it is not the post, it is not a title, and anybody reading my page from February would say I asked for a job and got two days.'],
  ['Rasha', 'And?'],
  ['Fares', 'And even though it is two days, it is the first thing I have ever been paid for that I would have done anyway, and I told my own company before I signed, which is the part I would not have done in February. Mind you, I do not know whether they will renew it, and the page I wrote in February did not have a one-year limit on anything.'],
  ['Ms Huda', 'Now notice what has happened to both of you in this room. You have each given away the strongest point against yourselves, out loud, and I want somebody to tell me what it has cost you.'],
  ['Umm Kinan', 'Nothing. It has cost them nothing, and I believe the rest of what they say more than I did ten minutes ago.'],
  ['Ms Huda', 'That is the cycle. A speaker who concedes nothing is believed about nothing, because the listener spends the whole conversation looking for the hole. A speaker who hands over the hole is listened to.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Conceding a point**',
  table(['you say', 'where it goes'], [
    ['_**Admittedly**, it was only three months._', 'front of the sentence; the standard written concession'],
    ['_**Although** it only ran for three months, …_', 'joins two clauses; comma before the main clause'],
    ['_It only ran for three months, **though**._', 'end of the sentence, in speech'],
    ['_**Even though** he had been told twice, he issued it._', 'stronger than _although_'],
    ['_**Mind you**, I do not know whether they will renew it._', 'speech only; adds a second thought against yourself'],
  ], [2.6, 2.0]),
  '**A concession is a fact against your own case, given away on purpose.** It is not an apology and it is not a retreat. _Admittedly it is one ward, one nurse and three months_ — and the case is stronger afterwards, because nobody now has to find that out for themselves.',
  '**Concede the strongest point against you, not the weakest.** A speaker who concedes something trivial is heard as managing the conversation. Give away the thing you were hoping nobody would raise, and say it first.',
  '⚠ ~~Although it only ran three months, but it worked.~~ Never _although_ and _but_ in the same sentence: one or the other.',
  '⚠ ~~Despite it only ran for three months~~ → _despite the fact that…_ or _although it only ran…_ _Despite_ and _in spite of_ take a noun, not a clause.',
  '⚠ **_Mind you_ is spoken, not written.** In a letter use _admittedly_, _although_ or _that said_.',
  '**Useful phrases:** admittedly, one of the nine was not · I crossed out a condition I agree with · eight unreasonable conditions is still eight, mind you · a speaker who concedes nothing is believed about nothing.',
  '**Practise:** Add the strongest concession against your own case.  1 _The trial worked._  2 _The fault book found a bad batch._  3 _Writing to the depot was the right thing to do._  4 _The definitions page gave me a power I did not have._  5 _This course has changed what I do._',
  '**Pronunciation.** 🔊 **Track 12.6** A concession is said **quickly and slightly lower** than the rest, and the voice comes back up on the main clause: _admittedly it is one ward ‖ but nobody has ever counted anything there before._ Said slowly and loudly, a concession sounds like a defeat. Listen to six and mark the two that are said too slowly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the claim from the card. B makes the claim their own and then concedes the **strongest** point against it, with _admittedly_, _although_ or _mind you_. A says whether a harder concession was available. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', '__________. Admittedly, __________.'],
  ['A', 'Was there a harder one?'],
  ['B', '__________.'],
  ['A', 'Say it with _although_.'],
  ['B', 'Although __________, __________.'],
]));
out.push(table(['Card A – the claims', 'Card B – the claims'], [
  ['The record changed what happened.', 'Asking for one thing works better than asking for three.'],
  ['The definitions page gave me a power.', 'The trial proves the blocks are the cause.'],
  ['Writing it down was the right thing to do.', 'The fault book found the bad batch.'],
  ['This course has changed what I do.', 'Telling my own company first was the right order.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write each concession and mark it _strong_ or _trivial_. In a first run most are trivial — _admittedly I am not very good at English_ — and the task is to go back and find the fact the speaker did not want to say.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Take the thing you have been arguing for in this book and concede the strongest point against it. Then say whether you have ever said that sentence out loud to the person you were arguing with.'));
out.push(p('**b**  Swap. Then each of you find the concession the other one is still avoiding.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda said that everybody in the room has been arguing for something since April, and that today we give the true thing that weakens our own case. Bassel said he crossed nine of the eleven conditions out and has said in this room that all nine were unreasonable — and admittedly one of the nine was not: condition four says the finished work must not leave the premises without a signed order, and he crossed it out because of the yard, and the definitions page says the yard is the premises, so the condition was never about the yard. It was about the street, and about the street it is right. So he crossed out a condition he agrees with, because he had not read the page before it. Eight unreasonable conditions is still eight, mind you, and it is enough. Then Fares: September is two days a month, written, for a year, and admittedly it is not the post, it is not a title, and anybody reading his February page would say he asked for a job and got two days. And even though it is two days, it is the first thing he has been paid for that he would have done anyway, and he told his own company before he signed. Mind you, he does not know whether they will renew it, and his February page did not have a one-year limit on anything. Ms Huda asked what conceding had cost them, and Umm Kinan said nothing — and that she believes the rest of what they say more than she did ten minutes before. Ms Huda said that is the cycle: a speaker who concedes nothing is believed about nothing, because the listener spends the whole conversation looking for the hole, and a speaker who hands over the hole is listened to._'));
out.push(p('**Listener task:** write the hardest concession anybody made in this room.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the paragraph Rasha has added to her own case. Answer the questions.'));
out.push(model([
  '**NIGHT ROTA TRIAL · THE LIMITS OF WHAT I AM CLAIMING** · R. Barakat · for the September report',
  'This page goes in front of the figures, not after them.',
  '**What I am claiming.** That on this ward, between September and May, seven errors were made by one nurse and every one of them fell on the fourth or fifth night of a block, and that in the three-night trial from 1 June there have been none.',
  '**Admittedly, it is one ward.** One ward, one nurse, three months of trial against nine months of record, and I wrote both. Nobody has ever counted errors on this ward before, which is the reason the figures exist and also the reason there is nothing to compare them with.',
  '**Although the pattern is exact, it is not the only explanation.** The ward has had one trolley since February, and a drug round written for two trolleys will be late whatever the rota says. I cannot separate the two, and anybody who wanted to argue against me would start there, which is why I have started there myself.',
  '**Even though Sister Nasr\'s fourteen years point the same way**, she joined the trial on 8 June and her entries are kept separately at her own request, and fourteen years of nobody counting is not fourteen years of data.',
  '**What would make me wrong.** A quarter in which the errors fall on first and second nights. If that happens I will write it, because I asked for this trial on the basis that somebody would count it honestly and I am the somebody.',
]));
out.push(item('1', 'Why does she say this page goes in front of the figures?'));
out.push(item('2', 'What other explanation does she raise, and why does she raise it herself?'));
out.push(item('3', 'What would make her wrong?'));
out.push(writers([
  'A page of concessions: **what you are claiming, exactly** → **_admittedly_, the size of it** → **_although_, the other explanation** → **_even though_, the weakest part of your support** → **and what would make you wrong**.',
  'Put it **in front** of the figures. A limitation found by the reader is a hole; the same limitation found on the first page is a method.',
  'Raise the **other explanation** yourself, and say why: _anybody who wanted to argue against me would start there, which is why I have started there myself._',
  '⚠ The last paragraph is the one that costs something, and it is 8.3 again: _what would make me wrong._ A case with no such paragraph is a case that cannot be tested, and a reader who notices that stops reading the numbers.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the limits page for something you are claiming (50 words or more).'));
out.push(p('**______________ · THE LIMITS OF WHAT I AM CLAIMING**   This page goes in front of ______________.   **What I am claiming.** That ______________, and that ______________.   **Admittedly, it is ______________.** ______________, and ______________, which is the reason ______________ and also the reason ______________.   **Although ______________, it is not the only explanation.** ______________. I cannot separate ______________, and anybody who wanted to argue against me would start there.   **Even though ______________**, ______________.   **What would make me wrong.** ______________. If that happens I will write it, because ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The claim stated exactly, with numbers',
  '_Admittedly_ · _although_ · _even though_, each doing a different job',
  'The strongest argument against you, raised by you',
  'A last paragraph saying what would make you wrong',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _admittedly_ sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full limits page (100 words or more) for the strongest thing you believe about your own work. Three concessions, each with a different word, and the last paragraph on what would make you wrong.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who has to decide**. ★ _The concession that made me trust the rest._  ✓ _One concession that is trivial._  ? _What would make you wrong, and have you written it where somebody will see it?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read only the _what would make me wrong_ lines.** Then the question: how many of you could have written that paragraph in April? Almost nobody, and it is the single clearest measure of what eleven units have done.'));
out.push(hw('Write the limits page for something you are claiming at work (50+ words), with three concessions and one paragraph on what would make you wrong. Then give it to the person who would have to decide.'));

// ======================= 12.4 =======================
out.push(pb());
out.push(h2('12.4  What do you think?'));
out.push(p('**Function:** asking for somebody\'s view and building on it   ·   **Grammar:** _what do you think? · how do you see it? · so would you say…?_   ·   **Pronunciation:** the question that is really a question'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, for ninety seconds each: A talks about anything from this book and B may say nothing except questions asking for A\'s view and building on the answers. No opinions of B\'s own. Then swap, and your teacher asks which was harder.'));
out.push(board('That is a good point — so would you say the date matters more than the wording?', 'ask · listen · build'));
out.push(p('**b**  Which of these actually asks for a view? **1** _Don\'t you think it is better in writing?_  **2** _What do you think?_  **3** _How do you see it?_  **4** _I mean, writing is better, isn\'t it?_  **5** _What would you do?_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who asks Yara for her view, and what is the question?'));
out.push(p('**b**  Listen again. **1** What does Yara say about being asked?   **2** What does Umm Kinan say she has learnt about asking?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.7  Nobody has ever asked me that', [
  ['Ms Huda', 'We have eight minutes and one question: should the page we are writing for the September group say what went wrong in this room, or only what went right? Jad.'],
  ['Jad', 'Both. I\'d say both, because a page with nothing wrong in it is a page nobody believes.'],
  ['Umm Kinan', 'May I ask Yara? Yara, you have said the least in this room and you have been here every week since September. How do you see it?'],
  ['Yara', 'Nobody has ever asked me that in a room with eleven people in it.'],
  ['Umm Kinan', 'I know. That is why I asked.'],
  ['Yara', 'Then — what went wrong. Only what went wrong, or at least first. Because the thing that kept me in this room in the second week was not anybody being good at English. It was Ms Huda saying out loud that she is wrong about a third of her first impressions every year.'],
  ['Umm Kinan', 'So would you say the page should start with something a teacher got wrong?'],
  ['Yara', 'I would say it should start with something **anybody** got wrong, and I would put mine in it. Twenty-six years is a long time to be afraid of four sentences.'],
  ['Ms Huda', 'Umm Kinan, say what you just did, because the class should have the method and not only the answer.'],
  ['Umm Kinan', 'I asked the person who had not spoken, I asked an open question and not one with the answer in it, and then I took her words and gave them back as a question — _so would you say_. I have taught for twenty-four years and I have asked thousands of questions, and almost all of them were questions I already knew the answer to.'],
  ['Rasha', 'And the forty minutes you asked for in April.'],
  ['Umm Kinan', 'Was the first time in four months that I asked a question I did not know the answer to. The woman said yes in nine seconds.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Asking for a view, and building on it**',
  table(['you say', 'what it does'], [
    ['_What do you think? · What is your view?_', 'open: no answer inside the question'],
    ['_How do you see it? · How does it look from where you are?_', 'open, and asks for their position'],
    ['_What would you do? · What would you have done?_', 'asks for a decision, which is easier to answer'],
    ['_So would you say…? · So you would…?_', '**builds**: gives their words back as a question'],
    ['_That is a good point — does that mean…?_', 'builds, and marks what was good'],
  ], [2.6, 2.0]),
  '**An open question has no answer inside it.** _Don\'t you think it is better in writing?_ and _writing is better, isn\'t it?_ both contain the answer, and what comes back is agreement, not a view. ⚠ They are useful for checking and useless for asking.',
  '**Then build.** Take two or three of their own words and give them back as a question: _so would you say the page should start with something a teacher got wrong?_ It does three things at once — it proves you listened, it checks you understood, and it moves the conversation one step on.',
  '**Ask the person who has not spoken, and say why you are asking.** _You have said the least in this room and you have been here every week._ A direct question with a reason in it is answerable; _does anybody else want to say anything?_ is answered by nobody, ever.',
  '⚠ ~~What is your opinion about that for you?~~ → _What do you think?_ Four words. The commonest fault in this cycle is a question made so polite that it is no longer a question.',
  '⚠ After you ask, **stop talking**. Count four seconds. The silence is not a failure of the question; it is the question working.',
  '**Useful phrases:** how do you see it? · nobody has ever asked me that · I know, that is why I asked · so would you say…? · almost all of them were questions I already knew the answer to.',
  '**Practise:** Turn each into an open question, then write the _so would you say_ that follows.  1 _Don\'t you think it is better in writing?_  2 _You agree that the trial worked, don\'t you?_  3 _Surely nobody reads the definitions page?_  4 _Wouldn\'t you have telephoned?_  5 _You must have been pleased._',
  '**Pronunciation.** 🔊 **Track 12.8** A real question **falls** at the end and then stops: _how do you SEE it._ A question that is really a statement rises and runs on into the next sentence. Listen to eight and mark each one _asking_ or _telling_; four of the eight are telling.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A talks for a minute on the topic from the card. B may only ask open questions and build on the answers. C times the silences after each question and reports the longest. Then change roles.'));
out.push(dlg(null, [
  ['A', '__________.'],
  ['B', 'How do you see __________?'],
  ['A', '__________.'],
  ['B', 'That is a good point — so would you say __________?'],
  ['A', '__________.'],
  ['C', 'Longest silence: __________ seconds. Questions with the answer inside them: __________.'],
]));
out.push(table(['Card A – the topics', 'Card B – the topics'], [
  ['something at work that nobody has ever asked you about', 'a decision somebody else made that affected you'],
  ['the part of your job you would change first', 'something you have changed your mind about this year'],
  ['a rule you follow that you think is wrong', 'a person who asked you a question that mattered'],
  ['what you would do with one free day a month', 'something you have never said out loud in a group'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the questions that had the answer inside them, and the longest silence. The silences get longer as the questions get better, which is the opposite of what everybody expects, and it is the measure to use.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  Ask your partner for their view on something you have an opinion about and have never asked them. Then build on it twice, with _so would you say_, and do not give your own view at all.'));
out.push(p('**b**  Swap. Then each of you say whether you learnt anything you did not expect.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave us eight minutes and one question: should the page for the September group say what went wrong in this room, or only what went right? Jad said both, because a page with nothing wrong in it is a page nobody believes. Then Umm Kinan asked whether she could ask Yara, and she said: you have said the least in this room and you have been here every week since September — how do you see it? Yara said nobody has ever asked her that in a room with eleven people in it, and Umm Kinan said she knows, and that is why she asked. Yara said: what went wrong, only what went wrong, or at least first — because the thing that kept her in the room in the second week was not anybody being good at English, it was Ms Huda saying out loud that she is wrong about a third of her first impressions every year. Umm Kinan built on it: so would you say the page should start with something a teacher got wrong? And Yara said it should start with something anybody got wrong, and she would put hers in it, because twenty-six years is a long time to be afraid of four sentences. Then Ms Huda asked Umm Kinan to say what she had just done, so the class would have the method and not only the answer: she asked the person who had not spoken, she asked an open question with no answer inside it, and she gave Yara\'s own words back as a question. And she said she has taught for twenty-four years and asked thousands of questions, and almost all of them were questions she already knew the answer to — and that the forty minutes she asked for in April was the first time in four months that she asked one she did not. The woman said yes in nine seconds._'));
out.push(p('**Listener task:** write the open question somebody asked, and what came back.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the message Umm Kinan sends to her department. Answer the questions.'));
out.push(model([
  '**TO THE MATHEMATICS DEPARTMENT · FOUR QUESTIONS AND NO ANSWERS FROM ME** · S. Dibo · 8 June',
  'I have taught in this department for twenty-four years and I have asked, at a guess, two hundred thousand questions. Almost all of them had the answer inside them, because that is what a teacher\'s questions are for.',
  'These four do not. I am not going to put my own view in this message at all, and I would like a sentence from each of you by Thursday.',
  '**1** The printed scheme puts chapter 7 in the third term and I have moved it to the second in my own classes. **How do you see it from where you are** — with your own classes, your own groups and your own June?',
  '**2** I have mark analysis for four years for my classes only. **What would you want to see** before you moved anything?',
  '**3** We have met eleven times this year and I have spoken at nine of those meetings and Mr Haddad at none. **What is your view** on what that means about the meetings?',
  '**4** And one I should have asked in September: **what is the thing in this department that nobody ever asks you about?**',
  'I will put the answers together with no names on them and bring them to the next meeting. If I have put the answer inside any of these four questions, say so and I will rewrite it.',
]));
out.push(item('1', 'What does she say about the two hundred thousand questions?'));
out.push(item('2', 'Why does she say she will not put her own view in the message?'));
out.push(item('3', 'What does she offer to do if a question has the answer inside it?'));
out.push(writers([
  'A page that asks: **say how many questions you usually ask with the answer inside them** → **say that these do not** → **the questions, each one open, each one addressed to the reader\'s own situation** → **the one you should have asked earlier** → **and what you will do with the answers**.',
  'Keep your own view **out**. The moment a page of questions contains the writer\'s answer, every reply is a reply to the answer and not to the question.',
  'Ask each question **about the reader\'s own position**: _from where you are · with your own classes · what would you want to see_. A general question gets a general answer and a general answer is worth nothing.',
  '⚠ Include the question you should have asked earlier, and say that you should have. _What is the thing in this department that nobody ever asks you about?_ — in a first run it produces more than the other three together.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page of questions for a group you belong to (50 words or more).'));
out.push(p('**TO ______________ · ______ QUESTIONS AND NO ANSWERS FROM ME**   I have ______________ for ______________ and I have asked, at a guess, ______________ questions. Almost all of them had the answer inside them.   These ______ do not. I am not going to put my own view in this message, and I would like a sentence from each of you by ______________.   **1** ______________. **How do you see it from where you are** — with your own ______________?   **2** ______________. **What would you want to see** before ______________?   **3** ______________. **What is your view** on ______________?   **4** And one I should have asked ______________: **what is the thing in ______________ that nobody ever asks you about?**   I will ______________ with the answers. If I have put the answer inside any of these, say so and I will rewrite it.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Every question open — no answer inside it',
  'Each one addressed to the reader\'s own situation',
  'The writer\'s own view kept out entirely',
  'The question you should have asked earlier, marked as late',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their fourth question only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) of four or five open questions to a group — a department, a family, a shift, a committee. Then write underneath which of them you are most afraid of the answer to.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody who has to answer it**. ★ _The question I would actually answer._  ✓ _One question with the answer inside it._  ? _Which answer are you most afraid of?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Read the fourth questions.** Then: who is going to send their page? Write the number on the board next to the number from 4.6, which was the cycle about asking for something. The two numbers together are the clearest thing in the book about what has changed.'));
out.push(hw('Send, or hand over, your page of questions (50+ words) and write down what came back. If nothing comes back by the next lesson, write that down too and bring both.'));

// ======================= 12.5 =======================
out.push(pb());
out.push(h2('12.5  So are we agreed?'));
out.push(p('**Function:** reaching a decision together   ·   **Grammar:** _shall we start with… · how about… · so are we agreed?_   ·   **Exam practice:** B1 Preliminary Speaking Part 3'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  In pairs, two minutes, one decision: **which two of the twelve units in this book should the September group do first, if they only had time for two?** Nobody may speak for more than fifteen seconds at a time. Your teacher times it and stops anybody who makes a speech.'));
out.push(board('Shall we start with the page of entries? How about the fault book?', 'start · suggest · respond · agree'));
out.push(p('**b**  Which phrase moves a decision on? **1** _Shall we start with…?_  **2** _I think the first one is best._  **3** _How about…?_  **4** _So are we agreed?_  **5** _Let\'s leave that one._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What do Lubna and Mazen have to decide, and how long do they have?'));
out.push(p('**b**  Listen again. **1** Which option do they drop first, and why?   **2** What do they agree on in the end, and what do they fail to agree on?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(box('CANDIDATE PAGE · Speaking Part 3', [
  '**Here are some things the class could leave in Room 14 for the group starting in September.**',
  '**Talk together about the different things they could leave, and then decide which two would be most useful.**',
  table(['', ''], [
    ['① the page of entries about each person', '② the fault book, photocopied'],
    ['③ the definitions page from the contract', '④ a list of what went wrong in this room'],
    ['⑤ the vote paper from the first evening', '⑥ a recording of four people speaking'],
  ], [1, 1]),
  '_You have two to three minutes. You do not have to agree._',
], C.grey, C.navy));
out.push(dlg('Track 12.9  Two minutes to agree', [
  ['Lubna', 'Shall we start with the ones we can drop? I would drop the definitions page.'],
  ['Mazen', 'So would I, and for the same reason, I think. It is Bassel\'s contract.'],
  ['Lubna', 'Exactly. It is the best thing that happened in this room and it means nothing to anybody who is not printing for a ministry. How about the fault book?'],
  ['Mazen', 'It is mine, so you decide.'],
  ['Lubna', 'I think it goes in, but not as a fault book. As four photocopied pages with a line at the top saying what it was for, because what a new person needs is not your faults, it is that somebody wrote something down for seven months with nobody looking at it.'],
  ['Mazen', 'All right. Then what about the recording?'],
  ['Lubna', 'I am not sure about the recording. Up to a point it is the most useful thing on the page — twelve people in their first week want to hear what B1 sounds like out of a mouth like theirs. But nobody in this room would agree to be recorded in September and nobody should have to.'],
  ['Mazen', 'Mind you, Yara said yesterday that she would.'],
  ['Lubna', 'Then that is one, and one is not a recording of a class. Let us leave that one.'],
  ['Mazen', 'So are we agreed on the entries and the fault book?'],
  ['Lubna', 'Agreed on the entries. I would like the list of what went wrong instead of the fault book, because of what Yara said.'],
  ['Mazen', 'Then we have not agreed, and we have forty seconds.'],
  ['Lubna', 'Then we say so. We agree on the entries, we each have a second choice, and mine is the list and yours is the book — and if I had to decide on my own I would put in all three and let them throw one away.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Deciding together — the four moves**',
  table(['you say', 'what it does'], [
    ['_Shall we start with…? · Let\'s begin with…_', '**start**: organises the two minutes'],
    ['_How about…? · What about…? · We could…_', '**suggest**: offers, does not insist'],
    ['_Up to a point · I\'m not sure about that · So would I_', '**respond**: 12.2 and 12.3, used fast'],
    ['_So are we agreed? · Shall we say…? · Let\'s leave that one._', '**close**: agrees, or agrees to disagree'],
  ], [2.5, 2.1]),
  '**The examination task.** B1 Preliminary **Speaking Part 3**: you and the other candidate get one page with a question in the middle and five or six ideas round it. You have **two to three minutes** to talk about the ideas together and reach a decision. The examiners say nothing.',
  '**What is marked, and it is not the decision.** You are marked on whether you **interact**: suggesting, responding to what the other person said, asking their view, and closing. ⚠ **You do not have to agree** — two candidates who say _we have not agreed, and here is each of our second choices_ score as well as two who agree, and better than two who agreed in thirty seconds and then sat in silence.',
  '⚠ **The commonest failure is two monologues.** Each candidate talks about all six options in turn and never mentions what the other said. Use their words: _so would I, and for the same reason_ · _mind you, Yara said yesterday_.',
  '⚠ **Do not rush to agree.** Agreeing in forty seconds leaves two minutes of silence, and silence is what loses marks. Start by **dropping** the options you can both drop; that is fast, it is natural, and it buys the time for the two that matter.',
  '**Keep your turns short.** Fifteen seconds is long. A decision made of twenty short turns scores far above one made of four speeches.',
  '**Useful phrases:** shall we start with the ones we can drop? · it is mine, so you decide · let us leave that one · so are we agreed? · then we say so.',
  '**Practise:** Decide in two minutes, in pairs.  1 which two things a new colleague should be told on their first morning  2 which two records are worth keeping in your workplace  3 which two of the eighty-four cycles in this book you would teach a friend  4 which two rooms in your building should be measured first',
  '**Pronunciation.** 🔊 **Track 12.10** A suggestion **rises** — _how about the fault BOOK?_ — and a close **falls**: _so are we aGREED._ Said the other way round, a suggestion sounds like an instruction and a close sounds unsure. Listen to eight and mark them _suggest_ or _close_.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs, with a third student timing and counting turns. Take a card and decide in **two minutes**. Nobody speaks for more than fifteen seconds. The timekeeper counts the turns and the number of times either of you used the other\'s words.'));
out.push(dlg(null, [
  ['A', 'Shall we start with the ones we can drop? I would drop __________.'],
  ['B', 'So would I, because __________. How about __________?'],
  ['A', 'Up to a point. __________.'],
  ['B', 'Mind you, __________.'],
  ['A', 'So are we agreed on __________?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – decide which two', 'Card B – decide which two'], [
  ['things a new colleague is told on the first morning', 'records worth keeping in your workplace'],
  ['rooms in your building to be measured first', 'faults to report to a supplier first'],
  ['questions to ask at an interview', 'things to change about a meeting that happens every week'],
  ['cycles from this book to teach a friend', 'things to leave in Room 14 in September'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform, timed. **Listener task:** count the turns and the number of times each speaker used the other\'s words. A good pair has more than fifteen turns in two minutes and at least four of those borrowings. A pair with six turns has given two speeches, whatever they decided.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  With a new partner, two minutes, a real decision from your own life that you can both see — what to change about a weekly meeting, which of two tasks to do first, what to tell somebody on their first morning. Drop first, decide second.'));
out.push(p('**b**  Swap partners again and do it a second time, with the same decision. The second run is always better and your teacher will ask you why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Lubna and Mazen had two minutes and six things the class could leave in Room 14 for September. Lubna started with the ones they could drop and dropped the definitions page, and Mazen said so would he, for the same reason: it is Bassel\'s contract. Lubna said exactly — it is the best thing that happened in this room and it means nothing to anybody who is not printing for a ministry. She asked about the fault book and Mazen said it is his, so she should decide, and she said it goes in but not as a fault book: as four photocopied pages with a line at the top saying what it was for, because what a new person needs is not his faults, it is that somebody wrote something down for seven months with nobody looking at it. Then the recording: she was not sure, and said up to a point it is the most useful thing on the page, because twelve people in their first week want to hear what B1 sounds like out of a mouth like theirs — but nobody in this room would agree to be recorded in September and nobody should have to. Mazen said mind you, Yara said yesterday that she would, and Lubna said then that is one, and one is not a recording of a class, so let us leave that one. Mazen asked whether they were agreed on the entries and the book, and Lubna said agreed on the entries, but she would like the list of what went wrong instead of the book, because of what Yara had said. He said then we have not agreed and we have forty seconds — and she said then we say so: we agree on the entries, we each have a second choice, and if she had to decide on her own she would put in all three and let them throw one away._'));
out.push(p('**Listener task:** write the moment where one of them used the other\'s words.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the page Lubna writes for a decision somebody else has to take. Answer the questions.'));
out.push(model([
  '**14 SHARIA AL-JALAA · WHAT TO DO FIRST** · a page of options for the university, not a recommendation · L. Sweidan',
  'This page does not recommend anything. It sets out six things that could be done to the building and the two I think should be discussed first, with the reason.',
  '**① Replace the south windows.** The three rooms run 4–5 °C hotter than the north side in summer. Cost: the largest on this page. Effect: measurable, in a building used in July.',
  '**② Separate the Room 13 / Room 14 lighting circuit.** Two rooms on one switch since 2009. Cost: one day of an electrician. Effect: two rooms usable at once in the evening.',
  '**③ Reinstate the second staircase.** Not possible without the 1974 drawings, which nobody holds.',
  '**④ Widen the 76 cm doors.** Required by current regulations for a building of this use. Cost: structural. Effect: the building becomes lawful for its present use, which it is not.',
  '**⑤ Fit a handle inside the stairwell store.** Cost: 400 Syrian pounds and ten minutes. Effect: the store stops being a room that can lock a person in.',
  '**⑥ Record the building properly.** Three sheets now exist. Cost: none; it is done.',
  '**The two I would discuss first: ⑤ and ②.** Not ① and not ④, although those are the two that matter most, because both of them need a budget that does not exist this year and a discussion about them will end in a decision to wait. ⑤ costs 400 pounds and removes a way for somebody to be hurt. ② costs one day and gives the building two rooms back. **If the meeting only decides one thing, let it decide a cheap one, because a meeting that decides nothing twice stops being held.**',
]));
out.push(item('1', 'What does she say the page is not?'));
out.push(item('2', 'Which two does she want discussed first, and which two does she say matter most?'));
out.push(item('3', 'What is her reason for starting with a cheap option?'));
out.push(writers([
  'A page of options for somebody else\'s decision: **say it is not a recommendation** → **the options, numbered, each with its cost and its effect in one line** → **the two to discuss first** → **and the reason, which is about the meeting and not about the building**.',
  'Give every option a **cost and an effect**, both short. An option with no cost beside it will be chosen and then abandoned, and an option with no effect beside it will not be chosen at all.',
  'Say which options are **not** on your list and why. _Not ① and not ④, although those are the two that matter most_ — a page that hides the big items looks like a page written by somebody with a small idea.',
  '⚠ End with the reason that is about the process: _a meeting that decides nothing twice stops being held._ That sentence is the whole of 12.5 in writing, and it is the one a chairman will act on.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the page of options for a decision somebody else has to take (50 words or more).'));
out.push(p('**______________ · WHAT TO DO FIRST** · a page of options, not a recommendation   This page does not recommend anything. It sets out ______ things that could be done and the two I think should be discussed first.   **①** ______________. Cost: ______________. Effect: ______________.   **②** ______________. Cost: ______________. Effect: ______________.   **③** ______________. ______________.   **④** ______________. Cost: ______________. Effect: ______________.   **⑤** ______________. Cost: ______________. Effect: ______________.   **The two I would discuss first: ______ and ______.** Not ______ and not ______, although those are the two that matter most, because ______________. **If the meeting only decides one thing, let it decide ______________, because ______________.**'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Said not to be a recommendation, in the first line',
  'Every option with a cost and an effect, one line each',
  'The two to discuss first, named — and the big ones named too',
  'A last sentence about the meeting, not about the subject',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their last sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page of options (100 words or more) for a real decision in your workplace, your building or your family. Six options with costs and effects, the two to discuss first, and the reason that is about the process.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **the person who has to chair the meeting**. ★ _The option I could decide in two minutes._  ✓ _One option with no cost or no effect beside it._  ? _What happens if we decide nothing?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**How many pages start with the cheapest option, and how many with the most important one?** Count both. Neither is wrong, and the difference between the two groups is whether the writer has ever sat through a meeting that decided nothing twice.'));
out.push(hw('Write the page of options for a real decision (50+ words) and give it to the person who will have to take it. Write down which two they said they would discuss first.'));

// ======================= 12.6 =======================
out.push(pb());
out.push(h2('12.6  On the one hand'));
out.push(p('**Function:** writing a balanced paragraph   ·   **Grammar:** _on the one hand · on the other hand · on balance_   ·   **Pronunciation:** reading a balanced paragraph without pleading'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  **The envelopes.** Your teacher gives back four things: the introductions pinned up in **1.1**, the vote from **1.2**, the sealed notes from **1.4**, and your two homework pages from **3.3** and **3.6**. Read them in silence for four minutes. Nobody speaks until the four minutes are over, and the question when they are is not whether you were right.'));
out.push(board('On the one hand I did three of the four. On the other, I did the telephoning.', 'on the one hand · on the other · on balance'));
out.push(p('**b**  Which kind of thing were you wrong about? **1** something about **yourself**  **2** something about **somebody else**  **3** something about **how long it would take**  **4** something about **what would be difficult**'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What does Jad find in his own 3.3 page, and what does Ms Huda find in hers?'));
out.push(p('**b**  Listen again. **1** What was Jad wrong about, and what kind of mistake does he say it was?   **2** What does Yara say she wants to do with her sealed note?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.11  The envelopes', [
  ['Ms Huda', 'Four minutes, in silence, and then nobody tells me whether they were right. Tell me what **kind** of thing you were wrong about.'],
  ['Jad', 'I wrote four things on 14 April. I will have spoken English out loud to four people outside this room — I have done it with eleven, because of the forum. I will have asked for help in writing — done. I will have said that I am nineteen — done, in May, and two people stopped answering me and four did not. And then I wrote: what I think I will still not have done is telephone anybody.'],
  ['Ms Huda', 'And?'],
  ['Jad', 'I telephoned a supplier in Aleppo on the second of June and spoke English for nine minutes. So I was right about three and wrong about the only one I put in to be wrong about, and the kind of mistake is that I thought the hard thing was the English.'],
  ['Lubna', 'And it was not?'],
  ['Jad', 'It was being nineteen. The telephone was easy once nobody could see me.'],
  ['Ms Huda', 'Mine. I sealed a page in the first week, as I do every year, with an impression of each of you and an alternative reading. I am wrong about a third of them every year and this year I was wrong about four out of twelve, which is my usual. But the kind of mistake has changed, and that is what I did not expect. For twenty years my mistakes were about **ability**. This year all four were about **whether somebody would speak**, which is not the same thing at all, and the four I was wrong about are the four who have changed most.'],
  ['Yara', 'May I read mine out?'],
  ['Ms Huda', 'It is yours. You may do anything you like with it.'],
  ['Yara', 'Then I want to read the note I wrote about **myself** in the first week, and I want it in the page for September, and I would like it to be the first thing on it. On the one hand I wrote that I would probably stop coming by November, because that is what I have done four times. On the other hand I am here in June and I have said something in this room every week since the third one. On balance — and this is the sentence I want them to read — the thing that was difficult was never the English.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Writing both sides, and then saying where you stand**',
  table(['you write', 'what it does'], [
    ['_**On the one hand**, …_', 'opens the first side; it **must** have a second'],
    ['_**On the other hand**, … · **That said**, …_', 'the second side'],
    ['_**While** it is true that…, …_', 'concedes a whole side in one clause'],
    ['_**On balance**, … · **Taking both together**, …_', 'where you stand — and it is not optional'],
    ['_**The one thing I would not argue with** is…_', 'marks the part of the other side you accept entirely'],
  ], [2.4, 2.2]),
  '**A balanced paragraph has three parts and most students write two.** Both sides, and then **where you stand**. A page that gives both sides and stops is not balanced; it is undecided, and a reader cannot use it.',
  '⚠ ~~On the one hand~~ with no second hand. If you write it, the next paragraph is fixed.',
  '⚠ ~~In the other hand~~ → _on the other hand_. ⚠ ~~In one side… in other side…~~ → _on the one hand… on the other hand…_',
  '**The two sides must be the same size.** Nine lines for your own side and one line for the other is not balance; a reader counts the lines before they read them. Give the other side its best argument, as in 12.2, and then say where you stand anyway.',
  '**_On balance_ is where the opinion goes, and it is a real opinion.** _On balance I would do both_ — not _on balance it depends_, which is the sound of somebody who does not want to be quoted.',
  '**Useful phrases:** the question is not whether you were right · what kind of thing were you wrong about · I thought the hard thing was the English · on balance, the thing that was difficult was never the English.',
  '**Practise:** Write both sides and then _on balance_.  1 Should a record be kept by the person it is about?  2 Is it better to ask for one thing or for three?  3 Should the page for September say what went wrong?  4 Was the advice to leave the job right?  5 Has this course changed what you do?',
  '**Pronunciation.** 🔊 **Track 12.12** _On the one hand_ and _on the other hand_ are said at the **same volume and the same speed** — the balance is audible — and _on balance_ is said slower and lower, as a conclusion. Students read their own side loudly and the other side quickly, which tells a listener the paragraph is not balanced before they have heard a word of it. Listen to four and mark the two that are read fairly.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A reads the question from the card. B gives both sides **out loud at the same length** — count the sentences, three and three — and then says where they stand with _on balance_. A says whether the two sides were the same size. Swap cards.'));
out.push(dlg(null, [
  ['A', '__________?'],
  ['B', 'On the one hand __________. __________. __________.'],
  ['B', 'On the other hand __________. __________. __________.'],
  ['B', 'On balance __________.'],
  ['A', 'Were the two sides the same size?'],
  ['B', '__________.'],
]));
out.push(table(['Card A – the questions', 'Card B – the questions'], [
  ['Should a record be kept by the person it is about?', 'Is it better to ask for one thing or for three?'],
  ['Should the September page say what went wrong?', 'Was the advice to leave the job right?'],
  ['Is a trial of three months worth running?', 'Should you tell your own company before you sign?'],
  ['Has this course changed what you do?', 'Is it better to telephone or to write?'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** count the sentences on each side and write the two numbers. Then mark the _on balance_ sentences that are real opinions and the ones that are _it depends_. In a first run about half are _it depends_, and that half is the work of the cycle.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a**  With your four envelope pages in front of you: say both sides of **has this course changed what you do**, three sentences each, and then _on balance_. Use what is on the pages and not what you remember.'));
out.push(p('**b**  Swap. Then each of you say which **kind** of thing the other one was wrong about in April — themselves, somebody else, how long it would take, or what would be difficult.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Ms Huda gave us four minutes in silence with the envelopes and then said nobody tells her whether they were right: tell her what kind of thing you were wrong about. Jad had written four things on 14 April. He has spoken English out loud to eleven people outside this room instead of four, because of the forum; he has asked for help in writing; and he said in May that he is nineteen, after which two people stopped answering him and four did not. And he had written that what he thought he would still not have done was telephone anybody — and he telephoned a supplier in Aleppo on the second of June and spoke English for nine minutes. So he was right about three and wrong about the only one he put in to be wrong about, and the kind of mistake is that he thought the hard thing was the English. It was being nineteen, and the telephone was easy once nobody could see him. Then Ms Huda read her own: she seals a page in the first week every year with an impression of each student and an alternative reading, and she is wrong about a third every year, and this year she was wrong about four out of twelve, which is usual. But the kind of mistake has changed. For twenty years her mistakes were about ability, and this year all four were about whether somebody would speak — and the four she was wrong about are the four who have changed most. Then Yara asked to read hers, and said she wants the note she wrote about herself in the first week to be the first thing on the page for September. On the one hand she had written that she would probably stop coming by November, because that is what she has done four times. On the other hand she is here in June and has said something in this room every week since the third one. On balance, and this is the sentence she wants them to read: the thing that was difficult was never the English._'));
out.push(p('**Listener task:** write one sentence from somebody\'s envelope and the kind of mistake it was.   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read what Rasha writes with her four pages in front of her. Answer the questions.'));
out.push(model([
  '**NINE MONTHS, FOUR PAGES** · R. Barakat · written in June with the envelopes open',
  '**What I wrote in April.** By the time I finish this course I will have asked the rota committee for three-night blocks, I will have said one sentence to Sister Nasr, and I will have stopped writing "staffing" on forms I do not believe. And the thing I thought I would still not have done: told anybody outside the hospital that the seven errors were mine.',
  '**On the one hand**, all four happened, and the first three happened in the order I wrote them in, which I did not expect at all. The committee gave me a trial. The sentence to Sister Nasr took ninety seconds and produced two years of somebody else\'s silence. I have not written "staffing" since the fourteenth of May. And I told my sister in June, which was the fourth one and the hardest.',
  '**On the other hand**, I have read my 1.4 note about this class and I was wrong about five people out of eleven, and all five of my mistakes are the same mistake: I thought the quiet ones had nothing to say and the confident ones had the most. The person in this room who has changed me most is a mathematics teacher who did not speak for three weeks. And I wrote on my own 3.6 page that the turning point was the night of the seven errors, and it was not. It was the handover on the twelfth of May, which had not happened yet when I wrote the page, and the night of the errors only became a turning point because somebody later asked a question about it.',
  '**On balance**, what nine months have changed is not what I can do in English. It is that I now write things down before I know what they are for, and that I ask the question before I know whether I want the answer. Both of those are habits and neither of them is a language.',
  '**And the one thing I would not argue with.** Everything on these four pages is about me. There is not one line on any of them about the other night sister, who was eleven metres away for the whole nine months, and I wrote four pages about a ward without her in them.',
]));
out.push(item('1', 'What does she say about the order in which the four things happened?'));
out.push(item('2', 'What was she wrong about in her 1.4 note, and what was the single mistake?'));
out.push(item('3', 'What does she say is missing from all four pages?'));
out.push(writers([
  'A balanced page about yourself: **what you wrote then, quoted** → **on the one hand, what happened** → **on the other hand, what you were wrong about and what kind of mistake it was** → **on balance, what has actually changed** → **and the one thing you would not argue with**.',
  'Quote your own earlier page. The whole value of the four envelopes is that they are **evidence** and not memory, and memory will tell you that you were right about more than you were.',
  'Name the **kind** of mistake, not the mistake. _All five of my mistakes are the same mistake._ One kind of error, found in five places, is a finding; five separate errors is a list.',
  '⚠ The last paragraph is the hardest and it is what makes the page worth keeping: the thing that is **missing** from your own account. _I wrote four pages about a ward without her in them._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write your balanced page with the four envelopes open in front of you (50 words or more).'));
out.push(p('**______________ · written in ______________ with the envelopes open**   **What I wrote in ______________.** By the time I finish this course I will have ______________, ______________ and ______________. And the thing I thought I would still not have done: ______________.   **On the one hand**, ______________ happened, and ______________, which I did not expect.   **On the other hand**, I have read my ______________ note and I was wrong about ______________, and all of my mistakes are the same mistake: ______________.   **On balance**, what ______________ has changed is not ______________. It is that I now ______________ and that I ______________.   **And the one thing I would not argue with.** ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'Your own April page quoted, not remembered',
  'Two sides the same length, with the real second side',
  '_On balance_ followed by a real opinion, not _it depends_',
  'A last paragraph on what is missing from your own account',
]));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read their _on balance_ sentence only.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write the full page (100 words or more) with all four envelopes open. Then write one sentence underneath that you would be willing to have read out to the group starting in September, and mark it.'));
out.push(...lines(8));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s page as **somebody arriving in September**. ★ _The sentence I would want to read on my first evening._  ✓ _One side that is shorter than the other._  ? _What kind of thing were you wrong about?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('**Collect the kinds of mistake.** Write them on the board in four columns — yourself, somebody else, how long it would take, what would be difficult. The fourth column is nearly always the longest, and almost everybody in the room wrote in April that the difficult thing would be the English.'));
out.push(hw('Write your own balanced page (50+ words) and then copy out, by hand, the one sentence you want in the page for September. Bring both, and bring the four envelope pages to 12.7.'));

// ======================= 12.7 =======================
out.push(pb());
out.push(h2('12.7  Review & Mediate: Both sides, and where I stand'));
out.push(p('**Function:** explaining both sides and saying where you stand   ·   **Recycling:** Units 1–12   ·   **Exam practice:** B1 Preliminary Reading Part 4, Writing Part 2, Listening Part 4'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 12 quiz', 6));
out.push(p('In teams. Correct the mistakes!  **1** I am think it will last.  **2** Although it ran three months, but it worked.  **3** Despite it only ran for three months, it worked.  **4** I am not agree with that.  **5** In the other hand, it is in writing.  **6** On balance, it depends.'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the paragraph Rasha wrote in **7.6** and the paragraph she has written now, five units later.'));
out.push(box(null, [
  '**APRIL · the 7.6 evidence paragraph**',
  '_Five nights in a row is harder than three, and I can show it. Between September and May I made seven errors and every one of them was on the fourth or fifth night of a block, and none on a first, second or third. That is one nurse on one ward and I am the person who wrote the record, and it does not show that long blocks cause errors — it shows that mine happened at the end of them._',
  '**JUNE · the same claim, after the trial and after 12.3**',
  '_The trial has run from 1 June and there have been no errors in it. On the one hand that is what I predicted and the pattern is now ten months old. On the other hand the trial is three weeks long, the ward has had one trolley since February and I cannot separate the rota from the trolley, Sister Nasr\'s entries are kept separately and are not comparable, and I am still the person doing the counting. On balance I would run the trial to September and I would also put a second trolley on that ward for a month and count that, because if the trolley is the cause then everything I have written for ten months is about a wheel._',
], C.lyellow, C.orange));
out.push(p('**b**  **Books closed.** Listen. Rasha, Lubna and Ms Huda argue both sides of it. What does Lubna say Rasha should not do, and what does Rasha decide about September?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 12.13  What it does not show', [
  ['Ms Huda', 'You wrote the April paragraph in this room and it was the best thing in the unit. Read the last line of it again.'],
  ['Rasha', '"It does not show that long blocks cause errors. It shows that mine happened at the end of them."'],
  ['Ms Huda', 'And in September you have to report. Lubna, you are the committee. What do you do with it?'],
  ['Lubna', 'On the one hand I give her another three months, because she is the only person in the hospital who has counted anything and the pattern is ten months old. On the other hand I am a committee and I will read "no errors in three weeks" and stop reading, which is exactly what she does not want.'],
  ['Rasha', 'Which is why the report is not going to lead on the three weeks.'],
  ['Lubna', 'Then what does it lead on?'],
  ['Rasha', 'On the trolley. I have spent ten months building a case about a rota and there is a competing explanation sitting in a workshop with a broken wheel, and if I do not put it first somebody else will, in a meeting, in September, in front of eleven people.'],
  ['Ms Huda', 'That is a decision against your own case.'],
  ['Rasha', 'It is a decision against my own **argument**. It is not against my case, because my case was never that I am right. Admittedly I wanted it to be. In April I wanted the committee to say the blocks are dangerous and I wrote the limit paragraph anyway, and I have read it four times since and it is the only thing I have written this year that I would not change.'],
  ['Lubna', 'And if the trolley turns out to be the cause?'],
  ['Rasha', 'Then I have spent ten months counting the wrong thing accurately, which is still better than nine years of counting nothing. And I would rather find that out myself in September than have it found out about me in a room.'],
  ['Ms Huda', 'Say the last thing, because it is the one the class should take out of this book.'],
  ['Rasha', 'On balance: write the strongest thing against yourself first, and then nobody can use it against you — and if it turns out to be true, you were the person who said it.'],
]));
out.push(sp());
out.push(box('Language box – explaining both sides and saying where you stand', [
  'Give the **other side first** when you are the one with the case. A reader who finds your strongest objection in your own first paragraph reads the rest as evidence; a reader who finds it in the fourth reads the first three again, looking for what else you left out.',
  'Make the two sides the **same size**, as in 12.6, and give the other side its best argument, as in 12.2. Then say where you stand, as in 12.1, with a reason that is an event.',
  'Keep **what it does not show** separate from **what it shows**. That is 7.6, and it is the one sentence shape that has not changed in five units: _it does not show that long blocks cause errors; it shows that mine happened at the end of them._',
  'Name the **competing explanation** yourself and say what would settle it: _put a second trolley on that ward for a month and count that._ An explanation you can test beats an argument you can win.',
  '⚠ Do not confuse your case with your argument. Giving up an argument costs nothing if the case was never that you are right.',
  '⚠ And in a mediation, say which side **the person you are explaining to** will be on, and why. _I am a committee and I will read "no errors in three weeks" and stop reading._',
  '**Useful phrases:** on the one hand… on the other hand… on balance · it is a decision against my own argument, not against my case · ten months counting the wrong thing accurately · write the strongest thing against yourself first.',
  '**Pronunciation.** 🔊 **Track 12.14** Reading both sides aloud **fairly**: same volume, same pace, no sigh before the side you disagree with. Then _on balance_ slower and lower. Listen to four readings of the same two sides and mark the two that are read fairly; in the other two the listener knows the speaker\'s view before the second side begins.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in groups of three. A has one of the cases below and does **not** show it. A explains it: the claim, the evidence, the strongest objection **first**, both sides at the same length, where they stand, and what would settle it. B and C must each decide, and must each say which sentence decided them. Change roles with the other case.'));
out.push(table(['Case A – the night rota', 'Case B – the fifteen handsets'], [
  ['Claim: three-night blocks instead of five.', 'Claim: fifteen handsets came from one bad batch.'],
  ['Evidence: 7 errors in 9 months, all on nights 4–5.', 'Evidence: 15 repairs, one model, uneven adhesive under a lamp.'],
  ['Objection: one ward, one nurse, one counter — herself.', 'Objection: one counter, one city, seven months, no measurement.'],
  ['Competing explanation: one trolley since February.', 'Competing explanation: the two shops store them badly.'],
  ['What would settle it: a second trolley for a month.', 'What would settle it: the purchase dates of all fifteen.'],
  ['Where she stands: run to September, count the trolley too.', 'Where he stands: ask the supplier for a name, not for money.'],
], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two groups perform. **Listener task:** write the sentence that decided you. In almost every run it is the **objection**, said first by the person making the case — which is the finding this book ends on, and it is worth saying out loud.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Take the strongest claim you have made in this book — the thing you have been arguing for since April — and explain it to your partner **with the objection first**. Both sides the same length, where you stand, and what would settle it. They must ask: _what would make you wrong?_, _what else could explain it?_ and _what would settle it, and can you do it?_ Then swap.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class what your partner explained and what you decided:  _Rasha read the last line of her April paragraph again — it does not show that long blocks cause errors, it shows that mine happened at the end of them — and Ms Huda made Lubna the committee. Lubna said that on the one hand she would give her another three months, because she is the only person in the hospital who has counted anything and the pattern is ten months old; and on the other hand she is a committee, and she will read "no errors in three weeks" and stop reading. Rasha said that is why the report will not lead on the three weeks. It will lead on the trolley: she has spent ten months building a case about a rota and there is a competing explanation sitting in a workshop with a broken wheel, and if she does not put it first, somebody else will, in September, in front of eleven people. Ms Huda said that is a decision against her own case, and Rasha said it is a decision against her own argument — not against her case, because her case was never that she is right, admittedly though she wanted it to be. And if the trolley turns out to be the cause, she has spent ten months counting the wrong thing accurately, which is better than nine years of counting nothing, and she would rather find it out herself in September than have it found out about her in a room. Then the sentence Ms Huda asked her to repeat: write the strongest thing against yourself first, and then nobody can use it against you — and if it turns out to be true, you were the person who said it. So I decided to put the objection first in the thing I am writing, and to move my own evidence to the second paragraph._'));
out.push(p('**Listener task:** which objection decided you, and what would settle it?   ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (B1 Preliminary Reading Part 4)', 7));
out.push(p('Read the article and choose the correct answer: **A**, **B**, **C** or **D**.'));
out.push(box(null, [
  '**THE PAGE I SEAL EVERY SEPTEMBER**   by a teacher of English in Damascus',
  'In my first week with a new class I write a page about them. One line for each student: what I think they are like, and underneath it, a second line — the other way the same thing could be read. The quiet one may be shy, or may be the only person in the room who is listening. I seal the page and I open it in June.',
  'I have done this for twenty years, and every year I am wrong about roughly a third of them. People sometimes ask whether that is not rather a lot. It is, and it is also the whole point: a teacher who is right about everybody in week one is a teacher who has decided in week one, and students can tell.',
  'What has changed is not how often I am wrong. It is what I am wrong **about**. For most of those twenty years my mistakes were about ability — I thought somebody would find the grammar hard and they did not, or the other way round. This year, for the first time, all four of my mistakes were about something else entirely: whether somebody would **speak**. Not whether they could; whether they would.',
  'And the four I was wrong about are the four who have changed most, which is either a coincidence in a class of twelve or the most useful thing I have learnt about teaching adults, and I have no way of telling which.',
  'So I shall write the page again in September, and I shall go on telling the class in week two that I do it and that I am wrong about a third of them. Not because it is humble. Because of what one student told me in June: that the reason she came back in the second week was that she had heard a teacher say out loud that she gets people wrong.',
], C.lyellow, C.orange));
[
  '**1**  What is the writer\'s main purpose in the article?   **A** To give other teachers a method for judging a new class quickly.   **B** To describe what she has learnt from a habit of twenty years.   **C** To persuade other teachers to seal a page every September.   **D** To complain that adult classes are difficult to predict.',
  '**2**  Why does she say being wrong about a third of the class is "the whole point"?   **A** Because a third is fewer than most teachers manage.   **B** Because the second line on the page is usually the right one.   **C** Because students cannot tell whether she is right or not.   **D** Because a teacher who is right about everybody has already decided about them.',
  '**3**  What does she say is new this year?   **A** The kind of mistake she made, rather than the number.   **B** The number of mistakes she made.   **C** That she wrote a second line for each student.   **D** That she told the class about the page.',
  '**4**  What is her attitude to the connection between her four mistakes and the four students who changed most?   **A** She is certain the connection is real.   **B** She thinks it is probably a coincidence.   **C** She cannot tell which it is, and says so.   **D** She is sure that next year will settle it.',
  '**5**  What would be the best summary of the last paragraph?   **A** She will change the habit because it did not work.   **B** She will keep the habit, partly because admitting it out loud kept one student in the class.   **C** She will keep the habit in order to appear humble.   **D** She will ask her students to write the page instead.',
].forEach(t => out.push(p(t, { indent: 200, after: 50 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the paragraph that explains both sides of your own strongest claim and says where you stand — objection first (50 words or more).'));
out.push(p('**The claim.** ______________.   **The strongest thing against it.** ______________, and ______________, and I am the person who ______________.   **What it does not show.** It does not show that ______________. It shows that ______________.   **On the one hand** ______________. **On the other hand** ______________.   **On balance** I would ______________, and I would also ______________, because if ______________ then ______________.   **What would settle it.** ______________, and I ______________ do it myself.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([
  'The strongest objection in the first paragraph, not the fourth',
  'What it shows kept separate from what it does not show',
  'Two sides of the same length',
  '_On balance_ with a real decision, and what would settle it',
]));
out.push(stage('7', 'Write freely – exam practice (B1 Preliminary Writing Part 2)', 10));
out.push(box(null, [
  'Choose **one** of these two questions. Write **100 words or more**.',
  '**Question 1 — article.** You see this notice in an English-language magazine.',
  '_"**Have you ever changed your mind about something important?** Tell us what you believed, what changed it, and whether you would say so in front of the people who heard your first opinion. The best articles will be published."_',
  '**Question 2 — story.** Write a story that begins with this sentence:',
  '_"She put the strongest argument against herself in the first paragraph, and then waited."_',
], C.grey, C.navy));
out.push(...lines(7));
out.push(pb());
out.push(stage('✓', 'Unit 12 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  I ___ it will last, because somebody else is checking it.   a) am think   b) think   c) am thinking',
  '2  I see what you mean, ___ the date is the part that matters.   a) but   b) despite   c) therefore',
  '3  ___ it only ran for three months, it worked.   a) Despite   b) Although   c) Mind you',
  '4  It is one ward. ___, nobody has ever counted anything there before.   a) Even   b) Despite   c) Mind you',
  '5  I\'m ___ sure about that.   a) no   b) not   c) not to',
  '6  So ___ the page should start with a mistake?   a) you would say   b) would you say   c) do you would say',
  '7  On the one hand it is two days. On the ___ hand, it is in writing.   a) another   b) other   c) second',
  '8  ___, I would do both.   a) In balance   b) At the balance   c) On balance',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (B1 Preliminary Listening Part 4 style – interview).** 🔊 **Track 12.15** You will hear an interview with Siham Dibo, a teacher of mathematics. For each question choose the correct answer: **A**, **B** or **C**.'));
[
  '**1**  Why did she begin counting her own questions?   **A** A colleague suggested it.   **B** A pupil asked her something she could not answer.   **C** She had been criticised about her teaching.',
  '**2**  How many questions did she count, and over what?   **A** Forty-six, in five lessons.   **B** Forty-six, in one lesson.   **C** Sixteen, in a day.',
  '**3**  What worried her most about the count?   **A** That her questions were too easy.   **B** That she asked the same ones every year.   **C** What it showed about asking outside the classroom.',
  '**4**  What does she say the English course changed?   **A** Her written English.   **B** Her willingness to ask questions she could not predict.   **C** The way she teaches mathematics.',
  '**5**  What does she advise another teacher to do?   **A** Take an English course.   **B** Count something for one day.   **C** Ask a colleague for help.',
  '**6**  What does she say about the first evening of the course?   **A** She nearly did not go in.   **B** She was the only person there.   **C** A colleague had invited her.',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(dlg('Track 12.15  Audio script (read after the check)', [
  ['Interviewer', 'You teach mathematics, and this year you have been on an English course. What made you start counting your own questions?'],
  ['Siham', 'A lesson in April. A girl at the back asked me something I could not answer, and I realised that nothing like that had happened to me for about two years. So that evening I wrote down every question I had asked that day. Forty-six, in five lessons, and every single one of them was a question I already knew the answer to.'],
  ['Interviewer', 'Is that a criticism of teaching?'],
  ['Siham', 'No. That is what a teacher\'s questions are for. What worried me was outside the classroom: in four months I had asked one colleague for one thing, once.'],
  ['Interviewer', 'And what did the course change?'],
  ['Siham', 'Not my English, although that is better too. In a room of eleven strangers I had to ask somebody a question every week whose answer I could not predict, and after about six weeks it stopped frightening me. In April I asked a colleague for forty minutes of her time and she said yes in nine seconds, and I had spent four months not asking.'],
  ['Interviewer', 'What would you say to another teacher thinking of doing something like this?'],
  ['Siham', 'Count something. Not for a week — for one day. The questions you ask, the times you are interrupted, the minutes you spend waiting. The counting is what changes your mind, not the course.'],
  ['Interviewer', 'And the hardest part of it?'],
  ['Siham', 'Being the oldest person in the room and the worst at the thing in it. I am forty-eight. On the first evening I stood in the corridor outside the room for about four minutes and I nearly did not go in, and the only reason I did is that somebody held the door open and then I could not walk away.'],
  ['Interviewer', 'Will you go again next year?'],
  ['Siham', 'Yes. And I have asked two colleagues to come with me, which is the first time in twenty-four years that I have asked anybody to do anything.'],
]));
out.push(p('**C  Writing.** Write the balanced paragraph (100+ words) on this question: **has this course changed what you do?** Both sides the same length, _on balance_ with a real decision, and one sentence saying what is missing from your own account.'));
out.push(...lines(5));
out.push(sp());
out.push(box('I can… (Unit 12)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ give an opinion and support it with a reason that is an event',
  '☐ agree with part of what somebody says and mark which part',
  '☐ disagree without saying _you are wrong_',
  '☐ concede the strongest point against my own case',
  '☐ ask an open question and build on the answer with _so would you say_',
  '☐ reach a decision with somebody in two minutes — or say that we have not',
  '☐ write both sides at the same length and say where I stand',
  '☐ explain somebody else\'s case with the objection first',
], C.lblue, C.navy));
out.push(sp());
out.push(box('NEXT: THE END-OF-BOOK TEST', [
  'You have finished **Book 1** — twelve units and eighty-four cycles. The next pages are the **End-of-Book Test**: Reading, Writing, Listening and Speaking, in the format of the **Cambridge B1 Preliminary** examination, out of 100 marks. Every part of the Speaking paper has now been taught: Part 1 in 1.3, Part 2 in 9.7, Part 4 in 6.7 and Part 3 in **12.5**.',
  'How to prepare: go through the **"I can…"** box at the end of every unit and find the lines you ticked 😐. Those are your five minutes of revision each evening this week — not the whole book.',
  'And the four envelope pages are yours now. Keep them. **Book 2** opens in Unit 13 with a page written on the first evening of this course, and the question there is not what you can do in English. It is what you now write down before you know what it is for.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 12 · Student\'s Book');
