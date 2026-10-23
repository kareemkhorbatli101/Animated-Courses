// Proactive Business English A2 · Syria Edition · Book 1 · Unit 2 — Answer Key (separate book)
const L = require('./lib');
const { p, h1, h2, h3, pb, sp, stage, box, dlg, table, C } = L;
const out = [];
const sample = (title, paras) => box(title, paras, 'FFFFFF', C.navy);
const note = t => p(`_${t}_`, { color: '595959' });

out.push(h1('Answer Key · Unit 2  The Working Day'));
out.push(p('_Proactive Business English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('How to use this key', [
  'Every task has an answer. Where the task is open (brainstorm, personalised speaking, reports, free writing, peer feedback, homework), the key gives a **full sample answer**. Samples show one good A2 answer – learners\' own answers will be different and that is correct.',
  'Stage codes match the Student\'s Book: 1 Get ready · 2 Listen and read · 3 Practise · 3R Perform · 4 Your turn · 4R Report · 5 Read · 6 Write with help · 6P Check together · 6R Share · 7 Write freely · 7P Respond · 7R Share · HW Homework.',
], C.grey, C.navy));

// ===================== 2.1 =====================
out.push(h2('2.1  I start at eight'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample order** (answers will differ – accept any order the learner can justify)'));
out.push(table(['Order', 'At work'], [
  ['1', 'I start work.'], ['2', 'I check my email.'], ['3', 'I make my to-do list.'],
  ['4', 'I have a break.'], ['5', 'I finish work.'],
], [1, 4]));
out.push(p('**b**  Open. Any two sentences, in the negative. Sample: _I don\'t drive to work — I come by service. I don\'t work in an office; I work in a shop._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (4.00)   **b**  1 She checks the email and makes a to-do list.  2 Her children finish school at half past three.'));
out.push(p('**Language box – Practise:**  1 starts  2 doesn\'t stay  3 opens  4 make  5 doesn\'t work'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'What time do you start?'],
  ['B', 'I start at half past seven. I\'m here before everybody.'],
  ['A', 'And what do you do first?'],
  ['B', 'First I open the big door, then I check the night delivery.'],
  ['A', 'What time do you finish?'],
  ['B', 'At half past four. I don\'t use email after that — I don\'t use email at all.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two times (7.30 and 4.30 for role card 1; 8.00 and 5.00 for role card 2). Typical errors for the board clinic: _He start at seven_ → _He start**s**_; _He doesn\'t works_ → _He doesn\'t **work**_; _I finish in four_ → _I finish **at** four_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'What time do you start?'],
  ['B', 'At nine. The shop opens at nine.'],
  ['A', 'What do you do first?'],
  ['B', 'I count the money in the till. Then I clean the counter.'],
  ['A', 'And what time do you finish?'],
  ['B', 'At eight in the evening. It\'s a long day, but I have two hours at lunch.'],
]));
out.push(table(['Name', 'Starts', 'First job of the day', 'Finishes'], [
  ['Rasha Hamdan', '9.00', 'counts the money in the till', '8.00 pm'],
  ['Fadi Saeed', '6.00', 'loads the lorry', '5.00'],
  ['Samir Khalil', '8.00', 'reads the night messages', '4.00'],
], [1, 1, 2, 1]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi Saeed starts at six. First he loads the lorry. He finishes at five and he doesn\'t work on Friday."', 'Earliest start in the sample: 6.00 (Fadi). Listener question: _Is that every day?_ – _No, not on Friday._']));
out.push(stage('5', 'Read'));
out.push(p('1 Sunday to Thursday.  2 She checks the email and makes a to-do list.  3 She doesn\'t work at the trade counter (or: she doesn\'t work on Fridays).'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**MY WORKING DAY** — Fadi Saeed, driver. I work Sunday to Thursday. I start at six o\'clock and I finish at five. First I load the lorry. Then I drive to the first customer. After the break I write the delivery notes. I don\'t work in the office.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days and hours are both there', '✓'],
  ['Order words', '✗ – no _after that_; only _first_ and _then_'],
  ['One sentence with _don\'t_', '✓'],
  ['No **-s** after _don\'t_', '✗ – _I don\'t works in the office_ → _work_'],
], [3, 2]));
out.push(p('Sample feedback: "Your day is very clear. Check _don\'t works_. Can you add what you do after the break?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I don\'t works in the office._  →  After: _I don\'t work in the office._ (no **-s** after _don\'t_)'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Abu Yasser works in the warehouse. He starts at half past seven, before the office opens. First he opens the big door, then he walks the shelves and checks the night delivery. He writes the numbers in a book, not only on the computer. He finishes at half past four. He doesn\'t use email.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like the detail about the book and the computer._   ✓ _Can you add a time for the break?_   ? _Who opens the door when he is away?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sample finding: _Fadi starts at six — that is two hours earlier than me._'));
out.push(stage('HW', 'Homework – sample (≈35 words)'));
out.push(sample(null, ['My uncle is a baker in Mezzeh. He starts at four in the morning and he finishes at one. He makes the bread and he serves the first customers. He doesn\'t work in the afternoon and he doesn\'t take a day off in Ramadan.']));

