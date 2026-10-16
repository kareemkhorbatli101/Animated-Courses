// Proactive English A2 · Syria Edition · Book 1 · Unit 8 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, stage, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const ck = (rows) => table(['Checklist', '✓ / ✗'], rows, [3, 2]);
const boardT = (rows) => table(['We SAY…', 'We WRITE…'], rows, [1, 1]);

out.push(h1('Answer Key · Unit 8  The Past'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(p('_Every task has an answer or a full sample answer. Samples show one good A2 answer; learners\' own answers will differ._', { color: '595959' }));

// ===== 8.1 =====
out.push(h2('8.1  What did you do at the weekend?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I visited my parents.', 'Last weekend I went to Bludan.'], ['I cooked for twenty people!', 'On Friday my mother cooked for the family.'], ['Did you rest?', 'I didn\'t clean the flat.'], ['I took two hundred photos.', 'We walked in the Old City.']]));
out.push(p('**b**  visited · watched · studied · stopped   ·   went · had · saw · ate'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (to Homs)   **b**  1 He cooked for the photography club.  2 Because his mother cooked for twenty people and all the family came (and on Saturday he painted the kitchen).'));
out.push(p('**Language box – Practise:**  1 visited  2 went  3 didn\'t come  4 took  5 studied  6 didn\'t like'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'You look tired! What did you do at the weekend?'], ['B', 'I travelled to Latakia. I arrived on Thursday night and I came back yesterday.'], ['A', 'Nice! Did you rest?'], ['B', 'No, I didn\'t! On Friday I swam in the sea and ate fish with my cousins.'], ['A', 'And on Saturday?'], ['B', 'I helped my uncle in his shop all day. What about you?']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A verbs: travelled, arrived, came back (irregular), swam (irr.), ate (irr.), helped. Card B: cleaned, washed, studied, watched, didn\'t go. Typical board-clinic errors: _I didn\'t went_ → _I didn\'t go_; _She goed_ → _She went_.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"On Friday I went to my grandmother\'s house in Dummar. I helped her cook and we ate together with my cousins. In the afternoon I slept for two hours. On Saturday I studied for my exam and I washed my car. But I didn\'t finish the exercises and I didn\'t go out at all."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Hiba went to her grandmother\'s house in Dummar on Friday. She helped her cook and they ate together. On Saturday she studied for her exam, but she didn\'t finish. She says she needs another weekend!"']));
out.push(stage('5', 'Read'));
out.push(p('1 Twelve.  2 He slept for two hours.  3 He didn\'t clean the flat, he didn\'t wash his clothes and he didn\'t study his English homework.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Hi Mum! Sorry I didn\'t call on Friday – it was a busy weekend.   On Friday I worked until four and then I helped my brother with his car. On Saturday morning I cleaned the whole flat. In the afternoon I visited Abu Samir in the hospital, and in the evening I watched the match with Fadi.   I didn\'t study and I didn\'t answer my emails. But I was happy!   How was your weekend? Say hello to Dad.   Tareq']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Past simple forms', '✗ – _I helpped_ → _I helped_'], ['didn\'t + base verb', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I didn\'t studied and I didn\'t answered my emails._  →  After: _I didn\'t study and I didn\'t answer my emails._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  'Hi Lama! How are you? Sorry I didn\'t call – what a weekend.',
  'On Thursday evening my cousins arrived from Daraa with four children, so the flat was full. On Friday we cooked all morning: my mother made mansaf and I made two salads. Twelve people ate lunch here! In the afternoon we took the children to the park and I played football with them for an hour.',
  'On Saturday I slept until eleven. Then I studied for the English test.',
  'I didn\'t clean the kitchen, I didn\'t wash my clothes and I didn\'t finish the exercises. But it was a lovely weekend.',
  'How was yours? Hiba',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Twelve people for lunch – that sounds fun!   ✓ Can you add how old the children are?   ? Did you win the football match?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most relaxing weekend (typical): a student who slept and watched films. Hardest work: anyone who hosted family.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Hi Hiba! My weekend was very quiet – too quiet after your news! On Friday I studied on the balcony and in the evening Maya and I watched an old film. On Saturday I washed everything and bought food for the week. Did you make your mother\'s shakriyeh, or only the salads?']));

