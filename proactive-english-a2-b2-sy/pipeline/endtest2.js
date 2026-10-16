// Proactive English A2 · Syria Edition · Book 2 — END-OF-BOOK TEST (Units 13–24)
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const D = require('docx');
const Q = (t) => p(t, { indent: 200, after: 50 });
const part = (code, title, marks) => new D.Paragraph({
  spacing: { before: 240, after: 100 }, keepNext: true,
  children: [
    new D.TextRun({ text: ` ${code} `, bold: true, color: 'FFFFFF', shading: { type: D.ShadingType.CLEAR, fill: C.navy, color: 'auto' }, font: 'Calibri', size: 22 }),
    new D.TextRun({ text: `  ${title}`, bold: true, color: C.navy, font: 'Calibri', size: 24 }),
    new D.TextRun({ text: `   (${marks} marks)`, color: '7F7F7F', font: 'Calibri', size: 20 }),
  ],
});
const txt = (paras) => box(null, paras, 'FFFFFF', C.navy);

out.push(h1('End-of-Book Test  ·  Book 2  ·  Units 13–24'));
out.push(p('_Proactive English · A2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Information for the student', [
  'There are **four papers**: Reading (30 marks) · Writing (30 marks) · Listening (20 marks) · Speaking (20 marks). **Total: 100 marks.**',
  '**Time:** Reading and Writing 70 minutes · Listening about 25 minutes · Speaking 8–10 minutes in pairs.',
  'Write your answers on the paper. For the Listening you will hear each part **twice**.',
  'This test is in the format of the **Cambridge A2 Key** exam. Everything in it comes from Units 13–24 of this book.',
], C.lblue, C.navy));
out.push(table(['Paper', 'Parts', 'Marks', 'Your mark'], [
  ['Reading', '5', '30', ''],
  ['Writing', '2', '30', ''],
  ['Listening', '4', '20', ''],
  ['Speaking', '2', '20', ''],
  ['**TOTAL**', '', '**100**', ''],
], [2, 1, 1, 1.4], { headFill: C.navy }));

// ===================== READING =====================
out.push(pb());
out.push(h2('Paper 1  ·  Reading   (30 marks · 40 minutes)'));
out.push(part('Part 1', 'Six short texts. For each one, choose A, B or C.', 6));
out.push(txt(['**1**   **MEZZEH PUBLIC LIBRARY**   Open daily except Friday, 9–2 and 4–7. Lending cards are not ready yet; for now your name is written in the book at the desk. Please bring identification on a first visit.']));
out.push(Q('**A** You cannot borrow anything until the cards are ready.   **B** You can borrow a book now, but your name is written by hand.   **C** You need identification every time you come.'));
out.push(txt(['**2**   _Message book, TechCare:_  "Mon 10:15 · Mrs Jamila (0991 448 207). Asked us to ring her **before Thursday**. Would not say what about; I asked twice. Not angry — in a hurry. — N."']));
out.push(Q('**A** Mrs Jamila was angry about something.   **B** Nour does not know why Mrs Jamila rang.   **C** Nour will ring on Thursday.'));
out.push(txt(['**3**   **AL-SHARQ PARTS — ACCOUNT 4412**   From 1 May, orders over 100,000 SYP require confirmation in writing before despatch. A telephone confirmation will no longer be accepted. Orders under 100,000 SYP are unchanged.']));
out.push(Q('**A** All orders now need confirming in writing.   **B** Small orders go out as they do now.   **C** Telephone orders are no longer possible at all.'));
out.push(txt(['**4**   _Email from the centre:_  "Fees for continuing students are unchanged at present. New students pay a registration fee from September. Any query must be raised before the end of week two."']));
out.push(Q('**A** Continuing students will pay the same next year.   **B** Continuing students pay nothing extra for now.   **C** New students pay the same as everybody else.'));
out.push(txt(['**5**   **AL-RAYYAN PRINTING — RETURNS**   Faulty work: twelve months, receipt needed, the box is not required. Changed your mind: fourteen days, with the box, and we give a credit note, not cash.']));
out.push(Q('**A** You always need the box.   **B** You get money back if you change your mind.   **C** Faulty work can be returned for a year without the box.'));
out.push(txt(['**6**   _Note above the telephone:_  "Four things, and a message with three of them is not a message. Who · when they rang · what they want, in their words · how to reach them and when. And always ask why. — Omar"']));
out.push(Q('**A** Three of the four things are enough.   **B** You should write what the caller wants in your own words.   **C** A message without a number is not finished.'));