// ===================== 2.2 =====================
out.push(pb());
out.push(h2('2.2  What time do you open?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open at 8.00 am: the **warehouse** only (it opens at 7.30). Closed at 4.15 pm: the **office** (closes 4.00) and the **trade counter** (closes 4.00); the warehouse is still open until 4.30.'));
out.push(p('**b**  8.00 _eight o\'clock_ · 8.15 _quarter past eight_ · 8.30 _half past eight_ · 8.45 _quarter to nine_ · 12.00 _twelve o\'clock / noon_ · 2.00 pm _two o\'clock in the afternoon_'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (a customer – Mr Tarabishi)   **b**  1 At two.  2 On Tuesday, in the morning, at about ten.'));
out.push(p('**Language box – Practise:**  1 at  2 on  3 in  4 at … on  5 on'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Good morning. What time do you open?'],
  ['B', 'We open at nine.'],
  ['A', 'And what time do you close?'],
  ['B', 'At two — but on Friday and Saturday we\'re closed all day.'],
  ['A', 'Then I come on Monday, in the morning.'],
  ['B', 'Monday in the morning. But not between eleven and twelve — it\'s very busy. See you then.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the opening time, the closing time and the day of the visit. Typical errors: _What time you open?_ → _What time **do** you open?_; _We open in 9.00_ → _**at** 9.00_; _on the morning_ → _**in** the morning_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'What time does the pharmacy near you open?'],
  ['B', 'At eight in the morning, and it closes at eleven at night.'],
  ['A', 'Is it open on Friday?'],
  ['B', 'Yes, but it opens late — at two in the afternoon.'],
]));
out.push(table(['Place', 'Opens', 'Closes', 'Closed on'], [
  ['The pharmacy in Mezzeh', '8.00', '11.00 pm', '– (Friday opens 2.00 pm)'],
  ['The post office', '8.00', '2.00', 'Friday, Saturday'],
  ['The bakery', '5.00', '9.00 pm', '–'],
], [1.6, 1, 1, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"The pharmacy opens at eight and closes at eleven at night. It\'s never closed, but on Friday it opens at two."', 'Open the longest in the sample: the pharmacy (15 hours). Listener question: _When is it busiest?_']));
out.push(stage('5', 'Read'));
out.push(p('1 The warehouse (7.30 am).  2 Thursday (the counter closes at 2.00 pm).  3 Telephone extension 201 one day before.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**HAMDAN PRINTING — OPENING HOURS.**  Workshop   Sunday – Thursday   8.00 am – 6.00 pm.  Front office   Sunday – Thursday   9.00 am – 4.00 pm.  Closed on Friday and Saturday. For a job outside these hours, please telephone 0988 450 176 two days before.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['Days **and** hours for every place', '✓'],
  ['A line that says when it is closed', '✓'],
  ['A line that says who to call', '✗ – a number, but no name'],
  ['_am_ / _pm_ used the same way all through', '✗ – _8.00_ then _18.00_ in the same notice'],
], [3, 2]));
out.push(p('Sample feedback: "The hours are very clear. Can you add a name next to the number? And choose am/pm **or** the 24-hour clock, not both."'));
out.push(stage('6R', 'Share – sample question from the class'));
out.push(p('_What happens if I come at five? Is anybody there?_ — a good question, because the notice does not say.'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Dear Mr Tarabishi, Thank you for your message. I\'m sorry, but the trade counter closes at two on Thursday, so Thursday afternoon is not possible. Can you come on Wednesday at eleven, or on Thursday morning at nine? Both are quiet times. Please tell me which one is better for you. Nour Mansour, Sham Trading']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I like the two times — I can choose._   ✓ _Can you add the address of the counter?_   ? _Is there parking in the morning?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('A message with a **choice** of two times is better because the customer can answer with one word, and nobody has to write again.'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['The bakery under my building opens at five in the morning. It closes at nine in the evening. It is never closed, but on Friday morning there is only bread, no sweets.']));

// ===================== 2.3 =====================
out.push(pb());
out.push(h2('2.3  How often do you count the stock?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  0% **never** · **sometimes** · **often** · **usually** · 100% **always**'));
out.push(p('**b**  Open. Sample: _I always check my email before ten — yes, that\'s true for me. I sometimes work on Friday, when the month ends. I never take work home._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (in the warehouse)   **b**  1 Twice a month — the last Thursday and the fifteenth.  2 He walks the shelves and checks the fast lines before the door opens.'));
out.push(p('**Language box – Practise:**  1 I **always** check my email at nine.  2 She is **never** late.  3 We count the stock **twice a month**.  4 Bassel **sometimes** works in the office.  5 The lorry is **usually** on time.'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'How often do you check the bank?'],
  ['B', 'I check it twice a day. Usually at nine and at two.'],
  ['A', 'Twice a day? That\'s a lot.'],
  ['B', 'It is, but I never work at the weekend. And you?'],
  ['A', 'I check the stock every other day — about three times a week.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the two frequency expressions. Typical errors: _I check always_ → _I **always** check_; _two times a month_ → _**twice** a month_ (both are understood, but _twice_ is the natural one); _every two weeks_ / _every other week_ — both correct.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'How often do you write a report?'],
  ['B', 'Once a month, at the end. I hardly ever write one in the middle of the month.'],
  ['A', 'And how often do you work late?'],
  ['B', 'Two or three times a year — only when the inventory is wrong.'],
]));
out.push(table(['Name', 'Does it often', 'Hardly ever does it'], [
  ['Rasha', 'checks email (every hour)', 'takes a day off'],
  ['Fadi', 'meets customers (every day)', 'writes a report'],
  ['Samir', 'counts stock (twice a week)', 'works late'],
], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Fadi always meets customers — every day. But he hardly ever writes a report."', 'Most common daily activity in the sample: checking email.']));
out.push(stage('5', 'Read'));
out.push(p('1 Twice a month — on the fifteenth and on the last Thursday.  2 The fast lines: boxes, tape and plastic wrap.  3 Tell Abu Yasser the same day.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**THE TILL ROUTINE** — please read and keep. We count the till twice a day. I always count it before the shop opens. I check the small notes every afternoon. If the till and the paper are different, tell me the same hour. We never take money out without writing it down.']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['At least two frequency expressions', '✓ – _twice a day_, _every afternoon_'],
  ['_always_ / _never_ in the right place', '✗ – _I count always it_ → _I **always** count it_'],
  ['One rule with _never_', '✓'],
  ['Clear who does what', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The rule with _never_ is strong and clear. Move _always_ in front of the verb: _I always count it_."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I count always it before the shop opens._  →  After: _I always count it before the shop opens._ (adverb before the main verb)'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['My week is always the same. I always start at eight and I usually finish at four. I check the email twice a day, in the morning and after the break. I often go to the warehouse, about three times a week. I hardly ever work on Thursday afternoon, and I never work at the weekend.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _Six frequency words — well done._   ✓ _Can you add how often you see customers?_   ? _Why is Thursday afternoon quiet?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sample: _We both check the email twice a day and we both never work at the weekend._'));
out.push(stage('HW', 'Homework – sample (≈30 words)'));
out.push(sample(null, ['The rubbish lorry comes every other day. The water is usually on, but it sometimes stops in August. The electricity goes off twice a day. The post hardly ever comes. The bread van comes every morning at seven.']));

// ===================== 2.4 =====================
out.push(pb());
out.push(h2('2.4  I\'m working on the Homs order'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  Open. Sample: _Somebody is writing. Two people are talking. Nobody is sleeping._'));
out.push(p('**b**  Now: **2** and **4**.  Every day / in general: **1** and **3**.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  A (he wants the Homs order)   **b**  1 She\'s working on the Homs order.  2 She\'s doing the month-end, in the small room.'));
out.push(p('**Language box – Practise:**  1 is working  2 starts  3 is counting  4 doesn\'t work  5 are loading'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Are you busy?'],
  ['B', 'A little. I\'m checking the invoices.'],
  ['A', 'Is Nadia in?'],
  ['B', 'She\'s here, but she isn\'t at her desk. She\'s doing the month-end in the small room.'],
  ['A', 'And Bassel?'],
  ['B', 'He\'s driving to Aleppo. The warehouse are checking a delivery now.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write what two of the people are doing now. Typical errors: _She working_ → _She **is** working_; _He is drive_ → _He is driv**ing**_; _I am working every day_ → _I **work** every day_.'));
out.push(stage('4', 'Your turn – sample conversation and notes'));
out.push(dlg(null, [
  ['A', 'Hello, it\'s Rasha. Are you busy?'],
  ['B', 'A little. I\'m printing the delivery notes.'],
  ['A', 'And what are you working on this week?'],
  ['B', 'The Aleppo order. It\'s big — I\'m working on it until Thursday.'],
]));
out.push(table(['Name', 'Doing now', 'Working on this week'], [
  ['Rasha', 'printing delivery notes', 'the Aleppo order, until Thursday'],
  ['Fadi', 'waiting for the van', 'the Homs route'],
  ['Samir', 'counting the small boxes', 'the inventory'],
], [1, 1.4, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha is printing the delivery notes at the moment. This week she is working on the Aleppo order."', 'Two people are doing something with the inventory. Listener question: _Are you finishing it today?_']));
out.push(stage('5', 'Read'));
out.push(p('1 The Homs order, for his signature.  2 In the small room, until Wednesday.  3 The Aleppo invoices.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**Subject:** Tuesday update. Dear Mr Ayoub, I\'m working on the Aleppo order; it will be ready before four. Nadia is checking the bank statements this week. The drivers are loading the big van now. I am not answering the trade counter telephone today — Hala is doing it. Nour']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['_am / is / are_ + **-ing** in every sentence about now', '✓'],
  ['Something about **you** and somebody **else**', '✓'],
  ['One negative sentence', '✓'],
  ['A time', '✗ – _this week_ is there, but no time for the order'],
], [3, 2]));
out.push(p('Sample feedback: "The update is easy to read. Can you add **when** the order will be ready?"'));
out.push(stage('6R', 'Share – sample'));
out.push(p('Before: _I work on the Aleppo order now._  →  After: _I\'m working on the Aleppo order now._ (now → present continuous)'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Dear Mr Ayoub, I\'m finishing the delivery notes for Homs now; they will be on your desk at half past three. Abu Yasser is counting the returns in the warehouse, so the stock figure will change this evening. I am not starting the Aleppo invoices today — I will begin them tomorrow morning. Nour']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _This is clear — I know what is waiting._   ✓ _When will the Aleppo invoices be ready?_   ? _Is the stock figure going up or down?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The ten-second update is the one with **one sentence for each person** and a **time** in every sentence. Long explanations belong in a different email.'));
out.push(stage('HW', 'Homework – sample (≈35 words)'));
out.push(sample(null, ['Now: My mother is cooking. My brother is studying. The neighbours are talking outside. The television is playing.  Every day: My mother cooks at six. My brother studies after school. The neighbours talk every evening. The television plays all day.']));

// ===================== 2.5 =====================
out.push(pb());
out.push(h2('2.5  What does a day on the road look like?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a  Sample questions:** _What time do you start? · Where does he have lunch? · How do they travel to work? · How often does she see customers? · What time does she start?_'));
out.push(p('**b**  _At half past seven._ → What time do you start?  ·  _By bus._ → How do they travel to work?  ·  _Twice a week._ → How often does she see customers?  ·  _In the café on the corner._ → Where does he have lunch?'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (Bassel)   **b**  1 At seven.  2 Five or six.'));
out.push(p('**Language box – Practise:**  1 What time do you start?  2 Where does he have lunch?  3 How often does she visit Aleppo?  4 Does your manager work on Thursday?  5 How many emails do you write a day?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Can I ask you something? What time do you leave?'],
  ['B', 'At six. I load the lorry first, from six to seven.'],
  ['A', 'Where do you stop?'],
  ['B', 'Three stops before noon. I always do the far one first, because the road is empty early.'],
  ['A', 'How many deliveries do you make in a day?'],
  ['B', 'Six or seven. Not more.'],
  ['A', 'And what do you do with the delivery notes?'],
  ['B', 'I write them at the end of the day, in the yard.'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the three questions exactly. Typical errors: _What time does he leaves?_ → _does he **leave**_; _Where he goes?_ → _Where **does** he go?_; _How many customer_ → _How many customer**s**_.'));
out.push(stage('4', 'Your turn – sample interview'));
out.push(dlg(null, [
  ['A', 'What time do you start?'],
  ['B', 'At nine.'],
  ['A', 'How do you come to work?'],
  ['B', 'By service. It takes half an hour.'],
  ['A', 'Where do you have lunch?'],
  ['B', 'At my desk, usually. I don\'t like going out at noon.'],
  ['A', 'How often do you see customers?'],
  ['B', 'Every day. That\'s the job.'],
  ['A', 'And what time do you finish?'],
  ['B', 'At five, but on Thursday I finish at two.'],
]));
out.push(table(['Question', 'Colleague 1', 'Colleague 2'], [
  ['What time do you start?', '9.00', '7.00'],
  ['How do you come to work?', 'by service', 'by car'],
  ['Where do you have lunch?', 'at the desk', 'in the café'],
  ['How often do you see customers?', 'every day', 'twice a week'],
  ['What time do you finish?', '5.00 (Thu 2.00)', '3.00'],
], [1.6, 1.2, 1.2]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"Rasha starts at nine. She comes by service, because she hasn\'t got a car. She has lunch at her desk, and she sees customers every day. She doesn\'t go out at noon."', 'Sample follow-up question: _Does she finish early on Thursday every week?_']));
out.push(stage('5', 'Read'));
out.push(p('1 Because the small shops open early.  2 By message, the same evening.  3 Whether he takes the small van or the car when the order is large.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['**NOTE — the delivery day** (from Fadi, for the office). Fadi starts at six and loads the lorry until seven. He does the far stop first, because the road is empty early. He doesn\'t write the notes on the road, so he does them in the yard at five. One question: who signs for a delivery when the shop is closed?']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Checklist', '✓ / ✗'], [
  ['**-s** on every he / she verb', '✗ – _he load the lorry_ → _load**s**_'],
  ['One _because_ and one _so_', '✓'],
  ['One negative sentence with _doesn\'t_', '✓'],
  ['A real question at the end', '✓'],
], [3, 2]));
out.push(p('Sample feedback: "The question at the end is a good one — the office really needs to answer it. Check _he load_."'));
out.push(stage('6R', 'Share – sample'));
out.push(p('The strongest closing question is one the **manager cannot answer from the note itself** — here, _who signs when the shop is closed?_'));
out.push(stage('7', 'Write freely – sample (≈60 words)'));
out.push(sample(null, ['I would not like to be a night guard. He starts at eight in the evening and finishes at six in the morning. He walks round the building every hour and writes the time in a book. He hardly ever sees another person. The hard thing for me is the quiet — ten hours and nobody to talk to.']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _The last sentence explains the job very well._   ✓ _Check the **-s** in "he walk"._   ? _Does he sleep in the day?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('Sample: _The night guard\'s job is the hardest, because the hours are long and he works alone._'));
out.push(stage('HW', 'Homework – sample (eight questions)'));
out.push(sample(null, ['1 What time does the day start?  2 What time do people usually finish?  3 Do you work on Thursday afternoon?  4 How often does the team meet?  5 Where do people have lunch?  6 How many customers does the office see in a day?  7 Does the company pay overtime?  8 How often do you work at the weekend?']));

// ===================== 2.6 =====================
out.push(pb());
out.push(h2('2.6  Could you send it before five?'));
out.push(stage('1', 'Get ready'));
out.push(p('**a**  The second one in each pair is more polite: _Could you send me the file, please? · Can I have the number, please? · Just a moment, please._'));
out.push(p('**b**  After _I\'m sorry_ comes the **reason** and then what you **can** do. Sample: _I\'m sorry, I can\'t — the warehouse is still counting. I can send half now and half at four._'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  B (the invoice numbers)   **b**  1 Before five, because the bank closes the day at five.  2 To tell her the format she wants.'));
out.push(p('**Language box – Practise (samples):**  1 Could you send the file, please?  2 Could you tell me the number, please?  3 Could you wait a moment, please?  4 Can I see the order, please?  5 Could you open the window, please?'));
out.push(stage('3', 'Practise – sample with role card 1'));
out.push(dlg(null, [
  ['A', 'Could you give me the stock numbers, please?'],
  ['B', 'Of course. When do you need them?'],
  ['A', 'Before three, if you can. The customer is waiting.'],
  ['B', 'I\'m sorry, I can\'t give you all of them. The warehouse is counting until half past three.'],
  ['A', 'How much can you do?'],
  ['B', 'Half now, and the rest at half past three. Is that all right?'],
  ['A', 'That\'s fine. And could you send it in one message, please?'],
]));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners check the three parts of the polite _no_: **sorry** → **reason** → **what you can do**. The part most often missing is the **reason**. Typical errors: _You must send it_ → _Could you send it, please?_; _No, impossible_ → _I\'m afraid I can\'t, because…_'));
out.push(stage('4', 'Your turn – sample exchange and notes'));
out.push(dlg(null, [
  ['A', 'Could you lend me a pen, please?'],
  ['B', 'Of course. Here you are.'],
  ['A', 'And could you give me Hala\'s number?'],
  ['B', 'I\'m afraid I can\'t — I haven\'t got it on this phone. I can ask her and send it this evening.'],
]));
out.push(table(['Who', 'My request', 'Yes / No + reason'], [
  ['Rasha', 'a pen', 'Yes — _Here you are._'],
  ['Fadi', 'Hala\'s number', 'No — not on this phone; will send it this evening'],
  ['Samir', 'help with a sentence', 'Yes — after the break'],
], [1, 1.6, 1.6]));
out.push(stage('4R', 'Report – sample'));
out.push(sample(null, ['"I asked Fadi to give me Hala\'s number. He said no, because he hasn\'t got it on his phone — but he will send it this evening."', 'Politest sentence of the lesson (sample): _I\'m afraid I can\'t do that today, but I can do it first thing tomorrow._']));
out.push(stage('5', 'Read'));
out.push(p('1 The Homs invoice numbers, before five today, in one file (number, date, amount).  2 Bassel is still sending orders.  3 The old numbers (about twenty) at half past four, and the new ones tomorrow before ten.'));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Abu Yasser, Could you send me the stock figures for the small boxes, please? I need them before three, because the customer is waiting at the counter. A short message is enough — I don\'t need the full list. Thank you. Nour']));
out.push(stage('6P', 'Check together – sample reply written by the partner'));
out.push(sample(null, ['Dear Nour, I\'m sorry, I can\'t send the figures before three. We are counting the shelves until half past three. I can give you the number for the big boxes now, and the small boxes at a quarter to four. Is that all right? Abu Yasser']));
out.push(table(['Checklist for the reply', '✓ / ✗'], [
  ['_I\'m sorry / I\'m afraid_', '✓'],
  ['A real reason', '✓'],
  ['What you **can** do, with a time', '✓'],
  ['_Is that all right?_ at the end', '✓'],
], [3, 2]));
out.push(stage('6R', 'Share – sample'));
out.push(p('A reply is polite **and** useful when the person who asked can now **plan**: they know what they get, and when.'));
out.push(stage('7', 'Write freely – sample (≈55 words)'));
out.push(sample(null, ['Dear Ms Shamsi, Could you send us your price list for boxes and tape, please? We need it before the end of the month, because we prepare next year\'s orders in the first week of January. A PDF by email is enough. If the prices change in January, please tell us the date. Thank you. Nour Mansour, Sham Trading']));
out.push(stage('7P', 'Respond – sample slip'));
out.push(p('★ _I would answer this first, because the reason for the date is clear._   ✓ _Can you say how many boxes you buy in a year?_   ? _Do you want the prices in SYP or in dollars?_'));
out.push(stage('7R', 'Share – sample'));
out.push(p('The request people answer first is the one that says **why the date matters**. A deadline with no reason looks like somebody else\'s problem.'));
out.push(stage('HW', 'Homework – sample (three refusals)'));
out.push(sample(null, ['1 I\'m sorry, I can\'t send it today — the system is down until tomorrow morning. I can send it before ten tomorrow.', '2 I\'m afraid I can\'t do all of it. Nadia has the second half. I can send you my part now and ask her for the rest.', '3 I\'m sorry, not before five. I\'m at the warehouse until four and the file is on my office computer. Would half past five be all right?']));

// ===================== 2.7 =====================
out.push(pb());
out.push(h2('2.7  Review & Mediate: what does the timetable say?'));
out.push(stage('1', 'Get ready – Unit 2 quiz'));
out.push(p('**1** doesn\'t work  **2** _on_ Tuesday · _at_ half past eight · _in_ the morning  **3** before the main verb: _I **always** check my email at nine_  **4** Sample: _What time do you start? · How many customers do you see in a day?_  **5** _I\'m sorry_ → the **reason** → what you **can** do.'));
out.push(stage('2', 'Listen and read'));
out.push(p('**a**  C (both)   **b**  1 Half past eight.  2 Give the stock numbers to accounts **before** the meeting (so, count on Sunday evening).'));
out.push(p('**Language box – Practise (sample):**  _From Sunday, the warehouse must give the stock report to accounts before the management meeting, not after it._'));
out.push(stage('3', 'Practise – sample mediation of timetable 1'));
out.push(sample(null, ['"It\'s the new timetable for the week of 7 April. There are two changes. The Monday meeting is at half past eight now, not at ten. And the Homs delivery goes on Tuesday only — not on any other day. The stock figures go to accounts on Sunday evening. The trade counter doesn\'t change."']));
out.push(stage('3R', 'Perform'));
out.push(p('Listeners write the one thing they must do differently. Good mediation gives the **change** first and ends with **nothing else changes**. A learner who reads the words _with effect from_ aloud has not mediated — note it kindly and ask for it again in easier words.'));
out.push(stage('4', 'Your turn – sample notes'));
out.push(table(['Who I told', 'The change for them', 'Did they understand?'], [
  ['Abu Yasser', 'count the stock on Sunday evening, not Monday morning', 'Yes — he repeated the day back'],
  ['Hala', 'the counter closes at twelve on Thursday this week', 'Not at first — I said "twelve, not two"'],
], [1, 2, 1]));
out.push(stage('4R', 'Report – mediation sample'));
out.push(sample(null, ['"It\'s about next week. There are two changes. The important one for us is the meeting: half past eight, not ten. The other one is the stock figures — before the meeting, not after. Nothing else changes."']));
out.push(note('Second unit of the book, so the ordinal is "second". The mediation stage returns in every unit; keep the ordinal correct each time.'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 1)'));
out.push(table(['Q', 'Answer', 'Why'], [
  ['1', 'A', '8.30 is earlier than 10.00'],
  ['2', 'C', '"before the meeting" and the meeting is Monday 8.30'],
  ['3', 'B', '"pm" = the afternoon only'],
  ['4', 'B', 'he is coming, not being telephoned'],
  ['5', 'A', '"by Wed 15.00" = before three on Wednesday'],
  ['6', 'B', 'it closes at 2, not at 4 — early, not closed'],
], [0.5, 0.8, 3]));
out.push(stage('6', 'Write with help – sample'));
out.push(sample(null, ['Dear Abu Yasser, The Monday meeting is at half past eight now. It was at ten o\'clock before. Please give the stock figures to accounts on Sunday evening, before the meeting. Thank you. Nour  _(31 words)_']));
out.push(stage('6P', 'Check together – sample completed checklist'));
out.push(table(['Point', 'In the message? ✓ / ✗'], [
  ['1  The meeting is at 8.30 now', '✓'],
  ['2  It was at 10.00 before', '✓'],
  ['3  Stock figures on Sunday evening', '✓'],
  ['25 words or more', '✓ – 31 words'],
], [3, 1.4]));
out.push(stage('7', 'Write freely – exam practice (sample, ≈35 words)'));
out.push(sample(null, ['Hi Samir, The English class moves to Tuesday at six o\'clock. It\'s in Room 4 now, on the first floor, not in Room 9. Please bring your dictionary — we start the new unit. See you there! Rasha']));
out.push(stage('HW', 'Homework – sample reply (≈25 words)'));
out.push(sample(null, ['Thanks, Rasha! Tuesday at six is better for me. Is Room 4 the one next to the office? I\'ll bring my dictionary and the homework.']));
out.push(stage('✓', 'Unit 2 check – answers and marking'));
out.push(p('**A  Language** (8 marks)'));
out.push(table(['Q', '1', '2', '3', '4', '5', '6', '7', '8'], [['Answer', 'b', 'b', 'c', 'a', 'c', 'b', 'a', 'b']], [1, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6]));
out.push(p('**B  Listening** (5 marks) — Place: **the trade counter** · Opens: **8.30** · Closes: **4.00 (2.00 on Thursday)** · Closed on: **Friday and Saturday** · Visit: **Wednesday at about 11.00**'));
out.push(p('**C  Writing** (7 marks) — sample:'));
out.push(sample(null, ['Dear Hala, The Thursday meeting is at nine o\'clock now. It was at eleven before. Please bring the counter figures with you, because we start with them. Thank you. Nour  _(29 words)_']));
out.push(box('Marking the writing (7 marks)', [
  '**Task (3):** the new time · the old time · what the person must do — one mark each.',
  '**Language (2):** present simple and times used correctly; _was_ for the old time.',
  '**Organisation and length (2):** greeting and name present; 25 words or more.',
  '⚠ A message of perfect English that gives only two of the three points scores **2 of 3** on task. Count the points first.',
], C.lyellow, C.orange));
out.push(box('Teacher\'s note — the three faults to watch in Unit 2', [
  '**1  The adverb in the wrong place.** _I check always my email._ Most learners put the adverb after the verb, as in Arabic. Drill the position, not the word.',
  '**2  The lost -s.** It comes back in 2.5 with _does_: _What time does he leaves?_ Correct it on the board every time it appears, in both directions.',
  '**3  The bare refusal.** _No, I can\'t._ is grammatically perfect and socially wrong. The three-part refusal is the single most useful thing in this unit for work; give it more time than the grammar if you have to choose.',
], C.grey, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive Business English A2 · Book 1 · Syria Edition · Unit 2 · Answer Key');