// ===== 8.2 =====
out.push(pb());
out.push(h2('8.2  Where did you go?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Where did you go?', 'How was your trip?'], ['Who did you go with?', 'We took the Thursday bus.'], ['How long did you stay?', 'We stayed four days.'], ['Did you like it?', 'The journey home was terrible.']]));
out.push(p('**b**  Where did you go? · How long did you stay? · Did you like it? · Who did you go with?'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (to Latakia)   **b**  1 With her sister Lama.  2 The journey home – the bus didn\'t leave on time and it took five hours.'));
out.push(p('**Language box – Practise:**  1 Where did you go last summer?  2 Who did she meet?  3 Did you like the film?  4 How long did they stay?  5 What did he buy?'));
out.push(stage('3', 'Practise – sample with trip card A'));
out.push(dlg(null, [['A', 'Where did you go?'], ['B', 'To Palmyra.'], ['A', 'Who did you go with?'], ['B', 'With two cousins.'], ['A', 'How long did you stay?'], ['B', 'Three days.'], ['A', 'What did you do there?'], ['B', 'We walked in the old city and we took a lot of photos. One evening we drank tea with a family there.'], ['A', 'Did you swim?'], ['B', 'No, I didn\'t – there\'s no sea in Palmyra! And the journey was long and hot.']]));
out.push(stage('3R', 'Perform'));
out.push(p('The six questions are usually: Where / Who with / How long / What did you do / Did you like it / How was the journey.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Where?', 'When?', 'Who with?', 'How?', 'How long?', 'Best thing?', 'Problem?'], [['Suwayda', 'last month', 'his wife', 'by bus', '2 nights', 'the food – mansaf 3 times', 'the bus home didn\'t come; waited 2 hours']], [1, 1, 1, 1, 1, 1.3, 1.5]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq went to Suwayda for his cousin\'s wedding. He travelled by bus with his wife and they stayed two nights. The best thing was the food – he ate mansaf three times! The problem was the journey home: the bus didn\'t come and they waited two hours."']));
out.push(stage('5', 'Read'));
out.push(p('1 Because it was her father\'s birthday.  2 At home she sleeps five hours; in Latakia she slept nine.  3 Five hours (instead of three).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Our class holidays: Tareq in Suwayda**   Last month Tareq went to Suwayda with his wife. It was his cousin\'s wedding and the whole family came.   They travelled by bus and stayed two nights. "I ate mansaf three times in two days," Tareq told me. He danced until two in the morning – at home he goes to bed at eleven!   The only problem was the journey home. The bus didn\'t come and they waited two hours at the garage.   But Tareq says it was worth it: "It was the best wedding of my life."']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Past simple, he/she (no -s)', '✗ – _he stayed_ ✓ but _he ates_ → _he ate_'], ['did / didn\'t + base verb', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _The bus didn\'t came._  →  After: _The bus didn\'t come._'));
out.push(stage('7', 'Write freely – sample (≈80 words)'));
out.push(sample([
  '**Our class holidays: Hiba in Bludan**',
  'Last summer Hiba went to Bludan with her parents and her two brothers. Her uncle has a small house there and the family goes every August.',
  'They travelled by car and stayed ten days. "We didn\'t do anything and it was perfect," Hiba told me. They walked in the mountains every morning and in the evening they sat outside with the neighbours. At home Hiba studies until midnight; in Bludan she slept at ten.',
  'The only problem was the water – it stopped for two days.',
  'But Hiba says she wants to go back tomorrow: "The air there is different."',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Good report – and a nice quote at the end!   ✓ Small correction: we stayed nine days, not ten.   ? Why didn\'t you write about the night we lost the keys?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Class travel page: the mountain trips are usually the most popular.'));
out.push(stage('HW', 'Homework – sample Q&A'));
out.push(sample(['**Questions:** 1 Where did you go? 2 Who did you travel with? 3 How did you get there? 4 What was the best thing? 5 Did anything go wrong?', '**Answers:** 1 I went to Tartus. 2 With two friends from work. 3 We took the bus from the garage at seven. 4 The best thing was the fish restaurant near the port. 5 Yes – I left my jacket on the bus and I never saw it again!']));

// ===== 8.3 =====
out.push(pb());
out.push(h2('8.3  Where were you?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I was at work.', 'Yesterday at six I was at home.'], ['Were you here on Tuesday?', 'The cupboard was open.'], ['No, I wasn\'t.', 'The key wasn\'t in the office.'], ['Who was in the room?', 'They were here until nine.']]));
out.push(p('**b**  I **was** · you **were** · he **was** · we **were** · they **were** · the shop **was** · my parents **were**'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (something is missing – the club camera)   **b**  1 He wasn\'t at the centre; he was at work until eight.  2 Lina – it was in her car for two weeks.'));
out.push(p('**Language box – Practise:**  1 wasn\'t  2 Were  3 were  4 wasn\'t  5 were'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'The projector isn\'t in the meeting room! Where is it?'], ['B', 'It was there on Sunday – I used it myself.'], ['A', 'Were you here on Monday?'], ['B', 'No, I wasn\'t. I was at a client\'s office all day.'], ['A', 'Who was in the meeting room?'], ['B', 'The training group. They were there until six.'], ['A', 'Let\'s ask them!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: the projector was in the meeting room; the training group had it. Card B: the bicycle was outside the building; the cousin borrowed it.'));
out.push(stage('4', 'Your turn – alibi game, sample'));
out.push(dlg(null, [['Interviewer', 'Where were you at eight o\'clock yesterday evening?'], ['Fadi', 'I was at the café in Shaalan with Rasha.'], ['Interviewer', 'Was the café busy?'], ['Fadi', 'Yes, it was. Very busy.'], ['Interviewer (to Rasha)', 'Where were you at eight?'], ['Rasha', 'At the café in Mezzeh with Fadi. It was almost empty.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Fadi said they were at the café in Shaalan, but Rasha said they were at the café in Mezzeh. Fadi said the café was busy and Rasha said it was empty. They\'re guilty!"']));
out.push(stage('5', 'Read'));
out.push(p('1 It wasn\'t in Mr Bassam\'s office.  2 Because she wasn\'t at the club last week – she was ill.  3 A borrowing book with name, date and signature.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**REPORT – THE MISSING KEYS**  **From:** Tareq Mansour  **Date:** 14 October   On Monday morning the keys of the small meeting room weren\'t on the board. The board was open and nobody was at the reception desk at eight o\'clock.   I wasn\'t in the office on Friday afternoon – I was at the branch in Baramkeh. The cleaning team were here until seven.   Then Rana remembered: on Friday the auditors used the room and they returned the keys to the drawer, not to the board.   The keys were in the drawer all weekend.   **My suggestion:** one place for all keys, and a sign on the drawer.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['was / were (no did)', '✗ – _Did the keys were there?_ → _Were the keys there?_'], ['wasn\'t / weren\'t', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I didn\'t was in the office on Friday._  →  After: _I wasn\'t in the office on Friday._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**REPORT – THE DELIVERY THAT DIDN\'T ARRIVE**   **From:** Maya Nasser   **Date:** 23 October',
  'On Tuesday the medicine delivery wasn\'t at the pharmacy. The driver usually comes at nine, but at eleven he wasn\'t here and his phone was off.',
  'I wasn\'t at the pharmacy on Monday – I was at the hospital pharmacy all day – so I called my colleague. She said the boxes were ready on Monday evening.',
  'This morning the company called. The driver was ill on Tuesday and nobody took his list. The boxes were in the warehouse for two days.',
  '**My suggestion:** the company sends us a message every morning with the driver\'s name and number.',
]));
out.push(stage('7P', 'Respond – sample slip (as manager)'));
out.push(p('★ Clear report – thank you.   ✓ Can you add which medicines were in the delivery?   ? Who had the driver\'s list on Tuesday?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Good suggestions are **specific and easy** (a book, a sign, a morning message), not "everyone must be more careful".'));
out.push(stage('HW', 'Homework – sample manager\'s reply'));
out.push(sample(['Dear Maya, Thank you for the clear report. I called the company this afternoon and they apologised. From Monday they will send a message every morning with the driver\'s name and number – your suggestion exactly. Please tell me immediately if a delivery is more than one hour late. Best regards, Dr Samar']));

