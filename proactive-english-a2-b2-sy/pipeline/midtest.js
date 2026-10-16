// Proactive English A2 · Syria Edition · Book 1 · MID-BOOK TEST (Units 1–6) — Test paper
const L = require('./lib');
const { p, h1, h2, pb, sp, box, dlg, table, lines, C } = L;
const out = [];
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const q = (t) => p(t, { indent: 200, after: 50 });
const partHead = (code, title, info) => new (require('docx').Paragraph)({});

function part(title, info) {
  return box(title, [info], C.lteal, C.teal);
}

out.push(h1('MID-BOOK TEST  ·  Units 1–6'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(table(['Name', '', 'Class', '', 'Date', ''], [['', '', '', '', '', '']], [1, 2, 0.8, 1.2, 0.8, 1.2]));
out.push(sp());
out.push(box('Information for students', [
  'There are **four** papers: **Reading** (30 min) · **Writing** (20 min) · **Listening** (about 15 min) · **Speaking** (in pairs, 5 minutes with your teacher).',
  'Total: **60 marks** (Reading 20 · Writing 15 · Listening 15 · Speaking 10).',
  'Write your answers on this paper. Write clearly in pen. You can use a pencil for notes.',
  'You **cannot** use a dictionary or your phone.',
  'If you finish early, check your capital letters and full stops!',
], C.grey, C.navy));

// ================= READING =================
out.push(pb());
out.push(h2('PAPER 1  ·  READING    (30 minutes · 20 marks)'));
out.push(part('Part 1  ·  Signs and messages  (6 marks)', 'For each question, choose the correct answer **A**, **B** or **C**. Circle your answer.'));
out.push(sp());
out.push(model(['**1**  _AL-SHIFA PHARMACY  ·  Night service: call 0933 427 815. We deliver after 10 pm._']));
out.push(q('**A** The pharmacy is open all night.   **B** You can phone for medicine late at night.   **C** Delivery is free after 10 pm.'));
out.push(model(['**2**  _Rami – the Aleppo bus leaves from platform 5, not platform 3. Don\'t go to the old platform! Omar_']));
out.push(q('**A** The platform is different today.   **B** The bus is late.   **C** Rami must buy a new ticket.'));
out.push(model(['**3**  _CITY LIBRARY  ·  Thursday: closes at 2 pm  ·  Friday: closed_']));
out.push(q('**A** The library closes early on Thursday.   **B** The library opens late on Friday.   **C** The library is closed on Thursday and Friday.'));
out.push(model(['**4**  _Please have the exact money ready. The driver can\'t always give change._']));
out.push(q('**A** The journey is free.   **B** You must pay with a card.   **C** Bring the right coins and notes.'));
out.push(model(['**5**  _Maya – I\'m bringing the fruit on Friday, so don\'t buy any. Can you bring bread? Lina_']));
out.push(q('**A** Maya should buy fruit.   **B** Lina wants Maya to bring bread.   **C** Lina can\'t come on Friday.'));
out.push(model(['**6**  _MODA CLOTHES  ·  You can return any item in 14 days with your receipt. Please do not wear it first._']));
out.push(q('**A** You need your receipt to return something.   **B** You can return clothes after one month.   **C** You can return clothes you have worn.'));

out.push(pb());
out.push(part('Part 2  ·  Three people  (5 marks)', 'Read about three people. For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(table(['A  Samira – shop assistant', 'B  Jamal – minibus driver', 'C  Hiba – student'], [[
  'Samira works at a clothes shop in Al-Hamra Centre. She starts at ten and finishes at nine, six days a week. She lives near the centre, so she walks to work. Thursday is the busiest day. She loves her job because she meets new people, but her feet hurt in the evening.',
  'Jamal drives a minibus on the Mezzeh line. He gets up at half past four and starts at half past five. He finishes at three and sleeps in the afternoon. The traffic is terrible in the morning, but he knows every small street in the city. On Fridays he doesn\'t work; he takes his children to the park.',
  'Hiba studies architecture. She lives in Jaramana and her college is in the centre, so her journey takes more than an hour. She takes two services every morning. In the afternoon she works in a café near the college. These days she\'s studying every night because she has exams.']], [1, 1, 1]));
out.push(sp());
out.push(q('**7**  Who walks to work?     A     B     C'));
out.push(q('**8**  Who gets up the earliest?     A     B     C'));
out.push(q('**9**  Who is busier than usual at the moment?     A     B     C'));
out.push(q('**10**  Who doesn\'t work at the weekend?     A     B     C'));
out.push(q('**11**  Who changes transport on the way?     A     B     C'));

