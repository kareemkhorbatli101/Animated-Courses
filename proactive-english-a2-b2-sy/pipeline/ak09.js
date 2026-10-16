// Proactive English A2 · Syria Edition · Book 1 · Unit 9 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, stage, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const ck = (rows) => table(['Checklist', '✓ / ✗'], rows, [3, 2]);
const boardT = (rows) => table(['We SAY…', 'We WRITE…'], rows, [1, 1]);

out.push(h1('Answer Key · Unit 9  Work & Study'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(p('_Every task has an answer or a full sample answer. Samples show one good A2 answer; learners\' own answers will differ._', { color: '595959' }));

// ===== 9.1 =====
out.push(h2('9.1  I have to check the machines'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I have to check my emails first.', 'I\'m responsible for the stock.'], ['Do I have to work on Saturdays?', 'Technicians have to be here at eight.'], ['You don\'t have to come on Fridays.', 'Write a note for every repair.'], ['What time do I have to start?', 'Mr Fouad reads all the notes on Thursday.']]));
out.push(p('**b**  Students\' own answers, e.g. wear a uniform – nurses, police, hotel staff · work at night – doctors, drivers, bakers · use a computer all day – accountants, designers · talk to customers – shop assistants, receptionists · carry heavy things – builders, delivery drivers.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (a new trainee)   **b**  1 Check the machines in the workshop (which are ready, which are waiting for parts).  2 She doesn\'t have to talk to customers at the desk, and she doesn\'t have to come on Fridays.'));
out.push(p('**Language box – Practise:**  1 has to  2 don\'t have to  3 Do … have to  4 has to  5 don\'t have to'));
out.push(stage('3', 'Practise – sample with job card A'));
out.push(dlg(null, [['A', 'Welcome! Let me explain the work. Every morning I have to check the fridge temperature.'], ['B', 'Do I have to do that too?'], ['A', 'No, you don\'t. You\'re responsible for the shelves and the prices.'], ['B', 'OK. And the patients?'], ['A', 'The pharmacist talks to them. But you have to write the delivery book every day.'], ['B', 'What time do I have to start?'], ['A', 'We open at eight, but you have to be here at a quarter to.'], ['B', 'Do I have to work on Fridays?'], ['A', 'Only in the afternoon.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: has to – shelves and prices, the delivery book; doesn\'t have to – talk to patients. Card B: has to – keys and breakfast list, wear a uniform; doesn\'t have to – deal with problems. Typical board-clinic errors: _She have to_ → _She has to_; _don\'t have to_ confused with _mustn\'t_.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Every day', 'Every week', 'Every month', 'I don\'t have to…'], [['prepare lessons, check the register', 'meet the other teachers on Sunday', 'write reports for the parents', 'wear a uniform (but something smart)']], [1, 1, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Rasha has to prepare her lessons every evening and she has to write reports every month. She has to be at school at half past seven. She doesn\'t have to wear a uniform, but she has to wear something smart."']));
out.push(stage('5', 'Read'));
out.push(p('1 The problem, the solution and the time.  2 The junior technician has to check the small parts box.  3 Deal with customers at the desk and answer the company phone.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**AL-SHIFA PHARMACY – JOB DESCRIPTION**  **Position:** Assistant  **Reports to:** Maya Nasser   **Main duties:** The assistant is responsible for the shelves and the prices. He or she has to check the dates on the medicines every week and write the delivery book every day. He or she also has to keep the counter clean.   **Hours:** 8.00–16.00, Saturday to Thursday. The assistant has to work one Friday afternoon a month.   **Not part of this job:** The assistant doesn\'t have to give medicines to patients and doesn\'t have to order from the companies.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['has to + base verb', '✗ – _has to writes_ → _has to write_'], ['doesn\'t have to', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _He or she has to writes the delivery book._  →  After: _He or she has to write the delivery book._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**AL-NOUR SCHOOL – JOB DESCRIPTION**   **Position:** Primary teacher (Grade 3)   **Reports to:** the head teacher',
  '**Main duties:** The teacher is responsible for one class of about thirty children. He or she has to prepare the lessons, teach Arabic, maths and science, and correct the children\'s work every day. He or she has to write a short report for the parents every month and has to meet them twice a year.',
  '**Hours:** 7.30–14.00, Sunday to Thursday. Teachers have to arrive fifteen minutes before the children.',
  '**Not part of this job:** The teacher doesn\'t have to teach English (we have a specialist) and doesn\'t have to stay after two o\'clock.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ This sounds interesting – I like the small class!   ✓ Can you add the salary?   ? Do I have to prepare the end-of-year party too?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Typical class result: the jobs with the earliest start (bakers, teachers, technicians) have the hardest hours.'));
out.push(stage('HW', 'Homework – sample application email'));
out.push(sample(['Dear Ms Rasha, I am writing to apply for the position of primary teacher at Al-Nour School. I studied education and I taught in a village school for three years, so I have experience with small children. I would like this job because the class is small and the school is near my house. One question: does the teacher have to prepare materials, or does the school provide them? Best regards, Hiba Khalil']));

// ===== 9.2 =====
out.push(pb());
out.push(h2('9.2  You mustn\'t use that door'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['You mustn\'t smoke in the building.', 'Staff must wear ID badges.'], ['You must wear your badge – always.', 'Machines mustn\'t leave the building.'], ['Do I have to bring my own lunch?', 'Please use the kitchen.'], ['That one is serious.', 'Thank you for helping us work safely.']]));
out.push(p('**b**  Necessary: wear a seat belt, come to the meeting · Forbidden: park in front of the gate · Free: bring your own lunch'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (she uses the wrong door)   **b**  1 It\'s the emergency exit and it has to stay closed.  2 She must wear it – on her shirt, not in her bag.'));
out.push(p('**Language box – Practise:**  1 mustn\'t  2 don\'t have to  3 mustn\'t  4 don\'t have to  5 mustn\'t'));
out.push(stage('3', 'Practise – sample with rules card A'));
out.push(dlg(null, [['A', 'Let me tell you the important rules. First, you must wear a white coat and glasses.'], ['B', 'OK. And food?'], ['A', 'You mustn\'t eat or drink inside. Never.'], ['B', 'Do I have to work after four?'], ['A', 'No, you don\'t have to. But you mustn\'t touch other people\'s samples.'], ['B', 'So: white coat and glasses, no food, no other samples. Did I forget anything?']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: must – white coat and glasses; mustn\'t – eat/drink inside, touch other samples; don\'t have to – work after 4. Card B: must – wash hands, sign children in/out; mustn\'t – take photos, give food without asking; don\'t have to – wear a uniform.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"At my workshop everybody must wear boots and nobody must use the big machines alone – two people, always. You mustn\'t use your phone near the machines. You don\'t have to wear a uniform, but you must wear something you can wash!"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"At Fadi\'s workshop everybody must wear boots, and they mustn\'t use the machines alone. They don\'t have to wear a uniform. Fadi says the best rule is \'no phones near the machines\' – he saw an accident last year."']));
out.push(stage('5', 'Read'));
out.push(p('1 In the office and in the workshop, during working hours.  2 Write your name and the date in the parts book.  3 They must be on silent in the workshop; you don\'t have to leave them at reception, but you shouldn\'t answer calls during a repair.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample([
  '**FLAT 7 – HOUSE RULES**',
  '**1 Keys.** Everybody must take their own key. We mustn\'t leave the building door open, because the lock is broken.',
  '**2 Kitchen.** You must wash your own plates the same evening.',
  '**3 Noise.** You mustn\'t play music after eleven – the neighbour downstairs works at five in the morning.',
  '**4 Guests.** You don\'t have to ask before you invite a friend for coffee, but please tell us if somebody stays the night.',
  'Thank you for making this a nice home. – Lama',
]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['must / mustn\'t / don\'t have to + base verb', '✗ – _You must to wash_ → _You must wash_'], ['A reason for at least one rule', '✓'], ['Numbered sections + friendly ending', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _You must to wash your plates._  →  After: _You must wash your plates._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  '**MEDICA TRADING – OFFICE RULES**',
  '**1 Arrival.** All staff must be at their desk at eight o\'clock. If you are ill, you must call before half past seven, not send a message.',
  '**2 Documents.** Customer files mustn\'t leave the office, because they contain private information.',
  '**3 The meeting room.** You must write your name in the book before you use it. You don\'t have to book it for five minutes, but please don\'t stay two hours without booking!',
  '**4 Kitchen.** You mustn\'t leave food in the fridge after Thursday.',
  '**5 Visitors.** Visitors must wait at reception. You mustn\'t bring anybody into the accounts office.',
  'Thank you for your help. – Khaled Ahmad, Manager',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Clear and fair – and I like the reason in rule 2.   ✓ Can you add why we can\'t bring visitors into accounts?   ? What happens if I forget to book the meeting room?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Funniest rules usually come from shared flats and family cars!'));