out.push(pb());
out.push(part('Part 2', 'Read about three people. For each question, choose A, B or C.', 7));
out.push(table(['A  Nour', 'B  Souad', 'C  The Haddad sisters'], [[
  'Nour has finished Book 2 and she is not going on this year. The second workshop opens in October and she will be the only person at the desk for six months. She is coming back next September and she has given a date. She says her weakest paper is listening and she knows it.',
  'Souad applied for a course in 2019, did not get a place, and has not applied since. She reads very well and she has never written a formal letter in English. She is free on Friday mornings only, and she needs somebody to sit with her while she fills in the form.',
  'The Haddad sisters are both continuing in September. One of them has a job that is paying half of her fee, and the other has asked at work and been refused. They can only come in the evening, and they want the same class, because neither of them will speak in a room without the other.']], [1, 1, 1]));
out.push(sp());
[
  '**7**   Who needs help with a form?     A     B     C',
  '**8**   Who should be asked again in August?     A     B     C',
  '**9**   Who needs a class that meets in the evening?     A     B     C',
  '**10**  Who needs practice with formal writing?     A     B     C',
  '**11**  Who already knows which paper they are weakest at?     A     B     C',
  '**12**  Who should be put in the same group as somebody they know?     A     B     C',
  '**13**  Who has been refused money by an employer?     A     B     C',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 3', 'Read the text and choose A, B or C for each question.', 5));
out.push(txt([
  '**THREE HUNDRED APPLICATIONS**',
  'Hiba has a place on the teacher-training course. Forty places, three hundred applications, and she heard on a Sunday in June. What almost nobody knows is that she talked herself out of applying three times in January.',
  '"I wrote it in the envelope in the first week of the book," she says. "I am going to apply, and I am not going to tell my mother until I know. I wrote it because we had to write something. I had no intention of doing it."',
  'She applied in February and did not tell anybody for eleven days. The interview was on the ninth of March, forty minutes, three people. "Two of them had the form in front of them and knew it. The third one asked me what I would do if a student would not speak, and I talked for four minutes, because I have been that student in that room."',
  'The hardest part was not the application. It was the Sunday evening in June when she told her mother, who has worked in the family shop since she was seventeen. "I was afraid she would be fine about it. If she is angry I can argue. If she just says go, then I have taken four days a week from her and she has given them without a word."',
  'Her mother listened, and then asked who was going to do the Thursdays, the stocktaking and the deliveries. "That was the kindest thing she could have done and she will never know it. I had answers to all three and I have had them for a month. It was the only question all week that I could answer."',
]));
[
  '**14**  What does almost nobody know about Hiba?   **A** that she did not get a place the first time   **B** that she nearly did not apply   **C** that she did not want the course',
  '**15**  Why did she write in the envelope in January?   **A** because she was sure she would apply   **B** because her mother asked her to   **C** because the class had to write something',
  '**16**  What happened at the interview?   **A** nobody knew her form   **B** she answered one question at length   **C** it lasted only a few minutes',
  '**17**  What was Hiba afraid of?   **A** that her mother would be angry   **B** that her mother would say nothing at all   **C** that her mother would simply agree',
  '**18**  Why was her mother\'s question kind?   **A** it was something Hiba could answer   **B** it stopped the argument   **C** it was about the shop and not the course',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 4', 'Choose the best word (A, B or C) for each gap.', 6));
out.push(txt([
  '**THE END-OF-COURSE EVENING**',
  'We have been planning the evening (19) ______ April and it is on the twenty-seventh. Twenty-four weeks of Thursdays, and nine of us have finished out of the sixteen who started.',
  'Omar has (20) ______ printed twenty T-shirts, which nobody asked him to do and everybody is pleased about. The chairs are a different matter: three people (21) ______ that somebody else was booking them, and nobody was.',
  'Ms Huda asked us (22) ______ bring one dish each. (23) ______ to Hiba, four people are bringing rice, so somebody is going to have to be told.',
  'And thank you for (24) ______ me, last November, what I was going to do about it instead of asking whether I was all right.',
]));
[
  '**19**   A  for     B  since     C  from',
  '**20**   A  yet     B  already     C  still',
  '**21**   A  said     B  told     C  asked',
  '**22**   A  to     B  for     C  that',
  '**23**   A  According     B  Apparently     C  According to',
  '**24**   A  ask     B  to ask     C  asking',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 5', 'Write ONE word in each gap.', 6));
out.push(txt([
  '**AN EMAIL TO A SUPPLIER**',
  '**To:** M. Yilmaz, Anadolu Tekstil   **Subject:** Order 2214 — one question',
  'Dear Mr Yilmaz,',
  'Thank you (25) ______ your message, and for the April list, which arrived on Monday.',
  'One question, (26) ______ I should have asked more clearly in my last email: (27) ______ the prices held for thirty days from confirmation, as they were in January?',
  'That is the only thing I need. The answer decides (28) ______ we place order 2214 this week or next, and I would rather tell you (29) ______ now than in May.',
  'I look forward (30) ______ hearing from you.',
  'Kind regards, Lina Haddad',
]));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('Paper 2  ·  Writing   (30 marks · 30 minutes)'));
out.push(part('Part 6', 'Write a short message. 25 words or more.', 10));
out.push(box(null, [
  'Something new has opened, closed or changed where you live, and your English friend **Sam** has asked you about it.',
  'Write an email to Sam.  In your email:',
  '•  say **what has happened**',
  '•  say **when it happened** and give **one detail**',
  '•  tell Sam **what he should do** if he comes.',
], C.grey, C.navy));
out.push(...lines(6));
out.push(sp());
out.push(part('Part 7', 'Look at the three pictures. Write the story. 35 words or more.', 20));
out.push(p('_(Your teacher may show you the pictures. If not, the three pictures are described here.)_', { color: '7F7F7F' }));
out.push(table(['Picture 1', 'Picture 2', 'Picture 3'], [[
  'A family with bags is waiting at a bus station in the rain. The clock says 6.00. A woman is reading a timetable and a boy is asleep on a case.',
  'The bus has stopped at the side of a road. The driver is looking at the engine and the passengers are standing in the sun. One man is talking on a telephone.',
  'The same family is in a smaller, older bus, with boxes and two other families. Everybody is laughing. In a village square outside, a clock says 11.00.']], [1, 1, 1]));
out.push(sp());
out.push(...lines(8));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('Paper 3  ·  Listening   (20 marks · about 25 minutes)'));
out.push(p('_You will hear each part **twice**. The audio scripts are in the Answer Key._', { color: '7F7F7F' }));
out.push(part('Part 1', 'Five short conversations. Choose A, B or C.', 5));
out.push(p('🔊 **Track ET-1**'));
[
  '**1**   How long has the library been shut?   A  nine years   B  eleven years   C  thirteen years',
  '**2**   What does the woman ask the man to do?   A  ring her   B  send it in writing   C  bring the ticket',
  '**3**   What is the problem with the delivery?   A  it is not coming   B  it is coming tomorrow   C  wrong address',
  '**4**   What is the man doing in September?   A  going on to B1   B  stopping for a year   C  moving away',
  '**5**   How much did the newspaper pay?   A  15,000   B  25,000   C  50,000',
].forEach(t => out.push(Q(t)));

out.push(part('Part 2', 'Listen and complete the notes. Write ONE word or a number in each gap.', 5));
out.push(p('🔊 **Track ET-2**'));
out.push(box('AL-YASMIN CENTRE · END-OF-COURSE EVENING', [
  'Date: **Thursday the (6) ______**',
  'Doors open at: **(7) ______**',
  'Certificates at: **7.00**',
  'Every family brings: **one (8) ______**',
  'Omar is bringing: **twenty (9) ______**',
  'Tell Ms Huda by: **the (10) ______**',
], C.lyellow, C.orange));

out.push(part('Part 3', 'Listen to Nour and Omar. Choose A, B or C.', 5));
out.push(p('🔊 **Track ET-3**'));
[
  '**11**  Why is Nour not going on in September?   A  the money   B  her work   C  she does not want to',
  '**12**  When is she coming back?   A  in January   B  next September   C  she does not know',
  '**13**  What does Omar write next to her number?   A  her address   B  "ask about B1"   C  a date',
  '**14**  What has nobody done yet?   A  booked the chairs   B  printed the T-shirts   C  told Ms Huda',
  '**15**  What does Nour say about the T-shirts?   A  wrong size   B  nobody asked him to   C  too expensive',
].forEach(t => out.push(Q(t)));

out.push(part('Part 4', 'Ms Huda talks about five students. What is each one doing next? Write a letter A–G. There are TWO extra letters.', 5));
out.push(p('🔊 **Track ET-4**'));
out.push(table(['Students', 'What they are doing next'], [
  ['16  Hiba ______', 'A  going on to B1 with an employer paying half'],
  ['17  Omar ______', 'B  starting a teacher-training course'],
  ['18  Lina ______', 'C  stopping for a year, with a date to come back'],
  ['19  Nour ______', 'D  meeting somebody from a newspaper'],
  ['20  Maysoun ______', 'E  opening a room that has been shut for years'],
  ['', 'F  leaving the city in the autumn'],
  ['', 'G  taking the next group, whoever is in it'],
], [1, 2]));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('Paper 4  ·  Speaking   (20 marks · 8–10 minutes, in pairs)'));
out.push(part('Part 1', 'The examiner asks you questions. (3–4 minutes)', 8));
out.push(p('**Phase 1 – about you.** The examiner asks each student:'));
out.push(box(null, [
  'What\'s your name? How do you spell your family name?',
  'How long have you been coming to this centre? And how long have you lived in this city?',
  'What do you do – do you work or study?',
  'What are you going to do in September? Is that arranged, or is it a plan?',
], C.grey, C.navy));
out.push(p('**Phase 2 – tell me about…** The examiner chooses **two** of these for each student. Speak for about 30 seconds each time.'));
out.push(box(null, [
  '…something you have never done and would like to do.   ·   …something that has changed where you live.',
  '…a piece of news you have heard this month.   ·   …something you used to do and do not do now.',
  '…a time you complained about something.   ·   …somebody you would like to thank, and why.',
], C.grey, C.navy));
out.push(part('Part 2', 'Talk with your partner about the card. (4–5 minutes)', 12));
out.push(p('**a**  Look at the card together. Say what you think about each idea, and then **agree on one**.'));
out.push(box('SOMEBODY IN YOUR CLASS HAS STOPPED COMING AND HAS NOT SAID WHY. What should you do?', [
  '**1** ring them the same evening   ·   **2** wait a week and see   ·   **3** ask the teacher to ring them   ·   **4** send a message to the whole class and see who knows',
  'Talk about: who should do it · how soon · what you would say · what happens if everybody waits for somebody else.',
], C.lyellow, C.orange));
out.push(p('**b**  Then the examiner asks you both:'));
out.push(box(null, [
  'Which of these would you want somebody to do for you? Why?',
  'What is the best way to tell somebody news they will not like?',
  'Are you going to carry on with English next year? What is already arranged?',
], C.grey, C.navy));
out.push(sp());
out.push(box('What the examiner is listening for', [
  'Can you **answer the question that was asked**? · Can you **give a reason** every time, not only an opinion?',
  'Can you **ask your partner** something and **react** to what they say? · Can people **understand** you, even with mistakes?',
  'Do you use the language of this book: _have you ever · for / since · already / yet · according to · ask somebody to · going to · I hope / I\'m worried that · thank you for + -ing_?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('When you finish', [
  'Your teacher will give you your marks for the four papers and the **"what to do next"** advice from the Answer Key.',
  'Then read two pages next to each other: the Stage 7 you wrote in **Unit 13** and the one you wrote in **Unit 24**. Nothing in this test will tell you as much as those two pages do.',
  '**And then you have finished A2.** Twenty-four units, one hundred and sixty-eight cycles, two years of Thursdays. Keep the envelope. Write the next one.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 2 · Syria Edition · End-of-Book Test');