out.push(pb());
out.push(part('Part 3  ·  Longer text  (5 marks)', 'Read the text and choose the correct answer **A**, **B** or **C**.'));
out.push(sp());
out.push(model([
  '**My first week in Damascus – by Lama Nasser**',
  'I\'m nineteen and I come from Latakia. Last month I moved to Damascus to study English literature at the university. My sister Maya lives here too, so I\'m not alone, but my flat is in Baramkeh and she lives in Mezzeh – about forty minutes away by service.',
  'My flat is small but bright. There are two bedrooms, a kitchen and a balcony with some plants. My favourite room is the balcony: I study there every morning because it\'s quiet and the air is fresh. There isn\'t a washing machine, but there\'s a laundry next to the building. The lift doesn\'t work, so I walk up to the third floor every day. My legs are strong now!',
  'The best thing is my neighbour, Umm Ziad. On my first day she knocked on my door with a plate of food and told me everything: where the bakery is (on the corner, opposite the mosque), when the bread is hot (seven o\'clock in the morning) and which shop is the cheapest. Now we have tea together on Sundays.',
  'The only problem is the noise. My street is near a main road, so I hear cars all night. But I\'m happy here. Next month my parents are coming to visit, and I want to show them my city – my new city.',
]));
out.push(sp());
out.push(q('**12**  Why did Lama move to Damascus?   **A** to work   **B** to study   **C** to live with her sister'));
out.push(q('**13**  Where does Lama study in the morning?   **A** in the kitchen   **B** at the university   **C** on the balcony'));
out.push(q('**14**  Why does she walk up to the third floor?   **A** Because the lift is broken.   **B** Because she wants exercise.   **C** Because there isn\'t a lift.'));
out.push(q('**15**  What did Umm Ziad do on Lama\'s first day?   **A** She invited her for tea.   **B** She brought her some food.   **C** She took her to the bakery.'));
out.push(q('**16**  What does Lama not like about her flat?   **A** the size   **B** the stairs   **C** the noise'));

out.push(pb());
out.push(part('Part 4  ·  Open cloze  (4 marks)', 'Write **ONE** word for each gap.'));
out.push(sp());
out.push(model([
  '**A message from Omar**',
  'Hi Samer! Welcome to TechCare. Here\'s how to get to the office. Take the Mezzeh service – it costs 2,000 and it takes about 25 minutes. But in the morning the traffic is terrible, (17) ______ leave early!',
  'Get (18) ______ at the big pharmacy on the corner, then walk up Al-Hamra Street for five minutes. Our building is (19) ______ the left, opposite a bank. We\'re on the fourth floor – there\'s a lift.',
  'If you can\'t find it, call me. My number is 0944 318 260. See you (20) ______ Sunday! Omar',
]));

