// Proactive English A2 · Syria Edition · Book 2 · MID-BOOK TEST — KEY (Units 13–18)
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, C } = L;
const out = [];
const S = (t) => p(t, { bold: true, color: C.teal, before: 160, after: 60 });
const A = (t) => p(t, { indent: 200, after: 50 });
const SAMPLE = (paras) => box('Sample answer', paras, 'FFFFFF', C.navy);
const NOTE = (t) => box('Note', [t], C.lyellow, C.orange);
const paper = (t) => p(`**${t}**`, { color: C.navy, size: 26, before: 240, after: 100 });

out.push(h1('MID-BOOK TEST · Units 13–18 — KEY'));
out.push(p('_Proactive English · A2 · Book 2 · Syria Edition · Answer Key_', { color: '7F7F7F' }));
out.push(box('For the teacher', [
  '**Total: 60 marks** – Reading 20 · Writing 15 · Listening 15 · Speaking 10.',
  'Reading and Listening are **1 mark per question**. Writing and Speaking have bands, below.',
  'Read each listening part **twice**, at normal speed, with a short pause between the questions. Do not slow down — the skill being tested is catching one fact in ordinary speech.',
  'The three audio scripts are printed in this key, after the listening answers.',
], C.lblue, C.navy));

// ---------- PAPER 1 ----------
out.push(paper('PAPER 1 · READING (20 marks – 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** (6)', '1 **B** · 2 **B** · 3 **C** · 4 **B** · 5 **B** · 6 **C**'],
  ['**Part 2** (5)', '7 **B** (Rami) · 8 **C** (Hiba) · 9 **A** (Nour) · 10 **B** (Rami) · 11 **A** (Nour)'],
  ['**Part 3** (5)', '12 **B** · 13 **B** · 14 **B** · 15 **C** · 16 **B**'],
  ['**Part 4** (4)', '17 **under** · 18 **not** · 19 **on** · 20 **in**'],
], [1, 3]));
out.push(NOTE('**Part 4 note:** accept only these words. **under** (not "below", which nobody writes on a screen); **not** (the sentence contrasts the address with the name); **on** a piece of paper (not "in"); **in** your notes (not "on"). One mark each, no half marks.'));
out.push(NOTE('**Part 1 note:** question **3** is the one that separates the class. The notice says you may change a ticket **up to 18:00 the day before**, so **C**. Students who choose **A** have read "the day before travel" and stopped. Question **6** tests _used to_ against the present perfect in one short message, which is the whole of Units 13 and 16 in two lines.'));
out.push(NOTE('**Part 3 note:** question **12** gives three real numbers from the text and only one answers the question asked. Question **14** is the Unit 18 point — she was going to buy a telephone because she **described the fault wrongly**, not because anything was old or broken.'));

// ---------- PAPER 2 ----------
out.push(pb());
out.push(paper('PAPER 2 · WRITING (15 marks)'));
out.push(S('Part 1 – a message to the building (5 marks)'));
out.push(table(['marks', 'what it looks like'], [
  ['**5**', 'All three points, clearly, in 25+ words. Conditions correct (_if it is not fixed…_). Somebody could act on it.'],
  ['**3–4**', 'All three points but one is vague, or the conditional slips (_if it will not be fixed_). Still usable.'],
  ['**1–2**', 'One or two points only, or so short that the reader has to guess.'],
  ['**0**', 'Nothing, or nothing on the task.'],
], [1, 4]));
out.push(A('**Under 25 words: maximum 3 marks**, however good the English is.'));
out.push(SAMPLE([
  '**Strong sample (41 words)**',
  'TO EVERYBODY IN THE BUILDING. The water will be off on Tuesday from eight until two. If it is not finished on Tuesday, it will also be off on Wednesday, and we will put a note here either way. Please fill something on Monday night.',
]));
out.push(SAMPLE([
  '**Weaker sample (26 words) – 3 marks**',
  'The water is off in Tuesday. If it will not finish, Wednesday too. Fill bottles please.',
  '_All three points are there and it is just long enough — but **in Tuesday** should be **on Tuesday**, **if it will not finish** must be **if it is not finished** (the rule the whole of Unit 15 exists for), and there is no time, which is the one thing a reader actually needs._',
]));
out.push(S('Part 2 – an email to Anna (10 marks)'));
out.push(table(['', '5 marks', '3 marks', '1 mark'], [
  ['**Content (5)**', 'All three points answered and each one developed with a detail.', 'All three points but one is bare.', 'One or two points only.'],
  ['**Language (5)**', 'Present perfect, _will / probably_ and advice used correctly; linkers; a greeting and an ending.', 'Understandable with mistakes that do not stop the reader.', 'Many mistakes; the reader has to work.'],
], [1, 1.6, 1.4, 1.2]));
out.push(A('**Under 35 words: maximum 6 marks.** Count the words before you mark the English.'));
out.push(SAMPLE([
  '**Strong sample (62 words)**',
  'Hi Anna! I\'m so glad you\'re coming. One thing you have to do: I\'ve walked up Qasioun at night three times and it is the best thing in this city — the whole of Damascus is underneath you. It will probably be about twenty-five degrees in the day, but the evenings get cold, so bring a jacket. See you next month!',
]));
out.push(SAMPLE([
  '**Weaker sample (36 words) – 6 marks**',
  'Hi Anna. I have go to Qasioun mountain, you must go. Next month weather will good, maybe hot. Bring jacket because in night is cold. Bye.',
  '_All three points are answered and it is over 35 words, so it is not capped — but: **I have go** should be **I have been**; **weather will good** needs **will be**; **Bring jacket** needs **a**; **in night** should be **at night**. Content 4, Language 2._',
]));

