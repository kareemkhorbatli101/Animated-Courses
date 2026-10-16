// Proactive English A2 · Syria Edition · Book 1 · Unit 7 — Answer Key
const L = require('./lib');
const { p, h1, h2, pb, stage, box, dlg, table, C } = L;
const out = [];
const sample = (paras) => box(null, paras, 'FFFFFF', C.navy);
const ck = (rows) => table(['Checklist', '✓ / ✗'], rows, [3, 2]);
const boardT = (rows) => table(['We SAY…', 'We WRITE…'], rows, [1, 1]);

out.push(h1('Answer Key · Unit 7  Free Time & Arrangements'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(p('_Every task has an answer or a full sample answer. Samples show one good A2 answer; learners\' own answers will differ._', { color: '595959' }));

// ===== 7.1 =====
out.push(h2('7.1  I\'m quite good at photography'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I can swim, but not very well.', 'I\'m good at drawing.'], ['I can\'t sing at all!', 'I want to learn about light.'], ['When I was a child I could draw.', 'I\'m not very good at night photos.'], ['Can you drive?', 'I can come on Mondays after six.']]));
out.push(p('**b**  Students\' own answers, e.g. _I can cook very well. I can\'t swim at all. I\'m good at fixing things. I\'m not very good at singing._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (photography)   **b**  1 He could draw quite well.  2 Taking photos of people.'));
out.push(p('**Language box – Practise:**  1 can  2 couldn\'t  3 good at  4 Can … can\'t  5 can\'t'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['A', 'Three clubs this term: photography, cooking and football. Which one for you?'], ['B', 'I\'m not sure. I can cook quite well, so maybe the cooking club isn\'t for me.'], ['A', 'Then come to the football club!'], ['B', 'But I can\'t swim at all – is that a problem?'], ['A', 'It\'s football, not swimming! Are you good at running?'], ['B', 'Well… when I was at school I could run very fast.'], ['A', 'That helps! So, football?'], ['B', 'OK, you win!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: can cook / could run fast at school. Card B: can drive / could sing in the school choir. Typical board-clinic errors: _I can to cook_ → _I can cook_; _good in_ → _good at_.'));
out.push(stage('4', 'Your turn – sample'));
out.push(table(['Find someone who can…', 'Name', 'Extra information'], [
  ['cook a Syrian dish', 'Fadi', 'mansaf – his mother taught him'], ['drive', 'Rasha', 'for 10 years; she drives to her school'],
  ['play an instrument', 'Hiba', 'the oud, quite well; she could play the piano at school'], ['swim', 'Tareq', 'in the sea in Latakia every summer'],
  ['fix a computer or a car', 'Omar', 'computers – it\'s his job'], ['speak a third language', 'Lama', 'a little French from university'],
], [2, 1, 2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Fadi can cook mansaf – his mother taught him. Hiba can play the oud quite well, and when she was at school she could play the piano too. Omar can fix any computer, but he can\'t cook at all!"']));
out.push(stage('5', 'Read'));
out.push(p('1 Only her phone.  2 Photos of buildings and night photos.  3 Because she works until five.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**Name:** Tareq Mansour  **Club:** Football   **Why do you want to join?** I sit in a bank all day and I don\'t do any sport, but I love football. I want to play again and meet people.   **What can you already do?** I\'m quite good at running and I could play well at school. I\'m not very good at playing with my head!   **What do you want to learn?** I want to play in a team again and get fitter.   **When can you come?** Fridays and Sundays after five, because I work until four.']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['can / could + base verb', '✗ – _I could to play_ → _I could play_'], ['good at + -ing', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _At school I could to play well._  →  After: _At school I could play well._'));
out.push(stage('7', 'Write freely – sample (≈75 words)'));
out.push(sample([
  '**AL-YASMIN CLUBS – APPLICATION FORM**',
  '**Name:** Hiba Khalil  **Class:** 4B  **Club:** Cooking',
  '**Why do you want to join?** I can cook three dishes and that\'s all! My mother is a wonderful cook, but she never explains – she says "a little of this". I want to learn properly.',
  '**What can you already do?** I\'m quite good at salads and rice, and I can make good lentil soup. I\'m not very good at meat or at sweets.',
  '**What do you want to learn?** Kibbeh! And I want to learn to cook for a lot of people.',
  '**When can you come?** Wednesdays after four, because my classes finish at three.',
]));
out.push(stage('7P', 'Respond – sample slip (as club leader)'));
out.push(p('★ Welcome – and we start with kibbeh in week three!   ✓ Can you add if you have any food allergies?   ? Have you got an apron and a sharp knife?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most popular club in a typical class: cooking (because everyone wants the recipes!).'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Dear Hiba, Welcome to the cooking club! Our first meeting is on Wednesday 22 October at 4.30 in the centre kitchen. Please bring an apron and a small sharp knife. In the first lesson we make fattoush and we learn how to cut vegetables properly. See you then! Omar (Club leader)']));

// ===== 7.2 =====
out.push(pb());
out.push(h2('7.2  What are you doing on Friday?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I\'m meeting Omar at seven.', 'Thu 6.30 – dentist'], ['Are you free this week?', 'Fri: free! 6.00 film with Maya'], ['I\'m working late on Tuesday.', 'Sat: parents arriving from Latakia'], ['What time does the film start?', 'I\'m booking the tickets tonight.']]));
out.push(p('**b**  Arrangements: _I\'m seeing the dentist at five. · We\'re having lunch with my parents._  Plans in your head: _I want to clean the flat. · Maybe I\'ll read a book._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Friday)   **b**  1 She\'s going to the photography club (and taking her sister).  2 Her parents, from Latakia.'));
out.push(p('**Language box – Practise:**  1 I\'m meeting my manager at ten.  2 She isn\'t coming tonight.  3 What are you doing tomorrow?  4 We\'re having dinner with Ziad on Friday.  5 They\'re arriving on Saturday.'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [['A', 'Are you free this week? I want to go to the book fair.'], ['B', 'Let me look at my diary… I\'m working late on Monday.'], ['A', 'What about Tuesday?'], ['B', 'On Tuesday I\'m seeing the dentist at half past six. Sorry!'], ['A', 'Hmm. Thursday?'], ['B', 'On Thursday I\'m going to the cooking club from six to eight. But Wednesday is free!'], ['A', 'Wednesday at five, then!']]));
out.push(stage('3R', 'Perform'));
out.push(p('With Diary A and Diary B the only possible days are **Wednesday** (A free, B free in the evening before her mother arrives) or **Thursday evening after 8** — accept any day the pair can justify from both diaries.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"I\'m working late on Monday and Tuesday. On Wednesday I\'m taking my son to the doctor at five. Thursday is our English class. I\'m free on Sunday evening – shall we study then?"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Tareq is very busy this week. He\'s working late on Monday and Tuesday, and on Wednesday he\'s taking his son to the doctor. We\'re meeting on Thursday after class to study for the test."']));
out.push(stage('5', 'Read'));
out.push(p('1 Because of the end-of-month accounts.  2 Jana\'s birthday at her brother Ziad\'s house (she\'s three).  3 She\'s booking two tickets for six o\'clock.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Hi Rasha! Here\'s my week. I\'m working late on Sunday and Monday because we have a big delivery. On Tuesday I\'m taking my mother to the hospital for a check-up. Thursday is my English class as usual. So Wednesday is perfect for coffee. I\'m booking a table at the café near the centre tonight. See you on Wednesday!']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals (days) and full stops', '✗ – _on wednesday_ → _on Wednesday_'], ['am / is / are + -ing', '✓'], ['A time word in each sentence', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _On tuesday I take my mother to the hospital._  →  After: _On Tuesday I\'m taking my mother to the hospital._'));
out.push(stage('7', 'Write freely – sample (≈80 words)'));
out.push(sample([
  'Hi Aunt Samira,',
  'Thank you for your message! Here\'s my week. I\'m working until six on Sunday and Monday because we\'re preparing the end-of-month accounts. On Tuesday evening I\'m going to the gym with Maya, and on Wednesday my brother and his family are coming for dinner – Jana is three now and she talks all the time!',
  'Thursday is my English class as usual, and on Friday I\'m not doing anything at all.',
  'So, are you free on Friday afternoon? I\'m making maamoul and I need a teacher!',
  'Love, Lina',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Your week is so busy – and maamoul on Friday!   ✓ Can you add what time on Friday?   ? Is Jana walking and talking now?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Hardest day in a typical class: a day with work until six, then class, then family visitors.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Dear Lina, What a week! Mine is quieter: I\'m working on Sunday and Monday, and on Tuesday I\'m visiting your mother. Friday afternoon is perfect for me – I\'m coming at three with my old recipe book. We\'ll make maamoul together and you\'ll never buy it again! Love, Samira']));

// ===== 7.3 =====
out.push(pb());
out.push(h2('7.3  I\'d love to, but…'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I\'d love to, but I\'m working.', 'Thank you so much for the invitation…'], ['I\'m afraid I can\'t come.', 'I was looking forward to…'], ['That\'s a shame.', 'I hope the day is beautiful.'], ['Maybe next time.', 'With best wishes,']]));
out.push(p('**b**  Good: _"I\'d love to, but I can\'t." · "I\'m really sorry – I\'m away that weekend."_   Bad: _"No." · "I\'m busy." · "Maybe."_ (These sound cold and the person doesn\'t know if you\'re coming.)'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a wedding)   **b**  1 His brother is arriving from Dubai that weekend.  2 To take the photos at the engagement party.'));
out.push(p('**Language box – Practise (sample answers):**  1 Thank you so much! I\'d love to, but I\'m afraid I can\'t – I\'m travelling that weekend.  2 I\'d love to, but I\'m afraid I can\'t. I have my English class on Thursday.  3 I\'m really sorry, I can\'t play on Friday because my knee hurts.  4 Thank you for inviting me! I\'m afraid I can\'t – I\'m working on Saturday.'));
out.push(stage('3', 'Practise – sample'));
out.push(dlg(null, [['A', 'My sister\'s graduation party is on Saturday. Would you like to come?'], ['B', 'Oh, thank you so much! I\'d love to, but I\'m afraid I can\'t. I\'m working on Saturday until eight.'], ['A', 'Oh, that\'s a shame.'], ['B', 'I\'m really sorry. I was looking forward to meeting your family.'], ['A', 'Don\'t worry. Maybe next time.'], ['B', 'Listen, can I bring a cake on Sunday instead?'], ['A', 'That\'s very kind of you!']]));
out.push(stage('3R', 'Perform'));
out.push(p('All four steps must appear: thank · say no · reason · keep the friendship (an offer, good wishes, or "maybe next time").'));
out.push(stage('4', 'Your turn – sample refusals'));
out.push(sample(['"Thank you so much for inviting me! I\'d love to come, but I\'m afraid I can\'t – my parents are arriving that day. I hope you all have a wonderful time."', '"That\'s very kind of you! I\'m really sorry, but I can\'t: I\'m working every evening this week. Can we do something next weekend instead?"']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"I invited six people to my barbecue. Hiba and Fadi are coming. Tareq can\'t come because he\'s visiting his parents in Suwayda, and Rasha is working. Everybody was very polite – nobody just said no!"']));
out.push(stage('5', 'Read'));
out.push(p('1 On the 24th.  2 That the day is beautiful and that everyone dances until the morning.  3 To take the photos at the engagement party next month.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Dear Nour,   Thank you very much for inviting me to your son\'s graduation party on the 12th. It was very kind of you to think of me.   I\'m really sorry, but I\'m afraid I can\'t come. I\'m travelling to Aleppo that weekend for a family wedding. I was looking forward to celebrating with you all.   I hope the party is wonderful. Please tell Yazan that I\'m very proud of him.   If it\'s useful, I\'d be happy to help with the food the day before.   With best wishes,   Rasha']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['All four steps', '✗ – no good wishes for the day'], ['A reason (arrangement or because)', '✓'], ['Good wishes + offer / next time', '✗ → add "I hope the party is wonderful."']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I can\'t come. Sorry._  →  After: _I\'m really sorry, but I\'m afraid I can\'t come – I\'m travelling that weekend._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  'Dear Mr Khaled,',
  'Thank you very much for inviting me to the company dinner on Thursday the 30th. It\'s always the best evening of the year.',
  'I\'m really sorry, but I\'m afraid I can\'t come this time. My wife is having a small operation that week and I\'m staying at home with the children. I was looking forward to seeing everyone, especially the new team from Aleppo.',
  'I hope you all have a wonderful evening. Please give my best wishes to the team.',
  'If it helps, I\'d be happy to prepare the photos from last year for the screen.',
  'With best wishes,',
  'Tareq Mansour',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ What a kind letter – and a very good offer!   ✓ Can you add your phone number?   ? Can you come to the lunch in December instead?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Class decision: yes – the writer is still a good friend, because the letter thanks, explains, wishes well **and** offers something.'));
out.push(stage('HW', 'Homework – sample reply'));
out.push(sample(['Dear Tareq, Thank you for your letter – of course, family first. We\'ll miss you, and the photos idea is excellent: please send them by Wednesday. I hope everything goes well for your wife. We\'re planning a lunch in December, and that one you cannot miss! Best regards, Khaled']));

// ===== 7.4 =====
out.push(pb());
out.push(h2('7.4  Can we make it seven?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['Can we make it seven?', 'See you at 7 outside the cinema.'], ['Where shall we meet?', 'Row G, seats 11 and 12'], ['I\'ll be fifteen minutes late.', 'Please don\'t wait outside.'], ['No problem at all!', 'Take your time.']]));
out.push(p('**b**  **on** Friday · **at** half past six · **in** the morning · **at** the weekend · **on** 24 October · **at** night'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Maya)   **b**  1 Half past eight (the late film); they meet at a quarter past eight.  2 Outside the cinema, next to the ticket office, on the first floor.'));
out.push(p('**Language box – Practise:**  1 at  2 in  3 on  4 outside  5 at'));
out.push(stage('3', 'Practise – sample with card A'));
out.push(dlg(null, [['B', 'I\'m really sorry – can we change dinner to Friday?'], ['A', 'Oh! Is everything OK?'], ['B', 'Yes, but my meeting finishes at half past seven on Thursday.'], ['A', 'No problem. Can you be there at eight on Friday?'], ['B', 'Let\'s say half past eight, to be safe.'], ['A', 'OK. Where shall we meet?'], ['B', 'How about outside the restaurant, next to the bakery?'], ['A', 'Perfect. See you on Friday!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: Thursday 7 pm → Friday 8 or 8.30, outside the restaurant. Card B: Saturday 10 am at the library → Saturday afternoon or Sunday, at a café.'));
out.push(stage('4', 'Your turn – sample'));
out.push(dlg(null, [['Hiba', 'Shall we study on Sunday? How about ten o\'clock at the library?'], ['Fadi', 'Perfect. Outside the main door?'], ['Hiba', '(later) Fadi, I\'m sorry – the library opens at eleven on Sundays. Can we make it eleven?'], ['Fadi', 'No problem. Or how about the café next to the centre? It opens at nine.'], ['Hiba', 'Even better. Eleven at the café, then – I\'ll get a table near the window.']]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Hiba and I are meeting on Sunday to study. First we said ten o\'clock at the library, but the library opens at eleven on Sundays, so we changed it. Now we\'re meeting at eleven in the café next to the centre."']));
out.push(stage('5', 'Read'));
out.push(p('1 Outside the cinema, next to the ticket office, on the first floor.  2 A delivery arrived late at the pharmacy.  3 Missing the beginning – the film starts with adverts.'));
out.push(stage('6', 'Write with help – samples'));
out.push(sample(['**1 Confirming:** Hi Fadi! Just confirming Sunday: the café opens at nine, so let\'s meet at eleven at the table near the window. Bring your notes from Unit 6.']));
out.push(sample(['**2 Late:** Fadi, I\'m so sorry – my bus hasn\'t come. I\'m leaving in five minutes, so I\'ll be about twenty minutes late. Please order a coffee and start without me!']));
out.push(sample(['**3 Answer:** No problem! I\'m at the table near the window with two coffees. Take your time – I\'m reading the exercises. 🙂']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['at / in / on correct', '✗ – _in Sunday_ → _on Sunday_'], ['The place is exact', '✓'], ['Says how many minutes + what to do', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _See you in Sunday at the café._  →  After: _See you on Sunday at the café, at the table near the window._'));
out.push(stage('7', 'Write freely – sample (≈75 words total)'));
out.push(sample([
  '**1** Hi Maya! Just confirming tomorrow: the exhibition opens at ten, so let\'s meet at a quarter to ten outside Dar Al-Fann, next to the blue door on Straight Street. It\'s free, so we don\'t need tickets. 🎨',
  '**2** Maya, I\'m so sorry – my taxi is in terrible traffic near the Citadel. I\'ll be about fifteen minutes late. Please don\'t wait outside in the sun; go in and start with the first room.',
  '**3** No problem at all! I\'m inside, in the second room on the left. The photos of the old souq are beautiful – take your time, I\'m not going anywhere. ☕',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ Very clear and kind!   ✓ Can you add your phone number in the first message?   ? How will I know which room you\'re in?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The kindest answer gives a **reason not to worry** ("the film starts with adverts", "take your time, I\'m reading").'));
out.push(stage('HW', 'Homework – sample fourth message'));
out.push(sample(['Good morning! Thank you for yesterday – I really enjoyed the exhibition, and the photos of the old souq were my favourite too. Let\'s do it again: the Sunday cinema at Dar Al-Fann is at six and the films are old Egyptian ones. Are you free this Sunday?']));

// ===== 7.5 =====
out.push(pb());
out.push(h2('7.5  I prefer the cinema to TV'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['I prefer coffee to tea.', 'Most students prefer the café.'], ['I\'d rather walk.', 'I prefer sitting outside.'], ['I\'d rather not eat here.', 'I prefer eating a little of many things.'], ['Which do you prefer?', 'For me, six o\'clock is the middle of the night!']]));
out.push(p('**b**  Students\' own answers.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (where to go after the film)   **b**  1 Small places, sitting outside, walking, and mezze.  2 To walk to the café with the garden in Bab Touma and eat mezze.'));
out.push(p('**Language box – Practise:**  1 I prefer the sea **to** the mountains.  2 I\'d rather **stay** at home.  3 She prefers **reading to watching** TV.  4 I\'d rather **not go** out tonight.  5 Do you prefer tea **or coffee**?'));
out.push(stage('3', 'Practise – sample (a free Friday)'));
out.push(dlg(null, [['A', 'Shall we go to the shopping centre on Friday?'], ['B', 'Honestly, I\'d rather not spend the day inside. I prefer the Old City to the centre.'], ['A', 'Me too, actually. What about the Old City in the morning?'], ['B', 'Yes! I prefer going early.'], ['A', 'Do you prefer walking or taking a taxi?'], ['B', 'I\'d rather walk – it\'s only twenty minutes.'], ['A', 'Perfect. And a picnic or a restaurant?'], ['B', 'A picnic, definitely. Let\'s go!']]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners should tick all six phrases if the pair disagrees once and uses _I\'d rather_ twice.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"Fadi prefers tea to coffee because coffee keeps him awake. He prefers the village to the city – his family is from a village near Hama. He\'d rather read than watch television, and he prefers cooking at home to eating out because restaurants are expensive. But we\'re the same about the weather: we both prefer winter to summer."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"Fadi and I are the same about food – we both prefer eating at home to eating out. But he prefers winter to summer because he hates the heat, and I\'d rather have forty degrees than cold hands!"']));
out.push(stage('5', 'Read'));
out.push(p('1 After midnight.  2 Getting up at six and studying on her balcony.  3 Are you a morning person or a night person? And how do you wake up?'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['**City or village?**   I\'m definitely a city person. I prefer living in Damascus to living in a village, and I like the noise, the shops and the cafés.   But my work is hard! I start at eight and the traffic is terrible, so I\'d rather live near my office one day.   My father is the opposite. He prefers the village. He says the air is clean and everybody knows everybody. For me, that\'s the problem – everybody knows everybody!   So: city or village? And where do you want to live when you\'re sixty?']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals and full stops', '✓'], ['prefer A **to** B; prefer + -ing', '✗ – _prefer the city than the village_ → _…to the village_'], ['I\'d rather + base verb', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I prefer the city than the village._  →  After: _I prefer the city to the village._'));
out.push(stage('7', 'Write freely – sample (≈90 words)'));
out.push(sample([
  '**Big parties or quiet evenings?**',
  'I\'m a quiet-evening person. I prefer sitting with two or three friends to going to a big party, and I\'d rather talk than dance.',
  'But I\'m Syrian and my family is enormous! Every month there\'s a wedding or an engagement, and nobody understands when I say I\'m tired. "You\'re twenty-eight," my aunt says. "You can sleep when you\'re fifty."',
  'My sister is the opposite. She prefers a room with a hundred people, and she\'s always the last to leave. She says I\'m "a grandmother in a young body".',
  'So: big parties or quiet evenings? And what do you say to an aunt who doesn\'t accept "no"?',
]));
out.push(stage('7P', 'Respond – sample comment'));
out.push(p('★ "A grandmother in a young body" made me laugh!   ✓ Can you add how many weddings you went to this year?   ? My answer: I prefer quiet evenings too – and I tell my aunt I have an exam. Always.'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Typical class result: more night people than morning people, but more quiet-evening people than party people.'));
out.push(stage('HW', 'Homework – sample comment'));
out.push(sample(['I\'m completely the opposite! I prefer big family parties to quiet evenings because I live alone and the flat is too silent. But I agree about dancing – I\'d rather carry the plates than dance in front of everyone. Next wedding, we can sit together in the kitchen!']));

// ===== 7.6 =====
out.push(pb());
out.push(h2('7.6  What\'s on this week?'));
out.push(stage('1', 'Get ready'));
out.push(boardT([['There\'s a concert on Thursday.', 'Doors open at 7. Starts at 7.30.'], ['What time does it finish?', 'Tickets: 30,000 · Students 15,000'], ['Do I need to book?', 'Every day until 30 October'], ['Is anything else on?', 'Closed on Fridays']]));
out.push(p('**b**  the first of May · the third of June · the twelfth of October · the twenty-first of December · the twenty-fourth of April'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a concert)   **b**  1 At half past seven (the doors open at seven).  2 Fifteen thousand.'));
out.push(p('**Language box – Practise:**  1 starts  2 doesn\'t open  3 does … finish  4 lasts  5 open'));
out.push(stage('3', 'Practise – sample with event card A'));
out.push(dlg(null, [['B', 'Al-Jaish Stadium, good morning.'], ['A', 'Good morning. I\'d like to ask about the match on Friday. What time does it start?'], ['B', 'The gates open at three and the match starts at four.'], ['A', 'How long does it last?'], ['B', 'About ninety minutes with a break.'], ['A', 'And how much are the tickets?'], ['B', 'Twenty-five thousand, and ten thousand for children.'], ['A', 'Do I need to book?'], ['B', 'No, you can buy them at the gate.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Card A: Friday 24th, 4 pm, 25,000 (children 10,000). Card B: every day 10–8 until the 31st, free, talks at 5 pm on Saturdays.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"There\'s a book fair at the fairground. It opens at ten every day and it finishes on the thirty-first. It\'s free, and on Saturdays there are talks by writers at five. Shall we go on Saturday? Let\'s meet at four outside the main gate."']));
out.push(stage('4R', 'Report – sample'));
out.push(sample(['"There\'s a book fair until the 31st. It opens at ten and it\'s free. On Saturdays there are talks at five. Hiba and I are going on Saturday – we\'re meeting at four outside the main gate."']));
out.push(stage('5', 'Read'));
out.push(p('1 About 90 minutes, with a break.  2 The photography exhibition.  3 On Fridays.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample([
  '**AL-YASMIN LANGUAGE CENTRE · WHAT\'S ON IN NOVEMBER**',
  '**🎬 ENGLISH FILM NIGHT** – Thursday 6 November · Doors open 6.30 pm · Starts 7.00 pm · 100 minutes · FREE for students · Popcorn 5,000!',
  '**🍲 COOKING CLUB OPEN DAY** – Saturday 15 November · 4.00 pm – 7.00 pm · 20,000 (you eat what we cook!) · Please book at reception – only 20 places.',
  '**📷 PHOTO EXHIBITION "Our Class"** – Every day 17–28 November · 9 am – 8 pm · FREE.',
  'Al-Yasmin Centre, Al-Jalaa Street, Mezzeh · 011 445 6677 · We are closed on Fridays.',
]));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Capitals (days, months) and full stops', '✓'], ['Present simple for times', '✗ – _the film is starting at seven_ → _the film starts at seven_'], ['Dates written correctly', '✓'], ['All parts', '✓']]));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _The film is starting at seven._  →  After: _The film starts at seven._'));
out.push(stage('7', 'Write freely – sample (≈85 words)'));
out.push(sample([
  '**JARAMANA SPORTS CLUB · WHAT\'S ON THIS MONTH**',
  '**⚽ FOOTBALL FOR BEGINNERS** – Every Sunday and Wednesday · 6.00 pm – 7.30 pm · 15,000 a month · Men and boys over 14 · Bring sports shoes.',
  '**🏊 WOMEN\'S SWIMMING** – Every Wednesday · 6.00 pm – 8.00 pm · 20,000 · The pool is closed to everybody else at this time.',
  '**🏃 FAMILY RUN** – Friday 31 October · Starts at 8.00 am at the main gate · 5 kilometres · FREE · Children run 1 kilometre at 9.00.',
  'Jaramana Sports Club, Al-Zahra Street · 011 772 3344 · Office open 9 am – 9 pm, closed Friday afternoon.',
]));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ I want to go to the family run!   ✓ Can you add if we need to book for the run?   ? Is there a women\'s football class too?'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Most popular event in a typical class: a free outdoor event at the weekend.'));
out.push(stage('HW', 'Homework – sample message'));
out.push(sample(['Hi Rasha! There\'s a family run at the Jaramana Sports Club on Friday the 31st. It starts at eight in the morning at the main gate and it\'s five kilometres – and it\'s free! The children run one kilometre at nine. Would you like to come with your two? I\'m going with my sister. Hiba']));

// ===== 7.7 =====
out.push(pb());
out.push(h2('7.7  Review & Mediate: Let\'s plan Saturday'));
out.push(stage('1', 'Get ready – quiz'));
out.push(p('1 I can swim.  2 She\'s good at cooking.  3 What are you doing on Friday?  4 I prefer tea to coffee.  5 I\'d rather stay home. (or _stay at home_)  6 The film starts at eight every day.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**b**  The Citadel tour at ten, lunch at Beit Al-Yasmin at half past twelve, then the exhibition at Dar Al-Fann at two. They meet at the Citadel gate at a quarter to ten.'));
out.push(stage('3', 'Practise – sample (visitor b: two students with very little money)'));
out.push(dlg(null, [['A', 'Shall we do the Citadel tour?'], ['B', 'I\'d rather not – it\'s forty thousand, and they\'ve got very little money.'], ['C', 'Students pay twenty, but that\'s still a lot. How about Tishreen Park in the morning? It\'s free.'], ['A', 'Good idea. And the exhibition at Dar Al-Fann is free too.'], ['B', 'Agreed. But Dar Al-Fann is closed on Fridays, so let\'s go on Saturday.'], ['C', 'Lunch? A restaurant is expensive…'], ['A', 'Let\'s take food to the park. Then the exhibition at three.'], ['B', 'So: the park at ten with a picnic, then the exhibition at three. We\'re meeting at the main gate at a quarter to ten.']]));
out.push(stage('3R', 'Perform'));
out.push(p('Good plans: **family with small children** – park (playground, boats, café), avoid the two-hour tour with stairs. **Students with little money** – park and exhibition (both free), picnic. **Older couple** – exhibition and Sunday cinema, avoid the Citadel stairs; park café is fine.'));
out.push(stage('4', 'Your turn – sample'));
out.push(sample(['"In the morning we\'re visiting the citadel because the light is good early and it isn\'t hot. Then we\'re having lunch at my uncle\'s restaurant – the kebab is the best in the city. The museum is closed on Tuesdays, so in the afternoon we\'re going to the souq instead. In the evening we\'re drinking tea in a café near the clock."']));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(['"Fadi planned my day in Aleppo. In the morning we\'re visiting the citadel because the light is good early. Then we\'re having lunch at his uncle\'s restaurant – he says the kebab is the best in the city. The museum is closed on Tuesdays, so we\'re going to the souq instead."']));
out.push(stage('5', 'Read – A2 Key Reading Part 2'));
out.push(p('1 C (Kareem – free in the evenings, loves old films, lives near Bab Sharqi)  2 B (Rasha – children, outside, food and toilet)  3 A (Nabil – his knee; a lot of walking and stairs)  4 A (Nabil – loves old photographs, free, small place)  5 A (Nabil – he\'s only free on Fridays and Dar Al-Fann is closed on Fridays)'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(['Dear Mr Lang,   We\'re all free on Saturday! Here\'s the plan. The Citadel tour starts at ten, so let\'s meet at a quarter to ten at the Citadel gate. The tour lasts two hours and it costs forty thousand. After that, we\'re having lunch at Beit Al-Yasmin at half past twelve. In the afternoon we\'re going to the photography exhibition at Dar Al-Fann – it\'s free and it\'s very near. Please wear comfortable shoes because there are a lot of stairs in the Citadel.   See you on Saturday!   Lina']));
out.push(stage('6P', 'Check together – sample'));
out.push(ck([['Present simple for the programme', '✓'], ['Present continuous for arrangements', '✗ – _we have lunch_ → _we\'re having lunch_'], ['Time, meeting place and price', '✓'], ['One piece of advice', '✓']]));
out.push(stage('7', 'Write freely – A2 Key Writing Part 6 sample (≈50 words)'));
out.push(sample(['Hi Kate,', 'There\'s a photography exhibition at Dar Al-Fann and it\'s free. It opens at ten, so let\'s meet at a quarter to ten outside the blue door on Straight Street. After the exhibition, which do you prefer – lunch in the Old City or a walk in the souq?', 'See you on Saturday!', 'Lama']));
out.push(p('_Marking note: all three content points (what and when it starts, where to meet, a question about what she prefers) must be present for full content marks._', { color: '595959' }));
out.push(stage('✓', 'Unit 7 check'));
out.push(p('**A**  1 b  2 b  3 c  4 a  5 b  6 b  7 c  8 a'));
out.push(p('**B**  1 Thursday  2 7.30 (half past seven)  3 15,000  4 30th  5 Friday(s)'));
out.push(p('**C  Sample message (≈45 words):**'));
out.push(sample(['Hi Fadi! There\'s an oud concert at Dar Al-Fann on Thursday the 23rd. It starts at half past seven and students pay only fifteen thousand. Shall we meet outside the centre at seven? Do you prefer going early for a coffee first, or arriving just before it starts?  Hiba']));
out.push(p('_Scoring guide: A = 8 marks, B = 5 marks, C = 5 marks (content 2, organisation 1, language 2). Total 18. 13+ = ready for Unit 8._', { color: '595959' }));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 7 · Answer Key');