// ================= WRITING =================
out.push(pb());
out.push(h2('PAPER 2  ·  WRITING    (20 minutes · 15 marks)'));
out.push(part('Part 1  ·  A message  (5 marks)', 'Write **25 words or more**.'));
out.push(sp());
out.push(box(null, [
  'You are going to be late for your English class today. Write a message to your teacher, **Ms Huda**.',
  'In your message:  •  say **why** you are late  •  say **what time** you will arrive  •  ask her **one question** about the lesson.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(sp());
out.push(part('Part 2  ·  An email  (10 marks)', 'Write **35 words or more**.'));
out.push(sp());
out.push(box(null, [
  'Your English friend, **Anna**, is visiting your city next week. Write an email to Anna.',
  'In your email:  •  invite her to your home for a meal  •  say **what food** you will make  •  explain **how she can travel** to your home.',
], C.grey, C.navy));
out.push(...lines(9));

// ================= LISTENING =================
out.push(pb());
out.push(h2('PAPER 3  ·  LISTENING    (about 15 minutes · 15 marks)'));
out.push(p('_Your teacher will play each recording **twice**._', { color: '595959' }));
out.push(part('Part 1  ·  Five short conversations  (5 marks)', '🔊 **Track MT-1.** For each question, choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**21**  What does the woman have for breakfast?   **A** bread and cheese   **B** only coffee   **C** yoghurt and fruit'));
out.push(q('**22**  How does the man travel to work?   **A** by car   **B** by service   **C** on foot'));
out.push(q('**23**  What time does the shop close today?   **A** 6.00   **B** 8.00   **C** 9.00'));
out.push(q('**24**  How much is a return ticket to Homs?   **A** 20,000   **B** 35,000   **C** 45,000'));
out.push(q('**25**  What is the problem with the shoes?   **A** They\'re too small.   **B** They\'re the wrong colour.   **C** There\'s a hole in one shoe.'));
out.push(sp());
out.push(part('Part 2  ·  Complete the notes  (5 marks)', '🔊 **Track MT-2.** You will hear a woman talking about a flat. Write **one or two words or a number** in each gap.'));
out.push(sp());
out.push(table(['FLAT FOR RENT – NOTES', ''], [
  ['Area', 'Baramkeh'], ['Floor', '**26** ______'], ['Number of bedrooms', '**27** ______'],
  ['In the kitchen there is a fridge and a', '**28** ______'], ['Rent each month (SYP)', '**29** ______'], ['Call the owner after', '**30** ______ pm'],
], [2, 1], { headFill: C.navy }));
out.push(sp());
out.push(part('Part 3  ·  A longer talk  (5 marks)', '🔊 **Track MT-3.** You will hear a man talking about his journey to work. Choose **A**, **B** or **C**.'));
out.push(sp());
out.push(q('**31**  Where does Tareq work?   **A** in a bank   **B** in a school   **C** in a shop'));
out.push(q('**32**  How long does his journey take in the morning?   **A** 25 minutes   **B** about an hour   **C** two hours'));
out.push(q('**33**  Why doesn\'t he drive?   **A** He hasn\'t got a car.   **B** There\'s no parking.   **C** It\'s too expensive.'));
out.push(q('**34**  What does he do on the service?   **A** He reads.   **B** He sleeps.   **C** He phones his wife.'));
out.push(q('**35**  What does he do on Fridays?   **A** He works.   **B** He visits his parents.   **C** He goes to the park with his children.'));

// ================= SPEAKING =================
out.push(pb());
out.push(h2('PAPER 4  ·  SPEAKING    (in pairs · about 5 minutes · 10 marks)'));
out.push(p('_Your teacher will ask you questions. Answer in full sentences and add **one extra detail** every time. Don\'t answer only "yes" or "no"!_'));
out.push(sp());
out.push(box('Part 1  ·  About you  (your teacher asks each student)', [
  '**1**  What\'s your name? How do you spell your family name?',
  '**2**  Where do you live? Tell me about your neighbourhood.',
  '**3**  What do you do? / What do you study?',
  '**4**  How do you come to this class? How long does it take?',
  '**5**  What do you usually do at the weekend?',
  '**6**  Tell me about your family.',
], C.lteal, C.teal));
out.push(sp());
out.push(box('Part 2  ·  Talk together  (the two students talk to each other)', [
  'Your teacher says: _"A friend from another city is visiting you for one day. Talk together and decide where to take your friend and how to travel."_',
  'Talk for about **two minutes**. Remember to:',
  '•  make suggestions: _Shall we…? / Why don\'t we…? / How about…?_',
  '•  agree or disagree politely: _Good idea! / Hmm, I\'m not sure…_',
  '•  give reasons: _…because… / …to…_',
  '•  **decide together** at the end.',
], C.lorange, C.orange));
out.push(sp());
out.push(box('How your teacher marks your speaking (10 marks)', [
  table(['', '4–5 marks', '2–3 marks', '0–1 mark'], [
    ['**Grammar and vocabulary** (5)', 'Uses Unit 1–6 language well: present simple, _there is/are_, comparatives, _can/must_, _because/to_. Few mistakes.', 'Some good language, but repeats the same words and makes mistakes that slow the listener.', 'Very short answers; many mistakes.'],
    ['**Communication and pronunciation** (5)', 'Speaks clearly, answers fully, asks the partner questions, keeps the conversation going.', 'Answers, but waits for the teacher; sometimes hard to understand.', 'Needs a lot of help; very hard to understand.'],
  ], [1.1, 1.6, 1.4, 1.2]),
], C.grey, C.navy));
out.push(sp());
out.push(box('Your result', [
  table(['Reading /20', 'Writing /15', 'Listening /15', 'Speaking /10', 'TOTAL /60'], [['', '', '', '', '']], [1, 1, 1, 1, 1]),
  '**42–60 = very good** · **30–41 = good – look again at your weak paper** · **under 30 = study Units 1–6 again with your teacher before Unit 7**',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Mid-Book Test (Units 1–6)');