out.push(stage('HW', 'Homework – sample message'));
out.push(sample(['Hi Tareq, I read your office rules – they\'re clear! One thing I don\'t understand: why mustn\'t we bring visitors into the accounts office? Is it because of the files? And can I suggest one more rule: the last person to leave must check the air conditioning. Last week it ran all weekend!']));

// ===== 9.3 =====
out.push(pb());
out.push(h2('9.3  Is it OK if I leave early?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Could I leave early today?', 'Dear Mr Khaled, I am writing to ask…'], ['Is it OK if I take Monday off?', 'I will finish the report before I leave.'], ['Have you got a minute?', 'Rana has all the files.'], ['Of course. / I\'m afraid not.', 'Thank you for considering my request.']]));
out.push(p('**b**  I\'m leaving early. (not polite – it\'s a statement!) → Can I leave early? → Is it OK if I leave early? → Could I possibly leave early?'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (to leave early – at three on Thursday)   **b**  1 Her niece has a small operation and she wants to be at the hospital with her brother.  2 Finish the supplier report on Wednesday evening (and Rana has the files).'));
out.push(p('**Language box – Practise (sample answers):**  1 Is it OK if I leave at four today? I have a dentist\'s appointment.  2 Could I take Monday off? There\'s a family wedding.  3 Could I possibly change my shift with Fadi? I have an exam.  4 Is it OK if I use the meeting room at two? I have an online interview.'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [['A', 'Mr Fouad, have you got a minute?'], ['B', 'Yes, come in. What is it?'], ['A', 'Is it OK if I leave at two on Sunday? My son starts school that day and I\'d like to take him.'], ['B', 'Of course.'], ['A', 'I\'ll finish the Thursday repairs on Saturday, and Nour has the parts list if anybody needs it.'], ['B', 'Perfect.'], ['A', 'Thank you very much.']]));
out.push(stage('3R', 'Perform'));
out.push(p('A good performance always has **reason + solution**. A request with no solution should get "let\'s talk about it".'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Hiba', 'Could I possibly take three days off in December? My sister is coming from Beirut.'], ['Teacher (partner)', 'Yes, of course – you finished the project early.'], ['Hiba', 'And is it OK if I change my Tuesday class to Thursday?'], ['Teacher', 'I\'m afraid not – the room isn\'t free on Thursday.'], ['Hiba', 'Could I use the lab on Sunday afternoon?'], ['Teacher', 'Let\'s talk about it next week – I need to check the timetable.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Hiba asked me for three days off in December to visit her sister in Beirut. I said yes, because she finished the project early. She also asked to change her Tuesday class, but I said no – the room isn\'t free."']));
out.push(stage('5', 'Read'));
out.push(p('1 To leave the office at 3 pm on Thursday 23 October.  2 She will finish the report on Wednesday, send it before she leaves, and Rana has the files and can join the 4 pm call.  3 She could work on Saturday morning instead.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Subject:** Request – working from home on Wednesday 29th   Dear Mr Fouad,   I am writing to ask if I could work from home on Wednesday 29 October. The plumber is coming to my building that morning and somebody has to open the flat.   I will finish the two laptop repairs on Tuesday before I leave, and Nour can answer the workshop phone. I will be online all day.   If Wednesday is difficult, I could take the morning only and come at one o\'clock.   Thank you very much for considering my request.   Best regards,   Omar Darwish · Workshop · TechCare']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Formal forms (I am / I will)', '✗ – _I\'ll finish_ → _I will finish_'], ['Subject line with the date', '✓'], ['All parts: request, reason, solution, alternative, thanks', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I\'m writing to ask if I can\'t come Wednesday._  →  After: _I am writing to ask if I could work from home on Wednesday 29 October._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  '**Subject:** Request – two days off, 10–11 December',
  'Dear Ms Huda,',
  'I am writing to ask if I could miss the classes on Wednesday 10 and Thursday 11 December. My sister is arriving from Beirut for four days and it is the first time we have seen each other for two years.',
  'I have already looked at the plan for those lessons (Unit 11) and I will do all the exercises at home. Rasha has agreed to send me her notes and the listening tracks.',
  'If I miss too much, I could join the Saturday group for those two lessons instead.',
  'Thank you very much for considering my request.',
  'Best regards,',
  'Hiba Khalil · Class 4B',
]));
out.push(stage('7P', 'Respond – sample slip (as manager / teacher)'));
out.push(p('★ Very well organised – you answered my questions before I asked them!   ✓ Can you add who will tell the group about the project?   ? Can you do the speaking task with Rasha on Saturday?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The class usually says yes to the emails that **solve the problem**, not to the ones with the best excuse.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Dear Hiba, Thank you for your email and for organising everything so well. Of course you can miss those two lessons – family first. Please do the Unit 11 exercises before you come back, and send me your writing task by email on Friday. Enjoy the time with your sister! Best regards, Huda Saleh']));

