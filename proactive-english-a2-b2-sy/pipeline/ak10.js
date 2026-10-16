// Proactive English A2 · Syria Edition · Book 1 · Unit 10 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, stage, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const ck = (rows) => table(['Checklist', '✓ / ✗'], rows, [3, 2]);
const boardT = (rows) => table(['We SAY…', 'We WRITE…'], rows, [1, 1]);

out.push(h1('Answer Key · Unit 10  Health'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(p('_Every task has an answer or a full sample answer. Samples show one good A2 answer; learners\' own answers will differ._', { color: '595959' }));
out.push(box('Note for the teacher', [
  'This unit teaches the **language** of health, not medicine. If a student asks a real medical question in class ("How many of these should I take?"), the answer is always: **ask your pharmacist or doctor** – and that is also what the characters do in every cycle.',
  'Some students may want to talk about a serious illness in their family. Let them if they want to, keep it short and kind, and move the lesson on. Nobody has to share anything personal: the tasks always allow an invented example.',
], C.lorange, C.orange));

// ===== 10.1 =====
out.push(h2('10.1  I\'ve got a sore throat'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I\'ve got a headache.', 'I can\'t come to work today.'], ['My back hurts.', 'I\'ve had a temperature since Sunday.'], ['How do you feel?', 'I\'m going to see a doctor at eleven.'], ['You don\'t look well.', 'Get well soon!']]));
out.push(p('**b**  stomach – You feel it after a big meal. · head – You think with it. · back – You sit on a chair and it hurts. · throat – You speak with it. · tooth – You eat with it.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (at the pharmacy)   **b**  1 Since Sunday – three days.  2 See a doctor today (Dr Samar at Al-Noor Clinic, open until six).'));
out.push(p('**Language box – Practise:**  1 a  2 hurt  3 – (no article: _she\'s got toothache_)  4 well  5 have … Since'));
out.push(stage('3', 'Practise – sample with symptom card A'));
out.push(dlg(null, [['B', 'You don\'t look well. What\'s the matter?'], ['A', 'I\'ve got a bad stomach ache. And I feel dizzy.'], ['B', 'Oh dear. How long have you had it?'], ['A', 'Since yesterday evening.'], ['B', 'Can you eat?'], ['A', 'No, I can\'t eat anything.'], ['B', 'I think you should see a doctor today, not tomorrow.'], ['A', 'OK, I\'m going.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: stomach ache, since yesterday evening, can\'t eat, dizzy. Card B: toothache, for a week, worse at night, swollen face. Both cards should end with "see a doctor / dentist". Typical board-clinic errors: _I have headache_ → _I\'ve got **a** headache_; _My feet hurts_ → _My feet **hurt**_.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"Last winter I had a bad cough for about two weeks. I didn\'t sleep well because it was worse at night, and I felt tired all day. First I just drank tea with lemon, but after ten days I went to a doctor. After that I was fine in a few days – I waited too long."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Last winter Fadi had a bad cough for two weeks. He didn\'t sleep well and he felt tired all day. In the end he went to a doctor, and after that he was fine."']));
out.push(stage('5', 'Read'));
out.push(p('1 The first is for his manager, Mr Fouad; the second is for his friend and colleague Omar.  2 The first: _Dear Mr Fouad_, _I\'m sorry, but I can\'t come_, _I\'ll call you after the doctor_ (full sentences, no emojis). The second: short phrases, jokes, emojis.  3 His work – what is finished and who can do the rest.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Dear Ms Huda,   I\'m sorry, but I can\'t come to class today. I\'ve had a bad cold and a temperature since Tuesday, and this morning I feel worse. I\'m going to see a doctor at four.   I finished the writing task and I\'ll send it tonight. Rasha has my book and she can give Hiba the photocopies.   I\'ll message you tomorrow about Thursday.   Sorry again,   Tareq']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['I\'ve got / I\'ve had … since / for', '✗ – _I have a cold since Tuesday_ → _I\'ve had a cold since Tuesday_'], ['The work section', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I have a cold since Tuesday._  →  After: _I\'ve had a cold since Tuesday._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**Formal:** Dear Mr Khaled, I\'m sorry, but I can\'t come to the office today. I\'ve had a stomach problem since yesterday evening and I didn\'t sleep. I have an appointment at the clinic at ten. The supplier report is finished and it\'s in the shared folder, and Rana can join the call at eleven. I\'ll call you this afternoon. Sorry again, Lina',
  '**Informal:** Rana – not coming in today 🤒 Stomach, since last night, no sleep at all. Going to the clinic at ten. The report is in the folder (final version, the one from yesterday evening). Can you do the eleven o\'clock call? Mr Khaled knows. Thank you!! I\'ll message you after the doctor.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Thank you for organising the report – nothing stops.   ✓ Can you add who has the key for your drawer?   ? Do you need tomorrow too?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Differences the class usually finds: _Dear + name_ vs just the name · full sentences vs short phrases · no emojis vs emojis · _I\'ll call you_ vs _I\'ll message you_.'));
out.push(stage('HW', 'Homework – sample manager\'s reply'));
out.push(sample(['Dear Lina, Thank you for letting me know, and thank you for finishing the report before you left. Please don\'t worry about the call – Rana can do it and I will be there too. Rest today and take tomorrow as well if you need it. Get well soon. Best regards, Khaled']));

// ===== 10.2 =====
out.push(pb());
out.push(h2('10.2  You should drink more water'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['You should drink more water.', 'Why don\'t you take a day off?'], ['You shouldn\'t study on your bed.', 'First, you should change one small thing.'], ['What should I do?', 'Second, you shouldn\'t take your phone to bed.'], ['That\'s a good idea, actually.', 'If you still feel tired, see a doctor.']]));
out.push(p('**b**  Good: _You should sleep more. · You should drink water. · You shouldn\'t sit at the computer for six hours._  Bad: _You shouldn\'t go to the doctor – it\'s expensive._ (Never advise somebody not to get help!)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (her back hurts)   **b**  1 Because she sits at a computer from eight to four and then studies in the evening – about ten hours on a chair.  2 If it doesn\'t get better, she should see a doctor and not wait a month.'));
out.push(p('**Language box – Practise (sample answers):**  1 You should sleep more / You shouldn\'t drink coffee in the evening.  2 You should drink warm water with lemon / You should see a pharmacist.  3 You shouldn\'t look at your phone in bed.  4 You should look away from the screen every twenty minutes.  5 You should drink less coffee and more water.'));
out.push(stage('3', 'Practise – sample with problem card A'));
out.push(dlg(null, [['B', 'What\'s wrong?'], ['A', 'I\'m always tired. I sleep five hours and I drink a lot of coffee.'], ['B', 'You should go to bed one hour earlier – just one hour.'], ['A', 'I try, but I look at my phone.'], ['B', 'Then why don\'t you leave your phone in the kitchen? And you shouldn\'t drink coffee after four.'], ['A', 'That\'s a good idea, actually.'], ['B', 'And if you\'re still tired after a month, you should see a doctor.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Three different forms should appear: _You should… · You shouldn\'t… · Why don\'t you…?_ and a closing _if it doesn\'t get better…_'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['**Problem:** "I never have time to exercise."', '**Advice collected:** You should walk to work. · You shouldn\'t take the service for short journeys. · Why don\'t you exercise with your children? · You should start with ten minutes, not an hour.']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"My problem was \'I never have time to exercise\'. Fadi said I should walk to work. Hiba said I shouldn\'t take the service for short journeys. Rasha asked why I don\'t exercise with my children. I think Rasha\'s advice is the best – my children have a lot of energy!"']));
out.push(stage('5', 'Read'));
out.push(p('1 You should change **one small thing**, not everything.  2 In the kitchen.  3 He should see a doctor – sometimes being tired is not about habits.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Dear H.,   I had the same problem last year, so I understand you.   First, you should put your books on a table, not on your bed. I did this and my back changed in two weeks.   Second, you shouldn\'t study for three hours without stopping. Study for forty minutes, then stand up and walk for five.   Why don\'t you also ask a classmate to study with you? You remind each other to take breaks.   If your back still hurts after a month, you should see a doctor.   Good luck! It gets better. – R.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['should / shouldn\'t + base verb', '✗ – _You should to put_ → _You should put_'], ['Advice in order', '✓'], ['Ending says when to get real help', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _You should to put your books on a table._  →  After: _You should put your books on a table._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  'Dear T.,',
  'I read your letter and I smiled, because I was exactly the same two years ago.',
  'First, you should change your evening, not your whole life. Choose one thing: eat, then go out for twenty minutes. Don\'t open your phone before the walk.',
  'Second, you shouldn\'t keep your phone next to your bed. Mine is in the kitchen now. The first week is terrible and then you sleep like a child.',
  'Why don\'t you ask your brother or a neighbour to walk with you? It\'s much easier with somebody.',
  'And if you still feel tired after a month, you should see a doctor.',
  'Good luck – it really does get better. – H.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I\'m going to try the phone in the kitchen!   ✓ Can you add how long it took to feel different?   ? What if I work until nine – when should I walk?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The advice students say they would really follow is always the **smallest** one (twenty minutes, one hour earlier, one glass of water).'));
out.push(stage('HW', 'Homework – sample thank-you reply'));
out.push(sample(['Thank you for your letter! I\'m going to try the walk first, because it\'s the easiest one and I don\'t need anything for it. The phone in the kitchen is harder – but I\'ll try that next week. I\'ll write to you in a month and tell you if I sleep better.']));

// ===== 10.3 =====
out.push(pb());
out.push(h2('10.3  I\'d like to make an appointment'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I\'d like to make an appointment.', 'Tuesday 28th, 10.30 – Dr Samar'], ['Is Tuesday at ten OK?', 'Please bring your ID card.'], ['Can I take your name?', 'Come 10 minutes early.'], ['How much is the visit?', 'To change: call before 6 pm the day before.']]));
out.push(p('**b**  1 Good morning, Al-Noor Clinic.  2 I\'d like to make an appointment, please.  3 Is Tuesday at ten OK?  4 Can I take your name?  5 Perfect, thank you.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (today at 11)   **b**  1 He\'s at a site in Kafr Sousa.  2 His ID card (and he must come ten minutes early to fill in a form).'));
out.push(p('**Language box – Practise:**  1 to  2 on  3 at  4 early  5 come'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['B', 'Good morning, Al-Amal Dental Clinic.'], ['A', 'Good morning. I\'d like to make an appointment, please. I\'ve had toothache for a week.'], ['B', 'Of course. We have Tuesday after four or Thursday morning.'], ['A', 'I can\'t come on Thursday morning because I\'m at work. Tuesday at five?'], ['B', 'Tuesday at five. Can I take your name? … And your phone number?'], ['A', 'Hiba Khalil, 0936 145 870.'], ['B', 'Please bring your old X-rays and come ten minutes early. The visit is eighty thousand.'], ['A', 'Can I pay by card?'], ['B', 'Yes, we take cards.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: dentist, Tue after 4 or Thu morning, bring old X-rays, 80,000, card OK. Card B: garage, Mon 8 am or Wed 2 pm, leave the car 3 hours, check free.'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Tareq', 'Good morning. I\'d like to make an appointment to check my car – it\'s making a noise.'], ['Partner', 'We have Monday at eight or Wednesday at two.'], ['Tareq', 'Monday at eight, please.'], ['Partner', '(second call) I\'m sorry – can you come Wednesday instead? Our mechanic is ill on Monday.'], ['Tareq', 'I\'m working on Wednesday at two… Could I come at four?'], ['Partner', 'Four is fine. Please leave the car for three hours.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"I made an appointment at the garage for Monday at eight, but then I had to change it because I\'m working. Now it\'s Wednesday at two. I have to leave the car for three hours and the check is free."']));
out.push(stage('5', 'Read'));
out.push(p('1 His ID card and old reports if he has any; ten minutes early.  2 Before 6 pm the day before.  3 On Wednesday (he\'s free after 3 pm every other day).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Good morning. My name is Hiba Khalil and I have an appointment with Dr Nabil on Tuesday 28 October at 5 pm.   I\'m afraid I can\'t come at that time: my college changed our exam to Tuesday afternoon. Could I change the appointment to Thursday, or to any day after 4 pm? I\'m free every afternoon except Tuesday.   I\'m sorry for the trouble. My phone number is 0936 145 870.   Thank you very much.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals (days, months) and full stops', '✓'], ['Could I…? / I\'d like to…', '✓'], ['The times you ARE free', '✗ – add "I\'m free every afternoon except Tuesday"'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I can\'t come on Tuesday._  →  After: _I can\'t come on Tuesday, but I\'m free every other afternoon after four._'));
out.push(stage('7', 'Write freely – sample'));
out.push(sample([
  '**(a) Appointment card**',
  '**AL-AMAL DENTAL CLINIC** · Patient: Hiba Khalil · Dentist: Dr Nabil Aziz · Date: Tuesday 28 October · Time: 5.00 pm · Please bring: ID card, old X-rays · Note: come 10 minutes early. First visit 80,000 SYP, cash or card. · To change: call 011 332 8899 before 7 pm the day before.',
  '**(b) Message**',
  'Good afternoon. My name is Hiba Khalil and I have an appointment with Dr Nabil on Tuesday 28 October at 5 pm. I\'m afraid I can\'t come: my college moved our exam to that afternoon. Could I come on Thursday 30th instead? I\'m free after 4 pm every day except Tuesday. I\'m sorry for the trouble. My number is 0936 145 870. Thank you.',
]));
out.push(stage('7P', 'Respond – sample slip (as receptionist)'));
out.push(p('★ Easy to help you – you gave me three possible times!   ✓ Can you add your phone number at the top too?   ? Is Thursday at half past four OK?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The message the receptionist can answer in one reply is always the one that says **when the person IS free**.'));
out.push(stage('HW', 'Homework – sample receptionist\'s reply'));
out.push(sample(['Good afternoon Ms Khalil. Thank you for telling us early. Dr Nabil can see you on Thursday 30 October at 4.30 pm. Please bring your old X-rays and your ID card, and come ten minutes before. Could you confirm this appointment by message today? Thank you. Al-Amal Dental Clinic']));

// ===== 10.4 =====
out.push(pb());
out.push(h2('10.4  Take one tablet twice a day'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Take it after meals.', 'Twice a day for five days'], ['Finish all of them.', 'Keep away from children.'], ['Don\'t take it on an empty stomach.', 'Do not use after the date on the box.'], ['Shall I write it for you?', 'Ask your doctor or pharmacist.']]));
out.push(p('**b**  twice a day = two times a day · three times a day = morning, afternoon, evening · every eight hours = three times in 24 hours · before meals = before you eat · with food = while you eat · at night = before you sleep'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (an older customer, Abu Samir)   **b**  1 Twice a day – morning and evening.  2 He mustn\'t stop early: he has to finish all seven days, even if he feels better after three.'));
out.push(p('**Language box – Practise (sample answers):**  1 Take one tablet three times a day, after meals.  2 Take two spoons – ten millilitres – at night.  3 Take it three times in 24 hours (for example 7 am, 3 pm, 11 pm) for five days.  4 Don\'t take it when you haven\'t eaten – always eat something first.'));
out.push(stage('3', 'Practise – sample with label card A'));
out.push(sample(['"This is an antibiotic. You take one capsule every eight hours – so three times a day: in the morning, in the afternoon and at night. Always after food. It\'s for six days, and this is important: finish all of them, even if you feel better after three days. One more thing: don\'t take it with milk. I\'ll write it on the box in big letters."']));
out.push(stage('3R', 'Perform'));
out.push(p('Card A big letters: 1 CAPSULE – EVERY 8 HOURS – AFTER FOOD – 6 DAYS – FINISH ALL – NO MILK. Card B: 10 ml – 3 TIMES A DAY – AFTER FOOD – MAX 5 DAYS – FRIDGE – DON\'T DRIVE.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"This letter is from my son\'s school. The children have to bring sports clothes every Tuesday and a towel on Thursdays for swimming. Parents have to sign the paper and send it back before Sunday. There\'s also a trip on the 12th and it costs 20,000."', '_Question I couldn\'t answer:_ "Do they need a swimming hat?" – "I don\'t know. I\'ll ask the teacher tomorrow."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Hiba explained a letter from her son\'s school. The children have to bring sports clothes every Tuesday and a swimming towel on Thursdays. Parents have to sign the paper and send it back before Sunday. She didn\'t know if they need a swimming hat, so she\'s going to ask the teacher."']));
out.push(stage('5', 'Read'));
out.push(p('1 Three.  2 Stop and see a doctor.  3 Your doctor or pharmacist – especially if you are pregnant, if you take other medicines, or if you have any questions.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample([
  '**THROATCARE – FOR SORE THROATS**  **Lozenges**',
  '**How to take it:** Adults: one lozenge every four hours. Suck it slowly; do not swallow it whole. Do not take more than six in 24 hours.',
  '**For how long:** Up to four days. If your throat still hurts after four days, stop and see a doctor.',
  '**Important:**  • Do not give it to children under six.  • Do not take it with other throat medicines.  • Keep it away from children.',
  '**Ask your doctor or pharmacist if you take other medicines or if you have any questions.**',
  'Al-Shifa Pharmacy · Al-Ward Street, Mezzeh · 0933 427 815',
]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Imperatives (Take… / Do not take…)', '✗ – _You taking one lozenge_ → _Take one lozenge_'], ['How much · how often · when · how long', '✓'], ['The "ask a professional" line', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _You taking one lozenge every four hours._  →  After: _Take one lozenge every four hours._'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample([
  '**HOW TO USE THE WASHING MACHINE (Flat 7)**',
  '**Before you start:** Check the pockets – Lama\'s keys went round fifty times last month. Close the door until you hear "click".',
  '**How to use it:** Put the powder in the left box and the softener in the middle one. For normal clothes choose programme 3 (40°, 1 hour 20). For towels and sheets choose programme 5 (60°, 2 hours).',
  '**Important:**  • Do not open the door when the machine is working.  • Do not put more than 6 kg inside.  • Turn the tap off after you finish.',
  '**If there is a problem:** if water stays inside, don\'t open the door – call the owner, Abu Nabil: 0955 300 214.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Very clear – and the keys story made me laugh!   ✓ Can you add where the powder is?   ? How often should I clean the filter?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A sheet is good if a stranger can follow it **without asking anything**. Ask the class: which question did you still have?'));
out.push(stage('HW', 'Homework – sample instructions for a child'));
out.push(sample(['**Washing machine – for Yazan (10 years old)**  1 Look in the pockets. Take out everything! 2 Put the clothes in and close the door – listen for the click. 3 Put one spoon of powder in the left box. 4 Press number 3, then press START. 5 Don\'t open the door. The machine finishes in one hour and twenty minutes. If something is strange, call me first! ❤']));

// ===== 10.5 =====
out.push(pb());
out.push(h2('10.5  I try to walk every day'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I try to walk every day.', 'I don\'t drink enough water.'], ['I need to sleep seven hours.', 'Most students sleep five or six hours.'], ['I spend too much time on my phone.', 'Four people do no exercise at all.'], ['The truth is…', 'Our conclusion: we need to walk more.']]));
out.push(p('**b**  I don\'t sleep **enough**. · That\'s **too much** coffee. · I don\'t move **enough**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a class survey)   **b**  1 He tries to walk home from the bank twice a week (forty minutes).  2 She wants to go to the gym, but she says she has no time – the truth is she spends too much time on her phone.'));
out.push(p('**Language box – Practise:**  1 to walk  2 too much  3 enough  4 to take  5 too many'));
out.push(stage('3', 'Practise – sample with survey card A'));
out.push(dlg(null, [['A', 'Do you sleep enough?'], ['B', 'No. I need to sleep seven hours, but I sleep six, because I work late.'], ['A', 'Do you exercise?'], ['B', 'I try to walk at the weekend, but I don\'t do anything in the week.'], ['A', 'Do you drink enough water?'], ['B', 'No, I drink too much tea – about eight glasses a day!'], ['A', 'What do you want to change?'], ['B', 'I\'d like to swim again. I swam every summer when I was younger.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: habit – walks at the weekend; problem – sleeps 6 hours / drinks tea not water. Card B: habit – sleeps 8 hours and drinks water; problem – no exercise at all.'));
out.push(stage('4', 'Your turn – sample group table'));
out.push(table(['Question', 'Hiba', 'Fadi', 'Tareq', 'Rasha'], [
  ['Do you sleep enough?', 'no – 6 h', 'yes – 8 h', 'no – 5 h', 'no – 6 h'],
  ['Do you exercise?', 'walks to college', 'no time', 'walks home 2×/week', 'with her children'],
  ['Do you drink enough water?', 'no', 'yes', 'no – 5 coffees', 'yes'],
  ['Do you take breaks at work?', 'no', 'yes', 'no', 'yes'],
  ['Time outside every day?', '30 min', '10 min', '45 min', '2 hours'],
], [2, 1, 1, 1, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"In our group nobody sleeps enough – between five and six and a half hours. Two people try to walk every day. Three people drink too much coffee. Everybody wants to spend less time on their phone, but nobody knows how!"']));
out.push(stage('5', 'Read'));
out.push(p('1 Only two.  2 "I don\'t have time."  3 We don\'t need a gym; we need to walk, to drink water and to put our phones in another room.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Group 2 – How healthy are we?**   This week we asked four students about their everyday habits. The results are interesting.   **Sleep.** Nobody sleeps enough. Most students sleep six hours, and only one person sleeps eight.   **Exercise.** Half of the group walk every day. Two people do no exercise at all.   **Water and coffee.** Two people drink enough water; one person drinks five coffees a day.   **What we want to change.** Everybody wants to spend less time on the phone.   **Our conclusion:** we need to walk more and sleep one hour earlier.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['nobody / everybody + -s', '✗ – _Everybody want_ → _Everybody wants_'], ['enough / too much / too many', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Everybody want to change something._  →  After: _Everybody wants to change something._'));
out.push(stage('7', 'Write freely – sample (≈95 words)'));
out.push(sample([
  '**Group 3 – How healthy are we?**',
  'We asked four students five questions about their habits. Some answers surprised us.',
  '**Sleep.** Nobody in our group sleeps eight hours. Three people sleep five or six, and the reasons are work, study and small children.',
  '**Exercise.** Two people walk every day, one walks twice a week, and one does nothing at all. Nobody goes to a gym – it\'s too expensive.',
  '**Water and coffee.** Two of us drink enough water. Tareq drinks five coffees a day and then he can\'t sleep!',
  '**Time outside.** Rasha spends two hours outside with her children. The rest of us spend less than thirty minutes.',
  '**Our conclusion:** we don\'t need a gym – we need to go outside more and drink less coffee after four o\'clock.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Your conclusion is true for me too – especially the coffee!   ✓ Can you add how many people take breaks at work?   ? How many hours does Rasha sleep?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Typical class conclusion: _Nobody sleeps enough, everybody sits too much, and the phone is the biggest problem._'));
out.push(stage('HW', 'Homework – sample personal plan'));
out.push(sample(['This month I want to sleep one hour more. I\'m going to put my phone in the kitchen at ten o\'clock, not next to my bed. I need to stop drinking coffee after four – I\'ll drink water or tea with no sugar. I\'m also going to walk home from the bank twice a week, on Monday and Wednesday. In four weeks I\'ll read this again and see.']));

// ===== 10.6 =====
out.push(pb());
out.push(h2('10.6  Get well soon!'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Get well soon!', 'I hope you feel better soon.'], ['How are you feeling?', 'The whole class is thinking of you.'], ['Is there anything I can do?', 'Please don\'t worry.'], ['Take care of yourself.', 'If anything changes, I will call you.']]));
out.push(p('**b**  To the ill person: Get well soon · I hope you feel better · Take care of yourself.   To the family: How is he today? · Is there anything I can do? (both are possible).'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (at Rami\'s flat)   **b**  1 It wasn\'t a simple cold; she gave him something and told him to rest for five days.  2 Soup (Lina\'s mother made it) and a card from the class.'));
out.push(p('**Language box – Practise (sample answers):**  1 I\'m sorry to hear that – get well soon!  2 I\'m sorry to hear about your mother. I hope she gets better soon. Is there anything I can do?  3 How are you feeling? Take care of yourself and don\'t get up too early.  4 I hope your voice comes back soon! Shall I read the text for the class?'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'How are you feeling?'], ['B', 'A little better, thank you. But I\'m so bored!'], ['A', 'I\'m sorry to hear that. What did the doctor say?'], ['B', 'Rest for three more days.'], ['A', 'Is there anything I can do? Shall I bring you some books from the centre?'], ['B', 'That\'s very kind of you. Yes, please!'], ['A', 'Take care of yourself. And get well soon!']]));
out.push(stage('3R', 'Perform'));
out.push(p('All six phrases should appear. The key teaching point is the **voice**: soft and falling, not fast and bright.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"When my neighbour broke her arm, the women in the building organised everything. One cooked on Monday, one took the children to school, one did the shopping on Thursdays. Nobody asked her – they just made a list and told her."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"When Hiba\'s neighbour broke her arm, the women in the building made a list: one cooked on Monday, one took the children to school, one did the shopping. Hiba says nobody asked – they just organised it."']));
out.push(p('_Teaching point: the most useful offer is **concrete** ("I\'ll bring bread on Tuesday"), not general ("tell me if you need anything")._', { color: '595959' }));
out.push(stage('5', 'Read'));
out.push(p('1 Don\'t come back before the doctor says yes – they can wait.  2 Because Rami\'s mother lives in Homs and will worry; Lina gives her the news and her number.  3 That she will call immediately if anything changes.'));
out.push(stage('6', 'Write with help – samples'));
out.push(sample(['**Card:** **GET WELL SOON, HIBA!** Everybody in Class 4B is thinking of you. The lessons are much quieter without your questions – and nobody else brings sweets! Rest properly and don\'t come back before you feel strong. With best wishes from all of us. 🌼']));
out.push(sample(['**Message to the family:** Dear Umm Hiba, I hope you are well. I wanted to tell you that we visited Hiba this evening. She is much better than yesterday – she was sitting up and complaining about the food, which is a very good sign! The doctor gave her something and told her to rest until Sunday, and her flatmate is looking after her well. Please don\'t worry. If anything changes, I will call you immediately. My number is 0991 445 360. With warm regards, Rasha']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Get well soon / I hope you feel better', '✗ – _I hope you will feeling better_ → _I hope you feel better_'], ['Good news first', '✓'], ['A promise to call + a number', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I hope you will feeling better soon._  →  After: _I hope you feel better soon._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**(a) Card from the office**',
  '**GET WELL SOON, TAREQ!** The whole branch is thinking of you. Nobody can find anything in your drawer and the coffee machine misses you. Rest properly – the end-of-month accounts can wait (we said that, and we mean it). With best wishes from everybody at Baramkeh branch.',
  '**(b) Message to his wife**',
  'Dear Lamia, I hope you are well. I wanted to tell you that we spoke to Tareq this morning and he sounded much better than on Sunday. The doctor is happy with him and he says he can go back to work next week – but we told him not to hurry. If you need anything at all, or if you want somebody to bring shopping, please call me: 0944 318 260. With warm regards, Omar',
]));
out.push(stage('7P', 'Respond – sample slip (as the family member)'));
out.push(p('★ This made me feel better – thank you for writing.   ✓ Can you add when his colleagues will visit?   ? Is he eating properly at lunch?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The line that makes an ill person smile is usually the **personal joke**: the empty drawer, the quiet classroom, the coffee machine.'));
out.push(stage('HW', 'Homework – sample family reply'));
out.push(sample(['Dear Omar, Thank you so much for your message – it was very kind. Tareq is eating better and he slept well last night. Could you tell me which day the branch meeting is? He worries about it. And if you are near the pharmacy on Thursday, could you bring his medicine? I can\'t leave the children. Thank you again. Lamia']));

// ===== 10.7 =====
out.push(pb());
out.push(h2('10.7  Review & Mediate: What does the box say?'));
out.push(stage('1', 'Get ready – quiz'));
out.push(p('1 I\'ve got a headache.  2 My feet hurt.  3 You should rest.  4 I\'d like to make an appointment.  5 I don\'t drink enough water.  6 I hope you feel better.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**b**  "VITAMIN – AFTER LUNCH" in big letters on every Friday.'));
out.push(stage('3', 'Practise – sample with card A (eye drops)'));
out.push(sample([
  '"Let\'s do it step by step. These are drops for your eyes.',
  'Two drops in **each** eye – so four drops altogether – three times a day.',
  'This is important: don\'t touch your eye with the bottle. Hold it a little above the eye, like this.',
  'And one more thing: write today\'s date on the box. Four weeks after you open it, we throw it away, even if there is medicine inside.',
  'If your eye is red after two days, we don\'t buy another box – we go back to the doctor. Shall I write all this in big letters?"',
]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A big letters: 2 DROPS EACH EYE – 3 TIMES A DAY – DON\'T TOUCH THE EYE – THROW AWAY AFTER 4 WEEKS. Card B: SIT 5 MINUTES – BAND ABOVE THE ELBOW – DON\'T TALK – WRITE THE 2 NUMBERS EVERY MORNING – BOOK TO THE DOCTOR EVERY MONTH.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"I explained the bank app to my father. First you open the app and you put your number. Then a code comes by message, and you have two minutes to write it. After that you see your account. He always forgets the code is only for two minutes, so I wrote the steps on a card and put it in his wallet."']));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(['"Tareq explained the bank app to his father. First you open the app and you put your number. The code comes by message and it only works for two minutes. His father always forgets the code, so Tareq wrote the steps on a card and put it in his wallet."']));
out.push(p('_What makes an explanation clear: one step at a time · a comparison with something known · a written reminder · and saying what to do when it goes wrong._', { color: '595959' }));
out.push(stage('5', 'Read – A2 Key Reading Part 3'));
out.push(p('1 B  2 A  3 B  4 B  5 B'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**TETA – YOUR TWO BOXES**   **Box 1 (throat):** One tablet every **4** hours. Never more than **6** a day. **Suck** it slowly, like a sweet – do not **swallow it whole**. For **3–4** days only.   **Box 2 (vitamin):** One capsule **once** a week – **Friday**! Take it **with** food, after **lunch**. I wrote it on your calendar.   **Important:** if your throat still hurts after four days, we go back to the doctor – we don\'t buy another box.   Call me any time, Teta. ❤ Maya · 0933 427 815']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Both boxes explained simply', '✓'], ['How much · how often · when · how long', '✓'], ['A warning + when to go back to the doctor', '✓'], ['A phone number', '✗ – add it at the end']]));
out.push(stage('7', 'Write freely – A2 Key Writing Part 6 sample (≈45 words)'));
out.push(sample(['Hi Tom,', 'I\'m sorry you\'re ill – get well soon! In class today we practised making appointments and we started Unit 11. The homework is the writing task on page 24.', 'Shall I bring you my notes on Saturday? I can also explain the new grammar.', 'Take care,', 'Lama']));
out.push(p('_Marking note: all three content points (sorry, what you did in class, an offer of help) must be present for full content marks._', { color: '595959' }));
out.push(stage('✓', 'Unit 10 check'));
out.push(p('**A**  1 b  2 b  3 a  4 a  5 b  6 b  7 a  8 a'));
out.push(p('**B**  1 B  2 B  3 B  4 C  5 C'));
out.push(p('_Note for question 4: the pharmacist says driving is fine and doesn\'t mention coffee – the thing the customer must not do is **stop early**. Students who chose A heard "Can I drive?" and stopped listening to the answer._', { color: '595959' }));
out.push(p('**C  Sample message (≈45 words):**'));
out.push(sample(['Hi Rana, I\'m so sorry to hear you\'re ill. How are you feeling today? Please don\'t worry about the Thursday report – I finished it this morning and sent it to Mr Khaled. I pass your building every evening, so shall I bring you bread and soup tomorrow at six? Lina']));
out.push(p('_Scoring guide: A = 8 marks, B = 5 marks, C = 5 marks (content 2, organisation 1, language 2). Total 18. 13+ = ready for Unit 11._', { color: '595959' }));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 10 · Answer Key');
