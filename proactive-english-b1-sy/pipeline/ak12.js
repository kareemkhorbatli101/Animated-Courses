// Proactive English B1 · Syria Edition · Book 1 · Unit 12 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, sp, box, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);

out.push(h1('Unit 12  Opinions and Agreement — Answer Key'));
out.push(p('_Proactive English · B1 · Book 1 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer or a **full sample**, including brainstorms, free speaking, reports, peer-review slips and homework.',
  '**This is the last unit of Book 1 and it is built to be read in one piece.** 12.1 puts a reason after an opinion, 12.2 and 12.3 give away part of your own case, 12.4 asks for somebody else\'s, 12.5 decides with them, 12.6 writes both sides, and 12.7 puts the strongest objection first. Taught as six separate functions it is a competent unit; taught as one argument it is the point of the book.',
  '**12.3 is the cycle students resist.** Conceding feels like losing until they have watched somebody do it, which is why the whole of 12.3 Stage 2 is two students giving away their best material in public and Umm Kinan naming what it cost them: nothing. Do not shorten that cycle to make time.',
  '**12.5 is the last exam teaching point in the book.** B1 Preliminary Speaking Part 3 — two candidates, one page, two to three minutes, a decision. After it, every part of the Speaking paper has been taught, which the End-of-Book Test assumes. The thing to say out loud, more than once: **you do not have to agree.**',
  '**Before the lesson that contains 12.6, you need the four envelopes.** The 1.1 introductions pinned up in Room 14, the 1.2 vote paper, the sealed 1.4 notes, and each student\'s 3.3 and 3.6 homework. The Unit 11 NEXT box asked for them; check again in the lesson before. A student who has lost one rewrites it from memory and says so, which is a usable answer — and in fact produces the most interesting page in the room, because the two versions can be compared.',
  '**And write your own 1.4 page before you open theirs.** Ms Huda reads hers out in 12.6. If you have not sealed one, say so and say what you would have written; a teacher who asks eleven adults to be wrong in public and has nothing of their own on the table is asking for something they are not giving.',
], C.lblue, C.navy));