// ===== 9.4 =====
out.push(pb());
out.push(h2('9.4  I can use Excel and I worked as a cashier'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I can use Excel quite well.', 'Skills: Arabic, English, Excel, driving'], ['I worked in a shop for three summers.', 'Experience: 2023–2025, Abbas Phones'], ['I\'m not very good at it yet.', 'English: reading good, speaking improving'], ['I studied IT at the institute.', 'Education: Diploma in IT, 2024–2026']]));
out.push(p('**b**  Skill: I can type fast · I speak three languages.   Experience: I worked in a hotel for two years · I studied accounting.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a permanent job at TechCare – her training finishes next month)   **b**  1 She studied IT at the institute for two years and worked in her uncle\'s phone shop for three summers.  2 She isn\'t very good at Excel yet, and speaking English is harder for her.'));
out.push(p('**Language box – Practise:**  1 worked  2 can use  3 studied  4 can drive  5 learned'));
out.push(stage('3', 'Practise – sample with candidate card A'));
out.push(dlg(null, [['A', 'Tell me about your experience.'], ['B', 'I studied tourism for two years and I finished last year. Before that, I worked in a travel agency for one year.'], ['A', 'What did you do there?'], ['B', 'I booked hotels and flights and I answered customers\' emails. I learned how to work under pressure.'], ['A', 'And your skills?'], ['B', 'I can use the booking systems quite well, and I can speak English and some Russian. I\'m not very good at dealing with complaints yet.'], ['A', 'What can you do that others can\'t?'], ['B', 'I remember every face. Customers like that.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: booking systems, English and Russian; travel agency experience. Card B: teaching reading, making materials; three years in a village school.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"I studied economics at Damascus University and finished in 2021. I\'ve worked at the bank in Baramkeh since then – five years. I check customers\' accounts and I train the new staff. I can use all the bank systems and I can explain difficult things simply. I\'m not very good at presentations yet, but I started an English course in September. My special thing? Customers always ask for me – I never make them feel stupid."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq studied economics and he worked at a bank for five years. He can use all the bank systems and he can explain difficult things simply. He isn\'t very good at presentations yet, but he started an English course. His special thing: customers always ask for him."']));
out.push(stage('5', 'Read'));
out.push(p('1 In June (2026).  2 She sold phones and accessories, changed screens and batteries, and dealt with customers.  3 Reading is good; speaking is improving (she has classes at Al-Yasmin since September).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample([
  '**RASHA HAMDAN** · Primary Teacher · Damascus · 0991 445 360 · rasha.h@mail.sy',
  '**Profile:** Primary teacher with seven years\' experience in Grade 1–3 classes. I am now studying English to teach in a bilingual school.',
  '**Experience:** 2019–now · Al-Nour School, Damascus · Teacher: Grade 3 class of 30 children, monthly parent reports, school library.  2016–2019 · Village school, rural Damascus · Teacher: three grades in one room, made all the materials myself.',
  '**Education:** 2012–2016 · Faculty of Education, Damascus University.',
  '**Skills:** Teaching reading (very good) · Making materials (very good) · Computers (basic, improving) · Arabic (mother tongue) · English (improving – classes at Al-Yasmin).',
]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Past verbs in the experience list', '✗ – _make all the materials_ → _made all the materials_'], ['Newest first, with dates', '✓'], ['Honest skill levels', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _2016–2019 · Village school · I am teaching three grades._  →  After: _2016–2019 · Village school · Teacher: taught three grades in one room._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**FADI SAEED** · Mechanic · Jaramana, Damascus · 0936 772 418 · fadi.saeed@mail.sy',
  '**Profile**  Mechanic with six years\' experience in car repair, now co-owner of a small workshop. I am learning English because our customers are foreign companies.',
  '**Experience**  2023–now · Saeed Brothers Workshop, Jaramana · Co-owner: engine and brake repairs, customer prices, two trainees.  2019–2023 · Al-Majd Garage, Homs · Mechanic: general repairs, prepared cars for inspection.',
  '**Education**  2015–2019 · Diploma in Mechanical Engineering, Homs.',
  '**Skills**  Engine repair (very good) · Electrical systems (good) · Reading technical manuals in English (basic, improving) · Driving licence (all categories).',
]));
out.push(stage('7P', 'Respond – sample slip (as employer)'));
out.push(p('★ I would call this person – the co-owner detail is strong.   ✓ Can you add how many cars you repair in a week?   ? How good is your English really – could you talk to a customer on the phone?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The clearest profiles are the ones with **numbers**: 30 children, three summers, two trainees.'));
out.push(stage('HW', 'Homework – sample covering message'));
out.push(sample(['Dear Mr Fouad, I am writing to apply for the position of workshop technician at TechCare. I have six years\' experience in car and machine repair, and I am good at finding the real problem quickly. I am interested in this job because I want to work with computers and electronics. My profile is attached. Thank you for your time. Best regards, Fadi Saeed']));