// ===== 8.4 =====
out.push(pb());
out.push(h2('8.4  I was born in Homs'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I was born in 1996.', '2014 – started university'], ['We moved here in 2005.', 'She finished in 2019.'], ['I grew up in Dummar.', 'In 2020 I got a job at a company.'], ['When did you start work?', 'She is now the head teacher.']]));
out.push(p('**b**  nineteen eighty-seven · nineteen ninety-five · two thousand and one · twenty ten (two thousand and ten) · twenty nineteen · twenty twenty-six'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a new colleague / a guest at the centre party – Hani)   **b**  1 In 2005, when she was seven.  2 Because the company closed.'));
out.push(p('**Language box – Practise:**  1 was born  2 in  3 on  4 for  5 when'));
out.push(stage('3', 'Practise – sample with life card A'));
out.push(dlg(null, [['A', 'Are you from Damascus?'], ['B', 'No, actually. I was born in Deir ez-Zor in 1990. My family moved to Damascus in 1999.'], ['A', 'So you grew up there. Where did you go to school?'], ['B', 'In Mezzeh. Then I studied pharmacy at Damascus University.'], ['A', 'And did you start work immediately?'], ['B', 'I worked in a hospital for two years. Then in 2016 I opened my own pharmacy.'], ['A', 'And now?'], ['B', 'Now I\'m married and I have two sons.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A years: 1990 born · 1999 moved · 2016 own pharmacy. Card B: 1985 born · 2010–2018 Dubai · 2018 came back.'));
out.push(stage('4', 'Your turn – sample timeline'));
out.push(table(['1993', '2011', '2016', '2018', '2023'], [['born in Damascus', 'started at the Faculty of Education', 'first teaching job', 'got married', 'moved to a school near her house']], [1, 1.2, 1, 1, 1.4]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Rasha was born in Damascus in 1993. She grew up in Jaramana and studied at the Faculty of Education. She started teaching in 2016 and she got married in 2018. In 2023 she moved to a new school near her house because she has two children now."']));
out.push(stage('5', 'Read'));
out.push(p('1 In the Old City, near Bab Touma.  2 She moved to Dubai with her family and worked at an international school.  3 She reads poetry and makes a very good lentil soup.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**OUR STUDENTS: Fadi Saeed**   Fadi was born in Tartus in 1996 and grew up near the sea. He studied mechanical engineering in Homs.   He finished in 2019 and started working in a car garage the same year. "I learned more in six months in the garage than in four years at university," he says.   In 2021 he moved to Damascus, and in 2023 he opened a small workshop with his brother. Then in 2025 he started English classes because his customers are foreign companies.   He is now the best mechanic in Jaramana (he says!). In his free time he plays chess online.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['was born', '✗ – _He born in Tartus_ → _He was born in Tartus_'], ['in + year, on + date', '✓'], ['Past for the story, present for now', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _He born in Tartus in 1996._  →  After: _He was born in Tartus in 1996._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  '**My grandmother, Zahra**',
  'My grandmother was born in a village near Hama in 1948. She grew up with seven brothers and sisters and she left school when she was eleven, because her mother was ill.',
  'She got married in 1966 and moved to Homs. She had six children, and my father was the youngest. In 1982 the family moved to Damascus and she worked for twenty years in a sweet factory.',
  '"I never learned to read," she told me last year, "but I know everybody\'s stories."',
  'She is eighty-two now and she lives with my uncle in Jaramana. Every Friday she makes maamoul for the whole family.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I like the detail about everybody\'s stories.   ✓ Can you add a quote about the sweet factory?   ? What did she do between 1966 and 1982?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Guessing works best when the biography keeps one surprising detail for the end.'));
out.push(stage('HW', 'Homework – sample own biography'));
out.push(sample(['Tareq Mansour was born in Suwayda in 1999 and grew up in a house with a big garden. He moved to Damascus in 2017 to study economics. He finished in 2021 and started work at a bank in Baramkeh the same year. He got married in 2024. He is now studying English because his bank works with foreign companies. In his free time he plays chess and he is learning to cook.']));

// ===== 8.5 =====
out.push(pb());
out.push(h2('8.5  First… then… in the end'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['First we took the bus…', 'In the end, everything was fine.'], ['Then it started to rain.', 'After that, we walked to the café.'], ['Suddenly, the bus stopped!', 'Finally, we arrived at nine.'], ['What happened? And then?', 'It was a disaster – but a beautiful one.']]));
out.push(p('**b**  First → Then → After that → Finally → In the end'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (well)   **b**  1 The bus wasn\'t there and they waited an hour.  2 An old woman – she invited them into her kitchen.'));
out.push(p('**Language box – Practise (order):**  1 First, I met Hiba at the bus stop.  2 Then we waited twenty minutes for the service.  3 Suddenly, it started to rain.  4 After that, we walked to the café.  5 In the end, we were very late – but it was a great evening.'));
out.push(stage('3', 'Practise – sample, story card A'));
out.push(sample(['"First, a man left his house with a big cake for a party. Then he got on a very crowded minibus and he held the cake over his head. Suddenly, the minibus stopped and the cake fell on the floor! After that, everybody helped him – they put the cake back in the box with their hands. In the end, he arrived at the party with half a cake, and everybody laughed and ate it anyway."']));
out.push(stage('3R', 'Perform'));
out.push(p('All five sequencers should appear. The listener reacts with _Oh no! What happened? And then?_'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"Last Sunday was terrible. First, my alarm didn\'t ring and I woke up at half past seven. Then the water wasn\'t working, so I couldn\'t shower. After that, I ran to the bus stop and the bus left without me. Suddenly my neighbour stopped his car and gave me a lift. In the end I arrived at the bank at ten – and the manager was late too, so nobody said anything!"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq had a terrible morning last Sunday. First his alarm didn\'t ring. Then the water wasn\'t working, so he couldn\'t shower. After that, he ran to the bus and it left without him. In the end he arrived at the bank at ten – and the manager was late too!"']));
out.push(stage('5', 'Read'));
out.push(p('1 Four.  2 The second one (and the beginning of the third).  3 With a surprise: they didn\'t see the famous monastery, but it was the best day of the month.'));
out.push(stage('6', 'Write with help – sample (story card B pictures)'));
out.push(sample(['Last Thursday, Nour went to the airport to meet her sister. She was very happy and she had a big bunch of flowers.   But when the plane arrived, her sister wasn\'t there. After that, Nour waited for twenty minutes and she started to worry.   Then she phoned her. Her sister was at the other gate on the other side of the airport! They ran to each other and the flowers fell on the floor.   In the end, a little boy picked up the flowers and gave them back – and everybody in the airport was laughing.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Past simple (and was / were)', '✗ – _she start to worry_ → _she started to worry_'], ['Sequencers', '✓'], ['Matches all the pictures; 35+ words', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Then she phone her sister._  →  After: _Then she phoned her sister._'));
out.push(stage('7', 'Write freely – A2 Key Writing Part 7 sample (≈70 words)'));
out.push(sample([
  'Last week a boy was walking home from school when he saw a wallet on the street. He opened it and found a lot of money and a photo of a family.',
  'Then he saw a woman in front of him and he ran after her. "Excuse me! Is this yours?" he said. The woman looked in her bag – the wallet wasn\'t there!',
  'In the end, she was so happy that she took the boy to a shop and bought him a big box of sweets. He gave half of them to his sister.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I love the ending with the sister!   ✓ Can you add how the boy felt when he saw the money?   ? What did the woman say to him?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The best endings add a **feeling** or a **surprise**, not just "and then we went home".'));
out.push(stage('HW', 'Homework – sample different ending'));
out.push(sample(['…Then he ran after the woman, but she got into a taxi and the taxi drove away. In the end, the boy took the wallet to the police station. The policeman wrote his name and address. Two weeks later a letter arrived for him, with a photo of the family and a thank-you card from the woman.']));

// ===== 8.6 =====
out.push(pb());
out.push(h2('8.6  Really? That\'s great!'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['That\'s great news!', 'Congratulations! 🎉'], ['Oh no! What happened?', 'I\'m sorry to hear about your car.'], ['Poor you!', 'I hope the garage finishes it quickly.'], ['Well done!', 'If you need a lift, just call me.']]));
out.push(p('**b**  Good news: Congratulations! · That\'s wonderful! · Well done!   Bad news: I\'m sorry to hear that. · Oh no! · Poor you!'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (three: Hiba\'s exam, Fadi\'s car, Rasha\'s new niece)   **b**  1 She passed her exam with 92.  2 His car broke down on the highway and it cost him a lot.'));
out.push(p('**Language box – Practise (sample answers):**  1 Congratulations! That\'s wonderful!  2 Oh no, I\'m sorry to hear that. I hope she gets better soon.  3 Congratulations! That\'s lovely news!  4 Oh no! Poor you.  5 Well done!'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [['A', 'I\'ve got some news – my brother got a job in Dubai!'], ['B', 'Really? That\'s wonderful! Congratulations to him!'], ['A', 'Thank you! He starts next month.'], ['B', 'What happened exactly – did he apply, or did they call him?'], ['A', 'A friend sent his CV to the company.'], ['B', 'And is your mother happy, or sad that he\'s travelling?']]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners tick the reactions; the key point is **intonation** – a flat "That\'s wonderful" sounds sarcastic.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['**Real:** "My sister had a baby girl on Sunday – her name is Jouri."  **Invented:** "I won a car in a competition at the supermarket!"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Rasha told me her sister had a baby girl on Sunday – that was true. She also said she won a car in a competition. I didn\'t believe that one!"']));
out.push(stage('5', 'Read'));
out.push(p('1 All the nights in the café with her books.  2 A lift to work before Thursday (he passes Fadi\'s building at 7.45).  3 The second one (bad news) – because bad news needs more care, an offer of help and a reason not to feel embarrassed about asking.'));
out.push(stage('6', 'Write with help – samples'));
out.push(sample(['**Good news:** Rasha! Congratulations! A baby girl is amazing news – and after everything your sister went through this year. I know how much she wanted this. Let\'s all come and visit on Friday with sweets!']));
out.push(sample(['**Bad news:** Tareq, I\'m really sorry to hear about your father\'s operation. Three hours in the hospital waiting – what a hard day for all of you. I hope he comes home soon and gets strong quickly. If you need anybody to stay with the children in the afternoon, just call me. Don\'t worry about asking.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['Right reaction for the news', '✓'], ['Something personal', '✗ – add what you remember about them'], ['Celebration plan OR real offer of help', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _Sorry about your father. Bye._  →  After: _I\'m really sorry to hear about your father. I hope he comes home soon. If you need help with the children, just call me._'));
out.push(stage('7', 'Write freely – sample (≈75 words)'));
out.push(sample([
  '**To Hiba (good news):** Hiba, congratulations!! 92 – and with a full-time job! I remember you studying in the café every evening last winter with your coat on because the heating didn\'t work. You earned every mark. Let\'s celebrate on Thursday – and this time I\'m paying.',
  '**To Fadi (bad news):** Fadi, I\'m so sorry about the car. Two hours on the highway and then the price – what a week. I hope the garage finishes it before Thursday. I pass your building at a quarter to eight every morning, so call me and I\'ll take you to work. It\'s no problem at all.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ This made me smile – you remembered the coat!   ✓ Can you add what time on Thursday?   ? Are we going to the same café?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The better reply is usually the one with a **concrete offer** (a time, a lift, a visit), not only kind words.'));
out.push(stage('HW', 'Homework – sample reply to the reply'));
out.push(sample(['Thank you so much, Tareq – that\'s very kind. Yes please, a lift on Monday and Tuesday would help a lot. I\'ll be downstairs at a quarter to eight with coffee for both of us. You saved my week!']));

// ===== 8.7 =====
out.push(pb());
out.push(h2('8.7  Review & Mediate: Sami says he…'));
out.push(stage('1', 'Get ready – quiz'));
out.push(p('1 I went to Homs last week.  2 Did you go to the party?  3 She didn\'t come.  4 Where were you yesterday?  5 I was born in 1995.  6 I\'m sorry to hear that.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**b**  It broke down again on Wednesday, and it needs a new engine.'));
out.push(stage('3', 'Practise – sample (card A told back)'));
out.push(sample(['"She says she finished her thesis on Monday – she worked on it for two years! Her defence is on the twentieth and she\'s terrified. She wants us all to come: it\'s at the university at ten."']));
out.push(p('**Card B told back:** _"They moved to the new flat on Saturday, but the lift doesn\'t work. Her husband carried everything up five floors – twice! She says come and see it on Friday, but bring strong legs."_'));
out.push(stage('3R', 'Perform'));
out.push(p('Common things forgotten: the **date**, the **time**, and the **invitation** at the end. Remind students: the message is useless if the time is lost!'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Rasha', 'My sister had a baby girl on Sunday. Her name is Jouri.'], ['Hiba', 'Congratulations! How is your sister?'], ['Rasha', 'She\'s tired but very happy. I visited them on Monday.'], ['Hiba', 'Who does the baby look like?'], ['Rasha', 'Her father! Everybody says it.']]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(['"Hiba told me about Rasha\'s news. Rasha\'s sister had a baby girl on Sunday in Jaramana. The baby\'s name is Jouri. Rasha visited them on Monday and she says the baby looks like her father!"']));
out.push(p('_Teaching point: compare the final report with the original. What changed? Names, numbers and dates are the first things to disappear._', { color: '595959' }));
out.push(stage('5', 'Read – A2 Key Reading Part 3'));
out.push(p('1 B  2 A  3 B  4 B  5 A'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Hi Lina,   I\'ve got news from Sami! He had an interview on Sunday at a company in Mezzeh, and on Tuesday they called him – he got the job! He starts on the first of November – more money, and it\'s only fifteen minutes from his house.   The bad news: on Wednesday his car broke down again and it needs a new engine, so he has a new job and no car.   He says he\'s sorry, but he can\'t come to the dinner on Friday because he\'s moving his things to the new office. Let\'s all call him tonight and say congratulations!   Omar']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['I → he / she', '✓'], ['Past simple for the events', '✓'], ['Present for what is still true', '✗ – _he started on the first of November_ → _he starts_'], ['The message to Lina passed on', '✓']]));
out.push(stage('7', 'Write freely – A2 Key Writing Part 7 sample (≈60 words)'));
out.push(sample([
  'Last Tuesday it was raining hard and a young woman was waiting at the bus stop with two heavy bags. She waited for twenty minutes and she was very cold.',
  'Then a car stopped and an old neighbour opened the window. "Where are you going?" he said. "I can take you."',
  'In the end, she put her bags on the back seat and they drove home together, laughing about the terrible weather.',
]));
out.push(p('_Marking note (A2 Key Part 7, 15 marks): the story must cover **all three pictures**, be **35+ words**, use the **past simple**, and be understandable. A story with only two pictures loses content marks even if the language is good._', { color: '595959' }));
out.push(stage('✓', 'Unit 8 check'));
out.push(p('**A**  1 b  2 a  3 a  4 c  5 b  6 b  7 a  8 b'));
out.push(p('**B**  1 A · 2 D · 3 C · 4 G · 5 E   (the extra letters are **B** and **F**)'));
out.push(p('_Note: students often choose F for Sunday because they hear "my brother" and think of Homs. Point out that the recording says "I went to my brother\'s house" for a birthday – no travelling._', { color: '595959' }));
out.push(p('**C  Sample message (≈45 words):**'));
out.push(sample(['Hi Dima! Something good happened last month. On the 12th I had an interview at a new school, and a week later they called me – I got the job! I start in November. I was so nervous in the interview, but now I\'m really happy.  Rasha']));
out.push(p('_Scoring guide: A = 8 marks, B = 4 marks (question 4 not counted), C = 5 marks (content 2, organisation 1, language 2). Total 17. 12+ = ready for Unit 9._', { color: '595959' }));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 8 · Answer Key');
