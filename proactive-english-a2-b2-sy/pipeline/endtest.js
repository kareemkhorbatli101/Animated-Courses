// Proactive English A2 · Syria Edition · Book 1 — END-OF-BOOK TEST (Units 1–12)
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

out.push(h1('End-of-Book Test  ·  Book 1  ·  Units 1–12'));
out.push(p('_Proactive English · A2 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('Information for the student', [
  'There are **four papers**: Reading (30 marks) · Writing (30 marks) · Listening (20 marks) · Speaking (20 marks). **Total: 100 marks.**',
  '**Time:** Reading and Writing 70 minutes · Listening about 25 minutes · Speaking 8–10 minutes in pairs.',
  'Write your answers on the paper. For the Listening you will hear each part **twice**.',
  'This test is in the format of the **Cambridge A2 Key** exam. Everything in it comes from Units 1–12 of this book.',
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
out.push(txt(['**1**   **AL-SHIFA PHARMACY**   Closed 1.00–4.00 for lunch. For urgent medicine outside these hours, please go to Al-Noor Clinic, Mezzeh.']));
out.push(Q('**A** The pharmacy is closed all afternoon.   **B** You can get urgent medicine somewhere else between one and four.   **C** The clinic sells the same medicine at any time.'));
out.push(txt(['**2**   _Message from Lina to Rana:_  "The bus leaves at eight, not half past – they changed it yesterday. I\'ll be at the station at a quarter to. Don\'t run, but don\'t stop for coffee either!"']));
out.push(Q('**A** The bus time is earlier than before.   **B** Rana should buy coffee at the station.   **C** Lina is going to arrive at eight.'));
out.push(txt(['**3**   **AL-YASMIN CENTRE – LIBRARY**   You may borrow two books for two weeks. Write your name and the date in the book at the desk. Do not take books out of the building without writing them in the book.']));
out.push(Q('**A** You can\'t take books home.   **B** You must write your name and the date before you take a book out.   **C** You can borrow books for two months.'));
out.push(txt(['**4**   _Email from Mr Khaled to Lina:_  "Thursday\'s meeting is now on Friday at ten. If Friday is difficult for you, tell me today and we will keep Thursday."']));
out.push(Q('**A** The meeting is definitely on Friday.   **B** Lina can ask to keep the old day.   **C** The meeting is cancelled.'));
out.push(txt(['**5**   **HOTEL AL-BAHR**   Check-out is at 12.00. If you leave later, we must charge one more night. You may leave your bags with us until the evening – there is no charge for this.']));
out.push(Q('**A** You can stay in the room until the evening.   **B** You pay for your bags after twelve.   **C** You pay for another night if you stay in the room after twelve.'));
out.push(txt(['**6**   _Note on the fridge at the Al-Yasmin kitchen:_  "Cooking club – Wednesday only. Please take your food home the same evening. Anything left on Thursday morning goes in the bin. Sorry! – Omar"']));
out.push(Q('**A** You can keep food in the fridge all week.   **B** Food left until Thursday will be thrown away.   **C** The cooking club meets on Thursdays.'));

out.push(pb());
out.push(part('Part 2', 'Read about three people. For each question, choose A, B or C.', 7));
out.push(table(['A  Samir', 'B  Dalia', 'C  The Haddad family'], [[
  'Samir is twenty-six and he works in a shop from nine until nine, six days a week. Friday is his only free day, and he cannot come on any other day. He wants English for his work. He learns quickly when he speaks, and he hates writing exercises at home.',
  'Dalia is a university student with free mornings and no money. She reads English well but she is very shy and she never speaks in a big group. She wants to pass an exam next year, and she can study three hours every day.',
  'The Haddads – two parents and three children – are moving to another country in six months. They need everyday English: shopping, the doctor, the school, the neighbours. They can only study together in the evening, after the children eat.']], [1, 1, 1]));
out.push(sp());
[
  '**7**   Who needs a class that meets on Fridays?     A     B     C',
  '**8**   Who should join a class with a lot of speaking and almost no homework?     A     B     C',
  '**9**   Who should start in a very small group of two or three people?     A     B     C',
  '**10**  Who should look for a course that costs nothing?     A     B     C',
  '**11**  Who should practise the language of shops, the doctor and the school?     A     B     C',
  '**12**  Who should study together with their family after dinner?     A     B     C',
  '**13**  Who has the most time to study every day?     A     B     C',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 3', 'Read the text and choose A, B or C for each question.', 5));
out.push(txt([
  '**NOUR\'S FIRST MONTH**',
  'When Nour started her training at TechCare, she could repair a phone in twenty minutes, but she could not answer the telephone in English. "The first week was terrible," she says. "A customer from Jordan phoned, and I gave the phone to my colleague Rami. I was so ashamed that I went to the English centre the same evening."',
  'Her manager, Mr Fouad, gave her two rules: write everything in the parts book, and never promise a day you are not sure about. "The second rule saved me twice," she says. "A customer asked for his machine on Thursday. I said Sunday. It was ready on Friday, and he was happy. If I had said Thursday, he would have been angry on Thursday evening."',
  'The hardest part was not the machines. It was the telephone. In the fourth week she took a call from the same Jordanian customer. She wrote the message on the slip – the name, the time, the problem, the number – and read the number back to him twice. "He said thank you, Miss Nour. He remembered my name. I put the slip on Mr Fouad\'s desk and I sat down and my hands were shaking."',
  'Last week she finished the training and got a contract. Her mother asked her what was different now. Nour thought about it and said: "Nothing in my hands. Everything in my mouth."',
]));
[
  '**14**  What was Nour\'s problem in the first week?   **A** She couldn\'t repair the machines.   **B** She couldn\'t speak English on the phone.   **C** Her colleague didn\'t help her.',
  '**15**  Why did she go to the English centre?   **A** Her manager told her to.   **B** A customer complained about her.   **C** She felt ashamed after a phone call.',
  '**16**  What does the second rule mean in practice?   **A** Give a later day than you think.   **B** Never tell the customer a day.   **C** Always finish the work on Thursday.',
  '**17**  What did she do when the Jordanian customer phoned again?   **A** She gave the phone to Rami.   **B** She wrote the message and checked the number.   **C** She asked him to call Mr Fouad.',
  '**18**  What does Nour mean at the end?   **A** Her hands are still shaking.   **B** Her repair work changed, not her English.   **C** Her English changed, not her repair work.',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 4', 'Choose the best word (A, B or C) for each gap.', 6));
out.push(txt([
  '**A HOLIDAY IN LATAKIA**',
  'Last November my sister and I spent a week in Latakia. We stayed in a small family hotel (19) ______ the sea road, twenty minutes from the centre. There was no lift, but breakfast was (20) ______ and the owner knew our names after one day.',
  'The first two days were wet, so we sat on the balcony and watched the rain. (21) ______ Monday the weather was sunny and warm, and we swam every morning.',
  'On the last Wednesday we took a boat trip at (22) ______ . It only lasted an hour and it cost forty thousand, with tea. We had to (23) ______ one day before, because they need at least six people.',
  'It was the best week of the year. Next November we are going (24) ______ do exactly the same thing.',
]));
[
  '**19**   A  in     B  on     C  at',
  '**20**   A  included     B  inside     C  free time',
  '**21**   A  Since     B  Until     C  From',
  '**22**   A  sunset     B  the sun     C  evening time',
  '**23**   A  order     B  book     C  ask',
  '**24**   A  for     B  to     C  that',
].forEach(t => out.push(Q(t)));

out.push(pb());
out.push(part('Part 5', 'Write ONE word in each gap.', 6));
out.push(txt([
  '**AN EMAIL TO A HOTEL**',
  '**Subject:** Booking request – 3–6 May',
  'Dear Sir or Madam,',
  'I would (25) ______ to book one double room from Friday 3 May (26) ______ Monday 6 May – three nights.',
  'There (27) ______ two of us. Could you tell me how much it is (28) ______ night, and if breakfast is included?',
  'We would also like to know (29) ______ there is parking near the hotel, because we are coming (30) ______ car.',
  'Thank you very much.',
  'Best regards, Rana Khoury',
]));

// ===================== WRITING =====================
out.push(pb());
out.push(h2('Paper 2  ·  Writing   (30 marks · 30 minutes)'));
out.push(part('Part 6', 'Write a short message. 25 words or more.', 10));
out.push(box(null, [
  'Your English friend **Sam** is coming to your city next week.',
  'Write an email to Sam.  In your email:',
  '•  say **what the weather is going to be like**',
  '•  tell him **one place he should visit**, and why',
  '•  ask him **one question** about his journey.',
], C.grey, C.navy));
out.push(...lines(6));
out.push(sp());
out.push(part('Part 7', 'Look at the three pictures. Write the story. 35 words or more.', 20));
out.push(p('_(Your teacher may show you the pictures. If not, the three pictures are described here.)_', { color: '7F7F7F' }));
out.push(table(['Picture 1', 'Picture 2', 'Picture 3'], [[
  'A family is sitting in a big hall at a wedding. Everybody is eating and talking. On the wall there is a clock: 8.00.',
  'The hall is dark. People are holding up their phones for light. One man is standing with his mouth open – he was speaking.',
  'The lights are on again. Everybody is laughing and clapping. An old woman in the middle is singing, and a young man is taking her photograph.']], [1, 1, 1]));
out.push(sp());
out.push(...lines(8));

// ===================== LISTENING =====================
out.push(pb());
out.push(h2('Paper 3  ·  Listening   (20 marks · about 25 minutes)'));
out.push(p('_You will hear each part **twice**. The audio scripts are in the Answer Key; if there is no audio, your teacher will read them aloud._', { color: '7F7F7F' }));
out.push(part('Part 1', 'Five short conversations. Choose A, B or C.', 5));
out.push(p('🔊 **Track ET-1**'));
[
  '**1**   What time does the bus leave?        A  7.30        B  8.00        C  8.30',
  '**2**   What is the woman going to buy?      A  flowers     B  sweets      C  a photo frame',
  '**3**   Where is the man\'s room?             A  ground floor   B  second floor   C  third floor',
  '**4**   What\'s the weather going to be like tomorrow?   A  sunny   B  rainy   C  windy',
  '**5**   What does the woman ask the man to do?   A  phone the supplier   B  send an email   C  come to a meeting',
].forEach(t => out.push(Q(t)));

out.push(part('Part 2', 'Listen and complete the notes. Write ONE word or a number in each gap.', 5));
out.push(p('🔊 **Track ET-2**'));
out.push(box('AL-YASMIN CENTRE · END-OF-YEAR EVENING', [
  'Day: **Thursday 19 (6) ______**',
  'Doors open at: **(7) ______**',
  'Certificates for level A2 at: **6.15**',
  'Every family brings: **one (8) ______**',
  'No parking in front – use the street **(9) ______**',
  'Answer to Mr Bassam by: **(10) ______ December**',
], C.lyellow, C.orange));

out.push(part('Part 3', 'Listen to Maya and Lina. Choose A, B or C.', 5));
out.push(p('🔊 **Track ET-3**'));
[
  '**11**  Why is Maya phoning?        A  to invite Lina somewhere   B  to change a plan   C  to ask for help',
  '**12**  What time do they agree on?  A  four o\'clock   B  half past four   C  five o\'clock',
  '**13**  What is Lina going to bring?  A  nothing   B  sweets   C  a present for the children',
  '**14**  How are they going to travel? A  by bus   B  by taxi   C  on foot',
  '**15**  What does Maya say about the weather?   A  It\'s going to rain.   B  It\'s going to be hot.   C  It\'s going to be cold in the evening.',
].forEach(t => out.push(Q(t)));

out.push(part('Part 4', 'Ms Huda talks about five students. What does each one need? Write a letter A–G. There are TWO extra letters.', 5));
out.push(p('🔊 **Track ET-4**'));
out.push(table(['Students', 'What they need'], [
  ['16  Samir ______', 'A  more practice on the telephone'],
  ['17  Nour ______', 'B  to write shorter sentences'],
  ['18  Lina ______', 'C  an evening class'],
  ['19  Omar ______', 'D  to speak more slowly'],
  ['20  Hiba ______', 'E  to check her past tenses'],
  ['', 'F  to ask more questions in class'],
  ['', 'G  to read something in English every day'],
], [1, 2]));

// ===================== SPEAKING =====================
out.push(pb());
out.push(h2('Paper 4  ·  Speaking   (20 marks · 8–10 minutes, in pairs)'));
out.push(part('Part 1', 'The examiner asks you questions. (3–4 minutes)', 8));
out.push(p('**Phase 1 – about you.** The examiner asks each student:'));
out.push(box(null, [
  'What\'s your name? How do you spell your family name?',
  'Where do you live? Who do you live with?',
  'What do you do – do you work or study?',
  'How do you come here – by bus, by car, or on foot? How long does it take?',
], C.grey, C.navy));
out.push(p('**Phase 2 – tell me about…** The examiner chooses **two** of these for each student. Speak for about 30 seconds each time.'));
out.push(box(null, [
  '…your family.   ·   …what you do at the weekend.   ·   …a celebration in your family.',
  '…a journey you made this year.   ·   …your work or your studies.   ·   …the food you like.',
], C.grey, C.navy));
out.push(part('Part 2', 'Talk with your partner about the card. (4–5 minutes)', 12));
out.push(p('**a**  Look at the card together. Say what you think about each idea, and then **agree on one**.'));
out.push(box('A VISITOR IS COMING TO YOUR CITY FOR ONE DAY. Where should you take them?', [
  '**1** the old city and the market   ·   **2** a park by the river   ·   **3** a famous old building outside the city   ·   **4** a long lunch with your family',
  'Talk about: how much time each one takes · how much it costs · what the visitor learns · the weather.',
], C.lyellow, C.orange));
out.push(p('**b**  Then the examiner asks you both:'));
out.push(box(null, [
  'Which of these do you like best? Why?',
  'What should a visitor to your country never do?',
  'Do you prefer to travel alone or with other people? Why?',
], C.grey, C.navy));
out.push(sp());
out.push(box('What the examiner is listening for', [
  'Can you **answer the question that was asked**? · Can you **give a reason** every time, not only an opinion?',
  'Can you **ask your partner** something and **react** to what they say? · Can people **understand** you, even with mistakes?',
  'Do you use the language of this book: _should · going to · because · I prefer · It\'s polite to · while / when_?',
], C.lblue, C.navy));
out.push(sp());
out.push(box('When you finish', [
  'Your teacher will give you your marks for the four papers and the **"what to do next"** advice from the Answer Key.',
  'Then: **Book 2** – twelve more units, from here to the end of A2.',
], C.lorange, C.orange));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · End-of-Book Test');
