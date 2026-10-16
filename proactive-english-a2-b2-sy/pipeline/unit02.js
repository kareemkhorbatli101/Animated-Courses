// Proactive English A2 · Syria Edition · Book 1 · Unit 2 — Student's Book
const L = require('./lib');
const { p, h1, h2, pb, sp, stage, lesson, box, dlg, table, lines, item, C } = L;
const out = [];
const PHRASE_CARD = (list) => table(null, [list.map(x => '☐ ' + x)], list.map(() => 1));
const board = (a, b) => table(['We SAY…', 'We WRITE…'], [[a, b], ['', ''], ['', '']], [1, 1]);
const model = (paras) => box(null, paras, 'FFFFFF', C.navy);
const writers = (paras) => box('Writer\'s box', paras, C.lyellow, C.orange);
const hw = (t) => box('Homework', [t], C.lblue, C.navy);
const check = (rows) => table(['Checklist', '✓ / ✗'], rows.map(r => [r, '']), [5, 1]);
const STD = ['Capital letters and full stops', 'A verb in every sentence', 'he / she + -s: _She works… He doesn\'t…_'];
const clinic = '**Board clinic:** your teacher writes three mistakes from the reports on the board. Correct them together.';

out.push(h1('Unit 2  Daily Life'));
out.push(p('_Proactive English · A2 · Book 1 · Syria Edition_', { color: '7F7F7F' }));
out.push(box('In this unit you will…', [
  '**2.1**  describe your daily routine',
  '**2.2**  ask about and give times and opening hours',
  '**2.3**  say how often you do things',
  '**2.4**  talk about what is happening now and these days',
  '**2.5**  ask about work and study',
  '**2.6**  make and answer simple requests',
  '**2.7**  Review & Mediate: tell a visitor about a timetable',
], C.lblue, C.navy));

