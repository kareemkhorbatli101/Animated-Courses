// Proactive English B1 · Syria Edition · Book 2 · MID-BOOK TEST — KEY (Units 13–18)
const L = require('./lib');
const { p, h1, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 13–18 — KEY'));
out.push(p('_Proactive English · B1 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** — Reading 20 · Writing 15 · Listening 15 · Speaking 10.',
  'Reading and Listening are **1 mark per question**, 35 questions in all. Writing has two band tables below (7 and 8). Speaking has a four-row grid printed on the test paper itself.',
  'Read each listening part **twice**, at normal speed, with a short pause between questions. Do not slow down: the weak form of _to_ between two verbs, and /ˈjuːstə/ in all four of its uses, are part of what is being tested, and they disappear if you read carefully.',
  'The three audio scripts are printed in this key after the listening answers. Do not photocopy the key.',
  '**Timing.** Writing is thirty-five minutes in this test and not thirty, because both tasks are 140 words at Book 2 length. One 95-minute session does the whole test if Speaking is taken in pairs while the others write.',
  '**Nothing in this test is new.** Every item is traceable to one of the forty-eight lines in the six **I can…** boxes of Units 13–18, and the table at the end of this key says which.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING (20 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · notices (5)', '1 **A** · 2 **B** · 3 **C** · 4 **B** · 5 **C**'],
  ['**Part 2** · gapped text (5)', '6 **C** · 7 **F** · 8 **D** · 9 **A** · 10 **G**   _(not needed: B, E, H)_'],
  ['**Part 3** · vocabulary (6)', '11 **A** · 12 **D** · 13 **B** · 14 **D** · 15 **C** · 16 **B**'],
  ['**Part 4** · open cloze (4)', '17 **but** · 18 **though** _(or_ **if**_)_ · 19 **why** · 20 **If**'],
], [1, 3]));
out.push(NOTE('**Part 1, question 1** is the item that separates the class, and it is Unit 17 in one notice. The three facts given are that no minute exists, that nobody said how long it was to last, and that it has been in force since 2019 — which together mean that the present arrangement **was never a decision**. Students who read for the topic rather than for what the words commit the writer to choose **B**, because a thing that has lasted seven years feels agreed. The distinction between a rule that was agreed and a rule that was never cancelled is 17.7, and it is worth four minutes in the feedback lesson.'));
out.push(NOTE('**Part 2** is answered with referring words and not with meaning. **6 C** — _a name as well as a prediction_ points back at the predictions just asked for. **7 F** — _the third rule_ follows the three rules. **8 D** — _all three_ picks up _three of the four predictions_, and the second half of D answers _the reason written underneath it_. **9 A** — _it_ is her own prediction, named in the sentence before. **10 G** — _So_ draws the conclusion from the sentence about the count. The three distractors are all plausible and none of them is tied to a sentence on either side: that is how the part is built, and candidates who choose by topic get two of five.'));
out.push(NOTE('**Part 3** rewards the collocation and not the meaning. **11** only _putting_ gives _put off_ = postpone. **12** reported speech after _said_ requires _had been agreed_; ~~has~~ is the error almost every weak script makes. **13** _the whole letter **fell** over_ — _went over_ means something else entirely. **14** _left them **out**_. **15** a document **sounds** like something; it does not hear, listen or speak. **16** _asks **for** one thing_, and the last clause of the sentence — _says what it is not asking for_ — gives the answer away to anybody who reads to the end of the sentence, which is the habit the part is testing.'));
out.push(NOTE('**Part 4** is a single-word cloze. **17 but** — _nothing but verbs_; do not accept _except_, which needs no _nothing_. **18 though** or **if** — _as though / as if they were_; do not accept _they_. **19 why** — _that is why_; do not accept _because_, which cannot follow _that is_ in this sentence. **20 If** — the third conditional of Unit 15 arriving in a Unit 18 text; accept _Had_ from a strong student and say so in the feedback lesson.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (15 marks)'));
out.push(S('Part 1 · An email (7 marks)'));
out.push(A('**All four notes must be covered** — the three things a prediction needs, why the negative half is the useful half, what to write underneath about his own blind spot, and one dated example of the writer\'s own. A script that misses a note cannot score above 4, however good the English is. Mark the four off in the margin before you read for language.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '6–7', 'All four notes, each developed in at least a sentence. _Will_ and _won\'t_ used for prediction and distinguished from an arrangement. A date on the example and a reason under it. The blind-half note is a real one and not a disclaimer.'],
  ['Adequate', '4–5', 'All four notes present, one or two thin. Future forms mostly right; the negative half mentioned but not explained. Errors do not obscure meaning.'],
  ['Weak', '2–3', 'One note missing, or two merged. _Will_ used for everything, including arrangements. Meaning recoverable with effort.'],
  ['Very weak', '0–1', 'Two or more notes missing, or not an email.'],
], [1.1, 0.8, 4]));
out.push(SAMPLE([
  '**Sample script (168 words — band 6–7)**',
  'Dear Sam,',
  'Keep doing it, but do it properly, because what you said in September was probably not a prediction at all.',
  'A prediction needs three things: a claim, a date on which it can be tested, and a reason underneath it. Without the date it is an opinion and nobody can ever be wrong, which is why opinions are so popular in offices.',
  'The half your manager is teasing you about is almost certainly the positive half. The useful half is the negative one — _they will not say why it works_, _nobody will read it_, _it will not be finished by October_. That is the half people avoid writing down, because until the date arrives it sounds like pessimism, and it is also the half that turns out to be right.',
  'Then write one line underneath about what you will **not** know by the date. A forecast that marks its own blind half is trusted; one that covers everything is not.',
  'Mine, from September: by the end of October the committee will extend the trial to all night staff and will not accept that the blocks are the cause. Reason: extending costs them nothing and agreeing a cause costs them an argument. Both halves were right, and the second one I would rather have been wrong about.',
  'Yours, Rasha',
]));
out.push(S('Part 2 · An article or a story (8 marks)'));
out.push(A('Either question. The **article** must answer all three parts of the notice — the thing that is in nobody\'s job, roughly when it became normal, and what should happen — and the stronger scripts admit that the date is approximate and say why. The **story** must begin with the given sentence **word for word** and must be a narrative: the commonest failure is a page of reflection with nothing happening in it.'));
out.push(table(['Band', 'Marks', 'What it looks like'], [
  ['Strong', '7–8', 'All three parts answered (article) or a real sequence of events (story). _Be used to_ + -ing accurate throughout, and kept apart from _used to_. A number on the work and a vague date admitted as vague. A small, named request. A last line that is earned.'],
  ['Adequate', '5–6', 'Task done. Forms mostly controlled; one or two slips between _used to_ and _am used to_. Organised in paragraphs.'],
  ['Weak', '3–4', 'Two of the three parts, or the story\'s opening sentence altered. ~~I am used to work~~ appears. Meaning recoverable.'],
  ['Very weak', '0–2', 'Task not attempted as set, or under 70 words.'],
], [1.1, 0.8, 4]));
out.push(SAMPLE([
  '**Sample script — Question 1, article (156 words — band 7–8)**',
  '**The telephone that is nobody\'s**',
  'Is there something you do at work that is not in anybody\'s job description? I have one, and I had stopped being able to see it.',
  'I work in a hospital laboratory. There are four of us. When a ward telephones at night to ask whether a result can be real, I am the one who is telephoned — every time, because I did a course. About twice a month it is in English, because two of the night doctors are not Arabic speakers.',
  'In January I was not used to any of it and it frightened me more than anything else in my work. Now I am used to it, and I stopped noticing some time in about March. I cannot be nearer than the month, and that is part of the point: nobody notices the day a difficult thing stops being difficult.',
  'It is not in my job. It is not in anybody\'s. It is not paid and it is not counted, and because I am used to it I have not asked one question about it in seven months.',
  'What I want is small: a list of the four of us, in any order, given to the wards. Not a rota. A list, so that it is not my telephone by accident.',
]));
out.push(SAMPLE([
  '**Sample script — Question 2, story (151 words — band 7–8)**',
  'I had been putting it off since September, and then I had to write it down.',
  'The method statement was due on the second of December and it had a line in it for everything I had not measured. I had two blanks, both of them the same light well on the second floor, and I had been rather proud of admitting them.',
  'I sat down on the Friday evening with the form in front of me and the word "blank" in both boxes, and I could not write the sentence that explained them. I had gone to that door once, on the eleventh of September. The woman had not opened it. I had not been back.',
  'I had remembered it about twice a week for seven weeks.',
  'So I wrote the true sentence — that I had stopped trying — and then I could not hand the page in.',
  'On the Saturday morning I knocked on the door of flat four at half past nine. She opened it. She said that a man had come round the week before asking about the building and that she had not known who I was, and that if I had put a note under the door with my name on it she would have let me in that day.',
]));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (15 marks — 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** · five extracts (5)', '21 **A** · 22 **C** · 23 **B** · 24 **A** · 25 **B**'],
  ['**Part 2** · notes (5)', '26 **gate** · 27 **tin** · 28 **Tuesday** · 29 **2019** · 30 **home**'],
  ['**Part 3** · interview (5)', '31 **C** · 32 **A** · 33 **B** · 34 **C** · 35 **B**'],
], [1.2, 3]));
out.push(A('**Part 2:** accept _the gate_ for 26, _a paint tin_ or _paint tin_ for 27, and _2019_ or _spring 2019_ for 29. Do not accept _Thursday_ for 28 — the speaker says Thursday first and corrects himself in the next sentence, which is the trap. Do not accept _2004_ or _2020_ for 29; three years are named in one minute and only one answers the question.'));
out.push(NOTE('**Question 21** is the item to replay in the feedback lesson. The speaker makes a prediction and then names the half she cannot predict, and the half she cannot predict belongs to a different office — so **A** is the answer and **B** is what she **does** predict. Candidates who are listening for the loudest claim choose B. The whole of 14.1 is in that one answer: a forecast that marks its own blind half.'));
out.push(S('Track MT2-1 · Audio script'));
out.push(dlg(null, [
  ['21  Woman', 'I predict that by the end of October they will extend the trial to the whole of nights, and that they will not say the blocks are the cause — and the second half of that is the important half. What I cannot predict is whether the second trolley stays. That belongs to a different office, and I shall write on the sheet that I do not know and that I will not know by October.'],
  ['22  Man', 'The delivery notes were in both shops the whole time and I never asked for them. If I had asked for them in April, I would have had the eleven dates by May and the letter would have gone in June. I should have asked in April. I knew the shops kept them — that is the part I cannot explain to myself.'],
  ['23  Woman', 'Row six. Wheel diameter, a hundred and twenty-five millimetres against a hundred and sixty. The price is at the top of the page and the guarantee is halfway down, and neither of them decides anything. Row six is the only row on that page that decides anything at all, and it is the one nobody at the table looked at.'],
  ['24  Woman', 'Three weeks in, and one of the five things is normal: I am used to waking up at four in the afternoon, and that took eleven days. The sleeping at a different time, the two days off in the middle of the week, the eating at hours no shop agrees with, and the fourth night not existing — all of that is still being got used to.'],
  ['25  Man', 'I was asked to telephone a man who had been promised a replacement in forty-eight hours eleven days earlier, and to manage his expectations. I refused to make that call and I gave my reason in one sentence: I am not willing to tell a man his expectations are unreasonable when our own note promises forty-eight hours in our own handwriting. My team leader made the call himself.'],
]));
out.push(S('Track MT2-2 · Audio script'));
out.push(dlg(null, [
  ['Tareq', 'This is what Abu Khaldoun told me, and he has been in that yard since 1989 and he is the only man left who was there. The sheets did not always go to the office window. They used to be collected at the buses at the end of the day: the man on the gate would take them from the drivers as they came in, and he would put them in a tin — a paint tin, he was very clear about the tin — and once a week the clerk would come out to the gate and take the tin away. I wrote down Thursday, because that is what I thought he said, and when I read it back to him he corrected me: it was a Tuesday, and he was definite about it, because Tuesday was the day the clerk came out anyway for the fuel book. Then it changed in 2019, in the spring, after a sheet went missing and a bus went out with a cracked mirror. And there were two reasons for the old arrangement, not one. The first is the one I had already guessed, which is that a driver did not have to walk to the office at the end of a shift. The second is the one I would never have guessed, and it is the one that will get my letter answered: no sheet was ever carried home. That used to happen before 2004.'],
]));
out.push(S('Track MT2-3 · Audio script'));
out.push(dlg(null, [
  ['Interviewer', 'You taped a card to a machine in October. What did it say?'],
  ['Omar', 'It said: if the red light comes on twice, stop logging the error and call me. What I meant was pause, write the code down, then telephone me. What I wrote tells a man to give up writing the codes down altogether, and that is what he did.'],
  ['Interviewer', 'How did you find out?'],
  ['Omar', 'He brought the card to my desk on the Tuesday, put it down and pointed at the line with his finger. He had been reading it every time the light came on, because he did not want to get it wrong.'],
  ['Interviewer', 'And for those three weeks?'],
  ['Omar', 'For those three weeks I thought he was being obstructive. He telephoned every time, I asked him for the code every time, and he told me every time that the card said not to write them down. He was right every time and I was wrong once, in October, in two words.'],
  ['Interviewer', 'What has it cost?'],
  ['Omar', 'The engineer asked me for the codes on the Wednesday. That machine is the one that has given the most trouble this year. I can give him seven. There should be about thirty.'],
  ['Interviewer', 'And the new card?'],
  ['Omar', 'Two numbered lines: write down the code and the time, then telephone me. And I have asked both the other sites for the same thing — no card anywhere to contain the words stop, try, remember, forget or go on. Five words. If you need one of them, you need two numbered lines instead.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('Two parts only, as in the Book 1 Mid-Book Test. **Preliminary Speaking Parts 2 and 3** are not used here: the photograph is opened in 9.4 of Book 1 and the collaborative task in 12.5, and both are practised again in the x.7 cycles of Book 2 and tested in the End-of-Book Test. What is tested here is Part 1 (about you) and the Part 4 discussion, which is what Units 13–18 have actually built.'));
out.push(A('**Timing:** about two minutes a student for Part 1 and three minutes for the pair discussion, so about eight minutes a pair. Give the card thirty seconds before they start and then say nothing until the three minutes are up, however long the first silence is.'));
out.push(table(['Row', 'Marks', 'What you are listening for'], [
  ['Grammar and vocabulary', '3', 'The four futures chosen on purpose, not _will_ for everything; _will_ / _won\'t_ with a date for a prediction; one _should have_ or third conditional used and defended; a quantity on a comparison; the four habit forms kept apart; and the verb patterns correct — above all **no** ~~suggested me to~~ and **no** ~~I am used to work~~. 3 = accurate and varied · 2 = accurate in the simple shapes · 1 = recognisable attempt.'],
  ['Discourse management', '3', 'Answers long enough to be worth hearing, with a date, a figure or a reason attached. 3 = extends without being asked · 2 = answers and stops · 1 = one-clause answers.'],
  ['Pronunciation', '2', 'Understandable throughout. The weak forms attempted: /tə/ between two verbs, /ˈjuːstə/ in all four uses, the contracted _\'ll_ and the full stressed _won\'t_. 2 = no strain on the listener · 1 = occasional strain.'],
  ['Interactive communication', '2', 'In Part 4: listening, asking the partner something, and disagreeing without stopping the conversation. 2 = a real exchange · 1 = two monologues in turn.'],
], [1.4, 0.6, 4]));
out.push(NOTE('**The commonest reason a pair loses the interactive mark** is that both of them talk to you. Say the instruction twice before they start — _talk to each other, not to me_ — and then look at the table rather than at them. And on **Card A** expect one student to say that they would put nothing on a wall with their name on it: that is an answer, not a refusal to answer, and it should be followed up rather than marked down. Ask them what they would be prepared to write with a date and no name.'));
out.push(A('**Model answers for Part 1** are in the unit keys and need not be repeated here. The one question worth reading the room on is the third: _what are you getting used to, and how far through are you?_ A student who answers it with a state rather than a process — _I am used to it_ — has not got 17.4, and it is the commonest single gap at this point in the course.'));

// ---------- the traceability table ----------
out.push(pb());
out.push(paper('WHERE EVERY ITEM COMES FROM'));
out.push(A('Each row names the unit and the **I can…** line the item tests. Use it for the feedback lesson: a student who lost three marks in one row needs one cycle re-read, not a general warning about verbs.'));
out.push(table(['Items', 'Unit and skill'], [
  ['4 · Speaking Part 1 q.1', '**Unit 13** — what is arranged, with a day and a person who knows; choosing between the four futures on purpose'],
  ['6–10 · 21 · Writing Part 1 · Speaking Card A', '**Unit 14** — a prediction with a date, a reason and a blind half; the negative half as the useful half'],
  ['20 · 22', '**Unit 15** — _should have_ with a date; a third conditional that can be defended'],
  ['23', '**Unit 16** — the superlative of one: _the only row that decides anything_; a quantity on every comparison'],
  ['1 · 24 · 26–30 · Writing Part 2 Q1 · Speaking Part 1 qq.2–3 · Card B', '**Unit 17** — _used to_ and _would_ for an old practice; _be used to_ and _get used to_; a rule that was agreed against one that was never cancelled'],
  ['2, 3, 5 · 11–19 · 25 · 31–35 · Writing Part 2 Q2 · Speaking Part 1 q.4 · Card C', '**Unit 18** — the five pattern families; _stop to_ against _stop -ing_; a sentence with nobody in it; a week in its verbs'],
], [1.6, 3]));
out.push(sp());
out.push(box('After the test', [
  'Spend one lesson on it and spend it on **four items**, not thirty-five. The four that repay the time are: **Part 1 question 1** (a rule that was never a decision), **Part 2** (referring words), **question 21** (the half she cannot predict), and whichever writing band row the class lost most in.',
  'Then put the six **I can…** boxes side by side on one desk and let each student mark the lines they are still not sure of. The number out of forty-eight is theirs and not yours.',
  'The two predictable losses are the **four habit forms of Unit 17** and the **conditionals of Unit 15**. If the class lost marks in both, do 17.3 and 17.4 again before Unit 19 rather than after it, because Unit 19 asks students to describe what they have already tried, and that is 17 and 15 in the same paragraph.',
  '**Units 19–24** build on the second half of Book 2: complaints and resolutions, instructions and how-to, negotiating and compromise, interviews and self-presentation, the wider news, and looking ahead to B2. The End-of-Book Test is 100 marks and uses all four Preliminary Speaking parts.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English B1 · Book 2 · Syria Edition · Mid-Book Test · Key');