// ---------- PAPER 3 ----------
out.push(pb());
out.push(paper('PAPER 3 · LISTENING (15 marks – 1 mark per question)'));
out.push(table(['Part', 'Answers'], [
  ['**Part 1** (5)', '21 **A** · 22 **B** · 23 **B** · 24 **B** · 25 **A**'],
  ['**Part 2** (5)', '26 **eighth / 8th** · 27 **two / 2** · 28 **eleven / 11** · 29 **nothing / free** · 30 **last**'],
  ['**Part 3** (5)', '31 **B** · 32 **A** · 33 **B** · 34 **A** · 35 **B**'],
], [1, 3]));
out.push(NOTE('**Part 2 note:** accept numbers as figures or words. For **28** accept _11_, _11:00_, _eleven_ or _eleven o\'clock_. For **29** accept _free_, _nothing_ or _0_. Do not accept _11 o\'clock Saturday_ for 28 — the gap is the time only.'));
out.push(NOTE('**Part 1 note:** question **22** is the Unit 18 point in a listening: the man says "it won\'t charge" and then describes something else. Students who answer from his first sentence get **A**; students who listen to the description get **B**.'));
out.push(S('🔊 Track MT-1 · Audio script (Listening Part 1)'));
out.push(dlg(null, [
  ['**21**', '**W:** The exam list has moved Rania\'s exam to Monday. **M:** So you can\'t travel on Friday. Have you changed the ticket? **W:** I will, but not yet — the hotel first. If I don\'t ring them tonight they give the room away, and I\'ve been there before. The ticket office is open until six tomorrow.'],
  ['**22**', '**M:** It won\'t charge. My son says I need a new one. **W:** Tell me what it actually does. **M:** I put the wire in and nothing happens. Sometimes the little picture comes on for a second and then it goes off again. **W:** Then it isn\'t the telephone. Look at the end of this — do you see how it\'s bent?'],
  ['**23**', '**M:** Is the lift fixed? **W:** The part arrived yesterday and he\'s fitting it tonight, after the last class. **M:** So we\'re upstairs on Thursday? **W:** No — tonight nothing changes, and Thursday is tonight. We\'re downstairs as we were on Tuesday. From Saturday we\'re back in Room 12, if he finishes.'],
  ['**24**', '**M:** You\'ve been at TechCare a long time now. **W:** It feels like it. I came in December the year before last as a trainee, and I\'ve had my contract since last December. **M:** So two years? **W:** Fourteen months with a contract. Everybody adds the trainee months and I don\'t.'],
  ['**25**', '**W:** Have you decided about the course? **M:** I have. The forms go in on the first of March. **W:** This year? I thought you were going to wait. **M:** I was. Then I looked at the forms and I\'m still going to do it, and both my referees have said yes.'],
]));
out.push(S('🔊 Track MT-2 · Audio script (Listening Part 2)'));
out.push(dlg(null, [
  ['Mr Bassam', 'Right — the spring term. Everybody keeps asking me and the paper is on the door, so let me say it once. The term starts on the eighth of March and it runs for twelve weeks. General English is two evenings a week, half past five until seven. The conversation club is on Saturdays, and that one starts at eleven — eleven, not ten, and I have said ten to four people this week. If you have not studied here before you need the placement test, and the test costs nothing at all, which people never believe. It is on Tuesdays and Thursdays at four. And certificates are given out in the last week, so do not come and ask me for one in week nine.'],
]));
out.push(S('🔊 Track MT-3 · Audio script (Listening Part 3)'));
out.push(dlg(null, [
  ['Nour', 'The course is six weeks — two evenings a week, with an assessment at the end that decides everything. On the first Tuesday Mr Jamil asked everybody what they wanted to learn, and I said "everything", and he said that was not an answer, and then he waited, which is a thing he does. Later he made us write two things we are good at and two we are bad at. I wrote that I am bad at writing reports, and he stopped me there and said that is not what is wrong. He said I am not bad at writing; I find it hard to begin, and those are two different problems. He was right — I have written four reports this month and all four were written on the last evening. So we are not working on my writing at all. We have fixed a day: every report starts on a Tuesday, whether I feel like it or not. And I have decided not to start the online course as well this year. Last year I would have signed up for both without thinking about it.'],
]));