// ======================= 2.1 =======================
out.push(pb());
out.push(h2('2.1  A day in my life'));
out.push(p('**Function:** describing your daily routine   ·   **Grammar:** present simple (+ / –)   ·   **Pronunciation:** -s endings /s/ /z/ /ɪz/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you do every day, from morning to night? Your teacher writes the class\'s ideas on the board.'));
out.push(board('I get up at six.', 'I start work at 8.30.'));
out.push(p('**b**  Put these in a logical order: _go to bed · get up · have lunch · start work · have breakfast · come home · finish work · have dinner_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. What are Lina and Maya talking about?   **A** their jobs   **B** their days   **C** their families'));
out.push(p('**b**  Listen again. **1** What time does Lina start work?   **2** What time does Rami start work?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.1  Tired on Thursdays', [
  ['Maya', 'You always look tired on Thursdays, Lina!'],
  ['Lina', 'I am tired! On Thursdays I get up at six. I start work at eight and I finish at four.'],
  ['Maya', 'And then you come to class.'],
  ['Lina', 'Yes. I don\'t go home. I have a sandwich and I take a minibus here. What about you?'],
  ['Maya', 'My day is long too. I get up at half past six and I open the pharmacy at eight.'],
  ['Lina', 'Do you have lunch at home?'],
  ['Maya', 'No, I don\'t. My colleague brings lunch for us. She cooks really well!'],
  ['Lina', 'Lucky you! And Rami? He looks fresh every evening.'],
  ['Maya', 'That\'s because he starts work at nine. He goes running in the morning and he has a big breakfast!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple (+ / –)**',
  table(['+', '–'], [
    ['I / You / We / They **work** in Damascus.', 'I / You / We / They **don\'t** (do not) **work** on Fridays.'],
    ['He / She / It **works** in Damascus.', 'He / She / It **doesn\'t** (does not) **work** on Fridays.'],
  ], [1, 1]),
  'We use the present simple for **routines** and things that are **always true**.',
  '**Spelling (he / she / it):** start → start**s** · watch → watch**es** · go → go**es** · finish → finish**es** · study → stud**ies** · have → **has**',
  '⚠ After _doesn\'t_, no -s: _He doesn\'t **work**_, not ~~He doesn\'t works~~.',
  '**Practise:** Complete with the verb in brackets.  1 Maya ______ (open) the pharmacy at eight.  2 Lina ______ (not / go) home on Thursdays.  3 Rami ______ (have) a big breakfast.  4 We ______ (not / work) on Fridays.  5 Omar ______ (watch) football in the evening.  6 My sister ______ (study) at night.',
  '**Useful phrases:** You look tired! · What about you? · Lucky you! · That\'s because…',
  '**Pronunciation – -s endings.** 🔊 **Track 2.2** Listen and repeat. /s/ start**s**, work**s**  ·  /z/ go**es**, ha**s**, open**s**  ·  /ɪz/ watch**es**, finish**es**, wash**es**',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton. Then swap roles and use the role cards.'));
out.push(dlg(null, [
  ['A', 'You look tired! What time do you get up?'],
  ['B', 'I get up at __________. I start work / class at __________ and I finish at __________.'],
  ['A', 'Do you have lunch at home?'],
  ['B', 'No, I don\'t. I __________.  /  Yes, I do.'],
  ['A', 'And what do you do in the evening?'],
  ['B', 'I __________ and I __________. I go to bed at __________.'],
]));
out.push(table(['Role card 1 – baker', 'Role card 2 – university student'], [['get up 4.30 · start 5.00 · finish 1.00 · lunch at home · evening: sleep, watch TV · bed 9.00', 'get up 7.00 · lectures 8.00–2.00 · lunch in the canteen · evening: study, call friends · bed 12.00']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform without the book. **Listener task:** write **three** times you hear.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Draw a timeline of **your** weekday (morning → night). Tell your partner. Your partner draws your day on a new timeline. Compare. Then find a new partner and tell your day again – faster!'));
out.push(table(['6 am', '9 am', '12 pm', '3 pm', '6 pm', '9 pm', '12 am'], [['', '', '', '', '', '', '']], [1, 1, 1, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about your partner\'s day:  _Fadi gets up at five. He drives to Homs every day. He doesn\'t have lunch at home…_'));
out.push(p('**Listener task:** listen for the **-s** endings. Put up your hand if you hear a mistake (after the report!).   ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Omar writes for the class page "A day in my life". Read and answer.'));
out.push(model([
  '**A day in my life – Omar Darwish**',
  'I get up at seven and I have tea and bread with za\'atar. At half past seven I take a minibus to work. I start work at half past eight at TechCare, a small IT company. I fix computers, phones and printers all day. I have lunch at two with my colleagues. I finish work at five and I go home. In the evening I cook dinner – Rami doesn\'t cook, but he washes the dishes! After dinner we watch TV or I call my mother in Aleppo. I go to bed at eleven. On Fridays I don\'t work. I visit my cousin in Jaramana.',
]));
out.push(item('1', 'How does Omar go to work?'));
out.push(item('2', 'What does he do at work?'));
out.push(item('3', 'What does Rami do after dinner?'));
out.push(item('4', 'What does Omar do on Fridays?'));
out.push(writers([
  'Write your day **in time order**: _in the morning → at 8.30 → then → after that → in the evening → after dinner._',
  'Use **times** (at seven, at half past seven) to start some sentences – not every sentence!',
  'End with **one special day** (Fridays, weekends).',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('I get up at ______ and I ______________. At ______ I ______________ to work / college. I start at ______. I ______________ all day. I have lunch ______________. I finish at ______ and then I ______________. In the evening I ______________. I go to bed at ______. On Fridays I ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check([...STD, 'Time order and time words: _at…, then, in the evening_']));
out.push(stage('6R', 'Share', 3));
out.push(p('Two or three students read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write "A day in my life" (50 words or more) about **you** – **or** about a person in your family (then use _he / she_ + -s!).'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I like…_   ✓ _Can you add…?_   ? _a question about the day_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their texts. Who gets up the earliest in the class? Who goes to bed the latest?'));
out.push(hw('Write your final text. Then write a reply to your partner (25+ words): _Your day is very long! I get up early too, but…_'));

// ======================= 2.2 =======================
out.push(pb());
out.push(h2('2.2  What time does it open?'));
out.push(p('**Function:** asking about times and opening hours   ·   **Grammar:** _at / on / in_; _What time does…?_   ·   **Pronunciation:** weak _at_ /ət/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  Which places do you need to know the times for? (bank, bakery, …) What do we ask? What do notices say?'));
out.push(board('What time does it open?', 'Open: 9 am – 5 pm'));
out.push(p('**b**  Say the times: 9:00 · 9:15 · 9:30 · 9:45 · 13:00 · 20:30'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where is Rami?   **A** at a bank   **B** at a library   **C** at a pharmacy'));
out.push(p('**b**  Listen again. **1** What time does it close on Thursdays?   **2** When is the English book club?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.3  At the City Library, Mezzeh', [
  ['Rami', 'Excuse me, what time does the library open?'],
  ['Librarian', 'It opens at nine in the morning.'],
  ['Rami', 'And what time does it close?'],
  ['Librarian', 'It closes at eight in the evening, from Saturday to Wednesday. On Thursdays it closes at two.'],
  ['Rami', 'Is it open on Fridays?'],
  ['Librarian', 'No, it isn\'t. It\'s closed on Fridays.'],
  ['Rami', 'OK. And when is the English book club?'],
  ['Librarian', 'It\'s on Tuesdays. It starts at six and finishes at half past seven.'],
  ['Rami', 'Great. Does the café open in the evening too?'],
  ['Librarian', 'Yes, it does. It opens at ten and closes at seven.'],
  ['Rami', 'Thanks a lot.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – questions about times; at / on / in**',
  '**What time does** the library **open / close**?  – It **opens** at nine.   **When is** the book club? – It\'s **on** Tuesdays.',
  table(['at', 'on', 'in'], [['times: at nine, at half past six, at night', 'days and dates: on Friday, on Tuesdays, on 3 May', 'parts of the day: in the morning / afternoon / evening; months: in May']], [1, 1, 1]),
  '**Telling the time:** 9:15 = quarter past nine · 9:30 = half past nine · 9:45 = quarter to ten · 20:00 = eight o\'clock in the evening (8 pm)',
  '**Practise:** Complete with _at, on_ or _in_.  1 The bank closes ___ two.  2 I go to the gym ___ Mondays.  3 Lina studies ___ the evening.  4 The class starts ___ half past five.  5 My birthday is ___ June.',
  '**Useful phrases:** Excuse me, … · Is it open on…? · It\'s closed on… · Thanks a lot.',
  '**Pronunciation.** 🔊 **Track 2.4** _at_ is weak /ət/: _at‿nine_ /ət naɪn/ · _at‿eight_ /ət‿eɪt/ · _It opens‿at ten._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks about card B\'s place; B answers. Then swap.'));
out.push(dlg(null, [
  ['A', 'Excuse me, what time does the __________ open?'],
  ['B', 'It opens at __________.'],
  ['A', 'And what time does it close?'],
  ['B', 'It closes at __________.'],
  ['A', 'Is it open on __________?'],
  ['B', 'Yes, it is. / No, it isn\'t. It\'s closed on __________.'],
]));
out.push(table(['Card A – Al-Shifa Pharmacy', 'Card B – Cham Bank (branch)'], [['Sat–Thu 8:00–22:00 · Fri 16:00–22:00', 'Sun–Thu 8:30–14:00 · closed Fri and Sat']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** complete the times.  Pharmacy: opens ______ closes ______   Bank: opens ______ closes ______'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of **three real places** near your home or work (a bakery, your workplace, a mosque, a gym, a shop). Your partner asks about the opening times and the days. Make notes. Then swap.'));
out.push(table(['Place', 'Opens', 'Closes', 'Closed on'], [['', '', '', ''], ['', '', '', ''], ['', '', '', '']], [2, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class about one of your partner\'s places:  _The bakery near Omar\'s house opens at five in the morning. It closes at two. It\'s open every day._'));
out.push(p('**Listener task:** which place opens the earliest? ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Read the notice on Maya\'s pharmacy door. Answer the questions.'));
out.push(model([
  '**AL-SHIFA PHARMACY – OPENING HOURS**',
  'Saturday – Thursday: 8 am – 10 pm',
  'Friday: 4 pm – 10 pm',
  '**Ramadan hours:** 10 am – 4 pm and 8 pm – 1 am',
  'Night service: please call 0933 427 815. We deliver medicines to your home after 10 pm.',
]));
out.push(item('1', 'What time does the pharmacy open on Fridays?'));
out.push(item('2', 'When does it close in Ramadan?'));
out.push(item('3', 'What can you do after 10 pm?'));
out.push(writers([
  'Notices are **short**: no full sentences for times – _Saturday – Thursday: 8 am – 10 pm_.',
  'Days and months start with a **capital letter**: _Friday, Ramadan, May_.',
  'Use **am** (morning) and **pm** (afternoon / evening) – or the 24-hour clock: 22:00.',
  'Add **one sentence** for special information: _Please call… / We deliver…_',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Write the notice for a café.   **______________ CAFÉ – OPENING HOURS**   Saturday – ______: ______ – ______   Friday: ______ – ______   Closed on: ______   Special information: ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters for days and months', 'am / pm or 24-hour times are correct', 'Short notice style', 'One sentence of special information']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one line before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an opening-hours notice for a **real place you know** – your workplace, a family shop, your gym. Add **two sentences** for customers (new times in Ramadan or summer, home delivery, a phone number…).'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s notice as a **customer**. ★ _Clear times!_  ✓ _Can you add…?_  ? _Are you open on…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Put the notices on the wall. Find one place that is open late at night.'));
out.push(hw('Write a message to a friend about your partner\'s place (25+ words): _Hi Sami, the café near my work opens at seven. It closes at…_'));

// ======================= 2.3 =======================
out.push(pb());
out.push(h2('2.3  How often do you…?'));
out.push(p('**Function:** saying how often you do things   ·   **Grammar:** adverbs of frequency; _once / twice / three times a…_   ·   **Pronunciation:** _often_ /ˈɒfn/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you do every day? Every week? Never? Make a class list of activities and chores (housework).'));
out.push(board('I always drink coffee in the morning.', 'Most students drink coffee every day.'));
out.push(p('**b**  Put in order from 100% to 0%: _sometimes · never · always · often · usually_'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Lina is…   **A** writing a survey   **B** asking questions for a survey   **C** answering a survey'));
out.push(p('**b**  Listen again. **1** How many cups of coffee does Omar usually drink?   **2** How often do they clean the flat?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.5  The class survey', [
  ['Lina', 'Omar, can I ask you some questions for our class survey?'],
  ['Omar', 'Sure.'],
  ['Lina', 'How often do you drink coffee?'],
  ['Omar', 'Every day! I usually drink three cups.'],
  ['Lina', 'Three! And how often do you cook?'],
  ['Omar', 'Four or five times a week. Rami never cooks!'],
  ['Lina', 'How often do you clean the flat?'],
  ['Omar', 'We clean it once a week, on Fridays. Rami always does the bathroom.'],
  ['Lina', 'Do you ever go to the cinema?'],
  ['Omar', 'Not often. I sometimes go with my cousins – maybe twice a month.'],
  ['Lina', 'And how often do you visit your family in Aleppo?'],
  ['Omar', 'Every two months. My mother always cooks kibbeh for me!'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – how often?**',
  '**always** (100%) · **usually** · **often** · **sometimes** · **never** (0%)',
  'Adverbs go **before** the main verb: _Rami **never** cooks._  but **after** _be_: _Lina **is always** tired on Thursdays._',
  'Longer expressions go at the **end**: _I cook **four times a week**._ · _once a day · twice a month · three times a year · every day · every two months_',
  'Questions: **How often** do you…? · Do you **ever**…? – Yes, sometimes. / No, never.',
  '**Practise:** Put the adverb in the right place.  1 I drink tea in the morning. (always)  2 Maya is late. (never)  3 We visit our grandparents. (often)  4 Do you go to the cinema? (ever)  5 Omar cooks dinner. (usually)',
  '**Useful phrases:** Can I ask you some questions? · Sure. · Not often. · Maybe…',
  '**Pronunciation.** 🔊 **Track 2.6** _often_ /ˈɒfn/ – the **t** is usually silent. _usually_ /ˈjuːʒuəli/ · _sometimes_ /ˈsʌmtaɪmz/. Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A asks the survey questions. B answers using the card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Can I ask you some questions for our survey?'],
  ['B', 'Sure.'],
  ['A', 'How often do you __________?'],
  ['B', '__________. I usually __________.'],
  ['A', 'Do you ever __________?'],
  ['B', 'Yes, sometimes – about __________. / No, never.'],
]));
out.push(table(['Card A', 'Card B'], [['coffee: 2 cups a day · cook: never · clean: every Friday · cinema: once a month', 'coffee: never (tea!) · cook: every day · clean: twice a week · cinema: never']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the frequency words you hear.'));
out.push(PHRASE_CARD(['always', 'usually', 'often', 'sometimes', 'never', 'once / twice a…']));
out.push(stage('4', 'Your turn – class survey', 9));
out.push(p('In groups of four. Choose **four** questions (coffee, cooking, cleaning, sport, visiting family, social media, reading…). Ask everyone in your group. Write the answers in the table.'));
out.push(table(['How often do you…?', 'Name 1', 'Name 2', 'Name 3', 'Name 4'], [['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', ''], ['', '', '', '', '']], [2, 1, 1, 1, 1]));
out.push(stage('4R', 'Report', 6));
out.push(p('One person from each group reports the results:  _Three people in our group drink coffee every day. Nobody cooks every day. Hiba often goes to the gym, but Fadi never does._'));
out.push(p('**Listener task:** write one surprising result. ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes the survey report for the class page. Read and answer.'));
out.push(model([
  '**Class 4B – our habits**',
  'We asked twelve students about their habits. Coffee is very popular: eight students drink coffee every day, and Omar usually drinks three cups! Only two students never drink coffee – they prefer tea. Most students cook two or three times a week, but two people never cook. Everyone cleans at home: half of the class cleans once a week, usually on Fridays. Going to the cinema is not common. Only three students go once a month, and the others never go.',
]));
out.push(item('1', 'How many students drink coffee every day?'));
out.push(item('2', 'How often does half of the class clean?'));
out.push(item('3', 'Is the cinema popular in Class 4B?'));
out.push(writers([
  'A survey report: **who you asked** → **results** (most popular first) → one **surprising** result.',
  'Report words: **everyone · most students · half of the class · two students · only one student · nobody**.',
  '⚠ _Everyone / nobody / half of the class_ + **-s**: _Everyone clean**s**._ _Nobody cook**s**._',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('We asked ______ students about their habits. ______________ is very popular: ______ students ______________ every day. Only ______ students never ______________. Most students ______________ ______________ a week, but ______ people ______________. ______________ is not common. Only ______ students ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Frequency words in the right place', 'everyone / nobody / half of the class + -s', 'Numbers are correct (check the table!)']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a report on **your group\'s** survey results (50 words or more). Start with the most popular habit. End with one surprising result.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _Interesting result!_   ✓ _Can you add…?_   ? _How often does…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Each group reads its surprising result. The class votes for the most surprising.'));
out.push(hw('Write a short message to Ms Huda (25+ words) with the three most interesting results from your group.'));

// ======================= 2.4 =======================
out.push(pb());
out.push(h2('2.4  What are you doing these days?'));
out.push(p('**Function:** talking about now and these days   ·   **Grammar:** present continuous vs present simple   ·   **Pronunciation:** weak _are_ /ə/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  You call a friend. What do you ask? What do people write in a status message? Make two lists.'));
out.push(board('What are you doing?', 'Busy week! I\'m working on a big project.'));
out.push(p('**b**  Which are **now**, which are **every day**? _I\'m having tea. · I have tea at five. · She\'s cooking. · She cooks every evening._'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Who is Rami talking to?   **A** his mother   **B** his sister   **C** his colleague'));
out.push(p('**b**  Listen again. **1** What is Rami doing now?   **2** Why is Hala working on Saturdays?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.7  A video call to Homs', [
  ['Hala', 'Rami! How are you? What are you doing?'],
  ['Rami', 'Hi, Hala! I\'m sitting on the balcony. I\'m having tea. What about you?'],
  ['Hala', 'I\'m cooking dinner and the boys are doing their homework. Well, Adam is doing his homework. Yazan is playing a game on my phone!'],
  ['Rami', 'Ha! How\'s school?'],
  ['Hala', 'Busy. I usually work from Sunday to Thursday, but this term I\'m teaching an extra class, so I\'m working on Saturdays too.'],
  ['Rami', 'I\'m busy too. We\'re building a new school in Kafr Sousa, so I\'m working long hours these days.'],
  ['Hala', 'Are you still going to your English classes?'],
  ['Rami', 'Yes, I am. I go every Thursday, and I\'m learning a lot.'],
  ['Hala', 'Good for you! Mum asks about you every day, you know.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present continuous: am / is / are + -ing**',
  table(['+', '–', '?'], [['I\'m having tea.', 'I\'m not working today.', 'Are you still going to classes? – Yes, I am.'], ['She\'s cooking.', 'He isn\'t studying.', 'Is she working on Saturdays? – Yes, she is.'], ['They\'re doing homework.', 'We aren\'t building houses.', 'What are you doing?']], [1, 1, 1.3]),
  table(['Present simple', 'Present continuous'], [['routines, always true: _I **go** every Thursday._ _Mum **asks** about you every day._', 'now: _I\'m **sitting** on the balcony._  these days / this week / this term: _I\'m **working** long hours these days._'], ['words: always, usually, every day, on Saturdays', 'words: now, at the moment, these days, this week, this term']], [1, 1]),
  '**Practise:** Choose the correct form.  1 Look! Yazan (_plays / is playing_) a game.  2 Hala (_teaches / is teaching_) at a school in Homs.  3 These days I (_read / \'m reading_) a great book.  4 Omar usually (_cooks / is cooking_) dinner.  5 Shh! The baby (_sleeps / \'s sleeping_).',
  '**Useful phrases:** How are you? · How\'s school / work? · Good for you! · …, you know.',
  '**Pronunciation.** 🔊 **Track 2.8** _are_ is weak /ə/: _What are you doing?_ /wɒt‿ə jə ˈduːɪŋ/ · _We\'re building…_ · _They\'re doing…_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Make a phone call. Use the skeleton and a card. Then swap.'));
out.push(dlg(null, [
  ['A', 'Hi __________! How are you? What are you doing?'],
  ['B', 'Hi! I\'m __________. What about you?'],
  ['A', 'I\'m __________. How\'s work / school?'],
  ['B', 'Busy. I usually __________, but these days I\'m __________.'],
  ['A', 'Good for you! / Oh no!'],
]));
out.push(table(['Card A', 'Card B'], [['now: watching the news · usually: work 9–5 · these days: working at night (a new shop)', 'now: cooking mujaddara · usually: study at home · these days: studying at the library (exams)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write **one** thing for "now" and **one** for "these days".'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Tell your partner about **your life these days**: a project at work, a course, a book or series, something new at home. Then ask about their life. Use _usually… but these days…_. Change partners and repeat.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Maya is very busy these days. She\'s studying for a pharmacy exam. She usually goes to the gym, but this month she isn\'t going._'));
out.push(p('**Listener task:** who is the busiest person in the class this week? ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Lina writes to her friend Dima, who lives in Dubai. Read and answer.'));
out.push(model([
  'Hi Dima,',
  'How are you? Life is very busy here these days! At work we\'re preparing the end-of-year accounts, so I\'m working until six every day. I usually go to the gym on Mondays, but this month I\'m not going. I\'m also taking English classes at Al-Yasmin – I go every Thursday and I\'m meeting lots of new people. At the moment I\'m sitting in a café near the centre and I\'m waiting for my class. What are you doing these days?',
  'Love,',
  'Lina',
]));
out.push(item('1', 'Why is Lina working until six?'));
out.push(item('2', 'What does she usually do on Mondays?'));
out.push(item('3', 'Where is she now?'));
out.push(writers([
  'A personal update: _Hi + name,_ → _How are you?_ → **these days** (work, study, home) → **now** (_At the moment I\'m…_) → a question → _Love, / Take care, / See you soon,_ → name.',
  'Mix the tenses: **usually** + present simple, **these days / at the moment** + present continuous.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Hi ______,   How are you? Life is ______ here these days! At work / college I\'m ______________. I usually ______________, but this month I\'m ______________. I\'m also ______________. At the moment I\'m ______________. What are you doing these days?   ______,   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'am / is / are + -ing for now and these days', 'Present simple with usually / every…', 'All parts: greeting, update, now, a question, ending']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write an update to a friend or relative who lives in another city or country (50 words or more). Tell them about your life these days and what you\'re doing now. Ask two questions.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('★ _I like…_   ✓ _Can you add…?_   ? _Are you still…?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two students read their messages aloud. Listeners say one thing the writer is doing these days.'));
out.push(hw('Write a **reply** to your partner\'s message as the friend or relative (30+ words). Answer both questions.'));

// ======================= 2.5 =======================
out.push(pb());
out.push(h2('2.5  What do you do?'));
out.push(p('**Function:** asking about work and study   ·   **Grammar:** present simple questions with _do / does_   ·   **Pronunciation:** _Do you…?_ /djə/, _Does she…?_ /dəz ʃi/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  How many jobs can you name in English in two minutes? What do people ask about jobs?'));
out.push(board('What do you do?', 'Hani is a graphic designer. He works from home.'));
out.push(p('**b**  Match: 1 designs logos  2 fixes cars  3 helps people with the law  4 sells things in a shop  →  A mechanic  B shop assistant  C designer  D lawyer'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. Where are Lina and Hani?   **A** at an open day at the centre   **B** at Lina\'s office   **C** at a wedding'));
out.push(p('**b**  Listen again. **1** What does Hani do?   **2** When does his wife teach?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.9  Open day at Al-Yasmin', [
  ['Hani', 'Hi, I\'m Hani. Are you a student here?'],
  ['Lina', 'Yes, I am. I\'m Lina.'],
  ['Hani', 'Nice to meet you. What do you do, Lina?'],
  ['Lina', 'I\'m an accountant.'],
  ['Hani', 'Oh, where do you work?'],
  ['Lina', 'I work for a small company in Mezzeh. We sell medical equipment. What about you? What do you do?'],
  ['Hani', 'I\'m a graphic designer. I work from home.'],
  ['Lina', 'Really? Do you like it?'],
  ['Hani', 'Yes, I do. I design logos and posters for small businesses. And my wife works here! She teaches Arabic to foreign students.'],
  ['Lina', 'Oh! Does she teach in the evenings?'],
  ['Hani', 'No, she doesn\'t. She teaches in the mornings.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – present simple questions**',
  table(['Question', 'Short answer'], [['**Do** you / they **work** from home?', 'Yes, I **do**. / No, they **don\'t**.'], ['**Does** he / she **like** it?', 'Yes, she **does**. / No, he **doesn\'t**.'], ['What **do** you **do**? · Where **does** she **work**? · When **does** she **teach**?', 'I\'m an accountant. · She works here. · In the mornings.']], [1.4, 1]),
  '⚠ After _does_, no -s: _Where does she **work**?_, not ~~Where does she works?~~ · Don\'t forget _do / does_: ~~Where you work?~~ → _Where **do** you work?_',
  '**What do you do?** = What\'s your job?',
  '**Practise:** Make questions.  1 (you / like / your job?)  2 (where / your brother / work?)  3 (she / work / on Fridays?)  4 (what / your father / do?)  5 (they / live / in Damascus?)',
  '**Useful phrases:** Are you a student here? · Really? · Do you like it? · I work from home. · I work for…',
  '**Pronunciation.** 🔊 **Track 2.10** _Do you…?_ /djə/: _Do you like it?_ · _Where do you work?_  _Does she…?_ /dəz ʃi/: _Does she teach?_ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. Use the skeleton and the cards. Then swap.'));
out.push(dlg(null, [
  ['A', 'What do you do?'],
  ['B', 'I\'m a / an __________.'],
  ['A', 'Where do you work?'],
  ['B', 'I work __________. I __________.'],
  ['A', 'Do you like it?'],
  ['B', 'Yes, I do. / Not really. I __________.'],
  ['A', 'Does your __________ work too?'],
  ['B', 'Yes, he / she does. He / She\'s a __________. / No, he / she doesn\'t.'],
]));
out.push(table(['Card A', 'Card B'], [['mechanic · a garage in Qaboun · fix cars · like it (love engines) · wife: dentist', 'shop assistant · a clothes shop in Hamra Street · help customers · not really (long hours) · brother: doesn\'t work (student)']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the job and the place of work.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('**a  Guess my job.** Think of a job. Your partner asks yes / no questions: _Do you work outside? Do you wear a uniform? Do you work with children?_ Maximum ten questions!'));
out.push(p('**b**  Now ask your partner about their **real** work or study – and one person in their family. Make notes.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _Tareq works for a bank in Baramkeh. He checks customers\' accounts. He likes it, but he doesn\'t like the traffic. His wife is a nurse._'));
out.push(p('**Listener task:** ask one question with _does_: _Does he work on Saturdays?_ ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('The centre writes about a visitor on its "Meet our community" page. Read and answer.'));
out.push(model([
  '**Meet our community: Hani Ghazal**',
  'Hani is a graphic designer from Damascus. He works from home and he designs logos, posters and menus for small businesses – cafés, shops and restaurants. He usually starts work at ten and he often works late at night. He loves his job because every day is different. Hani\'s wife, Reem, teaches Arabic to foreign students here at Al-Yasmin. Hani doesn\'t speak much English, but he wants to learn – many of his new clients are from abroad!',
]));
out.push(item('1', 'What does Hani design?'));
out.push(item('2', 'Why does he love his job?'));
out.push(item('3', 'Why does he want to learn English?'));
out.push(writers([
  'A profile of another person: **name + job** → **place** → **what he / she does** → **routine** → **likes / dislikes** → **one more fact**.',
  'Check every verb: **he / she + -s** (_works, designs, teaches_), **doesn\'t + base verb**.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Meet our community: ______________.   ______ is a / an ______________ from ______. He / She works ______________ and he / she ______________. He / She usually starts work at ______ and ______________. He / She loves / likes his / her job because ______________. He / She doesn\'t ______________, but ______________.'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'he / she + -s on every verb', 'doesn\'t + base verb', 'All parts: job, place, what he / she does, routine, feelings']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one sentence before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a "Meet our community" profile of **your partner** (50 words or more). Use your notes from Stage 4.'));
out.push(...lines(7));
out.push(stage('7P', 'Respond', 5));
out.push(p('Give the profile to your partner. They read it **about themselves** and write: ★ _I like…_  ✓ _Small correction:…_  ? _a question_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two profiles are read aloud. The class guesses who it is before the name!'));
out.push(hw('Write a reply to your partner about the profile (25+ words): _Thank you for the profile! It\'s nice. One small change: I work in… not…_'));

// ======================= 2.6 =======================
out.push(pb());
out.push(h2('2.6  Can you help me?'));
out.push(p('**Function:** making and answering simple requests   ·   **Grammar:** _Can / Could you…? Can / Could I…?_   ·   **Pronunciation:** weak _can_ /kən/, strong _can\'t_ /kɑːnt/'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready', 6));
out.push(p('**a**  What do you ask colleagues, classmates or neighbours to do? What do you ask to borrow? Make two lists.'));
out.push(board('Can I borrow your charger?', 'Could you water my plants, please?'));
out.push(p('**b**  Name these office things: a thing for joining papers · a thing for cutting paper · a thing for your phone\'s battery'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  **Books closed.** Listen. How many things does Rana ask for?   **A** two   **B** three   **C** four'));
out.push(p('**b**  Listen again. **1** Why can\'t Lina check the numbers now?   **2** Who has got a red pen?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.11  At Lina\'s office', [
  ['Rana', 'Lina, can you help me with something?'],
  ['Lina', 'Sure. What is it?'],
  ['Rana', 'Can I use your stapler? Mine is broken.'],
  ['Lina', 'Of course. Here you are.'],
  ['Rana', 'Thanks. And could you check these numbers for me, please? The report is for Mr Khaled.'],
  ['Lina', 'Sorry, I can\'t right now. I have a call with a client in five minutes. Can I do it at twelve?'],
  ['Rana', 'Yes, that\'s fine. Oh, and can you lend me a red pen?'],
  ['Lina', 'Sorry, I haven\'t got a red pen. Ask Mr Khaled – he\'s got lots!'],
  ['Rana', 'Ha! OK. Thanks, Lina.'],
  ['Lina', 'No problem.'],
]));
out.push(sp());
out.push(box('Language box', [
  '**Grammar – requests**',
  table(['Asking for help', 'Asking for permission', 'Answers'], [['**Can you** help me? **Could you** check these numbers, **please**?', '**Can I** use your stapler? **Could I** borrow your charger?', 'Sure. / Of course. / No problem. / Here you are.  Sorry, I can\'t + reason. / Sorry, I haven\'t got one.']], [1, 1, 1.2]),
  '_Could_ is a little more polite than _can_. After _can / could_ + **base verb**: _Could you **check**…?_, not ~~Could you to check~~.',
  '**borrow** = take for a short time: _Can I borrow your pen?_  **lend** = give for a short time: _Can you lend me your pen?_',
  '**Practise:** Make requests.  1 (you want your colleague\'s charger)  2 (you want a neighbour to take your bread delivery)  3 (you want to use the printer)  4 (you want your friend to send you the photo)',
  '**Useful phrases:** Can you help me with something? · What is it? · Here you are. · Right now · That\'s fine. · No problem.',
  '**Pronunciation.** 🔊 **Track 2.12** In questions _can_ is weak /kən/: _Can you help me?_ /kən jə/ · _can\'t_ is strong /kɑːnt/: _Sorry, I can\'t._ Listen and repeat.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A makes the requests on card A. B answers – say yes to one and no to one (with a reason). Then swap.'));
out.push(dlg(null, [
  ['A', 'Can you help me with something?'],
  ['B', 'Sure. What is it?'],
  ['A', 'Can I __________? '],
  ['B', 'Of course. Here you are.'],
  ['A', 'Thanks. And could you __________, please?'],
  ['B', 'Sorry, I can\'t right now. I __________. Can I do it __________?'],
  ['A', 'Yes, that\'s fine. Thanks.'],
]));
out.push(table(['Card A – at work', 'Card B – at home'], [['use your laptop · print this letter for me', 'borrow your phone charger · help me move this sofa']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** tick the phrases you hear.'));
out.push(PHRASE_CARD(['Can I…?', 'Could you…, please?', 'Of course.', 'Here you are.', 'Sorry, I can\'t…', 'No problem.']));
out.push(stage('4', 'Your turn', 9));
out.push(p('Walk around the class. Make **real** requests to three classmates: borrow real things (a pen, a dictionary, a charger) and ask for small help (_Could you explain this word? Could you take a photo of us?_). Remember who said yes and who said no – and why.'));
out.push(stage('4R', 'Report', 6));
out.push(p('Tell the class:  _I asked Omar for his charger and he said yes. I asked Hiba to explain "lend", but she couldn\'t – she was busy!_ (Learn _said / asked / couldn\'t_ as phrases here.)'));
out.push(p('**Listener task:** who said "yes" the most? ' + clinic));
out.push(lesson('LESSON B – WRITING'));
out.push(stage('5', 'Read', 7));
out.push(p('Maya leaves a note for her neighbour. Read and answer.'));
out.push(model([
  'Dear Umm Fadi,',
  'I\'m visiting my family in Latakia from Thursday to Saturday. Could you water my plants on Friday, please? They\'re on the balcony. Can I leave my key with you? I can bring it to you on Wednesday evening. Also, could you take my bread delivery on Friday morning? The boy from the bakery usually comes at seven.',
  'Thank you so much! My number is 0933 427 815.',
  'Maya (Flat 6)',
]));
out.push(item('1', 'Where is Maya going?'));
out.push(item('2', 'What three things does she ask for?'));
out.push(item('3', 'When can she bring the key?'));
out.push(writers([
  'A request note: _Dear + name,_ → **the reason** (_I\'m visiting…_) → **requests** with _Could you…, please? / Can I…?_ → **details** (when, where) → **thanks** → name + phone / flat number.',
  'One request **per sentence**. Give details so the reader knows exactly what to do.',
]));
out.push(stage('6', 'Write with help', 9));
out.push(p('Dear ______,   I\'m ______________ from ______ to ______. Could you ______________, please? ______________. Can I ______________? Also, could you ______________?   Thank you so much! My number is ______.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['Capital letters and full stops', 'Could you / Can I + base verb', 'A reason and details (when, where)', 'Thanks + name + phone number']));
out.push(stage('6R', 'Share', 3));
out.push(p('Read one request before and after the fix.'));
out.push(stage('7', 'Write freely', 12));
out.push(p('Write a **real** request note (40 words or more) to a neighbour, a colleague or a family member. Ask for **two or three** things and give a reason.'));
out.push(...lines(6));
out.push(stage('7P', 'Respond', 5));
out.push(p('Read your partner\'s note as **the neighbour / colleague**. ★ _Clear!_  ✓ _Can you add the time?_  ? _Where is the key?_'));
out.push(stage('7R', 'Share', 4));
out.push(p('Two notes are read aloud. The class answers: _Of course!_ or _Sorry, I can\'t…_'));
out.push(hw('Write a **reply** to your partner\'s note as the neighbour or colleague (25+ words). Say yes to one request and no to one, with a reason.'));

// ======================= 2.7 =======================
out.push(pb());
out.push(h2('2.7  Review & Mediate: When\'s the next bus?'));
out.push(p('**Function:** telling a visitor about a timetable   ·   **Recycling:** Units 1–2   ·   **Exam practice:** A2 Key Reading Part 2, Writing Part 6, Listening Part 2'));
out.push(lesson('LESSON A – SPEAKING'));
out.push(stage('1', 'Get ready – Unit 2 quiz', 6));
out.push(p('In teams. Correct the mistakes! **1** She work in a bank.  **2** What time the library opens?  **3** I go never to the cinema.  **4** Look! Yazan plays a game.  **5** Where does he works?  **6** Could you to help me?'));
out.push(stage('2', 'Listen and read', 12));
out.push(p('**a**  Read the bus timetable on Rami\'s phone.'));
out.push(table(['AL-AMIR TRAVEL  ·  DAMASCUS → HOMS', ''], [
  ['Departures (Sat–Thu)', '07:00 · 09:30 · 12:00 · 15:00 · 18:30'],
  ['Departures (Fri)', '09:30 · 15:00 · 18:30  (no 07:00 or 12:00 bus)'],
  ['Journey time', 'about 2 hours'],
  ['Ticket', '20,000 SYP – buy online or at Window 4'],
], [1, 2], { headFill: C.orange }));
out.push(p('**b**  **Books closed.** Listen. Rami\'s brother Fadi is visiting. When does Fadi decide to travel?'));
out.push(p('**c**  **Books open.** Listen and read.'));
out.push(dlg('Track 2.13  Going back to Homs', [
  ['Fadi', 'Rami, what time is the next bus to Homs?'],
  ['Rami', 'Let me check… It\'s half past twelve now, so the next bus leaves at three.'],
  ['Fadi', 'Three? That\'s late. How long does it take?'],
  ['Rami', 'About two hours, so you arrive at five.'],
  ['Fadi', 'Hmm. Mum wants me home for lunch. Is there a bus in the morning?'],
  ['Rami', 'Yes, there\'s one at seven, but tomorrow is Friday – there\'s no seven o\'clock bus on Fridays. The first one is at half past nine.'],
  ['Fadi', 'OK, I can take the half past nine bus tomorrow. How much is the ticket?'],
  ['Rami', 'It\'s twenty thousand. You can buy it online or at Window 4.'],
  ['Fadi', 'Online is easier. Can you help me?'],
  ['Rami', 'Sure!'],
]));
out.push(sp());
out.push(box('Language box – telling someone about a timetable', [
  'Don\'t read the numbers like a list – **explain** them:',
  '_15:00_ → **The next bus leaves at three.**   _about 2 hours_ → **It takes about two hours, so you arrive at five.**   _Fri: no 07:00_ → **There\'s no seven o\'clock bus on Fridays.**',
  '**Useful phrases:** Let me check… · The next / first / last bus leaves at… · It takes about… · You arrive at… · There\'s no… on… · You can buy… · That\'s late / early.',
], C.lteal));
out.push(stage('3', 'Practise', 7));
out.push(p('Work in pairs. A has timetable A, B has timetable B. **Don\'t show it!** Your partner is a visitor. They ask; you explain. Then swap.'));
out.push(table(['Timetable A – Damascus → Latakia (bus)', 'Timetable B – National Museum, Damascus'], [[
  'Daily: 08:00 · 11:00 · 14:00 · 17:00  ·  Journey: about 4 hours  ·  Ticket: 30,000 SYP  ·  Fri: no 08:00 bus',
  'Open: Sat–Thu 9:00–16:00 · Fri closed · Tickets: 5,000 SYP (students 2,000) · Free guided tour in English: Mondays 11:00']], [1, 1]));
out.push(stage('3R', 'Perform', 5));
out.push(p('Two pairs perform. **Listener task:** write the first bus / opening time and the price.'));
out.push(stage('4', 'Your turn', 9));
out.push(p('Think of a **real** timetable in your life: your work shifts, a gym class, a bus or minibus you take, your children\'s school day. Explain it to your partner as if they are a visitor or a new colleague. Your partner asks questions.'));
out.push(stage('4R', 'Report – mediation', 6));
out.push(p('Tell the class about your **partner\'s** timetable, in your own words:  _Hiba takes the Mezzeh minibus. The first one leaves at six. It takes about twenty minutes, so she arrives at work at…_'));
out.push(p('**Listener task:** which timetable is the most difficult? ' + clinic));
out.push(lesson('LESSON B – WRITING AND UNIT CHECK'));
out.push(stage('5', 'Read – exam practice (A2 Key Reading Part 2)', 7));
out.push(p('Read about three people\'s days. For each question, choose **A**, **B** or **C**.'));
out.push(table(['A  Nour – nurse', 'B  Khaled – shop owner', 'C  Sana – university student'], [[
  'Nour works at a hospital in Damascus. She works at night three times a week, from eight in the evening to eight in the morning. On her days off she sleeps a lot and visits her parents in Daraa once a month.',
  'Khaled opens his clothes shop in Hamra Street at ten every morning and closes at nine at night. He doesn\'t close on Fridays – it\'s his busiest day! He never has lunch at home; his son brings it to the shop.',
  'Sana studies architecture. She has lectures from Sunday to Thursday, usually in the morning. In the afternoons she works in a café near the university. These days she\'s working on a big project, so she\'s studying every night.']], [1, 1, 1]));
['1  Who works on Fridays?', '2  Who works at night?', '3  Who doesn\'t eat at home in the middle of the day?', '4  Who is busier than usual at the moment?', '5  Who visits family in another city?'].forEach(t => out.push(p(t + '     A   B   C', { indent: 200, after: 40 })));
out.push(stage('6', 'Write with help', 9));
out.push(p('Your friend Sami wants to go to Homs on Friday. Write him a message about the Al-Amir bus. Use the timetable.'));
out.push(p('Hi Sami,   On Friday the first bus to Homs leaves at ______. There\'s no ______ bus on Fridays. It takes ______, so you arrive at ______. The ticket costs ______. You can buy it ______.   ______'));
out.push(stage('6P', 'Check together', 5));
out.push(check(['The correct Friday times', 'Journey time and arrival time', 'Price and where to buy', 'Own sentences – not a copy of the timetable']));
out.push(stage('7', 'Write freely – exam practice (A2 Key Writing Part 6)', 10));
out.push(box(null, [
  'Your English friend, Anna, wants to visit the National Museum in Damascus with you (use **Timetable B**). Write an email to Anna.',
  'In your email:  •  say **which day** you can go and **what time** it opens  •  say **how much** the tickets are  •  tell her about the **English tour**.',
  'Write **25 words or more**.',
], C.grey, C.navy));
out.push(...lines(5));
out.push(stage('✓', 'Unit 2 check', 15));
out.push(p('**A  Grammar and vocabulary.** Choose the correct answer.'));
[
  '1  Maya ___ the pharmacy at eight.   a) open   b) opens   c) is open',
  '2  Rami ___ cook.   a) don\'t   b) doesn\'t   c) isn\'t',
  '3  The bank closes ___ two o\'clock.   a) at   b) on   c) in',
  '4  I ___ late for class.   a) never am   b) am never   c) never',
  '5  Look! The children ___ in the garden.   a) play   b) plays   c) are playing',
  '6  Where ___ your sister work?   a) do   b) does   c) is',
  '7  ___ you lend me your pen, please?   a) Could   b) Do   c) Are',
  '8  9:45 = ___   a) quarter past nine   b) quarter to ten   c) half past nine',
].forEach(t => out.push(p(t, { indent: 200, after: 40 })));
out.push(p('**B  Listening (A2 Key Listening Part 2 style).** 🔊 **Track 2.14** Listen to Karim at City Gym. Complete the notes.'));
out.push(table(['CITY GYM – NEW TIMETABLE', ''], [['Swimming for women: day', '1 ______'], ['Swimming for women: time', '2 ______'], ['Yoga class starts at', '3 ______'], ['Gym closes on Fridays at', '4 ______'], ['Price for one month', '5 ______ SYP']], [2, 1], { headFill: C.navy }));
out.push(dlg('Track 2.14  Audio script (read after the check)', [
  ['Karim', 'Hello everyone, here is our new timetable. Swimming for women is now on Wednesdays, not Mondays. It\'s from six to eight in the evening. Our new yoga class starts at half past seven in the morning, every Sunday and Tuesday. On Fridays we open at two and we close at ten. And good news – the price for one month is still sixty thousand pounds. See you at the gym!'],
]));
out.push(p('**C  Writing.** Write a message to a new colleague (30+ words). Tell them about your daily routine at work and ask them one question about their day.'));
out.push(...lines(4));
out.push(sp());
out.push(box('I can… (Unit 2)  —  tick: 😀 well  🙂 OK  😐 not yet', [
  '☐ describe my daily routine',
  '☐ ask about and give times and opening hours',
  '☐ say how often I do things',
  '☐ talk about what is happening now and these days',
  '☐ ask about work and study with _do / does_',
  '☐ make and answer simple requests',
  '☐ explain a timetable to a visitor in my own words',
  '☐ write about my day, a notice, a survey report, an update, a profile and a request note',
], C.lblue, C.navy));

module.exports = out;
if (require.main === module) L.build(out, process.argv[2], 'Proactive English A2 · Book 1 · Syria Edition · Unit 2 · Student\'s Book');