// ===== 9.5 =====
out.push(pb());
out.push(h2('9.5  Can I take a message?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Good morning, Medica Trading.', 'Mr Chen called at 10.15.'], ['Who\'s calling, please?', 'From: Yusuf Haddadin, Delta Medical'], ['I\'m afraid he\'s in a meeting.', 'Action: please call back today'], ['Let me read that back.', 'Taken by: Lina']]));
out.push(p('**b**  _Who\'s calling, please?_ = asking the name · _Hold on, please._ = wait · _I\'m afraid he\'s in a meeting._ = he isn\'t free · _Could you spell that?_ = asking for the letters · _I\'ll give him the message._ = promising'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Mr Khaled)   **b**  1 He\'s in a meeting until twelve.  2 Call him back today (it\'s a little urgent).'));
out.push(p('**Language box – Practise:**  1 calling  2 spell  3 take  4 afraid  5 read'));
out.push(stage('3', 'Practise – sample with caller card A'));
out.push(dlg(null, [['A', 'Good morning, Medica Trading.'], ['B', 'Could I speak to Mr Khaled, please?'], ['A', 'I\'m afraid he isn\'t in the office this morning. Who\'s calling, please?'], ['B', 'This is Samar Khoury from Zenith Pharma.'], ['A', 'Could you spell your family name? … Can I take a message?'], ['B', 'Yes, please. The delivery will arrive on Tuesday, not Monday. Could you ask him to call me back before two?'], ['A', 'Of course. What\'s your number?'], ['B', '0991 223 447.'], ['A', 'Let me read that back: 0991 223 447. I\'ll give him the message.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: Samar Khoury, Zenith Pharma, delivery Tuesday not Monday, call back before 2, 0991 223 447. Card B: Walid Nassif, the bank, documents missing a signature, needed by Thursday, 011 556 7788 ext. 214.'));
out.push(stage('4', 'Your turn – sample slip'));
out.push(table(['MESSAGE FOR:', 'the technician on duty'], [['From', 'Rasha Hamdan'], ['Company', 'Al-Noor School'], ['About', 'the projector in room 4 isn\'t working'], ['Action needed', 'a technician before Saturday – she needs it for Sunday'], ['Phone', '0947 220 518'], ['Time of call', '11.30']], [1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Rasha called at half past eleven. She\'s from Al-Noor School. The projector in room 4 isn\'t working and she needs it for Sunday. She wants a technician before Saturday. Her number is 0947 220 518."']));
out.push(stage('5', 'Read'));
out.push(p('1 Half the quantity this month, or everything in January.  2 Today – the caller says it\'s a little urgent.  3 Lina.'));
out.push(stage('6', 'Write with help – sample (caller card A)'));
out.push(table(['TELEPHONE MESSAGE', ''], [
  ['For', 'Mr Khaled Ahmad'], ['From', 'Samar Khoury'], ['Company', 'Zenith Pharma'], ['Date / time', 'Monday 27 October, 11.05 am'],
  ['Message', 'The delivery will arrive on **Tuesday**, not Monday.'], ['Action', 'Please call her back **before 2 pm** today.'], ['Phone', '0991 223 447'], ['Taken by', '(your name)'],
], [1, 3]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['All eight parts complete', '✗ – time of call missing'], ['Message and Action separate', '✓'], ['Number correct (checked with partner)', '✓'], ['Capitals for names and companies', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('The most common missing parts are the **time of the call** and the **company**.'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample([
  '**TELEPHONE MESSAGE**  For: Omar · From: Umm Nabil (my aunt) · Date/time: Thursday 23 Oct, 6.40 pm',
  'Message: Her washing machine is making a loud noise and water came out on the floor. She turned it off at the wall.',
  'Action: Please call her tonight – she can\'t wash anything until it\'s repaired.',
  'Phone: 0944 701 332 · Taken by: Rami',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I know exactly what to do!   ✓ Can you add the model of the machine?   ? Did she say if the water is still coming out?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A message you can act on immediately always has: the **problem**, what the person **wants**, and a **number**.'));
out.push(stage('HW', 'Homework – sample email'));
out.push(sample(['Dear Mr Haddadin, Thank you for your call this morning and I am sorry I was not available. We have discussed the December order. We prefer to receive half the quantity this month and the rest in January, because our customers need the medicines before the winter. Could you confirm the dates of both deliveries? Best regards, Khaled Ahmad · Medica Trading']));

// ===== 9.6 =====
out.push(pb());
out.push(h2('9.6  Could you send me the file?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Could you send me the file?', 'Thanks in advance!'], ['Would you mind bringing a spare screen?', 'Here is the model number: …'], ['Could you ask reception to make a badge?', 'I will come tomorrow at 9 am.'], ['No problem.', 'Best regards, Rana · Medica Trading']]));
out.push(p('**b**  Most polite: _Would you mind sending me the file?_ Then: _Could you send me the file, please?_ → _Can you send me the file?_ → _Send me the file._ (an order, not a request!)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (three: come tomorrow, bring a spare screen, ask reception for a badge – and she must send the model number)   **b**  1 It turns on, but the screen stays black.  2 Tomorrow morning at nine.'));
out.push(p('**Language box – Practise (sample answers):**  1 Could you send me the report, please?  2 Would you mind changing the meeting to three?  3 Could you possibly help me with this machine?  4 Could you tell Mr Fouad I called?'));
out.push(stage('3', 'Practise – sample with problem card A'));
out.push(dlg(null, [['B', 'TechCare, good afternoon.'], ['A', 'Hello, this is Lina from Medica Trading.'], ['B', 'Yes, speaking. How can I help?'], ['A', 'We\'ve got a problem with the office printer – it prints everything grey.'], ['B', 'Could you try one thing before I come? Take the colour cartridge out and put it back.'], ['A', 'OK, wait… No, the same.'], ['B', 'Fine. I\'ll come tomorrow morning.'], ['A', 'Thank you. We need 60 copies for a meeting at ten, so would you mind coming before nine? And could you ask your office to send me the price of the ink first?']]));
out.push(stage('3R', 'Perform'));
out.push(p('A good performance uses a **different form** for each request: Could you…? / Would you mind …-ing? / Could you ask … to…?'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"Could you send me the photos from the trip? … Would you mind changing our study day to Sunday? … And could you ask your brother about a part for my car?"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Fadi asked me to send him the photos from the trip, to change our study day to Sunday, and to ask my brother about a car part. I said yes to the photos and the car part, but I can\'t study on Sunday – I\'m working."']));
out.push(stage('5', 'Read'));
out.push(p('1 The model number and serial number of the laptop (Dell Latitude 5420, DL-5420-77Q).  2 Back up the important files before he arrives.  3 To bring a machine Lina can use for two days if she needs it urgently.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Subject:** Projector for room 4 – model and dates   Dear Omar,   Thank you for your call this morning. Here is the information you asked for: the projector is an **Epson EB-X49**, and it is three years old.   Could you come before Saturday? The teachers need it for the Sunday lessons and we have no other projector.   I have asked our director to approve the cost, so you won\'t have to wait for the paperwork this time.   Thanks in advance.   Best regards, Rasha Hamdan · Al-Noor School']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Could you… / Would you mind …-ing', '✗ – _Would you mind to come_ → _Would you mind coming_'], ['Clear subject + important details in bold', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Would you mind to come before Saturday?_  →  After: _Would you mind coming before Saturday?_'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**Subject:** Training room – Thursday 30 October',
  'Dear Mr Bassam,',
  'Thank you for your help with the room last month. We would like to use the big training room again on Thursday 30 October, from 4 to 6 pm, for twelve students.',
  'Could you book it for us? And would you mind checking that the projector works before Thursday? Last time we lost twenty minutes at the start.',
  'If the big room is not free, the small room is fine – we can bring extra chairs.',
  'Thanks in advance.',
  'Best regards,',
  'Huda Saleh · Adult Programme',
]));
out.push(stage('7P', 'Respond – sample reply'));
out.push(sample(['Dear Ms Huda, Thank you for your email. I have booked the big training room for Thursday 30 October from 4 to 6 pm, and I will test the projector on Wednesday afternoon. Could you send me the list of students by Tuesday? We need the names for the visitors\' book. Best regards, Bassam · Reception']));
out.push(stage('7R', 'Share – sample'));
out.push(p('The most professional pairs: clear subject lines, both requests answered, and one new request added politely.'));
out.push(stage('HW', 'Homework – sample follow-up'));
out.push(sample(['Dear Mr Bassam, I am writing to follow up on my email of 20 October about the training room on Thursday 30th. I know this is a busy week. Could you confirm the booking when you have a moment? If there is a problem, please tell me and I will find another day. Thank you very much. Best regards, Huda Saleh']));

// ===== 9.7 =====
out.push(pb());
out.push(h2('9.7  Review & Mediate: Mr Saleh called'));
out.push(stage('1', 'Get ready – quiz'));
out.push(p('1 I must wear a badge.  2 She has to work on Saturday.  3 You mustn\'t smoke here.  4 Would you mind sending the file?  5 Can I leave early?  6 He doesn\'t have to come.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**b**  He gives the facts in order and makes the message professional: he says "he isn\'t happy" instead of "he is angry!!!", and he ends with the number and how to contact him.'));
out.push(stage('3', 'Practise – sample with notes card A'));
out.push(sample(['"Dr Samar from Al-Noor Clinic called at a quarter past nine. The delivery arrived, but three boxes are missing. She needs them before Sunday because the clinic is closed on Friday and Saturday. She isn\'t angry, but she\'s worried. She asked us to call her back after two – she\'s with patients until then."']));
out.push(p('**Card B sample:** _"Umm Yazan, the building owner, called at ten to five. The water pump is broken and there\'s no water on floors four, five and six. There are two families with small children. She\'d like a plumber tonight if possible. She\'s at her sister\'s house, so call her mobile: 0955 318 204."_'));
out.push(stage('3R', 'Perform'));
out.push(p('Six parts: who · when · problem · feeling · what they want · contact. The most common omission is the **time of the call**.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"My neighbour called my mother yesterday evening. The electricity in our building goes off every night at nine. The company says it isn\'t their problem. The neighbours want to meet on Friday after prayers to decide what to do, and they want one person from every flat."']));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(['"Hiba\'s neighbour called her mother yesterday evening. The electricity in the building goes off every night at nine and the company says it isn\'t their problem. The neighbours want to meet on Friday after prayers to decide what to do. They want one person from every flat."']));
out.push(p('_Missing information students often notice: **where** the meeting is, and **what time** "after prayers" means._', { color: '595959' }));
out.push(stage('5', 'Read – A2 Key Reading Part 5'));
out.push(p('1 had  2 have  3 have  4 to  5 yet  6 to'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Subject:** Machine 3 – visit this afternoon at 3 pm   Dear Mr Saleh,   Thank you for your call this morning. I am very sorry that machine three has stopped working again, and I understand that you waited a long time last month.   My colleague and I will come to you at three o\'clock this afternoon. We will bring a spare part with us so that we can finish the repair today if possible.   Could you ask your team not to use the machine before we arrive? It will help us find the real problem.   Again, I apologise for the trouble. We do not want to lose your trust.   Best regards, Omar Darwish · TechCare']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Apology and the time of the visit', '✓'], ['A polite request', '✓'], ['Formal forms (no contractions)', '✗ – _We\'ll come_ → _We will come_'], ['Clear subject + professional ending', '✓']]));
out.push(stage('7', 'Write freely – A2 Key Writing Part 6 sample (≈45 words)'));
out.push(sample(['Dear Ms Huda,', 'I am sorry, but I can\'t come to class next Wednesday because I have to travel to Aleppo for my work. What is the homework for that lesson? Could you send me the listening track by email, please?', 'Thank you,', 'Tareq']));
out.push(p('_Marking note: all three content points (why, asking about the homework, asking her to send something) must be present for full content marks._', { color: '595959' }));
out.push(stage('✓', 'Unit 9 check'));
out.push(p('**A**  1 b  2 b  3 a  4 a  5 c  6 b  7 b  8 a'));
out.push(p('**B**  1 Samar Khoury  2 Zenith Pharma  3 thirty / 30  4 five / 5  5 0944 762 310'));
out.push(p('_Note for question 3: the caller says "We asked for forty boxes, but we only need thirty now" – the answer is **30**. Students who write 40 heard the first number only; play that line again._', { color: '595959' }));
out.push(p('**C  Sample email (≈45 words):**'));
out.push(sample(['Dear Rana, Could you send me the supplier list before Thursday? I need it for the meeting with Mr Khaled. And would you mind booking the small meeting room for 10 am? Thanks in advance. Best regards, Lina']));
out.push(p('_Scoring guide: A = 8 marks, B = 5 marks, C = 5 marks (content 2, organisation 1, language 2). Total 18. 13+ = ready for Unit 10._', { color: '595959' }));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 9 · Answer Key');