// ---------- PAPER 4 ----------
out.push(pb());
out.push(paper('PAPER 4 · SPEAKING (10 marks)'));
out.push(A('**How to run it:** take two students at a time. **Part 1**: ask each student three or four questions from the list (about two minutes). **Part 2**: give the task, then let the pair talk — do not interrupt (about two minutes). Mark with the table in the Student\'s Book.'));
out.push(NOTE('A student who answers only the question asked, correctly, and adds nothing, cannot score more than 2–3 marks for communication. Say this to the class **before** the test, not after it.'));
out.push(S('Part 1 – sample answers (what a good A2 answer sounds like)'));
out.push(A('**Have you ever been to another city in this country?** _Yes, I have. I\'ve been to Aleppo twice, both times for work. I went in 2022 and again last year, and both times it rained, so I\'ve never really seen it properly. I\'d like to go back in the spring._'));
out.push(A('**What do you think will happen in your street?** _I think there will be more cars and fewer shops. It will probably be louder than it is now. But there will still be a man selling bread on the corner at seven in the morning — that will not change._'));
out.push(A('**What did you use to do at the weekend?** _When I was younger I used to play football in the street until it got dark, because there weren\'t any cars parked there. I didn\'t use to like Fridays, because everybody was at home and there was nowhere to be alone._'));
out.push(A('**What are you trying to learn?** _I\'m trying to learn to drive. I decided in October and I\'ve paid for twelve lessons, so it is decided. I need to get the medical paper first and I haven\'t done that yet._'));
out.push(NOTE('In every one of those answers the student gives the answer **and then one more thing** — a date, a number, a reason, a contrast. That is the difference between 2 marks and 5, and it is teachable in one lesson.'));
out.push(S('Part 2 – sample conversation (two students)'));
out.push(SAMPLE([
  '**A:** So — your aunt wants to buy a new telephone. What do we tell her?',
  '**B:** First I think we should find out what it actually does. People always say "it\'s broken" and it usually isn\'t.',
  '**A:** That\'s true. Have you tried asking her to show you?',
  '**B:** She lives in Homs. But we could ask her to ring us and describe it.',
  '**A:** Right. And if it just won\'t turn on at all, then it might really be finished.',
  '**B:** It might. But if it keeps starting and stopping, it\'s probably the wire, and a wire is eight thousand.',
  '**A:** Unless she\'s dropped it. Then it could be anything.',
  '**B:** True. So: we ring her, we ask her what it does — not what she thinks is wrong — and we tell her not to buy anything until Saturday.',
  '**A:** Agreed. And if it is the wire, we buy it and take it to her.',
  '**B:** Good. That\'s what we\'ll say.',
]));
out.push(NOTE('This conversation would score 5 and 5. Count what is in it: three conditionals, two _might_s, a _probably_, _Have you tried_ + -ing, and a decision at the end that both students made together. That is Units 13–18 doing their job in two minutes.'));
out.push(sp());
out.push(box('After the test', [
  '**42–60** = very good. **30–41** = good — look again at the weakest paper. **Under 30** = go through Units 13–18 again before Unit 19.',
  'Three questions are worth going back over with the whole class whatever the marks: **Reading 3** (_up to 18:00 the day before_), **Cloze 18** (_not_), and **Listening 22** (the fault that is not what the man said it was). Each one is a habit rather than a rule.',
  'Unit 19 starts the second half of the book, and opens with relative clauses — _the one who_, _the one with_ — so the class will be describing each other within ten minutes of coming back.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · Mid-Book Test — Key');