// ===================== 12.1 =====================
out.push(pb());
out.push(h2('12.1  I\'d say, and this is why'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open — six opinions this class has given since Unit 1. Collect them as you go through the book, in the margin of your own copy; by Unit 12 you will have thirty or forty, and the ones to use are the four or five that were given with no reason at all. Read them back without naming anybody.'));
out.push(A('**b** **1** opinion   **2** argument   **3** opinion   **4** argument'));
out.push(A('Items 2 and 4 are the same opinions as 1 and 3 with a second half attached. Put the four on the board in pairs so the class sees that nothing was added except a reason, and that the two with reasons can be argued with.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – giving opinions with no reason attached.'));
out.push(A('**b** **1** That you can disagree with an argument and you cannot disagree with a preference, you can only have a different one.   **2** That the fault book will last because the manager asked Mazen for a copy of it in April, so it is not his any more — and Ms Huda says it is a good reason because it is **about something that happened**, with a date, and not about how anybody feels.'));
out.push(NOTE('_That is a vote, not an answer_ is the sentence to use for the rest of the course, and it is kinder than it looks: it tells a student that what they said was not wrong, only unfinished. Say it the first four or five times anybody gives you a bare opinion, and then stop having to.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _I think the fault book will still exist in December, because the manager asked for a copy of it on 2 April and now expects to see it._',
  '**2** _I don\'t think the forms will be changed, because nine equipment forms have come back since February and all nine were signed and filed with the same box empty._',
  '**3** _I\'d say she was right to ask, because she asked for one thing and got a three-month trial out of a committee that had refused three things in nine months._',
  '**4** _In my view the definitions page should be read first, because a man who had run that shop for nineteen years made a rule stricter than the ministry\'s out of a page he had not read._',
  '**5** _I don\'t think I will telephone anybody, because I have not made a telephone call in English in two years of answering questions in writing._ (Item 5 is Jad\'s April prediction, and 12.6 is where he finds out.)',
]));
out.push(A('Every one of the five reasons is an event with a date or a number in it. Insist on that in this cycle and the rest of the unit is easier: by 12.3 the class is conceding facts rather than feelings, and by 12.7 the objections they raise against themselves are things somebody could go and check.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Writing things down changes what happens.',
  '**B:** I\'d say it does, but only when somebody else sees it, because Mazen kept the fault book for seven months with nobody looking at it and nearly stopped twice, and it was the manager asking for a copy in April that made it permanent.',
  '**A:** Is that a reason or a feeling?',
  '**B:** A reason — the manager asked on 2 April.',
  '**A:** And what would change your mind?',
  '**B:** A record somebody has kept for two years that nobody has ever asked to see. I do not know of one.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('About half the reasons in a first run are feelings dressed as reasons: _because people are like that_, _because it is normal here_, _because nobody cares_. The test to give the class is one question — **could I go and check it?** — and the cure is to ask for a date. A speaker who cannot give one usually finds, out loud, that they have an impression rather than a reason, which is a useful thing to discover in a classroom rather than a meeting.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I think the night book will still be kept in December, because Sister Nasr asked for her own sheet on 8 June. Until then it was mine and I would have stopped when the trial ended._',
  '**b** _What would make me wrong: if she stops filling it in when her own trial finishes in September. I would know within a fortnight._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda asked whether the things we started in April will still be happening in December, and Omar said no, and she told him that was a vote and not an answer: she has been writing down what this class says for eleven units, and of forty-one opinions, twenty-nine had no reason attached. So Omar said it again with the reason — no, because every one of them is something a person decided on their own and nobody else is checking — and he said the difference is that you can disagree with an argument and you cannot disagree with a preference, you can only have a different one. Jad said some will last and some will not, and the ones that last are the ones somebody else has started using: Mazen started the fault book for himself in September and in April the manager asked him for a copy, so it is not his any more, and it will still exist in December, whereas Jad\'s own counting is still his and nobody has ever asked him for it. Ms Huda said that was the best answer this class has given in eleven units, and not because he is right: because the reason is about something that happened — a manager asking for a copy — and not about how anybody feels. Tareq said so an opinion with a date in it, and she said yes, and that from now on nobody gives her one without the second half.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am agree. → ✓ I agree.   ✗ I am think it will last. → ✓ I think.   ✗ In my opinion… in my opinion… in my opinion. → ✓ once in a paragraph.   ✗ I think that is depend on the situation. → ✓ it **depends** on — and then say on what.   ✗ an opinion with no second half → ✓ _because_, and an event.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** The reason he gives is that on 2 April the manager asked him for a copy, so the book stopped being a notebook belonging to one repairer. The reason he rejects is that it found the bad batch — _although it did_.'));
out.push(A('**2** Asking the other two counters to keep a book is not enough: somebody has to ask them for a copy of it in April.'));
out.push(A('**3** That the book is why the batch was found. Fifteen handsets of one model would have been noticed eventually, and he cannot prove it would not have been noticed sooner by a repairer with no book at all.'));
out.push(A('The model answers a question the manager did not ask — _if you want the other two counters to keep one, asking them is not enough_ — and that is the paragraph that gets acted on. Teach students to look for the decision behind the question: a manager asking whether a record is worth keeping is a manager wondering how to get three of them kept, and answering only the words is how good advice goes nowhere.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**IS THE NIGHT BOOK WORTH KEEPING AFTER SEPTEMBER?** · asked by the ward manager · answered in writing · R. Barakat',
  'You asked me at the handover whether there is any point in going on with it after the trial, and I would rather answer it on paper.',
  '**My view.** It is worth keeping, and I am fairly sure of it, but not for the reason you might expect.',
  '**The reason.** It is not because it produced the pattern, although it did. It is because on 8 June Sister Nasr asked for a sheet of her own. Until that morning the book was mine, and I would have stopped in September when the trial ended; there are now two people entering times and one of them did not ask my permission to start.',
  '**What that means for the question you actually asked.** If you want the day staff to keep one, telling them to will produce three weeks of entries. Ask one of them for a copy of it in November.',
  '**And what I am not claiming.** I am not claiming the book is why there have been no errors since 1 June. Three weeks is three weeks, the ward has had one trolley since February, and I cannot separate the two.',
]));
out.push(S('Stage 7 · Write freely (sample, 168 words)'));
out.push(SAMPLE([
  '**WILL THE FAULT BOOK STILL BE KEPT NEXT YEAR?** · asked by the manager · answered in writing · M. Hariri',
  'You asked me whether the book is worth keeping and I would rather answer it on paper than at the counter.',
  '**My view.** It will still be kept next year, and I am fairly sure of it, but not for the reason you might expect.',
  '**The reason.** It is not because it found the bad batch, although it did. It is because on 2 April you asked me for a copy of it. From that day it stopped being a notebook belonging to one repairer and became a thing somebody else expects to see — and the three weeks I did not write in it were the three weeks before that.',
  '**What that means for the question you actually asked.** If you want the other two counters to keep one, asking them to is not enough: somebody has to ask them for a copy of it in April. I kept mine for seven months with nobody looking at it and I nearly stopped twice.',
  '**And what I am not claiming.** I am not claiming the book is why the batch was found. Fifteen handsets of one model would have been noticed by somebody eventually, and I cannot prove that it would not have been noticed sooner by a repairer with no book at all.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"The three weeks I did not write in it were the three weeks before that." A gap in his own record used as evidence, which is the hardest thing on the page._   ✓ _"People do not keep records unless they are made to" — a feeling, and the page has two dates in it, so it does not need one._   ? _What are you not claiming?_ — the last paragraph answers it, and it is the paragraph that makes the first three believable.'));
out.push(S('Stage 7R · Share'));
out.push(A('Count both. Reasons with dates in them: usually two-thirds of the room by this unit, which is the eleven units working. Pages that say what they are not claiming: fewer, and it is the newer habit — 8.3 taught it, 12.3 teaches it again, and it is the single thing that separates a page a manager acts on from a page a manager discounts.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['**Will you keep going to the English course next year?** — asked by my wife. **My view.** Yes, and I am fairly sure. **The reason.** Not because my English is better, although it is. Because on 14 May I answered a question on the forum in four lines instead of eleven and the man wrote back and said that was the clearest answer he had had. That has happened three times since. **What that means for the question you actually asked.** You asked about the money. The money is the same and the three evenings are the same, and what has changed is that I am now the person people reply to. **What I am not claiming.** I am not claiming the course did it. I wrote nine hundred answers before April and some of that is just the nine hundred.']));

// ===================== 12.2 =====================
out.push(pb());
out.push(h2('12.2  Up to a point'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Make two of the six statements plainly wrong — _nobody in this room has ever kept a record_, _writing things down has changed nothing_ — because the ban on _no_ is easy when the statement is arguable and hard when it is false. Count the students who reach for _no_ first; in a first run it is more than half, and saying the number out loud is the cycle\'s whole introduction.'));
out.push(A('**b** **1** half and half   **2** agreeing   **3** disagreeing   **4** half and half   **5** half and half'));
out.push(A('Items 1, 4 and 5 are three different ways of agreeing with part: _up to a point_ marks a limit, _I see what you mean, but_ concedes and then turns, and _that is true of the first one_ marks exactly which part. Most disagreements in English are one of those three and not a flat _no_.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – whether to telephone the depot or write to it.'));
out.push(A('**b** **1** She concedes the whole of his case for the first hour — _I see what you mean, and for the first hour I think you are right_ — and then disagrees on the ground that a call at six in the morning is a conversation with whoever is near the telephone, and in May that was nobody.   **2** That _you are wrong_ ends the conversation and leaves you with the opinion you came in with; and that Lubna did not win — Tareq changed what he does, which is the only thing a disagreement is for.'));
out.push(NOTE('The exchange is designed to be as sharp as any in the book while containing no rudeness at all, and the class should be asked to notice that before anything else: nobody says _no_, nobody says _you are wrong_, and Tareq changes his practice of nine years inside two minutes. The last four lines are the ones to read twice. A student who believes that politeness is weakness has never watched a polite person win an argument, and this is the cycle that shows it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Up to a point — nobody reads it the same morning. But it exists in September, which is a different question._',
  '**2** _I see what you mean, and for the first hour you are right. But the second time it happens somebody asks who was told._',
  '**3** _That is true of the records nobody asks for. It is not true of the one the manager asked for a copy of in April._',
  '**4** _I take your point, because three asks are three chances. But I asked for one thing in May and got a three-month trial, and I had asked for three in February and got nothing._',
  '**5** _Up to a point. People here do not do things in writing, and the two people in this room who started doing it have both had something agreed._',
]));
out.push(A('Each answer names **which part** is true. That is the one thing to insist on: _up to a point_ on its own is a shrug, and _up to a point — nobody reads it the same morning_ is an argument. Make the class finish every half-agreement with the part.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Nobody reads anything you send.',
  '**B:** I see what you mean, and nobody reads it the same day is true. But the email is still there in September, because in May I made a telephone call to an empty office and three weeks later I was asked who had been told and had nothing to show.',
  '**A:** Up to what point?',
  '**B:** Up to the first hour. After that the question stops being who acts and becomes who was told.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The finding is reliable and worth writing on the board: **the strongest disagreements in the room are the ones where the agreement is longest.** A speaker who concedes two sentences is heard, and a speaker who concedes nothing is argued with for the rest of the conversation. It is also the whole mechanism of 12.7, five cycles early.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _My brother says the office will never give us the medicine in writing and that asking makes them slower. He is right that it makes them slower — it took eleven days in March instead of four. Up to the point where somebody denies having said it, and in February somebody did._',
  '**b** _My partner made her opponent\'s case weaker than it is. She said her head of department "does not care about the pupils", and what he actually says is that the printed scheme comes from the directorate and the department cannot alter it, which is true and is not the same thing at all._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Tareq said that if the road is closed you telephone, you do not write, because by the time anybody has read an email the lorries are on the road. Lubna said she saw what he meant and that for the first hour he is right — but that a telephone call to a depot at six in the morning is a conversation with whoever happens to be standing near the telephone, and in May that was nobody. She would do both, and she would say so in the call. Up to a point his way is faster, and the part where it stops being faster is the second time it happens: the first time the only thing that matters is the lorries, and the second time somebody is going to ask who was told, and a call at six in the morning is not an answer to that question. Omar said he was not sure, because nobody at his office reads anything, and Lubna said then nobody reads anything and the email exists, which is two things, and the second is still true in September. Then Ms Huda said to notice what neither of them had said: nobody had said "you are wrong", and the disagreement was as sharp as any we have had. Tareq said he nearly said it, and she said everybody nearly says it, and that it ends the conversation and leaves you with the opinion you came in with. He said he is going to do both from now on, which means she won — and Ms Huda said she did not win: he changed what he does, which is the only thing a disagreement is for.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ I am not agree. → ✓ I don\'t agree.   ✗ Yes, but… yes, but… yes, but. → ✓ say **what** you agree with.   ✗ You are wrong. → ✓ I\'m not sure about that — and then the reason.   ✗ Up to a point. _(and nothing else)_ → ✓ name the part.   ✗ I disagree with you about that, this is wrong. → ✓ one disagreement, softened, with a reason.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** All of it, for the first hour — and he says he has been making the call for nine years because of it.'));
out.push(A('**2** He called an empty office at 06.10. Nobody was told, four lorries went out, nobody knew until 09.40, and three weeks later he was asked who had been told and had nothing to show.'));
out.push(A('**3** A form, a procedure or a new system — and he is not asking anybody to read the email at six in the morning. He is asking that it exist.'));
out.push(A('_What you say, as I understand it_ is the most useful paragraph heading in the book, and it is worth setting as a one-off exercise on its own: write your opponent\'s case so well that they would sign it. Two things happen. A reader who finds their own argument properly put reads the next paragraph — and about a third of the class discover, writing it, that the case is better than they had been treating it, which is the question 7R asks them to count.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**To:** my brother   **Subject:** The medicine office, and one change I am asking for',
  'We have disagreed about this twice and I want to put my position in writing, including the part of yours that I think is right.',
  '**What you say, as I understand it.** That asking the office for anything in writing makes them slower, that in March it took eleven days instead of four, and that a man who makes trouble is a man whose file goes to the bottom. I agree with all of that, and the eleven days happened and I was the one who waited them.',
  '**Where I think it stops being true.** On 4 February a clerk told us a thing had been approved and in April a different clerk said no such thing had been said. There was nothing on paper either time, and the person who paid for that was you.',
  '**What I am asking for.** Not that we stop going in person. That when somebody tells us something, I send one line that evening saying what I understood them to say, which takes two minutes and asks nothing of them.',
  '**What I am not asking for.** I am not asking for a complaint, a lawyer or a different clerk, and I am not asking you to stop going on Tuesdays. I am asking that what we are told exist somewhere other than in our heads.',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**TO: the depot manager · CC: the night supervisor · 6 June**',
  '**Subject:** The morning of 12 May, and one change I am asking for',
  'You and I have disagreed about this twice and I want to put my own position in writing, including the part of yours that I think is right.',
  '**What you say, as I understand it.** That when a road closes the only thing that matters is the lorries, that a telephone call takes forty seconds and an email takes four minutes, and that in an emergency a man writing an email is a man not making a call. I agree with all of that for the first hour, and I have been making the call for nine years because of it.',
  '**Where I think it stops being true.** On 12 May I made the call at 06.10 to a telephone in an empty office. Nobody was told, four lorries went out, and the first anybody knew was at 09.40. Three weeks later I was asked who had been told and I had nothing to show, and the only honest answer was that I had telephoned somebody who was not there.',
  '**What I am asking for.** Not that we stop telephoning. That we do both, and that the call says the words "I am sending this in writing as well", which takes four seconds.',
  '**What I am not asking for.** No form, no procedure, no new system, and I am not asking anybody to read the email at six in the morning. I am asking that it exist.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have been making the call for nine years because of it." He gives the other side his own nine years, which no reader can argue with._   ✓ _"You have always refused to put anything in writing" — that is a verdict, not his case, and it makes him weaker than he is._   ? _What are you not asking for?_ — four seconds, no form, no system; and the last line is the one that gets it agreed.'));
out.push(S('Stage 7R · Share'));
out.push(A('Hands for the first question, then the second, which is the one that matters: how many found their opponent\'s case better than they had been treating it? A third of the room, reliably. That is not politeness arriving — it is information arriving, and it is the strongest argument this book makes for writing the other side out in full before you answer it.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['My head of department\'s case, as he would write it: the printed scheme is issued by the directorate, it is the same for every school in the governorate, it has been in place for eleven years, and a department that teaches a different order is a department whose pupils sit a paper in June written to somebody else\'s sequence. If it goes wrong, the person answering for it is me and not the teacher who moved it. — Up to a point I agree with all of it, and the point where I stop is June 2025, when chapter 7 was worth fourteen marks and my class met it in the last fortnight of the year.']));

// ===================== 12.3 =====================
out.push(pb());
out.push(h2('12.3  Admittedly'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Write only the **second halves** on the board, with no names and no claims attached to them, and leave them there for the whole lesson. A board covered in nine true facts that weaken nine cases is the best thing a class can look at while writing Lesson B.'));
out.push(A('**b** **1** _although_ / _even though_ / _though_   **2** _Mind you_ (or _That said_)   **3** _Even though_ / _Although_   **4** _Mind you_ (or _Admittedly_, if the speaker is conceding; _mind you_ if they are adding a point in their own favour)'));
out.push(A('Items 2 and 4 both take _mind you_, and that is worth stopping on: _mind you_ adds a second thought that cuts **against the direction the sentence was going**, which is why it works after a concession to pull back the other way. _Admittedly_ goes the other way — it concedes against your own case — so the two are not interchangeable, although both are "second thoughts".'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** **A** – that one of the nine conditions he crossed out was reasonable, and he agrees with it.'));
out.push(A('**b** **1** That it is not the post, not a title, two days a month only, and that anybody reading his February page would say he asked for a job and got two days — and, _mind you_, that he does not know whether it will be renewed and his February page had no one-year limit in it.   **2** That a speaker who concedes nothing is believed about nothing, because the listener spends the whole conversation looking for the hole; and that a speaker who hands over the hole is listened to.'));
out.push(NOTE('Umm Kinan\'s answer to Ms Huda\'s question is the cycle in one line — _it has cost them nothing, and I believe the rest of what they say more than I did ten minutes ago_ — and it has to come from a student, not from you. If nobody says it, ask the room directly: _has either of them lost anything?_ Students raised to treat an argument as a thing you win will say yes the first time and change their minds while saying it.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _The trial worked. Admittedly it is one ward, one nurse and three weeks, and the ward has had one trolley since February, which I cannot separate from the rota._',
  '**2** _The fault book found a bad batch. Admittedly fifteen handsets of one model would have been noticed by somebody eventually, and I cannot prove it would not have been noticed sooner by a repairer with no book._',
  '**3** _Writing to the depot was right. Although it is four minutes against forty seconds, and in a real emergency those four minutes are the lorries._',
  '**4** _The definitions page gave me a power. Mind you, it also gave me a condition I had crossed out and agree with, and I was the one who crossed it out._',
  '**5** _This course has changed what I do. Admittedly I cannot separate it from the nine hundred answers I had already written, and some of what I am calling change is just the nine hundred._',
]));
out.push(A('Every one of the five concedes the **strongest** available point, which is what the cycle asks for. The test to apply out loud: if a hostile reader would have raised this objection, it is a real concession; if they would not have bothered, it is decoration. Item 5 is the one to keep for 12.6, where the class writes the same concession about itself with the envelopes open.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** The record changed what happened.',
  '**B:** The record changed what happened. Admittedly, the committee said in so many words that it was agreeing to the trial and not to the explanation, so what the record changed is a rota and not anybody\'s mind.',
  '**A:** Was there a harder one?',
  '**B:** Yes — that I wrote the record and I also wrote the minutes.',
  '**A:** Say it with _although_.',
  '**B:** Although I kept the record and wrote the minutes of my own item, the pattern in it is ten months old and was never contradicted by anybody who had counted anything.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Most first-run concessions are trivial, and they are trivial in a particular direction: students concede things about **themselves** (_admittedly my English is not very good_) rather than about their **case**. Name that in the feedback. A concession about your English is not a concession; it is an apology, and the examination, the meeting and the reader all discount it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I have been arguing since April that the fifteen handsets came from one batch. Admittedly I have never measured the adhesive, I have no purchase dates for four of the fifteen, and both shops store stock in a room with a window. I have not said that to the manager, and I have said the rest of it to him three times._',
  '**b** _The one my partner is avoiding: she has not said out loud that she is the only person counting, and that she wants the answer to be the rota, because she asked for the rota._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda said everybody has been arguing for something since April, and that today we give the true thing that weakens our own case. Bassel said he crossed nine of the eleven conditions out and has said in this room that all nine were unreasonable — and admittedly one of the nine was not. Condition four says the finished work must not leave the premises without a signed order, and he crossed it out because of the yard, and the definitions page says the yard is the premises, so the condition was never about the yard at all. It was about the street, and about the street it is right. So he crossed out a condition he agrees with, because he had not read the page before it; eight unreasonable conditions is still eight, mind you, and it is enough. Then Fares: September is two days a month, written, for a year, and admittedly it is not the post, it is not a title, and anybody reading his February page would say he asked for a job and got two days. And even though it is two days, it is the first thing he has been paid for that he would have done anyway, and he told his own company before he signed. Mind you, he does not know whether they will renew it, and his February page did not have a one-year limit on anything. Then Ms Huda asked what conceding had cost the two of them, and Umm Kinan said nothing — and that she believes the rest of what they say more than she did ten minutes before. Ms Huda said that is the cycle: a speaker who concedes nothing is believed about nothing, because the listener spends the whole conversation looking for the hole, and a speaker who hands over the hole is listened to.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Although it ran three months, but it worked. → ✓ one or the other.   ✗ Despite it only ran for three months. → ✓ _although it only ran_ / _despite the fact that_.   ✗ Mind you, _(in a letter)_ → ✓ _admittedly_ · _that said_.   ✗ Admittedly my English is not very good. → ✓ a concession is about your **case**.   ✗ a trivial concession → ✓ the one a hostile reader would raise.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** Because a limitation found by the reader is a hole, and the same limitation found on the first page is a method. _This page goes in front of the figures, not after them._'));
out.push(A('**2** The one trolley since February: a drug round written for two trolleys will be late whatever the rota says, and she cannot separate the two. She raises it herself because anybody arguing against her would start there, which is why she has started there.'));
out.push(A('**3** A quarter in which the errors fall on first and second nights — and she says she will write it if it happens, because she asked for the trial on the basis that somebody would count it honestly and she is the somebody.'));
out.push(A('Three different words doing three different jobs on one page is the grammar of the cycle and it is worth marking in the margin with the class: **_admittedly_** concedes the **size** of the claim, **_although_** concedes a **competing explanation**, and **_even though_** concedes the **weakest part of her own support** — Sister Nasr\'s fourteen years, which point her way and are not data. Most students use one of the three for everything.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**FIFTEEN HANDSETS · THE LIMITS OF WHAT I AM CLAIMING** · M. Hariri',
  'This page goes in front of the list, not after it.',
  '**What I am claiming.** That fifteen handsets of one model, repaired at this counter between 3 September and 2 April, all have an uneven adhesive line visible under a lamp, and that all fifteen were bought from two shops between January and March.',
  '**Admittedly, it is one counter.** One counter, one city, seven months, and the only repairer who looked at them is the one making the claim. Nobody else in Damascus is keeping a book, which is why these figures exist and also why there is nothing to compare them with.',
  '**Although the adhesive line is in all fifteen, it is not the only explanation.** Both shops keep stock in a room with a window, and heat does to glue what a bad batch does to glue. I cannot separate the two, and the supplier\'s first answer will be the window.',
  '**Even though four customers came back twice**, I have no purchase date for four of the fifteen and I have written "about January" for two of them, which is not a date.',
  '**What would make me wrong.** Fifteen units from a different supplier with the same line. If I see three of those I will write it down and tell you.',
]));
out.push(S('Stage 7 · Write freely (sample, 174 words)'));
out.push(SAMPLE([
  '**NIGHT ROTA TRIAL · THE LIMITS OF WHAT I AM CLAIMING** · R. Barakat · for the September report',
  'This page goes in front of the figures, not after them.',
  '**What I am claiming.** That on this ward, between September and May, seven errors were made by one nurse and every one fell on the fourth or fifth night of a block, and that in the three-night trial from 1 June there have been none.',
  '**Admittedly, it is one ward.** One ward, one nurse, three weeks of trial against nine months of record, and I wrote both. Nobody has ever counted errors on this ward before, which is the reason the figures exist and also the reason there is nothing to compare them with.',
  '**Although the pattern is exact, it is not the only explanation.** The ward has had one trolley since February, and a drug round written for two trolleys will be late whatever the rota says. I cannot separate the two, and anybody who wanted to argue against me would start there, which is why I have started there myself.',
  '**Even though Sister Nasr\'s fourteen years point the same way**, she joined on 8 June, her entries are kept separately at her own request, and fourteen years of nobody counting is not fourteen years of data.',
  '**What would make me wrong.** A quarter in which the errors fall on first and second nights. If that happens I will write it, because I asked for this trial on the basis that somebody would count it honestly and I am the somebody.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Fourteen years of nobody counting is not fourteen years of data." She gives away the one piece of support everybody else in the room thought was her strongest._   ✓ _"Admittedly I am new to this kind of writing" — about you, not about the case; delete it._   ? _What would make you wrong, and have you written it where somebody will see it?_ — she has: it is the last paragraph of the first page, and it is addressed to a committee that could use it against her.'));
out.push(S('Stage 7R · Share'));
out.push(A('Read the lines, then ask the April question and let the silence answer it. Almost nobody could have written a _what would make me wrong_ paragraph in April, and most of the room will say so. It is the clearest single measure of eleven units, better than any test, and it is worth telling them that the examination cannot measure it at all.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the limits page to the ward manager before the figures, as it says. She read it twice and said one thing: "You have written down the argument I was going to make." Then she asked who else knew about the trolley, and I said nobody has ever written it down, and she said she would ask for a second trolley for a month so that the September report could say which it was. That is the first time anything I have written has produced a thing I did not ask for.']));

// ===================== 12.4 =====================
out.push(pb());
out.push(h2('12.4  What do you think?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. Nearly everybody finds **B** harder, and the reason is worth naming: asking questions for ninety seconds without giving an opinion is the ordinary condition of a doctor, a teacher, an interviewer and a manager, and almost nobody has ever practised it. Ask which was harder before you ask anything else.'));
out.push(A('**b** Actually asking for a view: **2**, **3** and **5**. Not **1** and not **4** — both contain the answer and both will be answered with agreement.'));
out.push(A('Item 4 — _I mean, writing is better, isn\'t it?_ — is the one to read aloud twice. It is how most people ask most of their questions, it is not rude or lazy, and it reliably produces nothing.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Umm Kinan asks Yara — _you have said the least in this room and you have been here every week since September. How do you see it?_'));
out.push(A('**b** **1** That nobody has ever asked her that in a room with eleven people in it.   **2** That she has taught for twenty-four years and asked thousands of questions, and almost all of them were questions she already knew the answer to — and that the forty minutes she asked a colleague for in April was the first time in four months she asked one she did not.'));
out.push(NOTE('Umm Kinan\'s _I know. That is why I asked_ is three seconds long and it is the most useful teaching in the cycle. She does not soften the fact that Yara has said least; she names it, gives it as the reason for the question, and then stops talking. The class should be made to say what would have happened to a general _does anybody else want to add anything?_ — which is what the room has been doing for eleven units, and which is answered by nobody, ever.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _What do you think?_ → _So would you say it depends on who is going to read it?_',
  '**2** _How do you see the trial?_ → _So would you say three weeks is too early to tell?_',
  '**3** _Who reads the definitions page, in your experience?_ → _So would you say nobody does until something goes wrong?_',
  '**4** _What would you have done that morning?_ → _So would you say you would have telephoned and left it there?_',
  '**5** _How was it?_ → _So would you say the pleasing part was the nine seconds rather than the forty minutes?_',
]));
out.push(A('Item 5 is the hardest and the most human: _you must have been pleased_ puts a feeling in somebody\'s mouth, and _how was it?_ lets them choose their own. Students over-polite their questions into statements, and the cure is length — four words is usually enough.'));
out.push(S('Stage 3 · Practise (sample – group of three)'));
out.push(SAMPLE([
  '**A:** Something at work nobody has ever asked me about — how the night book actually gets filled in.',
  '**B:** How do you see it from where you are, at four in the morning?',
  '**A:** Honestly, it gets filled in at the end, all at once, and I write the times from memory.',
  '**B:** That is a good point — so would you say the book would be better with a column that cannot be filled in later?',
  '**A:** …Yes. And I have never said that to anybody, including myself.',
  '**C:** Longest silence: six seconds, after the second question. Questions with the answer inside them: none.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('The silences get **longer** as the questions get better, which is the opposite of what the class expects, and it is the measure to use in the feedback. A four-second silence after a question is the sound of somebody thinking about an answer they have not already got; a question answered instantly was usually a question with the answer in it.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _I asked my partner how she sees the page for September, and then: so would you say it should have the things that went wrong in it? And then: so would you say somebody should write theirs first, so that the others can? I gave no opinion of my own and it was the hardest nine minutes of the course._',
  '**b** _What I did not expect: she said the page should be written by the person who nearly stopped coming, and she meant herself, and I have sat next to her since September._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda gave us eight minutes and one question: should the page for the September group say what went wrong in this room, or only what went right? Jad said both, because a page with nothing wrong in it is a page nobody believes. Then Umm Kinan asked whether she could ask Yara, and said: you have said the least in this room and you have been here every week since September — how do you see it? Yara said nobody has ever asked her that in a room with eleven people in it, and Umm Kinan said she knows, and that is why she asked. Yara said what went wrong, only what went wrong, or at least first — because the thing that kept her in the room in the second week was not anybody being good at English, it was Ms Huda saying out loud that she is wrong about a third of her first impressions every year. Umm Kinan built on it: so would you say the page should start with something a teacher got wrong? And Yara said it should start with something anybody got wrong, and she would put hers in it, because twenty-six years is a long time to be afraid of four sentences. Then Ms Huda asked Umm Kinan to say what she had done, so the class would have the method and not only the answer: she asked the person who had not spoken, she asked an open question with no answer inside it, and she gave Yara\'s own words back as a question. And she said that in twenty-four years almost all her questions were ones she already knew the answer to, and that the forty minutes she asked for in April was the first time in four months she asked one she did not. The woman said yes in nine seconds.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ Don\'t you think it is better in writing? → ✓ What do you think?   ✗ What is your opinion about that for you? → ✓ four words.   ✗ Does anybody want to add anything? → ✓ ask one person, and say why them.   ✗ asking and then answering it yourself → ✓ count four seconds.   ✗ So you agree with me? → ✓ _So would you say…?_ with **their** words in it.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That almost all of them had the answer inside them, because that is what a teacher\'s questions are for — and she does not apologise for it.'));
out.push(A('**2** Because the moment a page of questions contains the writer\'s answer, every reply is a reply to the answer and not to the question.'));
out.push(A('**3** Rewrite it — _if I have put the answer inside any of these four questions, say so and I will rewrite it._'));
out.push(A('Question **4** — _what is the thing in this department that nobody ever asks you about?_ — is the one to point at. It is the question she says she should have asked in September, and in a first run it produces more than the other three together. Set it as a homework in any class, in any subject, and read what comes back.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**TO THE THREE OF YOU IN THE SHOP · FOUR QUESTIONS AND NO ANSWERS FROM ME** · B. Khoury · 11 June',
  'I have run this shop for nineteen years and I have asked, at a guess, a hundred thousand questions in it. Almost all of them had the answer inside them, because that is what the questions of a man who owns the place are for.',
  'These four do not. I am not going to put my own view in this note at all, and I would like a sentence from each of you by Thursday.',
  '**1** I told you in May that leaving the building includes the yard, and the definitions page says the yard is inside the premises, so I was wrong. **How do you see it from where you are** — standing at a press at seven in the morning?',
  '**2** I am going to name one of you in writing to authorise ministry work when I am not here. **What would you want to see** before you agreed to be that person?',
  '**3** We have had eleven conditions over the counter since April and I crossed nine of them out in front of you. **What is your view** on which of the nine I was wrong about?',
  '**4** And one I should have asked nineteen years ago: **what is the thing in this shop that nobody ever asks you about?**',
  'I will read all three answers before I decide anything. If I have put the answer inside any of these, say so and I will rewrite it.',
]));
out.push(S('Stage 7 · Write freely (sample, 171 words)'));
out.push(SAMPLE([
  '**TO THE MATHEMATICS DEPARTMENT · FOUR QUESTIONS AND NO ANSWERS FROM ME** · S. Dibo · 8 June',
  'I have taught in this department for twenty-four years and I have asked, at a guess, two hundred thousand questions. Almost all of them had the answer inside them, because that is what a teacher\'s questions are for.',
  'These four do not. I am not going to put my own view in this message at all, and I would like a sentence from each of you by Thursday.',
  '**1** The printed scheme puts chapter 7 in the third term and I have moved it to the second in my own classes. **How do you see it from where you are** — with your own classes, your own groups and your own June?',
  '**2** I have mark analysis for four years for my classes only. **What would you want to see** before you moved anything?',
  '**3** We have met eleven times this year and I have spoken at nine of those meetings and Mr Haddad at none. **What is your view** on what that means about the meetings?',
  '**4** And one I should have asked in September: **what is the thing in this department that nobody ever asks you about?**',
  'I will put the answers together with no names on them and bring them to the next meeting. If I have put the answer inside any of these four questions, say so and I will rewrite it.',
  '**The one I am most afraid of the answer to** is the third, because I think the answer is me.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I have spoken at nine of those meetings and Mr Haddad at none." A number about herself that costs her something, inside a question to him._   ✓ _"Surely we all agree the scheme is wrong?" — the answer is inside it twice._   ? _Which answer are you most afraid of?_ — the page says so at the bottom, and that line should not be sent with the questions; it belongs in the writer\'s own copy.'));
out.push(S('Stage 7R · Share'));
out.push(A('Put the number next to 4.6\'s number on the board — the cycle where the class counted who had ever asked for something at work. In a first run 4.6 produces two or three hands and 12.4 produces most of the room. Those two numbers, eight units apart, are the most concrete evidence of change in the book, and the class should be the ones to read them.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I sent the four questions to the three men on Wednesday. Two answers came back by Thursday and one did not. Abu Samir, who cannot read the fault book, got his son to write his answer out: the thing nobody ever asks him about is which shop a unit came from, and he says he can tell from the bag it is in and has never once been asked. That has been true for six years. The one who did not answer is the one I was expecting to answer first, and I am not going to ask him again this week.']));

// ===================== 12.5 =====================
out.push(pb());
out.push(h2('12.5  So are we agreed?'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** Open. The fifteen-second rule is the whole exercise and it has to be enforced from the first turn; a pair left alone will give two speeches. Stop a speaker at fifteen seconds in mid-sentence the first two times and the room adjusts for the rest of the lesson.'));
out.push(A('**b** Moving a decision on: **1**, **3**, **4** and **5**. Not **2** — _I think the first one is best_ is an opinion, and it leaves the other person with nothing to do except agree or disagree.'));
out.push(A('Item 5 — _let\'s leave that one_ — is the one students do not expect to be on the list. Deciding **not** to decide something, out loud, moves a two-minute discussion on faster than anything else available, and it scores.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Which two of six things the class should leave in Room 14 for the September group, in two to three minutes.'));
out.push(A('**b** **1** The definitions page, because it is Bassel\'s contract: the best thing that happened in the room and meaningless to anybody who is not printing for a ministry.   **2** They agree on the page of entries. They do **not** agree on the second one — Lubna wants the list of what went wrong and Mazen the fault book — and they say so, with each of their second choices.'));
out.push(NOTE('The dialogue ends in disagreement **on purpose**, and the class will not believe it scores until you say it twice and then say why: Part 3 marks interaction, and two candidates who negotiate for two minutes and report an honest split have interacted more than two who agreed in thirty seconds. Teach the closing formula — _we agree on X, we each have a second choice, and mine is Y_ — and have everybody say it once.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _Shall we start with the ones we can drop? — Where the lavatory is. Then: how about where the money is kept, and who to ask when something breaks? So are we agreed on those two?_',
  '**2** _I\'d drop the visitors\' book. How about the fault log and the handover sheet? Up to a point the handover sheet is the same thing twice — mind you, it is the one anybody would actually read. Let us say the fault log and the handover sheet._',
  '**3** _How about 7.6 and 12.3? They are the same cycle twice, though. Then 7.6 and 4.6 — the evidence paragraph and asking for one thing._',
  '**4** _Shall we start with the one with a person in it? Room 14 and the stairwell store, because one of them can lock somebody in and the other is two rooms on one switch. So are we agreed?_',
]));
out.push(A('All four open by **dropping**, which is the technique the cycle teaches and the one candidates never arrive with. It is fast, it is natural, it produces agreement in the first twenty seconds, and it leaves the time for the two options that are worth arguing about.'));
out.push(S('Stage 3 · Practise (sample – Card A, timed)'));
out.push(SAMPLE([
  '**A:** Shall we start with the ones we can drop? I would drop the holiday list.',
  '**B:** So would I, because nobody needs it on the first morning. How about where the money is kept?',
  '**A:** Up to a point — I would not tell a new person that on day one.',
  '**B:** Mind you, that is exactly what they are afraid of asking.',
  '**A:** That is true. So are we agreed on where the money is kept and who to ask when something breaks?',
  '**B:** Agreed. — _Turns: 18. Borrowings: 5 ("so would I", "mind you", "that is true", "where the money is kept" twice)._',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Fifteen turns in two minutes and at least four borrowings is a good pair. Six turns is two speeches whatever they decided, and a pair that agrees in forty seconds and then sits silent has produced the one outcome Part 3 cannot reward. Both numbers go on the board; they improve visibly on the second run, which is why Stage 4b exists.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _Two minutes on what to change about the Tuesday handover. We dropped the time and the room in the first fifteen seconds, argued about whether to minute it, and agreed on two things: somebody writes three lines, and the equipment column stops being optional._',
  '**b** _Why the second run was better: we had already dropped the easy ones, so we spent the whole two minutes on the one that mattered — and both of us asked a question in the second run and neither of us did in the first._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Lubna and Mazen had two minutes and six things the class could leave in Room 14 for September. Lubna started with the ones they could drop and dropped the definitions page, and Mazen said so would he, for the same reason: it is Bassel\'s contract. Lubna said exactly — it is the best thing that happened in this room and it means nothing to anybody who is not printing for a ministry. She asked about the fault book and Mazen said it is his, so she should decide, and she said it goes in but not as a fault book: as four photocopied pages with a line at the top saying what it was for, because what a new person needs is not his faults, it is that somebody wrote something down for seven months with nobody looking at it. Then the recording: she was not sure, and said up to a point it is the most useful thing on the page, because twelve people in their first week want to hear what B1 sounds like out of a mouth like theirs — but nobody in this room would agree to be recorded in September and nobody should have to. Mazen said mind you, Yara said yesterday that she would, and Lubna said then that is one, and one is not a recording of a class, so let us leave that one. Mazen asked whether they were agreed on the entries and the book, and Lubna said agreed on the entries, but she would like the list of what went wrong instead, because of what Yara had said. He said then we have not agreed and we have forty seconds — and she said then we say so: we agree on the entries, we each have a second choice, and if she had to decide on her own she would put in all three and let them throw one away.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ two monologues → ✓ use the other person\'s words.   ✗ agreeing in forty seconds → ✓ drop first, then argue.   ✗ I think the first one is best. _(and nothing else)_ → ✓ _how about…?_   ✗ Shall we to start with…? → ✓ _shall we start_.   ✗ silence at 1 min 20 → ✓ _let\'s leave that one_ and move on.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** A recommendation — _this page does not recommend anything._'));
out.push(A('**2** ⑤ the stairwell handle and ② the lighting circuit. The two that matter most are ① the south windows and ④ the 76 cm doors, and she says so.'));
out.push(A('**3** Because both of the big items need a budget that does not exist this year, so a discussion about them will end in a decision to wait — and _a meeting that decides nothing twice stops being held._'));
out.push(A('The last sentence of the model is the one to put on the board, because it is about **process** and students almost never argue from process. A reader who has sat on a committee will act on _a meeting that decides nothing twice stops being held_ faster than on anything about windows, and learning to make that kind of argument is worth more at B1 than another twenty words of vocabulary.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**WARD 4 NIGHTS · WHAT TO DO FIRST** · a page of options, not a recommendation · R. Barakat',
  'This page does not recommend anything. It sets out five things that could be done and the two I think should be discussed first.',
  '**① Three-night blocks for all night staff.** Cost: a rota rewritten every month. Effect: the thing the trial is testing, and not provable before September.',
  '**② A second trolley.** Cost: one trolley, or one month of a borrowed one. Effect: it separates the rota from the trolley, which nothing else does.',
  '**③ A form for chasing equipment in the workshop.** Cost: one sheet of paper and somebody to own it. Effect: the second trolley comes back in February instead of June.',
  '**④ A column on the night sheet that cannot be filled in later.** Cost: nothing. Effect: the times stop being written from memory at the end of the shift, including mine.',
  '**⑤ A second clipboard.** Cost: 2,000 Syrian pounds. Effect: the night staff stop sharing the day staff\'s.',
  '**The two I would discuss first: ② and ④.** Not ①, although it is the one I asked for, because it cannot be decided before September and a discussion about it now will end in a decision to wait. ② costs a month of a borrowed trolley and would tell us which of two explanations is true. ④ costs nothing and makes my own figures better. **If the meeting only decides one thing, let it decide ④, because it is free and because the person it embarrasses is me.**',
]));
out.push(S('Stage 7 · Write freely (sample, 176 words)'));
out.push(SAMPLE([
  '**14 SHARIA AL-JALAA · WHAT TO DO FIRST** · a page of options for the university, not a recommendation · L. Sweidan',
  'This page does not recommend anything. It sets out six things that could be done to the building and the two I think should be discussed first, with the reason.',
  '**① Replace the south windows.** The three rooms run 4–5 °C hotter than the north side in summer. Cost: the largest on this page. Effect: measurable, in a building used in July.',
  '**② Separate the Room 13 / Room 14 lighting circuit.** Two rooms on one switch since 2009. Cost: one day of an electrician. Effect: two rooms usable at once in the evening.',
  '**③ Reinstate the second staircase.** Not possible without the 1974 drawings, which nobody holds.',
  '**④ Widen the 76 cm doors.** Required by current regulations for a building of this use. Cost: structural. Effect: the building becomes lawful for its present use, which it is not.',
  '**⑤ Fit a handle inside the stairwell store.** Cost: 400 Syrian pounds and ten minutes. Effect: the store stops being a room that can lock a person in.',
  '**⑥ Record the building properly.** Cost: none; three sheets exist.',
  '**The two I would discuss first: ⑤ and ②.** Not ① and not ④, although those matter most, because both need a budget that does not exist this year and the discussion will end in a decision to wait. **If the meeting only decides one thing, let it decide a cheap one, because a meeting that decides nothing twice stops being held.**',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"Effect: the store stops being a room that can lock a person in." 400 pounds against that, on one line, and the committee has no way of saying no._   ✓ _"⑥ Review the fire strategy" — no cost and no effect beside it, so it will be agreed and never done._   ? _What happens if we decide nothing?_ — the page answers it in its last sentence, which is why that sentence is the one the chairman reads twice.'));
out.push(S('Stage 7R · Share'));
out.push(A('Both numbers, and no verdict on either. The useful discussion is the third question: which of the two kinds of page has the writer\'s own work in it? A page that opens with the cheapest option is usually written by somebody who has watched a decision die; a page that opens with the most important one is usually written by somebody who is right.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['I gave the page of options to the ward manager. She said she would discuss ④, the column that cannot be filled in later, and ②, the trolley — which are the two I named — and then she said the thing I had not thought of: that ③, the form for chasing equipment, is the only one on the page that would stop it happening again, and that nobody will ever agree to it because it belongs to no department. She was right, and it is the item I had put third because I thought it was the dull one.']));

// ===================== 12.6 =====================
out.push(pb());
out.push(h2('12.6  On the one hand'));
out.push(S('Stage 1 · Get ready'));
out.push(A('**a** The four envelopes, four minutes, in silence. Keep the silence: the single most common mistake in teaching this cycle is talking during it. The question when it ends is **what kind of thing were you wrong about**, and it has to be asked in those words, because _were you right?_ produces a scoreboard and nine of the twelve will say nothing.'));
out.push(A('**b** All four categories appear in every class. Count them on the board as they come in: **1** themselves, **2** somebody else, **3** how long it would take, **4** what would be difficult. The fourth column is nearly always the longest and it nearly always says the same thing — that the difficult part would be the English, and it was not.'));
out.push(NOTE('This is the cycle the whole book has been building towards and it needs the lesson before it to be done properly: the envelopes must be in the room. If a student has lost one, have them rewrite it from memory before the lesson and bring both; the comparison between what they wrote in April and what they remember writing is the most interesting page in the room, and it is usually kinder to them than the original.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**a** Jad finds that he was right about three of his four April predictions and wrong about the only one he had put in **to be** wrong about — he telephoned a supplier in Aleppo on 2 June and spoke English for nine minutes. Ms Huda finds that she was wrong about four out of twelve, which is her usual third, but that the **kind** of mistake has changed: for twenty years her mistakes were about ability and this year all four were about whether somebody would speak.'));
out.push(A('**b** **1** He was wrong about the telephone, and the kind of mistake is that he thought the hard thing was the English. It was being nineteen, and the telephone was easy once nobody could see him.   **2** She wants to read out the note she wrote about **herself** in the first week, and she wants it to be the first thing on the page for September.'));
out.push(A('Ms Huda\'s four and the four who have changed most being the same four is left unresolved on purpose — _either a coincidence in a class of twelve or the most useful thing I have learnt about teaching adults, and I have no way of telling which_ — and it is also question 4 of the Reading Part 4 in 12.7. If the class wants to argue about it, let them; the honest answer is the one in the text.'));
out.push(S('Language box · Practise'));
out.push(SAMPLE([
  '**1** _On the one hand a record kept by the person it is about is the only one that gets kept; on the other hand it is the one a committee can discount in a sentence. On balance I would keep it myself and give a copy to somebody else in the first month._',
  '**2** _On the one hand three asks are three chances; on the other hand three asks let somebody choose the cheapest and call it an answer. On balance: one thing, in writing, with a date._',
  '**3** _On the one hand a page with nothing wrong in it is a page nobody believes; on the other hand twelve strangers reading about other people\'s failures in week one may simply be frightened. On balance: what went wrong, written by the people it went wrong for, and signed._',
  '**4** _On the one hand her sister was in a job that was making her ill; on the other hand she had three children, a rent of a hundred and ten thousand and nine years of knowledge of that clinic. On balance the advice was right and the person giving it had not earned the right to give it thirty times._',
  '**5** _On the one hand I can now do things in English I could not do in April; on the other hand I cannot separate the course from nine months of simply being nine months older at something. On balance what has changed is not the English: it is that I write things down before I know what they are for._',
]));
out.push(A('Item 4 is the one to work on, because it is the hardest balance in the book and the class has lived with it since 2.2. Item 5 is the frame for the whole of Lesson B, and the thing to insist on is that _on balance_ is followed by a **decision or a finding**, never by _it depends_.'));
out.push(S('Stage 3 · Practise (sample – Card A)'));
out.push(SAMPLE([
  '**A:** Should a record be kept by the person it is about?',
  '**B:** On the one hand it is the only kind that actually gets kept. Nobody else was ever going to count those nights. Seven months of mine were kept with nobody looking at them.',
  '**B:** On the other hand I wrote the record and I wrote the minutes of my own item. A committee can discount it in one sentence, and the committee would be right to ask who checked it.',
  '**B:** On balance I would keep it myself and give a copy to one other person in the first month — which is what happened by accident on 8 June, and the book is now better than it was.',
  '**A:** Were the two sides the same size?',
  '**B:** Three sentences and three. The first side is easier to say and the second one is the one I had to write down before I could say it.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('Two numbers per side, and then the _on balance_ sentences marked **real** or **it depends**. In a first run about half are _it depends_, and the correction is not a grammar point: ask the student what they would actually do on Thursday, write their answer on the board, and show them that they have just said _on balance_ properly.'));
out.push(S('Stage 4 · Your turn (sample)'));
out.push(SAMPLE([
  '**a** _On the one hand: I did three of the four things on my April page, in the order I wrote them. On the other hand: I was wrong about five of eleven people in the 1.4 note and all five mistakes were the same mistake. On balance what nine months changed is a habit and not a language._',
  '**b** _My partner was wrong about how long it would take — he had given himself a year to ask for a day off and he asked in six weeks. Mine is category four, what would be difficult: I wrote that the difficult thing would be speaking in front of the class and it was telling my sister._',
]));
out.push(S('Stage 4R · Report (sample)'));
out.push(SAMPLE(['Ms Huda gave us four minutes in silence with the envelopes and then said nobody tells her whether they were right: tell her what kind of thing you were wrong about. Jad had written four things on 14 April. He has spoken English out loud to eleven people outside this room instead of four, because of the forum; he has asked for help in writing; and he said in May that he is nineteen, after which two people stopped answering him and four did not. And he had written that what he thought he would still not have done was telephone anybody — and he telephoned a supplier in Aleppo on the second of June and spoke English for nine minutes. So he was right about three and wrong about the only one he put in to be wrong about, and the kind of mistake is that he thought the hard thing was the English. It was being nineteen, and the telephone was easy once nobody could see him. Then Ms Huda read her own page: she seals one in the first week every year with an impression of each student and an alternative reading, and she is wrong about a third every year, and this year it was four out of twelve, which is usual. But the kind of mistake has changed: for twenty years her mistakes were about ability, and this year all four were about whether somebody would speak — and the four she was wrong about are the four who have changed most. Then Yara asked to read hers, and said she wants the note she wrote about herself in the first week to be the first thing on the page for September. On the one hand she had written that she would probably stop coming by November, because that is what she has done four times. On the other hand she is here in June and has said something in this room every week since the third one. On balance, and this is the sentence she wants them to read: the thing that was difficult was never the English.']));
out.push(S('Board clinic – typical mistakes'));
out.push(A('✗ On the one hand… _(and no other hand)_ → ✓ the next paragraph is fixed.   ✗ In the other hand. → ✓ **On** the other hand.   ✗ In one side… in other side… → ✓ on the one hand… on the other hand…   ✗ nine lines against one → ✓ the same size.   ✗ On balance, it depends. → ✓ a decision, or a finding.'));
out.push(S('Stage 5 · Read'));
out.push(A('**1** That all four happened, and that the first three happened in the order she had written them in, which she did not expect at all.'));
out.push(A('**2** She was wrong about five people out of eleven, and all five mistakes are the same mistake: she thought the quiet ones had nothing to say and the confident ones had the most. She also had the turning point wrong — she wrote that it was the night of the seven errors, and it was the handover on 12 May, which had not happened when she wrote the page.'));
out.push(A('**3** The other night sister. There is not one line about her on any of the four pages, and she was eleven metres away for the whole nine months.'));
out.push(NOTE('The last paragraph is the model for the hardest paragraph in the book and it is worth reading twice: the thing that is **missing** from your own account of your own year. It is also the quietest possible ending for the Rasha thread — she gets everything she asked for and the page she writes about it is about somebody she left out — and a class that has followed her since 1.1 will be silent after it. Let them be.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**NINETEEN YEARS AND FOUR PAGES** · B. Khoury · written in June with the envelopes open',
  '**What I wrote in April.** By the time I finish this course I will have read the ministry contract properly, I will have said one sentence to the man at the ministry whose name is on it, and I will have stopped signing things I have not read. And the thing I thought I would still not have done: told my three men when I had got something wrong.',
  '**On the one hand**, three of the four happened, and the first one happened twice, because I read the conditions in April and the page before them in June and the second reading is the one that mattered.',
  '**On the other hand**, I have read the vote paper from the first evening and I voted that nothing in that shop would change, and I was the only person in the room who voted that about his own life. And the fourth thing happened on a Thursday in June and it was the easiest of the four, which makes nine years of not doing it hard to explain.',
  '**On balance**, what has changed is not that I read things. It is that I now read the page **before** the thing I was sent, and that when I am wrong I say so to the three people it cost something.',
  '**And the one thing I would not argue with.** I have been running that shop for nineteen years and the first person who ever read that contract with me was an architecture student of twenty-two who does not print anything.',
]));
out.push(S('Stage 7 · Write freely (sample, 179 words)'));
out.push(SAMPLE([
  '**NINE MONTHS, FOUR PAGES** · R. Barakat · written in June with the envelopes open',
  '**What I wrote in April.** By the time I finish this course I will have asked the rota committee for three-night blocks, I will have said one sentence to Sister Nasr, and I will have stopped writing "staffing" on forms I do not believe. And the thing I thought I would still not have done: told anybody outside the hospital that the seven errors were mine.',
  '**On the one hand**, all four happened, and the first three in the order I wrote them, which I did not expect. The committee gave me a trial. The sentence to Sister Nasr took ninety seconds and produced two years of somebody else\'s silence. I have not written "staffing" since 14 May. And I told my sister in June, which was the hardest.',
  '**On the other hand**, I have read my 1.4 note about this class and I was wrong about five people out of eleven, and all five mistakes are the same mistake: I thought the quiet ones had nothing to say. The person in this room who has changed me most is a mathematics teacher who did not speak for three weeks. And I wrote on my 3.6 page that the turning point was the night of the seven errors, and it was not: it was the handover on 12 May, which had not happened yet.',
  '**On balance**, what nine months have changed is not what I can do in English. It is that I write things down before I know what they are for, and ask the question before I know whether I want the answer. Both are habits and neither is a language.',
  '**And the one thing I would not argue with.** Everything on these four pages is about me. There is not one line about the other night sister, who was eleven metres away for nine months, and I wrote four pages about a ward without her in them.',
]));
out.push(S('Stage 7P · Respond (sample slip)'));
out.push(A('★ _"I wrote four pages about a ward without her in them." The page finds the one thing the writer cannot put right by writing._   ✓ _"On the other hand, it was sometimes difficult" — one line against eleven, and it is not a side, it is a politeness._   ? _What kind of thing were you wrong about?_ — the same mistake five times, which is a finding and not a list.'));
out.push(S('Stage 7R · Share'));
out.push(A('Four columns on the board. The fourth — **what would be difficult** — is nearly always the longest, and almost everybody wrote in April that the difficult thing would be the English. Say the number, and then say nothing else; the sentence the class takes home is Yara\'s, and it is already on the board from Stage 2.'));
out.push(S('Homework (sample)'));
out.push(SAMPLE(['The sentence I have copied out by hand for the September page: _the thing that was difficult was never the English._ It is not mine, it is Yara\'s, and I asked her on Thursday whether I could use it and she said she would rather write it herself, in her own handwriting, and that she wanted her name on it. So the page for September will have her name on the first line, which is the opposite of everything that has happened to her in twenty-six years, and she asked for it herself.']));

// ===================== 12.7 =====================
out.push(pb());
out.push(h2('12.7  Review & Mediate: Both sides, and where I stand'));
out.push(S('Stage 1 · Unit 12 quiz – corrections'));
out.push(A('**1** I **think** it will last.   **2** Although it ran for three months, it worked. _(delete_ but_)_   **3** **Although** it only ran for three months, it worked. / Despite **the fact that** it only ran…   **4** I **don\'t** agree with that. / I\'m not sure about that.   **5** **On** the other hand, it is in writing.   **6** On balance, **I would do both** — a decision, not _it depends_.'));
out.push(A('Items **2** and **3** are the two grammar faults of the unit — _although_ with _but_, and _despite_ with a clause — and item **6** is the one that is not a grammar fault at all. _On balance, it depends_ is correct English and says nothing, and it is the commonest way a balanced paragraph fails.'));
out.push(S('Stage 2 · Listen and read'));
out.push(A('**b** Lubna says she should not lead the September report on the three weeks with no errors, because a committee will read "no errors in three weeks" and stop reading — which is the opposite of what Rasha wants. And Rasha decides to lead on the **trolley**: to put the competing explanation first, in her own report, before anybody else raises it in a meeting.'));
out.push(NOTE('The April paragraph and the June paragraph are printed side by side so that the class can see five units of change in one page. Nothing in the claim has altered; what has arrived is _on the one hand / on the other hand / on balance_, a second explanation named by the person it damages, and a proposal to test it. Put the two paragraphs on the board and ask the class which of the twelve units each sentence comes from. Most of them can do it, and that is the revision for the End-of-Book Test.'));
out.push(S('Language box – explaining both sides and saying where you stand'));
out.push(A('No exercises; it is the checklist for Stages 3 and 4. Three habits: **the objection first** when the case is yours, **both sides the same length**, and **what would settle it** rather than what would win it.'));
out.push(A('The sentence the book ends on is Rasha\'s and it is worth writing out: _write the strongest thing against yourself first, and then nobody can use it against you — and if it turns out to be true, you were the person who said it._ It is 7.6, 8.3, 12.2, 12.3 and 12.6 in one line, and a class that leaves Book 1 with that sentence has the whole of the second half of the book.'));
out.push(S('Stage 3 · Practise (sample – Case A, the night rota)'));
out.push(SAMPLE([
  'The claim is that three-night blocks produce fewer errors than five-night blocks.',
  'Before the evidence, the objection, because it is the strongest thing on this page: it is one ward, one nurse and one person counting, and that person is the nurse whose errors are being counted and who asked for the change.',
  'The evidence: seven errors in nine months, every one on a fourth or fifth night of a block, none on a first, second or third. In the three-week trial, none.',
  'What it does not show: it does not show that long blocks cause errors. It shows that hers happened at the end of them.',
  'The competing explanation, which she raises herself: the ward has had one trolley since February, and a drug round written for two trolleys is late whatever the rota says.',
  'What would settle it: a second trolley on that ward for one month, counted the same way. That separates the two explanations and nothing else does.',
  'Where she stands: run the trial to September, and ask for the trolley for a month — and if the trolley is the cause, say so in the September report.',
]));
out.push(S('Stage 3R · Perform – listener task'));
out.push(A('In almost every run the sentence that decides the listener is the **objection**, said first by the person making the case. Collect the sentences and read them out: four or five of the six will be the objection or the _what would settle it_ line, and not one of them will be the evidence. That is the finding the book ends on, and the class should hear it from its own answers rather than from the teacher.'));
out.push(S('Stage 4 · Your turn'));
out.push(A('Open — the student\'s own strongest claim, explained with the objection first. The three questions are the assessment: _what would make you wrong?_, _what else could explain it?_ and _what would settle it, and can you do it?_ A student who can answer all three about their own case can do everything this book set out to teach, and the third question is the one that separates an argument from a plan.'));
out.push(S('Stage 4R · Report – mediation (sample)'));
out.push(SAMPLE(['Rasha read the last line of her April paragraph again — it does not show that long blocks cause errors, it shows that mine happened at the end of them — and Ms Huda made Lubna the committee. Lubna said that on the one hand she would give her another three months, because she is the only person in the hospital who has counted anything and the pattern is ten months old; and on the other hand she is a committee, and she will read "no errors in three weeks" and stop reading. Rasha said that is why the report will not lead on the three weeks: it will lead on the trolley, because she has spent ten months building a case about a rota and there is a competing explanation sitting in a workshop with a broken wheel, and if she does not put it first somebody else will, in September, in front of eleven people. Ms Huda said that is a decision against her own case, and Rasha said it is a decision against her own argument, not against her case, because her case was never that she is right — admittedly she wanted it to be. And if the trolley turns out to be the cause, she has spent ten months counting the wrong thing accurately, which is still better than nine years of counting nothing, and she would rather find it out herself in September than have it found out about her in a room. Then the sentence Ms Huda asked her to say again: write the strongest thing against yourself first, and then nobody can use it against you — and if it turns out to be true, you were the person who said it. So I decided to put the objection first in the thing I am writing, and to move my own evidence to the second paragraph.']));
out.push(S('Stage 5 · Exam practice – B1 Preliminary Reading Part 4'));
out.push(A('**1** B   **2** D   **3** A   **4** C   **5** B'));
out.push(A('_Notes:_ **1** the article describes what twenty years of a habit have taught her; **A** is rejected because she does not offer the method to anybody and **C** because she says explicitly that it is not to persuade. **3** is the paragraph with _for the first time_ in it — the **kind** of mistake, not the number, which is _my usual_. **4** is the question candidates lose: the text says _I have no way of telling which_, and both **A** and **B** are halves of a sentence that refuses to choose. **5** turns on the last two lines, which give a reason that is about a student and not about the writer.'));
out.push(NOTE('Reading Part 4 is one longer text with five four-option questions, and it is the part of the paper that tests **attitude and opinion** rather than facts. Three habits, each worth a few minutes: for a _purpose_ or _summary_ question, read the first and last paragraphs before the options; for an _attitude_ question, look for the sentence where the writer says what they do **not** know or do **not** claim, because that is usually the answer; and never choose an option because its words are in the text — in this set, three distractors are made of the text\'s own vocabulary.'));
out.push(S('Stage 6 · Write with help (sample)'));
out.push(SAMPLE([
  '**The claim.** That the fifteen handsets repaired at this counter between September and April came from one bad batch.',
  '**The strongest thing against it.** It is one counter in one city over seven months, I have never measured the adhesive, and I am the only person who has looked at the fifteen — and I am also the person who would like the answer to be the batch.',
  '**What it does not show.** It does not show that the supplier sent a bad batch. It shows that fifteen units of one model, sold by two shops in three months, all have the same fault.',
  '**On the one hand** the line is visible under a lamp in fifteen out of fifteen and four customers came back twice. **On the other hand** both shops keep stock in a room with a window, and heat does to glue what a bad batch does to glue.',
  '**On balance** I would ask the supplier for the purchase dates of all fifteen and for a name, and I would also put two units from a different supplier under the same lamp, because if those have the line too then everything I have written since September is about a lamp.',
  '**What would settle it.** The purchase dates, which the two shops have and I do not, and which I can ask for on Tuesday.',
]));
out.push(S('Stage 7 · Exam practice – B1 Preliminary Writing Part 2'));
out.push(A('Both out of 20 on Content, Communicative Achievement, Organisation and Language. The **article** must answer all three parts of the notice — what you believed, what changed it, and whether you would say so in front of the people who heard the first opinion — and candidates routinely drop the third, which is the only one that needs a decision. The **story** must begin with the given sentence word for word; have the class copy it out before planning, because it is long and it is mis-copied more often than any sentence in the book.'));
out.push(SAMPLE([
  '**Question 1 — article (sample, 149 words)**',
  '**The month I argued for the wrong thing**',
  'For nine months I believed that the reason mistakes happened on my ward was the length of the night blocks. I had seven of my own, all at the end of a block, and I built a case out of them that got me a trial.',
  'What changed my mind was not an argument. It was a trolley with a broken wheel that went to a workshop in February and never came back. A ward with one trolley and a round written for two will be late whatever the rota says, and I had written ten months of pages without once putting that sentence at the top of one.',
  'Would I say so in front of the four people who heard me ask for the trial? I am going to, in September, in a report with my name on it, and I am putting it in the first paragraph and not the fourth.',
  'Not because I am honest. Because if somebody else says it first, nothing I have written for ten months will be read again.',
]));
out.push(SAMPLE([
  '**Question 2 — story (sample, 145 words)**',
  'She put the strongest argument against herself in the first paragraph, and then waited.',
  'There were four of them round the table and the chair read the page twice before he said anything at all. I was at the end of the row, there to take the minutes, and I watched them read it.',
  'What she had written was that she was the only person counting, that she was counting her own mistakes, and that there was a broken trolley on the ward that explained the whole thing just as well as her rota did.',
  'The man on the left put the page down and said that in eleven years nobody had ever handed him a paper that began like that.',
  'She said nothing. She had told me in the corridor that she would not fill the silence, whatever happened in it, and she did not.',
  'Then the chair asked her what would settle it, which is the question she had come for, and she had the answer ready in one sentence.',
]));
out.push(S('Unit 12 check  ·  A  Grammar and vocabulary'));
out.push(A('**1** b   **2** a   **3** b   **4** c   **5** b   **6** b   **7** b   **8** c'));
out.push(A('_Notes:_ **1** _think_ is an opinion verb and takes the simple. **3** _despite_ needs a noun. **4** only _mind you_ can open a second thought in its own sentence. **6** the question form inverts: _would you say_. **8** _on balance_ — not _in_ and not _at_.'));
out.push(S('Unit 12 check  ·  B  Listening (Part 4, interview) – Track 12.15'));
out.push(A('**1** B   **2** A   **3** C   **4** B   **5** B   **6** A'));
out.push(A('Questions **3** and **4** are the ones to replay. Both are about what the speaker says the count or the course **changed**, and in both the wrong options are true statements that are not answers: her questions were easy, and her English did improve — she says so — but neither is what she says mattered.'));
out.push(NOTE('Listening Part 4 is one interview, six three-option questions, and the questions follow the order of the recording. Two habits: read the six questions in the pause before the recording and underline the **question word** in each, because half of them ask _why_ or _what changed_ rather than _what happened_; and do not choose an option the moment you hear its words, because the speaker usually says all three and only one of them is the answer to the question asked.'));
out.push(S('Unit 12 check  ·  C  Writing (sample, 162 words)'));
out.push(SAMPLE([
  '**HAS THIS COURSE CHANGED WHAT I DO?** · J. Attar',
  '**On the one hand**, yes, and I can count it. I have spoken English out loud to eleven people outside this room since April and to nobody before it. I telephoned a supplier in Aleppo on 2 June and spoke for nine minutes, having written in April that I never would. I answer forum questions in four lines where I used to write eleven, and three people have written back to say so. And I have said that I am nineteen, which cost me two readers out of six.',
  '**On the other hand**, I had written about nine hundred answers before this course started, in a language nobody has ever taught me in a classroom, and I cannot separate nine months of a course from nine months of doing the same thing anyway. I also found thirty-one correct relative clauses in forty of my own April answers, which means the construction was there before the unit that named it.',
  '**On balance**, what has changed is not my English. It is that I now count things in my own writing before I decide what I am bad at, and the counting is what altered my opinion of myself, not the lessons.',
  '**And what is missing from this account.** Every example above is about a stranger. There is nothing in it about my mother, who asked me in September what the course was for and has not been told since.',
]));
out.push(S('I can… (Unit 12)'));
out.push(A('Self-assessment; no answers. The three that matter are the fourth, the sixth and the eighth: conceding the strongest point against your own case, reaching a decision in two minutes **or saying honestly that you have not**, and explaining somebody else\'s case with the objection first. A class that ticks the first three lines and not those three has learnt some phrases; a class that ticks those three can be sent into a meeting.'));
out.push(box('Looking ahead: the End-of-Book Test, and Book 2', [
  '**The End-of-Book Test** follows Unit 12: Reading, Writing, Listening and Speaking, out of 100 marks, in the format of **Cambridge B1 Preliminary**. Every part of the Speaking paper has now been taught — Part 1 in 1.3, Part 2 in 9.7, Part 4 in 6.7 and Part 3 in 12.5 — so the Speaking section of the test uses all four, which the Mid-Book Test could not.',
  '**How to set the revision.** Send the class to the eight "I can…" lines they ticked 😐, nothing else. In practice the lines most often left at 😐 across a class are 3.3 (_by the time I got there_), 5.4 (the passive), 9.5 (deduction) and 11.2 (the two commas), and twenty minutes on those four is worth more than a week of rereading.',
  '**What to do with the envelope pages.** They belong to the students. Ask them to keep all four and the balanced page from 12.6 together, because **Book 2 opens on them**: Unit 13 begins with a page written on the first evening of this course and asks what the writer now does differently, and a student who has thrown the four pages away has to reconstruct them.',
  '**And the page for September.** If your class has written it, keep a copy. Reading last year\'s page to a new group in week one is the single most useful ten minutes a teacher of this book will ever spend, and the entry the new group always asks about is the one from the person who nearly stopped coming.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 1 · Syria Edition · Unit 12 · Answer Key');
